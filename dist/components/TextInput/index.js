var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _applyNativeMethods=require('../../modules/applyNativeMethods');var _applyNativeMethods2=_interopRequireDefault(_applyNativeMethods);
var _createDOMElement=require('../../modules/createDOMElement');var _createDOMElement2=_interopRequireDefault(_createDOMElement);
var _findNodeHandle=require('../../modules/findNodeHandle');var _findNodeHandle2=_interopRequireDefault(_findNodeHandle);
var _omit=require('lodash/omit');var _omit2=_interopRequireDefault(_omit);
var _pick=require('lodash/pick');var _pick2=_interopRequireDefault(_pick);
var _StyleSheet=require('../../apis/StyleSheet');var _StyleSheet2=_interopRequireDefault(_StyleSheet);
var _Text=require('../Text');var _Text2=_interopRequireDefault(_Text);
var _reactTextareaAutosize=require('react-textarea-autosize');var _reactTextareaAutosize2=_interopRequireDefault(_reactTextareaAutosize);
var _TextInputState=require('./TextInputState');var _TextInputState2=_interopRequireDefault(_TextInputState);
var _UIManager=require('../../apis/UIManager');var _UIManager2=_interopRequireDefault(_UIManager);
var _View=require('../View');var _View2=_interopRequireDefault(_View);
var _ViewStylePropTypes=require('../View/ViewStylePropTypes');var _ViewStylePropTypes2=_interopRequireDefault(_ViewStylePropTypes);
var _react=require('react');var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var viewStyleProps=Object.keys(_ViewStylePropTypes2.default);




var normalizeEventHandler=function normalizeEventHandler(handler){return function(e){
if(handler){
e.nativeEvent.text=e.target.value;
return handler(e);
}
};};





var isSelectionStale=function isSelectionStale(node,selection){
if(node&&selection){var
selectionEnd=node.selectionEnd;var selectionStart=node.selectionStart;var
start=selection.start;var end=selection.end;
return start!==selectionStart||end!==selectionEnd;
}
return false;
};





var setSelection=function setSelection(node,selection){
try{
if(isSelectionStale(node,selection)){var
start=selection.start;var end=selection.end;
node.setSelectionRange(start,end||start);
}
}catch(e){}
};var

