; Copyright (c) 2015, Benjamin Van Ryseghem. All rights reserved.
; The use and distribution terms for this software are covered by the
; Eclipse Public License 1.0 (http://opensource.org/licenses/eclipse-1.0.php)
; which can be found in the file epl-v10.html at the root of this distribution.
; By using this software in any fashion, you are agreeing to be bound by
; the terms of this license.
; You must not remove this notice, or any other, from this software.

(ns ui.main.project
  (:use [jayq.core :only [$]])
  (:require [gtd.app-menu :as app-menu]
            [gtd.state :as state]
            [reagent.core :as reagent :refer [atom]]
            [secretary.core :as secretary]
            [ui.widgets.entity-editor :as entity-editor]
            [ui.widgets.name-editor :as name-editor]
            [ui.main :as main]
            [ui.main.toolbar :as toolbar]
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
  (let [project     (state/get-project-by-id id)
        tasks       (:tasks project)
        update-menu (fn []
                      (app-menu/project-menu #(toolbar/new-task project
                                                                main/selected-task)
                                             :selected @main/selected-task
                                             :resolve-task #(toolbar/resolve-task main/selected-task)
                                             :unresolve-task #(toolbar/unresolve-task main/selected-task)
                                             :today #(toolbar/today main/selected-task)
                                             :not-today #(toolbar/not-today main/selected-task)
                                             :move #(toolbar/move main/selected-task)))]
    (update-menu)
    (add-watch main/selected-task
               :viewport-change
               #(update-menu))
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
                             [main/main-toolbar-component id]])))})))

(defmethod main/main-container-component :default
  [id]
  [render-main-container id])
