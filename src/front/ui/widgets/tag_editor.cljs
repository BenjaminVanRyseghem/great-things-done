(ns ui.widgets.tag-editor
  (:use [jayq.core :only [$]])
  (:require [gtd.state :as state]
            [reagent.core :as reagent :refer [atom]]))

(defn- plain-tag-editor
  []
  [:input.tag-editor
   {:id "project-tag-editor"
    :type "text"}])

(defn- build
  [project callback]
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
                                          (callback project tags))
                              :autocomplete {:delay 0
                                             :position {:collision "flip"}
                                             :source (state/get-tags)}})))}))

(defn render
  [project callback]
  [(build project
          callback)])
