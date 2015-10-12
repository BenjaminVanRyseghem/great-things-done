// Compiled by ClojureScript 1.7.122 {}
goog.provide('cuerdas.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('goog.string');
/**
 * Determines whether a string contains a substring.
 */
cuerdas.core.contains_QMARK_ = (function cuerdas$core$contains_QMARK_(s,subs){
if((s == null)){
return null;
} else {
return cljs.core.not_EQ_.call(null,s.indexOf(subs),(-1));
}
});
/**
 * Build or derive regexp instance.
 */
cuerdas.core.regexp = (function cuerdas$core$regexp(var_args){
var args23324 = [];
var len__17505__auto___23327 = arguments.length;
var i__17506__auto___23328 = (0);
while(true){
if((i__17506__auto___23328 < len__17505__auto___23327)){
args23324.push((arguments[i__17506__auto___23328]));

var G__23329 = (i__17506__auto___23328 + (1));
i__17506__auto___23328 = G__23329;
continue;
} else {
}
break;
}

var G__23326 = args23324.length;
switch (G__23326) {
case 1:
return cuerdas.core.regexp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.regexp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23324.length)].join('')));

}
});

cuerdas.core.regexp.cljs$core$IFn$_invoke$arity$1 = (function (s){
if(cljs.core.regexp_QMARK_.call(null,s)){
return s;
} else {
return (new RegExp(s));
}
});

cuerdas.core.regexp.cljs$core$IFn$_invoke$arity$2 = (function (s,flags){
if(cljs.core.regexp_QMARK_.call(null,s)){
return (new RegExp(s.source,flags));
} else {
return (new RegExp(s,flags));
}
});

cuerdas.core.regexp.cljs$lang$maxFixedArity = 2;
/**
 * Escapes characters in the string that are not safe
 *   to use in a RegExp.
 */
cuerdas.core.escape_regexp = (function cuerdas$core$escape_regexp(s){
return goog.string.regExpEscape(s);
});
/**
 * Check if the string starts with prefix.
 */
cuerdas.core.starts_with_QMARK_ = (function cuerdas$core$starts_with_QMARK_(s,prefix){
if((s == null)){
return null;
} else {
return cljs.core._EQ_.call(null,s.lastIndexOf(prefix,(0)),(0));
}
});
/**
 * Check if the string ends with suffix.
 */
cuerdas.core.ends_with_QMARK_ = (function cuerdas$core$ends_with_QMARK_(s,suffix){
if((s == null)){
return null;
} else {
var l = (cljs.core.count.call(null,s) - cljs.core.count.call(null,suffix));
return ((l >= (0))) && (cljs.core._EQ_.call(null,s.indexOf(suffix,l),l));
}
});
cuerdas.core.startswith_QMARK_ = cuerdas.core.starts_with_QMARK_;
cuerdas.core.endswith_QMARK_ = cuerdas.core.ends_with_QMARK_;
/**
 * Converts string to all lower-case.
 */
cuerdas.core.lower = (function cuerdas$core$lower(s){
if((s == null)){
return null;
} else {
return s.toLowerCase();
}
});
/**
 * Converts string to all upper-case.
 */
cuerdas.core.upper = (function cuerdas$core$upper(s){
if((s == null)){
return null;
} else {
return s.toUpperCase();
}
});
cuerdas.core.replace;
/**
 * Converts all adjacent whitespace characters
 *   to a single space.
 */
cuerdas.core.collapse_whitespace = (function cuerdas$core$collapse_whitespace(s){
var G__23332 = s;
var G__23332__$1 = (((G__23332 == null))?null:cuerdas.core.replace.call(null,G__23332,/[\s\xa0]+/," "));
var G__23332__$2 = (((G__23332__$1 == null))?null:cuerdas.core.replace.call(null,G__23332__$1,/^\s+|\s+$/,""));
return G__23332__$2;
});
/**
 * Checks if a string is empty.
 */
cuerdas.core.empty_QMARK_ = (function cuerdas$core$empty_QMARK_(s){
if((s == null)){
return true;
} else {
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,s),(0))){
return true;
} else {
return false;

}
}
});
/**
 * Checks if a string is empty or contains only whitespaces.
 */
cuerdas.core.blank_QMARK_ = (function cuerdas$core$blank_QMARK_(s){
return goog.string.isEmptySafe(s);
});
/**
 * Repeats string n times.
 */
cuerdas.core.repeat = (function cuerdas$core$repeat(var_args){
var args23333 = [];
var len__17505__auto___23336 = arguments.length;
var i__17506__auto___23337 = (0);
while(true){
if((i__17506__auto___23337 < len__17505__auto___23336)){
args23333.push((arguments[i__17506__auto___23337]));

var G__23338 = (i__17506__auto___23337 + (1));
i__17506__auto___23337 = G__23338;
continue;
} else {
}
break;
}

var G__23335 = args23333.length;
switch (G__23335) {
case 1:
return cuerdas.core.repeat.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.repeat.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23333.length)].join('')));

}
});

cuerdas.core.repeat.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cuerdas.core.repeat.call(null,s,(1));
});

cuerdas.core.repeat.cljs$core$IFn$_invoke$arity$2 = (function (s,n){
if((s == null)){
return null;
} else {
return goog.string.repeat(s,n);
}
});

