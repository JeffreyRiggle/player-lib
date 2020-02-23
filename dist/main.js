!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}("undefined"!=typeof self?self:this,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){"use strict";var r,o="object"==typeof Reflect?Reflect:null,i=o&&"function"==typeof o.apply?o.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)};r=o&&"function"==typeof o.ownKeys?o.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var s=Number.isNaN||function(e){return e!=e};function u(){u.init.call(this)}e.exports=u,u.EventEmitter=u,u.prototype._events=void 0,u.prototype._eventsCount=0,u.prototype._maxListeners=void 0;var a=10;function c(e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function f(e){return void 0===e._maxListeners?u.defaultMaxListeners:e._maxListeners}function l(e,t,n,r){var o,i,s;if(c(n),void 0===(i=e._events)?(i=e._events=Object.create(null),e._eventsCount=0):(void 0!==i.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),i=e._events),s=i[t]),void 0===s)s=i[t]=n,++e._eventsCount;else if("function"==typeof s?s=i[t]=r?[n,s]:[s,n]:r?s.unshift(n):s.push(n),(o=f(e))>0&&s.length>o&&!s.warned){s.warned=!0;var u=new Error("Possible EventEmitter memory leak detected. "+s.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");u.name="MaxListenersExceededWarning",u.emitter=e,u.type=t,u.count=s.length,function(e){console&&console.warn&&console.warn(e)}(u)}return e}function p(e,t,n){var r={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},o=function(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}.bind(r);return o.listener=n,r.wrapFn=o,o}function h(e,t,n){var r=e._events;if(void 0===r)return[];var o=r[t];return void 0===o?[]:"function"==typeof o?n?[o.listener||o]:[o]:n?function(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(o):v(o,o.length)}function y(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"==typeof n)return 1;if(void 0!==n)return n.length}return 0}function v(e,t){for(var n=new Array(t),r=0;r<t;++r)n[r]=e[r];return n}Object.defineProperty(u,"defaultMaxListeners",{enumerable:!0,get:function(){return a},set:function(e){if("number"!=typeof e||e<0||s(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");a=e}}),u.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},u.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||s(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},u.prototype.getMaxListeners=function(){return f(this)},u.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var r="error"===e,o=this._events;if(void 0!==o)r=r&&void 0===o.error;else if(!r)return!1;if(r){var s;if(t.length>0&&(s=t[0]),s instanceof Error)throw s;var u=new Error("Unhandled error."+(s?" ("+s.message+")":""));throw u.context=s,u}var a=o[e];if(void 0===a)return!1;if("function"==typeof a)i(a,this,t);else{var c=a.length,f=v(a,c);for(n=0;n<c;++n)i(f[n],this,t)}return!0},u.prototype.addListener=function(e,t){return l(this,e,t,!1)},u.prototype.on=u.prototype.addListener,u.prototype.prependListener=function(e,t){return l(this,e,t,!0)},u.prototype.once=function(e,t){return c(t),this.on(e,p(this,e,t)),this},u.prototype.prependOnceListener=function(e,t){return c(t),this.prependListener(e,p(this,e,t)),this},u.prototype.removeListener=function(e,t){var n,r,o,i,s;if(c(t),void 0===(r=this._events))return this;if(void 0===(n=r[e]))return this;if(n===t||n.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(o=-1,i=n.length-1;i>=0;i--)if(n[i]===t||n[i].listener===t){s=n[i].listener,o=i;break}if(o<0)return this;0===o?n.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(n,o),1===n.length&&(r[e]=n[0]),void 0!==r.removeListener&&this.emit("removeListener",e,s||t)}return this},u.prototype.off=u.prototype.removeListener,u.prototype.removeAllListeners=function(e){var t,n,r;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0===arguments.length){var o,i=Object.keys(n);for(r=0;r<i.length;++r)"removeListener"!==(o=i[r])&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r]);return this},u.prototype.listeners=function(e){return h(this,e,!0)},u.prototype.rawListeners=function(e){return h(this,e,!1)},u.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):y.call(e,t)},u.prototype.listenerCount=y,u.prototype.eventNames=function(){return this._eventsCount>0?r(this._events):[]}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0);var i=function(e){function t(e,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return o.name=e,o.description=n,o._value=r,o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.EventEmitter),r(t,[{key:"changedEvent",get:function(){return"onChanged"}},{key:"value",get:function(){return this._value},set:function(e){this._value=e,this.emit(this.changedEvent,this._value)}}]),t}();t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Equipment=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0);t.Equipment=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.equiped=new Map,e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.EventEmitter),r(t,[{key:"equip",value:function(e,t){var n={bodypart:e,item:t};this.equiped.has(e)?(this.equiped.set(e,t),this.emit(this.changedEvent,{added:[],changed:[n],removed:[]})):(this.equiped.set(e,t),this.emit(this.changedEvent,{added:[n],changed:[],removed:[]}))}},{key:"unequip",value:function(e){var t=this.equiped.get(e);if(t){var n={item:t,bodypart:e};return this.equiped.delete(e),this.emit(this.changedEvent,{added:[],changed:[],removed:[n]}),t}}},{key:"getEquip",value:function(e){return this.equiped.get(e)}},{key:"changedEvent",get:function(){return"onChanged"}}]),t}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Inventory=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0);t.Inventory=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.itemMap=new Map,e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.EventEmitter),r(t,[{key:"addItem",value:function(e,t){this.itemMap.set(e,t),this.emit(this.changedEvent,{added:[e],changed:[],removed:[]})}},{key:"removeItem",value:function(e){this.itemMap.delete(e)&&this.emit(this.changedEvent,{added:[],changed:[],removed:[e]})}},{key:"getItemAmount",value:function(e){return this.itemMap.get(e)}},{key:"setItemAmount",value:function(e,t){this.itemMap.has(e)&&this.itemMap.set(e,t)}},{key:"clearItems",value:function(){var e=this.itemMap.keys();this.itemMap.clear(),this.emit(this.changedEvent,{added:[],changed:[],removed:e})}},{key:"changedEvent",get:function(){return"onChanged"}},{key:"items",get:function(){return this.itemMap.keys()}}]),t}()},function(e,t,n){"use strict";var r=n(5),o=n(6),i=n(7),s=n(2),u=n(3),a=n(8),c=n(9),f=n(10);e.exports={Attribute:r.Attribute,BodyPart:o.BodyPart,Characteristic:i.Characteristic,Equipment:s.Equipment,Inventory:u.Inventory,Item:a.Item,Player:c.Player,Property:f.Property}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Attribute=void 0;var r=function(e){return e&&e.__esModule?e:{default:e}}(n(1));t.Attribute=function(e){function t(e,n,r){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n,r))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.default),t}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BodyPart=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0);t.BodyPart=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return r.name=e,r.description=n,r.characteristics=[],r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.EventEmitter),r(t,[{key:"addCharacteristic",value:function(e){this.characteristics.push(e),this.emit(this.changedEvent,this)}},{key:"removeCharacteristic",value:function(e){var t=this.characteristics.indexOf(e);-1!==t&&(this.characteristics.splice(t,1),this.emit(this.changedEvent,this))}},{key:"clearCharacteristic",value:function(){this.characteristics=[],this.emit(this.changedEvent,this)}},{key:"changedEvent",get:function(){return"onChanged"}}]),t}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Characteristic=void 0;var r=function(e){return e&&e.__esModule?e:{default:e}}(n(1));t.Characteristic=function(e){function t(e,n,r){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n,r))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.default),t}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Item=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0);t.Item=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return r.properties=[],r.name=e,r.description=n,r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.EventEmitter),r(t,[{key:"addProperty",value:function(e){this.properties.push(e),this.emit(this.changedEvent,this)}},{key:"removeProperty",value:function(e){var t=this.properties.indexOf(e);-1!==t&&(this.properties.splice(t,1),this.emit(this.changedEvent,this))}},{key:"clearProperties",value:function(){this.properties=[],this.emit(this.changedEvent,this)}},{key:"changedEvent",get:function(){return"onChanged"}}]),t}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Player=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(3),i=n(2),s=n(0);t.Player=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.name=e,n.inventory=new o.Inventory,n.equipment=new i.Equipment,n.bodyParts=[],n.characteristics=[],n.attributes=[],n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.EventEmitter),r(t,[{key:"addBodyPart",value:function(e){this.bodyParts.push(e)}},{key:"removeBodyPart",value:function(e){var t=this.bodyParts.indexOf(e);-1!==t&&this.bodyParts.splice(t,1)}},{key:"clearBodyParts",value:function(){this.bodyParts=[]}},{key:"addCharacteristic",value:function(e){this.characteristics.push(e)}},{key:"removeCharacteristic",value:function(e){var t=this.characteristics.indexOf(e);-1!==t&&this.characteristics.splice(t,1)}},{key:"clearCharacteristics",value:function(){this.characteristics=[]}},{key:"addAttribute",value:function(e){this.attributes.push(e)}},{key:"removeAttribute",value:function(e){var t=this.attributes.indexOf(e);-1!==t&&this.attributes.splice(t,1)}},{key:"clearAttributes",value:function(){this.attributes=[]}}]),t}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Property=void 0;var r=function(e){return e&&e.__esModule?e:{default:e}}(n(1));t.Property=function(e){function t(e,n,r){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n,r))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.default),t}()}])});