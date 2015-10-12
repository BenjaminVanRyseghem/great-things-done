// Compiled by ClojureScript 1.7.122 {}
goog.provide('repl.core');
goog.require('cljs.core');
goog.require('cuerdas.core');
goog.require('gtd.state');
repl.core.remote = require("remote");
repl.core.net = repl.core.remote.require("net");
repl.core.repl = repl.core.remote.require("repl");
repl.core.fill_string = (function repl$core$fill_string(var_args){
var args__17512__auto__ = [];
var len__17505__auto___22974 = arguments.length;
var i__17506__auto___22975 = (0);
while(true){
if((i__17506__auto___22975 < len__17505__auto___22974)){
args__17512__auto__.push((arguments[i__17506__auto___22975]));

var G__22976 = (i__17506__auto___22975 + (1));
i__17506__auto___22975 = G__22976;
continue;
} else {
}
break;
}

var argseq__17513__auto__ = ((((1) < args__17512__auto__.length))?(new cljs.core.IndexedSeq(args__17512__auto__.slice((1)),(0))):null);
return repl.core.fill_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17513__auto__);
});

repl.core.fill_string.cljs$core$IFn$_invoke$arity$variadic = (function (length,p__22971){
var map__22972 = p__22971;
var map__22972__$1 = ((((!((map__22972 == null)))?((((map__22972.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22972.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22972):map__22972);
var base = cljs.core.get.call(null,map__22972__$1,new cljs.core.Keyword(null,"base","base",185279322));
if(cljs.core.pos_QMARK_){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"pos?","pos?",-244377722,null)))].join('')));
}

if(cljs.core.truth_(length)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"length","length",-2065447907,null)))].join('')));
}

var string = cljs.core.atom.call(null,base);
while(true){
if((cljs.core.count.call(null,cljs.core.deref.call(null,string)) < length)){
cljs.core.swap_BANG_.call(null,string,cljs.core.str," ");

continue;
} else {
}
break;
}

return cljs.core.deref.call(null,string);
});

repl.core.fill_string.cljs$lang$maxFixedArity = (1);

repl.core.fill_string.cljs$lang$applyTo = (function (seq22969){
var G__22970 = cljs.core.first.call(null,seq22969);
var seq22969__$1 = cljs.core.next.call(null,seq22969);
return repl.core.fill_string.cljs$core$IFn$_invoke$arity$variadic(G__22970,seq22969__$1);
});
repl.core.format_projects = (function repl$core$format_projects(projects){
var max_id = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,(function (p1__22977_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__22977_SHARP_));
}),projects));
console.log(max_id);

return cljs.core.map.call(null,((function (max_id){
return (function (project){
return [cljs.core.str(repl.core.fill_string.call(null,max_id,new cljs.core.Keyword(null,"base","base",185279322),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(project))),cljs.core.str(":"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(project))].join('');
});})(max_id))
,projects);
});
repl.core.split_cmd = (function repl$core$split_cmd(string){
return cuerdas.core.split.call(null,cuerdas.core.trim.call(null,[cljs.core.str(string)].join(''))," ");
});
if(typeof repl.core.eval_repl !== 'undefined'){
} else {
repl.core.eval_repl = (function (){var method_table__17360__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17361__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17362__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17363__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17364__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"repl.core","eval-repl"),cljs.core.first,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17364__auto__,method_table__17360__auto__,prefer_table__17361__auto__,method_cache__17362__auto__,cached_hierarchy__17363__auto__));
})();
}
cljs.core._add_method.call(null,repl.core.eval_repl,"list",(function (args){
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,args))){
return cuerdas.core.unlines.call(null,repl.core.format_projects.call(null,cljs.core.vals.call(null,gtd.state.all_projects.call(null))));
} else {
return "list";
}
}));
cljs.core._add_method.call(null,repl.core.eval_repl,"help",(function (args){
return "HELP ME!!";
}));
cljs.core._add_method.call(null,repl.core.eval_repl,new cljs.core.Keyword(null,"default","default",-1987822328),(function (args){
return [cljs.core.str("The action \""),cljs.core.str(cljs.core.first.call(null,args)),cljs.core.str("\" is unknown. Please type \"help\" for the list of supported commands")].join('');
}));
repl.core.custom_eval = (function repl$core$custom_eval(cmd,context,filename,callback){
var result = repl.core.eval_repl.call(null,repl.core.split_cmd.call(null,cmd));
callback.call(null,null,result);

return null;
});
repl.core.create_server = (function repl$core$create_server(prompt){
return repl.core.net.createServer((function (socket){
var new_repl = repl.core.repl.start(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"prompt","prompt",-78109487),prompt,new cljs.core.Keyword(null,"input","input",556931961),socket,new cljs.core.Keyword(null,"output","output",-1105869043),socket,new cljs.core.Keyword(null,"eval","eval",-1103567905),repl.core.custom_eval], null)));
return new_repl.on("exit",((function (new_repl){
return (function (){
return socket.end();
});})(new_repl))
);
}));
});
repl.core.init_tcp_repl = (function repl$core$init_tcp_repl(var_args){
var args__17512__auto__ = [];
var len__17505__auto___22983 = arguments.length;
var i__17506__auto___22984 = (0);
while(true){
if((i__17506__auto___22984 < len__17505__auto___22983)){
args__17512__auto__.push((arguments[i__17506__auto___22984]));

var G__22985 = (i__17506__auto___22984 + (1));
i__17506__auto___22984 = G__22985;
continue;
} else {
}
break;
}

var argseq__17513__auto__ = ((((1) < args__17512__auto__.length))?(new cljs.core.IndexedSeq(args__17512__auto__.slice((1)),(0))):null);
return repl.core.init_tcp_repl.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17513__auto__);
});

