/*!CK:202905546!*//*1457861355,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["+VgrK"]); }

__d("TakeoverSurveyBrowseTypes",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={PHOTO:"browse_type_photo",VIDEO:"browse_type_video",BLENDED_ENTITIES:"browse_type_keyword_entities",STORY:"browse_type_story"};},null);
__d("XBrowseLoggerController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/browse\/logger\/",{data:{type:"HackType",required:true}});},null);
__d('BrowseLogger',['AsyncRequest','Banzai','mapObject','Run','XBrowseLoggerController'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h='browse',i='browse_aggr',j=null,k={},l={},m=function(v){if(v==null)return 'undefined';var w=v.tagName.toLowerCase(),x=v.id,y=v.className;if(x)w+='#'+x;if(y)w+='.'+y;return w;};function n(){j=null;k={};l={};}function o(v){return Object.assign(v,{clientSessionID:j});}function p(v){c('Banzai').post(h,o(v));}function q(v){var w=c('XBrowseLoggerController').getURIBuilder().setHackType('data',o(v)).getURI();new (c('AsyncRequest'))().setURI(w).send();}function r(){if(j===null)return;l.aggregated=k;c('Banzai').post(i,o(l));n();}function s(v){k[v]=(k[v]||0)+1;}function t(v){Object.assign(l,v);}c('Run').onUnload(r);var u={newSession:function(){r();j=Math.random().toString();if(!l.start_time)l.start_time=Math.round(Date.now()/1000);},logResultClick:function(v,w,x,y,z){var aa=arguments.length<=5||arguments[5]===undefined?null:arguments[5],ba={action:'result_click',click_type:v.ct||'result',section:v.section||'unknown',id:v.id||0,path:v.path||'unknown',rank:v.rank||0,referrer:v.referrer||'unknown',result_type:v.result_type||'unknown',session_id:v.session_id||0,query_time:v.query_time||null,abtest_version:v.abtest_version||'NONE',abtest_params:v.abtest_params||null,typeahead_sid:v.typeahead_sid||'',result_title:v.result_title||'unknown',result_href:v.result_href||'unknown',result_semantic:v.result_semantic||'unknown',type:v.experience_type||'unknown',click_action:x||null,sub_id:v.sub_id||null,owner_id:v.owner_id||null,browse_location:v.browse_location||'unknown',query_data:v.query_data||'unknown',is_headline:v.is_headline||false,qid:w.qid||0,mf_story_key:w.mf_story_key||0,module:v.module||'NONE',view:v.view||null,clicked_href:z||null,bt_key:aa};if(w.tn)ba.tn=w.tn;if(v.cst)ba.click_subtype=v.cst;s('result_click_'+ba.click_type);t({path:ba.path,referrer:ba.referrer,result_type:ba.result_type,session_id:ba.session_id,abtest_version:ba.abtest_version,abtest_params:ba.abtest_params,typeahead_sid:ba.typeahead_sid});if(aa){q(ba);}else p(ba);if(!v.id&&v.browse_location!=='browse_location:mf_trending'&&!aa)p({action:'logging_error',click_action:x,click_type:ba.click_type,attributes:JSON.stringify(v),element:c('mapObject')({srcElement:y.srcElement,target:y.target,toElement:y.toElement},m),event:{button:y.button,clientX:y.clientX,clientY:y.clientY,ctrlKey:y.ctrlKey,layerX:y.layerX,layerY:y.layerY,offsetX:y.offsetX,offsetY:y.offsetY,pageX:y.pageX,pageY:y.pageY,screenX:y.screenX,screenY:y.screenY,shiftKey:y.shiftKey,type:y.type,x:y.x,y:y.y}});},logControlsClick:function(v,w){var x={action:'controls_click',click_type:w,path:v.path||'unknown',referrer:v.referrer||'unknown',session_id:v.session_id||0,query_time:v.query_time,filter_name:v.name||'unknown',typeahead_sid:v.typeahead_sid||'',result_type:v.result_type||'unknown',type:v.experience_type||'unknown'};if(v.cst)x.click_subtype=v.cst;s('controls_click_'+w);t({path:x.path,referrer:x.referrer,session_id:x.session_id,typeahead_sid:x.typeahead_sid});p(x);},logResultHover:function(v,w){var x=arguments.length<=2||arguments[2]===undefined?null:arguments[2],y={action:'result_hover',id:v.id||0,path:v.path||'unknown',rank:v.rank||null,result_type:v.result_type||'unknown',session_id:v.session_id||0,query_time:v.query_time||null,time_elapsed:w||null,typeahead_sid:v.typeahead_sid||0,type:v.experience_type||'unknown',module:v.module||'NONE',view:v.view||null,bt_key:x};s('result_hover');t({path:y.path,session_id:y.session_id,typeahead_sid:y.typeahead_sid});if(x){q(y);}else p(y);},logScroll:function(v,w,x,y){var z={action:'scroll',encoded_query:v,fragments:w,position:x,session_id:y||0};p(z);},logNUXStep:function(v){var w={action:'nux_step',step:v};p(w);},logDisambiguationImpression:function(v,w,x,y,z){var aa={action:'disambiguation_imp',ids:y,name:v,path:x,type:w,typeahead_sid:z};p(aa);},logDisambiguationClick:function(v,w,x,y,z,aa){var ba={action:'disambiguation_clk',id:z,index:y,name:v,path:x,type:w,typeahead_sid:aa};p(ba);},logDYMLinkClick:function(v,w,x,y){var z={action:'dym_click',path:v.path||'unknown',referrer:v.referrer||'unknown',session_id:v.session_id||0,query_time:v.query_time,abtest_version:v.abtest_version||'NONE',abtest_params:v.abtest_params,typeahead_sid:v.typeahead_sid||'',type:v.experience_type||'unknown',click_action:x,sub_id:v.sub_id,owner_id:v.owner_id,browse_location:v.browse_location||'unknown',query_data:v.query_data||'unknown',module:v.module||'NONE',view:v.view,dym_confidence:v.dym_confidence||'NONE',dym_query:v.dym_query||'',dym_correction:v.dym_correction||'',dym_clicked:v.dym_clicked||''};p(z);}};f.exports=u;},null);
__d('BrowseClickLogger',['Event','BrowseLogger','BrowseClientEventLogger','collectDataAttributes','DOMQuery'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(j,k){var l=j.target,m=c('collectDataAttributes')(l,['bt','ft','gt'],['data-bt-key']);if(m.bt&&m.bt.path)m.bt.path+=document.location.search;m.gt.click_type=m.ft.tn;c('BrowseClientEventLogger').logClick(m.gt);if(c('DOMQuery').scry(l,'^.recourse-link').length>0){if(k==='left_click')c('BrowseLogger').logDYMLinkClick(m.bt,m.ft,k,j);}else c('BrowseLogger').logResultClick(m.bt,m.ft,k,j,l.href,m.normal['data-bt-key']);}var i={init:function(j){c('Event').listen(j,'mousedown',function(k){var l=k.button===2||k.which===3?'right_click':'left_click';if(k.shiftKey)l+='_shift';if(k.altKey)l+='_alt';if(k.metaKey||k.ctrlKey)l+='_ctrl';h(k,l);}.bind(this));},logClick:h};f.exports=i;},null);
__d('BrowseTopFiltersFullWidth',['cx','Arbiter','CSS','NavigationMessage','SubscriptionsHandler'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i,j=/(facebook\.com\/(search|hashtag|topic)\/)/,k={init:function(){c('CSS').addClass(document.body,"_4dik");i=new (c('SubscriptionsHandler'))();i.addSubscriptions(c('Arbiter').subscribe(c('NavigationMessage').NAVIGATION_FIRST_RESPONSE,this.cleanup));c('Arbiter').inform('browse_top_filters_full_width_displayed');},cleanup:function(){i&&i.release();if(!window.location.href.match(j))c('CSS').removeClass(document.body,"_4dik");}};f.exports=k;},null);
__d('BrowseTopFiltersNone',['cx','CSS'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i={init:function(){c('CSS').removeClass(document.body,"_4dik");}};f.exports=i;},null);
__d('BrowseWindowTransitions',['Arbiter','Banzai','BrowseClientEventLogger','Event','NavigationMessage','Run','SubscriptionsHandler'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={init:function(i,j){this.subscriptions=new (c('SubscriptionsHandler'))();this.currentSessionID=i;this.currentVertical=j;this.logData('window_load');c('Run').onLeave(function(){this.logData('window_transition_to_fb_page');this.cleanup();}.bind(this));if(!this.unLoadAttached){this.unLoadAttached=true;c('Run').onUnload(function(){this.logData('window_unloaded');}.bind(this));}this.subscriptions.addSubscriptions(c('Event').listen(window,'focus',function(){this.logData('window_focus');}.bind(this)),c('Event').listen(window,'blur',function(){this.logData('window_blur');}.bind(this)),c('Arbiter').subscribe('pre_page_transition',function(event,k){this.logData('window_pre_page_transition');}.bind(this)),c('Arbiter').subscribe(c('NavigationMessage').NAVIGATION_BEGIN,function(event,k){this.logData('window_transition_to_LHC');this.cleanup();}.bind(this)),c('Arbiter').subscribe('BlueBar/homeClick',function(){this.logData('window_transition_to_home_click');this.cleanup();}.bind(this)));},logData:function(event){c('BrowseClientEventLogger').logData(event,this.currentSessionID,this.currentVertical);},cleanup:function(){this.subscriptions.release();}};f.exports=h;},null);
__d('NodeHighlighter',['DOM','TokenizeUtil','concatMap','escapeRegex','getElementText','isTextNode'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={};function i(l,m){var n=c('getElementText')(l).split(m),o=n.map(function(p){if(m.test(p))return j(p);return p||'';});return n.length>1?o:null;}function j(l){var m=c('DOM').create('span',{'class':'highlightNode',className:'highlightNode'},l);return m;}var k={getTextNodes:function(l){if(this.isLeafNode(l)||this.isStopNode(l)){return l;}else if(this.isDiscardNode(l))return [];return c('concatMap')(this.getTextNodes.bind(this),Array.from(l.childNodes));},getHighlightCandidates:function(){return [];},isLeafNode:function(l){return c('isTextNode')(l);},isStopNode:function(l){return false;},isDiscardNode:function(l){return false;},createSegmentedRegex:function(l){var m=c('TokenizeUtil').getPunctuation();l=this.escapeAndAddBidirectionalCharsToTokens(l);l=l.map(function(n){n=n.split(/\s+/).join('(?:'+m+'|\\s)+');return n;});return '(^|\\s|'+m+')('+l.join('|')+')(?=(?:$|\\s|'+m+'))';},createNonSegmentedRegex:function(l){return '('+l.map(c('escapeRegex')).join('|')+')';},escapeAndAddBidirectionalCharsToTokens:function(l){var m='[\\u200E\\u200F\\u202A\\u202B\\u202C\\u202D\\u202E]*';return l.map(function(n){return m+String(n).split('').map(c('escapeRegex')).join(m)+m;});},createRegex:function(l){l=l.filter(function(s){return s;});if(!l||l.length===0)return new RegExp(null);var m=l.join('|');if(h[m])return h[m];var n=/[\u0E00-\u109F\u2000-\uFFFF]/,o=[],p=[];l.forEach(function(s){if(n.test(s)){p.push(s);}else o.push(s);});var q='';if(o.length){q+=this.createSegmentedRegex(o);q+=p.length?'|':'';}if(p.length)q+=this.createNonSegmentedRegex(p);var r=new RegExp(q,'i');h[m]=r;return r;},searchNodes:function(l,m){return c('DOM').scry(l,m);},highlight:function(l,m){m=m.filter(function(p){return p;});if(!m||m.length===0||!l)return;var n=c('concatMap')(function(p){return c('concatMap')(this.getTextNodes.bind(this),this.searchNodes(l,p));}.bind(this),this.getHighlightCandidates()),o=this.createRegex(m);n.forEach(function(p){var q=i(p,o);if(q)if(this.isStopNode(p)){c('DOM').setContent(p,q);}else c('DOM').replace(p,q);}.bind(this));}};f.exports=k;},null);
__d('SearchCommentHighlighter',['csx','Arbiter','CSS','NodeHighlighter','Parent','UFIUIEvents'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i='data-highlight-tokens',j=babelHelpers['extends']({},c('NodeHighlighter'),{_enableCommentHighlighting:function(){if(this._subscription)return;this._subscription=c('Arbiter').subscribe(c('UFIUIEvents').Changed,function(k,l){var m=l.form;return this._highlightComments(m);}.bind(this));c('Arbiter').subscribeOnce('pre_page_transition',function(){return this._disableCommentHighlighting();}.bind(this));},_disableCommentHighlighting:function(){this._subscription.unsubscribe();this._subscription=null;},_highlightComments:function(k){var l=this._getHighlightTokens(k);if(l)c('NodeHighlighter').highlight.call(this,k,l);},_getHighlightTokens:function(k){var l=c('Parent').byAttribute(k,i);return l?JSON.parse(l.getAttribute(i)):null;},isDiscardNode:function(k){return c('CSS').hasClass(k,'highlightNode');},getHighlightCandidates:function(){return [".UFICommentContent"];},highlight:function(k,l){if(!k.setAttribute)return;k.setAttribute(i,JSON.stringify(l));this._enableCommentHighlighting();}});f.exports=j;},null);
__d('TakeoverSurveyConstants',['keyMirrorRecursive'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();f.exports={CardTypes:c('keyMirrorRecursive')({MEGAPHONE:'',INITIAL:'',SPECIFIC_PERSON_PAGE:'',SPECIFIC_PHOTO_VIDEO:'',SPECIFIC_POST:'',SET_OF_POSTS:'',OTHER:'',STORY:''}),ActionTypes:c('keyMirrorRecursive')({UPDATE_CARD_TYPE:'',UPDATE_SELECTED_CARD_TYPE:'',UPDATE_QUESTION_NUMBER:'',UPDATE_ANSWERS:'',FINISH_SURVEY:'',ADD_MODULE:'',CLEAR_MODULES:'',UNMOUNT_MODULE:'',INITIAL_LOAD:'',ADD_SCROLLING:'',END_OF_RESULTS:''}),Constants:{NUMBER_OF_STORIES:6}};},null);
__d('TakeoverSurveyDispatcher',['ReactDispatcher_DEPRECATED'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();f.exports=new (c('ReactDispatcher_DEPRECATED'))();},null);
__d('TakeoverSurveyActions',['TakeoverSurveyConstants','TakeoverSurveyDispatcher'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=c('TakeoverSurveyConstants').ActionTypes,i={updateCardType:function(j){c('TakeoverSurveyDispatcher').dispatch({action:{actionType:h.UPDATE_CARD_TYPE,value:j}});},updateSelectedCardType:function(j){c('TakeoverSurveyDispatcher').dispatch({action:{actionType:h.UPDATE_SELECTED_CARD_TYPE,value:j}});},saveAnswer:function(j,k,l){c('TakeoverSurveyDispatcher').dispatch({action:{actionType:h.UPDATE_ANSWERS,value:j,number:l,checkedValue:k}});},updateQuestionNumber:function(j){c('TakeoverSurveyDispatcher').dispatch({action:{actionType:h.UPDATE_QUESTION_NUMBER,value:j}});},finishSurvey:function(){c('TakeoverSurveyDispatcher').dispatch({action:{actionType:h.FINISH_SURVEY}});},addModule:function(j){c('TakeoverSurveyDispatcher').dispatch({action:{actionType:h.ADD_MODULE,value:j}});},clearModules:function(){c('TakeoverSurveyDispatcher').dispatch({action:{actionType:h.CLEAR_MODULES}});},unmountModule:function(){c('TakeoverSurveyDispatcher').dispatch({action:{actionType:h.UNMOUNT_MODULE}});},initialize:function(j,k,l,m){c('TakeoverSurveyDispatcher').dispatch({action:{actionType:h.INITIAL_LOAD,value:{numberOfQuestions:j,text:k,query:l,browseSid:m}}});},addScrolling:function(j){c('TakeoverSurveyDispatcher').dispatch({action:{actionType:h.ADD_SCROLLING,value:j}});},endOfResults:function(){c('TakeoverSurveyDispatcher').dispatch({action:{actionType:h.END_OF_RESULTS}});}};f.exports=i;},null);
__d('TakeoverSurveyUtils',['TakeoverSurveyConstants'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=c('TakeoverSurveyConstants').CardTypes,i={hasMultipleQuestions:function(j){return j===h.SET_OF_POSTS||j===h.SPECIFIC_POST||j===h.OTHER||j===h.STORY;},getMultipleQuestionCardType:function(j){return j===h.OTHER?h.OTHER:h.STORY;}};f.exports=i;},null);
__d("XRatingsTakeoverSurveyController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/search\/ratings\/takeover_survey\/",{});},null);
__d('TakeoverSurveyStore',['cx','AsyncRequest','CSS','DOM','FluxStore','HTML','TakeoverSurveyBrowseTypes','TakeoverSurveyConstants','TakeoverSurveyDispatcher','TakeoverSurveyUtils','XRatingsTakeoverSurveyController','getElementText'],function a(b,c,d,e,f,g,h){var i,j;if(c.__markCompiled)c.__markCompiled();var k=c('TakeoverSurveyConstants').ActionTypes,l=c('TakeoverSurveyConstants').CardTypes,m=c('TakeoverSurveyConstants').Constants;i=babelHelpers.inherits(n,c('FluxStore'));j=i&&i.prototype;function n(o){'use strict';j.constructor.call(this,o);this.$TakeoverSurveyStore1=null;this.$TakeoverSurveyStore2=[];this.$TakeoverSurveyStore5=false;this.$TakeoverSurveyStore6={SPECIFIC_PERSON_PAGE:null,SPECIFIC_PHOTO_VIDEO:null,STORY:[],OTHER:[]};this.$TakeoverSurveyStore7=false;this.$TakeoverSurveyStore4=0;this.$TakeoverSurveyStore14=null;this.$TakeoverSurveyStore3=0;this.$TakeoverSurveyStore15=null;this.$TakeoverSurveyStore16=null;this.$TakeoverSurveyStore17=null;this.$TakeoverSurveyStore18=[];this.$TakeoverSurveyStore19=true;this.$TakeoverSurveyStore20=false;this.$TakeoverSurveyStore8=null;this.$TakeoverSurveyStore9=null;this.$TakeoverSurveyStore10=null;this.$TakeoverSurveyStore11=null;this.$TakeoverSurveyStore12=null;this.$TakeoverSurveyStore13={};}n.prototype.getCardType=function(){'use strict';return this.$TakeoverSurveyStore1;};n.prototype.getAnswers=function(){'use strict';return this.$TakeoverSurveyStore2;};n.prototype.getQuestionNumber=function(){'use strict';return this.$TakeoverSurveyStore3;};n.prototype.getFinishedSurvey=function(){'use strict';return this.$TakeoverSurveyStore5;};n.prototype.getDisplayModule=function(){'use strict';return this.$TakeoverSurveyStore7;};n.prototype.getQuestion=function(){'use strict';return this.$TakeoverSurveyStore11;};n.prototype.getOptions=function(){'use strict';return this.$TakeoverSurveyStore12;};n.prototype.getFinishText=function(){'use strict';return this.$TakeoverSurveyStore8;};n.prototype.getMegaphoneTitle=function(){'use strict';return this.$TakeoverSurveyStore9;};n.prototype.getMegaphoneText=function(){'use strict';return this.$TakeoverSurveyStore10;};n.prototype.getNumberOfQuestions=function(){'use strict';return this.$TakeoverSurveyStore4;};n.prototype.getModules=function(){'use strict';return this.$TakeoverSurveyStore6;};n.prototype.getAllModules=function(){'use strict';return this.$TakeoverSurveyStore18;};n.prototype.getAll=function(){'use strict';return {cardType:this.getCardType(),answers:this.getAnswers(),questionNumber:this.getQuestionNumber(),finishedSurvey:this.getFinishedSurvey(),displayModule:this.getDisplayModule(),question:this.getQuestion(),options:this.getOptions(),finishText:this.getFinishText(),megaphoneTitle:this.getMegaphoneTitle(),megaphoneText:this.getMegaphoneText(),numberOfQuestions:this.getNumberOfQuestions(),modules:this.getModules(),allModules:this.getAllModules()};};n.prototype.finishSurveyAndLog=function(){'use strict';this.$TakeoverSurveyStore5=true;if(!this.$TakeoverSurveyStore2)return;var o=c('XRatingsTakeoverSurveyController').getURIBuilder().getURI();this.$TakeoverSurveyStore2.forEach(function(p){var q=c('DOM').create('div',null,new (c('HTML'))(p.rating)),r=c('getElementText')(q);new (c('AsyncRequest'))().setURI(o).setData({desired_module:this.$TakeoverSurveyStore17,query:this.$TakeoverSurveyStore15,browse_sid:this.$TakeoverSurveyStore16,browse_type:p.element?p.element.type:null,rating:r}).send();}.bind(this));};n.prototype.__onDispatch=function(o){'use strict';var p=o.action,q=true;switch(p.actionType){case k.UPDATE_CARD_TYPE:this.$TakeoverSurveyStore1=p.value;this.$TakeoverSurveyStore11=this.$TakeoverSurveyStore13.questions[p.value];this.$TakeoverSurveyStore12=this.$TakeoverSurveyStore13.options[p.value];break;case k.UPDATE_SELECTED_CARD_TYPE:this.$TakeoverSurveyStore17=p.value;break;case k.UPDATE_QUESTION_NUMBER:this.$TakeoverSurveyStore3=p.value;break;case k.UPDATE_ANSWERS:var r={module:this.$TakeoverSurveyStore1,rating:p.value,checkedValue:p.checkedValue};if(this.$TakeoverSurveyStore1!=null&&c('TakeoverSurveyUtils').hasMultipleQuestions(this.$TakeoverSurveyStore1)){var s=c('TakeoverSurveyUtils').getMultipleQuestionCardType(this.$TakeoverSurveyStore1);if(p.number!=null){var t=this.$TakeoverSurveyStore6[s];this.$TakeoverSurveyStore2[p.number]=babelHelpers['extends']({},r,{element:t[p.number]});this.$TakeoverSurveyStore3=p.number+1;if(t[this.$TakeoverSurveyStore3]==null&&this.$TakeoverSurveyStore20)this.finishSurveyAndLog();}}else this.$TakeoverSurveyStore2.push(babelHelpers['extends']({},r,{element:this.$TakeoverSurveyStore6[this.$TakeoverSurveyStore1]}));break;case k.FINISH_SURVEY:this.finishSurveyAndLog();break;case k.ADD_MODULE:c('CSS').addClass(p.value.element,"_2x53");if(!this.$TakeoverSurveyStore7&&!this.finishedSurvey)this.$TakeoverSurveyStore7=true;var u={element:p.value.element,role:p.value.moduleRole,type:p.value.moduleType};if(p.value.moduleType===c('TakeoverSurveyBrowseTypes').STORY){if(this.$TakeoverSurveyStore6[l.STORY].length>=m.NUMBER_OF_STORIES)break;if(this.$TakeoverSurveyStore14&&this.$TakeoverSurveyStore14.getInitialized())this.$TakeoverSurveyStore14.addModulePosition(u.element,l.STORY);this.$TakeoverSurveyStore6[l.STORY].push(u);this.$TakeoverSurveyStore6[l.OTHER].push(u);}else if(p.value.moduleType===c('TakeoverSurveyBrowseTypes').PHOTO||p.value.moduleType===c('TakeoverSurveyBrowseTypes').VIDEO){this.$TakeoverSurveyStore6[l.SPECIFIC_PHOTO_VIDEO]=u;this.$TakeoverSurveyStore6[l.OTHER].push(u);}else if(p.value.moduleType===c('TakeoverSurveyBrowseTypes').BLENDED_ENTITIES){this.$TakeoverSurveyStore6[l.SPECIFIC_PERSON_PAGE]=u;this.$TakeoverSurveyStore6[l.OTHER].push(u);}break;case k.CLEAR_MODULES:this.$TakeoverSurveyStore6={SPECIFIC_PERSON_PAGE:null,SPECIFIC_PHOTO_VIDEO:null,STORY:[],OTHER:[]};this.$TakeoverSurveyStore2=[];this.$TakeoverSurveyStore3=0;if(!this.$TakeoverSurveyStore5)this.$TakeoverSurveyStore1=l.MEGAPHONE;break;case k.UNMOUNT_MODULE:q=false;this.$TakeoverSurveyStore7=false;break;case k.INITIAL_LOAD:this.$TakeoverSurveyStore13=p.value.text;this.$TakeoverSurveyStore8=p.value.text.finish;this.$TakeoverSurveyStore9=p.value.text.megaphoneTitle;this.$TakeoverSurveyStore10=p.value.text.megaphoneText;this.$TakeoverSurveyStore4=p.value.numberOfQuestions;this.$TakeoverSurveyStore1=c('TakeoverSurveyConstants').CardTypes.MEGAPHONE;this.$TakeoverSurveyStore15=p.value.query;this.$TakeoverSurveyStore16=p.value.browseSid;break;case k.ADD_SCROLLING:this.$TakeoverSurveyStore14=p.value;break;case k.END_OF_RESULTS:this.$TakeoverSurveyStore20=true;break;default:q=false;break;}q&&this.__emitChange();};f.exports=new n(c('TakeoverSurveyDispatcher'));},null);
__d('TakeoverSurveyInitializer',['TakeoverSurveyActions','TakeoverSurveyConstants','TakeoverSurveyDispatcher','TakeoverSurveyStore'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={init:function(i,j,k,l){var m=c('TakeoverSurveyDispatcher').register(function(n){if(n.actionType!==c('TakeoverSurveyConstants').ActionTypes.INITIAL_LOAD)return;c('TakeoverSurveyDispatcher').waitFor(c('TakeoverSurveyStore').getDispatchToken());});c('TakeoverSurveyActions').initialize(i,j,k,l);c('TakeoverSurveyDispatcher').unregister(m);}};f.exports=h;},null);
__d('FbFeedHighlighter',['csx','cx','CSS','NodeHighlighter','SearchCommentHighlighter'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j="_58cn",k=babelHelpers['extends']({},c('NodeHighlighter'),{getHighlightCandidates:function(){return ["._5pbw","._5pbx","._6m6","._6m7","._59tj","._5b-_","._5b_0","._4_j6",".commentBody","._g2z","._6lc","._6s_"];},isStopNode:function(l){return c('CSS').hasClass(l,j);},isDiscardNode:function(l){return c('CSS').hasClass(l,'text_exposed_link');},highlight:function(l,m){c('NodeHighlighter').highlight.call(this,l,m);c('SearchCommentHighlighter').highlight(l,m);}});f.exports=k;},null);