// Compiled by ClojureScript 1.7.122 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25016_25030 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25017_25031 = null;
var count__25018_25032 = (0);
var i__25019_25033 = (0);
while(true){
if((i__25019_25033 < count__25018_25032)){
var f_25034 = cljs.core._nth.call(null,chunk__25017_25031,i__25019_25033);
cljs.core.println.call(null,"  ",f_25034);

var G__25035 = seq__25016_25030;
var G__25036 = chunk__25017_25031;
var G__25037 = count__25018_25032;
var G__25038 = (i__25019_25033 + (1));
seq__25016_25030 = G__25035;
chunk__25017_25031 = G__25036;
count__25018_25032 = G__25037;
i__25019_25033 = G__25038;
continue;
} else {
var temp__4425__auto___25039 = cljs.core.seq.call(null,seq__25016_25030);
if(temp__4425__auto___25039){
var seq__25016_25040__$1 = temp__4425__auto___25039;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25016_25040__$1)){
var c__17250__auto___25041 = cljs.core.chunk_first.call(null,seq__25016_25040__$1);
var G__25042 = cljs.core.chunk_rest.call(null,seq__25016_25040__$1);
var G__25043 = c__17250__auto___25041;
var G__25044 = cljs.core.count.call(null,c__17250__auto___25041);
var G__25045 = (0);
seq__25016_25030 = G__25042;
chunk__25017_25031 = G__25043;
count__25018_25032 = G__25044;
i__25019_25033 = G__25045;
continue;
} else {
var f_25046 = cljs.core.first.call(null,seq__25016_25040__$1);
cljs.core.println.call(null,"  ",f_25046);

var G__25047 = cljs.core.next.call(null,seq__25016_25040__$1);
var G__25048 = null;
var G__25049 = (0);
var G__25050 = (0);
seq__25016_25030 = G__25047;
chunk__25017_25031 = G__25048;
count__25018_25032 = G__25049;
i__25019_25033 = G__25050;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_25051 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16447__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16447__auto__)){
return or__16447__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_25051);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_25051)))?cljs.core.second.call(null,arglists_25051):arglists_25051));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25020 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25021 = null;
var count__25022 = (0);
var i__25023 = (0);
while(true){
if((i__25023 < count__25022)){
var vec__25024 = cljs.core._nth.call(null,chunk__25021,i__25023);
var name = cljs.core.nth.call(null,vec__25024,(0),null);
var map__25025 = cljs.core.nth.call(null,vec__25024,(1),null);
var map__25025__$1 = ((((!((map__25025 == null)))?((((map__25025.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25025.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25025):map__25025);
var doc = cljs.core.get.call(null,map__25025__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25025__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25052 = seq__25020;
var G__25053 = chunk__25021;
var G__25054 = count__25022;
var G__25055 = (i__25023 + (1));
seq__25020 = G__25052;
chunk__25021 = G__25053;
count__25022 = G__25054;
i__25023 = G__25055;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25020);
if(temp__4425__auto__){
var seq__25020__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25020__$1)){
var c__17250__auto__ = cljs.core.chunk_first.call(null,seq__25020__$1);
var G__25056 = cljs.core.chunk_rest.call(null,seq__25020__$1);
var G__25057 = c__17250__auto__;
var G__25058 = cljs.core.count.call(null,c__17250__auto__);
var G__25059 = (0);
seq__25020 = G__25056;
chunk__25021 = G__25057;
count__25022 = G__25058;
i__25023 = G__25059;
continue;
} else {
var vec__25027 = cljs.core.first.call(null,seq__25020__$1);
var name = cljs.core.nth.call(null,vec__25027,(0),null);
var map__25028 = cljs.core.nth.call(null,vec__25027,(1),null);
var map__25028__$1 = ((((!((map__25028 == null)))?((((map__25028.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25028.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25028):map__25028);
var doc = cljs.core.get.call(null,map__25028__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25028__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25060 = cljs.core.next.call(null,seq__25020__$1);
var G__25061 = null;
var G__25062 = (0);
var G__25063 = (0);
seq__25020 = G__25060;
chunk__25021 = G__25061;
count__25022 = G__25062;
i__25023 = G__25063;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map