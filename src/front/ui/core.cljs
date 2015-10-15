(ns ui.core
  (:require [reagent.core :as reagent :refer [atom]]
            [secretary.core :as secretary]
            [ui.menu :as menu]))

(defn- viewport-component
  []
  [:div.viewport
   [:p "Viewport"]])

(defn- chrome-component
  [project-id]
  [:div.container
   [menu/menu-component project-id]
   [viewport-component]])

(defn render-core
  [project-id]
  (reagent/render
   [chrome-component project-id]
   (.-body js/document)))
