(ns ui.main.inbox
  (:require [gtd.image-service :as image]
            [gtd.state :as state]
            [reagent.core :as reagent :refer [atom]]
            [ui.main :as main]))

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

(defmethod main/main-container-component "Inbox"
  [_]
  [:div.main-container
   [:div.main-viewport
    {:id (str "main-inbox")}
    (let [inbox (state/inbox)
          tasks (:tasks inbox)]
      (if (empty? tasks)
        [render-empty-inbox]
        [main/render-tasks-for
         inbox
         tasks]))]])
