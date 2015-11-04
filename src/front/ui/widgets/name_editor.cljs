; Copyright (c) 2015, Benjamin Van Ryseghem. All rights reserved.
; The use and distribution terms for this software are covered by the
; Eclipse Public License 1.0 (http://opensource.org/licenses/eclipse-1.0.php)
; which can be found in the file epl-v10.html at the root of this distribution.
; By using this software in any fashion, you are agreeing to be bound by
; the terms of this license.
; You must not remove this notice, or any other, from this software.

(ns ui.widgets.name-editor
  (:use [jayq.core :only [$]])
  (:require [reagent.core :as reagent :refer [atom]]))


(defn- plain-name-editor
  [entity auto-focus]
  [:div.entity-name
   {:id (str "entity-name-" (:id entity))
    :tab-index 0
    :placeholder "Add a name"
    :class (if (empty? (:name entity))
             "empty"
             "")}
   (:name entity)])

(defn- make-editable
  [entity callback on-enter]
  (.editable ($ (str "#entity-name-" (:id entity)))
             "focus"
             (clj->js {:onInputCreation (fn [input _]
                                          (when on-enter
                                            (.on input
                                                 "keydown"
                                                 (fn [e]
                                                   (when (= (.-keyCode e)
                                                            13)
                                                     (.blur input)
                                                     (on-enter))))))
                       :callback (fn [event]
                                   (if (empty? (.-value event))
                                     (.html (.-target event)
                                            (.-old_value event))
                                     (when-not (= (.-old_value event)
                                                  (.-value event))
                                       (callback entity
                                                 (.-value event)))))})))

(defn- build
  [entity callback on-enter auto-focus]
  (with-meta plain-name-editor
    {:component-did-mount (fn []
                            (make-editable entity
                                           callback
                                           on-enter)
                            (when auto-focus
                              (.focus ($ (str "#entity-name-" (:id entity))))))}))

(defn render
  [entity callback & {:keys [on-enter auto-focus]}]
  [(build entity
          callback
          on-enter
          auto-focus) entity])
