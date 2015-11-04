; Copyright (c) 2015, Benjamin Van Ryseghem. All rights reserved.
; The use and distribution terms for this software are covered by the
; Eclipse Public License 1.0 (http://opensource.org/licenses/eclipse-1.0.php)
; which can be found in the file epl-v10.html at the root of this distribution.
; By using this software in any fashion, you are agreeing to be bound by
; the terms of this license.
; You must not remove this notice, or any other, from this software.

(ns ui.main.toolbar
  (:require [gtd.state :as state]
            [ui.main :as main]))

(defn- new-task
  [project selected-task-atom]
  (let [task (state/register-task ""
                                  :project project

                                  ;;; should parent be the selected task?
                                  :parent project)]
    (reset! selected-task-atom task)))

(defn- resolve-task
  [selected-task-atom]
  (reset! selected-task-atom (state/update-task! @selected-task-atom
                                                 :done true)))

(defn- unresolve-task
  [selected-task-atom]
  (reset! selected-task-atom (state/update-task! @selected-task-atom
                                                 :done false)))

(defn- today
  [selected-task-atom]
  (reset! selected-task-atom (state/update-task! @selected-task-atom
                                                 :today true)))

(defn- not-today
  [selected-task-atom]
  (reset! selected-task-atom (state/update-task! @selected-task-atom
                                                 :today false)))

(defn- move
  [selected-task-atom])

(defn- render-toolbar-action
  [text css-class icon function]
  [:div
   {:class (str "item " css-class)
    :on-click function}
   [:div.icon
    {:title text}
    [:i
     {:class (str "fa fa-" icon)}]]
   [:span.text text]])

(defn- render-left-group
  [items]
  [:div.group.left
   (doall (for [item items]
            ^{:key (:text item)}
            [render-toolbar-action
             (:text item)
             (:css-class item)
             (:icon item)
             (:function item)]))])

(defn- render-right-group
  [items selected-task-atom]
  [:div.group.right
   {:class (if @selected-task-atom
             ""
             "disabled")}
   (doall (for [item items]
            ^{:key (:text item)}
            [render-toolbar-action
             (:text item)
             (:css-class item)
             (:icon item)
             (:function item)]))])

(defn- render-toolbar-groups
  [project selected-task-atom]
  [:div.items
   [render-left-group [{:text "New"
                        :css-class "new"
                        :icon "plus"
                        :function #(new-task project selected-task-atom)}]]
   [render-right-group
    [(if (:done @selected-task-atom)
       {:text "Unresolve"
        :css-class "unresolve"
        :icon "times"
        :function #(unresolve-task selected-task-atom)}
       {:text "Resolve"
        :css-class "resolve"
        :icon "check"
        :function #(resolve-task selected-task-atom)})
     (if (:today @selected-task-atom)
       {:text "Not Today"
        :css-class "not-today"
        :icon "star-o"
        :function #(not-today selected-task-atom)}
       {:text "Today"
        :css-class "today"
        :icon "star"
        :function #(today selected-task-atom)})
     {:text "Move"
      :css-class "move"
      :icon "arrow-right"
      :function #(move selected-task-atom)}]
    selected-task-atom]])

(defn- render-toolbar-search
  []
  [:div.search
   [:div.search-container
    [:div.icon
     [:i.fa.fa-search]]
    [:input#search-field
     {:placeholder "Search"}]]])

(defmethod main/main-toolbar-component :default
  [project-id]
  (let [project (state/get-project-by-id project-id)]
  [:div.main-toolbar
   [:div.toolbar-container
    [render-toolbar-groups project main/selected-task]
    [render-toolbar-search]]]))
