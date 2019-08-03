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

	module.exports = __webpack_require__(72);


/***/ }),

/***/ 2:
/***/ (function(module, exports) {

	module.exports = $;

/***/ }),

/***/ 72:
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
	Player.preset('youtube-2035', {
		options: {
			entity: 'Youtube',
			controls: {
				common: [['play', 'volume', 'timeline', 'rate', 'backward', 'section', 'fullscreen']],
				fullscreen: [['play', 'volume', 'timeline', 'rate', 'backward', 'section', 'fullscreen']],
				mini: [['play', 'timeline', 'volume', 'fullscreen']]
			}
		}
	});
	
	Player.plugin('youtube', function (pluginOptions) {
	
		/* global YT */
		Youtube.apiLoaded();
	});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMGY5MzEzNjliZTUwMjljZDRlOGQ/ZDZkMSoqKiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCIkXCI/NTdhYSoqKiIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvcGx1Z2lucy9sZS1wbGF5ZXIteW91dHViZS5qcz8xMmNjIl0sIm5hbWVzIjpbIlBsYXllciIsIndpbmRvdyIsImxlUGxheWVyIiwiJCIsIkVudGl0eSIsImdldENvbXBvbmVudCIsInRyYWNrUHJvdmlkZSIsInRyYWNrIiwibGFuZ3VhZ2VDb2RlIiwibGFuZ3VhZ2UiLCJ0aXRsZSIsInRvb2x0aXAiLCJsYW5ndWFnZU5hbWUiLCJuYW1lIiwiWW91dHViZSIsInBsYXllciIsIm9wdGlvbnMiLCJfcGF1c2VkIiwic3JjIiwiYWRkQ2xhc3MiLCJlbGVtZW50Iiwib24iLCJvbkNsaWNrIiwiYmluZCIsIm9uRGJsY2xpY2siLCJldmVudCIsInRyaWdnZXIiLCJpbmRleCIsImF2YWlsYWJsZVJhdGVzIiwiaW5kZXhPZiIsInJhdGUiLCJsZW5ndGgiLCJhcnIiLCJ5dFBsYXllciIsImdldEF2YWlsYWJsZVF1YWxpdHlMZXZlbHMiLCJzcGxpY2UiLCJtYXAiLCJRVUFMSVRZX05BTUVTIiwiaXRlbSIsInBsYXlWaWRlbyIsInBhdXNlVmlkZW8iLCJhcGlMb2FkZWQiLCJ0aGVuIiwiaW5pdFlUUGxheWVyIiwiYXR0ciIsInlvdXR1YmVFbGVtZW50IiwiYmxvY2tlciIsImFwcGVuZCIsIl9pbml0UHJvbWlzZSIsIkRlZmVycmVkIiwiZ2xvYmFsT3B0aW9ucyIsInl0T3B0aW9ucyIsImF1dG9wbGF5IiwibG9vcCIsIml2X2xvYWRfcG9saWN5IiwiY29udHJvbHMiLCJtb2Rlc3RicmFuZGluZyIsInJlbCIsInNob3dpbmZvIiwiY2NfbG9hZF9wb2xpY3kiLCJkaXNhYmxla2IiLCJmcyIsInN0YXJ0IiwidGltZSIsIllUIiwicmVhZHkiLCJjdHgiLCJyZXBsYWNlV2l0aCIsInZpZGVvSWQiLCJ3aWR0aCIsInBsYXllclZhcnMiLCJldmVudHMiLCJvblJlYWR5Iiwib25ZVFBSZWFkeSIsIm9uU3RhdGVDaGFuZ2UiLCJvbllUUFN0YXRlQ2hhbmdlIiwib25QbGF5YmFja1JhdGVDaGFuZ2UiLCJvbllUUFJhdGVDaGFuZ2UiLCJvblBsYXliYWNrUXVhbGl0eUNoYW5nZSIsIm9uWVRQUGxheWJhY2tRdWFsaXR5Q2hhbmdlIiwicHJvbWlzZSIsImdldEF2YWlsYWJsZVBsYXliYWNrUmF0ZXMiLCJyYXRlTWluIiwicmF0ZU1heCIsImUiLCJyZXNvbHZlIiwiX2luaXRSYXRlIiwiX2luaXRWb2x1bWUiLCJzZXRBdmFpbGFibGVQbGF5YmFja1JhdGVzIiwiZGF0YSIsIl9wbGF5YmFja1F1YWxpdHkiLCJmaW5kIiwic3RhdGUiLCJsYXN0U3RhdGUiLCJQbGF5ZXJTdGF0ZSIsIlVOU1RBUlRFRCIsIkVOREVEIiwiUExBWUlORyIsInNldFBsYXliYWNrUXVhbGl0eSIsIl9uZXh0UGxheWJhY2tRdWFsaXR5IiwiaXNTZWVraW5nIiwib25TZWVrZWQiLCJsb2FkQ2FwdGlvbnMiLCJlbWl0VGltZXVwZGF0ZSIsIlBBVVNFRCIsIkJVRkZFUklORyIsImNsZWFySW50ZXJ2YWwiLCJzZWVraW5nSW50ZXJ2YWwiLCJ3YXNQYXVzZWRCZWZvcmVTZWVrIiwicGF1c2UiLCJzZXRJbnRlcnZhbCIsImN1cnJlbnRUaW1lIiwidGltZUJlZm9yZVNlZWsiLCJlbXB0eVRyYWNrbGlzdCIsInN1YnRpdGxlcyIsIl9sb2FkQ2FwdGlvbnNXYXRjaGVyIiwiX3RyYWNrc0Rpc2FibGUiLCJjaGVja0NhcHRpb25zRXhpc3QiLCJsb2FkTW9kdWxlIiwiZ2V0T3B0aW9ucyIsImVycm9yIiwidXJsIiwiaWQiLCJwYXJzZVVybCIsInBvc3RlciIsImdldEN1cnJlbnRUaW1lIiwidmFsdWUiLCJwYXVzZWQiLCJkdXJhdGlvbiIsInNlZWtUbyIsImdldER1cmF0aW9uIiwiTmFOIiwiZ2V0UGxheWJhY2tSYXRlIiwic2V0UGxheWJhY2tSYXRlIiwibXV0ZSIsInVuTXV0ZSIsInNldFRpbWVvdXQiLCJpc011dGVkIiwiZ2V0T3B0aW9uIiwiX3RyYWNrIiwidW5kZWZpbmVkIiwidW5sb2FkTW9kdWxlIiwic2V0T3B0aW9uIiwic3RhdHVzIiwiZ2V0UGxheWVyU3RhdGUiLCJDVUVEIiwiZ2V0UGxheWJhY2tRdWFsaXR5IiwiZ2V0Vm9sdW1lIiwic2V0Vm9sdW1lIiwicmVzdWx0IiwicmVnZXgiLCJVUkxfUkVHRVgiLCJtYXRjaCIsIlRFU1RfVklERU8iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjYW5Db250cm9sVm9sdW1lIiwidm9sdW1lIiwicHJvdG90eXBlIiwiZmVhdHVyZUNvbnRyb2xWb2x1bWUiLCJ0aW55Iiwic21hbGwiLCJtZWRpdW0iLCJsYXJnZSIsImhkNzIwIiwiaGQxMDgwIiwiaGlnaHJlcyIsImF1dG8iLCJfbG9hZGVkIiwiZ2V0U2NyaXB0IiwicmVnaXN0ZXJDb21wb25lbnQiLCJwcmVzZXQiLCJlbnRpdHkiLCJjb21tb24iLCJmdWxsc2NyZWVuIiwibWluaSIsInBsdWdpbiIsInBsdWdpbk9wdGlvbnMiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdENBLG9COzs7Ozs7O0FDQUE7Ozs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7OztBQUVBLEtBQU1BLFNBQVNDLE9BQU9DLFFBQVAsSUFBbUJELE9BQU9FLENBQVAsQ0FBU0QsUUFBM0M7QUFDQSxLQUFNRSxTQUFTSixPQUFPSyxZQUFQLENBQW9CLFFBQXBCLENBQWY7O0FBRUEsS0FBTUMsZUFBZSxTQUFmQSxZQUFlLFFBQVM7QUFDN0IsTUFBSUMsU0FBUyxJQUFU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RUFBUyxVQUFULEVBQXFCLFFBQXJCLEVBQStCLFlBQS9CLENBRFk7QUFQSDtBQUZGO0FBRG1CLEVBQTlCOztBQWlCQS9LLFFBQU9nTCxNQUFQLENBQWMsU0FBZCxFQUF5QixVQUFVQyxhQUFWLEVBQXlCOztBQUVqRDtBQUNBbkssVUFBUTJCLFNBQVI7QUFDQSxFQUpELEUiLCJmaWxlIjoibGUtcGxheWVyLXlvdXR1YmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9qcy9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAwZjkzMTM2OWJlNTAyOWNkNGU4ZCIsIm1vZHVsZS5leHBvcnRzID0gJDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIiRcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuY29uc3QgUGxheWVyID0gd2luZG93LmxlUGxheWVyIHx8IHdpbmRvdy4kLmxlUGxheWVyO1xuY29uc3QgRW50aXR5ID0gUGxheWVyLmdldENvbXBvbmVudCgnRW50aXR5Jyk7XG5cbmNvbnN0IHRyYWNrUHJvdmlkZSA9IHRyYWNrID0+IHtcblx0aWYgKHRyYWNrID09IG51bGwgfHwgdHJhY2subGFuZ3VhZ2VDb2RlID09IG51bGwpIHtcblx0XHRyZXR1cm4gdHJhY2tcblx0fVxuXHRyZXR1cm4ge1xuXHRcdGxhbmd1YWdlIDogdHJhY2subGFuZ3VhZ2VDb2RlLFxuXHRcdHRpdGxlICAgIDogdHJhY2subGFuZ3VhZ2VDb2RlLFxuXHRcdHRvb2x0aXAgIDogdHJhY2subGFuZ3VhZ2VOYW1lLFxuXHRcdG5hbWUgICAgIDogdHJhY2subGFuZ3VhZ2VDb2RlLFxuXHR9XG59XG5cbmNsYXNzIFlvdXR1YmUgZXh0ZW5kcyBFbnRpdHkge1xuXHRjb25zdHJ1Y3RvciAocGxheWVyLCBvcHRpb25zKSB7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblx0XHR0aGlzLl9wYXVzZWQgPSB0cnVlO1xuXG5cdFx0dGhpcy5zcmMgPSB0aGlzLnBsYXllci5vcHRpb25zLnNyYztcblxuXHRcdHRoaXMucGxheWVyLmFkZENsYXNzKCdsZXBsYXllci0teW91dHViZScpO1xuXHRcdHRoaXMuZWxlbWVudC5vbignY2xpY2snLCB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdkYmxjbGljaycsIHRoaXMub25EYmxjbGljay5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdHNldCBzcmMgKHNyYykge1xuXHRcdGlmIChzcmMgPT0gbnVsbCkgcmV0dXJuO1xuXHRcdGlmICh0aGlzLnNyYyAmJiB0aGlzLnNyYy51cmwgPT09IHNyYy51cmwpIHJldHVybjtcblxuXHRcdGNvbnN0IHVybCA9IHNyYy51cmwgfHwgc3JjLmlkO1xuXG5cdFx0dGhpcy52aWRlb0lkID0gWW91dHViZS5wYXJzZVVybCh1cmwpO1xuXG5cdFx0aWYgKHRoaXMucGxheWVyLm9wdGlvbnMucG9zdGVyKSB7XG5cdFx0XHR0aGlzLnBvc3RlciA9IHRoaXMucGxheWVyLm9wdGlvbnMucG9zdGVyXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucG9zdGVyID0gJ2h0dHBzOi8vaW1nLnlvdXR1YmUuY29tL3ZpLycgKyB0aGlzLnZpZGVvSWQgKyAnLzAuanBnJztcblx0XHR9XG5cdH1cblxuXHRvbkNsaWNrIChldmVudCkge1xuXHRcdHRoaXMudHJpZ2dlcignY2xpY2snKTtcblx0fVxuXG5cdG9uRGJsY2xpY2sgKCkge1xuXHRcdHRoaXMudHJpZ2dlcignZGJsY2xpY2snKTtcblx0fVxuXG5cdGdldCBjdXJyZW50VGltZSAoKSB7XG5cdFx0cmV0dXJuIHRoaXMueXRQbGF5ZXIgPyB0aGlzLnl0UGxheWVyLmdldEN1cnJlbnRUaW1lKCkgOiAwO1xuXHR9XG5cblx0c2V0IGN1cnJlbnRUaW1lICh2YWx1ZSkge1xuXHRcdGlmICh0aGlzLmxhc3RTdGF0ZSA9PT0gWVQuUGxheWVyU3RhdGUuUEFVU0VEKSB7XG5cdFx0XHR0aGlzLnRpbWVCZWZvcmVTZWVrID0gdGhpcy5jdXJyZW50VGltZTtcblx0XHR9XG5cblx0XHRpZiAoIXRoaXMuaXNTZWVraW5nKSB7XG5cdFx0XHR0aGlzLndhc1BhdXNlZEJlZm9yZVNlZWsgPSB0aGlzLnBhdXNlZDtcblx0XHR9XG5cblx0XHRsZXQgdGltZTtcblx0XHRpZiAodmFsdWUgPj0gdGhpcy5kdXJhdGlvbikge1xuXHRcdFx0dGltZSA9IHRoaXMuZHVyYXRpb25cblx0XHR9IGVsc2UgaWYgKHZhbHVlIDwgMCkge1xuXHRcdFx0dGltZSA9IDBcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGltZSA9IHZhbHVlO1xuXHRcdH1cblxuXHRcdHRoaXMuaXNTZWVraW5nID0gdHJ1ZTtcblx0XHR0aGlzLnl0UGxheWVyLnNlZWtUbyh0aW1lLCB0cnVlKTtcblx0XHR0aGlzLnBsYXllci50cmlnZ2VyKCd0aW1ldXBkYXRlbG9hZCcsIHsgY3VycmVudFRpbWUgOiB0aW1lIH0pO1xuXG5cdFx0dGhpcy50cmlnZ2VyKCdzZWVraW5nJyk7XG5cblx0XHR0aGlzLmVtaXRUaW1ldXBkYXRlKCk7XG5cdH1cblxuXHRnZXQgZHVyYXRpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLnl0UGxheWVyICYmIHRoaXMueXRQbGF5ZXIuZ2V0RHVyYXRpb24gPyB0aGlzLnl0UGxheWVyLmdldER1cmF0aW9uKCkgOiBOYU47XG5cdH1cblxuXHRnZXQgcGF1c2VkICgpIHtcblx0XHRyZXR1cm4gKHRoaXMueXRQbGF5ZXIpID9cblx0XHRcdCh0aGlzLmxhc3RTdGF0ZSAhPT0gWVQuUGxheWVyU3RhdGUuUExBWUlORyAmJiB0aGlzLmxhc3RTdGF0ZSAhPT0gWVQuUGxheWVyU3RhdGUuQlVGRkVSSU5HKVxuXHRcdFx0OiB0cnVlO1xuXG5cdH1cblxuXHRnZXQgcmF0ZSAoKSB7XG5cdFx0cmV0dXJuIHRoaXMueXRQbGF5ZXIuZ2V0UGxheWJhY2tSYXRlKCk7XG5cdH1cblxuXHRzZXQgcmF0ZSAodmFsdWUpIHtcblx0XHRzdXBlci5yYXRlID0gdmFsdWU7XG5cdFx0dGhpcy55dFBsYXllci5zZXRQbGF5YmFja1JhdGUodmFsdWUpO1xuXHRcdHRoaXMudHJpZ2dlcigncmF0ZWNoYW5nZScpO1xuXHR9XG5cblx0c2V0IG11dGVkICh2YWx1ZSkge1xuXHRcdGlmICh2YWx1ZSkge1xuXHRcdFx0dGhpcy55dFBsYXllci5tdXRlKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMueXRQbGF5ZXIudW5NdXRlKCk7XG5cdFx0fVxuXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHR0aGlzLnRyaWdnZXIoJ3ZvbHVtZWNoYW5nZScpO1xuXHRcdH0sIDUwKTtcblx0fVxuXG5cdGdldCBtdXRlZCAoKSB7XG5cdFx0cmV0dXJuIHRoaXMueXRQbGF5ZXIuaXNNdXRlZCgpO1xuXHR9XG5cblx0Z2V0IHN1YnRpdGxlcyAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuY2hlY2tDYXB0aW9uc0V4aXN0KClcblx0XHRcdD8gKHRoaXMueXRQbGF5ZXIuZ2V0T3B0aW9uKCdjYXB0aW9ucycsICd0cmFja2xpc3QnKSB8fCBbXSkubWFwKHRyYWNrUHJvdmlkZSlcblx0XHRcdDogW11cblx0fVxuXG5cdGdldCB0cmFjayAoKSB7XG5cdFx0aWYgKHRoaXMuX3RyYWNrID09PSB1bmRlZmluZWQgJiYgdGhpcy5jaGVja0NhcHRpb25zRXhpc3QoKSkge1xuXHRcdFx0cmV0dXJuIHRyYWNrUHJvdmlkZSh0aGlzLnl0UGxheWVyLmdldE9wdGlvbignY2FwdGlvbnMnLCAndHJhY2snKSlcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuX3RyYWNrO1xuXHRcdH1cblx0fVxuXG5cdHNldCB0cmFjayAodmFsdWUpIHtcblx0XHR0aGlzLl90cmFjayA9IHZhbHVlO1xuXHRcdGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuXHRcdFx0dGhpcy5fdHJhY2tzRGlzYWJsZSA9IHRydWU7XG5cdFx0XHQvKiBEaXNhYmxlIGNhcHRpb25zICovXG5cdFx0XHR0aGlzLnl0UGxheWVyLnVubG9hZE1vZHVsZSgnY2FwdGlvbnMnKTtcblxuXHRcdFx0dGhpcy50cmlnZ2VyKCd0cmFja3NjaGFuZ2UnKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy55dFBsYXllclxuXHRcdFx0LnNldE9wdGlvbignY2FwdGlvbnMnLCAndHJhY2snLCB7IGxhbmd1YWdlQ29kZSA6IHZhbHVlLm5hbWUgfSlcblx0XHRcdC5zZXRPcHRpb24oJ2NhcHRpb25zJywgJ3JlbG9hZCcsIHRydWUpO1xuXG5cdFx0aWYgKHRoaXMuX3RyYWNrc0Rpc2FibGUpIHtcblx0XHRcdC8qIEVuYWJsZSBjYXB0aW9ucyAqL1xuXHRcdFx0dGhpcy55dFBsYXllci5sb2FkTW9kdWxlKCdjYXB0aW9ucycpO1xuXHRcdH1cblx0XHR0aGlzLnRyaWdnZXIoJ3RyYWNrc2NoYW5nZScpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0aW5jcmVhc2VSYXRlICgpIHtcblx0XHRjb25zdCBpbmRleCA9IHRoaXMuYXZhaWxhYmxlUmF0ZXMuaW5kZXhPZih0aGlzLnJhdGUpO1xuXHRcdGlmIChpbmRleCArIDEgPj0gdGhpcy5hdmFpbGFibGVSYXRlcy5sZW5ndGgpIHJldHVybjtcblx0XHRyZXR1cm4gdGhpcy5yYXRlID0gdGhpcy5hdmFpbGFibGVSYXRlc1tpbmRleCArIDFdO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0ZGVjcmVhc2VSYXRlICgpIHtcblx0XHRjb25zdCBpbmRleCA9IHRoaXMuYXZhaWxhYmxlUmF0ZXMuaW5kZXhPZih0aGlzLnJhdGUpO1xuXHRcdGlmIChpbmRleCAtIDEgPCAwKSByZXR1cm47XG5cdFx0cmV0dXJuIHRoaXMucmF0ZSA9IHRoaXMuYXZhaWxhYmxlUmF0ZXNbaW5kZXggLSAxXTtcblx0fVxuXG5cdGdldEF2YWlsYWJsZVF1YWxpdHlMZXZlbHMgKCkge1xuXHRcdGNvbnN0IGFyciAgID0gdGhpcy55dFBsYXllci5nZXRBdmFpbGFibGVRdWFsaXR5TGV2ZWxzKCk7XG5cdFx0Y29uc3QgaW5kZXggPSBhcnIuaW5kZXhPZignYXV0bycpO1xuXG5cdFx0aWYgKGluZGV4ID4gLTEpIHtcblx0XHRcdGFyci5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdH1cblxuXHRcdHJldHVybiBhcnIubWFwKGl0ZW0gPT4gKHtcblx0XHRcdHRpdGxlIDogWW91dHViZS5RVUFMSVRZX05BTUVTW2l0ZW1dIHx8IGl0ZW0sXG5cdFx0XHRuYW1lICA6IGl0ZW1cblx0XHR9KSk7XG5cdH1cblxuXHRzZXQgcGxheWJhY2tRdWFsaXR5IChuYW1lKSB7XG5cdFx0c3VwZXIucGxheWJhY2tRdWFsaXR5ID0gbmFtZTtcblx0XHRjb25zdCB0aW1lICAgICAgICAgICAgPSB0aGlzLmN1cnJlbnRUaW1lO1xuXHRcdGNvbnN0IHN0YXR1cyAgICAgICAgICA9IHRoaXMueXRQbGF5ZXIuZ2V0UGxheWVyU3RhdGUoKTtcblxuXHRcdGlmIChzdGF0dXMgIT09IFlULlBsYXllclN0YXRlLlVOU1RBUlRFRCAmJiBzdGF0dXMgIT09IFlULlBsYXllclN0YXRlLkNVRUQpIHtcblx0XHRcdHRoaXMueXRQbGF5ZXIucGF1c2VWaWRlbygpO1xuXHRcdH1cblxuXHRcdHRoaXMuX25leHRQbGF5YmFja1F1YWxpdHkgPSBuYW1lO1xuXHRcdHRoaXMueXRQbGF5ZXIuc2V0UGxheWJhY2tRdWFsaXR5KG5hbWUpO1xuXHRcdHRoaXMueXRQbGF5ZXIuc2Vla1RvKHRpbWUpO1xuXG5cdFx0aWYgKHN0YXR1cyAhPT0gWVQuUGxheWVyU3RhdGUuUEFVU0VEKSB7XG5cdFx0XHR0aGlzLnl0UGxheWVyLnBsYXlWaWRlbygpO1xuXHRcdH1cblxuXHR9XG5cblx0Z2V0IHBsYXliYWNrUXVhbGl0eSAoKSB7XG5cdFx0aWYgKHRoaXMuX3BsYXliYWNrUXVhbGl0eSA9PSBudWxsKSB7XG5cdFx0XHR0aGlzLl9wbGF5YmFja1F1YWxpdHkgPSB0aGlzLmdldEF2YWlsYWJsZVF1YWxpdHlMZXZlbHMoKVxuXHRcdFx0XHQuZmluZChpdGVtID0+IGl0ZW0ubmFtZSA9PT0gdGhpcy55dFBsYXllci5nZXRQbGF5YmFja1F1YWxpdHkoKSlcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuX3BsYXliYWNrUXVhbGl0eTtcblx0fVxuXG5cdGdldCB2b2x1bWUgKCkge1xuXHRcdHJldHVybiB0aGlzLnl0UGxheWVyID8gdGhpcy55dFBsYXllci5nZXRWb2x1bWUoKSAvIDEwMC4wIDogMTtcblx0fVxuXG5cdHNldCB2b2x1bWUgKHZhbHVlKSB7XG5cdFx0c3VwZXIudm9sdW1lID0gdmFsdWU7XG5cdFx0dGhpcy55dFBsYXllci5zZXRWb2x1bWUodmFsdWUgKiAxMDApO1xuXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHR0aGlzLnRyaWdnZXIoJ3ZvbHVtZWNoYW5nZScpO1xuXHRcdH0sIDUwKVxuXG5cdH1cblxuXHRzdXBwb3J0c0Z1bGxTY3JlZW4gKCkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0cGxheSAoKSB7XG5cdFx0dGhpcy55dFBsYXllci5wbGF5VmlkZW8oKTtcblx0XHR0aGlzLnRyaWdnZXIoJ3BsYXknKTtcblx0fVxuXG5cdHBhdXNlICgpIHtcblx0XHR0aGlzLnl0UGxheWVyLnBhdXNlVmlkZW8oKTtcblx0XHR0aGlzLnRyaWdnZXIoJ3BhdXNlJyk7XG5cdH1cblxuXHRpbml0ICgpIHtcblx0XHRzdXBlci5pbml0KCk7XG5cdFx0cmV0dXJuIFlvdXR1YmUuYXBpTG9hZGVkKClcblx0XHRcdC50aGVuKCgpID0+IHRoaXMuaW5pdFlUUGxheWVyKCkpXG5cdH1cblxuXHRjcmVhdGVFbGVtZW50ICgpIHtcblx0XHR0aGlzLmVsZW1lbnQgICAgICAgID0gJCgnPGRpdiAvPicpXG5cdFx0XHQuYWRkQ2xhc3MoJ2xlcGxheWVyX195b3V0dWJlLXdyYXBwZXInKVxuXHRcdFx0LmF0dHIoJ3RhYmluZGV4JywgJzAnKTtcblx0XHR0aGlzLnlvdXR1YmVFbGVtZW50ID0gJCgnPGRpdiAvPicpXG5cdFx0XHQuYWRkQ2xhc3MoJ2xlcGxheWVyX195b3V0dWJlJyk7XG5cdFx0dGhpcy5ibG9ja2VyICAgICAgICA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0LmFkZENsYXNzKCdsZXBsYXllcl9feW91dHViZS1ibG9ja2VyJyk7XG5cblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50XG5cdFx0XHQuYXBwZW5kKHRoaXMuYmxvY2tlcilcblx0XHRcdC5hcHBlbmQodGhpcy55b3V0dWJlRWxlbWVudCk7XG5cdH1cblxuXHRpbml0WVRQbGF5ZXIgKCkge1xuXHRcdHRoaXMuX2luaXRQcm9taXNlICAgPSAkLkRlZmVycmVkKCk7XG5cdFx0Y29uc3QgZ2xvYmFsT3B0aW9ucyA9IHRoaXMucGxheWVyLm9wdGlvbnM7XG5cdFx0bGV0IHl0T3B0aW9ucyAgICAgICA9IHtcblx0XHRcdGF1dG9wbGF5ICAgICAgIDogZ2xvYmFsT3B0aW9ucy5hdXRvcGxheSA/IDEgOiAwLFxuXHRcdFx0bG9vcCAgICAgICAgICAgOiBnbG9iYWxPcHRpb25zLmxvb3AgPyAxIDogMCxcblx0XHRcdGl2X2xvYWRfcG9saWN5IDogMyxcblx0XHRcdGNvbnRyb2xzICAgICAgIDogMCxcblx0XHRcdG1vZGVzdGJyYW5kaW5nIDogMSxcblx0XHRcdHJlbCAgICAgICAgICAgIDogMCxcblx0XHRcdHNob3dpbmZvICAgICAgIDogMCxcblx0XHRcdGNjX2xvYWRfcG9saWN5IDogMCxcblx0XHRcdGRpc2FibGVrYiAgICAgIDogMCxcblx0XHRcdGZzICAgICAgICAgICAgIDogMCxcblx0XHRcdHN0YXJ0ICAgICAgICAgIDogZ2xvYmFsT3B0aW9ucy50aW1lXG5cdFx0fTtcblxuXHRcdFlULnJlYWR5KCgpID0+IHtcblx0XHRcdHRoaXMub3B0aW9ucy5jdHgucmVwbGFjZVdpdGgodGhpcy5lbGVtZW50KTtcblxuXHRcdFx0dGhpcy55dFBsYXllciA9IG5ldyBZVC5QbGF5ZXIodGhpcy55b3V0dWJlRWxlbWVudFswXSwge1xuXHRcdFx0XHR2aWRlb0lkICAgIDogdGhpcy52aWRlb0lkLFxuXHRcdFx0XHR3aWR0aCAgICAgIDogZ2xvYmFsT3B0aW9ucy53aWR0aCB8fCAnMTAwJScsXG5cdFx0XHRcdHBsYXllclZhcnMgOiB5dE9wdGlvbnMsXG5cdFx0XHRcdGV2ZW50cyAgICAgOiB7XG5cdFx0XHRcdFx0b25SZWFkeSAgICAgICAgICAgICAgICAgOiB0aGlzLm9uWVRQUmVhZHkuYmluZCh0aGlzKSxcblx0XHRcdFx0XHRvblN0YXRlQ2hhbmdlICAgICAgICAgICA6IHRoaXMub25ZVFBTdGF0ZUNoYW5nZS5iaW5kKHRoaXMpLFxuXHRcdFx0XHRcdG9uUGxheWJhY2tSYXRlQ2hhbmdlICAgIDogdGhpcy5vbllUUFJhdGVDaGFuZ2UuYmluZCh0aGlzKSxcblx0XHRcdFx0XHRvblBsYXliYWNrUXVhbGl0eUNoYW5nZSA6IHRoaXMub25ZVFBQbGF5YmFja1F1YWxpdHlDaGFuZ2UuYmluZCh0aGlzKVxuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXG5cdFx0fSlcblx0XHRyZXR1cm4gdGhpcy5faW5pdFByb21pc2UucHJvbWlzZSgpO1xuXHR9XG5cblx0c2V0QXZhaWxhYmxlUGxheWJhY2tSYXRlcyAoKSB7XG5cdFx0dGhpcy5hdmFpbGFibGVSYXRlcyA9IHRoaXMueXRQbGF5ZXIuZ2V0QXZhaWxhYmxlUGxheWJhY2tSYXRlcygpO1xuXHRcdHRoaXMucmF0ZU1pbiAgICAgICAgPSB0aGlzLmF2YWlsYWJsZVJhdGVzWzBdO1xuXHRcdHRoaXMucmF0ZU1heCAgICAgICAgPSB0aGlzLmF2YWlsYWJsZVJhdGVzW3RoaXMuYXZhaWxhYmxlUmF0ZXMubGVuZ3RoIC0gMV07XG5cdH1cblxuXHRvbllUUFJlYWR5IChlKSB7XG5cdFx0dGhpcy5faW5pdFByb21pc2UucmVzb2x2ZSgpO1xuXHRcdHRoaXMuX2luaXRSYXRlKCk7XG5cdFx0dGhpcy5faW5pdFZvbHVtZSgpO1xuXHRcdHRoaXMuc2V0QXZhaWxhYmxlUGxheWJhY2tSYXRlcygpO1xuXHR9XG5cblx0b25ZVFBSYXRlQ2hhbmdlIChlKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCdyYXRlY2hhbmdlJyk7XG5cdH1cblxuXHRvbllUUFBsYXliYWNrUXVhbGl0eUNoYW5nZSAoZSkge1xuXHRcdGNvbnN0IGRhdGEgICAgICAgICAgICA9IGUuZGF0YTtcblx0XHR0aGlzLl9wbGF5YmFja1F1YWxpdHkgPSB0aGlzLmdldEF2YWlsYWJsZVF1YWxpdHlMZXZlbHMoKS5maW5kKGl0ZW0gPT4gaXRlbS5uYW1lID09PSBkYXRhKTtcblx0XHR0aGlzLnRyaWdnZXIoJ3F1YWxpdHljaGFuZ2UnLCB0aGlzLl9wbGF5YmFja1F1YWxpdHkpO1xuXHR9XG5cblx0b25ZVFBTdGF0ZUNoYW5nZSAoZSkge1xuXHRcdGNvbnN0IHN0YXRlID0gZS5kYXRhO1xuXHRcdGlmIChzdGF0ZSA9PT0gdGhpcy5sYXN0U3RhdGUpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLmxhc3RTdGF0ZSA9IHN0YXRlO1xuXHRcdHN3aXRjaCAoc3RhdGUpIHtcblx0XHRcdGNhc2UgWVQuUGxheWVyU3RhdGUuVU5TVEFSVEVEOlxuXHRcdFx0XHR0aGlzLnRyaWdnZXIoJ2xvYWRzdGFydCcpO1xuXHRcdFx0XHR0aGlzLnRyaWdnZXIoJ2xvYWRlZG1ldGFkYXRhJyk7XG5cdFx0XHRcdHRoaXMudHJpZ2dlcignZHVyYXRpb25jaGFuZ2UnKTtcblx0XHRcdFx0dGhpcy50cmlnZ2VyKCdyYXRlY2hhbmdlJyk7XG5cdFx0XHRcdHRoaXMudHJpZ2dlcigndm9sdW1lY2hhbmdlJyk7XG5cdFx0XHRcdHRoaXMudHJpZ2dlcigndHJhY2tzY2hhbmdlJyk7XG5cdFx0XHRcdGlmICh0aGlzLnBsYXllci5vcHRpb25zLmF1dG9wbGF5KSB7XG5cdFx0XHRcdFx0dGhpcy50cmlnZ2VyKCdwbGF5Jyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgWVQuUGxheWVyU3RhdGUuRU5ERUQ6XG5cdFx0XHRcdHRoaXMudHJpZ2dlcigncGF1c2UnKTtcblx0XHRcdFx0dGhpcy50cmlnZ2VyKCdlbmRlZCcpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBZVC5QbGF5ZXJTdGF0ZS5QTEFZSU5HOlxuXHRcdFx0XHR0aGlzLnRyaWdnZXIoJ3RpbWV1cGRhdGUnKTtcblx0XHRcdFx0dGhpcy50cmlnZ2VyKCdkdXJhdGlvbmNoYW5nZScpO1xuXHRcdFx0XHR0aGlzLnRyaWdnZXIoJ3BsYXlpbmcnKTtcblxuXHRcdFx0XHR0aGlzLnl0UGxheWVyLnNldFBsYXliYWNrUXVhbGl0eSh0aGlzLl9uZXh0UGxheWJhY2tRdWFsaXR5KTtcblxuXHRcdFx0XHRpZiAodGhpcy5pc1NlZWtpbmcpIHtcblx0XHRcdFx0XHR0aGlzLm9uU2Vla2VkKCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLmxvYWRDYXB0aW9ucygpXG5cdFx0XHRcdHRoaXMuZW1pdFRpbWV1cGRhdGUoKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgWVQuUGxheWVyU3RhdGUuUEFVU0VEOlxuXHRcdFx0XHR0aGlzLnRyaWdnZXIoJ2NhbnBsYXknKTtcblxuXHRcdFx0XHRpZiAodGhpcy5pc1NlZWtpbmcpIHtcblx0XHRcdFx0XHR0aGlzLm9uU2Vla2VkKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgWVQuUGxheWVyU3RhdGUuQlVGRkVSSU5HOlxuXHRcdFx0XHR0aGlzLnBsYXllci50cmlnZ2VyKCd0aW1ldXBkYXRlJyk7XG5cdFx0XHRcdHRoaXMucGxheWVyLnRyaWdnZXIoJ3dhaXRpbmcnKTtcblxuXHRcdFx0XHR0aGlzLnl0UGxheWVyLnNldFBsYXliYWNrUXVhbGl0eSh0aGlzLl9uZXh0UGxheWJhY2tRdWFsaXR5KTtcblxuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cblx0fVxuXG5cdG9uU2Vla2VkICgpIHtcblx0XHRjbGVhckludGVydmFsKHRoaXMuc2Vla2luZ0ludGVydmFsKTtcblx0XHR0aGlzLmlzU2Vla2luZyA9IGZhbHNlO1xuXG5cdFx0aWYgKHRoaXMud2FzUGF1c2VkQmVmb3JlU2Vlaykge1xuXHRcdFx0dGhpcy5wYXVzZSgpO1xuXHRcdH1cblxuXHRcdHRoaXMudHJpZ2dlcignc2Vla2VkJyk7XG5cdH1cblxuXHRlbWl0VGltZXVwZGF0ZSAoKSB7XG5cdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLnNlZWtpbmdJbnRlcnZhbCk7XG5cblx0XHR0aGlzLnNlZWtpbmdJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcblx0XHRcdGlmICh0aGlzLmxhc3RTdGF0ZSA9PT0gWVQuUGxheWVyU3RhdGUuUEFVU0VEKSB7XG5cdFx0XHRcdGNsZWFySW50ZXJ2YWwodGhpcy5zZWVraW5nSW50ZXJ2YWwpO1xuXHRcdFx0fSBlbHNlIGlmICh0aGlzLmN1cnJlbnRUaW1lICE9PSB0aGlzLnRpbWVCZWZvcmVTZWVrKSB7XG5cdFx0XHRcdHRoaXMudHJpZ2dlcigndGltZXVwZGF0ZScpO1xuXHRcdFx0fVxuXHRcdH0sIDI1MClcblx0fVxuXG5cdGxvYWRDYXB0aW9ucyAoKSB7XG5cdFx0Y29uc3QgZW1wdHlUcmFja2xpc3QgPSAoKSA9PiAodGhpcy5zdWJ0aXRsZXMgPT0gbnVsbCB8fCB0aGlzLnN1YnRpdGxlcy5sZW5ndGggPT09IDApO1xuXG5cdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLl9sb2FkQ2FwdGlvbnNXYXRjaGVyKTtcblx0XHRpZiAoXG5cdFx0XHQhdGhpcy5fdHJhY2tzRGlzYWJsZSAmJlxuXHRcdFx0dGhpcy5jaGVja0NhcHRpb25zRXhpc3QoKSAmJlxuXHRcdFx0ZW1wdHlUcmFja2xpc3QoKVxuXHRcdCkge1xuXHRcdFx0dGhpcy55dFBsYXllci5sb2FkTW9kdWxlKCdjYXB0aW9ucycpO1xuXG5cdFx0XHR0aGlzLl9sb2FkQ2FwdGlvbnNXYXRjaGVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuXHRcdFx0XHRpZiAoIWVtcHR5VHJhY2tsaXN0KCkgJiYgdGhpcy5jaGVja0NhcHRpb25zRXhpc3QoKSkge1xuXHRcdFx0XHRcdHRoaXMudHJpZ2dlcigndHJhY2tzY2hhbmdlJyk7XG5cdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLl9sb2FkQ2FwdGlvbnNXYXRjaGVyKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgMjUwKVxuXHRcdH1cblx0fVxuXG5cdGNoZWNrQ2FwdGlvbnNFeGlzdCAoKSB7XG5cdFx0dHJ5IHtcblx0XHRcdHJldHVybiB0aGlzLnl0UGxheWVyLmdldE9wdGlvbnMoJ2NhcHRpb25zJykgIT0gbnVsbDtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fVxuXG5cdHN0YXRpYyBwYXJzZVVybCAodXJsKSB7XG5cdFx0bGV0IHJlc3VsdCAgPSBudWxsO1xuXHRcdGNvbnN0IHJlZ2V4ID0gWW91dHViZS5VUkxfUkVHRVg7XG5cdFx0Y29uc3QgbWF0Y2ggPSB1cmwubWF0Y2gocmVnZXgpO1xuXHRcdGlmICh1cmwubGVuZ3RoID09PSAxMSkge1xuXHRcdFx0cmVzdWx0ID0gdXJsO1xuXHRcdH0gZWxzZSBpZiAobWF0Y2ggJiYgbWF0Y2hbMl0ubGVuZ3RoID09PSAxMSkge1xuXHRcdFx0cmVzdWx0ID0gbWF0Y2hbMl07XG5cdFx0fVxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cbn1cblxuWW91dHViZS5URVNUX1ZJREVPID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8nKTtcbi8qKlxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqICAgICAgICAgLSBUcnVlIGlmIHZvbHVtZSBjYW4gYmUgY29udHJvbGxlZFxuICogICAgICAgICAtIEZhbHNlIG90aGVyd2lzZVxuICovXG5Zb3V0dWJlLmNhbkNvbnRyb2xWb2x1bWUgPSBmdW5jdGlvbiAoKSB7XG5cdC8vIElFIHdpbGwgZXJyb3IgaWYgV2luZG93cyBNZWRpYSBQbGF5ZXIgbm90IGluc3RhbGxlZCAjMzMxNVxuXHR0cnkge1xuXHRcdGNvbnN0IHZvbHVtZSA9IFlvdXR1YmUuVEVTVF9WSURFTy52b2x1bWU7XG5cblx0XHRZb3V0dWJlLlRFU1RfVklERU8udm9sdW1lID0gKHZvbHVtZSAvIDIpICsgMC4xO1xuXHRcdHJldHVybiB2b2x1bWUgIT09IFlvdXR1YmUuVEVTVF9WSURFTy52b2x1bWU7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn07XG5cbllvdXR1YmUucHJvdG90eXBlLmZlYXR1cmVDb250cm9sVm9sdW1lID0gWW91dHViZS5jYW5Db250cm9sVm9sdW1lKCk7XG5cbllvdXR1YmUuVVJMX1JFR0VYID0gL14uKih5b3V0dS5iZVxcL3x2XFwvfHVcXC9cXHdcXC98ZW1iZWRcXC98d2F0Y2hcXD92PXxcXCZ2PSkoW14jXFwmXFw/XSopLiovO1xuXG5Zb3V0dWJlLlFVQUxJVFlfTkFNRVMgPSB7XG5cdHRpbnkgICAgOiAnMTQwcCcsXG5cdHNtYWxsICAgOiAnMjQwcCcsXG5cdG1lZGl1bSAgOiAnMzYwcCcsXG5cdGxhcmdlICAgOiAnNDgwcCcsXG5cdGhkNzIwICAgOiAnNzIwcCcsXG5cdGhkMTA4MCAgOiAnMTA4MHAnLFxuXHRoaWdocmVzIDogJ0hEJyxcblx0YXV0byAgICA6ICfQkNCy0YLQvidcbn1cblxuWW91dHViZS5hcGlMb2FkZWQgPSBmdW5jdGlvbiAoKSB7XG5cdGlmICh0aGlzLl9sb2FkZWQpIHJldHVybiAkLkRlZmVycmVkKCkucmVzb2x2ZSgpO1xuXG5cdHJldHVybiAkLmdldFNjcmlwdCgnaHR0cHM6Ly93d3cueW91dHViZS5jb20vaWZyYW1lX2FwaScpXG5cdFx0LnRoZW4oKCkgPT4gdGhpcy5fbG9hZGVkID0gdHJ1ZSlcbn07XG5cblBsYXllci5yZWdpc3RlckNvbXBvbmVudCgnWW91dHViZScsIFlvdXR1YmUpO1xuXG5QbGF5ZXIucHJlc2V0KCd5b3V0dWJlJywge1xuXHRvcHRpb25zIDoge1xuXHRcdGVudGl0eSAgIDogJ1lvdXR1YmUnLFxuXHRcdGNvbnRyb2xzIDoge1xuXHRcdFx0Y29tbW9uICAgICA6IFtcblx0XHRcdFx0WydwbGF5JywgJ3ZvbHVtZScsICd0aW1lbGluZScsICdyYXRlJywgJ2JhY2t3YXJkJywgJ3NvdXJjZScsICdzdWJ0aXRsZScsICdkaXZpZGVyJywgJ3NlY3Rpb24nLCAnZnVsbHNjcmVlbiddLFxuXHRcdFx0XHRbXVxuXHRcdFx0XSxcblx0XHRcdGZ1bGxzY3JlZW4gOiBbXG5cdFx0XHRcdFsncGxheScsICd2b2x1bWUnLCAndGltZWxpbmUnLCAncmF0ZScsICdiYWNrd2FyZCcsICdzb3VyY2UnLCAnc3VidGl0bGUnLCAnZGl2aWRlcicsICdzZWN0aW9uJywgJ2Z1bGxzY3JlZW4nXSxcblx0XHRcdF1cblx0XHR9XG5cdH0sXG59KTtcblBsYXllci5wcmVzZXQoJ3lvdXR1YmUtMjAzNScsIHtcblx0b3B0aW9ucyA6IHtcblx0XHRlbnRpdHkgICA6ICdZb3V0dWJlJyxcblx0XHRjb250cm9scyA6IHtcblx0XHRcdGNvbW1vbiAgICAgOiBbXG5cdFx0XHRcdFsncGxheScsICd2b2x1bWUnLCAndGltZWxpbmUnLCAncmF0ZScsICdiYWNrd2FyZCcsICdzZWN0aW9uJywgJ2Z1bGxzY3JlZW4nXSxcblx0XHRcdF0sXG5cdFx0XHRmdWxsc2NyZWVuIDogW1xuXHRcdFx0XHRbJ3BsYXknLCAndm9sdW1lJywgJ3RpbWVsaW5lJywgJ3JhdGUnLCAnYmFja3dhcmQnLCAnc2VjdGlvbicsICdmdWxsc2NyZWVuJ10sXG5cdFx0XHRdLFxuXHRcdFx0bWluaSAgICAgICA6IFtcblx0XHRcdFx0WydwbGF5JywgJ3RpbWVsaW5lJywgJ3ZvbHVtZScsICdmdWxsc2NyZWVuJ11cblx0XHRcdF0sXG5cdFx0fVxuXHR9LFxufSk7XG5cblBsYXllci5wbHVnaW4oJ3lvdXR1YmUnLCBmdW5jdGlvbiAocGx1Z2luT3B0aW9ucykge1xuXG5cdC8qIGdsb2JhbCBZVCAqL1xuXHRZb3V0dWJlLmFwaUxvYWRlZCgpXG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9wbHVnaW5zL2xlLXBsYXllci15b3V0dWJlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==