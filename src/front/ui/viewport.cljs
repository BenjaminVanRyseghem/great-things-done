(ns ui.viewport
  (:use [jayq.core :only [$]])
  (:require [reagent.core :as reagent :refer [atom]]))

(def ^{:private true
       :no-docs true} shell (js/require "shell"))

(defn- render-to-dos
  [tasks]
  [:div.todo-container
   [:ul.todos
    (for [task tasks]
      ^{:key (:id task)}
      [:li.todo
       [:p (:name task)]])]])

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

(defmulti viewport-container-component (fn [id] id))

(defn viewport-component
  [project-id]
  [:div.viewport
   [viewport-container-component project-id]])
