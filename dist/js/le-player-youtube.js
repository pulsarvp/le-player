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

	module.exports = __webpack_require__(77);


/***/ }),

/***/ 2:
/***/ (function(module, exports) {

	module.exports = $;

/***/ }),

/***/ 77:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOGJjNzc1MDlmMjgxNWFhNmU2MjM/M2E4OCoiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiJFwiPzU3YWEqIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9wbHVnaW5zL2xlLXBsYXllci15b3V0dWJlLmpzIl0sIm5hbWVzIjpbIlBsYXllciIsIndpbmRvdyIsImxlUGxheWVyIiwiJCIsIkVudGl0eSIsImdldENvbXBvbmVudCIsInRyYWNrUHJvdmlkZSIsInRyYWNrIiwibGFuZ3VhZ2VDb2RlIiwibGFuZ3VhZ2UiLCJ0aXRsZSIsInRvb2x0aXAiLCJsYW5ndWFnZU5hbWUiLCJuYW1lIiwiWW91dHViZSIsInBsYXllciIsIm9wdGlvbnMiLCJfcGF1c2VkIiwic3JjIiwiYWRkQ2xhc3MiLCJlbGVtZW50Iiwib24iLCJvbkNsaWNrIiwiYmluZCIsIm9uRGJsY2xpY2siLCJldmVudCIsInRyaWdnZXIiLCJpbmRleCIsImF2YWlsYWJsZVJhdGVzIiwiaW5kZXhPZiIsInJhdGUiLCJsZW5ndGgiLCJhcnIiLCJ5dFBsYXllciIsImdldEF2YWlsYWJsZVF1YWxpdHlMZXZlbHMiLCJzcGxpY2UiLCJtYXAiLCJRVUFMSVRZX05BTUVTIiwiaXRlbSIsInBsYXlWaWRlbyIsInBhdXNlVmlkZW8iLCJhcGlMb2FkZWQiLCJ0aGVuIiwiaW5pdFlUUGxheWVyIiwiYXR0ciIsInlvdXR1YmVFbGVtZW50IiwiYmxvY2tlciIsImFwcGVuZCIsIl9pbml0UHJvbWlzZSIsIkRlZmVycmVkIiwiZ2xvYmFsT3B0aW9ucyIsInl0T3B0aW9ucyIsImF1dG9wbGF5IiwibG9vcCIsIml2X2xvYWRfcG9saWN5IiwiY29udHJvbHMiLCJtb2Rlc3RicmFuZGluZyIsInJlbCIsInNob3dpbmZvIiwiY2NfbG9hZF9wb2xpY3kiLCJkaXNhYmxla2IiLCJmcyIsInN0YXJ0IiwidGltZSIsIllUIiwicmVhZHkiLCJjdHgiLCJyZXBsYWNlV2l0aCIsInZpZGVvSWQiLCJ3aWR0aCIsInBsYXllclZhcnMiLCJldmVudHMiLCJvblJlYWR5Iiwib25ZVFBSZWFkeSIsIm9uU3RhdGVDaGFuZ2UiLCJvbllUUFN0YXRlQ2hhbmdlIiwib25QbGF5YmFja1JhdGVDaGFuZ2UiLCJvbllUUFJhdGVDaGFuZ2UiLCJvblBsYXliYWNrUXVhbGl0eUNoYW5nZSIsIm9uWVRQUGxheWJhY2tRdWFsaXR5Q2hhbmdlIiwicHJvbWlzZSIsImdldEF2YWlsYWJsZVBsYXliYWNrUmF0ZXMiLCJyYXRlTWluIiwicmF0ZU1heCIsImUiLCJyZXNvbHZlIiwiX2luaXRSYXRlIiwiX2luaXRWb2x1bWUiLCJzZXRBdmFpbGFibGVQbGF5YmFja1JhdGVzIiwiZGF0YSIsIl9wbGF5YmFja1F1YWxpdHkiLCJmaW5kIiwic3RhdGUiLCJsYXN0U3RhdGUiLCJQbGF5ZXJTdGF0ZSIsIlVOU1RBUlRFRCIsIkVOREVEIiwiUExBWUlORyIsInNldFBsYXliYWNrUXVhbGl0eSIsIl9uZXh0UGxheWJhY2tRdWFsaXR5IiwiaXNTZWVraW5nIiwib25TZWVrZWQiLCJsb2FkQ2FwdGlvbnMiLCJlbWl0VGltZXVwZGF0ZSIsIlBBVVNFRCIsIkJVRkZFUklORyIsImNsZWFySW50ZXJ2YWwiLCJzZWVraW5nSW50ZXJ2YWwiLCJ3YXNQYXVzZWRCZWZvcmVTZWVrIiwicGF1c2UiLCJzZXRJbnRlcnZhbCIsImN1cnJlbnRUaW1lIiwidGltZUJlZm9yZVNlZWsiLCJlbXB0eVRyYWNrbGlzdCIsInN1YnRpdGxlcyIsIl9sb2FkQ2FwdGlvbnNXYXRjaGVyIiwiX3RyYWNrc0Rpc2FibGUiLCJjaGVja0NhcHRpb25zRXhpc3QiLCJsb2FkTW9kdWxlIiwiZ2V0T3B0aW9ucyIsImVycm9yIiwidXJsIiwiaWQiLCJwYXJzZVVybCIsInBvc3RlciIsImdldEN1cnJlbnRUaW1lIiwidmFsdWUiLCJwYXVzZWQiLCJkdXJhdGlvbiIsInNlZWtUbyIsImdldER1cmF0aW9uIiwiTmFOIiwiZ2V0UGxheWJhY2tSYXRlIiwic2V0UGxheWJhY2tSYXRlIiwibXV0ZSIsInVuTXV0ZSIsInNldFRpbWVvdXQiLCJpc011dGVkIiwiZ2V0T3B0aW9uIiwiX3RyYWNrIiwidW5kZWZpbmVkIiwidW5sb2FkTW9kdWxlIiwic2V0T3B0aW9uIiwic3RhdHVzIiwiZ2V0UGxheWVyU3RhdGUiLCJDVUVEIiwiZ2V0UGxheWJhY2tRdWFsaXR5IiwiZ2V0Vm9sdW1lIiwic2V0Vm9sdW1lIiwicmVzdWx0IiwicmVnZXgiLCJVUkxfUkVHRVgiLCJtYXRjaCIsInRpbnkiLCJzbWFsbCIsIm1lZGl1bSIsImxhcmdlIiwiaGQ3MjAiLCJoZDEwODAiLCJoaWdocmVzIiwiYXV0byIsIl9sb2FkZWQiLCJnZXRTY3JpcHQiLCJyZWdpc3RlckNvbXBvbmVudCIsInByZXNldCIsImVudGl0eSIsImNvbW1vbiIsImZ1bGxzY3JlZW4iLCJwbHVnaW4iLCJwbHVnaW5PcHRpb25zIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQSxvQjs7Ozs7OztBQ0FBOzs7Ozs7OztBQUVBOzs7Ozs7Ozs7Ozs7QUFFQSxLQUFNQSxTQUFTQyxPQUFPQyxRQUFQLElBQW1CRCxPQUFPRSxDQUFQLENBQVNELFFBQTNDO0FBQ0EsS0FBTUUsU0FBU0osT0FBT0ssWUFBUCxDQUFvQixRQUFwQixDQUFmOztBQUVBLEtBQU1DLGVBQWUsU0FBZkEsWUFBZSxRQUFTO0FBQzdCLE1BQUdDLFNBQVMsSUFBVCxJQUFpQkEsTUFBTUMsWUFBTixJQUFzQixJQUExQyxFQUFnRDtBQUMvQyxVQUFPRCxLQUFQO0FBQ0E7QUFDRCxTQUFPO0FBQ05FLGFBQVdGLE1BQU1DLFlBRFg7QUFFTkUsVUFBUUgsTUFBTUMsWUFGUjtBQUdORyxZQUFVSixNQUFNSyxZQUhWO0FBSU5DLFNBQU9OLE1BQU1DO0FBSlAsR0FBUDtBQU1BLEVBVkQ7O0tBYU1NLE87OztBQUNMLG1CQUFZQyxNQUFaLEVBQW9CQyxPQUFwQixFQUE2QjtBQUFBOztBQUFBLGlIQUN0QkQsTUFEc0IsRUFDZEMsT0FEYzs7QUFFNUIsU0FBS0MsT0FBTCxHQUFlLElBQWY7O0FBRUEsU0FBS0MsR0FBTCxHQUFXLE1BQUtILE1BQUwsQ0FBWUMsT0FBWixDQUFvQkUsR0FBL0I7O0FBRUEsU0FBS0gsTUFBTCxDQUFZSSxRQUFaLENBQXFCLG1CQUFyQjtBQUNBLFNBQUtDLE9BQUwsQ0FBYUMsRUFBYixDQUFnQixPQUFoQixFQUF5QixNQUFLQyxPQUFMLENBQWFDLElBQWIsT0FBekI7QUFDQSxTQUFLSCxPQUFMLENBQWFDLEVBQWIsQ0FBZ0IsVUFBaEIsRUFBNEIsTUFBS0csVUFBTCxDQUFnQkQsSUFBaEIsT0FBNUI7QUFSNEI7QUFTNUI7O0FBRUQ7Ozs7Ozs7MkJBa0JRRSxLLEVBQU87QUFDZCxTQUFLQyxPQUFMLENBQWEsT0FBYjtBQUNBOzs7Z0NBRVk7QUFDWixTQUFLQSxPQUFMLENBQWEsVUFBYjtBQUNBOzs7OztBQTBHRDs7O2tDQUdlO0FBQ2QsUUFBTUMsUUFBUSxLQUFLQyxjQUFMLENBQW9CQyxPQUFwQixDQUE0QixLQUFLQyxJQUFqQyxDQUFkO0FBQ0EsUUFBR0gsUUFBUSxDQUFSLElBQWEsS0FBS0MsY0FBTCxDQUFvQkcsTUFBcEMsRUFBNEM7QUFDNUMsV0FBTyxLQUFLRCxJQUFMLEdBQVksS0FBS0YsY0FBTCxDQUFvQkQsUUFBUSxDQUE1QixDQUFuQjtBQUNBOztBQUVEOzs7Ozs7a0NBR2U7QUFDZCxRQUFNQSxRQUFRLEtBQUtDLGNBQUwsQ0FBb0JDLE9BQXBCLENBQTRCLEtBQUtDLElBQWpDLENBQWQ7QUFDQSxRQUFHSCxRQUFRLENBQVIsR0FBWSxDQUFmLEVBQWtCO0FBQ2xCLFdBQU8sS0FBS0csSUFBTCxHQUFZLEtBQUtGLGNBQUwsQ0FBb0JELFFBQVEsQ0FBNUIsQ0FBbkI7QUFDQTs7OytDQUUyQjtBQUMzQixRQUFNSyxNQUFNLEtBQUtDLFFBQUwsQ0FBY0MseUJBQWQsRUFBWjtBQUNBLFFBQU1QLFFBQVFLLElBQUlILE9BQUosQ0FBWSxNQUFaLENBQWQ7O0FBRUEsUUFBR0YsUUFBUSxDQUFDLENBQVosRUFBZTtBQUNkSyxTQUFJRyxNQUFKLENBQVdSLEtBQVgsRUFBa0IsQ0FBbEI7QUFDQTs7QUFFRCxXQUFPSyxJQUFJSSxHQUFKLENBQVE7QUFBQSxZQUFTO0FBQ3ZCMUIsYUFBUUksUUFBUXVCLGFBQVIsQ0FBc0JDLElBQXRCLEtBQStCQSxJQURoQjtBQUV2QnpCLFlBQU95QjtBQUZnQixNQUFUO0FBQUEsS0FBUixDQUFQO0FBSUE7Ozt3Q0E0Q29CO0FBQ3BCLFdBQU8sSUFBUDtBQUNBOzs7MEJBRU07QUFDTixTQUFLTCxRQUFMLENBQWNNLFNBQWQ7QUFDQSxTQUFLYixPQUFMLENBQWEsTUFBYjtBQUNBOzs7MkJBRU87QUFDUCxTQUFLTyxRQUFMLENBQWNPLFVBQWQ7QUFDQSxTQUFLZCxPQUFMLENBQWEsT0FBYjtBQUNBOzs7MEJBR007QUFBQTs7QUFDTjtBQUNBLFdBQU9aLFFBQVEyQixTQUFSLEdBQ0xDLElBREssQ0FDQTtBQUFBLFlBQU0sT0FBS0MsWUFBTCxFQUFOO0FBQUEsS0FEQSxDQUFQO0FBRUE7OzttQ0FFZTtBQUNmLFNBQUt2QixPQUFMLEdBQWUsc0JBQUUsU0FBRixFQUNiRCxRQURhLENBQ0osMkJBREksRUFFYnlCLElBRmEsQ0FFUixVQUZRLEVBRUksR0FGSixDQUFmO0FBR0EsU0FBS0MsY0FBTCxHQUFzQixzQkFBRSxTQUFGLEVBQ3BCMUIsUUFEb0IsQ0FDWCxtQkFEVyxDQUF0QjtBQUVBLFNBQUsyQixPQUFMLEdBQWUsc0JBQUUsU0FBRixFQUNiM0IsUUFEYSxDQUNKLDJCQURJLENBQWY7O0FBSUEsV0FBTyxLQUFLQyxPQUFMLENBQ0wyQixNQURLLENBQ0UsS0FBS0QsT0FEUCxFQUVMQyxNQUZLLENBRUUsS0FBS0YsY0FGUCxDQUFQO0FBR0E7OztrQ0FFYztBQUFBOztBQUNkLFNBQUtHLFlBQUwsR0FBb0I3QyxpQkFBRThDLFFBQUYsRUFBcEI7QUFDQSxRQUFNQyxnQkFBZ0IsS0FBS25DLE1BQUwsQ0FBWUMsT0FBbEM7QUFDQSxRQUFJbUMsWUFBWTtBQUNmQyxlQUFXRixjQUFjRSxRQUFkLEdBQXlCLENBQXpCLEdBQTZCLENBRHpCO0FBRWZDLFdBQU9ILGNBQWNHLElBQWQsR0FBcUIsQ0FBckIsR0FBeUIsQ0FGakI7QUFHZkMscUJBQWlCLENBSEY7QUFJZkMsZUFBVyxDQUpJO0FBS2ZDLHFCQUFpQixDQUxGO0FBTWZDLFVBQU0sQ0FOUztBQU9mQyxlQUFXLENBUEk7QUFRZkMscUJBQWlCLENBUkY7QUFTZkMsZ0JBQVksQ0FURztBQVVmQyxTQUFLLENBVlU7QUFXZkMsWUFBUVosY0FBY2E7QUFYUCxLQUFoQjs7QUFjQUMsT0FBR0MsS0FBSCxDQUFTLFlBQU07QUFDZCxZQUFLakQsT0FBTCxDQUFha0QsR0FBYixDQUFpQkMsV0FBakIsQ0FBNkIsT0FBSy9DLE9BQWxDOztBQUVBLFlBQUthLFFBQUwsR0FBZ0IsSUFBSStCLEdBQUdoRSxNQUFQLENBQWMsT0FBSzZDLGNBQUwsQ0FBb0IsQ0FBcEIsQ0FBZCxFQUFzQztBQUNyRHVCLGVBQVUsT0FBS0EsT0FEc0M7QUFFckRDLGFBQVFuQixjQUFjbUIsS0FBZCxJQUF1QixNQUZzQjtBQUdyREMsa0JBQWFuQixTQUh3QztBQUlyRG9CLGNBQVM7QUFDUkMsZ0JBQVUsT0FBS0MsVUFBTCxDQUFnQmxELElBQWhCLENBQXFCLE1BQXJCLENBREY7QUFFUm1ELHNCQUFnQixPQUFLQyxnQkFBTCxDQUFzQnBELElBQXRCLENBQTJCLE1BQTNCLENBRlI7QUFHUnFELDZCQUF1QixPQUFLQyxlQUFMLENBQXFCdEQsSUFBckIsQ0FBMEIsTUFBMUIsQ0FIZjtBQUlSdUQsZ0NBQTBCLE9BQUtDLDBCQUFMLENBQWdDeEQsSUFBaEMsQ0FBcUMsTUFBckM7QUFKbEI7QUFKNEMsTUFBdEMsQ0FBaEI7QUFZQSxLQWZEO0FBZ0JBLFdBQU8sS0FBS3lCLFlBQUwsQ0FBa0JnQyxPQUFsQixFQUFQO0FBQ0E7OzsrQ0FHMkI7QUFDM0IsU0FBS3BELGNBQUwsR0FBc0IsS0FBS0ssUUFBTCxDQUFjZ0QseUJBQWQsRUFBdEI7QUFDQSxTQUFLQyxPQUFMLEdBQWUsS0FBS3RELGNBQUwsQ0FBb0IsQ0FBcEIsQ0FBZjtBQUNBLFNBQUt1RCxPQUFMLEdBQWUsS0FBS3ZELGNBQUwsQ0FBb0IsS0FBS0EsY0FBTCxDQUFvQkcsTUFBcEIsR0FBNkIsQ0FBakQsQ0FBZjtBQUNBOzs7OEJBRVVxRCxDLEVBQUc7QUFDYixTQUFLcEMsWUFBTCxDQUFrQnFDLE9BQWxCO0FBQ0EsU0FBS0MsU0FBTDtBQUNBLFNBQUtDLFdBQUw7QUFDQSxTQUFLQyx5QkFBTDtBQUNBOzs7bUNBRWVKLEMsRUFBRztBQUNsQixTQUFLMUQsT0FBTCxDQUFhLFlBQWI7QUFDQTs7OzhDQUUwQjBELEMsRUFBRztBQUM3QixRQUFNSyxPQUFPTCxFQUFFSyxJQUFmO0FBQ0EsU0FBS0MsZ0JBQUwsR0FBd0IsS0FBS3hELHlCQUFMLEdBQWlDeUQsSUFBakMsQ0FBc0M7QUFBQSxZQUFRckQsS0FBS3pCLElBQUwsS0FBYzRFLElBQXRCO0FBQUEsS0FBdEMsQ0FBeEI7QUFDQSxTQUFLL0QsT0FBTCxDQUFhLGVBQWIsRUFBOEIsS0FBS2dFLGdCQUFuQztBQUNBOzs7b0NBRWdCTixDLEVBQUc7QUFDbkIsUUFBTVEsUUFBUVIsRUFBRUssSUFBaEI7QUFDQSxRQUFHRyxVQUFVLEtBQUtDLFNBQWxCLEVBQTZCO0FBQzVCO0FBQ0E7O0FBRUQsU0FBS0EsU0FBTCxHQUFpQkQsS0FBakI7QUFDQSxZQUFPQSxLQUFQO0FBQ0EsVUFBSzVCLEdBQUc4QixXQUFILENBQWVDLFNBQXBCO0FBQ0MsV0FBS3JFLE9BQUwsQ0FBYSxXQUFiO0FBQ0EsV0FBS0EsT0FBTCxDQUFhLGdCQUFiO0FBQ0EsV0FBS0EsT0FBTCxDQUFhLGdCQUFiO0FBQ0EsV0FBS0EsT0FBTCxDQUFhLFlBQWI7QUFDQSxXQUFLQSxPQUFMLENBQWEsY0FBYjtBQUNBLFdBQUtBLE9BQUwsQ0FBYSxjQUFiO0FBQ0EsVUFBRyxLQUFLWCxNQUFMLENBQVlDLE9BQVosQ0FBb0JvQyxRQUF2QixFQUFpQztBQUNoQyxZQUFLMUIsT0FBTCxDQUFhLE1BQWI7QUFDQTtBQUNEOztBQUVELFVBQUtzQyxHQUFHOEIsV0FBSCxDQUFlRSxLQUFwQjtBQUNDLFdBQUt0RSxPQUFMLENBQWEsT0FBYjtBQUNBLFdBQUtBLE9BQUwsQ0FBYSxPQUFiO0FBQ0E7O0FBRUQsVUFBS3NDLEdBQUc4QixXQUFILENBQWVHLE9BQXBCO0FBQ0MsV0FBS3ZFLE9BQUwsQ0FBYSxZQUFiO0FBQ0EsV0FBS0EsT0FBTCxDQUFhLGdCQUFiO0FBQ0EsV0FBS0EsT0FBTCxDQUFhLFNBQWI7O0FBRUEsV0FBS08sUUFBTCxDQUFjaUUsa0JBQWQsQ0FBaUMsS0FBS0Msb0JBQXRDOztBQUVBLFVBQUcsS0FBS0MsU0FBUixFQUFtQjtBQUNsQixZQUFLQyxRQUFMO0FBQ0E7O0FBRUQsV0FBS0MsWUFBTDtBQUNBLFdBQUtDLGNBQUw7QUFDQTs7QUFFRCxVQUFLdkMsR0FBRzhCLFdBQUgsQ0FBZVUsTUFBcEI7QUFDQyxXQUFLOUUsT0FBTCxDQUFhLFNBQWI7O0FBRUEsVUFBRyxLQUFLMEUsU0FBUixFQUFtQjtBQUNsQixZQUFLQyxRQUFMO0FBQ0E7QUFDRDs7QUFFRCxVQUFLckMsR0FBRzhCLFdBQUgsQ0FBZVcsU0FBcEI7QUFDQyxXQUFLMUYsTUFBTCxDQUFZVyxPQUFaLENBQW9CLFlBQXBCO0FBQ0EsV0FBS1gsTUFBTCxDQUFZVyxPQUFaLENBQW9CLFNBQXBCOztBQUVBLFdBQUtPLFFBQUwsQ0FBY2lFLGtCQUFkLENBQWlDLEtBQUtDLG9CQUF0Qzs7QUFFQTtBQS9DRDtBQWtEQTs7OzhCQUVVO0FBQ1ZPLGtCQUFjLEtBQUtDLGVBQW5CO0FBQ0EsU0FBS1AsU0FBTCxHQUFpQixLQUFqQjs7QUFFQSxRQUFJLEtBQUtRLG1CQUFULEVBQThCO0FBQzdCLFVBQUtDLEtBQUw7QUFDQTs7QUFFRCxTQUFLbkYsT0FBTCxDQUFhLFFBQWI7QUFDQTs7O29DQUVnQjtBQUFBOztBQUNoQmdGLGtCQUFjLEtBQUtDLGVBQW5COztBQUVBLFNBQUtBLGVBQUwsR0FBdUJHLFlBQVksWUFBTTtBQUN4QyxTQUFHLE9BQUtqQixTQUFMLEtBQW1CN0IsR0FBRzhCLFdBQUgsQ0FBZVUsTUFBckMsRUFBNkM7QUFDNUNFLG9CQUFjLE9BQUtDLGVBQW5CO0FBQ0EsTUFGRCxNQUVPLElBQUcsT0FBS0ksV0FBTCxLQUFxQixPQUFLQyxjQUE3QixFQUE2QztBQUNuRCxhQUFLdEYsT0FBTCxDQUFhLFlBQWI7QUFDQTtBQUNELEtBTnNCLEVBTXBCLEdBTm9CLENBQXZCO0FBT0E7OztrQ0FFYztBQUFBOztBQUNkLFFBQU11RixpQkFBaUIsU0FBakJBLGNBQWlCO0FBQUEsWUFBTyxPQUFLQyxTQUFMLElBQWtCLElBQWxCLElBQTBCLE9BQUtBLFNBQUwsQ0FBZW5GLE1BQWYsS0FBMEIsQ0FBM0Q7QUFBQSxLQUF2Qjs7QUFFQTJFLGtCQUFjLEtBQUtTLG9CQUFuQjtBQUNBLFFBQ0MsQ0FBQyxLQUFLQyxjQUFOLElBQ0EsS0FBS0Msa0JBQUwsRUFEQSxJQUVBSixnQkFIRCxFQUlFO0FBQ0QsVUFBS2hGLFFBQUwsQ0FBY3FGLFVBQWQsQ0FBeUIsVUFBekI7O0FBRUEsVUFBS0gsb0JBQUwsR0FBNEJMLFlBQVksWUFBTTtBQUM3QyxVQUFHLENBQUNHLGdCQUFELElBQXFCLE9BQUtJLGtCQUFMLEVBQXhCLEVBQW1EO0FBQ2xELGNBQUszRixPQUFMLENBQWEsY0FBYjtBQUNBZ0YscUJBQWMsT0FBS1Msb0JBQW5CO0FBQ0E7QUFDRCxNQUwyQixFQUt6QixHQUx5QixDQUE1QjtBQU1BO0FBQ0Q7Ozt3Q0FFb0I7QUFDcEIsUUFBSTtBQUNILFlBQU8sS0FBS2xGLFFBQUwsQ0FBY3NGLFVBQWQsQ0FBeUIsVUFBekIsS0FBd0MsSUFBL0M7QUFDQSxLQUZELENBRUUsT0FBT0MsS0FBUCxFQUFjO0FBQ2YsWUFBTyxLQUFQO0FBQ0E7QUFDRDs7O3FCQXJaT3RHLEcsRUFBSztBQUNaLFFBQUdBLE9BQU8sSUFBVixFQUFnQjtBQUNoQixRQUFHLEtBQUtBLEdBQUwsSUFBWSxLQUFLQSxHQUFMLENBQVN1RyxHQUFULEtBQWlCdkcsSUFBSXVHLEdBQXBDLEVBQXlDOztBQUV6QyxRQUFNQSxNQUFNdkcsSUFBSXVHLEdBQUosSUFBV3ZHLElBQUl3RyxFQUEzQjs7QUFFQSxTQUFLdEQsT0FBTCxHQUFldEQsUUFBUTZHLFFBQVIsQ0FBaUJGLEdBQWpCLENBQWY7O0FBRUEsUUFBRyxLQUFLMUcsTUFBTCxDQUFZQyxPQUFaLENBQW9CNEcsTUFBdkIsRUFBK0I7QUFDOUIsVUFBS0EsTUFBTCxHQUFjLEtBQUs3RyxNQUFMLENBQVlDLE9BQVosQ0FBb0I0RyxNQUFsQztBQUNBLEtBRkQsTUFFTztBQUNOLFVBQUtBLE1BQUwsR0FBYyxnQ0FBZ0MsS0FBS3hELE9BQXJDLEdBQStDLFFBQTdEO0FBQ0E7QUFDRDs7O3VCQVVpQjtBQUNqQixXQUFPLEtBQUtuQyxRQUFMLEdBQWUsS0FBS0EsUUFBTCxDQUFjNEYsY0FBZCxFQUFmLEdBQWdELENBQXZEO0FBQ0EsSTtxQkFFZUMsSyxFQUFPO0FBQ3RCLFFBQUcsS0FBS2pDLFNBQUwsS0FBbUI3QixHQUFHOEIsV0FBSCxDQUFlVSxNQUFyQyxFQUE2QztBQUM1QyxVQUFLUSxjQUFMLEdBQXNCLEtBQUtELFdBQTNCO0FBQ0E7O0FBRUQsUUFBSSxDQUFDLEtBQUtYLFNBQVYsRUFBcUI7QUFDcEIsVUFBS1EsbUJBQUwsR0FBMkIsS0FBS21CLE1BQWhDO0FBQ0E7O0FBRUQsUUFBSWhFLGFBQUo7QUFDQSxRQUFJK0QsU0FBUyxLQUFLRSxRQUFsQixFQUE0QjtBQUMzQmpFLFlBQU8sS0FBS2lFLFFBQVo7QUFDQSxLQUZELE1BRU8sSUFBSUYsUUFBUSxDQUFaLEVBQWU7QUFDckIvRCxZQUFPLENBQVA7QUFDQSxLQUZNLE1BRUE7QUFDTkEsWUFBTytELEtBQVA7QUFDQTs7QUFFRCxTQUFLMUIsU0FBTCxHQUFpQixJQUFqQjtBQUNBLFNBQUtuRSxRQUFMLENBQWNnRyxNQUFkLENBQXFCbEUsSUFBckIsRUFBMkIsSUFBM0I7QUFDQSxTQUFLaEQsTUFBTCxDQUFZVyxPQUFaLENBQW9CLGdCQUFwQixFQUFzQyxFQUFFcUYsYUFBY2hELElBQWhCLEVBQXRDOztBQUVBLFNBQUtyQyxPQUFMLENBQWEsU0FBYjs7QUFFQSxTQUFLNkUsY0FBTDtBQUNBOzs7dUJBRWM7QUFDZCxXQUFPLEtBQUt0RSxRQUFMLElBQWlCLEtBQUtBLFFBQUwsQ0FBY2lHLFdBQS9CLEdBQTZDLEtBQUtqRyxRQUFMLENBQWNpRyxXQUFkLEVBQTdDLEdBQTJFQyxHQUFsRjtBQUNBOzs7dUJBRVk7QUFDWixXQUFRLEtBQUtsRyxRQUFOLEdBQ0wsS0FBSzRELFNBQUwsS0FBbUI3QixHQUFHOEIsV0FBSCxDQUFlRyxPQUFsQyxJQUE2QyxLQUFLSixTQUFMLEtBQW1CN0IsR0FBRzhCLFdBQUgsQ0FBZVcsU0FEMUUsR0FFSixJQUZIO0FBSUE7Ozt1QkFHVTtBQUNWLFdBQU8sS0FBS3hFLFFBQUwsQ0FBY21HLGVBQWQsRUFBUDtBQUNBLEk7cUJBRVFOLEssRUFBTztBQUNmLDBGQUFhQSxLQUFiO0FBQ0EsU0FBSzdGLFFBQUwsQ0FBY29HLGVBQWQsQ0FBOEJQLEtBQTlCO0FBQ0EsU0FBS3BHLE9BQUwsQ0FBYSxZQUFiO0FBQ0E7OztxQkFFU29HLEssRUFBTztBQUFBOztBQUNoQixRQUFHQSxLQUFILEVBQVU7QUFDVCxVQUFLN0YsUUFBTCxDQUFjcUcsSUFBZDtBQUNBLEtBRkQsTUFFTztBQUNOLFVBQUtyRyxRQUFMLENBQWNzRyxNQUFkO0FBQ0E7O0FBRURDLGVBQVcsWUFBTTtBQUNoQixZQUFLOUcsT0FBTCxDQUFhLGNBQWI7QUFDQSxLQUZELEVBRUcsRUFGSDtBQUdBLEk7dUJBRVc7QUFDWCxXQUFPLEtBQUtPLFFBQUwsQ0FBY3dHLE9BQWQsRUFBUDtBQUNBOzs7dUJBRWU7QUFDZixXQUFPLEtBQUtwQixrQkFBTCxLQUNKLENBQUMsS0FBS3BGLFFBQUwsQ0FBY3lHLFNBQWQsQ0FBd0IsVUFBeEIsRUFBb0MsV0FBcEMsS0FBb0QsRUFBckQsRUFBeUR0RyxHQUF6RCxDQUE2RDlCLFlBQTdELENBREksR0FFSixFQUZIO0FBR0E7Ozt1QkFFVztBQUNYLFFBQUcsS0FBS3FJLE1BQUwsS0FBZ0JDLFNBQWhCLElBQTZCLEtBQUt2QixrQkFBTCxFQUFoQyxFQUEyRDtBQUMxRCxZQUFPL0csYUFBYSxLQUFLMkIsUUFBTCxDQUFjeUcsU0FBZCxDQUF3QixVQUF4QixFQUFvQyxPQUFwQyxDQUFiLENBQVA7QUFDQSxLQUZELE1BRU87QUFDTixZQUFPLEtBQUtDLE1BQVo7QUFDQTtBQUNELEk7cUJBRVNiLEssRUFBTztBQUNoQixTQUFLYSxNQUFMLEdBQWNiLEtBQWQ7QUFDQSxRQUFHQSxVQUFVLElBQWIsRUFBbUI7QUFDbEIsVUFBS1YsY0FBTCxHQUFzQixJQUF0QjtBQUNBO0FBQ0EsVUFBS25GLFFBQUwsQ0FBYzRHLFlBQWQsQ0FBMkIsVUFBM0I7O0FBRUEsVUFBS25ILE9BQUwsQ0FBYSxjQUFiO0FBQ0E7QUFDQTtBQUNELFNBQUtPLFFBQUwsQ0FDRTZHLFNBREYsQ0FDWSxVQURaLEVBQ3dCLE9BRHhCLEVBQ2lDLEVBQUV0SSxjQUFlc0gsTUFBTWpILElBQXZCLEVBRGpDLEVBRUVpSSxTQUZGLENBRVksVUFGWixFQUV3QixRQUZ4QixFQUVrQyxJQUZsQzs7QUFJQSxRQUFHLEtBQUsxQixjQUFSLEVBQXdCO0FBQ3ZCO0FBQ0EsVUFBS25GLFFBQUwsQ0FBY3FGLFVBQWQsQ0FBeUIsVUFBekI7QUFDQTtBQUNELFNBQUs1RixPQUFMLENBQWEsY0FBYjtBQUNBOzs7cUJBbUNtQmIsSSxFQUFNO0FBQ3pCLHFHQUF3QkEsSUFBeEI7QUFDQSxRQUFNa0QsT0FBTyxLQUFLZ0QsV0FBbEI7QUFDQSxRQUFNZ0MsU0FBUyxLQUFLOUcsUUFBTCxDQUFjK0csY0FBZCxFQUFmOztBQUVBLFFBQUdELFdBQVcvRSxHQUFHOEIsV0FBSCxDQUFlQyxTQUExQixJQUF1Q2dELFdBQVcvRSxHQUFHOEIsV0FBSCxDQUFlbUQsSUFBcEUsRUFBMEU7QUFDekUsVUFBS2hILFFBQUwsQ0FBY08sVUFBZDtBQUNBOztBQUVELFNBQUsyRCxvQkFBTCxHQUE0QnRGLElBQTVCO0FBQ0EsU0FBS29CLFFBQUwsQ0FBY2lFLGtCQUFkLENBQWlDckYsSUFBakM7QUFDQSxTQUFLb0IsUUFBTCxDQUFjZ0csTUFBZCxDQUFxQmxFLElBQXJCOztBQUVBLFFBQUdnRixXQUFXL0UsR0FBRzhCLFdBQUgsQ0FBZVUsTUFBN0IsRUFBcUM7QUFDcEMsVUFBS3ZFLFFBQUwsQ0FBY00sU0FBZDtBQUNBO0FBRUQsSTt1QkFFcUI7QUFBQTs7QUFDckIsUUFBSSxLQUFLbUQsZ0JBQUwsSUFBeUIsSUFBN0IsRUFBbUM7QUFDbEMsVUFBS0EsZ0JBQUwsR0FBd0IsS0FBS3hELHlCQUFMLEdBQ3RCeUQsSUFEc0IsQ0FDakI7QUFBQSxhQUFRckQsS0FBS3pCLElBQUwsS0FBYyxPQUFLb0IsUUFBTCxDQUFjaUgsa0JBQWQsRUFBdEI7QUFBQSxNQURpQixDQUF4QjtBQUVBO0FBQ0QsV0FBTyxLQUFLeEQsZ0JBQVo7QUFDQTs7O3VCQUVZO0FBQ1osV0FBTyxLQUFLekQsUUFBTCxHQUFnQixLQUFLQSxRQUFMLENBQWNrSCxTQUFkLEtBQTRCLEtBQTVDLEdBQW9ELENBQTNEO0FBQ0EsSTtxQkFFVXJCLEssRUFBTztBQUFBOztBQUNqQiw0RkFBZUEsS0FBZjtBQUNBLFNBQUs3RixRQUFMLENBQWNtSCxTQUFkLENBQXdCdEIsUUFBUSxHQUFoQzs7QUFFQVUsZUFBVyxZQUFNO0FBQ2hCLFlBQUs5RyxPQUFMLENBQWEsY0FBYjtBQUNBLEtBRkQsRUFFRyxFQUZIO0FBSUE7Ozs0QkFnTmUrRixHLEVBQUs7QUFDcEIsUUFBSTRCLFNBQVMsSUFBYjtBQUNBLFFBQU1DLFFBQVF4SSxRQUFReUksU0FBdEI7QUFDQSxRQUFNQyxRQUFRL0IsSUFBSStCLEtBQUosQ0FBVUYsS0FBVixDQUFkO0FBQ0EsUUFBRzdCLElBQUkxRixNQUFKLEtBQWUsRUFBbEIsRUFBc0I7QUFDckJzSCxjQUFTNUIsR0FBVDtBQUNBLEtBRkQsTUFFTyxJQUFHK0IsU0FBU0EsTUFBTSxDQUFOLEVBQVN6SCxNQUFULEtBQW9CLEVBQWhDLEVBQW9DO0FBQzFDc0gsY0FBU0csTUFBTSxDQUFOLENBQVQ7QUFDQTtBQUNELFdBQU9ILE1BQVA7QUFDQTs7OztHQWhib0JqSixNOztBQW1idEJVLFNBQVF5SSxTQUFSLEdBQW9CLGlFQUFwQjs7QUFFQXpJLFNBQVF1QixhQUFSLEdBQXdCO0FBQ3ZCb0gsUUFBTyxNQURnQjtBQUV2QkMsU0FBUSxNQUZlO0FBR3ZCQyxVQUFTLE1BSGM7QUFJdkJDLFNBQVEsTUFKZTtBQUt2QkMsU0FBUSxNQUxlO0FBTXZCQyxVQUFTLE9BTmM7QUFPdkJDLFdBQVUsSUFQYTtBQVF2QkMsUUFBTztBQVJnQixFQUF4Qjs7QUFXQWxKLFNBQVEyQixTQUFSLEdBQW9CLFlBQVc7QUFBQTs7QUFDOUIsTUFBRyxLQUFLd0gsT0FBUixFQUFpQixPQUFPOUosaUJBQUU4QyxRQUFGLEdBQWFvQyxPQUFiLEVBQVA7O0FBRWpCLFNBQU9sRixpQkFBRStKLFNBQUYsQ0FBWSxvQ0FBWixFQUNMeEgsSUFESyxDQUNBO0FBQUEsVUFBTSxPQUFLdUgsT0FBTCxHQUFlLElBQXJCO0FBQUEsR0FEQSxDQUFQO0FBRUEsRUFMRDs7QUFPQWpLLFFBQU9tSyxpQkFBUCxDQUF5QixTQUF6QixFQUFvQ3JKLE9BQXBDOztBQUVBZCxRQUFPb0ssTUFBUCxDQUFjLFNBQWQsRUFBeUI7QUFDeEJwSixXQUFVO0FBQ1RxSixXQUFTLFNBREE7QUFFVDlHLGFBQVc7QUFDVitHLFlBQVMsQ0FDUixDQUFDLE1BQUQsRUFBUyxRQUFULEVBQW1CLFVBQW5CLEVBQStCLE1BQS9CLEVBQXVDLFVBQXZDLEVBQW1ELFFBQW5ELEVBQTZELFVBQTdELEVBQXlFLFNBQXpFLEVBQW9GLFNBQXBGLEVBQStGLFlBQS9GLENBRFEsRUFFUixFQUZRLENBREM7QUFLVkMsZ0JBQWEsQ0FDWixDQUFDLE1BQUQsRUFBUyxRQUFULEVBQW1CLFVBQW5CLEVBQStCLE1BQS9CLEVBQXVDLFVBQXZDLEVBQW1ELFFBQW5ELEVBQTZELFVBQTdELEVBQXlFLFNBQXpFLEVBQW9GLFNBQXBGLEVBQStGLFlBQS9GLENBRFk7QUFMSDtBQUZGO0FBRGMsRUFBekI7O0FBZUF2SyxRQUFPd0ssTUFBUCxDQUFjLFNBQWQsRUFBeUIsVUFBU0MsYUFBVCxFQUF3Qjs7QUFFaEQ7QUFDQTNKLFVBQVEyQixTQUFSO0FBQ0EsRUFKRCxFIiwiZmlsZSI6ImxlLXBsYXllci15b3V0dWJlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvanMvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOGJjNzc1MDlmMjgxNWFhNmU2MjMiLCJtb2R1bGUuZXhwb3J0cyA9ICQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCIkXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuY29uc3QgUGxheWVyID0gd2luZG93LmxlUGxheWVyIHx8IHdpbmRvdy4kLmxlUGxheWVyO1xuY29uc3QgRW50aXR5ID0gUGxheWVyLmdldENvbXBvbmVudCgnRW50aXR5Jyk7XG5cbmNvbnN0IHRyYWNrUHJvdmlkZSA9IHRyYWNrID0+IHtcblx0aWYodHJhY2sgPT0gbnVsbCB8fCB0cmFjay5sYW5ndWFnZUNvZGUgPT0gbnVsbCkge1xuXHRcdHJldHVybiB0cmFja1xuXHR9XG5cdHJldHVybiB7XG5cdFx0bGFuZ3VhZ2UgOiB0cmFjay5sYW5ndWFnZUNvZGUsXG5cdFx0dGl0bGUgOiB0cmFjay5sYW5ndWFnZUNvZGUsXG5cdFx0dG9vbHRpcCA6IHRyYWNrLmxhbmd1YWdlTmFtZSxcblx0XHRuYW1lIDogdHJhY2subGFuZ3VhZ2VDb2RlLFxuXHR9XG59XG5cblxuY2xhc3MgWW91dHViZSBleHRlbmRzIEVudGl0eSB7XG5cdGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucykge1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cdFx0dGhpcy5fcGF1c2VkID0gdHJ1ZTtcblxuXHRcdHRoaXMuc3JjID0gdGhpcy5wbGF5ZXIub3B0aW9ucy5zcmM7XG5cblx0XHR0aGlzLnBsYXllci5hZGRDbGFzcygnbGVwbGF5ZXItLXlvdXR1YmUnKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ2NsaWNrJywgdGhpcy5vbkNsaWNrLmJpbmQodGhpcykpO1xuXHRcdHRoaXMuZWxlbWVudC5vbignZGJsY2xpY2snLCB0aGlzLm9uRGJsY2xpY2suYmluZCh0aGlzKSk7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRzZXQgc3JjKHNyYykge1xuXHRcdGlmKHNyYyA9PSBudWxsKSByZXR1cm47XG5cdFx0aWYodGhpcy5zcmMgJiYgdGhpcy5zcmMudXJsID09PSBzcmMudXJsKSByZXR1cm47XG5cblx0XHRjb25zdCB1cmwgPSBzcmMudXJsIHx8IHNyYy5pZDtcblxuXHRcdHRoaXMudmlkZW9JZCA9IFlvdXR1YmUucGFyc2VVcmwodXJsKTtcblxuXHRcdGlmKHRoaXMucGxheWVyLm9wdGlvbnMucG9zdGVyKSB7XG5cdFx0XHR0aGlzLnBvc3RlciA9IHRoaXMucGxheWVyLm9wdGlvbnMucG9zdGVyXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucG9zdGVyID0gJ2h0dHBzOi8vaW1nLnlvdXR1YmUuY29tL3ZpLycgKyB0aGlzLnZpZGVvSWQgKyAnLzAuanBnJztcblx0XHR9XG5cdH1cblxuXHRvbkNsaWNrKGV2ZW50KSB7XG5cdFx0dGhpcy50cmlnZ2VyKCdjbGljaycpO1xuXHR9XG5cblx0b25EYmxjbGljaygpIHtcblx0XHR0aGlzLnRyaWdnZXIoJ2RibGNsaWNrJyk7XG5cdH1cblxuXHRnZXQgY3VycmVudFRpbWUoKSB7XG5cdFx0cmV0dXJuIHRoaXMueXRQbGF5ZXI/IHRoaXMueXRQbGF5ZXIuZ2V0Q3VycmVudFRpbWUoKSA6IDA7XG5cdH1cblxuXHRzZXQgY3VycmVudFRpbWUodmFsdWUpIHtcblx0XHRpZih0aGlzLmxhc3RTdGF0ZSA9PT0gWVQuUGxheWVyU3RhdGUuUEFVU0VEKSB7XG5cdFx0XHR0aGlzLnRpbWVCZWZvcmVTZWVrID0gdGhpcy5jdXJyZW50VGltZTtcblx0XHR9XG5cblx0XHRpZiAoIXRoaXMuaXNTZWVraW5nKSB7XG5cdFx0XHR0aGlzLndhc1BhdXNlZEJlZm9yZVNlZWsgPSB0aGlzLnBhdXNlZDtcblx0XHR9XG5cblx0XHRsZXQgdGltZTtcblx0XHRpZiAodmFsdWUgPj0gdGhpcy5kdXJhdGlvbikge1xuXHRcdFx0dGltZSA9IHRoaXMuZHVyYXRpb25cblx0XHR9IGVsc2UgaWYgKHZhbHVlIDwgMCkge1xuXHRcdFx0dGltZSA9IDBcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGltZSA9IHZhbHVlO1xuXHRcdH1cblxuXHRcdHRoaXMuaXNTZWVraW5nID0gdHJ1ZTtcblx0XHR0aGlzLnl0UGxheWVyLnNlZWtUbyh0aW1lLCB0cnVlKTtcblx0XHR0aGlzLnBsYXllci50cmlnZ2VyKCd0aW1ldXBkYXRlbG9hZCcsIHsgY3VycmVudFRpbWUgOiB0aW1lIH0pO1xuXG5cdFx0dGhpcy50cmlnZ2VyKCdzZWVraW5nJyk7XG5cblx0XHR0aGlzLmVtaXRUaW1ldXBkYXRlKCk7XG5cdH1cblxuXHRnZXQgZHVyYXRpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMueXRQbGF5ZXIgJiYgdGhpcy55dFBsYXllci5nZXREdXJhdGlvbiA/IHRoaXMueXRQbGF5ZXIuZ2V0RHVyYXRpb24oKSA6IE5hTjtcblx0fVxuXG5cdGdldCBwYXVzZWQoKSB7XG5cdFx0cmV0dXJuICh0aGlzLnl0UGxheWVyKSA/XG5cdFx0XHQodGhpcy5sYXN0U3RhdGUgIT09IFlULlBsYXllclN0YXRlLlBMQVlJTkcgJiYgdGhpcy5sYXN0U3RhdGUgIT09IFlULlBsYXllclN0YXRlLkJVRkZFUklORylcblx0XHRcdDogdHJ1ZTtcblxuXHR9XG5cblxuXHRnZXQgcmF0ZSgpIHtcblx0XHRyZXR1cm4gdGhpcy55dFBsYXllci5nZXRQbGF5YmFja1JhdGUoKTtcblx0fVxuXG5cdHNldCByYXRlKHZhbHVlKSB7XG5cdFx0c3VwZXIucmF0ZSA9IHZhbHVlO1xuXHRcdHRoaXMueXRQbGF5ZXIuc2V0UGxheWJhY2tSYXRlKHZhbHVlKTtcblx0XHR0aGlzLnRyaWdnZXIoJ3JhdGVjaGFuZ2UnKTtcblx0fVxuXG5cdHNldCBtdXRlZCh2YWx1ZSkge1xuXHRcdGlmKHZhbHVlKSB7XG5cdFx0XHR0aGlzLnl0UGxheWVyLm11dGUoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy55dFBsYXllci51bk11dGUoKTtcblx0XHR9XG5cblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdHRoaXMudHJpZ2dlcigndm9sdW1lY2hhbmdlJyk7XG5cdFx0fSwgNTApO1xuXHR9XG5cblx0Z2V0IG11dGVkKCkge1xuXHRcdHJldHVybiB0aGlzLnl0UGxheWVyLmlzTXV0ZWQoKTtcblx0fVxuXG5cdGdldCBzdWJ0aXRsZXMoKSB7XG5cdFx0cmV0dXJuIHRoaXMuY2hlY2tDYXB0aW9uc0V4aXN0KClcblx0XHRcdD8gKHRoaXMueXRQbGF5ZXIuZ2V0T3B0aW9uKCdjYXB0aW9ucycsICd0cmFja2xpc3QnKSB8fCBbXSkubWFwKHRyYWNrUHJvdmlkZSlcblx0XHRcdDogW11cblx0fVxuXG5cdGdldCB0cmFjaygpIHtcblx0XHRpZih0aGlzLl90cmFjayA9PT0gdW5kZWZpbmVkICYmIHRoaXMuY2hlY2tDYXB0aW9uc0V4aXN0KCkpIHtcblx0XHRcdHJldHVybiB0cmFja1Byb3ZpZGUodGhpcy55dFBsYXllci5nZXRPcHRpb24oJ2NhcHRpb25zJywgJ3RyYWNrJykpXG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLl90cmFjaztcblx0XHR9XG5cdH1cblxuXHRzZXQgdHJhY2sodmFsdWUpIHtcblx0XHR0aGlzLl90cmFjayA9IHZhbHVlO1xuXHRcdGlmKHZhbHVlID09PSBudWxsKSB7XG5cdFx0XHR0aGlzLl90cmFja3NEaXNhYmxlID0gdHJ1ZTtcblx0XHRcdC8qIERpc2FibGUgY2FwdGlvbnMgKi9cblx0XHRcdHRoaXMueXRQbGF5ZXIudW5sb2FkTW9kdWxlKCdjYXB0aW9ucycpO1xuXG5cdFx0XHR0aGlzLnRyaWdnZXIoJ3RyYWNrc2NoYW5nZScpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0aGlzLnl0UGxheWVyXG5cdFx0XHQuc2V0T3B0aW9uKCdjYXB0aW9ucycsICd0cmFjaycsIHsgbGFuZ3VhZ2VDb2RlIDogdmFsdWUubmFtZSB9KVxuXHRcdFx0LnNldE9wdGlvbignY2FwdGlvbnMnLCAncmVsb2FkJywgdHJ1ZSk7XG5cblx0XHRpZih0aGlzLl90cmFja3NEaXNhYmxlKSB7XG5cdFx0XHQvKiBFbmFibGUgY2FwdGlvbnMgKi9cblx0XHRcdHRoaXMueXRQbGF5ZXIubG9hZE1vZHVsZSgnY2FwdGlvbnMnKTtcblx0XHR9XG5cdFx0dGhpcy50cmlnZ2VyKCd0cmFja3NjaGFuZ2UnKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGluY3JlYXNlUmF0ZSgpIHtcblx0XHRjb25zdCBpbmRleCA9IHRoaXMuYXZhaWxhYmxlUmF0ZXMuaW5kZXhPZih0aGlzLnJhdGUpO1xuXHRcdGlmKGluZGV4ICsgMSA+PSB0aGlzLmF2YWlsYWJsZVJhdGVzLmxlbmd0aCkgcmV0dXJuO1xuXHRcdHJldHVybiB0aGlzLnJhdGUgPSB0aGlzLmF2YWlsYWJsZVJhdGVzW2luZGV4ICsgMV07XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRkZWNyZWFzZVJhdGUoKSB7XG5cdFx0Y29uc3QgaW5kZXggPSB0aGlzLmF2YWlsYWJsZVJhdGVzLmluZGV4T2YodGhpcy5yYXRlKTtcblx0XHRpZihpbmRleCAtIDEgPCAwKSByZXR1cm47XG5cdFx0cmV0dXJuIHRoaXMucmF0ZSA9IHRoaXMuYXZhaWxhYmxlUmF0ZXNbaW5kZXggLSAxXTtcblx0fVxuXG5cdGdldEF2YWlsYWJsZVF1YWxpdHlMZXZlbHMoKSB7XG5cdFx0Y29uc3QgYXJyID0gdGhpcy55dFBsYXllci5nZXRBdmFpbGFibGVRdWFsaXR5TGV2ZWxzKCk7XG5cdFx0Y29uc3QgaW5kZXggPSBhcnIuaW5kZXhPZignYXV0bycpO1xuXG5cdFx0aWYoaW5kZXggPiAtMSkge1xuXHRcdFx0YXJyLnNwbGljZShpbmRleCwgMSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGFyci5tYXAoaXRlbSA9PiAoe1xuXHRcdFx0dGl0bGUgOiBZb3V0dWJlLlFVQUxJVFlfTkFNRVNbaXRlbV0gfHwgaXRlbSxcblx0XHRcdG5hbWUgOiBpdGVtXG5cdFx0fSkpO1xuXHR9XG5cblxuXHRzZXQgcGxheWJhY2tRdWFsaXR5KG5hbWUpIHtcblx0XHRzdXBlci5wbGF5YmFja1F1YWxpdHkgPSBuYW1lO1xuXHRcdGNvbnN0IHRpbWUgPSB0aGlzLmN1cnJlbnRUaW1lO1xuXHRcdGNvbnN0IHN0YXR1cyA9IHRoaXMueXRQbGF5ZXIuZ2V0UGxheWVyU3RhdGUoKTtcblxuXHRcdGlmKHN0YXR1cyAhPT0gWVQuUGxheWVyU3RhdGUuVU5TVEFSVEVEICYmIHN0YXR1cyAhPT0gWVQuUGxheWVyU3RhdGUuQ1VFRCkge1xuXHRcdFx0dGhpcy55dFBsYXllci5wYXVzZVZpZGVvKCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5fbmV4dFBsYXliYWNrUXVhbGl0eSA9IG5hbWU7XG5cdFx0dGhpcy55dFBsYXllci5zZXRQbGF5YmFja1F1YWxpdHkobmFtZSk7XG5cdFx0dGhpcy55dFBsYXllci5zZWVrVG8odGltZSk7XG5cblx0XHRpZihzdGF0dXMgIT09IFlULlBsYXllclN0YXRlLlBBVVNFRCkge1xuXHRcdFx0dGhpcy55dFBsYXllci5wbGF5VmlkZW8oKTtcblx0XHR9XG5cblx0fVxuXG5cdGdldCBwbGF5YmFja1F1YWxpdHkoKSB7XG5cdFx0aWYgKHRoaXMuX3BsYXliYWNrUXVhbGl0eSA9PSBudWxsKSB7XG5cdFx0XHR0aGlzLl9wbGF5YmFja1F1YWxpdHkgPSB0aGlzLmdldEF2YWlsYWJsZVF1YWxpdHlMZXZlbHMoKVxuXHRcdFx0XHQuZmluZChpdGVtID0+IGl0ZW0ubmFtZSA9PT0gdGhpcy55dFBsYXllci5nZXRQbGF5YmFja1F1YWxpdHkoKSlcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuX3BsYXliYWNrUXVhbGl0eTtcblx0fVxuXG5cdGdldCB2b2x1bWUoKSB7XG5cdFx0cmV0dXJuIHRoaXMueXRQbGF5ZXIgPyB0aGlzLnl0UGxheWVyLmdldFZvbHVtZSgpIC8gMTAwLjAgOiAxO1xuXHR9XG5cblx0c2V0IHZvbHVtZSh2YWx1ZSkge1xuXHRcdHN1cGVyLnZvbHVtZSA9IHZhbHVlO1xuXHRcdHRoaXMueXRQbGF5ZXIuc2V0Vm9sdW1lKHZhbHVlICogMTAwKTtcblxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0dGhpcy50cmlnZ2VyKCd2b2x1bWVjaGFuZ2UnKTtcblx0XHR9LCA1MClcblxuXHR9XG5cblx0c3VwcG9ydHNGdWxsU2NyZWVuKCkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0cGxheSgpIHtcblx0XHR0aGlzLnl0UGxheWVyLnBsYXlWaWRlbygpO1xuXHRcdHRoaXMudHJpZ2dlcigncGxheScpO1xuXHR9XG5cblx0cGF1c2UoKSB7XG5cdFx0dGhpcy55dFBsYXllci5wYXVzZVZpZGVvKCk7XG5cdFx0dGhpcy50cmlnZ2VyKCdwYXVzZScpO1xuXHR9XG5cblxuXHRpbml0KCkge1xuXHRcdHN1cGVyLmluaXQoKTtcblx0XHRyZXR1cm4gWW91dHViZS5hcGlMb2FkZWQoKVxuXHRcdFx0LnRoZW4oKCkgPT4gdGhpcy5pbml0WVRQbGF5ZXIoKSlcblx0fVxuXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0dGhpcy5lbGVtZW50ID0gJCgnPGRpdiAvPicpXG5cdFx0XHQuYWRkQ2xhc3MoJ2xlcGxheWVyX195b3V0dWJlLXdyYXBwZXInKVxuXHRcdFx0LmF0dHIoJ3RhYmluZGV4JywgJzAnKTtcblx0XHR0aGlzLnlvdXR1YmVFbGVtZW50ID0gJCgnPGRpdiAvPicpXG5cdFx0XHQuYWRkQ2xhc3MoJ2xlcGxheWVyX195b3V0dWJlJyk7XG5cdFx0dGhpcy5ibG9ja2VyID0gJCgnPGRpdiAvPicpXG5cdFx0XHQuYWRkQ2xhc3MoJ2xlcGxheWVyX195b3V0dWJlLWJsb2NrZXInKTtcblxuXG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudFxuXHRcdFx0LmFwcGVuZCh0aGlzLmJsb2NrZXIpXG5cdFx0XHQuYXBwZW5kKHRoaXMueW91dHViZUVsZW1lbnQpO1xuXHR9XG5cblx0aW5pdFlUUGxheWVyKCkge1xuXHRcdHRoaXMuX2luaXRQcm9taXNlID0gJC5EZWZlcnJlZCgpO1xuXHRcdGNvbnN0IGdsb2JhbE9wdGlvbnMgPSB0aGlzLnBsYXllci5vcHRpb25zO1xuXHRcdGxldCB5dE9wdGlvbnMgPSB7XG5cdFx0XHRhdXRvcGxheSA6IGdsb2JhbE9wdGlvbnMuYXV0b3BsYXkgPyAxIDogMCxcblx0XHRcdGxvb3AgOiBnbG9iYWxPcHRpb25zLmxvb3AgPyAxIDogMCxcblx0XHRcdGl2X2xvYWRfcG9saWN5IDogMyxcblx0XHRcdGNvbnRyb2xzIDogMCxcblx0XHRcdG1vZGVzdGJyYW5kaW5nIDogMSxcblx0XHRcdHJlbCA6IDAsXG5cdFx0XHRzaG93aW5mbyA6IDAsXG5cdFx0XHRjY19sb2FkX3BvbGljeSA6IDAsXG5cdFx0XHRkaXNhYmxla2IgOiAwLFxuXHRcdFx0ZnMgOiAwLFxuXHRcdFx0c3RhcnQgOiBnbG9iYWxPcHRpb25zLnRpbWVcblx0XHR9O1xuXG5cdFx0WVQucmVhZHkoKCkgPT4ge1xuXHRcdFx0dGhpcy5vcHRpb25zLmN0eC5yZXBsYWNlV2l0aCh0aGlzLmVsZW1lbnQpO1xuXG5cdFx0XHR0aGlzLnl0UGxheWVyID0gbmV3IFlULlBsYXllcih0aGlzLnlvdXR1YmVFbGVtZW50WzBdLCB7XG5cdFx0XHRcdHZpZGVvSWQgOiB0aGlzLnZpZGVvSWQsXG5cdFx0XHRcdHdpZHRoIDogZ2xvYmFsT3B0aW9ucy53aWR0aCB8fCAnMTAwJScsXG5cdFx0XHRcdHBsYXllclZhcnMgOiB5dE9wdGlvbnMsXG5cdFx0XHRcdGV2ZW50cyA6IHtcblx0XHRcdFx0XHRvblJlYWR5IDogdGhpcy5vbllUUFJlYWR5LmJpbmQodGhpcyksXG5cdFx0XHRcdFx0b25TdGF0ZUNoYW5nZSA6IHRoaXMub25ZVFBTdGF0ZUNoYW5nZS5iaW5kKHRoaXMpLFxuXHRcdFx0XHRcdG9uUGxheWJhY2tSYXRlQ2hhbmdlIDogdGhpcy5vbllUUFJhdGVDaGFuZ2UuYmluZCh0aGlzKSxcblx0XHRcdFx0XHRvblBsYXliYWNrUXVhbGl0eUNoYW5nZSA6IHRoaXMub25ZVFBQbGF5YmFja1F1YWxpdHlDaGFuZ2UuYmluZCh0aGlzKVxuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXG5cdFx0fSlcblx0XHRyZXR1cm4gdGhpcy5faW5pdFByb21pc2UucHJvbWlzZSgpO1xuXHR9XG5cblxuXHRzZXRBdmFpbGFibGVQbGF5YmFja1JhdGVzKCkge1xuXHRcdHRoaXMuYXZhaWxhYmxlUmF0ZXMgPSB0aGlzLnl0UGxheWVyLmdldEF2YWlsYWJsZVBsYXliYWNrUmF0ZXMoKTtcblx0XHR0aGlzLnJhdGVNaW4gPSB0aGlzLmF2YWlsYWJsZVJhdGVzWzBdO1xuXHRcdHRoaXMucmF0ZU1heCA9IHRoaXMuYXZhaWxhYmxlUmF0ZXNbdGhpcy5hdmFpbGFibGVSYXRlcy5sZW5ndGggLSAxXTtcblx0fVxuXG5cdG9uWVRQUmVhZHkoZSkge1xuXHRcdHRoaXMuX2luaXRQcm9taXNlLnJlc29sdmUoKTtcblx0XHR0aGlzLl9pbml0UmF0ZSgpO1xuXHRcdHRoaXMuX2luaXRWb2x1bWUoKTtcblx0XHR0aGlzLnNldEF2YWlsYWJsZVBsYXliYWNrUmF0ZXMoKTtcblx0fVxuXG5cdG9uWVRQUmF0ZUNoYW5nZShlKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCdyYXRlY2hhbmdlJyk7XG5cdH1cblxuXHRvbllUUFBsYXliYWNrUXVhbGl0eUNoYW5nZShlKSB7XG5cdFx0Y29uc3QgZGF0YSA9IGUuZGF0YTtcblx0XHR0aGlzLl9wbGF5YmFja1F1YWxpdHkgPSB0aGlzLmdldEF2YWlsYWJsZVF1YWxpdHlMZXZlbHMoKS5maW5kKGl0ZW0gPT4gaXRlbS5uYW1lID09PSBkYXRhKTtcblx0XHR0aGlzLnRyaWdnZXIoJ3F1YWxpdHljaGFuZ2UnLCB0aGlzLl9wbGF5YmFja1F1YWxpdHkpO1xuXHR9XG5cblx0b25ZVFBTdGF0ZUNoYW5nZShlKSB7XG5cdFx0Y29uc3Qgc3RhdGUgPSBlLmRhdGE7XG5cdFx0aWYoc3RhdGUgPT09IHRoaXMubGFzdFN0YXRlKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5sYXN0U3RhdGUgPSBzdGF0ZTtcblx0XHRzd2l0Y2goc3RhdGUpIHtcblx0XHRjYXNlIFlULlBsYXllclN0YXRlLlVOU1RBUlRFRDpcblx0XHRcdHRoaXMudHJpZ2dlcignbG9hZHN0YXJ0Jyk7XG5cdFx0XHR0aGlzLnRyaWdnZXIoJ2xvYWRlZG1ldGFkYXRhJyk7XG5cdFx0XHR0aGlzLnRyaWdnZXIoJ2R1cmF0aW9uY2hhbmdlJyk7XG5cdFx0XHR0aGlzLnRyaWdnZXIoJ3JhdGVjaGFuZ2UnKTtcblx0XHRcdHRoaXMudHJpZ2dlcigndm9sdW1lY2hhbmdlJyk7XG5cdFx0XHR0aGlzLnRyaWdnZXIoJ3RyYWNrc2NoYW5nZScpO1xuXHRcdFx0aWYodGhpcy5wbGF5ZXIub3B0aW9ucy5hdXRvcGxheSkge1xuXHRcdFx0XHR0aGlzLnRyaWdnZXIoJ3BsYXknKTtcblx0XHRcdH1cblx0XHRcdGJyZWFrO1xuXG5cdFx0Y2FzZSBZVC5QbGF5ZXJTdGF0ZS5FTkRFRDpcblx0XHRcdHRoaXMudHJpZ2dlcigncGF1c2UnKTtcblx0XHRcdHRoaXMudHJpZ2dlcignZW5kZWQnKTtcblx0XHRcdGJyZWFrO1xuXG5cdFx0Y2FzZSBZVC5QbGF5ZXJTdGF0ZS5QTEFZSU5HOlxuXHRcdFx0dGhpcy50cmlnZ2VyKCd0aW1ldXBkYXRlJyk7XG5cdFx0XHR0aGlzLnRyaWdnZXIoJ2R1cmF0aW9uY2hhbmdlJyk7XG5cdFx0XHR0aGlzLnRyaWdnZXIoJ3BsYXlpbmcnKTtcblxuXHRcdFx0dGhpcy55dFBsYXllci5zZXRQbGF5YmFja1F1YWxpdHkodGhpcy5fbmV4dFBsYXliYWNrUXVhbGl0eSk7XG5cblx0XHRcdGlmKHRoaXMuaXNTZWVraW5nKSB7XG5cdFx0XHRcdHRoaXMub25TZWVrZWQoKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5sb2FkQ2FwdGlvbnMoKVxuXHRcdFx0dGhpcy5lbWl0VGltZXVwZGF0ZSgpO1xuXHRcdFx0YnJlYWs7XG5cblx0XHRjYXNlIFlULlBsYXllclN0YXRlLlBBVVNFRDpcblx0XHRcdHRoaXMudHJpZ2dlcignY2FucGxheScpO1xuXG5cdFx0XHRpZih0aGlzLmlzU2Vla2luZykge1xuXHRcdFx0XHR0aGlzLm9uU2Vla2VkKCk7XG5cdFx0XHR9XG5cdFx0XHRicmVhaztcblxuXHRcdGNhc2UgWVQuUGxheWVyU3RhdGUuQlVGRkVSSU5HOlxuXHRcdFx0dGhpcy5wbGF5ZXIudHJpZ2dlcigndGltZXVwZGF0ZScpO1xuXHRcdFx0dGhpcy5wbGF5ZXIudHJpZ2dlcignd2FpdGluZycpO1xuXG5cdFx0XHR0aGlzLnl0UGxheWVyLnNldFBsYXliYWNrUXVhbGl0eSh0aGlzLl9uZXh0UGxheWJhY2tRdWFsaXR5KTtcblxuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXG5cdH1cblxuXHRvblNlZWtlZCgpIHtcblx0XHRjbGVhckludGVydmFsKHRoaXMuc2Vla2luZ0ludGVydmFsKTtcblx0XHR0aGlzLmlzU2Vla2luZyA9IGZhbHNlO1xuXG5cdFx0aWYgKHRoaXMud2FzUGF1c2VkQmVmb3JlU2Vlaykge1xuXHRcdFx0dGhpcy5wYXVzZSgpO1xuXHRcdH1cblxuXHRcdHRoaXMudHJpZ2dlcignc2Vla2VkJyk7XG5cdH1cblxuXHRlbWl0VGltZXVwZGF0ZSgpIHtcblx0XHRjbGVhckludGVydmFsKHRoaXMuc2Vla2luZ0ludGVydmFsKTtcblxuXHRcdHRoaXMuc2Vla2luZ0ludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuXHRcdFx0aWYodGhpcy5sYXN0U3RhdGUgPT09IFlULlBsYXllclN0YXRlLlBBVVNFRCkge1xuXHRcdFx0XHRjbGVhckludGVydmFsKHRoaXMuc2Vla2luZ0ludGVydmFsKTtcblx0XHRcdH0gZWxzZSBpZih0aGlzLmN1cnJlbnRUaW1lICE9PSB0aGlzLnRpbWVCZWZvcmVTZWVrKSB7XG5cdFx0XHRcdHRoaXMudHJpZ2dlcigndGltZXVwZGF0ZScpO1xuXHRcdFx0fVxuXHRcdH0sIDI1MClcblx0fVxuXG5cdGxvYWRDYXB0aW9ucygpIHtcblx0XHRjb25zdCBlbXB0eVRyYWNrbGlzdCA9ICgpID0+ICh0aGlzLnN1YnRpdGxlcyA9PSBudWxsIHx8IHRoaXMuc3VidGl0bGVzLmxlbmd0aCA9PT0gMCk7XG5cblx0XHRjbGVhckludGVydmFsKHRoaXMuX2xvYWRDYXB0aW9uc1dhdGNoZXIpO1xuXHRcdGlmKFxuXHRcdFx0IXRoaXMuX3RyYWNrc0Rpc2FibGUgJiZcblx0XHRcdHRoaXMuY2hlY2tDYXB0aW9uc0V4aXN0KCkgJiZcblx0XHRcdGVtcHR5VHJhY2tsaXN0KClcblx0XHQpIHtcblx0XHRcdHRoaXMueXRQbGF5ZXIubG9hZE1vZHVsZSgnY2FwdGlvbnMnKTtcblxuXHRcdFx0dGhpcy5fbG9hZENhcHRpb25zV2F0Y2hlciA9IHNldEludGVydmFsKCgpID0+IHtcblx0XHRcdFx0aWYoIWVtcHR5VHJhY2tsaXN0KCkgJiYgdGhpcy5jaGVja0NhcHRpb25zRXhpc3QoKSkge1xuXHRcdFx0XHRcdHRoaXMudHJpZ2dlcigndHJhY2tzY2hhbmdlJyk7XG5cdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLl9sb2FkQ2FwdGlvbnNXYXRjaGVyKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgMjUwKVxuXHRcdH1cblx0fVxuXG5cdGNoZWNrQ2FwdGlvbnNFeGlzdCgpIHtcblx0XHR0cnkge1xuXHRcdFx0cmV0dXJuIHRoaXMueXRQbGF5ZXIuZ2V0T3B0aW9ucygnY2FwdGlvbnMnKSAhPSBudWxsO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblx0c3RhdGljIHBhcnNlVXJsKHVybCkge1xuXHRcdGxldCByZXN1bHQgPSBudWxsO1xuXHRcdGNvbnN0IHJlZ2V4ID0gWW91dHViZS5VUkxfUkVHRVg7XG5cdFx0Y29uc3QgbWF0Y2ggPSB1cmwubWF0Y2gocmVnZXgpO1xuXHRcdGlmKHVybC5sZW5ndGggPT09IDExKSB7XG5cdFx0XHRyZXN1bHQgPSB1cmw7XG5cdFx0fSBlbHNlIGlmKG1hdGNoICYmIG1hdGNoWzJdLmxlbmd0aCA9PT0gMTEpIHtcblx0XHRcdHJlc3VsdCA9IG1hdGNoWzJdO1xuXHRcdH1cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG59XG5cbllvdXR1YmUuVVJMX1JFR0VYID0gL14uKih5b3V0dS5iZVxcL3x2XFwvfHVcXC9cXHdcXC98ZW1iZWRcXC98d2F0Y2hcXD92PXxcXCZ2PSkoW14jXFwmXFw/XSopLiovO1xuXG5Zb3V0dWJlLlFVQUxJVFlfTkFNRVMgPSB7XG5cdHRpbnkgOiAnMTQwcCcsXG5cdHNtYWxsIDogJzI0MHAnLFxuXHRtZWRpdW0gOiAnMzYwcCcsXG5cdGxhcmdlIDogJzQ4MHAnLFxuXHRoZDcyMCA6ICc3MjBwJyxcblx0aGQxMDgwIDogJzEwODBwJyxcblx0aGlnaHJlcyA6ICdIRCcsXG5cdGF1dG8gOiAn0JDQstGC0L4nXG59XG5cbllvdXR1YmUuYXBpTG9hZGVkID0gZnVuY3Rpb24oKSB7XG5cdGlmKHRoaXMuX2xvYWRlZCkgcmV0dXJuICQuRGVmZXJyZWQoKS5yZXNvbHZlKCk7XG5cblx0cmV0dXJuICQuZ2V0U2NyaXB0KCdodHRwczovL3d3dy55b3V0dWJlLmNvbS9pZnJhbWVfYXBpJylcblx0XHQudGhlbigoKSA9PiB0aGlzLl9sb2FkZWQgPSB0cnVlKVxufVxuXG5QbGF5ZXIucmVnaXN0ZXJDb21wb25lbnQoJ1lvdXR1YmUnLCBZb3V0dWJlKTtcblxuUGxheWVyLnByZXNldCgneW91dHViZScsIHtcblx0b3B0aW9ucyA6IHtcblx0XHRlbnRpdHkgOiAnWW91dHViZScsXG5cdFx0Y29udHJvbHMgOiB7XG5cdFx0XHRjb21tb24gOiBbXG5cdFx0XHRcdFsncGxheScsICd2b2x1bWUnLCAndGltZWxpbmUnLCAncmF0ZScsICdiYWNrd2FyZCcsICdzb3VyY2UnLCAnc3VidGl0bGUnLCAnZGl2aWRlcicsICdzZWN0aW9uJywgJ2Z1bGxzY3JlZW4nXSxcblx0XHRcdFx0W11cblx0XHRcdF0sXG5cdFx0XHRmdWxsc2NyZWVuIDogW1xuXHRcdFx0XHRbJ3BsYXknLCAndm9sdW1lJywgJ3RpbWVsaW5lJywgJ3JhdGUnLCAnYmFja3dhcmQnLCAnc291cmNlJywgJ3N1YnRpdGxlJywgJ2RpdmlkZXInLCAnc2VjdGlvbicsICdmdWxsc2NyZWVuJ10sXG5cdFx0XHRdXG5cdFx0fVxuXHR9LFxufSk7XG5cblBsYXllci5wbHVnaW4oJ3lvdXR1YmUnLCBmdW5jdGlvbihwbHVnaW5PcHRpb25zKSB7XG5cblx0LyogZ2xvYmFsIFlUICovXG5cdFlvdXR1YmUuYXBpTG9hZGVkKClcbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvcGx1Z2lucy9sZS1wbGF5ZXIteW91dHViZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=