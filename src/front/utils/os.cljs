(ns utils.os)

(def ^:private platform-translation {"darwin"  "Mac OS X"
                                     "win32"   "Windows"
                                     "freebsd" "BSD"
                                     "linux"   "Linux"
                                     "sunos"   "SunOS"})

(defn get-os
  []
  (get platform-translation
       js/process.platform))

(defn for-os
  "Execute code depending on the current OS"
  [& body]
  (let [os-map  (into {}
                      (into []
                            (map #(into [] %)
                                 (partition 2 body))))
        os-keys (keys os-map)
        os      (get-os)]
    (if (even? (count body))
      (if (contains? os-map os)
        (get os-map os)
        (get os-map :default))
      (throw (js/Error. "Wrong number of args. `for-os` should have an even number of arguments")))))
