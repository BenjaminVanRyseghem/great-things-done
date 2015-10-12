// Compiled by ClojureScript 1.7.122 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async26081 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26081 = (function (fn_handler,f,meta26082){
this.fn_handler = fn_handler;
this.f = f;
this.meta26082 = meta26082;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26081.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26083,meta26082__$1){
var self__ = this;
var _26083__$1 = this;
return (new cljs.core.async.t_cljs$core$async26081(self__.fn_handler,self__.f,meta26082__$1));
});

cljs.core.async.t_cljs$core$async26081.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26083){
var self__ = this;
var _26083__$1 = this;
return self__.meta26082;
});

cljs.core.async.t_cljs$core$async26081.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26081.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26081.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async26081.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta26082","meta26082",-453824832,null)], null);
});

cljs.core.async.t_cljs$core$async26081.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26081.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26081";

cljs.core.async.t_cljs$core$async26081.cljs$lang$ctorPrWriter = (function (this__17045__auto__,writer__17046__auto__,opt__17047__auto__){
return cljs.core._write.call(null,writer__17046__auto__,"cljs.core.async/t_cljs$core$async26081");
});

cljs.core.async.__GT_t_cljs$core$async26081 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async26081(fn_handler__$1,f__$1,meta26082){
return (new cljs.core.async.t_cljs$core$async26081(fn_handler__$1,f__$1,meta26082));
});

}

return (new cljs.core.async.t_cljs$core$async26081(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args26086 = [];
var len__17505__auto___26089 = arguments.length;
var i__17506__auto___26090 = (0);
while(true){
if((i__17506__auto___26090 < len__17505__auto___26089)){
args26086.push((arguments[i__17506__auto___26090]));

var G__26091 = (i__17506__auto___26090 + (1));
i__17506__auto___26090 = G__26091;
continue;
} else {
}
break;
}

var G__26088 = args26086.length;
switch (G__26088) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26086.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args26093 = [];
var len__17505__auto___26096 = arguments.length;
var i__17506__auto___26097 = (0);
while(true){
if((i__17506__auto___26097 < len__17505__auto___26096)){
args26093.push((arguments[i__17506__auto___26097]));

var G__26098 = (i__17506__auto___26097 + (1));
i__17506__auto___26097 = G__26098;
continue;
} else {
}
break;
}

var G__26095 = args26093.length;
switch (G__26095) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26093.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_26100 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26100);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_26100,ret){
return (function (){
return fn1.call(null,val_26100);
});})(val_26100,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args26101 = [];
var len__17505__auto___26104 = arguments.length;
var i__17506__auto___26105 = (0);
while(true){
if((i__17506__auto___26105 < len__17505__auto___26104)){
args26101.push((arguments[i__17506__auto___26105]));

var G__26106 = (i__17506__auto___26105 + (1));
i__17506__auto___26105 = G__26106;
continue;
} else {
}
break;
}

var G__26103 = args26101.length;
switch (G__26103) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26101.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17350__auto___26108 = n;
var x_26109 = (0);
while(true){
if((x_26109 < n__17350__auto___26108)){
(a[x_26109] = (0));

var G__26110 = (x_26109 + (1));
x_26109 = G__26110;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__26111 = (i + (1));
i = G__26111;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async26115 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26115 = (function (alt_flag,flag,meta26116){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta26116 = meta26116;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26115.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_26117,meta26116__$1){
var self__ = this;
var _26117__$1 = this;
return (new cljs.core.async.t_cljs$core$async26115(self__.alt_flag,self__.flag,meta26116__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async26115.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_26117){
var self__ = this;
var _26117__$1 = this;
return self__.meta26116;
});})(flag))
;

cljs.core.async.t_cljs$core$async26115.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26115.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async26115.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26115.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta26116","meta26116",368313953,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async26115.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26115.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26115";

cljs.core.async.t_cljs$core$async26115.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17045__auto__,writer__17046__auto__,opt__17047__auto__){
return cljs.core._write.call(null,writer__17046__auto__,"cljs.core.async/t_cljs$core$async26115");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async26115 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async26115(alt_flag__$1,flag__$1,meta26116){
return (new cljs.core.async.t_cljs$core$async26115(alt_flag__$1,flag__$1,meta26116));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async26115(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async26121 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26121 = (function (alt_handler,flag,cb,meta26122){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta26122 = meta26122;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26121.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26123,meta26122__$1){
var self__ = this;
var _26123__$1 = this;
return (new cljs.core.async.t_cljs$core$async26121(self__.alt_handler,self__.flag,self__.cb,meta26122__$1));
});

cljs.core.async.t_cljs$core$async26121.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26123){
var self__ = this;
var _26123__$1 = this;
return self__.meta26122;
});

cljs.core.async.t_cljs$core$async26121.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26121.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async26121.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async26121.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta26122","meta26122",734275019,null)], null);
});

cljs.core.async.t_cljs$core$async26121.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26121.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26121";

cljs.core.async.t_cljs$core$async26121.cljs$lang$ctorPrWriter = (function (this__17045__auto__,writer__17046__auto__,opt__17047__auto__){
return cljs.core._write.call(null,writer__17046__auto__,"cljs.core.async/t_cljs$core$async26121");
});

cljs.core.async.__GT_t_cljs$core$async26121 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async26121(alt_handler__$1,flag__$1,cb__$1,meta26122){
return (new cljs.core.async.t_cljs$core$async26121(alt_handler__$1,flag__$1,cb__$1,meta26122));
});

}

