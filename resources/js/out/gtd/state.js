// Compiled by ClojureScript 1.7.122 {}
goog.provide('gtd.state');
goog.require('cljs.core');
goog.require('cljs_uuid_utils.core');
goog.require('cuerdas.core');
goog.require('gtd.db');
gtd.state.task_types = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Task","SubTask"], null);
gtd.state.all_projects;
gtd.state.all_tasks;
if(typeof gtd.state.meta_projects !== 'undefined'){
} else {
gtd.state.meta_projects = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if(typeof gtd.state.projects !== 'undefined'){
} else {
gtd.state.projects = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof gtd.state.active_projects !== 'undefined'){
} else {
gtd.state.active_projects = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof gtd.state.completed_projects !== 'undefined'){
} else {
gtd.state.completed_projects = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof gtd.state.tasks !== 'undefined'){
} else {
gtd.state.tasks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof gtd.state.active_tasks !== 'undefined'){
} else {
gtd.state.active_tasks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof gtd.state.repeating_tasks !== 'undefined'){
} else {
gtd.state.repeating_tasks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof gtd.state.completed_tasks !== 'undefined'){
} else {
gtd.state.completed_tasks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof gtd.state.tags !== 'undefined'){
} else {
gtd.state.tags = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof gtd.state.inbox_project !== 'undefined'){
} else {
gtd.state.inbox_project = cljs.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"done","done",-889844188),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"tasks","tasks",-1754368880),new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"due-date","due-date",-915697004),new cljs.core.Keyword(null,"creation-date","creation-date",-676107851)],[null,cljs.core.PersistentVector.EMPTY,false,"Inbox","Project",cljs.core.PersistentVector.EMPTY,null,"Inbox",null,null]));
}
gtd.state.generate_uuid = (function gtd$state$generate_uuid(){
var uuid = cljs_uuid_utils.core.uuid_string.call(null,cljs_uuid_utils.core.make_random_uuid.call(null));
while(true){
if(!((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,gtd.state.active_projects),uuid)) && (cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,gtd.state.completed_projects),uuid)))){
return uuid;
} else {
var G__22797 = cljs_uuid_utils.core.uuid_string.call(null,cljs_uuid_utils.core.make_random_uuid.call(null));
uuid = G__22797;
continue;
}
break;
}
});
gtd.state.normalize_path = (function gtd$state$normalize_path(path){
return cuerdas.core.replace.call(null,path,/[^a-zA-z0-9-_]/,"-");
});
gtd.state.build_id = (function gtd$state$build_id(entity_name){
return [cljs.core.str(gtd.state.normalize_path.call(null,entity_name)),cljs.core.str("-"),cljs.core.str(gtd.state.generate_uuid.call(null))].join('');
});
/**
 * Return the current time as a string
 */
gtd.state.now_as_milliseconds = (function gtd$state$now_as_milliseconds(){
return [cljs.core.str(Date.now())].join('');
});
gtd.state.register_entity_in = (function gtd$state$register_entity_in(entity,atom_map){
return cljs.core.swap_BANG_.call(null,atom_map,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(entity),entity);
});
gtd.state.is_project = (function gtd$state$is_project(entity){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(entity),"Project");
});
gtd.state.is_task = (function gtd$state$is_task(entity){
return cljs.core.boolean$.call(null,cljs.core.not_empty.call(null,cljs.core.filter.call(null,cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(entity)], true),gtd.state.task_types)));
});
gtd.state.register_tags_BANG_ = (function gtd$state$register_tags_BANG_(entry,entry_type){
var seq__22802 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(entry));
var chunk__22803 = null;
var count__22804 = (0);
var i__22805 = (0);
while(true){
if((i__22805 < count__22804)){
var tag = cljs.core._nth.call(null,chunk__22803,i__22805);
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,gtd.state.tags),tag)){
} else {
cljs.core.swap_BANG_.call(null,gtd.state.tags,cljs.core.assoc,tag,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"projects","projects",-364845983),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"tasks","tasks",-1754368880),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)], null));
}

cljs.core.swap_BANG_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,gtd.state.tags),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,entry_type], null)),cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(entry),entry);

