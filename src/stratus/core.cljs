(ns stratus.core
  (:require [om.core :as  om :include-macros true]
            [om-tools.dom  :as dom :include-macros true]
            [om-tools.core :refer-macros [defcomponent]]))

(enable-console-print!)

(defcomponent widget [data owner]
  (render [this]
          (dom/h1 nil (:text data))))

(defcomponent span [data owner]
  (render [this]
          (dom/span nil data)))

(defcomponent paragraph [data owner]
  (render [this]
          (dom/p nil
                 (om/build-all span (:text data)))))

(defcomponent article [data owner]
  (render [this]
          (dom/div nil
                   (om/build-all paragraph
                                 (repeatedly (:number data)
                                             (constantly {:text "Hello, world!"}))))))

(om/root article {:number 5}
         {:target (. js/document (getElementById "stratus"))})