cuerdas.core.repeat.cljs$lang$maxFixedArity = 2;
/**
 * Takes a string and replaces newlines with a space.
 *   Multiple lines are replaced with a single space.
 */
cuerdas.core.strip_newlines = (function cuerdas$core$strip_newlines(s){
return cuerdas.core.replace.call(null,s,/(\r\n|\r|\n)+/," ");
});
/**
 * Splits a string on a separator a limited
 *   number of times. The separator can be a string
 *   or RegExp instance.
 */
cuerdas.core.split = (function cuerdas$core$split(var_args){
var args23340 = [];
var len__17505__auto___23343 = arguments.length;
var i__17506__auto___23344 = (0);
while(true){
if((i__17506__auto___23344 < len__17505__auto___23343)){
args23340.push((arguments[i__17506__auto___23344]));

var G__23345 = (i__17506__auto___23344 + (1));
i__17506__auto___23344 = G__23345;
continue;
} else {
}
break;
}

var G__23342 = args23340.length;
switch (G__23342) {
case 1:
return cuerdas.core.split.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cuerdas.core.split.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23340.length)].join('')));

}
});

cuerdas.core.split.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cuerdas.core.split.call(null,s,/\s/,null);
});

cuerdas.core.split.cljs$core$IFn$_invoke$arity$2 = (function (s,sep){
return cuerdas.core.split.call(null,s,sep,null);
});

cuerdas.core.split.cljs$core$IFn$_invoke$arity$3 = (function (s,sep,num){
if((s == null)){
return s;
} else {
if(cljs.core.regexp_QMARK_.call(null,sep)){
return clojure.string.split.call(null,s,sep,num);
} else {
return clojure.string.split.call(null,s,cljs.core.re_pattern.call(null,sep),num);

}
}
});

cuerdas.core.split.cljs$lang$maxFixedArity = 3;
/**
 * Return a list of the lines in the string.
 */
cuerdas.core.lines = (function cuerdas$core$lines(s){
return cuerdas.core.split.call(null,s,/\n|\r\n/);
});
/**
 * Returns a new string joining a list of strings with a newline char (\n).
 */
cuerdas.core.unlines = (function cuerdas$core$unlines(s){
if((s == null)){
return s;
} else {
return clojure.string.join.call(null,"\n",s);
}
});
/**
 * Split a string in a seq of chars.
 */
cuerdas.core.chars = (function cuerdas$core$chars(s){
if((s == null)){
return null;
} else {
return cljs.core.js__GT_clj.call(null,s.split(""));
}
});
/**
 * Extracts a section of a string and returns a new string.
 */
cuerdas.core.slice = (function cuerdas$core$slice(var_args){
var args23347 = [];
var len__17505__auto___23350 = arguments.length;
var i__17506__auto___23351 = (0);
while(true){
if((i__17506__auto___23351 < len__17505__auto___23350)){
args23347.push((arguments[i__17506__auto___23351]));

var G__23352 = (i__17506__auto___23351 + (1));
i__17506__auto___23351 = G__23352;
continue;
} else {
}
break;
}

var G__23349 = args23347.length;
switch (G__23349) {
case 2:
return cuerdas.core.slice.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cuerdas.core.slice.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23347.length)].join('')));

}
});

cuerdas.core.slice.cljs$core$IFn$_invoke$arity$2 = (function (s,begin){
if((s == null)){
return null;
} else {
return s.slice(begin);
}
});

cuerdas.core.slice.cljs$core$IFn$_invoke$arity$3 = (function (s,begin,end){
if((s == null)){
return null;
} else {
return s.slice(begin,end);
}
});

cuerdas.core.slice.cljs$lang$maxFixedArity = 3;
/**
 * Replaces all instance of match with replacement in s.
 */
cuerdas.core.replace = (function cuerdas$core$replace(s,match,replacement){
if((s == null)){
return null;
} else {
return s.replace(cuerdas.core.regexp.call(null,match,"g"),replacement);
}
});
/**
 * Replaces all instance of match with replacement in s.
 */
cuerdas.core.ireplace = (function cuerdas$core$ireplace(s,match,replacement){
if((s == null)){
return null;
} else {
return s.replace(cuerdas.core.regexp.call(null,match,"ig"),replacement);
}
});
/**
 * Replaces first instance of match with replacement in s.
 */
cuerdas.core.replace_first = (function cuerdas$core$replace_first(s,match,replacement){
if((s == null)){
return null;
} else {
return s.replace(cuerdas.core.regexp.call(null,match),replacement);
}
});
/**
 * Replaces first instance of match with replacement in s.
 */
cuerdas.core.ireplace_first = (function cuerdas$core$ireplace_first(s,match,replacement){
if((s == null)){
return null;
} else {
return s.replace(cuerdas.core.regexp.call(null,match,"i"),replacement);
}
});
/**
 * Removes whitespace or specified characters
 *   from both ends of string.
 */
cuerdas.core.trim = (function cuerdas$core$trim(var_args){
var args23354 = [];
var len__17505__auto___23357 = arguments.length;
var i__17506__auto___23358 = (0);
while(true){
if((i__17506__auto___23358 < len__17505__auto___23357)){
args23354.push((arguments[i__17506__auto___23358]));

var G__23359 = (i__17506__auto___23358 + (1));
i__17506__auto___23358 = G__23359;
continue;
} else {
}
break;
}

var G__23356 = args23354.length;
switch (G__23356) {
case 1:
return cuerdas.core.trim.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.trim.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23354.length)].join('')));

}
});

