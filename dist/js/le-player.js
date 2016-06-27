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

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _control = __webpack_require__(1);

	var _control2 = _interopRequireDefault(_control);

	var _icon = __webpack_require__(4);

	var _icon2 = _interopRequireDefault(_icon);

	var _controlFactory = __webpack_require__(5);

	var _controlFactory2 = _interopRequireDefault(_controlFactory);

	var _cookie = __webpack_require__(9);

	var _cookie2 = _interopRequireDefault(_cookie);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	(function ($) {

		/**
	  * @class Player
	  * @param {jQuery} element Element when player will init
	  * @param {Object} [options]
	  * @param {Boolean} [options.autoplay=false]
	  * @param {String|Number} [options.height='auto']
	  * @param {String} [options.width='auto']
	  * @param {Boolean} [options.loop=false]
	  * @param {Boolean} [options.muted=false]
	  * @param {String} [options.preload='metadata'] Can be ('auto'|'metadata'|'none')
	  * @param {String} [options.poster] Path of image
	  * @param {String} [options.svgPath] Path for svg sprite
	  * @param {Number} [options.fullscreen.hideTimelineTime=7000]
	  * @param {Object} [options.rate]
	  * @param {Number} [options.rate.step=0.25]
	  * @param {Number} [options.rate.min=0.5] Min of rate
	  * @param {Number} [options.rate.max=4.0] Max of rate
	  * @param {Number} [options.rate.default=1]
	  * @param {Object} [options.playback.step]
	  * @param {Nubmer} [options.playback.step.short=5]
	  * @param {Nubmer} [options.playback.step.medium=30]
	  * @param {Nubmer} [options.playback.step.long=60]
	  * @param {Obejct} [options.controls] Object of controls
	  * @param {String[]} [options.controls.common] Array of controls for default view
	  * @param {String[]} [options.controls.fullscreen] Array of control for fullsreen view
	  * @param {Object} [options.volume] Volume's options
	  * @param {Number} [options.volume.default=0.4] Default volume
	  * @param {Number} [options.volume.mutelimit=0.05] Delta when volume is muted
	  * @param {Number} [options.volume.step=0.05]
	  * @param {Object} [options.keybinding]
	  */
		var Player = function Player(element, opts) {
			var C_BACKWARD = 'backward';
			var C_DIVIDER = 'divider';
			var C_DOWNLOAD = 'download';
			var C_FORWARD = 'forward';
			var C_FULLSCREEN = 'fullscreen';
			var C_PLAY = 'play';
			var C_RATE = 'rate';
			var C_SOURCE = 'source';
			var C_SUBTITLE = 'subtitle';
			var C_TIMELINE = 'timeline';
			var C_VOLUME = 'volume';
			var C_SECTION = "section";

			var options = this.options = $.extend({}, {
				autoplay: false,
				height: 'auto',
				loop: false,
				muted: false,
				preload: 'metadata',
				poster: null,
				svgPath: '../dist/svg/svg-defs.svg',
				width: 'auto',
				fullscreen: {
					hideTimelineTime: 7000
				},
				rate: {
					step: 0.25,
					min: 0.5,
					max: 4.0,
					'default': 1
				},
				playback: {
					step: {
						short: 5,
						medium: 30,
						long: 60
					}
				},
				controls: {
					common: [['play', 'volume', 'divider', 'timeline', 'divider', 'section', 'divider', 'fullscreen'], ['rate', 'divider', 'backward', 'divider', 'source', 'divider', 'subtitle', 'divider', 'download', 'divider', _controlFactory.C_KEYBINDING_INFO]],
					fullscreen: [['play', 'volume', 'divider', 'timeline', 'divider', 'rate', 'divider', _controlFactory.C_KEYBINDING_INFO, 'divider', 'backward', 'divider', 'source', 'divider', 'subtitle', 'divider', 'download', 'divider', 'fullscreen']]
				},
				volume: {
					default: 0.4,
					mutelimit: 0.05,
					step: 0.1
				},
				keyBinding: {
					play: {
						key: 32,
						info: ['Space'],
						description: 'Начать проигрывание / поставить на паузу',
						fn: function fn(video) {
							video.togglePlay();
						}
					},
					backwardMedium: {
						key: 37,
						info: ['←'],
						description: 'Перемотать на 30 секунд назад',
						fn: function fn(video) {
							video.currentTime -= options.playback.step.medium;
						}
					},
					forwardMedium: {
						key: 39,
						info: ['→'],
						description: 'Перемотать на 30 секунд вперёд',
						fn: function fn(video) {
							video.currentTime += options.playback.step.medium;
						}
					},
					backwardShort: {
						shiftKey: true,
						info: ['Shift', '←'],
						description: 'Перемотать на 5 секунд назад',
						key: 37,
						fn: function fn(video) {
							video.currentTime -= options.playback.step.short;
						}
					},
					forwardShort: {
						shiftKey: true,
						key: 39,
						info: ['Shift', '→'],
						description: 'Перемотать на 5 секунд назад',
						fn: function fn(video) {
							video.currentTime += options.playback.step.short;
						}
					},

					volumeUp: {
						key: 38,
						info: ['↑'],
						description: 'Увеличить громкость',
						fn: function fn(video) {
							video.volume += options.volume.step;
						}
					},

					volumeDown: {
						key: 40,
						info: ['↓'],
						description: 'Уменьшить громкость',
						fn: function fn(video) {
							video.volume -= options.volume.step;
						}
					}
				}
			}, opts);

			/**
	   * This class manages FullScreen API.
	   * @TODO: add fullscreenerror handler.
	   */

			var Fullscreen = function () {
				function Fullscreen() {
					_classCallCheck(this, Fullscreen);

					this.player = player;
					this._collection = controls.fullscreen;
					this._hideTimeout = null;
					this.fullscreenEnabled = false;
				}

				/**
	    * @returns {boolean} Whether browser supports fullscreen mode.
	    */


				_createClass(Fullscreen, [{
					key: 'enabled',
					value: function enabled() {
						return !!(document.fullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled || document.webkitSupportsFullscreen || document.webkitFullscreenEnabled || document.createElement('video').webkitRequestFullScreen);
					}
				}, {
					key: 'init',
					value: function init() {
						var _this = this;

						if (!this.enabled()) {
							return null;
						}
						// Fullscreen change handlers.
						$(document).on({

							'fullscreenchange': function fullscreenchange(e) {
								_this.toggleElements(!!(document.fullScreen || document.fullscreenElement));
							},

							'webkitfullscreenchange': function webkitfullscreenchange(e) {
								_this.toggleElements(!!document.webkitIsFullScreen);
							},

							'mozfullscreenchange': function mozfullscreenchange(e) {
								_this.toggleElements(!!document.mozFullScreen);
							},

							'msfullscreenchange': function msfullscreenchange(e) {
								_this.toggleElements(!!document.msFullscreenElement);
							},

							'webkitbeginfullscreen': function webkitbeginfullscreen(e) {
								_this.toggleElements(true);
							},

							'webkitendfullscreen': function webkitendfullscreen(e) {
								_this.toggleElements(false);
							}
						});
					}

					/**
	     * @returns {boolean} Whether browser is in fullscreen mode.
	     */

				}, {
					key: 'is',
					value: function is() {
						return !!(document.fullScreen || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || document.fullscreenElement || this.fullscreenEnabled);
					}
				}, {
					key: 'showElements',
					value: function showElements() {
						var _this2 = this;

						this.player.trigger('fullscreenchange');
						container.addClass('fullscreen');
						controls.fullscreen.show();
						controls.common.hide();
						controls.mini.hide();

						clearTimeout(this._hideTimeout);
						this._hideTimeout = setTimeout(function () {
							_this2._collection.element.hide();
						}, options.fullscreen.hideTimelineTime);

						$(container).on({
							'mousemove.leplayer.fullscreen-hide-timeline': function mousemoveLeplayerFullscreenHideTimeline(e) {
								if (!$(e.currentTarget).hasClass('fullscreen')) return false;
								clearTimeout(_this2._hideTimeout);
								_this2._collection.element.show();
								_this2._hideTimeout = setTimeout(function () {
									_this2._collection.element.hide();
								}, options.fullscreen.hideTimelineTime);
							}
						});
					}
				}, {
					key: 'hideElements',
					value: function hideElements() {
						this.player.trigger('fullscreenchange');
						container.removeClass('fullscreen');
						controls.fullscreen.hide();
						controls.common.show();
						controls.mini.hide();
						clearTimeout(this._hideTimeout);
						$(container).off('.leplayer.fullscreen-hide-timeline');
					}
				}, {
					key: 'toggle',
					value: function toggle() {
						var containerEl = container[0];
						if (this.is()) {
							if (document.exitFullscreen) document.exitFullscreen();else if (document.mozCancelFullScreen) document.mozCancelFullScreen();else if (document.webkitCancelFullScreen) document.webkitCancelFullScreen();else if (document.msExitFullscreen) document.msExitFullscreen();else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
							this.hideElements(); // @TODO: make this only if fullscreen fired.
							this.fullscreenEnabled = false;
						} else {
							if (containerEl.requestFullScreen) containerEl.requestFullScreen();else if (containerEl.webkitRequestFullScreen) containerEl.webkitRequestFullScreen();else if (containerEl.mozRequestFullScreen) containerEl.mozRequestFullScreen();else if (containerEl.msExitFullscreen) containerEl.msRequestFullscreen();
							this.showElements(); // @TODO: make this only if fullscreen fired.
							this.fullscreEnabled = true;
						}
					}

					/**
	     * Update DOM structure according to current state.
	     */

				}, {
					key: 'toggleElements',
					value: function toggleElements(show) {
						if (!!show) {
							this.showElements();
						} else {
							this.hideElements();
						}
					}
				}]);

				return Fullscreen;
			}();

			var Video = function () {
				function Video(ctx) {
					_classCallCheck(this, Video);

					this.player = player;
					this._ctx = ctx;
					this._video = ctx[0];
					this.fullscreen = new Fullscreen();
					this.subtitles = [];
					this.bufferRanges = [];
					this.playbackRate = this._video.playbackRate;
				}

				_createClass(Video, [{
					key: 'init',
					value: function init() {
						var _this3 = this;

						var dfd = $.Deferred();
						this._initSubtitles();
						this._initVideo().done(function () {
							_this3.fullscreen.init();
							controls.init();
							_this3._initRate();
							_this3._initVolume();
							dfd.resolve();
						});
						this._initCustomEvents();
						this._initHtmlEvents();

						dfd.notify();
						return dfd.promise();
					}
				}, {
					key: 'togglePlay',
					value: function togglePlay() {
						/** In safari it doesn't work */
						// if (this._video.readyState < 2) {
						// 	overlay.hide();
						// 	_showNotification('Error!');
						// 	return;
						// }
						if (!this._video.played || this._video.paused) {
							this.play();
						} else {
							this.pause();
						}
					}
				}, {
					key: 'seek',
					value: function seek(time) {
						this._video.currentTime = time;
					}
				}, {
					key: 'play',
					value: function play() {
						overlay.hide();
						controls.play();
						return this._video.play();
					}
				}, {
					key: 'pause',
					value: function pause() {
						overlay.show();
						controls.pause();
						return this._video.pause();
					}
				}, {
					key: 'trigger',
					value: function trigger(eventName) {
						var _player$trigger;

						for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
							args[_key - 1] = arguments[_key];
						}

						(_player$trigger = this.player.trigger).call.apply(_player$trigger, [$(this._video), 'leplayer_' + eventName].concat(args));
						return this;
					}
				}, {
					key: 'on',
					value: function on(eventName) {
						var _$$on;

						for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
							args[_key2 - 1] = arguments[_key2];
						}

						(_$$on = $(this._video).on).call.apply(_$$on, [$(this._video), 'leplayer_' + eventName].concat(args));
						return this;
					}
				}, {
					key: '_initRate',
					value: function _initRate() {
						this.rate = _cookie2.default.get('rate', options.rate.default);
					}
				}, {
					key: '_initVolume',
					value: function _initVolume() {
						this.volume = _cookie2.default.get('volume', options.volume.default);
					}
				}, {
					key: '_initSubtitles',
					value: function _initSubtitles() {
						var _self = this;
						this._ctx.children('track[kind="subtitles"]').each(function () {
							var language = $(this).attr('srclang');
							var title = $(this).attr('label');
							var src = $(this).attr('src');
							if (title.length > 0 && src.length > 0) {
								_self.subtitles.push({
									title: title,
									src: src,
									language: language
								});
							}
						});
					}
				}, {
					key: '_initVideo',
					value: function _initVideo() {
						var _this4 = this;

						var dfd = $.Deferred();
						if (this._video.readyState > HTMLMediaElement.HAVE_NOTHING) {
							dfd.resolve();
							this._onLoadedMetaData();
						} else {
							$(this._video).one('loadedmetadata', function (e) {
								dfd.resolve();
								_this4._onLoadedMetaData();
							});
						}
						dfd.notify();
						return dfd.promise();
					}
				}, {
					key: '_onLoadedMetaData',
					value: function _onLoadedMetaData() {
						var _self = this;

						container.css('width', '100%').css('max-width', this._video.clientWidth + 'px');

						// This is generally for Firefox only
						// because it somehow resets track list
						// for video element after DOM manipulation.

						if (this._video.textTracks.length == 0 && this.subtitles.length > 0) {
							this._ctx.children('track[kind="subtitles"]').remove();
							for (var i in this.subtitles) {
								if (this.subtitles.hasOwnProperty(i)) {
									this._ctx.append($('<track/>').attr('label', this.subtitles[i].title).attr('src', this.subtitles[i].src).attr('srclang', this.subtitles[i].language).attr('id', this.subtitles[i].language).attr('kind', 'subtitles'));
								}
							}
						}
						// this.trigger('loadedmetadata')
					}
				}, {
					key: '_initHtmlEvents',
					value: function _initHtmlEvents() {
						var _this5 = this;

						var mediaElement = $(this._video);
						var timerId = null;

						mediaElement.on({

							'timeupdate': function timeupdate(e) {
								controls.moveTimeMarker();
								_this5.player.trigger('timeupdate', { time: video.currentTime });
							},

							'ended': function ended() {
								_this5.pause();
								_this5.player.trigger('ended');
							},

							'dblclick': function dblclick() {
								clearTimeout(timerId);
								_this5.fullscreen.toggle();
							},

							'click': function click() {
								clearTimeout(timerId);
								timerId = setTimeout(function () {
									container.focus();
									_this5.togglePlay();
								}, 300);
							},

							'volumechange': function volumechange(e) {
								_this5.player.trigger('volumechange', { volume: _this5.volume });
							},

							'canplay': function canplay(e) {
								loader.hide();
								_this5.player.trigger('canplay');
							},

							'waiting': function waiting(e) {
								loader.show();
								_this5.player.trigger('waiting');
							}

						});
					}
				}, {
					key: '_initCustomEvents',
					value: function _initCustomEvents() {
						var mediaElement = $(this._video);
					}
				}, {
					key: 'currentTime',
					get: function get() {
						return this._video.currentTime;
					},
					set: function set(value) {
						if (value > this.duration) {
							this._video.currentTime = this.duration;
						} else if (value < 0) {
							this._video.currentTime = 0;
						} else {
							this._video.currentTime = value;
						}
					}
				}, {
					key: 'duration',
					get: function get() {
						return this._video.duration;
					}
				}, {
					key: 'height',
					get: function get() {
						return this._video.clientHeight;
					}
				}, {
					key: 'rate',
					get: function get() {
						return this._video.playbackRate;
					},
					set: function set(value) {
						if (value <= options.rate.max && value >= options.rate.min) {
							this._video.playbackRate = value;
						}
						/** TODO: Chanche controls.rate in event handler */
						controls.rate = this._video.playbackRate;
					}
				}, {
					key: 'width',
					get: function get() {
						return this._video.clientWidth;
					}
				}, {
					key: 'source',
					set: function set(value) {
						var _this6 = this;

						var time = this._video.currentTime;
						var rate = this._video.playbackRate;
						var stop = !this._video.played || this._video.paused;
						this._ctx.attr('src', value);
						this._video = this._ctx[0];
						this._video.playbackRate = rate;
						this._video.currentTime = time;
						if (stop) this.pause();else this.play();

						// @TODO make this right way
						setTimeout(function () {
							controls.totalTime = secondsToTime(_this6._video.duration);
						}, 100);
					}
				}, {
					key: 'track',
					set: function set(value) {
						for (var i = 0; i < this._video.textTracks.length; i++) {
							if (this._video.textTracks[i].language == value) this._video.textTracks[i].mode = 'showing';else this._video.textTracks[i].mode = 'hidden';
						}
					}
				}, {
					key: 'volume',
					get: function get() {
						return this._video.volume;
					},
					set: function set(value) {
						if (value > 1) {
							this._video.volume = 1;
						} else if (value < options.volume.mutelimit) {
							this._video.volume = 0;
						} else {
							this._video.volume = value;
						}
						this._video.mute = value < options.volume.mutelimit;
					}
				}, {
					key: 'buffered',
					get: function get() {
						return this._video.buffered;
					}
				}, {
					key: 'loaded',
					get: function get() {
						var loaded = [];
						var media = this._video;
						/** FF4+, Chrome */
						if (media.buffered && media.buffered.end && media.duration > 0) {
							for (var i = 0; i < media.buffered.length; i++) {
								var start = media.buffered.start(i) / media.duration;
								var end = media.buffered.end(i) / media.duration;
								var segment = [start, end];
								loaded.push(segment);
							}
						}
						/** Safari 5, Webkit head, FF3.6, Chrome 6, IE 7/8 */
						else if (media.bytesTotal != null && media.bytesTotal > 0 && media.bufferedBytes != null) {
								loaded.push([0, media.bufferedBytes / media.bytesTotal]);
							}
						return loaded;
					}
				}, {
					key: 'loadedSize',
					get: function get() {
						var START = 0;
						var END = 1;
						var sum = 0;
						this.loaded.forEach(function (item) {
							sum += item[END] - item[START];
						});
						return sum;
					}
				}]);

				return Video;
			}();

			var ControlCollection = function () {
				function ControlCollection(name, active) {
					_classCallCheck(this, ControlCollection);

					this.items = {};
					this.active = active || false;
					this.name = name;
				}

				_createClass(ControlCollection, [{
					key: 'disable',
					value: function disable() {
						for (var i in this.items) {
							if (!this.items.hasOwnProperty(i)) continue;
							this.items[i].disable();
						}
					}
				}, {
					key: 'add',
					value: function add(name) {
						if (name == C_DIVIDER) {
							return (0, _controlFactory2.default)(player, name);
						} else {
							this.items[name] = (0, _controlFactory2.default)(player, name);
							return this.items[name].element;
						}
					}
				}, {
					key: 'has',
					value: function has(name) {
						return _typeof(this.items[name]) == 'object';
					}
				}, {
					key: 'hide',
					value: function hide() {
						this.element.hide();
					}
				}, {
					key: 'init',
					value: function init() {
						this.element = container.find('.controls-' + this.name);
						for (var i in this.items) {
							if (!this.items.hasOwnProperty(i)) continue;
							$.isFunction(this.items[i].init) && this.items[i].init();
						}
						this.initTimeline();
						//this.totalTime = secondsToTime(video.duration);
						this.download = sources[0].src;
					}
				}, {
					key: 'initTimeline',
					value: function initTimeline() {
						if (this.has(C_TIMELINE)) {
							if (this.items.timeline.element.width() < 20) this.items.timeline.element.hide();
						}
					}
				}, {
					key: 'moveTimeMarker',
					value: function moveTimeMarker() {
						if (this.has(C_TIMELINE)) this.items.timeline.move();
					}
				}, {
					key: 'pause',
					value: function pause() {
						if (this.has(C_PLAY)) this.items.play.pause();
					}
				}, {
					key: 'play',
					value: function play() {
						if (this.has(C_PLAY)) this.items.play.play();
					}
				}, {
					key: 'show',
					value: function show() {
						container.find('.controls-' + this.name).show();
					}
				}, {
					key: 'download',
					set: function set(value) {
						if (this.has(C_DOWNLOAD)) {
							this.items.download.link = value;
						}
					}
				}, {
					key: 'rate',
					set: function set(value) {
						if (this.has(C_RATE)) {
							this.items.rate.value = value;
						}
					}
				}, {
					key: 'source',
					set: function set(value) {
						if (this.has(C_SOURCE)) {
							this.items.source.set(value);
						}
					}
				}, {
					key: 'totalTime',
					set: function set(value) {
						if (this.has(C_TIMELINE)) this.items.timeline.totalTime.text = value;
					}
				}, {
					key: 'volume',
					set: function set(value) {
						if (this.has(C_VOLUME)) this.items.volume.value = value;
					}
				}]);

				return ControlCollection;
			}();

			var Controls = function () {
				function Controls() {
					_classCallCheck(this, Controls);

					this.collections = {
						common: new ControlCollection('common'),
						mini: new ControlCollection('mini'),
						fullscreen: new ControlCollection('fullscreen')
					};
					this.collections.common.active = true;
				}

				_createClass(Controls, [{
					key: 'disable',
					value: function disable() {
						for (var i in this.collections) {
							this.collections[i].disable();
						}
					}
				}, {
					key: 'has',
					value: function has(name) {
						return _typeof(this.collections[name]) == 'object';
					}
				}, {
					key: 'init',
					value: function init() {
						for (var i in this.collections) {
							this.collections[i].init();
						}
						this.collections.common.show();
						this.collections.mini.hide();
						this.collections.fullscreen.hide();
					}
				}, {
					key: 'moveTimeMarker',
					value: function moveTimeMarker() {
						for (var i in this.collections) {
							this.collections[i].moveTimeMarker();
						}
					}
				}, {
					key: 'pause',
					value: function pause() {
						for (var i in this.collections) {
							this.collections[i].pause();
						}
					}
				}, {
					key: 'play',
					value: function play() {
						for (var i in this.collections) {
							this.collections[i].play();
						}
					}
				}, {
					key: 'common',
					get: function get() {
						return this.collections.common;
					}
				}, {
					key: 'fullscreen',
					get: function get() {
						return this.collections.fullscreen;
					}
				}, {
					key: 'mini',
					get: function get() {
						return this.collections.mini;
					}
				}, {
					key: 'download',
					set: function set(value) {
						for (var i in this.collections) {
							this.collections[i].download = value;
						}
					}
				}, {
					key: 'rate',
					set: function set(value) {
						_cookie2.default.set('rate', value);
						for (var i in this.collections) {
							this.collections[i].rate = value;
						}
					}
				}, {
					key: 'source',
					set: function set(value) {
						for (var i in this.collections) {
							this.collections[i].source = value;
						}
					}
				}, {
					key: 'totalTime',
					set: function set(value) {
						for (var i in this.collections) {
							this.collections[i].totalTime = value;
						}
					}
				}, {
					key: 'volume',
					set: function set(value) {
						for (var i in this.collections) {
							this.collections[i].volume = value;
						}
						_cookie2.default.set('volume', value);
					}
				}]);

				return Controls;
			}();

			var Sections = function () {
				function Sections(items) {
					var _this7 = this;

					_classCallCheck(this, Sections);

					this.player = player;

					this.items = items;
					for (var i = 0; i < this.items.length; i++) {
						var endSection = void 0;
						if (i < this.items.length - 1) {
							endSection = this.items[i + 1].begin;
						} else {
							endSection = video.duration;
						}
						this.items[i].end = endSection;
					}

					this.element = $('<div />').addClass('leplayer-sections');
					this.element.append(this._createSections(items));
					this.element.find('.leplayer-section').on('click', this.onSectionClick.bind(this));

					this._activeSection = this.getSectionByIndex(0);
					this.setActiveByIndex(0);

					this.player.trigger('sectionsinit', { items: this.items });

					this.player.on('section_toggle', function (e) {
						if (_this7.element.hasClass('leplayer-sections--hidden')) {
							_this7.element.removeClass('leplayer-sections--hidden');
						} else {
							_this7.element.addClass('leplayer-sections--hidden');
						}
					});

					this.player.on('timeupdate', this.onTimeUpdate.bind(this));
				}

				_createClass(Sections, [{
					key: '_createSections',
					value: function _createSections(items) {
						var result = '';
						items.forEach(function (section, index) {
							var item = '\n\t\t\t\t\t\t<div class="leplayer-section ' + (!index ? 'leplayer-section--active' : '') + '"\n\t\t\t\t\t\t\tdata-time="' + section.begin + '" data-index="' + index + '">\n\t\t\t\t\t\t\t<div class="leplayer-section-time">' + secondsToTime(section.begin) + '</div>\n\t\t\t\t\t\t\t<div class="leplayer-section-info">\n\t\t\t\t\t\t\t\t<div class="leplayer-section-title">' + section.title + '</div>\n\t\t\t\t\t\t\t\t<div class="leplayer-section-description">' + section.description + '</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t';
							result += item;
						});
						return result;
					}
				}, {
					key: 'onSectionClick',
					value: function onSectionClick(e) {
						var section = $(e.target).closest('.leplayer-section');
						video.currentTime = section.attr('data-time');
					}
				}, {
					key: 'setActiveByIndex',
					value: function setActiveByIndex(index) {
						if (this._activeSection.attr('data-index') == index) {
							return;
						}
						this._activeSection.removeClass('leplayer-section--active');

						this._activeSection = this.getSectionByIndex(index);
						this._activeSection.addClass('leplayer-section--active');
						this.element.animate({
							scrollTop: this._activeSection.position().top
						}, 1000);
					}
				}, {
					key: 'getSectionByIndex',
					value: function getSectionByIndex(index) {
						return this.element.find('.leplayer-section[data-index="' + index + '"]');
					}
				}, {
					key: 'onTimeUpdate',
					value: function onTimeUpdate(e, data) {
						var currentTime = data.time;

						for (var i = 0; i < this.items.length; i++) {
							var section = this.items[i];
							if (currentTime <= section.end) {
								this.setActiveByIndex(i);
								break;
							}
						}
					}
				}]);

				return Sections;
			}();

			var sources = this.sources = [];
			var subtitles = [];
			var volume = options.volume.default;
			var controls = this.controls = new Controls();
			var player = this;
			var video = null;

			/**
	   * DOM container to hold video and all other stuff.
	   * @type object
	   */
			var container = null;
			var overlay = null;
			var loader = null;
			var sectionContainer = null;
			var videoContainer = null;

			var _createNotification = function _createNotification(opt) {
				var notification = void 0,
				    closeButton = void 0;
				notification = $('<div />').addClass('leplayer-notification').append(opt.text);
				return notification;
			};

			var _showNotification = function _showNotification(msg) {
				var notification = _createNotification({ text: msg });
				notification = $('<div />').addClass('leplayer-notification').append(msg);
				container.append(notification);
			};

			var init = function init() {
				// Check if element is correctly selected.
				if (element.prop('tagName').toLowerCase() != 'video') {
					console.warn('Incorrect element selected.');
					return this;
				}

				initOptions();
				// Set source.
				// @TODO move this to Video class
				element.children('source').each(function () {
					var src = $(this).attr('src');
					if (src) sources.push({
						src: src,
						title: $(this).attr('title')
					});
				});
				if (sources.length == 0) {
					var src = element.attr('src');
					if (src) {
						sources.push({
							src: src,
							title: $(this).attr('title') || 'default'
						});
					}
				}
				if (sources.length == 0) {
					console.warn('No sources found.');
					return this;
				}
				video = player.video = new Video(element);

				/** TODO: Use promise to async run this */
				initDom();
				initControls();
				initHotKeys();
				video.init().done(function () {
					initSections();
					player.trigger('inited');
				});
			};

			var initControls = function initControls() {
				for (var name in options.controls) {
					if (!controls.has(name)) continue;
					for (var rowIndex in options.controls[name]) {
						var row = options.controls[name][rowIndex],
						    hasTimeline = false,
						    rowElement = $('<div />').addClass('leplayer-controls controls-' + name);

						for (var i in row) {
							var controlName = row[i];

							if (controlName == C_DIVIDER || !controls.collections[name].has(controlName)) {
								// Create control only if divider or does not exist yet.
								var c = controls.collections[name].add(controlName);
								if (c != null) {
									rowElement.append(c);
									if (controlName == C_TIMELINE) hasTimeline = true;
								} else console.warn('Cannot create ' + controlName + ' control for collection ' + name + '.');
							}
						}

						if (!hasTimeline) rowElement.css('width', '1px');

						rowElement.find('.divider + .divider').remove();

						container.append(rowElement);
					}
				}
			};

			var initSections = function initSections() {
				options.dataUrl && player.getData().done(function (data) {
					var section = new Sections(data.sections);

					if (sectionContainer) {
						sectionContainer.append(section.element);
					} else {
						videoContainer.append(section.element);
					}
				});
			};

			var initDom = function initDom() {
				overlay = $('<div />').addClass('play-overlay').append(new _icon2.default(player, { iconName: 'play' }).element);
				loader = $('<div />').addClass('leplayer-loader-container').append(new _icon2.default(player, {
					iconName: 'refresh',
					className: 'leplayer-icon-spin'
				}).element).hide();
				videoContainer = $('<div />').addClass('leplayer-video').append(overlay).append(loader);
				container = $('<div />').addClass('leplayer-container').append(videoContainer).attr('tabindex', 0).css('width', element.width() + 'px');

				if (options.sectionContainer) {
					sectionContainer = $(options.sectionContainer).addClass('leplayer-section-container');
				}

				element.before(container);
				videoContainer.append(element);
				overlay.on({
					'click': function click(e) {
						element.trigger('click');
					},
					'dblclick': function dblclick(e) {
						element.trigger('dblclick');
					}
				});
			};

			var initHotKeys = function initHotKeys() {

				var isKeyBinding = function isKeyBinding(e, binding) {
					return (e.which === binding.key || e.key === binding.key) && !!binding.shiftKey == e.shiftKey && !!binding.ctrlKey == e.ctrlKey;
				};

				$(container).bind('keydown.leplayer.hotkey', function (e) {
					var _isFocused = isFocused();
					if (_isFocused) {
						$.each(options.keyBinding, function (action, binding) {
							if (isKeyBinding(e, binding)) {
								e.preventDefault();
								binding.fn(video);
								return false;
							}
						});
					}
				});
			};

			var initOptions = function initOptions() {
				var height = void 0,
				    width = void 0,
				    poster = void 0,
				    attrs = void 0,
				    preload = void 0;
				element.removeAttr('controls');

				height = element.attr('height');
				if (height) {
					options.height = height + 'px';
					element.removeAttr('height');
				}
				element.css('height', options.height);

				width = element.attr('width');
				if (width) {
					options.width = width + 'px';
					element.removeAttr('width');
				}
				element.css('width', options.width);

				poster = element.attr('poster');
				if (poster) options.poster = poster;else if (options.poster) element.attr('poster', options.poster);

				attrs = ['autoplay', 'loop', 'muted'];
				attrs.forEach(function (item) {
					var a = element.attr(item);
					if (a) {
						options[item] = true;
					} else if (options[item]) {
						element.attr(item, '');
					} else {
						element.removeAttr(item);
					}
					element.prop(item, options[item]);
				});

				preload = element.attr('preload');
				if (preload) {
					preload = preload.toLowerCase();
					if (preload == 'none' || preload == 'metadata') options.preload = preload;else options.preload = 'auto';
				}

				if (options.sources) {
					if (Array.isArray(options.sources)) {
						options.sources.forEach(function (item) {
							var source = $('<source />');
							if (typeof item === 'string') {
								source.attr('src', item);
							} else {
								source.attr('src', item.src);
							}
							source.attr('title', item.title || 'default');
							element.append(source);
						});
					} else if (typeof options.sources === 'string') {
						element.attr('src', options.sources);
					}
				}
				element.attr('preload', options.preload);
			};

			var secondsToTime = function secondsToTime(seconds) {
				var h = Math.floor(seconds / 3600);
				var m = Math.floor(seconds % 3600 / 60);
				var s = Math.floor(seconds % 3600 % 60);
				var out = '';
				if (h > 0) out = h + ':';
				if (m < 10) out += '0';
				out += m + ':';
				if (s < 10) out += '0';
				out += s;
				return out;
			};

			var isFocused = function isFocused() {
				var focused = $(container).find(':focus');
				return focused.length > 0 || $(container).is(':focus');
			};

			this.getData = function () {
				return $.ajax({
					url: options.dataUrl,
					method: 'GET'
				}).promise();
			};

			this.trigger = function (eventName) {
				var _$$trigger;

				for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
					args[_key3 - 1] = arguments[_key3];
				}

				(_$$trigger = $(element).trigger).call.apply(_$$trigger, [$(element), 'leplayer_' + eventName].concat(args));
			};

			this.on = function (eventName) {
				var _$$on2;

				for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
					args[_key4 - 1] = arguments[_key4];
				}

				(_$$on2 = $(element).on).call.apply(_$$on2, [$(element), 'leplayer_' + eventName].concat(args));
			};
			init();

			return this;
		};

		window.$.fn.lePlayer = function (options) {
			return this.each(function () {
				return new Player($(this), options);
			});
		};
	})(jQuery);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file control.js
	 *
	 * Control
	 */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _jquery = __webpack_require__(2);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _component = __webpack_require__(3);

	var _component2 = _interopRequireDefault(_component);

	var _icon = __webpack_require__(4);

	var _icon2 = _interopRequireDefault(_icon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @class Control
	 * @param {Player} player Main player
	 * @param {Object} [options] Control's options
	 * @param {String} [options.iconName] Name of control's icon. If empty, control will not have a icon
	 * @param {String} [options.className]
	 * @param {String} [options.title] Contorl's tooltip, title attr
	 * @property {Icon} icon Icon in control, if it is exist
	 * @extends Component
	 */

	var Control = function (_Component) {
		_inherits(Control, _Component);

		function Control(player, options) {
			_classCallCheck(this, Control);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Control).call(this, player, options));

			_this.element.on({
				'click': _this._onClick.bind(_this),
				'leplayer_click': _this.onClick.bind(_this)
			});

			_this.options.iconName && _this.icon.element.on({
				'click': _this._onIconClick.bind(_this),
				'leplayer_click': _this.onIconClick.bind(_this)
			});
			return _this;
		}

		/**
	  * @override
	  */


		_createClass(Control, [{
			key: 'createElement',
			value: function createElement() {
				if (this.options.iconName) {
					this.icon = new _icon2.default(this.player, {
						iconName: this.options.iconName
					});
				}
				var attrs = {
					role: 'button',
					title: this.options.title
				};
				this.element = (0, _jquery2.default)('<div />').addClass(this.buildCSSClass()).append(this.icon && this.icon.element).attr(attrs);

				return this.element;
			}

			/**
	   * @override
	   */

		}, {
			key: 'buildCSSClass',
			value: function buildCSSClass() {
				return 'control ' + this.options.className + ' ' + _get(Object.getPrototypeOf(Control.prototype), 'buildCSSClass', this).call(this);
			}
		}, {
			key: 'disable',
			value: function disable() {
				this.disabled = true;
				this.element.addClass('disabled');
			}
		}, {
			key: '_onClick',
			value: function _onClick(e) {
				if (this.disabled) {
					return false;
				}
				this.element.trigger('leplayer_click');
			}
		}, {
			key: '_onIconClick',
			value: function _onIconClick(e) {
				event.stopPropagation();
				event.preventDefault();
				if (this.disabled) {
					return false;
				}
				this.icon.element.trigger('leplayer_click');
			}
			/**
	   *
	   * On click event handler
	   * @abstact
	   */

		}, {
			key: 'onClick',
			value: function onClick(e) {
				e.preventDefault();
			}

			/**
	   * On icon click event handler
	   * @abstact
	   */

		}, {
			key: 'onIconClick',
			value: function onIconClick(e) {
				e.preventDefault();
			}
		}]);

		return Control;
	}(_component2.default);

		exports.default = Control;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = $;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file component.js
	 *
	 * Player component - Base class for all UI
	 */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _jquery = __webpack_require__(2);

	var _jquery2 = _interopRequireDefault(_jquery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * @param {Player} player Main player
	 * @param {Object} [options] Options of component
	 * @param {jQuery} [options.element] Элемент на котором можно иницилизовать класс.
	 * @property {Object} options
	 * @property {jQuery} element
	 * @class Component
	 */

	var Component = function () {
		function Component(player, options) {
			_classCallCheck(this, Component);

			options = this.options = _jquery2.default.extend({}, this.options, options);
			this.player = player;

			if (options.element) {
				this.element = options.element;
			} else {
				this.createElement();
			}
		}

		/**
	  * @abstract
	  */


		_createClass(Component, [{
			key: 'createElement',
			value: function createElement() {
				return '';
			}

			/**
	   * @abstract
	   */

		}, {
			key: 'buildCSSClass',
			value: function buildCSSClass() {
				return '';
			}
		}]);

		return Component;
	}();

		exports.default = Component;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file icon.js
	 *
	 * Icon
	 */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _jquery = __webpack_require__(2);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _component = __webpack_require__(3);

	var _component2 = _interopRequireDefault(_component);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @param {Player} player Main player
	 * @param {Object} [options] Icon's options
	 * @param {String} [options.iconName=''] Icon's name. If use svgsprite icons, iconName it's id in sprite
	 * @class Icon
	 * @extends Component
	 */

	var Icon = function (_Component) {
		_inherits(Icon, _Component);

		function Icon(player) {
			var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

			_classCallCheck(this, Icon);

			options = _jquery2.default.extend({}, {
				className: '',
				title: '',
				iconName: ''
			}, options);
			return _possibleConstructorReturn(this, Object.getPrototypeOf(Icon).call(this, player, options));
		}

		/**
	  * @override
	  */


		_createClass(Icon, [{
			key: 'createElement',
			value: function createElement() {
				this._useTag = document.createElementNS('http://www.w3.org/2000/svg', 'use');
				this._svgTag = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

				this.iconName = this._iconName = this.options.iconName;
				this._svgTag.appendChild(this._useTag);
				this.element = (0, _jquery2.default)('<div />').addClass(this.buildCSSClass()).attr('title', this.options.title).append((0, _jquery2.default)(this._svgTag));
				return this.element;
			}

			/**
	   * @override
	   */

		}, {
			key: 'buildCSSClass',
			value: function buildCSSClass() {
				return _get(Object.getPrototypeOf(Icon.prototype), 'buildCSSClass', this).call(this) + ' leplayer-icon ' + this.options.className;
			}

			/**
	   * Setter of iconName field
	   * @param {String} iconName
	   */

		}, {
			key: 'iconName',
			set: function set(iconName) {
				var _useTag, _useTag2;

				var attrNS = ['http://www.w3.org/1999/xlink', 'href'];
				(_useTag = this._useTag).removeAttributeNS.apply(_useTag, attrNS.concat([this.player.options.svgPath + '#leplayer-icon-' + this.iconName]));
				(_useTag2 = this._useTag).setAttributeNS.apply(_useTag2, attrNS.concat([this.player.options.svgPath + '#leplayer-icon-' + iconName]));
				this._iconName = iconName;
			}

			/**
	   * Getter of iconName field
	   * @return {String} Icon's name
	   */
			,
			get: function get() {
				return this._iconName;
			}
		}]);

		return Icon;
	}(_component2.default);

		exports.default = Icon;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file control-factory.js
	 *
	 */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.C_KEYBINDING_INFO = exports.C_SECTION = exports.C_VOLUME = exports.C_TIMELINE = exports.C_SUBTITLE = exports.C_SOURCE = exports.C_RATE = exports.C_PLAY = exports.C_FULLSCREEN = exports.C_FORWARD = exports.C_DOWNLOAD = exports.C_DIVIDER = exports.C_BACKWARD = undefined;
	exports.default = controlFactory;

	var _playControl = __webpack_require__(6);

	var _playControl2 = _interopRequireDefault(_playControl);

	var _volumeControl = __webpack_require__(7);

	var _volumeControl2 = _interopRequireDefault(_volumeControl);

	var _timelineControl = __webpack_require__(10);

	var _timelineControl2 = _interopRequireDefault(_timelineControl);

	var _sectionControl = __webpack_require__(13);

	var _sectionControl2 = _interopRequireDefault(_sectionControl);

	var _fullscreenControl = __webpack_require__(15);

	var _fullscreenControl2 = _interopRequireDefault(_fullscreenControl);

	var _rateControl = __webpack_require__(16);

	var _rateControl2 = _interopRequireDefault(_rateControl);

	var _backwardControl = __webpack_require__(17);

	var _backwardControl2 = _interopRequireDefault(_backwardControl);

	var _sourceControl = __webpack_require__(18);

	var _sourceControl2 = _interopRequireDefault(_sourceControl);

	var _subtitleControl = __webpack_require__(20);

	var _subtitleControl2 = _interopRequireDefault(_subtitleControl);

	var _downloadControl = __webpack_require__(21);

	var _downloadControl2 = _interopRequireDefault(_downloadControl);

	var _keybindingInfoControl = __webpack_require__(22);

	var _keybindingInfoControl2 = _interopRequireDefault(_keybindingInfoControl);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var C_BACKWARD = exports.C_BACKWARD = 'backward';
	var C_DIVIDER = exports.C_DIVIDER = 'divider';
	var C_DOWNLOAD = exports.C_DOWNLOAD = 'download';
	var C_FORWARD = exports.C_FORWARD = 'forward';
	var C_FULLSCREEN = exports.C_FULLSCREEN = 'fullscreen';
	var C_PLAY = exports.C_PLAY = 'play';
	var C_RATE = exports.C_RATE = 'rate';
	var C_SOURCE = exports.C_SOURCE = 'source';
	var C_SUBTITLE = exports.C_SUBTITLE = 'subtitle';
	var C_TIMELINE = exports.C_TIMELINE = 'timeline';
	var C_VOLUME = exports.C_VOLUME = 'volume';
	var C_SECTION = exports.C_SECTION = 'section';
	var C_KEYBINDING_INFO = exports.C_KEYBINDING_INFO = 'keybinding info';

	function controlFactory(player, name) {
		switch (name) {
			case C_BACKWARD:
				return new _backwardControl2.default(player);

			case C_DIVIDER:
				return '<div class="divider"></div>';

			case C_DOWNLOAD:
				return new _downloadControl2.default(player);

			case C_FORWARD:
				return new ForwardControl(player);

			case C_FULLSCREEN:
				return new _fullscreenControl2.default(player);

			case C_PLAY:
				return new _playControl2.default(player);

			case C_RATE:
				return new _rateControl2.default(player);

			case C_SOURCE:
				return new _sourceControl2.default(player);

			case C_SUBTITLE:
				return new _subtitleControl2.default(player);

			case C_TIMELINE:
				return new _timelineControl2.default(player);

			case C_VOLUME:
				return new _volumeControl2.default(player);

			case C_SECTION:
				return new _sectionControl2.default(player);

			case C_KEYBINDING_INFO:
				return new _keybindingInfoControl2.default(player);

			default:
				return null;
		}
		}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file play-control.js
	 *
	 * Play control
	 */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _jquery = __webpack_require__(2);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _control = __webpack_require__(1);

	var _control2 = _interopRequireDefault(_control);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @class PlayControl
	 * @param {Player} player Main player
	 * @extends Control
	 */

	var PlayControl = function (_Control) {
		_inherits(PlayControl, _Control);

		function PlayControl(player) {
			var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

			_classCallCheck(this, PlayControl);

			options = _jquery2.default.extend({}, {
				iconName: 'play',
				title: 'Воспроизвести видео',
				className: 'play'
			}, options);
			return _possibleConstructorReturn(this, Object.getPrototypeOf(PlayControl).call(this, player, options));
		}

		/**
	  * Pause the video
	  */


		_createClass(PlayControl, [{
			key: 'pause',
			value: function pause() {
				this.icon.iconName = 'play';
				this.element.attr('title', this.options.title);
			}

			/**
	   * Play the video
	   */

		}, {
			key: 'play',
			value: function play() {
				this.icon.iconName = 'pause';
				this.element.attr('title', 'Поставить на паузу');
			}

			/**
	   * @override
	   */

		}, {
			key: 'onClick',
			value: function onClick(e) {
				//super.onClick(e);
				this.player.video.togglePlay();
			}
		}]);

		return PlayControl;
	}(_control2.default);

		exports.default = PlayControl;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file volume-control.js
	 *
	 * Volume Control
	 */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _jquery = __webpack_require__(2);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _controlDropdown = __webpack_require__(8);

	var _controlDropdown2 = _interopRequireDefault(_controlDropdown);

	var _icon = __webpack_require__(4);

	var _icon2 = _interopRequireDefault(_icon);

	var _cookie = __webpack_require__(9);

	var _cookie2 = _interopRequireDefault(_cookie);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @param {Player} player Main player
	 * @class VolumeControl
	 * @extends ControlDropdown
	 */

	var VolumeControl = function (_ControlDropdown) {
		_inherits(VolumeControl, _ControlDropdown);

		function VolumeControl(player) {
			var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

			_classCallCheck(this, VolumeControl);

			options = _jquery2.default.extend({}, {
				iconName: 'volume-down',
				className: 'volume-control'
			}, options);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(VolumeControl).call(this, player, options));

			_this.player.on('volumechange', function (e, data) {
				_this.value = data.volume;
			});
			return _this;
		}

		_createClass(VolumeControl, [{
			key: 'createElement',
			value: function createElement() {
				var _this2 = this;

				_get(Object.getPrototypeOf(VolumeControl.prototype), 'createElement', this).call(this);
				var drag = false;

				this.marker = (0, _jquery2.default)('<div/>').addClass('volume-marker');

				this.active = (0, _jquery2.default)('<div/>').addClass('volume-active');

				this.line = (0, _jquery2.default)('<div/>').addClass('volume-line').append(this.active).append(this.marker).on('click', function (e) {
					if (drag) return;
					var p = _this2.getPosition(e.pageY);
					if (p >= 0 && p <= 1) {
						_this2.player.video.volume = 1 - p;
					}
				});

				this.dropdownContent.addClass('volume-slider').append(this.line);

				this.icon.element.attr('title', 'Отключить звук');

				this.marker.on('mousedown', function (e) {
					if (e.which != 1) return;
					drag = true;
				});

				(0, _jquery2.default)(document).on({
					'mousemove': function mousemove(e) {
						if (!drag) return;
						var p = _this2.getPosition(e.pageY);
						if (p >= 0 && p <= 1) {
							_this2.player.video.volume = 1 - p;
						}
					},

					'mouseup': function mouseup(e) {
						drag = false;
					}
				});
				return this.element;
			}
		}, {
			key: 'toggleMuted',
			value: function toggleMuted() {
				if (this.player.video.muted == true) {
					this.value = _cookie2.default.get('volume', options.volume.default);
				} else {
					this.value = 0;
				}
			}
		}, {
			key: 'getPosition',
			value: function getPosition(y) {
				return (y - this.line.offset().top) / this.line.height();
			}
		}, {
			key: 'onIconClick',
			value: function onIconClick(e) {
				_get(Object.getPrototypeOf(VolumeControl.prototype), 'onIconClick', this).call(this, e);
				this.toggleMuted();
			}
		}, {
			key: 'value',
			set: function set(value) {
				if (value < this.player.options.volume.mutelimit) {
					this.icon.iconName = 'volume-off';
				} else if (value < 0.5) {
					this.icon.iconName = 'volume-down';
				} else {
					this.icon.iconName = 'volume-up';
				}

				var p = Math.round(value * 100).toString() + '%';
				this.active.css('height', p);
				this.marker.css('bottom', p);
			}
		}]);

		return VolumeControl;
	}(_controlDropdown2.default);

		exports.default = VolumeControl;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file control-dropdown.js
	 *
	 * ControlDropdown
	 */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _jquery = __webpack_require__(2);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _control = __webpack_require__(1);

	var _control2 = _interopRequireDefault(_control);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @class ControlDropdown
	 * @param {Player} player Main player
	 * @param {Object} [options]
	 * @property {jQuery} dropdownContent Content of popup
	 * @extends Control
	 */

	var ControlDropdown = function (_Control) {
		_inherits(ControlDropdown, _Control);

		function ControlDropdown(player) {
			var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

			_classCallCheck(this, ControlDropdown);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(ControlDropdown).call(this, player, options));
		}

		/**
	  * @override
	  */


		_createClass(ControlDropdown, [{
			key: 'createElement',
			value: function createElement() {
				_get(Object.getPrototypeOf(ControlDropdown.prototype), 'createElement', this).call(this);
				this.dropdownContent = (0, _jquery2.default)('<div />').addClass('control-dropdown__content');
				this.element.append(this.dropdownContent);
			}

			/**
	   * @override
	   */

		}, {
			key: 'buildCSSClass',
			value: function buildCSSClass() {
				return 'control-dropdown ' + _get(Object.getPrototypeOf(ControlDropdown.prototype), 'buildCSSClass', this).call(this);
			}
		}]);

		return ControlDropdown;
	}(_control2.default);

		exports.default = ControlDropdown;

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';
	/**
	 * @file cookie-control.js
	 *
	 * @clas Cookie
	 */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Cookie = function () {
		function Cookie() {
			_classCallCheck(this, Cookie);
		}

		_createClass(Cookie, null, [{
			key: 'get',

			/**
	   * @public
	   *
	   * @param {String} name Name of cookie
	   * @param {String} [dflt] Return default value if this field is empty
	   *
	   */
			value: function get(name, dflt) {
				var cookies = document.cookie.split(';');
				for (var i in cookies) {
					var d = cookies[i].trim().split('=');
					if (d[0] == 'leplayer_' + name) return d[1];
				}
				return dflt;
			}
		}, {
			key: 'set',


			/**
	   * @public
	   *
	   * @param {String} name Key
	   * @param {String} value Value
	   */
			value: function set(name, value) {
				var d = new Date();
				d.setDate(d.year + 1);
				document.cookie = 'leplayer_' + name + '=' + value + ';expires=' + d.toString();
			}
		}]);

		return Cookie;
	}();

		exports.default = Cookie;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file timeline-control.js
	 *
	 * Timeline Control
	 */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _jquery = __webpack_require__(2);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _control = __webpack_require__(1);

	var _control2 = _interopRequireDefault(_control);

	var _controlText = __webpack_require__(11);

	var _controlText2 = _interopRequireDefault(_controlText);

	var _time = __webpack_require__(12);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @param {Player} player Main player
	 * @class TimelineControl
	 * @property {ControlText} currentTime Current time's text
	 * @property {ControlText} totalTime Total time
	 * @property {jQuery} line
	 * @extends Control
	 */

	var TimelineControl = function (_Control) {
		_inherits(TimelineControl, _Control);

		function TimelineControl(player) {
			var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

			_classCallCheck(this, TimelineControl);

			options = _jquery2.default.extend({}, {
				className: 'timeline timeline-container'
			}, options);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TimelineControl).call(this, player, options));

			_this.player.on('inited', _this._onPlayerInited.bind(_this));
			_this.player.on('sectionsinit', _this._onSectionsInit.bind(_this));
			_this._initWatchBuffer();
			return _this;
		}

		_createClass(TimelineControl, [{
			key: 'createElement',
			value: function createElement() {
				var _this2 = this;

				_get(Object.getPrototypeOf(TimelineControl.prototype), 'createElement', this).call(this);
				var video = this.player.video;
				var duration = video.duration;

				this.drag = false;

				this.currentTime = new _controlText2.default(this.player, { className: 'time-current' });
				this.totalTime = new _controlText2.default(this.player, { className: 'time-total' });

				this.marker = (0, _jquery2.default)('<div />').addClass('time-marker');

				this.markerShadow = (0, _jquery2.default)('<div />').addClass('time-marker shadow').hide();

				this.markerShadowTime = (0, _jquery2.default)('<div />').addClass('time');
				this.markerTime = (0, _jquery2.default)('<div />').addClass('time').hide();
				this.played = (0, _jquery2.default)('<div />').addClass('time-played');
				this.buffered = (0, _jquery2.default)('<div />');
				this.currentTime.text = '00:00';
				this.line = (0, _jquery2.default)('<div />').addClass('timeline').append(this.marker.append(this.markerTime)).append(this.markerShadow.append(this.markerShadowTime)).append(this.played).append(this.buffered).on({
					'mousemove': function mousemove(e) {
						if (_this2.drag) return;

						var p = _this2.getPosition(e.pageX);
						if (p > 0 && p < 1) {
							_this2.markerShadow.show();
							_this2.markerShadow.css('left', p * 100 + '%');
							_this2.markerShadowTime.html((0, _time.secondsToTime)(video.duration * p));
						} else _this2.markerShadow.hide();
					},

					'mouseleave': function mouseleave(e) {
						if (_this2.drag) return;
						_this2.markerShadow.hide();
					},

					'mousedown': function mousedown(e) {},

					'click': function click(e) {
						if (e.which !== 1) return;
						if (_this2.drag) return;
						_this2.hardMove(_this2.getPosition(e.pageX));
						video.currentTime = video.duration * _this2.getPosition(e.pageX);
					},

					'touchmove': function touchmove(e) {}
				});

				this.element.addClass('timeline-container').append((0, _jquery2.default)('<div />').addClass('timeline-subcontainer').append(this.currentTime.element).append(this.line).append(this.totalTime.element));

				this.marker.on('mousedown', function (e) {
					if (e.which !== 1) return;
					e.preventDefault();
					_this2.markerShadow.hide();
					_this2.drag = true;
				});

				(0, _jquery2.default)(document).on({

					'mousemove': function mousemove(e) {
						if (!_this2.drag) return;
						var p = _this2.getPosition(e.pageX);
						if (p > 0 && p < 1) {
							_this2.markerTime.show().html((0, _time.secondsToTime)(video.duration * p));
							video.seek(video.duration * p);
						}
					},

					'mouseup': function mouseup(e) {
						_this2.markerTime.hide();
						_this2.drag = false;
					}
				});
			}
		}, {
			key: '_onPlayerInited',
			value: function _onPlayerInited(e) {
				var video = this.player.video;
				this.totalTime.text = (0, _time.secondsToTime)(video.duration);
				this.currentTime.element.css({
					'width': this.totalTime.element.width()
				});
			}
		}, {
			key: '_onSectionsInit',
			value: function _onSectionsInit(e, data) {
				var sections = data.items;
				var video = this.player.video;
				var duration = video.duration;
				var result = (0, _jquery2.default)('<div />');
				sections.forEach(function (section) {
					var length = section.end - section.begin;
					var item = (0, _jquery2.default)('<div />').addClass('timeline-section').css({
						width: length / duration * 100 + '%',
						left: section.begin / duration * 100 + '%'
					});
					result.append(item);
				});
				this.line.append(result);
			}
		}, {
			key: 'getPosition',
			value: function getPosition(x) {
				return (x - this.line.offset().left) / this.line.width();
			}

			/**
	   * Move marker on timeline without change video.currentTime
	   *
	   * @param {Number} percent The percent which you want to move marker on timeline
	   */

		}, {
			key: 'hardMove',
			value: function hardMove(percent) {
				var currentTime = this.player.video.duration * percent;
				percent = percent * 100;
				this.marker.css('left', percent + '%');
				this.played.css('width', percent + '%');
				this.currentTime.text = (0, _time.secondsToTime)(currentTime);
			}
		}, {
			key: 'move',
			value: function move() {
				var video = this.player.video;
				var percent = (video.currentTime / video.duration * 100).toFixed(2);
				var currentTime = video.currentTime;
				this.marker.css('left', percent + '%');
				this.played.css('width', percent + '%');
				this.currentTime.text = (0, _time.secondsToTime)(currentTime);
			}
		}, {
			key: '_initWatchBuffer',
			value: function _initWatchBuffer() {
				var _this3 = this;

				clearInterval(this.watchBufferInterval);
				var arr = [];
				var video = this.player.video;
				var updateProgressBar = function updateProgressBar() {
					var END = 1;
					var START = 0;
					var result = (0, _jquery2.default)('');
					video.loaded.forEach(function (item) {
						var domItem = (0, _jquery2.default)('<div />').addClass('time-buffered');
						domItem.css({
							'left': item[START] * 100 + '%',
							'width': (item[END] - item[START]) * 100 + '%'
						});
						result = result.add(domItem);
					});
					_this3.buffered.html(result);
					if (video.loaded.length && 1 - video.loadedSize <= 0.05) {
						clearInterval(_this3.watchBufferInterval);
					}
				};
				this.watchBufferInterval = setInterval(updateProgressBar, 500);
			}
		}]);

		return TimelineControl;
	}(_control2.default);

		exports.default = TimelineControl;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file control-text.js
	 *
	 * Control text
	 */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _jquery = __webpack_require__(2);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _control = __webpack_require__(1);

	var _control2 = _interopRequireDefault(_control);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @param {Player} player Main player
	 * @class ControlText
	 * @exnteds Control
	 */

	var ControlText = function (_Control) {
		_inherits(ControlText, _Control);

		function ControlText(player) {
			var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

			_classCallCheck(this, ControlText);

			options = _jquery2.default.extend({}, {
				className: ''
			}, options);
			return _possibleConstructorReturn(this, Object.getPrototypeOf(ControlText).call(this, player, options));
		}

		/**
	  * @override
	  */


		_createClass(ControlText, [{
			key: 'createElement',
			value: function createElement() {
				_get(Object.getPrototypeOf(ControlText.prototype), 'createElement', this).call(this);
			}

			/**
	   * @override
	   */

		}, {
			key: 'buildCSSClass',
			value: function buildCSSClass() {
				return 'control-text ' + this.options.className;
			}

			/**
	   * Setter of text field
	   * @public
	   * @param {String} value
	   */

		}, {
			key: 'text',
			set: function set(value) {
				this.element.html(value);
			}
		}]);

		return ControlText;
	}(_control2.default);

		exports.default = ControlText;

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';
	/**
	 * @file time.js
	 *
	 * @module time
	 */

	/**
	 * Convert seconds to format string 'hh:mm:ss'
	 *
	 * @access public
	 * @param {Number} seconds Seconds
	 * @returns {String}
	 */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.secondsToTime = secondsToTime;
	function secondsToTime(seconds) {
		var h = Math.floor(seconds / 3600);
		var m = Math.floor(seconds % 3600 / 60);
		var s = Math.floor(seconds % 3600 % 60);
		var out = '';
		if (h > 0) out = h + ':';
		if (m < 10) out += '0';
		out += m + ':';
		if (s < 10) out += '0';
		out += s;
		return out;
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file section-control.js
	 *
	 * Section control
	 */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _jquery = __webpack_require__(2);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _controlCheckbox = __webpack_require__(14);

	var _controlCheckbox2 = _interopRequireDefault(_controlCheckbox);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @class SectionControl
	 * @param {Player} player Main player
	 * @param {Object} [options]
	 * @param {Boolean} [options.checked=true]
	 * @extends ControlCheckbox
	 */

	var SectionControl = function (_ControlCheckbox) {
		_inherits(SectionControl, _ControlCheckbox);

		function SectionControl(player) {
			var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

			_classCallCheck(this, SectionControl);

			options = _jquery2.default.extend({}, {
				iconName: 'list-ul',
				className: 'control--type_section',
				title: 'Показать/скрыть секции',
				checked: true
			}, options);
			return _possibleConstructorReturn(this, Object.getPrototypeOf(SectionControl).call(this, player, options));
		}

		/**
	  * @override
	  */


		_createClass(SectionControl, [{
			key: 'onClick',
			value: function onClick(e) {
				_get(Object.getPrototypeOf(SectionControl.prototype), 'onClick', this).call(this, e);
				this.player.trigger('section_toggle', { checked: this.checked });
			}
		}]);

		return SectionControl;
	}(_controlCheckbox2.default);

		exports.default = SectionControl;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file control-checkbox.js
	 *
	 * Control
	 */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _jquery = __webpack_require__(2);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _control = __webpack_require__(1);

	var _control2 = _interopRequireDefault(_control);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @param {Player} player Main player
	 * @param {Object} [options]
	 * @param {boolean} [options.checked=false]
	 * @class ControlCheckbox Toggable control
	 */

	var ControlCheckbox = function (_Control) {
		_inherits(ControlCheckbox, _Control);

		function ControlCheckbox(player) {
			var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

			_classCallCheck(this, ControlCheckbox);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ControlCheckbox).call(this, player, options));

			_this.checked = _this.options.checked || false;
			return _this;
		}

		/**
	  * Setter for checked property
	  * @public
	  * @param {boolean} val
	  */


		_createClass(ControlCheckbox, [{
			key: 'onClick',


			/**
	   * @override
	   */
			value: function onClick(e) {
				_get(Object.getPrototypeOf(ControlCheckbox.prototype), 'onClick', this).call(this, e);
				this.checked = !this.checked;
			}

			/**
	   * @override
	   */

		}, {
			key: 'buildCSSClass',
			value: function buildCSSClass() {
				return 'control-checkbox ' + _get(Object.getPrototypeOf(ControlCheckbox.prototype), 'buildCSSClass', this).call(this);
			}
		}, {
			key: 'checked',
			set: function set(val) {
				val = !!val;
				this._checked = val;
				this.element.toggleClass('control-checkbox--checked', val);
				this.element.trigger('leplayer_checked', { checked: val });
			}

			/**
	   * Getter for checked propery
	   * @public
	   * @return {boolean}
	   */
			,
			get: function get() {
				return this._checked;
			}
		}]);

		return ControlCheckbox;
	}(_control2.default);

		exports.default = ControlCheckbox;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file fullscreen-control.js
	 *
	 * Play control
	 */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _jquery = __webpack_require__(2);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _control = __webpack_require__(1);

	var _control2 = _interopRequireDefault(_control);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @param {Player} player Main player
	 * @class FullscreenControl
	 * @extends Control
	 */

	var FullscreenControl = function (_Control) {
		_inherits(FullscreenControl, _Control);

		function FullscreenControl(player) {
			var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

			_classCallCheck(this, FullscreenControl);

			options = _jquery2.default.extend({}, {
				iconName: 'arrows-alt',
				className: 'fullscreen',
				title: 'Развернуть/свернуть на полный экран'
			}, options);
			return _possibleConstructorReturn(this, Object.getPrototypeOf(FullscreenControl).call(this, player, options));
		}

		/**
	  * @override
	  */


		_createClass(FullscreenControl, [{
			key: 'onClick',
			value: function onClick(e) {
				_get(Object.getPrototypeOf(FullscreenControl.prototype), 'onClick', this).call(this, e);
				this.player.video.fullscreen.toggle();
			}
		}]);

		return FullscreenControl;
	}(_control2.default);

		exports.default = FullscreenControl;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file rate-control.js
	 *
	 * Rate control
	 */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _jquery = __webpack_require__(2);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _control = __webpack_require__(1);

	var _control2 = _interopRequireDefault(_control);

	var _controlText = __webpack_require__(11);

	var _controlText2 = _interopRequireDefault(_controlText);

	var _cookie = __webpack_require__(9);

	var _cookie2 = _interopRequireDefault(_cookie);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @class RateControl
	 * @param {Player} player Main player
	 * @param {Object} [options]
	 * @property {Control} downControl  Down rate control
	 * @property {Control} upControl  Up rate control
	 * @property {ControlText} currentRate Control of cuurent rate
	 * @extends Control
	 */

	var RateControl = function (_Control) {
		_inherits(RateControl, _Control);

		function RateControl(player) {
			var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

			_classCallCheck(this, RateControl);

			options = _jquery2.default.extend({}, {
				className: 'control-container'
			}, options);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(RateControl).call(this, player, options));

			var video = _this.player.video;
			_this.downControl.element.on('click', function (e) {
				video.rate -= _this.player.options.rate.step;
			});

			_this.upControl.element.on('click', function (e) {
				video.rate += _this.player.options.rate.step;
			});
			return _this;
		}

		/**
	  * @override
	  */


		_createClass(RateControl, [{
			key: 'createElement',
			value: function createElement() {
				_get(Object.getPrototypeOf(RateControl.prototype), 'createElement', this).call(this);
				this.downControl = new _control2.default(this.player, {
					className: 'rate-down',
					iconName: 'backward',
					title: 'Уменьшить скорость проигрывания'
				});
				this.upControl = new _control2.default(this.player, {
					className: 'rate-up',
					iconName: 'forward',
					title: 'Увеличить скорость проигрывания'
				});
				this.currentRate = new _controlText2.default({ className: 'rate-current' });

				this.element.append(this.downControl.element).append(this.currentRate.element).append(this.upControl.element);
			}

			/**
	   * @override
	   */

		}, {
			key: 'buildCSSClass',
			value: function buildCSSClass() {
				return this.options.className;
			}
		}, {
			key: 'disable',
			value: function disable() {
				this.disabled = true;
				this.downControl.disable.apply(this.down, arguments);
				this.upControl.disable.apply(this.up, arguments);
			}
		}, {
			key: 'init',
			value: function init() {
				var rate = _cookie2.default.get('rate', this.player.options.rate.default);
				this.show(rate);
			}
		}, {
			key: 'show',
			value: function show(value) {
				var video = this.player.video;
				value = value || video.rate;
				value = parseFloat(value).toFixed(2).toString().replace(/,/g, '.');
				this.currentRate.text = '×' + value;
			}
		}, {
			key: 'value',
			set: function set(value) {
				var video = this.player.video;
				var options = this.player.options;
				if (this.disabled) {
					return false;
				}
				this.upControl.element.removeClass('disabled');
				this.downControl.element.removeClass('disabled');
				if (video.rate <= options.rate.min) this.downControl.element.addClass('disabled');else if (video.rate >= options.rate.max) this.upControl.element.addClass('disabled');
				this.show();
			}
		}]);

		return RateControl;
	}(_control2.default);

		exports.default = RateControl;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file backward-control.js
	 *
	 * Backward control
	 */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _jquery = __webpack_require__(2);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _control = __webpack_require__(1);

	var _control2 = _interopRequireDefault(_control);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @param {Player} player Main player
	 * @param {Object} [options={}] Options
	 * @class BackwardControl
	 * @extends Control
	 */

	var BackwardControl = function (_Control) {
		_inherits(BackwardControl, _Control);

		function BackwardControl(player) {
			var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

			_classCallCheck(this, BackwardControl);

			options = _jquery2.default.extend({}, {
				iconName: 'undo',
				className: 'backward',
				title: 'Отмотать назад на ' + player.options.playback.step.medium + ' секунд'
			}, options);
			return _possibleConstructorReturn(this, Object.getPrototypeOf(BackwardControl).call(this, player, options));
		}

		/**
	  * @override
	  */


		_createClass(BackwardControl, [{
			key: 'onClick',
			value: function onClick(e) {
				_get(Object.getPrototypeOf(BackwardControl.prototype), 'onClick', this).call(this, e);
				this.player.video.currentTime -= options.playback.step.medium;
			}
		}]);

		return BackwardControl;
	}(_control2.default);

		exports.default = BackwardControl;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file source-control.js
	 *
	 * Source control
	 */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _jquery = __webpack_require__(2);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _controlContainer = __webpack_require__(19);

	var _controlContainer2 = _interopRequireDefault(_controlContainer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @class SourceControl
	 * @param {Player} player Main player
	 * @extends ControlConainer
	 */

	var SourceControl = function (_ControlContainer) {
		_inherits(SourceControl, _ControlContainer);

		function SourceControl(player) {
			var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

			_classCallCheck(this, SourceControl);

			options = _jquery2.default.extend({}, {
				iconName: 'bullseye',
				title: 'Качество',
				className: 'source-control'
			}, options);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SourceControl).call(this, player, options));

			if (_this.player.sources.length > 1) {
				for (var i in _this.player.sources) {
					_this.addItem(_this.player.sources[i].title, { src: _this.player.sources[i].src });
				}
			} else {
				_this.disable();
			}
			return _this;
		}

		_createClass(SourceControl, [{
			key: 'set',
			value: function set(index) {
				/** TODO: Emit event on set source*/
				var s = this.getByIndex(index);
				if (s != null) {
					this.player.video.source = s.data('src');
					this.player.controls.download = s.data('src');
				}
			}

			/**
	   * @override
	   */

		}, {
			key: 'onItemClick',
			value: function onItemClick(index) {
				_get(Object.getPrototypeOf(SourceControl.prototype), 'onItemClick', this).call(this, index);
				this.set(index);
			}
		}]);

		return SourceControl;
	}(_controlContainer2.default);

		exports.default = SourceControl;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file control-container.js
	 *
	 * Control container
	 */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _jquery = __webpack_require__(2);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _controlDropdown = __webpack_require__(8);

	var _controlDropdown2 = _interopRequireDefault(_controlDropdown);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @param {Player} player Main player
	 * @class ControlContainer
	 * @extends ControlDropdown
	 */

	var ControlContainer = function (_ControlDropdown) {
		_inherits(ControlContainer, _ControlDropdown);

		function ControlContainer(player, options) {
			_classCallCheck(this, ControlContainer);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ControlContainer).call(this, player, options));

			_this._active = null;
			/**
	   * List of items
	   *
	   * @public
	   * @type {Array}
	   */
			_this.list = [];
			return _this;
		}

		/**
	  * Get item of container by index
	  *
	  * @public
	  * @param {number} index
	  */


		_createClass(ControlContainer, [{
			key: 'getByIndex',
			value: function getByIndex(index) {
				return this.list[index];
			}

			/**
	   * Set item active by index
	   *
	   * @public
	   * @param {number} index
	   */

		}, {
			key: 'setActiveByIndex',
			value: function setActiveByIndex(index) {
				if (this.active) {
					this.active.removeClass('control-container__item--active');
				}
				this._active = this.list[index].addClass('control-container__item--active');
				return this._active;
			}

			/**
	   * Getter of active field
	   *
	   * @public
	   * @type {jQuery}
	   */

		}, {
			key: 'addItem',


			/**
	   * @public
	   * @param {String|jQuery} Content of item
	   * @param {Object} Data of item
	   */
			value: function addItem(content, data) {
				var item = (0, _jquery2.default)('<div />').addClass('control-container__item').data(data).on('click', this.onItemClick.bind(this)).append(content);
				this.list.push(item);

				this.dropdownContent.append(item);

				return item;
			}

			/**
	   * On item click event handler
	   * @public
	   * @param {Event} e
	   */

		}, {
			key: 'onItemClick',
			value: function onItemClick(e) {
				this.active = e.currentTarget;
			}

			/**
	   * @override
	   */

		}, {
			key: 'buildCSSClass',
			value: function buildCSSClass() {
				return _get(Object.getPrototypeOf(ControlContainer.prototype), 'buildCSSClass', this).call(this) + ' control-container';
			}
		}, {
			key: 'active',
			get: function get() {
				var _this2 = this;

				if (this._active && this._active.length > 0) {
					return this._active;
				}
				this.list.forEach(function (item) {
					if (item.hasClass('control-container__item--active')) {
						_this2._active = item;
					}
				});
				return this._active;
			}

			/**
	   * Setter of active field
	   *
	   * @public
	   * @param {jQuery} Item of container
	   */
			,
			set: function set(element) {
				if (this.active) {
					this.active.removeClass('control-container__item--active');
				}
				if (element) {
					(0, _jquery2.default)(element).addClass('control-container__item--active');
				}
				this._active = element;
				return this._active;
			}
		}]);

		return ControlContainer;
	}(_controlDropdown2.default);

		exports.default = ControlContainer;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file subtitle-control.js
	 *
	 * Subtitle control
	 */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _jquery = __webpack_require__(2);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _controlContainer = __webpack_require__(19);

	var _controlContainer2 = _interopRequireDefault(_controlContainer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @param {Player} player Main player
	 * @class SubtitleControl
	 * @extends ControlContainer
	 */

	var SubtitleControl = function (_ControlContainer) {
		_inherits(SubtitleControl, _ControlContainer);

		function SubtitleControl(player) {
			var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

			_classCallCheck(this, SubtitleControl);

			options = _jquery2.default.extend({}, {
				iconName: 'commenting-o',
				title: 'Субтитры',
				className: 'subtitle-control'
			}, options);
			return _possibleConstructorReturn(this, Object.getPrototypeOf(SubtitleControl).call(this, player, options));
		}

		_createClass(SubtitleControl, [{
			key: 'init',
			value: function init() {
				var video = this.player.video;
				if (video.subtitles.length > 0) {
					for (var i in video.subtitles) {
						if (!video.subtitles.hasOwnProperty(i)) continue;
						var item = video.subtitles[i];
						this.addItem(item.title, {
							src: item.src,
							language: item.language
						});
					}
				} else {
					this.disable();
				}
			}
		}, {
			key: 'onIconClick',
			value: function onIconClick(e) {
				_get(Object.getPrototypeOf(SubtitleControl.prototype), 'onIconClick', this).call(this, e);
				var video = this.player.video;
				this.active = null;
				video.track = -1;
			}
		}, {
			key: 'onItemClick',
			value: function onItemClick(e) {
				_get(Object.getPrototypeOf(SubtitleControl.prototype), 'onItemClick', this).call(this, e);
				var item = (0, _jquery2.default)(e.target);
				var video = this.player.video;
				if (item.data('language')) {
					video.track = item.data('language');
				}
			}
		}]);

		return SubtitleControl;
	}(_controlContainer2.default);

		exports.default = SubtitleControl;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file download-control.js
	 *
	 * Download control
	 */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _jquery = __webpack_require__(2);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _control = __webpack_require__(1);

	var _control2 = _interopRequireDefault(_control);

	var _icon = __webpack_require__(4);

	var _icon2 = _interopRequireDefault(_icon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @param {Player} player Main player
	 * @param {Object} [options]
	 * @class DownloadControl
	 * @exnteds Control
	 */

	var DownloadControl = function (_Control) {
		_inherits(DownloadControl, _Control);

		function DownloadControl(player) {
			var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

			_classCallCheck(this, DownloadControl);

			options = _jquery2.default.extend({
				title: 'Скачать видео',
				className: 'download'
			}, options);
			return _possibleConstructorReturn(this, Object.getPrototypeOf(DownloadControl).call(this, player, options));
		}

		/**
	  * @override
	  */


		_createClass(DownloadControl, [{
			key: 'createElement',
			value: function createElement() {
				// TODO: Доопределить этот метод, а не переопредлеить
				this.element = (0, _jquery2.default)('<a />').attr({
					href: '',
					target: '_blank',
					download: true,
					title: this.options.title
				}).addClass(this.buildCSSClass()).append(new _icon2.default(this.player, { iconName: 'download' }).element);
			}

			/**
	   * @override
	   */

		}, {
			key: 'buildCSSClass',
			value: function buildCSSClass() {
				return '' + _get(Object.getPrototypeOf(DownloadControl.prototype), 'buildCSSClass', this).call(this);
			}

			/**
	   * Setter of link field
	   * @public
	   * @param {String} value Path for video
	   */

		}, {
			key: 'link',
			set: function set(value) {
				this.element.attr('href', value);
			}
		}]);

		return DownloadControl;
	}(_control2.default);

		exports.default = DownloadControl;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	
	'use strict';
	/**
	 * @file keybinding-info-control.js
	 *
	 * Info control
	 */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _jquery = __webpack_require__(2);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _controlDropdown = __webpack_require__(8);

	var _controlDropdown2 = _interopRequireDefault(_controlDropdown);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @param {Player} player Main player
	 * @class KeyBindingInfoControl
	 * @extends ControlDropdown
	 */

	var KeyBindingInfoControl = function (_ControlDropdown) {
		_inherits(KeyBindingInfoControl, _ControlDropdown);

		function KeyBindingInfoControl(player, options) {
			_classCallCheck(this, KeyBindingInfoControl);

			options = _jquery2.default.extend({}, {
				iconName: 'info',
				title: 'Инфо',
				className: 'info-control'
			}, options);
			return _possibleConstructorReturn(this, Object.getPrototypeOf(KeyBindingInfoControl).call(this, player, options));
		}

		_createClass(KeyBindingInfoControl, [{
			key: 'createElement',
			value: function createElement() {
				_get(Object.getPrototypeOf(KeyBindingInfoControl.prototype), 'createElement', this).call(this);
				var keyBinding = this.player.options.keyBinding;
				var infoContent = '';
				for (var _key in keyBinding) {
					if (!keyBinding.hasOwnProperty(_key)) continue;

					var hotkey = keyBinding[_key];
					var item = '';
					var keyString = '';

					hotkey.info.forEach(function (key, index) {
						if (index != 0) {
							keyString += ' + ';
						}
						keyString += '<div class="leplayer-key">' + key + '</div>';
					});

					item = '\n\t\t\t\t<div class="info-control__item">\n\t\t\t\t\t' + keyString + ' - ' + hotkey.description + '\n\t\t\t\t</div>\n\t\t\t';

					infoContent += item;
				}
				this.dropdownContent.addClass('info-control__content').append(infoContent);
			}
		}]);

		return KeyBindingInfoControl;
	}(_controlDropdown2.default);

		exports.default = KeyBindingInfoControl;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGUtcGxheWVyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIGRlZTljNjQ4NjRhYjVkZmMyMWIyIiwid2VicGFjazovLy9zb3VyY2UvanMvbGUtcGxheWVyLmVzNi5qcyIsIndlYnBhY2s6Ly8vc291cmNlL2pzL2NvbXBvbmVudHMvY29udHJvbC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCIkXCIiLCJ3ZWJwYWNrOi8vL3NvdXJjZS9qcy9jb21wb25lbnRzL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vc291cmNlL2pzL2NvbXBvbmVudHMvaWNvbi5qcyIsIndlYnBhY2s6Ly8vc291cmNlL2pzL2NvbnRyb2wtZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vc291cmNlL2pzL2NvbXBvbmVudHMvcGxheS1jb250cm9sLmpzIiwid2VicGFjazovLy9zb3VyY2UvanMvY29tcG9uZW50cy92b2x1bWUtY29udHJvbC5qcyIsIndlYnBhY2s6Ly8vc291cmNlL2pzL2NvbXBvbmVudHMvY29udHJvbC1kcm9wZG93bi5qcyIsIndlYnBhY2s6Ly8vc291cmNlL2pzL3V0aWxzL2Nvb2tpZS5qcyIsIndlYnBhY2s6Ly8vc291cmNlL2pzL2NvbXBvbmVudHMvdGltZWxpbmUtY29udHJvbC5qcyIsIndlYnBhY2s6Ly8vc291cmNlL2pzL2NvbXBvbmVudHMvY29udHJvbC10ZXh0LmpzIiwid2VicGFjazovLy9zb3VyY2UvanMvdXRpbHMvdGltZS5qcyIsIndlYnBhY2s6Ly8vc291cmNlL2pzL2NvbXBvbmVudHMvc2VjdGlvbi1jb250cm9sLmpzIiwid2VicGFjazovLy9zb3VyY2UvanMvY29tcG9uZW50cy9jb250cm9sLWNoZWNrYm94LmpzIiwid2VicGFjazovLy9zb3VyY2UvanMvY29tcG9uZW50cy9mdWxsc2NyZWVuLWNvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vL3NvdXJjZS9qcy9jb21wb25lbnRzL3JhdGUtY29udHJvbC5qcyIsIndlYnBhY2s6Ly8vc291cmNlL2pzL2NvbXBvbmVudHMvYmFja3dhcmQtY29udHJvbC5qcyIsIndlYnBhY2s6Ly8vc291cmNlL2pzL2NvbXBvbmVudHMvc291cmNlLWNvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vL3NvdXJjZS9qcy9jb21wb25lbnRzL2NvbnRyb2wtY29udGFpbmVyLmpzIiwid2VicGFjazovLy9zb3VyY2UvanMvY29tcG9uZW50cy9zdWJ0aXRsZS1jb250cm9sLmpzIiwid2VicGFjazovLy9zb3VyY2UvanMvY29tcG9uZW50cy9kb3dubG9hZC1jb250cm9sLmpzIiwid2VicGFjazovLy9zb3VyY2UvanMvY29tcG9uZW50cy9rZXliaW5kaW5nLWluZm8tY29udHJvbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGRlZTljNjQ4NjRhYjVkZmMyMWIyXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9jb21wb25lbnRzL2NvbnRyb2wnO1xuaW1wb3J0IEljb24gZnJvbSAnLi9jb21wb25lbnRzL2ljb24nO1xuaW1wb3J0IGNvbnRyb2xGYWN0b3J5LCB7IENfS0VZQklORElOR19JTkZPIH0gZnJvbSAnLi9jb250cm9sLWZhY3RvcnknO1xuaW1wb3J0IENvb2tpZSBmcm9tICcuL3V0aWxzL2Nvb2tpZSc7XG5cbihmdW5jdGlvbiAoJCkge1xuXG5cdC8qKlxuXHQgKiBAY2xhc3MgUGxheWVyXG5cdCAqIEBwYXJhbSB7alF1ZXJ5fSBlbGVtZW50IEVsZW1lbnQgd2hlbiBwbGF5ZXIgd2lsbCBpbml0XG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cblx0ICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5hdXRvcGxheT1mYWxzZV1cblx0ICogQHBhcmFtIHtTdHJpbmd8TnVtYmVyfSBbb3B0aW9ucy5oZWlnaHQ9J2F1dG8nXVxuXHQgKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMud2lkdGg9J2F1dG8nXVxuXHQgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmxvb3A9ZmFsc2VdXG5cdCAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMubXV0ZWQ9ZmFsc2VdXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5wcmVsb2FkPSdtZXRhZGF0YSddIENhbiBiZSAoJ2F1dG8nfCdtZXRhZGF0YSd8J25vbmUnKVxuXHQgKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMucG9zdGVyXSBQYXRoIG9mIGltYWdlXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5zdmdQYXRoXSBQYXRoIGZvciBzdmcgc3ByaXRlXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5mdWxsc2NyZWVuLmhpZGVUaW1lbGluZVRpbWU9NzAwMF1cblx0ICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLnJhdGVdXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5yYXRlLnN0ZXA9MC4yNV1cblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLnJhdGUubWluPTAuNV0gTWluIG9mIHJhdGVcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLnJhdGUubWF4PTQuMF0gTWF4IG9mIHJhdGVcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLnJhdGUuZGVmYXVsdD0xXVxuXHQgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMucGxheWJhY2suc3RlcF1cblx0ICogQHBhcmFtIHtOdWJtZXJ9IFtvcHRpb25zLnBsYXliYWNrLnN0ZXAuc2hvcnQ9NV1cblx0ICogQHBhcmFtIHtOdWJtZXJ9IFtvcHRpb25zLnBsYXliYWNrLnN0ZXAubWVkaXVtPTMwXVxuXHQgKiBAcGFyYW0ge051Ym1lcn0gW29wdGlvbnMucGxheWJhY2suc3RlcC5sb25nPTYwXVxuXHQgKiBAcGFyYW0ge09iZWpjdH0gW29wdGlvbnMuY29udHJvbHNdIE9iamVjdCBvZiBjb250cm9sc1xuXHQgKiBAcGFyYW0ge1N0cmluZ1tdfSBbb3B0aW9ucy5jb250cm9scy5jb21tb25dIEFycmF5IG9mIGNvbnRyb2xzIGZvciBkZWZhdWx0IHZpZXdcblx0ICogQHBhcmFtIHtTdHJpbmdbXX0gW29wdGlvbnMuY29udHJvbHMuZnVsbHNjcmVlbl0gQXJyYXkgb2YgY29udHJvbCBmb3IgZnVsbHNyZWVuIHZpZXdcblx0ICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLnZvbHVtZV0gVm9sdW1lJ3Mgb3B0aW9uc1xuXHQgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMudm9sdW1lLmRlZmF1bHQ9MC40XSBEZWZhdWx0IHZvbHVtZVxuXHQgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMudm9sdW1lLm11dGVsaW1pdD0wLjA1XSBEZWx0YSB3aGVuIHZvbHVtZSBpcyBtdXRlZFxuXHQgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMudm9sdW1lLnN0ZXA9MC4wNV1cblx0ICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLmtleWJpbmRpbmddXG5cdCAqL1xuXHRsZXQgUGxheWVyID0gZnVuY3Rpb24gKGVsZW1lbnQsIG9wdHMpIHtcblx0XHRjb25zdCBDX0JBQ0tXQVJEID0gJ2JhY2t3YXJkJztcblx0XHRjb25zdCBDX0RJVklERVIgPSAnZGl2aWRlcic7XG5cdFx0Y29uc3QgQ19ET1dOTE9BRCA9ICdkb3dubG9hZCc7XG5cdFx0Y29uc3QgQ19GT1JXQVJEID0gJ2ZvcndhcmQnO1xuXHRcdGNvbnN0IENfRlVMTFNDUkVFTiA9ICdmdWxsc2NyZWVuJztcblx0XHRjb25zdCBDX1BMQVkgPSAncGxheSc7XG5cdFx0Y29uc3QgQ19SQVRFID0gJ3JhdGUnO1xuXHRcdGNvbnN0IENfU09VUkNFID0gJ3NvdXJjZSc7XG5cdFx0Y29uc3QgQ19TVUJUSVRMRSA9ICdzdWJ0aXRsZSc7XG5cdFx0Y29uc3QgQ19USU1FTElORSA9ICd0aW1lbGluZSc7XG5cdFx0Y29uc3QgQ19WT0xVTUUgPSAndm9sdW1lJztcblx0XHRjb25zdCBDX1NFQ1RJT04gPSBcInNlY3Rpb25cIlxuXG5cdFx0dmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0YXV0b3BsYXkgOiBmYWxzZSxcblx0XHRcdGhlaWdodCA6ICdhdXRvJyxcblx0XHRcdGxvb3AgOiBmYWxzZSxcblx0XHRcdG11dGVkIDogZmFsc2UsXG5cdFx0XHRwcmVsb2FkIDogJ21ldGFkYXRhJyxcblx0XHRcdHBvc3RlciA6IG51bGwsXG5cdFx0XHRzdmdQYXRoIDogJy4uL2Rpc3Qvc3ZnL3N2Zy1kZWZzLnN2ZycsXG5cdFx0XHR3aWR0aCA6ICdhdXRvJyxcblx0XHRcdGZ1bGxzY3JlZW4gOiB7XG5cdFx0XHRcdGhpZGVUaW1lbGluZVRpbWUgOiA3MDAwXG5cdFx0XHR9LFxuXHRcdFx0cmF0ZSA6IHtcblx0XHRcdFx0c3RlcCA6IDAuMjUsXG5cdFx0XHRcdG1pbiA6IDAuNSxcblx0XHRcdFx0bWF4IDogNC4wLFxuXHRcdFx0XHQnZGVmYXVsdCcgOiAxXG5cdFx0XHR9LFxuXHRcdFx0cGxheWJhY2sgOiB7XG5cdFx0XHRcdHN0ZXAgOiB7XG5cdFx0XHRcdFx0c2hvcnQgOiA1LFxuXHRcdFx0XHRcdG1lZGl1bSA6IDMwLFxuXHRcdFx0XHRcdGxvbmcgOiA2MFxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0Y29udHJvbHMgOiB7XG5cdFx0XHRcdGNvbW1vbiA6IFtcblx0XHRcdFx0XHRbICdwbGF5JywgJ3ZvbHVtZScsICdkaXZpZGVyJywgJ3RpbWVsaW5lJywgJ2RpdmlkZXInLCAnc2VjdGlvbicsICdkaXZpZGVyJywgJ2Z1bGxzY3JlZW4nIF0sXG5cdFx0XHRcdFx0WyAncmF0ZScsICdkaXZpZGVyJywgJ2JhY2t3YXJkJywgJ2RpdmlkZXInLCAnc291cmNlJywgJ2RpdmlkZXInLCAnc3VidGl0bGUnLCAnZGl2aWRlcicsICdkb3dubG9hZCcsICdkaXZpZGVyJywgQ19LRVlCSU5ESU5HX0lORk8gXVxuXHRcdFx0XHRdLFxuXHRcdFx0XHRmdWxsc2NyZWVuIDogW1xuXHRcdFx0XHRcdFsgJ3BsYXknLCAndm9sdW1lJywgJ2RpdmlkZXInLCAndGltZWxpbmUnLCAnZGl2aWRlcicsICdyYXRlJywgJ2RpdmlkZXInLCBDX0tFWUJJTkRJTkdfSU5GTywgICdkaXZpZGVyJywgJ2JhY2t3YXJkJywgJ2RpdmlkZXInLCAnc291cmNlJywgJ2RpdmlkZXInLCAnc3VidGl0bGUnLCAnZGl2aWRlcicsICdkb3dubG9hZCcsICdkaXZpZGVyJywgJ2Z1bGxzY3JlZW4nIF1cblx0XHRcdFx0XVxuXHRcdFx0fSxcblx0XHRcdHZvbHVtZSA6IHtcblx0XHRcdFx0ZGVmYXVsdCA6IDAuNCxcblx0XHRcdFx0bXV0ZWxpbWl0IDogMC4wNSxcblx0XHRcdFx0c3RlcCA6IDAuMVxuXHRcdFx0fSxcblx0XHRcdGtleUJpbmRpbmcgOiB7XG5cdFx0XHRcdHBsYXkgOiB7XG5cdFx0XHRcdFx0a2V5IDogMzIsXG5cdFx0XHRcdFx0aW5mbyA6IFsnU3BhY2UnXSxcblx0XHRcdFx0XHRkZXNjcmlwdGlvbiA6ICfQndCw0YfQsNGC0Ywg0L/RgNC+0LjQs9GA0YvQstCw0L3QuNC1IC8g0L/QvtGB0YLQsNCy0LjRgtGMINC90LAg0L/QsNGD0LfRgycsXG5cdFx0XHRcdFx0Zm4gOiAodmlkZW8pID0+IHtcblx0XHRcdFx0XHRcdHZpZGVvLnRvZ2dsZVBsYXkoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGJhY2t3YXJkTWVkaXVtIDoge1xuXHRcdFx0XHRcdGtleSA6IDM3LFxuXHRcdFx0XHRcdGluZm8gOiBbJ+KGkCddLFxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uIDogJ9Cf0LXRgNC10LzQvtGC0LDRgtGMINC90LAgMzAg0YHQtdC60YPQvdC0INC90LDQt9Cw0LQnLFxuXHRcdFx0XHRcdGZuIDogKHZpZGVvKSA9PiB7XG5cdFx0XHRcdFx0XHR2aWRlby5jdXJyZW50VGltZSAtPSBvcHRpb25zLnBsYXliYWNrLnN0ZXAubWVkaXVtO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0Zm9yd2FyZE1lZGl1bSA6IHtcblx0XHRcdFx0XHRrZXkgOiAzOSxcblx0XHRcdFx0XHRpbmZvIDogWyfihpInXSxcblx0XHRcdFx0XHRkZXNjcmlwdGlvbiA6ICfQn9C10YDQtdC80L7RgtCw0YLRjCDQvdCwIDMwINGB0LXQutGD0L3QtCDQstC/0LXRgNGR0LQnLFxuXHRcdFx0XHRcdGZuIDogKHZpZGVvKSA9PiB7XG5cdFx0XHRcdFx0XHR2aWRlby5jdXJyZW50VGltZSArPSBvcHRpb25zLnBsYXliYWNrLnN0ZXAubWVkaXVtO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0YmFja3dhcmRTaG9ydCA6IHtcblx0XHRcdFx0XHRzaGlmdEtleSA6IHRydWUsXG5cdFx0XHRcdFx0aW5mbyA6IFsnU2hpZnQnLCAn4oaQJ10sXG5cdFx0XHRcdFx0ZGVzY3JpcHRpb24gOiAn0J/QtdGA0LXQvNC+0YLQsNGC0Ywg0L3QsCA1INGB0LXQutGD0L3QtCDQvdCw0LfQsNC0Jyxcblx0XHRcdFx0XHRrZXkgOiAzNyxcblx0XHRcdFx0XHRmbiA6ICh2aWRlbykgPT4ge1xuXHRcdFx0XHRcdFx0dmlkZW8uY3VycmVudFRpbWUgLT0gb3B0aW9ucy5wbGF5YmFjay5zdGVwLnNob3J0O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0Zm9yd2FyZFNob3J0IDoge1xuXHRcdFx0XHRcdHNoaWZ0S2V5IDogdHJ1ZSxcblx0XHRcdFx0XHRrZXkgOiAzOSxcblx0XHRcdFx0XHRpbmZvIDogWydTaGlmdCcsICfihpInXSxcblx0XHRcdFx0XHRkZXNjcmlwdGlvbiA6ICfQn9C10YDQtdC80L7RgtCw0YLRjCDQvdCwIDUg0YHQtdC60YPQvdC0INC90LDQt9Cw0LQnLFxuXHRcdFx0XHRcdGZuIDogKHZpZGVvKSA9PiB7XG5cdFx0XHRcdFx0XHR2aWRlby5jdXJyZW50VGltZSArPSBvcHRpb25zLnBsYXliYWNrLnN0ZXAuc2hvcnQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXG5cdFx0XHRcdHZvbHVtZVVwIDoge1xuXHRcdFx0XHRcdGtleSA6IDM4LFxuXHRcdFx0XHRcdGluZm8gOiBbJ+KGkSddLFxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uIDogJ9Cj0LLQtdC70LjRh9C40YLRjCDQs9GA0L7QvNC60L7RgdGC0YwnLFxuXHRcdFx0XHRcdGZuIDogKHZpZGVvKSA9PiB7XG5cdFx0XHRcdFx0XHR2aWRlby52b2x1bWUgKz0gb3B0aW9ucy52b2x1bWUuc3RlcDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0dm9sdW1lRG93biA6IHtcblx0XHRcdFx0XHRrZXkgOiA0MCxcblx0XHRcdFx0XHRpbmZvIDogWyfihpMnXSxcblx0XHRcdFx0XHRkZXNjcmlwdGlvbiA6ICfQo9C80LXQvdGM0YjQuNGC0Ywg0LPRgNC+0LzQutC+0YHRgtGMJyxcblx0XHRcdFx0XHRmbiA6ICh2aWRlbykgPT4ge1xuXHRcdFx0XHRcdFx0dmlkZW8udm9sdW1lIC09IG9wdGlvbnMudm9sdW1lLnN0ZXA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0fVxuXHRcdH0sIG9wdHMpO1xuXG5cdFx0LyoqXG5cdFx0ICogVGhpcyBjbGFzcyBtYW5hZ2VzIEZ1bGxTY3JlZW4gQVBJLlxuXHRcdCAqIEBUT0RPOiBhZGQgZnVsbHNjcmVlbmVycm9yIGhhbmRsZXIuXG5cdFx0ICovXG5cdFx0Y2xhc3MgRnVsbHNjcmVlbiB7XG5cblx0XHRcdGNvbnN0cnVjdG9yICgpIHtcblx0XHRcdFx0dGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XG5cdFx0XHRcdHRoaXMuX2NvbGxlY3Rpb24gPSBjb250cm9scy5mdWxsc2NyZWVuO1xuXHRcdFx0XHR0aGlzLl9oaWRlVGltZW91dCA9IG51bGw7XG5cdFx0XHRcdHRoaXMuZnVsbHNjcmVlbkVuYWJsZWQgPSBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gV2hldGhlciBicm93c2VyIHN1cHBvcnRzIGZ1bGxzY3JlZW4gbW9kZS5cblx0XHRcdCAqL1xuXHRcdFx0ZW5hYmxlZCAoKSB7XG5cdFx0XHRcdHJldHVybiAhIShkb2N1bWVudC5mdWxsc2NyZWVuRW5hYmxlZFxuXHRcdFx0XHRcdHx8IGRvY3VtZW50Lm1vekZ1bGxTY3JlZW5FbmFibGVkXG5cdFx0XHRcdFx0fHwgZG9jdW1lbnQubXNGdWxsc2NyZWVuRW5hYmxlZFxuXHRcdFx0XHRcdHx8IGRvY3VtZW50LndlYmtpdFN1cHBvcnRzRnVsbHNjcmVlblxuXHRcdFx0XHRcdHx8IGRvY3VtZW50LndlYmtpdEZ1bGxzY3JlZW5FbmFibGVkXG5cdFx0XHRcdFx0fHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8nKS53ZWJraXRSZXF1ZXN0RnVsbFNjcmVlbik7XG5cdFx0XHR9XG5cblx0XHRcdGluaXQgKCkge1xuXHRcdFx0XHRpZiAoIXRoaXMuZW5hYmxlZCgpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBGdWxsc2NyZWVuIGNoYW5nZSBoYW5kbGVycy5cblx0XHRcdFx0JChkb2N1bWVudCkub24oe1xuXG5cdFx0XHRcdFx0J2Z1bGxzY3JlZW5jaGFuZ2UnIDogKGUpID0+IHtcblx0XHRcdFx0XHRcdHRoaXMudG9nZ2xlRWxlbWVudHMoISEoZG9jdW1lbnQuZnVsbFNjcmVlbiB8fCBkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCkpO1xuXHRcdFx0XHRcdH0sXG5cblx0XHRcdFx0XHQnd2Via2l0ZnVsbHNjcmVlbmNoYW5nZScgOiAoZSkgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy50b2dnbGVFbGVtZW50cyghIWRvY3VtZW50LndlYmtpdElzRnVsbFNjcmVlbik7XG5cdFx0XHRcdFx0fSxcblxuXHRcdFx0XHRcdCdtb3pmdWxsc2NyZWVuY2hhbmdlJyA6IChlKSA9PiB7XG5cdFx0XHRcdFx0XHR0aGlzLnRvZ2dsZUVsZW1lbnRzKCEhZG9jdW1lbnQubW96RnVsbFNjcmVlbik7XG5cdFx0XHRcdFx0fSxcblxuXHRcdFx0XHRcdCdtc2Z1bGxzY3JlZW5jaGFuZ2UnIDogKGUpID0+IHtcblx0XHRcdFx0XHRcdHRoaXMudG9nZ2xlRWxlbWVudHMoISFkb2N1bWVudC5tc0Z1bGxzY3JlZW5FbGVtZW50KTtcblx0XHRcdFx0XHR9LFxuXG5cdFx0XHRcdFx0J3dlYmtpdGJlZ2luZnVsbHNjcmVlbicgOiAoZSkgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy50b2dnbGVFbGVtZW50cyh0cnVlKVxuXHRcdFx0XHRcdH0sXG5cblx0XHRcdFx0XHQnd2Via2l0ZW5kZnVsbHNjcmVlbicgOiAoZSkgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy50b2dnbGVFbGVtZW50cyhmYWxzZSlcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHQvKipcblx0XHRcdCAqIEByZXR1cm5zIHtib29sZWFufSBXaGV0aGVyIGJyb3dzZXIgaXMgaW4gZnVsbHNjcmVlbiBtb2RlLlxuXHRcdFx0ICovXG5cdFx0XHRpcyAoKSB7XG5cdFx0XHRcdHJldHVybiAhIShkb2N1bWVudC5mdWxsU2NyZWVuXG5cdFx0XHRcdFx0fHwgZG9jdW1lbnQud2Via2l0SXNGdWxsU2NyZWVuXG5cdFx0XHRcdFx0fHwgZG9jdW1lbnQubW96RnVsbFNjcmVlblxuXHRcdFx0XHRcdHx8IGRvY3VtZW50Lm1zRnVsbHNjcmVlbkVsZW1lbnRcblx0XHRcdFx0XHR8fCBkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudFxuXHRcdFx0XHRcdHx8IHRoaXMuZnVsbHNjcmVlbkVuYWJsZWQpO1xuXHRcdFx0fVxuXG5cdFx0XHRzaG93RWxlbWVudHMgKCkge1xuXHRcdFx0XHR0aGlzLnBsYXllci50cmlnZ2VyKCdmdWxsc2NyZWVuY2hhbmdlJyk7XG5cdFx0XHRcdGNvbnRhaW5lci5hZGRDbGFzcygnZnVsbHNjcmVlbicpO1xuXHRcdFx0XHRjb250cm9scy5mdWxsc2NyZWVuLnNob3coKTtcblx0XHRcdFx0Y29udHJvbHMuY29tbW9uLmhpZGUoKTtcblx0XHRcdFx0Y29udHJvbHMubWluaS5oaWRlKCk7XG5cblx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMuX2hpZGVUaW1lb3V0KTtcblx0XHRcdFx0dGhpcy5faGlkZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHR0aGlzLl9jb2xsZWN0aW9uLmVsZW1lbnQuaGlkZSgpO1xuXHRcdFx0XHR9LCBvcHRpb25zLmZ1bGxzY3JlZW4uaGlkZVRpbWVsaW5lVGltZSk7XG5cblx0XHRcdFx0JChjb250YWluZXIpLm9uKHtcblx0XHRcdFx0XHQnbW91c2Vtb3ZlLmxlcGxheWVyLmZ1bGxzY3JlZW4taGlkZS10aW1lbGluZScgOiAoZSkgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKCEkKGUuY3VycmVudFRhcmdldCkuaGFzQ2xhc3MoJ2Z1bGxzY3JlZW4nKSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMuX2hpZGVUaW1lb3V0KTtcblx0XHRcdFx0XHRcdHRoaXMuX2NvbGxlY3Rpb24uZWxlbWVudC5zaG93KCk7XG5cdFx0XHRcdFx0XHR0aGlzLl9oaWRlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHR0aGlzLl9jb2xsZWN0aW9uLmVsZW1lbnQuaGlkZSgpO1xuXHRcdFx0XHRcdFx0fSwgb3B0aW9ucy5mdWxsc2NyZWVuLmhpZGVUaW1lbGluZVRpbWUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblx0XHRcdH1cblxuXHRcdFx0aGlkZUVsZW1lbnRzICgpIHtcblx0XHRcdFx0dGhpcy5wbGF5ZXIudHJpZ2dlcignZnVsbHNjcmVlbmNoYW5nZScpO1xuXHRcdFx0XHRjb250YWluZXIucmVtb3ZlQ2xhc3MoJ2Z1bGxzY3JlZW4nKTtcblx0XHRcdFx0Y29udHJvbHMuZnVsbHNjcmVlbi5oaWRlKCk7XG5cdFx0XHRcdGNvbnRyb2xzLmNvbW1vbi5zaG93KCk7XG5cdFx0XHRcdGNvbnRyb2xzLm1pbmkuaGlkZSgpO1xuXHRcdFx0XHRjbGVhclRpbWVvdXQodGhpcy5faGlkZVRpbWVvdXQpO1xuXHRcdFx0XHQkKGNvbnRhaW5lcikub2ZmKCcubGVwbGF5ZXIuZnVsbHNjcmVlbi1oaWRlLXRpbWVsaW5lJyk7XG5cdFx0XHR9XG5cblx0XHRcdHRvZ2dsZSAoKSB7XG5cdFx0XHRcdGxldCBjb250YWluZXJFbCA9IGNvbnRhaW5lclsgMCBdO1xuXHRcdFx0XHRpZiAodGhpcy5pcygpKSB7XG5cdFx0XHRcdFx0aWYgKGRvY3VtZW50LmV4aXRGdWxsc2NyZWVuKVx0XHRcdFx0ZG9jdW1lbnQuZXhpdEZ1bGxzY3JlZW4oKTtcblx0XHRcdFx0XHRlbHNlIGlmIChkb2N1bWVudC5tb3pDYW5jZWxGdWxsU2NyZWVuKVx0ICBkb2N1bWVudC5tb3pDYW5jZWxGdWxsU2NyZWVuKCk7XG5cdFx0XHRcdFx0ZWxzZSBpZiAoZG9jdW1lbnQud2Via2l0Q2FuY2VsRnVsbFNjcmVlbikgICBkb2N1bWVudC53ZWJraXRDYW5jZWxGdWxsU2NyZWVuKCk7XG5cdFx0XHRcdFx0ZWxzZSBpZiAoZG9jdW1lbnQubXNFeGl0RnVsbHNjcmVlbilcdFx0IGRvY3VtZW50Lm1zRXhpdEZ1bGxzY3JlZW4oKTtcblx0XHRcdFx0XHRlbHNlIGlmIChkb2N1bWVudC53ZWJraXRFeGl0RnVsbHNjcmVlbilcdCBkb2N1bWVudC53ZWJraXRFeGl0RnVsbHNjcmVlbigpO1xuXHRcdFx0XHRcdHRoaXMuaGlkZUVsZW1lbnRzKCk7IC8vIEBUT0RPOiBtYWtlIHRoaXMgb25seSBpZiBmdWxsc2NyZWVuIGZpcmVkLlxuXHRcdFx0XHRcdHRoaXMuZnVsbHNjcmVlbkVuYWJsZWQgPSBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRpZiAoY29udGFpbmVyRWwucmVxdWVzdEZ1bGxTY3JlZW4pXHRcdFx0Y29udGFpbmVyRWwucmVxdWVzdEZ1bGxTY3JlZW4oKTtcblx0XHRcdFx0XHRlbHNlIGlmIChjb250YWluZXJFbC53ZWJraXRSZXF1ZXN0RnVsbFNjcmVlbikgY29udGFpbmVyRWwud2Via2l0UmVxdWVzdEZ1bGxTY3JlZW4oKTtcblx0XHRcdFx0XHRlbHNlIGlmIChjb250YWluZXJFbC5tb3pSZXF1ZXN0RnVsbFNjcmVlbilcdGNvbnRhaW5lckVsLm1velJlcXVlc3RGdWxsU2NyZWVuKCk7XG5cdFx0XHRcdFx0ZWxzZSBpZiAoY29udGFpbmVyRWwubXNFeGl0RnVsbHNjcmVlbilcdFx0Y29udGFpbmVyRWwubXNSZXF1ZXN0RnVsbHNjcmVlbigpO1xuXHRcdFx0XHRcdHRoaXMuc2hvd0VsZW1lbnRzKCk7IC8vIEBUT0RPOiBtYWtlIHRoaXMgb25seSBpZiBmdWxsc2NyZWVuIGZpcmVkLlxuXHRcdFx0XHRcdHRoaXMuZnVsbHNjcmVFbmFibGVkID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvKipcblx0XHRcdCAqIFVwZGF0ZSBET00gc3RydWN0dXJlIGFjY29yZGluZyB0byBjdXJyZW50IHN0YXRlLlxuXHRcdFx0ICovXG5cdFx0XHR0b2dnbGVFbGVtZW50cyAoc2hvdykge1xuXHRcdFx0XHRpZiAoISFzaG93KSB7XG5cdFx0XHRcdFx0dGhpcy5zaG93RWxlbWVudHMoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHR0aGlzLmhpZGVFbGVtZW50cygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y2xhc3MgVmlkZW8ge1xuXHRcdFx0Y29uc3RydWN0b3IgKGN0eCkge1xuXHRcdFx0XHR0aGlzLnBsYXllciA9IHBsYXllcjtcblx0XHRcdFx0dGhpcy5fY3R4ID0gY3R4O1xuXHRcdFx0XHR0aGlzLl92aWRlbyA9IGN0eFsgMCBdO1xuXHRcdFx0XHR0aGlzLmZ1bGxzY3JlZW4gPSBuZXcgRnVsbHNjcmVlbigpO1xuXHRcdFx0XHR0aGlzLnN1YnRpdGxlcyA9IFtdO1xuXHRcdFx0XHR0aGlzLmJ1ZmZlclJhbmdlcyA9IFtdO1xuXHRcdFx0XHR0aGlzLnBsYXliYWNrUmF0ZSA9IHRoaXMuX3ZpZGVvLnBsYXliYWNrUmF0ZTtcblx0XHRcdH1cblxuXHRcdFx0Z2V0IGN1cnJlbnRUaW1lICgpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuX3ZpZGVvLmN1cnJlbnRUaW1lO1xuXHRcdFx0fVxuXG5cdFx0XHRzZXQgY3VycmVudFRpbWUgKHZhbHVlKSB7XG5cdFx0XHRcdGlmICh2YWx1ZSA+IHRoaXMuZHVyYXRpb24pIHtcblx0XHRcdFx0XHR0aGlzLl92aWRlby5jdXJyZW50VGltZSA9IHRoaXMuZHVyYXRpb25cblx0XHRcdFx0fSBlbHNlIGlmICh2YWx1ZSA8IDAgKSB7XG5cdFx0XHRcdFx0dGhpcy5fdmlkZW8uY3VycmVudFRpbWUgPSAwXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5fdmlkZW8uY3VycmVudFRpbWUgPSB2YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRnZXQgZHVyYXRpb24gKCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5fdmlkZW8uZHVyYXRpb247XG5cdFx0XHR9XG5cblx0XHRcdGdldCBoZWlnaHQgKCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5fdmlkZW8uY2xpZW50SGVpZ2h0O1xuXHRcdFx0fVxuXG5cdFx0XHRnZXQgcmF0ZSAoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLl92aWRlby5wbGF5YmFja1JhdGU7XG5cdFx0XHR9XG5cblx0XHRcdGdldCB3aWR0aCAoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLl92aWRlby5jbGllbnRXaWR0aDtcblx0XHRcdH1cblxuXHRcdFx0c2V0IHJhdGUgKHZhbHVlKSB7XG5cdFx0XHRcdGlmICggdmFsdWUgPD0gb3B0aW9ucy5yYXRlLm1heCAmJiB2YWx1ZSA+PSBvcHRpb25zLnJhdGUubWluICkge1xuXHRcdFx0XHRcdHRoaXMuX3ZpZGVvLnBsYXliYWNrUmF0ZSA9IHZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8qKiBUT0RPOiBDaGFuY2hlIGNvbnRyb2xzLnJhdGUgaW4gZXZlbnQgaGFuZGxlciAqL1xuXHRcdFx0XHRjb250cm9scy5yYXRlID0gdGhpcy5fdmlkZW8ucGxheWJhY2tSYXRlO1xuXHRcdFx0fVxuXG5cdFx0XHRzZXQgc291cmNlICh2YWx1ZSkge1xuXHRcdFx0XHRsZXQgdGltZSA9IHRoaXMuX3ZpZGVvLmN1cnJlbnRUaW1lO1xuXHRcdFx0XHRsZXQgcmF0ZSA9IHRoaXMuX3ZpZGVvLnBsYXliYWNrUmF0ZTtcblx0XHRcdFx0bGV0IHN0b3AgPSAoIXRoaXMuX3ZpZGVvLnBsYXllZCB8fCB0aGlzLl92aWRlby5wYXVzZWQpO1xuXHRcdFx0XHR0aGlzLl9jdHguYXR0cignc3JjJywgdmFsdWUpO1xuXHRcdFx0XHR0aGlzLl92aWRlbyA9IHRoaXMuX2N0eFsgMCBdO1xuXHRcdFx0XHR0aGlzLl92aWRlby5wbGF5YmFja1JhdGUgPSByYXRlO1xuXHRcdFx0XHR0aGlzLl92aWRlby5jdXJyZW50VGltZSA9IHRpbWU7XG5cdFx0XHRcdGlmIChzdG9wKVxuXHRcdFx0XHRcdHRoaXMucGF1c2UoKTtcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdHRoaXMucGxheSgpO1xuXG5cdFx0XHRcdC8vIEBUT0RPIG1ha2UgdGhpcyByaWdodCB3YXlcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0Y29udHJvbHMudG90YWxUaW1lID0gc2Vjb25kc1RvVGltZSh0aGlzLl92aWRlby5kdXJhdGlvbik7XG5cdFx0XHRcdH0sIDEwMCk7XG5cblx0XHRcdH1cblxuXHRcdFx0c2V0IHRyYWNrICh2YWx1ZSkge1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX3ZpZGVvLnRleHRUcmFja3MubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRpZiAodGhpcy5fdmlkZW8udGV4dFRyYWNrc1sgaSBdLmxhbmd1YWdlID09IHZhbHVlKVxuXHRcdFx0XHRcdFx0dGhpcy5fdmlkZW8udGV4dFRyYWNrc1sgaSBdLm1vZGUgPSAnc2hvd2luZyc7XG5cdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0dGhpcy5fdmlkZW8udGV4dFRyYWNrc1sgaSBdLm1vZGUgPSAnaGlkZGVuJztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRnZXQgdm9sdW1lICgpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuX3ZpZGVvLnZvbHVtZTtcblx0XHRcdH1cblxuXHRcdFx0c2V0IHZvbHVtZSAodmFsdWUpIHtcblx0XHRcdFx0aWYgKHZhbHVlID4gMSkge1xuXHRcdFx0XHRcdHRoaXMuX3ZpZGVvLnZvbHVtZSA9IDE7XG5cdFx0XHRcdH0gZWxzZSBpZiAodmFsdWUgPCBvcHRpb25zLnZvbHVtZS5tdXRlbGltaXQpIHtcblx0XHRcdFx0XHR0aGlzLl92aWRlby52b2x1bWUgPSAwO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuX3ZpZGVvLnZvbHVtZSA9IHZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuX3ZpZGVvLm11dGUgPSAodmFsdWUgPCBvcHRpb25zLnZvbHVtZS5tdXRlbGltaXQpO1xuXHRcdFx0fVxuXG5cdFx0XHRnZXQgYnVmZmVyZWQgKCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5fdmlkZW8uYnVmZmVyZWQ7XG5cdFx0XHR9XG5cblx0XHRcdGdldCBsb2FkZWQgKCkge1xuXHRcdFx0XHRsZXQgbG9hZGVkID0gW107XG5cdFx0XHRcdGxldCBtZWRpYSA9IHRoaXMuX3ZpZGVvO1xuXHRcdFx0XHQvKiogRkY0KywgQ2hyb21lICovXG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHRtZWRpYS5idWZmZXJlZCAmJlxuXHRcdFx0XHRcdG1lZGlhLmJ1ZmZlcmVkLmVuZCAmJlxuXHRcdFx0XHRcdG1lZGlhLmR1cmF0aW9uID4gMFxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG1lZGlhLmJ1ZmZlcmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0XHRsZXQgc3RhcnQgPSBtZWRpYS5idWZmZXJlZC5zdGFydChpKSAvIG1lZGlhLmR1cmF0aW9uO1xuXHRcdFx0XHRcdFx0bGV0IGVuZCA9IG1lZGlhLmJ1ZmZlcmVkLmVuZChpKSAvIG1lZGlhLmR1cmF0aW9uO1xuXHRcdFx0XHRcdFx0bGV0IHNlZ21lbnQgPSBbc3RhcnQsIGVuZF07XG5cdFx0XHRcdFx0XHRsb2FkZWQucHVzaChzZWdtZW50KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0LyoqIFNhZmFyaSA1LCBXZWJraXQgaGVhZCwgRkYzLjYsIENocm9tZSA2LCBJRSA3LzggKi9cblx0XHRcdFx0ZWxzZSBpZiAoXG5cdFx0XHRcdFx0bWVkaWEuYnl0ZXNUb3RhbCAhPSBudWxsICYmXG5cdFx0XHRcdFx0bWVkaWEuYnl0ZXNUb3RhbCA+IDAgJiZcblx0XHRcdFx0XHRtZWRpYS5idWZmZXJlZEJ5dGVzICE9IG51bGxcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0bG9hZGVkLnB1c2goWzAsIG1lZGlhLmJ1ZmZlcmVkQnl0ZXMgLyBtZWRpYS5ieXRlc1RvdGFsXSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIGxvYWRlZDtcblx0XHRcdH1cblxuXHRcdFx0Z2V0IGxvYWRlZFNpemUgKCkge1xuXHRcdFx0XHRjb25zdCBTVEFSVCA9IDA7XG5cdFx0XHRcdGNvbnN0IEVORCA9IDE7XG5cdFx0XHRcdGxldCBzdW0gPSAwXG5cdFx0XHRcdHRoaXMubG9hZGVkLmZvckVhY2goaXRlbSA9PiB7XG5cdFx0XHRcdFx0c3VtICs9IGl0ZW1bRU5EXSAtIGl0ZW1bU1RBUlRdO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0cmV0dXJuIHN1bTtcblx0XHRcdH1cblxuXHRcdFx0aW5pdCAoKSB7XG5cdFx0XHRcdGxldCBkZmQgPSAkLkRlZmVycmVkKCk7XG5cdFx0XHRcdHRoaXMuX2luaXRTdWJ0aXRsZXMoKTtcblx0XHRcdFx0dGhpcy5faW5pdFZpZGVvKClcblx0XHRcdFx0XHQuZG9uZSgoKSA9PiB7XG5cdFx0XHRcdFx0XHR0aGlzLmZ1bGxzY3JlZW4uaW5pdCgpO1xuXHRcdFx0XHRcdFx0Y29udHJvbHMuaW5pdCgpO1xuXHRcdFx0XHRcdFx0dGhpcy5faW5pdFJhdGUoKTtcblx0XHRcdFx0XHRcdHRoaXMuX2luaXRWb2x1bWUoKTtcblx0XHRcdFx0XHRcdGRmZC5yZXNvbHZlKCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdHRoaXMuX2luaXRDdXN0b21FdmVudHMoKTtcblx0XHRcdFx0dGhpcy5faW5pdEh0bWxFdmVudHMoKTtcblxuXHRcdFx0XHRkZmQubm90aWZ5KCk7XG5cdFx0XHRcdHJldHVybiBkZmQucHJvbWlzZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHR0b2dnbGVQbGF5ICgpIHtcblx0XHRcdFx0LyoqIEluIHNhZmFyaSBpdCBkb2Vzbid0IHdvcmsgKi9cblx0XHRcdFx0Ly8gaWYgKHRoaXMuX3ZpZGVvLnJlYWR5U3RhdGUgPCAyKSB7XG5cdFx0XHRcdC8vIFx0b3ZlcmxheS5oaWRlKCk7XG5cdFx0XHRcdC8vIFx0X3Nob3dOb3RpZmljYXRpb24oJ0Vycm9yIScpO1xuXHRcdFx0XHQvLyBcdHJldHVybjtcblx0XHRcdFx0Ly8gfVxuXHRcdFx0XHRpZiAoIXRoaXMuX3ZpZGVvLnBsYXllZCB8fCB0aGlzLl92aWRlby5wYXVzZWQpIHtcblx0XHRcdFx0XHR0aGlzLnBsYXkoKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLnBhdXNlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0c2VlayAodGltZSkge1xuXHRcdFx0XHR0aGlzLl92aWRlby5jdXJyZW50VGltZSA9IHRpbWU7XG5cdFx0XHR9XG5cblx0XHRcdHBsYXkgKCkge1xuXHRcdFx0XHRvdmVybGF5LmhpZGUoKTtcblx0XHRcdFx0Y29udHJvbHMucGxheSgpO1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5fdmlkZW8ucGxheSgpO1xuXHRcdFx0fVxuXG5cdFx0XHRwYXVzZSAoKSB7XG5cdFx0XHRcdG92ZXJsYXkuc2hvdygpO1xuXHRcdFx0XHRjb250cm9scy5wYXVzZSgpO1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5fdmlkZW8ucGF1c2UoKTtcblx0XHRcdH1cblxuXHRcdFx0dHJpZ2dlciAoZXZlbnROYW1lLCAuLi5hcmdzKSB7XG5cdFx0XHRcdHRoaXMucGxheWVyLnRyaWdnZXIuY2FsbCgkKHRoaXMuX3ZpZGVvKSwgYGxlcGxheWVyXyR7ZXZlbnROYW1lfWAsIC4uLmFyZ3MpO1xuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH1cblxuXHRcdFx0b24gKGV2ZW50TmFtZSwgLi4uYXJncykge1xuXHRcdFx0XHQkKHRoaXMuX3ZpZGVvKS5vbi5jYWxsKCQodGhpcy5fdmlkZW8pLCBgbGVwbGF5ZXJfJHtldmVudE5hbWV9YCwgLi4uYXJncyk7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fVxuXG5cdFx0XHRfaW5pdFJhdGUgKCkge1xuXHRcdFx0XHR0aGlzLnJhdGUgPSBDb29raWUuZ2V0KCdyYXRlJywgb3B0aW9ucy5yYXRlLmRlZmF1bHQpO1xuXHRcdFx0fVxuXG5cdFx0XHRfaW5pdFZvbHVtZSAoKSB7XG5cdFx0XHRcdHRoaXMudm9sdW1lID0gQ29va2llLmdldCgndm9sdW1lJywgb3B0aW9ucy52b2x1bWUuZGVmYXVsdCk7XG5cdFx0XHR9XG5cblx0XHRcdF9pbml0U3VidGl0bGVzICgpIHtcblx0XHRcdFx0bGV0IF9zZWxmID0gdGhpcztcblx0XHRcdFx0dGhpcy5fY3R4LmNoaWxkcmVuKCd0cmFja1traW5kPVwic3VidGl0bGVzXCJdJykuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0bGV0IGxhbmd1YWdlID0gJCh0aGlzKS5hdHRyKCdzcmNsYW5nJyk7XG5cdFx0XHRcdFx0bGV0IHRpdGxlID0gJCh0aGlzKS5hdHRyKCdsYWJlbCcpO1xuXHRcdFx0XHRcdGxldCBzcmMgPSAkKHRoaXMpLmF0dHIoJ3NyYycpO1xuXHRcdFx0XHRcdGlmICh0aXRsZS5sZW5ndGggPiAwICYmIHNyYy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0XHRfc2VsZi5zdWJ0aXRsZXMucHVzaCh7XG5cdFx0XHRcdFx0XHRcdHRpdGxlIDogdGl0bGUsXG5cdFx0XHRcdFx0XHRcdHNyYyA6IHNyYyxcblx0XHRcdFx0XHRcdFx0bGFuZ3VhZ2UgOiBsYW5ndWFnZVxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0X2luaXRWaWRlbyAoKSB7XG5cdFx0XHRcdGxldCBkZmQgPSAkLkRlZmVycmVkKCk7XG5cdFx0XHRcdGlmICh0aGlzLl92aWRlby5yZWFkeVN0YXRlID4gSFRNTE1lZGlhRWxlbWVudC5IQVZFX05PVEhJTkcpIHtcblx0XHRcdFx0XHRkZmQucmVzb2x2ZSgpXG5cdFx0XHRcdFx0dGhpcy5fb25Mb2FkZWRNZXRhRGF0YSgpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCQodGhpcy5fdmlkZW8pLm9uZSgnbG9hZGVkbWV0YWRhdGEnLCAoZSkgPT4ge1xuXHRcdFx0XHRcdFx0ZGZkLnJlc29sdmUoKVxuXHRcdFx0XHRcdFx0dGhpcy5fb25Mb2FkZWRNZXRhRGF0YSgpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGRmZC5ub3RpZnkoKTtcblx0XHRcdFx0cmV0dXJuIGRmZC5wcm9taXNlKClcblx0XHRcdH1cblxuXHRcdFx0X29uTG9hZGVkTWV0YURhdGEgKCkge1xuXHRcdFx0XHRsZXQgX3NlbGYgPSB0aGlzO1xuXG5cdFx0XHRcdGNvbnRhaW5lclxuXHRcdFx0XHRcdC5jc3MoJ3dpZHRoJywgJzEwMCUnKVxuXHRcdFx0XHRcdC5jc3MoJ21heC13aWR0aCcsIHRoaXMuX3ZpZGVvLmNsaWVudFdpZHRoICsgJ3B4Jyk7XG5cblx0XHRcdFx0Ly8gVGhpcyBpcyBnZW5lcmFsbHkgZm9yIEZpcmVmb3ggb25seVxuXHRcdFx0XHQvLyBiZWNhdXNlIGl0IHNvbWVob3cgcmVzZXRzIHRyYWNrIGxpc3Rcblx0XHRcdFx0Ly8gZm9yIHZpZGVvIGVsZW1lbnQgYWZ0ZXIgRE9NIG1hbmlwdWxhdGlvbi5cblxuXHRcdFx0XHRpZiAodGhpcy5fdmlkZW8udGV4dFRyYWNrcy5sZW5ndGggPT0gMCAmJiB0aGlzLnN1YnRpdGxlcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0dGhpcy5fY3R4LmNoaWxkcmVuKCd0cmFja1traW5kPVwic3VidGl0bGVzXCJdJykucmVtb3ZlKCk7XG5cdFx0XHRcdFx0Zm9yICh2YXIgaSBpbiB0aGlzLnN1YnRpdGxlcykge1xuXHRcdFx0XHRcdFx0aWYgKHRoaXMuc3VidGl0bGVzLmhhc093blByb3BlcnR5KGkpKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMuX2N0eFxuXHRcdFx0XHRcdFx0XHRcdC5hcHBlbmQoJCgnPHRyYWNrLz4nKVxuXHRcdFx0XHRcdFx0XHRcdFx0LmF0dHIoJ2xhYmVsJywgdGhpcy5zdWJ0aXRsZXNbIGkgXS50aXRsZSlcblx0XHRcdFx0XHRcdFx0XHRcdC5hdHRyKCdzcmMnLCB0aGlzLnN1YnRpdGxlc1sgaSBdLnNyYylcblx0XHRcdFx0XHRcdFx0XHRcdC5hdHRyKCdzcmNsYW5nJywgdGhpcy5zdWJ0aXRsZXNbIGkgXS5sYW5ndWFnZSlcblx0XHRcdFx0XHRcdFx0XHRcdC5hdHRyKCdpZCcsIHRoaXMuc3VidGl0bGVzWyBpIF0ubGFuZ3VhZ2UpXG5cdFx0XHRcdFx0XHRcdFx0XHQuYXR0cigna2luZCcsICdzdWJ0aXRsZXMnKSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIHRoaXMudHJpZ2dlcignbG9hZGVkbWV0YWRhdGEnKVxuXHRcdFx0fVxuXG5cdFx0XHRfaW5pdEh0bWxFdmVudHMgKCkge1xuXHRcdFx0XHRsZXQgbWVkaWFFbGVtZW50ID0gJCh0aGlzLl92aWRlbyk7XG5cdFx0XHRcdGxldCB0aW1lcklkID0gbnVsbDtcblxuXHRcdFx0XHRtZWRpYUVsZW1lbnQub24oe1xuXG5cdFx0XHRcdFx0J3RpbWV1cGRhdGUnIDogKGUpID0+IHtcblx0XHRcdFx0XHRcdGNvbnRyb2xzLm1vdmVUaW1lTWFya2VyKCk7XG5cdFx0XHRcdFx0XHR0aGlzLnBsYXllci50cmlnZ2VyKCd0aW1ldXBkYXRlJywgeyB0aW1lIDogdmlkZW8uY3VycmVudFRpbWUgfSk7XG5cdFx0XHRcdFx0fSxcblxuXHRcdFx0XHRcdCdlbmRlZCcgOiAoKSA9PiB7XG5cdFx0XHRcdFx0XHR0aGlzLnBhdXNlKCk7XG5cdFx0XHRcdFx0XHR0aGlzLnBsYXllci50cmlnZ2VyKCdlbmRlZCcpO1xuXG5cdFx0XHRcdFx0fSxcblxuXHRcdFx0XHRcdCdkYmxjbGljaycgOiAoKSA9PiB7XG5cdFx0XHRcdFx0XHRjbGVhclRpbWVvdXQodGltZXJJZCk7XG5cdFx0XHRcdFx0XHR0aGlzLmZ1bGxzY3JlZW4udG9nZ2xlKCk7XG5cdFx0XHRcdFx0fSxcblxuXHRcdFx0XHRcdCdjbGljaycgOiAoKSA9PiB7XG5cdFx0XHRcdFx0XHRjbGVhclRpbWVvdXQodGltZXJJZCk7XG5cdFx0XHRcdFx0XHR0aW1lcklkID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGNvbnRhaW5lci5mb2N1cygpXG5cdFx0XHRcdFx0XHRcdHRoaXMudG9nZ2xlUGxheSgpO1xuXHRcdFx0XHRcdFx0fSwgMzAwKTtcblx0XHRcdFx0XHR9LFxuXG5cdFx0XHRcdFx0J3ZvbHVtZWNoYW5nZScgOiAoZSkgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy5wbGF5ZXIudHJpZ2dlcigndm9sdW1lY2hhbmdlJywgeyB2b2x1bWUgOiB0aGlzLnZvbHVtZSB9KTtcblx0XHRcdFx0XHR9LFxuXG5cdFx0XHRcdFx0J2NhbnBsYXknIDogKGUpID0+IHtcblx0XHRcdFx0XHRcdGxvYWRlci5oaWRlKCk7XG5cdFx0XHRcdFx0XHR0aGlzLnBsYXllci50cmlnZ2VyKCdjYW5wbGF5Jyk7XG5cdFx0XHRcdFx0fSxcblxuXHRcdFx0XHRcdCd3YWl0aW5nJyA6IChlKSA9PiB7XG5cdFx0XHRcdFx0XHRsb2FkZXIuc2hvdygpO1xuXHRcdFx0XHRcdFx0dGhpcy5wbGF5ZXIudHJpZ2dlcignd2FpdGluZycpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0X2luaXRDdXN0b21FdmVudHMgKCkge1xuXHRcdFx0XHRsZXQgbWVkaWFFbGVtZW50ID0gJCh0aGlzLl92aWRlbyk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y2xhc3MgQ29udHJvbENvbGxlY3Rpb24ge1xuXHRcdFx0Y29uc3RydWN0b3IgKG5hbWUsIGFjdGl2ZSkge1xuXHRcdFx0XHR0aGlzLml0ZW1zID0ge307XG5cdFx0XHRcdHRoaXMuYWN0aXZlID0gYWN0aXZlIHx8IGZhbHNlO1xuXHRcdFx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdFx0fVxuXG5cdFx0XHRzZXQgZG93bmxvYWQgKHZhbHVlKSB7XG5cdFx0XHRcdGlmICh0aGlzLmhhcyhDX0RPV05MT0FEKSkge1xuXHRcdFx0XHRcdHRoaXMuaXRlbXMuZG93bmxvYWQubGluayA9IHZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHNldCByYXRlICh2YWx1ZSkge1xuXHRcdFx0XHRpZiAodGhpcy5oYXMoQ19SQVRFKSkge1xuXHRcdFx0XHRcdHRoaXMuaXRlbXMucmF0ZS52YWx1ZSA9IHZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHNldCBzb3VyY2UgKHZhbHVlKSB7XG5cdFx0XHRcdGlmICh0aGlzLmhhcyhDX1NPVVJDRSkpIHtcblx0XHRcdFx0XHR0aGlzLml0ZW1zLnNvdXJjZS5zZXQodmFsdWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHNldCB0b3RhbFRpbWUgKHZhbHVlKSB7XG5cdFx0XHRcdGlmICh0aGlzLmhhcyhDX1RJTUVMSU5FKSlcblx0XHRcdFx0XHR0aGlzLml0ZW1zLnRpbWVsaW5lLnRvdGFsVGltZS50ZXh0ID0gdmFsdWU7XG5cdFx0XHR9XG5cblx0XHRcdHNldCB2b2x1bWUgKHZhbHVlKSB7XG5cdFx0XHRcdGlmICh0aGlzLmhhcyhDX1ZPTFVNRSkpXG5cdFx0XHRcdFx0dGhpcy5pdGVtcy52b2x1bWUudmFsdWUgPSB2YWx1ZTtcblx0XHRcdH1cblxuXHRcdFx0ZGlzYWJsZSAoKSB7XG5cdFx0XHRcdGZvciAobGV0IGkgaW4gdGhpcy5pdGVtcykge1xuXHRcdFx0XHRcdGlmICghdGhpcy5pdGVtcy5oYXNPd25Qcm9wZXJ0eShpKSkgY29udGludWU7XG5cdFx0XHRcdFx0dGhpcy5pdGVtc1sgaSBdLmRpc2FibGUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRhZGQgKG5hbWUpIHtcblx0XHRcdFx0aWYgKG5hbWUgPT0gQ19ESVZJREVSKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGNvbnRyb2xGYWN0b3J5KHBsYXllciwgbmFtZSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5pdGVtc1sgbmFtZSBdID0gY29udHJvbEZhY3RvcnkocGxheWVyLCBuYW1lKTtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5pdGVtc1sgbmFtZSBdLmVsZW1lbnQ7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aGFzIChuYW1lKSB7XG5cdFx0XHRcdHJldHVybiAodHlwZW9mIHRoaXMuaXRlbXNbIG5hbWUgXSA9PSAnb2JqZWN0Jyk7XG5cdFx0XHR9XG5cblx0XHRcdGhpZGUgKCkge1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQuaGlkZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHRpbml0ICgpIHtcblx0XHRcdFx0dGhpcy5lbGVtZW50ID0gY29udGFpbmVyLmZpbmQoYC5jb250cm9scy0ke3RoaXMubmFtZX1gKVxuXHRcdFx0XHRmb3IgKGxldCBpIGluIHRoaXMuaXRlbXMpIHtcblx0XHRcdFx0XHRpZiAoIXRoaXMuaXRlbXMuaGFzT3duUHJvcGVydHkoaSkpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdCQuaXNGdW5jdGlvbih0aGlzLml0ZW1zW2ldLmluaXQpICYmIHRoaXMuaXRlbXNbaV0uaW5pdCgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuaW5pdFRpbWVsaW5lKCk7XG5cdFx0XHRcdC8vdGhpcy50b3RhbFRpbWUgPSBzZWNvbmRzVG9UaW1lKHZpZGVvLmR1cmF0aW9uKTtcblx0XHRcdFx0dGhpcy5kb3dubG9hZCA9IHNvdXJjZXNbIDAgXS5zcmM7XG5cdFx0XHR9XG5cblx0XHRcdGluaXRUaW1lbGluZSAoKSB7XG5cdFx0XHRcdGlmICh0aGlzLmhhcyhDX1RJTUVMSU5FKSkge1xuXHRcdFx0XHRcdGlmICh0aGlzLml0ZW1zLnRpbWVsaW5lLmVsZW1lbnQud2lkdGgoKSA8IDIwKVxuXHRcdFx0XHRcdFx0dGhpcy5pdGVtcy50aW1lbGluZS5lbGVtZW50LmhpZGUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRtb3ZlVGltZU1hcmtlciAoKSB7XG5cdFx0XHRcdGlmICh0aGlzLmhhcyhDX1RJTUVMSU5FKSlcblx0XHRcdFx0XHR0aGlzLml0ZW1zLnRpbWVsaW5lLm1vdmUoKTtcblx0XHRcdH1cblxuXHRcdFx0cGF1c2UgKCkge1xuXHRcdFx0XHRpZiAodGhpcy5oYXMoQ19QTEFZKSlcblx0XHRcdFx0XHR0aGlzLml0ZW1zLnBsYXkucGF1c2UoKTtcblx0XHRcdH1cblxuXHRcdFx0cGxheSAoKSB7XG5cdFx0XHRcdGlmICh0aGlzLmhhcyhDX1BMQVkpKVxuXHRcdFx0XHRcdHRoaXMuaXRlbXMucGxheS5wbGF5KCk7XG5cdFx0XHR9XG5cblx0XHRcdHNob3cgKCkge1xuXHRcdFx0XHRjb250YWluZXIuZmluZCgnLmNvbnRyb2xzLScgKyB0aGlzLm5hbWUpLnNob3coKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRjbGFzcyBDb250cm9scyB7XG5cdFx0XHRjb25zdHJ1Y3RvciAoKSB7XG5cdFx0XHRcdHRoaXMuY29sbGVjdGlvbnMgPSB7XG5cdFx0XHRcdFx0Y29tbW9uIDogbmV3IENvbnRyb2xDb2xsZWN0aW9uKCdjb21tb24nKSxcblx0XHRcdFx0XHRtaW5pIDogbmV3IENvbnRyb2xDb2xsZWN0aW9uKCdtaW5pJyksXG5cdFx0XHRcdFx0ZnVsbHNjcmVlbiA6IG5ldyBDb250cm9sQ29sbGVjdGlvbignZnVsbHNjcmVlbicpXG5cdFx0XHRcdH07XG5cdFx0XHRcdHRoaXMuY29sbGVjdGlvbnMuY29tbW9uLmFjdGl2ZSA9IHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdGdldCBjb21tb24gKCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5jb2xsZWN0aW9ucy5jb21tb247XG5cdFx0XHR9XG5cblx0XHRcdGdldCBmdWxsc2NyZWVuICgpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuY29sbGVjdGlvbnMuZnVsbHNjcmVlbjtcblx0XHRcdH1cblxuXHRcdFx0Z2V0IG1pbmkgKCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5jb2xsZWN0aW9ucy5taW5pO1xuXHRcdFx0fVxuXG5cdFx0XHRzZXQgZG93bmxvYWQgKHZhbHVlKSB7XG5cdFx0XHRcdGZvciAodmFyIGkgaW4gdGhpcy5jb2xsZWN0aW9ucykge1xuXHRcdFx0XHRcdHRoaXMuY29sbGVjdGlvbnNbIGkgXS5kb3dubG9hZCA9IHZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHNldCByYXRlICh2YWx1ZSkge1xuXHRcdFx0XHRDb29raWUuc2V0KCdyYXRlJywgdmFsdWUpO1xuXHRcdFx0XHRmb3IgKHZhciBpIGluIHRoaXMuY29sbGVjdGlvbnMpIHtcblx0XHRcdFx0XHR0aGlzLmNvbGxlY3Rpb25zWyBpIF0ucmF0ZSA9IHZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHNldCBzb3VyY2UgKHZhbHVlKSB7XG5cdFx0XHRcdGZvciAodmFyIGkgaW4gdGhpcy5jb2xsZWN0aW9ucykge1xuXHRcdFx0XHRcdHRoaXMuY29sbGVjdGlvbnNbIGkgXS5zb3VyY2UgPSB2YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRzZXQgdG90YWxUaW1lICh2YWx1ZSkge1xuXHRcdFx0XHRmb3IgKHZhciBpIGluIHRoaXMuY29sbGVjdGlvbnMpIHtcblx0XHRcdFx0XHR0aGlzLmNvbGxlY3Rpb25zWyBpIF0udG90YWxUaW1lID0gdmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0c2V0IHZvbHVtZSAodmFsdWUpIHtcblx0XHRcdFx0Zm9yICh2YXIgaSBpbiB0aGlzLmNvbGxlY3Rpb25zKSB7XG5cdFx0XHRcdFx0dGhpcy5jb2xsZWN0aW9uc1sgaSBdLnZvbHVtZSA9IHZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdENvb2tpZS5zZXQoJ3ZvbHVtZScsIHZhbHVlKTtcblx0XHRcdH1cblxuXHRcdFx0ZGlzYWJsZSAoKSB7XG5cdFx0XHRcdGZvciAodmFyIGkgaW4gdGhpcy5jb2xsZWN0aW9ucykge1xuXHRcdFx0XHRcdHRoaXMuY29sbGVjdGlvbnNbIGkgXS5kaXNhYmxlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aGFzIChuYW1lKSB7XG5cdFx0XHRcdHJldHVybiAodHlwZW9mIHRoaXMuY29sbGVjdGlvbnNbIG5hbWUgXSA9PSAnb2JqZWN0Jyk7XG5cdFx0XHR9XG5cblx0XHRcdGluaXQgKCkge1xuXHRcdFx0XHRmb3IgKHZhciBpIGluIHRoaXMuY29sbGVjdGlvbnMpIHtcblx0XHRcdFx0XHR0aGlzLmNvbGxlY3Rpb25zWyBpIF0uaW5pdCgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuY29sbGVjdGlvbnMuY29tbW9uLnNob3coKTtcblx0XHRcdFx0dGhpcy5jb2xsZWN0aW9ucy5taW5pLmhpZGUoKTtcblx0XHRcdFx0dGhpcy5jb2xsZWN0aW9ucy5mdWxsc2NyZWVuLmhpZGUoKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRtb3ZlVGltZU1hcmtlciAoKSB7XG5cdFx0XHRcdGZvciAodmFyIGkgaW4gdGhpcy5jb2xsZWN0aW9ucylcblx0XHRcdFx0XHR0aGlzLmNvbGxlY3Rpb25zWyBpIF0ubW92ZVRpbWVNYXJrZXIoKTtcblx0XHRcdH1cblxuXHRcdFx0cGF1c2UgKCkge1xuXHRcdFx0XHRmb3IgKHZhciBpIGluIHRoaXMuY29sbGVjdGlvbnMpXG5cdFx0XHRcdFx0dGhpcy5jb2xsZWN0aW9uc1sgaSBdLnBhdXNlKCk7XG5cdFx0XHR9XG5cblx0XHRcdHBsYXkgKCkge1xuXHRcdFx0XHRmb3IgKHZhciBpIGluIHRoaXMuY29sbGVjdGlvbnMpXG5cdFx0XHRcdFx0dGhpcy5jb2xsZWN0aW9uc1sgaSBdLnBsYXkoKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRjbGFzcyBTZWN0aW9ucyB7XG5cdFx0XHRjb25zdHJ1Y3RvcihpdGVtcykge1xuXHRcdFx0XHR0aGlzLnBsYXllciA9IHBsYXllcjtcblxuXHRcdFx0XHR0aGlzLml0ZW1zID0gaXRlbXM7XG5cdFx0XHRcdGZvciAoIGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRsZXQgZW5kU2VjdGlvbjtcblx0XHRcdFx0XHRpZiAoaSA8ICh0aGlzLml0ZW1zLmxlbmd0aCAtIDEpKSB7XG5cdFx0XHRcdFx0XHRlbmRTZWN0aW9uID0gdGhpcy5pdGVtc1tpKzFdLmJlZ2luXG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGVuZFNlY3Rpb24gPSB2aWRlby5kdXJhdGlvbjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5pdGVtc1tpXS5lbmQgPSBlbmRTZWN0aW9uO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5lbGVtZW50ID0gJCgnPGRpdiAvPicpLmFkZENsYXNzKCdsZXBsYXllci1zZWN0aW9ucycpO1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQuYXBwZW5kKHRoaXMuX2NyZWF0ZVNlY3Rpb25zKGl0ZW1zKSk7XG5cdFx0XHRcdHRoaXMuZWxlbWVudC5maW5kKCcubGVwbGF5ZXItc2VjdGlvbicpLm9uKCdjbGljaycsIHRoaXMub25TZWN0aW9uQ2xpY2suYmluZCh0aGlzKSk7XG5cblx0XHRcdFx0dGhpcy5fYWN0aXZlU2VjdGlvbiA9IHRoaXMuZ2V0U2VjdGlvbkJ5SW5kZXgoMCk7XG5cdFx0XHRcdHRoaXMuc2V0QWN0aXZlQnlJbmRleCgwKTtcblxuXHRcdFx0XHR0aGlzLnBsYXllci50cmlnZ2VyKCdzZWN0aW9uc2luaXQnLCB7IGl0ZW1zIDogdGhpcy5pdGVtcyB9KTtcblxuXHRcdFx0XHR0aGlzLnBsYXllci5vbignc2VjdGlvbl90b2dnbGUnLCAoZSkgPT4ge1xuXHRcdFx0XHRcdGlmICh0aGlzLmVsZW1lbnQuaGFzQ2xhc3MoJ2xlcGxheWVyLXNlY3Rpb25zLS1oaWRkZW4nKSkge1xuXHRcdFx0XHRcdFx0dGhpcy5lbGVtZW50LnJlbW92ZUNsYXNzKCdsZXBsYXllci1zZWN0aW9ucy0taGlkZGVuJyk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRoaXMuZWxlbWVudC5hZGRDbGFzcygnbGVwbGF5ZXItc2VjdGlvbnMtLWhpZGRlbicpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblxuXHRcdFx0XHR0aGlzLnBsYXllci5vbigndGltZXVwZGF0ZScsIHRoaXMub25UaW1lVXBkYXRlLmJpbmQodGhpcykpO1xuXHRcdFx0fVxuXG5cblxuXHRcdFx0X2NyZWF0ZVNlY3Rpb25zKGl0ZW1zKSB7XG5cdFx0XHRcdGxldCByZXN1bHQgPSAnJztcblx0XHRcdFx0aXRlbXMuZm9yRWFjaCgoc2VjdGlvbiwgaW5kZXgpID0+IHtcblx0XHRcdFx0XHRsZXQgaXRlbSA9IGBcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJsZXBsYXllci1zZWN0aW9uICR7IWluZGV4ID8gJ2xlcGxheWVyLXNlY3Rpb24tLWFjdGl2ZScgOiAnJ31cIlxuXHRcdFx0XHRcdFx0XHRkYXRhLXRpbWU9XCIke3NlY3Rpb24uYmVnaW59XCIgZGF0YS1pbmRleD1cIiR7aW5kZXh9XCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJsZXBsYXllci1zZWN0aW9uLXRpbWVcIj4ke3NlY29uZHNUb1RpbWUoc2VjdGlvbi5iZWdpbil9PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJsZXBsYXllci1zZWN0aW9uLWluZm9cIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibGVwbGF5ZXItc2VjdGlvbi10aXRsZVwiPiR7c2VjdGlvbi50aXRsZX08L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibGVwbGF5ZXItc2VjdGlvbi1kZXNjcmlwdGlvblwiPiR7c2VjdGlvbi5kZXNjcmlwdGlvbn08L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRgXG5cdFx0XHRcdFx0cmVzdWx0ICs9IGl0ZW07XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0fVxuXG5cdFx0XHRvblNlY3Rpb25DbGljayhlKSB7XG5cdFx0XHRcdGxldCBzZWN0aW9uID0gJChlLnRhcmdldCkuY2xvc2VzdCgnLmxlcGxheWVyLXNlY3Rpb24nKTtcblx0XHRcdFx0dmlkZW8uY3VycmVudFRpbWUgPSBzZWN0aW9uLmF0dHIoJ2RhdGEtdGltZScpO1xuXHRcdFx0fVxuXG5cdFx0XHRzZXRBY3RpdmVCeUluZGV4KGluZGV4KSB7XG5cdFx0XHRcdGlmICh0aGlzLl9hY3RpdmVTZWN0aW9uLmF0dHIoJ2RhdGEtaW5kZXgnKSA9PSBpbmRleCkge1xuXHRcdFx0XHRcdHJldHVyblxuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuX2FjdGl2ZVNlY3Rpb24ucmVtb3ZlQ2xhc3MoJ2xlcGxheWVyLXNlY3Rpb24tLWFjdGl2ZScpO1xuXG5cdFx0XHRcdHRoaXMuX2FjdGl2ZVNlY3Rpb24gPSB0aGlzLmdldFNlY3Rpb25CeUluZGV4KGluZGV4KTtcblx0XHRcdFx0dGhpcy5fYWN0aXZlU2VjdGlvbi5hZGRDbGFzcygnbGVwbGF5ZXItc2VjdGlvbi0tYWN0aXZlJyk7XG5cdFx0XHRcdHRoaXMuZWxlbWVudC5hbmltYXRlKHtcblx0XHRcdFx0XHRzY3JvbGxUb3AgOiB0aGlzLl9hY3RpdmVTZWN0aW9uLnBvc2l0aW9uKCkudG9wXG5cdFx0XHRcdH0sIDEwMDApXG5cdFx0XHR9XG5cblx0XHRcdGdldFNlY3Rpb25CeUluZGV4KGluZGV4KSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmVsZW1lbnQuZmluZChgLmxlcGxheWVyLXNlY3Rpb25bZGF0YS1pbmRleD1cIiR7aW5kZXh9XCJdYCk7XG5cdFx0XHR9XG5cblx0XHRcdG9uVGltZVVwZGF0ZShlLCBkYXRhKSB7XG5cdFx0XHRcdGxldCBjdXJyZW50VGltZSA9IGRhdGEudGltZTtcblxuXHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRsZXQgc2VjdGlvbiA9IHRoaXMuaXRlbXNbaV07XG5cdFx0XHRcdFx0aWYgKGN1cnJlbnRUaW1lIDw9IHNlY3Rpb24uZW5kKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnNldEFjdGl2ZUJ5SW5kZXgoaSk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHR2YXIgc291cmNlcyA9IHRoaXMuc291cmNlcyA9W107XG5cdFx0dmFyIHN1YnRpdGxlcyA9IFtdO1xuXHRcdHZhciB2b2x1bWUgPSBvcHRpb25zLnZvbHVtZS5kZWZhdWx0O1xuXHRcdHZhciBjb250cm9scyA9IHRoaXMuY29udHJvbHMgPSBuZXcgQ29udHJvbHMoKTtcblx0XHR2YXIgcGxheWVyID0gdGhpcztcblx0XHR2YXIgdmlkZW8gPSBudWxsO1xuXG5cdFx0LyoqXG5cdFx0ICogRE9NIGNvbnRhaW5lciB0byBob2xkIHZpZGVvIGFuZCBhbGwgb3RoZXIgc3R1ZmYuXG5cdFx0ICogQHR5cGUgb2JqZWN0XG5cdFx0ICovXG5cdFx0dmFyIGNvbnRhaW5lciA9IG51bGw7XG5cdFx0dmFyIG92ZXJsYXkgPSBudWxsO1xuXHRcdHZhciBsb2FkZXIgPSBudWxsO1xuXHRcdHZhciBzZWN0aW9uQ29udGFpbmVyID0gbnVsbDtcblx0XHRsZXQgdmlkZW9Db250YWluZXIgPSBudWxsO1xuXG5cdFx0bGV0IF9jcmVhdGVOb3RpZmljYXRpb24gPSAob3B0KSA9PiB7XG5cdFx0XHRsZXQgbm90aWZpY2F0aW9uLCBjbG9zZUJ1dHRvbjtcblx0XHRcdG5vdGlmaWNhdGlvbiA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0XHQuYWRkQ2xhc3MoJ2xlcGxheWVyLW5vdGlmaWNhdGlvbicpXG5cdFx0XHRcdC5hcHBlbmQob3B0LnRleHQpO1xuXHRcdFx0cmV0dXJuIG5vdGlmaWNhdGlvbjtcblx0XHR9XG5cblx0XHR2YXIgX3Nob3dOb3RpZmljYXRpb24gPSAobXNnKSA9PiB7XG5cdFx0XHRsZXQgbm90aWZpY2F0aW9uID0gX2NyZWF0ZU5vdGlmaWNhdGlvbih7IHRleHQ6IG1zZyB9KTtcblx0XHRcdG5vdGlmaWNhdGlvbiA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0XHQuYWRkQ2xhc3MoJ2xlcGxheWVyLW5vdGlmaWNhdGlvbicpXG5cdFx0XHRcdC5hcHBlbmQobXNnKTtcblx0XHRcdGNvbnRhaW5lci5hcHBlbmQobm90aWZpY2F0aW9uKTtcblxuXHRcdH1cblxuXHRcdHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0Ly8gQ2hlY2sgaWYgZWxlbWVudCBpcyBjb3JyZWN0bHkgc2VsZWN0ZWQuXG5cdFx0XHRpZiAoZWxlbWVudC5wcm9wKCd0YWdOYW1lJykudG9Mb3dlckNhc2UoKSAhPSAndmlkZW8nKSB7XG5cdFx0XHRcdGNvbnNvbGUud2FybignSW5jb3JyZWN0IGVsZW1lbnQgc2VsZWN0ZWQuJyk7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fVxuXG5cdFx0XHRpbml0T3B0aW9ucygpO1xuXHRcdFx0Ly8gU2V0IHNvdXJjZS5cblx0XHRcdC8vIEBUT0RPIG1vdmUgdGhpcyB0byBWaWRlbyBjbGFzc1xuXHRcdFx0ZWxlbWVudC5jaGlsZHJlbignc291cmNlJykuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHZhciBzcmMgPSAkKHRoaXMpLmF0dHIoJ3NyYycpO1xuXHRcdFx0XHRpZiAoc3JjKVxuXHRcdFx0XHRcdHNvdXJjZXMucHVzaCh7XG5cdFx0XHRcdFx0XHRzcmMgOiBzcmMsXG5cdFx0XHRcdFx0XHR0aXRsZSA6ICQodGhpcykuYXR0cigndGl0bGUnKVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0XHRpZiAoc291cmNlcy5sZW5ndGggPT0gMCkge1xuXHRcdFx0XHR2YXIgc3JjID0gZWxlbWVudC5hdHRyKCdzcmMnKTtcblx0XHRcdFx0aWYgKHNyYykge1xuXHRcdFx0XHRcdHNvdXJjZXMucHVzaCh7XG5cdFx0XHRcdFx0XHRzcmMgOiBzcmMsXG5cdFx0XHRcdFx0XHR0aXRsZSA6ICQodGhpcykuYXR0cigndGl0bGUnKSB8fCAnZGVmYXVsdCdcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKHNvdXJjZXMubGVuZ3RoID09IDApIHtcblx0XHRcdFx0Y29uc29sZS53YXJuKCdObyBzb3VyY2VzIGZvdW5kLicpO1xuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH1cblx0XHRcdHZpZGVvID0gcGxheWVyLnZpZGVvID0gbmV3IFZpZGVvKGVsZW1lbnQpO1xuXG5cdFx0XHQvKiogVE9ETzogVXNlIHByb21pc2UgdG8gYXN5bmMgcnVuIHRoaXMgKi9cblx0XHRcdGluaXREb20oKTtcblx0XHRcdGluaXRDb250cm9scygpO1xuXHRcdFx0aW5pdEhvdEtleXMoKTtcblx0XHRcdHZpZGVvLmluaXQoKS5kb25lKCgpID0+IHtcblx0XHRcdFx0aW5pdFNlY3Rpb25zKCk7XG5cdFx0XHRcdHBsYXllci50cmlnZ2VyKCdpbml0ZWQnKTtcblx0XHRcdH0pO1xuXG5cblx0XHR9O1xuXG5cdFx0dmFyIGluaXRDb250cm9scyA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGZvciAobGV0IG5hbWUgaW4gb3B0aW9ucy5jb250cm9scykge1xuXHRcdFx0XHRpZiAoIWNvbnRyb2xzLmhhcyhuYW1lKSkgY29udGludWU7XG5cdFx0XHRcdGZvciAobGV0IHJvd0luZGV4IGluIG9wdGlvbnMuY29udHJvbHNbIG5hbWUgXSkge1xuXHRcdFx0XHRcdGxldCByb3cgPSBvcHRpb25zLmNvbnRyb2xzWyBuYW1lIF1bIHJvd0luZGV4IF0sXG5cdFx0XHRcdFx0XHRoYXNUaW1lbGluZSA9IGZhbHNlLFxuXHRcdFx0XHRcdFx0cm93RWxlbWVudCA9ICQoJzxkaXYgLz4nKS5hZGRDbGFzcygnbGVwbGF5ZXItY29udHJvbHMgY29udHJvbHMtJyArIG5hbWUpO1xuXG5cdFx0XHRcdFx0Zm9yIChsZXQgaSBpbiByb3cpIHtcblx0XHRcdFx0XHRcdGxldCBjb250cm9sTmFtZSA9IHJvd1sgaSBdO1xuXG5cdFx0XHRcdFx0XHRpZiAoY29udHJvbE5hbWUgPT0gQ19ESVZJREVSIHx8ICFjb250cm9scy5jb2xsZWN0aW9uc1sgbmFtZSBdLmhhcyhjb250cm9sTmFtZSkpIHtcblx0XHRcdFx0XHRcdFx0Ly8gQ3JlYXRlIGNvbnRyb2wgb25seSBpZiBkaXZpZGVyIG9yIGRvZXMgbm90IGV4aXN0IHlldC5cblx0XHRcdFx0XHRcdFx0dmFyIGMgPSBjb250cm9scy5jb2xsZWN0aW9uc1sgbmFtZSBdLmFkZChjb250cm9sTmFtZSk7XG5cdFx0XHRcdFx0XHRcdGlmIChjICE9IG51bGwpIHtcblx0XHRcdFx0XHRcdFx0XHRyb3dFbGVtZW50LmFwcGVuZChjKTtcblx0XHRcdFx0XHRcdFx0XHRpZiAoY29udHJvbE5hbWUgPT0gQ19USU1FTElORSlcblx0XHRcdFx0XHRcdFx0XHRcdGhhc1RpbWVsaW5lID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS53YXJuKCdDYW5ub3QgY3JlYXRlICcgKyBjb250cm9sTmFtZSArICcgY29udHJvbCBmb3IgY29sbGVjdGlvbiAnICsgbmFtZSArICcuJyk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKCFoYXNUaW1lbGluZSlcblx0XHRcdFx0XHRcdHJvd0VsZW1lbnQuY3NzKCd3aWR0aCcsICcxcHgnKTtcblxuXHRcdFx0XHRcdHJvd0VsZW1lbnQuZmluZCgnLmRpdmlkZXIgKyAuZGl2aWRlcicpLnJlbW92ZSgpO1xuXG5cdFx0XHRcdFx0Y29udGFpbmVyLmFwcGVuZChyb3dFbGVtZW50KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cblx0XHR2YXIgaW5pdFNlY3Rpb25zID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRvcHRpb25zLmRhdGFVcmwgJiYgcGxheWVyLmdldERhdGEoKS5kb25lKChkYXRhKSA9PiB7XG5cdFx0XHRcdGxldCBzZWN0aW9uID0gbmV3IFNlY3Rpb25zKGRhdGEuc2VjdGlvbnMpO1xuXG5cdFx0XHRcdGlmIChzZWN0aW9uQ29udGFpbmVyKSB7XG5cdFx0XHRcdFx0c2VjdGlvbkNvbnRhaW5lci5hcHBlbmQoc2VjdGlvbi5lbGVtZW50KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR2aWRlb0NvbnRhaW5lci5hcHBlbmQoc2VjdGlvbi5lbGVtZW50KTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0dmFyIGluaXREb20gPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRvdmVybGF5ID0gJCgnPGRpdiAvPicpXG5cdFx0XHRcdC5hZGRDbGFzcygncGxheS1vdmVybGF5Jylcblx0XHRcdFx0LmFwcGVuZChuZXcgSWNvbihwbGF5ZXIsIHsgaWNvbk5hbWUgOiAncGxheScgfSkuZWxlbWVudCk7XG5cdFx0XHRsb2FkZXIgPSAkKCc8ZGl2IC8+Jylcblx0XHRcdFx0LmFkZENsYXNzKCdsZXBsYXllci1sb2FkZXItY29udGFpbmVyJylcblx0XHRcdFx0LmFwcGVuZChuZXcgSWNvbihwbGF5ZXIsIHtcblx0XHRcdFx0XHRpY29uTmFtZSA6ICdyZWZyZXNoJyxcblx0XHRcdFx0XHRjbGFzc05hbWUgOiAnbGVwbGF5ZXItaWNvbi1zcGluJ1xuXHRcdFx0XHRcdH0pLmVsZW1lbnQpXG5cdFx0XHRcdC5oaWRlKCk7XG5cdFx0XHR2aWRlb0NvbnRhaW5lciA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0XHQuYWRkQ2xhc3MoJ2xlcGxheWVyLXZpZGVvJylcblx0XHRcdFx0LmFwcGVuZChvdmVybGF5KVxuXHRcdFx0XHQuYXBwZW5kKGxvYWRlcik7XG5cdFx0XHRjb250YWluZXIgPSAkKCc8ZGl2IC8+Jylcblx0XHRcdFx0LmFkZENsYXNzKCdsZXBsYXllci1jb250YWluZXInKVxuXHRcdFx0XHQuYXBwZW5kKHZpZGVvQ29udGFpbmVyKVxuXHRcdFx0XHQuYXR0cigndGFiaW5kZXgnLCAwKVxuXHRcdFx0XHQuY3NzKCd3aWR0aCcsIGVsZW1lbnQud2lkdGgoKSArICdweCcpO1xuXG5cdFx0XHRpZihvcHRpb25zLnNlY3Rpb25Db250YWluZXIpIHtcblx0XHRcdFx0c2VjdGlvbkNvbnRhaW5lciA9ICQob3B0aW9ucy5zZWN0aW9uQ29udGFpbmVyKS5hZGRDbGFzcygnbGVwbGF5ZXItc2VjdGlvbi1jb250YWluZXInKTtcblx0XHRcdH1cblxuXHRcdFx0ZWxlbWVudC5iZWZvcmUoY29udGFpbmVyKTtcblx0XHRcdHZpZGVvQ29udGFpbmVyLmFwcGVuZChlbGVtZW50KTtcblx0XHRcdG92ZXJsYXkub24oe1xuXHRcdFx0XHQnY2xpY2snXHQ6IChlKSA9PiB7IGVsZW1lbnQudHJpZ2dlcignY2xpY2snKTsgfSxcblx0XHRcdFx0J2RibGNsaWNrJyA6IChlKSA9PiB7IGVsZW1lbnQudHJpZ2dlcignZGJsY2xpY2snKTsgfVxuXHRcdFx0fSk7XG5cdFx0fTtcblxuXHRcdHZhciBpbml0SG90S2V5cyA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0bGV0IGlzS2V5QmluZGluZyA9IChlLCBiaW5kaW5nKSA9PiB7XG5cdFx0XHRcdHJldHVybiAoKGUud2hpY2ggPT09IGJpbmRpbmcua2V5KSB8fCAoZS5rZXkgPT09IGJpbmRpbmcua2V5KSkgJiZcblx0XHRcdFx0XHRcdCghIWJpbmRpbmcuc2hpZnRLZXkgPT0gZS5zaGlmdEtleSkgJiZcblx0XHRcdFx0XHRcdCghIWJpbmRpbmcuY3RybEtleSA9PSBlLmN0cmxLZXkpXG5cdFx0XHR9XG5cblx0XHRcdCQoY29udGFpbmVyKS5iaW5kKCdrZXlkb3duLmxlcGxheWVyLmhvdGtleScsIChlKSA9PiB7XG5cdFx0XHRcdGxldCBfaXNGb2N1c2VkID0gaXNGb2N1c2VkKCk7XG5cdFx0XHRcdGlmIChfaXNGb2N1c2VkKSB7XG5cdFx0XHRcdFx0JC5lYWNoKG9wdGlvbnMua2V5QmluZGluZywgKGFjdGlvbiwgYmluZGluZykgPT4ge1xuXHRcdFx0XHRcdFx0aWYoIGlzS2V5QmluZGluZyhlLCBiaW5kaW5nKSApIHtcblx0XHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRiaW5kaW5nLmZuKHZpZGVvKTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0fTtcblxuXHRcdHZhciBpbml0T3B0aW9ucyA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGxldCBoZWlnaHQsIHdpZHRoLCBwb3N0ZXIsIGF0dHJzLCBwcmVsb2FkO1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVBdHRyKCdjb250cm9scycpO1xuXG5cdFx0XHRoZWlnaHQgPSBlbGVtZW50LmF0dHIoJ2hlaWdodCcpO1xuXHRcdFx0aWYgKGhlaWdodCkge1xuXHRcdFx0XHRvcHRpb25zLmhlaWdodCA9IGhlaWdodCArICdweCc7XG5cdFx0XHRcdGVsZW1lbnQucmVtb3ZlQXR0cignaGVpZ2h0Jyk7XG5cdFx0XHR9XG5cdFx0XHRlbGVtZW50LmNzcygnaGVpZ2h0Jywgb3B0aW9ucy5oZWlnaHQpO1xuXG5cdFx0XHR3aWR0aCA9IGVsZW1lbnQuYXR0cignd2lkdGgnKTtcblx0XHRcdGlmICh3aWR0aCkge1xuXHRcdFx0XHRvcHRpb25zLndpZHRoID0gd2lkdGggKyAncHgnO1xuXHRcdFx0XHRlbGVtZW50LnJlbW92ZUF0dHIoJ3dpZHRoJyk7XG5cdFx0XHR9XG5cdFx0XHRlbGVtZW50LmNzcygnd2lkdGgnLCBvcHRpb25zLndpZHRoKTtcblxuXHRcdFx0cG9zdGVyID0gZWxlbWVudC5hdHRyKCdwb3N0ZXInKTtcblx0XHRcdGlmIChwb3N0ZXIpXG5cdFx0XHRcdG9wdGlvbnMucG9zdGVyID0gcG9zdGVyO1xuXHRcdFx0ZWxzZSBpZiAob3B0aW9ucy5wb3N0ZXIpXG5cdFx0XHRcdGVsZW1lbnQuYXR0cigncG9zdGVyJywgb3B0aW9ucy5wb3N0ZXIpO1xuXG5cdFx0XHRhdHRycyA9IFsgJ2F1dG9wbGF5JywgJ2xvb3AnLCAnbXV0ZWQnIF07XG5cdFx0XHRhdHRycy5mb3JFYWNoKChpdGVtKSA9PiB7XG5cdFx0XHRcdHZhciBhID0gZWxlbWVudC5hdHRyKGl0ZW0pO1xuXHRcdFx0XHRpZiAoYSkge1xuXHRcdFx0XHRcdG9wdGlvbnNbIGl0ZW0gXSA9IHRydWU7XG5cdFx0XHRcdH0gZWxzZSBpZiAob3B0aW9uc1sgaXRlbSBdKSB7XG5cdFx0XHRcdFx0ZWxlbWVudC5hdHRyKGl0ZW0sICcnKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRlbGVtZW50LnJlbW92ZUF0dHIoaXRlbSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxlbWVudC5wcm9wKGl0ZW0sIG9wdGlvbnNbIGl0ZW0gXSk7XG5cdFx0XHR9KVxuXG5cdFx0XHRwcmVsb2FkID0gZWxlbWVudC5hdHRyKCdwcmVsb2FkJyk7XG5cdFx0XHRpZiAocHJlbG9hZCkge1xuXHRcdFx0XHRwcmVsb2FkID0gcHJlbG9hZC50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0XHRpZiAocHJlbG9hZCA9PSAnbm9uZScgfHwgcHJlbG9hZCA9PSAnbWV0YWRhdGEnKVxuXHRcdFx0XHRcdG9wdGlvbnMucHJlbG9hZCA9IHByZWxvYWQ7XG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRvcHRpb25zLnByZWxvYWQgPSAnYXV0byc7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChvcHRpb25zLnNvdXJjZXMpIHtcblx0XHRcdFx0aWYgKEFycmF5LmlzQXJyYXkob3B0aW9ucy5zb3VyY2VzKSkge1xuXHRcdFx0XHRcdG9wdGlvbnMuc291cmNlcy5mb3JFYWNoKChpdGVtKSA9PiB7XG5cdFx0XHRcdFx0XHRsZXQgc291cmNlID0gJCgnPHNvdXJjZSAvPicpO1xuXHRcdFx0XHRcdFx0aWYgKHR5cGVvZiBpdGVtID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHRcdFx0XHRzb3VyY2UuYXR0cignc3JjJywgaXRlbSlcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHNvdXJjZS5hdHRyKCdzcmMnLCBpdGVtLnNyYylcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHNvdXJjZS5hdHRyKCd0aXRsZScsIGl0ZW0udGl0bGUgfHwgJ2RlZmF1bHQnKTtcblx0XHRcdFx0XHRcdGVsZW1lbnQuYXBwZW5kKHNvdXJjZSk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5zb3VyY2VzID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHRcdGVsZW1lbnQuYXR0cignc3JjJywgb3B0aW9ucy5zb3VyY2VzKVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRlbGVtZW50LmF0dHIoJ3ByZWxvYWQnLCBvcHRpb25zLnByZWxvYWQpO1xuXHRcdH07XG5cblx0XHR2YXIgc2Vjb25kc1RvVGltZSA9IGZ1bmN0aW9uIChzZWNvbmRzKSB7XG5cdFx0XHR2YXIgaCA9IE1hdGguZmxvb3Ioc2Vjb25kcyAvIDM2MDApO1xuXHRcdFx0dmFyIG0gPSBNYXRoLmZsb29yKHNlY29uZHMgJSAzNjAwIC8gNjApO1xuXHRcdFx0dmFyIHMgPSBNYXRoLmZsb29yKHNlY29uZHMgJSAzNjAwICUgNjApO1xuXHRcdFx0dmFyIG91dCA9ICcnO1xuXHRcdFx0aWYgKGggPiAwKVxuXHRcdFx0XHRvdXQgPSBoICsgJzonO1xuXHRcdFx0aWYgKG0gPCAxMClcblx0XHRcdFx0b3V0ICs9ICcwJztcblx0XHRcdG91dCArPSBtICsgJzonO1xuXHRcdFx0aWYgKHMgPCAxMClcblx0XHRcdFx0b3V0ICs9ICcwJztcblx0XHRcdG91dCArPSBzO1xuXHRcdFx0cmV0dXJuIG91dDtcblx0XHR9O1xuXG5cblx0XHR2YXIgaXNGb2N1c2VkID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0bGV0IGZvY3VzZWQgPSAkKGNvbnRhaW5lcikuZmluZCgnOmZvY3VzJyk7XG5cdFx0XHRyZXR1cm4gKGZvY3VzZWQubGVuZ3RoID4gMCkgfHwgJChjb250YWluZXIpLmlzKCc6Zm9jdXMnKTtcblx0XHR9XG5cblx0XHR0aGlzLmdldERhdGEgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gJC5hamF4KHtcblx0XHRcdFx0dXJsOiBvcHRpb25zLmRhdGFVcmwsXG5cdFx0XHRcdG1ldGhvZDogJ0dFVCdcblx0XHRcdH0pLnByb21pc2UoKVxuXHRcdH1cblxuXHRcdHRoaXMudHJpZ2dlciA9IChldmVudE5hbWUsIC4uLmFyZ3MpID0+IHtcblx0XHRcdCQoZWxlbWVudCkudHJpZ2dlci5jYWxsKCQoZWxlbWVudCksIGBsZXBsYXllcl8ke2V2ZW50TmFtZX1gLCAuLi5hcmdzKTtcblx0XHR9XG5cblx0XHR0aGlzLm9uID0gKGV2ZW50TmFtZSwgLi4uYXJncykgPT4ge1xuXHRcdFx0JChlbGVtZW50KS5vbi5jYWxsKCQoZWxlbWVudCksIGBsZXBsYXllcl8ke2V2ZW50TmFtZX1gLCAuLi5hcmdzKTtcblx0XHR9XG5cdFx0aW5pdCgpO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblxuXHR3aW5kb3cuJC5mbi5sZVBsYXllciA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cdFx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gbmV3IFBsYXllcigkKHRoaXMpLCBvcHRpb25zKTtcblx0XHR9KTtcblx0fTtcbn0oalF1ZXJ5KSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzb3VyY2UvanMvbGUtcGxheWVyLmVzNi5qc1xuICoqLyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgY29udHJvbC5qc1xuICpcbiAqIENvbnRyb2xcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudCc7XG5pbXBvcnQgSWNvbiBmcm9tICcuL2ljb24nO1xuXG4vKipcbiAqIEBjbGFzcyBDb250cm9sXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIENvbnRyb2wncyBvcHRpb25zXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuaWNvbk5hbWVdIE5hbWUgb2YgY29udHJvbCdzIGljb24uIElmIGVtcHR5LCBjb250cm9sIHdpbGwgbm90IGhhdmUgYSBpY29uXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuY2xhc3NOYW1lXVxuICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLnRpdGxlXSBDb250b3JsJ3MgdG9vbHRpcCwgdGl0bGUgYXR0clxuICogQHByb3BlcnR5IHtJY29ufSBpY29uIEljb24gaW4gY29udHJvbCwgaWYgaXQgaXMgZXhpc3RcbiAqIEBleHRlbmRzIENvbXBvbmVudFxuICovXG5jbGFzcyBDb250cm9sIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXG5cdFx0dGhpcy5lbGVtZW50Lm9uKHtcblx0XHRcdCdjbGljaycgOiB0aGlzLl9vbkNsaWNrLmJpbmQodGhpcyksXG5cdFx0XHQnbGVwbGF5ZXJfY2xpY2snIDogdGhpcy5vbkNsaWNrLmJpbmQodGhpcylcblx0XHR9KTtcblxuXHRcdHRoaXMub3B0aW9ucy5pY29uTmFtZSAmJiB0aGlzLmljb24uZWxlbWVudC5vbih7XG5cdFx0XHQnY2xpY2snIDogdGhpcy5fb25JY29uQ2xpY2suYmluZCh0aGlzKSxcblx0XHRcdCdsZXBsYXllcl9jbGljaycgOiB0aGlzLm9uSWNvbkNsaWNrLmJpbmQodGhpcylcblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0aWYgKHRoaXMub3B0aW9ucy5pY29uTmFtZSkge1xuXHRcdFx0dGhpcy5pY29uID0gbmV3IEljb24odGhpcy5wbGF5ZXIsIHtcblx0XHRcdFx0aWNvbk5hbWUgOiB0aGlzLm9wdGlvbnMuaWNvbk5hbWVcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRsZXQgYXR0cnMgPSB7XG5cdFx0XHRyb2xlIDogJ2J1dHRvbicsXG5cdFx0XHR0aXRsZSA6IHRoaXMub3B0aW9ucy50aXRsZVxuXHRcdH1cblx0XHR0aGlzLmVsZW1lbnQgPSAkKCc8ZGl2IC8+Jylcblx0XHRcdC5hZGRDbGFzcyh0aGlzLmJ1aWxkQ1NTQ2xhc3MoKSlcblx0XHRcdC5hcHBlbmQodGhpcy5pY29uICYmIHRoaXMuaWNvbi5lbGVtZW50KVxuXHRcdFx0LmF0dHIoYXR0cnMpO1xuXG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudDtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGJ1aWxkQ1NTQ2xhc3MoKSB7XG5cdFx0cmV0dXJuIGBjb250cm9sICR7dGhpcy5vcHRpb25zLmNsYXNzTmFtZX0gJHtzdXBlci5idWlsZENTU0NsYXNzKCl9YFxuXHR9XG5cblx0ZGlzYWJsZSgpIHtcblx0XHR0aGlzLmRpc2FibGVkID0gdHJ1ZTtcblx0XHR0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XG5cdH1cblxuXHRfb25DbGljayAoZSkge1xuXHRcdGlmICh0aGlzLmRpc2FibGVkKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHRoaXMuZWxlbWVudC50cmlnZ2VyKCdsZXBsYXllcl9jbGljaycpO1xuXHR9XG5cblx0X29uSWNvbkNsaWNrIChlKSB7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRpZiAodGhpcy5kaXNhYmxlZCkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHR0aGlzLmljb24uZWxlbWVudC50cmlnZ2VyKCdsZXBsYXllcl9jbGljaycpO1xuXHR9XG5cdC8qKlxuXHQgKlxuXHQgKiBPbiBjbGljayBldmVudCBoYW5kbGVyXG5cdCAqIEBhYnN0YWN0XG5cdCAqL1xuXHRvbkNsaWNrIChlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIE9uIGljb24gY2xpY2sgZXZlbnQgaGFuZGxlclxuXHQgKiBAYWJzdGFjdFxuXHQgKi9cblx0b25JY29uQ2xpY2sgKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250cm9sO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc291cmNlL2pzL2NvbXBvbmVudHMvY29udHJvbC5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gJDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiJFwiXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBjb21wb25lbnQuanNcbiAqXG4gKiBQbGF5ZXIgY29tcG9uZW50IC0gQmFzZSBjbGFzcyBmb3IgYWxsIFVJXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIE9wdGlvbnMgb2YgY29tcG9uZW50XG4gKiBAcGFyYW0ge2pRdWVyeX0gW29wdGlvbnMuZWxlbWVudF0g0K3Qu9C10LzQtdC90YIg0L3QsCDQutC+0YLQvtGA0L7QvCDQvNC+0LbQvdC+INC40L3QuNGG0LjQu9C40LfQvtCy0LDRgtGMINC60LvQsNGB0YEuXG4gKiBAcHJvcGVydHkge09iamVjdH0gb3B0aW9uc1xuICogQHByb3BlcnR5IHtqUXVlcnl9IGVsZW1lbnRcbiAqIEBjbGFzcyBDb21wb25lbnRcbiAqL1xuY2xhc3MgQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcblx0XHRvcHRpb25zID0gdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIHRoaXMub3B0aW9ucywgb3B0aW9ucyk7XG5cdFx0dGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XG5cblx0XHRpZiAob3B0aW9ucy5lbGVtZW50KSB7XG5cdFx0XHR0aGlzLmVsZW1lbnQgPSBvcHRpb25zLmVsZW1lbnQ7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuY3JlYXRlRWxlbWVudCgpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBAYWJzdHJhY3Rcblx0ICovXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBhYnN0cmFjdFxuXHQgKi9cblx0YnVpbGRDU1NDbGFzcygpIHtcblx0XHRyZXR1cm4gJydcblx0fVxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc291cmNlL2pzL2NvbXBvbmVudHMvY29tcG9uZW50LmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBpY29uLmpzXG4gKlxuICogSWNvblxuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50JztcblxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIEljb24ncyBvcHRpb25zXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuaWNvbk5hbWU9JyddIEljb24ncyBuYW1lLiBJZiB1c2Ugc3Znc3ByaXRlIGljb25zLCBpY29uTmFtZSBpdCdzIGlkIGluIHNwcml0ZVxuICogQGNsYXNzIEljb25cbiAqIEBleHRlbmRzIENvbXBvbmVudFxuICovXG5jbGFzcyBJY29uIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3RvciAocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRjbGFzc05hbWUgOiAnJyxcblx0XHRcdHRpdGxlIDogJycsXG5cdFx0XHRpY29uTmFtZSA6ICcnXG5cdFx0fSwgb3B0aW9ucylcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdHRoaXMuX3VzZVRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAndXNlJyk7XG5cdFx0dGhpcy5fc3ZnVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcblxuXHRcdHRoaXMuaWNvbk5hbWUgPSB0aGlzLl9pY29uTmFtZSA9IHRoaXMub3B0aW9ucy5pY29uTmFtZTtcblx0XHR0aGlzLl9zdmdUYWcuYXBwZW5kQ2hpbGQodGhpcy5fdXNlVGFnKTtcblx0XHR0aGlzLmVsZW1lbnQgPSAkKCc8ZGl2IC8+Jylcblx0XHRcdC5hZGRDbGFzcyh0aGlzLmJ1aWxkQ1NTQ2xhc3MoKSlcblx0XHRcdC5hdHRyKCd0aXRsZScsIHRoaXMub3B0aW9ucy50aXRsZSlcblx0XHRcdC5hcHBlbmQoJCh0aGlzLl9zdmdUYWcpKTtcblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50O1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0YnVpbGRDU1NDbGFzcygpIHtcblx0XHRyZXR1cm4gYCR7c3VwZXIuYnVpbGRDU1NDbGFzcygpfSBsZXBsYXllci1pY29uICR7dGhpcy5vcHRpb25zLmNsYXNzTmFtZX1gXG5cdH1cblxuXHQvKipcblx0ICogU2V0dGVyIG9mIGljb25OYW1lIGZpZWxkXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBpY29uTmFtZVxuXHQgKi9cblx0c2V0IGljb25OYW1lKGljb25OYW1lKSB7XG5cdFx0bGV0IGF0dHJOUyA9IFsnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycsICdocmVmJ11cblx0XHR0aGlzLl91c2VUYWcucmVtb3ZlQXR0cmlidXRlTlMoLi4uYXR0ck5TLCBgJHt0aGlzLnBsYXllci5vcHRpb25zLnN2Z1BhdGh9I2xlcGxheWVyLWljb24tJHt0aGlzLmljb25OYW1lfWApXG5cdFx0dGhpcy5fdXNlVGFnLnNldEF0dHJpYnV0ZU5TKC4uLmF0dHJOUywgYCR7dGhpcy5wbGF5ZXIub3B0aW9ucy5zdmdQYXRofSNsZXBsYXllci1pY29uLSR7aWNvbk5hbWV9YClcblx0XHR0aGlzLl9pY29uTmFtZSA9IGljb25OYW1lO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldHRlciBvZiBpY29uTmFtZSBmaWVsZFxuXHQgKiBAcmV0dXJuIHtTdHJpbmd9IEljb24ncyBuYW1lXG5cdCAqL1xuXHRnZXQgaWNvbk5hbWUgKCkge1xuXHRcdHJldHVybiB0aGlzLl9pY29uTmFtZTtcblx0fVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEljb247XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzb3VyY2UvanMvY29tcG9uZW50cy9pY29uLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBjb250cm9sLWZhY3RvcnkuanNcbiAqXG4gKi9cblxuaW1wb3J0IFBsYXlDb250cm9sIGZyb20gJy4vY29tcG9uZW50cy9wbGF5LWNvbnRyb2wnO1xuaW1wb3J0IFZvbHVtZUNvbnRyb2wgZnJvbSAnLi9jb21wb25lbnRzL3ZvbHVtZS1jb250cm9sJztcbmltcG9ydCBUaW1lbGluZUNvbnRyb2wgZnJvbSAnLi9jb21wb25lbnRzL3RpbWVsaW5lLWNvbnRyb2wnO1xuaW1wb3J0IFNlY3Rpb25Db250cm9sIGZyb20gJy4vY29tcG9uZW50cy9zZWN0aW9uLWNvbnRyb2wnO1xuaW1wb3J0IEZ1bGxzY3JlZW5Db250cm9sIGZyb20gJy4vY29tcG9uZW50cy9mdWxsc2NyZWVuLWNvbnRyb2wnO1xuaW1wb3J0IFJhdGVDb250cm9sIGZyb20gJy4vY29tcG9uZW50cy9yYXRlLWNvbnRyb2wnO1xuaW1wb3J0IEJhY2t3YXJkQ29udHJvbCBmcm9tICcuL2NvbXBvbmVudHMvYmFja3dhcmQtY29udHJvbCc7XG5pbXBvcnQgU291cmNlQ29udHJvbCBmcm9tICcuL2NvbXBvbmVudHMvc291cmNlLWNvbnRyb2wnO1xuaW1wb3J0IFN1YnRpdGxlQ29udHJvbCBmcm9tICcuL2NvbXBvbmVudHMvc3VidGl0bGUtY29udHJvbCc7XG5pbXBvcnQgRG93bmxvYWRDb250cm9sIGZyb20gJy4vY29tcG9uZW50cy9kb3dubG9hZC1jb250cm9sJztcbmltcG9ydCBLZXlCaW5kaW5nSW5mb0NvbnRyb2wgZnJvbSAnLi9jb21wb25lbnRzL2tleWJpbmRpbmctaW5mby1jb250cm9sJztcblxuZXhwb3J0IGNvbnN0IENfQkFDS1dBUkQgPSAnYmFja3dhcmQnO1xuZXhwb3J0IGNvbnN0IENfRElWSURFUiA9ICdkaXZpZGVyJztcbmV4cG9ydCBjb25zdCBDX0RPV05MT0FEID0gJ2Rvd25sb2FkJztcbmV4cG9ydCBjb25zdCBDX0ZPUldBUkQgPSAnZm9yd2FyZCc7XG5leHBvcnQgY29uc3QgQ19GVUxMU0NSRUVOID0gJ2Z1bGxzY3JlZW4nO1xuZXhwb3J0IGNvbnN0IENfUExBWSA9ICdwbGF5JztcbmV4cG9ydCBjb25zdCBDX1JBVEUgPSAncmF0ZSc7XG5leHBvcnQgY29uc3QgQ19TT1VSQ0UgPSAnc291cmNlJztcbmV4cG9ydCBjb25zdCBDX1NVQlRJVExFID0gJ3N1YnRpdGxlJztcbmV4cG9ydCBjb25zdCBDX1RJTUVMSU5FID0gJ3RpbWVsaW5lJztcbmV4cG9ydCBjb25zdCBDX1ZPTFVNRSA9ICd2b2x1bWUnO1xuZXhwb3J0IGNvbnN0IENfU0VDVElPTiA9ICdzZWN0aW9uJztcbmV4cG9ydCBjb25zdCBDX0tFWUJJTkRJTkdfSU5GTyA9ICdrZXliaW5kaW5nIGluZm8nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb250cm9sRmFjdG9yeShwbGF5ZXIsIG5hbWUpIHtcblx0c3dpdGNoIChuYW1lKSB7XG5cdFx0Y2FzZSBDX0JBQ0tXQVJEOlxuXHRcdFx0cmV0dXJuIG5ldyBCYWNrd2FyZENvbnRyb2wocGxheWVyKTtcblxuXHRcdGNhc2UgQ19ESVZJREVSOlxuXHRcdFx0cmV0dXJuIGA8ZGl2IGNsYXNzPVwiZGl2aWRlclwiPjwvZGl2PmA7XG5cblx0XHRjYXNlIENfRE9XTkxPQUQ6XG5cdFx0XHRyZXR1cm4gbmV3IERvd25sb2FkQ29udHJvbChwbGF5ZXIpO1xuXG5cdFx0Y2FzZSBDX0ZPUldBUkQ6XG5cdFx0XHRyZXR1cm4gbmV3IEZvcndhcmRDb250cm9sKHBsYXllcik7XG5cblx0XHRjYXNlIENfRlVMTFNDUkVFTjpcblx0XHRcdHJldHVybiBuZXcgRnVsbHNjcmVlbkNvbnRyb2wocGxheWVyKTtcblxuXHRcdGNhc2UgQ19QTEFZOlxuXHRcdFx0cmV0dXJuIG5ldyBQbGF5Q29udHJvbChwbGF5ZXIpO1xuXG5cdFx0Y2FzZSBDX1JBVEU6XG5cdFx0XHRyZXR1cm4gbmV3IFJhdGVDb250cm9sKHBsYXllcik7XG5cblx0XHRjYXNlIENfU09VUkNFOlxuXHRcdFx0cmV0dXJuIG5ldyBTb3VyY2VDb250cm9sKHBsYXllcik7XG5cblx0XHRjYXNlIENfU1VCVElUTEU6XG5cdFx0XHRyZXR1cm4gbmV3IFN1YnRpdGxlQ29udHJvbChwbGF5ZXIpO1xuXG5cdFx0Y2FzZSBDX1RJTUVMSU5FOlxuXHRcdFx0cmV0dXJuIG5ldyBUaW1lbGluZUNvbnRyb2wocGxheWVyKTtcblxuXHRcdGNhc2UgQ19WT0xVTUU6XG5cdFx0XHRyZXR1cm4gbmV3IFZvbHVtZUNvbnRyb2wocGxheWVyKTtcblxuXHRcdGNhc2UgQ19TRUNUSU9OOlxuXHRcdFx0cmV0dXJuIG5ldyBTZWN0aW9uQ29udHJvbChwbGF5ZXIpO1xuXG5cdFx0Y2FzZSBDX0tFWUJJTkRJTkdfSU5GTzpcblx0XHRcdHJldHVybiBuZXcgS2V5QmluZGluZ0luZm9Db250cm9sKHBsYXllcik7XG5cblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIG51bGw7XG5cdH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNvdXJjZS9qcy9jb250cm9sLWZhY3RvcnkuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIHBsYXktY29udHJvbC5qc1xuICpcbiAqIFBsYXkgY29udHJvbFxuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL2NvbnRyb2wnO1xuXG4vKipcbiAqIEBjbGFzcyBQbGF5Q29udHJvbFxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQGV4dGVuZHMgQ29udHJvbFxuICovXG5jbGFzcyBQbGF5Q29udHJvbCBleHRlbmRzIENvbnRyb2wge1xuXHRjb25zdHJ1Y3RvciAocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRpY29uTmFtZSA6ICdwbGF5Jyxcblx0XHRcdHRpdGxlIDogJ9CS0L7RgdC/0YDQvtC40LfQstC10YHRgtC4INCy0LjQtNC10L4nLFxuXHRcdFx0Y2xhc3NOYW1lIDogJ3BsYXknXG5cdFx0fSwgb3B0aW9ucyk7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBQYXVzZSB0aGUgdmlkZW9cblx0ICovXG5cdHBhdXNlICgpIHtcblx0XHR0aGlzLmljb24uaWNvbk5hbWUgPSAncGxheSc7XG5cdFx0dGhpcy5lbGVtZW50LmF0dHIoJ3RpdGxlJywgdGhpcy5vcHRpb25zLnRpdGxlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBQbGF5IHRoZSB2aWRlb1xuXHQgKi9cblx0cGxheSAoKSB7XG5cdFx0dGhpcy5pY29uLmljb25OYW1lID0gJ3BhdXNlJztcblx0XHR0aGlzLmVsZW1lbnQuYXR0cigndGl0bGUnLCAn0J/QvtGB0YLQsNCy0LjRgtGMINC90LAg0L/QsNGD0LfRgycpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0b25DbGljayhlKSB7XG5cdFx0Ly9zdXBlci5vbkNsaWNrKGUpO1xuXHRcdHRoaXMucGxheWVyLnZpZGVvLnRvZ2dsZVBsYXkoKTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5Q29udHJvbDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNvdXJjZS9qcy9jb21wb25lbnRzL3BsYXktY29udHJvbC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgdm9sdW1lLWNvbnRyb2wuanNcbiAqXG4gKiBWb2x1bWUgQ29udHJvbFxuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29udHJvbERyb3Bkb3duIGZyb20gJy4vY29udHJvbC1kcm9wZG93bic7XG5pbXBvcnQgSWNvbiBmcm9tICcuL2ljb24nO1xuaW1wb3J0IENvb2tpZSBmcm9tICcuLi91dGlscy9jb29raWUnO1xuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBjbGFzcyBWb2x1bWVDb250cm9sXG4gKiBAZXh0ZW5kcyBDb250cm9sRHJvcGRvd25cbiAqL1xuY2xhc3MgVm9sdW1lQ29udHJvbCBleHRlbmRzIENvbnRyb2xEcm9wZG93biB7XG5cblx0Y29uc3RydWN0b3IgKHBsYXllciwgb3B0aW9ucz17fSkge1xuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0aWNvbk5hbWUgOiAndm9sdW1lLWRvd24nLFxuXHRcdFx0Y2xhc3NOYW1lIDogJ3ZvbHVtZS1jb250cm9sJ1xuXHRcdH0sIG9wdGlvbnMpO1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cblx0XHR0aGlzLnBsYXllci5vbigndm9sdW1lY2hhbmdlJywgKGUsIGRhdGEpID0+IHtcblx0XHRcdHRoaXMudmFsdWUgPSBkYXRhLnZvbHVtZTtcblx0XHR9KVxuXHR9XG5cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHRzdXBlci5jcmVhdGVFbGVtZW50KCk7XG5cdFx0bGV0IGRyYWcgPSBmYWxzZTtcblxuXHRcdHRoaXMubWFya2VyID0gJCgnPGRpdi8+JykuYWRkQ2xhc3MoJ3ZvbHVtZS1tYXJrZXInKTtcblxuXHRcdHRoaXMuYWN0aXZlID0gJCgnPGRpdi8+JykuYWRkQ2xhc3MoJ3ZvbHVtZS1hY3RpdmUnKTtcblxuXHRcdHRoaXMubGluZSA9ICQoJzxkaXYvPicpXG5cdFx0XHQuYWRkQ2xhc3MoJ3ZvbHVtZS1saW5lJylcblx0XHRcdC5hcHBlbmQodGhpcy5hY3RpdmUpXG5cdFx0XHQuYXBwZW5kKHRoaXMubWFya2VyKVxuXHRcdFx0Lm9uKCdjbGljaycsIChlKSA9PiB7XG5cdFx0XHRcdGlmIChkcmFnKSByZXR1cm47XG5cdFx0XHRcdGxldCBwID0gdGhpcy5nZXRQb3NpdGlvbihlLnBhZ2VZKTtcblx0XHRcdFx0aWYgKHAgPj0gMCAmJiBwIDw9IDEpIHtcblx0XHRcdFx0XHR0aGlzLnBsYXllci52aWRlby52b2x1bWUgPSAxIC0gcDtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHR0aGlzLmRyb3Bkb3duQ29udGVudFxuXHRcdFx0LmFkZENsYXNzKCd2b2x1bWUtc2xpZGVyJylcblx0XHRcdC5hcHBlbmQodGhpcy5saW5lKTtcblxuXHRcdHRoaXMuaWNvbi5lbGVtZW50LmF0dHIoJ3RpdGxlJywgJ9Ce0YLQutC70Y7Rh9C40YLRjCDQt9Cy0YPQuicpO1xuXG5cdFx0dGhpcy5tYXJrZXIub24oJ21vdXNlZG93bicsIChlKSA9PiB7XG5cdFx0XHRpZiAoZS53aGljaCAhPSAxKSByZXR1cm47XG5cdFx0XHRkcmFnID0gdHJ1ZTtcblx0XHR9KTtcblxuXHRcdCQoZG9jdW1lbnQpLm9uKHtcblx0XHRcdCdtb3VzZW1vdmUnIDogKGUpID0+IHtcblx0XHRcdFx0aWYgKCFkcmFnKSByZXR1cm47XG5cdFx0XHRcdGxldCBwID0gdGhpcy5nZXRQb3NpdGlvbihlLnBhZ2VZKTtcblx0XHRcdFx0aWYgKHAgPj0gMCAmJiBwIDw9IDEpIHtcblx0XHRcdFx0XHR0aGlzLnBsYXllci52aWRlby52b2x1bWUgPSAxIC0gcFxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXG5cdFx0XHQnbW91c2V1cCcgOiAoZSkgPT4ge1xuXHRcdFx0XHRkcmFnID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudDtcblx0fVxuXG5cblx0c2V0IHZhbHVlICh2YWx1ZSkge1xuXHRcdGlmICh2YWx1ZSA8IHRoaXMucGxheWVyLm9wdGlvbnMudm9sdW1lLm11dGVsaW1pdCkge1xuXHRcdFx0dGhpcy5pY29uLmljb25OYW1lID0gJ3ZvbHVtZS1vZmYnO1xuXHRcdH0gZWxzZSBpZiAodmFsdWUgPCAwLjUpIHtcblx0XHRcdHRoaXMuaWNvbi5pY29uTmFtZSA9ICd2b2x1bWUtZG93bic7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuaWNvbi5pY29uTmFtZSA9ICd2b2x1bWUtdXAnO1xuXHRcdH1cblxuXHRcdGxldCBwID0gTWF0aC5yb3VuZCh2YWx1ZSAqIDEwMCkudG9TdHJpbmcoKSArICclJztcblx0XHR0aGlzLmFjdGl2ZS5jc3MoJ2hlaWdodCcsIHApO1xuXHRcdHRoaXMubWFya2VyLmNzcygnYm90dG9tJywgcCk7XG5cdH1cblxuXHR0b2dnbGVNdXRlZCAoKSB7XG5cdFx0aWYgKHRoaXMucGxheWVyLnZpZGVvLm11dGVkID09IHRydWUpIHtcblx0XHRcdHRoaXMudmFsdWUgPSBDb29raWUuZ2V0KCd2b2x1bWUnLCBvcHRpb25zLnZvbHVtZS5kZWZhdWx0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy52YWx1ZSA9IDA7XG5cdFx0fVxuXHR9XG5cblx0Z2V0UG9zaXRpb24gKHkpIHtcblx0XHRyZXR1cm4gKHkgLSB0aGlzLmxpbmUub2Zmc2V0KCkudG9wKSAvIHRoaXMubGluZS5oZWlnaHQoKTtcblx0fVxuXG5cdG9uSWNvbkNsaWNrIChlKSB7XG5cdFx0c3VwZXIub25JY29uQ2xpY2soZSk7XG5cdFx0dGhpcy50b2dnbGVNdXRlZCgpO1xuXHR9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVm9sdW1lQ29udHJvbDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNvdXJjZS9qcy9jb21wb25lbnRzL3ZvbHVtZS1jb250cm9sLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBjb250cm9sLWRyb3Bkb3duLmpzXG4gKlxuICogQ29udHJvbERyb3Bkb3duXG4gKi9cblxuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9jb250cm9sJztcblxuLyoqXG4gKiBAY2xhc3MgQ29udHJvbERyb3Bkb3duXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAcHJvcGVydHkge2pRdWVyeX0gZHJvcGRvd25Db250ZW50IENvbnRlbnQgb2YgcG9wdXBcbiAqIEBleHRlbmRzIENvbnRyb2xcbiAqL1xuY2xhc3MgQ29udHJvbERyb3Bkb3duIGV4dGVuZHMgQ29udHJvbCB7XG5cblx0Y29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblx0fVxuXG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHRzdXBlci5jcmVhdGVFbGVtZW50KCk7XG5cdFx0dGhpcy5kcm9wZG93bkNvbnRlbnQgPSAkKCc8ZGl2IC8+JykuYWRkQ2xhc3MoJ2NvbnRyb2wtZHJvcGRvd25fX2NvbnRlbnQnKTtcblx0XHR0aGlzLmVsZW1lbnQuYXBwZW5kKHRoaXMuZHJvcGRvd25Db250ZW50KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGJ1aWxkQ1NTQ2xhc3MoKSB7XG5cdFx0cmV0dXJuIGBjb250cm9sLWRyb3Bkb3duICR7c3VwZXIuYnVpbGRDU1NDbGFzcygpfWBcblx0fVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xEcm9wZG93bjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNvdXJjZS9qcy9jb21wb25lbnRzL2NvbnRyb2wtZHJvcGRvd24uanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIGNvb2tpZS1jb250cm9sLmpzXG4gKlxuICogQGNsYXMgQ29va2llXG4gKi9cbmNsYXNzIENvb2tpZSB7XG5cdC8qKlxuXHQgKiBAcHVibGljXG5cdCAqXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIE5hbWUgb2YgY29va2llXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBbZGZsdF0gUmV0dXJuIGRlZmF1bHQgdmFsdWUgaWYgdGhpcyBmaWVsZCBpcyBlbXB0eVxuXHQgKlxuXHQgKi9cblx0c3RhdGljIGdldCAobmFtZSwgZGZsdCkge1xuXHRcdHZhciBjb29raWVzID0gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7Jyk7XG5cdFx0Zm9yIChsZXQgaSBpbiBjb29raWVzKSB7XG5cdFx0XHR2YXIgZCA9IGNvb2tpZXNbIGkgXS50cmltKCkuc3BsaXQoJz0nKTtcblx0XHRcdGlmIChkWyAwIF0gPT0gJ2xlcGxheWVyXycgKyBuYW1lKVxuXHRcdFx0XHRyZXR1cm4gZFsgMSBdO1xuXHRcdH1cblx0XHRyZXR1cm4gZGZsdDtcblx0fTtcblxuXHQvKipcblx0ICogQHB1YmxpY1xuXHQgKlxuXHQgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBLZXlcblx0ICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIFZhbHVlXG5cdCAqL1xuXHRzdGF0aWMgc2V0IChuYW1lLCB2YWx1ZSkge1xuXHRcdHZhciBkID0gbmV3IERhdGUoKTtcblx0XHRkLnNldERhdGUoZC55ZWFyICsgMSk7XG5cdFx0ZG9jdW1lbnQuY29va2llID0gJ2xlcGxheWVyXycgKyBuYW1lICsgJz0nICsgdmFsdWUgKyAnO2V4cGlyZXM9JyArIGQudG9TdHJpbmcoKTtcblx0fTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29va2llO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc291cmNlL2pzL3V0aWxzL2Nvb2tpZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgdGltZWxpbmUtY29udHJvbC5qc1xuICpcbiAqIFRpbWVsaW5lIENvbnRyb2xcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9jb250cm9sJztcbmltcG9ydCBDb250cm9sVGV4dCBmcm9tICcuL2NvbnRyb2wtdGV4dCc7XG5pbXBvcnQgeyBzZWNvbmRzVG9UaW1lIH0gZnJvbSAnLi4vdXRpbHMvdGltZSc7XG5cbi8qKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQGNsYXNzIFRpbWVsaW5lQ29udHJvbFxuICogQHByb3BlcnR5IHtDb250cm9sVGV4dH0gY3VycmVudFRpbWUgQ3VycmVudCB0aW1lJ3MgdGV4dFxuICogQHByb3BlcnR5IHtDb250cm9sVGV4dH0gdG90YWxUaW1lIFRvdGFsIHRpbWVcbiAqIEBwcm9wZXJ0eSB7alF1ZXJ5fSBsaW5lXG4gKiBAZXh0ZW5kcyBDb250cm9sXG4gKi9cbmNsYXNzIFRpbWVsaW5lQ29udHJvbCBleHRlbmRzIENvbnRyb2wge1xuXG5cdGNvbnN0cnVjdG9yIChwbGF5ZXIsIG9wdGlvbnM9e30pIHtcblx0XHRvcHRpb25zID0gJC5leHRlbmQoe30sIHtcblx0XHRcdGNsYXNzTmFtZSA6ICd0aW1lbGluZSB0aW1lbGluZS1jb250YWluZXInXG5cdFx0fSwgb3B0aW9ucyk7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblx0XHR0aGlzLnBsYXllci5vbignaW5pdGVkJywgdGhpcy5fb25QbGF5ZXJJbml0ZWQuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5wbGF5ZXIub24oJ3NlY3Rpb25zaW5pdCcsIHRoaXMuX29uU2VjdGlvbnNJbml0LmJpbmQodGhpcykpO1xuXHRcdHRoaXMuX2luaXRXYXRjaEJ1ZmZlcigpXG5cdH1cblxuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdHN1cGVyLmNyZWF0ZUVsZW1lbnQoKTtcblx0XHRsZXQgdmlkZW8gPSB0aGlzLnBsYXllci52aWRlbztcblx0XHRsZXQgZHVyYXRpb24gPSB2aWRlby5kdXJhdGlvbjtcblxuXHRcdHRoaXMuZHJhZyA9IGZhbHNlO1xuXG5cdFx0dGhpcy5jdXJyZW50VGltZSA9IG5ldyBDb250cm9sVGV4dCh0aGlzLnBsYXllciwgeyBjbGFzc05hbWUgOiAndGltZS1jdXJyZW50JyB9KTtcblx0XHR0aGlzLnRvdGFsVGltZSA9IG5ldyBDb250cm9sVGV4dCh0aGlzLnBsYXllciwge2NsYXNzTmFtZSA6ICd0aW1lLXRvdGFsJyB9KTtcblxuXHRcdHRoaXMubWFya2VyID0gJCgnPGRpdiAvPicpLmFkZENsYXNzKCd0aW1lLW1hcmtlcicpO1xuXG5cdFx0dGhpcy5tYXJrZXJTaGFkb3cgPSAkKCc8ZGl2IC8+Jylcblx0XHRcdC5hZGRDbGFzcygndGltZS1tYXJrZXIgc2hhZG93Jylcblx0XHRcdC5oaWRlKCk7XG5cblx0XHR0aGlzLm1hcmtlclNoYWRvd1RpbWUgPSAkKCc8ZGl2IC8+JykuYWRkQ2xhc3MoJ3RpbWUnKTtcblx0XHR0aGlzLm1hcmtlclRpbWUgPSAkKCc8ZGl2IC8+Jylcblx0XHRcdC5hZGRDbGFzcygndGltZScpXG5cdFx0XHQuaGlkZSgpO1xuXHRcdHRoaXMucGxheWVkID0gJCgnPGRpdiAvPicpLmFkZENsYXNzKCd0aW1lLXBsYXllZCcpO1xuXHRcdHRoaXMuYnVmZmVyZWQgPSAkKCc8ZGl2IC8+Jylcblx0XHR0aGlzLmN1cnJlbnRUaW1lLnRleHQgPSAnMDA6MDAnO1xuXHRcdHRoaXMubGluZSA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0LmFkZENsYXNzKCd0aW1lbGluZScpXG5cdFx0XHQuYXBwZW5kKHRoaXMubWFya2VyLmFwcGVuZCh0aGlzLm1hcmtlclRpbWUpKVxuXHRcdFx0LmFwcGVuZCh0aGlzLm1hcmtlclNoYWRvdy5hcHBlbmQodGhpcy5tYXJrZXJTaGFkb3dUaW1lKSlcblx0XHRcdC5hcHBlbmQodGhpcy5wbGF5ZWQpXG5cdFx0XHQuYXBwZW5kKHRoaXMuYnVmZmVyZWQpXG5cdFx0XHQub24oe1xuXHRcdFx0XHQnbW91c2Vtb3ZlJyA6IChlKSA9PiB7XG5cdFx0XHRcdFx0aWYgKHRoaXMuZHJhZykgcmV0dXJuO1xuXG5cdFx0XHRcdFx0bGV0IHAgPSB0aGlzLmdldFBvc2l0aW9uKGUucGFnZVgpO1xuXHRcdFx0XHRcdGlmIChwID4gMCAmJiBwIDwgMSkge1xuXHRcdFx0XHRcdFx0dGhpcy5tYXJrZXJTaGFkb3cuc2hvdygpO1xuXHRcdFx0XHRcdFx0dGhpcy5tYXJrZXJTaGFkb3cuY3NzKCdsZWZ0JywgcCAqIDEwMCArICclJyk7XG5cdFx0XHRcdFx0XHR0aGlzLm1hcmtlclNoYWRvd1RpbWUuaHRtbChzZWNvbmRzVG9UaW1lKHZpZGVvLmR1cmF0aW9uICogcCkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHR0aGlzLm1hcmtlclNoYWRvdy5oaWRlKCk7XG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0J21vdXNlbGVhdmUnIDogKGUpID0+IHtcblx0XHRcdFx0XHRpZiAodGhpcy5kcmFnKSByZXR1cm47XG5cdFx0XHRcdFx0dGhpcy5tYXJrZXJTaGFkb3cuaGlkZSgpXG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0J21vdXNlZG93bicgOiAoZSkgPT4ge1xuXHRcdFx0XHR9LFxuXG5cdFx0XHRcdCdjbGljaycgOiAoZSkgPT4ge1xuXHRcdFx0XHRcdGlmIChlLndoaWNoICE9PSAxKSByZXR1cm47XG5cdFx0XHRcdFx0aWYgKHRoaXMuZHJhZykgcmV0dXJuO1xuXHRcdFx0XHRcdHRoaXMuaGFyZE1vdmUodGhpcy5nZXRQb3NpdGlvbihlLnBhZ2VYKSk7XG5cdFx0XHRcdFx0dmlkZW8uY3VycmVudFRpbWUgPSAodmlkZW8uZHVyYXRpb24gKiB0aGlzLmdldFBvc2l0aW9uKGUucGFnZVgpKTtcblx0XHRcdFx0fSxcblxuXHRcdFx0XHQndG91Y2htb3ZlJyA6IChlKSA9PiB7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5lbGVtZW50LmFkZENsYXNzKCd0aW1lbGluZS1jb250YWluZXInKVxuXHRcdFx0LmFwcGVuZCgkKCc8ZGl2IC8+Jylcblx0XHRcdFx0LmFkZENsYXNzKCd0aW1lbGluZS1zdWJjb250YWluZXInKVxuXHRcdFx0XHQuYXBwZW5kKHRoaXMuY3VycmVudFRpbWUuZWxlbWVudClcblx0XHRcdFx0LmFwcGVuZCh0aGlzLmxpbmUpXG5cdFx0XHRcdC5hcHBlbmQodGhpcy50b3RhbFRpbWUuZWxlbWVudCkpO1xuXG5cdFx0dGhpcy5tYXJrZXIub24oJ21vdXNlZG93bicsIChlKSA9PiB7XG5cdFx0XHRpZiAoZS53aGljaCAhPT0gMSkgcmV0dXJuO1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0dGhpcy5tYXJrZXJTaGFkb3cuaGlkZSgpO1xuXHRcdFx0dGhpcy5kcmFnID0gdHJ1ZTtcblx0XHR9KTtcblxuXG5cdFx0JChkb2N1bWVudCkub24oe1xuXG5cdFx0XHQnbW91c2Vtb3ZlJyA6IChlKSA9PiB7XG5cdFx0XHRcdGlmICghdGhpcy5kcmFnKSByZXR1cm47XG5cdFx0XHRcdGxldCBwID0gdGhpcy5nZXRQb3NpdGlvbihlLnBhZ2VYKTtcblx0XHRcdFx0aWYgKHAgPiAwICYmIHAgPCAxKSB7XG5cdFx0XHRcdFx0dGhpcy5tYXJrZXJUaW1lXG5cdFx0XHRcdFx0XHQuc2hvdygpXG5cdFx0XHRcdFx0XHQuaHRtbChzZWNvbmRzVG9UaW1lKHZpZGVvLmR1cmF0aW9uICogcCkpXG5cdFx0XHRcdFx0dmlkZW8uc2Vlayh2aWRlby5kdXJhdGlvbiAqIHApO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXG5cdFx0XHQnbW91c2V1cCcgOiAoZSkgPT4ge1xuXHRcdFx0XHR0aGlzLm1hcmtlclRpbWUuaGlkZSgpXG5cdFx0XHRcdHRoaXMuZHJhZyA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0X29uUGxheWVySW5pdGVkKGUpIHtcblx0XHRsZXQgdmlkZW8gPSB0aGlzLnBsYXllci52aWRlbztcblx0XHR0aGlzLnRvdGFsVGltZS50ZXh0ID0gc2Vjb25kc1RvVGltZSh2aWRlby5kdXJhdGlvbik7XG5cdFx0dGhpcy5jdXJyZW50VGltZS5lbGVtZW50LmNzcyh7XG5cdFx0XHQnd2lkdGgnIDogdGhpcy50b3RhbFRpbWUuZWxlbWVudC53aWR0aCgpXG5cdFx0fSlcblx0fVxuXG5cdF9vblNlY3Rpb25zSW5pdChlLCBkYXRhKSB7XG5cdFx0bGV0IHNlY3Rpb25zID0gZGF0YS5pdGVtcztcblx0XHRsZXQgdmlkZW8gPSB0aGlzLnBsYXllci52aWRlbztcblx0XHRsZXQgZHVyYXRpb24gPSB2aWRlby5kdXJhdGlvbjtcblx0XHRsZXQgcmVzdWx0ID0gJCgnPGRpdiAvPicpO1xuXHRcdHNlY3Rpb25zLmZvckVhY2goKHNlY3Rpb24pID0+IHtcblx0XHRcdGxldCBsZW5ndGggPSAoc2VjdGlvbi5lbmQgLSBzZWN0aW9uLmJlZ2luKTtcblx0XHRcdGxldCBpdGVtID0gJCgnPGRpdiAvPicpXG5cdFx0XHRcdC5hZGRDbGFzcygndGltZWxpbmUtc2VjdGlvbicpXG5cdFx0XHRcdC5jc3Moe1xuXHRcdFx0XHRcdHdpZHRoOiBsZW5ndGggLyBkdXJhdGlvbiAqIDEwMCArICclJyxcblx0XHRcdFx0XHRsZWZ0OiBzZWN0aW9uLmJlZ2luIC8gZHVyYXRpb24gKiAxMDAgKyAnJSdcblx0XHRcdFx0fSk7XG5cdFx0XHRyZXN1bHQuYXBwZW5kKGl0ZW0pO1xuXHRcdH0pXG5cdFx0dGhpcy5saW5lLmFwcGVuZChyZXN1bHQpO1xuXHR9XG5cblx0Z2V0UG9zaXRpb24gKHgpIHtcblx0XHRyZXR1cm4gKHggLSB0aGlzLmxpbmUub2Zmc2V0KCkubGVmdCkgLyB0aGlzLmxpbmUud2lkdGgoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBNb3ZlIG1hcmtlciBvbiB0aW1lbGluZSB3aXRob3V0IGNoYW5nZSB2aWRlby5jdXJyZW50VGltZVxuXHQgKlxuXHQgKiBAcGFyYW0ge051bWJlcn0gcGVyY2VudCBUaGUgcGVyY2VudCB3aGljaCB5b3Ugd2FudCB0byBtb3ZlIG1hcmtlciBvbiB0aW1lbGluZVxuXHQgKi9cblx0aGFyZE1vdmUgKHBlcmNlbnQpIHtcblx0XHRsZXQgY3VycmVudFRpbWUgPSB0aGlzLnBsYXllci52aWRlby5kdXJhdGlvbiAqIHBlcmNlbnQ7XG5cdFx0cGVyY2VudCA9IHBlcmNlbnQgKiAxMDA7XG5cdFx0dGhpcy5tYXJrZXIuY3NzKCdsZWZ0JywgcGVyY2VudCArICclJyk7XG5cdFx0dGhpcy5wbGF5ZWQuY3NzKCd3aWR0aCcsIHBlcmNlbnQgKyAnJScpO1xuXHRcdHRoaXMuY3VycmVudFRpbWUudGV4dCA9IHNlY29uZHNUb1RpbWUoY3VycmVudFRpbWUpO1xuXHR9XG5cblx0bW92ZSAoKSB7XG5cdFx0bGV0IHZpZGVvID0gdGhpcy5wbGF5ZXIudmlkZW87XG5cdFx0bGV0IHBlcmNlbnQgPSAodmlkZW8uY3VycmVudFRpbWUgLyB2aWRlby5kdXJhdGlvbiAqIDEwMCkudG9GaXhlZCgyKTtcblx0XHRsZXQgY3VycmVudFRpbWUgPSB2aWRlby5jdXJyZW50VGltZTtcblx0XHRcdFx0XHRcdHRoaXMubWFya2VyLmNzcygnbGVmdCcsIHBlcmNlbnQgKyAnJScpO1xuXHRcdHRoaXMucGxheWVkLmNzcygnd2lkdGgnLCBwZXJjZW50ICsgJyUnKTtcblx0XHR0aGlzLmN1cnJlbnRUaW1lLnRleHQgPSBzZWNvbmRzVG9UaW1lKGN1cnJlbnRUaW1lKTtcblx0fVxuXG5cdF9pbml0V2F0Y2hCdWZmZXIgKCkge1xuXHRcdGNsZWFySW50ZXJ2YWwodGhpcy53YXRjaEJ1ZmZlckludGVydmFsKTtcblx0XHRsZXQgYXJyID0gW107XG5cdFx0bGV0IHZpZGVvID0gdGhpcy5wbGF5ZXIudmlkZW87XG5cdFx0bGV0IHVwZGF0ZVByb2dyZXNzQmFyID0gKCkgPT4ge1xuXHRcdFx0Y29uc3QgRU5EID0gMTtcblx0XHRcdGNvbnN0IFNUQVJUID0gMDtcblx0XHRcdGxldCByZXN1bHQgPSAkKCcnKTtcblx0XHRcdHZpZGVvLmxvYWRlZC5mb3JFYWNoKGl0ZW0gPT4ge1xuXHRcdFx0XHRsZXQgZG9tSXRlbSA9ICQoJzxkaXYgLz4nKS5hZGRDbGFzcygndGltZS1idWZmZXJlZCcpO1xuXHRcdFx0XHRkb21JdGVtLmNzcyh7XG5cdFx0XHRcdFx0J2xlZnQnIDogaXRlbVtTVEFSVF0gKiAxMDAgKyAnJScsXG5cdFx0XHRcdFx0J3dpZHRoJyA6IChpdGVtW0VORF0gLSBpdGVtW1NUQVJUXSkgKiAxMDAgKyAnJSdcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHJlc3VsdCA9IHJlc3VsdC5hZGQoZG9tSXRlbSk7XG5cdFx0XHR9KTtcblx0XHRcdHRoaXMuYnVmZmVyZWQuaHRtbChyZXN1bHQpO1xuXHRcdFx0aWYgKHZpZGVvLmxvYWRlZC5sZW5ndGggJiYgKDEgLSB2aWRlby5sb2FkZWRTaXplKSA8PSAwLjA1KSB7XG5cdFx0XHRcdGNsZWFySW50ZXJ2YWwodGhpcy53YXRjaEJ1ZmZlckludGVydmFsKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0dGhpcy53YXRjaEJ1ZmZlckludGVydmFsID0gc2V0SW50ZXJ2YWwodXBkYXRlUHJvZ3Jlc3NCYXIsIDUwMCk7XG5cdH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBUaW1lbGluZUNvbnRyb2w7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzb3VyY2UvanMvY29tcG9uZW50cy90aW1lbGluZS1jb250cm9sLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBjb250cm9sLXRleHQuanNcbiAqXG4gKiBDb250cm9sIHRleHRcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9jb250cm9sJztcblxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAY2xhc3MgQ29udHJvbFRleHRcbiAqIEBleG50ZWRzIENvbnRyb2xcbiAqL1xuY2xhc3MgQ29udHJvbFRleHQgZXh0ZW5kcyBDb250cm9sIHtcblx0Y29uc3RydWN0b3IgKHBsYXllciwgb3B0aW9ucz17fSkge1xuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0Y2xhc3NOYW1lIDogJydcblx0XHR9LCBvcHRpb25zKTtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHRzdXBlci5jcmVhdGVFbGVtZW50KCk7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRidWlsZENTU0NsYXNzKCkge1xuXHRcdHJldHVybiBgY29udHJvbC10ZXh0ICR7dGhpcy5vcHRpb25zLmNsYXNzTmFtZX1gO1xuXHR9XG5cblxuXHQvKipcblx0ICogU2V0dGVyIG9mIHRleHQgZmllbGRcblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcblx0ICovXG5cblx0c2V0IHRleHQgKHZhbHVlKSB7XG5cdFx0dGhpcy5lbGVtZW50Lmh0bWwodmFsdWUpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xUZXh0O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc291cmNlL2pzL2NvbXBvbmVudHMvY29udHJvbC10ZXh0LmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSB0aW1lLmpzXG4gKlxuICogQG1vZHVsZSB0aW1lXG4gKi9cblxuLyoqXG4gKiBDb252ZXJ0IHNlY29uZHMgdG8gZm9ybWF0IHN0cmluZyAnaGg6bW06c3MnXG4gKlxuICogQGFjY2VzcyBwdWJsaWNcbiAqIEBwYXJhbSB7TnVtYmVyfSBzZWNvbmRzIFNlY29uZHNcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZWNvbmRzVG9UaW1lIChzZWNvbmRzKSB7XG5cdHZhciBoID0gTWF0aC5mbG9vcihzZWNvbmRzIC8gMzYwMCk7XG5cdHZhciBtID0gTWF0aC5mbG9vcihzZWNvbmRzICUgMzYwMCAvIDYwKTtcblx0dmFyIHMgPSBNYXRoLmZsb29yKHNlY29uZHMgJSAzNjAwICUgNjApO1xuXHR2YXIgb3V0ID0gJyc7XG5cdGlmIChoID4gMClcblx0XHRvdXQgPSBoICsgJzonO1xuXHRpZiAobSA8IDEwKVxuXHRcdG91dCArPSAnMCc7XG5cdG91dCArPSBtICsgJzonO1xuXHRpZiAocyA8IDEwKVxuXHRcdG91dCArPSAnMCc7XG5cdG91dCArPSBzO1xuXHRyZXR1cm4gb3V0O1xufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNvdXJjZS9qcy91dGlscy90aW1lLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBzZWN0aW9uLWNvbnRyb2wuanNcbiAqXG4gKiBTZWN0aW9uIGNvbnRyb2xcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbnRyb2xDaGVja2JveCBmcm9tICcuL2NvbnRyb2wtY2hlY2tib3gnO1xuXG4vKipcbiAqIEBjbGFzcyBTZWN0aW9uQ29udHJvbFxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5jaGVja2VkPXRydWVdXG4gKiBAZXh0ZW5kcyBDb250cm9sQ2hlY2tib3hcbiAqL1xuY2xhc3MgU2VjdGlvbkNvbnRyb2wgZXh0ZW5kcyBDb250cm9sQ2hlY2tib3gge1xuXHRjb25zdHJ1Y3RvciAocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRpY29uTmFtZSA6ICdsaXN0LXVsJyxcblx0XHRcdGNsYXNzTmFtZSA6ICdjb250cm9sLS10eXBlX3NlY3Rpb24nLFxuXHRcdFx0dGl0bGUgOiAn0J/QvtC60LDQt9Cw0YLRjC/RgdC60YDRi9GC0Ywg0YHQtdC60YbQuNC4Jyxcblx0XHRcdGNoZWNrZWQgOiB0cnVlXG5cdFx0fSwgb3B0aW9ucyk7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdG9uQ2xpY2soZSkge1xuXHRcdHN1cGVyLm9uQ2xpY2soZSk7XG5cdFx0dGhpcy5wbGF5ZXIudHJpZ2dlcignc2VjdGlvbl90b2dnbGUnLCB7IGNoZWNrZWQgOiB0aGlzLmNoZWNrZWQgfSk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbkNvbnRyb2w7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzb3VyY2UvanMvY29tcG9uZW50cy9zZWN0aW9uLWNvbnRyb2wuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIGNvbnRyb2wtY2hlY2tib3guanNcbiAqXG4gKiBDb250cm9sXG4gKi9cblxuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9jb250cm9sJztcblxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmNoZWNrZWQ9ZmFsc2VdXG4gKiBAY2xhc3MgQ29udHJvbENoZWNrYm94IFRvZ2dhYmxlIGNvbnRyb2xcbiAqL1xuY2xhc3MgQ29udHJvbENoZWNrYm94IGV4dGVuZHMgQ29udHJvbCB7XG5cblx0Y29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblx0XHR0aGlzLmNoZWNrZWQgPSB0aGlzLm9wdGlvbnMuY2hlY2tlZCB8fCBmYWxzZTtcblx0fVxuXG5cblx0LyoqXG5cdCAqIFNldHRlciBmb3IgY2hlY2tlZCBwcm9wZXJ0eVxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gdmFsXG5cdCAqL1xuXHRzZXQgY2hlY2tlZCAodmFsKSB7XG5cdFx0dmFsID0gISF2YWw7XG5cdFx0dGhpcy5fY2hlY2tlZCA9IHZhbFxuXHRcdHRoaXMuZWxlbWVudC50b2dnbGVDbGFzcygnY29udHJvbC1jaGVja2JveC0tY2hlY2tlZCcsIHZhbCk7XG5cdFx0dGhpcy5lbGVtZW50LnRyaWdnZXIoJ2xlcGxheWVyX2NoZWNrZWQnLCB7IGNoZWNrZWQgIDogdmFsIH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldHRlciBmb3IgY2hlY2tlZCBwcm9wZXJ5XG5cdCAqIEBwdWJsaWNcblx0ICogQHJldHVybiB7Ym9vbGVhbn1cblx0ICovXG5cdGdldCBjaGVja2VkICgpIHtcblx0XHRyZXR1cm4gdGhpcy5fY2hlY2tlZDtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdG9uQ2xpY2sgKGUpIHtcblx0XHRzdXBlci5vbkNsaWNrKGUpO1xuXHRcdHRoaXMuY2hlY2tlZCA9ICF0aGlzLmNoZWNrZWQ7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRidWlsZENTU0NsYXNzKCkge1xuXHRcdHJldHVybiBgY29udHJvbC1jaGVja2JveCAke3N1cGVyLmJ1aWxkQ1NTQ2xhc3MoKX1gXG5cdH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250cm9sQ2hlY2tib3g7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzb3VyY2UvanMvY29tcG9uZW50cy9jb250cm9sLWNoZWNrYm94LmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBmdWxsc2NyZWVuLWNvbnRyb2wuanNcbiAqXG4gKiBQbGF5IGNvbnRyb2xcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9jb250cm9sJztcblxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAY2xhc3MgRnVsbHNjcmVlbkNvbnRyb2xcbiAqIEBleHRlbmRzIENvbnRyb2xcbiAqL1xuY2xhc3MgRnVsbHNjcmVlbkNvbnRyb2wgZXh0ZW5kcyBDb250cm9sIHtcblx0Y29uc3RydWN0b3IgKHBsYXllciwgb3B0aW9ucz17fSkge1xuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0aWNvbk5hbWUgOiAnYXJyb3dzLWFsdCcsXG5cdFx0XHRjbGFzc05hbWUgOiAnZnVsbHNjcmVlbicsXG5cdFx0XHR0aXRsZSA6ICfQoNCw0LfQstC10YDQvdGD0YLRjC/RgdCy0LXRgNC90YPRgtGMINC90LAg0L/QvtC70L3Ri9C5INGN0LrRgNCw0L0nXG5cdFx0fSwgb3B0aW9ucyk7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdG9uQ2xpY2soZSkge1xuXHRcdHN1cGVyLm9uQ2xpY2soZSlcblx0XHR0aGlzLnBsYXllci52aWRlby5mdWxsc2NyZWVuLnRvZ2dsZSgpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZ1bGxzY3JlZW5Db250cm9sO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc291cmNlL2pzL2NvbXBvbmVudHMvZnVsbHNjcmVlbi1jb250cm9sLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSByYXRlLWNvbnRyb2wuanNcbiAqXG4gKiBSYXRlIGNvbnRyb2xcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9jb250cm9sJztcbmltcG9ydCBDb250cm9sVGV4dCBmcm9tICcuL2NvbnRyb2wtdGV4dCc7XG5pbXBvcnQgQ29va2llIGZyb20gJy4uL3V0aWxzL2Nvb2tpZSc7XG5cbi8qKlxuICogQGNsYXNzIFJhdGVDb250cm9sXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAcHJvcGVydHkge0NvbnRyb2x9IGRvd25Db250cm9sICBEb3duIHJhdGUgY29udHJvbFxuICogQHByb3BlcnR5IHtDb250cm9sfSB1cENvbnRyb2wgIFVwIHJhdGUgY29udHJvbFxuICogQHByb3BlcnR5IHtDb250cm9sVGV4dH0gY3VycmVudFJhdGUgQ29udHJvbCBvZiBjdXVyZW50IHJhdGVcbiAqIEBleHRlbmRzIENvbnRyb2xcbiAqL1xuY2xhc3MgUmF0ZUNvbnRyb2wgZXh0ZW5kcyBDb250cm9sIHtcblx0Y29uc3RydWN0b3IgKHBsYXllciwgb3B0aW9ucz17fSkge1xuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0Y2xhc3NOYW1lIDogJ2NvbnRyb2wtY29udGFpbmVyJ1xuXHRcdH0sIG9wdGlvbnMpO1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cdFx0bGV0IHZpZGVvID0gdGhpcy5wbGF5ZXIudmlkZW87XG5cdFx0dGhpcy5kb3duQ29udHJvbC5lbGVtZW50Lm9uKCdjbGljaycsIGUgPT4ge1xuXHRcdFx0dmlkZW8ucmF0ZSAtPSB0aGlzLnBsYXllci5vcHRpb25zLnJhdGUuc3RlcDtcblx0XHR9KVxuXG5cdFx0dGhpcy51cENvbnRyb2wuZWxlbWVudC5vbignY2xpY2snLCBlID0+IHtcblx0XHRcdHZpZGVvLnJhdGUgKz0gdGhpcy5wbGF5ZXIub3B0aW9ucy5yYXRlLnN0ZXA7XG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdHN1cGVyLmNyZWF0ZUVsZW1lbnQoKTtcblx0XHR0aGlzLmRvd25Db250cm9sID0gbmV3IENvbnRyb2wodGhpcy5wbGF5ZXIsIHtcblx0XHRcdGNsYXNzTmFtZSA6ICdyYXRlLWRvd24nLFxuXHRcdFx0aWNvbk5hbWUgOiAnYmFja3dhcmQnLFxuXHRcdFx0dGl0bGUgOiAn0KPQvNC10L3RjNGI0LjRgtGMINGB0LrQvtGA0L7RgdGC0Ywg0L/RgNC+0LjQs9GA0YvQstCw0L3QuNGPJ1xuXHRcdH0pO1xuXHRcdHRoaXMudXBDb250cm9sID0gbmV3IENvbnRyb2wodGhpcy5wbGF5ZXIsIHtcblx0XHRcdGNsYXNzTmFtZSA6ICdyYXRlLXVwJyxcblx0XHRcdGljb25OYW1lIDogJ2ZvcndhcmQnLFxuXHRcdFx0dGl0bGUgOiAn0KPQstC10LvQuNGH0LjRgtGMINGB0LrQvtGA0L7RgdGC0Ywg0L/RgNC+0LjQs9GA0YvQstCw0L3QuNGPJ1xuXHRcdH0pO1xuXHRcdHRoaXMuY3VycmVudFJhdGUgPSBuZXcgQ29udHJvbFRleHQoeyBjbGFzc05hbWUgOiAncmF0ZS1jdXJyZW50J30pO1xuXG5cdFx0dGhpcy5lbGVtZW50XG5cdFx0XHQuYXBwZW5kKHRoaXMuZG93bkNvbnRyb2wuZWxlbWVudClcblx0XHRcdC5hcHBlbmQodGhpcy5jdXJyZW50UmF0ZS5lbGVtZW50KVxuXHRcdFx0LmFwcGVuZCh0aGlzLnVwQ29udHJvbC5lbGVtZW50KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGJ1aWxkQ1NTQ2xhc3MoKSB7XG5cdFx0cmV0dXJuIHRoaXMub3B0aW9ucy5jbGFzc05hbWU7XG5cdH1cblxuXHRzZXQgdmFsdWUgKHZhbHVlKSB7XG5cdFx0bGV0IHZpZGVvID0gdGhpcy5wbGF5ZXIudmlkZW87XG5cdFx0bGV0IG9wdGlvbnMgPSB0aGlzLnBsYXllci5vcHRpb25zO1xuXHRcdGlmICh0aGlzLmRpc2FibGVkKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHRoaXMudXBDb250cm9sLmVsZW1lbnQucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkJyk7XG5cdFx0dGhpcy5kb3duQ29udHJvbC5lbGVtZW50LnJlbW92ZUNsYXNzKCdkaXNhYmxlZCcpO1xuXHRcdGlmICh2aWRlby5yYXRlIDw9IG9wdGlvbnMucmF0ZS5taW4pXG5cdFx0XHR0aGlzLmRvd25Db250cm9sLmVsZW1lbnQuYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XG5cdFx0ZWxzZSBpZiAodmlkZW8ucmF0ZSA+PSBvcHRpb25zLnJhdGUubWF4KVxuXHRcdFx0dGhpcy51cENvbnRyb2wuZWxlbWVudC5hZGRDbGFzcygnZGlzYWJsZWQnKTtcblx0XHR0aGlzLnNob3coKTtcblx0fVxuXG5cdGRpc2FibGUoKSB7XG5cdFx0dGhpcy5kaXNhYmxlZCA9IHRydWU7XG5cdFx0dGhpcy5kb3duQ29udHJvbC5kaXNhYmxlLmFwcGx5KHRoaXMuZG93biwgYXJndW1lbnRzKTtcblx0XHR0aGlzLnVwQ29udHJvbC5kaXNhYmxlLmFwcGx5KHRoaXMudXAsIGFyZ3VtZW50cyk7XG5cdH1cblxuXHRpbml0ICgpIHtcblx0XHRsZXQgcmF0ZSA9IENvb2tpZS5nZXQoJ3JhdGUnLCB0aGlzLnBsYXllci5vcHRpb25zLnJhdGUuZGVmYXVsdCk7XG5cdFx0dGhpcy5zaG93KHJhdGUpO1xuXHR9XG5cblx0c2hvdyAodmFsdWUpIHtcblx0XHRsZXQgdmlkZW8gPSB0aGlzLnBsYXllci52aWRlbztcblx0XHR2YWx1ZSA9IHZhbHVlIHx8IHZpZGVvLnJhdGU7XG5cdFx0dmFsdWUgPSBwYXJzZUZsb2F0KHZhbHVlKVxuXHRcdFx0LnRvRml4ZWQoMilcblx0XHRcdC50b1N0cmluZygpXG5cdFx0XHQucmVwbGFjZSgvLC9nLCAnLicpO1xuXHRcdHRoaXMuY3VycmVudFJhdGUudGV4dCA9ICfDlycgKyB2YWx1ZTtcblx0fVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJhdGVDb250cm9sO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc291cmNlL2pzL2NvbXBvbmVudHMvcmF0ZS1jb250cm9sLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBiYWNrd2FyZC1jb250cm9sLmpzXG4gKlxuICogQmFja3dhcmQgY29udHJvbFxuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL2NvbnRyb2wnO1xuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gT3B0aW9uc1xuICogQGNsYXNzIEJhY2t3YXJkQ29udHJvbFxuICogQGV4dGVuZHMgQ29udHJvbFxuICovXG5jbGFzcyBCYWNrd2FyZENvbnRyb2wgZXh0ZW5kcyBDb250cm9sIHtcblx0Y29uc3RydWN0b3IgKHBsYXllciwgb3B0aW9ucz17fSkge1xuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0aWNvbk5hbWUgOiAndW5kbycsXG5cdFx0XHRjbGFzc05hbWUgOiAnYmFja3dhcmQnLFxuXHRcdFx0dGl0bGUgOiBg0J7RgtC80L7RgtCw0YLRjCDQvdCw0LfQsNC0INC90LAgJHtwbGF5ZXIub3B0aW9ucy5wbGF5YmFjay5zdGVwLm1lZGl1bX0g0YHQtdC60YPQvdC0YCxcblx0XHR9LCBvcHRpb25zKTtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0b25DbGljayhlKSB7XG5cdFx0c3VwZXIub25DbGljayhlKTtcblx0XHR0aGlzLnBsYXllci52aWRlby5jdXJyZW50VGltZSAtPSBvcHRpb25zLnBsYXliYWNrLnN0ZXAubWVkaXVtO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhY2t3YXJkQ29udHJvbDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNvdXJjZS9qcy9jb21wb25lbnRzL2JhY2t3YXJkLWNvbnRyb2wuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIHNvdXJjZS1jb250cm9sLmpzXG4gKlxuICogU291cmNlIGNvbnRyb2xcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbnRyb2xDb250YWluZXIgZnJvbSAnLi9jb250cm9sLWNvbnRhaW5lcic7XG5cbi8qKlxuICogQGNsYXNzIFNvdXJjZUNvbnRyb2xcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBleHRlbmRzIENvbnRyb2xDb25haW5lclxuICovXG5jbGFzcyBTb3VyY2VDb250cm9sIGV4dGVuZHMgQ29udHJvbENvbnRhaW5lciB7XG5cdGNvbnN0cnVjdG9yIChwbGF5ZXIsIG9wdGlvbnM9e30pIHtcblx0XHRvcHRpb25zID0gJC5leHRlbmQoe30sIHtcblx0XHRcdGljb25OYW1lIDogJ2J1bGxzZXllJyxcblx0XHRcdHRpdGxlIDogJ9Ca0LDRh9C10YHRgtCy0L4nLFxuXHRcdFx0Y2xhc3NOYW1lIDogJ3NvdXJjZS1jb250cm9sJ1xuXHRcdH0sIG9wdGlvbnMpO1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cdFx0aWYgKHRoaXMucGxheWVyLnNvdXJjZXMubGVuZ3RoID4gMSkge1xuXHRcdFx0Zm9yICh2YXIgaSBpbiB0aGlzLnBsYXllci5zb3VyY2VzKSB7XG5cdFx0XHRcdHRoaXMuYWRkSXRlbSh0aGlzLnBsYXllci5zb3VyY2VzWyBpIF0udGl0bGUsIHsgc3JjIDogdGhpcy5wbGF5ZXIuc291cmNlc1sgaSBdLnNyYyB9KTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5kaXNhYmxlKCk7XG5cdFx0fVxuXHR9XG5cblx0c2V0IChpbmRleCkge1xuXHRcdC8qKiBUT0RPOiBFbWl0IGV2ZW50IG9uIHNldCBzb3VyY2UqL1xuXHRcdGxldCBzID0gdGhpcy5nZXRCeUluZGV4KGluZGV4KTtcblx0XHRpZiAocyAhPSBudWxsKSB7XG5cdFx0XHR0aGlzLnBsYXllci52aWRlby5zb3VyY2UgPSBzLmRhdGEoJ3NyYycpO1xuXHRcdFx0dGhpcy5wbGF5ZXIuY29udHJvbHMuZG93bmxvYWQgPSBzLmRhdGEoJ3NyYycpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdG9uSXRlbUNsaWNrIChpbmRleCkge1xuXHRcdHN1cGVyLm9uSXRlbUNsaWNrKGluZGV4KTtcblx0XHR0aGlzLnNldChpbmRleCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU291cmNlQ29udHJvbDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNvdXJjZS9qcy9jb21wb25lbnRzL3NvdXJjZS1jb250cm9sLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBjb250cm9sLWNvbnRhaW5lci5qc1xuICpcbiAqIENvbnRyb2wgY29udGFpbmVyXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb250cm9sRHJvcGRvd24gZnJvbSAnLi9jb250cm9sLWRyb3Bkb3duJztcblxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAY2xhc3MgQ29udHJvbENvbnRhaW5lclxuICogQGV4dGVuZHMgQ29udHJvbERyb3Bkb3duXG4gKi9cbmNsYXNzIENvbnRyb2xDb250YWluZXIgZXh0ZW5kcyBDb250cm9sRHJvcGRvd24ge1xuXG5cdGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucykge1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cdFx0dGhpcy5fYWN0aXZlID0gbnVsbDtcblx0XHQvKipcblx0XHQgKiBMaXN0IG9mIGl0ZW1zXG5cdFx0ICpcblx0XHQgKiBAcHVibGljXG5cdFx0ICogQHR5cGUge0FycmF5fVxuXHRcdCAqL1xuXHRcdHRoaXMubGlzdCA9IFtdO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBpdGVtIG9mIGNvbnRhaW5lciBieSBpbmRleFxuXHQgKlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuXHQgKi9cblx0Z2V0QnlJbmRleChpbmRleCkge1xuXHRcdHJldHVybiB0aGlzLmxpc3RbaW5kZXhdO1xuXHR9XG5cblx0LyoqXG5cdCAqIFNldCBpdGVtIGFjdGl2ZSBieSBpbmRleFxuXHQgKlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuXHQgKi9cblx0c2V0QWN0aXZlQnlJbmRleChpbmRleCkge1xuXHRcdGlmICh0aGlzLmFjdGl2ZSkge1xuXHRcdFx0dGhpcy5hY3RpdmUucmVtb3ZlQ2xhc3MoJ2NvbnRyb2wtY29udGFpbmVyX19pdGVtLS1hY3RpdmUnKTtcblx0XHR9XG5cdFx0dGhpcy5fYWN0aXZlID0gdGhpcy5saXN0W2luZGV4XS5hZGRDbGFzcygnY29udHJvbC1jb250YWluZXJfX2l0ZW0tLWFjdGl2ZScpO1xuXHRcdHJldHVybiB0aGlzLl9hY3RpdmU7XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBHZXR0ZXIgb2YgYWN0aXZlIGZpZWxkXG5cdCAqXG5cdCAqIEBwdWJsaWNcblx0ICogQHR5cGUge2pRdWVyeX1cblx0ICovXG5cdGdldCBhY3RpdmUgKCkge1xuXHRcdGlmICh0aGlzLl9hY3RpdmUgJiYgdGhpcy5fYWN0aXZlLmxlbmd0aCA+IDAgKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5fYWN0aXZlO1xuXHRcdH1cblx0XHR0aGlzLmxpc3QuZm9yRWFjaChpdGVtID0+IHtcblx0XHRcdGlmIChpdGVtLmhhc0NsYXNzKCdjb250cm9sLWNvbnRhaW5lcl9faXRlbS0tYWN0aXZlJykpIHtcblx0XHRcdFx0dGhpcy5fYWN0aXZlID0gaXRlbTtcblx0XHRcdH1cblx0XHR9KVxuXHRcdHJldHVybiB0aGlzLl9hY3RpdmU7XG5cdH1cblxuXHQvKipcblx0ICogU2V0dGVyIG9mIGFjdGl2ZSBmaWVsZFxuXHQgKlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7alF1ZXJ5fSBJdGVtIG9mIGNvbnRhaW5lclxuXHQgKi9cblx0c2V0IGFjdGl2ZSAoZWxlbWVudCkge1xuXHRcdGlmICh0aGlzLmFjdGl2ZSkge1xuXHRcdFx0dGhpcy5hY3RpdmUucmVtb3ZlQ2xhc3MoJ2NvbnRyb2wtY29udGFpbmVyX19pdGVtLS1hY3RpdmUnKTtcblx0XHR9XG5cdFx0aWYgKGVsZW1lbnQpIHtcblx0XHRcdCQoZWxlbWVudCkuYWRkQ2xhc3MoJ2NvbnRyb2wtY29udGFpbmVyX19pdGVtLS1hY3RpdmUnKTtcblx0XHR9XG5cdFx0dGhpcy5fYWN0aXZlID0gZWxlbWVudDtcblx0XHRyZXR1cm4gdGhpcy5fYWN0aXZlXG5cdH1cblxuXG5cdC8qKlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7U3RyaW5nfGpRdWVyeX0gQ29udGVudCBvZiBpdGVtXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBEYXRhIG9mIGl0ZW1cblx0ICovXG5cdGFkZEl0ZW0gKGNvbnRlbnQsIGRhdGEpIHtcblx0XHRsZXQgaXRlbSA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0LmFkZENsYXNzKCdjb250cm9sLWNvbnRhaW5lcl9faXRlbScpXG5cdFx0XHQuZGF0YShkYXRhKVxuXHRcdFx0Lm9uKCdjbGljaycsIHRoaXMub25JdGVtQ2xpY2suYmluZCh0aGlzKSlcblx0XHRcdC5hcHBlbmQoY29udGVudCk7XG5cdFx0dGhpcy5saXN0LnB1c2goaXRlbSk7XG5cblx0XHR0aGlzLmRyb3Bkb3duQ29udGVudC5hcHBlbmQoaXRlbSk7XG5cblx0XHRyZXR1cm4gaXRlbTtcblx0fVxuXG5cdC8qKlxuXHQgKiBPbiBpdGVtIGNsaWNrIGV2ZW50IGhhbmRsZXJcblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge0V2ZW50fSBlXG5cdCAqL1xuXHRvbkl0ZW1DbGljayAoZSkge1xuXHRcdHRoaXMuYWN0aXZlID0gZS5jdXJyZW50VGFyZ2V0O1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0YnVpbGRDU1NDbGFzcygpIHtcblx0XHRyZXR1cm4gYCR7c3VwZXIuYnVpbGRDU1NDbGFzcygpfSBjb250cm9sLWNvbnRhaW5lcmBcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250cm9sQ29udGFpbmVyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc291cmNlL2pzL2NvbXBvbmVudHMvY29udHJvbC1jb250YWluZXIuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIHN1YnRpdGxlLWNvbnRyb2wuanNcbiAqXG4gKiBTdWJ0aXRsZSBjb250cm9sXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb250cm9sQ29udGFpbmVyIGZyb20gJy4vY29udHJvbC1jb250YWluZXInO1xuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBjbGFzcyBTdWJ0aXRsZUNvbnRyb2xcbiAqIEBleHRlbmRzIENvbnRyb2xDb250YWluZXJcbiAqL1xuY2xhc3MgU3VidGl0bGVDb250cm9sIGV4dGVuZHMgQ29udHJvbENvbnRhaW5lciB7XG5cdGNvbnN0cnVjdG9yIChwbGF5ZXIsIG9wdGlvbnM9e30pIHtcblx0XHRvcHRpb25zID0gJC5leHRlbmQoe30sIHtcblx0XHRcdGljb25OYW1lIDogJ2NvbW1lbnRpbmctbycsXG5cdFx0XHR0aXRsZSA6ICfQodGD0LHRgtC40YLRgNGLJyxcblx0XHRcdGNsYXNzTmFtZSA6ICdzdWJ0aXRsZS1jb250cm9sJ1xuXHRcdH0sIG9wdGlvbnMpO1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cdH1cblxuXHRpbml0KCkge1xuXHRcdGxldCB2aWRlbyA9IHRoaXMucGxheWVyLnZpZGVvO1xuXHRcdGlmICh2aWRlby5zdWJ0aXRsZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0Zm9yICh2YXIgaSBpbiB2aWRlby5zdWJ0aXRsZXMpIHtcblx0XHRcdFx0aWYgKCF2aWRlby5zdWJ0aXRsZXMuaGFzT3duUHJvcGVydHkoaSkpIGNvbnRpbnVlO1xuXHRcdFx0XHRsZXQgaXRlbSA9IHZpZGVvLnN1YnRpdGxlc1sgaSBdO1xuXHRcdFx0XHR0aGlzLmFkZEl0ZW0oaXRlbS50aXRsZSwge1xuXHRcdFx0XHRcdHNyYyA6IGl0ZW0uc3JjLFxuXHRcdFx0XHRcdGxhbmd1YWdlIDogaXRlbS5sYW5ndWFnZVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5kaXNhYmxlKCk7XG5cdFx0fVxuXHR9XG5cblx0b25JY29uQ2xpY2sgKGUpIHtcblx0XHRzdXBlci5vbkljb25DbGljayhlKTtcblx0XHRsZXQgdmlkZW8gPSB0aGlzLnBsYXllci52aWRlbztcblx0XHR0aGlzLmFjdGl2ZSA9IG51bGxcblx0XHR2aWRlby50cmFjayA9IC0xO1xuXHR9XG5cblx0b25JdGVtQ2xpY2sgKGUpIHtcblx0XHRzdXBlci5vbkl0ZW1DbGljayhlKTtcblx0XHRsZXQgaXRlbSA9ICQoZS50YXJnZXQpXG5cdFx0bGV0IHZpZGVvID0gdGhpcy5wbGF5ZXIudmlkZW87XG5cdFx0aWYgKGl0ZW0uZGF0YSgnbGFuZ3VhZ2UnKSkge1xuXHRcdFx0dmlkZW8udHJhY2sgPSBpdGVtLmRhdGEoJ2xhbmd1YWdlJyk7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN1YnRpdGxlQ29udHJvbDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNvdXJjZS9qcy9jb21wb25lbnRzL3N1YnRpdGxlLWNvbnRyb2wuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIGRvd25sb2FkLWNvbnRyb2wuanNcbiAqXG4gKiBEb3dubG9hZCBjb250cm9sXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb250cm9sIGZyb20gJy4vY29udHJvbCc7XG5pbXBvcnQgSWNvbiBmcm9tICcuL2ljb24nO1xuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEBjbGFzcyBEb3dubG9hZENvbnRyb2xcbiAqIEBleG50ZWRzIENvbnRyb2xcbiAqL1xuY2xhc3MgRG93bmxvYWRDb250cm9sIGV4dGVuZHMgQ29udHJvbCB7XG5cdGNvbnN0cnVjdG9yIChwbGF5ZXIsIG9wdGlvbnM9e30pIHtcblx0XHRvcHRpb25zID0gJC5leHRlbmQoe1xuXHRcdFx0dGl0bGUgOiAn0KHQutCw0YfQsNGC0Ywg0LLQuNC00LXQvicsXG5cdFx0XHRjbGFzc05hbWUgOiAnZG93bmxvYWQnLFxuXHRcdH0sIG9wdGlvbnMpO1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0Ly8gVE9ETzog0JTQvtC+0L/RgNC10LTQtdC70LjRgtGMINGN0YLQvtGCINC80LXRgtC+0LQsINCwINC90LUg0L/QtdGA0LXQvtC/0YDQtdC00LvQtdC40YLRjFxuXHRcdHRoaXMuZWxlbWVudCA9ICQoJzxhIC8+Jylcblx0XHRcdC5hdHRyKHtcblx0XHRcdFx0aHJlZiA6ICcnLFxuXHRcdFx0XHR0YXJnZXQgOiAnX2JsYW5rJyxcblx0XHRcdFx0ZG93bmxvYWQgOiB0cnVlLFxuXHRcdFx0XHR0aXRsZSA6IHRoaXMub3B0aW9ucy50aXRsZSxcblx0XHRcdH0pXG5cdFx0XHQuYWRkQ2xhc3ModGhpcy5idWlsZENTU0NsYXNzKCkpXG5cdFx0XHQuYXBwZW5kKG5ldyBJY29uKHRoaXMucGxheWVyLCB7IGljb25OYW1lIDogJ2Rvd25sb2FkJyB9ICkuZWxlbWVudCk7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRidWlsZENTU0NsYXNzKCkge1xuXHRcdHJldHVybiBgJHtzdXBlci5idWlsZENTU0NsYXNzKCl9YDtcblx0fVxuXG5cblx0LyoqXG5cdCAqIFNldHRlciBvZiBsaW5rIGZpZWxkXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIFBhdGggZm9yIHZpZGVvXG5cdCAqL1xuXHRzZXQgbGluayAodmFsdWUpIHtcblx0XHR0aGlzLmVsZW1lbnQuYXR0cignaHJlZicsIHZhbHVlKTtcblx0fVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IERvd25sb2FkQ29udHJvbDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNvdXJjZS9qcy9jb21wb25lbnRzL2Rvd25sb2FkLWNvbnRyb2wuanNcbiAqKi8iLCJcbid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUga2V5YmluZGluZy1pbmZvLWNvbnRyb2wuanNcbiAqXG4gKiBJbmZvIGNvbnRyb2xcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbnRyb2xEcm9wZG93biBmcm9tICcuL2NvbnRyb2wtZHJvcGRvd24nO1xuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBjbGFzcyBLZXlCaW5kaW5nSW5mb0NvbnRyb2xcbiAqIEBleHRlbmRzIENvbnRyb2xEcm9wZG93blxuICovXG5jbGFzcyBLZXlCaW5kaW5nSW5mb0NvbnRyb2wgZXh0ZW5kcyBDb250cm9sRHJvcGRvd24ge1xuXG5cdGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucykge1xuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0aWNvbk5hbWUgOiAnaW5mbycsXG5cdFx0XHR0aXRsZSA6ICfQmNC90YTQvicsXG5cdFx0XHRjbGFzc05hbWUgOiAnaW5mby1jb250cm9sJ1xuXHRcdH0sIG9wdGlvbnMpO1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cdH1cblxuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdHN1cGVyLmNyZWF0ZUVsZW1lbnQoKTtcblx0XHRsZXQga2V5QmluZGluZyA9IHRoaXMucGxheWVyLm9wdGlvbnMua2V5QmluZGluZztcblx0XHRsZXQgaW5mb0NvbnRlbnQgPSBgYDtcblx0XHRmb3IgKGxldCBfa2V5IGluIGtleUJpbmRpbmcpIHtcblx0XHRcdGlmICgha2V5QmluZGluZy5oYXNPd25Qcm9wZXJ0eShfa2V5KSkgY29udGludWU7XG5cblx0XHRcdGxldCBob3RrZXkgPSBrZXlCaW5kaW5nW19rZXldO1xuXHRcdFx0bGV0IGl0ZW0gPSAnJztcblx0XHRcdGxldCBrZXlTdHJpbmcgPSAnJztcblxuXHRcdFx0aG90a2V5LmluZm8uZm9yRWFjaCgoa2V5LCBpbmRleCkgPT4ge1xuXHRcdFx0XHRpZiAoaW5kZXggIT0gMCkge1xuXHRcdFx0XHRcdGtleVN0cmluZyArPSBgICsgYFxuXHRcdFx0XHR9XG5cdFx0XHRcdGtleVN0cmluZyArPSBgPGRpdiBjbGFzcz1cImxlcGxheWVyLWtleVwiPiR7a2V5fTwvZGl2PmBcblx0XHRcdH0pO1xuXG5cdFx0XHRpdGVtID0gYFxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiaW5mby1jb250cm9sX19pdGVtXCI+XG5cdFx0XHRcdFx0JHtrZXlTdHJpbmd9IC0gJHtob3RrZXkuZGVzY3JpcHRpb259XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0YFxuXG5cdFx0XHRpbmZvQ29udGVudCArPSBpdGVtO1xuXG5cdFx0fVxuXHRcdHRoaXMuZHJvcGRvd25Db250ZW50XG5cdFx0XHQuYWRkQ2xhc3MoJ2luZm8tY29udHJvbF9fY29udGVudCcpXG5cdFx0XHQuYXBwZW5kKGluZm9Db250ZW50KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBLZXlCaW5kaW5nSW5mb0NvbnRyb2w7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzb3VyY2UvanMvY29tcG9uZW50cy9rZXliaW5kaW5nLWluZm8tY29udHJvbC5qc1xuICoqLyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3RDQTtBQUNBOzs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFPQTtBQUNBO0FBSUE7QUFMQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQXJEQTtBQXZDQTtBQUNBOzs7Ozs7QUFmQTtBQTJIQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQWpJQTtBQUFBO0FBQUE7QUFzSUE7QUFNQTtBQTVJQTtBQUFBO0FBQUE7QUE4SUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXhCQTtBQTBCQTtBQUNBOzs7OztBQTlLQTtBQUFBO0FBQUE7QUFtTEE7QUFNQTtBQXpMQTtBQUFBO0FBQUE7QUEyTEE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVVBO0FBak5BO0FBQUE7QUFBQTtBQW9OQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBM05BO0FBQUE7QUFBQTtBQThOQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBalBBO0FBQUE7QUFBQTtBQXNQQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUE1UEE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBZ1FBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXpRQTtBQUFBO0FBQUE7QUFxWUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXJaQTtBQUFBO0FBQUE7Ozs7Ozs7QUE4WkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbmFBO0FBQUE7QUFBQTtBQXNhQTtBQUNBO0FBdmFBO0FBQUE7QUFBQTtBQTBhQTtBQUNBO0FBQ0E7QUFDQTtBQTdhQTtBQUFBO0FBQUE7QUFnYkE7QUFDQTtBQUNBO0FBQ0E7QUFuYkE7QUFBQTtBQUFBO0FBcWJBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQXhiQTtBQUFBO0FBQUE7QUEwYkE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBN2JBO0FBQUE7QUFBQTtBQWdjQTtBQUNBO0FBamNBO0FBQUE7QUFBQTtBQW9jQTtBQUNBO0FBcmNBO0FBQUE7QUFBQTtBQXdjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBcmRBO0FBQUE7QUFBQTtBQXVkQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFwZUE7QUFBQTtBQUFBO0FBdWVBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7O0FBRUE7QUFoZ0JBO0FBQUE7QUFBQTtBQWtnQkE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXZDQTtBQXlDQTtBQS9pQkE7QUFBQTtBQUFBO0FBa2pCQTtBQUNBO0FBbmpCQTtBQUFBO0FBQUE7QUEyUUE7QUFDQTtBQTVRQTtBQStRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdFJBO0FBQUE7QUFBQTtBQXlSQTtBQUNBO0FBMVJBO0FBQUE7QUFBQTtBQTZSQTtBQUNBO0FBOVJBO0FBQUE7QUFBQTtBQWlTQTtBQUNBO0FBbFNBO0FBeVNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBOVNBO0FBQUE7QUFBQTtBQXFTQTtBQUNBO0FBdFNBO0FBQUE7QUFBQTtBQWdUQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBbFVBO0FBQUE7QUFBQTtBQXFVQTtBQUNBO0FBSUE7QUFDQTtBQTNVQTtBQUFBO0FBQUE7QUE4VUE7QUFDQTtBQS9VQTtBQWtWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUExVkE7QUFBQTtBQUFBO0FBNlZBO0FBQ0E7QUE5VkE7QUFBQTtBQUFBO0FBaVdBO0FBQ0E7O0FBRUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFYQTtBQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQXpYQTtBQUFBO0FBQUE7QUE0WEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW5ZQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUF1akJBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE1akJBO0FBQUE7QUFBQTtBQTBsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTlsQkE7QUFBQTtBQUFBO0FBaW1CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXZtQkE7QUFBQTtBQUFBO0FBMG1CQTtBQUNBO0FBM21CQTtBQUFBO0FBQUE7QUE4bUJBO0FBQ0E7QUEvbUJBO0FBQUE7QUFBQTtBQWtuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUExbkJBO0FBQUE7QUFBQTtBQTZuQkE7QUFDQTtBQUVBO0FBQ0E7QUFqb0JBO0FBQUE7QUFBQTtBQW9vQkE7QUFFQTtBQXRvQkE7QUFBQTtBQUFBO0FBeW9CQTtBQUVBO0FBM29CQTtBQUFBO0FBQUE7QUE4b0JBO0FBRUE7QUFocEJBO0FBQUE7QUFBQTtBQW1wQkE7QUFDQTtBQXBwQkE7QUFBQTtBQUFBO0FBOGpCQTtBQUNBO0FBQ0E7QUFDQTtBQWprQkE7QUFBQTtBQUFBO0FBb2tCQTtBQUNBO0FBQ0E7QUFDQTtBQXZrQkE7QUFBQTtBQUFBO0FBMGtCQTtBQUNBO0FBQ0E7QUFDQTtBQTdrQkE7QUFBQTtBQUFBO0FBZ2xCQTtBQUVBO0FBbGxCQTtBQUFBO0FBQUE7QUFxbEJBO0FBRUE7QUF2bEJBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQXdwQkE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQWhxQkE7QUFBQTtBQUFBO0FBOHNCQTtBQUNBO0FBQ0E7QUFDQTtBQWp0QkE7QUFBQTtBQUFBO0FBb3RCQTtBQUNBO0FBcnRCQTtBQUFBO0FBQUE7QUF3dEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBL3RCQTtBQUFBO0FBQUE7QUFrdUJBO0FBQ0E7QUFEQTtBQUVBO0FBcHVCQTtBQUFBO0FBQUE7QUF1dUJBO0FBQ0E7QUFEQTtBQUVBO0FBenVCQTtBQUFBO0FBQUE7QUE0dUJBO0FBQ0E7QUFEQTtBQUVBO0FBOXVCQTtBQUFBO0FBQUE7QUFrcUJBO0FBQ0E7QUFucUJBO0FBQUE7QUFBQTtBQXNxQkE7QUFDQTtBQXZxQkE7QUFBQTtBQUFBO0FBMHFCQTtBQUNBO0FBM3FCQTtBQUFBO0FBQUE7QUE4cUJBO0FBQ0E7QUFDQTtBQUNBO0FBanJCQTtBQUFBO0FBQUE7QUFvckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF4ckJBO0FBQUE7QUFBQTtBQTJyQkE7QUFDQTtBQUNBO0FBQ0E7QUE5ckJBO0FBQUE7QUFBQTtBQWlzQkE7QUFDQTtBQUNBO0FBQ0E7QUFwc0JBO0FBQUE7QUFBQTtBQXVzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTNzQkE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBa3ZCQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbnhCQTtBQUFBO0FBQUE7QUF1eEJBO0FBQ0E7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBdHlCQTtBQUFBO0FBQUE7QUF5eUJBO0FBQ0E7QUFDQTtBQTN5QkE7QUFBQTtBQUFBO0FBOHlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBeHpCQTtBQUFBO0FBQUE7QUEyekJBO0FBQ0E7QUE1ekJBO0FBQUE7QUFBQTtBQSt6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF4MEJBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUEwMEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFGQTtBQUtBO0FBSUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3JwQ0E7Ozs7Ozs7Ozs7Ozs7OztBQU9BO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQVJBO0FBWUE7QUFDQTs7Ozs7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFJQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQUtBO0FBQ0E7QUFDQTs7Ozs7O0FBSUE7Ozs7OztBQ3hHQTs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUFPQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBU0E7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQUlBO0FBQ0E7QUFDQTs7Ozs7O0FBS0E7Ozs7OztBQy9DQTs7Ozs7Ozs7Ozs7Ozs7O0FBT0E7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBUUE7QUFDQTs7Ozs7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTs7Ozs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQUtBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBS0E7QUFDQTtBQUNBOzs7Ozs7QUFJQTs7Ozs7O0FDekVBOzs7Ozs7Ozs7O0FBZ0NBO0FBQ0E7QUEzQkE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF6Q0E7QUEyQ0E7Ozs7OztBQzVFQTs7Ozs7Ozs7Ozs7OztBQU9BO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTUE7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFPQTtBQUNBOzs7Ozs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBSUE7O0FBRUE7QUFDQTs7Ozs7O0FBR0E7Ozs7OztBQ2xEQTs7Ozs7Ozs7Ozs7Ozs7O0FBT0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFGQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBVEE7QUFVQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQWFBO0FBQ0E7OztBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFxQkE7Ozs7OztBQ2hIQTs7Ozs7Ozs7Ozs7Ozs7O0FBUUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFFQTtBQUNBOzs7Ozs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQUlBO0FBQ0E7QUFDQTs7Ozs7O0FBSUE7Ozs7OztBQzNDQTs7Ozs7Ozs7Ozs7Ozs7O0FBTUE7Ozs7Ozs7Ozs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBR0E7Ozs7OztBQ3JDQTs7Ozs7Ozs7Ozs7Ozs7O0FBT0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFQQTtBQVFBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTdCQTtBQUNBO0FBZ0NBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhCQTtBQWtCQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBSUE7Ozs7OztBQy9NQTs7Ozs7Ozs7Ozs7Ozs7O0FBT0E7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBS0E7QUFDQTs7Ozs7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7Ozs7OztBQUdBOzs7Ozs7QUNqREE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTs7Ozs7OztBQzNCQTs7Ozs7Ozs7Ozs7Ozs7O0FBT0E7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBREE7QUFRQTtBQUNBOzs7Ozs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFHQTs7Ozs7O0FDckNBOzs7Ozs7Ozs7Ozs7Ozs7QUFRQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUZBO0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FBMEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFJQTtBQUNBO0FBQ0E7OztBQTdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQU1BO0FBQ0E7QUFDQTs7Ozs7O0FBbUJBOzs7Ozs7QUMvREE7Ozs7Ozs7Ozs7Ozs7OztBQU9BO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTUE7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFPQTtBQUNBOzs7Ozs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFHQTs7Ozs7O0FDbENBOzs7Ozs7Ozs7Ozs7Ozs7QUFPQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQTtBQWFBO0FBQ0E7Ozs7Ozs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBSUE7QUFDQTs7Ozs7OztBQUlBO0FBQ0E7QUFDQTs7O0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7OztBQWxDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBOzs7Ozs7QUF5QkE7Ozs7OztBQ3pHQTs7Ozs7Ozs7Ozs7Ozs7O0FBT0E7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFPQTtBQUNBOzs7Ozs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFHQTs7Ozs7O0FDbkNBOzs7Ozs7Ozs7Ozs7Ozs7QUFPQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQU1BOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBRkE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBYkE7QUFjQTtBQUNBOzs7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFHQTs7Ozs7O0FDbERBOzs7Ozs7Ozs7Ozs7Ozs7QUFPQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQU1BOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTtBQVRBO0FBVUE7QUFDQTs7Ozs7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFJQTtBQUNBO0FBQ0E7OztBQTlEQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFzQ0E7Ozs7OztBQzdIQTs7Ozs7Ozs7Ozs7Ozs7O0FBT0E7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQU9BO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFHQTs7Ozs7O0FDMURBOzs7Ozs7Ozs7Ozs7Ozs7QUFPQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUNBOzs7Ozs7OztBQUtBOztBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVFBO0FBQ0E7Ozs7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FBT0E7QUFDQTtBQUNBOzs7Ozs7QUFJQTs7Ozs7OztBQzdEQTs7Ozs7Ozs7Ozs7Ozs7O0FBT0E7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBT0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBRUE7QUFDQTtBQUdBOzs7Ozs7QUFHQTs7OyIsInNvdXJjZVJvb3QiOiIifQ==