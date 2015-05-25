(ns great-things-done.import-db
  (:require [great-things-done.db :as db]))

(defn import-meta-projects
  []
  ;; add loop here

  (let [result (js->clj (js/importScript "function(p) { p.filter(function(e, i){ return (i % 2) === 0; })}"))]
    (doseq [each result]
      (js/console.log each))))
