(ns core.core
  (:require [figwheel.client :as fw :include-macros true]
            [ui.core :as ui]
            [great-things-done.application-info :as application-info]
            [great-things-done.app-menu :as app-menu]
            [great-things-done.crypto :as crypto]
            [great-things-done.db :as db]
            [great-things-done.import-db :as import-db]
            [great-things-done.keytar :as keytar]
            [great-things-done.platform :as platform]))


;; Initialize figwheel websocket
(fw/watch-and-reload
  :websocket-url   "ws://localhost:3449/figwheel-ws"
  :jsload-callback (fn [] (print "reloaded")))

;; Ensures all necessary folders and files are present
(platform/ensure-database-path!)
(platform/ensure-database-meta-projects-path!)
(platform/ensure-database-projects-path!)
(platform/ensure-inbox!)
(platform/ensure-config-file!)

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
(import-db/import-meta-projects)

;; (db/register-project "first-project"
;;                       :tasks [{:id 1 :name "foo"}
;;                               {:id 2 :name "bar"}])

;; (db/update-project! {:id "2be2ca7c-1578-4921-a5c4-b432edd1111d"
;;                      :name "first-project"
;;                      :tags []
;;                      :tasks []}
;;                     :name "Lapin2"
;;                     :due-date "1432758623759")



(db/register-task "My first task"
                  :description "Awesome first task, please suck my balls")


;; Todo
;; Ensure Inbox project
