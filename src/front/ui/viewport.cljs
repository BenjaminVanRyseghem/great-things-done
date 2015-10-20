(ns ui.viewport
  (:use [jayq.core :only [$]])
  (:require [reagent.core :as reagent :refer [atom]]))

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

(defn- render-no-to-do
  []
  [:div.no-todo-container
   "NO to do"])

(defn render-tasks-for
  [tasks]
  (let [tasks-done  (filter #(:done %)
                            tasks)
        tasks-to-do (remove #(:done %)
                            tasks)]
    [:div.tasks
     (if (empty? tasks-to-do)
       [render-no-to-do]
       [render-to-dos tasks-to-do])]))

(defmulti viewport-container-component (fn [id _] id))

(defn viewport-component
  [project-id task-id]
  [:div.viewport
   [viewport-container-component
    project-id
    task-id]])
