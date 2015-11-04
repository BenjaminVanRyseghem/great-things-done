; Copyright (c) 2015, Benjamin Van Ryseghem. All rights reserved.
; The use and distribution terms for this software are covered by the
; Eclipse Public License 1.0 (http://opensource.org/licenses/eclipse-1.0.php)
; which can be found in the file epl-v10.html at the root of this distribution.
; By using this software in any fashion, you are agreeing to be bound by
; the terms of this license.
; You must not remove this notice, or any other, from this software.

(ns gtd.import-db
  (:require [gtd.db :as db]
            [gtd.state :as state]
            [gtd.platform :as platform]
            [node.fs :as fs]))

(defn import-meta-projects
  []
  ;; add loop here

  (let [result (js->clj (js/importScript "function(p) { p.filter(function(e, i){ return (i % 2) === 0; })}"))]
    (doseq [each result]
      (js/console.log each))))

;; Useful?
(defn- import-task
  [project-path task-id]
  (let [task (db/deserialize-task project-path
                                  task-id)]
    (state/load-task! @task)
    task))

(defn- import-project
  [folder-name]
  (let [project (db/deserialize-project folder-name
                                        #(state/load-task! %))]
    (state/load-project! project)
    project))

(defn import-all-projects!
  []
  (let [root    (platform/database-projects-path)
        folders (fs/read-dir root)]
    (doseq [folder folders]
      (when-not (= (first folder) ".")
        (import-project folder)))))
