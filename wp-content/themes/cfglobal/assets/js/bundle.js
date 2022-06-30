/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/nanoevents/index.js":
/*!******************************************!*\
  !*** ./node_modules/nanoevents/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("(\n  /**\n   * Interface for event subscription.\n   *\n   * @example\n   * var NanoEvents = require('nanoevents')\n   *\n   * class Ticker {\n   *   constructor() {\n   *     this.emitter = new NanoEvents()\n   *   }\n   *   on() {\n   *     return this.emitter.on.apply(this.events, arguments)\n   *   }\n   *   tick() {\n   *     this.emitter.emit('tick')\n   *   }\n   * }\n   *\n   * @alias NanoEvents\n   * @class\n   */\n  module.exports = function NanoEvents () {\n    /**\n     * Event names in keys and arrays with listeners in values.\n     * @type {object}\n     *\n     * @example\n     * Object.keys(ee.events)\n     *\n     * @alias NanoEvents#events\n     */\n    this.events = { }\n  }\n).prototype = {\n\n  /**\n   * Calls each of the listeners registered for a given event.\n   *\n   * @param {string} event The event name.\n   * @param {...*} arguments The arguments for listeners.\n   *\n   * @return {undefined}\n   *\n   * @example\n   * ee.emit('tick', tickType, tickDuration)\n   *\n   * @alias NanoEvents#emit\n   * @method\n   */\n  emit: function emit (event) {\n    var args = [].slice.call(arguments, 1)\n    // Array.prototype.call() returns empty array if context is not array-like\n    ;[].slice.call(this.events[event] || []).filter(function (i) {\n      i.apply(this, args) // this === global or window\n    })\n  },\n\n  /**\n   * Add a listener for a given event.\n   *\n   * @param {string} event The event name.\n   * @param {function} cb The listener function.\n   *\n   * @return {function} Unbind listener from event.\n   *\n   * @example\n   * const unbind = ee.on('tick', (tickType, tickDuration) => {\n   *   count += 1\n   * })\n   *\n   * disable () {\n   *   unbind()\n   * }\n   *\n   * @alias NanoEvents#on\n   * @method\n   */\n  on: function on (event, cb) {\n    if ( true && typeof cb !== 'function') {\n      throw new Error('Listener must be a function')\n    }\n\n    (this.events[event] = this.events[event] || []).push(cb)\n\n    return function () {\n      this.events[event] = this.events[event].filter(function (i) {\n        return i !== cb\n      })\n    }.bind(this)\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/nanoevents/index.js?");

/***/ }),

/***/ "./wp-content/themes/cfglobal/src/js/app.js":
/*!**************************************************!*\
  !*** ./wp-content/themes/cfglobal/src/js/app.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(jQuery) {\n\nvar _jquery = __webpack_require__(/*! jquery */ \"jquery\");\n\nvar _jquery2 = _interopRequireDefault(_jquery);\n\nvar _emitter = __webpack_require__(/*! ./modules/emitter.js */ \"./wp-content/themes/cfglobal/src/js/modules/emitter.js\");\n\nvar _emitter2 = _interopRequireDefault(_emitter);\n\nvar _utils = __webpack_require__(/*! ./modules/utils.js */ \"./wp-content/themes/cfglobal/src/js/modules/utils.js\");\n\nvar _utils2 = _interopRequireDefault(_utils);\n\nvar _sliders = __webpack_require__(/*! ./modules/sliders.js */ \"./wp-content/themes/cfglobal/src/js/modules/sliders.js\");\n\nvar _sliders2 = _interopRequireDefault(_sliders);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * GLOBAL REQS\n * Include the required libs from the window (see package.json for more)\n */\n(0, _jquery2.default)('body').addClass('js-loading');\n\n/**\n * MAIN DOM READY EVENT\n */\n\n/**\n * MODULE REQS\n */\n//es6 style\njQuery(document).ready(function ($) {\n\t/**\n  * INIT MODULES\n  * Calls the basic setup/init functions on each module.\n  * How are we going to structure this?\n  */\n\n\t_emitter2.default.emit('dom:loaded');\n\n\t$('body').addClass(_utils2.default.isTouch() ? 'is-touch' : 'no-touch');\n\t_sliders2.default.init();\n\n\t// Lets not start any animations until the DOM is ready\n\t$('body').removeClass('js-loading');\n\n\t$('.js-hamburger-toggle').on('click', function () {\n\t\tif ($('.js-mobile-menu').hasClass('isActive')) {\n\t\t\t$('.js-mobile-menu-overlay').removeClass('isActive');\n\t\t\t$('.js-mobile-menu').removeClass('isActive');\n\t\t} else {\n\t\t\t$('.js-mobile-menu-overlay').addClass('isActive');\n\t\t\t$('.js-mobile-menu').addClass('isActive');\n\t\t}\n\t});\n\n\t$('.js-mobile-menu-overlay').on('click', function () {\n\t\t$('.js-mobile-menu-overlay').removeClass('isActive');\n\t\t$('.js-mobile-menu').removeClass('isActive');\n\t});\n\n\t$('.js-has-children').hover(function () {\n\t\t$('.js-fake-nav').addClass('isActive');\n\t}, function () {\n\t\t$('.js-fake-nav').removeClass('isActive');\n\t});\n\n\t/*\n * Accordions\n */\n\t$('.js-accordion-title').on('click', function () {\n\t\tvar $this = $(this);\n\t\tvar accordion = $(this).parent('.accordion');\n\n\t\tif (accordion.hasClass('isActive')) {\n\t\t\taccordion.removeClass('isActive');\n\t\t} else {\n\t\t\t$('.accordion').removeClass('isActive');\n\t\t\taccordion.addClass('isActive');\n\t\t}\n\t});\n\n\tif (window.location.hash) {\n\n\t\tvar target = window.location.hash;\n\t\t$('body, html').animate({\n\t\t\tscrollTop: $(target).offset().top\n\t\t}, 200);\n\t\tevent.preventDefault();\n\t}\n\n\t$('.js-plus').on('click', function () {\n\t\tvar desc = $(this).attr('data-desc');\n\t\tvar row = $(this).attr('data-row');\n\t\tif ($(this).hasClass('isActive')) {\n\t\t\t$(this).removeClass('isActive');\n\t\t\t$('.js-member-desc-' + row).removeClass('isActive');\n\t\t\t$('.js-member-desc-' + row).html('');\n\t\t\t$(this).siblings('.js-member-desc__mob').removeClass('isActive');\n\t\t} else {\n\t\t\t$('.js-plus[data-row=' + row + ']').removeClass('isActive');\n\t\t\t$('.js-plus[data-row=' + row + ']').siblings('.js-member-desc__mob').removeClass('isActive');\n\t\t\t$(this).addClass('isActive');\n\t\t\t$('.js-member-desc-' + row).addClass('isActive');\n\t\t\t$('.js-member-desc-' + row).html(desc);\n\t\t\t$(this).siblings('.js-member-desc__mob').addClass('isActive');\n\t\t}\n\t});\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"jquery\")))\n\n//# sourceURL=webpack:///./wp-content/themes/cfglobal/src/js/app.js?");

