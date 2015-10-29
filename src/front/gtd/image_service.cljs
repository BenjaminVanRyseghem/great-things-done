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
(defonce loading (atom false))

(defn retrieve-empty-photo
  []
  (when (and (settings/pixabay :on)
             (.-onLine (.-navigator js/window)))
    (reset! loading true)
    (pixabay/get-photo :username   (settings/pixabay :credentials :username)
                       :api-key    (settings/pixabay :credentials :key)
                       :query      (settings/pixabay :query)
                       :index      (date/index-of-today)
                       :on-error   #(js/alert "FOO")
                       :on-success (fn [data]
                                     (reset! loading false)
                                     (reset! today-image data)))))

(defn loading?
  []
  @loading)

(defn empty-inbox
  []
  @today-image)
