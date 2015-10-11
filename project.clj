(defproject great-things-done "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[com.lucasbradstreet/cljs-uuid-utils "1.0.2"]
                 [figwheel "0.4.1"]
                 [funcool/cuerdas "0.6.0"]
                 [org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.122"]
                 [org.webjars/react "0.13.3"]
                 [reagent "0.5.1"]
                 [ring/ring-core "1.4.0"]]

  :plugins [[lein-cljsbuild "1.1.0"]
            [lein-figwheel "0.4.1"]]
  :source-paths ["src/tools"]
  :clean-targets ^{:protect false} [:target-path "resources/public/js/out"]
  :cljsbuild {:builds
              [{:id "atom-dev"
                :source-paths ["src/atom"]
                :compiler {:output-to "resources/main.js"
                           :optimizations :simple
                           :pretty-print true
                           :cache-analysis true}}
               {:id "great-things-done"
                :figwheel true
                :source-paths ["src/node/"
                               "src/utils/"
                               "src/ui/"
                               "src/gtd/"
                               "src/repl/"
                               "src/core/"]
                :compiler {:output-dir "resources/public/js/out"
                           :output-to "resources/public/js/gtd-core.js"
                           :optimizations :none
                           ; :pretty-print true
                           :source-map true
                           :cache-analysis true}}]}
  :figwheel {:http-server-root "public"
             :ring-handler figwheel-middleware/app
             :server-port 3449})
