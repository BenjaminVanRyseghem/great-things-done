(ns atom.core)

(def app            (js/require "app"))
(def browser-window (js/require "browser-window"))
(def crash-reporter (js/require "crash-reporter"))

(def ^:private main-window (atom nil))

(defn- init-browser []
  (reset! main-window (browser-window.
                        (clj->js {:width 800
                                  :height 600
                                  :show false
                                  :title-bar-style "hidden-inset"})))
  ;; Path is relative to the compiled js file (main.js in our case)
  (.loadUrl @main-window "http://localhost:3449/index.html?id=Inbox")

  ;; Hide the window until it's loaded to avoid the flash effect
  ;; described here (https://github.com/atom/electron/issues/861)
  (.on (.-webContents @main-window) "did-finish-load" #(.show @main-window))

  (.on @main-window "closed" #(reset! main-window nil)))

(.start crash-reporter)
(.on app "window-all-closed" #(when-not (= js/process.platform "darwin")
                                (.quit app)))
(.on app "ready" init-browser)
