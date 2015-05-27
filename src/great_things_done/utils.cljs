(ns great-things-done.utils)

(defn clj->json
  [ds]
  (.stringify js/JSON
              (clj->js ds)
              undefined
              2))
