(ns stratus.cursor
  (:require [om.core :as  om :include-macros true]
            [om-tools.dom  :as dom :include-macros true]
            [om-tools.core :refer-macros [defcomponent]]))

(def cusor-state (atom {:postion  {:x 0 :y 0}
                        :moving   false
                        :relative {:x 0 :y 0}}))

(defn -move-start [owner e]
  (let [node (om/get-node owner)
        relative-x (- (. -pageX event) (. -offsetX node))
        relative-y (- (. -pageY event) (. -offsetY node))]
    (om/set-state! owner :moving true)
    (om/set-state! owner :relative {:x relative-x :y relative-y})
    (.preventDefault e)))

(defn -move-end [owner e]
  (let [node (om/get-node owner)]
    ))

(defmixin cursorable
  (init_state [_]
              {position: {:x 0 :y 0}
               relative: nil})
  (will_mount [this]
              (set! (. this -xPos) 0))
  (render [this]
          (dom/div {:on-mouse-down #(mouse-down owner)
                    :on-mouse-up   #(mouse-up   owner)
                    :on-mouse-move #(mouse-move owner)}
                   "|")))
