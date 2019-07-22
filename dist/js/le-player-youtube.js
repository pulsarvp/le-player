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
	Player.preset('2035', {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNmFkMjdlMmM1YmJkMDA5YmM5NjA/NzJmYyoqKiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCIkXCI/NTdhYSoqKiIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvcGx1Z2lucy9sZS1wbGF5ZXIteW91dHViZS5qcz8xMmNjIl0sIm5hbWVzIjpbIlBsYXllciIsIndpbmRvdyIsImxlUGxheWVyIiwiJCIsIkVudGl0eSIsImdldENvbXBvbmVudCIsInRyYWNrUHJvdmlkZSIsInRyYWNrIiwibGFuZ3VhZ2VDb2RlIiwibGFuZ3VhZ2UiLCJ0aXRsZSIsInRvb2x0aXAiLCJsYW5ndWFnZU5hbWUiLCJuYW1lIiwiWW91dHViZSIsInBsYXllciIsIm9wdGlvbnMiLCJfcGF1c2VkIiwic3JjIiwiYWRkQ2xhc3MiLCJlbGVtZW50Iiwib24iLCJvbkNsaWNrIiwiYmluZCIsIm9uRGJsY2xpY2siLCJldmVudCIsInRyaWdnZXIiLCJpbmRleCIsImF2YWlsYWJsZVJhdGVzIiwiaW5kZXhPZiIsInJhdGUiLCJsZW5ndGgiLCJhcnIiLCJ5dFBsYXllciIsImdldEF2YWlsYWJsZVF1YWxpdHlMZXZlbHMiLCJzcGxpY2UiLCJtYXAiLCJRVUFMSVRZX05BTUVTIiwiaXRlbSIsInBsYXlWaWRlbyIsInBhdXNlVmlkZW8iLCJhcGlMb2FkZWQiLCJ0aGVuIiwiaW5pdFlUUGxheWVyIiwiYXR0ciIsInlvdXR1YmVFbGVtZW50IiwiYmxvY2tlciIsImFwcGVuZCIsIl9pbml0UHJvbWlzZSIsIkRlZmVycmVkIiwiZ2xvYmFsT3B0aW9ucyIsInl0T3B0aW9ucyIsImF1dG9wbGF5IiwibG9vcCIsIml2X2xvYWRfcG9saWN5IiwiY29udHJvbHMiLCJtb2Rlc3RicmFuZGluZyIsInJlbCIsInNob3dpbmZvIiwiY2NfbG9hZF9wb2xpY3kiLCJkaXNhYmxla2IiLCJmcyIsInN0YXJ0IiwidGltZSIsIllUIiwicmVhZHkiLCJjdHgiLCJyZXBsYWNlV2l0aCIsInZpZGVvSWQiLCJ3aWR0aCIsInBsYXllclZhcnMiLCJldmVudHMiLCJvblJlYWR5Iiwib25ZVFBSZWFkeSIsIm9uU3RhdGVDaGFuZ2UiLCJvbllUUFN0YXRlQ2hhbmdlIiwib25QbGF5YmFja1JhdGVDaGFuZ2UiLCJvbllUUFJhdGVDaGFuZ2UiLCJvblBsYXliYWNrUXVhbGl0eUNoYW5nZSIsIm9uWVRQUGxheWJhY2tRdWFsaXR5Q2hhbmdlIiwicHJvbWlzZSIsImdldEF2YWlsYWJsZVBsYXliYWNrUmF0ZXMiLCJyYXRlTWluIiwicmF0ZU1heCIsImUiLCJyZXNvbHZlIiwiX2luaXRSYXRlIiwiX2luaXRWb2x1bWUiLCJzZXRBdmFpbGFibGVQbGF5YmFja1JhdGVzIiwiZGF0YSIsIl9wbGF5YmFja1F1YWxpdHkiLCJmaW5kIiwic3RhdGUiLCJsYXN0U3RhdGUiLCJQbGF5ZXJTdGF0ZSIsIlVOU1RBUlRFRCIsIkVOREVEIiwiUExBWUlORyIsInNldFBsYXliYWNrUXVhbGl0eSIsIl9uZXh0UGxheWJhY2tRdWFsaXR5IiwiaXNTZWVraW5nIiwib25TZWVrZWQiLCJsb2FkQ2FwdGlvbnMiLCJlbWl0VGltZXVwZGF0ZSIsIlBBVVNFRCIsIkJVRkZFUklORyIsImNsZWFySW50ZXJ2YWwiLCJzZWVraW5nSW50ZXJ2YWwiLCJ3YXNQYXVzZWRCZWZvcmVTZWVrIiwicGF1c2UiLCJzZXRJbnRlcnZhbCIsImN1cnJlbnRUaW1lIiwidGltZUJlZm9yZVNlZWsiLCJlbXB0eVRyYWNrbGlzdCIsInN1YnRpdGxlcyIsIl9sb2FkQ2FwdGlvbnNXYXRjaGVyIiwiX3RyYWNrc0Rpc2FibGUiLCJjaGVja0NhcHRpb25zRXhpc3QiLCJsb2FkTW9kdWxlIiwiZ2V0T3B0aW9ucyIsImVycm9yIiwidXJsIiwiaWQiLCJwYXJzZVVybCIsInBvc3RlciIsImdldEN1cnJlbnRUaW1lIiwidmFsdWUiLCJwYXVzZWQiLCJkdXJhdGlvbiIsInNlZWtUbyIsImdldER1cmF0aW9uIiwiTmFOIiwiZ2V0UGxheWJhY2tSYXRlIiwic2V0UGxheWJhY2tSYXRlIiwibXV0ZSIsInVuTXV0ZSIsInNldFRpbWVvdXQiLCJpc011dGVkIiwiZ2V0T3B0aW9uIiwiX3RyYWNrIiwidW5kZWZpbmVkIiwidW5sb2FkTW9kdWxlIiwic2V0T3B0aW9uIiwic3RhdHVzIiwiZ2V0UGxheWVyU3RhdGUiLCJDVUVEIiwiZ2V0UGxheWJhY2tRdWFsaXR5IiwiZ2V0Vm9sdW1lIiwic2V0Vm9sdW1lIiwicmVzdWx0IiwicmVnZXgiLCJVUkxfUkVHRVgiLCJtYXRjaCIsIlRFU1RfVklERU8iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjYW5Db250cm9sVm9sdW1lIiwidm9sdW1lIiwicHJvdG90eXBlIiwiZmVhdHVyZUNvbnRyb2xWb2x1bWUiLCJ0aW55Iiwic21hbGwiLCJtZWRpdW0iLCJsYXJnZSIsImhkNzIwIiwiaGQxMDgwIiwiaGlnaHJlcyIsImF1dG8iLCJfbG9hZGVkIiwiZ2V0U2NyaXB0IiwicmVnaXN0ZXJDb21wb25lbnQiLCJwcmVzZXQiLCJlbnRpdHkiLCJjb21tb24iLCJmdWxsc2NyZWVuIiwibWluaSIsInBsdWdpbiIsInBsdWdpbk9wdGlvbnMiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdENBLG9COzs7Ozs7O0FDQUE7Ozs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7OztBQUVBLEtBQU1BLFNBQVNDLE9BQU9DLFFBQVAsSUFBbUJELE9BQU9FLENBQVAsQ0FBU0QsUUFBM0M7QUFDQSxLQUFNRSxTQUFTSixPQUFPSyxZQUFQLENBQW9CLFFBQXBCLENBQWY7O0FBRUEsS0FBTUMsZUFBZSxTQUFmQSxZQUFlLFFBQVM7QUFDN0IsTUFBR0MsU0FBUyxJQUFU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QURXLEVBQXRCOztBQWlCQS9LLFFBQU9nTCxNQUFQLENBQWMsU0FBZCxFQUF5QixVQUFTQyxhQUFULEVBQXdCOztBQUVoRDtBQUNBbkssVUFBUTJCLFNBQVI7QUFDQSxFQUpELEUiLCJmaWxlIjoibGUtcGxheWVyLXlvdXR1YmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9qcy9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA2YWQyN2UyYzViYmQwMDliYzk2MCIsIm1vZHVsZS5leHBvcnRzID0gJDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIiRcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuY29uc3QgUGxheWVyID0gd2luZG93LmxlUGxheWVyIHx8IHdpbmRvdy4kLmxlUGxheWVyO1xuY29uc3QgRW50aXR5ID0gUGxheWVyLmdldENvbXBvbmVudCgnRW50aXR5Jyk7XG5cbmNvbnN0IHRyYWNrUHJvdmlkZSA9IHRyYWNrID0+IHtcblx0aWYodHJhY2sgPT0gbnVsbCB8fCB0cmFjay5sYW5ndWFnZUNvZGUgPT0gbnVsbCkge1xuXHRcdHJldHVybiB0cmFja1xuXHR9XG5cdHJldHVybiB7XG5cdFx0bGFuZ3VhZ2UgOiB0cmFjay5sYW5ndWFnZUNvZGUsXG5cdFx0dGl0bGUgOiB0cmFjay5sYW5ndWFnZUNvZGUsXG5cdFx0dG9vbHRpcCA6IHRyYWNrLmxhbmd1YWdlTmFtZSxcblx0XHRuYW1lIDogdHJhY2subGFuZ3VhZ2VDb2RlLFxuXHR9XG59XG5cblxuY2xhc3MgWW91dHViZSBleHRlbmRzIEVudGl0eSB7XG5cdGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucykge1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cdFx0dGhpcy5fcGF1c2VkID0gdHJ1ZTtcblxuXHRcdHRoaXMuc3JjID0gdGhpcy5wbGF5ZXIub3B0aW9ucy5zcmM7XG5cblx0XHR0aGlzLnBsYXllci5hZGRDbGFzcygnbGVwbGF5ZXItLXlvdXR1YmUnKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ2NsaWNrJywgdGhpcy5vbkNsaWNrLmJpbmQodGhpcykpO1xuXHRcdHRoaXMuZWxlbWVudC5vbignZGJsY2xpY2snLCB0aGlzLm9uRGJsY2xpY2suYmluZCh0aGlzKSk7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRzZXQgc3JjKHNyYykge1xuXHRcdGlmKHNyYyA9PSBudWxsKSByZXR1cm47XG5cdFx0aWYodGhpcy5zcmMgJiYgdGhpcy5zcmMudXJsID09PSBzcmMudXJsKSByZXR1cm47XG5cblx0XHRjb25zdCB1cmwgPSBzcmMudXJsIHx8IHNyYy5pZDtcblxuXHRcdHRoaXMudmlkZW9JZCA9IFlvdXR1YmUucGFyc2VVcmwodXJsKTtcblxuXHRcdGlmKHRoaXMucGxheWVyLm9wdGlvbnMucG9zdGVyKSB7XG5cdFx0XHR0aGlzLnBvc3RlciA9IHRoaXMucGxheWVyLm9wdGlvbnMucG9zdGVyXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucG9zdGVyID0gJ2h0dHBzOi8vaW1nLnlvdXR1YmUuY29tL3ZpLycgKyB0aGlzLnZpZGVvSWQgKyAnLzAuanBnJztcblx0XHR9XG5cdH1cblxuXHRvbkNsaWNrKGV2ZW50KSB7XG5cdFx0dGhpcy50cmlnZ2VyKCdjbGljaycpO1xuXHR9XG5cblx0b25EYmxjbGljaygpIHtcblx0XHR0aGlzLnRyaWdnZXIoJ2RibGNsaWNrJyk7XG5cdH1cblxuXHRnZXQgY3VycmVudFRpbWUoKSB7XG5cdFx0cmV0dXJuIHRoaXMueXRQbGF5ZXI/IHRoaXMueXRQbGF5ZXIuZ2V0Q3VycmVudFRpbWUoKSA6IDA7XG5cdH1cblxuXHRzZXQgY3VycmVudFRpbWUodmFsdWUpIHtcblx0XHRpZih0aGlzLmxhc3RTdGF0ZSA9PT0gWVQuUGxheWVyU3RhdGUuUEFVU0VEKSB7XG5cdFx0XHR0aGlzLnRpbWVCZWZvcmVTZWVrID0gdGhpcy5jdXJyZW50VGltZTtcblx0XHR9XG5cblx0XHRpZiAoIXRoaXMuaXNTZWVraW5nKSB7XG5cdFx0XHR0aGlzLndhc1BhdXNlZEJlZm9yZVNlZWsgPSB0aGlzLnBhdXNlZDtcblx0XHR9XG5cblx0XHRsZXQgdGltZTtcblx0XHRpZiAodmFsdWUgPj0gdGhpcy5kdXJhdGlvbikge1xuXHRcdFx0dGltZSA9IHRoaXMuZHVyYXRpb25cblx0XHR9IGVsc2UgaWYgKHZhbHVlIDwgMCkge1xuXHRcdFx0dGltZSA9IDBcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGltZSA9IHZhbHVlO1xuXHRcdH1cblxuXHRcdHRoaXMuaXNTZWVraW5nID0gdHJ1ZTtcblx0XHR0aGlzLnl0UGxheWVyLnNlZWtUbyh0aW1lLCB0cnVlKTtcblx0XHR0aGlzLnBsYXllci50cmlnZ2VyKCd0aW1ldXBkYXRlbG9hZCcsIHsgY3VycmVudFRpbWUgOiB0aW1lIH0pO1xuXG5cdFx0dGhpcy50cmlnZ2VyKCdzZWVraW5nJyk7XG5cblx0XHR0aGlzLmVtaXRUaW1ldXBkYXRlKCk7XG5cdH1cblxuXHRnZXQgZHVyYXRpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMueXRQbGF5ZXIgJiYgdGhpcy55dFBsYXllci5nZXREdXJhdGlvbiA/IHRoaXMueXRQbGF5ZXIuZ2V0RHVyYXRpb24oKSA6IE5hTjtcblx0fVxuXG5cdGdldCBwYXVzZWQoKSB7XG5cdFx0cmV0dXJuICh0aGlzLnl0UGxheWVyKSA/XG5cdFx0XHQodGhpcy5sYXN0U3RhdGUgIT09IFlULlBsYXllclN0YXRlLlBMQVlJTkcgJiYgdGhpcy5sYXN0U3RhdGUgIT09IFlULlBsYXllclN0YXRlLkJVRkZFUklORylcblx0XHRcdDogdHJ1ZTtcblxuXHR9XG5cblxuXHRnZXQgcmF0ZSgpIHtcblx0XHRyZXR1cm4gdGhpcy55dFBsYXllci5nZXRQbGF5YmFja1JhdGUoKTtcblx0fVxuXG5cdHNldCByYXRlKHZhbHVlKSB7XG5cdFx0c3VwZXIucmF0ZSA9IHZhbHVlO1xuXHRcdHRoaXMueXRQbGF5ZXIuc2V0UGxheWJhY2tSYXRlKHZhbHVlKTtcblx0XHR0aGlzLnRyaWdnZXIoJ3JhdGVjaGFuZ2UnKTtcblx0fVxuXG5cdHNldCBtdXRlZCh2YWx1ZSkge1xuXHRcdGlmKHZhbHVlKSB7XG5cdFx0XHR0aGlzLnl0UGxheWVyLm11dGUoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy55dFBsYXllci51bk11dGUoKTtcblx0XHR9XG5cblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdHRoaXMudHJpZ2dlcigndm9sdW1lY2hhbmdlJyk7XG5cdFx0fSwgNTApO1xuXHR9XG5cblx0Z2V0IG11dGVkKCkge1xuXHRcdHJldHVybiB0aGlzLnl0UGxheWVyLmlzTXV0ZWQoKTtcblx0fVxuXG5cdGdldCBzdWJ0aXRsZXMoKSB7XG5cdFx0cmV0dXJuIHRoaXMuY2hlY2tDYXB0aW9uc0V4aXN0KClcblx0XHRcdD8gKHRoaXMueXRQbGF5ZXIuZ2V0T3B0aW9uKCdjYXB0aW9ucycsICd0cmFja2xpc3QnKSB8fCBbXSkubWFwKHRyYWNrUHJvdmlkZSlcblx0XHRcdDogW11cblx0fVxuXG5cdGdldCB0cmFjaygpIHtcblx0XHRpZih0aGlzLl90cmFjayA9PT0gdW5kZWZpbmVkICYmIHRoaXMuY2hlY2tDYXB0aW9uc0V4aXN0KCkpIHtcblx0XHRcdHJldHVybiB0cmFja1Byb3ZpZGUodGhpcy55dFBsYXllci5nZXRPcHRpb24oJ2NhcHRpb25zJywgJ3RyYWNrJykpXG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLl90cmFjaztcblx0XHR9XG5cdH1cblxuXHRzZXQgdHJhY2sodmFsdWUpIHtcblx0XHR0aGlzLl90cmFjayA9IHZhbHVlO1xuXHRcdGlmKHZhbHVlID09PSBudWxsKSB7XG5cdFx0XHR0aGlzLl90cmFja3NEaXNhYmxlID0gdHJ1ZTtcblx0XHRcdC8qIERpc2FibGUgY2FwdGlvbnMgKi9cblx0XHRcdHRoaXMueXRQbGF5ZXIudW5sb2FkTW9kdWxlKCdjYXB0aW9ucycpO1xuXG5cdFx0XHR0aGlzLnRyaWdnZXIoJ3RyYWNrc2NoYW5nZScpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0aGlzLnl0UGxheWVyXG5cdFx0XHQuc2V0T3B0aW9uKCdjYXB0aW9ucycsICd0cmFjaycsIHsgbGFuZ3VhZ2VDb2RlIDogdmFsdWUubmFtZSB9KVxuXHRcdFx0LnNldE9wdGlvbignY2FwdGlvbnMnLCAncmVsb2FkJywgdHJ1ZSk7XG5cblx0XHRpZih0aGlzLl90cmFja3NEaXNhYmxlKSB7XG5cdFx0XHQvKiBFbmFibGUgY2FwdGlvbnMgKi9cblx0XHRcdHRoaXMueXRQbGF5ZXIubG9hZE1vZHVsZSgnY2FwdGlvbnMnKTtcblx0XHR9XG5cdFx0dGhpcy50cmlnZ2VyKCd0cmFja3NjaGFuZ2UnKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGluY3JlYXNlUmF0ZSgpIHtcblx0XHRjb25zdCBpbmRleCA9IHRoaXMuYXZhaWxhYmxlUmF0ZXMuaW5kZXhPZih0aGlzLnJhdGUpO1xuXHRcdGlmKGluZGV4ICsgMSA+PSB0aGlzLmF2YWlsYWJsZVJhdGVzLmxlbmd0aCkgcmV0dXJuO1xuXHRcdHJldHVybiB0aGlzLnJhdGUgPSB0aGlzLmF2YWlsYWJsZVJhdGVzW2luZGV4ICsgMV07XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRkZWNyZWFzZVJhdGUoKSB7XG5cdFx0Y29uc3QgaW5kZXggPSB0aGlzLmF2YWlsYWJsZVJhdGVzLmluZGV4T2YodGhpcy5yYXRlKTtcblx0XHRpZihpbmRleCAtIDEgPCAwKSByZXR1cm47XG5cdFx0cmV0dXJuIHRoaXMucmF0ZSA9IHRoaXMuYXZhaWxhYmxlUmF0ZXNbaW5kZXggLSAxXTtcblx0fVxuXG5cdGdldEF2YWlsYWJsZVF1YWxpdHlMZXZlbHMoKSB7XG5cdFx0Y29uc3QgYXJyID0gdGhpcy55dFBsYXllci5nZXRBdmFpbGFibGVRdWFsaXR5TGV2ZWxzKCk7XG5cdFx0Y29uc3QgaW5kZXggPSBhcnIuaW5kZXhPZignYXV0bycpO1xuXG5cdFx0aWYoaW5kZXggPiAtMSkge1xuXHRcdFx0YXJyLnNwbGljZShpbmRleCwgMSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGFyci5tYXAoaXRlbSA9PiAoe1xuXHRcdFx0dGl0bGUgOiBZb3V0dWJlLlFVQUxJVFlfTkFNRVNbaXRlbV0gfHwgaXRlbSxcblx0XHRcdG5hbWUgOiBpdGVtXG5cdFx0fSkpO1xuXHR9XG5cblxuXHRzZXQgcGxheWJhY2tRdWFsaXR5KG5hbWUpIHtcblx0XHRzdXBlci5wbGF5YmFja1F1YWxpdHkgPSBuYW1lO1xuXHRcdGNvbnN0IHRpbWUgPSB0aGlzLmN1cnJlbnRUaW1lO1xuXHRcdGNvbnN0IHN0YXR1cyA9IHRoaXMueXRQbGF5ZXIuZ2V0UGxheWVyU3RhdGUoKTtcblxuXHRcdGlmKHN0YXR1cyAhPT0gWVQuUGxheWVyU3RhdGUuVU5TVEFSVEVEICYmIHN0YXR1cyAhPT0gWVQuUGxheWVyU3RhdGUuQ1VFRCkge1xuXHRcdFx0dGhpcy55dFBsYXllci5wYXVzZVZpZGVvKCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5fbmV4dFBsYXliYWNrUXVhbGl0eSA9IG5hbWU7XG5cdFx0dGhpcy55dFBsYXllci5zZXRQbGF5YmFja1F1YWxpdHkobmFtZSk7XG5cdFx0dGhpcy55dFBsYXllci5zZWVrVG8odGltZSk7XG5cblx0XHRpZihzdGF0dXMgIT09IFlULlBsYXllclN0YXRlLlBBVVNFRCkge1xuXHRcdFx0dGhpcy55dFBsYXllci5wbGF5VmlkZW8oKTtcblx0XHR9XG5cblx0fVxuXG5cdGdldCBwbGF5YmFja1F1YWxpdHkoKSB7XG5cdFx0aWYgKHRoaXMuX3BsYXliYWNrUXVhbGl0eSA9PSBudWxsKSB7XG5cdFx0XHR0aGlzLl9wbGF5YmFja1F1YWxpdHkgPSB0aGlzLmdldEF2YWlsYWJsZVF1YWxpdHlMZXZlbHMoKVxuXHRcdFx0XHQuZmluZChpdGVtID0+IGl0ZW0ubmFtZSA9PT0gdGhpcy55dFBsYXllci5nZXRQbGF5YmFja1F1YWxpdHkoKSlcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuX3BsYXliYWNrUXVhbGl0eTtcblx0fVxuXG5cdGdldCB2b2x1bWUoKSB7XG5cdFx0cmV0dXJuIHRoaXMueXRQbGF5ZXIgPyB0aGlzLnl0UGxheWVyLmdldFZvbHVtZSgpIC8gMTAwLjAgOiAxO1xuXHR9XG5cblx0c2V0IHZvbHVtZSh2YWx1ZSkge1xuXHRcdHN1cGVyLnZvbHVtZSA9IHZhbHVlO1xuXHRcdHRoaXMueXRQbGF5ZXIuc2V0Vm9sdW1lKHZhbHVlICogMTAwKTtcblxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0dGhpcy50cmlnZ2VyKCd2b2x1bWVjaGFuZ2UnKTtcblx0XHR9LCA1MClcblxuXHR9XG5cblx0c3VwcG9ydHNGdWxsU2NyZWVuKCkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0cGxheSgpIHtcblx0XHR0aGlzLnl0UGxheWVyLnBsYXlWaWRlbygpO1xuXHRcdHRoaXMudHJpZ2dlcigncGxheScpO1xuXHR9XG5cblx0cGF1c2UoKSB7XG5cdFx0dGhpcy55dFBsYXllci5wYXVzZVZpZGVvKCk7XG5cdFx0dGhpcy50cmlnZ2VyKCdwYXVzZScpO1xuXHR9XG5cblxuXHRpbml0KCkge1xuXHRcdHN1cGVyLmluaXQoKTtcblx0XHRyZXR1cm4gWW91dHViZS5hcGlMb2FkZWQoKVxuXHRcdFx0LnRoZW4oKCkgPT4gdGhpcy5pbml0WVRQbGF5ZXIoKSlcblx0fVxuXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0dGhpcy5lbGVtZW50ID0gJCgnPGRpdiAvPicpXG5cdFx0XHQuYWRkQ2xhc3MoJ2xlcGxheWVyX195b3V0dWJlLXdyYXBwZXInKVxuXHRcdFx0LmF0dHIoJ3RhYmluZGV4JywgJzAnKTtcblx0XHR0aGlzLnlvdXR1YmVFbGVtZW50ID0gJCgnPGRpdiAvPicpXG5cdFx0XHQuYWRkQ2xhc3MoJ2xlcGxheWVyX195b3V0dWJlJyk7XG5cdFx0dGhpcy5ibG9ja2VyID0gJCgnPGRpdiAvPicpXG5cdFx0XHQuYWRkQ2xhc3MoJ2xlcGxheWVyX195b3V0dWJlLWJsb2NrZXInKTtcblxuXG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudFxuXHRcdFx0LmFwcGVuZCh0aGlzLmJsb2NrZXIpXG5cdFx0XHQuYXBwZW5kKHRoaXMueW91dHViZUVsZW1lbnQpO1xuXHR9XG5cblx0aW5pdFlUUGxheWVyKCkge1xuXHRcdHRoaXMuX2luaXRQcm9taXNlID0gJC5EZWZlcnJlZCgpO1xuXHRcdGNvbnN0IGdsb2JhbE9wdGlvbnMgPSB0aGlzLnBsYXllci5vcHRpb25zO1xuXHRcdGxldCB5dE9wdGlvbnMgPSB7XG5cdFx0XHRhdXRvcGxheSA6IGdsb2JhbE9wdGlvbnMuYXV0b3BsYXkgPyAxIDogMCxcblx0XHRcdGxvb3AgOiBnbG9iYWxPcHRpb25zLmxvb3AgPyAxIDogMCxcblx0XHRcdGl2X2xvYWRfcG9saWN5IDogMyxcblx0XHRcdGNvbnRyb2xzIDogMCxcblx0XHRcdG1vZGVzdGJyYW5kaW5nIDogMSxcblx0XHRcdHJlbCA6IDAsXG5cdFx0XHRzaG93aW5mbyA6IDAsXG5cdFx0XHRjY19sb2FkX3BvbGljeSA6IDAsXG5cdFx0XHRkaXNhYmxla2IgOiAwLFxuXHRcdFx0ZnMgOiAwLFxuXHRcdFx0c3RhcnQgOiBnbG9iYWxPcHRpb25zLnRpbWVcblx0XHR9O1xuXG5cdFx0WVQucmVhZHkoKCkgPT4ge1xuXHRcdFx0dGhpcy5vcHRpb25zLmN0eC5yZXBsYWNlV2l0aCh0aGlzLmVsZW1lbnQpO1xuXG5cdFx0XHR0aGlzLnl0UGxheWVyID0gbmV3IFlULlBsYXllcih0aGlzLnlvdXR1YmVFbGVtZW50WzBdLCB7XG5cdFx0XHRcdHZpZGVvSWQgOiB0aGlzLnZpZGVvSWQsXG5cdFx0XHRcdHdpZHRoIDogZ2xvYmFsT3B0aW9ucy53aWR0aCB8fCAnMTAwJScsXG5cdFx0XHRcdHBsYXllclZhcnMgOiB5dE9wdGlvbnMsXG5cdFx0XHRcdGV2ZW50cyA6IHtcblx0XHRcdFx0XHRvblJlYWR5IDogdGhpcy5vbllUUFJlYWR5LmJpbmQodGhpcyksXG5cdFx0XHRcdFx0b25TdGF0ZUNoYW5nZSA6IHRoaXMub25ZVFBTdGF0ZUNoYW5nZS5iaW5kKHRoaXMpLFxuXHRcdFx0XHRcdG9uUGxheWJhY2tSYXRlQ2hhbmdlIDogdGhpcy5vbllUUFJhdGVDaGFuZ2UuYmluZCh0aGlzKSxcblx0XHRcdFx0XHRvblBsYXliYWNrUXVhbGl0eUNoYW5nZSA6IHRoaXMub25ZVFBQbGF5YmFja1F1YWxpdHlDaGFuZ2UuYmluZCh0aGlzKVxuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXG5cdFx0fSlcblx0XHRyZXR1cm4gdGhpcy5faW5pdFByb21pc2UucHJvbWlzZSgpO1xuXHR9XG5cblxuXHRzZXRBdmFpbGFibGVQbGF5YmFja1JhdGVzKCkge1xuXHRcdHRoaXMuYXZhaWxhYmxlUmF0ZXMgPSB0aGlzLnl0UGxheWVyLmdldEF2YWlsYWJsZVBsYXliYWNrUmF0ZXMoKTtcblx0XHR0aGlzLnJhdGVNaW4gPSB0aGlzLmF2YWlsYWJsZVJhdGVzWzBdO1xuXHRcdHRoaXMucmF0ZU1heCA9IHRoaXMuYXZhaWxhYmxlUmF0ZXNbdGhpcy5hdmFpbGFibGVSYXRlcy5sZW5ndGggLSAxXTtcblx0fVxuXG5cdG9uWVRQUmVhZHkoZSkge1xuXHRcdHRoaXMuX2luaXRQcm9taXNlLnJlc29sdmUoKTtcblx0XHR0aGlzLl9pbml0UmF0ZSgpO1xuXHRcdHRoaXMuX2luaXRWb2x1bWUoKTtcblx0XHR0aGlzLnNldEF2YWlsYWJsZVBsYXliYWNrUmF0ZXMoKTtcblx0fVxuXG5cdG9uWVRQUmF0ZUNoYW5nZShlKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCdyYXRlY2hhbmdlJyk7XG5cdH1cblxuXHRvbllUUFBsYXliYWNrUXVhbGl0eUNoYW5nZShlKSB7XG5cdFx0Y29uc3QgZGF0YSA9IGUuZGF0YTtcblx0XHR0aGlzLl9wbGF5YmFja1F1YWxpdHkgPSB0aGlzLmdldEF2YWlsYWJsZVF1YWxpdHlMZXZlbHMoKS5maW5kKGl0ZW0gPT4gaXRlbS5uYW1lID09PSBkYXRhKTtcblx0XHR0aGlzLnRyaWdnZXIoJ3F1YWxpdHljaGFuZ2UnLCB0aGlzLl9wbGF5YmFja1F1YWxpdHkpO1xuXHR9XG5cblx0b25ZVFBTdGF0ZUNoYW5nZShlKSB7XG5cdFx0Y29uc3Qgc3RhdGUgPSBlLmRhdGE7XG5cdFx0aWYoc3RhdGUgPT09IHRoaXMubGFzdFN0YXRlKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5sYXN0U3RhdGUgPSBzdGF0ZTtcblx0XHRzd2l0Y2goc3RhdGUpIHtcblx0XHRjYXNlIFlULlBsYXllclN0YXRlLlVOU1RBUlRFRDpcblx0XHRcdHRoaXMudHJpZ2dlcignbG9hZHN0YXJ0Jyk7XG5cdFx0XHR0aGlzLnRyaWdnZXIoJ2xvYWRlZG1ldGFkYXRhJyk7XG5cdFx0XHR0aGlzLnRyaWdnZXIoJ2R1cmF0aW9uY2hhbmdlJyk7XG5cdFx0XHR0aGlzLnRyaWdnZXIoJ3JhdGVjaGFuZ2UnKTtcblx0XHRcdHRoaXMudHJpZ2dlcigndm9sdW1lY2hhbmdlJyk7XG5cdFx0XHR0aGlzLnRyaWdnZXIoJ3RyYWNrc2NoYW5nZScpO1xuXHRcdFx0aWYodGhpcy5wbGF5ZXIub3B0aW9ucy5hdXRvcGxheSkge1xuXHRcdFx0XHR0aGlzLnRyaWdnZXIoJ3BsYXknKTtcblx0XHRcdH1cblx0XHRcdGJyZWFrO1xuXG5cdFx0Y2FzZSBZVC5QbGF5ZXJTdGF0ZS5FTkRFRDpcblx0XHRcdHRoaXMudHJpZ2dlcigncGF1c2UnKTtcblx0XHRcdHRoaXMudHJpZ2dlcignZW5kZWQnKTtcblx0XHRcdGJyZWFrO1xuXG5cdFx0Y2FzZSBZVC5QbGF5ZXJTdGF0ZS5QTEFZSU5HOlxuXHRcdFx0dGhpcy50cmlnZ2VyKCd0aW1ldXBkYXRlJyk7XG5cdFx0XHR0aGlzLnRyaWdnZXIoJ2R1cmF0aW9uY2hhbmdlJyk7XG5cdFx0XHR0aGlzLnRyaWdnZXIoJ3BsYXlpbmcnKTtcblxuXHRcdFx0dGhpcy55dFBsYXllci5zZXRQbGF5YmFja1F1YWxpdHkodGhpcy5fbmV4dFBsYXliYWNrUXVhbGl0eSk7XG5cblx0XHRcdGlmKHRoaXMuaXNTZWVraW5nKSB7XG5cdFx0XHRcdHRoaXMub25TZWVrZWQoKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5sb2FkQ2FwdGlvbnMoKVxuXHRcdFx0dGhpcy5lbWl0VGltZXVwZGF0ZSgpO1xuXHRcdFx0YnJlYWs7XG5cblx0XHRjYXNlIFlULlBsYXllclN0YXRlLlBBVVNFRDpcblx0XHRcdHRoaXMudHJpZ2dlcignY2FucGxheScpO1xuXG5cdFx0XHRpZih0aGlzLmlzU2Vla2luZykge1xuXHRcdFx0XHR0aGlzLm9uU2Vla2VkKCk7XG5cdFx0XHR9XG5cdFx0XHRicmVhaztcblxuXHRcdGNhc2UgWVQuUGxheWVyU3RhdGUuQlVGRkVSSU5HOlxuXHRcdFx0dGhpcy5wbGF5ZXIudHJpZ2dlcigndGltZXVwZGF0ZScpO1xuXHRcdFx0dGhpcy5wbGF5ZXIudHJpZ2dlcignd2FpdGluZycpO1xuXG5cdFx0XHR0aGlzLnl0UGxheWVyLnNldFBsYXliYWNrUXVhbGl0eSh0aGlzLl9uZXh0UGxheWJhY2tRdWFsaXR5KTtcblxuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXG5cdH1cblxuXHRvblNlZWtlZCgpIHtcblx0XHRjbGVhckludGVydmFsKHRoaXMuc2Vla2luZ0ludGVydmFsKTtcblx0XHR0aGlzLmlzU2Vla2luZyA9IGZhbHNlO1xuXG5cdFx0aWYgKHRoaXMud2FzUGF1c2VkQmVmb3JlU2Vlaykge1xuXHRcdFx0dGhpcy5wYXVzZSgpO1xuXHRcdH1cblxuXHRcdHRoaXMudHJpZ2dlcignc2Vla2VkJyk7XG5cdH1cblxuXHRlbWl0VGltZXVwZGF0ZSgpIHtcblx0XHRjbGVhckludGVydmFsKHRoaXMuc2Vla2luZ0ludGVydmFsKTtcblxuXHRcdHRoaXMuc2Vla2luZ0ludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuXHRcdFx0aWYodGhpcy5sYXN0U3RhdGUgPT09IFlULlBsYXllclN0YXRlLlBBVVNFRCkge1xuXHRcdFx0XHRjbGVhckludGVydmFsKHRoaXMuc2Vla2luZ0ludGVydmFsKTtcblx0XHRcdH0gZWxzZSBpZih0aGlzLmN1cnJlbnRUaW1lICE9PSB0aGlzLnRpbWVCZWZvcmVTZWVrKSB7XG5cdFx0XHRcdHRoaXMudHJpZ2dlcigndGltZXVwZGF0ZScpO1xuXHRcdFx0fVxuXHRcdH0sIDI1MClcblx0fVxuXG5cdGxvYWRDYXB0aW9ucygpIHtcblx0XHRjb25zdCBlbXB0eVRyYWNrbGlzdCA9ICgpID0+ICh0aGlzLnN1YnRpdGxlcyA9PSBudWxsIHx8IHRoaXMuc3VidGl0bGVzLmxlbmd0aCA9PT0gMCk7XG5cblx0XHRjbGVhckludGVydmFsKHRoaXMuX2xvYWRDYXB0aW9uc1dhdGNoZXIpO1xuXHRcdGlmKFxuXHRcdFx0IXRoaXMuX3RyYWNrc0Rpc2FibGUgJiZcblx0XHRcdHRoaXMuY2hlY2tDYXB0aW9uc0V4aXN0KCkgJiZcblx0XHRcdGVtcHR5VHJhY2tsaXN0KClcblx0XHQpIHtcblx0XHRcdHRoaXMueXRQbGF5ZXIubG9hZE1vZHVsZSgnY2FwdGlvbnMnKTtcblxuXHRcdFx0dGhpcy5fbG9hZENhcHRpb25zV2F0Y2hlciA9IHNldEludGVydmFsKCgpID0+IHtcblx0XHRcdFx0aWYoIWVtcHR5VHJhY2tsaXN0KCkgJiYgdGhpcy5jaGVja0NhcHRpb25zRXhpc3QoKSkge1xuXHRcdFx0XHRcdHRoaXMudHJpZ2dlcigndHJhY2tzY2hhbmdlJyk7XG5cdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLl9sb2FkQ2FwdGlvbnNXYXRjaGVyKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgMjUwKVxuXHRcdH1cblx0fVxuXG5cdGNoZWNrQ2FwdGlvbnNFeGlzdCgpIHtcblx0XHR0cnkge1xuXHRcdFx0cmV0dXJuIHRoaXMueXRQbGF5ZXIuZ2V0T3B0aW9ucygnY2FwdGlvbnMnKSAhPSBudWxsO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblx0c3RhdGljIHBhcnNlVXJsKHVybCkge1xuXHRcdGxldCByZXN1bHQgPSBudWxsO1xuXHRcdGNvbnN0IHJlZ2V4ID0gWW91dHViZS5VUkxfUkVHRVg7XG5cdFx0Y29uc3QgbWF0Y2ggPSB1cmwubWF0Y2gocmVnZXgpO1xuXHRcdGlmKHVybC5sZW5ndGggPT09IDExKSB7XG5cdFx0XHRyZXN1bHQgPSB1cmw7XG5cdFx0fSBlbHNlIGlmKG1hdGNoICYmIG1hdGNoWzJdLmxlbmd0aCA9PT0gMTEpIHtcblx0XHRcdHJlc3VsdCA9IG1hdGNoWzJdO1xuXHRcdH1cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG59XG5cbllvdXR1YmUuVEVTVF9WSURFTyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJyk7XG4vKipcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKiAgICAgICAgIC0gVHJ1ZSBpZiB2b2x1bWUgY2FuIGJlIGNvbnRyb2xsZWRcbiAqICAgICAgICAgLSBGYWxzZSBvdGhlcndpc2VcbiAqL1xuWW91dHViZS5jYW5Db250cm9sVm9sdW1lID0gZnVuY3Rpb24oKSB7XG5cdC8vIElFIHdpbGwgZXJyb3IgaWYgV2luZG93cyBNZWRpYSBQbGF5ZXIgbm90IGluc3RhbGxlZCAjMzMxNVxuXHR0cnkge1xuXHRcdGNvbnN0IHZvbHVtZSA9IFlvdXR1YmUuVEVTVF9WSURFTy52b2x1bWU7XG5cblx0XHRZb3V0dWJlLlRFU1RfVklERU8udm9sdW1lID0gKHZvbHVtZSAvIDIpICsgMC4xO1xuXHRcdHJldHVybiB2b2x1bWUgIT09IFlvdXR1YmUuVEVTVF9WSURFTy52b2x1bWU7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn07XG5cbllvdXR1YmUucHJvdG90eXBlLmZlYXR1cmVDb250cm9sVm9sdW1lID0gWW91dHViZS5jYW5Db250cm9sVm9sdW1lKCk7XG5cbllvdXR1YmUuVVJMX1JFR0VYID0gL14uKih5b3V0dS5iZVxcL3x2XFwvfHVcXC9cXHdcXC98ZW1iZWRcXC98d2F0Y2hcXD92PXxcXCZ2PSkoW14jXFwmXFw/XSopLiovO1xuXG5Zb3V0dWJlLlFVQUxJVFlfTkFNRVMgPSB7XG5cdHRpbnkgOiAnMTQwcCcsXG5cdHNtYWxsIDogJzI0MHAnLFxuXHRtZWRpdW0gOiAnMzYwcCcsXG5cdGxhcmdlIDogJzQ4MHAnLFxuXHRoZDcyMCA6ICc3MjBwJyxcblx0aGQxMDgwIDogJzEwODBwJyxcblx0aGlnaHJlcyA6ICdIRCcsXG5cdGF1dG8gOiAn0JDQstGC0L4nXG59XG5cbllvdXR1YmUuYXBpTG9hZGVkID0gZnVuY3Rpb24oKSB7XG5cdGlmKHRoaXMuX2xvYWRlZCkgcmV0dXJuICQuRGVmZXJyZWQoKS5yZXNvbHZlKCk7XG5cblx0cmV0dXJuICQuZ2V0U2NyaXB0KCdodHRwczovL3d3dy55b3V0dWJlLmNvbS9pZnJhbWVfYXBpJylcblx0XHQudGhlbigoKSA9PiB0aGlzLl9sb2FkZWQgPSB0cnVlKVxufVxuXG5QbGF5ZXIucmVnaXN0ZXJDb21wb25lbnQoJ1lvdXR1YmUnLCBZb3V0dWJlKTtcblxuUGxheWVyLnByZXNldCgneW91dHViZScsIHtcblx0b3B0aW9ucyA6IHtcblx0XHRlbnRpdHkgOiAnWW91dHViZScsXG5cdFx0Y29udHJvbHMgOiB7XG5cdFx0XHRjb21tb24gOiBbXG5cdFx0XHRcdFsncGxheScsICd2b2x1bWUnLCAndGltZWxpbmUnLCAncmF0ZScsICdiYWNrd2FyZCcsICdzb3VyY2UnLCAnc3VidGl0bGUnLCAnZGl2aWRlcicsICdzZWN0aW9uJywgJ2Z1bGxzY3JlZW4nXSxcblx0XHRcdFx0W11cblx0XHRcdF0sXG5cdFx0XHRmdWxsc2NyZWVuIDogW1xuXHRcdFx0XHRbJ3BsYXknLCAndm9sdW1lJywgJ3RpbWVsaW5lJywgJ3JhdGUnLCAnYmFja3dhcmQnLCAnc291cmNlJywgJ3N1YnRpdGxlJywgJ2RpdmlkZXInLCAnc2VjdGlvbicsICdmdWxsc2NyZWVuJ10sXG5cdFx0XHRdXG5cdFx0fVxuXHR9LFxufSk7XG5QbGF5ZXIucHJlc2V0KCcyMDM1Jywge1xuXHRvcHRpb25zIDoge1xuXHRcdGVudGl0eSA6ICdZb3V0dWJlJyxcblx0XHRjb250cm9scyA6IHtcblx0XHRcdGNvbW1vbiA6IFtcblx0XHRcdFx0WydwbGF5JywgJ3ZvbHVtZScsICd0aW1lbGluZScsICdyYXRlJywgJ2JhY2t3YXJkJywgJ3NlY3Rpb24nLCAnZnVsbHNjcmVlbiddLFxuXHRcdFx0XSxcblx0XHRcdGZ1bGxzY3JlZW4gOiBbXG5cdFx0XHRcdFsncGxheScsICd2b2x1bWUnLCAndGltZWxpbmUnLCAncmF0ZScsICdiYWNrd2FyZCcsICAnc2VjdGlvbicsICdmdWxsc2NyZWVuJ10sXG5cdFx0XHRdLFxuXHRcdFx0bWluaSA6IFtcblx0XHRcdFx0WydwbGF5JywgJ3RpbWVsaW5lJywgJ3ZvbHVtZScsICdmdWxsc2NyZWVuJ11cblx0XHRcdF0sXG5cdFx0fVxuXHR9LFxufSk7XG5cblBsYXllci5wbHVnaW4oJ3lvdXR1YmUnLCBmdW5jdGlvbihwbHVnaW5PcHRpb25zKSB7XG5cblx0LyogZ2xvYmFsIFlUICovXG5cdFlvdXR1YmUuYXBpTG9hZGVkKClcbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvcGx1Z2lucy9sZS1wbGF5ZXIteW91dHViZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=