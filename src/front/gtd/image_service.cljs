(ns gtd.image-service
  (:require [gtd.settings :as settings]
            [reagent.core :as reagent :refer [atom]]
            [utils.date :as date]
            [utils.pixabay :as pixabay]))

(def ^:private default-inbox
  {:src    "/img/empty-inbox.jpg"
   :author "Todd MacDonald"
   :height 852
   :width  1280
   :url    "https://pixabay.com/en/rocks-cairns-pile-balance-stones-175585/"})

(defonce today-image (atom default-inbox))

(defn retrieve-empty-photo
  []
  (when (settings/pixabay :on)
    (pixabay/get-photo :username   (settings/pixabay :credentials :username)
                       :api-key    (settings/pixabay :credentials :key)
                       :query      (settings/pixabay :query)
                       :index      (date/index-of-today)
                       :on-success (fn [data]
                                     (reset! today-image data)))))

(defn empty-inbox
  []
  @today-image)
