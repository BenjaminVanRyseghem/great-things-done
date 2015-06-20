(ns repl.core
  "See doc https://nodejs.org/api/repl.html")

(def remote (js/require "remote"))
(def net    (.require remote "net"))
(def repl   (.require remote "repl"))

(defn- split-cmd
  [string]
  (.split (.trim string)
          " "))

(defn- extract-action
  [string]
  (first (.split (.trim string)
                 " ")))

(defmulti eval-repl #(first %))

(defmethod eval-repl "list" [args]
  "list")

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
              result)))

(defn- create-server
  [prompt]
  (.createServer net
                 (fn [socket]
                   (let [new-repl (.start repl
                                          prompt
                                          socket
                                          custom-eval)]
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
