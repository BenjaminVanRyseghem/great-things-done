(ns great-things-done.state
  (:require [cljs-uuid-utils.core :as uuid]
            [great-things-done.db :as db]))

(def ^:private task-types ["Task" "SubTask"])

;; Caches
(def ^:private meta-projects      (atom []))
(def ^:private projects           (atom {}))
(def ^:private active-projects    (atom {}))
(def ^:private completed-projects (atom {}))
(def ^:private tasks              (atom {}))
(def ^:private active-tasks       (atom {}))
(def ^:private repeating-tasks    (atom {}))
(def ^:private completed-tasks    (atom {}))
(def ^:private tags               (atom {}))

(def ^:private inbox-project      (atom {:name          "Inbox"
                                         :id            "Inbox"
                                         :tags          []
                                         :tasks         []
                                         :description   nil
                                         :creation-date nil
                                         :due-date      nil
                                         :active        nil
                                         :done          false
                                         :type          "Project"}))

(defn- generate-uuid
  []
  (loop [uuid (uuid/uuid-string (uuid/make-random-uuid))]
    (if-not (and (contains? @active-projects uuid)
                 (contains? @completed-projects uuid))
      uuid
      (recur (uuid/uuid-string (uuid/make-random-uuid))))))

(defn- normalize-path
  [path]
  (.replace path
            (js* "/[^a-zA-z0-9-_]/g") ;; to check
            "-"))

(defn- build-id
  [entity-name]
  (str (normalize-path entity-name)
       "-"
       (generate-uuid)))

(defn- now-as-milliseconds
  "Return the current time as a string"
  []
  (str (.now js/Date)))

(defn- register-entity-in
  [entity atom-map]
  (swap! atom-map assoc (:id entity) entity))

(defn- is-project
  [entity]
  (= (:type entity) "Project"))

