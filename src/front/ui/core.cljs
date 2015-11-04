; Copyright (c) 2015, Benjamin Van Ryseghem. All rights reserved.
; The use and distribution terms for this software are covered by the
; Eclipse Public License 1.0 (http://opensource.org/licenses/eclipse-1.0.php)
; which can be found in the file epl-v10.html at the root of this distribution.
; By using this software in any fashion, you are agreeing to be bound by
; the terms of this license.
; You must not remove this notice, or any other, from this software.

(ns ui.core
  (:require [reagent.core :as reagent :refer [atom]]
            [secretary.core :as secretary]
            [ui.menu :as menu]
            [ui.main :as main]))

(defn- chrome-component
  [project-id]
  [:div.container
   [menu/menu-component project-id]
   [main/main-component project-id]])

(defn render-core
  [project-id]
  (reagent/render
   [chrome-component project-id]
   (.-body js/document)))
