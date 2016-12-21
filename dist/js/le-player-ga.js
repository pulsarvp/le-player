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
/***/ function(module, exports) {

	'use strict';

	var Player = window.lePlayer || window.$.lePlayer;

	Player.plugin('ga', function (pluginOptions) {
		var player = this;

		if (!window.ga) {
			console.error('Google Analytics does not exist');
			return;
		}

		player.on('firstplay', function (e) {
			window.ga('send', 'event', 'Player Video Started');
		});

		player.on('controlclick', function (e, data) {
			var control = data.control;
			var _control$options = control.options,
			    name = _control$options.name,
			    collection = _control$options.collection;

			if (name) {
				window.ga('send', 'event', 'Player Control Click', name, collection);
			}
		});

		player.on('sectionsclick', function (e, data) {
			window.ga('send', 'event', 'Player Sections', 'Click', player.getView());
		});

		player.on('timeupdate', function () {
			var percent = player.video.playedPercentage;
			var delta = 5;
			if (Math.abs(percent - 100) < delta) {
				window.ga('send', 'event', 'Player Video Played', '95-100%');
			}
		});
	});

/***/ }
/******/ ]);