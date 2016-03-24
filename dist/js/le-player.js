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

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

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
	    var C_SOURCES = 'sources';
	    var C_SUBTITLE = 'subtitle';
	    var C_SUBTITLES = 'subtitles';
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
	        controls: [{
	            element: null,
	            controls: ['play', 'volume', 'divider', 'timeline', 'divider', 'fullscreen']
	        }, {
	            element: null,
	            controls: ['rate', 'divider', 'backward', 'divider', 'sources', 'divider', 'subtitles', 'divider', 'download']
	        }]
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
	                    case C_SOURCES:
	                        return new SourceControl();

	                    case C_SUBTITLE:
	                    case C_SUBTITLES:
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

	            this.icon = (0, _jquery2.default)('<div />').addClass('control-icon').append((0, _jquery2.default)('<i />').addClass('fa ' + iconClass));
	            this.listElement = (0, _jquery2.default)('<div/>').addClass('control-inner');
	            this.element = (0, _jquery2.default)('<div />').addClass('control control-container').append(this.icon).append(this.listElement);
	            this._index = 0;
	            this.list = [];
	        }

	        _createClass(ControlContainer, [{
	            key: 'addItem',
	            value: function addItem(text, index) {
	                index = index || this._index;
	                var item = (0, _jquery2.default)('<div />').addClass('inner-item').data('index', index).html(text).click(function () {
	                    return this.onItemClick((0, _jquery2.default)(this).data('index'));
	                });
	                this._index++;
	                this.list.push(item);
	                this.listElement.append(item);

	                return item;
	            }
	        }, {
	            key: 'onItemClick',
	            value: function onItemClick(index) {
	                this.active = index;
	            }
	        }, {
	            key: 'active',
	            set: function set(index) {
	                for (var i in this.list) {
	                    if (this.list[i].data('index') == index) {
	                        this.list[i].addClass('active');
	                        this.icon.html(this.list[i].html);
	                    } else this.list[i].removeClass('active');
	                }
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
	                toggleFullscreen();
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

	        return PlayControl;
	    }(Control);

	    var RateControl = function () {
	        function RateControl() {
	            var _this6 = this;

	            _classCallCheck(this, RateControl);

	            this.down = new Control('rate-down', 'fa-backward');
	            this.up = new Control('rate-up', 'fa-forward');
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

	            var _this7 = _possibleConstructorReturn(this, Object.getPrototypeOf(SourceControl).call(this, 'fa-bullseye'));

	            if (sources.length > 1) {
	                for (var i in sources) {
	                    _this7.addItem(sources[i].title);
	                }
	            }
	            return _this7;
	        }

	        _createClass(SourceControl, [{
	            key: 'onItemClick',
	            value: function onItemClick(index) {
	                _get(Object.getPrototypeOf(SourceControl.prototype), 'onItemClick', this).call(this, index);
	                setSource(index);
	            }
	        }]);

	        return SourceControl;
	    }(ControlContainer);

	    var SubtitleControl = function (_ControlContainer2) {
	        _inherits(SubtitleControl, _ControlContainer2);

	        function SubtitleControl() {
	            _classCallCheck(this, SubtitleControl);

	            var _this8 = _possibleConstructorReturn(this, Object.getPrototypeOf(SubtitleControl).call(this, 'fa-commenting-o'));

	            if (subtitles.length > 0) {
	                for (var i in subtitles) {
	                    _this8.addItem(subtitles[i].title, subtitles[i].language).data('src', subtitles[i].src);
	                }
	            }
	            switchTrack('');
	            return _this8;
	        }

	        _createClass(SubtitleControl, [{
	            key: 'onItemClick',
	            value: function onItemClick(index) {
	                _get(Object.getPrototypeOf(SubtitleControl.prototype), 'onItemClick', this).call(this, index);
	                switchTrack(index);
	            }
	        }]);

	        return SubtitleControl;
	    }(ControlContainer);

	    var TimelineControl = function () {
	        function TimelineControl() {
	            _classCallCheck(this, TimelineControl);

	            this.current = new ControlText('time-current');
	            this.total = new ControlText('time-total');

	            this.marker = (0, _jquery2.default)('<div />').addClass('time-marker');
	            this.markerShadow = (0, _jquery2.default)('<div />').addClass('time-marker shadow').append().hide();
	            this.markerShadowTime = (0, _jquery2.default)('<div />').addClass('time');
	            this.played = (0, _jquery2.default)('<div />').addClass('time-played');
	            this.line = (0, _jquery2.default)('<div />').addClass('timeline').click(function (e) {
	                seek(video.duration * this.getPosition(e.pageX));
	            }).mousemove(function (e) {
	                var p = this.getPosition(e.pageX);
	                if (p > 0 && p < 1) {
	                    this.markerShadow.show();
	                    this.markerShadow.css('left', p * 100 + '%');
	                    this.markerShadowTime.html(secondsToTime(video.duration * p));
	                } else this.markerShadow.hide();
	            }).mouseleave(function () {
	                this.markerShadow.hide();
	            });

	            this.element = (0, _jquery2.default)('<div />').addClass('timeline-container').append((0, _jquery2.default)('<div />').addClass('timeline-subcontainer').append(this.current).append(this.line).append(this.total));
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
	            _classCallCheck(this, VolumeControl);

	            this.drag = false;
	            this.range = { bottom: 0, height: 0, top: 0 };

	            this.active = (0, _jquery2.default)('<div/>').addClass('volume-active');
	            this.marker = (0, _jquery2.default)('<div/>').addClass('volume-marker').on('mousedown', function (e) {
	                this.drag = true;
	                this.range.height = this.line.height();
	                this.range.top = this.line.offset().top;
	                this.range.bottom = this.range.top + this.range.height;
	            });
	            this.icon = (0, _jquery2.default)('<div/>').addClass('control-icon').append((0, _jquery2.default)('<i />').addClass('fa fa-volume-down')).click(function () {
	                this.toggleMuted();
	            });
	            this.line = (0, _jquery2.default)('<div/>').addClass('volume-line').append(this.active).append(this.marker).click(function (e) {
	                this.range.height = this.line.height();
	                this.range.top = this.line.offset().top;
	                this.range.bottom = this.range.top + this.range.height;
	                if (e.pageY >= range.top && e.pageY <= this.range.bottom) {
	                    this.value = (this.range.bottom - e.pageY) / this.range.height;
	                }
	            });

	            this.element = (0, _jquery2.default)('<div />').addClass('control control-container').append(this.icon).append((0, _jquery2.default)('<div />').addClass('control-inner volume-slider').append(this.line));

	            (0, _jquery2.default)(document).on('mousemove', function (e) {
	                if (this.drag && e.pageY >= this.range.top && e.pageY <= this.range.bottom) {
	                    this.value = (range.bottom - e.pageY) / range.height;
	                }
	            }).on('mouseup', function (e) {
	                this.drag = false;
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
	            key: 'value',
	            set: function set(value) {
	                var icon = this.icon.children('.fa').eq(0);
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
	        function ControlCollection(active) {
	            _classCallCheck(this, ControlCollection);

	            this.items = [];
	            this.active = active || false;
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
	            key: 'init',
	            value: function init() {
	                this.showRate();
	                this.volume = Cookie.get('volume', 0.4);
	                this.initTimeline();
	            }
	        }, {
	            key: 'initTimeline',
	            value: function initTimeline() {
	                if (this.has(C_TIMELINE)) {
	                    if (this.items.timeline.element.width() < 20) this.items.timeline.element.hide();
	                }
	            }
	        }, {
	            key: 'showRate',
	            value: function showRate() {
	                if (this.has(C_RATE)) this.items.rate.show();
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
	                common: new ControlCollection(),
	                mini: new ControlCollection(),
	                fullscreen: new ControlCollection()
	            };
	            this.collections.common.active = true;
	        }

	        _createClass(Controls, [{
	            key: 'init',
	            value: function init() {
	                for (var i in this.collections) {
	                    this.collections[i].init();
	                }
	            }
	        }]);

	        return Controls;
	    }();

	    var sources = [];
	    var subtitles = [];
	    var volume = 0.5;
	    var video = null;
	    var controls = {
	        collections: {
	            common: new ControlCollection(),
	            mini: new ControlCollection(),
	            fullscreen: new ControlCollection()
	        },
	        init: function init() {
	            for (var i in this.collections) {
	                this.collections[i].init();
	            }
	        },
	        showRate: function showRate() {
	            for (var i in this.collections) {
	                if (this.collections[i].active) this.collections[i].init();
	            }
	        }
	    };

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
	        initHotKeys();

	        setSource(0);
	    };

	    var initControls = function initControls() {
	        for (var i in options.controls) {
	            var el = options.controls[i].element;
	            var hasTimeline = false;
	            if (el == null) el = (0, _jquery2.default)('<div />').addClass('leplayer-controls');
	            if (el.length == 0) {
	                console.warn('Error creating controls.');
	            } else {
	                for (var k in options.controls[i].controls) {
	                    var controlName = options.controls[i].controls[k];

	                    if (controlName == C_DIVIDER || !controls.common.has(controlName)) {
	                        // Create control only if divider or does not exist yet.
	                        var c = controls.common.add(controlName);
	                        if (c != null) {
	                            el.append(c);
	                            if (controlName == C_TIMELINE) hasTimeline = true;
	                        } else console.warn('Cannot create ' + controlName + ' control.');
	                    }
	                }
	                if (!hasTimeline) el.css('width', '1px');
	                el.find('.divider+.divider').remove();
	                container.append(el);
	            }
	        }
	        video.playbackRate = Cookie.get('rate', 1);
	        controls.common.init();
	    };

	    var initDom = function initDom() {

	        overlay = (0, _jquery2.default)('<div />').addClass('play-overlay');
	        var videoContainer = (0, _jquery2.default)('<div />').addClass('leplayer-video').append(overlay);
	        container = (0, _jquery2.default)('<div />').addClass('leplayer-container').append(videoContainer).css('width', element.width() + 'px');

	        element.before(container);
	        videoContainer.append(element);
	        video = element[0];
	        video.addEventListener('loadedmetadata', function (e) {
	            overlay.css('line-height', e.target.clientHeight + 'px').html('<i class="fa fa-play"></i>');
	            container.css('width', e.target.clientWidth + 'px');
	            if (typeof controls.time != 'undefined') controls.time.total.html(secondsToTime(video.duration));
	        });
	        video.ontimeupdate = function () {
	            controls.time.move();
	        };
	        overlay.click(function () {
	            togglePlay();
	        });
	    };

	    var initHotKeys = function initHotKeys() {
	        // Space.
	        element.keypress(function (e) {
	            if (e.charCode == 32) togglePlay();
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

	        // This is generally for Firefox only
	        // because it somehow resets track list
	        // for video element after DOM manipulation.

	        if (video.textTracks.length == 0 && subtitles.length > 0) {
	            element.children('track[kind="subtitles"]').remove();
	            for (var i in subtitles) {
	                element.append((0, _jquery2.default)('<track/>').attr('label', subtitles[i].title).attr('src', subtitles[i].src).attr('srclang', subtitles[i].language).attr('id', subtitles[i].language).attr('kind', 'subtitles'));
	            }
	        }
	    };

	    var togglePlay = function togglePlay() {
	        if (!video.played || video.paused) {
	            overlay.hide();
	            video.play();
	            if (typeof controls.play != 'undefined') controls.play.children('.fa').removeClass('fa-play').addClass('fa-pause');
	        } else {
	            overlay.show();
	            video.pause();
	            if (typeof controls.play != 'undefined') controls.play.children('.fa').removeClass('fa-pause').addClass('fa-play');
	        }
	    };

	    var toggleFullscreen = function toggleFullscreen() {
	        if (video.requestFullScreen) video.requestFullScreen();else if (video.webkitRequestFullScreen) video.webkitRequestFullScreen();else if (video.mozRequestFullScreen) video.mozRequestFullScreen();else console.warn('Cannot toggle fullscreen.');
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

	    var setSource = function setSource(index) {
	        if (typeof sources[index] != 'undefined') {
	            element.attr('src', sources[index].src);

	            if (typeof controls.sources != 'undefined') {
	                controls.sources.setActive(index);
	            }

	            if (typeof controls.download != 'undefined') {
	                controls.download.attr('href', sources[index].src).attr('download', sources[index].src);
	            }
	        }
	    };

	    var switchTrack = function switchTrack(language) {
	        if (video.textTracks.length > 0) {
	            for (var i = 0; i < video.textTracks.length; i++) {
	                if (video.textTracks[i].language == language) video.textTracks[i].mode = 'showing';else video.textTracks[i].mode = 'hidden';
	            }
	        }
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