(ns ui.show-in-today-picker
  (:use [jayq.core :only [$]])
  (:require [gtd.settings :as settings]
            [reagent.core :as reagent :refer [atom]]))

(defn- plain-today-picker
  [project]
  [:div
   "Show in Today:"
   [:select#days-select.show-tick
    [:option
     {:selected true}
     "on date"]
    [:option
     "days before"]]])

(defn- plain-today-picker-with-days
  [project]
  [:div.show-before
   "Show in Today:"
   [:div#days-input
    {:title "Click to edit"
     :data-toggle "tooltip"
     :data-placement "top"}
    (:show-before project)]
   [:select#days-select.show-tick
    [:option
     "on date"]
    [:option
     {:selected true}
     "days before"]]])

(defn- plain-empty-today-picker
  [project]
  [:div.empty])

(defn build
  [project callback]
  (with-meta (if (:due-date project)
               (if (zero? (:show-before project))
                 plain-today-picker
                 plain-today-picker-with-days)
               plain-empty-today-picker)
    {:component-did-mount (fn []
                            (.tooltip ($ :#days-input))
                            (.editable ($ :#days-input)
                                       "click"
                                       (clj->js {:callback (fn [event]
                                                             (let [days (js/parseInt (.-value event)
                                                                                     10)]
                                                               (if (js/isNaN days)
                                                                 (.html (.-target event)
                                                                        (.-old_value event))
                                                                 (callback project
                                                                           (js/parseInt (.-value event)
                                                                                        10)))))}))
                            (let [select ($ :#days-select)]
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
                                           (callback project
                                                     days))))))}))

(defn render
  [project callback]
  [:div.today-picker
   [(build project
           callback) project]])
