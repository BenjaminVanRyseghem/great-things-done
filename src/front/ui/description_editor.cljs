(ns ui.description-editor
  (:use [jayq.core :only [$]])
  (:require [reagent.core :as reagent :refer [atom]]))

(def ^{:private true
       :no-docs true} shell (js/require "shell"))

(defn- plain-description-editor
  [project]
  [:div
   {:id "description-output"
    :placeholder "Add a description"
    :class (if (empty? (:description project))
             "empty"
             "")}])

(defn- inject-md!
  [project]
  (let [output ($ :#description-output)]
    (set! (.-innerHTML (.get output
                             0))
          (.toHTML js/markdown
                   (:description project)))
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
  [input]
  (.autosize js/window
             input))

(defn- make-editable
  [project callback]
  (.editable ($ :#description-output)
             (clj->js {:type "textarea"
                       :action "click"})
             (clj->js {:onInputCreation add-autogrow
                       :callback (fn [event]
                                   (when (= (.-value event)
                                            (.-old_value event))
                                     (inject-md! project))
                                   (callback project
                                             (.-value event)))})))

(defn- build
  [project callback]
  (with-meta plain-description-editor
    {:component-did-mount (fn []
                            (inject-md! project)
                            (.attr ($ :#description-output)
                                   "editable-src"
                                   (:description project))
                            (make-editable project
                                           callback))}))

(defn render
  [project callback]
  [(build project
          callback) project])