cuerdas.core.trim.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cuerdas.core.trim.call(null,s," ");
});

cuerdas.core.trim.cljs$core$IFn$_invoke$arity$2 = (function (s,chs){
if((s == null)){
return null;
} else {
var rxstr = [cljs.core.str("["),cljs.core.str(cuerdas.core.escape_regexp.call(null,chs)),cljs.core.str("]")].join('');
var rx = [cljs.core.str("^"),cljs.core.str(rxstr),cljs.core.str("+|"),cljs.core.str(rxstr),cljs.core.str("+$")].join('');
return cuerdas.core.replace.call(null,s,rx,"");
}
});

cuerdas.core.trim.cljs$lang$maxFixedArity = 2;
/**
 * Removes whitespace or specified characters
 *   from right side of string.
 */
cuerdas.core.rtrim = (function cuerdas$core$rtrim(var_args){
var args23361 = [];
var len__17505__auto___23364 = arguments.length;
var i__17506__auto___23365 = (0);
while(true){
if((i__17506__auto___23365 < len__17505__auto___23364)){
args23361.push((arguments[i__17506__auto___23365]));

var G__23366 = (i__17506__auto___23365 + (1));
i__17506__auto___23365 = G__23366;
continue;
} else {
}
break;
}

var G__23363 = args23361.length;
switch (G__23363) {
case 1:
return cuerdas.core.rtrim.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.rtrim.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23361.length)].join('')));

}
});

cuerdas.core.rtrim.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cuerdas.core.rtrim.call(null,s," ");
});

cuerdas.core.rtrim.cljs$core$IFn$_invoke$arity$2 = (function (s,chs){
if((s == null)){
return null;
} else {
var rxstr = [cljs.core.str("["),cljs.core.str(cuerdas.core.escape_regexp.call(null,chs)),cljs.core.str("]")].join('');
var rx = [cljs.core.str(rxstr),cljs.core.str("+$")].join('');
return cuerdas.core.replace.call(null,s,rx,"");
}
});

cuerdas.core.rtrim.cljs$lang$maxFixedArity = 2;
/**
 * Removes whitespace or specified characters
 *   from left side of string.
 */
cuerdas.core.ltrim = (function cuerdas$core$ltrim(var_args){
var args23368 = [];
var len__17505__auto___23371 = arguments.length;
var i__17506__auto___23372 = (0);
while(true){
if((i__17506__auto___23372 < len__17505__auto___23371)){
args23368.push((arguments[i__17506__auto___23372]));

var G__23373 = (i__17506__auto___23372 + (1));
i__17506__auto___23372 = G__23373;
continue;
} else {
}
break;
}

var G__23370 = args23368.length;
switch (G__23370) {
case 1:
return cuerdas.core.ltrim.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.ltrim.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23368.length)].join('')));

}
});

cuerdas.core.ltrim.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cuerdas.core.ltrim.call(null,s," ");
});

cuerdas.core.ltrim.cljs$core$IFn$_invoke$arity$2 = (function (s,chs){
if((s == null)){
return null;
} else {
var rxstr = [cljs.core.str("["),cljs.core.str(cuerdas.core.escape_regexp.call(null,chs)),cljs.core.str("]")].join('');
var rx = [cljs.core.str("^"),cljs.core.str(rxstr),cljs.core.str("+")].join('');
return cuerdas.core.replace.call(null,s,rx,"");
}
});

cuerdas.core.ltrim.cljs$lang$maxFixedArity = 2;
cuerdas.core.strip = cuerdas.core.trim;
cuerdas.core.rstrip = cuerdas.core.rtrim;
cuerdas.core.lstrip = cuerdas.core.ltrim;
/**
 * Strip prefix in more efficient way.
 */
cuerdas.core.strip_prefix = (function cuerdas$core$strip_prefix(s,prefix){
if(cljs.core.truth_(cuerdas.core.starts_with_QMARK_.call(null,s,prefix))){
return cuerdas.core.slice.call(null,s,cljs.core.count.call(null,prefix),cljs.core.count.call(null,s));
} else {
return s;
}
});
/**
 * Strip suffix in more efficient way.
 */
cuerdas.core.strip_suffix = (function cuerdas$core$strip_suffix(s,prefix){
if(cljs.core.truth_(cuerdas.core.ends_with_QMARK_.call(null,s,prefix))){
return cuerdas.core.slice.call(null,s,(0),(cljs.core.count.call(null,s) - cljs.core.count.call(null,prefix)));
} else {
return s;
}
});
/**
 * Truncates a string to a certain length and adds '...'
 *   if necessary.
 */
cuerdas.core.prune = (function cuerdas$core$prune(var_args){
var args23375 = [];
var len__17505__auto___23378 = arguments.length;
var i__17506__auto___23379 = (0);
while(true){
if((i__17506__auto___23379 < len__17505__auto___23378)){
args23375.push((arguments[i__17506__auto___23379]));

var G__23380 = (i__17506__auto___23379 + (1));
i__17506__auto___23379 = G__23380;
continue;
} else {
}
break;
}

var G__23377 = args23375.length;
switch (G__23377) {
case 2:
return cuerdas.core.prune.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cuerdas.core.prune.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23375.length)].join('')));

}
});

