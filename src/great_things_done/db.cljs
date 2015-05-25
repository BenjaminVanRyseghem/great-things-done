(ns great-things-done.db)

(def ^:private meta-projects (atom []))

(defn ^:export projects
  []
  (clj->js [1 2 3 4]))
