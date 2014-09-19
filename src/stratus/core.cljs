(ns stratus.core
  (:require [om.core :as om :include-macros true]
            [om-tools.dom :as dom :include-macros true]
            [om-tools.core :refer-macros [defcomponent]]
            [stratus.components :as c]
            [stratus.input :as i]))

(enable-console-print!)

(defn focus [class]
  (.. js/document (getElementById class) (focus)))

(defn reset-focus [event]
  (js/setTimeout (partial focus "inputField")  10))

(def app-state (atom {:article [ {:tag :h1 :text "Welcome to Stratus"}
                                 {:tag :p  :text "Hello, world!"}
                                 {:tag :p  :text "This is a new Paragraph."} ]
                      :input   { :input-class "inputField"
                                 :on-change   i/handle-text-input
                                 :on-key-down i/handle-special-input
                                 :on-blur     reset-focus } } ))
(def states (atom [@app-state]))

(om/root c/article app-state
         {:target (. js/document (getElementById "stratus"))})
(om/root c/input   app-state
         {:target (. js/document (getElementById "input"))})

(focus "inputField")

(.. js/document
    (addEventListener "click"
                      #(reset-focus "inputField")))