var G__22806 = seq__22802;
var G__22807 = chunk__22803;
var G__22808 = count__22804;
var G__22809 = (i__22805 + (1));
seq__22802 = G__22806;
chunk__22803 = G__22807;
count__22804 = G__22808;
i__22805 = G__22809;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__22802);
if(temp__4425__auto__){
var seq__22802__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22802__$1)){
var c__17250__auto__ = cljs.core.chunk_first.call(null,seq__22802__$1);
var G__22810 = cljs.core.chunk_rest.call(null,seq__22802__$1);
var G__22811 = c__17250__auto__;
var G__22812 = cljs.core.count.call(null,c__17250__auto__);
var G__22813 = (0);
seq__22802 = G__22810;
chunk__22803 = G__22811;
count__22804 = G__22812;
i__22805 = G__22813;
continue;
} else {
var tag = cljs.core.first.call(null,seq__22802__$1);
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,gtd.state.tags),tag)){
} else {
cljs.core.swap_BANG_.call(null,gtd.state.tags,cljs.core.assoc,tag,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"projects","projects",-364845983),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"tasks","tasks",-1754368880),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)], null));
}

cljs.core.swap_BANG_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,gtd.state.tags),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,entry_type], null)),cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(entry),entry);

var G__22814 = cljs.core.next.call(null,seq__22802__$1);
var G__22815 = null;
var G__22816 = (0);
var G__22817 = (0);
seq__22802 = G__22814;
chunk__22803 = G__22815;
count__22804 = G__22816;
i__22805 = G__22817;
continue;
}
} else {
return null;
}
}
break;
}
});
gtd.state.store_task_BANG_ = (function gtd$state$store_task_BANG_(task){
if(cljs.core.truth_((function (){var and__16435__auto__ = new cljs.core.Keyword(null,"repeating","repeating",1436671318).cljs$core$IFn$_invoke$arity$1(task);
if(cljs.core.truth_(and__16435__auto__)){
return cljs.core._EQ_.call(null,cljs.core.get_in.call(null,task,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repeating","repeating",1436671318),new cljs.core.Keyword(null,"type","type",1174270348)], null)),"pattern");
} else {
return and__16435__auto__;
}
})())){
gtd.state.register_entity_in.call(null,task,gtd.state.repeating_tasks);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"done","done",-889844188).cljs$core$IFn$_invoke$arity$1(task))){
gtd.state.register_entity_in.call(null,task,gtd.state.completed_tasks);
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(task))){
gtd.state.register_entity_in.call(null,task,gtd.state.active_tasks);
} else {
}

gtd.state.register_entity_in.call(null,task,gtd.state.tasks);
}

return gtd.state.register_tags_BANG_.call(null,task,new cljs.core.Keyword(null,"tasks","tasks",-1754368880));
});
gtd.state.store_project_BANG_ = (function gtd$state$store_project_BANG_(project){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(project),"Inbox")){
return cljs.core.reset_BANG_.call(null,gtd.state.inbox_project,project);
} else {
gtd.state.register_entity_in.call(null,project,gtd.state.projects);

if(cljs.core.truth_(new cljs.core.Keyword(null,"done","done",-889844188).cljs$core$IFn$_invoke$arity$1(project))){
gtd.state.register_entity_in.call(null,project,gtd.state.completed_projects);
} else {
gtd.state.register_entity_in.call(null,project,gtd.state.active_projects);
}

return gtd.state.register_tags_BANG_.call(null,project,new cljs.core.Keyword(null,"projects","projects",-364845983));
}
});
gtd.state.get_parent = (function gtd$state$get_parent(task){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(task),"Task")){
return cljs.core.get.call(null,gtd.state.all_projects.call(null),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(task));
} else {
return cljs.core.get.call(null,gtd.state.all_tasks.call(null),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(task));
}
});
gtd.state.install_task = (function gtd$state$install_task(task){
gtd.state.store_task_BANG_.call(null,task);

gtd.db.serialize_task_BANG_.call(null,task);

return task;
});
gtd.state.install_project = (function gtd$state$install_project(project){
gtd.state.store_project_BANG_.call(null,project);

gtd.db.serialize_project_BANG_.call(null,project);

return project;
});
gtd.state.install_entity_BANG_ = (function gtd$state$install_entity_BANG_(entity){
if(cljs.core.truth_(gtd.state.is_project.call(null,entity))){
gtd.state.install_project.call(null,entity);
} else {
}

if(cljs.core.truth_(gtd.state.is_task.call(null,entity))){
return gtd.state.install_task.call(null,entity);
} else {
return null;
}
});
gtd.state.get_task_by_id = (function gtd$state$get_task_by_id(id){
return cljs.core.get.call(null,cljs.core.deref.call(null,gtd.state.tasks),id);
});
gtd.state.get_project_by_id = (function gtd$state$get_project_by_id(id){
return cljs.core.get.call(null,cljs.core.deref.call(null,gtd.state.projects),id);
});
gtd.state.new_task = (function gtd$state$new_task(task_name,project,parent,tags,tasks,description,remind_date,due_date,show_before,repeating,done){
if(cljs.core.truth_((function (){var and__16435__auto__ = gtd.state.is_project.call(null,parent);
if(cljs.core.truth_(and__16435__auto__)){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(project));
} else {
return and__16435__auto__;
}
})())){
throw (new Error([cljs.core.str("`parent` and `project` can't be different if parent is a project")].join('')));
} else {
}

if(cljs.core.truth_((function (){var and__16435__auto__ = gtd.state.is_task.call(null,parent);
if(cljs.core.truth_(and__16435__auto__)){
return cljs.core.not_EQ_.call(null,cljs.core.get_in.call(null,parent,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"project","project",1124394579),new cljs.core.Keyword(null,"id","id",-1388402092)], null)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(project));
} else {
return and__16435__auto__;
}
})())){
throw (new Error([cljs.core.str("`parent` has to be a task of `project` if parent is a task")].join('')));
} else {
}

