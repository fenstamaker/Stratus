(ns stratus.event)

(defn backspace? [event]
  (= (.. event -keyCode) 8))

(defn delete? [event]
  (= (.. event -keyCode) 46))

(defn enter? [event]
  (= (.. event -keyCode) 13))

(defn up? [event]
  (= (.. event -keyCode) 38))

(defn down? [event]
  (= (.. event -keyCode) 40))

(defn left? [event]
  (= (.. event -keyCode) 37))

(defn right? [event]
  (= (.. event -keyCode) 39))
