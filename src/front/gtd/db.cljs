(ns gtd.db
  (:require [gtd.crypto :as crypto]
            [gtd.platform :as platform]
            [utils.core :as utils]
            [utils.keychain :as keychain]
            [node.fs :as fs]))

(defn- encrypt-task
  [task]
  (let [password         (keychain/get-password "great-things-done"
                                              (platform/logged-user))
        encrypted-string (crypto/encrypt (utils/clj->json task)
                                         password)]
    encrypted-string))

(defn- decrypt-task
  [encrypted-string]
  (let [password (keychain/get-password "great-things-done"
                                      (platform/logged-user))
        task     (utils/json->clj (crypto/decrypt encrypted-string
                                            password))]
    task))

(defn deserialize-task
  [path task-id & [callback]]
  (let [task-path (str path
                       platform/separator
                       task-id
                       ".egtd")
        string    (fs/read-file task-path)
        info      (decrypt-task string)
        task      (atom {})]
    (doseq [[k v] info]
      (swap! task assoc k v)
      (when (= (name k) "tasks")
        (swap! task assoc k (map #(deserialize-task path %) v))))
    (when callback
      (callback @task))
    @task))

(defn deserialize-project
  [path & [callback]]
  (let [project-path (str (platform/database-projects-path)
                          platform/separator
                          path)
        full-path    (str project-path
                          platform/separator
                          ".project.pgtd")
        string     (fs/read-file full-path)
        info       (utils/json->clj string)
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
        project-id    (:id project)
        task-name     (:id task)
        full-path     (str projects-path
                           platform/separator
                           project-id)
        string        (encrypt-task (assoc
                                      task
                                      :tasks
                                      (map :id (:tasks task))))]
    (fs/ensure-dir! full-path)
    (fs/write-file! (str full-path platform/separator task-name ".egtd")
                    string)))

(defn serialize-project!
  [project]
  (let [projects-path (platform/database-projects-path)
        project-id    (:id project)
        full-path     (str projects-path platform/separator project-id)]
    (fs/ensure-dir! full-path)
    (fs/write-file! (str full-path platform/separator ".project.pgtd")
                    (utils/clj->json (assoc
                                 project
                                 :tasks
                                 (map :id (:tasks project)))))))

(defn rename-project!
  [project old-id]
  (let [new-path (str (platform/database-projects-path)
                      platform/separator
                      (:id project))
        old-path (str (platform/database-projects-path)
                      platform/separator
                      old-id)]
    (fs/rename! old-path new-path)))

(defn remove-task!
  "Remove old file in old project"
  [task]
  (fs/unlink! (str (platform/database-projects-path)
                   platform/separator
                   (get-in task [:project :id])
                   platform/separator
                   (:id task)
                   ".egtd")))

(defn ensure-structure
  []
  (platform/ensure-database-path!)
  (platform/ensure-database-meta-projects-path!)
  (platform/ensure-database-projects-path!)
  (platform/ensure-inbox!))

(defn ensure-project
  [project]
  (let [projects-path (platform/database-projects-path)
        project-id    (:id project)
        exists        (fs/path-exists? (str projects-path
                                            platform/separator
                                            project-id
                                            platform/separator
                                            ".project.pgtd"))]
    (when-not exists
      (serialize-project! project))))
