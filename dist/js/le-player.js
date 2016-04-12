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
				this.played = (0, _jquery2.default)('<div />').addClass('time-played');
				this.current.text = '00:00';
				this.line = (0, _jquery2.default)('<div />').addClass('timeline').append(this.marker).append(this.markerShadow.append(this.markerShadowTime)).append(this.played).on({
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
							seek(video.duration * p);
						}
					},

					'mouseup': function mouseup(e) {
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

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = $;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGUtcGxheWVyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIDBlOTM5NDg5YTFmZmNhZTFmMTE1Iiwid2VicGFjazovLy9zb3VyY2UvanMvbGUtcGxheWVyLmVzNi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCIkXCIiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCAwZTkzOTQ4OWExZmZjYWUxZjExNVxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxudmFyIFBsYXllciA9IGZ1bmN0aW9uIChlbGVtZW50LCBvcHRzKSB7XG5cdGNvbnN0IENfQkFDS1dBUkQgICA9ICdiYWNrd2FyZCc7XG5cdGNvbnN0IENfRElWSURFUiAgICA9ICdkaXZpZGVyJztcblx0Y29uc3QgQ19ET1dOTE9BRCAgID0gJ2Rvd25sb2FkJztcblx0Y29uc3QgQ19GT1JXQVJEICAgID0gJ2ZvcndhcmQnO1xuXHRjb25zdCBDX0ZVTExTQ1JFRU4gPSAnZnVsbHNjcmVlbic7XG5cdGNvbnN0IENfUExBWSAgICAgICA9ICdwbGF5Jztcblx0Y29uc3QgQ19SQVRFICAgICAgID0gJ3JhdGUnO1xuXHRjb25zdCBDX1NPVVJDRSAgICAgPSAnc291cmNlJztcblx0Y29uc3QgQ19TVUJUSVRMRSAgID0gJ3N1YnRpdGxlJztcblx0Y29uc3QgQ19USU1FTElORSAgID0gJ3RpbWVsaW5lJztcblx0Y29uc3QgQ19WT0xVTUUgICAgID0gJ3ZvbHVtZSc7XG5cblx0dmFyIG9wdGlvbnMgPSAkLmV4dGVuZCh0cnVlLCB7XG5cdFx0YXV0b3BsYXkgOiBmYWxzZSxcblx0XHRoZWlnaHQgICA6ICdhdXRvJyxcblx0XHRsb29wICAgICA6IGZhbHNlLFxuXHRcdG11dGVkICAgIDogZmFsc2UsXG5cdFx0cHJlbG9hZCAgOiAnbWV0YWRhdGEnLFxuXHRcdHBvc3RlciAgIDogbnVsbCxcblx0XHR3aWR0aCAgICA6ICdhdXRvJyxcblx0XHRyYXRlICAgICA6IHtcblx0XHRcdHN0ZXAgOiAwLjI1LFxuXHRcdFx0bWluICA6IDAuNSxcblx0XHRcdG1heCAgOiA0LjBcblx0XHR9LFxuXHRcdHBsYXliYWNrIDoge1xuXHRcdFx0c3RlcCA6IHtcblx0XHRcdFx0c2hvcnQgIDogNSxcblx0XHRcdFx0bWVkaXVtIDogMzAsXG5cdFx0XHRcdGxvbmcgICA6IDYwXG5cdFx0XHR9XG5cdFx0fSxcblx0XHR2b2x1bWUgICA6IHtcblx0XHRcdHN0ZXAgOiAwLjFcblx0XHR9LFxuXHRcdGNvbnRyb2xzIDoge1xuXHRcdFx0Y29tbW9uICAgICA6IFtcblx0XHRcdFx0WyAncGxheScsICd2b2x1bWUnLCAnZGl2aWRlcicsICd0aW1lbGluZScsICdkaXZpZGVyJywgJ2Z1bGxzY3JlZW4nIF0sXG5cdFx0XHRcdFsgJ3JhdGUnLCAnZGl2aWRlcicsICdiYWNrd2FyZCcsICdkaXZpZGVyJywgJ3NvdXJjZScsICdkaXZpZGVyJywgJ3N1YnRpdGxlJywgJ2RpdmlkZXInLCAnZG93bmxvYWQnIF1cblx0XHRcdF0sXG5cdFx0XHRmdWxsc2NyZWVuIDogW1xuXHRcdFx0XHRbICdwbGF5JywgJ3ZvbHVtZScsICdkaXZpZGVyJywgJ3RpbWVsaW5lJywgJ2RpdmlkZXInLCAncmF0ZScsICdkaXZpZGVyJywgJ2JhY2t3YXJkJywgJ2RpdmlkZXInLCAnc291cmNlJywgJ2RpdmlkZXInLCAnc3VidGl0bGUnLCAnZGl2aWRlcicsICdkb3dubG9hZCcsICdkaXZpZGVyJywgJ2Z1bGxzY3JlZW4nIF1cblx0XHRcdF1cblx0XHR9XG5cdH0sIG9wdHMpO1xuXG5cdGNsYXNzIENvbnRyb2wge1xuXHRcdGNvbnN0cnVjdG9yIChjc3NDbGFzcywgaWNvbkNsYXNzKSB7XG5cdFx0XHR0aGlzLmVsZW1lbnQgPSAkKCc8ZGl2IC8+JykuYWRkQ2xhc3MoJ2NvbnRyb2wgJyArIGNzc0NsYXNzKS5hcHBlbmQoJCgnPGkgLz4nKS5hZGRDbGFzcygnZmEgZmEtJyArIGljb25DbGFzcykpO1xuXHRcdH1cblxuXHRcdHN0YXRpYyBkaXZpZGVyICgpIHtcblx0XHRcdHJldHVybiAkKCc8ZGl2IC8+JykuYWRkQ2xhc3MoJ2RpdmlkZXInKTtcblx0XHR9XG5cblx0XHRzdGF0aWMgY3JlYXRlIChuYW1lKSB7XG5cdFx0XHRzd2l0Y2ggKG5hbWUpIHtcblx0XHRcdFx0Y2FzZSBDX0JBQ0tXQVJEOlxuXHRcdFx0XHRcdHJldHVybiBuZXcgQmFja3dhcmRDb250cm9sKCk7XG5cblx0XHRcdFx0Y2FzZSBDX0RJVklERVI6XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuZGl2aWRlcigpO1xuXG5cdFx0XHRcdGNhc2UgQ19ET1dOTE9BRDpcblx0XHRcdFx0XHRyZXR1cm4gbmV3IERvd25sb2FkQ29udHJvbCgpO1xuXG5cdFx0XHRcdGNhc2UgQ19GT1JXQVJEOlxuXHRcdFx0XHRcdHJldHVybiBuZXcgRm9yd2FyZENvbnRyb2woKTtcblxuXHRcdFx0XHRjYXNlIENfRlVMTFNDUkVFTjpcblx0XHRcdFx0XHRyZXR1cm4gbmV3IEZ1bGxzY3JlZW5Db250cm9sKCk7XG5cblx0XHRcdFx0Y2FzZSBDX1BMQVk6XG5cdFx0XHRcdFx0cmV0dXJuIG5ldyBQbGF5Q29udHJvbCgpO1xuXG5cdFx0XHRcdGNhc2UgQ19SQVRFOlxuXHRcdFx0XHRcdHJldHVybiBuZXcgUmF0ZUNvbnRyb2woKTtcblxuXHRcdFx0XHRjYXNlIENfU09VUkNFOlxuXHRcdFx0XHRcdHJldHVybiBuZXcgU291cmNlQ29udHJvbCgpO1xuXG5cdFx0XHRcdGNhc2UgQ19TVUJUSVRMRTpcblx0XHRcdFx0XHRyZXR1cm4gbmV3IFN1YnRpdGxlQ29udHJvbCgpO1xuXG5cdFx0XHRcdGNhc2UgQ19USU1FTElORTpcblx0XHRcdFx0XHRyZXR1cm4gbmV3IFRpbWVsaW5lQ29udHJvbCgpO1xuXG5cdFx0XHRcdGNhc2UgQ19WT0xVTUU6XG5cdFx0XHRcdFx0cmV0dXJuIG5ldyBWb2x1bWVDb250cm9sKCk7XG5cblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRjbGFzcyBDb250cm9sVGV4dCB7XG5cdFx0Y29uc3RydWN0b3IgKGNsYXNzbmFtZSkge1xuXHRcdFx0dGhpcy5lbGVtZW50ID0gJCgnPGRpdiAvPicpLmFkZENsYXNzKCdjb250cm9sLXRleHQgJyArIGNsYXNzbmFtZSk7XG5cdFx0fVxuXG5cdFx0c2V0IHRleHQgKHZhbHVlKSB7XG5cdFx0XHR0aGlzLmVsZW1lbnQuaHRtbCh2YWx1ZSk7XG5cdFx0fVxuXHR9XG5cblx0Y2xhc3MgQ29udHJvbENvbnRhaW5lciB7XG5cdFx0Y29uc3RydWN0b3IgKGljb25DbGFzcykge1xuXHRcdFx0bGV0IF9zZWxmICAgICAgICA9IHRoaXM7XG5cdFx0XHR0aGlzLmljb25DbGFzcyAgID0gaWNvbkNsYXNzO1xuXHRcdFx0dGhpcy5pY29uICAgICAgICA9ICQoJzxkaXYgLz4nKS5hZGRDbGFzcygnY29udHJvbC1pY29uJykuYXBwZW5kKCQoJzxpIC8+JykuYWRkQ2xhc3MoJ2ZhIGZhLScgKyBpY29uQ2xhc3MpKTtcblx0XHRcdHRoaXMubGlzdEVsZW1lbnQgPSAkKCc8ZGl2Lz4nKS5hZGRDbGFzcygnY29udHJvbC1pbm5lcicpO1xuXHRcdFx0dGhpcy5lbGVtZW50ICAgICA9ICQoJzxkaXYgLz4nKS5hZGRDbGFzcygnY29udHJvbCBjb250cm9sLWNvbnRhaW5lcicpLmFwcGVuZCh0aGlzLmljb24pLmFwcGVuZCh0aGlzLmxpc3RFbGVtZW50KTtcblx0XHRcdHRoaXMuX2luZGV4ICAgICAgPSAwO1xuXHRcdFx0dGhpcy5saXN0ICAgICAgICA9IFtdO1xuXHRcdFx0dGhpcy5pY29uLmNsaWNrKGZ1bmN0aW9uICgpIHsgX3NlbGYub25Db250YWluZXJDbGljaygpOyB9KTtcblx0XHR9XG5cblx0XHRnZXQgYWN0aXZlICgpIHtcblx0XHRcdGZvciAobGV0IGkgaW4gdGhpcy5saXN0KVxuXHRcdFx0XHRpZiAodGhpcy5saXN0WyBpIF0uaGFzQ2xhc3MoJ2FjdGl2ZScpKVxuXHRcdFx0XHRcdHJldHVybiB0aGlzLmxpc3RbIGkgXTtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdHNldCBhY3RpdmUgKGluZGV4KSB7XG5cdFx0XHRsZXQgaGFzQWN0aXZlID0gZmFsc2U7XG5cdFx0XHRmb3IgKGxldCBpIGluIHRoaXMubGlzdCkge1xuXHRcdFx0XHRpZiAodGhpcy5saXN0WyBpIF0uZGF0YSgnaW5kZXgnKSA9PSBpbmRleCkge1xuXHRcdFx0XHRcdHRoaXMubGlzdFsgaSBdLmFkZENsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0XHR0aGlzLmljb24uaHRtbCh0aGlzLmxpc3RbIGkgXS5odG1sKCkpO1xuXHRcdFx0XHRcdGhhc0FjdGl2ZSA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdHRoaXMubGlzdFsgaSBdLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRcdH1cblx0XHRcdGlmICghaGFzQWN0aXZlKVxuXHRcdFx0XHR0aGlzLmljb24uaHRtbCgkKCc8aSAvPicpLmFkZENsYXNzKCdmYSBmYS0nICsgdGhpcy5pY29uQ2xhc3MpKTtcblx0XHR9XG5cblx0XHRhZGRJdGVtICh0ZXh0LCBkYXRhKSB7XG5cdFx0XHRsZXQgX3NlbGYgPSB0aGlzO1xuXHRcdFx0dmFyIGl0ZW0gID0gJCgnPGRpdiAvPicpLmFkZENsYXNzKCdpbm5lci1pdGVtJykuZGF0YSgnaW5kZXgnLCB0aGlzLl9pbmRleCkuaHRtbCh0ZXh0KS5jbGljayhmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdF9zZWxmLm9uSXRlbUNsaWNrKCQodGhpcykuZGF0YSgnaW5kZXgnKSk7XG5cdFx0XHR9KTtcblx0XHRcdGlmICh0eXBlb2YgZGF0YSA9PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRmb3IgKGxldCBrIGluIGRhdGEpXG5cdFx0XHRcdFx0aXRlbS5kYXRhKGssIGRhdGFbIGsgXSk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLl9pbmRleCsrO1xuXHRcdFx0dGhpcy5saXN0LnB1c2goaXRlbSk7XG5cdFx0XHR0aGlzLmxpc3RFbGVtZW50LmFwcGVuZChpdGVtKTtcblxuXHRcdFx0cmV0dXJuIGl0ZW07XG5cdFx0fVxuXG5cdFx0Z2V0QnlJbmRleCAoaW5kZXgpIHtcblx0XHRcdGZvciAobGV0IGkgaW4gdGhpcy5saXN0KVxuXHRcdFx0XHRpZiAodGhpcy5saXN0WyBpIF0uZGF0YSgnaW5kZXgnKSA9PSBpbmRleClcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5saXN0WyBpIF07XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHRvbkNvbnRhaW5lckNsaWNrICgpIHtcblx0XHR9XG5cblx0XHRvbkl0ZW1DbGljayAoaW5kZXgpIHtcblx0XHRcdHRoaXMuYWN0aXZlID0gaW5kZXg7XG5cdFx0fVxuXHR9XG5cblx0Y2xhc3MgQmFja3dhcmRDb250cm9sIGV4dGVuZHMgQ29udHJvbCB7XG5cdFx0Y29uc3RydWN0b3IgKCkge1xuXHRcdFx0c3VwZXIoJ2JhY2t3YXJkJywgJ3VuZG8nKTtcblx0XHRcdHRoaXMuZWxlbWVudC5jbGljayhlID0+IHtcblx0XHRcdFx0aWYgKHZpZGVvLmN1cnJlbnRUaW1lIC0gb3B0aW9ucy5wbGF5YmFjay5zdGVwLm1lZGl1bSA+IDApXG5cdFx0XHRcdFx0c2Vlayh2aWRlby5jdXJyZW50VGltZSAtIG9wdGlvbnMucGxheWJhY2suc3RlcC5tZWRpdW0pO1xuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0c2VlaygwKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdGNsYXNzIERvd25sb2FkQ29udHJvbCBleHRlbmRzIENvbnRyb2wge1xuXHRcdGNvbnN0cnVjdG9yICgpIHtcblx0XHRcdHN1cGVyKCcnLCAnJyk7XG5cdFx0XHR0aGlzLmVsZW1lbnQgPSAkKCc8YSAvPicpLmF0dHIoJ2hyZWYnLCAnJykuYXR0cigndGFyZ2V0JywgJ19ibGFuaycpLmF0dHIoJ2Rvd25sb2FkJywgJycpLmFkZENsYXNzKCdjb250cm9sIGRvd25sb2FkJykuYXBwZW5kKCQoJzxpIC8+JykuYWRkQ2xhc3MoJ2ZhIGZhLWRvd25sb2FkJykpO1xuXHRcdH1cblxuXHRcdHNldCBsaW5rICh2YWx1ZSkge1xuXHRcdFx0dGhpcy5lbGVtZW50LmF0dHIoJ2hyZWYnLCB2YWx1ZSk7XG5cdFx0fVxuXHR9XG5cblx0Y2xhc3MgRm9yd2FyZENvbnRyb2wgZXh0ZW5kcyBDb250cm9sIHtcblx0XHRjb25zdHJ1Y3RvciAoKSB7XG5cdFx0XHRzdXBlcignZm9yd2FyZCcsICdyZWRvJyk7XG5cdFx0fVxuXHR9XG5cblx0Y2xhc3MgRnVsbHNjcmVlbkNvbnRyb2wgZXh0ZW5kcyBDb250cm9sIHtcblx0XHRjb25zdHJ1Y3RvciAoKSB7XG5cdFx0XHRzdXBlcignZnVsbHNjcmVlbicsICdhcnJvd3MtYWx0Jyk7XG5cdFx0XHR0aGlzLmVsZW1lbnQuY2xpY2soZSA9PiB7XG5cdFx0XHRcdEZ1bGxzY3JlZW4udG9nZ2xlKCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRjbGFzcyBQbGF5Q29udHJvbCBleHRlbmRzIENvbnRyb2wge1xuXHRcdGNvbnN0cnVjdG9yICgpIHtcblx0XHRcdHN1cGVyKCdwbGF5JywgJ3BsYXknKTtcblx0XHRcdHRoaXMuZWxlbWVudC5jbGljayhlID0+IHtcblx0XHRcdFx0dG9nZ2xlUGxheSgpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cGF1c2UgKCkge1xuXHRcdFx0dGhpcy5lbGVtZW50LmNoaWxkcmVuKCcuZmEnKS5yZW1vdmVDbGFzcygnZmEtcGF1c2UnKS5hZGRDbGFzcygnZmEtcGxheScpO1xuXHRcdH1cblxuXHRcdHBsYXkgKCkge1xuXHRcdFx0dGhpcy5lbGVtZW50LmNoaWxkcmVuKCcuZmEnKS5yZW1vdmVDbGFzcygnZmEtcGxheScpLmFkZENsYXNzKCdmYS1wYXVzZScpO1xuXHRcdH1cblx0fVxuXG5cdGNsYXNzIFJhdGVDb250cm9sIHtcblx0XHRjb25zdHJ1Y3RvciAoKSB7XG5cdFx0XHR0aGlzLmRvd24gICAgPSBuZXcgQ29udHJvbCgncmF0ZS1kb3duJywgJ2JhY2t3YXJkJyk7XG5cdFx0XHR0aGlzLnVwICAgICAgPSBuZXcgQ29udHJvbCgncmF0ZS11cCcsICdmb3J3YXJkJyk7XG5cdFx0XHR0aGlzLmN1cnJlbnQgPSBuZXcgQ29udHJvbFRleHQoJ3JhdGUtY3VycmVudCcpO1xuXG5cdFx0XHR0aGlzLmRvd24uZWxlbWVudC5jbGljayhlID0+IHtcblx0XHRcdFx0dGhpcy5kZWNyZWFzZSgpO1xuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMudXAuZWxlbWVudC5jbGljayhlID0+IHtcblx0XHRcdFx0dGhpcy5pbmNyZWFzZSgpO1xuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMuZWxlbWVudCA9ICQoJzxkaXYgLz4nKS5hZGRDbGFzcygnY29udHJvbC1jb250YWluZXInKS5hcHBlbmQodGhpcy5kb3duLmVsZW1lbnQpLmFwcGVuZCh0aGlzLmN1cnJlbnQuZWxlbWVudCkuYXBwZW5kKHRoaXMudXAuZWxlbWVudCk7XG5cdFx0fVxuXG5cdFx0ZGVjcmVhc2UgKCkge1xuXHRcdFx0aWYgKHZpZGVvLnBsYXliYWNrUmF0ZSA+IG9wdGlvbnMucmF0ZS5taW4pIHtcblx0XHRcdFx0dGhpcy51cC5lbGVtZW50LnJlbW92ZUNsYXNzKCdkaXNhYmxlZCcpO1xuXHRcdFx0XHR2aWRlby5wbGF5YmFja1JhdGUgLT0gb3B0aW9ucy5yYXRlLnN0ZXA7XG5cdFx0XHRcdHRoaXMuc2hvdygpO1xuXHRcdFx0XHRDb29raWUuc2V0KCdyYXRlJywgdmlkZW8ucGxheWJhY2tSYXRlKTtcblx0XHRcdH1cblx0XHRcdGVsc2Vcblx0XHRcdFx0dGhpcy5kb3duLmVsZW1lbnQuYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XG5cdFx0fVxuXG5cdFx0bG9hZCAoKSB7XG5cdFx0XHR2aWRlby5wbGF5YmFja1JhdGUgPSBDb29raWUuZ2V0KCdyYXRlJywgMSk7XG5cdFx0XHR0aGlzLnNob3coKTtcblx0XHR9XG5cblx0XHRzaG93ICgpIHtcblx0XHRcdHRoaXMuY3VycmVudC50ZXh0ID0gJ8OXJyArIHZpZGVvLnBsYXliYWNrUmF0ZS50b0ZpeGVkKDIpO1xuXHRcdH1cblxuXHRcdGluY3JlYXNlICgpIHtcblx0XHRcdGlmICh2aWRlby5wbGF5YmFja1JhdGUgPCBvcHRpb25zLnJhdGUubWF4KSB7XG5cdFx0XHRcdHRoaXMuZG93bi5lbGVtZW50LnJlbW92ZUNsYXNzKCdkaXNhYmxlZCcpO1xuXHRcdFx0XHR2aWRlby5wbGF5YmFja1JhdGUgKz0gb3B0aW9ucy5yYXRlLnN0ZXA7XG5cdFx0XHRcdHRoaXMuc2hvdygpO1xuXHRcdFx0XHRDb29raWUuc2V0KCdyYXRlJywgdmlkZW8ucGxheWJhY2tSYXRlKTtcblx0XHRcdH1cblx0XHRcdGVsc2Vcblx0XHRcdFx0dGhpcy51cC5lbGVtZW50LmFkZENsYXNzKCdkaXNhYmxlZCcpO1xuXHRcdH1cblx0fVxuXG5cdGNsYXNzIFNvdXJjZUNvbnRyb2wgZXh0ZW5kcyBDb250cm9sQ29udGFpbmVyIHtcblx0XHRjb25zdHJ1Y3RvciAoKSB7XG5cdFx0XHRzdXBlcignYnVsbHNleWUnKTtcblx0XHRcdGlmIChzb3VyY2VzLmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0Zm9yICh2YXIgaSBpbiBzb3VyY2VzKSB7XG5cdFx0XHRcdFx0dGhpcy5hZGRJdGVtKHNvdXJjZXNbIGkgXS50aXRsZSwgeyBzcmMgOiBzb3VyY2VzWyBpIF0uc3JjIH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0c2V0IChpbmRleCkge1xuXHRcdFx0bGV0IHMgPSB0aGlzLmdldEJ5SW5kZXgoaW5kZXgpO1xuXHRcdFx0aWYgKHMgIT0gbnVsbCkge1xuXHRcdFx0XHRlbGVtZW50LmF0dHIoJ3NyYycsIHMuZGF0YSgnc3JjJykpO1xuXHRcdFx0XHRjb250cm9scy5kb3dubG9hZCA9IHMuZGF0YSgnc3JjJyk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0b25JdGVtQ2xpY2sgKGluZGV4KSB7XG5cdFx0XHRzdXBlci5vbkl0ZW1DbGljayhpbmRleCk7XG5cdFx0XHR0aGlzLnNldChpbmRleCk7XG5cdFx0fVxuXHR9XG5cblx0Y2xhc3MgU3VidGl0bGVDb250cm9sIGV4dGVuZHMgQ29udHJvbENvbnRhaW5lciB7XG5cdFx0Y29uc3RydWN0b3IgKCkge1xuXHRcdFx0c3VwZXIoJ2NvbW1lbnRpbmctbycpO1xuXHRcdFx0aWYgKHN1YnRpdGxlcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGkgaW4gc3VidGl0bGVzKSB7XG5cdFx0XHRcdFx0dGhpcy5hZGRJdGVtKHN1YnRpdGxlc1sgaSBdLnRpdGxlLCB7IHNyYyA6IHN1YnRpdGxlc1sgaSBdLnNyYywgbGFuZ3VhZ2UgOiBzdWJ0aXRsZXNbIGkgXS5sYW5ndWFnZSB9KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHNldCB0cmFjayAoaW5kZXgpIHtcblx0XHRcdHZhciB0ID0gdGhpcy5nZXRCeUluZGV4KGluZGV4KTtcblx0XHRcdGlmICh0ICE9IG51bGwgJiYgdmlkZW8udGV4dFRyYWNrcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdGxldCBsYW5ndWFnZSA9IHQuZGF0YSgnbGFuZ3VhZ2UnKTtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB2aWRlby50ZXh0VHJhY2tzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aWYgKHZpZGVvLnRleHRUcmFja3NbIGkgXS5sYW5ndWFnZSA9PSBsYW5ndWFnZSlcblx0XHRcdFx0XHRcdHZpZGVvLnRleHRUcmFja3NbIGkgXS5tb2RlID0gJ3Nob3dpbmcnO1xuXHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdHZpZGVvLnRleHRUcmFja3NbIGkgXS5tb2RlID0gJ2hpZGRlbic7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRvbkNvbnRhaW5lckNsaWNrICgpIHtcblx0XHRcdHN1cGVyLm9uQ29udGFpbmVyQ2xpY2soKTtcblx0XHRcdHN1cGVyLm9uSXRlbUNsaWNrKC0xKTtcblx0XHRcdGlmICh2aWRlby50ZXh0VHJhY2tzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB2aWRlby50ZXh0VHJhY2tzLmxlbmd0aDsgaSsrKVxuXHRcdFx0XHRcdHZpZGVvLnRleHRUcmFja3NbIGkgXS5tb2RlID0gJ2hpZGRlbic7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0b25JdGVtQ2xpY2sgKGluZGV4KSB7XG5cdFx0XHRzdXBlci5vbkl0ZW1DbGljayhpbmRleCk7XG5cdFx0XHR0aGlzLnRyYWNrID0gaW5kZXg7XG5cdFx0fVxuXHR9XG5cblx0Y2xhc3MgVGltZWxpbmVDb250cm9sIHtcblx0XHRjb25zdHJ1Y3RvciAoKSB7XG5cdFx0XHRsZXQgX3NlbGYgPSB0aGlzO1xuXG5cdFx0XHR0aGlzLmRyYWcgPSBmYWxzZTtcblxuXHRcdFx0dGhpcy5jdXJyZW50ID0gbmV3IENvbnRyb2xUZXh0KCd0aW1lLWN1cnJlbnQnKTtcblx0XHRcdHRoaXMudG90YWwgICA9IG5ldyBDb250cm9sVGV4dCgndGltZS10b3RhbCcpO1xuXG5cdFx0XHR0aGlzLm1hcmtlciA9ICQoJzxkaXYgLz4nKS5hZGRDbGFzcygndGltZS1tYXJrZXInKTtcblxuXHRcdFx0dGhpcy5tYXJrZXJTaGFkb3cgPSAkKCc8ZGl2IC8+Jylcblx0XHRcdFx0LmFkZENsYXNzKCd0aW1lLW1hcmtlciBzaGFkb3cnKVxuXHRcdFx0XHQuYXBwZW5kKClcblx0XHRcdFx0LmhpZGUoKTtcblxuXHRcdFx0dGhpcy5tYXJrZXJTaGFkb3dUaW1lID0gJCgnPGRpdiAvPicpLmFkZENsYXNzKCd0aW1lJyk7XG5cdFx0XHR0aGlzLnBsYXllZCAgICAgICAgICAgPSAkKCc8ZGl2IC8+JykuYWRkQ2xhc3MoJ3RpbWUtcGxheWVkJyk7XG5cdFx0XHR0aGlzLmN1cnJlbnQudGV4dCAgICAgPSAnMDA6MDAnO1xuXHRcdFx0dGhpcy5saW5lICAgICAgICAgICAgID0gJCgnPGRpdiAvPicpXG5cdFx0XHRcdC5hZGRDbGFzcygndGltZWxpbmUnKVxuXHRcdFx0XHQuYXBwZW5kKHRoaXMubWFya2VyKVxuXHRcdFx0XHQuYXBwZW5kKHRoaXMubWFya2VyU2hhZG93LmFwcGVuZCh0aGlzLm1hcmtlclNoYWRvd1RpbWUpKVxuXHRcdFx0XHQuYXBwZW5kKHRoaXMucGxheWVkKVxuXHRcdFx0XHQub24oe1xuXHRcdFx0XHRcdCdtb3VzZW1vdmUnIDogKGUpID0+IHtcblx0XHRcdFx0XHRcdGlmICh0aGlzLmRyYWcpIHJldHVybjtcblxuXHRcdFx0XHRcdFx0bGV0IHAgPSB0aGlzLmdldFBvc2l0aW9uKGUucGFnZVgpO1xuXHRcdFx0XHRcdFx0aWYgKHAgPiAwICYmIHAgPCAxKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMubWFya2VyU2hhZG93LnNob3coKTtcblx0XHRcdFx0XHRcdFx0dGhpcy5tYXJrZXJTaGFkb3cuY3NzKCdsZWZ0JywgcCAqIDEwMCArICclJyk7XG5cdFx0XHRcdFx0XHRcdHRoaXMubWFya2VyU2hhZG93VGltZS5odG1sKHNlY29uZHNUb1RpbWUodmlkZW8uZHVyYXRpb24gKiBwKSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRcdHRoaXMubWFya2VyU2hhZG93LmhpZGUoKTtcblx0XHRcdFx0XHR9LFxuXG5cdFx0XHRcdFx0J21vdXNlbGVhdmUnIDogKGUpID0+IHtcblx0XHRcdFx0XHRcdGlmICh0aGlzLmRyYWcpIHJldHVybjtcblx0XHRcdFx0XHRcdHRoaXMubWFya2VyU2hhZG93LmhpZGUoKVxuXHRcdFx0XHRcdH0sXG5cblx0XHRcdFx0XHQnY2xpY2snIDogKGUpID0+IHtcblx0XHRcdFx0XHRcdGlmICh0aGlzLmRyYWcpIHJldHVybjtcblx0XHRcdFx0XHRcdHNlZWsodmlkZW8uZHVyYXRpb24gKiB0aGlzLmdldFBvc2l0aW9uKGUucGFnZVgpKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHR0aGlzLmVsZW1lbnQgPSAkKCc8ZGl2IC8+Jylcblx0XHRcdFx0LmFkZENsYXNzKCd0aW1lbGluZS1jb250YWluZXInKVxuXHRcdFx0XHQuYXBwZW5kKCQoJzxkaXYgLz4nKVxuXHRcdFx0XHRcdC5hZGRDbGFzcygndGltZWxpbmUtc3ViY29udGFpbmVyJylcblx0XHRcdFx0XHQuYXBwZW5kKHRoaXMuY3VycmVudC5lbGVtZW50KVxuXHRcdFx0XHRcdC5hcHBlbmQodGhpcy5saW5lKVxuXHRcdFx0XHRcdC5hcHBlbmQodGhpcy50b3RhbC5lbGVtZW50KSk7XG5cblx0XHRcdHRoaXMubWFya2VyLm9uKCdtb3VzZWRvd24nLCAoZSkgPT4ge1xuXHRcdFx0XHRpZiAoZS53aGljaCAhPSAxKSByZXR1cm47XG5cdFx0XHRcdHRoaXMubWFya2VyU2hhZG93LmhpZGUoKTtcblx0XHRcdFx0dGhpcy5kcmFnID0gdHJ1ZTtcblx0XHRcdH0pO1xuXG5cdFx0XHQkKGRvY3VtZW50KS5vbih7XG5cblx0XHRcdFx0J21vdXNlbW92ZScgOiAoZSkgPT4ge1xuXHRcdFx0XHRcdGlmICghdGhpcy5kcmFnKSByZXR1cm47XG5cdFx0XHRcdFx0bGV0IHAgPSB0aGlzLmdldFBvc2l0aW9uKGUucGFnZVgpO1xuXHRcdFx0XHRcdGlmIChwID4gMCAmJiBwIDwgMSkge1xuXHRcdFx0XHRcdFx0c2Vlayh2aWRlby5kdXJhdGlvbiAqIHApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblxuXHRcdFx0XHQnbW91c2V1cCcgOiAoZSkgPT4ge1xuXHRcdFx0XHRcdHRoaXMuZHJhZyA9IGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRnZXRQb3NpdGlvbiAoeCkge1xuXHRcdFx0cmV0dXJuICh4IC0gdGhpcy5saW5lLm9mZnNldCgpLmxlZnQpIC8gdGhpcy5saW5lLndpZHRoKCk7XG5cdFx0fVxuXG5cdFx0bW92ZSAoKSB7XG5cdFx0XHR2YXIgdCA9ICh2aWRlby5jdXJyZW50VGltZSAvIHZpZGVvLmR1cmF0aW9uICogMTAwKS50b0ZpeGVkKDIpICsgJyUnO1xuXHRcdFx0dGhpcy5tYXJrZXIuY3NzKCdsZWZ0JywgdCk7XG5cdFx0XHR0aGlzLnBsYXllZC5jc3MoJ3dpZHRoJywgdCk7XG5cdFx0XHR0aGlzLmN1cnJlbnQudGV4dCA9IHNlY29uZHNUb1RpbWUodmlkZW8uY3VycmVudFRpbWUpO1xuXHRcdH1cblx0fVxuXG5cdGNsYXNzIFZvbHVtZUNvbnRyb2wge1xuXHRcdGNvbnN0cnVjdG9yICgpIHtcblx0XHRcdGxldCBfc2VsZiA9IHRoaXM7XG5cblx0XHRcdHRoaXMuaWNvbiA9ICQoJzxkaXYvPicpXG5cdFx0XHRcdC5hZGRDbGFzcygnY29udHJvbC1pY29uJylcblx0XHRcdFx0LmFwcGVuZCgkKCc8aSAvPicpXG5cdFx0XHRcdFx0LmFkZENsYXNzKCdmYSBmYS12b2x1bWUtZG93bicpKVxuXHRcdFx0XHQuY2xpY2soZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdF9zZWxmLnRvZ2dsZU11dGVkKCk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHR0aGlzLm1hcmtlciA9ICQoJzxkaXYvPicpLmFkZENsYXNzKCd2b2x1bWUtbWFya2VyJyk7XG5cblx0XHRcdHRoaXMuYWN0aXZlID0gJCgnPGRpdi8+JykuYWRkQ2xhc3MoJ3ZvbHVtZS1hY3RpdmUnKTtcblxuXHRcdFx0dGhpcy5saW5lID0gJCgnPGRpdi8+Jylcblx0XHRcdFx0LmFkZENsYXNzKCd2b2x1bWUtbGluZScpXG5cdFx0XHRcdC5hcHBlbmQodGhpcy5hY3RpdmUpXG5cdFx0XHRcdC5hcHBlbmQodGhpcy5tYXJrZXIpXG5cdFx0XHRcdC5vbignY2xpY2snLCAoZSkgPT4ge1xuXHRcdFx0XHRcdGlmICh0aGlzLmRyYWcpIHJldHVybjtcblx0XHRcdFx0XHRsZXQgcCA9IHRoaXMuZ2V0UG9zaXRpb24oZS5wYWdlWSk7XG5cdFx0XHRcdFx0aWYgKHAgPj0gMCAmJiBwIDw9IDEpIHtcblx0XHRcdFx0XHRcdGNvbnRyb2xzLnZvbHVtZSA9IDEgLSBwXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblxuXHRcdFx0dGhpcy5lbGVtZW50ID0gJCgnPGRpdiAvPicpXG5cdFx0XHRcdC5hZGRDbGFzcygnY29udHJvbCBjb250cm9sLWNvbnRhaW5lcicpXG5cdFx0XHRcdC5hcHBlbmQodGhpcy5pY29uKVxuXHRcdFx0XHQuYXBwZW5kKCQoJzxkaXYgLz4nKVxuXHRcdFx0XHRcdC5hZGRDbGFzcygnY29udHJvbC1pbm5lciB2b2x1bWUtc2xpZGVyJylcblx0XHRcdFx0XHQuYXBwZW5kKHRoaXMubGluZSkpO1xuXG5cdFx0XHR0aGlzLmRyYWcgPSBmYWxzZTtcblxuXHRcdFx0dGhpcy5tYXJrZXIub24oJ21vdXNlZG93bicsIChlKSA9PiB7XG5cdFx0XHRcdGlmIChlLndoaWNoICE9IDEpIHJldHVybjtcblx0XHRcdFx0dGhpcy5kcmFnID0gdHJ1ZTtcblx0XHRcdH0pO1xuXG5cdFx0XHQkKGRvY3VtZW50KS5vbih7XG5cdFx0XHRcdCdtb3VzZW1vdmUnIDogKGUpID0+IHtcblx0XHRcdFx0XHRpZiAoIXRoaXMuZHJhZykgcmV0dXJuO1xuXHRcdFx0XHRcdGxldCBwID0gdGhpcy5nZXRQb3NpdGlvbihlLnBhZ2VZKTtcblx0XHRcdFx0XHRpZiAocCA+PSAwICYmIHAgPD0gMSkge1xuXHRcdFx0XHRcdFx0Y29udHJvbHMudm9sdW1lID0gMSAtIHBcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0J21vdXNldXAnIDogKGUpID0+IHtcblx0XHRcdFx0XHR0aGlzLmRyYWcgPSBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0c2V0IHZhbHVlICh2YWx1ZSkge1xuXHRcdFx0dmFyIGljb24gPSB0aGlzLmljb24uY2hpbGRyZW4oJy5mYScpLmVxKC0xKTtcblx0XHRcdGljb24ucmVtb3ZlQ2xhc3MoKTtcblx0XHRcdGlmICh2YWx1ZSA8IDAuMDUpIHtcblx0XHRcdFx0dmlkZW8ubXV0ZWQgPSB0cnVlO1xuXHRcdFx0XHRpY29uLmFkZENsYXNzKCdmYSBmYS12b2x1bWUtb2ZmJyk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0dmlkZW8ubXV0ZWQgID0gZmFsc2U7XG5cdFx0XHRcdHZpZGVvLnZvbHVtZSA9IHZhbHVlO1xuXHRcdFx0XHRpZiAodmFsdWUgPCAwLjUpXG5cdFx0XHRcdFx0aWNvbi5hZGRDbGFzcygnZmEgZmEtdm9sdW1lLWRvd24nKTtcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdGljb24uYWRkQ2xhc3MoJ2ZhIGZhLXZvbHVtZS11cCcpO1xuXHRcdFx0XHRDb29raWUuc2V0KCd2b2x1bWUnLCB2YWx1ZSk7XG5cdFx0XHR9XG5cblx0XHRcdGxldCBwID0gTWF0aC5yb3VuZCh2YWx1ZSAqIDEwMCkudG9TdHJpbmcoKSArICclJztcblx0XHRcdHRoaXMuYWN0aXZlLmNzcygnaGVpZ2h0JywgcCk7XG5cdFx0XHR0aGlzLm1hcmtlci5jc3MoJ2JvdHRvbScsIHApO1xuXHRcdH1cblxuXHRcdHRvZ2dsZU11dGVkICgpIHtcblx0XHRcdGlmICh2aWRlby5tdXRlZCA9PSB0cnVlKSB7XG5cdFx0XHRcdHRoaXMudmFsdWUgPSBDb29raWUuZ2V0KCd2b2x1bWUnLCAwLjQpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZVxuXHRcdFx0XHR0aGlzLnZhbHVlID0gMDtcblx0XHR9XG5cblx0XHRnZXRQb3NpdGlvbiAoeSkge1xuXHRcdFx0cmV0dXJuICh5IC0gdGhpcy5saW5lLm9mZnNldCgpLnRvcCkgLyB0aGlzLmxpbmUuaGVpZ2h0KCk7XG5cdFx0fVxuXG5cdH1cblxuXHRjbGFzcyBDb29raWUge1xuXHRcdHN0YXRpYyBnZXQgKG5hbWUsIGRmbHQpIHtcblx0XHRcdHZhciBjb29raWVzID0gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7Jyk7XG5cdFx0XHRmb3IgKHZhciBpIGluIGNvb2tpZXMpIHtcblx0XHRcdFx0dmFyIGQgPSBjb29raWVzWyBpIF0udHJpbSgpLnNwbGl0KCc9Jyk7XG5cdFx0XHRcdGlmIChkWyAwIF0gPT0gJ2xlcGxheWVyXycgKyBuYW1lKVxuXHRcdFx0XHRcdHJldHVybiBkWyAxIF07XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZGZsdDtcblx0XHR9O1xuXG5cdFx0c3RhdGljIHNldCAobmFtZSwgdmFsdWUpIHtcblx0XHRcdHZhciBkID0gbmV3IERhdGUoKTtcblx0XHRcdGQuc2V0RGF0ZShkLnllYXIgKyAxKTtcblx0XHRcdGRvY3VtZW50LmNvb2tpZSA9ICdsZXBsYXllcl8nICsgbmFtZSArICc9JyArIHZhbHVlICsgJztleHBpcmVzPScgKyBkLnRvU3RyaW5nKCk7XG5cdFx0fTtcblx0fVxuXG5cdGNsYXNzIENvbnRyb2xDb2xsZWN0aW9uIHtcblx0XHRjb25zdHJ1Y3RvciAobmFtZSwgYWN0aXZlKSB7XG5cdFx0XHR0aGlzLml0ZW1zICA9IFtdO1xuXHRcdFx0dGhpcy5hY3RpdmUgPSBhY3RpdmUgfHwgZmFsc2U7XG5cdFx0XHR0aGlzLm5hbWUgICA9IG5hbWU7XG5cdFx0fVxuXG5cdFx0c2V0IGRvd25sb2FkICh2YWx1ZSkge1xuXHRcdFx0aWYgKHRoaXMuaGFzKENfRE9XTkxPQUQpKSB7XG5cdFx0XHRcdHRoaXMuaXRlbXMuZG93bmxvYWQubGluayA9IHZhbHVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHNldCBzb3VyY2UgKHZhbHVlKSB7XG5cdFx0XHRpZiAodGhpcy5oYXMoQ19TT1VSQ0UpKVxuXHRcdFx0XHR0aGlzLml0ZW1zLnNvdXJjZS5zZXQodmFsdWUpO1xuXHRcdH1cblxuXHRcdHNldCB0b3RhbFRpbWUgKHZhbHVlKSB7XG5cdFx0XHRpZiAodGhpcy5oYXMoQ19USU1FTElORSkpXG5cdFx0XHRcdHRoaXMuaXRlbXMudGltZWxpbmUudG90YWwudGV4dCA9IHZhbHVlO1xuXHRcdH1cblxuXHRcdHNldCB2b2x1bWUgKHZhbHVlKSB7XG5cdFx0XHRpZiAodGhpcy5oYXMoQ19WT0xVTUUpKVxuXHRcdFx0XHR0aGlzLml0ZW1zLnZvbHVtZS52YWx1ZSA9IHZhbHVlO1xuXHRcdH1cblxuXHRcdGFkZCAobmFtZSkge1xuXHRcdFx0aWYgKG5hbWUgPT0gQ19ESVZJREVSKVxuXHRcdFx0XHRyZXR1cm4gQ29udHJvbC5jcmVhdGUobmFtZSk7XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0dGhpcy5pdGVtc1sgbmFtZSBdID0gQ29udHJvbC5jcmVhdGUobmFtZSk7XG5cdFx0XHRcdHJldHVybiB0aGlzLml0ZW1zWyBuYW1lIF0uZWxlbWVudDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRoYXMgKG5hbWUpIHtcblx0XHRcdHJldHVybiAodHlwZW9mIHRoaXMuaXRlbXNbIG5hbWUgXSA9PSAnb2JqZWN0Jyk7XG5cdFx0fVxuXG5cdFx0aGlkZSAoKSB7XG5cdFx0XHRjb250YWluZXIuZmluZCgnLmNvbnRyb2xzLScgKyB0aGlzLm5hbWUpLmhpZGUoKTtcblx0XHR9XG5cblx0XHRpbml0ICgpIHtcblx0XHRcdHRoaXMudm9sdW1lID0gQ29va2llLmdldCgndm9sdW1lJywgMC40KTtcblx0XHRcdHRoaXMuaW5pdFRpbWVsaW5lKCk7XG5cdFx0XHR0aGlzLnRvdGFsVGltZSA9IHNlY29uZHNUb1RpbWUodmlkZW8uZHVyYXRpb24pO1xuXHRcdFx0dGhpcy5pbml0UmF0ZSgpO1xuXHRcdH1cblxuXHRcdGluaXRSYXRlICgpIHtcblx0XHRcdGlmICh0aGlzLmhhcyhDX1JBVEUpKVxuXHRcdFx0XHR0aGlzLml0ZW1zLnJhdGUubG9hZCgpO1xuXHRcdH1cblxuXHRcdGluaXRUaW1lbGluZSAoKSB7XG5cdFx0XHRpZiAodGhpcy5oYXMoQ19USU1FTElORSkpIHtcblx0XHRcdFx0aWYgKHRoaXMuaXRlbXMudGltZWxpbmUuZWxlbWVudC53aWR0aCgpIDwgMjApXG5cdFx0XHRcdFx0dGhpcy5pdGVtcy50aW1lbGluZS5lbGVtZW50LmhpZGUoKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRtb3ZlVGltZU1hcmtlciAoKSB7XG5cdFx0XHRpZiAodGhpcy5oYXMoQ19USU1FTElORSkpXG5cdFx0XHRcdHRoaXMuaXRlbXMudGltZWxpbmUubW92ZSgpO1xuXHRcdH1cblxuXHRcdHBhdXNlICgpIHtcblx0XHRcdGlmICh0aGlzLmhhcyhDX1BMQVkpKVxuXHRcdFx0XHR0aGlzLml0ZW1zLnBsYXkucGF1c2UoKTtcblx0XHR9XG5cblx0XHRwbGF5ICgpIHtcblx0XHRcdGlmICh0aGlzLmhhcyhDX1BMQVkpKVxuXHRcdFx0XHR0aGlzLml0ZW1zLnBsYXkucGxheSgpO1xuXHRcdH1cblxuXHRcdHNob3cgKCkge1xuXHRcdFx0Y29udGFpbmVyLmZpbmQoJy5jb250cm9scy0nICsgdGhpcy5uYW1lKS5zaG93KCk7XG5cdFx0fVxuXHR9XG5cblx0Y2xhc3MgQ29udHJvbHMge1xuXHRcdGNvbnN0cnVjdG9yICgpIHtcblx0XHRcdHRoaXMuY29sbGVjdGlvbnMgICAgICAgICAgICAgICA9IHtcblx0XHRcdFx0Y29tbW9uICAgICA6IG5ldyBDb250cm9sQ29sbGVjdGlvbignY29tbW9uJyksXG5cdFx0XHRcdG1pbmkgICAgICAgOiBuZXcgQ29udHJvbENvbGxlY3Rpb24oJ21pbmknKSxcblx0XHRcdFx0ZnVsbHNjcmVlbiA6IG5ldyBDb250cm9sQ29sbGVjdGlvbignZnVsbHNjcmVlbicpXG5cdFx0XHR9O1xuXHRcdFx0dGhpcy5jb2xsZWN0aW9ucy5jb21tb24uYWN0aXZlID0gdHJ1ZTtcblx0XHR9XG5cblx0XHRnZXQgY29tbW9uICgpIHtcblx0XHRcdHJldHVybiB0aGlzLmNvbGxlY3Rpb25zLmNvbW1vbjtcblx0XHR9XG5cblx0XHRnZXQgZnVsbHNjcmVlbiAoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jb2xsZWN0aW9ucy5mdWxsc2NyZWVuO1xuXHRcdH1cblxuXHRcdGdldCBtaW5pICgpIHtcblx0XHRcdHJldHVybiB0aGlzLmNvbGxlY3Rpb25zLm1pbmk7XG5cdFx0fVxuXG5cdFx0c2V0IGRvd25sb2FkICh2YWx1ZSkge1xuXHRcdFx0Zm9yICh2YXIgaSBpbiB0aGlzLmNvbGxlY3Rpb25zKSB7XG5cdFx0XHRcdHRoaXMuY29sbGVjdGlvbnNbIGkgXS5kb3dubG9hZCA9IHZhbHVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHNldCBzb3VyY2UgKHZhbHVlKSB7XG5cdFx0XHRmb3IgKHZhciBpIGluIHRoaXMuY29sbGVjdGlvbnMpIHtcblx0XHRcdFx0dGhpcy5jb2xsZWN0aW9uc1sgaSBdLnNvdXJjZSA9IHZhbHVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHNldCB0b3RhbFRpbWUgKHZhbHVlKSB7XG5cdFx0XHRmb3IgKHZhciBpIGluIHRoaXMuY29sbGVjdGlvbnMpIHtcblx0XHRcdFx0dGhpcy5jb2xsZWN0aW9uc1sgaSBdLnRvdGFsVGltZSA9IHZhbHVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHNldCB2b2x1bWUgKHZhbHVlKSB7XG5cdFx0XHRmb3IgKHZhciBpIGluIHRoaXMuY29sbGVjdGlvbnMpIHtcblx0XHRcdFx0dGhpcy5jb2xsZWN0aW9uc1sgaSBdLnZvbHVtZSA9IHZhbHVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGhhcyAobmFtZSkge1xuXHRcdFx0cmV0dXJuICh0eXBlb2YgdGhpcy5jb2xsZWN0aW9uc1sgbmFtZSBdID09ICdvYmplY3QnKTtcblx0XHR9XG5cblx0XHRpbml0ICgpIHtcblx0XHRcdGZvciAodmFyIGkgaW4gdGhpcy5jb2xsZWN0aW9ucykge1xuXHRcdFx0XHR0aGlzLmNvbGxlY3Rpb25zWyBpIF0uaW5pdCgpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5jb2xsZWN0aW9ucy5jb21tb24uc2hvdygpO1xuXHRcdFx0dGhpcy5jb2xsZWN0aW9ucy5taW5pLmhpZGUoKTtcblx0XHRcdHRoaXMuY29sbGVjdGlvbnMuZnVsbHNjcmVlbi5oaWRlKCk7XG5cdFx0fVxuXG5cdFx0bW92ZVRpbWVNYXJrZXIgKCkge1xuXHRcdFx0Zm9yICh2YXIgaSBpbiB0aGlzLmNvbGxlY3Rpb25zKVxuXHRcdFx0XHR0aGlzLmNvbGxlY3Rpb25zWyBpIF0ubW92ZVRpbWVNYXJrZXIoKTtcblx0XHR9XG5cblx0XHRwYXVzZSAoKSB7XG5cdFx0XHRmb3IgKHZhciBpIGluIHRoaXMuY29sbGVjdGlvbnMpXG5cdFx0XHRcdHRoaXMuY29sbGVjdGlvbnNbIGkgXS5wYXVzZSgpO1xuXHRcdH1cblxuXHRcdHBsYXkgKCkge1xuXHRcdFx0Zm9yICh2YXIgaSBpbiB0aGlzLmNvbGxlY3Rpb25zKVxuXHRcdFx0XHR0aGlzLmNvbGxlY3Rpb25zWyBpIF0ucGxheSgpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBUaGlzIGNsYXNzIG1hbmFnZXMgRnVsbFNjcmVlbiBBUEkuXG5cdCAqIEBUT0RPOiBhZGQgZnVsbHNjcmVlbmVycm9yIGhhbmRsZXIuXG5cdCAqL1xuXHRjbGFzcyBGdWxsc2NyZWVuIHtcblx0XHQvKipcblx0XHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gV2hldGhlciBicm93c2VyIHN1cHBvcnRzIGZ1bGxzY3JlZW4gbW9kZS5cblx0XHQgKi9cblx0XHRzdGF0aWMgZW5hYmxlZCAoKSB7XG5cdFx0XHRyZXR1cm4gISEoZG9jdW1lbnQuZnVsbHNjcmVlbkVuYWJsZWQgfHwgZG9jdW1lbnQubW96RnVsbFNjcmVlbkVuYWJsZWQgfHwgZG9jdW1lbnQubXNGdWxsc2NyZWVuRW5hYmxlZCB8fCBkb2N1bWVudC53ZWJraXRTdXBwb3J0c0Z1bGxzY3JlZW4gfHwgZG9jdW1lbnQud2Via2l0RnVsbHNjcmVlbkVuYWJsZWQgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8nKS53ZWJraXRSZXF1ZXN0RnVsbFNjcmVlbik7XG5cdFx0fVxuXG5cdFx0c3RhdGljIGhpZGVFbGVtZW50cyAoKSB7XG5cdFx0XHRjb250YWluZXIucmVtb3ZlQ2xhc3MoJ2Z1bGxzY3JlZW4nKTtcblx0XHRcdGNvbnRyb2xzLmZ1bGxzY3JlZW4uaGlkZSgpO1xuXHRcdFx0Y29udHJvbHMuY29tbW9uLnNob3coKTtcblx0XHRcdGNvbnRyb2xzLm1pbmkuaGlkZSgpO1xuXHRcdH1cblxuXHRcdHN0YXRpYyBpbml0ICgpIHtcblx0XHRcdGlmICh0aGlzLmVuYWJsZWQoKSkge1xuXHRcdFx0XHQvLyBGdWxsc2NyZWVuIGNoYW5nZSBoYW5kbGVycy5cblx0XHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZnVsbHNjcmVlbmNoYW5nZScsIGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRcdFx0RnVsbHNjcmVlbi50b2dnbGVFbGVtZW50cyghIShkb2N1bWVudC5mdWxsU2NyZWVuIHx8IGRvY3VtZW50LmZ1bGxzY3JlZW5FbGVtZW50KSk7XG5cdFx0XHRcdH0sIGZhbHNlKTtcblx0XHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignd2Via2l0ZnVsbHNjcmVlbmNoYW5nZScsIGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRcdFx0RnVsbHNjcmVlbi50b2dnbGVFbGVtZW50cyghIWRvY3VtZW50LndlYmtpdElzRnVsbFNjcmVlbik7XG5cdFx0XHRcdH0sIGZhbHNlKTtcblx0XHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW96ZnVsbHNjcmVlbmNoYW5nZScsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRGdWxsc2NyZWVuLnRvZ2dsZUVsZW1lbnRzKCEhZG9jdW1lbnQubW96RnVsbFNjcmVlbik7XG5cdFx0XHRcdH0sIGZhbHNlKTtcblx0XHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbXNmdWxsc2NyZWVuY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdEZ1bGxzY3JlZW4udG9nZ2xlRWxlbWVudHMoISFkb2N1bWVudC5tc0Z1bGxzY3JlZW5FbGVtZW50KTtcblx0XHRcdFx0fSwgZmFsc2UpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIEByZXR1cm5zIHtib29sZWFufSBXaGV0aGVyIGJyb3dzZXIgaXMgaW4gZnVsbHNjcmVlbiBtb2RlLlxuXHRcdCAqL1xuXHRcdHN0YXRpYyBpcyAoKSB7XG5cdFx0XHRyZXR1cm4gISEoZG9jdW1lbnQuZnVsbFNjcmVlbiB8fCBkb2N1bWVudC53ZWJraXRJc0Z1bGxTY3JlZW4gfHwgZG9jdW1lbnQubW96RnVsbFNjcmVlbiB8fCBkb2N1bWVudC5tc0Z1bGxzY3JlZW5FbGVtZW50IHx8IGRvY3VtZW50LmZ1bGxzY3JlZW5FbGVtZW50KTtcblx0XHR9XG5cblx0XHRzdGF0aWMgc2hvd0VsZW1lbnRzICgpIHtcblx0XHRcdGNvbnRhaW5lci5hZGRDbGFzcygnZnVsbHNjcmVlbicpO1xuXHRcdFx0Y29udHJvbHMuZnVsbHNjcmVlbi5zaG93KCk7XG5cdFx0XHRjb250cm9scy5jb21tb24uaGlkZSgpO1xuXHRcdFx0Y29udHJvbHMubWluaS5oaWRlKCk7XG5cdFx0fVxuXG5cdFx0c3RhdGljIHRvZ2dsZSAoKSB7XG5cdFx0XHRpZiAodGhpcy5pcygpKSB7XG5cdFx0XHRcdGlmIChkb2N1bWVudC5leGl0RnVsbHNjcmVlbikgICAgICAgICAgICAgICAgZG9jdW1lbnQuZXhpdEZ1bGxzY3JlZW4oKTtcblx0XHRcdFx0ZWxzZSBpZiAoZG9jdW1lbnQubW96Q2FuY2VsRnVsbFNjcmVlbikgICAgICBkb2N1bWVudC5tb3pDYW5jZWxGdWxsU2NyZWVuKCk7XG5cdFx0XHRcdGVsc2UgaWYgKGRvY3VtZW50LndlYmtpdENhbmNlbEZ1bGxTY3JlZW4pICAgZG9jdW1lbnQud2Via2l0Q2FuY2VsRnVsbFNjcmVlbigpO1xuXHRcdFx0XHRlbHNlIGlmIChkb2N1bWVudC5tc0V4aXRGdWxsc2NyZWVuKSAgICAgICAgIGRvY3VtZW50Lm1zRXhpdEZ1bGxzY3JlZW4oKTtcblx0XHRcdFx0dGhpcy5oaWRlRWxlbWVudHMoKTsgLy8gQFRPRE86IG1ha2UgdGhpcyBvbmx5IGlmIGZ1bGxzY3JlZW4gZmlyZWQuXG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0bGV0IGNvbnRhaW5lckVsID0gY29udGFpbmVyWyAwIF07XG5cdFx0XHRcdGlmIChjb250YWluZXJFbC5yZXF1ZXN0RnVsbFNjcmVlbikgICAgICAgICAgICBjb250YWluZXJFbC5yZXF1ZXN0RnVsbFNjcmVlbigpO1xuXHRcdFx0XHRlbHNlIGlmIChjb250YWluZXJFbC53ZWJraXRSZXF1ZXN0RnVsbFNjcmVlbikgY29udGFpbmVyRWwud2Via2l0UmVxdWVzdEZ1bGxTY3JlZW4oKTtcblx0XHRcdFx0ZWxzZSBpZiAoY29udGFpbmVyRWwubW96UmVxdWVzdEZ1bGxTY3JlZW4pICAgIGNvbnRhaW5lckVsLm1velJlcXVlc3RGdWxsU2NyZWVuKCk7XG5cdFx0XHRcdGVsc2UgaWYgKGNvbnRhaW5lckVsLm1zRXhpdEZ1bGxzY3JlZW4pICAgICAgICBjb250YWluZXJFbC5tc1JlcXVlc3RGdWxsc2NyZWVuKCk7XG5cdFx0XHRcdHRoaXMuc2hvd0VsZW1lbnRzKCk7IC8vIEBUT0RPOiBtYWtlIHRoaXMgb25seSBpZiBmdWxsc2NyZWVuIGZpcmVkLlxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIFVwZGF0ZSBET00gc3RydWN0dXJlIGFjY29yZGluZyB0byBjdXJyZW50IHN0YXRlLlxuXHRcdCAqL1xuXHRcdHN0YXRpYyB0b2dnbGVFbGVtZW50cyAoc2hvdykge1xuXHRcdFx0aWYgKCEhc2hvdykge1xuXHRcdFx0XHR0aGlzLnNob3dFbGVtZW50cygpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHRoaXMuaGlkZUVsZW1lbnRzKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0dmFyIHNvdXJjZXMgICA9IFtdO1xuXHR2YXIgc3VidGl0bGVzID0gW107XG5cdHZhciB2b2x1bWUgICAgPSAwLjU7XG5cdHZhciB2aWRlbyAgICAgPSBudWxsO1xuXHR2YXIgY29udHJvbHMgID0gbmV3IENvbnRyb2xzKCk7XG5cblx0LyoqXG5cdCAqIERPTSBjb250YWluZXIgdG8gaG9sZCB2aWRlbyBhbmQgYWxsIG90aGVyIHN0dWZmLlxuXHQgKiBAdHlwZSBvYmplY3Rcblx0ICovXG5cdHZhciBjb250YWluZXIgPSBudWxsO1xuXHR2YXIgb3ZlcmxheSAgID0gbnVsbDtcblxuXHR2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcblx0XHQvLyBDaGVjayBpZiBlbGVtZW50IGlzIGNvcnJlY3RseSBzZWxlY3RlZC5cblx0XHRpZiAoZWxlbWVudC5wcm9wKCd0YWdOYW1lJykudG9Mb3dlckNhc2UoKSAhPSAndmlkZW8nKSB7XG5cdFx0XHRjb25zb2xlLndhcm4oJ0luY29ycmVjdCBlbGVtZW50IHNlbGVjdGVkLicpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0Ly8gU2V0IHNvdXJjZS5cblx0XHRlbGVtZW50LmNoaWxkcmVuKCdzb3VyY2UnKS5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHRcdHZhciBzcmMgPSAkKHRoaXMpLmF0dHIoJ3NyYycpO1xuXHRcdFx0aWYgKHNyYylcblx0XHRcdFx0c291cmNlcy5wdXNoKHtcblx0XHRcdFx0XHRzcmMgICA6IHNyYyxcblx0XHRcdFx0XHR0aXRsZSA6ICQodGhpcykuYXR0cigndGl0bGUnKVxuXHRcdFx0XHR9KTtcblx0XHR9KTtcblx0XHRpZiAoc291cmNlcy5sZW5ndGggPT0gMCkge1xuXHRcdFx0dmFyIHNyYyA9IGVsZW1lbnQuYXR0cignc3JjJyk7XG5cdFx0XHRpZiAoc3JjKSB7XG5cdFx0XHRcdHNvdXJjZXMucHVzaCh7XG5cdFx0XHRcdFx0c3JjICAgOiBzcmMsXG5cdFx0XHRcdFx0dGl0bGUgOiAkKHRoaXMpLmF0dHIoJ3RpdGxlJykgfHwgJ2RlZmF1bHQnXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoc291cmNlcy5sZW5ndGggPT0gMCkge1xuXHRcdFx0Y29uc29sZS53YXJuKCdObyBzb3VyY2VzIGZvdW5kLicpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0aW5pdE9wdGlvbnMoKTtcblx0XHRpbml0RG9tKCk7XG5cdFx0aW5pdFN1YnRpdGxlcygpO1xuXHRcdGluaXRDb250cm9scygpO1xuXHRcdGluaXRWaWRlbygpO1xuXHRcdGluaXRIb3RLZXlzKCk7XG5cdH07XG5cblx0dmFyIGluaXRDb250cm9scyA9IGZ1bmN0aW9uICgpIHtcblx0XHRmb3IgKGxldCBuYW1lIGluIG9wdGlvbnMuY29udHJvbHMpIHtcblx0XHRcdGlmIChjb250cm9scy5oYXMobmFtZSkpIHtcblx0XHRcdFx0Zm9yIChsZXQgcm93SW5kZXggaW4gb3B0aW9ucy5jb250cm9sc1sgbmFtZSBdKSB7XG5cdFx0XHRcdFx0bGV0IHJvdyAgICAgICAgID0gb3B0aW9ucy5jb250cm9sc1sgbmFtZSBdWyByb3dJbmRleCBdLFxuXHRcdFx0XHRcdCAgICBoYXNUaW1lbGluZSA9IGZhbHNlLFxuXHRcdFx0XHRcdCAgICByb3dFbGVtZW50ICA9ICQoJzxkaXYgLz4nKS5hZGRDbGFzcygnbGVwbGF5ZXItY29udHJvbHMgY29udHJvbHMtJyArIG5hbWUpO1xuXG5cdFx0XHRcdFx0Zm9yIChsZXQgaSBpbiByb3cpIHtcblx0XHRcdFx0XHRcdGxldCBjb250cm9sTmFtZSA9IHJvd1sgaSBdO1xuXG5cdFx0XHRcdFx0XHRpZiAoY29udHJvbE5hbWUgPT0gQ19ESVZJREVSIHx8ICFjb250cm9scy5jb2xsZWN0aW9uc1sgbmFtZSBdLmhhcyhjb250cm9sTmFtZSkpIHtcblx0XHRcdFx0XHRcdFx0Ly8gQ3JlYXRlIGNvbnRyb2wgb25seSBpZiBkaXZpZGVyIG9yIGRvZXMgbm90IGV4aXN0IHlldC5cblx0XHRcdFx0XHRcdFx0dmFyIGMgPSBjb250cm9scy5jb2xsZWN0aW9uc1sgbmFtZSBdLmFkZChjb250cm9sTmFtZSk7XG5cdFx0XHRcdFx0XHRcdGlmIChjICE9IG51bGwpIHtcblx0XHRcdFx0XHRcdFx0XHRyb3dFbGVtZW50LmFwcGVuZChjKTtcblx0XHRcdFx0XHRcdFx0XHRpZiAoY29udHJvbE5hbWUgPT0gQ19USU1FTElORSlcblx0XHRcdFx0XHRcdFx0XHRcdGhhc1RpbWVsaW5lID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS53YXJuKCdDYW5ub3QgY3JlYXRlICcgKyBjb250cm9sTmFtZSArICcgY29udHJvbCBmb3IgY29sbGVjdGlvbiAnICsgbmFtZSArICcuJyk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKCFoYXNUaW1lbGluZSlcblx0XHRcdFx0XHRcdHJvd0VsZW1lbnQuY3NzKCd3aWR0aCcsICcxcHgnKTtcblxuXHRcdFx0XHRcdHJvd0VsZW1lbnQuZmluZCgnLmRpdmlkZXIgKyAuZGl2aWRlcicpLnJlbW92ZSgpO1xuXG5cdFx0XHRcdFx0Y29udGFpbmVyLmFwcGVuZChyb3dFbGVtZW50KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxuXHR2YXIgaW5pdERvbSA9IGZ1bmN0aW9uICgpIHtcblx0XHRvdmVybGF5ICAgICAgICAgICAgPSAkKCc8ZGl2IC8+JykuYWRkQ2xhc3MoJ3BsYXktb3ZlcmxheScpLmh0bWwoJzxpIGNsYXNzPVwiZmEgZmEtcGxheVwiPjwvaT4nKTtcblx0XHR2YXIgdmlkZW9Db250YWluZXIgPSAkKCc8ZGl2IC8+JykuYWRkQ2xhc3MoJ2xlcGxheWVyLXZpZGVvJykuYXBwZW5kKG92ZXJsYXkpO1xuXHRcdGNvbnRhaW5lciAgICAgICAgICA9ICQoJzxkaXYgLz4nKS5hZGRDbGFzcygnbGVwbGF5ZXItY29udGFpbmVyJykuYXBwZW5kKHZpZGVvQ29udGFpbmVyKS5jc3MoJ3dpZHRoJywgZWxlbWVudC53aWR0aCgpICsgJ3B4Jyk7XG5cblx0XHRlbGVtZW50LmJlZm9yZShjb250YWluZXIpO1xuXHRcdHZpZGVvQ29udGFpbmVyLmFwcGVuZChlbGVtZW50KTtcblx0XHRvdmVybGF5LmNsaWNrKGZ1bmN0aW9uICgpIHtcblx0XHRcdHRvZ2dsZVBsYXkoKTtcblx0XHR9KTtcblx0fTtcblxuXHR2YXIgaW5pdEhvdEtleXMgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Ly8gU3BhY2UuXG5cdFx0ZWxlbWVudC5rZXlwcmVzcyhlID0+IHtcblx0XHRcdGlmIChlLmNoYXJDb2RlID09IDMyKSB7XG5cdFx0XHRcdC8vZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHR0b2dnbGVQbGF5KCk7XG5cdFx0XHR9XG5cdFx0fSkuY2xpY2soZnVuY3Rpb24gKCkge1xuXHRcdFx0dG9nZ2xlUGxheSgpO1xuXHRcdH0pO1xuXHR9O1xuXG5cdHZhciBpbml0T3B0aW9ucyA9IGZ1bmN0aW9uICgpIHtcblx0XHQvLyBDb250cm9scy5cblx0XHRlbGVtZW50LnJlbW92ZUF0dHIoJ2NvbnRyb2xzJyk7XG5cblx0XHQvLyBIZWlnaHQuXG5cdFx0dmFyIGggPSBlbGVtZW50LmF0dHIoJ2hlaWdodCcpO1xuXHRcdGlmIChoKSB7XG5cdFx0XHRvcHRpb25zLmhlaWdodCA9IGggKyAncHgnO1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVBdHRyKCdoZWlnaHQnKTtcblx0XHR9XG5cdFx0ZWxlbWVudC5jc3MoJ2hlaWdodCcsIG9wdGlvbnMuaGVpZ2h0KTtcblxuXHRcdC8vIFdpZHRoLlxuXHRcdHZhciB3ID0gZWxlbWVudC5hdHRyKCd3aWR0aCcpO1xuXHRcdGlmICh3KSB7XG5cdFx0XHRvcHRpb25zLndpZHRoID0gdyArICdweCc7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUF0dHIoJ3dpZHRoJyk7XG5cdFx0fVxuXHRcdGVsZW1lbnQuY3NzKCd3aWR0aCcsIG9wdGlvbnMud2lkdGgpO1xuXG5cdFx0Ly8gUG9zdGVyLlxuXHRcdHZhciBwID0gZWxlbWVudC5hdHRyKCdwb3N0ZXInKTtcblx0XHRpZiAocClcblx0XHRcdG9wdGlvbnMucG9zdGVyID0gcDtcblx0XHRlbHNlIGlmIChvcHRpb25zLnBvc3Rlcilcblx0XHRcdGVsZW1lbnQuYXR0cigncG9zdGVyJywgb3B0aW9ucy5wb3N0ZXIpO1xuXG5cdFx0Ly8gQXV0b3BsYXksIGxvb3AsIG11dGVkLlxuXHRcdHZhciBhdHRycyA9IFsgJ2F1dG9wbGF5JywgJ2xvb3AnLCAnbXV0ZWQnIF07XG5cdFx0Zm9yICh2YXIgaSBpbiBhdHRycykge1xuXHRcdFx0dmFyIGEgPSBlbGVtZW50LmF0dHIoYXR0cnNbIGkgXSk7XG5cdFx0XHRpZiAoYSlcblx0XHRcdFx0b3B0aW9uc1sgYXR0cnNbIGkgXSBdID0gdHJ1ZTtcblx0XHRcdGVsc2UgaWYgKG9wdGlvbnNbIGF0dHJzWyBpIF0gXSlcblx0XHRcdFx0ZWxlbWVudC5hdHRyKGF0dHJzWyBpIF0sICcnKTtcblx0XHRcdGVsc2Vcblx0XHRcdFx0ZWxlbWVudC5yZW1vdmVBdHRyKGF0dHJzWyBpIF0pO1xuXHRcdFx0ZWxlbWVudC5wcm9wKGF0dHJzWyBpIF0sIG9wdGlvbnNbIGF0dHJzWyBpIF0gXSk7XG5cdFx0fVxuXG5cdFx0Ly8gUHJlbG9hZC5cblx0XHR2YXIgciA9IGVsZW1lbnQuYXR0cigncHJlbG9hZCcpO1xuXHRcdGlmIChyKSB7XG5cdFx0XHRyID0gci50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0aWYgKHIgPT0gJ25vbmUnIHx8IHIgPT0gJ21ldGFkYXRhJylcblx0XHRcdFx0b3B0aW9ucy5wcmVsb2FkID0gcjtcblx0XHRcdGVsc2Vcblx0XHRcdFx0b3B0aW9ucy5wcmVsb2FkID0gJ2F1dG8nO1xuXHRcdH1cblx0XHRlbGVtZW50LmF0dHIoJ3ByZWxvYWQnLCBvcHRpb25zLnByZWxvYWQpO1xuXHR9O1xuXG5cdHZhciBpbml0U3VidGl0bGVzID0gZnVuY3Rpb24gKCkge1xuXHRcdGVsZW1lbnQuY2hpbGRyZW4oJ3RyYWNrW2tpbmQ9XCJzdWJ0aXRsZXNcIl0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHRcdHZhciBsYW5ndWFnZSA9ICQodGhpcykuYXR0cignc3JjbGFuZycpO1xuXHRcdFx0dmFyIHRpdGxlICAgID0gJCh0aGlzKS5hdHRyKCdsYWJlbCcpO1xuXHRcdFx0dmFyIHNyYyAgICAgID0gJCh0aGlzKS5hdHRyKCdzcmMnKTtcblx0XHRcdGlmICh0aXRsZS5sZW5ndGggPiAwICYmIHNyYy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdHN1YnRpdGxlcy5wdXNoKHtcblx0XHRcdFx0XHR0aXRsZSAgICA6IHRpdGxlLFxuXHRcdFx0XHRcdHNyYyAgICAgIDogc3JjLFxuXHRcdFx0XHRcdGxhbmd1YWdlIDogbGFuZ3VhZ2Vcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH07XG5cblx0dmFyIGluaXRWaWRlbyA9IGZ1bmN0aW9uICgpIHtcblx0XHR2aWRlbyA9IGVsZW1lbnRbIDAgXTtcblx0XHRpZiAodmlkZW8ucmVhZHlTdGF0ZSA+IEhUTUxNZWRpYUVsZW1lbnQuSEFWRV9OT1RISU5HKVxuXHRcdFx0aW5pdFZpZGVvRXZlbnQoKTtcblx0XHRlbHNlXG5cdFx0XHR2aWRlby5vbmxvYWRlZG1ldGFkYXRhID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRpbml0VmlkZW9FdmVudCgpO1xuXHRcdFx0fTtcblx0fTtcblxuXHR2YXIgaW5pdFZpZGVvRXZlbnQgPSBmdW5jdGlvbiAoKSB7XG5cdFx0b3ZlcmxheS5jc3MoJ2xpbmUtaGVpZ2h0JywgdmlkZW8uY2xpZW50SGVpZ2h0ICsgJ3B4Jyk7XG5cdFx0Y29udGFpbmVyLmNzcygnd2lkdGgnLCB2aWRlby5jbGllbnRXaWR0aCArICdweCcpO1xuXG5cdFx0dmlkZW8ub250aW1ldXBkYXRlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0Y29udHJvbHMubW92ZVRpbWVNYXJrZXIoKTtcblx0XHR9O1xuXG5cdFx0Ly8gVGhpcyBpcyBnZW5lcmFsbHkgZm9yIEZpcmVmb3ggb25seVxuXHRcdC8vIGJlY2F1c2UgaXQgc29tZWhvdyByZXNldHMgdHJhY2sgbGlzdFxuXHRcdC8vIGZvciB2aWRlbyBlbGVtZW50IGFmdGVyIERPTSBtYW5pcHVsYXRpb24uXG5cblx0XHRpZiAodmlkZW8udGV4dFRyYWNrcy5sZW5ndGggPT0gMCAmJiBzdWJ0aXRsZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0ZWxlbWVudC5jaGlsZHJlbigndHJhY2tba2luZD1cInN1YnRpdGxlc1wiXScpLnJlbW92ZSgpO1xuXHRcdFx0Zm9yICh2YXIgaSBpbiBzdWJ0aXRsZXMpIHtcblx0XHRcdFx0ZWxlbWVudC5hcHBlbmQoJCgnPHRyYWNrLz4nKS5hdHRyKCdsYWJlbCcsIHN1YnRpdGxlc1sgaSBdLnRpdGxlKS5hdHRyKCdzcmMnLCBzdWJ0aXRsZXNbIGkgXS5zcmMpLmF0dHIoJ3NyY2xhbmcnLCBzdWJ0aXRsZXNbIGkgXS5sYW5ndWFnZSkuYXR0cignaWQnLCBzdWJ0aXRsZXNbIGkgXS5sYW5ndWFnZSkuYXR0cigna2luZCcsICdzdWJ0aXRsZXMnKSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0RnVsbHNjcmVlbi5pbml0KCk7XG5cdFx0Y29udHJvbHMuaW5pdCgpO1xuXHR9O1xuXG5cdHZhciB0b2dnbGVQbGF5ID0gZnVuY3Rpb24gKCkge1xuXHRcdGlmICghdmlkZW8ucGxheWVkIHx8IHZpZGVvLnBhdXNlZCkge1xuXHRcdFx0b3ZlcmxheS5oaWRlKCk7XG5cdFx0XHR2aWRlby5wbGF5KCk7XG5cdFx0XHRjb250cm9scy5wbGF5KCk7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0b3ZlcmxheS5zaG93KCk7XG5cdFx0XHR2aWRlby5wYXVzZSgpO1xuXHRcdFx0Y29udHJvbHMucGF1c2UoKTtcblx0XHR9XG5cdH07XG5cblx0dmFyIHNlY29uZHNUb1RpbWUgPSBmdW5jdGlvbiAoc2Vjb25kcykge1xuXHRcdHZhciBoICAgPSBNYXRoLmZsb29yKHNlY29uZHMgLyAzNjAwKTtcblx0XHR2YXIgbSAgID0gTWF0aC5mbG9vcihzZWNvbmRzICUgMzYwMCAvIDYwKTtcblx0XHR2YXIgcyAgID0gTWF0aC5mbG9vcihzZWNvbmRzICUgMzYwMCAlIDYwKTtcblx0XHR2YXIgb3V0ID0gJyc7XG5cdFx0aWYgKGggPiAwKVxuXHRcdFx0b3V0ID0gaCArICc6Jztcblx0XHRpZiAobSA8IDEwKVxuXHRcdFx0b3V0ICs9ICcwJztcblx0XHRvdXQgKz0gbSArICc6Jztcblx0XHRpZiAocyA8IDEwKVxuXHRcdFx0b3V0ICs9ICcwJztcblx0XHRvdXQgKz0gcztcblx0XHRyZXR1cm4gb3V0O1xuXHR9O1xuXG5cdHZhciBzZWVrID0gZnVuY3Rpb24gKHRpbWUpIHtcblx0XHR2aWRlby5jdXJyZW50VGltZSA9IHRpbWU7XG5cdH07XG5cblx0aW5pdCgpO1xuXHRyZXR1cm4gdGhpcztcbn07XG5cbndpbmRvdy4kLmZuLmxlUGxheWVyID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0UGxheWVyKCQodGhpcyksIG9wdGlvbnMpO1xuXHR9KTtcbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzb3VyY2UvanMvbGUtcGxheWVyLmVzNi5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gJDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiJFwiXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDdENBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQU9BO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFJQTtBQUxBO0FBdkJBO0FBQ0E7QUFpQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFGQTs7QUFLQTtBQUNBOzs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQVRBO0FBV0E7QUFDQTtBQVpBO0FBY0E7QUFDQTtBQWZBO0FBaUJBO0FBQ0E7QUFsQkE7QUFvQkE7QUFDQTtBQXJCQTtBQXVCQTtBQUNBO0FBeEJBO0FBMEJBO0FBQ0E7QUEzQkE7QUE2QkE7QUFDQTtBQTlCQTtBQWdDQTtBQUNBO0FBakNBO0FBbUNBO0FBbkNBOzs7O0FBVkE7QUEvQ0E7QUFDQTtBQWdHQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUZBOztBQUtBO0FBQ0E7Ozs7QUFOQTtBQWpHQTtBQUNBO0FBMEdBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFSQTtBQUNBO0FBRkE7O0FBa0NBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUdBO0FBQ0E7QUFDQTtBQURBOzs7O0FBTUE7OztBQUdBO0FBQ0E7Ozs7QUFqREE7QUFDQTtBQUNBO0FBREE7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBU0E7Ozs7QUE5QkE7QUEzR0E7QUFDQTtBQTJLQTs7O0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFEQTs7QUFGQTtBQUNBO0FBRkE7QUFBQTtBQUNBO0FBV0E7OztBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFFQTs7QUFGQTtBQUNBO0FBRkE7O0FBTUE7QUFDQTs7OztBQVBBO0FBQUE7QUFDQTtBQVVBOzs7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBQ0E7QUFLQTs7O0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFEQTs7QUFGQTtBQUNBO0FBRkE7QUFBQTtBQUNBO0FBUUE7OztBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBREE7O0FBRkE7QUFDQTtBQUZBOztBQVFBO0FBQ0E7Ozs7QUFHQTtBQUNBOzs7O0FBYkE7QUFBQTtBQUNBO0FBZ0JBO0FBQ0E7OztBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQWJBO0FBQ0E7QUFGQTs7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7Ozs7QUFVQTtBQUNBO0FBQ0E7Ozs7QUFHQTtBQUNBOzs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7Ozs7QUF0Q0E7QUFuT0E7QUFDQTtBQW1SQTs7O0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFGQTtBQUFBO0FBQ0E7QUFGQTs7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7Ozs7QUFNQTtBQUNBO0FBQ0E7Ozs7QUFwQkE7QUFBQTtBQUNBO0FBdUJBOzs7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUZBO0FBQUE7QUFDQTtBQUZBOztBQXVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQURBOzs7O0FBTUE7QUFDQTtBQUNBOzs7O0FBeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7Ozs7QUFaQTtBQUFBO0FBQ0E7QUFxQ0E7QUFDQTs7O0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7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