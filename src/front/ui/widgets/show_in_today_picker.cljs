; Copyright (c) 2015, Benjamin Van Ryseghem. All rights reserved.
; The use and distribution terms for this software are covered by the
; Eclipse Public License 1.0 (http://opensource.org/licenses/eclipse-1.0.php)
; which can be found in the file epl-v10.html at the root of this distribution.
; By using this software in any fashion, you are agreeing to be bound by
; the terms of this license.
; You must not remove this notice, or any other, from this software.

(ns ui.widgets.show-in-today-picker
  (:use [jayq.core :only [$]])
  (:require [gtd.settings :as settings]
            [reagent.core :as reagent :refer [atom]]))

(defn- plain-today-picker
  [entity show-before callback]
  (reagent/create-class
   {:component-did-mount (fn []
                           (.tooltip ($ (str "#days-input-" (:id entity))))
                           (.editable ($ (str "#days-input-" (:id entity)))
                                      "click"
                                      (clj->js {:callback (fn [event]
                                                            (let [days (js/parseInt (.-value event)
                                                                                    10)]
                                                              (if (js/isNaN days)
                                                                (.html (.-target event)
                                                                       (.-old_value event))
                                                                (callback entity
                                                                          (js/parseInt (.-value event)
                                                                                       10)))))}))
                           (let [select ($ (str "#days-select-" (:id entity)))]
                             (.selectpicker select)
                             (.change select
                                      (fn []
                                        (let [item (.find select
                                                          ":selected")
                                              text (.text item)
                                              days (if (= text
                                                          "on date")
                                                     0
                                                     1)]
                                          (reset! show-before days)
                                          (callback entity
                                                    days))))))
    :reagent-render (fn [entity show-before callback]
                      [:div
                       "Show in Today:"
                       [:select.show-tick
                        {:id (str "days-select-" (:id entity))}
                        {:value "A"}
                        [:option
                         {:value "A"}
                         "on date"]
                        [:option
                         {:value "B"}
                         "days before"]]])}))

(defn- plain-today-picker-with-days
  [entity show-before callback]
  (reagent/create-class
   {:component-did-mount (fn []
                           (.tooltip ($ (str "#days-input-" (:id entity))))
                           (.editable ($ (str "#days-input-" (:id entity)))
                                      "click"
                                      (clj->js {:callback (fn [event]
                                                            (let [days (js/parseInt (.-value event)
                                                                                    10)]
                                                              (if (js/isNaN days)
                                                                (.html (.-target event)
                                                                       (.-old_value event))
                                                                (callback entity
                                                                          (js/parseInt (.-value event)
                                                                                       10)))))}))
                           (let [select ($ (str "#days-select-" (:id entity)))]
                             (.selectpicker select)
                             (.change select
                                      (fn []
                                        (let [item (.find select
                                                          ":selected")
                                              text (.text item)
                                              days (if (= text
                                                          "on date")
                                                     0
                                                     1)]
                                          (reset! show-before days)
                                          (callback entity
                                                    days))))))
    :reagent-render (fn [entity show-before callback]
                      [:div.show-before
                       "Show in Today:"
                       [:div
                        {:id (str "days-input-" (:id entity))
                         :class "days-input"
                         :title "Click to edit"
                         :data-toggle "tooltip"
                         :data-placement "top"}
                        @show-before]
                       [:select.show-tick
                        {:id (str "days-select-" (:id entity))
                         :value "B"}
                        [:option
                         {:value "A"}
                         "on date"]
                        [:option
                         {:value "B"}
                         "days before"]]])}))

(defn- plain-empty-today-picker
  [entity]
  [:div.empty])

(defn- build
  [entity callback]
  (let [show-before (atom (:show-before entity))]
    (reagent/create-class
     {:reagent-render (fn []
                        [:div
                         (if (zero? @show-before)
                           [plain-today-picker
                            entity
                            show-before
                            callback]
                           [plain-today-picker-with-days
                            entity
                            show-before
                            callback])])})))

(defn render
  [entity callback]
  [:div.today-picker
   [(build entity
           callback) entity]])