cuerdas.core.prune.cljs$core$IFn$_invoke$arity$2 = (function (s,num){
return cuerdas.core.prune.call(null,s,num,"...");
});

cuerdas.core.prune.cljs$core$IFn$_invoke$arity$3 = (function (s,num,subs){
if((cljs.core.count.call(null,s) < num)){
return s;
} else {
var tmpl = (function (c){
if(cljs.core.not_EQ_.call(null,cuerdas.core.upper.call(null,c),cuerdas.core.lower.call(null,c))){
return "A";
} else {
return " ";
}
});
var template = cuerdas.core.replace.call(null,cuerdas.core.slice.call(null,s,(0),(cljs.core.count.call(null,s) + (1))),/.(?=\W*\w*$)/,tmpl);
var template__$1 = (cljs.core.truth_(cuerdas.core.slice.call(null,template,(cljs.core.count.call(null,template) - (2))).match(/\w\w/))?cuerdas.core.replace_first.call(null,template,/\s*\S+$/,""):cuerdas.core.rtrim.call(null,cuerdas.core.slice.call(null,template,(0),(cljs.core.count.call(null,template) - (1)))));
if((cljs.core.count.call(null,[cljs.core.str(template__$1),cljs.core.str(subs)].join('')) > cljs.core.count.call(null,s))){
return s;
} else {
return [cljs.core.str(cuerdas.core.slice.call(null,s,(0),cljs.core.count.call(null,template__$1))),cljs.core.str(subs)].join('');
}
}
});

cuerdas.core.prune.cljs$lang$maxFixedArity = 3;
/**
 * Joins strings together with given separator.
 */
cuerdas.core.join = (function cuerdas$core$join(var_args){
var args23382 = [];
var len__17505__auto___23385 = arguments.length;
var i__17506__auto___23386 = (0);
while(true){
if((i__17506__auto___23386 < len__17505__auto___23385)){
args23382.push((arguments[i__17506__auto___23386]));

var G__23387 = (i__17506__auto___23386 + (1));
i__17506__auto___23386 = G__23387;
continue;
} else {
}
break;
}

var G__23384 = args23382.length;
switch (G__23384) {
case 1:
return cuerdas.core.join.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.join.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23382.length)].join('')));

}
});

cuerdas.core.join.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.apply.call(null,cljs.core.str,coll);
});

cuerdas.core.join.cljs$core$IFn$_invoke$arity$2 = (function (separator,coll){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,separator,coll));
});

cuerdas.core.join.cljs$lang$maxFixedArity = 2;
/**
 * Surround a string with another string.
 */
cuerdas.core.surround = (function cuerdas$core$surround(s,wrap){
if((s == null)){
return null;
} else {
return cuerdas.core.join.call(null,"",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [wrap,s,wrap], null));
}
});
/**
 * Unsurround a string surrounded by another.
 */
cuerdas.core.unsurround = (function cuerdas$core$unsurround(s,surrounding){
var length = cljs.core.count.call(null,surrounding);
var fstr = cuerdas.core.slice.call(null,s,(0),length);
var slength = cljs.core.count.call(null,s);
var rightend = (slength - length);
var lstr = cuerdas.core.slice.call(null,s,rightend,slength);
if((cljs.core._EQ_.call(null,fstr,surrounding)) && (cljs.core._EQ_.call(null,lstr,surrounding))){
return cuerdas.core.slice.call(null,s,length,rightend);
} else {
return s;
}
});
/**
 * Quotes a string.
 */
cuerdas.core.quote = (function cuerdas$core$quote(var_args){
var args23389 = [];
var len__17505__auto___23392 = arguments.length;
var i__17506__auto___23393 = (0);
while(true){
if((i__17506__auto___23393 < len__17505__auto___23392)){
args23389.push((arguments[i__17506__auto___23393]));

var G__23394 = (i__17506__auto___23393 + (1));
i__17506__auto___23393 = G__23394;
continue;
} else {
}
break;
}

var G__23391 = args23389.length;
switch (G__23391) {
case 1:
return cuerdas.core.quote.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.quote.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23389.length)].join('')));

}
});

cuerdas.core.quote.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cuerdas.core.surround.call(null,s,"\"");
});

cuerdas.core.quote.cljs$core$IFn$_invoke$arity$2 = (function (s,qchar){
return cuerdas.core.surround.call(null,s,qchar);
});

cuerdas.core.quote.cljs$lang$maxFixedArity = 2;
/**
 * Unquote a string.
 */
cuerdas.core.unquote = (function cuerdas$core$unquote(var_args){
var args23396 = [];
var len__17505__auto___23399 = arguments.length;
var i__17506__auto___23400 = (0);
while(true){
if((i__17506__auto___23400 < len__17505__auto___23399)){
args23396.push((arguments[i__17506__auto___23400]));

var G__23401 = (i__17506__auto___23400 + (1));
i__17506__auto___23400 = G__23401;
continue;
} else {
}
break;
}

var G__23398 = args23396.length;
switch (G__23398) {
case 1:
return cuerdas.core.unquote.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.unquote.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23396.length)].join('')));

}
});

cuerdas.core.unquote.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cuerdas.core.unsurround.call(null,s,"\"");
});

