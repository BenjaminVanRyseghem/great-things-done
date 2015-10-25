(ns ui.widgets.tag-editor
  (:use [jayq.core :only [$]])
  (:require [gtd.state :as state]
            [reagent.core :as reagent :refer [atom]]))

(defn- plain-tag-editor
  [entity]
  [:input.tag-editor
   {:id (str "entity-tag-editor" (:id entity))
    :type "text"}])

(defn- build
  [entity callback on-enter]
  (with-meta plain-tag-editor
    {:component-did-mount
     (fn []
       (let [input ($ (str "#entity-tag-editor" (:id entity)))]
         (.tagEditor  input
                      "destroy")
         (.tagEditor  input
                      (clj->js {:initialTags (:tags entity)
                                :delimiter ",; "
                                :placeholder "Add tags"
                                :onChange (fn [field editor tags]
                                            (callback entity tags))
                                :onEnter  on-enter
                                :autocomplete {:delay 0
                                               :position {:collision "flip"}
                                               :source (state/get-tags)}}))))}))

(defn render
  [entity callback & [on-enter]]
  [(build entity
          callback
          on-enter) entity])
