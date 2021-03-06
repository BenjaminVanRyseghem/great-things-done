; Copyright (c) 2015, Benjamin Van Ryseghem. All rights reserved.
; The use and distribution terms for this software are covered by the
; Eclipse Public License 1.0 (http://opensource.org/licenses/eclipse-1.0.php)
; which can be found in the file epl-v10.html at the root of this distribution.
; By using this software in any fashion, you are agreeing to be bound by
; the terms of this license.
; You must not remove this notice, or any other, from this software.

(ns gtd.state
  (:require [cljs-uuid-utils.core :as uuid]
            [cuerdas.core :as string]
            [gtd.db :as db]
            [reagent.core :as reagent :refer [atom]]
            [utils.date :as date]))

(def ^:private task-types ["Task" "SubTask"])

(declare all-projects)
(declare all-tasks)

;; Caches
(defonce ^:private meta-projects      (atom []))
(defonce projects                     (atom {}))
(defonce ^:private active-projects    (atom {}))
(defonce ^:private completed-projects (atom {}))
(defonce tasks                        (atom {}))
(defonce ^:private repeating-tasks    (atom {}))
(defonce ^:private completed-tasks    (atom {}))
(defonce ^:private tags               (atom {}))

(defonce ^:private inbox-project      (atom {:name          "Inbox"
                                             :id            "Inbox"
                                             :tags          []
                                             :tasks         []
                                             :description   nil
                                             :creation-date (date/now)
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
  (string/replace path
                  #"[^a-zA-z0-9-_]"
                  "-"))

(defn- build-id
  [entity-name]
  (str (normalize-path entity-name)
       "-"
       (generate-uuid)))

(defn- register-entity-in
  [entity atom-map]
  (swap! atom-map assoc (:id entity) entity))

(defn- unregister-entity-in
  [entity atom-map]
  (swap! atom-map dissoc (:id entity)))

(defn- is-project?
  [entity]
  (= (:type entity) "Project"))

(defn- is-task?
  [entity]
  (boolean (not-empty (filter #{(:type entity)} task-types))))

(defn- register-tags!
  [entry entry-type]
  (doseq [tag (:tags entry)]
    (when-not (contains? @tags tag)
      (swap! tags assoc tag {:projects (atom {})
                             :tasks    (atom {})}))
    (swap! (get-in @tags [tag entry-type]) assoc (:id entry) entry)))

(defn unregister-tags!
  [entry entry-type]
  (doseq [tag (:tags entry)]
    (when (contains? @tags tag)
      (swap! (get-in @tags [tag entry-type]) dissoc (:id entry))
      (when (every? (fn [a]
                      (empty? (deref a)))
                    (vals (get @tags tag)))
        (swap! tags dissoc tag)))))

(defn- store-task!
  [task]
  (when (and (:repeating task)
             (= (get-in task [:repeating :type])
                "pattern"))
    (register-entity-in task repeating-tasks))
  (when (:done task)
    (register-entity-in task completed-tasks))
  (register-entity-in task tasks)
  (register-tags! task :tasks))

(defn- store-project!
  [project]
  (if (= (:id project) "Inbox")
    (reset! inbox-project project)
    (do
      (register-entity-in project projects)
      (register-tags! project :projects)
      (when (:done project)
        (register-entity-in project completed-projects))
      (when (:active project)
        (register-entity-in project active-projects)))))

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

(defn- install-entity!
  [entity]
  (when (is-project? entity)
    (install-project entity))
  (when (is-task? entity)
    (install-task entity)))

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
  (vals @tasks))

(defn get-task-by-id
  [id]
  (get @tasks id))

(defn get-project-by-id
  [id]
  (get (all-projects) id))

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
  [task-name project parent tags tasks description remind-date due-date show-before repeating done]
  (when (and (is-project? parent)
             (not= (:id parent)
                   (:id project)))
    ;; Ensure that parent is not another project if parent is a project
    (throw (js/Error. (str "`parent` and `project` can't be different if parent is a project"))))
  (when (and (is-task? parent)
             (not= (get-in parent [:project :id])
                   (:id project)))
    ;; Ensure that parent is in the same project if parent is a task
    (throw (js/Error. (str "`parent` has to be a task of `project` if parent is a task"))))
  {:name                   task-name
   :id                     (build-id task-name)
   :project                (select-keys project [:name :id])
   :parent                 (:id parent)
   :type                   (if (is-project? parent)
                             "Task"
                             "SubTask")
   :tags                   tags
   :tasks                  tasks
   :description            description
   :today                  false
   :remind-date            remind-date
   :due-date               due-date
   :creation-date          (date/now)
   :last-modification-time (date/now)
   :show-before            show-before
   :repeating              repeating
   :done                   done})

(defn- new-project
  [project-name tags tasks description due-date show-before active hide-done show-only-first done]
  {:name                   project-name
   :id                     (build-id project-name)
   :type                   "Project"
   :tags                   tags
   :tasks                  tasks
   :description            description
   :creation-date          (date/now)
   :last-modification-time (date/now)
   :due-date               due-date
   :show-before            show-before
   :active                 active
   :hide-done              hide-done
   :show-only-first        show-only-first
   :done                   done})

(defn register-task
  [task-name & {:keys [project parent tags tasks description remind-date due-date show-before repeating]
              :or   {project     (inbox)
                     parent      (inbox)
                     tags        []
                     tasks       []
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

(defn unregister-task
  [task]
  (unregister-entity-in task tasks)
  (unregister-entity-in task repeating-tasks)
  (unregister-entity-in task completed-tasks)
  (unregister-tags! task :tasks)
  task)

(defn register-project
  [project-name & {:keys [tags tasks description due-date show-before hide-done show-only-first active]
                   :or   {tags        []
                          tasks       []
                          description ""
                          due-date    nil
                          show-before 0
                          active      true
                          hide-done   true
                          show-only-first true}}]
  (install-project (new-project project-name
                                tags
                                tasks
                                description
                                due-date
                                show-before
                                active
                                hide-done
                                show-only-first
                                false)))

(defn unregister-project
  [project]
  (unregister-entity-in project projects)
  (unregister-entity-in project active-projects)
  (unregister-entity-in project completed-projects)
  (unregister-tags! project :projects)
  project)

(defn- update-task-project
  "Only to use when the project change name"
  [task new-project old-id]
  (let [new-task (assoc task :project (select-keys new-project
                                                   [:name :id]))
        new-task (if (= (:parent task)
                        old-id)
                   (assoc new-task :parent (:id new-project))
                   new-task)]
    (install-task new-task)
    new-task))

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
          (when (= (name k) "done")
            )
          (when (= (name k) "id")
            (throw (js/Error. "`id` can not be updated!")))
          (when (= (name k) "project")
            (throw (js/Error. "The field `project` can only be updated via the field `parent`.")))
          (when (= (name k) "name")
            (swap! tmp-task assoc :id (build-id v))
            (let [parent         (get-parent task)
                  matching       (first (filter #(= (:id task)
                                                    (:id %))
                                                (:tasks parent)))
                  updated-parent (assoc
                                   parent
                                   :tasks
                                   (replace {matching @tmp-task}
                                            (:tasks parent)))]
              (install-entity! updated-parent))
            (unregister-task task)
            (db/remove-task! task))
          ;; This section is to be tested
          ;; The scenarios:
          ;; [x] move a task from a project to another (Inbox -> My first project)
          ;; [ ] update a task as a subtask of another task in the same project
          ;; [ ] update a subtask as a task of another project
          ;; [ ] update a subtask as a task in the same project
          (when (= (name k) "parent")
            (let [parent (get-parent task)
                  project-id (get-in task [:project :id])]
              ;; When new parent is a project
              (when (is-project? v)
                (swap! tmp-task assoc :project (select-keys v
                                                            [:name :id]))
                ;; When the task was in a different project
                (when (not= (:id v)
                            project-id)
                  (db/remove-task! task)))
              ;; When new parent is a task
              (when (is-task? v)
                (swap! tmp-task assoc :project (:project v))
                ;; When the task was in a different project
                (when (not= (get-in v [:project :id])
                            project-id)
                  (db/remove-task! task)))
              (let [new-parent  (assoc
                                  v
                                  :tasks
                                  (conj (:tasks v)
                                        task))
                    old-parent  (assoc
                                  parent
                                  :tasks
                                  (into []
                                        (remove #(= (:id task) (:id %))
                                                (:tasks parent))))]
                (js/console.log (:id old-parent))
                (install-entity! new-parent)
                (install-entity! old-parent)))))
        (install-task @tmp-task))
      (throw (js/Error. "Wrong number of arguments. `body` has to have an even number of elements")))))

(defmulti update-project-value (fn [k v p tmp] (name k)))

(defmethod update-project-value :default
  [_ v _ _ _]
  v)

(defmethod update-project-value "id"
  [_ _ _ _ _]
  (throw (js/Error. "`id` can not be updated!")))

(defmethod update-project-value "name"
  [_ v project tmp-project callback]
  (swap! tmp-project assoc :id (build-id v))
  (swap! tmp-project assoc :name v)
  (db/rename-project! @tmp-project
                      (:id project))
  (doseq [task (:tasks project)]
    (update-task-project task
                         @tmp-project
                         (:id project)))
  (when-not (nil? callback)
    (callback @tmp-project))
  (unregister-project project)
  v)

(defmethod update-project-value "active"
  [_ v project tmp-project _]
  (if v
    (register-entity-in @tmp-project active-projects)
    (unregister-entity-in @tmp-project active-projects))
  v)

(defmethod update-project-value "tags"
  [_ v project tmp-project _]
    (unregister-tags! project :projects)
    (register-tags! project :projects)
  v)

(defmethod update-project-value "done"
  [_ v project tmp-project _]
  (register-entity-in @tmp-project completed-projects)
  (swap! tmp-project assoc :active (update-project-value :active
                                                         false
                                                         project
                                                         tmp-project))
  v)

(defn update-project!
  [project & body]
  (let [map-args (into {}
                       (map vec
                            (partition 2 body)))
        args (into []
                   (map #(into [] %)
                        (partition 2 body)))]
    (if (even? (count body))
      (let [tmp-project (atom project)]
        (doseq [[k v] args]
          (when-not (= k
                       :callback)
            (swap! tmp-project assoc (keyword k) (update-project-value k
                                                                       v
                                                                       project
                                                                       tmp-project
                                                                       (:callback map-args)))))
        (install-project @tmp-project))
      (throw (js/Error. "Wrong number of arguments. `body` has to have an even number of elements")))))

(defn load-project!
  [project]
  (store-project! project))

(defn load-task!
  [task]
  (store-task! task))

(defn completion-for
  [project]
  (let [tasks (map #(get-task-by-id (:id %))
                   (:tasks project))]
    {:done (count (filter (fn [task] (:done task))
                          tasks))
     :total (count tasks)}))

(defn get-tags
  []
  (if (nil? (keys @tags))
    []
    (keys @tags)))

(defn move-to-trash-task
  [task])

(defn delete-task!
  [task]
  (unregister-task task)
  (let [project (get-project-by-id (get-in task
                                           [:project :id]))]
    (install-project (assoc project :tasks (remove #(= (:id task)
                                                       (:id %))
                                                   (:tasks project)))))
  (db/remove-task! task))

(defn ^:export list-of-projects
  []
  (clj->js (vals (all-projects))))
