// Compiled by ClojureScript 0.0-2322
goog.provide('stratus.core');
goog.require('cljs.core');
goog.require('stratus.input');
goog.require('stratus.input');
goog.require('stratus.components');
goog.require('stratus.components');
goog.require('om_tools.core');
goog.require('om_tools.dom');
goog.require('om_tools.dom');
goog.require('om.core');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
stratus.core.set_input_focus = (function set_input_focus(){return document.getElementById("inputField").focus();
});
om.core.root.call(null,stratus.components.article,stratus.components.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("stratus")], null));
om.core.root.call(null,stratus.components.input,stratus.components.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("input")], null));
stratus.core.set_input_focus.call(null);
document.addEventListener("click",(function (event){return setTimeout(stratus.core.set_input_focus,(10));
}));

//# sourceMappingURL=core.js.map