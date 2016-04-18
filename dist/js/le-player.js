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
					key: 'currentTime',
					get: function get() {
						return this._video.currentTime;
					}
				}, {
					key: 'duration',
					get: function get() {
						return this._video.duration;
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
							this.value = Cookie.get('volume', 0.4);
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
						if (value < 0.05) {
							video.muted = true;
							icon.addClass('fa fa-volume-off');
						} else {
							video.muted = false;
							video.volume = value;
							if (value < 0.5) icon.addClass('fa fa-volume-down');else icon.addClass('fa fa-volume-up');
							Cookie.set('volume', value);
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
						this.volume = Cookie.get('volume', 0.4);
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
					}
				}]);

				return Controls;
			}();

			var sources = [];
			var subtitles = [];
			var volume = 0.5;
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
						togglePlay();
					}
				}).click(function () {
					togglePlay();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGUtcGxheWVyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIDk0MDQ5MmQ5OWJkNzNmYjJhNzgzIiwid2VicGFjazovLy9zb3VyY2UvanMvbGUtcGxheWVyLmVzNi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDk0MDQ5MmQ5OWJkNzNmYjJhNzgzXG4gKiovIiwiKGZ1bmN0aW9uICgkKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHRsZXQgUGxheWVyID0gZnVuY3Rpb24gKGVsZW1lbnQsIG9wdHMpIHtcblx0XHRjb25zdCBDX0JBQ0tXQVJEID0gJ2JhY2t3YXJkJztcblx0XHRjb25zdCBDX0RJVklERVIgPSAnZGl2aWRlcic7XG5cdFx0Y29uc3QgQ19ET1dOTE9BRCA9ICdkb3dubG9hZCc7XG5cdFx0Y29uc3QgQ19GT1JXQVJEID0gJ2ZvcndhcmQnO1xuXHRcdGNvbnN0IENfRlVMTFNDUkVFTiA9ICdmdWxsc2NyZWVuJztcblx0XHRjb25zdCBDX1BMQVkgPSAncGxheSc7XG5cdFx0Y29uc3QgQ19SQVRFID0gJ3JhdGUnO1xuXHRcdGNvbnN0IENfU09VUkNFID0gJ3NvdXJjZSc7XG5cdFx0Y29uc3QgQ19TVUJUSVRMRSA9ICdzdWJ0aXRsZSc7XG5cdFx0Y29uc3QgQ19USU1FTElORSA9ICd0aW1lbGluZSc7XG5cdFx0Y29uc3QgQ19WT0xVTUUgPSAndm9sdW1lJztcblxuXHRcdHZhciBvcHRpb25zID0gJC5leHRlbmQodHJ1ZSwge1xuXHRcdFx0YXV0b3BsYXkgOiBmYWxzZSxcblx0XHRcdGhlaWdodCA6ICdhdXRvJyxcblx0XHRcdGxvb3AgOiBmYWxzZSxcblx0XHRcdG11dGVkIDogZmFsc2UsXG5cdFx0XHRwcmVsb2FkIDogJ21ldGFkYXRhJyxcblx0XHRcdHBvc3RlciA6IG51bGwsXG5cdFx0XHR3aWR0aCA6ICdhdXRvJyxcblx0XHRcdHJhdGUgOiB7XG5cdFx0XHRcdHN0ZXAgOiAwLjI1LFxuXHRcdFx0XHRtaW4gOiAwLjUsXG5cdFx0XHRcdG1heCA6IDQuMFxuXHRcdFx0fSxcblx0XHRcdHBsYXliYWNrIDoge1xuXHRcdFx0XHRzdGVwIDoge1xuXHRcdFx0XHRcdHNob3J0IDogNSxcblx0XHRcdFx0XHRtZWRpdW0gOiAzMCxcblx0XHRcdFx0XHRsb25nIDogNjBcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdHZvbHVtZSA6IHtcblx0XHRcdFx0c3RlcCA6IDAuMVxuXHRcdFx0fSxcblx0XHRcdGNvbnRyb2xzIDoge1xuXHRcdFx0XHRjb21tb24gOiBbXG5cdFx0XHRcdFx0WyAncGxheScsICd2b2x1bWUnLCAnZGl2aWRlcicsICd0aW1lbGluZScsICdkaXZpZGVyJywgJ2Z1bGxzY3JlZW4nIF0sXG5cdFx0XHRcdFx0WyAncmF0ZScsICdkaXZpZGVyJywgJ2JhY2t3YXJkJywgJ2RpdmlkZXInLCAnc291cmNlJywgJ2RpdmlkZXInLCAnc3VidGl0bGUnLCAnZGl2aWRlcicsICdkb3dubG9hZCcgXVxuXHRcdFx0XHRdLFxuXHRcdFx0XHRmdWxsc2NyZWVuIDogW1xuXHRcdFx0XHRcdFsgJ3BsYXknLCAndm9sdW1lJywgJ2RpdmlkZXInLCAndGltZWxpbmUnLCAnZGl2aWRlcicsICdyYXRlJywgJ2RpdmlkZXInLCAnYmFja3dhcmQnLCAnZGl2aWRlcicsICdzb3VyY2UnLCAnZGl2aWRlcicsICdzdWJ0aXRsZScsICdkaXZpZGVyJywgJ2Rvd25sb2FkJywgJ2RpdmlkZXInLCAnZnVsbHNjcmVlbicgXVxuXHRcdFx0XHRdXG5cdFx0XHR9XG5cdFx0fSwgb3B0cyk7XG5cblx0XHQvKipcblx0XHQgKiBUaGlzIGNsYXNzIG1hbmFnZXMgRnVsbFNjcmVlbiBBUEkuXG5cdFx0ICogQFRPRE86IGFkZCBmdWxsc2NyZWVuZXJyb3IgaGFuZGxlci5cblx0XHQgKi9cblx0XHRjbGFzcyBGdWxsc2NyZWVuIHtcblx0XHRcdC8qKlxuXHRcdFx0ICogQHJldHVybnMge2Jvb2xlYW59IFdoZXRoZXIgYnJvd3NlciBzdXBwb3J0cyBmdWxsc2NyZWVuIG1vZGUuXG5cdFx0XHQgKi9cblx0XHRcdHN0YXRpYyBlbmFibGVkICgpIHtcblx0XHRcdFx0cmV0dXJuICEhKGRvY3VtZW50LmZ1bGxzY3JlZW5FbmFibGVkIHx8IGRvY3VtZW50Lm1vekZ1bGxTY3JlZW5FbmFibGVkIHx8IGRvY3VtZW50Lm1zRnVsbHNjcmVlbkVuYWJsZWQgfHwgZG9jdW1lbnQud2Via2l0U3VwcG9ydHNGdWxsc2NyZWVuIHx8IGRvY3VtZW50LndlYmtpdEZ1bGxzY3JlZW5FbmFibGVkIHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJykud2Via2l0UmVxdWVzdEZ1bGxTY3JlZW4pO1xuXHRcdFx0fVxuXG5cdFx0XHRzdGF0aWMgaGlkZUVsZW1lbnRzICgpIHtcblx0XHRcdFx0Y29udGFpbmVyLnJlbW92ZUNsYXNzKCdmdWxsc2NyZWVuJyk7XG5cdFx0XHRcdGNvbnRyb2xzLmZ1bGxzY3JlZW4uaGlkZSgpO1xuXHRcdFx0XHRjb250cm9scy5jb21tb24uc2hvdygpO1xuXHRcdFx0XHRjb250cm9scy5taW5pLmhpZGUoKTtcblx0XHRcdH1cblxuXHRcdFx0c3RhdGljIGluaXQgKCkge1xuXHRcdFx0XHRpZiAodGhpcy5lbmFibGVkKCkpIHtcblx0XHRcdFx0XHQvLyBGdWxsc2NyZWVuIGNoYW5nZSBoYW5kbGVycy5cblx0XHRcdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdmdWxsc2NyZWVuY2hhbmdlJywgZnVuY3Rpb24gKGUpIHtcblx0XHRcdFx0XHRcdEZ1bGxzY3JlZW4udG9nZ2xlRWxlbWVudHMoISEoZG9jdW1lbnQuZnVsbFNjcmVlbiB8fCBkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCkpO1xuXHRcdFx0XHRcdH0sIGZhbHNlKTtcblx0XHRcdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd3ZWJraXRmdWxsc2NyZWVuY2hhbmdlJywgZnVuY3Rpb24gKGUpIHtcblx0XHRcdFx0XHRcdEZ1bGxzY3JlZW4udG9nZ2xlRWxlbWVudHMoISFkb2N1bWVudC53ZWJraXRJc0Z1bGxTY3JlZW4pO1xuXHRcdFx0XHRcdH0sIGZhbHNlKTtcblx0XHRcdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3pmdWxsc2NyZWVuY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0RnVsbHNjcmVlbi50b2dnbGVFbGVtZW50cyghIWRvY3VtZW50Lm1vekZ1bGxTY3JlZW4pO1xuXHRcdFx0XHRcdH0sIGZhbHNlKTtcblx0XHRcdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtc2Z1bGxzY3JlZW5jaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRGdWxsc2NyZWVuLnRvZ2dsZUVsZW1lbnRzKCEhZG9jdW1lbnQubXNGdWxsc2NyZWVuRWxlbWVudCk7XG5cdFx0XHRcdFx0fSwgZmFsc2UpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8qKlxuXHRcdFx0ICogQHJldHVybnMge2Jvb2xlYW59IFdoZXRoZXIgYnJvd3NlciBpcyBpbiBmdWxsc2NyZWVuIG1vZGUuXG5cdFx0XHQgKi9cblx0XHRcdHN0YXRpYyBpcyAoKSB7XG5cdFx0XHRcdHJldHVybiAhIShkb2N1bWVudC5mdWxsU2NyZWVuIHx8IGRvY3VtZW50LndlYmtpdElzRnVsbFNjcmVlbiB8fCBkb2N1bWVudC5tb3pGdWxsU2NyZWVuIHx8IGRvY3VtZW50Lm1zRnVsbHNjcmVlbkVsZW1lbnQgfHwgZG9jdW1lbnQuZnVsbHNjcmVlbkVsZW1lbnQpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdGF0aWMgc2hvd0VsZW1lbnRzICgpIHtcblx0XHRcdFx0Y29udGFpbmVyLmFkZENsYXNzKCdmdWxsc2NyZWVuJyk7XG5cdFx0XHRcdGNvbnRyb2xzLmZ1bGxzY3JlZW4uc2hvdygpO1xuXHRcdFx0XHRjb250cm9scy5jb21tb24uaGlkZSgpO1xuXHRcdFx0XHRjb250cm9scy5taW5pLmhpZGUoKTtcblx0XHRcdH1cblxuXHRcdFx0c3RhdGljIHRvZ2dsZSAoKSB7XG5cdFx0XHRcdGlmICh0aGlzLmlzKCkpIHtcblx0XHRcdFx0XHRpZiAoZG9jdW1lbnQuZXhpdEZ1bGxzY3JlZW4pICAgICAgICAgICAgICAgIGRvY3VtZW50LmV4aXRGdWxsc2NyZWVuKCk7XG5cdFx0XHRcdFx0ZWxzZSBpZiAoZG9jdW1lbnQubW96Q2FuY2VsRnVsbFNjcmVlbikgICAgICBkb2N1bWVudC5tb3pDYW5jZWxGdWxsU2NyZWVuKCk7XG5cdFx0XHRcdFx0ZWxzZSBpZiAoZG9jdW1lbnQud2Via2l0Q2FuY2VsRnVsbFNjcmVlbikgICBkb2N1bWVudC53ZWJraXRDYW5jZWxGdWxsU2NyZWVuKCk7XG5cdFx0XHRcdFx0ZWxzZSBpZiAoZG9jdW1lbnQubXNFeGl0RnVsbHNjcmVlbikgICAgICAgICBkb2N1bWVudC5tc0V4aXRGdWxsc2NyZWVuKCk7XG5cdFx0XHRcdFx0dGhpcy5oaWRlRWxlbWVudHMoKTsgLy8gQFRPRE86IG1ha2UgdGhpcyBvbmx5IGlmIGZ1bGxzY3JlZW4gZmlyZWQuXG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0bGV0IGNvbnRhaW5lckVsID0gY29udGFpbmVyWyAwIF07XG5cdFx0XHRcdFx0aWYgKGNvbnRhaW5lckVsLnJlcXVlc3RGdWxsU2NyZWVuKSAgICAgICAgICAgIGNvbnRhaW5lckVsLnJlcXVlc3RGdWxsU2NyZWVuKCk7XG5cdFx0XHRcdFx0ZWxzZSBpZiAoY29udGFpbmVyRWwud2Via2l0UmVxdWVzdEZ1bGxTY3JlZW4pIGNvbnRhaW5lckVsLndlYmtpdFJlcXVlc3RGdWxsU2NyZWVuKCk7XG5cdFx0XHRcdFx0ZWxzZSBpZiAoY29udGFpbmVyRWwubW96UmVxdWVzdEZ1bGxTY3JlZW4pICAgIGNvbnRhaW5lckVsLm1velJlcXVlc3RGdWxsU2NyZWVuKCk7XG5cdFx0XHRcdFx0ZWxzZSBpZiAoY29udGFpbmVyRWwubXNFeGl0RnVsbHNjcmVlbikgICAgICAgIGNvbnRhaW5lckVsLm1zUmVxdWVzdEZ1bGxzY3JlZW4oKTtcblx0XHRcdFx0XHR0aGlzLnNob3dFbGVtZW50cygpOyAvLyBAVE9ETzogbWFrZSB0aGlzIG9ubHkgaWYgZnVsbHNjcmVlbiBmaXJlZC5cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvKipcblx0XHRcdCAqIFVwZGF0ZSBET00gc3RydWN0dXJlIGFjY29yZGluZyB0byBjdXJyZW50IHN0YXRlLlxuXHRcdFx0ICovXG5cdFx0XHRzdGF0aWMgdG9nZ2xlRWxlbWVudHMgKHNob3cpIHtcblx0XHRcdFx0aWYgKCEhc2hvdykge1xuXHRcdFx0XHRcdHRoaXMuc2hvd0VsZW1lbnRzKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5oaWRlRWxlbWVudHMoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGNsYXNzIFZpZGVvIHtcblx0XHRcdGNvbnN0cnVjdG9yIChjdHgpIHtcblx0XHRcdFx0dGhpcy5fY3R4ID0gY3R4O1xuXHRcdFx0XHR0aGlzLl92aWRlbyA9IGN0eFsgMCBdO1xuXHRcdFx0XHQvLyB0aGlzLmZ1bGxzY3JlZW4gPSBuZXcgRnVsbHNjcmVlbigpO1xuXHRcdFx0XHR0aGlzLnN1YnRpdGxlcyA9IFtdO1xuXHRcdFx0XHR0aGlzLnBsYXliYWNrUmF0ZSA9IHRoaXMuX3ZpZGVvLnBsYXliYWNrUmF0ZTtcblx0XHRcdH1cblxuXHRcdFx0Z2V0IGN1cnJlbnRUaW1lICgpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuX3ZpZGVvLmN1cnJlbnRUaW1lO1xuXHRcdFx0fVxuXG5cdFx0XHRnZXQgZHVyYXRpb24gKCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5fdmlkZW8uZHVyYXRpb247XG5cdFx0XHR9XG5cblx0XHRcdGRlY3JlYXNlUmF0ZSAoc3RlcCwgbWluKSB7XG5cdFx0XHRcdGlmICh0aGlzLl92aWRlby5wbGF5YmFja1JhdGUgPiBtaW4pIHtcblx0XHRcdFx0XHR0aGlzLl92aWRlby5wbGF5YmFja1JhdGUgLT0gc3RlcDtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5fdmlkZW8ucGxheWJhY2tSYXRlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXG5cdFx0XHRpbmNyZWFzZVJhdGUgKHN0ZXAsIG1heCkge1xuXHRcdFx0XHRpZiAodGhpcy5fdmlkZW8ucGxheWJhY2tSYXRlIDwgbWF4KSB7XG5cdFx0XHRcdFx0dGhpcy5fdmlkZW8ucGxheWJhY2tSYXRlICs9IHN0ZXA7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuX3ZpZGVvLnBsYXliYWNrUmF0ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblxuXHRcdFx0aW5pdCAoKSB7XG5cdFx0XHRcdHRoaXMuX2luaXRTdWJ0aXRsZXMoKTtcblx0XHRcdFx0dGhpcy5faW5pdFZpZGVvKCk7XG5cdFx0XHR9XG5cblx0XHRcdHRvZ2dsZVBsYXkgKCkge1xuXHRcdFx0XHRpZiAoIXRoaXMuX3ZpZGVvLnBsYXllZCB8fCB0aGlzLl92aWRlby5wYXVzZWQpIHtcblx0XHRcdFx0XHRvdmVybGF5LmhpZGUoKTtcblx0XHRcdFx0XHR0aGlzLnBsYXkoKTtcblx0XHRcdFx0XHRjb250cm9scy5wbGF5KCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0b3ZlcmxheS5zaG93KCk7XG5cdFx0XHRcdFx0dGhpcy5wYXVzZSgpO1xuXHRcdFx0XHRcdGNvbnRyb2xzLnBhdXNlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0X2luaXRTdWJ0aXRsZXMgKCkge1xuXHRcdFx0XHRsZXQgX3NlbGYgPSB0aGlzO1xuXHRcdFx0XHR0aGlzLl9jdHguY2hpbGRyZW4oJ3RyYWNrW2tpbmQ9XCJzdWJ0aXRsZXNcIl0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHR2YXIgbGFuZ3VhZ2UgPSAkKHRoaXMpLmF0dHIoJ3NyY2xhbmcnKTtcblx0XHRcdFx0XHR2YXIgdGl0bGUgPSAkKHRoaXMpLmF0dHIoJ2xhYmVsJyk7XG5cdFx0XHRcdFx0dmFyIHNyYyA9ICQodGhpcykuYXR0cignc3JjJyk7XG5cdFx0XHRcdFx0aWYgKHRpdGxlLmxlbmd0aCA+IDAgJiYgc3JjLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRcdF9zZWxmLnN1YnRpdGxlcy5wdXNoKHtcblx0XHRcdFx0XHRcdFx0dGl0bGUgOiB0aXRsZSxcblx0XHRcdFx0XHRcdFx0c3JjIDogc3JjLFxuXHRcdFx0XHRcdFx0XHRsYW5ndWFnZSA6IGxhbmd1YWdlXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHRfaW5pdFZpZGVvICgpIHtcblx0XHRcdFx0aWYgKHRoaXMuX3ZpZGVvLnJlYWR5U3RhdGUgPiBIVE1MTWVkaWFFbGVtZW50LkhBVkVfTk9USElORykge1xuXHRcdFx0XHRcdHRoaXMuX2luaXRWaWRlb0V2ZW50KCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5fdmlkZW8ub25sb2FkZWRtZXRhZGF0YSA9ICgpID0+IHtcblx0XHRcdFx0XHRcdHRoaXMuX2luaXRWaWRlb0V2ZW50KCk7XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRfaW5pdFZpZGVvRXZlbnQgKCkge1xuXHRcdFx0XHRsZXQgX3NlbGYgPSB0aGlzO1xuXG5cdFx0XHRcdG92ZXJsYXkuY3NzKCdsaW5lLWhlaWdodCcsIHRoaXMuX3ZpZGVvLmNsaWVudEhlaWdodCArICdweCcpO1xuXHRcdFx0XHRjb250YWluZXIuY3NzKCd3aWR0aCcsIHRoaXMuX3ZpZGVvLmNsaWVudFdpZHRoICsgJ3B4Jyk7XG5cblx0XHRcdFx0dGhpcy5fdmlkZW8ub250aW1ldXBkYXRlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdGNvbnRyb2xzLm1vdmVUaW1lTWFya2VyKCk7XG5cdFx0XHRcdH07XG5cblx0XHRcdFx0Ly8gVGhpcyBpcyBnZW5lcmFsbHkgZm9yIEZpcmVmb3ggb25seVxuXHRcdFx0XHQvLyBiZWNhdXNlIGl0IHNvbWVob3cgcmVzZXRzIHRyYWNrIGxpc3Rcblx0XHRcdFx0Ly8gZm9yIHZpZGVvIGVsZW1lbnQgYWZ0ZXIgRE9NIG1hbmlwdWxhdGlvbi5cblxuXHRcdFx0XHRpZiAodGhpcy5fdmlkZW8udGV4dFRyYWNrcy5sZW5ndGggPT0gMCAmJiB0aGlzLnN1YnRpdGxlcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0dGhpcy5fY3R4LmNoaWxkcmVuKCd0cmFja1traW5kPVwic3VidGl0bGVzXCJdJykucmVtb3ZlKCk7XG5cdFx0XHRcdFx0Zm9yICh2YXIgaSBpbiB0aGlzLnN1YnRpdGxlcykge1xuXHRcdFx0XHRcdFx0aWYgKHRoaXMuc3VidGl0bGVzLmhhc093blByb3BlcnR5KGkpKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMuX2N0eFxuXHRcdFx0XHRcdFx0XHRcdC5hcHBlbmQoJCgnPHRyYWNrLz4nKVxuXHRcdFx0XHRcdFx0XHRcdFx0LmF0dHIoJ2xhYmVsJywgdGhpcy5zdWJ0aXRsZXNbIGkgXS50aXRsZSlcblx0XHRcdFx0XHRcdFx0XHRcdC5hdHRyKCdzcmMnLCB0aGlzLnN1YnRpdGxlc1sgaSBdLnNyYylcblx0XHRcdFx0XHRcdFx0XHRcdC5hdHRyKCdzcmNsYW5nJywgdGhpcy5zdWJ0aXRsZXNbIGkgXS5sYW5ndWFnZSlcblx0XHRcdFx0XHRcdFx0XHRcdC5hdHRyKCdpZCcsIHRoaXMuc3VidGl0bGVzWyBpIF0ubGFuZ3VhZ2UpXG5cdFx0XHRcdFx0XHRcdFx0XHQuYXR0cigna2luZCcsICdzdWJ0aXRsZXMnKSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0RnVsbHNjcmVlbi5pbml0KCk7XG5cdFx0XHRcdGNvbnRyb2xzLmluaXQoKTtcblx0XHRcdH1cblxuXHRcdFx0c2VlayAodGltZSkge1xuXHRcdFx0XHR0aGlzLl92aWRlby5jdXJyZW50VGltZSA9IHRpbWVcblx0XHRcdH1cblxuXHRcdFx0cGxheSAoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLl92aWRlby5wbGF5KClcblx0XHRcdH1cblxuXHRcdFx0cGF1c2UgKCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5fdmlkZW8ucGF1c2UoKVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGNsYXNzIENvbnRyb2wge1xuXHRcdFx0Y29uc3RydWN0b3IgKGNzc0NsYXNzLCBpY29uQ2xhc3MpIHtcblx0XHRcdFx0dGhpcy5lbGVtZW50ID0gJCgnPGRpdiAvPicpXG5cdFx0XHRcdFx0LmFkZENsYXNzKCdjb250cm9sICcgKyBjc3NDbGFzcylcblx0XHRcdFx0XHQuYXBwZW5kKCQoJzxpIC8+Jylcblx0XHRcdFx0XHRcdC5hZGRDbGFzcygnZmEgZmEtJyArIGljb25DbGFzcykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdGF0aWMgZGl2aWRlciAoKSB7XG5cdFx0XHRcdHJldHVybiAkKCc8ZGl2IC8+JykuYWRkQ2xhc3MoJ2RpdmlkZXInKTtcblx0XHRcdH1cblxuXHRcdFx0c3RhdGljIGNyZWF0ZSAobmFtZSkge1xuXHRcdFx0XHRzd2l0Y2ggKG5hbWUpIHtcblx0XHRcdFx0XHRjYXNlIENfQkFDS1dBUkQ6XG5cdFx0XHRcdFx0XHRyZXR1cm4gbmV3IEJhY2t3YXJkQ29udHJvbCgpO1xuXG5cdFx0XHRcdFx0Y2FzZSBDX0RJVklERVI6XG5cdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5kaXZpZGVyKCk7XG5cblx0XHRcdFx0XHRjYXNlIENfRE9XTkxPQUQ6XG5cdFx0XHRcdFx0XHRyZXR1cm4gbmV3IERvd25sb2FkQ29udHJvbCgpO1xuXG5cdFx0XHRcdFx0Y2FzZSBDX0ZPUldBUkQ6XG5cdFx0XHRcdFx0XHRyZXR1cm4gbmV3IEZvcndhcmRDb250cm9sKCk7XG5cblx0XHRcdFx0XHRjYXNlIENfRlVMTFNDUkVFTjpcblx0XHRcdFx0XHRcdHJldHVybiBuZXcgRnVsbHNjcmVlbkNvbnRyb2woKTtcblxuXHRcdFx0XHRcdGNhc2UgQ19QTEFZOlxuXHRcdFx0XHRcdFx0cmV0dXJuIG5ldyBQbGF5Q29udHJvbCgpO1xuXG5cdFx0XHRcdFx0Y2FzZSBDX1JBVEU6XG5cdFx0XHRcdFx0XHRyZXR1cm4gbmV3IFJhdGVDb250cm9sKCk7XG5cblx0XHRcdFx0XHRjYXNlIENfU09VUkNFOlxuXHRcdFx0XHRcdFx0cmV0dXJuIG5ldyBTb3VyY2VDb250cm9sKCk7XG5cblx0XHRcdFx0XHRjYXNlIENfU1VCVElUTEU6XG5cdFx0XHRcdFx0XHRyZXR1cm4gbmV3IFN1YnRpdGxlQ29udHJvbCgpO1xuXG5cdFx0XHRcdFx0Y2FzZSBDX1RJTUVMSU5FOlxuXHRcdFx0XHRcdFx0cmV0dXJuIG5ldyBUaW1lbGluZUNvbnRyb2woKTtcblxuXHRcdFx0XHRcdGNhc2UgQ19WT0xVTUU6XG5cdFx0XHRcdFx0XHRyZXR1cm4gbmV3IFZvbHVtZUNvbnRyb2woKTtcblxuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGNsYXNzIENvbnRyb2xUZXh0IHtcblx0XHRcdGNvbnN0cnVjdG9yIChjbGFzc25hbWUpIHtcblx0XHRcdFx0dGhpcy5lbGVtZW50ID0gJCgnPGRpdiAvPicpLmFkZENsYXNzKCdjb250cm9sLXRleHQgJyArIGNsYXNzbmFtZSk7XG5cdFx0XHR9XG5cblx0XHRcdHNldCB0ZXh0ICh2YWx1ZSkge1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQuaHRtbCh2YWx1ZSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y2xhc3MgQ29udHJvbENvbnRhaW5lciB7XG5cdFx0XHRjb25zdHJ1Y3RvciAoaWNvbkNsYXNzKSB7XG5cdFx0XHRcdGxldCBfc2VsZiA9IHRoaXM7XG5cdFx0XHRcdHRoaXMuaWNvbkNsYXNzID0gaWNvbkNsYXNzO1xuXHRcdFx0XHR0aGlzLmljb24gPSAkKCc8ZGl2IC8+Jylcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2NvbnRyb2wtaWNvbicpXG5cdFx0XHRcdFx0LmFwcGVuZCgkKCc8aSAvPicpXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2ZhIGZhLScgKyBpY29uQ2xhc3MpKTtcblx0XHRcdFx0dGhpcy5saXN0RWxlbWVudCA9ICQoJzxkaXYvPicpLmFkZENsYXNzKCdjb250cm9sLWlubmVyJyk7XG5cdFx0XHRcdHRoaXMuZWxlbWVudCA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0XHRcdC5hZGRDbGFzcygnY29udHJvbCBjb250cm9sLWNvbnRhaW5lcicpXG5cdFx0XHRcdFx0LmFwcGVuZCh0aGlzLmljb24pXG5cdFx0XHRcdFx0LmFwcGVuZCh0aGlzLmxpc3RFbGVtZW50KTtcblx0XHRcdFx0dGhpcy5faW5kZXggPSAwO1xuXHRcdFx0XHR0aGlzLmxpc3QgPSBbXTtcblx0XHRcdFx0dGhpcy5pY29uLmNsaWNrKGZ1bmN0aW9uICgpIHsgX3NlbGYub25Db250YWluZXJDbGljaygpOyB9KTtcblx0XHRcdH1cblxuXHRcdFx0Z2V0IGFjdGl2ZSAoKSB7XG5cdFx0XHRcdGZvciAobGV0IGkgaW4gdGhpcy5saXN0KVxuXHRcdFx0XHRcdGlmICh0aGlzLmxpc3RbIGkgXS5oYXNDbGFzcygnYWN0aXZlJykpXG5cdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5saXN0WyBpIF07XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXG5cdFx0XHRzZXQgYWN0aXZlIChpbmRleCkge1xuXHRcdFx0XHRsZXQgaGFzQWN0aXZlID0gZmFsc2U7XG5cdFx0XHRcdGZvciAobGV0IGkgaW4gdGhpcy5saXN0KSB7XG5cdFx0XHRcdFx0aWYgKHRoaXMubGlzdFsgaSBdLmRhdGEoJ2luZGV4JykgPT0gaW5kZXgpIHtcblx0XHRcdFx0XHRcdHRoaXMubGlzdFsgaSBdLmFkZENsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0XHRcdHRoaXMuaWNvbi5odG1sKHRoaXMubGlzdFsgaSBdLmh0bWwoKSk7XG5cdFx0XHRcdFx0XHRoYXNBY3RpdmUgPSB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHR0aGlzLmxpc3RbIGkgXS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCFoYXNBY3RpdmUpXG5cdFx0XHRcdFx0dGhpcy5pY29uLmh0bWwoJCgnPGkgLz4nKS5hZGRDbGFzcygnZmEgZmEtJyArIHRoaXMuaWNvbkNsYXNzKSk7XG5cdFx0XHR9XG5cblx0XHRcdGFkZEl0ZW0gKHRleHQsIGRhdGEpIHtcblx0XHRcdFx0bGV0IF9zZWxmID0gdGhpcztcblx0XHRcdFx0dmFyIGl0ZW0gPSAkKCc8ZGl2IC8+JykuYWRkQ2xhc3MoJ2lubmVyLWl0ZW0nKS5kYXRhKCdpbmRleCcsIHRoaXMuX2luZGV4KS5odG1sKHRleHQpLmNsaWNrKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRfc2VsZi5vbkl0ZW1DbGljaygkKHRoaXMpLmRhdGEoJ2luZGV4JykpO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0aWYgKHR5cGVvZiBkYXRhID09ICdvYmplY3QnKSB7XG5cdFx0XHRcdFx0Zm9yIChsZXQgayBpbiBkYXRhKVxuXHRcdFx0XHRcdFx0aXRlbS5kYXRhKGssIGRhdGFbIGsgXSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5faW5kZXgrKztcblx0XHRcdFx0dGhpcy5saXN0LnB1c2goaXRlbSk7XG5cdFx0XHRcdHRoaXMubGlzdEVsZW1lbnQuYXBwZW5kKGl0ZW0pO1xuXG5cdFx0XHRcdHJldHVybiBpdGVtO1xuXHRcdFx0fVxuXG5cdFx0XHRnZXRCeUluZGV4IChpbmRleCkge1xuXHRcdFx0XHRmb3IgKGxldCBpIGluIHRoaXMubGlzdClcblx0XHRcdFx0XHRpZiAodGhpcy5saXN0WyBpIF0uZGF0YSgnaW5kZXgnKSA9PSBpbmRleClcblx0XHRcdFx0XHRcdHJldHVybiB0aGlzLmxpc3RbIGkgXTtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cblx0XHRcdG9uQ29udGFpbmVyQ2xpY2sgKCkge1xuXHRcdFx0fVxuXG5cdFx0XHRvbkl0ZW1DbGljayAoaW5kZXgpIHtcblx0XHRcdFx0dGhpcy5hY3RpdmUgPSBpbmRleDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRjbGFzcyBCYWNrd2FyZENvbnRyb2wgZXh0ZW5kcyBDb250cm9sIHtcblx0XHRcdGNvbnN0cnVjdG9yICgpIHtcblx0XHRcdFx0c3VwZXIoJ2JhY2t3YXJkJywgJ3VuZG8nKTtcblx0XHRcdFx0dGhpcy5lbGVtZW50LmNsaWNrKGUgPT4ge1xuXHRcdFx0XHRcdGlmICh2aWRlby5jdXJyZW50VGltZSAtIG9wdGlvbnMucGxheWJhY2suc3RlcC5tZWRpdW0gPiAwKVxuXHRcdFx0XHRcdFx0dmlkZW8uc2Vlayh2aWRlby5jdXJyZW50VGltZSAtIG9wdGlvbnMucGxheWJhY2suc3RlcC5tZWRpdW0pO1xuXHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdHZpZGVvLnNlZWsoMCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGNsYXNzIERvd25sb2FkQ29udHJvbCBleHRlbmRzIENvbnRyb2wge1xuXHRcdFx0Y29uc3RydWN0b3IgKCkge1xuXHRcdFx0XHRzdXBlcignJywgJycpO1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQgPSAkKCc8YSAvPicpLmF0dHIoJ2hyZWYnLCAnJykuYXR0cigndGFyZ2V0JywgJ19ibGFuaycpLmF0dHIoJ2Rvd25sb2FkJywgJycpLmFkZENsYXNzKCdjb250cm9sIGRvd25sb2FkJykuYXBwZW5kKCQoJzxpIC8+JykuYWRkQ2xhc3MoJ2ZhIGZhLWRvd25sb2FkJykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzZXQgbGluayAodmFsdWUpIHtcblx0XHRcdFx0dGhpcy5lbGVtZW50LmF0dHIoJ2hyZWYnLCB2YWx1ZSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y2xhc3MgRm9yd2FyZENvbnRyb2wgZXh0ZW5kcyBDb250cm9sIHtcblx0XHRcdGNvbnN0cnVjdG9yICgpIHtcblx0XHRcdFx0c3VwZXIoJ2ZvcndhcmQnLCAncmVkbycpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGNsYXNzIEZ1bGxzY3JlZW5Db250cm9sIGV4dGVuZHMgQ29udHJvbCB7XG5cdFx0XHRjb25zdHJ1Y3RvciAoKSB7XG5cdFx0XHRcdHN1cGVyKCdmdWxsc2NyZWVuJywgJ2Fycm93cy1hbHQnKTtcblx0XHRcdFx0dGhpcy5lbGVtZW50LmNsaWNrKGUgPT4ge1xuXHRcdFx0XHRcdEZ1bGxzY3JlZW4udG9nZ2xlKCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGNsYXNzIFBsYXlDb250cm9sIGV4dGVuZHMgQ29udHJvbCB7XG5cdFx0XHRjb25zdHJ1Y3RvciAoKSB7XG5cdFx0XHRcdHN1cGVyKCdwbGF5JywgJ3BsYXknKTtcblx0XHRcdFx0dGhpcy5lbGVtZW50LmNsaWNrKGUgPT4ge1xuXHRcdFx0XHRcdHZpZGVvLnRvZ2dsZVBsYXkoKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHRcdHBhdXNlICgpIHtcblx0XHRcdFx0dGhpcy5lbGVtZW50XG5cdFx0XHRcdFx0LmNoaWxkcmVuKCcuZmEnKVxuXHRcdFx0XHRcdC5yZW1vdmVDbGFzcygnZmEtcGF1c2UnKVxuXHRcdFx0XHRcdC5hZGRDbGFzcygnZmEtcGxheScpO1xuXHRcdFx0fVxuXG5cdFx0XHRwbGF5ICgpIHtcblx0XHRcdFx0dGhpcy5lbGVtZW50XG5cdFx0XHRcdFx0LmNoaWxkcmVuKCcuZmEnKVxuXHRcdFx0XHRcdC5yZW1vdmVDbGFzcygnZmEtcGxheScpXG5cdFx0XHRcdFx0LmFkZENsYXNzKCdmYS1wYXVzZScpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGNsYXNzIFJhdGVDb250cm9sIHtcblx0XHRcdGNvbnN0cnVjdG9yICgpIHtcblx0XHRcdFx0dGhpcy5kb3duID0gbmV3IENvbnRyb2woJ3JhdGUtZG93bicsICdiYWNrd2FyZCcpO1xuXHRcdFx0XHR0aGlzLnVwID0gbmV3IENvbnRyb2woJ3JhdGUtdXAnLCAnZm9yd2FyZCcpO1xuXHRcdFx0XHR0aGlzLmN1cnJlbnQgPSBuZXcgQ29udHJvbFRleHQoJ3JhdGUtY3VycmVudCcpO1xuXG5cdFx0XHRcdHRoaXMuZG93bi5lbGVtZW50LmNsaWNrKGUgPT4ge1xuXHRcdFx0XHRcdHRoaXMuZGVjcmVhc2UoKTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0dGhpcy51cC5lbGVtZW50LmNsaWNrKGUgPT4ge1xuXHRcdFx0XHRcdHRoaXMuaW5jcmVhc2UoKTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0dGhpcy5lbGVtZW50ID0gJCgnPGRpdiAvPicpXG5cdFx0XHRcdFx0LmFkZENsYXNzKCdjb250cm9sLWNvbnRhaW5lcicpXG5cdFx0XHRcdFx0LmFwcGVuZCh0aGlzLmRvd24uZWxlbWVudClcblx0XHRcdFx0XHQuYXBwZW5kKHRoaXMuY3VycmVudC5lbGVtZW50KVxuXHRcdFx0XHRcdC5hcHBlbmQodGhpcy51cC5lbGVtZW50KTtcblx0XHRcdH1cblxuXHRcdFx0ZGVjcmVhc2UgKCkge1xuXHRcdFx0XHRpZiAodmlkZW8ucGxheWJhY2tSYXRlID4gb3B0aW9ucy5yYXRlLm1pbikge1xuXHRcdFx0XHRcdHZpZGVvLmRlY3JlYXNlUmF0ZShvcHRpb25zLnJhdGUubWluKTtcblxuXHRcdFx0XHRcdHRoaXMudXAuZWxlbWVudC5yZW1vdmVDbGFzcygnZGlzYWJsZWQnKTtcblx0XHRcdFx0XHRDb29raWUuc2V0KCdyYXRlJywgdmlkZW8ucGxheWJhY2tSYXRlKTtcblx0XHRcdFx0XHR0aGlzLnNob3coKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLmRvd24uZWxlbWVudC5hZGRDbGFzcygnZGlzYWJsZWQnKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRsb2FkICgpIHtcblx0XHRcdFx0LyoqIFRPRE86IE1vdmUgd29yayB3aXRoIENvb2tpZSB0byB0aGUgVmlkZW8gY2xhc3MgKi9cblx0XHRcdFx0dmlkZW8ucGxheWJhY2tSYXRlID0gQ29va2llLmdldCgncmF0ZScsIDEpO1xuXHRcdFx0XHR0aGlzLnNob3coKTtcblx0XHRcdH1cblxuXHRcdFx0c2hvdyAoKSB7XG5cdFx0XHRcdHRoaXMuY3VycmVudC50ZXh0ID0gJ8OXJyArIHZpZGVvLnBsYXliYWNrUmF0ZS50b0ZpeGVkKDIpLnRvU3RyaW5nKCkucmVwbGFjZSgnLCcsICcuJyk7XG5cdFx0XHR9XG5cblx0XHRcdGluY3JlYXNlICgpIHtcblx0XHRcdFx0aWYgKHZpZGVvLnBsYXliYWNrUmF0ZSA8IG9wdGlvbnMucmF0ZS5tYXgpIHtcblx0XHRcdFx0XHR0aGlzLmRvd24uZWxlbWVudC5yZW1vdmVDbGFzcygnZGlzYWJsZWQnKTtcblx0XHRcdFx0XHR2aWRlby5wbGF5YmFja1JhdGUgKz0gb3B0aW9ucy5yYXRlLnN0ZXA7XG5cdFx0XHRcdFx0Q29va2llLnNldCgncmF0ZScsIHZpZGVvLnBsYXliYWNrUmF0ZSk7XG5cdFx0XHRcdFx0dGhpcy5zaG93KCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdHRoaXMudXAuZWxlbWVudC5hZGRDbGFzcygnZGlzYWJsZWQnKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRjbGFzcyBTb3VyY2VDb250cm9sIGV4dGVuZHMgQ29udHJvbENvbnRhaW5lciB7XG5cdFx0XHRjb25zdHJ1Y3RvciAoKSB7XG5cdFx0XHRcdHN1cGVyKCdidWxsc2V5ZScpO1xuXHRcdFx0XHQvKiogVE9ETzogTW92ZSBzb3VyY2VzIHRvIHRoZSBhcmd1bWVudHMgaW4gY29uc3Ryb3IgKi9cblx0XHRcdFx0aWYgKHNvdXJjZXMubGVuZ3RoID4gMSkge1xuXHRcdFx0XHRcdGZvciAodmFyIGkgaW4gc291cmNlcykge1xuXHRcdFx0XHRcdFx0dGhpcy5hZGRJdGVtKHNvdXJjZXNbIGkgXS50aXRsZSwgeyBzcmMgOiBzb3VyY2VzWyBpIF0uc3JjIH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRzZXQgKGluZGV4KSB7XG5cdFx0XHRcdC8qKiBUT0RPOiBFbWl0IGV2ZW50IG9uIHNldCBzb3VyY2UqL1xuXHRcdFx0XHRsZXQgcyA9IHRoaXMuZ2V0QnlJbmRleChpbmRleCk7XG5cdFx0XHRcdGlmIChzICE9IG51bGwpIHtcblx0XHRcdFx0XHRlbGVtZW50LmF0dHIoJ3NyYycsIHMuZGF0YSgnc3JjJykpO1xuXHRcdFx0XHRcdGNvbnRyb2xzLmRvd25sb2FkID0gcy5kYXRhKCdzcmMnKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRvbkl0ZW1DbGljayAoaW5kZXgpIHtcblx0XHRcdFx0c3VwZXIub25JdGVtQ2xpY2soaW5kZXgpO1xuXHRcdFx0XHR0aGlzLnNldChpbmRleCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y2xhc3MgU3VidGl0bGVDb250cm9sIGV4dGVuZHMgQ29udHJvbENvbnRhaW5lciB7XG5cdFx0XHRjb25zdHJ1Y3RvciAoKSB7XG5cdFx0XHRcdHN1cGVyKCdjb21tZW50aW5nLW8nKTtcblx0XHRcdFx0aWYgKHZpZGVvLnN1YnRpdGxlcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0Zm9yICh2YXIgaSBpbiB2aWRlby5zdWJ0aXRsZXMpIHtcblx0XHRcdFx0XHRcdGlmICghdmlkZW8uc3VidGl0bGVzLmhhc093blByb3BlcnR5KGkpKSBjb250aW51ZTtcblx0XHRcdFx0XHRcdGxldCBpdGVtID0gdmlkZW8uc3VidGl0bGVzWyBpIF07XG5cdFx0XHRcdFx0XHR0aGlzLmFkZEl0ZW0oaXRlbS50aXRsZSwge1xuXHRcdFx0XHRcdFx0XHRzcmMgOiBpdGVtLnNyYyxcblx0XHRcdFx0XHRcdFx0bGFuZ3VhZ2UgOiBpdGVtLmxhbmd1YWdlXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0c2V0IHRyYWNrIChpbmRleCkge1xuXHRcdFx0XHR2YXIgdCA9IHRoaXMuZ2V0QnlJbmRleChpbmRleCk7XG5cdFx0XHRcdGlmICh0ICE9IG51bGwgJiYgdmlkZW8udGV4dFRyYWNrcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0bGV0IGxhbmd1YWdlID0gdC5kYXRhKCdsYW5ndWFnZScpO1xuXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdmlkZW8udGV4dFRyYWNrcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdFx0aWYgKHZpZGVvLnRleHRUcmFja3NbIGkgXS5sYW5ndWFnZSA9PSBsYW5ndWFnZSlcblx0XHRcdFx0XHRcdFx0dmlkZW8udGV4dFRyYWNrc1sgaSBdLm1vZGUgPSAnc2hvd2luZyc7XG5cdFx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRcdHZpZGVvLnRleHRUcmFja3NbIGkgXS5tb2RlID0gJ2hpZGRlbic7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdG9uQ29udGFpbmVyQ2xpY2sgKCkge1xuXHRcdFx0XHRzdXBlci5vbkNvbnRhaW5lckNsaWNrKCk7XG5cdFx0XHRcdHN1cGVyLm9uSXRlbUNsaWNrKC0xKTtcblx0XHRcdFx0aWYgKHZpZGVvLnRleHRUcmFja3MubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdmlkZW8udGV4dFRyYWNrcy5sZW5ndGg7IGkrKylcblx0XHRcdFx0XHRcdHZpZGVvLnRleHRUcmFja3NbIGkgXS5tb2RlID0gJ2hpZGRlbic7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0b25JdGVtQ2xpY2sgKGluZGV4KSB7XG5cdFx0XHRcdHN1cGVyLm9uSXRlbUNsaWNrKGluZGV4KTtcblx0XHRcdFx0dGhpcy50cmFjayA9IGluZGV4O1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGNsYXNzIFRpbWVsaW5lQ29udHJvbCB7XG5cdFx0XHRjb25zdHJ1Y3RvciAoKSB7XG5cdFx0XHRcdGxldCBfc2VsZiA9IHRoaXMsXG5cdFx0XHRcdFx0ZHVyYXRpb24gPSB2aWRlby5kdXJhdGlvbjtcblxuXHRcdFx0XHR0aGlzLmRyYWcgPSBmYWxzZTtcblxuXHRcdFx0XHR0aGlzLmN1cnJlbnQgPSBuZXcgQ29udHJvbFRleHQoJ3RpbWUtY3VycmVudCcpO1xuXHRcdFx0XHR0aGlzLnRvdGFsID0gbmV3IENvbnRyb2xUZXh0KCd0aW1lLXRvdGFsJyk7XG5cblx0XHRcdFx0dGhpcy5tYXJrZXIgPSAkKCc8ZGl2IC8+JykuYWRkQ2xhc3MoJ3RpbWUtbWFya2VyJyk7XG5cblx0XHRcdFx0dGhpcy5tYXJrZXJTaGFkb3cgPSAkKCc8ZGl2IC8+Jylcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3RpbWUtbWFya2VyIHNoYWRvdycpXG5cdFx0XHRcdFx0LmFwcGVuZCgpXG5cdFx0XHRcdFx0LmhpZGUoKTtcblxuXHRcdFx0XHR0aGlzLm1hcmtlclNoYWRvd1RpbWUgPSAkKCc8ZGl2IC8+JykuYWRkQ2xhc3MoJ3RpbWUnKTtcblx0XHRcdFx0dGhpcy5tYXJrZXJUaW1lID0gJCgnPGRpdiAvPicpXG5cdFx0XHRcdFx0LmFkZENsYXNzKCd0aW1lJylcblx0XHRcdFx0XHQuaGlkZSgpO1xuXHRcdFx0XHR0aGlzLnBsYXllZCA9ICQoJzxkaXYgLz4nKS5hZGRDbGFzcygndGltZS1wbGF5ZWQnKTtcblx0XHRcdFx0dGhpcy5jdXJyZW50LnRleHQgPSAnMDA6MDAnO1xuXHRcdFx0XHR0aGlzLmxpbmUgPSAkKCc8ZGl2IC8+Jylcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3RpbWVsaW5lJylcblx0XHRcdFx0XHQuYXBwZW5kKHRoaXMubWFya2VyLmFwcGVuZCh0aGlzLm1hcmtlclRpbWUpKVxuXHRcdFx0XHRcdC5hcHBlbmQodGhpcy5tYXJrZXJTaGFkb3cuYXBwZW5kKHRoaXMubWFya2VyU2hhZG93VGltZSkpXG5cdFx0XHRcdFx0LmFwcGVuZCh0aGlzLnBsYXllZClcblx0XHRcdFx0XHQub24oe1xuXHRcdFx0XHRcdFx0J21vdXNlbW92ZScgOiAoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5kcmFnKSByZXR1cm47XG5cblx0XHRcdFx0XHRcdFx0bGV0IHAgPSB0aGlzLmdldFBvc2l0aW9uKGUucGFnZVgpO1xuXHRcdFx0XHRcdFx0XHRpZiAocCA+IDAgJiYgcCA8IDEpIHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLm1hcmtlclNoYWRvdy5zaG93KCk7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5tYXJrZXJTaGFkb3cuY3NzKCdsZWZ0JywgcCAqIDEwMCArICclJyk7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5tYXJrZXJTaGFkb3dUaW1lLmh0bWwoc2Vjb25kc1RvVGltZShkdXJhdGlvbiAqIHApKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5tYXJrZXJTaGFkb3cuaGlkZSgpO1xuXHRcdFx0XHRcdFx0fSxcblxuXHRcdFx0XHRcdFx0J21vdXNlbGVhdmUnIDogKGUpID0+IHtcblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuZHJhZykgcmV0dXJuO1xuXHRcdFx0XHRcdFx0XHR0aGlzLm1hcmtlclNoYWRvdy5oaWRlKClcblx0XHRcdFx0XHRcdH0sXG5cblx0XHRcdFx0XHRcdCdjbGljaycgOiAoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5kcmFnKSByZXR1cm47XG5cdFx0XHRcdFx0XHRcdHZpZGVvLnNlZWsodmlkZW8uZHVyYXRpb24gKiB0aGlzLmdldFBvc2l0aW9uKGUucGFnZVgpKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHR0aGlzLmVsZW1lbnQgPSAkKCc8ZGl2IC8+Jylcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3RpbWVsaW5lLWNvbnRhaW5lcicpXG5cdFx0XHRcdFx0LmFwcGVuZCgkKCc8ZGl2IC8+Jylcblx0XHRcdFx0XHRcdC5hZGRDbGFzcygndGltZWxpbmUtc3ViY29udGFpbmVyJylcblx0XHRcdFx0XHRcdC5hcHBlbmQodGhpcy5jdXJyZW50LmVsZW1lbnQpXG5cdFx0XHRcdFx0XHQuYXBwZW5kKHRoaXMubGluZSlcblx0XHRcdFx0XHRcdC5hcHBlbmQodGhpcy50b3RhbC5lbGVtZW50KSk7XG5cblx0XHRcdFx0dGhpcy5tYXJrZXIub24oJ21vdXNlZG93bicsIChlKSA9PiB7XG5cdFx0XHRcdFx0aWYgKGUud2hpY2ggIT0gMSkgcmV0dXJuO1xuXHRcdFx0XHRcdHRoaXMubWFya2VyU2hhZG93LmhpZGUoKTtcblx0XHRcdFx0XHR0aGlzLmRyYWcgPSB0cnVlO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHQkKGRvY3VtZW50KS5vbih7XG5cblx0XHRcdFx0XHQnbW91c2Vtb3ZlJyA6IChlKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoIXRoaXMuZHJhZykgcmV0dXJuO1xuXHRcdFx0XHRcdFx0bGV0IHAgPSB0aGlzLmdldFBvc2l0aW9uKGUucGFnZVgpO1xuXHRcdFx0XHRcdFx0aWYgKHAgPiAwICYmIHAgPCAxKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMubWFya2VyVGltZVxuXHRcdFx0XHRcdFx0XHRcdC5zaG93KClcblx0XHRcdFx0XHRcdFx0XHQuaHRtbChzZWNvbmRzVG9UaW1lKGR1cmF0aW9uICogcCkpXG5cdFx0XHRcdFx0XHRcdHZpZGVvLnNlZWsoZHVyYXRpb24gKiBwKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9LFxuXG5cdFx0XHRcdFx0J21vdXNldXAnIDogKGUpID0+IHtcblx0XHRcdFx0XHRcdHRoaXMubWFya2VyVGltZS5oaWRlKClcblx0XHRcdFx0XHRcdHRoaXMuZHJhZyA9IGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHRcdGdldFBvc2l0aW9uICh4KSB7XG5cdFx0XHRcdHJldHVybiAoeCAtIHRoaXMubGluZS5vZmZzZXQoKS5sZWZ0KSAvIHRoaXMubGluZS53aWR0aCgpO1xuXHRcdFx0fVxuXG5cdFx0XHRtb3ZlICgpIHtcblx0XHRcdFx0dmFyIHQgPSAodmlkZW8uY3VycmVudFRpbWUgLyB2aWRlby5kdXJhdGlvbiAqIDEwMCkudG9GaXhlZCgyKSArICclJztcblx0XHRcdFx0dGhpcy5tYXJrZXIuY3NzKCdsZWZ0JywgdCk7XG5cdFx0XHRcdHRoaXMucGxheWVkLmNzcygnd2lkdGgnLCB0KTtcblx0XHRcdFx0dGhpcy5jdXJyZW50LnRleHQgPSBzZWNvbmRzVG9UaW1lKHZpZGVvLmN1cnJlbnRUaW1lKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRjbGFzcyBWb2x1bWVDb250cm9sIHtcblx0XHRcdGNvbnN0cnVjdG9yICgpIHtcblx0XHRcdFx0bGV0IF9zZWxmID0gdGhpcztcblxuXHRcdFx0XHR0aGlzLmljb24gPSAkKCc8ZGl2Lz4nKVxuXHRcdFx0XHRcdC5hZGRDbGFzcygnY29udHJvbC1pY29uJylcblx0XHRcdFx0XHQuYXBwZW5kKCQoJzxpIC8+Jylcblx0XHRcdFx0XHRcdC5hZGRDbGFzcygnZmEgZmEtdm9sdW1lLWRvd24nKSlcblx0XHRcdFx0XHQuY2xpY2soZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0X3NlbGYudG9nZ2xlTXV0ZWQoKTtcblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHR0aGlzLm1hcmtlciA9ICQoJzxkaXYvPicpLmFkZENsYXNzKCd2b2x1bWUtbWFya2VyJyk7XG5cblx0XHRcdFx0dGhpcy5hY3RpdmUgPSAkKCc8ZGl2Lz4nKS5hZGRDbGFzcygndm9sdW1lLWFjdGl2ZScpO1xuXG5cdFx0XHRcdHRoaXMubGluZSA9ICQoJzxkaXYvPicpXG5cdFx0XHRcdFx0LmFkZENsYXNzKCd2b2x1bWUtbGluZScpXG5cdFx0XHRcdFx0LmFwcGVuZCh0aGlzLmFjdGl2ZSlcblx0XHRcdFx0XHQuYXBwZW5kKHRoaXMubWFya2VyKVxuXHRcdFx0XHRcdC5vbignY2xpY2snLCAoZSkgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKHRoaXMuZHJhZykgcmV0dXJuO1xuXHRcdFx0XHRcdFx0bGV0IHAgPSB0aGlzLmdldFBvc2l0aW9uKGUucGFnZVkpO1xuXHRcdFx0XHRcdFx0aWYgKHAgPj0gMCAmJiBwIDw9IDEpIHtcblx0XHRcdFx0XHRcdFx0Y29udHJvbHMudm9sdW1lID0gMSAtIHBcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHR0aGlzLmVsZW1lbnQgPSAkKCc8ZGl2IC8+Jylcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2NvbnRyb2wgY29udHJvbC1jb250YWluZXInKVxuXHRcdFx0XHRcdC5hcHBlbmQodGhpcy5pY29uKVxuXHRcdFx0XHRcdC5hcHBlbmQoJCgnPGRpdiAvPicpXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2NvbnRyb2wtaW5uZXIgdm9sdW1lLXNsaWRlcicpXG5cdFx0XHRcdFx0XHQuYXBwZW5kKHRoaXMubGluZSkpO1xuXG5cdFx0XHRcdHRoaXMuZHJhZyA9IGZhbHNlO1xuXG5cdFx0XHRcdHRoaXMubWFya2VyLm9uKCdtb3VzZWRvd24nLCAoZSkgPT4ge1xuXHRcdFx0XHRcdGlmIChlLndoaWNoICE9IDEpIHJldHVybjtcblx0XHRcdFx0XHR0aGlzLmRyYWcgPSB0cnVlO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHQkKGRvY3VtZW50KS5vbih7XG5cdFx0XHRcdFx0J21vdXNlbW92ZScgOiAoZSkgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKCF0aGlzLmRyYWcpIHJldHVybjtcblx0XHRcdFx0XHRcdGxldCBwID0gdGhpcy5nZXRQb3NpdGlvbihlLnBhZ2VZKTtcblx0XHRcdFx0XHRcdGlmIChwID49IDAgJiYgcCA8PSAxKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnRyb2xzLnZvbHVtZSA9IDEgLSBwXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSxcblxuXHRcdFx0XHRcdCdtb3VzZXVwJyA6IChlKSA9PiB7XG5cdFx0XHRcdFx0XHR0aGlzLmRyYWcgPSBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHRzZXQgdmFsdWUgKHZhbHVlKSB7XG5cdFx0XHRcdHZhciBpY29uID0gdGhpcy5pY29uLmNoaWxkcmVuKCcuZmEnKS5lcSgtMSk7XG5cdFx0XHRcdGljb24ucmVtb3ZlQ2xhc3MoKTtcblx0XHRcdFx0aWYgKHZhbHVlIDwgMC4wNSkge1xuXHRcdFx0XHRcdHZpZGVvLm11dGVkID0gdHJ1ZTtcblx0XHRcdFx0XHRpY29uLmFkZENsYXNzKCdmYSBmYS12b2x1bWUtb2ZmJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0dmlkZW8ubXV0ZWQgPSBmYWxzZTtcblx0XHRcdFx0XHR2aWRlby52b2x1bWUgPSB2YWx1ZTtcblx0XHRcdFx0XHRpZiAodmFsdWUgPCAwLjUpXG5cdFx0XHRcdFx0XHRpY29uLmFkZENsYXNzKCdmYSBmYS12b2x1bWUtZG93bicpO1xuXHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdGljb24uYWRkQ2xhc3MoJ2ZhIGZhLXZvbHVtZS11cCcpO1xuXHRcdFx0XHRcdENvb2tpZS5zZXQoJ3ZvbHVtZScsIHZhbHVlKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGxldCBwID0gTWF0aC5yb3VuZCh2YWx1ZSAqIDEwMCkudG9TdHJpbmcoKSArICclJztcblx0XHRcdFx0dGhpcy5hY3RpdmUuY3NzKCdoZWlnaHQnLCBwKTtcblx0XHRcdFx0dGhpcy5tYXJrZXIuY3NzKCdib3R0b20nLCBwKTtcblx0XHRcdH1cblxuXHRcdFx0dG9nZ2xlTXV0ZWQgKCkge1xuXHRcdFx0XHRpZiAodmlkZW8ubXV0ZWQgPT0gdHJ1ZSkge1xuXHRcdFx0XHRcdHRoaXMudmFsdWUgPSBDb29raWUuZ2V0KCd2b2x1bWUnLCAwLjQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHR0aGlzLnZhbHVlID0gMDtcblx0XHRcdH1cblxuXHRcdFx0Z2V0UG9zaXRpb24gKHkpIHtcblx0XHRcdFx0cmV0dXJuICh5IC0gdGhpcy5saW5lLm9mZnNldCgpLnRvcCkgLyB0aGlzLmxpbmUuaGVpZ2h0KCk7XG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRjbGFzcyBDb29raWUge1xuXHRcdFx0c3RhdGljIGdldCAobmFtZSwgZGZsdCkge1xuXHRcdFx0XHR2YXIgY29va2llcyA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOycpO1xuXHRcdFx0XHRmb3IgKHZhciBpIGluIGNvb2tpZXMpIHtcblx0XHRcdFx0XHR2YXIgZCA9IGNvb2tpZXNbIGkgXS50cmltKCkuc3BsaXQoJz0nKTtcblx0XHRcdFx0XHRpZiAoZFsgMCBdID09ICdsZXBsYXllcl8nICsgbmFtZSlcblx0XHRcdFx0XHRcdHJldHVybiBkWyAxIF07XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIGRmbHQ7XG5cdFx0XHR9O1xuXG5cdFx0XHRzdGF0aWMgc2V0IChuYW1lLCB2YWx1ZSkge1xuXHRcdFx0XHR2YXIgZCA9IG5ldyBEYXRlKCk7XG5cdFx0XHRcdGQuc2V0RGF0ZShkLnllYXIgKyAxKTtcblx0XHRcdFx0ZG9jdW1lbnQuY29va2llID0gJ2xlcGxheWVyXycgKyBuYW1lICsgJz0nICsgdmFsdWUgKyAnO2V4cGlyZXM9JyArIGQudG9TdHJpbmcoKTtcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0Y2xhc3MgQ29udHJvbENvbGxlY3Rpb24ge1xuXHRcdFx0Y29uc3RydWN0b3IgKG5hbWUsIGFjdGl2ZSkge1xuXHRcdFx0XHR0aGlzLml0ZW1zID0gW107XG5cdFx0XHRcdHRoaXMuYWN0aXZlID0gYWN0aXZlIHx8IGZhbHNlO1xuXHRcdFx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdFx0fVxuXG5cdFx0XHRzZXQgZG93bmxvYWQgKHZhbHVlKSB7XG5cdFx0XHRcdGlmICh0aGlzLmhhcyhDX0RPV05MT0FEKSkge1xuXHRcdFx0XHRcdHRoaXMuaXRlbXMuZG93bmxvYWQubGluayA9IHZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHNldCBzb3VyY2UgKHZhbHVlKSB7XG5cdFx0XHRcdGlmICh0aGlzLmhhcyhDX1NPVVJDRSkpXG5cdFx0XHRcdFx0dGhpcy5pdGVtcy5zb3VyY2Uuc2V0KHZhbHVlKTtcblx0XHRcdH1cblxuXHRcdFx0c2V0IHRvdGFsVGltZSAodmFsdWUpIHtcblx0XHRcdFx0aWYgKHRoaXMuaGFzKENfVElNRUxJTkUpKVxuXHRcdFx0XHRcdHRoaXMuaXRlbXMudGltZWxpbmUudG90YWwudGV4dCA9IHZhbHVlO1xuXHRcdFx0fVxuXG5cdFx0XHRzZXQgdm9sdW1lICh2YWx1ZSkge1xuXHRcdFx0XHRpZiAodGhpcy5oYXMoQ19WT0xVTUUpKVxuXHRcdFx0XHRcdHRoaXMuaXRlbXMudm9sdW1lLnZhbHVlID0gdmFsdWU7XG5cdFx0XHR9XG5cblx0XHRcdGFkZCAobmFtZSkge1xuXHRcdFx0XHRpZiAobmFtZSA9PSBDX0RJVklERVIpXG5cdFx0XHRcdFx0cmV0dXJuIENvbnRyb2wuY3JlYXRlKG5hbWUpO1xuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHR0aGlzLml0ZW1zWyBuYW1lIF0gPSBDb250cm9sLmNyZWF0ZShuYW1lKTtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5pdGVtc1sgbmFtZSBdLmVsZW1lbnQ7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aGFzIChuYW1lKSB7XG5cdFx0XHRcdHJldHVybiAodHlwZW9mIHRoaXMuaXRlbXNbIG5hbWUgXSA9PSAnb2JqZWN0Jyk7XG5cdFx0XHR9XG5cblx0XHRcdGhpZGUgKCkge1xuXHRcdFx0XHRjb250YWluZXIuZmluZCgnLmNvbnRyb2xzLScgKyB0aGlzLm5hbWUpLmhpZGUoKTtcblx0XHRcdH1cblxuXHRcdFx0aW5pdCAoKSB7XG5cdFx0XHRcdHRoaXMudm9sdW1lID0gQ29va2llLmdldCgndm9sdW1lJywgMC40KTtcblx0XHRcdFx0dGhpcy5pbml0VGltZWxpbmUoKTtcblx0XHRcdFx0dGhpcy50b3RhbFRpbWUgPSBzZWNvbmRzVG9UaW1lKHZpZGVvLmR1cmF0aW9uKTtcblx0XHRcdFx0dGhpcy5pbml0UmF0ZSgpO1xuXHRcdFx0XHR0aGlzLmRvd25sb2FkID0gc291cmNlc1sgMCBdLnNyYztcblx0XHRcdH1cblxuXHRcdFx0aW5pdFJhdGUgKCkge1xuXHRcdFx0XHRpZiAodGhpcy5oYXMoQ19SQVRFKSlcblx0XHRcdFx0XHR0aGlzLml0ZW1zLnJhdGUubG9hZCgpO1xuXHRcdFx0fVxuXG5cdFx0XHRpbml0VGltZWxpbmUgKCkge1xuXHRcdFx0XHRpZiAodGhpcy5oYXMoQ19USU1FTElORSkpIHtcblx0XHRcdFx0XHRpZiAodGhpcy5pdGVtcy50aW1lbGluZS5lbGVtZW50LndpZHRoKCkgPCAyMClcblx0XHRcdFx0XHRcdHRoaXMuaXRlbXMudGltZWxpbmUuZWxlbWVudC5oaWRlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0bW92ZVRpbWVNYXJrZXIgKCkge1xuXHRcdFx0XHRpZiAodGhpcy5oYXMoQ19USU1FTElORSkpXG5cdFx0XHRcdFx0dGhpcy5pdGVtcy50aW1lbGluZS5tb3ZlKCk7XG5cdFx0XHR9XG5cblx0XHRcdHBhdXNlICgpIHtcblx0XHRcdFx0aWYgKHRoaXMuaGFzKENfUExBWSkpXG5cdFx0XHRcdFx0dGhpcy5pdGVtcy5wbGF5LnBhdXNlKCk7XG5cdFx0XHR9XG5cblx0XHRcdHBsYXkgKCkge1xuXHRcdFx0XHRpZiAodGhpcy5oYXMoQ19QTEFZKSlcblx0XHRcdFx0XHR0aGlzLml0ZW1zLnBsYXkucGxheSgpO1xuXHRcdFx0fVxuXG5cdFx0XHRzaG93ICgpIHtcblx0XHRcdFx0Y29udGFpbmVyLmZpbmQoJy5jb250cm9scy0nICsgdGhpcy5uYW1lKS5zaG93KCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y2xhc3MgQ29udHJvbHMge1xuXHRcdFx0Y29uc3RydWN0b3IgKCkge1xuXHRcdFx0XHR0aGlzLmNvbGxlY3Rpb25zID0ge1xuXHRcdFx0XHRcdGNvbW1vbiA6IG5ldyBDb250cm9sQ29sbGVjdGlvbignY29tbW9uJyksXG5cdFx0XHRcdFx0bWluaSA6IG5ldyBDb250cm9sQ29sbGVjdGlvbignbWluaScpLFxuXHRcdFx0XHRcdGZ1bGxzY3JlZW4gOiBuZXcgQ29udHJvbENvbGxlY3Rpb24oJ2Z1bGxzY3JlZW4nKVxuXHRcdFx0XHR9O1xuXHRcdFx0XHR0aGlzLmNvbGxlY3Rpb25zLmNvbW1vbi5hY3RpdmUgPSB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRnZXQgY29tbW9uICgpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuY29sbGVjdGlvbnMuY29tbW9uO1xuXHRcdFx0fVxuXG5cdFx0XHRnZXQgZnVsbHNjcmVlbiAoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmNvbGxlY3Rpb25zLmZ1bGxzY3JlZW47XG5cdFx0XHR9XG5cblx0XHRcdGdldCBtaW5pICgpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuY29sbGVjdGlvbnMubWluaTtcblx0XHRcdH1cblxuXHRcdFx0c2V0IGRvd25sb2FkICh2YWx1ZSkge1xuXHRcdFx0XHRmb3IgKHZhciBpIGluIHRoaXMuY29sbGVjdGlvbnMpIHtcblx0XHRcdFx0XHR0aGlzLmNvbGxlY3Rpb25zWyBpIF0uZG93bmxvYWQgPSB2YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRzZXQgc291cmNlICh2YWx1ZSkge1xuXHRcdFx0XHRmb3IgKHZhciBpIGluIHRoaXMuY29sbGVjdGlvbnMpIHtcblx0XHRcdFx0XHR0aGlzLmNvbGxlY3Rpb25zWyBpIF0uc291cmNlID0gdmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0c2V0IHRvdGFsVGltZSAodmFsdWUpIHtcblx0XHRcdFx0Zm9yICh2YXIgaSBpbiB0aGlzLmNvbGxlY3Rpb25zKSB7XG5cdFx0XHRcdFx0dGhpcy5jb2xsZWN0aW9uc1sgaSBdLnRvdGFsVGltZSA9IHZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHNldCB2b2x1bWUgKHZhbHVlKSB7XG5cdFx0XHRcdGZvciAodmFyIGkgaW4gdGhpcy5jb2xsZWN0aW9ucykge1xuXHRcdFx0XHRcdHRoaXMuY29sbGVjdGlvbnNbIGkgXS52b2x1bWUgPSB2YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRoYXMgKG5hbWUpIHtcblx0XHRcdFx0cmV0dXJuICh0eXBlb2YgdGhpcy5jb2xsZWN0aW9uc1sgbmFtZSBdID09ICdvYmplY3QnKTtcblx0XHRcdH1cblxuXHRcdFx0aW5pdCAoKSB7XG5cdFx0XHRcdGZvciAodmFyIGkgaW4gdGhpcy5jb2xsZWN0aW9ucykge1xuXHRcdFx0XHRcdHRoaXMuY29sbGVjdGlvbnNbIGkgXS5pbml0KCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5jb2xsZWN0aW9ucy5jb21tb24uc2hvdygpO1xuXHRcdFx0XHR0aGlzLmNvbGxlY3Rpb25zLm1pbmkuaGlkZSgpO1xuXHRcdFx0XHR0aGlzLmNvbGxlY3Rpb25zLmZ1bGxzY3JlZW4uaGlkZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHRtb3ZlVGltZU1hcmtlciAoKSB7XG5cdFx0XHRcdGZvciAodmFyIGkgaW4gdGhpcy5jb2xsZWN0aW9ucylcblx0XHRcdFx0XHR0aGlzLmNvbGxlY3Rpb25zWyBpIF0ubW92ZVRpbWVNYXJrZXIoKTtcblx0XHRcdH1cblxuXHRcdFx0cGF1c2UgKCkge1xuXHRcdFx0XHRmb3IgKHZhciBpIGluIHRoaXMuY29sbGVjdGlvbnMpXG5cdFx0XHRcdFx0dGhpcy5jb2xsZWN0aW9uc1sgaSBdLnBhdXNlKCk7XG5cdFx0XHR9XG5cblx0XHRcdHBsYXkgKCkge1xuXHRcdFx0XHRmb3IgKHZhciBpIGluIHRoaXMuY29sbGVjdGlvbnMpXG5cdFx0XHRcdFx0dGhpcy5jb2xsZWN0aW9uc1sgaSBdLnBsYXkoKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR2YXIgc291cmNlcyA9IFtdO1xuXHRcdHZhciBzdWJ0aXRsZXMgPSBbXTtcblx0XHR2YXIgdm9sdW1lID0gMC41O1xuXHRcdHZhciB2aWRlbyA9IG51bGw7XG5cdFx0dmFyIGNvbnRyb2xzID0gbmV3IENvbnRyb2xzKCk7XG5cblx0XHQvKipcblx0XHQgKiBET00gY29udGFpbmVyIHRvIGhvbGQgdmlkZW8gYW5kIGFsbCBvdGhlciBzdHVmZi5cblx0XHQgKiBAdHlwZSBvYmplY3Rcblx0XHQgKi9cblx0XHR2YXIgY29udGFpbmVyID0gbnVsbDtcblx0XHR2YXIgb3ZlcmxheSA9IG51bGw7XG5cblx0XHR2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdC8vIENoZWNrIGlmIGVsZW1lbnQgaXMgY29ycmVjdGx5IHNlbGVjdGVkLlxuXHRcdFx0aWYgKGVsZW1lbnQucHJvcCgndGFnTmFtZScpLnRvTG93ZXJDYXNlKCkgIT0gJ3ZpZGVvJykge1xuXHRcdFx0XHRjb25zb2xlLndhcm4oJ0luY29ycmVjdCBlbGVtZW50IHNlbGVjdGVkLicpO1xuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH1cblxuXHRcdFx0Ly8gU2V0IHNvdXJjZS5cblx0XHRcdGVsZW1lbnQuY2hpbGRyZW4oJ3NvdXJjZScpLmVhY2goZnVuY3Rpb24gKCkge1xuXHRcdFx0XHR2YXIgc3JjID0gJCh0aGlzKS5hdHRyKCdzcmMnKTtcblx0XHRcdFx0aWYgKHNyYylcblx0XHRcdFx0XHRzb3VyY2VzLnB1c2goe1xuXHRcdFx0XHRcdFx0c3JjIDogc3JjLFxuXHRcdFx0XHRcdFx0dGl0bGUgOiAkKHRoaXMpLmF0dHIoJ3RpdGxlJylcblx0XHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdFx0aWYgKHNvdXJjZXMubGVuZ3RoID09IDApIHtcblx0XHRcdFx0dmFyIHNyYyA9IGVsZW1lbnQuYXR0cignc3JjJyk7XG5cdFx0XHRcdGlmIChzcmMpIHtcblx0XHRcdFx0XHRzb3VyY2VzLnB1c2goe1xuXHRcdFx0XHRcdFx0c3JjIDogc3JjLFxuXHRcdFx0XHRcdFx0dGl0bGUgOiAkKHRoaXMpLmF0dHIoJ3RpdGxlJykgfHwgJ2RlZmF1bHQnXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChzb3VyY2VzLmxlbmd0aCA9PSAwKSB7XG5cdFx0XHRcdGNvbnNvbGUud2FybignTm8gc291cmNlcyBmb3VuZC4nKTtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cdFx0XHR2aWRlbyA9IG5ldyBWaWRlbyhlbGVtZW50KTtcblxuXHRcdFx0aW5pdE9wdGlvbnMoKTtcblx0XHRcdGluaXREb20oKTtcblx0XHRcdHZpZGVvLmluaXQoKTtcblx0XHRcdGluaXRDb250cm9scygpO1xuXHRcdFx0aW5pdEhvdEtleXMoKTtcblx0XHR9O1xuXG5cdFx0dmFyIGluaXRDb250cm9scyA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGZvciAobGV0IG5hbWUgaW4gb3B0aW9ucy5jb250cm9scykge1xuXHRcdFx0XHRpZiAoY29udHJvbHMuaGFzKG5hbWUpKSB7XG5cdFx0XHRcdFx0Zm9yIChsZXQgcm93SW5kZXggaW4gb3B0aW9ucy5jb250cm9sc1sgbmFtZSBdKSB7XG5cdFx0XHRcdFx0XHRsZXQgcm93ID0gb3B0aW9ucy5jb250cm9sc1sgbmFtZSBdWyByb3dJbmRleCBdLFxuXHRcdFx0XHRcdFx0XHRoYXNUaW1lbGluZSA9IGZhbHNlLFxuXHRcdFx0XHRcdFx0XHRyb3dFbGVtZW50ID0gJCgnPGRpdiAvPicpLmFkZENsYXNzKCdsZXBsYXllci1jb250cm9scyBjb250cm9scy0nICsgbmFtZSk7XG5cblx0XHRcdFx0XHRcdGZvciAobGV0IGkgaW4gcm93KSB7XG5cdFx0XHRcdFx0XHRcdGxldCBjb250cm9sTmFtZSA9IHJvd1sgaSBdO1xuXG5cdFx0XHRcdFx0XHRcdGlmIChjb250cm9sTmFtZSA9PSBDX0RJVklERVIgfHwgIWNvbnRyb2xzLmNvbGxlY3Rpb25zWyBuYW1lIF0uaGFzKGNvbnRyb2xOYW1lKSkge1xuXHRcdFx0XHRcdFx0XHRcdC8vIENyZWF0ZSBjb250cm9sIG9ubHkgaWYgZGl2aWRlciBvciBkb2VzIG5vdCBleGlzdCB5ZXQuXG5cdFx0XHRcdFx0XHRcdFx0dmFyIGMgPSBjb250cm9scy5jb2xsZWN0aW9uc1sgbmFtZSBdLmFkZChjb250cm9sTmFtZSk7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKGMgIT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0cm93RWxlbWVudC5hcHBlbmQoYyk7XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoY29udHJvbE5hbWUgPT0gQ19USU1FTElORSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0aGFzVGltZWxpbmUgPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLndhcm4oJ0Nhbm5vdCBjcmVhdGUgJyArIGNvbnRyb2xOYW1lICsgJyBjb250cm9sIGZvciBjb2xsZWN0aW9uICcgKyBuYW1lICsgJy4nKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRpZiAoIWhhc1RpbWVsaW5lKVxuXHRcdFx0XHRcdFx0XHRyb3dFbGVtZW50LmNzcygnd2lkdGgnLCAnMXB4Jyk7XG5cblx0XHRcdFx0XHRcdHJvd0VsZW1lbnQuZmluZCgnLmRpdmlkZXIgKyAuZGl2aWRlcicpLnJlbW92ZSgpO1xuXG5cdFx0XHRcdFx0XHRjb250YWluZXIuYXBwZW5kKHJvd0VsZW1lbnQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cblx0XHR2YXIgaW5pdERvbSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdG92ZXJsYXkgPSAkKCc8ZGl2IC8+JykuYWRkQ2xhc3MoJ3BsYXktb3ZlcmxheScpLmh0bWwoJzxpIGNsYXNzPVwiZmEgZmEtcGxheVwiPjwvaT4nKTtcblx0XHRcdHZhciB2aWRlb0NvbnRhaW5lciA9ICQoJzxkaXYgLz4nKS5hZGRDbGFzcygnbGVwbGF5ZXItdmlkZW8nKS5hcHBlbmQob3ZlcmxheSk7XG5cdFx0XHRjb250YWluZXIgPSAkKCc8ZGl2IC8+JykuYWRkQ2xhc3MoJ2xlcGxheWVyLWNvbnRhaW5lcicpLmFwcGVuZCh2aWRlb0NvbnRhaW5lcikuY3NzKCd3aWR0aCcsIGVsZW1lbnQud2lkdGgoKSArICdweCcpO1xuXG5cdFx0XHRlbGVtZW50LmJlZm9yZShjb250YWluZXIpO1xuXHRcdFx0dmlkZW9Db250YWluZXIuYXBwZW5kKGVsZW1lbnQpO1xuXHRcdFx0b3ZlcmxheS5jbGljayhmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHZpZGVvLnRvZ2dsZVBsYXkoKTtcblx0XHRcdH0pO1xuXHRcdH07XG5cblx0XHR2YXIgaW5pdEhvdEtleXMgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHQvLyBTcGFjZS5cblx0XHRcdGVsZW1lbnQua2V5cHJlc3MoZSA9PiB7XG5cdFx0XHRcdGlmIChlLmNoYXJDb2RlID09IDMyKSB7XG5cdFx0XHRcdFx0Ly9lLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0dG9nZ2xlUGxheSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KS5jbGljayhmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHRvZ2dsZVBsYXkoKTtcblx0XHRcdH0pO1xuXHRcdH07XG5cblx0XHR2YXIgaW5pdE9wdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHQvLyBDb250cm9scy5cblx0XHRcdGVsZW1lbnQucmVtb3ZlQXR0cignY29udHJvbHMnKTtcblxuXHRcdFx0Ly8gSGVpZ2h0LlxuXHRcdFx0dmFyIGggPSBlbGVtZW50LmF0dHIoJ2hlaWdodCcpO1xuXHRcdFx0aWYgKGgpIHtcblx0XHRcdFx0b3B0aW9ucy5oZWlnaHQgPSBoICsgJ3B4Jztcblx0XHRcdFx0ZWxlbWVudC5yZW1vdmVBdHRyKCdoZWlnaHQnKTtcblx0XHRcdH1cblx0XHRcdGVsZW1lbnQuY3NzKCdoZWlnaHQnLCBvcHRpb25zLmhlaWdodCk7XG5cblx0XHRcdC8vIFdpZHRoLlxuXHRcdFx0dmFyIHcgPSBlbGVtZW50LmF0dHIoJ3dpZHRoJyk7XG5cdFx0XHRpZiAodykge1xuXHRcdFx0XHRvcHRpb25zLndpZHRoID0gdyArICdweCc7XG5cdFx0XHRcdGVsZW1lbnQucmVtb3ZlQXR0cignd2lkdGgnKTtcblx0XHRcdH1cblx0XHRcdGVsZW1lbnQuY3NzKCd3aWR0aCcsIG9wdGlvbnMud2lkdGgpO1xuXG5cdFx0XHQvLyBQb3N0ZXIuXG5cdFx0XHR2YXIgcCA9IGVsZW1lbnQuYXR0cigncG9zdGVyJyk7XG5cdFx0XHRpZiAocClcblx0XHRcdFx0b3B0aW9ucy5wb3N0ZXIgPSBwO1xuXHRcdFx0ZWxzZSBpZiAob3B0aW9ucy5wb3N0ZXIpXG5cdFx0XHRcdGVsZW1lbnQuYXR0cigncG9zdGVyJywgb3B0aW9ucy5wb3N0ZXIpO1xuXG5cdFx0XHQvLyBBdXRvcGxheSwgbG9vcCwgbXV0ZWQuXG5cdFx0XHR2YXIgYXR0cnMgPSBbICdhdXRvcGxheScsICdsb29wJywgJ211dGVkJyBdO1xuXHRcdFx0Zm9yICh2YXIgaSBpbiBhdHRycykge1xuXHRcdFx0XHR2YXIgYSA9IGVsZW1lbnQuYXR0cihhdHRyc1sgaSBdKTtcblx0XHRcdFx0aWYgKGEpXG5cdFx0XHRcdFx0b3B0aW9uc1sgYXR0cnNbIGkgXSBdID0gdHJ1ZTtcblx0XHRcdFx0ZWxzZSBpZiAob3B0aW9uc1sgYXR0cnNbIGkgXSBdKVxuXHRcdFx0XHRcdGVsZW1lbnQuYXR0cihhdHRyc1sgaSBdLCAnJyk7XG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRlbGVtZW50LnJlbW92ZUF0dHIoYXR0cnNbIGkgXSk7XG5cdFx0XHRcdGVsZW1lbnQucHJvcChhdHRyc1sgaSBdLCBvcHRpb25zWyBhdHRyc1sgaSBdIF0pO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBQcmVsb2FkLlxuXHRcdFx0dmFyIHIgPSBlbGVtZW50LmF0dHIoJ3ByZWxvYWQnKTtcblx0XHRcdGlmIChyKSB7XG5cdFx0XHRcdHIgPSByLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRcdGlmIChyID09ICdub25lJyB8fCByID09ICdtZXRhZGF0YScpXG5cdFx0XHRcdFx0b3B0aW9ucy5wcmVsb2FkID0gcjtcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdG9wdGlvbnMucHJlbG9hZCA9ICdhdXRvJztcblx0XHRcdH1cblx0XHRcdGVsZW1lbnQuYXR0cigncHJlbG9hZCcsIG9wdGlvbnMucHJlbG9hZCk7XG5cdFx0fTtcblxuXHRcdHZhciBzZWNvbmRzVG9UaW1lID0gZnVuY3Rpb24gKHNlY29uZHMpIHtcblx0XHRcdHZhciBoID0gTWF0aC5mbG9vcihzZWNvbmRzIC8gMzYwMCk7XG5cdFx0XHR2YXIgbSA9IE1hdGguZmxvb3Ioc2Vjb25kcyAlIDM2MDAgLyA2MCk7XG5cdFx0XHR2YXIgcyA9IE1hdGguZmxvb3Ioc2Vjb25kcyAlIDM2MDAgJSA2MCk7XG5cdFx0XHR2YXIgb3V0ID0gJyc7XG5cdFx0XHRpZiAoaCA+IDApXG5cdFx0XHRcdG91dCA9IGggKyAnOic7XG5cdFx0XHRpZiAobSA8IDEwKVxuXHRcdFx0XHRvdXQgKz0gJzAnO1xuXHRcdFx0b3V0ICs9IG0gKyAnOic7XG5cdFx0XHRpZiAocyA8IDEwKVxuXHRcdFx0XHRvdXQgKz0gJzAnO1xuXHRcdFx0b3V0ICs9IHM7XG5cdFx0XHRyZXR1cm4gb3V0O1xuXHRcdH07XG5cblx0XHRpbml0KCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0d2luZG93LiQuZm4ubGVQbGF5ZXIgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXHRcdHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuXHRcdFx0UGxheWVyKCQodGhpcyksIG9wdGlvbnMpO1xuXHRcdH0pO1xuXHR9O1xufShqUXVlcnkpKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNvdXJjZS9qcy9sZS1wbGF5ZXIuZXM2LmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBT0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUlBO0FBTEE7QUF2QkE7QUFDQTs7Ozs7QUFkQTtBQW1EQTs7Ozs7Ozs7Ozs7QUFJQTtBQUNBOzs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBWEE7Ozs7Ozs7OztBQW9CQTtBQUNBOzs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUdBO0FBQ0E7QUFDQTtBQUlBO0FBTEE7QUFRQTtBQUNBO0FBSUE7QUFOQTs7Ozs7Ozs7O0FBYUE7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUpBOzs7O0FBckVBO0FBbkRBO0FBQ0E7QUFnSUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBOztBQUZBO0FBS0E7QUFMQTtBQUNBO0FBRkE7O0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7OztBQUdBO0FBQ0E7QUFDQTs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQVBBOzs7O0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFKQTs7OztBQWNBOzs7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFIQTs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOzs7OztBQVBBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBRkE7QUFDQTtBQWNBO0FBQ0E7Ozs7QUFHQTtBQUNBOzs7O0FBR0E7QUFDQTs7OztBQUdBO0FBQ0E7Ozs7QUE3R0E7QUFDQTs7OztBQUdBO0FBQ0E7Ozs7QUFkQTtBQWpJQTtBQUNBO0FBMFBBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBRkE7O0FBUUE7QUFDQTs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFUQTtBQVdBO0FBQ0E7QUFaQTtBQWNBO0FBQ0E7QUFmQTtBQWlCQTtBQUNBO0FBbEJBO0FBb0JBO0FBQ0E7QUFyQkE7QUF1QkE7QUFDQTtBQXhCQTtBQTBCQTtBQUNBO0FBM0JBO0FBNkJBO0FBQ0E7QUE5QkE7QUFnQ0E7QUFDQTtBQWpDQTtBQW1DQTtBQW5DQTs7OztBQWJBO0FBM1BBO0FBQ0E7QUErU0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFGQTs7QUFLQTtBQUNBOzs7O0FBTkE7QUFoVEE7QUFDQTtBQXlUQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBZEE7QUFDQTtBQUZBOztBQXdDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFEQTs7OztBQU1BOzs7QUFHQTtBQUNBOzs7O0FBakRBO0FBQ0E7QUFDQTtBQURBOztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQVNBOzs7O0FBcENBO0FBMVRBO0FBQ0E7QUFnWUE7OztBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBREE7O0FBRkE7QUFDQTtBQUZBO0FBQUE7QUFDQTtBQVdBOzs7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7O0FBRkE7QUFDQTtBQUZBOztBQU1BO0FBQ0E7Ozs7QUFQQTtBQUFBO0FBQ0E7QUFVQTs7O0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUNBO0FBS0E7OztBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBREE7O0FBRkE7QUFDQTtBQUZBO0FBQUE7QUFDQTtBQVFBOzs7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQURBOztBQUZBO0FBQ0E7QUFGQTs7QUFRQTtBQUNBOzs7O0FBTUE7QUFDQTs7OztBQWhCQTtBQUFBO0FBQ0E7QUFzQkE7QUFDQTs7O0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBYkE7QUFDQTtBQUZBOztBQXFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFQQTs7OztBQVdBOztBQUVBO0FBQ0E7Ozs7QUFHQTtBQUNBOzs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7Ozs7QUE1Q0E7QUE5YkE7QUFDQTtBQW9mQTs7O0FBQ0E7QUFEQTtBQUNBOzs7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUhBO0FBQUE7QUFDQTtBQUZBOztBQVdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7Ozs7QUFNQTtBQUNBO0FBQ0E7Ozs7QUF0QkE7QUFBQTtBQUNBO0FBeUJBOzs7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUhBO0FBREE7QUFGQTtBQUFBO0FBQ0E7QUFGQTs7QUE0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFEQTs7OztBQU1BO0FBQ0E7QUFDQTs7OztBQXhCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBOzs7O0FBakJBO0FBQUE7QUFDQTtBQTBDQTtBQUNBOzs7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUpBO0FBQ0E7QUFZQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUF4QkE7QUFDQTtBQTZCQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUpBO0FBSEE7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUZBO0FBYkE7QUFsRUE7QUFDQTtBQUZBOztBQXVGQTtBQUNBOzs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQS9GQTtBQTFqQkE7QUFDQTtBQTRwQkE7QUFDQTs7O0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSEE7QUFDQTtBQU9BO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSEE7QUFDQTtBQU9BO0FBQ0E7QUFEQTtBQVRBO0FBekNBO0FBQ0E7QUFGQTs7QUErRUE7QUFDQTtBQUNBO0FBREE7Ozs7QUFPQTtBQUNBOzs7O0FBL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBSUE7QUFYQTtBQUNBO0FBYUE7QUFDQTtBQUNBOzs7O0FBNUVBO0FBN3BCQTtBQUNBO0FBeXZCQTs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUtBOzs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFkQTtBQTF2QkE7QUFDQTtBQTJ3QkE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBRkE7O0FBNEJBO0FBQ0E7QUFHQTtBQUNBO0FBSkE7Ozs7QUFRQTtBQUNBOzs7O0FBR0E7QUFDQTs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUdBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFEQTs7OztBQU1BO0FBQ0E7Ozs7QUFJQTtBQUNBOzs7O0FBSUE7QUFDQTs7OztBQUlBO0FBQ0E7Ozs7QUExRUE7QUFDQTtBQUNBO0FBREE7Ozs7QUFLQTtBQUNBOzs7O0FBSUE7QUFDQTs7OztBQUlBO0FBQ0E7Ozs7QUF4QkE7QUE1d0JBO0FBQ0E7QUFnMkJBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBTkE7QUFDQTtBQUZBOztBQThDQTtBQUNBOzs7O0FBR0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFEQTs7OztBQUlBO0FBQ0E7QUFDQTtBQURBOzs7O0FBSUE7QUFDQTtBQUNBO0FBREE7Ozs7QUE1REE7QUFDQTs7OztBQUdBO0FBQ0E7Ozs7QUFHQTtBQUNBOzs7O0FBR0E7QUFDQTtBQUNBO0FBREE7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFEQTs7OztBQUtBO0FBQ0E7QUFDQTtBQURBOzs7O0FBS0E7QUFDQTtBQUNBO0FBREE7Ozs7QUF6Q0E7QUFqMkJBO0FBQ0E7QUEyNkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFqN0JBO0FBdTdCQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFDQTs7QUFIQTtBQVNBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFIQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFGQTtBQVNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFuQ0E7QUFDQTtBQXFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUhBO0FBSEE7QUFDQTtBQWVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUExQkE7QUFEQTtBQURBO0FBREE7QUFDQTtBQWtDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQVBBO0FBQ0E7QUFXQTs7QUFFQTtBQUNBOztBQUVBO0FBRkE7QUFEQTtBQU1BO0FBREE7QUFQQTtBQUNBO0FBV0E7O0FBRUE7QUFDQTs7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTs7QUFYQTtBQWNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTs7QUFuQkE7QUFzQkE7QUFDQTs7QUF2QkE7QUE2QkE7QUFDQTtBQUNBO0FBTUE7QUFSQTtBQUNBOztBQTlCQTtBQTBDQTtBQUNBO0FBQ0E7QUFGQTtBQU9BO0FBakRBO0FBQ0E7QUFtREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQWJBO0FBQ0E7QUFlQTtBQUNBO0FBL2xDQTtBQUNBO0FBaW1DQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBcm1DQTs7OyIsInNvdXJjZVJvb3QiOiIifQ==