cuerdas.core.unquote.cljs$core$IFn$_invoke$arity$2 = (function (s,qchar){
return cuerdas.core.unsurround.call(null,s,qchar);
});

cuerdas.core.unquote.cljs$lang$maxFixedArity = 2;
cuerdas.core.dasherize;
/**
 * Transform text into a URL slug.
 */
cuerdas.core.slugify = (function cuerdas$core$slugify(s){
var from = "\u0105\u00E0\u00E1\u00E4\u00E2\u00E3\u00E5\u00E6\u0103\u0107\u010D\u0109\u0119\u00E8\u00E9\u00EB\u00EA\u011D\u0125\u00EC\u00ED\u00EF\u00EE\u0135\u0142\u013E\u0144\u0148\u00F2\u00F3\u00F6\u0151\u00F4\u00F5\u00F0\u00F8\u015B\u0219\u0161\u015D\u0165\u021B\u016D\u00F9\u00FA\u00FC\u0171\u00FB\u00F1\u00FF\u00FD\u00E7\u017C\u017A\u017E";
var to = "aaaaaaaaaccceeeeeghiiiijllnnoooooooossssttuuuuuunyyczzz";
var regex = [cljs.core.str("["),cljs.core.str(cuerdas.core.escape_regexp.call(null,from)),cljs.core.str("]")].join('');
return cuerdas.core.dasherize.call(null,cuerdas.core.replace.call(null,cuerdas.core.replace.call(null,cuerdas.core.lower.call(null,s),regex,((function (from,to,regex){
return (function (c){
var index = from.indexOf(c);
var res = to.charAt(index);
if(cljs.core.truth_(cuerdas.core.empty_QMARK_.call(null,res))){
return "-";
} else {
return res;
}
});})(from,to,regex))
),/[^\w\s-]/,""));
});
cuerdas.core.strip_tags_impl = (function cuerdas$core$strip_tags_impl(s,tags,mappings){
var kwdize = cljs.core.comp.call(null,cljs.core.keyword,cuerdas.core.lower,cljs.core.name);
var tags__$1 = (((tags == null))?tags:((typeof tags === 'string')?cljs.core.PersistentHashSet.fromArray([kwdize.call(null,tags)],true):((cljs.core.sequential_QMARK_.call(null,tags))?cljs.core.set.call(null,cljs.core.map.call(null,kwdize,tags)):null)));
var rx = cljs.core.re_pattern.call(null,"<\\/?([^<>]*)>");
var replacer = (((tags__$1 == null))?((function (kwdize,tags__$1,rx){
return (function (match,tag){
var tag__$1 = kwdize.call(null,tag);
return cljs.core.get.call(null,mappings,tag__$1,"");
});})(kwdize,tags__$1,rx))
:((function (kwdize,tags__$1,rx){
return (function (match,tag){
var tag__$1 = kwdize.call(null,tag);
if(cljs.core.truth_(tags__$1.call(null,tag__$1))){
return cljs.core.get.call(null,mappings,tag__$1,"");
} else {
return match;
}
});})(kwdize,tags__$1,rx))
);
return cuerdas.core.replace.call(null,s,rx,replacer);
});
/**
 * Remove html tags from string.
 */
cuerdas.core.strip_tags = (function cuerdas$core$strip_tags(var_args){
var args23403 = [];
var len__17505__auto___23406 = arguments.length;
var i__17506__auto___23407 = (0);
while(true){
if((i__17506__auto___23407 < len__17505__auto___23406)){
args23403.push((arguments[i__17506__auto___23407]));

var G__23408 = (i__17506__auto___23407 + (1));
i__17506__auto___23407 = G__23408;
continue;
} else {
}
break;
}

var G__23405 = args23403.length;
switch (G__23405) {
case 1:
return cuerdas.core.strip_tags.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.strip_tags.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cuerdas.core.strip_tags.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23403.length)].join('')));

}
});

cuerdas.core.strip_tags.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cuerdas.core.strip_tags_impl.call(null,s,null,cljs.core.PersistentArrayMap.EMPTY);
});

cuerdas.core.strip_tags.cljs$core$IFn$_invoke$arity$2 = (function (s,tags){
if(cljs.core.map_QMARK_.call(null,tags)){
return cuerdas.core.strip_tags_impl.call(null,s,null,tags);
} else {
return cuerdas.core.strip_tags_impl.call(null,s,tags,cljs.core.PersistentArrayMap.EMPTY);
}
});

cuerdas.core.strip_tags.cljs$core$IFn$_invoke$arity$3 = (function (s,tags,mapping){
return cuerdas.core.strip_tags_impl.call(null,s,tags,mapping);
});

cuerdas.core.strip_tags.cljs$lang$maxFixedArity = 3;
/**
 * Trim and replace multiple spaces with
 *   a single space.
 */
