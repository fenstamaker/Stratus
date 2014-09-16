// Compiled by ClojureScript 0.0-2322
goog.provide('plumbing.core');
goog.require('cljs.core');
goog.require('plumbing.fnk.schema');
goog.require('plumbing.fnk.schema');
goog.require('schema.utils');
goog.require('schema.utils');
/**
* A sentinel value representing missing portions of the input data.
*/
plumbing.core._PLUS_none_PLUS_ = new cljs.core.Keyword("plumbing.core","missing","plumbing.core/missing",1721767298);
/**
* Updates the value in map m at k with the function f.
* 
* Like update-in, but for updating a single top-level key.
* Any additional args will be passed to f after the value.
* @param {...*} var_args
*/
plumbing.core.update = (function() {
var update = null;
var update__3 = (function (m,k,f){return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k)));
});
var update__4 = (function (m,k,f,x1){return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1));
});
var update__5 = (function (m,k,f,x1,x2){return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1,x2));
});
var update__6 = (function() { 
var G__11115__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__11115 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__11115__delegate.call(this,m,k,f,x1,x2,xs);};
G__11115.cljs$lang$maxFixedArity = 5;
G__11115.cljs$lang$applyTo = (function (arglist__11116){
var m = cljs.core.first(arglist__11116);
arglist__11116 = cljs.core.next(arglist__11116);
var k = cljs.core.first(arglist__11116);
arglist__11116 = cljs.core.next(arglist__11116);
var f = cljs.core.first(arglist__11116);
arglist__11116 = cljs.core.next(arglist__11116);
var x1 = cljs.core.first(arglist__11116);
arglist__11116 = cljs.core.next(arglist__11116);
var x2 = cljs.core.first(arglist__11116);
var xs = cljs.core.rest(arglist__11116);
return G__11115__delegate(m,k,f,x1,x2,xs);
});
G__11115.cljs$core$IFn$_invoke$arity$variadic = G__11115__delegate;
return G__11115;
})()
;
update = function(m,k,f,x1,x2,var_args){
var xs = var_args;
switch(arguments.length){
case 3:
return update__3.call(this,m,k,f);
case 4:
return update__4.call(this,m,k,f,x1);
case 5:
return update__5.call(this,m,k,f,x1,x2);
default:
return update__6.cljs$core$IFn$_invoke$arity$variadic(m,k,f,x1,x2, cljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update.cljs$lang$maxFixedArity = 5;
update.cljs$lang$applyTo = update__6.cljs$lang$applyTo;
update.cljs$core$IFn$_invoke$arity$3 = update__3;
update.cljs$core$IFn$_invoke$arity$4 = update__4;
update.cljs$core$IFn$_invoke$arity$5 = update__5;
update.cljs$core$IFn$_invoke$arity$variadic = update__6.cljs$core$IFn$_invoke$arity$variadic;
return update;
})()
;
/**
* Build map k -> (f v) for [k v] in map, preserving the initial type
*/
plumbing.core.map_vals = (function map_vals(f,m){if(cljs.core.sorted_QMARK_.call(null,m))
{return cljs.core.reduce_kv.call(null,(function (out_m,k,v){return cljs.core.assoc.call(null,out_m,k,f.call(null,v));
}),cljs.core.sorted_map.call(null),m);
} else
{if(cljs.core.map_QMARK_.call(null,m))
{return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){return cljs.core.assoc_BANG_.call(null,out_m,k,f.call(null,v));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else
{var m_atom__6875__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__11125_11131 = cljs.core.seq.call(null,m);var chunk__11126_11132 = null;var count__11127_11133 = (0);var i__11128_11134 = (0);while(true){
if((i__11128_11134 < count__11127_11133))
{var vec__11129_11135 = cljs.core._nth.call(null,chunk__11126_11132,i__11128_11134);var k_11136 = cljs.core.nth.call(null,vec__11129_11135,(0),null);var v_11137 = cljs.core.nth.call(null,vec__11129_11135,(1),null);var m11124_11138 = cljs.core.deref.call(null,m_atom__6875__auto__);cljs.core.reset_BANG_.call(null,m_atom__6875__auto__,cljs.core.assoc_BANG_.call(null,m11124_11138,k_11136,f.call(null,v_11137)));
{
var G__11139 = seq__11125_11131;
var G__11140 = chunk__11126_11132;
var G__11141 = count__11127_11133;
var G__11142 = (i__11128_11134 + (1));
seq__11125_11131 = G__11139;
chunk__11126_11132 = G__11140;
count__11127_11133 = G__11141;
i__11128_11134 = G__11142;
continue;
}
} else
{var temp__4126__auto___11143 = cljs.core.seq.call(null,seq__11125_11131);if(temp__4126__auto___11143)
{var seq__11125_11144__$1 = temp__4126__auto___11143;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11125_11144__$1))
{var c__4316__auto___11145 = cljs.core.chunk_first.call(null,seq__11125_11144__$1);{
var G__11146 = cljs.core.chunk_rest.call(null,seq__11125_11144__$1);
var G__11147 = c__4316__auto___11145;
var G__11148 = cljs.core.count.call(null,c__4316__auto___11145);
var G__11149 = (0);
seq__11125_11131 = G__11146;
chunk__11126_11132 = G__11147;
count__11127_11133 = G__11148;
i__11128_11134 = G__11149;
continue;
}
} else
{var vec__11130_11150 = cljs.core.first.call(null,seq__11125_11144__$1);var k_11151 = cljs.core.nth.call(null,vec__11130_11150,(0),null);var v_11152 = cljs.core.nth.call(null,vec__11130_11150,(1),null);var m11124_11153 = cljs.core.deref.call(null,m_atom__6875__auto__);cljs.core.reset_BANG_.call(null,m_atom__6875__auto__,cljs.core.assoc_BANG_.call(null,m11124_11153,k_11151,f.call(null,v_11152)));
{
var G__11154 = cljs.core.next.call(null,seq__11125_11144__$1);
var G__11155 = null;
var G__11156 = (0);
var G__11157 = (0);
seq__11125_11131 = G__11154;
chunk__11126_11132 = G__11155;
count__11127_11133 = G__11156;
i__11128_11134 = G__11157;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__6875__auto__));

}
}
});
/**
* Build map (f k) -> v for [k v] in map m
*/
plumbing.core.map_keys = (function map_keys(f,m){if(cljs.core.map_QMARK_.call(null,m))
{return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){return cljs.core.assoc_BANG_.call(null,out_m,f.call(null,k),v);
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else
{var m_atom__6875__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__11166_11172 = cljs.core.seq.call(null,m);var chunk__11167_11173 = null;var count__11168_11174 = (0);var i__11169_11175 = (0);while(true){
if((i__11169_11175 < count__11168_11174))
{var vec__11170_11176 = cljs.core._nth.call(null,chunk__11167_11173,i__11169_11175);var k_11177 = cljs.core.nth.call(null,vec__11170_11176,(0),null);var v_11178 = cljs.core.nth.call(null,vec__11170_11176,(1),null);var m11165_11179 = cljs.core.deref.call(null,m_atom__6875__auto__);cljs.core.reset_BANG_.call(null,m_atom__6875__auto__,cljs.core.assoc_BANG_.call(null,m11165_11179,f.call(null,k_11177),v_11178));
{
var G__11180 = seq__11166_11172;
var G__11181 = chunk__11167_11173;
var G__11182 = count__11168_11174;
var G__11183 = (i__11169_11175 + (1));
seq__11166_11172 = G__11180;
chunk__11167_11173 = G__11181;
count__11168_11174 = G__11182;
i__11169_11175 = G__11183;
continue;
}
} else
{var temp__4126__auto___11184 = cljs.core.seq.call(null,seq__11166_11172);if(temp__4126__auto___11184)
{var seq__11166_11185__$1 = temp__4126__auto___11184;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11166_11185__$1))
{var c__4316__auto___11186 = cljs.core.chunk_first.call(null,seq__11166_11185__$1);{
var G__11187 = cljs.core.chunk_rest.call(null,seq__11166_11185__$1);
var G__11188 = c__4316__auto___11186;
var G__11189 = cljs.core.count.call(null,c__4316__auto___11186);
var G__11190 = (0);
seq__11166_11172 = G__11187;
chunk__11167_11173 = G__11188;
count__11168_11174 = G__11189;
i__11169_11175 = G__11190;
continue;
}
} else
{var vec__11171_11191 = cljs.core.first.call(null,seq__11166_11185__$1);var k_11192 = cljs.core.nth.call(null,vec__11171_11191,(0),null);var v_11193 = cljs.core.nth.call(null,vec__11171_11191,(1),null);var m11165_11194 = cljs.core.deref.call(null,m_atom__6875__auto__);cljs.core.reset_BANG_.call(null,m_atom__6875__auto__,cljs.core.assoc_BANG_.call(null,m11165_11194,f.call(null,k_11192),v_11193));
{
var G__11195 = cljs.core.next.call(null,seq__11166_11185__$1);
var G__11196 = null;
var G__11197 = (0);
var G__11198 = (0);
seq__11166_11172 = G__11195;
chunk__11167_11173 = G__11196;
count__11168_11174 = G__11197;
i__11169_11175 = G__11198;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__6875__auto__));
}
});
/**
* Build map k -> (f k) for keys in ks
*/
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__6875__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__11205_11209 = cljs.core.seq.call(null,ks);var chunk__11206_11210 = null;var count__11207_11211 = (0);var i__11208_11212 = (0);while(true){
if((i__11208_11212 < count__11207_11211))
{var k_11213 = cljs.core._nth.call(null,chunk__11206_11210,i__11208_11212);var m11204_11214 = cljs.core.deref.call(null,m_atom__6875__auto__);cljs.core.reset_BANG_.call(null,m_atom__6875__auto__,cljs.core.assoc_BANG_.call(null,m11204_11214,k_11213,f.call(null,k_11213)));
{
var G__11215 = seq__11205_11209;
var G__11216 = chunk__11206_11210;
var G__11217 = count__11207_11211;
var G__11218 = (i__11208_11212 + (1));
seq__11205_11209 = G__11215;
chunk__11206_11210 = G__11216;
count__11207_11211 = G__11217;
i__11208_11212 = G__11218;
continue;
}
} else
{var temp__4126__auto___11219 = cljs.core.seq.call(null,seq__11205_11209);if(temp__4126__auto___11219)
{var seq__11205_11220__$1 = temp__4126__auto___11219;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11205_11220__$1))
{var c__4316__auto___11221 = cljs.core.chunk_first.call(null,seq__11205_11220__$1);{
var G__11222 = cljs.core.chunk_rest.call(null,seq__11205_11220__$1);
var G__11223 = c__4316__auto___11221;
var G__11224 = cljs.core.count.call(null,c__4316__auto___11221);
var G__11225 = (0);
seq__11205_11209 = G__11222;
chunk__11206_11210 = G__11223;
count__11207_11211 = G__11224;
i__11208_11212 = G__11225;
continue;
}
} else
{var k_11226 = cljs.core.first.call(null,seq__11205_11220__$1);var m11204_11227 = cljs.core.deref.call(null,m_atom__6875__auto__);cljs.core.reset_BANG_.call(null,m_atom__6875__auto__,cljs.core.assoc_BANG_.call(null,m11204_11227,k_11226,f.call(null,k_11226)));
{
var G__11228 = cljs.core.next.call(null,seq__11205_11220__$1);
var G__11229 = null;
var G__11230 = (0);
var G__11231 = (0);
seq__11205_11209 = G__11228;
chunk__11206_11210 = G__11229;
count__11207_11211 = G__11230;
i__11208_11212 = G__11231;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__6875__auto__));
});
/**
* Build map (f v) -> v for vals in vs
*/
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__6875__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__11238_11242 = cljs.core.seq.call(null,vs);var chunk__11239_11243 = null;var count__11240_11244 = (0);var i__11241_11245 = (0);while(true){
if((i__11241_11245 < count__11240_11244))
{var v_11246 = cljs.core._nth.call(null,chunk__11239_11243,i__11241_11245);var m11237_11247 = cljs.core.deref.call(null,m_atom__6875__auto__);cljs.core.reset_BANG_.call(null,m_atom__6875__auto__,cljs.core.assoc_BANG_.call(null,m11237_11247,f.call(null,v_11246),v_11246));
{
var G__11248 = seq__11238_11242;
var G__11249 = chunk__11239_11243;
var G__11250 = count__11240_11244;
var G__11251 = (i__11241_11245 + (1));
seq__11238_11242 = G__11248;
chunk__11239_11243 = G__11249;
count__11240_11244 = G__11250;
i__11241_11245 = G__11251;
continue;
}
} else
{var temp__4126__auto___11252 = cljs.core.seq.call(null,seq__11238_11242);if(temp__4126__auto___11252)
{var seq__11238_11253__$1 = temp__4126__auto___11252;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11238_11253__$1))
{var c__4316__auto___11254 = cljs.core.chunk_first.call(null,seq__11238_11253__$1);{
var G__11255 = cljs.core.chunk_rest.call(null,seq__11238_11253__$1);
var G__11256 = c__4316__auto___11254;
var G__11257 = cljs.core.count.call(null,c__4316__auto___11254);
var G__11258 = (0);
seq__11238_11242 = G__11255;
chunk__11239_11243 = G__11256;
count__11240_11244 = G__11257;
i__11241_11245 = G__11258;
continue;
}
} else
{var v_11259 = cljs.core.first.call(null,seq__11238_11253__$1);var m11237_11260 = cljs.core.deref.call(null,m_atom__6875__auto__);cljs.core.reset_BANG_.call(null,m_atom__6875__auto__,cljs.core.assoc_BANG_.call(null,m11237_11260,f.call(null,v_11259),v_11259));
{
var G__11261 = cljs.core.next.call(null,seq__11238_11253__$1);
var G__11262 = null;
var G__11263 = (0);
var G__11264 = (0);
seq__11238_11242 = G__11261;
chunk__11239_11243 = G__11262;
count__11240_11244 = G__11263;
i__11241_11245 = G__11264;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__6875__auto__));
});
/**
* Dissociate this keyseq from m, removing any empty maps created as a result
* (including at the top-level).
*/
plumbing.core.dissoc_in = (function dissoc_in(m,p__11265){var vec__11267 = p__11265;var k = cljs.core.nth.call(null,vec__11267,(0),null);var ks = cljs.core.nthnext.call(null,vec__11267,(1));if(cljs.core.truth_(m))
{var temp__4124__auto__ = (function (){var and__3548__auto__ = ks;if(and__3548__auto__)
{return dissoc_in.call(null,m.call(null,k),ks);
} else
{return and__3548__auto__;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var res = temp__4124__auto__;return cljs.core.assoc.call(null,m,k,res);
} else
{var res = cljs.core.dissoc.call(null,m,k);if(cljs.core.empty_QMARK_.call(null,res))
{return null;
} else
{return res;
}
}
} else
{return null;
}
});
/**
* Recursively convert maps in m (including itself)
* to have keyword keys instead of string
*/
plumbing.core.keywordize_map = (function keywordize_map(x){if(cljs.core.map_QMARK_.call(null,x))
{var m_atom__6875__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__11276_11282 = cljs.core.seq.call(null,x);var chunk__11277_11283 = null;var count__11278_11284 = (0);var i__11279_11285 = (0);while(true){
if((i__11279_11285 < count__11278_11284))
{var vec__11280_11286 = cljs.core._nth.call(null,chunk__11277_11283,i__11279_11285);var k_11287 = cljs.core.nth.call(null,vec__11280_11286,(0),null);var v_11288 = cljs.core.nth.call(null,vec__11280_11286,(1),null);var m11275_11289 = cljs.core.deref.call(null,m_atom__6875__auto__);cljs.core.reset_BANG_.call(null,m_atom__6875__auto__,cljs.core.assoc_BANG_.call(null,m11275_11289,((typeof k_11287 === 'string')?cljs.core.keyword.call(null,k_11287):k_11287),keywordize_map.call(null,v_11288)));
{
var G__11290 = seq__11276_11282;
var G__11291 = chunk__11277_11283;
var G__11292 = count__11278_11284;
var G__11293 = (i__11279_11285 + (1));
seq__11276_11282 = G__11290;
chunk__11277_11283 = G__11291;
count__11278_11284 = G__11292;
i__11279_11285 = G__11293;
continue;
}
} else
{var temp__4126__auto___11294 = cljs.core.seq.call(null,seq__11276_11282);if(temp__4126__auto___11294)
{var seq__11276_11295__$1 = temp__4126__auto___11294;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11276_11295__$1))
{var c__4316__auto___11296 = cljs.core.chunk_first.call(null,seq__11276_11295__$1);{
var G__11297 = cljs.core.chunk_rest.call(null,seq__11276_11295__$1);
var G__11298 = c__4316__auto___11296;
var G__11299 = cljs.core.count.call(null,c__4316__auto___11296);
var G__11300 = (0);
seq__11276_11282 = G__11297;
chunk__11277_11283 = G__11298;
count__11278_11284 = G__11299;
i__11279_11285 = G__11300;
continue;
}
} else
{var vec__11281_11301 = cljs.core.first.call(null,seq__11276_11295__$1);var k_11302 = cljs.core.nth.call(null,vec__11281_11301,(0),null);var v_11303 = cljs.core.nth.call(null,vec__11281_11301,(1),null);var m11275_11304 = cljs.core.deref.call(null,m_atom__6875__auto__);cljs.core.reset_BANG_.call(null,m_atom__6875__auto__,cljs.core.assoc_BANG_.call(null,m11275_11304,((typeof k_11302 === 'string')?cljs.core.keyword.call(null,k_11302):k_11302),keywordize_map.call(null,v_11303)));
{
var G__11305 = cljs.core.next.call(null,seq__11276_11295__$1);
var G__11306 = null;
var G__11307 = (0);
var G__11308 = (0);
seq__11276_11282 = G__11305;
chunk__11277_11283 = G__11306;
count__11278_11284 = G__11307;
i__11279_11285 = G__11308;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__6875__auto__));
} else
{if(cljs.core.seq_QMARK_.call(null,x))
{return cljs.core.map.call(null,keywordize_map,x);
} else
{if(cljs.core.vector_QMARK_.call(null,x))
{return cljs.core.mapv.call(null,keywordize_map,x);
} else
{return x;

}
}
}
});
/**
* Like get but throw an exception if not found
*/
plumbing.core.safe_get = (function safe_get(m,k){var temp__4124__auto__ = cljs.core.find.call(null,m,k);if(cljs.core.truth_(temp__4124__auto__))
{var pair__6944__auto__ = temp__4124__auto__;return cljs.core.val.call(null,pair__6944__auto__);
} else
{var e = schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.mapv.call(null,cljs.core.key,m));throw (new Error(e));
}
});
/**
* Like get-in but throws exception if not found
*/
plumbing.core.safe_get_in = (function safe_get_in(m,ks){while(true){
if(cljs.core.seq.call(null,ks))
{{
var G__11309 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__11310 = cljs.core.next.call(null,ks);
m = G__11309;
ks = G__11310;
continue;
}
} else
{return m;
}
break;
}
});
/**
* Like assoc but only assocs when value is truthy
* @param {...*} var_args
*/
plumbing.core.assoc_when = (function() { 
var assoc_when__delegate = function (m,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
return cljs.core.into.call(null,(function (){var or__3560__auto__ = m;if(cljs.core.truth_(or__3560__auto__))
{return or__3560__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__4285__auto__ = (function iter__11319(s__11320){return (new cljs.core.LazySeq(null,(function (){var s__11320__$1 = s__11320;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11320__$1);if(temp__4126__auto__)
{var s__11320__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__11320__$2))
{var c__4283__auto__ = cljs.core.chunk_first.call(null,s__11320__$2);var size__4284__auto__ = cljs.core.count.call(null,c__4283__auto__);var b__11322 = cljs.core.chunk_buffer.call(null,size__4284__auto__);if((function (){var i__11321 = (0);while(true){
if((i__11321 < size__4284__auto__))
{var vec__11325 = cljs.core._nth.call(null,c__4283__auto__,i__11321);var k = cljs.core.nth.call(null,vec__11325,(0),null);var v = cljs.core.nth.call(null,vec__11325,(1),null);if(cljs.core.truth_(v))
{cljs.core.chunk_append.call(null,b__11322,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__11327 = (i__11321 + (1));
i__11321 = G__11327;
continue;
}
} else
{{
var G__11328 = (i__11321 + (1));
i__11321 = G__11328;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11322),iter__11319.call(null,cljs.core.chunk_rest.call(null,s__11320__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11322),null);
}
} else
{var vec__11326 = cljs.core.first.call(null,s__11320__$2);var k = cljs.core.nth.call(null,vec__11326,(0),null);var v = cljs.core.nth.call(null,vec__11326,(1),null);if(cljs.core.truth_(v))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__11319.call(null,cljs.core.rest.call(null,s__11320__$2)));
} else
{{
var G__11329 = cljs.core.rest.call(null,s__11320__$2);
s__11320__$1 = G__11329;
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
});return iter__4285__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
};
var assoc_when = function (m,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return assoc_when__delegate.call(this,m,kvs);};
assoc_when.cljs$lang$maxFixedArity = 1;
assoc_when.cljs$lang$applyTo = (function (arglist__11330){
var m = cljs.core.first(arglist__11330);
var kvs = cljs.core.rest(arglist__11330);
return assoc_when__delegate(m,kvs);
});
assoc_when.cljs$core$IFn$_invoke$arity$variadic = assoc_when__delegate;
return assoc_when;
})()
;
/**
* Like update-in but returns m unchanged if key-seq is not present.
* @param {...*} var_args
*/
plumbing.core.update_in_when = (function() { 
var update_in_when__delegate = function (m,key_seq,f,args){var found = cljs.core.get_in.call(null,m,key_seq,plumbing.core._PLUS_none_PLUS_);if(!((plumbing.core._PLUS_none_PLUS_ === found)))
{return cljs.core.assoc_in.call(null,m,key_seq,cljs.core.apply.call(null,f,found,args));
} else
{return m;
}
};
var update_in_when = function (m,key_seq,f,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return update_in_when__delegate.call(this,m,key_seq,f,args);};
update_in_when.cljs$lang$maxFixedArity = 3;
update_in_when.cljs$lang$applyTo = (function (arglist__11331){
var m = cljs.core.first(arglist__11331);
arglist__11331 = cljs.core.next(arglist__11331);
var key_seq = cljs.core.first(arglist__11331);
arglist__11331 = cljs.core.next(arglist__11331);
var f = cljs.core.first(arglist__11331);
var args = cljs.core.rest(arglist__11331);
return update_in_when__delegate(m,key_seq,f,args);
});
update_in_when.cljs$core$IFn$_invoke$arity$variadic = update_in_when__delegate;
return update_in_when;
})()
;
/**
* Like group-by, but accepts a map-fn that is applied to values before
* collected.
*/
plumbing.core.grouped_map = (function grouped_map(key_fn,map_fn,coll){return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (ret,x){var k = key_fn.call(null,x);return cljs.core.assoc_BANG_.call(null,ret,k,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k,cljs.core.PersistentVector.EMPTY),map_fn.call(null,x)));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
* Like (apply concat s) but lazier (and shorter)
*/
plumbing.core.aconcat = (function aconcat(s){return cljs.core.concat.call(null,(new cljs.core.LazySeq(null,(function (){return cljs.core.first.call(null,s);
}),null,null)),(new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.next.call(null,s);if(temp__4126__auto__)
{var n = temp__4126__auto__;return aconcat.call(null,n);
} else
{return null;
}
}),null,null)));
});
/**
* Takes a seqable and returns a lazy sequence that
* is maximally lazy and doesn't realize elements due to either
* chunking or apply.
* 
* Useful when you don't want chunking, for instance,
* (first awesome-website? (map slurp +a-bunch-of-urls+))
* may slurp up to 31 unneed webpages, wherease
* (first awesome-website? (map slurp (unchunk +a-bunch-of-urls+)))
* is guaranteed to stop slurping after the first awesome website.
* 
* Taken from http://stackoverflow.com/questions/3407876/how-do-i-avoid-clojures-chunking-behavior-for-lazy-seqs-that-i-want-to-short-ci
*/
plumbing.core.unchunk = (function unchunk(s){if(cljs.core.seq.call(null,s))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s),(new cljs.core.LazySeq(null,(function (){return unchunk.call(null,cljs.core.rest.call(null,s));
}),null,null)));
} else
{return null;
}
});
/**
* Return sum of (f x) for each x in xs
*/
plumbing.core.sum = (function() {
var sum = null;
var sum__1 = (function (xs){return cljs.core.reduce.call(null,cljs.core._PLUS_,xs);
});
var sum__2 = (function (f,xs){return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,f,xs));
});
sum = function(f,xs){
switch(arguments.length){
case 1:
return sum__1.call(this,f);
case 2:
return sum__2.call(this,f,xs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sum.cljs$core$IFn$_invoke$arity$1 = sum__1;
sum.cljs$core$IFn$_invoke$arity$2 = sum__2;
return sum;
})()
;
/**
* returns (first xs) when xs has only 1 element
*/
plumbing.core.singleton = (function singleton(xs){var temp__4126__auto__ = cljs.core.seq.call(null,xs);if(temp__4126__auto__)
{var xs__$1 = temp__4126__auto__;if(cljs.core.next.call(null,xs__$1))
{return null;
} else
{return cljs.core.first.call(null,xs__$1);
}
} else
{return null;
}
});
/**
* Returns [idx x] for x in seqable s
*/
plumbing.core.indexed = (function indexed(s){return cljs.core.map_indexed.call(null,cljs.core.vector,s);
});
/**
* Returns indices idx of sequence s where (f (nth s idx))
*/
plumbing.core.positions = (function positions(f,s){return cljs.core.keep_indexed.call(null,(function (i,x){if(cljs.core.truth_(f.call(null,x)))
{return i;
} else
{return null;
}
}),s);
});
/**
* Returns elements of xs which return unique
* values according to f. If multiple elements of xs return the same
* value under f, the first is returned
*/
plumbing.core.distinct_by = (function distinct_by(f,xs){var s = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);var iter__4285__auto__ = ((function (s){
return (function iter__11336(s__11337){return (new cljs.core.LazySeq(null,((function (s){
return (function (){var s__11337__$1 = s__11337;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11337__$1);if(temp__4126__auto__)
{var s__11337__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__11337__$2))
{var c__4283__auto__ = cljs.core.chunk_first.call(null,s__11337__$2);var size__4284__auto__ = cljs.core.count.call(null,c__4283__auto__);var b__11339 = cljs.core.chunk_buffer.call(null,size__4284__auto__);if((function (){var i__11338 = (0);while(true){
if((i__11338 < size__4284__auto__))
{var x = cljs.core._nth.call(null,c__4283__auto__,i__11338);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{cljs.core.chunk_append.call(null,b__11339,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})());
{
var G__11340 = (i__11338 + (1));
i__11338 = G__11340;
continue;
}
} else
{{
var G__11341 = (i__11338 + (1));
i__11338 = G__11341;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11339),iter__11336.call(null,cljs.core.chunk_rest.call(null,s__11337__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11339),null);
}
} else
{var x = cljs.core.first.call(null,s__11337__$2);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{return cljs.core.cons.call(null,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})(),iter__11336.call(null,cljs.core.rest.call(null,s__11337__$2)));
} else
{{
var G__11342 = cljs.core.rest.call(null,s__11337__$2);
s__11337__$1 = G__11342;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s))
,null,null));
});})(s))
;return iter__4285__auto__.call(null,xs);
});
/**
* Analogy: partition:partition-all :: interleave:interleave-all
* @param {...*} var_args
*/
plumbing.core.interleave_all = (function() { 
var interleave_all__delegate = function (colls){return (new cljs.core.LazySeq(null,(function (){return (function helper(seqs){if(cljs.core.seq.call(null,seqs))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,seqs),(new cljs.core.LazySeq(null,(function (){return helper.call(null,cljs.core.keep.call(null,cljs.core.next,seqs));
}),null,null)));
} else
{return null;
}
}).call(null,cljs.core.keep.call(null,cljs.core.seq,colls));
}),null,null));
};
var interleave_all = function (var_args){
var colls = null;if (arguments.length > 0) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return interleave_all__delegate.call(this,colls);};
interleave_all.cljs$lang$maxFixedArity = 0;
interleave_all.cljs$lang$applyTo = (function (arglist__11343){
var colls = cljs.core.seq(arglist__11343);
return interleave_all__delegate(colls);
});
interleave_all.cljs$core$IFn$_invoke$arity$variadic = interleave_all__delegate;
return interleave_all;
})()
;
/**
* Returns # of elements of xs where pred holds
*/
plumbing.core.count_when = (function count_when(pred,xs){return cljs.core.count.call(null,cljs.core.filter.call(null,pred,xs));
});
/**
* Like conj but ignores non-truthy values
* @param {...*} var_args
*/
plumbing.core.conj_when = (function() {
var conj_when = null;
var conj_when__2 = (function (coll,x){if(cljs.core.truth_(x))
{return cljs.core.conj.call(null,coll,x);
} else
{return coll;
}
});
var conj_when__3 = (function() { 
var G__11344__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__11345 = conj_when.call(null,coll,x);
var G__11346 = cljs.core.first.call(null,xs);
var G__11347 = cljs.core.next.call(null,xs);
coll = G__11345;
x = G__11346;
xs = G__11347;
continue;
}
} else
{return conj_when.call(null,coll,x);
}
break;
}
};
var G__11344 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__11344__delegate.call(this,coll,x,xs);};
G__11344.cljs$lang$maxFixedArity = 2;
G__11344.cljs$lang$applyTo = (function (arglist__11348){
var coll = cljs.core.first(arglist__11348);
arglist__11348 = cljs.core.next(arglist__11348);
var x = cljs.core.first(arglist__11348);
var xs = cljs.core.rest(arglist__11348);
return G__11344__delegate(coll,x,xs);
});
G__11344.cljs$core$IFn$_invoke$arity$variadic = G__11344__delegate;
return G__11344;
})()
;
conj_when = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj_when__2.call(this,coll,x);
default:
return conj_when__3.cljs$core$IFn$_invoke$arity$variadic(coll,x, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
conj_when.cljs$lang$maxFixedArity = 2;
conj_when.cljs$lang$applyTo = conj_when__3.cljs$lang$applyTo;
conj_when.cljs$core$IFn$_invoke$arity$2 = conj_when__2;
conj_when.cljs$core$IFn$_invoke$arity$variadic = conj_when__3.cljs$core$IFn$_invoke$arity$variadic;
return conj_when;
})()
;
/**
* Like cons but does nothing if x is non-truthy.
*/
plumbing.core.cons_when = (function cons_when(x,s){if(cljs.core.truth_(x))
{return cljs.core.cons.call(null,x,s);
} else
{return s;
}
});
/**
* Like sort-by, but prefers higher values rather than lower ones.
*/
plumbing.core.rsort_by = cljs.core.comp.call(null,cljs.core.reverse,cljs.core.sort_by);
/**
* Like swap! but returns a pair [old-val new-val]
* @param {...*} var_args
*/
plumbing.core.swap_pair_BANG_ = (function() {
var swap_pair_BANG_ = null;
var swap_pair_BANG___2 = (function (a,f){while(true){
var old_val = cljs.core.deref.call(null,a);var new_val = f.call(null,old_val);if(cljs.core.compare_and_set_BANG_.call(null,a,old_val,new_val))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_val,new_val], null);
} else
{{
continue;
}
}
break;
}
});
var swap_pair_BANG___3 = (function() { 
var G__11350__delegate = function (a,f,args){return swap_pair_BANG_.call(null,a,(function (p1__11349_SHARP_){return cljs.core.apply.call(null,f,p1__11349_SHARP_,args);
}));
};
var G__11350 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__11350__delegate.call(this,a,f,args);};
G__11350.cljs$lang$maxFixedArity = 2;
G__11350.cljs$lang$applyTo = (function (arglist__11351){
var a = cljs.core.first(arglist__11351);
arglist__11351 = cljs.core.next(arglist__11351);
var f = cljs.core.first(arglist__11351);
var args = cljs.core.rest(arglist__11351);
return G__11350__delegate(a,f,args);
});
G__11350.cljs$core$IFn$_invoke$arity$variadic = G__11350__delegate;
return G__11350;
})()
;
swap_pair_BANG_ = function(a,f,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return swap_pair_BANG___2.call(this,a,f);
default:
return swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic(a,f, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
swap_pair_BANG_.cljs$lang$maxFixedArity = 2;
swap_pair_BANG_.cljs$lang$applyTo = swap_pair_BANG___3.cljs$lang$applyTo;
swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2 = swap_pair_BANG___2;
swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic = swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return swap_pair_BANG_;
})()
;
/**
* Like reset! but returns old-val
*/
plumbing.core.get_and_set_BANG_ = (function get_and_set_BANG_(a,new_val){return cljs.core.first.call(null,plumbing.core.swap_pair_BANG_.call(null,a,cljs.core.constantly.call(null,new_val)));
});
plumbing.core.millis = (function millis(){return (new Date()).getTime();
});
/**
* Like apply, but applies a map to a function with positional map
* arguments. Can take optional initial args just like apply.
* @param {...*} var_args
*/
plumbing.core.mapply = (function() {
var mapply = null;
var mapply__2 = (function (f,m){return cljs.core.apply.call(null,f,cljs.core.apply.call(null,cljs.core.concat,m));
});
var mapply__3 = (function() { 
var G__11352__delegate = function (f,arg,args){return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__11352 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__11352__delegate.call(this,f,arg,args);};
G__11352.cljs$lang$maxFixedArity = 2;
G__11352.cljs$lang$applyTo = (function (arglist__11353){
var f = cljs.core.first(arglist__11353);
arglist__11353 = cljs.core.next(arglist__11353);
var arg = cljs.core.first(arglist__11353);
var args = cljs.core.rest(arglist__11353);
return G__11352__delegate(f,arg,args);
});
G__11352.cljs$core$IFn$_invoke$arity$variadic = G__11352__delegate;
return G__11352;
})()
;
mapply = function(f,arg,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return mapply__2.call(this,f,arg);
default:
return mapply__3.cljs$core$IFn$_invoke$arity$variadic(f,arg, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapply.cljs$lang$maxFixedArity = 2;
mapply.cljs$lang$applyTo = mapply__3.cljs$lang$applyTo;
mapply.cljs$core$IFn$_invoke$arity$2 = mapply__2;
mapply.cljs$core$IFn$_invoke$arity$variadic = mapply__3.cljs$core$IFn$_invoke$arity$variadic;
return mapply;
})()
;

//# sourceMappingURL=core.js.map