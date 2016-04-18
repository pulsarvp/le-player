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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGUtcGxheWVyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIDJjZDM5ODM4N2M2MDVkMTRkOGE3Iiwid2VicGFjazovLy9zb3VyY2UvanMvbGUtcGxheWVyLmVzNi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDJjZDM5ODM4N2M2MDVkMTRkOGE3XG4gKiovIiwiKGZ1bmN0aW9uICgkKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHRsZXQgUGxheWVyID0gZnVuY3Rpb24gKGVsZW1lbnQsIG9wdHMpIHtcblx0XHRjb25zdCBDX0JBQ0tXQVJEID0gJ2JhY2t3YXJkJztcblx0XHRjb25zdCBDX0RJVklERVIgPSAnZGl2aWRlcic7XG5cdFx0Y29uc3QgQ19ET1dOTE9BRCA9ICdkb3dubG9hZCc7XG5cdFx0Y29uc3QgQ19GT1JXQVJEID0gJ2ZvcndhcmQnO1xuXHRcdGNvbnN0IENfRlVMTFNDUkVFTiA9ICdmdWxsc2NyZWVuJztcblx0XHRjb25zdCBDX1BMQVkgPSAncGxheSc7XG5cdFx0Y29uc3QgQ19SQVRFID0gJ3JhdGUnO1xuXHRcdGNvbnN0IENfU09VUkNFID0gJ3NvdXJjZSc7XG5cdFx0Y29uc3QgQ19TVUJUSVRMRSA9ICdzdWJ0aXRsZSc7XG5cdFx0Y29uc3QgQ19USU1FTElORSA9ICd0aW1lbGluZSc7XG5cdFx0Y29uc3QgQ19WT0xVTUUgPSAndm9sdW1lJztcblxuXHRcdHZhciBvcHRpb25zID0gJC5leHRlbmQodHJ1ZSwge1xuXHRcdFx0YXV0b3BsYXkgOiBmYWxzZSxcblx0XHRcdGhlaWdodCA6ICdhdXRvJyxcblx0XHRcdGxvb3AgOiBmYWxzZSxcblx0XHRcdG11dGVkIDogZmFsc2UsXG5cdFx0XHRwcmVsb2FkIDogJ21ldGFkYXRhJyxcblx0XHRcdHBvc3RlciA6IG51bGwsXG5cdFx0XHR3aWR0aCA6ICdhdXRvJyxcblx0XHRcdHJhdGUgOiB7XG5cdFx0XHRcdHN0ZXAgOiAwLjI1LFxuXHRcdFx0XHRtaW4gOiAwLjUsXG5cdFx0XHRcdG1heCA6IDQuMFxuXHRcdFx0fSxcblx0XHRcdHBsYXliYWNrIDoge1xuXHRcdFx0XHRzdGVwIDoge1xuXHRcdFx0XHRcdHNob3J0IDogNSxcblx0XHRcdFx0XHRtZWRpdW0gOiAzMCxcblx0XHRcdFx0XHRsb25nIDogNjBcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdHZvbHVtZSA6IHtcblx0XHRcdFx0c3RlcCA6IDAuMVxuXHRcdFx0fSxcblx0XHRcdGNvbnRyb2xzIDoge1xuXHRcdFx0XHRjb21tb24gOiBbXG5cdFx0XHRcdFx0WyAncGxheScsICd2b2x1bWUnLCAnZGl2aWRlcicsICd0aW1lbGluZScsICdkaXZpZGVyJywgJ2Z1bGxzY3JlZW4nIF0sXG5cdFx0XHRcdFx0WyAncmF0ZScsICdkaXZpZGVyJywgJ2JhY2t3YXJkJywgJ2RpdmlkZXInLCAnc291cmNlJywgJ2RpdmlkZXInLCAnc3VidGl0bGUnLCAnZGl2aWRlcicsICdkb3dubG9hZCcgXVxuXHRcdFx0XHRdLFxuXHRcdFx0XHRmdWxsc2NyZWVuIDogW1xuXHRcdFx0XHRcdFsgJ3BsYXknLCAndm9sdW1lJywgJ2RpdmlkZXInLCAndGltZWxpbmUnLCAnZGl2aWRlcicsICdyYXRlJywgJ2RpdmlkZXInLCAnYmFja3dhcmQnLCAnZGl2aWRlcicsICdzb3VyY2UnLCAnZGl2aWRlcicsICdzdWJ0aXRsZScsICdkaXZpZGVyJywgJ2Rvd25sb2FkJywgJ2RpdmlkZXInLCAnZnVsbHNjcmVlbicgXVxuXHRcdFx0XHRdXG5cdFx0XHR9XG5cdFx0fSwgb3B0cyk7XG5cblx0XHRjbGFzcyBWaWRlbyB7XG5cdFx0XHRjb25zdHJ1Y3RvciAoY3R4KSB7XG5cdFx0XHRcdHRoaXMuX2N0eCA9IGN0eDtcblx0XHRcdFx0dGhpcy5fdmlkZW8gPSBjdHhbIDAgXTtcblx0XHRcdFx0Ly8gdGhpcy5mdWxsc2NyZWVuID0gbmV3IEZ1bGxzY3JlZW4oKTtcblx0XHRcdFx0dGhpcy5zdWJ0aXRsZXMgPSBbXTtcblx0XHRcdFx0dGhpcy5wbGF5YmFja1JhdGUgPSB0aGlzLl92aWRlby5wbGF5YmFja1JhdGU7XG5cdFx0XHR9XG5cblx0XHRcdGdldCBjdXJyZW50VGltZSAoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLl92aWRlby5jdXJyZW50VGltZTtcblx0XHRcdH1cblxuXHRcdFx0Z2V0IGR1cmF0aW9uICgpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuX3ZpZGVvLmR1cmF0aW9uO1xuXHRcdFx0fVxuXG5cdFx0XHRkZWNyZWFzZVJhdGUgKHN0ZXAsIG1pbikge1xuXHRcdFx0XHRpZiAodGhpcy5fdmlkZW8ucGxheWJhY2tSYXRlID4gbWluKSB7XG5cdFx0XHRcdFx0dGhpcy5fdmlkZW8ucGxheWJhY2tSYXRlIC09IHN0ZXA7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuX3ZpZGVvLnBsYXliYWNrUmF0ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblxuXHRcdFx0aW5jcmVhc2VSYXRlIChzdGVwLCBtYXgpIHtcblx0XHRcdFx0aWYgKHRoaXMuX3ZpZGVvLnBsYXliYWNrUmF0ZSA8IG1heCkge1xuXHRcdFx0XHRcdHRoaXMuX3ZpZGVvLnBsYXliYWNrUmF0ZSArPSBzdGVwO1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLl92aWRlby5wbGF5YmFja1JhdGU7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cblx0XHRcdGluaXQgKCkge1xuXHRcdFx0XHR0aGlzLl9pbml0U3VidGl0bGVzKCk7XG5cdFx0XHRcdHRoaXMuX2luaXRWaWRlbygpO1xuXHRcdFx0fVxuXG5cdFx0XHR0b2dnbGVQbGF5ICgpIHtcblx0XHRcdFx0aWYgKCF0aGlzLl92aWRlby5wbGF5ZWQgfHwgdGhpcy5fdmlkZW8ucGF1c2VkKSB7XG5cdFx0XHRcdFx0b3ZlcmxheS5oaWRlKCk7XG5cdFx0XHRcdFx0dGhpcy5wbGF5KCk7XG5cdFx0XHRcdFx0Y29udHJvbHMucGxheSgpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdG92ZXJsYXkuc2hvdygpO1xuXHRcdFx0XHRcdHRoaXMucGF1c2UoKTtcblx0XHRcdFx0XHRjb250cm9scy5wYXVzZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdF9pbml0U3VidGl0bGVzICgpIHtcblx0XHRcdFx0bGV0IF9zZWxmID0gdGhpcztcblx0XHRcdFx0dGhpcy5fY3R4LmNoaWxkcmVuKCd0cmFja1traW5kPVwic3VidGl0bGVzXCJdJykuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0dmFyIGxhbmd1YWdlID0gJCh0aGlzKS5hdHRyKCdzcmNsYW5nJyk7XG5cdFx0XHRcdFx0dmFyIHRpdGxlID0gJCh0aGlzKS5hdHRyKCdsYWJlbCcpO1xuXHRcdFx0XHRcdHZhciBzcmMgPSAkKHRoaXMpLmF0dHIoJ3NyYycpO1xuXHRcdFx0XHRcdGlmICh0aXRsZS5sZW5ndGggPiAwICYmIHNyYy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0XHRfc2VsZi5zdWJ0aXRsZXMucHVzaCh7XG5cdFx0XHRcdFx0XHRcdHRpdGxlIDogdGl0bGUsXG5cdFx0XHRcdFx0XHRcdHNyYyA6IHNyYyxcblx0XHRcdFx0XHRcdFx0bGFuZ3VhZ2UgOiBsYW5ndWFnZVxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0X2luaXRWaWRlbyAoKSB7XG5cdFx0XHRcdGlmICh0aGlzLl92aWRlby5yZWFkeVN0YXRlID4gSFRNTE1lZGlhRWxlbWVudC5IQVZFX05PVEhJTkcpIHtcblx0XHRcdFx0XHR0aGlzLl9pbml0VmlkZW9FdmVudCgpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuX3ZpZGVvLm9ubG9hZGVkbWV0YWRhdGEgPSAoKSA9PiB7XG5cdFx0XHRcdFx0XHR0aGlzLl9pbml0VmlkZW9FdmVudCgpO1xuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0X2luaXRWaWRlb0V2ZW50ICgpIHtcblx0XHRcdFx0bGV0IF9zZWxmID0gdGhpcztcblxuXHRcdFx0XHRvdmVybGF5LmNzcygnbGluZS1oZWlnaHQnLCB0aGlzLl92aWRlby5jbGllbnRIZWlnaHQgKyAncHgnKTtcblx0XHRcdFx0Y29udGFpbmVyLmNzcygnd2lkdGgnLCB0aGlzLl92aWRlby5jbGllbnRXaWR0aCArICdweCcpO1xuXG5cdFx0XHRcdHRoaXMuX3ZpZGVvLm9udGltZXVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRjb250cm9scy5tb3ZlVGltZU1hcmtlcigpO1xuXHRcdFx0XHR9O1xuXG5cdFx0XHRcdC8vIFRoaXMgaXMgZ2VuZXJhbGx5IGZvciBGaXJlZm94IG9ubHlcblx0XHRcdFx0Ly8gYmVjYXVzZSBpdCBzb21laG93IHJlc2V0cyB0cmFjayBsaXN0XG5cdFx0XHRcdC8vIGZvciB2aWRlbyBlbGVtZW50IGFmdGVyIERPTSBtYW5pcHVsYXRpb24uXG5cblx0XHRcdFx0aWYgKHRoaXMuX3ZpZGVvLnRleHRUcmFja3MubGVuZ3RoID09IDAgJiYgdGhpcy5zdWJ0aXRsZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdHRoaXMuX2N0eC5jaGlsZHJlbigndHJhY2tba2luZD1cInN1YnRpdGxlc1wiXScpLnJlbW92ZSgpO1xuXHRcdFx0XHRcdGZvciAodmFyIGkgaW4gdGhpcy5zdWJ0aXRsZXMpIHtcblx0XHRcdFx0XHRcdGlmICh0aGlzLnN1YnRpdGxlcy5oYXNPd25Qcm9wZXJ0eShpKSkge1xuXHRcdFx0XHRcdFx0XHR0aGlzLl9jdHhcblx0XHRcdFx0XHRcdFx0XHQuYXBwZW5kKCQoJzx0cmFjay8+Jylcblx0XHRcdFx0XHRcdFx0XHRcdC5hdHRyKCdsYWJlbCcsIHRoaXMuc3VidGl0bGVzWyBpIF0udGl0bGUpXG5cdFx0XHRcdFx0XHRcdFx0XHQuYXR0cignc3JjJywgdGhpcy5zdWJ0aXRsZXNbIGkgXS5zcmMpXG5cdFx0XHRcdFx0XHRcdFx0XHQuYXR0cignc3JjbGFuZycsIHRoaXMuc3VidGl0bGVzWyBpIF0ubGFuZ3VhZ2UpXG5cdFx0XHRcdFx0XHRcdFx0XHQuYXR0cignaWQnLCB0aGlzLnN1YnRpdGxlc1sgaSBdLmxhbmd1YWdlKVxuXHRcdFx0XHRcdFx0XHRcdFx0LmF0dHIoJ2tpbmQnLCAnc3VidGl0bGVzJykpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdEZ1bGxzY3JlZW4uaW5pdCgpO1xuXHRcdFx0XHRjb250cm9scy5pbml0KCk7XG5cdFx0XHR9XG5cblx0XHRcdHNlZWsgKHRpbWUpIHtcblx0XHRcdFx0dGhpcy5fdmlkZW8uY3VycmVudFRpbWUgPSB0aW1lXG5cdFx0XHR9XG5cblx0XHRcdHBsYXkgKCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5fdmlkZW8ucGxheSgpXG5cdFx0XHR9XG5cblx0XHRcdHBhdXNlICgpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuX3ZpZGVvLnBhdXNlKClcblx0XHRcdH1cblx0XHR9XG5cblx0XHRjbGFzcyBDb250cm9sIHtcblx0XHRcdGNvbnN0cnVjdG9yIChjc3NDbGFzcywgaWNvbkNsYXNzKSB7XG5cdFx0XHRcdHRoaXMuZWxlbWVudCA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0XHRcdC5hZGRDbGFzcygnY29udHJvbCAnICsgY3NzQ2xhc3MpXG5cdFx0XHRcdFx0LmFwcGVuZCgkKCc8aSAvPicpXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2ZhIGZhLScgKyBpY29uQ2xhc3MpKTtcblx0XHRcdH1cblxuXHRcdFx0c3RhdGljIGRpdmlkZXIgKCkge1xuXHRcdFx0XHRyZXR1cm4gJCgnPGRpdiAvPicpLmFkZENsYXNzKCdkaXZpZGVyJyk7XG5cdFx0XHR9XG5cblx0XHRcdHN0YXRpYyBjcmVhdGUgKG5hbWUpIHtcblx0XHRcdFx0c3dpdGNoIChuYW1lKSB7XG5cdFx0XHRcdFx0Y2FzZSBDX0JBQ0tXQVJEOlxuXHRcdFx0XHRcdFx0cmV0dXJuIG5ldyBCYWNrd2FyZENvbnRyb2woKTtcblxuXHRcdFx0XHRcdGNhc2UgQ19ESVZJREVSOlxuXHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMuZGl2aWRlcigpO1xuXG5cdFx0XHRcdFx0Y2FzZSBDX0RPV05MT0FEOlxuXHRcdFx0XHRcdFx0cmV0dXJuIG5ldyBEb3dubG9hZENvbnRyb2woKTtcblxuXHRcdFx0XHRcdGNhc2UgQ19GT1JXQVJEOlxuXHRcdFx0XHRcdFx0cmV0dXJuIG5ldyBGb3J3YXJkQ29udHJvbCgpO1xuXG5cdFx0XHRcdFx0Y2FzZSBDX0ZVTExTQ1JFRU46XG5cdFx0XHRcdFx0XHRyZXR1cm4gbmV3IEZ1bGxzY3JlZW5Db250cm9sKCk7XG5cblx0XHRcdFx0XHRjYXNlIENfUExBWTpcblx0XHRcdFx0XHRcdHJldHVybiBuZXcgUGxheUNvbnRyb2woKTtcblxuXHRcdFx0XHRcdGNhc2UgQ19SQVRFOlxuXHRcdFx0XHRcdFx0cmV0dXJuIG5ldyBSYXRlQ29udHJvbCgpO1xuXG5cdFx0XHRcdFx0Y2FzZSBDX1NPVVJDRTpcblx0XHRcdFx0XHRcdHJldHVybiBuZXcgU291cmNlQ29udHJvbCgpO1xuXG5cdFx0XHRcdFx0Y2FzZSBDX1NVQlRJVExFOlxuXHRcdFx0XHRcdFx0cmV0dXJuIG5ldyBTdWJ0aXRsZUNvbnRyb2woKTtcblxuXHRcdFx0XHRcdGNhc2UgQ19USU1FTElORTpcblx0XHRcdFx0XHRcdHJldHVybiBuZXcgVGltZWxpbmVDb250cm9sKCk7XG5cblx0XHRcdFx0XHRjYXNlIENfVk9MVU1FOlxuXHRcdFx0XHRcdFx0cmV0dXJuIG5ldyBWb2x1bWVDb250cm9sKCk7XG5cblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRjbGFzcyBDb250cm9sVGV4dCB7XG5cdFx0XHRjb25zdHJ1Y3RvciAoY2xhc3NuYW1lKSB7XG5cdFx0XHRcdHRoaXMuZWxlbWVudCA9ICQoJzxkaXYgLz4nKS5hZGRDbGFzcygnY29udHJvbC10ZXh0ICcgKyBjbGFzc25hbWUpO1xuXHRcdFx0fVxuXG5cdFx0XHRzZXQgdGV4dCAodmFsdWUpIHtcblx0XHRcdFx0dGhpcy5lbGVtZW50Lmh0bWwodmFsdWUpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGNsYXNzIENvbnRyb2xDb250YWluZXIge1xuXHRcdFx0Y29uc3RydWN0b3IgKGljb25DbGFzcykge1xuXHRcdFx0XHRsZXQgX3NlbGYgPSB0aGlzO1xuXHRcdFx0XHR0aGlzLmljb25DbGFzcyA9IGljb25DbGFzcztcblx0XHRcdFx0dGhpcy5pY29uID0gJCgnPGRpdiAvPicpXG5cdFx0XHRcdFx0LmFkZENsYXNzKCdjb250cm9sLWljb24nKVxuXHRcdFx0XHRcdC5hcHBlbmQoJCgnPGkgLz4nKVxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCdmYSBmYS0nICsgaWNvbkNsYXNzKSk7XG5cdFx0XHRcdHRoaXMubGlzdEVsZW1lbnQgPSAkKCc8ZGl2Lz4nKS5hZGRDbGFzcygnY29udHJvbC1pbm5lcicpO1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQgPSAkKCc8ZGl2IC8+Jylcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2NvbnRyb2wgY29udHJvbC1jb250YWluZXInKVxuXHRcdFx0XHRcdC5hcHBlbmQodGhpcy5pY29uKVxuXHRcdFx0XHRcdC5hcHBlbmQodGhpcy5saXN0RWxlbWVudCk7XG5cdFx0XHRcdHRoaXMuX2luZGV4ID0gMDtcblx0XHRcdFx0dGhpcy5saXN0ID0gW107XG5cdFx0XHRcdHRoaXMuaWNvbi5jbGljayhmdW5jdGlvbiAoKSB7IF9zZWxmLm9uQ29udGFpbmVyQ2xpY2soKTsgfSk7XG5cdFx0XHR9XG5cblx0XHRcdGdldCBhY3RpdmUgKCkge1xuXHRcdFx0XHRmb3IgKGxldCBpIGluIHRoaXMubGlzdClcblx0XHRcdFx0XHRpZiAodGhpcy5saXN0WyBpIF0uaGFzQ2xhc3MoJ2FjdGl2ZScpKVxuXHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMubGlzdFsgaSBdO1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblxuXHRcdFx0c2V0IGFjdGl2ZSAoaW5kZXgpIHtcblx0XHRcdFx0bGV0IGhhc0FjdGl2ZSA9IGZhbHNlO1xuXHRcdFx0XHRmb3IgKGxldCBpIGluIHRoaXMubGlzdCkge1xuXHRcdFx0XHRcdGlmICh0aGlzLmxpc3RbIGkgXS5kYXRhKCdpbmRleCcpID09IGluZGV4KSB7XG5cdFx0XHRcdFx0XHR0aGlzLmxpc3RbIGkgXS5hZGRDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHRcdFx0XHR0aGlzLmljb24uaHRtbCh0aGlzLmxpc3RbIGkgXS5odG1sKCkpO1xuXHRcdFx0XHRcdFx0aGFzQWN0aXZlID0gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0dGhpcy5saXN0WyBpIF0ucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghaGFzQWN0aXZlKVxuXHRcdFx0XHRcdHRoaXMuaWNvbi5odG1sKCQoJzxpIC8+JykuYWRkQ2xhc3MoJ2ZhIGZhLScgKyB0aGlzLmljb25DbGFzcykpO1xuXHRcdFx0fVxuXG5cdFx0XHRhZGRJdGVtICh0ZXh0LCBkYXRhKSB7XG5cdFx0XHRcdGxldCBfc2VsZiA9IHRoaXM7XG5cdFx0XHRcdHZhciBpdGVtID0gJCgnPGRpdiAvPicpLmFkZENsYXNzKCdpbm5lci1pdGVtJykuZGF0YSgnaW5kZXgnLCB0aGlzLl9pbmRleCkuaHRtbCh0ZXh0KS5jbGljayhmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0X3NlbGYub25JdGVtQ2xpY2soJCh0aGlzKS5kYXRhKCdpbmRleCcpKTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdGlmICh0eXBlb2YgZGF0YSA9PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRcdGZvciAobGV0IGsgaW4gZGF0YSlcblx0XHRcdFx0XHRcdGl0ZW0uZGF0YShrLCBkYXRhWyBrIF0pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuX2luZGV4Kys7XG5cdFx0XHRcdHRoaXMubGlzdC5wdXNoKGl0ZW0pO1xuXHRcdFx0XHR0aGlzLmxpc3RFbGVtZW50LmFwcGVuZChpdGVtKTtcblxuXHRcdFx0XHRyZXR1cm4gaXRlbTtcblx0XHRcdH1cblxuXHRcdFx0Z2V0QnlJbmRleCAoaW5kZXgpIHtcblx0XHRcdFx0Zm9yIChsZXQgaSBpbiB0aGlzLmxpc3QpXG5cdFx0XHRcdFx0aWYgKHRoaXMubGlzdFsgaSBdLmRhdGEoJ2luZGV4JykgPT0gaW5kZXgpXG5cdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5saXN0WyBpIF07XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXG5cdFx0XHRvbkNvbnRhaW5lckNsaWNrICgpIHtcblx0XHRcdH1cblxuXHRcdFx0b25JdGVtQ2xpY2sgKGluZGV4KSB7XG5cdFx0XHRcdHRoaXMuYWN0aXZlID0gaW5kZXg7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y2xhc3MgQmFja3dhcmRDb250cm9sIGV4dGVuZHMgQ29udHJvbCB7XG5cdFx0XHRjb25zdHJ1Y3RvciAoKSB7XG5cdFx0XHRcdHN1cGVyKCdiYWNrd2FyZCcsICd1bmRvJyk7XG5cdFx0XHRcdHRoaXMuZWxlbWVudC5jbGljayhlID0+IHtcblx0XHRcdFx0XHRpZiAodmlkZW8uY3VycmVudFRpbWUgLSBvcHRpb25zLnBsYXliYWNrLnN0ZXAubWVkaXVtID4gMClcblx0XHRcdFx0XHRcdHZpZGVvLnNlZWsodmlkZW8uY3VycmVudFRpbWUgLSBvcHRpb25zLnBsYXliYWNrLnN0ZXAubWVkaXVtKTtcblx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHR2aWRlby5zZWVrKDApO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRjbGFzcyBEb3dubG9hZENvbnRyb2wgZXh0ZW5kcyBDb250cm9sIHtcblx0XHRcdGNvbnN0cnVjdG9yICgpIHtcblx0XHRcdFx0c3VwZXIoJycsICcnKTtcblx0XHRcdFx0dGhpcy5lbGVtZW50ID0gJCgnPGEgLz4nKS5hdHRyKCdocmVmJywgJycpLmF0dHIoJ3RhcmdldCcsICdfYmxhbmsnKS5hdHRyKCdkb3dubG9hZCcsICcnKS5hZGRDbGFzcygnY29udHJvbCBkb3dubG9hZCcpLmFwcGVuZCgkKCc8aSAvPicpLmFkZENsYXNzKCdmYSBmYS1kb3dubG9hZCcpKTtcblx0XHRcdH1cblxuXHRcdFx0c2V0IGxpbmsgKHZhbHVlKSB7XG5cdFx0XHRcdHRoaXMuZWxlbWVudC5hdHRyKCdocmVmJywgdmFsdWUpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGNsYXNzIEZvcndhcmRDb250cm9sIGV4dGVuZHMgQ29udHJvbCB7XG5cdFx0XHRjb25zdHJ1Y3RvciAoKSB7XG5cdFx0XHRcdHN1cGVyKCdmb3J3YXJkJywgJ3JlZG8nKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRjbGFzcyBGdWxsc2NyZWVuQ29udHJvbCBleHRlbmRzIENvbnRyb2wge1xuXHRcdFx0Y29uc3RydWN0b3IgKCkge1xuXHRcdFx0XHRzdXBlcignZnVsbHNjcmVlbicsICdhcnJvd3MtYWx0Jyk7XG5cdFx0XHRcdHRoaXMuZWxlbWVudC5jbGljayhlID0+IHtcblx0XHRcdFx0XHRGdWxsc2NyZWVuLnRvZ2dsZSgpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRjbGFzcyBQbGF5Q29udHJvbCBleHRlbmRzIENvbnRyb2wge1xuXHRcdFx0Y29uc3RydWN0b3IgKCkge1xuXHRcdFx0XHRzdXBlcigncGxheScsICdwbGF5Jyk7XG5cdFx0XHRcdHRoaXMuZWxlbWVudC5jbGljayhlID0+IHtcblx0XHRcdFx0XHR2aWRlby50b2dnbGVQbGF5KCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHRwYXVzZSAoKSB7XG5cdFx0XHRcdHRoaXMuZWxlbWVudFxuXHRcdFx0XHRcdC5jaGlsZHJlbignLmZhJylcblx0XHRcdFx0XHQucmVtb3ZlQ2xhc3MoJ2ZhLXBhdXNlJylcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2ZhLXBsYXknKTtcblx0XHRcdH1cblxuXHRcdFx0cGxheSAoKSB7XG5cdFx0XHRcdHRoaXMuZWxlbWVudFxuXHRcdFx0XHRcdC5jaGlsZHJlbignLmZhJylcblx0XHRcdFx0XHQucmVtb3ZlQ2xhc3MoJ2ZhLXBsYXknKVxuXHRcdFx0XHRcdC5hZGRDbGFzcygnZmEtcGF1c2UnKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRjbGFzcyBSYXRlQ29udHJvbCB7XG5cdFx0XHRjb25zdHJ1Y3RvciAoKSB7XG5cdFx0XHRcdHRoaXMuZG93biA9IG5ldyBDb250cm9sKCdyYXRlLWRvd24nLCAnYmFja3dhcmQnKTtcblx0XHRcdFx0dGhpcy51cCA9IG5ldyBDb250cm9sKCdyYXRlLXVwJywgJ2ZvcndhcmQnKTtcblx0XHRcdFx0dGhpcy5jdXJyZW50ID0gbmV3IENvbnRyb2xUZXh0KCdyYXRlLWN1cnJlbnQnKTtcblxuXHRcdFx0XHR0aGlzLmRvd24uZWxlbWVudC5jbGljayhlID0+IHtcblx0XHRcdFx0XHR0aGlzLmRlY3JlYXNlKCk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdHRoaXMudXAuZWxlbWVudC5jbGljayhlID0+IHtcblx0XHRcdFx0XHR0aGlzLmluY3JlYXNlKCk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdHRoaXMuZWxlbWVudCA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0XHRcdC5hZGRDbGFzcygnY29udHJvbC1jb250YWluZXInKVxuXHRcdFx0XHRcdC5hcHBlbmQodGhpcy5kb3duLmVsZW1lbnQpXG5cdFx0XHRcdFx0LmFwcGVuZCh0aGlzLmN1cnJlbnQuZWxlbWVudClcblx0XHRcdFx0XHQuYXBwZW5kKHRoaXMudXAuZWxlbWVudCk7XG5cdFx0XHR9XG5cblx0XHRcdGRlY3JlYXNlICgpIHtcblx0XHRcdFx0aWYgKHZpZGVvLnBsYXliYWNrUmF0ZSA+IG9wdGlvbnMucmF0ZS5taW4pIHtcblx0XHRcdFx0XHR2aWRlby5kZWNyZWFzZVJhdGUob3B0aW9ucy5yYXRlLm1pbik7XG5cblx0XHRcdFx0XHR0aGlzLnVwLmVsZW1lbnQucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkJyk7XG5cdFx0XHRcdFx0Q29va2llLnNldCgncmF0ZScsIHZpZGVvLnBsYXliYWNrUmF0ZSk7XG5cdFx0XHRcdFx0dGhpcy5zaG93KCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5kb3duLmVsZW1lbnQuYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0bG9hZCAoKSB7XG5cdFx0XHRcdC8qKiBUT0RPOiBNb3ZlIHdvcmsgd2l0aCBDb29raWUgdG8gdGhlIFZpZGVvIGNsYXNzICovXG5cdFx0XHRcdHZpZGVvLnBsYXliYWNrUmF0ZSA9IENvb2tpZS5nZXQoJ3JhdGUnLCAxKTtcblx0XHRcdFx0dGhpcy5zaG93KCk7XG5cdFx0XHR9XG5cblx0XHRcdHNob3cgKCkge1xuXHRcdFx0XHR0aGlzLmN1cnJlbnQudGV4dCA9ICfDlycgKyB2aWRlby5wbGF5YmFja1JhdGUudG9GaXhlZCgyKS50b1N0cmluZygpLnJlcGxhY2UoJywnLCAnLicpO1xuXHRcdFx0fVxuXG5cdFx0XHRpbmNyZWFzZSAoKSB7XG5cdFx0XHRcdGlmICh2aWRlby5wbGF5YmFja1JhdGUgPCBvcHRpb25zLnJhdGUubWF4KSB7XG5cdFx0XHRcdFx0dGhpcy5kb3duLmVsZW1lbnQucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkJyk7XG5cdFx0XHRcdFx0dmlkZW8ucGxheWJhY2tSYXRlICs9IG9wdGlvbnMucmF0ZS5zdGVwO1xuXHRcdFx0XHRcdENvb2tpZS5zZXQoJ3JhdGUnLCB2aWRlby5wbGF5YmFja1JhdGUpO1xuXHRcdFx0XHRcdHRoaXMuc2hvdygpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHR0aGlzLnVwLmVsZW1lbnQuYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y2xhc3MgU291cmNlQ29udHJvbCBleHRlbmRzIENvbnRyb2xDb250YWluZXIge1xuXHRcdFx0Y29uc3RydWN0b3IgKCkge1xuXHRcdFx0XHRzdXBlcignYnVsbHNleWUnKTtcblx0XHRcdFx0LyoqIFRPRE86IE1vdmUgc291cmNlcyB0byB0aGUgYXJndW1lbnRzIGluIGNvbnN0cm9yICovXG5cdFx0XHRcdGlmIChzb3VyY2VzLmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0XHRmb3IgKHZhciBpIGluIHNvdXJjZXMpIHtcblx0XHRcdFx0XHRcdHRoaXMuYWRkSXRlbShzb3VyY2VzWyBpIF0udGl0bGUsIHsgc3JjIDogc291cmNlc1sgaSBdLnNyYyB9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0c2V0IChpbmRleCkge1xuXHRcdFx0XHQvKiogVE9ETzogRW1pdCBldmVudCBvbiBzZXQgc291cmNlKi9cblx0XHRcdFx0bGV0IHMgPSB0aGlzLmdldEJ5SW5kZXgoaW5kZXgpO1xuXHRcdFx0XHRpZiAocyAhPSBudWxsKSB7XG5cdFx0XHRcdFx0ZWxlbWVudC5hdHRyKCdzcmMnLCBzLmRhdGEoJ3NyYycpKTtcblx0XHRcdFx0XHRjb250cm9scy5kb3dubG9hZCA9IHMuZGF0YSgnc3JjJyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0b25JdGVtQ2xpY2sgKGluZGV4KSB7XG5cdFx0XHRcdHN1cGVyLm9uSXRlbUNsaWNrKGluZGV4KTtcblx0XHRcdFx0dGhpcy5zZXQoaW5kZXgpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGNsYXNzIFN1YnRpdGxlQ29udHJvbCBleHRlbmRzIENvbnRyb2xDb250YWluZXIge1xuXHRcdFx0Y29uc3RydWN0b3IgKCkge1xuXHRcdFx0XHRzdXBlcignY29tbWVudGluZy1vJyk7XG5cdFx0XHRcdGlmICh2aWRlby5zdWJ0aXRsZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdGZvciAodmFyIGkgaW4gdmlkZW8uc3VidGl0bGVzKSB7XG5cdFx0XHRcdFx0XHRpZiAoIXZpZGVvLnN1YnRpdGxlcy5oYXNPd25Qcm9wZXJ0eShpKSkgY29udGludWU7XG5cdFx0XHRcdFx0XHRsZXQgaXRlbSA9IHZpZGVvLnN1YnRpdGxlc1sgaSBdO1xuXHRcdFx0XHRcdFx0dGhpcy5hZGRJdGVtKGl0ZW0udGl0bGUsIHtcblx0XHRcdFx0XHRcdFx0c3JjIDogaXRlbS5zcmMsXG5cdFx0XHRcdFx0XHRcdGxhbmd1YWdlIDogaXRlbS5sYW5ndWFnZVxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHNldCB0cmFjayAoaW5kZXgpIHtcblx0XHRcdFx0dmFyIHQgPSB0aGlzLmdldEJ5SW5kZXgoaW5kZXgpO1xuXHRcdFx0XHRpZiAodCAhPSBudWxsICYmIHZpZGVvLnRleHRUcmFja3MubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdGxldCBsYW5ndWFnZSA9IHQuZGF0YSgnbGFuZ3VhZ2UnKTtcblx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHZpZGVvLnRleHRUcmFja3MubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRcdGlmICh2aWRlby50ZXh0VHJhY2tzWyBpIF0ubGFuZ3VhZ2UgPT0gbGFuZ3VhZ2UpXG5cdFx0XHRcdFx0XHRcdHZpZGVvLnRleHRUcmFja3NbIGkgXS5tb2RlID0gJ3Nob3dpbmcnO1xuXHRcdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0XHR2aWRlby50ZXh0VHJhY2tzWyBpIF0ubW9kZSA9ICdoaWRkZW4nO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRvbkNvbnRhaW5lckNsaWNrICgpIHtcblx0XHRcdFx0c3VwZXIub25Db250YWluZXJDbGljaygpO1xuXHRcdFx0XHRzdXBlci5vbkl0ZW1DbGljaygtMSk7XG5cdFx0XHRcdGlmICh2aWRlby50ZXh0VHJhY2tzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHZpZGVvLnRleHRUcmFja3MubGVuZ3RoOyBpKyspXG5cdFx0XHRcdFx0XHR2aWRlby50ZXh0VHJhY2tzWyBpIF0ubW9kZSA9ICdoaWRkZW4nO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdG9uSXRlbUNsaWNrIChpbmRleCkge1xuXHRcdFx0XHRzdXBlci5vbkl0ZW1DbGljayhpbmRleCk7XG5cdFx0XHRcdHRoaXMudHJhY2sgPSBpbmRleDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRjbGFzcyBUaW1lbGluZUNvbnRyb2wge1xuXHRcdFx0Y29uc3RydWN0b3IgKCkge1xuXHRcdFx0XHRsZXQgX3NlbGYgPSB0aGlzLFxuXHRcdFx0XHRcdGR1cmF0aW9uID0gdmlkZW8uZHVyYXRpb247XG5cblx0XHRcdFx0dGhpcy5kcmFnID0gZmFsc2U7XG5cblx0XHRcdFx0dGhpcy5jdXJyZW50ID0gbmV3IENvbnRyb2xUZXh0KCd0aW1lLWN1cnJlbnQnKTtcblx0XHRcdFx0dGhpcy50b3RhbCA9IG5ldyBDb250cm9sVGV4dCgndGltZS10b3RhbCcpO1xuXG5cdFx0XHRcdHRoaXMubWFya2VyID0gJCgnPGRpdiAvPicpLmFkZENsYXNzKCd0aW1lLW1hcmtlcicpO1xuXG5cdFx0XHRcdHRoaXMubWFya2VyU2hhZG93ID0gJCgnPGRpdiAvPicpXG5cdFx0XHRcdFx0LmFkZENsYXNzKCd0aW1lLW1hcmtlciBzaGFkb3cnKVxuXHRcdFx0XHRcdC5hcHBlbmQoKVxuXHRcdFx0XHRcdC5oaWRlKCk7XG5cblx0XHRcdFx0dGhpcy5tYXJrZXJTaGFkb3dUaW1lID0gJCgnPGRpdiAvPicpLmFkZENsYXNzKCd0aW1lJyk7XG5cdFx0XHRcdHRoaXMubWFya2VyVGltZSA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0XHRcdC5hZGRDbGFzcygndGltZScpXG5cdFx0XHRcdFx0LmhpZGUoKTtcblx0XHRcdFx0dGhpcy5wbGF5ZWQgPSAkKCc8ZGl2IC8+JykuYWRkQ2xhc3MoJ3RpbWUtcGxheWVkJyk7XG5cdFx0XHRcdHRoaXMuY3VycmVudC50ZXh0ID0gJzAwOjAwJztcblx0XHRcdFx0dGhpcy5saW5lID0gJCgnPGRpdiAvPicpXG5cdFx0XHRcdFx0LmFkZENsYXNzKCd0aW1lbGluZScpXG5cdFx0XHRcdFx0LmFwcGVuZCh0aGlzLm1hcmtlci5hcHBlbmQodGhpcy5tYXJrZXJUaW1lKSlcblx0XHRcdFx0XHQuYXBwZW5kKHRoaXMubWFya2VyU2hhZG93LmFwcGVuZCh0aGlzLm1hcmtlclNoYWRvd1RpbWUpKVxuXHRcdFx0XHRcdC5hcHBlbmQodGhpcy5wbGF5ZWQpXG5cdFx0XHRcdFx0Lm9uKHtcblx0XHRcdFx0XHRcdCdtb3VzZW1vdmUnIDogKGUpID0+IHtcblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuZHJhZykgcmV0dXJuO1xuXG5cdFx0XHRcdFx0XHRcdGxldCBwID0gdGhpcy5nZXRQb3NpdGlvbihlLnBhZ2VYKTtcblx0XHRcdFx0XHRcdFx0aWYgKHAgPiAwICYmIHAgPCAxKSB7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5tYXJrZXJTaGFkb3cuc2hvdygpO1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMubWFya2VyU2hhZG93LmNzcygnbGVmdCcsIHAgKiAxMDAgKyAnJScpO1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMubWFya2VyU2hhZG93VGltZS5odG1sKHNlY29uZHNUb1RpbWUoZHVyYXRpb24gKiBwKSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0XHRcdHRoaXMubWFya2VyU2hhZG93LmhpZGUoKTtcblx0XHRcdFx0XHRcdH0sXG5cblx0XHRcdFx0XHRcdCdtb3VzZWxlYXZlJyA6IChlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLmRyYWcpIHJldHVybjtcblx0XHRcdFx0XHRcdFx0dGhpcy5tYXJrZXJTaGFkb3cuaGlkZSgpXG5cdFx0XHRcdFx0XHR9LFxuXG5cdFx0XHRcdFx0XHQnY2xpY2snIDogKGUpID0+IHtcblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuZHJhZykgcmV0dXJuO1xuXHRcdFx0XHRcdFx0XHR2aWRlby5zZWVrKHZpZGVvLmR1cmF0aW9uICogdGhpcy5nZXRQb3NpdGlvbihlLnBhZ2VYKSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0dGhpcy5lbGVtZW50ID0gJCgnPGRpdiAvPicpXG5cdFx0XHRcdFx0LmFkZENsYXNzKCd0aW1lbGluZS1jb250YWluZXInKVxuXHRcdFx0XHRcdC5hcHBlbmQoJCgnPGRpdiAvPicpXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3RpbWVsaW5lLXN1YmNvbnRhaW5lcicpXG5cdFx0XHRcdFx0XHQuYXBwZW5kKHRoaXMuY3VycmVudC5lbGVtZW50KVxuXHRcdFx0XHRcdFx0LmFwcGVuZCh0aGlzLmxpbmUpXG5cdFx0XHRcdFx0XHQuYXBwZW5kKHRoaXMudG90YWwuZWxlbWVudCkpO1xuXG5cdFx0XHRcdHRoaXMubWFya2VyLm9uKCdtb3VzZWRvd24nLCAoZSkgPT4ge1xuXHRcdFx0XHRcdGlmIChlLndoaWNoICE9IDEpIHJldHVybjtcblx0XHRcdFx0XHR0aGlzLm1hcmtlclNoYWRvdy5oaWRlKCk7XG5cdFx0XHRcdFx0dGhpcy5kcmFnID0gdHJ1ZTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0JChkb2N1bWVudCkub24oe1xuXG5cdFx0XHRcdFx0J21vdXNlbW92ZScgOiAoZSkgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKCF0aGlzLmRyYWcpIHJldHVybjtcblx0XHRcdFx0XHRcdGxldCBwID0gdGhpcy5nZXRQb3NpdGlvbihlLnBhZ2VYKTtcblx0XHRcdFx0XHRcdGlmIChwID4gMCAmJiBwIDwgMSkge1xuXHRcdFx0XHRcdFx0XHR0aGlzLm1hcmtlclRpbWVcblx0XHRcdFx0XHRcdFx0XHQuc2hvdygpXG5cdFx0XHRcdFx0XHRcdFx0Lmh0bWwoc2Vjb25kc1RvVGltZShkdXJhdGlvbiAqIHApKVxuXHRcdFx0XHRcdFx0XHR2aWRlby5zZWVrKGR1cmF0aW9uICogcCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSxcblxuXHRcdFx0XHRcdCdtb3VzZXVwJyA6IChlKSA9PiB7XG5cdFx0XHRcdFx0XHR0aGlzLm1hcmtlclRpbWUuaGlkZSgpXG5cdFx0XHRcdFx0XHR0aGlzLmRyYWcgPSBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHRnZXRQb3NpdGlvbiAoeCkge1xuXHRcdFx0XHRyZXR1cm4gKHggLSB0aGlzLmxpbmUub2Zmc2V0KCkubGVmdCkgLyB0aGlzLmxpbmUud2lkdGgoKTtcblx0XHRcdH1cblxuXHRcdFx0bW92ZSAoKSB7XG5cdFx0XHRcdHZhciB0ID0gKHZpZGVvLmN1cnJlbnRUaW1lIC8gdmlkZW8uZHVyYXRpb24gKiAxMDApLnRvRml4ZWQoMikgKyAnJSc7XG5cdFx0XHRcdHRoaXMubWFya2VyLmNzcygnbGVmdCcsIHQpO1xuXHRcdFx0XHR0aGlzLnBsYXllZC5jc3MoJ3dpZHRoJywgdCk7XG5cdFx0XHRcdHRoaXMuY3VycmVudC50ZXh0ID0gc2Vjb25kc1RvVGltZSh2aWRlby5jdXJyZW50VGltZSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y2xhc3MgVm9sdW1lQ29udHJvbCB7XG5cdFx0XHRjb25zdHJ1Y3RvciAoKSB7XG5cdFx0XHRcdGxldCBfc2VsZiA9IHRoaXM7XG5cblx0XHRcdFx0dGhpcy5pY29uID0gJCgnPGRpdi8+Jylcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2NvbnRyb2wtaWNvbicpXG5cdFx0XHRcdFx0LmFwcGVuZCgkKCc8aSAvPicpXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2ZhIGZhLXZvbHVtZS1kb3duJykpXG5cdFx0XHRcdFx0LmNsaWNrKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdF9zZWxmLnRvZ2dsZU11dGVkKCk7XG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0dGhpcy5tYXJrZXIgPSAkKCc8ZGl2Lz4nKS5hZGRDbGFzcygndm9sdW1lLW1hcmtlcicpO1xuXG5cdFx0XHRcdHRoaXMuYWN0aXZlID0gJCgnPGRpdi8+JykuYWRkQ2xhc3MoJ3ZvbHVtZS1hY3RpdmUnKTtcblxuXHRcdFx0XHR0aGlzLmxpbmUgPSAkKCc8ZGl2Lz4nKVxuXHRcdFx0XHRcdC5hZGRDbGFzcygndm9sdW1lLWxpbmUnKVxuXHRcdFx0XHRcdC5hcHBlbmQodGhpcy5hY3RpdmUpXG5cdFx0XHRcdFx0LmFwcGVuZCh0aGlzLm1hcmtlcilcblx0XHRcdFx0XHQub24oJ2NsaWNrJywgKGUpID0+IHtcblx0XHRcdFx0XHRcdGlmICh0aGlzLmRyYWcpIHJldHVybjtcblx0XHRcdFx0XHRcdGxldCBwID0gdGhpcy5nZXRQb3NpdGlvbihlLnBhZ2VZKTtcblx0XHRcdFx0XHRcdGlmIChwID49IDAgJiYgcCA8PSAxKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnRyb2xzLnZvbHVtZSA9IDEgLSBwXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0dGhpcy5lbGVtZW50ID0gJCgnPGRpdiAvPicpXG5cdFx0XHRcdFx0LmFkZENsYXNzKCdjb250cm9sIGNvbnRyb2wtY29udGFpbmVyJylcblx0XHRcdFx0XHQuYXBwZW5kKHRoaXMuaWNvbilcblx0XHRcdFx0XHQuYXBwZW5kKCQoJzxkaXYgLz4nKVxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCdjb250cm9sLWlubmVyIHZvbHVtZS1zbGlkZXInKVxuXHRcdFx0XHRcdFx0LmFwcGVuZCh0aGlzLmxpbmUpKTtcblxuXHRcdFx0XHR0aGlzLmRyYWcgPSBmYWxzZTtcblxuXHRcdFx0XHR0aGlzLm1hcmtlci5vbignbW91c2Vkb3duJywgKGUpID0+IHtcblx0XHRcdFx0XHRpZiAoZS53aGljaCAhPSAxKSByZXR1cm47XG5cdFx0XHRcdFx0dGhpcy5kcmFnID0gdHJ1ZTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0JChkb2N1bWVudCkub24oe1xuXHRcdFx0XHRcdCdtb3VzZW1vdmUnIDogKGUpID0+IHtcblx0XHRcdFx0XHRcdGlmICghdGhpcy5kcmFnKSByZXR1cm47XG5cdFx0XHRcdFx0XHRsZXQgcCA9IHRoaXMuZ2V0UG9zaXRpb24oZS5wYWdlWSk7XG5cdFx0XHRcdFx0XHRpZiAocCA+PSAwICYmIHAgPD0gMSkge1xuXHRcdFx0XHRcdFx0XHRjb250cm9scy52b2x1bWUgPSAxIC0gcFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0sXG5cblx0XHRcdFx0XHQnbW91c2V1cCcgOiAoZSkgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy5kcmFnID0gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0c2V0IHZhbHVlICh2YWx1ZSkge1xuXHRcdFx0XHR2YXIgaWNvbiA9IHRoaXMuaWNvbi5jaGlsZHJlbignLmZhJykuZXEoLTEpO1xuXHRcdFx0XHRpY29uLnJlbW92ZUNsYXNzKCk7XG5cdFx0XHRcdGlmICh2YWx1ZSA8IDAuMDUpIHtcblx0XHRcdFx0XHR2aWRlby5tdXRlZCA9IHRydWU7XG5cdFx0XHRcdFx0aWNvbi5hZGRDbGFzcygnZmEgZmEtdm9sdW1lLW9mZicpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdHZpZGVvLm11dGVkID0gZmFsc2U7XG5cdFx0XHRcdFx0dmlkZW8udm9sdW1lID0gdmFsdWU7XG5cdFx0XHRcdFx0aWYgKHZhbHVlIDwgMC41KVxuXHRcdFx0XHRcdFx0aWNvbi5hZGRDbGFzcygnZmEgZmEtdm9sdW1lLWRvd24nKTtcblx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRpY29uLmFkZENsYXNzKCdmYSBmYS12b2x1bWUtdXAnKTtcblx0XHRcdFx0XHRDb29raWUuc2V0KCd2b2x1bWUnLCB2YWx1ZSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRsZXQgcCA9IE1hdGgucm91bmQodmFsdWUgKiAxMDApLnRvU3RyaW5nKCkgKyAnJSc7XG5cdFx0XHRcdHRoaXMuYWN0aXZlLmNzcygnaGVpZ2h0JywgcCk7XG5cdFx0XHRcdHRoaXMubWFya2VyLmNzcygnYm90dG9tJywgcCk7XG5cdFx0XHR9XG5cblx0XHRcdHRvZ2dsZU11dGVkICgpIHtcblx0XHRcdFx0aWYgKHZpZGVvLm11dGVkID09IHRydWUpIHtcblx0XHRcdFx0XHR0aGlzLnZhbHVlID0gQ29va2llLmdldCgndm9sdW1lJywgMC40KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0dGhpcy52YWx1ZSA9IDA7XG5cdFx0XHR9XG5cblx0XHRcdGdldFBvc2l0aW9uICh5KSB7XG5cdFx0XHRcdHJldHVybiAoeSAtIHRoaXMubGluZS5vZmZzZXQoKS50b3ApIC8gdGhpcy5saW5lLmhlaWdodCgpO1xuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0Y2xhc3MgQ29va2llIHtcblx0XHRcdHN0YXRpYyBnZXQgKG5hbWUsIGRmbHQpIHtcblx0XHRcdFx0dmFyIGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKTtcblx0XHRcdFx0Zm9yICh2YXIgaSBpbiBjb29raWVzKSB7XG5cdFx0XHRcdFx0dmFyIGQgPSBjb29raWVzWyBpIF0udHJpbSgpLnNwbGl0KCc9Jyk7XG5cdFx0XHRcdFx0aWYgKGRbIDAgXSA9PSAnbGVwbGF5ZXJfJyArIG5hbWUpXG5cdFx0XHRcdFx0XHRyZXR1cm4gZFsgMSBdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBkZmx0O1xuXHRcdFx0fTtcblxuXHRcdFx0c3RhdGljIHNldCAobmFtZSwgdmFsdWUpIHtcblx0XHRcdFx0dmFyIGQgPSBuZXcgRGF0ZSgpO1xuXHRcdFx0XHRkLnNldERhdGUoZC55ZWFyICsgMSk7XG5cdFx0XHRcdGRvY3VtZW50LmNvb2tpZSA9ICdsZXBsYXllcl8nICsgbmFtZSArICc9JyArIHZhbHVlICsgJztleHBpcmVzPScgKyBkLnRvU3RyaW5nKCk7XG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdGNsYXNzIENvbnRyb2xDb2xsZWN0aW9uIHtcblx0XHRcdGNvbnN0cnVjdG9yIChuYW1lLCBhY3RpdmUpIHtcblx0XHRcdFx0dGhpcy5pdGVtcyA9IFtdO1xuXHRcdFx0XHR0aGlzLmFjdGl2ZSA9IGFjdGl2ZSB8fCBmYWxzZTtcblx0XHRcdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHRcdH1cblxuXHRcdFx0c2V0IGRvd25sb2FkICh2YWx1ZSkge1xuXHRcdFx0XHRpZiAodGhpcy5oYXMoQ19ET1dOTE9BRCkpIHtcblx0XHRcdFx0XHR0aGlzLml0ZW1zLmRvd25sb2FkLmxpbmsgPSB2YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRzZXQgc291cmNlICh2YWx1ZSkge1xuXHRcdFx0XHRpZiAodGhpcy5oYXMoQ19TT1VSQ0UpKVxuXHRcdFx0XHRcdHRoaXMuaXRlbXMuc291cmNlLnNldCh2YWx1ZSk7XG5cdFx0XHR9XG5cblx0XHRcdHNldCB0b3RhbFRpbWUgKHZhbHVlKSB7XG5cdFx0XHRcdGlmICh0aGlzLmhhcyhDX1RJTUVMSU5FKSlcblx0XHRcdFx0XHR0aGlzLml0ZW1zLnRpbWVsaW5lLnRvdGFsLnRleHQgPSB2YWx1ZTtcblx0XHRcdH1cblxuXHRcdFx0c2V0IHZvbHVtZSAodmFsdWUpIHtcblx0XHRcdFx0aWYgKHRoaXMuaGFzKENfVk9MVU1FKSlcblx0XHRcdFx0XHR0aGlzLml0ZW1zLnZvbHVtZS52YWx1ZSA9IHZhbHVlO1xuXHRcdFx0fVxuXG5cdFx0XHRhZGQgKG5hbWUpIHtcblx0XHRcdFx0aWYgKG5hbWUgPT0gQ19ESVZJREVSKVxuXHRcdFx0XHRcdHJldHVybiBDb250cm9sLmNyZWF0ZShuYW1lKTtcblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5pdGVtc1sgbmFtZSBdID0gQ29udHJvbC5jcmVhdGUobmFtZSk7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuaXRlbXNbIG5hbWUgXS5lbGVtZW50O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGhhcyAobmFtZSkge1xuXHRcdFx0XHRyZXR1cm4gKHR5cGVvZiB0aGlzLml0ZW1zWyBuYW1lIF0gPT0gJ29iamVjdCcpO1xuXHRcdFx0fVxuXG5cdFx0XHRoaWRlICgpIHtcblx0XHRcdFx0Y29udGFpbmVyLmZpbmQoJy5jb250cm9scy0nICsgdGhpcy5uYW1lKS5oaWRlKCk7XG5cdFx0XHR9XG5cblx0XHRcdGluaXQgKCkge1xuXHRcdFx0XHR0aGlzLnZvbHVtZSA9IENvb2tpZS5nZXQoJ3ZvbHVtZScsIDAuNCk7XG5cdFx0XHRcdHRoaXMuaW5pdFRpbWVsaW5lKCk7XG5cdFx0XHRcdHRoaXMudG90YWxUaW1lID0gc2Vjb25kc1RvVGltZSh2aWRlby5kdXJhdGlvbik7XG5cdFx0XHRcdHRoaXMuaW5pdFJhdGUoKTtcblx0XHRcdH1cblxuXHRcdFx0aW5pdFJhdGUgKCkge1xuXHRcdFx0XHRpZiAodGhpcy5oYXMoQ19SQVRFKSlcblx0XHRcdFx0XHR0aGlzLml0ZW1zLnJhdGUubG9hZCgpO1xuXHRcdFx0fVxuXG5cdFx0XHRpbml0VGltZWxpbmUgKCkge1xuXHRcdFx0XHRpZiAodGhpcy5oYXMoQ19USU1FTElORSkpIHtcblx0XHRcdFx0XHRpZiAodGhpcy5pdGVtcy50aW1lbGluZS5lbGVtZW50LndpZHRoKCkgPCAyMClcblx0XHRcdFx0XHRcdHRoaXMuaXRlbXMudGltZWxpbmUuZWxlbWVudC5oaWRlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0bW92ZVRpbWVNYXJrZXIgKCkge1xuXHRcdFx0XHRpZiAodGhpcy5oYXMoQ19USU1FTElORSkpXG5cdFx0XHRcdFx0dGhpcy5pdGVtcy50aW1lbGluZS5tb3ZlKCk7XG5cdFx0XHR9XG5cblx0XHRcdHBhdXNlICgpIHtcblx0XHRcdFx0aWYgKHRoaXMuaGFzKENfUExBWSkpXG5cdFx0XHRcdFx0dGhpcy5pdGVtcy5wbGF5LnBhdXNlKCk7XG5cdFx0XHR9XG5cblx0XHRcdHBsYXkgKCkge1xuXHRcdFx0XHRpZiAodGhpcy5oYXMoQ19QTEFZKSlcblx0XHRcdFx0XHR0aGlzLml0ZW1zLnBsYXkucGxheSgpO1xuXHRcdFx0fVxuXG5cdFx0XHRzaG93ICgpIHtcblx0XHRcdFx0Y29udGFpbmVyLmZpbmQoJy5jb250cm9scy0nICsgdGhpcy5uYW1lKS5zaG93KCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y2xhc3MgQ29udHJvbHMge1xuXHRcdFx0Y29uc3RydWN0b3IgKCkge1xuXHRcdFx0XHR0aGlzLmNvbGxlY3Rpb25zID0ge1xuXHRcdFx0XHRcdGNvbW1vbiA6IG5ldyBDb250cm9sQ29sbGVjdGlvbignY29tbW9uJyksXG5cdFx0XHRcdFx0bWluaSA6IG5ldyBDb250cm9sQ29sbGVjdGlvbignbWluaScpLFxuXHRcdFx0XHRcdGZ1bGxzY3JlZW4gOiBuZXcgQ29udHJvbENvbGxlY3Rpb24oJ2Z1bGxzY3JlZW4nKVxuXHRcdFx0XHR9O1xuXHRcdFx0XHR0aGlzLmNvbGxlY3Rpb25zLmNvbW1vbi5hY3RpdmUgPSB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRnZXQgY29tbW9uICgpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuY29sbGVjdGlvbnMuY29tbW9uO1xuXHRcdFx0fVxuXG5cdFx0XHRnZXQgZnVsbHNjcmVlbiAoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmNvbGxlY3Rpb25zLmZ1bGxzY3JlZW47XG5cdFx0XHR9XG5cblx0XHRcdGdldCBtaW5pICgpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuY29sbGVjdGlvbnMubWluaTtcblx0XHRcdH1cblxuXHRcdFx0c2V0IGRvd25sb2FkICh2YWx1ZSkge1xuXHRcdFx0XHRmb3IgKHZhciBpIGluIHRoaXMuY29sbGVjdGlvbnMpIHtcblx0XHRcdFx0XHR0aGlzLmNvbGxlY3Rpb25zWyBpIF0uZG93bmxvYWQgPSB2YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRzZXQgc291cmNlICh2YWx1ZSkge1xuXHRcdFx0XHRmb3IgKHZhciBpIGluIHRoaXMuY29sbGVjdGlvbnMpIHtcblx0XHRcdFx0XHR0aGlzLmNvbGxlY3Rpb25zWyBpIF0uc291cmNlID0gdmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0c2V0IHRvdGFsVGltZSAodmFsdWUpIHtcblx0XHRcdFx0Zm9yICh2YXIgaSBpbiB0aGlzLmNvbGxlY3Rpb25zKSB7XG5cdFx0XHRcdFx0dGhpcy5jb2xsZWN0aW9uc1sgaSBdLnRvdGFsVGltZSA9IHZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHNldCB2b2x1bWUgKHZhbHVlKSB7XG5cdFx0XHRcdGZvciAodmFyIGkgaW4gdGhpcy5jb2xsZWN0aW9ucykge1xuXHRcdFx0XHRcdHRoaXMuY29sbGVjdGlvbnNbIGkgXS52b2x1bWUgPSB2YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRoYXMgKG5hbWUpIHtcblx0XHRcdFx0cmV0dXJuICh0eXBlb2YgdGhpcy5jb2xsZWN0aW9uc1sgbmFtZSBdID09ICdvYmplY3QnKTtcblx0XHRcdH1cblxuXHRcdFx0aW5pdCAoKSB7XG5cdFx0XHRcdGZvciAodmFyIGkgaW4gdGhpcy5jb2xsZWN0aW9ucykge1xuXHRcdFx0XHRcdHRoaXMuY29sbGVjdGlvbnNbIGkgXS5pbml0KCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5jb2xsZWN0aW9ucy5jb21tb24uc2hvdygpO1xuXHRcdFx0XHR0aGlzLmNvbGxlY3Rpb25zLm1pbmkuaGlkZSgpO1xuXHRcdFx0XHR0aGlzLmNvbGxlY3Rpb25zLmZ1bGxzY3JlZW4uaGlkZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHRtb3ZlVGltZU1hcmtlciAoKSB7XG5cdFx0XHRcdGZvciAodmFyIGkgaW4gdGhpcy5jb2xsZWN0aW9ucylcblx0XHRcdFx0XHR0aGlzLmNvbGxlY3Rpb25zWyBpIF0ubW92ZVRpbWVNYXJrZXIoKTtcblx0XHRcdH1cblxuXHRcdFx0cGF1c2UgKCkge1xuXHRcdFx0XHRmb3IgKHZhciBpIGluIHRoaXMuY29sbGVjdGlvbnMpXG5cdFx0XHRcdFx0dGhpcy5jb2xsZWN0aW9uc1sgaSBdLnBhdXNlKCk7XG5cdFx0XHR9XG5cblx0XHRcdHBsYXkgKCkge1xuXHRcdFx0XHRmb3IgKHZhciBpIGluIHRoaXMuY29sbGVjdGlvbnMpXG5cdFx0XHRcdFx0dGhpcy5jb2xsZWN0aW9uc1sgaSBdLnBsYXkoKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBUaGlzIGNsYXNzIG1hbmFnZXMgRnVsbFNjcmVlbiBBUEkuXG5cdFx0ICogQFRPRE86IGFkZCBmdWxsc2NyZWVuZXJyb3IgaGFuZGxlci5cblx0XHQgKi9cblx0XHRjbGFzcyBGdWxsc2NyZWVuIHtcblx0XHRcdC8qKlxuXHRcdFx0ICogQHJldHVybnMge2Jvb2xlYW59IFdoZXRoZXIgYnJvd3NlciBzdXBwb3J0cyBmdWxsc2NyZWVuIG1vZGUuXG5cdFx0XHQgKi9cblx0XHRcdHN0YXRpYyBlbmFibGVkICgpIHtcblx0XHRcdFx0cmV0dXJuICEhKGRvY3VtZW50LmZ1bGxzY3JlZW5FbmFibGVkIHx8IGRvY3VtZW50Lm1vekZ1bGxTY3JlZW5FbmFibGVkIHx8IGRvY3VtZW50Lm1zRnVsbHNjcmVlbkVuYWJsZWQgfHwgZG9jdW1lbnQud2Via2l0U3VwcG9ydHNGdWxsc2NyZWVuIHx8IGRvY3VtZW50LndlYmtpdEZ1bGxzY3JlZW5FbmFibGVkIHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJykud2Via2l0UmVxdWVzdEZ1bGxTY3JlZW4pO1xuXHRcdFx0fVxuXG5cdFx0XHRzdGF0aWMgaGlkZUVsZW1lbnRzICgpIHtcblx0XHRcdFx0Y29udGFpbmVyLnJlbW92ZUNsYXNzKCdmdWxsc2NyZWVuJyk7XG5cdFx0XHRcdGNvbnRyb2xzLmZ1bGxzY3JlZW4uaGlkZSgpO1xuXHRcdFx0XHRjb250cm9scy5jb21tb24uc2hvdygpO1xuXHRcdFx0XHRjb250cm9scy5taW5pLmhpZGUoKTtcblx0XHRcdH1cblxuXHRcdFx0c3RhdGljIGluaXQgKCkge1xuXHRcdFx0XHRpZiAodGhpcy5lbmFibGVkKCkpIHtcblx0XHRcdFx0XHQvLyBGdWxsc2NyZWVuIGNoYW5nZSBoYW5kbGVycy5cblx0XHRcdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdmdWxsc2NyZWVuY2hhbmdlJywgZnVuY3Rpb24gKGUpIHtcblx0XHRcdFx0XHRcdEZ1bGxzY3JlZW4udG9nZ2xlRWxlbWVudHMoISEoZG9jdW1lbnQuZnVsbFNjcmVlbiB8fCBkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCkpO1xuXHRcdFx0XHRcdH0sIGZhbHNlKTtcblx0XHRcdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd3ZWJraXRmdWxsc2NyZWVuY2hhbmdlJywgZnVuY3Rpb24gKGUpIHtcblx0XHRcdFx0XHRcdEZ1bGxzY3JlZW4udG9nZ2xlRWxlbWVudHMoISFkb2N1bWVudC53ZWJraXRJc0Z1bGxTY3JlZW4pO1xuXHRcdFx0XHRcdH0sIGZhbHNlKTtcblx0XHRcdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3pmdWxsc2NyZWVuY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0RnVsbHNjcmVlbi50b2dnbGVFbGVtZW50cyghIWRvY3VtZW50Lm1vekZ1bGxTY3JlZW4pO1xuXHRcdFx0XHRcdH0sIGZhbHNlKTtcblx0XHRcdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtc2Z1bGxzY3JlZW5jaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRGdWxsc2NyZWVuLnRvZ2dsZUVsZW1lbnRzKCEhZG9jdW1lbnQubXNGdWxsc2NyZWVuRWxlbWVudCk7XG5cdFx0XHRcdFx0fSwgZmFsc2UpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8qKlxuXHRcdFx0ICogQHJldHVybnMge2Jvb2xlYW59IFdoZXRoZXIgYnJvd3NlciBpcyBpbiBmdWxsc2NyZWVuIG1vZGUuXG5cdFx0XHQgKi9cblx0XHRcdHN0YXRpYyBpcyAoKSB7XG5cdFx0XHRcdHJldHVybiAhIShkb2N1bWVudC5mdWxsU2NyZWVuIHx8IGRvY3VtZW50LndlYmtpdElzRnVsbFNjcmVlbiB8fCBkb2N1bWVudC5tb3pGdWxsU2NyZWVuIHx8IGRvY3VtZW50Lm1zRnVsbHNjcmVlbkVsZW1lbnQgfHwgZG9jdW1lbnQuZnVsbHNjcmVlbkVsZW1lbnQpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdGF0aWMgc2hvd0VsZW1lbnRzICgpIHtcblx0XHRcdFx0Y29udGFpbmVyLmFkZENsYXNzKCdmdWxsc2NyZWVuJyk7XG5cdFx0XHRcdGNvbnRyb2xzLmZ1bGxzY3JlZW4uc2hvdygpO1xuXHRcdFx0XHRjb250cm9scy5jb21tb24uaGlkZSgpO1xuXHRcdFx0XHRjb250cm9scy5taW5pLmhpZGUoKTtcblx0XHRcdH1cblxuXHRcdFx0c3RhdGljIHRvZ2dsZSAoKSB7XG5cdFx0XHRcdGlmICh0aGlzLmlzKCkpIHtcblx0XHRcdFx0XHRpZiAoZG9jdW1lbnQuZXhpdEZ1bGxzY3JlZW4pICAgICAgICAgICAgICAgIGRvY3VtZW50LmV4aXRGdWxsc2NyZWVuKCk7XG5cdFx0XHRcdFx0ZWxzZSBpZiAoZG9jdW1lbnQubW96Q2FuY2VsRnVsbFNjcmVlbikgICAgICBkb2N1bWVudC5tb3pDYW5jZWxGdWxsU2NyZWVuKCk7XG5cdFx0XHRcdFx0ZWxzZSBpZiAoZG9jdW1lbnQud2Via2l0Q2FuY2VsRnVsbFNjcmVlbikgICBkb2N1bWVudC53ZWJraXRDYW5jZWxGdWxsU2NyZWVuKCk7XG5cdFx0XHRcdFx0ZWxzZSBpZiAoZG9jdW1lbnQubXNFeGl0RnVsbHNjcmVlbikgICAgICAgICBkb2N1bWVudC5tc0V4aXRGdWxsc2NyZWVuKCk7XG5cdFx0XHRcdFx0dGhpcy5oaWRlRWxlbWVudHMoKTsgLy8gQFRPRE86IG1ha2UgdGhpcyBvbmx5IGlmIGZ1bGxzY3JlZW4gZmlyZWQuXG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0bGV0IGNvbnRhaW5lckVsID0gY29udGFpbmVyWyAwIF07XG5cdFx0XHRcdFx0aWYgKGNvbnRhaW5lckVsLnJlcXVlc3RGdWxsU2NyZWVuKSAgICAgICAgICAgIGNvbnRhaW5lckVsLnJlcXVlc3RGdWxsU2NyZWVuKCk7XG5cdFx0XHRcdFx0ZWxzZSBpZiAoY29udGFpbmVyRWwud2Via2l0UmVxdWVzdEZ1bGxTY3JlZW4pIGNvbnRhaW5lckVsLndlYmtpdFJlcXVlc3RGdWxsU2NyZWVuKCk7XG5cdFx0XHRcdFx0ZWxzZSBpZiAoY29udGFpbmVyRWwubW96UmVxdWVzdEZ1bGxTY3JlZW4pICAgIGNvbnRhaW5lckVsLm1velJlcXVlc3RGdWxsU2NyZWVuKCk7XG5cdFx0XHRcdFx0ZWxzZSBpZiAoY29udGFpbmVyRWwubXNFeGl0RnVsbHNjcmVlbikgICAgICAgIGNvbnRhaW5lckVsLm1zUmVxdWVzdEZ1bGxzY3JlZW4oKTtcblx0XHRcdFx0XHR0aGlzLnNob3dFbGVtZW50cygpOyAvLyBAVE9ETzogbWFrZSB0aGlzIG9ubHkgaWYgZnVsbHNjcmVlbiBmaXJlZC5cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvKipcblx0XHRcdCAqIFVwZGF0ZSBET00gc3RydWN0dXJlIGFjY29yZGluZyB0byBjdXJyZW50IHN0YXRlLlxuXHRcdFx0ICovXG5cdFx0XHRzdGF0aWMgdG9nZ2xlRWxlbWVudHMgKHNob3cpIHtcblx0XHRcdFx0aWYgKCEhc2hvdykge1xuXHRcdFx0XHRcdHRoaXMuc2hvd0VsZW1lbnRzKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5oaWRlRWxlbWVudHMoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHZhciBzb3VyY2VzID0gW107XG5cdFx0dmFyIHN1YnRpdGxlcyA9IFtdO1xuXHRcdHZhciB2b2x1bWUgPSAwLjU7XG5cdFx0dmFyIHZpZGVvID0gbnVsbDtcblx0XHR2YXIgY29udHJvbHMgPSBuZXcgQ29udHJvbHMoKTtcblxuXHRcdC8qKlxuXHRcdCAqIERPTSBjb250YWluZXIgdG8gaG9sZCB2aWRlbyBhbmQgYWxsIG90aGVyIHN0dWZmLlxuXHRcdCAqIEB0eXBlIG9iamVjdFxuXHRcdCAqL1xuXHRcdHZhciBjb250YWluZXIgPSBudWxsO1xuXHRcdHZhciBvdmVybGF5ID0gbnVsbDtcblxuXHRcdHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0Ly8gQ2hlY2sgaWYgZWxlbWVudCBpcyBjb3JyZWN0bHkgc2VsZWN0ZWQuXG5cdFx0XHRpZiAoZWxlbWVudC5wcm9wKCd0YWdOYW1lJykudG9Mb3dlckNhc2UoKSAhPSAndmlkZW8nKSB7XG5cdFx0XHRcdGNvbnNvbGUud2FybignSW5jb3JyZWN0IGVsZW1lbnQgc2VsZWN0ZWQuJyk7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBTZXQgc291cmNlLlxuXHRcdFx0ZWxlbWVudC5jaGlsZHJlbignc291cmNlJykuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHZhciBzcmMgPSAkKHRoaXMpLmF0dHIoJ3NyYycpO1xuXHRcdFx0XHRpZiAoc3JjKVxuXHRcdFx0XHRcdHNvdXJjZXMucHVzaCh7XG5cdFx0XHRcdFx0XHRzcmMgOiBzcmMsXG5cdFx0XHRcdFx0XHR0aXRsZSA6ICQodGhpcykuYXR0cigndGl0bGUnKVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0XHRpZiAoc291cmNlcy5sZW5ndGggPT0gMCkge1xuXHRcdFx0XHR2YXIgc3JjID0gZWxlbWVudC5hdHRyKCdzcmMnKTtcblx0XHRcdFx0aWYgKHNyYykge1xuXHRcdFx0XHRcdHNvdXJjZXMucHVzaCh7XG5cdFx0XHRcdFx0XHRzcmMgOiBzcmMsXG5cdFx0XHRcdFx0XHR0aXRsZSA6ICQodGhpcykuYXR0cigndGl0bGUnKSB8fCAnZGVmYXVsdCdcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKHNvdXJjZXMubGVuZ3RoID09IDApIHtcblx0XHRcdFx0Y29uc29sZS53YXJuKCdObyBzb3VyY2VzIGZvdW5kLicpO1xuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH1cblx0XHRcdHZpZGVvID0gbmV3IFZpZGVvKGVsZW1lbnQpO1xuXG5cdFx0XHRpbml0T3B0aW9ucygpO1xuXHRcdFx0aW5pdERvbSgpO1xuXHRcdFx0dmlkZW8uaW5pdCgpO1xuXHRcdFx0aW5pdENvbnRyb2xzKCk7XG5cdFx0XHRpbml0SG90S2V5cygpO1xuXHRcdH07XG5cblx0XHR2YXIgaW5pdENvbnRyb2xzID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0Zm9yIChsZXQgbmFtZSBpbiBvcHRpb25zLmNvbnRyb2xzKSB7XG5cdFx0XHRcdGlmIChjb250cm9scy5oYXMobmFtZSkpIHtcblx0XHRcdFx0XHRmb3IgKGxldCByb3dJbmRleCBpbiBvcHRpb25zLmNvbnRyb2xzWyBuYW1lIF0pIHtcblx0XHRcdFx0XHRcdGxldCByb3cgPSBvcHRpb25zLmNvbnRyb2xzWyBuYW1lIF1bIHJvd0luZGV4IF0sXG5cdFx0XHRcdFx0XHRcdGhhc1RpbWVsaW5lID0gZmFsc2UsXG5cdFx0XHRcdFx0XHRcdHJvd0VsZW1lbnQgPSAkKCc8ZGl2IC8+JykuYWRkQ2xhc3MoJ2xlcGxheWVyLWNvbnRyb2xzIGNvbnRyb2xzLScgKyBuYW1lKTtcblxuXHRcdFx0XHRcdFx0Zm9yIChsZXQgaSBpbiByb3cpIHtcblx0XHRcdFx0XHRcdFx0bGV0IGNvbnRyb2xOYW1lID0gcm93WyBpIF07XG5cblx0XHRcdFx0XHRcdFx0aWYgKGNvbnRyb2xOYW1lID09IENfRElWSURFUiB8fCAhY29udHJvbHMuY29sbGVjdGlvbnNbIG5hbWUgXS5oYXMoY29udHJvbE5hbWUpKSB7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gQ3JlYXRlIGNvbnRyb2wgb25seSBpZiBkaXZpZGVyIG9yIGRvZXMgbm90IGV4aXN0IHlldC5cblx0XHRcdFx0XHRcdFx0XHR2YXIgYyA9IGNvbnRyb2xzLmNvbGxlY3Rpb25zWyBuYW1lIF0uYWRkKGNvbnRyb2xOYW1lKTtcblx0XHRcdFx0XHRcdFx0XHRpZiAoYyAhPSBudWxsKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyb3dFbGVtZW50LmFwcGVuZChjKTtcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChjb250cm9sTmFtZSA9PSBDX1RJTUVMSU5FKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRoYXNUaW1lbGluZSA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUud2FybignQ2Fubm90IGNyZWF0ZSAnICsgY29udHJvbE5hbWUgKyAnIGNvbnRyb2wgZm9yIGNvbGxlY3Rpb24gJyArIG5hbWUgKyAnLicpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGlmICghaGFzVGltZWxpbmUpXG5cdFx0XHRcdFx0XHRcdHJvd0VsZW1lbnQuY3NzKCd3aWR0aCcsICcxcHgnKTtcblxuXHRcdFx0XHRcdFx0cm93RWxlbWVudC5maW5kKCcuZGl2aWRlciArIC5kaXZpZGVyJykucmVtb3ZlKCk7XG5cblx0XHRcdFx0XHRcdGNvbnRhaW5lci5hcHBlbmQocm93RWxlbWVudCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdHZhciBpbml0RG9tID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0b3ZlcmxheSA9ICQoJzxkaXYgLz4nKS5hZGRDbGFzcygncGxheS1vdmVybGF5JykuaHRtbCgnPGkgY2xhc3M9XCJmYSBmYS1wbGF5XCI+PC9pPicpO1xuXHRcdFx0dmFyIHZpZGVvQ29udGFpbmVyID0gJCgnPGRpdiAvPicpLmFkZENsYXNzKCdsZXBsYXllci12aWRlbycpLmFwcGVuZChvdmVybGF5KTtcblx0XHRcdGNvbnRhaW5lciA9ICQoJzxkaXYgLz4nKS5hZGRDbGFzcygnbGVwbGF5ZXItY29udGFpbmVyJykuYXBwZW5kKHZpZGVvQ29udGFpbmVyKS5jc3MoJ3dpZHRoJywgZWxlbWVudC53aWR0aCgpICsgJ3B4Jyk7XG5cblx0XHRcdGVsZW1lbnQuYmVmb3JlKGNvbnRhaW5lcik7XG5cdFx0XHR2aWRlb0NvbnRhaW5lci5hcHBlbmQoZWxlbWVudCk7XG5cdFx0XHRvdmVybGF5LmNsaWNrKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0dmlkZW8udG9nZ2xlUGxheSgpO1xuXHRcdFx0fSk7XG5cdFx0fTtcblxuXHRcdHZhciBpbml0SG90S2V5cyA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdC8vIFNwYWNlLlxuXHRcdFx0ZWxlbWVudC5rZXlwcmVzcyhlID0+IHtcblx0XHRcdFx0aWYgKGUuY2hhckNvZGUgPT0gMzIpIHtcblx0XHRcdFx0XHQvL2UucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHR0b2dnbGVQbGF5KCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pLmNsaWNrKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0dG9nZ2xlUGxheSgpO1xuXHRcdFx0fSk7XG5cdFx0fTtcblxuXHRcdHZhciBpbml0T3B0aW9ucyA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdC8vIENvbnRyb2xzLlxuXHRcdFx0ZWxlbWVudC5yZW1vdmVBdHRyKCdjb250cm9scycpO1xuXG5cdFx0XHQvLyBIZWlnaHQuXG5cdFx0XHR2YXIgaCA9IGVsZW1lbnQuYXR0cignaGVpZ2h0Jyk7XG5cdFx0XHRpZiAoaCkge1xuXHRcdFx0XHRvcHRpb25zLmhlaWdodCA9IGggKyAncHgnO1xuXHRcdFx0XHRlbGVtZW50LnJlbW92ZUF0dHIoJ2hlaWdodCcpO1xuXHRcdFx0fVxuXHRcdFx0ZWxlbWVudC5jc3MoJ2hlaWdodCcsIG9wdGlvbnMuaGVpZ2h0KTtcblxuXHRcdFx0Ly8gV2lkdGguXG5cdFx0XHR2YXIgdyA9IGVsZW1lbnQuYXR0cignd2lkdGgnKTtcblx0XHRcdGlmICh3KSB7XG5cdFx0XHRcdG9wdGlvbnMud2lkdGggPSB3ICsgJ3B4Jztcblx0XHRcdFx0ZWxlbWVudC5yZW1vdmVBdHRyKCd3aWR0aCcpO1xuXHRcdFx0fVxuXHRcdFx0ZWxlbWVudC5jc3MoJ3dpZHRoJywgb3B0aW9ucy53aWR0aCk7XG5cblx0XHRcdC8vIFBvc3Rlci5cblx0XHRcdHZhciBwID0gZWxlbWVudC5hdHRyKCdwb3N0ZXInKTtcblx0XHRcdGlmIChwKVxuXHRcdFx0XHRvcHRpb25zLnBvc3RlciA9IHA7XG5cdFx0XHRlbHNlIGlmIChvcHRpb25zLnBvc3Rlcilcblx0XHRcdFx0ZWxlbWVudC5hdHRyKCdwb3N0ZXInLCBvcHRpb25zLnBvc3Rlcik7XG5cblx0XHRcdC8vIEF1dG9wbGF5LCBsb29wLCBtdXRlZC5cblx0XHRcdHZhciBhdHRycyA9IFsgJ2F1dG9wbGF5JywgJ2xvb3AnLCAnbXV0ZWQnIF07XG5cdFx0XHRmb3IgKHZhciBpIGluIGF0dHJzKSB7XG5cdFx0XHRcdHZhciBhID0gZWxlbWVudC5hdHRyKGF0dHJzWyBpIF0pO1xuXHRcdFx0XHRpZiAoYSlcblx0XHRcdFx0XHRvcHRpb25zWyBhdHRyc1sgaSBdIF0gPSB0cnVlO1xuXHRcdFx0XHRlbHNlIGlmIChvcHRpb25zWyBhdHRyc1sgaSBdIF0pXG5cdFx0XHRcdFx0ZWxlbWVudC5hdHRyKGF0dHJzWyBpIF0sICcnKTtcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdGVsZW1lbnQucmVtb3ZlQXR0cihhdHRyc1sgaSBdKTtcblx0XHRcdFx0ZWxlbWVudC5wcm9wKGF0dHJzWyBpIF0sIG9wdGlvbnNbIGF0dHJzWyBpIF0gXSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFByZWxvYWQuXG5cdFx0XHR2YXIgciA9IGVsZW1lbnQuYXR0cigncHJlbG9hZCcpO1xuXHRcdFx0aWYgKHIpIHtcblx0XHRcdFx0ciA9IHIudG9Mb3dlckNhc2UoKTtcblx0XHRcdFx0aWYgKHIgPT0gJ25vbmUnIHx8IHIgPT0gJ21ldGFkYXRhJylcblx0XHRcdFx0XHRvcHRpb25zLnByZWxvYWQgPSByO1xuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0b3B0aW9ucy5wcmVsb2FkID0gJ2F1dG8nO1xuXHRcdFx0fVxuXHRcdFx0ZWxlbWVudC5hdHRyKCdwcmVsb2FkJywgb3B0aW9ucy5wcmVsb2FkKTtcblx0XHR9O1xuXG5cdFx0dmFyIHNlY29uZHNUb1RpbWUgPSBmdW5jdGlvbiAoc2Vjb25kcykge1xuXHRcdFx0dmFyIGggPSBNYXRoLmZsb29yKHNlY29uZHMgLyAzNjAwKTtcblx0XHRcdHZhciBtID0gTWF0aC5mbG9vcihzZWNvbmRzICUgMzYwMCAvIDYwKTtcblx0XHRcdHZhciBzID0gTWF0aC5mbG9vcihzZWNvbmRzICUgMzYwMCAlIDYwKTtcblx0XHRcdHZhciBvdXQgPSAnJztcblx0XHRcdGlmIChoID4gMClcblx0XHRcdFx0b3V0ID0gaCArICc6Jztcblx0XHRcdGlmIChtIDwgMTApXG5cdFx0XHRcdG91dCArPSAnMCc7XG5cdFx0XHRvdXQgKz0gbSArICc6Jztcblx0XHRcdGlmIChzIDwgMTApXG5cdFx0XHRcdG91dCArPSAnMCc7XG5cdFx0XHRvdXQgKz0gcztcblx0XHRcdHJldHVybiBvdXQ7XG5cdFx0fTtcblxuXHRcdGluaXQoKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHR3aW5kb3cuJC5mbi5sZVBsYXllciA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cdFx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0XHRQbGF5ZXIoJCh0aGlzKSwgb3B0aW9ucyk7XG5cdFx0fSk7XG5cdH07XG59KGpRdWVyeSkpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc291cmNlL2pzL2xlLXBsYXllci5lczYuanNcbiAqKi8iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFPQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBSUE7QUFMQTtBQXZCQTtBQUNBO0FBaUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTs7QUFGQTtBQUtBO0FBTEE7QUFDQTtBQUZBOztBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7Ozs7QUFHQTtBQUNBO0FBQ0E7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFQQTs7OztBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBSkE7Ozs7QUFjQTs7O0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBSEE7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTs7Ozs7QUFQQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUZBO0FBQ0E7QUFjQTtBQUNBOzs7O0FBR0E7QUFDQTs7OztBQUdBO0FBQ0E7Ozs7QUFHQTtBQUNBOzs7O0FBN0dBO0FBQ0E7Ozs7QUFHQTtBQUNBOzs7O0FBZEE7QUEvQ0E7QUFDQTtBQXdLQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUZBOztBQVFBO0FBQ0E7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBVEE7QUFXQTtBQUNBO0FBWkE7QUFjQTtBQUNBO0FBZkE7QUFpQkE7QUFDQTtBQWxCQTtBQW9CQTtBQUNBO0FBckJBO0FBdUJBO0FBQ0E7QUF4QkE7QUEwQkE7QUFDQTtBQTNCQTtBQTZCQTtBQUNBO0FBOUJBO0FBZ0NBO0FBQ0E7QUFqQ0E7QUFtQ0E7QUFuQ0E7Ozs7QUFiQTtBQXpLQTtBQUNBO0FBNk5BO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBRkE7O0FBS0E7QUFDQTs7OztBQU5BO0FBOU5BO0FBQ0E7QUF1T0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQWRBO0FBQ0E7QUFGQTs7QUF3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBR0E7QUFDQTtBQUNBO0FBREE7Ozs7QUFNQTs7O0FBR0E7QUFDQTs7OztBQWpEQTtBQUNBO0FBQ0E7QUFEQTs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFTQTs7OztBQXBDQTtBQXhPQTtBQUNBO0FBOFNBOzs7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQURBOztBQUZBO0FBQ0E7QUFGQTtBQUFBO0FBQ0E7QUFXQTs7O0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQUVBOztBQUZBO0FBQ0E7QUFGQTs7QUFNQTtBQUNBOzs7O0FBUEE7QUFBQTtBQUNBO0FBVUE7OztBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFDQTtBQUtBOzs7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQURBOztBQUZBO0FBQ0E7QUFGQTtBQUFBO0FBQ0E7QUFRQTs7O0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFEQTs7QUFGQTtBQUNBO0FBRkE7O0FBUUE7QUFDQTs7OztBQU1BO0FBQ0E7Ozs7QUFoQkE7QUFBQTtBQUNBO0FBc0JBO0FBQ0E7OztBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQWJBO0FBQ0E7QUFGQTs7QUFxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBUEE7Ozs7QUFXQTs7QUFFQTtBQUNBOzs7O0FBR0E7QUFDQTs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBOzs7O0FBNUNBO0FBNVdBO0FBQ0E7QUFrYUE7OztBQUNBO0FBREE7QUFDQTs7O0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFIQTtBQUFBO0FBQ0E7QUFGQTs7QUFXQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBOzs7O0FBTUE7QUFDQTtBQUNBOzs7O0FBdEJBO0FBQUE7QUFDQTtBQXlCQTs7O0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFIQTtBQURBO0FBRkE7QUFBQTtBQUNBO0FBRkE7O0FBNEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBREE7Ozs7QUFNQTtBQUNBO0FBQ0E7Ozs7QUF4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTs7OztBQWpCQTtBQUFBO0FBQ0E7QUEwQ0E7QUFDQTs7O0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFKQTtBQUNBO0FBWUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBeEJBO0FBQ0E7QUE2QkE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFKQTtBQUhBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFGQTtBQWJBO0FBbEVBO0FBQ0E7QUFGQTs7QUF1RkE7QUFDQTs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUEvRkE7QUF4ZUE7QUFDQTtBQTBrQkE7QUFDQTs7O0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSEE7QUFDQTtBQU9BO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSEE7QUFDQTtBQU9BO0FBQ0E7QUFEQTtBQVRBO0FBekNBO0FBQ0E7QUFGQTs7QUErRUE7QUFDQTtBQUNBO0FBREE7Ozs7QUFPQTtBQUNBOzs7O0FBL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBSUE7QUFYQTtBQUNBO0FBYUE7QUFDQTtBQUNBOzs7O0FBNUVBO0FBM2tCQTtBQUNBO0FBdXFCQTs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUtBOzs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFkQTtBQXhxQkE7QUFDQTtBQXlyQkE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBRkE7O0FBNEJBO0FBQ0E7QUFHQTtBQUNBO0FBSkE7Ozs7QUFRQTtBQUNBOzs7O0FBR0E7QUFDQTs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFHQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBREE7Ozs7QUFNQTtBQUNBOzs7O0FBSUE7QUFDQTs7OztBQUlBO0FBQ0E7Ozs7QUFJQTtBQUNBOzs7O0FBekVBO0FBQ0E7QUFDQTtBQURBOzs7O0FBS0E7QUFDQTs7OztBQUlBO0FBQ0E7Ozs7QUFJQTtBQUNBOzs7O0FBeEJBO0FBMXJCQTtBQUNBO0FBNndCQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQU5BO0FBQ0E7QUFGQTs7QUE4Q0E7QUFDQTs7OztBQUdBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBOzs7O0FBR0E7QUFDQTtBQUNBO0FBREE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFEQTs7OztBQUlBO0FBQ0E7QUFDQTtBQURBOzs7O0FBNURBO0FBQ0E7Ozs7QUFHQTtBQUNBOzs7O0FBR0E7QUFDQTs7OztBQUdBO0FBQ0E7QUFDQTtBQURBOzs7O0FBS0E7QUFDQTtBQUNBO0FBREE7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFEQTs7OztBQUtBO0FBQ0E7QUFDQTtBQURBOzs7O0FBekNBOzs7Ozs7O0FBOXdCQTtBQUNBO0FBNDFCQTs7Ozs7Ozs7Ozs7QUFJQTtBQUNBOzs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBWEE7Ozs7Ozs7OztBQW9CQTtBQUNBOzs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUdBO0FBQ0E7QUFDQTtBQUlBO0FBTEE7QUFRQTtBQUNBO0FBSUE7QUFOQTs7Ozs7Ozs7O0FBYUE7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUpBOzs7O0FBckVBO0FBNzFCQTtBQUNBO0FBMDZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBaDdCQTtBQXM3QkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7O0FBSEE7QUFTQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBSEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBRkE7QUFTQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbkNBO0FBQ0E7QUFxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFIQTtBQUhBO0FBQ0E7QUFlQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBMUJBO0FBREE7QUFEQTtBQURBO0FBQ0E7QUFrQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFQQTtBQUNBO0FBV0E7O0FBRUE7QUFDQTs7QUFFQTtBQUZBO0FBREE7QUFNQTtBQURBO0FBUEE7QUFDQTtBQVdBOztBQUVBO0FBQ0E7O0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7O0FBWEE7QUFjQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7O0FBbkJBO0FBc0JBO0FBQ0E7O0FBdkJBO0FBNkJBO0FBQ0E7QUFDQTtBQU1BO0FBUkE7QUFDQTs7QUE5QkE7QUEwQ0E7QUFDQTtBQUNBO0FBRkE7QUFPQTtBQWpEQTtBQUNBO0FBbURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFiQTtBQUNBO0FBZUE7QUFDQTtBQTlsQ0E7QUFDQTtBQWdtQ0E7QUFDQTtBQUNBO0FBREE7QUFEQTtBQXBtQ0E7OzsiLCJzb3VyY2VSb290IjoiIn0=