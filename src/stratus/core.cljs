(ns stratus.core
  (:require [om.core :as om :include-macros true]
            [om-tools.dom :as dom :include-macros true]
            [om-tools.core :refer-macros [defcomponent]]
            [stratus.components :as c]
            [stratus.input :as i]
            [stratus.utility :refer :all]))

(enable-console-print!)

(def app-state (atom {:article [ {:tag :h1 :text "Welcome to Stratys!"}
                                 {:tab :p  :text "Begin typing and write whatevery you want." } ] }))

(def article-history (atom [@app-state]))

(om/root c/article app-state
         {:target (. js/document (getElementById "stratusContainer"))})

(om/root c/input   app-state
         {:target (. js/document (getElementById "inputContainer"))})

(.. js/document
    (addEventListener "click"
                      (partial reset-focus "inputField")))
