(ns ui.due-date-picker
  (:use [jayq.core :only [$]])
  (:require [gtd.settings :as settings]
            [reagent.core :as reagent :refer [atom]]))


(defn- plain-description-editor
  [project]
  (let [text (.format (.moment js/window
                               (:due-date project))
                      "MM/DD/YYYY")]
    [:div
     [:input.form-control
      {:id "project-due-date-picker"
       :placeholder "Add a due date"
       :value text}]
     [:div#clear-due-date
      [:i.fa.fa-times]]]))

(defn- plain-empty-description-editor
  [project]
  [:div
   [:input
    {:id "project-due-date-picker"
     :placeholder "Add a due date"
     :class "empty"}]])

(defn build
  [project callback]
  (with-meta (if (:due-date project)
               plain-description-editor
               plain-empty-description-editor)
    {:component-did-mount (fn []
                            (.click ($ :#clear-due-date)
                                    (fn []
                                      (.datepicker ($ :#project-due-date-picker)
                                                   "clearDates")))
                            (.on (.datepicker ($ :#project-due-date-picker)
                                              (clj->js {:todayBtn  "linked",
                                                        :autoclose true
                                                        :format    (settings/date-format)}))
                                 "changeDate"
                                 (fn [e]
                                   (callback project
                                             (.-date e)))))}))

(defn render
  [project callback]
  [(build project
          callback) project])
