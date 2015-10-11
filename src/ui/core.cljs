(ns ui.core
  (:require [reagent.core :as reagent :refer [atom]]
            [gtd.state :as state]))

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


(defn- menu-item-component
  [title icon]
  [:li.menu-item
   [:h5
    [:i
     {:class (str "fa fa-fw fa-lg fa-" icon)}]
    title]])

(defn- menu-item-stacked-component
  [title base icon]
  [:li.menu-item
   [:h5
    [:span.fa-stack.fa-lg.fa-fw
     [:i
      {:class (str "fa fa-stack-2x fa-" base)}]
     [:i
      {:class (str "fa fa-stack-1x fa-" icon)}]]
    title]])

(defn- menu-section-component
  [title items]
  (if (empty? items)
    [:div.menu-section
     [:h4 title]]
    [:div.menu-section
     [:h4 title]
     [:ul.menu-items
      (for [i items]
        (if (:stacked i)
          [menu-item-stacked-component
           (:title i)
           (:base i)
           (:icon i)]
          [menu-item-component
           (:title i)
           (:icon i)]))]]))

(defn- menu-component []
  [:div.menu
   [menu-section-component
    "Collect"
    [{:title "Inbox"
      :icon "inbox"}]]
   [menu-section-component
    "Focus"
    [{:title "Today"
      :icon "star"}
     {:title "Next"
      :icon "server fa-rotate-180"}
     {:title "Scheduled"
      :stacked true
      :base "calendar-o"
      :icon "repeat"}
     {:title "Someday"
      :icon "archive"}
     {:title "Projects"
      :icon "cubes"}]]
   [menu-section-component
    "Projects"
    (doall (map (fn [pro]
                  {:title (:name pro)
                   :icon "cube"})
                (vals @state/projects)))]]
  )

(defn- viewport-component []
  [:div.viewport
   [:p "Viewport"]])

(defn- chrome-component []
  [:div.container
   [menu-component]
   [viewport-component]])

(defn render-core
  []
  (reagent/render
   [chrome-component]
   (.-body js/document)))

