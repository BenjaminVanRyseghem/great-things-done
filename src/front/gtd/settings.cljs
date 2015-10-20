(ns gtd.settings
  (:require [gtd.platform :as platform]
            [node.fs :as fs]
            [utils.core :as utils]))


(def ^:private settings (atom {}))
(def ^:private default-settings {})

(defn pixabay
  ([] (:pixabay @settings))
  ([& args] (get-in (:pixabay @settings)
                    args)))

(defn date-format
  []
  (or (:date-format @settings)
      "MM/DD/YYYY"))

(defn load-settings
  []
  (let [path         (platform/settings-file-path)
        file-exists? (fs/path-exists? path)
        data (if file-exists?
               (utils/json->clj (fs/read-file path))
               default-settings)]
    (reset! settings data)))
