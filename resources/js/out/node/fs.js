// Compiled by ClojureScript 1.7.122 {}
goog.provide('node.fs');
goog.require('cljs.core');
node.fs.fs = require("fs");
/**
 * Test whether or not the given path exists by checking the file system. If `callback` is provided, the execution is asynchronous and `callback` is invoked with either true or false.
 */
node.fs.path_exists_QMARK_ = (function node$fs$path_exists_QMARK_(var_args){
var args__17512__auto__ = [];
var len__17505__auto___22547 = arguments.length;
var i__17506__auto___22548 = (0);
while(true){
if((i__17506__auto___22548 < len__17505__auto___22547)){
args__17512__auto__.push((arguments[i__17506__auto___22548]));

var G__22549 = (i__17506__auto___22548 + (1));
i__17506__auto___22548 = G__22549;
continue;
} else {
}
break;
}

var argseq__17513__auto__ = ((((1) < args__17512__auto__.length))?(new cljs.core.IndexedSeq(args__17512__auto__.slice((1)),(0))):null);
return node.fs.path_exists_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17513__auto__);
});

node.fs.path_exists_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (path,p__22545){
var vec__22546 = p__22545;
var callback = cljs.core.nth.call(null,vec__22546,(0),null);
if(cljs.core.truth_(callback)){
return node.fs.fs.exists(path,callback);
} else {
return node.fs.fs.existsSync(cljs.core.clj__GT_js.call(null,path));
}
});

node.fs.path_exists_QMARK_.cljs$lang$maxFixedArity = (1);

node.fs.path_exists_QMARK_.cljs$lang$applyTo = (function (seq22543){
var G__22544 = cljs.core.first.call(null,seq22543);
var seq22543__$1 = cljs.core.next.call(null,seq22543);
return node.fs.path_exists_QMARK_.cljs$core$IFn$_invoke$arity$variadic(G__22544,seq22543__$1);
});
/**
 * mkdir(2). `mode` defaults to `0777`. If `callback` is provided, the execution is asynchronous and `callback` is invoked with no arguments other than a possible exception.
 */
node.fs.mkdir_BANG_ = (function node$fs$mkdir_BANG_(var_args){
var args__17512__auto__ = [];
var len__17505__auto___22554 = arguments.length;
var i__17506__auto___22555 = (0);
while(true){
if((i__17506__auto___22555 < len__17505__auto___22554)){
args__17512__auto__.push((arguments[i__17506__auto___22555]));

var G__22556 = (i__17506__auto___22555 + (1));
i__17506__auto___22555 = G__22556;
continue;
} else {
}
break;
}

var argseq__17513__auto__ = ((((1) < args__17512__auto__.length))?(new cljs.core.IndexedSeq(args__17512__auto__.slice((1)),(0))):null);
return node.fs.mkdir_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17513__auto__);
});

node.fs.mkdir_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (path,p__22552){
var vec__22553 = p__22552;
var mode = cljs.core.nth.call(null,vec__22553,(0),null);
var callback = cljs.core.nth.call(null,vec__22553,(1),null);
if(cljs.core.truth_(callback)){
return node.fs.fs.mkdir(path,mode,callback);
} else {
return node.fs.fs.mkdirSync(path,mode);
}
});

node.fs.mkdir_BANG_.cljs$lang$maxFixedArity = (1);

node.fs.mkdir_BANG_.cljs$lang$applyTo = (function (seq22550){
var G__22551 = cljs.core.first.call(null,seq22550);
var seq22550__$1 = cljs.core.next.call(null,seq22550);
return node.fs.mkdir_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22551,seq22550__$1);
});
/**
 * Write data to a file, replacing the file if it already exists. data can be a string or a buffer.
 * 
 * The encoding option is ignored if data is a buffer. It defaults to 'utf8'.
 * 
 *   - `filename` String
 *   - `data` String | Buffer
 *   - `options` Object
 *  - `encoding` String | Null default = 'utf8'
 *  - `mode` Number default = 438 (aka 0666 in Octal)
 *   - `flag` String default = 'w'
 *   - `callback` Function
 */
