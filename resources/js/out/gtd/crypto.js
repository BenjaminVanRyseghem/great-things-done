// Compiled by ClojureScript 1.7.122 {}
goog.provide('gtd.crypto');
goog.require('cljs.core');
gtd.crypto.remote = require("remote");
gtd.crypto.crypto = gtd.crypto.remote.require("crypto");
/**
 * Encrypt the provided text with the provided password. An optional algorithm can be provided, default is `aes-256-ctr`
 */
gtd.crypto.encrypt = (function gtd$crypto$encrypt(var_args){
var args__17512__auto__ = [];
var len__17505__auto___22634 = arguments.length;
var i__17506__auto___22635 = (0);
while(true){
if((i__17506__auto___22635 < len__17505__auto___22634)){
args__17512__auto__.push((arguments[i__17506__auto___22635]));

var G__22636 = (i__17506__auto___22635 + (1));
i__17506__auto___22635 = G__22636;
continue;
} else {
}
break;
}

var argseq__17513__auto__ = ((((2) < args__17512__auto__.length))?(new cljs.core.IndexedSeq(args__17512__auto__.slice((2)),(0))):null);
return gtd.crypto.encrypt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17513__auto__);
});

gtd.crypto.encrypt.cljs$core$IFn$_invoke$arity$variadic = (function (text,password,p__22631){
var map__22632 = p__22631;
var map__22632__$1 = ((((!((map__22632 == null)))?((((map__22632.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22632.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22632):map__22632);
var algorithm = cljs.core.get.call(null,map__22632__$1,new cljs.core.Keyword(null,"algorithm","algorithm",739262820),"aes-256-ctr");
var cipher = gtd.crypto.crypto.createCipher(algorithm,password);
var crypted = cipher.update([cljs.core.str(text)].join(''),"utf8","hex");
return (crypted + cipher.final("hex"));
});

gtd.crypto.encrypt.cljs$lang$maxFixedArity = (2);

gtd.crypto.encrypt.cljs$lang$applyTo = (function (seq22628){
var G__22629 = cljs.core.first.call(null,seq22628);
var seq22628__$1 = cljs.core.next.call(null,seq22628);
var G__22630 = cljs.core.first.call(null,seq22628__$1);
var seq22628__$2 = cljs.core.next.call(null,seq22628__$1);
return gtd.crypto.encrypt.cljs$core$IFn$_invoke$arity$variadic(G__22629,G__22630,seq22628__$2);
});
/**
 * Decrypt the provided text with the provided password. An optional algorithm can be provided, default is `aes-256-ctr`
 */
gtd.crypto.decrypt = (function gtd$crypto$decrypt(var_args){
var args__17512__auto__ = [];
var len__17505__auto___22643 = arguments.length;
var i__17506__auto___22644 = (0);
while(true){
if((i__17506__auto___22644 < len__17505__auto___22643)){
args__17512__auto__.push((arguments[i__17506__auto___22644]));

var G__22645 = (i__17506__auto___22644 + (1));
i__17506__auto___22644 = G__22645;
continue;
} else {
}
break;
}

var argseq__17513__auto__ = ((((2) < args__17512__auto__.length))?(new cljs.core.IndexedSeq(args__17512__auto__.slice((2)),(0))):null);
return gtd.crypto.decrypt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17513__auto__);
});

gtd.crypto.decrypt.cljs$core$IFn$_invoke$arity$variadic = (function (text,password,p__22640){
var map__22641 = p__22640;
var map__22641__$1 = ((((!((map__22641 == null)))?((((map__22641.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22641.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22641):map__22641);
var algorithm = cljs.core.get.call(null,map__22641__$1,new cljs.core.Keyword(null,"algorithm","algorithm",739262820),"aes-256-ctr");
var decipher = gtd.crypto.crypto.createDecipher(algorithm,password);
var decrypted = decipher.update([cljs.core.str(text)].join(''),"hex","utf8");
return (decrypted + decipher.final("utf8"));
});

gtd.crypto.decrypt.cljs$lang$maxFixedArity = (2);

gtd.crypto.decrypt.cljs$lang$applyTo = (function (seq22637){
var G__22638 = cljs.core.first.call(null,seq22637);
var seq22637__$1 = cljs.core.next.call(null,seq22637);
var G__22639 = cljs.core.first.call(null,seq22637__$1);
var seq22637__$2 = cljs.core.next.call(null,seq22637__$1);
return gtd.crypto.decrypt.cljs$core$IFn$_invoke$arity$variadic(G__22638,G__22639,seq22637__$2);
});

//# sourceMappingURL=crypto.js.map