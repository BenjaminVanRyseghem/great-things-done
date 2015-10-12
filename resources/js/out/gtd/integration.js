// Compiled by ClojureScript 1.7.122 {}
goog.provide('gtd.integration');
goog.require('cljs.core');
goog.require('gtd.platform');
gtd.integration.osx_mail_applescript = "tell application \"Mail\"\n     set _sel to get selection\n     set _links to {}\n     repeat with _msg in _sel\n       set _messageURL to \"message://%3c\" & _msg's message id & \"%3e\"\n       set end of _links to _messageURL\n     end repeat\n     set AppleScript's text item delimiters to return\n   end tell\n\n   return _links";
gtd.integration.osx_finder_applescript = "tell application \"Finder\"\n     set acc to {}\n   \t set sel to the selection\n   \t repeat with each in sel\n   \t   set end of acc to URL of each\n     end repeat\n   end tell\n\n   return acc";
gtd.integration.run_applescript = (function gtd$integration$run_applescript(code,callback){
var applescript = require("applescript");
return applescript.execString(code,((function (applescript){
return (function (err,res){
if(cljs.core.truth_(err)){
throw (new Error([cljs.core.str("Error when performing"),cljs.core.str(code)].join('')));
} else {
}

return callback.call(null,res);
});})(applescript))
);
});
if(typeof gtd.integration.retrieve_current_app_data_osx !== 'undefined'){
} else {
gtd.integration.retrieve_current_app_data_osx = (function (){var method_table__17360__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17361__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17362__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17363__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17364__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"gtd.integration","retrieve-current-app-data-osx"),((function (method_table__17360__auto__,prefer_table__17361__auto__,method_cache__17362__auto__,cached_hierarchy__17363__auto__,hierarchy__17364__auto__){
return (function (p1__22966_SHARP_){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__22966_SHARP_);
});})(method_table__17360__auto__,prefer_table__17361__auto__,method_cache__17362__auto__,cached_hierarchy__17363__auto__,hierarchy__17364__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17364__auto__,method_table__17360__auto__,prefer_table__17361__auto__,method_cache__17362__auto__,cached_hierarchy__17363__auto__));
})();
}
cljs.core._add_method.call(null,gtd.integration.retrieve_current_app_data_osx,"com.apple.mail",(function (info,callback){
return gtd.integration.run_applescript.call(null,gtd.integration.osx_mail_applescript,callback);
}));
cljs.core._add_method.call(null,gtd.integration.retrieve_current_app_data_osx,"com.apple.finder",(function (info,callback){
return gtd.integration.run_applescript.call(null,gtd.integration.osx_finder_applescript,callback);
}));
/**
 * Return info about the current frontmost application on OSX
 */
gtd.integration.get_current_app_info_osx = (function gtd$integration$get_current_app_info_osx(){
var remote = require("remote");
var nodobjc = require("nodobjc");
nodobjc.framework("AppKit");

var workspace = nodobjc.NSWorkspace("sharedWorkspace");
var app = workspace.call(null,"frontmostApplication");
var app_name = [cljs.core.str(app.call(null,"localizedName"))].join('');
var app_id = [cljs.core.str(app.call(null,"bundleIdentifier"))].join('');
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),app_name,new cljs.core.Keyword(null,"id","id",-1388402092),app_id], null);
});
gtd.integration.get_current_app_info = (function gtd$integration$get_current_app_info(){
return gtd.platform.for_os.call(null,"Mac OS X",gtd.integration.get_current_app_info_osx.call(null));
});
gtd.integration.js_get_current_app_info = (function gtd$integration$js_get_current_app_info(){
return cljs.core.clj__GT_js.call(null,gtd.integration.get_current_app_info.call(null));
});
goog.exportSymbol('gtd.integration.js_get_current_app_info', gtd.integration.js_get_current_app_info);
gtd.integration.get_current_app_data = (function gtd$integration$get_current_app_data(fun){
var info = gtd.integration.get_current_app_info.call(null);
return gtd.platform.for_os.call(null,"Mac OS X",gtd.integration.retrieve_current_app_data_osx.call(null,info,fun));
});
gtd.integration.js_get_current_app_data = (function gtd$integration$js_get_current_app_data(fun){
return cljs.core.clj__GT_js.call(null,gtd.integration.get_current_app_data.call(null,fun));
});
goog.exportSymbol('gtd.integration.js_get_current_app_data', gtd.integration.js_get_current_app_data);

//# sourceMappingURL=integration.js.map