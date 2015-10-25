(ns ui.main.project
  (:use [jayq.core :only [$]])
  (:require [gtd.state :as state]
            [reagent.core :as reagent :refer [atom]]
            [secretary.core :as secretary]
            [ui.entity-editor :as entity-editor]
            [ui.name-editor :as name-editor]
            [ui.main :as main]
            [utils.core :as utils]))

(def ^{:private true
       :no-docs true} shell (js/require "shell"))

(defn- name-changed
  [entity new-name]
  (let [url-builder #(str "/project/"
                          (:id %))
        new-entity  (state/update-project! entity
                                          :name new-name
                                          :callback #(secretary/dispatch! (url-builder %)))]
    (utils/goto (url-builder new-entity))))

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
                             #(name-editor/render project
                                                  name-changed)]
                            (if (empty? tasks)
                              [render-empty-project]
                              [main/render-tasks-for
                               project
                               tasks])]
                           [main/main-toolbar-component id project]])))})))

(defmethod main/main-container-component :default
  [id]
  [render-main-container id])
