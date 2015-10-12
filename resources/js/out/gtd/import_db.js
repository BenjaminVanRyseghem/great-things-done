// Compiled by ClojureScript 1.7.122 {}
goog.provide('gtd.import_db');
goog.require('cljs.core');
goog.require('gtd.db');
goog.require('gtd.state');
goog.require('gtd.platform');
goog.require('node.fs');
gtd.import_db.import_meta_projects = (function gtd$import_db$import_meta_projects(){
var result = cljs.core.js__GT_clj.call(null,importScript("function(p) { p.filter(function(e, i){ return (i % 2) === 0; })}"));
var seq__22927 = cljs.core.seq.call(null,result);
var chunk__22928 = null;
var count__22929 = (0);
var i__22930 = (0);
while(true){
if((i__22930 < count__22929)){
var each = cljs.core._nth.call(null,chunk__22928,i__22930);
console.log(each);

var G__22931 = seq__22927;
var G__22932 = chunk__22928;
var G__22933 = count__22929;
var G__22934 = (i__22930 + (1));
seq__22927 = G__22931;
chunk__22928 = G__22932;
count__22929 = G__22933;
i__22930 = G__22934;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__22927);
if(temp__4425__auto__){
var seq__22927__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22927__$1)){
var c__17250__auto__ = cljs.core.chunk_first.call(null,seq__22927__$1);
var G__22935 = cljs.core.chunk_rest.call(null,seq__22927__$1);
var G__22936 = c__17250__auto__;
var G__22937 = cljs.core.count.call(null,c__17250__auto__);
var G__22938 = (0);
seq__22927 = G__22935;
chunk__22928 = G__22936;
count__22929 = G__22937;
i__22930 = G__22938;
continue;
} else {
var each = cljs.core.first.call(null,seq__22927__$1);
console.log(each);

var G__22939 = cljs.core.next.call(null,seq__22927__$1);
var G__22940 = null;
var G__22941 = (0);
var G__22942 = (0);
seq__22927 = G__22939;
chunk__22928 = G__22940;
count__22929 = G__22941;
i__22930 = G__22942;
continue;
}
} else {
return null;
}
}
break;
}
});
gtd.import_db.import_task = (function gtd$import_db$import_task(project_path,task_id){
var task = gtd.db.deserialize_task.call(null,project_path,task_id);
gtd.state.load_task_BANG_.call(null,cljs.core.deref.call(null,task));

return task;
});
gtd.import_db.import_project = (function gtd$import_db$import_project(folder_name){
var project = gtd.db.deserialize_project.call(null,folder_name,(function (p1__22943_SHARP_){
return gtd.state.load_task_BANG_.call(null,p1__22943_SHARP_);
}));
gtd.state.load_project_BANG_.call(null,project);

return project;
});
gtd.import_db.import_all_projects_BANG_ = (function gtd$import_db$import_all_projects_BANG_(){
var root = gtd.platform.database_projects_path.call(null);
var folders = node.fs.read_dir.call(null,root);
var seq__22948 = cljs.core.seq.call(null,folders);
var chunk__22949 = null;
var count__22950 = (0);
var i__22951 = (0);
while(true){
if((i__22951 < count__22950)){
var folder = cljs.core._nth.call(null,chunk__22949,i__22951);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,folder),".")){
} else {
gtd.import_db.import_project.call(null,folder);
}

var G__22952 = seq__22948;
var G__22953 = chunk__22949;
var G__22954 = count__22950;
var G__22955 = (i__22951 + (1));
seq__22948 = G__22952;
chunk__22949 = G__22953;
count__22950 = G__22954;
i__22951 = G__22955;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__22948);
if(temp__4425__auto__){
var seq__22948__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22948__$1)){
var c__17250__auto__ = cljs.core.chunk_first.call(null,seq__22948__$1);
var G__22956 = cljs.core.chunk_rest.call(null,seq__22948__$1);
var G__22957 = c__17250__auto__;
var G__22958 = cljs.core.count.call(null,c__17250__auto__);
var G__22959 = (0);
seq__22948 = G__22956;
chunk__22949 = G__22957;
count__22950 = G__22958;
i__22951 = G__22959;
continue;
} else {
var folder = cljs.core.first.call(null,seq__22948__$1);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,folder),".")){
} else {
gtd.import_db.import_project.call(null,folder);
}

var G__22960 = cljs.core.next.call(null,seq__22948__$1);
var G__22961 = null;
var G__22962 = (0);
var G__22963 = (0);
seq__22948 = G__22960;
chunk__22949 = G__22961;
count__22950 = G__22962;
i__22951 = G__22963;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=import_db.js.map