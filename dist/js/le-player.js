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

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _jquery = __webpack_require__(1);

	var _jquery2 = _interopRequireDefault(_jquery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	{
		(function () {
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

				var options = _jquery2.default.extend(true, {
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

				var Control = function () {
					function Control(cssClass, iconClass) {
						_classCallCheck(this, Control);

						this.element = (0, _jquery2.default)('<div />').addClass('control ' + cssClass).append((0, _jquery2.default)('<i />').addClass('fa fa-' + iconClass));
					}

					_createClass(Control, null, [{
						key: 'divider',
						value: function divider() {
							return (0, _jquery2.default)('<div />').addClass('divider');
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

						this.element = (0, _jquery2.default)('<div />').addClass('control-text ' + classname);
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
						this.icon = (0, _jquery2.default)('<div />').addClass('control-icon').append((0, _jquery2.default)('<i />').addClass('fa fa-' + iconClass));
						this.listElement = (0, _jquery2.default)('<div/>').addClass('control-inner');
						this.element = (0, _jquery2.default)('<div />').addClass('control control-container').append(this.icon).append(this.listElement);
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
							var item = (0, _jquery2.default)('<div />').addClass('inner-item').data('index', this._index).html(text).click(function () {
								_self.onItemClick((0, _jquery2.default)(this).data('index'));
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
							if (!hasActive) this.icon.html((0, _jquery2.default)('<i />').addClass('fa fa-' + this.iconClass));
						}
					}]);

					return ControlContainer;
				}();

				var BackwardControl = function (_Control) {
					_inherits(BackwardControl, _Control);

					function BackwardControl() {
						_classCallCheck(this, BackwardControl);

						var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BackwardControl).call(this, 'backward', 'undo'));

						_this.element.click(function (e) {
							if (video.currentTime - options.playback.step.medium > 0) seek(video.currentTime - options.playback.step.medium);else seek(0);
						});
						return _this;
					}

					return BackwardControl;
				}(Control);

				var DownloadControl = function (_Control2) {
					_inherits(DownloadControl, _Control2);

					function DownloadControl() {
						_classCallCheck(this, DownloadControl);

						var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(DownloadControl).call(this, '', ''));

						_this2.element = (0, _jquery2.default)('<a />').attr('href', '').attr('target', '_blank').attr('download', '').addClass('control download').append((0, _jquery2.default)('<i />').addClass('fa fa-download'));
						return _this2;
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

						var _this4 = _possibleConstructorReturn(this, Object.getPrototypeOf(FullscreenControl).call(this, 'fullscreen', 'arrows-alt'));

						_this4.element.click(function (e) {
							Fullscreen.toggle();
						});
						return _this4;
					}

					return FullscreenControl;
				}(Control);

				var PlayControl = function (_Control5) {
					_inherits(PlayControl, _Control5);

					function PlayControl() {
						_classCallCheck(this, PlayControl);

						var _this5 = _possibleConstructorReturn(this, Object.getPrototypeOf(PlayControl).call(this, 'play', 'play'));

						_this5.element.click(function (e) {
							togglePlay();
						});
						return _this5;
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
						var _this6 = this;

						_classCallCheck(this, RateControl);

						this.down = new Control('rate-down', 'backward');
						this.up = new Control('rate-up', 'forward');
						this.current = new ControlText('rate-current');

						this.down.element.click(function (e) {
							_this6.decrease();
						});

						this.up.element.click(function (e) {
							_this6.increase();
						});

						this.element = (0, _jquery2.default)('<div />').addClass('control-container').append(this.down.element).append(this.current.element).append(this.up.element);
					}

					_createClass(RateControl, [{
						key: 'decrease',
						value: function decrease() {
							if (video.playbackRate > options.rate.min) {
								this.up.element.removeClass('disabled');
								video.playbackRate -= options.rate.step;
								this.show();
								Cookie.set('rate', video.playbackRate);
							} else this.down.element.addClass('disabled');
						}
					}, {
						key: 'load',
						value: function load() {
							video.playbackRate = Cookie.get('rate', 1);
							this.show();
						}
					}, {
						key: 'show',
						value: function show() {
							this.current.text = '×' + video.playbackRate.toFixed(2);
						}
					}, {
						key: 'increase',
						value: function increase() {
							if (video.playbackRate < options.rate.max) {
								this.down.element.removeClass('disabled');
								video.playbackRate += options.rate.step;
								this.show();
								Cookie.set('rate', video.playbackRate);
							} else this.up.element.addClass('disabled');
						}
					}]);

					return RateControl;
				}();

				var SourceControl = function (_ControlContainer) {
					_inherits(SourceControl, _ControlContainer);

					function SourceControl() {
						_classCallCheck(this, SourceControl);

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

						var _this8 = _possibleConstructorReturn(this, Object.getPrototypeOf(SubtitleControl).call(this, 'commenting-o'));

						if (subtitles.length > 0) {
							for (var i in subtitles) {
								_this8.addItem(subtitles[i].title, { src: subtitles[i].src, language: subtitles[i].language });
							}
						}
						return _this8;
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
						var _this9 = this;

						_classCallCheck(this, TimelineControl);

						var _self = this;

						this.drag = false;

						this.current = new ControlText('time-current');
						this.total = new ControlText('time-total');

						this.marker = (0, _jquery2.default)('<div />').addClass('time-marker');

						this.markerShadow = (0, _jquery2.default)('<div />').addClass('time-marker shadow').append().hide();

						this.markerShadowTime = (0, _jquery2.default)('<div />').addClass('time');
						this.markerTime = (0, _jquery2.default)('<div />').addClass('time').hide();
						this.played = (0, _jquery2.default)('<div />').addClass('time-played');
						this.current.text = '00:00';
						this.line = (0, _jquery2.default)('<div />').addClass('timeline').append(this.marker.append(this.markerTime)).append(this.markerShadow.append(this.markerShadowTime)).append(this.played).on({
							'mousemove': function mousemove(e) {
								if (_this9.drag) return;

								var p = _this9.getPosition(e.pageX);
								if (p > 0 && p < 1) {
									_this9.markerShadow.show();
									_this9.markerShadow.css('left', p * 100 + '%');
									_this9.markerShadowTime.html(secondsToTime(video.duration * p));
								} else _this9.markerShadow.hide();
							},

							'mouseleave': function mouseleave(e) {
								if (_this9.drag) return;
								_this9.markerShadow.hide();
							},

							'click': function click(e) {
								if (_this9.drag) return;
								seek(video.duration * _this9.getPosition(e.pageX));
							}
						});

						this.element = (0, _jquery2.default)('<div />').addClass('timeline-container').append((0, _jquery2.default)('<div />').addClass('timeline-subcontainer').append(this.current.element).append(this.line).append(this.total.element));

						this.marker.on('mousedown', function (e) {
							if (e.which != 1) return;
							_this9.markerShadow.hide();
							_this9.drag = true;
						});

						(0, _jquery2.default)(document).on({

							'mousemove': function mousemove(e) {
								if (!_this9.drag) return;
								var p = _this9.getPosition(e.pageX);
								if (p > 0 && p < 1) {
									_this9.markerTime.show().html(secondsToTime(video.duration * p));
									seek(video.duration * p);
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

						this.icon = (0, _jquery2.default)('<div/>').addClass('control-icon').append((0, _jquery2.default)('<i />').addClass('fa fa-volume-down')).click(function () {
							_self.toggleMuted();
						});

						this.marker = (0, _jquery2.default)('<div/>').addClass('volume-marker');

						this.active = (0, _jquery2.default)('<div/>').addClass('volume-active');

						this.line = (0, _jquery2.default)('<div/>').addClass('volume-line').append(this.active).append(this.marker).on('click', function (e) {
							if (_this10.drag) return;
							var p = _this10.getPosition(e.pageY);
							if (p >= 0 && p <= 1) {
								controls.volume = 1 - p;
							}
						});

						this.element = (0, _jquery2.default)('<div />').addClass('control control-container').append(this.icon).append((0, _jquery2.default)('<div />').addClass('control-inner volume-slider').append(this.line));

						this.drag = false;

						this.marker.on('mousedown', function (e) {
							if (e.which != 1) return;
							_this10.drag = true;
						});

						(0, _jquery2.default)(document).on({
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
						var src = (0, _jquery2.default)(this).attr('src');
						if (src) sources.push({
							src: src,
							title: (0, _jquery2.default)(this).attr('title')
						});
					});
					if (sources.length == 0) {
						var src = element.attr('src');
						if (src) {
							sources.push({
								src: src,
								title: (0, _jquery2.default)(this).attr('title') || 'default'
							});
						}
					}
					if (sources.length == 0) {
						console.warn('No sources found.');
						return this;
					}

					initOptions();
					initDom();
					initSubtitles();
					initControls();
					initVideo();
					initHotKeys();
				};

				var initControls = function initControls() {
					for (var name in options.controls) {
						if (controls.has(name)) {
							for (var rowIndex in options.controls[name]) {
								var row = options.controls[name][rowIndex],
								    hasTimeline = false,
								    rowElement = (0, _jquery2.default)('<div />').addClass('leplayer-controls controls-' + name);

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
					overlay = (0, _jquery2.default)('<div />').addClass('play-overlay').html('<i class="fa fa-play"></i>');
					var videoContainer = (0, _jquery2.default)('<div />').addClass('leplayer-video').append(overlay);
					container = (0, _jquery2.default)('<div />').addClass('leplayer-container').append(videoContainer).css('width', element.width() + 'px');

					element.before(container);
					videoContainer.append(element);
					overlay.click(function () {
						togglePlay();
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

				var initSubtitles = function initSubtitles() {
					element.children('track[kind="subtitles"]').each(function () {
						var language = (0, _jquery2.default)(this).attr('srclang');
						var title = (0, _jquery2.default)(this).attr('label');
						var src = (0, _jquery2.default)(this).attr('src');
						if (title.length > 0 && src.length > 0) {
							subtitles.push({
								title: title,
								src: src,
								language: language
							});
						}
					});
				};

				var initVideo = function initVideo() {
					video = element[0];
					if (video.readyState > HTMLMediaElement.HAVE_NOTHING) initVideoEvent();else video.onloadedmetadata = function () {
						initVideoEvent();
					};
				};

				var initVideoEvent = function initVideoEvent() {
					overlay.css('line-height', video.clientHeight + 'px');
					container.css('width', video.clientWidth + 'px');

					video.ontimeupdate = function () {
						controls.moveTimeMarker();
					};

					// This is generally for Firefox only
					// because it somehow resets track list
					// for video element after DOM manipulation.

					if (video.textTracks.length == 0 && subtitles.length > 0) {
						element.children('track[kind="subtitles"]').remove();
						for (var i in subtitles) {
							element.append((0, _jquery2.default)('<track/>').attr('label', subtitles[i].title).attr('src', subtitles[i].src).attr('srclang', subtitles[i].language).attr('id', subtitles[i].language).attr('kind', 'subtitles'));
						}
					}

					Fullscreen.init();
					controls.init();
				};

				var togglePlay = function togglePlay() {
					if (!video.played || video.paused) {
						overlay.hide();
						video.play();
						controls.play();
					} else {
						overlay.show();
						video.pause();
						controls.pause();
					}
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

				var seek = function seek(time) {
					video.currentTime = time;
				};

				init();
				return this;
			};

			window.$.fn.lePlayer = function (options) {
				return this.each(function () {
					Player((0, _jquery2.default)(this), options);
				});
			};
		})();
	}

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = $;

/***/ }
/******/ ]);