return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"done","done",-889844188),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"show-before","show-before",-1559775256),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"remind-date","remind-date",1276428844),new cljs.core.Keyword(null,"tasks","tasks",-1754368880),new cljs.core.Keyword(null,"project","project",1124394579),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"due-date","due-date",-915697004),new cljs.core.Keyword(null,"repeating","repeating",1436671318)],[description,tags,done,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(parent),show_before,task_name,(cljs.core.truth_(gtd.state.is_project.call(null,parent))?"Task":"SubTask"),remind_date,tasks,cljs.core.select_keys.call(null,project,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"id","id",-1388402092)], null)),gtd.state.build_id.call(null,task_name),due_date,repeating]);
});
gtd.state.new_project = (function gtd$state$new_project(project_name,tags,tasks,description,due_date,active,done){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"done","done",-889844188),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"tasks","tasks",-1754368880),new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"due-date","due-date",-915697004),new cljs.core.Keyword(null,"creation-date","creation-date",-676107851)],[description,tags,done,project_name,"Project",tasks,active,gtd.state.build_id.call(null,project_name),due_date,gtd.state.now_as_milliseconds.call(null)]);
});
gtd.state.inbox = (function gtd$state$inbox(){
return cljs.core.deref.call(null,gtd.state.inbox_project);
});
gtd.state.all_projects = (function gtd$state$all_projects(){
return cljs.core.assoc.call(null,cljs.core.deref.call(null,gtd.state.projects),"Inbox",gtd.state.inbox.call(null));
});
gtd.state.all_tasks = (function gtd$state$all_tasks(){
return cljs.core.deref.call(null,gtd.state.tasks);
});
gtd.state.register_task = (function gtd$state$register_task(task_name,p__22818){
var map__22821 = p__22818;
var map__22821__$1 = ((((!((map__22821 == null)))?((((map__22821.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22821.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22821):map__22821);
var project = cljs.core.get.call(null,map__22821__$1,new cljs.core.Keyword(null,"project","project",1124394579),gtd.state.inbox.call(null));
var parent = cljs.core.get.call(null,map__22821__$1,new cljs.core.Keyword(null,"parent","parent",-878878779),gtd.state.inbox.call(null));
var tags = cljs.core.get.call(null,map__22821__$1,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.PersistentVector.EMPTY);
var tasks = cljs.core.get.call(null,map__22821__$1,new cljs.core.Keyword(null,"tasks","tasks",-1754368880),cljs.core.PersistentVector.EMPTY);
var description = cljs.core.get.call(null,map__22821__$1,new cljs.core.Keyword(null,"description","description",-1428560544),"");
var remind_date = cljs.core.get.call(null,map__22821__$1,new cljs.core.Keyword(null,"remind-date","remind-date",1276428844),null);
var due_date = cljs.core.get.call(null,map__22821__$1,new cljs.core.Keyword(null,"due-date","due-date",-915697004),null);
var show_before = cljs.core.get.call(null,map__22821__$1,new cljs.core.Keyword(null,"show-before","show-before",-1559775256),(0));
var repeating = cljs.core.get.call(null,map__22821__$1,new cljs.core.Keyword(null,"repeating","repeating",1436671318),false);
var task = gtd.state.new_task.call(null,task_name,project,parent,tags,tasks,description,remind_date,due_date,show_before,repeating,false);
gtd.state.install_task.call(null,task);

gtd.state.install_project.call(null,cljs.core.assoc.call(null,project,new cljs.core.Keyword(null,"tasks","tasks",-1754368880),cljs.core.conj.call(null,new cljs.core.Keyword(null,"tasks","tasks",-1754368880).cljs$core$IFn$_invoke$arity$1(project),task)));

return task;
});
gtd.state.register_project = (function gtd$state$register_project(var_args){
var args__17512__auto__ = [];
var len__17505__auto___22828 = arguments.length;
var i__17506__auto___22829 = (0);
while(true){
if((i__17506__auto___22829 < len__17505__auto___22828)){
args__17512__auto__.push((arguments[i__17506__auto___22829]));

var G__22830 = (i__17506__auto___22829 + (1));
i__17506__auto___22829 = G__22830;
continue;
} else {
}
break;
}

var argseq__17513__auto__ = ((((1) < args__17512__auto__.length))?(new cljs.core.IndexedSeq(args__17512__auto__.slice((1)),(0))):null);
return gtd.state.register_project.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17513__auto__);
});

gtd.state.register_project.cljs$core$IFn$_invoke$arity$variadic = (function (project_name,p__22825){
var map__22826 = p__22825;
var map__22826__$1 = ((((!((map__22826 == null)))?((((map__22826.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22826.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22826):map__22826);
var tags = cljs.core.get.call(null,map__22826__$1,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.PersistentVector.EMPTY);
var tasks = cljs.core.get.call(null,map__22826__$1,new cljs.core.Keyword(null,"tasks","tasks",-1754368880),cljs.core.PersistentVector.EMPTY);
var description = cljs.core.get.call(null,map__22826__$1,new cljs.core.Keyword(null,"description","description",-1428560544),"");
var due_date = cljs.core.get.call(null,map__22826__$1,new cljs.core.Keyword(null,"due-date","due-date",-915697004),null);
var active = cljs.core.get.call(null,map__22826__$1,new cljs.core.Keyword(null,"active","active",1895962068),true);
return gtd.state.install_project.call(null,gtd.state.new_project.call(null,project_name,tags,tasks,description,due_date,active,false));
});

gtd.state.register_project.cljs$lang$maxFixedArity = (1);

gtd.state.register_project.cljs$lang$applyTo = (function (seq22823){
var G__22824 = cljs.core.first.call(null,seq22823);
var seq22823__$1 = cljs.core.next.call(null,seq22823);
return gtd.state.register_project.cljs$core$IFn$_invoke$arity$variadic(G__22824,seq22823__$1);
});
/**
 * This function is thought in the way only one property is changed at a time
 */
gtd.state.update_task_BANG_ = (function gtd$state$update_task_BANG_(var_args){
var args__17512__auto__ = [];
var len__17505__auto___22842 = arguments.length;
var i__17506__auto___22843 = (0);
while(true){
if((i__17506__auto___22843 < len__17505__auto___22842)){
args__17512__auto__.push((arguments[i__17506__auto___22843]));

var G__22844 = (i__17506__auto___22843 + (1));
i__17506__auto___22843 = G__22844;
continue;
} else {
}
break;
}

var argseq__17513__auto__ = ((((1) < args__17512__auto__.length))?(new cljs.core.IndexedSeq(args__17512__auto__.slice((1)),(0))):null);
return gtd.state.update_task_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17513__auto__);
});

gtd.state.update_task_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (task,body){
var args = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__22831_SHARP_){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,p1__22831_SHARP_);
}),cljs.core.partition.call(null,(2),body))));
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,body))){
var tmp_task = cljs.core.atom.call(null,cljs.core.merge.call(null,task,args));
var seq__22836_22845 = cljs.core.seq.call(null,args);
var chunk__22837_22846 = null;
var count__22838_22847 = (0);
var i__22839_22848 = (0);
while(true){
if((i__22839_22848 < count__22838_22847)){
var vec__22840_22849 = cljs.core._nth.call(null,chunk__22837_22846,i__22839_22848);
var k_22850 = cljs.core.nth.call(null,vec__22840_22849,(0),null);
var v_22851 = cljs.core.nth.call(null,vec__22840_22849,(1),null);
if(cljs.core._EQ_.call(null,cljs.core.name.call(null,k_22850),"id")){
throw (new Error("`id` can not be updated!"));
} else {
}

if(cljs.core._EQ_.call(null,cljs.core.name.call(null,k_22850),"project")){
throw (new Error("The field `project` can only be updated via the field `parent`."));
} else {
}

if(cljs.core._EQ_.call(null,cljs.core.name.call(null,k_22850),"name")){
cljs.core.swap_BANG_.call(null,tmp_task,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092),gtd.state.build_id.call(null,v_22851));

var parent_22852 = gtd.state.get_parent.call(null,task);
var matching_22853 = cljs.core.first.call(null,cljs.core.filter.call(null,((function (seq__22836_22845,chunk__22837_22846,count__22838_22847,i__22839_22848,parent_22852,vec__22840_22849,k_22850,v_22851,tmp_task,args){
return (function (p1__22832_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(task),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__22832_SHARP_));
});})(seq__22836_22845,chunk__22837_22846,count__22838_22847,i__22839_22848,parent_22852,vec__22840_22849,k_22850,v_22851,tmp_task,args))
,new cljs.core.Keyword(null,"tasks","tasks",-1754368880).cljs$core$IFn$_invoke$arity$1(parent_22852)));
var updated_parent_22854 = cljs.core.assoc.call(null,parent_22852,new cljs.core.Keyword(null,"tasks","tasks",-1754368880),cljs.core.replace.call(null,cljs.core.PersistentArrayMap.fromArray([matching_22853,cljs.core.deref.call(null,tmp_task)], true, false),new cljs.core.Keyword(null,"tasks","tasks",-1754368880).cljs$core$IFn$_invoke$arity$1(parent_22852)));
gtd.state.install_entity_BANG_.call(null,updated_parent_22854);

gtd.db.remove_task_BANG_.call(null,task);
} else {
}

