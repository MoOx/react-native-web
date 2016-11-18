







var _react=require('react');
var _reactDom=require('react-dom');var _reactDom2=_interopRequireDefault(_reactDom);
var _UIManager=require('../../apis/UIManager');var _UIManager2=_interopRequireDefault(_UIManager);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
























var NativeMethodsMixin={



blur:function blur(){
_UIManager2.default.blur(_reactDom2.default.findDOMNode(this));
},





focus:function focus(){
_UIManager2.default.focus(_reactDom2.default.findDOMNode(this));
},




measure:function measure(callback){
_UIManager2.default.measure(
_reactDom2.default.findDOMNode(this),
mountSafeCallback(this,callback));

},
















measureInWindow:function measureInWindow(callback){
_UIManager2.default.measureInWindow(
_reactDom2.default.findDOMNode(this),
mountSafeCallback(this,callback));

},




measureLayout:function measureLayout(
relativeToNativeNode,
onSuccess,
onFail)
{
_UIManager2.default.measureLayout(
_reactDom2.default.findDOMNode(this),
relativeToNativeNode,
mountSafeCallback(this,onFail),
mountSafeCallback(this,onSuccess));

},




setNativeProps:function setNativeProps(nativeProps){
_UIManager2.default.updateView(
_reactDom2.default.findDOMNode(this),
nativeProps,
this);

}};






var mountSafeCallback=function mountSafeCallback(context,callback){return function(){for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}
if(!callback){
return undefined;
}
return callback.apply(context,args);
};};

module.exports=NativeMethodsMixin;