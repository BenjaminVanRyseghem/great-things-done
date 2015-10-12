// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__23906 = cljs.core._EQ_;
var expr__23907 = (function (){var or__16447__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16447__auto__)){
return or__16447__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__23906.call(null,"true",expr__23907))){
return true;
} else {
if(cljs.core.truth_(pred__23906.call(null,"false",expr__23907))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__23907)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__23909__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__23909 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23910__i = 0, G__23910__a = new Array(arguments.length -  0);
while (G__23910__i < G__23910__a.length) {G__23910__a[G__23910__i] = arguments[G__23910__i + 0]; ++G__23910__i;}
  args = new cljs.core.IndexedSeq(G__23910__a,0);
} 
return G__23909__delegate.call(this,args);};
G__23909.cljs$lang$maxFixedArity = 0;
G__23909.cljs$lang$applyTo = (function (arglist__23911){
var args = cljs.core.seq(arglist__23911);
return G__23909__delegate(args);
});
G__23909.cljs$core$IFn$_invoke$arity$variadic = G__23909__delegate;
return G__23909;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__23912){
var map__23915 = p__23912;
var map__23915__$1 = ((((!((map__23915 == null)))?((((map__23915.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23915.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23915):map__23915);
var message = cljs.core.get.call(null,map__23915__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__23915__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16447__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16447__auto__)){
return or__16447__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16435__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16435__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16435__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__18530__auto___24077 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18530__auto___24077,ch){
return (function (){
var f__18531__auto__ = (function (){var switch__18465__auto__ = ((function (c__18530__auto___24077,ch){
return (function (state_24046){
var state_val_24047 = (state_24046[(1)]);
if((state_val_24047 === (7))){
var inst_24042 = (state_24046[(2)]);
var state_24046__$1 = state_24046;
var statearr_24048_24078 = state_24046__$1;
(statearr_24048_24078[(2)] = inst_24042);

(statearr_24048_24078[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24047 === (1))){
var state_24046__$1 = state_24046;
var statearr_24049_24079 = state_24046__$1;
(statearr_24049_24079[(2)] = null);

(statearr_24049_24079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24047 === (4))){
var inst_23999 = (state_24046[(7)]);
var inst_23999__$1 = (state_24046[(2)]);
var state_24046__$1 = (function (){var statearr_24050 = state_24046;
(statearr_24050[(7)] = inst_23999__$1);

return statearr_24050;
})();
if(cljs.core.truth_(inst_23999__$1)){
var statearr_24051_24080 = state_24046__$1;
(statearr_24051_24080[(1)] = (5));

} else {
var statearr_24052_24081 = state_24046__$1;
(statearr_24052_24081[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24047 === (15))){
var inst_24006 = (state_24046[(8)]);
var inst_24021 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_24006);
var inst_24022 = cljs.core.first.call(null,inst_24021);
var inst_24023 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_24022);
var inst_24024 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_24023)].join('');
var inst_24025 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_24024);
var state_24046__$1 = state_24046;
var statearr_24053_24082 = state_24046__$1;
(statearr_24053_24082[(2)] = inst_24025);

(statearr_24053_24082[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24047 === (13))){
var inst_24030 = (state_24046[(2)]);
var state_24046__$1 = state_24046;
var statearr_24054_24083 = state_24046__$1;
(statearr_24054_24083[(2)] = inst_24030);

(statearr_24054_24083[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24047 === (6))){
var state_24046__$1 = state_24046;
var statearr_24055_24084 = state_24046__$1;
(statearr_24055_24084[(2)] = null);

(statearr_24055_24084[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24047 === (17))){
var inst_24028 = (state_24046[(2)]);
var state_24046__$1 = state_24046;
var statearr_24056_24085 = state_24046__$1;
(statearr_24056_24085[(2)] = inst_24028);

(statearr_24056_24085[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24047 === (3))){
var inst_24044 = (state_24046[(2)]);
var state_24046__$1 = state_24046;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24046__$1,inst_24044);
} else {
if((state_val_24047 === (12))){
var inst_24005 = (state_24046[(9)]);
var inst_24019 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_24005,opts);
var state_24046__$1 = state_24046;
if(cljs.core.truth_(inst_24019)){
var statearr_24057_24086 = state_24046__$1;
(statearr_24057_24086[(1)] = (15));

} else {
var statearr_24058_24087 = state_24046__$1;
(statearr_24058_24087[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24047 === (2))){
var state_24046__$1 = state_24046;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24046__$1,(4),ch);
} else {
if((state_val_24047 === (11))){
var inst_24006 = (state_24046[(8)]);
var inst_24011 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24012 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_24006);
var inst_24013 = cljs.core.async.timeout.call(null,(1000));
var inst_24014 = [inst_24012,inst_24013];
var inst_24015 = (new cljs.core.PersistentVector(null,2,(5),inst_24011,inst_24014,null));
var state_24046__$1 = state_24046;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24046__$1,(14),inst_24015);
} else {
if((state_val_24047 === (9))){
var inst_24006 = (state_24046[(8)]);
var inst_24032 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_24033 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_24006);
var inst_24034 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_24033);
var inst_24035 = [cljs.core.str("Not loading: "),cljs.core.str(inst_24034)].join('');
var inst_24036 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_24035);
var state_24046__$1 = (function (){var statearr_24059 = state_24046;
(statearr_24059[(10)] = inst_24032);

return statearr_24059;
})();
var statearr_24060_24088 = state_24046__$1;
(statearr_24060_24088[(2)] = inst_24036);

(statearr_24060_24088[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24047 === (5))){
var inst_23999 = (state_24046[(7)]);
var inst_24001 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_24002 = (new cljs.core.PersistentArrayMap(null,2,inst_24001,null));
var inst_24003 = (new cljs.core.PersistentHashSet(null,inst_24002,null));
var inst_24004 = figwheel.client.focus_msgs.call(null,inst_24003,inst_23999);
var inst_24005 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_24004);
var inst_24006 = cljs.core.first.call(null,inst_24004);
var inst_24007 = figwheel.client.autoload_QMARK_.call(null);
var state_24046__$1 = (function (){var statearr_24061 = state_24046;
(statearr_24061[(8)] = inst_24006);

(statearr_24061[(9)] = inst_24005);

return statearr_24061;
})();
if(cljs.core.truth_(inst_24007)){
var statearr_24062_24089 = state_24046__$1;
(statearr_24062_24089[(1)] = (8));

} else {
var statearr_24063_24090 = state_24046__$1;
(statearr_24063_24090[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24047 === (14))){
var inst_24017 = (state_24046[(2)]);
var state_24046__$1 = state_24046;
var statearr_24064_24091 = state_24046__$1;
(statearr_24064_24091[(2)] = inst_24017);

(statearr_24064_24091[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24047 === (16))){
var state_24046__$1 = state_24046;
var statearr_24065_24092 = state_24046__$1;
(statearr_24065_24092[(2)] = null);

(statearr_24065_24092[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24047 === (10))){
var inst_24038 = (state_24046[(2)]);
var state_24046__$1 = (function (){var statearr_24066 = state_24046;
(statearr_24066[(11)] = inst_24038);

return statearr_24066;
})();
var statearr_24067_24093 = state_24046__$1;
(statearr_24067_24093[(2)] = null);

(statearr_24067_24093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24047 === (8))){
var inst_24005 = (state_24046[(9)]);
var inst_24009 = figwheel.client.reload_file_state_QMARK_.call(null,inst_24005,opts);
var state_24046__$1 = state_24046;
if(cljs.core.truth_(inst_24009)){
var statearr_24068_24094 = state_24046__$1;
(statearr_24068_24094[(1)] = (11));

} else {
var statearr_24069_24095 = state_24046__$1;
(statearr_24069_24095[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18530__auto___24077,ch))
;
return ((function (switch__18465__auto__,c__18530__auto___24077,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__18466__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__18466__auto____0 = (function (){
var statearr_24073 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24073[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__18466__auto__);

(statearr_24073[(1)] = (1));

return statearr_24073;
});
var figwheel$client$file_reloader_plugin_$_state_machine__18466__auto____1 = (function (state_24046){
while(true){
var ret_value__18467__auto__ = (function (){try{while(true){
var result__18468__auto__ = switch__18465__auto__.call(null,state_24046);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18468__auto__;
}
break;
}
}catch (e24074){if((e24074 instanceof Object)){
var ex__18469__auto__ = e24074;
var statearr_24075_24096 = state_24046;
(statearr_24075_24096[(5)] = ex__18469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24046);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24074;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24097 = state_24046;
state_24046 = G__24097;
continue;
} else {
return ret_value__18467__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__18466__auto__ = function(state_24046){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__18466__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__18466__auto____1.call(this,state_24046);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__18466__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__18466__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__18466__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__18466__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__18466__auto__;
})()
;})(switch__18465__auto__,c__18530__auto___24077,ch))
})();
var state__18532__auto__ = (function (){var statearr_24076 = f__18531__auto__.call(null);
(statearr_24076[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18530__auto___24077);

return statearr_24076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18532__auto__);
});})(c__18530__auto___24077,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__24098_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__24098_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_24105 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_24105){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_24103 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_24104 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_24103,_STAR_print_newline_STAR_24104,base_path_24105){
return (function() { 
var G__24106__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__24106 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24107__i = 0, G__24107__a = new Array(arguments.length -  0);
while (G__24107__i < G__24107__a.length) {G__24107__a[G__24107__i] = arguments[G__24107__i + 0]; ++G__24107__i;}
  args = new cljs.core.IndexedSeq(G__24107__a,0);
} 
return G__24106__delegate.call(this,args);};
G__24106.cljs$lang$maxFixedArity = 0;
G__24106.cljs$lang$applyTo = (function (arglist__24108){
var args = cljs.core.seq(arglist__24108);
return G__24106__delegate(args);
});
G__24106.cljs$core$IFn$_invoke$arity$variadic = G__24106__delegate;
return G__24106;
})()
;})(_STAR_print_fn_STAR_24103,_STAR_print_newline_STAR_24104,base_path_24105))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_24104;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_24103;
}}catch (e24102){if((e24102 instanceof Error)){
var e = e24102;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_24105], null));
} else {
var e = e24102;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_24105))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__24109){
var map__24116 = p__24109;
var map__24116__$1 = ((((!((map__24116 == null)))?((((map__24116.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24116.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24116):map__24116);
var opts = map__24116__$1;
var build_id = cljs.core.get.call(null,map__24116__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__24116,map__24116__$1,opts,build_id){
return (function (p__24118){
var vec__24119 = p__24118;
var map__24120 = cljs.core.nth.call(null,vec__24119,(0),null);
var map__24120__$1 = ((((!((map__24120 == null)))?((((map__24120.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24120.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24120):map__24120);
var msg = map__24120__$1;
var msg_name = cljs.core.get.call(null,map__24120__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24119,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__24119,map__24120,map__24120__$1,msg,msg_name,_,map__24116,map__24116__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__24119,map__24120,map__24120__$1,msg,msg_name,_,map__24116,map__24116__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__24116,map__24116__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__24126){
var vec__24127 = p__24126;
var map__24128 = cljs.core.nth.call(null,vec__24127,(0),null);
var map__24128__$1 = ((((!((map__24128 == null)))?((((map__24128.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24128.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24128):map__24128);
var msg = map__24128__$1;
var msg_name = cljs.core.get.call(null,map__24128__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24127,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__24130){
var map__24140 = p__24130;
var map__24140__$1 = ((((!((map__24140 == null)))?((((map__24140.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24140.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24140):map__24140);
var on_compile_warning = cljs.core.get.call(null,map__24140__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__24140__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__24140,map__24140__$1,on_compile_warning,on_compile_fail){
return (function (p__24142){
var vec__24143 = p__24142;
var map__24144 = cljs.core.nth.call(null,vec__24143,(0),null);
var map__24144__$1 = ((((!((map__24144 == null)))?((((map__24144.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24144.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24144):map__24144);
var msg = map__24144__$1;
var msg_name = cljs.core.get.call(null,map__24144__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24143,(1));
var pred__24146 = cljs.core._EQ_;
var expr__24147 = msg_name;
if(cljs.core.truth_(pred__24146.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__24147))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__24146.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__24147))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__24140,map__24140__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__18530__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18530__auto__,msg_hist,msg_names,msg){
return (function (){
var f__18531__auto__ = (function (){var switch__18465__auto__ = ((function (c__18530__auto__,msg_hist,msg_names,msg){
return (function (state_24363){
var state_val_24364 = (state_24363[(1)]);
if((state_val_24364 === (7))){
var inst_24287 = (state_24363[(2)]);
var state_24363__$1 = state_24363;
if(cljs.core.truth_(inst_24287)){
var statearr_24365_24411 = state_24363__$1;
(statearr_24365_24411[(1)] = (8));

} else {
var statearr_24366_24412 = state_24363__$1;
(statearr_24366_24412[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24364 === (20))){
var inst_24357 = (state_24363[(2)]);
var state_24363__$1 = state_24363;
var statearr_24367_24413 = state_24363__$1;
(statearr_24367_24413[(2)] = inst_24357);

(statearr_24367_24413[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24364 === (27))){
var inst_24353 = (state_24363[(2)]);
var state_24363__$1 = state_24363;
var statearr_24368_24414 = state_24363__$1;
(statearr_24368_24414[(2)] = inst_24353);

(statearr_24368_24414[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24364 === (1))){
var inst_24280 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_24363__$1 = state_24363;
if(cljs.core.truth_(inst_24280)){
var statearr_24369_24415 = state_24363__$1;
(statearr_24369_24415[(1)] = (2));

} else {
var statearr_24370_24416 = state_24363__$1;
(statearr_24370_24416[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24364 === (24))){
var inst_24355 = (state_24363[(2)]);
var state_24363__$1 = state_24363;
var statearr_24371_24417 = state_24363__$1;
(statearr_24371_24417[(2)] = inst_24355);

(statearr_24371_24417[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24364 === (4))){
var inst_24361 = (state_24363[(2)]);
var state_24363__$1 = state_24363;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24363__$1,inst_24361);
} else {
if((state_val_24364 === (15))){
var inst_24359 = (state_24363[(2)]);
var state_24363__$1 = state_24363;
var statearr_24372_24418 = state_24363__$1;
(statearr_24372_24418[(2)] = inst_24359);

(statearr_24372_24418[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24364 === (21))){
var inst_24318 = (state_24363[(2)]);
var state_24363__$1 = state_24363;
var statearr_24373_24419 = state_24363__$1;
(statearr_24373_24419[(2)] = inst_24318);

(statearr_24373_24419[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24364 === (31))){
var inst_24342 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_24363__$1 = state_24363;
if(cljs.core.truth_(inst_24342)){
var statearr_24374_24420 = state_24363__$1;
(statearr_24374_24420[(1)] = (34));

} else {
var statearr_24375_24421 = state_24363__$1;
(statearr_24375_24421[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24364 === (32))){
var inst_24351 = (state_24363[(2)]);
var state_24363__$1 = state_24363;
var statearr_24376_24422 = state_24363__$1;
(statearr_24376_24422[(2)] = inst_24351);

(statearr_24376_24422[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24364 === (33))){
var inst_24340 = (state_24363[(2)]);
var state_24363__$1 = state_24363;
var statearr_24377_24423 = state_24363__$1;
(statearr_24377_24423[(2)] = inst_24340);

(statearr_24377_24423[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24364 === (13))){
var inst_24301 = figwheel.client.heads_up.clear.call(null);
var state_24363__$1 = state_24363;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24363__$1,(16),inst_24301);
} else {
if((state_val_24364 === (22))){
var inst_24322 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24323 = figwheel.client.heads_up.append_message.call(null,inst_24322);
var state_24363__$1 = state_24363;
var statearr_24378_24424 = state_24363__$1;
(statearr_24378_24424[(2)] = inst_24323);

(statearr_24378_24424[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24364 === (36))){
var inst_24349 = (state_24363[(2)]);
var state_24363__$1 = state_24363;
var statearr_24379_24425 = state_24363__$1;
(statearr_24379_24425[(2)] = inst_24349);

(statearr_24379_24425[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24364 === (29))){
var inst_24333 = (state_24363[(2)]);
var state_24363__$1 = state_24363;
var statearr_24380_24426 = state_24363__$1;
(statearr_24380_24426[(2)] = inst_24333);

(statearr_24380_24426[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24364 === (6))){
var inst_24282 = (state_24363[(7)]);
var state_24363__$1 = state_24363;
var statearr_24381_24427 = state_24363__$1;
(statearr_24381_24427[(2)] = inst_24282);

(statearr_24381_24427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24364 === (28))){
var inst_24329 = (state_24363[(2)]);
var inst_24330 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24331 = figwheel.client.heads_up.display_warning.call(null,inst_24330);
var state_24363__$1 = (function (){var statearr_24382 = state_24363;
(statearr_24382[(8)] = inst_24329);

return statearr_24382;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24363__$1,(29),inst_24331);
} else {
if((state_val_24364 === (25))){
var inst_24327 = figwheel.client.heads_up.clear.call(null);
var state_24363__$1 = state_24363;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24363__$1,(28),inst_24327);
} else {
if((state_val_24364 === (34))){
var inst_24344 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24363__$1 = state_24363;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24363__$1,(37),inst_24344);
} else {
if((state_val_24364 === (17))){
var inst_24309 = (state_24363[(2)]);
var state_24363__$1 = state_24363;
var statearr_24383_24428 = state_24363__$1;
(statearr_24383_24428[(2)] = inst_24309);

(statearr_24383_24428[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24364 === (3))){
var inst_24299 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_24363__$1 = state_24363;
if(cljs.core.truth_(inst_24299)){
var statearr_24384_24429 = state_24363__$1;
(statearr_24384_24429[(1)] = (13));

} else {
var statearr_24385_24430 = state_24363__$1;
(statearr_24385_24430[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24364 === (12))){
var inst_24295 = (state_24363[(2)]);
var state_24363__$1 = state_24363;
var statearr_24386_24431 = state_24363__$1;
(statearr_24386_24431[(2)] = inst_24295);

(statearr_24386_24431[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24364 === (2))){
var inst_24282 = (state_24363[(7)]);
var inst_24282__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_24363__$1 = (function (){var statearr_24387 = state_24363;
(statearr_24387[(7)] = inst_24282__$1);

return statearr_24387;
})();
if(cljs.core.truth_(inst_24282__$1)){
var statearr_24388_24432 = state_24363__$1;
(statearr_24388_24432[(1)] = (5));

} else {
var statearr_24389_24433 = state_24363__$1;
(statearr_24389_24433[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24364 === (23))){
var inst_24325 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_24363__$1 = state_24363;
if(cljs.core.truth_(inst_24325)){
var statearr_24390_24434 = state_24363__$1;
(statearr_24390_24434[(1)] = (25));

} else {
var statearr_24391_24435 = state_24363__$1;
(statearr_24391_24435[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24364 === (35))){
var state_24363__$1 = state_24363;
var statearr_24392_24436 = state_24363__$1;
(statearr_24392_24436[(2)] = null);

(statearr_24392_24436[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24364 === (19))){
var inst_24320 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_24363__$1 = state_24363;
if(cljs.core.truth_(inst_24320)){
var statearr_24393_24437 = state_24363__$1;
(statearr_24393_24437[(1)] = (22));

} else {
var statearr_24394_24438 = state_24363__$1;
(statearr_24394_24438[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24364 === (11))){
var inst_24291 = (state_24363[(2)]);
var state_24363__$1 = state_24363;
var statearr_24395_24439 = state_24363__$1;
(statearr_24395_24439[(2)] = inst_24291);

(statearr_24395_24439[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24364 === (9))){
var inst_24293 = figwheel.client.heads_up.clear.call(null);
var state_24363__$1 = state_24363;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24363__$1,(12),inst_24293);
} else {
if((state_val_24364 === (5))){
var inst_24284 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_24363__$1 = state_24363;
var statearr_24396_24440 = state_24363__$1;
(statearr_24396_24440[(2)] = inst_24284);

(statearr_24396_24440[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24364 === (14))){
var inst_24311 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_24363__$1 = state_24363;
if(cljs.core.truth_(inst_24311)){
var statearr_24397_24441 = state_24363__$1;
(statearr_24397_24441[(1)] = (18));

} else {
var statearr_24398_24442 = state_24363__$1;
(statearr_24398_24442[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24364 === (26))){
var inst_24335 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_24363__$1 = state_24363;
if(cljs.core.truth_(inst_24335)){
var statearr_24399_24443 = state_24363__$1;
(statearr_24399_24443[(1)] = (30));

} else {
var statearr_24400_24444 = state_24363__$1;
(statearr_24400_24444[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24364 === (16))){
var inst_24303 = (state_24363[(2)]);
var inst_24304 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24305 = figwheel.client.format_messages.call(null,inst_24304);
var inst_24306 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24307 = figwheel.client.heads_up.display_error.call(null,inst_24305,inst_24306);
var state_24363__$1 = (function (){var statearr_24401 = state_24363;
(statearr_24401[(9)] = inst_24303);

return statearr_24401;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24363__$1,(17),inst_24307);
} else {
if((state_val_24364 === (30))){
var inst_24337 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24338 = figwheel.client.heads_up.display_warning.call(null,inst_24337);
var state_24363__$1 = state_24363;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24363__$1,(33),inst_24338);
} else {
if((state_val_24364 === (10))){
var inst_24297 = (state_24363[(2)]);
var state_24363__$1 = state_24363;
var statearr_24402_24445 = state_24363__$1;
(statearr_24402_24445[(2)] = inst_24297);

(statearr_24402_24445[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24364 === (18))){
var inst_24313 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24314 = figwheel.client.format_messages.call(null,inst_24313);
var inst_24315 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24316 = figwheel.client.heads_up.display_error.call(null,inst_24314,inst_24315);
var state_24363__$1 = state_24363;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24363__$1,(21),inst_24316);
} else {
if((state_val_24364 === (37))){
var inst_24346 = (state_24363[(2)]);
var state_24363__$1 = state_24363;
var statearr_24403_24446 = state_24363__$1;
(statearr_24403_24446[(2)] = inst_24346);

(statearr_24403_24446[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24364 === (8))){
var inst_24289 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24363__$1 = state_24363;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24363__$1,(11),inst_24289);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18530__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__18465__auto__,c__18530__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18466__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18466__auto____0 = (function (){
var statearr_24407 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24407[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18466__auto__);

(statearr_24407[(1)] = (1));

return statearr_24407;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18466__auto____1 = (function (state_24363){
while(true){
var ret_value__18467__auto__ = (function (){try{while(true){
var result__18468__auto__ = switch__18465__auto__.call(null,state_24363);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18468__auto__;
}
break;
}
}catch (e24408){if((e24408 instanceof Object)){
var ex__18469__auto__ = e24408;
var statearr_24409_24447 = state_24363;
(statearr_24409_24447[(5)] = ex__18469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24363);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24408;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24448 = state_24363;
state_24363 = G__24448;
continue;
} else {
return ret_value__18467__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18466__auto__ = function(state_24363){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18466__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18466__auto____1.call(this,state_24363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18466__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18466__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18466__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18466__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18466__auto__;
})()
;})(switch__18465__auto__,c__18530__auto__,msg_hist,msg_names,msg))
})();
var state__18532__auto__ = (function (){var statearr_24410 = f__18531__auto__.call(null);
(statearr_24410[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18530__auto__);

return statearr_24410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18532__auto__);
});})(c__18530__auto__,msg_hist,msg_names,msg))
);

return c__18530__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__18530__auto___24511 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18530__auto___24511,ch){
return (function (){
var f__18531__auto__ = (function (){var switch__18465__auto__ = ((function (c__18530__auto___24511,ch){
return (function (state_24494){
var state_val_24495 = (state_24494[(1)]);
if((state_val_24495 === (1))){
var state_24494__$1 = state_24494;
var statearr_24496_24512 = state_24494__$1;
(statearr_24496_24512[(2)] = null);

(statearr_24496_24512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24495 === (2))){
var state_24494__$1 = state_24494;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24494__$1,(4),ch);
} else {
if((state_val_24495 === (3))){
var inst_24492 = (state_24494[(2)]);
var state_24494__$1 = state_24494;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24494__$1,inst_24492);
} else {
if((state_val_24495 === (4))){
var inst_24482 = (state_24494[(7)]);
var inst_24482__$1 = (state_24494[(2)]);
var state_24494__$1 = (function (){var statearr_24497 = state_24494;
(statearr_24497[(7)] = inst_24482__$1);

return statearr_24497;
})();
if(cljs.core.truth_(inst_24482__$1)){
var statearr_24498_24513 = state_24494__$1;
(statearr_24498_24513[(1)] = (5));

} else {
var statearr_24499_24514 = state_24494__$1;
(statearr_24499_24514[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24495 === (5))){
var inst_24482 = (state_24494[(7)]);
var inst_24484 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_24482);
var state_24494__$1 = state_24494;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24494__$1,(8),inst_24484);
} else {
if((state_val_24495 === (6))){
var state_24494__$1 = state_24494;
var statearr_24500_24515 = state_24494__$1;
(statearr_24500_24515[(2)] = null);

(statearr_24500_24515[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24495 === (7))){
var inst_24490 = (state_24494[(2)]);
var state_24494__$1 = state_24494;
var statearr_24501_24516 = state_24494__$1;
(statearr_24501_24516[(2)] = inst_24490);

(statearr_24501_24516[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24495 === (8))){
var inst_24486 = (state_24494[(2)]);
var state_24494__$1 = (function (){var statearr_24502 = state_24494;
(statearr_24502[(8)] = inst_24486);

return statearr_24502;
})();
var statearr_24503_24517 = state_24494__$1;
(statearr_24503_24517[(2)] = null);

(statearr_24503_24517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__18530__auto___24511,ch))
;
return ((function (switch__18465__auto__,c__18530__auto___24511,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__18466__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__18466__auto____0 = (function (){
var statearr_24507 = [null,null,null,null,null,null,null,null,null];
(statearr_24507[(0)] = figwheel$client$heads_up_plugin_$_state_machine__18466__auto__);

(statearr_24507[(1)] = (1));

return statearr_24507;
});
var figwheel$client$heads_up_plugin_$_state_machine__18466__auto____1 = (function (state_24494){
while(true){
var ret_value__18467__auto__ = (function (){try{while(true){
var result__18468__auto__ = switch__18465__auto__.call(null,state_24494);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18468__auto__;
}
break;
}
}catch (e24508){if((e24508 instanceof Object)){
var ex__18469__auto__ = e24508;
var statearr_24509_24518 = state_24494;
(statearr_24509_24518[(5)] = ex__18469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24494);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24508;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24519 = state_24494;
state_24494 = G__24519;
continue;
} else {
return ret_value__18467__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__18466__auto__ = function(state_24494){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__18466__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__18466__auto____1.call(this,state_24494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__18466__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__18466__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__18466__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__18466__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__18466__auto__;
})()
;})(switch__18465__auto__,c__18530__auto___24511,ch))
})();
var state__18532__auto__ = (function (){var statearr_24510 = f__18531__auto__.call(null);
(statearr_24510[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18530__auto___24511);

return statearr_24510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18532__auto__);
});})(c__18530__auto___24511,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__18530__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18530__auto__){
return (function (){
var f__18531__auto__ = (function (){var switch__18465__auto__ = ((function (c__18530__auto__){
return (function (state_24540){
var state_val_24541 = (state_24540[(1)]);
if((state_val_24541 === (1))){
var inst_24535 = cljs.core.async.timeout.call(null,(3000));
var state_24540__$1 = state_24540;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24540__$1,(2),inst_24535);
} else {
if((state_val_24541 === (2))){
var inst_24537 = (state_24540[(2)]);
var inst_24538 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_24540__$1 = (function (){var statearr_24542 = state_24540;
(statearr_24542[(7)] = inst_24537);

return statearr_24542;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24540__$1,inst_24538);
} else {
return null;
}
}
});})(c__18530__auto__))
;
return ((function (switch__18465__auto__,c__18530__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__18466__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__18466__auto____0 = (function (){
var statearr_24546 = [null,null,null,null,null,null,null,null];
(statearr_24546[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__18466__auto__);

(statearr_24546[(1)] = (1));

return statearr_24546;
});
var figwheel$client$enforce_project_plugin_$_state_machine__18466__auto____1 = (function (state_24540){
while(true){
var ret_value__18467__auto__ = (function (){try{while(true){
var result__18468__auto__ = switch__18465__auto__.call(null,state_24540);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18468__auto__;
}
break;
}
}catch (e24547){if((e24547 instanceof Object)){
var ex__18469__auto__ = e24547;
var statearr_24548_24550 = state_24540;
(statearr_24548_24550[(5)] = ex__18469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24540);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24547;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24551 = state_24540;
state_24540 = G__24551;
continue;
} else {
return ret_value__18467__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__18466__auto__ = function(state_24540){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__18466__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__18466__auto____1.call(this,state_24540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__18466__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__18466__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__18466__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__18466__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__18466__auto__;
})()
;})(switch__18465__auto__,c__18530__auto__))
})();
var state__18532__auto__ = (function (){var statearr_24549 = f__18531__auto__.call(null);
(statearr_24549[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18530__auto__);

return statearr_24549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18532__auto__);
});})(c__18530__auto__))
);

return c__18530__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__24552){
var map__24559 = p__24552;
var map__24559__$1 = ((((!((map__24559 == null)))?((((map__24559.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24559.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24559):map__24559);
var ed = map__24559__$1;
var formatted_exception = cljs.core.get.call(null,map__24559__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__24559__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__24559__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__24561_24565 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__24562_24566 = null;
var count__24563_24567 = (0);
var i__24564_24568 = (0);
while(true){
if((i__24564_24568 < count__24563_24567)){
var msg_24569 = cljs.core._nth.call(null,chunk__24562_24566,i__24564_24568);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24569);

var G__24570 = seq__24561_24565;
var G__24571 = chunk__24562_24566;
var G__24572 = count__24563_24567;
var G__24573 = (i__24564_24568 + (1));
seq__24561_24565 = G__24570;
chunk__24562_24566 = G__24571;
count__24563_24567 = G__24572;
i__24564_24568 = G__24573;
continue;
} else {
var temp__4425__auto___24574 = cljs.core.seq.call(null,seq__24561_24565);
if(temp__4425__auto___24574){
var seq__24561_24575__$1 = temp__4425__auto___24574;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24561_24575__$1)){
var c__17250__auto___24576 = cljs.core.chunk_first.call(null,seq__24561_24575__$1);
var G__24577 = cljs.core.chunk_rest.call(null,seq__24561_24575__$1);
var G__24578 = c__17250__auto___24576;
var G__24579 = cljs.core.count.call(null,c__17250__auto___24576);
var G__24580 = (0);
seq__24561_24565 = G__24577;
chunk__24562_24566 = G__24578;
count__24563_24567 = G__24579;
i__24564_24568 = G__24580;
continue;
} else {
var msg_24581 = cljs.core.first.call(null,seq__24561_24575__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24581);

var G__24582 = cljs.core.next.call(null,seq__24561_24575__$1);
var G__24583 = null;
var G__24584 = (0);
var G__24585 = (0);
seq__24561_24565 = G__24582;
chunk__24562_24566 = G__24583;
count__24563_24567 = G__24584;
i__24564_24568 = G__24585;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__24586){
var map__24589 = p__24586;
var map__24589__$1 = ((((!((map__24589 == null)))?((((map__24589.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24589.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24589):map__24589);
var w = map__24589__$1;
var message = cljs.core.get.call(null,map__24589__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16435__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16435__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16435__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__24597 = cljs.core.seq.call(null,plugins);
var chunk__24598 = null;
var count__24599 = (0);
var i__24600 = (0);
while(true){
if((i__24600 < count__24599)){
var vec__24601 = cljs.core._nth.call(null,chunk__24598,i__24600);
var k = cljs.core.nth.call(null,vec__24601,(0),null);
var plugin = cljs.core.nth.call(null,vec__24601,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24603 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24597,chunk__24598,count__24599,i__24600,pl_24603,vec__24601,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_24603.call(null,msg_hist);
});})(seq__24597,chunk__24598,count__24599,i__24600,pl_24603,vec__24601,k,plugin))
);
} else {
}

var G__24604 = seq__24597;
var G__24605 = chunk__24598;
var G__24606 = count__24599;
var G__24607 = (i__24600 + (1));
seq__24597 = G__24604;
chunk__24598 = G__24605;
count__24599 = G__24606;
i__24600 = G__24607;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24597);
if(temp__4425__auto__){
var seq__24597__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24597__$1)){
var c__17250__auto__ = cljs.core.chunk_first.call(null,seq__24597__$1);
var G__24608 = cljs.core.chunk_rest.call(null,seq__24597__$1);
var G__24609 = c__17250__auto__;
var G__24610 = cljs.core.count.call(null,c__17250__auto__);
var G__24611 = (0);
seq__24597 = G__24608;
chunk__24598 = G__24609;
count__24599 = G__24610;
i__24600 = G__24611;
continue;
} else {
var vec__24602 = cljs.core.first.call(null,seq__24597__$1);
var k = cljs.core.nth.call(null,vec__24602,(0),null);
var plugin = cljs.core.nth.call(null,vec__24602,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24612 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24597,chunk__24598,count__24599,i__24600,pl_24612,vec__24602,k,plugin,seq__24597__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_24612.call(null,msg_hist);
});})(seq__24597,chunk__24598,count__24599,i__24600,pl_24612,vec__24602,k,plugin,seq__24597__$1,temp__4425__auto__))
);
} else {
}

var G__24613 = cljs.core.next.call(null,seq__24597__$1);
var G__24614 = null;
var G__24615 = (0);
var G__24616 = (0);
seq__24597 = G__24613;
chunk__24598 = G__24614;
count__24599 = G__24615;
i__24600 = G__24616;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args24617 = [];
var len__17505__auto___24620 = arguments.length;
var i__17506__auto___24621 = (0);
while(true){
if((i__17506__auto___24621 < len__17505__auto___24620)){
args24617.push((arguments[i__17506__auto___24621]));

var G__24622 = (i__17506__auto___24621 + (1));
i__17506__auto___24621 = G__24622;
continue;
} else {
}
break;
}

var G__24619 = args24617.length;
switch (G__24619) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24617.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17512__auto__ = [];
var len__17505__auto___24628 = arguments.length;
var i__17506__auto___24629 = (0);
while(true){
if((i__17506__auto___24629 < len__17505__auto___24628)){
args__17512__auto__.push((arguments[i__17506__auto___24629]));

var G__24630 = (i__17506__auto___24629 + (1));
i__17506__auto___24629 = G__24630;
continue;
} else {
}
break;
}

var argseq__17513__auto__ = ((((0) < args__17512__auto__.length))?(new cljs.core.IndexedSeq(args__17512__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17513__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__24625){
var map__24626 = p__24625;
var map__24626__$1 = ((((!((map__24626 == null)))?((((map__24626.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24626.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24626):map__24626);
var opts = map__24626__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq24624){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24624));
});

//# sourceMappingURL=client.js.map