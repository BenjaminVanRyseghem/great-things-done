(ns great-things-done.import-db
  (:require [great-things-done.db :as db]
            [great-things-done.platform :as platform]
            [great-things-done.state :as state]
            [node.fs :as fs]))

(defn import-meta-projects
  []
  ;; add loop here

  (let [result (js->clj (js/importScript "function(p) { p.filter(function(e, i){ return (i % 2) === 0; })}"))]
    (doseq [each result]
      (js/console.log each))))

;; Useful?
(defn- import-task
  [project-path task-id]
  (let [task (db/deserialize-task project-path
                                  task-id)]
    (state/load-task! @task)
    task))

(defn- import-project
  [folder-name]
  (let [project (db/deserialize-project folder-name
                                        #(state/load-task! %))]
    (state/load-project! project)
    project))

(defn import-all-projects!
  []
  (let [root    (platform/database-projects-path)
        folders (fs/read-dir root)]
    (doseq [folder folders]
      (when-not (= (first folder) ".")
        (import-project folder)))))
