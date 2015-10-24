(ns ui.description-editor
  (:use [jayq.core :only [$]])
  (:require [reagent.core :as reagent :refer [atom]]))

(def ^{:private true
       :no-docs true} shell (js/require "shell"))

(defn- plain-description-editor
  [entity]
  [:div
   {:id "description-output"
    :placeholder "Add a description"
    :class (if (empty? (:description entity))
             "empty"
             "")}])

(defn- inject-md!
  [entity]
  (let [output ($ :#description-output)]
    (set! (.-innerHTML (.get output
                             0))
          (.toHTML js/markdown
                   (:description entity)))
    (doall (for [a ($ "#description-output a")]
             (.on ($ a)
                  "click"
                  (fn [e]
                    (let [url (.attr ($ a)
                                     "href")
                          url (if (= -1 (.indexOf url "://"))
                                (str "http://" url)
                                url)]
                      (.openExternal shell
                                     url)
                      (.preventDefault e)
                      (.stopPropagation e))))))))

(defn- add-autogrow
  [input _]
  (.autosize js/window
             input))

(defn- make-editable
  [entity callback]
  (.editable ($ :#description-output)
             (clj->js {:type "textarea"
                       :action "click"})
             (clj->js {:onInputCreation add-autogrow
                       :callback (fn [event]
                                   (when (= (.-value event)
                                            (.-old_value event))
                                     (inject-md! entity))
                                   (callback entity
                                             (.-value event)))})))

(defn- build
  [entity callback]
  (with-meta plain-description-editor
    {:component-did-mount (fn []
                            (inject-md! entity)
                            (.attr ($ :#description-output)
                                   "editable-src"
                                   (:description entity))
                            (make-editable entity
                                           callback))}))

(defn render
  [entity callback]
  [(build entity
          callback) entity])
