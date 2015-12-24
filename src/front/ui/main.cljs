; Copyright (c) 2015, Benjamin Van Ryseghem. All rights reserved.
; The use and distribution terms for this software are covered by the
; Eclipse Public License 1.0 (http://opensource.org/licenses/eclipse-1.0.php)
; which can be found in the file epl-v10.html at the root of this distribution.
; By using this software in any fashion, you are agreeing to be bound by
; the terms of this license.
; You must not remove this notice, or any other, from this software.

(ns ui.main
  (:use [jayq.core :only [$]])
  (:require [utils.core :as utils]))

(defmulti main-container-component (fn [id] id))
(defmulti main-toolbar-component (fn [id _] id))

(defn main-component
  [project-id]
  [:div.main
   {:class js/process.platform}
   [main-container-component
    project-id]])
