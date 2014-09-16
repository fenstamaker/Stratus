(ns stratus.core
  (:require [om.core :as  om :include-macros true]
            [om-tools.dom  :as dom :include-macros true]
            [om-tools.core :refer-macros [defcomponent]]
            [stratus.components :as c]
            [stratus.input :as i]))

(enable-console-print!)

(defn set-input-focus []
  (.. js/document (getElementById "inputField") (focus)))

(om/root c/article c/app-state
         {:target (. js/document (getElementById "stratus"))})
(om/root c/input c/app-state
         {:target (. js/document (getElementById "input"))})

(set-input-focus)
(.. js/document (addEventListener "click" (fn [event] (js/setTimeout set-input-focus 10))))
