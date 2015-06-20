(ns repl.core)

(def remote (js/require "remote"))
(def net    (.require remote "net"))
(def repl   (.require remote "repl"))

(defn- create-server
  [prompt]
  (.createServer net
                 (fn [socket]
                   (.start repl
                           prompt
                           socket))))

(defn init-tcp-repl
  [prompt & {:keys [port addr]
             :or {port 5001
                  addr "localhost"}}]
  (let [server (create-server prompt)]
    (.listen server
             port
             address)))

(defn init-file-repl
  [prompt & {:keys [port]
             :or {port "/tmp/gtd-repl-sock"}}]
  (let [server (create-server prompt)]
    (.listen server
             port)))
