/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(76);


/***/ }),

/***/ 2:
/***/ (function(module, exports) {

	module.exports = $;

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Player = window.lePlayer || window.$.lePlayer;
	var defaultOptions = {
		videoPlayed: [25, 50, 100],
		videoPlayedDelta: 5,
		volumeChangeDelay: 1000,
		rateChangeDelay: 2000
	};
	
	Player.plugin('ga', function (pluginOptions) {
		var options = _jquery2.default.extend({}, defaultOptions, pluginOptions);
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
			window.ga('send', 'event', 'Player Sections', 'Click', player.view);
		});
	
		var volumeChangeTimeout = null;
	
		player.on('volumechange', function (e, data) {
			clearTimeout(volumeChangeTimeout);
	
			volumeChangeTimeout = setTimeout(function (_) {
				var value = data.volume;
				window.ga('send', 'event', 'Player Volume Change', Number(value).toFixed(1));
			}, options.volumeChangeDelay);
		});
	
		var rateChangeTimeout = null;
		player.on('ratechange', function (e, data) {
			clearTimeout(rateChangeTimeout);
	
			rateChangeTimeout = setTimeout(function (_) {
				var value = data.rate;
				window.ga('send', 'event', 'Player Rate Change', value);
			}, options.rateChangeDelay);
		});
	
		var playedEventsSent = {};
		player.on('timeupdate', function () {
			var percent = player.video.playedPercentage;
			var delta = options.videoPlayedDelta;
			options.videoPlayed.forEach(function (item) {
				if (!playedEventsSent[item] && Math.abs(percent - item) < delta) {
					window.ga('send', 'event', 'Player Video Played', item - delta + '-' + item + '%');
					playedEventsSent[item] = true;
				}
			});
		});
	
		// First qualitychange fired on player init, and we don't need track this to GA
		var loadQuality = false;
		player.on('qualitychange', function (e) {
			if (!loadQuality) {
				loadQuality = true;
				return;
			}
	
			if (player.video.playbackQuality != null) {
				window.ga('send', 'event', 'Player Change Quality', player.video.playbackQuality.title);
			}
		});
	});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTA4ZmM5NjU4MDM1NDMzNWUzZTk/ZGJmMCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCIkXCI/NTdhYSIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvcGx1Z2lucy9sZS1wbGF5ZXItZ2EuanMiXSwibmFtZXMiOlsiUGxheWVyIiwid2luZG93IiwibGVQbGF5ZXIiLCIkIiwiZGVmYXVsdE9wdGlvbnMiLCJ2aWRlb1BsYXllZCIsInZpZGVvUGxheWVkRGVsdGEiLCJ2b2x1bWVDaGFuZ2VEZWxheSIsInJhdGVDaGFuZ2VEZWxheSIsInBsdWdpbiIsInBsdWdpbk9wdGlvbnMiLCJvcHRpb25zIiwiZXh0ZW5kIiwicGxheWVyIiwiZ2EiLCJjb25zb2xlIiwiZXJyb3IiLCJvbiIsImUiLCJkYXRhIiwiY29udHJvbCIsIm5hbWUiLCJjb2xsZWN0aW9uIiwidmlldyIsInZvbHVtZUNoYW5nZVRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwidmFsdWUiLCJ2b2x1bWUiLCJOdW1iZXIiLCJ0b0ZpeGVkIiwicmF0ZUNoYW5nZVRpbWVvdXQiLCJyYXRlIiwicGxheWVkRXZlbnRzU2VudCIsInBlcmNlbnQiLCJ2aWRlbyIsInBsYXllZFBlcmNlbnRhZ2UiLCJkZWx0YSIsImZvckVhY2giLCJpdGVtIiwiTWF0aCIsImFicyIsImxvYWRRdWFsaXR5IiwicGxheWJhY2tRdWFsaXR5IiwidGl0bGUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdENBLG9COzs7Ozs7O0FDQUE7O0FBRUE7Ozs7OztBQUVBLEtBQU1BLFNB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TUFERCxFQUVDLE9BRkQsRUFHQyxxQkFIRCxFQUlJeUIsT0FBT0YsS0FKWCxTQUlvQkUsSUFKcEI7QUFNQU4sc0JBQWlCTSxJQUFqQixJQUF5QixJQUF6QjtBQUVBO0FBQ0QsSUFkRDtBQWVBLEdBbEJEOztBQXFCQTtBQUNBLE1BQUlHLGNBQWMsS0FBbEI7QUFDQTdCLFNBQU9JLEVBQVAsQ0FBVSxlQUFWLEVBQTJCLFVBQVNDLENBQVQsRUFBWTtBQUN0QyxPQUFHLENBQUN3QixXQUFKLEVBQWlCO0FBQ2hCQSxrQkFBYyxJQUFkO0FBQ0E7QUFDQTs7QUFFRCxPQUFHN0IsT0FBT3NCLEtBQVAsQ0FBYVEsZUFBYixJQUFnQyxJQUFuQyxFQUF5QztBQUN4QzFDLFdBQU9hLEVBQVAsQ0FDQyxNQURELEVBRUMsT0FGRCxFQUdDLHVCQUhELEVBSUNELE9BQU9zQixLQUFQLENBQWFRLGVBQWIsQ0FBNkJDLEtBSjlCO0FBTUE7QUFDRCxHQWREO0FBZ0JBLEVBcEhELEUiLCJmaWxlIjoibGUtcGxheWVyLWdhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvanMvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOTA4ZmM5NjU4MDM1NDMzNWUzZTkiLCJtb2R1bGUuZXhwb3J0cyA9ICQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCIkXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5jb25zdCBQbGF5ZXIgPSB3aW5kb3cubGVQbGF5ZXIgfHwgd2luZG93LiQubGVQbGF5ZXI7XG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcblx0dmlkZW9QbGF5ZWQgOiBbMjUsIDUwLCAxMDBdLFxuXHR2aWRlb1BsYXllZERlbHRhIDogNSxcblx0dm9sdW1lQ2hhbmdlRGVsYXkgOiAxMDAwLFxuXHRyYXRlQ2hhbmdlRGVsYXkgOiAyMDAwXG59XG5cblBsYXllci5wbHVnaW4oJ2dhJywgZnVuY3Rpb24ocGx1Z2luT3B0aW9ucykge1xuXHRjb25zdCBvcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRPcHRpb25zLCBwbHVnaW5PcHRpb25zKTtcblx0Y29uc3QgcGxheWVyID0gdGhpcztcblxuXHRpZiAoIXdpbmRvdy5nYSkge1xuXHRcdGNvbnNvbGUuZXJyb3IoJ0dvb2dsZSBBbmFseXRpY3MgZG9lcyBub3QgZXhpc3QnKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRwbGF5ZXIub24oJ2ZpcnN0cGxheScsIChlKSA9PiB7XG5cdFx0d2luZG93LmdhKFxuXHRcdFx0J3NlbmQnLFxuXHRcdFx0J2V2ZW50Jyxcblx0XHRcdCdQbGF5ZXIgVmlkZW8gU3RhcnRlZCdcblx0XHQpXG5cdH0pO1xuXG5cdHBsYXllci5vbignY29udHJvbGNsaWNrJywgKGUsIGRhdGEpID0+IHtcblx0XHRjb25zdCBjb250cm9sID0gZGF0YS5jb250cm9sO1xuXHRcdGNvbnN0IHtuYW1lLCBjb2xsZWN0aW9ufSA9IGNvbnRyb2wub3B0aW9ucztcblx0XHRpZihuYW1lKSB7XG5cdFx0XHR3aW5kb3cuZ2EoXG5cdFx0XHRcdCdzZW5kJyxcblx0XHRcdFx0J2V2ZW50Jyxcblx0XHRcdFx0J1BsYXllciBDb250cm9sIENsaWNrJyxcblx0XHRcdFx0bmFtZSxcblx0XHRcdFx0Y29sbGVjdGlvblxuXHRcdFx0KVxuXHRcdH1cblx0fSk7XG5cblx0cGxheWVyLm9uKCdzZWN0aW9uc2NsaWNrJywgKGUsIGRhdGEpID0+IHtcblx0XHR3aW5kb3cuZ2EoXG5cdFx0XHQnc2VuZCcsXG5cdFx0XHQnZXZlbnQnLFxuXHRcdFx0J1BsYXllciBTZWN0aW9ucycsXG5cdFx0XHQnQ2xpY2snLFxuXHRcdFx0cGxheWVyLnZpZXdcblx0XHQpXG5cdH0pO1xuXG5cblx0bGV0IHZvbHVtZUNoYW5nZVRpbWVvdXQgPSBudWxsO1xuXG5cdHBsYXllci5vbigndm9sdW1lY2hhbmdlJywgKGUsIGRhdGEpID0+IHtcblx0XHRjbGVhclRpbWVvdXQodm9sdW1lQ2hhbmdlVGltZW91dCk7XG5cblx0XHR2b2x1bWVDaGFuZ2VUaW1lb3V0ID0gc2V0VGltZW91dChfID0+IHtcblx0XHRcdGNvbnN0IHZhbHVlID0gZGF0YS52b2x1bWU7XG5cdFx0XHR3aW5kb3cuZ2EoXG5cdFx0XHRcdCdzZW5kJyxcblx0XHRcdFx0J2V2ZW50Jyxcblx0XHRcdFx0J1BsYXllciBWb2x1bWUgQ2hhbmdlJyxcblx0XHRcdFx0TnVtYmVyKHZhbHVlKS50b0ZpeGVkKDEpXG5cdFx0XHQpXG5cblx0XHR9LCBvcHRpb25zLnZvbHVtZUNoYW5nZURlbGF5KTtcblx0fSk7XG5cblx0bGV0IHJhdGVDaGFuZ2VUaW1lb3V0ID0gbnVsbDtcblx0cGxheWVyLm9uKCdyYXRlY2hhbmdlJywgKGUsIGRhdGEpID0+IHtcblx0XHRjbGVhclRpbWVvdXQocmF0ZUNoYW5nZVRpbWVvdXQpO1xuXG5cdFx0cmF0ZUNoYW5nZVRpbWVvdXQgPSBzZXRUaW1lb3V0KF8gPT4ge1xuXHRcdFx0Y29uc3QgdmFsdWUgPSBkYXRhLnJhdGU7XG5cdFx0XHR3aW5kb3cuZ2EoXG5cdFx0XHRcdCdzZW5kJyxcblx0XHRcdFx0J2V2ZW50Jyxcblx0XHRcdFx0J1BsYXllciBSYXRlIENoYW5nZScsXG5cdFx0XHRcdHZhbHVlXG5cdFx0XHQpXG5cblx0XHR9LCBvcHRpb25zLnJhdGVDaGFuZ2VEZWxheSk7XG5cdH0pXG5cblxuXHRsZXQgcGxheWVkRXZlbnRzU2VudCA9IHt9O1xuXHRwbGF5ZXIub24oJ3RpbWV1cGRhdGUnLCAoKSA9PiB7XG5cdFx0Y29uc3QgcGVyY2VudCA9IHBsYXllci52aWRlby5wbGF5ZWRQZXJjZW50YWdlO1xuXHRcdGNvbnN0IGRlbHRhID0gb3B0aW9ucy52aWRlb1BsYXllZERlbHRhO1xuXHRcdG9wdGlvbnMudmlkZW9QbGF5ZWQuZm9yRWFjaChpdGVtID0+IHtcblx0XHRcdGlmIChcblx0XHRcdFx0IXBsYXllZEV2ZW50c1NlbnRbaXRlbV0gJiZcblx0XHRcdFx0TWF0aC5hYnMocGVyY2VudCAtIGl0ZW0pIDwgZGVsdGFcblx0XHRcdCkge1xuXHRcdFx0XHR3aW5kb3cuZ2EoXG5cdFx0XHRcdFx0J3NlbmQnLFxuXHRcdFx0XHRcdCdldmVudCcsXG5cdFx0XHRcdFx0J1BsYXllciBWaWRlbyBQbGF5ZWQnLFxuXHRcdFx0XHRcdGAke2l0ZW0gLSBkZWx0YX0tJHtpdGVtfSVgXG5cdFx0XHRcdCk7XG5cdFx0XHRcdHBsYXllZEV2ZW50c1NlbnRbaXRlbV0gPSB0cnVlO1xuXG5cdFx0XHR9XG5cdFx0fSlcblx0fSk7XG5cblxuXHQvLyBGaXJzdCBxdWFsaXR5Y2hhbmdlIGZpcmVkIG9uIHBsYXllciBpbml0LCBhbmQgd2UgZG9uJ3QgbmVlZCB0cmFjayB0aGlzIHRvIEdBXG5cdGxldCBsb2FkUXVhbGl0eSA9IGZhbHNlO1xuXHRwbGF5ZXIub24oJ3F1YWxpdHljaGFuZ2UnLCBmdW5jdGlvbihlKSB7XG5cdFx0aWYoIWxvYWRRdWFsaXR5KSB7XG5cdFx0XHRsb2FkUXVhbGl0eSA9IHRydWU7XG5cdFx0XHRyZXR1cm5cblx0XHR9XG5cblx0XHRpZihwbGF5ZXIudmlkZW8ucGxheWJhY2tRdWFsaXR5ICE9IG51bGwpIHtcblx0XHRcdHdpbmRvdy5nYShcblx0XHRcdFx0J3NlbmQnLFxuXHRcdFx0XHQnZXZlbnQnLFxuXHRcdFx0XHQnUGxheWVyIENoYW5nZSBRdWFsaXR5Jyxcblx0XHRcdFx0cGxheWVyLnZpZGVvLnBsYXliYWNrUXVhbGl0eS50aXRsZVxuXHRcdFx0KVxuXHRcdH1cblx0fSlcblxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9wbHVnaW5zL2xlLXBsYXllci1nYS5qcyJdLCJzb3VyY2VSb290IjoiIn0=