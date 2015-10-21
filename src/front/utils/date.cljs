(ns utils.date)

(defn today
  []
  (js/Date.))

(defn now
  []
  (js/Date.))

(defn now-as-milliseconds
  "Return the current time"
  []
  (.now js/Date))

(defn index-of-today
  []
  (let [today (today)]
    (.dayOfYear (.-util js/window)
                today)))
