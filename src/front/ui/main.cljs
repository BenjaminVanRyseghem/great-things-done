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

(defn render-todo
  [task]

  [:li
   {:class (build-to-do-class task
                              @selected-task)
    :on-click (fn [e]
                (reset! selected-task task)
                (.stopPropagation e))}
   [:div.input.check-box
    {:on-click (fn []
                 (state/update-task! task
                                     :done true))}]
   [:p (:name task)]])

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
    :on-click (fn [e]
                (reset! selected-task task)
                (.stopPropagation e))}
   [:div.input.check-box.checked
    {:on-click (fn []
                 (state/update-task! task
                                     :done false))}]
   [:p (:name task)]])

(defn- render-no-to-do
  []
  [:div.no-todo-container
   "NO to do"])

(defn- render-dones
  [project tasks]
  [:div
   [:div.toggle-hide-done
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
  [:div.toggle-hide-done
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

(defmulti main-toolbar-component (fn [id] id))

(defmethod main-toolbar-component :default
  [_]
  [:div.main-toolbar
   [:div.toolbar-container
    [:div.items
     [:div.group.left
      [:div.item.new
       [:div.icon
        [:i.fa.fa-plus]]
       "New"]]
     [:div.group.right
      [:div.item.resolve
       [:div.icon
        [:i.fa.fa-check]]
       "Resolve"]
      [:div.item.today
       [:div.icon
        [:i.fa.fa-star-o]]
       "Today"]
      [:div.item.move
       [:div.icon
        [:i.fa.fa-arrow-right]]
       "Move"]]]
    [:div.search
     [:div.search-container
      [:input
       {:placeholder "Search"}]]]]])

(defn main-component
  [project-id]
  [:div.main
   {:on-click #(reset! selected-task nil)}
   [main-container-component
    project-id]])
