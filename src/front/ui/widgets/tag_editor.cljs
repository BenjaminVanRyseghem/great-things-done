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
  [entity callback]
  (with-meta plain-tag-editor
    {:component-did-mount
     (fn []
       (.tagEditor  ($ (str "#entity-tag-editor" (:id entity)))
                    "destroy")
       (.tagEditor  ($ (str "#entity-tag-editor" (:id entity)))
                    (clj->js {:initialTags (:tags entity)
                              :delimiter ",; "
                              :placeholder "Add tags"
                              :onChange (fn [field editor tags]
                                          (callback entity tags))
                              :autocomplete {:delay 0
                                             :position {:collision "flip"}
                                             :source (state/get-tags)}})))}))

(defn render
  [entity callback]
  [(build entity
          callback) entity])
