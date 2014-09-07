(ns stratus.core
  (:require [om.core :as  om :include-macros true]
            [om-tools.dom  :as dom :include-macros true]
            [om-tools.core :refer-macros [defcomponent]]))

(enable-console-print!)

(def app-state (atom {:number 1 :article {:text "Hello, World!"}}))

(defn handle-change [e owner {:keys [text]}]
  (do
    (swap! app-state update-in [:article :text] str (.. e -target -value))
    (om/set-state! owner :text "")))

(defcomponent input [data owner]
  (init_state [this]
              {:text ""})
  (render-state [this state]
          (dom/input
           {:value (:text state)
            :on-change (fn [event] (handle-change event owner state))}
           nil)))

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
                                             (constantly (:article data)))))))

(om/root article app-state
         {:target (. js/document (getElementById "stratus"))})
(om/root input {} {:target (. js/document (getElementById "input"))})
