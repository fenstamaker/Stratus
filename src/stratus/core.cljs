(ns stratus.core
  (:require [om.core :as om :include-macros true]
            [om-tools.dom :as dom :include-macros true]
            [om-tools.core :refer-macros [defcomponent]]
            [stratus.components :as c]
            [stratus.input :as i]
            [stratus.utility :as u]))

(enable-console-print!)

(def app-state (atom {:article [ {:tag :h1 :text "Welcome to Stratus"}
                                 {:tag :p  :text "Hello, world!"}
                                 {:tag :p  :text "This is a new Paragraph."} ]
                      :input   { :input-class "inputField"
                                 :on-change   i/handle-text-input
                                 :on-key-down i/handle-special-input
                                 :on-blur     reset-focus }
                      :cursor  { :row    0
                                 :column 0
                                 :line-length 1
                                 :number-of-lines 1 } } ))
(def states (atom [@app-state]))

(om/root c/article app-state
         {:target (. js/document (getElementById "stratus"))})
(om/root c/input   app-state
         {:target (. js/document (getElementById "input"))})
(om/root c/cursor  app-state
         {:target (. js/document (getElementById "cursorContainer"))})
(om/root c/manu    app-state
         {:target (. js/document (getElementById "menuContainer"))})

(u/focus "inputField")

(.. js/document
    (addEventListener "click"
                      (partial u/reset-focus "inputField")))
