(ns core.core
  (:require [figwheel.client :as fw :include-macros true]
            [ui.core :as ui]
            [great-things-done.app-menu :as app-menu]
            [great-things-done.crypto :as crypto]
            [great-things-done.import-db :as import-db]
            [great-things-done.keytar :as keytar]
            [great-things-done.platform :as platform]))


;; Initialize figwheel websocket
(fw/watch-and-reload
  :websocket-url   "ws://localhost:3449/figwheel-ws"
  :jsload-callback (fn [] (print "reloaded")))

;; Ensures all necessary folders and files are present
(platform/ensure-database-path!)

;; Finally render the app
(ui/render-core)

;; Initialize menu
(app-menu/init)

(let [c (crypto/encrypt "plip" "password")
      d (crypto/decrypt c "password")]
  (js/console.log c)
  (js/console.log d))

(keytar/replace-password! "great-things-done" "benjamin" "password")
(js/console.log (keytar/get-password "great-things-done" "benjamin"))
