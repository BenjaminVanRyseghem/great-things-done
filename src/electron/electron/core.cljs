(ns electron.core)

(def app            (js/require "app"))
(def browser-window (js/require "browser-window"))
(def crash-reporter (js/require "crash-reporter"))

(def ^:private main-window (atom nil))

(defn- init-browser []
  (reset! main-window (browser-window.
                        (clj->js {:width 800
                                  :min-width 656
                                  :height 600
                                  :min-height 400
                                  :show false
                                  :title-bar-style "hidden-inset"})))

  (if (.-isDev js/global)
    (.loadUrl @main-window "http://localhost:3449/index.html")
    (.loadUrl @main-window (str "file://" (js* "__dirname") "/../index.html")))

  ;; Hide the window until it's loaded to avoid the flash effect
  ;; described here (https://github.com/atom/electron/issues/861)
  (.on (.-webContents @main-window) "did-finish-load" #(.show @main-window))

  (.on @main-window "closed" #(reset! main-window nil)))

(.start crash-reporter)
(.on app "window-all-closed" #(when-not (= js/process.platform "darwin")
                                (.quit app)))
(.on app "ready" init-browser)
