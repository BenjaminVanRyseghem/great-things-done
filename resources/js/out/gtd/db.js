// Compiled by ClojureScript 1.7.122 {}
goog.provide('gtd.db');
goog.require('cljs.core');
goog.require('node.fs');
goog.require('gtd.platform');
goog.require('utils.keychain');
goog.require('utils.core');
goog.require('gtd.crypto');
gtd.db.encrypt_task = (function gtd$db$encrypt_task(task){
var password = utils.keychain.get_password.call(null,"great-things-done",gtd.platform.logged_user.call(null));
var encrypted_string = gtd.crypto.encrypt.call(null,utils.core.clj__GT_json.call(null,task),password);
return encrypted_string;
});
gtd.db.decrypt_task = (function gtd$db$decrypt_task(encrypted_string){
var password = utils.keychain.get_password.call(null,"great-things-done",gtd.platform.logged_user.call(null));
var task = utils.core.json__GT_clj.call(null,gtd.crypto.decrypt.call(null,encrypted_string,password));
return task;
});
gtd.db.deserialize_task = (function gtd$db$deserialize_task(var_args){
var args__17512__auto__ = [];
var len__17505__auto___22660 = arguments.length;
var i__17506__auto___22661 = (0);
while(true){
if((i__17506__auto___22661 < len__17505__auto___22660)){
args__17512__auto__.push((arguments[i__17506__auto___22661]));

var G__22662 = (i__17506__auto___22661 + (1));
i__17506__auto___22661 = G__22662;
continue;
} else {
}
break;
}

var argseq__17513__auto__ = ((((2) < args__17512__auto__.length))?(new cljs.core.IndexedSeq(args__17512__auto__.slice((2)),(0))):null);
return gtd.db.deserialize_task.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17513__auto__);
});

