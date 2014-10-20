(ns stratus.text
  (:require [stratus.utility :refer :all]
            [stratus.schemes :refer :all])
  (:require [schema.core :as s :include-macros true]))

(s/defn insert-character :- Paragraph
  "Returns a new paragraph with character inserted at n in given paragraph."
  [paragraph :- Paragraph
   index     :- s/Num
   character :- s/Str]
  (update-in paragraph [:text]
             #(str (subs % 0 index)
                   character
                   (subs % index))))

(s/defn insert-paragraph :- Article
  "Returns a new article with the given paragraph inserted at n in given article."
  [article   :- Article
   index     :- s/Num
   paragraph :- Paragraph]
  (concat
   (conj (take index article) paragraph)
   (drop index article)))
