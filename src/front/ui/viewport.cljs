(ns ui.viewport
  (:use [jayq.core :only [$]])
  (:require [gtd.state :as state]
            [reagent.core :as reagent :refer [atom]]))

(def ^{:private true
       :no-docs true} shell (js/require "shell"))

(defn- build-to-do-class
  [task task-id]
  (let [css-class "todo "
        css-class (if (= (:id task)
                         task-id)
                    (str css-class "selected ")
                    css-class)
        css-class (if (:today task)
                    (str css-class "today ")
                    css-class)]
    css-class))

(defn render-todo
  [task task-id]
  [:li.todo
   {:class (build-to-do-class task
                              task-id)}
   [:div.input.check-box
    {:on-click (fn []
                 (state/update-task! task
                                     :done true))}]
   [:p (:name task)]])

(defn- render-to-dos
  [tasks task-id]
  [:div.todo-container
   [:ul.todos
    (doall (for [task tasks]
             ^{:key (:id task)}
             [render-todo
              task
              task-id]))]])

(defn render-done
  [task task-id]
  [:li.todo
   {:class (build-to-do-class task
                              task-id)}
   [:div.input.check-box
    {:on-click (fn []
                 (state/update-task! task
                                     :done false))}]
   [:p (:name task)]])

(defn- render-no-to-do
  []
  [:div.no-todo-container
   "NO to do"])

(defn- render-dones
  [tasks task-id]
  [:div.done-container
   [:ul.doness
    (doall (for [task tasks]
             ^{:key (:id task)}
             [render-done
              task
              task-id]))]])

(defn- render-no-done
  []
  [:div.no-done-container
   "NO done"])

(defn plain-render-tasks-for
  [tasks task-id]
  (let [ts          (map #(state/get-task-by-id (:id %))
                         tasks)
        tasks-done  (filter #(:done %)
                            ts)
        tasks-to-do (remove #(:done %)
                            ts)]
    [:div#tasks-container
     [:div
      "To Do"
      (if (empty? tasks-to-do)
        [render-no-to-do]
        [render-to-dos tasks-to-do task-id])]
     [:div
      "Done"
      (if (empty? tasks-done)
        [render-no-done]
        [render-dones tasks-done task-id])]]))

(def ^:private render-tasks-for
  (with-meta plain-render-tasks-for
    {:component-did-mount
     (fn []
       (.perfectScrollbar ($ :#tasks-container)
                          (clj->js {:suppressScrollX true})))}))

(defmulti viewport-container-component (fn [id _] id))

(defn viewport-component
  [project-id task-id]
  [:div.viewport
   [viewport-container-component
    project-id
    task-id]])