return (new cljs.core.async.t_cljs$core$async26121(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26124_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26124_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26125_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26125_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16447__auto__ = wport;
if(cljs.core.truth_(or__16447__auto__)){
return or__16447__auto__;
} else {
return port;
}
})()], null));
} else {
var G__26126 = (i + (1));
i = G__26126;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16447__auto__ = ret;
if(cljs.core.truth_(or__16447__auto__)){
return or__16447__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16435__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16435__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16435__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17512__auto__ = [];
var len__17505__auto___26132 = arguments.length;
var i__17506__auto___26133 = (0);
while(true){
if((i__17506__auto___26133 < len__17505__auto___26132)){
args__17512__auto__.push((arguments[i__17506__auto___26133]));

var G__26134 = (i__17506__auto___26133 + (1));
i__17506__auto___26133 = G__26134;
continue;
} else {
}
break;
}

var argseq__17513__auto__ = ((((1) < args__17512__auto__.length))?(new cljs.core.IndexedSeq(args__17512__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17513__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26129){
var map__26130 = p__26129;
var map__26130__$1 = ((((!((map__26130 == null)))?((((map__26130.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26130.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26130):map__26130);
var opts = map__26130__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26127){
var G__26128 = cljs.core.first.call(null,seq26127);
var seq26127__$1 = cljs.core.next.call(null,seq26127);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26128,seq26127__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args26135 = [];
var len__17505__auto___26185 = arguments.length;
var i__17506__auto___26186 = (0);
while(true){
if((i__17506__auto___26186 < len__17505__auto___26185)){
args26135.push((arguments[i__17506__auto___26186]));

var G__26187 = (i__17506__auto___26186 + (1));
i__17506__auto___26186 = G__26187;
continue;
} else {
}
break;
}

var G__26137 = args26135.length;
switch (G__26137) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26135.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__18530__auto___26189 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18530__auto___26189){
return (function (){
var f__18531__auto__ = (function (){var switch__18465__auto__ = ((function (c__18530__auto___26189){
return (function (state_26161){
var state_val_26162 = (state_26161[(1)]);
if((state_val_26162 === (7))){
var inst_26157 = (state_26161[(2)]);
var state_26161__$1 = state_26161;
var statearr_26163_26190 = state_26161__$1;
(statearr_26163_26190[(2)] = inst_26157);

(statearr_26163_26190[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26162 === (1))){
var state_26161__$1 = state_26161;
var statearr_26164_26191 = state_26161__$1;
(statearr_26164_26191[(2)] = null);

(statearr_26164_26191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26162 === (4))){
var inst_26140 = (state_26161[(7)]);
var inst_26140__$1 = (state_26161[(2)]);
var inst_26141 = (inst_26140__$1 == null);
var state_26161__$1 = (function (){var statearr_26165 = state_26161;
(statearr_26165[(7)] = inst_26140__$1);

return statearr_26165;
})();
if(cljs.core.truth_(inst_26141)){
var statearr_26166_26192 = state_26161__$1;
(statearr_26166_26192[(1)] = (5));

} else {
var statearr_26167_26193 = state_26161__$1;
(statearr_26167_26193[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26162 === (13))){
var state_26161__$1 = state_26161;
var statearr_26168_26194 = state_26161__$1;
(statearr_26168_26194[(2)] = null);

(statearr_26168_26194[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26162 === (6))){
var inst_26140 = (state_26161[(7)]);
var state_26161__$1 = state_26161;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26161__$1,(11),to,inst_26140);
} else {
if((state_val_26162 === (3))){
var inst_26159 = (state_26161[(2)]);
var state_26161__$1 = state_26161;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26161__$1,inst_26159);
} else {
if((state_val_26162 === (12))){
var state_26161__$1 = state_26161;
var statearr_26169_26195 = state_26161__$1;
(statearr_26169_26195[(2)] = null);

(statearr_26169_26195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26162 === (2))){
var state_26161__$1 = state_26161;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26161__$1,(4),from);
} else {
if((state_val_26162 === (11))){
var inst_26150 = (state_26161[(2)]);
var state_26161__$1 = state_26161;
if(cljs.core.truth_(inst_26150)){
var statearr_26170_26196 = state_26161__$1;
(statearr_26170_26196[(1)] = (12));

} else {
var statearr_26171_26197 = state_26161__$1;
(statearr_26171_26197[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26162 === (9))){
var state_26161__$1 = state_26161;
var statearr_26172_26198 = state_26161__$1;
(statearr_26172_26198[(2)] = null);

(statearr_26172_26198[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26162 === (5))){
var state_26161__$1 = state_26161;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26173_26199 = state_26161__$1;
(statearr_26173_26199[(1)] = (8));

} else {
var statearr_26174_26200 = state_26161__$1;
(statearr_26174_26200[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26162 === (14))){
var inst_26155 = (state_26161[(2)]);
var state_26161__$1 = state_26161;
var statearr_26175_26201 = state_26161__$1;
(statearr_26175_26201[(2)] = inst_26155);

(statearr_26175_26201[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26162 === (10))){
var inst_26147 = (state_26161[(2)]);
var state_26161__$1 = state_26161;
var statearr_26176_26202 = state_26161__$1;
(statearr_26176_26202[(2)] = inst_26147);

(statearr_26176_26202[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26162 === (8))){
var inst_26144 = cljs.core.async.close_BANG_.call(null,to);
var state_26161__$1 = state_26161;
var statearr_26177_26203 = state_26161__$1;
(statearr_26177_26203[(2)] = inst_26144);

(statearr_26177_26203[(1)] = (10));


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
});})(c__18530__auto___26189))
;
return ((function (switch__18465__auto__,c__18530__auto___26189){
return (function() {
var cljs$core$async$state_machine__18466__auto__ = null;
var cljs$core$async$state_machine__18466__auto____0 = (function (){
var statearr_26181 = [null,null,null,null,null,null,null,null];
(statearr_26181[(0)] = cljs$core$async$state_machine__18466__auto__);

(statearr_26181[(1)] = (1));

return statearr_26181;
});
var cljs$core$async$state_machine__18466__auto____1 = (function (state_26161){
while(true){
var ret_value__18467__auto__ = (function (){try{while(true){
var result__18468__auto__ = switch__18465__auto__.call(null,state_26161);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18468__auto__;
}
break;
}
}catch (e26182){if((e26182 instanceof Object)){
var ex__18469__auto__ = e26182;
var statearr_26183_26204 = state_26161;
(statearr_26183_26204[(5)] = ex__18469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26161);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26182;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26205 = state_26161;
state_26161 = G__26205;
continue;
} else {
return ret_value__18467__auto__;
}
break;
}
});
cljs$core$async$state_machine__18466__auto__ = function(state_26161){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18466__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18466__auto____1.call(this,state_26161);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18466__auto____0;
cljs$core$async$state_machine__18466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18466__auto____1;
return cljs$core$async$state_machine__18466__auto__;
})()
;})(switch__18465__auto__,c__18530__auto___26189))
})();
var state__18532__auto__ = (function (){var statearr_26184 = f__18531__auto__.call(null);
(statearr_26184[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18530__auto___26189);

return statearr_26184;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18532__auto__);
});})(c__18530__auto___26189))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__26389){
var vec__26390 = p__26389;
var v = cljs.core.nth.call(null,vec__26390,(0),null);
var p = cljs.core.nth.call(null,vec__26390,(1),null);
var job = vec__26390;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__18530__auto___26572 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18530__auto___26572,res,vec__26390,v,p,job,jobs,results){
return (function (){
var f__18531__auto__ = (function (){var switch__18465__auto__ = ((function (c__18530__auto___26572,res,vec__26390,v,p,job,jobs,results){
return (function (state_26395){
var state_val_26396 = (state_26395[(1)]);
if((state_val_26396 === (1))){
var state_26395__$1 = state_26395;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26395__$1,(2),res,v);
} else {
if((state_val_26396 === (2))){
var inst_26392 = (state_26395[(2)]);
var inst_26393 = cljs.core.async.close_BANG_.call(null,res);
var state_26395__$1 = (function (){var statearr_26397 = state_26395;
(statearr_26397[(7)] = inst_26392);

return statearr_26397;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26395__$1,inst_26393);
} else {
return null;
}
}
});})(c__18530__auto___26572,res,vec__26390,v,p,job,jobs,results))
;
return ((function (switch__18465__auto__,c__18530__auto___26572,res,vec__26390,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18466__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18466__auto____0 = (function (){
var statearr_26401 = [null,null,null,null,null,null,null,null];
(statearr_26401[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18466__auto__);

(statearr_26401[(1)] = (1));

return statearr_26401;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18466__auto____1 = (function (state_26395){
while(true){
var ret_value__18467__auto__ = (function (){try{while(true){
var result__18468__auto__ = switch__18465__auto__.call(null,state_26395);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18468__auto__;
}
break;
}
}catch (e26402){if((e26402 instanceof Object)){
var ex__18469__auto__ = e26402;
var statearr_26403_26573 = state_26395;
(statearr_26403_26573[(5)] = ex__18469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26395);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26402;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26574 = state_26395;
state_26395 = G__26574;
continue;
} else {
return ret_value__18467__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18466__auto__ = function(state_26395){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18466__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18466__auto____1.call(this,state_26395);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18466__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18466__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18466__auto__;
})()
;})(switch__18465__auto__,c__18530__auto___26572,res,vec__26390,v,p,job,jobs,results))
})();
var state__18532__auto__ = (function (){var statearr_26404 = f__18531__auto__.call(null);
(statearr_26404[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18530__auto___26572);

return statearr_26404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18532__auto__);
});})(c__18530__auto___26572,res,vec__26390,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__26405){
var vec__26406 = p__26405;
var v = cljs.core.nth.call(null,vec__26406,(0),null);
var p = cljs.core.nth.call(null,vec__26406,(1),null);
var job = vec__26406;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17350__auto___26575 = n;
var __26576 = (0);
while(true){
if((__26576 < n__17350__auto___26575)){
var G__26407_26577 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__26407_26577) {
case "compute":
var c__18530__auto___26579 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26576,c__18530__auto___26579,G__26407_26577,n__17350__auto___26575,jobs,results,process,async){
return (function (){
var f__18531__auto__ = (function (){var switch__18465__auto__ = ((function (__26576,c__18530__auto___26579,G__26407_26577,n__17350__auto___26575,jobs,results,process,async){
return (function (state_26420){
var state_val_26421 = (state_26420[(1)]);
if((state_val_26421 === (1))){
var state_26420__$1 = state_26420;
var statearr_26422_26580 = state_26420__$1;
(statearr_26422_26580[(2)] = null);

(statearr_26422_26580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26421 === (2))){
var state_26420__$1 = state_26420;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26420__$1,(4),jobs);
} else {
if((state_val_26421 === (3))){
var inst_26418 = (state_26420[(2)]);
var state_26420__$1 = state_26420;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26420__$1,inst_26418);
} else {
if((state_val_26421 === (4))){
var inst_26410 = (state_26420[(2)]);
var inst_26411 = process.call(null,inst_26410);
var state_26420__$1 = state_26420;
if(cljs.core.truth_(inst_26411)){
var statearr_26423_26581 = state_26420__$1;
(statearr_26423_26581[(1)] = (5));

} else {
var statearr_26424_26582 = state_26420__$1;
(statearr_26424_26582[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26421 === (5))){
var state_26420__$1 = state_26420;
var statearr_26425_26583 = state_26420__$1;
(statearr_26425_26583[(2)] = null);

(statearr_26425_26583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26421 === (6))){
var state_26420__$1 = state_26420;
var statearr_26426_26584 = state_26420__$1;
(statearr_26426_26584[(2)] = null);

(statearr_26426_26584[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26421 === (7))){
var inst_26416 = (state_26420[(2)]);
var state_26420__$1 = state_26420;
var statearr_26427_26585 = state_26420__$1;
(statearr_26427_26585[(2)] = inst_26416);

(statearr_26427_26585[(1)] = (3));


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
});})(__26576,c__18530__auto___26579,G__26407_26577,n__17350__auto___26575,jobs,results,process,async))
;
return ((function (__26576,switch__18465__auto__,c__18530__auto___26579,G__26407_26577,n__17350__auto___26575,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18466__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18466__auto____0 = (function (){
var statearr_26431 = [null,null,null,null,null,null,null];
(statearr_26431[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18466__auto__);

(statearr_26431[(1)] = (1));

return statearr_26431;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18466__auto____1 = (function (state_26420){
while(true){
var ret_value__18467__auto__ = (function (){try{while(true){
var result__18468__auto__ = switch__18465__auto__.call(null,state_26420);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18468__auto__;
}
break;
}
}catch (e26432){if((e26432 instanceof Object)){
var ex__18469__auto__ = e26432;
var statearr_26433_26586 = state_26420;
(statearr_26433_26586[(5)] = ex__18469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26420);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26432;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26587 = state_26420;
state_26420 = G__26587;
continue;
} else {
return ret_value__18467__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18466__auto__ = function(state_26420){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18466__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18466__auto____1.call(this,state_26420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18466__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18466__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18466__auto__;
})()
;})(__26576,switch__18465__auto__,c__18530__auto___26579,G__26407_26577,n__17350__auto___26575,jobs,results,process,async))
})();
var state__18532__auto__ = (function (){var statearr_26434 = f__18531__auto__.call(null);
(statearr_26434[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18530__auto___26579);

return statearr_26434;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18532__auto__);
});})(__26576,c__18530__auto___26579,G__26407_26577,n__17350__auto___26575,jobs,results,process,async))
);


break;
case "async":
var c__18530__auto___26588 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26576,c__18530__auto___26588,G__26407_26577,n__17350__auto___26575,jobs,results,process,async){
return (function (){
var f__18531__auto__ = (function (){var switch__18465__auto__ = ((function (__26576,c__18530__auto___26588,G__26407_26577,n__17350__auto___26575,jobs,results,process,async){
return (function (state_26447){
var state_val_26448 = (state_26447[(1)]);
if((state_val_26448 === (1))){
var state_26447__$1 = state_26447;
var statearr_26449_26589 = state_26447__$1;
(statearr_26449_26589[(2)] = null);

(statearr_26449_26589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26448 === (2))){
var state_26447__$1 = state_26447;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26447__$1,(4),jobs);
} else {
if((state_val_26448 === (3))){
var inst_26445 = (state_26447[(2)]);
var state_26447__$1 = state_26447;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26447__$1,inst_26445);
} else {
if((state_val_26448 === (4))){
var inst_26437 = (state_26447[(2)]);
var inst_26438 = async.call(null,inst_26437);
var state_26447__$1 = state_26447;
if(cljs.core.truth_(inst_26438)){
var statearr_26450_26590 = state_26447__$1;
(statearr_26450_26590[(1)] = (5));

} else {
var statearr_26451_26591 = state_26447__$1;
(statearr_26451_26591[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26448 === (5))){
var state_26447__$1 = state_26447;
var statearr_26452_26592 = state_26447__$1;
(statearr_26452_26592[(2)] = null);

(statearr_26452_26592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26448 === (6))){
var state_26447__$1 = state_26447;
var statearr_26453_26593 = state_26447__$1;
(statearr_26453_26593[(2)] = null);

(statearr_26453_26593[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26448 === (7))){
var inst_26443 = (state_26447[(2)]);
var state_26447__$1 = state_26447;
var statearr_26454_26594 = state_26447__$1;
(statearr_26454_26594[(2)] = inst_26443);

(statearr_26454_26594[(1)] = (3));


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
});})(__26576,c__18530__auto___26588,G__26407_26577,n__17350__auto___26575,jobs,results,process,async))
;
return ((function (__26576,switch__18465__auto__,c__18530__auto___26588,G__26407_26577,n__17350__auto___26575,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18466__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18466__auto____0 = (function (){
var statearr_26458 = [null,null,null,null,null,null,null];
(statearr_26458[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18466__auto__);

(statearr_26458[(1)] = (1));

return statearr_26458;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18466__auto____1 = (function (state_26447){
while(true){
var ret_value__18467__auto__ = (function (){try{while(true){
var result__18468__auto__ = switch__18465__auto__.call(null,state_26447);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18468__auto__;
}
break;
}
}catch (e26459){if((e26459 instanceof Object)){
var ex__18469__auto__ = e26459;
var statearr_26460_26595 = state_26447;
(statearr_26460_26595[(5)] = ex__18469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26447);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26459;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26596 = state_26447;
state_26447 = G__26596;
continue;
} else {
return ret_value__18467__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18466__auto__ = function(state_26447){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18466__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18466__auto____1.call(this,state_26447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18466__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18466__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18466__auto__;
})()
;})(__26576,switch__18465__auto__,c__18530__auto___26588,G__26407_26577,n__17350__auto___26575,jobs,results,process,async))
})();
var state__18532__auto__ = (function (){var statearr_26461 = f__18531__auto__.call(null);
(statearr_26461[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18530__auto___26588);

return statearr_26461;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18532__auto__);
});})(__26576,c__18530__auto___26588,G__26407_26577,n__17350__auto___26575,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__26597 = (__26576 + (1));
__26576 = G__26597;
continue;
} else {
}
break;
}

var c__18530__auto___26598 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18530__auto___26598,jobs,results,process,async){
return (function (){
var f__18531__auto__ = (function (){var switch__18465__auto__ = ((function (c__18530__auto___26598,jobs,results,process,async){
return (function (state_26483){
var state_val_26484 = (state_26483[(1)]);
if((state_val_26484 === (1))){
var state_26483__$1 = state_26483;
var statearr_26485_26599 = state_26483__$1;
(statearr_26485_26599[(2)] = null);

(statearr_26485_26599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26484 === (2))){
var state_26483__$1 = state_26483;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26483__$1,(4),from);
} else {
if((state_val_26484 === (3))){
var inst_26481 = (state_26483[(2)]);
var state_26483__$1 = state_26483;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26483__$1,inst_26481);
} else {
if((state_val_26484 === (4))){
var inst_26464 = (state_26483[(7)]);
var inst_26464__$1 = (state_26483[(2)]);
var inst_26465 = (inst_26464__$1 == null);
var state_26483__$1 = (function (){var statearr_26486 = state_26483;
(statearr_26486[(7)] = inst_26464__$1);

return statearr_26486;
})();
if(cljs.core.truth_(inst_26465)){
var statearr_26487_26600 = state_26483__$1;
(statearr_26487_26600[(1)] = (5));

} else {
var statearr_26488_26601 = state_26483__$1;
(statearr_26488_26601[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26484 === (5))){
var inst_26467 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26483__$1 = state_26483;
var statearr_26489_26602 = state_26483__$1;
(statearr_26489_26602[(2)] = inst_26467);

(statearr_26489_26602[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26484 === (6))){
var inst_26469 = (state_26483[(8)]);
var inst_26464 = (state_26483[(7)]);
var inst_26469__$1 = cljs.core.async.chan.call(null,(1));
var inst_26470 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26471 = [inst_26464,inst_26469__$1];
var inst_26472 = (new cljs.core.PersistentVector(null,2,(5),inst_26470,inst_26471,null));
var state_26483__$1 = (function (){var statearr_26490 = state_26483;
(statearr_26490[(8)] = inst_26469__$1);

return statearr_26490;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26483__$1,(8),jobs,inst_26472);
} else {
if((state_val_26484 === (7))){
var inst_26479 = (state_26483[(2)]);
var state_26483__$1 = state_26483;
var statearr_26491_26603 = state_26483__$1;
(statearr_26491_26603[(2)] = inst_26479);

(statearr_26491_26603[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26484 === (8))){
var inst_26469 = (state_26483[(8)]);
var inst_26474 = (state_26483[(2)]);
var state_26483__$1 = (function (){var statearr_26492 = state_26483;
(statearr_26492[(9)] = inst_26474);

return statearr_26492;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26483__$1,(9),results,inst_26469);
} else {
if((state_val_26484 === (9))){
var inst_26476 = (state_26483[(2)]);
var state_26483__$1 = (function (){var statearr_26493 = state_26483;
(statearr_26493[(10)] = inst_26476);

return statearr_26493;
})();
var statearr_26494_26604 = state_26483__$1;
(statearr_26494_26604[(2)] = null);

(statearr_26494_26604[(1)] = (2));


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
});})(c__18530__auto___26598,jobs,results,process,async))
;
return ((function (switch__18465__auto__,c__18530__auto___26598,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18466__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18466__auto____0 = (function (){
var statearr_26498 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26498[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18466__auto__);

(statearr_26498[(1)] = (1));

return statearr_26498;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18466__auto____1 = (function (state_26483){
while(true){
var ret_value__18467__auto__ = (function (){try{while(true){
var result__18468__auto__ = switch__18465__auto__.call(null,state_26483);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18468__auto__;
}
break;
}
}catch (e26499){if((e26499 instanceof Object)){
var ex__18469__auto__ = e26499;
var statearr_26500_26605 = state_26483;
(statearr_26500_26605[(5)] = ex__18469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26483);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26499;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26606 = state_26483;
state_26483 = G__26606;
continue;
} else {
return ret_value__18467__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18466__auto__ = function(state_26483){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18466__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18466__auto____1.call(this,state_26483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18466__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18466__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18466__auto__;
})()
;})(switch__18465__auto__,c__18530__auto___26598,jobs,results,process,async))
})();
var state__18532__auto__ = (function (){var statearr_26501 = f__18531__auto__.call(null);
(statearr_26501[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18530__auto___26598);

return statearr_26501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18532__auto__);
});})(c__18530__auto___26598,jobs,results,process,async))
);


var c__18530__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18530__auto__,jobs,results,process,async){
return (function (){
var f__18531__auto__ = (function (){var switch__18465__auto__ = ((function (c__18530__auto__,jobs,results,process,async){
return (function (state_26539){
var state_val_26540 = (state_26539[(1)]);
if((state_val_26540 === (7))){
var inst_26535 = (state_26539[(2)]);
var state_26539__$1 = state_26539;
var statearr_26541_26607 = state_26539__$1;
(statearr_26541_26607[(2)] = inst_26535);

(statearr_26541_26607[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26540 === (20))){
var state_26539__$1 = state_26539;
var statearr_26542_26608 = state_26539__$1;
(statearr_26542_26608[(2)] = null);

(statearr_26542_26608[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26540 === (1))){
var state_26539__$1 = state_26539;
var statearr_26543_26609 = state_26539__$1;
(statearr_26543_26609[(2)] = null);

(statearr_26543_26609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26540 === (4))){
var inst_26504 = (state_26539[(7)]);
var inst_26504__$1 = (state_26539[(2)]);
var inst_26505 = (inst_26504__$1 == null);
var state_26539__$1 = (function (){var statearr_26544 = state_26539;
(statearr_26544[(7)] = inst_26504__$1);

return statearr_26544;
})();
if(cljs.core.truth_(inst_26505)){
var statearr_26545_26610 = state_26539__$1;
(statearr_26545_26610[(1)] = (5));

} else {
var statearr_26546_26611 = state_26539__$1;
(statearr_26546_26611[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26540 === (15))){
var inst_26517 = (state_26539[(8)]);
var state_26539__$1 = state_26539;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26539__$1,(18),to,inst_26517);
} else {
if((state_val_26540 === (21))){
var inst_26530 = (state_26539[(2)]);
var state_26539__$1 = state_26539;
var statearr_26547_26612 = state_26539__$1;
(statearr_26547_26612[(2)] = inst_26530);

(statearr_26547_26612[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26540 === (13))){
var inst_26532 = (state_26539[(2)]);
var state_26539__$1 = (function (){var statearr_26548 = state_26539;
(statearr_26548[(9)] = inst_26532);

return statearr_26548;
})();
var statearr_26549_26613 = state_26539__$1;
(statearr_26549_26613[(2)] = null);

(statearr_26549_26613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26540 === (6))){
var inst_26504 = (state_26539[(7)]);
var state_26539__$1 = state_26539;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26539__$1,(11),inst_26504);
} else {
if((state_val_26540 === (17))){
var inst_26525 = (state_26539[(2)]);
var state_26539__$1 = state_26539;
if(cljs.core.truth_(inst_26525)){
var statearr_26550_26614 = state_26539__$1;
(statearr_26550_26614[(1)] = (19));

} else {
var statearr_26551_26615 = state_26539__$1;
(statearr_26551_26615[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26540 === (3))){
var inst_26537 = (state_26539[(2)]);
var state_26539__$1 = state_26539;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26539__$1,inst_26537);
} else {
if((state_val_26540 === (12))){
var inst_26514 = (state_26539[(10)]);
var state_26539__$1 = state_26539;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26539__$1,(14),inst_26514);
} else {
if((state_val_26540 === (2))){
var state_26539__$1 = state_26539;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26539__$1,(4),results);
} else {
if((state_val_26540 === (19))){
var state_26539__$1 = state_26539;
var statearr_26552_26616 = state_26539__$1;
(statearr_26552_26616[(2)] = null);

(statearr_26552_26616[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26540 === (11))){
var inst_26514 = (state_26539[(2)]);
var state_26539__$1 = (function (){var statearr_26553 = state_26539;
(statearr_26553[(10)] = inst_26514);

return statearr_26553;
})();
var statearr_26554_26617 = state_26539__$1;
(statearr_26554_26617[(2)] = null);

(statearr_26554_26617[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26540 === (9))){
var state_26539__$1 = state_26539;
var statearr_26555_26618 = state_26539__$1;
(statearr_26555_26618[(2)] = null);

(statearr_26555_26618[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26540 === (5))){
var state_26539__$1 = state_26539;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26556_26619 = state_26539__$1;
(statearr_26556_26619[(1)] = (8));

} else {
var statearr_26557_26620 = state_26539__$1;
(statearr_26557_26620[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26540 === (14))){
var inst_26519 = (state_26539[(11)]);
var inst_26517 = (state_26539[(8)]);
var inst_26517__$1 = (state_26539[(2)]);
var inst_26518 = (inst_26517__$1 == null);
var inst_26519__$1 = cljs.core.not.call(null,inst_26518);
var state_26539__$1 = (function (){var statearr_26558 = state_26539;
(statearr_26558[(11)] = inst_26519__$1);

(statearr_26558[(8)] = inst_26517__$1);

return statearr_26558;
})();
if(inst_26519__$1){
var statearr_26559_26621 = state_26539__$1;
(statearr_26559_26621[(1)] = (15));

} else {
var statearr_26560_26622 = state_26539__$1;
(statearr_26560_26622[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26540 === (16))){
var inst_26519 = (state_26539[(11)]);
var state_26539__$1 = state_26539;
var statearr_26561_26623 = state_26539__$1;
(statearr_26561_26623[(2)] = inst_26519);

(statearr_26561_26623[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26540 === (10))){
var inst_26511 = (state_26539[(2)]);
var state_26539__$1 = state_26539;
var statearr_26562_26624 = state_26539__$1;
(statearr_26562_26624[(2)] = inst_26511);

(statearr_26562_26624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26540 === (18))){
var inst_26522 = (state_26539[(2)]);
var state_26539__$1 = state_26539;
var statearr_26563_26625 = state_26539__$1;
(statearr_26563_26625[(2)] = inst_26522);

(statearr_26563_26625[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26540 === (8))){
var inst_26508 = cljs.core.async.close_BANG_.call(null,to);
var state_26539__$1 = state_26539;
var statearr_26564_26626 = state_26539__$1;
(statearr_26564_26626[(2)] = inst_26508);

(statearr_26564_26626[(1)] = (10));


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
}
}
}
}
});})(c__18530__auto__,jobs,results,process,async))
;
return ((function (switch__18465__auto__,c__18530__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18466__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18466__auto____0 = (function (){
var statearr_26568 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26568[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18466__auto__);

(statearr_26568[(1)] = (1));

return statearr_26568;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18466__auto____1 = (function (state_26539){
while(true){
var ret_value__18467__auto__ = (function (){try{while(true){
var result__18468__auto__ = switch__18465__auto__.call(null,state_26539);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18468__auto__;
}
break;
}
}catch (e26569){if((e26569 instanceof Object)){
var ex__18469__auto__ = e26569;
var statearr_26570_26627 = state_26539;
(statearr_26570_26627[(5)] = ex__18469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26539);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26569;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26628 = state_26539;
state_26539 = G__26628;
continue;
} else {
return ret_value__18467__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18466__auto__ = function(state_26539){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18466__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18466__auto____1.call(this,state_26539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18466__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18466__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18466__auto__;
})()
;})(switch__18465__auto__,c__18530__auto__,jobs,results,process,async))
})();
var state__18532__auto__ = (function (){var statearr_26571 = f__18531__auto__.call(null);
(statearr_26571[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18530__auto__);

return statearr_26571;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18532__auto__);
});})(c__18530__auto__,jobs,results,process,async))
);

return c__18530__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args26629 = [];
var len__17505__auto___26632 = arguments.length;
var i__17506__auto___26633 = (0);
while(true){
if((i__17506__auto___26633 < len__17505__auto___26632)){
args26629.push((arguments[i__17506__auto___26633]));

var G__26634 = (i__17506__auto___26633 + (1));
i__17506__auto___26633 = G__26634;
continue;
} else {
}
break;
}

var G__26631 = args26629.length;
switch (G__26631) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26629.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args26636 = [];
var len__17505__auto___26639 = arguments.length;
var i__17506__auto___26640 = (0);
while(true){
if((i__17506__auto___26640 < len__17505__auto___26639)){
args26636.push((arguments[i__17506__auto___26640]));

var G__26641 = (i__17506__auto___26640 + (1));
i__17506__auto___26640 = G__26641;
continue;
} else {
}
break;
}

var G__26638 = args26636.length;
switch (G__26638) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26636.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args26643 = [];
var len__17505__auto___26696 = arguments.length;
var i__17506__auto___26697 = (0);
while(true){
if((i__17506__auto___26697 < len__17505__auto___26696)){
args26643.push((arguments[i__17506__auto___26697]));

var G__26698 = (i__17506__auto___26697 + (1));
i__17506__auto___26697 = G__26698;
continue;
} else {
}
break;
}

var G__26645 = args26643.length;
switch (G__26645) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26643.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__18530__auto___26700 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18530__auto___26700,tc,fc){
return (function (){
var f__18531__auto__ = (function (){var switch__18465__auto__ = ((function (c__18530__auto___26700,tc,fc){
return (function (state_26671){
var state_val_26672 = (state_26671[(1)]);
if((state_val_26672 === (7))){
var inst_26667 = (state_26671[(2)]);
var state_26671__$1 = state_26671;
var statearr_26673_26701 = state_26671__$1;
(statearr_26673_26701[(2)] = inst_26667);

(statearr_26673_26701[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26672 === (1))){
var state_26671__$1 = state_26671;
var statearr_26674_26702 = state_26671__$1;
(statearr_26674_26702[(2)] = null);

(statearr_26674_26702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26672 === (4))){
var inst_26648 = (state_26671[(7)]);
var inst_26648__$1 = (state_26671[(2)]);
var inst_26649 = (inst_26648__$1 == null);
var state_26671__$1 = (function (){var statearr_26675 = state_26671;
(statearr_26675[(7)] = inst_26648__$1);

return statearr_26675;
})();
if(cljs.core.truth_(inst_26649)){
var statearr_26676_26703 = state_26671__$1;
(statearr_26676_26703[(1)] = (5));

} else {
var statearr_26677_26704 = state_26671__$1;
(statearr_26677_26704[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26672 === (13))){
var state_26671__$1 = state_26671;
var statearr_26678_26705 = state_26671__$1;
(statearr_26678_26705[(2)] = null);

(statearr_26678_26705[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26672 === (6))){
var inst_26648 = (state_26671[(7)]);
var inst_26654 = p.call(null,inst_26648);
var state_26671__$1 = state_26671;
if(cljs.core.truth_(inst_26654)){
var statearr_26679_26706 = state_26671__$1;
(statearr_26679_26706[(1)] = (9));

} else {
var statearr_26680_26707 = state_26671__$1;
(statearr_26680_26707[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26672 === (3))){
var inst_26669 = (state_26671[(2)]);
var state_26671__$1 = state_26671;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26671__$1,inst_26669);
} else {
if((state_val_26672 === (12))){
var state_26671__$1 = state_26671;
var statearr_26681_26708 = state_26671__$1;
(statearr_26681_26708[(2)] = null);

(statearr_26681_26708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26672 === (2))){
var state_26671__$1 = state_26671;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26671__$1,(4),ch);
} else {
if((state_val_26672 === (11))){
var inst_26648 = (state_26671[(7)]);
var inst_26658 = (state_26671[(2)]);
var state_26671__$1 = state_26671;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26671__$1,(8),inst_26658,inst_26648);
} else {
if((state_val_26672 === (9))){
var state_26671__$1 = state_26671;
var statearr_26682_26709 = state_26671__$1;
(statearr_26682_26709[(2)] = tc);

(statearr_26682_26709[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26672 === (5))){
var inst_26651 = cljs.core.async.close_BANG_.call(null,tc);
var inst_26652 = cljs.core.async.close_BANG_.call(null,fc);
var state_26671__$1 = (function (){var statearr_26683 = state_26671;
(statearr_26683[(8)] = inst_26651);

return statearr_26683;
})();
var statearr_26684_26710 = state_26671__$1;
(statearr_26684_26710[(2)] = inst_26652);

(statearr_26684_26710[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26672 === (14))){
var inst_26665 = (state_26671[(2)]);
var state_26671__$1 = state_26671;
var statearr_26685_26711 = state_26671__$1;
(statearr_26685_26711[(2)] = inst_26665);

(statearr_26685_26711[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26672 === (10))){
var state_26671__$1 = state_26671;
var statearr_26686_26712 = state_26671__$1;
(statearr_26686_26712[(2)] = fc);

(statearr_26686_26712[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26672 === (8))){
var inst_26660 = (state_26671[(2)]);
var state_26671__$1 = state_26671;
if(cljs.core.truth_(inst_26660)){
var statearr_26687_26713 = state_26671__$1;
(statearr_26687_26713[(1)] = (12));

} else {
var statearr_26688_26714 = state_26671__$1;
(statearr_26688_26714[(1)] = (13));

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
});})(c__18530__auto___26700,tc,fc))
;
return ((function (switch__18465__auto__,c__18530__auto___26700,tc,fc){
return (function() {
var cljs$core$async$state_machine__18466__auto__ = null;
var cljs$core$async$state_machine__18466__auto____0 = (function (){
var statearr_26692 = [null,null,null,null,null,null,null,null,null];
(statearr_26692[(0)] = cljs$core$async$state_machine__18466__auto__);

(statearr_26692[(1)] = (1));

return statearr_26692;
});
var cljs$core$async$state_machine__18466__auto____1 = (function (state_26671){
while(true){
var ret_value__18467__auto__ = (function (){try{while(true){
var result__18468__auto__ = switch__18465__auto__.call(null,state_26671);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18468__auto__;
}
break;
}
}catch (e26693){if((e26693 instanceof Object)){
var ex__18469__auto__ = e26693;
var statearr_26694_26715 = state_26671;
(statearr_26694_26715[(5)] = ex__18469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26671);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26693;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26716 = state_26671;
state_26671 = G__26716;
continue;
} else {
return ret_value__18467__auto__;
}
break;
}
});
cljs$core$async$state_machine__18466__auto__ = function(state_26671){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18466__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18466__auto____1.call(this,state_26671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18466__auto____0;
cljs$core$async$state_machine__18466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18466__auto____1;
return cljs$core$async$state_machine__18466__auto__;
})()
;})(switch__18465__auto__,c__18530__auto___26700,tc,fc))
})();
var state__18532__auto__ = (function (){var statearr_26695 = f__18531__auto__.call(null);
(statearr_26695[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18530__auto___26700);

return statearr_26695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18532__auto__);
});})(c__18530__auto___26700,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__18530__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18530__auto__){
return (function (){
var f__18531__auto__ = (function (){var switch__18465__auto__ = ((function (c__18530__auto__){
return (function (state_26763){
var state_val_26764 = (state_26763[(1)]);
if((state_val_26764 === (1))){
var inst_26749 = init;
var state_26763__$1 = (function (){var statearr_26765 = state_26763;
(statearr_26765[(7)] = inst_26749);

return statearr_26765;
})();
var statearr_26766_26781 = state_26763__$1;
(statearr_26766_26781[(2)] = null);

(statearr_26766_26781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26764 === (2))){
var state_26763__$1 = state_26763;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26763__$1,(4),ch);
} else {
if((state_val_26764 === (3))){
var inst_26761 = (state_26763[(2)]);
var state_26763__$1 = state_26763;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26763__$1,inst_26761);
} else {
if((state_val_26764 === (4))){
var inst_26752 = (state_26763[(8)]);
var inst_26752__$1 = (state_26763[(2)]);
var inst_26753 = (inst_26752__$1 == null);
var state_26763__$1 = (function (){var statearr_26767 = state_26763;
(statearr_26767[(8)] = inst_26752__$1);

return statearr_26767;
})();
if(cljs.core.truth_(inst_26753)){
var statearr_26768_26782 = state_26763__$1;
(statearr_26768_26782[(1)] = (5));

} else {
var statearr_26769_26783 = state_26763__$1;
(statearr_26769_26783[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26764 === (5))){
var inst_26749 = (state_26763[(7)]);
var state_26763__$1 = state_26763;
var statearr_26770_26784 = state_26763__$1;
(statearr_26770_26784[(2)] = inst_26749);

(statearr_26770_26784[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26764 === (6))){
var inst_26752 = (state_26763[(8)]);
var inst_26749 = (state_26763[(7)]);
var inst_26756 = f.call(null,inst_26749,inst_26752);
var inst_26749__$1 = inst_26756;
var state_26763__$1 = (function (){var statearr_26771 = state_26763;
(statearr_26771[(7)] = inst_26749__$1);

return statearr_26771;
})();
var statearr_26772_26785 = state_26763__$1;
(statearr_26772_26785[(2)] = null);

(statearr_26772_26785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26764 === (7))){
var inst_26759 = (state_26763[(2)]);
var state_26763__$1 = state_26763;
var statearr_26773_26786 = state_26763__$1;
(statearr_26773_26786[(2)] = inst_26759);

(statearr_26773_26786[(1)] = (3));


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
});})(c__18530__auto__))
;
return ((function (switch__18465__auto__,c__18530__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__18466__auto__ = null;
var cljs$core$async$reduce_$_state_machine__18466__auto____0 = (function (){
var statearr_26777 = [null,null,null,null,null,null,null,null,null];
(statearr_26777[(0)] = cljs$core$async$reduce_$_state_machine__18466__auto__);

(statearr_26777[(1)] = (1));

return statearr_26777;
});
var cljs$core$async$reduce_$_state_machine__18466__auto____1 = (function (state_26763){
while(true){
var ret_value__18467__auto__ = (function (){try{while(true){
var result__18468__auto__ = switch__18465__auto__.call(null,state_26763);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18468__auto__;
}
break;
}
}catch (e26778){if((e26778 instanceof Object)){
var ex__18469__auto__ = e26778;
var statearr_26779_26787 = state_26763;
(statearr_26779_26787[(5)] = ex__18469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26763);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26778;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26788 = state_26763;
state_26763 = G__26788;
continue;
} else {
return ret_value__18467__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__18466__auto__ = function(state_26763){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__18466__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__18466__auto____1.call(this,state_26763);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__18466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__18466__auto____0;
cljs$core$async$reduce_$_state_machine__18466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__18466__auto____1;
return cljs$core$async$reduce_$_state_machine__18466__auto__;
})()
;})(switch__18465__auto__,c__18530__auto__))
})();
var state__18532__auto__ = (function (){var statearr_26780 = f__18531__auto__.call(null);
(statearr_26780[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18530__auto__);

return statearr_26780;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18532__auto__);
});})(c__18530__auto__))
);

return c__18530__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args26789 = [];
var len__17505__auto___26841 = arguments.length;
var i__17506__auto___26842 = (0);
while(true){
if((i__17506__auto___26842 < len__17505__auto___26841)){
args26789.push((arguments[i__17506__auto___26842]));

var G__26843 = (i__17506__auto___26842 + (1));
i__17506__auto___26842 = G__26843;
continue;
} else {
}
break;
}

var G__26791 = args26789.length;
switch (G__26791) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26789.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__18530__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18530__auto__){
return (function (){
var f__18531__auto__ = (function (){var switch__18465__auto__ = ((function (c__18530__auto__){
return (function (state_26816){
var state_val_26817 = (state_26816[(1)]);
if((state_val_26817 === (7))){
var inst_26798 = (state_26816[(2)]);
var state_26816__$1 = state_26816;
var statearr_26818_26845 = state_26816__$1;
(statearr_26818_26845[(2)] = inst_26798);

(statearr_26818_26845[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26817 === (1))){
var inst_26792 = cljs.core.seq.call(null,coll);
var inst_26793 = inst_26792;
var state_26816__$1 = (function (){var statearr_26819 = state_26816;
(statearr_26819[(7)] = inst_26793);

return statearr_26819;
})();
var statearr_26820_26846 = state_26816__$1;
(statearr_26820_26846[(2)] = null);

(statearr_26820_26846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26817 === (4))){
var inst_26793 = (state_26816[(7)]);
var inst_26796 = cljs.core.first.call(null,inst_26793);
var state_26816__$1 = state_26816;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26816__$1,(7),ch,inst_26796);
} else {
if((state_val_26817 === (13))){
var inst_26810 = (state_26816[(2)]);
var state_26816__$1 = state_26816;
var statearr_26821_26847 = state_26816__$1;
(statearr_26821_26847[(2)] = inst_26810);

(statearr_26821_26847[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26817 === (6))){
var inst_26801 = (state_26816[(2)]);
var state_26816__$1 = state_26816;
if(cljs.core.truth_(inst_26801)){
var statearr_26822_26848 = state_26816__$1;
(statearr_26822_26848[(1)] = (8));

} else {
var statearr_26823_26849 = state_26816__$1;
(statearr_26823_26849[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26817 === (3))){
var inst_26814 = (state_26816[(2)]);
var state_26816__$1 = state_26816;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26816__$1,inst_26814);
} else {
if((state_val_26817 === (12))){
var state_26816__$1 = state_26816;
var statearr_26824_26850 = state_26816__$1;
(statearr_26824_26850[(2)] = null);

(statearr_26824_26850[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26817 === (2))){
var inst_26793 = (state_26816[(7)]);
var state_26816__$1 = state_26816;
if(cljs.core.truth_(inst_26793)){
var statearr_26825_26851 = state_26816__$1;
(statearr_26825_26851[(1)] = (4));

} else {
var statearr_26826_26852 = state_26816__$1;
(statearr_26826_26852[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26817 === (11))){
var inst_26807 = cljs.core.async.close_BANG_.call(null,ch);
var state_26816__$1 = state_26816;
var statearr_26827_26853 = state_26816__$1;
(statearr_26827_26853[(2)] = inst_26807);

(statearr_26827_26853[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26817 === (9))){
var state_26816__$1 = state_26816;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26828_26854 = state_26816__$1;
(statearr_26828_26854[(1)] = (11));

} else {
var statearr_26829_26855 = state_26816__$1;
(statearr_26829_26855[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26817 === (5))){
var inst_26793 = (state_26816[(7)]);
var state_26816__$1 = state_26816;
var statearr_26830_26856 = state_26816__$1;
(statearr_26830_26856[(2)] = inst_26793);

(statearr_26830_26856[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26817 === (10))){
var inst_26812 = (state_26816[(2)]);
var state_26816__$1 = state_26816;
var statearr_26831_26857 = state_26816__$1;
(statearr_26831_26857[(2)] = inst_26812);

(statearr_26831_26857[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26817 === (8))){
var inst_26793 = (state_26816[(7)]);
var inst_26803 = cljs.core.next.call(null,inst_26793);
var inst_26793__$1 = inst_26803;
var state_26816__$1 = (function (){var statearr_26832 = state_26816;
(statearr_26832[(7)] = inst_26793__$1);

return statearr_26832;
})();
var statearr_26833_26858 = state_26816__$1;
(statearr_26833_26858[(2)] = null);

(statearr_26833_26858[(1)] = (2));


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
});})(c__18530__auto__))
;
return ((function (switch__18465__auto__,c__18530__auto__){
return (function() {
var cljs$core$async$state_machine__18466__auto__ = null;
var cljs$core$async$state_machine__18466__auto____0 = (function (){
var statearr_26837 = [null,null,null,null,null,null,null,null];
(statearr_26837[(0)] = cljs$core$async$state_machine__18466__auto__);

(statearr_26837[(1)] = (1));

return statearr_26837;
});
var cljs$core$async$state_machine__18466__auto____1 = (function (state_26816){
while(true){
var ret_value__18467__auto__ = (function (){try{while(true){
var result__18468__auto__ = switch__18465__auto__.call(null,state_26816);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18468__auto__;
}
break;
}
}catch (e26838){if((e26838 instanceof Object)){
var ex__18469__auto__ = e26838;
var statearr_26839_26859 = state_26816;
(statearr_26839_26859[(5)] = ex__18469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26816);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26838;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26860 = state_26816;
state_26816 = G__26860;
continue;
} else {
return ret_value__18467__auto__;
}
break;
}
});
cljs$core$async$state_machine__18466__auto__ = function(state_26816){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18466__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18466__auto____1.call(this,state_26816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18466__auto____0;
cljs$core$async$state_machine__18466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18466__auto____1;
return cljs$core$async$state_machine__18466__auto__;
})()
;})(switch__18465__auto__,c__18530__auto__))
})();
var state__18532__auto__ = (function (){var statearr_26840 = f__18531__auto__.call(null);
(statearr_26840[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18530__auto__);

return statearr_26840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18532__auto__);
});})(c__18530__auto__))
);

return c__18530__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17102__auto__ = (((_ == null))?null:_);
var m__17103__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17102__auto__)]);
if(!((m__17103__auto__ == null))){
return m__17103__auto__.call(null,_);
} else {
var m__17103__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17103__auto____$1 == null))){
return m__17103__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17102__auto__ = (((m == null))?null:m);
var m__17103__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17102__auto__)]);
if(!((m__17103__auto__ == null))){
return m__17103__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17103__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17103__auto____$1 == null))){
return m__17103__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17102__auto__ = (((m == null))?null:m);
var m__17103__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17102__auto__)]);
if(!((m__17103__auto__ == null))){
return m__17103__auto__.call(null,m,ch);
} else {
var m__17103__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17103__auto____$1 == null))){
return m__17103__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17102__auto__ = (((m == null))?null:m);
var m__17103__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17102__auto__)]);
if(!((m__17103__auto__ == null))){
return m__17103__auto__.call(null,m);
} else {
var m__17103__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17103__auto____$1 == null))){
return m__17103__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async27082 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27082 = (function (mult,ch,cs,meta27083){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta27083 = meta27083;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27082.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27084,meta27083__$1){
var self__ = this;
var _27084__$1 = this;
return (new cljs.core.async.t_cljs$core$async27082(self__.mult,self__.ch,self__.cs,meta27083__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async27082.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27084){
var self__ = this;
var _27084__$1 = this;
return self__.meta27083;
});})(cs))
;

cljs.core.async.t_cljs$core$async27082.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async27082.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async27082.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async27082.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27082.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27082.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27082.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta27083","meta27083",-1526837111,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async27082.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27082.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27082";

cljs.core.async.t_cljs$core$async27082.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17045__auto__,writer__17046__auto__,opt__17047__auto__){
return cljs.core._write.call(null,writer__17046__auto__,"cljs.core.async/t_cljs$core$async27082");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async27082 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async27082(mult__$1,ch__$1,cs__$1,meta27083){
return (new cljs.core.async.t_cljs$core$async27082(mult__$1,ch__$1,cs__$1,meta27083));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async27082(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__18530__auto___27303 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18530__auto___27303,cs,m,dchan,dctr,done){
return (function (){
var f__18531__auto__ = (function (){var switch__18465__auto__ = ((function (c__18530__auto___27303,cs,m,dchan,dctr,done){
return (function (state_27215){
var state_val_27216 = (state_27215[(1)]);
if((state_val_27216 === (7))){
var inst_27211 = (state_27215[(2)]);
var state_27215__$1 = state_27215;
var statearr_27217_27304 = state_27215__$1;
(statearr_27217_27304[(2)] = inst_27211);

(statearr_27217_27304[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27216 === (20))){
var inst_27116 = (state_27215[(7)]);
var inst_27126 = cljs.core.first.call(null,inst_27116);
var inst_27127 = cljs.core.nth.call(null,inst_27126,(0),null);
var inst_27128 = cljs.core.nth.call(null,inst_27126,(1),null);
var state_27215__$1 = (function (){var statearr_27218 = state_27215;
(statearr_27218[(8)] = inst_27127);

return statearr_27218;
})();
if(cljs.core.truth_(inst_27128)){
var statearr_27219_27305 = state_27215__$1;
(statearr_27219_27305[(1)] = (22));

} else {
var statearr_27220_27306 = state_27215__$1;
(statearr_27220_27306[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27216 === (27))){
var inst_27087 = (state_27215[(9)]);
var inst_27163 = (state_27215[(10)]);
var inst_27158 = (state_27215[(11)]);
var inst_27156 = (state_27215[(12)]);
var inst_27163__$1 = cljs.core._nth.call(null,inst_27156,inst_27158);
var inst_27164 = cljs.core.async.put_BANG_.call(null,inst_27163__$1,inst_27087,done);
var state_27215__$1 = (function (){var statearr_27221 = state_27215;
(statearr_27221[(10)] = inst_27163__$1);

return statearr_27221;
})();
if(cljs.core.truth_(inst_27164)){
var statearr_27222_27307 = state_27215__$1;
(statearr_27222_27307[(1)] = (30));

} else {
var statearr_27223_27308 = state_27215__$1;
(statearr_27223_27308[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27216 === (1))){
var state_27215__$1 = state_27215;
var statearr_27224_27309 = state_27215__$1;
(statearr_27224_27309[(2)] = null);

(statearr_27224_27309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27216 === (24))){
var inst_27116 = (state_27215[(7)]);
var inst_27133 = (state_27215[(2)]);
var inst_27134 = cljs.core.next.call(null,inst_27116);
var inst_27096 = inst_27134;
var inst_27097 = null;
var inst_27098 = (0);
var inst_27099 = (0);
var state_27215__$1 = (function (){var statearr_27225 = state_27215;
(statearr_27225[(13)] = inst_27133);

(statearr_27225[(14)] = inst_27096);

(statearr_27225[(15)] = inst_27097);

(statearr_27225[(16)] = inst_27099);

(statearr_27225[(17)] = inst_27098);

return statearr_27225;
})();
var statearr_27226_27310 = state_27215__$1;
(statearr_27226_27310[(2)] = null);

(statearr_27226_27310[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27216 === (39))){
var state_27215__$1 = state_27215;
var statearr_27230_27311 = state_27215__$1;
(statearr_27230_27311[(2)] = null);

(statearr_27230_27311[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27216 === (4))){
var inst_27087 = (state_27215[(9)]);
var inst_27087__$1 = (state_27215[(2)]);
var inst_27088 = (inst_27087__$1 == null);
var state_27215__$1 = (function (){var statearr_27231 = state_27215;
(statearr_27231[(9)] = inst_27087__$1);

return statearr_27231;
})();
if(cljs.core.truth_(inst_27088)){
var statearr_27232_27312 = state_27215__$1;
(statearr_27232_27312[(1)] = (5));

} else {
var statearr_27233_27313 = state_27215__$1;
(statearr_27233_27313[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27216 === (15))){
var inst_27096 = (state_27215[(14)]);
var inst_27097 = (state_27215[(15)]);
var inst_27099 = (state_27215[(16)]);
var inst_27098 = (state_27215[(17)]);
var inst_27112 = (state_27215[(2)]);
var inst_27113 = (inst_27099 + (1));
var tmp27227 = inst_27096;
var tmp27228 = inst_27097;
var tmp27229 = inst_27098;
var inst_27096__$1 = tmp27227;
var inst_27097__$1 = tmp27228;
var inst_27098__$1 = tmp27229;
var inst_27099__$1 = inst_27113;
var state_27215__$1 = (function (){var statearr_27234 = state_27215;
(statearr_27234[(18)] = inst_27112);

(statearr_27234[(14)] = inst_27096__$1);

(statearr_27234[(15)] = inst_27097__$1);

(statearr_27234[(16)] = inst_27099__$1);

(statearr_27234[(17)] = inst_27098__$1);

return statearr_27234;
})();
var statearr_27235_27314 = state_27215__$1;
(statearr_27235_27314[(2)] = null);

(statearr_27235_27314[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27216 === (21))){
var inst_27137 = (state_27215[(2)]);
var state_27215__$1 = state_27215;
var statearr_27239_27315 = state_27215__$1;
(statearr_27239_27315[(2)] = inst_27137);

(statearr_27239_27315[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27216 === (31))){
var inst_27163 = (state_27215[(10)]);
var inst_27167 = done.call(null,null);
var inst_27168 = cljs.core.async.untap_STAR_.call(null,m,inst_27163);
var state_27215__$1 = (function (){var statearr_27240 = state_27215;
(statearr_27240[(19)] = inst_27167);

return statearr_27240;
})();
var statearr_27241_27316 = state_27215__$1;
(statearr_27241_27316[(2)] = inst_27168);

(statearr_27241_27316[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27216 === (32))){
var inst_27155 = (state_27215[(20)]);
var inst_27158 = (state_27215[(11)]);
var inst_27157 = (state_27215[(21)]);
var inst_27156 = (state_27215[(12)]);
var inst_27170 = (state_27215[(2)]);
var inst_27171 = (inst_27158 + (1));
var tmp27236 = inst_27155;
var tmp27237 = inst_27157;
var tmp27238 = inst_27156;
var inst_27155__$1 = tmp27236;
var inst_27156__$1 = tmp27238;
var inst_27157__$1 = tmp27237;
var inst_27158__$1 = inst_27171;
var state_27215__$1 = (function (){var statearr_27242 = state_27215;
(statearr_27242[(20)] = inst_27155__$1);

(statearr_27242[(11)] = inst_27158__$1);

(statearr_27242[(22)] = inst_27170);

(statearr_27242[(21)] = inst_27157__$1);

(statearr_27242[(12)] = inst_27156__$1);

return statearr_27242;
})();
var statearr_27243_27317 = state_27215__$1;
(statearr_27243_27317[(2)] = null);

(statearr_27243_27317[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27216 === (40))){
var inst_27183 = (state_27215[(23)]);
var inst_27187 = done.call(null,null);
var inst_27188 = cljs.core.async.untap_STAR_.call(null,m,inst_27183);
var state_27215__$1 = (function (){var statearr_27244 = state_27215;
(statearr_27244[(24)] = inst_27187);

return statearr_27244;
})();
var statearr_27245_27318 = state_27215__$1;
(statearr_27245_27318[(2)] = inst_27188);

(statearr_27245_27318[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27216 === (33))){
var inst_27174 = (state_27215[(25)]);
var inst_27176 = cljs.core.chunked_seq_QMARK_.call(null,inst_27174);
var state_27215__$1 = state_27215;
if(inst_27176){
var statearr_27246_27319 = state_27215__$1;
(statearr_27246_27319[(1)] = (36));

} else {
var statearr_27247_27320 = state_27215__$1;
(statearr_27247_27320[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27216 === (13))){
var inst_27106 = (state_27215[(26)]);
var inst_27109 = cljs.core.async.close_BANG_.call(null,inst_27106);
var state_27215__$1 = state_27215;
var statearr_27248_27321 = state_27215__$1;
(statearr_27248_27321[(2)] = inst_27109);

(statearr_27248_27321[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27216 === (22))){
var inst_27127 = (state_27215[(8)]);
var inst_27130 = cljs.core.async.close_BANG_.call(null,inst_27127);
var state_27215__$1 = state_27215;
var statearr_27249_27322 = state_27215__$1;
(statearr_27249_27322[(2)] = inst_27130);

(statearr_27249_27322[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27216 === (36))){
var inst_27174 = (state_27215[(25)]);
var inst_27178 = cljs.core.chunk_first.call(null,inst_27174);
var inst_27179 = cljs.core.chunk_rest.call(null,inst_27174);
var inst_27180 = cljs.core.count.call(null,inst_27178);
var inst_27155 = inst_27179;
var inst_27156 = inst_27178;
var inst_27157 = inst_27180;
var inst_27158 = (0);
var state_27215__$1 = (function (){var statearr_27250 = state_27215;
(statearr_27250[(20)] = inst_27155);

(statearr_27250[(11)] = inst_27158);

(statearr_27250[(21)] = inst_27157);

(statearr_27250[(12)] = inst_27156);

return statearr_27250;
})();
var statearr_27251_27323 = state_27215__$1;
(statearr_27251_27323[(2)] = null);

(statearr_27251_27323[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27216 === (41))){
var inst_27174 = (state_27215[(25)]);
var inst_27190 = (state_27215[(2)]);
var inst_27191 = cljs.core.next.call(null,inst_27174);
var inst_27155 = inst_27191;
var inst_27156 = null;
var inst_27157 = (0);
var inst_27158 = (0);
var state_27215__$1 = (function (){var statearr_27252 = state_27215;
(statearr_27252[(20)] = inst_27155);

(statearr_27252[(27)] = inst_27190);

(statearr_27252[(11)] = inst_27158);

(statearr_27252[(21)] = inst_27157);

(statearr_27252[(12)] = inst_27156);

return statearr_27252;
})();
var statearr_27253_27324 = state_27215__$1;
(statearr_27253_27324[(2)] = null);

(statearr_27253_27324[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27216 === (43))){
var state_27215__$1 = state_27215;
var statearr_27254_27325 = state_27215__$1;
(statearr_27254_27325[(2)] = null);

(statearr_27254_27325[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27216 === (29))){
var inst_27199 = (state_27215[(2)]);
var state_27215__$1 = state_27215;
var statearr_27255_27326 = state_27215__$1;
(statearr_27255_27326[(2)] = inst_27199);

(statearr_27255_27326[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27216 === (44))){
var inst_27208 = (state_27215[(2)]);
var state_27215__$1 = (function (){var statearr_27256 = state_27215;
(statearr_27256[(28)] = inst_27208);

return statearr_27256;
})();
var statearr_27257_27327 = state_27215__$1;
(statearr_27257_27327[(2)] = null);

(statearr_27257_27327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27216 === (6))){
var inst_27147 = (state_27215[(29)]);
var inst_27146 = cljs.core.deref.call(null,cs);
var inst_27147__$1 = cljs.core.keys.call(null,inst_27146);
var inst_27148 = cljs.core.count.call(null,inst_27147__$1);
var inst_27149 = cljs.core.reset_BANG_.call(null,dctr,inst_27148);
var inst_27154 = cljs.core.seq.call(null,inst_27147__$1);
var inst_27155 = inst_27154;
var inst_27156 = null;
var inst_27157 = (0);
var inst_27158 = (0);
var state_27215__$1 = (function (){var statearr_27258 = state_27215;
(statearr_27258[(20)] = inst_27155);

(statearr_27258[(30)] = inst_27149);

(statearr_27258[(11)] = inst_27158);

(statearr_27258[(29)] = inst_27147__$1);

(statearr_27258[(21)] = inst_27157);

(statearr_27258[(12)] = inst_27156);

return statearr_27258;
})();
var statearr_27259_27328 = state_27215__$1;
(statearr_27259_27328[(2)] = null);

(statearr_27259_27328[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27216 === (28))){
var inst_27155 = (state_27215[(20)]);
var inst_27174 = (state_27215[(25)]);
var inst_27174__$1 = cljs.core.seq.call(null,inst_27155);
var state_27215__$1 = (function (){var statearr_27260 = state_27215;
(statearr_27260[(25)] = inst_27174__$1);

return statearr_27260;
})();
if(inst_27174__$1){
var statearr_27261_27329 = state_27215__$1;
(statearr_27261_27329[(1)] = (33));

} else {
var statearr_27262_27330 = state_27215__$1;
(statearr_27262_27330[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27216 === (25))){
var inst_27158 = (state_27215[(11)]);
var inst_27157 = (state_27215[(21)]);
var inst_27160 = (inst_27158 < inst_27157);
var inst_27161 = inst_27160;
var state_27215__$1 = state_27215;
if(cljs.core.truth_(inst_27161)){
var statearr_27263_27331 = state_27215__$1;
(statearr_27263_27331[(1)] = (27));

} else {
var statearr_27264_27332 = state_27215__$1;
(statearr_27264_27332[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27216 === (34))){
var state_27215__$1 = state_27215;
var statearr_27265_27333 = state_27215__$1;
(statearr_27265_27333[(2)] = null);

(statearr_27265_27333[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27216 === (17))){
var state_27215__$1 = state_27215;
var statearr_27266_27334 = state_27215__$1;
(statearr_27266_27334[(2)] = null);

(statearr_27266_27334[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27216 === (3))){
var inst_27213 = (state_27215[(2)]);
var state_27215__$1 = state_27215;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27215__$1,inst_27213);
} else {
if((state_val_27216 === (12))){
var inst_27142 = (state_27215[(2)]);
var state_27215__$1 = state_27215;
var statearr_27267_27335 = state_27215__$1;
(statearr_27267_27335[(2)] = inst_27142);

(statearr_27267_27335[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27216 === (2))){
var state_27215__$1 = state_27215;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27215__$1,(4),ch);
} else {
if((state_val_27216 === (23))){
var state_27215__$1 = state_27215;
var statearr_27268_27336 = state_27215__$1;
(statearr_27268_27336[(2)] = null);

(statearr_27268_27336[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27216 === (35))){
var inst_27197 = (state_27215[(2)]);
var state_27215__$1 = state_27215;
var statearr_27269_27337 = state_27215__$1;
(statearr_27269_27337[(2)] = inst_27197);

(statearr_27269_27337[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27216 === (19))){
var inst_27116 = (state_27215[(7)]);
var inst_27120 = cljs.core.chunk_first.call(null,inst_27116);
var inst_27121 = cljs.core.chunk_rest.call(null,inst_27116);
var inst_27122 = cljs.core.count.call(null,inst_27120);
var inst_27096 = inst_27121;
var inst_27097 = inst_27120;
var inst_27098 = inst_27122;
var inst_27099 = (0);
var state_27215__$1 = (function (){var statearr_27270 = state_27215;
(statearr_27270[(14)] = inst_27096);

(statearr_27270[(15)] = inst_27097);

(statearr_27270[(16)] = inst_27099);

(statearr_27270[(17)] = inst_27098);

return statearr_27270;
})();
var statearr_27271_27338 = state_27215__$1;
(statearr_27271_27338[(2)] = null);

(statearr_27271_27338[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27216 === (11))){
var inst_27116 = (state_27215[(7)]);
var inst_27096 = (state_27215[(14)]);
var inst_27116__$1 = cljs.core.seq.call(null,inst_27096);
var state_27215__$1 = (function (){var statearr_27272 = state_27215;
(statearr_27272[(7)] = inst_27116__$1);

return statearr_27272;
})();
if(inst_27116__$1){
var statearr_27273_27339 = state_27215__$1;
(statearr_27273_27339[(1)] = (16));

} else {
var statearr_27274_27340 = state_27215__$1;
(statearr_27274_27340[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27216 === (9))){
var inst_27144 = (state_27215[(2)]);
var state_27215__$1 = state_27215;
var statearr_27275_27341 = state_27215__$1;
(statearr_27275_27341[(2)] = inst_27144);

(statearr_27275_27341[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27216 === (5))){
var inst_27094 = cljs.core.deref.call(null,cs);
var inst_27095 = cljs.core.seq.call(null,inst_27094);
var inst_27096 = inst_27095;
var inst_27097 = null;
var inst_27098 = (0);
var inst_27099 = (0);
var state_27215__$1 = (function (){var statearr_27276 = state_27215;
(statearr_27276[(14)] = inst_27096);

(statearr_27276[(15)] = inst_27097);

(statearr_27276[(16)] = inst_27099);

(statearr_27276[(17)] = inst_27098);

return statearr_27276;
})();
var statearr_27277_27342 = state_27215__$1;
(statearr_27277_27342[(2)] = null);

(statearr_27277_27342[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27216 === (14))){
var state_27215__$1 = state_27215;
var statearr_27278_27343 = state_27215__$1;
(statearr_27278_27343[(2)] = null);

(statearr_27278_27343[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27216 === (45))){
var inst_27205 = (state_27215[(2)]);
var state_27215__$1 = state_27215;
var statearr_27279_27344 = state_27215__$1;
(statearr_27279_27344[(2)] = inst_27205);

(statearr_27279_27344[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27216 === (26))){
var inst_27147 = (state_27215[(29)]);
var inst_27201 = (state_27215[(2)]);
var inst_27202 = cljs.core.seq.call(null,inst_27147);
var state_27215__$1 = (function (){var statearr_27280 = state_27215;
(statearr_27280[(31)] = inst_27201);

return statearr_27280;
})();
if(inst_27202){
var statearr_27281_27345 = state_27215__$1;
(statearr_27281_27345[(1)] = (42));

} else {
var statearr_27282_27346 = state_27215__$1;
(statearr_27282_27346[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27216 === (16))){
var inst_27116 = (state_27215[(7)]);
var inst_27118 = cljs.core.chunked_seq_QMARK_.call(null,inst_27116);
var state_27215__$1 = state_27215;
if(inst_27118){
var statearr_27283_27347 = state_27215__$1;
(statearr_27283_27347[(1)] = (19));

} else {
var statearr_27284_27348 = state_27215__$1;
(statearr_27284_27348[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27216 === (38))){
var inst_27194 = (state_27215[(2)]);
var state_27215__$1 = state_27215;
var statearr_27285_27349 = state_27215__$1;
(statearr_27285_27349[(2)] = inst_27194);

(statearr_27285_27349[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27216 === (30))){
var state_27215__$1 = state_27215;
var statearr_27286_27350 = state_27215__$1;
(statearr_27286_27350[(2)] = null);

(statearr_27286_27350[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27216 === (10))){
var inst_27097 = (state_27215[(15)]);
var inst_27099 = (state_27215[(16)]);
var inst_27105 = cljs.core._nth.call(null,inst_27097,inst_27099);
var inst_27106 = cljs.core.nth.call(null,inst_27105,(0),null);
var inst_27107 = cljs.core.nth.call(null,inst_27105,(1),null);
var state_27215__$1 = (function (){var statearr_27287 = state_27215;
(statearr_27287[(26)] = inst_27106);

return statearr_27287;
})();
if(cljs.core.truth_(inst_27107)){
var statearr_27288_27351 = state_27215__$1;
(statearr_27288_27351[(1)] = (13));

} else {
var statearr_27289_27352 = state_27215__$1;
(statearr_27289_27352[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27216 === (18))){
var inst_27140 = (state_27215[(2)]);
var state_27215__$1 = state_27215;
var statearr_27290_27353 = state_27215__$1;
(statearr_27290_27353[(2)] = inst_27140);

(statearr_27290_27353[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27216 === (42))){
var state_27215__$1 = state_27215;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27215__$1,(45),dchan);
} else {
if((state_val_27216 === (37))){
var inst_27087 = (state_27215[(9)]);
var inst_27174 = (state_27215[(25)]);
var inst_27183 = (state_27215[(23)]);
var inst_27183__$1 = cljs.core.first.call(null,inst_27174);
var inst_27184 = cljs.core.async.put_BANG_.call(null,inst_27183__$1,inst_27087,done);
var state_27215__$1 = (function (){var statearr_27291 = state_27215;
(statearr_27291[(23)] = inst_27183__$1);

return statearr_27291;
})();
if(cljs.core.truth_(inst_27184)){
var statearr_27292_27354 = state_27215__$1;
(statearr_27292_27354[(1)] = (39));

} else {
var statearr_27293_27355 = state_27215__$1;
(statearr_27293_27355[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27216 === (8))){
var inst_27099 = (state_27215[(16)]);
var inst_27098 = (state_27215[(17)]);
var inst_27101 = (inst_27099 < inst_27098);
var inst_27102 = inst_27101;
var state_27215__$1 = state_27215;
if(cljs.core.truth_(inst_27102)){
var statearr_27294_27356 = state_27215__$1;
(statearr_27294_27356[(1)] = (10));

} else {
var statearr_27295_27357 = state_27215__$1;
(statearr_27295_27357[(1)] = (11));

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
});})(c__18530__auto___27303,cs,m,dchan,dctr,done))
;
return ((function (switch__18465__auto__,c__18530__auto___27303,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__18466__auto__ = null;
var cljs$core$async$mult_$_state_machine__18466__auto____0 = (function (){
var statearr_27299 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27299[(0)] = cljs$core$async$mult_$_state_machine__18466__auto__);

(statearr_27299[(1)] = (1));

return statearr_27299;
});
var cljs$core$async$mult_$_state_machine__18466__auto____1 = (function (state_27215){
while(true){
var ret_value__18467__auto__ = (function (){try{while(true){
var result__18468__auto__ = switch__18465__auto__.call(null,state_27215);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18468__auto__;
}
break;
}
}catch (e27300){if((e27300 instanceof Object)){
var ex__18469__auto__ = e27300;
var statearr_27301_27358 = state_27215;
(statearr_27301_27358[(5)] = ex__18469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27215);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27300;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27359 = state_27215;
state_27215 = G__27359;
continue;
} else {
return ret_value__18467__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__18466__auto__ = function(state_27215){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__18466__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__18466__auto____1.call(this,state_27215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__18466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__18466__auto____0;
cljs$core$async$mult_$_state_machine__18466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__18466__auto____1;
return cljs$core$async$mult_$_state_machine__18466__auto__;
})()
;})(switch__18465__auto__,c__18530__auto___27303,cs,m,dchan,dctr,done))
})();
var state__18532__auto__ = (function (){var statearr_27302 = f__18531__auto__.call(null);
(statearr_27302[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18530__auto___27303);

return statearr_27302;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18532__auto__);
});})(c__18530__auto___27303,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args27360 = [];
var len__17505__auto___27363 = arguments.length;
var i__17506__auto___27364 = (0);
while(true){
if((i__17506__auto___27364 < len__17505__auto___27363)){
args27360.push((arguments[i__17506__auto___27364]));

var G__27365 = (i__17506__auto___27364 + (1));
i__17506__auto___27364 = G__27365;
continue;
} else {
}
break;
}

var G__27362 = args27360.length;
switch (G__27362) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27360.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17102__auto__ = (((m == null))?null:m);
var m__17103__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17102__auto__)]);
if(!((m__17103__auto__ == null))){
return m__17103__auto__.call(null,m,ch);
} else {
var m__17103__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17103__auto____$1 == null))){
return m__17103__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17102__auto__ = (((m == null))?null:m);
var m__17103__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17102__auto__)]);
if(!((m__17103__auto__ == null))){
return m__17103__auto__.call(null,m,ch);
} else {
var m__17103__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17103__auto____$1 == null))){
return m__17103__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17102__auto__ = (((m == null))?null:m);
var m__17103__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17102__auto__)]);
if(!((m__17103__auto__ == null))){
return m__17103__auto__.call(null,m);
} else {
var m__17103__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17103__auto____$1 == null))){
return m__17103__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17102__auto__ = (((m == null))?null:m);
var m__17103__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17102__auto__)]);
if(!((m__17103__auto__ == null))){
return m__17103__auto__.call(null,m,state_map);
} else {
var m__17103__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17103__auto____$1 == null))){
return m__17103__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17102__auto__ = (((m == null))?null:m);
var m__17103__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17102__auto__)]);
if(!((m__17103__auto__ == null))){
return m__17103__auto__.call(null,m,mode);
} else {
var m__17103__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17103__auto____$1 == null))){
return m__17103__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17512__auto__ = [];
var len__17505__auto___27377 = arguments.length;
var i__17506__auto___27378 = (0);
while(true){
if((i__17506__auto___27378 < len__17505__auto___27377)){
args__17512__auto__.push((arguments[i__17506__auto___27378]));

var G__27379 = (i__17506__auto___27378 + (1));
i__17506__auto___27378 = G__27379;
continue;
} else {
}
break;
}

var argseq__17513__auto__ = ((((3) < args__17512__auto__.length))?(new cljs.core.IndexedSeq(args__17512__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17513__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27371){
var map__27372 = p__27371;
var map__27372__$1 = ((((!((map__27372 == null)))?((((map__27372.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27372.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27372):map__27372);
var opts = map__27372__$1;
var statearr_27374_27380 = state;
(statearr_27374_27380[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__27372,map__27372__$1,opts){
return (function (val){
var statearr_27375_27381 = state;
(statearr_27375_27381[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__27372,map__27372__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_27376_27382 = state;
(statearr_27376_27382[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27367){
var G__27368 = cljs.core.first.call(null,seq27367);
var seq27367__$1 = cljs.core.next.call(null,seq27367);
var G__27369 = cljs.core.first.call(null,seq27367__$1);
var seq27367__$2 = cljs.core.next.call(null,seq27367__$1);
var G__27370 = cljs.core.first.call(null,seq27367__$2);
var seq27367__$3 = cljs.core.next.call(null,seq27367__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27368,G__27369,G__27370,seq27367__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async27546 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27546 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta27547){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta27547 = meta27547;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27546.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27548,meta27547__$1){
var self__ = this;
var _27548__$1 = this;
return (new cljs.core.async.t_cljs$core$async27546(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta27547__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27546.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27548){
var self__ = this;
var _27548__$1 = this;
return self__.meta27547;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27546.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async27546.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27546.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async27546.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27546.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27546.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27546.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27546.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27546.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta27547","meta27547",-152458847,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27546.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27546.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27546";

cljs.core.async.t_cljs$core$async27546.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17045__auto__,writer__17046__auto__,opt__17047__auto__){
return cljs.core._write.call(null,writer__17046__auto__,"cljs.core.async/t_cljs$core$async27546");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async27546 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async27546(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27547){
return (new cljs.core.async.t_cljs$core$async27546(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27547));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async27546(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18530__auto___27709 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18530__auto___27709,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__18531__auto__ = (function (){var switch__18465__auto__ = ((function (c__18530__auto___27709,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27646){
var state_val_27647 = (state_27646[(1)]);
if((state_val_27647 === (7))){
var inst_27564 = (state_27646[(2)]);
var state_27646__$1 = state_27646;
var statearr_27648_27710 = state_27646__$1;
(statearr_27648_27710[(2)] = inst_27564);

(statearr_27648_27710[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27647 === (20))){
var inst_27576 = (state_27646[(7)]);
var state_27646__$1 = state_27646;
var statearr_27649_27711 = state_27646__$1;
(statearr_27649_27711[(2)] = inst_27576);

(statearr_27649_27711[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27647 === (27))){
var state_27646__$1 = state_27646;
var statearr_27650_27712 = state_27646__$1;
(statearr_27650_27712[(2)] = null);

(statearr_27650_27712[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27647 === (1))){
var inst_27552 = (state_27646[(8)]);
var inst_27552__$1 = calc_state.call(null);
var inst_27554 = (inst_27552__$1 == null);
var inst_27555 = cljs.core.not.call(null,inst_27554);
var state_27646__$1 = (function (){var statearr_27651 = state_27646;
(statearr_27651[(8)] = inst_27552__$1);

return statearr_27651;
})();
if(inst_27555){
var statearr_27652_27713 = state_27646__$1;
(statearr_27652_27713[(1)] = (2));

} else {
var statearr_27653_27714 = state_27646__$1;
(statearr_27653_27714[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27647 === (24))){
var inst_27599 = (state_27646[(9)]);
var inst_27606 = (state_27646[(10)]);
var inst_27620 = (state_27646[(11)]);
var inst_27620__$1 = inst_27599.call(null,inst_27606);
var state_27646__$1 = (function (){var statearr_27654 = state_27646;
(statearr_27654[(11)] = inst_27620__$1);

return statearr_27654;
})();
if(cljs.core.truth_(inst_27620__$1)){
var statearr_27655_27715 = state_27646__$1;
(statearr_27655_27715[(1)] = (29));

} else {
var statearr_27656_27716 = state_27646__$1;
(statearr_27656_27716[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27647 === (4))){
var inst_27567 = (state_27646[(2)]);
var state_27646__$1 = state_27646;
if(cljs.core.truth_(inst_27567)){
var statearr_27657_27717 = state_27646__$1;
(statearr_27657_27717[(1)] = (8));

} else {
var statearr_27658_27718 = state_27646__$1;
(statearr_27658_27718[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27647 === (15))){
var inst_27593 = (state_27646[(2)]);
var state_27646__$1 = state_27646;
if(cljs.core.truth_(inst_27593)){
var statearr_27659_27719 = state_27646__$1;
(statearr_27659_27719[(1)] = (19));

} else {
var statearr_27660_27720 = state_27646__$1;
(statearr_27660_27720[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27647 === (21))){
var inst_27598 = (state_27646[(12)]);
var inst_27598__$1 = (state_27646[(2)]);
var inst_27599 = cljs.core.get.call(null,inst_27598__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27600 = cljs.core.get.call(null,inst_27598__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27601 = cljs.core.get.call(null,inst_27598__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_27646__$1 = (function (){var statearr_27661 = state_27646;
(statearr_27661[(9)] = inst_27599);

(statearr_27661[(12)] = inst_27598__$1);

(statearr_27661[(13)] = inst_27600);

return statearr_27661;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27646__$1,(22),inst_27601);
} else {
if((state_val_27647 === (31))){
var inst_27628 = (state_27646[(2)]);
var state_27646__$1 = state_27646;
if(cljs.core.truth_(inst_27628)){
var statearr_27662_27721 = state_27646__$1;
(statearr_27662_27721[(1)] = (32));

} else {
var statearr_27663_27722 = state_27646__$1;
(statearr_27663_27722[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27647 === (32))){
var inst_27605 = (state_27646[(14)]);
var state_27646__$1 = state_27646;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27646__$1,(35),out,inst_27605);
} else {
if((state_val_27647 === (33))){
var inst_27598 = (state_27646[(12)]);
var inst_27576 = inst_27598;
var state_27646__$1 = (function (){var statearr_27664 = state_27646;
(statearr_27664[(7)] = inst_27576);

return statearr_27664;
})();
var statearr_27665_27723 = state_27646__$1;
(statearr_27665_27723[(2)] = null);

(statearr_27665_27723[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27647 === (13))){
var inst_27576 = (state_27646[(7)]);
var inst_27583 = inst_27576.cljs$lang$protocol_mask$partition0$;
var inst_27584 = (inst_27583 & (64));
var inst_27585 = inst_27576.cljs$core$ISeq$;
var inst_27586 = (inst_27584) || (inst_27585);
var state_27646__$1 = state_27646;
if(cljs.core.truth_(inst_27586)){
var statearr_27666_27724 = state_27646__$1;
(statearr_27666_27724[(1)] = (16));

} else {
var statearr_27667_27725 = state_27646__$1;
(statearr_27667_27725[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27647 === (22))){
var inst_27605 = (state_27646[(14)]);
var inst_27606 = (state_27646[(10)]);
var inst_27604 = (state_27646[(2)]);
var inst_27605__$1 = cljs.core.nth.call(null,inst_27604,(0),null);
var inst_27606__$1 = cljs.core.nth.call(null,inst_27604,(1),null);
var inst_27607 = (inst_27605__$1 == null);
var inst_27608 = cljs.core._EQ_.call(null,inst_27606__$1,change);
var inst_27609 = (inst_27607) || (inst_27608);
var state_27646__$1 = (function (){var statearr_27668 = state_27646;
(statearr_27668[(14)] = inst_27605__$1);

(statearr_27668[(10)] = inst_27606__$1);

return statearr_27668;
})();
if(cljs.core.truth_(inst_27609)){
var statearr_27669_27726 = state_27646__$1;
(statearr_27669_27726[(1)] = (23));

} else {
var statearr_27670_27727 = state_27646__$1;
(statearr_27670_27727[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27647 === (36))){
var inst_27598 = (state_27646[(12)]);
var inst_27576 = inst_27598;
var state_27646__$1 = (function (){var statearr_27671 = state_27646;
(statearr_27671[(7)] = inst_27576);

return statearr_27671;
})();
var statearr_27672_27728 = state_27646__$1;
(statearr_27672_27728[(2)] = null);

(statearr_27672_27728[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27647 === (29))){
var inst_27620 = (state_27646[(11)]);
var state_27646__$1 = state_27646;
var statearr_27673_27729 = state_27646__$1;
(statearr_27673_27729[(2)] = inst_27620);

(statearr_27673_27729[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27647 === (6))){
var state_27646__$1 = state_27646;
var statearr_27674_27730 = state_27646__$1;
(statearr_27674_27730[(2)] = false);

(statearr_27674_27730[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27647 === (28))){
var inst_27616 = (state_27646[(2)]);
var inst_27617 = calc_state.call(null);
var inst_27576 = inst_27617;
var state_27646__$1 = (function (){var statearr_27675 = state_27646;
(statearr_27675[(7)] = inst_27576);

(statearr_27675[(15)] = inst_27616);

return statearr_27675;
})();
var statearr_27676_27731 = state_27646__$1;
(statearr_27676_27731[(2)] = null);

(statearr_27676_27731[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27647 === (25))){
var inst_27642 = (state_27646[(2)]);
var state_27646__$1 = state_27646;
var statearr_27677_27732 = state_27646__$1;
(statearr_27677_27732[(2)] = inst_27642);

(statearr_27677_27732[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27647 === (34))){
var inst_27640 = (state_27646[(2)]);
var state_27646__$1 = state_27646;
var statearr_27678_27733 = state_27646__$1;
(statearr_27678_27733[(2)] = inst_27640);

(statearr_27678_27733[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27647 === (17))){
var state_27646__$1 = state_27646;
var statearr_27679_27734 = state_27646__$1;
(statearr_27679_27734[(2)] = false);

(statearr_27679_27734[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27647 === (3))){
var state_27646__$1 = state_27646;
var statearr_27680_27735 = state_27646__$1;
(statearr_27680_27735[(2)] = false);

(statearr_27680_27735[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27647 === (12))){
var inst_27644 = (state_27646[(2)]);
var state_27646__$1 = state_27646;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27646__$1,inst_27644);
} else {
if((state_val_27647 === (2))){
var inst_27552 = (state_27646[(8)]);
var inst_27557 = inst_27552.cljs$lang$protocol_mask$partition0$;
var inst_27558 = (inst_27557 & (64));
var inst_27559 = inst_27552.cljs$core$ISeq$;
var inst_27560 = (inst_27558) || (inst_27559);
var state_27646__$1 = state_27646;
if(cljs.core.truth_(inst_27560)){
var statearr_27681_27736 = state_27646__$1;
(statearr_27681_27736[(1)] = (5));

} else {
var statearr_27682_27737 = state_27646__$1;
(statearr_27682_27737[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27647 === (23))){
var inst_27605 = (state_27646[(14)]);
var inst_27611 = (inst_27605 == null);
var state_27646__$1 = state_27646;
if(cljs.core.truth_(inst_27611)){
var statearr_27683_27738 = state_27646__$1;
(statearr_27683_27738[(1)] = (26));

} else {
var statearr_27684_27739 = state_27646__$1;
(statearr_27684_27739[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27647 === (35))){
var inst_27631 = (state_27646[(2)]);
var state_27646__$1 = state_27646;
if(cljs.core.truth_(inst_27631)){
var statearr_27685_27740 = state_27646__$1;
(statearr_27685_27740[(1)] = (36));

} else {
var statearr_27686_27741 = state_27646__$1;
(statearr_27686_27741[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27647 === (19))){
var inst_27576 = (state_27646[(7)]);
var inst_27595 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27576);
var state_27646__$1 = state_27646;
var statearr_27687_27742 = state_27646__$1;
(statearr_27687_27742[(2)] = inst_27595);

(statearr_27687_27742[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27647 === (11))){
var inst_27576 = (state_27646[(7)]);
var inst_27580 = (inst_27576 == null);
var inst_27581 = cljs.core.not.call(null,inst_27580);
var state_27646__$1 = state_27646;
if(inst_27581){
var statearr_27688_27743 = state_27646__$1;
(statearr_27688_27743[(1)] = (13));

} else {
var statearr_27689_27744 = state_27646__$1;
(statearr_27689_27744[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27647 === (9))){
var inst_27552 = (state_27646[(8)]);
var state_27646__$1 = state_27646;
var statearr_27690_27745 = state_27646__$1;
(statearr_27690_27745[(2)] = inst_27552);

(statearr_27690_27745[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27647 === (5))){
var state_27646__$1 = state_27646;
var statearr_27691_27746 = state_27646__$1;
(statearr_27691_27746[(2)] = true);

(statearr_27691_27746[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27647 === (14))){
var state_27646__$1 = state_27646;
var statearr_27692_27747 = state_27646__$1;
(statearr_27692_27747[(2)] = false);

(statearr_27692_27747[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27647 === (26))){
var inst_27606 = (state_27646[(10)]);
var inst_27613 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27606);
var state_27646__$1 = state_27646;
var statearr_27693_27748 = state_27646__$1;
(statearr_27693_27748[(2)] = inst_27613);

(statearr_27693_27748[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27647 === (16))){
var state_27646__$1 = state_27646;
var statearr_27694_27749 = state_27646__$1;
(statearr_27694_27749[(2)] = true);

(statearr_27694_27749[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27647 === (38))){
var inst_27636 = (state_27646[(2)]);
var state_27646__$1 = state_27646;
var statearr_27695_27750 = state_27646__$1;
(statearr_27695_27750[(2)] = inst_27636);

(statearr_27695_27750[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27647 === (30))){
var inst_27599 = (state_27646[(9)]);
var inst_27606 = (state_27646[(10)]);
var inst_27600 = (state_27646[(13)]);
var inst_27623 = cljs.core.empty_QMARK_.call(null,inst_27599);
var inst_27624 = inst_27600.call(null,inst_27606);
var inst_27625 = cljs.core.not.call(null,inst_27624);
var inst_27626 = (inst_27623) && (inst_27625);
var state_27646__$1 = state_27646;
var statearr_27696_27751 = state_27646__$1;
(statearr_27696_27751[(2)] = inst_27626);

(statearr_27696_27751[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27647 === (10))){
var inst_27552 = (state_27646[(8)]);
var inst_27572 = (state_27646[(2)]);
var inst_27573 = cljs.core.get.call(null,inst_27572,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27574 = cljs.core.get.call(null,inst_27572,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27575 = cljs.core.get.call(null,inst_27572,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27576 = inst_27552;
var state_27646__$1 = (function (){var statearr_27697 = state_27646;
(statearr_27697[(7)] = inst_27576);

(statearr_27697[(16)] = inst_27574);

(statearr_27697[(17)] = inst_27573);

(statearr_27697[(18)] = inst_27575);

return statearr_27697;
})();
var statearr_27698_27752 = state_27646__$1;
(statearr_27698_27752[(2)] = null);

(statearr_27698_27752[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27647 === (18))){
var inst_27590 = (state_27646[(2)]);
var state_27646__$1 = state_27646;
var statearr_27699_27753 = state_27646__$1;
(statearr_27699_27753[(2)] = inst_27590);

(statearr_27699_27753[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27647 === (37))){
var state_27646__$1 = state_27646;
var statearr_27700_27754 = state_27646__$1;
(statearr_27700_27754[(2)] = null);

(statearr_27700_27754[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27647 === (8))){
var inst_27552 = (state_27646[(8)]);
var inst_27569 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27552);
var state_27646__$1 = state_27646;
var statearr_27701_27755 = state_27646__$1;
(statearr_27701_27755[(2)] = inst_27569);

(statearr_27701_27755[(1)] = (10));


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
});})(c__18530__auto___27709,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__18465__auto__,c__18530__auto___27709,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__18466__auto__ = null;
var cljs$core$async$mix_$_state_machine__18466__auto____0 = (function (){
var statearr_27705 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27705[(0)] = cljs$core$async$mix_$_state_machine__18466__auto__);

(statearr_27705[(1)] = (1));

return statearr_27705;
});
var cljs$core$async$mix_$_state_machine__18466__auto____1 = (function (state_27646){
while(true){
var ret_value__18467__auto__ = (function (){try{while(true){
var result__18468__auto__ = switch__18465__auto__.call(null,state_27646);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18468__auto__;
}
break;
}
}catch (e27706){if((e27706 instanceof Object)){
var ex__18469__auto__ = e27706;
var statearr_27707_27756 = state_27646;
(statearr_27707_27756[(5)] = ex__18469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27646);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27706;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27757 = state_27646;
state_27646 = G__27757;
continue;
} else {
return ret_value__18467__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__18466__auto__ = function(state_27646){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__18466__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__18466__auto____1.call(this,state_27646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__18466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__18466__auto____0;
cljs$core$async$mix_$_state_machine__18466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__18466__auto____1;
return cljs$core$async$mix_$_state_machine__18466__auto__;
})()
;})(switch__18465__auto__,c__18530__auto___27709,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__18532__auto__ = (function (){var statearr_27708 = f__18531__auto__.call(null);
(statearr_27708[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18530__auto___27709);

return statearr_27708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18532__auto__);
});})(c__18530__auto___27709,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17102__auto__ = (((p == null))?null:p);
var m__17103__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17102__auto__)]);
if(!((m__17103__auto__ == null))){
return m__17103__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17103__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17103__auto____$1 == null))){
return m__17103__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17102__auto__ = (((p == null))?null:p);
var m__17103__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17102__auto__)]);
if(!((m__17103__auto__ == null))){
return m__17103__auto__.call(null,p,v,ch);
} else {
var m__17103__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17103__auto____$1 == null))){
return m__17103__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args27758 = [];
var len__17505__auto___27761 = arguments.length;
var i__17506__auto___27762 = (0);
while(true){
if((i__17506__auto___27762 < len__17505__auto___27761)){
args27758.push((arguments[i__17506__auto___27762]));

var G__27763 = (i__17506__auto___27762 + (1));
i__17506__auto___27762 = G__27763;
continue;
} else {
}
break;
}

var G__27760 = args27758.length;
switch (G__27760) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27758.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17102__auto__ = (((p == null))?null:p);
var m__17103__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17102__auto__)]);
if(!((m__17103__auto__ == null))){
return m__17103__auto__.call(null,p);
} else {
var m__17103__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17103__auto____$1 == null))){
return m__17103__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17102__auto__ = (((p == null))?null:p);
var m__17103__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17102__auto__)]);
if(!((m__17103__auto__ == null))){
return m__17103__auto__.call(null,p,v);
} else {
var m__17103__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17103__auto____$1 == null))){
return m__17103__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args27766 = [];
var len__17505__auto___27891 = arguments.length;
var i__17506__auto___27892 = (0);
while(true){
if((i__17506__auto___27892 < len__17505__auto___27891)){
args27766.push((arguments[i__17506__auto___27892]));

var G__27893 = (i__17506__auto___27892 + (1));
i__17506__auto___27892 = G__27893;
continue;
} else {
}
break;
}

var G__27768 = args27766.length;
switch (G__27768) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27766.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16447__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16447__auto__)){
return or__16447__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16447__auto__,mults){
return (function (p1__27765_SHARP_){
if(cljs.core.truth_(p1__27765_SHARP_.call(null,topic))){
return p1__27765_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__27765_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16447__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async27769 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27769 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta27770){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta27770 = meta27770;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27769.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27771,meta27770__$1){
var self__ = this;
var _27771__$1 = this;
return (new cljs.core.async.t_cljs$core$async27769(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta27770__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27769.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27771){
var self__ = this;
var _27771__$1 = this;
return self__.meta27770;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27769.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async27769.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27769.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async27769.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27769.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27769.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27769.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27769.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta27770","meta27770",-818889738,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27769.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27769.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27769";

cljs.core.async.t_cljs$core$async27769.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17045__auto__,writer__17046__auto__,opt__17047__auto__){
return cljs.core._write.call(null,writer__17046__auto__,"cljs.core.async/t_cljs$core$async27769");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async27769 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async27769(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27770){
return (new cljs.core.async.t_cljs$core$async27769(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27770));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async27769(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18530__auto___27895 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18530__auto___27895,mults,ensure_mult,p){
return (function (){
var f__18531__auto__ = (function (){var switch__18465__auto__ = ((function (c__18530__auto___27895,mults,ensure_mult,p){
return (function (state_27843){
var state_val_27844 = (state_27843[(1)]);
if((state_val_27844 === (7))){
var inst_27839 = (state_27843[(2)]);
var state_27843__$1 = state_27843;
var statearr_27845_27896 = state_27843__$1;
(statearr_27845_27896[(2)] = inst_27839);

(statearr_27845_27896[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27844 === (20))){
var state_27843__$1 = state_27843;
var statearr_27846_27897 = state_27843__$1;
(statearr_27846_27897[(2)] = null);

(statearr_27846_27897[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27844 === (1))){
var state_27843__$1 = state_27843;
var statearr_27847_27898 = state_27843__$1;
(statearr_27847_27898[(2)] = null);

(statearr_27847_27898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27844 === (24))){
var inst_27822 = (state_27843[(7)]);
var inst_27831 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27822);
var state_27843__$1 = state_27843;
var statearr_27848_27899 = state_27843__$1;
(statearr_27848_27899[(2)] = inst_27831);

(statearr_27848_27899[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27844 === (4))){
var inst_27774 = (state_27843[(8)]);
var inst_27774__$1 = (state_27843[(2)]);
var inst_27775 = (inst_27774__$1 == null);
var state_27843__$1 = (function (){var statearr_27849 = state_27843;
(statearr_27849[(8)] = inst_27774__$1);

return statearr_27849;
})();
if(cljs.core.truth_(inst_27775)){
var statearr_27850_27900 = state_27843__$1;
(statearr_27850_27900[(1)] = (5));

} else {
var statearr_27851_27901 = state_27843__$1;
(statearr_27851_27901[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27844 === (15))){
var inst_27816 = (state_27843[(2)]);
var state_27843__$1 = state_27843;
var statearr_27852_27902 = state_27843__$1;
(statearr_27852_27902[(2)] = inst_27816);

(statearr_27852_27902[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27844 === (21))){
var inst_27836 = (state_27843[(2)]);
var state_27843__$1 = (function (){var statearr_27853 = state_27843;
(statearr_27853[(9)] = inst_27836);

return statearr_27853;
})();
var statearr_27854_27903 = state_27843__$1;
(statearr_27854_27903[(2)] = null);

(statearr_27854_27903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27844 === (13))){
var inst_27798 = (state_27843[(10)]);
var inst_27800 = cljs.core.chunked_seq_QMARK_.call(null,inst_27798);
var state_27843__$1 = state_27843;
if(inst_27800){
var statearr_27855_27904 = state_27843__$1;
(statearr_27855_27904[(1)] = (16));

} else {
var statearr_27856_27905 = state_27843__$1;
(statearr_27856_27905[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27844 === (22))){
var inst_27828 = (state_27843[(2)]);
var state_27843__$1 = state_27843;
if(cljs.core.truth_(inst_27828)){
var statearr_27857_27906 = state_27843__$1;
(statearr_27857_27906[(1)] = (23));

} else {
var statearr_27858_27907 = state_27843__$1;
(statearr_27858_27907[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27844 === (6))){
var inst_27774 = (state_27843[(8)]);
var inst_27824 = (state_27843[(11)]);
var inst_27822 = (state_27843[(7)]);
var inst_27822__$1 = topic_fn.call(null,inst_27774);
var inst_27823 = cljs.core.deref.call(null,mults);
var inst_27824__$1 = cljs.core.get.call(null,inst_27823,inst_27822__$1);
var state_27843__$1 = (function (){var statearr_27859 = state_27843;
(statearr_27859[(11)] = inst_27824__$1);

(statearr_27859[(7)] = inst_27822__$1);

return statearr_27859;
})();
if(cljs.core.truth_(inst_27824__$1)){
var statearr_27860_27908 = state_27843__$1;
(statearr_27860_27908[(1)] = (19));

} else {
var statearr_27861_27909 = state_27843__$1;
(statearr_27861_27909[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27844 === (25))){
var inst_27833 = (state_27843[(2)]);
var state_27843__$1 = state_27843;
var statearr_27862_27910 = state_27843__$1;
(statearr_27862_27910[(2)] = inst_27833);

(statearr_27862_27910[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27844 === (17))){
var inst_27798 = (state_27843[(10)]);
var inst_27807 = cljs.core.first.call(null,inst_27798);
var inst_27808 = cljs.core.async.muxch_STAR_.call(null,inst_27807);
var inst_27809 = cljs.core.async.close_BANG_.call(null,inst_27808);
var inst_27810 = cljs.core.next.call(null,inst_27798);
var inst_27784 = inst_27810;
var inst_27785 = null;
var inst_27786 = (0);
var inst_27787 = (0);
var state_27843__$1 = (function (){var statearr_27863 = state_27843;
(statearr_27863[(12)] = inst_27786);

(statearr_27863[(13)] = inst_27785);

(statearr_27863[(14)] = inst_27787);

(statearr_27863[(15)] = inst_27784);

(statearr_27863[(16)] = inst_27809);

return statearr_27863;
})();
var statearr_27864_27911 = state_27843__$1;
(statearr_27864_27911[(2)] = null);

(statearr_27864_27911[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27844 === (3))){
var inst_27841 = (state_27843[(2)]);
var state_27843__$1 = state_27843;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27843__$1,inst_27841);
} else {
if((state_val_27844 === (12))){
var inst_27818 = (state_27843[(2)]);
var state_27843__$1 = state_27843;
var statearr_27865_27912 = state_27843__$1;
(statearr_27865_27912[(2)] = inst_27818);

(statearr_27865_27912[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27844 === (2))){
var state_27843__$1 = state_27843;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27843__$1,(4),ch);
} else {
if((state_val_27844 === (23))){
var state_27843__$1 = state_27843;
var statearr_27866_27913 = state_27843__$1;
(statearr_27866_27913[(2)] = null);

(statearr_27866_27913[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27844 === (19))){
var inst_27774 = (state_27843[(8)]);
var inst_27824 = (state_27843[(11)]);
var inst_27826 = cljs.core.async.muxch_STAR_.call(null,inst_27824);
var state_27843__$1 = state_27843;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27843__$1,(22),inst_27826,inst_27774);
} else {
if((state_val_27844 === (11))){
var inst_27784 = (state_27843[(15)]);
var inst_27798 = (state_27843[(10)]);
var inst_27798__$1 = cljs.core.seq.call(null,inst_27784);
var state_27843__$1 = (function (){var statearr_27867 = state_27843;
(statearr_27867[(10)] = inst_27798__$1);

return statearr_27867;
})();
if(inst_27798__$1){
var statearr_27868_27914 = state_27843__$1;
(statearr_27868_27914[(1)] = (13));

} else {
var statearr_27869_27915 = state_27843__$1;
(statearr_27869_27915[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27844 === (9))){
var inst_27820 = (state_27843[(2)]);
var state_27843__$1 = state_27843;
var statearr_27870_27916 = state_27843__$1;
(statearr_27870_27916[(2)] = inst_27820);

(statearr_27870_27916[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27844 === (5))){
var inst_27781 = cljs.core.deref.call(null,mults);
var inst_27782 = cljs.core.vals.call(null,inst_27781);
var inst_27783 = cljs.core.seq.call(null,inst_27782);
var inst_27784 = inst_27783;
var inst_27785 = null;
var inst_27786 = (0);
var inst_27787 = (0);
var state_27843__$1 = (function (){var statearr_27871 = state_27843;
(statearr_27871[(12)] = inst_27786);

(statearr_27871[(13)] = inst_27785);

(statearr_27871[(14)] = inst_27787);

(statearr_27871[(15)] = inst_27784);

return statearr_27871;
})();
var statearr_27872_27917 = state_27843__$1;
(statearr_27872_27917[(2)] = null);

(statearr_27872_27917[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27844 === (14))){
var state_27843__$1 = state_27843;
var statearr_27876_27918 = state_27843__$1;
(statearr_27876_27918[(2)] = null);

(statearr_27876_27918[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27844 === (16))){
var inst_27798 = (state_27843[(10)]);
var inst_27802 = cljs.core.chunk_first.call(null,inst_27798);
var inst_27803 = cljs.core.chunk_rest.call(null,inst_27798);
var inst_27804 = cljs.core.count.call(null,inst_27802);
var inst_27784 = inst_27803;
var inst_27785 = inst_27802;
var inst_27786 = inst_27804;
var inst_27787 = (0);
var state_27843__$1 = (function (){var statearr_27877 = state_27843;
(statearr_27877[(12)] = inst_27786);

(statearr_27877[(13)] = inst_27785);

(statearr_27877[(14)] = inst_27787);

(statearr_27877[(15)] = inst_27784);

return statearr_27877;
})();
var statearr_27878_27919 = state_27843__$1;
(statearr_27878_27919[(2)] = null);

(statearr_27878_27919[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27844 === (10))){
var inst_27786 = (state_27843[(12)]);
var inst_27785 = (state_27843[(13)]);
var inst_27787 = (state_27843[(14)]);
var inst_27784 = (state_27843[(15)]);
var inst_27792 = cljs.core._nth.call(null,inst_27785,inst_27787);
var inst_27793 = cljs.core.async.muxch_STAR_.call(null,inst_27792);
var inst_27794 = cljs.core.async.close_BANG_.call(null,inst_27793);
var inst_27795 = (inst_27787 + (1));
var tmp27873 = inst_27786;
var tmp27874 = inst_27785;
var tmp27875 = inst_27784;
var inst_27784__$1 = tmp27875;
var inst_27785__$1 = tmp27874;
var inst_27786__$1 = tmp27873;
var inst_27787__$1 = inst_27795;
var state_27843__$1 = (function (){var statearr_27879 = state_27843;
(statearr_27879[(12)] = inst_27786__$1);

(statearr_27879[(13)] = inst_27785__$1);

(statearr_27879[(14)] = inst_27787__$1);

(statearr_27879[(15)] = inst_27784__$1);

(statearr_27879[(17)] = inst_27794);

return statearr_27879;
})();
var statearr_27880_27920 = state_27843__$1;
(statearr_27880_27920[(2)] = null);

(statearr_27880_27920[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27844 === (18))){
var inst_27813 = (state_27843[(2)]);
var state_27843__$1 = state_27843;
var statearr_27881_27921 = state_27843__$1;
(statearr_27881_27921[(2)] = inst_27813);

(statearr_27881_27921[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27844 === (8))){
var inst_27786 = (state_27843[(12)]);
var inst_27787 = (state_27843[(14)]);
var inst_27789 = (inst_27787 < inst_27786);
var inst_27790 = inst_27789;
var state_27843__$1 = state_27843;
if(cljs.core.truth_(inst_27790)){
var statearr_27882_27922 = state_27843__$1;
(statearr_27882_27922[(1)] = (10));

} else {
var statearr_27883_27923 = state_27843__$1;
(statearr_27883_27923[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__18530__auto___27895,mults,ensure_mult,p))
;
return ((function (switch__18465__auto__,c__18530__auto___27895,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__18466__auto__ = null;
var cljs$core$async$state_machine__18466__auto____0 = (function (){
var statearr_27887 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27887[(0)] = cljs$core$async$state_machine__18466__auto__);

(statearr_27887[(1)] = (1));

return statearr_27887;
});
var cljs$core$async$state_machine__18466__auto____1 = (function (state_27843){
while(true){
var ret_value__18467__auto__ = (function (){try{while(true){
var result__18468__auto__ = switch__18465__auto__.call(null,state_27843);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18468__auto__;
}
break;
}
}catch (e27888){if((e27888 instanceof Object)){
var ex__18469__auto__ = e27888;
var statearr_27889_27924 = state_27843;
(statearr_27889_27924[(5)] = ex__18469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27843);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27888;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27925 = state_27843;
state_27843 = G__27925;
continue;
} else {
return ret_value__18467__auto__;
}
break;
}
});
cljs$core$async$state_machine__18466__auto__ = function(state_27843){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18466__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18466__auto____1.call(this,state_27843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18466__auto____0;
cljs$core$async$state_machine__18466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18466__auto____1;
return cljs$core$async$state_machine__18466__auto__;
})()
;})(switch__18465__auto__,c__18530__auto___27895,mults,ensure_mult,p))
})();
var state__18532__auto__ = (function (){var statearr_27890 = f__18531__auto__.call(null);
(statearr_27890[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18530__auto___27895);

return statearr_27890;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18532__auto__);
});})(c__18530__auto___27895,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args27926 = [];
var len__17505__auto___27929 = arguments.length;
var i__17506__auto___27930 = (0);
while(true){
if((i__17506__auto___27930 < len__17505__auto___27929)){
args27926.push((arguments[i__17506__auto___27930]));

var G__27931 = (i__17506__auto___27930 + (1));
i__17506__auto___27930 = G__27931;
continue;
} else {
}
break;
}

var G__27928 = args27926.length;
switch (G__27928) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27926.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args27933 = [];
var len__17505__auto___27936 = arguments.length;
var i__17506__auto___27937 = (0);
while(true){
if((i__17506__auto___27937 < len__17505__auto___27936)){
args27933.push((arguments[i__17506__auto___27937]));

var G__27938 = (i__17506__auto___27937 + (1));
i__17506__auto___27937 = G__27938;
continue;
} else {
}
break;
}

var G__27935 = args27933.length;
switch (G__27935) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27933.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args27940 = [];
var len__17505__auto___28011 = arguments.length;
var i__17506__auto___28012 = (0);
while(true){
if((i__17506__auto___28012 < len__17505__auto___28011)){
args27940.push((arguments[i__17506__auto___28012]));

var G__28013 = (i__17506__auto___28012 + (1));
i__17506__auto___28012 = G__28013;
continue;
} else {
}
break;
}

var G__27942 = args27940.length;
switch (G__27942) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27940.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__18530__auto___28015 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18530__auto___28015,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__18531__auto__ = (function (){var switch__18465__auto__ = ((function (c__18530__auto___28015,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27981){
var state_val_27982 = (state_27981[(1)]);
if((state_val_27982 === (7))){
var state_27981__$1 = state_27981;
var statearr_27983_28016 = state_27981__$1;
(statearr_27983_28016[(2)] = null);

(statearr_27983_28016[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27982 === (1))){
var state_27981__$1 = state_27981;
var statearr_27984_28017 = state_27981__$1;
(statearr_27984_28017[(2)] = null);

(statearr_27984_28017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27982 === (4))){
var inst_27945 = (state_27981[(7)]);
var inst_27947 = (inst_27945 < cnt);
var state_27981__$1 = state_27981;
if(cljs.core.truth_(inst_27947)){
var statearr_27985_28018 = state_27981__$1;
(statearr_27985_28018[(1)] = (6));

} else {
var statearr_27986_28019 = state_27981__$1;
(statearr_27986_28019[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27982 === (15))){
var inst_27977 = (state_27981[(2)]);
var state_27981__$1 = state_27981;
var statearr_27987_28020 = state_27981__$1;
(statearr_27987_28020[(2)] = inst_27977);

(statearr_27987_28020[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27982 === (13))){
var inst_27970 = cljs.core.async.close_BANG_.call(null,out);
var state_27981__$1 = state_27981;
var statearr_27988_28021 = state_27981__$1;
(statearr_27988_28021[(2)] = inst_27970);

(statearr_27988_28021[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27982 === (6))){
var state_27981__$1 = state_27981;
var statearr_27989_28022 = state_27981__$1;
(statearr_27989_28022[(2)] = null);

(statearr_27989_28022[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27982 === (3))){
var inst_27979 = (state_27981[(2)]);
var state_27981__$1 = state_27981;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27981__$1,inst_27979);
} else {
if((state_val_27982 === (12))){
var inst_27967 = (state_27981[(8)]);
var inst_27967__$1 = (state_27981[(2)]);
var inst_27968 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27967__$1);
var state_27981__$1 = (function (){var statearr_27990 = state_27981;
(statearr_27990[(8)] = inst_27967__$1);

return statearr_27990;
})();
if(cljs.core.truth_(inst_27968)){
var statearr_27991_28023 = state_27981__$1;
(statearr_27991_28023[(1)] = (13));

} else {
var statearr_27992_28024 = state_27981__$1;
(statearr_27992_28024[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27982 === (2))){
var inst_27944 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_27945 = (0);
var state_27981__$1 = (function (){var statearr_27993 = state_27981;
(statearr_27993[(9)] = inst_27944);

(statearr_27993[(7)] = inst_27945);

return statearr_27993;
})();
var statearr_27994_28025 = state_27981__$1;
(statearr_27994_28025[(2)] = null);

(statearr_27994_28025[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27982 === (11))){
var inst_27945 = (state_27981[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27981,(10),Object,null,(9));
var inst_27954 = chs__$1.call(null,inst_27945);
var inst_27955 = done.call(null,inst_27945);
var inst_27956 = cljs.core.async.take_BANG_.call(null,inst_27954,inst_27955);
var state_27981__$1 = state_27981;
var statearr_27995_28026 = state_27981__$1;
(statearr_27995_28026[(2)] = inst_27956);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27981__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27982 === (9))){
var inst_27945 = (state_27981[(7)]);
var inst_27958 = (state_27981[(2)]);
var inst_27959 = (inst_27945 + (1));
var inst_27945__$1 = inst_27959;
var state_27981__$1 = (function (){var statearr_27996 = state_27981;
(statearr_27996[(10)] = inst_27958);

(statearr_27996[(7)] = inst_27945__$1);

return statearr_27996;
})();
var statearr_27997_28027 = state_27981__$1;
(statearr_27997_28027[(2)] = null);

(statearr_27997_28027[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27982 === (5))){
var inst_27965 = (state_27981[(2)]);
var state_27981__$1 = (function (){var statearr_27998 = state_27981;
(statearr_27998[(11)] = inst_27965);

return statearr_27998;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27981__$1,(12),dchan);
} else {
if((state_val_27982 === (14))){
var inst_27967 = (state_27981[(8)]);
var inst_27972 = cljs.core.apply.call(null,f,inst_27967);
var state_27981__$1 = state_27981;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27981__$1,(16),out,inst_27972);
} else {
if((state_val_27982 === (16))){
var inst_27974 = (state_27981[(2)]);
var state_27981__$1 = (function (){var statearr_27999 = state_27981;
(statearr_27999[(12)] = inst_27974);

return statearr_27999;
})();
var statearr_28000_28028 = state_27981__$1;
(statearr_28000_28028[(2)] = null);

(statearr_28000_28028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27982 === (10))){
var inst_27949 = (state_27981[(2)]);
var inst_27950 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_27981__$1 = (function (){var statearr_28001 = state_27981;
(statearr_28001[(13)] = inst_27949);

return statearr_28001;
})();
var statearr_28002_28029 = state_27981__$1;
(statearr_28002_28029[(2)] = inst_27950);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27981__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27982 === (8))){
var inst_27963 = (state_27981[(2)]);
var state_27981__$1 = state_27981;
var statearr_28003_28030 = state_27981__$1;
(statearr_28003_28030[(2)] = inst_27963);

(statearr_28003_28030[(1)] = (5));


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
});})(c__18530__auto___28015,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__18465__auto__,c__18530__auto___28015,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__18466__auto__ = null;
var cljs$core$async$state_machine__18466__auto____0 = (function (){
var statearr_28007 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28007[(0)] = cljs$core$async$state_machine__18466__auto__);

(statearr_28007[(1)] = (1));

return statearr_28007;
});
var cljs$core$async$state_machine__18466__auto____1 = (function (state_27981){
while(true){
var ret_value__18467__auto__ = (function (){try{while(true){
var result__18468__auto__ = switch__18465__auto__.call(null,state_27981);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18468__auto__;
}
break;
}
}catch (e28008){if((e28008 instanceof Object)){
var ex__18469__auto__ = e28008;
var statearr_28009_28031 = state_27981;
(statearr_28009_28031[(5)] = ex__18469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27981);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28008;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28032 = state_27981;
state_27981 = G__28032;
continue;
} else {
return ret_value__18467__auto__;
}
break;
}
});
cljs$core$async$state_machine__18466__auto__ = function(state_27981){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18466__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18466__auto____1.call(this,state_27981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18466__auto____0;
cljs$core$async$state_machine__18466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18466__auto____1;
return cljs$core$async$state_machine__18466__auto__;
})()
;})(switch__18465__auto__,c__18530__auto___28015,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__18532__auto__ = (function (){var statearr_28010 = f__18531__auto__.call(null);
(statearr_28010[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18530__auto___28015);

return statearr_28010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18532__auto__);
});})(c__18530__auto___28015,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args28034 = [];
var len__17505__auto___28090 = arguments.length;
var i__17506__auto___28091 = (0);
while(true){
if((i__17506__auto___28091 < len__17505__auto___28090)){
args28034.push((arguments[i__17506__auto___28091]));

var G__28092 = (i__17506__auto___28091 + (1));
i__17506__auto___28091 = G__28092;
continue;
} else {
}
break;
}

var G__28036 = args28034.length;
switch (G__28036) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28034.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18530__auto___28094 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18530__auto___28094,out){
return (function (){
var f__18531__auto__ = (function (){var switch__18465__auto__ = ((function (c__18530__auto___28094,out){
return (function (state_28066){
var state_val_28067 = (state_28066[(1)]);
if((state_val_28067 === (7))){
var inst_28045 = (state_28066[(7)]);
var inst_28046 = (state_28066[(8)]);
var inst_28045__$1 = (state_28066[(2)]);
var inst_28046__$1 = cljs.core.nth.call(null,inst_28045__$1,(0),null);
var inst_28047 = cljs.core.nth.call(null,inst_28045__$1,(1),null);
var inst_28048 = (inst_28046__$1 == null);
var state_28066__$1 = (function (){var statearr_28068 = state_28066;
(statearr_28068[(7)] = inst_28045__$1);

(statearr_28068[(9)] = inst_28047);

(statearr_28068[(8)] = inst_28046__$1);

return statearr_28068;
})();
if(cljs.core.truth_(inst_28048)){
var statearr_28069_28095 = state_28066__$1;
(statearr_28069_28095[(1)] = (8));

} else {
var statearr_28070_28096 = state_28066__$1;
(statearr_28070_28096[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28067 === (1))){
var inst_28037 = cljs.core.vec.call(null,chs);
var inst_28038 = inst_28037;
var state_28066__$1 = (function (){var statearr_28071 = state_28066;
(statearr_28071[(10)] = inst_28038);

return statearr_28071;
})();
var statearr_28072_28097 = state_28066__$1;
(statearr_28072_28097[(2)] = null);

(statearr_28072_28097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28067 === (4))){
var inst_28038 = (state_28066[(10)]);
var state_28066__$1 = state_28066;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28066__$1,(7),inst_28038);
} else {
if((state_val_28067 === (6))){
var inst_28062 = (state_28066[(2)]);
var state_28066__$1 = state_28066;
var statearr_28073_28098 = state_28066__$1;
(statearr_28073_28098[(2)] = inst_28062);

(statearr_28073_28098[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28067 === (3))){
var inst_28064 = (state_28066[(2)]);
var state_28066__$1 = state_28066;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28066__$1,inst_28064);
} else {
if((state_val_28067 === (2))){
var inst_28038 = (state_28066[(10)]);
var inst_28040 = cljs.core.count.call(null,inst_28038);
var inst_28041 = (inst_28040 > (0));
var state_28066__$1 = state_28066;
if(cljs.core.truth_(inst_28041)){
var statearr_28075_28099 = state_28066__$1;
(statearr_28075_28099[(1)] = (4));

} else {
var statearr_28076_28100 = state_28066__$1;
(statearr_28076_28100[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28067 === (11))){
var inst_28038 = (state_28066[(10)]);
var inst_28055 = (state_28066[(2)]);
var tmp28074 = inst_28038;
var inst_28038__$1 = tmp28074;
var state_28066__$1 = (function (){var statearr_28077 = state_28066;
(statearr_28077[(10)] = inst_28038__$1);

(statearr_28077[(11)] = inst_28055);

return statearr_28077;
})();
var statearr_28078_28101 = state_28066__$1;
(statearr_28078_28101[(2)] = null);

(statearr_28078_28101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28067 === (9))){
var inst_28046 = (state_28066[(8)]);
var state_28066__$1 = state_28066;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28066__$1,(11),out,inst_28046);
} else {
if((state_val_28067 === (5))){
var inst_28060 = cljs.core.async.close_BANG_.call(null,out);
var state_28066__$1 = state_28066;
var statearr_28079_28102 = state_28066__$1;
(statearr_28079_28102[(2)] = inst_28060);

(statearr_28079_28102[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28067 === (10))){
var inst_28058 = (state_28066[(2)]);
var state_28066__$1 = state_28066;
var statearr_28080_28103 = state_28066__$1;
(statearr_28080_28103[(2)] = inst_28058);

(statearr_28080_28103[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28067 === (8))){
var inst_28038 = (state_28066[(10)]);
var inst_28045 = (state_28066[(7)]);
var inst_28047 = (state_28066[(9)]);
var inst_28046 = (state_28066[(8)]);
var inst_28050 = (function (){var cs = inst_28038;
var vec__28043 = inst_28045;
var v = inst_28046;
var c = inst_28047;
return ((function (cs,vec__28043,v,c,inst_28038,inst_28045,inst_28047,inst_28046,state_val_28067,c__18530__auto___28094,out){
return (function (p1__28033_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28033_SHARP_);
});
;})(cs,vec__28043,v,c,inst_28038,inst_28045,inst_28047,inst_28046,state_val_28067,c__18530__auto___28094,out))
})();
var inst_28051 = cljs.core.filterv.call(null,inst_28050,inst_28038);
var inst_28038__$1 = inst_28051;
var state_28066__$1 = (function (){var statearr_28081 = state_28066;
(statearr_28081[(10)] = inst_28038__$1);

return statearr_28081;
})();
var statearr_28082_28104 = state_28066__$1;
(statearr_28082_28104[(2)] = null);

(statearr_28082_28104[(1)] = (2));


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
});})(c__18530__auto___28094,out))
;
return ((function (switch__18465__auto__,c__18530__auto___28094,out){
return (function() {
var cljs$core$async$state_machine__18466__auto__ = null;
var cljs$core$async$state_machine__18466__auto____0 = (function (){
var statearr_28086 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28086[(0)] = cljs$core$async$state_machine__18466__auto__);

(statearr_28086[(1)] = (1));

return statearr_28086;
});
var cljs$core$async$state_machine__18466__auto____1 = (function (state_28066){
while(true){
var ret_value__18467__auto__ = (function (){try{while(true){
var result__18468__auto__ = switch__18465__auto__.call(null,state_28066);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18468__auto__;
}
break;
}
}catch (e28087){if((e28087 instanceof Object)){
var ex__18469__auto__ = e28087;
var statearr_28088_28105 = state_28066;
(statearr_28088_28105[(5)] = ex__18469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28066);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28087;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28106 = state_28066;
state_28066 = G__28106;
continue;
} else {
return ret_value__18467__auto__;
}
break;
}
});
cljs$core$async$state_machine__18466__auto__ = function(state_28066){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18466__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18466__auto____1.call(this,state_28066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18466__auto____0;
cljs$core$async$state_machine__18466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18466__auto____1;
return cljs$core$async$state_machine__18466__auto__;
})()
;})(switch__18465__auto__,c__18530__auto___28094,out))
})();
var state__18532__auto__ = (function (){var statearr_28089 = f__18531__auto__.call(null);
(statearr_28089[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18530__auto___28094);

return statearr_28089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18532__auto__);
});})(c__18530__auto___28094,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args28107 = [];
var len__17505__auto___28156 = arguments.length;
var i__17506__auto___28157 = (0);
while(true){
if((i__17506__auto___28157 < len__17505__auto___28156)){
args28107.push((arguments[i__17506__auto___28157]));

var G__28158 = (i__17506__auto___28157 + (1));
i__17506__auto___28157 = G__28158;
continue;
} else {
}
break;
}

var G__28109 = args28107.length;
switch (G__28109) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28107.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18530__auto___28160 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18530__auto___28160,out){
return (function (){
var f__18531__auto__ = (function (){var switch__18465__auto__ = ((function (c__18530__auto___28160,out){
return (function (state_28133){
var state_val_28134 = (state_28133[(1)]);
if((state_val_28134 === (7))){
var inst_28115 = (state_28133[(7)]);
var inst_28115__$1 = (state_28133[(2)]);
var inst_28116 = (inst_28115__$1 == null);
var inst_28117 = cljs.core.not.call(null,inst_28116);
var state_28133__$1 = (function (){var statearr_28135 = state_28133;
(statearr_28135[(7)] = inst_28115__$1);

return statearr_28135;
})();
if(inst_28117){
var statearr_28136_28161 = state_28133__$1;
(statearr_28136_28161[(1)] = (8));

} else {
var statearr_28137_28162 = state_28133__$1;
(statearr_28137_28162[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28134 === (1))){
var inst_28110 = (0);
var state_28133__$1 = (function (){var statearr_28138 = state_28133;
(statearr_28138[(8)] = inst_28110);

return statearr_28138;
})();
var statearr_28139_28163 = state_28133__$1;
(statearr_28139_28163[(2)] = null);

(statearr_28139_28163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28134 === (4))){
var state_28133__$1 = state_28133;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28133__$1,(7),ch);
} else {
if((state_val_28134 === (6))){
var inst_28128 = (state_28133[(2)]);
var state_28133__$1 = state_28133;
var statearr_28140_28164 = state_28133__$1;
(statearr_28140_28164[(2)] = inst_28128);

(statearr_28140_28164[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28134 === (3))){
var inst_28130 = (state_28133[(2)]);
var inst_28131 = cljs.core.async.close_BANG_.call(null,out);
var state_28133__$1 = (function (){var statearr_28141 = state_28133;
(statearr_28141[(9)] = inst_28130);

return statearr_28141;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28133__$1,inst_28131);
} else {
if((state_val_28134 === (2))){
var inst_28110 = (state_28133[(8)]);
var inst_28112 = (inst_28110 < n);
var state_28133__$1 = state_28133;
if(cljs.core.truth_(inst_28112)){
var statearr_28142_28165 = state_28133__$1;
(statearr_28142_28165[(1)] = (4));

} else {
var statearr_28143_28166 = state_28133__$1;
(statearr_28143_28166[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28134 === (11))){
var inst_28110 = (state_28133[(8)]);
var inst_28120 = (state_28133[(2)]);
var inst_28121 = (inst_28110 + (1));
var inst_28110__$1 = inst_28121;
var state_28133__$1 = (function (){var statearr_28144 = state_28133;
(statearr_28144[(10)] = inst_28120);

(statearr_28144[(8)] = inst_28110__$1);

return statearr_28144;
})();
var statearr_28145_28167 = state_28133__$1;
(statearr_28145_28167[(2)] = null);

(statearr_28145_28167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28134 === (9))){
var state_28133__$1 = state_28133;
var statearr_28146_28168 = state_28133__$1;
(statearr_28146_28168[(2)] = null);

(statearr_28146_28168[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28134 === (5))){
var state_28133__$1 = state_28133;
var statearr_28147_28169 = state_28133__$1;
(statearr_28147_28169[(2)] = null);

(statearr_28147_28169[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28134 === (10))){
var inst_28125 = (state_28133[(2)]);
var state_28133__$1 = state_28133;
var statearr_28148_28170 = state_28133__$1;
(statearr_28148_28170[(2)] = inst_28125);

(statearr_28148_28170[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28134 === (8))){
var inst_28115 = (state_28133[(7)]);
var state_28133__$1 = state_28133;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28133__$1,(11),out,inst_28115);
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
});})(c__18530__auto___28160,out))
;
return ((function (switch__18465__auto__,c__18530__auto___28160,out){
return (function() {
var cljs$core$async$state_machine__18466__auto__ = null;
var cljs$core$async$state_machine__18466__auto____0 = (function (){
var statearr_28152 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28152[(0)] = cljs$core$async$state_machine__18466__auto__);

(statearr_28152[(1)] = (1));

return statearr_28152;
});
var cljs$core$async$state_machine__18466__auto____1 = (function (state_28133){
while(true){
var ret_value__18467__auto__ = (function (){try{while(true){
var result__18468__auto__ = switch__18465__auto__.call(null,state_28133);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18468__auto__;
}
break;
}
}catch (e28153){if((e28153 instanceof Object)){
var ex__18469__auto__ = e28153;
var statearr_28154_28171 = state_28133;
(statearr_28154_28171[(5)] = ex__18469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28133);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28153;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28172 = state_28133;
state_28133 = G__28172;
continue;
} else {
return ret_value__18467__auto__;
}
break;
}
});
cljs$core$async$state_machine__18466__auto__ = function(state_28133){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18466__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18466__auto____1.call(this,state_28133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18466__auto____0;
cljs$core$async$state_machine__18466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18466__auto____1;
return cljs$core$async$state_machine__18466__auto__;
})()
;})(switch__18465__auto__,c__18530__auto___28160,out))
})();
var state__18532__auto__ = (function (){var statearr_28155 = f__18531__auto__.call(null);
(statearr_28155[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18530__auto___28160);

return statearr_28155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18532__auto__);
});})(c__18530__auto___28160,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async28180 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28180 = (function (map_LT_,f,ch,meta28181){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta28181 = meta28181;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28180.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28182,meta28181__$1){
var self__ = this;
var _28182__$1 = this;
return (new cljs.core.async.t_cljs$core$async28180(self__.map_LT_,self__.f,self__.ch,meta28181__$1));
});

cljs.core.async.t_cljs$core$async28180.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28182){
var self__ = this;
var _28182__$1 = this;
return self__.meta28181;
});

cljs.core.async.t_cljs$core$async28180.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async28180.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28180.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28180.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async28180.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async28183 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28183 = (function (map_LT_,f,ch,meta28181,_,fn1,meta28184){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta28181 = meta28181;
this._ = _;
this.fn1 = fn1;
this.meta28184 = meta28184;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28183.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_28185,meta28184__$1){
var self__ = this;
var _28185__$1 = this;
return (new cljs.core.async.t_cljs$core$async28183(self__.map_LT_,self__.f,self__.ch,self__.meta28181,self__._,self__.fn1,meta28184__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async28183.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_28185){
var self__ = this;
var _28185__$1 = this;
return self__.meta28184;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28183.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28183.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28183.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__28173_SHARP_){
return f1.call(null,(((p1__28173_SHARP_ == null))?null:self__.f.call(null,p1__28173_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async28183.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28181","meta28181",-1483403295,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async28180","cljs.core.async/t_cljs$core$async28180",973097424,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta28184","meta28184",1393035374,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28183.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28183.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28183";

cljs.core.async.t_cljs$core$async28183.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17045__auto__,writer__17046__auto__,opt__17047__auto__){
return cljs.core._write.call(null,writer__17046__auto__,"cljs.core.async/t_cljs$core$async28183");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async28183 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28183(map_LT___$1,f__$1,ch__$1,meta28181__$1,___$2,fn1__$1,meta28184){
return (new cljs.core.async.t_cljs$core$async28183(map_LT___$1,f__$1,ch__$1,meta28181__$1,___$2,fn1__$1,meta28184));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async28183(self__.map_LT_,self__.f,self__.ch,self__.meta28181,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16435__auto__ = ret;
if(cljs.core.truth_(and__16435__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16435__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async28180.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async28180.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async28180.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28181","meta28181",-1483403295,null)], null);
});

cljs.core.async.t_cljs$core$async28180.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28180.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28180";

cljs.core.async.t_cljs$core$async28180.cljs$lang$ctorPrWriter = (function (this__17045__auto__,writer__17046__auto__,opt__17047__auto__){
return cljs.core._write.call(null,writer__17046__auto__,"cljs.core.async/t_cljs$core$async28180");
});

cljs.core.async.__GT_t_cljs$core$async28180 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28180(map_LT___$1,f__$1,ch__$1,meta28181){
return (new cljs.core.async.t_cljs$core$async28180(map_LT___$1,f__$1,ch__$1,meta28181));
});

}

return (new cljs.core.async.t_cljs$core$async28180(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async28189 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28189 = (function (map_GT_,f,ch,meta28190){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta28190 = meta28190;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28189.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28191,meta28190__$1){
var self__ = this;
var _28191__$1 = this;
return (new cljs.core.async.t_cljs$core$async28189(self__.map_GT_,self__.f,self__.ch,meta28190__$1));
});

cljs.core.async.t_cljs$core$async28189.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28191){
var self__ = this;
var _28191__$1 = this;
return self__.meta28190;
});

cljs.core.async.t_cljs$core$async28189.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async28189.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28189.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async28189.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28189.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async28189.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async28189.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28190","meta28190",471430132,null)], null);
});

cljs.core.async.t_cljs$core$async28189.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28189.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28189";

cljs.core.async.t_cljs$core$async28189.cljs$lang$ctorPrWriter = (function (this__17045__auto__,writer__17046__auto__,opt__17047__auto__){
return cljs.core._write.call(null,writer__17046__auto__,"cljs.core.async/t_cljs$core$async28189");
});

cljs.core.async.__GT_t_cljs$core$async28189 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async28189(map_GT___$1,f__$1,ch__$1,meta28190){
return (new cljs.core.async.t_cljs$core$async28189(map_GT___$1,f__$1,ch__$1,meta28190));
});

}

return (new cljs.core.async.t_cljs$core$async28189(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async28195 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28195 = (function (filter_GT_,p,ch,meta28196){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta28196 = meta28196;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28195.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28197,meta28196__$1){
var self__ = this;
var _28197__$1 = this;
return (new cljs.core.async.t_cljs$core$async28195(self__.filter_GT_,self__.p,self__.ch,meta28196__$1));
});

cljs.core.async.t_cljs$core$async28195.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28197){
var self__ = this;
var _28197__$1 = this;
return self__.meta28196;
});

cljs.core.async.t_cljs$core$async28195.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async28195.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28195.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28195.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async28195.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28195.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async28195.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async28195.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28196","meta28196",756710179,null)], null);
});

cljs.core.async.t_cljs$core$async28195.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28195.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28195";

cljs.core.async.t_cljs$core$async28195.cljs$lang$ctorPrWriter = (function (this__17045__auto__,writer__17046__auto__,opt__17047__auto__){
return cljs.core._write.call(null,writer__17046__auto__,"cljs.core.async/t_cljs$core$async28195");
});

cljs.core.async.__GT_t_cljs$core$async28195 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async28195(filter_GT___$1,p__$1,ch__$1,meta28196){
return (new cljs.core.async.t_cljs$core$async28195(filter_GT___$1,p__$1,ch__$1,meta28196));
});

}

return (new cljs.core.async.t_cljs$core$async28195(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args28198 = [];
var len__17505__auto___28242 = arguments.length;
var i__17506__auto___28243 = (0);
while(true){
if((i__17506__auto___28243 < len__17505__auto___28242)){
args28198.push((arguments[i__17506__auto___28243]));

var G__28244 = (i__17506__auto___28243 + (1));
i__17506__auto___28243 = G__28244;
continue;
} else {
}
break;
}

var G__28200 = args28198.length;
switch (G__28200) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28198.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18530__auto___28246 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18530__auto___28246,out){
return (function (){
var f__18531__auto__ = (function (){var switch__18465__auto__ = ((function (c__18530__auto___28246,out){
return (function (state_28221){
var state_val_28222 = (state_28221[(1)]);
if((state_val_28222 === (7))){
var inst_28217 = (state_28221[(2)]);
var state_28221__$1 = state_28221;
var statearr_28223_28247 = state_28221__$1;
(statearr_28223_28247[(2)] = inst_28217);

(statearr_28223_28247[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28222 === (1))){
var state_28221__$1 = state_28221;
var statearr_28224_28248 = state_28221__$1;
(statearr_28224_28248[(2)] = null);

(statearr_28224_28248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28222 === (4))){
var inst_28203 = (state_28221[(7)]);
var inst_28203__$1 = (state_28221[(2)]);
var inst_28204 = (inst_28203__$1 == null);
var state_28221__$1 = (function (){var statearr_28225 = state_28221;
(statearr_28225[(7)] = inst_28203__$1);

return statearr_28225;
})();
if(cljs.core.truth_(inst_28204)){
var statearr_28226_28249 = state_28221__$1;
(statearr_28226_28249[(1)] = (5));

} else {
var statearr_28227_28250 = state_28221__$1;
(statearr_28227_28250[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28222 === (6))){
var inst_28203 = (state_28221[(7)]);
var inst_28208 = p.call(null,inst_28203);
var state_28221__$1 = state_28221;
if(cljs.core.truth_(inst_28208)){
var statearr_28228_28251 = state_28221__$1;
(statearr_28228_28251[(1)] = (8));

} else {
var statearr_28229_28252 = state_28221__$1;
(statearr_28229_28252[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28222 === (3))){
var inst_28219 = (state_28221[(2)]);
var state_28221__$1 = state_28221;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28221__$1,inst_28219);
} else {
if((state_val_28222 === (2))){
var state_28221__$1 = state_28221;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28221__$1,(4),ch);
} else {
if((state_val_28222 === (11))){
var inst_28211 = (state_28221[(2)]);
var state_28221__$1 = state_28221;
var statearr_28230_28253 = state_28221__$1;
(statearr_28230_28253[(2)] = inst_28211);

(statearr_28230_28253[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28222 === (9))){
var state_28221__$1 = state_28221;
var statearr_28231_28254 = state_28221__$1;
(statearr_28231_28254[(2)] = null);

(statearr_28231_28254[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28222 === (5))){
var inst_28206 = cljs.core.async.close_BANG_.call(null,out);
var state_28221__$1 = state_28221;
var statearr_28232_28255 = state_28221__$1;
(statearr_28232_28255[(2)] = inst_28206);

(statearr_28232_28255[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28222 === (10))){
var inst_28214 = (state_28221[(2)]);
var state_28221__$1 = (function (){var statearr_28233 = state_28221;
(statearr_28233[(8)] = inst_28214);

return statearr_28233;
})();
var statearr_28234_28256 = state_28221__$1;
(statearr_28234_28256[(2)] = null);

(statearr_28234_28256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28222 === (8))){
var inst_28203 = (state_28221[(7)]);
var state_28221__$1 = state_28221;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28221__$1,(11),out,inst_28203);
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
});})(c__18530__auto___28246,out))
;
return ((function (switch__18465__auto__,c__18530__auto___28246,out){
return (function() {
var cljs$core$async$state_machine__18466__auto__ = null;
var cljs$core$async$state_machine__18466__auto____0 = (function (){
var statearr_28238 = [null,null,null,null,null,null,null,null,null];
(statearr_28238[(0)] = cljs$core$async$state_machine__18466__auto__);

(statearr_28238[(1)] = (1));

return statearr_28238;
});
var cljs$core$async$state_machine__18466__auto____1 = (function (state_28221){
while(true){
var ret_value__18467__auto__ = (function (){try{while(true){
var result__18468__auto__ = switch__18465__auto__.call(null,state_28221);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18468__auto__;
}
break;
}
}catch (e28239){if((e28239 instanceof Object)){
var ex__18469__auto__ = e28239;
var statearr_28240_28257 = state_28221;
(statearr_28240_28257[(5)] = ex__18469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28221);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28239;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28258 = state_28221;
state_28221 = G__28258;
continue;
} else {
return ret_value__18467__auto__;
}
break;
}
});
cljs$core$async$state_machine__18466__auto__ = function(state_28221){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18466__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18466__auto____1.call(this,state_28221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18466__auto____0;
cljs$core$async$state_machine__18466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18466__auto____1;
return cljs$core$async$state_machine__18466__auto__;
})()
;})(switch__18465__auto__,c__18530__auto___28246,out))
})();
var state__18532__auto__ = (function (){var statearr_28241 = f__18531__auto__.call(null);
(statearr_28241[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18530__auto___28246);

return statearr_28241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18532__auto__);
});})(c__18530__auto___28246,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args28259 = [];
var len__17505__auto___28262 = arguments.length;
var i__17506__auto___28263 = (0);
while(true){
if((i__17506__auto___28263 < len__17505__auto___28262)){
args28259.push((arguments[i__17506__auto___28263]));

var G__28264 = (i__17506__auto___28263 + (1));
i__17506__auto___28263 = G__28264;
continue;
} else {
}
break;
}

var G__28261 = args28259.length;
switch (G__28261) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28259.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__18530__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18530__auto__){
return (function (){
var f__18531__auto__ = (function (){var switch__18465__auto__ = ((function (c__18530__auto__){
return (function (state_28431){
var state_val_28432 = (state_28431[(1)]);
if((state_val_28432 === (7))){
var inst_28427 = (state_28431[(2)]);
var state_28431__$1 = state_28431;
var statearr_28433_28474 = state_28431__$1;
(statearr_28433_28474[(2)] = inst_28427);

(statearr_28433_28474[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28432 === (20))){
var inst_28397 = (state_28431[(7)]);
var inst_28408 = (state_28431[(2)]);
var inst_28409 = cljs.core.next.call(null,inst_28397);
var inst_28383 = inst_28409;
var inst_28384 = null;
var inst_28385 = (0);
var inst_28386 = (0);
var state_28431__$1 = (function (){var statearr_28434 = state_28431;
(statearr_28434[(8)] = inst_28385);

(statearr_28434[(9)] = inst_28384);

(statearr_28434[(10)] = inst_28386);

(statearr_28434[(11)] = inst_28383);

(statearr_28434[(12)] = inst_28408);

return statearr_28434;
})();
var statearr_28435_28475 = state_28431__$1;
(statearr_28435_28475[(2)] = null);

(statearr_28435_28475[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28432 === (1))){
var state_28431__$1 = state_28431;
var statearr_28436_28476 = state_28431__$1;
(statearr_28436_28476[(2)] = null);

(statearr_28436_28476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28432 === (4))){
var inst_28372 = (state_28431[(13)]);
var inst_28372__$1 = (state_28431[(2)]);
var inst_28373 = (inst_28372__$1 == null);
var state_28431__$1 = (function (){var statearr_28437 = state_28431;
(statearr_28437[(13)] = inst_28372__$1);

return statearr_28437;
})();
if(cljs.core.truth_(inst_28373)){
var statearr_28438_28477 = state_28431__$1;
(statearr_28438_28477[(1)] = (5));

} else {
var statearr_28439_28478 = state_28431__$1;
(statearr_28439_28478[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28432 === (15))){
var state_28431__$1 = state_28431;
var statearr_28443_28479 = state_28431__$1;
(statearr_28443_28479[(2)] = null);

(statearr_28443_28479[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28432 === (21))){
var state_28431__$1 = state_28431;
var statearr_28444_28480 = state_28431__$1;
(statearr_28444_28480[(2)] = null);

(statearr_28444_28480[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28432 === (13))){
var inst_28385 = (state_28431[(8)]);
var inst_28384 = (state_28431[(9)]);
var inst_28386 = (state_28431[(10)]);
var inst_28383 = (state_28431[(11)]);
var inst_28393 = (state_28431[(2)]);
var inst_28394 = (inst_28386 + (1));
var tmp28440 = inst_28385;
var tmp28441 = inst_28384;
var tmp28442 = inst_28383;
var inst_28383__$1 = tmp28442;
var inst_28384__$1 = tmp28441;
var inst_28385__$1 = tmp28440;
var inst_28386__$1 = inst_28394;
var state_28431__$1 = (function (){var statearr_28445 = state_28431;
(statearr_28445[(8)] = inst_28385__$1);

(statearr_28445[(9)] = inst_28384__$1);

(statearr_28445[(10)] = inst_28386__$1);

(statearr_28445[(11)] = inst_28383__$1);

(statearr_28445[(14)] = inst_28393);

return statearr_28445;
})();
var statearr_28446_28481 = state_28431__$1;
(statearr_28446_28481[(2)] = null);

(statearr_28446_28481[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28432 === (22))){
var state_28431__$1 = state_28431;
var statearr_28447_28482 = state_28431__$1;
(statearr_28447_28482[(2)] = null);

(statearr_28447_28482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28432 === (6))){
var inst_28372 = (state_28431[(13)]);
var inst_28381 = f.call(null,inst_28372);
var inst_28382 = cljs.core.seq.call(null,inst_28381);
var inst_28383 = inst_28382;
var inst_28384 = null;
var inst_28385 = (0);
var inst_28386 = (0);
var state_28431__$1 = (function (){var statearr_28448 = state_28431;
(statearr_28448[(8)] = inst_28385);

(statearr_28448[(9)] = inst_28384);

(statearr_28448[(10)] = inst_28386);

(statearr_28448[(11)] = inst_28383);

return statearr_28448;
})();
var statearr_28449_28483 = state_28431__$1;
(statearr_28449_28483[(2)] = null);

(statearr_28449_28483[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28432 === (17))){
var inst_28397 = (state_28431[(7)]);
var inst_28401 = cljs.core.chunk_first.call(null,inst_28397);
var inst_28402 = cljs.core.chunk_rest.call(null,inst_28397);
var inst_28403 = cljs.core.count.call(null,inst_28401);
var inst_28383 = inst_28402;
var inst_28384 = inst_28401;
var inst_28385 = inst_28403;
var inst_28386 = (0);
var state_28431__$1 = (function (){var statearr_28450 = state_28431;
(statearr_28450[(8)] = inst_28385);

(statearr_28450[(9)] = inst_28384);

(statearr_28450[(10)] = inst_28386);

(statearr_28450[(11)] = inst_28383);

return statearr_28450;
})();
var statearr_28451_28484 = state_28431__$1;
(statearr_28451_28484[(2)] = null);

(statearr_28451_28484[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28432 === (3))){
var inst_28429 = (state_28431[(2)]);
var state_28431__$1 = state_28431;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28431__$1,inst_28429);
} else {
if((state_val_28432 === (12))){
var inst_28417 = (state_28431[(2)]);
var state_28431__$1 = state_28431;
var statearr_28452_28485 = state_28431__$1;
(statearr_28452_28485[(2)] = inst_28417);

(statearr_28452_28485[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28432 === (2))){
var state_28431__$1 = state_28431;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28431__$1,(4),in$);
} else {
if((state_val_28432 === (23))){
var inst_28425 = (state_28431[(2)]);
var state_28431__$1 = state_28431;
var statearr_28453_28486 = state_28431__$1;
(statearr_28453_28486[(2)] = inst_28425);

(statearr_28453_28486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28432 === (19))){
var inst_28412 = (state_28431[(2)]);
var state_28431__$1 = state_28431;
var statearr_28454_28487 = state_28431__$1;
(statearr_28454_28487[(2)] = inst_28412);

(statearr_28454_28487[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28432 === (11))){
var inst_28397 = (state_28431[(7)]);
var inst_28383 = (state_28431[(11)]);
var inst_28397__$1 = cljs.core.seq.call(null,inst_28383);
var state_28431__$1 = (function (){var statearr_28455 = state_28431;
(statearr_28455[(7)] = inst_28397__$1);

return statearr_28455;
})();
if(inst_28397__$1){
var statearr_28456_28488 = state_28431__$1;
(statearr_28456_28488[(1)] = (14));

} else {
var statearr_28457_28489 = state_28431__$1;
(statearr_28457_28489[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28432 === (9))){
var inst_28419 = (state_28431[(2)]);
var inst_28420 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28431__$1 = (function (){var statearr_28458 = state_28431;
(statearr_28458[(15)] = inst_28419);

return statearr_28458;
})();
if(cljs.core.truth_(inst_28420)){
var statearr_28459_28490 = state_28431__$1;
(statearr_28459_28490[(1)] = (21));

} else {
var statearr_28460_28491 = state_28431__$1;
(statearr_28460_28491[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28432 === (5))){
var inst_28375 = cljs.core.async.close_BANG_.call(null,out);
var state_28431__$1 = state_28431;
var statearr_28461_28492 = state_28431__$1;
(statearr_28461_28492[(2)] = inst_28375);

(statearr_28461_28492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28432 === (14))){
var inst_28397 = (state_28431[(7)]);
var inst_28399 = cljs.core.chunked_seq_QMARK_.call(null,inst_28397);
var state_28431__$1 = state_28431;
if(inst_28399){
var statearr_28462_28493 = state_28431__$1;
(statearr_28462_28493[(1)] = (17));

} else {
var statearr_28463_28494 = state_28431__$1;
(statearr_28463_28494[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28432 === (16))){
var inst_28415 = (state_28431[(2)]);
var state_28431__$1 = state_28431;
var statearr_28464_28495 = state_28431__$1;
(statearr_28464_28495[(2)] = inst_28415);

(statearr_28464_28495[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28432 === (10))){
var inst_28384 = (state_28431[(9)]);
var inst_28386 = (state_28431[(10)]);
var inst_28391 = cljs.core._nth.call(null,inst_28384,inst_28386);
var state_28431__$1 = state_28431;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28431__$1,(13),out,inst_28391);
} else {
if((state_val_28432 === (18))){
var inst_28397 = (state_28431[(7)]);
var inst_28406 = cljs.core.first.call(null,inst_28397);
var state_28431__$1 = state_28431;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28431__$1,(20),out,inst_28406);
} else {
if((state_val_28432 === (8))){
var inst_28385 = (state_28431[(8)]);
var inst_28386 = (state_28431[(10)]);
var inst_28388 = (inst_28386 < inst_28385);
var inst_28389 = inst_28388;
var state_28431__$1 = state_28431;
if(cljs.core.truth_(inst_28389)){
var statearr_28465_28496 = state_28431__$1;
(statearr_28465_28496[(1)] = (10));

} else {
var statearr_28466_28497 = state_28431__$1;
(statearr_28466_28497[(1)] = (11));

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
}
}
}
}
}
}
});})(c__18530__auto__))
;
return ((function (switch__18465__auto__,c__18530__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__18466__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__18466__auto____0 = (function (){
var statearr_28470 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28470[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__18466__auto__);

(statearr_28470[(1)] = (1));

return statearr_28470;
});
var cljs$core$async$mapcat_STAR__$_state_machine__18466__auto____1 = (function (state_28431){
while(true){
var ret_value__18467__auto__ = (function (){try{while(true){
var result__18468__auto__ = switch__18465__auto__.call(null,state_28431);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18468__auto__;
}
break;
}
}catch (e28471){if((e28471 instanceof Object)){
var ex__18469__auto__ = e28471;
var statearr_28472_28498 = state_28431;
(statearr_28472_28498[(5)] = ex__18469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28431);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28471;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28499 = state_28431;
state_28431 = G__28499;
continue;
} else {
return ret_value__18467__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__18466__auto__ = function(state_28431){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__18466__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__18466__auto____1.call(this,state_28431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__18466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__18466__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__18466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__18466__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__18466__auto__;
})()
;})(switch__18465__auto__,c__18530__auto__))
})();
var state__18532__auto__ = (function (){var statearr_28473 = f__18531__auto__.call(null);
(statearr_28473[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18530__auto__);

return statearr_28473;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18532__auto__);
});})(c__18530__auto__))
);

return c__18530__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args28500 = [];
var len__17505__auto___28503 = arguments.length;
var i__17506__auto___28504 = (0);
while(true){
if((i__17506__auto___28504 < len__17505__auto___28503)){
args28500.push((arguments[i__17506__auto___28504]));

var G__28505 = (i__17506__auto___28504 + (1));
i__17506__auto___28504 = G__28505;
continue;
} else {
}
break;
}

var G__28502 = args28500.length;
switch (G__28502) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28500.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args28507 = [];
var len__17505__auto___28510 = arguments.length;
var i__17506__auto___28511 = (0);
while(true){
if((i__17506__auto___28511 < len__17505__auto___28510)){
args28507.push((arguments[i__17506__auto___28511]));

var G__28512 = (i__17506__auto___28511 + (1));
i__17506__auto___28511 = G__28512;
continue;
} else {
}
break;
}

var G__28509 = args28507.length;
switch (G__28509) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28507.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args28514 = [];
var len__17505__auto___28565 = arguments.length;
var i__17506__auto___28566 = (0);
while(true){
if((i__17506__auto___28566 < len__17505__auto___28565)){
args28514.push((arguments[i__17506__auto___28566]));

var G__28567 = (i__17506__auto___28566 + (1));
i__17506__auto___28566 = G__28567;
continue;
} else {
}
break;
}

var G__28516 = args28514.length;
switch (G__28516) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28514.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18530__auto___28569 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18530__auto___28569,out){
return (function (){
var f__18531__auto__ = (function (){var switch__18465__auto__ = ((function (c__18530__auto___28569,out){
return (function (state_28540){
var state_val_28541 = (state_28540[(1)]);
if((state_val_28541 === (7))){
var inst_28535 = (state_28540[(2)]);
var state_28540__$1 = state_28540;
var statearr_28542_28570 = state_28540__$1;
(statearr_28542_28570[(2)] = inst_28535);

(statearr_28542_28570[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28541 === (1))){
var inst_28517 = null;
var state_28540__$1 = (function (){var statearr_28543 = state_28540;
(statearr_28543[(7)] = inst_28517);

return statearr_28543;
})();
var statearr_28544_28571 = state_28540__$1;
(statearr_28544_28571[(2)] = null);

(statearr_28544_28571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28541 === (4))){
var inst_28520 = (state_28540[(8)]);
var inst_28520__$1 = (state_28540[(2)]);
var inst_28521 = (inst_28520__$1 == null);
var inst_28522 = cljs.core.not.call(null,inst_28521);
var state_28540__$1 = (function (){var statearr_28545 = state_28540;
(statearr_28545[(8)] = inst_28520__$1);

return statearr_28545;
})();
if(inst_28522){
var statearr_28546_28572 = state_28540__$1;
(statearr_28546_28572[(1)] = (5));

} else {
var statearr_28547_28573 = state_28540__$1;
(statearr_28547_28573[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28541 === (6))){
var state_28540__$1 = state_28540;
var statearr_28548_28574 = state_28540__$1;
(statearr_28548_28574[(2)] = null);

(statearr_28548_28574[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28541 === (3))){
var inst_28537 = (state_28540[(2)]);
var inst_28538 = cljs.core.async.close_BANG_.call(null,out);
var state_28540__$1 = (function (){var statearr_28549 = state_28540;
(statearr_28549[(9)] = inst_28537);

return statearr_28549;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28540__$1,inst_28538);
} else {
if((state_val_28541 === (2))){
var state_28540__$1 = state_28540;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28540__$1,(4),ch);
} else {
if((state_val_28541 === (11))){
var inst_28520 = (state_28540[(8)]);
var inst_28529 = (state_28540[(2)]);
var inst_28517 = inst_28520;
var state_28540__$1 = (function (){var statearr_28550 = state_28540;
(statearr_28550[(10)] = inst_28529);

(statearr_28550[(7)] = inst_28517);

return statearr_28550;
})();
var statearr_28551_28575 = state_28540__$1;
(statearr_28551_28575[(2)] = null);

(statearr_28551_28575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28541 === (9))){
var inst_28520 = (state_28540[(8)]);
var state_28540__$1 = state_28540;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28540__$1,(11),out,inst_28520);
} else {
if((state_val_28541 === (5))){
var inst_28520 = (state_28540[(8)]);
var inst_28517 = (state_28540[(7)]);
var inst_28524 = cljs.core._EQ_.call(null,inst_28520,inst_28517);
var state_28540__$1 = state_28540;
if(inst_28524){
var statearr_28553_28576 = state_28540__$1;
(statearr_28553_28576[(1)] = (8));

} else {
var statearr_28554_28577 = state_28540__$1;
(statearr_28554_28577[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28541 === (10))){
var inst_28532 = (state_28540[(2)]);
var state_28540__$1 = state_28540;
var statearr_28555_28578 = state_28540__$1;
(statearr_28555_28578[(2)] = inst_28532);

(statearr_28555_28578[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28541 === (8))){
var inst_28517 = (state_28540[(7)]);
var tmp28552 = inst_28517;
var inst_28517__$1 = tmp28552;
var state_28540__$1 = (function (){var statearr_28556 = state_28540;
(statearr_28556[(7)] = inst_28517__$1);

return statearr_28556;
})();
var statearr_28557_28579 = state_28540__$1;
(statearr_28557_28579[(2)] = null);

(statearr_28557_28579[(1)] = (2));


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
});})(c__18530__auto___28569,out))
;
return ((function (switch__18465__auto__,c__18530__auto___28569,out){
return (function() {
var cljs$core$async$state_machine__18466__auto__ = null;
var cljs$core$async$state_machine__18466__auto____0 = (function (){
var statearr_28561 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28561[(0)] = cljs$core$async$state_machine__18466__auto__);

(statearr_28561[(1)] = (1));

return statearr_28561;
});
var cljs$core$async$state_machine__18466__auto____1 = (function (state_28540){
while(true){
var ret_value__18467__auto__ = (function (){try{while(true){
var result__18468__auto__ = switch__18465__auto__.call(null,state_28540);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18468__auto__;
}
break;
}
}catch (e28562){if((e28562 instanceof Object)){
var ex__18469__auto__ = e28562;
var statearr_28563_28580 = state_28540;
(statearr_28563_28580[(5)] = ex__18469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28540);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28562;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28581 = state_28540;
state_28540 = G__28581;
continue;
} else {
return ret_value__18467__auto__;
}
break;
}
});
cljs$core$async$state_machine__18466__auto__ = function(state_28540){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18466__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18466__auto____1.call(this,state_28540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18466__auto____0;
cljs$core$async$state_machine__18466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18466__auto____1;
return cljs$core$async$state_machine__18466__auto__;
})()
;})(switch__18465__auto__,c__18530__auto___28569,out))
})();
var state__18532__auto__ = (function (){var statearr_28564 = f__18531__auto__.call(null);
(statearr_28564[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18530__auto___28569);

return statearr_28564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18532__auto__);
});})(c__18530__auto___28569,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args28582 = [];
var len__17505__auto___28652 = arguments.length;
var i__17506__auto___28653 = (0);
while(true){
if((i__17506__auto___28653 < len__17505__auto___28652)){
args28582.push((arguments[i__17506__auto___28653]));

var G__28654 = (i__17506__auto___28653 + (1));
i__17506__auto___28653 = G__28654;
continue;
} else {
}
break;
}

var G__28584 = args28582.length;
switch (G__28584) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28582.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18530__auto___28656 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18530__auto___28656,out){
return (function (){
var f__18531__auto__ = (function (){var switch__18465__auto__ = ((function (c__18530__auto___28656,out){
return (function (state_28622){
var state_val_28623 = (state_28622[(1)]);
if((state_val_28623 === (7))){
var inst_28618 = (state_28622[(2)]);
var state_28622__$1 = state_28622;
var statearr_28624_28657 = state_28622__$1;
(statearr_28624_28657[(2)] = inst_28618);

(statearr_28624_28657[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (1))){
var inst_28585 = (new Array(n));
var inst_28586 = inst_28585;
var inst_28587 = (0);
var state_28622__$1 = (function (){var statearr_28625 = state_28622;
(statearr_28625[(7)] = inst_28586);

(statearr_28625[(8)] = inst_28587);

return statearr_28625;
})();
var statearr_28626_28658 = state_28622__$1;
(statearr_28626_28658[(2)] = null);

(statearr_28626_28658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (4))){
var inst_28590 = (state_28622[(9)]);
var inst_28590__$1 = (state_28622[(2)]);
var inst_28591 = (inst_28590__$1 == null);
var inst_28592 = cljs.core.not.call(null,inst_28591);
var state_28622__$1 = (function (){var statearr_28627 = state_28622;
(statearr_28627[(9)] = inst_28590__$1);

return statearr_28627;
})();
if(inst_28592){
var statearr_28628_28659 = state_28622__$1;
(statearr_28628_28659[(1)] = (5));

} else {
var statearr_28629_28660 = state_28622__$1;
(statearr_28629_28660[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (15))){
var inst_28612 = (state_28622[(2)]);
var state_28622__$1 = state_28622;
var statearr_28630_28661 = state_28622__$1;
(statearr_28630_28661[(2)] = inst_28612);

(statearr_28630_28661[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (13))){
var state_28622__$1 = state_28622;
var statearr_28631_28662 = state_28622__$1;
(statearr_28631_28662[(2)] = null);

(statearr_28631_28662[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (6))){
var inst_28587 = (state_28622[(8)]);
var inst_28608 = (inst_28587 > (0));
var state_28622__$1 = state_28622;
if(cljs.core.truth_(inst_28608)){
var statearr_28632_28663 = state_28622__$1;
(statearr_28632_28663[(1)] = (12));

} else {
var statearr_28633_28664 = state_28622__$1;
(statearr_28633_28664[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (3))){
var inst_28620 = (state_28622[(2)]);
var state_28622__$1 = state_28622;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28622__$1,inst_28620);
} else {
if((state_val_28623 === (12))){
var inst_28586 = (state_28622[(7)]);
var inst_28610 = cljs.core.vec.call(null,inst_28586);
var state_28622__$1 = state_28622;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28622__$1,(15),out,inst_28610);
} else {
if((state_val_28623 === (2))){
var state_28622__$1 = state_28622;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28622__$1,(4),ch);
} else {
if((state_val_28623 === (11))){
var inst_28602 = (state_28622[(2)]);
var inst_28603 = (new Array(n));
var inst_28586 = inst_28603;
var inst_28587 = (0);
var state_28622__$1 = (function (){var statearr_28634 = state_28622;
(statearr_28634[(7)] = inst_28586);

(statearr_28634[(10)] = inst_28602);

(statearr_28634[(8)] = inst_28587);

return statearr_28634;
})();
var statearr_28635_28665 = state_28622__$1;
(statearr_28635_28665[(2)] = null);

(statearr_28635_28665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (9))){
var inst_28586 = (state_28622[(7)]);
var inst_28600 = cljs.core.vec.call(null,inst_28586);
var state_28622__$1 = state_28622;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28622__$1,(11),out,inst_28600);
} else {
if((state_val_28623 === (5))){
var inst_28586 = (state_28622[(7)]);
var inst_28590 = (state_28622[(9)]);
var inst_28587 = (state_28622[(8)]);
var inst_28595 = (state_28622[(11)]);
var inst_28594 = (inst_28586[inst_28587] = inst_28590);
var inst_28595__$1 = (inst_28587 + (1));
var inst_28596 = (inst_28595__$1 < n);
var state_28622__$1 = (function (){var statearr_28636 = state_28622;
(statearr_28636[(11)] = inst_28595__$1);

(statearr_28636[(12)] = inst_28594);

return statearr_28636;
})();
if(cljs.core.truth_(inst_28596)){
var statearr_28637_28666 = state_28622__$1;
(statearr_28637_28666[(1)] = (8));

} else {
var statearr_28638_28667 = state_28622__$1;
(statearr_28638_28667[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (14))){
var inst_28615 = (state_28622[(2)]);
var inst_28616 = cljs.core.async.close_BANG_.call(null,out);
var state_28622__$1 = (function (){var statearr_28640 = state_28622;
(statearr_28640[(13)] = inst_28615);

return statearr_28640;
})();
var statearr_28641_28668 = state_28622__$1;
(statearr_28641_28668[(2)] = inst_28616);

(statearr_28641_28668[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (10))){
var inst_28606 = (state_28622[(2)]);
var state_28622__$1 = state_28622;
var statearr_28642_28669 = state_28622__$1;
(statearr_28642_28669[(2)] = inst_28606);

(statearr_28642_28669[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (8))){
var inst_28586 = (state_28622[(7)]);
var inst_28595 = (state_28622[(11)]);
var tmp28639 = inst_28586;
var inst_28586__$1 = tmp28639;
var inst_28587 = inst_28595;
var state_28622__$1 = (function (){var statearr_28643 = state_28622;
(statearr_28643[(7)] = inst_28586__$1);

(statearr_28643[(8)] = inst_28587);

return statearr_28643;
})();
var statearr_28644_28670 = state_28622__$1;
(statearr_28644_28670[(2)] = null);

(statearr_28644_28670[(1)] = (2));


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
});})(c__18530__auto___28656,out))
;
return ((function (switch__18465__auto__,c__18530__auto___28656,out){
return (function() {
var cljs$core$async$state_machine__18466__auto__ = null;
var cljs$core$async$state_machine__18466__auto____0 = (function (){
var statearr_28648 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28648[(0)] = cljs$core$async$state_machine__18466__auto__);

(statearr_28648[(1)] = (1));

return statearr_28648;
});
var cljs$core$async$state_machine__18466__auto____1 = (function (state_28622){
while(true){
var ret_value__18467__auto__ = (function (){try{while(true){
var result__18468__auto__ = switch__18465__auto__.call(null,state_28622);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18468__auto__;
}
break;
}
}catch (e28649){if((e28649 instanceof Object)){
var ex__18469__auto__ = e28649;
var statearr_28650_28671 = state_28622;
(statearr_28650_28671[(5)] = ex__18469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28622);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28649;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28672 = state_28622;
state_28622 = G__28672;
continue;
} else {
return ret_value__18467__auto__;
}
break;
}
});
cljs$core$async$state_machine__18466__auto__ = function(state_28622){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18466__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18466__auto____1.call(this,state_28622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18466__auto____0;
cljs$core$async$state_machine__18466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18466__auto____1;
return cljs$core$async$state_machine__18466__auto__;
})()
;})(switch__18465__auto__,c__18530__auto___28656,out))
})();
var state__18532__auto__ = (function (){var statearr_28651 = f__18531__auto__.call(null);
(statearr_28651[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18530__auto___28656);

return statearr_28651;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18532__auto__);
});})(c__18530__auto___28656,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args28673 = [];
var len__17505__auto___28747 = arguments.length;
var i__17506__auto___28748 = (0);
while(true){
if((i__17506__auto___28748 < len__17505__auto___28747)){
args28673.push((arguments[i__17506__auto___28748]));

var G__28749 = (i__17506__auto___28748 + (1));
i__17506__auto___28748 = G__28749;
continue;
} else {
}
break;
}

var G__28675 = args28673.length;
switch (G__28675) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28673.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18530__auto___28751 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18530__auto___28751,out){
return (function (){
var f__18531__auto__ = (function (){var switch__18465__auto__ = ((function (c__18530__auto___28751,out){
return (function (state_28717){
var state_val_28718 = (state_28717[(1)]);
if((state_val_28718 === (7))){
var inst_28713 = (state_28717[(2)]);
var state_28717__$1 = state_28717;
var statearr_28719_28752 = state_28717__$1;
(statearr_28719_28752[(2)] = inst_28713);

(statearr_28719_28752[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28718 === (1))){
var inst_28676 = [];
var inst_28677 = inst_28676;
var inst_28678 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28717__$1 = (function (){var statearr_28720 = state_28717;
(statearr_28720[(7)] = inst_28677);

(statearr_28720[(8)] = inst_28678);

return statearr_28720;
})();
var statearr_28721_28753 = state_28717__$1;
(statearr_28721_28753[(2)] = null);

(statearr_28721_28753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28718 === (4))){
var inst_28681 = (state_28717[(9)]);
var inst_28681__$1 = (state_28717[(2)]);
var inst_28682 = (inst_28681__$1 == null);
var inst_28683 = cljs.core.not.call(null,inst_28682);
var state_28717__$1 = (function (){var statearr_28722 = state_28717;
(statearr_28722[(9)] = inst_28681__$1);

return statearr_28722;
})();
if(inst_28683){
var statearr_28723_28754 = state_28717__$1;
(statearr_28723_28754[(1)] = (5));

} else {
var statearr_28724_28755 = state_28717__$1;
(statearr_28724_28755[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28718 === (15))){
var inst_28707 = (state_28717[(2)]);
var state_28717__$1 = state_28717;
var statearr_28725_28756 = state_28717__$1;
(statearr_28725_28756[(2)] = inst_28707);

(statearr_28725_28756[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28718 === (13))){
var state_28717__$1 = state_28717;
var statearr_28726_28757 = state_28717__$1;
(statearr_28726_28757[(2)] = null);

(statearr_28726_28757[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28718 === (6))){
var inst_28677 = (state_28717[(7)]);
var inst_28702 = inst_28677.length;
var inst_28703 = (inst_28702 > (0));
var state_28717__$1 = state_28717;
if(cljs.core.truth_(inst_28703)){
var statearr_28727_28758 = state_28717__$1;
(statearr_28727_28758[(1)] = (12));

} else {
var statearr_28728_28759 = state_28717__$1;
(statearr_28728_28759[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28718 === (3))){
var inst_28715 = (state_28717[(2)]);
var state_28717__$1 = state_28717;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28717__$1,inst_28715);
} else {
if((state_val_28718 === (12))){
var inst_28677 = (state_28717[(7)]);
var inst_28705 = cljs.core.vec.call(null,inst_28677);
var state_28717__$1 = state_28717;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28717__$1,(15),out,inst_28705);
} else {
if((state_val_28718 === (2))){
var state_28717__$1 = state_28717;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28717__$1,(4),ch);
} else {
if((state_val_28718 === (11))){
var inst_28681 = (state_28717[(9)]);
var inst_28685 = (state_28717[(10)]);
var inst_28695 = (state_28717[(2)]);
var inst_28696 = [];
var inst_28697 = inst_28696.push(inst_28681);
var inst_28677 = inst_28696;
var inst_28678 = inst_28685;
var state_28717__$1 = (function (){var statearr_28729 = state_28717;
(statearr_28729[(7)] = inst_28677);

(statearr_28729[(11)] = inst_28695);

(statearr_28729[(8)] = inst_28678);

(statearr_28729[(12)] = inst_28697);

return statearr_28729;
})();
var statearr_28730_28760 = state_28717__$1;
(statearr_28730_28760[(2)] = null);

(statearr_28730_28760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28718 === (9))){
var inst_28677 = (state_28717[(7)]);
var inst_28693 = cljs.core.vec.call(null,inst_28677);
var state_28717__$1 = state_28717;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28717__$1,(11),out,inst_28693);
} else {
if((state_val_28718 === (5))){
var inst_28678 = (state_28717[(8)]);
var inst_28681 = (state_28717[(9)]);
var inst_28685 = (state_28717[(10)]);
var inst_28685__$1 = f.call(null,inst_28681);
var inst_28686 = cljs.core._EQ_.call(null,inst_28685__$1,inst_28678);
var inst_28687 = cljs.core.keyword_identical_QMARK_.call(null,inst_28678,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28688 = (inst_28686) || (inst_28687);
var state_28717__$1 = (function (){var statearr_28731 = state_28717;
(statearr_28731[(10)] = inst_28685__$1);

return statearr_28731;
})();
if(cljs.core.truth_(inst_28688)){
var statearr_28732_28761 = state_28717__$1;
(statearr_28732_28761[(1)] = (8));

} else {
var statearr_28733_28762 = state_28717__$1;
(statearr_28733_28762[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28718 === (14))){
var inst_28710 = (state_28717[(2)]);
var inst_28711 = cljs.core.async.close_BANG_.call(null,out);
var state_28717__$1 = (function (){var statearr_28735 = state_28717;
(statearr_28735[(13)] = inst_28710);

return statearr_28735;
})();
var statearr_28736_28763 = state_28717__$1;
(statearr_28736_28763[(2)] = inst_28711);

(statearr_28736_28763[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28718 === (10))){
var inst_28700 = (state_28717[(2)]);
var state_28717__$1 = state_28717;
var statearr_28737_28764 = state_28717__$1;
(statearr_28737_28764[(2)] = inst_28700);

(statearr_28737_28764[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28718 === (8))){
var inst_28677 = (state_28717[(7)]);
var inst_28681 = (state_28717[(9)]);
var inst_28685 = (state_28717[(10)]);
var inst_28690 = inst_28677.push(inst_28681);
var tmp28734 = inst_28677;
var inst_28677__$1 = tmp28734;
var inst_28678 = inst_28685;
var state_28717__$1 = (function (){var statearr_28738 = state_28717;
(statearr_28738[(7)] = inst_28677__$1);

(statearr_28738[(14)] = inst_28690);

(statearr_28738[(8)] = inst_28678);

return statearr_28738;
})();
var statearr_28739_28765 = state_28717__$1;
(statearr_28739_28765[(2)] = null);

(statearr_28739_28765[(1)] = (2));


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
});})(c__18530__auto___28751,out))
;
return ((function (switch__18465__auto__,c__18530__auto___28751,out){
return (function() {
var cljs$core$async$state_machine__18466__auto__ = null;
var cljs$core$async$state_machine__18466__auto____0 = (function (){
var statearr_28743 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28743[(0)] = cljs$core$async$state_machine__18466__auto__);

(statearr_28743[(1)] = (1));

return statearr_28743;
});
var cljs$core$async$state_machine__18466__auto____1 = (function (state_28717){
while(true){
var ret_value__18467__auto__ = (function (){try{while(true){
var result__18468__auto__ = switch__18465__auto__.call(null,state_28717);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18468__auto__;
}
break;
}
}catch (e28744){if((e28744 instanceof Object)){
var ex__18469__auto__ = e28744;
var statearr_28745_28766 = state_28717;
(statearr_28745_28766[(5)] = ex__18469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28717);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28744;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28767 = state_28717;
state_28717 = G__28767;
continue;
} else {
return ret_value__18467__auto__;
}
break;
}
});
cljs$core$async$state_machine__18466__auto__ = function(state_28717){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18466__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18466__auto____1.call(this,state_28717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18466__auto____0;
cljs$core$async$state_machine__18466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18466__auto____1;
return cljs$core$async$state_machine__18466__auto__;
})()
;})(switch__18465__auto__,c__18530__auto___28751,out))
})();
var state__18532__auto__ = (function (){var statearr_28746 = f__18531__auto__.call(null);
(statearr_28746[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18530__auto___28751);

return statearr_28746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18532__auto__);
});})(c__18530__auto___28751,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map