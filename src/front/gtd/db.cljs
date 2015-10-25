(ns gtd.db
  (:require [gtd.crypto :as crypto]
            [gtd.platform :as platform]
            [utils.core :as utils]
            [utils.date :as date]
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

(defmulti deserialize-task-value (fn [k _ _] (name k)))

(defmethod deserialize-task-value "due-date"
  [_ v _]
  (let [number (js/parseInt v
                            10)]
    (if (js/isNaN number)
      nil
      (js/Date. number))))

(defmethod deserialize-task-value "last-modification-time"
  [_ v _]
  (js/Date. (js/parseInt v
                         10)))

(defmethod deserialize-task-value "creation-date"
  [_ v _]
  (js/Date. (js/parseInt v
                         10)))

(defmethod deserialize-task-value "show-before"
  [_ v _]
  (js/parseInt v
               10))

(defmethod deserialize-task-value :default
  [k v _]
  v)

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
      (swap! task assoc k (deserialize-task-value k v path)))
    (when callback
      (callback @task))
    @task))

(defmethod deserialize-task-value "tasks"
  [_ v path]
  (map #(deserialize-task path %) v))

(defmulti deserialize-project-value (fn [k _ _ _] (name k)))

(defmethod deserialize-project-value "due-date"
  [_ v _ _]
  (let [number (js/parseInt v
                            10)]
    (if (js/isNaN number)
      nil
      (js/Date. number))))

(defmethod deserialize-project-value "last-modification-time"
  [_ v _ _]
  (js/Date. (js/parseInt v
                         10)))

(defmethod deserialize-project-value "creation-date"
  [_ v _ _]
  (js/Date. (js/parseInt v
                         10)))

(defmethod deserialize-project-value "show-before"
  [_ v _ _]
  (js/parseInt v
               10))

(defmethod deserialize-project-value "tasks"
  [_ v project-path callback]
  (map #(deserialize-task project-path % callback) v))

(defmethod deserialize-project-value :default
  [k v _ _]
  v)

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
      (swap! project assoc k (deserialize-project-value k
                                                        v
                                                        project-path
                                                        callback)))
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
                                      :last-modification-time
                                      (date/now-as-milliseconds)
                                      :creation-date
                                      (.valueOf (:creation-date task))
                                      :due-date
                                      (if (:due-date task)
                                        (.valueOf (:due-date task))
                                        nil)
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
                                       :last-modification-time
                                       (date/now-as-milliseconds)
                                       :creation-date
                                       (.valueOf (:creation-date project))
                                       :due-date
                                       (if (:due-date project)
                                         (.valueOf (:due-date project))
                                         nil)
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
