(ns ui.main
  (:use [jayq.core :only [$]])
  (:require [gtd.state :as state]
            [reagent.core :as reagent :refer [atom]]
            [ui.widgets.entity-editor :as entity-editor]
            [ui.widgets.name-editor :as name-editor]))

(defonce ^:private selected-task (atom nil))

(defn- build-to-do-class
  [task selected-task & [editing]]
  (let [css-class "todo"
        css-class (if (= (:id task)
                         (:id selected-task))
                    (str css-class " selected")
                    css-class)
        css-class (if editing
                    (str css-class " editing")
                    css-class)
        css-class (if (:today task)
                    (str css-class " today")
                    css-class)]
    css-class))

(defn- has-as-parent?
  [node match]
  (if (= node
         match)
    true
    (if (.-parentNode node)
      (has-as-parent? (.-parentNode node)
                      match)
      false)))

(defn- render-todo
  [t]
  (let [task    (atom t)
        editing (atom false)
        handler (atom nil)
        changes (atom {})
        update  (fn [task & [k v]]
                  (swap! changes assoc k v))
        close  (fn []
                 (reset! changes {})
                 (reset! editing false)
                 (.off ($ js/document)
                       "click"
                       @handler))
        save    (fn []
                  (doseq [[k v] @changes]
                    (reset! task (state/update-task! @task
                                                      k v)))
                  (reset! selected-task @task)
                  (close)
                  (js/setTimeout #(.focus ($ (str "#todo-" (:id @task))))
                                 0))
        edit    (fn []
                  (when-not @editing
                    (reset! editing true)
                    (.removeAllRanges (.getSelection js/document))
                    (.on ($ js/document)
                         "keydown"
                         #(when (= (.-keyCode %)
                                   27) ; Escape
                            (close)))
                    (.on ($ js/document)
                         "click"
                         @handler)))]
    (add-watch selected-task
               (:id @task)
               (fn [k a o n]
                 (when-not (= (:id n)
                              (:id @task))
                   (close))))
    (reset! handler (fn [e]
                      (when-not (has-as-parent? (.-target e)
                                                (.getElementById js/document
                                                                 (str "todo-" (:id @task))))
                        (save))))
    (reagent/create-class
     {:reagent-render (fn [_]
                        [:li
                         {:tab-index 0
                          :data-id (:id @task)
                          :class (build-to-do-class @task
                                                    @selected-task
                                                    @editing)
                          :id (str "todo-" (:id @task))
                          :on-key-down (fn [e]
                                         (if @editing
                                           (when (= (.-keyCode e)
                                                    13)
                                             (save))
                                           (do
                                             (when (= (.-keyCode e)
                                                      13)
                                               (edit)
                                               (.preventDefault e))
                                             (when (= (.-keyCode e)
                                                      32)
                                               (state/update-task! task
                                                                   :done true)
                                               (.preventDefault e))
                                             (when (= (.-keyCode e)
                                                      38)
                                               (.focus (.prev ($ ":focus")))
                                               (.preventDefault e))
                                             (when (= (.-keyCode e)
                                                      40)
                                               (.focus (.next ($ ":focus")))
                                               (.preventDefault e))
                                             (when (and (= (.-keyCode e)
                                                           9)
                                                        (not (.-shiftKey  e)))
                                               (.focus (.get ($ ".toggle-hide-done")
                                                             0))
                                               (reset! selected-task
                                                       nil)
                                               (.preventDefault e))
                                             (when (and (= (.-keyCode e)
                                                           9)
                                                        (.-shiftKey  e))
                                               (-> ($ (str "#todo-" (:id @task)))
                                                   (.parent)
                                                   (.parent)
                                                   (.parent)
                                                   (.parent)
                                                   (.prev)
                                                   (.find ":tabbable")
                                                   (.last)
                                                   (.focus))
                                               (reset! selected-task
                                                       nil)
                                               (.preventDefault e)))))
                          :on-focus #(reset! selected-task @task)
                          :on-double-click edit}
                         (if @editing
                           [entity-editor/render
                            @task
                            "task-info"
                            update
                            #(name-editor/render @task
                                                 (fn [t n]
                                                   (update t :name n))
                                                 save)
                            save]
                           [:div
                            [:div.input.check-box
                             {:on-click #(state/update-task! @task
                                                             :done true)}]
                            [:div.name (:name @task)]
                            [:i.fa.fa-arrows.handle]])])})))

