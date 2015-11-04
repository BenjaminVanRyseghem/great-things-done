; Copyright (c) 2015, Benjamin Van Ryseghem. All rights reserved.
; The use and distribution terms for this software are covered by the
; Eclipse Public License 1.0 (http://opensource.org/licenses/eclipse-1.0.php)
; which can be found in the file epl-v10.html at the root of this distribution.
; By using this software in any fashion, you are agreeing to be bound by
; the terms of this license.
; You must not remove this notice, or any other, from this software.

(ns gtd.integration
  (:use-macros [macro.core :only (for-os)]))

(def ^:private osx-mail-applescript
  "tell application \"Mail\"
     set _sel to get selection
     set _links to {}
     repeat with _msg in _sel
       set _messageURL to \"message://%3c\" & _msg's message id & \"%3e\"
       set end of _links to _messageURL
     end repeat
     set AppleScript's text item delimiters to return
   end tell

   return _links")

(def ^:private osx-finder-applescript
  "tell application \"Finder\"
     set acc to {}
   	 set sel to the selection
   	 repeat with each in sel
   	   set end of acc to URL of each
     end repeat
   end tell

   return acc")

(defn- run-applescript
  [code callback]
  (let [applescript (js/require "applescript")]
    (.execString applescript
                 code
                 (fn [err res]
                   (when err
                     (throw (js/Error. (str "Error when performing" code))))
                     (callback res)))))

(defmulti retrieve-current-app-data-osx
  #(:id %1))

(defmethod retrieve-current-app-data-osx "com.apple.mail" [info callback]
  (run-applescript osx-mail-applescript callback))

(defmethod retrieve-current-app-data-osx "com.apple.finder" [info callback]
  (run-applescript osx-finder-applescript callback))

(defn- get-current-app-info-osx
  "Return info about the current frontmost application on OSX"
  []
  (let [remote  (js/require "remote")
        nodobjc (js/require "nodobjc")]
    (.framework nodobjc "AppKit")
    (let [workspace (.NSWorkspace nodobjc "sharedWorkspace")
          app       (workspace "frontmostApplication")
          app-name  (str (app "localizedName"))
          app-id    (str (app "bundleIdentifier"))]
      {:name app-name
       :id   app-id})))

(defn get-current-app-info
  []
  (for-os
   "Mac OS X" (get-current-app-info-osx)))

(defn ^:export js-get-current-app-info
  []
  (clj->js (get-current-app-info)))

(defn get-current-app-data
  [fun]
  (let [info (get-current-app-info)]
    (for-os
     "Mac OS X" (retrieve-current-app-data-osx info fun))))

(defn ^:export js-get-current-app-data
  [fun]
  (clj->js (get-current-app-data fun)))
