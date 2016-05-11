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

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	(function ($) {
		'use strict';

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

			var options = $.extend({}, {
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
					common: [['play', 'volume', 'divider', 'timeline', 'divider', 'fullscreen'], ['rate', 'divider', 'backward', 'divider', 'source', 'divider', 'subtitle', 'divider', 'download']],
					fullscreen: [['play', 'volume', 'divider', 'timeline', 'divider', 'rate', 'divider', 'backward', 'divider', 'source', 'divider', 'subtitle', 'divider', 'download', 'divider', 'fullscreen']]
				},
				volume: {
					default: 0.4,
					mutelimit: 0.05,
					step: 0.1
				},
				keyBinding: {
					play: {
						key: 32,
						fn: function fn(video) {
							video.togglePlay();
						}
					},
					backwardMedium: {
						key: 37,
						fn: function fn(video) {
							video.currentTime -= options.playback.step.medium;
						}
					},
					forwardMedium: {
						key: 39,
						fn: function fn(video) {
							video.currentTime += options.playback.step.medium;
						}
					},
					backwardShort: {
						shiftKey: true,
						key: 37,
						fn: function fn(video) {
							video.currentTime -= options.playback.step.short;
						}
					},
					forwardShort: {
						shiftKey: true,
						key: 39,
						fn: function fn(video) {
							video.currentTime += options.playback.step.short;
						}
					},

					volumeUp: {
						key: 38,
						fn: function fn(video) {
							video.volume += options.volume.step;
						}
					},

					volumeDown: {
						key: 40,
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
							},
							'mouseleave.leplayer.fullscreen-hide-timeline': function mouseleaveLeplayerFullscreenHideTimeline(e) {
								if (!$(e.currentTarget).hasClass('fullscreen')) return false;
								clearTimeout(_this2._hideTimeout);
								_this2._collection.element.hide();
							}
						});
					}
				}, {
					key: 'hideElements',
					value: function hideElements() {
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
						var _$$trigger;

						for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
							args[_key - 1] = arguments[_key];
						}

						(_$$trigger = $(this._video).trigger).call.apply(_$$trigger, [$(this._video), 'leplayer_' + eventName].concat(args));
					}
				}, {
					key: '_initRate',
					value: function _initRate() {
						this.rate = Cookie.get('rate', options.rate.default);
					}
				}, {
					key: '_initVolume',
					value: function _initVolume() {
						this.volume = Cookie.get('volume', options.volume.default);
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
							},

							'ended': function ended() {
								_this5.pause();
								_this5.trigger('ended');
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
							}

						});
					}
				}, {
					key: '_initCustomEvents',
					value: function _initCustomEvents() {
						var mediaElement = $(this._video);

						mediaElement.on({
							'inited.leplayer': function initedLeplayer(e) {}
						});
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
						controls.volume = this._video.volume;
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
				}]);

				return Video;
			}();

			var Control = function () {
				function Control(cssClass, iconClass) {
					_classCallCheck(this, Control);

					if (iconClass) {
						this.icon = new Icon(iconClass);
						this.icon.element.on({
							'click': this._onIconClick.bind(this),
							'leplayer_icon_click': this.onIconClick.bind(this)
						});
					}
					this.element = $('<div />').addClass('control ' + cssClass).append(this.icon && this.icon.element).on({
						'click': this._onClick.bind(this),
						'leplayer_click': this.onClick.bind(this)
					});
				}

				_createClass(Control, [{
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
						if (this.disabled) {
							return false;
						}
						this.icon.element.trigger('leplayer_icon_click');
					}
				}, {
					key: 'onClick',
					value: function onClick(e) {
						e.preventDefault();
					}
				}, {
					key: 'onIconClick',
					value: function onIconClick(e) {
						e.preventDefault();
					}
				}], [{
					key: 'divider',
					value: function divider() {
						return $('<div />').addClass('divider');
					}
				}, {
					key: 'create',
					value: function create(name) {
						switch (name) {
							case C_BACKWARD:
								return new BackwardControl();

							case C_DIVIDER:
								return this.divider();

							case C_DOWNLOAD:
								return new DownloadControl();

							case C_FORWARD:
								return new ForwardControl();

							case C_FULLSCREEN:
								return new FullscreenControl();

							case C_PLAY:
								return new PlayControl();

							case C_RATE:
								return new RateControl();

							case C_SOURCE:
								return new SourceControl();

							case C_SUBTITLE:
								return new SubtitleControl();

							case C_TIMELINE:
								return new TimelineControl();

							case C_VOLUME:
								return new VolumeControl();

							default:
								return null;
						}
					}
				}]);

				return Control;
			}();

			var ControlText = function () {
				function ControlText(classname) {
					_classCallCheck(this, ControlText);

					this.element = $('<div />').addClass('control-text ' + classname);
				}

				_createClass(ControlText, [{
					key: 'text',
					set: function set(value) {
						this.element.html(value);
					}
				}]);

				return ControlText;
			}();

			var ControlContainer = function (_Control) {
				_inherits(ControlContainer, _Control);

				function ControlContainer(name, iconClass) {
					_classCallCheck(this, ControlContainer);

					var _this7 = _possibleConstructorReturn(this, Object.getPrototypeOf(ControlContainer).call(this, name, iconClass));

					_this7.iconClass = iconClass;
					_this7.listElement = $('<div/>').addClass('control-inner');
					_this7.element.addClass('control-container').append(_this7.listElement);
					_this7._index = 0;
					_this7.list = [];
					return _this7;
				}

				_createClass(ControlContainer, [{
					key: 'addItem',
					value: function addItem(text, data) {
						var _this8 = this;

						var _self = this;
						var item = $('<div />').addClass('inner-item').data('index', this._index).html(text)
						/** TODO: Refactor this callback and event */
						.on('click', function () {
							_this8.onItemClick(item.data('index'));
						});
						if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) == 'object') {
							for (var k in data) {
								item.data(k, data[k]);
							}
						}
						this._index++;
						this.list.push(item);
						this.listElement.append(item);

						return item;
					}
				}, {
					key: 'getByIndex',
					value: function getByIndex(index) {
						for (var i in this.list) {
							if (this.list[i].data('index') == index) return this.list[i];
						}return null;
					}
				}, {
					key: 'onItemClick',
					value: function onItemClick(index) {
						this.active = index;
					}
				}, {
					key: 'active',
					get: function get() {
						for (var i in this.list) {
							if (this.list[i].hasClass('active')) return this.list[i];
						}return null;
					},
					set: function set(index) {
						var hasActive = false;
						for (var i in this.list) {
							if (this.list[i].data('index') == index) {
								this.list[i].addClass('active');
								this.icon.element.html(this.list[i].html());
								hasActive = true;
							} else this.list[i].removeClass('active');
						}
						if (!hasActive) this.icon.iconName = this.iconClass;
					}
				}]);

				return ControlContainer;
			}(Control);

			var BackwardControl = function (_Control2) {
				_inherits(BackwardControl, _Control2);

				function BackwardControl() {
					_classCallCheck(this, BackwardControl);

					return _possibleConstructorReturn(this, Object.getPrototypeOf(BackwardControl).call(this, 'backward', 'undo'));
				}

				_createClass(BackwardControl, [{
					key: 'onClick',
					value: function onClick(e) {
						_get(Object.getPrototypeOf(BackwardControl.prototype), 'onClick', this).call(this, e);
						video.currentTime -= options.playback.step.medium;
					}
				}]);

				return BackwardControl;
			}(Control);

			var DownloadControl = function (_Control3) {
				_inherits(DownloadControl, _Control3);

				function DownloadControl() {
					_classCallCheck(this, DownloadControl);

					var _this10 = _possibleConstructorReturn(this, Object.getPrototypeOf(DownloadControl).call(this, '', ''));

					var icon = new Icon('download');
					_this10.element = $('<a />').attr('href', '').attr('target', '_blank').attr('download', '').addClass('control download').append(icon.element);
					return _this10;
				}

				_createClass(DownloadControl, [{
					key: 'link',
					set: function set(value) {
						this.element.attr('href', value);
					}
				}]);

				return DownloadControl;
			}(Control);

			var ForwardControl = function (_Control4) {
				_inherits(ForwardControl, _Control4);

				function ForwardControl() {
					_classCallCheck(this, ForwardControl);

					return _possibleConstructorReturn(this, Object.getPrototypeOf(ForwardControl).call(this, 'forward', 'redo'));
				}

				return ForwardControl;
			}(Control);

			var FullscreenControl = function (_Control5) {
				_inherits(FullscreenControl, _Control5);

				function FullscreenControl() {
					_classCallCheck(this, FullscreenControl);

					return _possibleConstructorReturn(this, Object.getPrototypeOf(FullscreenControl).call(this, 'fullscreen', 'arrows-alt'));
				}

				_createClass(FullscreenControl, [{
					key: 'onClick',
					value: function onClick(e) {
						_get(Object.getPrototypeOf(FullscreenControl.prototype), 'onClick', this).call(this, e);
						video.fullscreen.toggle();
					}
				}]);

				return FullscreenControl;
			}(Control);

			var PlayControl = function (_Control6) {
				_inherits(PlayControl, _Control6);

				function PlayControl() {
					_classCallCheck(this, PlayControl);

					return _possibleConstructorReturn(this, Object.getPrototypeOf(PlayControl).call(this, 'play', 'play'));
				}

				_createClass(PlayControl, [{
					key: 'pause',
					value: function pause() {
						this.icon.iconName = 'play';
					}
				}, {
					key: 'play',
					value: function play() {
						this.icon.iconName = 'pause';
					}
				}, {
					key: 'onClick',
					value: function onClick(e) {
						_get(Object.getPrototypeOf(PlayControl.prototype), 'onClick', this).call(this, e);
						video.togglePlay();
					}
				}]);

				return PlayControl;
			}(Control);

			var RateControl = function (_Control7) {
				_inherits(RateControl, _Control7);

				function RateControl() {
					_classCallCheck(this, RateControl);

					var _this14 = _possibleConstructorReturn(this, Object.getPrototypeOf(RateControl).call(this));

					_this14.down = new Control('rate-down', 'backward');
					_this14.up = new Control('rate-up', 'forward');
					_this14.current = new ControlText('rate-current');

					_this14.down.element.click(function (e) {
						video.rate -= options.rate.step;
					});

					_this14.up.element.click(function (e) {
						video.rate += options.rate.step;
					});

					_this14.element = $('<div />').addClass('control-container').append(_this14.down.element).append(_this14.current.element).append(_this14.up.element);
					return _this14;
				}

				_createClass(RateControl, [{
					key: 'set',
					value: function set(value) {
						if (this.disabled) {
							return false;
						}
						this.up.element.removeClass('disabled');
						this.down.element.removeClass('disabled');
						if (video.rate <= options.rate.min) this.down.element.addClass('disabled');else if (video.rate >= options.rate.max) this.up.element.addClass('disabled');
						this.show();
					}
				}, {
					key: 'init',
					value: function init() {
						var rate = Cookie.get('rate', options.rate.default);
						this.show(rate);
					}
				}, {
					key: 'show',
					value: function show(value) {
						value = value || video.rate;
						value = parseFloat(value).toFixed(2).toString().replace(/,/g, '.');
						this.current.text = '×' + value;
					}
				}, {
					key: 'disable',
					value: function disable() {
						this.disabled = true;
						this.down.disable.apply(this.down, arguments);
						this.up.disable.apply(this.up, arguments);
					}
				}]);

				return RateControl;
			}(Control);

			var SourceControl = function (_ControlContainer) {
				_inherits(SourceControl, _ControlContainer);

				function SourceControl() {
					_classCallCheck(this, SourceControl);

					/** TODO: Move sources to the arguments in constror */

					var _this15 = _possibleConstructorReturn(this, Object.getPrototypeOf(SourceControl).call(this, 'source-control', 'bullseye'));

					if (sources.length > 1) {
						for (var i in sources) {
							_this15.addItem(sources[i].title, { src: sources[i].src });
						}
					} else _this15.disable();
					return _this15;
				}

				_createClass(SourceControl, [{
					key: 'set',
					value: function set(index) {
						/** TODO: Emit event on set source*/
						var s = this.getByIndex(index);
						if (s != null) {
							video.source = s.data('src');
							controls.download = s.data('src');
						}
					}
				}, {
					key: 'onItemClick',
					value: function onItemClick(index) {
						_get(Object.getPrototypeOf(SourceControl.prototype), 'onItemClick', this).call(this, index);
						this.set(index);
					}
				}]);

				return SourceControl;
			}(ControlContainer);

			var SubtitleControl = function (_ControlContainer2) {
				_inherits(SubtitleControl, _ControlContainer2);

				function SubtitleControl() {
					_classCallCheck(this, SubtitleControl);

					return _possibleConstructorReturn(this, Object.getPrototypeOf(SubtitleControl).call(this, 'subtitle-control', 'commenting-o'));
				}

				_createClass(SubtitleControl, [{
					key: 'init',
					value: function init() {
						if (video.subtitles.length > 0) {
							for (var i in video.subtitles) {
								if (!video.subtitles.hasOwnProperty(i)) continue;
								var item = video.subtitles[i];
								this.addItem(item.title, {
									src: item.src,
									language: item.language
								});
							}
						} else this.disable();
					}
				}, {
					key: 'onIconClick',
					value: function onIconClick(e) {
						_get(Object.getPrototypeOf(SubtitleControl.prototype), 'onIconClick', this).call(this, e);
						this.onItemClick(-1);
					}
				}, {
					key: 'onItemClick',
					value: function onItemClick(index) {
						_get(Object.getPrototypeOf(SubtitleControl.prototype), 'onItemClick', this).call(this, index);
						var t = this.getByIndex(index);
						if (t != null) video.track = t.data('language');else video.track = -1;
					}
				}]);

				return SubtitleControl;
			}(ControlContainer);

			var TimelineControl = function (_Control8) {
				_inherits(TimelineControl, _Control8);

				function TimelineControl() {
					_classCallCheck(this, TimelineControl);

					var _this17 = _possibleConstructorReturn(this, Object.getPrototypeOf(TimelineControl).call(this, 'timeline'));

					var duration = video.duration;

					_this17.drag = false;

					_this17.current = new ControlText('time-current');
					_this17.total = new ControlText('time-total');

					_this17.marker = $('<div />').addClass('time-marker');

					_this17.markerShadow = $('<div />').addClass('time-marker shadow').append().hide();

					_this17.markerShadowTime = $('<div />').addClass('time');
					_this17.markerTime = $('<div />').addClass('time').hide();
					_this17.played = $('<div />').addClass('time-played');
					_this17.buffered = $('<div />');
					_this17.current.text = '00:00';
					_this17.line = $('<div />').addClass('timeline').append(_this17.marker.append(_this17.markerTime)).append(_this17.markerShadow.append(_this17.markerShadowTime)).append(_this17.played).append(_this17.buffered).on({
						'mousemove': function mousemove(e) {
							if (_this17.drag) return;

							var p = _this17.getPosition(e.pageX);
							if (p > 0 && p < 1) {
								_this17.markerShadow.show();
								_this17.markerShadow.css('left', p * 100 + '%');
								_this17.markerShadowTime.html(secondsToTime(video.duration * p));
							} else _this17.markerShadow.hide();
						},

						'mouseleave': function mouseleave(e) {
							if (_this17.drag) return;
							_this17.markerShadow.hide();
						},

						'mousedown': function mousedown(e) {},

						'click': function click(e) {
							if (e.which !== 1) return;
							if (_this17.drag) return;
							_this17.hardMove(_this17.getPosition(e.pageX));
							video.seek(video.duration * _this17.getPosition(e.pageX));
						},

						'touchmove': function touchmove(e) {}
					});

					_this17.element.addClass('timeline-container').append($('<div />').addClass('timeline-subcontainer').append(_this17.current.element).append(_this17.line).append(_this17.total.element));

					_this17.marker.on('mousedown', function (e) {
						if (e.which !== 1) return;
						e.preventDefault();
						_this17.markerShadow.hide();
						_this17.drag = true;
					});

					$(document).on({

						'mousemove': function mousemove(e) {
							if (!_this17.drag) return;
							var p = _this17.getPosition(e.pageX);
							if (p > 0 && p < 1) {
								_this17.markerTime.show().html(secondsToTime(video.duration * p));
								video.seek(video.duration * p);
							}
						},

						'mouseup': function mouseup(e) {
							_this17.markerTime.hide();
							_this17.drag = false;
						}
					});

					/** TODO: Solve problem with open events api */
					$(video._video).on('leplayer_ended', function (e) {
						clearInterval(_this17.watchBufferInterval);
					});

					_this17._initWatchBuffer();
					return _this17;
				}

				_createClass(TimelineControl, [{
					key: 'getPosition',
					value: function getPosition(x) {
						return (x - this.line.offset().left) / this.line.width();
					}
				}, {
					key: 'hardMove',
					value: function hardMove(percent) {
						var currentTime = video.duration * percent;
						percent = percent * 100;
						this.marker.css('left', percent + '%');
						this.played.css('width', percent + '%');
						this.current.text = secondsToTime(currentTime);
					}
				}, {
					key: 'move',
					value: function move() {
						var percent = (video.currentTime / video.duration * 100).toFixed(2);
						var currentTime = video.currentTime;
						this.marker.css('left', percent + '%');
						this.played.css('width', percent + '%');
						this.current.text = secondsToTime(currentTime);
					}
				}, {
					key: '_initWatchBuffer',
					value: function _initWatchBuffer() {
						var _this18 = this;

						clearInterval(this.watchBufferInterval);
						var updateProgressBar = function updateProgressBar() {
							var END = 1;
							var START = 0;
							var result = $('');
							video.loaded.forEach(function (item) {
								var domItem = $('<div />').addClass('time-buffered');
								domItem.css({
									'left': item[START] * 100 + '%',
									'width': (item[END] - item[START]) * 100 + '%'
								});
								result = result.add(domItem);
							});
							_this18.buffered.html(result);

							if (video.loaded[0] && 1 - video.loaded[0][END] <= 0.05) {
								clearInterval(_this18.watchBufferInterval);
							}
						};
						this.watchBufferInterval = setInterval(updateProgressBar, 500);
					}
				}]);

				return TimelineControl;
			}(Control);

			var VolumeControl = function (_Control9) {
				_inherits(VolumeControl, _Control9);

				function VolumeControl() {
					_classCallCheck(this, VolumeControl);

					var _this19 = _possibleConstructorReturn(this, Object.getPrototypeOf(VolumeControl).call(this, 'volume-control', 'volume-down'));

					var _self = _this19;

					_this19.marker = $('<div/>').addClass('volume-marker');

					_this19.active = $('<div/>').addClass('volume-active');

					_this19.line = $('<div/>').addClass('volume-line').append(_this19.active).append(_this19.marker).on('click', function (e) {
						if (_this19.drag) return;
						var p = _this19.getPosition(e.pageY);
						if (p >= 0 && p <= 1) {
							video.volume = 1 - p;
						}
					});

					_this19.element.addClass('control-container').append($('<div />').addClass('control-inner volume-slider').append(_this19.line));

					_this19.drag = false;

					_this19.marker.on('mousedown', function (e) {
						if (e.which != 1) return;
						_this19.drag = true;
					});

					$(document).on({
						'mousemove': function mousemove(e) {
							if (!_this19.drag) return;
							var p = _this19.getPosition(e.pageY);
							if (p >= 0 && p <= 1) {
								video.volume = 1 - p;
							}
						},

						'mouseup': function mouseup(e) {
							_this19.drag = false;
						}
					});
					return _this19;
				}

				_createClass(VolumeControl, [{
					key: 'toggleMuted',
					value: function toggleMuted() {
						if (video.muted == true) {
							this.value = Cookie.get('volume', options.volume.default);
						} else this.value = 0;
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
						if (value < options.volume.mutelimit) {
							this.icon.iconName = 'volume-off';
						} else {
							if (value < 0.5) this.icon.iconName = 'volume-down';else this.icon.iconName = 'volume-up';
						}

						var p = Math.round(value * 100).toString() + '%';
						this.active.css('height', p);
						this.marker.css('bottom', p);
					}
				}]);

				return VolumeControl;
			}(Control);

			var Cookie = function () {
				function Cookie() {
					_classCallCheck(this, Cookie);
				}

				_createClass(Cookie, null, [{
					key: 'get',
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
					value: function set(name, value) {
						var d = new Date();
						d.setDate(d.year + 1);
						document.cookie = 'leplayer_' + name + '=' + value + ';expires=' + d.toString();
					}
				}]);

				return Cookie;
			}();

			var UserAgent = function UserAgent() {
				_classCallCheck(this, UserAgent);
			};

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
						if (name == C_DIVIDER) return Control.create(name);else {
							this.items[name] = Control.create(name);
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
						this.totalTime = secondsToTime(video.duration);
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
							this.items.rate.set(value);
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
						if (this.has(C_TIMELINE)) this.items.timeline.total.text = value;
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
						Cookie.set('rate', value);
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
						Cookie.set('volume', value);
					}
				}]);

				return Controls;
			}();

			var Icon = function () {
				function Icon(iconName) {
					_classCallCheck(this, Icon);

					this._useTag = document.createElementNS('http://www.w3.org/2000/svg', 'use');
					this._svgTag = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

					this.iconName = this._iconName = iconName;
					this._svgTag.appendChild(this._useTag);
					this.element = $('<div />').addClass('leplayer-icon').append($(this._svgTag));
				}

				_createClass(Icon, [{
					key: 'iconName',
					set: function set(iconName) {
						var _useTag, _useTag2;

						var attrNS = ['http://www.w3.org/1999/xlink', 'href'];
						(_useTag = this._useTag).removeAttributeNS.apply(_useTag, attrNS.concat([options.svgPath + '#leplayer-icon-' + this.iconName]));
						(_useTag2 = this._useTag).setAttributeNS.apply(_useTag2, attrNS.concat([options.svgPath + '#leplayer-icon-' + iconName]));
						this._iconName = iconName;
					},
					get: function get() {
						return this._iconName;
					}
				}]);

				return Icon;
			}();

			var sources = [];
			var subtitles = [];
			var volume = options.volume.default;
			var video = null;
			var controls = new Controls();

			/**
	   * DOM container to hold video and all other stuff.
	   * @type object
	   */
			var container = null;
			var overlay = null;

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
				video = new Video(element);

				/** TODO: Use promise to async run this */
				initDom();
				initControls();
				video.init().done(function () {
					video.trigger('inited');
				});
				initHotKeys();

				// video.trigger(`inited`);
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

			var initDom = function initDom() {
				var videoContainer = void 0;
				var icon = new Icon('play');
				overlay = $('<div />').addClass('play-overlay').append(icon.element);
				videoContainer = $('<div />').addClass('leplayer-video').append(overlay);
				container = $('<div />').addClass('leplayer-container').append(videoContainer).attr('tabindex', 0).css('width', element.width() + 'px');

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

			init();

			return this;
		};

		window.$.fn.lePlayer = function (options) {
			return this.each(function () {
				return new Player($(this), options);
			});
		};
	})(jQuery);

/***/ }
/******/ ]);