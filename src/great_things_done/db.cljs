(ns great-things-done.db
  (:require [cljs-uuid-utils.core :as uuid]
            [great-things-done.platform :as platform]
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
        filename      (str (:name project) "-" (:id project))])
  )

(defn- install-project
  [project]
  (swap! projects assoc (:id project) project)
  (write-project-to-disk project))


(defn- create-project
  [project-name tags tasks description due-date]
  (let [id (generate-uuid)]
    [id
     {:name          project-name
      :tags          tags
      :tasks         tasks
      :description   description
      :creation-date (now-as-milliseconds)
      :due-date      due-date}]))

(defn register-project!
  [project-name & {:keys [tags tasks description due-date]
                   :or {tags []
                        tasks []
                        description ""
                        due-date nil}}]
  (let [project (create-project project-name
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
      (let [tmp-project (atom {})]
        (doseq [[k v] args]
          (when (= (name k) "id")
            (throw (js/Error. "`id` can not be updated!")))
          (swap! tmp-project assoc (keyword k) v)
          (install-project (merge project tmp-project))))
      (throw (js/Error. "Wong number of arguments. `body` has to have an even number of elements")))))

(defn ^:export list-of-projects
  []
  (clj->js (vals @projects)))
