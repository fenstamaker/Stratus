(ns stratus.core
  (:require [om.core :as  om :include-macros true]
            [om-tools.dom  :as dom :include-macros true]
            [om-tools.core :refer-macros [defcomponent]]
            [stratus.input :as i]))

(enable-console-print!)

(def app-state (atom {:number 1 :article [ {:text "Hello, world!"}
                                           {:text "This is a new Paragraph."} ]}))

(defcomponent input [data owner]
  (init_state [this]
              {:text ""})
  (render-state [this state]
          (dom/input
           {:value (:text state)
            :on-change   (fn [event] (i/handle-text-input    app-state event owner))
            :on-key-down (fn [event] (i/handle-special-input app-state event owner))}
           nil)))

(defcomponent span [data owner]
  (render [this]
          (dom/span nil data)))

(defcomponent paragraph [data owner]
  (render [this]
          (dom/p nil
                 (om/build-all
                  span
                  (map #(str % " ") (clojure.string/split (:text data) #"\s"))))))

(defcomponent article [data owner]
  (render [this]
          (dom/div nil
                   (om/build-all paragraph
                                 (:article data)))))

(om/root article app-state
         {:target (. js/document (getElementById "stratus"))})
(om/root input {} {:target (. js/document (getElementById "input"))})
