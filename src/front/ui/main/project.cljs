(ns ui.main.project
  (:use [jayq.core :only [$]])
  (:require [gtd.state :as state]
            [reagent.core :as reagent :refer [atom]]
            [ui.entity-editor :as entity-editor]
            [ui.main :as main]))

(def ^{:private true
       :no-docs true} shell (js/require "shell"))

(defn- render-empty-project
  []
  [:div.empty-project
   "Time to add tasks"])

(defn- render-main-container
  [id]
  (let [project (state/get-project-by-id id)
        tasks   (:tasks project)]
  (reagent/create-class
   {:component-did-mount (fn []
                           (.perfectScrollbar ($ :.main-viewport)
                                              (clj->js {:suppressScrollX true})))
    :reagent-render (fn [id]
                      (let [project (state/get-project-by-id id)
                            tasks   (:tasks project)]
                        (if (nil? project)
                          [:div.no-project]
                          [:div.main-container
                           [:div.main-viewport
                            {:id (str "main-project-" id)}
                            [entity-editor/render
                             project
                             "project-info"
                             state/update-project!
                             #(str "/project/"
                                   (:id %))]
                            (if (empty? tasks)
                              [render-empty-project]
                              [main/render-tasks-for
                               project
                               tasks])]
                           [main/main-toolbar-component id project]])))})))

(defmethod main/main-container-component :default
  [id]
  [render-main-container id])
