; Copyright (c) 2015, Benjamin Van Ryseghem. All rights reserved.
; The use and distribution terms for this software are covered by the
; Eclipse Public License 1.0 (http://opensource.org/licenses/eclipse-1.0.php)
; which can be found in the file epl-v10.html at the root of this distribution.
; By using this software in any fashion, you are agreeing to be bound by
; the terms of this license.
; You must not remove this notice, or any other, from this software.

(ns ui.widgets.due-date-picker
  (:use [jayq.core :only [$]])
  (:require [gtd.settings :as settings]
            [reagent.core :as reagent :refer [atom]]
            [ui.widgets.show-in-today-picker :as show-in-today-picker]))


(defn- clear-date
  [entity]
  (reagent/create-class
   {:component-did-mount #(.click ($ (str "#clear-due-date-" (:id entity)))
                                  (fn []
                                    (.datepicker ($ (str "#entity-due-date-picker-" (:id entity)))
                                                 "clearDates")))
    :reagent-render (fn []
                      [:div
                       {:id (str "clear-due-date-" (:id entity))
                        :class "clear-due-date"}
                       [:i.fa.fa-times]])}))

(defn- build
  [entity callback on-enter]
  (let [date (atom (:due-date entity))]
    (reagent/create-class
     {:component-did-mount (fn []
                             (.on ($ (str "#entity-due-date-picker-" (:id entity)))
                                  "keydown"
                                  (fn [e]
                                    (when (and (= (.-keyCode e)
                                                  13)
                                               (= (.-length ($ :.dropdown-menu.datepicker-dropdown))
                                                  0)
                                               (on-enter)))
                                    (when (= (.-keyCode e)
                                             8)
                                      (.datepicker ($ (str "#entity-due-date-picker-" (:id entity)))
                                                   "clearDates"))))
                             (.on (.datepicker ($ (str "#entity-due-date-picker-" (:id entity)))
                                               (clj->js {:todayBtn  "linked",
                                                         :autoclose true
                                                         :keyboardNavigation true
                                                         :format {:toDisplay (fn [d _ _]
                                                                               (.format (.moment js/window
                                                                                                 (js/Date. d))
                                                                                        (settings/date-format)))
                                                                  :toValue (fn [d, f, t]
                                                                             (js/Date. (.format (.moment js/window
                                                                                                         d
                                                                                                         (settings/date-format)))))}}))
                                  "changeDate"
                                  (fn [e]
                                    (reset! date
                                            (.-date e))
                                    (callback entity
                                              (.-date e)))))

      :reagent-render (fn [entity callback on-enter]
                        [:div
                         (if @date
                           [:div
                            [:input
                             {:id (str "entity-due-date-picker-" (:id entity))
                              :class "form-control due-date-picker"
                              :placeholder "Add a due date"
                              :value (if @date
                                       (.format (.moment js/window
                                                         @date)
                                                (settings/date-format))
                                       "")}]
                            [clear-date entity]
                            [show-in-today-picker/render
                             entity
                             callback]]
                           [:div
                            [:input
                             {:id (str "entity-due-date-picker-" (:id entity))
                              :placeholder "Add a due date"
                              :class "due-date-picker empty"}]])])})))

(defn render
  [entity callback & [on-enter]]
  [:div.date-picker
   [build
    entity
    callback
    on-enter]])
