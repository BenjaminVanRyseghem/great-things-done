(ns ui.viewport
  (:use [jayq.core :only [$]])
  (:require [gtd.image-service :as image]
            [gtd.state :as state]
            [reagent.core :as reagent :refer [atom]]
            [secretary.core :as secretary]
            [ui.description-editor :as description-editor]
            [ui.due-date-picker :as due-date-picker]
            [ui.show-in-today-picker :as show-in-today-picker]
            [ui.tag-editor :as tag-editor]
            [utils.core :as utils]))

(def ^:private empty-inbox-image-size 300)
(def ^{:private true
       :no-docs true} shell (js/require "shell"))

(defn- render-empty-inbox
  []
  (let [image (image/empty-inbox)
        ratio (/ empty-inbox-image-size
                 (:height image))]
    [:div.empty-inbox
     [:div.image-container
      [:div.image-cropper
       [:img
        {:src (:src image)
         :style {:height (str empty-inbox-image-size "px")
                 :margin-left (str "-" (* ratio
                                          (/ (- (:width image)
                                                (:height image))
                                             2)) "px")}}]]
      [:p.image-description
       "Photo by "
       [:a
        {:on-click (fn [e]
                     (.openExternal shell
                                    (:url image))
                     (.preventDefault e))}
        (:author image)]]]
     [:div.message
      "Your Inbox is empty"]]))

(defn- render-empty-project
  []
  [:div.empty-project
   "Time to add tasks"])

(defn- render-to-dos
  [tasks]
  [:div.todo-container
   [:ul.todos
    (for [task tasks]
      [:li.todo
       [:p (:name task)]])]])

(defn- render-no-to-do
  []
  [:div.no-todo-container
   "NO to do"])

(defn- render-tasks-for
  [tasks]
  (let [tasks-done  (filter #(:done %)
                            tasks)
        tasks-to-do (remove #(:done %)
                            tasks)]
    (if (empty? tasks-to-do)
      [render-no-to-do]
      [render-to-dos tasks-to-do])))

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

(defmulti viewport-container-component ^{:private true
                                         :no-docs true} (fn [id] id))

(defmethod viewport-container-component "Inbox"
  [_]
  [:div.viewport-container
   {:id (str "viewport-inbox")}
   (let [inbox (state/inbox)
         tasks (:tasks inbox)]
     (if (empty? tasks)
       [render-empty-inbox]
       [render-tasks-for tasks]))])

(defmethod viewport-container-component :default
  [id]
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
       [render-tasks-for tasks])]))

(defn viewport-component
  [project-id]
  [:div.viewport
   [viewport-container-component project-id]])
