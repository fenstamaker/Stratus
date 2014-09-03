// Compiled by ClojureScript 0.0-2322
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__5398__5399__auto__){var G__10324 = p1__5398__5399__auto__;if(G__10324)
{var bit__4210__auto__ = null;if(cljs.core.truth_((function (){var or__3560__auto__ = bit__4210__auto__;if(cljs.core.truth_(or__3560__auto__))
{return or__3560__auto__;
} else
{return G__10324.schema$core$Schema$;
}
})()))
{return true;
} else
{if((!G__10324.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__10324);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__10324);
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
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__10325_SHARP_){return (cljs.core.val.call(null,p1__10325_SHARP_) > (1));
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
var vec__10327 = cljs.core.find.call(null,m,k);var _ = cljs.core.nth.call(null,vec__10327,(0),null);var v = cljs.core.nth.call(null,vec__10327,(1),null);var p = vec__10327;if(cljs.core.truth_(p))
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
var ufv___10333 = schema.utils.use_fn_validation;var output_schema10328_10334 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));var input_schema10329_10335 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);var input_checker10330_10336 = schema.core.checker.call(null,input_schema10329_10335);var output_checker10331_10337 = schema.core.checker.call(null,output_schema10328_10334);/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___10333,output_schema10328_10334,input_schema10329_10335,input_checker10330_10336,output_checker10331_10337){
return (function unwrap_schema_form_key(G__10332){var validate__5368__auto__ = ufv___10333.get_cell();if(cljs.core.truth_(validate__5368__auto__))
{var args__5369__auto___10338 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__10332], null);var temp__4126__auto___10339 = input_checker10330_10336.call(null,args__5369__auto___10338);if(cljs.core.truth_(temp__4126__auto___10339))
{var error__5370__auto___10340 = temp__4126__auto___10339;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__5370__auto___10340)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema10329_10335,new cljs.core.Keyword(null,"value","value",305978217),args__5369__auto___10338,new cljs.core.Keyword(null,"error","error",-978969032),error__5370__auto___10340], null));
} else
{}
} else
{}
var o__5371__auto__ = (function (){var k = G__10332;while(true){
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
{var temp__4126__auto___10341 = output_checker10331_10337.call(null,o__5371__auto__);if(cljs.core.truth_(temp__4126__auto___10341))
{var error__5370__auto___10342 = temp__4126__auto___10341;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__5370__auto___10342)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema10328_10334,new cljs.core.Keyword(null,"value","value",305978217),o__5371__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5370__auto___10342], null));
} else
{}
} else
{}
return o__5371__auto__;
});})(ufv___10333,output_schema10328_10334,input_schema10329_10335,input_checker10330_10336,output_checker10331_10337))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema10328_10334,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema10329_10335], null)));
var ufv___10348 = schema.utils.use_fn_validation;var output_schema10343_10349 = schema.core.Any;var input_schema10344_10350 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker10345_10351 = schema.core.checker.call(null,input_schema10344_10350);var output_checker10346_10352 = schema.core.checker.call(null,output_schema10343_10349);/**
* Inputs: [s]
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___10348,output_schema10343_10349,input_schema10344_10350,input_checker10345_10351,output_checker10346_10352){
return (function explicit_schema_key_map(G__10347){var validate__5368__auto__ = ufv___10348.get_cell();if(cljs.core.truth_(validate__5368__auto__))
{var args__5369__auto___10353 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__10347], null);var temp__4126__auto___10354 = input_checker10345_10351.call(null,args__5369__auto___10353);if(cljs.core.truth_(temp__4126__auto___10354))
{var error__5370__auto___10355 = temp__4126__auto___10354;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__5370__auto___10355)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema10344_10350,new cljs.core.Keyword(null,"value","value",305978217),args__5369__auto___10353,new cljs.core.Keyword(null,"error","error",-978969032),error__5370__auto___10355], null));
} else
{}
} else
{}
var o__5371__auto__ = (function (){var s = G__10347;while(true){
new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();if(cljs.core.truth_(validate__5368__auto__))
{var temp__4126__auto___10356 = output_checker10346_10352.call(null,o__5371__auto__);if(cljs.core.truth_(temp__4126__auto___10356))
{var error__5370__auto___10357 = temp__4126__auto___10356;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__5370__auto___10357)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema10343_10349,new cljs.core.Keyword(null,"value","value",305978217),o__5371__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5370__auto___10357], null));
} else
{}
} else
{}
return o__5371__auto__;
});})(ufv___10348,output_schema10343_10349,input_schema10344_10350,input_checker10345_10351,output_checker10346_10352))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema10343_10349,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema10344_10350], null)));
var ufv___10363 = schema.utils.use_fn_validation;var output_schema10358_10364 = schema.core.Any;var input_schema10359_10365 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker10360_10366 = schema.core.checker.call(null,input_schema10359_10365);var output_checker10361_10367 = schema.core.checker.call(null,output_schema10358_10364);/**
* Inputs: [s :- {s/Keyword s/Bool}]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___10363,output_schema10358_10364,input_schema10359_10365,input_checker10360_10366,output_checker10361_10367){
return (function split_schema_keys(G__10362){var validate__5368__auto__ = ufv___10363.get_cell();if(cljs.core.truth_(validate__5368__auto__))
{var args__5369__auto___10368 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__10362], null);var temp__4126__auto___10369 = input_checker10360_10366.call(null,args__5369__auto___10368);if(cljs.core.truth_(temp__4126__auto___10369))
{var error__5370__auto___10370 = temp__4126__auto___10369;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__5370__auto___10370)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema10359_10365,new cljs.core.Keyword(null,"value","value",305978217),args__5369__auto___10368,new cljs.core.Keyword(null,"error","error",-978969032),error__5370__auto___10370], null));
} else
{}
} else
{}
var o__5371__auto__ = (function (){var s = G__10362;while(true){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();if(cljs.core.truth_(validate__5368__auto__))
{var temp__4126__auto___10371 = output_checker10361_10367.call(null,o__5371__auto__);if(cljs.core.truth_(temp__4126__auto___10371))
{var error__5370__auto___10372 = temp__4126__auto___10371;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__5370__auto___10372)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema10358_10364,new cljs.core.Keyword(null,"value","value",305978217),o__5371__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5370__auto___10372], null));
} else
{}
} else
{}
return o__5371__auto__;
});})(ufv___10363,output_schema10358_10364,input_schema10359_10365,input_checker10360_10366,output_checker10361_10367))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema10358_10364,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema10359_10365], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__10376){var vec__10377 = p__10376;var k = cljs.core.nth.call(null,vec__10377,(0),null);var v = cljs.core.nth.call(null,vec__10377,(1),null);var pk = key_project.call(null,k);var temp__4124__auto__ = cljs.core.get.call(null,m,pk);if(cljs.core.truth_(temp__4124__auto__))
{var vec__10378 = temp__4124__auto__;var ok = cljs.core.nth.call(null,vec__10378,(0),null);var ov = cljs.core.nth.call(null,vec__10378,(1),null);return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
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
merge_on_with.cljs$lang$applyTo = (function (arglist__10379){
var key_project = cljs.core.first(arglist__10379);
arglist__10379 = cljs.core.next(arglist__10379);
var key_combine = cljs.core.first(arglist__10379);
arglist__10379 = cljs.core.next(arglist__10379);
var val_combine = cljs.core.first(arglist__10379);
var maps = cljs.core.rest(arglist__10379);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___10387 = schema.utils.use_fn_validation;var output_schema10381_10388 = plumbing.fnk.schema.InputSchema;var input_schema10382_10389 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);var input_checker10383_10390 = schema.core.checker.call(null,input_schema10382_10389);var output_checker10384_10391 = schema.core.checker.call(null,output_schema10381_10388);/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___10387,output_schema10381_10388,input_schema10382_10389,input_checker10383_10390,output_checker10384_10391){
return (function union_input_schemata(G__10385,G__10386){var validate__5368__auto__ = ufv___10387.get_cell();if(cljs.core.truth_(validate__5368__auto__))
{var args__5369__auto___10392 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__10385,G__10386], null);var temp__4126__auto___10393 = input_checker10383_10390.call(null,args__5369__auto___10392);if(cljs.core.truth_(temp__4126__auto___10393))
{var error__5370__auto___10394 = temp__4126__auto___10393;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__5370__auto___10394)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema10382_10389,new cljs.core.Keyword(null,"value","value",305978217),args__5369__auto___10392,new cljs.core.Keyword(null,"error","error",-978969032),error__5370__auto___10394], null));
} else
{}
} else
{}
var o__5371__auto__ = (function (){var i1 = G__10385;var i2 = G__10386;while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__5368__auto__,ufv___10387,output_schema10381_10388,input_schema10382_10389,input_checker10383_10390,output_checker10384_10391){
return (function (p1__10380_SHARP_){if(schema.core.specific_key_QMARK_.call(null,p1__10380_SHARP_))
{return schema.core.explicit_schema_key.call(null,p1__10380_SHARP_);
} else
{return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__5368__auto__,ufv___10387,output_schema10381_10388,input_schema10382_10389,input_checker10383_10390,output_checker10384_10391))
,((function (validate__5368__auto__,ufv___10387,output_schema10381_10388,input_schema10382_10389,input_checker10383_10390,output_checker10384_10391){
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
});})(validate__5368__auto__,ufv___10387,output_schema10381_10388,input_schema10382_10389,input_checker10383_10390,output_checker10384_10391))
,((function (validate__5368__auto__,ufv___10387,output_schema10381_10388,input_schema10382_10389,input_checker10383_10390,output_checker10384_10391){
return (function (s1,s2){if((plumbing.fnk.schema.map_schema_QMARK_.call(null,s1)) && (plumbing.fnk.schema.map_schema_QMARK_.call(null,s2)))
{return union_input_schemata.call(null,s1,s2);
} else
{return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__5368__auto__,ufv___10387,output_schema10381_10388,input_schema10382_10389,input_checker10383_10390,output_checker10384_10391))
,i1,i2);
break;
}
})();if(cljs.core.truth_(validate__5368__auto__))
{var temp__4126__auto___10395 = output_checker10384_10391.call(null,o__5371__auto__);if(cljs.core.truth_(temp__4126__auto___10395))
{var error__5370__auto___10396 = temp__4126__auto___10395;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__5370__auto___10396)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema10381_10388,new cljs.core.Keyword(null,"value","value",305978217),o__5371__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5370__auto___10396], null));
} else
{}
} else
{}
return o__5371__auto__;
});})(ufv___10387,output_schema10381_10388,input_schema10382_10389,input_checker10383_10390,output_checker10384_10391))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema10381_10388,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema10382_10389], null)));
var ufv___10402 = schema.utils.use_fn_validation;var output_schema10397_10403 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);var input_schema10398_10404 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);var input_checker10399_10405 = schema.core.checker.call(null,input_schema10398_10404);var output_checker10400_10406 = schema.core.checker.call(null,output_schema10397_10403);/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___10402,output_schema10397_10403,input_schema10398_10404,input_checker10399_10405,output_checker10400_10406){
return (function required_toplevel_keys(G__10401){var validate__5368__auto__ = ufv___10402.get_cell();if(cljs.core.truth_(validate__5368__auto__))
{var args__5369__auto___10407 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__10401], null);var temp__4126__auto___10408 = input_checker10399_10405.call(null,args__5369__auto___10407);if(cljs.core.truth_(temp__4126__auto___10408))
{var error__5370__auto___10409 = temp__4126__auto___10408;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__5370__auto___10409)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema10398_10404,new cljs.core.Keyword(null,"value","value",305978217),args__5369__auto___10407,new cljs.core.Keyword(null,"error","error",-978969032),error__5370__auto___10409], null));
} else
{}
} else
{}
var o__5371__auto__ = (function (){var input_schema = G__10401;while(true){
return cljs.core.keep.call(null,((function (validate__5368__auto__,ufv___10402,output_schema10397_10403,input_schema10398_10404,input_checker10399_10405,output_checker10400_10406){
return (function (k){if(schema.core.required_key_QMARK_.call(null,k))
{return schema.core.explicit_schema_key.call(null,k);
} else
{return null;
}
});})(validate__5368__auto__,ufv___10402,output_schema10397_10403,input_schema10398_10404,input_checker10399_10405,output_checker10400_10406))
,cljs.core.keys.call(null,input_schema));
break;
}
})();if(cljs.core.truth_(validate__5368__auto__))
{var temp__4126__auto___10410 = output_checker10400_10406.call(null,o__5371__auto__);if(cljs.core.truth_(temp__4126__auto___10410))
{var error__5370__auto___10411 = temp__4126__auto___10410;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__5370__auto___10411)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema10397_10403,new cljs.core.Keyword(null,"value","value",305978217),o__5371__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5370__auto___10411], null));
} else
{}
} else
{}
return o__5371__auto__;
});})(ufv___10402,output_schema10397_10403,input_schema10398_10404,input_checker10399_10405,output_checker10400_10406))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema10397_10403,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema10398_10404], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr))))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4285__auto__ = (function iter__10420(s__10421){return (new cljs.core.LazySeq(null,(function (){var s__10421__$1 = s__10421;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__10421__$1);if(temp__4126__auto__)
{var s__10421__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10421__$2))
{var c__4283__auto__ = cljs.core.chunk_first.call(null,s__10421__$2);var size__4284__auto__ = cljs.core.count.call(null,c__4283__auto__);var b__10423 = cljs.core.chunk_buffer.call(null,size__4284__auto__);if((function (){var i__10422 = (0);while(true){
if((i__10422 < size__4284__auto__))
{var vec__10426 = cljs.core._nth.call(null,c__4283__auto__,i__10422);var k = cljs.core.nth.call(null,vec__10426,(0),null);var v = cljs.core.nth.call(null,vec__10426,(1),null);cljs.core.chunk_append.call(null,b__10423,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null));
{
var G__10428 = (i__10422 + (1));
i__10422 = G__10428;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10423),iter__10420.call(null,cljs.core.chunk_rest.call(null,s__10421__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10423),null);
}
} else
{var vec__10427 = cljs.core.first.call(null,s__10421__$2);var k = cljs.core.nth.call(null,vec__10427,(0),null);var v = cljs.core.nth.call(null,vec__10427,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null),iter__10420.call(null,cljs.core.rest.call(null,s__10421__$2)));
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
{return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4285__auto__ = (function iter__10437(s__10438){return (new cljs.core.LazySeq(null,(function (){var s__10438__$1 = s__10438;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__10438__$1);if(temp__4126__auto__)
{var s__10438__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10438__$2))
{var c__4283__auto__ = cljs.core.chunk_first.call(null,s__10438__$2);var size__4284__auto__ = cljs.core.count.call(null,c__4283__auto__);var b__10440 = cljs.core.chunk_buffer.call(null,size__4284__auto__);if((function (){var i__10439 = (0);while(true){
if((i__10439 < size__4284__auto__))
{var vec__10443 = cljs.core._nth.call(null,c__4283__auto__,i__10439);var k = cljs.core.nth.call(null,vec__10443,(0),null);var v = cljs.core.nth.call(null,vec__10443,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{cljs.core.chunk_append.call(null,b__10440,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));
{
var G__10445 = (i__10439 + (1));
i__10439 = G__10445;
continue;
}
} else
{{
var G__10446 = (i__10439 + (1));
i__10439 = G__10446;
continue;
}
}
} else
{{
var G__10447 = (i__10439 + (1));
i__10439 = G__10447;
continue;
}
}
} else
{{
var G__10448 = (i__10439 + (1));
i__10439 = G__10448;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10440),iter__10437.call(null,cljs.core.chunk_rest.call(null,s__10438__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10440),null);
}
} else
{var vec__10444 = cljs.core.first.call(null,s__10438__$2);var k = cljs.core.nth.call(null,vec__10444,(0),null);var v = cljs.core.nth.call(null,vec__10444,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__10437.call(null,cljs.core.rest.call(null,s__10438__$2)));
} else
{{
var G__10449 = cljs.core.rest.call(null,s__10438__$2);
s__10438__$1 = G__10449;
continue;
}
}
} else
{{
var G__10450 = cljs.core.rest.call(null,s__10438__$2);
s__10438__$1 = G__10450;
continue;
}
}
} else
{{
var G__10451 = cljs.core.rest.call(null,s__10438__$2);
s__10438__$1 = G__10451;
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
var ufv___10474 = schema.utils.use_fn_validation;var output_schema10452_10475 = schema.core.Any;var input_schema10453_10476 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker10454_10477 = schema.core.checker.call(null,input_schema10453_10476);var output_checker10455_10478 = schema.core.checker.call(null,output_schema10452_10475);/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___10474,output_schema10452_10475,input_schema10453_10476,input_checker10454_10477,output_checker10455_10478){
return (function compose_schemata(G__10456,G__10457){var validate__5368__auto__ = true;if(validate__5368__auto__)
{var args__5369__auto___10479 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__10456,G__10457], null);var temp__4126__auto___10480 = input_checker10454_10477.call(null,args__5369__auto___10479);if(cljs.core.truth_(temp__4126__auto___10480))
{var error__5370__auto___10481 = temp__4126__auto___10480;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__5370__auto___10481)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema10453_10476,new cljs.core.Keyword(null,"value","value",305978217),args__5369__auto___10479,new cljs.core.Keyword(null,"error","error",-978969032),error__5370__auto___10481], null));
} else
{}
} else
{}
var o__5371__auto__ = (function (){var G__10468 = G__10456;var vec__10470 = G__10468;var i2 = cljs.core.nth.call(null,vec__10470,(0),null);var o2 = cljs.core.nth.call(null,vec__10470,(1),null);var G__10469 = G__10457;var vec__10471 = G__10469;var i1 = cljs.core.nth.call(null,vec__10471,(0),null);var o1 = cljs.core.nth.call(null,vec__10471,(1),null);var G__10468__$1 = G__10468;var G__10469__$1 = G__10469;while(true){
var vec__10472 = G__10468__$1;var i2__$1 = cljs.core.nth.call(null,vec__10472,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__10472,(1),null);var vec__10473 = G__10469__$1;var i1__$1 = cljs.core.nth.call(null,vec__10473,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__10473,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();if(validate__5368__auto__)
{var temp__4126__auto___10482 = output_checker10455_10478.call(null,o__5371__auto__);if(cljs.core.truth_(temp__4126__auto___10482))
{var error__5370__auto___10483 = temp__4126__auto___10482;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__5370__auto___10483)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema10452_10475,new cljs.core.Keyword(null,"value","value",305978217),o__5371__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5370__auto___10483], null));
} else
{}
} else
{}
return o__5371__auto__;
});})(ufv___10474,output_schema10452_10475,input_schema10453_10476,input_checker10454_10477,output_checker10455_10478))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema10452_10475,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema10453_10476], null)));
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
var ufv___10562 = schema.utils.use_fn_validation;var output_schema10484_10563 = schema.core.Any;var input_schema10485_10564 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);var input_checker10486_10565 = schema.core.checker.call(null,input_schema10485_10564);var output_checker10487_10566 = schema.core.checker.call(null,output_schema10484_10563);/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___10562,output_schema10484_10563,input_schema10485_10564,input_checker10486_10565,output_checker10487_10566){
return (function split_schema(G__10488,G__10489){var validate__5368__auto__ = ufv___10562.get_cell();if(cljs.core.truth_(validate__5368__auto__))
{var args__5369__auto___10567 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__10488,G__10489], null);var temp__4126__auto___10568 = input_checker10486_10565.call(null,args__5369__auto___10567);if(cljs.core.truth_(temp__4126__auto___10568))
{var error__5370__auto___10569 = temp__4126__auto___10568;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__5370__auto___10569)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema10485_10564,new cljs.core.Keyword(null,"value","value",305978217),args__5369__auto___10567,new cljs.core.Keyword(null,"error","error",-978969032),error__5370__auto___10569], null));
} else
{}
} else
{}
var o__5371__auto__ = (function (){var s = G__10488;var ks = G__10489;while(true){
var ks__$1 = cljs.core.set.call(null,ks);var iter__4285__auto__ = ((function (ks__$1,validate__5368__auto__,ufv___10562,output_schema10484_10563,input_schema10485_10564,input_checker10486_10565,output_checker10487_10566){
return (function iter__10526(s__10527){return (new cljs.core.LazySeq(null,((function (ks__$1,validate__5368__auto__,ufv___10562,output_schema10484_10563,input_schema10485_10564,input_checker10486_10565,output_checker10487_10566){
return (function (){var s__10527__$1 = s__10527;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__10527__$1);if(temp__4126__auto__)
{var s__10527__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10527__$2))
{var c__4283__auto__ = cljs.core.chunk_first.call(null,s__10527__$2);var size__4284__auto__ = cljs.core.count.call(null,c__4283__auto__);var b__10529 = cljs.core.chunk_buffer.call(null,size__4284__auto__);if((function (){var i__10528 = (0);while(true){
if((i__10528 < size__4284__auto__))
{var in_QMARK_ = cljs.core._nth.call(null,c__4283__auto__,i__10528);cljs.core.chunk_append.call(null,b__10529,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4285__auto__ = ((function (i__10528,in_QMARK_,c__4283__auto__,size__4284__auto__,b__10529,s__10527__$2,temp__4126__auto__,ks__$1,validate__5368__auto__,ufv___10562,output_schema10484_10563,input_schema10485_10564,input_checker10486_10565,output_checker10487_10566){
return (function iter__10546(s__10547){return (new cljs.core.LazySeq(null,((function (i__10528,in_QMARK_,c__4283__auto__,size__4284__auto__,b__10529,s__10527__$2,temp__4126__auto__,ks__$1,validate__5368__auto__,ufv___10562,output_schema10484_10563,input_schema10485_10564,input_checker10486_10565,output_checker10487_10566){
return (function (){var s__10547__$1 = s__10547;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__10547__$1);if(temp__4126__auto____$1)
{var s__10547__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__10547__$2))
{var c__4283__auto____$1 = cljs.core.chunk_first.call(null,s__10547__$2);var size__4284__auto____$1 = cljs.core.count.call(null,c__4283__auto____$1);var b__10549 = cljs.core.chunk_buffer.call(null,size__4284__auto____$1);if((function (){var i__10548 = (0);while(true){
if((i__10548 < size__4284__auto____$1))
{var vec__10552 = cljs.core._nth.call(null,c__4283__auto____$1,i__10548);var k = cljs.core.nth.call(null,vec__10552,(0),null);var v = cljs.core.nth.call(null,vec__10552,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__10549,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__10570 = (i__10548 + (1));
i__10548 = G__10570;
continue;
}
} else
{{
var G__10571 = (i__10548 + (1));
i__10548 = G__10571;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10549),iter__10546.call(null,cljs.core.chunk_rest.call(null,s__10547__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10549),null);
}
} else
{var vec__10553 = cljs.core.first.call(null,s__10547__$2);var k = cljs.core.nth.call(null,vec__10553,(0),null);var v = cljs.core.nth.call(null,vec__10553,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__10546.call(null,cljs.core.rest.call(null,s__10547__$2)));
} else
{{
var G__10572 = cljs.core.rest.call(null,s__10547__$2);
s__10547__$1 = G__10572;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__10528,in_QMARK_,c__4283__auto__,size__4284__auto__,b__10529,s__10527__$2,temp__4126__auto__,ks__$1,validate__5368__auto__,ufv___10562,output_schema10484_10563,input_schema10485_10564,input_checker10486_10565,output_checker10487_10566))
,null,null));
});})(i__10528,in_QMARK_,c__4283__auto__,size__4284__auto__,b__10529,s__10527__$2,temp__4126__auto__,ks__$1,validate__5368__auto__,ufv___10562,output_schema10484_10563,input_schema10485_10564,input_checker10486_10565,output_checker10487_10566))
;return iter__4285__auto__.call(null,s);
})()));
{
var G__10573 = (i__10528 + (1));
i__10528 = G__10573;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10529),iter__10526.call(null,cljs.core.chunk_rest.call(null,s__10527__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10529),null);
}
} else
{var in_QMARK_ = cljs.core.first.call(null,s__10527__$2);return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4285__auto__ = ((function (in_QMARK_,s__10527__$2,temp__4126__auto__,ks__$1,validate__5368__auto__,ufv___10562,output_schema10484_10563,input_schema10485_10564,input_checker10486_10565,output_checker10487_10566){
return (function iter__10554(s__10555){return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__10527__$2,temp__4126__auto__,ks__$1,validate__5368__auto__,ufv___10562,output_schema10484_10563,input_schema10485_10564,input_checker10486_10565,output_checker10487_10566){
return (function (){var s__10555__$1 = s__10555;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__10555__$1);if(temp__4126__auto____$1)
{var s__10555__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__10555__$2))
{var c__4283__auto__ = cljs.core.chunk_first.call(null,s__10555__$2);var size__4284__auto__ = cljs.core.count.call(null,c__4283__auto__);var b__10557 = cljs.core.chunk_buffer.call(null,size__4284__auto__);if((function (){var i__10556 = (0);while(true){
if((i__10556 < size__4284__auto__))
{var vec__10560 = cljs.core._nth.call(null,c__4283__auto__,i__10556);var k = cljs.core.nth.call(null,vec__10560,(0),null);var v = cljs.core.nth.call(null,vec__10560,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__10557,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__10574 = (i__10556 + (1));
i__10556 = G__10574;
continue;
}
} else
{{
var G__10575 = (i__10556 + (1));
i__10556 = G__10575;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10557),iter__10554.call(null,cljs.core.chunk_rest.call(null,s__10555__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10557),null);
}
} else
{var vec__10561 = cljs.core.first.call(null,s__10555__$2);var k = cljs.core.nth.call(null,vec__10561,(0),null);var v = cljs.core.nth.call(null,vec__10561,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__10554.call(null,cljs.core.rest.call(null,s__10555__$2)));
} else
{{
var G__10576 = cljs.core.rest.call(null,s__10555__$2);
s__10555__$1 = G__10576;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(in_QMARK_,s__10527__$2,temp__4126__auto__,ks__$1,validate__5368__auto__,ufv___10562,output_schema10484_10563,input_schema10485_10564,input_checker10486_10565,output_checker10487_10566))
,null,null));
});})(in_QMARK_,s__10527__$2,temp__4126__auto__,ks__$1,validate__5368__auto__,ufv___10562,output_schema10484_10563,input_schema10485_10564,input_checker10486_10565,output_checker10487_10566))
;return iter__4285__auto__.call(null,s);
})()),iter__10526.call(null,cljs.core.rest.call(null,s__10527__$2)));
}
} else
{return null;
}
break;
}
});})(ks__$1,validate__5368__auto__,ufv___10562,output_schema10484_10563,input_schema10485_10564,input_checker10486_10565,output_checker10487_10566))
,null,null));
});})(ks__$1,validate__5368__auto__,ufv___10562,output_schema10484_10563,input_schema10485_10564,input_checker10486_10565,output_checker10487_10566))
;return iter__4285__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();if(cljs.core.truth_(validate__5368__auto__))
{var temp__4126__auto___10577 = output_checker10487_10566.call(null,o__5371__auto__);if(cljs.core.truth_(temp__4126__auto___10577))
{var error__5370__auto___10578 = temp__4126__auto___10577;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__5370__auto___10578)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema10484_10563,new cljs.core.Keyword(null,"value","value",305978217),o__5371__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5370__auto___10578], null));
} else
{}
} else
{}
return o__5371__auto__;
});})(ufv___10562,output_schema10484_10563,input_schema10485_10564,input_checker10486_10565,output_checker10487_10566))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema10484_10563,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema10485_10564], null)));
var ufv___10609 = schema.utils.use_fn_validation;var output_schema10579_10610 = plumbing.fnk.schema.GraphIOSchemata;var input_schema10580_10611 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker10581_10612 = schema.core.checker.call(null,input_schema10580_10611);var output_checker10582_10613 = schema.core.checker.call(null,output_schema10579_10610);/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___10609,output_schema10579_10610,input_schema10580_10611,input_checker10581_10612,output_checker10582_10613){
return (function sequence_schemata(G__10583,G__10584){var validate__5368__auto__ = ufv___10609.get_cell();if(cljs.core.truth_(validate__5368__auto__))
{var args__5369__auto___10614 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__10583,G__10584], null);var temp__4126__auto___10615 = input_checker10581_10612.call(null,args__5369__auto___10614);if(cljs.core.truth_(temp__4126__auto___10615))
{var error__5370__auto___10616 = temp__4126__auto___10615;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__5370__auto___10616)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema10580_10611,new cljs.core.Keyword(null,"value","value",305978217),args__5369__auto___10614,new cljs.core.Keyword(null,"error","error",-978969032),error__5370__auto___10616], null));
} else
{}
} else
{}
var o__5371__auto__ = (function (){var G__10600 = G__10583;var vec__10602 = G__10600;var i1 = cljs.core.nth.call(null,vec__10602,(0),null);var o1 = cljs.core.nth.call(null,vec__10602,(1),null);var G__10601 = G__10584;var vec__10603 = G__10601;var k = cljs.core.nth.call(null,vec__10603,(0),null);var vec__10604 = cljs.core.nth.call(null,vec__10603,(1),null);var i2 = cljs.core.nth.call(null,vec__10604,(0),null);var o2 = cljs.core.nth.call(null,vec__10604,(1),null);var G__10600__$1 = G__10600;var G__10601__$1 = G__10601;while(true){
var vec__10605 = G__10600__$1;var i1__$1 = cljs.core.nth.call(null,vec__10605,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__10605,(1),null);var vec__10606 = G__10601__$1;var k__$1 = cljs.core.nth.call(null,vec__10606,(0),null);var vec__10607 = cljs.core.nth.call(null,vec__10606,(1),null);var i2__$1 = cljs.core.nth.call(null,vec__10607,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__10607,(1),null);if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1)))
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
var vec__10608 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));var used = cljs.core.nth.call(null,vec__10608,(0),null);var unused = cljs.core.nth.call(null,vec__10608,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();if(cljs.core.truth_(validate__5368__auto__))
{var temp__4126__auto___10617 = output_checker10582_10613.call(null,o__5371__auto__);if(cljs.core.truth_(temp__4126__auto___10617))
{var error__5370__auto___10618 = temp__4126__auto___10617;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__5370__auto___10618)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema10579_10610,new cljs.core.Keyword(null,"value","value",305978217),o__5371__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5370__auto___10618], null));
} else
{}
} else
{}
return o__5371__auto__;
});})(ufv___10609,output_schema10579_10610,input_schema10580_10611,input_checker10581_10612,output_checker10582_10613))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema10579_10610,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema10580_10611], null)));

//# sourceMappingURL=schema.js.map