// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16447__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16447__auto__){
return or__16447__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16447__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16447__auto__)){
return or__16447__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__25068_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__25068_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__25073 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__25074 = null;
var count__25075 = (0);
var i__25076 = (0);
while(true){
if((i__25076 < count__25075)){
var n = cljs.core._nth.call(null,chunk__25074,i__25076);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__25077 = seq__25073;
var G__25078 = chunk__25074;
var G__25079 = count__25075;
var G__25080 = (i__25076 + (1));
seq__25073 = G__25077;
chunk__25074 = G__25078;
count__25075 = G__25079;
i__25076 = G__25080;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25073);
if(temp__4425__auto__){
var seq__25073__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25073__$1)){
var c__17250__auto__ = cljs.core.chunk_first.call(null,seq__25073__$1);
var G__25081 = cljs.core.chunk_rest.call(null,seq__25073__$1);
var G__25082 = c__17250__auto__;
var G__25083 = cljs.core.count.call(null,c__17250__auto__);
var G__25084 = (0);
seq__25073 = G__25081;
chunk__25074 = G__25082;
count__25075 = G__25083;
i__25076 = G__25084;
continue;
} else {
var n = cljs.core.first.call(null,seq__25073__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__25085 = cljs.core.next.call(null,seq__25073__$1);
var G__25086 = null;
var G__25087 = (0);
var G__25088 = (0);
seq__25073 = G__25085;
chunk__25074 = G__25086;
count__25075 = G__25087;
i__25076 = G__25088;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__25127_25134 = cljs.core.seq.call(null,deps);
var chunk__25128_25135 = null;
var count__25129_25136 = (0);
var i__25130_25137 = (0);
while(true){
if((i__25130_25137 < count__25129_25136)){
var dep_25138 = cljs.core._nth.call(null,chunk__25128_25135,i__25130_25137);
topo_sort_helper_STAR_.call(null,dep_25138,(depth + (1)),state);

var G__25139 = seq__25127_25134;
var G__25140 = chunk__25128_25135;
var G__25141 = count__25129_25136;
var G__25142 = (i__25130_25137 + (1));
seq__25127_25134 = G__25139;
chunk__25128_25135 = G__25140;
count__25129_25136 = G__25141;
i__25130_25137 = G__25142;
continue;
} else {
var temp__4425__auto___25143 = cljs.core.seq.call(null,seq__25127_25134);
if(temp__4425__auto___25143){
var seq__25127_25144__$1 = temp__4425__auto___25143;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25127_25144__$1)){
var c__17250__auto___25145 = cljs.core.chunk_first.call(null,seq__25127_25144__$1);
var G__25146 = cljs.core.chunk_rest.call(null,seq__25127_25144__$1);
var G__25147 = c__17250__auto___25145;
var G__25148 = cljs.core.count.call(null,c__17250__auto___25145);
var G__25149 = (0);
seq__25127_25134 = G__25146;
chunk__25128_25135 = G__25147;
count__25129_25136 = G__25148;
i__25130_25137 = G__25149;
continue;
} else {
var dep_25150 = cljs.core.first.call(null,seq__25127_25144__$1);
topo_sort_helper_STAR_.call(null,dep_25150,(depth + (1)),state);

var G__25151 = cljs.core.next.call(null,seq__25127_25144__$1);
var G__25152 = null;
var G__25153 = (0);
var G__25154 = (0);
seq__25127_25134 = G__25151;
chunk__25128_25135 = G__25152;
count__25129_25136 = G__25153;
i__25130_25137 = G__25154;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__25131){
var vec__25133 = p__25131;
var x = cljs.core.nth.call(null,vec__25133,(0),null);
var xs = cljs.core.nthnext.call(null,vec__25133,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__25133,x,xs,get_deps__$1){
return (function (p1__25089_SHARP_){
return clojure.set.difference.call(null,p1__25089_SHARP_,x);
});})(vec__25133,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__25167 = cljs.core.seq.call(null,provides);
var chunk__25168 = null;
var count__25169 = (0);
var i__25170 = (0);
while(true){
if((i__25170 < count__25169)){
var prov = cljs.core._nth.call(null,chunk__25168,i__25170);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__25171_25179 = cljs.core.seq.call(null,requires);
var chunk__25172_25180 = null;
var count__25173_25181 = (0);
var i__25174_25182 = (0);
while(true){
if((i__25174_25182 < count__25173_25181)){
var req_25183 = cljs.core._nth.call(null,chunk__25172_25180,i__25174_25182);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25183,prov);

var G__25184 = seq__25171_25179;
var G__25185 = chunk__25172_25180;
var G__25186 = count__25173_25181;
var G__25187 = (i__25174_25182 + (1));
seq__25171_25179 = G__25184;
chunk__25172_25180 = G__25185;
count__25173_25181 = G__25186;
i__25174_25182 = G__25187;
continue;
} else {
var temp__4425__auto___25188 = cljs.core.seq.call(null,seq__25171_25179);
if(temp__4425__auto___25188){
var seq__25171_25189__$1 = temp__4425__auto___25188;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25171_25189__$1)){
var c__17250__auto___25190 = cljs.core.chunk_first.call(null,seq__25171_25189__$1);
var G__25191 = cljs.core.chunk_rest.call(null,seq__25171_25189__$1);
var G__25192 = c__17250__auto___25190;
var G__25193 = cljs.core.count.call(null,c__17250__auto___25190);
var G__25194 = (0);
seq__25171_25179 = G__25191;
chunk__25172_25180 = G__25192;
count__25173_25181 = G__25193;
i__25174_25182 = G__25194;
continue;
} else {
var req_25195 = cljs.core.first.call(null,seq__25171_25189__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25195,prov);

var G__25196 = cljs.core.next.call(null,seq__25171_25189__$1);
var G__25197 = null;
var G__25198 = (0);
var G__25199 = (0);
seq__25171_25179 = G__25196;
chunk__25172_25180 = G__25197;
count__25173_25181 = G__25198;
i__25174_25182 = G__25199;
continue;
}
} else {
}
}
break;
}

var G__25200 = seq__25167;
var G__25201 = chunk__25168;
var G__25202 = count__25169;
var G__25203 = (i__25170 + (1));
seq__25167 = G__25200;
chunk__25168 = G__25201;
count__25169 = G__25202;
i__25170 = G__25203;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25167);
if(temp__4425__auto__){
var seq__25167__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25167__$1)){
var c__17250__auto__ = cljs.core.chunk_first.call(null,seq__25167__$1);
var G__25204 = cljs.core.chunk_rest.call(null,seq__25167__$1);
var G__25205 = c__17250__auto__;
var G__25206 = cljs.core.count.call(null,c__17250__auto__);
var G__25207 = (0);
seq__25167 = G__25204;
chunk__25168 = G__25205;
count__25169 = G__25206;
i__25170 = G__25207;
continue;
} else {
var prov = cljs.core.first.call(null,seq__25167__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__25175_25208 = cljs.core.seq.call(null,requires);
var chunk__25176_25209 = null;
var count__25177_25210 = (0);
var i__25178_25211 = (0);
while(true){
if((i__25178_25211 < count__25177_25210)){
var req_25212 = cljs.core._nth.call(null,chunk__25176_25209,i__25178_25211);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25212,prov);

var G__25213 = seq__25175_25208;
var G__25214 = chunk__25176_25209;
var G__25215 = count__25177_25210;
var G__25216 = (i__25178_25211 + (1));
seq__25175_25208 = G__25213;
chunk__25176_25209 = G__25214;
count__25177_25210 = G__25215;
i__25178_25211 = G__25216;
continue;
} else {
var temp__4425__auto___25217__$1 = cljs.core.seq.call(null,seq__25175_25208);
if(temp__4425__auto___25217__$1){
var seq__25175_25218__$1 = temp__4425__auto___25217__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25175_25218__$1)){
var c__17250__auto___25219 = cljs.core.chunk_first.call(null,seq__25175_25218__$1);
var G__25220 = cljs.core.chunk_rest.call(null,seq__25175_25218__$1);
var G__25221 = c__17250__auto___25219;
var G__25222 = cljs.core.count.call(null,c__17250__auto___25219);
var G__25223 = (0);
seq__25175_25208 = G__25220;
chunk__25176_25209 = G__25221;
count__25177_25210 = G__25222;
i__25178_25211 = G__25223;
continue;
} else {
var req_25224 = cljs.core.first.call(null,seq__25175_25218__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25224,prov);

var G__25225 = cljs.core.next.call(null,seq__25175_25218__$1);
var G__25226 = null;
var G__25227 = (0);
var G__25228 = (0);
seq__25175_25208 = G__25225;
chunk__25176_25209 = G__25226;
count__25177_25210 = G__25227;
i__25178_25211 = G__25228;
continue;
}
} else {
}
}
break;
}

var G__25229 = cljs.core.next.call(null,seq__25167__$1);
var G__25230 = null;
var G__25231 = (0);
var G__25232 = (0);
seq__25167 = G__25229;
chunk__25168 = G__25230;
count__25169 = G__25231;
i__25170 = G__25232;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__25237_25241 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__25238_25242 = null;
var count__25239_25243 = (0);
var i__25240_25244 = (0);
while(true){
if((i__25240_25244 < count__25239_25243)){
var ns_25245 = cljs.core._nth.call(null,chunk__25238_25242,i__25240_25244);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25245);

var G__25246 = seq__25237_25241;
var G__25247 = chunk__25238_25242;
var G__25248 = count__25239_25243;
var G__25249 = (i__25240_25244 + (1));
seq__25237_25241 = G__25246;
chunk__25238_25242 = G__25247;
count__25239_25243 = G__25248;
i__25240_25244 = G__25249;
continue;
} else {
var temp__4425__auto___25250 = cljs.core.seq.call(null,seq__25237_25241);
if(temp__4425__auto___25250){
var seq__25237_25251__$1 = temp__4425__auto___25250;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25237_25251__$1)){
var c__17250__auto___25252 = cljs.core.chunk_first.call(null,seq__25237_25251__$1);
var G__25253 = cljs.core.chunk_rest.call(null,seq__25237_25251__$1);
var G__25254 = c__17250__auto___25252;
var G__25255 = cljs.core.count.call(null,c__17250__auto___25252);
var G__25256 = (0);
seq__25237_25241 = G__25253;
chunk__25238_25242 = G__25254;
count__25239_25243 = G__25255;
i__25240_25244 = G__25256;
continue;
} else {
var ns_25257 = cljs.core.first.call(null,seq__25237_25251__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25257);

var G__25258 = cljs.core.next.call(null,seq__25237_25251__$1);
var G__25259 = null;
var G__25260 = (0);
var G__25261 = (0);
seq__25237_25241 = G__25258;
chunk__25238_25242 = G__25259;
count__25239_25243 = G__25260;
i__25240_25244 = G__25261;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16447__auto__ = goog.require__;
if(cljs.core.truth_(or__16447__auto__)){
return or__16447__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__25262__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__25262 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25263__i = 0, G__25263__a = new Array(arguments.length -  0);
while (G__25263__i < G__25263__a.length) {G__25263__a[G__25263__i] = arguments[G__25263__i + 0]; ++G__25263__i;}
  args = new cljs.core.IndexedSeq(G__25263__a,0);
} 
return G__25262__delegate.call(this,args);};
G__25262.cljs$lang$maxFixedArity = 0;
G__25262.cljs$lang$applyTo = (function (arglist__25264){
var args = cljs.core.seq(arglist__25264);
return G__25262__delegate(args);
});
G__25262.cljs$core$IFn$_invoke$arity$variadic = G__25262__delegate;
return G__25262;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__25266 = cljs.core._EQ_;
var expr__25267 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__25266.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__25267))){
var path_parts = ((function (pred__25266,expr__25267){
return (function (p1__25265_SHARP_){
return clojure.string.split.call(null,p1__25265_SHARP_,/[\/\\]/);
});})(pred__25266,expr__25267))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__25266,expr__25267){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(clojure.string.join.call(null,"/",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [".","..",request_url], null)));
}catch (e25269){if((e25269 instanceof Error)){
var e = e25269;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e25269;

}
}})());
});
;})(path_parts,sep,root,pred__25266,expr__25267))
} else {
if(cljs.core.truth_(pred__25266.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__25267))){
return ((function (pred__25266,expr__25267){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__25266,expr__25267){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__25266,expr__25267))
);

return deferred.addErrback(((function (deferred,pred__25266,expr__25267){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__25266,expr__25267))
);
});
;})(pred__25266,expr__25267))
} else {
return ((function (pred__25266,expr__25267){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__25266,expr__25267))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__25270,callback){
var map__25273 = p__25270;
var map__25273__$1 = ((((!((map__25273 == null)))?((((map__25273.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25273.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25273):map__25273);
var file_msg = map__25273__$1;
var request_url = cljs.core.get.call(null,map__25273__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__25273,map__25273__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__25273,map__25273__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__18530__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18530__auto__){
return (function (){
var f__18531__auto__ = (function (){var switch__18465__auto__ = ((function (c__18530__auto__){
return (function (state_25297){
var state_val_25298 = (state_25297[(1)]);
if((state_val_25298 === (7))){
var inst_25293 = (state_25297[(2)]);
var state_25297__$1 = state_25297;
var statearr_25299_25319 = state_25297__$1;
(statearr_25299_25319[(2)] = inst_25293);

(statearr_25299_25319[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25298 === (1))){
var state_25297__$1 = state_25297;
var statearr_25300_25320 = state_25297__$1;
(statearr_25300_25320[(2)] = null);

(statearr_25300_25320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25298 === (4))){
var inst_25277 = (state_25297[(7)]);
var inst_25277__$1 = (state_25297[(2)]);
var state_25297__$1 = (function (){var statearr_25301 = state_25297;
(statearr_25301[(7)] = inst_25277__$1);

return statearr_25301;
})();
if(cljs.core.truth_(inst_25277__$1)){
var statearr_25302_25321 = state_25297__$1;
(statearr_25302_25321[(1)] = (5));

} else {
var statearr_25303_25322 = state_25297__$1;
(statearr_25303_25322[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25298 === (6))){
var state_25297__$1 = state_25297;
var statearr_25304_25323 = state_25297__$1;
(statearr_25304_25323[(2)] = null);

(statearr_25304_25323[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25298 === (3))){
var inst_25295 = (state_25297[(2)]);
var state_25297__$1 = state_25297;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25297__$1,inst_25295);
} else {
if((state_val_25298 === (2))){
var state_25297__$1 = state_25297;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25297__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_25298 === (11))){
var inst_25289 = (state_25297[(2)]);
var state_25297__$1 = (function (){var statearr_25305 = state_25297;
(statearr_25305[(8)] = inst_25289);

return statearr_25305;
})();
var statearr_25306_25324 = state_25297__$1;
(statearr_25306_25324[(2)] = null);

(statearr_25306_25324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25298 === (9))){
var inst_25281 = (state_25297[(9)]);
var inst_25283 = (state_25297[(10)]);
var inst_25285 = inst_25283.call(null,inst_25281);
var state_25297__$1 = state_25297;
var statearr_25307_25325 = state_25297__$1;
(statearr_25307_25325[(2)] = inst_25285);

(statearr_25307_25325[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25298 === (5))){
var inst_25277 = (state_25297[(7)]);
var inst_25279 = figwheel.client.file_reloading.blocking_load.call(null,inst_25277);
var state_25297__$1 = state_25297;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25297__$1,(8),inst_25279);
} else {
if((state_val_25298 === (10))){
var inst_25281 = (state_25297[(9)]);
var inst_25287 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_25281);
var state_25297__$1 = state_25297;
var statearr_25308_25326 = state_25297__$1;
(statearr_25308_25326[(2)] = inst_25287);

(statearr_25308_25326[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25298 === (8))){
var inst_25283 = (state_25297[(10)]);
var inst_25277 = (state_25297[(7)]);
var inst_25281 = (state_25297[(2)]);
var inst_25282 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_25283__$1 = cljs.core.get.call(null,inst_25282,inst_25277);
var state_25297__$1 = (function (){var statearr_25309 = state_25297;
(statearr_25309[(9)] = inst_25281);

(statearr_25309[(10)] = inst_25283__$1);

return statearr_25309;
})();
if(cljs.core.truth_(inst_25283__$1)){
var statearr_25310_25327 = state_25297__$1;
(statearr_25310_25327[(1)] = (9));

} else {
var statearr_25311_25328 = state_25297__$1;
(statearr_25311_25328[(1)] = (10));

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
});})(c__18530__auto__))
;
return ((function (switch__18465__auto__,c__18530__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__18466__auto__ = null;
var figwheel$client$file_reloading$state_machine__18466__auto____0 = (function (){
var statearr_25315 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25315[(0)] = figwheel$client$file_reloading$state_machine__18466__auto__);

(statearr_25315[(1)] = (1));

return statearr_25315;
});
var figwheel$client$file_reloading$state_machine__18466__auto____1 = (function (state_25297){
while(true){
var ret_value__18467__auto__ = (function (){try{while(true){
var result__18468__auto__ = switch__18465__auto__.call(null,state_25297);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18468__auto__;
}
break;
}
}catch (e25316){if((e25316 instanceof Object)){
var ex__18469__auto__ = e25316;
var statearr_25317_25329 = state_25297;
(statearr_25317_25329[(5)] = ex__18469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25297);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25316;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25330 = state_25297;
state_25297 = G__25330;
continue;
} else {
return ret_value__18467__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__18466__auto__ = function(state_25297){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__18466__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__18466__auto____1.call(this,state_25297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__18466__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__18466__auto____0;
figwheel$client$file_reloading$state_machine__18466__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__18466__auto____1;
return figwheel$client$file_reloading$state_machine__18466__auto__;
})()
;})(switch__18465__auto__,c__18530__auto__))
})();
var state__18532__auto__ = (function (){var statearr_25318 = f__18531__auto__.call(null);
(statearr_25318[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18530__auto__);

return statearr_25318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18532__auto__);
});})(c__18530__auto__))
);

return c__18530__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__25331,callback){
var map__25334 = p__25331;
var map__25334__$1 = ((((!((map__25334 == null)))?((((map__25334.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25334.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25334):map__25334);
var file_msg = map__25334__$1;
var namespace = cljs.core.get.call(null,map__25334__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__25334,map__25334__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__25334,map__25334__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__25336){
var map__25339 = p__25336;
var map__25339__$1 = ((((!((map__25339 == null)))?((((map__25339.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25339.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25339):map__25339);
var file_msg = map__25339__$1;
var namespace = cljs.core.get.call(null,map__25339__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16435__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16435__auto__){
var or__16447__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16447__auto__)){
return or__16447__auto__;
} else {
var or__16447__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16447__auto____$1)){
return or__16447__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16435__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__25341,callback){
var map__25344 = p__25341;
var map__25344__$1 = ((((!((map__25344 == null)))?((((map__25344.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25344.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25344):map__25344);
var file_msg = map__25344__$1;
var request_url = cljs.core.get.call(null,map__25344__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__25344__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__18530__auto___25432 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18530__auto___25432,out){
return (function (){
var f__18531__auto__ = (function (){var switch__18465__auto__ = ((function (c__18530__auto___25432,out){
return (function (state_25414){
var state_val_25415 = (state_25414[(1)]);
if((state_val_25415 === (1))){
var inst_25392 = cljs.core.nth.call(null,files,(0),null);
var inst_25393 = cljs.core.nthnext.call(null,files,(1));
var inst_25394 = files;
var state_25414__$1 = (function (){var statearr_25416 = state_25414;
(statearr_25416[(7)] = inst_25392);

(statearr_25416[(8)] = inst_25394);

(statearr_25416[(9)] = inst_25393);

return statearr_25416;
})();
var statearr_25417_25433 = state_25414__$1;
(statearr_25417_25433[(2)] = null);

(statearr_25417_25433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25415 === (2))){
var inst_25394 = (state_25414[(8)]);
var inst_25397 = (state_25414[(10)]);
var inst_25397__$1 = cljs.core.nth.call(null,inst_25394,(0),null);
var inst_25398 = cljs.core.nthnext.call(null,inst_25394,(1));
var inst_25399 = (inst_25397__$1 == null);
var inst_25400 = cljs.core.not.call(null,inst_25399);
var state_25414__$1 = (function (){var statearr_25418 = state_25414;
(statearr_25418[(10)] = inst_25397__$1);

(statearr_25418[(11)] = inst_25398);

return statearr_25418;
})();
if(inst_25400){
var statearr_25419_25434 = state_25414__$1;
(statearr_25419_25434[(1)] = (4));

} else {
var statearr_25420_25435 = state_25414__$1;
(statearr_25420_25435[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25415 === (3))){
var inst_25412 = (state_25414[(2)]);
var state_25414__$1 = state_25414;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25414__$1,inst_25412);
} else {
if((state_val_25415 === (4))){
var inst_25397 = (state_25414[(10)]);
var inst_25402 = figwheel.client.file_reloading.reload_js_file.call(null,inst_25397);
var state_25414__$1 = state_25414;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25414__$1,(7),inst_25402);
} else {
if((state_val_25415 === (5))){
var inst_25408 = cljs.core.async.close_BANG_.call(null,out);
var state_25414__$1 = state_25414;
var statearr_25421_25436 = state_25414__$1;
(statearr_25421_25436[(2)] = inst_25408);

(statearr_25421_25436[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25415 === (6))){
var inst_25410 = (state_25414[(2)]);
var state_25414__$1 = state_25414;
var statearr_25422_25437 = state_25414__$1;
(statearr_25422_25437[(2)] = inst_25410);

(statearr_25422_25437[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25415 === (7))){
var inst_25398 = (state_25414[(11)]);
var inst_25404 = (state_25414[(2)]);
var inst_25405 = cljs.core.async.put_BANG_.call(null,out,inst_25404);
var inst_25394 = inst_25398;
var state_25414__$1 = (function (){var statearr_25423 = state_25414;
(statearr_25423[(12)] = inst_25405);

(statearr_25423[(8)] = inst_25394);

return statearr_25423;
})();
var statearr_25424_25438 = state_25414__$1;
(statearr_25424_25438[(2)] = null);

(statearr_25424_25438[(1)] = (2));


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
});})(c__18530__auto___25432,out))
;
return ((function (switch__18465__auto__,c__18530__auto___25432,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18466__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18466__auto____0 = (function (){
var statearr_25428 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25428[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18466__auto__);

(statearr_25428[(1)] = (1));

return statearr_25428;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18466__auto____1 = (function (state_25414){
while(true){
var ret_value__18467__auto__ = (function (){try{while(true){
var result__18468__auto__ = switch__18465__auto__.call(null,state_25414);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18468__auto__;
}
break;
}
}catch (e25429){if((e25429 instanceof Object)){
var ex__18469__auto__ = e25429;
var statearr_25430_25439 = state_25414;
(statearr_25430_25439[(5)] = ex__18469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25414);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25429;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25440 = state_25414;
state_25414 = G__25440;
continue;
} else {
return ret_value__18467__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18466__auto__ = function(state_25414){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18466__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18466__auto____1.call(this,state_25414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18466__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18466__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18466__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18466__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18466__auto__;
})()
;})(switch__18465__auto__,c__18530__auto___25432,out))
})();
var state__18532__auto__ = (function (){var statearr_25431 = f__18531__auto__.call(null);
(statearr_25431[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18530__auto___25432);

return statearr_25431;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18532__auto__);
});})(c__18530__auto___25432,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__25441,opts){
var map__25445 = p__25441;
var map__25445__$1 = ((((!((map__25445 == null)))?((((map__25445.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25445.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25445):map__25445);
var eval_body__$1 = cljs.core.get.call(null,map__25445__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__25445__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16435__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16435__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16435__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e25447){var e = e25447;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__25448_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25448_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__25453){
var vec__25454 = p__25453;
var k = cljs.core.nth.call(null,vec__25454,(0),null);
var v = cljs.core.nth.call(null,vec__25454,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__25455){
var vec__25456 = p__25455;
var k = cljs.core.nth.call(null,vec__25456,(0),null);
var v = cljs.core.nth.call(null,vec__25456,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__25460,p__25461){
var map__25708 = p__25460;
var map__25708__$1 = ((((!((map__25708 == null)))?((((map__25708.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25708.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25708):map__25708);
var opts = map__25708__$1;
var before_jsload = cljs.core.get.call(null,map__25708__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__25708__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__25708__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__25709 = p__25461;
var map__25709__$1 = ((((!((map__25709 == null)))?((((map__25709.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25709.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25709):map__25709);
var msg = map__25709__$1;
var files = cljs.core.get.call(null,map__25709__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__25709__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__25709__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__18530__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18530__auto__,map__25708,map__25708__$1,opts,before_jsload,on_jsload,reload_dependents,map__25709,map__25709__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__18531__auto__ = (function (){var switch__18465__auto__ = ((function (c__18530__auto__,map__25708,map__25708__$1,opts,before_jsload,on_jsload,reload_dependents,map__25709,map__25709__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_25862){
var state_val_25863 = (state_25862[(1)]);
if((state_val_25863 === (7))){
var inst_25724 = (state_25862[(7)]);
var inst_25725 = (state_25862[(8)]);
var inst_25723 = (state_25862[(9)]);
var inst_25726 = (state_25862[(10)]);
var inst_25731 = cljs.core._nth.call(null,inst_25724,inst_25726);
var inst_25732 = figwheel.client.file_reloading.eval_body.call(null,inst_25731,opts);
var inst_25733 = (inst_25726 + (1));
var tmp25864 = inst_25724;
var tmp25865 = inst_25725;
var tmp25866 = inst_25723;
var inst_25723__$1 = tmp25866;
var inst_25724__$1 = tmp25864;
var inst_25725__$1 = tmp25865;
var inst_25726__$1 = inst_25733;
var state_25862__$1 = (function (){var statearr_25867 = state_25862;
(statearr_25867[(7)] = inst_25724__$1);

(statearr_25867[(8)] = inst_25725__$1);

(statearr_25867[(11)] = inst_25732);

(statearr_25867[(9)] = inst_25723__$1);

(statearr_25867[(10)] = inst_25726__$1);

return statearr_25867;
})();
var statearr_25868_25954 = state_25862__$1;
(statearr_25868_25954[(2)] = null);

(statearr_25868_25954[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25863 === (20))){
var inst_25766 = (state_25862[(12)]);
var inst_25774 = figwheel.client.file_reloading.sort_files.call(null,inst_25766);
var state_25862__$1 = state_25862;
var statearr_25869_25955 = state_25862__$1;
(statearr_25869_25955[(2)] = inst_25774);

(statearr_25869_25955[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25863 === (27))){
var state_25862__$1 = state_25862;
var statearr_25870_25956 = state_25862__$1;
(statearr_25870_25956[(2)] = null);

(statearr_25870_25956[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25863 === (1))){
var inst_25715 = (state_25862[(13)]);
var inst_25712 = before_jsload.call(null,files);
var inst_25713 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_25714 = (function (){return ((function (inst_25715,inst_25712,inst_25713,state_val_25863,c__18530__auto__,map__25708,map__25708__$1,opts,before_jsload,on_jsload,reload_dependents,map__25709,map__25709__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25457_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25457_SHARP_);
});
;})(inst_25715,inst_25712,inst_25713,state_val_25863,c__18530__auto__,map__25708,map__25708__$1,opts,before_jsload,on_jsload,reload_dependents,map__25709,map__25709__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25715__$1 = cljs.core.filter.call(null,inst_25714,files);
var inst_25716 = cljs.core.not_empty.call(null,inst_25715__$1);
var state_25862__$1 = (function (){var statearr_25871 = state_25862;
(statearr_25871[(14)] = inst_25713);

(statearr_25871[(15)] = inst_25712);

(statearr_25871[(13)] = inst_25715__$1);

return statearr_25871;
})();
if(cljs.core.truth_(inst_25716)){
var statearr_25872_25957 = state_25862__$1;
(statearr_25872_25957[(1)] = (2));

} else {
var statearr_25873_25958 = state_25862__$1;
(statearr_25873_25958[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25863 === (24))){
var state_25862__$1 = state_25862;
var statearr_25874_25959 = state_25862__$1;
(statearr_25874_25959[(2)] = null);

(statearr_25874_25959[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25863 === (39))){
var inst_25816 = (state_25862[(16)]);
var state_25862__$1 = state_25862;
var statearr_25875_25960 = state_25862__$1;
(statearr_25875_25960[(2)] = inst_25816);

(statearr_25875_25960[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25863 === (46))){
var inst_25857 = (state_25862[(2)]);
var state_25862__$1 = state_25862;
var statearr_25876_25961 = state_25862__$1;
(statearr_25876_25961[(2)] = inst_25857);

(statearr_25876_25961[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25863 === (4))){
var inst_25760 = (state_25862[(2)]);
var inst_25761 = cljs.core.List.EMPTY;
var inst_25762 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_25761);
var inst_25763 = (function (){return ((function (inst_25760,inst_25761,inst_25762,state_val_25863,c__18530__auto__,map__25708,map__25708__$1,opts,before_jsload,on_jsload,reload_dependents,map__25709,map__25709__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25458_SHARP_){
var and__16435__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25458_SHARP_);
if(cljs.core.truth_(and__16435__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25458_SHARP_));
} else {
return and__16435__auto__;
}
});
;})(inst_25760,inst_25761,inst_25762,state_val_25863,c__18530__auto__,map__25708,map__25708__$1,opts,before_jsload,on_jsload,reload_dependents,map__25709,map__25709__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25764 = cljs.core.filter.call(null,inst_25763,files);
var inst_25765 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_25766 = cljs.core.concat.call(null,inst_25764,inst_25765);
var state_25862__$1 = (function (){var statearr_25877 = state_25862;
(statearr_25877[(12)] = inst_25766);

(statearr_25877[(17)] = inst_25762);

(statearr_25877[(18)] = inst_25760);

return statearr_25877;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_25878_25962 = state_25862__$1;
(statearr_25878_25962[(1)] = (16));

} else {
var statearr_25879_25963 = state_25862__$1;
(statearr_25879_25963[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25863 === (15))){
var inst_25750 = (state_25862[(2)]);
var state_25862__$1 = state_25862;
var statearr_25880_25964 = state_25862__$1;
(statearr_25880_25964[(2)] = inst_25750);

(statearr_25880_25964[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25863 === (21))){
var inst_25776 = (state_25862[(19)]);
var inst_25776__$1 = (state_25862[(2)]);
var inst_25777 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_25776__$1);
var state_25862__$1 = (function (){var statearr_25881 = state_25862;
(statearr_25881[(19)] = inst_25776__$1);

return statearr_25881;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25862__$1,(22),inst_25777);
} else {
if((state_val_25863 === (31))){
var inst_25860 = (state_25862[(2)]);
var state_25862__$1 = state_25862;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25862__$1,inst_25860);
} else {
if((state_val_25863 === (32))){
var inst_25816 = (state_25862[(16)]);
var inst_25821 = inst_25816.cljs$lang$protocol_mask$partition0$;
var inst_25822 = (inst_25821 & (64));
var inst_25823 = inst_25816.cljs$core$ISeq$;
var inst_25824 = (inst_25822) || (inst_25823);
var state_25862__$1 = state_25862;
if(cljs.core.truth_(inst_25824)){
var statearr_25882_25965 = state_25862__$1;
(statearr_25882_25965[(1)] = (35));

} else {
var statearr_25883_25966 = state_25862__$1;
(statearr_25883_25966[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25863 === (40))){
var inst_25837 = (state_25862[(20)]);
var inst_25836 = (state_25862[(2)]);
var inst_25837__$1 = cljs.core.get.call(null,inst_25836,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_25838 = cljs.core.get.call(null,inst_25836,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_25839 = cljs.core.not_empty.call(null,inst_25837__$1);
var state_25862__$1 = (function (){var statearr_25884 = state_25862;
(statearr_25884[(21)] = inst_25838);

(statearr_25884[(20)] = inst_25837__$1);

return statearr_25884;
})();
if(cljs.core.truth_(inst_25839)){
var statearr_25885_25967 = state_25862__$1;
(statearr_25885_25967[(1)] = (41));

} else {
var statearr_25886_25968 = state_25862__$1;
(statearr_25886_25968[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25863 === (33))){
var state_25862__$1 = state_25862;
var statearr_25887_25969 = state_25862__$1;
(statearr_25887_25969[(2)] = false);

(statearr_25887_25969[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25863 === (13))){
var inst_25736 = (state_25862[(22)]);
var inst_25740 = cljs.core.chunk_first.call(null,inst_25736);
var inst_25741 = cljs.core.chunk_rest.call(null,inst_25736);
var inst_25742 = cljs.core.count.call(null,inst_25740);
var inst_25723 = inst_25741;
var inst_25724 = inst_25740;
var inst_25725 = inst_25742;
var inst_25726 = (0);
var state_25862__$1 = (function (){var statearr_25888 = state_25862;
(statearr_25888[(7)] = inst_25724);

(statearr_25888[(8)] = inst_25725);

(statearr_25888[(9)] = inst_25723);

(statearr_25888[(10)] = inst_25726);

return statearr_25888;
})();
var statearr_25889_25970 = state_25862__$1;
(statearr_25889_25970[(2)] = null);

(statearr_25889_25970[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25863 === (22))){
var inst_25780 = (state_25862[(23)]);
var inst_25784 = (state_25862[(24)]);
var inst_25776 = (state_25862[(19)]);
var inst_25779 = (state_25862[(25)]);
var inst_25779__$1 = (state_25862[(2)]);
var inst_25780__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25779__$1);
var inst_25781 = (function (){var all_files = inst_25776;
var res_SINGLEQUOTE_ = inst_25779__$1;
var res = inst_25780__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_25780,inst_25784,inst_25776,inst_25779,inst_25779__$1,inst_25780__$1,state_val_25863,c__18530__auto__,map__25708,map__25708__$1,opts,before_jsload,on_jsload,reload_dependents,map__25709,map__25709__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25459_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__25459_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_25780,inst_25784,inst_25776,inst_25779,inst_25779__$1,inst_25780__$1,state_val_25863,c__18530__auto__,map__25708,map__25708__$1,opts,before_jsload,on_jsload,reload_dependents,map__25709,map__25709__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25782 = cljs.core.filter.call(null,inst_25781,inst_25779__$1);
var inst_25783 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_25784__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25783);
var inst_25785 = cljs.core.not_empty.call(null,inst_25784__$1);
var state_25862__$1 = (function (){var statearr_25890 = state_25862;
(statearr_25890[(23)] = inst_25780__$1);

(statearr_25890[(24)] = inst_25784__$1);

(statearr_25890[(26)] = inst_25782);

(statearr_25890[(25)] = inst_25779__$1);

return statearr_25890;
})();
if(cljs.core.truth_(inst_25785)){
var statearr_25891_25971 = state_25862__$1;
(statearr_25891_25971[(1)] = (23));

} else {
var statearr_25892_25972 = state_25862__$1;
(statearr_25892_25972[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25863 === (36))){
var state_25862__$1 = state_25862;
var statearr_25893_25973 = state_25862__$1;
(statearr_25893_25973[(2)] = false);

(statearr_25893_25973[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25863 === (41))){
var inst_25837 = (state_25862[(20)]);
var inst_25841 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_25842 = cljs.core.map.call(null,inst_25841,inst_25837);
var inst_25843 = cljs.core.pr_str.call(null,inst_25842);
var inst_25844 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_25843)].join('');
var inst_25845 = figwheel.client.utils.log.call(null,inst_25844);
var state_25862__$1 = state_25862;
var statearr_25894_25974 = state_25862__$1;
(statearr_25894_25974[(2)] = inst_25845);

(statearr_25894_25974[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25863 === (43))){
var inst_25838 = (state_25862[(21)]);
var inst_25848 = (state_25862[(2)]);
var inst_25849 = cljs.core.not_empty.call(null,inst_25838);
var state_25862__$1 = (function (){var statearr_25895 = state_25862;
(statearr_25895[(27)] = inst_25848);

return statearr_25895;
})();
if(cljs.core.truth_(inst_25849)){
var statearr_25896_25975 = state_25862__$1;
(statearr_25896_25975[(1)] = (44));

} else {
var statearr_25897_25976 = state_25862__$1;
(statearr_25897_25976[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25863 === (29))){
var inst_25780 = (state_25862[(23)]);
var inst_25784 = (state_25862[(24)]);
var inst_25816 = (state_25862[(16)]);
var inst_25776 = (state_25862[(19)]);
var inst_25782 = (state_25862[(26)]);
var inst_25779 = (state_25862[(25)]);
var inst_25812 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_25815 = (function (){var all_files = inst_25776;
var res_SINGLEQUOTE_ = inst_25779;
var res = inst_25780;
var files_not_loaded = inst_25782;
var dependencies_that_loaded = inst_25784;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25780,inst_25784,inst_25816,inst_25776,inst_25782,inst_25779,inst_25812,state_val_25863,c__18530__auto__,map__25708,map__25708__$1,opts,before_jsload,on_jsload,reload_dependents,map__25709,map__25709__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25814){
var map__25898 = p__25814;
var map__25898__$1 = ((((!((map__25898 == null)))?((((map__25898.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25898.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25898):map__25898);
var namespace = cljs.core.get.call(null,map__25898__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25780,inst_25784,inst_25816,inst_25776,inst_25782,inst_25779,inst_25812,state_val_25863,c__18530__auto__,map__25708,map__25708__$1,opts,before_jsload,on_jsload,reload_dependents,map__25709,map__25709__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25816__$1 = cljs.core.group_by.call(null,inst_25815,inst_25782);
var inst_25818 = (inst_25816__$1 == null);
var inst_25819 = cljs.core.not.call(null,inst_25818);
var state_25862__$1 = (function (){var statearr_25900 = state_25862;
(statearr_25900[(28)] = inst_25812);

(statearr_25900[(16)] = inst_25816__$1);

return statearr_25900;
})();
if(inst_25819){
var statearr_25901_25977 = state_25862__$1;
(statearr_25901_25977[(1)] = (32));

} else {
var statearr_25902_25978 = state_25862__$1;
(statearr_25902_25978[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25863 === (44))){
var inst_25838 = (state_25862[(21)]);
var inst_25851 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25838);
var inst_25852 = cljs.core.pr_str.call(null,inst_25851);
var inst_25853 = [cljs.core.str("not required: "),cljs.core.str(inst_25852)].join('');
var inst_25854 = figwheel.client.utils.log.call(null,inst_25853);
var state_25862__$1 = state_25862;
var statearr_25903_25979 = state_25862__$1;
(statearr_25903_25979[(2)] = inst_25854);

(statearr_25903_25979[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25863 === (6))){
var inst_25757 = (state_25862[(2)]);
var state_25862__$1 = state_25862;
var statearr_25904_25980 = state_25862__$1;
(statearr_25904_25980[(2)] = inst_25757);

(statearr_25904_25980[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25863 === (28))){
var inst_25782 = (state_25862[(26)]);
var inst_25809 = (state_25862[(2)]);
var inst_25810 = cljs.core.not_empty.call(null,inst_25782);
var state_25862__$1 = (function (){var statearr_25905 = state_25862;
(statearr_25905[(29)] = inst_25809);

return statearr_25905;
})();
if(cljs.core.truth_(inst_25810)){
var statearr_25906_25981 = state_25862__$1;
(statearr_25906_25981[(1)] = (29));

} else {
var statearr_25907_25982 = state_25862__$1;
(statearr_25907_25982[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25863 === (25))){
var inst_25780 = (state_25862[(23)]);
var inst_25796 = (state_25862[(2)]);
var inst_25797 = cljs.core.not_empty.call(null,inst_25780);
var state_25862__$1 = (function (){var statearr_25908 = state_25862;
(statearr_25908[(30)] = inst_25796);

return statearr_25908;
})();
if(cljs.core.truth_(inst_25797)){
var statearr_25909_25983 = state_25862__$1;
(statearr_25909_25983[(1)] = (26));

} else {
var statearr_25910_25984 = state_25862__$1;
(statearr_25910_25984[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25863 === (34))){
var inst_25831 = (state_25862[(2)]);
var state_25862__$1 = state_25862;
if(cljs.core.truth_(inst_25831)){
var statearr_25911_25985 = state_25862__$1;
(statearr_25911_25985[(1)] = (38));

} else {
var statearr_25912_25986 = state_25862__$1;
(statearr_25912_25986[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25863 === (17))){
var state_25862__$1 = state_25862;
var statearr_25913_25987 = state_25862__$1;
(statearr_25913_25987[(2)] = recompile_dependents);

(statearr_25913_25987[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25863 === (3))){
var state_25862__$1 = state_25862;
var statearr_25914_25988 = state_25862__$1;
(statearr_25914_25988[(2)] = null);

(statearr_25914_25988[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25863 === (12))){
var inst_25753 = (state_25862[(2)]);
var state_25862__$1 = state_25862;
var statearr_25915_25989 = state_25862__$1;
(statearr_25915_25989[(2)] = inst_25753);

(statearr_25915_25989[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25863 === (2))){
var inst_25715 = (state_25862[(13)]);
var inst_25722 = cljs.core.seq.call(null,inst_25715);
var inst_25723 = inst_25722;
var inst_25724 = null;
var inst_25725 = (0);
var inst_25726 = (0);
var state_25862__$1 = (function (){var statearr_25916 = state_25862;
(statearr_25916[(7)] = inst_25724);

(statearr_25916[(8)] = inst_25725);

(statearr_25916[(9)] = inst_25723);

(statearr_25916[(10)] = inst_25726);

return statearr_25916;
})();
var statearr_25917_25990 = state_25862__$1;
(statearr_25917_25990[(2)] = null);

(statearr_25917_25990[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25863 === (23))){
var inst_25780 = (state_25862[(23)]);
var inst_25784 = (state_25862[(24)]);
var inst_25776 = (state_25862[(19)]);
var inst_25782 = (state_25862[(26)]);
var inst_25779 = (state_25862[(25)]);
var inst_25787 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_25789 = (function (){var all_files = inst_25776;
var res_SINGLEQUOTE_ = inst_25779;
var res = inst_25780;
var files_not_loaded = inst_25782;
var dependencies_that_loaded = inst_25784;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25780,inst_25784,inst_25776,inst_25782,inst_25779,inst_25787,state_val_25863,c__18530__auto__,map__25708,map__25708__$1,opts,before_jsload,on_jsload,reload_dependents,map__25709,map__25709__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25788){
var map__25918 = p__25788;
var map__25918__$1 = ((((!((map__25918 == null)))?((((map__25918.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25918.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25918):map__25918);
var request_url = cljs.core.get.call(null,map__25918__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25780,inst_25784,inst_25776,inst_25782,inst_25779,inst_25787,state_val_25863,c__18530__auto__,map__25708,map__25708__$1,opts,before_jsload,on_jsload,reload_dependents,map__25709,map__25709__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25790 = cljs.core.reverse.call(null,inst_25784);
var inst_25791 = cljs.core.map.call(null,inst_25789,inst_25790);
var inst_25792 = cljs.core.pr_str.call(null,inst_25791);
var inst_25793 = figwheel.client.utils.log.call(null,inst_25792);
var state_25862__$1 = (function (){var statearr_25920 = state_25862;
(statearr_25920[(31)] = inst_25787);

return statearr_25920;
})();
var statearr_25921_25991 = state_25862__$1;
(statearr_25921_25991[(2)] = inst_25793);

(statearr_25921_25991[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25863 === (35))){
var state_25862__$1 = state_25862;
var statearr_25922_25992 = state_25862__$1;
(statearr_25922_25992[(2)] = true);

(statearr_25922_25992[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25863 === (19))){
var inst_25766 = (state_25862[(12)]);
var inst_25772 = figwheel.client.file_reloading.expand_files.call(null,inst_25766);
var state_25862__$1 = state_25862;
var statearr_25923_25993 = state_25862__$1;
(statearr_25923_25993[(2)] = inst_25772);

(statearr_25923_25993[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25863 === (11))){
var state_25862__$1 = state_25862;
var statearr_25924_25994 = state_25862__$1;
(statearr_25924_25994[(2)] = null);

(statearr_25924_25994[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25863 === (9))){
var inst_25755 = (state_25862[(2)]);
var state_25862__$1 = state_25862;
var statearr_25925_25995 = state_25862__$1;
(statearr_25925_25995[(2)] = inst_25755);

(statearr_25925_25995[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25863 === (5))){
var inst_25725 = (state_25862[(8)]);
var inst_25726 = (state_25862[(10)]);
var inst_25728 = (inst_25726 < inst_25725);
var inst_25729 = inst_25728;
var state_25862__$1 = state_25862;
if(cljs.core.truth_(inst_25729)){
var statearr_25926_25996 = state_25862__$1;
(statearr_25926_25996[(1)] = (7));

} else {
var statearr_25927_25997 = state_25862__$1;
(statearr_25927_25997[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25863 === (14))){
var inst_25736 = (state_25862[(22)]);
var inst_25745 = cljs.core.first.call(null,inst_25736);
var inst_25746 = figwheel.client.file_reloading.eval_body.call(null,inst_25745,opts);
var inst_25747 = cljs.core.next.call(null,inst_25736);
var inst_25723 = inst_25747;
var inst_25724 = null;
var inst_25725 = (0);
var inst_25726 = (0);
var state_25862__$1 = (function (){var statearr_25928 = state_25862;
(statearr_25928[(7)] = inst_25724);

(statearr_25928[(8)] = inst_25725);

(statearr_25928[(9)] = inst_25723);

(statearr_25928[(10)] = inst_25726);

(statearr_25928[(32)] = inst_25746);

return statearr_25928;
})();
var statearr_25929_25998 = state_25862__$1;
(statearr_25929_25998[(2)] = null);

(statearr_25929_25998[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25863 === (45))){
var state_25862__$1 = state_25862;
var statearr_25930_25999 = state_25862__$1;
(statearr_25930_25999[(2)] = null);

(statearr_25930_25999[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25863 === (26))){
var inst_25780 = (state_25862[(23)]);
var inst_25784 = (state_25862[(24)]);
var inst_25776 = (state_25862[(19)]);
var inst_25782 = (state_25862[(26)]);
var inst_25779 = (state_25862[(25)]);
var inst_25799 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_25801 = (function (){var all_files = inst_25776;
var res_SINGLEQUOTE_ = inst_25779;
var res = inst_25780;
var files_not_loaded = inst_25782;
var dependencies_that_loaded = inst_25784;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25780,inst_25784,inst_25776,inst_25782,inst_25779,inst_25799,state_val_25863,c__18530__auto__,map__25708,map__25708__$1,opts,before_jsload,on_jsload,reload_dependents,map__25709,map__25709__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25800){
var map__25931 = p__25800;
var map__25931__$1 = ((((!((map__25931 == null)))?((((map__25931.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25931.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25931):map__25931);
var namespace = cljs.core.get.call(null,map__25931__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__25931__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25780,inst_25784,inst_25776,inst_25782,inst_25779,inst_25799,state_val_25863,c__18530__auto__,map__25708,map__25708__$1,opts,before_jsload,on_jsload,reload_dependents,map__25709,map__25709__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25802 = cljs.core.map.call(null,inst_25801,inst_25780);
var inst_25803 = cljs.core.pr_str.call(null,inst_25802);
var inst_25804 = figwheel.client.utils.log.call(null,inst_25803);
var inst_25805 = (function (){var all_files = inst_25776;
var res_SINGLEQUOTE_ = inst_25779;
var res = inst_25780;
var files_not_loaded = inst_25782;
var dependencies_that_loaded = inst_25784;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25780,inst_25784,inst_25776,inst_25782,inst_25779,inst_25799,inst_25801,inst_25802,inst_25803,inst_25804,state_val_25863,c__18530__auto__,map__25708,map__25708__$1,opts,before_jsload,on_jsload,reload_dependents,map__25709,map__25709__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25780,inst_25784,inst_25776,inst_25782,inst_25779,inst_25799,inst_25801,inst_25802,inst_25803,inst_25804,state_val_25863,c__18530__auto__,map__25708,map__25708__$1,opts,before_jsload,on_jsload,reload_dependents,map__25709,map__25709__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25806 = setTimeout(inst_25805,(10));
var state_25862__$1 = (function (){var statearr_25933 = state_25862;
(statearr_25933[(33)] = inst_25804);

(statearr_25933[(34)] = inst_25799);

return statearr_25933;
})();
var statearr_25934_26000 = state_25862__$1;
(statearr_25934_26000[(2)] = inst_25806);

(statearr_25934_26000[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25863 === (16))){
var state_25862__$1 = state_25862;
var statearr_25935_26001 = state_25862__$1;
(statearr_25935_26001[(2)] = reload_dependents);

(statearr_25935_26001[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25863 === (38))){
var inst_25816 = (state_25862[(16)]);
var inst_25833 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25816);
var state_25862__$1 = state_25862;
var statearr_25936_26002 = state_25862__$1;
(statearr_25936_26002[(2)] = inst_25833);

(statearr_25936_26002[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25863 === (30))){
var state_25862__$1 = state_25862;
var statearr_25937_26003 = state_25862__$1;
(statearr_25937_26003[(2)] = null);

(statearr_25937_26003[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25863 === (10))){
var inst_25736 = (state_25862[(22)]);
var inst_25738 = cljs.core.chunked_seq_QMARK_.call(null,inst_25736);
var state_25862__$1 = state_25862;
if(inst_25738){
var statearr_25938_26004 = state_25862__$1;
(statearr_25938_26004[(1)] = (13));

} else {
var statearr_25939_26005 = state_25862__$1;
(statearr_25939_26005[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25863 === (18))){
var inst_25770 = (state_25862[(2)]);
var state_25862__$1 = state_25862;
if(cljs.core.truth_(inst_25770)){
var statearr_25940_26006 = state_25862__$1;
(statearr_25940_26006[(1)] = (19));

} else {
var statearr_25941_26007 = state_25862__$1;
(statearr_25941_26007[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25863 === (42))){
var state_25862__$1 = state_25862;
var statearr_25942_26008 = state_25862__$1;
(statearr_25942_26008[(2)] = null);

(statearr_25942_26008[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25863 === (37))){
var inst_25828 = (state_25862[(2)]);
var state_25862__$1 = state_25862;
var statearr_25943_26009 = state_25862__$1;
(statearr_25943_26009[(2)] = inst_25828);

(statearr_25943_26009[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25863 === (8))){
var inst_25736 = (state_25862[(22)]);
var inst_25723 = (state_25862[(9)]);
var inst_25736__$1 = cljs.core.seq.call(null,inst_25723);
var state_25862__$1 = (function (){var statearr_25944 = state_25862;
(statearr_25944[(22)] = inst_25736__$1);

return statearr_25944;
})();
if(inst_25736__$1){
var statearr_25945_26010 = state_25862__$1;
(statearr_25945_26010[(1)] = (10));

} else {
var statearr_25946_26011 = state_25862__$1;
(statearr_25946_26011[(1)] = (11));

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
}
});})(c__18530__auto__,map__25708,map__25708__$1,opts,before_jsload,on_jsload,reload_dependents,map__25709,map__25709__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__18465__auto__,c__18530__auto__,map__25708,map__25708__$1,opts,before_jsload,on_jsload,reload_dependents,map__25709,map__25709__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18466__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18466__auto____0 = (function (){
var statearr_25950 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25950[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__18466__auto__);

(statearr_25950[(1)] = (1));

return statearr_25950;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18466__auto____1 = (function (state_25862){
while(true){
var ret_value__18467__auto__ = (function (){try{while(true){
var result__18468__auto__ = switch__18465__auto__.call(null,state_25862);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18468__auto__;
}
break;
}
}catch (e25951){if((e25951 instanceof Object)){
var ex__18469__auto__ = e25951;
var statearr_25952_26012 = state_25862;
(statearr_25952_26012[(5)] = ex__18469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25862);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25951;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26013 = state_25862;
state_25862 = G__26013;
continue;
} else {
return ret_value__18467__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__18466__auto__ = function(state_25862){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18466__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18466__auto____1.call(this,state_25862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__18466__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__18466__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__18466__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__18466__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18466__auto__;
})()
;})(switch__18465__auto__,c__18530__auto__,map__25708,map__25708__$1,opts,before_jsload,on_jsload,reload_dependents,map__25709,map__25709__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__18532__auto__ = (function (){var statearr_25953 = f__18531__auto__.call(null);
(statearr_25953[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18530__auto__);

return statearr_25953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18532__auto__);
});})(c__18530__auto__,map__25708,map__25708__$1,opts,before_jsload,on_jsload,reload_dependents,map__25709,map__25709__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__18530__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__26016,link){
var map__26019 = p__26016;
var map__26019__$1 = ((((!((map__26019 == null)))?((((map__26019.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26019.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26019):map__26019);
var file = cljs.core.get.call(null,map__26019__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__26019,map__26019__$1,file){
return (function (p1__26014_SHARP_,p2__26015_SHARP_){
if(cljs.core._EQ_.call(null,p1__26014_SHARP_,p2__26015_SHARP_)){
return p1__26014_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__26019,map__26019__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__26025){
var map__26026 = p__26025;
var map__26026__$1 = ((((!((map__26026 == null)))?((((map__26026.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26026.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26026):map__26026);
var match_length = cljs.core.get.call(null,map__26026__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__26026__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__26021_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__26021_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args26028 = [];
var len__17505__auto___26031 = arguments.length;
var i__17506__auto___26032 = (0);
while(true){
if((i__17506__auto___26032 < len__17505__auto___26031)){
args26028.push((arguments[i__17506__auto___26032]));

var G__26033 = (i__17506__auto___26032 + (1));
i__17506__auto___26032 = G__26033;
continue;
} else {
}
break;
}

var G__26030 = args26028.length;
switch (G__26030) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26028.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__26035_SHARP_,p2__26036_SHARP_){
return cljs.core.assoc.call(null,p1__26035_SHARP_,cljs.core.get.call(null,p2__26036_SHARP_,key),p2__26036_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__26037){
var map__26040 = p__26037;
var map__26040__$1 = ((((!((map__26040 == null)))?((((map__26040.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26040.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26040):map__26040);
var f_data = map__26040__$1;
var file = cljs.core.get.call(null,map__26040__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__26042,files_msg){
var map__26049 = p__26042;
var map__26049__$1 = ((((!((map__26049 == null)))?((((map__26049.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26049.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26049):map__26049);
var opts = map__26049__$1;
var on_cssload = cljs.core.get.call(null,map__26049__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__26051_26055 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__26052_26056 = null;
var count__26053_26057 = (0);
var i__26054_26058 = (0);
while(true){
if((i__26054_26058 < count__26053_26057)){
var f_26059 = cljs.core._nth.call(null,chunk__26052_26056,i__26054_26058);
figwheel.client.file_reloading.reload_css_file.call(null,f_26059);

var G__26060 = seq__26051_26055;
var G__26061 = chunk__26052_26056;
var G__26062 = count__26053_26057;
var G__26063 = (i__26054_26058 + (1));
seq__26051_26055 = G__26060;
chunk__26052_26056 = G__26061;
count__26053_26057 = G__26062;
i__26054_26058 = G__26063;
continue;
} else {
var temp__4425__auto___26064 = cljs.core.seq.call(null,seq__26051_26055);
if(temp__4425__auto___26064){
var seq__26051_26065__$1 = temp__4425__auto___26064;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26051_26065__$1)){
var c__17250__auto___26066 = cljs.core.chunk_first.call(null,seq__26051_26065__$1);
var G__26067 = cljs.core.chunk_rest.call(null,seq__26051_26065__$1);
var G__26068 = c__17250__auto___26066;
var G__26069 = cljs.core.count.call(null,c__17250__auto___26066);
var G__26070 = (0);
seq__26051_26055 = G__26067;
chunk__26052_26056 = G__26068;
count__26053_26057 = G__26069;
i__26054_26058 = G__26070;
continue;
} else {
var f_26071 = cljs.core.first.call(null,seq__26051_26065__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_26071);

var G__26072 = cljs.core.next.call(null,seq__26051_26065__$1);
var G__26073 = null;
var G__26074 = (0);
var G__26075 = (0);
seq__26051_26055 = G__26072;
chunk__26052_26056 = G__26073;
count__26053_26057 = G__26074;
i__26054_26058 = G__26075;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__26049,map__26049__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__26049,map__26049__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map