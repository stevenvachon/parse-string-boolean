!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).parseBoolean=e()}}(function(){return function e(t,r,n){function o(f,u){if(!r[f]){if(!t[f]){var s="function"==typeof require&&require;if(!u&&s)return s(f,!0);if(i)return i(f,!0);var c=new Error("Cannot find module '"+f+"'");throw c.code="MODULE_NOT_FOUND",c}var l=r[f]={exports:{}};t[f][0].call(l.exports,function(e){var r=t[f][1][e];return o(r||e)},l,l.exports,e,t,r,n)}return r[f].exports}for(var i="function"==typeof require&&require,f=0;f<n.length;f++)o(n[f]);return o}({1:[function(e,t,r){"use strict";var n=e("is-string");t.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!n(e))throw new TypeError("Input must be a string");switch(e.trim().toLowerCase()){case"true":return!0;case"false":return!1;default:return t}}},{"is-string":2}],2:[function(e,t,r){"use strict";var n=String.prototype.valueOf,o=Object.prototype.toString,i="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag;t.exports=function(e){return"string"==typeof e||"object"==typeof e&&(i?function(e){try{return n.call(e),!0}catch(e){return!1}}(e):"[object String]"===o.call(e))}},{}]},{},[1])(1)});