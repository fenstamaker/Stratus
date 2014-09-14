(ns stratus.core
  (:require [om.core :as  om :include-macros true]
            [om-tools.dom  :as dom :include-macros true]
            [om-tools.core :refer-macros [defcomponent]]
            [stratus.components :as c]
            [stratus.input :as i]))

(enable-console-print!)

(def app-state (atom {:number 1 :article [ {:tag :h1 :text "Welcome to Stratus"}
                                           {:tag :p  :text "Hello, world!"}
                                           {:tag :p  :text "This is a new Paragraph."} ]}))
(def states (atom [@app-state]))

(defn set-input-focus []
  (.. js/document (getElementById "inputField") (focus)))

(om/root c/article app-state
         {:target (. js/document (getElementById "stratus"))})
(om/root (parital c/input
                  {:value (:text state)
                   :id "inputField"
                   :on-change   (fn [event] (i/handle-text-input    app-state event owner))
                   :on-key-down (fn [event] (i/handle-special-input app-state event owner))
                   :on-blur     (fn [event] (js/setTimeout set-input-focus 10))})
         {:target (. js/document (getElementById "input"))})

(set-input-focus)
(.. js/document (addEventListener "click" (fn [event] (js/setTimeout set-input-focus 10))))
