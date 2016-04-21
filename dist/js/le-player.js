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
				width: 'auto',
				fullscreen: {
					hideTimelineTime: 7000
				},
				rate: {
					step: 0.25,
					min: 0.5,
					max: 4.0,
					default: 1
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
							}
						});
					}

					/**
	     * @returns {boolean} Whether browser is in fullscreen mode.
	     */

				}, {
					key: 'is',
					value: function is() {
						return !!(document.fullScreen || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || document.fullscreenElement);
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
							'mousemove.le-player-fullscreen-hide-timeline': function mousemoveLePlayerFullscreenHideTimeline(e) {
								if (!$(e.currentTarget).hasClass('fullscreen')) return false;
								clearTimeout(_this2._hideTimeout);
								_this2._collection.element.show();
								_this2._hideTimeout = setTimeout(function () {
									_this2._collection.element.hide();
								}, options.fullscreen.hideTimelineTime);
							},
							'mouseleave.le-player-fullscreen-hide-timeline': function mouseleaveLePlayerFullscreenHideTimeline(e) {
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
						$(container).off('.le-player-fullscreen-hide-timeline');
					}
				}, {
					key: 'toggle',
					value: function toggle() {
						if (this.is()) {
							if (document.exitFullscreen) document.exitFullscreen();else if (document.mozCancelFullScreen) document.mozCancelFullScreen();else if (document.webkitCancelFullScreen) document.webkitCancelFullScreen();else if (document.msExitFullscreen) document.msExitFullscreen();
							this.hideElements(); // @TODO: make this only if fullscreen fired.
						} else {
								var containerEl = container[0];
								if (containerEl.requestFullScreen) containerEl.requestFullScreen();else if (containerEl.webkitRequestFullScreen) containerEl.webkitRequestFullScreen();else if (containerEl.mozRequestFullScreen) containerEl.mozRequestFullScreen();else if (containerEl.msExitFullscreen) containerEl.msRequestFullscreen();
								this.showElements(); // @TODO: make this only if fullscreen fired.
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
						this._initSubtitles();
						this._initVideo();
						this._initRate();
						this._initVolume();
					}
				}, {
					key: 'togglePlay',
					value: function togglePlay() {
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
						var _this3 = this;

						if (this._video.readyState > HTMLMediaElement.HAVE_NOTHING) {
							this._initVideoEvent();
						} else {
							$(this._video).one('loadedmetadata', function (e) {
								_this3._initVideoEvent();
							});
						}
					}
				}, {
					key: '_initVideoEvent',
					value: function _initVideoEvent() {
						var _this4 = this;

						var _self = this;
						var timerId = null;
						var mediaElement = $(this._video);

						container.css('width', this._video.clientWidth + 'px');

						mediaElement.on({
							'timeupdate': function timeupdate() {
								controls.moveTimeMarker();
							},
							'ended': function ended() {
								_this4.pause();
							},

							'dblclick': function dblclick() {
								clearTimeout(timerId);
								_this4.fullscreen.toggle();
							},

							'click': function click() {
								clearTimeout(timerId);
								timerId = setTimeout(function () {
									container.focus();
									_this4.togglePlay();
								}, 300);
							}

						});

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
						video.fullscreen.init();
						controls.init();
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
						var _this5 = this;

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
							controls.totalTime = secondsToTime(_this5._video.duration);
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

					this.element = $('<div />').addClass('control ' + cssClass).append($('<i />').addClass('fa fa-' + iconClass));
				}

				_createClass(Control, null, [{
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

			var ControlContainer = function () {
				function ControlContainer(iconClass) {
					_classCallCheck(this, ControlContainer);

					var _self = this;
					this.iconClass = iconClass;
					this.icon = $('<div />').addClass('control-icon').append($('<i />').addClass('fa fa-' + iconClass));
					this.listElement = $('<div/>').addClass('control-inner');
					this.element = $('<div />').addClass('control control-container').append(this.icon).append(this.listElement);
					this._index = 0;
					this.list = [];
					this.icon.click(function () {
						_self.onContainerClick();
					});
				}

				_createClass(ControlContainer, [{
					key: 'addItem',
					value: function addItem(text, data) {
						var _self = this;
						var item = $('<div />').addClass('inner-item').data('index', this._index).html(text).click(function () {
							_self.onItemClick($(this).data('index'));
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
					key: 'disable',
					value: function disable() {
						this.element.addClass('disabled');
					}
				}, {
					key: 'getByIndex',
					value: function getByIndex(index) {
						for (var i in this.list) {
							if (this.list[i].data('index') == index) return this.list[i];
						}return null;
					}
				}, {
					key: 'onContainerClick',
					value: function onContainerClick() {}
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
								this.icon.html(this.list[i].html());
								hasActive = true;
							} else this.list[i].removeClass('active');
						}
						if (!hasActive) this.icon.html($('<i />').addClass('fa fa-' + this.iconClass));
					}
				}]);

				return ControlContainer;
			}();

			var BackwardControl = function (_Control) {
				_inherits(BackwardControl, _Control);

				function BackwardControl() {
					_classCallCheck(this, BackwardControl);

					var _this6 = _possibleConstructorReturn(this, Object.getPrototypeOf(BackwardControl).call(this, 'backward', 'undo'));

					_this6.element.click(function (e) {
						video.currentTime -= options.playback.step.medium;
					});
					return _this6;
				}

				return BackwardControl;
			}(Control);

			var DownloadControl = function (_Control2) {
				_inherits(DownloadControl, _Control2);

				function DownloadControl() {
					_classCallCheck(this, DownloadControl);

					var _this7 = _possibleConstructorReturn(this, Object.getPrototypeOf(DownloadControl).call(this, '', ''));

					_this7.element = $('<a />').attr('href', '').attr('target', '_blank').attr('download', '').addClass('control download').append($('<i />').addClass('fa fa-download'));
					return _this7;
				}

				_createClass(DownloadControl, [{
					key: 'link',
					set: function set(value) {
						this.element.attr('href', value);
					}
				}]);

				return DownloadControl;
			}(Control);

			var ForwardControl = function (_Control3) {
				_inherits(ForwardControl, _Control3);

				function ForwardControl() {
					_classCallCheck(this, ForwardControl);

					return _possibleConstructorReturn(this, Object.getPrototypeOf(ForwardControl).call(this, 'forward', 'redo'));
				}

				return ForwardControl;
			}(Control);

			var FullscreenControl = function (_Control4) {
				_inherits(FullscreenControl, _Control4);

				function FullscreenControl() {
					_classCallCheck(this, FullscreenControl);

					var _this9 = _possibleConstructorReturn(this, Object.getPrototypeOf(FullscreenControl).call(this, 'fullscreen', 'arrows-alt'));

					_this9.element.click(function (e) {
						video.fullscreen.toggle();
					});
					return _this9;
				}

				return FullscreenControl;
			}(Control);

			var PlayControl = function (_Control5) {
				_inherits(PlayControl, _Control5);

				function PlayControl() {
					_classCallCheck(this, PlayControl);

					var _this10 = _possibleConstructorReturn(this, Object.getPrototypeOf(PlayControl).call(this, 'play', 'play'));

					_this10.element.click(function (e) {
						video.togglePlay();
					});
					return _this10;
				}

				_createClass(PlayControl, [{
					key: 'pause',
					value: function pause() {
						this.element.children('.fa').removeClass('fa-pause').addClass('fa-play');
					}
				}, {
					key: 'play',
					value: function play() {
						this.element.children('.fa').removeClass('fa-play').addClass('fa-pause');
					}
				}]);

				return PlayControl;
			}(Control);

			var RateControl = function () {
				function RateControl() {
					_classCallCheck(this, RateControl);

					this.down = new Control('rate-down', 'backward');
					this.up = new Control('rate-up', 'forward');
					this.current = new ControlText('rate-current');

					this.down.element.click(function (e) {
						video.rate -= options.rate.step;
					});

					this.up.element.click(function (e) {
						video.rate += options.rate.step;
					});

					this.element = $('<div />').addClass('control-container').append(this.down.element).append(this.current.element).append(this.up.element);
				}

				_createClass(RateControl, [{
					key: 'set',
					value: function set(value) {
						this.up.element.removeClass('disabled');
						this.down.element.removeClass('disabled');
						if (video.rate <= options.rate.min) this.down.element.addClass('disabled');else if (video.rate >= options.rate.max) this.up.element.addClass('disabled');
						this.show();
					}
				}, {
					key: 'show',
					value: function show() {
						this.current.text = '×' + video.rate.toFixed(2).toString().replace(',', '.');
					}
				}]);

				return RateControl;
			}();

			var SourceControl = function (_ControlContainer) {
				_inherits(SourceControl, _ControlContainer);

				function SourceControl() {
					_classCallCheck(this, SourceControl);

					/** TODO: Move sources to the arguments in constror */

					var _this11 = _possibleConstructorReturn(this, Object.getPrototypeOf(SourceControl).call(this, 'bullseye'));

					if (sources.length > 1) {
						for (var i in sources) {
							_this11.addItem(sources[i].title, { src: sources[i].src });
						}
					} else _this11.disable();
					return _this11;
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

					return _possibleConstructorReturn(this, Object.getPrototypeOf(SubtitleControl).call(this, 'commenting-o'));
				}

				_createClass(SubtitleControl, [{
					key: 'init',
					value: function init() {
						if (video.subtitles.length > 0) {
							for (var i in video.subtitles) {
								if (video.subtitles.hasOwnProperty(i)) {
									var item = video.subtitles[i];
									this.addItem(item.title, {
										src: item.src,
										language: item.language
									});
								}
							}
						} else this.disable();
					}
				}, {
					key: 'onContainerClick',
					value: function onContainerClick() {
						_get(Object.getPrototypeOf(SubtitleControl.prototype), 'onContainerClick', this).call(this);
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

			var TimelineControl = function () {
				function TimelineControl() {
					var _this13 = this;

					_classCallCheck(this, TimelineControl);

					var _self = this,
					    duration = video.duration;

					this.drag = false;

					this.current = new ControlText('time-current');
					this.total = new ControlText('time-total');

					this.marker = $('<div />').addClass('time-marker');

					this.markerShadow = $('<div />').addClass('time-marker shadow').append().hide();

					this.markerShadowTime = $('<div />').addClass('time');
					this.markerTime = $('<div />').addClass('time').hide();
					this.played = $('<div />').addClass('time-played');
					this.current.text = '00:00';
					this.line = $('<div />').addClass('timeline').append(this.marker.append(this.markerTime)).append(this.markerShadow.append(this.markerShadowTime)).append(this.played).on({
						'mousemove': function mousemove(e) {
							if (_this13.drag) return;

							var p = _this13.getPosition(e.pageX);
							if (p > 0 && p < 1) {
								_this13.markerShadow.show();
								_this13.markerShadow.css('left', p * 100 + '%');
								_this13.markerShadowTime.html(secondsToTime(video.duration * p));
							} else _this13.markerShadow.hide();
						},

						'mouseleave': function mouseleave(e) {
							if (_this13.drag) return;
							_this13.markerShadow.hide();
						},

						'mousedown': function mousedown(e) {},

						'click': function click(e) {
							if (e.which !== 1) return;
							if (_this13.drag) return;
							video.seek(video.duration * _this13.getPosition(e.pageX));
						}
					});

					this.element = $('<div />').addClass('timeline-container').append($('<div />').addClass('timeline-subcontainer').append(this.current.element).append(this.line).append(this.total.element));

					this.marker.on('mousedown', function (e) {
						if (e.which !== 1) return;
						e.preventDefault();
						_this13.markerShadow.hide();
						_this13.drag = true;
					});

					$(document).on({

						'mousemove': function mousemove(e) {
							if (!_this13.drag) return;
							var p = _this13.getPosition(e.pageX);
							if (p > 0 && p < 1) {
								_this13.markerTime.show().html(secondsToTime(video.duration * p));
								video.seek(video.duration * p);
							}
						},

						'mouseup': function mouseup(e) {
							_this13.markerTime.hide();
							_this13.drag = false;
						}
					});
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
			}();

			var VolumeControl = function () {
				function VolumeControl() {
					var _this14 = this;

					_classCallCheck(this, VolumeControl);

					var _self = this;

					this.icon = $('<div/>').addClass('control-icon').append($('<i />').addClass('fa fa-volume-down')).click(function () {
						_self.toggleMuted();
					});

					this.marker = $('<div/>').addClass('volume-marker');

					this.active = $('<div/>').addClass('volume-active');

					this.line = $('<div/>').addClass('volume-line').append(this.active).append(this.marker).on('click', function (e) {
						if (_this14.drag) return;
						var p = _this14.getPosition(e.pageY);
						if (p >= 0 && p <= 1) {
							video.volume = 1 - p;
						}
					});

					this.element = $('<div />').addClass('control control-container').append(this.icon).append($('<div />').addClass('control-inner volume-slider').append(this.line));

					this.drag = false;

					this.marker.on('mousedown', function (e) {
						if (e.which != 1) return;
						_this14.drag = true;
					});

					$(document).on({
						'mousemove': function mousemove(e) {
							if (!_this14.drag) return;
							var p = _this14.getPosition(e.pageY);
							if (p >= 0 && p <= 1) {
								video.volume = 1 - p;
							}
						},

						'mouseup': function mouseup(e) {
							_this14.drag = false;
						}
					});
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
					key: 'value',
					set: function set(value) {
						var icon = this.icon.children('.fa').eq(-1);
						icon.removeClass();
						if (value < options.volume.mutelimit) {
							icon.addClass('fa fa-volume-off');
						} else {
							if (value < 0.5) icon.addClass('fa fa-volume-down');else icon.addClass('fa fa-volume-up');
						}

						var p = Math.round(value * 100).toString() + '%';
						this.active.css('height', p);
						this.marker.css('bottom', p);
					}
				}]);

				return VolumeControl;
			}();

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

			var ControlCollection = function () {
				function ControlCollection(name, active) {
					_classCallCheck(this, ControlCollection);

					this.items = [];
					this.active = active || false;
					this.name = name;
				}

				_createClass(ControlCollection, [{
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
						this.initTimeline();
						this.totalTime = secondsToTime(video.duration);
						this.download = sources[0].src;
						this.initSubtitles();
					}
				}, {
					key: 'initSubtitles',
					value: function initSubtitles() {
						if (this.has(C_SUBTITLE)) {
							this.items[C_SUBTITLE].init();
						}
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

				initOptions();
				initDom();
				initControls();
				video.init();

				initHotKeys();
			};

			var initControls = function initControls() {
				for (var name in options.controls) {
					if (controls.has(name)) {
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
				}
			};

			var initDom = function initDom() {
				var videoContainer;
				overlay = $('<div />').addClass('play-overlay').html('<i class="fa fa-play"></i>');
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

				$(container).bind('keydown.le-player-hotkey', function (e) {
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
				// Controls.
				element.removeAttr('controls');

				// Height.
				var h = element.attr('height');
				if (h) {
					options.height = h + 'px';
					element.removeAttr('height');
				}
				element.css('height', options.height);

				// Width.
				var w = element.attr('width');
				if (w) {
					options.width = w + 'px';
					element.removeAttr('width');
				}
				element.css('width', options.width);

				// Poster.
				var p = element.attr('poster');
				if (p) options.poster = p;else if (options.poster) element.attr('poster', options.poster);

				// Autoplay, loop, muted.
				var attrs = ['autoplay', 'loop', 'muted'];
				for (var i in attrs) {
					var a = element.attr(attrs[i]);
					if (a) options[attrs[i]] = true;else if (options[attrs[i]]) element.attr(attrs[i], '');else element.removeAttr(attrs[i]);
					element.prop(attrs[i], options[attrs[i]]);
				}

				// Preload.
				var r = element.attr('preload');
				if (r) {
					r = r.toLowerCase();
					if (r == 'none' || r == 'metadata') options.preload = r;else options.preload = 'auto';
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
				Player($(this), options);
			});
		};
	})(jQuery);

/***/ }
/******/ ]);