











'use strict';var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};

var Animated=require('../../apis/Animated');
var EdgeInsetsPropType=require('../../propTypes/EdgeInsetsPropType');
var NativeMethodsMixin=require('../../modules/NativeMethodsMixin');
var React=require('react');
var StyleSheet=require('../../apis/StyleSheet');
var Touchable=require('./Touchable');








var PRESS_RETENTION_OFFSET={top:20,left:20,right:20,bottom:30};








var TouchableBounce=React.createClass({displayName:'TouchableBounce',
mixins:[Touchable.Mixin,NativeMethodsMixin],

propTypes:{
onPress:React.PropTypes.func,
onPressIn:React.PropTypes.func,
onPressOut:React.PropTypes.func,



onPressWithCompletion:React.PropTypes.func,

onPressAnimationComplete:React.PropTypes.func,







pressRetentionOffset:EdgeInsetsPropType,








hitSlop:EdgeInsetsPropType},


getInitialState:function getInitialState(){
return _extends({},
this.touchableGetInitialState(),{
scale:new Animated.Value(1)});

},

bounceTo:function bounceTo(
value,
velocity,
bounciness,
callback)
{
Animated.spring(this.state.scale,{
toValue:value,
velocity:velocity,
bounciness:bounciness}).
start(callback);
},





touchableHandleActivePressIn:function touchableHandleActivePressIn(e){
this.bounceTo(0.93,0.1,0);
this.props.onPressIn&&this.props.onPressIn(e);
},

touchableHandleActivePressOut:function touchableHandleActivePressOut(e){
this.bounceTo(1,0.4,0);
this.props.onPressOut&&this.props.onPressOut(e);
},

touchableHandlePress:function touchableHandlePress(e){var _this=this;
var onPressWithCompletion=this.props.onPressWithCompletion;
if(onPressWithCompletion){
onPressWithCompletion(function(){
_this.state.scale.setValue(0.93);
_this.bounceTo(1,10,10,_this.props.onPressAnimationComplete);
});
return;
}

this.bounceTo(1,10,10,this.props.onPressAnimationComplete);
this.props.onPress&&this.props.onPress(e);
},

touchableGetPressRectOffset:function touchableGetPressRectOffset(){
return this.props.pressRetentionOffset||PRESS_RETENTION_OFFSET;
},

touchableGetHitSlop:function touchableGetHitSlop(){
return this.props.hitSlop;
},

touchableGetHighlightDelayMS:function touchableGetHighlightDelayMS(){
return 0;
},

render:function render(){
var scaleTransform=[{scale:this.state.scale}];
var propsTransform=this.props.style.transform;
var transform=propsTransform&&Array.isArray(propsTransform)?propsTransform.concat(scaleTransform):scaleTransform;

return(
React.createElement(Animated.View,{
accessible:true,
accessibilityLabel:this.props.accessibilityLabel,
accessibilityRole:this.props.accessibilityRole||'button',
testID:this.props.testID,
hitSlop:this.props.hitSlop,
onStartShouldSetResponder:this.touchableHandleStartShouldSetResponder,
onResponderTerminationRequest:this.touchableHandleResponderTerminationRequest,
onResponderGrant:this.touchableHandleResponderGrant,
onResponderMove:this.touchableHandleResponderMove,
onResponderRelease:this.touchableHandleResponderRelease,
onResponderTerminate:this.touchableHandleResponderTerminate,
style:[styles.root,this.props.style,{transform:transform}],
tabIndex:'0'},

this.props.children));


}});


var styles=StyleSheet.create({
root:{
cursor:'pointer',
userSelect:'none'}});



module.exports=TouchableBounce;