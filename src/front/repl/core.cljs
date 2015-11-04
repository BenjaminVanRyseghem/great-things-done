; Copyright (c) 2015, Benjamin Van Ryseghem. All rights reserved.
; The use and distribution terms for this software are covered by the
; Eclipse Public License 1.0 (http://opensource.org/licenses/eclipse-1.0.php)
; which can be found in the file epl-v10.html at the root of this distribution.
; By using this software in any fashion, you are agreeing to be bound by
; the terms of this license.
; You must not remove this notice, or any other, from this software.

(ns repl.core
  "See doc https://nodejs.org/api/repl.html"
  (:require [cuerdas.core :as string]
            [gtd.state :as state]))

(def remote (js/require "remote"))
(def net    (.require remote "net"))
(def repl   (.require remote "repl"))

;; ==================
;;
;;      HELPERS
;;
;; ==================

(defn- fill-string
  [length &{:keys [base]
            :or   [base ""]}]
  {:pre [pos? length]}
  (let [string (atom base)]
    (while (< (count @string)
              length)
      (swap! string str " "))
    @string))

(defn- format-projects
  [projects]
  (let [max-id (apply max
                      (map #(count (:id %))
                           projects))]
    (js/console.log max-id)
    (map (fn [project]
           (str (fill-string max-id
                             :base (:id project))
                ":"
                (:name project)))
         projects)))

;; ==================
;;
;;        MAIN
;;
;; ==================

(defn- split-cmd
  [string]
  (string/split (string/trim (str string))
                " "))

(defmulti eval-repl first)

(defmethod eval-repl "list" [args]
  (if (= 1
         (count args))
    (string/unlines (format-projects (vals (state/all-projects))))
    "list"))

(defmethod eval-repl "help" [args]
  "HELP ME!!")

(defmethod eval-repl :default [args]
  (str "The action \""
       (first args)
       "\" is unknown. Please type \"help\" for the list of supported commands"))

(defn- custom-eval
  [cmd context filename callback]
  (let [result (eval-repl (split-cmd cmd))]
    (callback nil
              result)
    nil))

(defn- create-server
  [prompt]
  (.createServer net
                 (fn [socket]
                   (let [new-repl (.start repl
                                          (clj->js
                                           {:prompt   prompt
                                            :input    socket
                                            :output   socket
                                            :eval     custom-eval}))]
                     (.on new-repl
                          "exit"
                          #(.end socket))))))

(defn init-tcp-repl
  [prompt & {:keys [port addr]
             :or {port 5001
                  addr "localhost"}}]
  (let [server (create-server prompt)]
    (.listen server
             port
             addr)))

(defn init-file-repl
  [prompt & {:keys [port]
             :or {port "/tmp/gtd-repl-sock"}}]
  (let [server (create-server prompt)]
    (.listen server
             port)))

(defn init-tcp-cli
  [& {:keys [port addr]
      :or {port 5002
           addr "localhost"}}]
  (let [server (.createServer net
                              (fn [socket]
                                (.on socket
                                     "data"
                                     (fn [cmd]
                                       (.write socket
                                               (eval-repl (split-cmd cmd)))
                                       (.end socket)))))]
    (.listen server
             port
             addr)))
