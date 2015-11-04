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

(defn key-code
  [event & pairs]
  (when-not (even? (count pairs))
    (throw js/Error. "`pairs` should have an even number of elements"))
  (let [key-map   {:enter  13
                   :escape 27
                   :space  32
                   :up     38
                   :down   40
                   :tab    9}
        modifiers {:shift (.-shiftKey event)
                   :prevent false
                   :ctrl (.-ctrlKey event)
                   :alt (.-altKey event)
                   :meta (.-metaKey event)}
        match   (fn [matching prevent modifiers-left k]
                  (when-not (contains? (merge key-map
                                              {:prevent true}
                                              modifiers)
                                       k)
                    (throw (js/Error. (str "No binding found for " k))))
                    (when (= k :shift)
                      (swap! modifiers-left dissoc :shift)
                      (reset! matching (and @matching
                                            (.-shiftKey event))))
                    (when (= k :prevent)
                      (reset! prevent true))
                    (when (= k :ctrl)
                      (swap! modifiers-left dissoc :ctrl)
                      (reset! matching (and @matching
                                            (.-ctrlKey event))))
                    (when (= k :alt)
                      (swap! modifiers-left dissoc :alt)
                      (reset! matching (and @matching
                                            (.-altKey event))))
                    (when (= k :meta)
                      (swap! modifiers-left dissoc :meta)
                      (reset! matching (and @matching
                                            (.-metaKey event))))
                    (when (get key-map k)
                      (reset! matching (and @matching
                                            (= (get key-map k)
                                               (.-keyCode event))))))]
    (doseq [[combination body] (partition 2 pairs)]
      (let [matching       (atom 1)
            modifiers-left (atom modifiers)
            prevent        (atom false)]
        (if (seqable? combination)
          (doseq [k combination]
            (match matching
                   prevent
                   modifiers-left
                   k))
          (match matching
                 prevent
                 modifiers-left
                 combination))
        (when (and (= @matching true)
                   (every? not (vals @modifiers-left)))
          (when @prevent
            (.preventDefault event))
          (body))))))
