!function n(e,t,r){function u(i,a){if(!t[i]){if(!e[i]){var c="function"==typeof require&&require;if(!a&&c)return c(i,!0);if(o)return o(i,!0);var l=new Error("Cannot find module '"+i+"'");throw l.code="MODULE_NOT_FOUND",l}var s=t[i]={exports:{}};e[i][0].call(s.exports,function(n){var t=e[i][1][n];return u(t?t:n)},s,s.exports,n,e,t,r)}return t[i].exports}for(var o="function"==typeof require&&require,i=0;i<r.length;i++)u(r[i]);return u}({1:[function(n,e,t){"use strict";function r(n){return n&&n.__esModule?n:{"default":n}}var u=n("./modules/breakpoint.js"),o=r(u);o["default"].between([768,1024],function(){console.log("Current screen width is between 768 and 1024 pixels.")}),o["default"].above(1024,function(){console.log("Current screen width is",this.innerWidth)},window)},{"./modules/breakpoint.js":2}],2:[function(n,e,t){"use strict";function r(n,e,t){document.addEventListener("DOMContentLoaded",function(){n()&&e.call(t)}),window.addEventListener("resize",function(){n()&&e.call(t)})}function u(){return document.documentElement.clientWidth}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={below:function(n,e){var t=arguments.length<=2||void 0===arguments[2]?null:arguments[2],o=function(){return u()<n};r(o,e,t)},above:function(n,e){var t=arguments.length<=2||void 0===arguments[2]?null:arguments[2],o=function(){return u()>n};r(o,e,t)},between:function(n,e){var t=arguments.length<=2||void 0===arguments[2]?null:arguments[2],o=function(){return u()>n[0]&&u()<n[1]};r(o,e,t)}}},{}]},{},[1]);