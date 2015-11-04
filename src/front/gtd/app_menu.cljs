; Copyright (c) 2015, Benjamin Van Ryseghem. All rights reserved.
; The use and distribution terms for this software are covered by the
; Eclipse Public License 1.0 (http://opensource.org/licenses/eclipse-1.0.php)
; which can be found in the file epl-v10.html at the root of this distribution.
; By using this software in any fashion, you are agreeing to be bound by
; the terms of this license.
; You must not remove this notice, or any other, from this software.

(ns gtd.app-menu)

(defn init
  "Initialize the application menu."
  []
  (let [remote        (js/require "remote")
        app           (.require remote "app")
        BrowserWindow (.require remote "browser-window")
        shell         (.require remote "shell")
        Menu          (.require remote "menu")
        MenuItem      (.require remote "menu-item")
        menu          (new Menu)
        template      (clj->js [{:label "Electron"
                                 :submenu [{:label "About Electron"
                                            :selector "orderFrontStandardAboutPanel:"}
                                           {:type "separator"}
                                           {:label "Services"
                                            :submenu []}
                                           {:type "separator"}
                                           {:label "Hide Electron"
                                            :accelerator "Command+H"
                                            :selector "hide:"}
                                           {:label "Hide Others"
                                            :accelerator "Command+Shift+H"
                                            :selector "hideOtherApplications:"}
                                           {:label "Show All"
                                            :selector "unhideAllApplications:"}
                                           {:type "separator"}
                                           {:label "Quit"
                                            :accelerator "Command+Q"
                                            :click #(.quit app)}]}
                                {:label "Edit"
                                 :submenu [
                                           {:label "Undo"
                                            :accelerator "Command+Z"
                                            :selector "undo:"}
                                           {:label "Redo"
                                            :accelerator "Shift+Command+Z"
                                            :selector "redo:"}
                                           {:type "separator"}
                                           {:label "Cut"
                                            :accelerator "Command+X"
                                            :selector "cut:"}
                                           {:label "Copy"
                                            :accelerator "Command+C"
                                            :selector "copy:"}
                                           {:label "Paste"
                                            :accelerator "Command+V"
                                            :selector "paste:"}
                                           {:label "Select All"
                                            :accelerator "Command+A"
                                            :selector "selectAll:"}]}
                                {:label "View"
                                 :submenu [{:label "Reload"
                                            :accelerator "Command+R"
                                            :click #(.reloadIgnoringCache (.getFocusedWindow BrowserWindow))}
                                           {:label "Toggle DevTools"
                                            :accelerator "Alt+Command+I"
                                            :click #(.toggleDevTools (.getFocusedWindow BrowserWindow))}]}
                                {:label "Window"
                                 :submenu [{:label "Minimize"
                                            :accelerator "Command+M"
                                            :selector "performMiniaturize:"}
                                           {:label "Close"
                                            :accelerator "Command+W"
                                            :selector "performClose:"}
                                           {:type "separator"}
                                           {:label "Bring All to Front"
                                            :selector "arrangeInFront:"}]}
                                {:label "Help"
                                 :submenu [{:label "Report an issue"
                                            :click #(.openExternal shell "https://github.com/BenjaminVanRyseghem/great-things-done/issues/new")}]}])
        tmp-menu      (.buildFromTemplate Menu template)]
    (.setApplicationMenu Menu tmp-menu)))
