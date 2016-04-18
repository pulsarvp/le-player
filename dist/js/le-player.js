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
					value: function decreaseRate() {
						if (this._video.playbackRate > options.rate.min) {
							this._video.playbackRate -= options.rate.step;
							controls.rate = this._video.playbackRate;
						}
					}
				}, {
					key: 'increaseRate',
					value: function increaseRate() {
						if (this._video.playbackRate < options.rate.max) {
							this._video.playbackRate += options.rate.step;
							controls.rate = this._video.playbackRate;
						}
					}
				}, {
					key: 'init',
					value: function init() {
						this._initSubtitles();
						this._initVideo();
						this._initRate();
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
					key: '_initRate',
					value: function _initRate() {
						this._video.playbackRate = Cookie.get('rate', 1);
						controls.rate = this._video.playbackRate;
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
					key: 'rate',
					get: function get() {
						return this._video.playbackRate;
					},
					set: function set(value) {
						this._video.playbackRate = value;
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
					_classCallCheck(this, RateControl);

					this.down = new Control('rate-down', 'backward');
					this.up = new Control('rate-up', 'forward');
					this.current = new ControlText('rate-current');

					this.down.element.click(function (e) {
						video.decreaseRate();
					});

					this.up.element.click(function (e) {
						video.increaseRate();
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

					var _this7 = _possibleConstructorReturn(this, Object.getPrototypeOf(SourceControl).call(this, 'bullseye'));

					if (sources.length > 1) {
						for (var i in sources) {
							_this7.addItem(sources[i].title, { src: sources[i].src });
						}
					}
					return _this7;
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
					var _this9 = this;

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
							if (_this9.drag) return;

							var p = _this9.getPosition(e.pageX);
							if (p > 0 && p < 1) {
								_this9.markerShadow.show();
								_this9.markerShadow.css('left', p * 100 + '%');
								_this9.markerShadowTime.html(secondsToTime(duration * p));
							} else _this9.markerShadow.hide();
						},

						'mouseleave': function mouseleave(e) {
							if (_this9.drag) return;
							_this9.markerShadow.hide();
						},

						'click': function click(e) {
							if (_this9.drag) return;
							video.seek(video.duration * _this9.getPosition(e.pageX));
						}
					});

					this.element = $('<div />').addClass('timeline-container').append($('<div />').addClass('timeline-subcontainer').append(this.current.element).append(this.line).append(this.total.element));

					this.marker.on('mousedown', function (e) {
						if (e.which != 1) return;
						_this9.markerShadow.hide();
						_this9.drag = true;
					});

					$(document).on({

						'mousemove': function mousemove(e) {
							if (!_this9.drag) return;
							var p = _this9.getPosition(e.pageX);
							if (p > 0 && p < 1) {
								_this9.markerTime.show().html(secondsToTime(duration * p));
								video.seek(duration * p);
							}
						},

						'mouseup': function mouseup(e) {
							_this9.markerTime.hide();
							_this9.drag = false;
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
					var _this10 = this;

					_classCallCheck(this, VolumeControl);

					var _self = this;

					this.icon = $('<div/>').addClass('control-icon').append($('<i />').addClass('fa fa-volume-down')).click(function () {
						_self.toggleMuted();
					});

					this.marker = $('<div/>').addClass('volume-marker');

					this.active = $('<div/>').addClass('volume-active');

					this.line = $('<div/>').addClass('volume-line').append(this.active).append(this.marker).on('click', function (e) {
						if (_this10.drag) return;
						var p = _this10.getPosition(e.pageY);
						if (p >= 0 && p <= 1) {
							controls.volume = 1 - p;
						}
					});

					this.element = $('<div />').addClass('control control-container').append(this.icon).append($('<div />').addClass('control-inner volume-slider').append(this.line));

					this.drag = false;

					this.marker.on('mousedown', function (e) {
						if (e.which != 1) return;
						_this10.drag = true;
					});

					$(document).on({
						'mousemove': function mousemove(e) {
							if (!_this10.drag) return;
							var p = _this10.getPosition(e.pageY);
							if (p >= 0 && p <= 1) {
								controls.volume = 1 - p;
							}
						},

						'mouseup': function mouseup(e) {
							_this10.drag = false;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGUtcGxheWVyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIGMxNWUzN2NhMWMxMjUyZDhlM2U1Iiwid2VicGFjazovLy9zb3VyY2UvanMvbGUtcGxheWVyLmVzNi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGMxNWUzN2NhMWMxMjUyZDhlM2U1XG4gKiovIiwiKGZ1bmN0aW9uICgkKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHRsZXQgUGxheWVyID0gZnVuY3Rpb24gKGVsZW1lbnQsIG9wdHMpIHtcblx0XHRjb25zdCBDX0JBQ0tXQVJEID0gJ2JhY2t3YXJkJztcblx0XHRjb25zdCBDX0RJVklERVIgPSAnZGl2aWRlcic7XG5cdFx0Y29uc3QgQ19ET1dOTE9BRCA9ICdkb3dubG9hZCc7XG5cdFx0Y29uc3QgQ19GT1JXQVJEID0gJ2ZvcndhcmQnO1xuXHRcdGNvbnN0IENfRlVMTFNDUkVFTiA9ICdmdWxsc2NyZWVuJztcblx0XHRjb25zdCBDX1BMQVkgPSAncGxheSc7XG5cdFx0Y29uc3QgQ19SQVRFID0gJ3JhdGUnO1xuXHRcdGNvbnN0IENfU09VUkNFID0gJ3NvdXJjZSc7XG5cdFx0Y29uc3QgQ19TVUJUSVRMRSA9ICdzdWJ0aXRsZSc7XG5cdFx0Y29uc3QgQ19USU1FTElORSA9ICd0aW1lbGluZSc7XG5cdFx0Y29uc3QgQ19WT0xVTUUgPSAndm9sdW1lJztcblxuXHRcdGxldCBlbnYgPSB7XG5cdFx0XHR2b2x1bWUgOiB7XG5cdFx0XHRcdGRlZmF1bHQgOiAwLjQsXG5cdFx0XHRcdG11dGVsaW1pdCA6IDAuMDVcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0dmFyIG9wdGlvbnMgPSAkLmV4dGVuZCh0cnVlLCB7XG5cdFx0XHRhdXRvcGxheSA6IGZhbHNlLFxuXHRcdFx0aGVpZ2h0IDogJ2F1dG8nLFxuXHRcdFx0bG9vcCA6IGZhbHNlLFxuXHRcdFx0bXV0ZWQgOiBmYWxzZSxcblx0XHRcdHByZWxvYWQgOiAnbWV0YWRhdGEnLFxuXHRcdFx0cG9zdGVyIDogbnVsbCxcblx0XHRcdHdpZHRoIDogJ2F1dG8nLFxuXHRcdFx0cmF0ZSA6IHtcblx0XHRcdFx0c3RlcCA6IDAuMjUsXG5cdFx0XHRcdG1pbiA6IDAuNSxcblx0XHRcdFx0bWF4IDogNC4wXG5cdFx0XHR9LFxuXHRcdFx0cGxheWJhY2sgOiB7XG5cdFx0XHRcdHN0ZXAgOiB7XG5cdFx0XHRcdFx0c2hvcnQgOiA1LFxuXHRcdFx0XHRcdG1lZGl1bSA6IDMwLFxuXHRcdFx0XHRcdGxvbmcgOiA2MFxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0dm9sdW1lIDoge1xuXHRcdFx0XHRzdGVwIDogMC4xXG5cdFx0XHR9LFxuXHRcdFx0Y29udHJvbHMgOiB7XG5cdFx0XHRcdGNvbW1vbiA6IFtcblx0XHRcdFx0XHRbICdwbGF5JywgJ3ZvbHVtZScsICdkaXZpZGVyJywgJ3RpbWVsaW5lJywgJ2RpdmlkZXInLCAnZnVsbHNjcmVlbicgXSxcblx0XHRcdFx0XHRbICdyYXRlJywgJ2RpdmlkZXInLCAnYmFja3dhcmQnLCAnZGl2aWRlcicsICdzb3VyY2UnLCAnZGl2aWRlcicsICdzdWJ0aXRsZScsICdkaXZpZGVyJywgJ2Rvd25sb2FkJyBdXG5cdFx0XHRcdF0sXG5cdFx0XHRcdGZ1bGxzY3JlZW4gOiBbXG5cdFx0XHRcdFx0WyAncGxheScsICd2b2x1bWUnLCAnZGl2aWRlcicsICd0aW1lbGluZScsICdkaXZpZGVyJywgJ3JhdGUnLCAnZGl2aWRlcicsICdiYWNrd2FyZCcsICdkaXZpZGVyJywgJ3NvdXJjZScsICdkaXZpZGVyJywgJ3N1YnRpdGxlJywgJ2RpdmlkZXInLCAnZG93bmxvYWQnLCAnZGl2aWRlcicsICdmdWxsc2NyZWVuJyBdXG5cdFx0XHRcdF1cblx0XHRcdH1cblx0XHR9LCBvcHRzKTtcblxuXHRcdC8qKlxuXHRcdCAqIFRoaXMgY2xhc3MgbWFuYWdlcyBGdWxsU2NyZWVuIEFQSS5cblx0XHQgKiBAVE9ETzogYWRkIGZ1bGxzY3JlZW5lcnJvciBoYW5kbGVyLlxuXHRcdCAqL1xuXHRcdGNsYXNzIEZ1bGxzY3JlZW4ge1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gV2hldGhlciBicm93c2VyIHN1cHBvcnRzIGZ1bGxzY3JlZW4gbW9kZS5cblx0XHRcdCAqL1xuXHRcdFx0c3RhdGljIGVuYWJsZWQgKCkge1xuXHRcdFx0XHRyZXR1cm4gISEoZG9jdW1lbnQuZnVsbHNjcmVlbkVuYWJsZWQgfHwgZG9jdW1lbnQubW96RnVsbFNjcmVlbkVuYWJsZWQgfHwgZG9jdW1lbnQubXNGdWxsc2NyZWVuRW5hYmxlZCB8fCBkb2N1bWVudC53ZWJraXRTdXBwb3J0c0Z1bGxzY3JlZW4gfHwgZG9jdW1lbnQud2Via2l0RnVsbHNjcmVlbkVuYWJsZWQgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8nKS53ZWJraXRSZXF1ZXN0RnVsbFNjcmVlbik7XG5cdFx0XHR9XG5cblx0XHRcdHN0YXRpYyBoaWRlRWxlbWVudHMgKCkge1xuXHRcdFx0XHRjb250YWluZXIucmVtb3ZlQ2xhc3MoJ2Z1bGxzY3JlZW4nKTtcblx0XHRcdFx0Y29udHJvbHMuZnVsbHNjcmVlbi5oaWRlKCk7XG5cdFx0XHRcdGNvbnRyb2xzLmNvbW1vbi5zaG93KCk7XG5cdFx0XHRcdGNvbnRyb2xzLm1pbmkuaGlkZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdGF0aWMgaW5pdCAoKSB7XG5cdFx0XHRcdGlmICh0aGlzLmVuYWJsZWQoKSkge1xuXHRcdFx0XHRcdC8vIEZ1bGxzY3JlZW4gY2hhbmdlIGhhbmRsZXJzLlxuXHRcdFx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Z1bGxzY3JlZW5jaGFuZ2UnLCBmdW5jdGlvbiAoZSkge1xuXHRcdFx0XHRcdFx0RnVsbHNjcmVlbi50b2dnbGVFbGVtZW50cyghIShkb2N1bWVudC5mdWxsU2NyZWVuIHx8IGRvY3VtZW50LmZ1bGxzY3JlZW5FbGVtZW50KSk7XG5cdFx0XHRcdFx0fSwgZmFsc2UpO1xuXHRcdFx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3dlYmtpdGZ1bGxzY3JlZW5jaGFuZ2UnLCBmdW5jdGlvbiAoZSkge1xuXHRcdFx0XHRcdFx0RnVsbHNjcmVlbi50b2dnbGVFbGVtZW50cyghIWRvY3VtZW50LndlYmtpdElzRnVsbFNjcmVlbik7XG5cdFx0XHRcdFx0fSwgZmFsc2UpO1xuXHRcdFx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vemZ1bGxzY3JlZW5jaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRGdWxsc2NyZWVuLnRvZ2dsZUVsZW1lbnRzKCEhZG9jdW1lbnQubW96RnVsbFNjcmVlbik7XG5cdFx0XHRcdFx0fSwgZmFsc2UpO1xuXHRcdFx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21zZnVsbHNjcmVlbmNoYW5nZScsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdEZ1bGxzY3JlZW4udG9nZ2xlRWxlbWVudHMoISFkb2N1bWVudC5tc0Z1bGxzY3JlZW5FbGVtZW50KTtcblx0XHRcdFx0XHR9LCBmYWxzZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gV2hldGhlciBicm93c2VyIGlzIGluIGZ1bGxzY3JlZW4gbW9kZS5cblx0XHRcdCAqL1xuXHRcdFx0c3RhdGljIGlzICgpIHtcblx0XHRcdFx0cmV0dXJuICEhKGRvY3VtZW50LmZ1bGxTY3JlZW4gfHwgZG9jdW1lbnQud2Via2l0SXNGdWxsU2NyZWVuIHx8IGRvY3VtZW50Lm1vekZ1bGxTY3JlZW4gfHwgZG9jdW1lbnQubXNGdWxsc2NyZWVuRWxlbWVudCB8fCBkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCk7XG5cdFx0XHR9XG5cblx0XHRcdHN0YXRpYyBzaG93RWxlbWVudHMgKCkge1xuXHRcdFx0XHRjb250YWluZXIuYWRkQ2xhc3MoJ2Z1bGxzY3JlZW4nKTtcblx0XHRcdFx0Y29udHJvbHMuZnVsbHNjcmVlbi5zaG93KCk7XG5cdFx0XHRcdGNvbnRyb2xzLmNvbW1vbi5oaWRlKCk7XG5cdFx0XHRcdGNvbnRyb2xzLm1pbmkuaGlkZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdGF0aWMgdG9nZ2xlICgpIHtcblx0XHRcdFx0aWYgKHRoaXMuaXMoKSkge1xuXHRcdFx0XHRcdGlmIChkb2N1bWVudC5leGl0RnVsbHNjcmVlbikgICAgICAgICAgICAgICAgZG9jdW1lbnQuZXhpdEZ1bGxzY3JlZW4oKTtcblx0XHRcdFx0XHRlbHNlIGlmIChkb2N1bWVudC5tb3pDYW5jZWxGdWxsU2NyZWVuKSAgICAgIGRvY3VtZW50Lm1vekNhbmNlbEZ1bGxTY3JlZW4oKTtcblx0XHRcdFx0XHRlbHNlIGlmIChkb2N1bWVudC53ZWJraXRDYW5jZWxGdWxsU2NyZWVuKSAgIGRvY3VtZW50LndlYmtpdENhbmNlbEZ1bGxTY3JlZW4oKTtcblx0XHRcdFx0XHRlbHNlIGlmIChkb2N1bWVudC5tc0V4aXRGdWxsc2NyZWVuKSAgICAgICAgIGRvY3VtZW50Lm1zRXhpdEZ1bGxzY3JlZW4oKTtcblx0XHRcdFx0XHR0aGlzLmhpZGVFbGVtZW50cygpOyAvLyBAVE9ETzogbWFrZSB0aGlzIG9ubHkgaWYgZnVsbHNjcmVlbiBmaXJlZC5cblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRsZXQgY29udGFpbmVyRWwgPSBjb250YWluZXJbIDAgXTtcblx0XHRcdFx0XHRpZiAoY29udGFpbmVyRWwucmVxdWVzdEZ1bGxTY3JlZW4pICAgICAgICAgICAgY29udGFpbmVyRWwucmVxdWVzdEZ1bGxTY3JlZW4oKTtcblx0XHRcdFx0XHRlbHNlIGlmIChjb250YWluZXJFbC53ZWJraXRSZXF1ZXN0RnVsbFNjcmVlbikgY29udGFpbmVyRWwud2Via2l0UmVxdWVzdEZ1bGxTY3JlZW4oKTtcblx0XHRcdFx0XHRlbHNlIGlmIChjb250YWluZXJFbC5tb3pSZXF1ZXN0RnVsbFNjcmVlbikgICAgY29udGFpbmVyRWwubW96UmVxdWVzdEZ1bGxTY3JlZW4oKTtcblx0XHRcdFx0XHRlbHNlIGlmIChjb250YWluZXJFbC5tc0V4aXRGdWxsc2NyZWVuKSAgICAgICAgY29udGFpbmVyRWwubXNSZXF1ZXN0RnVsbHNjcmVlbigpO1xuXHRcdFx0XHRcdHRoaXMuc2hvd0VsZW1lbnRzKCk7IC8vIEBUT0RPOiBtYWtlIHRoaXMgb25seSBpZiBmdWxsc2NyZWVuIGZpcmVkLlxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8qKlxuXHRcdFx0ICogVXBkYXRlIERPTSBzdHJ1Y3R1cmUgYWNjb3JkaW5nIHRvIGN1cnJlbnQgc3RhdGUuXG5cdFx0XHQgKi9cblx0XHRcdHN0YXRpYyB0b2dnbGVFbGVtZW50cyAoc2hvdykge1xuXHRcdFx0XHRpZiAoISFzaG93KSB7XG5cdFx0XHRcdFx0dGhpcy5zaG93RWxlbWVudHMoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHR0aGlzLmhpZGVFbGVtZW50cygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y2xhc3MgVmlkZW8ge1xuXHRcdFx0Y29uc3RydWN0b3IgKGN0eCkge1xuXHRcdFx0XHR0aGlzLl9jdHggPSBjdHg7XG5cdFx0XHRcdHRoaXMuX3ZpZGVvID0gY3R4WyAwIF07XG5cdFx0XHRcdC8vIHRoaXMuZnVsbHNjcmVlbiA9IG5ldyBGdWxsc2NyZWVuKCk7XG5cdFx0XHRcdHRoaXMuc3VidGl0bGVzID0gW107XG5cdFx0XHRcdHRoaXMucGxheWJhY2tSYXRlID0gdGhpcy5fdmlkZW8ucGxheWJhY2tSYXRlO1xuXHRcdFx0fVxuXG5cdFx0XHRnZXQgY3VycmVudFRpbWUgKCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5fdmlkZW8uY3VycmVudFRpbWU7XG5cdFx0XHR9XG5cblx0XHRcdGdldCBkdXJhdGlvbiAoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLl92aWRlby5kdXJhdGlvbjtcblx0XHRcdH1cblxuXHRcdFx0Z2V0IHJhdGUgKCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5fdmlkZW8ucGxheWJhY2tSYXRlO1xuXHRcdFx0fVxuXG5cdFx0XHRzZXQgcmF0ZSAodmFsdWUpIHtcblx0XHRcdFx0dGhpcy5fdmlkZW8ucGxheWJhY2tSYXRlID0gdmFsdWU7XG5cdFx0XHR9XG5cblx0XHRcdHNldCB0cmFjayAodmFsdWUpIHtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl92aWRlby50ZXh0VHJhY2tzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aWYgKHRoaXMuX3ZpZGVvLnRleHRUcmFja3NbIGkgXS5sYW5ndWFnZSA9PSB2YWx1ZSlcblx0XHRcdFx0XHRcdHRoaXMuX3ZpZGVvLnRleHRUcmFja3NbIGkgXS5tb2RlID0gJ3Nob3dpbmcnO1xuXHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdHRoaXMuX3ZpZGVvLnRleHRUcmFja3NbIGkgXS5tb2RlID0gJ2hpZGRlbic7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0c2V0IHZvbHVtZSAodmFsdWUpIHtcblx0XHRcdFx0dGhpcy5fdmlkZW8udm9sdW1lID0gdmFsdWU7XG5cdFx0XHRcdHRoaXMuX3ZpZGVvLm11dGUgPSAodmFsdWUgPCBlbnYudm9sdW1lLm11dGVsaW1pdCk7XG5cdFx0XHR9XG5cblx0XHRcdGRlY3JlYXNlUmF0ZSAoKSB7XG5cdFx0XHRcdGlmICh0aGlzLl92aWRlby5wbGF5YmFja1JhdGUgPiBvcHRpb25zLnJhdGUubWluKSB7XG5cdFx0XHRcdFx0dGhpcy5fdmlkZW8ucGxheWJhY2tSYXRlIC09IG9wdGlvbnMucmF0ZS5zdGVwO1xuXHRcdFx0XHRcdGNvbnRyb2xzLnJhdGUgPSB0aGlzLl92aWRlby5wbGF5YmFja1JhdGU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aW5jcmVhc2VSYXRlICgpIHtcblx0XHRcdFx0aWYgKHRoaXMuX3ZpZGVvLnBsYXliYWNrUmF0ZSA8IG9wdGlvbnMucmF0ZS5tYXgpIHtcblx0XHRcdFx0XHR0aGlzLl92aWRlby5wbGF5YmFja1JhdGUgKz0gb3B0aW9ucy5yYXRlLnN0ZXA7XG5cdFx0XHRcdFx0Y29udHJvbHMucmF0ZSA9IHRoaXMuX3ZpZGVvLnBsYXliYWNrUmF0ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpbml0ICgpIHtcblx0XHRcdFx0dGhpcy5faW5pdFN1YnRpdGxlcygpO1xuXHRcdFx0XHR0aGlzLl9pbml0VmlkZW8oKTtcblx0XHRcdFx0dGhpcy5faW5pdFJhdGUoKTtcblx0XHRcdH1cblxuXHRcdFx0dG9nZ2xlUGxheSAoKSB7XG5cdFx0XHRcdGlmICghdGhpcy5fdmlkZW8ucGxheWVkIHx8IHRoaXMuX3ZpZGVvLnBhdXNlZCkge1xuXHRcdFx0XHRcdG92ZXJsYXkuaGlkZSgpO1xuXHRcdFx0XHRcdHRoaXMucGxheSgpO1xuXHRcdFx0XHRcdGNvbnRyb2xzLnBsYXkoKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRvdmVybGF5LnNob3coKTtcblx0XHRcdFx0XHR0aGlzLnBhdXNlKCk7XG5cdFx0XHRcdFx0Y29udHJvbHMucGF1c2UoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRzZWVrICh0aW1lKSB7XG5cdFx0XHRcdHRoaXMuX3ZpZGVvLmN1cnJlbnRUaW1lID0gdGltZTtcblx0XHRcdH1cblxuXHRcdFx0cGxheSAoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLl92aWRlby5wbGF5KCk7XG5cdFx0XHR9XG5cblx0XHRcdHBhdXNlICgpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuX3ZpZGVvLnBhdXNlKCk7XG5cdFx0XHR9XG5cblx0XHRcdF9pbml0UmF0ZSAoKSB7XG5cdFx0XHRcdHRoaXMuX3ZpZGVvLnBsYXliYWNrUmF0ZSA9IENvb2tpZS5nZXQoJ3JhdGUnLCAxKTtcblx0XHRcdFx0Y29udHJvbHMucmF0ZSA9IHRoaXMuX3ZpZGVvLnBsYXliYWNrUmF0ZTtcblx0XHRcdH1cblxuXHRcdFx0X2luaXRTdWJ0aXRsZXMgKCkge1xuXHRcdFx0XHRsZXQgX3NlbGYgPSB0aGlzO1xuXHRcdFx0XHR0aGlzLl9jdHguY2hpbGRyZW4oJ3RyYWNrW2tpbmQ9XCJzdWJ0aXRsZXNcIl0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRsZXQgbGFuZ3VhZ2UgPSAkKHRoaXMpLmF0dHIoJ3NyY2xhbmcnKTtcblx0XHRcdFx0XHRsZXQgdGl0bGUgPSAkKHRoaXMpLmF0dHIoJ2xhYmVsJyk7XG5cdFx0XHRcdFx0bGV0IHNyYyA9ICQodGhpcykuYXR0cignc3JjJyk7XG5cdFx0XHRcdFx0aWYgKHRpdGxlLmxlbmd0aCA+IDAgJiYgc3JjLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRcdF9zZWxmLnN1YnRpdGxlcy5wdXNoKHtcblx0XHRcdFx0XHRcdFx0dGl0bGUgOiB0aXRsZSxcblx0XHRcdFx0XHRcdFx0c3JjIDogc3JjLFxuXHRcdFx0XHRcdFx0XHRsYW5ndWFnZSA6IGxhbmd1YWdlXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHRfaW5pdFZpZGVvICgpIHtcblx0XHRcdFx0aWYgKHRoaXMuX3ZpZGVvLnJlYWR5U3RhdGUgPiBIVE1MTWVkaWFFbGVtZW50LkhBVkVfTk9USElORykge1xuXHRcdFx0XHRcdHRoaXMuX2luaXRWaWRlb0V2ZW50KCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5fdmlkZW8ub25sb2FkZWRtZXRhZGF0YSA9ICgpID0+IHtcblx0XHRcdFx0XHRcdHRoaXMuX2luaXRWaWRlb0V2ZW50KCk7XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRfaW5pdFZpZGVvRXZlbnQgKCkge1xuXHRcdFx0XHRsZXQgX3NlbGYgPSB0aGlzO1xuXG5cdFx0XHRcdG92ZXJsYXkuY3NzKCdsaW5lLWhlaWdodCcsIHRoaXMuX3ZpZGVvLmNsaWVudEhlaWdodCArICdweCcpO1xuXHRcdFx0XHRjb250YWluZXIuY3NzKCd3aWR0aCcsIHRoaXMuX3ZpZGVvLmNsaWVudFdpZHRoICsgJ3B4Jyk7XG5cblx0XHRcdFx0dGhpcy5fdmlkZW8ub250aW1ldXBkYXRlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdGNvbnRyb2xzLm1vdmVUaW1lTWFya2VyKCk7XG5cdFx0XHRcdH07XG5cblx0XHRcdFx0Ly8gVGhpcyBpcyBnZW5lcmFsbHkgZm9yIEZpcmVmb3ggb25seVxuXHRcdFx0XHQvLyBiZWNhdXNlIGl0IHNvbWVob3cgcmVzZXRzIHRyYWNrIGxpc3Rcblx0XHRcdFx0Ly8gZm9yIHZpZGVvIGVsZW1lbnQgYWZ0ZXIgRE9NIG1hbmlwdWxhdGlvbi5cblxuXHRcdFx0XHRpZiAodGhpcy5fdmlkZW8udGV4dFRyYWNrcy5sZW5ndGggPT0gMCAmJiB0aGlzLnN1YnRpdGxlcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0dGhpcy5fY3R4LmNoaWxkcmVuKCd0cmFja1traW5kPVwic3VidGl0bGVzXCJdJykucmVtb3ZlKCk7XG5cdFx0XHRcdFx0Zm9yICh2YXIgaSBpbiB0aGlzLnN1YnRpdGxlcykge1xuXHRcdFx0XHRcdFx0aWYgKHRoaXMuc3VidGl0bGVzLmhhc093blByb3BlcnR5KGkpKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMuX2N0eFxuXHRcdFx0XHRcdFx0XHRcdC5hcHBlbmQoJCgnPHRyYWNrLz4nKVxuXHRcdFx0XHRcdFx0XHRcdFx0LmF0dHIoJ2xhYmVsJywgdGhpcy5zdWJ0aXRsZXNbIGkgXS50aXRsZSlcblx0XHRcdFx0XHRcdFx0XHRcdC5hdHRyKCdzcmMnLCB0aGlzLnN1YnRpdGxlc1sgaSBdLnNyYylcblx0XHRcdFx0XHRcdFx0XHRcdC5hdHRyKCdzcmNsYW5nJywgdGhpcy5zdWJ0aXRsZXNbIGkgXS5sYW5ndWFnZSlcblx0XHRcdFx0XHRcdFx0XHRcdC5hdHRyKCdpZCcsIHRoaXMuc3VidGl0bGVzWyBpIF0ubGFuZ3VhZ2UpXG5cdFx0XHRcdFx0XHRcdFx0XHQuYXR0cigna2luZCcsICdzdWJ0aXRsZXMnKSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdEZ1bGxzY3JlZW4uaW5pdCgpO1xuXHRcdFx0XHRjb250cm9scy5pbml0KCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y2xhc3MgQ29udHJvbCB7XG5cdFx0XHRjb25zdHJ1Y3RvciAoY3NzQ2xhc3MsIGljb25DbGFzcykge1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQgPSAkKCc8ZGl2IC8+Jylcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2NvbnRyb2wgJyArIGNzc0NsYXNzKVxuXHRcdFx0XHRcdC5hcHBlbmQoJCgnPGkgLz4nKVxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCdmYSBmYS0nICsgaWNvbkNsYXNzKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0YXRpYyBkaXZpZGVyICgpIHtcblx0XHRcdFx0cmV0dXJuICQoJzxkaXYgLz4nKS5hZGRDbGFzcygnZGl2aWRlcicpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdGF0aWMgY3JlYXRlIChuYW1lKSB7XG5cdFx0XHRcdHN3aXRjaCAobmFtZSkge1xuXHRcdFx0XHRcdGNhc2UgQ19CQUNLV0FSRDpcblx0XHRcdFx0XHRcdHJldHVybiBuZXcgQmFja3dhcmRDb250cm9sKCk7XG5cblx0XHRcdFx0XHRjYXNlIENfRElWSURFUjpcblx0XHRcdFx0XHRcdHJldHVybiB0aGlzLmRpdmlkZXIoKTtcblxuXHRcdFx0XHRcdGNhc2UgQ19ET1dOTE9BRDpcblx0XHRcdFx0XHRcdHJldHVybiBuZXcgRG93bmxvYWRDb250cm9sKCk7XG5cblx0XHRcdFx0XHRjYXNlIENfRk9SV0FSRDpcblx0XHRcdFx0XHRcdHJldHVybiBuZXcgRm9yd2FyZENvbnRyb2woKTtcblxuXHRcdFx0XHRcdGNhc2UgQ19GVUxMU0NSRUVOOlxuXHRcdFx0XHRcdFx0cmV0dXJuIG5ldyBGdWxsc2NyZWVuQ29udHJvbCgpO1xuXG5cdFx0XHRcdFx0Y2FzZSBDX1BMQVk6XG5cdFx0XHRcdFx0XHRyZXR1cm4gbmV3IFBsYXlDb250cm9sKCk7XG5cblx0XHRcdFx0XHRjYXNlIENfUkFURTpcblx0XHRcdFx0XHRcdHJldHVybiBuZXcgUmF0ZUNvbnRyb2woKTtcblxuXHRcdFx0XHRcdGNhc2UgQ19TT1VSQ0U6XG5cdFx0XHRcdFx0XHRyZXR1cm4gbmV3IFNvdXJjZUNvbnRyb2woKTtcblxuXHRcdFx0XHRcdGNhc2UgQ19TVUJUSVRMRTpcblx0XHRcdFx0XHRcdHJldHVybiBuZXcgU3VidGl0bGVDb250cm9sKCk7XG5cblx0XHRcdFx0XHRjYXNlIENfVElNRUxJTkU6XG5cdFx0XHRcdFx0XHRyZXR1cm4gbmV3IFRpbWVsaW5lQ29udHJvbCgpO1xuXG5cdFx0XHRcdFx0Y2FzZSBDX1ZPTFVNRTpcblx0XHRcdFx0XHRcdHJldHVybiBuZXcgVm9sdW1lQ29udHJvbCgpO1xuXG5cdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y2xhc3MgQ29udHJvbFRleHQge1xuXHRcdFx0Y29uc3RydWN0b3IgKGNsYXNzbmFtZSkge1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQgPSAkKCc8ZGl2IC8+JykuYWRkQ2xhc3MoJ2NvbnRyb2wtdGV4dCAnICsgY2xhc3NuYW1lKTtcblx0XHRcdH1cblxuXHRcdFx0c2V0IHRleHQgKHZhbHVlKSB7XG5cdFx0XHRcdHRoaXMuZWxlbWVudC5odG1sKHZhbHVlKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRjbGFzcyBDb250cm9sQ29udGFpbmVyIHtcblx0XHRcdGNvbnN0cnVjdG9yIChpY29uQ2xhc3MpIHtcblx0XHRcdFx0bGV0IF9zZWxmID0gdGhpcztcblx0XHRcdFx0dGhpcy5pY29uQ2xhc3MgPSBpY29uQ2xhc3M7XG5cdFx0XHRcdHRoaXMuaWNvbiA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0XHRcdC5hZGRDbGFzcygnY29udHJvbC1pY29uJylcblx0XHRcdFx0XHQuYXBwZW5kKCQoJzxpIC8+Jylcblx0XHRcdFx0XHRcdC5hZGRDbGFzcygnZmEgZmEtJyArIGljb25DbGFzcykpO1xuXHRcdFx0XHR0aGlzLmxpc3RFbGVtZW50ID0gJCgnPGRpdi8+JykuYWRkQ2xhc3MoJ2NvbnRyb2wtaW5uZXInKTtcblx0XHRcdFx0dGhpcy5lbGVtZW50ID0gJCgnPGRpdiAvPicpXG5cdFx0XHRcdFx0LmFkZENsYXNzKCdjb250cm9sIGNvbnRyb2wtY29udGFpbmVyJylcblx0XHRcdFx0XHQuYXBwZW5kKHRoaXMuaWNvbilcblx0XHRcdFx0XHQuYXBwZW5kKHRoaXMubGlzdEVsZW1lbnQpO1xuXHRcdFx0XHR0aGlzLl9pbmRleCA9IDA7XG5cdFx0XHRcdHRoaXMubGlzdCA9IFtdO1xuXHRcdFx0XHR0aGlzLmljb24uY2xpY2soZnVuY3Rpb24gKCkgeyBfc2VsZi5vbkNvbnRhaW5lckNsaWNrKCk7IH0pO1xuXHRcdFx0fVxuXG5cdFx0XHRnZXQgYWN0aXZlICgpIHtcblx0XHRcdFx0Zm9yIChsZXQgaSBpbiB0aGlzLmxpc3QpXG5cdFx0XHRcdFx0aWYgKHRoaXMubGlzdFsgaSBdLmhhc0NsYXNzKCdhY3RpdmUnKSlcblx0XHRcdFx0XHRcdHJldHVybiB0aGlzLmxpc3RbIGkgXTtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cblx0XHRcdHNldCBhY3RpdmUgKGluZGV4KSB7XG5cdFx0XHRcdGxldCBoYXNBY3RpdmUgPSBmYWxzZTtcblx0XHRcdFx0Zm9yIChsZXQgaSBpbiB0aGlzLmxpc3QpIHtcblx0XHRcdFx0XHRpZiAodGhpcy5saXN0WyBpIF0uZGF0YSgnaW5kZXgnKSA9PSBpbmRleCkge1xuXHRcdFx0XHRcdFx0dGhpcy5saXN0WyBpIF0uYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0XHRcdFx0dGhpcy5pY29uLmh0bWwodGhpcy5saXN0WyBpIF0uaHRtbCgpKTtcblx0XHRcdFx0XHRcdGhhc0FjdGl2ZSA9IHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdHRoaXMubGlzdFsgaSBdLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIWhhc0FjdGl2ZSlcblx0XHRcdFx0XHR0aGlzLmljb24uaHRtbCgkKCc8aSAvPicpLmFkZENsYXNzKCdmYSBmYS0nICsgdGhpcy5pY29uQ2xhc3MpKTtcblx0XHRcdH1cblxuXHRcdFx0YWRkSXRlbSAodGV4dCwgZGF0YSkge1xuXHRcdFx0XHRsZXQgX3NlbGYgPSB0aGlzO1xuXHRcdFx0XHR2YXIgaXRlbSA9ICQoJzxkaXYgLz4nKS5hZGRDbGFzcygnaW5uZXItaXRlbScpLmRhdGEoJ2luZGV4JywgdGhpcy5faW5kZXgpLmh0bWwodGV4dCkuY2xpY2soZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdF9zZWxmLm9uSXRlbUNsaWNrKCQodGhpcykuZGF0YSgnaW5kZXgnKSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRpZiAodHlwZW9mIGRhdGEgPT0gJ29iamVjdCcpIHtcblx0XHRcdFx0XHRmb3IgKGxldCBrIGluIGRhdGEpXG5cdFx0XHRcdFx0XHRpdGVtLmRhdGEoaywgZGF0YVsgayBdKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLl9pbmRleCsrO1xuXHRcdFx0XHR0aGlzLmxpc3QucHVzaChpdGVtKTtcblx0XHRcdFx0dGhpcy5saXN0RWxlbWVudC5hcHBlbmQoaXRlbSk7XG5cblx0XHRcdFx0cmV0dXJuIGl0ZW07XG5cdFx0XHR9XG5cblx0XHRcdGRpc2FibGUgKCkge1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XG5cdFx0XHR9XG5cblx0XHRcdGdldEJ5SW5kZXggKGluZGV4KSB7XG5cdFx0XHRcdGZvciAobGV0IGkgaW4gdGhpcy5saXN0KVxuXHRcdFx0XHRcdGlmICh0aGlzLmxpc3RbIGkgXS5kYXRhKCdpbmRleCcpID09IGluZGV4KVxuXHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMubGlzdFsgaSBdO1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblxuXHRcdFx0b25Db250YWluZXJDbGljayAoKSB7XG5cdFx0XHR9XG5cblx0XHRcdG9uSXRlbUNsaWNrIChpbmRleCkge1xuXHRcdFx0XHR0aGlzLmFjdGl2ZSA9IGluZGV4O1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGNsYXNzIEJhY2t3YXJkQ29udHJvbCBleHRlbmRzIENvbnRyb2wge1xuXHRcdFx0Y29uc3RydWN0b3IgKCkge1xuXHRcdFx0XHRzdXBlcignYmFja3dhcmQnLCAndW5kbycpO1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQuY2xpY2soZSA9PiB7XG5cdFx0XHRcdFx0aWYgKHZpZGVvLmN1cnJlbnRUaW1lIC0gb3B0aW9ucy5wbGF5YmFjay5zdGVwLm1lZGl1bSA+IDApXG5cdFx0XHRcdFx0XHR2aWRlby5zZWVrKHZpZGVvLmN1cnJlbnRUaW1lIC0gb3B0aW9ucy5wbGF5YmFjay5zdGVwLm1lZGl1bSk7XG5cdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0dmlkZW8uc2VlaygwKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y2xhc3MgRG93bmxvYWRDb250cm9sIGV4dGVuZHMgQ29udHJvbCB7XG5cdFx0XHRjb25zdHJ1Y3RvciAoKSB7XG5cdFx0XHRcdHN1cGVyKCcnLCAnJyk7XG5cdFx0XHRcdHRoaXMuZWxlbWVudCA9ICQoJzxhIC8+JykuYXR0cignaHJlZicsICcnKS5hdHRyKCd0YXJnZXQnLCAnX2JsYW5rJykuYXR0cignZG93bmxvYWQnLCAnJykuYWRkQ2xhc3MoJ2NvbnRyb2wgZG93bmxvYWQnKS5hcHBlbmQoJCgnPGkgLz4nKS5hZGRDbGFzcygnZmEgZmEtZG93bmxvYWQnKSk7XG5cdFx0XHR9XG5cblx0XHRcdHNldCBsaW5rICh2YWx1ZSkge1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQuYXR0cignaHJlZicsIHZhbHVlKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRjbGFzcyBGb3J3YXJkQ29udHJvbCBleHRlbmRzIENvbnRyb2wge1xuXHRcdFx0Y29uc3RydWN0b3IgKCkge1xuXHRcdFx0XHRzdXBlcignZm9yd2FyZCcsICdyZWRvJyk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y2xhc3MgRnVsbHNjcmVlbkNvbnRyb2wgZXh0ZW5kcyBDb250cm9sIHtcblx0XHRcdGNvbnN0cnVjdG9yICgpIHtcblx0XHRcdFx0c3VwZXIoJ2Z1bGxzY3JlZW4nLCAnYXJyb3dzLWFsdCcpO1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQuY2xpY2soZSA9PiB7XG5cdFx0XHRcdFx0RnVsbHNjcmVlbi50b2dnbGUoKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y2xhc3MgUGxheUNvbnRyb2wgZXh0ZW5kcyBDb250cm9sIHtcblx0XHRcdGNvbnN0cnVjdG9yICgpIHtcblx0XHRcdFx0c3VwZXIoJ3BsYXknLCAncGxheScpO1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQuY2xpY2soZSA9PiB7XG5cdFx0XHRcdFx0dmlkZW8udG9nZ2xlUGxheSgpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0cGF1c2UgKCkge1xuXHRcdFx0XHR0aGlzLmVsZW1lbnRcblx0XHRcdFx0XHQuY2hpbGRyZW4oJy5mYScpXG5cdFx0XHRcdFx0LnJlbW92ZUNsYXNzKCdmYS1wYXVzZScpXG5cdFx0XHRcdFx0LmFkZENsYXNzKCdmYS1wbGF5Jyk7XG5cdFx0XHR9XG5cblx0XHRcdHBsYXkgKCkge1xuXHRcdFx0XHR0aGlzLmVsZW1lbnRcblx0XHRcdFx0XHQuY2hpbGRyZW4oJy5mYScpXG5cdFx0XHRcdFx0LnJlbW92ZUNsYXNzKCdmYS1wbGF5Jylcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2ZhLXBhdXNlJyk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y2xhc3MgUmF0ZUNvbnRyb2wge1xuXHRcdFx0Y29uc3RydWN0b3IgKCkge1xuXHRcdFx0XHR0aGlzLmRvd24gPSBuZXcgQ29udHJvbCgncmF0ZS1kb3duJywgJ2JhY2t3YXJkJyk7XG5cdFx0XHRcdHRoaXMudXAgPSBuZXcgQ29udHJvbCgncmF0ZS11cCcsICdmb3J3YXJkJyk7XG5cdFx0XHRcdHRoaXMuY3VycmVudCA9IG5ldyBDb250cm9sVGV4dCgncmF0ZS1jdXJyZW50Jyk7XG5cblx0XHRcdFx0dGhpcy5kb3duLmVsZW1lbnQuY2xpY2soZSA9PiB7XG5cdFx0XHRcdFx0dmlkZW8uZGVjcmVhc2VSYXRlKCk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdHRoaXMudXAuZWxlbWVudC5jbGljayhlID0+IHtcblx0XHRcdFx0XHR2aWRlby5pbmNyZWFzZVJhdGUoKTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0dGhpcy5lbGVtZW50ID0gJCgnPGRpdiAvPicpXG5cdFx0XHRcdFx0LmFkZENsYXNzKCdjb250cm9sLWNvbnRhaW5lcicpXG5cdFx0XHRcdFx0LmFwcGVuZCh0aGlzLmRvd24uZWxlbWVudClcblx0XHRcdFx0XHQuYXBwZW5kKHRoaXMuY3VycmVudC5lbGVtZW50KVxuXHRcdFx0XHRcdC5hcHBlbmQodGhpcy51cC5lbGVtZW50KTtcblx0XHRcdH1cblxuXHRcdFx0c2V0ICh2YWx1ZSkge1xuXHRcdFx0XHR0aGlzLnVwLmVsZW1lbnQucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkJyk7XG5cdFx0XHRcdHRoaXMuZG93bi5lbGVtZW50LnJlbW92ZUNsYXNzKCdkaXNhYmxlZCcpO1xuXHRcdFx0XHRpZiAodmlkZW8ucmF0ZSA8PSBvcHRpb25zLnJhdGUubWluKVxuXHRcdFx0XHRcdHRoaXMuZG93bi5lbGVtZW50LmFkZENsYXNzKCdkaXNhYmxlZCcpO1xuXHRcdFx0XHRlbHNlIGlmICh2aWRlby5yYXRlID49IG9wdGlvbnMucmF0ZS5tYXgpXG5cdFx0XHRcdFx0dGhpcy51cC5lbGVtZW50LmFkZENsYXNzKCdkaXNhYmxlZCcpO1xuXHRcdFx0XHR0aGlzLnNob3coKTtcblx0XHRcdH1cblxuXHRcdFx0c2hvdyAoKSB7XG5cdFx0XHRcdHRoaXMuY3VycmVudC50ZXh0ID0gJ8OXJyArIHZpZGVvLnJhdGUudG9GaXhlZCgyKS50b1N0cmluZygpLnJlcGxhY2UoJywnLCAnLicpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGNsYXNzIFNvdXJjZUNvbnRyb2wgZXh0ZW5kcyBDb250cm9sQ29udGFpbmVyIHtcblx0XHRcdGNvbnN0cnVjdG9yICgpIHtcblx0XHRcdFx0c3VwZXIoJ2J1bGxzZXllJyk7XG5cdFx0XHRcdC8qKiBUT0RPOiBNb3ZlIHNvdXJjZXMgdG8gdGhlIGFyZ3VtZW50cyBpbiBjb25zdHJvciAqL1xuXHRcdFx0XHRpZiAoc291cmNlcy5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdFx0Zm9yICh2YXIgaSBpbiBzb3VyY2VzKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmFkZEl0ZW0oc291cmNlc1sgaSBdLnRpdGxlLCB7IHNyYyA6IHNvdXJjZXNbIGkgXS5zcmMgfSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHNldCAoaW5kZXgpIHtcblx0XHRcdFx0LyoqIFRPRE86IEVtaXQgZXZlbnQgb24gc2V0IHNvdXJjZSovXG5cdFx0XHRcdGxldCBzID0gdGhpcy5nZXRCeUluZGV4KGluZGV4KTtcblx0XHRcdFx0aWYgKHMgIT0gbnVsbCkge1xuXHRcdFx0XHRcdGVsZW1lbnQuYXR0cignc3JjJywgcy5kYXRhKCdzcmMnKSk7XG5cdFx0XHRcdFx0Y29udHJvbHMuZG93bmxvYWQgPSBzLmRhdGEoJ3NyYycpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdG9uSXRlbUNsaWNrIChpbmRleCkge1xuXHRcdFx0XHRzdXBlci5vbkl0ZW1DbGljayhpbmRleCk7XG5cdFx0XHRcdHRoaXMuc2V0KGluZGV4KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRjbGFzcyBTdWJ0aXRsZUNvbnRyb2wgZXh0ZW5kcyBDb250cm9sQ29udGFpbmVyIHtcblx0XHRcdGNvbnN0cnVjdG9yICgpIHtcblx0XHRcdFx0c3VwZXIoJ2NvbW1lbnRpbmctbycpO1xuXHRcdFx0fVxuXG5cdFx0XHRpbml0ICgpIHtcblx0XHRcdFx0aWYgKHZpZGVvLnN1YnRpdGxlcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0Zm9yICh2YXIgaSBpbiB2aWRlby5zdWJ0aXRsZXMpIHtcblx0XHRcdFx0XHRcdGlmICh2aWRlby5zdWJ0aXRsZXMuaGFzT3duUHJvcGVydHkoaSkpIHtcblx0XHRcdFx0XHRcdFx0bGV0IGl0ZW0gPSB2aWRlby5zdWJ0aXRsZXNbIGkgXTtcblx0XHRcdFx0XHRcdFx0dGhpcy5hZGRJdGVtKGl0ZW0udGl0bGUsIHtcblx0XHRcdFx0XHRcdFx0XHRzcmMgOiBpdGVtLnNyYyxcblx0XHRcdFx0XHRcdFx0XHRsYW5ndWFnZSA6IGl0ZW0ubGFuZ3VhZ2Vcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHR0aGlzLmRpc2FibGUoKTtcblx0XHRcdH1cblxuXHRcdFx0b25Db250YWluZXJDbGljayAoKSB7XG5cdFx0XHRcdHN1cGVyLm9uQ29udGFpbmVyQ2xpY2soKTtcblx0XHRcdFx0dGhpcy5vbkl0ZW1DbGljaygtMSk7XG5cdFx0XHR9XG5cblx0XHRcdG9uSXRlbUNsaWNrIChpbmRleCkge1xuXHRcdFx0XHRzdXBlci5vbkl0ZW1DbGljayhpbmRleCk7XG5cdFx0XHRcdGxldCB0ID0gdGhpcy5nZXRCeUluZGV4KGluZGV4KTtcblx0XHRcdFx0aWYgKHQgIT0gbnVsbClcblx0XHRcdFx0XHR2aWRlby50cmFjayA9IHQuZGF0YSgnbGFuZ3VhZ2UnKTtcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdHZpZGVvLnRyYWNrID0gLTE7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y2xhc3MgVGltZWxpbmVDb250cm9sIHtcblx0XHRcdGNvbnN0cnVjdG9yICgpIHtcblx0XHRcdFx0bGV0IF9zZWxmID0gdGhpcyxcblx0XHRcdFx0XHRkdXJhdGlvbiA9IHZpZGVvLmR1cmF0aW9uO1xuXG5cdFx0XHRcdHRoaXMuZHJhZyA9IGZhbHNlO1xuXG5cdFx0XHRcdHRoaXMuY3VycmVudCA9IG5ldyBDb250cm9sVGV4dCgndGltZS1jdXJyZW50Jyk7XG5cdFx0XHRcdHRoaXMudG90YWwgPSBuZXcgQ29udHJvbFRleHQoJ3RpbWUtdG90YWwnKTtcblxuXHRcdFx0XHR0aGlzLm1hcmtlciA9ICQoJzxkaXYgLz4nKS5hZGRDbGFzcygndGltZS1tYXJrZXInKTtcblxuXHRcdFx0XHR0aGlzLm1hcmtlclNoYWRvdyA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0XHRcdC5hZGRDbGFzcygndGltZS1tYXJrZXIgc2hhZG93Jylcblx0XHRcdFx0XHQuYXBwZW5kKClcblx0XHRcdFx0XHQuaGlkZSgpO1xuXG5cdFx0XHRcdHRoaXMubWFya2VyU2hhZG93VGltZSA9ICQoJzxkaXYgLz4nKS5hZGRDbGFzcygndGltZScpO1xuXHRcdFx0XHR0aGlzLm1hcmtlclRpbWUgPSAkKCc8ZGl2IC8+Jylcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3RpbWUnKVxuXHRcdFx0XHRcdC5oaWRlKCk7XG5cdFx0XHRcdHRoaXMucGxheWVkID0gJCgnPGRpdiAvPicpLmFkZENsYXNzKCd0aW1lLXBsYXllZCcpO1xuXHRcdFx0XHR0aGlzLmN1cnJlbnQudGV4dCA9ICcwMDowMCc7XG5cdFx0XHRcdHRoaXMubGluZSA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0XHRcdC5hZGRDbGFzcygndGltZWxpbmUnKVxuXHRcdFx0XHRcdC5hcHBlbmQodGhpcy5tYXJrZXIuYXBwZW5kKHRoaXMubWFya2VyVGltZSkpXG5cdFx0XHRcdFx0LmFwcGVuZCh0aGlzLm1hcmtlclNoYWRvdy5hcHBlbmQodGhpcy5tYXJrZXJTaGFkb3dUaW1lKSlcblx0XHRcdFx0XHQuYXBwZW5kKHRoaXMucGxheWVkKVxuXHRcdFx0XHRcdC5vbih7XG5cdFx0XHRcdFx0XHQnbW91c2Vtb3ZlJyA6IChlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLmRyYWcpIHJldHVybjtcblxuXHRcdFx0XHRcdFx0XHRsZXQgcCA9IHRoaXMuZ2V0UG9zaXRpb24oZS5wYWdlWCk7XG5cdFx0XHRcdFx0XHRcdGlmIChwID4gMCAmJiBwIDwgMSkge1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMubWFya2VyU2hhZG93LnNob3coKTtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLm1hcmtlclNoYWRvdy5jc3MoJ2xlZnQnLCBwICogMTAwICsgJyUnKTtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLm1hcmtlclNoYWRvd1RpbWUuaHRtbChzZWNvbmRzVG9UaW1lKGR1cmF0aW9uICogcCkpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdFx0XHR0aGlzLm1hcmtlclNoYWRvdy5oaWRlKCk7XG5cdFx0XHRcdFx0XHR9LFxuXG5cdFx0XHRcdFx0XHQnbW91c2VsZWF2ZScgOiAoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5kcmFnKSByZXR1cm47XG5cdFx0XHRcdFx0XHRcdHRoaXMubWFya2VyU2hhZG93LmhpZGUoKVxuXHRcdFx0XHRcdFx0fSxcblxuXHRcdFx0XHRcdFx0J2NsaWNrJyA6IChlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLmRyYWcpIHJldHVybjtcblx0XHRcdFx0XHRcdFx0dmlkZW8uc2Vlayh2aWRlby5kdXJhdGlvbiAqIHRoaXMuZ2V0UG9zaXRpb24oZS5wYWdlWCkpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdHRoaXMuZWxlbWVudCA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0XHRcdC5hZGRDbGFzcygndGltZWxpbmUtY29udGFpbmVyJylcblx0XHRcdFx0XHQuYXBwZW5kKCQoJzxkaXYgLz4nKVxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCd0aW1lbGluZS1zdWJjb250YWluZXInKVxuXHRcdFx0XHRcdFx0LmFwcGVuZCh0aGlzLmN1cnJlbnQuZWxlbWVudClcblx0XHRcdFx0XHRcdC5hcHBlbmQodGhpcy5saW5lKVxuXHRcdFx0XHRcdFx0LmFwcGVuZCh0aGlzLnRvdGFsLmVsZW1lbnQpKTtcblxuXHRcdFx0XHR0aGlzLm1hcmtlci5vbignbW91c2Vkb3duJywgKGUpID0+IHtcblx0XHRcdFx0XHRpZiAoZS53aGljaCAhPSAxKSByZXR1cm47XG5cdFx0XHRcdFx0dGhpcy5tYXJrZXJTaGFkb3cuaGlkZSgpO1xuXHRcdFx0XHRcdHRoaXMuZHJhZyA9IHRydWU7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdCQoZG9jdW1lbnQpLm9uKHtcblxuXHRcdFx0XHRcdCdtb3VzZW1vdmUnIDogKGUpID0+IHtcblx0XHRcdFx0XHRcdGlmICghdGhpcy5kcmFnKSByZXR1cm47XG5cdFx0XHRcdFx0XHRsZXQgcCA9IHRoaXMuZ2V0UG9zaXRpb24oZS5wYWdlWCk7XG5cdFx0XHRcdFx0XHRpZiAocCA+IDAgJiYgcCA8IDEpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5tYXJrZXJUaW1lXG5cdFx0XHRcdFx0XHRcdFx0LnNob3coKVxuXHRcdFx0XHRcdFx0XHRcdC5odG1sKHNlY29uZHNUb1RpbWUoZHVyYXRpb24gKiBwKSlcblx0XHRcdFx0XHRcdFx0dmlkZW8uc2VlayhkdXJhdGlvbiAqIHApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0sXG5cblx0XHRcdFx0XHQnbW91c2V1cCcgOiAoZSkgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy5tYXJrZXJUaW1lLmhpZGUoKVxuXHRcdFx0XHRcdFx0dGhpcy5kcmFnID0gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0Z2V0UG9zaXRpb24gKHgpIHtcblx0XHRcdFx0cmV0dXJuICh4IC0gdGhpcy5saW5lLm9mZnNldCgpLmxlZnQpIC8gdGhpcy5saW5lLndpZHRoKCk7XG5cdFx0XHR9XG5cblx0XHRcdG1vdmUgKCkge1xuXHRcdFx0XHR2YXIgdCA9ICh2aWRlby5jdXJyZW50VGltZSAvIHZpZGVvLmR1cmF0aW9uICogMTAwKS50b0ZpeGVkKDIpICsgJyUnO1xuXHRcdFx0XHR0aGlzLm1hcmtlci5jc3MoJ2xlZnQnLCB0KTtcblx0XHRcdFx0dGhpcy5wbGF5ZWQuY3NzKCd3aWR0aCcsIHQpO1xuXHRcdFx0XHR0aGlzLmN1cnJlbnQudGV4dCA9IHNlY29uZHNUb1RpbWUodmlkZW8uY3VycmVudFRpbWUpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGNsYXNzIFZvbHVtZUNvbnRyb2wge1xuXHRcdFx0Y29uc3RydWN0b3IgKCkge1xuXHRcdFx0XHRsZXQgX3NlbGYgPSB0aGlzO1xuXG5cdFx0XHRcdHRoaXMuaWNvbiA9ICQoJzxkaXYvPicpXG5cdFx0XHRcdFx0LmFkZENsYXNzKCdjb250cm9sLWljb24nKVxuXHRcdFx0XHRcdC5hcHBlbmQoJCgnPGkgLz4nKVxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCdmYSBmYS12b2x1bWUtZG93bicpKVxuXHRcdFx0XHRcdC5jbGljayhmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRfc2VsZi50b2dnbGVNdXRlZCgpO1xuXHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdHRoaXMubWFya2VyID0gJCgnPGRpdi8+JykuYWRkQ2xhc3MoJ3ZvbHVtZS1tYXJrZXInKTtcblxuXHRcdFx0XHR0aGlzLmFjdGl2ZSA9ICQoJzxkaXYvPicpLmFkZENsYXNzKCd2b2x1bWUtYWN0aXZlJyk7XG5cblx0XHRcdFx0dGhpcy5saW5lID0gJCgnPGRpdi8+Jylcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3ZvbHVtZS1saW5lJylcblx0XHRcdFx0XHQuYXBwZW5kKHRoaXMuYWN0aXZlKVxuXHRcdFx0XHRcdC5hcHBlbmQodGhpcy5tYXJrZXIpXG5cdFx0XHRcdFx0Lm9uKCdjbGljaycsIChlKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAodGhpcy5kcmFnKSByZXR1cm47XG5cdFx0XHRcdFx0XHRsZXQgcCA9IHRoaXMuZ2V0UG9zaXRpb24oZS5wYWdlWSk7XG5cdFx0XHRcdFx0XHRpZiAocCA+PSAwICYmIHAgPD0gMSkge1xuXHRcdFx0XHRcdFx0XHRjb250cm9scy52b2x1bWUgPSAxIC0gcDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHR0aGlzLmVsZW1lbnQgPSAkKCc8ZGl2IC8+Jylcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2NvbnRyb2wgY29udHJvbC1jb250YWluZXInKVxuXHRcdFx0XHRcdC5hcHBlbmQodGhpcy5pY29uKVxuXHRcdFx0XHRcdC5hcHBlbmQoJCgnPGRpdiAvPicpXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2NvbnRyb2wtaW5uZXIgdm9sdW1lLXNsaWRlcicpXG5cdFx0XHRcdFx0XHQuYXBwZW5kKHRoaXMubGluZSkpO1xuXG5cdFx0XHRcdHRoaXMuZHJhZyA9IGZhbHNlO1xuXG5cdFx0XHRcdHRoaXMubWFya2VyLm9uKCdtb3VzZWRvd24nLCAoZSkgPT4ge1xuXHRcdFx0XHRcdGlmIChlLndoaWNoICE9IDEpIHJldHVybjtcblx0XHRcdFx0XHR0aGlzLmRyYWcgPSB0cnVlO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHQkKGRvY3VtZW50KS5vbih7XG5cdFx0XHRcdFx0J21vdXNlbW92ZScgOiAoZSkgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKCF0aGlzLmRyYWcpIHJldHVybjtcblx0XHRcdFx0XHRcdGxldCBwID0gdGhpcy5nZXRQb3NpdGlvbihlLnBhZ2VZKTtcblx0XHRcdFx0XHRcdGlmIChwID49IDAgJiYgcCA8PSAxKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnRyb2xzLnZvbHVtZSA9IDEgLSBwXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSxcblxuXHRcdFx0XHRcdCdtb3VzZXVwJyA6IChlKSA9PiB7XG5cdFx0XHRcdFx0XHR0aGlzLmRyYWcgPSBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHRzZXQgdmFsdWUgKHZhbHVlKSB7XG5cdFx0XHRcdHZhciBpY29uID0gdGhpcy5pY29uLmNoaWxkcmVuKCcuZmEnKS5lcSgtMSk7XG5cdFx0XHRcdGljb24ucmVtb3ZlQ2xhc3MoKTtcblx0XHRcdFx0aWYgKHZhbHVlIDwgZW52LnZvbHVtZS5tdXRlbGltaXQpIHtcblx0XHRcdFx0XHRpY29uLmFkZENsYXNzKCdmYSBmYS12b2x1bWUtb2ZmJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0aWYgKHZhbHVlIDwgMC41KVxuXHRcdFx0XHRcdFx0aWNvbi5hZGRDbGFzcygnZmEgZmEtdm9sdW1lLWRvd24nKTtcblx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRpY29uLmFkZENsYXNzKCdmYSBmYS12b2x1bWUtdXAnKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGxldCBwID0gTWF0aC5yb3VuZCh2YWx1ZSAqIDEwMCkudG9TdHJpbmcoKSArICclJztcblx0XHRcdFx0dGhpcy5hY3RpdmUuY3NzKCdoZWlnaHQnLCBwKTtcblx0XHRcdFx0dGhpcy5tYXJrZXIuY3NzKCdib3R0b20nLCBwKTtcblx0XHRcdH1cblxuXHRcdFx0dG9nZ2xlTXV0ZWQgKCkge1xuXHRcdFx0XHRpZiAodmlkZW8ubXV0ZWQgPT0gdHJ1ZSkge1xuXHRcdFx0XHRcdHRoaXMudmFsdWUgPSBDb29raWUuZ2V0KCd2b2x1bWUnLCBlbnYudm9sdW1lLmRlZmF1bHQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHR0aGlzLnZhbHVlID0gMDtcblx0XHRcdH1cblxuXHRcdFx0Z2V0UG9zaXRpb24gKHkpIHtcblx0XHRcdFx0cmV0dXJuICh5IC0gdGhpcy5saW5lLm9mZnNldCgpLnRvcCkgLyB0aGlzLmxpbmUuaGVpZ2h0KCk7XG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRjbGFzcyBDb29raWUge1xuXHRcdFx0c3RhdGljIGdldCAobmFtZSwgZGZsdCkge1xuXHRcdFx0XHR2YXIgY29va2llcyA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOycpO1xuXHRcdFx0XHRmb3IgKHZhciBpIGluIGNvb2tpZXMpIHtcblx0XHRcdFx0XHR2YXIgZCA9IGNvb2tpZXNbIGkgXS50cmltKCkuc3BsaXQoJz0nKTtcblx0XHRcdFx0XHRpZiAoZFsgMCBdID09ICdsZXBsYXllcl8nICsgbmFtZSlcblx0XHRcdFx0XHRcdHJldHVybiBkWyAxIF07XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIGRmbHQ7XG5cdFx0XHR9O1xuXG5cdFx0XHRzdGF0aWMgc2V0IChuYW1lLCB2YWx1ZSkge1xuXHRcdFx0XHR2YXIgZCA9IG5ldyBEYXRlKCk7XG5cdFx0XHRcdGQuc2V0RGF0ZShkLnllYXIgKyAxKTtcblx0XHRcdFx0ZG9jdW1lbnQuY29va2llID0gJ2xlcGxheWVyXycgKyBuYW1lICsgJz0nICsgdmFsdWUgKyAnO2V4cGlyZXM9JyArIGQudG9TdHJpbmcoKTtcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0Y2xhc3MgQ29udHJvbENvbGxlY3Rpb24ge1xuXHRcdFx0Y29uc3RydWN0b3IgKG5hbWUsIGFjdGl2ZSkge1xuXHRcdFx0XHR0aGlzLml0ZW1zID0gW107XG5cdFx0XHRcdHRoaXMuYWN0aXZlID0gYWN0aXZlIHx8IGZhbHNlO1xuXHRcdFx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdFx0fVxuXG5cdFx0XHRzZXQgZG93bmxvYWQgKHZhbHVlKSB7XG5cdFx0XHRcdGlmICh0aGlzLmhhcyhDX0RPV05MT0FEKSkge1xuXHRcdFx0XHRcdHRoaXMuaXRlbXMuZG93bmxvYWQubGluayA9IHZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHNldCByYXRlICh2YWx1ZSkge1xuXHRcdFx0XHRpZiAodGhpcy5oYXMoQ19SQVRFKSkge1xuXHRcdFx0XHRcdHRoaXMuaXRlbXMucmF0ZS5zZXQodmFsdWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHNldCBzb3VyY2UgKHZhbHVlKSB7XG5cdFx0XHRcdGlmICh0aGlzLmhhcyhDX1NPVVJDRSkpIHtcblx0XHRcdFx0XHR0aGlzLml0ZW1zLnNvdXJjZS5zZXQodmFsdWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHNldCB0b3RhbFRpbWUgKHZhbHVlKSB7XG5cdFx0XHRcdGlmICh0aGlzLmhhcyhDX1RJTUVMSU5FKSlcblx0XHRcdFx0XHR0aGlzLml0ZW1zLnRpbWVsaW5lLnRvdGFsLnRleHQgPSB2YWx1ZTtcblx0XHRcdH1cblxuXHRcdFx0c2V0IHZvbHVtZSAodmFsdWUpIHtcblx0XHRcdFx0aWYgKHRoaXMuaGFzKENfVk9MVU1FKSlcblx0XHRcdFx0XHR0aGlzLml0ZW1zLnZvbHVtZS52YWx1ZSA9IHZhbHVlO1xuXHRcdFx0fVxuXG5cdFx0XHRhZGQgKG5hbWUpIHtcblx0XHRcdFx0aWYgKG5hbWUgPT0gQ19ESVZJREVSKVxuXHRcdFx0XHRcdHJldHVybiBDb250cm9sLmNyZWF0ZShuYW1lKTtcblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5pdGVtc1sgbmFtZSBdID0gQ29udHJvbC5jcmVhdGUobmFtZSk7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuaXRlbXNbIG5hbWUgXS5lbGVtZW50O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGhhcyAobmFtZSkge1xuXHRcdFx0XHRyZXR1cm4gKHR5cGVvZiB0aGlzLml0ZW1zWyBuYW1lIF0gPT0gJ29iamVjdCcpO1xuXHRcdFx0fVxuXG5cdFx0XHRoaWRlICgpIHtcblx0XHRcdFx0Y29udGFpbmVyLmZpbmQoJy5jb250cm9scy0nICsgdGhpcy5uYW1lKS5oaWRlKCk7XG5cdFx0XHR9XG5cblx0XHRcdGluaXQgKCkge1xuXHRcdFx0XHR0aGlzLnZvbHVtZSA9IENvb2tpZS5nZXQoJ3ZvbHVtZScsIGVudi52b2x1bWUuZGVmYXVsdCk7XG5cdFx0XHRcdHRoaXMuaW5pdFRpbWVsaW5lKCk7XG5cdFx0XHRcdHRoaXMudG90YWxUaW1lID0gc2Vjb25kc1RvVGltZSh2aWRlby5kdXJhdGlvbik7XG5cdFx0XHRcdHRoaXMuZG93bmxvYWQgPSBzb3VyY2VzWyAwIF0uc3JjO1xuXHRcdFx0XHR0aGlzLmluaXRTdWJ0aXRsZXMoKTtcblx0XHRcdH1cblxuXHRcdFx0aW5pdFN1YnRpdGxlcyAoKSB7XG5cdFx0XHRcdGlmICh0aGlzLmhhcyhDX1NVQlRJVExFKSkge1xuXHRcdFx0XHRcdHRoaXMuaXRlbXNbIENfU1VCVElUTEUgXS5pbml0KCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aW5pdFRpbWVsaW5lICgpIHtcblx0XHRcdFx0aWYgKHRoaXMuaGFzKENfVElNRUxJTkUpKSB7XG5cdFx0XHRcdFx0aWYgKHRoaXMuaXRlbXMudGltZWxpbmUuZWxlbWVudC53aWR0aCgpIDwgMjApXG5cdFx0XHRcdFx0XHR0aGlzLml0ZW1zLnRpbWVsaW5lLmVsZW1lbnQuaGlkZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdG1vdmVUaW1lTWFya2VyICgpIHtcblx0XHRcdFx0aWYgKHRoaXMuaGFzKENfVElNRUxJTkUpKVxuXHRcdFx0XHRcdHRoaXMuaXRlbXMudGltZWxpbmUubW92ZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHRwYXVzZSAoKSB7XG5cdFx0XHRcdGlmICh0aGlzLmhhcyhDX1BMQVkpKVxuXHRcdFx0XHRcdHRoaXMuaXRlbXMucGxheS5wYXVzZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHRwbGF5ICgpIHtcblx0XHRcdFx0aWYgKHRoaXMuaGFzKENfUExBWSkpXG5cdFx0XHRcdFx0dGhpcy5pdGVtcy5wbGF5LnBsYXkoKTtcblx0XHRcdH1cblxuXHRcdFx0c2hvdyAoKSB7XG5cdFx0XHRcdGNvbnRhaW5lci5maW5kKCcuY29udHJvbHMtJyArIHRoaXMubmFtZSkuc2hvdygpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGNsYXNzIENvbnRyb2xzIHtcblx0XHRcdGNvbnN0cnVjdG9yICgpIHtcblx0XHRcdFx0dGhpcy5jb2xsZWN0aW9ucyA9IHtcblx0XHRcdFx0XHRjb21tb24gOiBuZXcgQ29udHJvbENvbGxlY3Rpb24oJ2NvbW1vbicpLFxuXHRcdFx0XHRcdG1pbmkgOiBuZXcgQ29udHJvbENvbGxlY3Rpb24oJ21pbmknKSxcblx0XHRcdFx0XHRmdWxsc2NyZWVuIDogbmV3IENvbnRyb2xDb2xsZWN0aW9uKCdmdWxsc2NyZWVuJylcblx0XHRcdFx0fTtcblx0XHRcdFx0dGhpcy5jb2xsZWN0aW9ucy5jb21tb24uYWN0aXZlID0gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0Z2V0IGNvbW1vbiAoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmNvbGxlY3Rpb25zLmNvbW1vbjtcblx0XHRcdH1cblxuXHRcdFx0Z2V0IGZ1bGxzY3JlZW4gKCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5jb2xsZWN0aW9ucy5mdWxsc2NyZWVuO1xuXHRcdFx0fVxuXG5cdFx0XHRnZXQgbWluaSAoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmNvbGxlY3Rpb25zLm1pbmk7XG5cdFx0XHR9XG5cblx0XHRcdHNldCBkb3dubG9hZCAodmFsdWUpIHtcblx0XHRcdFx0Zm9yICh2YXIgaSBpbiB0aGlzLmNvbGxlY3Rpb25zKSB7XG5cdFx0XHRcdFx0dGhpcy5jb2xsZWN0aW9uc1sgaSBdLmRvd25sb2FkID0gdmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0c2V0IHJhdGUgKHZhbHVlKSB7XG5cdFx0XHRcdENvb2tpZS5zZXQoJ3JhdGUnLCB2YWx1ZSk7XG5cdFx0XHRcdGZvciAodmFyIGkgaW4gdGhpcy5jb2xsZWN0aW9ucykge1xuXHRcdFx0XHRcdHRoaXMuY29sbGVjdGlvbnNbIGkgXS5yYXRlID0gdmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0c2V0IHNvdXJjZSAodmFsdWUpIHtcblx0XHRcdFx0Zm9yICh2YXIgaSBpbiB0aGlzLmNvbGxlY3Rpb25zKSB7XG5cdFx0XHRcdFx0dGhpcy5jb2xsZWN0aW9uc1sgaSBdLnNvdXJjZSA9IHZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHNldCB0b3RhbFRpbWUgKHZhbHVlKSB7XG5cdFx0XHRcdGZvciAodmFyIGkgaW4gdGhpcy5jb2xsZWN0aW9ucykge1xuXHRcdFx0XHRcdHRoaXMuY29sbGVjdGlvbnNbIGkgXS50b3RhbFRpbWUgPSB2YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRzZXQgdm9sdW1lICh2YWx1ZSkge1xuXHRcdFx0XHRmb3IgKHZhciBpIGluIHRoaXMuY29sbGVjdGlvbnMpIHtcblx0XHRcdFx0XHR0aGlzLmNvbGxlY3Rpb25zWyBpIF0udm9sdW1lID0gdmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0dmlkZW8udm9sdW1lID0gdmFsdWU7XG5cdFx0XHRcdENvb2tpZS5zZXQoJ3ZvbHVtZScsIHZhbHVlKTtcblx0XHRcdH1cblxuXHRcdFx0aGFzIChuYW1lKSB7XG5cdFx0XHRcdHJldHVybiAodHlwZW9mIHRoaXMuY29sbGVjdGlvbnNbIG5hbWUgXSA9PSAnb2JqZWN0Jyk7XG5cdFx0XHR9XG5cblx0XHRcdGluaXQgKCkge1xuXHRcdFx0XHRmb3IgKHZhciBpIGluIHRoaXMuY29sbGVjdGlvbnMpIHtcblx0XHRcdFx0XHR0aGlzLmNvbGxlY3Rpb25zWyBpIF0uaW5pdCgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuY29sbGVjdGlvbnMuY29tbW9uLnNob3coKTtcblx0XHRcdFx0dGhpcy5jb2xsZWN0aW9ucy5taW5pLmhpZGUoKTtcblx0XHRcdFx0dGhpcy5jb2xsZWN0aW9ucy5mdWxsc2NyZWVuLmhpZGUoKTtcblx0XHRcdH1cblxuXHRcdFx0bW92ZVRpbWVNYXJrZXIgKCkge1xuXHRcdFx0XHRmb3IgKHZhciBpIGluIHRoaXMuY29sbGVjdGlvbnMpXG5cdFx0XHRcdFx0dGhpcy5jb2xsZWN0aW9uc1sgaSBdLm1vdmVUaW1lTWFya2VyKCk7XG5cdFx0XHR9XG5cblx0XHRcdHBhdXNlICgpIHtcblx0XHRcdFx0Zm9yICh2YXIgaSBpbiB0aGlzLmNvbGxlY3Rpb25zKVxuXHRcdFx0XHRcdHRoaXMuY29sbGVjdGlvbnNbIGkgXS5wYXVzZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHRwbGF5ICgpIHtcblx0XHRcdFx0Zm9yICh2YXIgaSBpbiB0aGlzLmNvbGxlY3Rpb25zKVxuXHRcdFx0XHRcdHRoaXMuY29sbGVjdGlvbnNbIGkgXS5wbGF5KCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dmFyIHNvdXJjZXMgPSBbXTtcblx0XHR2YXIgc3VidGl0bGVzID0gW107XG5cdFx0dmFyIHZvbHVtZSA9IGVudi52b2x1bWUuZGVmYXVsdDtcblx0XHR2YXIgdmlkZW8gPSBudWxsO1xuXHRcdHZhciBjb250cm9scyA9IG5ldyBDb250cm9scygpO1xuXG5cdFx0LyoqXG5cdFx0ICogRE9NIGNvbnRhaW5lciB0byBob2xkIHZpZGVvIGFuZCBhbGwgb3RoZXIgc3R1ZmYuXG5cdFx0ICogQHR5cGUgb2JqZWN0XG5cdFx0ICovXG5cdFx0dmFyIGNvbnRhaW5lciA9IG51bGw7XG5cdFx0dmFyIG92ZXJsYXkgPSBudWxsO1xuXG5cdFx0dmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHQvLyBDaGVjayBpZiBlbGVtZW50IGlzIGNvcnJlY3RseSBzZWxlY3RlZC5cblx0XHRcdGlmIChlbGVtZW50LnByb3AoJ3RhZ05hbWUnKS50b0xvd2VyQ2FzZSgpICE9ICd2aWRlbycpIHtcblx0XHRcdFx0Y29uc29sZS53YXJuKCdJbmNvcnJlY3QgZWxlbWVudCBzZWxlY3RlZC4nKTtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFNldCBzb3VyY2UuXG5cdFx0XHQvLyBAVE9ETyBtb3ZlIHRoaXMgdG8gVmlkZW8gY2xhc3Ncblx0XHRcdGVsZW1lbnQuY2hpbGRyZW4oJ3NvdXJjZScpLmVhY2goZnVuY3Rpb24gKCkge1xuXHRcdFx0XHR2YXIgc3JjID0gJCh0aGlzKS5hdHRyKCdzcmMnKTtcblx0XHRcdFx0aWYgKHNyYylcblx0XHRcdFx0XHRzb3VyY2VzLnB1c2goe1xuXHRcdFx0XHRcdFx0c3JjIDogc3JjLFxuXHRcdFx0XHRcdFx0dGl0bGUgOiAkKHRoaXMpLmF0dHIoJ3RpdGxlJylcblx0XHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdFx0aWYgKHNvdXJjZXMubGVuZ3RoID09IDApIHtcblx0XHRcdFx0dmFyIHNyYyA9IGVsZW1lbnQuYXR0cignc3JjJyk7XG5cdFx0XHRcdGlmIChzcmMpIHtcblx0XHRcdFx0XHRzb3VyY2VzLnB1c2goe1xuXHRcdFx0XHRcdFx0c3JjIDogc3JjLFxuXHRcdFx0XHRcdFx0dGl0bGUgOiAkKHRoaXMpLmF0dHIoJ3RpdGxlJykgfHwgJ2RlZmF1bHQnXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChzb3VyY2VzLmxlbmd0aCA9PSAwKSB7XG5cdFx0XHRcdGNvbnNvbGUud2FybignTm8gc291cmNlcyBmb3VuZC4nKTtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cdFx0XHR2aWRlbyA9IG5ldyBWaWRlbyhlbGVtZW50KTtcblxuXHRcdFx0aW5pdE9wdGlvbnMoKTtcblx0XHRcdGluaXREb20oKTtcblx0XHRcdGluaXRDb250cm9scygpO1xuXHRcdFx0dmlkZW8uaW5pdCgpO1xuXG5cdFx0XHRpbml0SG90S2V5cygpO1xuXHRcdH07XG5cblx0XHR2YXIgaW5pdENvbnRyb2xzID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0Zm9yIChsZXQgbmFtZSBpbiBvcHRpb25zLmNvbnRyb2xzKSB7XG5cdFx0XHRcdGlmIChjb250cm9scy5oYXMobmFtZSkpIHtcblx0XHRcdFx0XHRmb3IgKGxldCByb3dJbmRleCBpbiBvcHRpb25zLmNvbnRyb2xzWyBuYW1lIF0pIHtcblx0XHRcdFx0XHRcdGxldCByb3cgPSBvcHRpb25zLmNvbnRyb2xzWyBuYW1lIF1bIHJvd0luZGV4IF0sXG5cdFx0XHRcdFx0XHRcdGhhc1RpbWVsaW5lID0gZmFsc2UsXG5cdFx0XHRcdFx0XHRcdHJvd0VsZW1lbnQgPSAkKCc8ZGl2IC8+JykuYWRkQ2xhc3MoJ2xlcGxheWVyLWNvbnRyb2xzIGNvbnRyb2xzLScgKyBuYW1lKTtcblxuXHRcdFx0XHRcdFx0Zm9yIChsZXQgaSBpbiByb3cpIHtcblx0XHRcdFx0XHRcdFx0bGV0IGNvbnRyb2xOYW1lID0gcm93WyBpIF07XG5cblx0XHRcdFx0XHRcdFx0aWYgKGNvbnRyb2xOYW1lID09IENfRElWSURFUiB8fCAhY29udHJvbHMuY29sbGVjdGlvbnNbIG5hbWUgXS5oYXMoY29udHJvbE5hbWUpKSB7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gQ3JlYXRlIGNvbnRyb2wgb25seSBpZiBkaXZpZGVyIG9yIGRvZXMgbm90IGV4aXN0IHlldC5cblx0XHRcdFx0XHRcdFx0XHR2YXIgYyA9IGNvbnRyb2xzLmNvbGxlY3Rpb25zWyBuYW1lIF0uYWRkKGNvbnRyb2xOYW1lKTtcblx0XHRcdFx0XHRcdFx0XHRpZiAoYyAhPSBudWxsKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyb3dFbGVtZW50LmFwcGVuZChjKTtcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChjb250cm9sTmFtZSA9PSBDX1RJTUVMSU5FKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRoYXNUaW1lbGluZSA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUud2FybignQ2Fubm90IGNyZWF0ZSAnICsgY29udHJvbE5hbWUgKyAnIGNvbnRyb2wgZm9yIGNvbGxlY3Rpb24gJyArIG5hbWUgKyAnLicpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGlmICghaGFzVGltZWxpbmUpXG5cdFx0XHRcdFx0XHRcdHJvd0VsZW1lbnQuY3NzKCd3aWR0aCcsICcxcHgnKTtcblxuXHRcdFx0XHRcdFx0cm93RWxlbWVudC5maW5kKCcuZGl2aWRlciArIC5kaXZpZGVyJykucmVtb3ZlKCk7XG5cblx0XHRcdFx0XHRcdGNvbnRhaW5lci5hcHBlbmQocm93RWxlbWVudCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdHZhciBpbml0RG9tID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0b3ZlcmxheSA9ICQoJzxkaXYgLz4nKS5hZGRDbGFzcygncGxheS1vdmVybGF5JykuaHRtbCgnPGkgY2xhc3M9XCJmYSBmYS1wbGF5XCI+PC9pPicpO1xuXHRcdFx0dmFyIHZpZGVvQ29udGFpbmVyID0gJCgnPGRpdiAvPicpLmFkZENsYXNzKCdsZXBsYXllci12aWRlbycpLmFwcGVuZChvdmVybGF5KTtcblx0XHRcdGNvbnRhaW5lciA9ICQoJzxkaXYgLz4nKS5hZGRDbGFzcygnbGVwbGF5ZXItY29udGFpbmVyJykuYXBwZW5kKHZpZGVvQ29udGFpbmVyKS5jc3MoJ3dpZHRoJywgZWxlbWVudC53aWR0aCgpICsgJ3B4Jyk7XG5cblx0XHRcdGVsZW1lbnQuYmVmb3JlKGNvbnRhaW5lcik7XG5cdFx0XHR2aWRlb0NvbnRhaW5lci5hcHBlbmQoZWxlbWVudCk7XG5cdFx0XHRvdmVybGF5LmNsaWNrKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0dmlkZW8udG9nZ2xlUGxheSgpO1xuXHRcdFx0fSk7XG5cdFx0fTtcblxuXHRcdHZhciBpbml0SG90S2V5cyA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdC8vIFNwYWNlLlxuXHRcdFx0ZWxlbWVudC5rZXlwcmVzcyhlID0+IHtcblx0XHRcdFx0aWYgKGUuY2hhckNvZGUgPT0gMzIpIHtcblx0XHRcdFx0XHQvL2UucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHR2aWRlby50b2dnbGVQbGF5KCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pLmNsaWNrKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0dmlkZW8udG9nZ2xlUGxheSgpO1xuXHRcdFx0fSk7XG5cdFx0fTtcblxuXHRcdHZhciBpbml0T3B0aW9ucyA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdC8vIENvbnRyb2xzLlxuXHRcdFx0ZWxlbWVudC5yZW1vdmVBdHRyKCdjb250cm9scycpO1xuXG5cdFx0XHQvLyBIZWlnaHQuXG5cdFx0XHR2YXIgaCA9IGVsZW1lbnQuYXR0cignaGVpZ2h0Jyk7XG5cdFx0XHRpZiAoaCkge1xuXHRcdFx0XHRvcHRpb25zLmhlaWdodCA9IGggKyAncHgnO1xuXHRcdFx0XHRlbGVtZW50LnJlbW92ZUF0dHIoJ2hlaWdodCcpO1xuXHRcdFx0fVxuXHRcdFx0ZWxlbWVudC5jc3MoJ2hlaWdodCcsIG9wdGlvbnMuaGVpZ2h0KTtcblxuXHRcdFx0Ly8gV2lkdGguXG5cdFx0XHR2YXIgdyA9IGVsZW1lbnQuYXR0cignd2lkdGgnKTtcblx0XHRcdGlmICh3KSB7XG5cdFx0XHRcdG9wdGlvbnMud2lkdGggPSB3ICsgJ3B4Jztcblx0XHRcdFx0ZWxlbWVudC5yZW1vdmVBdHRyKCd3aWR0aCcpO1xuXHRcdFx0fVxuXHRcdFx0ZWxlbWVudC5jc3MoJ3dpZHRoJywgb3B0aW9ucy53aWR0aCk7XG5cblx0XHRcdC8vIFBvc3Rlci5cblx0XHRcdHZhciBwID0gZWxlbWVudC5hdHRyKCdwb3N0ZXInKTtcblx0XHRcdGlmIChwKVxuXHRcdFx0XHRvcHRpb25zLnBvc3RlciA9IHA7XG5cdFx0XHRlbHNlIGlmIChvcHRpb25zLnBvc3Rlcilcblx0XHRcdFx0ZWxlbWVudC5hdHRyKCdwb3N0ZXInLCBvcHRpb25zLnBvc3Rlcik7XG5cblx0XHRcdC8vIEF1dG9wbGF5LCBsb29wLCBtdXRlZC5cblx0XHRcdHZhciBhdHRycyA9IFsgJ2F1dG9wbGF5JywgJ2xvb3AnLCAnbXV0ZWQnIF07XG5cdFx0XHRmb3IgKHZhciBpIGluIGF0dHJzKSB7XG5cdFx0XHRcdHZhciBhID0gZWxlbWVudC5hdHRyKGF0dHJzWyBpIF0pO1xuXHRcdFx0XHRpZiAoYSlcblx0XHRcdFx0XHRvcHRpb25zWyBhdHRyc1sgaSBdIF0gPSB0cnVlO1xuXHRcdFx0XHRlbHNlIGlmIChvcHRpb25zWyBhdHRyc1sgaSBdIF0pXG5cdFx0XHRcdFx0ZWxlbWVudC5hdHRyKGF0dHJzWyBpIF0sICcnKTtcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdGVsZW1lbnQucmVtb3ZlQXR0cihhdHRyc1sgaSBdKTtcblx0XHRcdFx0ZWxlbWVudC5wcm9wKGF0dHJzWyBpIF0sIG9wdGlvbnNbIGF0dHJzWyBpIF0gXSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFByZWxvYWQuXG5cdFx0XHR2YXIgciA9IGVsZW1lbnQuYXR0cigncHJlbG9hZCcpO1xuXHRcdFx0aWYgKHIpIHtcblx0XHRcdFx0ciA9IHIudG9Mb3dlckNhc2UoKTtcblx0XHRcdFx0aWYgKHIgPT0gJ25vbmUnIHx8IHIgPT0gJ21ldGFkYXRhJylcblx0XHRcdFx0XHRvcHRpb25zLnByZWxvYWQgPSByO1xuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0b3B0aW9ucy5wcmVsb2FkID0gJ2F1dG8nO1xuXHRcdFx0fVxuXHRcdFx0ZWxlbWVudC5hdHRyKCdwcmVsb2FkJywgb3B0aW9ucy5wcmVsb2FkKTtcblx0XHR9O1xuXG5cdFx0dmFyIHNlY29uZHNUb1RpbWUgPSBmdW5jdGlvbiAoc2Vjb25kcykge1xuXHRcdFx0dmFyIGggPSBNYXRoLmZsb29yKHNlY29uZHMgLyAzNjAwKTtcblx0XHRcdHZhciBtID0gTWF0aC5mbG9vcihzZWNvbmRzICUgMzYwMCAvIDYwKTtcblx0XHRcdHZhciBzID0gTWF0aC5mbG9vcihzZWNvbmRzICUgMzYwMCAlIDYwKTtcblx0XHRcdHZhciBvdXQgPSAnJztcblx0XHRcdGlmIChoID4gMClcblx0XHRcdFx0b3V0ID0gaCArICc6Jztcblx0XHRcdGlmIChtIDwgMTApXG5cdFx0XHRcdG91dCArPSAnMCc7XG5cdFx0XHRvdXQgKz0gbSArICc6Jztcblx0XHRcdGlmIChzIDwgMTApXG5cdFx0XHRcdG91dCArPSAnMCc7XG5cdFx0XHRvdXQgKz0gcztcblx0XHRcdHJldHVybiBvdXQ7XG5cdFx0fTtcblxuXHRcdGluaXQoKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHR3aW5kb3cuJC5mbi5sZVBsYXllciA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cdFx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0XHRQbGF5ZXIoJCh0aGlzKSwgb3B0aW9ucyk7XG5cdFx0fSk7XG5cdH07XG59KGpRdWVyeSkpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc291cmNlL2pzL2xlLXBsYXllci5lczYuanNcbiAqKi8iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQU9BO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFJQTtBQUxBO0FBdkJBO0FBQ0E7Ozs7O0FBckJBO0FBMERBOzs7Ozs7Ozs7OztBQUlBO0FBQ0E7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFYQTs7Ozs7Ozs7O0FBb0JBO0FBQ0E7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBR0E7QUFDQTtBQUNBO0FBSUE7QUFMQTtBQVFBO0FBQ0E7QUFJQTtBQU5BOzs7Ozs7Ozs7QUFhQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBSkE7Ozs7QUFyRUE7QUExREE7QUFDQTtBQXVJQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7O0FBRkE7QUFLQTtBQUxBO0FBQ0E7QUFGQTs7QUF1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRkE7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQVBBOzs7O0FBV0E7QUFDQTs7OztBQUdBO0FBQ0E7Ozs7QUFHQTtBQUNBOzs7O0FBR0E7QUFDQTtBQUNBOzs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFKQTs7OztBQWNBOzs7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFIQTs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOzs7OztBQVBBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBRkE7QUFjQTtBQUNBOzs7O0FBdElBO0FBQ0E7Ozs7QUFHQTtBQUNBOzs7O0FBR0E7QUFDQTs7QUFHQTtBQUNBOzs7O0FBR0E7QUFDQTtBQUNBO0FBREE7Ozs7QUFRQTtBQUNBO0FBQ0E7Ozs7QUFwQ0E7QUF4SUE7QUFDQTtBQTBSQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUZBOztBQVFBO0FBQ0E7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBVEE7QUFXQTtBQUNBO0FBWkE7QUFjQTtBQUNBO0FBZkE7QUFpQkE7QUFDQTtBQWxCQTtBQW9CQTtBQUNBO0FBckJBO0FBdUJBO0FBQ0E7QUF4QkE7QUEwQkE7QUFDQTtBQTNCQTtBQTZCQTtBQUNBO0FBOUJBO0FBZ0NBO0FBQ0E7QUFqQ0E7QUFtQ0E7QUFuQ0E7Ozs7QUFiQTtBQTNSQTtBQUNBO0FBK1VBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBRkE7O0FBS0E7QUFDQTs7OztBQU5BO0FBaFZBO0FBQ0E7QUF5VkE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQWRBO0FBQ0E7QUFGQTs7QUF3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBR0E7QUFDQTs7OztBQUdBO0FBQ0E7QUFDQTtBQURBOzs7O0FBTUE7OztBQUdBO0FBQ0E7Ozs7QUFyREE7QUFDQTtBQUNBO0FBREE7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBU0E7Ozs7QUFwQ0E7QUExVkE7QUFDQTtBQW9hQTs7O0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFEQTs7QUFGQTtBQUNBO0FBRkE7QUFBQTtBQUNBO0FBV0E7OztBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFFQTs7QUFGQTtBQUNBO0FBRkE7O0FBTUE7QUFDQTs7OztBQVBBO0FBQUE7QUFDQTtBQVVBOzs7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBQ0E7QUFLQTs7O0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFEQTs7QUFGQTtBQUNBO0FBRkE7QUFBQTtBQUNBO0FBUUE7OztBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBREE7O0FBRkE7QUFDQTtBQUZBOztBQVFBO0FBQ0E7Ozs7QUFNQTtBQUNBOzs7O0FBaEJBO0FBQUE7QUFDQTtBQXNCQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBYkE7QUFDQTtBQUZBOztBQXFCQTtBQUNBO0FBQ0E7QUFDQTtBQUlBOzs7O0FBR0E7QUFDQTs7OztBQWhDQTtBQWxlQTtBQUNBO0FBcWdCQTs7O0FBQ0E7QUFEQTtBQUNBOzs7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUhBO0FBQUE7QUFDQTtBQUZBOztBQVdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7Ozs7QUFNQTtBQUNBO0FBQ0E7Ozs7QUF0QkE7QUFBQTtBQUNBO0FBeUJBOzs7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFGQTs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQURBO0FBREE7Ozs7QUFlQTtBQUNBO0FBQ0E7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7OztBQTdCQTtBQUFBO0FBQ0E7QUFtQ0E7QUFDQTs7O0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFKQTtBQUNBO0FBWUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBeEJBO0FBQ0E7QUE2QkE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFKQTtBQUhBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFGQTtBQWJBO0FBbEVBO0FBQ0E7QUFGQTs7QUF1RkE7QUFDQTs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUEvRkE7QUFwa0JBO0FBQ0E7QUFzcUJBO0FBQ0E7OztBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUhBO0FBQ0E7QUFPQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUhBO0FBQ0E7QUFPQTtBQUNBO0FBREE7QUFUQTtBQXpDQTtBQUNBO0FBRkE7O0FBMkVBO0FBQ0E7QUFDQTtBQURBOzs7O0FBT0E7QUFDQTs7OztBQTNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUpBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7Ozs7QUF4RUE7QUF2cUJBO0FBQ0E7QUErdkJBOzs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7OztBQWRBO0FBaHdCQTtBQUNBO0FBaXhCQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFGQTs7QUFtQ0E7QUFDQTtBQUdBO0FBQ0E7QUFKQTs7OztBQVFBO0FBQ0E7Ozs7QUFHQTtBQUNBOzs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBR0E7QUFDQTtBQUNBO0FBREE7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFEQTs7OztBQU1BO0FBQ0E7Ozs7QUFJQTtBQUNBOzs7O0FBSUE7QUFDQTs7OztBQUlBO0FBQ0E7Ozs7QUFsRkE7QUFDQTtBQUNBO0FBREE7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFEQTs7OztBQUtBO0FBQ0E7QUFDQTtBQURBOzs7O0FBS0E7QUFDQTs7OztBQUlBO0FBQ0E7Ozs7QUEvQkE7QUFseEJBO0FBQ0E7QUE4MkJBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBTkE7QUFDQTtBQUZBOztBQXVEQTtBQUNBOzs7O0FBR0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFEQTs7OztBQUlBO0FBQ0E7QUFDQTtBQURBOzs7O0FBSUE7QUFDQTtBQUNBO0FBREE7Ozs7QUFyRUE7QUFDQTs7OztBQUdBO0FBQ0E7Ozs7QUFHQTtBQUNBOzs7O0FBR0E7QUFDQTtBQUNBO0FBREE7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQURBOzs7O0FBS0E7QUFDQTtBQUNBO0FBREE7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFEQTs7OztBQUtBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTs7OztBQXBEQTtBQS8yQkE7QUFDQTtBQWs4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQXg4QkE7QUE4OEJBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUNBOzs7QUFIQTtBQVVBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFIQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFGQTtBQVNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXJDQTtBQUNBO0FBdUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSEE7QUFIQTtBQUNBO0FBZUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQTFCQTtBQURBO0FBREE7QUFEQTtBQUNBO0FBa0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBUEE7QUFDQTtBQVdBOztBQUVBO0FBQ0E7O0FBRUE7QUFGQTtBQURBO0FBTUE7QUFEQTtBQVBBO0FBQ0E7QUFXQTs7QUFFQTtBQUNBOztBQUhBO0FBTUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBOztBQVhBO0FBY0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBOztBQW5CQTtBQXNCQTtBQUNBOztBQXZCQTtBQTZCQTtBQUNBO0FBQ0E7QUFNQTtBQVJBO0FBQ0E7O0FBOUJBO0FBMENBO0FBQ0E7QUFDQTtBQUZBO0FBT0E7QUFqREE7QUFDQTtBQW1EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBYkE7QUFDQTtBQWVBO0FBQ0E7QUF4bkNBO0FBQ0E7QUEwbkNBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUE5bkNBOzs7Iiwic291cmNlUm9vdCI6IiJ9