(ns ui.core
  (:require [reagent.core :as reagent :refer [atom]]
            [ui.menu :as menu]))



(defn- viewport-component []
  [:div.viewport
   [:p "Viewport"]])

(defn- chrome-component []
  [:div.container
   [menu/menu-component]
   [viewport-component]])

(defn render-core
  []
  (reagent/render
   [chrome-component]
   (.-body js/document)))