cuerdas.core.clean = (function cuerdas$core$clean(s){
return cuerdas.core.replace.call(null,cuerdas.core.trim.call(null,s),/\s+/," ");
});
cuerdas.core.html_escape_chars = new cljs.core.PersistentArrayMap(null, 5, ["lt","<","gt",">","quot","\"","amp","&","apos","'"], null);
cuerdas.core.reversed_html_escape_chars = clojure.set.map_invert.call(null,cuerdas.core.html_escape_chars);
cuerdas.core.escape_html = (function cuerdas$core$escape_html(s){

var escapechars = cljs.core.assoc.call(null,cuerdas.core.reversed_html_escape_chars,"'","#39");
var rx = cljs.core.re_pattern.call(null,"[&<>\"']");
return cuerdas.core.replace.call(null,s,rx,((function (escapechars,rx){
return (function (x){
return [cljs.core.str("&"),cljs.core.str(cljs.core.get.call(null,escapechars,x)),cljs.core.str(";")].join('');
});})(escapechars,rx))
);
});
/**
 * Converts entity characters to HTML equivalents.
 */
cuerdas.core.unescape_html = (function cuerdas$core$unescape_html(s){
return cuerdas.core.replace.call(null,s,/\&(\w+);/,(function (x,y){
if(cljs.core.contains_QMARK_.call(null,cuerdas.core.html_escape_chars,y)){
return cljs.core.get.call(null,cuerdas.core.html_escape_chars,y);
} else {
return y;

}
}));
});
/**
 * Return string reversed.
 */
cuerdas.core.reverse = (function cuerdas$core$reverse(s){
if((s == null)){
return null;
} else {
var cs = s.split("");
var cs__$1 = cs.reverse();
return cs__$1.join("");
}
});
cuerdas.core.parse_number_impl = (function cuerdas$core$parse_number_impl(source){
var or__16447__auto__ = (source * (1));
if(cljs.core.truth_(or__16447__auto__)){
return or__16447__auto__;
} else {
return (0);
}
});
/**
 * General purpose function for parse number like
 *   string to number. It works with both: integers
 *   and floats.
 */
cuerdas.core.parse_number = (function cuerdas$core$parse_number(var_args){
var args23410 = [];
var len__17505__auto___23413 = arguments.length;
var i__17506__auto___23414 = (0);
while(true){
if((i__17506__auto___23414 < len__17505__auto___23413)){
args23410.push((arguments[i__17506__auto___23414]));

var G__23415 = (i__17506__auto___23414 + (1));
i__17506__auto___23414 = G__23415;
continue;
} else {
}
break;
}

var G__23412 = args23410.length;
switch (G__23412) {
case 1:
return cuerdas.core.parse_number.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.parse_number.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23410.length)].join('')));

}
});

cuerdas.core.parse_number.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cuerdas.core.parse_number.call(null,s,(0));
});

cuerdas.core.parse_number.cljs$core$IFn$_invoke$arity$2 = (function (s,precision){
if((s == null)){
return (0);
} else {
var s__$1 = cuerdas.core.trim.call(null,s);
var rx = /^-?\d+(?:\.\d+)?$/;
if(cljs.core.truth_(s__$1.match(rx))){
return cuerdas.core.parse_number_impl.call(null,cuerdas.core.parse_number_impl.call(null,s__$1).toFixed(precision));
} else {
return NaN;
}
}
});

cuerdas.core.parse_number.cljs$lang$maxFixedArity = 2;
/**
 * Return the float value, wraps parseFloat.
 */
cuerdas.core.parse_float = (function cuerdas$core$parse_float(var_args){
var args23417 = [];
var len__17505__auto___23420 = arguments.length;
var i__17506__auto___23421 = (0);
while(true){
if((i__17506__auto___23421 < len__17505__auto___23420)){
args23417.push((arguments[i__17506__auto___23421]));

var G__23422 = (i__17506__auto___23421 + (1));
i__17506__auto___23421 = G__23422;
continue;
} else {
}
break;
}

var G__23419 = args23417.length;
switch (G__23419) {
case 1:
return cuerdas.core.parse_float.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.parse_float.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23417.length)].join('')));

}
});

cuerdas.core.parse_float.cljs$core$IFn$_invoke$arity$1 = (function (s){
return parseFloat(s);
});

cuerdas.core.parse_float.cljs$core$IFn$_invoke$arity$2 = (function (s,precision){
if((precision == null)){
return parseFloat(s);
} else {
return parseFloat(parseFloat(s).toFixed(precision));
}
});

cuerdas.core.parse_float.cljs$lang$maxFixedArity = 2;
/**
 * Return the number value in integer form.
 */
cuerdas.core.parse_int = (function cuerdas$core$parse_int(s){
var rx = cuerdas.core.regexp.call(null,"^\\s*-?0x","i");
if(cljs.core.truth_(rx.test(s))){
return parseInt(s,(16));
} else {
return parseInt(s,(10));
}
});
/**
 * Simple string interpolation.
 */
cuerdas.core.format = (function cuerdas$core$format(var_args){
var args__17512__auto__ = [];
var len__17505__auto___23426 = arguments.length;
var i__17506__auto___23427 = (0);
while(true){
if((i__17506__auto___23427 < len__17505__auto___23426)){
args__17512__auto__.push((arguments[i__17506__auto___23427]));

var G__23428 = (i__17506__auto___23427 + (1));
i__17506__auto___23427 = G__23428;
continue;
} else {
}
break;
}

var argseq__17513__auto__ = ((((1) < args__17512__auto__.length))?(new cljs.core.IndexedSeq(args__17512__auto__.slice((1)),(0))):null);
return cuerdas.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17513__auto__);
});

