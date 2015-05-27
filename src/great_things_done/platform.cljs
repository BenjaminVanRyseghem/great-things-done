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

(defn- config-path
  "Return the OS Specific path to config files"
  []
  (for-os
   "Mac OS X" (home "Library/Application Support/Great Things Done")
   :default   (home ".config/great-things-done")))

(defn ensure-database-path!
  "Ensure that `database-path` exists on disk"
  []
  (fs/ensure-dir! (database-path)))

(defn ensure-database-meta-projects-path!
  "Ensure that `database-meta-projects-path` exists on disk"
  []
  (fs/ensure-dir! (database-meta-projects-path)))

(defn ensure-database-projects-path!
  "Ensure that `database-projects-path` exists on disk"
  []
  (fs/ensure-dir! (database-projects-path)))

(defn ensure-config-file!
  "Ensure that the config file exists"
  []
  (fs/ensure-dir! (config-path)))
