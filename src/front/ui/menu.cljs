(ns ui.menu
  (:use [jayq.core :only [$]])
  (:require [gtd.state :as state]
            [reagent.core :as reagent :refer [atom]]
            [secretary.core :as secretary]
            [utils.core :as utils]))

(def ^:private max-title-witdh 140)

(defn- goto
  [route]
  (set! (.-hash js/window.location)
        route))

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
  [& {:keys [project-id route title item-id icon]}]
  (if icon
    [:li
     {:id (str "item-" item-id)
      :class (if (= project-id item-id)
               "menu-item clearfix selected"
               "menu-item clearfix")
      :on-click #(goto route)}
     [:h5
      [:i
       {:class (str "fa fa-fw fa-lg fa-" icon)}]
      title]]
    [:li
     {:id (str "item-" item-id)
      :class (if (= project-id item-id)
               "menu-item clearfix selected"
               "menu-item clearfix")
      :on-click #(goto route)}
     [:h5 title]]))

(defn- menu-project-item-component
  [& {:keys [project-id title item-id completion]}]
  [:li
   {:id (str "item-" item-id)
    :on-click #(goto (str "/project/" item-id))
    :class (if (= project-id item-id)
             "menu-item clearfix selected"
             "menu-item clearfix")}
   [:h5
    {:class (if (> (utils/string-width title)
                   max-title-witdh)
              "overflow"
              "")}
    [:i
     {:class "fa fa-fw fa-lg fa-cube"}]
    [:div.hide-bar]
    title]
   [completion-bar
    (:done completion)
    (:total completion)]])

(defn- menu-item-stacked-component
  [& {:keys [project-id route title item-id base icon]}]
  [:li
   {:id (str "item-" item-id)
    :on-click #(goto route)
    :class (if (= project-id item-id)
             "menu-item clearfix selected"
             "menu-item clearfix")}
   [:h5
    {:class (if (> (utils/string-width title)
                   max-title-witdh)
              "overflow"
              "")}
    [:span.fa-stack.fa-lg.fa-fw
     [:i
      {:class (str "fa fa-stack-2x fa-" base)}]
     [:i
      {:class (str "fa fa-stack-1x fa-" icon)}]]
    title]])

(defn- menu-project-section-component
  [& {:keys [project-id items]}]
  [:div#section-active-projects.menu-section
   [:h4 "Active projects"]
   [:ul.menu-items
    (for [i items]
      ^{:key (:id i)}
      [menu-project-item-component
       :project-id project-id
       :title (:title i)
       :item-id (:id i)
       :completion (:completion i)])]])

(defn- menu-section-component
  [& {:keys [project-id title section-id items]}]
  [:div.menu-section
   {:id (str "section-" section-id)}
   [:h4 title]
   [:ul.menu-items
    (for [i items]
      (let [title (:title i)
            id    (:id i)
            icon  (:icon i)
            route (or (:route i)
                      (str "/" id))]
        (if (:stacked i)
          ^{:key (:id i)}
          [menu-item-stacked-component
           :project-id project-id
           :route route
           :title title
           :item-id id
           :base (:base i)
           :icon icon]
          ^{:key (:id i)}
          [menu-item-component
           :project-id project-id
           :route route
           :title title
           :item-id id
           :icon icon])))]])

(defn- plain-menu-component
  [project-id]
  [:div
   {:class (str "menu " js/process.platform)}
   [:div#menu-container
    [menu-section-component
     :project-id project-id
     :title "Collect"
     :section-id "collect"
     :items [{:title "Inbox"
              :id "Inbox"
              :route "/inbox"
              :icon "inbox"}]]
    [menu-section-component
     :project-id project-id
     :title "Focus"
     :section-id "focus"
     :items [{:title "Today"
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
     :project-id project-id
     :items (doall (map (fn [p]
                          {:title (:name p)
                           :id (:id p)
                           :completion (state/completion-for p)})
                        (vals @state/active-projects)))]]])

(def menu-component
  (with-meta plain-menu-component
    {:component-did-mount
     (fn []
       (.tooltip ($ "[data-toggle='tooltip']"))
       (.perfectScrollbar ($ :#menu-container)
                          (clj->js {:suppressScrollX true})))}))