(defn- update-tasks-order
  [project item]
  (let [id             (-> item
                           (.attr "id"))
        ids            (-> item
                           (.parent)
                           (.sortable "toArray"))
        index          (-> ids
                           (.indexOf id))
        id             (-> item
                           (.attr "data-id"))
        tasks          (:tasks project)
        task           (first (filter #(= (:id %)
                                          id)
                                      tasks))
        tasks          (filter #(not= (:id %)
                                      id)
                               tasks)
        [before after] (split-at index
                                 tasks)
        tasks          (concat before [task] after)]
    (state/update-project! project
                           :tasks tasks)))

(defn- render-to-dos
  [t p]
  (let [project (state/get-project-by-id (:id p))
        tasks   (filter #(not (:done %))
                        (:tasks project))]
    (reagent/create-class
     {:component-did-mount (fn []
                             (-> ($ ".tasks.todos")
                                 (.sortable (clj->js {:items "> li"
                                                      :handle ".handle"
                                                      :update (fn [event ui]
                                                                (update-tasks-order project
                                                                                    (.-item ui))
                                                                (-> ($ ".tasks.todos")
                                                                    (.sortable "cancel")))}))
                                 (.disableSelection)))
      :reagent-render (fn [tasks]
                        [:div
                         [:ul.tasks.todos
                          (doall (for [task tasks]
                                   ^{:key (:id task)}
                                   [render-todo
                                    task]))]])})))

(defn render-done
  [task]
  [:li
   {:tab-index 0
    :class (build-to-do-class task
                              @selected-task)
    :id (str "done-" (:id task))
    :on-key-down (fn [e]
                   (do
                     (when (= (.-keyCode e)
                              32)
                       (state/update-task! task
                                           :done false)
                       (.preventDefault e))
                     (when (= (.-keyCode e)
                              38)
                       (.focus (.prev ($ ":focus")))
                       (.preventDefault e))
                     (when (= (.-keyCode e)
                              40)
                       (.focus (.next ($ ":focus")))
                       (.preventDefault e))
                     (when (and (= (.-keyCode e)
                                   9)
                                (not (.-shiftKey  e)))
                       (.focus (.get ($ "#search-field")
                                     0))
                       (reset! selected-task
                               nil)
                       (.preventDefault e))
                     (when (and (= (.-keyCode e)
                                   9)
                                (.-shiftKey  e))
                       (.focus (.get ($ ".toggle-hide-done")
                                     0))
                       (reset! selected-task
                               nil)
                       (.preventDefault e))))
    :on-focus (fn [e]
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
  [:span
   [:span.toggle-hide-done
    {:tab-index 0
     :on-key-down (fn [e]
                    (when (= (.-keyCode e)
                             32)
                      (state/update-project! project
                                             :hide-done true)
                      (js/setTimeout #(.focus (.get ($ ".toggle-hide-done")
                                                    0))
                                     0)))
     :on-click #(state/update-project! project
                                       :hide-done true)}
    "Hide done"]
   [:ul.tasks.dones
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
   {:tab-index 0
    :on-key-down (fn [e]
                   (when (= (.-keyCode e)
                            32)
                     (state/update-project! project
                                            :hide-done false)
                     (js/setTimeout #(.focus (.get ($ ".toggle-hide-done")
                                                   0))
                                    0)))
    :on-click #(state/update-project! project
                                      :hide-done false)}
   (str (count dones) " more done...")])

(defn render-tasks-for
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
        [render-to-dos tasks-to-do project])]
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
    [:input#search-field
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
   {:on-mouse-down (fn [e]
                     (when (or (has-as-parent? (.-target e)
                                               (.get ($ :.project-info)
                                                     0))
                               (= (.-target e)
                                  (.get ($ :#tasks-container)
                                        0))
                               (= (.-target e)
                                  (.get ($ :.main-viewport)
                                        0)))
                       (reset! selected-task nil)))}
   [main-container-component
    project-id]])
