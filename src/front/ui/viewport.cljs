(ns ui.viewport
  (:use [jayq.core :only [$]])
  (:require [gtd.image-service :as image]
            [gtd.state :as state]
            [reagent.core :as reagent :refer [atom]]
            [secretary.core :as secretary]
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

(defn- plain-tag-editor
  [tags]
  [:input.tag-editor
   {:id "project-tag-editor"
    :type "text"}])

(defn tags-changed
  [project tags]
  (state/update-project! project
                         :tags tags))

(defn tag-editor
  [project]
  (with-meta plain-tag-editor
    {:component-did-mount
     (fn []
       (.tagEditor  ($ :#project-tag-editor)
                    "destroy")
       (.tagEditor  ($ :#project-tag-editor)
                    (clj->js {:initialTags (:tags project)
                              :delimiter ",; "
                              :placeholder "Add tags"
                              :onChange (fn [field editor tags]
                                          (tags-changed project tags))
                              :autocomplete {:delay 0
                                             :position {:collision "flip"}
                                             :source (state/get-tags)}})))}))

(defn- description-changed
  [project description]
  (state/update-project! project
                         :description description))

(defn- plain-description-editor
  [project]
  [:div
   {:id "description-output"
    :placeholder "Add a description"
    :class (if (empty? (:description project))
             "empty"
             "")}])

(defn- inject-md
  [project]
  (set! (.-innerHTML (.get ($ :#description-output)
                           0))
        (.parse js/micromarkdown
                (:description project))))

(defn- description-editor
  [project]
  (with-meta plain-description-editor
    {:component-did-mount (fn []
                            (inject-md project)
                            (.attr ($ :#description-output)
                                   "editable-src"
                                   (:description project))
                            (.editable ($ :#description-output)
                                       "click"
                                       (fn [event]
                                         (when (= (.-value event)
                                                  (.-old_value event))
                                           (inject-md project))
                                         (description-changed project
                                                              (.-value event)))))}))

(defmulti viewport-container-component ^{:private true
                                         :no-docs true} (fn [id] id))

(defmethod viewport-container-component "Inbox" [_]
  [:div.viewport-container
   {:id (str "viewport-inbox")}
   (let [inbox (state/inbox)
         tasks (:tasks inbox)]
     (if (empty? tasks)
       [render-empty-inbox]
       [render-tasks-for tasks]))])

(defmethod viewport-container-component :default [id]
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
       [(tag-editor project)
        (:tags project)]]
      [:div.due-date
       "(:due-date project)"]
      [:div.description
       [(description-editor project)
        project]]]
     (if (empty? tasks)
       [render-empty-project]
       [render-tasks-for tasks])]))

(defn viewport-component
  [project-id]
  [:div.viewport
   [viewport-container-component project-id]])