gtd.db.deserialize_task.cljs$core$IFn$_invoke$arity$variadic = (function (path,task_id,p__22652){
var vec__22653 = p__22652;
var callback = cljs.core.nth.call(null,vec__22653,(0),null);
var task_path = [cljs.core.str(path),cljs.core.str(gtd.platform.separator),cljs.core.str(task_id),cljs.core.str(".egtd")].join('');
var string = node.fs.read_file.call(null,task_path);
var info = gtd.db.decrypt_task.call(null,string);
var task = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var seq__22654_22663 = cljs.core.seq.call(null,info);
var chunk__22655_22664 = null;
var count__22656_22665 = (0);
var i__22657_22666 = (0);
while(true){
if((i__22657_22666 < count__22656_22665)){
var vec__22658_22667 = cljs.core._nth.call(null,chunk__22655_22664,i__22657_22666);
var k_22668 = cljs.core.nth.call(null,vec__22658_22667,(0),null);
var v_22669 = cljs.core.nth.call(null,vec__22658_22667,(1),null);
cljs.core.swap_BANG_.call(null,task,cljs.core.assoc,k_22668,v_22669);

if(cljs.core._EQ_.call(null,cljs.core.name.call(null,k_22668),"tasks")){
cljs.core.swap_BANG_.call(null,task,cljs.core.assoc,k_22668,cljs.core.map.call(null,((function (seq__22654_22663,chunk__22655_22664,count__22656_22665,i__22657_22666,vec__22658_22667,k_22668,v_22669,task_path,string,info,task,vec__22653,callback){
return (function (p1__22648_SHARP_){
return gtd.db.deserialize_task.call(null,path,p1__22648_SHARP_);
});})(seq__22654_22663,chunk__22655_22664,count__22656_22665,i__22657_22666,vec__22658_22667,k_22668,v_22669,task_path,string,info,task,vec__22653,callback))
,v_22669));
} else {
}

var G__22670 = seq__22654_22663;
var G__22671 = chunk__22655_22664;
var G__22672 = count__22656_22665;
var G__22673 = (i__22657_22666 + (1));
seq__22654_22663 = G__22670;
chunk__22655_22664 = G__22671;
count__22656_22665 = G__22672;
i__22657_22666 = G__22673;
continue;
} else {
var temp__4425__auto___22674 = cljs.core.seq.call(null,seq__22654_22663);
if(temp__4425__auto___22674){
var seq__22654_22675__$1 = temp__4425__auto___22674;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22654_22675__$1)){
var c__17250__auto___22676 = cljs.core.chunk_first.call(null,seq__22654_22675__$1);
var G__22677 = cljs.core.chunk_rest.call(null,seq__22654_22675__$1);
var G__22678 = c__17250__auto___22676;
var G__22679 = cljs.core.count.call(null,c__17250__auto___22676);
var G__22680 = (0);
seq__22654_22663 = G__22677;
chunk__22655_22664 = G__22678;
count__22656_22665 = G__22679;
i__22657_22666 = G__22680;
continue;
} else {
var vec__22659_22681 = cljs.core.first.call(null,seq__22654_22675__$1);
var k_22682 = cljs.core.nth.call(null,vec__22659_22681,(0),null);
var v_22683 = cljs.core.nth.call(null,vec__22659_22681,(1),null);
cljs.core.swap_BANG_.call(null,task,cljs.core.assoc,k_22682,v_22683);

if(cljs.core._EQ_.call(null,cljs.core.name.call(null,k_22682),"tasks")){
cljs.core.swap_BANG_.call(null,task,cljs.core.assoc,k_22682,cljs.core.map.call(null,((function (seq__22654_22663,chunk__22655_22664,count__22656_22665,i__22657_22666,vec__22659_22681,k_22682,v_22683,seq__22654_22675__$1,temp__4425__auto___22674,task_path,string,info,task,vec__22653,callback){
return (function (p1__22648_SHARP_){
return gtd.db.deserialize_task.call(null,path,p1__22648_SHARP_);
});})(seq__22654_22663,chunk__22655_22664,count__22656_22665,i__22657_22666,vec__22659_22681,k_22682,v_22683,seq__22654_22675__$1,temp__4425__auto___22674,task_path,string,info,task,vec__22653,callback))
,v_22683));
} else {
}

var G__22684 = cljs.core.next.call(null,seq__22654_22675__$1);
var G__22685 = null;
var G__22686 = (0);
var G__22687 = (0);
seq__22654_22663 = G__22684;
chunk__22655_22664 = G__22685;
count__22656_22665 = G__22686;
i__22657_22666 = G__22687;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(callback)){
callback.call(null,cljs.core.deref.call(null,task));
} else {
}

return cljs.core.deref.call(null,task);
});

gtd.db.deserialize_task.cljs$lang$maxFixedArity = (2);

gtd.db.deserialize_task.cljs$lang$applyTo = (function (seq22649){
var G__22650 = cljs.core.first.call(null,seq22649);
var seq22649__$1 = cljs.core.next.call(null,seq22649);
var G__22651 = cljs.core.first.call(null,seq22649__$1);
var seq22649__$2 = cljs.core.next.call(null,seq22649__$1);
return gtd.db.deserialize_task.cljs$core$IFn$_invoke$arity$variadic(G__22650,G__22651,seq22649__$2);
});
gtd.db.deserialize_project = (function gtd$db$deserialize_project(var_args){
var args__17512__auto__ = [];
var len__17505__auto___22699 = arguments.length;
var i__17506__auto___22700 = (0);
while(true){
if((i__17506__auto___22700 < len__17505__auto___22699)){
args__17512__auto__.push((arguments[i__17506__auto___22700]));

var G__22701 = (i__17506__auto___22700 + (1));
i__17506__auto___22700 = G__22701;
continue;
} else {
}
break;
}

var argseq__17513__auto__ = ((((1) < args__17512__auto__.length))?(new cljs.core.IndexedSeq(args__17512__auto__.slice((1)),(0))):null);
return gtd.db.deserialize_project.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17513__auto__);
});