node.fs.write_file_BANG_ = (function node$fs$write_file_BANG_(var_args){
var args__17512__auto__ = [];
var len__17505__auto___22562 = arguments.length;
var i__17506__auto___22563 = (0);
while(true){
if((i__17506__auto___22563 < len__17505__auto___22562)){
args__17512__auto__.push((arguments[i__17506__auto___22563]));

var G__22564 = (i__17506__auto___22563 + (1));
i__17506__auto___22563 = G__22564;
continue;
} else {
}
break;
}

var argseq__17513__auto__ = ((((2) < args__17512__auto__.length))?(new cljs.core.IndexedSeq(args__17512__auto__.slice((2)),(0))):null);
return node.fs.write_file_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17513__auto__);
});

node.fs.write_file_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (filename,data,p__22560){
var vec__22561 = p__22560;
var options = cljs.core.nth.call(null,vec__22561,(0),null);
var callback = cljs.core.nth.call(null,vec__22561,(1),null);
if(cljs.core.truth_(callback)){
return node.fs.fs.writeFile(filename,data,options,callback);
} else {
return node.fs.fs.writeFileSync(filename,data,options);
}
});

node.fs.write_file_BANG_.cljs$lang$maxFixedArity = (2);

node.fs.write_file_BANG_.cljs$lang$applyTo = (function (seq22557){
var G__22558 = cljs.core.first.call(null,seq22557);
var seq22557__$1 = cljs.core.next.call(null,seq22557);
var G__22559 = cljs.core.first.call(null,seq22557__$1);
var seq22557__$2 = cljs.core.next.call(null,seq22557__$1);
return node.fs.write_file_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22558,G__22559,seq22557__$2);
});
/**
 * Synchronous rename(2). If `callback` is provided the execution is asynchronous.
 */
node.fs.rename_BANG_ = (function node$fs$rename_BANG_(var_args){
var args__17512__auto__ = [];
var len__17505__auto___22570 = arguments.length;
var i__17506__auto___22571 = (0);
while(true){
if((i__17506__auto___22571 < len__17505__auto___22570)){
args__17512__auto__.push((arguments[i__17506__auto___22571]));

var G__22572 = (i__17506__auto___22571 + (1));
i__17506__auto___22571 = G__22572;
continue;
} else {
}
break;
}

var argseq__17513__auto__ = ((((2) < args__17512__auto__.length))?(new cljs.core.IndexedSeq(args__17512__auto__.slice((2)),(0))):null);
return node.fs.rename_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17513__auto__);
});

node.fs.rename_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (old_path,new_path,p__22568){
var vec__22569 = p__22568;
var callback = cljs.core.nth.call(null,vec__22569,(0),null);
if(cljs.core.truth_(callback)){
return node.fs.fs.rename(old_path,new_path,callback);
} else {
return node.fs.fs.renameSync(old_path,new_path);
}
});

node.fs.rename_BANG_.cljs$lang$maxFixedArity = (2);

node.fs.rename_BANG_.cljs$lang$applyTo = (function (seq22565){
var G__22566 = cljs.core.first.call(null,seq22565);
var seq22565__$1 = cljs.core.next.call(null,seq22565);
var G__22567 = cljs.core.first.call(null,seq22565__$1);
var seq22565__$2 = cljs.core.next.call(null,seq22565__$1);
return node.fs.rename_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22566,G__22567,seq22565__$2);
});
/**
 * Synchronous unlink(2). If `callback` is provided the execution is asynchronous.
 */
node.fs.unlink_BANG_ = (function node$fs$unlink_BANG_(var_args){
var args__17512__auto__ = [];
var len__17505__auto___22577 = arguments.length;
var i__17506__auto___22578 = (0);
while(true){
if((i__17506__auto___22578 < len__17505__auto___22577)){
args__17512__auto__.push((arguments[i__17506__auto___22578]));

var G__22579 = (i__17506__auto___22578 + (1));
i__17506__auto___22578 = G__22579;
continue;
} else {
}
break;
}

var argseq__17513__auto__ = ((((1) < args__17512__auto__.length))?(new cljs.core.IndexedSeq(args__17512__auto__.slice((1)),(0))):null);
return node.fs.unlink_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17513__auto__);
});

