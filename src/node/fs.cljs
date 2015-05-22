(ns node.fs)

(def ^:private fs (js/require "fs"))

(defn exists?
  "Test wheter or not the given path exists by checking the file system. If `callback` is provided, the execution is asynchronous and `callback` is invoked with either true or false."
  [path & {:keys [callback]}]
  (if callback
    (.exists fs path callback)
    (.existsSync fs (clj->js path))))

(defn mkdir
  "mkdir(2). `mode` defaults to `0777`. If `callback` is provided ,  the execution is asynchronous and `callback` is invoked with no arguments other than a possible exception."
  [path & {:keys [callback mode]
           :or {mode "0777"}}]
  (js/console.log path)
  (if callback
    (.mkdir fs path mode callback)
    (.mkdirSync fs path mode)))
