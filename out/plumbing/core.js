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
var G__10900__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__10900 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__10900__delegate.call(this,m,k,f,x1,x2,xs);};
G__10900.cljs$lang$maxFixedArity = 5;
G__10900.cljs$lang$applyTo = (function (arglist__10901){
var m = cljs.core.first(arglist__10901);
arglist__10901 = cljs.core.next(arglist__10901);
var k = cljs.core.first(arglist__10901);
arglist__10901 = cljs.core.next(arglist__10901);
var f = cljs.core.first(arglist__10901);
arglist__10901 = cljs.core.next(arglist__10901);
var x1 = cljs.core.first(arglist__10901);
arglist__10901 = cljs.core.next(arglist__10901);
var x2 = cljs.core.first(arglist__10901);
var xs = cljs.core.rest(arglist__10901);
return G__10900__delegate(m,k,f,x1,x2,xs);
});
G__10900.cljs$core$IFn$_invoke$arity$variadic = G__10900__delegate;
return G__10900;
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
{var m_atom__6875__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__10910_10916 = cljs.core.seq.call(null,m);var chunk__10911_10917 = null;var count__10912_10918 = (0);var i__10913_10919 = (0);while(true){
if((i__10913_10919 < count__10912_10918))
{var vec__10914_10920 = cljs.core._nth.call(null,chunk__10911_10917,i__10913_10919);var k_10921 = cljs.core.nth.call(null,vec__10914_10920,(0),null);var v_10922 = cljs.core.nth.call(null,vec__10914_10920,(1),null);var m10909_10923 = cljs.core.deref.call(null,m_atom__6875__auto__);cljs.core.reset_BANG_.call(null,m_atom__6875__auto__,cljs.core.assoc_BANG_.call(null,m10909_10923,k_10921,f.call(null,v_10922)));
{
var G__10924 = seq__10910_10916;
var G__10925 = chunk__10911_10917;
var G__10926 = count__10912_10918;
var G__10927 = (i__10913_10919 + (1));
seq__10910_10916 = G__10924;
chunk__10911_10917 = G__10925;
count__10912_10918 = G__10926;
i__10913_10919 = G__10927;
continue;
}
} else
{var temp__4126__auto___10928 = cljs.core.seq.call(null,seq__10910_10916);if(temp__4126__auto___10928)
{var seq__10910_10929__$1 = temp__4126__auto___10928;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10910_10929__$1))
{var c__4316__auto___10930 = cljs.core.chunk_first.call(null,seq__10910_10929__$1);{
var G__10931 = cljs.core.chunk_rest.call(null,seq__10910_10929__$1);
var G__10932 = c__4316__auto___10930;
var G__10933 = cljs.core.count.call(null,c__4316__auto___10930);
var G__10934 = (0);
seq__10910_10916 = G__10931;
chunk__10911_10917 = G__10932;
count__10912_10918 = G__10933;
i__10913_10919 = G__10934;
continue;
}
} else
{var vec__10915_10935 = cljs.core.first.call(null,seq__10910_10929__$1);var k_10936 = cljs.core.nth.call(null,vec__10915_10935,(0),null);var v_10937 = cljs.core.nth.call(null,vec__10915_10935,(1),null);var m10909_10938 = cljs.core.deref.call(null,m_atom__6875__auto__);cljs.core.reset_BANG_.call(null,m_atom__6875__auto__,cljs.core.assoc_BANG_.call(null,m10909_10938,k_10936,f.call(null,v_10937)));
{
var G__10939 = cljs.core.next.call(null,seq__10910_10929__$1);
var G__10940 = null;
var G__10941 = (0);
var G__10942 = (0);
seq__10910_10916 = G__10939;
chunk__10911_10917 = G__10940;
count__10912_10918 = G__10941;
i__10913_10919 = G__10942;
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
{var m_atom__6875__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__10951_10957 = cljs.core.seq.call(null,m);var chunk__10952_10958 = null;var count__10953_10959 = (0);var i__10954_10960 = (0);while(true){
if((i__10954_10960 < count__10953_10959))
{var vec__10955_10961 = cljs.core._nth.call(null,chunk__10952_10958,i__10954_10960);var k_10962 = cljs.core.nth.call(null,vec__10955_10961,(0),null);var v_10963 = cljs.core.nth.call(null,vec__10955_10961,(1),null);var m10950_10964 = cljs.core.deref.call(null,m_atom__6875__auto__);cljs.core.reset_BANG_.call(null,m_atom__6875__auto__,cljs.core.assoc_BANG_.call(null,m10950_10964,f.call(null,k_10962),v_10963));
{
var G__10965 = seq__10951_10957;
var G__10966 = chunk__10952_10958;
var G__10967 = count__10953_10959;
var G__10968 = (i__10954_10960 + (1));
seq__10951_10957 = G__10965;
chunk__10952_10958 = G__10966;
count__10953_10959 = G__10967;
i__10954_10960 = G__10968;
continue;
}
} else
{var temp__4126__auto___10969 = cljs.core.seq.call(null,seq__10951_10957);if(temp__4126__auto___10969)
{var seq__10951_10970__$1 = temp__4126__auto___10969;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10951_10970__$1))
{var c__4316__auto___10971 = cljs.core.chunk_first.call(null,seq__10951_10970__$1);{
var G__10972 = cljs.core.chunk_rest.call(null,seq__10951_10970__$1);
var G__10973 = c__4316__auto___10971;
var G__10974 = cljs.core.count.call(null,c__4316__auto___10971);
var G__10975 = (0);
seq__10951_10957 = G__10972;
chunk__10952_10958 = G__10973;
count__10953_10959 = G__10974;
i__10954_10960 = G__10975;
continue;
}
} else
{var vec__10956_10976 = cljs.core.first.call(null,seq__10951_10970__$1);var k_10977 = cljs.core.nth.call(null,vec__10956_10976,(0),null);var v_10978 = cljs.core.nth.call(null,vec__10956_10976,(1),null);var m10950_10979 = cljs.core.deref.call(null,m_atom__6875__auto__);cljs.core.reset_BANG_.call(null,m_atom__6875__auto__,cljs.core.assoc_BANG_.call(null,m10950_10979,f.call(null,k_10977),v_10978));
{
var G__10980 = cljs.core.next.call(null,seq__10951_10970__$1);
var G__10981 = null;
var G__10982 = (0);
var G__10983 = (0);
seq__10951_10957 = G__10980;
chunk__10952_10958 = G__10981;
count__10953_10959 = G__10982;
i__10954_10960 = G__10983;
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
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__6875__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__10990_10994 = cljs.core.seq.call(null,ks);var chunk__10991_10995 = null;var count__10992_10996 = (0);var i__10993_10997 = (0);while(true){
if((i__10993_10997 < count__10992_10996))
{var k_10998 = cljs.core._nth.call(null,chunk__10991_10995,i__10993_10997);var m10989_10999 = cljs.core.deref.call(null,m_atom__6875__auto__);cljs.core.reset_BANG_.call(null,m_atom__6875__auto__,cljs.core.assoc_BANG_.call(null,m10989_10999,k_10998,f.call(null,k_10998)));
{
var G__11000 = seq__10990_10994;
var G__11001 = chunk__10991_10995;
var G__11002 = count__10992_10996;
var G__11003 = (i__10993_10997 + (1));
seq__10990_10994 = G__11000;
chunk__10991_10995 = G__11001;
count__10992_10996 = G__11002;
i__10993_10997 = G__11003;
continue;
}
} else
{var temp__4126__auto___11004 = cljs.core.seq.call(null,seq__10990_10994);if(temp__4126__auto___11004)
{var seq__10990_11005__$1 = temp__4126__auto___11004;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10990_11005__$1))
{var c__4316__auto___11006 = cljs.core.chunk_first.call(null,seq__10990_11005__$1);{
var G__11007 = cljs.core.chunk_rest.call(null,seq__10990_11005__$1);
var G__11008 = c__4316__auto___11006;
var G__11009 = cljs.core.count.call(null,c__4316__auto___11006);
var G__11010 = (0);
seq__10990_10994 = G__11007;
chunk__10991_10995 = G__11008;
count__10992_10996 = G__11009;
i__10993_10997 = G__11010;
continue;
}
} else
{var k_11011 = cljs.core.first.call(null,seq__10990_11005__$1);var m10989_11012 = cljs.core.deref.call(null,m_atom__6875__auto__);cljs.core.reset_BANG_.call(null,m_atom__6875__auto__,cljs.core.assoc_BANG_.call(null,m10989_11012,k_11011,f.call(null,k_11011)));
{
var G__11013 = cljs.core.next.call(null,seq__10990_11005__$1);
var G__11014 = null;
var G__11015 = (0);
var G__11016 = (0);
seq__10990_10994 = G__11013;
chunk__10991_10995 = G__11014;
count__10992_10996 = G__11015;
i__10993_10997 = G__11016;
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
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__6875__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__11023_11027 = cljs.core.seq.call(null,vs);var chunk__11024_11028 = null;var count__11025_11029 = (0);var i__11026_11030 = (0);while(true){
if((i__11026_11030 < count__11025_11029))
{var v_11031 = cljs.core._nth.call(null,chunk__11024_11028,i__11026_11030);var m11022_11032 = cljs.core.deref.call(null,m_atom__6875__auto__);cljs.core.reset_BANG_.call(null,m_atom__6875__auto__,cljs.core.assoc_BANG_.call(null,m11022_11032,f.call(null,v_11031),v_11031));
{
var G__11033 = seq__11023_11027;
var G__11034 = chunk__11024_11028;
var G__11035 = count__11025_11029;
var G__11036 = (i__11026_11030 + (1));
seq__11023_11027 = G__11033;
chunk__11024_11028 = G__11034;
count__11025_11029 = G__11035;
i__11026_11030 = G__11036;
continue;
}
} else
{var temp__4126__auto___11037 = cljs.core.seq.call(null,seq__11023_11027);if(temp__4126__auto___11037)
{var seq__11023_11038__$1 = temp__4126__auto___11037;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11023_11038__$1))
{var c__4316__auto___11039 = cljs.core.chunk_first.call(null,seq__11023_11038__$1);{
var G__11040 = cljs.core.chunk_rest.call(null,seq__11023_11038__$1);
var G__11041 = c__4316__auto___11039;
var G__11042 = cljs.core.count.call(null,c__4316__auto___11039);
var G__11043 = (0);
seq__11023_11027 = G__11040;
chunk__11024_11028 = G__11041;
count__11025_11029 = G__11042;
i__11026_11030 = G__11043;
continue;
}
} else
{var v_11044 = cljs.core.first.call(null,seq__11023_11038__$1);var m11022_11045 = cljs.core.deref.call(null,m_atom__6875__auto__);cljs.core.reset_BANG_.call(null,m_atom__6875__auto__,cljs.core.assoc_BANG_.call(null,m11022_11045,f.call(null,v_11044),v_11044));
{
var G__11046 = cljs.core.next.call(null,seq__11023_11038__$1);
var G__11047 = null;
var G__11048 = (0);
var G__11049 = (0);
seq__11023_11027 = G__11046;
chunk__11024_11028 = G__11047;
count__11025_11029 = G__11048;
i__11026_11030 = G__11049;
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
plumbing.core.dissoc_in = (function dissoc_in(m,p__11050){var vec__11052 = p__11050;var k = cljs.core.nth.call(null,vec__11052,(0),null);var ks = cljs.core.nthnext.call(null,vec__11052,(1));if(cljs.core.truth_(m))
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
{var m_atom__6875__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__11061_11067 = cljs.core.seq.call(null,x);var chunk__11062_11068 = null;var count__11063_11069 = (0);var i__11064_11070 = (0);while(true){
if((i__11064_11070 < count__11063_11069))
{var vec__11065_11071 = cljs.core._nth.call(null,chunk__11062_11068,i__11064_11070);var k_11072 = cljs.core.nth.call(null,vec__11065_11071,(0),null);var v_11073 = cljs.core.nth.call(null,vec__11065_11071,(1),null);var m11060_11074 = cljs.core.deref.call(null,m_atom__6875__auto__);cljs.core.reset_BANG_.call(null,m_atom__6875__auto__,cljs.core.assoc_BANG_.call(null,m11060_11074,((typeof k_11072 === 'string')?cljs.core.keyword.call(null,k_11072):k_11072),keywordize_map.call(null,v_11073)));
{
var G__11075 = seq__11061_11067;
var G__11076 = chunk__11062_11068;
var G__11077 = count__11063_11069;
var G__11078 = (i__11064_11070 + (1));
seq__11061_11067 = G__11075;
chunk__11062_11068 = G__11076;
count__11063_11069 = G__11077;
i__11064_11070 = G__11078;
continue;
}
} else
{var temp__4126__auto___11079 = cljs.core.seq.call(null,seq__11061_11067);if(temp__4126__auto___11079)
{var seq__11061_11080__$1 = temp__4126__auto___11079;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11061_11080__$1))
{var c__4316__auto___11081 = cljs.core.chunk_first.call(null,seq__11061_11080__$1);{
var G__11082 = cljs.core.chunk_rest.call(null,seq__11061_11080__$1);
var G__11083 = c__4316__auto___11081;
var G__11084 = cljs.core.count.call(null,c__4316__auto___11081);
var G__11085 = (0);
seq__11061_11067 = G__11082;
chunk__11062_11068 = G__11083;
count__11063_11069 = G__11084;
i__11064_11070 = G__11085;
continue;
}
} else
{var vec__11066_11086 = cljs.core.first.call(null,seq__11061_11080__$1);var k_11087 = cljs.core.nth.call(null,vec__11066_11086,(0),null);var v_11088 = cljs.core.nth.call(null,vec__11066_11086,(1),null);var m11060_11089 = cljs.core.deref.call(null,m_atom__6875__auto__);cljs.core.reset_BANG_.call(null,m_atom__6875__auto__,cljs.core.assoc_BANG_.call(null,m11060_11089,((typeof k_11087 === 'string')?cljs.core.keyword.call(null,k_11087):k_11087),keywordize_map.call(null,v_11088)));
{
var G__11090 = cljs.core.next.call(null,seq__11061_11080__$1);
var G__11091 = null;
var G__11092 = (0);
var G__11093 = (0);
seq__11061_11067 = G__11090;
chunk__11062_11068 = G__11091;
count__11063_11069 = G__11092;
i__11064_11070 = G__11093;
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
var G__11094 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__11095 = cljs.core.next.call(null,ks);
m = G__11094;
ks = G__11095;
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
})(),(function (){var iter__4285__auto__ = (function iter__11104(s__11105){return (new cljs.core.LazySeq(null,(function (){var s__11105__$1 = s__11105;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11105__$1);if(temp__4126__auto__)
{var s__11105__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__11105__$2))
{var c__4283__auto__ = cljs.core.chunk_first.call(null,s__11105__$2);var size__4284__auto__ = cljs.core.count.call(null,c__4283__auto__);var b__11107 = cljs.core.chunk_buffer.call(null,size__4284__auto__);if((function (){var i__11106 = (0);while(true){
if((i__11106 < size__4284__auto__))
{var vec__11110 = cljs.core._nth.call(null,c__4283__auto__,i__11106);var k = cljs.core.nth.call(null,vec__11110,(0),null);var v = cljs.core.nth.call(null,vec__11110,(1),null);if(cljs.core.truth_(v))
{cljs.core.chunk_append.call(null,b__11107,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__11112 = (i__11106 + (1));
i__11106 = G__11112;
continue;
}
} else
{{
var G__11113 = (i__11106 + (1));
i__11106 = G__11113;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11107),iter__11104.call(null,cljs.core.chunk_rest.call(null,s__11105__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11107),null);
}
} else
{var vec__11111 = cljs.core.first.call(null,s__11105__$2);var k = cljs.core.nth.call(null,vec__11111,(0),null);var v = cljs.core.nth.call(null,vec__11111,(1),null);if(cljs.core.truth_(v))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__11104.call(null,cljs.core.rest.call(null,s__11105__$2)));
} else
{{
var G__11114 = cljs.core.rest.call(null,s__11105__$2);
s__11105__$1 = G__11114;
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
assoc_when.cljs$lang$applyTo = (function (arglist__11115){
var m = cljs.core.first(arglist__11115);
var kvs = cljs.core.rest(arglist__11115);
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
update_in_when.cljs$lang$applyTo = (function (arglist__11116){
var m = cljs.core.first(arglist__11116);
arglist__11116 = cljs.core.next(arglist__11116);
var key_seq = cljs.core.first(arglist__11116);
arglist__11116 = cljs.core.next(arglist__11116);
var f = cljs.core.first(arglist__11116);
var args = cljs.core.rest(arglist__11116);
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
return (function iter__11121(s__11122){return (new cljs.core.LazySeq(null,((function (s){
return (function (){var s__11122__$1 = s__11122;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11122__$1);if(temp__4126__auto__)
{var s__11122__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__11122__$2))
{var c__4283__auto__ = cljs.core.chunk_first.call(null,s__11122__$2);var size__4284__auto__ = cljs.core.count.call(null,c__4283__auto__);var b__11124 = cljs.core.chunk_buffer.call(null,size__4284__auto__);if((function (){var i__11123 = (0);while(true){
if((i__11123 < size__4284__auto__))
{var x = cljs.core._nth.call(null,c__4283__auto__,i__11123);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{cljs.core.chunk_append.call(null,b__11124,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})());
{
var G__11125 = (i__11123 + (1));
i__11123 = G__11125;
continue;
}
} else
{{
var G__11126 = (i__11123 + (1));
i__11123 = G__11126;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11124),iter__11121.call(null,cljs.core.chunk_rest.call(null,s__11122__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11124),null);
}
} else
{var x = cljs.core.first.call(null,s__11122__$2);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{return cljs.core.cons.call(null,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})(),iter__11121.call(null,cljs.core.rest.call(null,s__11122__$2)));
} else
{{
var G__11127 = cljs.core.rest.call(null,s__11122__$2);
s__11122__$1 = G__11127;
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
interleave_all.cljs$lang$applyTo = (function (arglist__11128){
var colls = cljs.core.seq(arglist__11128);
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
var G__11129__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__11130 = conj_when.call(null,coll,x);
var G__11131 = cljs.core.first.call(null,xs);
var G__11132 = cljs.core.next.call(null,xs);
coll = G__11130;
x = G__11131;
xs = G__11132;
continue;
}
} else
{return conj_when.call(null,coll,x);
}
break;
}
};
var G__11129 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__11129__delegate.call(this,coll,x,xs);};
G__11129.cljs$lang$maxFixedArity = 2;
G__11129.cljs$lang$applyTo = (function (arglist__11133){
var coll = cljs.core.first(arglist__11133);
arglist__11133 = cljs.core.next(arglist__11133);
var x = cljs.core.first(arglist__11133);
var xs = cljs.core.rest(arglist__11133);
return G__11129__delegate(coll,x,xs);
});
G__11129.cljs$core$IFn$_invoke$arity$variadic = G__11129__delegate;
return G__11129;
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
var G__11135__delegate = function (a,f,args){return swap_pair_BANG_.call(null,a,(function (p1__11134_SHARP_){return cljs.core.apply.call(null,f,p1__11134_SHARP_,args);
}));
};
var G__11135 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__11135__delegate.call(this,a,f,args);};
G__11135.cljs$lang$maxFixedArity = 2;
G__11135.cljs$lang$applyTo = (function (arglist__11136){
var a = cljs.core.first(arglist__11136);
arglist__11136 = cljs.core.next(arglist__11136);
var f = cljs.core.first(arglist__11136);
var args = cljs.core.rest(arglist__11136);
return G__11135__delegate(a,f,args);
});
G__11135.cljs$core$IFn$_invoke$arity$variadic = G__11135__delegate;
return G__11135;
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
var G__11137__delegate = function (f,arg,args){return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__11137 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__11137__delegate.call(this,f,arg,args);};
G__11137.cljs$lang$maxFixedArity = 2;
G__11137.cljs$lang$applyTo = (function (arglist__11138){
var f = cljs.core.first(arglist__11138);
arglist__11138 = cljs.core.next(arglist__11138);
var arg = cljs.core.first(arglist__11138);
var args = cljs.core.rest(arglist__11138);
return G__11137__delegate(f,arg,args);
});
G__11137.cljs$core$IFn$_invoke$arity$variadic = G__11137__delegate;
return G__11137;
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