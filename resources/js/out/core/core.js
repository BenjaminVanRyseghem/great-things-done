// Compiled by ClojureScript 1.7.122 {}
goog.provide('core.core');
goog.require('cljs.core');
goog.require('gtd.app_menu');
goog.require('gtd.db');
goog.require('gtd.platform');
goog.require('ui.core');
goog.require('figwheel.client');
goog.require('gtd.state');
goog.require('gtd.import_db');
goog.require('gtd.integration');
goog.require('repl.core');
goog.require('gtd.crypto');
cljs.core.enable_console_print_BANG_.call(null);
figwheel.client.watch_and_reload.call(null,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws",new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),(function (){
window.installTooltip();

return cljs.core.print.call(null,"reloaded");
}));
gtd.db.ensure_structure.call(null);
gtd.platform.ensure_config_file_BANG_.call(null);
gtd.db.ensure_project.call(null,gtd.state.inbox.call(null));
gtd.app_menu.init.call(null);
if(typeof core.core.repl !== 'undefined'){
} else {
core.core.repl = (function (){
repl.core.init_tcp_repl.call(null,"gtd>");

return repl.core.init_tcp_cli.call(null);
})()
;
}
gtd.import_db.import_all_projects_BANG_.call(null);
var projects_23274 = cljs.core.vals.call(null,gtd.state.all_projects.call(null));
console.log(cljs.core.count.call(null,projects_23274));

var seq__23270_23275 = cljs.core.seq.call(null,projects_23274);
var chunk__23271_23276 = null;
var count__23272_23277 = (0);
var i__23273_23278 = (0);
while(true){
if((i__23273_23278 < count__23272_23277)){
var project_23279 = cljs.core._nth.call(null,chunk__23271_23276,i__23273_23278);
console.log(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(project_23279));

var G__23280 = seq__23270_23275;
var G__23281 = chunk__23271_23276;
var G__23282 = count__23272_23277;
var G__23283 = (i__23273_23278 + (1));
seq__23270_23275 = G__23280;
chunk__23271_23276 = G__23281;
count__23272_23277 = G__23282;
i__23273_23278 = G__23283;
continue;
} else {
var temp__4425__auto___23284 = cljs.core.seq.call(null,seq__23270_23275);
if(temp__4425__auto___23284){
var seq__23270_23285__$1 = temp__4425__auto___23284;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23270_23285__$1)){
var c__17250__auto___23286 = cljs.core.chunk_first.call(null,seq__23270_23285__$1);
var G__23287 = cljs.core.chunk_rest.call(null,seq__23270_23285__$1);
var G__23288 = c__17250__auto___23286;
var G__23289 = cljs.core.count.call(null,c__17250__auto___23286);
var G__23290 = (0);
seq__23270_23275 = G__23287;
chunk__23271_23276 = G__23288;
count__23272_23277 = G__23289;
i__23273_23278 = G__23290;
continue;
} else {
var project_23291 = cljs.core.first.call(null,seq__23270_23285__$1);
console.log(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(project_23291));

var G__23292 = cljs.core.next.call(null,seq__23270_23285__$1);
var G__23293 = null;
var G__23294 = (0);
var G__23295 = (0);
seq__23270_23275 = G__23292;
chunk__23271_23276 = G__23293;
count__23272_23277 = G__23294;
i__23273_23278 = G__23295;
continue;
}
} else {
}
}
break;
}
var tasks_23300 = new cljs.core.Keyword(null,"tasks","tasks",-1754368880).cljs$core$IFn$_invoke$arity$1(gtd.state.inbox.call(null));
var seq__23296_23301 = cljs.core.seq.call(null,tasks_23300);
var chunk__23297_23302 = null;
var count__23298_23303 = (0);
var i__23299_23304 = (0);
while(true){
if((i__23299_23304 < count__23298_23303)){
var t_23305 = cljs.core._nth.call(null,chunk__23297_23302,i__23299_23304);
console.log(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(t_23305));

var G__23306 = seq__23296_23301;
var G__23307 = chunk__23297_23302;
var G__23308 = count__23298_23303;
var G__23309 = (i__23299_23304 + (1));
seq__23296_23301 = G__23306;
chunk__23297_23302 = G__23307;
count__23298_23303 = G__23308;
i__23299_23304 = G__23309;
continue;
} else {
var temp__4425__auto___23310 = cljs.core.seq.call(null,seq__23296_23301);
if(temp__4425__auto___23310){
var seq__23296_23311__$1 = temp__4425__auto___23310;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23296_23311__$1)){
var c__17250__auto___23312 = cljs.core.chunk_first.call(null,seq__23296_23311__$1);
var G__23313 = cljs.core.chunk_rest.call(null,seq__23296_23311__$1);
var G__23314 = c__17250__auto___23312;
var G__23315 = cljs.core.count.call(null,c__17250__auto___23312);
var G__23316 = (0);
seq__23296_23301 = G__23313;
chunk__23297_23302 = G__23314;
count__23298_23303 = G__23315;
i__23299_23304 = G__23316;
continue;
} else {
var t_23317 = cljs.core.first.call(null,seq__23296_23311__$1);
console.log(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(t_23317));

var G__23318 = cljs.core.next.call(null,seq__23296_23311__$1);
var G__23319 = null;
var G__23320 = (0);
var G__23321 = (0);
seq__23296_23301 = G__23318;
chunk__23297_23302 = G__23319;
count__23298_23303 = G__23320;
i__23299_23304 = G__23321;
continue;
}
} else {
}
}
break;
}
console.log(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(gtd.state.get_project_by_id.call(null,"First-Project-56dc33b8-c173-42c5-be31-eef12a83ea49")));
ui.core.render_core.call(null);

//# sourceMappingURL=core.js.map