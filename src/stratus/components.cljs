(ns stratus.components
  (:require [om.core :as om :include-macros true]
            [om-tools.dom :as dom :include-macros true]
            [om-tools.core :refer-macros [defcomponent]]
            [stratus.input :as i]))

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
                         li
                         (map #(:name %) (:items data))))))

(defcomponent cursor [data owner]
  (render [this]
          (dom/span {:id "cursor"} nil)))

(defcomponent input [{:keys [input] :as data} owner]
  (init_state [this]
              {:text ""})
  (render-state [this state]
                (dom/input
                 {:id          (:input-class input)
                  :value       (:text state)
                  :on-change   (partial (:on-change   input) data owner)
                  :on-key-down (partial (:on-key-down input) data owner)
                  :on-blur     (:on-blur input)}
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

(defcomponent title [data owner]
  (render [this]
          (dom/h1 nil (:text data))))

(defn- determine-component [data owner]
  (condp = (:tag data)
    :h1 (title data owner)
        (paragraph data owner)))

(defcomponent article [data owner]
  (render [this]
          (dom/div nil
                   (om/build-all determine-component
                                 (:article data)))))
