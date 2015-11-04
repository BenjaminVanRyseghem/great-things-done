; Copyright (c) 2015, Benjamin Van Ryseghem. All rights reserved.
; The use and distribution terms for this software are covered by the
; Eclipse Public License 1.0 (http://opensource.org/licenses/eclipse-1.0.php)
; which can be found in the file epl-v10.html at the root of this distribution.
; By using this software in any fashion, you are agreeing to be bound by
; the terms of this license.
; You must not remove this notice, or any other, from this software.

(ns utils.pixabay
  (:require [ajax.core :refer [GET POST]]
            [utils.core :as utils]))

(def ^:private api-url "https://pixabay.com/api/")
(def ^:private empty-inbox-image-size 300)

(defn- get-photo-handler
  [data index on-success]
  (let [i    (rem index
                  (count data))
        item (get data i)]
    (on-success {:src    (get item "webformatURL")
                 :author (get item "user")
                 :height (get item "webformatHeight")
                 :width  (get item "webformatWidth")
                 :url    (get item "pageURL")})))

(defn get-photo
  [& {:keys [username api-key query index on-success]
      :or   [query "nature"]}]
  (GET api-url
       {:handler (fn [data]
                   (get-photo-handler (get data "hits")
                                      index
                                      on-success))
        :params  {:username username
                  :key api-key
                  :q query
                  :image_type "photo"
                  :orientation "horizontal"
                  :min_width empty-inbox-image-size
                  :min_height empty-inbox-image-size
                  :safesearch true
                  :per_page 200}}))
