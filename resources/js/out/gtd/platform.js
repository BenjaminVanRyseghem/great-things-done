// Compiled by ClojureScript 1.7.122 {}
goog.provide('gtd.platform');
goog.require('cljs.core');
goog.require('node.fs');
gtd.platform.platform_translation = new cljs.core.PersistentArrayMap(null, 5, ["darwin","Mac OS X","win32","Windows","freebsd","BSD","linux","Linux","sunos","SunOS"], null);
/**
 * Execute code depending on the current OS
 */
gtd.platform.for_os = (function gtd$platform$for_os(var_args){
var args__17512__auto__ = [];
var len__17505__auto___22619 = arguments.length;
var i__17506__auto___22620 = (0);
while(true){
if((i__17506__auto___22620 < len__17505__auto___22619)){
args__17512__auto__.push((arguments[i__17506__auto___22620]));

var G__22621 = (i__17506__auto___22620 + (1));
i__17506__auto___22620 = G__22621;
continue;
} else {
}
break;
}

var argseq__17513__auto__ = ((((0) < args__17512__auto__.length))?(new cljs.core.IndexedSeq(args__17512__auto__.slice((0)),(0))):null);
return gtd.platform.for_os.cljs$core$IFn$_invoke$arity$variadic(argseq__17513__auto__);
});

gtd.platform.for_os.cljs$core$IFn$_invoke$arity$variadic = (function (body){
var os_map = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__22617_SHARP_){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,p1__22617_SHARP_);
}),cljs.core.partition.call(null,(2),body))));
var os_keys = cljs.core.keys.call(null,os_map);
var os = cljs.core.get.call(null,gtd.platform.platform_translation,process.platform);
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,body))){
if(cljs.core.contains_QMARK_.call(null,os_map,os)){
return cljs.core.get.call(null,os_map,os);
} else {
return cljs.core.get.call(null,os_map,new cljs.core.Keyword(null,"default","default",-1987822328));
}
} else {
throw (new Error("Wrong number of args. `for-os` should have an even number of arguments"));
}
});

gtd.platform.for_os.cljs$lang$maxFixedArity = (0);

gtd.platform.for_os.cljs$lang$applyTo = (function (seq22618){
return gtd.platform.for_os.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22618));
});
gtd.platform.separator = gtd.platform.for_os.call(null,"Windows","\\",new cljs.core.Keyword(null,"default","default",-1987822328),"/");
/**
 * Creates a path starting from current user home
 */
gtd.platform.home = (function gtd$platform$home(var_args){
var args__17512__auto__ = [];
var len__17505__auto___22623 = arguments.length;
var i__17506__auto___22624 = (0);
while(true){
if((i__17506__auto___22624 < len__17505__auto___22623)){
args__17512__auto__.push((arguments[i__17506__auto___22624]));

var G__22625 = (i__17506__auto___22624 + (1));
i__17506__auto___22624 = G__22625;
continue;
} else {
}
break;
}

var argseq__17513__auto__ = ((((0) < args__17512__auto__.length))?(new cljs.core.IndexedSeq(args__17512__auto__.slice((0)),(0))):null);
return gtd.platform.home.cljs$core$IFn$_invoke$arity$variadic(argseq__17513__auto__);
});

gtd.platform.home.cljs$core$IFn$_invoke$arity$variadic = (function (body){
var home_env = gtd.platform.for_os.call(null,"windows","USERPROFILE",new cljs.core.Keyword(null,"default","default",-1987822328),"HOME");
var home_path = (process.env[home_env]);
var args = cljs.core.conj.call(null,body,gtd.platform.separator,home_path);
return cljs.core.apply.call(null,cljs.core.str,args);
});

gtd.platform.home.cljs$lang$maxFixedArity = (0);

gtd.platform.home.cljs$lang$applyTo = (function (seq22622){
return gtd.platform.home.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22622));
});
/**
 * Return the database path according to the operating system
 */
gtd.platform.database_path = (function gtd$platform$database_path(){
return gtd.platform.for_os.call(null,"Mac OS X",gtd.platform.home.call(null,"Library/Application Support/Great Things Done"),new cljs.core.Keyword(null,"default","default",-1987822328),gtd.platform.home.call(null,".great-things-done"));
});
/**
 * Return the database path for the meta projects
 */
gtd.platform.database_meta_projects_path = (function gtd$platform$database_meta_projects_path(){
return [cljs.core.str(gtd.platform.database_path.call(null)),cljs.core.str([cljs.core.str(gtd.platform.separator),cljs.core.str("meta-projects")].join(''))].join('');
});
/**
 * Return the database path for the projects
 */
gtd.platform.database_projects_path = (function gtd$platform$database_projects_path(){
return [cljs.core.str(gtd.platform.database_path.call(null)),cljs.core.str([cljs.core.str(gtd.platform.separator),cljs.core.str("projects")].join(''))].join('');
});
/**
 * Return the OS Specific path to config files
 */
gtd.platform.config_path = (function gtd$platform$config_path(){
return gtd.platform.for_os.call(null,"Mac OS X",gtd.platform.home.call(null,"Library/Application Support/Great Things Done"),new cljs.core.Keyword(null,"default","default",-1987822328),gtd.platform.home.call(null,".config/great-things-done"));
});
/**
 * Ensure that `database-path` exists on disk
 */
gtd.platform.ensure_database_path_BANG_ = (function gtd$platform$ensure_database_path_BANG_(){
return node.fs.ensure_dir_BANG_.call(null,gtd.platform.database_path.call(null));
});
/**
 * Ensure that `database-meta-projects-path` exists on disk
 */
gtd.platform.ensure_database_meta_projects_path_BANG_ = (function gtd$platform$ensure_database_meta_projects_path_BANG_(){
return node.fs.ensure_dir_BANG_.call(null,gtd.platform.database_meta_projects_path.call(null));
});
/**
 * Ensure that `database-projects-path` exists on disk
 */
gtd.platform.ensure_database_projects_path_BANG_ = (function gtd$platform$ensure_database_projects_path_BANG_(){
return node.fs.ensure_dir_BANG_.call(null,gtd.platform.database_projects_path.call(null));
});
/**
 * Ensure that the config file exists
 */
gtd.platform.ensure_config_file_BANG_ = (function gtd$platform$ensure_config_file_BANG_(){
return node.fs.ensure_dir_BANG_.call(null,gtd.platform.config_path.call(null));
});
/**
 * Ensure that the inbox folder exists
 */
gtd.platform.ensure_inbox_BANG_ = (function gtd$platform$ensure_inbox_BANG_(){
return node.fs.ensure_dir_BANG_.call(null,[cljs.core.str(gtd.platform.database_projects_path.call(null)),cljs.core.str(gtd.platform.separator),cljs.core.str("Inbox")].join(''));
});
gtd.platform.logged_user = (function gtd$platform$logged_user(){
return (process.env["USER"]);
});

//# sourceMappingURL=platform.js.map