(ns repl.core
  "See doc https://nodejs.org/api/repl.html"
  (:require [clojure.string :as string]
            [great-things-done.state :as state]))

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
  (.split (.trim (str string))
          " "))

(defmulti eval-repl first)

(defmethod eval-repl "list" [args]
  (if (= 1
         (count args))
    (string/join "\n"
                 (format-projects (vals (state/all-projects))))
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
