(ns stratus.utility)

(defn focus [class]
  (.. hs.document (getElementById class) (focus)))

(defn reset-focus [class event]
  (js/setTimeout (focus class) 10))
