(ns gtd.platform
  (:require [node.fs :as fs]
            [utils.os :as os]))

(def separator
  (os/for-os
   "Windows" "\\"
   :default  "/"))

(defn- home
  "Creates a path starting from current user home"
  [& body]
  (let [home-env  (os/for-os
                   "windows" "USERPROFILE"
                   :default  "HOME")
        home-path (aget js/process.env home-env)
        args      (conj body separator home-path)]
    (apply str args)))

(defn database-path
  "Return the database path according to the operating system"
  []
  (os/for-os
   "Mac OS X" (home "Library/Application Support/Great Things Done")
   :default   (home ".great-things-done")))

(defn database-meta-projects-path
  "Return the database path for the meta projects"
  []
  (str (database-path) (str separator "meta-projects")))

(defn database-projects-path
  "Return the database path for the projects"
  []
  (str (database-path) (str separator "projects")))

(defn- config-path
  "Return the OS Specific path to config files"
  []
  (os/for-os
   "Mac OS X" (home "Library/Application Support/Great Things Done")
   :default   (home (str ".config" separator "great-things-done"))))

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

(defn ensure-inbox!
  "Ensure that the inbox folder exists"
  []
  (fs/ensure-dir! (str (database-projects-path)
                       separator
                       "Inbox")))

(defn settings-file-path
  "Return the OS Specific path to the setting file"
  []
  (str (config-path)
       separator
       "great-things-done.settings"))

(defn logged-user
  []
  (aget js/process.env "USER"))