/***/ }),

/***/ "./wp-content/themes/cfglobal/src/js/modules/emitter.js":
/*!**************************************************************!*\
  !*** ./wp-content/themes/cfglobal/src/js/modules/emitter.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _nanoevents = __webpack_require__(/*! nanoevents */ \"./node_modules/nanoevents/index.js\");\n\nvar _nanoevents2 = _interopRequireDefault(_nanoevents);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar emitter = new _nanoevents2.default(); /**\n                                           * Really simply exposes an emitter instance we can use across all of our modules\n                                           */\nexports.default = emitter;\n\n//# sourceURL=webpack:///./wp-content/themes/cfglobal/src/js/modules/emitter.js?");

/***/ }),

/***/ "./wp-content/themes/cfglobal/src/js/modules/sliders.js":
/*!**************************************************************!*\
  !*** ./wp-content/themes/cfglobal/src/js/modules/sliders.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($) {\n\nfunction slider() {\n\n\tvar locationWindowsSlider = $('.js-location-windows-slider').slick({\n\t\tarrows: false,\n\t\tautoplay: true,\n\t\tspeed: 3000,\n\t\tautoplaySpeed: 0,\n\t\tcssEase: 'linear'\n\t});\n}\n\nfunction init() {\n\tslider();\n}\n\nmodule.exports = {\n\tinit: init\n};\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"jquery\")))\n\n//# sourceURL=webpack:///./wp-content/themes/cfglobal/src/js/modules/sliders.js?");

/***/ }),

/***/ "./wp-content/themes/cfglobal/src/js/modules/utils.js":
/*!************************************************************!*\
  !*** ./wp-content/themes/cfglobal/src/js/modules/utils.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($) {\n\nfunction debounce(fn, delay) {\n\tvar timer = null;\n\treturn function () {\n\t\tvar context = this,\n\t\t    args = arguments;\n\t\tclearTimeout(timer);\n\t\ttimer = setTimeout(function () {\n\t\t\tfn.apply(context, args);\n\t\t}, delay);\n\t};\n}\n\nfunction isMobile() {\n\tvar mobileWidth = 480;\n\treturn $(window).width() < mobileWidth;\n}\n\nfunction isTouch() {\n\treturn 'ontouchstart' in document.documentElement;\n}\n\nfunction getUrlVars() {\n\tvar vars = {},\n\t    hash;\n\tvar hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');\n\tfor (var i = 0; i < hashes.length; i++) {\n\t\tif (hashes[i].indexOf('http') < 0) {\n\t\t\thash = hashes[i].split('=');\n\t\t\tvars[hash[0]] = hash[1];\n\t\t}\n\t}\n\treturn vars;\n}\n\nmodule.exports = {\n\tdebounce: debounce,\n\tisMobile: isMobile,\n\tisTouch: isTouch,\n\tgetUrlVars: getUrlVars\n};\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"jquery\")))\n\n//# sourceURL=webpack:///./wp-content/themes/cfglobal/src/js/modules/utils.js?");

/***/ }),

/***/ 0:
/*!********************************************************!*\
  !*** multi ./wp-content/themes/cfglobal/src/js/app.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /Users/ryanedmondson/Sites/cfglobal/wp-content/themes/cfglobal/src/js/app.js */\"./wp-content/themes/cfglobal/src/js/app.js\");\n\n\n//# sourceURL=webpack:///multi_./wp-content/themes/cfglobal/src/js/app.js?");

/***/ }),

/***/ "jquery":
/*!********************************!*\
  !*** external "window.jQuery" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = window.jQuery;\n\n//# sourceURL=webpack:///external_%22window.jQuery%22?");

/***/ })

/******/ });