gtd.db.deserialize_project.cljs$core$IFn$_invoke$arity$variadic = (function (path,p__22691){
var vec__22692 = p__22691;
var callback = cljs.core.nth.call(null,vec__22692,(0),null);
var project_path = [cljs.core.str(gtd.platform.database_projects_path.call(null)),cljs.core.str(gtd.platform.separator),cljs.core.str(path)].join('');
var full_path = [cljs.core.str(project_path),cljs.core.str(gtd.platform.separator),cljs.core.str(".project.pgtd")].join('');
var string = node.fs.read_file.call(null,full_path);
var info = utils.core.json__GT_clj.call(null,string);
var project = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var seq__22693_22702 = cljs.core.seq.call(null,info);
var chunk__22694_22703 = null;
var count__22695_22704 = (0);
var i__22696_22705 = (0);
while(true){
if((i__22696_22705 < count__22695_22704)){
var vec__22697_22706 = cljs.core._nth.call(null,chunk__22694_22703,i__22696_22705);
var k_22707 = cljs.core.nth.call(null,vec__22697_22706,(0),null);
var v_22708 = cljs.core.nth.call(null,vec__22697_22706,(1),null);
cljs.core.swap_BANG_.call(null,project,cljs.core.assoc,k_22707,v_22708);

if(cljs.core._EQ_.call(null,cljs.core.name.call(null,k_22707),"tasks")){
cljs.core.swap_BANG_.call(null,project,cljs.core.assoc,k_22707,cljs.core.map.call(null,((function (seq__22693_22702,chunk__22694_22703,count__22695_22704,i__22696_22705,vec__22697_22706,k_22707,v_22708,project_path,full_path,string,info,project,vec__22692,callback){
return (function (p1__22688_SHARP_){
return gtd.db.deserialize_task.call(null,project_path,p1__22688_SHARP_,callback);
});})(seq__22693_22702,chunk__22694_22703,count__22695_22704,i__22696_22705,vec__22697_22706,k_22707,v_22708,project_path,full_path,string,info,project,vec__22692,callback))
,v_22708));
} else {
}

var G__22709 = seq__22693_22702;
var G__22710 = chunk__22694_22703;
var G__22711 = count__22695_22704;
var G__22712 = (i__22696_22705 + (1));
seq__22693_22702 = G__22709;
chunk__22694_22703 = G__22710;
count__22695_22704 = G__22711;
i__22696_22705 = G__22712;
continue;
} else {
var temp__4425__auto___22713 = cljs.core.seq.call(null,seq__22693_22702);
if(temp__4425__auto___22713){
var seq__22693_22714__$1 = temp__4425__auto___22713;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22693_22714__$1)){
var c__17250__auto___22715 = cljs.core.chunk_first.call(null,seq__22693_22714__$1);
var G__22716 = cljs.core.chunk_rest.call(null,seq__22693_22714__$1);
var G__22717 = c__17250__auto___22715;
var G__22718 = cljs.core.count.call(null,c__17250__auto___22715);
var G__22719 = (0);
seq__22693_22702 = G__22716;
chunk__22694_22703 = G__22717;
count__22695_22704 = G__22718;
i__22696_22705 = G__22719;
continue;
} else {
var vec__22698_22720 = cljs.core.first.call(null,seq__22693_22714__$1);
var k_22721 = cljs.core.nth.call(null,vec__22698_22720,(0),null);
var v_22722 = cljs.core.nth.call(null,vec__22698_22720,(1),null);
cljs.core.swap_BANG_.call(null,project,cljs.core.assoc,k_22721,v_22722);

if(cljs.core._EQ_.call(null,cljs.core.name.call(null,k_22721),"tasks")){
cljs.core.swap_BANG_.call(null,project,cljs.core.assoc,k_22721,cljs.core.map.call(null,((function (seq__22693_22702,chunk__22694_22703,count__22695_22704,i__22696_22705,vec__22698_22720,k_22721,v_22722,seq__22693_22714__$1,temp__4425__auto___22713,project_path,full_path,string,info,project,vec__22692,callback){
return (function (p1__22688_SHARP_){
return gtd.db.deserialize_task.call(null,project_path,p1__22688_SHARP_,callback);
});})(seq__22693_22702,chunk__22694_22703,count__22695_22704,i__22696_22705,vec__22698_22720,k_22721,v_22722,seq__22693_22714__$1,temp__4425__auto___22713,project_path,full_path,string,info,project,vec__22692,callback))
,v_22722));
} else {
}

var G__22723 = cljs.core.next.call(null,seq__22693_22714__$1);
var G__22724 = null;
var G__22725 = (0);
var G__22726 = (0);
seq__22693_22702 = G__22723;
chunk__22694_22703 = G__22724;
count__22695_22704 = G__22725;
i__22696_22705 = G__22726;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,project);
});

gtd.db.deserialize_project.cljs$lang$maxFixedArity = (1);

gtd.db.deserialize_project.cljs$lang$applyTo = (function (seq22689){
var G__22690 = cljs.core.first.call(null,seq22689);
var seq22689__$1 = cljs.core.next.call(null,seq22689);
return gtd.db.deserialize_project.cljs$core$IFn$_invoke$arity$variadic(G__22690,seq22689__$1);
});
gtd.db.serialize_task_BANG_ = (function gtd$db$serialize_task_BANG_(task){
var project = new cljs.core.Keyword(null,"project","project",1124394579).cljs$core$IFn$_invoke$arity$1(task);
var projects_path = gtd.platform.database_projects_path.call(null);
var project_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(project);
var task_name = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(task);
var full_path = [cljs.core.str(projects_path),cljs.core.str(gtd.platform.separator),cljs.core.str(project_id)].join('');
var string = gtd.db.encrypt_task.call(null,cljs.core.assoc.call(null,task,new cljs.core.Keyword(null,"tasks","tasks",-1754368880),cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"tasks","tasks",-1754368880).cljs$core$IFn$_invoke$arity$1(task))));
node.fs.ensure_dir_BANG_.call(null,full_path);

return node.fs.write_file_BANG_.call(null,[cljs.core.str(full_path),cljs.core.str(gtd.platform.separator),cljs.core.str(task_name),cljs.core.str(".egtd")].join(''),string);
});
gtd.db.serialize_project_BANG_ = (function gtd$db$serialize_project_BANG_(project){
var projects_path = gtd.platform.database_projects_path.call(null);
var project_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(project);
var full_path = [cljs.core.str(projects_path),cljs.core.str(gtd.platform.separator),cljs.core.str(project_id)].join('');
node.fs.ensure_dir_BANG_.call(null,full_path);

return node.fs.write_file_BANG_.call(null,[cljs.core.str(full_path),cljs.core.str(gtd.platform.separator),cljs.core.str(".project.pgtd")].join(''),utils.core.clj__GT_json.call(null,cljs.core.assoc.call(null,project,new cljs.core.Keyword(null,"tasks","tasks",-1754368880),cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"tasks","tasks",-1754368880).cljs$core$IFn$_invoke$arity$1(project)))));
});
gtd.db.rename_project_BANG_ = (function gtd$db$rename_project_BANG_(project,old_id){
var new_path = [cljs.core.str(gtd.platform.database_projects_path.call(null)),cljs.core.str(gtd.platform.separator),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(project))].join('');
var old_path = [cljs.core.str(gtd.platform.database_projects_path.call(null)),cljs.core.str(gtd.platform.separator),cljs.core.str(old_id)].join('');
return node.fs.rename_BANG_.call(null,old_path,new_path);
});
/**
 * Remove old file in old project
 */
