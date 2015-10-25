(ns ui.entity-editor
  (:use [jayq.core :only [$]])
  (:require [reagent.core :as reagent :refer [atom]]
            [ui.description-editor :as description-editor]
            [ui.due-date-picker :as due-date-picker]
            [ui.name-editor :as name-editor]
            [ui.show-in-today-picker :as show-in-today-picker]
            [ui.tag-editor :as tag-editor]))

(defn- tags-changed
  [entity tags update-fn]
  (update-fn entity
             :tags tags))

(defn- due-date-changed
  [entity date update-fn]
  (update-fn entity
             :due-date date))

(defn- show-before-changed
  [entity days update-fn]
  (update-fn entity
             :show-before days))

(defn- description-changed
  [entity description update-fn]
  (update-fn entity
             :description description))

(defn- completion-changed
  [entity update-fn]
  (update-fn entity
             :done true))

(defn render
  [entity css-class update-fn name-editor]
  [:div
   {:class css-class}
   [:div.name
    {:class (when (:today entity)
              "today")}
    [:div.input.check-box
     {:on-click #(completion-changed entity update-fn)}]
    [name-editor]]
   [:div.tags
    [:i.fa.fa-fw.fa-tags]
    [tag-editor/render
     entity
     #(tags-changed %1 %2 update-fn)]]
   [:div.due-date
    [:i.fa.fa-fw.fa-clock-o]
    [due-date-picker/render
     entity
     #(due-date-changed %1 %2 update-fn)]
    [show-in-today-picker/render
     entity
     #(show-before-changed %1 %2 update-fn)]]
   [:div.description
    [:i.fa.fa-fw.fa-pencil-square-o]
    [description-editor/render
     entity
     #(description-changed %1 %2 update-fn)]]])
