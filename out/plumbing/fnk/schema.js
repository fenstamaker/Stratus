// Compiled by ClojureScript 0.0-2322
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__5398__5399__auto__){var G__10539 = p1__5398__5399__auto__;if(G__10539)
{var bit__4210__auto__ = null;if(cljs.core.truth_((function (){var or__3560__auto__ = bit__4210__auto__;if(cljs.core.truth_(or__3560__auto__))
{return or__3560__auto__;
} else
{return G__10539.schema$core$Schema$;
}
})()))
{return true;
} else
{if((!G__10539.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__10539);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__10539);
}
})], null));
plumbing.fnk.schema.InputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.eq.call(null,schema.core.Keyword),schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.OutputSchema = plumbing.fnk.schema.Schema;
plumbing.fnk.schema.IOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.OutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
plumbing.fnk.schema.GraphInputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.MapOutputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.GraphIOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphInputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
/**
* Like (assert (distinct? things)) but with a more helpful error message.
*/
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__10540_SHARP_){return (cljs.core.val.call(null,p1__10540_SHARP_) > (1));
}),cljs.core.frequencies.call(null,things)));if(cljs.core.empty_QMARK_.call(null,repeated_things))
{return null;
} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Got repeated items (expected distinct): %s",repeated_things)));
}
});
/**
* Like (get m k), but throws if k is not present in m.
*/
plumbing.fnk.schema.safe_get = (function safe_get(m,k,key_path){if(cljs.core.map_QMARK_.call(null,m))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Expected a map at key-path %s, got type %s",key_path,schema.utils.type_of.call(null,m))));
}
var vec__10542 = cljs.core.find.call(null,m,k);var _ = cljs.core.nth.call(null,vec__10542,(0),null);var v = cljs.core.nth.call(null,vec__10542,(1),null);var p = vec__10542;if(cljs.core.truth_(p))
{} else
{throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.keys.call(null,m)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"missing-key","missing-key",1259209562),new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"map","map",1371690461),m], null));
}
return v;
});
plumbing.fnk.schema.non_map_union = (function non_map_union(s1,s2){if(cljs.core._EQ_.call(null,s1,s2))
{return s1;
} else
{if(cljs.core._EQ_.call(null,s1,schema.core.Any))
{return s2;
} else
{if(cljs.core._EQ_.call(null,s2,schema.core.Any))
{return s1;
} else
{return schema.core.both.call(null,s1,s2);

}
}
}
});
/**
* Return a difference of schmas s1 and s2, where one is not a map.
* Punt for now, assuming s2 always satisfies s1.
*/
plumbing.fnk.schema.non_map_diff = (function non_map_diff(s1,s2){return null;
});
plumbing.fnk.schema.map_schema_QMARK_ = (function map_schema_QMARK_(m){return ((m instanceof cljs.core.PersistentArrayMap)) || ((m instanceof cljs.core.PersistentHashMap));
});
var ufv___10548 = schema.utils.use_fn_validation;var output_schema10543_10549 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));var input_schema10544_10550 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);var input_checker10545_10551 = schema.core.checker.call(null,input_schema10544_10550);var output_checker10546_10552 = schema.core.checker.call(null,output_schema10543_10549);/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___10548,output_schema10543_10549,input_schema10544_10550,input_checker10545_10551,output_checker10546_10552){
return (function unwrap_schema_form_key(G__10547){var validate__5368__auto__ = ufv___10548.get_cell();if(cljs.core.truth_(validate__5368__auto__))
{var args__5369__auto___10553 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__10547], null);var temp__4126__auto___10554 = input_checker10545_10551.call(null,args__5369__auto___10553);if(cljs.core.truth_(temp__4126__auto___10554))
{var error__5370__auto___10555 = temp__4126__auto___10554;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__5370__auto___10555)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema10544_10550,new cljs.core.Keyword(null,"value","value",305978217),args__5369__auto___10553,new cljs.core.Keyword(null,"error","error",-978969032),error__5370__auto___10555], null));
} else
{}
} else
{}
var o__5371__auto__ = (function (){var k = G__10547;while(true){
if(schema.core.specific_key_QMARK_.call(null,k))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key.call(null,k),schema.core.required_key_QMARK_.call(null,k)], null);
} else
{if((cljs.core.sequential_QMARK_.call(null,k)) && (!(cljs.core.vector_QMARK_.call(null,k))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,k),(2))) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,k),new cljs.core.Symbol("schema.core","optional-key","schema.core/optional-key",-170069547,null))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,k),false], null);
} else
{return null;
}
}
break;
}
})();if(cljs.core.truth_(validate__5368__auto__))
{var temp__4126__auto___10556 = output_checker10546_10552.call(null,o__5371__auto__);if(cljs.core.truth_(temp__4126__auto___10556))
{var error__5370__auto___10557 = temp__4126__auto___10556;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__5370__auto___10557)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema10543_10549,new cljs.core.Keyword(null,"value","value",305978217),o__5371__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5370__auto___10557], null));
} else
{}
} else
{}
return o__5371__auto__;
});})(ufv___10548,output_schema10543_10549,input_schema10544_10550,input_checker10545_10551,output_checker10546_10552))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema10543_10549,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema10544_10550], null)));
var ufv___10563 = schema.utils.use_fn_validation;var output_schema10558_10564 = schema.core.Any;var input_schema10559_10565 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker10560_10566 = schema.core.checker.call(null,input_schema10559_10565);var output_checker10561_10567 = schema.core.checker.call(null,output_schema10558_10564);/**
* Inputs: [s]
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___10563,output_schema10558_10564,input_schema10559_10565,input_checker10560_10566,output_checker10561_10567){
return (function explicit_schema_key_map(G__10562){var validate__5368__auto__ = ufv___10563.get_cell();if(cljs.core.truth_(validate__5368__auto__))
{var args__5369__auto___10568 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__10562], null);var temp__4126__auto___10569 = input_checker10560_10566.call(null,args__5369__auto___10568);if(cljs.core.truth_(temp__4126__auto___10569))
{var error__5370__auto___10570 = temp__4126__auto___10569;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__5370__auto___10570)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema10559_10565,new cljs.core.Keyword(null,"value","value",305978217),args__5369__auto___10568,new cljs.core.Keyword(null,"error","error",-978969032),error__5370__auto___10570], null));
} else
{}
} else
{}
var o__5371__auto__ = (function (){var s = G__10562;while(true){
new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();if(cljs.core.truth_(validate__5368__auto__))
{var temp__4126__auto___10571 = output_checker10561_10567.call(null,o__5371__auto__);if(cljs.core.truth_(temp__4126__auto___10571))
{var error__5370__auto___10572 = temp__4126__auto___10571;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__5370__auto___10572)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema10558_10564,new cljs.core.Keyword(null,"value","value",305978217),o__5371__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5370__auto___10572], null));
} else
{}
} else
{}
return o__5371__auto__;
});})(ufv___10563,output_schema10558_10564,input_schema10559_10565,input_checker10560_10566,output_checker10561_10567))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema10558_10564,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema10559_10565], null)));
var ufv___10578 = schema.utils.use_fn_validation;var output_schema10573_10579 = schema.core.Any;var input_schema10574_10580 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker10575_10581 = schema.core.checker.call(null,input_schema10574_10580);var output_checker10576_10582 = schema.core.checker.call(null,output_schema10573_10579);/**
* Inputs: [s :- {s/Keyword s/Bool}]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___10578,output_schema10573_10579,input_schema10574_10580,input_checker10575_10581,output_checker10576_10582){
return (function split_schema_keys(G__10577){var validate__5368__auto__ = ufv___10578.get_cell();if(cljs.core.truth_(validate__5368__auto__))
{var args__5369__auto___10583 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__10577], null);var temp__4126__auto___10584 = input_checker10575_10581.call(null,args__5369__auto___10583);if(cljs.core.truth_(temp__4126__auto___10584))
{var error__5370__auto___10585 = temp__4126__auto___10584;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__5370__auto___10585)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema10574_10580,new cljs.core.Keyword(null,"value","value",305978217),args__5369__auto___10583,new cljs.core.Keyword(null,"error","error",-978969032),error__5370__auto___10585], null));
} else
{}
} else
{}
var o__5371__auto__ = (function (){var s = G__10577;while(true){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();if(cljs.core.truth_(validate__5368__auto__))
{var temp__4126__auto___10586 = output_checker10576_10582.call(null,o__5371__auto__);if(cljs.core.truth_(temp__4126__auto___10586))
{var error__5370__auto___10587 = temp__4126__auto___10586;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__5370__auto___10587)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema10573_10579,new cljs.core.Keyword(null,"value","value",305978217),o__5371__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5370__auto___10587], null));
} else
{}
} else
{}
return o__5371__auto__;
});})(ufv___10578,output_schema10573_10579,input_schema10574_10580,input_checker10575_10581,output_checker10576_10582))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema10573_10579,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema10574_10580], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__10591){var vec__10592 = p__10591;var k = cljs.core.nth.call(null,vec__10592,(0),null);var v = cljs.core.nth.call(null,vec__10592,(1),null);var pk = key_project.call(null,k);var temp__4124__auto__ = cljs.core.get.call(null,m,pk);if(cljs.core.truth_(temp__4124__auto__))
{var vec__10593 = temp__4124__auto__;var ok = cljs.core.nth.call(null,vec__10593,(0),null);var ov = cljs.core.nth.call(null,vec__10593,(1),null);return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
} else
{return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.call(null,cljs.core.concat,maps))));
};
var merge_on_with = function (key_project,key_combine,val_combine,var_args){
var maps = null;if (arguments.length > 3) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return merge_on_with__delegate.call(this,key_project,key_combine,val_combine,maps);};
merge_on_with.cljs$lang$maxFixedArity = 3;
merge_on_with.cljs$lang$applyTo = (function (arglist__10594){
var key_project = cljs.core.first(arglist__10594);
arglist__10594 = cljs.core.next(arglist__10594);
var key_combine = cljs.core.first(arglist__10594);
arglist__10594 = cljs.core.next(arglist__10594);
var val_combine = cljs.core.first(arglist__10594);
var maps = cljs.core.rest(arglist__10594);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___10602 = schema.utils.use_fn_validation;var output_schema10596_10603 = plumbing.fnk.schema.InputSchema;var input_schema10597_10604 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);var input_checker10598_10605 = schema.core.checker.call(null,input_schema10597_10604);var output_checker10599_10606 = schema.core.checker.call(null,output_schema10596_10603);/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___10602,output_schema10596_10603,input_schema10597_10604,input_checker10598_10605,output_checker10599_10606){
return (function union_input_schemata(G__10600,G__10601){var validate__5368__auto__ = ufv___10602.get_cell();if(cljs.core.truth_(validate__5368__auto__))
{var args__5369__auto___10607 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__10600,G__10601], null);var temp__4126__auto___10608 = input_checker10598_10605.call(null,args__5369__auto___10607);if(cljs.core.truth_(temp__4126__auto___10608))
{var error__5370__auto___10609 = temp__4126__auto___10608;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__5370__auto___10609)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema10597_10604,new cljs.core.Keyword(null,"value","value",305978217),args__5369__auto___10607,new cljs.core.Keyword(null,"error","error",-978969032),error__5370__auto___10609], null));
} else
{}
} else
{}
var o__5371__auto__ = (function (){var i1 = G__10600;var i2 = G__10601;while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__5368__auto__,ufv___10602,output_schema10596_10603,input_schema10597_10604,input_checker10598_10605,output_checker10599_10606){
return (function (p1__10595_SHARP_){if(schema.core.specific_key_QMARK_.call(null,p1__10595_SHARP_))
{return schema.core.explicit_schema_key.call(null,p1__10595_SHARP_);
} else
{return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__5368__auto__,ufv___10602,output_schema10596_10603,input_schema10597_10604,input_checker10598_10605,output_checker10599_10606))
,((function (validate__5368__auto__,ufv___10602,output_schema10596_10603,input_schema10597_10604,input_checker10598_10605,output_checker10599_10606){
return (function (k1,k2){if(schema.core.required_key_QMARK_.call(null,k1))
{return k1;
} else
{if(schema.core.required_key_QMARK_.call(null,k2))
{return k2;
} else
{if(schema.core.optional_key_QMARK_.call(null,k1))
{if(cljs.core._EQ_.call(null,k1,k2))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"k1","k1",-1701777341,null),new cljs.core.Symbol(null,"k2","k2",-1225133949,null)))))));
}
return k1;
} else
{if(cljs.core._EQ_.call(null,k1,k2))
{return k1;
} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Only one extra schema allowed")));


}
}
}
}
});})(validate__5368__auto__,ufv___10602,output_schema10596_10603,input_schema10597_10604,input_checker10598_10605,output_checker10599_10606))
,((function (validate__5368__auto__,ufv___10602,output_schema10596_10603,input_schema10597_10604,input_checker10598_10605,output_checker10599_10606){
return (function (s1,s2){if((plumbing.fnk.schema.map_schema_QMARK_.call(null,s1)) && (plumbing.fnk.schema.map_schema_QMARK_.call(null,s2)))
{return union_input_schemata.call(null,s1,s2);
} else
{return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__5368__auto__,ufv___10602,output_schema10596_10603,input_schema10597_10604,input_checker10598_10605,output_checker10599_10606))
,i1,i2);
break;
}
})();if(cljs.core.truth_(validate__5368__auto__))
{var temp__4126__auto___10610 = output_checker10599_10606.call(null,o__5371__auto__);if(cljs.core.truth_(temp__4126__auto___10610))
{var error__5370__auto___10611 = temp__4126__auto___10610;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__5370__auto___10611)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema10596_10603,new cljs.core.Keyword(null,"value","value",305978217),o__5371__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5370__auto___10611], null));
} else
{}
} else
{}
return o__5371__auto__;
});})(ufv___10602,output_schema10596_10603,input_schema10597_10604,input_checker10598_10605,output_checker10599_10606))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema10596_10603,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema10597_10604], null)));
var ufv___10617 = schema.utils.use_fn_validation;var output_schema10612_10618 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);var input_schema10613_10619 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);var input_checker10614_10620 = schema.core.checker.call(null,input_schema10613_10619);var output_checker10615_10621 = schema.core.checker.call(null,output_schema10612_10618);/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___10617,output_schema10612_10618,input_schema10613_10619,input_checker10614_10620,output_checker10615_10621){
return (function required_toplevel_keys(G__10616){var validate__5368__auto__ = ufv___10617.get_cell();if(cljs.core.truth_(validate__5368__auto__))
{var args__5369__auto___10622 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__10616], null);var temp__4126__auto___10623 = input_checker10614_10620.call(null,args__5369__auto___10622);if(cljs.core.truth_(temp__4126__auto___10623))
{var error__5370__auto___10624 = temp__4126__auto___10623;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__5370__auto___10624)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema10613_10619,new cljs.core.Keyword(null,"value","value",305978217),args__5369__auto___10622,new cljs.core.Keyword(null,"error","error",-978969032),error__5370__auto___10624], null));
} else
{}
} else
{}
var o__5371__auto__ = (function (){var input_schema = G__10616;while(true){
return cljs.core.keep.call(null,((function (validate__5368__auto__,ufv___10617,output_schema10612_10618,input_schema10613_10619,input_checker10614_10620,output_checker10615_10621){
return (function (k){if(schema.core.required_key_QMARK_.call(null,k))
{return schema.core.explicit_schema_key.call(null,k);
} else
{return null;
}
});})(validate__5368__auto__,ufv___10617,output_schema10612_10618,input_schema10613_10619,input_checker10614_10620,output_checker10615_10621))
,cljs.core.keys.call(null,input_schema));
break;
}
})();if(cljs.core.truth_(validate__5368__auto__))
{var temp__4126__auto___10625 = output_checker10615_10621.call(null,o__5371__auto__);if(cljs.core.truth_(temp__4126__auto___10625))
{var error__5370__auto___10626 = temp__4126__auto___10625;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__5370__auto___10626)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema10612_10618,new cljs.core.Keyword(null,"value","value",305978217),o__5371__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5370__auto___10626], null));
} else
{}
} else
{}
return o__5371__auto__;
});})(ufv___10617,output_schema10612_10618,input_schema10613_10619,input_checker10614_10620,output_checker10615_10621))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema10612_10618,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema10613_10619], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr))))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4285__auto__ = (function iter__10635(s__10636){return (new cljs.core.LazySeq(null,(function (){var s__10636__$1 = s__10636;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__10636__$1);if(temp__4126__auto__)
{var s__10636__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10636__$2))
{var c__4283__auto__ = cljs.core.chunk_first.call(null,s__10636__$2);var size__4284__auto__ = cljs.core.count.call(null,c__4283__auto__);var b__10638 = cljs.core.chunk_buffer.call(null,size__4284__auto__);if((function (){var i__10637 = (0);while(true){
if((i__10637 < size__4284__auto__))
{var vec__10641 = cljs.core._nth.call(null,c__4283__auto__,i__10637);var k = cljs.core.nth.call(null,vec__10641,(0),null);var v = cljs.core.nth.call(null,vec__10641,(1),null);cljs.core.chunk_append.call(null,b__10638,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null));
{
var G__10643 = (i__10637 + (1));
i__10637 = G__10643;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10638),iter__10635.call(null,cljs.core.chunk_rest.call(null,s__10636__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10638),null);
}
} else
{var vec__10642 = cljs.core.first.call(null,s__10636__$2);var k = cljs.core.nth.call(null,vec__10642,(0),null);var v = cljs.core.nth.call(null,vec__10642,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null),iter__10635.call(null,cljs.core.rest.call(null,s__10636__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4285__auto__.call(null,expr);
})());
} else
{return new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null);
}
});
/**
* Subtract output-schema from input-schema, returning nil if it's possible that an object
* satisfying the output-schema satisfies the input-schema, or otherwise a description
* of the part(s) of input-schema not met by output-schema.  Strict about the map structure
* of output-schema matching input-schema, but loose about everything else (only looks at
* required keys of output-schema.
*/
plumbing.fnk.schema.schema_diff = (function schema_diff(input_schema,output_schema){if(!(plumbing.fnk.schema.map_schema_QMARK_.call(null,input_schema)))
{return plumbing.fnk.schema.non_map_diff.call(null,input_schema,output_schema);
} else
{if(!(plumbing.fnk.schema.map_schema_QMARK_.call(null,output_schema)))
{return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,input_schema,output_schema,(new cljs.core.Delay((function (){return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explain.call(null,output_schema)),new cljs.core.Symbol(null,"map?","map?",-1780568534,null));
}),null)),null));
} else
{return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4285__auto__ = (function iter__10652(s__10653){return (new cljs.core.LazySeq(null,(function (){var s__10653__$1 = s__10653;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__10653__$1);if(temp__4126__auto__)
{var s__10653__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10653__$2))
{var c__4283__auto__ = cljs.core.chunk_first.call(null,s__10653__$2);var size__4284__auto__ = cljs.core.count.call(null,c__4283__auto__);var b__10655 = cljs.core.chunk_buffer.call(null,size__4284__auto__);if((function (){var i__10654 = (0);while(true){
if((i__10654 < size__4284__auto__))
{var vec__10658 = cljs.core._nth.call(null,c__4283__auto__,i__10654);var k = cljs.core.nth.call(null,vec__10658,(0),null);var v = cljs.core.nth.call(null,vec__10658,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{cljs.core.chunk_append.call(null,b__10655,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));
{
var G__10660 = (i__10654 + (1));
i__10654 = G__10660;
continue;
}
} else
{{
var G__10661 = (i__10654 + (1));
i__10654 = G__10661;
continue;
}
}
} else
{{
var G__10662 = (i__10654 + (1));
i__10654 = G__10662;
continue;
}
}
} else
{{
var G__10663 = (i__10654 + (1));
i__10654 = G__10663;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10655),iter__10652.call(null,cljs.core.chunk_rest.call(null,s__10653__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10655),null);
}
} else
{var vec__10659 = cljs.core.first.call(null,s__10653__$2);var k = cljs.core.nth.call(null,vec__10659,(0),null);var v = cljs.core.nth.call(null,vec__10659,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__10652.call(null,cljs.core.rest.call(null,s__10653__$2)));
} else
{{
var G__10664 = cljs.core.rest.call(null,s__10653__$2);
s__10653__$1 = G__10664;
continue;
}
}
} else
{{
var G__10665 = cljs.core.rest.call(null,s__10653__$2);
s__10653__$1 = G__10665;
continue;
}
}
} else
{{
var G__10666 = cljs.core.rest.call(null,s__10653__$2);
s__10653__$1 = G__10666;
continue;
}
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4285__auto__.call(null,input_schema);
})()));

}
}
});
plumbing.fnk.schema.assert_satisfies_schema = (function assert_satisfies_schema(input_schema,output_schema){var fails = plumbing.fnk.schema.schema_diff.call(null,input_schema,output_schema);if(cljs.core.truth_(fails))
{throw cljs.core.ex_info.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fails)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"does-not-satisfy-schema","does-not-satisfy-schema",-1543152824),new cljs.core.Keyword(null,"failures","failures",-912916356),fails], null));
} else
{return null;
}
});
var ufv___10689 = schema.utils.use_fn_validation;var output_schema10667_10690 = schema.core.Any;var input_schema10668_10691 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker10669_10692 = schema.core.checker.call(null,input_schema10668_10691);var output_checker10670_10693 = schema.core.checker.call(null,output_schema10667_10690);/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___10689,output_schema10667_10690,input_schema10668_10691,input_checker10669_10692,output_checker10670_10693){
return (function compose_schemata(G__10671,G__10672){var validate__5368__auto__ = true;if(validate__5368__auto__)
{var args__5369__auto___10694 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__10671,G__10672], null);var temp__4126__auto___10695 = input_checker10669_10692.call(null,args__5369__auto___10694);if(cljs.core.truth_(temp__4126__auto___10695))
{var error__5370__auto___10696 = temp__4126__auto___10695;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__5370__auto___10696)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema10668_10691,new cljs.core.Keyword(null,"value","value",305978217),args__5369__auto___10694,new cljs.core.Keyword(null,"error","error",-978969032),error__5370__auto___10696], null));
} else
{}
} else
{}
var o__5371__auto__ = (function (){var G__10683 = G__10671;var vec__10685 = G__10683;var i2 = cljs.core.nth.call(null,vec__10685,(0),null);var o2 = cljs.core.nth.call(null,vec__10685,(1),null);var G__10684 = G__10672;var vec__10686 = G__10684;var i1 = cljs.core.nth.call(null,vec__10686,(0),null);var o1 = cljs.core.nth.call(null,vec__10686,(1),null);var G__10683__$1 = G__10683;var G__10684__$1 = G__10684;while(true){
var vec__10687 = G__10683__$1;var i2__$1 = cljs.core.nth.call(null,vec__10687,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__10687,(1),null);var vec__10688 = G__10684__$1;var i1__$1 = cljs.core.nth.call(null,vec__10688,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__10688,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();if(validate__5368__auto__)
{var temp__4126__auto___10697 = output_checker10670_10693.call(null,o__5371__auto__);if(cljs.core.truth_(temp__4126__auto___10697))
{var error__5370__auto___10698 = temp__4126__auto___10697;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__5370__auto___10698)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema10667_10690,new cljs.core.Keyword(null,"value","value",305978217),o__5371__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5370__auto___10698], null));
} else
{}
} else
{}
return o__5371__auto__;
});})(ufv___10689,output_schema10667_10690,input_schema10668_10691,input_checker10669_10692,output_checker10670_10693))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema10667_10690,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema10668_10691], null)));
plumbing.fnk.schema.schema_key = (function schema_key(m,k){if(cljs.core.contains_QMARK_.call(null,m,k))
{return k;
} else
{if(cljs.core.contains_QMARK_.call(null,m,schema.core.optional_key.call(null,k)))
{return schema.core.optional_key.call(null,k);
} else
{return null;

}
}
});
plumbing.fnk.schema.possibly_contains_QMARK_ = (function possibly_contains_QMARK_(m,k){return cljs.core.boolean$.call(null,plumbing.fnk.schema.schema_key.call(null,m,k));
});
var ufv___10777 = schema.utils.use_fn_validation;var output_schema10699_10778 = schema.core.Any;var input_schema10700_10779 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);var input_checker10701_10780 = schema.core.checker.call(null,input_schema10700_10779);var output_checker10702_10781 = schema.core.checker.call(null,output_schema10699_10778);/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___10777,output_schema10699_10778,input_schema10700_10779,input_checker10701_10780,output_checker10702_10781){
return (function split_schema(G__10703,G__10704){var validate__5368__auto__ = ufv___10777.get_cell();if(cljs.core.truth_(validate__5368__auto__))
{var args__5369__auto___10782 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__10703,G__10704], null);var temp__4126__auto___10783 = input_checker10701_10780.call(null,args__5369__auto___10782);if(cljs.core.truth_(temp__4126__auto___10783))
{var error__5370__auto___10784 = temp__4126__auto___10783;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__5370__auto___10784)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema10700_10779,new cljs.core.Keyword(null,"value","value",305978217),args__5369__auto___10782,new cljs.core.Keyword(null,"error","error",-978969032),error__5370__auto___10784], null));
} else
{}
} else
{}
var o__5371__auto__ = (function (){var s = G__10703;var ks = G__10704;while(true){
var ks__$1 = cljs.core.set.call(null,ks);var iter__4285__auto__ = ((function (ks__$1,validate__5368__auto__,ufv___10777,output_schema10699_10778,input_schema10700_10779,input_checker10701_10780,output_checker10702_10781){
return (function iter__10741(s__10742){return (new cljs.core.LazySeq(null,((function (ks__$1,validate__5368__auto__,ufv___10777,output_schema10699_10778,input_schema10700_10779,input_checker10701_10780,output_checker10702_10781){
return (function (){var s__10742__$1 = s__10742;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__10742__$1);if(temp__4126__auto__)
{var s__10742__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10742__$2))
{var c__4283__auto__ = cljs.core.chunk_first.call(null,s__10742__$2);var size__4284__auto__ = cljs.core.count.call(null,c__4283__auto__);var b__10744 = cljs.core.chunk_buffer.call(null,size__4284__auto__);if((function (){var i__10743 = (0);while(true){
if((i__10743 < size__4284__auto__))
{var in_QMARK_ = cljs.core._nth.call(null,c__4283__auto__,i__10743);cljs.core.chunk_append.call(null,b__10744,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4285__auto__ = ((function (i__10743,in_QMARK_,c__4283__auto__,size__4284__auto__,b__10744,s__10742__$2,temp__4126__auto__,ks__$1,validate__5368__auto__,ufv___10777,output_schema10699_10778,input_schema10700_10779,input_checker10701_10780,output_checker10702_10781){
return (function iter__10761(s__10762){return (new cljs.core.LazySeq(null,((function (i__10743,in_QMARK_,c__4283__auto__,size__4284__auto__,b__10744,s__10742__$2,temp__4126__auto__,ks__$1,validate__5368__auto__,ufv___10777,output_schema10699_10778,input_schema10700_10779,input_checker10701_10780,output_checker10702_10781){
return (function (){var s__10762__$1 = s__10762;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__10762__$1);if(temp__4126__auto____$1)
{var s__10762__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__10762__$2))
{var c__4283__auto____$1 = cljs.core.chunk_first.call(null,s__10762__$2);var size__4284__auto____$1 = cljs.core.count.call(null,c__4283__auto____$1);var b__10764 = cljs.core.chunk_buffer.call(null,size__4284__auto____$1);if((function (){var i__10763 = (0);while(true){
if((i__10763 < size__4284__auto____$1))
{var vec__10767 = cljs.core._nth.call(null,c__4283__auto____$1,i__10763);var k = cljs.core.nth.call(null,vec__10767,(0),null);var v = cljs.core.nth.call(null,vec__10767,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__10764,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__10785 = (i__10763 + (1));
i__10763 = G__10785;
continue;
}
} else
{{
var G__10786 = (i__10763 + (1));
i__10763 = G__10786;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10764),iter__10761.call(null,cljs.core.chunk_rest.call(null,s__10762__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10764),null);
}
} else
{var vec__10768 = cljs.core.first.call(null,s__10762__$2);var k = cljs.core.nth.call(null,vec__10768,(0),null);var v = cljs.core.nth.call(null,vec__10768,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__10761.call(null,cljs.core.rest.call(null,s__10762__$2)));
} else
{{
var G__10787 = cljs.core.rest.call(null,s__10762__$2);
s__10762__$1 = G__10787;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__10743,in_QMARK_,c__4283__auto__,size__4284__auto__,b__10744,s__10742__$2,temp__4126__auto__,ks__$1,validate__5368__auto__,ufv___10777,output_schema10699_10778,input_schema10700_10779,input_checker10701_10780,output_checker10702_10781))
,null,null));
});})(i__10743,in_QMARK_,c__4283__auto__,size__4284__auto__,b__10744,s__10742__$2,temp__4126__auto__,ks__$1,validate__5368__auto__,ufv___10777,output_schema10699_10778,input_schema10700_10779,input_checker10701_10780,output_checker10702_10781))
;return iter__4285__auto__.call(null,s);
})()));
{
var G__10788 = (i__10743 + (1));
i__10743 = G__10788;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10744),iter__10741.call(null,cljs.core.chunk_rest.call(null,s__10742__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10744),null);
}
} else
{var in_QMARK_ = cljs.core.first.call(null,s__10742__$2);return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4285__auto__ = ((function (in_QMARK_,s__10742__$2,temp__4126__auto__,ks__$1,validate__5368__auto__,ufv___10777,output_schema10699_10778,input_schema10700_10779,input_checker10701_10780,output_checker10702_10781){
return (function iter__10769(s__10770){return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__10742__$2,temp__4126__auto__,ks__$1,validate__5368__auto__,ufv___10777,output_schema10699_10778,input_schema10700_10779,input_checker10701_10780,output_checker10702_10781){
return (function (){var s__10770__$1 = s__10770;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__10770__$1);if(temp__4126__auto____$1)
{var s__10770__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__10770__$2))
{var c__4283__auto__ = cljs.core.chunk_first.call(null,s__10770__$2);var size__4284__auto__ = cljs.core.count.call(null,c__4283__auto__);var b__10772 = cljs.core.chunk_buffer.call(null,size__4284__auto__);if((function (){var i__10771 = (0);while(true){
if((i__10771 < size__4284__auto__))
{var vec__10775 = cljs.core._nth.call(null,c__4283__auto__,i__10771);var k = cljs.core.nth.call(null,vec__10775,(0),null);var v = cljs.core.nth.call(null,vec__10775,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__10772,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__10789 = (i__10771 + (1));
i__10771 = G__10789;
continue;
}
} else
{{
var G__10790 = (i__10771 + (1));
i__10771 = G__10790;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10772),iter__10769.call(null,cljs.core.chunk_rest.call(null,s__10770__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10772),null);
}
} else
{var vec__10776 = cljs.core.first.call(null,s__10770__$2);var k = cljs.core.nth.call(null,vec__10776,(0),null);var v = cljs.core.nth.call(null,vec__10776,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__10769.call(null,cljs.core.rest.call(null,s__10770__$2)));
} else
{{
var G__10791 = cljs.core.rest.call(null,s__10770__$2);
s__10770__$1 = G__10791;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(in_QMARK_,s__10742__$2,temp__4126__auto__,ks__$1,validate__5368__auto__,ufv___10777,output_schema10699_10778,input_schema10700_10779,input_checker10701_10780,output_checker10702_10781))
,null,null));
});})(in_QMARK_,s__10742__$2,temp__4126__auto__,ks__$1,validate__5368__auto__,ufv___10777,output_schema10699_10778,input_schema10700_10779,input_checker10701_10780,output_checker10702_10781))
;return iter__4285__auto__.call(null,s);
})()),iter__10741.call(null,cljs.core.rest.call(null,s__10742__$2)));
}
} else
{return null;
}
break;
}
});})(ks__$1,validate__5368__auto__,ufv___10777,output_schema10699_10778,input_schema10700_10779,input_checker10701_10780,output_checker10702_10781))
,null,null));
});})(ks__$1,validate__5368__auto__,ufv___10777,output_schema10699_10778,input_schema10700_10779,input_checker10701_10780,output_checker10702_10781))
;return iter__4285__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();if(cljs.core.truth_(validate__5368__auto__))
{var temp__4126__auto___10792 = output_checker10702_10781.call(null,o__5371__auto__);if(cljs.core.truth_(temp__4126__auto___10792))
{var error__5370__auto___10793 = temp__4126__auto___10792;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__5370__auto___10793)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema10699_10778,new cljs.core.Keyword(null,"value","value",305978217),o__5371__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5370__auto___10793], null));
} else
{}
} else
{}
return o__5371__auto__;
});})(ufv___10777,output_schema10699_10778,input_schema10700_10779,input_checker10701_10780,output_checker10702_10781))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema10699_10778,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema10700_10779], null)));
var ufv___10824 = schema.utils.use_fn_validation;var output_schema10794_10825 = plumbing.fnk.schema.GraphIOSchemata;var input_schema10795_10826 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker10796_10827 = schema.core.checker.call(null,input_schema10795_10826);var output_checker10797_10828 = schema.core.checker.call(null,output_schema10794_10825);/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___10824,output_schema10794_10825,input_schema10795_10826,input_checker10796_10827,output_checker10797_10828){
return (function sequence_schemata(G__10798,G__10799){var validate__5368__auto__ = ufv___10824.get_cell();if(cljs.core.truth_(validate__5368__auto__))
{var args__5369__auto___10829 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__10798,G__10799], null);var temp__4126__auto___10830 = input_checker10796_10827.call(null,args__5369__auto___10829);if(cljs.core.truth_(temp__4126__auto___10830))
{var error__5370__auto___10831 = temp__4126__auto___10830;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__5370__auto___10831)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema10795_10826,new cljs.core.Keyword(null,"value","value",305978217),args__5369__auto___10829,new cljs.core.Keyword(null,"error","error",-978969032),error__5370__auto___10831], null));
} else
{}
} else
{}
var o__5371__auto__ = (function (){var G__10815 = G__10798;var vec__10817 = G__10815;var i1 = cljs.core.nth.call(null,vec__10817,(0),null);var o1 = cljs.core.nth.call(null,vec__10817,(1),null);var G__10816 = G__10799;var vec__10818 = G__10816;var k = cljs.core.nth.call(null,vec__10818,(0),null);var vec__10819 = cljs.core.nth.call(null,vec__10818,(1),null);var i2 = cljs.core.nth.call(null,vec__10819,(0),null);var o2 = cljs.core.nth.call(null,vec__10819,(1),null);var G__10815__$1 = G__10815;var G__10816__$1 = G__10816;while(true){
var vec__10820 = G__10815__$1;var i1__$1 = cljs.core.nth.call(null,vec__10820,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__10820,(1),null);var vec__10821 = G__10816__$1;var k__$1 = cljs.core.nth.call(null,vec__10821,(0),null);var vec__10822 = cljs.core.nth.call(null,vec__10821,(1),null);var i2__$1 = cljs.core.nth.call(null,vec__10822,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__10822,(1),null);if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1)))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Duplicate key output (possibly due to a misordered graph) %s for input %s from input %s",k__$1,schema.core.explain.call(null,i2__$1),schema.core.explain.call(null,i1__$1))));
}
if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i2__$1,k__$1)))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Node outputs a key %s in its inputs %s",k__$1,schema.core.explain.call(null,i2__$1))));
}
if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,o1__$1,k__$1)))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Node outputs a duplicate key %s given inputs %s",k__$1,schema.core.explain.call(null,i1__$1))));
}
var vec__10823 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));var used = cljs.core.nth.call(null,vec__10823,(0),null);var unused = cljs.core.nth.call(null,vec__10823,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();if(cljs.core.truth_(validate__5368__auto__))
{var temp__4126__auto___10832 = output_checker10797_10828.call(null,o__5371__auto__);if(cljs.core.truth_(temp__4126__auto___10832))
{var error__5370__auto___10833 = temp__4126__auto___10832;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__5370__auto___10833)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema10794_10825,new cljs.core.Keyword(null,"value","value",305978217),o__5371__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5370__auto___10833], null));
} else
{}
} else
{}
return o__5371__auto__;
});})(ufv___10824,output_schema10794_10825,input_schema10795_10826,input_checker10796_10827,output_checker10797_10828))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema10794_10825,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema10795_10826], null)));

//# sourceMappingURL=schema.js.map