cuerdas.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (s,args){
if((cljs.core._EQ_.call(null,cljs.core.count.call(null,args),(1))) && (cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))){
var params = cljs.core.clj__GT_js.call(null,cljs.core.first.call(null,args));
return cuerdas.core.replace.call(null,s,/%\(\w+\)s/,((function (params){
return (function (match){
return [cljs.core.str((params[cuerdas.core.slice.call(null,match,(2),(-2))]))].join('');
});})(params))
);
} else {
var params = cljs.core.clj__GT_js.call(null,args);
return cuerdas.core.replace.call(null,s,cuerdas.core.regexp.call(null,"%s","g"),((function (params){
return (function (_){
return [cljs.core.str(params.shift())].join('');
});})(params))
);
}
});

cuerdas.core.format.cljs$lang$maxFixedArity = (1);

cuerdas.core.format.cljs$lang$applyTo = (function (seq23424){
var G__23425 = cljs.core.first.call(null,seq23424);
var seq23424__$1 = cljs.core.next.call(null,seq23424);
return cuerdas.core.format.cljs$core$IFn$_invoke$arity$variadic(G__23425,seq23424__$1);
});
/**
 * Pads the str with characters until the total string
 *   length is equal to the passed length parameter. By
 *   default, pads on the left with the space char.
 */
cuerdas.core.pad = (function cuerdas$core$pad(var_args){
var args__17512__auto__ = [];
var len__17505__auto___23438 = arguments.length;
var i__17506__auto___23439 = (0);
while(true){
if((i__17506__auto___23439 < len__17505__auto___23438)){
args__17512__auto__.push((arguments[i__17506__auto___23439]));

var G__23440 = (i__17506__auto___23439 + (1));
i__17506__auto___23439 = G__23440;
continue;
} else {
}
break;
}

var argseq__17513__auto__ = ((((1) < args__17512__auto__.length))?(new cljs.core.IndexedSeq(args__17512__auto__.slice((1)),(0))):null);
return cuerdas.core.pad.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17513__auto__);
});

cuerdas.core.pad.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__23431){
var vec__23432 = p__23431;
var map__23433 = cljs.core.nth.call(null,vec__23432,(0),null);
var map__23433__$1 = ((((!((map__23433 == null)))?((((map__23433.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23433.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23433):map__23433);
var length = cljs.core.get.call(null,map__23433__$1,new cljs.core.Keyword(null,"length","length",588987862),(0));
var padding = cljs.core.get.call(null,map__23433__$1,new cljs.core.Keyword(null,"padding","padding",1660304693)," ");
var type = cljs.core.get.call(null,map__23433__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"left","left",-399115937));
if((s == null)){
return null;
} else {
var padding__$1 = (padding[(0)]);
var padlen = (length - cljs.core.count.call(null,s));
var pred__23435 = cljs.core._EQ_;
var expr__23436 = type;
if(cljs.core.truth_(pred__23435.call(null,new cljs.core.Keyword(null,"right","right",-452581833),expr__23436))){
return [cljs.core.str(s),cljs.core.str(cuerdas.core.repeat.call(null,padding__$1,padlen))].join('');
} else {
if(cljs.core.truth_(pred__23435.call(null,new cljs.core.Keyword(null,"both","both",-393648840),expr__23436))){
var first = cuerdas.core.repeat.call(null,padding__$1,Math.ceil((padlen / (2))));
var second = cuerdas.core.repeat.call(null,padding__$1,Math.floor((padlen / (2))));
return [cljs.core.str(first),cljs.core.str(s),cljs.core.str(second)].join('');
} else {
if(cljs.core.truth_(pred__23435.call(null,new cljs.core.Keyword(null,"left","left",-399115937),expr__23436))){
return [cljs.core.str(cuerdas.core.repeat.call(null,padding__$1,padlen)),cljs.core.str(s)].join('');
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__23436)].join('')));
}
}
}
}
});

cuerdas.core.pad.cljs$lang$maxFixedArity = (1);

cuerdas.core.pad.cljs$lang$applyTo = (function (seq23429){
var G__23430 = cljs.core.first.call(null,seq23429);
var seq23429__$1 = cljs.core.next.call(null,seq23429);
return cuerdas.core.pad.cljs$core$IFn$_invoke$arity$variadic(G__23430,seq23429__$1);
});
/**
 * Converts first letter of the string to uppercase.
 */
cuerdas.core.capitalize = (function cuerdas$core$capitalize(s){
if((s == null)){
return null;
} else {
return [cljs.core.str(cuerdas.core.upper.call(null,s.charAt((0)))),cljs.core.str(cuerdas.core.slice.call(null,s,(1)))].join('');
}
});
/**
 * Converts a string from selector-case to camelCase.
 */
cuerdas.core.camelize = (function cuerdas$core$camelize(s){
var G__23442 = s;
var G__23442__$1 = (((G__23442 == null))?null:cuerdas.core.trim.call(null,G__23442));
var G__23442__$2 = (((G__23442__$1 == null))?null:cuerdas.core.replace.call(null,G__23442__$1,cuerdas.core.regexp.call(null,/[-_\s]+(.)?/,"g"),((function (G__23442,G__23442__$1){
return (function (match,c){
if(cljs.core.truth_(c)){
return cuerdas.core.upper.call(null,c);
} else {
return "";
}
});})(G__23442,G__23442__$1))
));
return G__23442__$2;
});
/**
 * Converts a underscored or camelized string
 *   into an dasherized one.
 */
