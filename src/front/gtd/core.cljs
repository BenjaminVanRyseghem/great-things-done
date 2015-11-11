; Copyright (c) 2015, Benjamin Van Ryseghem. All rights reserved.
; The use and distribution terms for this software are covered by the
; Eclipse Public License 1.0 (http://opensource.org/licenses/eclipse-1.0.php)
; which can be found in the file epl-v10.html at the root of this distribution.
; By using this software in any fashion, you are agreeing to be bound by
; the terms of this license.
; You must not remove this notice, or any other, from this software.

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
            [ui.main.inbox] ;; Force its loading
            [ui.main.next] ;; Force its loading
            [ui.main.project] ;; Force its loading
            [ui.main.today] ;; Force its loading
            [ui.main.toolbar] ;; Force its loading
            [gtd.hooks :as hooks]
            [utils.keychain :as keychain]
            [utils.badge :as badge]))

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

;; Install hooks
(hooks/install)

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

(badge/set-badge 6)
