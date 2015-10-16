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
  (let [util (js* "function(string, font) {
    var f = font || '12px arial',
        o = $('<div>' + string + '</div>')
    .css({'position': 'absolute', 'float': 'left', 'white-space': 'nowrap', 'visibility': 'hidden', 'font': f})
    .appendTo($('body')),
        w = o.width();

    o.remove();

    return w;
  }")]
    (util
                  string
                  font)))

(defn current-id
  []
  (let [parameters (get-url-parameters)]
    (:id parameters)))
