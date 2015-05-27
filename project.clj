(defproject great-things-done "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[com.lucasbradstreet/cljs-uuid-utils "1.0.1"]
                 [org.webjars/react "0.12.0"]
                 [org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2511"]
                 [figwheel "0.1.5-SNAPSHOT"]
                 [reagent "0.5.0-alpha"]
                 [ring/ring-core "1.3.1"]]

  :plugins [[lein-cljsbuild "1.0.3"]
            [lein-figwheel "0.1.5-SNAPSHOT"]]
  :source-paths ["src/tools"]
  :cljsbuild
  {:builds
   [{:source-paths ["src/atom"],
     :id "atom-dev",
     :compiler {:output-to "resources/main.js",
                :optimizations :simple
                :pretty-print true
                :cache-analysis true}}
    {:source-paths ["src/node" "src/ui" "src/great_things_done" "src/core"],
     :id "great-things-done",
     :compiler {:output-dir "resources/public/js/great-things-done-out"
                :output-to "resources/public/js/great-things-done-core.js",
                :optimizations :none
                ; :pretty-print true
                :source-map true
                :cache-analysis true}}]}
  :figwheel {:http-server-root "public"
             :ring-handler figwheel-middleware/app
             :server-port 3449})
