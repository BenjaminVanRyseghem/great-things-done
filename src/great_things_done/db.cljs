(ns great-things-done.db
  (:require [cljs-uuid-utils.core :as uuid]
            [great-things-done.crypto :as crypto]
            [great-things-done.keytar :as keytar]
            [great-things-done.platform :as platform]
            [great-things-done.utils :refer [clj->json]]
            [node.fs :as fs]))

(def ^:private meta-projects      (atom []))
(def ^:private active-projects    (atom {}))
(def ^:private completed-projects (atom {}))
(def ^:private active-tasks       (atom {}))
(def ^:private repeating-tasks    (atom {}))
(def ^:private completed-tasks    (atom {}))
(def ^:private tags               (atom {}))

(defn- generate-uuid
  []
  (loop [uuid (uuid/uuid-string (uuid/make-random-uuid))]
    (if-not (and (contains? @active-projects uuid)
                 (contains? @completed-projects uuid))
      uuid
      (recur (uuid/uuid-string (uuid/make-random-uuid))))))

(defn- now-as-milliseconds
  "Return the current time as a string"
  []
  (str (.now js/Date)))

(defn- encrypt-task
  [task]
  (let [password         (keytar/get-password "great-things-done"
                                              (platform/logged-user))
        encrypted-string (crypto/encrypt (clj->json task)
                                         password)]
    encrypted-string))

(defn- write-task-to-disk
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

(defn- register-tags
  [entry entry-type]
  (doseq [tag (:tags entry)]
    (when-not (contains? @tags tag)
      (swap! tags assoc tag {:projects (atom {})
                             :tasks    (atom {})}))
    (swap! (get-in @tags [tag entry-type]) assoc (:id entry) entry)))

(defn- store-task-internally
  [task]
  (if (and (:repeating task)
           (= (get-in task [:repeating :type])
              "pattern"))
    (swap! repeating-tasks assoc (:id task) task)
    (if (:done task)
      (swap! completed-tasks assoc (:id task) task)
      (swap! active-tasks assoc (:id task) task)))
  (register-tags task :tasks))

(defn- store-project-internally
  [project]
  (if (:done project)
    (swap! completed-projects assoc (:id project) project)
    (swap! active-projects assoc (:id project) project))
  (register-tags project :projects))

(defn- install-task
  [task]
  (store-task-internally task)
  (write-task-to-disk task)
  task)

(defn- install-project
  [project]
  (store-project-internally project)
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

;; `repeating` can have two values:
;;   - nil
;;   - a map, with the following keys
;;     - type: "pattern" or "instance"
;;             "pattern" indicates it's used to create new instances of the repeating task when needed.
;;             "instance" indicates it's an instance of a repeating task
;;     - delay: int >= 1
;;     - repeat: "after" or "every"
;;               "after" to indicates that the next action should appears `delay` days after the last completion
;;               "every" to indicate a new instance shoud be created every `delay`th of the month (note that in this case `delay` must be between 1 and 31)
;;     - shown-before: int >= 0 number of days before the due date when the instance should appear in the inbox

(defn- new-task
  [task-name project tags sub-tasks description remind-date due-date repeating done]
  {:name        task-name
   :id          (generate-uuid)
   :project     project
   :tags        tags
   :sub-tasks   sub-tasks
   :description description
   :remind-date remind-date
   :due-date    due-date
   :repeating   repeating
   :done        done})

(defn- new-project
  [project-name tags tasks description due-date active done]
  {:name          project-name
   :id            (generate-uuid)
   :tags          tags
   :tasks         tasks
   :description   description
   :creation-date (now-as-milliseconds)
   :due-date      due-date
   :active        active
   :done          done})

(defn register-task
  [task-name {:keys [project tags sub-tasks description remind-date due-date repeating]
              :or   {project     {:id nil
                                  :name "Inbox"}
                     tags        []
                     sub-tasks   []
                     description ""
                     remind-date nil
                     due-date    nil
                     repeating   false}}]
  (install-task (new-task task-name
                          project
                          tags
                          sub-tasks
                          description
                          remind-date
                          due-date
                          repeating
                          false)))

(defn register-project
  [project-name & {:keys [tags tasks description due-date active]
                   :or   {tags        []
                          tasks       []
                          description ""
                          due-date    nil
                          active      true}}]
  (install-project (new-project project-name
                                tags
                                tasks
                                description
                                due-date
                                active
                                false)))

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
      (throw (js/Error. "Wrong number of arguments. `body` has to have an even number of elements")))))

(defn load-project!
  [project]
  (store-project-internally project))

(defn load-task!
  [task]
  (store-task-internally task))

(defn ^:export list-of-projects
  []
  (clj->js (into (vals @active-projects) (vals @completed-projects))))
