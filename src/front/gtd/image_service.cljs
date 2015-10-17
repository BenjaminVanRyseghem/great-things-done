(ns gtd.image-service
  (:require [gtd.pixabay :as pixabay]
            [gtd.settings :as settings]
            [utils.date :as date]))

(defn- default-inbox
  []
  {:src    "/img/empty-inbox.jpg"
   :author "Todd MacDonald"
   :height 852
   :width  1280
   :url    "https://pixabay.com/en/rocks-cairns-pile-balance-stones-175585/"})

(defn empty-inbox []
  (if (settings/pixabay :on)
    (pixabay/get-picture
     :username (settings/pixabay :credentials :username)
     :key (settings/pixabay :credentials :key)
     :query (settings/pixabay :query)
     :index (date/index-of-today))
    (default-inbox)))