if(cljs.core._EQ_.call(null,cljs.core.name.call(null,k_22850),"parent")){
var parent_22855 = gtd.state.get_parent.call(null,task);
var project_id_22856 = cljs.core.get_in.call(null,task,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"project","project",1124394579),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
if(cljs.core.truth_(gtd.state.is_project.call(null,v_22851))){
cljs.core.swap_BANG_.call(null,tmp_task,cljs.core.assoc,new cljs.core.Keyword(null,"project","project",1124394579),v_22851);

if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(v_22851),project_id_22856)){
gtd.db.remove_task_BANG_.call(null,task);
} else {
}
} else {
}

if(cljs.core.truth_(gtd.state.is_task.call(null,v_22851))){
cljs.core.swap_BANG_.call(null,tmp_task,cljs.core.assoc,new cljs.core.Keyword(null,"project","project",1124394579),new cljs.core.Keyword(null,"project","project",1124394579).cljs$core$IFn$_invoke$arity$1(v_22851));

if(cljs.core.not_EQ_.call(null,cljs.core.get_in.call(null,v_22851,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"project","project",1124394579),new cljs.core.Keyword(null,"id","id",-1388402092)], null)),project_id_22856)){
gtd.db.remove_task_BANG_.call(null,task);
} else {
}
} else {
}