repl.core.init_tcp_repl.cljs$core$IFn$_invoke$arity$variadic = (function (prompt,p__22980){
var map__22981 = p__22980;
var map__22981__$1 = ((((!((map__22981 == null)))?((((map__22981.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22981.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22981):map__22981);
var port = cljs.core.get.call(null,map__22981__$1,new cljs.core.Keyword(null,"port","port",1534937262),(5001));
var addr = cljs.core.get.call(null,map__22981__$1,new cljs.core.Keyword(null,"addr","addr",-1597650737),"localhost");
var server = repl.core.create_server.call(null,prompt);
return server.listen(port,addr);
});

repl.core.init_tcp_repl.cljs$lang$maxFixedArity = (1);

repl.core.init_tcp_repl.cljs$lang$applyTo = (function (seq22978){
var G__22979 = cljs.core.first.call(null,seq22978);
var seq22978__$1 = cljs.core.next.call(null,seq22978);
return repl.core.init_tcp_repl.cljs$core$IFn$_invoke$arity$variadic(G__22979,seq22978__$1);
});
repl.core.init_file_repl = (function repl$core$init_file_repl(var_args){
var args__17512__auto__ = [];
var len__17505__auto___22991 = arguments.length;
var i__17506__auto___22992 = (0);
while(true){
if((i__17506__auto___22992 < len__17505__auto___22991)){
args__17512__auto__.push((arguments[i__17506__auto___22992]));

var G__22993 = (i__17506__auto___22992 + (1));
i__17506__auto___22992 = G__22993;
continue;
} else {
}
break;
}

var argseq__17513__auto__ = ((((1) < args__17512__auto__.length))?(new cljs.core.IndexedSeq(args__17512__auto__.slice((1)),(0))):null);
return repl.core.init_file_repl.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17513__auto__);
});

repl.core.init_file_repl.cljs$core$IFn$_invoke$arity$variadic = (function (prompt,p__22988){
var map__22989 = p__22988;
var map__22989__$1 = ((((!((map__22989 == null)))?((((map__22989.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22989.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22989):map__22989);
var port = cljs.core.get.call(null,map__22989__$1,new cljs.core.Keyword(null,"port","port",1534937262),"/tmp/gtd-repl-sock");
var server = repl.core.create_server.call(null,prompt);
return server.listen(port);
});

repl.core.init_file_repl.cljs$lang$maxFixedArity = (1);

repl.core.init_file_repl.cljs$lang$applyTo = (function (seq22986){
var G__22987 = cljs.core.first.call(null,seq22986);
var seq22986__$1 = cljs.core.next.call(null,seq22986);
return repl.core.init_file_repl.cljs$core$IFn$_invoke$arity$variadic(G__22987,seq22986__$1);
});
repl.core.init_tcp_cli = (function repl$core$init_tcp_cli(var_args){
var args__17512__auto__ = [];
var len__17505__auto___22998 = arguments.length;
var i__17506__auto___22999 = (0);
while(true){
if((i__17506__auto___22999 < len__17505__auto___22998)){
args__17512__auto__.push((arguments[i__17506__auto___22999]));

var G__23000 = (i__17506__auto___22999 + (1));
i__17506__auto___22999 = G__23000;
continue;
} else {
}
break;
}

var argseq__17513__auto__ = ((((0) < args__17512__auto__.length))?(new cljs.core.IndexedSeq(args__17512__auto__.slice((0)),(0))):null);
return repl.core.init_tcp_cli.cljs$core$IFn$_invoke$arity$variadic(argseq__17513__auto__);
});

repl.core.init_tcp_cli.cljs$core$IFn$_invoke$arity$variadic = (function (p__22995){
var map__22996 = p__22995;
var map__22996__$1 = ((((!((map__22996 == null)))?((((map__22996.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22996.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22996):map__22996);
var port = cljs.core.get.call(null,map__22996__$1,new cljs.core.Keyword(null,"port","port",1534937262),(5002));
var addr = cljs.core.get.call(null,map__22996__$1,new cljs.core.Keyword(null,"addr","addr",-1597650737),"localhost");
var server = repl.core.net.createServer(((function (map__22996,map__22996__$1,port,addr){
return (function (socket){
return socket.on("data",((function (map__22996,map__22996__$1,port,addr){
return (function (cmd){
socket.write(repl.core.eval_repl.call(null,repl.core.split_cmd.call(null,cmd)));

return socket.end();
});})(map__22996,map__22996__$1,port,addr))
);
});})(map__22996,map__22996__$1,port,addr))
);
return server.listen(port,addr);
});

repl.core.init_tcp_cli.cljs$lang$maxFixedArity = (0);

repl.core.init_tcp_cli.cljs$lang$applyTo = (function (seq22994){
return repl.core.init_tcp_cli.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22994));
});

//# sourceMappingURL=core.js.map