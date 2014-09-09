(ns stratus.input
  (:require [om.core :as om :include-macros true]
           [om-tools.dom :as dom :include-macros true]))

(defn backspace? [event]
  (= (.. event -keyCode) 8))

(defn delete? [event]
  (= (.. event -keyCode) 46))

(defn backspace-event [app-state]
  (swap! app-state update-in [:article :text] #(subs % 0 (- (count %) 1))))

(defn handle-special-input [app-state event owner]
  (cond
   (delete?    event) nil
   (backspace? event) (backspace-event app-state)))

(defn handle-text-input [app-state event owner]
  )


