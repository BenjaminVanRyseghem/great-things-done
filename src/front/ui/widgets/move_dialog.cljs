; Copyright (c) 2015, Benjamin Van Ryseghem. All rights reserved.
; The use and distribution terms for this software are covered by the
; Eclipse Public License 1.0 (http://opensource.org/licenses/eclipse-1.0.php)
; which can be found in the file epl-v10.html at the root of this distribution.
; By using this software in any fashion, you are agreeing to be bound by
; the terms of this license.
; You must not remove this notice, or any other, from this software.

(ns ui.widgets.move-dialog
  (:use [jayq.core :only [$]])
  (:require [gtd.state :as state]
            [reagent.core :as reagent :refer [atom]]
            [utils.core :as utils]))

(defn- render-category
  [title selected]
  [:li
   {:tab-index 0
    :class (when (= title
                    @selected)
             "selected")
    :on-key-down (fn [e]
                   (utils/key-code e
                                   [:up :prevent] #(.focus (.prev ($ ":focus")))
                                   [:down :prevent] #(.focus (.next ($ ":focus")))
                                   [:shift :tab :prevent] #(.focus ($ :#modal-move-button))
                                   [:tab :prevent] #(.focus ($ :#modal-close-button))))
    :on-focus (fn []
                (reset! selected title))}
   title])

(defn- render-elements
  [selected]
  (when (= @selected
           "Projects")
    [:ul#elements
     [:li "Inbox"]
     (doall (for [p (vals @state/projects)]
              ^{:key (str "element-" (:id p))}
              [:li (:name p)]))]))

(defn- body
  []
  (let [selected (atom nil)]
    (reagent/create-class
     {:reagent-render (fn []
                        [:div
                         [:ul#categories
                          {:class (when (= @selected
                                           "Projects")
                                    "projects")}
                          (doall (for [t ["Today"
                                          "Next"
                                          "Scheduled"
                                          "Someday"
                                          "Projects"]]
                                   ^{:key t}
                                   [render-category t selected]))]
                         [render-elements selected]])})))

(defn- build
  [task]
  (reagent/create-class
   {:component-did-mount (fn []
                           (-> "#modal-container"
                               (str " .modal.fade")
                               ($)
                               (.modal "show")
                               (.on "shown.bs.modal"
                                    (fn [e]
                                      (-> "#modal-container"
                                          (str " .modal.fade .modal-body")
                                          ($)
                                          (.find ":tabbable")
                                          (.first)
                                          (.focus))))
                               (.on "hidden.bs.modal"
                                    (fn [e]
                                      (-> ($ :#modal-container)
                                          (.get 0)
                                          (.-innerHTML)
                                          (set! "")))))
                           )
    :reagent-render (fn [task]
                      [:div.modal.fade
                       [:div.modal-dialog
                        [:div.modal-content
                         [:div.modal-header
                          [:button
                           {:type "button"
                            :class "close"
                            :data-dismiss "modal"
                            :aria-label "Close"}
                           [:span
                            {:aria-hidden true}
                            "×"]]
                          [:h4.modal-title
                           "Move "
                           [:strong (:name task)]]]
                         [:div.modal-body
                          [body]]
                         [:div.modal-footer
                          [:button
                           {:type "button"
                            :id "modal-close-button"
                            :class "btn btn-default"
                            :data-dismiss "modal"}
                           "Close"]
                          [:button
                           {:type "button"
                            :id "modal-move-button"
                            :class "btn btn-primary"}
                           "Move"]]]]])}))

(defn append
  [task]
  (reagent/render [build task]
                  (.get ($ "#modal-container")
                        0)))