TextInput=function(_Component){_inherits(TextInput,_Component);


















































function TextInput(props,context){_classCallCheck(this,TextInput);var _this=_possibleConstructorReturn(this,(TextInput.__proto__||Object.getPrototypeOf(TextInput)).call(this,
props,context));_this.
















































































































































_handleBlur=function(e){var
onBlur=_this.props.onBlur;var
text=e.nativeEvent.text;
_this.setState({showPlaceholder:text===''});
if(onBlur){onBlur(e);}
};_this.

_handleChange=function(e){var _this$props=
_this.props;var onChange=_this$props.onChange;var onChangeText=_this$props.onChangeText;var
text=e.nativeEvent.text;
_this.setState({showPlaceholder:text===''});
if(onChange){onChange(e);}
if(onChangeText){onChangeText(text);}
};_this.

_handleClick=function(e){
if(_this.props.editable){
_this.focus();
}
};_this.

_handleFocus=function(e){var _this$props2=
_this.props;var clearTextOnFocus=_this$props2.clearTextOnFocus;var onFocus=_this$props2.onFocus;var selectTextOnFocus=_this$props2.selectTextOnFocus;var
text=e.nativeEvent.text;
var node=(0,_findNodeHandle2.default)(_this._inputRef);
if(onFocus){onFocus(e);}
if(clearTextOnFocus){_this.clear();}
if(selectTextOnFocus){node&&node.select();}
_this.setState({showPlaceholder:text===''});
};_this.

_handleKeyPress=function(e){var _this$props3=
_this.props;var blurOnSubmit=_this$props3.blurOnSubmit;var multiline=_this$props3.multiline;var onKeyPress=_this$props3.onKeyPress;var onSubmitEditing=_this$props3.onSubmitEditing;
var blurOnSubmitDefault=!multiline;
var shouldBlurOnSubmit=blurOnSubmit==null?blurOnSubmitDefault:blurOnSubmit;
if(onKeyPress){onKeyPress(e);}
if(!e.isDefaultPrevented()&&e.which===13){
if(onSubmitEditing){onSubmitEditing(e);}
if(shouldBlurOnSubmit){_this.blur();}
}
};_this.

_handleSelectionChange=function(e){var _this$props4=
_this.props;var onSelectionChange=_this$props4.onSelectionChange;var _this$props4$selectio=_this$props4.selection;var selection=_this$props4$selectio===undefined?{}:_this$props4$selectio;
if(onSelectionChange){
try{
var node=e.target;
if(isSelectionStale(node,selection)){var
selectionStart=node.selectionStart;var selectionEnd=node.selectionEnd;
e.nativeEvent.selection={start:selectionStart,end:selectionEnd};
onSelectionChange(e);
}
}catch(e){}
}
};_this.

_setInputRef=function(component){
_this._inputRef=component;
};_this.state={showPlaceholder:!props.value&&!props.defaultValue};return _this;}_createClass(TextInput,[{key:'blur',value:function blur(){_TextInputState2.default.blurTextInput((0,_findNodeHandle2.default)(this._inputRef));}},{key:'clear',value:function clear(){this.setNativeProps({text:''});}},{key:'focus',value:function focus(){_TextInputState2.default.focusTextInput((0,_findNodeHandle2.default)(this._inputRef));}},{key:'isFocused',value:function isFocused(){return _TextInputState2.default.currentlyFocusedField()===(0,_findNodeHandle2.default)(this._inputRef);}},{key:'setNativeProps',value:function setNativeProps(props){_UIManager2.default.updateView(this._inputRef,props,this);}},{key:'componentDidMount',value:function componentDidMount(){setSelection((0,_findNodeHandle2.default)(this._inputRef),this.props.selection);}},{key:'componentDidUpdate',value:function componentDidUpdate(){setSelection((0,_findNodeHandle2.default)(this._inputRef),this.props.selection);}},{key:'render',value:function render(){var _props=this.props;var accessibilityLabel=_props.accessibilityLabel;var autoCapitalize=_props.autoCapitalize;var autoComplete=_props.autoComplete;var autoCorrect=_props.autoCorrect;var autoFocus=_props.autoFocus;var defaultValue=_props.defaultValue;var editable=_props.editable;var keyboardType=_props.keyboardType;var maxLength=_props.maxLength;var maxNumberOfLines=_props.maxNumberOfLines;var multiline=_props.multiline;var numberOfLines=_props.numberOfLines;var onLayout=_props.onLayout;var placeholder=_props.placeholder;var placeholderTextColor=_props.placeholderTextColor;var secureTextEntry=_props.secureTextEntry;var style=_props.style;var testID=_props.testID;var value=_props.value;var type=void 0;switch(keyboardType){case'email-address':type='email';break;case'numeric':type='number';break;case'phone-pad':type='tel';break;case'search':case'web-search':type='search';break;case'url':type='url';break;default:type='text';}if(secureTextEntry){type='password';}var flattenedStyle=_StyleSheet2.default.flatten(style);var rootStyles=(0,_pick2.default)(flattenedStyle,viewStyleProps);var textStyles=(0,_omit2.default)(flattenedStyle,viewStyleProps);var props={autoCapitalize:autoCapitalize,autoComplete:autoComplete,autoCorrect:autoCorrect?'on':'off',autoFocus:autoFocus,defaultValue:defaultValue,maxLength:maxLength,onBlur:normalizeEventHandler(this._handleBlur),onChange:normalizeEventHandler(this._handleChange),onFocus:normalizeEventHandler(this._handleFocus),onKeyPress:normalizeEventHandler(this._handleKeyPress),onSelect:normalizeEventHandler(this._handleSelectionChange),readOnly:!editable,ref:this._setInputRef,style:[styles.input,textStyles,{outline:style.outline}],value:value};if(multiline){props.maxRows=maxNumberOfLines||numberOfLines;props.minRows=numberOfLines;}else{props.type=type;}var component=multiline?_reactTextareaAutosize2.default:'input';var optionalPlaceholder=placeholder&&this.state.showPlaceholder&&_react2.default.createElement(_View2.default,{pointerEvents:'none',style:styles.placeholder},_react2.default.createElement(_Text2.default,{children:placeholder,style:[styles.placeholderText,textStyles,placeholderTextColor&&{color:placeholderTextColor}]}));return _react2.default.createElement(_View2.default,{accessibilityLabel:accessibilityLabel,onClick:this._handleClick,onLayout:onLayout,style:[styles.initial,rootStyles],testID:testID},_react2.default.createElement(_View2.default,{style:styles.wrapper},(0,_createDOMElement2.default)(component,props),optionalPlaceholder));}}]);return TextInput;}(_react.Component);TextInput.displayName='TextInput';TextInput.propTypes=_extends({},_View2.default.propTypes,{autoCapitalize:_react.PropTypes.oneOf(['characters','none','sentences','words']),autoComplete:_react.PropTypes.string,autoCorrect:_react.PropTypes.bool,autoFocus:_react.PropTypes.bool,blurOnSubmit:_react.PropTypes.bool,clearTextOnFocus:_react.PropTypes.bool,defaultValue:_react.PropTypes.string,editable:_react.PropTypes.bool,keyboardType:_react.PropTypes.oneOf(['default','email-address','numeric','phone-pad','search','url','web-search']),maxLength:_react.PropTypes.number,maxNumberOfLines:_react.PropTypes.number,multiline:_react.PropTypes.bool,numberOfLines:_react.PropTypes.number,onBlur:_react.PropTypes.func,onChange:_react.PropTypes.func,onChangeText:_react.PropTypes.func,onFocus:_react.PropTypes.func,onKeyPress:_react.PropTypes.func,onSelectionChange:_react.PropTypes.func,placeholder:_react.PropTypes.string,placeholderTextColor:_react.PropTypes.string,secureTextEntry:_react.PropTypes.bool,selectTextOnFocus:_react.PropTypes.bool,selection:_react.PropTypes.shape({start:_react.PropTypes.number.isRequired,end:_react.PropTypes.number}),style:_Text2.default.propTypes.style,testID:_Text2.default.propTypes.testID,value:_react.PropTypes.string});TextInput.defaultProps={autoCapitalize:'sentences',autoComplete:'on',autoCorrect:true,editable:true,keyboardType:'default',multiline:false,numberOfLines:2,secureTextEntry:false,style:{}};


var styles=_StyleSheet2.default.create({
initial:{
borderColor:'black'},

wrapper:{
flex:1},

input:{
appearance:'none',
backgroundColor:'transparent',
borderRadius:0,
borderWidth:0,
boxSizing:'border-box',
color:'inherit',
flex:1,
font:'inherit',
minHeight:'100%',
padding:0,
zIndex:1},

placeholder:{
bottom:0,
left:0,
position:'absolute',
right:0,
top:0},

placeholderText:{
color:'darkgray',
overflow:'hidden',
whiteSpace:'pre'}});



module.exports=(0,_applyNativeMethods2.default)(TextInput);