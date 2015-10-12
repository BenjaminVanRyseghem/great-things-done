(ns ui.menu
  (:require [reagent.core :as reagent :refer [atom]]
            [gtd.state :as state]))

(defn- completion-bar
  [done total]
  (let [ratio (str (/ (* done 100) total))]
    [:div.completion-bar.progress
     {:title (str done "/" total)
      :data-toggle "tooltip"
      :data-placement "top"}
     [:div
      {:class "progress-bar"
       :role "progressbar"
       :aria-valuenow ratio
       :aria-valuemin 0
       :aria-valuemax 100
       :style {:width (str ratio "%")}}
      [:span.sr-only
       (str ratio "% complete")]]]))

(defn- menu-item-component
  [title icon]
  (if icon
    [:li.menu-item.clearfix
     [:h5
      [:i
       {:class (str "fa fa-fw fa-lg fa-" icon)}]
      title]]
    [:li.menu-item.clearfix
     [:h5 title]]))

(defn- menu-project-item-component
  [title completion]
  [:li.menu-item.clearfix
   [:h5
    [:i
     {:class "fa fa-fw fa-lg fa-cube"}]
    title]
;;    [completion-bar
;;     (:done completion)
;;     (:total completion)]
   [completion-bar
    4
    5]
   ])

(defn- menu-item-stacked-component
  [title base icon]
  [:li.menu-item.clearfix
   [:h5
    [:span.fa-stack.fa-lg.fa-fw
     [:i
      {:class (str "fa fa-stack-2x fa-" base)}]
     [:i
      {:class (str "fa fa-stack-1x fa-" icon)}]]
    title]])

(defn- menu-project-section-component
  [items]
  [:div.menu-section
   [:h4 "Projects"]
   [:ul.menu-items
    (for [i items]
      [menu-project-item-component
       (:title i)
       (:completion i)])]])

(defn- menu-section-component
  [title items]
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
         (:icon i)]))]])

(defn menu-component []
  [:div
   {:class (str "menu " js/process.platform)}
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
   [menu-project-section-component
    (doall (map (fn [p]
                  {:title (:name p)
                   :completion (state/completion-for p)})
                (vals @state/projects)))]])
