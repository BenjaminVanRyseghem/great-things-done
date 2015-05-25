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

(defn ensure-database-path!
  "Ensure that `database-path` exists on disk"
  []
  (let [path (database-path)]
    (when-not (fs/exists? path)
      (fs/mkdir path))))