var new_parent_22857 = cljs.core.assoc.call(null,v_22851,new cljs.core.Keyword(null,"tasks","tasks",-1754368880),cljs.core.conj.call(null,new cljs.core.Keyword(null,"tasks","tasks",-1754368880).cljs$core$IFn$_invoke$arity$1(v_22851),task));
var old_parent_22858 = cljs.core.assoc.call(null,parent_22855,new cljs.core.Keyword(null,"tasks","tasks",-1754368880),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,((function (seq__22836_22845,chunk__22837_22846,count__22838_22847,i__22839_22848,new_parent_22857,parent_22855,project_id_22856,vec__22840_22849,k_22850,v_22851,tmp_task,args){
return (function (p1__22833_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(task),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__22833_SHARP_));
});})(seq__22836_22845,chunk__22837_22846,count__22838_22847,i__22839_22848,new_parent_22857,parent_22855,project_id_22856,vec__22840_22849,k_22850,v_22851,tmp_task,args))
,new cljs.core.Keyword(null,"tasks","tasks",-1754368880).cljs$core$IFn$_invoke$arity$1(parent_22855))));
console.log(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(old_parent_22858));

gtd.state.install_entity_BANG_.call(null,new_parent_22857);

gtd.state.install_entity_BANG_.call(null,old_parent_22858);
} else {
}

