(ns ui.core
  (:require [reagent.core :as reagent :refer [atom]]
            [secretary.core :as secretary]
            [ui.menu :as menu]
            [ui.viewport :as viewport]))

(defn- chrome-component
  [project-id task-id]
  [:div.container
   [menu/menu-component project-id]
   [viewport/viewport-component project-id task-id]])

(defn render-core
  [project-id task-id]
  (reagent/render
   [chrome-component project-id task-id]
   (.-body js/document)))
