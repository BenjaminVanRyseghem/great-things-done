(ns core.core
  (:require [figwheel.client :as fw]
            [ui.core :as ui]
            [great_things_done.crypto :as crypto]
            [great_things_done.keytar :as keytar]
            [great_things_done.platform :as platform]))


;; Initialize figwheel websocket
(fw/watch-and-reload
  :websocket-url   "ws://localhost:3449/figwheel-ws"
  :jsload-callback (fn [] (print "reloaded")))

;; Ensures all necessary folders and files are present
(platform/ensure-database-path!)

;; Finally render the app
(ui/render-core)

(let [c (crypto/encrypt "plip" "password")
      d (crypto/decrypt c "password")]
  (js/console.log c)
  (js/console.log d))

(keytar/replace-password! "great-things-done" "benjamin" "password")
(js/console.log (keytar/get-password "great-things-done" "benjamin"))
