(ns ui.widgets.due-date-picker
  (:use [jayq.core :only [$]])
  (:require [gtd.settings :as settings]
            [reagent.core :as reagent :refer [atom]]))


(defn- plain-due-date-picker
  [entity]
  (let [due-date (:due-date entity)
        text     (if due-date
                   (.format (.moment js/window
                                     (:due-date entity))
                            (settings/date-format))
                   "")]
    [:div
     [:input
      {:id (str "entity-due-date-picker-" (:id entity))
       :class "form-control due-date-picker"
       :placeholder "Add a due date"
       :value text}]
     [:div
      {:id (str "clear-due-date-" (:id entity))
       :class "clear-due-date"}
      [:i.fa.fa-times]]]))

(defn- plain-empty-due-date-picker
  [entity]
  [:div
   [:input
    {:id (str "entity-due-date-picker-" (:id entity))
     :placeholder "Add a due date"
     :class "due-date-picker empty"}]])

(defn build
  [entity callback]
  (with-meta (if (:due-date entity)
               plain-due-date-picker
               plain-empty-due-date-picker)
    {:component-did-mount (fn []
                            (.click ($ (str "#clear-due-date-" (:id entity)))
                                    (fn []
                                      (.datepicker ($ (str "#entity-due-date-picker-" (:id entity)))
                                                   "clearDates")))
                            (.on (.datepicker ($ (str "#entity-due-date-picker-" (:id entity)))
                                              (clj->js {:todayBtn  "linked",
                                                        :autoclose true
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
                                   (callback entity
                                             (.-date e)))))}))

(defn render
  [entity callback]
  [:div.date-picker
   [(build entity
          callback) entity]])