var G__22859 = seq__22836_22845;
var G__22860 = chunk__22837_22846;
var G__22861 = count__22838_22847;
var G__22862 = (i__22839_22848 + (1));
seq__22836_22845 = G__22859;
chunk__22837_22846 = G__22860;
count__22838_22847 = G__22861;
i__22839_22848 = G__22862;
continue;
} else {
var temp__4425__auto___22863 = cljs.core.seq.call(null,seq__22836_22845);
if(temp__4425__auto___22863){
var seq__22836_22864__$1 = temp__4425__auto___22863;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22836_22864__$1)){
var c__17250__auto___22865 = cljs.core.chunk_first.call(null,seq__22836_22864__$1);
var G__22866 = cljs.core.chunk_rest.call(null,seq__22836_22864__$1);
var G__22867 = c__17250__auto___22865;
var G__22868 = cljs.core.count.call(null,c__17250__auto___22865);
var G__22869 = (0);
seq__22836_22845 = G__22866;
chunk__22837_22846 = G__22867;
count__22838_22847 = G__22868;
i__22839_22848 = G__22869;
continue;
} else {
var vec__22841_22870 = cljs.core.first.call(null,seq__22836_22864__$1);
var k_22871 = cljs.core.nth.call(null,vec__22841_22870,(0),null);
var v_22872 = cljs.core.nth.call(null,vec__22841_22870,(1),null);
if(cljs.core._EQ_.call(null,cljs.core.name.call(null,k_22871),"id")){
throw (new Error("`id` can not be updated!"));
} else {
}

if(cljs.core._EQ_.call(null,cljs.core.name.call(null,k_22871),"project")){
throw (new Error("The field `project` can only be updated via the field `parent`."));
} else {
}

if(cljs.core._EQ_.call(null,cljs.core.name.call(null,k_22871),"name")){
cljs.core.swap_BANG_.call(null,tmp_task,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092),gtd.state.build_id.call(null,v_22872));

var parent_22873 = gtd.state.get_parent.call(null,task);
var matching_22874 = cljs.core.first.call(null,cljs.core.filter.call(null,((function (seq__22836_22845,chunk__22837_22846,count__22838_22847,i__22839_22848,parent_22873,vec__22841_22870,k_22871,v_22872,seq__22836_22864__$1,temp__4425__auto___22863,tmp_task,args){
return (function (p1__22832_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(task),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__22832_SHARP_));
});})(seq__22836_22845,chunk__22837_22846,count__22838_22847,i__22839_22848,parent_22873,vec__22841_22870,k_22871,v_22872,seq__22836_22864__$1,temp__4425__auto___22863,tmp_task,args))
,new cljs.core.Keyword(null,"tasks","tasks",-1754368880).cljs$core$IFn$_invoke$arity$1(parent_22873)));
var updated_parent_22875 = cljs.core.assoc.call(null,parent_22873,new cljs.core.Keyword(null,"tasks","tasks",-1754368880),cljs.core.replace.call(null,cljs.core.PersistentArrayMap.fromArray([matching_22874,cljs.core.deref.call(null,tmp_task)], true, false),new cljs.core.Keyword(null,"tasks","tasks",-1754368880).cljs$core$IFn$_invoke$arity$1(parent_22873)));
gtd.state.install_entity_BANG_.call(null,updated_parent_22875);

gtd.db.remove_task_BANG_.call(null,task);
} else {
}

if(cljs.core._EQ_.call(null,cljs.core.name.call(null,k_22871),"parent")){
var parent_22876 = gtd.state.get_parent.call(null,task);
var project_id_22877 = cljs.core.get_in.call(null,task,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"project","project",1124394579),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
if(cljs.core.truth_(gtd.state.is_project.call(null,v_22872))){
cljs.core.swap_BANG_.call(null,tmp_task,cljs.core.assoc,new cljs.core.Keyword(null,"project","project",1124394579),v_22872);

if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(v_22872),project_id_22877)){
gtd.db.remove_task_BANG_.call(null,task);
} else {
}
} else {
}

if(cljs.core.truth_(gtd.state.is_task.call(null,v_22872))){
cljs.core.swap_BANG_.call(null,tmp_task,cljs.core.assoc,new cljs.core.Keyword(null,"project","project",1124394579),new cljs.core.Keyword(null,"project","project",1124394579).cljs$core$IFn$_invoke$arity$1(v_22872));

if(cljs.core.not_EQ_.call(null,cljs.core.get_in.call(null,v_22872,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"project","project",1124394579),new cljs.core.Keyword(null,"id","id",-1388402092)], null)),project_id_22877)){
gtd.db.remove_task_BANG_.call(null,task);
} else {
}
} else {
}