gtd.db.remove_task_BANG_ = (function gtd$db$remove_task_BANG_(task){
return node.fs.unlink_BANG_.call(null,[cljs.core.str(gtd.platform.database_projects_path.call(null)),cljs.core.str(gtd.platform.separator),cljs.core.str(cljs.core.get_in.call(null,task,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"project","project",1124394579),new cljs.core.Keyword(null,"id","id",-1388402092)], null))),cljs.core.str(gtd.platform.separator),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(task)),cljs.core.str(".egtd")].join(''));
});
gtd.db.ensure_structure = (function gtd$db$ensure_structure(){
gtd.platform.ensure_database_path_BANG_.call(null);

gtd.platform.ensure_database_meta_projects_path_BANG_.call(null);

gtd.platform.ensure_database_projects_path_BANG_.call(null);

return gtd.platform.ensure_inbox_BANG_.call(null);
});
gtd.db.ensure_project = (function gtd$db$ensure_project(project){
var projects_path = gtd.platform.database_projects_path.call(null);
var project_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(project);
var exists = node.fs.path_exists_QMARK_.call(null,[cljs.core.str(projects_path),cljs.core.str(gtd.platform.separator),cljs.core.str(project_id),cljs.core.str(gtd.platform.separator),cljs.core.str(".project.pgtd")].join(''));
if(cljs.core.truth_(exists)){
return null;
} else {
return gtd.db.serialize_project_BANG_.call(null,project);
}
});

//# sourceMappingURL=db.js.map