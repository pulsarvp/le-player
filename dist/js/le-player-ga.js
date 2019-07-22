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

	module.exports = __webpack_require__(71);


/***/ }),

/***/ 2:
/***/ (function(module, exports) {

	module.exports = $;

/***/ }),

/***/ 71:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNmFkMjdlMmM1YmJkMDA5YmM5NjA/NzJmYyoiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiJFwiPzU3YWEqIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9wbHVnaW5zL2xlLXBsYXllci1nYS5qcz8wZTU3Il0sIm5hbWVzIjpbIlBsYXllciIsIndpbmRvdyIsImxlUGxheWVyIiwiJCIsImRlZmF1bHRPcHRpb25zIiwidmlkZW9QbGF5ZWQiLCJ2aWRlb1BsYXllZERlbHRhIiwidm9sdW1lQ2hhbmdlRGVsYXkiLCJyYXRlQ2hhbmdlRGVsYXkiLCJwbHVnaW4iLCJwbHVnaW5PcHRpb25zIiwib3B0aW9ucyIsImV4dGVuZCIsInBsYXllciIsImdhIiwiY29uc29sZSIsImVycm9yIiwib24iLCJlIiwiZGF0YSIsImNvbnRyb2wiLCJuYW1lIiwiY29sbGVjdGlvbiIsInZpZXciLCJ2b2x1bWVDaGFuZ2VUaW1lb3V0IiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsInZhbHVlIiwidm9sdW1lIiwiTnVtYmVyIiwidG9GaXhlZCIsInJhdGVDaGFuZ2VUaW1lb3V0IiwicmF0ZSIsInBsYXllZEV2ZW50c1NlbnQiLCJwZXJjZW50IiwidmlkZW8iLCJwbGF5ZWRQZXJjZW50YWdlIiwiZGVsdGEiLCJmb3JFYWNoIiwiaXRlbSIsIk1hdGgiLCJhYnMiLCJsb2FkUXVhbGl0eSIsInBsYXliYWNrUXVhbGl0eSIsInRpdGxlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQSxvQjs7Ozs7OztBQ0FBOztBQUVBOzs7Ozs7QUFFQSxL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LENBQ0MsTUFERCxFQUVDLE9BRkQsRUFHQyxxQkFIRCxFQUlJeUIsT0FBT0YsS0FKWCxTQUlvQkUsSUFKcEI7QUFNQU4sc0JBQWlCTSxJQUFqQixJQUF5QixJQUF6QjtBQUVBO0FBQ0QsSUFkRDtBQWVBLEdBbEJEOztBQXFCQTtBQUNBLE1BQUlHLGNBQWMsS0FBbEI7QUFDQTdCLFNBQU9JLEVBQVAsQ0FBVSxlQUFWLEVBQTJCLFVBQVNDLENBQVQsRUFBWTtBQUN0QyxPQUFHLENBQUN3QixXQUFKLEVBQWlCO0FBQ2hCQSxrQkFBYyxJQUFkO0FBQ0E7QUFDQTs7QUFFRCxPQUFHN0IsT0FBT3NCLEtBQVAsQ0FBYVEsZUFBYixJQUFnQyxJQUFuQyxFQUF5QztBQUN4QzFDLFdBQU9hLEVBQVAsQ0FDQyxNQURELEVBRUMsT0FGRCxFQUdDLHVCQUhELEVBSUNELE9BQU9zQixLQUFQLENBQWFRLGVBQWIsQ0FBNkJDLEtBSjlCO0FBTUE7QUFDRCxHQWREO0FBZ0JBLEVBcEhELEUiLCJmaWxlIjoibGUtcGxheWVyLWdhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvanMvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNmFkMjdlMmM1YmJkMDA5YmM5NjAiLCJtb2R1bGUuZXhwb3J0cyA9ICQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCIkXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbmNvbnN0IFBsYXllciA9IHdpbmRvdy5sZVBsYXllciB8fCB3aW5kb3cuJC5sZVBsYXllcjtcbmNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuXHR2aWRlb1BsYXllZCA6IFsyNSwgNTAsIDEwMF0sXG5cdHZpZGVvUGxheWVkRGVsdGEgOiA1LFxuXHR2b2x1bWVDaGFuZ2VEZWxheSA6IDEwMDAsXG5cdHJhdGVDaGFuZ2VEZWxheSA6IDIwMDBcbn1cblxuUGxheWVyLnBsdWdpbignZ2EnLCBmdW5jdGlvbihwbHVnaW5PcHRpb25zKSB7XG5cdGNvbnN0IG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdE9wdGlvbnMsIHBsdWdpbk9wdGlvbnMpO1xuXHRjb25zdCBwbGF5ZXIgPSB0aGlzO1xuXG5cdGlmICghd2luZG93LmdhKSB7XG5cdFx0Y29uc29sZS5lcnJvcignR29vZ2xlIEFuYWx5dGljcyBkb2VzIG5vdCBleGlzdCcpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHBsYXllci5vbignZmlyc3RwbGF5JywgKGUpID0+IHtcblx0XHR3aW5kb3cuZ2EoXG5cdFx0XHQnc2VuZCcsXG5cdFx0XHQnZXZlbnQnLFxuXHRcdFx0J1BsYXllciBWaWRlbyBTdGFydGVkJ1xuXHRcdClcblx0fSk7XG5cblx0cGxheWVyLm9uKCdjb250cm9sY2xpY2snLCAoZSwgZGF0YSkgPT4ge1xuXHRcdGNvbnN0IGNvbnRyb2wgPSBkYXRhLmNvbnRyb2w7XG5cdFx0Y29uc3Qge25hbWUsIGNvbGxlY3Rpb259ID0gY29udHJvbC5vcHRpb25zO1xuXHRcdGlmKG5hbWUpIHtcblx0XHRcdHdpbmRvdy5nYShcblx0XHRcdFx0J3NlbmQnLFxuXHRcdFx0XHQnZXZlbnQnLFxuXHRcdFx0XHQnUGxheWVyIENvbnRyb2wgQ2xpY2snLFxuXHRcdFx0XHRuYW1lLFxuXHRcdFx0XHRjb2xsZWN0aW9uXG5cdFx0XHQpXG5cdFx0fVxuXHR9KTtcblxuXHRwbGF5ZXIub24oJ3NlY3Rpb25zY2xpY2snLCAoZSwgZGF0YSkgPT4ge1xuXHRcdHdpbmRvdy5nYShcblx0XHRcdCdzZW5kJyxcblx0XHRcdCdldmVudCcsXG5cdFx0XHQnUGxheWVyIFNlY3Rpb25zJyxcblx0XHRcdCdDbGljaycsXG5cdFx0XHRwbGF5ZXIudmlld1xuXHRcdClcblx0fSk7XG5cblxuXHRsZXQgdm9sdW1lQ2hhbmdlVGltZW91dCA9IG51bGw7XG5cblx0cGxheWVyLm9uKCd2b2x1bWVjaGFuZ2UnLCAoZSwgZGF0YSkgPT4ge1xuXHRcdGNsZWFyVGltZW91dCh2b2x1bWVDaGFuZ2VUaW1lb3V0KTtcblxuXHRcdHZvbHVtZUNoYW5nZVRpbWVvdXQgPSBzZXRUaW1lb3V0KF8gPT4ge1xuXHRcdFx0Y29uc3QgdmFsdWUgPSBkYXRhLnZvbHVtZTtcblx0XHRcdHdpbmRvdy5nYShcblx0XHRcdFx0J3NlbmQnLFxuXHRcdFx0XHQnZXZlbnQnLFxuXHRcdFx0XHQnUGxheWVyIFZvbHVtZSBDaGFuZ2UnLFxuXHRcdFx0XHROdW1iZXIodmFsdWUpLnRvRml4ZWQoMSlcblx0XHRcdClcblxuXHRcdH0sIG9wdGlvbnMudm9sdW1lQ2hhbmdlRGVsYXkpO1xuXHR9KTtcblxuXHRsZXQgcmF0ZUNoYW5nZVRpbWVvdXQgPSBudWxsO1xuXHRwbGF5ZXIub24oJ3JhdGVjaGFuZ2UnLCAoZSwgZGF0YSkgPT4ge1xuXHRcdGNsZWFyVGltZW91dChyYXRlQ2hhbmdlVGltZW91dCk7XG5cblx0XHRyYXRlQ2hhbmdlVGltZW91dCA9IHNldFRpbWVvdXQoXyA9PiB7XG5cdFx0XHRjb25zdCB2YWx1ZSA9IGRhdGEucmF0ZTtcblx0XHRcdHdpbmRvdy5nYShcblx0XHRcdFx0J3NlbmQnLFxuXHRcdFx0XHQnZXZlbnQnLFxuXHRcdFx0XHQnUGxheWVyIFJhdGUgQ2hhbmdlJyxcblx0XHRcdFx0dmFsdWVcblx0XHRcdClcblxuXHRcdH0sIG9wdGlvbnMucmF0ZUNoYW5nZURlbGF5KTtcblx0fSlcblxuXG5cdGxldCBwbGF5ZWRFdmVudHNTZW50ID0ge307XG5cdHBsYXllci5vbigndGltZXVwZGF0ZScsICgpID0+IHtcblx0XHRjb25zdCBwZXJjZW50ID0gcGxheWVyLnZpZGVvLnBsYXllZFBlcmNlbnRhZ2U7XG5cdFx0Y29uc3QgZGVsdGEgPSBvcHRpb25zLnZpZGVvUGxheWVkRGVsdGE7XG5cdFx0b3B0aW9ucy52aWRlb1BsYXllZC5mb3JFYWNoKGl0ZW0gPT4ge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHQhcGxheWVkRXZlbnRzU2VudFtpdGVtXSAmJlxuXHRcdFx0XHRNYXRoLmFicyhwZXJjZW50IC0gaXRlbSkgPCBkZWx0YVxuXHRcdFx0KSB7XG5cdFx0XHRcdHdpbmRvdy5nYShcblx0XHRcdFx0XHQnc2VuZCcsXG5cdFx0XHRcdFx0J2V2ZW50Jyxcblx0XHRcdFx0XHQnUGxheWVyIFZpZGVvIFBsYXllZCcsXG5cdFx0XHRcdFx0YCR7aXRlbSAtIGRlbHRhfS0ke2l0ZW19JWBcblx0XHRcdFx0KTtcblx0XHRcdFx0cGxheWVkRXZlbnRzU2VudFtpdGVtXSA9IHRydWU7XG5cblx0XHRcdH1cblx0XHR9KVxuXHR9KTtcblxuXG5cdC8vIEZpcnN0IHF1YWxpdHljaGFuZ2UgZmlyZWQgb24gcGxheWVyIGluaXQsIGFuZCB3ZSBkb24ndCBuZWVkIHRyYWNrIHRoaXMgdG8gR0Fcblx0bGV0IGxvYWRRdWFsaXR5ID0gZmFsc2U7XG5cdHBsYXllci5vbigncXVhbGl0eWNoYW5nZScsIGZ1bmN0aW9uKGUpIHtcblx0XHRpZighbG9hZFF1YWxpdHkpIHtcblx0XHRcdGxvYWRRdWFsaXR5ID0gdHJ1ZTtcblx0XHRcdHJldHVyblxuXHRcdH1cblxuXHRcdGlmKHBsYXllci52aWRlby5wbGF5YmFja1F1YWxpdHkgIT0gbnVsbCkge1xuXHRcdFx0d2luZG93LmdhKFxuXHRcdFx0XHQnc2VuZCcsXG5cdFx0XHRcdCdldmVudCcsXG5cdFx0XHRcdCdQbGF5ZXIgQ2hhbmdlIFF1YWxpdHknLFxuXHRcdFx0XHRwbGF5ZXIudmlkZW8ucGxheWJhY2tRdWFsaXR5LnRpdGxlXG5cdFx0XHQpXG5cdFx0fVxuXHR9KVxuXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL3BsdWdpbnMvbGUtcGxheWVyLWdhLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==