var new_parent_22878 = cljs.core.assoc.call(null,v_22872,new cljs.core.Keyword(null,"tasks","tasks",-1754368880),cljs.core.conj.call(null,new cljs.core.Keyword(null,"tasks","tasks",-1754368880).cljs$core$IFn$_invoke$arity$1(v_22872),task));
var old_parent_22879 = cljs.core.assoc.call(null,parent_22876,new cljs.core.Keyword(null,"tasks","tasks",-1754368880),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,((function (seq__22836_22845,chunk__22837_22846,count__22838_22847,i__22839_22848,new_parent_22878,parent_22876,project_id_22877,vec__22841_22870,k_22871,v_22872,seq__22836_22864__$1,temp__4425__auto___22863,tmp_task,args){
return (function (p1__22833_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(task),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__22833_SHARP_));
});})(seq__22836_22845,chunk__22837_22846,count__22838_22847,i__22839_22848,new_parent_22878,parent_22876,project_id_22877,vec__22841_22870,k_22871,v_22872,seq__22836_22864__$1,temp__4425__auto___22863,tmp_task,args))
,new cljs.core.Keyword(null,"tasks","tasks",-1754368880).cljs$core$IFn$_invoke$arity$1(parent_22876))));
console.log(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(old_parent_22879));

gtd.state.install_entity_BANG_.call(null,new_parent_22878);

gtd.state.install_entity_BANG_.call(null,old_parent_22879);
} else {
}

var G__22880 = cljs.core.next.call(null,seq__22836_22864__$1);
var G__22881 = null;
var G__22882 = (0);
var G__22883 = (0);
seq__22836_22845 = G__22880;
chunk__22837_22846 = G__22881;
count__22838_22847 = G__22882;
i__22839_22848 = G__22883;
continue;
}
} else {
}
}
break;
}

return gtd.state.install_task.call(null,cljs.core.deref.call(null,tmp_task));
} else {
throw (new Error("Wrong number of arguments. `body` has to have an even number of elements"));
}
});

gtd.state.update_task_BANG_.cljs$lang$maxFixedArity = (1);

gtd.state.update_task_BANG_.cljs$lang$applyTo = (function (seq22834){
var G__22835 = cljs.core.first.call(null,seq22834);
var seq22834__$1 = cljs.core.next.call(null,seq22834);
return gtd.state.update_task_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22835,seq22834__$1);
});
gtd.state.update_project_BANG_ = (function gtd$state$update_project_BANG_(var_args){
var args__17512__auto__ = [];
var len__17505__auto___22893 = arguments.length;
var i__17506__auto___22894 = (0);
while(true){
if((i__17506__auto___22894 < len__17505__auto___22893)){
args__17512__auto__.push((arguments[i__17506__auto___22894]));

var G__22895 = (i__17506__auto___22894 + (1));
i__17506__auto___22894 = G__22895;
continue;
} else {
}
break;
}

var argseq__17513__auto__ = ((((1) < args__17512__auto__.length))?(new cljs.core.IndexedSeq(args__17512__auto__.slice((1)),(0))):null);
return gtd.state.update_project_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17513__auto__);
});

