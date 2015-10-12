// Compiled by ClojureScript 1.7.122 {}
goog.provide('ui.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('ui.menu');
ui.core.viewport_component = (function ui$core$viewport_component(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.viewport","div.viewport",-1137850655),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Viewport"], null)], null);
});
ui.core.chrome_component = (function ui$core$chrome_component(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.menu.menu_component], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.core.viewport_component], null)], null);
});
ui.core.render_core = (function ui$core$render_core(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.core.chrome_component], null),document.body);
});

//# sourceMappingURL=core.js.map