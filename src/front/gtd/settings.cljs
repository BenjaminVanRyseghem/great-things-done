; Copyright (c) 2015, Benjamin Van Ryseghem. All rights reserved.
; The use and distribution terms for this software are covered by the
; Eclipse Public License 1.0 (http://opensource.org/licenses/eclipse-1.0.php)
; which can be found in the file epl-v10.html at the root of this distribution.
; By using this software in any fashion, you are agreeing to be bound by
; the terms of this license.
; You must not remove this notice, or any other, from this software.

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
