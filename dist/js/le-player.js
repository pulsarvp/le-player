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

			var env = {
				volume: {
					default: 0.4,
					mutelimit: 0.05
				}
			};

			var options = $.extend(true, {
				autoplay: false,
				height: 'auto',
				loop: false,
				muted: false,
				preload: 'metadata',
				poster: null,
				width: 'auto',
				rate: {
					step: 0.25,
					min: 0.5,
					max: 4.0
				},
				playback: {
					step: {
						short: 5,
						medium: 30,
						long: 60
					}
				},
				volume: {
					step: 0.1
				},
				controls: {
					common: [['play', 'volume', 'divider', 'timeline', 'divider', 'fullscreen'], ['rate', 'divider', 'backward', 'divider', 'source', 'divider', 'subtitle', 'divider', 'download']],
					fullscreen: [['play', 'volume', 'divider', 'timeline', 'divider', 'rate', 'divider', 'backward', 'divider', 'source', 'divider', 'subtitle', 'divider', 'download', 'divider', 'fullscreen']]
				}
			}, opts);

			/**
	   * This class manages FullScreen API.
	   * @TODO: add fullscreenerror handler.
	   */
	
			var Fullscreen = function () {
				function Fullscreen() {
					_classCallCheck(this, Fullscreen);
				}

				_createClass(Fullscreen, null, [{
					key: 'enabled',

					/**
	     * @returns {boolean} Whether browser supports fullscreen mode.
	     */
					value: function enabled() {
						return !!(document.fullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled || document.webkitSupportsFullscreen || document.webkitFullscreenEnabled || document.createElement('video').webkitRequestFullScreen);
					}
				}, {
					key: 'hideElements',
					value: function hideElements() {
						container.removeClass('fullscreen');
						controls.fullscreen.hide();
						controls.common.show();
						controls.mini.hide();
					}
				}, {
					key: 'init',
					value: function init() {
						if (this.enabled()) {
							// Fullscreen change handlers.
							document.addEventListener('fullscreenchange', function (e) {
								Fullscreen.toggleElements(!!(document.fullScreen || document.fullscreenElement));
							}, false);
							document.addEventListener('webkitfullscreenchange', function (e) {
								Fullscreen.toggleElements(!!document.webkitIsFullScreen);
							}, false);
							document.addEventListener('mozfullscreenchange', function () {
								Fullscreen.toggleElements(!!document.mozFullScreen);
							}, false);
							document.addEventListener('msfullscreenchange', function () {
								Fullscreen.toggleElements(!!document.msFullscreenElement);
							}, false);
						}
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
						container.addClass('fullscreen');
						controls.fullscreen.show();
						controls.common.hide();
						controls.mini.hide();
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
					// this.fullscreen = new Fullscreen();
					this.subtitles = [];
					this.playbackRate = this._video.playbackRate;
				}

				_createClass(Video, [{
					key: 'decreaseRate',
					value: function decreaseRate(step, min) {
						if (this._video.playbackRate > min) {
							this._video.playbackRate -= step;
							return this._video.playbackRate;
						}
						return null;
					}
				}, {
					key: 'increaseRate',
					value: function increaseRate(step, max) {
						if (this._video.playbackRate < max) {
							this._video.playbackRate += step;
							return this._video.playbackRate;
						}
						return null;
					}
				}, {
					key: 'init',
					value: function init() {
						this._initSubtitles();
						this._initVideo();
					}
				}, {
					key: 'togglePlay',
					value: function togglePlay() {
						if (!this._video.played || this._video.paused) {
							overlay.hide();
							this.play();
							controls.play();
						} else {
							overlay.show();
							this.pause();
							controls.pause();
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
						return this._video.play();
					}
				}, {
					key: 'pause',
					value: function pause() {
						return this._video.pause();
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
						var _this = this;

						if (this._video.readyState > HTMLMediaElement.HAVE_NOTHING) {
							this._initVideoEvent();
						} else {
							this._video.onloadedmetadata = function () {
								_this._initVideoEvent();
							};
						}
					}
				}, {
					key: '_initVideoEvent',
					value: function _initVideoEvent() {
						var _self = this;

						overlay.css('line-height', this._video.clientHeight + 'px');
						container.css('width', this._video.clientWidth + 'px');

						this._video.ontimeupdate = function () {
							controls.moveTimeMarker();
						};

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

						Fullscreen.init();
						controls.init();
					}
				}, {
					key: 'currentTime',
					get: function get() {
						return this._video.currentTime;
					}
				}, {
					key: 'duration',
					get: function get() {
						return this._video.duration;
					}
				}, {
					key: 'volume',
					set: function set(value) {
						this._video.volume = value;
						this._video.mute = value < env.volume.mutelimit;
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

					var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(BackwardControl).call(this, 'backward', 'undo'));

					_this2.element.click(function (e) {
						if (video.currentTime - options.playback.step.medium > 0) video.seek(video.currentTime - options.playback.step.medium);else video.seek(0);
					});
					return _this2;
				}

				return BackwardControl;
			}(Control);

			var DownloadControl = function (_Control2) {
				_inherits(DownloadControl, _Control2);

				function DownloadControl() {
					_classCallCheck(this, DownloadControl);

					var _this3 = _possibleConstructorReturn(this, Object.getPrototypeOf(DownloadControl).call(this, '', ''));

					_this3.element = $('<a />').attr('href', '').attr('target', '_blank').attr('download', '').addClass('control download').append($('<i />').addClass('fa fa-download'));
					return _this3;
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

					var _this5 = _possibleConstructorReturn(this, Object.getPrototypeOf(FullscreenControl).call(this, 'fullscreen', 'arrows-alt'));

					_this5.element.click(function (e) {
						Fullscreen.toggle();
					});
					return _this5;
				}

				return FullscreenControl;
			}(Control);

			var PlayControl = function (_Control5) {
				_inherits(PlayControl, _Control5);

				function PlayControl() {
					_classCallCheck(this, PlayControl);

					var _this6 = _possibleConstructorReturn(this, Object.getPrototypeOf(PlayControl).call(this, 'play', 'play'));

					_this6.element.click(function (e) {
						video.togglePlay();
					});
					return _this6;
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
					var _this7 = this;

					_classCallCheck(this, RateControl);

					this.down = new Control('rate-down', 'backward');
					this.up = new Control('rate-up', 'forward');
					this.current = new ControlText('rate-current');

					this.down.element.click(function (e) {
						_this7.decrease();
					});

					this.up.element.click(function (e) {
						_this7.increase();
					});

					this.element = $('<div />').addClass('control-container').append(this.down.element).append(this.current.element).append(this.up.element);
				}

				_createClass(RateControl, [{
					key: 'decrease',
					value: function decrease() {
						if (video.playbackRate > options.rate.min) {
							video.decreaseRate(options.rate.min);

							this.up.element.removeClass('disabled');
							Cookie.set('rate', video.playbackRate);
							this.show();
						} else {
							this.down.element.addClass('disabled');
						}
					}
				}, {
					key: 'load',
					value: function load() {
						/** TODO: Move work with Cookie to the Video class */
						video.playbackRate = Cookie.get('rate', 1);
						this.show();
					}
				}, {
					key: 'show',
					value: function show() {
						this.current.text = '×' + video.playbackRate.toFixed(2).toString().replace(',', '.');
					}
				}, {
					key: 'increase',
					value: function increase() {
						if (video.playbackRate < options.rate.max) {
							this.down.element.removeClass('disabled');
							video.playbackRate += options.rate.step;
							Cookie.set('rate', video.playbackRate);
							this.show();
						} else this.up.element.addClass('disabled');
					}
				}]);

				return RateControl;
			}();

			var SourceControl = function (_ControlContainer) {
				_inherits(SourceControl, _ControlContainer);

				function SourceControl() {
					_classCallCheck(this, SourceControl);

					/** TODO: Move sources to the arguments in constror */

					var _this8 = _possibleConstructorReturn(this, Object.getPrototypeOf(SourceControl).call(this, 'bullseye'));

					if (sources.length > 1) {
						for (var i in sources) {
							_this8.addItem(sources[i].title, { src: sources[i].src });
						}
					}
					return _this8;
				}

				_createClass(SourceControl, [{
					key: 'set',
					value: function set(index) {
						/** TODO: Emit event on set source*/
						var s = this.getByIndex(index);
						if (s != null) {
							element.attr('src', s.data('src'));
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

					var _this9 = _possibleConstructorReturn(this, Object.getPrototypeOf(SubtitleControl).call(this, 'commenting-o'));

					if (video.subtitles.length > 0) {
						for (var i in video.subtitles) {
							if (!video.subtitles.hasOwnProperty(i)) continue;
							var item = video.subtitles[i];
							_this9.addItem(item.title, {
								src: item.src,
								language: item.language
							});
						}
					}
					return _this9;
				}

				_createClass(SubtitleControl, [{
					key: 'onContainerClick',
					value: function onContainerClick() {
						_get(Object.getPrototypeOf(SubtitleControl.prototype), 'onContainerClick', this).call(this);
						_get(Object.getPrototypeOf(SubtitleControl.prototype), 'onItemClick', this).call(this, -1);
						if (video.textTracks.length > 0) {
							for (var i = 0; i < video.textTracks.length; i++) {
								video.textTracks[i].mode = 'hidden';
							}
						}
					}
				}, {
					key: 'onItemClick',
					value: function onItemClick(index) {
						_get(Object.getPrototypeOf(SubtitleControl.prototype), 'onItemClick', this).call(this, index);
						this.track = index;
					}
				}, {
					key: 'track',
					set: function set(index) {
						var t = this.getByIndex(index);
						if (t != null && video.textTracks.length > 0) {
							var language = t.data('language');
							for (var i = 0; i < video.textTracks.length; i++) {
								if (video.textTracks[i].language == language) video.textTracks[i].mode = 'showing';else video.textTracks[i].mode = 'hidden';
							}
						}
					}
				}]);

				return SubtitleControl;
			}(ControlContainer);

			var TimelineControl = function () {
				function TimelineControl() {
					var _this10 = this;

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
							if (_this10.drag) return;

							var p = _this10.getPosition(e.pageX);
							if (p > 0 && p < 1) {
								_this10.markerShadow.show();
								_this10.markerShadow.css('left', p * 100 + '%');
								_this10.markerShadowTime.html(secondsToTime(duration * p));
							} else _this10.markerShadow.hide();
						},

						'mouseleave': function mouseleave(e) {
							if (_this10.drag) return;
							_this10.markerShadow.hide();
						},

						'click': function click(e) {
							if (_this10.drag) return;
							video.seek(video.duration * _this10.getPosition(e.pageX));
						}
					});

					this.element = $('<div />').addClass('timeline-container').append($('<div />').addClass('timeline-subcontainer').append(this.current.element).append(this.line).append(this.total.element));

					this.marker.on('mousedown', function (e) {
						if (e.which != 1) return;
						_this10.markerShadow.hide();
						_this10.drag = true;
					});

					$(document).on({

						'mousemove': function mousemove(e) {
							if (!_this10.drag) return;
							var p = _this10.getPosition(e.pageX);
							if (p > 0 && p < 1) {
								_this10.markerTime.show().html(secondsToTime(duration * p));
								video.seek(duration * p);
							}
						},

						'mouseup': function mouseup(e) {
							_this10.markerTime.hide();
							_this10.drag = false;
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
						var t = (video.currentTime / video.duration * 100).toFixed(2) + '%';
						this.marker.css('left', t);
						this.played.css('width', t);
						this.current.text = secondsToTime(video.currentTime);
					}
				}]);

				return TimelineControl;
			}();

			var VolumeControl = function () {
				function VolumeControl() {
					var _this11 = this;

					_classCallCheck(this, VolumeControl);

					var _self = this;

					this.icon = $('<div/>').addClass('control-icon').append($('<i />').addClass('fa fa-volume-down')).click(function () {
						_self.toggleMuted();
					});

					this.marker = $('<div/>').addClass('volume-marker');

					this.active = $('<div/>').addClass('volume-active');

					this.line = $('<div/>').addClass('volume-line').append(this.active).append(this.marker).on('click', function (e) {
						if (_this11.drag) return;
						var p = _this11.getPosition(e.pageY);
						if (p >= 0 && p <= 1) {
							controls.volume = 1 - p;
						}
					});

					this.element = $('<div />').addClass('control control-container').append(this.icon).append($('<div />').addClass('control-inner volume-slider').append(this.line));

					this.drag = false;

					this.marker.on('mousedown', function (e) {
						if (e.which != 1) return;
						_this11.drag = true;
					});

					$(document).on({
						'mousemove': function mousemove(e) {
							if (!_this11.drag) return;
							var p = _this11.getPosition(e.pageY);
							if (p >= 0 && p <= 1) {
								controls.volume = 1 - p;
							}
						},

						'mouseup': function mouseup(e) {
							_this11.drag = false;
						}
					});
				}

				_createClass(VolumeControl, [{
					key: 'toggleMuted',
					value: function toggleMuted() {
						if (video.muted == true) {
							this.value = Cookie.get('volume', env.volume.default);
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
						if (value < env.volume.mutelimit) {
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
						container.find('.controls-' + this.name).hide();
					}
				}, {
					key: 'init',
					value: function init() {
						this.volume = Cookie.get('volume', env.volume.default);
						this.initTimeline();
						this.totalTime = secondsToTime(video.duration);
						this.initRate();
						this.download = sources[0].src;
					}
				}, {
					key: 'initRate',
					value: function initRate() {
						if (this.has(C_RATE)) this.items.rate.load();
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
					key: 'source',
					set: function set(value) {
						if (this.has(C_SOURCE)) this.items.source.set(value);
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
						video.volume = value;
						Cookie.set('volume', value);
					}
				}]);

				return Controls;
			}();

			var sources = [];
			var subtitles = [];
			var volume = env.volume.default;
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
				video.init();
				initControls();
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
				overlay = $('<div />').addClass('play-overlay').html('<i class="fa fa-play"></i>');
				var videoContainer = $('<div />').addClass('leplayer-video').append(overlay);
				container = $('<div />').addClass('leplayer-container').append(videoContainer).css('width', element.width() + 'px');

				element.before(container);
				videoContainer.append(element);
				overlay.click(function () {
					video.togglePlay();
				});
			};

			var initHotKeys = function initHotKeys() {
				// Space.
				element.keypress(function (e) {
					if (e.charCode == 32) {
						//e.preventDefault();
						video.togglePlay();
					}
				}).click(function () {
					video.togglePlay();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGUtcGxheWVyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIDNkMjZlMmVhZDk3ZjY5ZDE1MjM2Iiwid2VicGFjazovLy9zb3VyY2UvanMvbGUtcGxheWVyLmVzNi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDNkMjZlMmVhZDk3ZjY5ZDE1MjM2XG4gKiovIiwiKGZ1bmN0aW9uICgkKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHRsZXQgUGxheWVyID0gZnVuY3Rpb24gKGVsZW1lbnQsIG9wdHMpIHtcblx0XHRjb25zdCBDX0JBQ0tXQVJEID0gJ2JhY2t3YXJkJztcblx0XHRjb25zdCBDX0RJVklERVIgPSAnZGl2aWRlcic7XG5cdFx0Y29uc3QgQ19ET1dOTE9BRCA9ICdkb3dubG9hZCc7XG5cdFx0Y29uc3QgQ19GT1JXQVJEID0gJ2ZvcndhcmQnO1xuXHRcdGNvbnN0IENfRlVMTFNDUkVFTiA9ICdmdWxsc2NyZWVuJztcblx0XHRjb25zdCBDX1BMQVkgPSAncGxheSc7XG5cdFx0Y29uc3QgQ19SQVRFID0gJ3JhdGUnO1xuXHRcdGNvbnN0IENfU09VUkNFID0gJ3NvdXJjZSc7XG5cdFx0Y29uc3QgQ19TVUJUSVRMRSA9ICdzdWJ0aXRsZSc7XG5cdFx0Y29uc3QgQ19USU1FTElORSA9ICd0aW1lbGluZSc7XG5cdFx0Y29uc3QgQ19WT0xVTUUgPSAndm9sdW1lJztcblxuXHRcdGxldCBlbnYgPSB7XG5cdFx0XHR2b2x1bWUgOiB7XG5cdFx0XHRcdGRlZmF1bHQgOiAwLjQsXG5cdFx0XHRcdG11dGVsaW1pdCA6IDAuMDVcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0dmFyIG9wdGlvbnMgPSAkLmV4dGVuZCh0cnVlLCB7XG5cdFx0XHRhdXRvcGxheSA6IGZhbHNlLFxuXHRcdFx0aGVpZ2h0IDogJ2F1dG8nLFxuXHRcdFx0bG9vcCA6IGZhbHNlLFxuXHRcdFx0bXV0ZWQgOiBmYWxzZSxcblx0XHRcdHByZWxvYWQgOiAnbWV0YWRhdGEnLFxuXHRcdFx0cG9zdGVyIDogbnVsbCxcblx0XHRcdHdpZHRoIDogJ2F1dG8nLFxuXHRcdFx0cmF0ZSA6IHtcblx0XHRcdFx0c3RlcCA6IDAuMjUsXG5cdFx0XHRcdG1pbiA6IDAuNSxcblx0XHRcdFx0bWF4IDogNC4wXG5cdFx0XHR9LFxuXHRcdFx0cGxheWJhY2sgOiB7XG5cdFx0XHRcdHN0ZXAgOiB7XG5cdFx0XHRcdFx0c2hvcnQgOiA1LFxuXHRcdFx0XHRcdG1lZGl1bSA6IDMwLFxuXHRcdFx0XHRcdGxvbmcgOiA2MFxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0dm9sdW1lIDoge1xuXHRcdFx0XHRzdGVwIDogMC4xXG5cdFx0XHR9LFxuXHRcdFx0Y29udHJvbHMgOiB7XG5cdFx0XHRcdGNvbW1vbiA6IFtcblx0XHRcdFx0XHRbICdwbGF5JywgJ3ZvbHVtZScsICdkaXZpZGVyJywgJ3RpbWVsaW5lJywgJ2RpdmlkZXInLCAnZnVsbHNjcmVlbicgXSxcblx0XHRcdFx0XHRbICdyYXRlJywgJ2RpdmlkZXInLCAnYmFja3dhcmQnLCAnZGl2aWRlcicsICdzb3VyY2UnLCAnZGl2aWRlcicsICdzdWJ0aXRsZScsICdkaXZpZGVyJywgJ2Rvd25sb2FkJyBdXG5cdFx0XHRcdF0sXG5cdFx0XHRcdGZ1bGxzY3JlZW4gOiBbXG5cdFx0XHRcdFx0WyAncGxheScsICd2b2x1bWUnLCAnZGl2aWRlcicsICd0aW1lbGluZScsICdkaXZpZGVyJywgJ3JhdGUnLCAnZGl2aWRlcicsICdiYWNrd2FyZCcsICdkaXZpZGVyJywgJ3NvdXJjZScsICdkaXZpZGVyJywgJ3N1YnRpdGxlJywgJ2RpdmlkZXInLCAnZG93bmxvYWQnLCAnZGl2aWRlcicsICdmdWxsc2NyZWVuJyBdXG5cdFx0XHRcdF1cblx0XHRcdH1cblx0XHR9LCBvcHRzKTtcblxuXHRcdC8qKlxuXHRcdCAqIFRoaXMgY2xhc3MgbWFuYWdlcyBGdWxsU2NyZWVuIEFQSS5cblx0XHQgKiBAVE9ETzogYWRkIGZ1bGxzY3JlZW5lcnJvciBoYW5kbGVyLlxuXHRcdCAqL1xuXHRcdGNsYXNzIEZ1bGxzY3JlZW4ge1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gV2hldGhlciBicm93c2VyIHN1cHBvcnRzIGZ1bGxzY3JlZW4gbW9kZS5cblx0XHRcdCAqL1xuXHRcdFx0c3RhdGljIGVuYWJsZWQgKCkge1xuXHRcdFx0XHRyZXR1cm4gISEoZG9jdW1lbnQuZnVsbHNjcmVlbkVuYWJsZWQgfHwgZG9jdW1lbnQubW96RnVsbFNjcmVlbkVuYWJsZWQgfHwgZG9jdW1lbnQubXNGdWxsc2NyZWVuRW5hYmxlZCB8fCBkb2N1bWVudC53ZWJraXRTdXBwb3J0c0Z1bGxzY3JlZW4gfHwgZG9jdW1lbnQud2Via2l0RnVsbHNjcmVlbkVuYWJsZWQgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8nKS53ZWJraXRSZXF1ZXN0RnVsbFNjcmVlbik7XG5cdFx0XHR9XG5cblx0XHRcdHN0YXRpYyBoaWRlRWxlbWVudHMgKCkge1xuXHRcdFx0XHRjb250YWluZXIucmVtb3ZlQ2xhc3MoJ2Z1bGxzY3JlZW4nKTtcblx0XHRcdFx0Y29udHJvbHMuZnVsbHNjcmVlbi5oaWRlKCk7XG5cdFx0XHRcdGNvbnRyb2xzLmNvbW1vbi5zaG93KCk7XG5cdFx0XHRcdGNvbnRyb2xzLm1pbmkuaGlkZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdGF0aWMgaW5pdCAoKSB7XG5cdFx0XHRcdGlmICh0aGlzLmVuYWJsZWQoKSkge1xuXHRcdFx0XHRcdC8vIEZ1bGxzY3JlZW4gY2hhbmdlIGhhbmRsZXJzLlxuXHRcdFx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Z1bGxzY3JlZW5jaGFuZ2UnLCBmdW5jdGlvbiAoZSkge1xuXHRcdFx0XHRcdFx0RnVsbHNjcmVlbi50b2dnbGVFbGVtZW50cyghIShkb2N1bWVudC5mdWxsU2NyZWVuIHx8IGRvY3VtZW50LmZ1bGxzY3JlZW5FbGVtZW50KSk7XG5cdFx0XHRcdFx0fSwgZmFsc2UpO1xuXHRcdFx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3dlYmtpdGZ1bGxzY3JlZW5jaGFuZ2UnLCBmdW5jdGlvbiAoZSkge1xuXHRcdFx0XHRcdFx0RnVsbHNjcmVlbi50b2dnbGVFbGVtZW50cyghIWRvY3VtZW50LndlYmtpdElzRnVsbFNjcmVlbik7XG5cdFx0XHRcdFx0fSwgZmFsc2UpO1xuXHRcdFx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vemZ1bGxzY3JlZW5jaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRGdWxsc2NyZWVuLnRvZ2dsZUVsZW1lbnRzKCEhZG9jdW1lbnQubW96RnVsbFNjcmVlbik7XG5cdFx0XHRcdFx0fSwgZmFsc2UpO1xuXHRcdFx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21zZnVsbHNjcmVlbmNoYW5nZScsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdEZ1bGxzY3JlZW4udG9nZ2xlRWxlbWVudHMoISFkb2N1bWVudC5tc0Z1bGxzY3JlZW5FbGVtZW50KTtcblx0XHRcdFx0XHR9LCBmYWxzZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gV2hldGhlciBicm93c2VyIGlzIGluIGZ1bGxzY3JlZW4gbW9kZS5cblx0XHRcdCAqL1xuXHRcdFx0c3RhdGljIGlzICgpIHtcblx0XHRcdFx0cmV0dXJuICEhKGRvY3VtZW50LmZ1bGxTY3JlZW4gfHwgZG9jdW1lbnQud2Via2l0SXNGdWxsU2NyZWVuIHx8IGRvY3VtZW50Lm1vekZ1bGxTY3JlZW4gfHwgZG9jdW1lbnQubXNGdWxsc2NyZWVuRWxlbWVudCB8fCBkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCk7XG5cdFx0XHR9XG5cblx0XHRcdHN0YXRpYyBzaG93RWxlbWVudHMgKCkge1xuXHRcdFx0XHRjb250YWluZXIuYWRkQ2xhc3MoJ2Z1bGxzY3JlZW4nKTtcblx0XHRcdFx0Y29udHJvbHMuZnVsbHNjcmVlbi5zaG93KCk7XG5cdFx0XHRcdGNvbnRyb2xzLmNvbW1vbi5oaWRlKCk7XG5cdFx0XHRcdGNvbnRyb2xzLm1pbmkuaGlkZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdGF0aWMgdG9nZ2xlICgpIHtcblx0XHRcdFx0aWYgKHRoaXMuaXMoKSkge1xuXHRcdFx0XHRcdGlmIChkb2N1bWVudC5leGl0RnVsbHNjcmVlbikgICAgICAgICAgICAgICAgZG9jdW1lbnQuZXhpdEZ1bGxzY3JlZW4oKTtcblx0XHRcdFx0XHRlbHNlIGlmIChkb2N1bWVudC5tb3pDYW5jZWxGdWxsU2NyZWVuKSAgICAgIGRvY3VtZW50Lm1vekNhbmNlbEZ1bGxTY3JlZW4oKTtcblx0XHRcdFx0XHRlbHNlIGlmIChkb2N1bWVudC53ZWJraXRDYW5jZWxGdWxsU2NyZWVuKSAgIGRvY3VtZW50LndlYmtpdENhbmNlbEZ1bGxTY3JlZW4oKTtcblx0XHRcdFx0XHRlbHNlIGlmIChkb2N1bWVudC5tc0V4aXRGdWxsc2NyZWVuKSAgICAgICAgIGRvY3VtZW50Lm1zRXhpdEZ1bGxzY3JlZW4oKTtcblx0XHRcdFx0XHR0aGlzLmhpZGVFbGVtZW50cygpOyAvLyBAVE9ETzogbWFrZSB0aGlzIG9ubHkgaWYgZnVsbHNjcmVlbiBmaXJlZC5cblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRsZXQgY29udGFpbmVyRWwgPSBjb250YWluZXJbIDAgXTtcblx0XHRcdFx0XHRpZiAoY29udGFpbmVyRWwucmVxdWVzdEZ1bGxTY3JlZW4pICAgICAgICAgICAgY29udGFpbmVyRWwucmVxdWVzdEZ1bGxTY3JlZW4oKTtcblx0XHRcdFx0XHRlbHNlIGlmIChjb250YWluZXJFbC53ZWJraXRSZXF1ZXN0RnVsbFNjcmVlbikgY29udGFpbmVyRWwud2Via2l0UmVxdWVzdEZ1bGxTY3JlZW4oKTtcblx0XHRcdFx0XHRlbHNlIGlmIChjb250YWluZXJFbC5tb3pSZXF1ZXN0RnVsbFNjcmVlbikgICAgY29udGFpbmVyRWwubW96UmVxdWVzdEZ1bGxTY3JlZW4oKTtcblx0XHRcdFx0XHRlbHNlIGlmIChjb250YWluZXJFbC5tc0V4aXRGdWxsc2NyZWVuKSAgICAgICAgY29udGFpbmVyRWwubXNSZXF1ZXN0RnVsbHNjcmVlbigpO1xuXHRcdFx0XHRcdHRoaXMuc2hvd0VsZW1lbnRzKCk7IC8vIEBUT0RPOiBtYWtlIHRoaXMgb25seSBpZiBmdWxsc2NyZWVuIGZpcmVkLlxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8qKlxuXHRcdFx0ICogVXBkYXRlIERPTSBzdHJ1Y3R1cmUgYWNjb3JkaW5nIHRvIGN1cnJlbnQgc3RhdGUuXG5cdFx0XHQgKi9cblx0XHRcdHN0YXRpYyB0b2dnbGVFbGVtZW50cyAoc2hvdykge1xuXHRcdFx0XHRpZiAoISFzaG93KSB7XG5cdFx0XHRcdFx0dGhpcy5zaG93RWxlbWVudHMoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHR0aGlzLmhpZGVFbGVtZW50cygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y2xhc3MgVmlkZW8ge1xuXHRcdFx0Y29uc3RydWN0b3IgKGN0eCkge1xuXHRcdFx0XHR0aGlzLl9jdHggPSBjdHg7XG5cdFx0XHRcdHRoaXMuX3ZpZGVvID0gY3R4WyAwIF07XG5cdFx0XHRcdC8vIHRoaXMuZnVsbHNjcmVlbiA9IG5ldyBGdWxsc2NyZWVuKCk7XG5cdFx0XHRcdHRoaXMuc3VidGl0bGVzID0gW107XG5cdFx0XHRcdHRoaXMucGxheWJhY2tSYXRlID0gdGhpcy5fdmlkZW8ucGxheWJhY2tSYXRlO1xuXHRcdFx0fVxuXG5cdFx0XHRnZXQgY3VycmVudFRpbWUgKCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5fdmlkZW8uY3VycmVudFRpbWU7XG5cdFx0XHR9XG5cblx0XHRcdGdldCBkdXJhdGlvbiAoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLl92aWRlby5kdXJhdGlvbjtcblx0XHRcdH1cblxuXHRcdFx0c2V0IHZvbHVtZSAodmFsdWUpIHtcblx0XHRcdFx0dGhpcy5fdmlkZW8udm9sdW1lID0gdmFsdWU7XG5cdFx0XHRcdHRoaXMuX3ZpZGVvLm11dGUgPSAodmFsdWUgPCBlbnYudm9sdW1lLm11dGVsaW1pdCk7XG5cdFx0XHR9XG5cblx0XHRcdGRlY3JlYXNlUmF0ZSAoc3RlcCwgbWluKSB7XG5cdFx0XHRcdGlmICh0aGlzLl92aWRlby5wbGF5YmFja1JhdGUgPiBtaW4pIHtcblx0XHRcdFx0XHR0aGlzLl92aWRlby5wbGF5YmFja1JhdGUgLT0gc3RlcDtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5fdmlkZW8ucGxheWJhY2tSYXRlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXG5cdFx0XHRpbmNyZWFzZVJhdGUgKHN0ZXAsIG1heCkge1xuXHRcdFx0XHRpZiAodGhpcy5fdmlkZW8ucGxheWJhY2tSYXRlIDwgbWF4KSB7XG5cdFx0XHRcdFx0dGhpcy5fdmlkZW8ucGxheWJhY2tSYXRlICs9IHN0ZXA7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuX3ZpZGVvLnBsYXliYWNrUmF0ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblxuXHRcdFx0aW5pdCAoKSB7XG5cdFx0XHRcdHRoaXMuX2luaXRTdWJ0aXRsZXMoKTtcblx0XHRcdFx0dGhpcy5faW5pdFZpZGVvKCk7XG5cdFx0XHR9XG5cblx0XHRcdHRvZ2dsZVBsYXkgKCkge1xuXHRcdFx0XHRpZiAoIXRoaXMuX3ZpZGVvLnBsYXllZCB8fCB0aGlzLl92aWRlby5wYXVzZWQpIHtcblx0XHRcdFx0XHRvdmVybGF5LmhpZGUoKTtcblx0XHRcdFx0XHR0aGlzLnBsYXkoKTtcblx0XHRcdFx0XHRjb250cm9scy5wbGF5KCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0b3ZlcmxheS5zaG93KCk7XG5cdFx0XHRcdFx0dGhpcy5wYXVzZSgpO1xuXHRcdFx0XHRcdGNvbnRyb2xzLnBhdXNlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0c2VlayAodGltZSkge1xuXHRcdFx0XHR0aGlzLl92aWRlby5jdXJyZW50VGltZSA9IHRpbWU7XG5cdFx0XHR9XG5cblx0XHRcdHBsYXkgKCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5fdmlkZW8ucGxheSgpO1xuXHRcdFx0fVxuXG5cdFx0XHRwYXVzZSAoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLl92aWRlby5wYXVzZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHRfaW5pdFN1YnRpdGxlcyAoKSB7XG5cdFx0XHRcdGxldCBfc2VsZiA9IHRoaXM7XG5cdFx0XHRcdHRoaXMuX2N0eC5jaGlsZHJlbigndHJhY2tba2luZD1cInN1YnRpdGxlc1wiXScpLmVhY2goZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdHZhciBsYW5ndWFnZSA9ICQodGhpcykuYXR0cignc3JjbGFuZycpO1xuXHRcdFx0XHRcdHZhciB0aXRsZSA9ICQodGhpcykuYXR0cignbGFiZWwnKTtcblx0XHRcdFx0XHR2YXIgc3JjID0gJCh0aGlzKS5hdHRyKCdzcmMnKTtcblx0XHRcdFx0XHRpZiAodGl0bGUubGVuZ3RoID4gMCAmJiBzcmMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdFx0X3NlbGYuc3VidGl0bGVzLnB1c2goe1xuXHRcdFx0XHRcdFx0XHR0aXRsZSA6IHRpdGxlLFxuXHRcdFx0XHRcdFx0XHRzcmMgOiBzcmMsXG5cdFx0XHRcdFx0XHRcdGxhbmd1YWdlIDogbGFuZ3VhZ2Vcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHRcdF9pbml0VmlkZW8gKCkge1xuXHRcdFx0XHRpZiAodGhpcy5fdmlkZW8ucmVhZHlTdGF0ZSA+IEhUTUxNZWRpYUVsZW1lbnQuSEFWRV9OT1RISU5HKSB7XG5cdFx0XHRcdFx0dGhpcy5faW5pdFZpZGVvRXZlbnQoKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLl92aWRlby5vbmxvYWRlZG1ldGFkYXRhID0gKCkgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy5faW5pdFZpZGVvRXZlbnQoKTtcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdF9pbml0VmlkZW9FdmVudCAoKSB7XG5cdFx0XHRcdGxldCBfc2VsZiA9IHRoaXM7XG5cblx0XHRcdFx0b3ZlcmxheS5jc3MoJ2xpbmUtaGVpZ2h0JywgdGhpcy5fdmlkZW8uY2xpZW50SGVpZ2h0ICsgJ3B4Jyk7XG5cdFx0XHRcdGNvbnRhaW5lci5jc3MoJ3dpZHRoJywgdGhpcy5fdmlkZW8uY2xpZW50V2lkdGggKyAncHgnKTtcblxuXHRcdFx0XHR0aGlzLl92aWRlby5vbnRpbWV1cGRhdGUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0Y29udHJvbHMubW92ZVRpbWVNYXJrZXIoKTtcblx0XHRcdFx0fTtcblxuXHRcdFx0XHQvLyBUaGlzIGlzIGdlbmVyYWxseSBmb3IgRmlyZWZveCBvbmx5XG5cdFx0XHRcdC8vIGJlY2F1c2UgaXQgc29tZWhvdyByZXNldHMgdHJhY2sgbGlzdFxuXHRcdFx0XHQvLyBmb3IgdmlkZW8gZWxlbWVudCBhZnRlciBET00gbWFuaXB1bGF0aW9uLlxuXG5cdFx0XHRcdGlmICh0aGlzLl92aWRlby50ZXh0VHJhY2tzLmxlbmd0aCA9PSAwICYmIHRoaXMuc3VidGl0bGVzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHR0aGlzLl9jdHguY2hpbGRyZW4oJ3RyYWNrW2tpbmQ9XCJzdWJ0aXRsZXNcIl0nKS5yZW1vdmUoKTtcblx0XHRcdFx0XHRmb3IgKHZhciBpIGluIHRoaXMuc3VidGl0bGVzKSB7XG5cdFx0XHRcdFx0XHRpZiAodGhpcy5zdWJ0aXRsZXMuaGFzT3duUHJvcGVydHkoaSkpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5fY3R4XG5cdFx0XHRcdFx0XHRcdFx0LmFwcGVuZCgkKCc8dHJhY2svPicpXG5cdFx0XHRcdFx0XHRcdFx0XHQuYXR0cignbGFiZWwnLCB0aGlzLnN1YnRpdGxlc1sgaSBdLnRpdGxlKVxuXHRcdFx0XHRcdFx0XHRcdFx0LmF0dHIoJ3NyYycsIHRoaXMuc3VidGl0bGVzWyBpIF0uc3JjKVxuXHRcdFx0XHRcdFx0XHRcdFx0LmF0dHIoJ3NyY2xhbmcnLCB0aGlzLnN1YnRpdGxlc1sgaSBdLmxhbmd1YWdlKVxuXHRcdFx0XHRcdFx0XHRcdFx0LmF0dHIoJ2lkJywgdGhpcy5zdWJ0aXRsZXNbIGkgXS5sYW5ndWFnZSlcblx0XHRcdFx0XHRcdFx0XHRcdC5hdHRyKCdraW5kJywgJ3N1YnRpdGxlcycpKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRGdWxsc2NyZWVuLmluaXQoKTtcblx0XHRcdFx0Y29udHJvbHMuaW5pdCgpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGNsYXNzIENvbnRyb2wge1xuXHRcdFx0Y29uc3RydWN0b3IgKGNzc0NsYXNzLCBpY29uQ2xhc3MpIHtcblx0XHRcdFx0dGhpcy5lbGVtZW50ID0gJCgnPGRpdiAvPicpXG5cdFx0XHRcdFx0LmFkZENsYXNzKCdjb250cm9sICcgKyBjc3NDbGFzcylcblx0XHRcdFx0XHQuYXBwZW5kKCQoJzxpIC8+Jylcblx0XHRcdFx0XHRcdC5hZGRDbGFzcygnZmEgZmEtJyArIGljb25DbGFzcykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdGF0aWMgZGl2aWRlciAoKSB7XG5cdFx0XHRcdHJldHVybiAkKCc8ZGl2IC8+JykuYWRkQ2xhc3MoJ2RpdmlkZXInKTtcblx0XHRcdH1cblxuXHRcdFx0c3RhdGljIGNyZWF0ZSAobmFtZSkge1xuXHRcdFx0XHRzd2l0Y2ggKG5hbWUpIHtcblx0XHRcdFx0XHRjYXNlIENfQkFDS1dBUkQ6XG5cdFx0XHRcdFx0XHRyZXR1cm4gbmV3IEJhY2t3YXJkQ29udHJvbCgpO1xuXG5cdFx0XHRcdFx0Y2FzZSBDX0RJVklERVI6XG5cdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5kaXZpZGVyKCk7XG5cblx0XHRcdFx0XHRjYXNlIENfRE9XTkxPQUQ6XG5cdFx0XHRcdFx0XHRyZXR1cm4gbmV3IERvd25sb2FkQ29udHJvbCgpO1xuXG5cdFx0XHRcdFx0Y2FzZSBDX0ZPUldBUkQ6XG5cdFx0XHRcdFx0XHRyZXR1cm4gbmV3IEZvcndhcmRDb250cm9sKCk7XG5cblx0XHRcdFx0XHRjYXNlIENfRlVMTFNDUkVFTjpcblx0XHRcdFx0XHRcdHJldHVybiBuZXcgRnVsbHNjcmVlbkNvbnRyb2woKTtcblxuXHRcdFx0XHRcdGNhc2UgQ19QTEFZOlxuXHRcdFx0XHRcdFx0cmV0dXJuIG5ldyBQbGF5Q29udHJvbCgpO1xuXG5cdFx0XHRcdFx0Y2FzZSBDX1JBVEU6XG5cdFx0XHRcdFx0XHRyZXR1cm4gbmV3IFJhdGVDb250cm9sKCk7XG5cblx0XHRcdFx0XHRjYXNlIENfU09VUkNFOlxuXHRcdFx0XHRcdFx0cmV0dXJuIG5ldyBTb3VyY2VDb250cm9sKCk7XG5cblx0XHRcdFx0XHRjYXNlIENfU1VCVElUTEU6XG5cdFx0XHRcdFx0XHRyZXR1cm4gbmV3IFN1YnRpdGxlQ29udHJvbCgpO1xuXG5cdFx0XHRcdFx0Y2FzZSBDX1RJTUVMSU5FOlxuXHRcdFx0XHRcdFx0cmV0dXJuIG5ldyBUaW1lbGluZUNvbnRyb2woKTtcblxuXHRcdFx0XHRcdGNhc2UgQ19WT0xVTUU6XG5cdFx0XHRcdFx0XHRyZXR1cm4gbmV3IFZvbHVtZUNvbnRyb2woKTtcblxuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGNsYXNzIENvbnRyb2xUZXh0IHtcblx0XHRcdGNvbnN0cnVjdG9yIChjbGFzc25hbWUpIHtcblx0XHRcdFx0dGhpcy5lbGVtZW50ID0gJCgnPGRpdiAvPicpLmFkZENsYXNzKCdjb250cm9sLXRleHQgJyArIGNsYXNzbmFtZSk7XG5cdFx0XHR9XG5cblx0XHRcdHNldCB0ZXh0ICh2YWx1ZSkge1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQuaHRtbCh2YWx1ZSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y2xhc3MgQ29udHJvbENvbnRhaW5lciB7XG5cdFx0XHRjb25zdHJ1Y3RvciAoaWNvbkNsYXNzKSB7XG5cdFx0XHRcdGxldCBfc2VsZiA9IHRoaXM7XG5cdFx0XHRcdHRoaXMuaWNvbkNsYXNzID0gaWNvbkNsYXNzO1xuXHRcdFx0XHR0aGlzLmljb24gPSAkKCc8ZGl2IC8+Jylcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2NvbnRyb2wtaWNvbicpXG5cdFx0XHRcdFx0LmFwcGVuZCgkKCc8aSAvPicpXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2ZhIGZhLScgKyBpY29uQ2xhc3MpKTtcblx0XHRcdFx0dGhpcy5saXN0RWxlbWVudCA9ICQoJzxkaXYvPicpLmFkZENsYXNzKCdjb250cm9sLWlubmVyJyk7XG5cdFx0XHRcdHRoaXMuZWxlbWVudCA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0XHRcdC5hZGRDbGFzcygnY29udHJvbCBjb250cm9sLWNvbnRhaW5lcicpXG5cdFx0XHRcdFx0LmFwcGVuZCh0aGlzLmljb24pXG5cdFx0XHRcdFx0LmFwcGVuZCh0aGlzLmxpc3RFbGVtZW50KTtcblx0XHRcdFx0dGhpcy5faW5kZXggPSAwO1xuXHRcdFx0XHR0aGlzLmxpc3QgPSBbXTtcblx0XHRcdFx0dGhpcy5pY29uLmNsaWNrKGZ1bmN0aW9uICgpIHsgX3NlbGYub25Db250YWluZXJDbGljaygpOyB9KTtcblx0XHRcdH1cblxuXHRcdFx0Z2V0IGFjdGl2ZSAoKSB7XG5cdFx0XHRcdGZvciAobGV0IGkgaW4gdGhpcy5saXN0KVxuXHRcdFx0XHRcdGlmICh0aGlzLmxpc3RbIGkgXS5oYXNDbGFzcygnYWN0aXZlJykpXG5cdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5saXN0WyBpIF07XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXG5cdFx0XHRzZXQgYWN0aXZlIChpbmRleCkge1xuXHRcdFx0XHRsZXQgaGFzQWN0aXZlID0gZmFsc2U7XG5cdFx0XHRcdGZvciAobGV0IGkgaW4gdGhpcy5saXN0KSB7XG5cdFx0XHRcdFx0aWYgKHRoaXMubGlzdFsgaSBdLmRhdGEoJ2luZGV4JykgPT0gaW5kZXgpIHtcblx0XHRcdFx0XHRcdHRoaXMubGlzdFsgaSBdLmFkZENsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0XHRcdHRoaXMuaWNvbi5odG1sKHRoaXMubGlzdFsgaSBdLmh0bWwoKSk7XG5cdFx0XHRcdFx0XHRoYXNBY3RpdmUgPSB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHR0aGlzLmxpc3RbIGkgXS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCFoYXNBY3RpdmUpXG5cdFx0XHRcdFx0dGhpcy5pY29uLmh0bWwoJCgnPGkgLz4nKS5hZGRDbGFzcygnZmEgZmEtJyArIHRoaXMuaWNvbkNsYXNzKSk7XG5cdFx0XHR9XG5cblx0XHRcdGFkZEl0ZW0gKHRleHQsIGRhdGEpIHtcblx0XHRcdFx0bGV0IF9zZWxmID0gdGhpcztcblx0XHRcdFx0dmFyIGl0ZW0gPSAkKCc8ZGl2IC8+JykuYWRkQ2xhc3MoJ2lubmVyLWl0ZW0nKS5kYXRhKCdpbmRleCcsIHRoaXMuX2luZGV4KS5odG1sKHRleHQpLmNsaWNrKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRfc2VsZi5vbkl0ZW1DbGljaygkKHRoaXMpLmRhdGEoJ2luZGV4JykpO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0aWYgKHR5cGVvZiBkYXRhID09ICdvYmplY3QnKSB7XG5cdFx0XHRcdFx0Zm9yIChsZXQgayBpbiBkYXRhKVxuXHRcdFx0XHRcdFx0aXRlbS5kYXRhKGssIGRhdGFbIGsgXSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5faW5kZXgrKztcblx0XHRcdFx0dGhpcy5saXN0LnB1c2goaXRlbSk7XG5cdFx0XHRcdHRoaXMubGlzdEVsZW1lbnQuYXBwZW5kKGl0ZW0pO1xuXG5cdFx0XHRcdHJldHVybiBpdGVtO1xuXHRcdFx0fVxuXG5cdFx0XHRnZXRCeUluZGV4IChpbmRleCkge1xuXHRcdFx0XHRmb3IgKGxldCBpIGluIHRoaXMubGlzdClcblx0XHRcdFx0XHRpZiAodGhpcy5saXN0WyBpIF0uZGF0YSgnaW5kZXgnKSA9PSBpbmRleClcblx0XHRcdFx0XHRcdHJldHVybiB0aGlzLmxpc3RbIGkgXTtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cblx0XHRcdG9uQ29udGFpbmVyQ2xpY2sgKCkge1xuXHRcdFx0fVxuXG5cdFx0XHRvbkl0ZW1DbGljayAoaW5kZXgpIHtcblx0XHRcdFx0dGhpcy5hY3RpdmUgPSBpbmRleDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRjbGFzcyBCYWNrd2FyZENvbnRyb2wgZXh0ZW5kcyBDb250cm9sIHtcblx0XHRcdGNvbnN0cnVjdG9yICgpIHtcblx0XHRcdFx0c3VwZXIoJ2JhY2t3YXJkJywgJ3VuZG8nKTtcblx0XHRcdFx0dGhpcy5lbGVtZW50LmNsaWNrKGUgPT4ge1xuXHRcdFx0XHRcdGlmICh2aWRlby5jdXJyZW50VGltZSAtIG9wdGlvbnMucGxheWJhY2suc3RlcC5tZWRpdW0gPiAwKVxuXHRcdFx0XHRcdFx0dmlkZW8uc2Vlayh2aWRlby5jdXJyZW50VGltZSAtIG9wdGlvbnMucGxheWJhY2suc3RlcC5tZWRpdW0pO1xuXHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdHZpZGVvLnNlZWsoMCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGNsYXNzIERvd25sb2FkQ29udHJvbCBleHRlbmRzIENvbnRyb2wge1xuXHRcdFx0Y29uc3RydWN0b3IgKCkge1xuXHRcdFx0XHRzdXBlcignJywgJycpO1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQgPSAkKCc8YSAvPicpLmF0dHIoJ2hyZWYnLCAnJykuYXR0cigndGFyZ2V0JywgJ19ibGFuaycpLmF0dHIoJ2Rvd25sb2FkJywgJycpLmFkZENsYXNzKCdjb250cm9sIGRvd25sb2FkJykuYXBwZW5kKCQoJzxpIC8+JykuYWRkQ2xhc3MoJ2ZhIGZhLWRvd25sb2FkJykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzZXQgbGluayAodmFsdWUpIHtcblx0XHRcdFx0dGhpcy5lbGVtZW50LmF0dHIoJ2hyZWYnLCB2YWx1ZSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y2xhc3MgRm9yd2FyZENvbnRyb2wgZXh0ZW5kcyBDb250cm9sIHtcblx0XHRcdGNvbnN0cnVjdG9yICgpIHtcblx0XHRcdFx0c3VwZXIoJ2ZvcndhcmQnLCAncmVkbycpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGNsYXNzIEZ1bGxzY3JlZW5Db250cm9sIGV4dGVuZHMgQ29udHJvbCB7XG5cdFx0XHRjb25zdHJ1Y3RvciAoKSB7XG5cdFx0XHRcdHN1cGVyKCdmdWxsc2NyZWVuJywgJ2Fycm93cy1hbHQnKTtcblx0XHRcdFx0dGhpcy5lbGVtZW50LmNsaWNrKGUgPT4ge1xuXHRcdFx0XHRcdEZ1bGxzY3JlZW4udG9nZ2xlKCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGNsYXNzIFBsYXlDb250cm9sIGV4dGVuZHMgQ29udHJvbCB7XG5cdFx0XHRjb25zdHJ1Y3RvciAoKSB7XG5cdFx0XHRcdHN1cGVyKCdwbGF5JywgJ3BsYXknKTtcblx0XHRcdFx0dGhpcy5lbGVtZW50LmNsaWNrKGUgPT4ge1xuXHRcdFx0XHRcdHZpZGVvLnRvZ2dsZVBsYXkoKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHRcdHBhdXNlICgpIHtcblx0XHRcdFx0dGhpcy5lbGVtZW50XG5cdFx0XHRcdFx0LmNoaWxkcmVuKCcuZmEnKVxuXHRcdFx0XHRcdC5yZW1vdmVDbGFzcygnZmEtcGF1c2UnKVxuXHRcdFx0XHRcdC5hZGRDbGFzcygnZmEtcGxheScpO1xuXHRcdFx0fVxuXG5cdFx0XHRwbGF5ICgpIHtcblx0XHRcdFx0dGhpcy5lbGVtZW50XG5cdFx0XHRcdFx0LmNoaWxkcmVuKCcuZmEnKVxuXHRcdFx0XHRcdC5yZW1vdmVDbGFzcygnZmEtcGxheScpXG5cdFx0XHRcdFx0LmFkZENsYXNzKCdmYS1wYXVzZScpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGNsYXNzIFJhdGVDb250cm9sIHtcblx0XHRcdGNvbnN0cnVjdG9yICgpIHtcblx0XHRcdFx0dGhpcy5kb3duID0gbmV3IENvbnRyb2woJ3JhdGUtZG93bicsICdiYWNrd2FyZCcpO1xuXHRcdFx0XHR0aGlzLnVwID0gbmV3IENvbnRyb2woJ3JhdGUtdXAnLCAnZm9yd2FyZCcpO1xuXHRcdFx0XHR0aGlzLmN1cnJlbnQgPSBuZXcgQ29udHJvbFRleHQoJ3JhdGUtY3VycmVudCcpO1xuXG5cdFx0XHRcdHRoaXMuZG93bi5lbGVtZW50LmNsaWNrKGUgPT4ge1xuXHRcdFx0XHRcdHRoaXMuZGVjcmVhc2UoKTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0dGhpcy51cC5lbGVtZW50LmNsaWNrKGUgPT4ge1xuXHRcdFx0XHRcdHRoaXMuaW5jcmVhc2UoKTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0dGhpcy5lbGVtZW50ID0gJCgnPGRpdiAvPicpXG5cdFx0XHRcdFx0LmFkZENsYXNzKCdjb250cm9sLWNvbnRhaW5lcicpXG5cdFx0XHRcdFx0LmFwcGVuZCh0aGlzLmRvd24uZWxlbWVudClcblx0XHRcdFx0XHQuYXBwZW5kKHRoaXMuY3VycmVudC5lbGVtZW50KVxuXHRcdFx0XHRcdC5hcHBlbmQodGhpcy51cC5lbGVtZW50KTtcblx0XHRcdH1cblxuXHRcdFx0ZGVjcmVhc2UgKCkge1xuXHRcdFx0XHRpZiAodmlkZW8ucGxheWJhY2tSYXRlID4gb3B0aW9ucy5yYXRlLm1pbikge1xuXHRcdFx0XHRcdHZpZGVvLmRlY3JlYXNlUmF0ZShvcHRpb25zLnJhdGUubWluKTtcblxuXHRcdFx0XHRcdHRoaXMudXAuZWxlbWVudC5yZW1vdmVDbGFzcygnZGlzYWJsZWQnKTtcblx0XHRcdFx0XHRDb29raWUuc2V0KCdyYXRlJywgdmlkZW8ucGxheWJhY2tSYXRlKTtcblx0XHRcdFx0XHR0aGlzLnNob3coKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLmRvd24uZWxlbWVudC5hZGRDbGFzcygnZGlzYWJsZWQnKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRsb2FkICgpIHtcblx0XHRcdFx0LyoqIFRPRE86IE1vdmUgd29yayB3aXRoIENvb2tpZSB0byB0aGUgVmlkZW8gY2xhc3MgKi9cblx0XHRcdFx0dmlkZW8ucGxheWJhY2tSYXRlID0gQ29va2llLmdldCgncmF0ZScsIDEpO1xuXHRcdFx0XHR0aGlzLnNob3coKTtcblx0XHRcdH1cblxuXHRcdFx0c2hvdyAoKSB7XG5cdFx0XHRcdHRoaXMuY3VycmVudC50ZXh0ID0gJ8OXJyArIHZpZGVvLnBsYXliYWNrUmF0ZS50b0ZpeGVkKDIpLnRvU3RyaW5nKCkucmVwbGFjZSgnLCcsICcuJyk7XG5cdFx0XHR9XG5cblx0XHRcdGluY3JlYXNlICgpIHtcblx0XHRcdFx0aWYgKHZpZGVvLnBsYXliYWNrUmF0ZSA8IG9wdGlvbnMucmF0ZS5tYXgpIHtcblx0XHRcdFx0XHR0aGlzLmRvd24uZWxlbWVudC5yZW1vdmVDbGFzcygnZGlzYWJsZWQnKTtcblx0XHRcdFx0XHR2aWRlby5wbGF5YmFja1JhdGUgKz0gb3B0aW9ucy5yYXRlLnN0ZXA7XG5cdFx0XHRcdFx0Q29va2llLnNldCgncmF0ZScsIHZpZGVvLnBsYXliYWNrUmF0ZSk7XG5cdFx0XHRcdFx0dGhpcy5zaG93KCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdHRoaXMudXAuZWxlbWVudC5hZGRDbGFzcygnZGlzYWJsZWQnKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRjbGFzcyBTb3VyY2VDb250cm9sIGV4dGVuZHMgQ29udHJvbENvbnRhaW5lciB7XG5cdFx0XHRjb25zdHJ1Y3RvciAoKSB7XG5cdFx0XHRcdHN1cGVyKCdidWxsc2V5ZScpO1xuXHRcdFx0XHQvKiogVE9ETzogTW92ZSBzb3VyY2VzIHRvIHRoZSBhcmd1bWVudHMgaW4gY29uc3Ryb3IgKi9cblx0XHRcdFx0aWYgKHNvdXJjZXMubGVuZ3RoID4gMSkge1xuXHRcdFx0XHRcdGZvciAodmFyIGkgaW4gc291cmNlcykge1xuXHRcdFx0XHRcdFx0dGhpcy5hZGRJdGVtKHNvdXJjZXNbIGkgXS50aXRsZSwgeyBzcmMgOiBzb3VyY2VzWyBpIF0uc3JjIH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRzZXQgKGluZGV4KSB7XG5cdFx0XHRcdC8qKiBUT0RPOiBFbWl0IGV2ZW50IG9uIHNldCBzb3VyY2UqL1xuXHRcdFx0XHRsZXQgcyA9IHRoaXMuZ2V0QnlJbmRleChpbmRleCk7XG5cdFx0XHRcdGlmIChzICE9IG51bGwpIHtcblx0XHRcdFx0XHRlbGVtZW50LmF0dHIoJ3NyYycsIHMuZGF0YSgnc3JjJykpO1xuXHRcdFx0XHRcdGNvbnRyb2xzLmRvd25sb2FkID0gcy5kYXRhKCdzcmMnKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRvbkl0ZW1DbGljayAoaW5kZXgpIHtcblx0XHRcdFx0c3VwZXIub25JdGVtQ2xpY2soaW5kZXgpO1xuXHRcdFx0XHR0aGlzLnNldChpbmRleCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y2xhc3MgU3VidGl0bGVDb250cm9sIGV4dGVuZHMgQ29udHJvbENvbnRhaW5lciB7XG5cdFx0XHRjb25zdHJ1Y3RvciAoKSB7XG5cdFx0XHRcdHN1cGVyKCdjb21tZW50aW5nLW8nKTtcblx0XHRcdFx0aWYgKHZpZGVvLnN1YnRpdGxlcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0Zm9yICh2YXIgaSBpbiB2aWRlby5zdWJ0aXRsZXMpIHtcblx0XHRcdFx0XHRcdGlmICghdmlkZW8uc3VidGl0bGVzLmhhc093blByb3BlcnR5KGkpKSBjb250aW51ZTtcblx0XHRcdFx0XHRcdGxldCBpdGVtID0gdmlkZW8uc3VidGl0bGVzWyBpIF07XG5cdFx0XHRcdFx0XHR0aGlzLmFkZEl0ZW0oaXRlbS50aXRsZSwge1xuXHRcdFx0XHRcdFx0XHRzcmMgOiBpdGVtLnNyYyxcblx0XHRcdFx0XHRcdFx0bGFuZ3VhZ2UgOiBpdGVtLmxhbmd1YWdlXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0c2V0IHRyYWNrIChpbmRleCkge1xuXHRcdFx0XHR2YXIgdCA9IHRoaXMuZ2V0QnlJbmRleChpbmRleCk7XG5cdFx0XHRcdGlmICh0ICE9IG51bGwgJiYgdmlkZW8udGV4dFRyYWNrcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0bGV0IGxhbmd1YWdlID0gdC5kYXRhKCdsYW5ndWFnZScpO1xuXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdmlkZW8udGV4dFRyYWNrcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdFx0aWYgKHZpZGVvLnRleHRUcmFja3NbIGkgXS5sYW5ndWFnZSA9PSBsYW5ndWFnZSlcblx0XHRcdFx0XHRcdFx0dmlkZW8udGV4dFRyYWNrc1sgaSBdLm1vZGUgPSAnc2hvd2luZyc7XG5cdFx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRcdHZpZGVvLnRleHRUcmFja3NbIGkgXS5tb2RlID0gJ2hpZGRlbic7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdG9uQ29udGFpbmVyQ2xpY2sgKCkge1xuXHRcdFx0XHRzdXBlci5vbkNvbnRhaW5lckNsaWNrKCk7XG5cdFx0XHRcdHN1cGVyLm9uSXRlbUNsaWNrKC0xKTtcblx0XHRcdFx0aWYgKHZpZGVvLnRleHRUcmFja3MubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdmlkZW8udGV4dFRyYWNrcy5sZW5ndGg7IGkrKylcblx0XHRcdFx0XHRcdHZpZGVvLnRleHRUcmFja3NbIGkgXS5tb2RlID0gJ2hpZGRlbic7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0b25JdGVtQ2xpY2sgKGluZGV4KSB7XG5cdFx0XHRcdHN1cGVyLm9uSXRlbUNsaWNrKGluZGV4KTtcblx0XHRcdFx0dGhpcy50cmFjayA9IGluZGV4O1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGNsYXNzIFRpbWVsaW5lQ29udHJvbCB7XG5cdFx0XHRjb25zdHJ1Y3RvciAoKSB7XG5cdFx0XHRcdGxldCBfc2VsZiA9IHRoaXMsXG5cdFx0XHRcdFx0ZHVyYXRpb24gPSB2aWRlby5kdXJhdGlvbjtcblxuXHRcdFx0XHR0aGlzLmRyYWcgPSBmYWxzZTtcblxuXHRcdFx0XHR0aGlzLmN1cnJlbnQgPSBuZXcgQ29udHJvbFRleHQoJ3RpbWUtY3VycmVudCcpO1xuXHRcdFx0XHR0aGlzLnRvdGFsID0gbmV3IENvbnRyb2xUZXh0KCd0aW1lLXRvdGFsJyk7XG5cblx0XHRcdFx0dGhpcy5tYXJrZXIgPSAkKCc8ZGl2IC8+JykuYWRkQ2xhc3MoJ3RpbWUtbWFya2VyJyk7XG5cblx0XHRcdFx0dGhpcy5tYXJrZXJTaGFkb3cgPSAkKCc8ZGl2IC8+Jylcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3RpbWUtbWFya2VyIHNoYWRvdycpXG5cdFx0XHRcdFx0LmFwcGVuZCgpXG5cdFx0XHRcdFx0LmhpZGUoKTtcblxuXHRcdFx0XHR0aGlzLm1hcmtlclNoYWRvd1RpbWUgPSAkKCc8ZGl2IC8+JykuYWRkQ2xhc3MoJ3RpbWUnKTtcblx0XHRcdFx0dGhpcy5tYXJrZXJUaW1lID0gJCgnPGRpdiAvPicpXG5cdFx0XHRcdFx0LmFkZENsYXNzKCd0aW1lJylcblx0XHRcdFx0XHQuaGlkZSgpO1xuXHRcdFx0XHR0aGlzLnBsYXllZCA9ICQoJzxkaXYgLz4nKS5hZGRDbGFzcygndGltZS1wbGF5ZWQnKTtcblx0XHRcdFx0dGhpcy5jdXJyZW50LnRleHQgPSAnMDA6MDAnO1xuXHRcdFx0XHR0aGlzLmxpbmUgPSAkKCc8ZGl2IC8+Jylcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3RpbWVsaW5lJylcblx0XHRcdFx0XHQuYXBwZW5kKHRoaXMubWFya2VyLmFwcGVuZCh0aGlzLm1hcmtlclRpbWUpKVxuXHRcdFx0XHRcdC5hcHBlbmQodGhpcy5tYXJrZXJTaGFkb3cuYXBwZW5kKHRoaXMubWFya2VyU2hhZG93VGltZSkpXG5cdFx0XHRcdFx0LmFwcGVuZCh0aGlzLnBsYXllZClcblx0XHRcdFx0XHQub24oe1xuXHRcdFx0XHRcdFx0J21vdXNlbW92ZScgOiAoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5kcmFnKSByZXR1cm47XG5cblx0XHRcdFx0XHRcdFx0bGV0IHAgPSB0aGlzLmdldFBvc2l0aW9uKGUucGFnZVgpO1xuXHRcdFx0XHRcdFx0XHRpZiAocCA+IDAgJiYgcCA8IDEpIHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLm1hcmtlclNoYWRvdy5zaG93KCk7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5tYXJrZXJTaGFkb3cuY3NzKCdsZWZ0JywgcCAqIDEwMCArICclJyk7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5tYXJrZXJTaGFkb3dUaW1lLmh0bWwoc2Vjb25kc1RvVGltZShkdXJhdGlvbiAqIHApKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5tYXJrZXJTaGFkb3cuaGlkZSgpO1xuXHRcdFx0XHRcdFx0fSxcblxuXHRcdFx0XHRcdFx0J21vdXNlbGVhdmUnIDogKGUpID0+IHtcblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuZHJhZykgcmV0dXJuO1xuXHRcdFx0XHRcdFx0XHR0aGlzLm1hcmtlclNoYWRvdy5oaWRlKClcblx0XHRcdFx0XHRcdH0sXG5cblx0XHRcdFx0XHRcdCdjbGljaycgOiAoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5kcmFnKSByZXR1cm47XG5cdFx0XHRcdFx0XHRcdHZpZGVvLnNlZWsodmlkZW8uZHVyYXRpb24gKiB0aGlzLmdldFBvc2l0aW9uKGUucGFnZVgpKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHR0aGlzLmVsZW1lbnQgPSAkKCc8ZGl2IC8+Jylcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3RpbWVsaW5lLWNvbnRhaW5lcicpXG5cdFx0XHRcdFx0LmFwcGVuZCgkKCc8ZGl2IC8+Jylcblx0XHRcdFx0XHRcdC5hZGRDbGFzcygndGltZWxpbmUtc3ViY29udGFpbmVyJylcblx0XHRcdFx0XHRcdC5hcHBlbmQodGhpcy5jdXJyZW50LmVsZW1lbnQpXG5cdFx0XHRcdFx0XHQuYXBwZW5kKHRoaXMubGluZSlcblx0XHRcdFx0XHRcdC5hcHBlbmQodGhpcy50b3RhbC5lbGVtZW50KSk7XG5cblx0XHRcdFx0dGhpcy5tYXJrZXIub24oJ21vdXNlZG93bicsIChlKSA9PiB7XG5cdFx0XHRcdFx0aWYgKGUud2hpY2ggIT0gMSkgcmV0dXJuO1xuXHRcdFx0XHRcdHRoaXMubWFya2VyU2hhZG93LmhpZGUoKTtcblx0XHRcdFx0XHR0aGlzLmRyYWcgPSB0cnVlO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHQkKGRvY3VtZW50KS5vbih7XG5cblx0XHRcdFx0XHQnbW91c2Vtb3ZlJyA6IChlKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoIXRoaXMuZHJhZykgcmV0dXJuO1xuXHRcdFx0XHRcdFx0bGV0IHAgPSB0aGlzLmdldFBvc2l0aW9uKGUucGFnZVgpO1xuXHRcdFx0XHRcdFx0aWYgKHAgPiAwICYmIHAgPCAxKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMubWFya2VyVGltZVxuXHRcdFx0XHRcdFx0XHRcdC5zaG93KClcblx0XHRcdFx0XHRcdFx0XHQuaHRtbChzZWNvbmRzVG9UaW1lKGR1cmF0aW9uICogcCkpXG5cdFx0XHRcdFx0XHRcdHZpZGVvLnNlZWsoZHVyYXRpb24gKiBwKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9LFxuXG5cdFx0XHRcdFx0J21vdXNldXAnIDogKGUpID0+IHtcblx0XHRcdFx0XHRcdHRoaXMubWFya2VyVGltZS5oaWRlKClcblx0XHRcdFx0XHRcdHRoaXMuZHJhZyA9IGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHRcdGdldFBvc2l0aW9uICh4KSB7XG5cdFx0XHRcdHJldHVybiAoeCAtIHRoaXMubGluZS5vZmZzZXQoKS5sZWZ0KSAvIHRoaXMubGluZS53aWR0aCgpO1xuXHRcdFx0fVxuXG5cdFx0XHRtb3ZlICgpIHtcblx0XHRcdFx0dmFyIHQgPSAodmlkZW8uY3VycmVudFRpbWUgLyB2aWRlby5kdXJhdGlvbiAqIDEwMCkudG9GaXhlZCgyKSArICclJztcblx0XHRcdFx0dGhpcy5tYXJrZXIuY3NzKCdsZWZ0JywgdCk7XG5cdFx0XHRcdHRoaXMucGxheWVkLmNzcygnd2lkdGgnLCB0KTtcblx0XHRcdFx0dGhpcy5jdXJyZW50LnRleHQgPSBzZWNvbmRzVG9UaW1lKHZpZGVvLmN1cnJlbnRUaW1lKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRjbGFzcyBWb2x1bWVDb250cm9sIHtcblx0XHRcdGNvbnN0cnVjdG9yICgpIHtcblx0XHRcdFx0bGV0IF9zZWxmID0gdGhpcztcblxuXHRcdFx0XHR0aGlzLmljb24gPSAkKCc8ZGl2Lz4nKVxuXHRcdFx0XHRcdC5hZGRDbGFzcygnY29udHJvbC1pY29uJylcblx0XHRcdFx0XHQuYXBwZW5kKCQoJzxpIC8+Jylcblx0XHRcdFx0XHRcdC5hZGRDbGFzcygnZmEgZmEtdm9sdW1lLWRvd24nKSlcblx0XHRcdFx0XHQuY2xpY2soZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0X3NlbGYudG9nZ2xlTXV0ZWQoKTtcblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHR0aGlzLm1hcmtlciA9ICQoJzxkaXYvPicpLmFkZENsYXNzKCd2b2x1bWUtbWFya2VyJyk7XG5cblx0XHRcdFx0dGhpcy5hY3RpdmUgPSAkKCc8ZGl2Lz4nKS5hZGRDbGFzcygndm9sdW1lLWFjdGl2ZScpO1xuXG5cdFx0XHRcdHRoaXMubGluZSA9ICQoJzxkaXYvPicpXG5cdFx0XHRcdFx0LmFkZENsYXNzKCd2b2x1bWUtbGluZScpXG5cdFx0XHRcdFx0LmFwcGVuZCh0aGlzLmFjdGl2ZSlcblx0XHRcdFx0XHQuYXBwZW5kKHRoaXMubWFya2VyKVxuXHRcdFx0XHRcdC5vbignY2xpY2snLCAoZSkgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKHRoaXMuZHJhZykgcmV0dXJuO1xuXHRcdFx0XHRcdFx0bGV0IHAgPSB0aGlzLmdldFBvc2l0aW9uKGUucGFnZVkpO1xuXHRcdFx0XHRcdFx0aWYgKHAgPj0gMCAmJiBwIDw9IDEpIHtcblx0XHRcdFx0XHRcdFx0Y29udHJvbHMudm9sdW1lID0gMSAtIHA7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0dGhpcy5lbGVtZW50ID0gJCgnPGRpdiAvPicpXG5cdFx0XHRcdFx0LmFkZENsYXNzKCdjb250cm9sIGNvbnRyb2wtY29udGFpbmVyJylcblx0XHRcdFx0XHQuYXBwZW5kKHRoaXMuaWNvbilcblx0XHRcdFx0XHQuYXBwZW5kKCQoJzxkaXYgLz4nKVxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCdjb250cm9sLWlubmVyIHZvbHVtZS1zbGlkZXInKVxuXHRcdFx0XHRcdFx0LmFwcGVuZCh0aGlzLmxpbmUpKTtcblxuXHRcdFx0XHR0aGlzLmRyYWcgPSBmYWxzZTtcblxuXHRcdFx0XHR0aGlzLm1hcmtlci5vbignbW91c2Vkb3duJywgKGUpID0+IHtcblx0XHRcdFx0XHRpZiAoZS53aGljaCAhPSAxKSByZXR1cm47XG5cdFx0XHRcdFx0dGhpcy5kcmFnID0gdHJ1ZTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0JChkb2N1bWVudCkub24oe1xuXHRcdFx0XHRcdCdtb3VzZW1vdmUnIDogKGUpID0+IHtcblx0XHRcdFx0XHRcdGlmICghdGhpcy5kcmFnKSByZXR1cm47XG5cdFx0XHRcdFx0XHRsZXQgcCA9IHRoaXMuZ2V0UG9zaXRpb24oZS5wYWdlWSk7XG5cdFx0XHRcdFx0XHRpZiAocCA+PSAwICYmIHAgPD0gMSkge1xuXHRcdFx0XHRcdFx0XHRjb250cm9scy52b2x1bWUgPSAxIC0gcFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0sXG5cblx0XHRcdFx0XHQnbW91c2V1cCcgOiAoZSkgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy5kcmFnID0gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0c2V0IHZhbHVlICh2YWx1ZSkge1xuXHRcdFx0XHR2YXIgaWNvbiA9IHRoaXMuaWNvbi5jaGlsZHJlbignLmZhJykuZXEoLTEpO1xuXHRcdFx0XHRpY29uLnJlbW92ZUNsYXNzKCk7XG5cdFx0XHRcdGlmICh2YWx1ZSA8IGVudi52b2x1bWUubXV0ZWxpbWl0KSB7XG5cdFx0XHRcdFx0aWNvbi5hZGRDbGFzcygnZmEgZmEtdm9sdW1lLW9mZicpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdGlmICh2YWx1ZSA8IDAuNSlcblx0XHRcdFx0XHRcdGljb24uYWRkQ2xhc3MoJ2ZhIGZhLXZvbHVtZS1kb3duJyk7XG5cdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0aWNvbi5hZGRDbGFzcygnZmEgZmEtdm9sdW1lLXVwJyk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRsZXQgcCA9IE1hdGgucm91bmQodmFsdWUgKiAxMDApLnRvU3RyaW5nKCkgKyAnJSc7XG5cdFx0XHRcdHRoaXMuYWN0aXZlLmNzcygnaGVpZ2h0JywgcCk7XG5cdFx0XHRcdHRoaXMubWFya2VyLmNzcygnYm90dG9tJywgcCk7XG5cdFx0XHR9XG5cblx0XHRcdHRvZ2dsZU11dGVkICgpIHtcblx0XHRcdFx0aWYgKHZpZGVvLm11dGVkID09IHRydWUpIHtcblx0XHRcdFx0XHR0aGlzLnZhbHVlID0gQ29va2llLmdldCgndm9sdW1lJywgZW52LnZvbHVtZS5kZWZhdWx0KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0dGhpcy52YWx1ZSA9IDA7XG5cdFx0XHR9XG5cblx0XHRcdGdldFBvc2l0aW9uICh5KSB7XG5cdFx0XHRcdHJldHVybiAoeSAtIHRoaXMubGluZS5vZmZzZXQoKS50b3ApIC8gdGhpcy5saW5lLmhlaWdodCgpO1xuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0Y2xhc3MgQ29va2llIHtcblx0XHRcdHN0YXRpYyBnZXQgKG5hbWUsIGRmbHQpIHtcblx0XHRcdFx0dmFyIGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKTtcblx0XHRcdFx0Zm9yICh2YXIgaSBpbiBjb29raWVzKSB7XG5cdFx0XHRcdFx0dmFyIGQgPSBjb29raWVzWyBpIF0udHJpbSgpLnNwbGl0KCc9Jyk7XG5cdFx0XHRcdFx0aWYgKGRbIDAgXSA9PSAnbGVwbGF5ZXJfJyArIG5hbWUpXG5cdFx0XHRcdFx0XHRyZXR1cm4gZFsgMSBdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBkZmx0O1xuXHRcdFx0fTtcblxuXHRcdFx0c3RhdGljIHNldCAobmFtZSwgdmFsdWUpIHtcblx0XHRcdFx0dmFyIGQgPSBuZXcgRGF0ZSgpO1xuXHRcdFx0XHRkLnNldERhdGUoZC55ZWFyICsgMSk7XG5cdFx0XHRcdGRvY3VtZW50LmNvb2tpZSA9ICdsZXBsYXllcl8nICsgbmFtZSArICc9JyArIHZhbHVlICsgJztleHBpcmVzPScgKyBkLnRvU3RyaW5nKCk7XG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdGNsYXNzIENvbnRyb2xDb2xsZWN0aW9uIHtcblx0XHRcdGNvbnN0cnVjdG9yIChuYW1lLCBhY3RpdmUpIHtcblx0XHRcdFx0dGhpcy5pdGVtcyA9IFtdO1xuXHRcdFx0XHR0aGlzLmFjdGl2ZSA9IGFjdGl2ZSB8fCBmYWxzZTtcblx0XHRcdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHRcdH1cblxuXHRcdFx0c2V0IGRvd25sb2FkICh2YWx1ZSkge1xuXHRcdFx0XHRpZiAodGhpcy5oYXMoQ19ET1dOTE9BRCkpIHtcblx0XHRcdFx0XHR0aGlzLml0ZW1zLmRvd25sb2FkLmxpbmsgPSB2YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRzZXQgc291cmNlICh2YWx1ZSkge1xuXHRcdFx0XHRpZiAodGhpcy5oYXMoQ19TT1VSQ0UpKVxuXHRcdFx0XHRcdHRoaXMuaXRlbXMuc291cmNlLnNldCh2YWx1ZSk7XG5cdFx0XHR9XG5cblx0XHRcdHNldCB0b3RhbFRpbWUgKHZhbHVlKSB7XG5cdFx0XHRcdGlmICh0aGlzLmhhcyhDX1RJTUVMSU5FKSlcblx0XHRcdFx0XHR0aGlzLml0ZW1zLnRpbWVsaW5lLnRvdGFsLnRleHQgPSB2YWx1ZTtcblx0XHRcdH1cblxuXHRcdFx0c2V0IHZvbHVtZSAodmFsdWUpIHtcblx0XHRcdFx0aWYgKHRoaXMuaGFzKENfVk9MVU1FKSlcblx0XHRcdFx0XHR0aGlzLml0ZW1zLnZvbHVtZS52YWx1ZSA9IHZhbHVlO1xuXHRcdFx0fVxuXG5cdFx0XHRhZGQgKG5hbWUpIHtcblx0XHRcdFx0aWYgKG5hbWUgPT0gQ19ESVZJREVSKVxuXHRcdFx0XHRcdHJldHVybiBDb250cm9sLmNyZWF0ZShuYW1lKTtcblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5pdGVtc1sgbmFtZSBdID0gQ29udHJvbC5jcmVhdGUobmFtZSk7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuaXRlbXNbIG5hbWUgXS5lbGVtZW50O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGhhcyAobmFtZSkge1xuXHRcdFx0XHRyZXR1cm4gKHR5cGVvZiB0aGlzLml0ZW1zWyBuYW1lIF0gPT0gJ29iamVjdCcpO1xuXHRcdFx0fVxuXG5cdFx0XHRoaWRlICgpIHtcblx0XHRcdFx0Y29udGFpbmVyLmZpbmQoJy5jb250cm9scy0nICsgdGhpcy5uYW1lKS5oaWRlKCk7XG5cdFx0XHR9XG5cblx0XHRcdGluaXQgKCkge1xuXHRcdFx0XHR0aGlzLnZvbHVtZSA9IENvb2tpZS5nZXQoJ3ZvbHVtZScsIGVudi52b2x1bWUuZGVmYXVsdCk7XG5cdFx0XHRcdHRoaXMuaW5pdFRpbWVsaW5lKCk7XG5cdFx0XHRcdHRoaXMudG90YWxUaW1lID0gc2Vjb25kc1RvVGltZSh2aWRlby5kdXJhdGlvbik7XG5cdFx0XHRcdHRoaXMuaW5pdFJhdGUoKTtcblx0XHRcdFx0dGhpcy5kb3dubG9hZCA9IHNvdXJjZXNbIDAgXS5zcmM7XG5cdFx0XHR9XG5cblx0XHRcdGluaXRSYXRlICgpIHtcblx0XHRcdFx0aWYgKHRoaXMuaGFzKENfUkFURSkpXG5cdFx0XHRcdFx0dGhpcy5pdGVtcy5yYXRlLmxvYWQoKTtcblx0XHRcdH1cblxuXHRcdFx0aW5pdFRpbWVsaW5lICgpIHtcblx0XHRcdFx0aWYgKHRoaXMuaGFzKENfVElNRUxJTkUpKSB7XG5cdFx0XHRcdFx0aWYgKHRoaXMuaXRlbXMudGltZWxpbmUuZWxlbWVudC53aWR0aCgpIDwgMjApXG5cdFx0XHRcdFx0XHR0aGlzLml0ZW1zLnRpbWVsaW5lLmVsZW1lbnQuaGlkZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdG1vdmVUaW1lTWFya2VyICgpIHtcblx0XHRcdFx0aWYgKHRoaXMuaGFzKENfVElNRUxJTkUpKVxuXHRcdFx0XHRcdHRoaXMuaXRlbXMudGltZWxpbmUubW92ZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHRwYXVzZSAoKSB7XG5cdFx0XHRcdGlmICh0aGlzLmhhcyhDX1BMQVkpKVxuXHRcdFx0XHRcdHRoaXMuaXRlbXMucGxheS5wYXVzZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHRwbGF5ICgpIHtcblx0XHRcdFx0aWYgKHRoaXMuaGFzKENfUExBWSkpXG5cdFx0XHRcdFx0dGhpcy5pdGVtcy5wbGF5LnBsYXkoKTtcblx0XHRcdH1cblxuXHRcdFx0c2hvdyAoKSB7XG5cdFx0XHRcdGNvbnRhaW5lci5maW5kKCcuY29udHJvbHMtJyArIHRoaXMubmFtZSkuc2hvdygpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGNsYXNzIENvbnRyb2xzIHtcblx0XHRcdGNvbnN0cnVjdG9yICgpIHtcblx0XHRcdFx0dGhpcy5jb2xsZWN0aW9ucyA9IHtcblx0XHRcdFx0XHRjb21tb24gOiBuZXcgQ29udHJvbENvbGxlY3Rpb24oJ2NvbW1vbicpLFxuXHRcdFx0XHRcdG1pbmkgOiBuZXcgQ29udHJvbENvbGxlY3Rpb24oJ21pbmknKSxcblx0XHRcdFx0XHRmdWxsc2NyZWVuIDogbmV3IENvbnRyb2xDb2xsZWN0aW9uKCdmdWxsc2NyZWVuJylcblx0XHRcdFx0fTtcblx0XHRcdFx0dGhpcy5jb2xsZWN0aW9ucy5jb21tb24uYWN0aXZlID0gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0Z2V0IGNvbW1vbiAoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmNvbGxlY3Rpb25zLmNvbW1vbjtcblx0XHRcdH1cblxuXHRcdFx0Z2V0IGZ1bGxzY3JlZW4gKCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5jb2xsZWN0aW9ucy5mdWxsc2NyZWVuO1xuXHRcdFx0fVxuXG5cdFx0XHRnZXQgbWluaSAoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmNvbGxlY3Rpb25zLm1pbmk7XG5cdFx0XHR9XG5cblx0XHRcdHNldCBkb3dubG9hZCAodmFsdWUpIHtcblx0XHRcdFx0Zm9yICh2YXIgaSBpbiB0aGlzLmNvbGxlY3Rpb25zKSB7XG5cdFx0XHRcdFx0dGhpcy5jb2xsZWN0aW9uc1sgaSBdLmRvd25sb2FkID0gdmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0c2V0IHNvdXJjZSAodmFsdWUpIHtcblx0XHRcdFx0Zm9yICh2YXIgaSBpbiB0aGlzLmNvbGxlY3Rpb25zKSB7XG5cdFx0XHRcdFx0dGhpcy5jb2xsZWN0aW9uc1sgaSBdLnNvdXJjZSA9IHZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHNldCB0b3RhbFRpbWUgKHZhbHVlKSB7XG5cdFx0XHRcdGZvciAodmFyIGkgaW4gdGhpcy5jb2xsZWN0aW9ucykge1xuXHRcdFx0XHRcdHRoaXMuY29sbGVjdGlvbnNbIGkgXS50b3RhbFRpbWUgPSB2YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRzZXQgdm9sdW1lICh2YWx1ZSkge1xuXHRcdFx0XHRmb3IgKHZhciBpIGluIHRoaXMuY29sbGVjdGlvbnMpIHtcblx0XHRcdFx0XHR0aGlzLmNvbGxlY3Rpb25zWyBpIF0udm9sdW1lID0gdmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0dmlkZW8udm9sdW1lID0gdmFsdWU7XG5cdFx0XHRcdENvb2tpZS5zZXQoJ3ZvbHVtZScsIHZhbHVlKTtcblx0XHRcdH1cblxuXHRcdFx0aGFzIChuYW1lKSB7XG5cdFx0XHRcdHJldHVybiAodHlwZW9mIHRoaXMuY29sbGVjdGlvbnNbIG5hbWUgXSA9PSAnb2JqZWN0Jyk7XG5cdFx0XHR9XG5cblx0XHRcdGluaXQgKCkge1xuXHRcdFx0XHRmb3IgKHZhciBpIGluIHRoaXMuY29sbGVjdGlvbnMpIHtcblx0XHRcdFx0XHR0aGlzLmNvbGxlY3Rpb25zWyBpIF0uaW5pdCgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuY29sbGVjdGlvbnMuY29tbW9uLnNob3coKTtcblx0XHRcdFx0dGhpcy5jb2xsZWN0aW9ucy5taW5pLmhpZGUoKTtcblx0XHRcdFx0dGhpcy5jb2xsZWN0aW9ucy5mdWxsc2NyZWVuLmhpZGUoKTtcblx0XHRcdH1cblxuXHRcdFx0bW92ZVRpbWVNYXJrZXIgKCkge1xuXHRcdFx0XHRmb3IgKHZhciBpIGluIHRoaXMuY29sbGVjdGlvbnMpXG5cdFx0XHRcdFx0dGhpcy5jb2xsZWN0aW9uc1sgaSBdLm1vdmVUaW1lTWFya2VyKCk7XG5cdFx0XHR9XG5cblx0XHRcdHBhdXNlICgpIHtcblx0XHRcdFx0Zm9yICh2YXIgaSBpbiB0aGlzLmNvbGxlY3Rpb25zKVxuXHRcdFx0XHRcdHRoaXMuY29sbGVjdGlvbnNbIGkgXS5wYXVzZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHRwbGF5ICgpIHtcblx0XHRcdFx0Zm9yICh2YXIgaSBpbiB0aGlzLmNvbGxlY3Rpb25zKVxuXHRcdFx0XHRcdHRoaXMuY29sbGVjdGlvbnNbIGkgXS5wbGF5KCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dmFyIHNvdXJjZXMgPSBbXTtcblx0XHR2YXIgc3VidGl0bGVzID0gW107XG5cdFx0dmFyIHZvbHVtZSA9IGVudi52b2x1bWUuZGVmYXVsdDtcblx0XHR2YXIgdmlkZW8gPSBudWxsO1xuXHRcdHZhciBjb250cm9scyA9IG5ldyBDb250cm9scygpO1xuXG5cdFx0LyoqXG5cdFx0ICogRE9NIGNvbnRhaW5lciB0byBob2xkIHZpZGVvIGFuZCBhbGwgb3RoZXIgc3R1ZmYuXG5cdFx0ICogQHR5cGUgb2JqZWN0XG5cdFx0ICovXG5cdFx0dmFyIGNvbnRhaW5lciA9IG51bGw7XG5cdFx0dmFyIG92ZXJsYXkgPSBudWxsO1xuXG5cdFx0dmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHQvLyBDaGVjayBpZiBlbGVtZW50IGlzIGNvcnJlY3RseSBzZWxlY3RlZC5cblx0XHRcdGlmIChlbGVtZW50LnByb3AoJ3RhZ05hbWUnKS50b0xvd2VyQ2FzZSgpICE9ICd2aWRlbycpIHtcblx0XHRcdFx0Y29uc29sZS53YXJuKCdJbmNvcnJlY3QgZWxlbWVudCBzZWxlY3RlZC4nKTtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFNldCBzb3VyY2UuXG5cdFx0XHRlbGVtZW50LmNoaWxkcmVuKCdzb3VyY2UnKS5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0dmFyIHNyYyA9ICQodGhpcykuYXR0cignc3JjJyk7XG5cdFx0XHRcdGlmIChzcmMpXG5cdFx0XHRcdFx0c291cmNlcy5wdXNoKHtcblx0XHRcdFx0XHRcdHNyYyA6IHNyYyxcblx0XHRcdFx0XHRcdHRpdGxlIDogJCh0aGlzKS5hdHRyKCd0aXRsZScpXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHRcdGlmIChzb3VyY2VzLmxlbmd0aCA9PSAwKSB7XG5cdFx0XHRcdHZhciBzcmMgPSBlbGVtZW50LmF0dHIoJ3NyYycpO1xuXHRcdFx0XHRpZiAoc3JjKSB7XG5cdFx0XHRcdFx0c291cmNlcy5wdXNoKHtcblx0XHRcdFx0XHRcdHNyYyA6IHNyYyxcblx0XHRcdFx0XHRcdHRpdGxlIDogJCh0aGlzKS5hdHRyKCd0aXRsZScpIHx8ICdkZWZhdWx0J1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoc291cmNlcy5sZW5ndGggPT0gMCkge1xuXHRcdFx0XHRjb25zb2xlLndhcm4oJ05vIHNvdXJjZXMgZm91bmQuJyk7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fVxuXHRcdFx0dmlkZW8gPSBuZXcgVmlkZW8oZWxlbWVudCk7XG5cblx0XHRcdGluaXRPcHRpb25zKCk7XG5cdFx0XHRpbml0RG9tKCk7XG5cdFx0XHR2aWRlby5pbml0KCk7XG5cdFx0XHRpbml0Q29udHJvbHMoKTtcblx0XHRcdGluaXRIb3RLZXlzKCk7XG5cdFx0fTtcblxuXHRcdHZhciBpbml0Q29udHJvbHMgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRmb3IgKGxldCBuYW1lIGluIG9wdGlvbnMuY29udHJvbHMpIHtcblx0XHRcdFx0aWYgKGNvbnRyb2xzLmhhcyhuYW1lKSkge1xuXHRcdFx0XHRcdGZvciAobGV0IHJvd0luZGV4IGluIG9wdGlvbnMuY29udHJvbHNbIG5hbWUgXSkge1xuXHRcdFx0XHRcdFx0bGV0IHJvdyA9IG9wdGlvbnMuY29udHJvbHNbIG5hbWUgXVsgcm93SW5kZXggXSxcblx0XHRcdFx0XHRcdFx0aGFzVGltZWxpbmUgPSBmYWxzZSxcblx0XHRcdFx0XHRcdFx0cm93RWxlbWVudCA9ICQoJzxkaXYgLz4nKS5hZGRDbGFzcygnbGVwbGF5ZXItY29udHJvbHMgY29udHJvbHMtJyArIG5hbWUpO1xuXG5cdFx0XHRcdFx0XHRmb3IgKGxldCBpIGluIHJvdykge1xuXHRcdFx0XHRcdFx0XHRsZXQgY29udHJvbE5hbWUgPSByb3dbIGkgXTtcblxuXHRcdFx0XHRcdFx0XHRpZiAoY29udHJvbE5hbWUgPT0gQ19ESVZJREVSIHx8ICFjb250cm9scy5jb2xsZWN0aW9uc1sgbmFtZSBdLmhhcyhjb250cm9sTmFtZSkpIHtcblx0XHRcdFx0XHRcdFx0XHQvLyBDcmVhdGUgY29udHJvbCBvbmx5IGlmIGRpdmlkZXIgb3IgZG9lcyBub3QgZXhpc3QgeWV0LlxuXHRcdFx0XHRcdFx0XHRcdHZhciBjID0gY29udHJvbHMuY29sbGVjdGlvbnNbIG5hbWUgXS5hZGQoY29udHJvbE5hbWUpO1xuXHRcdFx0XHRcdFx0XHRcdGlmIChjICE9IG51bGwpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHJvd0VsZW1lbnQuYXBwZW5kKGMpO1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKGNvbnRyb2xOYW1lID09IENfVElNRUxJTkUpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGhhc1RpbWVsaW5lID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS53YXJuKCdDYW5ub3QgY3JlYXRlICcgKyBjb250cm9sTmFtZSArICcgY29udHJvbCBmb3IgY29sbGVjdGlvbiAnICsgbmFtZSArICcuJyk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0aWYgKCFoYXNUaW1lbGluZSlcblx0XHRcdFx0XHRcdFx0cm93RWxlbWVudC5jc3MoJ3dpZHRoJywgJzFweCcpO1xuXG5cdFx0XHRcdFx0XHRyb3dFbGVtZW50LmZpbmQoJy5kaXZpZGVyICsgLmRpdmlkZXInKS5yZW1vdmUoKTtcblxuXHRcdFx0XHRcdFx0Y29udGFpbmVyLmFwcGVuZChyb3dFbGVtZW50KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0dmFyIGluaXREb20gPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRvdmVybGF5ID0gJCgnPGRpdiAvPicpLmFkZENsYXNzKCdwbGF5LW92ZXJsYXknKS5odG1sKCc8aSBjbGFzcz1cImZhIGZhLXBsYXlcIj48L2k+Jyk7XG5cdFx0XHR2YXIgdmlkZW9Db250YWluZXIgPSAkKCc8ZGl2IC8+JykuYWRkQ2xhc3MoJ2xlcGxheWVyLXZpZGVvJykuYXBwZW5kKG92ZXJsYXkpO1xuXHRcdFx0Y29udGFpbmVyID0gJCgnPGRpdiAvPicpLmFkZENsYXNzKCdsZXBsYXllci1jb250YWluZXInKS5hcHBlbmQodmlkZW9Db250YWluZXIpLmNzcygnd2lkdGgnLCBlbGVtZW50LndpZHRoKCkgKyAncHgnKTtcblxuXHRcdFx0ZWxlbWVudC5iZWZvcmUoY29udGFpbmVyKTtcblx0XHRcdHZpZGVvQ29udGFpbmVyLmFwcGVuZChlbGVtZW50KTtcblx0XHRcdG92ZXJsYXkuY2xpY2soZnVuY3Rpb24gKCkge1xuXHRcdFx0XHR2aWRlby50b2dnbGVQbGF5KCk7XG5cdFx0XHR9KTtcblx0XHR9O1xuXG5cdFx0dmFyIGluaXRIb3RLZXlzID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0Ly8gU3BhY2UuXG5cdFx0XHRlbGVtZW50LmtleXByZXNzKGUgPT4ge1xuXHRcdFx0XHRpZiAoZS5jaGFyQ29kZSA9PSAzMikge1xuXHRcdFx0XHRcdC8vZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdHZpZGVvLnRvZ2dsZVBsYXkoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSkuY2xpY2soZnVuY3Rpb24gKCkge1xuXHRcdFx0XHR2aWRlby50b2dnbGVQbGF5KCk7XG5cdFx0XHR9KTtcblx0XHR9O1xuXG5cdFx0dmFyIGluaXRPcHRpb25zID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0Ly8gQ29udHJvbHMuXG5cdFx0XHRlbGVtZW50LnJlbW92ZUF0dHIoJ2NvbnRyb2xzJyk7XG5cblx0XHRcdC8vIEhlaWdodC5cblx0XHRcdHZhciBoID0gZWxlbWVudC5hdHRyKCdoZWlnaHQnKTtcblx0XHRcdGlmIChoKSB7XG5cdFx0XHRcdG9wdGlvbnMuaGVpZ2h0ID0gaCArICdweCc7XG5cdFx0XHRcdGVsZW1lbnQucmVtb3ZlQXR0cignaGVpZ2h0Jyk7XG5cdFx0XHR9XG5cdFx0XHRlbGVtZW50LmNzcygnaGVpZ2h0Jywgb3B0aW9ucy5oZWlnaHQpO1xuXG5cdFx0XHQvLyBXaWR0aC5cblx0XHRcdHZhciB3ID0gZWxlbWVudC5hdHRyKCd3aWR0aCcpO1xuXHRcdFx0aWYgKHcpIHtcblx0XHRcdFx0b3B0aW9ucy53aWR0aCA9IHcgKyAncHgnO1xuXHRcdFx0XHRlbGVtZW50LnJlbW92ZUF0dHIoJ3dpZHRoJyk7XG5cdFx0XHR9XG5cdFx0XHRlbGVtZW50LmNzcygnd2lkdGgnLCBvcHRpb25zLndpZHRoKTtcblxuXHRcdFx0Ly8gUG9zdGVyLlxuXHRcdFx0dmFyIHAgPSBlbGVtZW50LmF0dHIoJ3Bvc3RlcicpO1xuXHRcdFx0aWYgKHApXG5cdFx0XHRcdG9wdGlvbnMucG9zdGVyID0gcDtcblx0XHRcdGVsc2UgaWYgKG9wdGlvbnMucG9zdGVyKVxuXHRcdFx0XHRlbGVtZW50LmF0dHIoJ3Bvc3RlcicsIG9wdGlvbnMucG9zdGVyKTtcblxuXHRcdFx0Ly8gQXV0b3BsYXksIGxvb3AsIG11dGVkLlxuXHRcdFx0dmFyIGF0dHJzID0gWyAnYXV0b3BsYXknLCAnbG9vcCcsICdtdXRlZCcgXTtcblx0XHRcdGZvciAodmFyIGkgaW4gYXR0cnMpIHtcblx0XHRcdFx0dmFyIGEgPSBlbGVtZW50LmF0dHIoYXR0cnNbIGkgXSk7XG5cdFx0XHRcdGlmIChhKVxuXHRcdFx0XHRcdG9wdGlvbnNbIGF0dHJzWyBpIF0gXSA9IHRydWU7XG5cdFx0XHRcdGVsc2UgaWYgKG9wdGlvbnNbIGF0dHJzWyBpIF0gXSlcblx0XHRcdFx0XHRlbGVtZW50LmF0dHIoYXR0cnNbIGkgXSwgJycpO1xuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0ZWxlbWVudC5yZW1vdmVBdHRyKGF0dHJzWyBpIF0pO1xuXHRcdFx0XHRlbGVtZW50LnByb3AoYXR0cnNbIGkgXSwgb3B0aW9uc1sgYXR0cnNbIGkgXSBdKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gUHJlbG9hZC5cblx0XHRcdHZhciByID0gZWxlbWVudC5hdHRyKCdwcmVsb2FkJyk7XG5cdFx0XHRpZiAocikge1xuXHRcdFx0XHRyID0gci50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0XHRpZiAociA9PSAnbm9uZScgfHwgciA9PSAnbWV0YWRhdGEnKVxuXHRcdFx0XHRcdG9wdGlvbnMucHJlbG9hZCA9IHI7XG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRvcHRpb25zLnByZWxvYWQgPSAnYXV0byc7XG5cdFx0XHR9XG5cdFx0XHRlbGVtZW50LmF0dHIoJ3ByZWxvYWQnLCBvcHRpb25zLnByZWxvYWQpO1xuXHRcdH07XG5cblx0XHR2YXIgc2Vjb25kc1RvVGltZSA9IGZ1bmN0aW9uIChzZWNvbmRzKSB7XG5cdFx0XHR2YXIgaCA9IE1hdGguZmxvb3Ioc2Vjb25kcyAvIDM2MDApO1xuXHRcdFx0dmFyIG0gPSBNYXRoLmZsb29yKHNlY29uZHMgJSAzNjAwIC8gNjApO1xuXHRcdFx0dmFyIHMgPSBNYXRoLmZsb29yKHNlY29uZHMgJSAzNjAwICUgNjApO1xuXHRcdFx0dmFyIG91dCA9ICcnO1xuXHRcdFx0aWYgKGggPiAwKVxuXHRcdFx0XHRvdXQgPSBoICsgJzonO1xuXHRcdFx0aWYgKG0gPCAxMClcblx0XHRcdFx0b3V0ICs9ICcwJztcblx0XHRcdG91dCArPSBtICsgJzonO1xuXHRcdFx0aWYgKHMgPCAxMClcblx0XHRcdFx0b3V0ICs9ICcwJztcblx0XHRcdG91dCArPSBzO1xuXHRcdFx0cmV0dXJuIG91dDtcblx0XHR9O1xuXG5cdFx0aW5pdCgpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdHdpbmRvdy4kLmZuLmxlUGxheWVyID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblx0XHRyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHRcdFBsYXllcigkKHRoaXMpLCBvcHRpb25zKTtcblx0XHR9KTtcblx0fTtcbn0oalF1ZXJ5KSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzb3VyY2UvanMvbGUtcGxheWVyLmVzNi5qc1xuICoq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QURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUdBO0FBQ0E7QUFDQTtBQURBOzs7O0FBTUE7OztBQUdBO0FBQ0E7Ozs7QUFqREE7QUFDQTtBQUNBO0FBREE7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBU0E7Ozs7QUFwQ0E7QUF0VUE7QUFDQTtBQTRZQTs7O0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFEQTs7QUFGQTtBQUNBO0FBRkE7QUFBQTtBQUNBO0FBV0E7OztBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFFQTs7QUFGQTtBQUNBO0FBRkE7O0FBTUE7QUFDQTs7OztBQVBBO0FBQUE7QUFDQTtBQVVBOzs7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBQ0E7QUFLQTs7O0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFEQTs7QUFGQTtBQUNBO0FBRkE7QUFBQTtBQUNBO0FBUUE7OztBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBREE7O0FBRkE7QUFDQTtBQUZBOztBQVFBO0FBQ0E7Ozs7QUFNQTtBQUNBOzs7O0FBaEJBO0FBQUE7QUFDQTtBQXNCQTtBQUNBOzs7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFiQTtBQUNBO0FBRkE7O0FBcUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQVBBOzs7O0FBV0E7O0FBRUE7QUFDQTs7OztBQUdBO0FBQ0E7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTs7OztBQTVDQTtBQTFjQTtBQUNBO0FBZ2dCQTs7O0FBQ0E7QUFEQTtBQUNBOzs7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUhBO0FBQUE7QUFDQTtBQUZBOztBQVdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7Ozs7QUFNQTtBQUNBO0FBQ0E7Ozs7QUF0QkE7QUFBQTtBQUNBO0FBeUJBOzs7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUhBO0FBREE7QUFGQTtBQUFBO0FBQ0E7QUFGQTs7QUE0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFEQTs7OztBQU1BO0FBQ0E7QUFDQTs7OztBQXhCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBOzs7O0FBakJBO0FBQUE7QUFDQTtBQTBDQTtBQUNBOzs7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUpBO0FBQ0E7QUFZQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUF4QkE7QUFDQTtBQTZCQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUpBO0FBSEE7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUZBO0FBYkE7QUFsRUE7QUFDQTtBQUZBOztBQXVGQTtBQUNBOzs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQS9GQTtBQXRrQkE7QUFDQTtBQXdxQkE7QUFDQTs7O0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSEE7QUFDQTtBQU9BO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSEE7QUFDQTtBQU9B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