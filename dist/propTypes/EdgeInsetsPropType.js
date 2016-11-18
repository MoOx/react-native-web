











'use strict';

var PropTypes=require('react').PropTypes;

var createStrictShapeTypeChecker=require('./createStrictShapeTypeChecker');

var EdgeInsetsPropType=createStrictShapeTypeChecker({
top:PropTypes.number,
left:PropTypes.number,
bottom:PropTypes.number,
right:PropTypes.number});


module.exports=EdgeInsetsPropType;