; Copyright (c) 2015, Benjamin Van Ryseghem. All rights reserved.
; The use and distribution terms for this software are covered by the
; Eclipse Public License 1.0 (http://opensource.org/licenses/eclipse-1.0.php)
; which can be found in the file epl-v10.html at the root of this distribution.
; By using this software in any fashion, you are agreeing to be bound by
; the terms of this license.
; You must not remove this notice, or any other, from this software.

(ns utils.core)

(defn clj->json
  [data-structure]
  (.stringify js/JSON
              (clj->js data-structure)
              (js* "undefined")
              2))

(defn json->clj
  [string]
  (js->clj (.parse js/JSON
                   string)
           :keywordize-keys true))

(defn get-url-parameters
  []
  (js->clj (.getURLParameters (.-util js/window))
           :keywordize-keys true))

(defn string-width
  [string & {:keys [font]
             :or [font "12px Open Sans"]}]
  (.stringWidth (.-util js/window)
                string
                font))

(defn current-id
  []
  (let [parameters (get-url-parameters)]
    (:id parameters)))

(defn goto
  [route]
  (set! (.-hash js/window.location)
        route))