gtd.state.update_project_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (project,body){
var args = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__22884_SHARP_){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,p1__22884_SHARP_);
}),cljs.core.partition.call(null,(2),body)));
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,body))){
var tmp_project = cljs.core.atom.call(null,project);
var seq__22887_22896 = cljs.core.seq.call(null,args);
var chunk__22888_22897 = null;
var count__22889_22898 = (0);
var i__22890_22899 = (0);
while(true){
if((i__22890_22899 < count__22889_22898)){
var vec__22891_22900 = cljs.core._nth.call(null,chunk__22888_22897,i__22890_22899);
var k_22901 = cljs.core.nth.call(null,vec__22891_22900,(0),null);
var v_22902 = cljs.core.nth.call(null,vec__22891_22900,(1),null);
if(cljs.core._EQ_.call(null,cljs.core.name.call(null,k_22901),"id")){
throw (new Error("`id` can not be updated!"));
} else {
}

cljs.core.swap_BANG_.call(null,tmp_project,cljs.core.assoc,cljs.core.keyword.call(null,k_22901),v_22902);

if(cljs.core._EQ_.call(null,cljs.core.name.call(null,k_22901),"name")){
cljs.core.swap_BANG_.call(null,tmp_project,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092),gtd.state.build_id.call(null,v_22902));

gtd.db.rename_project_BANG_.call(null,cljs.core.deref.call(null,tmp_project),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(project));
} else {
}

var G__22903 = seq__22887_22896;
var G__22904 = chunk__22888_22897;
var G__22905 = count__22889_22898;
var G__22906 = (i__22890_22899 + (1));
seq__22887_22896 = G__22903;
chunk__22888_22897 = G__22904;
count__22889_22898 = G__22905;
i__22890_22899 = G__22906;
continue;
} else {
var temp__4425__auto___22907 = cljs.core.seq.call(null,seq__22887_22896);
if(temp__4425__auto___22907){
var seq__22887_22908__$1 = temp__4425__auto___22907;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22887_22908__$1)){
var c__17250__auto___22909 = cljs.core.chunk_first.call(null,seq__22887_22908__$1);
var G__22910 = cljs.core.chunk_rest.call(null,seq__22887_22908__$1);
var G__22911 = c__17250__auto___22909;
var G__22912 = cljs.core.count.call(null,c__17250__auto___22909);
var G__22913 = (0);
seq__22887_22896 = G__22910;
chunk__22888_22897 = G__22911;
count__22889_22898 = G__22912;
i__22890_22899 = G__22913;
continue;
} else {
var vec__22892_22914 = cljs.core.first.call(null,seq__22887_22908__$1);
var k_22915 = cljs.core.nth.call(null,vec__22892_22914,(0),null);
var v_22916 = cljs.core.nth.call(null,vec__22892_22914,(1),null);
if(cljs.core._EQ_.call(null,cljs.core.name.call(null,k_22915),"id")){
throw (new Error("`id` can not be updated!"));
} else {
}

cljs.core.swap_BANG_.call(null,tmp_project,cljs.core.assoc,cljs.core.keyword.call(null,k_22915),v_22916);

if(cljs.core._EQ_.call(null,cljs.core.name.call(null,k_22915),"name")){
cljs.core.swap_BANG_.call(null,tmp_project,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092),gtd.state.build_id.call(null,v_22916));

gtd.db.rename_project_BANG_.call(null,cljs.core.deref.call(null,tmp_project),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(project));
} else {
}

var G__22917 = cljs.core.next.call(null,seq__22887_22908__$1);
var G__22918 = null;
var G__22919 = (0);
var G__22920 = (0);
seq__22887_22896 = G__22917;
chunk__22888_22897 = G__22918;
count__22889_22898 = G__22919;
i__22890_22899 = G__22920;
continue;
}
} else {
}
}
break;
}

return gtd.state.install_project.call(null,cljs.core.deref.call(null,tmp_project));
} else {
throw (new Error("Wrong number of arguments. `body` has to have an even number of elements"));
}
});

gtd.state.update_project_BANG_.cljs$lang$maxFixedArity = (1);

gtd.state.update_project_BANG_.cljs$lang$applyTo = (function (seq22885){
var G__22886 = cljs.core.first.call(null,seq22885);
var seq22885__$1 = cljs.core.next.call(null,seq22885);
return gtd.state.update_project_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22886,seq22885__$1);
});
gtd.state.load_project_BANG_ = (function gtd$state$load_project_BANG_(project){
return gtd.state.store_project_BANG_.call(null,project);
});
gtd.state.load_task_BANG_ = (function gtd$state$load_task_BANG_(task){
return gtd.state.store_task_BANG_.call(null,task);
});
gtd.state.completion_for = (function gtd$state$completion_for(project){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"done","done",-889844188),cljs.core.count.call(null,cljs.core.filter.call(null,(function (task){
return new cljs.core.Keyword(null,"done","done",-889844188).cljs$core$IFn$_invoke$arity$1(task);
}),new cljs.core.Keyword(null,"tasks","tasks",-1754368880).cljs$core$IFn$_invoke$arity$1(project))),new cljs.core.Keyword(null,"total","total",1916810418),cljs.core.count.call(null,new cljs.core.Keyword(null,"tasks","tasks",-1754368880).cljs$core$IFn$_invoke$arity$1(project))], null);
});
gtd.state.list_of_projects = (function gtd$state$list_of_projects(){
return cljs.core.clj__GT_js.call(null,cljs.core.vals.call(null,gtd.state.all_projects.call(null)));
});
goog.exportSymbol('gtd.state.list_of_projects', gtd.state.list_of_projects);

//# sourceMappingURL=state.js.map