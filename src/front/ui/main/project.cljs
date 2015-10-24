(ns ui.main.project
  (:use [jayq.core :only [$]])
  (:require [gtd.state :as state]
            [reagent.core :as reagent :refer [atom]]
            [ui.entity-editor :as entity-editor]
            [ui.main :as main]
            [utils.core :as utils]))

(def ^{:private true
       :no-docs true} shell (js/require "shell"))

(defn- render-empty-project
  []
  [:div.empty-project
   "Time to add tasks"])

(defn- render-main-container
  [id]
  (reagent/create-class
   {:component-did-mount (fn []
                           (.perfectScrollbar ($ :.main-viewport)
                                              (clj->js {:suppressScrollX true})))
    ;;       :should-component-update (fn [nextProps nextState]
    ;;                                  (js* "console.log(this.props)")
    ;;                                  (js* "console.log(nextProps )")
    ;;                                  (js* "debugger;")
    ;;                                  (not (nil? project)))
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
                             #(utils/goto (str "/project/"
                                               (:id %)))
                             ]
                            (if (empty? tasks)
                              [render-empty-project]
                              [main/render-tasks-for
                               project
                               tasks])]
                           [main/main-toolbar-component id project]])))}))

;; (def ^:private render-main-container
;;   (with-meta plain-render-main-container
;;     {:component-did-mount
;;      (fn []
;;        (.perfectScrollbar ($ :.main-viewport)
;;                           (clj->js {:suppressScrollX true})))}))

(defmethod main/main-container-component :default
  [id]
  [render-main-container id])
