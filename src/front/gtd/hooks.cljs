(ns gtd.hooks
  (:require [gtd.image-service :as image-service]))


(defn- install-ononline
  []
  (set! (.-ononline (.-body js/document))
        (fn []
          (image-service/retrieve-empty-photo))))


(defn install
  []
  (install-ononline))
