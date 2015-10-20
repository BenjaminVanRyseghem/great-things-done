(ns ui.routes
  (:require [goog.events :as events]
            [goog.history.EventType :as EventType]
            [secretary.core :as secretary :refer-macros [defroute]]
            [ui.core :as core])
  (:import goog.History))

(defroute "/project/:id" [id]
  (core/render-core id nil))

(defroute "/project/:id/task/:task" [id task]
  (core/render-core id task))

(defroute "/inbox" []
  (core/render-core "Inbox" nil))

(defroute "/today" []
  (core/render-core "today" nil))

(defroute "/next" []
  (core/render-core "next" nil))

(defroute "/scheduled" []
  (core/render-core "scheduled" nil))

(defroute "/scheduled" []
  (core/render-core "scheduled" nil))

(defroute "/someday" []
  (core/render-core "someday" nil))

(defroute "/projects" []
  (core/render-core "projects" nil))

(defn init
  []
  (defonce t (do
               (secretary/set-config! :prefix "#")
               (let [h (History.)]
                 (goog.events/listen h EventType/NAVIGATE #(secretary/dispatch! (.-token %)))
                 (doto h (.setEnabled true)))
               (secretary/dispatch! "/inbox"))))
