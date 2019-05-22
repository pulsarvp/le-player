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
	
	Player.plugin('youtube', function (pluginOptions) {
	
		/* global YT */
		Youtube.apiLoaded();
	});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOWFlMDRmODRhMmU4NjdmYjI5NDQ/MDVkYioqKiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCIkXCI/NTdhYSoqKiIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvcGx1Z2lucy9sZS1wbGF5ZXIteW91dHViZS5qcz8xMmNjIl0sIm5hbWVzIjpbIlBsYXllciIsIndpbmRvdyIsImxlUGxheWVyIiwiJCIsIkVudGl0eSIsImdldENvbXBvbmVudCIsInRyYWNrUHJvdmlkZSIsInRyYWNrIiwibGFuZ3VhZ2VDb2RlIiwibGFuZ3VhZ2UiLCJ0aXRsZSIsInRvb2x0aXAiLCJsYW5ndWFnZU5hbWUiLCJuYW1lIiwiWW91dHViZSIsInBsYXllciIsIm9wdGlvbnMiLCJfcGF1c2VkIiwic3JjIiwiYWRkQ2xhc3MiLCJlbGVtZW50Iiwib24iLCJvbkNsaWNrIiwiYmluZCIsIm9uRGJsY2xpY2siLCJldmVudCIsInRyaWdnZXIiLCJpbmRleCIsImF2YWlsYWJsZVJhdGVzIiwiaW5kZXhPZiIsInJhdGUiLCJsZW5ndGgiLCJhcnIiLCJ5dFBsYXllciIsImdldEF2YWlsYWJsZVF1YWxpdHlMZXZlbHMiLCJzcGxpY2UiLCJtYXAiLCJRVUFMSVRZX05BTUVTIiwiaXRlbSIsInBsYXlWaWRlbyIsInBhdXNlVmlkZW8iLCJhcGlMb2FkZWQiLCJ0aGVuIiwiaW5pdFlUUGxheWVyIiwiYXR0ciIsInlvdXR1YmVFbGVtZW50IiwiYmxvY2tlciIsImFwcGVuZCIsIl9pbml0UHJvbWlzZSIsIkRlZmVycmVkIiwiZ2xvYmFsT3B0aW9ucyIsInl0T3B0aW9ucyIsImF1dG9wbGF5IiwibG9vcCIsIml2X2xvYWRfcG9saWN5IiwiY29udHJvbHMiLCJtb2Rlc3RicmFuZGluZyIsInJlbCIsInNob3dpbmZvIiwiY2NfbG9hZF9wb2xpY3kiLCJkaXNhYmxla2IiLCJmcyIsInN0YXJ0IiwidGltZSIsIllUIiwicmVhZHkiLCJjdHgiLCJyZXBsYWNlV2l0aCIsInZpZGVvSWQiLCJ3aWR0aCIsInBsYXllclZhcnMiLCJldmVudHMiLCJvblJlYWR5Iiwib25ZVFBSZWFkeSIsIm9uU3RhdGVDaGFuZ2UiLCJvbllUUFN0YXRlQ2hhbmdlIiwib25QbGF5YmFja1JhdGVDaGFuZ2UiLCJvbllUUFJhdGVDaGFuZ2UiLCJvblBsYXliYWNrUXVhbGl0eUNoYW5nZSIsIm9uWVRQUGxheWJhY2tRdWFsaXR5Q2hhbmdlIiwicHJvbWlzZSIsImdldEF2YWlsYWJsZVBsYXliYWNrUmF0ZXMiLCJyYXRlTWluIiwicmF0ZU1heCIsImUiLCJyZXNvbHZlIiwiX2luaXRSYXRlIiwiX2luaXRWb2x1bWUiLCJzZXRBdmFpbGFibGVQbGF5YmFja1JhdGVzIiwiZGF0YSIsIl9wbGF5YmFja1F1YWxpdHkiLCJmaW5kIiwic3RhdGUiLCJsYXN0U3RhdGUiLCJQbGF5ZXJTdGF0ZSIsIlVOU1RBUlRFRCIsIkVOREVEIiwiUExBWUlORyIsInNldFBsYXliYWNrUXVhbGl0eSIsIl9uZXh0UGxheWJhY2tRdWFsaXR5IiwiaXNTZWVraW5nIiwib25TZWVrZWQiLCJsb2FkQ2FwdGlvbnMiLCJlbWl0VGltZXVwZGF0ZSIsIlBBVVNFRCIsIkJVRkZFUklORyIsImNsZWFySW50ZXJ2YWwiLCJzZWVraW5nSW50ZXJ2YWwiLCJ3YXNQYXVzZWRCZWZvcmVTZWVrIiwicGF1c2UiLCJzZXRJbnRlcnZhbCIsImN1cnJlbnRUaW1lIiwidGltZUJlZm9yZVNlZWsiLCJlbXB0eVRyYWNrbGlzdCIsInN1YnRpdGxlcyIsIl9sb2FkQ2FwdGlvbnNXYXRjaGVyIiwiX3RyYWNrc0Rpc2FibGUiLCJjaGVja0NhcHRpb25zRXhpc3QiLCJsb2FkTW9kdWxlIiwiZ2V0T3B0aW9ucyIsImVycm9yIiwidXJsIiwiaWQiLCJwYXJzZVVybCIsInBvc3RlciIsImdldEN1cnJlbnRUaW1lIiwidmFsdWUiLCJwYXVzZWQiLCJkdXJhdGlvbiIsInNlZWtUbyIsImdldER1cmF0aW9uIiwiTmFOIiwiZ2V0UGxheWJhY2tSYXRlIiwic2V0UGxheWJhY2tSYXRlIiwibXV0ZSIsInVuTXV0ZSIsInNldFRpbWVvdXQiLCJpc011dGVkIiwiZ2V0T3B0aW9uIiwiX3RyYWNrIiwidW5kZWZpbmVkIiwidW5sb2FkTW9kdWxlIiwic2V0T3B0aW9uIiwic3RhdHVzIiwiZ2V0UGxheWVyU3RhdGUiLCJDVUVEIiwiZ2V0UGxheWJhY2tRdWFsaXR5IiwiZ2V0Vm9sdW1lIiwic2V0Vm9sdW1lIiwicmVzdWx0IiwicmVnZXgiLCJVUkxfUkVHRVgiLCJtYXRjaCIsIlRFU1RfVklERU8iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjYW5Db250cm9sVm9sdW1lIiwidm9sdW1lIiwicHJvdG90eXBlIiwiZmVhdHVyZUNvbnRyb2xWb2x1bWUiLCJ0aW55Iiwic21hbGwiLCJtZWRpdW0iLCJsYXJnZSIsImhkNzIwIiwiaGQxMDgwIiwiaGlnaHJlcyIsImF1dG8iLCJfbG9hZGVkIiwiZ2V0U2NyaXB0IiwicmVnaXN0ZXJDb21wb25lbnQiLCJwcmVzZXQiLCJlbnRpdHkiLCJjb21tb24iLCJmdWxsc2NyZWVuIiwicGx1Z2luIiwicGx1Z2luT3B0aW9ucyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0Esb0I7Ozs7Ozs7QUNBQTs7Ozs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7O0FBRUEsS0FBTUEsU0FBU0MsT0FBT0MsUUFBUCxJQUFtQkQsT0FBT0UsQ0FBUCxDQUFTRCxRQUEzQztBQUNBLEtBQU1FLFNBQVNKLE9BQU9LLFlBQVAsQ0FBb0IsUUFBcEIsQ0FBZjs7QUFFQSxLQUFNQyxlQUFlLFNBQWZBLFlBQWUsUUFBUztBQUM3QixNQUFHQyxTQUFTLElBQVQsSUFBaUJB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QUV2SCxRQUFGLEdBQWFvQyxPQUFiLEVBQVA7O0FBRWpCLFNBQU8saUJBQUVvRixTQUFGLENBQVksb0NBQVosRUFDTC9ILElBREssQ0FDQTtBQUFBLFVBQU0sT0FBSzhILE9BQUwsR0FBZSxJQUFyQjtBQUFBLEdBREEsQ0FBUDtBQUVBLEVBTEQ7O0FBT0F4SyxRQUFPMEssaUJBQVAsQ0FBeUIsU0FBekIsRUFBb0M1SixPQUFwQzs7QUFFQWQsUUFBTzJLLE1BQVAsQ0FBYyxTQUFkLEVBQXlCO0FBQ3hCM0osV0FBVTtBQUNUNEosV0FBUyxTQURBO0FBRVRySCxhQUFXO0FBQ1ZzSCxZQUFTLENBQ1IsQ0FBQyxNQUFELEVBQVMsUUFBVCxFQUFtQixVQUFuQixFQUErQixNQUEvQixFQUF1QyxVQUF2QyxFQUFtRCxRQUFuRCxFQUE2RCxVQUE3RCxFQUF5RSxTQUF6RSxFQUFvRixTQUFwRixFQUErRixZQUEvRixDQURRLEVBRVIsRUFGUSxDQURDO0FBS1ZDLGdCQUFhLENBQ1osQ0FBQyxNQUFELEVBQVMsUUFBVCxFQUFtQixVQUFuQixFQUErQixNQUEvQixFQUF1QyxVQUF2QyxFQUFtRCxRQUFuRCxFQUE2RCxVQUE3RCxFQUF5RSxTQUF6RSxFQUFvRixTQUFwRixFQUErRixZQUEvRixDQURZO0FBTEg7QUFGRjtBQURjLEVBQXpCOztBQWVBOUssUUFBTytLLE1BQVAsQ0FBYyxTQUFkLEVBQXlCLFVBQVNDLGFBQVQsRUFBd0I7O0FBRWhEO0FBQ0FsSyxVQUFRMkIsU0FBUjtBQUNBLEVBSkQsRSIsImZpbGUiOiJsZS1wbGF5ZXIteW91dHViZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L2pzL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDlhZTA0Zjg0YTJlODY3ZmIyOTQ0IiwibW9kdWxlLmV4cG9ydHMgPSAkO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiJFwiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5jb25zdCBQbGF5ZXIgPSB3aW5kb3cubGVQbGF5ZXIgfHwgd2luZG93LiQubGVQbGF5ZXI7XG5jb25zdCBFbnRpdHkgPSBQbGF5ZXIuZ2V0Q29tcG9uZW50KCdFbnRpdHknKTtcblxuY29uc3QgdHJhY2tQcm92aWRlID0gdHJhY2sgPT4ge1xuXHRpZih0cmFjayA9PSBudWxsIHx8IHRyYWNrLmxhbmd1YWdlQ29kZSA9PSBudWxsKSB7XG5cdFx0cmV0dXJuIHRyYWNrXG5cdH1cblx0cmV0dXJuIHtcblx0XHRsYW5ndWFnZSA6IHRyYWNrLmxhbmd1YWdlQ29kZSxcblx0XHR0aXRsZSA6IHRyYWNrLmxhbmd1YWdlQ29kZSxcblx0XHR0b29sdGlwIDogdHJhY2subGFuZ3VhZ2VOYW1lLFxuXHRcdG5hbWUgOiB0cmFjay5sYW5ndWFnZUNvZGUsXG5cdH1cbn1cblxuXG5jbGFzcyBZb3V0dWJlIGV4dGVuZHMgRW50aXR5IHtcblx0Y29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblx0XHR0aGlzLl9wYXVzZWQgPSB0cnVlO1xuXG5cdFx0dGhpcy5zcmMgPSB0aGlzLnBsYXllci5vcHRpb25zLnNyYztcblxuXHRcdHRoaXMucGxheWVyLmFkZENsYXNzKCdsZXBsYXllci0teW91dHViZScpO1xuXHRcdHRoaXMuZWxlbWVudC5vbignY2xpY2snLCB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdkYmxjbGljaycsIHRoaXMub25EYmxjbGljay5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdHNldCBzcmMoc3JjKSB7XG5cdFx0aWYoc3JjID09IG51bGwpIHJldHVybjtcblx0XHRpZih0aGlzLnNyYyAmJiB0aGlzLnNyYy51cmwgPT09IHNyYy51cmwpIHJldHVybjtcblxuXHRcdGNvbnN0IHVybCA9IHNyYy51cmwgfHwgc3JjLmlkO1xuXG5cdFx0dGhpcy52aWRlb0lkID0gWW91dHViZS5wYXJzZVVybCh1cmwpO1xuXG5cdFx0aWYodGhpcy5wbGF5ZXIub3B0aW9ucy5wb3N0ZXIpIHtcblx0XHRcdHRoaXMucG9zdGVyID0gdGhpcy5wbGF5ZXIub3B0aW9ucy5wb3N0ZXJcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5wb3N0ZXIgPSAnaHR0cHM6Ly9pbWcueW91dHViZS5jb20vdmkvJyArIHRoaXMudmlkZW9JZCArICcvMC5qcGcnO1xuXHRcdH1cblx0fVxuXG5cdG9uQ2xpY2soZXZlbnQpIHtcblx0XHR0aGlzLnRyaWdnZXIoJ2NsaWNrJyk7XG5cdH1cblxuXHRvbkRibGNsaWNrKCkge1xuXHRcdHRoaXMudHJpZ2dlcignZGJsY2xpY2snKTtcblx0fVxuXG5cdGdldCBjdXJyZW50VGltZSgpIHtcblx0XHRyZXR1cm4gdGhpcy55dFBsYXllcj8gdGhpcy55dFBsYXllci5nZXRDdXJyZW50VGltZSgpIDogMDtcblx0fVxuXG5cdHNldCBjdXJyZW50VGltZSh2YWx1ZSkge1xuXHRcdGlmKHRoaXMubGFzdFN0YXRlID09PSBZVC5QbGF5ZXJTdGF0ZS5QQVVTRUQpIHtcblx0XHRcdHRoaXMudGltZUJlZm9yZVNlZWsgPSB0aGlzLmN1cnJlbnRUaW1lO1xuXHRcdH1cblxuXHRcdGlmICghdGhpcy5pc1NlZWtpbmcpIHtcblx0XHRcdHRoaXMud2FzUGF1c2VkQmVmb3JlU2VlayA9IHRoaXMucGF1c2VkO1xuXHRcdH1cblxuXHRcdGxldCB0aW1lO1xuXHRcdGlmICh2YWx1ZSA+PSB0aGlzLmR1cmF0aW9uKSB7XG5cdFx0XHR0aW1lID0gdGhpcy5kdXJhdGlvblxuXHRcdH0gZWxzZSBpZiAodmFsdWUgPCAwKSB7XG5cdFx0XHR0aW1lID0gMFxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aW1lID0gdmFsdWU7XG5cdFx0fVxuXG5cdFx0dGhpcy5pc1NlZWtpbmcgPSB0cnVlO1xuXHRcdHRoaXMueXRQbGF5ZXIuc2Vla1RvKHRpbWUsIHRydWUpO1xuXHRcdHRoaXMucGxheWVyLnRyaWdnZXIoJ3RpbWV1cGRhdGVsb2FkJywgeyBjdXJyZW50VGltZSA6IHRpbWUgfSk7XG5cblx0XHR0aGlzLnRyaWdnZXIoJ3NlZWtpbmcnKTtcblxuXHRcdHRoaXMuZW1pdFRpbWV1cGRhdGUoKTtcblx0fVxuXG5cdGdldCBkdXJhdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy55dFBsYXllciAmJiB0aGlzLnl0UGxheWVyLmdldER1cmF0aW9uID8gdGhpcy55dFBsYXllci5nZXREdXJhdGlvbigpIDogTmFOO1xuXHR9XG5cblx0Z2V0IHBhdXNlZCgpIHtcblx0XHRyZXR1cm4gKHRoaXMueXRQbGF5ZXIpID9cblx0XHRcdCh0aGlzLmxhc3RTdGF0ZSAhPT0gWVQuUGxheWVyU3RhdGUuUExBWUlORyAmJiB0aGlzLmxhc3RTdGF0ZSAhPT0gWVQuUGxheWVyU3RhdGUuQlVGRkVSSU5HKVxuXHRcdFx0OiB0cnVlO1xuXG5cdH1cblxuXG5cdGdldCByYXRlKCkge1xuXHRcdHJldHVybiB0aGlzLnl0UGxheWVyLmdldFBsYXliYWNrUmF0ZSgpO1xuXHR9XG5cblx0c2V0IHJhdGUodmFsdWUpIHtcblx0XHRzdXBlci5yYXRlID0gdmFsdWU7XG5cdFx0dGhpcy55dFBsYXllci5zZXRQbGF5YmFja1JhdGUodmFsdWUpO1xuXHRcdHRoaXMudHJpZ2dlcigncmF0ZWNoYW5nZScpO1xuXHR9XG5cblx0c2V0IG11dGVkKHZhbHVlKSB7XG5cdFx0aWYodmFsdWUpIHtcblx0XHRcdHRoaXMueXRQbGF5ZXIubXV0ZSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnl0UGxheWVyLnVuTXV0ZSgpO1xuXHRcdH1cblxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0dGhpcy50cmlnZ2VyKCd2b2x1bWVjaGFuZ2UnKTtcblx0XHR9LCA1MCk7XG5cdH1cblxuXHRnZXQgbXV0ZWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMueXRQbGF5ZXIuaXNNdXRlZCgpO1xuXHR9XG5cblx0Z2V0IHN1YnRpdGxlcygpIHtcblx0XHRyZXR1cm4gdGhpcy5jaGVja0NhcHRpb25zRXhpc3QoKVxuXHRcdFx0PyAodGhpcy55dFBsYXllci5nZXRPcHRpb24oJ2NhcHRpb25zJywgJ3RyYWNrbGlzdCcpIHx8IFtdKS5tYXAodHJhY2tQcm92aWRlKVxuXHRcdFx0OiBbXVxuXHR9XG5cblx0Z2V0IHRyYWNrKCkge1xuXHRcdGlmKHRoaXMuX3RyYWNrID09PSB1bmRlZmluZWQgJiYgdGhpcy5jaGVja0NhcHRpb25zRXhpc3QoKSkge1xuXHRcdFx0cmV0dXJuIHRyYWNrUHJvdmlkZSh0aGlzLnl0UGxheWVyLmdldE9wdGlvbignY2FwdGlvbnMnLCAndHJhY2snKSlcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuX3RyYWNrO1xuXHRcdH1cblx0fVxuXG5cdHNldCB0cmFjayh2YWx1ZSkge1xuXHRcdHRoaXMuX3RyYWNrID0gdmFsdWU7XG5cdFx0aWYodmFsdWUgPT09IG51bGwpIHtcblx0XHRcdHRoaXMuX3RyYWNrc0Rpc2FibGUgPSB0cnVlO1xuXHRcdFx0LyogRGlzYWJsZSBjYXB0aW9ucyAqL1xuXHRcdFx0dGhpcy55dFBsYXllci51bmxvYWRNb2R1bGUoJ2NhcHRpb25zJyk7XG5cblx0XHRcdHRoaXMudHJpZ2dlcigndHJhY2tzY2hhbmdlJyk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMueXRQbGF5ZXJcblx0XHRcdC5zZXRPcHRpb24oJ2NhcHRpb25zJywgJ3RyYWNrJywgeyBsYW5ndWFnZUNvZGUgOiB2YWx1ZS5uYW1lIH0pXG5cdFx0XHQuc2V0T3B0aW9uKCdjYXB0aW9ucycsICdyZWxvYWQnLCB0cnVlKTtcblxuXHRcdGlmKHRoaXMuX3RyYWNrc0Rpc2FibGUpIHtcblx0XHRcdC8qIEVuYWJsZSBjYXB0aW9ucyAqL1xuXHRcdFx0dGhpcy55dFBsYXllci5sb2FkTW9kdWxlKCdjYXB0aW9ucycpO1xuXHRcdH1cblx0XHR0aGlzLnRyaWdnZXIoJ3RyYWNrc2NoYW5nZScpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0aW5jcmVhc2VSYXRlKCkge1xuXHRcdGNvbnN0IGluZGV4ID0gdGhpcy5hdmFpbGFibGVSYXRlcy5pbmRleE9mKHRoaXMucmF0ZSk7XG5cdFx0aWYoaW5kZXggKyAxID49IHRoaXMuYXZhaWxhYmxlUmF0ZXMubGVuZ3RoKSByZXR1cm47XG5cdFx0cmV0dXJuIHRoaXMucmF0ZSA9IHRoaXMuYXZhaWxhYmxlUmF0ZXNbaW5kZXggKyAxXTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGRlY3JlYXNlUmF0ZSgpIHtcblx0XHRjb25zdCBpbmRleCA9IHRoaXMuYXZhaWxhYmxlUmF0ZXMuaW5kZXhPZih0aGlzLnJhdGUpO1xuXHRcdGlmKGluZGV4IC0gMSA8IDApIHJldHVybjtcblx0XHRyZXR1cm4gdGhpcy5yYXRlID0gdGhpcy5hdmFpbGFibGVSYXRlc1tpbmRleCAtIDFdO1xuXHR9XG5cblx0Z2V0QXZhaWxhYmxlUXVhbGl0eUxldmVscygpIHtcblx0XHRjb25zdCBhcnIgPSB0aGlzLnl0UGxheWVyLmdldEF2YWlsYWJsZVF1YWxpdHlMZXZlbHMoKTtcblx0XHRjb25zdCBpbmRleCA9IGFyci5pbmRleE9mKCdhdXRvJyk7XG5cblx0XHRpZihpbmRleCA+IC0xKSB7XG5cdFx0XHRhcnIuc3BsaWNlKGluZGV4LCAxKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gYXJyLm1hcChpdGVtID0+ICh7XG5cdFx0XHR0aXRsZSA6IFlvdXR1YmUuUVVBTElUWV9OQU1FU1tpdGVtXSB8fCBpdGVtLFxuXHRcdFx0bmFtZSA6IGl0ZW1cblx0XHR9KSk7XG5cdH1cblxuXG5cdHNldCBwbGF5YmFja1F1YWxpdHkobmFtZSkge1xuXHRcdHN1cGVyLnBsYXliYWNrUXVhbGl0eSA9IG5hbWU7XG5cdFx0Y29uc3QgdGltZSA9IHRoaXMuY3VycmVudFRpbWU7XG5cdFx0Y29uc3Qgc3RhdHVzID0gdGhpcy55dFBsYXllci5nZXRQbGF5ZXJTdGF0ZSgpO1xuXG5cdFx0aWYoc3RhdHVzICE9PSBZVC5QbGF5ZXJTdGF0ZS5VTlNUQVJURUQgJiYgc3RhdHVzICE9PSBZVC5QbGF5ZXJTdGF0ZS5DVUVEKSB7XG5cdFx0XHR0aGlzLnl0UGxheWVyLnBhdXNlVmlkZW8oKTtcblx0XHR9XG5cblx0XHR0aGlzLl9uZXh0UGxheWJhY2tRdWFsaXR5ID0gbmFtZTtcblx0XHR0aGlzLnl0UGxheWVyLnNldFBsYXliYWNrUXVhbGl0eShuYW1lKTtcblx0XHR0aGlzLnl0UGxheWVyLnNlZWtUbyh0aW1lKTtcblxuXHRcdGlmKHN0YXR1cyAhPT0gWVQuUGxheWVyU3RhdGUuUEFVU0VEKSB7XG5cdFx0XHR0aGlzLnl0UGxheWVyLnBsYXlWaWRlbygpO1xuXHRcdH1cblxuXHR9XG5cblx0Z2V0IHBsYXliYWNrUXVhbGl0eSgpIHtcblx0XHRpZiAodGhpcy5fcGxheWJhY2tRdWFsaXR5ID09IG51bGwpIHtcblx0XHRcdHRoaXMuX3BsYXliYWNrUXVhbGl0eSA9IHRoaXMuZ2V0QXZhaWxhYmxlUXVhbGl0eUxldmVscygpXG5cdFx0XHRcdC5maW5kKGl0ZW0gPT4gaXRlbS5uYW1lID09PSB0aGlzLnl0UGxheWVyLmdldFBsYXliYWNrUXVhbGl0eSgpKVxuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5fcGxheWJhY2tRdWFsaXR5O1xuXHR9XG5cblx0Z2V0IHZvbHVtZSgpIHtcblx0XHRyZXR1cm4gdGhpcy55dFBsYXllciA/IHRoaXMueXRQbGF5ZXIuZ2V0Vm9sdW1lKCkgLyAxMDAuMCA6IDE7XG5cdH1cblxuXHRzZXQgdm9sdW1lKHZhbHVlKSB7XG5cdFx0c3VwZXIudm9sdW1lID0gdmFsdWU7XG5cdFx0dGhpcy55dFBsYXllci5zZXRWb2x1bWUodmFsdWUgKiAxMDApO1xuXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHR0aGlzLnRyaWdnZXIoJ3ZvbHVtZWNoYW5nZScpO1xuXHRcdH0sIDUwKVxuXG5cdH1cblxuXHRzdXBwb3J0c0Z1bGxTY3JlZW4oKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRwbGF5KCkge1xuXHRcdHRoaXMueXRQbGF5ZXIucGxheVZpZGVvKCk7XG5cdFx0dGhpcy50cmlnZ2VyKCdwbGF5Jyk7XG5cdH1cblxuXHRwYXVzZSgpIHtcblx0XHR0aGlzLnl0UGxheWVyLnBhdXNlVmlkZW8oKTtcblx0XHR0aGlzLnRyaWdnZXIoJ3BhdXNlJyk7XG5cdH1cblxuXG5cdGluaXQoKSB7XG5cdFx0c3VwZXIuaW5pdCgpO1xuXHRcdHJldHVybiBZb3V0dWJlLmFwaUxvYWRlZCgpXG5cdFx0XHQudGhlbigoKSA9PiB0aGlzLmluaXRZVFBsYXllcigpKVxuXHR9XG5cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHR0aGlzLmVsZW1lbnQgPSAkKCc8ZGl2IC8+Jylcblx0XHRcdC5hZGRDbGFzcygnbGVwbGF5ZXJfX3lvdXR1YmUtd3JhcHBlcicpXG5cdFx0XHQuYXR0cigndGFiaW5kZXgnLCAnMCcpO1xuXHRcdHRoaXMueW91dHViZUVsZW1lbnQgPSAkKCc8ZGl2IC8+Jylcblx0XHRcdC5hZGRDbGFzcygnbGVwbGF5ZXJfX3lvdXR1YmUnKTtcblx0XHR0aGlzLmJsb2NrZXIgPSAkKCc8ZGl2IC8+Jylcblx0XHRcdC5hZGRDbGFzcygnbGVwbGF5ZXJfX3lvdXR1YmUtYmxvY2tlcicpO1xuXG5cblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50XG5cdFx0XHQuYXBwZW5kKHRoaXMuYmxvY2tlcilcblx0XHRcdC5hcHBlbmQodGhpcy55b3V0dWJlRWxlbWVudCk7XG5cdH1cblxuXHRpbml0WVRQbGF5ZXIoKSB7XG5cdFx0dGhpcy5faW5pdFByb21pc2UgPSAkLkRlZmVycmVkKCk7XG5cdFx0Y29uc3QgZ2xvYmFsT3B0aW9ucyA9IHRoaXMucGxheWVyLm9wdGlvbnM7XG5cdFx0bGV0IHl0T3B0aW9ucyA9IHtcblx0XHRcdGF1dG9wbGF5IDogZ2xvYmFsT3B0aW9ucy5hdXRvcGxheSA/IDEgOiAwLFxuXHRcdFx0bG9vcCA6IGdsb2JhbE9wdGlvbnMubG9vcCA/IDEgOiAwLFxuXHRcdFx0aXZfbG9hZF9wb2xpY3kgOiAzLFxuXHRcdFx0Y29udHJvbHMgOiAwLFxuXHRcdFx0bW9kZXN0YnJhbmRpbmcgOiAxLFxuXHRcdFx0cmVsIDogMCxcblx0XHRcdHNob3dpbmZvIDogMCxcblx0XHRcdGNjX2xvYWRfcG9saWN5IDogMCxcblx0XHRcdGRpc2FibGVrYiA6IDAsXG5cdFx0XHRmcyA6IDAsXG5cdFx0XHRzdGFydCA6IGdsb2JhbE9wdGlvbnMudGltZVxuXHRcdH07XG5cblx0XHRZVC5yZWFkeSgoKSA9PiB7XG5cdFx0XHR0aGlzLm9wdGlvbnMuY3R4LnJlcGxhY2VXaXRoKHRoaXMuZWxlbWVudCk7XG5cblx0XHRcdHRoaXMueXRQbGF5ZXIgPSBuZXcgWVQuUGxheWVyKHRoaXMueW91dHViZUVsZW1lbnRbMF0sIHtcblx0XHRcdFx0dmlkZW9JZCA6IHRoaXMudmlkZW9JZCxcblx0XHRcdFx0d2lkdGggOiBnbG9iYWxPcHRpb25zLndpZHRoIHx8ICcxMDAlJyxcblx0XHRcdFx0cGxheWVyVmFycyA6IHl0T3B0aW9ucyxcblx0XHRcdFx0ZXZlbnRzIDoge1xuXHRcdFx0XHRcdG9uUmVhZHkgOiB0aGlzLm9uWVRQUmVhZHkuYmluZCh0aGlzKSxcblx0XHRcdFx0XHRvblN0YXRlQ2hhbmdlIDogdGhpcy5vbllUUFN0YXRlQ2hhbmdlLmJpbmQodGhpcyksXG5cdFx0XHRcdFx0b25QbGF5YmFja1JhdGVDaGFuZ2UgOiB0aGlzLm9uWVRQUmF0ZUNoYW5nZS5iaW5kKHRoaXMpLFxuXHRcdFx0XHRcdG9uUGxheWJhY2tRdWFsaXR5Q2hhbmdlIDogdGhpcy5vbllUUFBsYXliYWNrUXVhbGl0eUNoYW5nZS5iaW5kKHRoaXMpXG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cblx0XHR9KVxuXHRcdHJldHVybiB0aGlzLl9pbml0UHJvbWlzZS5wcm9taXNlKCk7XG5cdH1cblxuXG5cdHNldEF2YWlsYWJsZVBsYXliYWNrUmF0ZXMoKSB7XG5cdFx0dGhpcy5hdmFpbGFibGVSYXRlcyA9IHRoaXMueXRQbGF5ZXIuZ2V0QXZhaWxhYmxlUGxheWJhY2tSYXRlcygpO1xuXHRcdHRoaXMucmF0ZU1pbiA9IHRoaXMuYXZhaWxhYmxlUmF0ZXNbMF07XG5cdFx0dGhpcy5yYXRlTWF4ID0gdGhpcy5hdmFpbGFibGVSYXRlc1t0aGlzLmF2YWlsYWJsZVJhdGVzLmxlbmd0aCAtIDFdO1xuXHR9XG5cblx0b25ZVFBSZWFkeShlKSB7XG5cdFx0dGhpcy5faW5pdFByb21pc2UucmVzb2x2ZSgpO1xuXHRcdHRoaXMuX2luaXRSYXRlKCk7XG5cdFx0dGhpcy5faW5pdFZvbHVtZSgpO1xuXHRcdHRoaXMuc2V0QXZhaWxhYmxlUGxheWJhY2tSYXRlcygpO1xuXHR9XG5cblx0b25ZVFBSYXRlQ2hhbmdlKGUpIHtcblx0XHR0aGlzLnRyaWdnZXIoJ3JhdGVjaGFuZ2UnKTtcblx0fVxuXG5cdG9uWVRQUGxheWJhY2tRdWFsaXR5Q2hhbmdlKGUpIHtcblx0XHRjb25zdCBkYXRhID0gZS5kYXRhO1xuXHRcdHRoaXMuX3BsYXliYWNrUXVhbGl0eSA9IHRoaXMuZ2V0QXZhaWxhYmxlUXVhbGl0eUxldmVscygpLmZpbmQoaXRlbSA9PiBpdGVtLm5hbWUgPT09IGRhdGEpO1xuXHRcdHRoaXMudHJpZ2dlcigncXVhbGl0eWNoYW5nZScsIHRoaXMuX3BsYXliYWNrUXVhbGl0eSk7XG5cdH1cblxuXHRvbllUUFN0YXRlQ2hhbmdlKGUpIHtcblx0XHRjb25zdCBzdGF0ZSA9IGUuZGF0YTtcblx0XHRpZihzdGF0ZSA9PT0gdGhpcy5sYXN0U3RhdGUpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLmxhc3RTdGF0ZSA9IHN0YXRlO1xuXHRcdHN3aXRjaChzdGF0ZSkge1xuXHRcdGNhc2UgWVQuUGxheWVyU3RhdGUuVU5TVEFSVEVEOlxuXHRcdFx0dGhpcy50cmlnZ2VyKCdsb2Fkc3RhcnQnKTtcblx0XHRcdHRoaXMudHJpZ2dlcignbG9hZGVkbWV0YWRhdGEnKTtcblx0XHRcdHRoaXMudHJpZ2dlcignZHVyYXRpb25jaGFuZ2UnKTtcblx0XHRcdHRoaXMudHJpZ2dlcigncmF0ZWNoYW5nZScpO1xuXHRcdFx0dGhpcy50cmlnZ2VyKCd2b2x1bWVjaGFuZ2UnKTtcblx0XHRcdHRoaXMudHJpZ2dlcigndHJhY2tzY2hhbmdlJyk7XG5cdFx0XHRpZih0aGlzLnBsYXllci5vcHRpb25zLmF1dG9wbGF5KSB7XG5cdFx0XHRcdHRoaXMudHJpZ2dlcigncGxheScpO1xuXHRcdFx0fVxuXHRcdFx0YnJlYWs7XG5cblx0XHRjYXNlIFlULlBsYXllclN0YXRlLkVOREVEOlxuXHRcdFx0dGhpcy50cmlnZ2VyKCdwYXVzZScpO1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdlbmRlZCcpO1xuXHRcdFx0YnJlYWs7XG5cblx0XHRjYXNlIFlULlBsYXllclN0YXRlLlBMQVlJTkc6XG5cdFx0XHR0aGlzLnRyaWdnZXIoJ3RpbWV1cGRhdGUnKTtcblx0XHRcdHRoaXMudHJpZ2dlcignZHVyYXRpb25jaGFuZ2UnKTtcblx0XHRcdHRoaXMudHJpZ2dlcigncGxheWluZycpO1xuXG5cdFx0XHR0aGlzLnl0UGxheWVyLnNldFBsYXliYWNrUXVhbGl0eSh0aGlzLl9uZXh0UGxheWJhY2tRdWFsaXR5KTtcblxuXHRcdFx0aWYodGhpcy5pc1NlZWtpbmcpIHtcblx0XHRcdFx0dGhpcy5vblNlZWtlZCgpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLmxvYWRDYXB0aW9ucygpXG5cdFx0XHR0aGlzLmVtaXRUaW1ldXBkYXRlKCk7XG5cdFx0XHRicmVhaztcblxuXHRcdGNhc2UgWVQuUGxheWVyU3RhdGUuUEFVU0VEOlxuXHRcdFx0dGhpcy50cmlnZ2VyKCdjYW5wbGF5Jyk7XG5cblx0XHRcdGlmKHRoaXMuaXNTZWVraW5nKSB7XG5cdFx0XHRcdHRoaXMub25TZWVrZWQoKTtcblx0XHRcdH1cblx0XHRcdGJyZWFrO1xuXG5cdFx0Y2FzZSBZVC5QbGF5ZXJTdGF0ZS5CVUZGRVJJTkc6XG5cdFx0XHR0aGlzLnBsYXllci50cmlnZ2VyKCd0aW1ldXBkYXRlJyk7XG5cdFx0XHR0aGlzLnBsYXllci50cmlnZ2VyKCd3YWl0aW5nJyk7XG5cblx0XHRcdHRoaXMueXRQbGF5ZXIuc2V0UGxheWJhY2tRdWFsaXR5KHRoaXMuX25leHRQbGF5YmFja1F1YWxpdHkpO1xuXG5cdFx0XHRicmVhaztcblx0XHR9XG5cblx0fVxuXG5cdG9uU2Vla2VkKCkge1xuXHRcdGNsZWFySW50ZXJ2YWwodGhpcy5zZWVraW5nSW50ZXJ2YWwpO1xuXHRcdHRoaXMuaXNTZWVraW5nID0gZmFsc2U7XG5cblx0XHRpZiAodGhpcy53YXNQYXVzZWRCZWZvcmVTZWVrKSB7XG5cdFx0XHR0aGlzLnBhdXNlKCk7XG5cdFx0fVxuXG5cdFx0dGhpcy50cmlnZ2VyKCdzZWVrZWQnKTtcblx0fVxuXG5cdGVtaXRUaW1ldXBkYXRlKCkge1xuXHRcdGNsZWFySW50ZXJ2YWwodGhpcy5zZWVraW5nSW50ZXJ2YWwpO1xuXG5cdFx0dGhpcy5zZWVraW5nSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG5cdFx0XHRpZih0aGlzLmxhc3RTdGF0ZSA9PT0gWVQuUGxheWVyU3RhdGUuUEFVU0VEKSB7XG5cdFx0XHRcdGNsZWFySW50ZXJ2YWwodGhpcy5zZWVraW5nSW50ZXJ2YWwpO1xuXHRcdFx0fSBlbHNlIGlmKHRoaXMuY3VycmVudFRpbWUgIT09IHRoaXMudGltZUJlZm9yZVNlZWspIHtcblx0XHRcdFx0dGhpcy50cmlnZ2VyKCd0aW1ldXBkYXRlJyk7XG5cdFx0XHR9XG5cdFx0fSwgMjUwKVxuXHR9XG5cblx0bG9hZENhcHRpb25zKCkge1xuXHRcdGNvbnN0IGVtcHR5VHJhY2tsaXN0ID0gKCkgPT4gKHRoaXMuc3VidGl0bGVzID09IG51bGwgfHwgdGhpcy5zdWJ0aXRsZXMubGVuZ3RoID09PSAwKTtcblxuXHRcdGNsZWFySW50ZXJ2YWwodGhpcy5fbG9hZENhcHRpb25zV2F0Y2hlcik7XG5cdFx0aWYoXG5cdFx0XHQhdGhpcy5fdHJhY2tzRGlzYWJsZSAmJlxuXHRcdFx0dGhpcy5jaGVja0NhcHRpb25zRXhpc3QoKSAmJlxuXHRcdFx0ZW1wdHlUcmFja2xpc3QoKVxuXHRcdCkge1xuXHRcdFx0dGhpcy55dFBsYXllci5sb2FkTW9kdWxlKCdjYXB0aW9ucycpO1xuXG5cdFx0XHR0aGlzLl9sb2FkQ2FwdGlvbnNXYXRjaGVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuXHRcdFx0XHRpZighZW1wdHlUcmFja2xpc3QoKSAmJiB0aGlzLmNoZWNrQ2FwdGlvbnNFeGlzdCgpKSB7XG5cdFx0XHRcdFx0dGhpcy50cmlnZ2VyKCd0cmFja3NjaGFuZ2UnKTtcblx0XHRcdFx0XHRjbGVhckludGVydmFsKHRoaXMuX2xvYWRDYXB0aW9uc1dhdGNoZXIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCAyNTApXG5cdFx0fVxuXHR9XG5cblx0Y2hlY2tDYXB0aW9uc0V4aXN0KCkge1xuXHRcdHRyeSB7XG5cdFx0XHRyZXR1cm4gdGhpcy55dFBsYXllci5nZXRPcHRpb25zKCdjYXB0aW9ucycpICE9IG51bGw7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH1cblxuXHRzdGF0aWMgcGFyc2VVcmwodXJsKSB7XG5cdFx0bGV0IHJlc3VsdCA9IG51bGw7XG5cdFx0Y29uc3QgcmVnZXggPSBZb3V0dWJlLlVSTF9SRUdFWDtcblx0XHRjb25zdCBtYXRjaCA9IHVybC5tYXRjaChyZWdleCk7XG5cdFx0aWYodXJsLmxlbmd0aCA9PT0gMTEpIHtcblx0XHRcdHJlc3VsdCA9IHVybDtcblx0XHR9IGVsc2UgaWYobWF0Y2ggJiYgbWF0Y2hbMl0ubGVuZ3RoID09PSAxMSkge1xuXHRcdFx0cmVzdWx0ID0gbWF0Y2hbMl07XG5cdFx0fVxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cbn1cblxuWW91dHViZS5URVNUX1ZJREVPID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8nKTtcbi8qKlxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqICAgICAgICAgLSBUcnVlIGlmIHZvbHVtZSBjYW4gYmUgY29udHJvbGxlZFxuICogICAgICAgICAtIEZhbHNlIG90aGVyd2lzZVxuICovXG5Zb3V0dWJlLmNhbkNvbnRyb2xWb2x1bWUgPSBmdW5jdGlvbigpIHtcblx0Ly8gSUUgd2lsbCBlcnJvciBpZiBXaW5kb3dzIE1lZGlhIFBsYXllciBub3QgaW5zdGFsbGVkICMzMzE1XG5cdHRyeSB7XG5cdFx0Y29uc3Qgdm9sdW1lID0gWW91dHViZS5URVNUX1ZJREVPLnZvbHVtZTtcblxuXHRcdFlvdXR1YmUuVEVTVF9WSURFTy52b2x1bWUgPSAodm9sdW1lIC8gMikgKyAwLjE7XG5cdFx0cmV0dXJuIHZvbHVtZSAhPT0gWW91dHViZS5URVNUX1ZJREVPLnZvbHVtZTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufTtcblxuWW91dHViZS5wcm90b3R5cGUuZmVhdHVyZUNvbnRyb2xWb2x1bWUgPSBZb3V0dWJlLmNhbkNvbnRyb2xWb2x1bWUoKTtcblxuWW91dHViZS5VUkxfUkVHRVggPSAvXi4qKHlvdXR1LmJlXFwvfHZcXC98dVxcL1xcd1xcL3xlbWJlZFxcL3x3YXRjaFxcP3Y9fFxcJnY9KShbXiNcXCZcXD9dKikuKi87XG5cbllvdXR1YmUuUVVBTElUWV9OQU1FUyA9IHtcblx0dGlueSA6ICcxNDBwJyxcblx0c21hbGwgOiAnMjQwcCcsXG5cdG1lZGl1bSA6ICczNjBwJyxcblx0bGFyZ2UgOiAnNDgwcCcsXG5cdGhkNzIwIDogJzcyMHAnLFxuXHRoZDEwODAgOiAnMTA4MHAnLFxuXHRoaWdocmVzIDogJ0hEJyxcblx0YXV0byA6ICfQkNCy0YLQvidcbn1cblxuWW91dHViZS5hcGlMb2FkZWQgPSBmdW5jdGlvbigpIHtcblx0aWYodGhpcy5fbG9hZGVkKSByZXR1cm4gJC5EZWZlcnJlZCgpLnJlc29sdmUoKTtcblxuXHRyZXR1cm4gJC5nZXRTY3JpcHQoJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2lmcmFtZV9hcGknKVxuXHRcdC50aGVuKCgpID0+IHRoaXMuX2xvYWRlZCA9IHRydWUpXG59XG5cblBsYXllci5yZWdpc3RlckNvbXBvbmVudCgnWW91dHViZScsIFlvdXR1YmUpO1xuXG5QbGF5ZXIucHJlc2V0KCd5b3V0dWJlJywge1xuXHRvcHRpb25zIDoge1xuXHRcdGVudGl0eSA6ICdZb3V0dWJlJyxcblx0XHRjb250cm9scyA6IHtcblx0XHRcdGNvbW1vbiA6IFtcblx0XHRcdFx0WydwbGF5JywgJ3ZvbHVtZScsICd0aW1lbGluZScsICdyYXRlJywgJ2JhY2t3YXJkJywgJ3NvdXJjZScsICdzdWJ0aXRsZScsICdkaXZpZGVyJywgJ3NlY3Rpb24nLCAnZnVsbHNjcmVlbiddLFxuXHRcdFx0XHRbXVxuXHRcdFx0XSxcblx0XHRcdGZ1bGxzY3JlZW4gOiBbXG5cdFx0XHRcdFsncGxheScsICd2b2x1bWUnLCAndGltZWxpbmUnLCAncmF0ZScsICdiYWNrd2FyZCcsICdzb3VyY2UnLCAnc3VidGl0bGUnLCAnZGl2aWRlcicsICdzZWN0aW9uJywgJ2Z1bGxzY3JlZW4nXSxcblx0XHRcdF1cblx0XHR9XG5cdH0sXG59KTtcblxuUGxheWVyLnBsdWdpbigneW91dHViZScsIGZ1bmN0aW9uKHBsdWdpbk9wdGlvbnMpIHtcblxuXHQvKiBnbG9iYWwgWVQgKi9cblx0WW91dHViZS5hcGlMb2FkZWQoKVxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9wbHVnaW5zL2xlLXBsYXllci15b3V0dWJlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==