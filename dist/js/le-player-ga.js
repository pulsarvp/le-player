/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _jquery = __webpack_require__(1);\n\nvar _jquery2 = _interopRequireDefault(_jquery);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nwindow.$.lePlayer.plugin('ga', function (pluginOptions) {\n\tvar player = this;\n\n\tplayer.on('controlclick', function (e, data) {\n\t\tvar control = data.control;\n\t\tvar _control$options = control.options;\n\t\tvar name = _control$options.name;\n\t\tvar collection = _control$options.collection;\n\n\t\tif (name) {\n\t\t\twindow.ga('send', 'event', 'Player Control Click', name, collection);\n\t\t}\n\t});\n\n\tplayer.on('sectionsclick', function (e, data) {\n\t\twindow.ga('send', 'event', 'Player Sections', 'Click');\n\t});\n});\n\n/*****************\n ** WEBPACK FOOTER\n ** ./source/js/plugins/le-player-ga.js\n ** module id = 0\n ** module chunks = 1\n **/\n//# sourceURL=webpack:///./source/js/plugins/le-player-ga.js?");

/***/ },
/* 1 */
/***/ function(module, exports) {

	eval("module.exports = $;\n\n/*****************\n ** WEBPACK FOOTER\n ** external \"$\"\n ** module id = 1\n ** module chunks = 0 1\n **/\n//# sourceURL=webpack:///external_%22$%22?");

/***/ }
/******/ ]);