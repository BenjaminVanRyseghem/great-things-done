(ns great-things-done.platform
  (:require [node.fs :as fs])
  (:use-macros [great-things-done.macro :only (for-os)]))

(defn- home
  "Creates a path starting from current user home"
  [& body]
  (let [home-env  (for-os
                   "windows" "USERPROFILE"
                   :default  "HOME")
        home-path (aget js/process.env home-env)
        args      (conj body "/" home-path)]
    (apply str args)))

(defn- ensure-path!
  "Ensures the path provided as argument is present on disk"
  [path]
  (when-not (fs/exists? path)
    (fs/mkdir path)))

(defn database-path
  "Return the database path according to the operating system"
  []
  (for-os
   "Mac OS X" (home "Library/Application Support/Great Things Done")
   :default   (home ".great-things-done")))

(defn database-meta-projects-path
  "Return the database path for the meta projects"
  []
  (str (database-path) "/meta-projects"))

(defn database-projects-path
  "Return the database path for the projects"
  []
  (str (database-path) "/projects"))

(defn database-tasks-path
  "Return the database path for the tasks"
  []
  (str (database-path) "/tasks"))

(defn- config-path
  "Return the OS Specific path to config files"
  []
  (for-os
   "Mac OS X" (home "Library/Application Support/Great Things Done")
   :default   (home ".config/great-things-done")))

(defn ensure-database-path!
  "Ensure that `database-path` exists on disk"
  []
  (ensure-path! (database-path)))

(defn ensure-database-meta-projects-path!
  "Ensure that `database-meta-projects-path` exists on disk"
  []
  (ensure-path! (database-meta-projects-path)))

(defn ensure-database-projects-path!
  "Ensure that `database-projects-path` exists on disk"
  []
  (ensure-path! (database-projects-path)))

(defn ensure-database-tasks-path!
  "Ensure that `database-tasks-path` exists on disk"
  []
  (ensure-path! (database-tasks-path)))

(defn ensure-config-file!
  "Ensure that the config file exists"
  []
  (ensure-path! (config-path)))
