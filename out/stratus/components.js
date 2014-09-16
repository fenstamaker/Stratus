// Compiled by ClojureScript 0.0-2322
goog.provide('stratus.components');
goog.require('cljs.core');
goog.require('stratus.input');
goog.require('stratus.input');
goog.require('om_tools.core');
goog.require('om_tools.dom');
goog.require('om_tools.dom');
goog.require('om.core');
goog.require('om.core');
stratus.components.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"number","number",1570378438),(1),new cljs.core.Keyword(null,"article","article",-21685045),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"text","text",-1790561697),"Welcome to Stratus"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"text","text",-1790561697),"Hello, world!"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"text","text",-1790561697),"This is a new Paragraph."], null)], null)], null));
stratus.components.states = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,stratus.components.app_state)], null));
stratus.components.set_input_focus = (function set_input_focus(){return document.getElementById("inputField").focus();
});
var ufv___10286 = schema.utils.use_fn_validation;var output_schema10274_10287 = schema.core.Any;var input_schema10275_10288 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);var input_checker10276_10289 = schema.core.checker.call(null,input_schema10275_10288);var output_checker10277_10290 = schema.core.checker.call(null,output_schema10274_10287);/**
* Inputs: [data owner]
*/
stratus.components.input = ((function (ufv___10286,output_schema10274_10287,input_schema10275_10288,input_checker10276_10289,output_checker10277_10290){
return (function input(G__10278,G__10279){var validate__5368__auto__ = ufv___10286.get_cell();if(cljs.core.truth_(validate__5368__auto__))
{var args__5369__auto___10291 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__10278,G__10279], null);var temp__4126__auto___10292 = input_checker10276_10289.call(null,args__5369__auto___10291);if(cljs.core.truth_(temp__4126__auto___10292))
{var error__5370__auto___10293 = temp__4126__auto___10292;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"input","input",-2097503808,null),cljs.core.pr_str.call(null,error__5370__auto___10293)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema10275_10288,new cljs.core.Keyword(null,"value","value",305978217),args__5369__auto___10291,new cljs.core.Keyword(null,"error","error",-978969032),error__5370__auto___10293], null));
} else
{}
} else
{}
var o__5371__auto__ = (function (){var data = G__10278;var owner = G__10279;while(true){
if(typeof stratus.components.t10283 !== 'undefined')
{} else
{
/**
* @constructor
*/
stratus.components.t10283 = (function (input,G__10278,owner,G__10279,data,input_checker10276,input_schema10275,output_schema10274,validate__5368__auto__,ufv__,output_checker10277,meta10284){
this.input = input;
this.G__10278 = G__10278;
this.owner = owner;
this.G__10279 = G__10279;
this.data = data;
this.input_checker10276 = input_checker10276;
this.input_schema10275 = input_schema10275;
this.output_schema10274 = output_schema10274;
this.validate__5368__auto__ = validate__5368__auto__;
this.ufv__ = ufv__;
this.output_checker10277 = output_checker10277;
this.meta10284 = meta10284;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stratus.components.t10283.cljs$lang$type = true;
stratus.components.t10283.cljs$lang$ctorStr = "stratus.components/t10283";
stratus.components.t10283.cljs$lang$ctorPrWriter = ((function (validate__5368__auto__,ufv___10286,output_schema10274_10287,input_schema10275_10288,input_checker10276_10289,output_checker10277_10290){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"stratus.components/t10283");
});})(validate__5368__auto__,ufv___10286,output_schema10274_10287,input_schema10275_10288,input_checker10276_10289,output_checker10277_10290))
;
stratus.components.t10283.prototype.om$core$IRenderState$ = true;
stratus.components.t10283.prototype.om$core$IRenderState$render_state$arity$2 = ((function (validate__5368__auto__,ufv___10286,output_schema10274_10287,input_schema10275_10288,input_checker10276_10289,output_checker10277_10290){
return (function (this$,state){var self__ = this;
var this$__$1 = this;return om.dom.input.call(null,{"onBlur": om_tools.dom.format_opts.call(null,((function (this$__$1,validate__5368__auto__,ufv___10286,output_schema10274_10287,input_schema10275_10288,input_checker10276_10289,output_checker10277_10290){
return (function (event){return setTimeout(stratus.components.set_input_focus,(10));
});})(this$__$1,validate__5368__auto__,ufv___10286,output_schema10274_10287,input_schema10275_10288,input_checker10276_10289,output_checker10277_10290))
), "onKeyDown": om_tools.dom.format_opts.call(null,((function (this$__$1,validate__5368__auto__,ufv___10286,output_schema10274_10287,input_schema10275_10288,input_checker10276_10289,output_checker10277_10290){
return (function (event){return stratus.input.handle_special_input.call(null,stratus.components.app_state,event,self__.owner);
});})(this$__$1,validate__5368__auto__,ufv___10286,output_schema10274_10287,input_schema10275_10288,input_checker10276_10289,output_checker10277_10290))
), "onChange": om_tools.dom.format_opts.call(null,((function (this$__$1,validate__5368__auto__,ufv___10286,output_schema10274_10287,input_schema10275_10288,input_checker10276_10289,output_checker10277_10290){
return (function (event){return stratus.input.handle_text_input.call(null,stratus.components.app_state,event,self__.owner);
});})(this$__$1,validate__5368__auto__,ufv___10286,output_schema10274_10287,input_schema10275_10288,input_checker10276_10289,output_checker10277_10290))
), "id": "inputField", "value": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(state))},null);
});})(validate__5368__auto__,ufv___10286,output_schema10274_10287,input_schema10275_10288,input_checker10276_10289,output_checker10277_10290))
;
stratus.components.t10283.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__5368__auto__,ufv___10286,output_schema10274_10287,input_schema10275_10288,input_checker10276_10289,output_checker10277_10290){
return (function (_10285){var self__ = this;
var _10285__$1 = this;return self__.meta10284;
});})(validate__5368__auto__,ufv___10286,output_schema10274_10287,input_schema10275_10288,input_checker10276_10289,output_checker10277_10290))
;
stratus.components.t10283.prototype.cljs$core$IMeta$init_state$arity$1 = ((function (validate__5368__auto__,ufv___10286,output_schema10274_10287,input_schema10275_10288,input_checker10276_10289,output_checker10277_10290){
return (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),""], null);
});})(validate__5368__auto__,ufv___10286,output_schema10274_10287,input_schema10275_10288,input_checker10276_10289,output_checker10277_10290))
;
stratus.components.t10283.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__5368__auto__,ufv___10286,output_schema10274_10287,input_schema10275_10288,input_checker10276_10289,output_checker10277_10290){
return (function (_10285,meta10284__$1){var self__ = this;
var _10285__$1 = this;return (new stratus.components.t10283(self__.input,self__.G__10278,self__.owner,self__.G__10279,self__.data,self__.input_checker10276,self__.input_schema10275,self__.output_schema10274,self__.validate__5368__auto__,self__.ufv__,self__.output_checker10277,meta10284__$1));
});})(validate__5368__auto__,ufv___10286,output_schema10274_10287,input_schema10275_10288,input_checker10276_10289,output_checker10277_10290))
;
stratus.components.__GT_t10283 = ((function (validate__5368__auto__,ufv___10286,output_schema10274_10287,input_schema10275_10288,input_checker10276_10289,output_checker10277_10290){
return (function __GT_t10283(input__$1,G__10278__$1,owner__$1,G__10279__$1,data__$1,input_checker10276__$1,input_schema10275__$1,output_schema10274__$1,validate__5368__auto____$1,ufv____$1,output_checker10277__$1,meta10284){return (new stratus.components.t10283(input__$1,G__10278__$1,owner__$1,G__10279__$1,data__$1,input_checker10276__$1,input_schema10275__$1,output_schema10274__$1,validate__5368__auto____$1,ufv____$1,output_checker10277__$1,meta10284));
});})(validate__5368__auto__,ufv___10286,output_schema10274_10287,input_schema10275_10288,input_checker10276_10289,output_checker10277_10290))
;
}
return (new stratus.components.t10283(input,G__10278,owner,G__10279,data,input_checker10276_10289,input_schema10275_10288,output_schema10274_10287,validate__5368__auto__,ufv___10286,output_checker10277_10290,null));
break;
}
})();if(cljs.core.truth_(validate__5368__auto__))
{var temp__4126__auto___10294 = output_checker10277_10290.call(null,o__5371__auto__);if(cljs.core.truth_(temp__4126__auto___10294))
{var error__5370__auto___10295 = temp__4126__auto___10294;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"input","input",-2097503808,null),cljs.core.pr_str.call(null,error__5370__auto___10295)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema10274_10287,new cljs.core.Keyword(null,"value","value",305978217),o__5371__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5370__auto___10295], null));
} else
{}
} else
{}
return o__5371__auto__;
});})(ufv___10286,output_schema10274_10287,input_schema10275_10288,input_checker10276_10289,output_checker10277_10290))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,stratus.components.input),schema.core.make_fn_schema.call(null,output_schema10274_10287,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema10275_10288], null)));
stratus.components.__GT_input = (function() {
var __GT_input = null;
var __GT_input__1 = (function (cursor__7142__auto__){return om.core.build.call(null,stratus.components.input,cursor__7142__auto__);
});
var __GT_input__2 = (function (cursor__7142__auto__,m10273){return om.core.build.call(null,stratus.components.input,cursor__7142__auto__,m10273);
});
__GT_input = function(cursor__7142__auto__,m10273){
switch(arguments.length){
case 1:
return __GT_input__1.call(this,cursor__7142__auto__);
case 2:
return __GT_input__2.call(this,cursor__7142__auto__,m10273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_input.cljs$core$IFn$_invoke$arity$1 = __GT_input__1;
__GT_input.cljs$core$IFn$_invoke$arity$2 = __GT_input__2;
return __GT_input;
})()
;
var ufv___10309 = schema.utils.use_fn_validation;var output_schema10297_10310 = schema.core.Any;var input_schema10298_10311 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);var input_checker10299_10312 = schema.core.checker.call(null,input_schema10298_10311);var output_checker10300_10313 = schema.core.checker.call(null,output_schema10297_10310);/**
* Inputs: [data owner]
*/
stratus.components.span = ((function (ufv___10309,output_schema10297_10310,input_schema10298_10311,input_checker10299_10312,output_checker10300_10313){
return (function span(G__10301,G__10302){var validate__5368__auto__ = ufv___10309.get_cell();if(cljs.core.truth_(validate__5368__auto__))
{var args__5369__auto___10314 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__10301,G__10302], null);var temp__4126__auto___10315 = input_checker10299_10312.call(null,args__5369__auto___10314);if(cljs.core.truth_(temp__4126__auto___10315))
{var error__5370__auto___10316 = temp__4126__auto___10315;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"span","span",-1259562778,null),cljs.core.pr_str.call(null,error__5370__auto___10316)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema10298_10311,new cljs.core.Keyword(null,"value","value",305978217),args__5369__auto___10314,new cljs.core.Keyword(null,"error","error",-978969032),error__5370__auto___10316], null));
} else
{}
} else
{}
var o__5371__auto__ = (function (){var data = G__10301;var owner = G__10302;while(true){
if(typeof stratus.components.t10306 !== 'undefined')
{} else
{
/**
* @constructor
*/
stratus.components.t10306 = (function (G__10302,input_checker10299,owner,span,data,output_schema10297,G__10301,input_schema10298,validate__5368__auto__,output_checker10300,ufv__,meta10307){
this.G__10302 = G__10302;
this.input_checker10299 = input_checker10299;
this.owner = owner;
this.span = span;
this.data = data;
this.output_schema10297 = output_schema10297;
this.G__10301 = G__10301;
this.input_schema10298 = input_schema10298;
this.validate__5368__auto__ = validate__5368__auto__;
this.output_checker10300 = output_checker10300;
this.ufv__ = ufv__;
this.meta10307 = meta10307;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stratus.components.t10306.cljs$lang$type = true;
stratus.components.t10306.cljs$lang$ctorStr = "stratus.components/t10306";
stratus.components.t10306.cljs$lang$ctorPrWriter = ((function (validate__5368__auto__,ufv___10309,output_schema10297_10310,input_schema10298_10311,input_checker10299_10312,output_checker10300_10313){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"stratus.components/t10306");
});})(validate__5368__auto__,ufv___10309,output_schema10297_10310,input_schema10298_10311,input_checker10299_10312,output_checker10300_10313))
;
stratus.components.t10306.prototype.om$core$IRender$ = true;
stratus.components.t10306.prototype.om$core$IRender$render$arity$1 = ((function (validate__5368__auto__,ufv___10309,output_schema10297_10310,input_schema10298_10311,input_checker10299_10312,output_checker10300_10313){
return (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.apply.call(null,React.DOM.span,null,cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[self__.data],null))));
});})(validate__5368__auto__,ufv___10309,output_schema10297_10310,input_schema10298_10311,input_checker10299_10312,output_checker10300_10313))
;
stratus.components.t10306.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__5368__auto__,ufv___10309,output_schema10297_10310,input_schema10298_10311,input_checker10299_10312,output_checker10300_10313){
return (function (_10308){var self__ = this;
var _10308__$1 = this;return self__.meta10307;
});})(validate__5368__auto__,ufv___10309,output_schema10297_10310,input_schema10298_10311,input_checker10299_10312,output_checker10300_10313))
;
stratus.components.t10306.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__5368__auto__,ufv___10309,output_schema10297_10310,input_schema10298_10311,input_checker10299_10312,output_checker10300_10313){
return (function (_10308,meta10307__$1){var self__ = this;
var _10308__$1 = this;return (new stratus.components.t10306(self__.G__10302,self__.input_checker10299,self__.owner,self__.span,self__.data,self__.output_schema10297,self__.G__10301,self__.input_schema10298,self__.validate__5368__auto__,self__.output_checker10300,self__.ufv__,meta10307__$1));
});})(validate__5368__auto__,ufv___10309,output_schema10297_10310,input_schema10298_10311,input_checker10299_10312,output_checker10300_10313))
;
stratus.components.__GT_t10306 = ((function (validate__5368__auto__,ufv___10309,output_schema10297_10310,input_schema10298_10311,input_checker10299_10312,output_checker10300_10313){
return (function __GT_t10306(G__10302__$1,input_checker10299__$1,owner__$1,span__$1,data__$1,output_schema10297__$1,G__10301__$1,input_schema10298__$1,validate__5368__auto____$1,output_checker10300__$1,ufv____$1,meta10307){return (new stratus.components.t10306(G__10302__$1,input_checker10299__$1,owner__$1,span__$1,data__$1,output_schema10297__$1,G__10301__$1,input_schema10298__$1,validate__5368__auto____$1,output_checker10300__$1,ufv____$1,meta10307));
});})(validate__5368__auto__,ufv___10309,output_schema10297_10310,input_schema10298_10311,input_checker10299_10312,output_checker10300_10313))
;
}
return (new stratus.components.t10306(G__10302,input_checker10299_10312,owner,span,data,output_schema10297_10310,G__10301,input_schema10298_10311,validate__5368__auto__,output_checker10300_10313,ufv___10309,null));
break;
}
})();if(cljs.core.truth_(validate__5368__auto__))
{var temp__4126__auto___10317 = output_checker10300_10313.call(null,o__5371__auto__);if(cljs.core.truth_(temp__4126__auto___10317))
{var error__5370__auto___10318 = temp__4126__auto___10317;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"span","span",-1259562778,null),cljs.core.pr_str.call(null,error__5370__auto___10318)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema10297_10310,new cljs.core.Keyword(null,"value","value",305978217),o__5371__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5370__auto___10318], null));
} else
{}
} else
{}
return o__5371__auto__;
});})(ufv___10309,output_schema10297_10310,input_schema10298_10311,input_checker10299_10312,output_checker10300_10313))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,stratus.components.span),schema.core.make_fn_schema.call(null,output_schema10297_10310,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema10298_10311], null)));
stratus.components.__GT_span = (function() {
var __GT_span = null;
var __GT_span__1 = (function (cursor__7142__auto__){return om.core.build.call(null,stratus.components.span,cursor__7142__auto__);
});
var __GT_span__2 = (function (cursor__7142__auto__,m10296){return om.core.build.call(null,stratus.components.span,cursor__7142__auto__,m10296);
});
__GT_span = function(cursor__7142__auto__,m10296){
switch(arguments.length){
case 1:
return __GT_span__1.call(this,cursor__7142__auto__);
case 2:
return __GT_span__2.call(this,cursor__7142__auto__,m10296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_span.cljs$core$IFn$_invoke$arity$1 = __GT_span__1;
__GT_span.cljs$core$IFn$_invoke$arity$2 = __GT_span__2;
return __GT_span;
})()
;
var ufv___10333 = schema.utils.use_fn_validation;var output_schema10321_10334 = schema.core.Any;var input_schema10322_10335 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);var input_checker10323_10336 = schema.core.checker.call(null,input_schema10322_10335);var output_checker10324_10337 = schema.core.checker.call(null,output_schema10321_10334);/**
* Inputs: [data owner]
*/
stratus.components.paragraph = ((function (ufv___10333,output_schema10321_10334,input_schema10322_10335,input_checker10323_10336,output_checker10324_10337){
return (function paragraph(G__10325,G__10326){var validate__5368__auto__ = ufv___10333.get_cell();if(cljs.core.truth_(validate__5368__auto__))
{var args__5369__auto___10338 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__10325,G__10326], null);var temp__4126__auto___10339 = input_checker10323_10336.call(null,args__5369__auto___10338);if(cljs.core.truth_(temp__4126__auto___10339))
{var error__5370__auto___10340 = temp__4126__auto___10339;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"paragraph","paragraph",1937239236,null),cljs.core.pr_str.call(null,error__5370__auto___10340)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema10322_10335,new cljs.core.Keyword(null,"value","value",305978217),args__5369__auto___10338,new cljs.core.Keyword(null,"error","error",-978969032),error__5370__auto___10340], null));
} else
{}
} else
{}
var o__5371__auto__ = (function (){var data = G__10325;var owner = G__10326;while(true){
if(typeof stratus.components.t10330 !== 'undefined')
{} else
{
/**
* @constructor
*/
stratus.components.t10330 = (function (paragraph,owner,data,G__10325,output_checker10324,input_checker10323,output_schema10321,G__10326,input_schema10322,validate__5368__auto__,ufv__,meta10331){
this.paragraph = paragraph;
this.owner = owner;
this.data = data;
this.G__10325 = G__10325;
this.output_checker10324 = output_checker10324;
this.input_checker10323 = input_checker10323;
this.output_schema10321 = output_schema10321;
this.G__10326 = G__10326;
this.input_schema10322 = input_schema10322;
this.validate__5368__auto__ = validate__5368__auto__;
this.ufv__ = ufv__;
this.meta10331 = meta10331;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stratus.components.t10330.cljs$lang$type = true;
stratus.components.t10330.cljs$lang$ctorStr = "stratus.components/t10330";
stratus.components.t10330.cljs$lang$ctorPrWriter = ((function (validate__5368__auto__,ufv___10333,output_schema10321_10334,input_schema10322_10335,input_checker10323_10336,output_checker10324_10337){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"stratus.components/t10330");
});})(validate__5368__auto__,ufv___10333,output_schema10321_10334,input_schema10322_10335,input_checker10323_10336,output_checker10324_10337))
;
stratus.components.t10330.prototype.om$core$IRender$ = true;
stratus.components.t10330.prototype.om$core$IRender$render$arity$1 = ((function (validate__5368__auto__,ufv___10333,output_schema10321_10334,input_schema10322_10335,input_checker10323_10336,output_checker10324_10337){
return (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.apply.call(null,React.DOM.p,null,cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build_all.call(null,stratus.components.span,cljs.core.map.call(null,((function (this$__$1,validate__5368__auto__,ufv___10333,output_schema10321_10334,input_schema10322_10335,input_checker10323_10336,output_checker10324_10337){
return (function (p1__10319_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__10319_SHARP_)+" ");
});})(this$__$1,validate__5368__auto__,ufv___10333,output_schema10321_10334,input_schema10322_10335,input_checker10323_10336,output_checker10324_10337))
,clojure.string.split.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(self__.data),/\s/)))],null))));
});})(validate__5368__auto__,ufv___10333,output_schema10321_10334,input_schema10322_10335,input_checker10323_10336,output_checker10324_10337))
;
stratus.components.t10330.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__5368__auto__,ufv___10333,output_schema10321_10334,input_schema10322_10335,input_checker10323_10336,output_checker10324_10337){
return (function (_10332){var self__ = this;
var _10332__$1 = this;return self__.meta10331;
});})(validate__5368__auto__,ufv___10333,output_schema10321_10334,input_schema10322_10335,input_checker10323_10336,output_checker10324_10337))
;
stratus.components.t10330.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__5368__auto__,ufv___10333,output_schema10321_10334,input_schema10322_10335,input_checker10323_10336,output_checker10324_10337){
return (function (_10332,meta10331__$1){var self__ = this;
var _10332__$1 = this;return (new stratus.components.t10330(self__.paragraph,self__.owner,self__.data,self__.G__10325,self__.output_checker10324,self__.input_checker10323,self__.output_schema10321,self__.G__10326,self__.input_schema10322,self__.validate__5368__auto__,self__.ufv__,meta10331__$1));
});})(validate__5368__auto__,ufv___10333,output_schema10321_10334,input_schema10322_10335,input_checker10323_10336,output_checker10324_10337))
;
stratus.components.__GT_t10330 = ((function (validate__5368__auto__,ufv___10333,output_schema10321_10334,input_schema10322_10335,input_checker10323_10336,output_checker10324_10337){
return (function __GT_t10330(paragraph__$1,owner__$1,data__$1,G__10325__$1,output_checker10324__$1,input_checker10323__$1,output_schema10321__$1,G__10326__$1,input_schema10322__$1,validate__5368__auto____$1,ufv____$1,meta10331){return (new stratus.components.t10330(paragraph__$1,owner__$1,data__$1,G__10325__$1,output_checker10324__$1,input_checker10323__$1,output_schema10321__$1,G__10326__$1,input_schema10322__$1,validate__5368__auto____$1,ufv____$1,meta10331));
});})(validate__5368__auto__,ufv___10333,output_schema10321_10334,input_schema10322_10335,input_checker10323_10336,output_checker10324_10337))
;
}
return (new stratus.components.t10330(paragraph,owner,data,G__10325,output_checker10324_10337,input_checker10323_10336,output_schema10321_10334,G__10326,input_schema10322_10335,validate__5368__auto__,ufv___10333,null));
break;
}
})();if(cljs.core.truth_(validate__5368__auto__))
{var temp__4126__auto___10341 = output_checker10324_10337.call(null,o__5371__auto__);if(cljs.core.truth_(temp__4126__auto___10341))
{var error__5370__auto___10342 = temp__4126__auto___10341;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"paragraph","paragraph",1937239236,null),cljs.core.pr_str.call(null,error__5370__auto___10342)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema10321_10334,new cljs.core.Keyword(null,"value","value",305978217),o__5371__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5370__auto___10342], null));
} else
{}
} else
{}
return o__5371__auto__;
});})(ufv___10333,output_schema10321_10334,input_schema10322_10335,input_checker10323_10336,output_checker10324_10337))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,stratus.components.paragraph),schema.core.make_fn_schema.call(null,output_schema10321_10334,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema10322_10335], null)));
stratus.components.__GT_paragraph = (function() {
var __GT_paragraph = null;
var __GT_paragraph__1 = (function (cursor__7142__auto__){return om.core.build.call(null,stratus.components.paragraph,cursor__7142__auto__);
});
var __GT_paragraph__2 = (function (cursor__7142__auto__,m10320){return om.core.build.call(null,stratus.components.paragraph,cursor__7142__auto__,m10320);
});
__GT_paragraph = function(cursor__7142__auto__,m10320){
switch(arguments.length){
case 1:
return __GT_paragraph__1.call(this,cursor__7142__auto__);
case 2:
return __GT_paragraph__2.call(this,cursor__7142__auto__,m10320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_paragraph.cljs$core$IFn$_invoke$arity$1 = __GT_paragraph__1;
__GT_paragraph.cljs$core$IFn$_invoke$arity$2 = __GT_paragraph__2;
return __GT_paragraph;
})()
;
var ufv___10356 = schema.utils.use_fn_validation;var output_schema10344_10357 = schema.core.Any;var input_schema10345_10358 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);var input_checker10346_10359 = schema.core.checker.call(null,input_schema10345_10358);var output_checker10347_10360 = schema.core.checker.call(null,output_schema10344_10357);/**
* Inputs: [data owner]
*/
stratus.components.title = ((function (ufv___10356,output_schema10344_10357,input_schema10345_10358,input_checker10346_10359,output_checker10347_10360){
return (function title(G__10348,G__10349){var validate__5368__auto__ = ufv___10356.get_cell();if(cljs.core.truth_(validate__5368__auto__))
{var args__5369__auto___10361 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__10348,G__10349], null);var temp__4126__auto___10362 = input_checker10346_10359.call(null,args__5369__auto___10361);if(cljs.core.truth_(temp__4126__auto___10362))
{var error__5370__auto___10363 = temp__4126__auto___10362;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"title","title",-2017930186,null),cljs.core.pr_str.call(null,error__5370__auto___10363)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema10345_10358,new cljs.core.Keyword(null,"value","value",305978217),args__5369__auto___10361,new cljs.core.Keyword(null,"error","error",-978969032),error__5370__auto___10363], null));
} else
{}
} else
{}
var o__5371__auto__ = (function (){var data = G__10348;var owner = G__10349;while(true){
if(typeof stratus.components.t10353 !== 'undefined')
{} else
{
/**
* @constructor
*/
stratus.components.t10353 = (function (owner,G__10349,data,output_schema10344,input_schema10345,input_checker10346,output_checker10347,title,validate__5368__auto__,ufv__,G__10348,meta10354){
this.owner = owner;
this.G__10349 = G__10349;
this.data = data;
this.output_schema10344 = output_schema10344;
this.input_schema10345 = input_schema10345;
this.input_checker10346 = input_checker10346;
this.output_checker10347 = output_checker10347;
this.title = title;
this.validate__5368__auto__ = validate__5368__auto__;
this.ufv__ = ufv__;
this.G__10348 = G__10348;
this.meta10354 = meta10354;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stratus.components.t10353.cljs$lang$type = true;
stratus.components.t10353.cljs$lang$ctorStr = "stratus.components/t10353";
stratus.components.t10353.cljs$lang$ctorPrWriter = ((function (validate__5368__auto__,ufv___10356,output_schema10344_10357,input_schema10345_10358,input_checker10346_10359,output_checker10347_10360){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"stratus.components/t10353");
});})(validate__5368__auto__,ufv___10356,output_schema10344_10357,input_schema10345_10358,input_checker10346_10359,output_checker10347_10360))
;
stratus.components.t10353.prototype.om$core$IRender$ = true;
stratus.components.t10353.prototype.om$core$IRender$render$arity$1 = ((function (validate__5368__auto__,ufv___10356,output_schema10344_10357,input_schema10345_10358,input_checker10346_10359,output_checker10347_10360){
return (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.apply.call(null,React.DOM.h1,null,cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(self__.data)],null))));
});})(validate__5368__auto__,ufv___10356,output_schema10344_10357,input_schema10345_10358,input_checker10346_10359,output_checker10347_10360))
;
stratus.components.t10353.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__5368__auto__,ufv___10356,output_schema10344_10357,input_schema10345_10358,input_checker10346_10359,output_checker10347_10360){
return (function (_10355){var self__ = this;
var _10355__$1 = this;return self__.meta10354;
});})(validate__5368__auto__,ufv___10356,output_schema10344_10357,input_schema10345_10358,input_checker10346_10359,output_checker10347_10360))
;
stratus.components.t10353.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__5368__auto__,ufv___10356,output_schema10344_10357,input_schema10345_10358,input_checker10346_10359,output_checker10347_10360){
return (function (_10355,meta10354__$1){var self__ = this;
var _10355__$1 = this;return (new stratus.components.t10353(self__.owner,self__.G__10349,self__.data,self__.output_schema10344,self__.input_schema10345,self__.input_checker10346,self__.output_checker10347,self__.title,self__.validate__5368__auto__,self__.ufv__,self__.G__10348,meta10354__$1));
});})(validate__5368__auto__,ufv___10356,output_schema10344_10357,input_schema10345_10358,input_checker10346_10359,output_checker10347_10360))
;
stratus.components.__GT_t10353 = ((function (validate__5368__auto__,ufv___10356,output_schema10344_10357,input_schema10345_10358,input_checker10346_10359,output_checker10347_10360){
return (function __GT_t10353(owner__$1,G__10349__$1,data__$1,output_schema10344__$1,input_schema10345__$1,input_checker10346__$1,output_checker10347__$1,title__$1,validate__5368__auto____$1,ufv____$1,G__10348__$1,meta10354){return (new stratus.components.t10353(owner__$1,G__10349__$1,data__$1,output_schema10344__$1,input_schema10345__$1,input_checker10346__$1,output_checker10347__$1,title__$1,validate__5368__auto____$1,ufv____$1,G__10348__$1,meta10354));
});})(validate__5368__auto__,ufv___10356,output_schema10344_10357,input_schema10345_10358,input_checker10346_10359,output_checker10347_10360))
;
}
return (new stratus.components.t10353(owner,G__10349,data,output_schema10344_10357,input_schema10345_10358,input_checker10346_10359,output_checker10347_10360,title,validate__5368__auto__,ufv___10356,G__10348,null));
break;
}
})();if(cljs.core.truth_(validate__5368__auto__))
{var temp__4126__auto___10364 = output_checker10347_10360.call(null,o__5371__auto__);if(cljs.core.truth_(temp__4126__auto___10364))
{var error__5370__auto___10365 = temp__4126__auto___10364;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"title","title",-2017930186,null),cljs.core.pr_str.call(null,error__5370__auto___10365)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema10344_10357,new cljs.core.Keyword(null,"value","value",305978217),o__5371__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5370__auto___10365], null));
} else
{}
} else
{}
return o__5371__auto__;
});})(ufv___10356,output_schema10344_10357,input_schema10345_10358,input_checker10346_10359,output_checker10347_10360))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,stratus.components.title),schema.core.make_fn_schema.call(null,output_schema10344_10357,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema10345_10358], null)));
stratus.components.__GT_title = (function() {
var __GT_title = null;
var __GT_title__1 = (function (cursor__7142__auto__){return om.core.build.call(null,stratus.components.title,cursor__7142__auto__);
});
var __GT_title__2 = (function (cursor__7142__auto__,m10343){return om.core.build.call(null,stratus.components.title,cursor__7142__auto__,m10343);
});
__GT_title = function(cursor__7142__auto__,m10343){
switch(arguments.length){
case 1:
return __GT_title__1.call(this,cursor__7142__auto__);
case 2:
return __GT_title__2.call(this,cursor__7142__auto__,m10343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_title.cljs$core$IFn$_invoke$arity$1 = __GT_title__1;
__GT_title.cljs$core$IFn$_invoke$arity$2 = __GT_title__2;
return __GT_title;
})()
;
stratus.components.determine_component = (function determine_component(data,owner){var pred__10369 = cljs.core._EQ_;var expr__10370 = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(data);if(cljs.core.truth_(pred__10369.call(null,new cljs.core.Keyword(null,"h1","h1",-1896887462),expr__10370)))
{return stratus.components.title.call(null,data,owner);
} else
{return stratus.components.paragraph.call(null,data,owner);
}
});
var ufv___10385 = schema.utils.use_fn_validation;var output_schema10373_10386 = schema.core.Any;var input_schema10374_10387 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);var input_checker10375_10388 = schema.core.checker.call(null,input_schema10374_10387);var output_checker10376_10389 = schema.core.checker.call(null,output_schema10373_10386);/**
* Inputs: [data owner]
*/
stratus.components.article = ((function (ufv___10385,output_schema10373_10386,input_schema10374_10387,input_checker10375_10388,output_checker10376_10389){
return (function article(G__10377,G__10378){var validate__5368__auto__ = ufv___10385.get_cell();if(cljs.core.truth_(validate__5368__auto__))
{var args__5369__auto___10390 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__10377,G__10378], null);var temp__4126__auto___10391 = input_checker10375_10388.call(null,args__5369__auto___10390);if(cljs.core.truth_(temp__4126__auto___10391))
{var error__5370__auto___10392 = temp__4126__auto___10391;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"article","article",1618846482,null),cljs.core.pr_str.call(null,error__5370__auto___10392)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema10374_10387,new cljs.core.Keyword(null,"value","value",305978217),args__5369__auto___10390,new cljs.core.Keyword(null,"error","error",-978969032),error__5370__auto___10392], null));
} else
{}
} else
{}
var o__5371__auto__ = (function (){var data = G__10377;var owner = G__10378;while(true){
if(typeof stratus.components.t10382 !== 'undefined')
{} else
{
/**
* @constructor
*/
stratus.components.t10382 = (function (input_checker10375,owner,G__10377,data,output_checker10376,G__10378,article,input_schema10374,output_schema10373,validate__5368__auto__,ufv__,meta10383){
this.input_checker10375 = input_checker10375;
this.owner = owner;
this.G__10377 = G__10377;
this.data = data;
this.output_checker10376 = output_checker10376;
this.G__10378 = G__10378;
this.article = article;
this.input_schema10374 = input_schema10374;
this.output_schema10373 = output_schema10373;
this.validate__5368__auto__ = validate__5368__auto__;
this.ufv__ = ufv__;
this.meta10383 = meta10383;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stratus.components.t10382.cljs$lang$type = true;
stratus.components.t10382.cljs$lang$ctorStr = "stratus.components/t10382";
stratus.components.t10382.cljs$lang$ctorPrWriter = ((function (validate__5368__auto__,ufv___10385,output_schema10373_10386,input_schema10374_10387,input_checker10375_10388,output_checker10376_10389){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"stratus.components/t10382");
});})(validate__5368__auto__,ufv___10385,output_schema10373_10386,input_schema10374_10387,input_checker10375_10388,output_checker10376_10389))
;
stratus.components.t10382.prototype.om$core$IRender$ = true;
stratus.components.t10382.prototype.om$core$IRender$render$arity$1 = ((function (validate__5368__auto__,ufv___10385,output_schema10373_10386,input_schema10374_10387,input_checker10375_10388,output_checker10376_10389){
return (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.apply.call(null,React.DOM.div,null,cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build_all.call(null,stratus.components.determine_component,new cljs.core.Keyword(null,"article","article",-21685045).cljs$core$IFn$_invoke$arity$1(self__.data))],null))));
});})(validate__5368__auto__,ufv___10385,output_schema10373_10386,input_schema10374_10387,input_checker10375_10388,output_checker10376_10389))
;
stratus.components.t10382.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__5368__auto__,ufv___10385,output_schema10373_10386,input_schema10374_10387,input_checker10375_10388,output_checker10376_10389){
return (function (_10384){var self__ = this;
var _10384__$1 = this;return self__.meta10383;
});})(validate__5368__auto__,ufv___10385,output_schema10373_10386,input_schema10374_10387,input_checker10375_10388,output_checker10376_10389))
;
stratus.components.t10382.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__5368__auto__,ufv___10385,output_schema10373_10386,input_schema10374_10387,input_checker10375_10388,output_checker10376_10389){
return (function (_10384,meta10383__$1){var self__ = this;
var _10384__$1 = this;return (new stratus.components.t10382(self__.input_checker10375,self__.owner,self__.G__10377,self__.data,self__.output_checker10376,self__.G__10378,self__.article,self__.input_schema10374,self__.output_schema10373,self__.validate__5368__auto__,self__.ufv__,meta10383__$1));
});})(validate__5368__auto__,ufv___10385,output_schema10373_10386,input_schema10374_10387,input_checker10375_10388,output_checker10376_10389))
;
stratus.components.__GT_t10382 = ((function (validate__5368__auto__,ufv___10385,output_schema10373_10386,input_schema10374_10387,input_checker10375_10388,output_checker10376_10389){
return (function __GT_t10382(input_checker10375__$1,owner__$1,G__10377__$1,data__$1,output_checker10376__$1,G__10378__$1,article__$1,input_schema10374__$1,output_schema10373__$1,validate__5368__auto____$1,ufv____$1,meta10383){return (new stratus.components.t10382(input_checker10375__$1,owner__$1,G__10377__$1,data__$1,output_checker10376__$1,G__10378__$1,article__$1,input_schema10374__$1,output_schema10373__$1,validate__5368__auto____$1,ufv____$1,meta10383));
});})(validate__5368__auto__,ufv___10385,output_schema10373_10386,input_schema10374_10387,input_checker10375_10388,output_checker10376_10389))
;
}
return (new stratus.components.t10382(input_checker10375_10388,owner,G__10377,data,output_checker10376_10389,G__10378,article,input_schema10374_10387,output_schema10373_10386,validate__5368__auto__,ufv___10385,null));
break;
}
})();if(cljs.core.truth_(validate__5368__auto__))
{var temp__4126__auto___10393 = output_checker10376_10389.call(null,o__5371__auto__);if(cljs.core.truth_(temp__4126__auto___10393))
{var error__5370__auto___10394 = temp__4126__auto___10393;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"article","article",1618846482,null),cljs.core.pr_str.call(null,error__5370__auto___10394)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema10373_10386,new cljs.core.Keyword(null,"value","value",305978217),o__5371__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5370__auto___10394], null));
} else
{}
} else
{}
return o__5371__auto__;
});})(ufv___10385,output_schema10373_10386,input_schema10374_10387,input_checker10375_10388,output_checker10376_10389))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,stratus.components.article),schema.core.make_fn_schema.call(null,output_schema10373_10386,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema10374_10387], null)));
stratus.components.__GT_article = (function() {
var __GT_article = null;
var __GT_article__1 = (function (cursor__7142__auto__){return om.core.build.call(null,stratus.components.article,cursor__7142__auto__);
});
var __GT_article__2 = (function (cursor__7142__auto__,m10372){return om.core.build.call(null,stratus.components.article,cursor__7142__auto__,m10372);
});
__GT_article = function(cursor__7142__auto__,m10372){
switch(arguments.length){
case 1:
return __GT_article__1.call(this,cursor__7142__auto__);
case 2:
return __GT_article__2.call(this,cursor__7142__auto__,m10372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_article.cljs$core$IFn$_invoke$arity$1 = __GT_article__1;
__GT_article.cljs$core$IFn$_invoke$arity$2 = __GT_article__2;
return __GT_article;
})()
;

//# sourceMappingURL=components.js.map