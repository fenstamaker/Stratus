(ns stratus.schemes
  (:require [schema.core :as s :include-macros true]))

(def Paragraph
  {:text s/Str})

(def Article [Paragraph])
