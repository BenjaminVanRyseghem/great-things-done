(ns great-things-done.utils)

(defn clj->json
  [data-structure]
  (.stringify js/JSON
              (clj->js data-structure)
              undefined
              2))

(defn json->clj
  [string]
  (js->clj (js/JSON parse
                    string)))
