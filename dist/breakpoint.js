!function e(r,n,t){function o(i,c){if(!n[i]){if(!r[i]){var f="function"==typeof require&&require;if(!c&&f)return f(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var d=n[i]={exports:{}};r[i][0].call(d.exports,function(e){var n=r[i][1][e];return o(n?n:e)},d,d.exports,e,r,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}({1:[function(e,r,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=function(e){var r=e.query,n=(e.succes,e.fail),t=e.context,o=void 0===t?null:t,u=window.matchMedia(r),i=function(){this.matches?success.call(o):n.call(o)}.bind(u);return u.addListener(i),document.addEventListener("DOMContentLoaded",i),function(){return u.removeListener(i)}}},{}]},{},[1]);