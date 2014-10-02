(ns stratus.components
  (:require [om.core :as om :include-macros true]
            [om-tools.dom :as dom :include-macros true]
            [om-tools.core :refer-macros [defcomponent]]
            [stratus.input :as i]
            [stratus.utility :as u]))

(defcomponent menu [data owner]
  (init-state [this]
              {:items [ {:name "File"   :action nil}
                        {:name "Edit"   :action nil}
                        {:name "View"   :action nil}
                        {:name "Window" :action nil}
                        {:name "Help"   :action nil} ]})
  (render-state [this]
                (dom/ul {}
                        (om/build-all
                         dom/li
                         (map #(:name %) (:items data))))))

(defcomponent cursor [data owner]
  (render [this]
          (dom/span {:id "cursor"} nil)))

(defcomponent input [data owner]
  (init_state [this]
              {:text ""})
  (render-state [this state]
                (dom/input
                 {:id          "inputField"
                  :value       (:text state)
                  :on-change   (partial i/handle-text-input data owner)
                  :on-key-down (partial i/handle-special-input data owner)
                  :on-blur     (partial u/reset-focus "inputField")}
                 nil)))

(defcomponent span [data owner]
  (render [this]
          (dom/span nil data)))

(defcomponent paragraph [{:keys [text] :as data} owner]
  (render [this]
          (dom/p nil
                 (om/build-all
                  span
                  (map #(str % " ") (clojure.string/split text #"\s"))))))

(defcomponent title [{:keys [text] :as data} owner]
  (render [this]
          (dom/h1 nil text)))

(defn- determine-component [data owner]
  (condp = (:tag data)
    :h1 (title data owner)
        (paragraph data owner)))

(defcomponent article [{:keys [article] :as data} owner]
  (render [this]
          (dom/div nil
                   (om/build-all determine-component article))))