node.fs.unlink_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (path,p__22575){
var vec__22576 = p__22575;
var callback = cljs.core.nth.call(null,vec__22576,(0),null);
if(cljs.core.truth_(callback)){
return node.fs.fs.unlink(path,callback);
} else {
return node.fs.fs.unlinkSync(path);
}
});

node.fs.unlink_BANG_.cljs$lang$maxFixedArity = (1);

node.fs.unlink_BANG_.cljs$lang$applyTo = (function (seq22573){
var G__22574 = cljs.core.first.call(null,seq22573);
var seq22573__$1 = cljs.core.next.call(null,seq22573);
return node.fs.unlink_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22574,seq22573__$1);
});
/**
 * Synchronous readdir(3). Returns an array of filenames excluding '.' and '..'. If `callback` is provided the execution is asynchronous.
 */
node.fs.read_dir = (function node$fs$read_dir(var_args){
var args__17512__auto__ = [];
var len__17505__auto___22584 = arguments.length;
var i__17506__auto___22585 = (0);
while(true){
if((i__17506__auto___22585 < len__17505__auto___22584)){
args__17512__auto__.push((arguments[i__17506__auto___22585]));

var G__22586 = (i__17506__auto___22585 + (1));
i__17506__auto___22585 = G__22586;
continue;
} else {
}
break;
}

var argseq__17513__auto__ = ((((1) < args__17512__auto__.length))?(new cljs.core.IndexedSeq(args__17512__auto__.slice((1)),(0))):null);
return node.fs.read_dir.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17513__auto__);
});

node.fs.read_dir.cljs$core$IFn$_invoke$arity$variadic = (function (path,p__22582){
var vec__22583 = p__22582;
var callback = cljs.core.nth.call(null,vec__22583,(0),null);
if(cljs.core.truth_(callback)){
return node.fs.fs.readdir(path,callback);
} else {
return node.fs.fs.readdirSync(path);
}
});

node.fs.read_dir.cljs$lang$maxFixedArity = (1);

node.fs.read_dir.cljs$lang$applyTo = (function (seq22580){
var G__22581 = cljs.core.first.call(null,seq22580);
var seq22580__$1 = cljs.core.next.call(null,seq22580);
return node.fs.read_dir.cljs$core$IFn$_invoke$arity$variadic(G__22581,seq22580__$1);
});
/**
 * Synchronously reads the entire contents of a file. If `callback` is provided the execution is asynchronous.
 */
node.fs.read_file = (function node$fs$read_file(var_args){
var args__17512__auto__ = [];
var len__17505__auto___22591 = arguments.length;
var i__17506__auto___22592 = (0);
while(true){
if((i__17506__auto___22592 < len__17505__auto___22591)){
args__17512__auto__.push((arguments[i__17506__auto___22592]));

var G__22593 = (i__17506__auto___22592 + (1));
i__17506__auto___22592 = G__22593;
continue;
} else {
}
break;
}

var argseq__17513__auto__ = ((((1) < args__17512__auto__.length))?(new cljs.core.IndexedSeq(args__17512__auto__.slice((1)),(0))):null);
return node.fs.read_file.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17513__auto__);
});

node.fs.read_file.cljs$core$IFn$_invoke$arity$variadic = (function (path,p__22589){
var vec__22590 = p__22589;
var options = cljs.core.nth.call(null,vec__22590,(0),null);
var callback = cljs.core.nth.call(null,vec__22590,(1),null);
if(cljs.core.truth_(callback)){
return node.fs.fs.readFile(path,options,callback);
} else {
return node.fs.fs.readFileSync(path,options);
}
});

