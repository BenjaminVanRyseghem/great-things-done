; Copyright (c) 2015, Benjamin Van Ryseghem. All rights reserved.
; The use and distribution terms for this software are covered by the
; Eclipse Public License 1.0 (http://opensource.org/licenses/eclipse-1.0.php)
; which can be found in the file epl-v10.html at the root of this distribution.
; By using this software in any fashion, you are agreeing to be bound by
; the terms of this license.
; You must not remove this notice, or any other, from this software.

(ns ui.widgets.description-editor
  (:use [jayq.core :only [$]])
  (:require [reagent.core :as reagent :refer [atom]]))

(def ^{:private true
       :no-docs true} shell (js/require "shell"))

(defn- plain-description-editor
  [entity]
  [:div.description-output
   {:id (str "description-output" (:id entity))
    :tab-index 0
    :placeholder "Add a description"}
   (or (:description entity)
       "")])

(defn- inject-md!
  [entity]
  (let [output ($ (str "#description-output" (:id entity)))]
    (set! (.-innerHTML (.get output
                             0))
          (.toHTML js/markdown
                   (.-innerHTML (.get output
                                      0))))
    (doall (for [a ($ (str "#description-output" (:id entity) " a"))]
             (do
               (.on ($ a)
                    "click"
                    (fn [e]
                      (let [url (.attr ($ a)
                                       "href")
                            url (if (= -1 (.indexOf url "://"))
                                  (str "http://" url)
                                  url)]
                        (.openExternal shell
                                       url)
                        (.preventDefault e)
                        (.stopPropagation e)))))))))

(defn- add-autogrow
  [input]
  (js/setTimeout #(.autosize js/window
                             input)
                 0))

(defn- make-editable
  [entity callback on-enter]
  (.editable ($ (str "#description-output" (:id entity)))
             (clj->js {:type "textarea"
                       :action "focus"})
             (clj->js {:onInputCreation (fn [input _]
                                          (add-autogrow input)
                                          (.on input
                                               "keydown"
                                               (fn [e]
                                                 (when (and (= (.-keyCode e)
                                                               9)
                                                            (.-shiftKey e))
                                                   ;;                                                    .parent().prev().find(":tabbable").first().focus()

                                                   (-> ($ (str "#description-output" (:id entity)))
                                                       (.parent)
                                                       (.prev)
                                                       (.find ":tabbable")
                                                       (.last)
                                                       (.focus))

                                                   (.preventDefault e))))
                                          (when on-enter
                                            (.on input
                                                 "keydown"
                                                 (fn [e]
                                                   (when (and (= (.-keyCode e)
                                                                 13)
                                                              (.-ctrlKey e))
                                                     (on-enter input))))))
                       :callback (fn [event]
                                   (inject-md! entity)
                                   (callback entity
                                             (.-value event)))})))

(defn- build
  [entity callback on-enter]
  (with-meta plain-description-editor
    {:component-did-mount (fn []
                            (inject-md! entity)
                            (.attr ($ (str "#description-output" (:id entity)))
                                   "editable-src"
                                   (:description entity))
                            (make-editable entity
                                           callback
                                           on-enter))}))

(defn render
  [entity callback & [on-enter]]
  [(build entity
          callback
          on-enter) entity])
