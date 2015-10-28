(ns utils.badge
  (:use-macros [macro.core :only (for-os)]))

(def ^{:private true
       :no-docs true} dock (.-dock (.require (js.require "remote")
                                             "app")))

(defn set-badge
  [text]
  (for-os
   "Mac OS X" (.setBadge dock
                         (str text))
   :default "Do nothing"))
