(ns great-things-done.import-state
  (:require [great-things-done.state :as state]
            [great-things-done.platform :as platform]
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

;; (defn import-all-projects)
