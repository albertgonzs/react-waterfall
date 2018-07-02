"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var React=require("react"),React__default=_interopDefault(React);function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){_defineProperty(e,t,r[t])})}return e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");_setPrototypeOf(e.prototype,t&&t.prototype),t&&_setPrototypeOf(e,t)}function _getPrototypeOf(e){return(_getPrototypeOf=Object.getPrototypeOf||function(e){return e.__proto__})(e)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _objectWithoutProperties(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_nonIterableSpread()}function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}var EnhancedProvider=function(e,t,r){return function(n){function o(t){var n;return _classCallCheck(this,o),(n=_possibleConstructorReturn(this,_getPrototypeOf(o).call(this))).state=t.initialState||r,e(_assertThisInitialized(_assertThisInitialized(n))),n}return _createClass(o,[{key:"render",value:function(){return React__default.createElement(t,{value:this.state},this.props.children)}}]),_inherits(o,n),o}(React.Component)},Prevent=function(e){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,_getPrototypeOf(t).apply(this,arguments))}return _createClass(t,[{key:"render",value:function(){var e=this.props;return(0,e.renderComponent)(_objectWithoutProperties(e,["renderComponent"]))}}]),_inherits(t,e),t}(React.PureComponent),connect=function(e){return function(t){return function(r){var n=function(e){return React.createElement(r,e)},o=function(r){return React.createElement(e,null,function(e){var o=t(e||{});return React.createElement(Prevent,_extends({renderComponent:n},r,o))})};return o.displayName="Connect(".concat(r.displayName||r.name||"Unknown",")"),o}}},Subscriptions=function e(){var t=this;_classCallCheck(this,e),_defineProperty(this,"subscriptions",[]),_defineProperty(this,"getSubscriptions",function(){return t.subscriptions}),_defineProperty(this,"subscribe",function(e){t.subscriptions=_toConsumableArray(t.subscriptions).concat([e])}),_defineProperty(this,"unsubscribe",function(e){t.subscriptions=t.subscriptions.filter(function(t){return t!==e})})},id=0,devtools=function(e,t){var r=e.initialState,n=window.devToolsExtension,o=id;id+=1;var i="react-waterfall - ".concat(o),a=n.connect({name:i,features:{jump:!0}});return a.subscribe(function(e){switch(e.type){case"START":a.init(r);break;case"RESET":t.setState(r);break;case"DISPATCH":switch(e.payload.type){case"JUMP_TO_STATE":case"JUMP_TO_ACTION":t.setState(JSON.parse(e.state))}}}),function(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];a.send(_objectSpread({type:e},n),t.state,{},o)}},defaultMiddlewares="undefined"!=typeof window&&window.devToolsExtension?[devtools]:[],createStore=function(e){var t,r=e.initialState,n=e.actionsCreators,o=void 0===n?{}:n,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=React.createContext(),c=new Subscriptions,s=c.getSubscriptions,u=c.subscribe,l=c.unsubscribe,f=r,p=function(e,r){for(var n=arguments.length,o=new Array(n>2?n-2:0),i=2;i<n;i++)o[i-2]=arguments[i];return f=_objectSpread({},f,r),new Promise(function(n){s().forEach(function(t){return t.apply(void 0,[e,r].concat(o))}),t.setState(f,function(){t.initializedMiddlewares.forEach(function(t){return t.apply(void 0,[e].concat(o))}),n()})})},d=Object.keys(o).reduce(function(e,r){return _objectSpread({},e,_defineProperty({},r,function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];if(t){var a=o[r].apply(o,[f,d].concat(n));return a.then?a.then(function(e){return p.apply(void 0,[r,e].concat(n))}):p.apply(void 0,[r,a].concat(n))}console.error("<Provider /> is not initialized yet")}))},{});return{Provider:EnhancedProvider(function(e){var n=_toConsumableArray(i).concat(defaultMiddlewares).map(function(t){return t({initialState:r,actionsCreators:o},e,d)});t={setState:function(t,r){return e.setState(t,r)},initializedMiddlewares:n}},a.Provider,r),connect:connect(a.Consumer),actions:d,subscribe:u,unsubscribe:l}};module.exports=createStore;
//# sourceMappingURL=react-waterfall.dev.js.map