(defn- is-task
  [entity]
  (filter #{(:type entity)} task-types))

(defn- register-tags!
  [entry entry-type]
  (doseq [tag (:tags entry)]
    (when-not (contains? @tags tag)
      (swap! tags assoc tag {:projects (atom {})
                             :tasks    (atom {})}))
    (swap! (get-in @tags [tag entry-type]) assoc (:id entry) entry)))

(defn- store-task!
  [task]
  (if (and (:repeating task)
           (= (get-in task [:repeating :type])
              "pattern"))
    (register-entity-in task repeating-tasks)
    (if (:done task)
      (register-entity-in task completed-tasks)
      (register-entity-in task active-tasks)))
  (register-entity-in task tasks)
  (register-tags! task :tasks))

(defn- store-project!
  [project]
  (if (= (:id project) "Inbox")
    (reset! inbox-project project)
    (do
      (register-entity-in project projects)
      (if (:done project)
        (register-entity-in project completed-projects)
        (register-entity-in project active-projects)))
    (register-tags! project :projects)))

(defn- get-parent
  [task]
  (if (= (:type task) "Task")
    (get (all-projects) (:parent task))
    (get (all-tasks) (:parent task))))

(defn- install-task
  [task]
  (store-task! task)
  (db/serialize-task! task)
  task)

(defn- install-project
  [project]
  (store-project! project)
  (db/serialize-project! project)
  project)

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
;;     - show-before: int >= 0 number of days before the due date when the instance should appear in the inbox

(defn- new-task
  [task-name project parent task-type tags tasks description remind-date due-date show-before repeating done]
  (when-not (is-task {:type task-type})
    (throw (js/Error. (str "Task type must belong to ["
                           (clojure.string/join ", "
                                                task-types)
                           "]. Provided type was `"
                           task-type
                           "`"))))
  (when (and (is-project parent)
             (not= (:id parent)
                   (:id project)))
    ;; Ensure that parent is not another project if parent is a project
    (throw (js/Error. (str "`parent` and `project` can't be different if parent is a project"))))
  (when (and (is-task parent)
             (not= (get-in parent [:project :id])
                   (:id project)))
    ;; Ensure that parent is in the same project if parent is a task
    (throw (js/Error. (str "`parent` has to be a task of `project` if parent is a task"))))
  {:name        task-name
   :id          (build-id task-name)
   :project     (select-keys project [:name :id])
   :parent      (:id parent)
   :type        (if (= (:type parent) "Project")
                  "Task"
                  "SubTask")
   :tags        tags
   :tasks   tasks
   :description description
   :remind-date remind-date
   :due-date    due-date
   :show-before show-before
   :repeating   repeating
   :done        done})

(defn- new-project
  [project-name tags tasks description due-date active done]
  {:name          project-name
   :id            (build-id project-name)
   :type          "Project"
   :tags          tags
   :tasks         tasks
   :description   description
   :creation-date (now-as-milliseconds)
   :due-date      due-date
   :active        active
   :done          done})

(defn inbox
  []
  @inbox-project)

(defn all-projects
  []
  (assoc
    @projects
    "Inbox"
    (inbox)))

(defn all-tasks
  []
  @tasks)

(defn register-task
  [task-name {:keys [project parent tags tasks description remind-date due-date show-before repeating]
              :or   {project     (inbox)
                     parent      (inbox)
                     tags        []
                     tasks   []
                     description ""
                     remind-date nil
                     due-date    nil
                     show-before 0
                     repeating   false}}]
  (let [task (new-task task-name
                       project
                       parent
                       tags
                       tasks
                       description
                       remind-date
                       due-date
                       show-before
                       repeating
                       false)]
    (install-task task)
    (install-project (assoc project :tasks (conj (:tasks project) task)))
    task))

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


(defn update-task!
  "This function is thought in the way only one property is changed at a time"
  [task & body]
  (let [args (into {}
                   (into []
                         (map #(into [] %)
                              (partition 2 body))))]
    (if (even? (count body))
      (let [tmp-task (atom (merge task args))]
        (doseq [[k v] args]
          (when (= (name k) "id")
            (throw (js/Error. "`id` can not be updated!")))
          (when (= (name k) "name")
            (swap! tmp-task assoc :id (build-id v))
            (let [parent   (get-parent task)]
              (if (is-project parent)
                (let [matching (first (filter #(= (:id task)
                                                  (:id %))
                                              (:tasks parent)))
                      project  (assoc
                                 parent
                                 :tasks
                                 (replace {matching @tmp-task}
                                          (:tasks parent)))]
                  (install-project project))
                (let [matching (first (filter #(= (:id task)
                                                  (:id %))
                                              (:tasks parent)))
                      parent-task  (assoc
                                     parent
                                     :tasks
                                     (replace {matching @tmp-task}
                                              (:tasks project)))]
                  (install-task parent-task)))
              (db/remove-task! task)))
          (when (= (name k) "project")
            (let [old-project (get (all-projects)
                                   (:id (:project task)))
                  old-project (assoc
                                old-project
                                :tasks
                                (filter #(not= (:id task) (:id %))
                                        (:tasks old-project)))
                  new-project (get (all-projects)
                                   (:id v))
                  new-project (assoc
                                new-project
                                :tasks
                                (conj (:tasks new-project)
                                      @tmp-task))]
              (install-project old-project)
              (install-project new-project)
              (db/remove-task! task))))
        (install-task @tmp-task))
      (throw (js/Error. "Wrong number of arguments. `body` has to have an even number of elements")))))


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
          (when (= (name k) "name")
            (swap! tmp-project assoc :id (build-id v))
            (db/rename-project! @tmp-project
                                (:id project))))
        (install-project @tmp-project))
      (throw (js/Error. "Wrong number of arguments. `body` has to have an even number of elements")))))

(defn load-project!
  [project]
  (store-project! project))

(defn load-task!
  [task]
  (store-task! task))

(defn ^:export list-of-projects
  []
  (clj->js (into (vals @active-projects) (vals @completed-projects))))
