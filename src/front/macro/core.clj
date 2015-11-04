; Copyright (c) 2015, Benjamin Van Ryseghem. All rights reserved.
; The use and distribution terms for this software are covered by the
; Eclipse Public License 1.0 (http://opensource.org/licenses/eclipse-1.0.php)
; which can be found in the file epl-v10.html at the root of this distribution.
; By using this software in any fashion, you are agreeing to be bound by
; the terms of this license.
; You must not remove this notice, or any other, from this software.

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
