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
