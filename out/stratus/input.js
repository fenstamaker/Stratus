// Compiled by ClojureScript 0.0-2322
goog.provide('stratus.input');
goog.require('cljs.core');
goog.require('om_tools.dom');
goog.require('om_tools.dom');
goog.require('om.core');
goog.require('om.core');
stratus.input.backspace_QMARK_ = (function backspace_QMARK_(event){return cljs.core._EQ_.call(null,event.keyCode,(8));
});
stratus.input.delete_QMARK_ = (function delete_QMARK_(event){return cljs.core._EQ_.call(null,event.keyCode,(46));
});
stratus.input.enter_QMARK_ = (function enter_QMARK_(event){return cljs.core._EQ_.call(null,event.keyCode,(13));
});
stratus.input.last_index = (function last_index(coll){return (cljs.core.count.call(null,coll) - (1));
});
stratus.input.maintain_focus = (function maintain_focus(){return cljs.core.List.EMPTY;
});
stratus.input.replace_last = (function replace_last(coll,element){return cljs.core.assoc.call(null,coll,stratus.input.last_index.call(null,coll),element);
});
stratus.input.remove_last = (function remove_last(coll){return cljs.core.reduce.call(null,cljs.core.str,cljs.core.drop_last.call(null,coll));
});
stratus.input.backspace_event = (function backspace_event(event,app_state){var last_p = cljs.core.last.call(null,new cljs.core.Keyword(null,"article","article",-21685045).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state)));var new_p = stratus.input.remove_last.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,new cljs.core.Keyword(null,"article","article",-21685045).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state)))));if(cljs.core.empty_QMARK_.call(null,new_p))
{return cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"article","article",-21685045)], null),cljs.core.comp.call(null,((function (last_p,new_p){
return (function (p1__10395_SHARP_){return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,p1__10395_SHARP_);
});})(last_p,new_p))
,cljs.core.drop_last));
} else
{return cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"article","article",-21685045)], null),stratus.input.replace_last,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(last_p),new cljs.core.Keyword(null,"text","text",-1790561697),new_p], null));
}
});
stratus.input.enter_event = (function enter_event(event,app_state){event.preventDefault();
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"article","article",-21685045)], null),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),""], null));
});
stratus.input.handle_special_input = (function handle_special_input(app_state,event,owner){if(stratus.input.delete_QMARK_.call(null,event))
{return null;
} else
{if(stratus.input.backspace_QMARK_.call(null,event))
{return stratus.input.backspace_event.call(null,event,app_state);
} else
{if(stratus.input.enter_QMARK_.call(null,event))
{return stratus.input.enter_event.call(null,event,app_state);
} else
{return null;
}
}
}
});
stratus.input.handle_text_input = (function handle_text_input(app_state,event,owner){var last_p = cljs.core.last.call(null,new cljs.core.Keyword(null,"article","article",-21685045).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state)));var new_p = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(last_p))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(event.target.value));cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"article","article",-21685045)], null),stratus.input.replace_last,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(last_p),new cljs.core.Keyword(null,"text","text",-1790561697),new_p], null));
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"text","text",-1790561697),"");
});

//# sourceMappingURL=input.js.map