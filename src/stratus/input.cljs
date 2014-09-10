(ns stratus.input
  (:require [om.core :as om :include-macros true]
           [om-tools.dom :as dom :include-macros true]))

(defn backspace? [event]
  (= (.. event -keyCode) 8))

(defn delete? [event]
  (= (.. event -keyCode) 46))

(defn enter? [event]
  (= (.. event -keyCode) 13))

(defn last-index [coll]
  (- (count coll) 1))

(defn replace-last [coll element]
  (assoc coll (last-index coll) element))

(defn remove-last [coll]
 (reduce str (drop-last coll)))

(defn backspace-event [event app-state]
  (let [new-p (-> (:article @app-state)
                  (last)
                  (:text)
                  (remove-last))]
    (if (empty? new-p)
      (swap! app-state update-in [:article] (comp #(into [] %) drop-last))
      (swap! app-state update-in [:article] replace-last {:text new-p}))))

(defn enter-event [event app-state]
  (do
    (. event preventDefault)
    (swap! app-state update-in [:article] conj {:text ""})))

(defn handle-special-input [app-state event owner]
  (cond
   (delete?    event) nil 
   (backspace? event) (backspace-event event app-state)
   (enter?     event) (enter-event event app-state)
   ))

(defn handle-text-input [app-state event owner]
  (let [new-p (-> (:article @app-state)
                  (last)
                  (:text)
                  (str (.. event -target -value)))]
    (swap! app-state update-in [:article] replace-last {:text new-p})
    (om/set-state! owner :text "")))


