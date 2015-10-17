(ns ui.routes
  (:require [secretary.core :as secretary :refer-macros [defroute]]
            [ui.core :as core]))

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
  (secretary/dispatch! "/inbox"))