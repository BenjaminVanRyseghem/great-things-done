(ns ui.viewport.project
  (:require [gtd.state :as state]
            [reagent.core :as reagent :refer [atom]]
            [ui.description-editor :as description-editor]
            [ui.due-date-picker :as due-date-picker]
            [ui.show-in-today-picker :as show-in-today-picker]
            [ui.tag-editor :as tag-editor]
            [ui.viewport :as viewport]))

(def ^{:private true
       :no-docs true} shell (js/require "shell"))

(defn- tags-changed
  [project tags]
  (state/update-project! project
                         :tags tags))

(defn- due-date-changed
  [project date]
  (state/update-project! project
                         :due-date date))

(defn- show-before-changed
  [project days]
  (state/update-project! project
                         :show-before days))

(defn- description-changed
  [project description]
  (state/update-project! project
                         :description description))

(defn- render-empty-project
  []
  [:div.empty-project
   "Time to add tasks"])

(defmethod viewport/viewport-container-component :default
  [id task-id]
  (let [project (state/get-project-by-id id)
        tasks   (:tasks project)]
    [:div.viewport-container
     {:id (str "viewport-project-" id)}
     [:div.project-info
      [:div
       {:class (if (:today project)
                 "name today"
                 "name")}
       [:div.input]
       [:div.project-name
        (:name project)]]
      [:div.tags
       [:i.fa.fa-fw.fa-tags]
       [tag-editor/render
        project
        tags-changed]]
      [:div.due-date
       [:i.fa.fa-fw.fa-clock-o]
       [due-date-picker/render
        project
        due-date-changed]
       [show-in-today-picker/render
        project
        show-before-changed]]
      [:div.description
       [:i.fa.fa-fw.fa-pencil-square-o]
       [description-editor/render
        project
        description-changed]]]
     (if (empty? tasks)
       [render-empty-project]
       [viewport/render-tasks-for tasks task-id])]))
