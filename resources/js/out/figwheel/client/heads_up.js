// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');
figwheel.client.heads_up.clear;

figwheel.client.heads_up.cljs_logo_svg;
figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__17512__auto__ = [];
var len__17505__auto___24768 = arguments.length;
var i__17506__auto___24769 = (0);
while(true){
if((i__17506__auto___24769 < len__17505__auto___24768)){
args__17512__auto__.push((arguments[i__17506__auto___24769]));

var G__24770 = (i__17506__auto___24769 + (1));
i__17506__auto___24769 = G__24770;
continue;
} else {
}
break;
}

var argseq__17513__auto__ = ((((2) < args__17512__auto__.length))?(new cljs.core.IndexedSeq(args__17512__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17513__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__24760_24771 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__24761_24772 = null;
var count__24762_24773 = (0);
var i__24763_24774 = (0);
while(true){
if((i__24763_24774 < count__24762_24773)){
var k_24775 = cljs.core._nth.call(null,chunk__24761_24772,i__24763_24774);
e.setAttribute(cljs.core.name.call(null,k_24775),cljs.core.get.call(null,attrs,k_24775));

var G__24776 = seq__24760_24771;
var G__24777 = chunk__24761_24772;
var G__24778 = count__24762_24773;
var G__24779 = (i__24763_24774 + (1));
seq__24760_24771 = G__24776;
chunk__24761_24772 = G__24777;
count__24762_24773 = G__24778;
i__24763_24774 = G__24779;
continue;
} else {
var temp__4425__auto___24780 = cljs.core.seq.call(null,seq__24760_24771);
if(temp__4425__auto___24780){
var seq__24760_24781__$1 = temp__4425__auto___24780;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24760_24781__$1)){
var c__17250__auto___24782 = cljs.core.chunk_first.call(null,seq__24760_24781__$1);
var G__24783 = cljs.core.chunk_rest.call(null,seq__24760_24781__$1);
var G__24784 = c__17250__auto___24782;
var G__24785 = cljs.core.count.call(null,c__17250__auto___24782);
var G__24786 = (0);
seq__24760_24771 = G__24783;
chunk__24761_24772 = G__24784;
count__24762_24773 = G__24785;
i__24763_24774 = G__24786;
continue;
} else {
var k_24787 = cljs.core.first.call(null,seq__24760_24781__$1);
e.setAttribute(cljs.core.name.call(null,k_24787),cljs.core.get.call(null,attrs,k_24787));

var G__24788 = cljs.core.next.call(null,seq__24760_24781__$1);
var G__24789 = null;
var G__24790 = (0);
var G__24791 = (0);
seq__24760_24771 = G__24788;
chunk__24761_24772 = G__24789;
count__24762_24773 = G__24790;
i__24763_24774 = G__24791;
continue;
}
} else {
}
}
break;
}

var seq__24764_24792 = cljs.core.seq.call(null,children);
var chunk__24765_24793 = null;
var count__24766_24794 = (0);
var i__24767_24795 = (0);
while(true){
if((i__24767_24795 < count__24766_24794)){
var ch_24796 = cljs.core._nth.call(null,chunk__24765_24793,i__24767_24795);
e.appendChild(ch_24796);

var G__24797 = seq__24764_24792;
var G__24798 = chunk__24765_24793;
var G__24799 = count__24766_24794;
var G__24800 = (i__24767_24795 + (1));
seq__24764_24792 = G__24797;
chunk__24765_24793 = G__24798;
count__24766_24794 = G__24799;
i__24767_24795 = G__24800;
continue;
} else {
var temp__4425__auto___24801 = cljs.core.seq.call(null,seq__24764_24792);
if(temp__4425__auto___24801){
var seq__24764_24802__$1 = temp__4425__auto___24801;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24764_24802__$1)){
var c__17250__auto___24803 = cljs.core.chunk_first.call(null,seq__24764_24802__$1);
var G__24804 = cljs.core.chunk_rest.call(null,seq__24764_24802__$1);
var G__24805 = c__17250__auto___24803;
var G__24806 = cljs.core.count.call(null,c__17250__auto___24803);
var G__24807 = (0);
seq__24764_24792 = G__24804;
chunk__24765_24793 = G__24805;
count__24766_24794 = G__24806;
i__24767_24795 = G__24807;
continue;
} else {
var ch_24808 = cljs.core.first.call(null,seq__24764_24802__$1);
e.appendChild(ch_24808);

var G__24809 = cljs.core.next.call(null,seq__24764_24802__$1);
var G__24810 = null;
var G__24811 = (0);
var G__24812 = (0);
seq__24764_24792 = G__24809;
chunk__24765_24793 = G__24810;
count__24766_24794 = G__24811;
i__24767_24795 = G__24812;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq24757){
var G__24758 = cljs.core.first.call(null,seq24757);
var seq24757__$1 = cljs.core.next.call(null,seq24757);
var G__24759 = cljs.core.first.call(null,seq24757__$1);
var seq24757__$2 = cljs.core.next.call(null,seq24757__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__24758,G__24759,seq24757__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__17360__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17361__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17362__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17363__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17364__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__17360__auto__,prefer_table__17361__auto__,method_cache__17362__auto__,cached_hierarchy__17363__auto__,hierarchy__17364__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__17360__auto__,prefer_table__17361__auto__,method_cache__17362__auto__,cached_hierarchy__17363__auto__,hierarchy__17364__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17364__auto__,method_table__17360__auto__,prefer_table__17361__auto__,method_cache__17362__auto__,cached_hierarchy__17363__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_24813 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_24813.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_24813.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_24813.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_24813);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__24814,st_map){
var map__24819 = p__24814;
var map__24819__$1 = ((((!((map__24819 == null)))?((((map__24819.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24819.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24819):map__24819);
var container_el = cljs.core.get.call(null,map__24819__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__24819,map__24819__$1,container_el){
return (function (p__24821){
var vec__24822 = p__24821;
var k = cljs.core.nth.call(null,vec__24822,(0),null);
var v = cljs.core.nth.call(null,vec__24822,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__24819,map__24819__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__24823,dom_str){
var map__24826 = p__24823;
var map__24826__$1 = ((((!((map__24826 == null)))?((((map__24826.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24826.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24826):map__24826);
var c = map__24826__$1;
var content_area_el = cljs.core.get.call(null,map__24826__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__24828){
var map__24831 = p__24828;
var map__24831__$1 = ((((!((map__24831 == null)))?((((map__24831.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24831.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24831):map__24831);
var content_area_el = cljs.core.get.call(null,map__24831__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__18530__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18530__auto__){
return (function (){
var f__18531__auto__ = (function (){var switch__18465__auto__ = ((function (c__18530__auto__){
return (function (state_24874){
var state_val_24875 = (state_24874[(1)]);
if((state_val_24875 === (1))){
var inst_24859 = (state_24874[(7)]);
var inst_24859__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_24860 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_24861 = ["10px","10px","100%","68px","1.0"];
var inst_24862 = cljs.core.PersistentHashMap.fromArrays(inst_24860,inst_24861);
var inst_24863 = cljs.core.merge.call(null,inst_24862,style);
var inst_24864 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_24859__$1,inst_24863);
var inst_24865 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_24859__$1,msg);
var inst_24866 = cljs.core.async.timeout.call(null,(300));
var state_24874__$1 = (function (){var statearr_24876 = state_24874;
(statearr_24876[(8)] = inst_24865);

(statearr_24876[(7)] = inst_24859__$1);

(statearr_24876[(9)] = inst_24864);

return statearr_24876;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24874__$1,(2),inst_24866);
} else {
if((state_val_24875 === (2))){
var inst_24859 = (state_24874[(7)]);
var inst_24868 = (state_24874[(2)]);
var inst_24869 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_24870 = ["auto"];
var inst_24871 = cljs.core.PersistentHashMap.fromArrays(inst_24869,inst_24870);
var inst_24872 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_24859,inst_24871);
var state_24874__$1 = (function (){var statearr_24877 = state_24874;
(statearr_24877[(10)] = inst_24868);

return statearr_24877;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24874__$1,inst_24872);
} else {
return null;
}
}
});})(c__18530__auto__))
;
return ((function (switch__18465__auto__,c__18530__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__18466__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__18466__auto____0 = (function (){
var statearr_24881 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24881[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__18466__auto__);

(statearr_24881[(1)] = (1));

return statearr_24881;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__18466__auto____1 = (function (state_24874){
while(true){
var ret_value__18467__auto__ = (function (){try{while(true){
var result__18468__auto__ = switch__18465__auto__.call(null,state_24874);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18468__auto__;
}
break;
}
}catch (e24882){if((e24882 instanceof Object)){
var ex__18469__auto__ = e24882;
var statearr_24883_24885 = state_24874;
(statearr_24883_24885[(5)] = ex__18469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24874);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24882;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24886 = state_24874;
state_24874 = G__24886;
continue;
} else {
return ret_value__18467__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__18466__auto__ = function(state_24874){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__18466__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__18466__auto____1.call(this,state_24874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__18466__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__18466__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__18466__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__18466__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__18466__auto__;
})()
;})(switch__18465__auto__,c__18530__auto__))
})();
var state__18532__auto__ = (function (){var statearr_24884 = f__18531__auto__.call(null);
(statearr_24884[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18530__auto__);

return statearr_24884;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18532__auto__);
});})(c__18530__auto__))
);

return c__18530__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__24888 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__24888,(0),null);
var ln = cljs.core.nth.call(null,vec__24888,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__24891 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__24891,(0),null);
var file_line = cljs.core.nth.call(null,vec__24891,(1),null);
var file_column = cljs.core.nth.call(null,vec__24891,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__24891,file_name,file_line,file_column){
return (function (p1__24889_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__24889_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__24891,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__16447__auto__ = file_line;
if(cljs.core.truth_(or__16447__auto__)){
return or__16447__auto__;
} else {
var and__16435__auto__ = cause;
if(cljs.core.truth_(and__16435__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__16435__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__24894 = figwheel.client.heads_up.ensure_container.call(null);
var map__24894__$1 = ((((!((map__24894 == null)))?((((map__24894.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24894.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24894):map__24894);
var content_area_el = cljs.core.get.call(null,map__24894__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__18530__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18530__auto__){
return (function (){
var f__18531__auto__ = (function (){var switch__18465__auto__ = ((function (c__18530__auto__){
return (function (state_24942){
var state_val_24943 = (state_24942[(1)]);
if((state_val_24943 === (1))){
var inst_24925 = (state_24942[(7)]);
var inst_24925__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_24926 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_24927 = ["0.0"];
var inst_24928 = cljs.core.PersistentHashMap.fromArrays(inst_24926,inst_24927);
var inst_24929 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_24925__$1,inst_24928);
var inst_24930 = cljs.core.async.timeout.call(null,(300));
var state_24942__$1 = (function (){var statearr_24944 = state_24942;
(statearr_24944[(8)] = inst_24929);

(statearr_24944[(7)] = inst_24925__$1);

return statearr_24944;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24942__$1,(2),inst_24930);
} else {
if((state_val_24943 === (2))){
var inst_24925 = (state_24942[(7)]);
var inst_24932 = (state_24942[(2)]);
var inst_24933 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_24934 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_24935 = cljs.core.PersistentHashMap.fromArrays(inst_24933,inst_24934);
var inst_24936 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_24925,inst_24935);
var inst_24937 = cljs.core.async.timeout.call(null,(200));
var state_24942__$1 = (function (){var statearr_24945 = state_24942;
(statearr_24945[(9)] = inst_24936);

(statearr_24945[(10)] = inst_24932);

return statearr_24945;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24942__$1,(3),inst_24937);
} else {
if((state_val_24943 === (3))){
var inst_24925 = (state_24942[(7)]);
var inst_24939 = (state_24942[(2)]);
var inst_24940 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_24925,"");
var state_24942__$1 = (function (){var statearr_24946 = state_24942;
(statearr_24946[(11)] = inst_24939);

return statearr_24946;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24942__$1,inst_24940);
} else {
return null;
}
}
}
});})(c__18530__auto__))
;
return ((function (switch__18465__auto__,c__18530__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__18466__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__18466__auto____0 = (function (){
var statearr_24950 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24950[(0)] = figwheel$client$heads_up$clear_$_state_machine__18466__auto__);

(statearr_24950[(1)] = (1));

return statearr_24950;
});
var figwheel$client$heads_up$clear_$_state_machine__18466__auto____1 = (function (state_24942){
while(true){
var ret_value__18467__auto__ = (function (){try{while(true){
var result__18468__auto__ = switch__18465__auto__.call(null,state_24942);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18468__auto__;
}
break;
}
}catch (e24951){if((e24951 instanceof Object)){
var ex__18469__auto__ = e24951;
var statearr_24952_24954 = state_24942;
(statearr_24952_24954[(5)] = ex__18469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24942);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24951;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24955 = state_24942;
state_24942 = G__24955;
continue;
} else {
return ret_value__18467__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__18466__auto__ = function(state_24942){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__18466__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__18466__auto____1.call(this,state_24942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__18466__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__18466__auto____0;
figwheel$client$heads_up$clear_$_state_machine__18466__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__18466__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__18466__auto__;
})()
;})(switch__18465__auto__,c__18530__auto__))
})();
var state__18532__auto__ = (function (){var statearr_24953 = f__18531__auto__.call(null);
(statearr_24953[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18530__auto__);

return statearr_24953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18532__auto__);
});})(c__18530__auto__))
);

return c__18530__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__18530__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18530__auto__){
return (function (){
var f__18531__auto__ = (function (){var switch__18465__auto__ = ((function (c__18530__auto__){
return (function (state_24987){
var state_val_24988 = (state_24987[(1)]);
if((state_val_24988 === (1))){
var inst_24977 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_24987__$1 = state_24987;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24987__$1,(2),inst_24977);
} else {
if((state_val_24988 === (2))){
var inst_24979 = (state_24987[(2)]);
var inst_24980 = cljs.core.async.timeout.call(null,(400));
var state_24987__$1 = (function (){var statearr_24989 = state_24987;
(statearr_24989[(7)] = inst_24979);

return statearr_24989;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24987__$1,(3),inst_24980);
} else {
if((state_val_24988 === (3))){
var inst_24982 = (state_24987[(2)]);
var inst_24983 = figwheel.client.heads_up.clear.call(null);
var state_24987__$1 = (function (){var statearr_24990 = state_24987;
(statearr_24990[(8)] = inst_24982);

return statearr_24990;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24987__$1,(4),inst_24983);
} else {
if((state_val_24988 === (4))){
var inst_24985 = (state_24987[(2)]);
var state_24987__$1 = state_24987;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24987__$1,inst_24985);
} else {
return null;
}
}
}
}
});})(c__18530__auto__))
;
return ((function (switch__18465__auto__,c__18530__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__18466__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__18466__auto____0 = (function (){
var statearr_24994 = [null,null,null,null,null,null,null,null,null];
(statearr_24994[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__18466__auto__);

(statearr_24994[(1)] = (1));

return statearr_24994;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__18466__auto____1 = (function (state_24987){
while(true){
var ret_value__18467__auto__ = (function (){try{while(true){
var result__18468__auto__ = switch__18465__auto__.call(null,state_24987);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18468__auto__;
}
break;
}
}catch (e24995){if((e24995 instanceof Object)){
var ex__18469__auto__ = e24995;
var statearr_24996_24998 = state_24987;
(statearr_24996_24998[(5)] = ex__18469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24987);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24995;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24999 = state_24987;
state_24987 = G__24999;
continue;
} else {
return ret_value__18467__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__18466__auto__ = function(state_24987){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__18466__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__18466__auto____1.call(this,state_24987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__18466__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__18466__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__18466__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__18466__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__18466__auto__;
})()
;})(switch__18465__auto__,c__18530__auto__))
})();
var state__18532__auto__ = (function (){var statearr_24997 = f__18531__auto__.call(null);
(statearr_24997[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18530__auto__);

return statearr_24997;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18532__auto__);
});})(c__18530__auto__))
);

return c__18530__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map