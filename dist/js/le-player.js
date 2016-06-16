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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGUtcGxheWVyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIDk0NTAzMzEwNjRmYTUwMjE1MmVkIiwid2VicGFjazovLy9zb3VyY2UvanMvbGUtcGxheWVyLmVzNi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDk0NTAzMzEwNjRmYTUwMjE1MmVkXG4gKiovIiwiKGZ1bmN0aW9uICgkKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHRsZXQgUGxheWVyID0gZnVuY3Rpb24gKGVsZW1lbnQsIG9wdHMpIHtcblx0XHRjb25zdCBDX0JBQ0tXQVJEID0gJ2JhY2t3YXJkJztcblx0XHRjb25zdCBDX0RJVklERVIgPSAnZGl2aWRlcic7XG5cdFx0Y29uc3QgQ19ET1dOTE9BRCA9ICdkb3dubG9hZCc7XG5cdFx0Y29uc3QgQ19GT1JXQVJEID0gJ2ZvcndhcmQnO1xuXHRcdGNvbnN0IENfRlVMTFNDUkVFTiA9ICdmdWxsc2NyZWVuJztcblx0XHRjb25zdCBDX1BMQVkgPSAncGxheSc7XG5cdFx0Y29uc3QgQ19SQVRFID0gJ3JhdGUnO1xuXHRcdGNvbnN0IENfU09VUkNFID0gJ3NvdXJjZSc7XG5cdFx0Y29uc3QgQ19TVUJUSVRMRSA9ICdzdWJ0aXRsZSc7XG5cdFx0Y29uc3QgQ19USU1FTElORSA9ICd0aW1lbGluZSc7XG5cdFx0Y29uc3QgQ19WT0xVTUUgPSAndm9sdW1lJztcblxuXHRcdHZhciBvcHRpb25zID0gJC5leHRlbmQoe30sIHtcblx0XHRcdGF1dG9wbGF5IDogZmFsc2UsXG5cdFx0XHRoZWlnaHQgOiAnYXV0bycsXG5cdFx0XHRsb29wIDogZmFsc2UsXG5cdFx0XHRtdXRlZCA6IGZhbHNlLFxuXHRcdFx0cHJlbG9hZCA6ICdtZXRhZGF0YScsXG5cdFx0XHRwb3N0ZXIgOiBudWxsLFxuXHRcdFx0c3ZnUGF0aCA6ICcuLi9kaXN0L3N2Zy9zdmctZGVmcy5zdmcnLFxuXHRcdFx0d2lkdGggOiAnYXV0bycsXG5cdFx0XHRmdWxsc2NyZWVuIDoge1xuXHRcdFx0XHRoaWRlVGltZWxpbmVUaW1lIDogNzAwMFxuXHRcdFx0fSxcblx0XHRcdHJhdGUgOiB7XG5cdFx0XHRcdHN0ZXAgOiAwLjI1LFxuXHRcdFx0XHRtaW4gOiAwLjUsXG5cdFx0XHRcdG1heCA6IDQuMCxcblx0XHRcdFx0J2RlZmF1bHQnIDogMVxuXHRcdFx0fSxcblx0XHRcdHBsYXliYWNrIDoge1xuXHRcdFx0XHRzdGVwIDoge1xuXHRcdFx0XHRcdHNob3J0IDogNSxcblx0XHRcdFx0XHRtZWRpdW0gOiAzMCxcblx0XHRcdFx0XHRsb25nIDogNjBcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdGNvbnRyb2xzIDoge1xuXHRcdFx0XHRjb21tb24gOiBbXG5cdFx0XHRcdFx0WyAncGxheScsICd2b2x1bWUnLCAnZGl2aWRlcicsICd0aW1lbGluZScsICdkaXZpZGVyJywgJ2Z1bGxzY3JlZW4nIF0sXG5cdFx0XHRcdFx0WyAncmF0ZScsICdkaXZpZGVyJywgJ2JhY2t3YXJkJywgJ2RpdmlkZXInLCAnc291cmNlJywgJ2RpdmlkZXInLCAnc3VidGl0bGUnLCAnZGl2aWRlcicsICdkb3dubG9hZCcgXVxuXHRcdFx0XHRdLFxuXHRcdFx0XHRmdWxsc2NyZWVuIDogW1xuXHRcdFx0XHRcdFsgJ3BsYXknLCAndm9sdW1lJywgJ2RpdmlkZXInLCAndGltZWxpbmUnLCAnZGl2aWRlcicsICdyYXRlJywgJ2RpdmlkZXInLCAnYmFja3dhcmQnLCAnZGl2aWRlcicsICdzb3VyY2UnLCAnZGl2aWRlcicsICdzdWJ0aXRsZScsICdkaXZpZGVyJywgJ2Rvd25sb2FkJywgJ2RpdmlkZXInLCAnZnVsbHNjcmVlbicgXVxuXHRcdFx0XHRdXG5cdFx0XHR9LFxuXHRcdFx0dm9sdW1lIDoge1xuXHRcdFx0XHRkZWZhdWx0IDogMC40LFxuXHRcdFx0XHRtdXRlbGltaXQgOiAwLjA1LFxuXHRcdFx0XHRzdGVwIDogMC4xXG5cdFx0XHR9LFxuXHRcdFx0a2V5QmluZGluZyA6IHtcblx0XHRcdFx0cGxheSA6IHtcblx0XHRcdFx0XHRrZXkgOiAzMixcblx0XHRcdFx0XHRmbiA6ICh2aWRlbykgPT4ge1xuXHRcdFx0XHRcdFx0dmlkZW8udG9nZ2xlUGxheSgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0YmFja3dhcmRNZWRpdW0gOiB7XG5cdFx0XHRcdFx0a2V5IDogMzcsXG5cdFx0XHRcdFx0Zm4gOiAodmlkZW8pID0+IHtcblx0XHRcdFx0XHRcdHZpZGVvLmN1cnJlbnRUaW1lIC09IG9wdGlvbnMucGxheWJhY2suc3RlcC5tZWRpdW07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRmb3J3YXJkTWVkaXVtIDoge1xuXHRcdFx0XHRcdGtleSA6IDM5LFxuXHRcdFx0XHRcdGZuIDogKHZpZGVvKSA9PiB7XG5cdFx0XHRcdFx0XHR2aWRlby5jdXJyZW50VGltZSArPSBvcHRpb25zLnBsYXliYWNrLnN0ZXAubWVkaXVtO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0YmFja3dhcmRTaG9ydCA6IHtcblx0XHRcdFx0XHRzaGlmdEtleSA6IHRydWUsXG5cdFx0XHRcdFx0a2V5IDogMzcsXG5cdFx0XHRcdFx0Zm4gOiAodmlkZW8pID0+IHtcblx0XHRcdFx0XHRcdHZpZGVvLmN1cnJlbnRUaW1lIC09IG9wdGlvbnMucGxheWJhY2suc3RlcC5zaG9ydDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGZvcndhcmRTaG9ydCA6IHtcblx0XHRcdFx0XHRzaGlmdEtleSA6IHRydWUsXG5cdFx0XHRcdFx0a2V5IDogMzksXG5cdFx0XHRcdFx0Zm4gOiAodmlkZW8pID0+IHtcblx0XHRcdFx0XHRcdHZpZGVvLmN1cnJlbnRUaW1lICs9IG9wdGlvbnMucGxheWJhY2suc3RlcC5zaG9ydDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0dm9sdW1lVXAgOiB7XG5cdFx0XHRcdFx0a2V5IDogMzgsXG5cdFx0XHRcdFx0Zm4gOiAodmlkZW8pID0+IHtcblx0XHRcdFx0XHRcdHZpZGVvLnZvbHVtZSArPSBvcHRpb25zLnZvbHVtZS5zdGVwO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblxuXHRcdFx0XHR2b2x1bWVEb3duIDoge1xuXHRcdFx0XHRcdGtleSA6IDQwLFxuXHRcdFx0XHRcdGZuIDogKHZpZGVvKSA9PiB7XG5cdFx0XHRcdFx0XHR2aWRlby52b2x1bWUgLT0gb3B0aW9ucy52b2x1bWUuc3RlcDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cdFx0XHR9XG5cdFx0fSwgb3B0cyk7XG5cblx0XHQvKipcblx0XHQgKiBUaGlzIGNsYXNzIG1hbmFnZXMgRnVsbFNjcmVlbiBBUEkuXG5cdFx0ICogQFRPRE86IGFkZCBmdWxsc2NyZWVuZXJyb3IgaGFuZGxlci5cblx0XHQgKi9cblx0XHRjbGFzcyBGdWxsc2NyZWVuIHtcblxuXHRcdFx0Y29uc3RydWN0b3IgKCkge1xuXHRcdFx0XHR0aGlzLl9jb2xsZWN0aW9uID0gY29udHJvbHMuZnVsbHNjcmVlbjtcblx0XHRcdFx0dGhpcy5faGlkZVRpbWVvdXQgPSBudWxsO1xuXHRcdFx0XHR0aGlzLmZ1bGxzY3JlZW5FbmFibGVkID0gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdC8qKlxuXHRcdFx0ICogQHJldHVybnMge2Jvb2xlYW59IFdoZXRoZXIgYnJvd3NlciBzdXBwb3J0cyBmdWxsc2NyZWVuIG1vZGUuXG5cdFx0XHQgKi9cblx0XHRcdGVuYWJsZWQgKCkge1xuXHRcdFx0XHRyZXR1cm4gISEoZG9jdW1lbnQuZnVsbHNjcmVlbkVuYWJsZWRcblx0XHRcdFx0XHR8fCBkb2N1bWVudC5tb3pGdWxsU2NyZWVuRW5hYmxlZFxuXHRcdFx0XHRcdHx8IGRvY3VtZW50Lm1zRnVsbHNjcmVlbkVuYWJsZWRcblx0XHRcdFx0XHR8fCBkb2N1bWVudC53ZWJraXRTdXBwb3J0c0Z1bGxzY3JlZW5cblx0XHRcdFx0XHR8fCBkb2N1bWVudC53ZWJraXRGdWxsc2NyZWVuRW5hYmxlZFxuXHRcdFx0XHRcdHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJykud2Via2l0UmVxdWVzdEZ1bGxTY3JlZW4pO1xuXHRcdFx0fVxuXG5cdFx0XHRpbml0ICgpIHtcblx0XHRcdFx0aWYgKCF0aGlzLmVuYWJsZWQoKSkge1xuXHRcdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gRnVsbHNjcmVlbiBjaGFuZ2UgaGFuZGxlcnMuXG5cdFx0XHRcdCQoZG9jdW1lbnQpLm9uKHtcblxuXHRcdFx0XHRcdCdmdWxsc2NyZWVuY2hhbmdlJyA6IChlKSA9PiB7XG5cdFx0XHRcdFx0XHR0aGlzLnRvZ2dsZUVsZW1lbnRzKCEhKGRvY3VtZW50LmZ1bGxTY3JlZW4gfHwgZG9jdW1lbnQuZnVsbHNjcmVlbkVsZW1lbnQpKTtcblx0XHRcdFx0XHR9LFxuXG5cdFx0XHRcdFx0J3dlYmtpdGZ1bGxzY3JlZW5jaGFuZ2UnIDogKGUpID0+IHtcblx0XHRcdFx0XHRcdHRoaXMudG9nZ2xlRWxlbWVudHMoISFkb2N1bWVudC53ZWJraXRJc0Z1bGxTY3JlZW4pO1xuXHRcdFx0XHRcdH0sXG5cblx0XHRcdFx0XHQnbW96ZnVsbHNjcmVlbmNoYW5nZScgOiAoZSkgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy50b2dnbGVFbGVtZW50cyghIWRvY3VtZW50Lm1vekZ1bGxTY3JlZW4pO1xuXHRcdFx0XHRcdH0sXG5cblx0XHRcdFx0XHQnbXNmdWxsc2NyZWVuY2hhbmdlJyA6IChlKSA9PiB7XG5cdFx0XHRcdFx0XHR0aGlzLnRvZ2dsZUVsZW1lbnRzKCEhZG9jdW1lbnQubXNGdWxsc2NyZWVuRWxlbWVudCk7XG5cdFx0XHRcdFx0fSxcblxuXHRcdFx0XHRcdCd3ZWJraXRiZWdpbmZ1bGxzY3JlZW4nIDogKGUpID0+IHtcblx0XHRcdFx0XHRcdHRoaXMudG9nZ2xlRWxlbWVudHModHJ1ZSlcblx0XHRcdFx0XHR9LFxuXG5cdFx0XHRcdFx0J3dlYmtpdGVuZGZ1bGxzY3JlZW4nIDogKGUpID0+IHtcblx0XHRcdFx0XHRcdHRoaXMudG9nZ2xlRWxlbWVudHMoZmFsc2UpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblxuXG5cdFx0XHR9XG5cblx0XHRcdC8qKlxuXHRcdFx0ICogQHJldHVybnMge2Jvb2xlYW59IFdoZXRoZXIgYnJvd3NlciBpcyBpbiBmdWxsc2NyZWVuIG1vZGUuXG5cdFx0XHQgKi9cblx0XHRcdGlzICgpIHtcblx0XHRcdFx0cmV0dXJuICEhKGRvY3VtZW50LmZ1bGxTY3JlZW5cblx0XHRcdFx0XHR8fCBkb2N1bWVudC53ZWJraXRJc0Z1bGxTY3JlZW5cblx0XHRcdFx0XHR8fCBkb2N1bWVudC5tb3pGdWxsU2NyZWVuXG5cdFx0XHRcdFx0fHwgZG9jdW1lbnQubXNGdWxsc2NyZWVuRWxlbWVudFxuXHRcdFx0XHRcdHx8IGRvY3VtZW50LmZ1bGxzY3JlZW5FbGVtZW50XG5cdFx0XHRcdFx0fHwgdGhpcy5mdWxsc2NyZWVuRW5hYmxlZCk7XG5cdFx0XHR9XG5cblx0XHRcdHNob3dFbGVtZW50cyAoKSB7XG5cdFx0XHRcdGNvbnRhaW5lci5hZGRDbGFzcygnZnVsbHNjcmVlbicpO1xuXHRcdFx0XHRjb250cm9scy5mdWxsc2NyZWVuLnNob3coKTtcblx0XHRcdFx0Y29udHJvbHMuY29tbW9uLmhpZGUoKTtcblx0XHRcdFx0Y29udHJvbHMubWluaS5oaWRlKCk7XG5cblx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMuX2hpZGVUaW1lb3V0KTtcblx0XHRcdFx0dGhpcy5faGlkZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHR0aGlzLl9jb2xsZWN0aW9uLmVsZW1lbnQuaGlkZSgpO1xuXHRcdFx0XHR9LCBvcHRpb25zLmZ1bGxzY3JlZW4uaGlkZVRpbWVsaW5lVGltZSk7XG5cblx0XHRcdFx0JChjb250YWluZXIpLm9uKHtcblx0XHRcdFx0XHQnbW91c2Vtb3ZlLmxlcGxheWVyLmZ1bGxzY3JlZW4taGlkZS10aW1lbGluZScgOiAoZSkgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKCEkKGUuY3VycmVudFRhcmdldCkuaGFzQ2xhc3MoJ2Z1bGxzY3JlZW4nKSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMuX2hpZGVUaW1lb3V0KTtcblx0XHRcdFx0XHRcdHRoaXMuX2NvbGxlY3Rpb24uZWxlbWVudC5zaG93KCk7XG5cdFx0XHRcdFx0XHR0aGlzLl9oaWRlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHR0aGlzLl9jb2xsZWN0aW9uLmVsZW1lbnQuaGlkZSgpO1xuXHRcdFx0XHRcdFx0fSwgb3B0aW9ucy5mdWxsc2NyZWVuLmhpZGVUaW1lbGluZVRpbWUpO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0J21vdXNlbGVhdmUubGVwbGF5ZXIuZnVsbHNjcmVlbi1oaWRlLXRpbWVsaW5lJyA6IChlKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoISQoZS5jdXJyZW50VGFyZ2V0KS5oYXNDbGFzcygnZnVsbHNjcmVlbicpKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0XHRjbGVhclRpbWVvdXQodGhpcy5faGlkZVRpbWVvdXQpO1xuXHRcdFx0XHRcdFx0dGhpcy5fY29sbGVjdGlvbi5lbGVtZW50LmhpZGUoKTtcblxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblx0XHRcdH1cblxuXHRcdFx0aGlkZUVsZW1lbnRzICgpIHtcblx0XHRcdFx0Y29udGFpbmVyLnJlbW92ZUNsYXNzKCdmdWxsc2NyZWVuJyk7XG5cdFx0XHRcdGNvbnRyb2xzLmZ1bGxzY3JlZW4uaGlkZSgpO1xuXHRcdFx0XHRjb250cm9scy5jb21tb24uc2hvdygpO1xuXHRcdFx0XHRjb250cm9scy5taW5pLmhpZGUoKTtcblx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMuX2hpZGVUaW1lb3V0KTtcblx0XHRcdFx0JChjb250YWluZXIpLm9mZignLmxlcGxheWVyLmZ1bGxzY3JlZW4taGlkZS10aW1lbGluZScpO1xuXHRcdFx0fVxuXG5cdFx0XHR0b2dnbGUgKCkge1xuXHRcdFx0XHRsZXQgY29udGFpbmVyRWwgPSBjb250YWluZXJbIDAgXTtcblx0XHRcdFx0aWYgKHRoaXMuaXMoKSkge1xuXHRcdFx0XHRcdGlmIChkb2N1bWVudC5leGl0RnVsbHNjcmVlbikgICAgICAgICAgICAgICAgZG9jdW1lbnQuZXhpdEZ1bGxzY3JlZW4oKTtcblx0XHRcdFx0XHRlbHNlIGlmIChkb2N1bWVudC5tb3pDYW5jZWxGdWxsU2NyZWVuKSAgICAgIGRvY3VtZW50Lm1vekNhbmNlbEZ1bGxTY3JlZW4oKTtcblx0XHRcdFx0XHRlbHNlIGlmIChkb2N1bWVudC53ZWJraXRDYW5jZWxGdWxsU2NyZWVuKSAgIGRvY3VtZW50LndlYmtpdENhbmNlbEZ1bGxTY3JlZW4oKTtcblx0XHRcdFx0XHRlbHNlIGlmIChkb2N1bWVudC5tc0V4aXRGdWxsc2NyZWVuKSAgICAgICAgIGRvY3VtZW50Lm1zRXhpdEZ1bGxzY3JlZW4oKTtcblx0XHRcdFx0XHRlbHNlIGlmIChkb2N1bWVudC53ZWJraXRFeGl0RnVsbHNjcmVlbikgICAgIGRvY3VtZW50LndlYmtpdEV4aXRGdWxsc2NyZWVuKCk7XG5cdFx0XHRcdFx0dGhpcy5oaWRlRWxlbWVudHMoKTsgLy8gQFRPRE86IG1ha2UgdGhpcyBvbmx5IGlmIGZ1bGxzY3JlZW4gZmlyZWQuXG5cdFx0XHRcdFx0dGhpcy5mdWxsc2NyZWVuRW5hYmxlZCA9IGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdGlmIChjb250YWluZXJFbC5yZXF1ZXN0RnVsbFNjcmVlbikgICAgICAgICAgICBjb250YWluZXJFbC5yZXF1ZXN0RnVsbFNjcmVlbigpO1xuXHRcdFx0XHRcdGVsc2UgaWYgKGNvbnRhaW5lckVsLndlYmtpdFJlcXVlc3RGdWxsU2NyZWVuKSBjb250YWluZXJFbC53ZWJraXRSZXF1ZXN0RnVsbFNjcmVlbigpO1xuXHRcdFx0XHRcdGVsc2UgaWYgKGNvbnRhaW5lckVsLm1velJlcXVlc3RGdWxsU2NyZWVuKSAgICBjb250YWluZXJFbC5tb3pSZXF1ZXN0RnVsbFNjcmVlbigpO1xuXHRcdFx0XHRcdGVsc2UgaWYgKGNvbnRhaW5lckVsLm1zRXhpdEZ1bGxzY3JlZW4pICAgICAgICBjb250YWluZXJFbC5tc1JlcXVlc3RGdWxsc2NyZWVuKCk7XG5cdFx0XHRcdFx0dGhpcy5zaG93RWxlbWVudHMoKTsgLy8gQFRPRE86IG1ha2UgdGhpcyBvbmx5IGlmIGZ1bGxzY3JlZW4gZmlyZWQuXG5cdFx0XHRcdFx0dGhpcy5mdWxsc2NyZUVuYWJsZWQgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8qKlxuXHRcdFx0ICogVXBkYXRlIERPTSBzdHJ1Y3R1cmUgYWNjb3JkaW5nIHRvIGN1cnJlbnQgc3RhdGUuXG5cdFx0XHQgKi9cblx0XHRcdHRvZ2dsZUVsZW1lbnRzIChzaG93KSB7XG5cdFx0XHRcdGlmICghIXNob3cpIHtcblx0XHRcdFx0XHR0aGlzLnNob3dFbGVtZW50cygpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuaGlkZUVsZW1lbnRzKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRjbGFzcyBWaWRlbyB7XG5cdFx0XHRjb25zdHJ1Y3RvciAoY3R4KSB7XG5cdFx0XHRcdHRoaXMuX2N0eCA9IGN0eDtcblx0XHRcdFx0dGhpcy5fdmlkZW8gPSBjdHhbIDAgXTtcblx0XHRcdFx0dGhpcy5mdWxsc2NyZWVuID0gbmV3IEZ1bGxzY3JlZW4oKTtcblx0XHRcdFx0dGhpcy5zdWJ0aXRsZXMgPSBbXTtcblx0XHRcdFx0dGhpcy5idWZmZXJSYW5nZXMgPSBbXTtcblx0XHRcdFx0dGhpcy5wbGF5YmFja1JhdGUgPSB0aGlzLl92aWRlby5wbGF5YmFja1JhdGU7XG5cdFx0XHR9XG5cblx0XHRcdGdldCBjdXJyZW50VGltZSAoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLl92aWRlby5jdXJyZW50VGltZTtcblx0XHRcdH1cblxuXHRcdFx0c2V0IGN1cnJlbnRUaW1lICh2YWx1ZSkge1xuXHRcdFx0XHRpZiAodmFsdWUgPiB0aGlzLmR1cmF0aW9uKSB7XG5cdFx0XHRcdFx0dGhpcy5fdmlkZW8uY3VycmVudFRpbWUgPSB0aGlzLmR1cmF0aW9uXG5cdFx0XHRcdH0gZWxzZSBpZiAodmFsdWUgPCAwICkge1xuXHRcdFx0XHRcdHRoaXMuX3ZpZGVvLmN1cnJlbnRUaW1lID0gMFxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuX3ZpZGVvLmN1cnJlbnRUaW1lID0gdmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Z2V0IGR1cmF0aW9uICgpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuX3ZpZGVvLmR1cmF0aW9uO1xuXHRcdFx0fVxuXG5cdFx0XHRnZXQgaGVpZ2h0ICgpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuX3ZpZGVvLmNsaWVudEhlaWdodDtcblx0XHRcdH1cblxuXHRcdFx0Z2V0IHJhdGUgKCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5fdmlkZW8ucGxheWJhY2tSYXRlO1xuXHRcdFx0fVxuXG5cdFx0XHRnZXQgd2lkdGggKCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5fdmlkZW8uY2xpZW50V2lkdGg7XG5cdFx0XHR9XG5cblx0XHRcdHNldCByYXRlICh2YWx1ZSkge1xuXHRcdFx0XHRpZiAoIHZhbHVlIDw9IG9wdGlvbnMucmF0ZS5tYXggJiYgdmFsdWUgPj0gb3B0aW9ucy5yYXRlLm1pbiApIHtcblx0XHRcdFx0XHR0aGlzLl92aWRlby5wbGF5YmFja1JhdGUgPSB2YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHQvKiogVE9ETzogQ2hhbmNoZSBjb250cm9scy5yYXRlIGluIGV2ZW50IGhhbmRsZXIgKi9cblx0XHRcdFx0Y29udHJvbHMucmF0ZSA9IHRoaXMuX3ZpZGVvLnBsYXliYWNrUmF0ZTtcblx0XHRcdH1cblxuXHRcdFx0c2V0IHNvdXJjZSAodmFsdWUpIHtcblx0XHRcdFx0bGV0IHRpbWUgPSB0aGlzLl92aWRlby5jdXJyZW50VGltZTtcblx0XHRcdFx0bGV0IHJhdGUgPSB0aGlzLl92aWRlby5wbGF5YmFja1JhdGU7XG5cdFx0XHRcdGxldCBzdG9wID0gKCF0aGlzLl92aWRlby5wbGF5ZWQgfHwgdGhpcy5fdmlkZW8ucGF1c2VkKTtcblx0XHRcdFx0dGhpcy5fY3R4LmF0dHIoJ3NyYycsIHZhbHVlKTtcblx0XHRcdFx0dGhpcy5fdmlkZW8gPSB0aGlzLl9jdHhbIDAgXTtcblx0XHRcdFx0dGhpcy5fdmlkZW8ucGxheWJhY2tSYXRlID0gcmF0ZTtcblx0XHRcdFx0dGhpcy5fdmlkZW8uY3VycmVudFRpbWUgPSB0aW1lO1xuXHRcdFx0XHRpZiAoc3RvcClcblx0XHRcdFx0XHR0aGlzLnBhdXNlKCk7XG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHR0aGlzLnBsYXkoKTtcblxuXHRcdFx0XHQvLyBAVE9ETyBtYWtlIHRoaXMgcmlnaHQgd2F5XG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdGNvbnRyb2xzLnRvdGFsVGltZSA9IHNlY29uZHNUb1RpbWUodGhpcy5fdmlkZW8uZHVyYXRpb24pO1xuXHRcdFx0XHR9LCAxMDApO1xuXG5cdFx0XHR9XG5cblx0XHRcdHNldCB0cmFjayAodmFsdWUpIHtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl92aWRlby50ZXh0VHJhY2tzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aWYgKHRoaXMuX3ZpZGVvLnRleHRUcmFja3NbIGkgXS5sYW5ndWFnZSA9PSB2YWx1ZSlcblx0XHRcdFx0XHRcdHRoaXMuX3ZpZGVvLnRleHRUcmFja3NbIGkgXS5tb2RlID0gJ3Nob3dpbmcnO1xuXHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdHRoaXMuX3ZpZGVvLnRleHRUcmFja3NbIGkgXS5tb2RlID0gJ2hpZGRlbic7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Z2V0IHZvbHVtZSAoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLl92aWRlby52b2x1bWU7XG5cdFx0XHR9XG5cblx0XHRcdHNldCB2b2x1bWUgKHZhbHVlKSB7XG5cdFx0XHRcdGlmICh2YWx1ZSA+IDEpIHtcblx0XHRcdFx0XHR0aGlzLl92aWRlby52b2x1bWUgPSAxO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHZhbHVlIDwgb3B0aW9ucy52b2x1bWUubXV0ZWxpbWl0KSB7XG5cdFx0XHRcdFx0dGhpcy5fdmlkZW8udm9sdW1lID0gMDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLl92aWRlby52b2x1bWUgPSB2YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLl92aWRlby5tdXRlID0gKHZhbHVlIDwgb3B0aW9ucy52b2x1bWUubXV0ZWxpbWl0KTtcblx0XHRcdFx0Y29udHJvbHMudm9sdW1lID0gdGhpcy5fdmlkZW8udm9sdW1lO1xuXHRcdFx0fVxuXG5cdFx0XHRnZXQgYnVmZmVyZWQgKCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5fdmlkZW8uYnVmZmVyZWQ7XG5cdFx0XHR9XG5cblx0XHRcdGdldCBsb2FkZWQgKCkge1xuXHRcdFx0XHRsZXQgbG9hZGVkID0gW107XG5cdFx0XHRcdGxldCBtZWRpYSA9IHRoaXMuX3ZpZGVvO1xuXHRcdFx0XHQvKiogRkY0KywgQ2hyb21lICovXG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHRtZWRpYS5idWZmZXJlZCAmJlxuXHRcdFx0XHRcdG1lZGlhLmJ1ZmZlcmVkLmVuZCAmJlxuXHRcdFx0XHRcdG1lZGlhLmR1cmF0aW9uID4gMFxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG1lZGlhLmJ1ZmZlcmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0XHRsZXQgc3RhcnQgPSBtZWRpYS5idWZmZXJlZC5zdGFydChpKSAvIG1lZGlhLmR1cmF0aW9uO1xuXHRcdFx0XHRcdFx0bGV0IGVuZCA9IG1lZGlhLmJ1ZmZlcmVkLmVuZChpKSAvIG1lZGlhLmR1cmF0aW9uO1xuXHRcdFx0XHRcdFx0bGV0IHNlZ21lbnQgPSBbc3RhcnQsIGVuZF07XG5cdFx0XHRcdFx0XHRsb2FkZWQucHVzaChzZWdtZW50KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0LyoqIFNhZmFyaSA1LCBXZWJraXQgaGVhZCwgRkYzLjYsIENocm9tZSA2LCBJRSA3LzggKi9cblx0XHRcdFx0ZWxzZSBpZiAoXG5cdFx0XHRcdFx0bWVkaWEuYnl0ZXNUb3RhbCAhPSBudWxsICYmXG5cdFx0XHRcdFx0bWVkaWEuYnl0ZXNUb3RhbCA+IDAgJiZcblx0XHRcdFx0XHRtZWRpYS5idWZmZXJlZEJ5dGVzICE9IG51bGxcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0bG9hZGVkLnB1c2goWzAsIG1lZGlhLmJ1ZmZlcmVkQnl0ZXMgLyBtZWRpYS5ieXRlc1RvdGFsXSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIGxvYWRlZDtcblx0XHRcdH1cblxuXHRcdFx0aW5pdCAoKSB7XG5cdFx0XHRcdGxldCBkZmQgPSAkLkRlZmVycmVkKCk7XG5cdFx0XHRcdHRoaXMuX2luaXRTdWJ0aXRsZXMoKTtcblx0XHRcdFx0dGhpcy5faW5pdFZpZGVvKClcblx0XHRcdFx0XHQuZG9uZSgoKSA9PiB7XG5cdFx0XHRcdFx0XHR0aGlzLmZ1bGxzY3JlZW4uaW5pdCgpO1xuXHRcdFx0XHRcdFx0Y29udHJvbHMuaW5pdCgpO1xuXHRcdFx0XHRcdFx0dGhpcy5faW5pdFJhdGUoKTtcblx0XHRcdFx0XHRcdHRoaXMuX2luaXRWb2x1bWUoKTtcblx0XHRcdFx0XHRcdGRmZC5yZXNvbHZlKCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdHRoaXMuX2luaXRDdXN0b21FdmVudHMoKTtcblx0XHRcdFx0dGhpcy5faW5pdEh0bWxFdmVudHMoKTtcblxuXHRcdFx0XHRkZmQubm90aWZ5KCk7XG5cdFx0XHRcdHJldHVybiBkZmQucHJvbWlzZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHR0b2dnbGVQbGF5ICgpIHtcblx0XHRcdFx0LyoqIEluIHNhZmFyaSBpdCBkb2Vzbid0IHdvcmsgKi9cblx0XHRcdFx0Ly8gaWYgKHRoaXMuX3ZpZGVvLnJlYWR5U3RhdGUgPCAyKSB7XG5cdFx0XHRcdC8vIFx0b3ZlcmxheS5oaWRlKCk7XG5cdFx0XHRcdC8vIFx0X3Nob3dOb3RpZmljYXRpb24oJ0Vycm9yIScpO1xuXHRcdFx0XHQvLyBcdHJldHVybjtcblx0XHRcdFx0Ly8gfVxuXHRcdFx0XHRpZiAoIXRoaXMuX3ZpZGVvLnBsYXllZCB8fCB0aGlzLl92aWRlby5wYXVzZWQpIHtcblx0XHRcdFx0XHR0aGlzLnBsYXkoKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLnBhdXNlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0c2VlayAodGltZSkge1xuXHRcdFx0XHR0aGlzLl92aWRlby5jdXJyZW50VGltZSA9IHRpbWU7XG5cdFx0XHR9XG5cblx0XHRcdHBsYXkgKCkge1xuXHRcdFx0XHRvdmVybGF5LmhpZGUoKTtcblx0XHRcdFx0Y29udHJvbHMucGxheSgpO1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5fdmlkZW8ucGxheSgpO1xuXHRcdFx0fVxuXG5cdFx0XHRwYXVzZSAoKSB7XG5cdFx0XHRcdG92ZXJsYXkuc2hvdygpO1xuXHRcdFx0XHRjb250cm9scy5wYXVzZSgpO1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5fdmlkZW8ucGF1c2UoKTtcblx0XHRcdH1cblxuXHRcdFx0dHJpZ2dlciAoZXZlbnROYW1lLCAuLi5hcmdzKSB7XG5cdFx0XHRcdCQodGhpcy5fdmlkZW8pLnRyaWdnZXIuY2FsbCgkKHRoaXMuX3ZpZGVvKSwgYGxlcGxheWVyXyR7ZXZlbnROYW1lfWAsIC4uLmFyZ3MpO1xuXHRcdFx0fVxuXG5cdFx0XHRfaW5pdFJhdGUgKCkge1xuXHRcdFx0XHR0aGlzLnJhdGUgPSBDb29raWUuZ2V0KCdyYXRlJywgb3B0aW9ucy5yYXRlLmRlZmF1bHQpO1xuXHRcdFx0fVxuXG5cdFx0XHRfaW5pdFZvbHVtZSAoKSB7XG5cdFx0XHRcdHRoaXMudm9sdW1lID0gQ29va2llLmdldCgndm9sdW1lJywgb3B0aW9ucy52b2x1bWUuZGVmYXVsdCk7XG5cdFx0XHR9XG5cblx0XHRcdF9pbml0U3VidGl0bGVzICgpIHtcblx0XHRcdFx0bGV0IF9zZWxmID0gdGhpcztcblx0XHRcdFx0dGhpcy5fY3R4LmNoaWxkcmVuKCd0cmFja1traW5kPVwic3VidGl0bGVzXCJdJykuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0bGV0IGxhbmd1YWdlID0gJCh0aGlzKS5hdHRyKCdzcmNsYW5nJyk7XG5cdFx0XHRcdFx0bGV0IHRpdGxlID0gJCh0aGlzKS5hdHRyKCdsYWJlbCcpO1xuXHRcdFx0XHRcdGxldCBzcmMgPSAkKHRoaXMpLmF0dHIoJ3NyYycpO1xuXHRcdFx0XHRcdGlmICh0aXRsZS5sZW5ndGggPiAwICYmIHNyYy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0XHRfc2VsZi5zdWJ0aXRsZXMucHVzaCh7XG5cdFx0XHRcdFx0XHRcdHRpdGxlIDogdGl0bGUsXG5cdFx0XHRcdFx0XHRcdHNyYyA6IHNyYyxcblx0XHRcdFx0XHRcdFx0bGFuZ3VhZ2UgOiBsYW5ndWFnZVxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0X2luaXRWaWRlbyAoKSB7XG5cdFx0XHRcdGxldCBkZmQgPSAkLkRlZmVycmVkKCk7XG5cdFx0XHRcdGlmICh0aGlzLl92aWRlby5yZWFkeVN0YXRlID4gSFRNTE1lZGlhRWxlbWVudC5IQVZFX05PVEhJTkcpIHtcblx0XHRcdFx0XHRkZmQucmVzb2x2ZSgpXG5cdFx0XHRcdFx0dGhpcy5fb25Mb2FkZWRNZXRhRGF0YSgpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCQodGhpcy5fdmlkZW8pLm9uZSgnbG9hZGVkbWV0YWRhdGEnLCAoZSkgPT4ge1xuXHRcdFx0XHRcdFx0ZGZkLnJlc29sdmUoKVxuXHRcdFx0XHRcdFx0dGhpcy5fb25Mb2FkZWRNZXRhRGF0YSgpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGRmZC5ub3RpZnkoKTtcblx0XHRcdFx0cmV0dXJuIGRmZC5wcm9taXNlKClcblx0XHRcdH1cblxuXHRcdFx0X29uTG9hZGVkTWV0YURhdGEgKCkge1xuXHRcdFx0XHRsZXQgX3NlbGYgPSB0aGlzO1xuXG5cdFx0XHRcdGNvbnRhaW5lclxuXHRcdFx0XHRcdC5jc3MoJ3dpZHRoJywgJzEwMCUnKVxuXHRcdFx0XHRcdC5jc3MoJ21heC13aWR0aCcsIHRoaXMuX3ZpZGVvLmNsaWVudFdpZHRoICsgJ3B4Jyk7XG5cblx0XHRcdFx0Ly8gVGhpcyBpcyBnZW5lcmFsbHkgZm9yIEZpcmVmb3ggb25seVxuXHRcdFx0XHQvLyBiZWNhdXNlIGl0IHNvbWVob3cgcmVzZXRzIHRyYWNrIGxpc3Rcblx0XHRcdFx0Ly8gZm9yIHZpZGVvIGVsZW1lbnQgYWZ0ZXIgRE9NIG1hbmlwdWxhdGlvbi5cblxuXHRcdFx0XHRpZiAodGhpcy5fdmlkZW8udGV4dFRyYWNrcy5sZW5ndGggPT0gMCAmJiB0aGlzLnN1YnRpdGxlcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0dGhpcy5fY3R4LmNoaWxkcmVuKCd0cmFja1traW5kPVwic3VidGl0bGVzXCJdJykucmVtb3ZlKCk7XG5cdFx0XHRcdFx0Zm9yICh2YXIgaSBpbiB0aGlzLnN1YnRpdGxlcykge1xuXHRcdFx0XHRcdFx0aWYgKHRoaXMuc3VidGl0bGVzLmhhc093blByb3BlcnR5KGkpKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMuX2N0eFxuXHRcdFx0XHRcdFx0XHRcdC5hcHBlbmQoJCgnPHRyYWNrLz4nKVxuXHRcdFx0XHRcdFx0XHRcdFx0LmF0dHIoJ2xhYmVsJywgdGhpcy5zdWJ0aXRsZXNbIGkgXS50aXRsZSlcblx0XHRcdFx0XHRcdFx0XHRcdC5hdHRyKCdzcmMnLCB0aGlzLnN1YnRpdGxlc1sgaSBdLnNyYylcblx0XHRcdFx0XHRcdFx0XHRcdC5hdHRyKCdzcmNsYW5nJywgdGhpcy5zdWJ0aXRsZXNbIGkgXS5sYW5ndWFnZSlcblx0XHRcdFx0XHRcdFx0XHRcdC5hdHRyKCdpZCcsIHRoaXMuc3VidGl0bGVzWyBpIF0ubGFuZ3VhZ2UpXG5cdFx0XHRcdFx0XHRcdFx0XHQuYXR0cigna2luZCcsICdzdWJ0aXRsZXMnKSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIHRoaXMudHJpZ2dlcignbG9hZGVkbWV0YWRhdGEnKVxuXHRcdFx0fVxuXG5cdFx0XHRfaW5pdEh0bWxFdmVudHMgKCkge1xuXHRcdFx0XHRsZXQgbWVkaWFFbGVtZW50ID0gJCh0aGlzLl92aWRlbyk7XG5cdFx0XHRcdGxldCB0aW1lcklkID0gbnVsbDtcblxuXHRcdFx0XHRtZWRpYUVsZW1lbnQub24oe1xuXG5cdFx0XHRcdFx0J3RpbWV1cGRhdGUnIDogKGUpID0+IHtcblx0XHRcdFx0XHRcdGNvbnRyb2xzLm1vdmVUaW1lTWFya2VyKCk7XG5cdFx0XHRcdFx0fSxcblxuXHRcdFx0XHRcdCdlbmRlZCcgOiAoKSA9PiB7XG5cdFx0XHRcdFx0XHR0aGlzLnBhdXNlKCk7XG5cdFx0XHRcdFx0XHR0aGlzLnRyaWdnZXIoJ2VuZGVkJyk7XG5cdFx0XHRcdFx0fSxcblxuXHRcdFx0XHRcdCdkYmxjbGljaycgOiAoKSA9PiB7XG5cdFx0XHRcdFx0XHRjbGVhclRpbWVvdXQodGltZXJJZCk7XG5cdFx0XHRcdFx0XHR0aGlzLmZ1bGxzY3JlZW4udG9nZ2xlKCk7XG5cdFx0XHRcdFx0fSxcblxuXHRcdFx0XHRcdCdjbGljaycgOiAoKSA9PiB7XG5cdFx0XHRcdFx0XHRjbGVhclRpbWVvdXQodGltZXJJZCk7XG5cdFx0XHRcdFx0XHR0aW1lcklkID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGNvbnRhaW5lci5mb2N1cygpXG5cdFx0XHRcdFx0XHRcdHRoaXMudG9nZ2xlUGxheSgpO1xuXHRcdFx0XHRcdFx0fSwgMzAwKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHRcdF9pbml0Q3VzdG9tRXZlbnRzICgpIHtcblx0XHRcdFx0bGV0IG1lZGlhRWxlbWVudCA9ICQodGhpcy5fdmlkZW8pO1xuXG5cdFx0XHRcdG1lZGlhRWxlbWVudC5vbih7XG5cdFx0XHRcdFx0J2luaXRlZC5sZXBsYXllcicgOiAoZSkgPT4ge1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHR9XG5cblx0XHRjbGFzcyBDb250cm9sIHtcblx0XHRcdGNvbnN0cnVjdG9yIChjc3NDbGFzcywgaWNvbkNsYXNzKSB7XG5cdFx0XHRcdGlmIChpY29uQ2xhc3MpIHtcblx0XHRcdFx0XHR0aGlzLmljb24gPSBuZXcgSWNvbihpY29uQ2xhc3MpO1xuXHRcdFx0XHRcdHRoaXMuaWNvbi5lbGVtZW50Lm9uKHtcblx0XHRcdFx0XHRcdCdjbGljaycgOiB0aGlzLl9vbkljb25DbGljay5iaW5kKHRoaXMpLFxuXHRcdFx0XHRcdFx0J2xlcGxheWVyX2ljb25fY2xpY2snIDogdGhpcy5vbkljb25DbGljay5iaW5kKHRoaXMpXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmVsZW1lbnQgPSAkKCc8ZGl2IC8+Jylcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2NvbnRyb2wgJyArIGNzc0NsYXNzKVxuXHRcdFx0XHRcdC5hcHBlbmQodGhpcy5pY29uICYmIHRoaXMuaWNvbi5lbGVtZW50KVxuXHRcdFx0XHRcdC5vbih7XG5cdFx0XHRcdFx0XHQnY2xpY2snIDogdGhpcy5fb25DbGljay5iaW5kKHRoaXMpLFxuXHRcdFx0XHRcdFx0J2xlcGxheWVyX2NsaWNrJyA6IHRoaXMub25DbGljay5iaW5kKHRoaXMpXG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdH1cblxuXHRcdFx0c3RhdGljIGRpdmlkZXIgKCkge1xuXHRcdFx0XHRyZXR1cm4gJCgnPGRpdiAvPicpLmFkZENsYXNzKCdkaXZpZGVyJyk7XG5cdFx0XHR9XG5cblx0XHRcdHN0YXRpYyBjcmVhdGUgKG5hbWUpIHtcblx0XHRcdFx0c3dpdGNoIChuYW1lKSB7XG5cdFx0XHRcdFx0Y2FzZSBDX0JBQ0tXQVJEOlxuXHRcdFx0XHRcdFx0cmV0dXJuIG5ldyBCYWNrd2FyZENvbnRyb2woKTtcblxuXHRcdFx0XHRcdGNhc2UgQ19ESVZJREVSOlxuXHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMuZGl2aWRlcigpO1xuXG5cdFx0XHRcdFx0Y2FzZSBDX0RPV05MT0FEOlxuXHRcdFx0XHRcdFx0cmV0dXJuIG5ldyBEb3dubG9hZENvbnRyb2woKTtcblxuXHRcdFx0XHRcdGNhc2UgQ19GT1JXQVJEOlxuXHRcdFx0XHRcdFx0cmV0dXJuIG5ldyBGb3J3YXJkQ29udHJvbCgpO1xuXG5cdFx0XHRcdFx0Y2FzZSBDX0ZVTExTQ1JFRU46XG5cdFx0XHRcdFx0XHRyZXR1cm4gbmV3IEZ1bGxzY3JlZW5Db250cm9sKCk7XG5cblx0XHRcdFx0XHRjYXNlIENfUExBWTpcblx0XHRcdFx0XHRcdHJldHVybiBuZXcgUGxheUNvbnRyb2woKTtcblxuXHRcdFx0XHRcdGNhc2UgQ19SQVRFOlxuXHRcdFx0XHRcdFx0cmV0dXJuIG5ldyBSYXRlQ29udHJvbCgpO1xuXG5cdFx0XHRcdFx0Y2FzZSBDX1NPVVJDRTpcblx0XHRcdFx0XHRcdHJldHVybiBuZXcgU291cmNlQ29udHJvbCgpO1xuXG5cdFx0XHRcdFx0Y2FzZSBDX1NVQlRJVExFOlxuXHRcdFx0XHRcdFx0cmV0dXJuIG5ldyBTdWJ0aXRsZUNvbnRyb2woKTtcblxuXHRcdFx0XHRcdGNhc2UgQ19USU1FTElORTpcblx0XHRcdFx0XHRcdHJldHVybiBuZXcgVGltZWxpbmVDb250cm9sKCk7XG5cblx0XHRcdFx0XHRjYXNlIENfVk9MVU1FOlxuXHRcdFx0XHRcdFx0cmV0dXJuIG5ldyBWb2x1bWVDb250cm9sKCk7XG5cblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0ZGlzYWJsZSAoKSB7XG5cdFx0XHRcdHRoaXMuZGlzYWJsZWQgPSB0cnVlXG5cdFx0XHRcdHRoaXMuZWxlbWVudC5hZGRDbGFzcygnZGlzYWJsZWQnKTtcblx0XHRcdH1cblxuXHRcdFx0X29uQ2xpY2sgKGUpIHtcblx0XHRcdFx0aWYgKHRoaXMuZGlzYWJsZWQpIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5lbGVtZW50LnRyaWdnZXIoJ2xlcGxheWVyX2NsaWNrJyk7XG5cdFx0XHR9XG5cblx0XHRcdF9vbkljb25DbGljayAoZSkge1xuXHRcdFx0XHRpZiAodGhpcy5kaXNhYmxlZCkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmljb24uZWxlbWVudC50cmlnZ2VyKCdsZXBsYXllcl9pY29uX2NsaWNrJylcblx0XHRcdH1cblxuXHRcdFx0b25DbGljayAoZSkge1xuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHR9XG5cblx0XHRcdG9uSWNvbkNsaWNrIChlKSB7XG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdH1cblxuXHRcdH1cblxuXG5cdFx0Y2xhc3MgQ29udHJvbFRleHQge1xuXHRcdFx0Y29uc3RydWN0b3IgKGNsYXNzbmFtZSkge1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQgPSAkKCc8ZGl2IC8+JykuYWRkQ2xhc3MoJ2NvbnRyb2wtdGV4dCAnICsgY2xhc3NuYW1lKTtcblx0XHRcdH1cblxuXHRcdFx0c2V0IHRleHQgKHZhbHVlKSB7XG5cdFx0XHRcdHRoaXMuZWxlbWVudC5odG1sKHZhbHVlKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRjbGFzcyBDb250cm9sQ29udGFpbmVyIGV4dGVuZHMgQ29udHJvbCB7XG5cdFx0XHRjb25zdHJ1Y3RvciAobmFtZSwgaWNvbkNsYXNzKSB7XG5cdFx0XHRcdHN1cGVyKG5hbWUsIGljb25DbGFzcylcblx0XHRcdFx0dGhpcy5pY29uQ2xhc3MgPSBpY29uQ2xhc3M7XG5cdFx0XHRcdHRoaXMubGlzdEVsZW1lbnQgPSAkKCc8ZGl2Lz4nKS5hZGRDbGFzcygnY29udHJvbC1pbm5lcicpO1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoJ2NvbnRyb2wtY29udGFpbmVyJylcblx0XHRcdFx0XHQuYXBwZW5kKHRoaXMubGlzdEVsZW1lbnQpO1xuXHRcdFx0XHR0aGlzLl9pbmRleCA9IDA7XG5cdFx0XHRcdHRoaXMubGlzdCA9IFtdO1xuXHRcdFx0fVxuXG5cdFx0XHRnZXQgYWN0aXZlICgpIHtcblx0XHRcdFx0Zm9yIChsZXQgaSBpbiB0aGlzLmxpc3QpXG5cdFx0XHRcdFx0aWYgKHRoaXMubGlzdFsgaSBdLmhhc0NsYXNzKCdhY3RpdmUnKSlcblx0XHRcdFx0XHRcdHJldHVybiB0aGlzLmxpc3RbIGkgXTtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cblx0XHRcdHNldCBhY3RpdmUgKGluZGV4KSB7XG5cdFx0XHRcdGxldCBoYXNBY3RpdmUgPSBmYWxzZTtcblx0XHRcdFx0Zm9yIChsZXQgaSBpbiB0aGlzLmxpc3QpIHtcblx0XHRcdFx0XHRpZiAodGhpcy5saXN0WyBpIF0uZGF0YSgnaW5kZXgnKSA9PSBpbmRleCkge1xuXHRcdFx0XHRcdFx0dGhpcy5saXN0WyBpIF0uYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0XHRcdFx0dGhpcy5pY29uLmVsZW1lbnQuaHRtbCh0aGlzLmxpc3RbIGkgXS5odG1sKCkpO1xuXHRcdFx0XHRcdFx0aGFzQWN0aXZlID0gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0dGhpcy5saXN0WyBpIF0ucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghaGFzQWN0aXZlKVxuXHRcdFx0XHRcdHRoaXMuaWNvbi5pY29uTmFtZSA9IHRoaXMuaWNvbkNsYXNzXG5cdFx0XHR9XG5cblx0XHRcdGFkZEl0ZW0gKHRleHQsIGRhdGEpIHtcblx0XHRcdFx0bGV0IF9zZWxmID0gdGhpcztcblx0XHRcdFx0dmFyIGl0ZW0gPSAkKCc8ZGl2IC8+Jylcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2lubmVyLWl0ZW0nKVxuXHRcdFx0XHRcdC5kYXRhKCdpbmRleCcsIHRoaXMuX2luZGV4KVxuXHRcdFx0XHRcdC5odG1sKHRleHQpXG5cdFx0XHRcdFx0LyoqIFRPRE86IFJlZmFjdG9yIHRoaXMgY2FsbGJhY2sgYW5kIGV2ZW50ICovXG5cdFx0XHRcdFx0Lm9uKCdjbGljaycsICgpID0+IHtcblx0XHRcdFx0XHRcdHRoaXMub25JdGVtQ2xpY2soaXRlbS5kYXRhKCdpbmRleCcpKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0aWYgKHR5cGVvZiBkYXRhID09ICdvYmplY3QnKSB7XG5cdFx0XHRcdFx0Zm9yIChsZXQgayBpbiBkYXRhKVxuXHRcdFx0XHRcdFx0aXRlbS5kYXRhKGssIGRhdGFbIGsgXSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5faW5kZXgrKztcblx0XHRcdFx0dGhpcy5saXN0LnB1c2goaXRlbSk7XG5cdFx0XHRcdHRoaXMubGlzdEVsZW1lbnQuYXBwZW5kKGl0ZW0pO1xuXG5cdFx0XHRcdHJldHVybiBpdGVtO1xuXHRcdFx0fVxuXG5cdFx0XHRnZXRCeUluZGV4IChpbmRleCkge1xuXHRcdFx0XHRmb3IgKGxldCBpIGluIHRoaXMubGlzdClcblx0XHRcdFx0XHRpZiAodGhpcy5saXN0WyBpIF0uZGF0YSgnaW5kZXgnKSA9PSBpbmRleClcblx0XHRcdFx0XHRcdHJldHVybiB0aGlzLmxpc3RbIGkgXTtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cblx0XHRcdG9uSXRlbUNsaWNrIChpbmRleCkge1xuXHRcdFx0XHR0aGlzLmFjdGl2ZSA9IGluZGV4O1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGNsYXNzIEJhY2t3YXJkQ29udHJvbCBleHRlbmRzIENvbnRyb2wge1xuXG5cdFx0XHRjb25zdHJ1Y3RvciAoKSB7XG5cdFx0XHRcdHN1cGVyKCdiYWNrd2FyZCcsICd1bmRvJyk7XG5cdFx0XHR9XG5cblx0XHRcdG9uQ2xpY2sgKGUpIHtcblx0XHRcdFx0c3VwZXIub25DbGljayhlKTtcblx0XHRcdFx0dmlkZW8uY3VycmVudFRpbWUgLT0gb3B0aW9ucy5wbGF5YmFjay5zdGVwLm1lZGl1bTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRjbGFzcyBEb3dubG9hZENvbnRyb2wgZXh0ZW5kcyBDb250cm9sIHtcblx0XHRcdGNvbnN0cnVjdG9yICgpIHtcblx0XHRcdFx0c3VwZXIoJycsICcnKTtcblx0XHRcdFx0bGV0IGljb24gPSBuZXcgSWNvbignZG93bmxvYWQnKTtcblx0XHRcdFx0dGhpcy5lbGVtZW50ID0gJCgnPGEgLz4nKVxuXHRcdFx0XHRcdC5hdHRyKCdocmVmJywgJycpXG5cdFx0XHRcdFx0LmF0dHIoJ3RhcmdldCcsICdfYmxhbmsnKVxuXHRcdFx0XHRcdC5hdHRyKCdkb3dubG9hZCcsICcnKVxuXHRcdFx0XHRcdC5hZGRDbGFzcygnY29udHJvbCBkb3dubG9hZCcpXG5cdFx0XHRcdFx0LmFwcGVuZChpY29uLmVsZW1lbnQpO1xuXHRcdFx0fVxuXG5cdFx0XHRzZXQgbGluayAodmFsdWUpIHtcblx0XHRcdFx0dGhpcy5lbGVtZW50LmF0dHIoJ2hyZWYnLCB2YWx1ZSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y2xhc3MgRm9yd2FyZENvbnRyb2wgZXh0ZW5kcyBDb250cm9sIHtcblx0XHRcdGNvbnN0cnVjdG9yICgpIHtcblx0XHRcdFx0c3VwZXIoJ2ZvcndhcmQnLCAncmVkbycpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGNsYXNzIEZ1bGxzY3JlZW5Db250cm9sIGV4dGVuZHMgQ29udHJvbCB7XG5cdFx0XHRjb25zdHJ1Y3RvciAoKSB7XG5cdFx0XHRcdHN1cGVyKCdmdWxsc2NyZWVuJywgJ2Fycm93cy1hbHQnKTtcblx0XHRcdH1cblxuXHRcdFx0b25DbGljayAoZSkge1xuXHRcdFx0XHRzdXBlci5vbkNsaWNrKGUpXG5cdFx0XHRcdHZpZGVvLmZ1bGxzY3JlZW4udG9nZ2xlKCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y2xhc3MgUGxheUNvbnRyb2wgZXh0ZW5kcyBDb250cm9sIHtcblx0XHRcdGNvbnN0cnVjdG9yICgpIHtcblx0XHRcdFx0c3VwZXIoJ3BsYXknLCAncGxheScpO1xuXHRcdFx0fVxuXG5cdFx0XHRwYXVzZSAoKSB7XG5cdFx0XHRcdHRoaXMuaWNvbi5pY29uTmFtZSA9ICdwbGF5Jztcblx0XHRcdH1cblxuXHRcdFx0cGxheSAoKSB7XG5cdFx0XHRcdHRoaXMuaWNvbi5pY29uTmFtZSA9ICdwYXVzZSc7XG5cdFx0XHR9XG5cblx0XHRcdG9uQ2xpY2soZSkge1xuXHRcdFx0XHRzdXBlci5vbkNsaWNrKGUpO1xuXHRcdFx0XHR2aWRlby50b2dnbGVQbGF5KCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y2xhc3MgUmF0ZUNvbnRyb2wgZXh0ZW5kcyBDb250cm9sIHtcblx0XHRcdGNvbnN0cnVjdG9yICgpIHtcblx0XHRcdFx0c3VwZXIoKTtcblx0XHRcdFx0dGhpcy5kb3duID0gbmV3IENvbnRyb2woJ3JhdGUtZG93bicsICdiYWNrd2FyZCcpO1xuXHRcdFx0XHR0aGlzLnVwID0gbmV3IENvbnRyb2woJ3JhdGUtdXAnLCAnZm9yd2FyZCcpO1xuXHRcdFx0XHR0aGlzLmN1cnJlbnQgPSBuZXcgQ29udHJvbFRleHQoJ3JhdGUtY3VycmVudCcpO1xuXG5cdFx0XHRcdHRoaXMuZG93bi5lbGVtZW50LmNsaWNrKGUgPT4ge1xuXHRcdFx0XHRcdHZpZGVvLnJhdGUgLT0gb3B0aW9ucy5yYXRlLnN0ZXA7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdHRoaXMudXAuZWxlbWVudC5jbGljayhlID0+IHtcblx0XHRcdFx0XHR2aWRlby5yYXRlICs9IG9wdGlvbnMucmF0ZS5zdGVwO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHR0aGlzLmVsZW1lbnQgPSAkKCc8ZGl2IC8+Jylcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2NvbnRyb2wtY29udGFpbmVyJylcblx0XHRcdFx0XHQuYXBwZW5kKHRoaXMuZG93bi5lbGVtZW50KVxuXHRcdFx0XHRcdC5hcHBlbmQodGhpcy5jdXJyZW50LmVsZW1lbnQpXG5cdFx0XHRcdFx0LmFwcGVuZCh0aGlzLnVwLmVsZW1lbnQpO1xuXHRcdFx0fVxuXG5cdFx0XHRzZXQgKHZhbHVlKSB7XG5cdFx0XHRcdGlmICh0aGlzLmRpc2FibGVkKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMudXAuZWxlbWVudC5yZW1vdmVDbGFzcygnZGlzYWJsZWQnKTtcblx0XHRcdFx0dGhpcy5kb3duLmVsZW1lbnQucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkJyk7XG5cdFx0XHRcdGlmICh2aWRlby5yYXRlIDw9IG9wdGlvbnMucmF0ZS5taW4pXG5cdFx0XHRcdFx0dGhpcy5kb3duLmVsZW1lbnQuYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XG5cdFx0XHRcdGVsc2UgaWYgKHZpZGVvLnJhdGUgPj0gb3B0aW9ucy5yYXRlLm1heClcblx0XHRcdFx0XHR0aGlzLnVwLmVsZW1lbnQuYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XG5cdFx0XHRcdHRoaXMuc2hvdygpO1xuXHRcdFx0fVxuXG5cdFx0XHRpbml0ICgpIHtcblx0XHRcdFx0bGV0IHJhdGUgPSBDb29raWUuZ2V0KCdyYXRlJywgb3B0aW9ucy5yYXRlLmRlZmF1bHQpO1xuXHRcdFx0XHR0aGlzLnNob3cocmF0ZSk7XG5cdFx0XHR9XG5cblx0XHRcdHNob3cgKHZhbHVlKSB7XG5cdFx0XHRcdHZhbHVlID0gdmFsdWUgfHwgdmlkZW8ucmF0ZTtcblx0XHRcdFx0dmFsdWUgPSBwYXJzZUZsb2F0KHZhbHVlKVxuXHRcdFx0XHRcdC50b0ZpeGVkKDIpXG5cdFx0XHRcdFx0LnRvU3RyaW5nKClcblx0XHRcdFx0XHQucmVwbGFjZSgvLC9nLCAnLicpO1xuXHRcdFx0XHR0aGlzLmN1cnJlbnQudGV4dCA9ICfDlycgKyB2YWx1ZTtcblx0XHRcdH1cblxuXHRcdFx0ZGlzYWJsZSgpIHtcblx0XHRcdFx0dGhpcy5kaXNhYmxlZCA9IHRydWU7XG5cdFx0XHRcdHRoaXMuZG93bi5kaXNhYmxlLmFwcGx5KHRoaXMuZG93biwgYXJndW1lbnRzKTtcblx0XHRcdFx0dGhpcy51cC5kaXNhYmxlLmFwcGx5KHRoaXMudXAsIGFyZ3VtZW50cyk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y2xhc3MgU291cmNlQ29udHJvbCBleHRlbmRzIENvbnRyb2xDb250YWluZXIge1xuXHRcdFx0Y29uc3RydWN0b3IgKCkge1xuXHRcdFx0XHRzdXBlcignc291cmNlLWNvbnRyb2wnLCAnYnVsbHNleWUnKTtcblx0XHRcdFx0LyoqIFRPRE86IE1vdmUgc291cmNlcyB0byB0aGUgYXJndW1lbnRzIGluIGNvbnN0cm9yICovXG5cdFx0XHRcdGlmIChzb3VyY2VzLmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0XHRmb3IgKHZhciBpIGluIHNvdXJjZXMpIHtcblx0XHRcdFx0XHRcdHRoaXMuYWRkSXRlbShzb3VyY2VzWyBpIF0udGl0bGUsIHsgc3JjIDogc291cmNlc1sgaSBdLnNyYyB9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdHRoaXMuZGlzYWJsZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHRzZXQgKGluZGV4KSB7XG5cdFx0XHRcdC8qKiBUT0RPOiBFbWl0IGV2ZW50IG9uIHNldCBzb3VyY2UqL1xuXHRcdFx0XHRsZXQgcyA9IHRoaXMuZ2V0QnlJbmRleChpbmRleCk7XG5cdFx0XHRcdGlmIChzICE9IG51bGwpIHtcblx0XHRcdFx0XHR2aWRlby5zb3VyY2UgPSBzLmRhdGEoJ3NyYycpO1xuXHRcdFx0XHRcdGNvbnRyb2xzLmRvd25sb2FkID0gcy5kYXRhKCdzcmMnKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRvbkl0ZW1DbGljayAoaW5kZXgpIHtcblx0XHRcdFx0c3VwZXIub25JdGVtQ2xpY2soaW5kZXgpO1xuXHRcdFx0XHR0aGlzLnNldChpbmRleCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y2xhc3MgU3VidGl0bGVDb250cm9sIGV4dGVuZHMgQ29udHJvbENvbnRhaW5lciB7XG5cdFx0XHRjb25zdHJ1Y3RvciAoKSB7XG5cdFx0XHRcdHN1cGVyKCdzdWJ0aXRsZS1jb250cm9sJywgJ2NvbW1lbnRpbmctbycpO1xuXHRcdFx0fVxuXG5cdFx0XHRpbml0ICgpIHtcblx0XHRcdFx0aWYgKHZpZGVvLnN1YnRpdGxlcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0Zm9yICh2YXIgaSBpbiB2aWRlby5zdWJ0aXRsZXMpIHtcblx0XHRcdFx0XHRcdGlmICghdmlkZW8uc3VidGl0bGVzLmhhc093blByb3BlcnR5KGkpKSBjb250aW51ZTtcblx0XHRcdFx0XHRcdGxldCBpdGVtID0gdmlkZW8uc3VidGl0bGVzWyBpIF07XG5cdFx0XHRcdFx0XHR0aGlzLmFkZEl0ZW0oaXRlbS50aXRsZSwge1xuXHRcdFx0XHRcdFx0XHRzcmMgOiBpdGVtLnNyYyxcblx0XHRcdFx0XHRcdFx0bGFuZ3VhZ2UgOiBpdGVtLmxhbmd1YWdlXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdHRoaXMuZGlzYWJsZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHRvbkljb25DbGljayAoZSkge1xuXHRcdFx0XHRzdXBlci5vbkljb25DbGljayhlKTtcblx0XHRcdFx0dGhpcy5vbkl0ZW1DbGljaygtMSk7XG5cdFx0XHR9XG5cblx0XHRcdG9uSXRlbUNsaWNrIChpbmRleCkge1xuXHRcdFx0XHRzdXBlci5vbkl0ZW1DbGljayhpbmRleCk7XG5cdFx0XHRcdGxldCB0ID0gdGhpcy5nZXRCeUluZGV4KGluZGV4KTtcblx0XHRcdFx0aWYgKHQgIT0gbnVsbClcblx0XHRcdFx0XHR2aWRlby50cmFjayA9IHQuZGF0YSgnbGFuZ3VhZ2UnKTtcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdHZpZGVvLnRyYWNrID0gLTE7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y2xhc3MgVGltZWxpbmVDb250cm9sIGV4dGVuZHMgQ29udHJvbCB7XG5cdFx0XHRjb25zdHJ1Y3RvciAoKSB7XG5cdFx0XHRcdHN1cGVyKCd0aW1lbGluZScpO1xuXHRcdFx0XHRsZXQgZHVyYXRpb24gPSB2aWRlby5kdXJhdGlvbjtcblxuXHRcdFx0XHR0aGlzLmRyYWcgPSBmYWxzZTtcblxuXHRcdFx0XHR0aGlzLmN1cnJlbnQgPSBuZXcgQ29udHJvbFRleHQoJ3RpbWUtY3VycmVudCcpO1xuXHRcdFx0XHR0aGlzLnRvdGFsID0gbmV3IENvbnRyb2xUZXh0KCd0aW1lLXRvdGFsJyk7XG5cblx0XHRcdFx0dGhpcy5tYXJrZXIgPSAkKCc8ZGl2IC8+JykuYWRkQ2xhc3MoJ3RpbWUtbWFya2VyJyk7XG5cblx0XHRcdFx0dGhpcy5tYXJrZXJTaGFkb3cgPSAkKCc8ZGl2IC8+Jylcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3RpbWUtbWFya2VyIHNoYWRvdycpXG5cdFx0XHRcdFx0LmFwcGVuZCgpXG5cdFx0XHRcdFx0LmhpZGUoKTtcblxuXHRcdFx0XHR0aGlzLm1hcmtlclNoYWRvd1RpbWUgPSAkKCc8ZGl2IC8+JykuYWRkQ2xhc3MoJ3RpbWUnKTtcblx0XHRcdFx0dGhpcy5tYXJrZXJUaW1lID0gJCgnPGRpdiAvPicpXG5cdFx0XHRcdFx0LmFkZENsYXNzKCd0aW1lJylcblx0XHRcdFx0XHQuaGlkZSgpO1xuXHRcdFx0XHR0aGlzLnBsYXllZCA9ICQoJzxkaXYgLz4nKS5hZGRDbGFzcygndGltZS1wbGF5ZWQnKTtcblx0XHRcdFx0dGhpcy5idWZmZXJlZCA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0XHR0aGlzLmN1cnJlbnQudGV4dCA9ICcwMDowMCc7XG5cdFx0XHRcdHRoaXMubGluZSA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0XHRcdC5hZGRDbGFzcygndGltZWxpbmUnKVxuXHRcdFx0XHRcdC5hcHBlbmQodGhpcy5tYXJrZXIuYXBwZW5kKHRoaXMubWFya2VyVGltZSkpXG5cdFx0XHRcdFx0LmFwcGVuZCh0aGlzLm1hcmtlclNoYWRvdy5hcHBlbmQodGhpcy5tYXJrZXJTaGFkb3dUaW1lKSlcblx0XHRcdFx0XHQuYXBwZW5kKHRoaXMucGxheWVkKVxuXHRcdFx0XHRcdC5hcHBlbmQodGhpcy5idWZmZXJlZClcblx0XHRcdFx0XHQub24oe1xuXHRcdFx0XHRcdFx0J21vdXNlbW92ZScgOiAoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5kcmFnKSByZXR1cm47XG5cblx0XHRcdFx0XHRcdFx0bGV0IHAgPSB0aGlzLmdldFBvc2l0aW9uKGUucGFnZVgpO1xuXHRcdFx0XHRcdFx0XHRpZiAocCA+IDAgJiYgcCA8IDEpIHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLm1hcmtlclNoYWRvdy5zaG93KCk7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5tYXJrZXJTaGFkb3cuY3NzKCdsZWZ0JywgcCAqIDEwMCArICclJyk7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5tYXJrZXJTaGFkb3dUaW1lLmh0bWwoc2Vjb25kc1RvVGltZSh2aWRlby5kdXJhdGlvbiAqIHApKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5tYXJrZXJTaGFkb3cuaGlkZSgpO1xuXHRcdFx0XHRcdFx0fSxcblxuXHRcdFx0XHRcdFx0J21vdXNlbGVhdmUnIDogKGUpID0+IHtcblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuZHJhZykgcmV0dXJuO1xuXHRcdFx0XHRcdFx0XHR0aGlzLm1hcmtlclNoYWRvdy5oaWRlKClcblx0XHRcdFx0XHRcdH0sXG5cblx0XHRcdFx0XHRcdCdtb3VzZWRvd24nIDogKGUpID0+IHtcblx0XHRcdFx0XHRcdH0sXG5cblx0XHRcdFx0XHRcdCdjbGljaycgOiAoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRpZiAoZS53aGljaCAhPT0gMSkgcmV0dXJuO1xuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5kcmFnKSByZXR1cm47XG5cdFx0XHRcdFx0XHRcdHRoaXMuaGFyZE1vdmUodGhpcy5nZXRQb3NpdGlvbihlLnBhZ2VYKSk7XG5cdFx0XHRcdFx0XHRcdHZpZGVvLnNlZWsodmlkZW8uZHVyYXRpb24gKiB0aGlzLmdldFBvc2l0aW9uKGUucGFnZVgpKTtcblx0XHRcdFx0XHRcdH0sXG5cblx0XHRcdFx0XHRcdCd0b3VjaG1vdmUnIDogKGUpID0+IHtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHR0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoJ3RpbWVsaW5lLWNvbnRhaW5lcicpXG5cdFx0XHRcdFx0LmFwcGVuZCgkKCc8ZGl2IC8+Jylcblx0XHRcdFx0XHRcdC5hZGRDbGFzcygndGltZWxpbmUtc3ViY29udGFpbmVyJylcblx0XHRcdFx0XHRcdC5hcHBlbmQodGhpcy5jdXJyZW50LmVsZW1lbnQpXG5cdFx0XHRcdFx0XHQuYXBwZW5kKHRoaXMubGluZSlcblx0XHRcdFx0XHRcdC5hcHBlbmQodGhpcy50b3RhbC5lbGVtZW50KSk7XG5cblx0XHRcdFx0dGhpcy5tYXJrZXIub24oJ21vdXNlZG93bicsIChlKSA9PiB7XG5cdFx0XHRcdFx0aWYgKGUud2hpY2ggIT09IDEpIHJldHVybjtcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0dGhpcy5tYXJrZXJTaGFkb3cuaGlkZSgpO1xuXHRcdFx0XHRcdHRoaXMuZHJhZyA9IHRydWU7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdCQoZG9jdW1lbnQpLm9uKHtcblxuXHRcdFx0XHRcdCdtb3VzZW1vdmUnIDogKGUpID0+IHtcblx0XHRcdFx0XHRcdGlmICghdGhpcy5kcmFnKSByZXR1cm47XG5cdFx0XHRcdFx0XHRsZXQgcCA9IHRoaXMuZ2V0UG9zaXRpb24oZS5wYWdlWCk7XG5cdFx0XHRcdFx0XHRpZiAocCA+IDAgJiYgcCA8IDEpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5tYXJrZXJUaW1lXG5cdFx0XHRcdFx0XHRcdFx0LnNob3coKVxuXHRcdFx0XHRcdFx0XHRcdC5odG1sKHNlY29uZHNUb1RpbWUodmlkZW8uZHVyYXRpb24gKiBwKSlcblx0XHRcdFx0XHRcdFx0dmlkZW8uc2Vlayh2aWRlby5kdXJhdGlvbiAqIHApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0sXG5cblx0XHRcdFx0XHQnbW91c2V1cCcgOiAoZSkgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy5tYXJrZXJUaW1lLmhpZGUoKVxuXHRcdFx0XHRcdFx0dGhpcy5kcmFnID0gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHQvKiogVE9ETzogU29sdmUgcHJvYmxlbSB3aXRoIG9wZW4gZXZlbnRzIGFwaSAqL1xuXHRcdFx0XHQkKHZpZGVvLl92aWRlbykub24oJ2xlcGxheWVyX2VuZGVkJywgZSA9PiB7XG5cdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLndhdGNoQnVmZmVySW50ZXJ2YWwpO1xuXHRcdFx0XHR9KVxuXG5cdFx0XHRcdHRoaXMuX2luaXRXYXRjaEJ1ZmZlcigpO1xuXHRcdFx0fVxuXG5cdFx0XHRnZXRQb3NpdGlvbiAoeCkge1xuXHRcdFx0XHRyZXR1cm4gKHggLSB0aGlzLmxpbmUub2Zmc2V0KCkubGVmdCkgLyB0aGlzLmxpbmUud2lkdGgoKTtcblx0XHRcdH1cblxuXHRcdFx0aGFyZE1vdmUgKHBlcmNlbnQpIHtcblx0XHRcdFx0bGV0IGN1cnJlbnRUaW1lID0gdmlkZW8uZHVyYXRpb24gKiBwZXJjZW50O1xuXHRcdFx0XHRwZXJjZW50ID0gcGVyY2VudCAqIDEwMDtcblx0XHRcdFx0dGhpcy5tYXJrZXIuY3NzKCdsZWZ0JywgcGVyY2VudCArICclJyk7XG5cdFx0XHRcdHRoaXMucGxheWVkLmNzcygnd2lkdGgnLCBwZXJjZW50ICsgJyUnKTtcblx0XHRcdFx0dGhpcy5jdXJyZW50LnRleHQgPSBzZWNvbmRzVG9UaW1lKGN1cnJlbnRUaW1lKTtcblx0XHRcdH1cblxuXHRcdFx0bW92ZSAoKSB7XG5cdFx0XHRcdGxldCBwZXJjZW50ID0gKHZpZGVvLmN1cnJlbnRUaW1lIC8gdmlkZW8uZHVyYXRpb24gKiAxMDApLnRvRml4ZWQoMik7XG5cdFx0XHRcdGxldCBjdXJyZW50VGltZSA9IHZpZGVvLmN1cnJlbnRUaW1lO1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMubWFya2VyLmNzcygnbGVmdCcsIHBlcmNlbnQgKyAnJScpO1xuXHRcdFx0XHR0aGlzLnBsYXllZC5jc3MoJ3dpZHRoJywgcGVyY2VudCArICclJyk7XG5cdFx0XHRcdHRoaXMuY3VycmVudC50ZXh0ID0gc2Vjb25kc1RvVGltZShjdXJyZW50VGltZSk7XG5cdFx0XHR9XG5cblx0XHRcdF9pbml0V2F0Y2hCdWZmZXIgKCkge1xuXHRcdFx0XHRjbGVhckludGVydmFsKHRoaXMud2F0Y2hCdWZmZXJJbnRlcnZhbCk7XG5cdFx0XHRcdGxldCB1cGRhdGVQcm9ncmVzc0JhciA9ICgpID0+IHtcblx0XHRcdFx0XHRjb25zdCBFTkQgPSAxO1xuXHRcdFx0XHRcdGNvbnN0IFNUQVJUID0gMDtcblx0XHRcdFx0XHRsZXQgcmVzdWx0ID0gJCgnJyk7XG5cdFx0XHRcdFx0dmlkZW8ubG9hZGVkLmZvckVhY2goaXRlbSA9PiB7XG5cdFx0XHRcdFx0XHRsZXQgZG9tSXRlbSA9ICQoJzxkaXYgLz4nKS5hZGRDbGFzcygndGltZS1idWZmZXJlZCcpO1xuXHRcdFx0XHRcdFx0ZG9tSXRlbS5jc3Moe1xuXHRcdFx0XHRcdFx0XHQnbGVmdCcgOiBpdGVtW1NUQVJUXSAqIDEwMCArICclJyxcblx0XHRcdFx0XHRcdFx0J3dpZHRoJyA6IChpdGVtW0VORF0gLSBpdGVtW1NUQVJUXSkgKiAxMDAgKyAnJSdcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0cmVzdWx0ID0gcmVzdWx0LmFkZChkb21JdGVtKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR0aGlzLmJ1ZmZlcmVkLmh0bWwocmVzdWx0KTtcblxuXHRcdFx0XHRcdGlmICh2aWRlby5sb2FkZWRbMF0gJiYgKDEgLSB2aWRlby5sb2FkZWRbMF1bRU5EXSkgPD0gMC4wNSkge1xuXHRcdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLndhdGNoQnVmZmVySW50ZXJ2YWwpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLndhdGNoQnVmZmVySW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCh1cGRhdGVQcm9ncmVzc0JhciwgNTAwKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRjbGFzcyBWb2x1bWVDb250cm9sIGV4dGVuZHMgQ29udHJvbCB7XG5cdFx0XHRjb25zdHJ1Y3RvciAoKSB7XG5cdFx0XHRcdHN1cGVyKCd2b2x1bWUtY29udHJvbCcsICd2b2x1bWUtZG93bicpO1xuXHRcdFx0XHRsZXQgX3NlbGYgPSB0aGlzO1xuXG5cdFx0XHRcdHRoaXMubWFya2VyID0gJCgnPGRpdi8+JykuYWRkQ2xhc3MoJ3ZvbHVtZS1tYXJrZXInKTtcblxuXHRcdFx0XHR0aGlzLmFjdGl2ZSA9ICQoJzxkaXYvPicpLmFkZENsYXNzKCd2b2x1bWUtYWN0aXZlJyk7XG5cblx0XHRcdFx0dGhpcy5saW5lID0gJCgnPGRpdi8+Jylcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3ZvbHVtZS1saW5lJylcblx0XHRcdFx0XHQuYXBwZW5kKHRoaXMuYWN0aXZlKVxuXHRcdFx0XHRcdC5hcHBlbmQodGhpcy5tYXJrZXIpXG5cdFx0XHRcdFx0Lm9uKCdjbGljaycsIChlKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAodGhpcy5kcmFnKSByZXR1cm47XG5cdFx0XHRcdFx0XHRsZXQgcCA9IHRoaXMuZ2V0UG9zaXRpb24oZS5wYWdlWSk7XG5cdFx0XHRcdFx0XHRpZiAocCA+PSAwICYmIHAgPD0gMSkge1xuXHRcdFx0XHRcdFx0XHR2aWRlby52b2x1bWUgPSAxIC0gcDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHR0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoJ2NvbnRyb2wtY29udGFpbmVyJylcblx0XHRcdFx0XHQuYXBwZW5kKCQoJzxkaXYgLz4nKVxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCdjb250cm9sLWlubmVyIHZvbHVtZS1zbGlkZXInKVxuXHRcdFx0XHRcdFx0LmFwcGVuZCh0aGlzLmxpbmUpKTtcblxuXHRcdFx0XHR0aGlzLmRyYWcgPSBmYWxzZTtcblxuXHRcdFx0XHR0aGlzLm1hcmtlci5vbignbW91c2Vkb3duJywgKGUpID0+IHtcblx0XHRcdFx0XHRpZiAoZS53aGljaCAhPSAxKSByZXR1cm47XG5cdFx0XHRcdFx0dGhpcy5kcmFnID0gdHJ1ZTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0JChkb2N1bWVudCkub24oe1xuXHRcdFx0XHRcdCdtb3VzZW1vdmUnIDogKGUpID0+IHtcblx0XHRcdFx0XHRcdGlmICghdGhpcy5kcmFnKSByZXR1cm47XG5cdFx0XHRcdFx0XHRsZXQgcCA9IHRoaXMuZ2V0UG9zaXRpb24oZS5wYWdlWSk7XG5cdFx0XHRcdFx0XHRpZiAocCA+PSAwICYmIHAgPD0gMSkge1xuXHRcdFx0XHRcdFx0XHR2aWRlby52b2x1bWUgPSAxIC0gcFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0sXG5cblx0XHRcdFx0XHQnbW91c2V1cCcgOiAoZSkgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy5kcmFnID0gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0c2V0IHZhbHVlICh2YWx1ZSkge1xuXHRcdFx0XHRpZiAodmFsdWUgPCBvcHRpb25zLnZvbHVtZS5tdXRlbGltaXQpIHtcblx0XHRcdFx0XHR0aGlzLmljb24uaWNvbk5hbWUgPSAndm9sdW1lLW9mZic7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0aWYgKHZhbHVlIDwgMC41KVxuXHRcdFx0XHRcdFx0dGhpcy5pY29uLmljb25OYW1lID0gJ3ZvbHVtZS1kb3duJztcblx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHR0aGlzLmljb24uaWNvbk5hbWUgPSAndm9sdW1lLXVwJztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGxldCBwID0gTWF0aC5yb3VuZCh2YWx1ZSAqIDEwMCkudG9TdHJpbmcoKSArICclJztcblx0XHRcdFx0dGhpcy5hY3RpdmUuY3NzKCdoZWlnaHQnLCBwKTtcblx0XHRcdFx0dGhpcy5tYXJrZXIuY3NzKCdib3R0b20nLCBwKTtcblx0XHRcdH1cblxuXHRcdFx0dG9nZ2xlTXV0ZWQgKCkge1xuXHRcdFx0XHRpZiAodmlkZW8ubXV0ZWQgPT0gdHJ1ZSkge1xuXHRcdFx0XHRcdHRoaXMudmFsdWUgPSBDb29raWUuZ2V0KCd2b2x1bWUnLCBvcHRpb25zLnZvbHVtZS5kZWZhdWx0KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0dGhpcy52YWx1ZSA9IDA7XG5cdFx0XHR9XG5cblx0XHRcdGdldFBvc2l0aW9uICh5KSB7XG5cdFx0XHRcdHJldHVybiAoeSAtIHRoaXMubGluZS5vZmZzZXQoKS50b3ApIC8gdGhpcy5saW5lLmhlaWdodCgpO1xuXHRcdFx0fVxuXG5cdFx0XHRvbkljb25DbGljayAoZSkge1xuXHRcdFx0XHRzdXBlci5vbkljb25DbGljayhlKTtcblx0XHRcdFx0dGhpcy50b2dnbGVNdXRlZCgpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGNsYXNzIENvb2tpZSB7XG5cdFx0XHRzdGF0aWMgZ2V0IChuYW1lLCBkZmx0KSB7XG5cdFx0XHRcdHZhciBjb29raWVzID0gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7Jyk7XG5cdFx0XHRcdGZvciAodmFyIGkgaW4gY29va2llcykge1xuXHRcdFx0XHRcdHZhciBkID0gY29va2llc1sgaSBdLnRyaW0oKS5zcGxpdCgnPScpO1xuXHRcdFx0XHRcdGlmIChkWyAwIF0gPT0gJ2xlcGxheWVyXycgKyBuYW1lKVxuXHRcdFx0XHRcdFx0cmV0dXJuIGRbIDEgXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gZGZsdDtcblx0XHRcdH07XG5cblx0XHRcdHN0YXRpYyBzZXQgKG5hbWUsIHZhbHVlKSB7XG5cdFx0XHRcdHZhciBkID0gbmV3IERhdGUoKTtcblx0XHRcdFx0ZC5zZXREYXRlKGQueWVhciArIDEpO1xuXHRcdFx0XHRkb2N1bWVudC5jb29raWUgPSAnbGVwbGF5ZXJfJyArIG5hbWUgKyAnPScgKyB2YWx1ZSArICc7ZXhwaXJlcz0nICsgZC50b1N0cmluZygpO1xuXHRcdFx0fTtcblx0XHR9XG5cblx0XHRjbGFzcyBVc2VyQWdlbnQge1xuXG5cdFx0fVxuXG5cdFx0Y2xhc3MgQ29udHJvbENvbGxlY3Rpb24ge1xuXHRcdFx0Y29uc3RydWN0b3IgKG5hbWUsIGFjdGl2ZSkge1xuXHRcdFx0XHR0aGlzLml0ZW1zID0ge307XG5cdFx0XHRcdHRoaXMuYWN0aXZlID0gYWN0aXZlIHx8IGZhbHNlO1xuXHRcdFx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdFx0fVxuXG5cdFx0XHRzZXQgZG93bmxvYWQgKHZhbHVlKSB7XG5cdFx0XHRcdGlmICh0aGlzLmhhcyhDX0RPV05MT0FEKSkge1xuXHRcdFx0XHRcdHRoaXMuaXRlbXMuZG93bmxvYWQubGluayA9IHZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHNldCByYXRlICh2YWx1ZSkge1xuXHRcdFx0XHRpZiAodGhpcy5oYXMoQ19SQVRFKSkge1xuXHRcdFx0XHRcdHRoaXMuaXRlbXMucmF0ZS5zZXQodmFsdWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHNldCBzb3VyY2UgKHZhbHVlKSB7XG5cdFx0XHRcdGlmICh0aGlzLmhhcyhDX1NPVVJDRSkpIHtcblx0XHRcdFx0XHR0aGlzLml0ZW1zLnNvdXJjZS5zZXQodmFsdWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHNldCB0b3RhbFRpbWUgKHZhbHVlKSB7XG5cdFx0XHRcdGlmICh0aGlzLmhhcyhDX1RJTUVMSU5FKSlcblx0XHRcdFx0XHR0aGlzLml0ZW1zLnRpbWVsaW5lLnRvdGFsLnRleHQgPSB2YWx1ZTtcblx0XHRcdH1cblxuXHRcdFx0c2V0IHZvbHVtZSAodmFsdWUpIHtcblx0XHRcdFx0aWYgKHRoaXMuaGFzKENfVk9MVU1FKSlcblx0XHRcdFx0XHR0aGlzLml0ZW1zLnZvbHVtZS52YWx1ZSA9IHZhbHVlO1xuXHRcdFx0fVxuXG5cdFx0XHRkaXNhYmxlICgpIHtcblx0XHRcdFx0Zm9yIChsZXQgaSBpbiB0aGlzLml0ZW1zKSB7XG5cdFx0XHRcdFx0aWYgKCF0aGlzLml0ZW1zLmhhc093blByb3BlcnR5KGkpKSBjb250aW51ZTtcblx0XHRcdFx0XHR0aGlzLml0ZW1zWyBpIF0uZGlzYWJsZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGFkZCAobmFtZSkge1xuXHRcdFx0XHRpZiAobmFtZSA9PSBDX0RJVklERVIpXG5cdFx0XHRcdFx0cmV0dXJuIENvbnRyb2wuY3JlYXRlKG5hbWUpO1xuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHR0aGlzLml0ZW1zWyBuYW1lIF0gPSBDb250cm9sLmNyZWF0ZShuYW1lKTtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5pdGVtc1sgbmFtZSBdLmVsZW1lbnQ7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aGFzIChuYW1lKSB7XG5cdFx0XHRcdHJldHVybiAodHlwZW9mIHRoaXMuaXRlbXNbIG5hbWUgXSA9PSAnb2JqZWN0Jyk7XG5cdFx0XHR9XG5cblx0XHRcdGhpZGUgKCkge1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQuaGlkZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHRpbml0ICgpIHtcblx0XHRcdFx0dGhpcy5lbGVtZW50ID0gY29udGFpbmVyLmZpbmQoYC5jb250cm9scy0ke3RoaXMubmFtZX1gKVxuXHRcdFx0XHRmb3IgKGxldCBpIGluIHRoaXMuaXRlbXMpIHtcblx0XHRcdFx0XHRpZiAoIXRoaXMuaXRlbXMuaGFzT3duUHJvcGVydHkoaSkpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdCQuaXNGdW5jdGlvbih0aGlzLml0ZW1zW2ldLmluaXQpICYmIHRoaXMuaXRlbXNbaV0uaW5pdCgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuaW5pdFRpbWVsaW5lKCk7XG5cdFx0XHRcdHRoaXMudG90YWxUaW1lID0gc2Vjb25kc1RvVGltZSh2aWRlby5kdXJhdGlvbik7XG5cdFx0XHRcdHRoaXMuZG93bmxvYWQgPSBzb3VyY2VzWyAwIF0uc3JjO1xuXHRcdFx0fVxuXG5cdFx0XHRpbml0VGltZWxpbmUgKCkge1xuXHRcdFx0XHRpZiAodGhpcy5oYXMoQ19USU1FTElORSkpIHtcblx0XHRcdFx0XHRpZiAodGhpcy5pdGVtcy50aW1lbGluZS5lbGVtZW50LndpZHRoKCkgPCAyMClcblx0XHRcdFx0XHRcdHRoaXMuaXRlbXMudGltZWxpbmUuZWxlbWVudC5oaWRlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0bW92ZVRpbWVNYXJrZXIgKCkge1xuXHRcdFx0XHRpZiAodGhpcy5oYXMoQ19USU1FTElORSkpXG5cdFx0XHRcdFx0dGhpcy5pdGVtcy50aW1lbGluZS5tb3ZlKCk7XG5cdFx0XHR9XG5cblx0XHRcdHBhdXNlICgpIHtcblx0XHRcdFx0aWYgKHRoaXMuaGFzKENfUExBWSkpXG5cdFx0XHRcdFx0dGhpcy5pdGVtcy5wbGF5LnBhdXNlKCk7XG5cdFx0XHR9XG5cblx0XHRcdHBsYXkgKCkge1xuXHRcdFx0XHRpZiAodGhpcy5oYXMoQ19QTEFZKSlcblx0XHRcdFx0XHR0aGlzLml0ZW1zLnBsYXkucGxheSgpO1xuXHRcdFx0fVxuXG5cdFx0XHRzaG93ICgpIHtcblx0XHRcdFx0Y29udGFpbmVyLmZpbmQoJy5jb250cm9scy0nICsgdGhpcy5uYW1lKS5zaG93KCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y2xhc3MgQ29udHJvbHMge1xuXHRcdFx0Y29uc3RydWN0b3IgKCkge1xuXHRcdFx0XHR0aGlzLmNvbGxlY3Rpb25zID0ge1xuXHRcdFx0XHRcdGNvbW1vbiA6IG5ldyBDb250cm9sQ29sbGVjdGlvbignY29tbW9uJyksXG5cdFx0XHRcdFx0bWluaSA6IG5ldyBDb250cm9sQ29sbGVjdGlvbignbWluaScpLFxuXHRcdFx0XHRcdGZ1bGxzY3JlZW4gOiBuZXcgQ29udHJvbENvbGxlY3Rpb24oJ2Z1bGxzY3JlZW4nKVxuXHRcdFx0XHR9O1xuXHRcdFx0XHR0aGlzLmNvbGxlY3Rpb25zLmNvbW1vbi5hY3RpdmUgPSB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRnZXQgY29tbW9uICgpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuY29sbGVjdGlvbnMuY29tbW9uO1xuXHRcdFx0fVxuXG5cdFx0XHRnZXQgZnVsbHNjcmVlbiAoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmNvbGxlY3Rpb25zLmZ1bGxzY3JlZW47XG5cdFx0XHR9XG5cblx0XHRcdGdldCBtaW5pICgpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuY29sbGVjdGlvbnMubWluaTtcblx0XHRcdH1cblxuXHRcdFx0c2V0IGRvd25sb2FkICh2YWx1ZSkge1xuXHRcdFx0XHRmb3IgKHZhciBpIGluIHRoaXMuY29sbGVjdGlvbnMpIHtcblx0XHRcdFx0XHR0aGlzLmNvbGxlY3Rpb25zWyBpIF0uZG93bmxvYWQgPSB2YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRzZXQgcmF0ZSAodmFsdWUpIHtcblx0XHRcdFx0Q29va2llLnNldCgncmF0ZScsIHZhbHVlKTtcblx0XHRcdFx0Zm9yICh2YXIgaSBpbiB0aGlzLmNvbGxlY3Rpb25zKSB7XG5cdFx0XHRcdFx0dGhpcy5jb2xsZWN0aW9uc1sgaSBdLnJhdGUgPSB2YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRzZXQgc291cmNlICh2YWx1ZSkge1xuXHRcdFx0XHRmb3IgKHZhciBpIGluIHRoaXMuY29sbGVjdGlvbnMpIHtcblx0XHRcdFx0XHR0aGlzLmNvbGxlY3Rpb25zWyBpIF0uc291cmNlID0gdmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0c2V0IHRvdGFsVGltZSAodmFsdWUpIHtcblx0XHRcdFx0Zm9yICh2YXIgaSBpbiB0aGlzLmNvbGxlY3Rpb25zKSB7XG5cdFx0XHRcdFx0dGhpcy5jb2xsZWN0aW9uc1sgaSBdLnRvdGFsVGltZSA9IHZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHNldCB2b2x1bWUgKHZhbHVlKSB7XG5cdFx0XHRcdGZvciAodmFyIGkgaW4gdGhpcy5jb2xsZWN0aW9ucykge1xuXHRcdFx0XHRcdHRoaXMuY29sbGVjdGlvbnNbIGkgXS52b2x1bWUgPSB2YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRDb29raWUuc2V0KCd2b2x1bWUnLCB2YWx1ZSk7XG5cdFx0XHR9XG5cblx0XHRcdGRpc2FibGUgKCkge1xuXHRcdFx0XHRmb3IgKHZhciBpIGluIHRoaXMuY29sbGVjdGlvbnMpIHtcblx0XHRcdFx0XHR0aGlzLmNvbGxlY3Rpb25zWyBpIF0uZGlzYWJsZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGhhcyAobmFtZSkge1xuXHRcdFx0XHRyZXR1cm4gKHR5cGVvZiB0aGlzLmNvbGxlY3Rpb25zWyBuYW1lIF0gPT0gJ29iamVjdCcpO1xuXHRcdFx0fVxuXG5cdFx0XHRpbml0ICgpIHtcblx0XHRcdFx0Zm9yICh2YXIgaSBpbiB0aGlzLmNvbGxlY3Rpb25zKSB7XG5cdFx0XHRcdFx0dGhpcy5jb2xsZWN0aW9uc1sgaSBdLmluaXQoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmNvbGxlY3Rpb25zLmNvbW1vbi5zaG93KCk7XG5cdFx0XHRcdHRoaXMuY29sbGVjdGlvbnMubWluaS5oaWRlKCk7XG5cdFx0XHRcdHRoaXMuY29sbGVjdGlvbnMuZnVsbHNjcmVlbi5oaWRlKCk7XG5cdFx0XHR9XG5cblx0XHRcdG1vdmVUaW1lTWFya2VyICgpIHtcblx0XHRcdFx0Zm9yICh2YXIgaSBpbiB0aGlzLmNvbGxlY3Rpb25zKVxuXHRcdFx0XHRcdHRoaXMuY29sbGVjdGlvbnNbIGkgXS5tb3ZlVGltZU1hcmtlcigpO1xuXHRcdFx0fVxuXG5cdFx0XHRwYXVzZSAoKSB7XG5cdFx0XHRcdGZvciAodmFyIGkgaW4gdGhpcy5jb2xsZWN0aW9ucylcblx0XHRcdFx0XHR0aGlzLmNvbGxlY3Rpb25zWyBpIF0ucGF1c2UoKTtcblx0XHRcdH1cblxuXHRcdFx0cGxheSAoKSB7XG5cdFx0XHRcdGZvciAodmFyIGkgaW4gdGhpcy5jb2xsZWN0aW9ucylcblx0XHRcdFx0XHR0aGlzLmNvbGxlY3Rpb25zWyBpIF0ucGxheSgpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGNsYXNzIEljb24ge1xuXHRcdFx0Y29uc3RydWN0b3IoaWNvbk5hbWUpIHtcblx0XHRcdFx0dGhpcy5fdXNlVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICd1c2UnKTtcblx0XHRcdFx0dGhpcy5fc3ZnVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcblxuXHRcdFx0XHR0aGlzLmljb25OYW1lID0gdGhpcy5faWNvbk5hbWUgPSBpY29uTmFtZTtcblx0XHRcdFx0dGhpcy5fc3ZnVGFnLmFwcGVuZENoaWxkKHRoaXMuX3VzZVRhZyk7XG5cdFx0XHRcdHRoaXMuZWxlbWVudCA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0XHRcdC5hZGRDbGFzcygnbGVwbGF5ZXItaWNvbicpXG5cdFx0XHRcdFx0LmFwcGVuZCgkKHRoaXMuX3N2Z1RhZykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzZXQgaWNvbk5hbWUoaWNvbk5hbWUpIHtcblx0XHRcdFx0bGV0IGF0dHJOUyA9IFsnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycsICdocmVmJ11cblx0XHRcdFx0dGhpcy5fdXNlVGFnLnJlbW92ZUF0dHJpYnV0ZU5TKC4uLmF0dHJOUywgYCR7b3B0aW9ucy5zdmdQYXRofSNsZXBsYXllci1pY29uLSR7dGhpcy5pY29uTmFtZX1gKVxuXHRcdFx0XHR0aGlzLl91c2VUYWcuc2V0QXR0cmlidXRlTlMoLi4uYXR0ck5TLCBgJHtvcHRpb25zLnN2Z1BhdGh9I2xlcGxheWVyLWljb24tJHtpY29uTmFtZX1gKVxuXHRcdFx0XHR0aGlzLl9pY29uTmFtZSA9IGljb25OYW1lO1xuXHRcdFx0fVxuXG5cdFx0XHRnZXQgaWNvbk5hbWUgKCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5faWNvbk5hbWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dmFyIHNvdXJjZXMgPSBbXTtcblx0XHR2YXIgc3VidGl0bGVzID0gW107XG5cdFx0dmFyIHZvbHVtZSA9IG9wdGlvbnMudm9sdW1lLmRlZmF1bHQ7XG5cdFx0dmFyIHZpZGVvID0gbnVsbDtcblx0XHR2YXIgY29udHJvbHMgPSBuZXcgQ29udHJvbHMoKTtcblxuXHRcdC8qKlxuXHRcdCAqIERPTSBjb250YWluZXIgdG8gaG9sZCB2aWRlbyBhbmQgYWxsIG90aGVyIHN0dWZmLlxuXHRcdCAqIEB0eXBlIG9iamVjdFxuXHRcdCAqL1xuXHRcdHZhciBjb250YWluZXIgPSBudWxsO1xuXHRcdHZhciBvdmVybGF5ID0gbnVsbDtcblxuXHRcdGxldCBfY3JlYXRlTm90aWZpY2F0aW9uID0gKG9wdCkgPT4ge1xuXHRcdFx0bGV0IG5vdGlmaWNhdGlvbiwgY2xvc2VCdXR0b247XG5cdFx0XHRub3RpZmljYXRpb24gPSAkKCc8ZGl2IC8+Jylcblx0XHRcdFx0LmFkZENsYXNzKCdsZXBsYXllci1ub3RpZmljYXRpb24nKVxuXHRcdFx0XHQuYXBwZW5kKG9wdC50ZXh0KTtcblx0XHRcdHJldHVybiBub3RpZmljYXRpb247XG5cdFx0fVxuXG5cdFx0dmFyIF9zaG93Tm90aWZpY2F0aW9uID0gKG1zZykgPT4ge1xuXHRcdFx0bGV0IG5vdGlmaWNhdGlvbiA9IF9jcmVhdGVOb3RpZmljYXRpb24oeyB0ZXh0OiBtc2cgfSk7XG5cdFx0XHRub3RpZmljYXRpb24gPSAkKCc8ZGl2IC8+Jylcblx0XHRcdFx0LmFkZENsYXNzKCdsZXBsYXllci1ub3RpZmljYXRpb24nKVxuXHRcdFx0XHQuYXBwZW5kKG1zZyk7XG5cdFx0XHRjb250YWluZXIuYXBwZW5kKG5vdGlmaWNhdGlvbik7XG5cblx0XHR9XG5cblx0XHR2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdC8vIENoZWNrIGlmIGVsZW1lbnQgaXMgY29ycmVjdGx5IHNlbGVjdGVkLlxuXHRcdFx0aWYgKGVsZW1lbnQucHJvcCgndGFnTmFtZScpLnRvTG93ZXJDYXNlKCkgIT0gJ3ZpZGVvJykge1xuXHRcdFx0XHRjb25zb2xlLndhcm4oJ0luY29ycmVjdCBlbGVtZW50IHNlbGVjdGVkLicpO1xuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH1cblxuXHRcdFx0aW5pdE9wdGlvbnMoKTtcblx0XHRcdC8vIFNldCBzb3VyY2UuXG5cdFx0XHQvLyBAVE9ETyBtb3ZlIHRoaXMgdG8gVmlkZW8gY2xhc3Ncblx0XHRcdGVsZW1lbnQuY2hpbGRyZW4oJ3NvdXJjZScpLmVhY2goZnVuY3Rpb24gKCkge1xuXHRcdFx0XHR2YXIgc3JjID0gJCh0aGlzKS5hdHRyKCdzcmMnKTtcblx0XHRcdFx0aWYgKHNyYylcblx0XHRcdFx0XHRzb3VyY2VzLnB1c2goe1xuXHRcdFx0XHRcdFx0c3JjIDogc3JjLFxuXHRcdFx0XHRcdFx0dGl0bGUgOiAkKHRoaXMpLmF0dHIoJ3RpdGxlJylcblx0XHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdFx0aWYgKHNvdXJjZXMubGVuZ3RoID09IDApIHtcblx0XHRcdFx0dmFyIHNyYyA9IGVsZW1lbnQuYXR0cignc3JjJyk7XG5cdFx0XHRcdGlmIChzcmMpIHtcblx0XHRcdFx0XHRzb3VyY2VzLnB1c2goe1xuXHRcdFx0XHRcdFx0c3JjIDogc3JjLFxuXHRcdFx0XHRcdFx0dGl0bGUgOiAkKHRoaXMpLmF0dHIoJ3RpdGxlJykgfHwgJ2RlZmF1bHQnXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChzb3VyY2VzLmxlbmd0aCA9PSAwKSB7XG5cdFx0XHRcdGNvbnNvbGUud2FybignTm8gc291cmNlcyBmb3VuZC4nKTtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cdFx0XHR2aWRlbyA9IG5ldyBWaWRlbyhlbGVtZW50KTtcblxuXHRcdFx0LyoqIFRPRE86IFVzZSBwcm9taXNlIHRvIGFzeW5jIHJ1biB0aGlzICovXG5cdFx0XHRpbml0RG9tKCk7XG5cdFx0XHRpbml0Q29udHJvbHMoKTtcblx0XHRcdHZpZGVvLmluaXQoKS5kb25lKCgpID0+IHsgdmlkZW8udHJpZ2dlcignaW5pdGVkJyl9KTtcblx0XHRcdGluaXRIb3RLZXlzKCk7XG5cblx0XHRcdC8vIHZpZGVvLnRyaWdnZXIoYGluaXRlZGApO1xuXG5cdFx0fTtcblxuXHRcdHZhciBpbml0Q29udHJvbHMgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRmb3IgKGxldCBuYW1lIGluIG9wdGlvbnMuY29udHJvbHMpIHtcblx0XHRcdFx0aWYgKCFjb250cm9scy5oYXMobmFtZSkpIGNvbnRpbnVlO1xuXHRcdFx0XHRmb3IgKGxldCByb3dJbmRleCBpbiBvcHRpb25zLmNvbnRyb2xzWyBuYW1lIF0pIHtcblx0XHRcdFx0XHRsZXQgcm93ID0gb3B0aW9ucy5jb250cm9sc1sgbmFtZSBdWyByb3dJbmRleCBdLFxuXHRcdFx0XHRcdFx0aGFzVGltZWxpbmUgPSBmYWxzZSxcblx0XHRcdFx0XHRcdHJvd0VsZW1lbnQgPSAkKCc8ZGl2IC8+JykuYWRkQ2xhc3MoJ2xlcGxheWVyLWNvbnRyb2xzIGNvbnRyb2xzLScgKyBuYW1lKTtcblxuXHRcdFx0XHRcdGZvciAobGV0IGkgaW4gcm93KSB7XG5cdFx0XHRcdFx0XHRsZXQgY29udHJvbE5hbWUgPSByb3dbIGkgXTtcblxuXHRcdFx0XHRcdFx0aWYgKGNvbnRyb2xOYW1lID09IENfRElWSURFUiB8fCAhY29udHJvbHMuY29sbGVjdGlvbnNbIG5hbWUgXS5oYXMoY29udHJvbE5hbWUpKSB7XG5cdFx0XHRcdFx0XHRcdC8vIENyZWF0ZSBjb250cm9sIG9ubHkgaWYgZGl2aWRlciBvciBkb2VzIG5vdCBleGlzdCB5ZXQuXG5cdFx0XHRcdFx0XHRcdHZhciBjID0gY29udHJvbHMuY29sbGVjdGlvbnNbIG5hbWUgXS5hZGQoY29udHJvbE5hbWUpO1xuXHRcdFx0XHRcdFx0XHRpZiAoYyAhPSBudWxsKSB7XG5cdFx0XHRcdFx0XHRcdFx0cm93RWxlbWVudC5hcHBlbmQoYyk7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKGNvbnRyb2xOYW1lID09IENfVElNRUxJTkUpXG5cdFx0XHRcdFx0XHRcdFx0XHRoYXNUaW1lbGluZSA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUud2FybignQ2Fubm90IGNyZWF0ZSAnICsgY29udHJvbE5hbWUgKyAnIGNvbnRyb2wgZm9yIGNvbGxlY3Rpb24gJyArIG5hbWUgKyAnLicpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmICghaGFzVGltZWxpbmUpXG5cdFx0XHRcdFx0XHRyb3dFbGVtZW50LmNzcygnd2lkdGgnLCAnMXB4Jyk7XG5cblx0XHRcdFx0XHRyb3dFbGVtZW50LmZpbmQoJy5kaXZpZGVyICsgLmRpdmlkZXInKS5yZW1vdmUoKTtcblxuXHRcdFx0XHRcdGNvbnRhaW5lci5hcHBlbmQocm93RWxlbWVudCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0dmFyIGluaXREb20gPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRsZXQgdmlkZW9Db250YWluZXI7XG5cdFx0XHRsZXQgaWNvbiA9IG5ldyBJY29uKCdwbGF5Jyk7XG5cdFx0XHRvdmVybGF5ID0gJCgnPGRpdiAvPicpXG5cdFx0XHRcdC5hZGRDbGFzcygncGxheS1vdmVybGF5Jylcblx0XHRcdFx0LmFwcGVuZChpY29uLmVsZW1lbnQpO1xuXHRcdFx0dmlkZW9Db250YWluZXIgPSAkKCc8ZGl2IC8+Jylcblx0XHRcdFx0LmFkZENsYXNzKCdsZXBsYXllci12aWRlbycpXG5cdFx0XHRcdC5hcHBlbmQob3ZlcmxheSk7XG5cdFx0XHRjb250YWluZXIgPSAkKCc8ZGl2IC8+Jylcblx0XHRcdFx0LmFkZENsYXNzKCdsZXBsYXllci1jb250YWluZXInKVxuXHRcdFx0XHQuYXBwZW5kKHZpZGVvQ29udGFpbmVyKVxuXHRcdFx0XHQuYXR0cigndGFiaW5kZXgnLCAwKVxuXHRcdFx0XHQuY3NzKCd3aWR0aCcsIGVsZW1lbnQud2lkdGgoKSArICdweCcpO1xuXG5cdFx0XHRlbGVtZW50LmJlZm9yZShjb250YWluZXIpO1xuXHRcdFx0dmlkZW9Db250YWluZXIuYXBwZW5kKGVsZW1lbnQpO1xuXHRcdFx0b3ZlcmxheS5vbih7XG5cdFx0XHRcdCdjbGljaycgICAgOiAoZSkgPT4geyBlbGVtZW50LnRyaWdnZXIoJ2NsaWNrJyk7IH0sXG5cdFx0XHRcdCdkYmxjbGljaycgOiAoZSkgPT4geyBlbGVtZW50LnRyaWdnZXIoJ2RibGNsaWNrJyk7IH1cblx0XHRcdH0pO1xuXHRcdH07XG5cblx0XHR2YXIgaW5pdEhvdEtleXMgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdGxldCBpc0tleUJpbmRpbmcgPSAoZSwgYmluZGluZykgPT4ge1xuXHRcdFx0XHRyZXR1cm4gKChlLndoaWNoID09PSBiaW5kaW5nLmtleSkgfHwgKGUua2V5ID09PSBiaW5kaW5nLmtleSkpICYmXG5cdFx0XHRcdFx0XHQoISFiaW5kaW5nLnNoaWZ0S2V5ID09IGUuc2hpZnRLZXkpICYmXG5cdFx0XHRcdFx0XHQoISFiaW5kaW5nLmN0cmxLZXkgPT0gZS5jdHJsS2V5KVxuXHRcdFx0fVxuXG5cdFx0XHQkKGNvbnRhaW5lcikuYmluZCgna2V5ZG93bi5sZXBsYXllci5ob3RrZXknLCAoZSkgPT4ge1xuXHRcdFx0XHRsZXQgX2lzRm9jdXNlZCA9IGlzRm9jdXNlZCgpO1xuXHRcdFx0XHRpZiAoX2lzRm9jdXNlZCkge1xuXHRcdFx0XHRcdCQuZWFjaChvcHRpb25zLmtleUJpbmRpbmcsIChhY3Rpb24sIGJpbmRpbmcpID0+IHtcblx0XHRcdFx0XHRcdGlmKCBpc0tleUJpbmRpbmcoZSwgYmluZGluZykgKSB7XG5cdFx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0YmluZGluZy5mbih2aWRlbyk7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdH07XG5cblx0XHR2YXIgaW5pdE9wdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRsZXQgaGVpZ2h0LCB3aWR0aCwgcG9zdGVyLCBhdHRycywgcHJlbG9hZDtcblx0XHRcdGVsZW1lbnQucmVtb3ZlQXR0cignY29udHJvbHMnKTtcblxuXHRcdFx0aGVpZ2h0ID0gZWxlbWVudC5hdHRyKCdoZWlnaHQnKTtcblx0XHRcdGlmIChoZWlnaHQpIHtcblx0XHRcdFx0b3B0aW9ucy5oZWlnaHQgPSBoZWlnaHQgKyAncHgnO1xuXHRcdFx0XHRlbGVtZW50LnJlbW92ZUF0dHIoJ2hlaWdodCcpO1xuXHRcdFx0fVxuXHRcdFx0ZWxlbWVudC5jc3MoJ2hlaWdodCcsIG9wdGlvbnMuaGVpZ2h0KTtcblxuXHRcdFx0d2lkdGggPSBlbGVtZW50LmF0dHIoJ3dpZHRoJyk7XG5cdFx0XHRpZiAod2lkdGgpIHtcblx0XHRcdFx0b3B0aW9ucy53aWR0aCA9IHdpZHRoICsgJ3B4Jztcblx0XHRcdFx0ZWxlbWVudC5yZW1vdmVBdHRyKCd3aWR0aCcpO1xuXHRcdFx0fVxuXHRcdFx0ZWxlbWVudC5jc3MoJ3dpZHRoJywgb3B0aW9ucy53aWR0aCk7XG5cblx0XHRcdHBvc3RlciA9IGVsZW1lbnQuYXR0cigncG9zdGVyJyk7XG5cdFx0XHRpZiAocG9zdGVyKVxuXHRcdFx0XHRvcHRpb25zLnBvc3RlciA9IHBvc3Rlcjtcblx0XHRcdGVsc2UgaWYgKG9wdGlvbnMucG9zdGVyKVxuXHRcdFx0XHRlbGVtZW50LmF0dHIoJ3Bvc3RlcicsIG9wdGlvbnMucG9zdGVyKTtcblxuXHRcdFx0YXR0cnMgPSBbICdhdXRvcGxheScsICdsb29wJywgJ211dGVkJyBdO1xuXHRcdFx0YXR0cnMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuXHRcdFx0XHR2YXIgYSA9IGVsZW1lbnQuYXR0cihpdGVtKTtcblx0XHRcdFx0aWYgKGEpIHtcblx0XHRcdFx0XHRvcHRpb25zWyBpdGVtIF0gPSB0cnVlO1xuXHRcdFx0XHR9IGVsc2UgaWYgKG9wdGlvbnNbIGl0ZW0gXSkge1xuXHRcdFx0XHRcdGVsZW1lbnQuYXR0cihpdGVtLCAnJyk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZWxlbWVudC5yZW1vdmVBdHRyKGl0ZW0pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsZW1lbnQucHJvcChpdGVtLCBvcHRpb25zWyBpdGVtIF0pO1xuXHRcdFx0fSlcblxuXHRcdFx0cHJlbG9hZCA9IGVsZW1lbnQuYXR0cigncHJlbG9hZCcpO1xuXHRcdFx0aWYgKHByZWxvYWQpIHtcblx0XHRcdFx0cHJlbG9hZCA9IHByZWxvYWQudG9Mb3dlckNhc2UoKTtcblx0XHRcdFx0aWYgKHByZWxvYWQgPT0gJ25vbmUnIHx8IHByZWxvYWQgPT0gJ21ldGFkYXRhJylcblx0XHRcdFx0XHRvcHRpb25zLnByZWxvYWQgPSBwcmVsb2FkO1xuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0b3B0aW9ucy5wcmVsb2FkID0gJ2F1dG8nO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAob3B0aW9ucy5zb3VyY2VzKSB7XG5cdFx0XHRcdGlmIChBcnJheS5pc0FycmF5KG9wdGlvbnMuc291cmNlcykpIHtcblx0XHRcdFx0XHRvcHRpb25zLnNvdXJjZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuXHRcdFx0XHRcdFx0bGV0IHNvdXJjZSA9ICQoJzxzb3VyY2UgLz4nKTtcblx0XHRcdFx0XHRcdGlmICh0eXBlb2YgaXRlbSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0XHRcdFx0c291cmNlLmF0dHIoJ3NyYycsIGl0ZW0pXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRzb3VyY2UuYXR0cignc3JjJywgaXRlbS5zcmMpXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRzb3VyY2UuYXR0cigndGl0bGUnLCBpdGVtLnRpdGxlIHx8ICdkZWZhdWx0Jyk7XG5cdFx0XHRcdFx0XHRlbGVtZW50LmFwcGVuZChzb3VyY2UpO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuc291cmNlcyA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0XHRlbGVtZW50LmF0dHIoJ3NyYycsIG9wdGlvbnMuc291cmNlcylcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0ZWxlbWVudC5hdHRyKCdwcmVsb2FkJywgb3B0aW9ucy5wcmVsb2FkKTtcblx0XHR9O1xuXG5cdFx0dmFyIHNlY29uZHNUb1RpbWUgPSBmdW5jdGlvbiAoc2Vjb25kcykge1xuXHRcdFx0dmFyIGggPSBNYXRoLmZsb29yKHNlY29uZHMgLyAzNjAwKTtcblx0XHRcdHZhciBtID0gTWF0aC5mbG9vcihzZWNvbmRzICUgMzYwMCAvIDYwKTtcblx0XHRcdHZhciBzID0gTWF0aC5mbG9vcihzZWNvbmRzICUgMzYwMCAlIDYwKTtcblx0XHRcdHZhciBvdXQgPSAnJztcblx0XHRcdGlmIChoID4gMClcblx0XHRcdFx0b3V0ID0gaCArICc6Jztcblx0XHRcdGlmIChtIDwgMTApXG5cdFx0XHRcdG91dCArPSAnMCc7XG5cdFx0XHRvdXQgKz0gbSArICc6Jztcblx0XHRcdGlmIChzIDwgMTApXG5cdFx0XHRcdG91dCArPSAnMCc7XG5cdFx0XHRvdXQgKz0gcztcblx0XHRcdHJldHVybiBvdXQ7XG5cdFx0fTtcblxuXG5cdFx0dmFyIGlzRm9jdXNlZCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGxldCBmb2N1c2VkID0gJChjb250YWluZXIpLmZpbmQoJzpmb2N1cycpO1xuXHRcdFx0cmV0dXJuIChmb2N1c2VkLmxlbmd0aCA+IDApIHx8ICQoY29udGFpbmVyKS5pcygnOmZvY3VzJyk7XG5cdFx0fVxuXG5cblx0XHRpbml0KCk7XG5cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdHdpbmRvdy4kLmZuLmxlUGxheWVyID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblx0XHRyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBuZXcgUGxheWVyKCQodGhpcyksIG9wdGlvbnMpO1xuXHRcdH0pO1xuXHR9O1xufShqUXVlcnkpKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNvdXJjZS9qcy9sZS1wbGF5ZXIuZXM2LmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQU9BO0FBQ0E7QUFJQTtBQUxBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUF6Q0E7QUF2Q0E7QUFDQTs7Ozs7O0FBZEE7QUE0R0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBakhBO0FBQUE7QUFBQTtBQXNIQTtBQU1BO0FBNUhBO0FBQUE7QUFBQTtBQThIQTtBQUNBO0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBeEJBO0FBNEJBO0FBQ0E7Ozs7O0FBaEtBO0FBQUE7QUFBQTtBQXFLQTtBQU1BO0FBM0tBO0FBQUE7QUFBQTtBQTZLQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBZEE7QUFnQkE7QUF4TUE7QUFBQTtBQUFBO0FBMk1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBak5BO0FBQUE7QUFBQTtBQW9OQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBdk9BO0FBQUE7QUFBQTtBQTRPQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFsUEE7QUFDQTtBQURBO0FB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O0FBQ0E7QUFDQTtBQUNBO0FBNXZDQTtBQUFBO0FBQUE7QUErdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFud0NBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQXl5Q0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQW56Q0E7QUFBQTtBQUFBO0FBb3pDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXp6Q0E7QUE0ekNBO0FBQ0E7QUE3ekNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUErekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Iiwic291cmNlUm9vdCI6IiJ9