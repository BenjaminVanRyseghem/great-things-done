; Copyright (c) 2015, Benjamin Van Ryseghem. All rights reserved.
; The use and distribution terms for this software are covered by the
; Eclipse Public License 1.0 (http://opensource.org/licenses/eclipse-1.0.php)
; which can be found in the file epl-v10.html at the root of this distribution.
; By using this software in any fashion, you are agreeing to be bound by
; the terms of this license.
; You must not remove this notice, or any other, from this software.

(ns ui.menu
  (:use [jayq.core :only [$]])
  (:require [gtd.state :as state]
            [reagent.core :as reagent :refer [atom]]
            [secretary.core :as secretary]
            [utils.core :as utils]
            [utils.date :as date]))

(def ^:private max-title-witdh 140)

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
  [& {:keys [project-id route title item-id icon badge]}]
  [:li
   {:id (str "item-" item-id)
    :class (if (= project-id item-id)
             "menu-item clearfix selected"
             "menu-item clearfix")
    :on-click #(utils/goto route)}
   [:h5
    (when icon
      [:i
       {:class (str "fa fa-fw fa-lg fa-" icon)}])
    title]
   (when badge
     (let [now         (date/now)
           tasks       (badge)
           total       (count tasks)
           overdue     (count (filter #(and (some? (:due-date %))
                                        (< (:due-date %)
                                          now))
                                      tasks))
           has-overdue (> overdue
                          0)]
       (when (> total 0)
         [:div.badge
          {:class (when has-overdue
                    "overdue")}
          (when has-overdue
            [:div.overdue-segment
             {:class (when (= (- total overdue)
                              0)
                       "only")}
             overdue])
          (when (> (- total overdue)
                   0)
            [:div.badge-segment
             (- total overdue)])])))])

(defn- menu-project-item-component
  [& {:keys [project-id title item-id completion]}]
  [:li
   {:id (str "item-" item-id)
    :on-click #(utils/goto (str "/project/" item-id))
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
    :on-click #(utils/goto route)
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
            badge  (:badge i)
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
           :badge badge
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
              :icon "inbox"
              :badge #(:tasks (state/inbox))}]]
    [menu-section-component
     :project-id project-id
     :title "Focus"
     :section-id "focus"
     :items [{:title "Today"
              :id "today"
              :icon "star"
              :badge #(filter (fn [t]
                                (and (:today t)
                                     (not (:done t))))
                              (state/all-tasks))}
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
