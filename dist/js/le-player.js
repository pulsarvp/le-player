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

			var options = $.extend(true, {
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
						if (this._video.readyState < 2) {
							overlay.hide();
							_showNotification('Error!');
							return;
						}
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

						(_$$trigger = $(this._video).trigger).call.apply(_$$trigger, [$(this._video), eventName + '.leplayer'].concat(args));
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
						this.trigger('loadedmetadata');
					}
				}, {
					key: '_initHtmlEvents',
					value: function _initHtmlEvents() {
						var _this5 = this;

						var mediaElement = $(this._video);
						var timerId = null;

						mediaElement.on({

							'timeupdate': function timeupdate() {
								controls.moveTimeMarker();
							},

							'ended': function ended() {
								_this5.pause();
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

					var _self = _this17,
					    duration = video.duration;

					_this17.drag = false;

					_this17.current = new ControlText('time-current');
					_this17.total = new ControlText('time-total');

					_this17.marker = $('<div />').addClass('time-marker');

					_this17.markerShadow = $('<div />').addClass('time-marker shadow').append().hide();

					_this17.markerShadowTime = $('<div />').addClass('time');
					_this17.markerTime = $('<div />').addClass('time').hide();
					_this17.played = $('<div />').addClass('time-played');
					_this17.current.text = '00:00';
					_this17.line = $('<div />').addClass('timeline').append(_this17.marker.append(_this17.markerTime)).append(_this17.markerShadow.append(_this17.markerShadowTime)).append(_this17.played).on({
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
					return _this17;
				}

				_createClass(TimelineControl, [{
					key: 'getPosition',
					value: function getPosition(x) {
						return (x - this.line.offset().left) / this.line.width();
					}
				}, {
					key: 'move',
					value: function move() {
						var percent = (video.currentTime / video.duration * 100).toFixed(2);
						if (percent == 100) {
							controls.pause();
						}
						this.marker.css('left', percent + '%');
						this.played.css('width', percent + '%');
						this.current.text = secondsToTime(video.currentTime);
					}
				}]);

				return TimelineControl;
			}(Control);

			var VolumeControl = function (_Control9) {
				_inherits(VolumeControl, _Control9);

				function VolumeControl() {
					_classCallCheck(this, VolumeControl);

					var _this18 = _possibleConstructorReturn(this, Object.getPrototypeOf(VolumeControl).call(this, 'volume-control', 'volume-down'));

					var _self = _this18;

					_this18.marker = $('<div/>').addClass('volume-marker');

					_this18.active = $('<div/>').addClass('volume-active');

					_this18.line = $('<div/>').addClass('volume-line').append(_this18.active).append(_this18.marker).on('click', function (e) {
						if (_this18.drag) return;
						var p = _this18.getPosition(e.pageY);
						if (p >= 0 && p <= 1) {
							video.volume = 1 - p;
						}
					});

					_this18.element.addClass('control-container').append($('<div />').addClass('control-inner volume-slider').append(_this18.line));

					_this18.drag = false;

					_this18.marker.on('mousedown', function (e) {
						if (e.which != 1) return;
						_this18.drag = true;
					});

					$(document).on({
						'mousemove': function mousemove(e) {
							if (!_this18.drag) return;
							var p = _this18.getPosition(e.pageY);
							if (p >= 0 && p <= 1) {
								video.volume = 1 - p;
							}
						},

						'mouseup': function mouseup(e) {
							_this18.drag = false;
						}
					});
					return _this18;
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
				initOptions();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGUtcGxheWVyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIDRhYmUyNGQ4NDJhY2YzZDhjMmZjIiwid2VicGFjazovLy9zb3VyY2UvanMvbGUtcGxheWVyLmVzNi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDRhYmUyNGQ4NDJhY2YzZDhjMmZjXG4gKiovIiwiKGZ1bmN0aW9uICgkKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHRsZXQgUGxheWVyID0gZnVuY3Rpb24gKGVsZW1lbnQsIG9wdHMpIHtcblx0XHRjb25zdCBDX0JBQ0tXQVJEID0gJ2JhY2t3YXJkJztcblx0XHRjb25zdCBDX0RJVklERVIgPSAnZGl2aWRlcic7XG5cdFx0Y29uc3QgQ19ET1dOTE9BRCA9ICdkb3dubG9hZCc7XG5cdFx0Y29uc3QgQ19GT1JXQVJEID0gJ2ZvcndhcmQnO1xuXHRcdGNvbnN0IENfRlVMTFNDUkVFTiA9ICdmdWxsc2NyZWVuJztcblx0XHRjb25zdCBDX1BMQVkgPSAncGxheSc7XG5cdFx0Y29uc3QgQ19SQVRFID0gJ3JhdGUnO1xuXHRcdGNvbnN0IENfU09VUkNFID0gJ3NvdXJjZSc7XG5cdFx0Y29uc3QgQ19TVUJUSVRMRSA9ICdzdWJ0aXRsZSc7XG5cdFx0Y29uc3QgQ19USU1FTElORSA9ICd0aW1lbGluZSc7XG5cdFx0Y29uc3QgQ19WT0xVTUUgPSAndm9sdW1lJztcblxuXHRcdHZhciBvcHRpb25zID0gJC5leHRlbmQodHJ1ZSwge1xuXHRcdFx0YXV0b3BsYXkgOiBmYWxzZSxcblx0XHRcdGhlaWdodCA6ICdhdXRvJyxcblx0XHRcdGxvb3AgOiBmYWxzZSxcblx0XHRcdG11dGVkIDogZmFsc2UsXG5cdFx0XHRwcmVsb2FkIDogJ21ldGFkYXRhJyxcblx0XHRcdHBvc3RlciA6IG51bGwsXG5cdFx0XHRzdmdQYXRoIDogJy4uL2Rpc3Qvc3ZnL3N2Zy1kZWZzLnN2ZycsXG5cdFx0XHR3aWR0aCA6ICdhdXRvJyxcblx0XHRcdGZ1bGxzY3JlZW4gOiB7XG5cdFx0XHRcdGhpZGVUaW1lbGluZVRpbWUgOiA3MDAwXG5cdFx0XHR9LFxuXHRcdFx0cmF0ZSA6IHtcblx0XHRcdFx0c3RlcCA6IDAuMjUsXG5cdFx0XHRcdG1pbiA6IDAuNSxcblx0XHRcdFx0bWF4IDogNC4wLFxuXHRcdFx0XHQnZGVmYXVsdCcgOiAxXG5cdFx0XHR9LFxuXHRcdFx0cGxheWJhY2sgOiB7XG5cdFx0XHRcdHN0ZXAgOiB7XG5cdFx0XHRcdFx0c2hvcnQgOiA1LFxuXHRcdFx0XHRcdG1lZGl1bSA6IDMwLFxuXHRcdFx0XHRcdGxvbmcgOiA2MFxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0Y29udHJvbHMgOiB7XG5cdFx0XHRcdGNvbW1vbiA6IFtcblx0XHRcdFx0XHRbICdwbGF5JywgJ3ZvbHVtZScsICdkaXZpZGVyJywgJ3RpbWVsaW5lJywgJ2RpdmlkZXInLCAnZnVsbHNjcmVlbicgXSxcblx0XHRcdFx0XHRbICdyYXRlJywgJ2RpdmlkZXInLCAnYmFja3dhcmQnLCAnZGl2aWRlcicsICdzb3VyY2UnLCAnZGl2aWRlcicsICdzdWJ0aXRsZScsICdkaXZpZGVyJywgJ2Rvd25sb2FkJyBdXG5cdFx0XHRcdF0sXG5cdFx0XHRcdGZ1bGxzY3JlZW4gOiBbXG5cdFx0XHRcdFx0WyAncGxheScsICd2b2x1bWUnLCAnZGl2aWRlcicsICd0aW1lbGluZScsICdkaXZpZGVyJywgJ3JhdGUnLCAnZGl2aWRlcicsICdiYWNrd2FyZCcsICdkaXZpZGVyJywgJ3NvdXJjZScsICdkaXZpZGVyJywgJ3N1YnRpdGxlJywgJ2RpdmlkZXInLCAnZG93bmxvYWQnLCAnZGl2aWRlcicsICdmdWxsc2NyZWVuJyBdXG5cdFx0XHRcdF1cblx0XHRcdH0sXG5cdFx0XHR2b2x1bWUgOiB7XG5cdFx0XHRcdGRlZmF1bHQgOiAwLjQsXG5cdFx0XHRcdG11dGVsaW1pdCA6IDAuMDUsXG5cdFx0XHRcdHN0ZXAgOiAwLjFcblx0XHRcdH0sXG5cdFx0XHRrZXlCaW5kaW5nIDoge1xuXHRcdFx0XHRwbGF5IDoge1xuXHRcdFx0XHRcdGtleSA6IDMyLFxuXHRcdFx0XHRcdGZuIDogKHZpZGVvKSA9PiB7XG5cdFx0XHRcdFx0XHR2aWRlby50b2dnbGVQbGF5KCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRiYWNrd2FyZE1lZGl1bSA6IHtcblx0XHRcdFx0XHRrZXkgOiAzNyxcblx0XHRcdFx0XHRmbiA6ICh2aWRlbykgPT4ge1xuXHRcdFx0XHRcdFx0dmlkZW8uY3VycmVudFRpbWUgLT0gb3B0aW9ucy5wbGF5YmFjay5zdGVwLm1lZGl1bTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGZvcndhcmRNZWRpdW0gOiB7XG5cdFx0XHRcdFx0a2V5IDogMzksXG5cdFx0XHRcdFx0Zm4gOiAodmlkZW8pID0+IHtcblx0XHRcdFx0XHRcdHZpZGVvLmN1cnJlbnRUaW1lICs9IG9wdGlvbnMucGxheWJhY2suc3RlcC5tZWRpdW07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRiYWNrd2FyZFNob3J0IDoge1xuXHRcdFx0XHRcdHNoaWZ0S2V5IDogdHJ1ZSxcblx0XHRcdFx0XHRrZXkgOiAzNyxcblx0XHRcdFx0XHRmbiA6ICh2aWRlbykgPT4ge1xuXHRcdFx0XHRcdFx0dmlkZW8uY3VycmVudFRpbWUgLT0gb3B0aW9ucy5wbGF5YmFjay5zdGVwLnNob3J0O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0Zm9yd2FyZFNob3J0IDoge1xuXHRcdFx0XHRcdHNoaWZ0S2V5IDogdHJ1ZSxcblx0XHRcdFx0XHRrZXkgOiAzOSxcblx0XHRcdFx0XHRmbiA6ICh2aWRlbykgPT4ge1xuXHRcdFx0XHRcdFx0dmlkZW8uY3VycmVudFRpbWUgKz0gb3B0aW9ucy5wbGF5YmFjay5zdGVwLnNob3J0O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblxuXHRcdFx0XHR2b2x1bWVVcCA6IHtcblx0XHRcdFx0XHRrZXkgOiAzOCxcblx0XHRcdFx0XHRmbiA6ICh2aWRlbykgPT4ge1xuXHRcdFx0XHRcdFx0dmlkZW8udm9sdW1lICs9IG9wdGlvbnMudm9sdW1lLnN0ZXA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXG5cdFx0XHRcdHZvbHVtZURvd24gOiB7XG5cdFx0XHRcdFx0a2V5IDogNDAsXG5cdFx0XHRcdFx0Zm4gOiAodmlkZW8pID0+IHtcblx0XHRcdFx0XHRcdHZpZGVvLnZvbHVtZSAtPSBvcHRpb25zLnZvbHVtZS5zdGVwO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdH1cblx0XHR9LCBvcHRzKTtcblxuXHRcdC8qKlxuXHRcdCAqIFRoaXMgY2xhc3MgbWFuYWdlcyBGdWxsU2NyZWVuIEFQSS5cblx0XHQgKiBAVE9ETzogYWRkIGZ1bGxzY3JlZW5lcnJvciBoYW5kbGVyLlxuXHRcdCAqL1xuXHRcdGNsYXNzIEZ1bGxzY3JlZW4ge1xuXG5cdFx0XHRjb25zdHJ1Y3RvciAoKSB7XG5cdFx0XHRcdHRoaXMuX2NvbGxlY3Rpb24gPSBjb250cm9scy5mdWxsc2NyZWVuO1xuXHRcdFx0XHR0aGlzLl9oaWRlVGltZW91dCA9IG51bGw7XG5cdFx0XHRcdHRoaXMuZnVsbHNjcmVlbkVuYWJsZWQgPSBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gV2hldGhlciBicm93c2VyIHN1cHBvcnRzIGZ1bGxzY3JlZW4gbW9kZS5cblx0XHRcdCAqL1xuXHRcdFx0ZW5hYmxlZCAoKSB7XG5cdFx0XHRcdHJldHVybiAhIShkb2N1bWVudC5mdWxsc2NyZWVuRW5hYmxlZFxuXHRcdFx0XHRcdHx8IGRvY3VtZW50Lm1vekZ1bGxTY3JlZW5FbmFibGVkXG5cdFx0XHRcdFx0fHwgZG9jdW1lbnQubXNGdWxsc2NyZWVuRW5hYmxlZFxuXHRcdFx0XHRcdHx8IGRvY3VtZW50LndlYmtpdFN1cHBvcnRzRnVsbHNjcmVlblxuXHRcdFx0XHRcdHx8IGRvY3VtZW50LndlYmtpdEZ1bGxzY3JlZW5FbmFibGVkXG5cdFx0XHRcdFx0fHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8nKS53ZWJraXRSZXF1ZXN0RnVsbFNjcmVlbik7XG5cdFx0XHR9XG5cblx0XHRcdGluaXQgKCkge1xuXHRcdFx0XHRpZiAoIXRoaXMuZW5hYmxlZCgpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBGdWxsc2NyZWVuIGNoYW5nZSBoYW5kbGVycy5cblx0XHRcdFx0JChkb2N1bWVudCkub24oe1xuXG5cdFx0XHRcdFx0J2Z1bGxzY3JlZW5jaGFuZ2UnIDogKGUpID0+IHtcblx0XHRcdFx0XHRcdHRoaXMudG9nZ2xlRWxlbWVudHMoISEoZG9jdW1lbnQuZnVsbFNjcmVlbiB8fCBkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCkpO1xuXHRcdFx0XHRcdH0sXG5cblx0XHRcdFx0XHQnd2Via2l0ZnVsbHNjcmVlbmNoYW5nZScgOiAoZSkgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy50b2dnbGVFbGVtZW50cyghIWRvY3VtZW50LndlYmtpdElzRnVsbFNjcmVlbik7XG5cdFx0XHRcdFx0fSxcblxuXHRcdFx0XHRcdCdtb3pmdWxsc2NyZWVuY2hhbmdlJyA6IChlKSA9PiB7XG5cdFx0XHRcdFx0XHR0aGlzLnRvZ2dsZUVsZW1lbnRzKCEhZG9jdW1lbnQubW96RnVsbFNjcmVlbik7XG5cdFx0XHRcdFx0fSxcblxuXHRcdFx0XHRcdCdtc2Z1bGxzY3JlZW5jaGFuZ2UnIDogKGUpID0+IHtcblx0XHRcdFx0XHRcdHRoaXMudG9nZ2xlRWxlbWVudHMoISFkb2N1bWVudC5tc0Z1bGxzY3JlZW5FbGVtZW50KTtcblx0XHRcdFx0XHR9LFxuXG5cdFx0XHRcdFx0J3dlYmtpdGJlZ2luZnVsbHNjcmVlbicgOiAoZSkgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy50b2dnbGVFbGVtZW50cyh0cnVlKVxuXHRcdFx0XHRcdH0sXG5cblx0XHRcdFx0XHQnd2Via2l0ZW5kZnVsbHNjcmVlbicgOiAoZSkgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy50b2dnbGVFbGVtZW50cyhmYWxzZSlcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXG5cblx0XHRcdH1cblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gV2hldGhlciBicm93c2VyIGlzIGluIGZ1bGxzY3JlZW4gbW9kZS5cblx0XHRcdCAqL1xuXHRcdFx0aXMgKCkge1xuXHRcdFx0XHRyZXR1cm4gISEoZG9jdW1lbnQuZnVsbFNjcmVlblxuXHRcdFx0XHRcdHx8IGRvY3VtZW50LndlYmtpdElzRnVsbFNjcmVlblxuXHRcdFx0XHRcdHx8IGRvY3VtZW50Lm1vekZ1bGxTY3JlZW5cblx0XHRcdFx0XHR8fCBkb2N1bWVudC5tc0Z1bGxzY3JlZW5FbGVtZW50XG5cdFx0XHRcdFx0fHwgZG9jdW1lbnQuZnVsbHNjcmVlbkVsZW1lbnRcblx0XHRcdFx0XHR8fCB0aGlzLmZ1bGxzY3JlZW5FbmFibGVkKTtcblx0XHRcdH1cblxuXHRcdFx0c2hvd0VsZW1lbnRzICgpIHtcblx0XHRcdFx0Y29udGFpbmVyLmFkZENsYXNzKCdmdWxsc2NyZWVuJyk7XG5cdFx0XHRcdGNvbnRyb2xzLmZ1bGxzY3JlZW4uc2hvdygpO1xuXHRcdFx0XHRjb250cm9scy5jb21tb24uaGlkZSgpO1xuXHRcdFx0XHRjb250cm9scy5taW5pLmhpZGUoKTtcblxuXHRcdFx0XHRjbGVhclRpbWVvdXQodGhpcy5faGlkZVRpbWVvdXQpO1xuXHRcdFx0XHR0aGlzLl9oaWRlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdHRoaXMuX2NvbGxlY3Rpb24uZWxlbWVudC5oaWRlKCk7XG5cdFx0XHRcdH0sIG9wdGlvbnMuZnVsbHNjcmVlbi5oaWRlVGltZWxpbmVUaW1lKTtcblxuXHRcdFx0XHQkKGNvbnRhaW5lcikub24oe1xuXHRcdFx0XHRcdCdtb3VzZW1vdmUubGVwbGF5ZXIuZnVsbHNjcmVlbi1oaWRlLXRpbWVsaW5lJyA6IChlKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoISQoZS5jdXJyZW50VGFyZ2V0KS5oYXNDbGFzcygnZnVsbHNjcmVlbicpKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0XHRjbGVhclRpbWVvdXQodGhpcy5faGlkZVRpbWVvdXQpO1xuXHRcdFx0XHRcdFx0dGhpcy5fY29sbGVjdGlvbi5lbGVtZW50LnNob3coKTtcblx0XHRcdFx0XHRcdHRoaXMuX2hpZGVUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHRoaXMuX2NvbGxlY3Rpb24uZWxlbWVudC5oaWRlKCk7XG5cdFx0XHRcdFx0XHR9LCBvcHRpb25zLmZ1bGxzY3JlZW4uaGlkZVRpbWVsaW5lVGltZSk7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHQnbW91c2VsZWF2ZS5sZXBsYXllci5mdWxsc2NyZWVuLWhpZGUtdGltZWxpbmUnIDogKGUpID0+IHtcblx0XHRcdFx0XHRcdGlmICghJChlLmN1cnJlbnRUYXJnZXQpLmhhc0NsYXNzKCdmdWxsc2NyZWVuJykpIHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHRcdGNsZWFyVGltZW91dCh0aGlzLl9oaWRlVGltZW91dCk7XG5cdFx0XHRcdFx0XHR0aGlzLl9jb2xsZWN0aW9uLmVsZW1lbnQuaGlkZSgpO1xuXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXG5cdFx0XHRoaWRlRWxlbWVudHMgKCkge1xuXHRcdFx0XHRjb250YWluZXIucmVtb3ZlQ2xhc3MoJ2Z1bGxzY3JlZW4nKTtcblx0XHRcdFx0Y29udHJvbHMuZnVsbHNjcmVlbi5oaWRlKCk7XG5cdFx0XHRcdGNvbnRyb2xzLmNvbW1vbi5zaG93KCk7XG5cdFx0XHRcdGNvbnRyb2xzLm1pbmkuaGlkZSgpO1xuXHRcdFx0XHRjbGVhclRpbWVvdXQodGhpcy5faGlkZVRpbWVvdXQpO1xuXHRcdFx0XHQkKGNvbnRhaW5lcikub2ZmKCcubGVwbGF5ZXIuZnVsbHNjcmVlbi1oaWRlLXRpbWVsaW5lJyk7XG5cdFx0XHR9XG5cblx0XHRcdHRvZ2dsZSAoKSB7XG5cdFx0XHRcdGxldCBjb250YWluZXJFbCA9IGNvbnRhaW5lclsgMCBdO1xuXHRcdFx0XHRpZiAodGhpcy5pcygpKSB7XG5cdFx0XHRcdFx0aWYgKGRvY3VtZW50LmV4aXRGdWxsc2NyZWVuKSAgICAgICAgICAgICAgICBkb2N1bWVudC5leGl0RnVsbHNjcmVlbigpO1xuXHRcdFx0XHRcdGVsc2UgaWYgKGRvY3VtZW50Lm1vekNhbmNlbEZ1bGxTY3JlZW4pICAgICAgZG9jdW1lbnQubW96Q2FuY2VsRnVsbFNjcmVlbigpO1xuXHRcdFx0XHRcdGVsc2UgaWYgKGRvY3VtZW50LndlYmtpdENhbmNlbEZ1bGxTY3JlZW4pICAgZG9jdW1lbnQud2Via2l0Q2FuY2VsRnVsbFNjcmVlbigpO1xuXHRcdFx0XHRcdGVsc2UgaWYgKGRvY3VtZW50Lm1zRXhpdEZ1bGxzY3JlZW4pICAgICAgICAgZG9jdW1lbnQubXNFeGl0RnVsbHNjcmVlbigpO1xuXHRcdFx0XHRcdGVsc2UgaWYgKGRvY3VtZW50LndlYmtpdEV4aXRGdWxsc2NyZWVuKSAgICAgZG9jdW1lbnQud2Via2l0RXhpdEZ1bGxzY3JlZW4oKTtcblx0XHRcdFx0XHR0aGlzLmhpZGVFbGVtZW50cygpOyAvLyBAVE9ETzogbWFrZSB0aGlzIG9ubHkgaWYgZnVsbHNjcmVlbiBmaXJlZC5cblx0XHRcdFx0XHR0aGlzLmZ1bGxzY3JlZW5FbmFibGVkID0gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0aWYgKGNvbnRhaW5lckVsLnJlcXVlc3RGdWxsU2NyZWVuKSAgICAgICAgICAgIGNvbnRhaW5lckVsLnJlcXVlc3RGdWxsU2NyZWVuKCk7XG5cdFx0XHRcdFx0ZWxzZSBpZiAoY29udGFpbmVyRWwud2Via2l0UmVxdWVzdEZ1bGxTY3JlZW4pIGNvbnRhaW5lckVsLndlYmtpdFJlcXVlc3RGdWxsU2NyZWVuKCk7XG5cdFx0XHRcdFx0ZWxzZSBpZiAoY29udGFpbmVyRWwubW96UmVxdWVzdEZ1bGxTY3JlZW4pICAgIGNvbnRhaW5lckVsLm1velJlcXVlc3RGdWxsU2NyZWVuKCk7XG5cdFx0XHRcdFx0ZWxzZSBpZiAoY29udGFpbmVyRWwubXNFeGl0RnVsbHNjcmVlbikgICAgICAgIGNvbnRhaW5lckVsLm1zUmVxdWVzdEZ1bGxzY3JlZW4oKTtcblx0XHRcdFx0XHR0aGlzLnNob3dFbGVtZW50cygpOyAvLyBAVE9ETzogbWFrZSB0aGlzIG9ubHkgaWYgZnVsbHNjcmVlbiBmaXJlZC5cblx0XHRcdFx0XHR0aGlzLmZ1bGxzY3JlRW5hYmxlZCA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBVcGRhdGUgRE9NIHN0cnVjdHVyZSBhY2NvcmRpbmcgdG8gY3VycmVudCBzdGF0ZS5cblx0XHRcdCAqL1xuXHRcdFx0dG9nZ2xlRWxlbWVudHMgKHNob3cpIHtcblx0XHRcdFx0aWYgKCEhc2hvdykge1xuXHRcdFx0XHRcdHRoaXMuc2hvd0VsZW1lbnRzKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5oaWRlRWxlbWVudHMoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGNsYXNzIFZpZGVvIHtcblx0XHRcdGNvbnN0cnVjdG9yIChjdHgpIHtcblx0XHRcdFx0dGhpcy5fY3R4ID0gY3R4O1xuXHRcdFx0XHR0aGlzLl92aWRlbyA9IGN0eFsgMCBdO1xuXHRcdFx0XHR0aGlzLmZ1bGxzY3JlZW4gPSBuZXcgRnVsbHNjcmVlbigpO1xuXHRcdFx0XHR0aGlzLnN1YnRpdGxlcyA9IFtdO1xuXHRcdFx0XHR0aGlzLnBsYXliYWNrUmF0ZSA9IHRoaXMuX3ZpZGVvLnBsYXliYWNrUmF0ZTtcblx0XHRcdH1cblxuXHRcdFx0Z2V0IGN1cnJlbnRUaW1lICgpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuX3ZpZGVvLmN1cnJlbnRUaW1lO1xuXHRcdFx0fVxuXG5cdFx0XHRzZXQgY3VycmVudFRpbWUgKHZhbHVlKSB7XG5cdFx0XHRcdGlmICh2YWx1ZSA+IHRoaXMuZHVyYXRpb24pIHtcblx0XHRcdFx0XHR0aGlzLl92aWRlby5jdXJyZW50VGltZSA9IHRoaXMuZHVyYXRpb25cblx0XHRcdFx0fSBlbHNlIGlmICh2YWx1ZSA8IDAgKSB7XG5cdFx0XHRcdFx0dGhpcy5fdmlkZW8uY3VycmVudFRpbWUgPSAwXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5fdmlkZW8uY3VycmVudFRpbWUgPSB2YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRnZXQgZHVyYXRpb24gKCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5fdmlkZW8uZHVyYXRpb247XG5cdFx0XHR9XG5cblx0XHRcdGdldCBoZWlnaHQgKCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5fdmlkZW8uY2xpZW50SGVpZ2h0O1xuXHRcdFx0fVxuXG5cdFx0XHRnZXQgcmF0ZSAoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLl92aWRlby5wbGF5YmFja1JhdGU7XG5cdFx0XHR9XG5cblx0XHRcdGdldCB3aWR0aCAoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLl92aWRlby5jbGllbnRXaWR0aDtcblx0XHRcdH1cblxuXHRcdFx0c2V0IHJhdGUgKHZhbHVlKSB7XG5cdFx0XHRcdGlmICggdmFsdWUgPD0gb3B0aW9ucy5yYXRlLm1heCAmJiB2YWx1ZSA+PSBvcHRpb25zLnJhdGUubWluICkge1xuXHRcdFx0XHRcdHRoaXMuX3ZpZGVvLnBsYXliYWNrUmF0ZSA9IHZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8qKiBUT0RPOiBDaGFuY2hlIGNvbnRyb2xzLnJhdGUgaW4gZXZlbnQgaGFuZGxlciAqL1xuXHRcdFx0XHRjb250cm9scy5yYXRlID0gdGhpcy5fdmlkZW8ucGxheWJhY2tSYXRlO1xuXHRcdFx0fVxuXG5cdFx0XHRzZXQgc291cmNlICh2YWx1ZSkge1xuXHRcdFx0XHRsZXQgdGltZSA9IHRoaXMuX3ZpZGVvLmN1cnJlbnRUaW1lO1xuXHRcdFx0XHRsZXQgcmF0ZSA9IHRoaXMuX3ZpZGVvLnBsYXliYWNrUmF0ZTtcblx0XHRcdFx0bGV0IHN0b3AgPSAoIXRoaXMuX3ZpZGVvLnBsYXllZCB8fCB0aGlzLl92aWRlby5wYXVzZWQpO1xuXHRcdFx0XHR0aGlzLl9jdHguYXR0cignc3JjJywgdmFsdWUpO1xuXHRcdFx0XHR0aGlzLl92aWRlbyA9IHRoaXMuX2N0eFsgMCBdO1xuXHRcdFx0XHR0aGlzLl92aWRlby5wbGF5YmFja1JhdGUgPSByYXRlO1xuXHRcdFx0XHR0aGlzLl92aWRlby5jdXJyZW50VGltZSA9IHRpbWU7XG5cdFx0XHRcdGlmIChzdG9wKVxuXHRcdFx0XHRcdHRoaXMucGF1c2UoKTtcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdHRoaXMucGxheSgpO1xuXG5cdFx0XHRcdC8vIEBUT0RPIG1ha2UgdGhpcyByaWdodCB3YXlcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0Y29udHJvbHMudG90YWxUaW1lID0gc2Vjb25kc1RvVGltZSh0aGlzLl92aWRlby5kdXJhdGlvbik7XG5cdFx0XHRcdH0sIDEwMCk7XG5cblx0XHRcdH1cblxuXHRcdFx0c2V0IHRyYWNrICh2YWx1ZSkge1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX3ZpZGVvLnRleHRUcmFja3MubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRpZiAodGhpcy5fdmlkZW8udGV4dFRyYWNrc1sgaSBdLmxhbmd1YWdlID09IHZhbHVlKVxuXHRcdFx0XHRcdFx0dGhpcy5fdmlkZW8udGV4dFRyYWNrc1sgaSBdLm1vZGUgPSAnc2hvd2luZyc7XG5cdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0dGhpcy5fdmlkZW8udGV4dFRyYWNrc1sgaSBdLm1vZGUgPSAnaGlkZGVuJztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRnZXQgdm9sdW1lICgpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuX3ZpZGVvLnZvbHVtZTtcblx0XHRcdH1cblxuXHRcdFx0c2V0IHZvbHVtZSAodmFsdWUpIHtcblx0XHRcdFx0aWYgKHZhbHVlID4gMSkge1xuXHRcdFx0XHRcdHRoaXMuX3ZpZGVvLnZvbHVtZSA9IDE7XG5cdFx0XHRcdH0gZWxzZSBpZiAodmFsdWUgPCBvcHRpb25zLnZvbHVtZS5tdXRlbGltaXQpIHtcblx0XHRcdFx0XHR0aGlzLl92aWRlby52b2x1bWUgPSAwO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuX3ZpZGVvLnZvbHVtZSA9IHZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuX3ZpZGVvLm11dGUgPSAodmFsdWUgPCBvcHRpb25zLnZvbHVtZS5tdXRlbGltaXQpO1xuXHRcdFx0XHRjb250cm9scy52b2x1bWUgPSB0aGlzLl92aWRlby52b2x1bWU7XG5cdFx0XHR9XG5cblx0XHRcdGluaXQgKCkge1xuXHRcdFx0XHRsZXQgZGZkID0gJC5EZWZlcnJlZCgpXG5cdFx0XHRcdHRoaXMuX2luaXRTdWJ0aXRsZXMoKTtcblx0XHRcdFx0dGhpcy5faW5pdFZpZGVvKClcblx0XHRcdFx0XHQuZG9uZSgoKSA9PiB7XG5cdFx0XHRcdFx0XHR0aGlzLmZ1bGxzY3JlZW4uaW5pdCgpO1xuXHRcdFx0XHRcdFx0Y29udHJvbHMuaW5pdCgpO1xuXHRcdFx0XHRcdFx0dGhpcy5faW5pdFJhdGUoKTtcblx0XHRcdFx0XHRcdHRoaXMuX2luaXRWb2x1bWUoKTtcblx0XHRcdFx0XHRcdGRmZC5yZXNvbHZlKCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdHRoaXMuX2luaXRDdXN0b21FdmVudHMoKTtcblx0XHRcdFx0dGhpcy5faW5pdEh0bWxFdmVudHMoKTtcblxuXHRcdFx0XHRkZmQubm90aWZ5KCk7XG5cdFx0XHRcdHJldHVybiBkZmQucHJvbWlzZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHR0b2dnbGVQbGF5ICgpIHtcblx0XHRcdFx0aWYgKHRoaXMuX3ZpZGVvLnJlYWR5U3RhdGUgPCAyKSB7XG5cdFx0XHRcdFx0b3ZlcmxheS5oaWRlKCk7XG5cdFx0XHRcdFx0X3Nob3dOb3RpZmljYXRpb24oJ0Vycm9yIScpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIXRoaXMuX3ZpZGVvLnBsYXllZCB8fCB0aGlzLl92aWRlby5wYXVzZWQpIHtcblx0XHRcdFx0XHR0aGlzLnBsYXkoKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLnBhdXNlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0c2VlayAodGltZSkge1xuXHRcdFx0XHR0aGlzLl92aWRlby5jdXJyZW50VGltZSA9IHRpbWU7XG5cdFx0XHR9XG5cblx0XHRcdHBsYXkgKCkge1xuXHRcdFx0XHRvdmVybGF5LmhpZGUoKTtcblx0XHRcdFx0Y29udHJvbHMucGxheSgpO1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5fdmlkZW8ucGxheSgpO1xuXHRcdFx0fVxuXG5cdFx0XHRwYXVzZSAoKSB7XG5cdFx0XHRcdG92ZXJsYXkuc2hvdygpO1xuXHRcdFx0XHRjb250cm9scy5wYXVzZSgpO1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5fdmlkZW8ucGF1c2UoKTtcblx0XHRcdH1cblxuXHRcdFx0dHJpZ2dlciAoZXZlbnROYW1lLCAuLi5hcmdzKSB7XG5cdFx0XHRcdCQodGhpcy5fdmlkZW8pLnRyaWdnZXIuY2FsbCgkKHRoaXMuX3ZpZGVvKSwgYCR7ZXZlbnROYW1lfS5sZXBsYXllcmAsIC4uLmFyZ3MpO1xuXHRcdFx0fVxuXG5cdFx0XHRfaW5pdFJhdGUgKCkge1xuXHRcdFx0XHR0aGlzLnJhdGUgPSBDb29raWUuZ2V0KCdyYXRlJywgb3B0aW9ucy5yYXRlLmRlZmF1bHQpO1xuXHRcdFx0fVxuXG5cdFx0XHRfaW5pdFZvbHVtZSAoKSB7XG5cdFx0XHRcdHRoaXMudm9sdW1lID0gQ29va2llLmdldCgndm9sdW1lJywgb3B0aW9ucy52b2x1bWUuZGVmYXVsdCk7XG5cdFx0XHR9XG5cblx0XHRcdF9pbml0U3VidGl0bGVzICgpIHtcblx0XHRcdFx0bGV0IF9zZWxmID0gdGhpcztcblx0XHRcdFx0dGhpcy5fY3R4LmNoaWxkcmVuKCd0cmFja1traW5kPVwic3VidGl0bGVzXCJdJykuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0bGV0IGxhbmd1YWdlID0gJCh0aGlzKS5hdHRyKCdzcmNsYW5nJyk7XG5cdFx0XHRcdFx0bGV0IHRpdGxlID0gJCh0aGlzKS5hdHRyKCdsYWJlbCcpO1xuXHRcdFx0XHRcdGxldCBzcmMgPSAkKHRoaXMpLmF0dHIoJ3NyYycpO1xuXHRcdFx0XHRcdGlmICh0aXRsZS5sZW5ndGggPiAwICYmIHNyYy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0XHRfc2VsZi5zdWJ0aXRsZXMucHVzaCh7XG5cdFx0XHRcdFx0XHRcdHRpdGxlIDogdGl0bGUsXG5cdFx0XHRcdFx0XHRcdHNyYyA6IHNyYyxcblx0XHRcdFx0XHRcdFx0bGFuZ3VhZ2UgOiBsYW5ndWFnZVxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0X2luaXRWaWRlbyAoKSB7XG5cdFx0XHRcdGxldCBkZmQgPSAkLkRlZmVycmVkKCk7XG5cdFx0XHRcdGlmICh0aGlzLl92aWRlby5yZWFkeVN0YXRlID4gSFRNTE1lZGlhRWxlbWVudC5IQVZFX05PVEhJTkcpIHtcblx0XHRcdFx0XHRkZmQucmVzb2x2ZSgpXG5cdFx0XHRcdFx0dGhpcy5fb25Mb2FkZWRNZXRhRGF0YSgpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCQodGhpcy5fdmlkZW8pLm9uZSgnbG9hZGVkbWV0YWRhdGEnLCAoZSkgPT4ge1xuXHRcdFx0XHRcdFx0ZGZkLnJlc29sdmUoKVxuXHRcdFx0XHRcdFx0dGhpcy5fb25Mb2FkZWRNZXRhRGF0YSgpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGRmZC5ub3RpZnkoKTtcblx0XHRcdFx0cmV0dXJuIGRmZC5wcm9taXNlKClcblx0XHRcdH1cblxuXHRcdFx0X29uTG9hZGVkTWV0YURhdGEgKCkge1xuXHRcdFx0XHRsZXQgX3NlbGYgPSB0aGlzO1xuXG5cdFx0XHRcdGNvbnRhaW5lclxuXHRcdFx0XHRcdC5jc3MoJ3dpZHRoJywgJzEwMCUnKVxuXHRcdFx0XHRcdC5jc3MoJ21heC13aWR0aCcsIHRoaXMuX3ZpZGVvLmNsaWVudFdpZHRoICsgJ3B4Jyk7XG5cblx0XHRcdFx0Ly8gVGhpcyBpcyBnZW5lcmFsbHkgZm9yIEZpcmVmb3ggb25seVxuXHRcdFx0XHQvLyBiZWNhdXNlIGl0IHNvbWVob3cgcmVzZXRzIHRyYWNrIGxpc3Rcblx0XHRcdFx0Ly8gZm9yIHZpZGVvIGVsZW1lbnQgYWZ0ZXIgRE9NIG1hbmlwdWxhdGlvbi5cblxuXHRcdFx0XHRpZiAodGhpcy5fdmlkZW8udGV4dFRyYWNrcy5sZW5ndGggPT0gMCAmJiB0aGlzLnN1YnRpdGxlcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0dGhpcy5fY3R4LmNoaWxkcmVuKCd0cmFja1traW5kPVwic3VidGl0bGVzXCJdJykucmVtb3ZlKCk7XG5cdFx0XHRcdFx0Zm9yICh2YXIgaSBpbiB0aGlzLnN1YnRpdGxlcykge1xuXHRcdFx0XHRcdFx0aWYgKHRoaXMuc3VidGl0bGVzLmhhc093blByb3BlcnR5KGkpKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMuX2N0eFxuXHRcdFx0XHRcdFx0XHRcdC5hcHBlbmQoJCgnPHRyYWNrLz4nKVxuXHRcdFx0XHRcdFx0XHRcdFx0LmF0dHIoJ2xhYmVsJywgdGhpcy5zdWJ0aXRsZXNbIGkgXS50aXRsZSlcblx0XHRcdFx0XHRcdFx0XHRcdC5hdHRyKCdzcmMnLCB0aGlzLnN1YnRpdGxlc1sgaSBdLnNyYylcblx0XHRcdFx0XHRcdFx0XHRcdC5hdHRyKCdzcmNsYW5nJywgdGhpcy5zdWJ0aXRsZXNbIGkgXS5sYW5ndWFnZSlcblx0XHRcdFx0XHRcdFx0XHRcdC5hdHRyKCdpZCcsIHRoaXMuc3VidGl0bGVzWyBpIF0ubGFuZ3VhZ2UpXG5cdFx0XHRcdFx0XHRcdFx0XHQuYXR0cigna2luZCcsICdzdWJ0aXRsZXMnKSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMudHJpZ2dlcignbG9hZGVkbWV0YWRhdGEnKVxuXHRcdFx0fVxuXG5cdFx0XHRfaW5pdEh0bWxFdmVudHMgKCkge1xuXHRcdFx0XHRsZXQgbWVkaWFFbGVtZW50ID0gJCh0aGlzLl92aWRlbyk7XG5cdFx0XHRcdGxldCB0aW1lcklkID0gbnVsbDtcblxuXHRcdFx0XHRtZWRpYUVsZW1lbnQub24oe1xuXG5cdFx0XHRcdFx0J3RpbWV1cGRhdGUnIDogKCkgPT4ge1xuXHRcdFx0XHRcdFx0Y29udHJvbHMubW92ZVRpbWVNYXJrZXIoKTtcblx0XHRcdFx0XHR9LFxuXG5cdFx0XHRcdFx0J2VuZGVkJyA6ICgpID0+IHtcblx0XHRcdFx0XHRcdHRoaXMucGF1c2UoKTtcblx0XHRcdFx0XHR9LFxuXG5cdFx0XHRcdFx0J2RibGNsaWNrJyA6ICgpID0+IHtcblx0XHRcdFx0XHRcdGNsZWFyVGltZW91dCh0aW1lcklkKTtcblx0XHRcdFx0XHRcdHRoaXMuZnVsbHNjcmVlbi50b2dnbGUoKTtcblx0XHRcdFx0XHR9LFxuXG5cdFx0XHRcdFx0J2NsaWNrJyA6ICgpID0+IHtcblx0XHRcdFx0XHRcdGNsZWFyVGltZW91dCh0aW1lcklkKTtcblx0XHRcdFx0XHRcdHRpbWVySWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRcdFx0Y29udGFpbmVyLmZvY3VzKClcblx0XHRcdFx0XHRcdFx0dGhpcy50b2dnbGVQbGF5KCk7XG5cdFx0XHRcdFx0XHR9LCAzMDApO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0X2luaXRDdXN0b21FdmVudHMgKCkge1xuXHRcdFx0XHRsZXQgbWVkaWFFbGVtZW50ID0gJCh0aGlzLl92aWRlbyk7XG5cblx0XHRcdFx0bWVkaWFFbGVtZW50Lm9uKHtcblx0XHRcdFx0XHQnaW5pdGVkLmxlcGxheWVyJyA6IChlKSA9PiB7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGNsYXNzIENvbnRyb2wge1xuXHRcdFx0Y29uc3RydWN0b3IgKGNzc0NsYXNzLCBpY29uQ2xhc3MpIHtcblx0XHRcdFx0aWYgKGljb25DbGFzcykge1xuXHRcdFx0XHRcdHRoaXMuaWNvbiA9IG5ldyBJY29uKGljb25DbGFzcyk7XG5cdFx0XHRcdFx0dGhpcy5pY29uLmVsZW1lbnQub24oe1xuXHRcdFx0XHRcdFx0J2NsaWNrJyA6IHRoaXMuX29uSWNvbkNsaWNrLmJpbmQodGhpcyksXG5cdFx0XHRcdFx0XHQnbGVwbGF5ZXJfaWNvbl9jbGljaycgOiB0aGlzLm9uSWNvbkNsaWNrLmJpbmQodGhpcylcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuZWxlbWVudCA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0XHRcdC5hZGRDbGFzcygnY29udHJvbCAnICsgY3NzQ2xhc3MpXG5cdFx0XHRcdFx0LmFwcGVuZCh0aGlzLmljb24gJiYgdGhpcy5pY29uLmVsZW1lbnQpXG5cdFx0XHRcdFx0Lm9uKHtcblx0XHRcdFx0XHRcdCdjbGljaycgOiB0aGlzLl9vbkNsaWNrLmJpbmQodGhpcyksXG5cdFx0XHRcdFx0XHQnbGVwbGF5ZXJfY2xpY2snIDogdGhpcy5vbkNsaWNrLmJpbmQodGhpcylcblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0fVxuXG5cdFx0XHRzdGF0aWMgZGl2aWRlciAoKSB7XG5cdFx0XHRcdHJldHVybiAkKCc8ZGl2IC8+JykuYWRkQ2xhc3MoJ2RpdmlkZXInKTtcblx0XHRcdH1cblxuXHRcdFx0c3RhdGljIGNyZWF0ZSAobmFtZSkge1xuXHRcdFx0XHRzd2l0Y2ggKG5hbWUpIHtcblx0XHRcdFx0XHRjYXNlIENfQkFDS1dBUkQ6XG5cdFx0XHRcdFx0XHRyZXR1cm4gbmV3IEJhY2t3YXJkQ29udHJvbCgpO1xuXG5cdFx0XHRcdFx0Y2FzZSBDX0RJVklERVI6XG5cdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5kaXZpZGVyKCk7XG5cblx0XHRcdFx0XHRjYXNlIENfRE9XTkxPQUQ6XG5cdFx0XHRcdFx0XHRyZXR1cm4gbmV3IERvd25sb2FkQ29udHJvbCgpO1xuXG5cdFx0XHRcdFx0Y2FzZSBDX0ZPUldBUkQ6XG5cdFx0XHRcdFx0XHRyZXR1cm4gbmV3IEZvcndhcmRDb250cm9sKCk7XG5cblx0XHRcdFx0XHRjYXNlIENfRlVMTFNDUkVFTjpcblx0XHRcdFx0XHRcdHJldHVybiBuZXcgRnVsbHNjcmVlbkNvbnRyb2woKTtcblxuXHRcdFx0XHRcdGNhc2UgQ19QTEFZOlxuXHRcdFx0XHRcdFx0cmV0dXJuIG5ldyBQbGF5Q29udHJvbCgpO1xuXG5cdFx0XHRcdFx0Y2FzZSBDX1JBVEU6XG5cdFx0XHRcdFx0XHRyZXR1cm4gbmV3IFJhdGVDb250cm9sKCk7XG5cblx0XHRcdFx0XHRjYXNlIENfU09VUkNFOlxuXHRcdFx0XHRcdFx0cmV0dXJuIG5ldyBTb3VyY2VDb250cm9sKCk7XG5cblx0XHRcdFx0XHRjYXNlIENfU1VCVElUTEU6XG5cdFx0XHRcdFx0XHRyZXR1cm4gbmV3IFN1YnRpdGxlQ29udHJvbCgpO1xuXG5cdFx0XHRcdFx0Y2FzZSBDX1RJTUVMSU5FOlxuXHRcdFx0XHRcdFx0cmV0dXJuIG5ldyBUaW1lbGluZUNvbnRyb2woKTtcblxuXHRcdFx0XHRcdGNhc2UgQ19WT0xVTUU6XG5cdFx0XHRcdFx0XHRyZXR1cm4gbmV3IFZvbHVtZUNvbnRyb2woKTtcblxuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRkaXNhYmxlICgpIHtcblx0XHRcdFx0dGhpcy5kaXNhYmxlZCA9IHRydWVcblx0XHRcdFx0dGhpcy5lbGVtZW50LmFkZENsYXNzKCdkaXNhYmxlZCcpO1xuXHRcdFx0fVxuXG5cdFx0XHRfb25DbGljayAoZSkge1xuXHRcdFx0XHRpZiAodGhpcy5kaXNhYmxlZCkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmVsZW1lbnQudHJpZ2dlcignbGVwbGF5ZXJfY2xpY2snKTtcblx0XHRcdH1cblxuXHRcdFx0X29uSWNvbkNsaWNrIChlKSB7XG5cdFx0XHRcdGlmICh0aGlzLmRpc2FibGVkKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuaWNvbi5lbGVtZW50LnRyaWdnZXIoJ2xlcGxheWVyX2ljb25fY2xpY2snKVxuXHRcdFx0fVxuXG5cdFx0XHRvbkNsaWNrIChlKSB7XG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdH1cblxuXHRcdFx0b25JY29uQ2xpY2sgKGUpIHtcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0fVxuXG5cdFx0fVxuXG5cblx0XHRjbGFzcyBDb250cm9sVGV4dCB7XG5cdFx0XHRjb25zdHJ1Y3RvciAoY2xhc3NuYW1lKSB7XG5cdFx0XHRcdHRoaXMuZWxlbWVudCA9ICQoJzxkaXYgLz4nKS5hZGRDbGFzcygnY29udHJvbC10ZXh0ICcgKyBjbGFzc25hbWUpO1xuXHRcdFx0fVxuXG5cdFx0XHRzZXQgdGV4dCAodmFsdWUpIHtcblx0XHRcdFx0dGhpcy5lbGVtZW50Lmh0bWwodmFsdWUpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGNsYXNzIENvbnRyb2xDb250YWluZXIgZXh0ZW5kcyBDb250cm9sIHtcblx0XHRcdGNvbnN0cnVjdG9yIChuYW1lLCBpY29uQ2xhc3MpIHtcblx0XHRcdFx0c3VwZXIobmFtZSwgaWNvbkNsYXNzKVxuXHRcdFx0XHR0aGlzLmljb25DbGFzcyA9IGljb25DbGFzcztcblx0XHRcdFx0dGhpcy5saXN0RWxlbWVudCA9ICQoJzxkaXYvPicpLmFkZENsYXNzKCdjb250cm9sLWlubmVyJyk7XG5cdFx0XHRcdHRoaXMuZWxlbWVudC5hZGRDbGFzcygnY29udHJvbC1jb250YWluZXInKVxuXHRcdFx0XHRcdC5hcHBlbmQodGhpcy5saXN0RWxlbWVudCk7XG5cdFx0XHRcdHRoaXMuX2luZGV4ID0gMDtcblx0XHRcdFx0dGhpcy5saXN0ID0gW107XG5cdFx0XHR9XG5cblx0XHRcdGdldCBhY3RpdmUgKCkge1xuXHRcdFx0XHRmb3IgKGxldCBpIGluIHRoaXMubGlzdClcblx0XHRcdFx0XHRpZiAodGhpcy5saXN0WyBpIF0uaGFzQ2xhc3MoJ2FjdGl2ZScpKVxuXHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMubGlzdFsgaSBdO1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblxuXHRcdFx0c2V0IGFjdGl2ZSAoaW5kZXgpIHtcblx0XHRcdFx0bGV0IGhhc0FjdGl2ZSA9IGZhbHNlO1xuXHRcdFx0XHRmb3IgKGxldCBpIGluIHRoaXMubGlzdCkge1xuXHRcdFx0XHRcdGlmICh0aGlzLmxpc3RbIGkgXS5kYXRhKCdpbmRleCcpID09IGluZGV4KSB7XG5cdFx0XHRcdFx0XHR0aGlzLmxpc3RbIGkgXS5hZGRDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHRcdFx0XHR0aGlzLmljb24uZWxlbWVudC5odG1sKHRoaXMubGlzdFsgaSBdLmh0bWwoKSk7XG5cdFx0XHRcdFx0XHRoYXNBY3RpdmUgPSB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHR0aGlzLmxpc3RbIGkgXS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCFoYXNBY3RpdmUpXG5cdFx0XHRcdFx0dGhpcy5pY29uLmljb25OYW1lID0gdGhpcy5pY29uQ2xhc3Ncblx0XHRcdH1cblxuXHRcdFx0YWRkSXRlbSAodGV4dCwgZGF0YSkge1xuXHRcdFx0XHRsZXQgX3NlbGYgPSB0aGlzO1xuXHRcdFx0XHR2YXIgaXRlbSA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0XHRcdC5hZGRDbGFzcygnaW5uZXItaXRlbScpXG5cdFx0XHRcdFx0LmRhdGEoJ2luZGV4JywgdGhpcy5faW5kZXgpXG5cdFx0XHRcdFx0Lmh0bWwodGV4dClcblx0XHRcdFx0XHQvKiogVE9ETzogUmVmYWN0b3IgdGhpcyBjYWxsYmFjayBhbmQgZXZlbnQgKi9cblx0XHRcdFx0XHQub24oJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy5vbkl0ZW1DbGljayhpdGVtLmRhdGEoJ2luZGV4JykpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRpZiAodHlwZW9mIGRhdGEgPT0gJ29iamVjdCcpIHtcblx0XHRcdFx0XHRmb3IgKGxldCBrIGluIGRhdGEpXG5cdFx0XHRcdFx0XHRpdGVtLmRhdGEoaywgZGF0YVsgayBdKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLl9pbmRleCsrO1xuXHRcdFx0XHR0aGlzLmxpc3QucHVzaChpdGVtKTtcblx0XHRcdFx0dGhpcy5saXN0RWxlbWVudC5hcHBlbmQoaXRlbSk7XG5cblx0XHRcdFx0cmV0dXJuIGl0ZW07XG5cdFx0XHR9XG5cblx0XHRcdGdldEJ5SW5kZXggKGluZGV4KSB7XG5cdFx0XHRcdGZvciAobGV0IGkgaW4gdGhpcy5saXN0KVxuXHRcdFx0XHRcdGlmICh0aGlzLmxpc3RbIGkgXS5kYXRhKCdpbmRleCcpID09IGluZGV4KVxuXHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMubGlzdFsgaSBdO1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblxuXHRcdFx0b25JdGVtQ2xpY2sgKGluZGV4KSB7XG5cdFx0XHRcdHRoaXMuYWN0aXZlID0gaW5kZXg7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y2xhc3MgQmFja3dhcmRDb250cm9sIGV4dGVuZHMgQ29udHJvbCB7XG5cblx0XHRcdGNvbnN0cnVjdG9yICgpIHtcblx0XHRcdFx0c3VwZXIoJ2JhY2t3YXJkJywgJ3VuZG8nKTtcblx0XHRcdH1cblxuXHRcdFx0b25DbGljayAoZSkge1xuXHRcdFx0XHRzdXBlci5vbkNsaWNrKGUpO1xuXHRcdFx0XHR2aWRlby5jdXJyZW50VGltZSAtPSBvcHRpb25zLnBsYXliYWNrLnN0ZXAubWVkaXVtO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGNsYXNzIERvd25sb2FkQ29udHJvbCBleHRlbmRzIENvbnRyb2wge1xuXHRcdFx0Y29uc3RydWN0b3IgKCkge1xuXHRcdFx0XHRzdXBlcignJywgJycpO1xuXHRcdFx0XHRsZXQgaWNvbiA9IG5ldyBJY29uKCdkb3dubG9hZCcpO1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQgPSAkKCc8YSAvPicpXG5cdFx0XHRcdFx0LmF0dHIoJ2hyZWYnLCAnJylcblx0XHRcdFx0XHQuYXR0cigndGFyZ2V0JywgJ19ibGFuaycpXG5cdFx0XHRcdFx0LmF0dHIoJ2Rvd25sb2FkJywgJycpXG5cdFx0XHRcdFx0LmFkZENsYXNzKCdjb250cm9sIGRvd25sb2FkJylcblx0XHRcdFx0XHQuYXBwZW5kKGljb24uZWxlbWVudCk7XG5cdFx0XHR9XG5cblx0XHRcdHNldCBsaW5rICh2YWx1ZSkge1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQuYXR0cignaHJlZicsIHZhbHVlKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRjbGFzcyBGb3J3YXJkQ29udHJvbCBleHRlbmRzIENvbnRyb2wge1xuXHRcdFx0Y29uc3RydWN0b3IgKCkge1xuXHRcdFx0XHRzdXBlcignZm9yd2FyZCcsICdyZWRvJyk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y2xhc3MgRnVsbHNjcmVlbkNvbnRyb2wgZXh0ZW5kcyBDb250cm9sIHtcblx0XHRcdGNvbnN0cnVjdG9yICgpIHtcblx0XHRcdFx0c3VwZXIoJ2Z1bGxzY3JlZW4nLCAnYXJyb3dzLWFsdCcpO1xuXHRcdFx0fVxuXG5cdFx0XHRvbkNsaWNrIChlKSB7XG5cdFx0XHRcdHN1cGVyLm9uQ2xpY2soZSlcblx0XHRcdFx0dmlkZW8uZnVsbHNjcmVlbi50b2dnbGUoKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRjbGFzcyBQbGF5Q29udHJvbCBleHRlbmRzIENvbnRyb2wge1xuXHRcdFx0Y29uc3RydWN0b3IgKCkge1xuXHRcdFx0XHRzdXBlcigncGxheScsICdwbGF5Jyk7XG5cdFx0XHR9XG5cblx0XHRcdHBhdXNlICgpIHtcblx0XHRcdFx0dGhpcy5pY29uLmljb25OYW1lID0gJ3BsYXknO1xuXHRcdFx0fVxuXG5cdFx0XHRwbGF5ICgpIHtcblx0XHRcdFx0dGhpcy5pY29uLmljb25OYW1lID0gJ3BhdXNlJztcblx0XHRcdH1cblxuXHRcdFx0b25DbGljayhlKSB7XG5cdFx0XHRcdHN1cGVyLm9uQ2xpY2soZSk7XG5cdFx0XHRcdHZpZGVvLnRvZ2dsZVBsYXkoKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRjbGFzcyBSYXRlQ29udHJvbCBleHRlbmRzIENvbnRyb2wge1xuXHRcdFx0Y29uc3RydWN0b3IgKCkge1xuXHRcdFx0XHRzdXBlcigpO1xuXHRcdFx0XHR0aGlzLmRvd24gPSBuZXcgQ29udHJvbCgncmF0ZS1kb3duJywgJ2JhY2t3YXJkJyk7XG5cdFx0XHRcdHRoaXMudXAgPSBuZXcgQ29udHJvbCgncmF0ZS11cCcsICdmb3J3YXJkJyk7XG5cdFx0XHRcdHRoaXMuY3VycmVudCA9IG5ldyBDb250cm9sVGV4dCgncmF0ZS1jdXJyZW50Jyk7XG5cblx0XHRcdFx0dGhpcy5kb3duLmVsZW1lbnQuY2xpY2soZSA9PiB7XG5cdFx0XHRcdFx0dmlkZW8ucmF0ZSAtPSBvcHRpb25zLnJhdGUuc3RlcDtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0dGhpcy51cC5lbGVtZW50LmNsaWNrKGUgPT4ge1xuXHRcdFx0XHRcdHZpZGVvLnJhdGUgKz0gb3B0aW9ucy5yYXRlLnN0ZXA7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdHRoaXMuZWxlbWVudCA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0XHRcdC5hZGRDbGFzcygnY29udHJvbC1jb250YWluZXInKVxuXHRcdFx0XHRcdC5hcHBlbmQodGhpcy5kb3duLmVsZW1lbnQpXG5cdFx0XHRcdFx0LmFwcGVuZCh0aGlzLmN1cnJlbnQuZWxlbWVudClcblx0XHRcdFx0XHQuYXBwZW5kKHRoaXMudXAuZWxlbWVudCk7XG5cdFx0XHR9XG5cblx0XHRcdHNldCAodmFsdWUpIHtcblx0XHRcdFx0aWYgKHRoaXMuZGlzYWJsZWQpIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy51cC5lbGVtZW50LnJlbW92ZUNsYXNzKCdkaXNhYmxlZCcpO1xuXHRcdFx0XHR0aGlzLmRvd24uZWxlbWVudC5yZW1vdmVDbGFzcygnZGlzYWJsZWQnKTtcblx0XHRcdFx0aWYgKHZpZGVvLnJhdGUgPD0gb3B0aW9ucy5yYXRlLm1pbilcblx0XHRcdFx0XHR0aGlzLmRvd24uZWxlbWVudC5hZGRDbGFzcygnZGlzYWJsZWQnKTtcblx0XHRcdFx0ZWxzZSBpZiAodmlkZW8ucmF0ZSA+PSBvcHRpb25zLnJhdGUubWF4KVxuXHRcdFx0XHRcdHRoaXMudXAuZWxlbWVudC5hZGRDbGFzcygnZGlzYWJsZWQnKTtcblx0XHRcdFx0dGhpcy5zaG93KCk7XG5cdFx0XHR9XG5cblx0XHRcdGluaXQgKCkge1xuXHRcdFx0XHRsZXQgcmF0ZSA9IENvb2tpZS5nZXQoJ3JhdGUnLCBvcHRpb25zLnJhdGUuZGVmYXVsdCk7XG5cdFx0XHRcdHRoaXMuc2hvdyhyYXRlKTtcblx0XHRcdH1cblxuXHRcdFx0c2hvdyAodmFsdWUpIHtcblx0XHRcdFx0dmFsdWUgPSB2YWx1ZSB8fCB2aWRlby5yYXRlO1xuXHRcdFx0XHR2YWx1ZSA9IHBhcnNlRmxvYXQodmFsdWUpXG5cdFx0XHRcdFx0LnRvRml4ZWQoMilcblx0XHRcdFx0XHQudG9TdHJpbmcoKVxuXHRcdFx0XHRcdC5yZXBsYWNlKC8sL2csICcuJyk7XG5cdFx0XHRcdHRoaXMuY3VycmVudC50ZXh0ID0gJ8OXJyArIHZhbHVlO1xuXHRcdFx0fVxuXG5cdFx0XHRkaXNhYmxlKCkge1xuXHRcdFx0XHR0aGlzLmRpc2FibGVkID0gdHJ1ZTtcblx0XHRcdFx0dGhpcy5kb3duLmRpc2FibGUuYXBwbHkodGhpcy5kb3duLCBhcmd1bWVudHMpO1xuXHRcdFx0XHR0aGlzLnVwLmRpc2FibGUuYXBwbHkodGhpcy51cCwgYXJndW1lbnRzKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRjbGFzcyBTb3VyY2VDb250cm9sIGV4dGVuZHMgQ29udHJvbENvbnRhaW5lciB7XG5cdFx0XHRjb25zdHJ1Y3RvciAoKSB7XG5cdFx0XHRcdHN1cGVyKCdzb3VyY2UtY29udHJvbCcsICdidWxsc2V5ZScpO1xuXHRcdFx0XHQvKiogVE9ETzogTW92ZSBzb3VyY2VzIHRvIHRoZSBhcmd1bWVudHMgaW4gY29uc3Ryb3IgKi9cblx0XHRcdFx0aWYgKHNvdXJjZXMubGVuZ3RoID4gMSkge1xuXHRcdFx0XHRcdGZvciAodmFyIGkgaW4gc291cmNlcykge1xuXHRcdFx0XHRcdFx0dGhpcy5hZGRJdGVtKHNvdXJjZXNbIGkgXS50aXRsZSwgeyBzcmMgOiBzb3VyY2VzWyBpIF0uc3JjIH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0dGhpcy5kaXNhYmxlKCk7XG5cdFx0XHR9XG5cblx0XHRcdHNldCAoaW5kZXgpIHtcblx0XHRcdFx0LyoqIFRPRE86IEVtaXQgZXZlbnQgb24gc2V0IHNvdXJjZSovXG5cdFx0XHRcdGxldCBzID0gdGhpcy5nZXRCeUluZGV4KGluZGV4KTtcblx0XHRcdFx0aWYgKHMgIT0gbnVsbCkge1xuXHRcdFx0XHRcdHZpZGVvLnNvdXJjZSA9IHMuZGF0YSgnc3JjJyk7XG5cdFx0XHRcdFx0Y29udHJvbHMuZG93bmxvYWQgPSBzLmRhdGEoJ3NyYycpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdG9uSXRlbUNsaWNrIChpbmRleCkge1xuXHRcdFx0XHRzdXBlci5vbkl0ZW1DbGljayhpbmRleCk7XG5cdFx0XHRcdHRoaXMuc2V0KGluZGV4KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRjbGFzcyBTdWJ0aXRsZUNvbnRyb2wgZXh0ZW5kcyBDb250cm9sQ29udGFpbmVyIHtcblx0XHRcdGNvbnN0cnVjdG9yICgpIHtcblx0XHRcdFx0c3VwZXIoJ3N1YnRpdGxlLWNvbnRyb2wnLCAnY29tbWVudGluZy1vJyk7XG5cdFx0XHR9XG5cblx0XHRcdGluaXQgKCkge1xuXHRcdFx0XHRpZiAodmlkZW8uc3VidGl0bGVzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRmb3IgKHZhciBpIGluIHZpZGVvLnN1YnRpdGxlcykge1xuXHRcdFx0XHRcdFx0aWYgKCF2aWRlby5zdWJ0aXRsZXMuaGFzT3duUHJvcGVydHkoaSkpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0bGV0IGl0ZW0gPSB2aWRlby5zdWJ0aXRsZXNbIGkgXTtcblx0XHRcdFx0XHRcdHRoaXMuYWRkSXRlbShpdGVtLnRpdGxlLCB7XG5cdFx0XHRcdFx0XHRcdHNyYyA6IGl0ZW0uc3JjLFxuXHRcdFx0XHRcdFx0XHRsYW5ndWFnZSA6IGl0ZW0ubGFuZ3VhZ2Vcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0dGhpcy5kaXNhYmxlKCk7XG5cdFx0XHR9XG5cblx0XHRcdG9uSWNvbkNsaWNrIChlKSB7XG5cdFx0XHRcdHN1cGVyLm9uSWNvbkNsaWNrKGUpO1xuXHRcdFx0XHR0aGlzLm9uSXRlbUNsaWNrKC0xKTtcblx0XHRcdH1cblxuXHRcdFx0b25JdGVtQ2xpY2sgKGluZGV4KSB7XG5cdFx0XHRcdHN1cGVyLm9uSXRlbUNsaWNrKGluZGV4KTtcblx0XHRcdFx0bGV0IHQgPSB0aGlzLmdldEJ5SW5kZXgoaW5kZXgpO1xuXHRcdFx0XHRpZiAodCAhPSBudWxsKVxuXHRcdFx0XHRcdHZpZGVvLnRyYWNrID0gdC5kYXRhKCdsYW5ndWFnZScpO1xuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0dmlkZW8udHJhY2sgPSAtMTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRjbGFzcyBUaW1lbGluZUNvbnRyb2wgZXh0ZW5kcyBDb250cm9sIHtcblx0XHRcdGNvbnN0cnVjdG9yICgpIHtcblx0XHRcdFx0c3VwZXIoJ3RpbWVsaW5lJyk7XG5cdFx0XHRcdGxldCBfc2VsZiA9IHRoaXMsXG5cdFx0XHRcdFx0ZHVyYXRpb24gPSB2aWRlby5kdXJhdGlvbjtcblxuXHRcdFx0XHR0aGlzLmRyYWcgPSBmYWxzZTtcblxuXHRcdFx0XHR0aGlzLmN1cnJlbnQgPSBuZXcgQ29udHJvbFRleHQoJ3RpbWUtY3VycmVudCcpO1xuXHRcdFx0XHR0aGlzLnRvdGFsID0gbmV3IENvbnRyb2xUZXh0KCd0aW1lLXRvdGFsJyk7XG5cblx0XHRcdFx0dGhpcy5tYXJrZXIgPSAkKCc8ZGl2IC8+JykuYWRkQ2xhc3MoJ3RpbWUtbWFya2VyJyk7XG5cblx0XHRcdFx0dGhpcy5tYXJrZXJTaGFkb3cgPSAkKCc8ZGl2IC8+Jylcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3RpbWUtbWFya2VyIHNoYWRvdycpXG5cdFx0XHRcdFx0LmFwcGVuZCgpXG5cdFx0XHRcdFx0LmhpZGUoKTtcblxuXHRcdFx0XHR0aGlzLm1hcmtlclNoYWRvd1RpbWUgPSAkKCc8ZGl2IC8+JykuYWRkQ2xhc3MoJ3RpbWUnKTtcblx0XHRcdFx0dGhpcy5tYXJrZXJUaW1lID0gJCgnPGRpdiAvPicpXG5cdFx0XHRcdFx0LmFkZENsYXNzKCd0aW1lJylcblx0XHRcdFx0XHQuaGlkZSgpO1xuXHRcdFx0XHR0aGlzLnBsYXllZCA9ICQoJzxkaXYgLz4nKS5hZGRDbGFzcygndGltZS1wbGF5ZWQnKTtcblx0XHRcdFx0dGhpcy5jdXJyZW50LnRleHQgPSAnMDA6MDAnO1xuXHRcdFx0XHR0aGlzLmxpbmUgPSAkKCc8ZGl2IC8+Jylcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3RpbWVsaW5lJylcblx0XHRcdFx0XHQuYXBwZW5kKHRoaXMubWFya2VyLmFwcGVuZCh0aGlzLm1hcmtlclRpbWUpKVxuXHRcdFx0XHRcdC5hcHBlbmQodGhpcy5tYXJrZXJTaGFkb3cuYXBwZW5kKHRoaXMubWFya2VyU2hhZG93VGltZSkpXG5cdFx0XHRcdFx0LmFwcGVuZCh0aGlzLnBsYXllZClcblx0XHRcdFx0XHQub24oe1xuXHRcdFx0XHRcdFx0J21vdXNlbW92ZScgOiAoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5kcmFnKSByZXR1cm47XG5cblx0XHRcdFx0XHRcdFx0bGV0IHAgPSB0aGlzLmdldFBvc2l0aW9uKGUucGFnZVgpO1xuXHRcdFx0XHRcdFx0XHRpZiAocCA+IDAgJiYgcCA8IDEpIHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLm1hcmtlclNoYWRvdy5zaG93KCk7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5tYXJrZXJTaGFkb3cuY3NzKCdsZWZ0JywgcCAqIDEwMCArICclJyk7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5tYXJrZXJTaGFkb3dUaW1lLmh0bWwoc2Vjb25kc1RvVGltZSh2aWRlby5kdXJhdGlvbiAqIHApKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5tYXJrZXJTaGFkb3cuaGlkZSgpO1xuXHRcdFx0XHRcdFx0fSxcblxuXHRcdFx0XHRcdFx0J21vdXNlbGVhdmUnIDogKGUpID0+IHtcblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuZHJhZykgcmV0dXJuO1xuXHRcdFx0XHRcdFx0XHR0aGlzLm1hcmtlclNoYWRvdy5oaWRlKClcblx0XHRcdFx0XHRcdH0sXG5cblx0XHRcdFx0XHRcdCdtb3VzZWRvd24nIDogKGUpID0+IHtcblx0XHRcdFx0XHRcdH0sXG5cblx0XHRcdFx0XHRcdCdjbGljaycgOiAoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRpZiAoZS53aGljaCAhPT0gMSkgcmV0dXJuO1xuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5kcmFnKSByZXR1cm47XG5cdFx0XHRcdFx0XHRcdHZpZGVvLnNlZWsodmlkZW8uZHVyYXRpb24gKiB0aGlzLmdldFBvc2l0aW9uKGUucGFnZVgpKTtcblx0XHRcdFx0XHRcdH0sXG5cblx0XHRcdFx0XHRcdCd0b3VjaG1vdmUnIDogKGUpID0+IHtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHR0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoJ3RpbWVsaW5lLWNvbnRhaW5lcicpXG5cdFx0XHRcdFx0LmFwcGVuZCgkKCc8ZGl2IC8+Jylcblx0XHRcdFx0XHRcdC5hZGRDbGFzcygndGltZWxpbmUtc3ViY29udGFpbmVyJylcblx0XHRcdFx0XHRcdC5hcHBlbmQodGhpcy5jdXJyZW50LmVsZW1lbnQpXG5cdFx0XHRcdFx0XHQuYXBwZW5kKHRoaXMubGluZSlcblx0XHRcdFx0XHRcdC5hcHBlbmQodGhpcy50b3RhbC5lbGVtZW50KSk7XG5cblx0XHRcdFx0dGhpcy5tYXJrZXIub24oJ21vdXNlZG93bicsIChlKSA9PiB7XG5cdFx0XHRcdFx0aWYgKGUud2hpY2ggIT09IDEpIHJldHVybjtcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0dGhpcy5tYXJrZXJTaGFkb3cuaGlkZSgpO1xuXHRcdFx0XHRcdHRoaXMuZHJhZyA9IHRydWU7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdCQoZG9jdW1lbnQpLm9uKHtcblxuXHRcdFx0XHRcdCdtb3VzZW1vdmUnIDogKGUpID0+IHtcblx0XHRcdFx0XHRcdGlmICghdGhpcy5kcmFnKSByZXR1cm47XG5cdFx0XHRcdFx0XHRsZXQgcCA9IHRoaXMuZ2V0UG9zaXRpb24oZS5wYWdlWCk7XG5cdFx0XHRcdFx0XHRpZiAocCA+IDAgJiYgcCA8IDEpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5tYXJrZXJUaW1lXG5cdFx0XHRcdFx0XHRcdFx0LnNob3coKVxuXHRcdFx0XHRcdFx0XHRcdC5odG1sKHNlY29uZHNUb1RpbWUodmlkZW8uZHVyYXRpb24gKiBwKSlcblx0XHRcdFx0XHRcdFx0dmlkZW8uc2Vlayh2aWRlby5kdXJhdGlvbiAqIHApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0sXG5cblx0XHRcdFx0XHQnbW91c2V1cCcgOiAoZSkgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy5tYXJrZXJUaW1lLmhpZGUoKVxuXHRcdFx0XHRcdFx0dGhpcy5kcmFnID0gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0Z2V0UG9zaXRpb24gKHgpIHtcblx0XHRcdFx0cmV0dXJuICh4IC0gdGhpcy5saW5lLm9mZnNldCgpLmxlZnQpIC8gdGhpcy5saW5lLndpZHRoKCk7XG5cdFx0XHR9XG5cblx0XHRcdG1vdmUgKCkge1xuXHRcdFx0XHR2YXIgcGVyY2VudCA9ICh2aWRlby5jdXJyZW50VGltZSAvIHZpZGVvLmR1cmF0aW9uICogMTAwKS50b0ZpeGVkKDIpO1xuXHRcdFx0XHRpZiAocGVyY2VudCA9PSAxMDApIHtcblx0XHRcdFx0XHRjb250cm9scy5wYXVzZSgpXG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5tYXJrZXIuY3NzKCdsZWZ0JywgcGVyY2VudCArICclJyk7XG5cdFx0XHRcdHRoaXMucGxheWVkLmNzcygnd2lkdGgnLCBwZXJjZW50ICsgJyUnKTtcblx0XHRcdFx0dGhpcy5jdXJyZW50LnRleHQgPSBzZWNvbmRzVG9UaW1lKHZpZGVvLmN1cnJlbnRUaW1lKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRjbGFzcyBWb2x1bWVDb250cm9sIGV4dGVuZHMgQ29udHJvbCB7XG5cdFx0XHRjb25zdHJ1Y3RvciAoKSB7XG5cdFx0XHRcdHN1cGVyKCd2b2x1bWUtY29udHJvbCcsICd2b2x1bWUtZG93bicpO1xuXHRcdFx0XHRsZXQgX3NlbGYgPSB0aGlzO1xuXG5cdFx0XHRcdHRoaXMubWFya2VyID0gJCgnPGRpdi8+JykuYWRkQ2xhc3MoJ3ZvbHVtZS1tYXJrZXInKTtcblxuXHRcdFx0XHR0aGlzLmFjdGl2ZSA9ICQoJzxkaXYvPicpLmFkZENsYXNzKCd2b2x1bWUtYWN0aXZlJyk7XG5cblx0XHRcdFx0dGhpcy5saW5lID0gJCgnPGRpdi8+Jylcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3ZvbHVtZS1saW5lJylcblx0XHRcdFx0XHQuYXBwZW5kKHRoaXMuYWN0aXZlKVxuXHRcdFx0XHRcdC5hcHBlbmQodGhpcy5tYXJrZXIpXG5cdFx0XHRcdFx0Lm9uKCdjbGljaycsIChlKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAodGhpcy5kcmFnKSByZXR1cm47XG5cdFx0XHRcdFx0XHRsZXQgcCA9IHRoaXMuZ2V0UG9zaXRpb24oZS5wYWdlWSk7XG5cdFx0XHRcdFx0XHRpZiAocCA+PSAwICYmIHAgPD0gMSkge1xuXHRcdFx0XHRcdFx0XHR2aWRlby52b2x1bWUgPSAxIC0gcDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHR0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoJ2NvbnRyb2wtY29udGFpbmVyJylcblx0XHRcdFx0XHQuYXBwZW5kKCQoJzxkaXYgLz4nKVxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCdjb250cm9sLWlubmVyIHZvbHVtZS1zbGlkZXInKVxuXHRcdFx0XHRcdFx0LmFwcGVuZCh0aGlzLmxpbmUpKTtcblxuXHRcdFx0XHR0aGlzLmRyYWcgPSBmYWxzZTtcblxuXHRcdFx0XHR0aGlzLm1hcmtlci5vbignbW91c2Vkb3duJywgKGUpID0+IHtcblx0XHRcdFx0XHRpZiAoZS53aGljaCAhPSAxKSByZXR1cm47XG5cdFx0XHRcdFx0dGhpcy5kcmFnID0gdHJ1ZTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0JChkb2N1bWVudCkub24oe1xuXHRcdFx0XHRcdCdtb3VzZW1vdmUnIDogKGUpID0+IHtcblx0XHRcdFx0XHRcdGlmICghdGhpcy5kcmFnKSByZXR1cm47XG5cdFx0XHRcdFx0XHRsZXQgcCA9IHRoaXMuZ2V0UG9zaXRpb24oZS5wYWdlWSk7XG5cdFx0XHRcdFx0XHRpZiAocCA+PSAwICYmIHAgPD0gMSkge1xuXHRcdFx0XHRcdFx0XHR2aWRlby52b2x1bWUgPSAxIC0gcFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0sXG5cblx0XHRcdFx0XHQnbW91c2V1cCcgOiAoZSkgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy5kcmFnID0gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0c2V0IHZhbHVlICh2YWx1ZSkge1xuXHRcdFx0XHRpZiAodmFsdWUgPCBvcHRpb25zLnZvbHVtZS5tdXRlbGltaXQpIHtcblx0XHRcdFx0XHR0aGlzLmljb24uaWNvbk5hbWUgPSAndm9sdW1lLW9mZic7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0aWYgKHZhbHVlIDwgMC41KVxuXHRcdFx0XHRcdFx0dGhpcy5pY29uLmljb25OYW1lID0gJ3ZvbHVtZS1kb3duJztcblx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHR0aGlzLmljb24uaWNvbk5hbWUgPSAndm9sdW1lLXVwJztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGxldCBwID0gTWF0aC5yb3VuZCh2YWx1ZSAqIDEwMCkudG9TdHJpbmcoKSArICclJztcblx0XHRcdFx0dGhpcy5hY3RpdmUuY3NzKCdoZWlnaHQnLCBwKTtcblx0XHRcdFx0dGhpcy5tYXJrZXIuY3NzKCdib3R0b20nLCBwKTtcblx0XHRcdH1cblxuXHRcdFx0dG9nZ2xlTXV0ZWQgKCkge1xuXHRcdFx0XHRpZiAodmlkZW8ubXV0ZWQgPT0gdHJ1ZSkge1xuXHRcdFx0XHRcdHRoaXMudmFsdWUgPSBDb29raWUuZ2V0KCd2b2x1bWUnLCBvcHRpb25zLnZvbHVtZS5kZWZhdWx0KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0dGhpcy52YWx1ZSA9IDA7XG5cdFx0XHR9XG5cblx0XHRcdGdldFBvc2l0aW9uICh5KSB7XG5cdFx0XHRcdHJldHVybiAoeSAtIHRoaXMubGluZS5vZmZzZXQoKS50b3ApIC8gdGhpcy5saW5lLmhlaWdodCgpO1xuXHRcdFx0fVxuXG5cdFx0XHRvbkljb25DbGljayAoZSkge1xuXHRcdFx0XHRzdXBlci5vbkljb25DbGljayhlKTtcblx0XHRcdFx0dGhpcy50b2dnbGVNdXRlZCgpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGNsYXNzIENvb2tpZSB7XG5cdFx0XHRzdGF0aWMgZ2V0IChuYW1lLCBkZmx0KSB7XG5cdFx0XHRcdHZhciBjb29raWVzID0gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7Jyk7XG5cdFx0XHRcdGZvciAodmFyIGkgaW4gY29va2llcykge1xuXHRcdFx0XHRcdHZhciBkID0gY29va2llc1sgaSBdLnRyaW0oKS5zcGxpdCgnPScpO1xuXHRcdFx0XHRcdGlmIChkWyAwIF0gPT0gJ2xlcGxheWVyXycgKyBuYW1lKVxuXHRcdFx0XHRcdFx0cmV0dXJuIGRbIDEgXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gZGZsdDtcblx0XHRcdH07XG5cblx0XHRcdHN0YXRpYyBzZXQgKG5hbWUsIHZhbHVlKSB7XG5cdFx0XHRcdHZhciBkID0gbmV3IERhdGUoKTtcblx0XHRcdFx0ZC5zZXREYXRlKGQueWVhciArIDEpO1xuXHRcdFx0XHRkb2N1bWVudC5jb29raWUgPSAnbGVwbGF5ZXJfJyArIG5hbWUgKyAnPScgKyB2YWx1ZSArICc7ZXhwaXJlcz0nICsgZC50b1N0cmluZygpO1xuXHRcdFx0fTtcblx0XHR9XG5cblx0XHRjbGFzcyBVc2VyQWdlbnQge1xuXG5cdFx0fVxuXG5cdFx0Y2xhc3MgQ29udHJvbENvbGxlY3Rpb24ge1xuXHRcdFx0Y29uc3RydWN0b3IgKG5hbWUsIGFjdGl2ZSkge1xuXHRcdFx0XHR0aGlzLml0ZW1zID0ge307XG5cdFx0XHRcdHRoaXMuYWN0aXZlID0gYWN0aXZlIHx8IGZhbHNlO1xuXHRcdFx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdFx0fVxuXG5cdFx0XHRzZXQgZG93bmxvYWQgKHZhbHVlKSB7XG5cdFx0XHRcdGlmICh0aGlzLmhhcyhDX0RPV05MT0FEKSkge1xuXHRcdFx0XHRcdHRoaXMuaXRlbXMuZG93bmxvYWQubGluayA9IHZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHNldCByYXRlICh2YWx1ZSkge1xuXHRcdFx0XHRpZiAodGhpcy5oYXMoQ19SQVRFKSkge1xuXHRcdFx0XHRcdHRoaXMuaXRlbXMucmF0ZS5zZXQodmFsdWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHNldCBzb3VyY2UgKHZhbHVlKSB7XG5cdFx0XHRcdGlmICh0aGlzLmhhcyhDX1NPVVJDRSkpIHtcblx0XHRcdFx0XHR0aGlzLml0ZW1zLnNvdXJjZS5zZXQodmFsdWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHNldCB0b3RhbFRpbWUgKHZhbHVlKSB7XG5cdFx0XHRcdGlmICh0aGlzLmhhcyhDX1RJTUVMSU5FKSlcblx0XHRcdFx0XHR0aGlzLml0ZW1zLnRpbWVsaW5lLnRvdGFsLnRleHQgPSB2YWx1ZTtcblx0XHRcdH1cblxuXHRcdFx0c2V0IHZvbHVtZSAodmFsdWUpIHtcblx0XHRcdFx0aWYgKHRoaXMuaGFzKENfVk9MVU1FKSlcblx0XHRcdFx0XHR0aGlzLml0ZW1zLnZvbHVtZS52YWx1ZSA9IHZhbHVlO1xuXHRcdFx0fVxuXG5cdFx0XHRkaXNhYmxlICgpIHtcblx0XHRcdFx0Zm9yIChsZXQgaSBpbiB0aGlzLml0ZW1zKSB7XG5cdFx0XHRcdFx0aWYgKCF0aGlzLml0ZW1zLmhhc093blByb3BlcnR5KGkpKSBjb250aW51ZTtcblx0XHRcdFx0XHR0aGlzLml0ZW1zWyBpIF0uZGlzYWJsZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGFkZCAobmFtZSkge1xuXHRcdFx0XHRpZiAobmFtZSA9PSBDX0RJVklERVIpXG5cdFx0XHRcdFx0cmV0dXJuIENvbnRyb2wuY3JlYXRlKG5hbWUpO1xuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHR0aGlzLml0ZW1zWyBuYW1lIF0gPSBDb250cm9sLmNyZWF0ZShuYW1lKTtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5pdGVtc1sgbmFtZSBdLmVsZW1lbnQ7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aGFzIChuYW1lKSB7XG5cdFx0XHRcdHJldHVybiAodHlwZW9mIHRoaXMuaXRlbXNbIG5hbWUgXSA9PSAnb2JqZWN0Jyk7XG5cdFx0XHR9XG5cblx0XHRcdGhpZGUgKCkge1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQuaGlkZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHRpbml0ICgpIHtcblx0XHRcdFx0dGhpcy5lbGVtZW50ID0gY29udGFpbmVyLmZpbmQoYC5jb250cm9scy0ke3RoaXMubmFtZX1gKVxuXHRcdFx0XHRmb3IgKGxldCBpIGluIHRoaXMuaXRlbXMpIHtcblx0XHRcdFx0XHRpZiAoIXRoaXMuaXRlbXMuaGFzT3duUHJvcGVydHkoaSkpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdCQuaXNGdW5jdGlvbih0aGlzLml0ZW1zW2ldLmluaXQpICYmIHRoaXMuaXRlbXNbaV0uaW5pdCgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuaW5pdFRpbWVsaW5lKCk7XG5cdFx0XHRcdHRoaXMudG90YWxUaW1lID0gc2Vjb25kc1RvVGltZSh2aWRlby5kdXJhdGlvbik7XG5cdFx0XHRcdHRoaXMuZG93bmxvYWQgPSBzb3VyY2VzWyAwIF0uc3JjO1xuXHRcdFx0fVxuXG5cdFx0XHRpbml0VGltZWxpbmUgKCkge1xuXHRcdFx0XHRpZiAodGhpcy5oYXMoQ19USU1FTElORSkpIHtcblx0XHRcdFx0XHRpZiAodGhpcy5pdGVtcy50aW1lbGluZS5lbGVtZW50LndpZHRoKCkgPCAyMClcblx0XHRcdFx0XHRcdHRoaXMuaXRlbXMudGltZWxpbmUuZWxlbWVudC5oaWRlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0bW92ZVRpbWVNYXJrZXIgKCkge1xuXHRcdFx0XHRpZiAodGhpcy5oYXMoQ19USU1FTElORSkpXG5cdFx0XHRcdFx0dGhpcy5pdGVtcy50aW1lbGluZS5tb3ZlKCk7XG5cdFx0XHR9XG5cblx0XHRcdHBhdXNlICgpIHtcblx0XHRcdFx0aWYgKHRoaXMuaGFzKENfUExBWSkpXG5cdFx0XHRcdFx0dGhpcy5pdGVtcy5wbGF5LnBhdXNlKCk7XG5cdFx0XHR9XG5cblx0XHRcdHBsYXkgKCkge1xuXHRcdFx0XHRpZiAodGhpcy5oYXMoQ19QTEFZKSlcblx0XHRcdFx0XHR0aGlzLml0ZW1zLnBsYXkucGxheSgpO1xuXHRcdFx0fVxuXG5cdFx0XHRzaG93ICgpIHtcblx0XHRcdFx0Y29udGFpbmVyLmZpbmQoJy5jb250cm9scy0nICsgdGhpcy5uYW1lKS5zaG93KCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y2xhc3MgQ29udHJvbHMge1xuXHRcdFx0Y29uc3RydWN0b3IgKCkge1xuXHRcdFx0XHR0aGlzLmNvbGxlY3Rpb25zID0ge1xuXHRcdFx0XHRcdGNvbW1vbiA6IG5ldyBDb250cm9sQ29sbGVjdGlvbignY29tbW9uJyksXG5cdFx0XHRcdFx0bWluaSA6IG5ldyBDb250cm9sQ29sbGVjdGlvbignbWluaScpLFxuXHRcdFx0XHRcdGZ1bGxzY3JlZW4gOiBuZXcgQ29udHJvbENvbGxlY3Rpb24oJ2Z1bGxzY3JlZW4nKVxuXHRcdFx0XHR9O1xuXHRcdFx0XHR0aGlzLmNvbGxlY3Rpb25zLmNvbW1vbi5hY3RpdmUgPSB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRnZXQgY29tbW9uICgpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuY29sbGVjdGlvbnMuY29tbW9uO1xuXHRcdFx0fVxuXG5cdFx0XHRnZXQgZnVsbHNjcmVlbiAoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmNvbGxlY3Rpb25zLmZ1bGxzY3JlZW47XG5cdFx0XHR9XG5cblx0XHRcdGdldCBtaW5pICgpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuY29sbGVjdGlvbnMubWluaTtcblx0XHRcdH1cblxuXHRcdFx0c2V0IGRvd25sb2FkICh2YWx1ZSkge1xuXHRcdFx0XHRmb3IgKHZhciBpIGluIHRoaXMuY29sbGVjdGlvbnMpIHtcblx0XHRcdFx0XHR0aGlzLmNvbGxlY3Rpb25zWyBpIF0uZG93bmxvYWQgPSB2YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRzZXQgcmF0ZSAodmFsdWUpIHtcblx0XHRcdFx0Q29va2llLnNldCgncmF0ZScsIHZhbHVlKTtcblx0XHRcdFx0Zm9yICh2YXIgaSBpbiB0aGlzLmNvbGxlY3Rpb25zKSB7XG5cdFx0XHRcdFx0dGhpcy5jb2xsZWN0aW9uc1sgaSBdLnJhdGUgPSB2YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRzZXQgc291cmNlICh2YWx1ZSkge1xuXHRcdFx0XHRmb3IgKHZhciBpIGluIHRoaXMuY29sbGVjdGlvbnMpIHtcblx0XHRcdFx0XHR0aGlzLmNvbGxlY3Rpb25zWyBpIF0uc291cmNlID0gdmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0c2V0IHRvdGFsVGltZSAodmFsdWUpIHtcblx0XHRcdFx0Zm9yICh2YXIgaSBpbiB0aGlzLmNvbGxlY3Rpb25zKSB7XG5cdFx0XHRcdFx0dGhpcy5jb2xsZWN0aW9uc1sgaSBdLnRvdGFsVGltZSA9IHZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHNldCB2b2x1bWUgKHZhbHVlKSB7XG5cdFx0XHRcdGZvciAodmFyIGkgaW4gdGhpcy5jb2xsZWN0aW9ucykge1xuXHRcdFx0XHRcdHRoaXMuY29sbGVjdGlvbnNbIGkgXS52b2x1bWUgPSB2YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRDb29raWUuc2V0KCd2b2x1bWUnLCB2YWx1ZSk7XG5cdFx0XHR9XG5cblx0XHRcdGRpc2FibGUgKCkge1xuXHRcdFx0XHRmb3IgKHZhciBpIGluIHRoaXMuY29sbGVjdGlvbnMpIHtcblx0XHRcdFx0XHR0aGlzLmNvbGxlY3Rpb25zWyBpIF0uZGlzYWJsZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGhhcyAobmFtZSkge1xuXHRcdFx0XHRyZXR1cm4gKHR5cGVvZiB0aGlzLmNvbGxlY3Rpb25zWyBuYW1lIF0gPT0gJ29iamVjdCcpO1xuXHRcdFx0fVxuXG5cdFx0XHRpbml0ICgpIHtcblx0XHRcdFx0Zm9yICh2YXIgaSBpbiB0aGlzLmNvbGxlY3Rpb25zKSB7XG5cdFx0XHRcdFx0dGhpcy5jb2xsZWN0aW9uc1sgaSBdLmluaXQoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmNvbGxlY3Rpb25zLmNvbW1vbi5zaG93KCk7XG5cdFx0XHRcdHRoaXMuY29sbGVjdGlvbnMubWluaS5oaWRlKCk7XG5cdFx0XHRcdHRoaXMuY29sbGVjdGlvbnMuZnVsbHNjcmVlbi5oaWRlKCk7XG5cdFx0XHR9XG5cblx0XHRcdG1vdmVUaW1lTWFya2VyICgpIHtcblx0XHRcdFx0Zm9yICh2YXIgaSBpbiB0aGlzLmNvbGxlY3Rpb25zKVxuXHRcdFx0XHRcdHRoaXMuY29sbGVjdGlvbnNbIGkgXS5tb3ZlVGltZU1hcmtlcigpO1xuXHRcdFx0fVxuXG5cdFx0XHRwYXVzZSAoKSB7XG5cdFx0XHRcdGZvciAodmFyIGkgaW4gdGhpcy5jb2xsZWN0aW9ucylcblx0XHRcdFx0XHR0aGlzLmNvbGxlY3Rpb25zWyBpIF0ucGF1c2UoKTtcblx0XHRcdH1cblxuXHRcdFx0cGxheSAoKSB7XG5cdFx0XHRcdGZvciAodmFyIGkgaW4gdGhpcy5jb2xsZWN0aW9ucylcblx0XHRcdFx0XHR0aGlzLmNvbGxlY3Rpb25zWyBpIF0ucGxheSgpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGNsYXNzIEljb24ge1xuXHRcdFx0Y29uc3RydWN0b3IoaWNvbk5hbWUpIHtcblx0XHRcdFx0dGhpcy5fdXNlVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICd1c2UnKTtcblx0XHRcdFx0dGhpcy5fc3ZnVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcblxuXHRcdFx0XHR0aGlzLmljb25OYW1lID0gdGhpcy5faWNvbk5hbWUgPSBpY29uTmFtZTtcblx0XHRcdFx0dGhpcy5fc3ZnVGFnLmFwcGVuZENoaWxkKHRoaXMuX3VzZVRhZyk7XG5cdFx0XHRcdHRoaXMuZWxlbWVudCA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0XHRcdC5hZGRDbGFzcygnbGVwbGF5ZXItaWNvbicpXG5cdFx0XHRcdFx0LmFwcGVuZCgkKHRoaXMuX3N2Z1RhZykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzZXQgaWNvbk5hbWUoaWNvbk5hbWUpIHtcblx0XHRcdFx0bGV0IGF0dHJOUyA9IFsnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycsICdocmVmJ11cblx0XHRcdFx0dGhpcy5fdXNlVGFnLnJlbW92ZUF0dHJpYnV0ZU5TKC4uLmF0dHJOUywgYCR7b3B0aW9ucy5zdmdQYXRofSNsZXBsYXllci1pY29uLSR7dGhpcy5pY29uTmFtZX1gKVxuXHRcdFx0XHR0aGlzLl91c2VUYWcuc2V0QXR0cmlidXRlTlMoLi4uYXR0ck5TLCBgJHtvcHRpb25zLnN2Z1BhdGh9I2xlcGxheWVyLWljb24tJHtpY29uTmFtZX1gKVxuXHRcdFx0XHR0aGlzLl9pY29uTmFtZSA9IGljb25OYW1lO1xuXHRcdFx0fVxuXG5cdFx0XHRnZXQgaWNvbk5hbWUgKCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5faWNvbk5hbWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dmFyIHNvdXJjZXMgPSBbXTtcblx0XHR2YXIgc3VidGl0bGVzID0gW107XG5cdFx0dmFyIHZvbHVtZSA9IG9wdGlvbnMudm9sdW1lLmRlZmF1bHQ7XG5cdFx0dmFyIHZpZGVvID0gbnVsbDtcblx0XHR2YXIgY29udHJvbHMgPSBuZXcgQ29udHJvbHMoKTtcblxuXHRcdC8qKlxuXHRcdCAqIERPTSBjb250YWluZXIgdG8gaG9sZCB2aWRlbyBhbmQgYWxsIG90aGVyIHN0dWZmLlxuXHRcdCAqIEB0eXBlIG9iamVjdFxuXHRcdCAqL1xuXHRcdHZhciBjb250YWluZXIgPSBudWxsO1xuXHRcdHZhciBvdmVybGF5ID0gbnVsbDtcblxuXHRcdGxldCBfY3JlYXRlTm90aWZpY2F0aW9uID0gKG9wdCkgPT4ge1xuXHRcdFx0bGV0IG5vdGlmaWNhdGlvbiwgY2xvc2VCdXR0b247XG5cdFx0XHRub3RpZmljYXRpb24gPSAkKCc8ZGl2IC8+Jylcblx0XHRcdFx0LmFkZENsYXNzKCdsZXBsYXllci1ub3RpZmljYXRpb24nKVxuXHRcdFx0XHQuYXBwZW5kKG9wdC50ZXh0KTtcblx0XHRcdHJldHVybiBub3RpZmljYXRpb247XG5cdFx0fVxuXG5cdFx0dmFyIF9zaG93Tm90aWZpY2F0aW9uID0gKG1zZykgPT4ge1xuXHRcdFx0bGV0IG5vdGlmaWNhdGlvbiA9IF9jcmVhdGVOb3RpZmljYXRpb24oeyB0ZXh0OiBtc2cgfSk7XG5cdFx0XHRub3RpZmljYXRpb24gPSAkKCc8ZGl2IC8+Jylcblx0XHRcdFx0LmFkZENsYXNzKCdsZXBsYXllci1ub3RpZmljYXRpb24nKVxuXHRcdFx0XHQuYXBwZW5kKG1zZyk7XG5cdFx0XHRjb250YWluZXIuYXBwZW5kKG5vdGlmaWNhdGlvbik7XG5cblx0XHR9XG5cblx0XHR2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdC8vIENoZWNrIGlmIGVsZW1lbnQgaXMgY29ycmVjdGx5IHNlbGVjdGVkLlxuXHRcdFx0aWYgKGVsZW1lbnQucHJvcCgndGFnTmFtZScpLnRvTG93ZXJDYXNlKCkgIT0gJ3ZpZGVvJykge1xuXHRcdFx0XHRjb25zb2xlLndhcm4oJ0luY29ycmVjdCBlbGVtZW50IHNlbGVjdGVkLicpO1xuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH1cblxuXHRcdFx0Ly8gU2V0IHNvdXJjZS5cblx0XHRcdC8vIEBUT0RPIG1vdmUgdGhpcyB0byBWaWRlbyBjbGFzc1xuXHRcdFx0ZWxlbWVudC5jaGlsZHJlbignc291cmNlJykuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHZhciBzcmMgPSAkKHRoaXMpLmF0dHIoJ3NyYycpO1xuXHRcdFx0XHRpZiAoc3JjKVxuXHRcdFx0XHRcdHNvdXJjZXMucHVzaCh7XG5cdFx0XHRcdFx0XHRzcmMgOiBzcmMsXG5cdFx0XHRcdFx0XHR0aXRsZSA6ICQodGhpcykuYXR0cigndGl0bGUnKVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0XHRpZiAoc291cmNlcy5sZW5ndGggPT0gMCkge1xuXHRcdFx0XHR2YXIgc3JjID0gZWxlbWVudC5hdHRyKCdzcmMnKTtcblx0XHRcdFx0aWYgKHNyYykge1xuXHRcdFx0XHRcdHNvdXJjZXMucHVzaCh7XG5cdFx0XHRcdFx0XHRzcmMgOiBzcmMsXG5cdFx0XHRcdFx0XHR0aXRsZSA6ICQodGhpcykuYXR0cigndGl0bGUnKSB8fCAnZGVmYXVsdCdcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKHNvdXJjZXMubGVuZ3RoID09IDApIHtcblx0XHRcdFx0Y29uc29sZS53YXJuKCdObyBzb3VyY2VzIGZvdW5kLicpO1xuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH1cblx0XHRcdHZpZGVvID0gbmV3IFZpZGVvKGVsZW1lbnQpO1xuXG5cdFx0XHQvKiogVE9ETzogVXNlIHByb21pc2UgdG8gYXN5bmMgcnVuIHRoaXMgKi9cblx0XHRcdGluaXRPcHRpb25zKCk7XG5cdFx0XHRpbml0RG9tKCk7XG5cdFx0XHRpbml0Q29udHJvbHMoKTtcblx0XHRcdHZpZGVvLmluaXQoKS5kb25lKCgpID0+IHsgdmlkZW8udHJpZ2dlcignaW5pdGVkJyl9KTtcblx0XHRcdGluaXRIb3RLZXlzKCk7XG5cblx0XHRcdC8vIHZpZGVvLnRyaWdnZXIoYGluaXRlZGApO1xuXG5cdFx0fTtcblxuXHRcdHZhciBpbml0Q29udHJvbHMgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRmb3IgKGxldCBuYW1lIGluIG9wdGlvbnMuY29udHJvbHMpIHtcblx0XHRcdFx0aWYgKCFjb250cm9scy5oYXMobmFtZSkpIGNvbnRpbnVlO1xuXHRcdFx0XHRmb3IgKGxldCByb3dJbmRleCBpbiBvcHRpb25zLmNvbnRyb2xzWyBuYW1lIF0pIHtcblx0XHRcdFx0XHRsZXQgcm93ID0gb3B0aW9ucy5jb250cm9sc1sgbmFtZSBdWyByb3dJbmRleCBdLFxuXHRcdFx0XHRcdFx0aGFzVGltZWxpbmUgPSBmYWxzZSxcblx0XHRcdFx0XHRcdHJvd0VsZW1lbnQgPSAkKCc8ZGl2IC8+JykuYWRkQ2xhc3MoJ2xlcGxheWVyLWNvbnRyb2xzIGNvbnRyb2xzLScgKyBuYW1lKTtcblxuXHRcdFx0XHRcdGZvciAobGV0IGkgaW4gcm93KSB7XG5cdFx0XHRcdFx0XHRsZXQgY29udHJvbE5hbWUgPSByb3dbIGkgXTtcblxuXHRcdFx0XHRcdFx0aWYgKGNvbnRyb2xOYW1lID09IENfRElWSURFUiB8fCAhY29udHJvbHMuY29sbGVjdGlvbnNbIG5hbWUgXS5oYXMoY29udHJvbE5hbWUpKSB7XG5cdFx0XHRcdFx0XHRcdC8vIENyZWF0ZSBjb250cm9sIG9ubHkgaWYgZGl2aWRlciBvciBkb2VzIG5vdCBleGlzdCB5ZXQuXG5cdFx0XHRcdFx0XHRcdHZhciBjID0gY29udHJvbHMuY29sbGVjdGlvbnNbIG5hbWUgXS5hZGQoY29udHJvbE5hbWUpO1xuXHRcdFx0XHRcdFx0XHRpZiAoYyAhPSBudWxsKSB7XG5cdFx0XHRcdFx0XHRcdFx0cm93RWxlbWVudC5hcHBlbmQoYyk7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKGNvbnRyb2xOYW1lID09IENfVElNRUxJTkUpXG5cdFx0XHRcdFx0XHRcdFx0XHRoYXNUaW1lbGluZSA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUud2FybignQ2Fubm90IGNyZWF0ZSAnICsgY29udHJvbE5hbWUgKyAnIGNvbnRyb2wgZm9yIGNvbGxlY3Rpb24gJyArIG5hbWUgKyAnLicpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmICghaGFzVGltZWxpbmUpXG5cdFx0XHRcdFx0XHRyb3dFbGVtZW50LmNzcygnd2lkdGgnLCAnMXB4Jyk7XG5cblx0XHRcdFx0XHRyb3dFbGVtZW50LmZpbmQoJy5kaXZpZGVyICsgLmRpdmlkZXInKS5yZW1vdmUoKTtcblxuXHRcdFx0XHRcdGNvbnRhaW5lci5hcHBlbmQocm93RWxlbWVudCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0dmFyIGluaXREb20gPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRsZXQgdmlkZW9Db250YWluZXI7XG5cdFx0XHRsZXQgaWNvbiA9IG5ldyBJY29uKCdwbGF5Jyk7XG5cdFx0XHRvdmVybGF5ID0gJCgnPGRpdiAvPicpXG5cdFx0XHRcdC5hZGRDbGFzcygncGxheS1vdmVybGF5Jylcblx0XHRcdFx0LmFwcGVuZChpY29uLmVsZW1lbnQpO1xuXHRcdFx0dmlkZW9Db250YWluZXIgPSAkKCc8ZGl2IC8+Jylcblx0XHRcdFx0LmFkZENsYXNzKCdsZXBsYXllci12aWRlbycpXG5cdFx0XHRcdC5hcHBlbmQob3ZlcmxheSk7XG5cdFx0XHRjb250YWluZXIgPSAkKCc8ZGl2IC8+Jylcblx0XHRcdFx0LmFkZENsYXNzKCdsZXBsYXllci1jb250YWluZXInKVxuXHRcdFx0XHQuYXBwZW5kKHZpZGVvQ29udGFpbmVyKVxuXHRcdFx0XHQuYXR0cigndGFiaW5kZXgnLCAwKVxuXHRcdFx0XHQuY3NzKCd3aWR0aCcsIGVsZW1lbnQud2lkdGgoKSArICdweCcpO1xuXG5cdFx0XHRlbGVtZW50LmJlZm9yZShjb250YWluZXIpO1xuXHRcdFx0dmlkZW9Db250YWluZXIuYXBwZW5kKGVsZW1lbnQpO1xuXHRcdFx0b3ZlcmxheS5vbih7XG5cdFx0XHRcdCdjbGljaycgICAgOiAoZSkgPT4geyBlbGVtZW50LnRyaWdnZXIoJ2NsaWNrJyk7IH0sXG5cdFx0XHRcdCdkYmxjbGljaycgOiAoZSkgPT4geyBlbGVtZW50LnRyaWdnZXIoJ2RibGNsaWNrJyk7IH1cblx0XHRcdH0pO1xuXHRcdH07XG5cblx0XHR2YXIgaW5pdEhvdEtleXMgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdGxldCBpc0tleUJpbmRpbmcgPSAoZSwgYmluZGluZykgPT4ge1xuXHRcdFx0XHRyZXR1cm4gKChlLndoaWNoID09PSBiaW5kaW5nLmtleSkgfHwgKGUua2V5ID09PSBiaW5kaW5nLmtleSkpICYmXG5cdFx0XHRcdFx0XHQoISFiaW5kaW5nLnNoaWZ0S2V5ID09IGUuc2hpZnRLZXkpICYmXG5cdFx0XHRcdFx0XHQoISFiaW5kaW5nLmN0cmxLZXkgPT0gZS5jdHJsS2V5KVxuXHRcdFx0fVxuXG5cdFx0XHQkKGNvbnRhaW5lcikuYmluZCgna2V5ZG93bi5sZXBsYXllci5ob3RrZXknLCAoZSkgPT4ge1xuXHRcdFx0XHRsZXQgX2lzRm9jdXNlZCA9IGlzRm9jdXNlZCgpO1xuXHRcdFx0XHRpZiAoX2lzRm9jdXNlZCkge1xuXHRcdFx0XHRcdCQuZWFjaChvcHRpb25zLmtleUJpbmRpbmcsIChhY3Rpb24sIGJpbmRpbmcpID0+IHtcblx0XHRcdFx0XHRcdGlmKCBpc0tleUJpbmRpbmcoZSwgYmluZGluZykgKSB7XG5cdFx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0YmluZGluZy5mbih2aWRlbyk7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdH07XG5cblx0XHR2YXIgaW5pdE9wdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRsZXQgaGVpZ2h0LCB3aWR0aCwgcG9zdGVyLCBhdHRycywgcHJlbG9hZDtcblx0XHRcdGVsZW1lbnQucmVtb3ZlQXR0cignY29udHJvbHMnKTtcblxuXHRcdFx0aGVpZ2h0ID0gZWxlbWVudC5hdHRyKCdoZWlnaHQnKTtcblx0XHRcdGlmIChoZWlnaHQpIHtcblx0XHRcdFx0b3B0aW9ucy5oZWlnaHQgPSBoZWlnaHQgKyAncHgnO1xuXHRcdFx0XHRlbGVtZW50LnJlbW92ZUF0dHIoJ2hlaWdodCcpO1xuXHRcdFx0fVxuXHRcdFx0ZWxlbWVudC5jc3MoJ2hlaWdodCcsIG9wdGlvbnMuaGVpZ2h0KTtcblxuXHRcdFx0d2lkdGggPSBlbGVtZW50LmF0dHIoJ3dpZHRoJyk7XG5cdFx0XHRpZiAod2lkdGgpIHtcblx0XHRcdFx0b3B0aW9ucy53aWR0aCA9IHdpZHRoICsgJ3B4Jztcblx0XHRcdFx0ZWxlbWVudC5yZW1vdmVBdHRyKCd3aWR0aCcpO1xuXHRcdFx0fVxuXHRcdFx0ZWxlbWVudC5jc3MoJ3dpZHRoJywgb3B0aW9ucy53aWR0aCk7XG5cblx0XHRcdHBvc3RlciA9IGVsZW1lbnQuYXR0cigncG9zdGVyJyk7XG5cdFx0XHRpZiAocG9zdGVyKVxuXHRcdFx0XHRvcHRpb25zLnBvc3RlciA9IHBvc3Rlcjtcblx0XHRcdGVsc2UgaWYgKG9wdGlvbnMucG9zdGVyKVxuXHRcdFx0XHRlbGVtZW50LmF0dHIoJ3Bvc3RlcicsIG9wdGlvbnMucG9zdGVyKTtcblxuXHRcdFx0YXR0cnMgPSBbICdhdXRvcGxheScsICdsb29wJywgJ211dGVkJyBdO1xuXHRcdFx0YXR0cnMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuXHRcdFx0XHR2YXIgYSA9IGVsZW1lbnQuYXR0cihpdGVtKTtcblx0XHRcdFx0aWYgKGEpIHtcblx0XHRcdFx0XHRvcHRpb25zWyBpdGVtIF0gPSB0cnVlO1xuXHRcdFx0XHR9IGVsc2UgaWYgKG9wdGlvbnNbIGl0ZW0gXSkge1xuXHRcdFx0XHRcdGVsZW1lbnQuYXR0cihpdGVtLCAnJyk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZWxlbWVudC5yZW1vdmVBdHRyKGl0ZW0pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsZW1lbnQucHJvcChpdGVtLCBvcHRpb25zWyBpdGVtIF0pO1xuXHRcdFx0fSlcblxuXHRcdFx0cHJlbG9hZCA9IGVsZW1lbnQuYXR0cigncHJlbG9hZCcpO1xuXHRcdFx0aWYgKHByZWxvYWQpIHtcblx0XHRcdFx0cHJlbG9hZCA9IHByZWxvYWQudG9Mb3dlckNhc2UoKTtcblx0XHRcdFx0aWYgKHByZWxvYWQgPT0gJ25vbmUnIHx8IHByZWxvYWQgPT0gJ21ldGFkYXRhJylcblx0XHRcdFx0XHRvcHRpb25zLnByZWxvYWQgPSBwcmVsb2FkO1xuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0b3B0aW9ucy5wcmVsb2FkID0gJ2F1dG8nO1xuXHRcdFx0fVxuXHRcdFx0ZWxlbWVudC5hdHRyKCdwcmVsb2FkJywgb3B0aW9ucy5wcmVsb2FkKTtcblx0XHR9O1xuXG5cdFx0dmFyIHNlY29uZHNUb1RpbWUgPSBmdW5jdGlvbiAoc2Vjb25kcykge1xuXHRcdFx0dmFyIGggPSBNYXRoLmZsb29yKHNlY29uZHMgLyAzNjAwKTtcblx0XHRcdHZhciBtID0gTWF0aC5mbG9vcihzZWNvbmRzICUgMzYwMCAvIDYwKTtcblx0XHRcdHZhciBzID0gTWF0aC5mbG9vcihzZWNvbmRzICUgMzYwMCAlIDYwKTtcblx0XHRcdHZhciBvdXQgPSAnJztcblx0XHRcdGlmIChoID4gMClcblx0XHRcdFx0b3V0ID0gaCArICc6Jztcblx0XHRcdGlmIChtIDwgMTApXG5cdFx0XHRcdG91dCArPSAnMCc7XG5cdFx0XHRvdXQgKz0gbSArICc6Jztcblx0XHRcdGlmIChzIDwgMTApXG5cdFx0XHRcdG91dCArPSAnMCc7XG5cdFx0XHRvdXQgKz0gcztcblx0XHRcdHJldHVybiBvdXQ7XG5cdFx0fTtcblxuXG5cdFx0dmFyIGlzRm9jdXNlZCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGxldCBmb2N1c2VkID0gJChjb250YWluZXIpLmZpbmQoJzpmb2N1cycpO1xuXHRcdFx0cmV0dXJuIChmb2N1c2VkLmxlbmd0aCA+IDApIHx8ICQoY29udGFpbmVyKS5pcygnOmZvY3VzJyk7XG5cdFx0fVxuXG5cblx0XHRpbml0KCk7XG5cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdHdpbmRvdy4kLmZuLmxlUGxheWVyID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblx0XHRyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBuZXcgUGxheWVyKCQodGhpcyksIG9wdGlvbnMpO1xuXHRcdH0pO1xuXHR9O1xufShqUXVlcnkpKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNvdXJjZS9qcy9sZS1wbGF5ZXIuZXM2LmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQU9BO0FBQ0E7QUFJQTtBQUxBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFIQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUF6Q0E7QUF2Q0E7QUFDQTs7Ozs7QUFkQTtBQTBHQTtBQUVBO0FBRkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7Ozs7OztBQUhBOztBQVdBO0FBQ0E7Ozs7QUFRQTs7O0FBQ0E7QUFDQTtBQURBOztBQURBO0FBQ0E7QUFNQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBdEJBOzs7Ozs7Ozs7QUFpQ0E7QUFDQTs7OztBQVFBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFKQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFUQTs7OztBQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFOQTtBQUFBO0FBVUE7QUFJQTtBQUxBO0FBVEE7Ozs7Ozs7OztBQXNCQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBSkE7Ozs7QUFsSUE7QUExR0E7QUFDQTtBQW9QQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUNBO0FBRkE7O0FBNEZBOzs7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQURBO0FBR0E7QUFIQTs7OztBQU9BO0FBQ0E7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBR0E7OztBQUFBOztBQUFBO0FBQ0E7QUFBQTs7OztBQUdBO0FBQ0E7Ozs7QUFHQTtBQUNBOzs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFKQTs7OztBQWNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFKQTtBQVNBO0FBQ0E7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUpBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBRkE7QUFjQTs7OztBQUdBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQUNBO0FBaEJBOzs7O0FBMEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTs7OztBQTFPQTtBQUNBOztBQUdBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFEQTtBQUdBO0FBSEE7Ozs7QUFPQTtBQUNBOzs7O0FBR0E7QUFDQTs7OztBQUdBO0FBQ0E7O0FBT0E7QUFDQTtBQUNBO0FBREE7O0FBREE7Ozs7QUFKQTtBQUNBOzs7O0FBV0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFUQTtBQWVBO0FBREE7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFEQTs7OztBQVFBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQURBO0FBR0E7QUFIQTtBQUtBO0FBQ0E7Ozs7QUF6RkE7QUFyUEE7QUFDQTtBQThlQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBT0E7QUFJQTtBQUNBO0FBTEE7QUFSQTtBQUNBO0FBRkE7O0FBK0RBO0FBQ0E7QUFDQTs7OztBQUdBO0FBQ0E7QUFDQTtBQURBO0FBR0E7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7O0FBR0E7QUFDQTs7OztBQUdBO0FBQ0E7Ozs7QUFwRUE7QUFDQTs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFUQTtBQVdBO0FBQ0E7QUFaQTtBQWNBO0FBQ0E7QUFmQTtBQWlCQTtBQUNBO0FBbEJBO0FBb0JBO0FBQ0E7QUFyQkE7QUF1QkE7QUFDQTtBQXhCQTtBQTBCQTtBQUNBO0FBM0JBO0FBNkJBO0FBQ0E7QUE5QkE7QUFnQ0E7QUFDQTtBQWpDQTtBQW1DQTtBQW5DQTs7OztBQXhCQTtBQS9lQTtBQUNBO0FBMmtCQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUZBOztBQUtBO0FBQ0E7Ozs7QUFOQTtBQTVrQkE7QUFDQTtBQXFsQkE7OztBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQVBBO0FBQ0E7QUFGQTs7QUFpQ0E7OztBQUNBO0FBQ0E7O0FBS0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFEQTs7OztBQU1BO0FBQ0E7Ozs7QUFuREE7QUFDQTtBQUNBO0FBREE7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBU0E7Ozs7QUE3QkE7QUFBQTtBQUNBO0FBaUVBOzs7QUFFQTtBQUZBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFIQTs7QUFNQTtBQUNBO0FBQ0E7Ozs7QUFSQTtBQUFBO0FBQ0E7QUFXQTs7O0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7O0FBSEE7QUFDQTtBQUZBOztBQVlBO0FBQ0E7Ozs7QUFiQTtBQUFBO0FBQ0E7QUFnQkE7OztBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFDQTtBQUtBOzs7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFGQTs7QUFLQTtBQUNBO0FBQ0E7Ozs7QUFQQTtBQUFBO0FBQ0E7QUFVQTs7O0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRkE7O0FBS0E7QUFDQTs7OztBQUdBO0FBQ0E7Ozs7QUFHQTtBQUNBO0FBQ0E7Ozs7QUFmQTtBQUFBO0FBQ0E7QUFrQkE7OztBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFHQTs7QUFkQTtBQUNBO0FBRkE7O0FBc0JBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBSUE7Ozs7QUFHQTtBQUNBO0FBQ0E7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFJQTs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBcERBO0FBQUE7QUFDQTtBQXVEQTs7O0FBQ0E7QUFEQTtBQUNBOzs7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUhBO0FBQUE7QUFDQTtBQUZBOztBQWFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7Ozs7QUFNQTtBQUNBO0FBQ0E7Ozs7QUF4QkE7QUFBQTtBQUNBO0FBMkJBOzs7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFGQTs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFIQTtBQURBOzs7O0FBY0E7QUFDQTtBQUNBOzs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUE1QkE7QUFBQTtBQUNBO0FBa0NBOzs7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUpBO0FBQ0E7QUFZQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBakNBO0FBQ0E7QUFvQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUpBO0FBSEE7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUZBO0FBYkE7O0FBMUVBO0FBQ0E7QUFGQTs7QUErRkE7QUFDQTs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7Ozs7QUExR0E7QUFBQTtBQUNBO0FBNkdBOzs7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSEE7QUFDQTtBQU9BO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSEE7QUFDQTtBQU9BO0FBQ0E7QUFEQTtBQVRBOztBQWhDQTtBQUNBO0FBRkE7O0FBZ0VBO0FBQ0E7QUFDQTtBQURBOzs7O0FBT0E7QUFDQTs7OztBQUdBO0FBQ0E7QUFDQTs7OztBQTlCQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBSkE7QUFDQTtBQVNBO0FBQ0E7QUFDQTs7OztBQTdEQTtBQUFBO0FBQ0E7QUFpRkE7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFLQTs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBZEE7QUFoaENBO0FBQ0E7QUFpaUNBOztBQWxpQ0E7QUFDQTtBQXFpQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBRkE7O0FBbUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7Ozs7QUFNQTtBQUNBO0FBR0E7QUFDQTtBQUpBOzs7O0FBUUE7QUFDQTs7OztBQUdBO0FBQ0E7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFEQTs7OztBQU1BO0FBQ0E7Ozs7QUFJQTtBQUNBOzs7O0FBSUE7QUFDQTs7OztBQUlBO0FBQ0E7Ozs7QUF0RkE7QUFDQTtBQUNBO0FBREE7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFEQTs7OztBQUtBO0FBQ0E7QUFDQTtBQURBOzs7O0FBS0E7QUFDQTs7OztBQUlBO0FBQ0E7Ozs7QUEvQkE7QUF0aUNBO0FBQ0E7QUFzb0NBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBTkE7QUFDQTtBQUZBOztBQXNEQTtBQUNBO0FBQ0E7QUFEQTs7OztBQUtBO0FBQ0E7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTs7OztBQUdBO0FBQ0E7QUFDQTtBQURBOzs7O0FBSUE7QUFDQTtBQUNBO0FBREE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFEQTs7OztBQTFFQTtBQUNBOzs7O0FBR0E7QUFDQTs7OztBQUdBO0FBQ0E7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFEQTs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBREE7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFEQTs7OztBQUtBO0FBQ0E7QUFDQTtBQURBOzs7O0FBS0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7OztBQW5EQTtBQXZvQ0E7QUFDQTtBQSt0Q0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUNBO0FBRkE7O0FBWUE7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBO0FBQ0E7Ozs7QUFwQkE7QUFodUNBO0FBQ0E7QUF1dkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUE3dkNBO0FBbXdDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUxBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFHQTtBQUxBO0FBQ0E7QUFRQTs7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUNBOzs7QUFIQTtBQVVBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFIQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFGQTtBQVNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTs7QUEvQkE7QUFrQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBdENBO0FBQUE7QUEyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFIQTtBQUhBO0FBQ0E7QUFlQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBMUJBO0FBRkE7QUFEQTtBQUNBO0FBaUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFHQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFqQkE7QUFDQTtBQXNCQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQURBO0FBRkE7QUFSQTtBQUNBO0FBcUJBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFEQTtBQUdBO0FBSEE7QUFLQTtBQVRBO0FBQ0E7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBT0E7QUE3Q0E7QUFDQTtBQStDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBYkE7QUFDQTtBQWdCQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBS0E7QUFDQTtBQUVBO0FBMTlDQTtBQUNBO0FBNDlDQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBaCtDQTs7OyIsInNvdXJjZVJvb3QiOiIifQ==