node.fs.read_file.cljs$lang$maxFixedArity = (1);

node.fs.read_file.cljs$lang$applyTo = (function (seq22587){
var G__22588 = cljs.core.first.call(null,seq22587);
var seq22587__$1 = cljs.core.next.call(null,seq22587);
return node.fs.read_file.cljs$core$IFn$_invoke$arity$variadic(G__22588,seq22587__$1);
});
/**
 * Synchronous rmdir(2). If `callback` is provided the execution is asynchronous.
 */
node.fs.rm_dir_BANG_ = (function node$fs$rm_dir_BANG_(var_args){
var args__17512__auto__ = [];
var len__17505__auto___22598 = arguments.length;
var i__17506__auto___22599 = (0);
while(true){
if((i__17506__auto___22599 < len__17505__auto___22598)){
args__17512__auto__.push((arguments[i__17506__auto___22599]));

var G__22600 = (i__17506__auto___22599 + (1));
i__17506__auto___22599 = G__22600;
continue;
} else {
}
break;
}

var argseq__17513__auto__ = ((((1) < args__17512__auto__.length))?(new cljs.core.IndexedSeq(args__17512__auto__.slice((1)),(0))):null);
return node.fs.rm_dir_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17513__auto__);
});

node.fs.rm_dir_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (path,p__22596){
var vec__22597 = p__22596;
var callback = cljs.core.nth.call(null,vec__22597,(0),null);
if(cljs.core.truth_(callback)){
return node.fs.fs.rmdir(path,callback);
} else {
return node.fs.fs.rmdirSync(path);
}
});

node.fs.rm_dir_BANG_.cljs$lang$maxFixedArity = (1);

node.fs.rm_dir_BANG_.cljs$lang$applyTo = (function (seq22594){
var G__22595 = cljs.core.first.call(null,seq22594);
var seq22594__$1 = cljs.core.next.call(null,seq22594);
return node.fs.rm_dir_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22595,seq22594__$1);
});
/**
 * Ensure tha provided `path` exists on disk. If `callback` is provided, the execution is asynchronous.
 */
node.fs.ensure_dir_BANG_ = (function node$fs$ensure_dir_BANG_(var_args){
var args__17512__auto__ = [];
var len__17505__auto___22606 = arguments.length;
var i__17506__auto___22607 = (0);
while(true){
if((i__17506__auto___22607 < len__17505__auto___22606)){
args__17512__auto__.push((arguments[i__17506__auto___22607]));

var G__22608 = (i__17506__auto___22607 + (1));
i__17506__auto___22607 = G__22608;
continue;
} else {
}
break;
}

var argseq__17513__auto__ = ((((1) < args__17512__auto__.length))?(new cljs.core.IndexedSeq(args__17512__auto__.slice((1)),(0))):null);
return node.fs.ensure_dir_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17513__auto__);
});

node.fs.ensure_dir_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (path,p__22604){
var vec__22605 = p__22604;
var callback = cljs.core.nth.call(null,vec__22605,(0),null);
if(cljs.core.truth_(callback)){
return node.fs.path_exists_QMARK_.call(null,path,((function (vec__22605,callback){
return (function (p1__22601_SHARP_){
if(cljs.core.truth_(p1__22601_SHARP_)){
return null;
} else {
return node.fs.mkdir_BANG_.call(null,path,null,callback);
}
});})(vec__22605,callback))
);
} else {
if(cljs.core.truth_(node.fs.path_exists_QMARK_.call(null,path))){
return null;
} else {
return node.fs.mkdir_BANG_.call(null,path);
}
}
});

node.fs.ensure_dir_BANG_.cljs$lang$maxFixedArity = (1);

node.fs.ensure_dir_BANG_.cljs$lang$applyTo = (function (seq22602){
var G__22603 = cljs.core.first.call(null,seq22602);
var seq22602__$1 = cljs.core.next.call(null,seq22602);
return node.fs.ensure_dir_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22603,seq22602__$1);
});

//# sourceMappingURL=fs.js.map