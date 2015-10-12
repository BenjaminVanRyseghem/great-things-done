// Compiled by ClojureScript 1.7.122 {}
goog.provide('ui.menu');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('gtd.state');
ui.menu.completion_bar = (function ui$menu$completion_bar(done,total){
var ratio = [cljs.core.str(((done * (100)) / total))].join('');
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.completion-bar.progress","div.completion-bar.progress",-822440088),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),[cljs.core.str(done),cljs.core.str("/"),cljs.core.str(total)].join(''),new cljs.core.Keyword(null,"data-toggle","data-toggle",436966687),"tooltip",new cljs.core.Keyword(null,"data-placement","data-placement",166529525),"top"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"class","class",-2030961996),"progress-bar",new cljs.core.Keyword(null,"role","role",-736691072),"progressbar",new cljs.core.Keyword(null,"aria-valuenow","aria-valuenow",-773142658),ratio,new cljs.core.Keyword(null,"aria-valuemin","aria-valuemin",138532158),(0),new cljs.core.Keyword(null,"aria-valuemax","aria-valuemax",-1167670164),(100),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str(ratio),cljs.core.str("%")].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.sr-only","span.sr-only",2081743235),[cljs.core.str(ratio),cljs.core.str("% complete")].join('')], null)], null)], null);
});
ui.menu.menu_item_component = (function ui$menu$menu_item_component(title,icon){
if(cljs.core.truth_(icon)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.menu-item.clearfix","li.menu-item.clearfix",-168442904),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("fa fa-fw fa-lg fa-"),cljs.core.str(icon)].join('')], null)], null),title], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.menu-item.clearfix","li.menu-item.clearfix",-168442904),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),title], null)], null);
}
});
ui.menu.menu_project_item_component = (function ui$menu$menu_project_item_component(title,completion){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.menu-item.clearfix","li.menu-item.clearfix",-168442904),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"fa fa-fw fa-lg fa-cube"], null)], null),title], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.menu.completion_bar,(4),(5)], null)], null);
});
ui.menu.menu_item_stacked_component = (function ui$menu$menu_item_stacked_component(title,base,icon){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.menu-item.clearfix","li.menu-item.clearfix",-168442904),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.fa-stack.fa-lg.fa-fw","span.fa-stack.fa-lg.fa-fw",1345391644),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("fa fa-stack-2x fa-"),cljs.core.str(base)].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("fa fa-stack-1x fa-"),cljs.core.str(icon)].join('')], null)], null)], null),title], null)], null);
});
ui.menu.menu_project_section_component = (function ui$menu$menu_project_section_component(items){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.menu-section","div.menu-section",1479344756),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Projects"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.menu-items","ul.menu-items",-2095485893),(function (){var iter__17219__auto__ = (function ui$menu$menu_project_section_component_$_iter__23252(s__23253){
return (new cljs.core.LazySeq(null,(function (){
var s__23253__$1 = s__23253;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__23253__$1);
if(temp__4425__auto__){
var s__23253__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23253__$2)){
var c__17217__auto__ = cljs.core.chunk_first.call(null,s__23253__$2);
var size__17218__auto__ = cljs.core.count.call(null,c__17217__auto__);
var b__23255 = cljs.core.chunk_buffer.call(null,size__17218__auto__);
if((function (){var i__23254 = (0);
while(true){
if((i__23254 < size__17218__auto__)){
var i = cljs.core._nth.call(null,c__17217__auto__,i__23254);
cljs.core.chunk_append.call(null,b__23255,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.menu.menu_project_item_component,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(i),new cljs.core.Keyword(null,"completion","completion",-731716930).cljs$core$IFn$_invoke$arity$1(i)], null));

var G__23256 = (i__23254 + (1));
i__23254 = G__23256;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23255),ui$menu$menu_project_section_component_$_iter__23252.call(null,cljs.core.chunk_rest.call(null,s__23253__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23255),null);
}
} else {
var i = cljs.core.first.call(null,s__23253__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.menu.menu_project_item_component,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(i),new cljs.core.Keyword(null,"completion","completion",-731716930).cljs$core$IFn$_invoke$arity$1(i)], null),ui$menu$menu_project_section_component_$_iter__23252.call(null,cljs.core.rest.call(null,s__23253__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17219__auto__.call(null,items);
})()], null)], null);
});
ui.menu.menu_section_component = (function ui$menu$menu_section_component(title,items){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.menu-section","div.menu-section",1479344756),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.menu-items","ul.menu-items",-2095485893),(function (){var iter__17219__auto__ = (function ui$menu$menu_section_component_$_iter__23261(s__23262){
return (new cljs.core.LazySeq(null,(function (){
var s__23262__$1 = s__23262;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__23262__$1);
if(temp__4425__auto__){
var s__23262__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23262__$2)){
var c__17217__auto__ = cljs.core.chunk_first.call(null,s__23262__$2);
var size__17218__auto__ = cljs.core.count.call(null,c__17217__auto__);
var b__23264 = cljs.core.chunk_buffer.call(null,size__17218__auto__);
if((function (){var i__23263 = (0);
while(true){
if((i__23263 < size__17218__auto__)){
var i = cljs.core._nth.call(null,c__17217__auto__,i__23263);
cljs.core.chunk_append.call(null,b__23264,(cljs.core.truth_(new cljs.core.Keyword(null,"stacked","stacked",2007240048).cljs$core$IFn$_invoke$arity$1(i))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.menu.menu_item_stacked_component,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(i),new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(i),new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(i)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.menu.menu_item_component,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(i),new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(i)], null)));

var G__23265 = (i__23263 + (1));
i__23263 = G__23265;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23264),ui$menu$menu_section_component_$_iter__23261.call(null,cljs.core.chunk_rest.call(null,s__23262__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23264),null);
}
} else {
var i = cljs.core.first.call(null,s__23262__$2);
return cljs.core.cons.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"stacked","stacked",2007240048).cljs$core$IFn$_invoke$arity$1(i))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.menu.menu_item_stacked_component,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(i),new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(i),new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(i)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.menu.menu_item_component,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(i),new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(i)], null)),ui$menu$menu_section_component_$_iter__23261.call(null,cljs.core.rest.call(null,s__23262__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17219__auto__.call(null,items);
})()], null)], null);
});
ui.menu.menu_component = (function ui$menu$menu_component(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.menu","div.menu",-175336694),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.menu.menu_section_component,"Collect",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Inbox",new cljs.core.Keyword(null,"icon","icon",1679606541),"inbox"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.menu.menu_section_component,"Focus",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Today",new cljs.core.Keyword(null,"icon","icon",1679606541),"star"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Next",new cljs.core.Keyword(null,"icon","icon",1679606541),"server fa-rotate-180"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Scheduled",new cljs.core.Keyword(null,"stacked","stacked",2007240048),true,new cljs.core.Keyword(null,"base","base",185279322),"calendar-o",new cljs.core.Keyword(null,"icon","icon",1679606541),"repeat"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Someday",new cljs.core.Keyword(null,"icon","icon",1679606541),"archive"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Projects",new cljs.core.Keyword(null,"icon","icon",1679606541),"cubes"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.menu.menu_project_section_component,cljs.core.doall.call(null,cljs.core.map.call(null,(function (p){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"completion","completion",-731716930),gtd.state.completion_for.call(null,p)], null);
}),cljs.core.vals.call(null,cljs.core.deref.call(null,gtd.state.projects))))], null)], null);
});

//# sourceMappingURL=menu.js.map