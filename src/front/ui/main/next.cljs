; Copyright (c) 2015, Benjamin Van Ryseghem. All rights reserved.
; The use and distribution terms for this software are covered by the
; Eclipse Public License 1.0 (http://opensource.org/licenses/eclipse-1.0.php)
; which can be found in the file epl-v10.html at the root of this distribution.
; By using this software in any fashion, you are agreeing to be bound by
; the terms of this license.
; You must not remove this notice, or any other, from this software.

(ns ui.main.next
  (:require [gtd.state :as state]
            [reagent.core :as reagent :refer [atom]]
            [ui.main :as main]
            [ui.widgets.tasks :as tasks]))

(defmethod main/main-container-component "next"
  [_]
  (let [inbox (state/inbox)
        tasks (flatten (map (fn [p]
                              (filter #(not (:done %))
                                      (:tasks p)))
                            (vals @state/active-projects)))]
    [:div.main-container
     [:div.main-viewport
      {:id (str "main-next")}
      (if (empty? tasks)
        [:div "Empty"]
        [tasks/render-next
         tasks])]
     [main/main-toolbar-component (:id inbox)]]))
