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
