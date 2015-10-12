// Compiled by ClojureScript 1.7.122 {}
goog.provide('utils.core');
goog.require('cljs.core');
utils.core.clj__GT_json = (function utils$core$clj__GT_json(data_structure){
return JSON.stringify(cljs.core.clj__GT_js.call(null,data_structure),undefined,(2));
});
utils.core.json__GT_clj = (function utils$core$json__GT_clj(string){
return cljs.core.js__GT_clj.call(null,JSON.parse(string),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});

//# sourceMappingURL=core.js.map