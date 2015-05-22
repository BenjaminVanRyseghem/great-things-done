(ns great_things_done.macro)

(defmacro for-os
  "Execute code depending on the current OS"
  [& body]
  (let [os-map# (into {}
                       (into []
                             (map #(into [] %)
                                  (partition 2 body))))]
     (if (even? (count body))
       (if-let [fun# (get os-map# (System/getProperty "os.name"))]
         fun#
         (get os-map# :default))
       (throw (Exception. "Wrong number of args. `for-os` should have an even number of arguments")))))
