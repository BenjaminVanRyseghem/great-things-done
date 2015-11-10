; Copyright (c) 2015, Benjamin Van Ryseghem. All rights reserved.
; The use and distribution terms for this software are covered by the
; Eclipse Public License 1.0 (http://opensource.org/licenses/eclipse-1.0.php)
; which can be found in the file epl-v10.html at the root of this distribution.
; By using this software in any fashion, you are agreeing to be bound by
; the terms of this license.
; You must not remove this notice, or any other, from this software.

(ns ui.main
  (:use [jayq.core :only [$]])
  (:require [utils.core :as utils]
            [ui.widgets.tasks :as tasks]))

(defn has-as-parent?
  [node match]
  (if (= node
         match)
    true
    (if (.-parentNode node)
      (has-as-parent? (.-parentNode node)
                      match)
      false)))

(defmulti main-container-component (fn [id] id))
(defmulti main-toolbar-component (fn [id _] id))

(defn main-component
  [project-id]
  [:div.main
   {:on-mouse-down (fn [e]
                     (when (or (has-as-parent? (.-target e)
                                               (.get ($ :.project-info)
                                                     0))
                               (= (.-target e)
                                  (.get ($ :#tasks-container)
                                        0))
                               (= (.-target e)
                                  (.get ($ :.main-viewport)
                                        0)))
                       (reset! tasks/selected-task nil)))}
   [main-container-component
    project-id]])
