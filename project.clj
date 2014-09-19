; Versioning: Marketing.Changes.Security
(defproject stratus "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2322"]
                 [om "0.7.3"]
                 [prismatic/om-tools "0.3.2"]
                 [prismatic/schema "0.2.6"]]
  :plugins [[lein-cljsbuild "1.0.4-SNAPSHOT"]]
  :source-paths ["src"]
  :aliases {"watch" ["cljsbuild" "auto"]
            "build" ["cljsbuild" "once"]}
  :hooks [leiningen.cljsbuild]  
  :cljsbuild {
    :builds [{:id "dev"
              :source-paths ["src"]
              :compiler {:output-to "stratus.js"
                         :output-dir "out"
                         :optimizations :none
                         :source-map true}}
             {:id "prod"
              :source-paths ["src"]
              :compiler {:output-to "stratus.js"
                         :optimizations :advanced
                         :pretty-print false
                         :preamble ["react/react.min.js"]
                         :externs ["react/externs/react.js"]}}]})
