(ns great-things-done.db
  (:require [great-things-done.crypto :as crypto]
            [great-things-done.keytar :as keytar]
            [great-things-done.platform :as platform]
            [great-things-done.utils :refer [clj->json json->clj]]
            [node.fs :as fs]))

(defn- encrypt-task
  [task]
  (let [password         (keytar/get-password "great-things-done"
                                              (platform/logged-user))
        encrypted-string (crypto/encrypt (clj->json task)
                                         password)]
    encrypted-string))

(defn- decrypt-task
  [encrypted-string]
  (let [password (keytar/get-password "great-things-done"
                                      (platform/logged-user))
        task     (json->clj (crypto/decrypt encrypted-string
                                            password))]
    task))

(defn deserialize-task
  [path task-id & [callback]]
  (let [task-path (str path
                       plateform/separator
                       task-id
                       ".egtd")
        string    (fs/read-file task-path)
        info      (decrypt-task string)
        task      (atom {})]
    (doseq [[k v] info]
      (swap! project assoc k v)
      (when (= (name k) "sub-tasks")
        (swap! project assoc k (map #(deserialize-task path %) v))))
    (when callback
      (callback @task))
    @task))

(defn deserialize-project
  [path & [callback]]
  (let [project-path (str (platform/database-projects-path)
                          plateform/separator
                          path)
        full-path    (str project-path
                          plateform/separator
                          ".project.pgtd")
        string     (fs/read-file full-path)
        info       (json->clj string)
        project    (atom {})]
    (doseq [[k v] info]
      (swap! project assoc k v)
      (when (= (name k) "tasks")
        (swap! project assoc k (map #(deserialize-task project-path % callback) v))))
    @project))

(defn serialize-task!
  [task]
  (let [project       (:project task)
        projects-path (platform/database-projects-path)
        project-name  (if (:id project)
                        (str (:name project) "-" (:id project))
                        (str (:name project)))
        task-name     (str (:name task) "-" (:id task))
        full-path     (str projects-path
                           platform/separator
                           project-name)
        string        (encrypt-task (assoc
                                      task
                                      :sub-tasks
                                      (map :id (:sub-tasks task))))]
    (fs/ensure-dir! full-path)
    (fs/write-file! (str full-path platform/separator task-name ".egtd")
                    string)))

(defn serialize-project!
  [project]
  (let [projects-path (platform/database-projects-path)
        filename      (str (:name project) "-" (:id project))
        full-path     (str projects-path platform/separator filename)]
    (fs/ensure-dir! full-path)
    (fs/write-file! (str full-path platform/separator ".project.pgtd")
                    (clj->json (assoc
                                 project
                                 :tasks
                                 (map :id (:tasks project)))))))

(defn rename-project!
  [project old-name]
  (let [new-path (str (platform/database-projects-path)
                      platform/separator
                      (str (:name project) "-" (:id project)))
        old-path (str (platform/database-projects-path)
                      platform/separator
                      (str old-name "-" (:id project)))]
    (fs/rename! old-path new-path)))

(defn ensure-structure
  []
  (platform/ensure-database-path!)
  (platform/ensure-database-meta-projects-path!)
  (platform/ensure-database-projects-path!)
  (platform/ensure-inbox!))
