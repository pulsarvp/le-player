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

	module.exports = __webpack_require__(78);


/***/ }),

/***/ 2:
/***/ (function(module, exports) {

	module.exports = $;

/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Player = window.lePlayer || window.$.lePlayer;
	var Entity = Player.getComponent('Entity');
	
	var trackProvide = function trackProvide(track) {
		if (track == null || track.languageCode == null) {
			return track;
		}
		return {
			language: track.languageCode,
			title: track.languageCode,
			tooltip: track.languageName,
			name: track.languageCode
		};
	};
	
	var Youtube = function (_Entity) {
		_inherits(Youtube, _Entity);
	
		function Youtube(player, options) {
			_classCallCheck(this, Youtube);
	
			var _this = _possibleConstructorReturn(this, (Youtube.__proto__ || Object.getPrototypeOf(Youtube)).call(this, player, options));
	
			_this._paused = true;
	
			_this.src = _this.player.options.src;
	
			_this.player.addClass('leplayer--youtube');
			_this.element.on('click', _this.onClick.bind(_this));
			_this.element.on('dblclick', _this.onDblclick.bind(_this));
			return _this;
		}
	
		/**
	  * @override
	  */
	
	
		_createClass(Youtube, [{
			key: 'onClick',
			value: function onClick(event) {
				this.trigger('click');
			}
		}, {
			key: 'onDblclick',
			value: function onDblclick() {
				this.trigger('dblclick');
			}
		}, {
			key: 'increaseRate',
	
	
			/**
	   * @override
	   */
			value: function increaseRate() {
				var index = this.availableRates.indexOf(this.rate);
				if (index + 1 >= this.availableRates.length) return;
				return this.rate = this.availableRates[index + 1];
			}
	
			/**
	   * @override
	   */
	
		}, {
			key: 'decreaseRate',
			value: function decreaseRate() {
				var index = this.availableRates.indexOf(this.rate);
				if (index - 1 < 0) return;
				return this.rate = this.availableRates[index - 1];
			}
		}, {
			key: 'getAvailableQualityLevels',
			value: function getAvailableQualityLevels() {
				var arr = this.ytPlayer.getAvailableQualityLevels();
				var index = arr.indexOf('auto');
	
				if (index > -1) {
					arr.splice(index, 1);
				}
	
				return arr.map(function (item) {
					return {
						title: Youtube.QUALITY_NAMES[item] || item,
						name: item
					};
				});
			}
		}, {
			key: 'supportsFullScreen',
			value: function supportsFullScreen() {
				return true;
			}
		}, {
			key: 'play',
			value: function play() {
				this.ytPlayer.playVideo();
				this.trigger('play');
			}
		}, {
			key: 'pause',
			value: function pause() {
				this.ytPlayer.pauseVideo();
				this.trigger('pause');
			}
		}, {
			key: 'init',
			value: function init() {
				var _this2 = this;
	
				_get(Youtube.prototype.__proto__ || Object.getPrototypeOf(Youtube.prototype), 'init', this).call(this);
				return Youtube.apiLoaded().then(function () {
					return _this2.initYTPlayer();
				});
			}
		}, {
			key: 'createElement',
			value: function createElement() {
				this.element = (0, _jquery2.default)('<div />').addClass('leplayer__youtube-wrapper').attr('tabindex', '0');
				this.youtubeElement = (0, _jquery2.default)('<div />').addClass('leplayer__youtube');
				this.blocker = (0, _jquery2.default)('<div />').addClass('leplayer__youtube-blocker');
	
				return this.element.append(this.blocker).append(this.youtubeElement);
			}
		}, {
			key: 'initYTPlayer',
			value: function initYTPlayer() {
				var _this3 = this;
	
				this._initPromise = _jquery2.default.Deferred();
				var globalOptions = this.player.options;
				var ytOptions = {
					autoplay: globalOptions.autoplay ? 1 : 0,
					loop: globalOptions.loop ? 1 : 0,
					iv_load_policy: 3,
					controls: 0,
					modestbranding: 1,
					rel: 0,
					showinfo: 0,
					cc_load_policy: 0,
					disablekb: 0,
					fs: 0,
					start: globalOptions.time
				};
	
				YT.ready(function () {
					_this3.options.ctx.replaceWith(_this3.element);
	
					_this3.ytPlayer = new YT.Player(_this3.youtubeElement[0], {
						videoId: _this3.videoId,
						width: globalOptions.width || '100%',
						playerVars: ytOptions,
						events: {
							onReady: _this3.onYTPReady.bind(_this3),
							onStateChange: _this3.onYTPStateChange.bind(_this3),
							onPlaybackRateChange: _this3.onYTPRateChange.bind(_this3),
							onPlaybackQualityChange: _this3.onYTPPlaybackQualityChange.bind(_this3)
						}
					});
				});
				return this._initPromise.promise();
			}
		}, {
			key: 'setAvailablePlaybackRates',
			value: function setAvailablePlaybackRates() {
				this.availableRates = this.ytPlayer.getAvailablePlaybackRates();
				this.rateMin = this.availableRates[0];
				this.rateMax = this.availableRates[this.availableRates.length - 1];
			}
		}, {
			key: 'onYTPReady',
			value: function onYTPReady(e) {
				this._initPromise.resolve();
				this._initRate();
				this._initVolume();
				this.setAvailablePlaybackRates();
			}
		}, {
			key: 'onYTPRateChange',
			value: function onYTPRateChange(e) {
				this.trigger('ratechange');
			}
		}, {
			key: 'onYTPPlaybackQualityChange',
			value: function onYTPPlaybackQualityChange(e) {
				var data = e.data;
				this._playbackQuality = this.getAvailableQualityLevels().find(function (item) {
					return item.name === data;
				});
				this.trigger('qualitychange', this._playbackQuality);
			}
		}, {
			key: 'onYTPStateChange',
			value: function onYTPStateChange(e) {
				var state = e.data;
				if (state === this.lastState) {
					return;
				}
	
				this.lastState = state;
				switch (state) {
					case YT.PlayerState.UNSTARTED:
						this.trigger('loadstart');
						this.trigger('loadedmetadata');
						this.trigger('durationchange');
						this.trigger('ratechange');
						this.trigger('volumechange');
						this.trigger('trackschange');
						if (this.player.options.autoplay) {
							this.trigger('play');
						}
						break;
	
					case YT.PlayerState.ENDED:
						this.trigger('pause');
						this.trigger('ended');
						break;
	
					case YT.PlayerState.PLAYING:
						this.trigger('timeupdate');
						this.trigger('durationchange');
						this.trigger('playing');
	
						this.ytPlayer.setPlaybackQuality(this._nextPlaybackQuality);
	
						if (this.isSeeking) {
							this.onSeeked();
						}
	
						this.loadCaptions();
						this.emitTimeupdate();
						break;
	
					case YT.PlayerState.PAUSED:
						this.trigger('canplay');
	
						if (this.isSeeking) {
							this.onSeeked();
						}
						break;
	
					case YT.PlayerState.BUFFERING:
						this.player.trigger('timeupdate');
						this.player.trigger('waiting');
	
						this.ytPlayer.setPlaybackQuality(this._nextPlaybackQuality);
	
						break;
				}
			}
		}, {
			key: 'onSeeked',
			value: function onSeeked() {
				clearInterval(this.seekingInterval);
				this.isSeeking = false;
	
				if (this.wasPausedBeforeSeek) {
					this.pause();
				}
	
				this.trigger('seeked');
			}
		}, {
			key: 'emitTimeupdate',
			value: function emitTimeupdate() {
				var _this4 = this;
	
				clearInterval(this.seekingInterval);
	
				this.seekingInterval = setInterval(function () {
					if (_this4.lastState === YT.PlayerState.PAUSED) {
						clearInterval(_this4.seekingInterval);
					} else if (_this4.currentTime !== _this4.timeBeforeSeek) {
						_this4.trigger('timeupdate');
					}
				}, 250);
			}
		}, {
			key: 'loadCaptions',
			value: function loadCaptions() {
				var _this5 = this;
	
				var emptyTracklist = function emptyTracklist() {
					return _this5.subtitles == null || _this5.subtitles.length === 0;
				};
	
				clearInterval(this._loadCaptionsWatcher);
				if (!this._tracksDisable && this.checkCaptionsExist() && emptyTracklist()) {
					this.ytPlayer.loadModule('captions');
	
					this._loadCaptionsWatcher = setInterval(function () {
						if (!emptyTracklist() && _this5.checkCaptionsExist()) {
							_this5.trigger('trackschange');
							clearInterval(_this5._loadCaptionsWatcher);
						}
					}, 250);
				}
			}
		}, {
			key: 'checkCaptionsExist',
			value: function checkCaptionsExist() {
				try {
					return this.ytPlayer.getOptions('captions') != null;
				} catch (error) {
					return false;
				}
			}
		}, {
			key: 'src',
			set: function set(src) {
				if (src == null) return;
				if (this.src && this.src.url === src.url) return;
	
				var url = src.url || src.id;
	
				this.videoId = Youtube.parseUrl(url);
	
				if (this.player.options.poster) {
					this.poster = this.player.options.poster;
				} else {
					this.poster = 'https://img.youtube.com/vi/' + this.videoId + '/0.jpg';
				}
			}
		}, {
			key: 'currentTime',
			get: function get() {
				return this.ytPlayer ? this.ytPlayer.getCurrentTime() : 0;
			},
			set: function set(value) {
				if (this.lastState === YT.PlayerState.PAUSED) {
					this.timeBeforeSeek = this.currentTime;
				}
	
				if (!this.isSeeking) {
					this.wasPausedBeforeSeek = this.paused;
				}
	
				var time = void 0;
				if (value >= this.duration) {
					time = this.duration;
				} else if (value < 0) {
					time = 0;
				} else {
					time = value;
				}
	
				this.isSeeking = true;
				this.ytPlayer.seekTo(time, true);
				this.player.trigger('timeupdateload', { currentTime: time });
	
				this.trigger('seeking');
	
				this.emitTimeupdate();
			}
		}, {
			key: 'duration',
			get: function get() {
				return this.ytPlayer && this.ytPlayer.getDuration ? this.ytPlayer.getDuration() : NaN;
			}
		}, {
			key: 'paused',
			get: function get() {
				return this.ytPlayer ? this.lastState !== YT.PlayerState.PLAYING && this.lastState !== YT.PlayerState.BUFFERING : true;
			}
		}, {
			key: 'rate',
			get: function get() {
				return this.ytPlayer.getPlaybackRate();
			},
			set: function set(value) {
				_set(Youtube.prototype.__proto__ || Object.getPrototypeOf(Youtube.prototype), 'rate', value, this);
				this.ytPlayer.setPlaybackRate(value);
				this.trigger('ratechange');
			}
		}, {
			key: 'muted',
			set: function set(value) {
				var _this6 = this;
	
				if (value) {
					this.ytPlayer.mute();
				} else {
					this.ytPlayer.unMute();
				}
	
				setTimeout(function () {
					_this6.trigger('volumechange');
				}, 50);
			},
			get: function get() {
				return this.ytPlayer.isMuted();
			}
		}, {
			key: 'subtitles',
			get: function get() {
				return this.checkCaptionsExist() ? (this.ytPlayer.getOption('captions', 'tracklist') || []).map(trackProvide) : [];
			}
		}, {
			key: 'track',
			get: function get() {
				if (this._track === undefined && this.checkCaptionsExist()) {
					return trackProvide(this.ytPlayer.getOption('captions', 'track'));
				} else {
					return this._track;
				}
			},
			set: function set(value) {
				this._track = value;
				if (value === null) {
					this._tracksDisable = true;
					/* Disable captions */
					this.ytPlayer.unloadModule('captions');
	
					this.trigger('trackschange');
					return;
				}
				this.ytPlayer.setOption('captions', 'track', { languageCode: value.name }).setOption('captions', 'reload', true);
	
				if (this._tracksDisable) {
					/* Enable captions */
					this.ytPlayer.loadModule('captions');
				}
				this.trigger('trackschange');
			}
		}, {
			key: 'playbackQuality',
			set: function set(name) {
				_set(Youtube.prototype.__proto__ || Object.getPrototypeOf(Youtube.prototype), 'playbackQuality', name, this);
				var time = this.currentTime;
				var status = this.ytPlayer.getPlayerState();
	
				if (status !== YT.PlayerState.UNSTARTED && status !== YT.PlayerState.CUED) {
					this.ytPlayer.pauseVideo();
				}
	
				this._nextPlaybackQuality = name;
				this.ytPlayer.setPlaybackQuality(name);
				this.ytPlayer.seekTo(time);
	
				if (status !== YT.PlayerState.PAUSED) {
					this.ytPlayer.playVideo();
				}
			},
			get: function get() {
				var _this7 = this;
	
				if (this._playbackQuality == null) {
					this._playbackQuality = this.getAvailableQualityLevels().find(function (item) {
						return item.name === _this7.ytPlayer.getPlaybackQuality();
					});
				}
				return this._playbackQuality;
			}
		}, {
			key: 'volume',
			get: function get() {
				return this.ytPlayer ? this.ytPlayer.getVolume() / 100.0 : 1;
			},
			set: function set(value) {
				var _this8 = this;
	
				_set(Youtube.prototype.__proto__ || Object.getPrototypeOf(Youtube.prototype), 'volume', value, this);
				this.ytPlayer.setVolume(value * 100);
	
				setTimeout(function () {
					_this8.trigger('volumechange');
				}, 50);
			}
		}], [{
			key: 'parseUrl',
			value: function parseUrl(url) {
				var result = null;
				var regex = Youtube.URL_REGEX;
				var match = url.match(regex);
				if (url.length === 11) {
					result = url;
				} else if (match && match[2].length === 11) {
					result = match[2];
				}
				return result;
			}
		}]);
	
		return Youtube;
	}(Entity);
	
	Youtube.TEST_VIDEO = document.createElement('video');
	/**
	 * @return {boolean}
	 *         - True if volume can be controlled
	 *         - False otherwise
	 */
	Youtube.canControlVolume = function () {
		// IE will error if Windows Media Player not installed #3315
		try {
			var volume = Youtube.TEST_VIDEO.volume;
	
			Youtube.TEST_VIDEO.volume = volume / 2 + 0.1;
			return volume !== Youtube.TEST_VIDEO.volume;
		} catch (e) {
			return false;
		}
	};
	
	Youtube.prototype.featureControlVolume = Youtube.canControlVolume();
	
	Youtube.URL_REGEX = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
	
	Youtube.QUALITY_NAMES = {
		tiny: '140p',
		small: '240p',
		medium: '360p',
		large: '480p',
		hd720: '720p',
		hd1080: '1080p',
		highres: 'HD',
		auto: 'Авто'
	};
	
	Youtube.apiLoaded = function () {
		var _this9 = this;
	
		if (this._loaded) return _jquery2.default.Deferred().resolve();
	
		return _jquery2.default.getScript('https://www.youtube.com/iframe_api').then(function () {
			return _this9._loaded = true;
		});
	};
	
	Player.registerComponent('Youtube', Youtube);
	
	Player.preset('youtube', {
		options: {
			entity: 'Youtube',
			controls: {
				common: [['play', 'volume', 'timeline', 'rate', 'backward', 'source', 'subtitle', 'divider', 'section', 'fullscreen'], []],
				fullscreen: [['play', 'volume', 'timeline', 'rate', 'backward', 'source', 'subtitle', 'divider', 'section', 'fullscreen']]
			}
		}
	});
	// Player.preset('2035', {
	// 	options : {
	// 		entity : 'Youtube',
	// 		controls : {
	// 			common : [
	// 				['play', 'volume', 'timeline', 'rate', 'backward', 'section', 'fullscreen'],
	// 			],
	// 			fullscreen : [
	// 				['play', 'volume', 'timeline', 'rate', 'backward',  'section', 'fullscreen'],
	// 			],
	// 			mini : [
	// 				['play', 'timeline', 'volume', 'fullscreen']
	// 			],
	// 		}
	// 	},
	// });
	
	Player.plugin('youtube', function (pluginOptions) {
	
		/* global YT */
		Youtube.apiLoaded();
	});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZmFmNTZiNDliZTE0NDQwNjExMDY/NTRiOSoqKiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCIkXCI/NTdhYSoqKiIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvcGx1Z2lucy9sZS1wbGF5ZXIteW91dHViZS5qcz8xMmNjIl0sIm5hbWVzIjpbIlBsYXllciIsIndpbmRvdyIsImxlUGxheWVyIiwiJCIsIkVudGl0eSIsImdldENvbXBvbmVudCIsInRyYWNrUHJvdmlkZSIsInRyYWNrIiwibGFuZ3VhZ2VDb2RlIiwibGFuZ3VhZ2UiLCJ0aXRsZSIsInRvb2x0aXAiLCJsYW5ndWFnZU5hbWUiLCJuYW1lIiwiWW91dHViZSIsInBsYXllciIsIm9wdGlvbnMiLCJfcGF1c2VkIiwic3JjIiwiYWRkQ2xhc3MiLCJlbGVtZW50Iiwib24iLCJvbkNsaWNrIiwiYmluZCIsIm9uRGJsY2xpY2siLCJldmVudCIsInRyaWdnZXIiLCJpbmRleCIsImF2YWlsYWJsZVJhdGVzIiwiaW5kZXhPZiIsInJhdGUiLCJsZW5ndGgiLCJhcnIiLCJ5dFBsYXllciIsImdldEF2YWlsYWJsZVF1YWxpdHlMZXZlbHMiLCJzcGxpY2UiLCJtYXAiLCJRVUFMSVRZX05BTUVTIiwiaXRlbSIsInBsYXlWaWRlbyIsInBhdXNlVmlkZW8iLCJhcGlMb2FkZWQiLCJ0aGVuIiwiaW5pdFlUUGxheWVyIiwiYXR0ciIsInlvdXR1YmVFbGVtZW50IiwiYmxvY2tlciIsImFwcGVuZCIsIl9pbml0UHJvbWlzZSIsIkRlZmVycmVkIiwiZ2xvYmFsT3B0aW9ucyIsInl0T3B0aW9ucyIsImF1dG9wbGF5IiwibG9vcCIsIml2X2xvYWRfcG9saWN5IiwiY29udHJvbHMiLCJtb2Rlc3RicmFuZGluZyIsInJlbCIsInNob3dpbmZvIiwiY2NfbG9hZF9wb2xpY3kiLCJkaXNhYmxla2IiLCJmcyIsInN0YXJ0IiwidGltZSIsIllUIiwicmVhZHkiLCJjdHgiLCJyZXBsYWNlV2l0aCIsInZpZGVvSWQiLCJ3aWR0aCIsInBsYXllclZhcnMiLCJldmVudHMiLCJvblJlYWR5Iiwib25ZVFBSZWFkeSIsIm9uU3RhdGVDaGFuZ2UiLCJvbllUUFN0YXRlQ2hhbmdlIiwib25QbGF5YmFja1JhdGVDaGFuZ2UiLCJvbllUUFJhdGVDaGFuZ2UiLCJvblBsYXliYWNrUXVhbGl0eUNoYW5nZSIsIm9uWVRQUGxheWJhY2tRdWFsaXR5Q2hhbmdlIiwicHJvbWlzZSIsImdldEF2YWlsYWJsZVBsYXliYWNrUmF0ZXMiLCJyYXRlTWluIiwicmF0ZU1heCIsImUiLCJyZXNvbHZlIiwiX2luaXRSYXRlIiwiX2luaXRWb2x1bWUiLCJzZXRBdmFpbGFibGVQbGF5YmFja1JhdGVzIiwiZGF0YSIsIl9wbGF5YmFja1F1YWxpdHkiLCJmaW5kIiwic3RhdGUiLCJsYXN0U3RhdGUiLCJQbGF5ZXJTdGF0ZSIsIlVOU1RBUlRFRCIsIkVOREVEIiwiUExBWUlORyIsInNldFBsYXliYWNrUXVhbGl0eSIsIl9uZXh0UGxheWJhY2tRdWFsaXR5IiwiaXNTZWVraW5nIiwib25TZWVrZWQiLCJsb2FkQ2FwdGlvbnMiLCJlbWl0VGltZXVwZGF0ZSIsIlBBVVNFRCIsIkJVRkZFUklORyIsImNsZWFySW50ZXJ2YWwiLCJzZWVraW5nSW50ZXJ2YWwiLCJ3YXNQYXVzZWRCZWZvcmVTZWVrIiwicGF1c2UiLCJzZXRJbnRlcnZhbCIsImN1cnJlbnRUaW1lIiwidGltZUJlZm9yZVNlZWsiLCJlbXB0eVRyYWNrbGlzdCIsInN1YnRpdGxlcyIsIl9sb2FkQ2FwdGlvbnNXYXRjaGVyIiwiX3RyYWNrc0Rpc2FibGUiLCJjaGVja0NhcHRpb25zRXhpc3QiLCJsb2FkTW9kdWxlIiwiZ2V0T3B0aW9ucyIsImVycm9yIiwidXJsIiwiaWQiLCJwYXJzZVVybCIsInBvc3RlciIsImdldEN1cnJlbnRUaW1lIiwidmFsdWUiLCJwYXVzZWQiLCJkdXJhdGlvbiIsInNlZWtUbyIsImdldER1cmF0aW9uIiwiTmFOIiwiZ2V0UGxheWJhY2tSYXRlIiwic2V0UGxheWJhY2tSYXRlIiwibXV0ZSIsInVuTXV0ZSIsInNldFRpbWVvdXQiLCJpc011dGVkIiwiZ2V0T3B0aW9uIiwiX3RyYWNrIiwidW5kZWZpbmVkIiwidW5sb2FkTW9kdWxlIiwic2V0T3B0aW9uIiwic3RhdHVzIiwiZ2V0UGxheWVyU3RhdGUiLCJDVUVEIiwiZ2V0UGxheWJhY2tRdWFsaXR5IiwiZ2V0Vm9sdW1lIiwic2V0Vm9sdW1lIiwicmVzdWx0IiwicmVnZXgiLCJVUkxfUkVHRVgiLCJtYXRjaCIsIlRFU1RfVklERU8iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjYW5Db250cm9sVm9sdW1lIiwidm9sdW1lIiwicHJvdG90eXBlIiwiZmVhdHVyZUNvbnRyb2xWb2x1bWUiLCJ0aW55Iiwic21hbGwiLCJtZWRpdW0iLCJsYXJnZSIsImhkNzIwIiwiaGQxMDgwIiwiaGlnaHJlcyIsImF1dG8iLCJfbG9hZGVkIiwiZ2V0U2NyaXB0IiwicmVnaXN0ZXJDb21wb25lbnQiLCJwcmVzZXQiLCJlbnRpdHkiLCJjb21tb24iLCJmdWxsc2NyZWVuIiwicGx1Z2luIiwicGx1Z2luT3B0aW9ucyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0Esb0I7Ozs7Ozs7QUNBQTs7Ozs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7O0FBRUEsS0FBTUEsU0FBU0MsT0FBT0MsUUFBUCxJQUFtQkQsT0FBT0UsQ0FBUCxDQUFTRCxRQUEzQztBQUNBLEtBQU1FLFNBQVNKLE9BQU9LLFlBQVAsQ0FBb0IsUUFBcEIsQ0FBZjs7QUFFQSxLQUFNQyxlQUFlLFNBQWZBLFlBQWUsUUFBUztBQUM3QixNQUFHQyxTQUFTLElBQVQsSUFBaUJB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QUV2SCxRQUFGLEdBQWFvQyxPQUFiLEVBQVA7O0FBRWpCLFNBQU8saUJBQUVvRixTQUFGLENBQVksb0NBQVosRUFDTC9ILElBREssQ0FDQTtBQUFBLFVBQU0sT0FBSzhILE9BQUwsR0FBZSxJQUFyQjtBQUFBLEdBREEsQ0FBUDtBQUVBLEVBTEQ7O0FBT0F4SyxRQUFPMEssaUJBQVAsQ0FBeUIsU0FBekIsRUFBb0M1SixPQUFwQzs7QUFFQWQsUUFBTzJLLE1BQVAsQ0FBYyxTQUFkLEVBQXlCO0FBQ3hCM0osV0FBVTtBQUNUNEosV0FBUyxTQURBO0FBRVRySCxhQUFXO0FBQ1ZzSCxZQUFTLENBQ1IsQ0FBQyxNQUFELEVBQVMsUUFBVCxFQUFtQixVQUFuQixFQUErQixNQUEvQixFQUF1QyxVQUF2QyxFQUFtRCxRQUFuRCxFQUE2RCxVQUE3RCxFQUF5RSxTQUF6RSxFQUFvRixTQUFwRixFQUErRixZQUEvRixDQURRLEVBRVIsRUFGUSxDQURDO0FBS1ZDLGdCQUFhLENBQ1osQ0FBQyxNQUFELEVBQVMsUUFBVCxFQUFtQixVQUFuQixFQUErQixNQUEvQixFQUF1QyxVQUF2QyxFQUFtRCxRQUFuRCxFQUE2RCxVQUE3RCxFQUF5RSxTQUF6RSxFQUFvRixTQUFwRixFQUErRixZQUEvRixDQURZO0FBTEg7QUFGRjtBQURjLEVBQXpCO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE5SyxRQUFPK0ssTUFBUCxDQUFjLFNBQWQsRUFBeUIsVUFBU0MsYUFBVCxFQUF3Qjs7QUFFaEQ7QUFDQWxLLFVBQVEyQixTQUFSO0FBQ0EsRUFKRCxFIiwiZmlsZSI6ImxlLXBsYXllci15b3V0dWJlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvanMvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZmFmNTZiNDliZTE0NDQwNjExMDYiLCJtb2R1bGUuZXhwb3J0cyA9ICQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCIkXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbmNvbnN0IFBsYXllciA9IHdpbmRvdy5sZVBsYXllciB8fCB3aW5kb3cuJC5sZVBsYXllcjtcbmNvbnN0IEVudGl0eSA9IFBsYXllci5nZXRDb21wb25lbnQoJ0VudGl0eScpO1xuXG5jb25zdCB0cmFja1Byb3ZpZGUgPSB0cmFjayA9PiB7XG5cdGlmKHRyYWNrID09IG51bGwgfHwgdHJhY2subGFuZ3VhZ2VDb2RlID09IG51bGwpIHtcblx0XHRyZXR1cm4gdHJhY2tcblx0fVxuXHRyZXR1cm4ge1xuXHRcdGxhbmd1YWdlIDogdHJhY2subGFuZ3VhZ2VDb2RlLFxuXHRcdHRpdGxlIDogdHJhY2subGFuZ3VhZ2VDb2RlLFxuXHRcdHRvb2x0aXAgOiB0cmFjay5sYW5ndWFnZU5hbWUsXG5cdFx0bmFtZSA6IHRyYWNrLmxhbmd1YWdlQ29kZSxcblx0fVxufVxuXG5cbmNsYXNzIFlvdXR1YmUgZXh0ZW5kcyBFbnRpdHkge1xuXHRjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXHRcdHRoaXMuX3BhdXNlZCA9IHRydWU7XG5cblx0XHR0aGlzLnNyYyA9IHRoaXMucGxheWVyLm9wdGlvbnMuc3JjO1xuXG5cdFx0dGhpcy5wbGF5ZXIuYWRkQ2xhc3MoJ2xlcGxheWVyLS15b3V0dWJlJyk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdjbGljaycsIHRoaXMub25DbGljay5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ2RibGNsaWNrJywgdGhpcy5vbkRibGNsaWNrLmJpbmQodGhpcykpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0c2V0IHNyYyhzcmMpIHtcblx0XHRpZihzcmMgPT0gbnVsbCkgcmV0dXJuO1xuXHRcdGlmKHRoaXMuc3JjICYmIHRoaXMuc3JjLnVybCA9PT0gc3JjLnVybCkgcmV0dXJuO1xuXG5cdFx0Y29uc3QgdXJsID0gc3JjLnVybCB8fCBzcmMuaWQ7XG5cblx0XHR0aGlzLnZpZGVvSWQgPSBZb3V0dWJlLnBhcnNlVXJsKHVybCk7XG5cblx0XHRpZih0aGlzLnBsYXllci5vcHRpb25zLnBvc3Rlcikge1xuXHRcdFx0dGhpcy5wb3N0ZXIgPSB0aGlzLnBsYXllci5vcHRpb25zLnBvc3RlclxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnBvc3RlciA9ICdodHRwczovL2ltZy55b3V0dWJlLmNvbS92aS8nICsgdGhpcy52aWRlb0lkICsgJy8wLmpwZyc7XG5cdFx0fVxuXHR9XG5cblx0b25DbGljayhldmVudCkge1xuXHRcdHRoaXMudHJpZ2dlcignY2xpY2snKTtcblx0fVxuXG5cdG9uRGJsY2xpY2soKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCdkYmxjbGljaycpO1xuXHR9XG5cblx0Z2V0IGN1cnJlbnRUaW1lKCkge1xuXHRcdHJldHVybiB0aGlzLnl0UGxheWVyPyB0aGlzLnl0UGxheWVyLmdldEN1cnJlbnRUaW1lKCkgOiAwO1xuXHR9XG5cblx0c2V0IGN1cnJlbnRUaW1lKHZhbHVlKSB7XG5cdFx0aWYodGhpcy5sYXN0U3RhdGUgPT09IFlULlBsYXllclN0YXRlLlBBVVNFRCkge1xuXHRcdFx0dGhpcy50aW1lQmVmb3JlU2VlayA9IHRoaXMuY3VycmVudFRpbWU7XG5cdFx0fVxuXG5cdFx0aWYgKCF0aGlzLmlzU2Vla2luZykge1xuXHRcdFx0dGhpcy53YXNQYXVzZWRCZWZvcmVTZWVrID0gdGhpcy5wYXVzZWQ7XG5cdFx0fVxuXG5cdFx0bGV0IHRpbWU7XG5cdFx0aWYgKHZhbHVlID49IHRoaXMuZHVyYXRpb24pIHtcblx0XHRcdHRpbWUgPSB0aGlzLmR1cmF0aW9uXG5cdFx0fSBlbHNlIGlmICh2YWx1ZSA8IDApIHtcblx0XHRcdHRpbWUgPSAwXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRpbWUgPSB2YWx1ZTtcblx0XHR9XG5cblx0XHR0aGlzLmlzU2Vla2luZyA9IHRydWU7XG5cdFx0dGhpcy55dFBsYXllci5zZWVrVG8odGltZSwgdHJ1ZSk7XG5cdFx0dGhpcy5wbGF5ZXIudHJpZ2dlcigndGltZXVwZGF0ZWxvYWQnLCB7IGN1cnJlbnRUaW1lIDogdGltZSB9KTtcblxuXHRcdHRoaXMudHJpZ2dlcignc2Vla2luZycpO1xuXG5cdFx0dGhpcy5lbWl0VGltZXVwZGF0ZSgpO1xuXHR9XG5cblx0Z2V0IGR1cmF0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLnl0UGxheWVyICYmIHRoaXMueXRQbGF5ZXIuZ2V0RHVyYXRpb24gPyB0aGlzLnl0UGxheWVyLmdldER1cmF0aW9uKCkgOiBOYU47XG5cdH1cblxuXHRnZXQgcGF1c2VkKCkge1xuXHRcdHJldHVybiAodGhpcy55dFBsYXllcikgP1xuXHRcdFx0KHRoaXMubGFzdFN0YXRlICE9PSBZVC5QbGF5ZXJTdGF0ZS5QTEFZSU5HICYmIHRoaXMubGFzdFN0YXRlICE9PSBZVC5QbGF5ZXJTdGF0ZS5CVUZGRVJJTkcpXG5cdFx0XHQ6IHRydWU7XG5cblx0fVxuXG5cblx0Z2V0IHJhdGUoKSB7XG5cdFx0cmV0dXJuIHRoaXMueXRQbGF5ZXIuZ2V0UGxheWJhY2tSYXRlKCk7XG5cdH1cblxuXHRzZXQgcmF0ZSh2YWx1ZSkge1xuXHRcdHN1cGVyLnJhdGUgPSB2YWx1ZTtcblx0XHR0aGlzLnl0UGxheWVyLnNldFBsYXliYWNrUmF0ZSh2YWx1ZSk7XG5cdFx0dGhpcy50cmlnZ2VyKCdyYXRlY2hhbmdlJyk7XG5cdH1cblxuXHRzZXQgbXV0ZWQodmFsdWUpIHtcblx0XHRpZih2YWx1ZSkge1xuXHRcdFx0dGhpcy55dFBsYXllci5tdXRlKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMueXRQbGF5ZXIudW5NdXRlKCk7XG5cdFx0fVxuXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHR0aGlzLnRyaWdnZXIoJ3ZvbHVtZWNoYW5nZScpO1xuXHRcdH0sIDUwKTtcblx0fVxuXG5cdGdldCBtdXRlZCgpIHtcblx0XHRyZXR1cm4gdGhpcy55dFBsYXllci5pc011dGVkKCk7XG5cdH1cblxuXHRnZXQgc3VidGl0bGVzKCkge1xuXHRcdHJldHVybiB0aGlzLmNoZWNrQ2FwdGlvbnNFeGlzdCgpXG5cdFx0XHQ/ICh0aGlzLnl0UGxheWVyLmdldE9wdGlvbignY2FwdGlvbnMnLCAndHJhY2tsaXN0JykgfHwgW10pLm1hcCh0cmFja1Byb3ZpZGUpXG5cdFx0XHQ6IFtdXG5cdH1cblxuXHRnZXQgdHJhY2soKSB7XG5cdFx0aWYodGhpcy5fdHJhY2sgPT09IHVuZGVmaW5lZCAmJiB0aGlzLmNoZWNrQ2FwdGlvbnNFeGlzdCgpKSB7XG5cdFx0XHRyZXR1cm4gdHJhY2tQcm92aWRlKHRoaXMueXRQbGF5ZXIuZ2V0T3B0aW9uKCdjYXB0aW9ucycsICd0cmFjaycpKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5fdHJhY2s7XG5cdFx0fVxuXHR9XG5cblx0c2V0IHRyYWNrKHZhbHVlKSB7XG5cdFx0dGhpcy5fdHJhY2sgPSB2YWx1ZTtcblx0XHRpZih2YWx1ZSA9PT0gbnVsbCkge1xuXHRcdFx0dGhpcy5fdHJhY2tzRGlzYWJsZSA9IHRydWU7XG5cdFx0XHQvKiBEaXNhYmxlIGNhcHRpb25zICovXG5cdFx0XHR0aGlzLnl0UGxheWVyLnVubG9hZE1vZHVsZSgnY2FwdGlvbnMnKTtcblxuXHRcdFx0dGhpcy50cmlnZ2VyKCd0cmFja3NjaGFuZ2UnKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy55dFBsYXllclxuXHRcdFx0LnNldE9wdGlvbignY2FwdGlvbnMnLCAndHJhY2snLCB7IGxhbmd1YWdlQ29kZSA6IHZhbHVlLm5hbWUgfSlcblx0XHRcdC5zZXRPcHRpb24oJ2NhcHRpb25zJywgJ3JlbG9hZCcsIHRydWUpO1xuXG5cdFx0aWYodGhpcy5fdHJhY2tzRGlzYWJsZSkge1xuXHRcdFx0LyogRW5hYmxlIGNhcHRpb25zICovXG5cdFx0XHR0aGlzLnl0UGxheWVyLmxvYWRNb2R1bGUoJ2NhcHRpb25zJyk7XG5cdFx0fVxuXHRcdHRoaXMudHJpZ2dlcigndHJhY2tzY2hhbmdlJyk7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRpbmNyZWFzZVJhdGUoKSB7XG5cdFx0Y29uc3QgaW5kZXggPSB0aGlzLmF2YWlsYWJsZVJhdGVzLmluZGV4T2YodGhpcy5yYXRlKTtcblx0XHRpZihpbmRleCArIDEgPj0gdGhpcy5hdmFpbGFibGVSYXRlcy5sZW5ndGgpIHJldHVybjtcblx0XHRyZXR1cm4gdGhpcy5yYXRlID0gdGhpcy5hdmFpbGFibGVSYXRlc1tpbmRleCArIDFdO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0ZGVjcmVhc2VSYXRlKCkge1xuXHRcdGNvbnN0IGluZGV4ID0gdGhpcy5hdmFpbGFibGVSYXRlcy5pbmRleE9mKHRoaXMucmF0ZSk7XG5cdFx0aWYoaW5kZXggLSAxIDwgMCkgcmV0dXJuO1xuXHRcdHJldHVybiB0aGlzLnJhdGUgPSB0aGlzLmF2YWlsYWJsZVJhdGVzW2luZGV4IC0gMV07XG5cdH1cblxuXHRnZXRBdmFpbGFibGVRdWFsaXR5TGV2ZWxzKCkge1xuXHRcdGNvbnN0IGFyciA9IHRoaXMueXRQbGF5ZXIuZ2V0QXZhaWxhYmxlUXVhbGl0eUxldmVscygpO1xuXHRcdGNvbnN0IGluZGV4ID0gYXJyLmluZGV4T2YoJ2F1dG8nKTtcblxuXHRcdGlmKGluZGV4ID4gLTEpIHtcblx0XHRcdGFyci5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdH1cblxuXHRcdHJldHVybiBhcnIubWFwKGl0ZW0gPT4gKHtcblx0XHRcdHRpdGxlIDogWW91dHViZS5RVUFMSVRZX05BTUVTW2l0ZW1dIHx8IGl0ZW0sXG5cdFx0XHRuYW1lIDogaXRlbVxuXHRcdH0pKTtcblx0fVxuXG5cblx0c2V0IHBsYXliYWNrUXVhbGl0eShuYW1lKSB7XG5cdFx0c3VwZXIucGxheWJhY2tRdWFsaXR5ID0gbmFtZTtcblx0XHRjb25zdCB0aW1lID0gdGhpcy5jdXJyZW50VGltZTtcblx0XHRjb25zdCBzdGF0dXMgPSB0aGlzLnl0UGxheWVyLmdldFBsYXllclN0YXRlKCk7XG5cblx0XHRpZihzdGF0dXMgIT09IFlULlBsYXllclN0YXRlLlVOU1RBUlRFRCAmJiBzdGF0dXMgIT09IFlULlBsYXllclN0YXRlLkNVRUQpIHtcblx0XHRcdHRoaXMueXRQbGF5ZXIucGF1c2VWaWRlbygpO1xuXHRcdH1cblxuXHRcdHRoaXMuX25leHRQbGF5YmFja1F1YWxpdHkgPSBuYW1lO1xuXHRcdHRoaXMueXRQbGF5ZXIuc2V0UGxheWJhY2tRdWFsaXR5KG5hbWUpO1xuXHRcdHRoaXMueXRQbGF5ZXIuc2Vla1RvKHRpbWUpO1xuXG5cdFx0aWYoc3RhdHVzICE9PSBZVC5QbGF5ZXJTdGF0ZS5QQVVTRUQpIHtcblx0XHRcdHRoaXMueXRQbGF5ZXIucGxheVZpZGVvKCk7XG5cdFx0fVxuXG5cdH1cblxuXHRnZXQgcGxheWJhY2tRdWFsaXR5KCkge1xuXHRcdGlmICh0aGlzLl9wbGF5YmFja1F1YWxpdHkgPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5fcGxheWJhY2tRdWFsaXR5ID0gdGhpcy5nZXRBdmFpbGFibGVRdWFsaXR5TGV2ZWxzKClcblx0XHRcdFx0LmZpbmQoaXRlbSA9PiBpdGVtLm5hbWUgPT09IHRoaXMueXRQbGF5ZXIuZ2V0UGxheWJhY2tRdWFsaXR5KCkpXG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLl9wbGF5YmFja1F1YWxpdHk7XG5cdH1cblxuXHRnZXQgdm9sdW1lKCkge1xuXHRcdHJldHVybiB0aGlzLnl0UGxheWVyID8gdGhpcy55dFBsYXllci5nZXRWb2x1bWUoKSAvIDEwMC4wIDogMTtcblx0fVxuXG5cdHNldCB2b2x1bWUodmFsdWUpIHtcblx0XHRzdXBlci52b2x1bWUgPSB2YWx1ZTtcblx0XHR0aGlzLnl0UGxheWVyLnNldFZvbHVtZSh2YWx1ZSAqIDEwMCk7XG5cblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdHRoaXMudHJpZ2dlcigndm9sdW1lY2hhbmdlJyk7XG5cdFx0fSwgNTApXG5cblx0fVxuXG5cdHN1cHBvcnRzRnVsbFNjcmVlbigpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdHBsYXkoKSB7XG5cdFx0dGhpcy55dFBsYXllci5wbGF5VmlkZW8oKTtcblx0XHR0aGlzLnRyaWdnZXIoJ3BsYXknKTtcblx0fVxuXG5cdHBhdXNlKCkge1xuXHRcdHRoaXMueXRQbGF5ZXIucGF1c2VWaWRlbygpO1xuXHRcdHRoaXMudHJpZ2dlcigncGF1c2UnKTtcblx0fVxuXG5cblx0aW5pdCgpIHtcblx0XHRzdXBlci5pbml0KCk7XG5cdFx0cmV0dXJuIFlvdXR1YmUuYXBpTG9hZGVkKClcblx0XHRcdC50aGVuKCgpID0+IHRoaXMuaW5pdFlUUGxheWVyKCkpXG5cdH1cblxuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdHRoaXMuZWxlbWVudCA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0LmFkZENsYXNzKCdsZXBsYXllcl9feW91dHViZS13cmFwcGVyJylcblx0XHRcdC5hdHRyKCd0YWJpbmRleCcsICcwJyk7XG5cdFx0dGhpcy55b3V0dWJlRWxlbWVudCA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0LmFkZENsYXNzKCdsZXBsYXllcl9feW91dHViZScpO1xuXHRcdHRoaXMuYmxvY2tlciA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0LmFkZENsYXNzKCdsZXBsYXllcl9feW91dHViZS1ibG9ja2VyJyk7XG5cblxuXHRcdHJldHVybiB0aGlzLmVsZW1lbnRcblx0XHRcdC5hcHBlbmQodGhpcy5ibG9ja2VyKVxuXHRcdFx0LmFwcGVuZCh0aGlzLnlvdXR1YmVFbGVtZW50KTtcblx0fVxuXG5cdGluaXRZVFBsYXllcigpIHtcblx0XHR0aGlzLl9pbml0UHJvbWlzZSA9ICQuRGVmZXJyZWQoKTtcblx0XHRjb25zdCBnbG9iYWxPcHRpb25zID0gdGhpcy5wbGF5ZXIub3B0aW9ucztcblx0XHRsZXQgeXRPcHRpb25zID0ge1xuXHRcdFx0YXV0b3BsYXkgOiBnbG9iYWxPcHRpb25zLmF1dG9wbGF5ID8gMSA6IDAsXG5cdFx0XHRsb29wIDogZ2xvYmFsT3B0aW9ucy5sb29wID8gMSA6IDAsXG5cdFx0XHRpdl9sb2FkX3BvbGljeSA6IDMsXG5cdFx0XHRjb250cm9scyA6IDAsXG5cdFx0XHRtb2Rlc3RicmFuZGluZyA6IDEsXG5cdFx0XHRyZWwgOiAwLFxuXHRcdFx0c2hvd2luZm8gOiAwLFxuXHRcdFx0Y2NfbG9hZF9wb2xpY3kgOiAwLFxuXHRcdFx0ZGlzYWJsZWtiIDogMCxcblx0XHRcdGZzIDogMCxcblx0XHRcdHN0YXJ0IDogZ2xvYmFsT3B0aW9ucy50aW1lXG5cdFx0fTtcblxuXHRcdFlULnJlYWR5KCgpID0+IHtcblx0XHRcdHRoaXMub3B0aW9ucy5jdHgucmVwbGFjZVdpdGgodGhpcy5lbGVtZW50KTtcblxuXHRcdFx0dGhpcy55dFBsYXllciA9IG5ldyBZVC5QbGF5ZXIodGhpcy55b3V0dWJlRWxlbWVudFswXSwge1xuXHRcdFx0XHR2aWRlb0lkIDogdGhpcy52aWRlb0lkLFxuXHRcdFx0XHR3aWR0aCA6IGdsb2JhbE9wdGlvbnMud2lkdGggfHwgJzEwMCUnLFxuXHRcdFx0XHRwbGF5ZXJWYXJzIDogeXRPcHRpb25zLFxuXHRcdFx0XHRldmVudHMgOiB7XG5cdFx0XHRcdFx0b25SZWFkeSA6IHRoaXMub25ZVFBSZWFkeS5iaW5kKHRoaXMpLFxuXHRcdFx0XHRcdG9uU3RhdGVDaGFuZ2UgOiB0aGlzLm9uWVRQU3RhdGVDaGFuZ2UuYmluZCh0aGlzKSxcblx0XHRcdFx0XHRvblBsYXliYWNrUmF0ZUNoYW5nZSA6IHRoaXMub25ZVFBSYXRlQ2hhbmdlLmJpbmQodGhpcyksXG5cdFx0XHRcdFx0b25QbGF5YmFja1F1YWxpdHlDaGFuZ2UgOiB0aGlzLm9uWVRQUGxheWJhY2tRdWFsaXR5Q2hhbmdlLmJpbmQodGhpcylcblx0XHRcdFx0fVxuXHRcdFx0fSlcblxuXHRcdH0pXG5cdFx0cmV0dXJuIHRoaXMuX2luaXRQcm9taXNlLnByb21pc2UoKTtcblx0fVxuXG5cblx0c2V0QXZhaWxhYmxlUGxheWJhY2tSYXRlcygpIHtcblx0XHR0aGlzLmF2YWlsYWJsZVJhdGVzID0gdGhpcy55dFBsYXllci5nZXRBdmFpbGFibGVQbGF5YmFja1JhdGVzKCk7XG5cdFx0dGhpcy5yYXRlTWluID0gdGhpcy5hdmFpbGFibGVSYXRlc1swXTtcblx0XHR0aGlzLnJhdGVNYXggPSB0aGlzLmF2YWlsYWJsZVJhdGVzW3RoaXMuYXZhaWxhYmxlUmF0ZXMubGVuZ3RoIC0gMV07XG5cdH1cblxuXHRvbllUUFJlYWR5KGUpIHtcblx0XHR0aGlzLl9pbml0UHJvbWlzZS5yZXNvbHZlKCk7XG5cdFx0dGhpcy5faW5pdFJhdGUoKTtcblx0XHR0aGlzLl9pbml0Vm9sdW1lKCk7XG5cdFx0dGhpcy5zZXRBdmFpbGFibGVQbGF5YmFja1JhdGVzKCk7XG5cdH1cblxuXHRvbllUUFJhdGVDaGFuZ2UoZSkge1xuXHRcdHRoaXMudHJpZ2dlcigncmF0ZWNoYW5nZScpO1xuXHR9XG5cblx0b25ZVFBQbGF5YmFja1F1YWxpdHlDaGFuZ2UoZSkge1xuXHRcdGNvbnN0IGRhdGEgPSBlLmRhdGE7XG5cdFx0dGhpcy5fcGxheWJhY2tRdWFsaXR5ID0gdGhpcy5nZXRBdmFpbGFibGVRdWFsaXR5TGV2ZWxzKCkuZmluZChpdGVtID0+IGl0ZW0ubmFtZSA9PT0gZGF0YSk7XG5cdFx0dGhpcy50cmlnZ2VyKCdxdWFsaXR5Y2hhbmdlJywgdGhpcy5fcGxheWJhY2tRdWFsaXR5KTtcblx0fVxuXG5cdG9uWVRQU3RhdGVDaGFuZ2UoZSkge1xuXHRcdGNvbnN0IHN0YXRlID0gZS5kYXRhO1xuXHRcdGlmKHN0YXRlID09PSB0aGlzLmxhc3RTdGF0ZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMubGFzdFN0YXRlID0gc3RhdGU7XG5cdFx0c3dpdGNoKHN0YXRlKSB7XG5cdFx0Y2FzZSBZVC5QbGF5ZXJTdGF0ZS5VTlNUQVJURUQ6XG5cdFx0XHR0aGlzLnRyaWdnZXIoJ2xvYWRzdGFydCcpO1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdsb2FkZWRtZXRhZGF0YScpO1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdkdXJhdGlvbmNoYW5nZScpO1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdyYXRlY2hhbmdlJyk7XG5cdFx0XHR0aGlzLnRyaWdnZXIoJ3ZvbHVtZWNoYW5nZScpO1xuXHRcdFx0dGhpcy50cmlnZ2VyKCd0cmFja3NjaGFuZ2UnKTtcblx0XHRcdGlmKHRoaXMucGxheWVyLm9wdGlvbnMuYXV0b3BsYXkpIHtcblx0XHRcdFx0dGhpcy50cmlnZ2VyKCdwbGF5Jyk7XG5cdFx0XHR9XG5cdFx0XHRicmVhaztcblxuXHRcdGNhc2UgWVQuUGxheWVyU3RhdGUuRU5ERUQ6XG5cdFx0XHR0aGlzLnRyaWdnZXIoJ3BhdXNlJyk7XG5cdFx0XHR0aGlzLnRyaWdnZXIoJ2VuZGVkJyk7XG5cdFx0XHRicmVhaztcblxuXHRcdGNhc2UgWVQuUGxheWVyU3RhdGUuUExBWUlORzpcblx0XHRcdHRoaXMudHJpZ2dlcigndGltZXVwZGF0ZScpO1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdkdXJhdGlvbmNoYW5nZScpO1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdwbGF5aW5nJyk7XG5cblx0XHRcdHRoaXMueXRQbGF5ZXIuc2V0UGxheWJhY2tRdWFsaXR5KHRoaXMuX25leHRQbGF5YmFja1F1YWxpdHkpO1xuXG5cdFx0XHRpZih0aGlzLmlzU2Vla2luZykge1xuXHRcdFx0XHR0aGlzLm9uU2Vla2VkKCk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMubG9hZENhcHRpb25zKClcblx0XHRcdHRoaXMuZW1pdFRpbWV1cGRhdGUoKTtcblx0XHRcdGJyZWFrO1xuXG5cdFx0Y2FzZSBZVC5QbGF5ZXJTdGF0ZS5QQVVTRUQ6XG5cdFx0XHR0aGlzLnRyaWdnZXIoJ2NhbnBsYXknKTtcblxuXHRcdFx0aWYodGhpcy5pc1NlZWtpbmcpIHtcblx0XHRcdFx0dGhpcy5vblNlZWtlZCgpO1xuXHRcdFx0fVxuXHRcdFx0YnJlYWs7XG5cblx0XHRjYXNlIFlULlBsYXllclN0YXRlLkJVRkZFUklORzpcblx0XHRcdHRoaXMucGxheWVyLnRyaWdnZXIoJ3RpbWV1cGRhdGUnKTtcblx0XHRcdHRoaXMucGxheWVyLnRyaWdnZXIoJ3dhaXRpbmcnKTtcblxuXHRcdFx0dGhpcy55dFBsYXllci5zZXRQbGF5YmFja1F1YWxpdHkodGhpcy5fbmV4dFBsYXliYWNrUXVhbGl0eSk7XG5cblx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHR9XG5cblx0b25TZWVrZWQoKSB7XG5cdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLnNlZWtpbmdJbnRlcnZhbCk7XG5cdFx0dGhpcy5pc1NlZWtpbmcgPSBmYWxzZTtcblxuXHRcdGlmICh0aGlzLndhc1BhdXNlZEJlZm9yZVNlZWspIHtcblx0XHRcdHRoaXMucGF1c2UoKTtcblx0XHR9XG5cblx0XHR0aGlzLnRyaWdnZXIoJ3NlZWtlZCcpO1xuXHR9XG5cblx0ZW1pdFRpbWV1cGRhdGUoKSB7XG5cdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLnNlZWtpbmdJbnRlcnZhbCk7XG5cblx0XHR0aGlzLnNlZWtpbmdJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcblx0XHRcdGlmKHRoaXMubGFzdFN0YXRlID09PSBZVC5QbGF5ZXJTdGF0ZS5QQVVTRUQpIHtcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLnNlZWtpbmdJbnRlcnZhbCk7XG5cdFx0XHR9IGVsc2UgaWYodGhpcy5jdXJyZW50VGltZSAhPT0gdGhpcy50aW1lQmVmb3JlU2Vlaykge1xuXHRcdFx0XHR0aGlzLnRyaWdnZXIoJ3RpbWV1cGRhdGUnKTtcblx0XHRcdH1cblx0XHR9LCAyNTApXG5cdH1cblxuXHRsb2FkQ2FwdGlvbnMoKSB7XG5cdFx0Y29uc3QgZW1wdHlUcmFja2xpc3QgPSAoKSA9PiAodGhpcy5zdWJ0aXRsZXMgPT0gbnVsbCB8fCB0aGlzLnN1YnRpdGxlcy5sZW5ndGggPT09IDApO1xuXG5cdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLl9sb2FkQ2FwdGlvbnNXYXRjaGVyKTtcblx0XHRpZihcblx0XHRcdCF0aGlzLl90cmFja3NEaXNhYmxlICYmXG5cdFx0XHR0aGlzLmNoZWNrQ2FwdGlvbnNFeGlzdCgpICYmXG5cdFx0XHRlbXB0eVRyYWNrbGlzdCgpXG5cdFx0KSB7XG5cdFx0XHR0aGlzLnl0UGxheWVyLmxvYWRNb2R1bGUoJ2NhcHRpb25zJyk7XG5cblx0XHRcdHRoaXMuX2xvYWRDYXB0aW9uc1dhdGNoZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG5cdFx0XHRcdGlmKCFlbXB0eVRyYWNrbGlzdCgpICYmIHRoaXMuY2hlY2tDYXB0aW9uc0V4aXN0KCkpIHtcblx0XHRcdFx0XHR0aGlzLnRyaWdnZXIoJ3RyYWNrc2NoYW5nZScpO1xuXHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwodGhpcy5fbG9hZENhcHRpb25zV2F0Y2hlcik7XG5cdFx0XHRcdH1cblx0XHRcdH0sIDI1MClcblx0XHR9XG5cdH1cblxuXHRjaGVja0NhcHRpb25zRXhpc3QoKSB7XG5cdFx0dHJ5IHtcblx0XHRcdHJldHVybiB0aGlzLnl0UGxheWVyLmdldE9wdGlvbnMoJ2NhcHRpb25zJykgIT0gbnVsbDtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fVxuXG5cdHN0YXRpYyBwYXJzZVVybCh1cmwpIHtcblx0XHRsZXQgcmVzdWx0ID0gbnVsbDtcblx0XHRjb25zdCByZWdleCA9IFlvdXR1YmUuVVJMX1JFR0VYO1xuXHRcdGNvbnN0IG1hdGNoID0gdXJsLm1hdGNoKHJlZ2V4KTtcblx0XHRpZih1cmwubGVuZ3RoID09PSAxMSkge1xuXHRcdFx0cmVzdWx0ID0gdXJsO1xuXHRcdH0gZWxzZSBpZihtYXRjaCAmJiBtYXRjaFsyXS5sZW5ndGggPT09IDExKSB7XG5cdFx0XHRyZXN1bHQgPSBtYXRjaFsyXTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxufVxuXG5Zb3V0dWJlLlRFU1RfVklERU8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpO1xuLyoqXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICogICAgICAgICAtIFRydWUgaWYgdm9sdW1lIGNhbiBiZSBjb250cm9sbGVkXG4gKiAgICAgICAgIC0gRmFsc2Ugb3RoZXJ3aXNlXG4gKi9cbllvdXR1YmUuY2FuQ29udHJvbFZvbHVtZSA9IGZ1bmN0aW9uKCkge1xuXHQvLyBJRSB3aWxsIGVycm9yIGlmIFdpbmRvd3MgTWVkaWEgUGxheWVyIG5vdCBpbnN0YWxsZWQgIzMzMTVcblx0dHJ5IHtcblx0XHRjb25zdCB2b2x1bWUgPSBZb3V0dWJlLlRFU1RfVklERU8udm9sdW1lO1xuXG5cdFx0WW91dHViZS5URVNUX1ZJREVPLnZvbHVtZSA9ICh2b2x1bWUgLyAyKSArIDAuMTtcblx0XHRyZXR1cm4gdm9sdW1lICE9PSBZb3V0dWJlLlRFU1RfVklERU8udm9sdW1lO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xuXG5Zb3V0dWJlLnByb3RvdHlwZS5mZWF0dXJlQ29udHJvbFZvbHVtZSA9IFlvdXR1YmUuY2FuQ29udHJvbFZvbHVtZSgpO1xuXG5Zb3V0dWJlLlVSTF9SRUdFWCA9IC9eLiooeW91dHUuYmVcXC98dlxcL3x1XFwvXFx3XFwvfGVtYmVkXFwvfHdhdGNoXFw/dj18XFwmdj0pKFteI1xcJlxcP10qKS4qLztcblxuWW91dHViZS5RVUFMSVRZX05BTUVTID0ge1xuXHR0aW55IDogJzE0MHAnLFxuXHRzbWFsbCA6ICcyNDBwJyxcblx0bWVkaXVtIDogJzM2MHAnLFxuXHRsYXJnZSA6ICc0ODBwJyxcblx0aGQ3MjAgOiAnNzIwcCcsXG5cdGhkMTA4MCA6ICcxMDgwcCcsXG5cdGhpZ2hyZXMgOiAnSEQnLFxuXHRhdXRvIDogJ9CQ0LLRgtC+J1xufVxuXG5Zb3V0dWJlLmFwaUxvYWRlZCA9IGZ1bmN0aW9uKCkge1xuXHRpZih0aGlzLl9sb2FkZWQpIHJldHVybiAkLkRlZmVycmVkKCkucmVzb2x2ZSgpO1xuXG5cdHJldHVybiAkLmdldFNjcmlwdCgnaHR0cHM6Ly93d3cueW91dHViZS5jb20vaWZyYW1lX2FwaScpXG5cdFx0LnRoZW4oKCkgPT4gdGhpcy5fbG9hZGVkID0gdHJ1ZSlcbn1cblxuUGxheWVyLnJlZ2lzdGVyQ29tcG9uZW50KCdZb3V0dWJlJywgWW91dHViZSk7XG5cblBsYXllci5wcmVzZXQoJ3lvdXR1YmUnLCB7XG5cdG9wdGlvbnMgOiB7XG5cdFx0ZW50aXR5IDogJ1lvdXR1YmUnLFxuXHRcdGNvbnRyb2xzIDoge1xuXHRcdFx0Y29tbW9uIDogW1xuXHRcdFx0XHRbJ3BsYXknLCAndm9sdW1lJywgJ3RpbWVsaW5lJywgJ3JhdGUnLCAnYmFja3dhcmQnLCAnc291cmNlJywgJ3N1YnRpdGxlJywgJ2RpdmlkZXInLCAnc2VjdGlvbicsICdmdWxsc2NyZWVuJ10sXG5cdFx0XHRcdFtdXG5cdFx0XHRdLFxuXHRcdFx0ZnVsbHNjcmVlbiA6IFtcblx0XHRcdFx0WydwbGF5JywgJ3ZvbHVtZScsICd0aW1lbGluZScsICdyYXRlJywgJ2JhY2t3YXJkJywgJ3NvdXJjZScsICdzdWJ0aXRsZScsICdkaXZpZGVyJywgJ3NlY3Rpb24nLCAnZnVsbHNjcmVlbiddLFxuXHRcdFx0XVxuXHRcdH1cblx0fSxcbn0pO1xuLy8gUGxheWVyLnByZXNldCgnMjAzNScsIHtcbi8vIFx0b3B0aW9ucyA6IHtcbi8vIFx0XHRlbnRpdHkgOiAnWW91dHViZScsXG4vLyBcdFx0Y29udHJvbHMgOiB7XG4vLyBcdFx0XHRjb21tb24gOiBbXG4vLyBcdFx0XHRcdFsncGxheScsICd2b2x1bWUnLCAndGltZWxpbmUnLCAncmF0ZScsICdiYWNrd2FyZCcsICdzZWN0aW9uJywgJ2Z1bGxzY3JlZW4nXSxcbi8vIFx0XHRcdF0sXG4vLyBcdFx0XHRmdWxsc2NyZWVuIDogW1xuLy8gXHRcdFx0XHRbJ3BsYXknLCAndm9sdW1lJywgJ3RpbWVsaW5lJywgJ3JhdGUnLCAnYmFja3dhcmQnLCAgJ3NlY3Rpb24nLCAnZnVsbHNjcmVlbiddLFxuLy8gXHRcdFx0XSxcbi8vIFx0XHRcdG1pbmkgOiBbXG4vLyBcdFx0XHRcdFsncGxheScsICd0aW1lbGluZScsICd2b2x1bWUnLCAnZnVsbHNjcmVlbiddXG4vLyBcdFx0XHRdLFxuLy8gXHRcdH1cbi8vIFx0fSxcbi8vIH0pO1xuXG5QbGF5ZXIucGx1Z2luKCd5b3V0dWJlJywgZnVuY3Rpb24ocGx1Z2luT3B0aW9ucykge1xuXG5cdC8qIGdsb2JhbCBZVCAqL1xuXHRZb3V0dWJlLmFwaUxvYWRlZCgpXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL3BsdWdpbnMvbGUtcGxheWVyLXlvdXR1YmUuanMiXSwic291cmNlUm9vdCI6IiJ9