cuerdas.core.dasherize = (function cuerdas$core$dasherize(s){
return cuerdas.core.lower.call(null,cuerdas.core.strip_prefix.call(null,cuerdas.core.replace.call(null,cuerdas.core.replace.call(null,cuerdas.core.trim.call(null,s),/([A-Z]+)/,"-$1"),/[-_\s]+/,"-"),"-"));
});
/**
 * Converts a camelized or dasherized string
 *   into an underscored one.
 */
cuerdas.core.underscored = (function cuerdas$core$underscored(s){
var G__23444 = s;
var G__23444__$1 = (((G__23444 == null))?null:cuerdas.core.trim.call(null,G__23444));
var G__23444__$2 = (((G__23444__$1 == null))?null:cuerdas.core.replace.call(null,G__23444__$1,cuerdas.core.regexp.call(null,/([a-z\d])([A-Z]+)/,"g"),"$1_$2"));
var G__23444__$3 = (((G__23444__$2 == null))?null:cuerdas.core.replace.call(null,G__23444__$2,cuerdas.core.regexp.call(null,/[-\s]+/,"g"),"_"));
var G__23444__$4 = (((G__23444__$3 == null))?null:cuerdas.core.lower.call(null,G__23444__$3));
return G__23444__$4;
});
/**
 * Converts an underscored, camelized, or
 *   dasherized string into a humanized one.
 */
cuerdas.core.humanize = (function cuerdas$core$humanize(s){
var G__23446 = s;
var G__23446__$1 = (((G__23446 == null))?null:cuerdas.core.underscored.call(null,G__23446));
var G__23446__$2 = (((G__23446__$1 == null))?null:cuerdas.core.replace.call(null,G__23446__$1,/_id$/,""));
var G__23446__$3 = (((G__23446__$2 == null))?null:cuerdas.core.replace.call(null,G__23446__$2,cuerdas.core.regexp.call(null,"_","g")," "));
var G__23446__$4 = (((G__23446__$3 == null))?null:cuerdas.core.capitalize.call(null,G__23446__$3));
return G__23446__$4;
});
/**
 * Converts a string into TitleCase.
 */
cuerdas.core.titleize = (function cuerdas$core$titleize(var_args){
var args23447 = [];
var len__17505__auto___23450 = arguments.length;
var i__17506__auto___23451 = (0);
while(true){
if((i__17506__auto___23451 < len__17505__auto___23450)){
args23447.push((arguments[i__17506__auto___23451]));

var G__23452 = (i__17506__auto___23451 + (1));
i__17506__auto___23451 = G__23452;
continue;
} else {
}
break;
}

var G__23449 = args23447.length;
switch (G__23449) {
case 1:
return cuerdas.core.titleize.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.titleize.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23447.length)].join('')));

}
});

cuerdas.core.titleize.cljs$core$IFn$_invoke$arity$1 = (function (s){
if((s == null)){
return null;
} else {
return goog.string.toTitleCase(s);
}
});

cuerdas.core.titleize.cljs$core$IFn$_invoke$arity$2 = (function (s,delimiters){
if((s == null)){
return null;
} else {
return goog.string.toTitleCase(s,delimiters);
}
});

cuerdas.core.titleize.cljs$lang$maxFixedArity = 2;
/**
 * Converts string to camelized class name. First letter is always upper case.
 */
cuerdas.core.classify = (function cuerdas$core$classify(s){
var G__23455 = s;
var G__23455__$1 = (((G__23455 == null))?null:[cljs.core.str(G__23455)].join(''));
var G__23455__$2 = (((G__23455__$1 == null))?null:cuerdas.core.replace.call(null,G__23455__$1,/[\W_]/," "));
var G__23455__$3 = (((G__23455__$2 == null))?null:cuerdas.core.camelize.call(null,G__23455__$2));
var G__23455__$4 = (((G__23455__$3 == null))?null:cuerdas.core.replace.call(null,G__23455__$3,/\s/,""));
var G__23455__$5 = (((G__23455__$4 == null))?null:cuerdas.core.capitalize.call(null,G__23455__$4));
return G__23455__$5;
});
/**
 * Find string that is nested in between two strings. Return first match
 */
cuerdas.core.substr_between = (function cuerdas$core$substr_between(s,prefix,suffix){
if((s == null)){
return null;
} else {
if((prefix == null)){
return null;
} else {
if((suffix == null)){
return null;
} else {
if(cljs.core.not.call(null,cuerdas.core.contains_QMARK_.call(null,s,prefix))){
return null;
} else {
if(cljs.core.not.call(null,cuerdas.core.contains_QMARK_.call(null,s,suffix))){
return null;
} else {
var G__23457 = s;
var G__23457__$1 = (((G__23457 == null))?null:cuerdas.core.split.call(null,G__23457,prefix));
var G__23457__$2 = (((G__23457__$1 == null))?null:cljs.core.second.call(null,G__23457__$1));
var G__23457__$3 = (((G__23457__$2 == null))?null:cuerdas.core.split.call(null,G__23457__$2,suffix));
var G__23457__$4 = (((G__23457__$3 == null))?null:cljs.core.first.call(null,G__23457__$3));
return G__23457__$4;

}
}
}
}
}
});

//# sourceMappingURL=core.js.map