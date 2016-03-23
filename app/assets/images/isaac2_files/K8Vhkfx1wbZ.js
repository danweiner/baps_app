/*!CK:309460507!*//*1458528779,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["u7pGp"]); }

__d('ContextualLayer.react',['ContextualLayer','React','ReactDOM','ReactLayer','Style'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=c('React').PropTypes,i=c('ReactLayer').createClass({propTypes:{contextRef:h.func,context:function(j,k,l){if(j.context==null==(j.contextRef==null))return new Error('Exactly one of `context` or `contextRef` must be set on `'+(l+'`.'));var m=j[k];if(m!=null){if(typeof m!=='object')return new Error('Invalid `'+k+'` supplied to `'+l+'`, '+'expected a React component.');if(c('React').isValidElement(m))return new Error('Invalid `'+k+'` supplied to `'+l+'`, '+'expected a React component instance. You\'re passing a React '+'descriptor.');}}},immutableProps:{modal:null},createLayer:function(j){var k=this._getContextNode(),l={context:k,contextBounds:this.props.contextBounds,position:this.props.position,alignment:this.props.alignment,offsetX:this.props.offsetX,offsetY:this.props.offsetY,addedBehaviors:this.enumerateBehaviors(this.props.behaviors),shouldSetARIAProperties:this.props.shouldSetARIAProperties},m=new (c('ContextualLayer'))(l,j);this._node=j;this._matchContextSize(this.props);if(this.props.contextBounds)m.setContextWithBounds(k,this.props.contextBounds);m.conditionShow(this.props.shown);return m;},receiveProps:function(j,k){this.updateBehaviors(k.behaviors,j.behaviors);var l=this._getContextNode();if(j.contextBounds){this.layer.setContextWithBounds(l,j.contextBounds);}else this.layer.setContext(l);this._matchContextSize(j);this.layer.setPosition(j.position);this.layer.setAlignment(j.alignment);this.layer.setOffsetX(j.offsetX);this.layer.setOffsetY(j.offsetY);this.layer.conditionShow(j.shown);},getDefaultEnabledBehaviors:function(){return c('ContextualLayer').getDefaultBehaviorsAsObject();},_getContextNode:function(){var j;if(this.props.context){j=c('ReactDOM').findDOMNode(this.props.context);}else if(this.props.contextRef)j=c('ReactDOM').findDOMNode(this.props.contextRef());return j;},_matchContextSize:function(j){var k=this._node,l=this._getContextNode();if(j.containerWidthMatchContext)c('Style').set(k,'width',l.offsetWidth+'px');if(j.containerHeightMatchContext)c('Style').set(k,'height',l.offsetHeight+'px');}});f.exports=i;},null);
__d('AbstractTextField.react',['cx','React','Keys','joinClasses'],function a(b,c,d,e,f,g,h){var i,j;if(c.__markCompiled)c.__markCompiled();var k=c('React').Component,l=c('React').PropTypes;i=babelHelpers.inherits(m,k);j=i&&i.prototype;m.defaultProps={useLabel:true,classNames:{root:"_58ak",empty:"_3ct8"},styles:{label:null}};m.propTypes={useLabel:l.bool,leftChild:l.element,rightChild:l.element,classNames:l.shape({root:l.string.isRequired,empty:l.string.isRequired}),styles:l.shape({label:l.object}),'aria-activedescendant':l.string,'aria-autocomplete':l.string,'aria-label':l.string,'aria-labelledby':l.string,'aria-expanded':l.bool,'aria-owns':l.string,'aria-valuenow':l.number,'aria-valuetext':l.string,'data-testid':l.string,autoComplete:l.string,className:l.string,defaultValue:l.string,dir:l.string,disabled:l.bool,id:l.string,max:l.string,maxLength:l.number,min:l.string,name:l.string,onBackspace:l.func,onBackTab:l.func,onBlur:l.func,onChange:l.func,onDownArrow:l.func,onEnter:l.func,onEscape:l.func,onFocus:l.func,onKeyDown:l.func,onLeftArrow:l.func,onNoShiftEnter:l.func,onRightArrow:l.func,onShiftDownArrow:l.func,onShiftEnter:l.func,onShiftUpArrow:l.func,onTab:l.func,onUpArrow:l.func,placeholder:l.string,required:l.bool,role:l.string,style:l.object,title:l.string,type:l.string,value:l.string,autoCapitalize:l.string,autoCorrect:l.string};function m(n){'use strict';j.constructor.call(this,n);this.state={focused:false,value:this.props.defaultValue||''};this.onInputKeyDown=this.onInputKeyDown.bind(this);this.onInputBlur=this.onInputBlur.bind(this);this.onInputFocus=this.onInputFocus.bind(this);this.onInputChange=this.onInputChange.bind(this);}m.prototype.getValue=function(){'use strict';return this.props.value!=null?String(this.props.value):this.state.value;};m.prototype.onInputKeyDown=function(n){'use strict';var o=this.props,p=n.keyCode,q=n.shiftKey;if(p===c('Keys').BACKSPACE&&!q&&o.onBackspace){o.onBackspace(n);}else if(p===c('Keys').TAB&&!q&&o.onTab){o.onTab(n);}else if(p===c('Keys').TAB&&q&&o.onBackTab){o.onBackTab(n);}else if(p===c('Keys').UP){if(q){if(o.onShiftUpArrow)o.onShiftUpArrow(n);}else if(o.onUpArrow)o.onUpArrow(n);}else if(p===c('Keys').DOWN&&o.onDownArrow){if(q){if(o.onShiftDownArrow)o.onShiftDownArrow(n);}else if(o.onDownArrow)o.onDownArrow(n);}else if(p===c('Keys').LEFT&&o.onLeftArrow){o.onLeftArrow(n);}else if(p===c('Keys').RIGHT&&o.onRightArrow){o.onRightArrow(n);}else if(p===c('Keys').RETURN){if(o.onEnter)o.onEnter(n);if(q){if(o.onShiftEnter)o.onShiftEnter(n);}else if(o.onNoShiftEnter)o.onNoShiftEnter(n);}else if(p===c('Keys').ESC&&o.onEscape)o.onEscape(n);if(o.onKeyDown)o.onKeyDown(n);};m.prototype.onInputChange=function(n){'use strict';if(this.props.onChange)this.props.onChange(n);if(this.props.value===null||this.props.value===undefined)this.setState({value:n.target.value});};m.prototype.onInputBlur=function(n){'use strict';if(this.props.onBlur)this.props.onBlur(n);if(!n.isDefaultPrevented())this.setState({focused:false});};m.prototype.onInputFocus=function(n){'use strict';if(this.props.onFocus)this.props.onFocus(n);if(!n.isDefaultPrevented())this.setState({focused:true});};m.prototype.cloneElement=function(n){'use strict';return c('React').cloneElement(n,{'aria-activedescendant':this.props['aria-activedescendant'],'aria-autocomplete':this.props['aria-autocomplete'],'aria-label':this.props['aria-label'],'aria-labelledby':this.props['aria-labelledby'],'aria-expanded':this.props['aria-expanded'],'aria-owns':this.props['aria-owns'],'aria-valuenow':this.props['aria-valuenow'],'aria-valuetext':this.props['aria-valuetext'],'data-testid':this.props['data-testid'],required:this.props.required,role:this.props.role,placeholder:this.props.placeholder,autoCapitalize:this.props.autoCapitalize,autoComplete:this.props.autoComplete,autoCorrect:this.props.autoCorrect,onKeyDown:this.onInputKeyDown,onBlur:this.onInputBlur,onFocus:this.onInputFocus,onChange:this.onInputChange,dir:this.props.dir,disabled:this.props.disabled,defaultValue:this.props.defaultValue,name:this.props.name,value:this.getValue(),id:this.props.id,maxLength:this.props.maxLength,min:this.props.min,max:this.props.max,style:this.props.style,title:this.props.title,type:this.props.type||n.props.type});};m.prototype.render=function(){'use strict';var n=c('React').Children.only(this.props.children);if(!this.props.useLabel)return this.cloneElement(n);var o=this.props.className;if(this.props.classNames){o=c('joinClasses')(o,this.props.classNames.root);if(!this.getValue())o=c('joinClasses')(o,this.props.classNames.empty);}return (c('React').createElement('label',{className:o,style:this.props.styles.label},this.props.leftChild,this.cloneElement(n),this.props.rightChild));};f.exports=m;},null);
__d('AbstractTextInput.react',['cx','AbstractTextField.react','React'],function a(b,c,d,e,f,g,h){var i,j;if(c.__markCompiled)c.__markCompiled();var k=c('React').Component;i=babelHelpers.inherits(l,k);j=i&&i.prototype;l.propTypes=c('AbstractTextField.react').propTypes;l.prototype.render=function(){'use strict';return (c('React').createElement(c('AbstractTextField.react'),this.props,c('React').createElement('input',{className:"_58al",onClick:this.props.onClick,onKeyUp:this.props.onKeyUp,onPaste:this.props.onPaste,size:this.props.size,tabIndex:this.props.tabIndex,type:'text',ref:function(m){return this.$AbstractTextInput1=m;}.bind(this)})));};l.prototype.focusInput=function(){'use strict';this.$AbstractTextInput1&&this.$AbstractTextInput1.focus();};l.prototype.blurInput=function(){'use strict';this.$AbstractTextInput1&&this.$AbstractTextInput1.blur();};l.prototype.getTextFieldDOM=function(){'use strict';return this.$AbstractTextInput1;};l.prototype.getValue=function(){'use strict';return this.$AbstractTextInput1?this.$AbstractTextInput1.value:'';};function l(){'use strict';i.apply(this,arguments);}f.exports=l;},null);
__d('SearchableTextInput.react',['EventListener','React','AbstractTextInput.react','getActiveElement'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=c('React').PropTypes,i=c('React').createClass({displayName:'SearchableTextInput',propTypes:babelHelpers['extends']({},c('AbstractTextInput.react').propTypes,{queryString:h.string,searchSource:h.object,searchSourceOptions:h.object,onEntriesFound:h.func.isRequired,searchOnFocus:h.bool,searchOnUpdate:h.bool,required:h.bool,onPaste:h.func,onFocus:h.func,onChange:h.func}),componentDidMount:function(){if(this.props.onPaste)this._listener=c('EventListener').listen(this.refs.input.getTextFieldDOM(),'paste',this.props.onPaste);},componentWillReceiveProps:function(j){},componentDidUpdate:function(j){if(this.props.searchOnUpdate)if(j.queryString!==this.props.queryString)this.search(this.props.queryString);},componentWillUnmount:function(){if(this._listener){this._listener.remove();this._listener=null;}},_onInputFocus:function(){this.props.searchSource.bootstrap(function(){if(this.props.searchOnFocus)this.search(this.props.queryString);}.bind(this));this.props.onFocus&&this.props.onFocus();},_onSearchCallback:function(j,k,l){if(this.props.queryString===k)this.props.onEntriesFound(j,k,l);},_onChange:function(event){this.props.onChange&&this.props.onChange(event);var j=event.target.value;setTimeout(function(){return this.search(j);}.bind(this));},search:function(j){this.props.searchSource.search(j,this._onSearchCallback,this.props.searchSourceOptions);},focusInput:function(){var j=this.getTextFieldDOM();if(c('getActiveElement')()===j){this._onInputFocus();}else j.offsetHeight&&j.focus();},blurInput:function(){var j=this.getTextFieldDOM();j.offsetHeight&&j.blur();},getTextFieldDOM:function(){return this.refs.input.getTextFieldDOM();},render:function(){var j=this.props.queryString||'';return (c('React').createElement(c('AbstractTextInput.react'),babelHelpers['extends']({},this.props,{onChange:this._onChange,onFocus:this._onInputFocus,ref:'input',role:'combobox',value:j})));}});f.exports=i;},null);
__d('TypeaheadView.react',['cx','React'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=c('React').PropTypes,j=c('React').createClass({displayName:'TypeaheadView',propTypes:{entries:i.array.isRequired,extraRendererProps:i.object,highlightedEntry:i.object,isVisible:i.bool,queryString:i.string,Renderer:i.func.isRequired,selectedEntry:i.object},_onSelect:function(k,l){if(this.props.onSelect)this.props.onSelect(k,l);},_onHighlight:function(k){this.props.onHighlight(k);},render:function(){var k=!this.props.isVisible?"hidden_elem":'',l=babelHelpers['extends']({highlightedEntry:this.props.highlightedEntry,selectedEntry:this.props.selectedEntry,entries:this.props.entries,onSelect:this._onSelect,onHighlight:this._onHighlight,onRenderHighlight:this.props.onRenderHighlight,ariaOwneeID:this.props.ariaOwneeID,queryString:this.props.queryString},this.props.extraRendererProps),m=this.props.Renderer;return (c('React').createElement('div',{className:k},c('React').createElement(m,l)));}});f.exports=j;},null);
__d('AbstractTypeahead.react',['cx','AbstractTextField.react','ContextualLayer.react','InputSelection','React','ReactLayeredComponentMixin','SearchableTextInput.react','SearchSourceQueryStatus','TypeaheadNavigation','TypeaheadView.react','getOrCreateDOMID','joinClasses','uniqueID'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=c('React').PropTypes,j=[],k=10,l=c('React').createClass({displayName:'AbstractTypeahead',mixins:[c('ReactLayeredComponentMixin')],propTypes:babelHelpers['extends']({},c('AbstractTextField.react').propTypes,{additionalElements:i.node,inputClassName:i.string,inputID:i.string,inputStyle:i.object,autoCapitalize:i.string,autoComplete:i.string,autoCorrect:i.string,queryString:i.string,searchSource:i.object.isRequired,searchSourceOptions:i.object,excludedEntries:i.object,presenter:i.object.isRequired,onSelectAttempt:i.func,onEntriesFound:i.func,onNoEntriesFound:i.func,onEnterWithoutSelection:i.func,autoHighlight:i.bool,showEntriesOnFocus:i.bool,selectOnBlur:i.bool,selectOnTab:i.bool,focusedOnInit:i.bool,hideViewWithEntries:i.bool,disabled:i.bool,entriesWidthMatchContext:i.bool,selectedEntry:i.object,onTypeaheadVisibilityChanged:i.func,onPaste:i.func,navigation:i.object}),getDefaultProps:function(){return {autoComplete:'off',autoCorrect:'off',selectOnBlur:false,selectOnTab:true,hideViewWithEntries:true,entriesWidthMatchContext:true,navigation:c('TypeaheadNavigation')};},getInitialState:function(){return {highlightedEntry:null,isArrowNavigation:false,isAutoHighlight:this.props.autoHighlight,ariaActiveDescendantID:null,ariaOwneeID:c('uniqueID')(),activeEntries:null,focused:!!this.props.focusedOnInit,viewIsVisible:!!this.props.focusedOnInit};},_onRenderHighlight:function(m){var n=c('getOrCreateDOMID')(m);this.setState({ariaActiveDescendantID:n});},_determineViewVisibility:function(m,n){if(!m)return false;var o=m.length>0&&(this.props.showEntriesOnFocus||this.props.queryString.length>0);return !!(n&&(this.props.presenter.alwaysVisibleOnFocus||o));},_onEntriesFound:function(m,n,o){if(!this.isMounted())return;if(this.props.excludedEntries){var p=this.props.excludedEntries;m=m.filter(function(x){return !p.hasOwnProperty(x.getUniqueID());});}var q=this.props.presenter,r=typeof q.sortEntries=='function'?q.sortEntries(m,this.state.activeEntries,this.props.queryString):m,s=r.slice(0,q.maxEntries||k),t=this._determineViewVisibility(s,this.state.focused);if(!s.length){this.setState({ariaActiveDescendantID:null,activeEntries:s,highlightedEntry:null,isAutoHighlight:this.props.autoHighlight});this._setViewIsVisible(t);if(this.props.onNoEntriesFound&&o===c('SearchSourceQueryStatus').COMPLETE)this.props.onNoEntriesFound();return;}if(this.props.onEntriesFound)this.props.onEntriesFound(s,o);var u=this.state.highlightedEntry,v=u&&s.indexOf(u)!==-1;if(!this.props.autoHighlight){this.setState({activeEntries:s,highlightedEntry:v?u:null});if(t)this._setViewIsVisible(true);return;}var w=this.state.isAutoHighlight;if(w){u=s[0];}else{u=v?u:s[0];w=!v;}this.setState({activeEntries:s,highlightedEntry:u,isAutoHighlight:w});if(t)this._setViewIsVisible(true);},_onInputFocus:function(){var m=this._determineViewVisibility(this.state.activeEntries,true);if(m)this._setViewIsVisible(true);this.setState({focused:true});this.props.onFocus&&this.props.onFocus();},_onInputBlur:function(){if(this.props.hideViewWithEntries)this._close();if(this.props.selectOnBlur&&this.state.highlightedEntry)this.props.onSelectAttempt(this.state.highlightedEntry);this.setState({focused:false});this.props.onBlur&&this.props.onBlur();},_onInputClick:function(m){var n=this.getTextFieldDOM(),o=c('InputSelection').get(n);if(o&&o.start==o.end)n.select();this.props.onClick&&this.props.onClick(m);},_onEscape:function(){this._close();this.blurInput();this.setState({focused:false});this.props.onEscape&&this.props.onEscape();},_onEnter:function(event){if(this.props.onEnterWithoutSelection&&(!this.state.viewIsVisible||!this.state.highlightedEntry)){this.props.onEnterWithoutSelection(event);return;}if(!this.state.viewIsVisible)return;if(!this.state.highlightedEntry){event.preventDefault();return;}if(this.props.hideViewWithEntries)this._close();if(this.props.onSelectAttempt)this.props.onSelectAttempt(this.state.highlightedEntry,event);event.preventDefault();},_onTab:function(event){if(this.props.selectOnTab&&this.state.viewIsVisible&&this.props.onSelectAttempt&&this.state.highlightedEntry){if(this.props.hideViewWithEntries){this._close();event.preventDefault();}this.props.onSelectAttempt(this.state.highlightedEntry,event);}},_onDownArrow:function(event){event.preventDefault();this.props.navigation.moveDown(this.state.activeEntries||j,this.state.highlightedEntry,this._setHighlight);},_onUpArrow:function(event){event.preventDefault();this.props.navigation.moveUp(this.state.activeEntries||j,this.state.highlightedEntry,this._setHighlight);},_setHighlight:function(m){this.setState({highlightedEntry:m,isArrowNavigation:true,isAutoHighlight:!m});},_onInputChange:function(event){if(this.props.onChange)this.props.onChange(event);this._setViewIsVisible(this.state.focused&&(this.props.showEntriesOnFocus||event.target.value.length>0)&&(this.props.presenter.alwaysVisibleOnFocus||this.state.activeEntries!=null&&this.state.activeEntries.length>0));},_onViewHighlight:function(m){this.setState({highlightedEntry:m,isArrowNavigation:false,isAutoHighlight:false});},_getView:function(){return (c('React').createElement(c('TypeaheadView.react'),{Renderer:this.props.presenter.ViewRenderer,extraRendererProps:babelHelpers['extends']({},this.props.presenter.extraRendererProps,{isArrowNavigation:this.state.isArrowNavigation}),highlightedEntry:this.state.highlightedEntry,selectedEntry:this.props.selectedEntry,isVisible:this.state.viewIsVisible,ariaOwneeID:this.state.ariaOwneeID,onHighlight:this._onViewHighlight,onRenderHighlight:this._onRenderHighlight,onSelect:this.props.onSelectAttempt,entries:this.state.activeEntries||j,queryString:this.props.queryString}));},_setViewIsVisible:function(m){if(m!==this.state.viewIsVisible){if(this.props.onTypeaheadVisibilityChanged)this.props.onTypeaheadVisibilityChanged(m,this.state.activeEntries||j);this.setState({viewIsVisible:m});}},componentWillReceiveProps:function(m){if(!m.queryString&&!this.props.showEntriesOnFocus)this.clearActiveEntries();},componentDidUpdate:function(){var m=this._determineViewVisibility(this.state.activeEntries,this.state.focused);if(m)this._setViewIsVisible(true);},renderLayers:function(){if(!this.props.presenter.useLayer)return {};var m=null,n=null;if(this.props.context){m=this.props.context;}else n=function(){return this.refs.input;}.bind(this);return {typeaheadView:c('React').createElement(c('ContextualLayer.react'),{alignment:this.props.presenter.alignment,behaviors:this.props.presenter.layerBehaviors,containerWidthMatchContext:this.props.entriesWidthMatchContext,contextRef:n,context:m,position:this.props.presenter.layerPosition||"below",shown:this.state.viewIsVisible,shouldSetARIAProperties:false},this._getView())};},render:function(){var m=this.state.activeEntries,n=!!(m&&m.length),o=c('React').createElement(c('SearchableTextInput.react'),{'aria-activedescendant':this.state.ariaActiveDescendantID,'aria-expanded':n,'aria-autocomplete':'list','aria-label':this.props.ariaLabel,'aria-owns':this.state.ariaOwneeID,required:this.props.required,ref:'input',autoCapitalize:this.props.autoCapitalize,autoComplete:this.props.autoComplete,autoCorrect:this.props.autoCorrect,className:this.props.inputClassName,id:this.props.inputID,queryString:this.props.queryString,placeholder:this.props.placeholder,maxLength:this.props.maxLength,searchSource:this.props.searchSource,searchSourceOptions:this.props.searchSourceOptions,searchOnFocus:!!this.props.showEntriesOnFocus,disabled:this.props.disabled,onEntriesFound:this._onEntriesFound,onEscape:this._onEscape,onBlur:this._onInputBlur,onFocus:this._onInputFocus,onChange:this._onInputChange,onDownArrow:this._onDownArrow,onUpArrow:this._onUpArrow,onTab:this._onTab,onEnter:this._onEnter,onBackspace:this.props.onBackspace,onPaste:this.props.onPaste,onClick:this._onInputClick,style:this.props.inputStyle,tabIndex:this.props.tabIndex}),p=null;if(!this.props.presenter.useLayer)p=this._getView();return (c('React').createElement('span',babelHelpers['extends']({},this.props,{className:c('joinClasses')(this.props.className,"_58ah"),onBlur:null,onClick:null,onFocus:null,tabIndex:null}),o,this.props.additionalElements,p));},componentDidMount:function(){if(this.props.focusedOnInit)this.focusInput();},clearActiveEntries:function(){this.setState({ariaActiveDescendantID:null,activeEntries:null,highlightedEntry:null});},focusInput:function(){var m=this.getTextFieldDOM();if(m.value)c('InputSelection').set(m,m.value.length);this.refs.input.focusInput();},blurInput:function(){if(this.refs.input.blur){this.refs.input.blur();}else if(this.refs.input.blurInput)this.refs.input.blurInput();},hideView:function(){this._setViewIsVisible(false);},_close:function(){this._setViewIsVisible(false);this.clearActiveEntries();},getTextFieldDOM:function(){return this.refs.input.getTextFieldDOM();}});f.exports=l;},null);
__d('XUIError.react',['cx','React','ReactDOM','XUIError','joinClasses','onlyChild'],function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();var i=c('React').PropTypes,j="_1tp7",k=c('React').createClass({displayName:'ReactXUIError',propTypes:{xuiError:i.any,xuiErrorPosition:i.oneOf(['above','below','left','right']),xuiErrorAlignh:i.oneOf(['left','center','right'])},componentDidMount:function(){if(this.props.xuiError!=null)c('XUIError').__setReactError(c('ReactDOM').findDOMNode(this),{message:this.props.xuiError,position:this.props.xuiErrorPosition,alignh:this.props.xuiErrorAlignh});},componentDidUpdate:function(){if(this.props.xuiError==null){c('XUIError').__clearReactError(c('ReactDOM').findDOMNode(this));}else c('XUIError').__setReactError(c('ReactDOM').findDOMNode(this),{message:this.props.xuiError,position:this.props.xuiErrorPosition,alignh:this.props.xuiErrorAlignh});},componentWillUnmount:function(){c('XUIError').__clearReactError(c('ReactDOM').findDOMNode(this));},render:function(){var l=c('onlyChild')(this.props.children);if(this.props.xuiError!=null)l=c('React').cloneElement(l,{className:c('joinClasses')(l.props.className,j)});return l;}});f.exports=k;},null);
__d('XUITextInput.react',['cx','AbstractTextInput.react','React','XUIError.react','joinClasses'],function a(b,c,d,e,f,g,h){var i,j;if(c.__markCompiled)c.__markCompiled();var k=c('React').Component,l=c('React').PropTypes;i=babelHelpers.inherits(m,k);j=i&&i.prototype;m.defaultProps={height:'short'};m.propTypes=babelHelpers['extends']({},c('AbstractTextInput.react').propTypes,c('XUIError.react').propTypes,{height:l.oneOf(['short','tall'])});m.prototype.render=function(){'use strict';var n="_55r1"+(this.props.height==='tall'?' '+"_55r2":'')+(!!this.props.disabled?' '+"_53a0":'');return (c('React').createElement(c('XUIError.react'),this.props,c('React').createElement(c('AbstractTextInput.react'),babelHelpers['extends']({},this.props,{ref:'textInput',className:c('joinClasses')(this.props.className,n)}))));};m.prototype.focusInput=function(){'use strict';this.refs.textInput&&this.refs.textInput.focusInput();};m.prototype.blurInput=function(){'use strict';this.refs.textInput&&this.refs.textInput.blurInput();};m.prototype.getTextFieldDOM=function(){'use strict';if(this.refs.textInput)return this.refs.textInput.getTextFieldDOM();return null;};function m(){'use strict';i.apply(this,arguments);}f.exports=m;},null);
__d('XUITypeaheadTextOnlyView.react',['cx','React','TypeaheadViewItem','TypeaheadViewPropTypes'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=c('React').createClass({displayName:'XUITypeaheadTextOnlyViewItem',mixins:[c('TypeaheadViewItem').Mixin],propTypes:c('TypeaheadViewItem').propTypes,render:function(){var k=this.props.entry,l="_599m"+(this.props.highlighted?' '+"_599n":'');return (c('React').createElement('li',{'aria-label':k.getTitle(),'aria-selected':this.props.highlighted,className:l,key:k.getUniqueID(),onMouseDown:this._onSelect,onMouseEnter:this._onHighlight,role:this.props.role,title:k.getTitle()},c('React').createElement('div',{className:"_599p"},k.getTitle())));}}),j=c('React').createClass({displayName:'XUITypeaheadTextOnlyView',propTypes:c('TypeaheadViewPropTypes'),getDefaultProps:function(){return {role:'listbox'};},_renderItem:function(k){var l=k===this.props.highlightedEntry;return (c('React').createElement(i,{entry:k,highlighted:l,key:k.getUniqueID(),onSelect:this.props.onSelect,onHighlight:this.props.onHighlight,onRenderHighlight:this.props.onRenderHighlight}));},render:function(){var k="_599r"+(!this.props.entries.length?' '+"_599s":'');return (c('React').createElement('ul',{className:k,id:this.props.ariaOwneeID,role:this.props.role},this.props.entries.map(this._renderItem)));}});f.exports=j;},null);
__d('update',['invariant','Object.assign','keyOf'],function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();var i={}.hasOwnProperty;function j(u){if(Array.isArray(u)){return u.concat();}else if(u&&typeof u==='object'){return c('Object.assign')(new u.constructor(),u);}else return u;}var k=c('keyOf')({$push:null}),l=c('keyOf')({$unshift:null}),m=c('keyOf')({$splice:null}),n=c('keyOf')({$set:null}),o=c('keyOf')({$merge:null}),p=c('keyOf')({$apply:null}),q=[k,l,m,n,o,p],r={};q.forEach(function(u){r[u]=true;});function s(u,v,w){!Array.isArray(u)?h(0):void 0;var x=v[w];!Array.isArray(x)?h(0):void 0;}function t(u,v){!(typeof v==='object')?h(0):void 0;if(i.call(v,n)){!(Object.keys(v).length===1)?h(0):void 0;return v[n];}var w=j(u);if(i.call(v,o)){var x=v[o];!(x&&typeof x==='object')?h(0):void 0;!(w&&typeof w==='object')?h(0):void 0;c('Object.assign')(w,v[o]);}if(i.call(v,k)){s(u,v,k);v[k].forEach(function(z){w.push(z);});}if(i.call(v,l)){s(u,v,l);v[l].forEach(function(z){w.unshift(z);});}if(i.call(v,m)){!Array.isArray(u)?h(0):void 0;!Array.isArray(v[m])?h(0):void 0;v[m].forEach(function(z){!Array.isArray(z)?h(0):void 0;w.splice.apply(w,z);});}if(i.call(v,p)){!(typeof v[p]==='function')?h(0):void 0;w=v[p](w);}for(var y in v)if(!(r.hasOwnProperty(y)&&r[y]))w[y]=t(u[y],v[y]);return w;}f.exports=t;},null);
__d('XUITypeahead.react',['cx','AbstractTypeahead.react','Image.react','React','SearchableEntry','XUICloseButton.react','XUIError.react','XUITypeaheadTextOnlyView.react','XUITypeaheadView.react','joinClasses','update'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=c('React').PropTypes,j={ViewRenderer:c('XUITypeaheadView.react'),useLayer:true},k={ViewRenderer:c('XUITypeaheadView.react'),useLayer:false},l={ViewRenderer:c('XUITypeaheadTextOnlyView.react'),useLayer:true},m=c('React').createClass({displayName:'XUITypeahead',propTypes:babelHelpers['extends']({maxEntries:i.number,onChange:i.func.isRequired,onSelectAttempt:i.func.isRequired,onEntriesFound:i.func,onNoEntriesFound:i.func,selectedEntry:i.instanceOf(c('SearchableEntry')),tallInput:i.bool,viewStyle:i.oneOf(['textonly','rich','richNoLayer']),clearable:i.bool,onClear:i.func,showPhoto:i.bool,highlightOnSelect:i.bool,presenter:i.object,inputID:i.string},c('XUIError.react').propTypes),getDefaultProps:function(){return {viewStyle:'rich'};},componentWillMount:function(){},focusInput:function(){this.refs.typeahead&&this.refs.typeahead.focusInput();},blurInput:function(){this.refs.typeahead&&this.refs.typeahead.blurInput();},hideView:function(){this.refs.typeahead.hideView();},getTextFieldDOM:function(){return this.refs.typeahead.getTextFieldDOM();},_onClear:function(){this.props.onClear();setTimeout(function(){return this.focusInput();}.bind(this),0);},render:function(){var n="_55r1"+(!!this.props.tallInput?' '+"_55r2":''),o=null;if(this.props.presenter){o=this.props.presenter;}else if(this.props.viewStyle=='rich'){o=j;}else if(this.props.viewStyle=='richNoLayer'){o=k;}else o=l;if(!this.props.presenter&&this.props.maxEntries)o=c('update')(o,{maxEntries:{$set:this.props.maxEntries}});var p=this.props.showPhoto&&this.props.selectedEntry?c('React').createElement(c('Image.react'),{className:"_wrl",src:this.props.selectedEntry.getPhoto()}):null,q=this.props.clearable?c('React').createElement(c('XUICloseButton.react'),{className:"_wrm"+(!this.props.queryString?' '+"hidden_elem":''),size:this.props.tallInput?'medium':'small',type:'button',onClick:this._onClear}):null,r=this.props,s=r.className,t=babelHelpers.objectWithoutProperties(r,['className']);return (c('React').createElement(c('XUIError.react'),this.props,c('React').createElement('span',{className:c('joinClasses')("_wrn"+(!!this.props.tallInput?' '+"_213j":'')+(!!q?' '+"_4ehf":'')+(!!p?' '+"_4ehg":'')+(!!this.props.queryString?' '+"_4in7":'')+(this.props.highlightOnSelect&&this.props.selectedEntry?' '+"_wrr":''),s)},p,c('React').createElement(c('AbstractTypeahead.react'),babelHelpers['extends']({},t,{inputClassName:n,ref:'typeahead',presenter:o})),q)));}});f.exports=m;},null);
__d('requiredIfPropIsTruthy',['sprintf'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j){return function(k,l,m,n){if(!k[i])return;if(k[l]===undefined)return new Error(c('sprintf')('Must supply %s to %s if property %s is truthy.',l,m,i));return j(k,l,m,n);};}f.exports=h;},null);
__d('highlight',['Animation','Style'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j,k,l){new (c('Animation'))(i).from('background',l||'#fff9d7').to('background',k||'#fff').ease(c('Animation').ease.both).duration(2000).ondone(function(){c('Style').set(i,'background','');j&&j();}).go();}f.exports=h;},null);
__d('ProfileTypeaheadContainer.react',['cx','React'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=c('React').createClass({displayName:'ProfileTypeaheadContainer',render:function(){return (c('React').createElement('div',{className:"_1ceo"},this.props.children));}});f.exports=i;},null);