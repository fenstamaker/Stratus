(ns stratus.input
  (:require [om.core :as om :include-macros true]
            [om-tools.dom :as dom :include-macros true]
            [stratus.event :as e]))

(defn last-index [coll]
  (- (count coll) 1))

(defn replace-last [coll element]
  (assoc coll (last-index coll) element))

(defn remove-last [coll]
 (reduce str (drop-last coll)))

(defn arrow-event [type event app-state]
  (let [cursor (:cursor @app-state)]
    (condp = type
      :up    (let [row (- (:row cursor) 1)]
               (cond (> row 0)
                     (om/update! app-state [:cursor :row] row)))
      :down  (let [row (+ (:row cursor) 1)]
               (cond (< row (:number-of-lines cursor))
                     (om/update! app-state [:cursor :row] row)))
      :left  (let [col (- (:column cursor) 1)]
               (cond (> col 0)
                     (om/update! app-state [:cursor :column] col)))
      :right (let [col (+ (:column cursor) 1)]
               (cond (> col (:line-length 1))
                     (om/update! app-state [:cursor :column] col))))))

(defn backspace-event [event app-state]
  (let [last-p (last (:article @app-state))
        new-p  (-> (:article @app-state)
                   (last)
                   (:text)
                   (remove-last))]
    (if (empty? new-p)
      (om/transact! app-state [:article] (comp #(into [] %) drop-last))
      (om/transact! app-state [:article] #(replace-last % {:tag (:tag last-p) :text new-p})))))

(defn enter-event [event app-state]
  (do
    (. event preventDefault)
    (om/transact! app-state [:article] #(conj % {:text ""}))))

(defn handle-special-input [app-state owner event]
  (cond
   (e/delete?    event) nil 
   (e/backspace? event) (backspace-event event app-state)
   (e/enter?     event) (enter-event event app-state)
   (e/down?      event) (arrow-event :down  event app-state)
   (e/up?        event) (arrow-event :up    event app-state)
   (e/left?      event) (arrow-event :left  event app-state)
   (e/right?     event) (arrow-event :right event app-state)))

(defn handle-text-input [app-state owner event]
  (let [last-p (last (:article @app-state))
        new-p  (-> last-p
                   (:text)
                   (str (.. event -target -value)))]
    (om/transact! app-state [:article] #(replace-last % {:tag (:tag last-p) :text new-p}))
    (om/set-state! owner :text "")))
  

