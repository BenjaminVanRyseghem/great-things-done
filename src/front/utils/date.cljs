(ns utils.date)

(defn today
  []
  (js/Date.))

(defn index-of-today
  []
  (let [today (today)]
    (.dayOfYear (.-util js/window)
                today)))
