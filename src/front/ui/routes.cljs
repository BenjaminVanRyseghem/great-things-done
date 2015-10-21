(ns ui.routes
  (:require [goog.events :as events]
            [goog.history.EventType :as EventType]
            [secretary.core :as secretary :refer-macros [defroute]]
            [ui.core :as core])
  (:import goog.History))

(defroute "/project/:id" [id]
  (core/render-core id))

(defroute "/inbox" []
  (core/render-core "Inbox"))

(defroute "/today" []
  (core/render-core "today"))

(defroute "/next" []
  (core/render-core "next"))

(defroute "/scheduled" []
  (core/render-core "scheduled"))

(defroute "/scheduled" []
  (core/render-core "scheduled"))

(defroute "/someday" []
  (core/render-core "someday"))

(defroute "/projects" []
  (core/render-core "projects"))

(defn init
  []
  (defonce t (do
               (secretary/set-config! :prefix "#")
               (let [h (History.)]
                 (goog.events/listen h EventType/NAVIGATE #(secretary/dispatch! (.-token %)))
                 (doto h (.setEnabled true)))
               (secretary/dispatch! "/inbox"))))
