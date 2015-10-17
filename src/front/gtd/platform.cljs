(ns gtd.platform
  (:require [node.fs :as fs]))

(def ^:private platform-translation {"darwin"  "Mac OS X"
                                     "win32"   "Windows"
                                     "freebsd" "BSD"
                                     "linux"   "Linux"
                                     "sunos"   "SunOS"})

(defn get-os
  []
  (get platform-translation
       js/process.platform))

(defn for-os
  "Execute code depending on the current OS"
  [& body]
  (let [os-map  (into {}
                      (into []
                            (map #(into [] %)
                                 (partition 2 body))))
        os-keys (keys os-map)
        os      (get-os)]
    (if (even? (count body))
      (if (contains? os-map os)
        (get os-map os)
        (get os-map :default))
      (throw (js/Error. "Wrong number of args. `for-os` should have an even number of arguments")))))


(def separator
  (for-os
   "Windows" "\\"
   :default  "/"))

(defn- home
  "Creates a path starting from current user home"
  [& body]
  (let [home-env  (for-os
                   "windows" "USERPROFILE"
                   :default  "HOME")
        home-path (aget js/process.env home-env)
        args      (conj body separator home-path)]
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
  (str (database-path) (str separator "meta-projects")))

(defn database-projects-path
  "Return the database path for the projects"
  []
  (str (database-path) (str separator "projects")))

(defn- config-path
  "Return the OS Specific path to config files"
  []
  (for-os
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
