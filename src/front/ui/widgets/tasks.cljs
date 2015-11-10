; Copyright (c) 2015, Benjamin Van Ryseghem. All rights reserved.
; The use and distribution terms for this software are covered by the
; Eclipse Public License 1.0 (http://opensource.org/licenses/eclipse-1.0.php)
; which can be found in the file epl-v10.html at the root of this distribution.
; By using this software in any fashion, you are agreeing to be bound by
; the terms of this license.
; You must not remove this notice, or any other, from this software.

(ns ui.widgets.tasks
  (:use [jayq.core :only [$]])
  (:require [gtd.state :as state]
            [reagent.core :as reagent :refer [atom]]
            [ui.main :as ui]
            [ui.widgets.entity-editor :as entity-editor]
            [ui.widgets.name-editor :as name-editor]
            [utils.core :as utils]))

(defonce selected-task (atom nil))

(defn- build-to-do-class
  [task selected-task & [editing today]]
  (let [css-class "todo"
        css-class (if (= (:id task)
                         (:id selected-task))
                    (str css-class " selected")
                    css-class)
        css-class (if editing
                    (str css-class " editing")
                    css-class)
        css-class (if today
                    (str css-class " today")
                    css-class)]
    css-class))

(defn- render-todo
  [task]
  (let [editing (atom false)
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
                  (let [t (atom task)]
                    (doseq [[k v] @changes]
                      (reset! t (state/update-task! @t
                                                    k v)))
                    (reset! selected-task @t)
                    (close)
                    (js/setTimeout #(.focus ($ (str "#todo-" (:id @t))))
                                   0)))
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
               (:id task)
               (fn [k a o n]
                 (when-not (= (:id n)
                              (:id task))
                   (close))))
    (reset! handler (fn [e]
                      (when-not (ui/has-as-parent? (.-target e)
                                                   (.getElementById js/document
                                                                    (str "todo-" (:id task))))
                        (save))))
    (reagent/create-class
     {:component-did-mount (fn []
                             (when (= (:id @selected-task)
                                      (:id task))
                               (.focus ($ (str "#todo-" (:id task))))))
      :reagent-render (fn [task]
                        [:li
                         {:tab-index 0
                          :data-id (:id task)
                          :class (build-to-do-class task
                                                    @selected-task
                                                    @editing
                                                    (:today task))
                          :id (str "todo-" (:id task))
                          :on-key-down (fn [e]
                                         (if @editing
                                           (utils/key-code e
                                                           :enter save)
                                           (utils/key-code e
                                                           [:enter :prevent] save
                                                           [:space :prevent] #(state/update-task! task
                                                                                                  :done true)
                                                           [:up :prevent] #(.focus (.prev ($ ":focus")))
                                                           [:down :prevent] #(.focus (.next ($ ":focus")))
                                                           [:tab :prevent] (fn []
                                                                             (.focus (.get ($ ".toggle-hide-done")
                                                                                           0))
                                                                             (reset! selected-task
                                                                                     nil))
                                                           [:shift :tab :prevent] (fn []
                                                                                    (-> ($ (str "#todo-" (:id task)))
                                                                                        (.parent)
                                                                                        (.parent)
                                                                                        (.parent)
                                                                                        (.parent)
                                                                                        (.prev)
                                                                                        (.find ":tabbable")
                                                                                        (.last)
                                                                                        (.focus))
                                                                                    (reset! selected-task
                                                                                            nil)))))
                          :on-focus #(reset! selected-task task)
                          :on-double-click edit}
                         (if @editing
                           [entity-editor/render
                            task
                            "task-info"
                            update
                            #(name-editor/render task
                                                 (fn [t n]
                                                   (update t :name n))
                                                 :on-enter save
                                                 :auto-focus true)
                            save]
                           [:div
                            [:div.input.check-box
                             {:on-click #(state/update-task! task
                                                             :done true)}]
                            [:div.name (:name task)]
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
  (reagent/create-class
   {:component-did-mount (fn []
                           (when (= (:id @selected-task)
                                    (:id task))
                             (.focus ($ (str "#done-" (:id task))))))
    :reagent-render (fn [task]
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
                       [:div.name (:name task)]])}))

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

(defn render-only-todos-for
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
        [render-to-dos tasks-to-do project])]]))

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

(defn render-categorized-todos-for
  [tasks]
  (let [projects (distinct (map #(state/get-project-by-id (get-in % [:project :id]))
                                tasks))]
    [:div#tasks-container
     [:div.todo-container
      [:ul.today
       (doall (for [p (sort-by :name
                               projects)]
                ^{:key (:id p)}
                [:li.project
                 [:div.project-name
                  [:span (:name p)]]
                 (let [tasks   (filter #(:today %)
                                       (:tasks p))
                       n-tasks (count tasks)]
                   (if (:show-only-first p)
                     [:div
                      [:ul.tasks.todos
                       [render-todo (first tasks)]]
                      (when (> n-tasks
                               1)
                        [:div.show-more
                         {:on-click (fn []
                                      (state/update-project! p
                                                             :show-only-first false))}
                         "Show more"])]
                     [:div
                      [:ul.tasks.todos
                       (doall (for [t tasks]
                                ^{:key (:id t)}
                                [render-todo t]))]
                      (when (> n-tasks
                               1)
                        [:div.show-more
                         {:on-click (fn []
                                      (state/update-project! p
                                                             :show-only-first true))}
                         "Show only first"])]))]))]]]))
