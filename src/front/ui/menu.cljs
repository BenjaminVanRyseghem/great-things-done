(ns ui.menu
  (:require [reagent.core :as reagent :refer [atom]]
            [gtd.state :as state]
            [utils.core :as utils]))

(defn- completion-bar
  [done total]
  (let [ratio (str (.ceil js/Math
                          (/ (* done 100) total)))]
    [:div.completion-bar.progress
     {:title (str done "/" total)
      :data-toggle "tooltip"
      :data-placement "top"}
     [:div
      {:class (str "completion-bar-" ratio " progress-bar")
       :role "progressbar"
       :aria-valuenow ratio
       :aria-valuemin 0
       :aria-valuemax 100}
      [:span.sr-only
       (str ratio "% complete")]]]))

(defn- menu-item-component
  [title id icon]
  (if icon
    [:li.menu-item.clearfix
     {:id (str "item-" id)}
     [:h5
      [:i
       {:class (str "fa fa-fw fa-lg fa-" icon)}]
      title]]
    [:li.menu-item.clearfix
     {:id (str "item-" id)}
     [:h5 title]]))

(defn- menu-project-item-component
  [title id completion]
  [:li.menu-item.clearfix
   {:id (str "item-" id)}
   [:h5
    [:i
     {:class "fa fa-fw fa-lg fa-cube"}]
    title]
   [completion-bar
    (:done completion)
    (:total completion)]
;;    [completion-bar
;;     92
;;     100]
   ])

(defn- menu-item-stacked-component
  [title id base icon]
  [:li.menu-item.clearfix
   {:id (str "item-" id)}
   [:h5
    [:span.fa-stack.fa-lg.fa-fw
     [:i
      {:class (str "fa fa-stack-2x fa-" base)}]
     [:i
      {:class (str "fa fa-stack-1x fa-" icon)}]]
    title]])

(defn- menu-project-section-component
  [items]
  [:div#section-active-projects.menu-section
   [:h4 "Active projects"]
   [:ul.menu-items
    (for [i items]
      [menu-project-item-component
       (:title i)
       (:id i)
       (:completion i)])]])

(defn- menu-section-component
  [title id items]
  [:div.menu-section
   {:id (str "section-" id)}
   [:h4 title]
   [:ul.menu-items
    (for [i items]
      (if (:stacked i)
        [menu-item-stacked-component
         (:title i)
         (:id i)
         (:base i)
         (:icon i)]
        [menu-item-component
         (:title i)
         (:id i)
         (:icon i)]))]])

(defn menu-component []
  [:div
   {:class (str "menu " js/process.platform)}
   [menu-section-component
    "Collect"
    "collect"
    [{:title "Inbox"
      :id "inbox"
      :icon "inbox"}]]
   [menu-section-component
    "Focus"
    "focus"
    [{:title "Today"
      :id "today"
      :icon "star"}
     {:title "Next"
      :id "next"
      :icon "server fa-rotate-180"}
     {:title "Scheduled"
      :id "scheduled"
      :stacked true
      :base "calendar-o"
      :icon "repeat"}
     {:title "Someday"
      :id "someday"
      :icon "archive"}
     {:title "Projects"
      :id "projects"
      :icon "cubes"}]]
   [menu-project-section-component
;;     (doall (map (fn [p]
;;                   {:title (:name p)
;;                    :id (:id p)
;;                    :completion (state/completion-for p)})
;;                 (vals @state/projects)))
    (doall (map (fn [p]
                  (js/console.log p)
                  {:title (str "Project " p)
                   :id (str "project-" p)
                   :completion {:done p
                                :total 100}})
                (range 1 101)))
    ]])
