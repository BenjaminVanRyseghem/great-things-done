(ns ui.core
  (:require [reagent.core :as reagent :refer [atom]]))

(defn- root-component []
  [:div
   [:p (str
        "Node version is "
        js/process.version)]
   [:p (str
        "Atom version is "
        ((js->clj js/process.versions) "atom-shell"))]
   [:p (str
        "Chrome version is "
        ((js->clj js/process.versions) "chrome"))]])

(defn render-core
  []
  (reagent/render
   [root-component]
   (.-body js/document)))

