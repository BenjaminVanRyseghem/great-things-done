(ns ui.main
  (:use [jayq.core :only [$]])
  (:require [gtd.state :as state]
            [reagent.core :as reagent :refer [atom]]))

(def ^{:private true
       :no-docs true} shell (js/require "shell"))

(defonce ^:private selected-task (atom nil))
(defonce ^:private active-task (atom nil))

(defn- build-to-do-class
  [task selected-task]
  (let [css-class "todo"
        css-class (if (= (:id task)
                         (:id selected-task))
                    (str css-class " selected")
                    css-class)
        css-class (if (:today task)
                    (str css-class " today")
                    css-class)]
    css-class))

(defn- plain-build-to-to-name-editor
  [task]
  [:div.name
   {:id (str "todo-name-" (:id task))
    :placeholder "Add a name"
    :class (if (empty? (:name task))
             "empty"
             "")}
   (:name task)])

(defn- build-to-do-name-editor
  [task callback]
  (with-meta plain-build-to-to-name-editor
    {:component-did-mount #(.editable ($ (str "#todo-name-" (:id task)))
                                     "click"
                                     (clj->js {:callback (fn [event]
                                                           (if (empty? (.-value event))
                                                             (.html (.-target event)
                                                                    (.-old_value event))
                                                             (callback task
                                                                       (.-value event))))}))}))

(defn- change-task-name
  [task new-name]
  (state/update-task! task
                      :name new-name))

(defn- render-todo
  [task]

  [:li
   {:class (build-to-do-class task
                              @selected-task)
    :id (str "todo-" (:id task))
    :on-click (fn [e]
                (when (= (.-target e)
                         (.get ($ (str "#todo-" (:id task)))
                               0))
                  (reset! selected-task task)))}
   [:div.input.check-box
    {:on-click #(state/update-task! task
                                    :done true)}]
   [(build-to-do-name-editor task
                             change-task-name)
    task]])

(defn- render-to-dos
  [tasks]
  [:div
   [:ul.todos
    (doall (for [task tasks]
             ^{:key (:id task)}
             [render-todo
              task]))]])

(defn render-done
  [task]
  [:li
   {:class (build-to-do-class task
                              @selected-task)
    :id (str "done-" (:id task))
    :on-click (fn [e]
                (when (= (.-target e)
                         (.get ($ (str "#done-" (:id task)))
                               0))
                  (reset! selected-task task)))}
   [:div.input.check-box.checked
    {:on-click #(state/update-task! task
                                    :done false)}]
   [:div.name (:name task)]])

(defn- render-no-to-do
  []
  [:div.no-todo-container
   "NO to do"])

(defn- render-dones
  [project tasks]
  [:div
   [:span.toggle-hide-done
    {:on-click #(state/update-project! project
                                       :hide-done true)}
    "Hide done"]
   [:ul.dones
    (doall (for [task tasks]
             ^{:key (:id task)}
             [render-done
              task]))]])

(defn- render-no-done
  []
  [:div.no-done-container
   "NO done"])

(defn- render-hidden-done
  [project dones]
  [:span.toggle-hide-done
   {:on-click #(state/update-project! project
                                      :hide-done false)}
   (str (count dones) " more done...")])

(defn plain-render-tasks-for
  [project tasks]
  (let [ts          (map #(state/get-task-by-id (:id %))
                         tasks)
        tasks-done  (filter #(:done %)
                            ts)
        tasks-to-do (remove #(:done %)
                            ts)]
    [:div#tasks-container
     [:div.todo-container
      (if (empty? tasks-to-do)
        [render-no-to-do]
        [render-to-dos tasks-to-do])]
     [:div.done-container
      (if (:hide-done project)
        [render-hidden-done
         project
         tasks-done]
        (if (empty? tasks-done)
          [render-no-done]
          [render-dones
           project
           tasks-done]))]]))

(def ^:private render-tasks-for
  (with-meta plain-render-tasks-for
    {:component-did-mount
     (fn []
       (.perfectScrollbar ($ :#tasks-container)
                          (clj->js {:suppressScrollX true})))}))

(defmulti main-container-component (fn [id] id))

(defn- new-task
  [project]
  (let [task (state/register-task ""
                                  :project project

                                  ;;; should parent be the selected task?
                                  :parent project)]
    (reset! selected-task task)))

(defn- render-toolbar-action
  [text css-class icon function]
  [:div
   {:class (str "item " css-class)
    :on-click function}
   [:div.icon
    {:title text}
    [:i
     {:class (str "fa fa-" icon)}]]
   [:span.text text]])

(defn- render-left-group
  [items]
  [:div.group.left
   (doall (for [item items]
            ^{:key (:text item)}
            [render-toolbar-action
             (:text item)
             (:css-class item)
             (:icon item)
             (:function item)]))])

(defn- render-right-group
  [items]
  [:div.group.right
   {:class (if @selected-task
             ""
             "disabled")}
   (doall (for [item items]
            ^{:key (:text item)}
            [render-toolbar-action
             (:text item)
             (:css-class item)
             (:icon item)
             (:function item)]))])

(defn- render-toolbar-groups
  [project]
  [:div.items
   [render-left-group [{:text "New"
                        :css-class "new"
                        :icon "plus"
                        :function #(new-task project)}]]
   [render-right-group [{:text "Resolve"
                         :css-class "resolve"
                         :icon "check"
                         :function #()}
                        {:text "Not Today"
                         :css-class "today"
                         :icon "star-o"
                         :function #()}
                        {:text "Move"
                         :css-class "move"
                         :icon "arrow-right"
                         :function #()}]]])

(defn- render-toolbar-search
  []
  [:div.search
   [:div.search-container
    [:div.icon
     [:i.fa.fa-search]]
    [:input
     {:placeholder "Search"}]]])

(defmulti main-toolbar-component (fn [id _] id))

(defmethod main-toolbar-component :default
  [_ project]
  [:div.main-toolbar
   [:div.toolbar-container
    [render-toolbar-groups project]
    [render-toolbar-search]]])

(defn main-component
  [project-id]
  [:div.main
   {:on-click (fn [e]
                (when (= (.-target e)
                         (.get ($ :#tasks-container)
                               0))
                  (reset! selected-task nil)))}
   [main-container-component
    project-id]])
