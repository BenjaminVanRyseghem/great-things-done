(ns ui.widgets.show-in-today-picker
  (:use [jayq.core :only [$]])
  (:require [gtd.settings :as settings]
            [reagent.core :as reagent :refer [atom]]))

(defn- plain-today-picker
  [entity]
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
     "days before"]]])

(defn- plain-today-picker-with-days
  [entity]
  [:div.show-before
   "Show in Today:"
   [:div
    {:id (str "days-input-" (:id entity))
     :class "days-input"
     :title "Click to edit"
     :data-toggle "tooltip"
     :data-placement "top"}
    (:show-before entity)]
   [:select.show-tick
    {:id (str "days-select-" (:id entity))
     :value "B"}
    [:option
     {:value "A"}
     "on date"]
    [:option
     {:value "B"}
     "days before"]]])

(defn- plain-empty-today-picker
  [entity]
  [:div.empty])

(defn build
  [entity callback]
  (with-meta (if (:due-date entity)
               (if (zero? (:show-before entity))
                 plain-today-picker
                 plain-today-picker-with-days)
               plain-empty-today-picker)
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
                                           (callback entity
                                                     days))))))}))

(defn render
  [entity callback]
  [:div.today-picker
   [(build entity
           callback) entity]])
