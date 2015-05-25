(ns great-things-done.macro)

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
                                               (partition 2 body))))]
    (if (even? (count body))
      `(if (contains? ~os-map# (get ~platform-translation#
                                    js/process.platform))
                      (get ~os-map# (get ~platform-translation#
                                         js/process.platform))
                      ~(get os-map# :default))
         (throw (Exception. "Wrong number of args. `for-os` should have an even number of arguments")))))
