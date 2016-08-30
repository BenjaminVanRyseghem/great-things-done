(defproject great-things-done "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[cljs-ajax "0.5.0"]
                 [com.lucasbradstreet/cljs-uuid-utils "1.0.2"]
                 [figwheel "0.4.1"]
                 [funcool/cuerdas "0.6.0"]
                 [jayq "2.5.4"]
                 [org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.122"]
                 [org.webjars/react "0.13.3"]
                 [reagent "0.5.1" :exclusions [cljsjs/react]]
                 [cljsjs/react-with-addons "0.13.3-0"]
                 [ring/ring-core "1.4.0"]
                 [secretary "1.2.3"]]
  :plugins [[funcool/codeina "0.3.0" :exclusions [org.clojure/clojure]]
            [lein-cljsbuild "1.1.0"]
            [lein-figwheel "0.4.1" :exclusions [[org.clojure/tools.reader]
                                                [org.codehaus.plexus/plexus-utils]
                                                [org.clojure/clojure]]]
            [lein-less "1.7.5"]]
  :source-paths ["src/tools"]
  :clean-targets ^{:protect false} [:target-path
                                    "resources/js/main.js"
                                    "resources/js/out"
                                    "resources/js/gtd.js"]
  :cljsbuild {:builds
              [{:id "electron"
                :source-paths ["src/electron/electron/"]
                :compiler {:output-to "resources/js/main.js"
                           :optimizations :simple
                           :pretty-print true
                           :cache-analysis true}}
               {:id "electron-dev"
                :source-paths ["src/electron/dev/"
                               "src/electron/electron/"]
                :compiler {:output-to "resources/js/main.js"
                           :optimizations :none
                           :pretty-print true
                           :cache-analysis true}}
               {:id "gtd"
                :source-paths ["src/front/"]
                :compiler {:main "gtd.core"
                           :output-to "resources/js/gtd.js"
                           :optimizations :whitespace
                           :pretty-print false}}
               {:id "gtd-dev"
                :source-paths ["src/front/"]
                :figwheel true
                :compiler {:main "gtd.core"
                           :asset-path "js/out"
                           :output-dir "resources/js/out"
                           :output-to "resources/js/gtd.js"
                           :optimizations :none
                           :pretty-print true
                           :source-map true
                           :cache-analysis true}}]}
  :less {:source-paths ["resources/less"]
         :target-path "resources/css"}
  :figwheel {:http-server-root ""
             :ring-handler figwheel-middleware/app
             :server-port 3449
             :css-dirs ["resources/css"]}
  :codeina {:project {:name "Great Things Done"}
            :reader  :clojurescript
            :sources ["src/node"
                      "src/utils"
                      "src/gtd"
                      "src/repl"
                      "src/ui"]
            :src-uri "https://github.com/BenjaminVanRyseghem/great-things-done/blob/master/"
            :src-uri-prefix "#L"}
  :aliases {"dev"  ["do"
                    ["clean"]
                    ["cljsbuild" "once" "electron-dev"]
                    ["cljsbuild" "once" "gtd-dev"]
                    ["less" "once"]]
            "prod" ["do"
                    ["clean"]
                    ["cljsbuild" "once" "electron"]
                    ["cljsbuild" "once" "gtd"]
                    ["less" "once"]]})
