(ns figwheel.connect (:require [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:build-id "great-things-done", :websocket-url "ws://localhost:3449/figwheel-ws"})

