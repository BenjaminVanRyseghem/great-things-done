; Copyright (c) 2015, Benjamin Van Ryseghem. All rights reserved.
; The use and distribution terms for this software are covered by the
; Eclipse Public License 1.0 (http://opensource.org/licenses/eclipse-1.0.php)
; which can be found in the file epl-v10.html at the root of this distribution.
; By using this software in any fashion, you are agreeing to be bound by
; the terms of this license.
; You must not remove this notice, or any other, from this software.

(ns ui.widgets.name-editor
  (:use [jayq.core :only [$]])
  (:require [reagent.core :as reagent :refer [atom]]
            [utils.core :as utils]))


(defn- plain-name-editor
  [entity auto-focus]
  [:div.entity-name
   {:id (str "entity-name-" (:id entity))
    :placeholder "Add a name"
    :tab-index 0}
   (:name entity)])

(defn- enter-pressed
  [callback input]
  (when-not (empty? (.val input))
    (.blur input))
  (callback input)
  (when (empty? (.val input))
    (.focus input)))

(defn- make-editable
  [entity callback on-enter]
  (.editable ($ (str "#entity-name-" (:id entity)))
             "focus"
             (clj->js {:onInputCreation (fn [input _]
                                          (when on-enter
                                            (utils/on input
                                                      "keydown"
                                                      [:escape :prevent] #(.blur input)
                                                      [:enter :prevent] #(enter-pressed (fn [i]
                                                                                          (callback entity
                                                                                                    (.val i))
                                                                                          (on-enter i))
                                                                                        input))))
                       :callback (fn [event]
                                   (if (empty? (.-value event))
                                     (do
                                       (.html (.-target event)
                                              (.-old_value event))
                                       false)
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
