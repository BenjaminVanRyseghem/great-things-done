(ns gtd.core
  (:require [gtd.app-menu :as app-menu]
            [gtd.crypto :as crypto]
            [gtd.db :as db]
            [gtd.image-service :as image-service]
            [gtd.import-db :as import-db]
            [gtd.settings :as settings]
            [gtd.state :as state]
            [gtd.integration :as integration]
            [gtd.platform :as platform]
            [repl.core :as repl]
            [ui.core :as ui]
            [ui.routes :as routes]
            [utils.keychain :as keychain]))

(enable-console-print!)

;; Ensures all necessary folders and files are present
(db/ensure-structure)
(platform/ensure-config-file!)

;; Ensure Inbox project
(db/ensure-project (state/inbox))

;; Initialize menu
(app-menu/init)

;; Load settings
(settings/load-settings)
(image-service/retrieve-empty-photo)

;; Starts repl
(defonce repl
  (do
    (repl/init-tcp-repl "gtd>")
    (repl/init-tcp-cli)))

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

;; (let [projects (vals (state/all-projects))]
;;   (js/console.log (count projects))
;;   (doseq [project projects]
;;     (js/console.log (:name project))))

;; (let [tasks (:tasks (state/inbox))]
;;   (doseq [t tasks]
;;     (js/console.log (:id t))))

;; (js/console.log (:name (state/get-project-by-id "First-Project-56dc33b8-c173-42c5-be31-eef12a83ea49")))

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


;; (state/update-task! (state/get-task-by-id "My-first-task-bb8c14f7-9397-4491-9608-a73d818d276f")
;;                     :parent (state/get-project-by-id "First-Project-56dc33b8-c173-42c5-be31-eef12a83ea49")
;;                     :done true)

;; Todo



;; Finally render the app
(routes/init)
