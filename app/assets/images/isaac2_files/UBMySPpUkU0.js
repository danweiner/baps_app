/*!CK:1912755537!*//*1458343042,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["bjIzU"]); }

__d('CovercardArrow',['csx','cx','ContextualDialogArrow','CSS','DOMQuery','Locale','Style'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=-45,k=45,l=9;if(c('Locale').isRTL()){j=-j;k=-k;}function m(o){'use strict';this._layer=o;}m.prototype.enable=function(){'use strict';this._layer.enableBehavior(c('ContextualDialogArrow'));var o=this._layer.getContentRoot();this._arrowWrapper=c('DOMQuery').scry(o,"._7lh")[0];if(!this._arrowWrapper)return;this._arrowShadow=c('DOMQuery').scry(this._arrowWrapper,"._7li")[0];if(!this._arrowShadow)return;var p=null;if(n(this._arrowWrapper))p=this._renderArrowWithRotate.bind(this);if(!p)return;if(c('Locale').isRTL())c('CSS').addClass(o,"_7lf");this._subscription=this._layer.subscribe('reposition',function(q,r){var s=r.getPosition()=='below';c('CSS').conditionClass(o,"_53ih",s);s&&p(r);});};m.prototype.disable=function(){'use strict';this._subscription&&this._subscription.unsubscribe();this._subscription=null;};m.prototype._calculateArrowOffset=function(o){'use strict';var p=c('ContextualDialogArrow').getOffsetPercent(o),q=c('ContextualDialogArrow').getOffset(o,p,this._layer),r=c('Style').get(this._layer.getContentRoot(),'width');return parseInt(r,10)*(p/100)+q;};m.prototype._renderArrowWithRotate=function(o){'use strict';var p=c('DOMQuery').scry(this._arrowWrapper,"._7lj")[0];if(!p){var q=this._layer.getContentRoot();c('CSS').addClass(q,"_4nfk");}var r=c('DOMQuery').scry(this._arrowWrapper,"._1ubp")[0];if(!r)return;var s=n(this._arrowWrapper);if(!s)return;var t=this._calculateArrowOffset(o),u=l+t,v=-l;if(c('Locale').isRTL()){u=-u;v=-v;}this._arrowWrapper.style[s]='translate('+u+'px, -'+l+'px) '+'rotate('+k+'deg)';if(p)p.style[s]='rotate('+j+'deg) '+'translate('+ -u+'px, '+(l-12)+'px)';r.style[s]='rotate('+j+'deg) '+'translate('+v+'px, 0)';};function n(o){if(!o)o=document.body;var p=['transform','WebkitTransform','msTransform','MozTransform','OTransform'],q;while(q=p.shift())if(o.style[q]!==undefined)return q;return null;}f.exports=m;},null);
__d('Hovercard',['csx','cx','fbt','AccessibleLayer','Arbiter','AsyncRequest','ContextualDialog','ContextualDialogXUITheme','ContextualThing','DOM','Event','JSXDOM','LayerAutoFocus','LayerRefocusOnHide','Parent','Style','Vector','clickRefAction','getInlineBoundingRect'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k={},l={},m=null,n=null,o=null,p=null,q=150,r=700,s=1000,t=250,u=50,v=null,w=null,x=null,y=null;function z(oa){n=oa;if(!aa(oa)){var pa;if(!oa||!(pa=ba(oa))||la(oa)){l.moveToken&&l.moveToken.remove();l={};return false;}if(l.node!=oa){l.moveToken&&l.moveToken.remove();l={node:oa,endpoint:pa,pos:null};}}return true;}function aa(oa){return oa&&m&&l.node==oa;}function ba(oa){return oa.getAttribute('data-hovercard');}function ca(oa){var pa=c('DOM').scry(oa,"^._5jmm ._2orz").length;if(pa)return;if(!oa.leaveToken){var qa=c('Event').listen(oa,'mouseleave',function(){clearTimeout(v);clearTimeout(w);qa.remove();oa.leaveToken=null;n=null;if(!na.contains(oa))na.hide();});oa.leaveToken=qa;}if(!l.moveToken)l.moveToken=c('Event').listen(oa,'mousemove',function(event){l.pos=c('Vector').getEventPosition(event);});clearTimeout(v);clearTimeout(w);clearTimeout(y);y=null;var ra=q,sa=m?t:r;if(oa.getAttribute('data-hovercard-instant'))ra=sa=u;v=setTimeout(ga.bind(null,oa),ra);w=setTimeout(da.bind(null,oa),sa);}function da(oa,pa){if(l.node!=oa)return;var qa=k[ba(oa)];if(qa){fa(qa);}else if(pa){fa(ja());}else{var ra=m?t:r;x=setTimeout(da.bind(null,oa,true),s-ra);}}function ea(){na.hide(true);clearTimeout(w);}function fa(oa){var pa=l.node,qa=m,ra=qa!=pa,sa=pa.getAttribute('data-hovercard-position');sa&&oa.setPosition(sa);if(p){var ta=p.getContentRoot();if(!c('ContextualThing').containsIncludingLayers(ta,pa))p.hide();}if(!c('DOM').contains(document.body,pa)){na.hide(true);return;}m=pa;p=oa;oa.setContextWithBounds(pa,c('getInlineBoundingRect')(pa,l.pos)).show();c('Arbiter').inform('Hovercard/show');if(ra)setTimeout(function(){c('clickRefAction')('himp',m,null,'FORCE',{ft:{evt:39}});},0);}function ga(oa){if(oa.id&&k[oa.id]!=null)return;var pa=ba(oa);if(k[pa]!=null)return;ha(pa);var qa=function(){na.dirty(pa);ea();};new (c('AsyncRequest'))(pa).setData({endpoint:pa}).setMethod('GET').setReadOnly(true).setErrorHandler(qa).setTransportErrorHandler(qa).send();}function ha(oa){k[oa]=false;}function ia(oa){var pa=l.node.getAttribute('data-hovercard-offset-x')||0;oa.setOffsetX(parseInt(pa,10));var qa=l.node.getAttribute('data-hovercard-offset-y')||0;oa.setOffsetY(parseInt(qa,10));}var ja=function(){if(!o){o=new (c('ContextualDialog'))({width:275,theme:c('ContextualDialogXUITheme')},c('JSXDOM').div({className:"_7lk"},j._("Loading...")));o.disableBehavior(c('AccessibleLayer')).disableBehavior(c('LayerAutoFocus')).disableBehavior(c('LayerRefocusOnHide'));ka(o);}var oa=l.node.getAttribute('data-hovercard-position');o.setPosition(oa);ia(o);return o;};function ka(oa){var pa=[oa.subscribe('mouseenter',function(){clearTimeout(y);y=null;n=l.node;}),oa.subscribe('mouseleave',function(){oa.hide();n=null;}),oa.subscribe('destroy',function(){while(pa.length)pa.pop().unsubscribe();pa=null;})];}function la(oa){return c('Parent').bySelector(oa,"._7lu")!==null;}var ma=true,na={hide:function(oa){if(!m)return;if(oa){clearTimeout(y);y=null;if(p)p.hide();n=null;m=null;p=null;}else{var pa=l.node.getAttribute('data-hovercard-instant')?u:t;if(y===null)y=setTimeout(na.hide.bind(null,true),pa);}},setDialog:function(oa,pa){pa.disableBehavior(c('AccessibleLayer')).disableBehavior(c('LayerAutoFocus')).disableBehavior(c('LayerRefocusOnHide'));k[oa]=pa;ka(pa);if(l.endpoint==oa&&n==l.node){ja().hide();ia(pa);fa(pa);}},getDialog:function(oa){return k[oa];},contains:function(oa){if(p)return c('ContextualThing').containsIncludingLayers(p.getContentRoot(),oa);return false;},dirty:function(oa){var pa=k[oa];if(pa){pa.destroy();delete k[oa];}},dirtyAll:function(){for(var oa in k){var pa=k[oa];pa&&na.dirty(oa);}c('Arbiter').inform('Hovercard/dirty');},processNode:function(oa){if(oa&&z(oa)){ca(oa);return true;}return false;},setDirtyAllOnPageTransition:function(oa){ma=oa;},getLoadingDelay:function(){return s;},getHideDelay:function(){return t;}};(function(){c('Event').listen(window,'scroll',function(){if(m&&c('Style').isFixed(m))na.hide(true);});c('Arbiter').subscribe('page_transition',function(){ea();ma&&na.dirtyAll();},c('Arbiter').SUBSCRIBE_NEW);})();f.exports=na;},null);
__d("XFamilyBulkTagAddAsyncController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/family\/bulk_tag_save\/",{subject:{type:"Int"},save_tags:{type:"String"}});},null);