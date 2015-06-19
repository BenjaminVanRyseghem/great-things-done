(ns core.core
  (:require [figwheel.client :as fw :include-macros true]
            [ui.core :as ui]
            [great-things-done.application-info :as application-info]
            [great-things-done.app-menu :as app-menu]
            [great-things-done.crypto :as crypto]
            [great-things-done.db :as db]
            [great-things-done.import-db :as import-db]
            [great-things-done.keytar :as keytar]
            [great-things-done.platform :as platform]
            [great-things-done.state :as state]))


;; Initialize figwheel websocket
(fw/watch-and-reload
  :websocket-url   "ws://localhost:3449/figwheel-ws"
  :jsload-callback (fn [] (print "reloaded")))

;; Ensures all necessary folders and files are present
(db/ensure-structure)
(platform/ensure-config-file!)

;; Ensure Inbox project
(db/ensure-project (state/inbox))

;; Finally render the app
(ui/render-core)

;; Initialize menu
(app-menu/init)

;; =================
;;
;;     SANDBOX
;;
;; =================

;; (let [c (crypto/encrypt "plip" "password")
;;       d (crypto/decrypt c "password")]
;;   (js/console.log c)
;;   (js/console.log d))

;; (keytar/replace-password! "great-things-done" "benjamin" "password")
;; (js/console.log (keytar/get-password "great-things-done" "benjamin"))

;; (import-db/import-meta-projects)

(import-db/import-all-projects!)

(let [projects (vals (state/all-projects))]
  (js/console.log (count projects))
  (doseq [project projects]
    (js/console.log (:name project))))

(let [tasks (:tasks (state/inbox))]
  (doseq [t tasks]
    (js/console.log (:name t))))

;; (state/register-project "First Project"
;;                       :tasks [])

;; (state/update-project! {:id "first-project-8556e5eb-fd0a-4411-ae34-a8d03f109601"
;;                      :name "first-project"
;;                      :tags []
;;                      :tasks []}
;;                     :name "Lapin2"
;;                     :due-date "1432758623759")


;; (state/register-task "My first task"
;;                      :description "Awesome first task, please suck my balls")


;; (state/update-task! {:id "My-first-task-237c0056-bfad-4f9f-91fe-bba9b14dc722"
;;                      :project {:id "Inbox"}}
;;                     :name "Ploup"
;;                     :done true)

;; Todo
