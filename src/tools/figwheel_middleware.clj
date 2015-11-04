; Copyright (c) 2015, Benjamin Van Ryseghem. All rights reserved.
; The use and distribution terms for this software are covered by the
; Eclipse Public License 1.0 (http://opensource.org/licenses/eclipse-1.0.php)
; which can be found in the file epl-v10.html at the root of this distribution.
; By using this software in any fashion, you are agreeing to be bound by
; the terms of this license.
; You must not remove this notice, or any other, from this software.

(ns figwheel-middleware
  (:require [ring.middleware.resource :refer (wrap-resource)]))

(defn handler [request]
  {:status  404
   :headers {"Content-Type" "text/html"}
   :body    (str "Cannot find:" (:uri request))})

(def app
  ;; static resources in resources/public
  ; (wrap-resource "public")
  ;; static resources from webjars dependencies
  (wrap-resource handler "/META-INF/resources"))
