(ns stratus.core
  (:require [om.core :as  om :include-macros true]
            [om-tools.dom  :as dom :include-macros true]
            [om-tools.core :refer-macros [defcomponent]]))

(enable-console-print!)

(defcomponent widget [data owner]
  (render [this]
          (dom/h1 nil (:text data))))

(om/root widget {:text "Hello, world!"}
         {:target (. js/document (getElementById "stratus"))})

