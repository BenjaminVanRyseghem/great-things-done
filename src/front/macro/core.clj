(ns macro.core)

(defmacro for-os
  "Execute code depending on the current OS"
  [& body]
  (let [platform-translation# {"darwin"  "Mac OS X"
                               "win32"   "Windows"
                               "freebsd" "BSD"
                               "linux"   "Linux"
                               "sunos"   "SunOS"}
        os-map#               (into {}
                                    (into []
                                          (map #(into [] %)
                                               (partition 2 body))))
        keys#                 (keys os-map#)]
    (if (even? (count body))
      `(let [os# (get ~platform-translation#
                      js/process.platform)]
         (if (contains? ~os-map# os#)
           (get ~os-map# os#)
           ~(get os-map# :default)))
      (throw (Exception. "Wrong number of args. `for-os` should have an even number of arguments")))))
