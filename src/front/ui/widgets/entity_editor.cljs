; Copyright (c) 2015, Benjamin Van Ryseghem. All rights reserved.
; The use and distribution terms for this software are covered by the
; Eclipse Public License 1.0 (http://opensource.org/licenses/eclipse-1.0.php)
; which can be found in the file epl-v10.html at the root of this distribution.
; By using this software in any fashion, you are agreeing to be bound by
; the terms of this license.
; You must not remove this notice, or any other, from this software.

(ns ui.widgets.entity-editor
  (:use [jayq.core :only [$]])
  (:require [reagent.core :as reagent :refer [atom]]
            [ui.widgets.description-editor :as description-editor]
            [ui.widgets.due-date-picker :as due-date-picker]
            [ui.widgets.name-editor :as name-editor]
            [ui.widgets.tag-editor :as tag-editor]))

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
  [entity css-class update-fn name-editor & [on-enter]]
  [:div.entity-editor
   {:class css-class}
   [:div.name
    {:class (when (:today entity)
              "today")}
    [:div.input.check-box
     {:on-click #(completion-changed entity update-fn)}]
    [name-editor]]
   [:div.tags
    [:i.icon.fa.fa-fw.fa-tags]
    [tag-editor/render
     entity
     #(tags-changed %1 %2 update-fn)
     on-enter]]
   [:div.due-date
    [:i.icon.fa.fa-fw.fa-clock-o]
    [due-date-picker/render
     entity
     #(due-date-changed %1 %2 update-fn)
     on-enter]]
   [:div.description
    [:i.icon.fa.fa-fw.fa-pencil-square-o]
    [description-editor/render
     entity
     #(description-changed %1 %2 update-fn)
     on-enter]]])
