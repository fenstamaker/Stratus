(ns stratus.utility
  (:require [cljs.core.async :refer [chan close!]] :include-macros true))

(defn focus [class]
  (.. js/document (getElementById class) (focus)))

(defn reset-focus [class event]
  (js/setTimeout (focus class) 10))

(defn timeout
  "Blocks thread for m milliseconds."
  [m]
  (let [c (chan)]
    (js/setTimeout (fn [] (close! c)) m)
    c))

(defn sleep
  "A wrapper around timeout with go statement included."
  [m]
  (go (<! (timeout m))))
