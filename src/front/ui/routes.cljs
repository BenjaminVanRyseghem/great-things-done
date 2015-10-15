(ns ui.routes
  (:require [secretary.core :as secretary :refer-macros [defroute]]
            [ui.core :as core]))

(defroute "/project/:id" [id]
  (core/render-core id))

(defroute "/inbox" []
  (js/console.log "tada")
  (core/render-core "Inbox"))

(defn init
  []
  (secretary/dispatch! "/project/project-10"))
