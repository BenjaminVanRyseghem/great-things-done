; Copyright (c) 2015, Benjamin Van Ryseghem. All rights reserved.
; The use and distribution terms for this software are covered by the
; Eclipse Public License 1.0 (http://opensource.org/licenses/eclipse-1.0.php)
; which can be found in the file epl-v10.html at the root of this distribution.
; By using this software in any fashion, you are agreeing to be bound by
; the terms of this license.
; You must not remove this notice, or any other, from this software.

(ns ui.main.inbox
  (:require [gtd.image-service :as image]
            [gtd.state :as state]
            [reagent.core :as reagent :refer [atom]]
            [ui.main :as main]
            [ui.widgets.tasks :as tasks]))

(def ^:private empty-inbox-image-size 300)

(def ^{:private true
       :no-docs true} shell (js/require "shell"))

(defn- render-empty-inbox
  []
  (let [image   (image/empty-inbox)
        loading (image/loading?)
        ratio   (/ empty-inbox-image-size
                   (:height image))]
    [:div.empty-inbox
     [:div.image-container
      [:div.image-cropper
       {:class (when loading
                 "loading")}
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

(defmethod main/main-container-component "Inbox"
  [_]
  [:div.main-container.top-offset
   [:div#main-title
    "Tasks"]
   [:div.main-viewport
    (let [inbox (state/inbox)
          tasks (:tasks inbox)]
      {:id (str "main-inbox")}
        [tasks/render-only-todos-for
         inbox
         tasks
         render-empty-inbox])]
   [main/main-toolbar-component (:id (state/inbox))]])
