(ns great-things-done.db
  (:require [cljs-uuid-utils.core :as uuid]
            [great-things-done.platform :as platform]
            [great-things-done.utils :refer [clj->json]]
            [node.fs :as fs]))

(def ^:private meta-projects (atom []))
(def ^:private projects (atom {}))
(def ^:private tasks (atom []))

(defn- generate-uuid
  []
  (loop [uuid (uuid/uuid-string (uuid/make-random-uuid))]
    (if-not (contains? @projects uuid)
      uuid
      (recur (uuid/uuid-string (uuid/make-random-uuid))))))

(defn- now-as-milliseconds
  "Return the current time as a string"
  []
  (str (.now js/Date)))

(defn- write-project-to-disk
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

(defn- install-project
  [project]
  (swap! projects assoc (:id project) project)
  (write-project-to-disk project)
  project)

(defn- move-all-tasks
  [project old-name]
  (let [new-path (str (platform/database-projects-path)
                      platform/separator
                      (str (:name project) "-" (:id project)))
        old-path (str (platform/database-projects-path)
                      platform/separator
                      (str old-name "-" (:id project)))]
    (fs/rename! old-path new-path)))

(defn- new-project
  [project-name tags tasks description due-date]
     {:name          project-name
      :id            (generate-uuid)
      :tags          tags
      :tasks         tasks
      :description   description
      :creation-date (now-as-milliseconds)
      :due-date      due-date})

(defn register-project
  [project-name & {:keys [tags tasks description due-date]
                   :or {tags []
                        tasks []
                        description ""
                        due-date nil}}]
  (let [project (new-project project-name
                             tags
                             tasks
                             description
                             due-date)]
    (install-project project)))

(defn update-project!
  [project & body]
  (let [args (into []
                   (map #(into [] %)
                        (partition 2 body)))]
    (if (even? (count body))
      (let [tmp-project (atom project)]
        (doseq [[k v] args]
          (when (= (name k) "id")
            (throw (js/Error. "`id` can not be updated!")))
          (swap! tmp-project assoc (keyword k) v)
          (js/console.log (name k))
          (when (= (name k) "name")
            (move-all-tasks @tmp-project (:name project))))
          (install-project @tmp-project))
      (throw (js/Error. "Wong number of arguments. `body` has to have an even number of elements")))))

(defn ^:export list-of-projects
  []
  (clj->js (vals @projects)))
