// Compiled by ClojureScript 0.0-2322
goog.provide('stratus.core');
goog.require('cljs.core');
goog.require('om_tools.core');
goog.require('om_tools.dom');
goog.require('om_tools.dom');
goog.require('om.core');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
var ufv___10285 = schema.utils.use_fn_validation;var output_schema10273_10286 = schema.core.Any;var input_schema10274_10287 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);var input_checker10275_10288 = schema.core.checker.call(null,input_schema10274_10287);var output_checker10276_10289 = schema.core.checker.call(null,output_schema10273_10286);/**
* Inputs: [data owner]
*/
stratus.core.widget = ((function (ufv___10285,output_schema10273_10286,input_schema10274_10287,input_checker10275_10288,output_checker10276_10289){
return (function widget(G__10277,G__10278){var validate__5368__auto__ = ufv___10285.get_cell();if(cljs.core.truth_(validate__5368__auto__))
{var args__5369__auto___10290 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__10277,G__10278], null);var temp__4126__auto___10291 = input_checker10275_10288.call(null,args__5369__auto___10290);if(cljs.core.truth_(temp__4126__auto___10291))
{var error__5370__auto___10292 = temp__4126__auto___10291;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"widget","widget",786562584,null),cljs.core.pr_str.call(null,error__5370__auto___10292)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema10274_10287,new cljs.core.Keyword(null,"value","value",305978217),args__5369__auto___10290,new cljs.core.Keyword(null,"error","error",-978969032),error__5370__auto___10292], null));
} else
{}
} else
{}
var o__5371__auto__ = (function (){var data = G__10277;var owner = G__10278;while(true){
if(typeof stratus.core.t10282 !== 'undefined')
{} else
{
/**
* @constructor
*/
stratus.core.t10282 = (function (G__10278,owner,data,G__10277,input_schema10274,widget,input_checker10275,validate__5368__auto__,output_checker10276,ufv__,output_schema10273,meta10283){
this.G__10278 = G__10278;
this.owner = owner;
this.data = data;
this.G__10277 = G__10277;
this.input_schema10274 = input_schema10274;
this.widget = widget;
this.input_checker10275 = input_checker10275;
this.validate__5368__auto__ = validate__5368__auto__;
this.output_checker10276 = output_checker10276;
this.ufv__ = ufv__;
this.output_schema10273 = output_schema10273;
this.meta10283 = meta10283;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stratus.core.t10282.cljs$lang$type = true;
stratus.core.t10282.cljs$lang$ctorStr = "stratus.core/t10282";
stratus.core.t10282.cljs$lang$ctorPrWriter = ((function (validate__5368__auto__,ufv___10285,output_schema10273_10286,input_schema10274_10287,input_checker10275_10288,output_checker10276_10289){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"stratus.core/t10282");
});})(validate__5368__auto__,ufv___10285,output_schema10273_10286,input_schema10274_10287,input_checker10275_10288,output_checker10276_10289))
;
stratus.core.t10282.prototype.om$core$IRender$ = true;
stratus.core.t10282.prototype.om$core$IRender$render$arity$1 = ((function (validate__5368__auto__,ufv___10285,output_schema10273_10286,input_schema10274_10287,input_checker10275_10288,output_checker10276_10289){
return (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.apply.call(null,React.DOM.h1,null,cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(self__.data)],null))));
});})(validate__5368__auto__,ufv___10285,output_schema10273_10286,input_schema10274_10287,input_checker10275_10288,output_checker10276_10289))
;
stratus.core.t10282.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__5368__auto__,ufv___10285,output_schema10273_10286,input_schema10274_10287,input_checker10275_10288,output_checker10276_10289){
return (function (_10284){var self__ = this;
var _10284__$1 = this;return self__.meta10283;
});})(validate__5368__auto__,ufv___10285,output_schema10273_10286,input_schema10274_10287,input_checker10275_10288,output_checker10276_10289))
;
stratus.core.t10282.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__5368__auto__,ufv___10285,output_schema10273_10286,input_schema10274_10287,input_checker10275_10288,output_checker10276_10289){
return (function (_10284,meta10283__$1){var self__ = this;
var _10284__$1 = this;return (new stratus.core.t10282(self__.G__10278,self__.owner,self__.data,self__.G__10277,self__.input_schema10274,self__.widget,self__.input_checker10275,self__.validate__5368__auto__,self__.output_checker10276,self__.ufv__,self__.output_schema10273,meta10283__$1));
});})(validate__5368__auto__,ufv___10285,output_schema10273_10286,input_schema10274_10287,input_checker10275_10288,output_checker10276_10289))
;
stratus.core.__GT_t10282 = ((function (validate__5368__auto__,ufv___10285,output_schema10273_10286,input_schema10274_10287,input_checker10275_10288,output_checker10276_10289){
return (function __GT_t10282(G__10278__$1,owner__$1,data__$1,G__10277__$1,input_schema10274__$1,widget__$1,input_checker10275__$1,validate__5368__auto____$1,output_checker10276__$1,ufv____$1,output_schema10273__$1,meta10283){return (new stratus.core.t10282(G__10278__$1,owner__$1,data__$1,G__10277__$1,input_schema10274__$1,widget__$1,input_checker10275__$1,validate__5368__auto____$1,output_checker10276__$1,ufv____$1,output_schema10273__$1,meta10283));
});})(validate__5368__auto__,ufv___10285,output_schema10273_10286,input_schema10274_10287,input_checker10275_10288,output_checker10276_10289))
;
}
return (new stratus.core.t10282(G__10278,owner,data,G__10277,input_schema10274_10287,widget,input_checker10275_10288,validate__5368__auto__,output_checker10276_10289,ufv___10285,output_schema10273_10286,null));
break;
}
})();if(cljs.core.truth_(validate__5368__auto__))
{var temp__4126__auto___10293 = output_checker10276_10289.call(null,o__5371__auto__);if(cljs.core.truth_(temp__4126__auto___10293))
{var error__5370__auto___10294 = temp__4126__auto___10293;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"widget","widget",786562584,null),cljs.core.pr_str.call(null,error__5370__auto___10294)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema10273_10286,new cljs.core.Keyword(null,"value","value",305978217),o__5371__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5370__auto___10294], null));
} else
{}
} else
{}
return o__5371__auto__;
});})(ufv___10285,output_schema10273_10286,input_schema10274_10287,input_checker10275_10288,output_checker10276_10289))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,stratus.core.widget),schema.core.make_fn_schema.call(null,output_schema10273_10286,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema10274_10287], null)));
stratus.core.__GT_widget = (function() {
var __GT_widget = null;
var __GT_widget__1 = (function (cursor__7142__auto__){return om.core.build.call(null,stratus.core.widget,cursor__7142__auto__);
});
var __GT_widget__2 = (function (cursor__7142__auto__,m10272){return om.core.build.call(null,stratus.core.widget,cursor__7142__auto__,m10272);
});
__GT_widget = function(cursor__7142__auto__,m10272){
switch(arguments.length){
case 1:
return __GT_widget__1.call(this,cursor__7142__auto__);
case 2:
return __GT_widget__2.call(this,cursor__7142__auto__,m10272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_widget.cljs$core$IFn$_invoke$arity$1 = __GT_widget__1;
__GT_widget.cljs$core$IFn$_invoke$arity$2 = __GT_widget__2;
return __GT_widget;
})()
;
om.core.root.call(null,stratus.core.widget,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello, world!"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("stratus")], null));

//# sourceMappingURL=core.js.map