(ns great-things-done.import-db
  (:require [great-things-done.db :as db]
            [great-things-done.crypto :as crypto]
            [great-things-done.keytar :as keytar]
            [great-things-done.platform :as platform]
            [node.fs :as fs]))

(defn import-meta-projects
  []
  ;; add loop here

  (let [result (js->clj (js/importScript "function(p) { p.filter(function(e, i){ return (i % 2) === 0; })}"))]
    (doseq [each result]
      (js/console.log each))))

(defn- import-json
  [string]
  (js->clj (js/JSON parse string)))

(defn- decrypt-task
  [encrypted-string]
  (let [password (keytar/get-password "great-things-done"
                                      (platform/logged-user))
        task     (import-json (crypto/decrypt encrypted-string
                                              password))]
    task))

(defn- load-task
  [project-path task-id]
  (let [task-path (str project-path
                       plateform/separator
                       task-id
                       ".egtd")
        string    (fs/read-file task-path)
        info      (decrypt-task string)
        task      (atom {})]
    (doseq [[k v] info]
      (swap! project assoc k v)
      (when (= (name k) "sub-tasks")
        (swap! project assoc k (map #(load-task project-path %) v))))
    (db/load-task! @task)
    @task))

(defn- import-project
  [project-id]
  (let [project-path (str (platform/database-projects-path)
                          plateform/separator
                          project-name)
        full-path    (str project-path
                          plateform/separator
                          ".project.pgtd")
        string     (fs/read-file full-path)
        info       (import-json string)
        project    (atom {})]
    (doseq [[k v] info]
      (swap! project assoc k v)
      (when (= (name k) "tasks")
        (swap! project assoc k (map #(load-task project-path %) v))))
    (db/load-project! @project)
    @project))

;; (defn import-all-projects)
