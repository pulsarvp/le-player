/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(76);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _Control = __webpack_require__(3);
	
	var _Control2 = _interopRequireDefault(_Control);
	
	var _Component2 = __webpack_require__(4);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	var _PlayButton = __webpack_require__(6);
	
	var _PlayButton2 = _interopRequireDefault(_PlayButton);
	
	var _SplashIcon = __webpack_require__(9);
	
	var _SplashIcon2 = _interopRequireDefault(_SplashIcon);
	
	var _Icon = __webpack_require__(5);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _Time = __webpack_require__(10);
	
	var _Time2 = _interopRequireDefault(_Time);
	
	var _ControlCollection = __webpack_require__(11);
	
	var _ControlCollection2 = _interopRequireDefault(_ControlCollection);
	
	var _Sections = __webpack_require__(12);
	
	var _Sections2 = _interopRequireDefault(_Sections);
	
	var _ErrorDisplay = __webpack_require__(13);
	
	var _ErrorDisplay2 = _interopRequireDefault(_ErrorDisplay);
	
	var _Poster = __webpack_require__(14);
	
	var _Poster2 = _interopRequireDefault(_Poster);
	
	var _FullscreenApi = __webpack_require__(15);
	
	var _FullscreenApi2 = _interopRequireDefault(_FullscreenApi);
	
	var _utils = __webpack_require__(7);
	
	var _browser = __webpack_require__(8);
	
	var _cookie = __webpack_require__(16);
	
	var _cookie2 = _interopRequireDefault(_cookie);
	
	var _MediaError = __webpack_require__(17);
	
	var _MediaError2 = _interopRequireDefault(_MediaError);
	
	__webpack_require__(18);
	
	__webpack_require__(19);
	
	__webpack_require__(21);
	
	__webpack_require__(25);
	
	__webpack_require__(27);
	
	__webpack_require__(28);
	
	__webpack_require__(29);
	
	__webpack_require__(30);
	
	__webpack_require__(32);
	
	__webpack_require__(33);
	
	__webpack_require__(34);
	
	__webpack_require__(35);
	
	__webpack_require__(36);
	
	__webpack_require__(38);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Register common controls
	
	
	_Control2.default.registerControl('divider', function () {
		return {
			element: (0, _jquery2.default)('<div/>').addClass('divider')
		};
	});
	
	/**
	 * Return array with excluded dist's items from source array
	 *
	 * @access private
	 * @param {Array} source
	 * @param {Array} dist
	 * @return {Array}
	 */
	function excludeArray(source, dist) {
		var result = [].concat(source);
		dist.forEach(function (item) {
			var index = result.indexOf(item);
			if (index > -1) {
				result.splice(index, 1);
				return;
			}
		});
	
		return result;
	}
	
	var defaultOptions = {
		entity: 'Html5',
		autoplay: false,
		height: 'auto',
		loop: false,
		muted: false,
		preload: 'metadata',
		poster: null,
		svgPath: '',
		innactivityTimeout: 5000,
		rate: {
			step: 0.25,
			min: 0.5,
			max: 4.0,
			default: 1
		},
		playback: {
			step: {
				short: 5,
				medium: 10,
				long: 30
			}
		},
		controls: {
			common: [['play', 'volume', 'divider', 'timeline', 'divider', 'section', 'divider', 'fullscreen'], ['rate', 'divider', 'backward', 'divider', 'source', 'divider', 'subtitle', 'divider', 'download', 'divider', 'keybinding info']],
			fullscreen: [['play', 'volume', 'divider', 'timeline', 'divider', 'rate', 'divider', 'keybinding info', 'divider', 'backward', 'divider', 'source', 'divider', 'subtitle', 'divider', 'download', 'divider', 'section', 'divider', 'fullscreen']],
			mini: [['play', 'volume', 'divider', 'fullscreen', 'divider', 'timeinfo']],
			'common:android': [['play', 'timeline', 'fullscreen'], ['rate', 'source', 'section']],
			'fullscreen:mobile': [['play', 'timeline', 'fullscreen'], ['rate', 'source', 'section']],
			'common:ios': [['play', 'rate', 'timeline', 'source']]
		},
		controlsOptions: {
	
			common: {
				align: ['justify', 'left']
				// mobile : true
			},
			fullscreen: {
				align: 'justify'
			},
			'common:android': {
				align: ['justify', 'right']
			},
	
			'fullscreen:mobile': {
				align: ['justify', 'right']
			}
		},
		volume: {
			default: 0.4,
			mutelimit: 0.05,
			step: 0.1
		},
		keyBinding: [{
			key: 32,
			info: ['Space'],
			description: 'Начать проигрывание / поставить на паузу',
			fn: function fn(player) {
				player.video.togglePlay();
			}
		}, {
			key: 37,
			info: ['←'],
			description: '\u041F\u0435\u0440\u0435\u043C\u043E\u0442\u0430\u0442\u044C \u043D\u0430 10 \u0441\u0435\u043A\u0443\u043D\u0434 \u043D\u0430\u0437\u0430\u0434',
			fn: function fn(player) {
				player.video.currentTime -= player.options.playback.step.medium;
				player.splashIcon.show('undo');
			}
		}, {
			key: 39,
			info: ['→'],
			description: '\u041F\u0435\u0440\u0435\u043C\u043E\u0442\u0430\u0442\u044C \u043D\u0430 10 \u0441\u0435\u043A\u0443\u043D\u0434 \u0432\u043F\u0435\u0440\u0451\u0434',
			fn: function fn(player) {
				player.video.currentTime += player.options.playback.step.medium;
				player.splashIcon.show('redo');
			}
		}, {
			shiftKey: true,
			info: ['Shift', '←'],
			description: 'Перейти на предыдущую секцию',
			key: 37,
			fn: function fn(player) {
				if (player.sections == null) {
					return;
				}
				player.sections.prev();
			}
		}, {
			shiftKey: true,
			key: 39,
			info: ['Shift', '→'],
			description: 'Перейти на следующую секцию',
			fn: function fn(player) {
				if (player.sections == null) {
					return;
				}
				player.sections.next();
			}
		}, {
			key: 38,
			info: ['↑'],
			description: 'Увеличить громкость',
			fn: function fn(player) {
				player.video.volume += player.options.volume.step;
	
				player.splashIcon.show(player.calcVolumeIcon(player.video.volume));
			}
		}, {
			key: 40,
			info: ['↓'],
			description: 'Уменьшить громкость',
			fn: function fn(player) {
				player.video.volume -= player.options.volume.step;
	
				player.splashIcon.show(player.calcVolumeIcon(player.video.volume));
			}
		}, {
			key: 70,
			info: ['f'],
			description: 'Открыть/закрыть полноэкраный режим',
			fn: function fn(player) {
				player.toggleFullscreen();
			}
		}],
		plugins: {
			miniplayer: {}
		},
		onPlayerInited: _utils.noop
	};
	
	/**
	 * @class Player
	 * @extends Component
	 * @param {jQuery} element Element when player will init
	 * @param {Object} [options]
	 * @param {Boolean} [options.autoplay=false]
	 * When present, the video will automatically start playing as soon as it can do so without stopping.
	 * @param {String|Number} [options.height='auto'] Height of video container
	 * @param {String} [options.width] Width of video container
	 * @param {Boolean} [options.loop=false]
	 * When present, it specifies that the video will start over again, every time it is finished.
	 * @param {Boolean} [options.muted=false]
	 * When present, it specifies that the audio output of the video should be muted.
	 * @param {String} [options.preload='metadata'] Can be ('auto'|'metadata'|'none')
	 * @param {String} [options.poster] Path to poster of video
	 * @param {String} [options.svgPath] Path to svg sprite for icons
	 * @param {Object} [options.rate] Rate options
	 * @param {Number} [options.rate.step=0.25] Step of increase/decrease by rate control
	 * @param {Number} [options.rate.min=0.5] Min of rate
	 * @param {Number} [options.rate.max=4.0] Max of rate
	 * @param {Number} [options.rate.default=1]
	 * @param {Object} [options.playback] Playback options
	 * @param {Object} [options.playback.step]
	 * @param {Nubmer} [options.playback.step.short=5]
	 * @param {Nubmer} [options.playback.step.medium=30]
	 * @param {Nubmer} [options.playback.step.long=60]
	 * @param {Obejct} [options.controls] Object of controls
	 * @param {String[]} [options.controls.common] Array of controls for default view
	 * @param {String[]} [options.controls.fullscreen] Array of control for fullsreen view
	 * @param {String[]} [options.controls.mini] Array of control for miniplayer
	 * @param {Object} [options.excludeControls] Object of exclude controls. Structure is the same as that of options.controls
	 * @param {Object} [options.volume] Volume's options
	 * @param {Number} [options.volume.default=0.4] Default volume
	 * @param {Number} [options.volume.mutelimit=0.05] Delta when volume is muted
	 * @param {Number} [options.volume.step=0.05]
	 * @param {Object[]} [options.keybinding]
	 * Object with keybinding options, when key it's name of key binding, and value it's key binding settings
	 * @param {Number} [options.keybinding[].key] Code of key binding (for example 32 it's space)
	 * @param {String[]} [options.keybinding[].info] Array of keystrokes order
	 * @param {String} options.keybinding[].description] Description of key binding
	 * @param {Function} options.keybinding[].fn] Callback
	 * @param {Object|Boolean} [options.miniplayer=false]
	 * @param {String} [options.miniplayer.width] Width of miniplayer container
	 * @param {String} [options.miniplayer.width] MiniPlayer's width
	 * @param {String} [options.sectionContainer] Selector for sections
	 * @param {Object} [options.plugins] Keys of objects are name of plugin, value - plugin options
	 * @param {String|Object} [options.data] Url or JSON with data for player
	 * @param {Array} [options.data.sections] Sections array
	 */
	
	var Player = function (_Component) {
		_inherits(Player, _Component);
	
		function Player(element, options) {
			_classCallCheck(this, Player);
	
			options.createElement = false;
	
			var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, null, options));
	
			_this._element = element;
	
			/**
	   * DOM container to hold inner of player
	   *
	   * @memberof! Player#
	   * @type {jQuery}
	   */
			_this.innerElement = (0, _utils.createEl)('div');
	
			// Users options
			_this._userOptions = options;
			_this._initOptions();
	
			if (_this.options.svgPath === '') {
				Player._loadSVGSprite(Player.defaultSprite);
			}
	
			_this._view = 'common';
	
			/**
	   * DOM container to hold all player
	   *
	   * @memberof! Player#
	   * @type {jQuery}
	   */
			_this.element = _this.createElement();
	
			_this.loadEntity(_this.options.entity, { ctx: element });
			/**
	   * Video html5 component
	   *
	   * @memberof! Player#
	   * @type {Entity}
	   */
			_this.video = _this.entity;
	
			// Create controls
			// TODO: move this action to the createElement
			_this.controls = {};
			_this._initControls();
	
			/**
	   * @access private
	   */
			_this._dblclickTimeout = null;
	
			_this._initSections().then(function (data) {
				/**
	    * Sections init event
	    *
	    * @event Player#sectionsinit
	    * @example
	    * const player = new Player($('#video'), options);
	    * player.on('sectionsinit', (e, data) => cosnole.log(data));
	    *
	    */
				_this.trigger('sectionsinit', data);
			});
			_this._initPlugins();
	
			_this._listenHotKeys();
	
			_this._userActivity = false;
			_this._listenUserActivity();
	
			_this._waitingTimeouts = [];
	
			/* Retrigger {@link Entity} Events */
			[
			/**
	   * durationchange player event
	   *
	   * @event Player#durationchange
	   */
			'durationchange',
	
			/**
	   * progress html5 media event
	   *
	   * @event Player#progress
	   */
			'progress',
	
			/**
	   * dblclick
	   *
	   * @event Player#dbclick
	   */
			'dblclick',
	
			/**
	   * dblclick
	   *
	   * @event Player#dbclick
	   */
			'click',
	
			/**
	   * canplay html5 media event
	   *
	   * @event Player#canplay
	   */
			'canplay',
	
			/**
	   * qualitychange html5
	   *
	   * @event Player#qualitychange
	   */
			'qualitychange',
	
			/**
	   * qualitychange html5
	   *
	   * @event Player#trackschange
	   */
			'trackschange'].forEach(function (eventName) {
				_this.video.on(eventName, function () {
					_this.trigger(eventName);
				});
			});
	
			_this.video.one('play', function () {
				/**
	    * First play event
	    *
	    * @event Player#firstplay
	    */
				_this.trigger('firstplay');
				_this.removeClass('leplayer--virgin');
			});
	
			_this.video.on('timeupdate', function () {
				if (_this.video.currentTime > 0) {
					_this.removeClass('leplayer--virgin');
				}
	
				/**
	    * timeupdate html5 media event
	    *
	    * @event Player#timeupdate
	    */
				_this.trigger('timeupdate', { time: _this.video.currentTime, duration: _this.video.duration });
			});
	
			_this.video.on('loadstart', function () {
				_this.removeClass('leplayer--ended');
	
				_this.error = null;
				/**
	    * loadstart player event
	    *
	    * @event Player#loadstart
	    */
				_this.trigger('loadstart');
			});
	
			_this.video.on('seeking', function () {
				_this._startWaiting();
				/**
	    * seeking html5 media event
	    *
	    * @event Player#seeking
	    */
				_this.trigger('seeking');
			});
	
			_this.video.on('seeked', function () {
				_this._stopWayting();
				/**
	    * seeked html5 media event
	    *
	    * @event Player#seeked
	    */
				_this.trigger('seeked');
			});
	
			_this.video.on('volumechange', function () {
				/**
	    * volumechange html5 media event
	    *
	    * @event Player#volumechange
	    */
				_this.trigger('volumechange', { volume: _this.video.volume });
			});
	
			_this.video.on('posterchange', function (e, data) {
				var url = data.url;
				_this.poster.url = url;
				_this.trigger('posterchange');
			});
	
			_this.video.on('play', function (e) {
				_this.removeClass('leplayer--ended');
				_this.removeClass('leplayer--paused');
				_this.addClass('leplayer--playing');
	
				/**
	    * play html5 media event
	    *
	    * @event Player#play
	    */
				_this.trigger('play');
			});
	
			_this.video.on('pause', function () {
				_this.removeClass('leplayer--playing');
				_this.addClass('leplayer--paused');
	
				/**
	    * pause html5 media event
	    *
	    * @event Player#pause
	    */
				_this.trigger('pause');
			});
	
			_this.video.on('playing', function () {
				_this._stopWayting();
	
				/**
	    * playing html5 media event
	    *
	    * @event Player#playing
	    */
				_this.trigger('playing');
			});
	
			_this.video.on('ratechange', function () {
				/**
	    * rate html5 media event
	    *
	    * @event Player#rate
	    */
				_this.trigger('ratechange', { rate: _this.video.rate });
			});
	
			_this.video.on('ended', function () {
				_this.addClass('leplayer--ended');
	
				if (_this.options.loop) {
					_this.currentTime = 0;
					_this.video.play();
				} else if (!_this.video.paused) {
					_this.video.pause();
				}
	
				/**
	    * ended html5 media event
	    *
	    * @event Player#ended
	    */
				_this.trigger('ended');
			});
	
			_this.video.on('canplaythrough', function () {
				_this._stopWayting();
				/**
	    * canplaythrough html5 media event
	    *
	    * @event Player#canplaythrough
	    */
				_this.trigger('canplaythrough');
			});
	
			_this.video.on('waiting', function () {
				_this._startWaiting();
	
				_this.video.one('timeupdate', function () {
					return _this._stopWayting();
				});
	
				/**
	    * waiting html5 media event
	    *
	    * @event Player#waiting
	    */
				_this.trigger('waiting');
			});
	
			_this.video.on('error', function (e, data) {
				_this.error = new _MediaError2.default(data.code);
			});
	
			_this.video.init().then(function () {
				/**
	    * Player init event
	    *
	    * @event Player#inited
	    */
				_this.trigger('inited');
	
				if (_this.options.time) {
					_this.currentTime = _this.options.time;
				}
	
				if (_this.video.src != null && _this.options.autoplay) {
					_this.play();
				}
			});
	
			_this.on('fullscreenchange', _this._onFullscreenChange.bind(_this));
			_this.on('click', _this._onClick.bind(_this));
			_this.on('dblclick', _this._onDbclick.bind(_this));
			_this.on('inited', _this._onInited.bind(_this));
			_this.on('play', _this._onPlay.bind(_this));
			_this.on('pause', _this._onPause.bind(_this));
	
			(0, _jquery2.default)(document).on(_FullscreenApi2.default.fullscreenchange, _this._onEntityFullscrenChange.bind(_this));
			return _this;
		}
	
		_createClass(Player, [{
			key: 'loadEntity',
			value: function loadEntity(name, options) {
				var Entity = Player.getComponent(name);
				this._entity = new Entity(this, options);
			}
	
			/**
	   * Starts playing the video
	   *
	   *
	   * @access public
	   * @example
	   * const player = new Player($("#video"),options);
	   * $('.some-button').on('click', () => player.play());
	   */
	
		}, {
			key: 'play',
			value: function play() {
				return this.video.play();
			}
	
			/**
	   * Pauses the currently playing video
	   *
	   * @access public
	   */
	
		}, {
			key: 'pause',
			value: function pause() {
				return this.video.pause();
			}
	
			/**
	   * Toggle the currently playing video
	   *
	   * @access public
	   */
	
		}, {
			key: 'togglePlay',
			value: function togglePlay() {
				return this.video.togglePlay();
			}
	
			/**
	   * Begin loading the src data
	   *
	   * @access public
	   */
	
		}, {
			key: 'load',
			value: function load() {
				return this.video.load();
			}
	
			/**
	   * On set view callback
	   *
	   * @access public
	   * @param {String} view View name
	   * @returns {Player} this
	   * @example
	   * const player = new Player($('#video'), options);
	   * player.onSetView('mini', () => console.log('Miniplayer yeah!')
	   *     .onSetView('fullscreen', () => console.log('Fullscreen boom!')
	   *     .onSetView('common', () => console.log('Common view - lol');
	   */
	
		}, {
			key: 'onSetView',
			value: function onSetView(view) {
				for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
					args[_key - 1] = arguments[_key];
				}
	
				this.on.apply(this, ['setview.' + view].concat(args));
	
				return this;
			}
	
			/**
	   * Change source and save time, rate
	   *
	   * @access public
	   * @param {Object} quality
	   * @param {String} [quality.title] The name of qualitut e.x SD or HD
	   * @param {String} quality.url
	   */
	
		}, {
			key: 'changeQuality',
			value: function changeQuality(quality) {
				var video = this.video;
				if (quality == null) return;
				var time = this.currentTime;
				var rate = this.rate;
				var isPaused = this.paused;
	
				video.src = quality;
				this.playbackRate = rate;
				this.currentTime = time;
	
				if (isPaused) {
					this.pause();
				} else {
					this.play();
				}
			}
	
			/**
	   * On del view callback
	   *
	   * @access public
	   * @param {String} view View name
	   * @returns {Player} this
	   * @example
	   * const player = new Player($('#video'), options);
	   * player.onDelView('mini', () => console.log('Exit miniplayer')
	   */
	
		}, {
			key: 'onDelView',
			value: function onDelView(view) {
				for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
					args[_key2 - 1] = arguments[_key2];
				}
	
				this.on.apply(this, ['delview.' + view].concat(args));
	
				return this;
			}
	
			/**
	   * Get some data for player
	   *
	   * @access public
	   * @returns {jQuery.promise} Promise
	   */
	
		}, {
			key: 'getData',
			value: function getData() {
				var dfd = new _jquery2.default.Deferred();
	
				if (this._data !== undefined) {
					dfd.resolve(this._data);
					return dfd.promise();
				}
	
				if (typeof this.options.data === 'string') {
					return _jquery2.default.ajax({
						url: this.options.data,
						method: 'GET',
						dataType: 'json'
					}).promise();
				} else if (_typeof(this.options.data) === 'object') {
					dfd.resolve(this.options.data);
					return dfd.promise();
				}
			}
		}, {
			key: 'getSectionData',
			value: function getSectionData() {
				return this.getData().then(function (data) {
					return data.sections;
				});
			}
	
			/**
	   * Request fullscreen
	   *
	   * @access public
	   * @fires Player#fullscreenchange
	   */
	
		}, {
			key: 'requestFullscreen',
			value: function requestFullscreen() {
				var fsApi = _FullscreenApi2.default;
	
				if (fsApi.requestFullscreen) {
					// Call HTML5 Video api requestFullscreen
					this.element[0][fsApi.requestFullscreen]();
	
					/**
	     * fullscreenchange html5 media event
	     *
	     * @event Player#fullscreenchange
	     */
					this.trigger('fullscreenchange', true);
				} else if (this.video.supportsFullScreen()) {
					this.video.enterFullscreen();
				}
			}
	
			/**
	   * Exit fullscreen
	   *
	   * @access public
	   * @fires Player#fullscreenchange
	   */
	
		}, {
			key: 'exitFullscreen',
			value: function exitFullscreen() {
				var fsApi = _FullscreenApi2.default;
	
				if (fsApi.exitFullscreen) {
					document[fsApi.exitFullscreen]();
				} else if (this.video.supportsFullScreen()) {
					this.video.exitFullscreen();
				}
	
				this.trigger('fullscreenchange', false);
			}
	
			/**
	   * Toggle fullscreen
	   *
	   * @access public
	   * @fires Player#fullscreenchange
	   */
	
		}, {
			key: 'toggleFullscreen',
			value: function toggleFullscreen() {
				if (this.view === 'fullscreen') {
					this.exitFullscreen();
				} else {
					this.requestFullscreen();
				}
			}
	
			/**
	   * Get ControlCollection of Player by name (e.x 'common', 'fullscreen')
	   *
	   * @access public
	   * @param {String} name - Name of ControlCollection
	   * @returns {ControlCollection}
	   */
	
		}, {
			key: 'getControls',
			value: function getControls(name) {
				return this.controls[name];
			}
	
			/**
	   * Return the width of player.
	   *
	   * @access public
	   * @returns {Number} Width in px
	   */
	
		}, {
			key: 'getWidth',
			value: function getWidth() {
				return this.element.width();
			}
	
			/**
	   * Complete the sections, by the additional field 'end' in each section
	   *
	   * @access private
	   * @param {Object} sections - Sections
	   * @returns {Object} New sections
	   */
	
		}, {
			key: '_completeSections',
			value: function _completeSections(sections) {
				if (sections == null || sections.length === 0) {
					return;
				}
				var newSections = [].concat(sections);
				for (var i = 0; i < newSections.length; i++) {
					var endSection = void 0;
					if (i < newSections.length - 1) {
						endSection = newSections[i + 1].begin;
					} else {
						endSection = this.video.duration;
					}
					newSections[i].end = endSection;
				}
				return newSections;
			}
	
			/**
	   * Get and set the current playback position in the audio/video (in seconds)
	   * Getter and setter
	   *
	   * @access public
	   * @memberof! Player#
	   * @type {Nubmer}
	   */
	
		}, {
			key: 'createElement',
	
	
			/**
	   * Remove unnecessary attributes, and set some attrs from options (loop, poster etc...). Create main DOM objects
	   *
	   * @override
	   */
			value: function createElement() {
				var options = this.options;
				var element = this._element;
	
				this.element = (0, _utils.createEl)('div');
	
				this.element = this.element.addClass('leplayer').attr('tabindex', 0).css('width', options.width && '100%').css('max-width', options.width);
	
				/**
	    * Error display component.
	    *
	    * @type {ErrorDisplay}
	    * @memberof! Player#
	    */
				this.errorDisplay = new _ErrorDisplay2.default(this);
	
				/**
	    * Play button component.
	    *
	    * @type {PlayButton}
	    * @memberof! Player#
	    */
				this.playButton = new _PlayButton2.default(this);
	
				// TODO: Вынести это в отдельнеый компонент
				this.loader = (0, _jquery2.default)('<div />').addClass('leplayer-loader-container').append(new _Icon2.default(this, {
					iconName: 'refresh',
					className: 'leplayer-loader-container__icon'
				}).element);
	
				/**
	    * Splash icon component.
	    *
	    * @type {SplashIcon}
	    * @memberof! Player#
	    */
				this.splashIcon = new _SplashIcon2.default(this);
	
				this.videoContainer = (0, _utils.createEl)('div', {
					className: 'leplayer-video'
				}).append(this.errorDisplay.element).append(this.playButton.element).append(this.loader).append(this.splashIcon.element);
	
				this.poster = new _Poster2.default(this);
				this.videoContainer.append(this.poster.element);
	
				var lastTimer = new _Time2.default(this, {
					fn: function fn(player) {
						var video = player.video;
						return (0, _utils.secondsToTime)(video.duration - video.currentTime);
					}
				});
	
				if (this.options.videoInfo) {
					console.warn('options.videoInfo is deprecated, please use istead options.description');
				}
	
				this.infoElement = (0, _utils.createEl)('div', {
					className: 'leplayer__info'
				}).append((0, _utils.createEl)('div', {
					className: 'leplayer__title',
					html: this.options.title || ""
				})).append((0, _utils.createEl)('div', {
					className: 'leplayer__video-info',
					html: this.options.description || this.options.videoInfo || ""
				})).append((0, _utils.createEl)('div', {
					className: 'leplayer__last',
					html: '\u0412\u0438\u0434\u0435\u043E \u0437\u0430\u043A\u043E\u043D\u0447\u0438\u0442\u0441\u044F \u0447\u0435\u0440\u0435\u0437 '
				}).append(lastTimer.element));
	
				this.innerElement = (0, _jquery2.default)('<div />').addClass('leplayer__inner').append(this.videoContainer).append(this.infoElement);
	
				this.element = this.element.append(this.innerElement);
	
				this.addClass('leplayer--paused');
				this.addClass('leplayer--virgin');
	
				if (_browser.IS_IPHONE) {
					this.addClass('leplayer--iphone');
				}
	
				if (_browser.IS_ANDROID) {
					this.addClass('leplayer--android');
				}
	
				if (_browser.IS_MOBILE) {
					this.addClass('leplayer--mobile');
				}
	
				if (options.sectionContainer) {
					this.sectionsContainer = (0, _jquery2.default)(options.sectionContainer);
				}
	
				element.before(this.element);
				this.videoContainer.append(element);
	
				return this.element;
			}
	
			/**
	   * Get options from video's attribute ( height, width, poster, preload etc...)
	   * Get source video from src attr or <source> element with data attr 'data-quality'
	   * Also get sources for different quality from <source> element with data attr 'data-quality'
	   *
	   * @access private
	   * @returns {Object} options
	   */
	
		}, {
			key: '_optionsFromElement',
			value: function _optionsFromElement() {
				// Copy video attrs to the opitons
				var element = this._element;
				if (element == null || element.length === 0) {
					return {};
				}
	
				var attrOptions = ['height', 'width', 'poster', 'autoplay', 'loop', 'muted', 'preload'].reduce(function (obj, item) {
					var val = element.attr(item);
					if (val != null) {
						obj[item] = element.attr(item);
					}
					return obj;
				}, {});
	
				attrOptions.sources = [];
	
				// Src it is main source, that will be load
				if (element.attr('src')) {
					attrOptions.src = {
						url: element.attr('src'),
						title: element.attr('data-quality') || element.attr('title') || 'default'
					};
				}
	
				// Copy sources from HTML5 source element with data-quality attr
				// If data-quality attr does not exist - no
				element.find('source').each(function (i, item) {
					item = (0, _jquery2.default)(item);
					if (!item.attr('data-quality')) {
						return;
					}
					attrOptions.sources = attrOptions.sources.concat({
						url: item.attr('src'),
						title: item.attr('data-quality') || item.attr('title') || 'default'
					});
				});
	
				return attrOptions;
			}
	
			/**
	   * Return a name of icon. If less then 0.1 return volume-off,
	   * if less then 0.5 return volume down, else return volume-up
	   *
	   * @access private
	   * @param {Number} value Volume value
	   * @returns {String} Icon name
	   */
	
		}, {
			key: 'calcVolumeIcon',
			value: function calcVolumeIcon(value) {
				if (value == null) {
					value = this.video.volume;
				}
				var volume = value;
	
				if (volume < this.options.volume.mutelimit) {
					return 'volume-off';
				} else if (value < 0.5) {
					return 'volume-down';
				} else {
					return 'volume-up';
				}
			}
		}, {
			key: 'toggleSections',
			value: function toggleSections(flag) {
				if (this.sections) {
					this.sections.visible = flag;
				}
				if (this.outsideSections) {
					this.outsideSections.visible = flag;
				}
			}
	
			/**
	   * Merge defaultOptions, presetOptions with attrOptions and user's options;
	   *
	   * And complement two objects: controls and excludeControls
	   *
	   * @access private
	   */
	
		}, {
			key: '_initOptions',
			value: function _initOptions() {
				var _this2 = this;
	
				var attrOptions = this._optionsFromElement();
				var presetOptions = {};
	
				if (this._userOptions.preset && Player.getPreset(this._userOptions.preset)) {
					presetOptions = Player.getPreset(this._userOptions.preset).options;
				}
	
				// Merge default options + preset options + video attributts+ user options
				this.options = _jquery2.default.extend(true, {}, defaultOptions, presetOptions, attrOptions, this._userOptions);
	
				if (this.options.sources && !Array.isArray(this.options.sources)) {
					this.options.sources = [this.options.sources];
				}
	
				if (typeof this.options.src === 'string') {
					this.options.src = { url: this.options.src };
				}
	
				if (this.options.src == null && this.options.sources.length > 0) {
					this.options.src = this.options.sources[0];
				}
	
				// Generate android:fullscreen, android:common and etc controls options
	
	
				// Merge correctly controls, without deep merge
				this.options.controls = _jquery2.default.extend({}, defaultOptions.controls, presetOptions.controls, this._userOptions.controls);
	
				// exclude controls option
				// TODO(adinvadim):
				// Set depreceted flag for this option;
	
				var _loop = function _loop(name) {
					if (!_this2.options.excludeControls.hasOwnProperty(name)) return {
							v: void 0
						};
					var controlCollection = _this2.options.excludeControls[name];
					controlCollection.forEach(function (row, index) {
						if (_this2.options.controls[name] && _this2.options.controls[name][index]) {
							_this2.options.controls[name][index] = excludeArray(_this2.options.controls[name][index], row);
						}
					});
				};
	
				for (var name in this.options.excludeControls) {
					var _ret = _loop(name);
	
					if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
				}
	
				if (this.options.preset && Player.getPreset(this.options.preset)) {
					Player.getPreset(this.options.preset).initOptions();
				}
			}
	
			/**
	   * Create and init all controls
	   *
	   * @access private
	   */
	
		}, {
			key: '_initControls',
			value: function _initControls() {
				var _arr = ['common', 'fullscreen'];
	
				for (var _i = 0; _i < _arr.length; _i++) {
					var name = _arr[_i];
					if (!this.options.controls.hasOwnProperty(name)) return;
					var controlCollection = new _ControlCollection2.default(this, { name: name });
	
					this.element.append(controlCollection.element);
				}
	
				if (this.controls.common != null) {
					this.controls.common.active = true;
				}
			}
		}, {
			key: '_listenHotKeys',
			value: function _listenHotKeys() {
				var _this3 = this;
	
				var isKeyBinding = function isKeyBinding(e, binding) {
					return (e.which === binding.key || e.key === binding.key) && !!binding.shiftKey === e.shiftKey && !!binding.ctrlKey === e.ctrlKey;
				};
	
				this.element.on('keydown.leplayer.hotkey', function (e) {
					_this3.options.keyBinding.forEach(function (binding) {
	
						if (isKeyBinding(e, binding)) {
							e.preventDefault();
							binding.fn(_this3);
							return false;
						}
					});
				});
			}
	
			/**
	   * Init sections, get ajax or json with sections data and create Sections object and added them to the DOM
	   *
	   * @access private
	   * @returns {jqPromise} jQuery promise
	   */
	
		}, {
			key: '_initSections',
			value: function _initSections() {
				var _this4 = this;
	
				var dfd = _jquery2.default.Deferred();
				if (this.options.data == null) {
					dfd.reject(null);
				} else {
					this.getSectionData().done(function (sections) {
						sections = [].concat(_toConsumableArray(sections));
	
						var isSectionOutside = _this4.sectionsContainer && _this4.sectionsContainer.length > 0;
	
						if (sections == null || sections.length === 0) {
							dfd.reject(null);
							return;
						}
	
						sections = _this4._completeSections(sections);
	
						_this4.sections = new _Sections2.default(_this4, {
							items: sections,
							fullscreenOnly: isSectionOutside,
							hideScroll: true
						});
	
						_this4.innerElement.append(_this4.sections.element);
	
						if (isSectionOutside) {
							_this4.outsideSections = new _Sections2.default(_this4, {
								items: sections
							});
							_this4.sectionsContainer.append(_this4.outsideSections.element);
						}
						dfd.resolve({ items: sections });
					});
				}
	
				return dfd.promise();
			}
	
			/**
	   * Function, than init all plugins from player options.
	   * If plugin doesn't exist throw an error
	   *
	   * @access private
	   * @returns {Player} this
	   */
	
		}, {
			key: '_initPlugins',
			value: function _initPlugins() {
				if (this.options.plugins) {
					for (var name in this.options.plugins) {
						if (!this.options.plugins.hasOwnProperty(name)) return;
						var pluginOptions = this.options.plugins[name];
						if (this[name]) {
							if (pluginOptions) {
								this[name](pluginOptions);
							}
						} else {
							console.error('Plugin \'' + name + '\' doesn\'t exist');
						}
					}
				}
	
				return this;
			}
	
			/**
	   * @access private
	   */
	
		}, {
			key: '_listenUserActivity',
			value: function _listenUserActivity() {
				var _this5 = this;
	
				var mouseInProgress = void 0;
				var lastMoveX = void 0;
				var lastMoveY = void 0;
	
				var onMouseMove = function onMouseMove(e) {
					if (e.screenX !== lastMoveX || e.screenY !== lastMoveY) {
						lastMoveX = e.screenX;
						lastMoveY = e.screenY;
						_this5._userActivity = true;
					}
				};
	
				var onMouseDown = function onMouseDown(e) {
					_this5._userActivity = true;
	
					// While user is pressing mouse or touch, dispatch user activity
					clearInterval(mouseInProgress);
	
					mouseInProgress = setInterval(function () {
						_this5._userActivity = true;
					}, 250);
				};
	
				var onMouseUp = function onMouseUp(e) {
					_this5._userActivity = true;
					clearInterval(mouseInProgress);
				};
	
				this.element.on('mousemove', onMouseMove);
	
				this.element.on('mousedown', onMouseDown);
	
				this.element.on('mouseup', onMouseUp);
	
				this.element.on('keydown', function (e) {
					return _this5._userActivity = true;
				});
				this.element.on('keyup', function (e) {
					return _this5._userActivity = true;
				});
	
				// See http://ejohn.org/blog/learning-from-twitter/
				var inactivityTimeout = void 0;
				var delay = this.options.innactivityTimeout;
				setInterval(function () {
					if (_this5._userActivity) {
	
						// Reset user activuty tracker
						_this5._userActivity = false;
	
						_this5.userActive = true;
	
						clearTimeout(inactivityTimeout);
	
						if (delay > 0) {
	
							inactivityTimeout = setTimeout(function () {
								if (!_this5._userActivity) {
									_this5.userActive = false;
								}
							}, delay);
						}
					}
				}, 250);
			}
	
			/**
	   * Stop showing spinner and clear delay of showing spinner
	   *
	   * @access private
	   */
	
		}, {
			key: '_stopWayting',
			value: function _stopWayting() {
				this._waitingTimeouts.forEach(function (item) {
					return clearTimeout(item);
				});
				this._waitingTimeouts = [];
				this.removeClass('leplayer--waiting');
			}
	
			/**
	   * Show spinner with delay in 300ms
	   *
	   * @access private
	   */
	
		}, {
			key: '_startWaiting',
			value: function _startWaiting() {
				var _this6 = this;
	
				this._waitingTimeouts.push(setTimeout(function () {
					_this6.addClass('leplayer--waiting');
				}, 300));
			}
	
			/**
	   * On inited player event handler
	   *
	   * @access private
	   * @param {PlayerEvent} e
	   */
	
		}, {
			key: '_onInited',
			value: function _onInited(e) {
				this.addClass('leplayer--inited');
	
				this.options.onPlayerInited.call(this, e);
			}
	
			/**
	   * On click video event handler. Focus on video and togglePlay
	   *
	   * @access private
	   * @param {PlayerEvent} e
	   */
	
		}, {
			key: '_onClick',
			value: function _onClick(e) {
				var _this7 = this;
	
				clearTimeout(this._dblclickTimeout);
				var togglePlay = function togglePlay() {
					_this7._dblclickTimeout = setTimeout(function () {
						_this7.video.element.focus();
						_this7.togglePlay();
					}, 300);
				};
	
				/**
	    * See LPLR-290
	    * On touch devices in fullscreen if user not active we don't should toggle
	    * At first we show him a controls
	    */
				if ((0, _browser.IS_TOUCH)() && this.view === 'fullscreen') {
					if (this.player.userActive) {
						togglePlay();
					}
				} else {
					togglePlay();
				}
			}
	
			/**
	   * On dblclick on the video player event handler
	   *
	   * @access private
	   * @param {PlayerEvent} e
	   */
	
		}, {
			key: '_onDbclick',
			value: function _onDbclick(e) {
				clearTimeout(this._dblclickTimeout);
				this.toggleFullscreen();
			}
	
			/**
	   * On fullscreen change player event handler
	   *
	   * @access private
	   * @param {PlayerEvent} e
	   */
	
		}, {
			key: '_onFullscreenChange',
			value: function _onFullscreenChange(e, isFs) {
				if (isFs) {
					this.view = 'fullscreen';
	
					// Hide sections by default on mobile fullscreen
					if (_browser.IS_ANDROID) {
						this._lastSectionsValue = this.sections.visible;
						this.sections.visible = false;
					}
	
					this.focus();
				} else {
					this.view = 'common';
	
					if (_browser.IS_ANDROID) {
						this.sections.visible = this._lastSectionsValue;
					}
	
					// Pause video on exit fullscreeen on mobile
					if (_browser.IS_ANDROID_PHONE || _browser.IS_IPHONE || _browser.IS_IPOD) {
						this.pause();
					}
				}
			}
	
			/**
	   * On play event handler
	   *
	   * @access private
	   * @param {PlayerEvent} e
	   */
	
		}, {
			key: '_onPlay',
			value: function _onPlay() {
				this.splashIcon.show('play');
			}
	
			/**
	   * On pause player event handler
	   * Show pause icon in the center of video
	   *
	   * @access private
	   */
	
		}, {
			key: '_onPause',
			value: function _onPause() {
				this.splashIcon.show('pause');
			}
		}, {
			key: '_onEntityFullscrenChange',
			value: function _onEntityFullscrenChange() {
				var fsApi = _FullscreenApi2.default;
				var isFs = !!document[fsApi.fullscreenElement];
				this.trigger('fullscreenchange', isFs);
			}
		}, {
			key: 'entity',
			get: function get() {
				return this._entity;
			}
		}, {
			key: 'currentTime',
			get: function get() {
				return this.video.currentTime;
			},
			set: function set(value) {
				this.video.currentTime = value;
			}
	
			/**
	   * Returns the length of the current audio/video (in seconds)
	   * Getter
	   *
	   * @access public
	   * @memberof! Player#
	   * @type {Nubmer}
	   */
	
		}, {
			key: 'duration',
			get: function get() {
				return this.video.duration;
			}
	
			/**
	   * Returns whether the playback of the audio/video has ended or not
	   * Getter
	   *
	   * @memberof! Player#
	   * @type {Boolean}
	   */
	
		}, {
			key: 'ended',
			get: function get() {
				return this.video.ended;
			}
	
			/**
	   * Returns and set whether the playback of the audio/video has ended or not
	   * Getter and setter
	   *
	   * @access public
	   * @memberof! Player#
	   * @type {MediaError|String}
	   * @fires Player#error
	   */
	
		}, {
			key: 'error',
			get: function get() {
				return this._error || null;
			},
			set: function set(value) {
				if (value === null) {
					this._error = null;
					this.removeClass('leplayer--error');
					if (this.errorDisplay) {
						this.errorDisplay.element.hide();
					}
					return this;
				}
				this._error = new _MediaError2.default(value);
	
				this.addClass('leplayer--error');
	
				/**
	    * error event
	    *
	    * @event Player#error
	    * @property {MediaError} error
	    * @example
	    * const player = new Player($('#video'), options);
	    * player.on('error', (e, data) => console.error(data.error));
	    */
				this.trigger('error', { error: this._error });
	
				return this;
			}
		}, {
			key: 'rate',
			get: function get() {
				return this.video.rate;
			},
			set: function set(value) {
				this.video.rate = value;
			}
		}, {
			key: 'paused',
			get: function get() {
				return this.video.paused;
			}
	
			/**
	   * Return the height of player. If you want get height only of video element, use this.video.height or whatever
	   *
	   * @access public
	   * @type {Number}
	   * @memberof! Player#
	   */
	
		}, {
			key: 'height',
			get: function get() {
				return this.element.height();
			}
	
			/**
	   * Return unnecessary video heigth
	   * @access public
	   * @type {Number}
	   * @memberof! Player#
	   */
	
		}, {
			key: 'videoHeight',
			get: function get() {
				return this.video.height;
			}
	
			/**
	   * @access public
	   * @type {Boolean}
	   * @mebmerof! Player#
	   */
	
		}, {
			key: 'userActive',
			get: function get() {
				return this._userActive || false;
			},
			set: function set(value) {
				if (value !== this.getUserActive) {
					this._userActive = value;
					this.toggleClass('leplayer--user-active', value);
					/**
	     * User active event
	     *
	     * @event Player#useractive
	     */
					this.trigger('useractive');
				}
			}
	
			/**
	   * Set and get player view. View Can be 'common', 'fullscreen', 'mini'w
	   *
	   * @access public
	   * @type {String}
	   * @memberof! Player#
	   */
	
		}, {
			key: 'view',
			get: function get() {
				return this._view;
			},
			set: function set(view) {
				if (this.view != null) {
					this.removeClass('leplayer--' + this.view);
					this.trigger('delview.' + this.view);
				}
	
				this._view = view;
				this.element.addClass('leplayer--' + view);
				this.trigger('setview.' + view);
	
				return this;
			}
		}]);
	
		return Player;
	}(_Component3.default);
	
	/**
	 * Static helper for creating a plugins for leplayer
	 *
	 * @access public
	 * @static
	 * @param {String} name The name of plugin
	 * @param {Function} fn Plugin init function
	 *
	 * @example
	 * Player.plugin('helloWorld', function(pluginOptions) {
	 *    const player = this;
	 *    player.on('click', () => console.log('Hello world'));
	 * })
	 *
	 */
	
	
	Player.plugin = function (name, fn) {
		Player.prototype[name] = fn;
	};
	
	/**
	 * Get by name registered component
	 *
	 * @param {String} name - Name of component
	 * @return {Component}
	 */
	Player.getComponent = _Component3.default.getComponent;
	
	/**
	 * Register component
	 *
	 * @access public
	 * @static
	 * @param {String} name
	 * @param {Component} component
	 *
	 * @example
	 * Player.registerComponent('ErrorDisplay', ErrorDisplay);
	 */
	Player.registerComponent = _Component3.default.registerComponent;
	
	/**
	 * Register control
	 *
	 * @access public
	 * @static
	 * @param {String} name
	 * @param {Control} control
	 */
	Player.getControl = _Control2.default.getControl;
	
	/**
	 * Get by name registered control
	 *
	 * @access public
	 * @static
	 * @param {String} name
	 * @returns {Control}
	 *
	 * @example
	 * Player.registerControl('backward', BackwardControl);
	 */
	Player.registerControl = _Control2.default.registerControl;
	
	/**
	 * Convert seconds to format string 'hh?:mm:ss'
	 *
	 * @access public
	 * @param {Number} seconds Seconds
	 * @param {Boolean} showHours convert to format 'hh:mm:ss'
	 * @returns {String}
	 */
	Player.secondsToTime = _utils.secondsToTime;
	
	/**
	 * Static helper for creating a plugins for leplayer
	 *
	 * @access public
	 * @static
	 * @param {String} name The name of plugin
	 * @param {Function|Object} fn Plugin init function
	 *
	 * @example
	 * Player.preset('common', {
	 *     width : '100%',
	 *     plugins : {
	 *         miniplayer : true
	 *     }
	 * });
	 */
	Player.preset = function (name, obj) {
		if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object') {
			Player._presets[name] = _jquery2.default.extend({}, {
				options: {},
				initOptions: _utils.noop
			}, obj);
		} else if (typeof obj === 'function') {
			Player._presets[name] = obj();
		}
	};
	
	Player.getPreset = function (name) {
		if (Player._presets[name]) {
			return Player._presets[name];
		} else {
			console.error('preset ' + name + ' doesn\'t exist');
			return null;
		}
	};
	
	Player._presets = {};
	
	Player.Cookie = _cookie2.default;
	
	Player._loadSVGSprite = function (svg) {
		var hiddenElement = (0, _jquery2.default)('<div/>').hide();
		(0, _jquery2.default)('body').prepend(hiddenElement.append(svg));
		return hiddenElement;
	};
	
	Player.defaultSprite = __webpack_require__(70);
	
	/* global VERSION */
	Player.version = ("0.5.1");
	
	window.$.fn.lePlayer = function (options) {
		return this.each(function () {
			return new Player((0, _jquery2.default)(this), options);
		});
	};
	
	window.$.lePlayer = Player;
	
	window.lePlayer = Player;
	
	/**
	 * Mini Player plugin
	 *
	 * @plugin
	 */
	Player.plugin('miniplayer', function (pluginOptions) {
		var _this8 = this;
	
		var player = this;
	
		// Мержим с this.options.miniplayer, чтобы не сломать обратную совместимось, так как раньше
		// миниплеер не был плагином плеера.
		var options = _jquery2.default.extend({}, {
			width: '100%',
			offsetShow: function offsetShow(player) {
				var offset = player.element.offset().top + player.element.outerHeight() - player.getControls('common').element.height();
	
				return offset;
			}
		}, this.options.miniplayer, pluginOptions);
	
		var controls = new _ControlCollection2.default(this, {
			name: 'mini',
			controls: options.controls,
			controlOptions: {
				control: {
					disable: false
				}
			}
		});
	
		// Вставляем в infoElement под title и description
		this.infoElement.append(controls.element);
	
		/**
	  * Return offset on oY , when miniplayer should showing or hiding
	  *
	  * @returns {Number}
	  */
		var offsetShow = function offsetShow() {
			if (_jquery2.default.isFunction(options.offsetShow)) {
				return options.offsetShow(player);
			}
	
			return options.offsetShow;
		};
	
		var getWidth = function getWidth() {
			return options.width || _this8.element.width();
		};
	
		this._updateMiniPlayer = function (e, force) {
			var scrollTop = (0, _jquery2.default)(window).scrollTop();
	
			// Because in force update, for normally count height and padding
			// miniplayer before the show must first be hidden
			if (force) {
				_this8.hideMiniPlayer(force);
			}
	
			if (scrollTop > offsetShow()) {
				_this8.showMiniPlayer(force);
			} else {
				_this8.hideMiniPlayer();
			}
		};
	
		this.showMiniPlayer = function (force) {
			if (!force && _this8.view === 'mini') {
				return;
			}
	
			// Added empty space
			_this8.element.css('padding-top', _this8.videoContainer.height());
	
			_this8.view = 'mini';
		};
	
		this.hideMiniPlayer = function (force) {
			if (!force && _this8.view !== 'mini') {
				return;
			}
			_this8.view = 'common';
		};
	
		(0, _jquery2.default)(window).on('scroll', this._updateMiniPlayer.bind(this));
		(0, _jquery2.default)(window).on('resize', this._updateMiniPlayer.bind(this));
		this.on('inited', function (e) {
			return _this8._updateMiniPlayer(e, true);
		});
	
		this.onSetView('mini', function () {
			_this8.innerElement.css('max-width', getWidth());
			_this8.innerElement.css('height', _this8.video.height);
		});
	
		this.onDelView('mini', function () {
			_this8.innerElement.css('max-width', '');
			_this8.innerElement.css('height', '');
	
			_this8.element.css('padding-top', '');
		});
	
		this._updateMiniPlayer();
	});
	
	Player.preset('vps', __webpack_require__(71).preset);
	Player.preset('simple', __webpack_require__(72).preset);
	Player.preset('sms', __webpack_require__(73).preset);
	Player.preset('compressed', __webpack_require__(74).preset);
	Player.preset('2035', __webpack_require__(75).preset);
	
	module.exports = Player;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = $;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file Control.js
	 */
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _Component2 = __webpack_require__(4);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	var _Icon = __webpack_require__(5);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * @class Control
	 * @param {Player} player Main player
	 * @param {Object} [options] Control's options
	 * @param {String} [options.iconName] Name of control's icon. If empty, control will not have a icon
	 * @param {String} [options.className]
	 * @param {String} [options.name]
	 * @param {String} [options.collection]
	 * @param {String} [options.title] Contorl's tooltip, title attr
	 * @param {Function} [options.onClick] On click event handler
	 * @param {Boolean} [options.disable=false]
	 * @property {Icon} icon Icon in control, if it is exist
	 * @extends Component
	 */
	var Control = function (_Component) {
		_inherits(Control, _Component);
	
		function Control(player, options) {
			_classCallCheck(this, Control);
	
			var _this = _possibleConstructorReturn(this, (Control.__proto__ || Object.getPrototypeOf(Control)).call(this, player, options));
	
			_this.emitTapEvents();
			_this.disable = _this.options.disable != null ? _this.options.disable : true;
	
			_this.player.on('inited', function (e) {
				_this.disable = _this.options.disable != null ? _this.options.disable : false;
			});
	
			_this.element.on({
				click: _this.onClick.bind(_this),
				tap: _this.onClick.bind(_this)
			});
	
			_this.player.on('inited', _this.onPlayerInited.bind(_this));
			return _this;
		}
	
		/**
	  * @override
	  */
	
	
		_createClass(Control, [{
			key: 'createElement',
			value: function createElement() {
				if (this.options.iconName) {
					this.icon = new _Icon2.default(this.player, {
						iconName: this.options.iconName
					});
				}
				var attrs = {
					title: this.options.title
				};
				this.element = (0, _jquery2.default)('<' + (this.options.tag || 'button') + ' />').addClass(this.buildCSSClass()).append(this.icon && this.icon.element).attr(attrs);
	
				return this.element;
			}
	
			/**
	   * @override
	   */
	
		}, {
			key: 'buildCSSClass',
			value: function buildCSSClass() {
				var result = 'control ' + this.options.className + ' ' + _get(Control.prototype.__proto__ || Object.getPrototypeOf(Control.prototype), 'buildCSSClass', this).call(this);
				/**
	    * @see https://stackoverflow.com/questions/23885255/how-to-remove-ignore-hover-css-style-on-touch-devices
	    * We should ignore hover effetcs on iphone, because we show hover effect on tap
	    */
				if (!this.player.hasClass('leplayer--iphone')) {
					result += ' control--no-iphone';
				}
				return result;
			}
	
			/**
	   * @override
	   */
	
		}, {
			key: 'onClick',
	
	
			/**
	   *
	   * On click event handler
	   * @abstact
	   */
			value: function onClick(e) {
				e.preventDefault();
				if (this.disable) {
					return false;
				}
				this.player.trigger('controlclick', { control: this });
	
				if (typeof this.options.onClick === 'function') {
					this.options.onClick.call(this, arguments);
				}
			}
		}, {
			key: 'onPlayerInited',
			value: function onPlayerInited(e, data) {}
		}, {
			key: 'tap',
			set: function set(value) {
				this.toggleClass('control--tap', value);
			}
		}, {
			key: 'disable',
			set: function set(value) {
				this._disable = value;
				this.toggleClass('disabled', value);
			},
			get: function get() {
				return this._disable;
			}
		}], [{
			key: 'registerControl',
			value: function registerControl(name, control) {
				if (name == null) {
					return;
				}
	
				if (Control._controls == null) {
					Control._controls = {};
				}
	
				Control._controls[name] = control;
	
				return control;
			}
		}, {
			key: 'getControl',
			value: function getControl(name) {
				if (name == null) {
					return;
				}
	
				if (Control._controls && Control._controls[name]) {
					return Control._controls[name];
				}
			}
		}, {
			key: 'create',
			value: function create(player, name, options) {
				var controlClass = this.getControl(name);
				if (controlClass == null) {
					console.error('Control ' + name + ' doesn\'t exist');
					return null;
				}
	
				return new controlClass(player, options);
			}
		}]);
	
		return Control;
	}(_Component3.default);
	
	_Component3.default.registerComponent('Control', Control);
	Control.registerControl('control', Control);
	exports.default = Control;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file Component.js
	 */
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var toPlayerEvent = function toPlayerEvent(events) {
		return events.split(' ').reduce(function (acc, e) {
			return acc + ('leplayer_' + e + ' ');
		}, '');
	};
	
	/**
	 * Player component - Base class for all UI
	 *
	 * @param {Player} player Main player
	 * @param {Object} [options] Options of component
	 * @param {jQuery} [options.element] Элемент на котором можно иницилизовать класс.
	 * @property {Object} options
	 * @property {jQuery} element
	 * @class Component
	 */
	
	var Component = function () {
		function Component(player, options) {
			_classCallCheck(this, Component);
	
			options = this.options = _jquery2.default.extend({}, {
				createElement: true
			}, this.options, options);
	
			if (!player && this.play != null) {
				this.player = player = this;
			} else {
				this.player = player;
			}
	
			if (options.createElement) {
	
				if (options.element) {
					this.element = options.element;
				} else {
					this.createElement();
				}
	
				if (this.element.length !== 1) {
					console.error('Component.prototype.element.length must equal 1, not ' + this.element.length + '\n', this.element);
				}
	
				this.element[0].__node = this;
			}
		}
	
		/**
	  * @abstract
	  */
	
	
		_createClass(Component, [{
			key: 'createElement',
			value: function createElement() {
	
				return '';
			}
	
			/**
	   * @abstract
	   */
	
		}, {
			key: 'buildCSSClass',
			value: function buildCSSClass() {
				return '';
			}
	
			/**
	   * Set the focus to this component
	   */
	
		}, {
			key: 'focus',
			value: function focus() {
				this.element.focus();
			}
	
			/**
	   * Remove the focus from this component
	   */
	
		}, {
			key: 'blur',
			value: function blur() {
				this.element.blur();
			}
	
			/**
	   * Emit a player event (the name of event would be a leplayer_smth)
	   *
	   * @access public
	   * @param {String} eventName
	   * @param {Arguments} ...args jQuery.fn.on other arguments
	   * @returns {Player} this
	   */
	
		}, {
			key: 'trigger',
			value: function trigger(eventName) {
				var _element;
	
				var event = _jquery2.default.Event('leplayer_' + eventName, { player: this.player });
	
				for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
					args[_key - 1] = arguments[_key];
				}
	
				(_element = this.element).triggerHandler.apply(_element, [event].concat(args));
				return this;
			}
	
			/**
	   * Listen a player event with leplayer_ suffix
	   *
	   * @access public
	   * @param {String} eventName
	   * @param {Arguments} ...args jQuery.fn.on other arguments
	   * @returns {Player} this
	   */
	
		}, {
			key: 'on',
			value: function on(eventNames) {
				for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
					args[_key2 - 1] = arguments[_key2];
				}
	
				if (typeof eventNames === 'string' || eventNames instanceof String) {
					var _element2;
	
					(_element2 = this.element).on.apply(_element2, [toPlayerEvent(eventNames)].concat(args));
				} else {
					var _element3;
	
					console.warn('First argument of \'Component.on\' should be a string');
					(_element3 = this.element).on.apply(_element3, [eventNames].concat(args));
				}
				return this;
			}
		}, {
			key: 'one',
			value: function one(eventNames) {
				for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
					args[_key3 - 1] = arguments[_key3];
				}
	
				if (typeof eventNames === 'string' || eventNames instanceof String) {
					var _element4;
	
					(_element4 = this.element).one.apply(_element4, [toPlayerEvent(eventNames)].concat(args));
				} else {
					var _element5;
	
					console.warn('First argument of \'Component.one\' should be a string');
					(_element5 = this.element).one.apply(_element5, [eventNames].concat(args));
				}
				return this;
			}
	
			/**
	   * Add the CSS class for general leplayer DOM element
	   *
	   * @access public
	   * @param {String} className Name of class (not a selector, it's mean, that string sould be without point at the start)
	   * @returns {Player} this
	   */
	
		}, {
			key: 'addClass',
			value: function addClass(className) {
				this.element.addClass(className);
				return this;
			}
	
			/**
	   * Remove the CSS class from general leplayer DOM element
	   *
	   * @access public
	   * @param {String} className Name of class
	   * @returns {Player} this
	   */
	
		}, {
			key: 'removeClass',
			value: function removeClass(className) {
				this.element.removeClass(className);
				return this;
			}
	
			/**
	   * Toggle the CSS class from general leplayer DOM element
	   *
	   * @access public
	   * @param {String} className
	   * @param {Boolean} flag
	   * @returns {Player} this
	   */
	
		}, {
			key: 'toggleClass',
			value: function toggleClass(className, flag) {
				this.element.toggleClass(className, flag);
				return this;
			}
		}, {
			key: 'hasClass',
			value: function hasClass(className) {
				return this.element.hasClass(className);
			}
		}, {
			key: 'emitTapEvents',
			value: function emitTapEvents() {
				var _this = this;
	
				var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	
				if (element == null) {
					element = this.element;
				}
				// Track the start time so we can determine how long the touch lasted
				var touchStart = 0;
				var firstTouch = null;
				var lastMoveTouch = null;
	
				// Maximum movement allowed during a touch event to still be considered a tap
				// Other popular libs use anywhere from 2 (hammer.js) to 15,
				// so 10 seems like a nice, round number.
				var tapMovementThreshold = 10;
	
				// The maximum length a touch can be while still being considered a tap
				var touchTimeThreshold = 200;
	
				var couldBeTap = void 0;
	
				// see https://stackoverflow.com/questions/17957593/how-to-capture-touchend-coordinates
	
				element.on('touchstart', function (event) {
					// If more than one finger, don't consider treating this as a click
					if (event.touches.length === 1) {
						// Copy pageX/pageY from the object
						firstTouch = lastMoveTouch = {
							pageX: event.touches[0].pageX,
							pageY: event.touches[0].pageY
						};
						// Record start time so we can detect a tap vs. "touch and hold"
						touchStart = new Date().getTime();
						// Reset couldBeTap tracking
						couldBeTap = true;
						_this.tap = true;
					}
				});
	
				element.on('touchmove', function (event) {
					// If more than one finger, don't consider treating this as a click
					if (event.touches.length > 1) {
						couldBeTap = false;
					} else if (firstTouch) {
						// Some devices will throw touchmoves for all but the slightest of taps.
						// So, if we moved only a small distance, this could still be a tap
						var xdiff = event.touches[0].pageX - firstTouch.pageX;
						var ydiff = event.touches[0].pageY - firstTouch.pageY;
						var touchDistance = Math.sqrt(xdiff * xdiff + ydiff * ydiff);
	
						if (event.touches.length === 1) {
							lastMoveTouch = {
								pageX: event.touches[0].pageX,
								pageY: event.touches[0].pageY
							};
						}
	
						if (touchDistance > tapMovementThreshold) {
							couldBeTap = false;
							_this.tap = false;
						}
					}
				});
	
				var noTap = function noTap() {
					couldBeTap = false;
					_this.tap = false;
				};
	
				// TODO: Listen to the original target. http://youtu.be/DujfpXOKUp8?t=13m8s
				element.on('touchleave', noTap);
				element.on('touchcancel', noTap);
	
				// When the touch ends, measure how long it took and trigger the appropriate
				// event
				element.on('touchend', function (event) {
					firstTouch = null;
					_this.tap = false;
					// Proceed only if the touchmove/leave/cancel event didn't happen
					if (couldBeTap === true) {
						// Measure how long the touch lasted
						var touchTime = new Date().getTime() - touchStart;
	
						// Make sure the touch was less than the threshold to be considered a tap
						if (touchTime < touchTimeThreshold) {
							// Don't let browser turn this into a click
							event.preventDefault();
							/**
	       * Triggered when a `Component` is tapped.
	       *
	       * @event Component#tap
	       */
							var tapEvent = _jquery2.default.Event('tap');
							tapEvent.pageX = lastMoveTouch.pageX;
							tapEvent.pageY = lastMoveTouch.pageY;
							element.trigger(tapEvent);
							// It may be good to copy the touchend event object and change the
							// type to tap, if the other event properties aren't exact after
							// Events.fixEvent runs (e.g. event.target)
						}
					}
				});
			}
		}, {
			key: 'tap',
			set: function set(value) {}
		}], [{
			key: 'registerComponent',
			value: function registerComponent(name, component) {
				if (name == null) {
					return;
				}
	
				if (Component._components == null) {
					Component._components = {};
				}
	
				Component._components[name] = component;
	
				return component;
			}
		}, {
			key: 'getComponent',
			value: function getComponent(name) {
				if (name == null) {
					return;
				}
	
				if (Component._components && Component._components[name]) {
					return Component._components[name];
				}
			}
		}]);
	
		return Component;
	}();
	
	Component.registerComponent('Component', Component);
	exports.default = Component;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file Icon.js
	 */
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _Component2 = __webpack_require__(4);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * @param {Player} player Main player
	 * @param {Object} [options] Icon's options
	 * @param {String} [options.iconName=''] Icon's name. If use svgsprite icons, iconName it's id in sprite
	 * @class Icon
	 * @extends Component
	 */
	var Icon = function (_Component) {
		_inherits(Icon, _Component);
	
		function Icon(player) {
			var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
			_classCallCheck(this, Icon);
	
			options = _jquery2.default.extend({}, {
				className: '',
				iconName: ''
			}, options);
			return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).call(this, player, options));
		}
	
		/**
	  * @override
	  */
	
	
		_createClass(Icon, [{
			key: 'createElement',
			value: function createElement() {
				this._useTag = document.createElementNS('http://www.w3.org/2000/svg', 'use');
				this._svgTag = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
	
				this.iconName = this._iconName = this.options.iconName;
				this._svgTag.appendChild(this._useTag);
				this.element = (0, _jquery2.default)('<div />').addClass(this.buildCSSClass()).attr('title', this.options.title).append((0, _jquery2.default)(this._svgTag));
				return this.element;
			}
	
			/**
	   * @override
	   */
	
		}, {
			key: 'buildCSSClass',
			value: function buildCSSClass() {
				return _get(Icon.prototype.__proto__ || Object.getPrototypeOf(Icon.prototype), 'buildCSSClass', this).call(this) + ' leplayer-icon ' + this.options.className;
			}
	
			/**
	   * Setter of iconName field
	   * @param {String} iconName
	   */
	
		}, {
			key: 'iconName',
			set: function set(iconName) {
				var _useTag, _useTag2;
	
				var attrNS = ['http://www.w3.org/1999/xlink', 'href'];
				(_useTag = this._useTag).removeAttributeNS.apply(_useTag, attrNS.concat([this.player.options.svgPath + '#leplayer-icon-' + this.iconName]));
				(_useTag2 = this._useTag).setAttributeNS.apply(_useTag2, attrNS.concat([this.player.options.svgPath + '#leplayer-icon-' + iconName]));
				this._iconName = iconName;
			}
	
			/**
	   * Getter of iconName field
	   * @return {String} Icon's name
	   */
			,
			get: function get() {
				return this._iconName;
			}
		}]);
	
		return Icon;
	}(_Component3.default);
	
	_Component3.default.registerComponent('Icon', Icon);
	exports.default = Icon;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file PlayButton.js
	 */
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Control2 = __webpack_require__(3);
	
	var _Control3 = _interopRequireDefault(_Control2);
	
	var _Component = __webpack_require__(4);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	var _Icon = __webpack_require__(5);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _utils = __webpack_require__(7);
	
	var _browser = __webpack_require__(8);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * @param {Player} player Main player
	 */
	var PlayButton = function (_Control) {
		_inherits(PlayButton, _Control);
	
		function PlayButton(player, options) {
			_classCallCheck(this, PlayButton);
	
			return _possibleConstructorReturn(this, (PlayButton.__proto__ || Object.getPrototypeOf(PlayButton)).call(this, player, options));
		}
	
		_createClass(PlayButton, [{
			key: 'createElement',
			value: function createElement() {
				var inner = (0, _utils.createEl)('div', {
					className: 'leplayer-play-button__button'
				}).append(new _Icon2.default(this.player, { iconName: 'play' }).element);
	
				this.element = (0, _utils.createEl)('div', {
					className: this.buildCSSClass()
				}).append(inner);
	
				return this.element;
			}
		}, {
			key: 'onClick',
			value: function onClick(e) {
				_get(PlayButton.prototype.__proto__ || Object.getPrototypeOf(PlayButton.prototype), 'onClick', this).call(this, e);
				/**
	    * See LPLR-290
	    * On touch devices in fullscreen if user not active we don't should play.
	    * At first we show him a controls
	    */
				if ((0, _browser.IS_TOUCH)() && this.player.view === 'fullscreen') {
					if (this.player.userActive) {
						this.player.play();
					}
				} else {
					this.player.play();
				}
			}
	
			/**
	   * @override
	   */
	
		}, {
			key: 'buildCSSClass',
			value: function buildCSSClass() {
				return 'leplayer-play-button ' + this.options.className;
			}
		}]);
	
		return PlayButton;
	}(_Control3.default);
	
	_Component2.default.registerComponent('PlayButton', PlayButton);
	_Control3.default.registerControl('play button', PlayButton);
	exports.default = PlayButton;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file time.js
	 *
	 * @module time
	 */
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.getScrollBarWidth = undefined;
	exports.secondsToTime = secondsToTime;
	exports.percentify = percentify;
	exports.createEl = createEl;
	exports.$html = $html;
	exports.noop = noop;
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Convert seconds to format string 'hh?:mm:ss'
	 *
	 * @access public
	 * @param {Number} seconds Seconds
	 * @param {Boolean} showHours convert to format 'hh:mm:ss'
	 * @returns {String}
	 */
	function secondsToTime(seconds, showHours) {
		var h = Math.floor(seconds / 3600);
		var m = Math.floor(seconds % 3600 / 60);
		var s = Math.floor(seconds % 3600 % 60);
		var out = '';
		if (m < 10) {
			m = '0' + m;
		}
		if (s < 10) {
			s = '0' + s;
		}
		out = m + ':' + s;
	
		if (h > 0 || showHours) {
			out = h + ':' + out;
		}
		return out;
	}
	
	/**
	 * Return length / end
	 *
	 * @access public
	 * @param {Number} length
	 * @param {Nubmer} end
	 */
	function percentify(length, end) {
		// or zero beacase NaN
		var percent = length / end || 0;
		return percent >= 1 ? 1 : percent;
	}
	
	function createEl() {
		var tag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'div';
		var props = arguments[1];
	
		if (props && props.className) {
			props["class"] = props.className;
			delete props.className;
		}
		return (0, _jquery2.default)('<' + tag + '/>', props);
	}
	
	/**
	 * @params {String} Html
	 */
	function $html(html) {}
	
	function noop() {}
	
	var getScrollBarWidth = exports.getScrollBarWidth = function () {
		var result = void 0;
	
		return function () {
	
			if (result != null) {
				return result;
			}
	
			var outer = (0, _jquery2.default)('<div />').css({
				visibility: 'hidden',
				width: 100,
				overflow: 'scroll'
			}).appendTo('body');
	
			var widthWithScroll = (0, _jquery2.default)('<div />').css({
				width: '100%'
			}).appendTo(outer).outerWidth();
	
			outer.remove();
			return result = 100 - widthWithScroll;
		};
	}();

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @file browser.js
	 */
	
	var USER_AGENT = window.navigator && window.navigator.userAgent || '';
	
	var IS_MOBILE = exports.IS_MOBILE = /Mobile/i.test(USER_AGENT);
	
	var IS_CHROME = exports.IS_CHROME = USER_AGENT.indexOf('Chrome') > -1;
	
	var IS_ANDROID = exports.IS_ANDROID = /Android/i.test(USER_AGENT);
	
	var IS_ANDROID_PHONE = exports.IS_ANDROID_PHONE = IS_ANDROID && IS_MOBILE;
	
	var IS_IPAD = exports.IS_IPAD = /iPad/i.test(USER_AGENT);
	// The Facebook app's UIWebView identifies as both an iPhone and iPad, so
	// to identify iPhones, we need to exclude iPads.
	// http://artsy.github.io/blog/2012/10/18/the-perils-of-ios-user-agent-sniffing/
	var IS_IPHONE = exports.IS_IPHONE = /iPhone/i.test(USER_AGENT) && !IS_IPAD;
	var IS_IPOD = exports.IS_IPOD = /iPod/i.test(USER_AGENT);
	var IS_IOS = exports.IS_IOS = IS_IPHONE || IS_IPAD || IS_IPOD;
	
	var IS_SAFARI = exports.IS_SAFARI = USER_AGENT.indexOf('Safari') > -1 && !IS_CHROME;
	
	var IS_TOUCH = exports.IS_TOUCH = function IS_TOUCH() {
	  return 'ontouchstart' in window || navigator.maxTouchPoints;
	};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file SplashIcon.js
	 */
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _Component2 = __webpack_require__(4);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	var _Icon = __webpack_require__(5);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * @param {Player} player Main player
	 * @param {Object} [options]
	 * @class SplashIcon
	 * @extends Component
	 */
	var SplashIcon = function (_Component) {
		_inherits(SplashIcon, _Component);
	
		function SplashIcon() {
			_classCallCheck(this, SplashIcon);
	
			return _possibleConstructorReturn(this, (SplashIcon.__proto__ || Object.getPrototypeOf(SplashIcon)).apply(this, arguments));
		}
	
		_createClass(SplashIcon, [{
			key: 'show',
			value: function show(name) {
				var _this2 = this;
	
				this.icon.iconName = name;
				this.element.addClass('leplayer-splashicon--active');
				setTimeout(function () {
					return _this2.element.removeClass('leplayer-splashicon--active');
				}, 300);
			}
	
			/**
	   * @override
	   */
	
		}, {
			key: 'createElement',
			value: function createElement() {
				this.icon = new _Icon2.default(this.player);
				return this.element = (0, _jquery2.default)('<div />').addClass('leplayer-splashicon').append(this.icon.element);
			}
		}]);
	
		return SplashIcon;
	}(_Component3.default);
	
	exports.default = SplashIcon;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file Time.js
	 */
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _Component2 = __webpack_require__(4);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	var _utils = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// TODO: Использовать этот блок в TimeControl
	/**
	 * @param {Player} player Main player
	 * @param {Object} [options]
	 * @class Time
	 * @extends Control
	 */
	var Time = function (_Component) {
		_inherits(Time, _Component);
	
		function Time(player) {
			var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
			_classCallCheck(this, Time);
	
			options = _jquery2.default.extend({}, {
				fn: function fn(player) {
					var video = player.video;
					return (0, _utils.secondsToTime)(video.currentTime);
				}
			}, options);
	
			var _this = _possibleConstructorReturn(this, (Time.__proto__ || Object.getPrototypeOf(Time)).call(this, player, options));
	
			_this.player.on('timeupdate', _this.updateText.bind(_this));
			_this.player.on('inited', _this.updateText.bind(_this));
			return _this;
		}
	
		_createClass(Time, [{
			key: 'updateText',
			value: function updateText(e, data) {
				this.element.text(this.options.fn(this.player));
			}
		}, {
			key: 'createElement',
			value: function createElement() {
				this.element = (0, _utils.createEl)('div', { className: 'leplayer-time' });
				return this.element;
			}
		}]);
	
		return Time;
	}(_Component3.default);
	
	_Component3.default.registerComponent('Time', Time);
	exports.default = Time;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file ControlCollection.js
	 */
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _Component2 = __webpack_require__(4);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	var _Control = __webpack_require__(3);
	
	var _Control2 = _interopRequireDefault(_Control);
	
	var _utils = __webpack_require__(7);
	
	var _browser = __webpack_require__(8);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * @param {Player} player Main player
	 * @param {Object} [options] Options of component
	 * @param {jQuery} [options.controls] Array of rows of control's name
	 * @param {Object} [options.controlsOptions] Control options
	 * @property {Array} Array of rows of control's name
	 * @pr
	 *
	 */
	var ControlCollection = function (_Component) {
		_inherits(ControlCollection, _Component);
	
		function ControlCollection(player, options) {
			_classCallCheck(this, ControlCollection);
	
			var _options = options,
			    name = _options.name;
	
			// Options by user agent
			// Options only for common:android or whatever:android, whatever:ios controls
	
			var localUaOptions = {};
	
			var controlsOptions = {};
	
			var controls = [];
	
			if (name != null) {
	
				controls = player.options.controls[name];
	
				controlsOptions = player.options.controlsOptions[name];
	
				[{ flag: _browser.IS_MOBILE, name: 'mobile' }, { flag: _browser.IS_ANDROID_PHONE, name: 'android' }, { flag: _browser.IS_IPHONE, name: 'ios' }].forEach(function (item) {
					if (item.flag) {
						var localName = name + ':' + item.name;
	
						if (player.options.controls[localName]) {
							localUaOptions = _jquery2.default.extend({}, localUaOptions, player.options.controlsOptions[localName]);
							controls = player.options.controls[localName];
						}
					}
					return item.flag;
				});
			}
	
			options = _jquery2.default.extend({}, {
				controls: controls,
				align: 'left',
				controlsOptions: {}
			}, localUaOptions, controlsOptions, options);
	
			var _this = _possibleConstructorReturn(this, (ControlCollection.__proto__ || Object.getPrototypeOf(ControlCollection)).call(this, player, options));
	
			_this.active = options.active || false;
			_this.name = options.name;
	
			_this.player.controls[_this.name] = _this;
			return _this;
		}
	
		_createClass(ControlCollection, [{
			key: '_getControlOptions',
			value: function _getControlOptions(name) {
				var controlsOptions = this.options.controlsOptions;
	
				var result = controlsOptions.control || {};
	
				if (controlsOptions[name]) {
					result = _jquery2.default.extend(true, {}, result, controlsOptions[name]);
				}
	
				return result;
			}
		}, {
			key: 'addControl',
			value: function addControl(indexRow, name, options) {
				var control = _Control2.default.create(this.player, name, _extends({
					collection: this.options.name
				}, options));
	
				if (control == null) {
					return;
				}
	
				while (indexRow > this._rows.length) {
					this.addRow();
				}
	
				var elemRow = this._rows[indexRow];
				elemRow.append(control.element);
	
				if (this.controls == null) {
					this.controls = [];
				}
				if (this.controls[indexRow] == null) {
					this.controls[indexRow] = {};
				}
	
				this.controls[indexRow][name] = control;
			}
		}, {
			key: 'getControl',
			value: function getControl(first, second) {
				if (second == null) {
					var name = first;
					for (var i = 0; i < this.controls.length; i++) {
						if (this.controls[i][name] != null) {
							return this.controls[i][name];
						}
					}
				} else {
					var _name = first;
					var indexRow = second;
					return this.controls[indexRow][_name];
				}
	
				return null;
			}
		}, {
			key: 'addRow',
			value: function addRow() {
				var elemRow = (0, _utils.createEl)('div', {
					className: 'leplayer-controls controls-' + this.options.name
				});
	
				if (this._rows == null) {
					this._rows = [];
				}
				this._rows.push(elemRow);
				this.element.append(elemRow);
	
				return elemRow;
			}
		}, {
			key: 'getRow',
			value: function getRow(indexRow) {
				return this._rows[indexRow || 0];
			}
	
			/**
	   * @override
	   */
	
		}, {
			key: 'createElement',
			value: function createElement() {
				var _this2 = this;
	
				var _options2 = this.options,
				    name = _options2.name,
				    controls = _options2.controls,
				    align = _options2.align;
	
				var globalAlign = null;
	
				this.element = (0, _utils.createEl)('div', {
					className: 'leplayer-control-collection leplayer-control-collection--' + name
				});
	
				if (typeof align === 'string') {
					globalAlign = align;
				}
	
				controls.forEach(function (row, indexRow) {
					var elemRow = _this2.addRow();
					var rowAlign = globalAlign;
	
					if (Array.isArray(align) && align[indexRow]) {
						rowAlign = align[indexRow];
					}
	
					row.forEach(function (controlName) {
	
						if (controlName === 'timeline' && rowAlign !== 'justify') {
							console.warn('Conrols should have justify align, if there is the timeline in it');
						}
	
						_this2.addControl(indexRow, controlName, _this2._getControlOptions(name));
					});
	
					elemRow.addClass('leplayer-controls--' + rowAlign).attr('tabindex', 0);
	
					elemRow.find('.divider + .divider').remove();
				});
	
				return this.element;
			}
		}, {
			key: 'hide',
			value: function hide() {
				this.element.hide();
				this.element.find('.leplayer-controls').hide();
			}
		}, {
			key: 'show',
			value: function show() {
				this.element.show();
				this.element.find('.leplayer-controls').show();
			}
		}]);
	
		return ControlCollection;
	}(_Component3.default);
	
	_Component3.default.registerComponent('ControlCollection', ControlCollection);
	exports.default = ControlCollection;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file Sections.js
	 */
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _Component2 = __webpack_require__(4);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	var _utils = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * @class Sections
	 * @param {Player} player Main player
	 * @param {Object} [options]
	 * @param {Array} [options.items=[]} Data for sections
	 * @param {Boolean} [options.views] Show section only in fullscreen
	 * @extends Component
	 */
	var Sections = function (_Component) {
		_inherits(Sections, _Component);
	
		function Sections(player, options) {
			var _ret;
	
			_classCallCheck(this, Sections);
	
			var _options$items = options.items,
			    items = _options$items === undefined ? [] : _options$items;
	
			items = [].concat(items);
	
			//options.items = items;
	
			var _this = _possibleConstructorReturn(this, (Sections.__proto__ || Object.getPrototypeOf(Sections)).call(this, player, options));
	
			_this.scrollElement = _this._innerElement;
			_this.activeSection = _this.getSectionByIndex(0);
	
			_this.items = items;
			_this.length = _this.items.length;
	
			_this.setActiveByIndex(0);
	
			_this.element.find('.leplayer-section').on('click', _this.onSectionClick.bind(_this));
	
			// this.player.on('sectionstoggle', this._onSectionsToggle.bind(this));
	
			_this.player.on('timeupdate', _this.onTimeUpdate.bind(_this));
	
			_this.player.on('inited', _this.updateSectionDuration.bind(_this));
	
			_this.player.on('durationchange', _this.updateSectionDuration.bind(_this));
	
			_this.player.on('focus', function () {
				return _this.player.focus();
			});
	
			return _ret = _this, _possibleConstructorReturn(_this, _ret);
		}
	
		_createClass(Sections, [{
			key: 'next',
			value: function next() {
				var sectionIndex = parseInt(this.activeSection.attr('data-index'));
				var newIndex = sectionIndex >= this.length ? this.length : sectionIndex + 1;
	
				this.setActiveByIndex(newIndex);
	
				this.player.video.currentTime = this.items[sectionIndex].end;
			}
		}, {
			key: 'prev',
			value: function prev() {
				var sectionIndex = parseInt(this.activeSection.attr('data-index'));
				var newIndex = sectionIndex <= 0 ? 0 : sectionIndex - 1;
	
				this.setActiveByIndex(newIndex);
				this.player.video.currentTime = this.items[newIndex].begin;
			}
	
			/**
	   * @override
	   */
	
		}, {
			key: 'createElement',
			value: function createElement() {
				var _options = this.options,
				    fullscreenOnly = _options.fullscreenOnly,
				    hideScroll = _options.hideScroll;
	
	
				this.element = (0, _jquery2.default)('<div />').addClass('leplayer-sections').attr('tabindex', '0');
	
				this._innerElement = (0, _jquery2.default)('<div />').addClass('leplayer-sections__inner');
	
				if (fullscreenOnly) {
					this.element.addClass('leplayer-sections--fsonly');
				}
	
				if (hideScroll) {
					this.element.addClass('leplayer-sections--hide-scroll');
					this._innerElement.css({
						right: -1 * (0, _utils.getScrollBarWidth)()
					});
				}
	
				this.element.append(this._innerElement.append(this._createSections(this.options.items)));
	
				return this.element;
			}
	
			/**
	   * @override
	   */
	
		}, {
			key: 'updateSectionDuration',
			value: function updateSectionDuration() {
				if (this.items != null && this.items.length > 0) {
					var length = this.items.length;
					this.items[length - 1].end = this.player.video.duration;
	
					// TODO: Продумать функцияю updateSection
					//this.updateSection(this.items[length - 1], length - 1);
				}
			}
		}, {
			key: 'onSectionClick',
			value: function onSectionClick(e) {
				var video = this.player.video;
				var section = (0, _jquery2.default)(e.target).closest('.leplayer-section');
				video.currentTime = section.attr('data-begin');
				this.player.trigger('sectionsclick', { section: this.items[section.attr('data-index')] });
			}
		}, {
			key: 'setActiveByIndex',
			value: function setActiveByIndex(index) {
				if (this.activeSection.length === 0 || parseInt(this.activeSection.attr('data-index')) === index || this.getSectionByIndex(index).length === 0) {
					return this;
				}
	
				this.activeSection.removeClass('leplayer-section--active');
				this.activeSection = this.getSectionByIndex(index);
				this.activeSection.addClass('leplayer-section--active');
	
				var topPosition = this.activeSection.position().top;
	
				this.scrollElement.animate({
					scrollTop: this.scrollElement.scrollTop() + topPosition
				}, 800);
	
				this.player.trigger('sectionschange', { section: this.items[index] });
	
				return this;
			}
		}, {
			key: 'getSectionByIndex',
			value: function getSectionByIndex(index) {
				return this.element.find('.leplayer-section[data-index="' + index + '"]');
			}
		}, {
			key: 'onTimeUpdate',
			value: function onTimeUpdate(e, data) {
				if (this.activeSection.length === 0) {
					return;
				}
	
				var currentTime = this.player.currentTime;
	
				// Update span with end section time
				// TODO: Вынести это в отдельный компонент ShowTime или типо того
				if (this.player.view === 'mini') {
					var endSectionTime = this.activeSection.attr('data-end');
					this.activeSection.next().find('.time').text((0, _utils.secondsToTime)(endSectionTime - currentTime));
				}
	
				for (var i = 0; i < this.items.length; i++) {
					var section = this.items[i];
					if (currentTime < section.end) {
						this.setActiveByIndex(i);
						break;
					}
				}
			}
		}, {
			key: 'createSection',
	
	
			/**
	   * Create HTML of section by data and index section
	   *
	   * @returns {String} HTML
	   */
			value: function createSection(section, index) {
				var items = this.items || this.options.items;
				var item = ('\n\t\t\t<div class="leplayer-section ' + (!index ? 'leplayer-section--active' : '') + '"\n\t\t\t\tdata-begin="' + section.begin + '"\n\t\t\t\tdata-index="' + index.toString() + '"\n\t\t\t\tdata-end="' + section.end + '">\n\t\t\t\t<div class="leplayer-section-time">' + (0, _utils.secondsToTime)(section.begin) + '</div>\n\t\t\t\t<div class="leplayer-section-info">\n\t\t\t\t\t<div class="leplayer-section-next-info">\n\t\t\t\t\t\t' + (section.nextInfo || 'Следующая секция начнется через') + '\n\t\t\t\t\t\t<span class="time">' + (0, _utils.secondsToTime)(items[0].end) + '</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t' + (section.title != null ? '<div class="leplayer-section-title">' + section.title + '</div>' : '') + '\n\t\t\t\t\t' + (section.description != null ? '<div class="leplayer-section-description">' + section.description + '</div>' : '') + '\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t').trim();
				return item;
			}
	
			// TODO: Придумать что сделать с событиями после обновления полносью секции
			/**
	   * Find section by index and update him using data
	   *
	   * @param {Object} data
	   * @param {Number} index
	   */
	
		}, {
			key: 'updateSection',
			value: function updateSection(data, index) {
				this.getSectionByIndex(index).replaceWith(this.createSection(data, index)).on('click', this.onSectionClick.bind(this));
			}
		}, {
			key: '_createSections',
			value: function _createSections(items) {
				var _this2 = this;
	
				var result = '';
				items.forEach(function (section, index) {
					result += _this2.createSection(section, index);
				});
				return result;
			}
		}, {
			key: 'visible',
			set: function set(value) {
				if (this.element.hasClass('leplayer-sections--hidden') && value) {
					this.element.removeClass('leplayer-sections--hidden');
					this.player.trigger('sectionstoggle', { isVisible: value });
				} else if (!value) {
					this.element.addClass('leplayer-sections--hidden');
					this.player.trigger('sectionstoggle', { isVisible: value });
				}
			},
			get: function get() {
				return !this.element.hasClass('leplayer-sections--hidden');
			}
		}]);
	
		return Sections;
	}(_Component3.default);
	
	_Component3.default.registerComponent('Sections', Sections);
	exports.default = Sections;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file ErrorDisplay.js
	 */
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _Component2 = __webpack_require__(4);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * @param {Player} player Main player
	 * @param {Object} [options]
	 * @class ErrorDisplay
	 * @extends Component
	 */
	var ErrorDisplay = function (_Component) {
		_inherits(ErrorDisplay, _Component);
	
		function ErrorDisplay(player) {
			var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
			_classCallCheck(this, ErrorDisplay);
	
			var _this = _possibleConstructorReturn(this, (ErrorDisplay.__proto__ || Object.getPrototypeOf(ErrorDisplay)).call(this, player, options));
	
			if (_this.player._error != null) {
				_this.message = _this.player._error.message;
				_this.element.show();
			}
			_this.player.on('error', _this.onPlayerError.bind(_this));
			return _this;
		}
	
		/**
	  * @override
	  */
	
	
		_createClass(ErrorDisplay, [{
			key: 'createElement',
			value: function createElement() {
				this.element = (0, _jquery2.default)('<div />').addClass('leplayer-error-display');
			}
		}, {
			key: 'onPlayerError',
			value: function onPlayerError(e, data) {
				var error = data.error;
				this.message = error.message;
				this.element.show();
			}
		}, {
			key: 'message',
			set: function set(value) {
				this.element.html(value);
			}
		}]);
	
		return ErrorDisplay;
	}(_Component3.default);
	
	_Component3.default.registerComponent('ErrorDisplay', ErrorDisplay);
	exports.default = ErrorDisplay;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file ErrorDisplay.js
	 */
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _Component2 = __webpack_require__(4);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * @param {Player} player Main player
	 * @param {Object} [options]
	 * @param {String} [options.url] path to poster image
	 * @class Poster
	 * @extends Component
	 */
	var Poster = function (_Component) {
		_inherits(Poster, _Component);
	
		function Poster(player) {
			var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
			_classCallCheck(this, Poster);
	
			options = _jquery2.default.extend({}, {
				url: options.url
			}, options);
	
			var _this = _possibleConstructorReturn(this, (Poster.__proto__ || Object.getPrototypeOf(Poster)).call(this, player, options));
	
			_this.url = _this.options.url;
			return _this;
		}
	
		_createClass(Poster, [{
			key: 'createElement',
	
	
			/**
	   * @override
	   */
			value: function createElement() {
				this.element = (0, _jquery2.default)('<div />').addClass('leplayer-poster');
	
				return this.element;
			}
		}, {
			key: 'url',
			set: function set(value) {
				if (value == null) {
					return;
				}
				this._url = value;
				this.element.css('background-image', 'url("' + value + '")');
			},
			get: function get() {
				return this._url;
			}
		}]);
	
		return Poster;
	}(_Component3.default);
	
	_Component3.default.registerComponent('Poster', Poster);
	exports.default = Poster;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	/**
	 * @file fullscreen-api.js
	 */
	
	/*
	 * Store the browser-specific methods for the fullscreen API
	 * @type {Object|undefined}
	 * @private
	 */
	var FullscreenApi = {};
	
	// browser API methods
	// map approach from Screenful.js - https://github.com/sindresorhus/screenfull.js
	var apiMap = [
	// Spec: https://dvcs.w3.org/hg/fullscreen/raw-file/tip/Overview.html
	['requestFullscreen', 'exitFullscreen', 'fullscreenElement', 'fullscreenEnabled', 'fullscreenchange', 'fullscreenerror'],
	// WebKit
	['webkitRequestFullscreen', 'webkitExitFullscreen', 'webkitFullscreenElement', 'webkitFullscreenEnabled', 'webkitfullscreenchange', 'webkitfullscreenerror'],
	// Old WebKit (Safari 5.1)
	['webkitRequestFullScreen', 'webkitCancelFullScreen', 'webkitCurrentFullScreenElement', 'webkitCancelFullScreen', 'webkitfullscreenchange', 'webkitfullscreenerror'],
	// Mozilla
	['mozRequestFullScreen', 'mozCancelFullScreen', 'mozFullScreenElement', 'mozFullScreenEnabled', 'mozfullscreenchange', 'mozfullscreenerror'],
	// Microsoft
	['msRequestFullscreen', 'msExitFullscreen', 'msFullscreenElement', 'msFullscreenEnabled', 'MSFullscreenChange', 'MSFullscreenError']];
	
	var specApi = apiMap[0];
	
	var browserApi = void 0;
	
	// determine the supported set of functions
	for (var i = 0; i < apiMap.length; i++) {
		// check for exitFullscreen function
		if (apiMap[i][1] in document) {
			browserApi = apiMap[i];
			break;
		}
	}
	
	// map the browser API names to the spec API names
	if (browserApi) {
		for (var _i = 0; _i < browserApi.length; _i++) {
			FullscreenApi[specApi[_i]] = browserApi[_i];
		}
	}
	
	exports.default = FullscreenApi;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	'use strict';
	/**
	 * @file cookie-control.js
	 *
	 * @clas Cookie
	 */
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Cookie = function () {
		function Cookie() {
			_classCallCheck(this, Cookie);
		}
	
		_createClass(Cookie, null, [{
			key: 'get',
	
			/**
	   * @public
	   *
	   * @param {String} name Name of cookie
	   * @param {String} [dflt] Return default value if this field is empty
	   *
	   */
			value: function get(name, dflt) {
				var cookies = document.cookie.split(';');
				for (var i in cookies) {
					var d = cookies[i].trim().split('=');
					if (d[0] === 'leplayer_' + name) return d[1];
				}
				return dflt;
			}
	
			/**
	   * @public
	   *
	   * @param {String} name Key
	   * @param {String} value Value
	   */
	
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
	
	exports.default = Cookie;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var MediaError = function MediaError(value) {
		_classCallCheck(this, MediaError);
	
		if (value instanceof MediaError) {
			return value;
		}
		if (typeof value === 'number') {
			this.code = value;
		} else if (typeof value === 'string') {
			// default code is zero, so this is a custom error
			this.message = value;
		} else if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
	
			// We assign the `code` property manually because native MediaError objects
			// do not expose it as an own/enumerable property of the object.
			if (typeof value.code === 'number') {
				this.code = value.code;
			}
	
			_jquery2.default.extend(this, value);
		}
	
		if (!this.message) {
			this.message = MediaError.defaultMessages[this.code] || '';
		}
	};
	
	MediaError.prototype.code = 0;
	
	MediaError.prototype.message = '';
	
	MediaError.errorTypes = ['MEDIA_ERR_CUSTOM', 'MEDIA_ERR_ABORTED', 'MEDIA_ERR_NETWORK', 'MEDIA_ERR_DECODE', 'MEDIA_ERR_SRC_NOT_SUPPORTED', 'MEDIA_ERR_ENCRYPTED'];
	
	MediaError.defaultMessages = {
		1: 'Вы прервали загрузку видео.',
		2: 'Загрузка видео прервана из-за потери соединения.',
		3: 'Загрузка видео остановлена из-за проблем с видеофайлом или из-за того, что ваш браузер не поддерживает воспроизведение данного файла.',
		4: 'Видео не может быть загружено из-за проблем с интернет-соединением или проблем на сервере. Или формат файла не поддерживается вашим браузером.',
		5: 'Видео зашифровано, и мы не можем его расшифровать.'
	};
	
	// Add types as properties on MediaError
	// e.g. MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED = 4;
	for (var errNum = 0; errNum < MediaError.errorTypes.length; errNum++) {
		MediaError[MediaError.errorTypes[errNum]] = errNum;
		// values should be accessible on both the class and instance
		MediaError.prototype[MediaError.errorTypes[errNum]] = errNum;
	}
	
	exports.default = MediaError;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file PlayControl.js
	 */
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _Component = __webpack_require__(4);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	var _Control2 = __webpack_require__(3);
	
	var _Control3 = _interopRequireDefault(_Control2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * @class PlayControl
	 * @param {Player} player Main player
	 * @extends Control
	 */
	var PlayControl = function (_Control) {
		_inherits(PlayControl, _Control);
	
		function PlayControl(player) {
			var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
			_classCallCheck(this, PlayControl);
	
			options = _jquery2.default.extend({}, {
				iconName: 'play',
				title: 'Воспроизвести видео',
				className: 'play',
				name: 'play'
			}, options);
	
			var _this = _possibleConstructorReturn(this, (PlayControl.__proto__ || Object.getPrototypeOf(PlayControl)).call(this, player, options));
	
			_this.player.on('play playing pause ended seeking loadstart', _this.update.bind(_this));
			return _this;
		}
	
		/**
	  * Pause the video
	  */
	
	
		_createClass(PlayControl, [{
			key: 'showPlay',
			value: function showPlay() {
				if (this.icon.iconName === 'play') return;
				this.icon.iconName = 'play';
				this.element.attr('title', this.options.title);
			}
	
			/**
	   * Play the video
	   */
	
		}, {
			key: 'showPause',
			value: function showPause() {
				if (this.icon.iconName === 'pause') return;
				this.icon.iconName = 'pause';
				this.element.attr('title', 'Поставить на паузу');
			}
		}, {
			key: 'update',
			value: function update() {
				if (this.player.ended) {
					this.showReplay();
				} else if (this.player.paused) {
					this.showPlay();
				} else {
					this.showPause();
				}
			}
		}, {
			key: 'showReplay',
			value: function showReplay() {
				if (this.icon.iconName === 'refresh') return;
				if (this.player.duration !== Infinity) {
					this._replay = true;
					this.icon.iconName = 'refresh';
					this.element.attr('title', 'Запустить заново');
				}
			}
		}, {
			key: 'removeReplay',
			value: function removeReplay() {
				if (!this._replay) {
					return;
				}
				this._replay = false;
	
				if (this.player.video.paused) {
					this.showPlay();
				} else {
					this.showPause();
				}
			}
	
			/**
	   * @override
	   */
	
		}, {
			key: 'onClick',
			value: function onClick(e) {
				this.player.video.togglePlay();
			}
		}]);
	
		return PlayControl;
	}(_Control3.default);
	
	_Component2.default.registerComponent('PlayControl', PlayControl);
	_Control3.default.registerControl('play', PlayControl);
	exports.default = PlayControl;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file VolumeControl.js
	 */
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _Component = __webpack_require__(4);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	var _Control = __webpack_require__(3);
	
	var _Control2 = _interopRequireDefault(_Control);
	
	var _ControlDropdown2 = __webpack_require__(20);
	
	var _ControlDropdown3 = _interopRequireDefault(_ControlDropdown2);
	
	var _browser = __webpack_require__(8);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * @param {Player} player Main player
	 * @class VolumeControl
	 * @extends ControlDropdown
	 */
	var VolumeControl = function (_ControlDropdown) {
		_inherits(VolumeControl, _ControlDropdown);
	
		function VolumeControl(player) {
			var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
			_classCallCheck(this, VolumeControl);
	
			options = _jquery2.default.extend({}, {
				iconName: 'volume-down',
				className: 'volume-control',
				name: 'volume'
			}, options);
	
			var _this = _possibleConstructorReturn(this, (VolumeControl.__proto__ || Object.getPrototypeOf(VolumeControl)).call(this, player, options));
	
			if (!player.video.featureControlVolume || _browser.IS_ANDROID_PHONE) {
				_this.element.hide();
				return _possibleConstructorReturn(_this);
			}
	
			_this.player.on('volumechange', function (e, data) {
				var video = _this.player.video;
				_this.value = video.muted ? 0 : video.volume;
			});
			return _this;
		}
	
		_createClass(VolumeControl, [{
			key: 'createElement',
			value: function createElement() {
				var _this2 = this;
	
				_get(VolumeControl.prototype.__proto__ || Object.getPrototypeOf(VolumeControl.prototype), 'createElement', this).call(this);
				var drag = false;
				var video = this.player.video;
	
				this.marker = (0, _jquery2.default)('<div/>').addClass('volume-marker');
	
				this.active = (0, _jquery2.default)('<div/>').addClass('volume-active');
	
				this.line = (0, _jquery2.default)('<div/>').addClass('volume-line').append(this.active).append(this.marker).on('click', function (e) {
					if (drag) return;
					var p = _this2.getPosition(e.pageY);
					if (p >= 0 && p <= 1) {
						if (video.muted) {
							video.muted = false;
						}
						video.volume = 1 - p;
					}
				});
	
				this.dropdownContent.addClass('volume-slider').append(this.line);
	
				this.icon.element.attr('title', 'Отключить звук');
	
				this.marker.on('mousedown', function (e) {
					if (e.which !== 1) return;
					drag = true;
				});
	
				(0, _jquery2.default)(document).on({
					mousemove: function mousemove(e) {
						if (!drag) return;
						var p = _this2.getPosition(e.pageY);
						if (p >= 0 && p <= 1) {
							if (video.muted) {
								video.muted = false;
							}
							video.volume = 1 - p;
						}
					},
	
					mouseup: function mouseup(e) {
						drag = false;
					}
				});
				return this.element;
			}
		}, {
			key: 'toggleMuted',
			value: function toggleMuted() {
				var video = this.player.video;
	
	
				video.muted = !video.muted;
			}
		}, {
			key: 'getPosition',
			value: function getPosition(y) {
				return (y - this.line.offset().top) / this.line.height();
			}
		}, {
			key: 'onClick',
			value: function onClick(e) {
				_get(VolumeControl.prototype.__proto__ || Object.getPrototypeOf(VolumeControl.prototype), 'onClick', this).call(this, e);
				//todo: lea_alex kostil'
				if (e.target === this.icon.element[0]) {
					this.toggleMuted();
				}
			}
		}, {
			key: 'onPlayerInited',
			value: function onPlayerInited() {
				if (!this.player.video.featureControlVolume) {
					this.element.hide();
					return;
				}
				this.value = this.player.video.defaultVolume;
			}
		}, {
			key: 'value',
			set: function set(value) {
				this.icon.iconName = this.player.calcVolumeIcon(value);
	
				var p = Math.round(value * 100).toString() + '%';
				this.active.css('height', p);
				this.marker.css('bottom', p);
			}
		}]);
	
		return VolumeControl;
	}(_ControlDropdown3.default);
	
	_Component2.default.registerComponent('VolumeControl', VolumeControl);
	_Control2.default.registerControl('volume', VolumeControl);
	exports.default = VolumeControl;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file ControlDropdown.js
	 */
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _Control2 = __webpack_require__(3);
	
	var _Control3 = _interopRequireDefault(_Control2);
	
	var _Component = __webpack_require__(4);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	var _browser = __webpack_require__(8);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * @class ControlDropdown
	 * @param {Player} player Main player
	 * @param {Object} [options]
	 * @property {jQuery} dropdownContent Content of popup
	 * @extends Control
	 */
	var ControlDropdown = function (_Control) {
		_inherits(ControlDropdown, _Control);
	
		function ControlDropdown(player) {
			var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
			_classCallCheck(this, ControlDropdown);
	
			options = _jquery2.default.extend({}, {
				tag: 'div'
			}, options);
	
			var _this = _possibleConstructorReturn(this, (ControlDropdown.__proto__ || Object.getPrototypeOf(ControlDropdown)).call(this, player, options));
	
			_this._opened = false;
			_this.element.on('mouseenter', _this.open.bind(_this));
			_this.element.on('mouseleave', _this.close.bind(_this));
			if (_browser.IS_MOBILE) {
				_this.element.on('tap', _this.toggle.bind(_this));
				(0, _jquery2.default)(document).on('touchend touchstart click', _this.onDocumentEvents.bind(_this));
			}
			return _this;
		}
	
		/**
	  * @override
	  */
	
	
		_createClass(ControlDropdown, [{
			key: 'createElement',
			value: function createElement() {
				_get(ControlDropdown.prototype.__proto__ || Object.getPrototypeOf(ControlDropdown.prototype), 'createElement', this).call(this);
				this.dropdownContent = (0, _jquery2.default)('<div />').addClass('control-dropdown__content');
				this.element.append(this.dropdownContent);
			}
	
			/**
	   * @override
	   */
	
		}, {
			key: 'buildCSSClass',
			value: function buildCSSClass() {
				return 'control-dropdown ' + _get(ControlDropdown.prototype.__proto__ || Object.getPrototypeOf(ControlDropdown.prototype), 'buildCSSClass', this).call(this);
			}
	
			/**
	   * @override
	   */
	
		}, {
			key: 'onClick',
			value: function onClick(e) {
				if ((0, _jquery2.default)(e.target).closest(this.dropdownContent).length > 0) {
					return;
				}
	
				_get(ControlDropdown.prototype.__proto__ || Object.getPrototypeOf(ControlDropdown.prototype), 'onClick', this).call(this, e);
			}
		}, {
			key: 'toggle',
			value: function toggle() {
				if (this.disable) true;
				if (this._opened) {
					this.close();
				} else {
					this.open();
				}
			}
		}, {
			key: 'open',
			value: function open() {
				if (this.disable) return;
				this._opened = true;
				this.dropdownContent.show();
			}
		}, {
			key: 'close',
			value: function close() {
				if (this.disable) return;
				this._opened = false;
				this.dropdownContent.hide();
			}
		}, {
			key: 'onDocumentEvents',
			value: function onDocumentEvents(e) {
				if (!((0, _jquery2.default)(e.target).closest(this.element).length > 0) && !((0, _jquery2.default)(e.target).closest(this.dropdownContent).length > 0)) {
					if (this._opened) {
						this.close();
					}
				}
			}
		}]);
	
		return ControlDropdown;
	}(_Control3.default);
	
	_Component2.default.registerComponent('ControlDropdown', ControlDropdown);
	_Control3.default.registerControl('dropdown', ControlDropdown);
	exports.default = ControlDropdown;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file TimelineControl.js
	 */
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _Component = __webpack_require__(4);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	var _Control2 = __webpack_require__(3);
	
	var _Control3 = _interopRequireDefault(_Control2);
	
	var _ControlText = __webpack_require__(22);
	
	var _ControlText2 = _interopRequireDefault(_ControlText);
	
	var _BufferedRanges = __webpack_require__(23);
	
	var _BufferedRanges2 = _interopRequireDefault(_BufferedRanges);
	
	var _Marker = __webpack_require__(24);
	
	var _Marker2 = _interopRequireDefault(_Marker);
	
	var _utils = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * @param {Player} player Main player
	 * @class TimelineControl
	 * @property {ControlText} currentTime Current time's text
	 * @property {ControlText} totalTime Total time
	 * @property {jQuery} line
	 * @extends Control
	 */
	var TimelineControl = function (_Control) {
		_inherits(TimelineControl, _Control);
	
		function TimelineControl(player) {
			var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
			_classCallCheck(this, TimelineControl);
	
			options = _jquery2.default.extend({}, {
				name: 'timeline',
				className: 'control-timeline timeline-container',
				tag: 'div'
			}, options);
	
			var _this = _possibleConstructorReturn(this, (TimelineControl.__proto__ || Object.getPrototypeOf(TimelineControl)).call(this, player, options));
	
			_this.marker.element.on('leplayer_mousemove', _this._onMarkerMousemove.bind(_this));
	
			_this.marker.element.on('leplayer_mousedown', _this._onMarkerMousedown.bind(_this));
	
			_this.player.on('sectionsinit', _this.onSectionsInit.bind(_this));
	
			_this.player.on('timeupdate', _this._onTimeUpdate.bind(_this));
	
			// this.player.on('timeupdateload', this._onTimeUpdate.bind(this))
	
			_this.player.on('durationchange', _this._onDurationChange.bind(_this));
			return _this;
		}
	
		_createClass(TimelineControl, [{
			key: '_onMarkerMousedown',
			value: function _onMarkerMousedown(e) {
				this.markerShadow.element.hide();
			}
		}, {
			key: '_onMarkerMousemove',
			value: function _onMarkerMousemove(e, data) {
				var x = data.x;
				var p = this.getPosition(x);
				var video = this.player.video;
				if (p > 0 && p < 1) {
					this.marker.markerTime.show().html((0, _utils.secondsToTime)(video.duration * p));
					// video.currentTime = video.duration * p
				}
			}
		}, {
			key: '_onTimeUpdate',
			value: function _onTimeUpdate(e, data) {
				var duration = this.player.video.duration;
				var currentTime = this.player.currentTime;
				if (data && data.currentTime !== undefined) {
					currentTime = data.currentTime;
				}
				var percent = currentTime / duration;
	
				if (isNaN(duration) && currentTime === 0) percent = 0;
	
				this.move({ percent: percent, currentTime: currentTime });
			}
	
			/**
	   * @override
	   */
	
		}, {
			key: 'createElement',
			value: function createElement() {
				var _this2 = this;
	
				_get(TimelineControl.prototype.__proto__ || Object.getPrototypeOf(TimelineControl.prototype), 'createElement', this).call(this);
				var video = this.player.video;
	
				this.drag = false;
	
				// Create labels
				this.currentTime = new _ControlText2.default(this.player, { className: 'time-current' });
				this.currentTime.text = '00:00';
				this.totalTime = new _ControlText2.default(this.player, { className: 'time-total' });
	
				// Create line with markers and played range
	
				this.marker = new _Marker2.default(this.player, {
					drag: true
				});
	
				this.markerShadow = new _Marker2.default(this.player, {
					className: 'shadow'
				});
				this.markerShadow.element.hide();
	
				// Played ranges
				this.playedRanges = (0, _jquery2.default)('<div />').addClass('time-played');
	
				// Buffered ranges
				this.bufferedRanges = new _BufferedRanges2.default(this.player).element;
	
				this.line = (0, _jquery2.default)('<div />');
				this.emitTapEvents(this.line);
	
				this.line.addClass('timeline').append(this.marker.element).append(this.markerShadow.element).append(this.playedRanges).append(this.bufferedRanges).on({
					mousemove: function mousemove(e) {
						if (_this2.marker.drag) return;
	
						var p = _this2.getPosition(e.pageX);
						if (p > 0 && p < 1) {
							_this2.markerShadow.element.show().css('left', p * 100 + '%');
							_this2.markerShadow.markerTime.show().html((0, _utils.secondsToTime)(video.duration * p));
						} else {
							_this2.markerShadow.element.hide();
						}
					},
	
					mouseleave: function mouseleave(e) {
						if (_this2.drag) return;
						_this2.markerShadow.element.hide();
					},
	
					mousedown: function mousedown(e) {},
	
					click: this._onLineClick.bind(this),
					tap: this._onLineClick.bind(this)
				});
	
				this.element.addClass('timeline-container').append((0, _jquery2.default)('<div />').addClass('timeline-subcontainer').append(this.currentTime.element).append(this.line).append(this.totalTime.element));
			}
	
			/**
	   * @override
	   */
	
		}, {
			key: 'onClick',
			value: function onClick(e) {
				e.preventDefault();
			}
		}, {
			key: '_onLineClick',
			value: function _onLineClick(e) {
				if (this.drag) return;
				var video = this.player.video;
				this.move({ percent: this.getPosition(e.pageX) });
				video.currentTime = video.duration * this.getPosition(e.pageX);
			}
		}, {
			key: 'onSectionsInit',
			value: function onSectionsInit(e) {
				var duration = this.player.video.duration;
				if (isNaN(duration)) {
					return;
				}
				if (this.player.sections) {
					this.updateSectionRanges(this.player.sections.items);
				}
			}
		}, {
			key: 'updateSectionRanges',
			value: function updateSectionRanges(items) {
				if (this.sections == null || this.sections.length === 0) {
					this.sections = this.createSectionRanges(items);
					this.line.append(this.sections);
				} else {
					this.sections.html(this.createSectionRanges(items));
				}
			}
		}, {
			key: 'createSectionRanges',
			value: function createSectionRanges(items) {
				var duration = this.player.video.duration;
				var result = (0, _jquery2.default)('<div />').addClass('leplayer-timeline-sections');
				items.forEach(function (section) {
					var length = section.end - section.begin;
					var item = (0, _jquery2.default)('<div />').addClass('leplayer-timeline-section').css({
						width: length / duration * 100 + '%',
						left: section.begin / duration * 100 + '%'
					});
					result.append(item);
				});
				return result;
			}
		}, {
			key: 'getPosition',
			value: function getPosition(x) {
				return (x - this.line.offset().left) / this.line.width();
			}
	
			/**
	   * Move marker on timeline on percent from argument, not from video.currentTime
	   * @param {Number} percent The percent which you want to move marker on timeline
	   */
	
		}, {
			key: 'move',
			value: function move(_ref) {
				var percent = _ref.percent,
				    currentTime = _ref.currentTime;
	
				if (currentTime === undefined) {
					currentTime = this.player.video.duration * percent;
				}
	
				if (isNaN(currentTime)) return;
				percent = percent * 100;
				this.marker.element.css('left', percent + '%');
				this.playedRanges.css('width', percent + '%');
				this.currentTime.text = (0, _utils.secondsToTime)(currentTime);
			}
		}, {
			key: 'updateLabels',
			value: function updateLabels() {
				var video = this.player.video;
				this.totalTime.text = (0, _utils.secondsToTime)(0, Math.floor(video.duration / 3600) > 0);
	
				// const width = this.totalTime.element.width();
	
				this.totalTime.text = (0, _utils.secondsToTime)(video.duration);
				this.currentTime.text = (0, _utils.secondsToTime)(video.currentTime || 0);
				// this.currentTime.element.css({
				// 	width
				// })
			}
	
			/**
	   * @override
	   */
	
		}, {
			key: 'onPlayerInited',
			value: function onPlayerInited(e) {
				this.updateLabels();
				if (this.player.sections) {
					this.updateSectionRanges(this.player.sections.items);
				}
			}
		}, {
			key: '_initWatchBuffer',
			value: function _initWatchBuffer() {
				var _this3 = this;
	
				clearInterval(this.watchBufferInterval);
				var video = this.player.video;
				var updateProgressBar = function updateProgressBar() {
					var END = 1;
					var START = 0;
					var result = (0, _jquery2.default)('');
					video.loaded.forEach(function (item) {
						var domItem = (0, _jquery2.default)('<div />').addClass('time-buffered');
						domItem.css({
							left: item[START] * 100 + '%',
							width: (item[END] - item[START]) * 100 + '%'
						});
						result = result.add(domItem);
					});
					_this3.buffered.html(result);
					if (video.loaded.length && 1 - video.loadedSize <= 0.05) {
						clearInterval(_this3.watchBufferInterval);
					}
				};
				this.watchBufferInterval = setInterval(updateProgressBar, 500);
			}
	
			/**
	   * On durationchange event handler
	   */
	
		}, {
			key: '_onDurationChange',
			value: function _onDurationChange() {
				this.updateLabels();
				if (this.player.sections) {
					this.updateSectionRanges(this.player.sections.items);
				}
			}
		}]);
	
		return TimelineControl;
	}(_Control3.default);
	
	_Component2.default.registerComponent('TimelineControl', TimelineControl);
	_Control3.default.registerControl('timeline', TimelineControl);
	exports.default = TimelineControl;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file ControlText.js
	 */
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _Control2 = __webpack_require__(3);
	
	var _Control3 = _interopRequireDefault(_Control2);
	
	var _Component = __webpack_require__(4);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * @param {Player} player Main player
	 * @class ControlText
	 * @exnteds Control
	 */
	var ControlText = function (_Control) {
		_inherits(ControlText, _Control);
	
		function ControlText(player) {
			var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
			_classCallCheck(this, ControlText);
	
			options = _jquery2.default.extend({}, {
				className: '',
				tag: 'div'
			}, options);
			return _possibleConstructorReturn(this, (ControlText.__proto__ || Object.getPrototypeOf(ControlText)).call(this, player, options));
		}
	
		/**
	  * @override
	  */
	
	
		_createClass(ControlText, [{
			key: 'createElement',
			value: function createElement() {
				_get(ControlText.prototype.__proto__ || Object.getPrototypeOf(ControlText.prototype), 'createElement', this).call(this);
			}
	
			/**
	   * @override
	   */
	
		}, {
			key: 'buildCSSClass',
			value: function buildCSSClass() {
				return 'control-text ' + this.options.className;
			}
	
			/**
	   * Setter of text field
	   * @public
	   * @param {String} value
	   */
	
		}, {
			key: 'text',
			set: function set(value) {
				this._text = value;
				this.element.html(value);
			},
			get: function get() {
				return this._text;
			}
		}]);
	
		return ControlText;
	}(_Control3.default);
	
	_Component2.default.registerComponent('ControlText', ControlText);
	_Control3.default.registerControl('text', ControlText);
	exports.default = ControlText;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file BufferedRanges.js
	 */
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _utils = __webpack_require__(7);
	
	var _Component2 = __webpack_require__(4);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * @param {Player} player Main player
	 * @class BufferedRanges
	 * @extends Control
	 */
	
	var BufferedRanges = function (_Component) {
		_inherits(BufferedRanges, _Component);
	
		function BufferedRanges(player, options) {
			_classCallCheck(this, BufferedRanges);
	
			var _this = _possibleConstructorReturn(this, (BufferedRanges.__proto__ || Object.getPrototypeOf(BufferedRanges)).call(this, player, options));
	
			_this.player.on('progress', _this.update.bind(_this));
			_this.player.on('seeked', _this.update.bind(_this));
			_this.player.on('loadstart', _this.update.bind(_this));
			return _this;
		}
	
		/**
	  * @override
	  */
	
	
		_createClass(BufferedRanges, [{
			key: 'createElement',
			value: function createElement() {
				this.range = (0, _utils.createEl)('div', {
					className: 'leplayer-timeline-buffered__range'
				});
	
				return this.element = (0, _utils.createEl)('div', {
					className: 'leplayer-timeline-buffered'
				}).append(this.range);
			}
		}, {
			key: 'update',
			value: function update() {
				var buffered = this.player.video.buffered;
				var duration = this.player.video.duration;
				if (buffered == null) return;
	
				var end = 0;
				if (buffered.length > 0) {
					end = buffered.end(buffered.length - 1);
				}
	
				var width = 0;
				if (duration > 0) {
					width = (0, _utils.percentify)(end, duration) * 100 + '%';
				}
				this.range.css({ width: width });
			}
		}]);
	
		return BufferedRanges;
	}(_Component3.default);
	
	_Component3.default.registerComponent('BufferedRanges', BufferedRanges);
	exports.default = BufferedRanges;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _Component2 = __webpack_require__(4);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Marker = function (_Component) {
		_inherits(Marker, _Component);
	
		function Marker(player, options) {
			_classCallCheck(this, Marker);
	
			options = _jquery2.default.extend({}, {
				drag: false,
				className: ''
			}, options);
	
			var _this = _possibleConstructorReturn(this, (Marker.__proto__ || Object.getPrototypeOf(Marker)).call(this, player, options));
	
			_this.element.on('mousedown', _this._onMousedown.bind(_this));
	
			(0, _jquery2.default)(document).on({
	
				mousemove: function mousemove(e) {
					if (!_this.drag) return;
					_this.element.trigger('leplayer_mousemove', { x: e.pageX });
				},
	
				mouseup: function mouseup(e) {
					if (!_this.drag) return;
					_this.drag = false;
					_this.markerTime.hide();
					_this.element.trigger('leplayer_mouseup', { x: e.pageX });
				}
			});
			return _this;
		}
	
		_createClass(Marker, [{
			key: '_onMousedown',
			value: function _onMousedown(e) {
				if (e.which !== 1) return;
				e.preventDefault();
				if (this.options.drag) {
					this.drag = true;
				}
				this.element.trigger('leplayer_mousedown');
			}
		}, {
			key: 'createElement',
			value: function createElement() {
				// Marker of current time on timeline
				this.markerTime = (0, _jquery2.default)('<div />').addClass('time').hide();
	
				return this.element = (0, _jquery2.default)('<div />').addClass('time-marker ' + this.options.className).append(this.markerTime);
			}
		}, {
			key: 'drag',
			set: function set(value) {
				this._drag = value;
				this.element.toggleClass('time-marker--drag', value);
			},
			get: function get() {
				return this._drag;
			}
		}]);
	
		return Marker;
	}(_Component3.default);
	
	_Component3.default.registerComponent('Marker', Marker);
	exports.default = Marker;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file SectionControl.js
	 */
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _Component = __webpack_require__(4);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	var _Control = __webpack_require__(3);
	
	var _Control2 = _interopRequireDefault(_Control);
	
	var _ControlCheckbox2 = __webpack_require__(26);
	
	var _ControlCheckbox3 = _interopRequireDefault(_ControlCheckbox2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * @class SectionControl
	 * @param {Player} player Main player
	 * @param {Object} [options]
	 * @param {Boolean} [options.checked=true]
	 * @extends ControlCheckbox
	 */
	var SectionControl = function (_ControlCheckbox) {
		_inherits(SectionControl, _ControlCheckbox);
	
		function SectionControl(player) {
			var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
			_classCallCheck(this, SectionControl);
	
			options = _jquery2.default.extend({}, {
				iconName: 'list-ul',
				className: 'section',
				name: 'section',
				title: 'Показать/скрыть секции',
				disable: true
			}, options);
	
			var _this = _possibleConstructorReturn(this, (SectionControl.__proto__ || Object.getPrototypeOf(SectionControl)).call(this, player, options));
	
			_this.player.on('sectionsinit', _this._onSectionsInit.bind(_this));
			_this.player.on('sectionstoggle', _this._onSectionToggle.bind(_this));
			return _this;
		}
	
		_createClass(SectionControl, [{
			key: 'onChecked',
			value: function onChecked(e, data) {
				_get(SectionControl.prototype.__proto__ || Object.getPrototypeOf(SectionControl.prototype), 'onChecked', this).call(this, e);
				this.player.toggleSections(data.checked);
			}
		}, {
			key: '_onSectionToggle',
			value: function _onSectionToggle(e, data) {
				var isVisible = data.isVisible;
	
				if (this.checked !== isVisible) {
					this.checked = isVisible;
				}
			}
		}, {
			key: '_onSectionsInit',
			value: function _onSectionsInit(e) {
				this.options.disable = this.disable = false;
				this.checked = true;
			}
		}]);
	
		return SectionControl;
	}(_ControlCheckbox3.default);
	
	_Component2.default.registerComponent('SectionControl', SectionControl);
	_Control2.default.registerControl('section', SectionControl);
	exports.default = SectionControl;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file control-checkbox.js
	 */
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Control2 = __webpack_require__(3);
	
	var _Control3 = _interopRequireDefault(_Control2);
	
	var _Component = __webpack_require__(4);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * @param {Player} player Main player
	 * @param {Object} [options]
	 * @param {boolean} [options.checked=false]
	 * @class ControlCheckbox Toggable control
	 */
	var ControlCheckbox = function (_Control) {
		_inherits(ControlCheckbox, _Control);
	
		function ControlCheckbox(player) {
			var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
			_classCallCheck(this, ControlCheckbox);
	
			var _this = _possibleConstructorReturn(this, (ControlCheckbox.__proto__ || Object.getPrototypeOf(ControlCheckbox)).call(this, player, options));
	
			_this.checked = _this.options.checked || false;
			_this.element.on('leplayer_checked', _this.onChecked.bind(_this));
			return _this;
		}
	
		/**
	  * Setter for checked property
	  * @public
	  * @param {boolean} val
	  */
	
	
		_createClass(ControlCheckbox, [{
			key: 'onClick',
	
	
			/**
	   * @override
	   */
			value: function onClick(e) {
				_get(ControlCheckbox.prototype.__proto__ || Object.getPrototypeOf(ControlCheckbox.prototype), 'onClick', this).call(this, e);
				this.checked = !this.checked;
			}
	
			/**
	   * On checked event handler
	   *
	   * @param {Event} e
	   * @param {Object} data
	   */
	
		}, {
			key: 'onChecked',
			value: function onChecked(e, data) {}
	
			/**
	   * @override
	   */
	
		}, {
			key: 'buildCSSClass',
			value: function buildCSSClass() {
				return 'control-checkbox ' + _get(ControlCheckbox.prototype.__proto__ || Object.getPrototypeOf(ControlCheckbox.prototype), 'buildCSSClass', this).call(this);
			}
		}, {
			key: 'checked',
			set: function set(val) {
				if (this.disable) {
					return;
				}
				val = !!val;
				this._checked = val;
				this.element.toggleClass('control-checkbox--checked', val);
				this.element.trigger('leplayer_checked', { checked: val });
			}
	
			/**
	   * Getter for checked propery
	   * @public
	   * @return {boolean}
	   */
			,
			get: function get() {
				return this._checked;
			}
		}]);
	
		return ControlCheckbox;
	}(_Control3.default);
	
	_Component2.default.registerComponent('ControlCheckbox', ControlCheckbox);
	_Control3.default.registerControl('checkbox', ControlCheckbox);
	exports.default = ControlCheckbox;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file FullscreenControl.js
	 */
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _Component = __webpack_require__(4);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	var _Control2 = __webpack_require__(3);
	
	var _Control3 = _interopRequireDefault(_Control2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * @param {Player} player Main player
	 * @class FullscreenControl
	 * @extends Control
	 */
	var FullscreenControl = function (_Control) {
		_inherits(FullscreenControl, _Control);
	
		function FullscreenControl(player) {
			var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
			_classCallCheck(this, FullscreenControl);
	
			options = _jquery2.default.extend({}, {
				iconName: 'arrows-alt',
				className: 'fullscreen',
				title: 'Развернуть/свернуть на полный экран',
				name: 'fullscreen'
			}, options);
			return _possibleConstructorReturn(this, (FullscreenControl.__proto__ || Object.getPrototypeOf(FullscreenControl)).call(this, player, options));
		}
	
		/**
	  * @override
	  */
	
	
		_createClass(FullscreenControl, [{
			key: 'onClick',
			value: function onClick(e) {
				_get(FullscreenControl.prototype.__proto__ || Object.getPrototypeOf(FullscreenControl.prototype), 'onClick', this).call(this, e);
				this.player.toggleFullscreen();
			}
		}]);
	
		return FullscreenControl;
	}(_Control3.default);
	
	_Component2.default.registerComponent('FullscreenControl', FullscreenControl);
	_Control3.default.registerControl('fullscreen', FullscreenControl);
	exports.default = FullscreenControl;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file RateControl.js
	 */
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _Component = __webpack_require__(4);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	var _Control2 = __webpack_require__(3);
	
	var _Control3 = _interopRequireDefault(_Control2);
	
	var _ControlText = __webpack_require__(22);
	
	var _ControlText2 = _interopRequireDefault(_ControlText);
	
	var _cookie = __webpack_require__(16);
	
	var _cookie2 = _interopRequireDefault(_cookie);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * @class RateControl
	 * @param {Player} player Main player
	 * @param {Object} [options]
	 * @property {Control} downControl  Down rate control
	 * @property {Control} upControl  Up rate control
	 * @property {ControlText} currentRate Control of cuurent rate
	 * @extends Control
	 */
	var RateControl = function (_Control) {
		_inherits(RateControl, _Control);
	
		function RateControl(player) {
			var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
			_classCallCheck(this, RateControl);
	
			options = _jquery2.default.extend({}, {
				className: 'control-container',
				tag: 'div'
			}, options);
	
			var _this = _possibleConstructorReturn(this, (RateControl.__proto__ || Object.getPrototypeOf(RateControl)).call(this, player, options));
	
			_this.player.on('ratechange', function () {
				_this.update();
			});
			return _this;
		}
	
		/**
	  * @override
	  */
	
	
		_createClass(RateControl, [{
			key: 'createElement',
			value: function createElement() {
				_get(RateControl.prototype.__proto__ || Object.getPrototypeOf(RateControl.prototype), 'createElement', this).call(this);
				var video = this.player.video;
	
				this.downControl = new _Control3.default(this.player, {
					className: 'rate-down',
					name: 'rate-down',
					iconName: 'backward',
					collection: this.options.collection,
					title: 'Уменьшить скорость проигрывания',
					onClick: function onClick(e) {
						video.decreaseRate();
					}
				});
	
				this.upControl = new _Control3.default(this.player, {
					className: 'rate-up',
					name: 'rate-up',
					iconName: 'forward',
					collection: this.options.collection,
					title: 'Увеличить скорость проигрывания',
					onClick: function onClick(e) {
						video.increaseRate();
					}
				});
	
				this.currentRate = new _ControlText2.default(this.player, {
					className: 'rate-current',
					onClick: function onClick(e) {
						video.rate = this.player.options.rate.default;
					}
				});
	
				this.element.append(this.downControl.element).append(this.currentRate.element).append(this.upControl.element);
			}
	
			/**
	   * @override
	   */
	
		}, {
			key: 'buildCSSClass',
			value: function buildCSSClass() {
				return this.options.className;
			}
	
			/**
	   * @override
	   */
	
		}, {
			key: 'onPlayerInited',
			value: function onPlayerInited() {
				this.update();
			}
	
			/**
	   *
	   */
	
		}, {
			key: 'onClick',
			value: function onClick(e) {
				e.preventDefault();
			}
		}, {
			key: 'update',
			value: function update(value) {
				var video = this.player.video;
	
				value = value || video.rate;
				value = parseFloat(value).toFixed(2).toString().replace(/,/g, '.');
				this.currentRate.text = '×' + value;
	
				if (this.disable) return;
	
				if (video.rate <= video.rateMin) {
					this.downControl.disable = true;
				} else {
					this.downControl.disable = false;
				}
	
				if (video.rate >= video.rateMax) {
					this.upControl.disable = true;
				} else {
					this.upControl.disable = false;
				}
			}
		}, {
			key: 'init',
			value: function init() {
				var rate = _cookie2.default.get('rate', this.player.options.rate.default);
				this.show(rate);
			}
		}, {
			key: 'disable',
			set: function set(value) {
				this._disable = value;
				this.downControl.disable = value;
				this.upControl.disable = value;
			}
		}]);
	
		return RateControl;
	}(_Control3.default);
	
	_Component2.default.registerComponent('RateControl', RateControl);
	_Control3.default.registerControl('rate', RateControl);
	exports.default = RateControl;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file BackwardControl.js
	 *
	 * Backward control
	 */
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _Component = __webpack_require__(4);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	var _Control2 = __webpack_require__(3);
	
	var _Control3 = _interopRequireDefault(_Control2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * @param {Player} player Main player
	 * @param {Object} [options={}] Options
	 * @class BackwardControl
	 * @extends Control
	 */
	var BackwardControl = function (_Control) {
		_inherits(BackwardControl, _Control);
	
		function BackwardControl(player) {
			var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
			_classCallCheck(this, BackwardControl);
	
			options = _jquery2.default.extend({}, {
				iconName: 'undo',
				className: 'backward',
				name: 'backward',
				title: '\u041E\u0442\u043C\u043E\u0442\u0430\u0442\u044C \u043D\u0430\u0437\u0430\u0434 \u043D\u0430 ' + player.options.playback.step.medium + ' \u0441\u0435\u043A\u0443\u043D\u0434',
				disable: true
			}, options);
	
			var _this = _possibleConstructorReturn(this, (BackwardControl.__proto__ || Object.getPrototypeOf(BackwardControl)).call(this, player, options));
	
			_this.player.on('firstplay', function () {
				return _this.disable = false;
			});
			return _this;
		}
	
		/**
	  * @override
	  */
	
	
		_createClass(BackwardControl, [{
			key: 'onClick',
			value: function onClick(e) {
				_get(BackwardControl.prototype.__proto__ || Object.getPrototypeOf(BackwardControl.prototype), 'onClick', this).call(this, e);
				this.player.video.currentTime -= this.player.options.playback.step.medium;
				this.player.splashIcon.show('undo');
			}
		}]);
	
		return BackwardControl;
	}(_Control3.default);
	
	_Component2.default.registerComponent('BackwardControl', BackwardControl);
	_Control3.default.registerControl('backward', BackwardControl);
	exports.default = BackwardControl;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file SourceControl.js
	 */
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _Component = __webpack_require__(4);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	var _Control = __webpack_require__(3);
	
	var _Control2 = _interopRequireDefault(_Control);
	
	var _ControlContainer2 = __webpack_require__(31);
	
	var _ControlContainer3 = _interopRequireDefault(_ControlContainer2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * @class SourceControl
	 * @param {Player} player Main player
	 * @extends ControlConainer
	 */
	var SourceControl = function (_ControlContainer) {
		_inherits(SourceControl, _ControlContainer);
	
		// TODO: Делать disable/enable после options init
		function SourceControl(player) {
			var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
			_classCallCheck(this, SourceControl);
	
			options = _jquery2.default.extend({}, {
				name: 'source',
				iconName: 'bullseye',
				title: 'Качество',
				className: 'source-control',
				disable: true
			}, options);
	
			var _this = _possibleConstructorReturn(this, (SourceControl.__proto__ || Object.getPrototypeOf(SourceControl)).call(this, player, options));
	
			_this.player.on('playing', _this.update.bind(_this));
			_this.player.on('qualitychange', _this.update.bind(_this));
			return _this;
		}
	
		_createClass(SourceControl, [{
			key: 'onItemClick',
			value: function onItemClick(e) {
				e.preventDefault();
	
				var item = (0, _jquery2.default)(e.target);
				var video = this.player.video;
				video.playbackQuality = item.data('name');
	
				this.dropdownContent.hide();
			}
		}, {
			key: 'onPlayerInited',
			value: function onPlayerInited(e, data) {
				this.update();
			}
		}, {
			key: 'getData',
			value: function getData() {
				return this.player.video.getAvailableQualityLevels();
			}
		}, {
			key: 'getCurrentValue',
			value: function getCurrentValue() {
				return this.player.video.playbackQuality;
			}
		}]);
	
		return SourceControl;
	}(_ControlContainer3.default);
	
	_Component2.default.registerComponent('SourceControl', SourceControl);
	_Control2.default.registerControl('source', SourceControl);
	exports.default = SourceControl;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file ControlContainer.js
	 */
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _Component = __webpack_require__(4);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	var _Control = __webpack_require__(3);
	
	var _Control2 = _interopRequireDefault(_Control);
	
	var _ControlDropdown2 = __webpack_require__(20);
	
	var _ControlDropdown3 = _interopRequireDefault(_ControlDropdown2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * @param {Player} player Main player
	 * @class ControlContainer
	 * @extends ControlDropdown
	 */
	var ControlContainer = function (_ControlDropdown) {
		_inherits(ControlContainer, _ControlDropdown);
	
		function ControlContainer(player) {
			var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
			_classCallCheck(this, ControlContainer);
	
			var _this = _possibleConstructorReturn(this, (ControlContainer.__proto__ || Object.getPrototypeOf(ControlContainer)).call(this, player, options));
	
			_this._active = null;
			/**
	   * List of items
	   *
	   * @public
	   * @type {Array}
	   */
			_this.list = [];
			return _this;
		}
	
		/**
	  * Get item of container by index
	  *
	  * @public
	  * @param {number} index
	  */
	
	
		_createClass(ControlContainer, [{
			key: 'getByIndex',
			value: function getByIndex(index) {
				return this.list[index];
			}
	
			/**
	   * Set item active by index
	   *
	   * @public
	   * @param {number} index
	   */
	
		}, {
			key: 'setActiveByIndex',
			value: function setActiveByIndex(index) {
				if (this.active) {
					this.active.removeClass('control-container__item--active');
				}
				this._active = this.list[index].addClass('control-container__item--active');
				return this._active;
			}
	
			/**
	   * Getter of active field
	   *
	   * @public
	   * @type {jQuery}
	   */
	
		}, {
			key: 'addItem',
	
	
			/**
	   * @public
	   * @param {String|jQuery} Content of item
	   * @param {Object} Data of item
	   */
			value: function addItem(content, data) {
				var item = (0, _jquery2.default)('<div />').addClass('control-container__item').data(data).attr('title', data.tooltip).on('click tap', this.onItemClick.bind(this)).append(content);
	
				this.list = this.list.concat(item);
	
				this.dropdownContent.append(item);
	
				this.emitTapEvents(item);
	
				return item;
			}
	
			/**
	   * On item click event handler
	   * @public
	   * @param {Event} e
	   */
	
		}, {
			key: 'onItemClick',
			value: function onItemClick(e) {
				this.active = e.currentTarget;
			}
	
			/**
	   * @override
	   */
	
		}, {
			key: 'buildCSSClass',
			value: function buildCSSClass() {
				return _get(ControlContainer.prototype.__proto__ || Object.getPrototypeOf(ControlContainer.prototype), 'buildCSSClass', this).call(this) + ' control-container';
			}
		}, {
			key: 'update',
			value: function update() {
				var _this2 = this;
	
				var data = this.getData();
				var currentValue = this.getCurrentValue();
	
				if (data == null || data.length === 0) {
					this.disable = true;
					return;
				}
	
				this.list = [];
				this.dropdownContent.empty();
	
				data.forEach(function (item) {
					var elem = _this2.addItem(item.title, item);
					if (currentValue && currentValue.name === item.name) {
	
						_this2.active = elem;
					}
				});
				this.disable = false;
			}
		}, {
			key: 'active',
			get: function get() {
				var _this3 = this;
	
				if (this._active && this._active.length > 0) {
					return this._active;
				}
				this.list.forEach(function (item) {
					if (item.hasClass('control-container__item--active')) {
						_this3._active = item;
					}
				});
				return this._active;
			}
	
			/**
	   * Setter of active field
	   *
	   * @public
	   * @param {jQuery} Item of container
	   */
			,
			set: function set(element) {
				if (this.active) {
					this.active.removeClass('control-container__item--active');
				}
				if (element) {
					(0, _jquery2.default)(element).addClass('control-container__item--active');
				}
				this._active = element;
				this.close();
				return this._active;
			}
		}]);
	
		return ControlContainer;
	}(_ControlDropdown3.default);
	
	_Component2.default.registerComponent('ControlContainer', ControlContainer);
	_Control2.default.registerControl('container', ControlContainer);
	exports.default = ControlContainer;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file SubtitleControl.js
	 *
	 * Subtitle control
	 */
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _Component = __webpack_require__(4);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	var _Control = __webpack_require__(3);
	
	var _Control2 = _interopRequireDefault(_Control);
	
	var _ControlContainer2 = __webpack_require__(31);
	
	var _ControlContainer3 = _interopRequireDefault(_ControlContainer2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * @param {Player} player Main player
	 * @class SubtitleControl
	 * @extends ControlContainer
	 */
	var SubtitleControl = function (_ControlContainer) {
		_inherits(SubtitleControl, _ControlContainer);
	
		function SubtitleControl(player) {
			var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
			_classCallCheck(this, SubtitleControl);
	
			options = _jquery2.default.extend({}, {
				iconName: 'commenting-o',
				title: 'Субтитры',
				name: 'subtitle',
				className: 'subtitle-control',
				disable: true
			}, options);
	
			var _this = _possibleConstructorReturn(this, (SubtitleControl.__proto__ || Object.getPrototypeOf(SubtitleControl)).call(this, player, options));
	
			_this.player.on('playing', _this.update.bind(_this));
			_this.player.on('trackschange', _this.update.bind(_this));
			return _this;
		}
	
		_createClass(SubtitleControl, [{
			key: 'onClick',
			value: function onClick(e) {
				_get(SubtitleControl.prototype.__proto__ || Object.getPrototypeOf(SubtitleControl.prototype), 'onClick', this).call(this, e);
				var video = this.player.video;
				video.track = null;
			}
		}, {
			key: 'onItemClick',
			value: function onItemClick(e) {
				e.preventDefault();
				e.stopPropagation();
	
				var item = (0, _jquery2.default)(e.target);
				var video = this.player.video;
				if (item.data()) {
					video.track = item.data();
				}
	
				this.dropdownContent.hide();
			}
		}, {
			key: 'onPlayerInited',
			value: function onPlayerInited(e, data) {
				this.update();
			}
		}, {
			key: 'update',
			value: function update() {
				_get(SubtitleControl.prototype.__proto__ || Object.getPrototypeOf(SubtitleControl.prototype), 'update', this).call(this);
				var hasValue = !!(this.getCurrentValue() && this.getCurrentValue().name != null);
				this.element.toggleClass('control-checkbox--checked', hasValue);
			}
		}, {
			key: 'getData',
			value: function getData() {
				return this.player.video.subtitles;
			}
		}, {
			key: 'getCurrentValue',
			value: function getCurrentValue() {
				return this.player.video.track;
			}
		}]);
	
		return SubtitleControl;
	}(_ControlContainer3.default);
	
	_Component2.default.registerComponent('SubtitleControl', SubtitleControl);
	_Control2.default.registerControl('subtitle', SubtitleControl);
	exports.default = SubtitleControl;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file DownloadControl.js
	 *
	 * Download control
	 */
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _Control2 = __webpack_require__(3);
	
	var _Control3 = _interopRequireDefault(_Control2);
	
	var _Component = __webpack_require__(4);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	var _Icon = __webpack_require__(5);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * @param {Player} player Main player
	 * @param {Object} [options]
	 * @class DownloadControl
	 * @exnteds Control
	 */
	var DownloadControl = function (_Control) {
		_inherits(DownloadControl, _Control);
	
		function DownloadControl(player) {
			var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
			_classCallCheck(this, DownloadControl);
	
			options = _jquery2.default.extend({
				title: 'Скачать видео',
				className: 'download',
				name: 'download'
			}, options);
	
			var _this = _possibleConstructorReturn(this, (DownloadControl.__proto__ || Object.getPrototypeOf(DownloadControl)).call(this, player, options));
	
			_this.player.on('loadstart', _this.onLoadStart.bind(_this));
			return _this;
		}
	
		/**
	  * @override
	  */
	
	
		_createClass(DownloadControl, [{
			key: 'createElement',
			value: function createElement() {
				// TODO: Доопределить этот метод, а не переопредлеить
				this.element = (0, _jquery2.default)('<a />').attr({
					href: '',
					target: '_blank',
					download: true,
					title: this.options.title
				}).addClass(this.buildCSSClass()).append(new _Icon2.default(this.player, { iconName: 'download' }).element);
			}
	
			/**
	   * @override
	   */
	
		}, {
			key: 'buildCSSClass',
			value: function buildCSSClass() {
				return '' + _get(DownloadControl.prototype.__proto__ || Object.getPrototypeOf(DownloadControl.prototype), 'buildCSSClass', this).call(this);
			}
	
			/**
	   * Setter of link field
	   * @public
	   * @param {String} value Path for video
	   */
	
		}, {
			key: 'onLoadStart',
			value: function onLoadStart(e, data) {
				this.link = this.player.video.src.url;
			}
		}, {
			key: 'link',
			set: function set(value) {
				var title = this.player.options.title;
				var fileName = void 0;
	
				if (title != null) {
					fileName = decodeURIComponent(title) + '.' + getFileExtension(value);
				} else {
					var parser = document.createElement('a');
					parser.href = value;
					fileName = parser.pathname.split('/');
					fileName = fileName[fileName.length - 1];
				}
	
				this.element.attr({
					href: value,
					download: fileName
				});
			}
		}]);
	
		return DownloadControl;
	}(_Control3.default);
	
	function getFileExtension(fileName) {
		return fileName.split('.').pop();
	}
	
	_Component2.default.registerComponent('DownloadControl', DownloadControl);
	_Control3.default.registerControl('download', DownloadControl);
	exports.default = DownloadControl;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	
	'use strict';
	/**
	 * @file KeybindingInfoControl.js
	 *
	 * Info control
	 */
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _Component = __webpack_require__(4);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	var _Control = __webpack_require__(3);
	
	var _Control2 = _interopRequireDefault(_Control);
	
	var _ControlDropdown2 = __webpack_require__(20);
	
	var _ControlDropdown3 = _interopRequireDefault(_ControlDropdown2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * @param {Player} player Main player
	 * @class KeyBindingInfoControl
	 * @extends ControlDropdown
	 */
	var KeyBindingInfoControl = function (_ControlDropdown) {
		_inherits(KeyBindingInfoControl, _ControlDropdown);
	
		function KeyBindingInfoControl(player, options) {
			_classCallCheck(this, KeyBindingInfoControl);
	
			options = _jquery2.default.extend({}, {
				iconName: 'info',
				title: 'Инфо',
				className: 'info-control',
				name: 'info'
			}, options);
			return _possibleConstructorReturn(this, (KeyBindingInfoControl.__proto__ || Object.getPrototypeOf(KeyBindingInfoControl)).call(this, player, options));
		}
	
		_createClass(KeyBindingInfoControl, [{
			key: 'createElement',
			value: function createElement() {
				_get(KeyBindingInfoControl.prototype.__proto__ || Object.getPrototypeOf(KeyBindingInfoControl.prototype), 'createElement', this).call(this);
				var keyBinding = this.player.options.keyBinding;
				var infoContent = '';
				for (var _key in keyBinding) {
					if (!keyBinding.hasOwnProperty(_key)) continue;
	
					var hotkey = keyBinding[_key];
					var item = '';
					var keyString = '';
	
					hotkey.info.forEach(function (key, index) {
						if (index !== 0) {
							keyString += ' + ';
						}
						keyString += '<kbd class="leplayer-key">' + key + '</kbd>';
					});
	
					item = '\n\t\t\t\t<div class="info-control__item">\n\t\t\t\t\t' + keyString + ' - ' + hotkey.description + '\n\t\t\t\t</div>\n\t\t\t';
	
					infoContent += item;
				}
				this.dropdownContent.addClass('info-control__content').append(infoContent);
			}
		}]);
	
		return KeyBindingInfoControl;
	}(_ControlDropdown3.default);
	
	_Component2.default.registerComponent('KeyBindingInfoControl', KeyBindingInfoControl);
	_Control2.default.registerControl('keybinding info', KeyBindingInfoControl);
	exports.default = KeyBindingInfoControl;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file TimeInfoControl.js
	 */
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _Component = __webpack_require__(4);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	var _Control2 = __webpack_require__(3);
	
	var _Control3 = _interopRequireDefault(_Control2);
	
	var _ControlText = __webpack_require__(22);
	
	var _ControlText2 = _interopRequireDefault(_ControlText);
	
	var _utils = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * @param {Player} player Main player
	 * @class TimeInfoControl
	 * @property {ControlText} currentTime Current time's text
	 * @property {ControlText} totalTime Total time
	 * @property {jQuery} line
	 * @extends Control
	 */
	var TimeInfoControl = function (_Control) {
		_inherits(TimeInfoControl, _Control);
	
		function TimeInfoControl(player) {
			var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
			_classCallCheck(this, TimeInfoControl);
	
			options = _jquery2.default.extend({}, {
				className: 'timeline timeline-container',
				name: 'time-info'
			}, options);
	
			var _this = _possibleConstructorReturn(this, (TimeInfoControl.__proto__ || Object.getPrototypeOf(TimeInfoControl)).call(this, player, options));
	
			_this.player.on('timeupdate', function (e, data) {
				var time = _this.player.currentTime;
				_this._currentTimeControl.text = (0, _utils.secondsToTime)(time);
			});
	
			_this.player.on('durationchange', function (e) {
				_this._totalTimeControl.text = (0, _utils.secondsToTime)(_this.player.video.duration);
			});
			return _this;
		}
	
		/**
	  * @override
	  */
	
	
		_createClass(TimeInfoControl, [{
			key: 'createElement',
			value: function createElement() {
				var duration = this.player.video.duration;
				var currentTime = this.player.video.currentTime;
				this._currentTimeControl = new _ControlText2.default(this.player, { className: 'control-time__current' });
				this._totalTimeControl = new _ControlText2.default(this.player, { className: 'control-time__total' });
	
				if (isNaN(duration) || duration == null) {
					this._totalTimeControl.text = '';
				} else {
					this._totalTimeControl.text = (0, _utils.secondsToTime)(duration);
				}
	
				if (currentTime == null) {
					this._currentTimeControl.text = (0, _utils.secondsToTime)(0);
				} else {
					this._currentTimeControl.text = (0, _utils.secondsToTime)(currentTime);
				}
	
				this.element = (0, _jquery2.default)('<div/>').addClass('control-time');
				this.element.append(this._currentTimeControl.element).append(this._totalTimeControl.element);
	
				return this.element;
			}
	
			/**
	   * @override
	   */
	
		}, {
			key: 'onPlayerInited',
			value: function onPlayerInited(e) {
				var video = this.player.video;
				this._currentTimeControl.text = (0, _utils.secondsToTime)(video.currentTime);
				this._totalTimeControl.text = (0, _utils.secondsToTime)(video.duration);
			}
		}, {
			key: 'onClick',
			value: function onClick(e) {
				e.preventDefault();
			}
		}]);
	
		return TimeInfoControl;
	}(_Control3.default);
	
	_Component2.default.registerComponent('TimeInfoControl', TimeInfoControl);
	_Control3.default.registerControl('timeinfo', TimeInfoControl);
	exports.default = TimeInfoControl;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _Component = __webpack_require__(4);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	var _browser = __webpack_require__(8);
	
	var _Entity2 = __webpack_require__(37);
	
	var _Entity3 = _interopRequireDefault(_Entity2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Html5 = function (_Entity) {
		_inherits(Html5, _Entity);
	
		function Html5(player, options) {
			_classCallCheck(this, Html5);
	
			var _this = _possibleConstructorReturn(this, (Html5.__proto__ || Object.getPrototypeOf(Html5)).call(this, player, options));
	
			_this.media = _this.element[0];
	
			_this.subtitles = [];
			_this.bufferRanges = [];
	
			_this.src = _this.player.options.src;
	
			if (_this.player.options.poster != null) {
				_this.poster = _this.player.options.poster;
			}
	
			if (_this.getAvailableQualityLevels().length > 0) {
				_this._playbackQuality = _this.getAvailableQualityLevels()[0];
			}
	
			_this.element.on('loadstart', _this.onLoadStart.bind(_this));
			_this.element.on('timeupdate', _this.onTimeUpdate.bind(_this));
			_this.element.on('durationchange', _this.onDurationChange.bind(_this));
			_this.element.on('progress', _this.onProgress.bind(_this));
			_this.element.on('seeking', _this.onSeeking.bind(_this));
			_this.element.on('seeked', _this.onSeeked.bind(_this));
			_this.element.on('volumechange', _this.onVolumeChange.bind(_this));
			_this.element.on('click', _this.onClick.bind(_this));
			_this.element.on('dblclick', _this.onDblclick.bind(_this));
			_this.element.on('play', _this.onPlay.bind(_this));
			_this.element.on('pause', _this.onPause.bind(_this));
			_this.element.on('ratechange', _this.onRateChange.bind(_this));
			_this.element.on('ended', _this.onEnded.bind(_this));
			_this.element.on('canplaythrough', _this.onCanplayThrough.bind(_this));
			_this.element.on('waiting', _this.onWaiting.bind(_this));
			_this.element.on('error', _this.onError.bind(_this));
			return _this;
		}
	
		_createClass(Html5, [{
			key: 'onLoadStart',
			value: function onLoadStart(e) {
				this.trigger('loadstart');
			}
		}, {
			key: 'onTimeUpdate',
			value: function onTimeUpdate(e) {
				this.trigger('timeupdate');
			}
		}, {
			key: 'onDurationChange',
			value: function onDurationChange(e) {
				this.trigger('durationchange');
			}
		}, {
			key: 'onProgress',
			value: function onProgress(e) {
				this.trigger('progress');
			}
		}, {
			key: 'onSeeking',
			value: function onSeeking(e) {
				this.trigger('seeking');
			}
		}, {
			key: 'onSeeked',
			value: function onSeeked(e) {
				this.trigger('seeked');
			}
		}, {
			key: 'onVolumeChange',
			value: function onVolumeChange(e) {
				this.trigger('volumechange');
			}
		}, {
			key: 'onClick',
			value: function onClick() {
				this.trigger('click');
			}
		}, {
			key: 'onDblclick',
			value: function onDblclick() {
				this.trigger('dblclick');
			}
		}, {
			key: 'onPlay',
			value: function onPlay() {
				this.trigger('play');
			}
		}, {
			key: 'onPause',
			value: function onPause() {
				this.trigger('pause');
			}
		}, {
			key: 'onPlaying',
			value: function onPlaying() {
				this.trigger('playing');
			}
		}, {
			key: 'onRateChange',
			value: function onRateChange() {
				this.trigger('ratechange');
			}
		}, {
			key: 'onEnded',
			value: function onEnded() {
				this.trigger('ended');
			}
		}, {
			key: 'onCanplayThrough',
			value: function onCanplayThrough() {
				this.trigger('canplaythrough');
			}
		}, {
			key: 'onWaiting',
			value: function onWaiting() {
				this.trigger('waiting');
			}
		}, {
			key: 'onError',
			value: function onError(e) {
				this.trigger('error', { code: e.target.error.code });
			}
	
			/* TODO */
	
		}, {
			key: 'createElement',
			value: function createElement() {
				var _this2 = this;
	
				this.element = this.options.ctx;
				[
	
				// Remove controls because we dont not support native controls yet
				'controls', 'poster',
	
				// It is unnecessary attrs, this functionality solve CSS
				'height', 'width'].forEach(function (item) {
					_this2.element.removeAttr(item);
				});
	
				// Set attrs from options
				['preload', 'autoplay', 'loop', 'muted'].forEach(function (item) {
					if (_this2.player.options[item]) {
						_this2.element.attr(item, _this2.player.options[item]);
						_this2.element.prop(item, _this2.player.options[item]);
					}
				});
	
				this.element.find('source[data-quality]').each(function (i, item) {
					(0, _jquery2.default)(item).remove();
				});
	
				return this.element;
			}
		}, {
			key: 'getAvailableQualityLevels',
			value: function getAvailableQualityLevels() {
				return this.player.options.sources.map(function (item) {
					return _extends({
						name: item.title
					}, item);
				});
			}
		}, {
			key: 'init',
			value: function init() {
				var _this3 = this;
	
				_get(Html5.prototype.__proto__ || Object.getPrototypeOf(Html5.prototype), 'init', this).call(this);
				this.load();
				var dfd = _jquery2.default.Deferred();
				this._initSubtitles();
				this._initVideo().done(function () {
					_this3._initRate();
					_this3._initVolume();
					dfd.resolve();
				});
				return dfd.promise();
			}
		}, {
			key: 'supportsFullScreen',
			value: function supportsFullScreen() {
				if (typeof this.media.webkitEnterFullScreen === 'function') {
					var userAgent = window.navigator && window.navigator.userAgent || '';
	
					// Seems to be broken in Chromium/Chrome && Safari in Leopard
					if (/Android/.test(userAgent) || !/Chrome|Mac OS X 10.5/.test(userAgent)) {
						return true;
					}
				}
				return false;
			}
		}, {
			key: 'enterFullscreen',
			value: function enterFullscreen() {
				var _this4 = this;
	
				var video = this.media;
				if (video.paused && video.networkState <= video.HAVE_METADATA) {
					// attempt to prime the video element for programmatic access
					// this isn't necessary on the desktop but shouldn't hurt
					this.play();
	
					// playing and pausing synchronously during the transition to fullscreen
					// can get iOS ~6.1 devices into a play/pause loop
					setTimeout(function () {
						_this4.pause();
						video.webkitEnterFullScreen();
					}, 0);
				} else {
					video.webkitEnterFullScreen();
				}
			}
		}, {
			key: 'exitFullscreen',
			value: function exitFullscreen() {
				this.media.webkitExitFullScreen();
			}
		}, {
			key: 'togglePlay',
			value: function togglePlay() {
				if (!this.media.played || this.media.paused) {
					this.play();
				} else {
					this.pause();
				}
			}
		}, {
			key: 'play',
			value: function play() {
				var dfd = _jquery2.default.Deferred();
				var playPromise = this.media.play();
	
				if (playPromise != null) {
					playPromise.then(function () {
						dfd.resolve();
					});
				} else {
					dfd.resolve();
				}
				return dfd.promise();
			}
		}, {
			key: 'pause',
			value: function pause() {
				var dfd = _jquery2.default.Deferred();
				var pausePromise = this.media.pause();
	
				if (pausePromise != null) {
					pausePromise.then(function () {
						dfd.resolve();
					});
				} else {
					dfd.resolve();
				}
				return dfd.promise();
			}
		}, {
			key: 'load',
			value: function load() {
				return this.media.load();
			}
		}, {
			key: '_initSubtitles',
			value: function _initSubtitles() {
				var _self = this;
				this.element.children('track[kind="subtitles"]').each(function () {
					var language = (0, _jquery2.default)(this).attr('srclang');
					var title = (0, _jquery2.default)(this).attr('label');
					var src = (0, _jquery2.default)(this).attr('src');
					if (title.length > 0 && src.length > 0) {
						_self.subtitles.push({
							title: title,
							name: language,
							language: language
						});
					}
				});
			}
		}, {
			key: '_initVideo',
			value: function _initVideo() {
				var _this5 = this;
	
				var dfd = _jquery2.default.Deferred();
				if (this.media.readyState > HTMLMediaElement.HAVE_NOTHING) {
					dfd.resolve();
					this._textTracksHack();
				} else {
					(0, _jquery2.default)(this.media).one('loadedmetadata', function (e) {
						dfd.resolve();
						_this5._textTracksHack();
					});
				}
				return dfd.promise();
			}
		}, {
			key: '_textTracksHack',
			value: function _textTracksHack() {
	
				// This is generally for Firefox only
				// because it somehow resets track list
				// for video element after DOM manipulation.
	
				if (this.media.textTracks.length === 0 && this.subtitles.length > 0) {
					this.element.children('track[kind="subtitles"]').remove();
					for (var i in this.subtitles) {
						if (this.subtitles.hasOwnProperty(i)) {
							this.element.append((0, _jquery2.default)('<track/>').attr('label', this.subtitles[i].title).attr('src', this.subtitles[i].src).attr('srclang', this.subtitles[i].language).attr('id', this.subtitles[i].language).attr('kind', 'subtitles'));
						}
					}
				}
			}
		}, {
			key: 'currentTime',
			get: function get() {
				return this.media.currentTime;
			},
			set: function set(value) {
				var time = void 0;
				if (value > this.duration) {
					time = this.duration;
				} else if (value < 0) {
					time = 0;
				} else {
					time = value;
				}
	
				this.player.trigger('timeupdateload', { currentTime: time });
	
				this.media.currentTime = time;
			}
		}, {
			key: 'duration',
			get: function get() {
				return this.media.duration;
			}
		}, {
			key: 'height',
			get: function get() {
				return this.media.clientHeight;
			}
		}, {
			key: 'width',
			get: function get() {
				return this.media.clientWidth;
			}
		}, {
			key: 'rate',
			get: function get() {
				return this.media.playbackRate;
			},
			set: function set(value) {
				_set(Html5.prototype.__proto__ || Object.getPrototypeOf(Html5.prototype), 'rate', value, this);
				this.media.playbackRate = value;
			}
		}, {
			key: 'muted',
			set: function set(value) {
				this.media.muted = value;
			},
			get: function get() {
				return this.media.muted;
			}
		}, {
			key: 'rateMax',
			get: function get() {
				var max = this.player.options.rate.max;
				if (_browser.IS_IOS || _browser.IS_ANDROID) {
					max = Html5.MOBILE_MAX_RATE;
				}
				if (_browser.IS_SAFARI) {
					max = Html5.SAFARI_MAX_RATE;
				}
	
				return max;
			}
		}, {
			key: 'rateMin',
			get: function get() {
				var min = this.player.options.rate.min;
	
				if (_browser.IS_IOS || _browser.IS_ANDROID) {
					min = Html5.MOBILE_MIN_RATE;
				}
	
				if (_browser.IS_SAFARI) {
					min = Html5.SAFARI_MIN_RATE;
				}
	
				return min;
			}
		}, {
			key: 'playbackQuality',
			set: function set(name) {
				_set(Html5.prototype.__proto__ || Object.getPrototypeOf(Html5.prototype), 'playbackQuality', name, this);
				var time = this.currentTime;
				var rate = this.rate;
				var stop = this.paused;
	
				this._playbackQuality = this.getAvailableQualityLevels().find(function (item) {
					return item.name === name;
				});
	
				this.src = this._playbackQuality;
				this.rate = rate;
				this.currentTime = time;
	
				if (stop) {
					this.pause();
				} else {
					this.play();
				}
	
				this.trigger('qualitychange', this._playbackQuality);
			},
			get: function get() {
				return this._playbackQuality;
			}
		}, {
			key: 'src',
			set: function set(src) {
				if (src == null) return;
				if (this.src && this.src.url === src.url) return;
	
				this.media.src = src.url;
	
				this._source = src;
			},
			get: function get() {
				return this._source;
			}
		}, {
			key: 'track',
			get: function get() {
				return this._track;
			},
			set: function set(value) {
				[].concat(_toConsumableArray(this.media.textTracks)).forEach(function (item) {
					if (value != null && item.language === value.language) {
						item.mode = 'showing';
					} else {
						item.mode = 'hidden';
					}
				});
				this._track = value;
				this.trigger('trackschange');
			}
		}, {
			key: 'paused',
			get: function get() {
				return this.media.paused;
			}
		}, {
			key: 'volume',
			get: function get() {
				return this.media.volume;
			},
			set: function set(value) {
				_set(Html5.prototype.__proto__ || Object.getPrototypeOf(Html5.prototype), 'volume', value, this);
				var player = this.player;
				if (value > 1) {
					this.media.volume = 1;
				} else if (value < player.options.volume.mutelimit) {
					this.media.volume = 0;
				} else {
					this.media.volume = value;
				}
				this.media.mute = value < player.options.volume.mutelimit;
			}
		}, {
			key: 'buffered',
			get: function get() {
				return this.media.buffered;
			}
	
			/**
	   * @return {TimeRanges}
	   */
	
		}, {
			key: 'seekable',
			get: function get() {
				return this.media.seekable;
			}
	
			/**
	   * @return {TimeRanges}
	   */
	
		}, {
			key: 'played',
			get: function get() {
				return this.media.played;
			}
		}, {
			key: 'ended',
			get: function get() {
				return this.media.ended;
			}
		}, {
			key: 'playedPercentage',
			get: function get() {
				var result = 0;
				for (var i = 0; i < this.played.length; i++) {
					result += this.played.end(i) - this.played.start(i);
				}
	
				return result / this.duration * 100;
			}
		}, {
			key: 'currentSrc',
			get: function get() {
				return this.media.currentSrc;
			}
		}]);
	
		return Html5;
	}(_Entity3.default);
	/**
	 * Min rate for android and ios
	 */
	
	
	Html5.MOBILE_MIN_RATE = 0.5;
	
	/**
	 * Max rate for android and ios
	 */
	Html5.MOBILE_MAX_RATE = 2;
	
	Html5.SAFARI_MIN_RATE = 0.5;
	
	Html5.SAFARI_MAX_RATE = 2;
	
	Html5.TEST_VIDEO = document.createElement('video');
	
	/**
	 * @return {boolean}
	 *         - True if volume can be controlled
	 *         - False otherwise
	 */
	Html5.canControlVolume = function () {
		// IE will error if Windows Media Player not installed #3315
		try {
			var volume = Html5.TEST_VIDEO.volume;
	
			Html5.TEST_VIDEO.volume = volume / 2 + 0.1;
			return volume !== Html5.TEST_VIDEO.volume;
		} catch (e) {
			return false;
		}
	};
	
	Html5.prototype.featureControlVolume = Html5.canControlVolume();
	
	_Component2.default.registerComponent('Html5', Html5);
	exports.default = Html5;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Component2 = __webpack_require__(4);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	var _cookie = __webpack_require__(16);
	
	var _cookie2 = _interopRequireDefault(_cookie);
	
	var _MediaError = __webpack_require__(17);
	
	var _MediaError2 = _interopRequireDefault(_MediaError);
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Entity = function (_Component) {
		_inherits(Entity, _Component);
	
		function Entity(player, options) {
			_classCallCheck(this, Entity);
	
			var _this = _possibleConstructorReturn(this, (Entity.__proto__ || Object.getPrototypeOf(Entity)).call(this, player, options));
	
			_this._triggerStack = [];
			_this._stopListen = false;
	
			if (_this.player.options.src == null) {
				_this.player.error = new _MediaError2.default('Видеофайл не найден.');
			}
	
			return _this;
		}
	
		/**
	  * @override
	  */
	
	
		_createClass(Entity, [{
			key: 'trigger',
			value: function trigger() {
				var _get2;
	
				for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
					args[_key] = arguments[_key];
				}
	
				if (!this._stopListen) {
					this._triggerStack.push(args);
				}
				(_get2 = _get(Entity.prototype.__proto__ || Object.getPrototypeOf(Entity.prototype), 'trigger', this)).call.apply(_get2, [this].concat(args));
			}
		}, {
			key: 'init',
			value: function init() {
				var _this2 = this;
	
				this._stopListen = true;
				this._triggerStack.forEach(function (args) {
					_this2.trigger.apply(_this2, _toConsumableArray(args));
				});
			}
		}, {
			key: 'createElement',
			value: function createElement() {
				return this.element = (0, _jquery2.default)('<div />');
			}
		}, {
			key: 'increaseRate',
			value: function increaseRate() {
				this.rate += this.player.options.rate.step;
			}
		}, {
			key: 'decreaseRate',
			value: function decreaseRate() {
				this.rate -= this.player.options.rate.step;
			}
		}, {
			key: 'supportsFullScreen',
			value: function supportsFullScreen() {}
		}, {
			key: 'play',
			value: function play() {}
		}, {
			key: 'pause',
			value: function pause() {}
		}, {
			key: 'load',
			value: function load() {}
		}, {
			key: 'togglePlay',
			value: function togglePlay() {
				if (this.paused) {
					this.play();
				} else {
					this.pause();
				}
			}
		}, {
			key: '_initRate',
			value: function _initRate() {
				this.rate = this.defaultRate;
			}
		}, {
			key: '_initVolume',
			value: function _initVolume() {
				this.volume = this.defaultVolume;
			}
		}, {
			key: 'poster',
			set: function set(url) {
				this._poster = url;
				this.trigger('posterchange', { url: url });
			},
			get: function get() {
				return this._poster;
			}
		}, {
			key: 'currentTime',
			get: function get() {
				return;
			},
			set: function set(value) {}
		}, {
			key: 'duration',
			get: function get() {
				return;
			}
		}, {
			key: 'muted',
			set: function set(value) {},
			get: function get() {}
		}, {
			key: 'height',
			get: function get() {
				return this.element.innerHeight();
			}
		}, {
			key: 'width',
			get: function get() {
				return this.element.width();
			}
		}, {
			key: 'rateMax',
			set: function set(value) {
				this._rateMax = value;
			},
			get: function get() {
				return this._rateMax || this.player.options.rate.max;
			}
		}, {
			key: 'rateMin',
			set: function set(value) {
				this._rateMin = value;
			},
			get: function get() {
				return this._rateMin || this.player.options.rate.min;
			}
		}, {
			key: 'rate',
			get: function get() {},
			set: function set(value) {
				if (value > this.rateMax || value < this.rateMin) return;
				_cookie2.default.set('rate', value);
			}
		}, {
			key: 'playbackQuality',
			set: function set(name) {
				var levels = this.getAvailableQualityLevels();
				if (!levels.some(function (obj) {
					return name in obj;
				})) {
					return;
				}
			},
			get: function get() {}
		}, {
			key: 'paused',
			get: function get() {}
		}, {
			key: 'played',
			get: function get() {}
		}, {
			key: 'defaultRate',
			get: function get() {
				return _cookie2.default.get('rate') || this.player.options.rate.default;
			}
		}, {
			key: 'defaultVolume',
			get: function get() {
				return _cookie2.default.get('volume') || this.player.options.volume.default;
			}
		}, {
			key: 'volume',
			set: function set(value) {
				var player = this.player;
				if (value < 1 && value > player.options.volume.mutelimit) {
					_cookie2.default.set('volume', value);
				}
			}
		}, {
			key: 'src',
			set: function set(value) {},
			get: function get() {}
		}]);
	
		return Entity;
	}(_Component3.default);
	
	Entity.prototype.featureControlVolume = true;
	
	_Component3.default.registerComponent('Entity', Entity);
	
	exports.default = Entity;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var define = __webpack_require__(39);
	var ES = __webpack_require__(43);
	
	var implementation = __webpack_require__(67);
	var getPolyfill = __webpack_require__(68);
	var shim = __webpack_require__(69);
	
	var slice = Array.prototype.slice;
	
	var polyfill = getPolyfill();
	
	var boundFindShim = function find(array, predicate) { // eslint-disable-line no-unused-vars
		ES.RequireObjectCoercible(array);
		var args = slice.call(arguments, 1);
		return polyfill.apply(array, args);
	};
	
	define(boundFindShim, {
		getPolyfill: getPolyfill,
		implementation: implementation,
		shim: shim
	});
	
	module.exports = boundFindShim;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var keys = __webpack_require__(40);
	var hasSymbols = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';
	
	var toStr = Object.prototype.toString;
	var concat = Array.prototype.concat;
	var origDefineProperty = Object.defineProperty;
	
	var isFunction = function (fn) {
		return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
	};
	
	var arePropertyDescriptorsSupported = function () {
		var obj = {};
		try {
			origDefineProperty(obj, 'x', { enumerable: false, value: obj });
			// eslint-disable-next-line no-unused-vars, no-restricted-syntax
			for (var _ in obj) { // jscs:ignore disallowUnusedVariables
				return false;
			}
			return obj.x === obj;
		} catch (e) { /* this is IE 8. */
			return false;
		}
	};
	var supportsDescriptors = origDefineProperty && arePropertyDescriptorsSupported();
	
	var defineProperty = function (object, name, value, predicate) {
		if (name in object && (!isFunction(predicate) || !predicate())) {
			return;
		}
		if (supportsDescriptors) {
			origDefineProperty(object, name, {
				configurable: true,
				enumerable: false,
				value: value,
				writable: true
			});
		} else {
			object[name] = value;
		}
	};
	
	var defineProperties = function (object, map) {
		var predicates = arguments.length > 2 ? arguments[2] : {};
		var props = keys(map);
		if (hasSymbols) {
			props = concat.call(props, Object.getOwnPropertySymbols(map));
		}
		for (var i = 0; i < props.length; i += 1) {
			defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
		}
	};
	
	defineProperties.supportsDescriptors = !!supportsDescriptors;
	
	module.exports = defineProperties;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var slice = Array.prototype.slice;
	var isArgs = __webpack_require__(41);
	
	var origKeys = Object.keys;
	var keysShim = origKeys ? function keys(o) { return origKeys(o); } : __webpack_require__(42);
	
	var originalKeys = Object.keys;
	
	keysShim.shim = function shimObjectKeys() {
		if (Object.keys) {
			var keysWorksWithArguments = (function () {
				// Safari 5.0 bug
				var args = Object.keys(arguments);
				return args && args.length === arguments.length;
			}(1, 2));
			if (!keysWorksWithArguments) {
				Object.keys = function keys(object) { // eslint-disable-line func-name-matching
					if (isArgs(object)) {
						return originalKeys(slice.call(object));
					}
					return originalKeys(object);
				};
			}
		} else {
			Object.keys = keysShim;
		}
		return Object.keys || keysShim;
	};
	
	module.exports = keysShim;


/***/ }),
/* 41 */
/***/ (function(module, exports) {

	'use strict';
	
	var toStr = Object.prototype.toString;
	
	module.exports = function isArguments(value) {
		var str = toStr.call(value);
		var isArgs = str === '[object Arguments]';
		if (!isArgs) {
			isArgs = str !== '[object Array]' &&
				value !== null &&
				typeof value === 'object' &&
				typeof value.length === 'number' &&
				value.length >= 0 &&
				toStr.call(value.callee) === '[object Function]';
		}
		return isArgs;
	};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var keysShim;
	if (!Object.keys) {
		// modified from https://github.com/es-shims/es5-shim
		var has = Object.prototype.hasOwnProperty;
		var toStr = Object.prototype.toString;
		var isArgs = __webpack_require__(41); // eslint-disable-line global-require
		var isEnumerable = Object.prototype.propertyIsEnumerable;
		var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
		var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
		var dontEnums = [
			'toString',
			'toLocaleString',
			'valueOf',
			'hasOwnProperty',
			'isPrototypeOf',
			'propertyIsEnumerable',
			'constructor'
		];
		var equalsConstructorPrototype = function (o) {
			var ctor = o.constructor;
			return ctor && ctor.prototype === o;
		};
		var excludedKeys = {
			$applicationCache: true,
			$console: true,
			$external: true,
			$frame: true,
			$frameElement: true,
			$frames: true,
			$innerHeight: true,
			$innerWidth: true,
			$onmozfullscreenchange: true,
			$onmozfullscreenerror: true,
			$outerHeight: true,
			$outerWidth: true,
			$pageXOffset: true,
			$pageYOffset: true,
			$parent: true,
			$scrollLeft: true,
			$scrollTop: true,
			$scrollX: true,
			$scrollY: true,
			$self: true,
			$webkitIndexedDB: true,
			$webkitStorageInfo: true,
			$window: true
		};
		var hasAutomationEqualityBug = (function () {
			/* global window */
			if (typeof window === 'undefined') { return false; }
			for (var k in window) {
				try {
					if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
						try {
							equalsConstructorPrototype(window[k]);
						} catch (e) {
							return true;
						}
					}
				} catch (e) {
					return true;
				}
			}
			return false;
		}());
		var equalsConstructorPrototypeIfNotBuggy = function (o) {
			/* global window */
			if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
				return equalsConstructorPrototype(o);
			}
			try {
				return equalsConstructorPrototype(o);
			} catch (e) {
				return false;
			}
		};
	
		keysShim = function keys(object) {
			var isObject = object !== null && typeof object === 'object';
			var isFunction = toStr.call(object) === '[object Function]';
			var isArguments = isArgs(object);
			var isString = isObject && toStr.call(object) === '[object String]';
			var theKeys = [];
	
			if (!isObject && !isFunction && !isArguments) {
				throw new TypeError('Object.keys called on a non-object');
			}
	
			var skipProto = hasProtoEnumBug && isFunction;
			if (isString && object.length > 0 && !has.call(object, 0)) {
				for (var i = 0; i < object.length; ++i) {
					theKeys.push(String(i));
				}
			}
	
			if (isArguments && object.length > 0) {
				for (var j = 0; j < object.length; ++j) {
					theKeys.push(String(j));
				}
			} else {
				for (var name in object) {
					if (!(skipProto && name === 'prototype') && has.call(object, name)) {
						theKeys.push(String(name));
					}
				}
			}
	
			if (hasDontEnumBug) {
				var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);
	
				for (var k = 0; k < dontEnums.length; ++k) {
					if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
						theKeys.push(dontEnums[k]);
					}
				}
			}
			return theKeys;
		};
	}
	module.exports = keysShim;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(44);


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var has = __webpack_require__(45);
	var toPrimitive = __webpack_require__(48);
	var keys = __webpack_require__(40);
	
	var GetIntrinsic = __webpack_require__(56);
	
	var $TypeError = GetIntrinsic('%TypeError%');
	var $SyntaxError = GetIntrinsic('%SyntaxError%');
	var $Array = GetIntrinsic('%Array%');
	var $String = GetIntrinsic('%String%');
	var $Object = GetIntrinsic('%Object%');
	var $Number = GetIntrinsic('%Number%');
	var $Symbol = GetIntrinsic('%Symbol%', true);
	var $RegExp = GetIntrinsic('%RegExp%');
	
	var hasSymbols = !!$Symbol;
	
	var assertRecord = __webpack_require__(57);
	var $isNaN = __webpack_require__(58);
	var $isFinite = __webpack_require__(59);
	var MAX_SAFE_INTEGER = $Number.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1;
	
	var assign = __webpack_require__(60);
	var sign = __webpack_require__(61);
	var mod = __webpack_require__(62);
	var isPrimitive = __webpack_require__(63);
	var parseInteger = parseInt;
	var bind = __webpack_require__(46);
	var arraySlice = bind.call(Function.call, $Array.prototype.slice);
	var strSlice = bind.call(Function.call, $String.prototype.slice);
	var isBinary = bind.call(Function.call, $RegExp.prototype.test, /^0b[01]+$/i);
	var isOctal = bind.call(Function.call, $RegExp.prototype.test, /^0o[0-7]+$/i);
	var regexExec = bind.call(Function.call, $RegExp.prototype.exec);
	var nonWS = ['\u0085', '\u200b', '\ufffe'].join('');
	var nonWSregex = new $RegExp('[' + nonWS + ']', 'g');
	var hasNonWS = bind.call(Function.call, $RegExp.prototype.test, nonWSregex);
	var invalidHexLiteral = /^[-+]0x[0-9a-f]+$/i;
	var isInvalidHexLiteral = bind.call(Function.call, $RegExp.prototype.test, invalidHexLiteral);
	var $charCodeAt = bind.call(Function.call, $String.prototype.charCodeAt);
	
	var toStr = bind.call(Function.call, Object.prototype.toString);
	
	var $NumberValueOf = bind.call(Function.call, GetIntrinsic('%NumberPrototype%').valueOf);
	var $BooleanValueOf = bind.call(Function.call, GetIntrinsic('%BooleanPrototype%').valueOf);
	var $StringValueOf = bind.call(Function.call, GetIntrinsic('%StringPrototype%').valueOf);
	var $DateValueOf = bind.call(Function.call, GetIntrinsic('%DatePrototype%').valueOf);
	
	var $floor = Math.floor;
	var $abs = Math.abs;
	
	var $ObjectCreate = Object.create;
	var $gOPD = $Object.getOwnPropertyDescriptor;
	
	var $isExtensible = $Object.isExtensible;
	
	var $defineProperty = $Object.defineProperty;
	
	// whitespace from: http://es5.github.io/#x15.5.4.20
	// implementation from https://github.com/es-shims/es5-shim/blob/v3.4.0/es5-shim.js#L1304-L1324
	var ws = [
		'\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003',
		'\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028',
		'\u2029\uFEFF'
	].join('');
	var trimRegex = new RegExp('(^[' + ws + ']+)|([' + ws + ']+$)', 'g');
	var replace = bind.call(Function.call, $String.prototype.replace);
	var trim = function (value) {
		return replace(value, trimRegex, '');
	};
	
	var ES5 = __webpack_require__(64);
	
	var hasRegExpMatcher = __webpack_require__(66);
	
	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-abstract-operations
	var ES6 = assign(assign({}, ES5), {
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-call-f-v-args
		Call: function Call(F, V) {
			var args = arguments.length > 2 ? arguments[2] : [];
			if (!this.IsCallable(F)) {
				throw new $TypeError(F + ' is not a function');
			}
			return F.apply(V, args);
		},
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toprimitive
		ToPrimitive: toPrimitive,
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toboolean
		// ToBoolean: ES5.ToBoolean,
	
		// https://ecma-international.org/ecma-262/6.0/#sec-tonumber
		ToNumber: function ToNumber(argument) {
			var value = isPrimitive(argument) ? argument : toPrimitive(argument, $Number);
			if (typeof value === 'symbol') {
				throw new $TypeError('Cannot convert a Symbol value to a number');
			}
			if (typeof value === 'string') {
				if (isBinary(value)) {
					return this.ToNumber(parseInteger(strSlice(value, 2), 2));
				} else if (isOctal(value)) {
					return this.ToNumber(parseInteger(strSlice(value, 2), 8));
				} else if (hasNonWS(value) || isInvalidHexLiteral(value)) {
					return NaN;
				} else {
					var trimmed = trim(value);
					if (trimmed !== value) {
						return this.ToNumber(trimmed);
					}
				}
			}
			return $Number(value);
		},
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tointeger
		// ToInteger: ES5.ToNumber,
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toint32
		// ToInt32: ES5.ToInt32,
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-touint32
		// ToUint32: ES5.ToUint32,
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toint16
		ToInt16: function ToInt16(argument) {
			var int16bit = this.ToUint16(argument);
			return int16bit >= 0x8000 ? int16bit - 0x10000 : int16bit;
		},
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-touint16
		// ToUint16: ES5.ToUint16,
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toint8
		ToInt8: function ToInt8(argument) {
			var int8bit = this.ToUint8(argument);
			return int8bit >= 0x80 ? int8bit - 0x100 : int8bit;
		},
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-touint8
		ToUint8: function ToUint8(argument) {
			var number = this.ToNumber(argument);
			if ($isNaN(number) || number === 0 || !$isFinite(number)) { return 0; }
			var posInt = sign(number) * $floor($abs(number));
			return mod(posInt, 0x100);
		},
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-touint8clamp
		ToUint8Clamp: function ToUint8Clamp(argument) {
			var number = this.ToNumber(argument);
			if ($isNaN(number) || number <= 0) { return 0; }
			if (number >= 0xFF) { return 0xFF; }
			var f = $floor(argument);
			if (f + 0.5 < number) { return f + 1; }
			if (number < f + 0.5) { return f; }
			if (f % 2 !== 0) { return f + 1; }
			return f;
		},
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tostring
		ToString: function ToString(argument) {
			if (typeof argument === 'symbol') {
				throw new $TypeError('Cannot convert a Symbol value to a string');
			}
			return $String(argument);
		},
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toobject
		ToObject: function ToObject(value) {
			this.RequireObjectCoercible(value);
			return $Object(value);
		},
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-topropertykey
		ToPropertyKey: function ToPropertyKey(argument) {
			var key = this.ToPrimitive(argument, $String);
			return typeof key === 'symbol' ? key : this.ToString(key);
		},
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
		ToLength: function ToLength(argument) {
			var len = this.ToInteger(argument);
			if (len <= 0) { return 0; } // includes converting -0 to +0
			if (len > MAX_SAFE_INTEGER) { return MAX_SAFE_INTEGER; }
			return len;
		},
	
		// https://ecma-international.org/ecma-262/6.0/#sec-canonicalnumericindexstring
		CanonicalNumericIndexString: function CanonicalNumericIndexString(argument) {
			if (toStr(argument) !== '[object String]') {
				throw new $TypeError('must be a string');
			}
			if (argument === '-0') { return -0; }
			var n = this.ToNumber(argument);
			if (this.SameValue(this.ToString(n), argument)) { return n; }
			return void 0;
		},
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-requireobjectcoercible
		RequireObjectCoercible: ES5.CheckObjectCoercible,
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isarray
		IsArray: $Array.isArray || function IsArray(argument) {
			return toStr(argument) === '[object Array]';
		},
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-iscallable
		// IsCallable: ES5.IsCallable,
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isconstructor
		IsConstructor: function IsConstructor(argument) {
			return typeof argument === 'function' && !!argument.prototype; // unfortunately there's no way to truly check this without try/catch `new argument`
		},
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isextensible-o
		IsExtensible: Object.preventExtensions
			? function IsExtensible(obj) {
				if (isPrimitive(obj)) {
					return false;
				}
				return $isExtensible(obj);
			}
			: function isExtensible(obj) { return true; }, // eslint-disable-line no-unused-vars
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isinteger
		IsInteger: function IsInteger(argument) {
			if (typeof argument !== 'number' || $isNaN(argument) || !$isFinite(argument)) {
				return false;
			}
			var abs = $abs(argument);
			return $floor(abs) === abs;
		},
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-ispropertykey
		IsPropertyKey: function IsPropertyKey(argument) {
			return typeof argument === 'string' || typeof argument === 'symbol';
		},
	
		// https://ecma-international.org/ecma-262/6.0/#sec-isregexp
		IsRegExp: function IsRegExp(argument) {
			if (!argument || typeof argument !== 'object') {
				return false;
			}
			if (hasSymbols) {
				var isRegExp = argument[$Symbol.match];
				if (typeof isRegExp !== 'undefined') {
					return ES5.ToBoolean(isRegExp);
				}
			}
			return hasRegExpMatcher(argument);
		},
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-samevalue
		// SameValue: ES5.SameValue,
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-samevaluezero
		SameValueZero: function SameValueZero(x, y) {
			return (x === y) || ($isNaN(x) && $isNaN(y));
		},
	
		/**
		 * 7.3.2 GetV (V, P)
		 * 1. Assert: IsPropertyKey(P) is true.
		 * 2. Let O be ToObject(V).
		 * 3. ReturnIfAbrupt(O).
		 * 4. Return O.[[Get]](P, V).
		 */
		GetV: function GetV(V, P) {
			// 7.3.2.1
			if (!this.IsPropertyKey(P)) {
				throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
			}
	
			// 7.3.2.2-3
			var O = this.ToObject(V);
	
			// 7.3.2.4
			return O[P];
		},
	
		/**
		 * 7.3.9 - https://ecma-international.org/ecma-262/6.0/#sec-getmethod
		 * 1. Assert: IsPropertyKey(P) is true.
		 * 2. Let func be GetV(O, P).
		 * 3. ReturnIfAbrupt(func).
		 * 4. If func is either undefined or null, return undefined.
		 * 5. If IsCallable(func) is false, throw a TypeError exception.
		 * 6. Return func.
		 */
		GetMethod: function GetMethod(O, P) {
			// 7.3.9.1
			if (!this.IsPropertyKey(P)) {
				throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
			}
	
			// 7.3.9.2
			var func = this.GetV(O, P);
	
			// 7.3.9.4
			if (func == null) {
				return void 0;
			}
	
			// 7.3.9.5
			if (!this.IsCallable(func)) {
				throw new $TypeError(P + 'is not a function');
			}
	
			// 7.3.9.6
			return func;
		},
	
		/**
		 * 7.3.1 Get (O, P) - https://ecma-international.org/ecma-262/6.0/#sec-get-o-p
		 * 1. Assert: Type(O) is Object.
		 * 2. Assert: IsPropertyKey(P) is true.
		 * 3. Return O.[[Get]](P, O).
		 */
		Get: function Get(O, P) {
			// 7.3.1.1
			if (this.Type(O) !== 'Object') {
				throw new $TypeError('Assertion failed: Type(O) is not Object');
			}
			// 7.3.1.2
			if (!this.IsPropertyKey(P)) {
				throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
			}
			// 7.3.1.3
			return O[P];
		},
	
		Type: function Type(x) {
			if (typeof x === 'symbol') {
				return 'Symbol';
			}
			return ES5.Type(x);
		},
	
		// https://ecma-international.org/ecma-262/6.0/#sec-speciesconstructor
		SpeciesConstructor: function SpeciesConstructor(O, defaultConstructor) {
			if (this.Type(O) !== 'Object') {
				throw new $TypeError('Assertion failed: Type(O) is not Object');
			}
			var C = O.constructor;
			if (typeof C === 'undefined') {
				return defaultConstructor;
			}
			if (this.Type(C) !== 'Object') {
				throw new $TypeError('O.constructor is not an Object');
			}
			var S = hasSymbols && $Symbol.species ? C[$Symbol.species] : void 0;
			if (S == null) {
				return defaultConstructor;
			}
			if (this.IsConstructor(S)) {
				return S;
			}
			throw new $TypeError('no constructor found');
		},
	
		// https://ecma-international.org/ecma-262/6.0/#sec-completepropertydescriptor
		CompletePropertyDescriptor: function CompletePropertyDescriptor(Desc) {
			assertRecord(this, 'Property Descriptor', 'Desc', Desc);
	
			if (this.IsGenericDescriptor(Desc) || this.IsDataDescriptor(Desc)) {
				if (!has(Desc, '[[Value]]')) {
					Desc['[[Value]]'] = void 0;
				}
				if (!has(Desc, '[[Writable]]')) {
					Desc['[[Writable]]'] = false;
				}
			} else {
				if (!has(Desc, '[[Get]]')) {
					Desc['[[Get]]'] = void 0;
				}
				if (!has(Desc, '[[Set]]')) {
					Desc['[[Set]]'] = void 0;
				}
			}
			if (!has(Desc, '[[Enumerable]]')) {
				Desc['[[Enumerable]]'] = false;
			}
			if (!has(Desc, '[[Configurable]]')) {
				Desc['[[Configurable]]'] = false;
			}
			return Desc;
		},
	
		// https://ecma-international.org/ecma-262/6.0/#sec-set-o-p-v-throw
		Set: function Set(O, P, V, Throw) {
			if (this.Type(O) !== 'Object') {
				throw new $TypeError('O must be an Object');
			}
			if (!this.IsPropertyKey(P)) {
				throw new $TypeError('P must be a Property Key');
			}
			if (this.Type(Throw) !== 'Boolean') {
				throw new $TypeError('Throw must be a Boolean');
			}
			if (Throw) {
				O[P] = V;
				return true;
			} else {
				try {
					O[P] = V;
				} catch (e) {
					return false;
				}
			}
		},
	
		// https://ecma-international.org/ecma-262/6.0/#sec-hasownproperty
		HasOwnProperty: function HasOwnProperty(O, P) {
			if (this.Type(O) !== 'Object') {
				throw new $TypeError('O must be an Object');
			}
			if (!this.IsPropertyKey(P)) {
				throw new $TypeError('P must be a Property Key');
			}
			return has(O, P);
		},
	
		// https://ecma-international.org/ecma-262/6.0/#sec-hasproperty
		HasProperty: function HasProperty(O, P) {
			if (this.Type(O) !== 'Object') {
				throw new $TypeError('O must be an Object');
			}
			if (!this.IsPropertyKey(P)) {
				throw new $TypeError('P must be a Property Key');
			}
			return P in O;
		},
	
		// https://ecma-international.org/ecma-262/6.0/#sec-isconcatspreadable
		IsConcatSpreadable: function IsConcatSpreadable(O) {
			if (this.Type(O) !== 'Object') {
				return false;
			}
			if (hasSymbols && typeof $Symbol.isConcatSpreadable === 'symbol') {
				var spreadable = this.Get(O, Symbol.isConcatSpreadable);
				if (typeof spreadable !== 'undefined') {
					return this.ToBoolean(spreadable);
				}
			}
			return this.IsArray(O);
		},
	
		// https://ecma-international.org/ecma-262/6.0/#sec-invoke
		Invoke: function Invoke(O, P) {
			if (!this.IsPropertyKey(P)) {
				throw new $TypeError('P must be a Property Key');
			}
			var argumentsList = arraySlice(arguments, 2);
			var func = this.GetV(O, P);
			return this.Call(func, O, argumentsList);
		},
	
		// https://ecma-international.org/ecma-262/6.0/#sec-getiterator
		GetIterator: function GetIterator(obj, method) {
			if (!hasSymbols) {
				throw new SyntaxError('ES.GetIterator depends on native iterator support.');
			}
	
			var actualMethod = method;
			if (arguments.length < 2) {
				actualMethod = this.GetMethod(obj, $Symbol.iterator);
			}
			var iterator = this.Call(actualMethod, obj);
			if (this.Type(iterator) !== 'Object') {
				throw new $TypeError('iterator must return an object');
			}
	
			return iterator;
		},
	
		// https://ecma-international.org/ecma-262/6.0/#sec-iteratornext
		IteratorNext: function IteratorNext(iterator, value) {
			var result = this.Invoke(iterator, 'next', arguments.length < 2 ? [] : [value]);
			if (this.Type(result) !== 'Object') {
				throw new $TypeError('iterator next must return an object');
			}
			return result;
		},
	
		// https://ecma-international.org/ecma-262/6.0/#sec-iteratorcomplete
		IteratorComplete: function IteratorComplete(iterResult) {
			if (this.Type(iterResult) !== 'Object') {
				throw new $TypeError('Assertion failed: Type(iterResult) is not Object');
			}
			return this.ToBoolean(this.Get(iterResult, 'done'));
		},
	
		// https://ecma-international.org/ecma-262/6.0/#sec-iteratorvalue
		IteratorValue: function IteratorValue(iterResult) {
			if (this.Type(iterResult) !== 'Object') {
				throw new $TypeError('Assertion failed: Type(iterResult) is not Object');
			}
			return this.Get(iterResult, 'value');
		},
	
		// https://ecma-international.org/ecma-262/6.0/#sec-iteratorstep
		IteratorStep: function IteratorStep(iterator) {
			var result = this.IteratorNext(iterator);
			var done = this.IteratorComplete(result);
			return done === true ? false : result;
		},
	
		// https://ecma-international.org/ecma-262/6.0/#sec-iteratorclose
		IteratorClose: function IteratorClose(iterator, completion) {
			if (this.Type(iterator) !== 'Object') {
				throw new $TypeError('Assertion failed: Type(iterator) is not Object');
			}
			if (!this.IsCallable(completion)) {
				throw new $TypeError('Assertion failed: completion is not a thunk for a Completion Record');
			}
			var completionThunk = completion;
	
			var iteratorReturn = this.GetMethod(iterator, 'return');
	
			if (typeof iteratorReturn === 'undefined') {
				return completionThunk();
			}
	
			var completionRecord;
			try {
				var innerResult = this.Call(iteratorReturn, iterator, []);
			} catch (e) {
				// if we hit here, then "e" is the innerResult completion that needs re-throwing
	
				// if the completion is of type "throw", this will throw.
				completionRecord = completionThunk();
				completionThunk = null; // ensure it's not called twice.
	
				// if not, then return the innerResult completion
				throw e;
			}
			completionRecord = completionThunk(); // if innerResult worked, then throw if the completion does
			completionThunk = null; // ensure it's not called twice.
	
			if (this.Type(innerResult) !== 'Object') {
				throw new $TypeError('iterator .return must return an object');
			}
	
			return completionRecord;
		},
	
		// https://ecma-international.org/ecma-262/6.0/#sec-createiterresultobject
		CreateIterResultObject: function CreateIterResultObject(value, done) {
			if (this.Type(done) !== 'Boolean') {
				throw new $TypeError('Assertion failed: Type(done) is not Boolean');
			}
			return {
				value: value,
				done: done
			};
		},
	
		// https://ecma-international.org/ecma-262/6.0/#sec-regexpexec
		RegExpExec: function RegExpExec(R, S) {
			if (this.Type(R) !== 'Object') {
				throw new $TypeError('R must be an Object');
			}
			if (this.Type(S) !== 'String') {
				throw new $TypeError('S must be a String');
			}
			var exec = this.Get(R, 'exec');
			if (this.IsCallable(exec)) {
				var result = this.Call(exec, R, [S]);
				if (result === null || this.Type(result) === 'Object') {
					return result;
				}
				throw new $TypeError('"exec" method must return `null` or an Object');
			}
			return regexExec(R, S);
		},
	
		// https://ecma-international.org/ecma-262/6.0/#sec-arrayspeciescreate
		ArraySpeciesCreate: function ArraySpeciesCreate(originalArray, length) {
			if (!this.IsInteger(length) || length < 0) {
				throw new $TypeError('Assertion failed: length must be an integer >= 0');
			}
			var len = length === 0 ? 0 : length;
			var C;
			var isArray = this.IsArray(originalArray);
			if (isArray) {
				C = this.Get(originalArray, 'constructor');
				// TODO: figure out how to make a cross-realm normal Array, a same-realm Array
				// if (this.IsConstructor(C)) {
				// 	if C is another realm's Array, C = undefined
				// 	Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(Array))) === null ?
				// }
				if (this.Type(C) === 'Object' && hasSymbols && $Symbol.species) {
					C = this.Get(C, $Symbol.species);
					if (C === null) {
						C = void 0;
					}
				}
			}
			if (typeof C === 'undefined') {
				return $Array(len);
			}
			if (!this.IsConstructor(C)) {
				throw new $TypeError('C must be a constructor');
			}
			return new C(len); // this.Construct(C, len);
		},
	
		CreateDataProperty: function CreateDataProperty(O, P, V) {
			if (this.Type(O) !== 'Object') {
				throw new $TypeError('Assertion failed: Type(O) is not Object');
			}
			if (!this.IsPropertyKey(P)) {
				throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
			}
			var oldDesc = $gOPD(O, P);
			var extensible = oldDesc || (typeof $isExtensible !== 'function' || $isExtensible(O));
			var immutable = oldDesc && (!oldDesc.writable || !oldDesc.configurable);
			if (immutable || !extensible) {
				return false;
			}
			var newDesc = {
				configurable: true,
				enumerable: true,
				value: V,
				writable: true
			};
			$defineProperty(O, P, newDesc);
			return true;
		},
	
		// https://ecma-international.org/ecma-262/6.0/#sec-createdatapropertyorthrow
		CreateDataPropertyOrThrow: function CreateDataPropertyOrThrow(O, P, V) {
			if (this.Type(O) !== 'Object') {
				throw new $TypeError('Assertion failed: Type(O) is not Object');
			}
			if (!this.IsPropertyKey(P)) {
				throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
			}
			var success = this.CreateDataProperty(O, P, V);
			if (!success) {
				throw new $TypeError('unable to create data property');
			}
			return success;
		},
	
		// https://www.ecma-international.org/ecma-262/6.0/#sec-objectcreate
		ObjectCreate: function ObjectCreate(proto, internalSlotsList) {
			if (proto !== null && this.Type(proto) !== 'Object') {
				throw new $TypeError('Assertion failed: proto must be null or an object');
			}
			var slots = arguments.length < 2 ? [] : internalSlotsList;
			if (slots.length > 0) {
				throw new $SyntaxError('es-abstract does not yet support internal slots');
			}
	
			if (proto === null && !$ObjectCreate) {
				throw new $SyntaxError('native Object.create support is required to create null objects');
			}
	
			return $ObjectCreate(proto);
		},
	
		// https://ecma-international.org/ecma-262/6.0/#sec-advancestringindex
		AdvanceStringIndex: function AdvanceStringIndex(S, index, unicode) {
			if (this.Type(S) !== 'String') {
				throw new $TypeError('S must be a String');
			}
			if (!this.IsInteger(index) || index < 0 || index > MAX_SAFE_INTEGER) {
				throw new $TypeError('Assertion failed: length must be an integer >= 0 and <= 2**53');
			}
			if (this.Type(unicode) !== 'Boolean') {
				throw new $TypeError('Assertion failed: unicode must be a Boolean');
			}
			if (!unicode) {
				return index + 1;
			}
			var length = S.length;
			if ((index + 1) >= length) {
				return index + 1;
			}
	
			var first = $charCodeAt(S, index);
			if (first < 0xD800 || first > 0xDBFF) {
				return index + 1;
			}
	
			var second = $charCodeAt(S, index + 1);
			if (second < 0xDC00 || second > 0xDFFF) {
				return index + 1;
			}
	
			return index + 2;
		},
	
		// https://www.ecma-international.org/ecma-262/6.0/#sec-createmethodproperty
		CreateMethodProperty: function CreateMethodProperty(O, P, V) {
			if (this.Type(O) !== 'Object') {
				throw new $TypeError('Assertion failed: Type(O) is not Object');
			}
	
			if (!this.IsPropertyKey(P)) {
				throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
			}
	
			var newDesc = {
				configurable: true,
				enumerable: false,
				value: V,
				writable: true
			};
			return !!$defineProperty(O, P, newDesc);
		},
	
		// https://www.ecma-international.org/ecma-262/6.0/#sec-definepropertyorthrow
		DefinePropertyOrThrow: function DefinePropertyOrThrow(O, P, desc) {
			if (this.Type(O) !== 'Object') {
				throw new $TypeError('Assertion failed: Type(O) is not Object');
			}
	
			if (!this.IsPropertyKey(P)) {
				throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
			}
	
			return !!$defineProperty(O, P, desc);
		},
	
		// https://www.ecma-international.org/ecma-262/6.0/#sec-deletepropertyorthrow
		DeletePropertyOrThrow: function DeletePropertyOrThrow(O, P) {
			if (this.Type(O) !== 'Object') {
				throw new $TypeError('Assertion failed: Type(O) is not Object');
			}
	
			if (!this.IsPropertyKey(P)) {
				throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
			}
	
			var success = delete O[P];
			if (!success) {
				throw new TypeError('Attempt to delete property failed.');
			}
			return success;
		},
	
		// https://www.ecma-international.org/ecma-262/6.0/#sec-enumerableownnames
		EnumerableOwnNames: function EnumerableOwnNames(O) {
			if (this.Type(O) !== 'Object') {
				throw new $TypeError('Assertion failed: Type(O) is not Object');
			}
	
			return keys(O);
		},
	
		// https://ecma-international.org/ecma-262/6.0/#sec-properties-of-the-number-prototype-object
		thisNumberValue: function thisNumberValue(value) {
			if (this.Type(value) === 'Number') {
				return value;
			}
	
			return $NumberValueOf(value);
		},
	
		// https://ecma-international.org/ecma-262/6.0/#sec-properties-of-the-boolean-prototype-object
		thisBooleanValue: function thisBooleanValue(value) {
			if (this.Type(value) === 'Boolean') {
				return value;
			}
	
			return $BooleanValueOf(value);
		},
	
		// https://ecma-international.org/ecma-262/6.0/#sec-properties-of-the-string-prototype-object
		thisStringValue: function thisStringValue(value) {
			if (this.Type(value) === 'String') {
				return value;
			}
	
			return $StringValueOf(value);
		},
	
		// https://ecma-international.org/ecma-262/6.0/#sec-properties-of-the-date-prototype-object
		thisTimeValue: function thisTimeValue(value) {
			return $DateValueOf(value);
		}
	});
	
	delete ES6.CheckObjectCoercible; // renamed in ES6 to RequireObjectCoercible
	
	module.exports = ES6;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var bind = __webpack_require__(46);
	
	module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var implementation = __webpack_require__(47);
	
	module.exports = Function.prototype.bind || implementation;


/***/ }),
/* 47 */
/***/ (function(module, exports) {

	'use strict';
	
	/* eslint no-invalid-this: 1 */
	
	var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
	var slice = Array.prototype.slice;
	var toStr = Object.prototype.toString;
	var funcType = '[object Function]';
	
	module.exports = function bind(that) {
	    var target = this;
	    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
	        throw new TypeError(ERROR_MESSAGE + target);
	    }
	    var args = slice.call(arguments, 1);
	
	    var bound;
	    var binder = function () {
	        if (this instanceof bound) {
	            var result = target.apply(
	                this,
	                args.concat(slice.call(arguments))
	            );
	            if (Object(result) === result) {
	                return result;
	            }
	            return this;
	        } else {
	            return target.apply(
	                that,
	                args.concat(slice.call(arguments))
	            );
	        }
	    };
	
	    var boundLength = Math.max(0, target.length - args.length);
	    var boundArgs = [];
	    for (var i = 0; i < boundLength; i++) {
	        boundArgs.push('$' + i);
	    }
	
	    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);
	
	    if (target.prototype) {
	        var Empty = function Empty() {};
	        Empty.prototype = target.prototype;
	        bound.prototype = new Empty();
	        Empty.prototype = null;
	    }
	
	    return bound;
	};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(49);


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var hasSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol';
	
	var isPrimitive = __webpack_require__(50);
	var isCallable = __webpack_require__(51);
	var isDate = __webpack_require__(52);
	var isSymbol = __webpack_require__(53);
	
	var ordinaryToPrimitive = function OrdinaryToPrimitive(O, hint) {
		if (typeof O === 'undefined' || O === null) {
			throw new TypeError('Cannot call method on ' + O);
		}
		if (typeof hint !== 'string' || (hint !== 'number' && hint !== 'string')) {
			throw new TypeError('hint must be "string" or "number"');
		}
		var methodNames = hint === 'string' ? ['toString', 'valueOf'] : ['valueOf', 'toString'];
		var method, result, i;
		for (i = 0; i < methodNames.length; ++i) {
			method = O[methodNames[i]];
			if (isCallable(method)) {
				result = method.call(O);
				if (isPrimitive(result)) {
					return result;
				}
			}
		}
		throw new TypeError('No default value');
	};
	
	var GetMethod = function GetMethod(O, P) {
		var func = O[P];
		if (func !== null && typeof func !== 'undefined') {
			if (!isCallable(func)) {
				throw new TypeError(func + ' returned for property ' + P + ' of object ' + O + ' is not a function');
			}
			return func;
		}
		return void 0;
	};
	
	// http://www.ecma-international.org/ecma-262/6.0/#sec-toprimitive
	module.exports = function ToPrimitive(input) {
		if (isPrimitive(input)) {
			return input;
		}
		var hint = 'default';
		if (arguments.length > 1) {
			if (arguments[1] === String) {
				hint = 'string';
			} else if (arguments[1] === Number) {
				hint = 'number';
			}
		}
	
		var exoticToPrim;
		if (hasSymbols) {
			if (Symbol.toPrimitive) {
				exoticToPrim = GetMethod(input, Symbol.toPrimitive);
			} else if (isSymbol(input)) {
				exoticToPrim = Symbol.prototype.valueOf;
			}
		}
		if (typeof exoticToPrim !== 'undefined') {
			var result = exoticToPrim.call(input, hint);
			if (isPrimitive(result)) {
				return result;
			}
			throw new TypeError('unable to convert exotic object to primitive');
		}
		if (hint === 'default' && (isDate(input) || isSymbol(input))) {
			hint = 'string';
		}
		return ordinaryToPrimitive(input, hint === 'default' ? 'number' : hint);
	};


/***/ }),
/* 50 */
/***/ (function(module, exports) {

	module.exports = function isPrimitive(value) {
		return value === null || (typeof value !== 'function' && typeof value !== 'object');
	};


/***/ }),
/* 51 */
/***/ (function(module, exports) {

	'use strict';
	
	var fnToStr = Function.prototype.toString;
	
	var constructorRegex = /^\s*class\b/;
	var isES6ClassFn = function isES6ClassFunction(value) {
		try {
			var fnStr = fnToStr.call(value);
			return constructorRegex.test(fnStr);
		} catch (e) {
			return false; // not a function
		}
	};
	
	var tryFunctionObject = function tryFunctionToStr(value) {
		try {
			if (isES6ClassFn(value)) { return false; }
			fnToStr.call(value);
			return true;
		} catch (e) {
			return false;
		}
	};
	var toStr = Object.prototype.toString;
	var fnClass = '[object Function]';
	var genClass = '[object GeneratorFunction]';
	var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
	
	module.exports = function isCallable(value) {
		if (!value) { return false; }
		if (typeof value !== 'function' && typeof value !== 'object') { return false; }
		if (typeof value === 'function' && !value.prototype) { return true; }
		if (hasToStringTag) { return tryFunctionObject(value); }
		if (isES6ClassFn(value)) { return false; }
		var strClass = toStr.call(value);
		return strClass === fnClass || strClass === genClass;
	};


/***/ }),
/* 52 */
/***/ (function(module, exports) {

	'use strict';
	
	var getDay = Date.prototype.getDay;
	var tryDateObject = function tryDateObject(value) {
		try {
			getDay.call(value);
			return true;
		} catch (e) {
			return false;
		}
	};
	
	var toStr = Object.prototype.toString;
	var dateClass = '[object Date]';
	var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
	
	module.exports = function isDateObject(value) {
		if (typeof value !== 'object' || value === null) { return false; }
		return hasToStringTag ? tryDateObject(value) : toStr.call(value) === dateClass;
	};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var toStr = Object.prototype.toString;
	var hasSymbols = __webpack_require__(54)();
	
	if (hasSymbols) {
		var symToStr = Symbol.prototype.toString;
		var symStringRegex = /^Symbol\(.*\)$/;
		var isSymbolObject = function isRealSymbolObject(value) {
			if (typeof value.valueOf() !== 'symbol') {
				return false;
			}
			return symStringRegex.test(symToStr.call(value));
		};
	
		module.exports = function isSymbol(value) {
			if (typeof value === 'symbol') {
				return true;
			}
			if (toStr.call(value) !== '[object Symbol]') {
				return false;
			}
			try {
				return isSymbolObject(value);
			} catch (e) {
				return false;
			}
		};
	} else {
	
		module.exports = function isSymbol(value) {
			// this environment does not support Symbols.
			return false && value;
		};
	}


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	var origSymbol = global.Symbol;
	var hasSymbolSham = __webpack_require__(55);
	
	module.exports = function hasNativeSymbols() {
		if (typeof origSymbol !== 'function') { return false; }
		if (typeof Symbol !== 'function') { return false; }
		if (typeof origSymbol('foo') !== 'symbol') { return false; }
		if (typeof Symbol('bar') !== 'symbol') { return false; }
	
		return hasSymbolSham();
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 55 */
/***/ (function(module, exports) {

	'use strict';
	
	/* eslint complexity: [2, 17], max-statements: [2, 33] */
	module.exports = function hasSymbols() {
		if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
		if (typeof Symbol.iterator === 'symbol') { return true; }
	
		var obj = {};
		var sym = Symbol('test');
		var symObj = Object(sym);
		if (typeof sym === 'string') { return false; }
	
		if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
		if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }
	
		// temp disabled per https://github.com/ljharb/object.assign/issues/17
		// if (sym instanceof Symbol) { return false; }
		// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
		// if (!(symObj instanceof Symbol)) { return false; }
	
		// if (typeof Symbol.prototype.toString !== 'function') { return false; }
		// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }
	
		var symVal = 42;
		obj[sym] = symVal;
		for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax
		if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }
	
		if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }
	
		var syms = Object.getOwnPropertySymbols(obj);
		if (syms.length !== 1 || syms[0] !== sym) { return false; }
	
		if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }
	
		if (typeof Object.getOwnPropertyDescriptor === 'function') {
			var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
			if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
		}
	
		return true;
	};


/***/ }),
/* 56 */
/***/ (function(module, exports) {

	'use strict';
	
	/* globals
		Set,
		Map,
		WeakSet,
		WeakMap,
	
		Promise,
	
		Symbol,
		Proxy,
	
		Atomics,
		SharedArrayBuffer,
	
		ArrayBuffer,
		DataView,
		Uint8Array,
		Float32Array,
		Float64Array,
		Int8Array,
		Int16Array,
		Int32Array,
		Uint8ClampedArray,
		Uint16Array,
		Uint32Array,
	*/
	
	var undefined; // eslint-disable-line no-shadow-restricted-names
	
	var ThrowTypeError = Object.getOwnPropertyDescriptor
		? (function () { return Object.getOwnPropertyDescriptor(arguments, 'callee').get; }())
		: function () { throw new TypeError(); };
	
	var hasSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol';
	
	var getProto = Object.getPrototypeOf || function (x) { return x.__proto__; }; // eslint-disable-line no-proto
	
	var generator; // = function * () {};
	var generatorFunction = generator ? getProto(generator) : undefined;
	var asyncFn; // async function() {};
	var asyncFunction = asyncFn ? asyncFn.constructor : undefined;
	var asyncGen; // async function * () {};
	var asyncGenFunction = asyncGen ? getProto(asyncGen) : undefined;
	var asyncGenIterator = asyncGen ? asyncGen() : undefined;
	
	var TypedArray = typeof Uint8Array === 'undefined' ? undefined : getProto(Uint8Array);
	
	var INTRINSICS = {
		'$ %Array%': Array,
		'$ %ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
		'$ %ArrayBufferPrototype%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer.prototype,
		'$ %ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined,
		'$ %ArrayPrototype%': Array.prototype,
		'$ %ArrayProto_entries%': Array.prototype.entries,
		'$ %ArrayProto_forEach%': Array.prototype.forEach,
		'$ %ArrayProto_keys%': Array.prototype.keys,
		'$ %ArrayProto_values%': Array.prototype.values,
		'$ %AsyncFromSyncIteratorPrototype%': undefined,
		'$ %AsyncFunction%': asyncFunction,
		'$ %AsyncFunctionPrototype%': asyncFunction ? asyncFunction.prototype : undefined,
		'$ %AsyncGenerator%': asyncGen ? getProto(asyncGenIterator) : undefined,
		'$ %AsyncGeneratorFunction%': asyncGenFunction,
		'$ %AsyncGeneratorPrototype%': asyncGenFunction ? asyncGenFunction.prototype : undefined,
		'$ %AsyncIteratorPrototype%': asyncGenIterator && hasSymbols && Symbol.asyncIterator ? asyncGenIterator[Symbol.asyncIterator]() : undefined,
		'$ %Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
		'$ %Boolean%': Boolean,
		'$ %BooleanPrototype%': Boolean.prototype,
		'$ %DataView%': typeof DataView === 'undefined' ? undefined : DataView,
		'$ %DataViewPrototype%': typeof DataView === 'undefined' ? undefined : DataView.prototype,
		'$ %Date%': Date,
		'$ %DatePrototype%': Date.prototype,
		'$ %decodeURI%': decodeURI,
		'$ %decodeURIComponent%': decodeURIComponent,
		'$ %encodeURI%': encodeURI,
		'$ %encodeURIComponent%': encodeURIComponent,
		'$ %Error%': Error,
		'$ %ErrorPrototype%': Error.prototype,
		'$ %eval%': eval, // eslint-disable-line no-eval
		'$ %EvalError%': EvalError,
		'$ %EvalErrorPrototype%': EvalError.prototype,
		'$ %Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
		'$ %Float32ArrayPrototype%': typeof Float32Array === 'undefined' ? undefined : Float32Array.prototype,
		'$ %Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
		'$ %Float64ArrayPrototype%': typeof Float64Array === 'undefined' ? undefined : Float64Array.prototype,
		'$ %Function%': Function,
		'$ %FunctionPrototype%': Function.prototype,
		'$ %Generator%': generator ? getProto(generator()) : undefined,
		'$ %GeneratorFunction%': generatorFunction,
		'$ %GeneratorPrototype%': generatorFunction ? generatorFunction.prototype : undefined,
		'$ %Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
		'$ %Int8ArrayPrototype%': typeof Int8Array === 'undefined' ? undefined : Int8Array.prototype,
		'$ %Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
		'$ %Int16ArrayPrototype%': typeof Int16Array === 'undefined' ? undefined : Int8Array.prototype,
		'$ %Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
		'$ %Int32ArrayPrototype%': typeof Int32Array === 'undefined' ? undefined : Int32Array.prototype,
		'$ %isFinite%': isFinite,
		'$ %isNaN%': isNaN,
		'$ %IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,
		'$ %JSON%': JSON,
		'$ %JSONParse%': JSON.parse,
		'$ %Map%': typeof Map === 'undefined' ? undefined : Map,
		'$ %MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined : getProto(new Map()[Symbol.iterator]()),
		'$ %MapPrototype%': typeof Map === 'undefined' ? undefined : Map.prototype,
		'$ %Math%': Math,
		'$ %Number%': Number,
		'$ %NumberPrototype%': Number.prototype,
		'$ %Object%': Object,
		'$ %ObjectPrototype%': Object.prototype,
		'$ %ObjProto_toString%': Object.prototype.toString,
		'$ %ObjProto_valueOf%': Object.prototype.valueOf,
		'$ %parseFloat%': parseFloat,
		'$ %parseInt%': parseInt,
		'$ %Promise%': typeof Promise === 'undefined' ? undefined : Promise,
		'$ %PromisePrototype%': typeof Promise === 'undefined' ? undefined : Promise.prototype,
		'$ %PromiseProto_then%': typeof Promise === 'undefined' ? undefined : Promise.prototype.then,
		'$ %Promise_all%': typeof Promise === 'undefined' ? undefined : Promise.all,
		'$ %Promise_reject%': typeof Promise === 'undefined' ? undefined : Promise.reject,
		'$ %Promise_resolve%': typeof Promise === 'undefined' ? undefined : Promise.resolve,
		'$ %Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
		'$ %RangeError%': RangeError,
		'$ %RangeErrorPrototype%': RangeError.prototype,
		'$ %ReferenceError%': ReferenceError,
		'$ %ReferenceErrorPrototype%': ReferenceError.prototype,
		'$ %Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
		'$ %RegExp%': RegExp,
		'$ %RegExpPrototype%': RegExp.prototype,
		'$ %Set%': typeof Set === 'undefined' ? undefined : Set,
		'$ %SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined : getProto(new Set()[Symbol.iterator]()),
		'$ %SetPrototype%': typeof Set === 'undefined' ? undefined : Set.prototype,
		'$ %SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
		'$ %SharedArrayBufferPrototype%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer.prototype,
		'$ %String%': String,
		'$ %StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined,
		'$ %StringPrototype%': String.prototype,
		'$ %Symbol%': hasSymbols ? Symbol : undefined,
		'$ %SymbolPrototype%': hasSymbols ? Symbol.prototype : undefined,
		'$ %SyntaxError%': SyntaxError,
		'$ %SyntaxErrorPrototype%': SyntaxError.prototype,
		'$ %ThrowTypeError%': ThrowTypeError,
		'$ %TypedArray%': TypedArray,
		'$ %TypedArrayPrototype%': TypedArray ? TypedArray.prototype : undefined,
		'$ %TypeError%': TypeError,
		'$ %TypeErrorPrototype%': TypeError.prototype,
		'$ %Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
		'$ %Uint8ArrayPrototype%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array.prototype,
		'$ %Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
		'$ %Uint8ClampedArrayPrototype%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray.prototype,
		'$ %Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
		'$ %Uint16ArrayPrototype%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array.prototype,
		'$ %Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
		'$ %Uint32ArrayPrototype%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array.prototype,
		'$ %URIError%': URIError,
		'$ %URIErrorPrototype%': URIError.prototype,
		'$ %WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
		'$ %WeakMapPrototype%': typeof WeakMap === 'undefined' ? undefined : WeakMap.prototype,
		'$ %WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet,
		'$ %WeakSetPrototype%': typeof WeakSet === 'undefined' ? undefined : WeakSet.prototype
	};
	
	module.exports = function GetIntrinsic(name, allowMissing) {
		if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
			throw new TypeError('"allowMissing" argument must be a boolean');
		}
	
		var key = '$ ' + name;
		if (!(key in INTRINSICS)) {
			throw new SyntaxError('intrinsic ' + name + ' does not exist!');
		}
	
		// istanbul ignore if // hopefully this is impossible to test :-)
		if (typeof INTRINSICS[key] === 'undefined' && !allowMissing) {
			throw new TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
		}
		return INTRINSICS[key];
	};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var GetIntrinsic = __webpack_require__(56);
	
	var $TypeError = GetIntrinsic('%TypeError%');
	var $SyntaxError = GetIntrinsic('%SyntaxError%');
	
	var has = __webpack_require__(45);
	
	var predicates = {
	  // https://ecma-international.org/ecma-262/6.0/#sec-property-descriptor-specification-type
	  'Property Descriptor': function isPropertyDescriptor(ES, Desc) {
	    if (ES.Type(Desc) !== 'Object') {
	      return false;
	    }
	    var allowed = {
	      '[[Configurable]]': true,
	      '[[Enumerable]]': true,
	      '[[Get]]': true,
	      '[[Set]]': true,
	      '[[Value]]': true,
	      '[[Writable]]': true
	    };
	
	    for (var key in Desc) { // eslint-disable-line
	      if (has(Desc, key) && !allowed[key]) {
	        return false;
	      }
	    }
	
	    var isData = has(Desc, '[[Value]]');
	    var IsAccessor = has(Desc, '[[Get]]') || has(Desc, '[[Set]]');
	    if (isData && IsAccessor) {
	      throw new $TypeError('Property Descriptors may not be both accessor and data descriptors');
	    }
	    return true;
	  }
	};
	
	module.exports = function assertRecord(ES, recordType, argumentName, value) {
	  var predicate = predicates[recordType];
	  if (typeof predicate !== 'function') {
	    throw new $SyntaxError('unknown record type: ' + recordType);
	  }
	  if (!predicate(ES, value)) {
	    throw new $TypeError(argumentName + ' must be a ' + recordType);
	  }
	  console.log(predicate(ES, value), value);
	};


/***/ }),
/* 58 */
/***/ (function(module, exports) {

	module.exports = Number.isNaN || function isNaN(a) {
		return a !== a;
	};


/***/ }),
/* 59 */
/***/ (function(module, exports) {

	var $isNaN = Number.isNaN || function (a) { return a !== a; };
	
	module.exports = Number.isFinite || function (x) { return typeof x === 'number' && !$isNaN(x) && x !== Infinity && x !== -Infinity; };


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	var bind = __webpack_require__(46);
	var has = bind.call(Function.call, Object.prototype.hasOwnProperty);
	
	var $assign = Object.assign;
	
	module.exports = function assign(target, source) {
		if ($assign) {
			return $assign(target, source);
		}
	
		for (var key in source) {
			if (has(source, key)) {
				target[key] = source[key];
			}
		}
		return target;
	};


/***/ }),
/* 61 */
/***/ (function(module, exports) {

	module.exports = function sign(number) {
		return number >= 0 ? 1 : -1;
	};


/***/ }),
/* 62 */
/***/ (function(module, exports) {

	module.exports = function mod(number, modulo) {
		var remain = number % modulo;
		return Math.floor(remain >= 0 ? remain : remain + modulo);
	};


/***/ }),
/* 63 */
/***/ (function(module, exports) {

	module.exports = function isPrimitive(value) {
		return value === null || (typeof value !== 'function' && typeof value !== 'object');
	};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var GetIntrinsic = __webpack_require__(56);
	
	var $Object = GetIntrinsic('%Object%');
	var $TypeError = GetIntrinsic('%TypeError%');
	var $String = GetIntrinsic('%String%');
	
	var assertRecord = __webpack_require__(57);
	var $isNaN = __webpack_require__(58);
	var $isFinite = __webpack_require__(59);
	
	var sign = __webpack_require__(61);
	var mod = __webpack_require__(62);
	
	var IsCallable = __webpack_require__(51);
	var toPrimitive = __webpack_require__(65);
	
	var has = __webpack_require__(45);
	
	// https://es5.github.io/#x9
	var ES5 = {
		ToPrimitive: toPrimitive,
	
		ToBoolean: function ToBoolean(value) {
			return !!value;
		},
		ToNumber: function ToNumber(value) {
			return +value; // eslint-disable-line no-implicit-coercion
		},
		ToInteger: function ToInteger(value) {
			var number = this.ToNumber(value);
			if ($isNaN(number)) { return 0; }
			if (number === 0 || !$isFinite(number)) { return number; }
			return sign(number) * Math.floor(Math.abs(number));
		},
		ToInt32: function ToInt32(x) {
			return this.ToNumber(x) >> 0;
		},
		ToUint32: function ToUint32(x) {
			return this.ToNumber(x) >>> 0;
		},
		ToUint16: function ToUint16(value) {
			var number = this.ToNumber(value);
			if ($isNaN(number) || number === 0 || !$isFinite(number)) { return 0; }
			var posInt = sign(number) * Math.floor(Math.abs(number));
			return mod(posInt, 0x10000);
		},
		ToString: function ToString(value) {
			return $String(value);
		},
		ToObject: function ToObject(value) {
			this.CheckObjectCoercible(value);
			return $Object(value);
		},
		CheckObjectCoercible: function CheckObjectCoercible(value, optMessage) {
			/* jshint eqnull:true */
			if (value == null) {
				throw new $TypeError(optMessage || 'Cannot call method on ' + value);
			}
			return value;
		},
		IsCallable: IsCallable,
		SameValue: function SameValue(x, y) {
			if (x === y) { // 0 === -0, but they are not identical.
				if (x === 0) { return 1 / x === 1 / y; }
				return true;
			}
			return $isNaN(x) && $isNaN(y);
		},
	
		// https://www.ecma-international.org/ecma-262/5.1/#sec-8
		Type: function Type(x) {
			if (x === null) {
				return 'Null';
			}
			if (typeof x === 'undefined') {
				return 'Undefined';
			}
			if (typeof x === 'function' || typeof x === 'object') {
				return 'Object';
			}
			if (typeof x === 'number') {
				return 'Number';
			}
			if (typeof x === 'boolean') {
				return 'Boolean';
			}
			if (typeof x === 'string') {
				return 'String';
			}
		},
	
		// https://ecma-international.org/ecma-262/6.0/#sec-property-descriptor-specification-type
		IsPropertyDescriptor: function IsPropertyDescriptor(Desc) {
			if (this.Type(Desc) !== 'Object') {
				return false;
			}
			var allowed = {
				'[[Configurable]]': true,
				'[[Enumerable]]': true,
				'[[Get]]': true,
				'[[Set]]': true,
				'[[Value]]': true,
				'[[Writable]]': true
			};
	
			for (var key in Desc) { // eslint-disable-line
				if (has(Desc, key) && !allowed[key]) {
					return false;
				}
			}
	
			var isData = has(Desc, '[[Value]]');
			var IsAccessor = has(Desc, '[[Get]]') || has(Desc, '[[Set]]');
			if (isData && IsAccessor) {
				throw new $TypeError('Property Descriptors may not be both accessor and data descriptors');
			}
			return true;
		},
	
		// https://ecma-international.org/ecma-262/5.1/#sec-8.10.1
		IsAccessorDescriptor: function IsAccessorDescriptor(Desc) {
			if (typeof Desc === 'undefined') {
				return false;
			}
	
			assertRecord(this, 'Property Descriptor', 'Desc', Desc);
	
			if (!has(Desc, '[[Get]]') && !has(Desc, '[[Set]]')) {
				return false;
			}
	
			return true;
		},
	
		// https://ecma-international.org/ecma-262/5.1/#sec-8.10.2
		IsDataDescriptor: function IsDataDescriptor(Desc) {
			if (typeof Desc === 'undefined') {
				return false;
			}
	
			assertRecord(this, 'Property Descriptor', 'Desc', Desc);
	
			if (!has(Desc, '[[Value]]') && !has(Desc, '[[Writable]]')) {
				return false;
			}
	
			return true;
		},
	
		// https://ecma-international.org/ecma-262/5.1/#sec-8.10.3
		IsGenericDescriptor: function IsGenericDescriptor(Desc) {
			if (typeof Desc === 'undefined') {
				return false;
			}
	
			assertRecord(this, 'Property Descriptor', 'Desc', Desc);
	
			if (!this.IsAccessorDescriptor(Desc) && !this.IsDataDescriptor(Desc)) {
				return true;
			}
	
			return false;
		},
	
		// https://ecma-international.org/ecma-262/5.1/#sec-8.10.4
		FromPropertyDescriptor: function FromPropertyDescriptor(Desc) {
			if (typeof Desc === 'undefined') {
				return Desc;
			}
	
			assertRecord(this, 'Property Descriptor', 'Desc', Desc);
	
			if (this.IsDataDescriptor(Desc)) {
				return {
					value: Desc['[[Value]]'],
					writable: !!Desc['[[Writable]]'],
					enumerable: !!Desc['[[Enumerable]]'],
					configurable: !!Desc['[[Configurable]]']
				};
			} else if (this.IsAccessorDescriptor(Desc)) {
				return {
					get: Desc['[[Get]]'],
					set: Desc['[[Set]]'],
					enumerable: !!Desc['[[Enumerable]]'],
					configurable: !!Desc['[[Configurable]]']
				};
			} else {
				throw new $TypeError('FromPropertyDescriptor must be called with a fully populated Property Descriptor');
			}
		},
	
		// https://ecma-international.org/ecma-262/5.1/#sec-8.10.5
		ToPropertyDescriptor: function ToPropertyDescriptor(Obj) {
			if (this.Type(Obj) !== 'Object') {
				throw new $TypeError('ToPropertyDescriptor requires an object');
			}
	
			var desc = {};
			if (has(Obj, 'enumerable')) {
				desc['[[Enumerable]]'] = this.ToBoolean(Obj.enumerable);
			}
			if (has(Obj, 'configurable')) {
				desc['[[Configurable]]'] = this.ToBoolean(Obj.configurable);
			}
			if (has(Obj, 'value')) {
				desc['[[Value]]'] = Obj.value;
			}
			if (has(Obj, 'writable')) {
				desc['[[Writable]]'] = this.ToBoolean(Obj.writable);
			}
			if (has(Obj, 'get')) {
				var getter = Obj.get;
				if (typeof getter !== 'undefined' && !this.IsCallable(getter)) {
					throw new TypeError('getter must be a function');
				}
				desc['[[Get]]'] = getter;
			}
			if (has(Obj, 'set')) {
				var setter = Obj.set;
				if (typeof setter !== 'undefined' && !this.IsCallable(setter)) {
					throw new $TypeError('setter must be a function');
				}
				desc['[[Set]]'] = setter;
			}
	
			if ((has(desc, '[[Get]]') || has(desc, '[[Set]]')) && (has(desc, '[[Value]]') || has(desc, '[[Writable]]'))) {
				throw new $TypeError('Invalid property descriptor. Cannot both specify accessors and a value or writable attribute');
			}
			return desc;
		}
	};
	
	module.exports = ES5;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var toStr = Object.prototype.toString;
	
	var isPrimitive = __webpack_require__(50);
	
	var isCallable = __webpack_require__(51);
	
	// http://ecma-international.org/ecma-262/5.1/#sec-8.12.8
	var ES5internalSlots = {
		'[[DefaultValue]]': function (O) {
			var actualHint;
			if (arguments.length > 1) {
				actualHint = arguments[1];
			} else {
				actualHint = toStr.call(O) === '[object Date]' ? String : Number;
			}
	
			if (actualHint === String || actualHint === Number) {
				var methods = actualHint === String ? ['toString', 'valueOf'] : ['valueOf', 'toString'];
				var value, i;
				for (i = 0; i < methods.length; ++i) {
					if (isCallable(O[methods[i]])) {
						value = O[methods[i]]();
						if (isPrimitive(value)) {
							return value;
						}
					}
				}
				throw new TypeError('No default value');
			}
			throw new TypeError('invalid [[DefaultValue]] hint supplied');
		}
	};
	
	// http://ecma-international.org/ecma-262/5.1/#sec-9.1
	module.exports = function ToPrimitive(input) {
		if (isPrimitive(input)) {
			return input;
		}
		if (arguments.length > 1) {
			return ES5internalSlots['[[DefaultValue]]'](input, arguments[1]);
		}
		return ES5internalSlots['[[DefaultValue]]'](input);
	};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var has = __webpack_require__(45);
	var regexExec = RegExp.prototype.exec;
	var gOPD = Object.getOwnPropertyDescriptor;
	
	var tryRegexExecCall = function tryRegexExec(value) {
		try {
			var lastIndex = value.lastIndex;
			value.lastIndex = 0;
	
			regexExec.call(value);
			return true;
		} catch (e) {
			return false;
		} finally {
			value.lastIndex = lastIndex;
		}
	};
	var toStr = Object.prototype.toString;
	var regexClass = '[object RegExp]';
	var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
	
	module.exports = function isRegex(value) {
		if (!value || typeof value !== 'object') {
			return false;
		}
		if (!hasToStringTag) {
			return toStr.call(value) === regexClass;
		}
	
		var descriptor = gOPD(value, 'lastIndex');
		var hasLastIndexDataProperty = descriptor && has(descriptor, 'value');
		if (!hasLastIndexDataProperty) {
			return false;
		}
	
		return tryRegexExecCall(value);
	};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var ES = __webpack_require__(43);
	
	module.exports = function find(predicate) {
		var list = ES.ToObject(this);
		var length = ES.ToLength(list.length);
		if (!ES.IsCallable(predicate)) {
			throw new TypeError('Array#find: predicate must be a function');
		}
		if (length === 0) {
			return void 0;
		}
		var thisArg;
		if (arguments.length > 0) {
			thisArg = arguments[1];
		}
	
		for (var i = 0, value; i < length; i++) {
			value = list[i];
			// inlined for performance: if (ES.Call(predicate, thisArg, [value, i, list])) {
			if (predicate.apply(thisArg, [value, i, list])) {
				return value;
			}
		}
		return void 0;
	};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = function getPolyfill() {
		// Detect if an implementation exists
		// Detect early implementations which skipped holes in sparse arrays
		// eslint-disable-next-line no-sparse-arrays
		var implemented = Array.prototype.find && [, 1].find(function () {
			return true;
		}) !== 1;
	
		// eslint-disable-next-line global-require
		return implemented ? Array.prototype.find : __webpack_require__(67);
	};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var define = __webpack_require__(39);
	var getPolyfill = __webpack_require__(68);
	
	module.exports = function shimArrayPrototypeFind() {
		var polyfill = getPolyfill();
	
		define(Array.prototype, { find: polyfill }, {
			find: function () {
				return Array.prototype.find !== polyfill;
			}
		});
	
		return polyfill;
	};


/***/ }),
/* 70 */
/***/ (function(module, exports) {

	module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\"><symbol fill=\"currentColor\" viewBox=\"0 0 1792 1792\" id=\"leplayer-icon-arrows-alt\"><title>arrows-alt</title><path d=\"M1411 541l-355 355 355 355 144-144q29-31 70-14 39 17 39 59v448q0 26-19 45t-45 19h-448q-42 0-59-40-17-39 14-69l144-144-355-355-355 355 144 144q31 30 14 69-17 40-59 40h-448q-26 0-45-19t-19-45v-448q0-42 40-59 39-17 69 14l144 144 355-355-355-355-144 144q-19 19-45 19-12 0-24-5-40-17-40-59v-448q0-26 19-45t45-19h448q42 0 59 40 17 39-14 69l-144 144 355 355 355-355-144-144q-31-30-14-69 17-40 59-40h448q26 0 45 19t19 45v448q0 42-39 59-13 5-25 5-26 0-45-19z\"/></symbol><symbol fill=\"currentColor\" viewBox=\"0 0 1792 1792\" id=\"leplayer-icon-backward\"><title>backward</title><path d=\"M1683 141q19-19 32-13t13 32v1472q0 26-13 32t-32-13l-710-710q-8-9-13-19v710q0 26-13 32t-32-13l-710-710q-19-19-19-45t19-45l710-710q19-19 32-13t13 32v710q5-11 13-19z\"/></symbol><symbol fill=\"currentColor\" viewBox=\"0 0 1792 1792\" id=\"leplayer-icon-bullseye\"><title>bullseye</title><path d=\"M1152 896q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181zm128 0q0-159-112.5-271.5t-271.5-112.5-271.5 112.5-112.5 271.5 112.5 271.5 271.5 112.5 271.5-112.5 112.5-271.5zm128 0q0 212-150 362t-362 150-362-150-150-362 150-362 362-150 362 150 150 362zm128 0q0-130-51-248.5t-136.5-204-204-136.5-248.5-51-248.5 51-204 136.5-136.5 204-51 248.5 51 248.5 136.5 204 204 136.5 248.5 51 248.5-51 204-136.5 136.5-204 51-248.5zm128 0q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z\"/></symbol><symbol fill=\"currentColor\" viewBox=\"0 0 400 380\" id=\"leplayer-icon-cat\"><title>cat</title> <path d=\"M 151.34904,307.20455 L 264.34904,307.20455 C 264.34904,291.14096 263.2021,287.95455 236.59904,287.95455 C 240.84904,275.20455 258.12424,244.35808 267.72404,244.35808 C 276.21707,244.35808 286.34904,244.82592 286.34904,264.20455 C 286.34904,286.20455 323.37171,321.67547 332.34904,307.20455 C 345.72769,285.63897 309.34904,292.21514 309.34904,240.20455 C 309.34904,169.05135 350.87417,179.18071 350.87417,139.20455 C 350.87417,119.20455 345.34904,116.50374 345.34904,102.20455 C 345.34904,83.30695 361.99717,84.403577 358.75805,68.734879 C 356.52061,57.911656 354.76962,49.23199 353.46516,36.143889 C 352.53959,26.857305 352.24452,16.959398 342.59855,17.357382 C 331.26505,17.824992 326.96549,37.77419 309.34904,39.204549 C 291.76851,40.631991 276.77834,24.238028 269.97404,26.579549 C 263.22709,28.901334 265.34904,47.204549 269.34904,60.204549 C 275.63588,80.636771 289.34904,107.20455 264.34904,111.20455 C 239.34904,115.20455 196.34904,119.20455 165.34904,160.20455 C 134.34904,201.20455 135.49342,249.3212 123.34904,264.20455 C 82.590696,314.15529 40.823919,293.64625 40.823919,335.20455 C 40.823919,353.81019 72.349045,367.20455 77.349045,361.20455 C 82.349045,355.20455 34.863764,337.32587 87.995492,316.20455 C 133.38711,298.16014 137.43914,294.47663 151.34904,307.20455 z \" style=\"fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1\"/> </symbol><symbol fill=\"currentColor\" viewBox=\"0 0 1792 1792\" id=\"leplayer-icon-commenting-o\"><title>commenting-o</title><path d=\"M640 896q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm384 0q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm384 0q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-512-512q-204 0-381.5 69.5t-282 187.5-104.5 255q0 112 71.5 213.5t201.5 175.5l87 50-27 96q-24 91-70 172 152-63 275-171l43-38 57 6q69 8 130 8 204 0 381.5-69.5t282-187.5 104.5-255-104.5-255-282-187.5-381.5-69.5zm896 512q0 174-120 321.5t-326 233-450 85.5q-70 0-145-8-198 175-460 242-49 14-114 22h-5q-15 0-27-10.5t-16-27.5v-1q-3-4-.5-12t2-10 4.5-9.5l6-9 7-8.5 8-9q7-8 31-34.5t34.5-38 31-39.5 32.5-51 27-59 26-76q-157-89-247.5-220t-90.5-281q0-130 71-248.5t191-204.5 286-136.5 348-50.5 348 50.5 286 136.5 191 204.5 71 248.5z\"/></symbol><symbol fill=\"currentColor\" viewBox=\"0 0 1792 1792\" id=\"leplayer-icon-download\"><title>download</title><path d=\"M1344 1344q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm256 0q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm128-224v320q0 40-28 68t-68 28h-1472q-40 0-68-28t-28-68v-320q0-40 28-68t68-28h465l135 136q58 56 136 56t136-56l136-136h464q40 0 68 28t28 68zm-325-569q17 41-14 70l-448 448q-18 19-45 19t-45-19l-448-448q-31-29-14-70 17-39 59-39h256v-448q0-26 19-45t45-19h256q26 0 45 19t19 45v448h256q42 0 59 39z\"/></symbol><symbol fill=\"currentColor\" viewBox=\"0 0 1792 1792\" id=\"leplayer-icon-edit\"><title>edit</title><path d=\"M888 1184l116-116-152-152-116 116v56h96v96h56zm440-720q-16-16-33 1l-350 350q-17 17-1 33t33-1l350-350q17-17 1-33zm80 594v190q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h832q63 0 117 25 15 7 18 23 3 17-9 29l-49 49q-14 14-32 8-23-6-45-6h-832q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113v-126q0-13 9-22l64-64q15-15 35-7t20 29zm-96-738l288 288-672 672h-288v-288zm444 132l-92 92-288-288 92-92q28-28 68-28t68 28l152 152q28 28 28 68t-28 68z\"/></symbol><symbol fill=\"currentColor\" viewBox=\"0 0 1792 1792\" id=\"leplayer-icon-forward\"><title>forward</title><path d=\"M109 1651q-19 19-32 13t-13-32v-1472q0-26 13-32t32 13l710 710q8 8 13 19v-710q0-26 13-32t32 13l710 710q19 19 19 45t-19 45l-710 710q-19 19-32 13t-13-32v-710q-5 10-13 19z\"/></symbol><symbol fill=\"currentColor\" viewBox=\"0 0 1792 1792\" id=\"leplayer-icon-info\"><title>info</title><path d=\"M1216 1344v128q0 26-19 45t-45 19h-512q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h64v-384h-64q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h384q26 0 45 19t19 45v576h64q26 0 45 19t19 45zm-128-1152v192q0 26-19 45t-45 19h-256q-26 0-45-19t-19-45v-192q0-26 19-45t45-19h256q26 0 45 19t19 45z\"/></symbol><symbol fill=\"currentColor\" viewBox=\"0 0 1792 1792\" id=\"leplayer-icon-list-ul\"><title>list-ul</title><path d=\"M384 1408q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm0-512q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm1408 416v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5zm-1408-928q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm1408 416v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5zm0-512v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5z\"/></symbol><symbol fill=\"currentColor\" viewBox=\"0 0 1792 1792\" id=\"leplayer-icon-magic\"><title>magic</title><path d=\"M1254 581l293-293-107-107-293 293zm447-293q0 27-18 45l-1286 1286q-18 18-45 18t-45-18l-198-198q-18-18-18-45t18-45l1286-1286q18-18 45-18t45 18l198 198q18 18 18 45zm-1351-190l98 30-98 30-30 98-30-98-98-30 98-30 30-98zm350 162l196 60-196 60-60 196-60-196-196-60 196-60 60-196zm930 478l98 30-98 30-30 98-30-98-98-30 98-30 30-98zm-640-640l98 30-98 30-30 98-30-98-98-30 98-30 30-98z\"/></symbol><symbol fill=\"currentColor\" viewBox=\"0 0 1792 1792\" id=\"leplayer-icon-pause\"><title>pause</title><path d=\"M1664 192v1408q0 26-19 45t-45 19h-512q-26 0-45-19t-19-45v-1408q0-26 19-45t45-19h512q26 0 45 19t19 45zm-896 0v1408q0 26-19 45t-45 19h-512q-26 0-45-19t-19-45v-1408q0-26 19-45t45-19h512q26 0 45 19t19 45z\"/></symbol><symbol fill=\"currentColor\" viewBox=\"0 0 1792 1792\" id=\"leplayer-icon-plane\"><title>plane</title><path d=\"M1568 160q44 52 12 148t-108 172l-161 161 160 696q5 19-12 33l-128 96q-7 6-19 6-4 0-7-1-15-3-21-16l-279-508-259 259 53 194q5 17-8 31l-96 96q-9 9-23 9h-2q-15-2-24-13l-189-252-252-189q-11-7-13-23-1-13 9-25l96-97q9-9 23-9 6 0 8 1l194 53 259-259-508-279q-14-8-17-24-2-16 9-27l128-128q14-13 30-8l665 159 160-160q76-76 172-108t148 12z\"/></symbol><symbol fill=\"currentColor\" viewBox=\"0 0 1792 1792\" id=\"leplayer-icon-play\"><title>play</title><path d=\"M1576 927l-1328 738q-23 13-39.5 3t-16.5-36v-1472q0-26 16.5-36t39.5 3l1328 738q23 13 23 31t-23 31z\"/></symbol><symbol fill=\"currentColor\" viewBox=\"0 0 1792 1792\" id=\"leplayer-icon-plus\"><title>plus</title><path d=\"M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z\"/></symbol><symbol fill=\"currentColor\" viewBox=\"0 0 1792 1792\" id=\"leplayer-icon-redo\"><title>redo</title><path d=\"M1664 256v448q0 26-19 45t-45 19h-448q-42 0-59-40-17-39 14-69l138-138q-148-137-349-137-104 0-198.5 40.5t-163.5 109.5-109.5 163.5-40.5 198.5 40.5 198.5 109.5 163.5 163.5 109.5 198.5 40.5q119 0 225-52t179-147q7-10 23-12 14 0 25 9l137 138q9 8 9.5 20.5t-7.5 22.5q-109 132-264 204.5t-327 72.5q-156 0-298-61t-245-164-164-245-61-298 61-298 164-245 245-164 298-61q147 0 284.5 55.5t244.5 156.5l130-129q29-31 70-14 39 17 39 59z\"/></symbol><symbol fill=\"currentColor\" viewBox=\"0 0 1792 1792\" id=\"leplayer-icon-refresh\"><title>refresh</title><path d=\"M1639 1056q0 5-1 7-64 268-268 434.5t-478 166.5q-146 0-282.5-55t-243.5-157l-129 129q-19 19-45 19t-45-19-19-45v-448q0-26 19-45t45-19h448q26 0 45 19t19 45-19 45l-137 137q71 66 161 102t187 36q134 0 250-65t186-179q11-17 53-117 8-23 30-23h192q13 0 22.5 9.5t9.5 22.5zm25-800v448q0 26-19 45t-45 19h-448q-26 0-45-19t-19-45 19-45l138-138q-148-137-349-137-134 0-250 65t-186 179q-11 17-53 117-8 23-30 23h-199q-13 0-22.5-9.5t-9.5-22.5v-7q65-268 270-434.5t480-166.5q146 0 284 55.5t245 156.5l130-129q19-19 45-19t45 19 19 45z\"/></symbol><symbol fill=\"currentColor\" viewBox=\"0 0 1792 1792\" id=\"leplayer-icon-trash\"><title>trash</title><path d=\"M704 1376v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm-544-992h448l-48-117q-7-9-17-11h-317q-10 2-17 11zm928 32v64q0 14-9 23t-23 9h-96v948q0 83-47 143.5t-113 60.5h-832q-66 0-113-58.5t-47-141.5v-952h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h309l70-167q15-37 54-63t79-26h320q40 0 79 26t54 63l70 167h309q14 0 23 9t9 23z\"/></symbol><symbol fill=\"currentColor\" viewBox=\"0 0 1792 1792\" id=\"leplayer-icon-undo\"><title>undo</title><path d=\"M1664 896q0 156-61 298t-164 245-245 164-298 61q-172 0-327-72.5t-264-204.5q-7-10-6.5-22.5t8.5-20.5l137-138q10-9 25-9 16 2 23 12 73 95 179 147t225 52q104 0 198.5-40.5t163.5-109.5 109.5-163.5 40.5-198.5-40.5-198.5-109.5-163.5-163.5-109.5-198.5-40.5q-98 0-188 35.5t-160 101.5l137 138q31 30 14 69-17 40-59 40h-448q-26 0-45-19t-19-45v-448q0-42 40-59 39-17 69 14l130 129q107-101 244.5-156.5t284.5-55.5q156 0 298 61t245 164 164 245 61 298z\"/></symbol><symbol fill=\"currentColor\" viewBox=\"0 0 1792 1792\" id=\"leplayer-icon-volume-down\"><title>volume-down</title><path d=\"M1088 352v1088q0 26-19 45t-45 19-45-19l-333-333h-262q-26 0-45-19t-19-45v-384q0-26 19-45t45-19h262l333-333q19-19 45-19t45 19 19 45zm384 544q0 76-42.5 141.5t-112.5 93.5q-10 5-25 5-26 0-45-18.5t-19-45.5q0-21 12-35.5t29-25 34-23 29-35.5 12-57-12-57-29-35.5-34-23-29-25-12-35.5q0-27 19-45.5t45-18.5q15 0 25 5 70 27 112.5 93t42.5 142z\"/></symbol><symbol fill=\"currentColor\" viewBox=\"0 0 1792 1792\" id=\"leplayer-icon-volume-off\"><title>volume-off</title><path d=\"M1280 352v1088q0 26-19 45t-45 19-45-19l-333-333h-262q-26 0-45-19t-19-45v-384q0-26 19-45t45-19h262l333-333q19-19 45-19t45 19 19 45z\"/></symbol><symbol fill=\"currentColor\" viewBox=\"0 0 1792 1792\" id=\"leplayer-icon-volume-up\"><title>volume-up</title><path d=\"M832 352v1088q0 26-19 45t-45 19-45-19l-333-333h-262q-26 0-45-19t-19-45v-384q0-26 19-45t45-19h262l333-333q19-19 45-19t45 19 19 45zm384 544q0 76-42.5 141.5t-112.5 93.5q-10 5-25 5-26 0-45-18.5t-19-45.5q0-21 12-35.5t29-25 34-23 29-35.5 12-57-12-57-29-35.5-34-23-29-25-12-35.5q0-27 19-45.5t45-18.5q15 0 25 5 70 27 112.5 93t42.5 142zm256 0q0 153-85 282.5t-225 188.5q-13 5-25 5-27 0-46-19t-19-45q0-39 39-59 56-29 76-44 74-54 115.5-135.5t41.5-173.5-41.5-173.5-115.5-135.5q-20-15-76-44-39-20-39-59 0-26 19-45t45-19q13 0 26 5 140 59 225 188.5t85 282.5zm256 0q0 230-127 422.5t-338 283.5q-13 5-26 5-26 0-45-19t-19-45q0-36 39-59 7-4 22.5-10.5t22.5-10.5q46-25 82-51 123-91 192-227t69-289-69-289-192-227q-36-26-82-51-7-4-22.5-10.5t-22.5-10.5q-39-23-39-59 0-26 19-45t45-19q13 0 26 5 211 91 338 283.5t127 422.5z\"/></symbol></svg>"

/***/ }),
/* 71 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var preset = exports.preset = {
		options: {
			width: '100%',
			controls: {
				common: [['play', 'volume', 'divider', 'timeline', 'divider', 'fullscreen'], ['rate', 'divider', 'backward', 'divider', 'source', 'divider', 'download']],
				fullscreen: [['play', 'volume', 'divider', 'timeline', 'divider', 'rate', 'divider', 'backward', 'divider', 'source', 'divider', 'download', 'divider', 'fullscreen']]
			}
		}
	};

/***/ }),
/* 72 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var controls = ['play', 'volume', 'divider', 'timeline', 'divider', 'rate', 'download', 'fullscreen'];
	
	var preset = exports.preset = {
		options: {
			controls: {
				common: [controls, []],
				fullscreen: [controls]
			}
		}
	};

/***/ }),
/* 73 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var preset = exports.preset = {
		options: {
			width: '100%',
			controls: {
				common: [['play', 'volume', 'timeline', 'rate', 'source', 'divider', 'download', 'fullscreen'], []],
				fullscreen: [['play', 'volume', 'timeline', 'rate', 'source', 'divider', 'download', 'fullscreen']]
			}
		}
	};

/***/ }),
/* 74 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var preset = exports.preset = {
		options: {
			width: '100%',
			controls: {
				common: [['play', 'volume', 'timeline', 'rate', 'source', 'divider', 'fullscreen'], []],
				fullscreen: [['play', 'volume', 'timeline', 'rate', 'source', 'divider', 'fullscreen']]
			}
		}
	};

/***/ }),
/* 75 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var preset = exports.preset = {
		options: {
			width: '100%',
	
			controlsOptions: {
				common: {
					align: ['justify']
				}
			},
			controls: {
				common: [['play', 'timeline', 'rate', 'volume', 'source', 'fullscreen']],
				fullscreen: [['play', 'timeline', 'rate', 'volume', 'source', 'fullscreen']],
				mini: [['play', 'timeline', 'volume', 'fullscreen']]
			}
		}
	};

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(1);
	
	__webpack_require__(77);
	
	__webpack_require__(78);
	
	__webpack_require__(79);

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Player = window.lePlayer || window.$.lePlayer;
	var defaultOptions = {
		videoPlayed: [25, 50, 100],
		videoPlayedDelta: 5,
		volumeChangeDelay: 1000,
		rateChangeDelay: 2000
	};
	
	Player.plugin('ga', function (pluginOptions) {
		var options = _jquery2.default.extend({}, defaultOptions, pluginOptions);
		var player = this;
	
		if (!window.ga) {
			console.error('Google Analytics does not exist');
			return;
		}
	
		player.on('firstplay', function (e) {
			window.ga('send', 'event', 'Player Video Started');
		});
	
		player.on('controlclick', function (e, data) {
			var control = data.control;
			var _control$options = control.options,
			    name = _control$options.name,
			    collection = _control$options.collection;
	
			if (name) {
				window.ga('send', 'event', 'Player Control Click', name, collection);
			}
		});
	
		player.on('sectionsclick', function (e, data) {
			window.ga('send', 'event', 'Player Sections', 'Click', player.view);
		});
	
		var volumeChangeTimeout = null;
	
		player.on('volumechange', function (e, data) {
			clearTimeout(volumeChangeTimeout);
	
			volumeChangeTimeout = setTimeout(function (_) {
				var value = data.volume;
				window.ga('send', 'event', 'Player Volume Change', Number(value).toFixed(1));
			}, options.volumeChangeDelay);
		});
	
		var rateChangeTimeout = null;
		player.on('ratechange', function (e, data) {
			clearTimeout(rateChangeTimeout);
	
			rateChangeTimeout = setTimeout(function (_) {
				var value = data.rate;
				window.ga('send', 'event', 'Player Rate Change', value);
			}, options.rateChangeDelay);
		});
	
		var playedEventsSent = {};
		player.on('timeupdate', function () {
			var percent = player.video.playedPercentage;
			var delta = options.videoPlayedDelta;
			options.videoPlayed.forEach(function (item) {
				if (!playedEventsSent[item] && Math.abs(percent - item) < delta) {
					window.ga('send', 'event', 'Player Video Played', item - delta + '-' + item + '%');
					playedEventsSent[item] = true;
				}
			});
		});
	
		// First qualitychange fired on player init, and we don't need track this to GA
		var loadQuality = false;
		player.on('qualitychange', function (e) {
			if (!loadQuality) {
				loadQuality = true;
				return;
			}
	
			if (player.video.playbackQuality != null) {
				window.ga('send', 'event', 'Player Change Quality', player.video.playbackQuality.title);
			}
		});
	});

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Player = window.lePlayer || window.$.lePlayer;
	var Entity = Player.getComponent('Entity');
	
	var trackProvide = function trackProvide(track) {
		if (track == null || track.languageCode == null) {
			return track;
		}
		return {
			language: track.languageCode,
			title: track.languageCode,
			tooltip: track.languageName,
			name: track.languageCode
		};
	};
	
	var Youtube = function (_Entity) {
		_inherits(Youtube, _Entity);
	
		function Youtube(player, options) {
			_classCallCheck(this, Youtube);
	
			var _this = _possibleConstructorReturn(this, (Youtube.__proto__ || Object.getPrototypeOf(Youtube)).call(this, player, options));
	
			_this._paused = true;
	
			_this.src = _this.player.options.src;
	
			_this.player.addClass('leplayer--youtube');
			_this.element.on('click', _this.onClick.bind(_this));
			_this.element.on('dblclick', _this.onDblclick.bind(_this));
			return _this;
		}
	
		/**
	  * @override
	  */
	
	
		_createClass(Youtube, [{
			key: 'onClick',
			value: function onClick(event) {
				this.trigger('click');
			}
		}, {
			key: 'onDblclick',
			value: function onDblclick() {
				this.trigger('dblclick');
			}
		}, {
			key: 'increaseRate',
	
	
			/**
	   * @override
	   */
			value: function increaseRate() {
				var index = this.availableRates.indexOf(this.rate);
				if (index + 1 >= this.availableRates.length) return;
				return this.rate = this.availableRates[index + 1];
			}
	
			/**
	   * @override
	   */
	
		}, {
			key: 'decreaseRate',
			value: function decreaseRate() {
				var index = this.availableRates.indexOf(this.rate);
				if (index - 1 < 0) return;
				return this.rate = this.availableRates[index - 1];
			}
		}, {
			key: 'getAvailableQualityLevels',
			value: function getAvailableQualityLevels() {
				var arr = this.ytPlayer.getAvailableQualityLevels();
				var index = arr.indexOf('auto');
	
				if (index > -1) {
					arr.splice(index, 1);
				}
	
				return arr.map(function (item) {
					return {
						title: Youtube.QUALITY_NAMES[item] || item,
						name: item
					};
				});
			}
		}, {
			key: 'supportsFullScreen',
			value: function supportsFullScreen() {
				return true;
			}
		}, {
			key: 'play',
			value: function play() {
				this.ytPlayer.playVideo();
				this.trigger('play');
			}
		}, {
			key: 'pause',
			value: function pause() {
				this.ytPlayer.pauseVideo();
				this.trigger('pause');
			}
		}, {
			key: 'init',
			value: function init() {
				var _this2 = this;
	
				_get(Youtube.prototype.__proto__ || Object.getPrototypeOf(Youtube.prototype), 'init', this).call(this);
				return Youtube.apiLoaded().then(function () {
					return _this2.initYTPlayer();
				});
			}
		}, {
			key: 'createElement',
			value: function createElement() {
				this.element = (0, _jquery2.default)('<div />').addClass('leplayer__youtube-wrapper').attr('tabindex', '0');
				this.youtubeElement = (0, _jquery2.default)('<div />').addClass('leplayer__youtube');
				this.blocker = (0, _jquery2.default)('<div />').addClass('leplayer__youtube-blocker');
	
				return this.element.append(this.blocker).append(this.youtubeElement);
			}
		}, {
			key: 'initYTPlayer',
			value: function initYTPlayer() {
				var _this3 = this;
	
				this._initPromise = _jquery2.default.Deferred();
				var globalOptions = this.player.options;
				var ytOptions = {
					autoplay: globalOptions.autoplay ? 1 : 0,
					loop: globalOptions.loop ? 1 : 0,
					iv_load_policy: 3,
					controls: 0,
					modestbranding: 1,
					rel: 0,
					showinfo: 0,
					cc_load_policy: 0,
					disablekb: 0,
					fs: 0,
					start: globalOptions.time
				};
	
				YT.ready(function () {
					_this3.options.ctx.replaceWith(_this3.element);
	
					_this3.ytPlayer = new YT.Player(_this3.youtubeElement[0], {
						videoId: _this3.videoId,
						width: globalOptions.width || '100%',
						playerVars: ytOptions,
						events: {
							onReady: _this3.onYTPReady.bind(_this3),
							onStateChange: _this3.onYTPStateChange.bind(_this3),
							onPlaybackRateChange: _this3.onYTPRateChange.bind(_this3),
							onPlaybackQualityChange: _this3.onYTPPlaybackQualityChange.bind(_this3)
						}
					});
				});
				return this._initPromise.promise();
			}
		}, {
			key: 'setAvailablePlaybackRates',
			value: function setAvailablePlaybackRates() {
				this.availableRates = this.ytPlayer.getAvailablePlaybackRates();
				this.rateMin = this.availableRates[0];
				this.rateMax = this.availableRates[this.availableRates.length - 1];
			}
		}, {
			key: 'onYTPReady',
			value: function onYTPReady(e) {
				this._initPromise.resolve();
				this._initRate();
				this._initVolume();
				this.setAvailablePlaybackRates();
			}
		}, {
			key: 'onYTPRateChange',
			value: function onYTPRateChange(e) {
				this.trigger('ratechange');
			}
		}, {
			key: 'onYTPPlaybackQualityChange',
			value: function onYTPPlaybackQualityChange(e) {
				var data = e.data;
				this._playbackQuality = this.getAvailableQualityLevels().find(function (item) {
					return item.name === data;
				});
				this.trigger('qualitychange', this._playbackQuality);
			}
		}, {
			key: 'onYTPStateChange',
			value: function onYTPStateChange(e) {
				var state = e.data;
				if (state === this.lastState) {
					return;
				}
	
				this.lastState = state;
				switch (state) {
					case YT.PlayerState.UNSTARTED:
						this.trigger('loadstart');
						this.trigger('loadedmetadata');
						this.trigger('durationchange');
						this.trigger('ratechange');
						this.trigger('volumechange');
						this.trigger('trackschange');
						if (this.player.options.autoplay) {
							this.trigger('play');
						}
						break;
	
					case YT.PlayerState.ENDED:
						this.trigger('pause');
						this.trigger('ended');
						break;
	
					case YT.PlayerState.PLAYING:
						this.trigger('timeupdate');
						this.trigger('durationchange');
						this.trigger('playing');
	
						this.ytPlayer.setPlaybackQuality(this._nextPlaybackQuality);
	
						if (this.isSeeking) {
							this.onSeeked();
						}
	
						this.loadCaptions();
						this.emitTimeupdate();
						break;
	
					case YT.PlayerState.PAUSED:
						this.trigger('canplay');
	
						if (this.isSeeking) {
							this.onSeeked();
						}
						break;
	
					case YT.PlayerState.BUFFERING:
						this.player.trigger('timeupdate');
						this.player.trigger('waiting');
	
						this.ytPlayer.setPlaybackQuality(this._nextPlaybackQuality);
	
						break;
				}
			}
		}, {
			key: 'onSeeked',
			value: function onSeeked() {
				clearInterval(this.seekingInterval);
				this.isSeeking = false;
	
				if (this.wasPausedBeforeSeek) {
					this.pause();
				}
	
				this.trigger('seeked');
			}
		}, {
			key: 'emitTimeupdate',
			value: function emitTimeupdate() {
				var _this4 = this;
	
				clearInterval(this.seekingInterval);
	
				this.seekingInterval = setInterval(function () {
					if (_this4.lastState === YT.PlayerState.PAUSED) {
						clearInterval(_this4.seekingInterval);
					} else if (_this4.currentTime !== _this4.timeBeforeSeek) {
						_this4.trigger('timeupdate');
					}
				}, 250);
			}
		}, {
			key: 'loadCaptions',
			value: function loadCaptions() {
				var _this5 = this;
	
				var emptyTracklist = function emptyTracklist() {
					return _this5.subtitles == null || _this5.subtitles.length === 0;
				};
	
				clearInterval(this._loadCaptionsWatcher);
				if (!this._tracksDisable && this.checkCaptionsExist() && emptyTracklist()) {
					this.ytPlayer.loadModule('captions');
	
					this._loadCaptionsWatcher = setInterval(function () {
						if (!emptyTracklist() && _this5.checkCaptionsExist()) {
							_this5.trigger('trackschange');
							clearInterval(_this5._loadCaptionsWatcher);
						}
					}, 250);
				}
			}
		}, {
			key: 'checkCaptionsExist',
			value: function checkCaptionsExist() {
				try {
					return this.ytPlayer.getOptions('captions') != null;
				} catch (error) {
					return false;
				}
			}
		}, {
			key: 'src',
			set: function set(src) {
				if (src == null) return;
				if (this.src && this.src.url === src.url) return;
	
				var url = src.url || src.id;
	
				this.videoId = Youtube.parseUrl(url);
	
				if (this.player.options.poster) {
					this.poster = this.player.options.poster;
				} else {
					this.poster = 'https://img.youtube.com/vi/' + this.videoId + '/0.jpg';
				}
			}
		}, {
			key: 'currentTime',
			get: function get() {
				return this.ytPlayer ? this.ytPlayer.getCurrentTime() : 0;
			},
			set: function set(value) {
				if (this.lastState === YT.PlayerState.PAUSED) {
					this.timeBeforeSeek = this.currentTime;
				}
	
				if (!this.isSeeking) {
					this.wasPausedBeforeSeek = this.paused;
				}
	
				var time = void 0;
				if (value >= this.duration) {
					time = this.duration;
				} else if (value < 0) {
					time = 0;
				} else {
					time = value;
				}
	
				this.isSeeking = true;
				this.ytPlayer.seekTo(time, true);
				this.player.trigger('timeupdateload', { currentTime: time });
	
				this.trigger('seeking');
	
				this.emitTimeupdate();
			}
		}, {
			key: 'duration',
			get: function get() {
				return this.ytPlayer && this.ytPlayer.getDuration ? this.ytPlayer.getDuration() : NaN;
			}
		}, {
			key: 'paused',
			get: function get() {
				return this.ytPlayer ? this.lastState !== YT.PlayerState.PLAYING && this.lastState !== YT.PlayerState.BUFFERING : true;
			}
		}, {
			key: 'rate',
			get: function get() {
				return this.ytPlayer.getPlaybackRate();
			},
			set: function set(value) {
				_set(Youtube.prototype.__proto__ || Object.getPrototypeOf(Youtube.prototype), 'rate', value, this);
				this.ytPlayer.setPlaybackRate(value);
				this.trigger('ratechange');
			}
		}, {
			key: 'muted',
			set: function set(value) {
				var _this6 = this;
	
				if (value) {
					this.ytPlayer.mute();
				} else {
					this.ytPlayer.unMute();
				}
	
				setTimeout(function () {
					_this6.trigger('volumechange');
				}, 50);
			},
			get: function get() {
				return this.ytPlayer.isMuted();
			}
		}, {
			key: 'subtitles',
			get: function get() {
				return this.checkCaptionsExist() ? (this.ytPlayer.getOption('captions', 'tracklist') || []).map(trackProvide) : [];
			}
		}, {
			key: 'track',
			get: function get() {
				if (this._track === undefined && this.checkCaptionsExist()) {
					return trackProvide(this.ytPlayer.getOption('captions', 'track'));
				} else {
					return this._track;
				}
			},
			set: function set(value) {
				this._track = value;
				if (value === null) {
					this._tracksDisable = true;
					/* Disable captions */
					this.ytPlayer.unloadModule('captions');
	
					this.trigger('trackschange');
					return;
				}
				this.ytPlayer.setOption('captions', 'track', { languageCode: value.name }).setOption('captions', 'reload', true);
	
				if (this._tracksDisable) {
					/* Enable captions */
					this.ytPlayer.loadModule('captions');
				}
				this.trigger('trackschange');
			}
		}, {
			key: 'playbackQuality',
			set: function set(name) {
				_set(Youtube.prototype.__proto__ || Object.getPrototypeOf(Youtube.prototype), 'playbackQuality', name, this);
				var time = this.currentTime;
				var status = this.ytPlayer.getPlayerState();
	
				if (status !== YT.PlayerState.UNSTARTED && status !== YT.PlayerState.CUED) {
					this.ytPlayer.pauseVideo();
				}
	
				this._nextPlaybackQuality = name;
				this.ytPlayer.setPlaybackQuality(name);
				this.ytPlayer.seekTo(time);
	
				if (status !== YT.PlayerState.PAUSED) {
					this.ytPlayer.playVideo();
				}
			},
			get: function get() {
				var _this7 = this;
	
				if (this._playbackQuality == null) {
					this._playbackQuality = this.getAvailableQualityLevels().find(function (item) {
						return item.name === _this7.ytPlayer.getPlaybackQuality();
					});
				}
				return this._playbackQuality;
			}
		}, {
			key: 'volume',
			get: function get() {
				return this.ytPlayer ? this.ytPlayer.getVolume() / 100.0 : 1;
			},
			set: function set(value) {
				var _this8 = this;
	
				_set(Youtube.prototype.__proto__ || Object.getPrototypeOf(Youtube.prototype), 'volume', value, this);
				this.ytPlayer.setVolume(value * 100);
	
				setTimeout(function () {
					_this8.trigger('volumechange');
				}, 50);
			}
		}], [{
			key: 'parseUrl',
			value: function parseUrl(url) {
				var result = null;
				var regex = Youtube.URL_REGEX;
				var match = url.match(regex);
				if (url.length === 11) {
					result = url;
				} else if (match && match[2].length === 11) {
					result = match[2];
				}
				return result;
			}
		}]);
	
		return Youtube;
	}(Entity);
	
	Youtube.TEST_VIDEO = document.createElement('video');
	/**
	 * @return {boolean}
	 *         - True if volume can be controlled
	 *         - False otherwise
	 */
	Youtube.canControlVolume = function () {
		// IE will error if Windows Media Player not installed #3315
		try {
			var volume = Youtube.TEST_VIDEO.volume;
	
			Youtube.TEST_VIDEO.volume = volume / 2 + 0.1;
			return volume !== Youtube.TEST_VIDEO.volume;
		} catch (e) {
			return false;
		}
	};
	
	Youtube.prototype.featureControlVolume = Youtube.canControlVolume();
	
	Youtube.URL_REGEX = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
	
	Youtube.QUALITY_NAMES = {
		tiny: '140p',
		small: '240p',
		medium: '360p',
		large: '480p',
		hd720: '720p',
		hd1080: '1080p',
		highres: 'HD',
		auto: 'Авто'
	};
	
	Youtube.apiLoaded = function () {
		var _this9 = this;
	
		if (this._loaded) return _jquery2.default.Deferred().resolve();
	
		return _jquery2.default.getScript('https://www.youtube.com/iframe_api').then(function () {
			return _this9._loaded = true;
		});
	};
	
	Player.registerComponent('Youtube', Youtube);
	
	Player.preset('youtube', {
		options: {
			entity: 'Youtube',
			controls: {
				common: [['play', 'volume', 'timeline', 'rate', 'backward', 'source', 'subtitle', 'divider', 'section', 'fullscreen'], []],
				fullscreen: [['play', 'volume', 'timeline', 'rate', 'backward', 'source', 'subtitle', 'divider', 'section', 'fullscreen']]
			}
		}
	});
	
	Player.plugin('youtube', function (pluginOptions) {
	
		/* global YT */
		Youtube.apiLoaded();
	});

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Player = window.lePlayer;
	var Component = Player.getComponent('Component');
	var Icon = Player.getComponent('Icon');
	var secondsToTime = Player.secondsToTime;
	
	var RadialBar = function (_Component) {
		_inherits(RadialBar, _Component);
	
		function RadialBar(player, options) {
			_classCallCheck(this, RadialBar);
	
			options = _jquery2.default.extend({}, {
				strokeDasharray: 293,
				size: 98
			}, options);
	
			var _this = _possibleConstructorReturn(this, (RadialBar.__proto__ || Object.getPrototypeOf(RadialBar)).call(this, player, options));
	
			_this._circleElement = _this.element.find('svg circle');
			return _this;
		}
	
		_createClass(RadialBar, [{
			key: 'createElement',
			value: function createElement() {
				var _options = this.options,
				    strokeDasharray = _options.strokeDasharray,
				    size = _options.size;
	
				var template = ('\n\t\t\t<div class="leplayer-next__play leplayer-play-button">\n                <svg height="100%" version="1.1" viewBox="0 0 ' + size + ' ' + size + '" class="leplayer-next__svg-spinner">\n                    <circle cx="' + -size / 2 + '" cy="' + size / 2 + '" fill-opacity="0" r="46.5" stroke="currentColor" stroke-dasharray="' + strokeDasharray + '" stroke-dashoffset="' + -1 * strokeDasharray + '" stroke-width="6" transform="rotate(-90)">\n                    </circle>\n                </svg>\n\t\t\t\t<div class="leplayer-next__button leplayer-play-button__button">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t').trim();
				this.element = (0, _jquery2.default)('<div />').html(template).contents();
	
				this.element.find('.leplayer-next__button').append(new Icon(this.player, { iconName: 'play' }).element);
	
				return this.element;
			}
		}, {
			key: 'startAnimation',
			value: function startAnimation(cb) {
				this._circleElement.stop().animate({
					'stroke-dashoffset': -2 * this.options.strokeDasharray
				}, this.options.timeout, cb);
			}
		}, {
			key: 'stopAnimation',
			value: function stopAnimation() {
				this._circleElement.stop();
			}
		}, {
			key: 'radial',
			set: function set(value) {
				this._radial = value;
				this._circleElement.css('stroke-dashoffset', -(value + 1) * this.options.strokeDasharray);
			},
			get: function get() {
				return this._radial;
			}
		}]);
	
		return RadialBar;
	}(Component);
	
	var NextComponent = function (_Component2) {
		_inherits(NextComponent, _Component2);
	
		function NextComponent(player, options) {
			_classCallCheck(this, NextComponent);
	
			options = _jquery2.default.extend({}, {
				title: '',
				description: '',
				timeout: 10000,
				auto: false,
				fn: function fn() {}
			}, options);
	
			var _this2 = _possibleConstructorReturn(this, (NextComponent.__proto__ || Object.getPrototypeOf(NextComponent)).call(this, player, options));
	
			_this2.cancelButton = _this2.element.find('.leplayer-next__cancel');
			_this2.player.on('play', function () {
				return _this2.hide();
			});
			_this2.player.on('loadstart', function () {
				return _this2.hide();
			});
			_this2.player.on('ended', function () {
				return _this2.show();
			});
	
			_this2.player.on('timeupdate', function () {
				if (!_this2.player.ended) {
					_this2.hide();
				}
			});
	
			_this2.progressButton.element.on('click', _this2.next.bind(_this2));
			_this2.cancelButton.on('click', _this2.cancel.bind(_this2));
	
			return _this2;
		}
	
		_createClass(NextComponent, [{
			key: 'createElement',
			value: function createElement() {
				var _options2 = this.options,
				    timeout = _options2.timeout,
				    title = _options2.title,
				    description = _options2.description,
				    poster = _options2.poster,
				    auto = _options2.auto,
				    time = _options2.time;
	
				var template = ('\n\t\t\t<div class="leplayer-next">\n                <div class="leplayer-next__head">\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0435 \u0432\u0438\u0434\u0435\u043E</div>\n\t\t\t\t<div class="leplayer-next__box">\n\t\t\t\t\t<div class="leplayer-next__poster">\n\t\t\t\t\t\t<div class="leplayer-next__mini-title">' + title + '</div>\n\t\t\t\t\t\t<div class="leplayer-next__cancel" role="button">\u041E\u0442\u043C\u0435\u043D\u0430</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="leplayer-next__content">\n                        <div class="leplayer-next__title">' + title + '</div>\n                        <div class="leplayer-next__description">' + description + '</div>\n                        ' + (time ? '<div class="leplayer-next__time">' + secondsToTime(time) + '</div>' : '') + '\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t').trim();
	
				this.progressButton = new RadialBar(this.player, { timeout: timeout });
	
				this.element = (0, _jquery2.default)('<div />').html(template).contents();
	
				this.element.find('.leplayer-next__poster').append(this.progressButton.element);
	
				if (poster != null) {
					this.element.find('.leplayer-next__poster').css({
						'background-image': 'url(' + poster + ')'
					});
				}
	
				if (auto) {
					this.addClass('leplayer-next--auto');
				}
	
				return this.element;
			}
		}, {
			key: 'cancel',
			value: function cancel() {
				clearTimeout(this._timeout);
				this.removeClass('leplayer-next--auto');
			}
		}, {
			key: 'next',
			value: function next() {
				if (this.options.url != null) {
					window.location = this.options.url;
				} else if (this.options.fn && _jquery2.default.isFunction(this.options.fn)) {
					this.options.fn(this);
				}
			}
		}, {
			key: 'show',
			value: function show() {
				var _this3 = this;
	
				if (this.cancelled) return;
	
				this.element.show();
	
				if (this.options.auto) {
					this.progressButton.startAnimation();
					clearTimeout(this._timeout);
					this._timeout = setTimeout(function () {
						return _this3.next();
					}, this.options.timeout);
				}
			}
		}, {
			key: 'hide',
			value: function hide() {
				this.element.hide();
	
				if (this.options.auto) {
					this.progressButton.stopAnimation();
					this.progressButton.radial = 0;
					clearTimeout(this._timeout);
				}
			}
		}]);
	
		return NextComponent;
	}(Component);
	
	Player.plugin('next', function (pluginOptions) {
		this._nextComponent = new NextComponent(this, pluginOptions);
	
		this.innerElement.append(this._nextComponent.element);
	});

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZWNjNzBmMzQyY2Q5MDQ4MzZmMzg/M2E0YiIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvbGUtcGxheWVyLmpzPzZkMDIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiJFwiPzU3YWEiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvQ29udHJvbC5qcz84MWNjIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL0NvbXBvbmVudC5qcz9mNTc4Iiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL0ljb24uanM/N2RlZiIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9QbGF5QnV0dG9uLmpzP2U3MmIiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL3V0aWxzL2luZGV4LmpzPzY1ZDkiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL3V0aWxzL2Jyb3dzZXIuanM/MDY0NSIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9TcGxhc2hJY29uLmpzP2E5ZjEiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvVGltZWxpbmUvVGltZS5qcz8xZDI4Iiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL0NvbnRyb2xDb2xsZWN0aW9uLmpzPzE0NWEiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvU2VjdGlvbnMuanM/Y2Q2NyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9FcnJvckRpc3BsYXkuanM/NTRhMSIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9Qb3N0ZXIuanM/MzJmNSIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvRnVsbHNjcmVlbkFwaS5qcz8yMmJjIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy91dGlscy9jb29raWUuanM/YTAzZiIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvTWVkaWFFcnJvci5qcz9kM2UzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL1BsYXlDb250cm9sLmpzPzEyNTUiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvVm9sdW1lQ29udHJvbC5qcz9hYTIwIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL0NvbnRyb2xEcm9wZG93bi5qcz84NjE4Iiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL1RpbWVsaW5lL1RpbWVsaW5lQ29udHJvbC5qcz9iZmRkIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL0NvbnRyb2xUZXh0LmpzPzcwMjIiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvVGltZWxpbmUvQnVmZmVyZWRSYW5nZXMuanM/N2Q0MCIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9UaW1lbGluZS9NYXJrZXIuanM/ZTM5MiIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9TZWN0aW9uQ29udHJvbC5qcz9mMDdiIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL0NvbnRyb2xDaGVja2JveC5qcz9iMmI3Iiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL0Z1bGxzY3JlZW5Db250cm9sLmpzPzVkYjYiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvUmF0ZUNvbnRyb2wuanM/MWU5YiIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9CYWNrd2FyZENvbnRyb2wuanM/ODc2YSIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9Tb3VyY2VDb250cm9sLmpzP2QxZWYiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvQ29udHJvbENvbnRhaW5lci5qcz8zNzM1Iiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL1N1YnRpdGxlQ29udHJvbC5qcz80MTc5Iiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL0Rvd25sb2FkQ29udHJvbC5qcz83ZTg2Iiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL0tleWJpbmRpbmdJbmZvQ29udHJvbC5qcz81MDRkIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL1RpbWVJbmZvQ29udHJvbC5qcz9mNmYzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9lbnRpdHkvSHRtbDUuanM/YmQ3MyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvZW50aXR5L0VudGl0eS5qcz9mMWQyIiwid2VicGFjazovLy8uL34vYXJyYXkucHJvdG90eXBlLmZpbmQvaW5kZXguanM/N2M0MiIsIndlYnBhY2s6Ly8vLi9+L2RlZmluZS1wcm9wZXJ0aWVzL2luZGV4LmpzP2U0ZjgiLCJ3ZWJwYWNrOi8vLy4vfi9vYmplY3Qta2V5cy9pbmRleC5qcz9hNTNiIiwid2VicGFjazovLy8uL34vb2JqZWN0LWtleXMvaXNBcmd1bWVudHMuanM/ZmI5NCIsIndlYnBhY2s6Ly8vLi9+L29iamVjdC1rZXlzL2ltcGxlbWVudGF0aW9uLmpzPzYzZGIiLCJ3ZWJwYWNrOi8vLy4vfi9lcy1hYnN0cmFjdC9lczYuanM/YTMxMyIsIndlYnBhY2s6Ly8vLi9+L2VzLWFic3RyYWN0L2VzMjAxNS5qcz80OWMxIiwid2VicGFjazovLy8uL34vaGFzL3NyYy9pbmRleC5qcz81ZDA2Iiwid2VicGFjazovLy8uL34vZnVuY3Rpb24tYmluZC9pbmRleC5qcz82YmJlIiwid2VicGFjazovLy8uL34vZnVuY3Rpb24tYmluZC9pbXBsZW1lbnRhdGlvbi5qcz9jMzJkIiwid2VicGFjazovLy8uL34vZXMtdG8tcHJpbWl0aXZlL2VzNi5qcz84OTU5Iiwid2VicGFjazovLy8uL34vZXMtdG8tcHJpbWl0aXZlL2VzMjAxNS5qcz8wMTExIiwid2VicGFjazovLy8uL34vZXMtdG8tcHJpbWl0aXZlL2hlbHBlcnMvaXNQcmltaXRpdmUuanM/ZDkwYiIsIndlYnBhY2s6Ly8vLi9+L2lzLWNhbGxhYmxlL2luZGV4LmpzPzViYjAiLCJ3ZWJwYWNrOi8vLy4vfi9pcy1kYXRlLW9iamVjdC9pbmRleC5qcz8xMjNlIiwid2VicGFjazovLy8uL34vaXMtc3ltYm9sL2luZGV4LmpzPzI5ODQiLCJ3ZWJwYWNrOi8vLy4vfi9oYXMtc3ltYm9scy9pbmRleC5qcz85YTZjIiwid2VicGFjazovLy8uL34vaGFzLXN5bWJvbHMvc2hhbXMuanM/OWM0ZiIsIndlYnBhY2s6Ly8vLi9+L2VzLWFic3RyYWN0L0dldEludHJpbnNpYy5qcz80NjY4Iiwid2VicGFjazovLy8uL34vZXMtYWJzdHJhY3QvaGVscGVycy9hc3NlcnRSZWNvcmQuanM/Y2NhNiIsIndlYnBhY2s6Ly8vLi9+L2VzLWFic3RyYWN0L2hlbHBlcnMvaXNOYU4uanM/NzFjMiIsIndlYnBhY2s6Ly8vLi9+L2VzLWFic3RyYWN0L2hlbHBlcnMvaXNGaW5pdGUuanM/ODcwNSIsIndlYnBhY2s6Ly8vLi9+L2VzLWFic3RyYWN0L2hlbHBlcnMvYXNzaWduLmpzP2U2OWUiLCJ3ZWJwYWNrOi8vLy4vfi9lcy1hYnN0cmFjdC9oZWxwZXJzL3NpZ24uanM/ZDBjYSIsIndlYnBhY2s6Ly8vLi9+L2VzLWFic3RyYWN0L2hlbHBlcnMvbW9kLmpzPzE5MTMiLCJ3ZWJwYWNrOi8vLy4vfi9lcy1hYnN0cmFjdC9oZWxwZXJzL2lzUHJpbWl0aXZlLmpzPzg3MzMiLCJ3ZWJwYWNrOi8vLy4vfi9lcy1hYnN0cmFjdC9lczUuanM/Y2MyMCIsIndlYnBhY2s6Ly8vLi9+L2VzLXRvLXByaW1pdGl2ZS9lczUuanM/YjdkYSIsIndlYnBhY2s6Ly8vLi9+L2lzLXJlZ2V4L2luZGV4LmpzP2IyNzAiLCJ3ZWJwYWNrOi8vLy4vfi9hcnJheS5wcm90b3R5cGUuZmluZC9pbXBsZW1lbnRhdGlvbi5qcz8wNjkwIiwid2VicGFjazovLy8uL34vYXJyYXkucHJvdG90eXBlLmZpbmQvcG9seWZpbGwuanM/ZDZlNCIsIndlYnBhY2s6Ly8vLi9+L2FycmF5LnByb3RvdHlwZS5maW5kL3NoaW0uanM/OWFkNyIsIndlYnBhY2s6Ly8vLi9kaXN0L3N2Zy9zdmctZGVmcy5zdmc/YTRhYSIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvcHJlc2V0cy92cHMuanM/YjMwZCIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvcHJlc2V0cy9zaW1wbGUuanM/NmIzMiIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvcHJlc2V0cy9zbXMuanM/N2M3MCIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvcHJlc2V0cy9jb21wcmVzc2VkLmpzP2RlMGIiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL3ByZXNldHMvMjAzNS5qcz8yZDIwIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9sZS1wbGF5ZXItZnVsbC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvcGx1Z2lucy9sZS1wbGF5ZXItZ2EuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL3BsdWdpbnMvbGUtcGxheWVyLXlvdXR1YmUuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL3BsdWdpbnMvbGUtcGxheWVyLW5leHQuanMiXSwibmFtZXMiOlsicmVnaXN0ZXJDb250cm9sIiwiZWxlbWVudCIsImFkZENsYXNzIiwiZXhjbHVkZUFycmF5Iiwic291cmNlIiwiZGlzdCIsInJlc3VsdCIsImNvbmNhdCIsImZvckVhY2giLCJpbmRleCIsImluZGV4T2YiLCJpdGVtIiwic3BsaWNlIiwiZGVmYXVsdE9wdGlvbnMiLCJlbnRpdHkiLCJhdXRvcGxheSIsImhlaWdodCIsImxvb3AiLCJtdXRlZCIsInByZWxvYWQiLCJwb3N0ZXIiLCJzdmdQYXRoIiwiaW5uYWN0aXZpdHlUaW1lb3V0IiwicmF0ZSIsInN0ZXAiLCJtaW4iLCJtYXgiLCJkZWZhdWx0IiwicGxheWJhY2siLCJzaG9ydCIsIm1lZGl1bSIsImxvbmciLCJjb250cm9scyIsImNvbW1vbiIsImZ1bGxzY3JlZW4iLCJtaW5pIiwiY29udHJvbHNPcHRpb25zIiwiYWxpZ24iLCJ2b2x1bWUiLCJtdXRlbGltaXQiLCJrZXlCaW5kaW5nIiwia2V5IiwiaW5mbyIsImRlc2NyaXB0aW9uIiwiZm4iLCJwbGF5ZXIiLCJ2aWRlbyIsInRvZ2dsZVBsYXkiLCJjdXJyZW50VGltZSIsIm9wdGlvbnMiLCJzcGxhc2hJY29uIiwic2hvdyIsInNoaWZ0S2V5Iiwic2VjdGlvbnMiLCJwcmV2IiwibmV4dCIsImNhbGNWb2x1bWVJY29uIiwidG9nZ2xlRnVsbHNjcmVlbiIsInBsdWdpbnMiLCJtaW5pcGxheWVyIiwib25QbGF5ZXJJbml0ZWQiLCJQbGF5ZXIiLCJjcmVhdGVFbGVtZW50IiwiX2VsZW1lbnQiLCJpbm5lckVsZW1lbnQiLCJfdXNlck9wdGlvbnMiLCJfaW5pdE9wdGlvbnMiLCJfbG9hZFNWR1Nwcml0ZSIsImRlZmF1bHRTcHJpdGUiLCJfdmlldyIsImxvYWRFbnRpdHkiLCJjdHgiLCJfaW5pdENvbnRyb2xzIiwiX2RibGNsaWNrVGltZW91dCIsIl9pbml0U2VjdGlvbnMiLCJ0aGVuIiwiZGF0YSIsInRyaWdnZXIiLCJfaW5pdFBsdWdpbnMiLCJfbGlzdGVuSG90S2V5cyIsIl91c2VyQWN0aXZpdHkiLCJfbGlzdGVuVXNlckFjdGl2aXR5IiwiX3dhaXRpbmdUaW1lb3V0cyIsIm9uIiwiZXZlbnROYW1lIiwib25lIiwicmVtb3ZlQ2xhc3MiLCJ0aW1lIiwiZHVyYXRpb24iLCJlcnJvciIsIl9zdGFydFdhaXRpbmciLCJfc3RvcFdheXRpbmciLCJlIiwidXJsIiwicGxheSIsInBhdXNlZCIsInBhdXNlIiwiY29kZSIsImluaXQiLCJzcmMiLCJfb25GdWxsc2NyZWVuQ2hhbmdlIiwiYmluZCIsIl9vbkNsaWNrIiwiX29uRGJjbGljayIsIl9vbkluaXRlZCIsIl9vblBsYXkiLCJfb25QYXVzZSIsImRvY3VtZW50IiwiZnVsbHNjcmVlbmNoYW5nZSIsIl9vbkVudGl0eUZ1bGxzY3JlbkNoYW5nZSIsIm5hbWUiLCJFbnRpdHkiLCJnZXRDb21wb25lbnQiLCJfZW50aXR5IiwibG9hZCIsInZpZXciLCJhcmdzIiwicXVhbGl0eSIsImlzUGF1c2VkIiwicGxheWJhY2tSYXRlIiwiZGZkIiwiRGVmZXJyZWQiLCJfZGF0YSIsInVuZGVmaW5lZCIsInJlc29sdmUiLCJwcm9taXNlIiwiYWpheCIsIm1ldGhvZCIsImRhdGFUeXBlIiwiZ2V0RGF0YSIsImZzQXBpIiwicmVxdWVzdEZ1bGxzY3JlZW4iLCJzdXBwb3J0c0Z1bGxTY3JlZW4iLCJlbnRlckZ1bGxzY3JlZW4iLCJleGl0RnVsbHNjcmVlbiIsIndpZHRoIiwibGVuZ3RoIiwibmV3U2VjdGlvbnMiLCJpIiwiZW5kU2VjdGlvbiIsImJlZ2luIiwiZW5kIiwiYXR0ciIsImNzcyIsImVycm9yRGlzcGxheSIsInBsYXlCdXR0b24iLCJsb2FkZXIiLCJhcHBlbmQiLCJpY29uTmFtZSIsImNsYXNzTmFtZSIsInZpZGVvQ29udGFpbmVyIiwibGFzdFRpbWVyIiwidmlkZW9JbmZvIiwiY29uc29sZSIsIndhcm4iLCJpbmZvRWxlbWVudCIsImh0bWwiLCJ0aXRsZSIsInNlY3Rpb25Db250YWluZXIiLCJzZWN0aW9uc0NvbnRhaW5lciIsImJlZm9yZSIsImF0dHJPcHRpb25zIiwicmVkdWNlIiwib2JqIiwidmFsIiwic291cmNlcyIsImZpbmQiLCJlYWNoIiwidmFsdWUiLCJmbGFnIiwidmlzaWJsZSIsIm91dHNpZGVTZWN0aW9ucyIsIl9vcHRpb25zRnJvbUVsZW1lbnQiLCJwcmVzZXRPcHRpb25zIiwicHJlc2V0IiwiZ2V0UHJlc2V0IiwiZXh0ZW5kIiwiQXJyYXkiLCJpc0FycmF5IiwiZXhjbHVkZUNvbnRyb2xzIiwiaGFzT3duUHJvcGVydHkiLCJjb250cm9sQ29sbGVjdGlvbiIsInJvdyIsImluaXRPcHRpb25zIiwiYWN0aXZlIiwiaXNLZXlCaW5kaW5nIiwiYmluZGluZyIsIndoaWNoIiwiY3RybEtleSIsInByZXZlbnREZWZhdWx0IiwicmVqZWN0IiwiZ2V0U2VjdGlvbkRhdGEiLCJkb25lIiwiaXNTZWN0aW9uT3V0c2lkZSIsIl9jb21wbGV0ZVNlY3Rpb25zIiwiaXRlbXMiLCJmdWxsc2NyZWVuT25seSIsImhpZGVTY3JvbGwiLCJwbHVnaW5PcHRpb25zIiwibW91c2VJblByb2dyZXNzIiwibGFzdE1vdmVYIiwibGFzdE1vdmVZIiwib25Nb3VzZU1vdmUiLCJzY3JlZW5YIiwic2NyZWVuWSIsIm9uTW91c2VEb3duIiwiY2xlYXJJbnRlcnZhbCIsInNldEludGVydmFsIiwib25Nb3VzZVVwIiwiaW5hY3Rpdml0eVRpbWVvdXQiLCJkZWxheSIsInVzZXJBY3RpdmUiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwicHVzaCIsImNhbGwiLCJmb2N1cyIsImlzRnMiLCJfbGFzdFNlY3Rpb25zVmFsdWUiLCJmdWxsc2NyZWVuRWxlbWVudCIsImVuZGVkIiwiX2Vycm9yIiwiaGlkZSIsIl91c2VyQWN0aXZlIiwiZ2V0VXNlckFjdGl2ZSIsInRvZ2dsZUNsYXNzIiwicGx1Z2luIiwicHJvdG90eXBlIiwicmVnaXN0ZXJDb21wb25lbnQiLCJnZXRDb250cm9sIiwic2Vjb25kc1RvVGltZSIsIl9wcmVzZXRzIiwiQ29va2llIiwic3ZnIiwiaGlkZGVuRWxlbWVudCIsInByZXBlbmQiLCJyZXF1aXJlIiwidmVyc2lvbiIsIndpbmRvdyIsIiQiLCJsZVBsYXllciIsIm9mZnNldFNob3ciLCJvZmZzZXQiLCJ0b3AiLCJvdXRlckhlaWdodCIsImdldENvbnRyb2xzIiwiY29udHJvbE9wdGlvbnMiLCJjb250cm9sIiwiZGlzYWJsZSIsImlzRnVuY3Rpb24iLCJnZXRXaWR0aCIsIl91cGRhdGVNaW5pUGxheWVyIiwiZm9yY2UiLCJzY3JvbGxUb3AiLCJoaWRlTWluaVBsYXllciIsInNob3dNaW5pUGxheWVyIiwib25TZXRWaWV3Iiwib25EZWxWaWV3IiwibW9kdWxlIiwiZXhwb3J0cyIsIkNvbnRyb2wiLCJlbWl0VGFwRXZlbnRzIiwiY2xpY2siLCJvbkNsaWNrIiwidGFwIiwiaWNvbiIsImF0dHJzIiwidGFnIiwiYnVpbGRDU1NDbGFzcyIsImhhc0NsYXNzIiwiYXJndW1lbnRzIiwiX2Rpc2FibGUiLCJfY29udHJvbHMiLCJjb250cm9sQ2xhc3MiLCJ0b1BsYXllckV2ZW50IiwiZXZlbnRzIiwic3BsaXQiLCJhY2MiLCJDb21wb25lbnQiLCJfX25vZGUiLCJibHVyIiwiZXZlbnQiLCJFdmVudCIsInRyaWdnZXJIYW5kbGVyIiwiZXZlbnROYW1lcyIsIlN0cmluZyIsInRvdWNoU3RhcnQiLCJmaXJzdFRvdWNoIiwibGFzdE1vdmVUb3VjaCIsInRhcE1vdmVtZW50VGhyZXNob2xkIiwidG91Y2hUaW1lVGhyZXNob2xkIiwiY291bGRCZVRhcCIsInRvdWNoZXMiLCJwYWdlWCIsInBhZ2VZIiwiRGF0ZSIsImdldFRpbWUiLCJ4ZGlmZiIsInlkaWZmIiwidG91Y2hEaXN0YW5jZSIsIk1hdGgiLCJzcXJ0Iiwibm9UYXAiLCJ0b3VjaFRpbWUiLCJ0YXBFdmVudCIsImNvbXBvbmVudCIsIl9jb21wb25lbnRzIiwiSWNvbiIsIl91c2VUYWciLCJjcmVhdGVFbGVtZW50TlMiLCJfc3ZnVGFnIiwiX2ljb25OYW1lIiwiYXBwZW5kQ2hpbGQiLCJhdHRyTlMiLCJyZW1vdmVBdHRyaWJ1dGVOUyIsInNldEF0dHJpYnV0ZU5TIiwiUGxheUJ1dHRvbiIsImlubmVyIiwicGVyY2VudGlmeSIsImNyZWF0ZUVsIiwiJGh0bWwiLCJub29wIiwic2Vjb25kcyIsInNob3dIb3VycyIsImgiLCJmbG9vciIsIm0iLCJzIiwib3V0IiwicGVyY2VudCIsInByb3BzIiwiZ2V0U2Nyb2xsQmFyV2lkdGgiLCJvdXRlciIsInZpc2liaWxpdHkiLCJvdmVyZmxvdyIsImFwcGVuZFRvIiwid2lkdGhXaXRoU2Nyb2xsIiwib3V0ZXJXaWR0aCIsInJlbW92ZSIsIlVTRVJfQUdFTlQiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJJU19NT0JJTEUiLCJ0ZXN0IiwiSVNfQ0hST01FIiwiSVNfQU5EUk9JRCIsIklTX0FORFJPSURfUEhPTkUiLCJJU19JUEFEIiwiSVNfSVBIT05FIiwiSVNfSVBPRCIsIklTX0lPUyIsIklTX1NBRkFSSSIsIklTX1RPVUNIIiwibWF4VG91Y2hQb2ludHMiLCJTcGxhc2hJY29uIiwiVGltZSIsInVwZGF0ZVRleHQiLCJ0ZXh0IiwiQ29udHJvbENvbGxlY3Rpb24iLCJsb2NhbFVhT3B0aW9ucyIsImxvY2FsTmFtZSIsImluZGV4Um93IiwiY3JlYXRlIiwiY29sbGVjdGlvbiIsIl9yb3dzIiwiYWRkUm93IiwiZWxlbVJvdyIsImZpcnN0Iiwic2Vjb25kIiwiZ2xvYmFsQWxpZ24iLCJyb3dBbGlnbiIsImNvbnRyb2xOYW1lIiwiYWRkQ29udHJvbCIsIl9nZXRDb250cm9sT3B0aW9ucyIsIlNlY3Rpb25zIiwic2Nyb2xsRWxlbWVudCIsIl9pbm5lckVsZW1lbnQiLCJhY3RpdmVTZWN0aW9uIiwiZ2V0U2VjdGlvbkJ5SW5kZXgiLCJzZXRBY3RpdmVCeUluZGV4Iiwib25TZWN0aW9uQ2xpY2siLCJvblRpbWVVcGRhdGUiLCJ1cGRhdGVTZWN0aW9uRHVyYXRpb24iLCJzZWN0aW9uSW5kZXgiLCJwYXJzZUludCIsIm5ld0luZGV4IiwicmlnaHQiLCJfY3JlYXRlU2VjdGlvbnMiLCJzZWN0aW9uIiwidGFyZ2V0IiwiY2xvc2VzdCIsInRvcFBvc2l0aW9uIiwicG9zaXRpb24iLCJhbmltYXRlIiwiZW5kU2VjdGlvblRpbWUiLCJ0b1N0cmluZyIsIm5leHRJbmZvIiwidHJpbSIsInJlcGxhY2VXaXRoIiwiY3JlYXRlU2VjdGlvbiIsImlzVmlzaWJsZSIsIkVycm9yRGlzcGxheSIsIm1lc3NhZ2UiLCJvblBsYXllckVycm9yIiwiUG9zdGVyIiwiX3VybCIsIkZ1bGxzY3JlZW5BcGkiLCJhcGlNYXAiLCJzcGVjQXBpIiwiYnJvd3NlckFwaSIsImRmbHQiLCJjb29raWVzIiwiY29va2llIiwiZCIsInNldERhdGUiLCJ5ZWFyIiwiTWVkaWFFcnJvciIsImRlZmF1bHRNZXNzYWdlcyIsImVycm9yVHlwZXMiLCJlcnJOdW0iLCJQbGF5Q29udHJvbCIsInVwZGF0ZSIsInNob3dSZXBsYXkiLCJzaG93UGxheSIsInNob3dQYXVzZSIsIkluZmluaXR5IiwiX3JlcGxheSIsIlZvbHVtZUNvbnRyb2wiLCJmZWF0dXJlQ29udHJvbFZvbHVtZSIsImRyYWciLCJtYXJrZXIiLCJsaW5lIiwicCIsImdldFBvc2l0aW9uIiwiZHJvcGRvd25Db250ZW50IiwibW91c2Vtb3ZlIiwibW91c2V1cCIsInkiLCJ0b2dnbGVNdXRlZCIsImRlZmF1bHRWb2x1bWUiLCJyb3VuZCIsIkNvbnRyb2xEcm9wZG93biIsIl9vcGVuZWQiLCJvcGVuIiwiY2xvc2UiLCJ0b2dnbGUiLCJvbkRvY3VtZW50RXZlbnRzIiwiVGltZWxpbmVDb250cm9sIiwiX29uTWFya2VyTW91c2Vtb3ZlIiwiX29uTWFya2VyTW91c2Vkb3duIiwib25TZWN0aW9uc0luaXQiLCJfb25UaW1lVXBkYXRlIiwiX29uRHVyYXRpb25DaGFuZ2UiLCJtYXJrZXJTaGFkb3ciLCJ4IiwibWFya2VyVGltZSIsImlzTmFOIiwibW92ZSIsInRvdGFsVGltZSIsInBsYXllZFJhbmdlcyIsImJ1ZmZlcmVkUmFuZ2VzIiwibW91c2VsZWF2ZSIsIm1vdXNlZG93biIsIl9vbkxpbmVDbGljayIsInVwZGF0ZVNlY3Rpb25SYW5nZXMiLCJjcmVhdGVTZWN0aW9uUmFuZ2VzIiwibGVmdCIsInVwZGF0ZUxhYmVscyIsIndhdGNoQnVmZmVySW50ZXJ2YWwiLCJ1cGRhdGVQcm9ncmVzc0JhciIsIkVORCIsIlNUQVJUIiwibG9hZGVkIiwiZG9tSXRlbSIsImFkZCIsImJ1ZmZlcmVkIiwibG9hZGVkU2l6ZSIsIkNvbnRyb2xUZXh0IiwiX3RleHQiLCJCdWZmZXJlZFJhbmdlcyIsInJhbmdlIiwiTWFya2VyIiwiX29uTW91c2Vkb3duIiwiX2RyYWciLCJTZWN0aW9uQ29udHJvbCIsIl9vblNlY3Rpb25zSW5pdCIsIl9vblNlY3Rpb25Ub2dnbGUiLCJ0b2dnbGVTZWN0aW9ucyIsImNoZWNrZWQiLCJDb250cm9sQ2hlY2tib3giLCJvbkNoZWNrZWQiLCJfY2hlY2tlZCIsIkZ1bGxzY3JlZW5Db250cm9sIiwiUmF0ZUNvbnRyb2wiLCJkb3duQ29udHJvbCIsImRlY3JlYXNlUmF0ZSIsInVwQ29udHJvbCIsImluY3JlYXNlUmF0ZSIsImN1cnJlbnRSYXRlIiwicGFyc2VGbG9hdCIsInRvRml4ZWQiLCJyZXBsYWNlIiwicmF0ZU1pbiIsInJhdGVNYXgiLCJnZXQiLCJCYWNrd2FyZENvbnRyb2wiLCJTb3VyY2VDb250cm9sIiwicGxheWJhY2tRdWFsaXR5IiwiZ2V0QXZhaWxhYmxlUXVhbGl0eUxldmVscyIsIkNvbnRyb2xDb250YWluZXIiLCJfYWN0aXZlIiwibGlzdCIsImNvbnRlbnQiLCJ0b29sdGlwIiwib25JdGVtQ2xpY2siLCJjdXJyZW50VGFyZ2V0IiwiY3VycmVudFZhbHVlIiwiZ2V0Q3VycmVudFZhbHVlIiwiZW1wdHkiLCJlbGVtIiwiYWRkSXRlbSIsIlN1YnRpdGxlQ29udHJvbCIsInRyYWNrIiwic3RvcFByb3BhZ2F0aW9uIiwiaGFzVmFsdWUiLCJzdWJ0aXRsZXMiLCJEb3dubG9hZENvbnRyb2wiLCJvbkxvYWRTdGFydCIsImhyZWYiLCJkb3dubG9hZCIsImxpbmsiLCJmaWxlTmFtZSIsImRlY29kZVVSSUNvbXBvbmVudCIsImdldEZpbGVFeHRlbnNpb24iLCJwYXJzZXIiLCJwYXRobmFtZSIsInBvcCIsIktleUJpbmRpbmdJbmZvQ29udHJvbCIsImluZm9Db250ZW50IiwiX2tleSIsImhvdGtleSIsImtleVN0cmluZyIsIlRpbWVJbmZvQ29udHJvbCIsIl9jdXJyZW50VGltZUNvbnRyb2wiLCJfdG90YWxUaW1lQ29udHJvbCIsIkh0bWw1IiwibWVkaWEiLCJidWZmZXJSYW5nZXMiLCJfcGxheWJhY2tRdWFsaXR5Iiwib25EdXJhdGlvbkNoYW5nZSIsIm9uUHJvZ3Jlc3MiLCJvblNlZWtpbmciLCJvblNlZWtlZCIsIm9uVm9sdW1lQ2hhbmdlIiwib25EYmxjbGljayIsIm9uUGxheSIsIm9uUGF1c2UiLCJvblJhdGVDaGFuZ2UiLCJvbkVuZGVkIiwib25DYW5wbGF5VGhyb3VnaCIsIm9uV2FpdGluZyIsIm9uRXJyb3IiLCJyZW1vdmVBdHRyIiwicHJvcCIsIm1hcCIsIl9pbml0U3VidGl0bGVzIiwiX2luaXRWaWRlbyIsIl9pbml0UmF0ZSIsIl9pbml0Vm9sdW1lIiwid2Via2l0RW50ZXJGdWxsU2NyZWVuIiwibmV0d29ya1N0YXRlIiwiSEFWRV9NRVRBREFUQSIsIndlYmtpdEV4aXRGdWxsU2NyZWVuIiwicGxheWVkIiwicGxheVByb21pc2UiLCJwYXVzZVByb21pc2UiLCJfc2VsZiIsImNoaWxkcmVuIiwibGFuZ3VhZ2UiLCJyZWFkeVN0YXRlIiwiSFRNTE1lZGlhRWxlbWVudCIsIkhBVkVfTk9USElORyIsIl90ZXh0VHJhY2tzSGFjayIsInRleHRUcmFja3MiLCJjbGllbnRIZWlnaHQiLCJjbGllbnRXaWR0aCIsIk1PQklMRV9NQVhfUkFURSIsIlNBRkFSSV9NQVhfUkFURSIsIk1PQklMRV9NSU5fUkFURSIsIlNBRkFSSV9NSU5fUkFURSIsInN0b3AiLCJfc291cmNlIiwiX3RyYWNrIiwibW9kZSIsIm11dGUiLCJzZWVrYWJsZSIsInN0YXJ0IiwiY3VycmVudFNyYyIsIlRFU1RfVklERU8iLCJjYW5Db250cm9sVm9sdW1lIiwiX3RyaWdnZXJTdGFjayIsIl9zdG9wTGlzdGVuIiwiZGVmYXVsdFJhdGUiLCJfcG9zdGVyIiwiaW5uZXJIZWlnaHQiLCJfcmF0ZU1heCIsIl9yYXRlTWluIiwic2V0IiwibGV2ZWxzIiwic29tZSIsInZpZGVvUGxheWVkIiwidmlkZW9QbGF5ZWREZWx0YSIsInZvbHVtZUNoYW5nZURlbGF5IiwicmF0ZUNoYW5nZURlbGF5IiwiZ2EiLCJ2b2x1bWVDaGFuZ2VUaW1lb3V0IiwiTnVtYmVyIiwicmF0ZUNoYW5nZVRpbWVvdXQiLCJwbGF5ZWRFdmVudHNTZW50IiwicGxheWVkUGVyY2VudGFnZSIsImRlbHRhIiwiYWJzIiwibG9hZFF1YWxpdHkiLCJ0cmFja1Byb3ZpZGUiLCJsYW5ndWFnZUNvZGUiLCJsYW5ndWFnZU5hbWUiLCJZb3V0dWJlIiwiX3BhdXNlZCIsImF2YWlsYWJsZVJhdGVzIiwiYXJyIiwieXRQbGF5ZXIiLCJRVUFMSVRZX05BTUVTIiwicGxheVZpZGVvIiwicGF1c2VWaWRlbyIsImFwaUxvYWRlZCIsImluaXRZVFBsYXllciIsInlvdXR1YmVFbGVtZW50IiwiYmxvY2tlciIsIl9pbml0UHJvbWlzZSIsImdsb2JhbE9wdGlvbnMiLCJ5dE9wdGlvbnMiLCJpdl9sb2FkX3BvbGljeSIsIm1vZGVzdGJyYW5kaW5nIiwicmVsIiwic2hvd2luZm8iLCJjY19sb2FkX3BvbGljeSIsImRpc2FibGVrYiIsImZzIiwiWVQiLCJyZWFkeSIsInZpZGVvSWQiLCJwbGF5ZXJWYXJzIiwib25SZWFkeSIsIm9uWVRQUmVhZHkiLCJvblN0YXRlQ2hhbmdlIiwib25ZVFBTdGF0ZUNoYW5nZSIsIm9uUGxheWJhY2tSYXRlQ2hhbmdlIiwib25ZVFBSYXRlQ2hhbmdlIiwib25QbGF5YmFja1F1YWxpdHlDaGFuZ2UiLCJvbllUUFBsYXliYWNrUXVhbGl0eUNoYW5nZSIsImdldEF2YWlsYWJsZVBsYXliYWNrUmF0ZXMiLCJzZXRBdmFpbGFibGVQbGF5YmFja1JhdGVzIiwic3RhdGUiLCJsYXN0U3RhdGUiLCJQbGF5ZXJTdGF0ZSIsIlVOU1RBUlRFRCIsIkVOREVEIiwiUExBWUlORyIsInNldFBsYXliYWNrUXVhbGl0eSIsIl9uZXh0UGxheWJhY2tRdWFsaXR5IiwiaXNTZWVraW5nIiwibG9hZENhcHRpb25zIiwiZW1pdFRpbWV1cGRhdGUiLCJQQVVTRUQiLCJCVUZGRVJJTkciLCJzZWVraW5nSW50ZXJ2YWwiLCJ3YXNQYXVzZWRCZWZvcmVTZWVrIiwidGltZUJlZm9yZVNlZWsiLCJlbXB0eVRyYWNrbGlzdCIsIl9sb2FkQ2FwdGlvbnNXYXRjaGVyIiwiX3RyYWNrc0Rpc2FibGUiLCJjaGVja0NhcHRpb25zRXhpc3QiLCJsb2FkTW9kdWxlIiwiZ2V0T3B0aW9ucyIsImlkIiwicGFyc2VVcmwiLCJnZXRDdXJyZW50VGltZSIsInNlZWtUbyIsImdldER1cmF0aW9uIiwiTmFOIiwiZ2V0UGxheWJhY2tSYXRlIiwic2V0UGxheWJhY2tSYXRlIiwidW5NdXRlIiwiaXNNdXRlZCIsImdldE9wdGlvbiIsInVubG9hZE1vZHVsZSIsInNldE9wdGlvbiIsInN0YXR1cyIsImdldFBsYXllclN0YXRlIiwiQ1VFRCIsImdldFBsYXliYWNrUXVhbGl0eSIsImdldFZvbHVtZSIsInNldFZvbHVtZSIsInJlZ2V4IiwiVVJMX1JFR0VYIiwibWF0Y2giLCJ0aW55Iiwic21hbGwiLCJsYXJnZSIsImhkNzIwIiwiaGQxMDgwIiwiaGlnaHJlcyIsImF1dG8iLCJfbG9hZGVkIiwiZ2V0U2NyaXB0IiwiUmFkaWFsQmFyIiwic3Ryb2tlRGFzaGFycmF5Iiwic2l6ZSIsIl9jaXJjbGVFbGVtZW50IiwidGVtcGxhdGUiLCJjb250ZW50cyIsImNiIiwidGltZW91dCIsIl9yYWRpYWwiLCJOZXh0Q29tcG9uZW50IiwiY2FuY2VsQnV0dG9uIiwicHJvZ3Jlc3NCdXR0b24iLCJjYW5jZWwiLCJfdGltZW91dCIsImxvY2F0aW9uIiwiY2FuY2VsbGVkIiwic3RhcnRBbmltYXRpb24iLCJzdG9wQW5pbWF0aW9uIiwicmFkaWFsIiwiX25leHRDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3RDQTs7Ozs7O0FBRUE7Ozs7QUFHQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7O0FBQ0E7O0FBU0E7Ozs7QUFFQTs7OztBQUdBOztBQUNBOztBQUNBOztBQUNB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QzdEO0FBQ0EsR0FBRTs7QUFFRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUVBQWdFO0FBQ2hFLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFnQyxhQUFhLEVBQUU7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0E7QUFDQSwyQkFBMEI7O0FBRTFCO0FBQ0E7QUFDQTtBQUNBLHdDQUF1QztBQUN2QywwQkFBeUI7O0FBRXpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFvQjtBQUNwQixHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNB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LElBQWI7O0FBRUEsUUFBRyxLQUFLN0ssT0FBTCxDQUFhdXBCLElBQWhCLEVBQXNCO0FBQ3JCLFVBQUtjLGNBQUwsQ0FBb0JNLGFBQXBCO0FBQ0EsVUFBS04sY0FBTCxDQUFvQk8sTUFBcEIsR0FBNkIsQ0FBN0I7QUFDQXpnQixrQkFBYSxLQUFLb2dCLFFBQWxCO0FBQ0E7QUFDRDs7OztHQXpHMEJsYyxTOztBQThHNUJ6TixRQUFPcUssTUFBUCxDQUFjLE1BQWQsRUFBc0IsVUFBUzVCLGFBQVQsRUFBd0I7QUFDN0MsT0FBS3doQixjQUFMLEdBQXNCLElBQUlWLGFBQUosQ0FBa0IsSUFBbEIsRUFBd0I5Z0IsYUFBeEIsQ0FBdEI7O0FBRUEsT0FBS3RJLFlBQUwsQ0FBa0JtRixNQUFsQixDQUF5QixLQUFLMmtCLGNBQUwsQ0FBb0I3dEIsT0FBN0M7QUFFQSxFQUxELEUiLCJmaWxlIjoibGUtcGxheWVyLWZ1bGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9qcy9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBlY2M3MGYzNDJjZDkwNDgzNmYzOCIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuXG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL2NvbXBvbmVudHMvQ29udHJvbCc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9Db21wb25lbnQnO1xuaW1wb3J0IFBsYXlCdXR0b24gZnJvbSAnLi9jb21wb25lbnRzL1BsYXlCdXR0b24nO1xuaW1wb3J0IFNwbGFzaEljb24gZnJvbSAnLi9jb21wb25lbnRzL1NwbGFzaEljb24nO1xuXG5pbXBvcnQgSWNvbiBmcm9tICcuL2NvbXBvbmVudHMvSWNvbic7XG5pbXBvcnQgVGltZSBmcm9tICcuL2NvbXBvbmVudHMvVGltZWxpbmUvVGltZSc7XG5pbXBvcnQgQ29udHJvbENvbGxlY3Rpb24gZnJvbSAnLi9jb21wb25lbnRzL0NvbnRyb2xDb2xsZWN0aW9uJztcbmltcG9ydCBTZWN0aW9ucyBmcm9tICcuL2NvbXBvbmVudHMvU2VjdGlvbnMnO1xuaW1wb3J0IEVycm9yRGlzcGxheSBmcm9tICcuL2NvbXBvbmVudHMvRXJyb3JEaXNwbGF5JztcbmltcG9ydCBQb3N0ZXIgZnJvbSAnLi9jb21wb25lbnRzL1Bvc3Rlcic7XG5pbXBvcnQgRnVsbHNjcmVlbkFwaSBmcm9tICcuL0Z1bGxzY3JlZW5BcGknO1xuXG5pbXBvcnQgeyBjcmVhdGVFbCwgc2Vjb25kc1RvVGltZSwgbm9vcCB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHtcblx0SVNfQU5EUk9JRF9QSE9ORSxcblx0SVNfQU5EUk9JRCxcblx0SVNfSVBPRCxcblx0SVNfSVBIT05FLFxuXHRJU19NT0JJTEUsXG5cdElTX1RPVUNIXG59IGZyb20gJy4vdXRpbHMvYnJvd3Nlcic7XG5cbmltcG9ydCBDb29raWUgZnJvbSAnLi91dGlscy9jb29raWUnO1xuXG5pbXBvcnQgTWVkaWFFcnJvciBmcm9tICcuL01lZGlhRXJyb3InO1xuXG4vLyBSZWdpc3RlciBjb21tb24gY29udHJvbHNcbmltcG9ydCAnLi9jb21wb25lbnRzL1BsYXlDb250cm9sJztcbmltcG9ydCAnLi9jb21wb25lbnRzL1ZvbHVtZUNvbnRyb2wnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvVGltZWxpbmUvVGltZWxpbmVDb250cm9sJztcbmltcG9ydCAnLi9jb21wb25lbnRzL1NlY3Rpb25Db250cm9sJztcbmltcG9ydCAnLi9jb21wb25lbnRzL0Z1bGxzY3JlZW5Db250cm9sJztcbmltcG9ydCAnLi9jb21wb25lbnRzL1JhdGVDb250cm9sJztcbmltcG9ydCAnLi9jb21wb25lbnRzL0JhY2t3YXJkQ29udHJvbCc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9Tb3VyY2VDb250cm9sJztcbmltcG9ydCAnLi9jb21wb25lbnRzL1N1YnRpdGxlQ29udHJvbCc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9Eb3dubG9hZENvbnRyb2wnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvS2V5YmluZGluZ0luZm9Db250cm9sJztcbmltcG9ydCAnLi9jb21wb25lbnRzL1RpbWVJbmZvQ29udHJvbCc7XG5cbmltcG9ydCAnLi9lbnRpdHkvSHRtbDUnO1xuXG5pbXBvcnQgJ2FycmF5LnByb3RvdHlwZS5maW5kJztcblxuXG5Db250cm9sLnJlZ2lzdGVyQ29udHJvbCgnZGl2aWRlcicsIGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4ge1xuXHRcdGVsZW1lbnQgOiAkKCc8ZGl2Lz4nKS5hZGRDbGFzcygnZGl2aWRlcicpXG5cdH07XG59KTtcblxuXG5cbi8qKlxuICogUmV0dXJuIGFycmF5IHdpdGggZXhjbHVkZWQgZGlzdCdzIGl0ZW1zIGZyb20gc291cmNlIGFycmF5XG4gKlxuICogQGFjY2VzcyBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBzb3VyY2VcbiAqIEBwYXJhbSB7QXJyYXl9IGRpc3RcbiAqIEByZXR1cm4ge0FycmF5fVxuICovXG5mdW5jdGlvbiBleGNsdWRlQXJyYXkoc291cmNlLCBkaXN0KSB7XG5cdGNvbnN0IHJlc3VsdCA9IFtdLmNvbmNhdChzb3VyY2UpO1xuXHRkaXN0LmZvckVhY2goaXRlbSA9PiB7XG5cdFx0Y29uc3QgaW5kZXggPSByZXN1bHQuaW5kZXhPZihpdGVtKTtcblx0XHRpZiAoaW5kZXggPiAtMSkge1xuXHRcdFx0cmVzdWx0LnNwbGljZShpbmRleCwgMSk7XG5cdFx0XHRyZXR1cm5cblx0XHR9XG5cdH0pXG5cblx0cmV0dXJuIHJlc3VsdDtcbn1cblxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG5cdGVudGl0eSA6ICdIdG1sNScsXG5cdGF1dG9wbGF5IDogZmFsc2UsXG5cdGhlaWdodCA6ICdhdXRvJyxcblx0bG9vcCA6IGZhbHNlLFxuXHRtdXRlZCA6IGZhbHNlLFxuXHRwcmVsb2FkIDogJ21ldGFkYXRhJyxcblx0cG9zdGVyIDogbnVsbCxcblx0c3ZnUGF0aCA6ICcnLFxuXHRpbm5hY3Rpdml0eVRpbWVvdXQgOiA1MDAwLFxuXHRyYXRlIDoge1xuXHRcdHN0ZXAgOiAwLjI1LFxuXHRcdG1pbiA6IDAuNSxcblx0XHRtYXggOiA0LjAsXG5cdFx0ZGVmYXVsdCA6IDFcblx0fSxcblx0cGxheWJhY2sgOiB7XG5cdFx0c3RlcCA6IHtcblx0XHRcdHNob3J0IDogNSxcblx0XHRcdG1lZGl1bSA6IDEwLFxuXHRcdFx0bG9uZyA6IDMwXG5cdFx0fVxuXHR9LFxuXHRjb250cm9scyA6IHtcblx0XHRjb21tb24gOiBbXG5cdFx0XHRbJ3BsYXknLCAndm9sdW1lJywgJ2RpdmlkZXInLCAndGltZWxpbmUnLCAgJ2RpdmlkZXInLCAnc2VjdGlvbicsICdkaXZpZGVyJywgJ2Z1bGxzY3JlZW4nXSxcblx0XHRcdFsncmF0ZScsICdkaXZpZGVyJywgJ2JhY2t3YXJkJywgJ2RpdmlkZXInLCAnc291cmNlJywgJ2RpdmlkZXInLCAnc3VidGl0bGUnLCAnZGl2aWRlcicsICdkb3dubG9hZCcsICdkaXZpZGVyJywgJ2tleWJpbmRpbmcgaW5mbyddXG5cdFx0XSxcblx0XHRmdWxsc2NyZWVuIDogW1xuXHRcdFx0WydwbGF5JywgJ3ZvbHVtZScsICdkaXZpZGVyJywgJ3RpbWVsaW5lJywgJ2RpdmlkZXInLCAncmF0ZScsICdkaXZpZGVyJywgJ2tleWJpbmRpbmcgaW5mbycsICAnZGl2aWRlcicsICdiYWNrd2FyZCcsICdkaXZpZGVyJywgJ3NvdXJjZScsICdkaXZpZGVyJywgJ3N1YnRpdGxlJywgJ2RpdmlkZXInLCAnZG93bmxvYWQnLCAnZGl2aWRlcicsICdzZWN0aW9uJywgJ2RpdmlkZXInLCAnZnVsbHNjcmVlbiddXG5cdFx0XSxcblx0XHRtaW5pIDogW1xuXHRcdFx0WydwbGF5JywgJ3ZvbHVtZScsICdkaXZpZGVyJywgJ2Z1bGxzY3JlZW4nLCAnZGl2aWRlcicsICd0aW1laW5mbyddXG5cdFx0XSxcblx0XHQnY29tbW9uOmFuZHJvaWQnIDogW1xuXHRcdFx0WydwbGF5JywgJ3RpbWVsaW5lJywgJ2Z1bGxzY3JlZW4nXSxcblx0XHRcdFsncmF0ZScsICdzb3VyY2UnLCAnc2VjdGlvbiddXG5cdFx0XSxcblx0XHQnZnVsbHNjcmVlbjptb2JpbGUnIDogW1xuXHRcdFx0WydwbGF5JywgJ3RpbWVsaW5lJywgJ2Z1bGxzY3JlZW4nXSxcblx0XHRcdFsncmF0ZScsICdzb3VyY2UnLCAnc2VjdGlvbiddXG5cdFx0XSxcblx0XHQnY29tbW9uOmlvcycgOiBbXG5cdFx0XHRbJ3BsYXknLCAncmF0ZScsICd0aW1lbGluZScsICdzb3VyY2UnXVxuXHRcdF0sXG5cdH0sXG5cdGNvbnRyb2xzT3B0aW9ucyA6IHtcblxuXHRcdGNvbW1vbiA6IHtcblx0XHRcdGFsaWduIDogWydqdXN0aWZ5JywgJ2xlZnQnXSxcblx0XHRcdC8vIG1vYmlsZSA6IHRydWVcblx0XHR9LFxuXHRcdGZ1bGxzY3JlZW4gOiB7XG5cdFx0XHRhbGlnbiA6ICdqdXN0aWZ5J1xuXHRcdH0sXG5cdFx0J2NvbW1vbjphbmRyb2lkJyA6IHtcblx0XHRcdGFsaWduIDogWydqdXN0aWZ5JywgJ3JpZ2h0J11cblx0XHR9LFxuXG5cdFx0J2Z1bGxzY3JlZW46bW9iaWxlJyA6IHtcblx0XHRcdGFsaWduIDogWydqdXN0aWZ5JywgJ3JpZ2h0J11cblx0XHR9XG5cdH0sXG5cdHZvbHVtZSA6IHtcblx0XHRkZWZhdWx0IDogMC40LFxuXHRcdG11dGVsaW1pdCA6IDAuMDUsXG5cdFx0c3RlcCA6IDAuMVxuXHR9LFxuXHRrZXlCaW5kaW5nIDogW1xuXHRcdHtcblx0XHRcdGtleSA6IDMyLFxuXHRcdFx0aW5mbyA6IFsnU3BhY2UnXSxcblx0XHRcdGRlc2NyaXB0aW9uIDogJ9Cd0LDRh9Cw0YLRjCDQv9GA0L7QuNCz0YDRi9Cy0LDQvdC40LUgLyDQv9C+0YHRgtCw0LLQuNGC0Ywg0L3QsCDQv9Cw0YPQt9GDJyxcblx0XHRcdGZuIDogKHBsYXllcikgPT4ge1xuXHRcdFx0XHRwbGF5ZXIudmlkZW8udG9nZ2xlUGxheSgpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0a2V5IDogMzcsXG5cdFx0XHRpbmZvIDogWyfihpAnXSxcblx0XHRcdGRlc2NyaXB0aW9uIDogYNCf0LXRgNC10LzQvtGC0LDRgtGMINC90LAgMTAg0YHQtdC60YPQvdC0INC90LDQt9Cw0LRgLFxuXHRcdFx0Zm4gOiAocGxheWVyKSA9PiB7XG5cdFx0XHRcdHBsYXllci52aWRlby5jdXJyZW50VGltZSAtPSBwbGF5ZXIub3B0aW9ucy5wbGF5YmFjay5zdGVwLm1lZGl1bTtcblx0XHRcdFx0cGxheWVyLnNwbGFzaEljb24uc2hvdygndW5kbycpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0a2V5IDogMzksXG5cdFx0XHRpbmZvIDogWyfihpInXSxcblx0XHRcdGRlc2NyaXB0aW9uIDogYNCf0LXRgNC10LzQvtGC0LDRgtGMINC90LAgMTAg0YHQtdC60YPQvdC0INCy0L/QtdGA0ZHQtGAsXG5cdFx0XHRmbiA6IChwbGF5ZXIpID0+IHtcblx0XHRcdFx0cGxheWVyLnZpZGVvLmN1cnJlbnRUaW1lICs9IHBsYXllci5vcHRpb25zLnBsYXliYWNrLnN0ZXAubWVkaXVtO1xuXHRcdFx0XHRwbGF5ZXIuc3BsYXNoSWNvbi5zaG93KCdyZWRvJyk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHR7XG5cdFx0XHRzaGlmdEtleSA6IHRydWUsXG5cdFx0XHRpbmZvIDogWydTaGlmdCcsICfihpAnXSxcblx0XHRcdGRlc2NyaXB0aW9uIDogJ9Cf0LXRgNC10LnRgtC4INC90LAg0L/RgNC10LTRi9C00YPRidGD0Y4g0YHQtdC60YbQuNGOJyxcblx0XHRcdGtleSA6IDM3LFxuXHRcdFx0Zm4gOiAocGxheWVyKSA9PiB7XG5cdFx0XHRcdGlmKHBsYXllci5zZWN0aW9ucyA9PSBudWxsKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHBsYXllci5zZWN0aW9ucy5wcmV2KCk7XG5cblx0XHRcdH1cblx0XHR9LFxuXHRcdHtcblx0XHRcdHNoaWZ0S2V5IDogdHJ1ZSxcblx0XHRcdGtleSA6IDM5LFxuXHRcdFx0aW5mbyA6IFsnU2hpZnQnLCAn4oaSJ10sXG5cdFx0XHRkZXNjcmlwdGlvbiA6ICfQn9C10YDQtdC50YLQuCDQvdCwINGB0LvQtdC00YPRjtGJ0YPRjiDRgdC10LrRhtC40Y4nLFxuXHRcdFx0Zm4gOiAocGxheWVyKSA9PiB7XG5cdFx0XHRcdGlmKHBsYXllci5zZWN0aW9ucyA9PSBudWxsKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHBsYXllci5zZWN0aW9ucy5uZXh0KClcblx0XHRcdH1cblx0XHR9LFxuXHRcdHtcblx0XHRcdGtleSA6IDM4LFxuXHRcdFx0aW5mbyA6IFsn4oaRJ10sXG5cdFx0XHRkZXNjcmlwdGlvbiA6ICfQo9Cy0LXQu9C40YfQuNGC0Ywg0LPRgNC+0LzQutC+0YHRgtGMJyxcblx0XHRcdGZuIDogKHBsYXllcikgPT4ge1xuXHRcdFx0XHRwbGF5ZXIudmlkZW8udm9sdW1lICs9IHBsYXllci5vcHRpb25zLnZvbHVtZS5zdGVwO1xuXG5cdFx0XHRcdHBsYXllci5zcGxhc2hJY29uLnNob3cocGxheWVyLmNhbGNWb2x1bWVJY29uKHBsYXllci52aWRlby52b2x1bWUpKTtcblxuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHR7XG5cdFx0XHRrZXkgOiA0MCxcblx0XHRcdGluZm8gOiBbJ+KGkyddLFxuXHRcdFx0ZGVzY3JpcHRpb24gOiAn0KPQvNC10L3RjNGI0LjRgtGMINCz0YDQvtC80LrQvtGB0YLRjCcsXG5cdFx0XHRmbiA6IChwbGF5ZXIpID0+IHtcblx0XHRcdFx0cGxheWVyLnZpZGVvLnZvbHVtZSAtPSBwbGF5ZXIub3B0aW9ucy52b2x1bWUuc3RlcDtcblxuXHRcdFx0XHRwbGF5ZXIuc3BsYXNoSWNvbi5zaG93KHBsYXllci5jYWxjVm9sdW1lSWNvbihwbGF5ZXIudmlkZW8udm9sdW1lKSk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdHtcblx0XHRcdGtleSA6IDcwLFxuXHRcdFx0aW5mbyA6IFsnZiddLFxuXHRcdFx0ZGVzY3JpcHRpb24gOiAn0J7RgtC60YDRi9GC0Ywv0LfQsNC60YDRi9GC0Ywg0L/QvtC70L3QvtGN0LrRgNCw0L3Ri9C5INGA0LXQttC40LwnLFxuXHRcdFx0Zm4gOiAocGxheWVyKSA9PiB7XG5cdFx0XHRcdHBsYXllci50b2dnbGVGdWxsc2NyZWVuKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRdLFxuXHRwbHVnaW5zIDoge1xuXHRcdG1pbmlwbGF5ZXIgOiB7fVxuXHR9LFxuXHRvblBsYXllckluaXRlZCA6IG5vb3Bcbn07XG5cbi8qKlxuICogQGNsYXNzIFBsYXllclxuICogQGV4dGVuZHMgQ29tcG9uZW50XG4gKiBAcGFyYW0ge2pRdWVyeX0gZWxlbWVudCBFbGVtZW50IHdoZW4gcGxheWVyIHdpbGwgaW5pdFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5hdXRvcGxheT1mYWxzZV1cbiAqIFdoZW4gcHJlc2VudCwgdGhlIHZpZGVvIHdpbGwgYXV0b21hdGljYWxseSBzdGFydCBwbGF5aW5nIGFzIHNvb24gYXMgaXQgY2FuIGRvIHNvIHdpdGhvdXQgc3RvcHBpbmcuXG4gKiBAcGFyYW0ge1N0cmluZ3xOdW1iZXJ9IFtvcHRpb25zLmhlaWdodD0nYXV0byddIEhlaWdodCBvZiB2aWRlbyBjb250YWluZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy53aWR0aF0gV2lkdGggb2YgdmlkZW8gY29udGFpbmVyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmxvb3A9ZmFsc2VdXG4gKiBXaGVuIHByZXNlbnQsIGl0IHNwZWNpZmllcyB0aGF0IHRoZSB2aWRlbyB3aWxsIHN0YXJ0IG92ZXIgYWdhaW4sIGV2ZXJ5IHRpbWUgaXQgaXMgZmluaXNoZWQuXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLm11dGVkPWZhbHNlXVxuICogV2hlbiBwcmVzZW50LCBpdCBzcGVjaWZpZXMgdGhhdCB0aGUgYXVkaW8gb3V0cHV0IG9mIHRoZSB2aWRlbyBzaG91bGQgYmUgbXV0ZWQuXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMucHJlbG9hZD0nbWV0YWRhdGEnXSBDYW4gYmUgKCdhdXRvJ3wnbWV0YWRhdGEnfCdub25lJylcbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5wb3N0ZXJdIFBhdGggdG8gcG9zdGVyIG9mIHZpZGVvXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuc3ZnUGF0aF0gUGF0aCB0byBzdmcgc3ByaXRlIGZvciBpY29uc1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLnJhdGVdIFJhdGUgb3B0aW9uc1xuICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLnJhdGUuc3RlcD0wLjI1XSBTdGVwIG9mIGluY3JlYXNlL2RlY3JlYXNlIGJ5IHJhdGUgY29udHJvbFxuICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLnJhdGUubWluPTAuNV0gTWluIG9mIHJhdGVcbiAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5yYXRlLm1heD00LjBdIE1heCBvZiByYXRlXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMucmF0ZS5kZWZhdWx0PTFdXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMucGxheWJhY2tdIFBsYXliYWNrIG9wdGlvbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5wbGF5YmFjay5zdGVwXVxuICogQHBhcmFtIHtOdWJtZXJ9IFtvcHRpb25zLnBsYXliYWNrLnN0ZXAuc2hvcnQ9NV1cbiAqIEBwYXJhbSB7TnVibWVyfSBbb3B0aW9ucy5wbGF5YmFjay5zdGVwLm1lZGl1bT0zMF1cbiAqIEBwYXJhbSB7TnVibWVyfSBbb3B0aW9ucy5wbGF5YmFjay5zdGVwLmxvbmc9NjBdXG4gKiBAcGFyYW0ge09iZWpjdH0gW29wdGlvbnMuY29udHJvbHNdIE9iamVjdCBvZiBjb250cm9sc1xuICogQHBhcmFtIHtTdHJpbmdbXX0gW29wdGlvbnMuY29udHJvbHMuY29tbW9uXSBBcnJheSBvZiBjb250cm9scyBmb3IgZGVmYXVsdCB2aWV3XG4gKiBAcGFyYW0ge1N0cmluZ1tdfSBbb3B0aW9ucy5jb250cm9scy5mdWxsc2NyZWVuXSBBcnJheSBvZiBjb250cm9sIGZvciBmdWxsc3JlZW4gdmlld1xuICogQHBhcmFtIHtTdHJpbmdbXX0gW29wdGlvbnMuY29udHJvbHMubWluaV0gQXJyYXkgb2YgY29udHJvbCBmb3IgbWluaXBsYXllclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLmV4Y2x1ZGVDb250cm9sc10gT2JqZWN0IG9mIGV4Y2x1ZGUgY29udHJvbHMuIFN0cnVjdHVyZSBpcyB0aGUgc2FtZSBhcyB0aGF0IG9mIG9wdGlvbnMuY29udHJvbHNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy52b2x1bWVdIFZvbHVtZSdzIG9wdGlvbnNcbiAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy52b2x1bWUuZGVmYXVsdD0wLjRdIERlZmF1bHQgdm9sdW1lXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMudm9sdW1lLm11dGVsaW1pdD0wLjA1XSBEZWx0YSB3aGVuIHZvbHVtZSBpcyBtdXRlZFxuICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLnZvbHVtZS5zdGVwPTAuMDVdXG4gKiBAcGFyYW0ge09iamVjdFtdfSBbb3B0aW9ucy5rZXliaW5kaW5nXVxuICogT2JqZWN0IHdpdGgga2V5YmluZGluZyBvcHRpb25zLCB3aGVuIGtleSBpdCdzIG5hbWUgb2Yga2V5IGJpbmRpbmcsIGFuZCB2YWx1ZSBpdCdzIGtleSBiaW5kaW5nIHNldHRpbmdzXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMua2V5YmluZGluZ1tdLmtleV0gQ29kZSBvZiBrZXkgYmluZGluZyAoZm9yIGV4YW1wbGUgMzIgaXQncyBzcGFjZSlcbiAqIEBwYXJhbSB7U3RyaW5nW119IFtvcHRpb25zLmtleWJpbmRpbmdbXS5pbmZvXSBBcnJheSBvZiBrZXlzdHJva2VzIG9yZGVyXG4gKiBAcGFyYW0ge1N0cmluZ30gb3B0aW9ucy5rZXliaW5kaW5nW10uZGVzY3JpcHRpb25dIERlc2NyaXB0aW9uIG9mIGtleSBiaW5kaW5nXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBvcHRpb25zLmtleWJpbmRpbmdbXS5mbl0gQ2FsbGJhY2tcbiAqIEBwYXJhbSB7T2JqZWN0fEJvb2xlYW59IFtvcHRpb25zLm1pbmlwbGF5ZXI9ZmFsc2VdXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMubWluaXBsYXllci53aWR0aF0gV2lkdGggb2YgbWluaXBsYXllciBjb250YWluZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5taW5pcGxheWVyLndpZHRoXSBNaW5pUGxheWVyJ3Mgd2lkdGhcbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5zZWN0aW9uQ29udGFpbmVyXSBTZWxlY3RvciBmb3Igc2VjdGlvbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5wbHVnaW5zXSBLZXlzIG9mIG9iamVjdHMgYXJlIG5hbWUgb2YgcGx1Z2luLCB2YWx1ZSAtIHBsdWdpbiBvcHRpb25zXG4gKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9IFtvcHRpb25zLmRhdGFdIFVybCBvciBKU09OIHdpdGggZGF0YSBmb3IgcGxheWVyXG4gKiBAcGFyYW0ge0FycmF5fSBbb3B0aW9ucy5kYXRhLnNlY3Rpb25zXSBTZWN0aW9ucyBhcnJheVxuICovXG5cbmNsYXNzIFBsYXllciBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKGVsZW1lbnQsIG9wdGlvbnMpIHtcblxuXHRcdG9wdGlvbnMuY3JlYXRlRWxlbWVudCA9IGZhbHNlO1xuXG5cdFx0c3VwZXIobnVsbCwgb3B0aW9ucyk7XG5cblx0XHR0aGlzLl9lbGVtZW50ID0gZWxlbWVudDtcblxuXHRcdC8qKlxuXHRcdCAqIERPTSBjb250YWluZXIgdG8gaG9sZCBpbm5lciBvZiBwbGF5ZXJcblx0XHQgKlxuXHRcdCAqIEBtZW1iZXJvZiEgUGxheWVyI1xuXHRcdCAqIEB0eXBlIHtqUXVlcnl9XG5cdFx0ICovXG5cdFx0dGhpcy5pbm5lckVsZW1lbnQgPSBjcmVhdGVFbCgnZGl2Jyk7XG5cblx0XHQvLyBVc2VycyBvcHRpb25zXG5cdFx0dGhpcy5fdXNlck9wdGlvbnMgPSBvcHRpb25zO1xuXHRcdHRoaXMuX2luaXRPcHRpb25zKCk7XG5cblx0XHRpZih0aGlzLm9wdGlvbnMuc3ZnUGF0aCA9PT0gJycpIHtcblx0XHRcdFBsYXllci5fbG9hZFNWR1Nwcml0ZShQbGF5ZXIuZGVmYXVsdFNwcml0ZSk7XG5cdFx0fVxuXG5cdFx0dGhpcy5fdmlldyA9ICdjb21tb24nO1xuXG5cdFx0LyoqXG5cdFx0ICogRE9NIGNvbnRhaW5lciB0byBob2xkIGFsbCBwbGF5ZXJcblx0XHQgKlxuXHRcdCAqIEBtZW1iZXJvZiEgUGxheWVyI1xuXHRcdCAqIEB0eXBlIHtqUXVlcnl9XG5cdFx0ICovXG5cdFx0dGhpcy5lbGVtZW50ID0gdGhpcy5jcmVhdGVFbGVtZW50KCk7XG5cblx0XHR0aGlzLmxvYWRFbnRpdHkodGhpcy5vcHRpb25zLmVudGl0eSwgeyBjdHggOiBlbGVtZW50IH0pO1xuXHRcdC8qKlxuXHRcdCAqIFZpZGVvIGh0bWw1IGNvbXBvbmVudFxuXHRcdCAqXG5cdFx0ICogQG1lbWJlcm9mISBQbGF5ZXIjXG5cdFx0ICogQHR5cGUge0VudGl0eX1cblx0XHQgKi9cblx0XHR0aGlzLnZpZGVvID0gdGhpcy5lbnRpdHk7XG5cblx0XHQvLyBDcmVhdGUgY29udHJvbHNcblx0XHQvLyBUT0RPOiBtb3ZlIHRoaXMgYWN0aW9uIHRvIHRoZSBjcmVhdGVFbGVtZW50XG5cdFx0dGhpcy5jb250cm9scyA9IHt9O1xuXHRcdHRoaXMuX2luaXRDb250cm9scygpO1xuXG5cdFx0LyoqXG5cdFx0ICogQGFjY2VzcyBwcml2YXRlXG5cdFx0ICovXG5cdFx0dGhpcy5fZGJsY2xpY2tUaW1lb3V0ID0gbnVsbDtcblxuXHRcdHRoaXMuX2luaXRTZWN0aW9ucygpLnRoZW4oKGRhdGEpID0+IHtcblx0XHRcdC8qKlxuXHRcdFx0ICogU2VjdGlvbnMgaW5pdCBldmVudFxuXHRcdFx0ICpcblx0XHRcdCAqIEBldmVudCBQbGF5ZXIjc2VjdGlvbnNpbml0XG5cdFx0XHQgKiBAZXhhbXBsZVxuXHRcdFx0ICogY29uc3QgcGxheWVyID0gbmV3IFBsYXllcigkKCcjdmlkZW8nKSwgb3B0aW9ucyk7XG5cdFx0XHQgKiBwbGF5ZXIub24oJ3NlY3Rpb25zaW5pdCcsIChlLCBkYXRhKSA9PiBjb3Nub2xlLmxvZyhkYXRhKSk7XG5cdFx0XHQgKlxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLnRyaWdnZXIoJ3NlY3Rpb25zaW5pdCcsIGRhdGEpO1xuXHRcdH0pO1xuXHRcdHRoaXMuX2luaXRQbHVnaW5zKCk7XG5cblx0XHR0aGlzLl9saXN0ZW5Ib3RLZXlzKCk7XG5cblx0XHR0aGlzLl91c2VyQWN0aXZpdHkgPSBmYWxzZTtcblx0XHR0aGlzLl9saXN0ZW5Vc2VyQWN0aXZpdHkoKTtcblxuXHRcdHRoaXMuX3dhaXRpbmdUaW1lb3V0cyA9IFtdO1xuXG5cdFx0LyogUmV0cmlnZ2VyIHtAbGluayBFbnRpdHl9IEV2ZW50cyAqL1xuXHRcdFtcblx0XHRcdC8qKlxuXHRcdFx0ICogZHVyYXRpb25jaGFuZ2UgcGxheWVyIGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciNkdXJhdGlvbmNoYW5nZVxuXHRcdFx0ICovXG5cdFx0XHQnZHVyYXRpb25jaGFuZ2UnLFxuXG5cdFx0XHQvKipcblx0XHRcdCAqIHByb2dyZXNzIGh0bWw1IG1lZGlhIGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciNwcm9ncmVzc1xuXHRcdFx0ICovXG5cdFx0XHQncHJvZ3Jlc3MnLFxuXG5cdFx0XHQvKipcblx0XHRcdCAqIGRibGNsaWNrXG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciNkYmNsaWNrXG5cdFx0XHQgKi9cblx0XHRcdCdkYmxjbGljaycsXG5cblx0XHRcdC8qKlxuXHRcdFx0ICogZGJsY2xpY2tcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI2RiY2xpY2tcblx0XHRcdCAqL1xuXHRcdFx0J2NsaWNrJyxcblxuXG5cdFx0XHQvKipcblx0XHRcdCAqIGNhbnBsYXkgaHRtbDUgbWVkaWEgZXZlbnRcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI2NhbnBsYXlcblx0XHRcdCAqL1xuXHRcdFx0J2NhbnBsYXknLFxuXG5cdFx0XHQvKipcblx0XHRcdCAqIHF1YWxpdHljaGFuZ2UgaHRtbDVcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI3F1YWxpdHljaGFuZ2Vcblx0XHRcdCAqL1xuXHRcdFx0J3F1YWxpdHljaGFuZ2UnLFxuXG5cdFx0XHQvKipcblx0XHRcdCAqIHF1YWxpdHljaGFuZ2UgaHRtbDVcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI3RyYWNrc2NoYW5nZVxuXHRcdFx0ICovXG5cdFx0XHQndHJhY2tzY2hhbmdlJyxcblxuXG5cblx0XHRdLmZvckVhY2goZXZlbnROYW1lID0+IHtcblx0XHRcdHRoaXMudmlkZW8ub24oZXZlbnROYW1lLCAoKSA9PiB7XG5cdFx0XHRcdHRoaXMudHJpZ2dlcihldmVudE5hbWUpO1xuXHRcdFx0fSlcblx0XHR9KTtcblxuXHRcdHRoaXMudmlkZW8ub25lKCdwbGF5JywgKCkgPT4ge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBGaXJzdCBwbGF5IGV2ZW50XG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQGV2ZW50IFBsYXllciNmaXJzdHBsYXlcbiAgICAgICAgICAgICAqL1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdmaXJzdHBsYXknKTtcblx0XHRcdHRoaXMucmVtb3ZlQ2xhc3MoJ2xlcGxheWVyLS12aXJnaW4nKTtcblx0XHR9KTtcblxuXHRcdHRoaXMudmlkZW8ub24oJ3RpbWV1cGRhdGUnLCAoKSA9PiB7XG5cdFx0XHRpZiAodGhpcy52aWRlby5jdXJyZW50VGltZSA+IDApIHtcblx0XHRcdFx0dGhpcy5yZW1vdmVDbGFzcygnbGVwbGF5ZXItLXZpcmdpbicpO1xuXHRcdFx0fVxuXG5cdFx0XHQvKipcblx0XHRcdCAqIHRpbWV1cGRhdGUgaHRtbDUgbWVkaWEgZXZlbnRcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI3RpbWV1cGRhdGVcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy50cmlnZ2VyKCd0aW1ldXBkYXRlJywgeyB0aW1lIDogdGhpcy52aWRlby5jdXJyZW50VGltZSwgZHVyYXRpb24gOiB0aGlzLnZpZGVvLmR1cmF0aW9uIH0pO1xuXG5cdFx0fSlcblxuXHRcdHRoaXMudmlkZW8ub24oJ2xvYWRzdGFydCcsICgpID0+IHtcblx0XHRcdHRoaXMucmVtb3ZlQ2xhc3MoJ2xlcGxheWVyLS1lbmRlZCcpO1xuXG5cdFx0XHR0aGlzLmVycm9yID0gbnVsbDtcblx0XHRcdC8qKlxuXHRcdFx0ICogbG9hZHN0YXJ0IHBsYXllciBldmVudFxuXHRcdFx0ICpcblx0XHRcdCAqIEBldmVudCBQbGF5ZXIjbG9hZHN0YXJ0XG5cdFx0XHQgKi9cblx0XHRcdHRoaXMudHJpZ2dlcignbG9hZHN0YXJ0Jyk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLnZpZGVvLm9uKCdzZWVraW5nJywgKCkgPT4ge1xuXHRcdFx0dGhpcy5fc3RhcnRXYWl0aW5nKCk7XG5cdFx0XHQvKipcblx0XHRcdCAqIHNlZWtpbmcgaHRtbDUgbWVkaWEgZXZlbnRcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI3NlZWtpbmdcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdzZWVraW5nJyk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLnZpZGVvLm9uKCdzZWVrZWQnLCAoKSA9PiB7XG5cdFx0XHR0aGlzLl9zdG9wV2F5dGluZygpO1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBzZWVrZWQgaHRtbDUgbWVkaWEgZXZlbnRcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI3NlZWtlZFxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLnRyaWdnZXIoJ3NlZWtlZCcpO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy52aWRlby5vbigndm9sdW1lY2hhbmdlJywgKCkgPT4ge1xuXHRcdFx0LyoqXG5cdFx0XHQgKiB2b2x1bWVjaGFuZ2UgaHRtbDUgbWVkaWEgZXZlbnRcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI3ZvbHVtZWNoYW5nZVxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLnRyaWdnZXIoJ3ZvbHVtZWNoYW5nZScsIHsgdm9sdW1lIDogdGhpcy52aWRlby52b2x1bWUgfSk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLnZpZGVvLm9uKCdwb3N0ZXJjaGFuZ2UnLCAoZSwgZGF0YSkgPT4ge1xuXHRcdFx0Y29uc3QgdXJsID0gZGF0YS51cmw7XG5cdFx0XHR0aGlzLnBvc3Rlci51cmwgPSB1cmw7XG5cdFx0XHR0aGlzLnRyaWdnZXIoJ3Bvc3RlcmNoYW5nZScpO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy52aWRlby5vbigncGxheScsIChlKSA9PiB7XG5cdFx0XHR0aGlzLnJlbW92ZUNsYXNzKCdsZXBsYXllci0tZW5kZWQnKTtcblx0XHRcdHRoaXMucmVtb3ZlQ2xhc3MoJ2xlcGxheWVyLS1wYXVzZWQnKTtcblx0XHRcdHRoaXMuYWRkQ2xhc3MoJ2xlcGxheWVyLS1wbGF5aW5nJyk7XG5cblx0XHRcdC8qKlxuXHRcdFx0ICogcGxheSBodG1sNSBtZWRpYSBldmVudFxuXHRcdFx0ICpcblx0XHRcdCAqIEBldmVudCBQbGF5ZXIjcGxheVxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLnRyaWdnZXIoJ3BsYXknKTtcblx0XHR9KTtcblxuXHRcdHRoaXMudmlkZW8ub24oJ3BhdXNlJywgKCkgPT4ge1xuXHRcdFx0dGhpcy5yZW1vdmVDbGFzcygnbGVwbGF5ZXItLXBsYXlpbmcnKTtcblx0XHRcdHRoaXMuYWRkQ2xhc3MoJ2xlcGxheWVyLS1wYXVzZWQnKTtcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBwYXVzZSBodG1sNSBtZWRpYSBldmVudFxuXHRcdFx0ICpcblx0XHRcdCAqIEBldmVudCBQbGF5ZXIjcGF1c2Vcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdwYXVzZScpO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy52aWRlby5vbigncGxheWluZycsICgpID0+IHtcblx0XHRcdHRoaXMuX3N0b3BXYXl0aW5nKCk7XG5cblx0XHRcdC8qKlxuXHRcdFx0ICogcGxheWluZyBodG1sNSBtZWRpYSBldmVudFxuXHRcdFx0ICpcblx0XHRcdCAqIEBldmVudCBQbGF5ZXIjcGxheWluZ1xuXHRcdFx0ICovXG5cdFx0XHR0aGlzLnRyaWdnZXIoJ3BsYXlpbmcnKTtcblx0XHR9KTtcblxuXHRcdHRoaXMudmlkZW8ub24oJ3JhdGVjaGFuZ2UnLCAoKSA9PiB7XG5cdFx0XHQvKipcblx0XHRcdCAqIHJhdGUgaHRtbDUgbWVkaWEgZXZlbnRcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI3JhdGVcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdyYXRlY2hhbmdlJywgeyByYXRlIDogdGhpcy52aWRlby5yYXRlIH0pO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy52aWRlby5vbignZW5kZWQnLCAoKSA9PiB7XG5cdFx0XHR0aGlzLmFkZENsYXNzKCdsZXBsYXllci0tZW5kZWQnKTtcblxuXHRcdFx0aWYodGhpcy5vcHRpb25zLmxvb3ApIHtcblx0XHRcdFx0dGhpcy5jdXJyZW50VGltZSA9IDA7XG5cdFx0XHRcdHRoaXMudmlkZW8ucGxheSgpO1xuXHRcdFx0fSBlbHNlIGlmICghdGhpcy52aWRlby5wYXVzZWQpIHtcblx0XHRcdFx0dGhpcy52aWRlby5wYXVzZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHQvKipcblx0XHRcdCAqIGVuZGVkIGh0bWw1IG1lZGlhIGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciNlbmRlZFxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLnRyaWdnZXIoJ2VuZGVkJyk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLnZpZGVvLm9uKCdjYW5wbGF5dGhyb3VnaCcsICgpID0+IHtcblx0XHRcdHRoaXMuX3N0b3BXYXl0aW5nKCk7XG5cdFx0XHQvKipcblx0XHRcdCAqIGNhbnBsYXl0aHJvdWdoIGh0bWw1IG1lZGlhIGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciNjYW5wbGF5dGhyb3VnaFxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLnRyaWdnZXIoJ2NhbnBsYXl0aHJvdWdoJyk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLnZpZGVvLm9uKCd3YWl0aW5nJywgKCkgPT4ge1xuXHRcdFx0dGhpcy5fc3RhcnRXYWl0aW5nKCk7XG5cblx0XHRcdHRoaXMudmlkZW8ub25lKCd0aW1ldXBkYXRlJywgKCkgPT4gdGhpcy5fc3RvcFdheXRpbmcoKSk7XG5cblx0XHRcdC8qKlxuXHRcdFx0ICogd2FpdGluZyBodG1sNSBtZWRpYSBldmVudFxuXHRcdFx0ICpcblx0XHRcdCAqIEBldmVudCBQbGF5ZXIjd2FpdGluZ1xuXHRcdFx0ICovXG5cdFx0XHR0aGlzLnRyaWdnZXIoJ3dhaXRpbmcnKTtcblx0XHR9KTtcblxuXHRcdHRoaXMudmlkZW8ub24oJ2Vycm9yJywgKGUsIGRhdGEpID0+IHtcblx0XHRcdHRoaXMuZXJyb3IgPSBuZXcgTWVkaWFFcnJvcihkYXRhLmNvZGUpO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy52aWRlby5pbml0KCkudGhlbigoKSA9PiB7XG5cdFx0XHQvKipcblx0XHRcdCAqIFBsYXllciBpbml0IGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciNpbml0ZWRcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdpbml0ZWQnKTtcblxuXHRcdFx0aWYodGhpcy5vcHRpb25zLnRpbWUpIHtcblx0XHRcdFx0dGhpcy5jdXJyZW50VGltZSA9IHRoaXMub3B0aW9ucy50aW1lO1xuXHRcdFx0fVxuXG5cdFx0XHRpZih0aGlzLnZpZGVvLnNyYyAhPSBudWxsICYmIHRoaXMub3B0aW9ucy5hdXRvcGxheSkge1xuXHRcdFx0XHR0aGlzLnBsYXkoKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXG5cdFx0dGhpcy5vbignZnVsbHNjcmVlbmNoYW5nZScsIHRoaXMuX29uRnVsbHNjcmVlbkNoYW5nZS5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLm9uKCdjbGljaycsIHRoaXMuX29uQ2xpY2suYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5vbignZGJsY2xpY2snLCB0aGlzLl9vbkRiY2xpY2suYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5vbignaW5pdGVkJywgdGhpcy5fb25Jbml0ZWQuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5vbigncGxheScsIHRoaXMuX29uUGxheS5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLm9uKCdwYXVzZScsIHRoaXMuX29uUGF1c2UuYmluZCh0aGlzKSk7XG5cblx0XHQkKGRvY3VtZW50KS5vbihGdWxsc2NyZWVuQXBpLmZ1bGxzY3JlZW5jaGFuZ2UsIHRoaXMuX29uRW50aXR5RnVsbHNjcmVuQ2hhbmdlLmJpbmQodGhpcykpO1xuXHR9XG5cblx0Z2V0IGVudGl0eSgpIHtcblx0XHRyZXR1cm4gdGhpcy5fZW50aXR5O1xuXHR9XG5cblx0bG9hZEVudGl0eShuYW1lLCBvcHRpb25zKSB7XG5cdFx0Y29uc3QgRW50aXR5ID0gUGxheWVyLmdldENvbXBvbmVudChuYW1lKTtcblx0XHR0aGlzLl9lbnRpdHkgPSBuZXcgRW50aXR5KHRoaXMsIG9wdGlvbnMpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFN0YXJ0cyBwbGF5aW5nIHRoZSB2aWRlb1xuXHQgKlxuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAZXhhbXBsZVxuXHQgKiBjb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyKCQoXCIjdmlkZW9cIiksb3B0aW9ucyk7XG5cdCAqICQoJy5zb21lLWJ1dHRvbicpLm9uKCdjbGljaycsICgpID0+IHBsYXllci5wbGF5KCkpO1xuXHQgKi9cblx0cGxheSgpIHtcblx0XHRyZXR1cm4gdGhpcy52aWRlby5wbGF5KCk7XG5cdH1cblxuXHQvKipcblx0ICogUGF1c2VzIHRoZSBjdXJyZW50bHkgcGxheWluZyB2aWRlb1xuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKi9cblx0cGF1c2UoKSB7XG5cdFx0cmV0dXJuIHRoaXMudmlkZW8ucGF1c2UoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBUb2dnbGUgdGhlIGN1cnJlbnRseSBwbGF5aW5nIHZpZGVvXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqL1xuXHR0b2dnbGVQbGF5KCkge1xuXHRcdHJldHVybiB0aGlzLnZpZGVvLnRvZ2dsZVBsYXkoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBCZWdpbiBsb2FkaW5nIHRoZSBzcmMgZGF0YVxuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKi9cblx0bG9hZCgpIHtcblx0XHRyZXR1cm4gdGhpcy52aWRlby5sb2FkKCk7XG5cdH1cblxuXHQvKipcblx0ICogT24gc2V0IHZpZXcgY2FsbGJhY2tcblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHBhcmFtIHtTdHJpbmd9IHZpZXcgVmlldyBuYW1lXG5cdCAqIEByZXR1cm5zIHtQbGF5ZXJ9IHRoaXNcblx0ICogQGV4YW1wbGVcblx0ICogY29uc3QgcGxheWVyID0gbmV3IFBsYXllcigkKCcjdmlkZW8nKSwgb3B0aW9ucyk7XG5cdCAqIHBsYXllci5vblNldFZpZXcoJ21pbmknLCAoKSA9PiBjb25zb2xlLmxvZygnTWluaXBsYXllciB5ZWFoIScpXG5cdCAqICAgICAub25TZXRWaWV3KCdmdWxsc2NyZWVuJywgKCkgPT4gY29uc29sZS5sb2coJ0Z1bGxzY3JlZW4gYm9vbSEnKVxuXHQgKiAgICAgLm9uU2V0VmlldygnY29tbW9uJywgKCkgPT4gY29uc29sZS5sb2coJ0NvbW1vbiB2aWV3IC0gbG9sJyk7XG5cdCAqL1xuXHRvblNldFZpZXcodmlldywgLi4uYXJncykge1xuXHRcdHRoaXMub24oYHNldHZpZXcuJHt2aWV3fWAsIC4uLmFyZ3MpO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvKipcblx0ICogQ2hhbmdlIHNvdXJjZSBhbmQgc2F2ZSB0aW1lLCByYXRlXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBxdWFsaXR5XG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBbcXVhbGl0eS50aXRsZV0gVGhlIG5hbWUgb2YgcXVhbGl0dXQgZS54IFNEIG9yIEhEXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBxdWFsaXR5LnVybFxuXHQgKi9cblx0Y2hhbmdlUXVhbGl0eShxdWFsaXR5KSB7XG5cdFx0Y29uc3QgdmlkZW8gPSB0aGlzLnZpZGVvO1xuXHRcdGlmKHF1YWxpdHkgPT0gbnVsbCkgcmV0dXJuO1xuXHRcdGNvbnN0IHRpbWUgPSB0aGlzLmN1cnJlbnRUaW1lO1xuXHRcdGNvbnN0IHJhdGUgPSB0aGlzLnJhdGU7XG5cdFx0Y29uc3QgaXNQYXVzZWQgPSB0aGlzLnBhdXNlZDtcblxuXHRcdHZpZGVvLnNyYyA9IHF1YWxpdHk7XG5cdFx0dGhpcy5wbGF5YmFja1JhdGUgPSByYXRlO1xuXHRcdHRoaXMuY3VycmVudFRpbWUgPSB0aW1lO1xuXG5cdFx0aWYoaXNQYXVzZWQpIHtcblx0XHRcdHRoaXMucGF1c2UoKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnBsYXkoKVxuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBPbiBkZWwgdmlldyBjYWxsYmFja1xuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAcGFyYW0ge1N0cmluZ30gdmlldyBWaWV3IG5hbWVcblx0ICogQHJldHVybnMge1BsYXllcn0gdGhpc1xuXHQgKiBAZXhhbXBsZVxuXHQgKiBjb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyKCQoJyN2aWRlbycpLCBvcHRpb25zKTtcblx0ICogcGxheWVyLm9uRGVsVmlldygnbWluaScsICgpID0+IGNvbnNvbGUubG9nKCdFeGl0IG1pbmlwbGF5ZXInKVxuXHQgKi9cblx0b25EZWxWaWV3KHZpZXcsIC4uLmFyZ3MpIHtcblx0XHR0aGlzLm9uKGBkZWx2aWV3LiR7dmlld31gLCAuLi5hcmdzKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBzb21lIGRhdGEgZm9yIHBsYXllclxuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAcmV0dXJucyB7alF1ZXJ5LnByb21pc2V9IFByb21pc2Vcblx0ICovXG5cdGdldERhdGEoKSB7XG5cdFx0Y29uc3QgZGZkID0gbmV3ICQuRGVmZXJyZWQoKTtcblxuXHRcdGlmICh0aGlzLl9kYXRhICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdGRmZC5yZXNvbHZlKHRoaXMuX2RhdGEpO1xuXHRcdFx0cmV0dXJuIGRmZC5wcm9taXNlKClcblx0XHR9XG5cblx0XHRpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5kYXRhID09PSAnc3RyaW5nJykge1xuXHRcdFx0cmV0dXJuICQuYWpheCh7XG5cdFx0XHRcdHVybCA6IHRoaXMub3B0aW9ucy5kYXRhLFxuXHRcdFx0XHRtZXRob2QgOiAnR0VUJyxcblx0XHRcdFx0ZGF0YVR5cGUgOiAnanNvbidcblx0XHRcdH0pLnByb21pc2UoKTtcblxuXHRcdH0gZWxzZSBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5kYXRhID09PSAnb2JqZWN0Jykge1xuXHRcdFx0ZGZkLnJlc29sdmUodGhpcy5vcHRpb25zLmRhdGEpO1xuXHRcdFx0cmV0dXJuIGRmZC5wcm9taXNlKClcblx0XHR9XG5cdH1cblxuXHRnZXRTZWN0aW9uRGF0YSgpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXREYXRhKClcblx0XHRcdC50aGVuKGRhdGEgPT4ge1xuXHRcdFx0XHRyZXR1cm4gZGF0YS5zZWN0aW9uc1xuXHRcdFx0fSlcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXF1ZXN0IGZ1bGxzY3JlZW5cblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQGZpcmVzIFBsYXllciNmdWxsc2NyZWVuY2hhbmdlXG5cdCAqL1xuXHRyZXF1ZXN0RnVsbHNjcmVlbigpIHtcblx0XHRjb25zdCBmc0FwaSA9IEZ1bGxzY3JlZW5BcGk7XG5cblx0XHRpZihmc0FwaS5yZXF1ZXN0RnVsbHNjcmVlbikge1xuXHRcdFx0Ly8gQ2FsbCBIVE1MNSBWaWRlbyBhcGkgcmVxdWVzdEZ1bGxzY3JlZW5cblx0XHRcdHRoaXMuZWxlbWVudFswXVtmc0FwaS5yZXF1ZXN0RnVsbHNjcmVlbl0oKTtcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBmdWxsc2NyZWVuY2hhbmdlIGh0bWw1IG1lZGlhIGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciNmdWxsc2NyZWVuY2hhbmdlXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMudHJpZ2dlcignZnVsbHNjcmVlbmNoYW5nZScsIHRydWUpO1xuXHRcdH0gZWxzZSBpZiAodGhpcy52aWRlby5zdXBwb3J0c0Z1bGxTY3JlZW4oKSkge1xuXHRcdFx0dGhpcy52aWRlby5lbnRlckZ1bGxzY3JlZW4oKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogRXhpdCBmdWxsc2NyZWVuXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBmaXJlcyBQbGF5ZXIjZnVsbHNjcmVlbmNoYW5nZVxuXHQgKi9cblx0ZXhpdEZ1bGxzY3JlZW4oKSB7XG5cdFx0Y29uc3QgZnNBcGkgPSBGdWxsc2NyZWVuQXBpO1xuXG5cdFx0aWYoZnNBcGkuZXhpdEZ1bGxzY3JlZW4pIHtcblx0XHRcdGRvY3VtZW50W2ZzQXBpLmV4aXRGdWxsc2NyZWVuXSgpO1xuXHRcdH0gZWxzZSBpZiAodGhpcy52aWRlby5zdXBwb3J0c0Z1bGxTY3JlZW4oKSkge1xuXHRcdFx0dGhpcy52aWRlby5leGl0RnVsbHNjcmVlbigpO1xuXHRcdH1cblxuXHRcdHRoaXMudHJpZ2dlcignZnVsbHNjcmVlbmNoYW5nZScsIGZhbHNlKTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIFRvZ2dsZSBmdWxsc2NyZWVuXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBmaXJlcyBQbGF5ZXIjZnVsbHNjcmVlbmNoYW5nZVxuXHQgKi9cblx0dG9nZ2xlRnVsbHNjcmVlbigpIHtcblx0XHRpZih0aGlzLnZpZXcgPT09ICdmdWxsc2NyZWVuJykge1xuXHRcdFx0dGhpcy5leGl0RnVsbHNjcmVlbigpXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucmVxdWVzdEZ1bGxzY3JlZW4oKVxuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgQ29udHJvbENvbGxlY3Rpb24gb2YgUGxheWVyIGJ5IG5hbWUgKGUueCAnY29tbW9uJywgJ2Z1bGxzY3JlZW4nKVxuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSAtIE5hbWUgb2YgQ29udHJvbENvbGxlY3Rpb25cblx0ICogQHJldHVybnMge0NvbnRyb2xDb2xsZWN0aW9ufVxuXHQgKi9cblx0Z2V0Q29udHJvbHMobmFtZSkge1xuXHRcdHJldHVybiB0aGlzLmNvbnRyb2xzW25hbWVdO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybiB0aGUgd2lkdGggb2YgcGxheWVyLlxuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAcmV0dXJucyB7TnVtYmVyfSBXaWR0aCBpbiBweFxuXHQgKi9cblx0Z2V0V2lkdGgoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudC53aWR0aCgpXG5cdH1cblxuXHQvKipcblx0ICogQ29tcGxldGUgdGhlIHNlY3Rpb25zLCBieSB0aGUgYWRkaXRpb25hbCBmaWVsZCAnZW5kJyBpbiBlYWNoIHNlY3Rpb25cblx0ICpcblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBzZWN0aW9ucyAtIFNlY3Rpb25zXG5cdCAqIEByZXR1cm5zIHtPYmplY3R9IE5ldyBzZWN0aW9uc1xuXHQgKi9cblx0X2NvbXBsZXRlU2VjdGlvbnMoc2VjdGlvbnMpIHtcblx0XHRpZiAoc2VjdGlvbnMgPT0gbnVsbCB8fCBzZWN0aW9ucy5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVyblxuXHRcdH1cblx0XHRsZXQgbmV3U2VjdGlvbnMgPSBbXS5jb25jYXQoc2VjdGlvbnMpXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBuZXdTZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuXHRcdFx0bGV0IGVuZFNlY3Rpb247XG5cdFx0XHRpZiAoaSA8IChuZXdTZWN0aW9ucy5sZW5ndGggLSAxKSkge1xuXHRcdFx0XHRlbmRTZWN0aW9uID0gbmV3U2VjdGlvbnNbaSsxXS5iZWdpblxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZW5kU2VjdGlvbiA9IHRoaXMudmlkZW8uZHVyYXRpb247XG5cdFx0XHR9XG5cdFx0XHRuZXdTZWN0aW9uc1tpXS5lbmQgPSBlbmRTZWN0aW9uO1xuXHRcdH1cblx0XHRyZXR1cm4gbmV3U2VjdGlvbnM7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGFuZCBzZXQgdGhlIGN1cnJlbnQgcGxheWJhY2sgcG9zaXRpb24gaW4gdGhlIGF1ZGlvL3ZpZGVvIChpbiBzZWNvbmRzKVxuXHQgKiBHZXR0ZXIgYW5kIHNldHRlclxuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAbWVtYmVyb2YhIFBsYXllciNcblx0ICogQHR5cGUge051Ym1lcn1cblx0ICovXG5cdGdldCBjdXJyZW50VGltZSgpIHtcblx0XHRyZXR1cm4gdGhpcy52aWRlby5jdXJyZW50VGltZTtcblx0fVxuXG5cdHNldCBjdXJyZW50VGltZSh2YWx1ZSkge1xuXHRcdHRoaXMudmlkZW8uY3VycmVudFRpbWUgPSB2YWx1ZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHRoZSBsZW5ndGggb2YgdGhlIGN1cnJlbnQgYXVkaW8vdmlkZW8gKGluIHNlY29uZHMpXG5cdCAqIEdldHRlclxuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAbWVtYmVyb2YhIFBsYXllciNcblx0ICogQHR5cGUge051Ym1lcn1cblx0ICovXG5cdGdldCBkdXJhdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy52aWRlby5kdXJhdGlvbjtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHdoZXRoZXIgdGhlIHBsYXliYWNrIG9mIHRoZSBhdWRpby92aWRlbyBoYXMgZW5kZWQgb3Igbm90XG5cdCAqIEdldHRlclxuXHQgKlxuXHQgKiBAbWVtYmVyb2YhIFBsYXllciNcblx0ICogQHR5cGUge0Jvb2xlYW59XG5cdCAqL1xuXHRnZXQgZW5kZWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMudmlkZW8uZW5kZWQ7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyBhbmQgc2V0IHdoZXRoZXIgdGhlIHBsYXliYWNrIG9mIHRoZSBhdWRpby92aWRlbyBoYXMgZW5kZWQgb3Igbm90XG5cdCAqIEdldHRlciBhbmQgc2V0dGVyXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBtZW1iZXJvZiEgUGxheWVyI1xuXHQgKiBAdHlwZSB7TWVkaWFFcnJvcnxTdHJpbmd9XG5cdCAqIEBmaXJlcyBQbGF5ZXIjZXJyb3Jcblx0ICovXG5cdGdldCBlcnJvcigpIHtcblx0XHRyZXR1cm4gdGhpcy5fZXJyb3IgfHwgbnVsbDtcblx0fVxuXG5cdHNldCBlcnJvcih2YWx1ZSkge1xuXHRcdGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuXHRcdFx0dGhpcy5fZXJyb3IgPSBudWxsO1xuXHRcdFx0dGhpcy5yZW1vdmVDbGFzcygnbGVwbGF5ZXItLWVycm9yJyk7XG5cdFx0XHRpZih0aGlzLmVycm9yRGlzcGxheSkge1xuXHRcdFx0XHR0aGlzLmVycm9yRGlzcGxheS5lbGVtZW50LmhpZGUoKVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXHRcdHRoaXMuX2Vycm9yID0gbmV3IE1lZGlhRXJyb3IodmFsdWUpO1xuXG5cdFx0dGhpcy5hZGRDbGFzcygnbGVwbGF5ZXItLWVycm9yJyk7XG5cblx0XHQvKipcblx0XHQgKiBlcnJvciBldmVudFxuXHRcdCAqXG5cdFx0ICogQGV2ZW50IFBsYXllciNlcnJvclxuXHRcdCAqIEBwcm9wZXJ0eSB7TWVkaWFFcnJvcn0gZXJyb3Jcblx0XHQgKiBAZXhhbXBsZVxuXHRcdCAqIGNvbnN0IHBsYXllciA9IG5ldyBQbGF5ZXIoJCgnI3ZpZGVvJyksIG9wdGlvbnMpO1xuXHRcdCAqIHBsYXllci5vbignZXJyb3InLCAoZSwgZGF0YSkgPT4gY29uc29sZS5lcnJvcihkYXRhLmVycm9yKSk7XG5cdFx0ICovXG5cdFx0dGhpcy50cmlnZ2VyKCdlcnJvcicsIHsgZXJyb3IgOiB0aGlzLl9lcnJvcn0pO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRnZXQgcmF0ZSgpIHtcblx0XHRyZXR1cm4gdGhpcy52aWRlby5yYXRlO1xuXHR9XG5cblx0c2V0IHJhdGUodmFsdWUpIHtcblx0XHR0aGlzLnZpZGVvLnJhdGUgPSB2YWx1ZTtcblx0fVxuXG5cdGdldCBwYXVzZWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMudmlkZW8ucGF1c2VkO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybiB0aGUgaGVpZ2h0IG9mIHBsYXllci4gSWYgeW91IHdhbnQgZ2V0IGhlaWdodCBvbmx5IG9mIHZpZGVvIGVsZW1lbnQsIHVzZSB0aGlzLnZpZGVvLmhlaWdodCBvciB3aGF0ZXZlclxuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAdHlwZSB7TnVtYmVyfVxuXHQgKiBAbWVtYmVyb2YhIFBsYXllciNcblx0ICovXG5cdGdldCBoZWlnaHQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudC5oZWlnaHQoKVxuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybiB1bm5lY2Vzc2FyeSB2aWRlbyBoZWlndGhcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHR5cGUge051bWJlcn1cblx0ICogQG1lbWJlcm9mISBQbGF5ZXIjXG5cdCAqL1xuXHRnZXQgdmlkZW9IZWlnaHQoKSB7XG5cdFx0cmV0dXJuIHRoaXMudmlkZW8uaGVpZ2h0O1xuXHR9XG5cblxuXHQvKipcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHR5cGUge0Jvb2xlYW59XG5cdCAqIEBtZWJtZXJvZiEgUGxheWVyI1xuXHQgKi9cblx0Z2V0IHVzZXJBY3RpdmUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3VzZXJBY3RpdmUgfHwgZmFsc2U7XG5cdH1cblxuXHRzZXQgdXNlckFjdGl2ZSh2YWx1ZSkge1xuXHRcdGlmKHZhbHVlICE9PSB0aGlzLmdldFVzZXJBY3RpdmUpIHtcblx0XHRcdHRoaXMuX3VzZXJBY3RpdmUgPSB2YWx1ZTtcblx0XHRcdHRoaXMudG9nZ2xlQ2xhc3MoJ2xlcGxheWVyLS11c2VyLWFjdGl2ZScsIHZhbHVlKTtcblx0XHRcdC8qKlxuXHRcdFx0ICogVXNlciBhY3RpdmUgZXZlbnRcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI3VzZXJhY3RpdmVcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy50cmlnZ2VyKCd1c2VyYWN0aXZlJyk7XG5cdFx0fVxuXHR9XG5cblxuXHQvKipcblx0ICogU2V0IGFuZCBnZXQgcGxheWVyIHZpZXcuIFZpZXcgQ2FuIGJlICdjb21tb24nLCAnZnVsbHNjcmVlbicsICdtaW5pJ3dcblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHR5cGUge1N0cmluZ31cblx0ICogQG1lbWJlcm9mISBQbGF5ZXIjXG5cdCAqL1xuXHRnZXQgdmlldygpIHtcblx0XHRyZXR1cm4gdGhpcy5fdmlldztcblx0fVxuXG5cdHNldCB2aWV3KHZpZXcpIHtcblx0XHRpZih0aGlzLnZpZXcgIT0gbnVsbCkge1xuXHRcdFx0dGhpcy5yZW1vdmVDbGFzcyhgbGVwbGF5ZXItLSR7dGhpcy52aWV3fWApO1xuXHRcdFx0dGhpcy50cmlnZ2VyKGBkZWx2aWV3LiR7dGhpcy52aWV3fWApO1xuXHRcdH1cblxuXHRcdHRoaXMuX3ZpZXcgPSB2aWV3O1xuXHRcdHRoaXMuZWxlbWVudC5hZGRDbGFzcyhgbGVwbGF5ZXItLSR7dmlld31gKVxuXHRcdHRoaXMudHJpZ2dlcihgc2V0dmlldy4ke3ZpZXd9YCk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8qKlxuXHQgKiBSZW1vdmUgdW5uZWNlc3NhcnkgYXR0cmlidXRlcywgYW5kIHNldCBzb21lIGF0dHJzIGZyb20gb3B0aW9ucyAobG9vcCwgcG9zdGVyIGV0Yy4uLikuIENyZWF0ZSBtYWluIERPTSBvYmplY3RzXG5cdCAqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHRjb25zdCBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuXHRcdGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9lbGVtZW50O1xuXG5cdFx0dGhpcy5lbGVtZW50ID0gY3JlYXRlRWwoJ2RpdicpO1xuXG5cblx0XHR0aGlzLmVsZW1lbnQgPSB0aGlzLmVsZW1lbnRcblx0XHRcdC5hZGRDbGFzcygnbGVwbGF5ZXInKVxuXHRcdFx0LmF0dHIoJ3RhYmluZGV4JywgMClcblx0XHRcdC5jc3MoJ3dpZHRoJywgb3B0aW9ucy53aWR0aCAmJiAnMTAwJScpXG5cdFx0XHQuY3NzKCdtYXgtd2lkdGgnLCBvcHRpb25zLndpZHRoKVxuXG5cdFx0LyoqXG5cdFx0ICogRXJyb3IgZGlzcGxheSBjb21wb25lbnQuXG5cdFx0ICpcblx0XHQgKiBAdHlwZSB7RXJyb3JEaXNwbGF5fVxuXHRcdCAqIEBtZW1iZXJvZiEgUGxheWVyI1xuXHRcdCAqL1xuXHRcdHRoaXMuZXJyb3JEaXNwbGF5ID0gbmV3IEVycm9yRGlzcGxheSh0aGlzKTtcblxuXG5cdFx0LyoqXG5cdFx0ICogUGxheSBidXR0b24gY29tcG9uZW50LlxuXHRcdCAqXG5cdFx0ICogQHR5cGUge1BsYXlCdXR0b259XG5cdFx0ICogQG1lbWJlcm9mISBQbGF5ZXIjXG5cdFx0ICovXG5cdFx0dGhpcy5wbGF5QnV0dG9uID0gbmV3IFBsYXlCdXR0b24odGhpcyk7XG5cblx0XHQvLyBUT0RPOiDQktGL0L3QtdGB0YLQuCDRjdGC0L4g0LIg0L7RgtC00LXQu9GM0L3QtdGL0Lkg0LrQvtC80L/QvtC90LXQvdGCXG5cdFx0dGhpcy5sb2FkZXIgPSAkKCc8ZGl2IC8+Jylcblx0XHRcdC5hZGRDbGFzcygnbGVwbGF5ZXItbG9hZGVyLWNvbnRhaW5lcicpXG5cdFx0XHQuYXBwZW5kKG5ldyBJY29uKHRoaXMsIHtcblx0XHRcdFx0aWNvbk5hbWUgOiAncmVmcmVzaCcsXG5cdFx0XHRcdGNsYXNzTmFtZSA6ICdsZXBsYXllci1sb2FkZXItY29udGFpbmVyX19pY29uJ1xuXHRcdFx0fSkuZWxlbWVudCk7XG5cblxuXHRcdC8qKlxuXHRcdCAqIFNwbGFzaCBpY29uIGNvbXBvbmVudC5cblx0XHQgKlxuXHRcdCAqIEB0eXBlIHtTcGxhc2hJY29ufVxuXHRcdCAqIEBtZW1iZXJvZiEgUGxheWVyI1xuXHRcdCAqL1xuXHRcdHRoaXMuc3BsYXNoSWNvbiA9IG5ldyBTcGxhc2hJY29uKHRoaXMpO1xuXG5cdFx0dGhpcy52aWRlb0NvbnRhaW5lciA9IGNyZWF0ZUVsKCdkaXYnLCB7XG5cdFx0XHRjbGFzc05hbWUgOiAnbGVwbGF5ZXItdmlkZW8nXG5cdFx0fSlcblx0XHQuYXBwZW5kKHRoaXMuZXJyb3JEaXNwbGF5LmVsZW1lbnQpXG5cdFx0LmFwcGVuZCh0aGlzLnBsYXlCdXR0b24uZWxlbWVudClcblx0XHQuYXBwZW5kKHRoaXMubG9hZGVyKVxuXHRcdC5hcHBlbmQodGhpcy5zcGxhc2hJY29uLmVsZW1lbnQpXG5cblx0XHR0aGlzLnBvc3RlciA9IG5ldyBQb3N0ZXIodGhpcyk7XG5cdFx0dGhpcy52aWRlb0NvbnRhaW5lci5hcHBlbmQodGhpcy5wb3N0ZXIuZWxlbWVudCk7XG5cblxuXHRcdGNvbnN0IGxhc3RUaW1lciA9IG5ldyBUaW1lKHRoaXMsIHtcblx0XHRcdGZuIDogKHBsYXllcikgPT4ge1xuXHRcdFx0XHRjb25zdCB2aWRlbyA9IHBsYXllci52aWRlbztcblx0XHRcdFx0cmV0dXJuIHNlY29uZHNUb1RpbWUodmlkZW8uZHVyYXRpb24gLSB2aWRlby5jdXJyZW50VGltZSk7XG5cdFx0XHR9XG5cdFx0fSlcblxuXHRcdGlmKHRoaXMub3B0aW9ucy52aWRlb0luZm8pIHtcblx0XHRcdGNvbnNvbGUud2Fybignb3B0aW9ucy52aWRlb0luZm8gaXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBpc3RlYWQgb3B0aW9ucy5kZXNjcmlwdGlvbicpO1xuXHRcdH1cblxuXHRcdHRoaXMuaW5mb0VsZW1lbnQgPSBjcmVhdGVFbCgnZGl2Jywge1xuXHRcdFx0Y2xhc3NOYW1lIDogJ2xlcGxheWVyX19pbmZvJ1xuXHRcdH0pXG5cdFx0LmFwcGVuZChjcmVhdGVFbCgnZGl2Jywge1xuXHRcdFx0Y2xhc3NOYW1lIDogJ2xlcGxheWVyX190aXRsZScsXG5cdFx0XHRodG1sIDogdGhpcy5vcHRpb25zLnRpdGxlIHx8IFwiXCJcblx0XHR9KSlcblx0XHQuYXBwZW5kKGNyZWF0ZUVsKCdkaXYnLCB7XG5cdFx0XHRjbGFzc05hbWUgOiAnbGVwbGF5ZXJfX3ZpZGVvLWluZm8nLFxuXHRcdFx0aHRtbCA6IHRoaXMub3B0aW9ucy5kZXNjcmlwdGlvbiB8fCB0aGlzLm9wdGlvbnMudmlkZW9JbmZvIHx8IFwiXCJcblx0XHR9KSlcblx0XHQuYXBwZW5kKGNyZWF0ZUVsKCdkaXYnLCB7XG5cdFx0XHRjbGFzc05hbWUgOiAnbGVwbGF5ZXJfX2xhc3QnLFxuXHRcdFx0aHRtbCA6IGDQktC40LTQtdC+INC30LDQutC+0L3Rh9C40YLRgdGPINGH0LXRgNC10LcgYCxcblx0XHR9KS5hcHBlbmQobGFzdFRpbWVyLmVsZW1lbnQpKVxuXG5cdFx0dGhpcy5pbm5lckVsZW1lbnQgPSAkKCc8ZGl2IC8+Jylcblx0XHRcdC5hZGRDbGFzcygnbGVwbGF5ZXJfX2lubmVyJylcblx0XHRcdC5hcHBlbmQodGhpcy52aWRlb0NvbnRhaW5lcilcblx0XHRcdC5hcHBlbmQodGhpcy5pbmZvRWxlbWVudClcblxuXHRcdHRoaXMuZWxlbWVudCA9IHRoaXMuZWxlbWVudFxuXHRcdFx0LmFwcGVuZCh0aGlzLmlubmVyRWxlbWVudClcblxuXHRcdHRoaXMuYWRkQ2xhc3MoJ2xlcGxheWVyLS1wYXVzZWQnKTtcblx0XHR0aGlzLmFkZENsYXNzKCdsZXBsYXllci0tdmlyZ2luJyk7XG5cblx0XHRpZihJU19JUEhPTkUpIHtcblx0XHRcdHRoaXMuYWRkQ2xhc3MoJ2xlcGxheWVyLS1pcGhvbmUnKTtcblx0XHR9XG5cblx0XHRpZihJU19BTkRST0lEKSB7XG5cdFx0XHR0aGlzLmFkZENsYXNzKCdsZXBsYXllci0tYW5kcm9pZCcpO1xuXHRcdH1cblxuXHRcdGlmKElTX01PQklMRSkge1xuXHRcdFx0dGhpcy5hZGRDbGFzcygnbGVwbGF5ZXItLW1vYmlsZScpO1xuXHRcdH1cblxuXG5cblx0XHRpZihvcHRpb25zLnNlY3Rpb25Db250YWluZXIpIHtcblx0XHRcdHRoaXMuc2VjdGlvbnNDb250YWluZXIgPSAkKG9wdGlvbnMuc2VjdGlvbkNvbnRhaW5lcik7XG5cdFx0fVxuXG5cdFx0ZWxlbWVudC5iZWZvcmUodGhpcy5lbGVtZW50KTtcblx0XHR0aGlzLnZpZGVvQ29udGFpbmVyLmFwcGVuZChlbGVtZW50KTtcblxuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQ7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IG9wdGlvbnMgZnJvbSB2aWRlbydzIGF0dHJpYnV0ZSAoIGhlaWdodCwgd2lkdGgsIHBvc3RlciwgcHJlbG9hZCBldGMuLi4pXG5cdCAqIEdldCBzb3VyY2UgdmlkZW8gZnJvbSBzcmMgYXR0ciBvciA8c291cmNlPiBlbGVtZW50IHdpdGggZGF0YSBhdHRyICdkYXRhLXF1YWxpdHknXG5cdCAqIEFsc28gZ2V0IHNvdXJjZXMgZm9yIGRpZmZlcmVudCBxdWFsaXR5IGZyb20gPHNvdXJjZT4gZWxlbWVudCB3aXRoIGRhdGEgYXR0ciAnZGF0YS1xdWFsaXR5J1xuXHQgKlxuXHQgKiBAYWNjZXNzIHByaXZhdGVcblx0ICogQHJldHVybnMge09iamVjdH0gb3B0aW9uc1xuXHQgKi9cblx0X29wdGlvbnNGcm9tRWxlbWVudCgpIHtcblx0XHQvLyBDb3B5IHZpZGVvIGF0dHJzIHRvIHRoZSBvcGl0b25zXG5cdFx0Y29uc3QgIGVsZW1lbnQgPSB0aGlzLl9lbGVtZW50O1xuXHRcdGlmIChlbGVtZW50ID09IG51bGwgfHwgZWxlbWVudC5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybiB7fVxuXHRcdH1cblxuXHRcdGxldCBhdHRyT3B0aW9ucyA9IFtcblx0XHRcdCdoZWlnaHQnLFxuXHRcdFx0J3dpZHRoJyxcblx0XHRcdCdwb3N0ZXInLFxuXHRcdFx0J2F1dG9wbGF5Jyxcblx0XHRcdCdsb29wJyxcblx0XHRcdCdtdXRlZCcsXG5cdFx0XHQncHJlbG9hZCcsXG5cdFx0XVxuXHRcdC5yZWR1Y2UoKG9iaiwgaXRlbSkgPT4ge1xuXHRcdFx0Y29uc3QgdmFsID0gZWxlbWVudC5hdHRyKGl0ZW0pO1xuXHRcdFx0aWYodmFsICE9IG51bGwpIHtcblx0XHRcdFx0b2JqW2l0ZW1dID0gZWxlbWVudC5hdHRyKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG9iajtcblx0XHR9LCB7fSk7XG5cblx0XHRhdHRyT3B0aW9ucy5zb3VyY2VzID0gW107XG5cblx0XHQvLyBTcmMgaXQgaXMgbWFpbiBzb3VyY2UsIHRoYXQgd2lsbCBiZSBsb2FkXG5cdFx0aWYoZWxlbWVudC5hdHRyKCdzcmMnKSkge1xuXHRcdFx0YXR0ck9wdGlvbnMuc3JjID0ge1xuXHRcdFx0XHR1cmwgOiBlbGVtZW50LmF0dHIoJ3NyYycpLFxuXHRcdFx0XHR0aXRsZSA6IGVsZW1lbnQuYXR0cignZGF0YS1xdWFsaXR5JykgfHwgZWxlbWVudC5hdHRyKCd0aXRsZScpIHx8ICdkZWZhdWx0J1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIENvcHkgc291cmNlcyBmcm9tIEhUTUw1IHNvdXJjZSBlbGVtZW50IHdpdGggZGF0YS1xdWFsaXR5IGF0dHJcblx0XHQvLyBJZiBkYXRhLXF1YWxpdHkgYXR0ciBkb2VzIG5vdCBleGlzdCAtIG5vXG5cdFx0ZWxlbWVudC5maW5kKCdzb3VyY2UnKS5lYWNoKChpLCBpdGVtKSA9PiB7XG5cdFx0XHRpdGVtID0gJChpdGVtKTtcblx0XHRcdGlmKCFpdGVtLmF0dHIoJ2RhdGEtcXVhbGl0eScpKSB7XG5cdFx0XHRcdHJldHVyblxuXHRcdFx0fVxuXHRcdFx0YXR0ck9wdGlvbnMuc291cmNlcyA9IGF0dHJPcHRpb25zLnNvdXJjZXMuY29uY2F0KHtcblx0XHRcdFx0dXJsIDogaXRlbS5hdHRyKCdzcmMnKSxcblx0XHRcdFx0dGl0bGUgOiBpdGVtLmF0dHIoJ2RhdGEtcXVhbGl0eScpIHx8IGl0ZW0uYXR0cigndGl0bGUnKSB8fCAnZGVmYXVsdCdcblx0XHRcdH0pXG5cblx0XHR9KTtcblxuXHRcdHJldHVybiBhdHRyT3B0aW9ucztcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm4gYSBuYW1lIG9mIGljb24uIElmIGxlc3MgdGhlbiAwLjEgcmV0dXJuIHZvbHVtZS1vZmYsXG5cdCAqIGlmIGxlc3MgdGhlbiAwLjUgcmV0dXJuIHZvbHVtZSBkb3duLCBlbHNlIHJldHVybiB2b2x1bWUtdXBcblx0ICpcblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZSBWb2x1bWUgdmFsdWVcblx0ICogQHJldHVybnMge1N0cmluZ30gSWNvbiBuYW1lXG5cdCAqL1xuXHRjYWxjVm9sdW1lSWNvbih2YWx1ZSkge1xuXHRcdGlmKHZhbHVlID09IG51bGwpIHtcblx0XHRcdHZhbHVlID0gdGhpcy52aWRlby52b2x1bWU7XG5cdFx0fVxuXHRcdGNvbnN0IHZvbHVtZSA9IHZhbHVlO1xuXG5cdFx0aWYgKHZvbHVtZSA8IHRoaXMub3B0aW9ucy52b2x1bWUubXV0ZWxpbWl0KSB7XG5cdFx0XHRyZXR1cm4gJ3ZvbHVtZS1vZmYnO1xuXHRcdH0gZWxzZSBpZiAodmFsdWUgPCAwLjUpIHtcblx0XHRcdHJldHVybiAndm9sdW1lLWRvd24nO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gJ3ZvbHVtZS11cCc7XG5cdFx0fVxuXHR9XG5cblx0dG9nZ2xlU2VjdGlvbnMoZmxhZykge1xuXHRcdGlmKHRoaXMuc2VjdGlvbnMpIHtcblx0XHRcdHRoaXMuc2VjdGlvbnMudmlzaWJsZSA9IGZsYWc7XG5cdFx0fVxuXHRcdGlmKHRoaXMub3V0c2lkZVNlY3Rpb25zKSB7XG5cdFx0XHR0aGlzLm91dHNpZGVTZWN0aW9ucy52aXNpYmxlID0gZmxhZztcblx0XHR9XG5cdH1cblxuXG5cblx0LyoqXG5cdCAqIE1lcmdlIGRlZmF1bHRPcHRpb25zLCBwcmVzZXRPcHRpb25zIHdpdGggYXR0ck9wdGlvbnMgYW5kIHVzZXIncyBvcHRpb25zO1xuXHQgKlxuXHQgKiBBbmQgY29tcGxlbWVudCB0d28gb2JqZWN0czogY29udHJvbHMgYW5kIGV4Y2x1ZGVDb250cm9sc1xuXHQgKlxuXHQgKiBAYWNjZXNzIHByaXZhdGVcblx0ICovXG5cdF9pbml0T3B0aW9ucygpIHtcblx0XHRjb25zdCBhdHRyT3B0aW9ucyA9IHRoaXMuX29wdGlvbnNGcm9tRWxlbWVudCgpO1xuXHRcdGxldCBwcmVzZXRPcHRpb25zID0ge307XG5cblx0XHRpZiAodGhpcy5fdXNlck9wdGlvbnMucHJlc2V0ICYmIFBsYXllci5nZXRQcmVzZXQodGhpcy5fdXNlck9wdGlvbnMucHJlc2V0KSkge1xuXHRcdFx0cHJlc2V0T3B0aW9ucyA9IFBsYXllci5nZXRQcmVzZXQodGhpcy5fdXNlck9wdGlvbnMucHJlc2V0KS5vcHRpb25zO1xuXHRcdH1cblxuXG5cdFx0Ly8gTWVyZ2UgZGVmYXVsdCBvcHRpb25zICsgcHJlc2V0IG9wdGlvbnMgKyB2aWRlbyBhdHRyaWJ1dHRzKyB1c2VyIG9wdGlvbnNcblx0XHR0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh0cnVlLCB7fSwgZGVmYXVsdE9wdGlvbnMsIHByZXNldE9wdGlvbnMsIGF0dHJPcHRpb25zLCB0aGlzLl91c2VyT3B0aW9ucyk7XG5cblx0XHRpZih0aGlzLm9wdGlvbnMuc291cmNlcyAmJiAhQXJyYXkuaXNBcnJheSh0aGlzLm9wdGlvbnMuc291cmNlcykpIHtcblx0XHRcdHRoaXMub3B0aW9ucy5zb3VyY2VzID0gW3RoaXMub3B0aW9ucy5zb3VyY2VzXVxuXHRcdH1cblxuXHRcdGlmKHR5cGVvZiB0aGlzLm9wdGlvbnMuc3JjID09PSAnc3RyaW5nJykge1xuXHRcdFx0dGhpcy5vcHRpb25zLnNyYyA9IHsgdXJsIDogdGhpcy5vcHRpb25zLnNyYyB9XG5cdFx0fVxuXG5cdFx0aWYodGhpcy5vcHRpb25zLnNyYyA9PSBudWxsICYmIHRoaXMub3B0aW9ucy5zb3VyY2VzLmxlbmd0aCA+IDApIHtcblx0XHRcdHRoaXMub3B0aW9ucy5zcmMgPSB0aGlzLm9wdGlvbnMuc291cmNlc1swXVxuXHRcdH1cblxuXG5cdFx0Ly8gR2VuZXJhdGUgYW5kcm9pZDpmdWxsc2NyZWVuLCBhbmRyb2lkOmNvbW1vbiBhbmQgZXRjIGNvbnRyb2xzIG9wdGlvbnNcblxuXG5cdFx0Ly8gTWVyZ2UgY29ycmVjdGx5IGNvbnRyb2xzLCB3aXRob3V0IGRlZXAgbWVyZ2Vcblx0XHR0aGlzLm9wdGlvbnMuY29udHJvbHMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdE9wdGlvbnMuY29udHJvbHMsIHByZXNldE9wdGlvbnMuY29udHJvbHMsIHRoaXMuX3VzZXJPcHRpb25zLmNvbnRyb2xzKTtcblxuXHRcdC8vIGV4Y2x1ZGUgY29udHJvbHMgb3B0aW9uXG5cdFx0Ly8gVE9ETyhhZGludmFkaW0pOlxuXHRcdC8vIFNldCBkZXByZWNldGVkIGZsYWcgZm9yIHRoaXMgb3B0aW9uO1xuXHRcdGZvciAoY29uc3QgbmFtZSBpbiB0aGlzLm9wdGlvbnMuZXhjbHVkZUNvbnRyb2xzKSB7XG5cdFx0XHRpZiAoIXRoaXMub3B0aW9ucy5leGNsdWRlQ29udHJvbHMuaGFzT3duUHJvcGVydHkobmFtZSkpIHJldHVybjtcblx0XHRcdGNvbnN0IGNvbnRyb2xDb2xsZWN0aW9uID0gdGhpcy5vcHRpb25zLmV4Y2x1ZGVDb250cm9sc1tuYW1lXTtcblx0XHRcdGNvbnRyb2xDb2xsZWN0aW9uLmZvckVhY2goKHJvdywgaW5kZXgpID0+IHtcblx0XHRcdFx0aWYgKHRoaXMub3B0aW9ucy5jb250cm9sc1tuYW1lXSAmJiB0aGlzLm9wdGlvbnMuY29udHJvbHNbbmFtZV1baW5kZXhdKSB7XG5cdFx0XHRcdFx0dGhpcy5vcHRpb25zLmNvbnRyb2xzW25hbWVdW2luZGV4XSA9IGV4Y2x1ZGVBcnJheSh0aGlzLm9wdGlvbnMuY29udHJvbHNbbmFtZV1baW5kZXhdLCByb3cpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdH1cblxuXHRcdGlmICh0aGlzLm9wdGlvbnMucHJlc2V0ICYmIFBsYXllci5nZXRQcmVzZXQodGhpcy5vcHRpb25zLnByZXNldCkpIHtcblx0XHRcdFBsYXllci5nZXRQcmVzZXQodGhpcy5vcHRpb25zLnByZXNldCkuaW5pdE9wdGlvbnMoKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQ3JlYXRlIGFuZCBpbml0IGFsbCBjb250cm9sc1xuXHQgKlxuXHQgKiBAYWNjZXNzIHByaXZhdGVcblx0ICovXG5cdF9pbml0Q29udHJvbHMoKSB7XG5cdFx0Zm9yIChjb25zdCBuYW1lIG9mIFsnY29tbW9uJywgJ2Z1bGxzY3JlZW4nXSkge1xuXHRcdFx0aWYgKCF0aGlzLm9wdGlvbnMuY29udHJvbHMuaGFzT3duUHJvcGVydHkobmFtZSkpIHJldHVybjtcblx0XHRcdGNvbnN0IGNvbnRyb2xDb2xsZWN0aW9uID0gbmV3IENvbnRyb2xDb2xsZWN0aW9uKHRoaXMsIHsgbmFtZSB9KTtcblxuXHRcdFx0dGhpcy5lbGVtZW50LmFwcGVuZChjb250cm9sQ29sbGVjdGlvbi5lbGVtZW50KTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5jb250cm9scy5jb21tb24gIT0gbnVsbCkge1xuXHRcdFx0dGhpcy5jb250cm9scy5jb21tb24uYWN0aXZlID0gdHJ1ZTtcblx0XHR9XG5cdH1cblxuXG5cdF9saXN0ZW5Ib3RLZXlzKCkge1xuXG5cdFx0Y29uc3QgaXNLZXlCaW5kaW5nID0gKGUsIGJpbmRpbmcpID0+IHtcblx0XHRcdHJldHVybiAoKGUud2hpY2ggPT09IGJpbmRpbmcua2V5KSB8fCAoZS5rZXkgPT09IGJpbmRpbmcua2V5KSkgJiZcblx0XHRcdFx0XHQoISFiaW5kaW5nLnNoaWZ0S2V5ID09PSBlLnNoaWZ0S2V5KSAmJlxuXHRcdFx0XHRcdCghIWJpbmRpbmcuY3RybEtleSA9PT0gZS5jdHJsS2V5KVxuXHRcdH1cblxuXHRcdHRoaXMuZWxlbWVudC5vbigna2V5ZG93bi5sZXBsYXllci5ob3RrZXknLCAoZSkgPT4ge1xuXHRcdFx0dGhpcy5vcHRpb25zLmtleUJpbmRpbmcuZm9yRWFjaChiaW5kaW5nID0+IHtcblxuXHRcdFx0XHRpZihpc0tleUJpbmRpbmcoZSwgYmluZGluZykpIHtcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0YmluZGluZy5mbih0aGlzKTtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblxuXHRcdFx0fSlcblx0XHR9KVxuXHR9XG5cblx0LyoqXG5cdCAqIEluaXQgc2VjdGlvbnMsIGdldCBhamF4IG9yIGpzb24gd2l0aCBzZWN0aW9ucyBkYXRhIGFuZCBjcmVhdGUgU2VjdGlvbnMgb2JqZWN0IGFuZCBhZGRlZCB0aGVtIHRvIHRoZSBET01cblx0ICpcblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqIEByZXR1cm5zIHtqcVByb21pc2V9IGpRdWVyeSBwcm9taXNlXG5cdCAqL1xuXHRfaW5pdFNlY3Rpb25zKCkge1xuXHRcdGNvbnN0IGRmZCA9ICQuRGVmZXJyZWQoKTtcblx0XHRpZiAodGhpcy5vcHRpb25zLmRhdGEgPT0gbnVsbCkge1xuXHRcdFx0ZGZkLnJlamVjdChudWxsKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmdldFNlY3Rpb25EYXRhKCkuZG9uZShzZWN0aW9ucyA9PiB7XG5cdFx0XHRcdHNlY3Rpb25zID0gWy4uLnNlY3Rpb25zXTtcblxuXHRcdFx0XHRjb25zdCBpc1NlY3Rpb25PdXRzaWRlID0gKHRoaXMuc2VjdGlvbnNDb250YWluZXIgJiYgdGhpcy5zZWN0aW9uc0NvbnRhaW5lci5sZW5ndGggPiAwKTtcblxuXHRcdFx0XHRpZiAoc2VjdGlvbnMgPT0gbnVsbCB8fCBzZWN0aW9ucy5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHRkZmQucmVqZWN0KG51bGwpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHNlY3Rpb25zID0gdGhpcy5fY29tcGxldGVTZWN0aW9ucyhzZWN0aW9ucyk7XG5cblx0XHRcdFx0dGhpcy5zZWN0aW9ucyA9IG5ldyBTZWN0aW9ucyh0aGlzLCB7XG5cdFx0XHRcdFx0aXRlbXMgOiBzZWN0aW9ucyxcblx0XHRcdFx0XHRmdWxsc2NyZWVuT25seSA6IGlzU2VjdGlvbk91dHNpZGUsXG5cdFx0XHRcdFx0aGlkZVNjcm9sbCA6IHRydWVcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0dGhpcy5pbm5lckVsZW1lbnQuYXBwZW5kKHRoaXMuc2VjdGlvbnMuZWxlbWVudCk7XG5cblx0XHRcdFx0aWYgKGlzU2VjdGlvbk91dHNpZGUpIHtcblx0XHRcdFx0XHR0aGlzLm91dHNpZGVTZWN0aW9ucyA9IG5ldyBTZWN0aW9ucyh0aGlzLCB7XG5cdFx0XHRcdFx0XHRpdGVtcyA6IHNlY3Rpb25zXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0dGhpcy5zZWN0aW9uc0NvbnRhaW5lci5hcHBlbmQodGhpcy5vdXRzaWRlU2VjdGlvbnMuZWxlbWVudCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZGZkLnJlc29sdmUoeyBpdGVtcyA6IHNlY3Rpb25zIH0pO1xuXHRcdFx0fSlcblx0XHR9XG5cblx0XHRyZXR1cm4gZGZkLnByb21pc2UoKVxuXHR9XG5cblx0LyoqXG5cdCAqIEZ1bmN0aW9uLCB0aGFuIGluaXQgYWxsIHBsdWdpbnMgZnJvbSBwbGF5ZXIgb3B0aW9ucy5cblx0ICogSWYgcGx1Z2luIGRvZXNuJ3QgZXhpc3QgdGhyb3cgYW4gZXJyb3Jcblx0ICpcblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqIEByZXR1cm5zIHtQbGF5ZXJ9IHRoaXNcblx0ICovXG5cdF9pbml0UGx1Z2lucygpIHtcblx0XHRpZiAodGhpcy5vcHRpb25zLnBsdWdpbnMpIHtcblx0XHRcdGZvciAoY29uc3QgbmFtZSBpbiB0aGlzLm9wdGlvbnMucGx1Z2lucykge1xuXHRcdFx0XHRpZighdGhpcy5vcHRpb25zLnBsdWdpbnMuaGFzT3duUHJvcGVydHkobmFtZSkpIHJldHVybjtcblx0XHRcdFx0Y29uc3QgcGx1Z2luT3B0aW9ucyA9IHRoaXMub3B0aW9ucy5wbHVnaW5zW25hbWVdO1xuXHRcdFx0XHRpZih0aGlzW25hbWVdKSB7XG5cdFx0XHRcdFx0aWYocGx1Z2luT3B0aW9ucykge1xuXHRcdFx0XHRcdFx0dGhpc1tuYW1lXShwbHVnaW5PcHRpb25zKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcihgUGx1Z2luICcke25hbWV9JyBkb2Vzbid0IGV4aXN0YCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cblx0LyoqXG5cdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHQgKi9cblx0X2xpc3RlblVzZXJBY3Rpdml0eSgpIHtcblx0XHRsZXQgbW91c2VJblByb2dyZXNzO1xuXHRcdGxldCBsYXN0TW92ZVg7XG5cdFx0bGV0IGxhc3RNb3ZlWTtcblxuXHRcdGNvbnN0IG9uTW91c2VNb3ZlID0gKGUpID0+IHtcblx0XHRcdGlmKGUuc2NyZWVuWCAhPT0gbGFzdE1vdmVYIHx8IGUuc2NyZWVuWSAhPT0gbGFzdE1vdmVZKSB7XG5cdFx0XHRcdGxhc3RNb3ZlWCA9IGUuc2NyZWVuWDtcblx0XHRcdFx0bGFzdE1vdmVZID0gZS5zY3JlZW5ZO1xuXHRcdFx0XHR0aGlzLl91c2VyQWN0aXZpdHkgPSB0cnVlXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y29uc3Qgb25Nb3VzZURvd24gPSAoZSkgPT4ge1xuXHRcdFx0dGhpcy5fdXNlckFjdGl2aXR5ID0gdHJ1ZVxuXG5cdFx0XHQvLyBXaGlsZSB1c2VyIGlzIHByZXNzaW5nIG1vdXNlIG9yIHRvdWNoLCBkaXNwYXRjaCB1c2VyIGFjdGl2aXR5XG5cdFx0XHRjbGVhckludGVydmFsKG1vdXNlSW5Qcm9ncmVzcyk7XG5cblx0XHRcdG1vdXNlSW5Qcm9ncmVzcyA9IHNldEludGVydmFsKCgpID0+IHtcblx0XHRcdFx0dGhpcy5fdXNlckFjdGl2aXR5ID0gdHJ1ZVxuXHRcdFx0fSwgMjUwKTtcblx0XHR9XG5cblx0XHRjb25zdCBvbk1vdXNlVXAgPSAoZSkgPT4ge1xuXHRcdFx0dGhpcy5fdXNlckFjdGl2aXR5ID0gdHJ1ZVxuXHRcdFx0Y2xlYXJJbnRlcnZhbChtb3VzZUluUHJvZ3Jlc3MpO1xuXHRcdH1cblxuXHRcdHRoaXMuZWxlbWVudC5vbignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xuXG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdtb3VzZWRvd24nLCBvbk1vdXNlRG93bik7XG5cblx0XHR0aGlzLmVsZW1lbnQub24oJ21vdXNldXAnLCBvbk1vdXNlVXApO1xuXG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdrZXlkb3duJywgKGUpID0+IHRoaXMuX3VzZXJBY3Rpdml0eSA9IHRydWUpO1xuXHRcdHRoaXMuZWxlbWVudC5vbigna2V5dXAnLCAoZSkgPT4gdGhpcy5fdXNlckFjdGl2aXR5ID0gdHJ1ZSk7XG5cblx0XHQvLyBTZWUgaHR0cDovL2Vqb2huLm9yZy9ibG9nL2xlYXJuaW5nLWZyb20tdHdpdHRlci9cblx0XHRsZXQgaW5hY3Rpdml0eVRpbWVvdXQ7XG5cdFx0Y29uc3QgZGVsYXkgPSB0aGlzLm9wdGlvbnMuaW5uYWN0aXZpdHlUaW1lb3V0O1xuXHRcdHNldEludGVydmFsKCgpID0+IHtcblx0XHRcdGlmICh0aGlzLl91c2VyQWN0aXZpdHkpIHtcblxuXHRcdFx0XHQvLyBSZXNldCB1c2VyIGFjdGl2dXR5IHRyYWNrZXJcblx0XHRcdFx0dGhpcy5fdXNlckFjdGl2aXR5ID0gZmFsc2U7XG5cblx0XHRcdFx0dGhpcy51c2VyQWN0aXZlID0gdHJ1ZTtcblxuXHRcdFx0XHRjbGVhclRpbWVvdXQoaW5hY3Rpdml0eVRpbWVvdXQpO1xuXG5cdFx0XHRcdGlmIChkZWxheSA+IDApIHtcblxuXHRcdFx0XHRcdGluYWN0aXZpdHlUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoIXRoaXMuX3VzZXJBY3Rpdml0eSkge1xuXHRcdFx0XHRcdFx0XHR0aGlzLnVzZXJBY3RpdmUgPSBmYWxzZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9LCBkZWxheSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LCAyNTApXG5cdH1cblxuXHQvKipcblx0ICogU3RvcCBzaG93aW5nIHNwaW5uZXIgYW5kIGNsZWFyIGRlbGF5IG9mIHNob3dpbmcgc3Bpbm5lclxuXHQgKlxuXHQgKiBAYWNjZXNzIHByaXZhdGVcblx0ICovXG5cdF9zdG9wV2F5dGluZygpIHtcblx0XHR0aGlzLl93YWl0aW5nVGltZW91dHMuZm9yRWFjaChpdGVtID0+IGNsZWFyVGltZW91dChpdGVtKSk7XG5cdFx0dGhpcy5fd2FpdGluZ1RpbWVvdXRzID0gW107XG5cdFx0dGhpcy5yZW1vdmVDbGFzcygnbGVwbGF5ZXItLXdhaXRpbmcnKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTaG93IHNwaW5uZXIgd2l0aCBkZWxheSBpbiAzMDBtc1xuXHQgKlxuXHQgKiBAYWNjZXNzIHByaXZhdGVcblx0ICovXG5cdF9zdGFydFdhaXRpbmcoKSB7XG5cdFx0dGhpcy5fd2FpdGluZ1RpbWVvdXRzLnB1c2goc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHR0aGlzLmFkZENsYXNzKCdsZXBsYXllci0td2FpdGluZycpO1xuXHRcdH0sIDMwMCkpO1xuXHR9XG5cblxuXHQvKipcblx0ICogT24gaW5pdGVkIHBsYXllciBldmVudCBoYW5kbGVyXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge1BsYXllckV2ZW50fSBlXG5cdCAqL1xuXHRfb25Jbml0ZWQoZSkge1xuXHRcdHRoaXMuYWRkQ2xhc3MoJ2xlcGxheWVyLS1pbml0ZWQnKTtcblxuXHRcdHRoaXMub3B0aW9ucy5vblBsYXllckluaXRlZC5jYWxsKHRoaXMsIGUpO1xuXHR9XG5cblxuXHQvKipcblx0ICogT24gY2xpY2sgdmlkZW8gZXZlbnQgaGFuZGxlci4gRm9jdXMgb24gdmlkZW8gYW5kIHRvZ2dsZVBsYXlcblx0ICpcblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqIEBwYXJhbSB7UGxheWVyRXZlbnR9IGVcblx0ICovXG5cdF9vbkNsaWNrKGUpIHtcblx0XHRjbGVhclRpbWVvdXQodGhpcy5fZGJsY2xpY2tUaW1lb3V0KTtcblx0XHRjb25zdCB0b2dnbGVQbGF5ID0gKCkgPT4ge1xuXHRcdFx0dGhpcy5fZGJsY2xpY2tUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdHRoaXMudmlkZW8uZWxlbWVudC5mb2N1cygpXG5cdFx0XHRcdHRoaXMudG9nZ2xlUGxheSgpO1xuXG5cdFx0XHR9LCAzMDApO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIFNlZSBMUExSLTI5MFxuXHRcdCAqIE9uIHRvdWNoIGRldmljZXMgaW4gZnVsbHNjcmVlbiBpZiB1c2VyIG5vdCBhY3RpdmUgd2UgZG9uJ3Qgc2hvdWxkIHRvZ2dsZVxuXHRcdCAqIEF0IGZpcnN0IHdlIHNob3cgaGltIGEgY29udHJvbHNcblx0XHQgKi9cblx0XHRpZihJU19UT1VDSCgpICYmIHRoaXMudmlldyA9PT0gJ2Z1bGxzY3JlZW4nKSB7XG5cdFx0XHRpZih0aGlzLnBsYXllci51c2VyQWN0aXZlKSB7XG5cdFx0XHRcdHRvZ2dsZVBsYXkoKVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0b2dnbGVQbGF5KClcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogT24gZGJsY2xpY2sgb24gdGhlIHZpZGVvIHBsYXllciBldmVudCBoYW5kbGVyXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge1BsYXllckV2ZW50fSBlXG5cdCAqL1xuXHRfb25EYmNsaWNrKGUpIHtcblx0XHRjbGVhclRpbWVvdXQodGhpcy5fZGJsY2xpY2tUaW1lb3V0KTtcblx0XHR0aGlzLnRvZ2dsZUZ1bGxzY3JlZW4oKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBPbiBmdWxsc2NyZWVuIGNoYW5nZSBwbGF5ZXIgZXZlbnQgaGFuZGxlclxuXHQgKlxuXHQgKiBAYWNjZXNzIHByaXZhdGVcblx0ICogQHBhcmFtIHtQbGF5ZXJFdmVudH0gZVxuXHQgKi9cblx0X29uRnVsbHNjcmVlbkNoYW5nZShlLCBpc0ZzKSB7XG5cdFx0aWYoaXNGcykge1xuXHRcdFx0dGhpcy52aWV3ID0gJ2Z1bGxzY3JlZW4nO1xuXG5cdFx0XHQvLyBIaWRlIHNlY3Rpb25zIGJ5IGRlZmF1bHQgb24gbW9iaWxlIGZ1bGxzY3JlZW5cblx0XHRcdGlmKElTX0FORFJPSUQpIHtcblx0XHRcdFx0dGhpcy5fbGFzdFNlY3Rpb25zVmFsdWUgPSB0aGlzLnNlY3Rpb25zLnZpc2libGU7XG5cdFx0XHRcdHRoaXMuc2VjdGlvbnMudmlzaWJsZSA9IGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLmZvY3VzKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMudmlldyA9ICdjb21tb24nO1xuXG5cdFx0XHRpZihJU19BTkRST0lEKSB7XG5cdFx0XHRcdHRoaXMuc2VjdGlvbnMudmlzaWJsZSA9IHRoaXMuX2xhc3RTZWN0aW9uc1ZhbHVlO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBQYXVzZSB2aWRlbyBvbiBleGl0IGZ1bGxzY3JlZWVuIG9uIG1vYmlsZVxuXHRcdFx0aWYoSVNfQU5EUk9JRF9QSE9ORSB8fCBJU19JUEhPTkUgfHwgSVNfSVBPRCkge1xuXHRcdFx0XHR0aGlzLnBhdXNlKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblxuXHQvKipcblx0ICogT24gcGxheSBldmVudCBoYW5kbGVyXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge1BsYXllckV2ZW50fSBlXG5cdCAqL1xuXHRfb25QbGF5KCkge1xuXHRcdHRoaXMuc3BsYXNoSWNvbi5zaG93KCdwbGF5Jyk7XG5cdH1cblxuXHQvKipcblx0ICogT24gcGF1c2UgcGxheWVyIGV2ZW50IGhhbmRsZXJcblx0ICogU2hvdyBwYXVzZSBpY29uIGluIHRoZSBjZW50ZXIgb2YgdmlkZW9cblx0ICpcblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqL1xuXHRfb25QYXVzZSgpIHtcblx0XHR0aGlzLnNwbGFzaEljb24uc2hvdygncGF1c2UnKTtcblx0fVxuXG5cdF9vbkVudGl0eUZ1bGxzY3JlbkNoYW5nZSgpIHtcblx0XHRjb25zdCBmc0FwaSA9IEZ1bGxzY3JlZW5BcGk7XG5cdFx0Y29uc3QgaXNGcyA9ICEhZG9jdW1lbnRbZnNBcGkuZnVsbHNjcmVlbkVsZW1lbnRdO1xuXHRcdHRoaXMudHJpZ2dlcignZnVsbHNjcmVlbmNoYW5nZScsIGlzRnMpO1xuXHR9XG5cbn1cblxuLyoqXG4gKiBTdGF0aWMgaGVscGVyIGZvciBjcmVhdGluZyBhIHBsdWdpbnMgZm9yIGxlcGxheWVyXG4gKlxuICogQGFjY2VzcyBwdWJsaWNcbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHBsdWdpblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gUGx1Z2luIGluaXQgZnVuY3Rpb25cbiAqXG4gKiBAZXhhbXBsZVxuICogUGxheWVyLnBsdWdpbignaGVsbG9Xb3JsZCcsIGZ1bmN0aW9uKHBsdWdpbk9wdGlvbnMpIHtcbiAqICAgIGNvbnN0IHBsYXllciA9IHRoaXM7XG4gKiAgICBwbGF5ZXIub24oJ2NsaWNrJywgKCkgPT4gY29uc29sZS5sb2coJ0hlbGxvIHdvcmxkJykpO1xuICogfSlcbiAqXG4gKi9cblBsYXllci5wbHVnaW4gPSBmdW5jdGlvbihuYW1lLCBmbikge1xuXHRQbGF5ZXIucHJvdG90eXBlW25hbWVdID0gZm47XG59XG5cbi8qKlxuICogR2V0IGJ5IG5hbWUgcmVnaXN0ZXJlZCBjb21wb25lbnRcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSAtIE5hbWUgb2YgY29tcG9uZW50XG4gKiBAcmV0dXJuIHtDb21wb25lbnR9XG4gKi9cblBsYXllci5nZXRDb21wb25lbnQgPSBDb21wb25lbnQuZ2V0Q29tcG9uZW50O1xuXG4vKipcbiAqIFJlZ2lzdGVyIGNvbXBvbmVudFxuICpcbiAqIEBhY2Nlc3MgcHVibGljXG4gKiBAc3RhdGljXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtDb21wb25lbnR9IGNvbXBvbmVudFxuICpcbiAqIEBleGFtcGxlXG4gKiBQbGF5ZXIucmVnaXN0ZXJDb21wb25lbnQoJ0Vycm9yRGlzcGxheScsIEVycm9yRGlzcGxheSk7XG4gKi9cblBsYXllci5yZWdpc3RlckNvbXBvbmVudCA9IENvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudDtcblxuLyoqXG4gKiBSZWdpc3RlciBjb250cm9sXG4gKlxuICogQGFjY2VzcyBwdWJsaWNcbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge0NvbnRyb2x9IGNvbnRyb2xcbiAqL1xuUGxheWVyLmdldENvbnRyb2wgPSBDb250cm9sLmdldENvbnRyb2w7XG5cbi8qKlxuICogR2V0IGJ5IG5hbWUgcmVnaXN0ZXJlZCBjb250cm9sXG4gKlxuICogQGFjY2VzcyBwdWJsaWNcbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJucyB7Q29udHJvbH1cbiAqXG4gKiBAZXhhbXBsZVxuICogUGxheWVyLnJlZ2lzdGVyQ29udHJvbCgnYmFja3dhcmQnLCBCYWNrd2FyZENvbnRyb2wpO1xuICovXG5QbGF5ZXIucmVnaXN0ZXJDb250cm9sID0gQ29udHJvbC5yZWdpc3RlckNvbnRyb2w7XG5cblxuLyoqXG4gKiBDb252ZXJ0IHNlY29uZHMgdG8gZm9ybWF0IHN0cmluZyAnaGg/Om1tOnNzJ1xuICpcbiAqIEBhY2Nlc3MgcHVibGljXG4gKiBAcGFyYW0ge051bWJlcn0gc2Vjb25kcyBTZWNvbmRzXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHNob3dIb3VycyBjb252ZXJ0IHRvIGZvcm1hdCAnaGg6bW06c3MnXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG5QbGF5ZXIuc2Vjb25kc1RvVGltZSA9IHNlY29uZHNUb1RpbWU7XG5cblxuLyoqXG4gKiBTdGF0aWMgaGVscGVyIGZvciBjcmVhdGluZyBhIHBsdWdpbnMgZm9yIGxlcGxheWVyXG4gKlxuICogQGFjY2VzcyBwdWJsaWNcbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHBsdWdpblxuICogQHBhcmFtIHtGdW5jdGlvbnxPYmplY3R9IGZuIFBsdWdpbiBpbml0IGZ1bmN0aW9uXG4gKlxuICogQGV4YW1wbGVcbiAqIFBsYXllci5wcmVzZXQoJ2NvbW1vbicsIHtcbiAqICAgICB3aWR0aCA6ICcxMDAlJyxcbiAqICAgICBwbHVnaW5zIDoge1xuICogICAgICAgICBtaW5pcGxheWVyIDogdHJ1ZVxuICogICAgIH1cbiAqIH0pO1xuICovXG5QbGF5ZXIucHJlc2V0ID0gZnVuY3Rpb24obmFtZSwgb2JqKSB7XG5cdGlmKHR5cGVvZiBvYmogPT09ICdvYmplY3QnKSB7XG5cdFx0UGxheWVyLl9wcmVzZXRzW25hbWVdID0gJC5leHRlbmQoe30sIHtcblx0XHRcdG9wdGlvbnMgOiB7fSxcblx0XHRcdGluaXRPcHRpb25zIDogbm9vcFxuXHRcdH0sIG9iaik7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9iaiA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFBsYXllci5fcHJlc2V0c1tuYW1lXSA9IG9iaigpO1xuXHR9XG59O1xuXG5cblBsYXllci5nZXRQcmVzZXQgPSBmdW5jdGlvbihuYW1lKSB7XG5cdGlmKFBsYXllci5fcHJlc2V0c1tuYW1lXSkge1xuXHRcdHJldHVybiBQbGF5ZXIuX3ByZXNldHNbbmFtZV07XG5cdH0gZWxzZSB7XG5cdFx0Y29uc29sZS5lcnJvcihgcHJlc2V0ICR7bmFtZX0gZG9lc24ndCBleGlzdGApO1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG59XG5cblxuUGxheWVyLl9wcmVzZXRzID0ge307XG5cblBsYXllci5Db29raWUgPSBDb29raWU7XG5cblBsYXllci5fbG9hZFNWR1Nwcml0ZSA9IGZ1bmN0aW9uKHN2Zykge1xuXHRjb25zdCBoaWRkZW5FbGVtZW50ID0gJCgnPGRpdi8+JykuaGlkZSgpO1xuXHQkKCdib2R5JykucHJlcGVuZChoaWRkZW5FbGVtZW50LmFwcGVuZChzdmcpKTtcblx0cmV0dXJuIGhpZGRlbkVsZW1lbnQ7XG59XG5cblBsYXllci5kZWZhdWx0U3ByaXRlID0gcmVxdWlyZSgnLi4vLi4vZGlzdC9zdmcvc3ZnLWRlZnMuc3ZnJyk7XG5cbi8qIGdsb2JhbCBWRVJTSU9OICovXG5QbGF5ZXIudmVyc2lvbiA9IFZFUlNJT047XG5cbndpbmRvdy4kLmZuLmxlUGxheWVyID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIG5ldyBQbGF5ZXIoJCh0aGlzKSwgb3B0aW9ucyk7XG5cdH0pO1xufTtcblxud2luZG93LiQubGVQbGF5ZXIgPSBQbGF5ZXI7XG5cbndpbmRvdy5sZVBsYXllciA9IFBsYXllcjtcblxuXG4vKipcbiAqIE1pbmkgUGxheWVyIHBsdWdpblxuICpcbiAqIEBwbHVnaW5cbiAqL1xuUGxheWVyLnBsdWdpbignbWluaXBsYXllcicsIGZ1bmN0aW9uKHBsdWdpbk9wdGlvbnMpIHtcblx0Y29uc3QgcGxheWVyID0gdGhpcztcblxuXHQvLyDQnNC10YDQttC40Lwg0YEgdGhpcy5vcHRpb25zLm1pbmlwbGF5ZXIsINGH0YLQvtCx0Ysg0L3QtSDRgdC70L7QvNCw0YLRjCDQvtCx0YDQsNGC0L3Rg9GOINGB0L7QstC80LXRgdGC0LjQvNC+0YHRjCwg0YLQsNC6INC60LDQuiDRgNCw0L3RjNGI0LVcblx0Ly8g0LzQuNC90LjQv9C70LXQtdGAINC90LUg0LHRi9C7INC/0LvQsNCz0LjQvdC+0Lwg0L/Qu9C10LXRgNCwLlxuXHRjb25zdCBvcHRpb25zID0gJC5leHRlbmQoe30sIHtcblx0XHR3aWR0aCA6ICcxMDAlJyxcblx0XHRvZmZzZXRTaG93IDogKHBsYXllcikgPT4ge1xuXHRcdFx0Y29uc3Qgb2Zmc2V0ID0gcGxheWVyLmVsZW1lbnQub2Zmc2V0KCkudG9wXG5cdFx0XHRcdCsgcGxheWVyLmVsZW1lbnQub3V0ZXJIZWlnaHQoKVxuXHRcdFx0XHQtIHBsYXllci5nZXRDb250cm9scygnY29tbW9uJykuZWxlbWVudC5oZWlnaHQoKTtcblxuXHRcdFx0cmV0dXJuIG9mZnNldDtcblx0XHR9XG5cdH0sIHRoaXMub3B0aW9ucy5taW5pcGxheWVyLCBwbHVnaW5PcHRpb25zKTtcblxuXHRjb25zdCBjb250cm9scyA9IG5ldyBDb250cm9sQ29sbGVjdGlvbih0aGlzLCB7XG5cdFx0bmFtZSA6ICdtaW5pJyxcblx0XHRjb250cm9scyA6IG9wdGlvbnMuY29udHJvbHMsXG5cdFx0Y29udHJvbE9wdGlvbnMgOiB7XG5cdFx0XHRjb250cm9sIDoge1xuXHRcdFx0XHRkaXNhYmxlIDogZmFsc2Vcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xuXG5cdC8vINCS0YHRgtCw0LLQu9GP0LXQvCDQsiBpbmZvRWxlbWVudCDQv9C+0LQgdGl0bGUg0LggZGVzY3JpcHRpb25cblx0dGhpcy5pbmZvRWxlbWVudC5hcHBlbmQoY29udHJvbHMuZWxlbWVudCk7XG5cblx0LyoqXG5cdCAqIFJldHVybiBvZmZzZXQgb24gb1kgLCB3aGVuIG1pbmlwbGF5ZXIgc2hvdWxkIHNob3dpbmcgb3IgaGlkaW5nXG5cdCAqXG5cdCAqIEByZXR1cm5zIHtOdW1iZXJ9XG5cdCAqL1xuXHRjb25zdCBvZmZzZXRTaG93ID0gKCkgPT4ge1xuXHRcdGlmICgkLmlzRnVuY3Rpb24ob3B0aW9ucy5vZmZzZXRTaG93KSkge1xuXHRcdFx0cmV0dXJuIG9wdGlvbnMub2Zmc2V0U2hvdyhwbGF5ZXIpO1xuXHRcdH1cblxuXHRcdHJldHVybiBvcHRpb25zLm9mZnNldFNob3dcblx0fVxuXG5cdGNvbnN0IGdldFdpZHRoID0gKCkgPT4ge1xuXHRcdHJldHVybiBvcHRpb25zLndpZHRoIHx8IHRoaXMuZWxlbWVudC53aWR0aCgpO1xuXHR9XG5cblxuXHR0aGlzLl91cGRhdGVNaW5pUGxheWVyID0gKGUsIGZvcmNlKSA9PiB7XG5cdFx0Y29uc3Qgc2Nyb2xsVG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuXG5cdFx0Ly8gQmVjYXVzZSBpbiBmb3JjZSB1cGRhdGUsIGZvciBub3JtYWxseSBjb3VudCBoZWlnaHQgYW5kIHBhZGRpbmdcblx0XHQvLyBtaW5pcGxheWVyIGJlZm9yZSB0aGUgc2hvdyBtdXN0IGZpcnN0IGJlIGhpZGRlblxuXHRcdGlmKGZvcmNlKSB7XG5cdFx0XHR0aGlzLmhpZGVNaW5pUGxheWVyKGZvcmNlKTtcblx0XHR9XG5cblx0XHRpZihzY3JvbGxUb3AgPiBvZmZzZXRTaG93KCkpIHtcblx0XHRcdHRoaXMuc2hvd01pbmlQbGF5ZXIoZm9yY2UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmhpZGVNaW5pUGxheWVyKCk7XG5cdFx0fVxuXHR9XG5cblx0dGhpcy5zaG93TWluaVBsYXllciA9IChmb3JjZSkgPT4ge1xuXHRcdGlmICghZm9yY2UgJiYgdGhpcy52aWV3ID09PSAnbWluaScpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBBZGRlZCBlbXB0eSBzcGFjZVxuXHRcdHRoaXMuZWxlbWVudC5jc3MoJ3BhZGRpbmctdG9wJywgdGhpcy52aWRlb0NvbnRhaW5lci5oZWlnaHQoKSk7XG5cblx0XHR0aGlzLnZpZXcgPSdtaW5pJztcblx0fVxuXG5cdHRoaXMuaGlkZU1pbmlQbGF5ZXIgPSAoZm9yY2UpID0+IHtcblx0XHRpZighZm9yY2UgJiYgdGhpcy52aWV3ICE9PSAnbWluaScpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy52aWV3ID0gJ2NvbW1vbic7XG5cdH1cblxuXHQkKHdpbmRvdykub24oJ3Njcm9sbCcsIHRoaXMuX3VwZGF0ZU1pbmlQbGF5ZXIuYmluZCh0aGlzKSk7XG5cdCQod2luZG93KS5vbigncmVzaXplJywgdGhpcy5fdXBkYXRlTWluaVBsYXllci5iaW5kKHRoaXMpKTtcblx0dGhpcy5vbignaW5pdGVkJywgKGUpID0+IHRoaXMuX3VwZGF0ZU1pbmlQbGF5ZXIoZSwgdHJ1ZSkpO1xuXG5cdHRoaXMub25TZXRWaWV3KCdtaW5pJywgKCkgPT4ge1xuXHRcdHRoaXMuaW5uZXJFbGVtZW50LmNzcygnbWF4LXdpZHRoJywgZ2V0V2lkdGgoKSk7XG5cdFx0dGhpcy5pbm5lckVsZW1lbnQuY3NzKCdoZWlnaHQnLCB0aGlzLnZpZGVvLmhlaWdodCk7XG5cdH0pO1xuXG5cdHRoaXMub25EZWxWaWV3KCdtaW5pJywgKCkgPT4ge1xuXHRcdHRoaXMuaW5uZXJFbGVtZW50LmNzcygnbWF4LXdpZHRoJywgJycpXG5cdFx0dGhpcy5pbm5lckVsZW1lbnQuY3NzKCdoZWlnaHQnLCAnJylcblxuXHRcdHRoaXMuZWxlbWVudC5jc3MoJ3BhZGRpbmctdG9wJywgJycpO1xuXHR9KTtcblxuXG5cdHRoaXMuX3VwZGF0ZU1pbmlQbGF5ZXIoKTtcbn0pO1xuXG5cblBsYXllci5wcmVzZXQoJ3ZwcycsIHJlcXVpcmUoJy4vcHJlc2V0cy92cHMuanMnKS5wcmVzZXQpO1xuUGxheWVyLnByZXNldCgnc2ltcGxlJywgcmVxdWlyZSgnLi9wcmVzZXRzL3NpbXBsZS5qcycpLnByZXNldCk7XG5QbGF5ZXIucHJlc2V0KCdzbXMnLCByZXF1aXJlKCcuL3ByZXNldHMvc21zLmpzJykucHJlc2V0KTtcblBsYXllci5wcmVzZXQoJ2NvbXByZXNzZWQnLCByZXF1aXJlKCcuL3ByZXNldHMvY29tcHJlc3NlZC5qcycpLnByZXNldCk7XG5QbGF5ZXIucHJlc2V0KCcyMDM1JywgcmVxdWlyZSgnLi9wcmVzZXRzLzIwMzUuanMnKS5wcmVzZXQpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBsYXllclxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9sZS1wbGF5ZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9ICQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCIkXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIENvbnRyb2wuanNcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgSWNvbiBmcm9tICcuL0ljb24nO1xuXG4vKipcbiAqIEBjbGFzcyBDb250cm9sXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIENvbnRyb2wncyBvcHRpb25zXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuaWNvbk5hbWVdIE5hbWUgb2YgY29udHJvbCdzIGljb24uIElmIGVtcHR5LCBjb250cm9sIHdpbGwgbm90IGhhdmUgYSBpY29uXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuY2xhc3NOYW1lXVxuICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLm5hbWVdXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuY29sbGVjdGlvbl1cbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy50aXRsZV0gQ29udG9ybCdzIHRvb2x0aXAsIHRpdGxlIGF0dHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtvcHRpb25zLm9uQ2xpY2tdIE9uIGNsaWNrIGV2ZW50IGhhbmRsZXJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuZGlzYWJsZT1mYWxzZV1cbiAqIEBwcm9wZXJ0eSB7SWNvbn0gaWNvbiBJY29uIGluIGNvbnRyb2wsIGlmIGl0IGlzIGV4aXN0XG4gKiBAZXh0ZW5kcyBDb21wb25lbnRcbiAqL1xuY2xhc3MgQ29udHJvbCBleHRlbmRzIENvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblx0XHR0aGlzLmVtaXRUYXBFdmVudHMoKTtcblx0XHR0aGlzLmRpc2FibGUgPSB0aGlzLm9wdGlvbnMuZGlzYWJsZSAhPSBudWxsPyB0aGlzLm9wdGlvbnMuZGlzYWJsZSA6IHRydWU7XG5cblx0XHR0aGlzLnBsYXllci5vbignaW5pdGVkJywgKGUpID0+IHtcblx0XHRcdHRoaXMuZGlzYWJsZSA9IHRoaXMub3B0aW9ucy5kaXNhYmxlICE9IG51bGw/IHRoaXMub3B0aW9ucy5kaXNhYmxlIDogZmFsc2U7XG5cdFx0fSlcblxuXHRcdHRoaXMuZWxlbWVudC5vbih7XG5cdFx0XHRjbGljayA6IHRoaXMub25DbGljay5iaW5kKHRoaXMpLFxuXHRcdFx0dGFwIDogdGhpcy5vbkNsaWNrLmJpbmQodGhpcyksXG5cdFx0fSk7XG5cblx0XHR0aGlzLnBsYXllci5vbignaW5pdGVkJywgdGhpcy5vblBsYXllckluaXRlZC5iaW5kKHRoaXMpKVxuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHRpZiAodGhpcy5vcHRpb25zLmljb25OYW1lKSB7XG5cdFx0XHR0aGlzLmljb24gPSBuZXcgSWNvbih0aGlzLnBsYXllciwge1xuXHRcdFx0XHRpY29uTmFtZSA6IHRoaXMub3B0aW9ucy5pY29uTmFtZVxuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdGxldCBhdHRycyA9IHtcblx0XHRcdHRpdGxlIDogdGhpcy5vcHRpb25zLnRpdGxlXG5cdFx0fVxuXHRcdHRoaXMuZWxlbWVudCA9ICQoYDwke3RoaXMub3B0aW9ucy50YWcgfHwgJ2J1dHRvbid9IC8+YClcblx0XHRcdC5hZGRDbGFzcyh0aGlzLmJ1aWxkQ1NTQ2xhc3MoKSlcblx0XHRcdC5hcHBlbmQodGhpcy5pY29uICYmIHRoaXMuaWNvbi5lbGVtZW50KVxuXHRcdFx0LmF0dHIoYXR0cnMpO1xuXG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudDtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGJ1aWxkQ1NTQ2xhc3MoKSB7XG5cdFx0bGV0IHJlc3VsdCA9IGBjb250cm9sICR7dGhpcy5vcHRpb25zLmNsYXNzTmFtZX0gJHtzdXBlci5idWlsZENTU0NsYXNzKCl9YDtcblx0XHQvKipcblx0XHQgKiBAc2VlIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzIzODg1MjU1L2hvdy10by1yZW1vdmUtaWdub3JlLWhvdmVyLWNzcy1zdHlsZS1vbi10b3VjaC1kZXZpY2VzXG5cdFx0ICogV2Ugc2hvdWxkIGlnbm9yZSBob3ZlciBlZmZldGNzIG9uIGlwaG9uZSwgYmVjYXVzZSB3ZSBzaG93IGhvdmVyIGVmZmVjdCBvbiB0YXBcblx0XHQgKi9cblx0XHRpZighdGhpcy5wbGF5ZXIuaGFzQ2xhc3MoJ2xlcGxheWVyLS1pcGhvbmUnKSkge1xuXHRcdFx0cmVzdWx0ICs9ICcgY29udHJvbC0tbm8taXBob25lJztcblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdHNldCB0YXAodmFsdWUpIHtcblx0XHR0aGlzLnRvZ2dsZUNsYXNzKCdjb250cm9sLS10YXAnLCB2YWx1ZSk7XG5cdH1cblxuXHRzZXQgZGlzYWJsZSh2YWx1ZSkge1xuXHRcdHRoaXMuX2Rpc2FibGUgPSB2YWx1ZTtcblx0XHR0aGlzLnRvZ2dsZUNsYXNzKCdkaXNhYmxlZCcsIHZhbHVlKTtcblx0fVxuXG5cdGdldCBkaXNhYmxlKCkge1xuXHRcdHJldHVybiB0aGlzLl9kaXNhYmxlXG5cdH1cblxuXHQvKipcblx0ICpcblx0ICogT24gY2xpY2sgZXZlbnQgaGFuZGxlclxuXHQgKiBAYWJzdGFjdFxuXHQgKi9cblx0b25DbGljayAoZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRpZiAodGhpcy5kaXNhYmxlKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHRoaXMucGxheWVyLnRyaWdnZXIoJ2NvbnRyb2xjbGljaycsIHsgY29udHJvbCA6IHRoaXMgfSk7XG5cblx0XHRpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHR0aGlzLm9wdGlvbnMub25DbGljay5jYWxsKHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0fVxuXHR9XG5cblxuXHRvblBsYXllckluaXRlZCAoZSwgZGF0YSkge1xuXG5cdH1cblxuXHRzdGF0aWMgcmVnaXN0ZXJDb250cm9sKG5hbWUsIGNvbnRyb2wpIHtcblx0XHRpZihuYW1lID09IG51bGwpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZihDb250cm9sLl9jb250cm9scyA9PSBudWxsKSB7XG5cdFx0XHRDb250cm9sLl9jb250cm9scyA9IHt9O1xuXHRcdH1cblxuXHRcdENvbnRyb2wuX2NvbnRyb2xzW25hbWVdID0gY29udHJvbDtcblxuXHRcdHJldHVybiBjb250cm9sO1xuXHR9XG5cblx0c3RhdGljIGdldENvbnRyb2wobmFtZSkge1xuXHRcdGlmKG5hbWUgPT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmKENvbnRyb2wuX2NvbnRyb2xzICYmIENvbnRyb2wuX2NvbnRyb2xzW25hbWVdKSB7XG5cdFx0XHRyZXR1cm4gQ29udHJvbC5fY29udHJvbHNbbmFtZV07XG5cdFx0fVxuXHR9XG5cblx0c3RhdGljIGNyZWF0ZShwbGF5ZXIsIG5hbWUsIG9wdGlvbnMpIHtcblx0XHR2YXIgY29udHJvbENsYXNzID0gdGhpcy5nZXRDb250cm9sKG5hbWUpO1xuXHRcdGlmKGNvbnRyb2xDbGFzcyA9PSBudWxsKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKGBDb250cm9sICR7bmFtZX0gZG9lc24ndCBleGlzdGApO1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5ldyBjb250cm9sQ2xhc3MocGxheWVyLCBvcHRpb25zKTtcblx0fVxuXG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnQ29udHJvbCcsIENvbnRyb2wpO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ2NvbnRyb2wnLCBDb250cm9sKTtcbmV4cG9ydCBkZWZhdWx0IENvbnRyb2w7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9Db250cm9sLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBDb21wb25lbnQuanNcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5jb25zdCB0b1BsYXllckV2ZW50ID0gKGV2ZW50cykgPT4gZXZlbnRzLnNwbGl0KCcgJykucmVkdWNlKChhY2MsIGUpID0+IGFjYyArIGBsZXBsYXllcl8ke2V9IGAsICcnKTtcblxuLyoqXG4gKiBQbGF5ZXIgY29tcG9uZW50IC0gQmFzZSBjbGFzcyBmb3IgYWxsIFVJXG4gKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBPcHRpb25zIG9mIGNvbXBvbmVudFxuICogQHBhcmFtIHtqUXVlcnl9IFtvcHRpb25zLmVsZW1lbnRdINCt0LvQtdC80LXQvdGCINC90LAg0LrQvtGC0L7RgNC+0Lwg0LzQvtC20L3QviDQuNC90LjRhtC40LvQuNC30L7QstCw0YLRjCDQutC70LDRgdGBLlxuICogQHByb3BlcnR5IHtPYmplY3R9IG9wdGlvbnNcbiAqIEBwcm9wZXJ0eSB7alF1ZXJ5fSBlbGVtZW50XG4gKiBAY2xhc3MgQ29tcG9uZW50XG4gKi9cbmNsYXNzIENvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XG5cdFx0b3B0aW9ucyA9IHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRjcmVhdGVFbGVtZW50IDogdHJ1ZVxuXHRcdH0sIHRoaXMub3B0aW9ucywgb3B0aW9ucyk7XG5cblx0XHRpZighcGxheWVyICYmIHRoaXMucGxheSAhPSBudWxsKSB7XG5cdFx0XHR0aGlzLnBsYXllciA9IHBsYXllciA9IHRoaXM7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucGxheWVyID0gcGxheWVyO1xuXHRcdH1cblxuXHRcdGlmKG9wdGlvbnMuY3JlYXRlRWxlbWVudCkge1xuXG5cdFx0XHRpZiAob3B0aW9ucy5lbGVtZW50KSB7XG5cdFx0XHRcdHRoaXMuZWxlbWVudCA9IG9wdGlvbnMuZWxlbWVudDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuY3JlYXRlRWxlbWVudCgpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5lbGVtZW50Lmxlbmd0aCAhPT0gMSkge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKGBDb21wb25lbnQucHJvdG90eXBlLmVsZW1lbnQubGVuZ3RoIG11c3QgZXF1YWwgMSwgbm90ICR7dGhpcy5lbGVtZW50Lmxlbmd0aH1cXG5gLCB0aGlzLmVsZW1lbnQpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLmVsZW1lbnRbMF0uX19ub2RlID0gdGhpcztcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQGFic3RyYWN0XG5cdCAqL1xuXHRjcmVhdGVFbGVtZW50KCkge1xuXG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBhYnN0cmFjdFxuXHQgKi9cblx0YnVpbGRDU1NDbGFzcygpIHtcblx0XHRyZXR1cm4gJydcblx0fVxuXG5cblx0LyoqXG5cdCAqIFNldCB0aGUgZm9jdXMgdG8gdGhpcyBjb21wb25lbnRcblx0ICovXG5cdGZvY3VzKCkge1xuXHRcdHRoaXMuZWxlbWVudC5mb2N1cygpO1xuXHR9XG5cblxuXHQvKipcblx0ICogUmVtb3ZlIHRoZSBmb2N1cyBmcm9tIHRoaXMgY29tcG9uZW50XG5cdCAqL1xuXHRibHVyKCkge1xuXHRcdHRoaXMuZWxlbWVudC5ibHVyKCk7XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBFbWl0IGEgcGxheWVyIGV2ZW50ICh0aGUgbmFtZSBvZiBldmVudCB3b3VsZCBiZSBhIGxlcGxheWVyX3NtdGgpXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBldmVudE5hbWVcblx0ICogQHBhcmFtIHtBcmd1bWVudHN9IC4uLmFyZ3MgalF1ZXJ5LmZuLm9uIG90aGVyIGFyZ3VtZW50c1xuXHQgKiBAcmV0dXJucyB7UGxheWVyfSB0aGlzXG5cdCAqL1xuXHR0cmlnZ2VyKGV2ZW50TmFtZSwgLi4uYXJncykge1xuXHRcdGNvbnN0IGV2ZW50ID0gJC5FdmVudChgbGVwbGF5ZXJfJHtldmVudE5hbWV9YCwgeyBwbGF5ZXIgOiB0aGlzLnBsYXllciB9KTtcblx0XHR0aGlzLmVsZW1lbnQudHJpZ2dlckhhbmRsZXIoZXZlbnQsIC4uLmFyZ3MpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblxuXHQvKipcblx0ICogTGlzdGVuIGEgcGxheWVyIGV2ZW50IHdpdGggbGVwbGF5ZXJfIHN1ZmZpeFxuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnROYW1lXG5cdCAqIEBwYXJhbSB7QXJndW1lbnRzfSAuLi5hcmdzIGpRdWVyeS5mbi5vbiBvdGhlciBhcmd1bWVudHNcblx0ICogQHJldHVybnMge1BsYXllcn0gdGhpc1xuXHQgKi9cblx0b24oZXZlbnROYW1lcywgLi4uYXJncykge1xuXHRcdGlmKHR5cGVvZiBldmVudE5hbWVzID09PSAnc3RyaW5nJyB8fCBldmVudE5hbWVzIGluc3RhbmNlb2YgU3RyaW5nKSB7XG5cdFx0XHR0aGlzLmVsZW1lbnQub24odG9QbGF5ZXJFdmVudChldmVudE5hbWVzKSwgLi4uYXJncyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnNvbGUud2FybignRmlyc3QgYXJndW1lbnQgb2YgXFwnQ29tcG9uZW50Lm9uXFwnIHNob3VsZCBiZSBhIHN0cmluZycpO1xuXHRcdFx0dGhpcy5lbGVtZW50Lm9uKGV2ZW50TmFtZXMsIC4uLmFyZ3MpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cblx0b25lKGV2ZW50TmFtZXMsIC4uLmFyZ3MpIHtcblx0XHRpZih0eXBlb2YgZXZlbnROYW1lcyA9PT0gJ3N0cmluZycgfHwgZXZlbnROYW1lcyBpbnN0YW5jZW9mIFN0cmluZykge1xuXHRcdFx0dGhpcy5lbGVtZW50Lm9uZSh0b1BsYXllckV2ZW50KGV2ZW50TmFtZXMpLCAuLi5hcmdzKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc29sZS53YXJuKCdGaXJzdCBhcmd1bWVudCBvZiBcXCdDb21wb25lbnQub25lXFwnIHNob3VsZCBiZSBhIHN0cmluZycpO1xuXHRcdFx0dGhpcy5lbGVtZW50Lm9uZShldmVudE5hbWVzLCAuLi5hcmdzKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBBZGQgdGhlIENTUyBjbGFzcyBmb3IgZ2VuZXJhbCBsZXBsYXllciBET00gZWxlbWVudFxuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIE5hbWUgb2YgY2xhc3MgKG5vdCBhIHNlbGVjdG9yLCBpdCdzIG1lYW4sIHRoYXQgc3RyaW5nIHNvdWxkIGJlIHdpdGhvdXQgcG9pbnQgYXQgdGhlIHN0YXJ0KVxuXHQgKiBAcmV0dXJucyB7UGxheWVyfSB0aGlzXG5cdCAqL1xuXHRhZGRDbGFzcyhjbGFzc05hbWUpIHtcblx0XHR0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoY2xhc3NOYW1lKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8qKlxuXHQgKiBSZW1vdmUgdGhlIENTUyBjbGFzcyBmcm9tIGdlbmVyYWwgbGVwbGF5ZXIgRE9NIGVsZW1lbnRcblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZSBOYW1lIG9mIGNsYXNzXG5cdCAqIEByZXR1cm5zIHtQbGF5ZXJ9IHRoaXNcblx0ICovXG5cdHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkge1xuXHRcdHRoaXMuZWxlbWVudC5yZW1vdmVDbGFzcyhjbGFzc05hbWUpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRvZ2dsZSB0aGUgQ1NTIGNsYXNzIGZyb20gZ2VuZXJhbCBsZXBsYXllciBET00gZWxlbWVudFxuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lXG5cdCAqIEBwYXJhbSB7Qm9vbGVhbn0gZmxhZ1xuXHQgKiBAcmV0dXJucyB7UGxheWVyfSB0aGlzXG5cdCAqL1xuXHR0b2dnbGVDbGFzcyhjbGFzc05hbWUsIGZsYWcpIHtcblx0XHR0aGlzLmVsZW1lbnQudG9nZ2xlQ2xhc3MoY2xhc3NOYW1lLCBmbGFnKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGhhc0NsYXNzKGNsYXNzTmFtZSkge1xuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQuaGFzQ2xhc3MoY2xhc3NOYW1lKTtcblx0fVxuXG5cblx0c3RhdGljIHJlZ2lzdGVyQ29tcG9uZW50KG5hbWUsIGNvbXBvbmVudCkge1xuXHRcdGlmKG5hbWUgPT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmKENvbXBvbmVudC5fY29tcG9uZW50cyA9PSBudWxsKSB7XG5cdFx0XHRDb21wb25lbnQuX2NvbXBvbmVudHMgPSB7fTtcblx0XHR9XG5cblx0XHRDb21wb25lbnQuX2NvbXBvbmVudHNbbmFtZV0gPSBjb21wb25lbnQ7XG5cblx0XHRyZXR1cm4gY29tcG9uZW50O1xuXHR9XG5cblx0c3RhdGljIGdldENvbXBvbmVudChuYW1lKSB7XG5cdFx0aWYobmFtZSA9PSBudWxsKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYoQ29tcG9uZW50Ll9jb21wb25lbnRzICYmIENvbXBvbmVudC5fY29tcG9uZW50c1tuYW1lXSkge1xuXHRcdFx0cmV0dXJuIENvbXBvbmVudC5fY29tcG9uZW50c1tuYW1lXTtcblx0XHR9XG5cblx0fVxuXG5cdHNldCB0YXAodmFsdWUpIHt9XG5cblx0ZW1pdFRhcEV2ZW50cyhlbGVtZW50PW51bGwpIHtcblx0XHRpZihlbGVtZW50ID09IG51bGwpIHtcblx0XHRcdGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQ7XG5cdFx0fVxuXHRcdC8vIFRyYWNrIHRoZSBzdGFydCB0aW1lIHNvIHdlIGNhbiBkZXRlcm1pbmUgaG93IGxvbmcgdGhlIHRvdWNoIGxhc3RlZFxuXHRcdGxldCB0b3VjaFN0YXJ0ID0gMDtcblx0XHRsZXQgZmlyc3RUb3VjaCA9IG51bGw7XG5cdFx0bGV0IGxhc3RNb3ZlVG91Y2ggPSBudWxsO1xuXG5cdFx0Ly8gTWF4aW11bSBtb3ZlbWVudCBhbGxvd2VkIGR1cmluZyBhIHRvdWNoIGV2ZW50IHRvIHN0aWxsIGJlIGNvbnNpZGVyZWQgYSB0YXBcblx0XHQvLyBPdGhlciBwb3B1bGFyIGxpYnMgdXNlIGFueXdoZXJlIGZyb20gMiAoaGFtbWVyLmpzKSB0byAxNSxcblx0XHQvLyBzbyAxMCBzZWVtcyBsaWtlIGEgbmljZSwgcm91bmQgbnVtYmVyLlxuXHRcdGNvbnN0IHRhcE1vdmVtZW50VGhyZXNob2xkID0gMTA7XG5cblx0XHQvLyBUaGUgbWF4aW11bSBsZW5ndGggYSB0b3VjaCBjYW4gYmUgd2hpbGUgc3RpbGwgYmVpbmcgY29uc2lkZXJlZCBhIHRhcFxuXHRcdGNvbnN0IHRvdWNoVGltZVRocmVzaG9sZCA9IDIwMDtcblxuXHRcdGxldCBjb3VsZEJlVGFwO1xuXG5cdFx0Ly8gc2VlIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzE3OTU3NTkzL2hvdy10by1jYXB0dXJlLXRvdWNoZW5kLWNvb3JkaW5hdGVzXG5cblx0XHRlbGVtZW50Lm9uKCd0b3VjaHN0YXJ0JywgKGV2ZW50KSA9PiB7XG5cdFx0XHQvLyBJZiBtb3JlIHRoYW4gb25lIGZpbmdlciwgZG9uJ3QgY29uc2lkZXIgdHJlYXRpbmcgdGhpcyBhcyBhIGNsaWNrXG5cdFx0XHRpZiAoZXZlbnQudG91Y2hlcy5sZW5ndGggPT09IDEpIHtcblx0XHRcdFx0Ly8gQ29weSBwYWdlWC9wYWdlWSBmcm9tIHRoZSBvYmplY3Rcblx0XHRcdFx0Zmlyc3RUb3VjaCA9IGxhc3RNb3ZlVG91Y2ggPSB7XG5cdFx0XHRcdFx0cGFnZVggOiBldmVudC50b3VjaGVzWzBdLnBhZ2VYLFxuXHRcdFx0XHRcdHBhZ2VZIDogZXZlbnQudG91Y2hlc1swXS5wYWdlWVxuXHRcdFx0XHR9O1xuXHRcdFx0XHQvLyBSZWNvcmQgc3RhcnQgdGltZSBzbyB3ZSBjYW4gZGV0ZWN0IGEgdGFwIHZzLiBcInRvdWNoIGFuZCBob2xkXCJcblx0XHRcdFx0dG91Y2hTdGFydCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXHRcdFx0XHQvLyBSZXNldCBjb3VsZEJlVGFwIHRyYWNraW5nXG5cdFx0XHRcdGNvdWxkQmVUYXAgPSB0cnVlO1xuXHRcdFx0XHR0aGlzLnRhcCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRlbGVtZW50Lm9uKCd0b3VjaG1vdmUnLCAoZXZlbnQpID0+IHtcblx0XHRcdC8vIElmIG1vcmUgdGhhbiBvbmUgZmluZ2VyLCBkb24ndCBjb25zaWRlciB0cmVhdGluZyB0aGlzIGFzIGEgY2xpY2tcblx0XHRcdGlmIChldmVudC50b3VjaGVzLmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0Y291bGRCZVRhcCA9IGZhbHNlO1xuXHRcdFx0fSBlbHNlIGlmIChmaXJzdFRvdWNoKSB7XG5cdFx0XHQvLyBTb21lIGRldmljZXMgd2lsbCB0aHJvdyB0b3VjaG1vdmVzIGZvciBhbGwgYnV0IHRoZSBzbGlnaHRlc3Qgb2YgdGFwcy5cblx0XHRcdC8vIFNvLCBpZiB3ZSBtb3ZlZCBvbmx5IGEgc21hbGwgZGlzdGFuY2UsIHRoaXMgY291bGQgc3RpbGwgYmUgYSB0YXBcblx0XHRcdFx0Y29uc3QgeGRpZmYgPSBldmVudC50b3VjaGVzWzBdLnBhZ2VYIC0gZmlyc3RUb3VjaC5wYWdlWDtcblx0XHRcdFx0Y29uc3QgeWRpZmYgPSBldmVudC50b3VjaGVzWzBdLnBhZ2VZIC0gZmlyc3RUb3VjaC5wYWdlWTtcblx0XHRcdFx0Y29uc3QgdG91Y2hEaXN0YW5jZSA9IE1hdGguc3FydCh4ZGlmZiAqIHhkaWZmICsgeWRpZmYgKiB5ZGlmZik7XG5cblx0XHRcdFx0aWYgKGV2ZW50LnRvdWNoZXMubGVuZ3RoID09PSAxKSB7XG5cdFx0XHRcdFx0bGFzdE1vdmVUb3VjaCA9IHtcblx0XHRcdFx0XHRcdHBhZ2VYIDogZXZlbnQudG91Y2hlc1swXS5wYWdlWCxcblx0XHRcdFx0XHRcdHBhZ2VZIDogZXZlbnQudG91Y2hlc1swXS5wYWdlWVxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAodG91Y2hEaXN0YW5jZSA+IHRhcE1vdmVtZW50VGhyZXNob2xkKSB7XG5cdFx0XHRcdFx0Y291bGRCZVRhcCA9IGZhbHNlO1xuXHRcdFx0XHRcdHRoaXMudGFwID0gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdGNvbnN0IG5vVGFwID0gKCkgPT4ge1xuXHRcdFx0Y291bGRCZVRhcCA9IGZhbHNlO1xuXHRcdFx0dGhpcy50YXAgPSBmYWxzZTtcblx0XHR9O1xuXG5cdFx0Ly8gVE9ETzogTGlzdGVuIHRvIHRoZSBvcmlnaW5hbCB0YXJnZXQuIGh0dHA6Ly95b3V0dS5iZS9EdWpmcFhPS1VwOD90PTEzbThzXG5cdFx0ZWxlbWVudC5vbigndG91Y2hsZWF2ZScsIG5vVGFwKTtcblx0XHRlbGVtZW50Lm9uKCd0b3VjaGNhbmNlbCcsIG5vVGFwKTtcblxuXHRcdC8vIFdoZW4gdGhlIHRvdWNoIGVuZHMsIG1lYXN1cmUgaG93IGxvbmcgaXQgdG9vayBhbmQgdHJpZ2dlciB0aGUgYXBwcm9wcmlhdGVcblx0XHQvLyBldmVudFxuXHRcdGVsZW1lbnQub24oJ3RvdWNoZW5kJywgKGV2ZW50KSA9PiB7XG5cdFx0XHRmaXJzdFRvdWNoID0gbnVsbDtcblx0XHRcdHRoaXMudGFwID0gZmFsc2U7XG5cdFx0XHQvLyBQcm9jZWVkIG9ubHkgaWYgdGhlIHRvdWNobW92ZS9sZWF2ZS9jYW5jZWwgZXZlbnQgZGlkbid0IGhhcHBlblxuXHRcdFx0aWYgKGNvdWxkQmVUYXAgPT09IHRydWUpIHtcblx0XHRcdC8vIE1lYXN1cmUgaG93IGxvbmcgdGhlIHRvdWNoIGxhc3RlZFxuXHRcdFx0XHRjb25zdCB0b3VjaFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHRvdWNoU3RhcnQ7XG5cblx0XHRcdFx0Ly8gTWFrZSBzdXJlIHRoZSB0b3VjaCB3YXMgbGVzcyB0aGFuIHRoZSB0aHJlc2hvbGQgdG8gYmUgY29uc2lkZXJlZCBhIHRhcFxuXHRcdFx0XHRpZiAodG91Y2hUaW1lIDwgdG91Y2hUaW1lVGhyZXNob2xkKSB7XG5cdFx0XHRcdFx0Ly8gRG9uJ3QgbGV0IGJyb3dzZXIgdHVybiB0aGlzIGludG8gYSBjbGlja1xuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0LyoqXG5cdFx0XHRcdFx0ICogVHJpZ2dlcmVkIHdoZW4gYSBgQ29tcG9uZW50YCBpcyB0YXBwZWQuXG5cdFx0XHRcdFx0ICpcblx0XHRcdFx0XHQgKiBAZXZlbnQgQ29tcG9uZW50I3RhcFxuXHRcdFx0XHRcdCAqL1xuXHRcdFx0XHRcdGNvbnN0IHRhcEV2ZW50ID0gJC5FdmVudCgndGFwJyk7XG5cdFx0XHRcdFx0dGFwRXZlbnQucGFnZVggPSBsYXN0TW92ZVRvdWNoLnBhZ2VYO1xuXHRcdFx0XHRcdHRhcEV2ZW50LnBhZ2VZID0gbGFzdE1vdmVUb3VjaC5wYWdlWTtcblx0XHRcdFx0XHRlbGVtZW50LnRyaWdnZXIodGFwRXZlbnQpO1xuXHRcdFx0XHRcdC8vIEl0IG1heSBiZSBnb29kIHRvIGNvcHkgdGhlIHRvdWNoZW5kIGV2ZW50IG9iamVjdCBhbmQgY2hhbmdlIHRoZVxuXHRcdFx0XHRcdC8vIHR5cGUgdG8gdGFwLCBpZiB0aGUgb3RoZXIgZXZlbnQgcHJvcGVydGllcyBhcmVuJ3QgZXhhY3QgYWZ0ZXJcblx0XHRcdFx0XHQvLyBFdmVudHMuZml4RXZlbnQgcnVucyAoZS5nLiBldmVudC50YXJnZXQpXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnQ29tcG9uZW50JywgQ29tcG9uZW50KTtcbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL0NvbXBvbmVudC5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgSWNvbi5qc1xuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcblxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIEljb24ncyBvcHRpb25zXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuaWNvbk5hbWU9JyddIEljb24ncyBuYW1lLiBJZiB1c2Ugc3Znc3ByaXRlIGljb25zLCBpY29uTmFtZSBpdCdzIGlkIGluIHNwcml0ZVxuICogQGNsYXNzIEljb25cbiAqIEBleHRlbmRzIENvbXBvbmVudFxuICovXG5jbGFzcyBJY29uIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3RvciAocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRjbGFzc05hbWUgOiAnJyxcblx0XHRcdGljb25OYW1lIDogJydcblx0XHR9LCBvcHRpb25zKVxuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cblx0fVxuXG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHR0aGlzLl91c2VUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3VzZScpO1xuXHRcdHRoaXMuX3N2Z1RhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XG5cblx0XHR0aGlzLmljb25OYW1lID0gdGhpcy5faWNvbk5hbWUgPSB0aGlzLm9wdGlvbnMuaWNvbk5hbWU7XG5cdFx0dGhpcy5fc3ZnVGFnLmFwcGVuZENoaWxkKHRoaXMuX3VzZVRhZyk7XG5cdFx0dGhpcy5lbGVtZW50ID0gJCgnPGRpdiAvPicpXG5cdFx0XHQuYWRkQ2xhc3ModGhpcy5idWlsZENTU0NsYXNzKCkpXG5cdFx0XHQuYXR0cigndGl0bGUnLCB0aGlzLm9wdGlvbnMudGl0bGUpXG5cdFx0XHQuYXBwZW5kKCQodGhpcy5fc3ZnVGFnKSk7XG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudDtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGJ1aWxkQ1NTQ2xhc3MoKSB7XG5cdFx0cmV0dXJuIGAke3N1cGVyLmJ1aWxkQ1NTQ2xhc3MoKX0gbGVwbGF5ZXItaWNvbiAke3RoaXMub3B0aW9ucy5jbGFzc05hbWV9YFxuXHR9XG5cblx0LyoqXG5cdCAqIFNldHRlciBvZiBpY29uTmFtZSBmaWVsZFxuXHQgKiBAcGFyYW0ge1N0cmluZ30gaWNvbk5hbWVcblx0ICovXG5cdHNldCBpY29uTmFtZShpY29uTmFtZSkge1xuXHRcdGxldCBhdHRyTlMgPSBbJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnLCAnaHJlZiddXG5cdFx0dGhpcy5fdXNlVGFnLnJlbW92ZUF0dHJpYnV0ZU5TKC4uLmF0dHJOUywgYCR7dGhpcy5wbGF5ZXIub3B0aW9ucy5zdmdQYXRofSNsZXBsYXllci1pY29uLSR7dGhpcy5pY29uTmFtZX1gKVxuXHRcdHRoaXMuX3VzZVRhZy5zZXRBdHRyaWJ1dGVOUyguLi5hdHRyTlMsIGAke3RoaXMucGxheWVyLm9wdGlvbnMuc3ZnUGF0aH0jbGVwbGF5ZXItaWNvbi0ke2ljb25OYW1lfWApXG5cdFx0dGhpcy5faWNvbk5hbWUgPSBpY29uTmFtZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXR0ZXIgb2YgaWNvbk5hbWUgZmllbGRcblx0ICogQHJldHVybiB7U3RyaW5nfSBJY29uJ3MgbmFtZVxuXHQgKi9cblx0Z2V0IGljb25OYW1lICgpIHtcblx0XHRyZXR1cm4gdGhpcy5faWNvbk5hbWU7XG5cdH1cblxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ0ljb24nLCBJY29uKTtcbmV4cG9ydCBkZWZhdWx0IEljb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9JY29uLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBQbGF5QnV0dG9uLmpzXG4gKi9cblxuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9Db250cm9sJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJztcbmltcG9ydCB7IGNyZWF0ZUVsIH0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgSVNfVE9VQ0ggfSBmcm9tICcuLi91dGlscy9icm93c2VyJztcblxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKi9cbmNsYXNzIFBsYXlCdXR0b24gZXh0ZW5kcyBDb250cm9sIHtcblxuXHRjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpXG5cdH1cblxuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdGNvbnN0IGlubmVyID0gY3JlYXRlRWwoJ2RpdicsIHtcblx0XHRcdGNsYXNzTmFtZSA6ICdsZXBsYXllci1wbGF5LWJ1dHRvbl9fYnV0dG9uJ1xuXHRcdH0pXG5cdFx0LmFwcGVuZChuZXcgSWNvbih0aGlzLnBsYXllciwgeyBpY29uTmFtZSA6ICdwbGF5JyB9KS5lbGVtZW50KTtcblxuXHRcdHRoaXMuZWxlbWVudCA9IGNyZWF0ZUVsKCdkaXYnLCB7XG5cdFx0XHRjbGFzc05hbWUgOiB0aGlzLmJ1aWxkQ1NTQ2xhc3MoKVxuXHRcdH0pXG5cdFx0LmFwcGVuZChpbm5lcik7XG5cblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50O1xuXHR9XG5cblx0b25DbGljayhlKSB7XG5cdFx0c3VwZXIub25DbGljayhlKTtcblx0XHQvKipcblx0XHQgKiBTZWUgTFBMUi0yOTBcblx0XHQgKiBPbiB0b3VjaCBkZXZpY2VzIGluIGZ1bGxzY3JlZW4gaWYgdXNlciBub3QgYWN0aXZlIHdlIGRvbid0IHNob3VsZCBwbGF5LlxuXHRcdCAqIEF0IGZpcnN0IHdlIHNob3cgaGltIGEgY29udHJvbHNcblx0XHQgKi9cblx0XHRpZihJU19UT1VDSCgpICYmIHRoaXMucGxheWVyLnZpZXcgPT09ICdmdWxsc2NyZWVuJykge1xuXHRcdFx0aWYodGhpcy5wbGF5ZXIudXNlckFjdGl2ZSkge1xuXHRcdFx0XHR0aGlzLnBsYXllci5wbGF5KCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucGxheWVyLnBsYXkoKTtcblx0XHR9XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGJ1aWxkQ1NTQ2xhc3MoKSB7XG5cdFx0cmV0dXJuIGBsZXBsYXllci1wbGF5LWJ1dHRvbiAke3RoaXMub3B0aW9ucy5jbGFzc05hbWV9YFxuXHR9XG5cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdQbGF5QnV0dG9uJywgUGxheUJ1dHRvbik7XG5Db250cm9sLnJlZ2lzdGVyQ29udHJvbCgncGxheSBidXR0b24nLCBQbGF5QnV0dG9uKTtcbmV4cG9ydCBkZWZhdWx0IFBsYXlCdXR0b247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9QbGF5QnV0dG9uLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSB0aW1lLmpzXG4gKlxuICogQG1vZHVsZSB0aW1lXG4gKi9cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbi8qKlxuICogQ29udmVydCBzZWNvbmRzIHRvIGZvcm1hdCBzdHJpbmcgJ2hoPzptbTpzcydcbiAqXG4gKiBAYWNjZXNzIHB1YmxpY1xuICogQHBhcmFtIHtOdW1iZXJ9IHNlY29uZHMgU2Vjb25kc1xuICogQHBhcmFtIHtCb29sZWFufSBzaG93SG91cnMgY29udmVydCB0byBmb3JtYXQgJ2hoOm1tOnNzJ1xuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNlY29uZHNUb1RpbWUgKHNlY29uZHMsIHNob3dIb3Vycykge1xuXHR2YXIgaCA9IE1hdGguZmxvb3Ioc2Vjb25kcyAvIDM2MDApO1xuXHR2YXIgbSA9IE1hdGguZmxvb3Ioc2Vjb25kcyAlIDM2MDAgLyA2MCk7XG5cdHZhciBzID0gTWF0aC5mbG9vcihzZWNvbmRzICUgMzYwMCAlIDYwKTtcblx0dmFyIG91dCA9ICcnO1xuXHRpZiAobSA8IDEwKSB7XG5cdFx0bSA9ICcwJyArIG07XG5cdH1cblx0aWYgKHMgPCAxMCkge1xuXHRcdHMgPSAnMCcgKyBzO1xuXHR9XG5cdG91dCA9IGAke219OiR7c31gO1xuXG5cdGlmKGggPiAwIHx8IHNob3dIb3Vycykge1xuXHRcdG91dCA9IGAke2h9OmAgKyBvdXRcblx0fVxuXHRyZXR1cm4gb3V0O1xufVxuXG5cbi8qKlxuICogUmV0dXJuIGxlbmd0aCAvIGVuZFxuICpcbiAqIEBhY2Nlc3MgcHVibGljXG4gKiBAcGFyYW0ge051bWJlcn0gbGVuZ3RoXG4gKiBAcGFyYW0ge051Ym1lcn0gZW5kXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwZXJjZW50aWZ5IChsZW5ndGgsIGVuZCkge1xuXHQvLyBvciB6ZXJvIGJlYWNhc2UgTmFOXG5cdGNvbnN0IHBlcmNlbnQgPSAobGVuZ3RoIC8gZW5kKSB8fCAwO1xuXHRyZXR1cm4gKHBlcmNlbnQgPj0gMSkgPyAxIDogcGVyY2VudDtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWwodGFnPSdkaXYnLCBwcm9wcykge1xuXHRpZihwcm9wcyAmJiBwcm9wcy5jbGFzc05hbWUpIHtcblx0XHRwcm9wc1tcImNsYXNzXCJdID0gcHJvcHMuY2xhc3NOYW1lO1xuXHRcdGRlbGV0ZSBwcm9wcy5jbGFzc05hbWU7XG5cdH1cblx0cmV0dXJuICQoYDwke3RhZ30vPmAsIHByb3BzKTtcbn1cblxuXG4vKipcbiAqIEBwYXJhbXMge1N0cmluZ30gSHRtbFxuICovXG5leHBvcnQgZnVuY3Rpb24gJGh0bWwoaHRtbCkge1xuXG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5leHBvcnQgY29uc3QgZ2V0U2Nyb2xsQmFyV2lkdGggPSAoZnVuY3Rpb24oKSB7XG5cdGxldCByZXN1bHQ7XG5cblx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXG5cdFx0aWYocmVzdWx0ICE9IG51bGwpIHtcblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fVxuXG5cdFx0Y29uc3Qgb3V0ZXIgPSAkKCc8ZGl2IC8+JykuY3NzKHtcblx0XHRcdHZpc2liaWxpdHkgOiAnaGlkZGVuJyxcblx0XHRcdHdpZHRoIDogMTAwLFxuXHRcdFx0b3ZlcmZsb3cgOiAnc2Nyb2xsJ1xuXHRcdH0pLmFwcGVuZFRvKCdib2R5Jyk7XG5cblx0XHRjb25zdCB3aWR0aFdpdGhTY3JvbGwgPSAkKCc8ZGl2IC8+JykuY3NzKHtcblx0XHRcdHdpZHRoIDogJzEwMCUnXG5cdFx0fSkuYXBwZW5kVG8ob3V0ZXIpLm91dGVyV2lkdGgoKTtcblxuXHRcdG91dGVyLnJlbW92ZSgpO1xuXHRcdHJldHVybiByZXN1bHQgPSAxMDAgLSB3aWR0aFdpdGhTY3JvbGw7XG5cdH1cblxufSgpKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy91dGlscy9pbmRleC5qcyIsIi8qKlxuICogQGZpbGUgYnJvd3Nlci5qc1xuICovXG5cblxuY29uc3QgVVNFUl9BR0VOVCA9IHdpbmRvdy5uYXZpZ2F0b3IgJiYgd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQgfHwgJyc7XG5cbmV4cG9ydCBjb25zdCBJU19NT0JJTEUgPSAoL01vYmlsZS9pKS50ZXN0KFVTRVJfQUdFTlQpO1xuXG5leHBvcnQgY29uc3QgSVNfQ0hST01FID0gVVNFUl9BR0VOVC5pbmRleE9mKCdDaHJvbWUnKSA+IC0xO1xuXG5leHBvcnQgY29uc3QgSVNfQU5EUk9JRCA9ICgvQW5kcm9pZC9pKS50ZXN0KFVTRVJfQUdFTlQpO1xuXG5leHBvcnQgY29uc3QgSVNfQU5EUk9JRF9QSE9ORSA9IElTX0FORFJPSUQgJiYgSVNfTU9CSUxFO1xuXG5leHBvcnQgY29uc3QgSVNfSVBBRCA9ICgvaVBhZC9pKS50ZXN0KFVTRVJfQUdFTlQpO1xuLy8gVGhlIEZhY2Vib29rIGFwcCdzIFVJV2ViVmlldyBpZGVudGlmaWVzIGFzIGJvdGggYW4gaVBob25lIGFuZCBpUGFkLCBzb1xuLy8gdG8gaWRlbnRpZnkgaVBob25lcywgd2UgbmVlZCB0byBleGNsdWRlIGlQYWRzLlxuLy8gaHR0cDovL2FydHN5LmdpdGh1Yi5pby9ibG9nLzIwMTIvMTAvMTgvdGhlLXBlcmlscy1vZi1pb3MtdXNlci1hZ2VudC1zbmlmZmluZy9cbmV4cG9ydCBjb25zdCBJU19JUEhPTkUgPSAoL2lQaG9uZS9pKS50ZXN0KFVTRVJfQUdFTlQpICYmICFJU19JUEFEO1xuZXhwb3J0IGNvbnN0IElTX0lQT0QgPSAoL2lQb2QvaSkudGVzdChVU0VSX0FHRU5UKTtcbmV4cG9ydCBjb25zdCBJU19JT1MgPSBJU19JUEhPTkUgfHwgSVNfSVBBRCB8fCBJU19JUE9EO1xuXG5leHBvcnQgY29uc3QgSVNfU0FGQVJJID0gVVNFUl9BR0VOVC5pbmRleE9mKCdTYWZhcmknKSA+IC0xICYmICFJU19DSFJPTUU7XG5cbmV4cG9ydCBjb25zdCBJU19UT1VDSCA9ICgpID0+ICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdyB8fCBuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL3V0aWxzL2Jyb3dzZXIuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIFNwbGFzaEljb24uanNcbiAqL1xuXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCBJY29uIGZyb20gJy4vSWNvbic7XG5cbi8qKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQGNsYXNzIFNwbGFzaEljb25cbiAqIEBleHRlbmRzIENvbXBvbmVudFxuICovXG5jbGFzcyBTcGxhc2hJY29uIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXHRzaG93KG5hbWUpIHtcblx0XHR0aGlzLmljb24uaWNvbk5hbWUgPSBuYW1lO1xuXHRcdHRoaXMuZWxlbWVudC5hZGRDbGFzcygnbGVwbGF5ZXItc3BsYXNoaWNvbi0tYWN0aXZlJyk7XG5cdFx0c2V0VGltZW91dCgoKSA9PiB0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3MoJ2xlcGxheWVyLXNwbGFzaGljb24tLWFjdGl2ZScpLCAzMDApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHR0aGlzLmljb24gPSBuZXcgSWNvbih0aGlzLnBsYXllcik7XG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudCA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0LmFkZENsYXNzKCdsZXBsYXllci1zcGxhc2hpY29uJylcblx0XHRcdC5hcHBlbmQodGhpcy5pY29uLmVsZW1lbnQpO1xuXHR9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3BsYXNoSWNvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL1NwbGFzaEljb24uanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIFRpbWUuanNcbiAqL1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vQ29tcG9uZW50JztcbmltcG9ydCB7IHNlY29uZHNUb1RpbWUsIGNyZWF0ZUVsIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG4vLyBUT0RPOiDQmNGB0L/QvtC70YzQt9C+0LLQsNGC0Ywg0Y3RgtC+0YIg0LHQu9C+0Log0LIgVGltZUNvbnRyb2xcbi8qKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQGNsYXNzIFRpbWVcbiAqIEBleHRlbmRzIENvbnRyb2xcbiAqL1xuY2xhc3MgVGltZSBleHRlbmRzIENvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IgKHBsYXllciwgb3B0aW9ucz17fSkge1xuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0Zm4gOiAocGxheWVyKSA9PiB7XG5cdFx0XHRcdGNvbnN0IHZpZGVvID0gcGxheWVyLnZpZGVvO1xuXHRcdFx0XHRyZXR1cm4gc2Vjb25kc1RvVGltZSh2aWRlby5jdXJyZW50VGltZSk7XG5cdFx0XHR9XG5cdFx0fSwgb3B0aW9ucyk7XG5cblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ3RpbWV1cGRhdGUnLCB0aGlzLnVwZGF0ZVRleHQuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5wbGF5ZXIub24oJ2luaXRlZCcsIHRoaXMudXBkYXRlVGV4dC5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdHVwZGF0ZVRleHQoZSwgZGF0YSkge1xuXHRcdHRoaXMuZWxlbWVudC50ZXh0KHRoaXMub3B0aW9ucy5mbih0aGlzLnBsYXllcikpO1xuXHR9XG5cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHR0aGlzLmVsZW1lbnQgPSBjcmVhdGVFbCgnZGl2JywgeyBjbGFzc05hbWUgOiAnbGVwbGF5ZXItdGltZScgfSk7XG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudDtcblx0fVxuXG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnVGltZScsIFRpbWUpO1xuZXhwb3J0IGRlZmF1bHQgVGltZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL1RpbWVsaW5lL1RpbWUuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIENvbnRyb2xDb2xsZWN0aW9uLmpzXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9Db250cm9sJztcblxuaW1wb3J0IHsgY3JlYXRlRWwgfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBJU19BTkRST0lEX1BIT05FLCBJU19JUEhPTkUsIElTX01PQklMRSB9IGZyb20gJy4uL3V0aWxzL2Jyb3dzZXInO1xuXG5cbi8qKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBPcHRpb25zIG9mIGNvbXBvbmVudFxuICogQHBhcmFtIHtqUXVlcnl9IFtvcHRpb25zLmNvbnRyb2xzXSBBcnJheSBvZiByb3dzIG9mIGNvbnRyb2wncyBuYW1lXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMuY29udHJvbHNPcHRpb25zXSBDb250cm9sIG9wdGlvbnNcbiAqIEBwcm9wZXJ0eSB7QXJyYXl9IEFycmF5IG9mIHJvd3Mgb2YgY29udHJvbCdzIG5hbWVcbiAqIEBwclxuICpcbiAqL1xuY2xhc3MgQ29udHJvbENvbGxlY3Rpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3RvciAocGxheWVyLCBvcHRpb25zKSB7XG5cdFx0bGV0IHsgbmFtZSB9ID0gb3B0aW9ucztcblxuXHRcdC8vIE9wdGlvbnMgYnkgdXNlciBhZ2VudFxuXHRcdC8vIE9wdGlvbnMgb25seSBmb3IgY29tbW9uOmFuZHJvaWQgb3Igd2hhdGV2ZXI6YW5kcm9pZCwgd2hhdGV2ZXI6aW9zIGNvbnRyb2xzXG5cdFx0bGV0IGxvY2FsVWFPcHRpb25zID0ge307XG5cblx0XHRsZXQgY29udHJvbHNPcHRpb25zID0ge307XG5cblx0XHRsZXQgY29udHJvbHMgPSBbXTtcblxuXHRcdGlmKG5hbWUgIT0gbnVsbCkge1xuXG5cdFx0XHRjb250cm9scyA9IHBsYXllci5vcHRpb25zLmNvbnRyb2xzW25hbWVdO1xuXG5cdFx0XHRjb250cm9sc09wdGlvbnMgPSBwbGF5ZXIub3B0aW9ucy5jb250cm9sc09wdGlvbnNbbmFtZV07XG5cblx0XHRcdFtcblx0XHRcdFx0eyBmbGFnIDogSVNfTU9CSUxFLCBuYW1lIDogJ21vYmlsZSd9LFxuICAgICAgICAgICAgICAgIHsgZmxhZyA6IElTX0FORFJPSURfUEhPTkUsIG5hbWUgOiAnYW5kcm9pZCcgfSxcbiAgICAgICAgICAgICAgICB7IGZsYWcgOiBJU19JUEhPTkUsIG5hbWUgOiAnaW9zJyB9LFxuXHRcdFx0XS5mb3JFYWNoKGl0ZW0gPT4ge1xuXHRcdFx0XHRpZihpdGVtLmZsYWcpIHtcblx0XHRcdFx0XHRjb25zdCBsb2NhbE5hbWUgPSBgJHtuYW1lfToke2l0ZW0ubmFtZX1gO1xuXG5cdFx0XHRcdFx0aWYocGxheWVyLm9wdGlvbnMuY29udHJvbHNbbG9jYWxOYW1lXSkge1xuXHRcdFx0XHRcdFx0bG9jYWxVYU9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgbG9jYWxVYU9wdGlvbnMsIHBsYXllci5vcHRpb25zLmNvbnRyb2xzT3B0aW9uc1tsb2NhbE5hbWVdKTtcblx0XHRcdFx0XHRcdGNvbnRyb2xzID0gcGxheWVyLm9wdGlvbnMuY29udHJvbHNbbG9jYWxOYW1lXTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIGl0ZW0uZmxhZztcblx0XHRcdH0pO1xuXHRcdH1cblxuXG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRjb250cm9scyA6IGNvbnRyb2xzLFxuXHRcdFx0YWxpZ24gOiAnbGVmdCcsXG5cdFx0XHRjb250cm9sc09wdGlvbnMgOiB7fVxuXHRcdH0sIGxvY2FsVWFPcHRpb25zLCBjb250cm9sc09wdGlvbnMsIG9wdGlvbnMpO1xuXG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblxuXHRcdHRoaXMuYWN0aXZlID0gb3B0aW9ucy5hY3RpdmUgfHwgZmFsc2U7XG5cdFx0dGhpcy5uYW1lID0gb3B0aW9ucy5uYW1lO1xuXG5cdFx0dGhpcy5wbGF5ZXIuY29udHJvbHNbdGhpcy5uYW1lXSA9IHRoaXM7XG5cdH1cblxuXG5cdF9nZXRDb250cm9sT3B0aW9ucyhuYW1lKSB7XG5cdFx0Y29uc3QgeyBjb250cm9sc09wdGlvbnMgfSA9IHRoaXMub3B0aW9ucztcblx0XHRsZXQgcmVzdWx0ID0gY29udHJvbHNPcHRpb25zLmNvbnRyb2wgfHwge307XG5cblx0XHRpZihjb250cm9sc09wdGlvbnNbbmFtZV0pIHtcblx0XHRcdHJlc3VsdCA9ICQuZXh0ZW5kKHRydWUsIHt9LCByZXN1bHQsIGNvbnRyb2xzT3B0aW9uc1tuYW1lXSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdGFkZENvbnRyb2woaW5kZXhSb3csIG5hbWUsIG9wdGlvbnMpIHtcblx0XHRjb25zdCBjb250cm9sID0gQ29udHJvbC5jcmVhdGUodGhpcy5wbGF5ZXIsIG5hbWUsIHtcblx0XHRcdGNvbGxlY3Rpb24gOiB0aGlzLm9wdGlvbnMubmFtZSxcblx0XHRcdC4uLm9wdGlvbnNcblx0XHR9KTtcblxuXHRcdGlmKGNvbnRyb2wgPT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHdoaWxlKGluZGV4Um93ID4gdGhpcy5fcm93cy5sZW5ndGgpIHtcblx0XHRcdHRoaXMuYWRkUm93KCk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgZWxlbVJvdyA9IHRoaXMuX3Jvd3NbaW5kZXhSb3ddO1xuXHRcdGVsZW1Sb3cuYXBwZW5kKGNvbnRyb2wuZWxlbWVudCk7XG5cblx0XHRpZiAodGhpcy5jb250cm9scyA9PSBudWxsKSB7XG5cdFx0XHR0aGlzLmNvbnRyb2xzID0gW107XG5cdFx0fVxuXHRcdGlmICh0aGlzLmNvbnRyb2xzW2luZGV4Um93XSA9PSBudWxsKSB7XG5cdFx0XHR0aGlzLmNvbnRyb2xzW2luZGV4Um93XSA9IHt9O1xuXHRcdH1cblxuXHRcdHRoaXMuY29udHJvbHNbaW5kZXhSb3ddW25hbWVdID0gY29udHJvbDtcblx0fVxuXG5cdGdldENvbnRyb2woZmlyc3QsIHNlY29uZCkge1xuXHRcdGlmKHNlY29uZCA9PSBudWxsKSB7XG5cdFx0XHRjb25zdCBuYW1lID0gZmlyc3Q7XG5cdFx0XHRmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5jb250cm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZih0aGlzLmNvbnRyb2xzW2ldW25hbWVdICE9IG51bGwpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5jb250cm9sc1tpXVtuYW1lXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zdCBuYW1lID0gZmlyc3Q7XG5cdFx0XHRjb25zdCBpbmRleFJvdyA9IHNlY29uZDtcblx0XHRcdHJldHVybiB0aGlzLmNvbnRyb2xzW2luZGV4Um93XVtuYW1lXTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGFkZFJvdygpIHtcblx0XHRjb25zdCBlbGVtUm93ID0gY3JlYXRlRWwoJ2RpdicsIHtcblx0XHRcdGNsYXNzTmFtZSA6IGBsZXBsYXllci1jb250cm9scyBjb250cm9scy0ke3RoaXMub3B0aW9ucy5uYW1lfWBcblx0XHR9KTtcblxuXHRcdGlmICh0aGlzLl9yb3dzID09IG51bGwpIHtcblx0XHRcdHRoaXMuX3Jvd3MgPSBbXVxuXHRcdH1cblx0XHR0aGlzLl9yb3dzLnB1c2goZWxlbVJvdyk7XG5cdFx0dGhpcy5lbGVtZW50LmFwcGVuZChlbGVtUm93KTtcblxuXHRcdHJldHVybiBlbGVtUm93O1xuXHR9XG5cblx0Z2V0Um93KGluZGV4Um93KSB7XG5cdFx0cmV0dXJuIHRoaXMuX3Jvd3NbaW5kZXhSb3cgfHwgMF07XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdGNvbnN0IHsgbmFtZSwgY29udHJvbHMsIGFsaWduIH0gPSB0aGlzLm9wdGlvbnM7XG5cdFx0bGV0IGdsb2JhbEFsaWduID0gbnVsbDtcblxuXHRcdHRoaXMuZWxlbWVudCA9IGNyZWF0ZUVsKCdkaXYnLCB7XG5cdFx0XHRjbGFzc05hbWUgOiBgbGVwbGF5ZXItY29udHJvbC1jb2xsZWN0aW9uIGxlcGxheWVyLWNvbnRyb2wtY29sbGVjdGlvbi0tJHtuYW1lfWAsXG5cdFx0fSlcblxuXHRcdGlmKHR5cGVvZiBhbGlnbiA9PT0gJ3N0cmluZycpIHtcblx0XHRcdGdsb2JhbEFsaWduID0gYWxpZ247XG5cdFx0fVxuXG5cdFx0Y29udHJvbHMuZm9yRWFjaCgocm93LCBpbmRleFJvdykgPT4ge1xuXHRcdFx0Y29uc3QgZWxlbVJvdyA9IHRoaXMuYWRkUm93KCk7XG5cdFx0XHRsZXQgcm93QWxpZ24gPSBnbG9iYWxBbGlnbjtcblxuXHRcdFx0aWYoQXJyYXkuaXNBcnJheShhbGlnbikgJiYgYWxpZ25baW5kZXhSb3ddKSB7XG5cdFx0XHRcdHJvd0FsaWduID0gYWxpZ25baW5kZXhSb3ddXG5cdFx0XHR9XG5cblx0XHRcdHJvdy5mb3JFYWNoKGNvbnRyb2xOYW1lID0+IHtcblxuXHRcdFx0XHRpZihjb250cm9sTmFtZSA9PT0gJ3RpbWVsaW5lJyAmJiByb3dBbGlnbiAhPT0gJ2p1c3RpZnknKSB7XG5cdFx0XHRcdFx0Y29uc29sZS53YXJuKCdDb25yb2xzIHNob3VsZCBoYXZlIGp1c3RpZnkgYWxpZ24sIGlmIHRoZXJlIGlzIHRoZSB0aW1lbGluZSBpbiBpdCcpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5hZGRDb250cm9sKGluZGV4Um93LCBjb250cm9sTmFtZSwgdGhpcy5fZ2V0Q29udHJvbE9wdGlvbnMobmFtZSkpO1xuXHRcdFx0fSk7XG5cblx0XHRcdGVsZW1Sb3cuYWRkQ2xhc3MoYGxlcGxheWVyLWNvbnRyb2xzLS0ke3Jvd0FsaWdufWApXG5cdFx0XHRcdC5hdHRyKCd0YWJpbmRleCcsIDApO1xuXG5cdFx0XHRlbGVtUm93LmZpbmQoJy5kaXZpZGVyICsgLmRpdmlkZXInKS5yZW1vdmUoKTtcblx0XHR9KTtcblxuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQ7XG5cdH1cblxuXHRoaWRlICgpIHtcblx0XHR0aGlzLmVsZW1lbnQuaGlkZSgpO1xuXHRcdHRoaXMuZWxlbWVudC5maW5kKCcubGVwbGF5ZXItY29udHJvbHMnKS5oaWRlKClcblx0fVxuXG5cdHNob3cgKCkge1xuXHRcdHRoaXMuZWxlbWVudC5zaG93KClcblx0XHR0aGlzLmVsZW1lbnQuZmluZCgnLmxlcGxheWVyLWNvbnRyb2xzJykuc2hvdygpXG5cdH1cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdDb250cm9sQ29sbGVjdGlvbicsIENvbnRyb2xDb2xsZWN0aW9uKTtcbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xDb2xsZWN0aW9uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvQ29udHJvbENvbGxlY3Rpb24uanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIFNlY3Rpb25zLmpzXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuXG5pbXBvcnQgeyBzZWNvbmRzVG9UaW1lLCBnZXRTY3JvbGxCYXJXaWR0aCB9IGZyb20gJy4uL3V0aWxzJztcbi8qKlxuICogQGNsYXNzIFNlY3Rpb25zXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAcGFyYW0ge0FycmF5fSBbb3B0aW9ucy5pdGVtcz1bXX0gRGF0YSBmb3Igc2VjdGlvbnNcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMudmlld3NdIFNob3cgc2VjdGlvbiBvbmx5IGluIGZ1bGxzY3JlZW5cbiAqIEBleHRlbmRzIENvbXBvbmVudFxuICovXG5jbGFzcyBTZWN0aW9ucyBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucykge1xuXHRcdGxldCB7IGl0ZW1zID0gW10gfSA9IG9wdGlvbnM7XG5cdFx0aXRlbXMgPSBbXS5jb25jYXQoaXRlbXMpO1xuXG5cdFx0Ly9vcHRpb25zLml0ZW1zID0gaXRlbXM7XG5cblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXG5cdFx0dGhpcy5zY3JvbGxFbGVtZW50ID0gdGhpcy5faW5uZXJFbGVtZW50O1xuXHRcdHRoaXMuYWN0aXZlU2VjdGlvbiA9IHRoaXMuZ2V0U2VjdGlvbkJ5SW5kZXgoMCk7XG5cblx0XHR0aGlzLml0ZW1zID0gaXRlbXM7XG5cdFx0dGhpcy5sZW5ndGggPSB0aGlzLml0ZW1zLmxlbmd0aDtcblxuXHRcdHRoaXMuc2V0QWN0aXZlQnlJbmRleCgwKTtcblxuXHRcdHRoaXMuZWxlbWVudFxuXHRcdFx0LmZpbmQoJy5sZXBsYXllci1zZWN0aW9uJylcblx0XHRcdC5vbignY2xpY2snLCB0aGlzLm9uU2VjdGlvbkNsaWNrLmJpbmQodGhpcykpO1xuXG5cdFx0Ly8gdGhpcy5wbGF5ZXIub24oJ3NlY3Rpb25zdG9nZ2xlJywgdGhpcy5fb25TZWN0aW9uc1RvZ2dsZS5iaW5kKHRoaXMpKTtcblxuXHRcdHRoaXMucGxheWVyLm9uKCd0aW1ldXBkYXRlJywgdGhpcy5vblRpbWVVcGRhdGUuYmluZCh0aGlzKSk7XG5cblx0XHR0aGlzLnBsYXllci5vbignaW5pdGVkJywgdGhpcy51cGRhdGVTZWN0aW9uRHVyYXRpb24uYmluZCh0aGlzKSk7XG5cblx0XHR0aGlzLnBsYXllci5vbignZHVyYXRpb25jaGFuZ2UnLCB0aGlzLnVwZGF0ZVNlY3Rpb25EdXJhdGlvbi5iaW5kKHRoaXMpKTtcblxuXHRcdHRoaXMucGxheWVyLm9uKCdmb2N1cycsICgpID0+IHRoaXMucGxheWVyLmZvY3VzKCkpO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRuZXh0KCkge1xuXHRcdGNvbnN0IHNlY3Rpb25JbmRleCA9IHBhcnNlSW50KHRoaXMuYWN0aXZlU2VjdGlvbi5hdHRyKCdkYXRhLWluZGV4JykpO1xuXHRcdGNvbnN0IG5ld0luZGV4ID0gc2VjdGlvbkluZGV4ID49IHRoaXMubGVuZ3RoID8gdGhpcy5sZW5ndGggOiBzZWN0aW9uSW5kZXggKyAxO1xuXG5cdFx0dGhpcy5zZXRBY3RpdmVCeUluZGV4KG5ld0luZGV4KTtcblxuXHRcdHRoaXMucGxheWVyLnZpZGVvLmN1cnJlbnRUaW1lID0gdGhpcy5pdGVtc1tzZWN0aW9uSW5kZXhdLmVuZDtcblx0fVxuXG5cdHByZXYoKSB7XG5cdFx0Y29uc3Qgc2VjdGlvbkluZGV4ID0gcGFyc2VJbnQodGhpcy5hY3RpdmVTZWN0aW9uLmF0dHIoJ2RhdGEtaW5kZXgnKSk7XG5cdFx0Y29uc3QgbmV3SW5kZXggPSBzZWN0aW9uSW5kZXggPD0gMCA/IDAgOiBzZWN0aW9uSW5kZXggLSAxO1xuXG5cdFx0dGhpcy5zZXRBY3RpdmVCeUluZGV4KG5ld0luZGV4KTtcblx0XHR0aGlzLnBsYXllci52aWRlby5jdXJyZW50VGltZSA9IHRoaXMuaXRlbXNbbmV3SW5kZXhdLmJlZ2luO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHRjb25zdCB7IGZ1bGxzY3JlZW5Pbmx5LCBoaWRlU2Nyb2xsIH0gPSB0aGlzLm9wdGlvbnM7XG5cblxuXHRcdHRoaXMuZWxlbWVudCA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0LmFkZENsYXNzKCdsZXBsYXllci1zZWN0aW9ucycpXG5cdFx0XHQuYXR0cigndGFiaW5kZXgnLCAnMCcpO1xuXG5cdFx0dGhpcy5faW5uZXJFbGVtZW50ID0gJCgnPGRpdiAvPicpLmFkZENsYXNzKCdsZXBsYXllci1zZWN0aW9uc19faW5uZXInKTtcblxuXHRcdGlmKGZ1bGxzY3JlZW5Pbmx5KSB7XG5cdFx0XHR0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoJ2xlcGxheWVyLXNlY3Rpb25zLS1mc29ubHknKTtcblx0XHR9XG5cblx0XHRpZihoaWRlU2Nyb2xsKSB7XG5cdFx0XHR0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoJ2xlcGxheWVyLXNlY3Rpb25zLS1oaWRlLXNjcm9sbCcpO1xuXHRcdFx0dGhpcy5faW5uZXJFbGVtZW50LmNzcyh7XG5cdFx0XHRcdHJpZ2h0IDogLTEgKiBnZXRTY3JvbGxCYXJXaWR0aCgpXG5cdFx0XHR9KVxuXHRcdH1cblxuXHRcdHRoaXMuZWxlbWVudC5hcHBlbmQoXG5cdFx0XHR0aGlzLl9pbm5lckVsZW1lbnQuYXBwZW5kKHRoaXMuX2NyZWF0ZVNlY3Rpb25zKHRoaXMub3B0aW9ucy5pdGVtcykpXG5cdFx0KVxuXG5cblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50O1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0dXBkYXRlU2VjdGlvbkR1cmF0aW9uKCkge1xuXHRcdGlmKHRoaXMuaXRlbXMgIT0gbnVsbCAmJiB0aGlzLml0ZW1zLmxlbmd0aCA+IDApIHtcblx0XHRcdGNvbnN0IGxlbmd0aCA9IHRoaXMuaXRlbXMubGVuZ3RoXG5cdFx0XHR0aGlzLml0ZW1zW2xlbmd0aCAtIDFdLmVuZCA9IHRoaXMucGxheWVyLnZpZGVvLmR1cmF0aW9uO1xuXG5cdFx0XHQvLyBUT0RPOiDQn9GA0L7QtNGD0LzQsNGC0Ywg0YTRg9C90LrRhtC40Y/RjiB1cGRhdGVTZWN0aW9uXG5cdFx0XHQvL3RoaXMudXBkYXRlU2VjdGlvbih0aGlzLml0ZW1zW2xlbmd0aCAtIDFdLCBsZW5ndGggLSAxKTtcblx0XHR9XG5cdH1cblxuXG5cdG9uU2VjdGlvbkNsaWNrKGUpIHtcblx0XHRjb25zdCB2aWRlbyA9IHRoaXMucGxheWVyLnZpZGVvO1xuXHRcdGNvbnN0IHNlY3Rpb24gPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCcubGVwbGF5ZXItc2VjdGlvbicpO1xuXHRcdHZpZGVvLmN1cnJlbnRUaW1lID0gc2VjdGlvbi5hdHRyKCdkYXRhLWJlZ2luJyk7XG5cdFx0dGhpcy5wbGF5ZXIudHJpZ2dlcignc2VjdGlvbnNjbGljaycsIHsgc2VjdGlvbiA6IHRoaXMuaXRlbXNbc2VjdGlvbi5hdHRyKCdkYXRhLWluZGV4JyldfSk7XG5cdH1cblxuXHRzZXRBY3RpdmVCeUluZGV4KGluZGV4KSB7XG5cdFx0aWYgKFxuXHRcdFx0dGhpcy5hY3RpdmVTZWN0aW9uLmxlbmd0aCA9PT0gMCB8fFxuXHRcdFx0cGFyc2VJbnQodGhpcy5hY3RpdmVTZWN0aW9uLmF0dHIoJ2RhdGEtaW5kZXgnKSkgPT09IGluZGV4IHx8XG5cdFx0XHR0aGlzLmdldFNlY3Rpb25CeUluZGV4KGluZGV4KS5sZW5ndGggPT09IDBcblx0XHQpIHtcblx0XHRcdHJldHVybiB0aGlzXG5cdFx0fVxuXG5cdFx0dGhpcy5hY3RpdmVTZWN0aW9uLnJlbW92ZUNsYXNzKCdsZXBsYXllci1zZWN0aW9uLS1hY3RpdmUnKTtcblx0XHR0aGlzLmFjdGl2ZVNlY3Rpb24gPSB0aGlzLmdldFNlY3Rpb25CeUluZGV4KGluZGV4KTtcblx0XHR0aGlzLmFjdGl2ZVNlY3Rpb24uYWRkQ2xhc3MoJ2xlcGxheWVyLXNlY3Rpb24tLWFjdGl2ZScpO1xuXG5cdFx0Y29uc3QgdG9wUG9zaXRpb24gPSB0aGlzLmFjdGl2ZVNlY3Rpb24ucG9zaXRpb24oKS50b3A7XG5cblx0XHR0aGlzLnNjcm9sbEVsZW1lbnRcblx0XHRcdC5hbmltYXRlKHtcblx0XHRcdFx0c2Nyb2xsVG9wIDogdGhpcy5zY3JvbGxFbGVtZW50LnNjcm9sbFRvcCgpICsgdG9wUG9zaXRpb25cblx0XHRcdH0sIDgwMClcblxuXHRcdHRoaXMucGxheWVyLnRyaWdnZXIoJ3NlY3Rpb25zY2hhbmdlJywgeyBzZWN0aW9uIDogdGhpcy5pdGVtc1tpbmRleF19KTtcblxuXHRcdHJldHVybiB0aGlzXG5cdH1cblxuXHRnZXRTZWN0aW9uQnlJbmRleChpbmRleCkge1xuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQuZmluZChgLmxlcGxheWVyLXNlY3Rpb25bZGF0YS1pbmRleD1cIiR7aW5kZXh9XCJdYCk7XG5cdH1cblxuXG5cdG9uVGltZVVwZGF0ZShlLCBkYXRhKSB7XG5cdFx0aWYgKHRoaXMuYWN0aXZlU2VjdGlvbi5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVyblxuXHRcdH1cblxuXHRcdGNvbnN0IGN1cnJlbnRUaW1lID0gdGhpcy5wbGF5ZXIuY3VycmVudFRpbWU7XG5cblx0XHQvLyBVcGRhdGUgc3BhbiB3aXRoIGVuZCBzZWN0aW9uIHRpbWVcblx0XHQvLyBUT0RPOiDQktGL0L3QtdGB0YLQuCDRjdGC0L4g0LIg0L7RgtC00LXQu9GM0L3Ri9C5INC60L7QvNC/0L7QvdC10L3RgiBTaG93VGltZSDQuNC70Lgg0YLQuNC/0L4g0YLQvtCz0L5cblx0XHRpZih0aGlzLnBsYXllci52aWV3ID09PSAnbWluaScpIHtcblx0XHRcdGNvbnN0IGVuZFNlY3Rpb25UaW1lID0gdGhpcy5hY3RpdmVTZWN0aW9uLmF0dHIoJ2RhdGEtZW5kJyk7XG5cdFx0XHR0aGlzLmFjdGl2ZVNlY3Rpb25cblx0XHRcdFx0Lm5leHQoKVxuXHRcdFx0XHQuZmluZCgnLnRpbWUnKVxuXHRcdFx0XHQudGV4dChzZWNvbmRzVG9UaW1lKGVuZFNlY3Rpb25UaW1lIC0gY3VycmVudFRpbWUpKTtcblx0XHR9XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IHNlY3Rpb24gPSB0aGlzLml0ZW1zW2ldO1xuXHRcdFx0aWYgKGN1cnJlbnRUaW1lIDwgc2VjdGlvbi5lbmQpIHtcblx0XHRcdFx0dGhpcy5zZXRBY3RpdmVCeUluZGV4KGkpXG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHNldCB2aXNpYmxlKHZhbHVlKSB7XG5cdFx0aWYgKHRoaXMuZWxlbWVudC5oYXNDbGFzcygnbGVwbGF5ZXItc2VjdGlvbnMtLWhpZGRlbicpICYmIHZhbHVlKSB7XG5cdFx0XHR0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3MoJ2xlcGxheWVyLXNlY3Rpb25zLS1oaWRkZW4nKTtcblx0XHRcdHRoaXMucGxheWVyLnRyaWdnZXIoJ3NlY3Rpb25zdG9nZ2xlJywgeyBpc1Zpc2libGUgOiB2YWx1ZSB9KTtcblx0XHR9IGVsc2UgaWYgKCF2YWx1ZSkge1xuXHRcdFx0dGhpcy5lbGVtZW50LmFkZENsYXNzKCdsZXBsYXllci1zZWN0aW9ucy0taGlkZGVuJyk7XG5cdFx0XHR0aGlzLnBsYXllci50cmlnZ2VyKCdzZWN0aW9uc3RvZ2dsZScsIHsgaXNWaXNpYmxlIDogdmFsdWUgfSk7XG5cdFx0fVxuXHR9XG5cblx0Z2V0IHZpc2libGUoKSB7XG5cdFx0cmV0dXJuICF0aGlzLmVsZW1lbnQuaGFzQ2xhc3MoJ2xlcGxheWVyLXNlY3Rpb25zLS1oaWRkZW4nKVxuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZSBIVE1MIG9mIHNlY3Rpb24gYnkgZGF0YSBhbmQgaW5kZXggc2VjdGlvblxuXHQgKlxuXHQgKiBAcmV0dXJucyB7U3RyaW5nfSBIVE1MXG5cdCAqL1xuXHRjcmVhdGVTZWN0aW9uKHNlY3Rpb24sIGluZGV4KSB7XG5cdFx0Y29uc3QgaXRlbXMgPSB0aGlzLml0ZW1zIHx8IHRoaXMub3B0aW9ucy5pdGVtcztcblx0XHRjb25zdCBpdGVtID0gYFxuXHRcdFx0PGRpdiBjbGFzcz1cImxlcGxheWVyLXNlY3Rpb24gJHshaW5kZXggPyAnbGVwbGF5ZXItc2VjdGlvbi0tYWN0aXZlJyA6ICcnfVwiXG5cdFx0XHRcdGRhdGEtYmVnaW49XCIke3NlY3Rpb24uYmVnaW59XCJcblx0XHRcdFx0ZGF0YS1pbmRleD1cIiR7aW5kZXgudG9TdHJpbmcoKX1cIlxuXHRcdFx0XHRkYXRhLWVuZD1cIiR7c2VjdGlvbi5lbmR9XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJsZXBsYXllci1zZWN0aW9uLXRpbWVcIj4ke3NlY29uZHNUb1RpbWUoc2VjdGlvbi5iZWdpbil9PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJsZXBsYXllci1zZWN0aW9uLWluZm9cIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibGVwbGF5ZXItc2VjdGlvbi1uZXh0LWluZm9cIj5cblx0XHRcdFx0XHRcdCR7c2VjdGlvbi5uZXh0SW5mbyB8fCAn0KHQu9C10LTRg9GO0YnQsNGPINGB0LXQutGG0LjRjyDQvdCw0YfQvdC10YLRgdGPINGH0LXRgNC10LcnfVxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJ0aW1lXCI+JHtzZWNvbmRzVG9UaW1lKGl0ZW1zWzBdLmVuZCl9PC9zcGFuPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdCR7XG5cdFx0XHRcdFx0XHRzZWN0aW9uLnRpdGxlICE9IG51bGwgP1xuXHRcdFx0XHRcdFx0XHRgPGRpdiBjbGFzcz1cImxlcGxheWVyLXNlY3Rpb24tdGl0bGVcIj4ke3NlY3Rpb24udGl0bGV9PC9kaXY+YFxuXHRcdFx0XHRcdFx0OiAnJ1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQke1xuXHRcdFx0XHRcdFx0c2VjdGlvbi5kZXNjcmlwdGlvbiAhPSBudWxsID9cblx0XHRcdFx0XHRcdFx0YDxkaXYgY2xhc3M9XCJsZXBsYXllci1zZWN0aW9uLWRlc2NyaXB0aW9uXCI+JHtzZWN0aW9uLmRlc2NyaXB0aW9ufTwvZGl2PmBcblx0XHRcdFx0XHRcdDogJydcblx0XHRcdFx0XHR9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0YC50cmltKClcblx0XHRyZXR1cm4gaXRlbVxuXHR9XG5cblx0Ly8gVE9ETzog0J/RgNC40LTRg9C80LDRgtGMINGH0YLQviDRgdC00LXQu9Cw0YLRjCDRgSDRgdC+0LHRi9GC0LjRj9C80Lgg0L/QvtGB0LvQtSDQvtCx0L3QvtCy0LvQtdC90LjRjyDQv9C+0LvQvdC+0YHRjNGOINGB0LXQutGG0LjQuFxuXHQvKipcblx0ICogRmluZCBzZWN0aW9uIGJ5IGluZGV4IGFuZCB1cGRhdGUgaGltIHVzaW5nIGRhdGFcblx0ICpcblx0ICogQHBhcmFtIHtPYmplY3R9IGRhdGFcblx0ICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG5cdCAqL1xuXHR1cGRhdGVTZWN0aW9uKGRhdGEsIGluZGV4KSB7XG5cdFx0dGhpcy5nZXRTZWN0aW9uQnlJbmRleChpbmRleClcblx0XHRcdC5yZXBsYWNlV2l0aCh0aGlzLmNyZWF0ZVNlY3Rpb24oZGF0YSwgaW5kZXgpKVxuXHRcdFx0Lm9uKCdjbGljaycsIHRoaXMub25TZWN0aW9uQ2xpY2suYmluZCh0aGlzKSk7XG5cdH1cblxuXHRfY3JlYXRlU2VjdGlvbnMoaXRlbXMpIHtcblx0XHRsZXQgcmVzdWx0ID0gJyc7XG5cdFx0aXRlbXMuZm9yRWFjaCgoc2VjdGlvbiwgaW5kZXgpID0+IHtcblx0XHRcdHJlc3VsdCArPSB0aGlzLmNyZWF0ZVNlY3Rpb24oc2VjdGlvbiwgaW5kZXgpO1xuXHRcdH0pO1xuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdTZWN0aW9ucycsIFNlY3Rpb25zKTtcbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb25zO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvU2VjdGlvbnMuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIEVycm9yRGlzcGxheS5qc1xuICovXG5cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEBjbGFzcyBFcnJvckRpc3BsYXlcbiAqIEBleHRlbmRzIENvbXBvbmVudFxuICovXG5jbGFzcyBFcnJvckRpc3BsYXkgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucz17fSkge1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cdFx0aWYodGhpcy5wbGF5ZXIuX2Vycm9yICE9IG51bGwpIHtcblx0XHRcdHRoaXMubWVzc2FnZSA9IHRoaXMucGxheWVyLl9lcnJvci5tZXNzYWdlO1xuXHRcdFx0dGhpcy5lbGVtZW50LnNob3coKTtcblx0XHR9XG5cdFx0dGhpcy5wbGF5ZXIub24oJ2Vycm9yJywgdGhpcy5vblBsYXllckVycm9yLmJpbmQodGhpcykpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHR0aGlzLmVsZW1lbnQgPSAkKCc8ZGl2IC8+Jylcblx0XHRcdC5hZGRDbGFzcygnbGVwbGF5ZXItZXJyb3ItZGlzcGxheScpXG5cdH1cblxuXHRzZXQgbWVzc2FnZSh2YWx1ZSkge1xuXHRcdHRoaXMuZWxlbWVudC5odG1sKHZhbHVlKTtcblx0fVxuXG5cdG9uUGxheWVyRXJyb3IoZSwgZGF0YSkge1xuXHRcdGNvbnN0IGVycm9yID0gZGF0YS5lcnJvcjtcblx0XHR0aGlzLm1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xuXHRcdHRoaXMuZWxlbWVudC5zaG93KCk7XG5cdH1cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdFcnJvckRpc3BsYXknLCBFcnJvckRpc3BsYXkpO1xuZXhwb3J0IGRlZmF1bHQgRXJyb3JEaXNwbGF5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvRXJyb3JEaXNwbGF5LmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBFcnJvckRpc3BsYXkuanNcbiAqL1xuXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcblxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMudXJsXSBwYXRoIHRvIHBvc3RlciBpbWFnZVxuICogQGNsYXNzIFBvc3RlclxuICogQGV4dGVuZHMgQ29tcG9uZW50XG4gKi9cbmNsYXNzIFBvc3RlciBleHRlbmRzIENvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHR1cmwgOiBvcHRpb25zLnVybFxuXHRcdH0sIG9wdGlvbnMpO1xuXG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblxuXHRcdHRoaXMudXJsID0gdGhpcy5vcHRpb25zLnVybDtcblx0fVxuXG5cdHNldCB1cmwodmFsdWUpIHtcblx0XHRpZih2YWx1ZSA9PSBudWxsKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMuX3VybCA9IHZhbHVlO1xuXHRcdHRoaXMuZWxlbWVudC5jc3MoJ2JhY2tncm91bmQtaW1hZ2UnLCBgdXJsKFwiJHt2YWx1ZX1cIilgKVxuXHR9XG5cblx0Z2V0IHVybCgpIHtcblx0XHRyZXR1cm4gdGhpcy5fdXJsO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHR0aGlzLmVsZW1lbnQgPSAkKCc8ZGl2IC8+Jylcblx0XHRcdC5hZGRDbGFzcygnbGVwbGF5ZXItcG9zdGVyJyk7XG5cblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50O1xuXHR9XG5cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdQb3N0ZXInLCBQb3N0ZXIpO1xuZXhwb3J0IGRlZmF1bHQgUG9zdGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvUG9zdGVyLmpzIiwiLyoqXG4gKiBAZmlsZSBmdWxsc2NyZWVuLWFwaS5qc1xuICovXG5cblxuLypcbiAqIFN0b3JlIHRoZSBicm93c2VyLXNwZWNpZmljIG1ldGhvZHMgZm9yIHRoZSBmdWxsc2NyZWVuIEFQSVxuICogQHR5cGUge09iamVjdHx1bmRlZmluZWR9XG4gKiBAcHJpdmF0ZVxuICovXG5sZXQgRnVsbHNjcmVlbkFwaSA9IHt9O1xuXG4vLyBicm93c2VyIEFQSSBtZXRob2RzXG4vLyBtYXAgYXBwcm9hY2ggZnJvbSBTY3JlZW5mdWwuanMgLSBodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL3NjcmVlbmZ1bGwuanNcbmNvbnN0IGFwaU1hcCA9IFtcblx0Ly8gU3BlYzogaHR0cHM6Ly9kdmNzLnczLm9yZy9oZy9mdWxsc2NyZWVuL3Jhdy1maWxlL3RpcC9PdmVydmlldy5odG1sXG5cdFtcblx0XHQncmVxdWVzdEZ1bGxzY3JlZW4nLFxuXHRcdCdleGl0RnVsbHNjcmVlbicsXG5cdFx0J2Z1bGxzY3JlZW5FbGVtZW50Jyxcblx0XHQnZnVsbHNjcmVlbkVuYWJsZWQnLFxuXHRcdCdmdWxsc2NyZWVuY2hhbmdlJyxcblx0XHQnZnVsbHNjcmVlbmVycm9yJ1xuXHRdLFxuXHQvLyBXZWJLaXRcblx0W1xuXHRcdCd3ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbicsXG5cdFx0J3dlYmtpdEV4aXRGdWxsc2NyZWVuJyxcblx0XHQnd2Via2l0RnVsbHNjcmVlbkVsZW1lbnQnLFxuXHRcdCd3ZWJraXRGdWxsc2NyZWVuRW5hYmxlZCcsXG5cdFx0J3dlYmtpdGZ1bGxzY3JlZW5jaGFuZ2UnLFxuXHRcdCd3ZWJraXRmdWxsc2NyZWVuZXJyb3InXG5cdF0sXG5cdC8vIE9sZCBXZWJLaXQgKFNhZmFyaSA1LjEpXG5cdFtcblx0XHQnd2Via2l0UmVxdWVzdEZ1bGxTY3JlZW4nLFxuXHRcdCd3ZWJraXRDYW5jZWxGdWxsU2NyZWVuJyxcblx0XHQnd2Via2l0Q3VycmVudEZ1bGxTY3JlZW5FbGVtZW50Jyxcblx0XHQnd2Via2l0Q2FuY2VsRnVsbFNjcmVlbicsXG5cdFx0J3dlYmtpdGZ1bGxzY3JlZW5jaGFuZ2UnLFxuXHRcdCd3ZWJraXRmdWxsc2NyZWVuZXJyb3InXG5cdF0sXG5cdC8vIE1vemlsbGFcblx0W1xuXHRcdCdtb3pSZXF1ZXN0RnVsbFNjcmVlbicsXG5cdFx0J21vekNhbmNlbEZ1bGxTY3JlZW4nLFxuXHRcdCdtb3pGdWxsU2NyZWVuRWxlbWVudCcsXG5cdFx0J21vekZ1bGxTY3JlZW5FbmFibGVkJyxcblx0XHQnbW96ZnVsbHNjcmVlbmNoYW5nZScsXG5cdFx0J21vemZ1bGxzY3JlZW5lcnJvcidcblx0XSxcblx0Ly8gTWljcm9zb2Z0XG5cdFtcblx0XHQnbXNSZXF1ZXN0RnVsbHNjcmVlbicsXG5cdFx0J21zRXhpdEZ1bGxzY3JlZW4nLFxuXHRcdCdtc0Z1bGxzY3JlZW5FbGVtZW50Jyxcblx0XHQnbXNGdWxsc2NyZWVuRW5hYmxlZCcsXG5cdFx0J01TRnVsbHNjcmVlbkNoYW5nZScsXG5cdFx0J01TRnVsbHNjcmVlbkVycm9yJ1xuXHRdXG5dO1xuXG5cbmxldCBzcGVjQXBpID0gYXBpTWFwWzBdO1xuXG5sZXQgYnJvd3NlckFwaTtcblxuLy8gZGV0ZXJtaW5lIHRoZSBzdXBwb3J0ZWQgc2V0IG9mIGZ1bmN0aW9uc1xuZm9yIChsZXQgaSA9IDA7IGkgPCBhcGlNYXAubGVuZ3RoOyBpKyspIHtcblx0Ly8gY2hlY2sgZm9yIGV4aXRGdWxsc2NyZWVuIGZ1bmN0aW9uXG5cdGlmIChhcGlNYXBbaV1bMV0gaW4gZG9jdW1lbnQpIHtcblx0XHRicm93c2VyQXBpID0gYXBpTWFwW2ldO1xuXHRcdGJyZWFrO1xuXHR9XG59XG5cbi8vIG1hcCB0aGUgYnJvd3NlciBBUEkgbmFtZXMgdG8gdGhlIHNwZWMgQVBJIG5hbWVzXG5pZiAoYnJvd3NlckFwaSkge1xuXHRmb3IgKGxldCBpPTA7IGk8YnJvd3NlckFwaS5sZW5ndGg7IGkrKykge1xuXHRcdEZ1bGxzY3JlZW5BcGlbc3BlY0FwaVtpXV0gPSBicm93c2VyQXBpW2ldO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZ1bGxzY3JlZW5BcGk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvRnVsbHNjcmVlbkFwaS5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgY29va2llLWNvbnRyb2wuanNcbiAqXG4gKiBAY2xhcyBDb29raWVcbiAqL1xuY2xhc3MgQ29va2llIHtcblx0LyoqXG5cdCAqIEBwdWJsaWNcblx0ICpcblx0ICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgTmFtZSBvZiBjb29raWVcblx0ICogQHBhcmFtIHtTdHJpbmd9IFtkZmx0XSBSZXR1cm4gZGVmYXVsdCB2YWx1ZSBpZiB0aGlzIGZpZWxkIGlzIGVtcHR5XG5cdCAqXG5cdCAqL1xuXHRzdGF0aWMgZ2V0IChuYW1lLCBkZmx0KSB7XG5cdFx0bGV0IGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKTtcblx0XHRmb3IgKGxldCBpIGluIGNvb2tpZXMpIHtcblx0XHRcdHZhciBkID0gY29va2llc1sgaSBdLnRyaW0oKS5zcGxpdCgnPScpO1xuXHRcdFx0aWYgKGRbIDAgXSA9PT0gJ2xlcGxheWVyXycgKyBuYW1lKVxuXHRcdFx0XHRyZXR1cm4gZFsgMSBdO1xuXHRcdH1cblx0XHRyZXR1cm4gZGZsdDtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcHVibGljXG5cdCAqXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIEtleVxuXHQgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgVmFsdWVcblx0ICovXG5cdHN0YXRpYyBzZXQgKG5hbWUsIHZhbHVlKSB7XG5cdFx0dmFyIGQgPSBuZXcgRGF0ZSgpO1xuXHRcdGQuc2V0RGF0ZShkLnllYXIgKyAxKTtcblx0XHRkb2N1bWVudC5jb29raWUgPSAnbGVwbGF5ZXJfJyArIG5hbWUgKyAnPScgKyB2YWx1ZSArICc7ZXhwaXJlcz0nICsgZC50b1N0cmluZygpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvb2tpZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy91dGlscy9jb29raWUuanMiLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5jbGFzcyBNZWRpYUVycm9yIHtcblx0Y29uc3RydWN0b3IodmFsdWUpIHtcblx0XHRpZih2YWx1ZSBpbnN0YW5jZW9mIE1lZGlhRXJyb3IpIHtcblx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdHRoaXMuY29kZSA9IHZhbHVlO1xuXHRcdH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuXHRcdC8vIGRlZmF1bHQgY29kZSBpcyB6ZXJvLCBzbyB0aGlzIGlzIGEgY3VzdG9tIGVycm9yXG5cdFx0XHR0aGlzLm1lc3NhZ2UgPSB2YWx1ZTtcblx0XHR9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcblxuXHRcdFx0Ly8gV2UgYXNzaWduIHRoZSBgY29kZWAgcHJvcGVydHkgbWFudWFsbHkgYmVjYXVzZSBuYXRpdmUgTWVkaWFFcnJvciBvYmplY3RzXG5cdFx0XHQvLyBkbyBub3QgZXhwb3NlIGl0IGFzIGFuIG93bi9lbnVtZXJhYmxlIHByb3BlcnR5IG9mIHRoZSBvYmplY3QuXG5cdFx0XHRpZiAodHlwZW9mIHZhbHVlLmNvZGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdHRoaXMuY29kZSA9IHZhbHVlLmNvZGU7XG5cdFx0XHR9XG5cblx0XHRcdCQuZXh0ZW5kKHRoaXMsIHZhbHVlKTtcblx0XHR9XG5cblx0XHRpZiAoIXRoaXMubWVzc2FnZSkge1xuXHRcdFx0dGhpcy5tZXNzYWdlID0gTWVkaWFFcnJvci5kZWZhdWx0TWVzc2FnZXNbdGhpcy5jb2RlXSB8fCAnJztcblx0XHR9XG5cdH1cbn1cblxuTWVkaWFFcnJvci5wcm90b3R5cGUuY29kZSA9IDA7XG5cbk1lZGlhRXJyb3IucHJvdG90eXBlLm1lc3NhZ2UgPSAnJztcblxuTWVkaWFFcnJvci5lcnJvclR5cGVzID0gW1xuXHQnTUVESUFfRVJSX0NVU1RPTScsXG5cdCdNRURJQV9FUlJfQUJPUlRFRCcsXG5cdCdNRURJQV9FUlJfTkVUV09SSycsXG5cdCdNRURJQV9FUlJfREVDT0RFJyxcblx0J01FRElBX0VSUl9TUkNfTk9UX1NVUFBPUlRFRCcsXG5cdCdNRURJQV9FUlJfRU5DUllQVEVEJ1xuXTtcblxuXG5NZWRpYUVycm9yLmRlZmF1bHRNZXNzYWdlcyA9IHtcblx0MSA6ICfQktGLINC/0YDQtdGA0LLQsNC70Lgg0LfQsNCz0YDRg9C30LrRgyDQstC40LTQtdC+LicsXG5cdDIgOiAn0JfQsNCz0YDRg9C30LrQsCDQstC40LTQtdC+INC/0YDQtdGA0LLQsNC90LAg0LjQty3Qt9CwINC/0L7RgtC10YDQuCDRgdC+0LXQtNC40L3QtdC90LjRjy4nLFxuXHQzIDogJ9CX0LDQs9GA0YPQt9C60LAg0LLQuNC00LXQviDQvtGB0YLQsNC90L7QstC70LXQvdCwINC40Lct0LfQsCDQv9GA0L7QsdC70LXQvCDRgSDQstC40LTQtdC+0YTQsNC50LvQvtC8INC40LvQuCDQuNC3LdC30LAg0YLQvtCz0L4sINGH0YLQviDQstCw0Ygg0LHRgNCw0YPQt9C10YAg0L3QtSDQv9C+0LTQtNC10YDQttC40LLQsNC10YIg0LLQvtGB0L/RgNC+0LjQt9Cy0LXQtNC10L3QuNC1INC00LDQvdC90L7Qs9C+INGE0LDQudC70LAuJyxcblx0NCA6ICfQktC40LTQtdC+INC90LUg0LzQvtC20LXRgiDQsdGL0YLRjCDQt9Cw0LPRgNGD0LbQtdC90L4g0LjQty3Qt9CwINC/0YDQvtCx0LvQtdC8INGBINC40L3RgtC10YDQvdC10YIt0YHQvtC10LTQuNC90LXQvdC40LXQvCDQuNC70Lgg0L/RgNC+0LHQu9C10Lwg0L3QsCDRgdC10YDQstC10YDQtS4g0JjQu9C4INGE0L7RgNC80LDRgiDRhNCw0LnQu9CwINC90LUg0L/QvtC00LTQtdGA0LbQuNCy0LDQtdGC0YHRjyDQstCw0YjQuNC8INCx0YDQsNGD0LfQtdGA0L7QvC4nLFxuXHQ1IDogJ9CS0LjQtNC10L4g0LfQsNGI0LjRhNGA0L7QstCw0L3Qviwg0Lgg0LzRiyDQvdC1INC80L7QttC10Lwg0LXQs9C+INGA0LDRgdGI0LjRhNGA0L7QstCw0YLRjC4nXG59O1xuXG4vLyBBZGQgdHlwZXMgYXMgcHJvcGVydGllcyBvbiBNZWRpYUVycm9yXG4vLyBlLmcuIE1lZGlhRXJyb3IuTUVESUFfRVJSX1NSQ19OT1RfU1VQUE9SVEVEID0gNDtcbmZvciAobGV0IGVyck51bSA9IDA7IGVyck51bSA8IE1lZGlhRXJyb3IuZXJyb3JUeXBlcy5sZW5ndGg7IGVyck51bSsrKSB7XG5cdE1lZGlhRXJyb3JbTWVkaWFFcnJvci5lcnJvclR5cGVzW2Vyck51bV1dID0gZXJyTnVtO1xuXHQvLyB2YWx1ZXMgc2hvdWxkIGJlIGFjY2Vzc2libGUgb24gYm90aCB0aGUgY2xhc3MgYW5kIGluc3RhbmNlXG5cdE1lZGlhRXJyb3IucHJvdG90eXBlW01lZGlhRXJyb3IuZXJyb3JUeXBlc1tlcnJOdW1dXSA9IGVyck51bTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVkaWFFcnJvcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9NZWRpYUVycm9yLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBQbGF5Q29udHJvbC5qc1xuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCBDb250cm9sIGZyb20gJy4vQ29udHJvbCc7XG5cbi8qKlxuICogQGNsYXNzIFBsYXlDb250cm9sXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAZXh0ZW5kcyBDb250cm9sXG4gKi9cbmNsYXNzIFBsYXlDb250cm9sIGV4dGVuZHMgQ29udHJvbCB7XG5cdGNvbnN0cnVjdG9yIChwbGF5ZXIsIG9wdGlvbnM9e30pIHtcblx0XHRvcHRpb25zID0gJC5leHRlbmQoe30sIHtcblx0XHRcdGljb25OYW1lIDogJ3BsYXknLFxuXHRcdFx0dGl0bGUgOiAn0JLQvtGB0L/RgNC+0LjQt9Cy0LXRgdGC0Lgg0LLQuNC00LXQvicsXG5cdFx0XHRjbGFzc05hbWUgOiAncGxheScsXG5cdFx0XHRuYW1lIDogJ3BsYXknXG5cdFx0fSwgb3B0aW9ucyk7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblxuXHRcdHRoaXMucGxheWVyLm9uKFxuXHRcdFx0YHBsYXkgcGxheWluZyBwYXVzZSBlbmRlZCBzZWVraW5nIGxvYWRzdGFydGAsXG5cdFx0XHR0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpXG5cdFx0KVxuXHR9XG5cblxuXHQvKipcblx0ICogUGF1c2UgdGhlIHZpZGVvXG5cdCAqL1xuXHRzaG93UGxheSAoKSB7XG5cdFx0aWYodGhpcy5pY29uLmljb25OYW1lID09PSAncGxheScpIHJldHVybjtcblx0XHR0aGlzLmljb24uaWNvbk5hbWUgPSAncGxheSc7XG5cdFx0dGhpcy5lbGVtZW50LmF0dHIoJ3RpdGxlJywgdGhpcy5vcHRpb25zLnRpdGxlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBQbGF5IHRoZSB2aWRlb1xuXHQgKi9cblx0c2hvd1BhdXNlICgpIHtcblx0XHRpZih0aGlzLmljb24uaWNvbk5hbWUgPT09ICdwYXVzZScpIHJldHVybjtcblx0XHR0aGlzLmljb24uaWNvbk5hbWUgPSAncGF1c2UnO1xuXHRcdHRoaXMuZWxlbWVudC5hdHRyKCd0aXRsZScsICfQn9C+0YHRgtCw0LLQuNGC0Ywg0L3QsCDQv9Cw0YPQt9GDJyk7XG5cdH1cblxuXHR1cGRhdGUoKSB7XG5cdFx0aWYgKHRoaXMucGxheWVyLmVuZGVkKSB7XG5cdFx0XHR0aGlzLnNob3dSZXBsYXkoKTtcblx0XHR9IGVsc2UgaWYodGhpcy5wbGF5ZXIucGF1c2VkKSB7XG5cdFx0XHR0aGlzLnNob3dQbGF5KCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2hvd1BhdXNlKCk7XG5cdFx0fVxuXHR9XG5cblx0c2hvd1JlcGxheSgpIHtcblx0XHRpZih0aGlzLmljb24uaWNvbk5hbWUgPT09ICdyZWZyZXNoJykgcmV0dXJuO1xuXHRcdGlmKHRoaXMucGxheWVyLmR1cmF0aW9uICE9PSBJbmZpbml0eSkge1xuXHRcdFx0dGhpcy5fcmVwbGF5ID0gdHJ1ZTtcblx0XHRcdHRoaXMuaWNvbi5pY29uTmFtZSA9ICdyZWZyZXNoJztcblx0XHRcdHRoaXMuZWxlbWVudC5hdHRyKCd0aXRsZScsICfQl9Cw0L/Rg9GB0YLQuNGC0Ywg0LfQsNC90L7QstC+Jylcblx0XHR9XG5cdH1cblxuXHRyZW1vdmVSZXBsYXkoKSB7XG5cdFx0aWYoIXRoaXMuX3JlcGxheSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0aGlzLl9yZXBsYXkgPSBmYWxzZTtcblxuXHRcdGlmKHRoaXMucGxheWVyLnZpZGVvLnBhdXNlZCkge1xuXHRcdFx0dGhpcy5zaG93UGxheSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnNob3dQYXVzZSgpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdG9uQ2xpY2soZSkge1xuXHRcdHRoaXMucGxheWVyLnZpZGVvLnRvZ2dsZVBsYXkoKTtcblx0fVxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ1BsYXlDb250cm9sJywgUGxheUNvbnRyb2wpO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ3BsYXknLCBQbGF5Q29udHJvbCk7XG5leHBvcnQgZGVmYXVsdCBQbGF5Q29udHJvbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL1BsYXlDb250cm9sLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBWb2x1bWVDb250cm9sLmpzXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9Db250cm9sJztcbmltcG9ydCBDb250cm9sRHJvcGRvd24gZnJvbSAnLi9Db250cm9sRHJvcGRvd24nO1xuaW1wb3J0IHsgSVNfQU5EUk9JRF9QSE9ORSB9IGZyb20gJy4uL3V0aWxzL2Jyb3dzZXInO1xuXG5cbi8qKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQGNsYXNzIFZvbHVtZUNvbnRyb2xcbiAqIEBleHRlbmRzIENvbnRyb2xEcm9wZG93blxuICovXG5jbGFzcyBWb2x1bWVDb250cm9sIGV4dGVuZHMgQ29udHJvbERyb3Bkb3duIHtcblxuXHRjb25zdHJ1Y3RvciAocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRpY29uTmFtZSA6ICd2b2x1bWUtZG93bicsXG5cdFx0XHRjbGFzc05hbWUgOiAndm9sdW1lLWNvbnRyb2wnLFxuXHRcdFx0bmFtZSA6ICd2b2x1bWUnXG5cdFx0fSwgb3B0aW9ucyk7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblxuXHRcdGlmKCFwbGF5ZXIudmlkZW8uZmVhdHVyZUNvbnRyb2xWb2x1bWUgfHwgSVNfQU5EUk9JRF9QSE9ORSkge1xuXHRcdFx0dGhpcy5lbGVtZW50LmhpZGUoKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLnBsYXllci5vbigndm9sdW1lY2hhbmdlJywgKGUsIGRhdGEpID0+IHtcblx0XHRcdGNvbnN0IHZpZGVvID0gdGhpcy5wbGF5ZXIudmlkZW87XG5cdFx0XHR0aGlzLnZhbHVlID0gdmlkZW8ubXV0ZWQgPyAwIDogdmlkZW8udm9sdW1lO1xuXHRcdH0pXG5cdH1cblxuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdHN1cGVyLmNyZWF0ZUVsZW1lbnQoKTtcblx0XHRsZXQgZHJhZyA9IGZhbHNlO1xuXHRcdGNvbnN0IHZpZGVvID0gdGhpcy5wbGF5ZXIudmlkZW87XG5cblx0XHR0aGlzLm1hcmtlciA9ICQoJzxkaXYvPicpLmFkZENsYXNzKCd2b2x1bWUtbWFya2VyJyk7XG5cblx0XHR0aGlzLmFjdGl2ZSA9ICQoJzxkaXYvPicpLmFkZENsYXNzKCd2b2x1bWUtYWN0aXZlJyk7XG5cblx0XHR0aGlzLmxpbmUgPSAkKCc8ZGl2Lz4nKVxuXHRcdFx0LmFkZENsYXNzKCd2b2x1bWUtbGluZScpXG5cdFx0XHQuYXBwZW5kKHRoaXMuYWN0aXZlKVxuXHRcdFx0LmFwcGVuZCh0aGlzLm1hcmtlcilcblx0XHRcdC5vbignY2xpY2snLCAoZSkgPT4ge1xuXHRcdFx0XHRpZiAoZHJhZykgcmV0dXJuO1xuXHRcdFx0XHRsZXQgcCA9IHRoaXMuZ2V0UG9zaXRpb24oZS5wYWdlWSk7XG5cdFx0XHRcdGlmIChwID49IDAgJiYgcCA8PSAxKSB7XG5cdFx0XHRcdFx0aWYodmlkZW8ubXV0ZWQpIHtcblx0XHRcdFx0XHRcdHZpZGVvLm11dGVkID0gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHZpZGVvLnZvbHVtZSA9IDEgLSBwO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuZHJvcGRvd25Db250ZW50XG5cdFx0XHQuYWRkQ2xhc3MoJ3ZvbHVtZS1zbGlkZXInKVxuXHRcdFx0LmFwcGVuZCh0aGlzLmxpbmUpO1xuXG5cdFx0dGhpcy5pY29uLmVsZW1lbnQuYXR0cigndGl0bGUnLCAn0J7RgtC60LvRjtGH0LjRgtGMINC30LLRg9C6Jyk7XG5cblx0XHR0aGlzLm1hcmtlci5vbignbW91c2Vkb3duJywgKGUpID0+IHtcblx0XHRcdGlmIChlLndoaWNoICE9PSAxKSByZXR1cm47XG5cdFx0XHRkcmFnID0gdHJ1ZTtcblx0XHR9KTtcblxuXHRcdCQoZG9jdW1lbnQpLm9uKHtcblx0XHRcdG1vdXNlbW92ZSA6IChlKSA9PiB7XG5cdFx0XHRcdGlmICghZHJhZykgcmV0dXJuO1xuXHRcdFx0XHRsZXQgcCA9IHRoaXMuZ2V0UG9zaXRpb24oZS5wYWdlWSk7XG5cdFx0XHRcdGlmIChwID49IDAgJiYgcCA8PSAxKSB7XG5cdFx0XHRcdFx0aWYodmlkZW8ubXV0ZWQpIHtcblx0XHRcdFx0XHRcdHZpZGVvLm11dGVkID0gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHZpZGVvLnZvbHVtZSA9IDEgLSBwXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cblx0XHRcdG1vdXNldXAgOiAoZSkgPT4ge1xuXHRcdFx0XHRkcmFnID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudDtcblx0fVxuXG5cblx0c2V0IHZhbHVlICh2YWx1ZSkge1xuXHRcdHRoaXMuaWNvbi5pY29uTmFtZSA9IHRoaXMucGxheWVyLmNhbGNWb2x1bWVJY29uKHZhbHVlKTtcblxuXHRcdGxldCBwID0gTWF0aC5yb3VuZCh2YWx1ZSAqIDEwMCkudG9TdHJpbmcoKSArICclJztcblx0XHR0aGlzLmFjdGl2ZS5jc3MoJ2hlaWdodCcsIHApO1xuXHRcdHRoaXMubWFya2VyLmNzcygnYm90dG9tJywgcCk7XG5cdH1cblxuXHR0b2dnbGVNdXRlZCAoKSB7XG5cdFx0Y29uc3QgeyB2aWRlbyB9ID0gdGhpcy5wbGF5ZXI7XG5cblx0XHR2aWRlby5tdXRlZCA9ICF2aWRlby5tdXRlZDtcblx0fVxuXG5cdGdldFBvc2l0aW9uICh5KSB7XG5cdFx0cmV0dXJuICh5IC0gdGhpcy5saW5lLm9mZnNldCgpLnRvcCkgLyB0aGlzLmxpbmUuaGVpZ2h0KCk7XG5cdH1cblxuXHRvbkNsaWNrIChlKSB7XG5cdFx0c3VwZXIub25DbGljayhlKTtcblx0XHQvL3RvZG86IGxlYV9hbGV4IGtvc3RpbCdcblx0XHRpZiAoZS50YXJnZXQgPT09IHRoaXMuaWNvbi5lbGVtZW50WzBdKXtcblx0XHRcdHRoaXMudG9nZ2xlTXV0ZWQoKTtcblx0XHR9XG5cblx0fVxuXG5cdG9uUGxheWVySW5pdGVkKCkge1xuXHRcdGlmKCF0aGlzLnBsYXllci52aWRlby5mZWF0dXJlQ29udHJvbFZvbHVtZSkge1xuXHRcdFx0dGhpcy5lbGVtZW50LmhpZGUoKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy52YWx1ZSA9IHRoaXMucGxheWVyLnZpZGVvLmRlZmF1bHRWb2x1bWU7XG5cdH1cblxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ1ZvbHVtZUNvbnRyb2wnLCBWb2x1bWVDb250cm9sKTtcbkNvbnRyb2wucmVnaXN0ZXJDb250cm9sKCd2b2x1bWUnLCBWb2x1bWVDb250cm9sKTtcbmV4cG9ydCBkZWZhdWx0IFZvbHVtZUNvbnRyb2w7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9Wb2x1bWVDb250cm9sLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBDb250cm9sRHJvcGRvd24uanNcbiAqL1xuXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL0NvbnRyb2wnO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgeyBJU19NT0JJTEUgfSBmcm9tICcuLi91dGlscy9icm93c2VyJztcblxuLyoqXG4gKiBAY2xhc3MgQ29udHJvbERyb3Bkb3duXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAcHJvcGVydHkge2pRdWVyeX0gZHJvcGRvd25Db250ZW50IENvbnRlbnQgb2YgcG9wdXBcbiAqIEBleHRlbmRzIENvbnRyb2xcbiAqL1xuY2xhc3MgQ29udHJvbERyb3Bkb3duIGV4dGVuZHMgQ29udHJvbCB7XG5cblx0Y29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHR0YWcgOiAnZGl2Jyxcblx0XHR9LCBvcHRpb25zKTtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXHRcdHRoaXMuX29wZW5lZCA9IGZhbHNlO1xuXHRcdHRoaXMuZWxlbWVudC5vbignbW91c2VlbnRlcicsIHRoaXMub3Blbi5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ21vdXNlbGVhdmUnLCB0aGlzLmNsb3NlLmJpbmQodGhpcykpO1xuXHRcdGlmKElTX01PQklMRSkge1xuXHRcdFx0dGhpcy5lbGVtZW50Lm9uKCd0YXAnLCB0aGlzLnRvZ2dsZS5iaW5kKHRoaXMpKTtcblx0XHRcdCQoZG9jdW1lbnQpLm9uKCd0b3VjaGVuZCB0b3VjaHN0YXJ0IGNsaWNrJywgdGhpcy5vbkRvY3VtZW50RXZlbnRzLmJpbmQodGhpcykpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0c3VwZXIuY3JlYXRlRWxlbWVudCgpO1xuXHRcdHRoaXMuZHJvcGRvd25Db250ZW50ID0gJCgnPGRpdiAvPicpLmFkZENsYXNzKCdjb250cm9sLWRyb3Bkb3duX19jb250ZW50Jyk7XG5cdFx0dGhpcy5lbGVtZW50LmFwcGVuZCh0aGlzLmRyb3Bkb3duQ29udGVudCk7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRidWlsZENTU0NsYXNzKCkge1xuXHRcdHJldHVybiBgY29udHJvbC1kcm9wZG93biAke3N1cGVyLmJ1aWxkQ1NTQ2xhc3MoKX1gXG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRvbkNsaWNrKGUpIHtcblx0XHRpZigkKGUudGFyZ2V0KS5jbG9zZXN0KHRoaXMuZHJvcGRvd25Db250ZW50KS5sZW5ndGggPiAwKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0c3VwZXIub25DbGljayhlKTtcblx0fVxuXG5cdHRvZ2dsZSgpIHtcblx0XHRpZih0aGlzLmRpc2FibGUpIHRydWU7XG5cdFx0aWYodGhpcy5fb3BlbmVkKSB7XG5cdFx0XHR0aGlzLmNsb3NlKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMub3BlbigpO1xuXHRcdH1cblx0fVxuXG5cdG9wZW4oKSB7XG5cdFx0aWYodGhpcy5kaXNhYmxlKSByZXR1cm47XG5cdFx0dGhpcy5fb3BlbmVkID0gdHJ1ZTtcblx0XHR0aGlzLmRyb3Bkb3duQ29udGVudC5zaG93KCk7XG5cdH1cblxuXHRjbG9zZSgpIHtcblx0XHRpZih0aGlzLmRpc2FibGUpIHJldHVybjtcblx0XHR0aGlzLl9vcGVuZWQgPSBmYWxzZTtcblx0XHR0aGlzLmRyb3Bkb3duQ29udGVudC5oaWRlKCk7XG5cdH1cblxuXHRvbkRvY3VtZW50RXZlbnRzKGUpIHtcblx0XHRpZihcblx0XHRcdCEoJChlLnRhcmdldCkuY2xvc2VzdCh0aGlzLmVsZW1lbnQpLmxlbmd0aCA+IDApICYmXG5cdFx0XHQhKCQoZS50YXJnZXQpLmNsb3Nlc3QodGhpcy5kcm9wZG93bkNvbnRlbnQpLmxlbmd0aCA+IDApXG5cdFx0KSB7XG5cdFx0XHRpZih0aGlzLl9vcGVuZWQpe1xuXHRcdFx0XHR0aGlzLmNsb3NlKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdDb250cm9sRHJvcGRvd24nLCBDb250cm9sRHJvcGRvd24pO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ2Ryb3Bkb3duJywgQ29udHJvbERyb3Bkb3duKTtcbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xEcm9wZG93bjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL0NvbnRyb2xEcm9wZG93bi5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgVGltZWxpbmVDb250cm9sLmpzXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vQ29tcG9uZW50JztcbmltcG9ydCBDb250cm9sIGZyb20gJy4uL0NvbnRyb2wnO1xuaW1wb3J0IENvbnRyb2xUZXh0IGZyb20gJy4uL0NvbnRyb2xUZXh0JztcbmltcG9ydCBCdWZmZXJlZFJhbmdlcyBmcm9tICcuL0J1ZmZlcmVkUmFuZ2VzJztcbmltcG9ydCBNYXJrZXIgZnJvbSAnLi9NYXJrZXInO1xuaW1wb3J0IHsgc2Vjb25kc1RvVGltZSB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAY2xhc3MgVGltZWxpbmVDb250cm9sXG4gKiBAcHJvcGVydHkge0NvbnRyb2xUZXh0fSBjdXJyZW50VGltZSBDdXJyZW50IHRpbWUncyB0ZXh0XG4gKiBAcHJvcGVydHkge0NvbnRyb2xUZXh0fSB0b3RhbFRpbWUgVG90YWwgdGltZVxuICogQHByb3BlcnR5IHtqUXVlcnl9IGxpbmVcbiAqIEBleHRlbmRzIENvbnRyb2xcbiAqL1xuY2xhc3MgVGltZWxpbmVDb250cm9sIGV4dGVuZHMgQ29udHJvbCB7XG5cblx0Y29uc3RydWN0b3IgKHBsYXllciwgb3B0aW9ucz17fSkge1xuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0bmFtZSA6ICd0aW1lbGluZScsXG5cdFx0XHRjbGFzc05hbWUgOiAnY29udHJvbC10aW1lbGluZSB0aW1lbGluZS1jb250YWluZXInLFxuXHRcdFx0dGFnIDogJ2RpdicsXG5cdFx0fSwgb3B0aW9ucyk7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblxuXG5cdFx0dGhpcy5tYXJrZXIuZWxlbWVudC5vbignbGVwbGF5ZXJfbW91c2Vtb3ZlJywgdGhpcy5fb25NYXJrZXJNb3VzZW1vdmUuYmluZCh0aGlzKSk7XG5cblx0XHR0aGlzLm1hcmtlci5lbGVtZW50Lm9uKCdsZXBsYXllcl9tb3VzZWRvd24nLCB0aGlzLl9vbk1hcmtlck1vdXNlZG93bi5iaW5kKHRoaXMpKTtcblxuXHRcdHRoaXMucGxheWVyLm9uKCdzZWN0aW9uc2luaXQnLCB0aGlzLm9uU2VjdGlvbnNJbml0LmJpbmQodGhpcykpO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ3RpbWV1cGRhdGUnLCB0aGlzLl9vblRpbWVVcGRhdGUuYmluZCh0aGlzKSk7XG5cblx0XHQvLyB0aGlzLnBsYXllci5vbigndGltZXVwZGF0ZWxvYWQnLCB0aGlzLl9vblRpbWVVcGRhdGUuYmluZCh0aGlzKSlcblxuXHRcdHRoaXMucGxheWVyLm9uKCdkdXJhdGlvbmNoYW5nZScsIHRoaXMuX29uRHVyYXRpb25DaGFuZ2UuYmluZCh0aGlzKSk7XG5cdH1cblxuXHRfb25NYXJrZXJNb3VzZWRvd24oZSkge1xuXHRcdHRoaXMubWFya2VyU2hhZG93LmVsZW1lbnQuaGlkZSgpO1xuXHR9XG5cblx0X29uTWFya2VyTW91c2Vtb3ZlKGUsIGRhdGEpIHtcblx0XHRjb25zdCB4ID0gZGF0YS54O1xuXHRcdGNvbnN0IHAgPSB0aGlzLmdldFBvc2l0aW9uKHgpO1xuXHRcdGNvbnN0IHZpZGVvID0gdGhpcy5wbGF5ZXIudmlkZW87XG5cdFx0aWYgKHAgPiAwICYmIHAgPCAxKSB7XG5cdFx0XHR0aGlzLm1hcmtlci5tYXJrZXJUaW1lXG5cdFx0XHRcdC5zaG93KClcblx0XHRcdFx0Lmh0bWwoc2Vjb25kc1RvVGltZSh2aWRlby5kdXJhdGlvbiAqIHApKTtcblx0XHRcdC8vIHZpZGVvLmN1cnJlbnRUaW1lID0gdmlkZW8uZHVyYXRpb24gKiBwXG5cdFx0fVxuXHR9XG5cblx0X29uVGltZVVwZGF0ZShlLCBkYXRhKSB7XG5cdFx0Y29uc3QgZHVyYXRpb24gPSB0aGlzLnBsYXllci52aWRlby5kdXJhdGlvbjtcblx0XHRsZXQgY3VycmVudFRpbWUgPSB0aGlzLnBsYXllci5jdXJyZW50VGltZTtcblx0XHRpZihkYXRhICYmIGRhdGEuY3VycmVudFRpbWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0Y3VycmVudFRpbWUgPSBkYXRhLmN1cnJlbnRUaW1lO1xuXHRcdH1cblx0XHRsZXQgcGVyY2VudCA9IGN1cnJlbnRUaW1lIC8gZHVyYXRpb247XG5cblx0XHRpZihpc05hTihkdXJhdGlvbikgJiYgY3VycmVudFRpbWUgPT09IDApIHBlcmNlbnQgPSAwO1xuXG5cdFx0dGhpcy5tb3ZlKHsgcGVyY2VudCwgY3VycmVudFRpbWUgfSk7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdHN1cGVyLmNyZWF0ZUVsZW1lbnQoKTtcblx0XHRsZXQgdmlkZW8gPSB0aGlzLnBsYXllci52aWRlbztcblxuXHRcdHRoaXMuZHJhZyA9IGZhbHNlO1xuXG5cdFx0Ly8gQ3JlYXRlIGxhYmVsc1xuXHRcdHRoaXMuY3VycmVudFRpbWUgPSBuZXcgQ29udHJvbFRleHQodGhpcy5wbGF5ZXIsIHsgY2xhc3NOYW1lIDogJ3RpbWUtY3VycmVudCcgfSk7XG5cdFx0dGhpcy5jdXJyZW50VGltZS50ZXh0ID0gJzAwOjAwJztcblx0XHR0aGlzLnRvdGFsVGltZSA9IG5ldyBDb250cm9sVGV4dCh0aGlzLnBsYXllciwge2NsYXNzTmFtZSA6ICd0aW1lLXRvdGFsJyB9KTtcblxuXHRcdC8vIENyZWF0ZSBsaW5lIHdpdGggbWFya2VycyBhbmQgcGxheWVkIHJhbmdlXG5cblx0XHR0aGlzLm1hcmtlciA9IG5ldyBNYXJrZXIodGhpcy5wbGF5ZXIsIHtcblx0XHRcdGRyYWcgOiB0cnVlXG5cdFx0fSk7XG5cblx0XHR0aGlzLm1hcmtlclNoYWRvdyA9IG5ldyBNYXJrZXIodGhpcy5wbGF5ZXIsIHtcblx0XHRcdGNsYXNzTmFtZSA6ICdzaGFkb3cnXG5cdFx0fSk7XG5cdFx0dGhpcy5tYXJrZXJTaGFkb3cuZWxlbWVudC5oaWRlKCk7XG5cblxuXHRcdC8vIFBsYXllZCByYW5nZXNcblx0XHR0aGlzLnBsYXllZFJhbmdlcyA9ICQoJzxkaXYgLz4nKS5hZGRDbGFzcygndGltZS1wbGF5ZWQnKTtcblxuXG5cdFx0Ly8gQnVmZmVyZWQgcmFuZ2VzXG5cdFx0dGhpcy5idWZmZXJlZFJhbmdlcyA9IG5ldyBCdWZmZXJlZFJhbmdlcyh0aGlzLnBsYXllcikuZWxlbWVudDtcblxuXHRcdHRoaXMubGluZSA9ICQoJzxkaXYgLz4nKTtcblx0XHR0aGlzLmVtaXRUYXBFdmVudHModGhpcy5saW5lKVxuXG5cdFx0dGhpcy5saW5lXG5cdFx0XHQuYWRkQ2xhc3MoJ3RpbWVsaW5lJylcblx0XHRcdC5hcHBlbmQodGhpcy5tYXJrZXIuZWxlbWVudClcblx0XHRcdC5hcHBlbmQodGhpcy5tYXJrZXJTaGFkb3cuZWxlbWVudClcblx0XHRcdC5hcHBlbmQodGhpcy5wbGF5ZWRSYW5nZXMpXG5cdFx0XHQuYXBwZW5kKHRoaXMuYnVmZmVyZWRSYW5nZXMpXG5cdFx0XHQub24oe1xuXHRcdFx0XHRtb3VzZW1vdmUgOiAoZSkgPT4ge1xuXHRcdFx0XHRcdGlmICh0aGlzLm1hcmtlci5kcmFnKSByZXR1cm47XG5cblx0XHRcdFx0XHRsZXQgcCA9IHRoaXMuZ2V0UG9zaXRpb24oZS5wYWdlWCk7XG5cdFx0XHRcdFx0aWYgKHAgPiAwICYmIHAgPCAxKSB7XG5cdFx0XHRcdFx0XHR0aGlzLm1hcmtlclNoYWRvdy5lbGVtZW50XG5cdFx0XHRcdFx0XHRcdC5zaG93KClcblx0XHRcdFx0XHRcdFx0LmNzcygnbGVmdCcsIHAgKiAxMDAgKyAnJScpO1xuXHRcdFx0XHRcdFx0dGhpcy5tYXJrZXJTaGFkb3dcblx0XHRcdFx0XHRcdFx0Lm1hcmtlclRpbWVcblx0XHRcdFx0XHRcdFx0LnNob3coKVxuXHRcdFx0XHRcdFx0XHQuaHRtbChzZWNvbmRzVG9UaW1lKHZpZGVvLmR1cmF0aW9uICogcCkpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aGlzLm1hcmtlclNoYWRvdy5lbGVtZW50LmhpZGUoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0bW91c2VsZWF2ZSA6IChlKSA9PiB7XG5cdFx0XHRcdFx0aWYgKHRoaXMuZHJhZykgcmV0dXJuO1xuXHRcdFx0XHRcdHRoaXMubWFya2VyU2hhZG93LmVsZW1lbnQuaGlkZSgpXG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0bW91c2Vkb3duIDogKGUpID0+IHtcblx0XHRcdFx0fSxcblxuXHRcdFx0XHRjbGljayA6IHRoaXMuX29uTGluZUNsaWNrLmJpbmQodGhpcyksXG5cdFx0XHRcdHRhcCA6IHRoaXMuX29uTGluZUNsaWNrLmJpbmQodGhpcyksXG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuZWxlbWVudC5hZGRDbGFzcygndGltZWxpbmUtY29udGFpbmVyJylcblx0XHRcdC5hcHBlbmQoJCgnPGRpdiAvPicpXG5cdFx0XHRcdC5hZGRDbGFzcygndGltZWxpbmUtc3ViY29udGFpbmVyJylcblx0XHRcdFx0LmFwcGVuZCh0aGlzLmN1cnJlbnRUaW1lLmVsZW1lbnQpXG5cdFx0XHRcdC5hcHBlbmQodGhpcy5saW5lKVxuXHRcdFx0XHQuYXBwZW5kKHRoaXMudG90YWxUaW1lLmVsZW1lbnQpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdG9uQ2xpY2soZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0fVxuXG5cdF9vbkxpbmVDbGljayhlKSB7XG5cdFx0aWYgKHRoaXMuZHJhZykgcmV0dXJuO1xuXHRcdGNvbnN0IHZpZGVvID0gdGhpcy5wbGF5ZXIudmlkZW87XG5cdFx0dGhpcy5tb3ZlKHsgcGVyY2VudCA6IHRoaXMuZ2V0UG9zaXRpb24oZS5wYWdlWCl9KTtcblx0XHR2aWRlby5jdXJyZW50VGltZSA9ICh2aWRlby5kdXJhdGlvbiAqIHRoaXMuZ2V0UG9zaXRpb24oZS5wYWdlWCkpO1xuXHR9XG5cblx0b25TZWN0aW9uc0luaXQoZSkge1xuXHRcdGNvbnN0IGR1cmF0aW9uID0gdGhpcy5wbGF5ZXIudmlkZW8uZHVyYXRpb247XG5cdFx0aWYoaXNOYU4oZHVyYXRpb24pKSB7XG5cdFx0XHRyZXR1cm5cblx0XHR9XG5cdFx0aWYgKHRoaXMucGxheWVyLnNlY3Rpb25zKSB7XG5cdFx0XHR0aGlzLnVwZGF0ZVNlY3Rpb25SYW5nZXModGhpcy5wbGF5ZXIuc2VjdGlvbnMuaXRlbXMpO1xuXHRcdH1cblx0fVxuXG5cdHVwZGF0ZVNlY3Rpb25SYW5nZXMoaXRlbXMpIHtcblx0XHRpZih0aGlzLnNlY3Rpb25zID09IG51bGwgfHwgdGhpcy5zZWN0aW9ucy5sZW5ndGggPT09IDApIHtcblx0XHRcdHRoaXMuc2VjdGlvbnMgPSB0aGlzLmNyZWF0ZVNlY3Rpb25SYW5nZXMoaXRlbXMpO1xuXHRcdFx0dGhpcy5saW5lLmFwcGVuZCh0aGlzLnNlY3Rpb25zKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zZWN0aW9ucy5odG1sKHRoaXMuY3JlYXRlU2VjdGlvblJhbmdlcyhpdGVtcykpO1xuXHRcdH1cblx0fVxuXG5cdGNyZWF0ZVNlY3Rpb25SYW5nZXMoaXRlbXMpIHtcblx0XHRjb25zdCBkdXJhdGlvbiA9IHRoaXMucGxheWVyLnZpZGVvLmR1cmF0aW9uO1xuXHRcdGxldCByZXN1bHQgPSAkKCc8ZGl2IC8+JykuYWRkQ2xhc3MoJ2xlcGxheWVyLXRpbWVsaW5lLXNlY3Rpb25zJyk7XG5cdFx0aXRlbXMuZm9yRWFjaCgoc2VjdGlvbikgPT4ge1xuXHRcdFx0Y29uc3QgbGVuZ3RoID0gKHNlY3Rpb24uZW5kIC0gc2VjdGlvbi5iZWdpbik7XG5cdFx0XHRjb25zdCBpdGVtID0gJCgnPGRpdiAvPicpXG5cdFx0XHRcdC5hZGRDbGFzcygnbGVwbGF5ZXItdGltZWxpbmUtc2VjdGlvbicpXG5cdFx0XHRcdC5jc3Moe1xuXHRcdFx0XHRcdHdpZHRoIDogbGVuZ3RoIC8gZHVyYXRpb24gKiAxMDAgKyAnJScsXG5cdFx0XHRcdFx0bGVmdCA6IHNlY3Rpb24uYmVnaW4gLyBkdXJhdGlvbiAqIDEwMCArICclJ1xuXHRcdFx0XHR9KTtcblx0XHRcdHJlc3VsdC5hcHBlbmQoaXRlbSk7XG5cdFx0fSlcblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0Z2V0UG9zaXRpb24gKHgpIHtcblx0XHRyZXR1cm4gKHggLSB0aGlzLmxpbmUub2Zmc2V0KCkubGVmdCkgLyB0aGlzLmxpbmUud2lkdGgoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBNb3ZlIG1hcmtlciBvbiB0aW1lbGluZSBvbiBwZXJjZW50IGZyb20gYXJndW1lbnQsIG5vdCBmcm9tIHZpZGVvLmN1cnJlbnRUaW1lXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBwZXJjZW50IFRoZSBwZXJjZW50IHdoaWNoIHlvdSB3YW50IHRvIG1vdmUgbWFya2VyIG9uIHRpbWVsaW5lXG5cdCAqL1xuXHRtb3ZlICh7IHBlcmNlbnQsIGN1cnJlbnRUaW1lIH0pIHtcblx0XHRpZihjdXJyZW50VGltZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRjdXJyZW50VGltZSA9IHRoaXMucGxheWVyLnZpZGVvLmR1cmF0aW9uICogcGVyY2VudDtcblx0XHR9XG5cblx0XHRpZihpc05hTihjdXJyZW50VGltZSkpIHJldHVybjtcblx0XHRwZXJjZW50ID0gcGVyY2VudCAqIDEwMDtcblx0XHR0aGlzLm1hcmtlci5lbGVtZW50LmNzcygnbGVmdCcsIHBlcmNlbnQgKyAnJScpO1xuXHRcdHRoaXMucGxheWVkUmFuZ2VzLmNzcygnd2lkdGgnLCBwZXJjZW50ICsgJyUnKTtcblx0XHR0aGlzLmN1cnJlbnRUaW1lLnRleHQgPSBzZWNvbmRzVG9UaW1lKGN1cnJlbnRUaW1lKTtcblx0fVxuXG5cdHVwZGF0ZUxhYmVscygpIHtcblx0XHRjb25zdCB2aWRlbyA9IHRoaXMucGxheWVyLnZpZGVvO1xuXHRcdHRoaXMudG90YWxUaW1lLnRleHQgPSBzZWNvbmRzVG9UaW1lKDAsIE1hdGguZmxvb3IodmlkZW8uZHVyYXRpb24gLyAzNjAwKSA+IDApO1xuXG5cdFx0Ly8gY29uc3Qgd2lkdGggPSB0aGlzLnRvdGFsVGltZS5lbGVtZW50LndpZHRoKCk7XG5cblx0XHR0aGlzLnRvdGFsVGltZS50ZXh0ID0gc2Vjb25kc1RvVGltZSh2aWRlby5kdXJhdGlvbik7XG5cdFx0dGhpcy5jdXJyZW50VGltZS50ZXh0ID0gc2Vjb25kc1RvVGltZSh2aWRlby5jdXJyZW50VGltZSB8fCAwKTtcblx0XHQvLyB0aGlzLmN1cnJlbnRUaW1lLmVsZW1lbnQuY3NzKHtcblx0XHQvLyBcdHdpZHRoXG5cdFx0Ly8gfSlcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdG9uUGxheWVySW5pdGVkKGUpIHtcblx0XHR0aGlzLnVwZGF0ZUxhYmVscygpO1xuXHRcdGlmICh0aGlzLnBsYXllci5zZWN0aW9ucykge1xuXHRcdFx0dGhpcy51cGRhdGVTZWN0aW9uUmFuZ2VzKHRoaXMucGxheWVyLnNlY3Rpb25zLml0ZW1zKTtcblx0XHR9XG5cdH1cblxuXHRfaW5pdFdhdGNoQnVmZmVyICgpIHtcblx0XHRjbGVhckludGVydmFsKHRoaXMud2F0Y2hCdWZmZXJJbnRlcnZhbCk7XG5cdFx0bGV0IHZpZGVvID0gdGhpcy5wbGF5ZXIudmlkZW87XG5cdFx0bGV0IHVwZGF0ZVByb2dyZXNzQmFyID0gKCkgPT4ge1xuXHRcdFx0Y29uc3QgRU5EID0gMTtcblx0XHRcdGNvbnN0IFNUQVJUID0gMDtcblx0XHRcdGxldCByZXN1bHQgPSAkKCcnKTtcblx0XHRcdHZpZGVvLmxvYWRlZC5mb3JFYWNoKGl0ZW0gPT4ge1xuXHRcdFx0XHRsZXQgZG9tSXRlbSA9ICQoJzxkaXYgLz4nKS5hZGRDbGFzcygndGltZS1idWZmZXJlZCcpO1xuXHRcdFx0XHRkb21JdGVtLmNzcyh7XG5cdFx0XHRcdFx0bGVmdCA6IGl0ZW1bU1RBUlRdICogMTAwICsgJyUnLFxuXHRcdFx0XHRcdHdpZHRoIDogKGl0ZW1bRU5EXSAtIGl0ZW1bU1RBUlRdKSAqIDEwMCArICclJ1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0cmVzdWx0ID0gcmVzdWx0LmFkZChkb21JdGVtKTtcblx0XHRcdH0pO1xuXHRcdFx0dGhpcy5idWZmZXJlZC5odG1sKHJlc3VsdCk7XG5cdFx0XHRpZiAodmlkZW8ubG9hZGVkLmxlbmd0aCAmJiAoMSAtIHZpZGVvLmxvYWRlZFNpemUpIDw9IDAuMDUpIHtcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLndhdGNoQnVmZmVySW50ZXJ2YWwpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHR0aGlzLndhdGNoQnVmZmVySW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCh1cGRhdGVQcm9ncmVzc0JhciwgNTAwKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBPbiBkdXJhdGlvbmNoYW5nZSBldmVudCBoYW5kbGVyXG5cdCAqL1xuXHRfb25EdXJhdGlvbkNoYW5nZSAoKSB7XG5cdFx0dGhpcy51cGRhdGVMYWJlbHMoKTtcblx0XHRpZiAodGhpcy5wbGF5ZXIuc2VjdGlvbnMpIHtcblx0XHRcdHRoaXMudXBkYXRlU2VjdGlvblJhbmdlcyh0aGlzLnBsYXllci5zZWN0aW9ucy5pdGVtcyk7XG5cdFx0fVxuXHR9XG5cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdUaW1lbGluZUNvbnRyb2wnLCBUaW1lbGluZUNvbnRyb2wpO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ3RpbWVsaW5lJywgVGltZWxpbmVDb250cm9sKTtcbmV4cG9ydCBkZWZhdWx0IFRpbWVsaW5lQ29udHJvbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL1RpbWVsaW5lL1RpbWVsaW5lQ29udHJvbC5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgQ29udHJvbFRleHQuanNcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9Db250cm9sJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBjbGFzcyBDb250cm9sVGV4dFxuICogQGV4bnRlZHMgQ29udHJvbFxuICovXG5jbGFzcyBDb250cm9sVGV4dCBleHRlbmRzIENvbnRyb2wge1xuXHRjb25zdHJ1Y3RvciAocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRjbGFzc05hbWUgOiAnJyxcblx0XHRcdHRhZyA6ICdkaXYnLFxuXHRcdH0sIG9wdGlvbnMpO1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdHN1cGVyLmNyZWF0ZUVsZW1lbnQoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGJ1aWxkQ1NTQ2xhc3MoKSB7XG5cdFx0cmV0dXJuIGBjb250cm9sLXRleHQgJHt0aGlzLm9wdGlvbnMuY2xhc3NOYW1lfWA7XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBTZXR0ZXIgb2YgdGV4dCBmaWVsZFxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuXHQgKi9cblxuXHRzZXQgdGV4dCAodmFsdWUpIHtcblx0XHR0aGlzLl90ZXh0ID0gdmFsdWU7XG5cdFx0dGhpcy5lbGVtZW50Lmh0bWwodmFsdWUpO1xuXHR9XG5cblx0Z2V0IHRleHQgKCkge1xuXHRcdHJldHVybiB0aGlzLl90ZXh0XG5cdH1cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdDb250cm9sVGV4dCcsIENvbnRyb2xUZXh0KTtcbkNvbnRyb2wucmVnaXN0ZXJDb250cm9sKCd0ZXh0JywgQ29udHJvbFRleHQpO1xuZXhwb3J0IGRlZmF1bHQgQ29udHJvbFRleHQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9Db250cm9sVGV4dC5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgQnVmZmVyZWRSYW5nZXMuanNcbiAqL1xuXG5pbXBvcnQgeyBwZXJjZW50aWZ5LCBjcmVhdGVFbCB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vQ29tcG9uZW50JztcblxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAY2xhc3MgQnVmZmVyZWRSYW5nZXNcbiAqIEBleHRlbmRzIENvbnRyb2xcbiAqL1xuXG5jbGFzcyBCdWZmZXJlZFJhbmdlcyBleHRlbmRzIENvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblxuXHRcdHRoaXMucGxheWVyLm9uKCdwcm9ncmVzcycsIHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xuXHRcdHRoaXMucGxheWVyLm9uKCdzZWVrZWQnLCB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLnBsYXllci5vbignbG9hZHN0YXJ0JywgdGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdHRoaXMucmFuZ2UgPSBjcmVhdGVFbCgnZGl2Jywge1xuXHRcdFx0Y2xhc3NOYW1lIDogJ2xlcGxheWVyLXRpbWVsaW5lLWJ1ZmZlcmVkX19yYW5nZSdcblx0XHR9KTtcblxuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQgPSBjcmVhdGVFbCgnZGl2Jywge1xuXHRcdFx0Y2xhc3NOYW1lIDogJ2xlcGxheWVyLXRpbWVsaW5lLWJ1ZmZlcmVkJ1xuXHRcdH0pLmFwcGVuZCh0aGlzLnJhbmdlKTtcblx0fVxuXG5cblx0dXBkYXRlKCkge1xuXHRcdGNvbnN0IGJ1ZmZlcmVkID0gdGhpcy5wbGF5ZXIudmlkZW8uYnVmZmVyZWQ7XG5cdFx0Y29uc3QgZHVyYXRpb24gPSB0aGlzLnBsYXllci52aWRlby5kdXJhdGlvbjtcblx0XHRpZihidWZmZXJlZCA9PSBudWxsKSByZXR1cm47XG5cblx0XHRsZXQgZW5kID0gMDtcblx0XHRpZiAoYnVmZmVyZWQubGVuZ3RoID4gMCkge1xuXHRcdFx0ZW5kID0gYnVmZmVyZWQuZW5kKGJ1ZmZlcmVkLmxlbmd0aCAtIDEpO1xuXHRcdH1cblxuXHRcdGxldCB3aWR0aCA9IDA7XG5cdFx0aWYgKGR1cmF0aW9uID4gMCkge1xuXHRcdFx0d2lkdGggPSBwZXJjZW50aWZ5KGVuZCwgZHVyYXRpb24pICogMTAwICsgJyUnXG5cdFx0fVxuXHRcdHRoaXMucmFuZ2UuY3NzKHsgd2lkdGggfSlcblx0fVxufVxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdCdWZmZXJlZFJhbmdlcycsIEJ1ZmZlcmVkUmFuZ2VzKTtcbmV4cG9ydCBkZWZhdWx0IEJ1ZmZlcmVkUmFuZ2VzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvVGltZWxpbmUvQnVmZmVyZWRSYW5nZXMuanMiLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9Db21wb25lbnQnO1xuXG5jbGFzcyBNYXJrZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcblxuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0ZHJhZyA6IGZhbHNlLFxuXHRcdFx0Y2xhc3NOYW1lIDogJydcblx0XHR9LCBvcHRpb25zKTtcblxuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdtb3VzZWRvd24nLCB0aGlzLl9vbk1vdXNlZG93bi5iaW5kKHRoaXMpKTtcblxuXHRcdCQoZG9jdW1lbnQpLm9uKHtcblxuXHRcdFx0bW91c2Vtb3ZlIDogKGUpID0+IHtcblx0XHRcdFx0aWYgKCF0aGlzLmRyYWcpIHJldHVybjtcblx0XHRcdFx0dGhpcy5lbGVtZW50LnRyaWdnZXIoJ2xlcGxheWVyX21vdXNlbW92ZScsIHsgeCA6IGUucGFnZVggfSk7XG5cdFx0XHR9LFxuXG5cdFx0XHRtb3VzZXVwIDogKGUpID0+IHtcblx0XHRcdFx0aWYgKCF0aGlzLmRyYWcpIHJldHVybjtcblx0XHRcdFx0dGhpcy5kcmFnID0gZmFsc2U7XG5cdFx0XHRcdHRoaXMubWFya2VyVGltZS5oaWRlKCk7XG5cdFx0XHRcdHRoaXMuZWxlbWVudC50cmlnZ2VyKCdsZXBsYXllcl9tb3VzZXVwJywgeyB4IDogZS5wYWdlWCB9KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdHNldCBkcmFnKHZhbHVlKSB7XG5cdFx0dGhpcy5fZHJhZyA9IHZhbHVlO1xuXHRcdHRoaXMuZWxlbWVudC50b2dnbGVDbGFzcygndGltZS1tYXJrZXItLWRyYWcnLCB2YWx1ZSk7XG5cdH1cblxuXHRnZXQgZHJhZygpIHtcblx0XHRyZXR1cm4gdGhpcy5fZHJhZztcblx0fVxuXG5cdF9vbk1vdXNlZG93bihlKSB7XG5cdFx0aWYgKGUud2hpY2ggIT09IDEpIHJldHVybjtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0aWYodGhpcy5vcHRpb25zLmRyYWcpIHtcblx0XHRcdHRoaXMuZHJhZyA9IHRydWU7XG5cdFx0fVxuXHRcdHRoaXMuZWxlbWVudC50cmlnZ2VyKCdsZXBsYXllcl9tb3VzZWRvd24nKTtcblx0fVxuXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0Ly8gTWFya2VyIG9mIGN1cnJlbnQgdGltZSBvbiB0aW1lbGluZVxuXHRcdHRoaXMubWFya2VyVGltZSA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0LmFkZENsYXNzKCd0aW1lJylcblx0XHRcdC5oaWRlKCk7XG5cblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50ID0gJCgnPGRpdiAvPicpXG5cdFx0XHQuYWRkQ2xhc3MoYHRpbWUtbWFya2VyICR7dGhpcy5vcHRpb25zLmNsYXNzTmFtZX1gKVxuXHRcdFx0LmFwcGVuZCh0aGlzLm1hcmtlclRpbWUpXG5cblx0fVxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ01hcmtlcicsIE1hcmtlcik7XG5leHBvcnQgZGVmYXVsdCBNYXJrZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9UaW1lbGluZS9NYXJrZXIuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIFNlY3Rpb25Db250cm9sLmpzXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9Db250cm9sJztcbmltcG9ydCBDb250cm9sQ2hlY2tib3ggZnJvbSAnLi9Db250cm9sQ2hlY2tib3gnO1xuXG4vKipcbiAqIEBjbGFzcyBTZWN0aW9uQ29udHJvbFxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5jaGVja2VkPXRydWVdXG4gKiBAZXh0ZW5kcyBDb250cm9sQ2hlY2tib3hcbiAqL1xuY2xhc3MgU2VjdGlvbkNvbnRyb2wgZXh0ZW5kcyBDb250cm9sQ2hlY2tib3gge1xuXHRjb25zdHJ1Y3RvciAocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRpY29uTmFtZSA6ICdsaXN0LXVsJyxcblx0XHRcdGNsYXNzTmFtZSA6ICdzZWN0aW9uJyxcblx0XHRcdG5hbWUgOiAnc2VjdGlvbicsXG5cdFx0XHR0aXRsZSA6ICfQn9C+0LrQsNC30LDRgtGML9GB0LrRgNGL0YLRjCDRgdC10LrRhtC40LgnLFxuXHRcdFx0ZGlzYWJsZSA6IHRydWVcblx0XHR9LCBvcHRpb25zKTtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ3NlY3Rpb25zaW5pdCcsIHRoaXMuX29uU2VjdGlvbnNJbml0LmJpbmQodGhpcykpO1xuXHRcdHRoaXMucGxheWVyLm9uKCdzZWN0aW9uc3RvZ2dsZScsIHRoaXMuX29uU2VjdGlvblRvZ2dsZS5iaW5kKHRoaXMpKVxuXHR9XG5cblx0b25DaGVja2VkKGUsIGRhdGEpIHtcblx0XHRzdXBlci5vbkNoZWNrZWQoZSk7XG5cdFx0dGhpcy5wbGF5ZXIudG9nZ2xlU2VjdGlvbnMoZGF0YS5jaGVja2VkKTtcblx0fVxuXG5cdF9vblNlY3Rpb25Ub2dnbGUoZSwgZGF0YSkge1xuXHRcdGNvbnN0IHsgaXNWaXNpYmxlIH0gPSBkYXRhO1xuXHRcdGlmKHRoaXMuY2hlY2tlZCAhPT0gaXNWaXNpYmxlKSB7XG5cdFx0XHR0aGlzLmNoZWNrZWQgPSBpc1Zpc2libGU7XG5cdFx0fVxuXG5cdH1cblxuXHRfb25TZWN0aW9uc0luaXQoZSkge1xuXHRcdHRoaXMub3B0aW9ucy5kaXNhYmxlID0gdGhpcy5kaXNhYmxlID0gZmFsc2U7XG5cdFx0dGhpcy5jaGVja2VkID0gdHJ1ZTtcblx0fVxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ1NlY3Rpb25Db250cm9sJywgU2VjdGlvbkNvbnRyb2wpO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ3NlY3Rpb24nLCBTZWN0aW9uQ29udHJvbCk7XG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uQ29udHJvbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL1NlY3Rpb25Db250cm9sLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBjb250cm9sLWNoZWNrYm94LmpzXG4gKi9cblxuXG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL0NvbnRyb2wnO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5cbi8qKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5jaGVja2VkPWZhbHNlXVxuICogQGNsYXNzIENvbnRyb2xDaGVja2JveCBUb2dnYWJsZSBjb250cm9sXG4gKi9cbmNsYXNzIENvbnRyb2xDaGVja2JveCBleHRlbmRzIENvbnRyb2wge1xuXG5cdGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucz17fSkge1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cdFx0dGhpcy5jaGVja2VkID0gdGhpcy5vcHRpb25zLmNoZWNrZWQgfHwgZmFsc2U7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdsZXBsYXllcl9jaGVja2VkJywgdGhpcy5vbkNoZWNrZWQuYmluZCh0aGlzKSlcblx0fVxuXG5cblx0LyoqXG5cdCAqIFNldHRlciBmb3IgY2hlY2tlZCBwcm9wZXJ0eVxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gdmFsXG5cdCAqL1xuXHRzZXQgY2hlY2tlZCAodmFsKSB7XG5cdFx0aWYgKHRoaXMuZGlzYWJsZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR2YWwgPSAhIXZhbDtcblx0XHR0aGlzLl9jaGVja2VkID0gdmFsXG5cdFx0dGhpcy5lbGVtZW50LnRvZ2dsZUNsYXNzKCdjb250cm9sLWNoZWNrYm94LS1jaGVja2VkJywgdmFsKTtcblx0XHR0aGlzLmVsZW1lbnQudHJpZ2dlcignbGVwbGF5ZXJfY2hlY2tlZCcsIHsgY2hlY2tlZCA6IHZhbCB9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXR0ZXIgZm9yIGNoZWNrZWQgcHJvcGVyeVxuXHQgKiBAcHVibGljXG5cdCAqIEByZXR1cm4ge2Jvb2xlYW59XG5cdCAqL1xuXHRnZXQgY2hlY2tlZCAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2NoZWNrZWQ7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRvbkNsaWNrIChlKSB7XG5cdFx0c3VwZXIub25DbGljayhlKTtcblx0XHR0aGlzLmNoZWNrZWQgPSAhdGhpcy5jaGVja2VkO1xuXHR9XG5cblx0LyoqXG5cdCAqIE9uIGNoZWNrZWQgZXZlbnQgaGFuZGxlclxuXHQgKlxuXHQgKiBAcGFyYW0ge0V2ZW50fSBlXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG5cdCAqL1xuXHRvbkNoZWNrZWQoZSwgZGF0YSkge1xuXG5cdH1cblxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGJ1aWxkQ1NTQ2xhc3MoKSB7XG5cdFx0cmV0dXJuIGBjb250cm9sLWNoZWNrYm94ICR7c3VwZXIuYnVpbGRDU1NDbGFzcygpfWBcblx0fVxuXG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnQ29udHJvbENoZWNrYm94JywgQ29udHJvbENoZWNrYm94KTtcbkNvbnRyb2wucmVnaXN0ZXJDb250cm9sKCdjaGVja2JveCcsIENvbnRyb2xDaGVja2JveCk7XG5leHBvcnQgZGVmYXVsdCBDb250cm9sQ2hlY2tib3g7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9Db250cm9sQ2hlY2tib3guanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIEZ1bGxzY3JlZW5Db250cm9sLmpzXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9Db250cm9sJztcblxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAY2xhc3MgRnVsbHNjcmVlbkNvbnRyb2xcbiAqIEBleHRlbmRzIENvbnRyb2xcbiAqL1xuY2xhc3MgRnVsbHNjcmVlbkNvbnRyb2wgZXh0ZW5kcyBDb250cm9sIHtcblx0Y29uc3RydWN0b3IgKHBsYXllciwgb3B0aW9ucz17fSkge1xuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0aWNvbk5hbWUgOiAnYXJyb3dzLWFsdCcsXG5cdFx0XHRjbGFzc05hbWUgOiAnZnVsbHNjcmVlbicsXG5cdFx0XHR0aXRsZSA6ICfQoNCw0LfQstC10YDQvdGD0YLRjC/RgdCy0LXRgNC90YPRgtGMINC90LAg0L/QvtC70L3Ri9C5INGN0LrRgNCw0L0nLFxuXHRcdFx0bmFtZSA6ICdmdWxsc2NyZWVuJ1xuXHRcdH0sIG9wdGlvbnMpO1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRvbkNsaWNrKGUpIHtcblx0XHRzdXBlci5vbkNsaWNrKGUpXG5cdFx0dGhpcy5wbGF5ZXIudG9nZ2xlRnVsbHNjcmVlbigpO1xuXHR9XG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnRnVsbHNjcmVlbkNvbnRyb2wnLCBGdWxsc2NyZWVuQ29udHJvbCk7XG5Db250cm9sLnJlZ2lzdGVyQ29udHJvbCgnZnVsbHNjcmVlbicsIEZ1bGxzY3JlZW5Db250cm9sKTtcbmV4cG9ydCBkZWZhdWx0IEZ1bGxzY3JlZW5Db250cm9sO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvRnVsbHNjcmVlbkNvbnRyb2wuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIFJhdGVDb250cm9sLmpzXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9Db250cm9sJztcbmltcG9ydCBDb250cm9sVGV4dCBmcm9tICcuL0NvbnRyb2xUZXh0JztcbmltcG9ydCBDb29raWUgZnJvbSAnLi4vdXRpbHMvY29va2llJztcblxuLyoqXG4gKiBAY2xhc3MgUmF0ZUNvbnRyb2xcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEBwcm9wZXJ0eSB7Q29udHJvbH0gZG93bkNvbnRyb2wgIERvd24gcmF0ZSBjb250cm9sXG4gKiBAcHJvcGVydHkge0NvbnRyb2x9IHVwQ29udHJvbCAgVXAgcmF0ZSBjb250cm9sXG4gKiBAcHJvcGVydHkge0NvbnRyb2xUZXh0fSBjdXJyZW50UmF0ZSBDb250cm9sIG9mIGN1dXJlbnQgcmF0ZVxuICogQGV4dGVuZHMgQ29udHJvbFxuICovXG5jbGFzcyBSYXRlQ29udHJvbCBleHRlbmRzIENvbnRyb2wge1xuXHRjb25zdHJ1Y3RvciAocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRjbGFzc05hbWUgOiAnY29udHJvbC1jb250YWluZXInLFxuXHRcdFx0dGFnIDogJ2Rpdidcblx0XHR9LCBvcHRpb25zKTtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ3JhdGVjaGFuZ2UnLCAoKSA9PiB7XG5cdFx0XHR0aGlzLnVwZGF0ZSgpO1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHRzdXBlci5jcmVhdGVFbGVtZW50KCk7XG5cdFx0Y29uc3QgdmlkZW8gPSB0aGlzLnBsYXllci52aWRlbztcblxuXHRcdHRoaXMuZG93bkNvbnRyb2wgPSBuZXcgQ29udHJvbCh0aGlzLnBsYXllciwge1xuXHRcdFx0Y2xhc3NOYW1lIDogJ3JhdGUtZG93bicsXG5cdFx0XHRuYW1lIDogJ3JhdGUtZG93bicsXG5cdFx0XHRpY29uTmFtZSA6ICdiYWNrd2FyZCcsXG5cdFx0XHRjb2xsZWN0aW9uIDogdGhpcy5vcHRpb25zLmNvbGxlY3Rpb24sXG5cdFx0XHR0aXRsZSA6ICfQo9C80LXQvdGM0YjQuNGC0Ywg0YHQutC+0YDQvtGB0YLRjCDQv9GA0L7QuNCz0YDRi9Cy0LDQvdC40Y8nLFxuXHRcdFx0b25DbGljayA6IGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0dmlkZW8uZGVjcmVhc2VSYXRlKCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHR0aGlzLnVwQ29udHJvbCA9IG5ldyBDb250cm9sKHRoaXMucGxheWVyLCB7XG5cdFx0XHRjbGFzc05hbWUgOiAncmF0ZS11cCcsXG5cdFx0XHRuYW1lIDogJ3JhdGUtdXAnLFxuXHRcdFx0aWNvbk5hbWUgOiAnZm9yd2FyZCcsXG5cdFx0XHRjb2xsZWN0aW9uIDogdGhpcy5vcHRpb25zLmNvbGxlY3Rpb24sXG5cdFx0XHR0aXRsZSA6ICfQo9Cy0LXQu9C40YfQuNGC0Ywg0YHQutC+0YDQvtGB0YLRjCDQv9GA0L7QuNCz0YDRi9Cy0LDQvdC40Y8nLFxuXHRcdFx0b25DbGljayA6IGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0dmlkZW8uaW5jcmVhc2VSYXRlKCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHR0aGlzLmN1cnJlbnRSYXRlID0gbmV3IENvbnRyb2xUZXh0KHRoaXMucGxheWVyLCB7XG5cdFx0XHRjbGFzc05hbWUgOiAncmF0ZS1jdXJyZW50Jyxcblx0XHRcdG9uQ2xpY2sgOiBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdHZpZGVvLnJhdGUgPSB0aGlzLnBsYXllci5vcHRpb25zLnJhdGUuZGVmYXVsdFxuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0dGhpcy5lbGVtZW50XG5cdFx0XHQuYXBwZW5kKHRoaXMuZG93bkNvbnRyb2wuZWxlbWVudClcblx0XHRcdC5hcHBlbmQodGhpcy5jdXJyZW50UmF0ZS5lbGVtZW50KVxuXHRcdFx0LmFwcGVuZCh0aGlzLnVwQ29udHJvbC5lbGVtZW50KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGJ1aWxkQ1NTQ2xhc3MoKSB7XG5cdFx0cmV0dXJuIHRoaXMub3B0aW9ucy5jbGFzc05hbWU7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRvblBsYXllckluaXRlZCgpIHtcblx0XHR0aGlzLnVwZGF0ZSgpO1xuXHR9XG5cblx0LyoqXG5cdCAqXG5cdCAqL1xuXHRvbkNsaWNrKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0fVxuXG5cdHVwZGF0ZSh2YWx1ZSkge1xuXHRcdGNvbnN0IHZpZGVvID0gdGhpcy5wbGF5ZXIudmlkZW87XG5cblx0XHR2YWx1ZSA9IHZhbHVlIHx8IHZpZGVvLnJhdGU7XG5cdFx0dmFsdWUgPSBwYXJzZUZsb2F0KHZhbHVlKVxuXHRcdFx0LnRvRml4ZWQoMilcblx0XHRcdC50b1N0cmluZygpXG5cdFx0XHQucmVwbGFjZSgvLC9nLCAnLicpO1xuXHRcdHRoaXMuY3VycmVudFJhdGUudGV4dCA9ICfDlycgKyB2YWx1ZTtcblxuXHRcdGlmKHRoaXMuZGlzYWJsZSkgcmV0dXJuO1xuXG5cdFx0aWYodmlkZW8ucmF0ZSA8PSB2aWRlby5yYXRlTWluKSB7XG5cdFx0XHR0aGlzLmRvd25Db250cm9sLmRpc2FibGUgPSB0cnVlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmRvd25Db250cm9sLmRpc2FibGUgPSBmYWxzZTtcblx0XHR9XG5cblx0XHRpZih2aWRlby5yYXRlID49IHZpZGVvLnJhdGVNYXgpIHtcblx0XHRcdHRoaXMudXBDb250cm9sLmRpc2FibGUgPSB0cnVlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnVwQ29udHJvbC5kaXNhYmxlID0gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblx0c2V0IGRpc2FibGUodmFsdWUpIHtcblx0XHR0aGlzLl9kaXNhYmxlID0gdmFsdWU7XG5cdFx0dGhpcy5kb3duQ29udHJvbC5kaXNhYmxlID0gdmFsdWU7XG5cdFx0dGhpcy51cENvbnRyb2wuZGlzYWJsZSA9IHZhbHVlO1xuXHR9XG5cblx0aW5pdCAoKSB7XG5cdFx0bGV0IHJhdGUgPSBDb29raWUuZ2V0KCdyYXRlJywgdGhpcy5wbGF5ZXIub3B0aW9ucy5yYXRlLmRlZmF1bHQpO1xuXHRcdHRoaXMuc2hvdyhyYXRlKTtcblx0fVxuXG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnUmF0ZUNvbnRyb2wnLCBSYXRlQ29udHJvbCk7XG5Db250cm9sLnJlZ2lzdGVyQ29udHJvbCgncmF0ZScsIFJhdGVDb250cm9sKTtcbmV4cG9ydCBkZWZhdWx0IFJhdGVDb250cm9sO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvUmF0ZUNvbnRyb2wuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIEJhY2t3YXJkQ29udHJvbC5qc1xuICpcbiAqIEJhY2t3YXJkIGNvbnRyb2xcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL0NvbnRyb2wnO1xuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gT3B0aW9uc1xuICogQGNsYXNzIEJhY2t3YXJkQ29udHJvbFxuICogQGV4dGVuZHMgQ29udHJvbFxuICovXG5jbGFzcyBCYWNrd2FyZENvbnRyb2wgZXh0ZW5kcyBDb250cm9sIHtcblx0Y29uc3RydWN0b3IgKHBsYXllciwgb3B0aW9ucz17fSkge1xuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0aWNvbk5hbWUgOiAndW5kbycsXG5cdFx0XHRjbGFzc05hbWUgOiAnYmFja3dhcmQnLFxuXHRcdFx0bmFtZSA6ICdiYWNrd2FyZCcsXG5cdFx0XHR0aXRsZSA6IGDQntGC0LzQvtGC0LDRgtGMINC90LDQt9Cw0LQg0L3QsCAke3BsYXllci5vcHRpb25zLnBsYXliYWNrLnN0ZXAubWVkaXVtfSDRgdC10LrRg9C90LRgLFxuXHRcdFx0ZGlzYWJsZSA6IHRydWVcblx0XHR9LCBvcHRpb25zKTtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ2ZpcnN0cGxheScsICgpID0+IHRoaXMuZGlzYWJsZSA9IGZhbHNlKVxuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0b25DbGljayhlKSB7XG5cdFx0c3VwZXIub25DbGljayhlKTtcblx0XHR0aGlzLnBsYXllci52aWRlby5jdXJyZW50VGltZSAtPSB0aGlzLnBsYXllci5vcHRpb25zLnBsYXliYWNrLnN0ZXAubWVkaXVtO1xuXHRcdHRoaXMucGxheWVyLnNwbGFzaEljb24uc2hvdygndW5kbycpO1xuXHR9XG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnQmFja3dhcmRDb250cm9sJywgQmFja3dhcmRDb250cm9sKTtcbkNvbnRyb2wucmVnaXN0ZXJDb250cm9sKCdiYWNrd2FyZCcsIEJhY2t3YXJkQ29udHJvbCk7XG5leHBvcnQgZGVmYXVsdCBCYWNrd2FyZENvbnRyb2w7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9CYWNrd2FyZENvbnRyb2wuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIFNvdXJjZUNvbnRyb2wuanNcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL0NvbnRyb2wnO1xuaW1wb3J0IENvbnRyb2xDb250YWluZXIgZnJvbSAnLi9Db250cm9sQ29udGFpbmVyJztcblxuXG4vKipcbiAqIEBjbGFzcyBTb3VyY2VDb250cm9sXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAZXh0ZW5kcyBDb250cm9sQ29uYWluZXJcbiAqL1xuY2xhc3MgU291cmNlQ29udHJvbCBleHRlbmRzIENvbnRyb2xDb250YWluZXIge1xuXHQvLyBUT0RPOiDQlNC10LvQsNGC0YwgZGlzYWJsZS9lbmFibGUg0L/QvtGB0LvQtSBvcHRpb25zIGluaXRcblx0Y29uc3RydWN0b3IgKHBsYXllciwgb3B0aW9ucz17fSkge1xuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0bmFtZSA6ICdzb3VyY2UnLFxuXHRcdFx0aWNvbk5hbWUgOiAnYnVsbHNleWUnLFxuXHRcdFx0dGl0bGUgOiAn0JrQsNGH0LXRgdGC0LLQvicsXG5cdFx0XHRjbGFzc05hbWUgOiAnc291cmNlLWNvbnRyb2wnLFxuXHRcdFx0ZGlzYWJsZSA6IHRydWVcblx0XHR9LCBvcHRpb25zKTtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ3BsYXlpbmcnLCB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLnBsYXllci5vbigncXVhbGl0eWNoYW5nZScsIHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xuXHR9XG5cblx0b25JdGVtQ2xpY2soZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblxuXHRcdGNvbnN0IGl0ZW0gPSAkKGUudGFyZ2V0KTtcblx0XHRjb25zdCB2aWRlbyA9IHRoaXMucGxheWVyLnZpZGVvO1xuXHRcdHZpZGVvLnBsYXliYWNrUXVhbGl0eSA9IGl0ZW0uZGF0YSgnbmFtZScpO1xuXG5cdFx0dGhpcy5kcm9wZG93bkNvbnRlbnQuaGlkZSgpO1xuXG5cdH1cblxuXHRvblBsYXllckluaXRlZChlLCBkYXRhKSB7XG5cdFx0dGhpcy51cGRhdGUoKTtcblx0fVxuXG5cdGdldERhdGEoKSB7XG5cdFx0cmV0dXJuIHRoaXMucGxheWVyLnZpZGVvLmdldEF2YWlsYWJsZVF1YWxpdHlMZXZlbHMoKTtcblx0fVxuXG5cdGdldEN1cnJlbnRWYWx1ZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5wbGF5ZXIudmlkZW8ucGxheWJhY2tRdWFsaXR5O1xuXHR9XG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnU291cmNlQ29udHJvbCcsIFNvdXJjZUNvbnRyb2wpO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ3NvdXJjZScsIFNvdXJjZUNvbnRyb2wpO1xuZXhwb3J0IGRlZmF1bHQgU291cmNlQ29udHJvbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL1NvdXJjZUNvbnRyb2wuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIENvbnRyb2xDb250YWluZXIuanNcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL0NvbnRyb2wnO1xuaW1wb3J0IENvbnRyb2xEcm9wZG93biBmcm9tICcuL0NvbnRyb2xEcm9wZG93bic7XG5cbi8qKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQGNsYXNzIENvbnRyb2xDb250YWluZXJcbiAqIEBleHRlbmRzIENvbnRyb2xEcm9wZG93blxuICovXG5jbGFzcyBDb250cm9sQ29udGFpbmVyIGV4dGVuZHMgQ29udHJvbERyb3Bkb3duIHtcblxuXHRjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnM9e30pIHtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXHRcdHRoaXMuX2FjdGl2ZSA9IG51bGw7XG5cdFx0LyoqXG5cdFx0ICogTGlzdCBvZiBpdGVtc1xuXHRcdCAqXG5cdFx0ICogQHB1YmxpY1xuXHRcdCAqIEB0eXBlIHtBcnJheX1cblx0XHQgKi9cblx0XHR0aGlzLmxpc3QgPSBbXTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgaXRlbSBvZiBjb250YWluZXIgYnkgaW5kZXhcblx0ICpcblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcblx0ICovXG5cdGdldEJ5SW5kZXgoaW5kZXgpIHtcblx0XHRyZXR1cm4gdGhpcy5saXN0W2luZGV4XTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTZXQgaXRlbSBhY3RpdmUgYnkgaW5kZXhcblx0ICpcblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcblx0ICovXG5cdHNldEFjdGl2ZUJ5SW5kZXgoaW5kZXgpIHtcblx0XHRpZiAodGhpcy5hY3RpdmUpIHtcblx0XHRcdHRoaXMuYWN0aXZlLnJlbW92ZUNsYXNzKCdjb250cm9sLWNvbnRhaW5lcl9faXRlbS0tYWN0aXZlJyk7XG5cdFx0fVxuXHRcdHRoaXMuX2FjdGl2ZSA9IHRoaXMubGlzdFtpbmRleF0uYWRkQ2xhc3MoJ2NvbnRyb2wtY29udGFpbmVyX19pdGVtLS1hY3RpdmUnKTtcblx0XHRyZXR1cm4gdGhpcy5fYWN0aXZlO1xuXHR9XG5cblxuXHQvKipcblx0ICogR2V0dGVyIG9mIGFjdGl2ZSBmaWVsZFxuXHQgKlxuXHQgKiBAcHVibGljXG5cdCAqIEB0eXBlIHtqUXVlcnl9XG5cdCAqL1xuXHRnZXQgYWN0aXZlICgpIHtcblx0XHRpZiAodGhpcy5fYWN0aXZlICYmIHRoaXMuX2FjdGl2ZS5sZW5ndGggPiAwKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5fYWN0aXZlO1xuXHRcdH1cblx0XHR0aGlzLmxpc3QuZm9yRWFjaChpdGVtID0+IHtcblx0XHRcdGlmIChpdGVtLmhhc0NsYXNzKCdjb250cm9sLWNvbnRhaW5lcl9faXRlbS0tYWN0aXZlJykpIHtcblx0XHRcdFx0dGhpcy5fYWN0aXZlID0gaXRlbTtcblx0XHRcdH1cblx0XHR9KVxuXHRcdHJldHVybiB0aGlzLl9hY3RpdmU7XG5cdH1cblxuXHQvKipcblx0ICogU2V0dGVyIG9mIGFjdGl2ZSBmaWVsZFxuXHQgKlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7alF1ZXJ5fSBJdGVtIG9mIGNvbnRhaW5lclxuXHQgKi9cblx0c2V0IGFjdGl2ZSAoZWxlbWVudCkge1xuXHRcdGlmICh0aGlzLmFjdGl2ZSkge1xuXHRcdFx0dGhpcy5hY3RpdmUucmVtb3ZlQ2xhc3MoJ2NvbnRyb2wtY29udGFpbmVyX19pdGVtLS1hY3RpdmUnKTtcblx0XHR9XG5cdFx0aWYgKGVsZW1lbnQpIHtcblx0XHRcdCQoZWxlbWVudCkuYWRkQ2xhc3MoJ2NvbnRyb2wtY29udGFpbmVyX19pdGVtLS1hY3RpdmUnKTtcblx0XHR9XG5cdFx0dGhpcy5fYWN0aXZlID0gZWxlbWVudDtcblx0XHR0aGlzLmNsb3NlKCk7XG5cdFx0cmV0dXJuIHRoaXMuX2FjdGl2ZVxuXHR9XG5cblxuXHQvKipcblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge1N0cmluZ3xqUXVlcnl9IENvbnRlbnQgb2YgaXRlbVxuXHQgKiBAcGFyYW0ge09iamVjdH0gRGF0YSBvZiBpdGVtXG5cdCAqL1xuXHRhZGRJdGVtIChjb250ZW50LCBkYXRhKSB7XG5cdFx0Y29uc3QgaXRlbSA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0LmFkZENsYXNzKCdjb250cm9sLWNvbnRhaW5lcl9faXRlbScpXG5cdFx0XHQuZGF0YShkYXRhKVxuXHRcdFx0LmF0dHIoJ3RpdGxlJywgZGF0YS50b29sdGlwKVxuXHRcdFx0Lm9uKCdjbGljayB0YXAnLCB0aGlzLm9uSXRlbUNsaWNrLmJpbmQodGhpcykpXG5cdFx0XHQuYXBwZW5kKGNvbnRlbnQpO1xuXG5cdFx0dGhpcy5saXN0ID0gdGhpcy5saXN0LmNvbmNhdChpdGVtKTtcblxuXHRcdHRoaXMuZHJvcGRvd25Db250ZW50LmFwcGVuZChpdGVtKTtcblxuXHRcdHRoaXMuZW1pdFRhcEV2ZW50cyhpdGVtKTtcblxuXHRcdHJldHVybiBpdGVtO1xuXHR9XG5cblx0LyoqXG5cdCAqIE9uIGl0ZW0gY2xpY2sgZXZlbnQgaGFuZGxlclxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7RXZlbnR9IGVcblx0ICovXG5cdG9uSXRlbUNsaWNrIChlKSB7XG5cdFx0dGhpcy5hY3RpdmUgPSBlLmN1cnJlbnRUYXJnZXQ7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRidWlsZENTU0NsYXNzKCkge1xuXHRcdHJldHVybiBgJHtzdXBlci5idWlsZENTU0NsYXNzKCl9IGNvbnRyb2wtY29udGFpbmVyYFxuXHR9XG5cblx0dXBkYXRlKCkge1xuXHRcdGNvbnN0IGRhdGEgPSB0aGlzLmdldERhdGEoKVxuXHRcdGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHRoaXMuZ2V0Q3VycmVudFZhbHVlKClcblxuXHRcdGlmKGRhdGEgPT0gbnVsbCB8fCBkYXRhLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0dGhpcy5kaXNhYmxlID0gdHJ1ZTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLmxpc3QgPSBbXTtcblx0XHR0aGlzLmRyb3Bkb3duQ29udGVudC5lbXB0eSgpO1xuXG5cdFx0ZGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xuXHRcdFx0Y29uc3QgZWxlbSA9IHRoaXMuYWRkSXRlbShpdGVtLnRpdGxlLCBpdGVtKTtcblx0XHRcdGlmKGN1cnJlbnRWYWx1ZSAmJiBjdXJyZW50VmFsdWUubmFtZSA9PT0gaXRlbS5uYW1lKSB7XG5cblx0XHRcdFx0dGhpcy5hY3RpdmUgPSBlbGVtO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdHRoaXMuZGlzYWJsZSA9IGZhbHNlO1xuXHR9XG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnQ29udHJvbENvbnRhaW5lcicsIENvbnRyb2xDb250YWluZXIpO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ2NvbnRhaW5lcicsIENvbnRyb2xDb250YWluZXIpO1xuZXhwb3J0IGRlZmF1bHQgQ29udHJvbENvbnRhaW5lcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL0NvbnRyb2xDb250YWluZXIuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIFN1YnRpdGxlQ29udHJvbC5qc1xuICpcbiAqIFN1YnRpdGxlIGNvbnRyb2xcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL0NvbnRyb2wnO1xuaW1wb3J0IENvbnRyb2xDb250YWluZXIgZnJvbSAnLi9Db250cm9sQ29udGFpbmVyJztcblxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAY2xhc3MgU3VidGl0bGVDb250cm9sXG4gKiBAZXh0ZW5kcyBDb250cm9sQ29udGFpbmVyXG4gKi9cbmNsYXNzIFN1YnRpdGxlQ29udHJvbCBleHRlbmRzIENvbnRyb2xDb250YWluZXIge1xuXHRjb25zdHJ1Y3RvciAocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRpY29uTmFtZSA6ICdjb21tZW50aW5nLW8nLFxuXHRcdFx0dGl0bGUgOiAn0KHRg9Cx0YLQuNGC0YDRiycsXG5cdFx0XHRuYW1lIDogJ3N1YnRpdGxlJyxcblx0XHRcdGNsYXNzTmFtZSA6ICdzdWJ0aXRsZS1jb250cm9sJyxcblx0XHRcdGRpc2FibGUgOiB0cnVlXG5cdFx0fSwgb3B0aW9ucyk7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblxuXHRcdHRoaXMucGxheWVyLm9uKCdwbGF5aW5nJywgdGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5wbGF5ZXIub24oJ3RyYWNrc2NoYW5nZScsIHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xuXHR9XG5cblx0b25DbGljayAoZSkge1xuXHRcdHN1cGVyLm9uQ2xpY2soZSk7XG5cdFx0Y29uc3QgdmlkZW8gPSB0aGlzLnBsYXllci52aWRlbztcblx0XHR2aWRlby50cmFjayA9IG51bGxcblx0fVxuXG5cdG9uSXRlbUNsaWNrIChlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKClcblxuXHRcdGNvbnN0IGl0ZW0gPSAkKGUudGFyZ2V0KVxuXHRcdGNvbnN0IHZpZGVvID0gdGhpcy5wbGF5ZXIudmlkZW87XG5cdFx0aWYgKGl0ZW0uZGF0YSgpKSB7XG5cdFx0XHR2aWRlby50cmFjayA9IGl0ZW0uZGF0YSgpO1xuXHRcdH1cblxuXHRcdHRoaXMuZHJvcGRvd25Db250ZW50LmhpZGUoKVxuXHR9XG5cblx0b25QbGF5ZXJJbml0ZWQoZSwgZGF0YSkge1xuXHRcdHRoaXMudXBkYXRlKClcblx0fVxuXG5cdHVwZGF0ZSgpIHtcblx0XHRzdXBlci51cGRhdGUoKTtcblx0XHRjb25zdCBoYXNWYWx1ZSA9ICEhKHRoaXMuZ2V0Q3VycmVudFZhbHVlKCkgJiYgdGhpcy5nZXRDdXJyZW50VmFsdWUoKS5uYW1lICE9IG51bGwpO1xuXHRcdHRoaXMuZWxlbWVudC50b2dnbGVDbGFzcyhcblx0XHRcdCdjb250cm9sLWNoZWNrYm94LS1jaGVja2VkJyxcblx0XHRcdGhhc1ZhbHVlXG5cdFx0KVxuXHR9XG5cblx0Z2V0RGF0YSgpIHtcblx0XHRyZXR1cm4gdGhpcy5wbGF5ZXIudmlkZW8uc3VidGl0bGVzO1xuXHR9XG5cblx0Z2V0Q3VycmVudFZhbHVlKCkge1xuXHRcdHJldHVybiB0aGlzLnBsYXllci52aWRlby50cmFjaztcblx0fVxuXG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnU3VidGl0bGVDb250cm9sJywgU3VidGl0bGVDb250cm9sKTtcbkNvbnRyb2wucmVnaXN0ZXJDb250cm9sKCdzdWJ0aXRsZScsIFN1YnRpdGxlQ29udHJvbCk7XG5leHBvcnQgZGVmYXVsdCBTdWJ0aXRsZUNvbnRyb2w7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9TdWJ0aXRsZUNvbnRyb2wuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIERvd25sb2FkQ29udHJvbC5qc1xuICpcbiAqIERvd25sb2FkIGNvbnRyb2xcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9Db250cm9sJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJztcblxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAY2xhc3MgRG93bmxvYWRDb250cm9sXG4gKiBAZXhudGVkcyBDb250cm9sXG4gKi9cbmNsYXNzIERvd25sb2FkQ29udHJvbCBleHRlbmRzIENvbnRyb2wge1xuXHRjb25zdHJ1Y3RvciAocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHtcblx0XHRcdHRpdGxlIDogJ9Ch0LrQsNGH0LDRgtGMINCy0LjQtNC10L4nLFxuXHRcdFx0Y2xhc3NOYW1lIDogJ2Rvd25sb2FkJyxcblx0XHRcdG5hbWUgOiAnZG93bmxvYWQnLFxuXHRcdH0sIG9wdGlvbnMpO1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cdFx0dGhpcy5wbGF5ZXIub24oJ2xvYWRzdGFydCcsIHRoaXMub25Mb2FkU3RhcnQuYmluZCh0aGlzKSk7XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0Ly8gVE9ETzog0JTQvtC+0L/RgNC10LTQtdC70LjRgtGMINGN0YLQvtGCINC80LXRgtC+0LQsINCwINC90LUg0L/QtdGA0LXQvtC/0YDQtdC00LvQtdC40YLRjFxuXHRcdHRoaXMuZWxlbWVudCA9ICQoJzxhIC8+Jylcblx0XHRcdC5hdHRyKHtcblx0XHRcdFx0aHJlZiA6ICcnLFxuXHRcdFx0XHR0YXJnZXQgOiAnX2JsYW5rJyxcblx0XHRcdFx0ZG93bmxvYWQgOiB0cnVlLFxuXHRcdFx0XHR0aXRsZSA6IHRoaXMub3B0aW9ucy50aXRsZSxcblx0XHRcdH0pXG5cdFx0XHQuYWRkQ2xhc3ModGhpcy5idWlsZENTU0NsYXNzKCkpXG5cdFx0XHQuYXBwZW5kKG5ldyBJY29uKHRoaXMucGxheWVyLCB7IGljb25OYW1lIDogJ2Rvd25sb2FkJyB9KS5lbGVtZW50KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGJ1aWxkQ1NTQ2xhc3MoKSB7XG5cdFx0cmV0dXJuIGAke3N1cGVyLmJ1aWxkQ1NTQ2xhc3MoKX1gO1xuXHR9XG5cblxuXHQvKipcblx0ICogU2V0dGVyIG9mIGxpbmsgZmllbGRcblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgUGF0aCBmb3IgdmlkZW9cblx0ICovXG5cdHNldCBsaW5rICh2YWx1ZSkge1xuXHRcdGNvbnN0IHRpdGxlID0gdGhpcy5wbGF5ZXIub3B0aW9ucy50aXRsZTtcblx0XHRsZXQgZmlsZU5hbWU7XG5cblx0XHRpZih0aXRsZSAhPSBudWxsKSB7XG5cdFx0XHRmaWxlTmFtZSA9IGRlY29kZVVSSUNvbXBvbmVudCh0aXRsZSkgKyAnLicgKyBnZXRGaWxlRXh0ZW5zaW9uKHZhbHVlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3QgcGFyc2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXHRcdFx0cGFyc2VyLmhyZWYgPSB2YWx1ZTtcblx0XHRcdGZpbGVOYW1lID0gcGFyc2VyLnBhdGhuYW1lLnNwbGl0KCcvJyk7XG5cdFx0XHRmaWxlTmFtZSA9IGZpbGVOYW1lW2ZpbGVOYW1lLmxlbmd0aCAtIDFdO1xuXHRcdH1cblxuXHRcdHRoaXMuZWxlbWVudC5hdHRyKHtcblx0XHRcdGhyZWYgOiB2YWx1ZSxcblx0XHRcdGRvd25sb2FkIDogZmlsZU5hbWVcblx0XHR9KTtcblx0fVxuXG5cblx0b25Mb2FkU3RhcnQoZSwgZGF0YSkge1xuXHRcdHRoaXMubGluayA9IHRoaXMucGxheWVyLnZpZGVvLnNyYy51cmw7XG5cdH1cblxufVxuZnVuY3Rpb24gZ2V0RmlsZUV4dGVuc2lvbihmaWxlTmFtZSkge1xuXHRyZXR1cm4gZmlsZU5hbWUuc3BsaXQoJy4nKS5wb3AoKTtcbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdEb3dubG9hZENvbnRyb2wnLCBEb3dubG9hZENvbnRyb2wpO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ2Rvd25sb2FkJywgRG93bmxvYWRDb250cm9sKTtcbmV4cG9ydCBkZWZhdWx0IERvd25sb2FkQ29udHJvbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL0Rvd25sb2FkQ29udHJvbC5qcyIsIlxuJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBLZXliaW5kaW5nSW5mb0NvbnRyb2wuanNcbiAqXG4gKiBJbmZvIGNvbnRyb2xcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL0NvbnRyb2wnO1xuaW1wb3J0IENvbnRyb2xEcm9wZG93biBmcm9tICcuL0NvbnRyb2xEcm9wZG93bic7XG5cbi8qKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQGNsYXNzIEtleUJpbmRpbmdJbmZvQ29udHJvbFxuICogQGV4dGVuZHMgQ29udHJvbERyb3Bkb3duXG4gKi9cbmNsYXNzIEtleUJpbmRpbmdJbmZvQ29udHJvbCBleHRlbmRzIENvbnRyb2xEcm9wZG93biB7XG5cblx0Y29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRpY29uTmFtZSA6ICdpbmZvJyxcblx0XHRcdHRpdGxlIDogJ9CY0L3RhNC+Jyxcblx0XHRcdGNsYXNzTmFtZSA6ICdpbmZvLWNvbnRyb2wnLFxuXHRcdFx0bmFtZSA6ICdpbmZvJ1xuXHRcdH0sIG9wdGlvbnMpO1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cdH1cblxuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdHN1cGVyLmNyZWF0ZUVsZW1lbnQoKTtcblx0XHRsZXQga2V5QmluZGluZyA9IHRoaXMucGxheWVyLm9wdGlvbnMua2V5QmluZGluZztcblx0XHRsZXQgaW5mb0NvbnRlbnQgPSBgYDtcblx0XHRmb3IgKGxldCBfa2V5IGluIGtleUJpbmRpbmcpIHtcblx0XHRcdGlmICgha2V5QmluZGluZy5oYXNPd25Qcm9wZXJ0eShfa2V5KSkgY29udGludWU7XG5cblx0XHRcdGxldCBob3RrZXkgPSBrZXlCaW5kaW5nW19rZXldO1xuXHRcdFx0bGV0IGl0ZW0gPSAnJztcblx0XHRcdGxldCBrZXlTdHJpbmcgPSAnJztcblxuXHRcdFx0aG90a2V5LmluZm8uZm9yRWFjaCgoa2V5LCBpbmRleCkgPT4ge1xuXHRcdFx0XHRpZiAoaW5kZXggIT09IDApIHtcblx0XHRcdFx0XHRrZXlTdHJpbmcgKz0gYCArIGBcblx0XHRcdFx0fVxuXHRcdFx0XHRrZXlTdHJpbmcgKz0gYDxrYmQgY2xhc3M9XCJsZXBsYXllci1rZXlcIj4ke2tleX08L2tiZD5gXG5cdFx0XHR9KTtcblxuXHRcdFx0aXRlbSA9IGBcblx0XHRcdFx0PGRpdiBjbGFzcz1cImluZm8tY29udHJvbF9faXRlbVwiPlxuXHRcdFx0XHRcdCR7a2V5U3RyaW5nfSAtICR7aG90a2V5LmRlc2NyaXB0aW9ufVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdGBcblxuXHRcdFx0aW5mb0NvbnRlbnQgKz0gaXRlbTtcblxuXHRcdH1cblx0XHR0aGlzLmRyb3Bkb3duQ29udGVudFxuXHRcdFx0LmFkZENsYXNzKCdpbmZvLWNvbnRyb2xfX2NvbnRlbnQnKVxuXHRcdFx0LmFwcGVuZChpbmZvQ29udGVudCk7XG5cdH1cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdLZXlCaW5kaW5nSW5mb0NvbnRyb2wnLCBLZXlCaW5kaW5nSW5mb0NvbnRyb2wpO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ2tleWJpbmRpbmcgaW5mbycsIEtleUJpbmRpbmdJbmZvQ29udHJvbCk7XG5leHBvcnQgZGVmYXVsdCBLZXlCaW5kaW5nSW5mb0NvbnRyb2w7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9LZXliaW5kaW5nSW5mb0NvbnRyb2wuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIFRpbWVJbmZvQ29udHJvbC5qc1xuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCBDb250cm9sIGZyb20gJy4vQ29udHJvbCc7XG5pbXBvcnQgQ29udHJvbFRleHQgZnJvbSAnLi9Db250cm9sVGV4dCc7XG5pbXBvcnQgeyBzZWNvbmRzVG9UaW1lIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBjbGFzcyBUaW1lSW5mb0NvbnRyb2xcbiAqIEBwcm9wZXJ0eSB7Q29udHJvbFRleHR9IGN1cnJlbnRUaW1lIEN1cnJlbnQgdGltZSdzIHRleHRcbiAqIEBwcm9wZXJ0eSB7Q29udHJvbFRleHR9IHRvdGFsVGltZSBUb3RhbCB0aW1lXG4gKiBAcHJvcGVydHkge2pRdWVyeX0gbGluZVxuICogQGV4dGVuZHMgQ29udHJvbFxuICovXG5jbGFzcyBUaW1lSW5mb0NvbnRyb2wgZXh0ZW5kcyBDb250cm9sIHtcblxuXHRjb25zdHJ1Y3RvciAocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRjbGFzc05hbWUgOiAndGltZWxpbmUgdGltZWxpbmUtY29udGFpbmVyJyxcblx0XHRcdG5hbWUgOiAndGltZS1pbmZvJ1xuXHRcdH0sIG9wdGlvbnMpO1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cblx0XHR0aGlzLnBsYXllci5vbigndGltZXVwZGF0ZScsIChlLCBkYXRhKSA9PiB7XG5cdFx0XHRjb25zdCB0aW1lID0gdGhpcy5wbGF5ZXIuY3VycmVudFRpbWU7XG5cdFx0XHR0aGlzLl9jdXJyZW50VGltZUNvbnRyb2wudGV4dCA9IHNlY29uZHNUb1RpbWUodGltZSk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLnBsYXllci5vbignZHVyYXRpb25jaGFuZ2UnLCAoZSkgPT4ge1xuXHRcdFx0dGhpcy5fdG90YWxUaW1lQ29udHJvbC50ZXh0ID0gc2Vjb25kc1RvVGltZSh0aGlzLnBsYXllci52aWRlby5kdXJhdGlvbik7XG5cdFx0fSk7XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0Y29uc3QgZHVyYXRpb24gPSB0aGlzLnBsYXllci52aWRlby5kdXJhdGlvbjtcblx0XHRjb25zdCBjdXJyZW50VGltZSA9IHRoaXMucGxheWVyLnZpZGVvLmN1cnJlbnRUaW1lO1xuXHRcdHRoaXMuX2N1cnJlbnRUaW1lQ29udHJvbCA9IG5ldyBDb250cm9sVGV4dCh0aGlzLnBsYXllciwgeyBjbGFzc05hbWUgOiAnY29udHJvbC10aW1lX19jdXJyZW50J30pO1xuXHRcdHRoaXMuX3RvdGFsVGltZUNvbnRyb2wgPSBuZXcgQ29udHJvbFRleHQodGhpcy5wbGF5ZXIsIHsgY2xhc3NOYW1lIDogJ2NvbnRyb2wtdGltZV9fdG90YWwnfSk7XG5cblx0XHRpZihpc05hTihkdXJhdGlvbikgfHwgZHVyYXRpb24gPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5fdG90YWxUaW1lQ29udHJvbC50ZXh0ID0gJyc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuX3RvdGFsVGltZUNvbnRyb2wudGV4dCA9IHNlY29uZHNUb1RpbWUoZHVyYXRpb24pO1xuXHRcdH1cblxuXHRcdGlmKGN1cnJlbnRUaW1lID09IG51bGwpIHtcblx0XHRcdHRoaXMuX2N1cnJlbnRUaW1lQ29udHJvbC50ZXh0ID0gc2Vjb25kc1RvVGltZSgwKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5fY3VycmVudFRpbWVDb250cm9sLnRleHQgPSBzZWNvbmRzVG9UaW1lKGN1cnJlbnRUaW1lKTtcblx0XHR9XG5cblx0XHR0aGlzLmVsZW1lbnQgPSAkKCc8ZGl2Lz4nKS5hZGRDbGFzcygnY29udHJvbC10aW1lJyk7XG5cdFx0dGhpcy5lbGVtZW50XG5cdFx0XHQuYXBwZW5kKHRoaXMuX2N1cnJlbnRUaW1lQ29udHJvbC5lbGVtZW50KVxuXHRcdFx0LmFwcGVuZCh0aGlzLl90b3RhbFRpbWVDb250cm9sLmVsZW1lbnQpXG5cblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50O1xuXHR9XG5cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRvblBsYXllckluaXRlZChlKSB7XG5cdFx0bGV0IHZpZGVvID0gdGhpcy5wbGF5ZXIudmlkZW87XG5cdFx0dGhpcy5fY3VycmVudFRpbWVDb250cm9sLnRleHQgPSBzZWNvbmRzVG9UaW1lKHZpZGVvLmN1cnJlbnRUaW1lKTtcblx0XHR0aGlzLl90b3RhbFRpbWVDb250cm9sLnRleHQgPSBzZWNvbmRzVG9UaW1lKHZpZGVvLmR1cmF0aW9uKTtcblx0fVxuXG5cdG9uQ2xpY2soZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKVxuXHR9XG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnVGltZUluZm9Db250cm9sJywgVGltZUluZm9Db250cm9sKTtcbkNvbnRyb2wucmVnaXN0ZXJDb250cm9sKCd0aW1laW5mbycsIFRpbWVJbmZvQ29udHJvbCk7XG5leHBvcnQgZGVmYXVsdCBUaW1lSW5mb0NvbnRyb2w7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9UaW1lSW5mb0NvbnRyb2wuanMiLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL0NvbXBvbmVudCc7XG5pbXBvcnQgeyBJU19TQUZBUkksIElTX0lPUywgSVNfQU5EUk9JRCB9IGZyb20gJy4uL3V0aWxzL2Jyb3dzZXInO1xuaW1wb3J0IEVudGl0eSBmcm9tICcuL0VudGl0eSc7XG5cblxuY2xhc3MgSHRtbDUgZXh0ZW5kcyBFbnRpdHkge1xuXHRjb25zdHJ1Y3RvciAocGxheWVyLCBvcHRpb25zKSB7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblx0XHR0aGlzLm1lZGlhID0gdGhpcy5lbGVtZW50WzBdO1xuXG5cdFx0dGhpcy5zdWJ0aXRsZXMgPSBbXTtcblx0XHR0aGlzLmJ1ZmZlclJhbmdlcyA9IFtdO1xuXG5cdFx0dGhpcy5zcmMgPSB0aGlzLnBsYXllci5vcHRpb25zLnNyYztcblxuXHRcdGlmKHRoaXMucGxheWVyLm9wdGlvbnMucG9zdGVyICE9IG51bGwpIHtcblx0XHRcdHRoaXMucG9zdGVyID0gdGhpcy5wbGF5ZXIub3B0aW9ucy5wb3N0ZXI7XG5cdFx0fVxuXG5cdFx0aWYodGhpcy5nZXRBdmFpbGFibGVRdWFsaXR5TGV2ZWxzKCkubGVuZ3RoID4gMCkge1xuXHRcdFx0dGhpcy5fcGxheWJhY2tRdWFsaXR5ID0gdGhpcy5nZXRBdmFpbGFibGVRdWFsaXR5TGV2ZWxzKClbMF07XG5cdFx0fVxuXG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdsb2Fkc3RhcnQnLCB0aGlzLm9uTG9hZFN0YXJ0LmJpbmQodGhpcykpO1xuXHRcdHRoaXMuZWxlbWVudC5vbigndGltZXVwZGF0ZScsIHRoaXMub25UaW1lVXBkYXRlLmJpbmQodGhpcykpO1xuXHRcdHRoaXMuZWxlbWVudC5vbignZHVyYXRpb25jaGFuZ2UnLCB0aGlzLm9uRHVyYXRpb25DaGFuZ2UuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdwcm9ncmVzcycsIHRoaXMub25Qcm9ncmVzcy5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ3NlZWtpbmcnLCB0aGlzLm9uU2Vla2luZy5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ3NlZWtlZCcsIHRoaXMub25TZWVrZWQuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCd2b2x1bWVjaGFuZ2UnLCB0aGlzLm9uVm9sdW1lQ2hhbmdlLmJpbmQodGhpcykpO1xuXHRcdHRoaXMuZWxlbWVudC5vbignY2xpY2snLCB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdkYmxjbGljaycsIHRoaXMub25EYmxjbGljay5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ3BsYXknLCB0aGlzLm9uUGxheS5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ3BhdXNlJywgdGhpcy5vblBhdXNlLmJpbmQodGhpcykpO1xuXHRcdHRoaXMuZWxlbWVudC5vbigncmF0ZWNoYW5nZScsIHRoaXMub25SYXRlQ2hhbmdlLmJpbmQodGhpcykpO1xuXHRcdHRoaXMuZWxlbWVudC5vbignZW5kZWQnLCB0aGlzLm9uRW5kZWQuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdjYW5wbGF5dGhyb3VnaCcsIHRoaXMub25DYW5wbGF5VGhyb3VnaC5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ3dhaXRpbmcnLCB0aGlzLm9uV2FpdGluZy5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ2Vycm9yJywgdGhpcy5vbkVycm9yLmJpbmQodGhpcykpO1xuXHR9XG5cblx0b25Mb2FkU3RhcnQoZSkge1xuXHRcdHRoaXMudHJpZ2dlcignbG9hZHN0YXJ0Jyk7XG5cdH1cblxuXHRvblRpbWVVcGRhdGUoZSkge1xuXHRcdHRoaXMudHJpZ2dlcigndGltZXVwZGF0ZScpO1xuXHR9XG5cblx0b25EdXJhdGlvbkNoYW5nZShlKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCdkdXJhdGlvbmNoYW5nZScpO1xuXHR9XG5cblx0b25Qcm9ncmVzcyhlKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCdwcm9ncmVzcycpO1xuXHR9XG5cblx0b25TZWVraW5nKGUpIHtcblx0XHR0aGlzLnRyaWdnZXIoJ3NlZWtpbmcnKTtcblx0fVxuXG5cdG9uU2Vla2VkKGUpIHtcblx0XHR0aGlzLnRyaWdnZXIoJ3NlZWtlZCcpO1xuXHR9XG5cblx0b25Wb2x1bWVDaGFuZ2UoZSkge1xuXHRcdHRoaXMudHJpZ2dlcigndm9sdW1lY2hhbmdlJyk7XG5cdH1cblxuXHRvbkNsaWNrKCkge1xuXHRcdHRoaXMudHJpZ2dlcignY2xpY2snKTtcblx0fVxuXG5cdG9uRGJsY2xpY2soKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCdkYmxjbGljaycpO1xuXHR9XG5cblx0b25QbGF5KCkge1xuXHRcdHRoaXMudHJpZ2dlcigncGxheScpO1xuXHR9XG5cblx0b25QYXVzZSgpIHtcblx0XHR0aGlzLnRyaWdnZXIoJ3BhdXNlJyk7XG5cdH1cblxuXHRvblBsYXlpbmcoKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCdwbGF5aW5nJyk7XG5cdH1cblxuXHRvblJhdGVDaGFuZ2UoKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCdyYXRlY2hhbmdlJyk7XG5cdH1cblxuXHRvbkVuZGVkKCkge1xuXHRcdHRoaXMudHJpZ2dlcignZW5kZWQnKTtcblx0fVxuXG5cdG9uQ2FucGxheVRocm91Z2goKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCdjYW5wbGF5dGhyb3VnaCcpO1xuXHR9XG5cblx0b25XYWl0aW5nKCkge1xuXHRcdHRoaXMudHJpZ2dlcignd2FpdGluZycpO1xuXHR9XG5cblx0b25FcnJvcihlKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCdlcnJvcicsIHsgY29kZSA6IGUudGFyZ2V0LmVycm9yLmNvZGUgfSk7XG5cdH1cblxuXHQvKiBUT0RPICovXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0dGhpcy5lbGVtZW50ID0gdGhpcy5vcHRpb25zLmN0eDtcblx0XHRbXG5cblx0XHRcdC8vIFJlbW92ZSBjb250cm9scyBiZWNhdXNlIHdlIGRvbnQgbm90IHN1cHBvcnQgbmF0aXZlIGNvbnRyb2xzIHlldFxuXHRcdFx0J2NvbnRyb2xzJyxcblx0XHRcdCdwb3N0ZXInLFxuXG5cdFx0XHQvLyBJdCBpcyB1bm5lY2Vzc2FyeSBhdHRycywgdGhpcyBmdW5jdGlvbmFsaXR5IHNvbHZlIENTU1xuXHRcdFx0J2hlaWdodCcsXG5cdFx0XHQnd2lkdGgnXG5cblx0XHRdLmZvckVhY2goaXRlbSA9PiB7XG5cdFx0XHR0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cihpdGVtKTtcblx0XHR9KTtcblxuXHRcdC8vIFNldCBhdHRycyBmcm9tIG9wdGlvbnNcblx0XHRbXG5cdFx0XHQncHJlbG9hZCcsXG5cdFx0XHQnYXV0b3BsYXknLFxuXHRcdFx0J2xvb3AnLFxuXHRcdFx0J211dGVkJ1xuXHRcdF0uZm9yRWFjaChpdGVtID0+IHtcblx0XHRcdGlmKHRoaXMucGxheWVyLm9wdGlvbnNbaXRlbV0pIHtcblx0XHRcdFx0dGhpcy5lbGVtZW50LmF0dHIoaXRlbSwgdGhpcy5wbGF5ZXIub3B0aW9uc1tpdGVtXSk7XG5cdFx0XHRcdHRoaXMuZWxlbWVudC5wcm9wKGl0ZW0sIHRoaXMucGxheWVyLm9wdGlvbnNbaXRlbV0pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cblx0XHR0aGlzLmVsZW1lbnQuZmluZCgnc291cmNlW2RhdGEtcXVhbGl0eV0nKS5lYWNoKChpLCBpdGVtKSA9PiB7XG5cdFx0XHQkKGl0ZW0pLnJlbW92ZSgpO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudDtcblx0fVxuXG5cdGdldCBjdXJyZW50VGltZSAoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWVkaWEuY3VycmVudFRpbWU7XG5cdH1cblxuXHRzZXQgY3VycmVudFRpbWUgKHZhbHVlKSB7XG5cdFx0bGV0IHRpbWU7XG5cdFx0aWYgKHZhbHVlID4gdGhpcy5kdXJhdGlvbikge1xuXHRcdFx0dGltZSA9IHRoaXMuZHVyYXRpb25cblx0XHR9IGVsc2UgaWYgKHZhbHVlIDwgMCkge1xuXHRcdFx0dGltZSA9IDBcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGltZSA9IHZhbHVlO1xuXHRcdH1cblxuXHRcdHRoaXMucGxheWVyLnRyaWdnZXIoJ3RpbWV1cGRhdGVsb2FkJywgeyBjdXJyZW50VGltZSA6IHRpbWUgfSk7XG5cblx0XHR0aGlzLm1lZGlhLmN1cnJlbnRUaW1lID0gdGltZTtcblx0fVxuXG5cdGdldCBkdXJhdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWVkaWEuZHVyYXRpb247XG5cdH1cblxuXHRnZXQgaGVpZ2h0ICgpIHtcblx0XHRyZXR1cm4gdGhpcy5tZWRpYS5jbGllbnRIZWlnaHQ7XG5cdH1cblxuXHRnZXQgd2lkdGggKCkge1xuXHRcdHJldHVybiB0aGlzLm1lZGlhLmNsaWVudFdpZHRoO1xuXHR9XG5cblx0Z2V0IHJhdGUgKCkge1xuXHRcdHJldHVybiB0aGlzLm1lZGlhLnBsYXliYWNrUmF0ZTtcblx0fVxuXG5cdHNldCBtdXRlZCh2YWx1ZSkge1xuXHRcdHRoaXMubWVkaWEubXV0ZWQgPSB2YWx1ZTtcblx0fVxuXG5cdGdldCBtdXRlZCgpIHtcblx0XHRyZXR1cm4gdGhpcy5tZWRpYS5tdXRlZFxuXHR9XG5cblx0Z2V0IHJhdGVNYXgoKSB7XG5cdFx0bGV0IG1heCA9IHRoaXMucGxheWVyLm9wdGlvbnMucmF0ZS5tYXg7XG5cdFx0aWYoSVNfSU9TIHx8IElTX0FORFJPSUQpIHtcblx0XHRcdG1heCA9IEh0bWw1Lk1PQklMRV9NQVhfUkFURTtcblx0XHR9XG5cdFx0aWYoSVNfU0FGQVJJKSB7XG5cdFx0XHRtYXggPSBIdG1sNS5TQUZBUklfTUFYX1JBVEU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1heDtcblx0fVxuXG5cdGdldCByYXRlTWluKCkge1xuXHRcdGxldCBtaW4gPSB0aGlzLnBsYXllci5vcHRpb25zLnJhdGUubWluO1xuXG5cdFx0aWYgKElTX0lPUyB8fCBJU19BTkRST0lEKSB7XG5cdFx0XHRtaW4gPSBIdG1sNS5NT0JJTEVfTUlOX1JBVEU7XG5cdFx0fVxuXG5cdFx0aWYgKElTX1NBRkFSSSkge1xuXHRcdFx0bWluID0gSHRtbDUuU0FGQVJJX01JTl9SQVRFO1xuXHRcdH1cblxuXHRcdHJldHVybiBtaW47XG5cdH1cblxuXHRzZXQgcmF0ZSAodmFsdWUpIHtcblx0XHRzdXBlci5yYXRlID0gdmFsdWU7XG5cdFx0dGhpcy5tZWRpYS5wbGF5YmFja1JhdGUgPSB2YWx1ZTtcblx0fVxuXG5cdGdldEF2YWlsYWJsZVF1YWxpdHlMZXZlbHMoKSB7XG5cdFx0cmV0dXJuIHRoaXMucGxheWVyLm9wdGlvbnMuc291cmNlcy5tYXAoaXRlbSA9PiAoe1xuXHRcdFx0bmFtZSA6IGl0ZW0udGl0bGUsXG5cdFx0XHQuLi5pdGVtXG5cdFx0fSkpO1xuXHR9XG5cblx0c2V0IHBsYXliYWNrUXVhbGl0eShuYW1lKSB7XG5cdFx0c3VwZXIucGxheWJhY2tRdWFsaXR5ID0gbmFtZTtcblx0XHRjb25zdCB0aW1lID0gdGhpcy5jdXJyZW50VGltZTtcblx0XHRjb25zdCByYXRlID0gdGhpcy5yYXRlO1xuXHRcdGNvbnN0IHN0b3AgPSB0aGlzLnBhdXNlZDtcblxuXHRcdHRoaXMuX3BsYXliYWNrUXVhbGl0eSA9IHRoaXMuZ2V0QXZhaWxhYmxlUXVhbGl0eUxldmVscygpLmZpbmQoaXRlbSA9PiBpdGVtLm5hbWUgPT09IG5hbWUpO1xuXG5cdFx0dGhpcy5zcmMgPSB0aGlzLl9wbGF5YmFja1F1YWxpdHk7XG5cdFx0dGhpcy5yYXRlID0gcmF0ZTtcblx0XHR0aGlzLmN1cnJlbnRUaW1lID0gdGltZTtcblxuXHRcdGlmIChzdG9wKSB7XG5cdFx0XHR0aGlzLnBhdXNlKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucGxheSgpO1xuXHRcdH1cblxuXHRcdHRoaXMudHJpZ2dlcigncXVhbGl0eWNoYW5nZScsIHRoaXMuX3BsYXliYWNrUXVhbGl0eSk7XG5cblx0fVxuXG5cdGdldCBwbGF5YmFja1F1YWxpdHkoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3BsYXliYWNrUXVhbGl0eTtcblx0fVxuXG5cdHNldCBzcmMgKHNyYykge1xuXHRcdGlmKHNyYyA9PSBudWxsKSByZXR1cm47XG5cdFx0aWYodGhpcy5zcmMgJiYgdGhpcy5zcmMudXJsID09PSBzcmMudXJsKSByZXR1cm47XG5cblx0XHR0aGlzLm1lZGlhLnNyYyA9IHNyYy51cmw7XG5cblx0XHR0aGlzLl9zb3VyY2UgPSBzcmM7XG5cdH1cblxuXHRnZXQgc3JjICgpIHtcblx0XHRyZXR1cm4gdGhpcy5fc291cmNlXG5cdH1cblxuXHRnZXQgdHJhY2sgKCkge1xuXHRcdHJldHVybiB0aGlzLl90cmFjaztcblx0fVxuXG5cdHNldCB0cmFjayAodmFsdWUpIHtcblx0XHRbLi4udGhpcy5tZWRpYS50ZXh0VHJhY2tzXS5mb3JFYWNoKGl0ZW0gPT4ge1xuXHRcdFx0aWYodmFsdWUgIT0gbnVsbCAmJiBpdGVtLmxhbmd1YWdlID09PSB2YWx1ZS5sYW5ndWFnZSkge1xuXHRcdFx0XHRpdGVtLm1vZGUgPSAnc2hvd2luZydcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGl0ZW0ubW9kZSA9ICdoaWRkZW4nO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdHRoaXMuX3RyYWNrID0gdmFsdWU7XG5cdFx0dGhpcy50cmlnZ2VyKCd0cmFja3NjaGFuZ2UnKTtcblx0fVxuXG5cdGdldCBwYXVzZWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWVkaWEucGF1c2VkO1xuXHR9XG5cblx0Z2V0IHZvbHVtZSAoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWVkaWEudm9sdW1lO1xuXHR9XG5cblx0c2V0IHZvbHVtZSAodmFsdWUpIHtcblx0XHRzdXBlci52b2x1bWUgPSB2YWx1ZTtcblx0XHRjb25zdCBwbGF5ZXIgPSB0aGlzLnBsYXllcjtcblx0XHRpZiAodmFsdWUgPiAxKSB7XG5cdFx0XHR0aGlzLm1lZGlhLnZvbHVtZSA9IDE7XG5cdFx0fSBlbHNlIGlmICh2YWx1ZSA8IHBsYXllci5vcHRpb25zLnZvbHVtZS5tdXRlbGltaXQpIHtcblx0XHRcdHRoaXMubWVkaWEudm9sdW1lID0gMDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5tZWRpYS52b2x1bWUgPSB2YWx1ZTtcblx0XHR9XG5cdFx0dGhpcy5tZWRpYS5tdXRlID0gKHZhbHVlIDwgcGxheWVyLm9wdGlvbnMudm9sdW1lLm11dGVsaW1pdCk7XG5cdH1cblxuXG5cdGdldCBidWZmZXJlZCAoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWVkaWEuYnVmZmVyZWQ7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybiB7VGltZVJhbmdlc31cblx0ICovXG5cdGdldCBzZWVrYWJsZSAoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWVkaWEuc2Vla2FibGU7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybiB7VGltZVJhbmdlc31cblx0ICovXG5cdGdldCBwbGF5ZWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWVkaWEucGxheWVkO1xuXHR9XG5cblx0Z2V0IGVuZGVkKCkge1xuXHRcdHJldHVybiB0aGlzLm1lZGlhLmVuZGVkO1xuXHR9XG5cblx0Z2V0IHBsYXllZFBlcmNlbnRhZ2UoKSB7XG5cdFx0bGV0IHJlc3VsdCA9IDA7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBsYXllZC5sZW5ndGg7IGkrKykge1xuXHRcdFx0cmVzdWx0ICs9ICh0aGlzLnBsYXllZC5lbmQoaSkgLSB0aGlzLnBsYXllZC5zdGFydChpKSlcblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0IC8gdGhpcy5kdXJhdGlvbiAqIDEwMFxuXHR9XG5cblx0Z2V0IGN1cnJlbnRTcmMoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWVkaWEuY3VycmVudFNyYztcblx0fVxuXG5cdGluaXQgKCkge1xuXHRcdHN1cGVyLmluaXQoKTtcblx0XHR0aGlzLmxvYWQoKTtcblx0XHRsZXQgZGZkID0gJC5EZWZlcnJlZCgpO1xuXHRcdHRoaXMuX2luaXRTdWJ0aXRsZXMoKTtcblx0XHR0aGlzLl9pbml0VmlkZW8oKVxuXHRcdFx0LmRvbmUoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLl9pbml0UmF0ZSgpO1xuXHRcdFx0XHR0aGlzLl9pbml0Vm9sdW1lKCk7XG5cdFx0XHRcdGRmZC5yZXNvbHZlKCk7XG5cdFx0XHR9KTtcblx0XHRyZXR1cm4gZGZkLnByb21pc2UoKTtcblx0fVxuXG5cdHN1cHBvcnRzRnVsbFNjcmVlbigpIHtcblx0XHRpZiAodHlwZW9mIHRoaXMubWVkaWEud2Via2l0RW50ZXJGdWxsU2NyZWVuID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRjb25zdCB1c2VyQWdlbnQgPSB3aW5kb3cubmF2aWdhdG9yICYmIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50IHx8ICcnO1xuXG5cdFx0XHQvLyBTZWVtcyB0byBiZSBicm9rZW4gaW4gQ2hyb21pdW0vQ2hyb21lICYmIFNhZmFyaSBpbiBMZW9wYXJkXG5cdFx0XHRpZiAoKC9BbmRyb2lkLykudGVzdCh1c2VyQWdlbnQpIHx8ICEoL0Nocm9tZXxNYWMgT1MgWCAxMC41LykudGVzdCh1c2VyQWdlbnQpKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRlbnRlckZ1bGxzY3JlZW4oKSB7XG5cdFx0Y29uc3QgdmlkZW8gPSB0aGlzLm1lZGlhO1xuXHRcdGlmICh2aWRlby5wYXVzZWQgJiYgdmlkZW8ubmV0d29ya1N0YXRlIDw9IHZpZGVvLkhBVkVfTUVUQURBVEEpIHtcblx0XHRcdC8vIGF0dGVtcHQgdG8gcHJpbWUgdGhlIHZpZGVvIGVsZW1lbnQgZm9yIHByb2dyYW1tYXRpYyBhY2Nlc3Ncblx0XHRcdC8vIHRoaXMgaXNuJ3QgbmVjZXNzYXJ5IG9uIHRoZSBkZXNrdG9wIGJ1dCBzaG91bGRuJ3QgaHVydFxuXHRcdFx0dGhpcy5wbGF5KCk7XG5cblx0XHRcdC8vIHBsYXlpbmcgYW5kIHBhdXNpbmcgc3luY2hyb25vdXNseSBkdXJpbmcgdGhlIHRyYW5zaXRpb24gdG8gZnVsbHNjcmVlblxuXHRcdFx0Ly8gY2FuIGdldCBpT1MgfjYuMSBkZXZpY2VzIGludG8gYSBwbGF5L3BhdXNlIGxvb3Bcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLnBhdXNlKCk7XG5cdFx0XHRcdHZpZGVvLndlYmtpdEVudGVyRnVsbFNjcmVlbigpO1xuXHRcdFx0fSwgMCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZpZGVvLndlYmtpdEVudGVyRnVsbFNjcmVlbigpO1xuXHRcdH1cblx0fVxuXG5cdGV4aXRGdWxsc2NyZWVuKCkge1xuXHRcdHRoaXMubWVkaWEud2Via2l0RXhpdEZ1bGxTY3JlZW4oKTtcblx0fVxuXG5cdHRvZ2dsZVBsYXkgKCkge1xuXHRcdGlmICghdGhpcy5tZWRpYS5wbGF5ZWQgfHwgdGhpcy5tZWRpYS5wYXVzZWQpIHtcblx0XHRcdHRoaXMucGxheSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnBhdXNlKCk7XG5cdFx0fVxuXHR9XG5cblx0cGxheSAoKSB7XG5cdFx0bGV0IGRmZCA9ICQuRGVmZXJyZWQoKTtcblx0XHRjb25zdCBwbGF5UHJvbWlzZSA9IHRoaXMubWVkaWEucGxheSgpO1xuXG5cdFx0aWYocGxheVByb21pc2UgIT0gbnVsbCkge1xuXHRcdFx0cGxheVByb21pc2UudGhlbihmdW5jdGlvbigpIHtcblx0XHRcdFx0ZGZkLnJlc29sdmUoKTtcblx0XHRcdH0pXG5cdFx0fSBlbHNlIHtcblx0XHRcdGRmZC5yZXNvbHZlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBkZmQucHJvbWlzZSgpO1xuXHR9XG5cblx0cGF1c2UgKCkge1xuXHRcdGxldCBkZmQgPSAkLkRlZmVycmVkKCk7XG5cdFx0Y29uc3QgcGF1c2VQcm9taXNlID0gdGhpcy5tZWRpYS5wYXVzZSgpO1xuXG5cdFx0aWYocGF1c2VQcm9taXNlICE9IG51bGwpIHtcblx0XHRcdHBhdXNlUHJvbWlzZS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRkZmQucmVzb2x2ZSgpO1xuXHRcdFx0fSlcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZGZkLnJlc29sdmUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIGRmZC5wcm9taXNlKCk7XG5cdH1cblxuXHRsb2FkKCkge1xuXHRcdHJldHVybiB0aGlzLm1lZGlhLmxvYWQoKVxuXHR9XG5cblx0X2luaXRTdWJ0aXRsZXMgKCkge1xuXHRcdGxldCBfc2VsZiA9IHRoaXM7XG5cdFx0dGhpcy5lbGVtZW50LmNoaWxkcmVuKCd0cmFja1traW5kPVwic3VidGl0bGVzXCJdJykuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0XHRjb25zdCBsYW5ndWFnZSA9ICQodGhpcykuYXR0cignc3JjbGFuZycpO1xuXHRcdFx0Y29uc3QgdGl0bGUgPSAkKHRoaXMpLmF0dHIoJ2xhYmVsJyk7XG5cdFx0XHRjb25zdCBzcmMgPSAkKHRoaXMpLmF0dHIoJ3NyYycpO1xuXHRcdFx0aWYgKHRpdGxlLmxlbmd0aCA+IDAgJiYgc3JjLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0X3NlbGYuc3VidGl0bGVzLnB1c2goe1xuXHRcdFx0XHRcdHRpdGxlIDogdGl0bGUsXG5cdFx0XHRcdFx0bmFtZSA6IGxhbmd1YWdlLFxuXHRcdFx0XHRcdGxhbmd1YWdlIDogbGFuZ3VhZ2Vcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRfaW5pdFZpZGVvICgpIHtcblx0XHRsZXQgZGZkID0gJC5EZWZlcnJlZCgpO1xuXHRcdGlmICh0aGlzLm1lZGlhLnJlYWR5U3RhdGUgPiBIVE1MTWVkaWFFbGVtZW50LkhBVkVfTk9USElORykge1xuXHRcdFx0ZGZkLnJlc29sdmUoKTtcblx0XHRcdHRoaXMuX3RleHRUcmFja3NIYWNrKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCQodGhpcy5tZWRpYSkub25lKCdsb2FkZWRtZXRhZGF0YScsIChlKSA9PiB7XG5cdFx0XHRcdGRmZC5yZXNvbHZlKClcblx0XHRcdFx0dGhpcy5fdGV4dFRyYWNrc0hhY2soKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRyZXR1cm4gZGZkLnByb21pc2UoKTtcblx0fVxuXG5cdF90ZXh0VHJhY2tzSGFjayAoKSB7XG5cblx0XHQvLyBUaGlzIGlzIGdlbmVyYWxseSBmb3IgRmlyZWZveCBvbmx5XG5cdFx0Ly8gYmVjYXVzZSBpdCBzb21laG93IHJlc2V0cyB0cmFjayBsaXN0XG5cdFx0Ly8gZm9yIHZpZGVvIGVsZW1lbnQgYWZ0ZXIgRE9NIG1hbmlwdWxhdGlvbi5cblxuXHRcdGlmICh0aGlzLm1lZGlhLnRleHRUcmFja3MubGVuZ3RoID09PSAwICYmIHRoaXMuc3VidGl0bGVzLmxlbmd0aCA+IDApIHtcblx0XHRcdHRoaXMuZWxlbWVudC5jaGlsZHJlbigndHJhY2tba2luZD1cInN1YnRpdGxlc1wiXScpLnJlbW92ZSgpO1xuXHRcdFx0Zm9yICh2YXIgaSBpbiB0aGlzLnN1YnRpdGxlcykge1xuXHRcdFx0XHRpZiAodGhpcy5zdWJ0aXRsZXMuaGFzT3duUHJvcGVydHkoaSkpIHtcblx0XHRcdFx0XHR0aGlzLmVsZW1lbnRcblx0XHRcdFx0XHRcdC5hcHBlbmQoJCgnPHRyYWNrLz4nKVxuXHRcdFx0XHRcdFx0XHQuYXR0cignbGFiZWwnLCB0aGlzLnN1YnRpdGxlc1sgaSBdLnRpdGxlKVxuXHRcdFx0XHRcdFx0XHQuYXR0cignc3JjJywgdGhpcy5zdWJ0aXRsZXNbIGkgXS5zcmMpXG5cdFx0XHRcdFx0XHRcdC5hdHRyKCdzcmNsYW5nJywgdGhpcy5zdWJ0aXRsZXNbIGkgXS5sYW5ndWFnZSlcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ2lkJywgdGhpcy5zdWJ0aXRsZXNbIGkgXS5sYW5ndWFnZSlcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ2tpbmQnLCAnc3VidGl0bGVzJykpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cbn1cbi8qKlxuICogTWluIHJhdGUgZm9yIGFuZHJvaWQgYW5kIGlvc1xuICovXG5IdG1sNS5NT0JJTEVfTUlOX1JBVEUgPSAwLjU7XG5cbi8qKlxuICogTWF4IHJhdGUgZm9yIGFuZHJvaWQgYW5kIGlvc1xuICovXG5IdG1sNS5NT0JJTEVfTUFYX1JBVEUgPSAyO1xuXG5IdG1sNS5TQUZBUklfTUlOX1JBVEUgPSAwLjU7XG5cbkh0bWw1LlNBRkFSSV9NQVhfUkFURSA9IDI7XG5cbkh0bWw1LlRFU1RfVklERU8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpO1xuXG4vKipcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKiAgICAgICAgIC0gVHJ1ZSBpZiB2b2x1bWUgY2FuIGJlIGNvbnRyb2xsZWRcbiAqICAgICAgICAgLSBGYWxzZSBvdGhlcndpc2VcbiAqL1xuSHRtbDUuY2FuQ29udHJvbFZvbHVtZSA9IGZ1bmN0aW9uKCkge1xuXHQvLyBJRSB3aWxsIGVycm9yIGlmIFdpbmRvd3MgTWVkaWEgUGxheWVyIG5vdCBpbnN0YWxsZWQgIzMzMTVcblx0dHJ5IHtcblx0XHRjb25zdCB2b2x1bWUgPSBIdG1sNS5URVNUX1ZJREVPLnZvbHVtZTtcblxuXHRcdEh0bWw1LlRFU1RfVklERU8udm9sdW1lID0gKHZvbHVtZSAvIDIpICsgMC4xO1xuXHRcdHJldHVybiB2b2x1bWUgIT09IEh0bWw1LlRFU1RfVklERU8udm9sdW1lO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xuXG5IdG1sNS5wcm90b3R5cGUuZmVhdHVyZUNvbnRyb2xWb2x1bWUgPSBIdG1sNS5jYW5Db250cm9sVm9sdW1lKCk7XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnSHRtbDUnLCBIdG1sNSk7XG5leHBvcnQgZGVmYXVsdCBIdG1sNTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9lbnRpdHkvSHRtbDUuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudHMvQ29tcG9uZW50JztcbmltcG9ydCBDb29raWUgZnJvbSAnLi4vdXRpbHMvY29va2llJztcbmltcG9ydCBNZWRpYUVycm9yIGZyb20gJy4uL01lZGlhRXJyb3InO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuY2xhc3MgRW50aXR5IGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblx0XHR0aGlzLl90cmlnZ2VyU3RhY2sgPSBbXTtcblx0XHR0aGlzLl9zdG9wTGlzdGVuID0gZmFsc2U7XG5cblx0XHRpZiAodGhpcy5wbGF5ZXIub3B0aW9ucy5zcmMgPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5wbGF5ZXIuZXJyb3IgPSBuZXcgTWVkaWFFcnJvcign0JLQuNC00LXQvtGE0LDQudC7INC90LUg0L3QsNC50LTQtdC9LicpO1xuXHRcdH1cblxuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0dHJpZ2dlciguLi5hcmdzKSB7XG5cdFx0aWYoIXRoaXMuX3N0b3BMaXN0ZW4pIHtcblx0XHRcdHRoaXMuX3RyaWdnZXJTdGFjay5wdXNoKGFyZ3MpO1xuXHRcdH1cblx0XHRzdXBlci50cmlnZ2VyKC4uLmFyZ3MpO1xuXHR9XG5cblx0aW5pdCgpIHtcblx0XHR0aGlzLl9zdG9wTGlzdGVuID0gdHJ1ZTtcblx0XHR0aGlzLl90cmlnZ2VyU3RhY2suZm9yRWFjaChhcmdzID0+IHtcblx0XHRcdHRoaXMudHJpZ2dlciguLi5hcmdzKTtcblx0XHR9KTtcblx0fVxuXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudCA9ICQoJzxkaXYgLz4nKTtcblx0fVxuXG5cdHNldCBwb3N0ZXIodXJsKSB7XG5cdFx0dGhpcy5fcG9zdGVyID0gdXJsO1xuXHRcdHRoaXMudHJpZ2dlcigncG9zdGVyY2hhbmdlJywgeyB1cmwgfSk7XG5cdH1cblxuXG5cdGdldCBwb3N0ZXIoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3Bvc3Rlcjtcblx0fVxuXG5cdGdldCBjdXJyZW50VGltZSgpIHtcblx0XHRyZXR1cm5cblx0fVxuXG5cdHNldCBjdXJyZW50VGltZSh2YWx1ZSkge1xuXG5cdH1cblxuXHRnZXQgZHVyYXRpb24oKSB7XG5cdFx0cmV0dXJuXG5cdH1cblxuXHRzZXQgbXV0ZWQodmFsdWUpIHtcblxuXHR9XG5cblx0Z2V0IG11dGVkKCkge1xuXG5cdH1cblxuXHRnZXQgaGVpZ2h0KCkge1xuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQuaW5uZXJIZWlnaHQoKVxuXHR9XG5cblx0Z2V0IHdpZHRoKCkge1xuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQud2lkdGgoKVxuXHR9XG5cblx0c2V0IHJhdGVNYXgodmFsdWUpIHtcblx0XHR0aGlzLl9yYXRlTWF4ID0gdmFsdWU7XG5cdH1cblxuXHRzZXQgcmF0ZU1pbih2YWx1ZSkge1xuXHRcdHRoaXMuX3JhdGVNaW4gPSB2YWx1ZTtcblx0fVxuXG5cdGdldCByYXRlTWF4KCkge1xuXHRcdHJldHVybiB0aGlzLl9yYXRlTWF4IHx8IHRoaXMucGxheWVyLm9wdGlvbnMucmF0ZS5tYXg7XG5cblx0fVxuXG5cdGdldCByYXRlTWluKCkge1xuXHRcdHJldHVybiB0aGlzLl9yYXRlTWluIHx8IHRoaXMucGxheWVyLm9wdGlvbnMucmF0ZS5taW47XG5cdH1cblxuXHRnZXQgcmF0ZSgpIHtcblx0fVxuXG5cdHNldCByYXRlKHZhbHVlKSB7XG5cdFx0aWYodmFsdWUgPiB0aGlzLnJhdGVNYXggfHwgdmFsdWUgPCB0aGlzLnJhdGVNaW4pIHJldHVybjtcblx0XHRDb29raWUuc2V0KCdyYXRlJywgdmFsdWUpO1xuXHR9XG5cblx0aW5jcmVhc2VSYXRlKCkge1xuXHRcdHRoaXMucmF0ZSArPSB0aGlzLnBsYXllci5vcHRpb25zLnJhdGUuc3RlcDtcblx0fVxuXG5cdGRlY3JlYXNlUmF0ZSgpIHtcblx0XHR0aGlzLnJhdGUgLT0gdGhpcy5wbGF5ZXIub3B0aW9ucy5yYXRlLnN0ZXA7XG5cdH1cblxuXHRzZXQgcGxheWJhY2tRdWFsaXR5KG5hbWUpIHtcblx0XHRjb25zdCBsZXZlbHMgPSB0aGlzLmdldEF2YWlsYWJsZVF1YWxpdHlMZXZlbHMoKTtcblx0XHRpZighbGV2ZWxzLnNvbWUob2JqID0+IG5hbWUgaW4gb2JqKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0fVxuXG5cdGdldCBwbGF5YmFja1F1YWxpdHkoKSB7XG5cblx0fVxuXG5cdGdldCBwYXVzZWQoKSB7XG5cblx0fVxuXG5cdGdldCBwbGF5ZWQoKSB7XG5cblx0fVxuXG5cdGdldCBkZWZhdWx0UmF0ZSgpIHtcblx0XHRyZXR1cm4gQ29va2llLmdldCgncmF0ZScpIHx8IHRoaXMucGxheWVyLm9wdGlvbnMucmF0ZS5kZWZhdWx0XG5cdH1cblxuXHRnZXQgZGVmYXVsdFZvbHVtZSAoKSB7XG5cdFx0cmV0dXJuIENvb2tpZS5nZXQoJ3ZvbHVtZScpIHx8IHRoaXMucGxheWVyLm9wdGlvbnMudm9sdW1lLmRlZmF1bHQ7XG5cdH1cblxuXHRzZXQgdm9sdW1lKHZhbHVlKSB7XG5cdFx0Y29uc3QgcGxheWVyID0gdGhpcy5wbGF5ZXI7XG5cdFx0aWYodmFsdWUgPCAxICYmIHZhbHVlID4gcGxheWVyLm9wdGlvbnMudm9sdW1lLm11dGVsaW1pdCkge1xuXHRcdFx0Q29va2llLnNldCgndm9sdW1lJywgdmFsdWUpO1xuXHRcdH1cblx0fVxuXG5cdHNldCBzcmMgKHZhbHVlKSB7XG5cblx0fVxuXG5cdGdldCBzcmMoKSB7XG5cblx0fVxuXG5cdHN1cHBvcnRzRnVsbFNjcmVlbigpIHtcblxuXHR9XG5cblx0cGxheSgpIHtcblxuXHR9XG5cblx0cGF1c2UgKCkge1xuXG5cdH1cblxuXHRsb2FkKCkge1xuXHR9XG5cblx0dG9nZ2xlUGxheSAoKSB7XG5cdFx0aWYgKHRoaXMucGF1c2VkKSB7XG5cdFx0XHR0aGlzLnBsYXkoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5wYXVzZSgpO1xuXHRcdH1cblx0fVxuXG5cdF9pbml0UmF0ZSAoKSB7XG5cdFx0dGhpcy5yYXRlID0gdGhpcy5kZWZhdWx0UmF0ZTtcblx0fVxuXG5cdF9pbml0Vm9sdW1lICgpIHtcblx0XHR0aGlzLnZvbHVtZSA9IHRoaXMuZGVmYXVsdFZvbHVtZTtcblx0fVxuXG59XG5FbnRpdHkucHJvdG90eXBlLmZlYXR1cmVDb250cm9sVm9sdW1lID0gdHJ1ZTtcblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdFbnRpdHknLCBFbnRpdHkpO1xuXG5leHBvcnQgZGVmYXVsdCBFbnRpdHk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvZW50aXR5L0VudGl0eS5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGRlZmluZSA9IHJlcXVpcmUoJ2RlZmluZS1wcm9wZXJ0aWVzJyk7XG52YXIgRVMgPSByZXF1aXJlKCdlcy1hYnN0cmFjdC9lczYnKTtcblxudmFyIGltcGxlbWVudGF0aW9uID0gcmVxdWlyZSgnLi9pbXBsZW1lbnRhdGlvbicpO1xudmFyIGdldFBvbHlmaWxsID0gcmVxdWlyZSgnLi9wb2x5ZmlsbCcpO1xudmFyIHNoaW0gPSByZXF1aXJlKCcuL3NoaW0nKTtcblxudmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xuXG52YXIgcG9seWZpbGwgPSBnZXRQb2x5ZmlsbCgpO1xuXG52YXIgYm91bmRGaW5kU2hpbSA9IGZ1bmN0aW9uIGZpbmQoYXJyYXksIHByZWRpY2F0ZSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG5cdEVTLlJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJyYXkpO1xuXHR2YXIgYXJncyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcblx0cmV0dXJuIHBvbHlmaWxsLmFwcGx5KGFycmF5LCBhcmdzKTtcbn07XG5cbmRlZmluZShib3VuZEZpbmRTaGltLCB7XG5cdGdldFBvbHlmaWxsOiBnZXRQb2x5ZmlsbCxcblx0aW1wbGVtZW50YXRpb246IGltcGxlbWVudGF0aW9uLFxuXHRzaGltOiBzaGltXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBib3VuZEZpbmRTaGltO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2FycmF5LnByb3RvdHlwZS5maW5kL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxudmFyIGtleXMgPSByZXF1aXJlKCdvYmplY3Qta2V5cycpO1xudmFyIGhhc1N5bWJvbHMgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBTeW1ib2woJ2ZvbycpID09PSAnc3ltYm9sJztcblxudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbnZhciBjb25jYXQgPSBBcnJheS5wcm90b3R5cGUuY29uY2F0O1xudmFyIG9yaWdEZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxudmFyIGlzRnVuY3Rpb24gPSBmdW5jdGlvbiAoZm4pIHtcblx0cmV0dXJuIHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJyAmJiB0b1N0ci5jYWxsKGZuKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbn07XG5cbnZhciBhcmVQcm9wZXJ0eURlc2NyaXB0b3JzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgb2JqID0ge307XG5cdHRyeSB7XG5cdFx0b3JpZ0RlZmluZVByb3BlcnR5KG9iaiwgJ3gnLCB7IGVudW1lcmFibGU6IGZhbHNlLCB2YWx1ZTogb2JqIH0pO1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFycywgbm8tcmVzdHJpY3RlZC1zeW50YXhcblx0XHRmb3IgKHZhciBfIGluIG9iaikgeyAvLyBqc2NzOmlnbm9yZSBkaXNhbGxvd1VudXNlZFZhcmlhYmxlc1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRyZXR1cm4gb2JqLnggPT09IG9iajtcblx0fSBjYXRjaCAoZSkgeyAvKiB0aGlzIGlzIElFIDguICovXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xudmFyIHN1cHBvcnRzRGVzY3JpcHRvcnMgPSBvcmlnRGVmaW5lUHJvcGVydHkgJiYgYXJlUHJvcGVydHlEZXNjcmlwdG9yc1N1cHBvcnRlZCgpO1xuXG52YXIgZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lLCB2YWx1ZSwgcHJlZGljYXRlKSB7XG5cdGlmIChuYW1lIGluIG9iamVjdCAmJiAoIWlzRnVuY3Rpb24ocHJlZGljYXRlKSB8fCAhcHJlZGljYXRlKCkpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGlmIChzdXBwb3J0c0Rlc2NyaXB0b3JzKSB7XG5cdFx0b3JpZ0RlZmluZVByb3BlcnR5KG9iamVjdCwgbmFtZSwge1xuXHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdFx0ZW51bWVyYWJsZTogZmFsc2UsXG5cdFx0XHR2YWx1ZTogdmFsdWUsXG5cdFx0XHR3cml0YWJsZTogdHJ1ZVxuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdG9iamVjdFtuYW1lXSA9IHZhbHVlO1xuXHR9XG59O1xuXG52YXIgZGVmaW5lUHJvcGVydGllcyA9IGZ1bmN0aW9uIChvYmplY3QsIG1hcCkge1xuXHR2YXIgcHJlZGljYXRlcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyID8gYXJndW1lbnRzWzJdIDoge307XG5cdHZhciBwcm9wcyA9IGtleXMobWFwKTtcblx0aWYgKGhhc1N5bWJvbHMpIHtcblx0XHRwcm9wcyA9IGNvbmNhdC5jYWxsKHByb3BzLCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG1hcCkpO1xuXHR9XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpICs9IDEpIHtcblx0XHRkZWZpbmVQcm9wZXJ0eShvYmplY3QsIHByb3BzW2ldLCBtYXBbcHJvcHNbaV1dLCBwcmVkaWNhdGVzW3Byb3BzW2ldXSk7XG5cdH1cbn07XG5cbmRlZmluZVByb3BlcnRpZXMuc3VwcG9ydHNEZXNjcmlwdG9ycyA9ICEhc3VwcG9ydHNEZXNjcmlwdG9ycztcblxubW9kdWxlLmV4cG9ydHMgPSBkZWZpbmVQcm9wZXJ0aWVzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2RlZmluZS1wcm9wZXJ0aWVzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxudmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xudmFyIGlzQXJncyA9IHJlcXVpcmUoJy4vaXNBcmd1bWVudHMnKTtcblxudmFyIG9yaWdLZXlzID0gT2JqZWN0LmtleXM7XG52YXIga2V5c1NoaW0gPSBvcmlnS2V5cyA/IGZ1bmN0aW9uIGtleXMobykgeyByZXR1cm4gb3JpZ0tleXMobyk7IH0gOiByZXF1aXJlKCcuL2ltcGxlbWVudGF0aW9uJyk7XG5cbnZhciBvcmlnaW5hbEtleXMgPSBPYmplY3Qua2V5cztcblxua2V5c1NoaW0uc2hpbSA9IGZ1bmN0aW9uIHNoaW1PYmplY3RLZXlzKCkge1xuXHRpZiAoT2JqZWN0LmtleXMpIHtcblx0XHR2YXIga2V5c1dvcmtzV2l0aEFyZ3VtZW50cyA9IChmdW5jdGlvbiAoKSB7XG5cdFx0XHQvLyBTYWZhcmkgNS4wIGJ1Z1xuXHRcdFx0dmFyIGFyZ3MgPSBPYmplY3Qua2V5cyhhcmd1bWVudHMpO1xuXHRcdFx0cmV0dXJuIGFyZ3MgJiYgYXJncy5sZW5ndGggPT09IGFyZ3VtZW50cy5sZW5ndGg7XG5cdFx0fSgxLCAyKSk7XG5cdFx0aWYgKCFrZXlzV29ya3NXaXRoQXJndW1lbnRzKSB7XG5cdFx0XHRPYmplY3Qua2V5cyA9IGZ1bmN0aW9uIGtleXMob2JqZWN0KSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZnVuYy1uYW1lLW1hdGNoaW5nXG5cdFx0XHRcdGlmIChpc0FyZ3Mob2JqZWN0KSkge1xuXHRcdFx0XHRcdHJldHVybiBvcmlnaW5hbEtleXMoc2xpY2UuY2FsbChvYmplY3QpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gb3JpZ2luYWxLZXlzKG9iamVjdCk7XG5cdFx0XHR9O1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRPYmplY3Qua2V5cyA9IGtleXNTaGltO1xuXHR9XG5cdHJldHVybiBPYmplY3Qua2V5cyB8fCBrZXlzU2hpbTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ga2V5c1NoaW07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vb2JqZWN0LWtleXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQXJndW1lbnRzKHZhbHVlKSB7XG5cdHZhciBzdHIgPSB0b1N0ci5jYWxsKHZhbHVlKTtcblx0dmFyIGlzQXJncyA9IHN0ciA9PT0gJ1tvYmplY3QgQXJndW1lbnRzXSc7XG5cdGlmICghaXNBcmdzKSB7XG5cdFx0aXNBcmdzID0gc3RyICE9PSAnW29iamVjdCBBcnJheV0nICYmXG5cdFx0XHR2YWx1ZSAhPT0gbnVsbCAmJlxuXHRcdFx0dHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJlxuXHRcdFx0dHlwZW9mIHZhbHVlLmxlbmd0aCA9PT0gJ251bWJlcicgJiZcblx0XHRcdHZhbHVlLmxlbmd0aCA+PSAwICYmXG5cdFx0XHR0b1N0ci5jYWxsKHZhbHVlLmNhbGxlZSkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG5cdH1cblx0cmV0dXJuIGlzQXJncztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vb2JqZWN0LWtleXMvaXNBcmd1bWVudHMuanNcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIga2V5c1NoaW07XG5pZiAoIU9iamVjdC5rZXlzKSB7XG5cdC8vIG1vZGlmaWVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2VzLXNoaW1zL2VzNS1zaGltXG5cdHZhciBoYXMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXHR2YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXHR2YXIgaXNBcmdzID0gcmVxdWlyZSgnLi9pc0FyZ3VtZW50cycpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGdsb2JhbC1yZXF1aXJlXG5cdHZhciBpc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXHR2YXIgaGFzRG9udEVudW1CdWcgPSAhaXNFbnVtZXJhYmxlLmNhbGwoeyB0b1N0cmluZzogbnVsbCB9LCAndG9TdHJpbmcnKTtcblx0dmFyIGhhc1Byb3RvRW51bUJ1ZyA9IGlzRW51bWVyYWJsZS5jYWxsKGZ1bmN0aW9uICgpIHt9LCAncHJvdG90eXBlJyk7XG5cdHZhciBkb250RW51bXMgPSBbXG5cdFx0J3RvU3RyaW5nJyxcblx0XHQndG9Mb2NhbGVTdHJpbmcnLFxuXHRcdCd2YWx1ZU9mJyxcblx0XHQnaGFzT3duUHJvcGVydHknLFxuXHRcdCdpc1Byb3RvdHlwZU9mJyxcblx0XHQncHJvcGVydHlJc0VudW1lcmFibGUnLFxuXHRcdCdjb25zdHJ1Y3Rvcidcblx0XTtcblx0dmFyIGVxdWFsc0NvbnN0cnVjdG9yUHJvdG90eXBlID0gZnVuY3Rpb24gKG8pIHtcblx0XHR2YXIgY3RvciA9IG8uY29uc3RydWN0b3I7XG5cdFx0cmV0dXJuIGN0b3IgJiYgY3Rvci5wcm90b3R5cGUgPT09IG87XG5cdH07XG5cdHZhciBleGNsdWRlZEtleXMgPSB7XG5cdFx0JGFwcGxpY2F0aW9uQ2FjaGU6IHRydWUsXG5cdFx0JGNvbnNvbGU6IHRydWUsXG5cdFx0JGV4dGVybmFsOiB0cnVlLFxuXHRcdCRmcmFtZTogdHJ1ZSxcblx0XHQkZnJhbWVFbGVtZW50OiB0cnVlLFxuXHRcdCRmcmFtZXM6IHRydWUsXG5cdFx0JGlubmVySGVpZ2h0OiB0cnVlLFxuXHRcdCRpbm5lcldpZHRoOiB0cnVlLFxuXHRcdCRvbm1vemZ1bGxzY3JlZW5jaGFuZ2U6IHRydWUsXG5cdFx0JG9ubW96ZnVsbHNjcmVlbmVycm9yOiB0cnVlLFxuXHRcdCRvdXRlckhlaWdodDogdHJ1ZSxcblx0XHQkb3V0ZXJXaWR0aDogdHJ1ZSxcblx0XHQkcGFnZVhPZmZzZXQ6IHRydWUsXG5cdFx0JHBhZ2VZT2Zmc2V0OiB0cnVlLFxuXHRcdCRwYXJlbnQ6IHRydWUsXG5cdFx0JHNjcm9sbExlZnQ6IHRydWUsXG5cdFx0JHNjcm9sbFRvcDogdHJ1ZSxcblx0XHQkc2Nyb2xsWDogdHJ1ZSxcblx0XHQkc2Nyb2xsWTogdHJ1ZSxcblx0XHQkc2VsZjogdHJ1ZSxcblx0XHQkd2Via2l0SW5kZXhlZERCOiB0cnVlLFxuXHRcdCR3ZWJraXRTdG9yYWdlSW5mbzogdHJ1ZSxcblx0XHQkd2luZG93OiB0cnVlXG5cdH07XG5cdHZhciBoYXNBdXRvbWF0aW9uRXF1YWxpdHlCdWcgPSAoZnVuY3Rpb24gKCkge1xuXHRcdC8qIGdsb2JhbCB3aW5kb3cgKi9cblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdFx0Zm9yICh2YXIgayBpbiB3aW5kb3cpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGlmICghZXhjbHVkZWRLZXlzWyckJyArIGtdICYmIGhhcy5jYWxsKHdpbmRvdywgaykgJiYgd2luZG93W2tdICE9PSBudWxsICYmIHR5cGVvZiB3aW5kb3dba10gPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdGVxdWFsc0NvbnN0cnVjdG9yUHJvdG90eXBlKHdpbmRvd1trXSk7XG5cdFx0XHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0oKSk7XG5cdHZhciBlcXVhbHNDb25zdHJ1Y3RvclByb3RvdHlwZUlmTm90QnVnZ3kgPSBmdW5jdGlvbiAobykge1xuXHRcdC8qIGdsb2JhbCB3aW5kb3cgKi9cblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIWhhc0F1dG9tYXRpb25FcXVhbGl0eUJ1Zykge1xuXHRcdFx0cmV0dXJuIGVxdWFsc0NvbnN0cnVjdG9yUHJvdG90eXBlKG8pO1xuXHRcdH1cblx0XHR0cnkge1xuXHRcdFx0cmV0dXJuIGVxdWFsc0NvbnN0cnVjdG9yUHJvdG90eXBlKG8pO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH07XG5cblx0a2V5c1NoaW0gPSBmdW5jdGlvbiBrZXlzKG9iamVjdCkge1xuXHRcdHZhciBpc09iamVjdCA9IG9iamVjdCAhPT0gbnVsbCAmJiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0Jztcblx0XHR2YXIgaXNGdW5jdGlvbiA9IHRvU3RyLmNhbGwob2JqZWN0KSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcblx0XHR2YXIgaXNBcmd1bWVudHMgPSBpc0FyZ3Mob2JqZWN0KTtcblx0XHR2YXIgaXNTdHJpbmcgPSBpc09iamVjdCAmJiB0b1N0ci5jYWxsKG9iamVjdCkgPT09ICdbb2JqZWN0IFN0cmluZ10nO1xuXHRcdHZhciB0aGVLZXlzID0gW107XG5cblx0XHRpZiAoIWlzT2JqZWN0ICYmICFpc0Z1bmN0aW9uICYmICFpc0FyZ3VtZW50cykge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmtleXMgY2FsbGVkIG9uIGEgbm9uLW9iamVjdCcpO1xuXHRcdH1cblxuXHRcdHZhciBza2lwUHJvdG8gPSBoYXNQcm90b0VudW1CdWcgJiYgaXNGdW5jdGlvbjtcblx0XHRpZiAoaXNTdHJpbmcgJiYgb2JqZWN0Lmxlbmd0aCA+IDAgJiYgIWhhcy5jYWxsKG9iamVjdCwgMCkpIHtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgb2JqZWN0Lmxlbmd0aDsgKytpKSB7XG5cdFx0XHRcdHRoZUtleXMucHVzaChTdHJpbmcoaSkpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChpc0FyZ3VtZW50cyAmJiBvYmplY3QubGVuZ3RoID4gMCkge1xuXHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBvYmplY3QubGVuZ3RoOyArK2opIHtcblx0XHRcdFx0dGhlS2V5cy5wdXNoKFN0cmluZyhqKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGZvciAodmFyIG5hbWUgaW4gb2JqZWN0KSB7XG5cdFx0XHRcdGlmICghKHNraXBQcm90byAmJiBuYW1lID09PSAncHJvdG90eXBlJykgJiYgaGFzLmNhbGwob2JqZWN0LCBuYW1lKSkge1xuXHRcdFx0XHRcdHRoZUtleXMucHVzaChTdHJpbmcobmFtZSkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGhhc0RvbnRFbnVtQnVnKSB7XG5cdFx0XHR2YXIgc2tpcENvbnN0cnVjdG9yID0gZXF1YWxzQ29uc3RydWN0b3JQcm90b3R5cGVJZk5vdEJ1Z2d5KG9iamVjdCk7XG5cblx0XHRcdGZvciAodmFyIGsgPSAwOyBrIDwgZG9udEVudW1zLmxlbmd0aDsgKytrKSB7XG5cdFx0XHRcdGlmICghKHNraXBDb25zdHJ1Y3RvciAmJiBkb250RW51bXNba10gPT09ICdjb25zdHJ1Y3RvcicpICYmIGhhcy5jYWxsKG9iamVjdCwgZG9udEVudW1zW2tdKSkge1xuXHRcdFx0XHRcdHRoZUtleXMucHVzaChkb250RW51bXNba10pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiB0aGVLZXlzO1xuXHR9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBrZXlzU2hpbTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9vYmplY3Qta2V5cy9pbXBsZW1lbnRhdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9lczIwMTUnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy1hYnN0cmFjdC9lczYuanNcbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaGFzID0gcmVxdWlyZSgnaGFzJyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCdlcy10by1wcmltaXRpdmUvZXM2Jyk7XG52YXIga2V5cyA9IHJlcXVpcmUoJ29iamVjdC1rZXlzJyk7XG5cbnZhciBHZXRJbnRyaW5zaWMgPSByZXF1aXJlKCcuL0dldEludHJpbnNpYycpO1xuXG52YXIgJFR5cGVFcnJvciA9IEdldEludHJpbnNpYygnJVR5cGVFcnJvciUnKTtcbnZhciAkU3ludGF4RXJyb3IgPSBHZXRJbnRyaW5zaWMoJyVTeW50YXhFcnJvciUnKTtcbnZhciAkQXJyYXkgPSBHZXRJbnRyaW5zaWMoJyVBcnJheSUnKTtcbnZhciAkU3RyaW5nID0gR2V0SW50cmluc2ljKCclU3RyaW5nJScpO1xudmFyICRPYmplY3QgPSBHZXRJbnRyaW5zaWMoJyVPYmplY3QlJyk7XG52YXIgJE51bWJlciA9IEdldEludHJpbnNpYygnJU51bWJlciUnKTtcbnZhciAkU3ltYm9sID0gR2V0SW50cmluc2ljKCclU3ltYm9sJScsIHRydWUpO1xudmFyICRSZWdFeHAgPSBHZXRJbnRyaW5zaWMoJyVSZWdFeHAlJyk7XG5cbnZhciBoYXNTeW1ib2xzID0gISEkU3ltYm9sO1xuXG52YXIgYXNzZXJ0UmVjb3JkID0gcmVxdWlyZSgnLi9oZWxwZXJzL2Fzc2VydFJlY29yZCcpO1xudmFyICRpc05hTiA9IHJlcXVpcmUoJy4vaGVscGVycy9pc05hTicpO1xudmFyICRpc0Zpbml0ZSA9IHJlcXVpcmUoJy4vaGVscGVycy9pc0Zpbml0ZScpO1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSAkTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIgfHwgTWF0aC5wb3coMiwgNTMpIC0gMTtcblxudmFyIGFzc2lnbiA9IHJlcXVpcmUoJy4vaGVscGVycy9hc3NpZ24nKTtcbnZhciBzaWduID0gcmVxdWlyZSgnLi9oZWxwZXJzL3NpZ24nKTtcbnZhciBtb2QgPSByZXF1aXJlKCcuL2hlbHBlcnMvbW9kJyk7XG52YXIgaXNQcmltaXRpdmUgPSByZXF1aXJlKCcuL2hlbHBlcnMvaXNQcmltaXRpdmUnKTtcbnZhciBwYXJzZUludGVnZXIgPSBwYXJzZUludDtcbnZhciBiaW5kID0gcmVxdWlyZSgnZnVuY3Rpb24tYmluZCcpO1xudmFyIGFycmF5U2xpY2UgPSBiaW5kLmNhbGwoRnVuY3Rpb24uY2FsbCwgJEFycmF5LnByb3RvdHlwZS5zbGljZSk7XG52YXIgc3RyU2xpY2UgPSBiaW5kLmNhbGwoRnVuY3Rpb24uY2FsbCwgJFN0cmluZy5wcm90b3R5cGUuc2xpY2UpO1xudmFyIGlzQmluYXJ5ID0gYmluZC5jYWxsKEZ1bmN0aW9uLmNhbGwsICRSZWdFeHAucHJvdG90eXBlLnRlc3QsIC9eMGJbMDFdKyQvaSk7XG52YXIgaXNPY3RhbCA9IGJpbmQuY2FsbChGdW5jdGlvbi5jYWxsLCAkUmVnRXhwLnByb3RvdHlwZS50ZXN0LCAvXjBvWzAtN10rJC9pKTtcbnZhciByZWdleEV4ZWMgPSBiaW5kLmNhbGwoRnVuY3Rpb24uY2FsbCwgJFJlZ0V4cC5wcm90b3R5cGUuZXhlYyk7XG52YXIgbm9uV1MgPSBbJ1xcdTAwODUnLCAnXFx1MjAwYicsICdcXHVmZmZlJ10uam9pbignJyk7XG52YXIgbm9uV1NyZWdleCA9IG5ldyAkUmVnRXhwKCdbJyArIG5vbldTICsgJ10nLCAnZycpO1xudmFyIGhhc05vbldTID0gYmluZC5jYWxsKEZ1bmN0aW9uLmNhbGwsICRSZWdFeHAucHJvdG90eXBlLnRlc3QsIG5vbldTcmVnZXgpO1xudmFyIGludmFsaWRIZXhMaXRlcmFsID0gL15bLStdMHhbMC05YS1mXSskL2k7XG52YXIgaXNJbnZhbGlkSGV4TGl0ZXJhbCA9IGJpbmQuY2FsbChGdW5jdGlvbi5jYWxsLCAkUmVnRXhwLnByb3RvdHlwZS50ZXN0LCBpbnZhbGlkSGV4TGl0ZXJhbCk7XG52YXIgJGNoYXJDb2RlQXQgPSBiaW5kLmNhbGwoRnVuY3Rpb24uY2FsbCwgJFN0cmluZy5wcm90b3R5cGUuY2hhckNvZGVBdCk7XG5cbnZhciB0b1N0ciA9IGJpbmQuY2FsbChGdW5jdGlvbi5jYWxsLCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKTtcblxudmFyICROdW1iZXJWYWx1ZU9mID0gYmluZC5jYWxsKEZ1bmN0aW9uLmNhbGwsIEdldEludHJpbnNpYygnJU51bWJlclByb3RvdHlwZSUnKS52YWx1ZU9mKTtcbnZhciAkQm9vbGVhblZhbHVlT2YgPSBiaW5kLmNhbGwoRnVuY3Rpb24uY2FsbCwgR2V0SW50cmluc2ljKCclQm9vbGVhblByb3RvdHlwZSUnKS52YWx1ZU9mKTtcbnZhciAkU3RyaW5nVmFsdWVPZiA9IGJpbmQuY2FsbChGdW5jdGlvbi5jYWxsLCBHZXRJbnRyaW5zaWMoJyVTdHJpbmdQcm90b3R5cGUlJykudmFsdWVPZik7XG52YXIgJERhdGVWYWx1ZU9mID0gYmluZC5jYWxsKEZ1bmN0aW9uLmNhbGwsIEdldEludHJpbnNpYygnJURhdGVQcm90b3R5cGUlJykudmFsdWVPZik7XG5cbnZhciAkZmxvb3IgPSBNYXRoLmZsb29yO1xudmFyICRhYnMgPSBNYXRoLmFicztcblxudmFyICRPYmplY3RDcmVhdGUgPSBPYmplY3QuY3JlYXRlO1xudmFyICRnT1BEID0gJE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbnZhciAkaXNFeHRlbnNpYmxlID0gJE9iamVjdC5pc0V4dGVuc2libGU7XG5cbnZhciAkZGVmaW5lUHJvcGVydHkgPSAkT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG4vLyB3aGl0ZXNwYWNlIGZyb206IGh0dHA6Ly9lczUuZ2l0aHViLmlvLyN4MTUuNS40LjIwXG4vLyBpbXBsZW1lbnRhdGlvbiBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9lcy1zaGltcy9lczUtc2hpbS9ibG9iL3YzLjQuMC9lczUtc2hpbS5qcyNMMTMwNC1MMTMyNFxudmFyIHdzID0gW1xuXHQnXFx4MDlcXHgwQVxceDBCXFx4MENcXHgwRFxceDIwXFx4QTBcXHUxNjgwXFx1MTgwRVxcdTIwMDBcXHUyMDAxXFx1MjAwMlxcdTIwMDMnLFxuXHQnXFx1MjAwNFxcdTIwMDVcXHUyMDA2XFx1MjAwN1xcdTIwMDhcXHUyMDA5XFx1MjAwQVxcdTIwMkZcXHUyMDVGXFx1MzAwMFxcdTIwMjgnLFxuXHQnXFx1MjAyOVxcdUZFRkYnXG5dLmpvaW4oJycpO1xudmFyIHRyaW1SZWdleCA9IG5ldyBSZWdFeHAoJyheWycgKyB3cyArICddKyl8KFsnICsgd3MgKyAnXSskKScsICdnJyk7XG52YXIgcmVwbGFjZSA9IGJpbmQuY2FsbChGdW5jdGlvbi5jYWxsLCAkU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlKTtcbnZhciB0cmltID0gZnVuY3Rpb24gKHZhbHVlKSB7XG5cdHJldHVybiByZXBsYWNlKHZhbHVlLCB0cmltUmVnZXgsICcnKTtcbn07XG5cbnZhciBFUzUgPSByZXF1aXJlKCcuL2VzNScpO1xuXG52YXIgaGFzUmVnRXhwTWF0Y2hlciA9IHJlcXVpcmUoJ2lzLXJlZ2V4Jyk7XG5cbi8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1hYnN0cmFjdC1vcGVyYXRpb25zXG52YXIgRVM2ID0gYXNzaWduKGFzc2lnbih7fSwgRVM1KSwge1xuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1jYWxsLWYtdi1hcmdzXG5cdENhbGw6IGZ1bmN0aW9uIENhbGwoRiwgVikge1xuXHRcdHZhciBhcmdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgPyBhcmd1bWVudHNbMl0gOiBbXTtcblx0XHRpZiAoIXRoaXMuSXNDYWxsYWJsZShGKSkge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoRiArICcgaXMgbm90IGEgZnVuY3Rpb24nKTtcblx0XHR9XG5cdFx0cmV0dXJuIEYuYXBwbHkoViwgYXJncyk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvcHJpbWl0aXZlXG5cdFRvUHJpbWl0aXZlOiB0b1ByaW1pdGl2ZSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG9ib29sZWFuXG5cdC8vIFRvQm9vbGVhbjogRVM1LlRvQm9vbGVhbixcblxuXHQvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtdG9udW1iZXJcblx0VG9OdW1iZXI6IGZ1bmN0aW9uIFRvTnVtYmVyKGFyZ3VtZW50KSB7XG5cdFx0dmFyIHZhbHVlID0gaXNQcmltaXRpdmUoYXJndW1lbnQpID8gYXJndW1lbnQgOiB0b1ByaW1pdGl2ZShhcmd1bWVudCwgJE51bWJlcik7XG5cdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N5bWJvbCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCBhIFN5bWJvbCB2YWx1ZSB0byBhIG51bWJlcicpO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuXHRcdFx0aWYgKGlzQmluYXJ5KHZhbHVlKSkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5Ub051bWJlcihwYXJzZUludGVnZXIoc3RyU2xpY2UodmFsdWUsIDIpLCAyKSk7XG5cdFx0XHR9IGVsc2UgaWYgKGlzT2N0YWwodmFsdWUpKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLlRvTnVtYmVyKHBhcnNlSW50ZWdlcihzdHJTbGljZSh2YWx1ZSwgMiksIDgpKTtcblx0XHRcdH0gZWxzZSBpZiAoaGFzTm9uV1ModmFsdWUpIHx8IGlzSW52YWxpZEhleExpdGVyYWwodmFsdWUpKSB7XG5cdFx0XHRcdHJldHVybiBOYU47XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIgdHJpbW1lZCA9IHRyaW0odmFsdWUpO1xuXHRcdFx0XHRpZiAodHJpbW1lZCAhPT0gdmFsdWUpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5Ub051bWJlcih0cmltbWVkKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gJE51bWJlcih2YWx1ZSk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvaW50ZWdlclxuXHQvLyBUb0ludGVnZXI6IEVTNS5Ub051bWJlcixcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG9pbnQzMlxuXHQvLyBUb0ludDMyOiBFUzUuVG9JbnQzMixcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG91aW50MzJcblx0Ly8gVG9VaW50MzI6IEVTNS5Ub1VpbnQzMixcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG9pbnQxNlxuXHRUb0ludDE2OiBmdW5jdGlvbiBUb0ludDE2KGFyZ3VtZW50KSB7XG5cdFx0dmFyIGludDE2Yml0ID0gdGhpcy5Ub1VpbnQxNihhcmd1bWVudCk7XG5cdFx0cmV0dXJuIGludDE2Yml0ID49IDB4ODAwMCA/IGludDE2Yml0IC0gMHgxMDAwMCA6IGludDE2Yml0O1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b3VpbnQxNlxuXHQvLyBUb1VpbnQxNjogRVM1LlRvVWludDE2LFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b2ludDhcblx0VG9JbnQ4OiBmdW5jdGlvbiBUb0ludDgoYXJndW1lbnQpIHtcblx0XHR2YXIgaW50OGJpdCA9IHRoaXMuVG9VaW50OChhcmd1bWVudCk7XG5cdFx0cmV0dXJuIGludDhiaXQgPj0gMHg4MCA/IGludDhiaXQgLSAweDEwMCA6IGludDhiaXQ7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvdWludDhcblx0VG9VaW50ODogZnVuY3Rpb24gVG9VaW50OChhcmd1bWVudCkge1xuXHRcdHZhciBudW1iZXIgPSB0aGlzLlRvTnVtYmVyKGFyZ3VtZW50KTtcblx0XHRpZiAoJGlzTmFOKG51bWJlcikgfHwgbnVtYmVyID09PSAwIHx8ICEkaXNGaW5pdGUobnVtYmVyKSkgeyByZXR1cm4gMDsgfVxuXHRcdHZhciBwb3NJbnQgPSBzaWduKG51bWJlcikgKiAkZmxvb3IoJGFicyhudW1iZXIpKTtcblx0XHRyZXR1cm4gbW9kKHBvc0ludCwgMHgxMDApO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b3VpbnQ4Y2xhbXBcblx0VG9VaW50OENsYW1wOiBmdW5jdGlvbiBUb1VpbnQ4Q2xhbXAoYXJndW1lbnQpIHtcblx0XHR2YXIgbnVtYmVyID0gdGhpcy5Ub051bWJlcihhcmd1bWVudCk7XG5cdFx0aWYgKCRpc05hTihudW1iZXIpIHx8IG51bWJlciA8PSAwKSB7IHJldHVybiAwOyB9XG5cdFx0aWYgKG51bWJlciA+PSAweEZGKSB7IHJldHVybiAweEZGOyB9XG5cdFx0dmFyIGYgPSAkZmxvb3IoYXJndW1lbnQpO1xuXHRcdGlmIChmICsgMC41IDwgbnVtYmVyKSB7IHJldHVybiBmICsgMTsgfVxuXHRcdGlmIChudW1iZXIgPCBmICsgMC41KSB7IHJldHVybiBmOyB9XG5cdFx0aWYgKGYgJSAyICE9PSAwKSB7IHJldHVybiBmICsgMTsgfVxuXHRcdHJldHVybiBmO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b3N0cmluZ1xuXHRUb1N0cmluZzogZnVuY3Rpb24gVG9TdHJpbmcoYXJndW1lbnQpIHtcblx0XHRpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnc3ltYm9sJykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IGEgU3ltYm9sIHZhbHVlIHRvIGEgc3RyaW5nJyk7XG5cdFx0fVxuXHRcdHJldHVybiAkU3RyaW5nKGFyZ3VtZW50KTtcblx0fSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG9vYmplY3Rcblx0VG9PYmplY3Q6IGZ1bmN0aW9uIFRvT2JqZWN0KHZhbHVlKSB7XG5cdFx0dGhpcy5SZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHZhbHVlKTtcblx0XHRyZXR1cm4gJE9iamVjdCh2YWx1ZSk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvcHJvcGVydHlrZXlcblx0VG9Qcm9wZXJ0eUtleTogZnVuY3Rpb24gVG9Qcm9wZXJ0eUtleShhcmd1bWVudCkge1xuXHRcdHZhciBrZXkgPSB0aGlzLlRvUHJpbWl0aXZlKGFyZ3VtZW50LCAkU3RyaW5nKTtcblx0XHRyZXR1cm4gdHlwZW9mIGtleSA9PT0gJ3N5bWJvbCcgPyBrZXkgOiB0aGlzLlRvU3RyaW5nKGtleSk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvbGVuZ3RoXG5cdFRvTGVuZ3RoOiBmdW5jdGlvbiBUb0xlbmd0aChhcmd1bWVudCkge1xuXHRcdHZhciBsZW4gPSB0aGlzLlRvSW50ZWdlcihhcmd1bWVudCk7XG5cdFx0aWYgKGxlbiA8PSAwKSB7IHJldHVybiAwOyB9IC8vIGluY2x1ZGVzIGNvbnZlcnRpbmcgLTAgdG8gKzBcblx0XHRpZiAobGVuID4gTUFYX1NBRkVfSU5URUdFUikgeyByZXR1cm4gTUFYX1NBRkVfSU5URUdFUjsgfVxuXHRcdHJldHVybiBsZW47XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWNhbm9uaWNhbG51bWVyaWNpbmRleHN0cmluZ1xuXHRDYW5vbmljYWxOdW1lcmljSW5kZXhTdHJpbmc6IGZ1bmN0aW9uIENhbm9uaWNhbE51bWVyaWNJbmRleFN0cmluZyhhcmd1bWVudCkge1xuXHRcdGlmICh0b1N0cihhcmd1bWVudCkgIT09ICdbb2JqZWN0IFN0cmluZ10nKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignbXVzdCBiZSBhIHN0cmluZycpO1xuXHRcdH1cblx0XHRpZiAoYXJndW1lbnQgPT09ICctMCcpIHsgcmV0dXJuIC0wOyB9XG5cdFx0dmFyIG4gPSB0aGlzLlRvTnVtYmVyKGFyZ3VtZW50KTtcblx0XHRpZiAodGhpcy5TYW1lVmFsdWUodGhpcy5Ub1N0cmluZyhuKSwgYXJndW1lbnQpKSB7IHJldHVybiBuOyB9XG5cdFx0cmV0dXJuIHZvaWQgMDtcblx0fSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtcmVxdWlyZW9iamVjdGNvZXJjaWJsZVxuXHRSZXF1aXJlT2JqZWN0Q29lcmNpYmxlOiBFUzUuQ2hlY2tPYmplY3RDb2VyY2libGUsXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWlzYXJyYXlcblx0SXNBcnJheTogJEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gSXNBcnJheShhcmd1bWVudCkge1xuXHRcdHJldHVybiB0b1N0cihhcmd1bWVudCkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWlzY2FsbGFibGVcblx0Ly8gSXNDYWxsYWJsZTogRVM1LklzQ2FsbGFibGUsXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWlzY29uc3RydWN0b3Jcblx0SXNDb25zdHJ1Y3RvcjogZnVuY3Rpb24gSXNDb25zdHJ1Y3Rvcihhcmd1bWVudCkge1xuXHRcdHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT09ICdmdW5jdGlvbicgJiYgISFhcmd1bWVudC5wcm90b3R5cGU7IC8vIHVuZm9ydHVuYXRlbHkgdGhlcmUncyBubyB3YXkgdG8gdHJ1bHkgY2hlY2sgdGhpcyB3aXRob3V0IHRyeS9jYXRjaCBgbmV3IGFyZ3VtZW50YFxuXHR9LFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1pc2V4dGVuc2libGUtb1xuXHRJc0V4dGVuc2libGU6IE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9uc1xuXHRcdD8gZnVuY3Rpb24gSXNFeHRlbnNpYmxlKG9iaikge1xuXHRcdFx0aWYgKGlzUHJpbWl0aXZlKG9iaikpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuICRpc0V4dGVuc2libGUob2JqKTtcblx0XHR9XG5cdFx0OiBmdW5jdGlvbiBpc0V4dGVuc2libGUob2JqKSB7IHJldHVybiB0cnVlOyB9LCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWlzaW50ZWdlclxuXHRJc0ludGVnZXI6IGZ1bmN0aW9uIElzSW50ZWdlcihhcmd1bWVudCkge1xuXHRcdGlmICh0eXBlb2YgYXJndW1lbnQgIT09ICdudW1iZXInIHx8ICRpc05hTihhcmd1bWVudCkgfHwgISRpc0Zpbml0ZShhcmd1bWVudCkpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0dmFyIGFicyA9ICRhYnMoYXJndW1lbnQpO1xuXHRcdHJldHVybiAkZmxvb3IoYWJzKSA9PT0gYWJzO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1pc3Byb3BlcnR5a2V5XG5cdElzUHJvcGVydHlLZXk6IGZ1bmN0aW9uIElzUHJvcGVydHlLZXkoYXJndW1lbnQpIHtcblx0XHRyZXR1cm4gdHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgYXJndW1lbnQgPT09ICdzeW1ib2wnO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1pc3JlZ2V4cFxuXHRJc1JlZ0V4cDogZnVuY3Rpb24gSXNSZWdFeHAoYXJndW1lbnQpIHtcblx0XHRpZiAoIWFyZ3VtZW50IHx8IHR5cGVvZiBhcmd1bWVudCAhPT0gJ29iamVjdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0aWYgKGhhc1N5bWJvbHMpIHtcblx0XHRcdHZhciBpc1JlZ0V4cCA9IGFyZ3VtZW50WyRTeW1ib2wubWF0Y2hdO1xuXHRcdFx0aWYgKHR5cGVvZiBpc1JlZ0V4cCAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0cmV0dXJuIEVTNS5Ub0Jvb2xlYW4oaXNSZWdFeHApO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gaGFzUmVnRXhwTWF0Y2hlcihhcmd1bWVudCk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXNhbWV2YWx1ZVxuXHQvLyBTYW1lVmFsdWU6IEVTNS5TYW1lVmFsdWUsXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXNhbWV2YWx1ZXplcm9cblx0U2FtZVZhbHVlWmVybzogZnVuY3Rpb24gU2FtZVZhbHVlWmVybyh4LCB5KSB7XG5cdFx0cmV0dXJuICh4ID09PSB5KSB8fCAoJGlzTmFOKHgpICYmICRpc05hTih5KSk7XG5cdH0sXG5cblx0LyoqXG5cdCAqIDcuMy4yIEdldFYgKFYsIFApXG5cdCAqIDEuIEFzc2VydDogSXNQcm9wZXJ0eUtleShQKSBpcyB0cnVlLlxuXHQgKiAyLiBMZXQgTyBiZSBUb09iamVjdChWKS5cblx0ICogMy4gUmV0dXJuSWZBYnJ1cHQoTykuXG5cdCAqIDQuIFJldHVybiBPLltbR2V0XV0oUCwgVikuXG5cdCAqL1xuXHRHZXRWOiBmdW5jdGlvbiBHZXRWKFYsIFApIHtcblx0XHQvLyA3LjMuMi4xXG5cdFx0aWYgKCF0aGlzLklzUHJvcGVydHlLZXkoUCkpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBJc1Byb3BlcnR5S2V5KFApIGlzIG5vdCB0cnVlJyk7XG5cdFx0fVxuXG5cdFx0Ly8gNy4zLjIuMi0zXG5cdFx0dmFyIE8gPSB0aGlzLlRvT2JqZWN0KFYpO1xuXG5cdFx0Ly8gNy4zLjIuNFxuXHRcdHJldHVybiBPW1BdO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiA3LjMuOSAtIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1nZXRtZXRob2Rcblx0ICogMS4gQXNzZXJ0OiBJc1Byb3BlcnR5S2V5KFApIGlzIHRydWUuXG5cdCAqIDIuIExldCBmdW5jIGJlIEdldFYoTywgUCkuXG5cdCAqIDMuIFJldHVybklmQWJydXB0KGZ1bmMpLlxuXHQgKiA0LiBJZiBmdW5jIGlzIGVpdGhlciB1bmRlZmluZWQgb3IgbnVsbCwgcmV0dXJuIHVuZGVmaW5lZC5cblx0ICogNS4gSWYgSXNDYWxsYWJsZShmdW5jKSBpcyBmYWxzZSwgdGhyb3cgYSBUeXBlRXJyb3IgZXhjZXB0aW9uLlxuXHQgKiA2LiBSZXR1cm4gZnVuYy5cblx0ICovXG5cdEdldE1ldGhvZDogZnVuY3Rpb24gR2V0TWV0aG9kKE8sIFApIHtcblx0XHQvLyA3LjMuOS4xXG5cdFx0aWYgKCF0aGlzLklzUHJvcGVydHlLZXkoUCkpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBJc1Byb3BlcnR5S2V5KFApIGlzIG5vdCB0cnVlJyk7XG5cdFx0fVxuXG5cdFx0Ly8gNy4zLjkuMlxuXHRcdHZhciBmdW5jID0gdGhpcy5HZXRWKE8sIFApO1xuXG5cdFx0Ly8gNy4zLjkuNFxuXHRcdGlmIChmdW5jID09IG51bGwpIHtcblx0XHRcdHJldHVybiB2b2lkIDA7XG5cdFx0fVxuXG5cdFx0Ly8gNy4zLjkuNVxuXHRcdGlmICghdGhpcy5Jc0NhbGxhYmxlKGZ1bmMpKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcihQICsgJ2lzIG5vdCBhIGZ1bmN0aW9uJyk7XG5cdFx0fVxuXG5cdFx0Ly8gNy4zLjkuNlxuXHRcdHJldHVybiBmdW5jO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiA3LjMuMSBHZXQgKE8sIFApIC0gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWdldC1vLXBcblx0ICogMS4gQXNzZXJ0OiBUeXBlKE8pIGlzIE9iamVjdC5cblx0ICogMi4gQXNzZXJ0OiBJc1Byb3BlcnR5S2V5KFApIGlzIHRydWUuXG5cdCAqIDMuIFJldHVybiBPLltbR2V0XV0oUCwgTykuXG5cdCAqL1xuXHRHZXQ6IGZ1bmN0aW9uIEdldChPLCBQKSB7XG5cdFx0Ly8gNy4zLjEuMVxuXHRcdGlmICh0aGlzLlR5cGUoTykgIT09ICdPYmplY3QnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogVHlwZShPKSBpcyBub3QgT2JqZWN0Jyk7XG5cdFx0fVxuXHRcdC8vIDcuMy4xLjJcblx0XHRpZiAoIXRoaXMuSXNQcm9wZXJ0eUtleShQKSkge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IElzUHJvcGVydHlLZXkoUCkgaXMgbm90IHRydWUnKTtcblx0XHR9XG5cdFx0Ly8gNy4zLjEuM1xuXHRcdHJldHVybiBPW1BdO1xuXHR9LFxuXG5cdFR5cGU6IGZ1bmN0aW9uIFR5cGUoeCkge1xuXHRcdGlmICh0eXBlb2YgeCA9PT0gJ3N5bWJvbCcpIHtcblx0XHRcdHJldHVybiAnU3ltYm9sJztcblx0XHR9XG5cdFx0cmV0dXJuIEVTNS5UeXBlKHgpO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1zcGVjaWVzY29uc3RydWN0b3Jcblx0U3BlY2llc0NvbnN0cnVjdG9yOiBmdW5jdGlvbiBTcGVjaWVzQ29uc3RydWN0b3IoTywgZGVmYXVsdENvbnN0cnVjdG9yKSB7XG5cdFx0aWYgKHRoaXMuVHlwZShPKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBUeXBlKE8pIGlzIG5vdCBPYmplY3QnKTtcblx0XHR9XG5cdFx0dmFyIEMgPSBPLmNvbnN0cnVjdG9yO1xuXHRcdGlmICh0eXBlb2YgQyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdHJldHVybiBkZWZhdWx0Q29uc3RydWN0b3I7XG5cdFx0fVxuXHRcdGlmICh0aGlzLlR5cGUoQykgIT09ICdPYmplY3QnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignTy5jb25zdHJ1Y3RvciBpcyBub3QgYW4gT2JqZWN0Jyk7XG5cdFx0fVxuXHRcdHZhciBTID0gaGFzU3ltYm9scyAmJiAkU3ltYm9sLnNwZWNpZXMgPyBDWyRTeW1ib2wuc3BlY2llc10gOiB2b2lkIDA7XG5cdFx0aWYgKFMgPT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIGRlZmF1bHRDb25zdHJ1Y3Rvcjtcblx0XHR9XG5cdFx0aWYgKHRoaXMuSXNDb25zdHJ1Y3RvcihTKSkge1xuXHRcdFx0cmV0dXJuIFM7XG5cdFx0fVxuXHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdubyBjb25zdHJ1Y3RvciBmb3VuZCcpO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1jb21wbGV0ZXByb3BlcnR5ZGVzY3JpcHRvclxuXHRDb21wbGV0ZVByb3BlcnR5RGVzY3JpcHRvcjogZnVuY3Rpb24gQ29tcGxldGVQcm9wZXJ0eURlc2NyaXB0b3IoRGVzYykge1xuXHRcdGFzc2VydFJlY29yZCh0aGlzLCAnUHJvcGVydHkgRGVzY3JpcHRvcicsICdEZXNjJywgRGVzYyk7XG5cblx0XHRpZiAodGhpcy5Jc0dlbmVyaWNEZXNjcmlwdG9yKERlc2MpIHx8IHRoaXMuSXNEYXRhRGVzY3JpcHRvcihEZXNjKSkge1xuXHRcdFx0aWYgKCFoYXMoRGVzYywgJ1tbVmFsdWVdXScpKSB7XG5cdFx0XHRcdERlc2NbJ1tbVmFsdWVdXSddID0gdm9pZCAwO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFoYXMoRGVzYywgJ1tbV3JpdGFibGVdXScpKSB7XG5cdFx0XHRcdERlc2NbJ1tbV3JpdGFibGVdXSddID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmICghaGFzKERlc2MsICdbW0dldF1dJykpIHtcblx0XHRcdFx0RGVzY1snW1tHZXRdXSddID0gdm9pZCAwO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFoYXMoRGVzYywgJ1tbU2V0XV0nKSkge1xuXHRcdFx0XHREZXNjWydbW1NldF1dJ10gPSB2b2lkIDA7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICghaGFzKERlc2MsICdbW0VudW1lcmFibGVdXScpKSB7XG5cdFx0XHREZXNjWydbW0VudW1lcmFibGVdXSddID0gZmFsc2U7XG5cdFx0fVxuXHRcdGlmICghaGFzKERlc2MsICdbW0NvbmZpZ3VyYWJsZV1dJykpIHtcblx0XHRcdERlc2NbJ1tbQ29uZmlndXJhYmxlXV0nXSA9IGZhbHNlO1xuXHRcdH1cblx0XHRyZXR1cm4gRGVzYztcblx0fSxcblxuXHQvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtc2V0LW8tcC12LXRocm93XG5cdFNldDogZnVuY3Rpb24gU2V0KE8sIFAsIFYsIFRocm93KSB7XG5cdFx0aWYgKHRoaXMuVHlwZShPKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdPIG11c3QgYmUgYW4gT2JqZWN0Jyk7XG5cdFx0fVxuXHRcdGlmICghdGhpcy5Jc1Byb3BlcnR5S2V5KFApKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignUCBtdXN0IGJlIGEgUHJvcGVydHkgS2V5Jyk7XG5cdFx0fVxuXHRcdGlmICh0aGlzLlR5cGUoVGhyb3cpICE9PSAnQm9vbGVhbicpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdUaHJvdyBtdXN0IGJlIGEgQm9vbGVhbicpO1xuXHRcdH1cblx0XHRpZiAoVGhyb3cpIHtcblx0XHRcdE9bUF0gPSBWO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdE9bUF0gPSBWO1xuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1oYXNvd25wcm9wZXJ0eVxuXHRIYXNPd25Qcm9wZXJ0eTogZnVuY3Rpb24gSGFzT3duUHJvcGVydHkoTywgUCkge1xuXHRcdGlmICh0aGlzLlR5cGUoTykgIT09ICdPYmplY3QnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignTyBtdXN0IGJlIGFuIE9iamVjdCcpO1xuXHRcdH1cblx0XHRpZiAoIXRoaXMuSXNQcm9wZXJ0eUtleShQKSkge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ1AgbXVzdCBiZSBhIFByb3BlcnR5IEtleScpO1xuXHRcdH1cblx0XHRyZXR1cm4gaGFzKE8sIFApO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1oYXNwcm9wZXJ0eVxuXHRIYXNQcm9wZXJ0eTogZnVuY3Rpb24gSGFzUHJvcGVydHkoTywgUCkge1xuXHRcdGlmICh0aGlzLlR5cGUoTykgIT09ICdPYmplY3QnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignTyBtdXN0IGJlIGFuIE9iamVjdCcpO1xuXHRcdH1cblx0XHRpZiAoIXRoaXMuSXNQcm9wZXJ0eUtleShQKSkge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ1AgbXVzdCBiZSBhIFByb3BlcnR5IEtleScpO1xuXHRcdH1cblx0XHRyZXR1cm4gUCBpbiBPO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1pc2NvbmNhdHNwcmVhZGFibGVcblx0SXNDb25jYXRTcHJlYWRhYmxlOiBmdW5jdGlvbiBJc0NvbmNhdFNwcmVhZGFibGUoTykge1xuXHRcdGlmICh0aGlzLlR5cGUoTykgIT09ICdPYmplY3QnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGlmIChoYXNTeW1ib2xzICYmIHR5cGVvZiAkU3ltYm9sLmlzQ29uY2F0U3ByZWFkYWJsZSA9PT0gJ3N5bWJvbCcpIHtcblx0XHRcdHZhciBzcHJlYWRhYmxlID0gdGhpcy5HZXQoTywgU3ltYm9sLmlzQ29uY2F0U3ByZWFkYWJsZSk7XG5cdFx0XHRpZiAodHlwZW9mIHNwcmVhZGFibGUgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLlRvQm9vbGVhbihzcHJlYWRhYmxlKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuSXNBcnJheShPKTtcblx0fSxcblxuXHQvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtaW52b2tlXG5cdEludm9rZTogZnVuY3Rpb24gSW52b2tlKE8sIFApIHtcblx0XHRpZiAoIXRoaXMuSXNQcm9wZXJ0eUtleShQKSkge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ1AgbXVzdCBiZSBhIFByb3BlcnR5IEtleScpO1xuXHRcdH1cblx0XHR2YXIgYXJndW1lbnRzTGlzdCA9IGFycmF5U2xpY2UoYXJndW1lbnRzLCAyKTtcblx0XHR2YXIgZnVuYyA9IHRoaXMuR2V0VihPLCBQKTtcblx0XHRyZXR1cm4gdGhpcy5DYWxsKGZ1bmMsIE8sIGFyZ3VtZW50c0xpc3QpO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1nZXRpdGVyYXRvclxuXHRHZXRJdGVyYXRvcjogZnVuY3Rpb24gR2V0SXRlcmF0b3Iob2JqLCBtZXRob2QpIHtcblx0XHRpZiAoIWhhc1N5bWJvbHMpIHtcblx0XHRcdHRocm93IG5ldyBTeW50YXhFcnJvcignRVMuR2V0SXRlcmF0b3IgZGVwZW5kcyBvbiBuYXRpdmUgaXRlcmF0b3Igc3VwcG9ydC4nKTtcblx0XHR9XG5cblx0XHR2YXIgYWN0dWFsTWV0aG9kID0gbWV0aG9kO1xuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikge1xuXHRcdFx0YWN0dWFsTWV0aG9kID0gdGhpcy5HZXRNZXRob2Qob2JqLCAkU3ltYm9sLml0ZXJhdG9yKTtcblx0XHR9XG5cdFx0dmFyIGl0ZXJhdG9yID0gdGhpcy5DYWxsKGFjdHVhbE1ldGhvZCwgb2JqKTtcblx0XHRpZiAodGhpcy5UeXBlKGl0ZXJhdG9yKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdpdGVyYXRvciBtdXN0IHJldHVybiBhbiBvYmplY3QnKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gaXRlcmF0b3I7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWl0ZXJhdG9ybmV4dFxuXHRJdGVyYXRvck5leHQ6IGZ1bmN0aW9uIEl0ZXJhdG9yTmV4dChpdGVyYXRvciwgdmFsdWUpIHtcblx0XHR2YXIgcmVzdWx0ID0gdGhpcy5JbnZva2UoaXRlcmF0b3IsICduZXh0JywgYXJndW1lbnRzLmxlbmd0aCA8IDIgPyBbXSA6IFt2YWx1ZV0pO1xuXHRcdGlmICh0aGlzLlR5cGUocmVzdWx0KSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdpdGVyYXRvciBuZXh0IG11c3QgcmV0dXJuIGFuIG9iamVjdCcpO1xuXHRcdH1cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1pdGVyYXRvcmNvbXBsZXRlXG5cdEl0ZXJhdG9yQ29tcGxldGU6IGZ1bmN0aW9uIEl0ZXJhdG9yQ29tcGxldGUoaXRlclJlc3VsdCkge1xuXHRcdGlmICh0aGlzLlR5cGUoaXRlclJlc3VsdCkgIT09ICdPYmplY3QnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogVHlwZShpdGVyUmVzdWx0KSBpcyBub3QgT2JqZWN0Jyk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLlRvQm9vbGVhbih0aGlzLkdldChpdGVyUmVzdWx0LCAnZG9uZScpKTtcblx0fSxcblxuXHQvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtaXRlcmF0b3J2YWx1ZVxuXHRJdGVyYXRvclZhbHVlOiBmdW5jdGlvbiBJdGVyYXRvclZhbHVlKGl0ZXJSZXN1bHQpIHtcblx0XHRpZiAodGhpcy5UeXBlKGl0ZXJSZXN1bHQpICE9PSAnT2JqZWN0Jykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IFR5cGUoaXRlclJlc3VsdCkgaXMgbm90IE9iamVjdCcpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5HZXQoaXRlclJlc3VsdCwgJ3ZhbHVlJyk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWl0ZXJhdG9yc3RlcFxuXHRJdGVyYXRvclN0ZXA6IGZ1bmN0aW9uIEl0ZXJhdG9yU3RlcChpdGVyYXRvcikge1xuXHRcdHZhciByZXN1bHQgPSB0aGlzLkl0ZXJhdG9yTmV4dChpdGVyYXRvcik7XG5cdFx0dmFyIGRvbmUgPSB0aGlzLkl0ZXJhdG9yQ29tcGxldGUocmVzdWx0KTtcblx0XHRyZXR1cm4gZG9uZSA9PT0gdHJ1ZSA/IGZhbHNlIDogcmVzdWx0O1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1pdGVyYXRvcmNsb3NlXG5cdEl0ZXJhdG9yQ2xvc2U6IGZ1bmN0aW9uIEl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsIGNvbXBsZXRpb24pIHtcblx0XHRpZiAodGhpcy5UeXBlKGl0ZXJhdG9yKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBUeXBlKGl0ZXJhdG9yKSBpcyBub3QgT2JqZWN0Jyk7XG5cdFx0fVxuXHRcdGlmICghdGhpcy5Jc0NhbGxhYmxlKGNvbXBsZXRpb24pKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogY29tcGxldGlvbiBpcyBub3QgYSB0aHVuayBmb3IgYSBDb21wbGV0aW9uIFJlY29yZCcpO1xuXHRcdH1cblx0XHR2YXIgY29tcGxldGlvblRodW5rID0gY29tcGxldGlvbjtcblxuXHRcdHZhciBpdGVyYXRvclJldHVybiA9IHRoaXMuR2V0TWV0aG9kKGl0ZXJhdG9yLCAncmV0dXJuJyk7XG5cblx0XHRpZiAodHlwZW9mIGl0ZXJhdG9yUmV0dXJuID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0cmV0dXJuIGNvbXBsZXRpb25UaHVuaygpO1xuXHRcdH1cblxuXHRcdHZhciBjb21wbGV0aW9uUmVjb3JkO1xuXHRcdHRyeSB7XG5cdFx0XHR2YXIgaW5uZXJSZXN1bHQgPSB0aGlzLkNhbGwoaXRlcmF0b3JSZXR1cm4sIGl0ZXJhdG9yLCBbXSk7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0Ly8gaWYgd2UgaGl0IGhlcmUsIHRoZW4gXCJlXCIgaXMgdGhlIGlubmVyUmVzdWx0IGNvbXBsZXRpb24gdGhhdCBuZWVkcyByZS10aHJvd2luZ1xuXG5cdFx0XHQvLyBpZiB0aGUgY29tcGxldGlvbiBpcyBvZiB0eXBlIFwidGhyb3dcIiwgdGhpcyB3aWxsIHRocm93LlxuXHRcdFx0Y29tcGxldGlvblJlY29yZCA9IGNvbXBsZXRpb25UaHVuaygpO1xuXHRcdFx0Y29tcGxldGlvblRodW5rID0gbnVsbDsgLy8gZW5zdXJlIGl0J3Mgbm90IGNhbGxlZCB0d2ljZS5cblxuXHRcdFx0Ly8gaWYgbm90LCB0aGVuIHJldHVybiB0aGUgaW5uZXJSZXN1bHQgY29tcGxldGlvblxuXHRcdFx0dGhyb3cgZTtcblx0XHR9XG5cdFx0Y29tcGxldGlvblJlY29yZCA9IGNvbXBsZXRpb25UaHVuaygpOyAvLyBpZiBpbm5lclJlc3VsdCB3b3JrZWQsIHRoZW4gdGhyb3cgaWYgdGhlIGNvbXBsZXRpb24gZG9lc1xuXHRcdGNvbXBsZXRpb25UaHVuayA9IG51bGw7IC8vIGVuc3VyZSBpdCdzIG5vdCBjYWxsZWQgdHdpY2UuXG5cblx0XHRpZiAodGhpcy5UeXBlKGlubmVyUmVzdWx0KSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdpdGVyYXRvciAucmV0dXJuIG11c3QgcmV0dXJuIGFuIG9iamVjdCcpO1xuXHRcdH1cblxuXHRcdHJldHVybiBjb21wbGV0aW9uUmVjb3JkO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1jcmVhdGVpdGVycmVzdWx0b2JqZWN0XG5cdENyZWF0ZUl0ZXJSZXN1bHRPYmplY3Q6IGZ1bmN0aW9uIENyZWF0ZUl0ZXJSZXN1bHRPYmplY3QodmFsdWUsIGRvbmUpIHtcblx0XHRpZiAodGhpcy5UeXBlKGRvbmUpICE9PSAnQm9vbGVhbicpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBUeXBlKGRvbmUpIGlzIG5vdCBCb29sZWFuJyk7XG5cdFx0fVxuXHRcdHJldHVybiB7XG5cdFx0XHR2YWx1ZTogdmFsdWUsXG5cdFx0XHRkb25lOiBkb25lXG5cdFx0fTtcblx0fSxcblxuXHQvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtcmVnZXhwZXhlY1xuXHRSZWdFeHBFeGVjOiBmdW5jdGlvbiBSZWdFeHBFeGVjKFIsIFMpIHtcblx0XHRpZiAodGhpcy5UeXBlKFIpICE9PSAnT2JqZWN0Jykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ1IgbXVzdCBiZSBhbiBPYmplY3QnKTtcblx0XHR9XG5cdFx0aWYgKHRoaXMuVHlwZShTKSAhPT0gJ1N0cmluZycpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdTIG11c3QgYmUgYSBTdHJpbmcnKTtcblx0XHR9XG5cdFx0dmFyIGV4ZWMgPSB0aGlzLkdldChSLCAnZXhlYycpO1xuXHRcdGlmICh0aGlzLklzQ2FsbGFibGUoZXhlYykpIHtcblx0XHRcdHZhciByZXN1bHQgPSB0aGlzLkNhbGwoZXhlYywgUiwgW1NdKTtcblx0XHRcdGlmIChyZXN1bHQgPT09IG51bGwgfHwgdGhpcy5UeXBlKHJlc3VsdCkgPT09ICdPYmplY3QnKSB7XG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHR9XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignXCJleGVjXCIgbWV0aG9kIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBPYmplY3QnKTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlZ2V4RXhlYyhSLCBTKTtcblx0fSxcblxuXHQvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtYXJyYXlzcGVjaWVzY3JlYXRlXG5cdEFycmF5U3BlY2llc0NyZWF0ZTogZnVuY3Rpb24gQXJyYXlTcGVjaWVzQ3JlYXRlKG9yaWdpbmFsQXJyYXksIGxlbmd0aCkge1xuXHRcdGlmICghdGhpcy5Jc0ludGVnZXIobGVuZ3RoKSB8fCBsZW5ndGggPCAwKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogbGVuZ3RoIG11c3QgYmUgYW4gaW50ZWdlciA+PSAwJyk7XG5cdFx0fVxuXHRcdHZhciBsZW4gPSBsZW5ndGggPT09IDAgPyAwIDogbGVuZ3RoO1xuXHRcdHZhciBDO1xuXHRcdHZhciBpc0FycmF5ID0gdGhpcy5Jc0FycmF5KG9yaWdpbmFsQXJyYXkpO1xuXHRcdGlmIChpc0FycmF5KSB7XG5cdFx0XHRDID0gdGhpcy5HZXQob3JpZ2luYWxBcnJheSwgJ2NvbnN0cnVjdG9yJyk7XG5cdFx0XHQvLyBUT0RPOiBmaWd1cmUgb3V0IGhvdyB0byBtYWtlIGEgY3Jvc3MtcmVhbG0gbm9ybWFsIEFycmF5LCBhIHNhbWUtcmVhbG0gQXJyYXlcblx0XHRcdC8vIGlmICh0aGlzLklzQ29uc3RydWN0b3IoQykpIHtcblx0XHRcdC8vIFx0aWYgQyBpcyBhbm90aGVyIHJlYWxtJ3MgQXJyYXksIEMgPSB1bmRlZmluZWRcblx0XHRcdC8vIFx0T2JqZWN0LmdldFByb3RvdHlwZU9mKE9iamVjdC5nZXRQcm90b3R5cGVPZihPYmplY3QuZ2V0UHJvdG90eXBlT2YoQXJyYXkpKSkgPT09IG51bGwgP1xuXHRcdFx0Ly8gfVxuXHRcdFx0aWYgKHRoaXMuVHlwZShDKSA9PT0gJ09iamVjdCcgJiYgaGFzU3ltYm9scyAmJiAkU3ltYm9sLnNwZWNpZXMpIHtcblx0XHRcdFx0QyA9IHRoaXMuR2V0KEMsICRTeW1ib2wuc3BlY2llcyk7XG5cdFx0XHRcdGlmIChDID09PSBudWxsKSB7XG5cdFx0XHRcdFx0QyA9IHZvaWQgMDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAodHlwZW9mIEMgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRyZXR1cm4gJEFycmF5KGxlbik7XG5cdFx0fVxuXHRcdGlmICghdGhpcy5Jc0NvbnN0cnVjdG9yKEMpKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQyBtdXN0IGJlIGEgY29uc3RydWN0b3InKTtcblx0XHR9XG5cdFx0cmV0dXJuIG5ldyBDKGxlbik7IC8vIHRoaXMuQ29uc3RydWN0KEMsIGxlbik7XG5cdH0sXG5cblx0Q3JlYXRlRGF0YVByb3BlcnR5OiBmdW5jdGlvbiBDcmVhdGVEYXRhUHJvcGVydHkoTywgUCwgVikge1xuXHRcdGlmICh0aGlzLlR5cGUoTykgIT09ICdPYmplY3QnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogVHlwZShPKSBpcyBub3QgT2JqZWN0Jyk7XG5cdFx0fVxuXHRcdGlmICghdGhpcy5Jc1Byb3BlcnR5S2V5KFApKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogSXNQcm9wZXJ0eUtleShQKSBpcyBub3QgdHJ1ZScpO1xuXHRcdH1cblx0XHR2YXIgb2xkRGVzYyA9ICRnT1BEKE8sIFApO1xuXHRcdHZhciBleHRlbnNpYmxlID0gb2xkRGVzYyB8fCAodHlwZW9mICRpc0V4dGVuc2libGUgIT09ICdmdW5jdGlvbicgfHwgJGlzRXh0ZW5zaWJsZShPKSk7XG5cdFx0dmFyIGltbXV0YWJsZSA9IG9sZERlc2MgJiYgKCFvbGREZXNjLndyaXRhYmxlIHx8ICFvbGREZXNjLmNvbmZpZ3VyYWJsZSk7XG5cdFx0aWYgKGltbXV0YWJsZSB8fCAhZXh0ZW5zaWJsZSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHR2YXIgbmV3RGVzYyA9IHtcblx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHR2YWx1ZTogVixcblx0XHRcdHdyaXRhYmxlOiB0cnVlXG5cdFx0fTtcblx0XHQkZGVmaW5lUHJvcGVydHkoTywgUCwgbmV3RGVzYyk7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWNyZWF0ZWRhdGFwcm9wZXJ0eW9ydGhyb3dcblx0Q3JlYXRlRGF0YVByb3BlcnR5T3JUaHJvdzogZnVuY3Rpb24gQ3JlYXRlRGF0YVByb3BlcnR5T3JUaHJvdyhPLCBQLCBWKSB7XG5cdFx0aWYgKHRoaXMuVHlwZShPKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBUeXBlKE8pIGlzIG5vdCBPYmplY3QnKTtcblx0XHR9XG5cdFx0aWYgKCF0aGlzLklzUHJvcGVydHlLZXkoUCkpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBJc1Byb3BlcnR5S2V5KFApIGlzIG5vdCB0cnVlJyk7XG5cdFx0fVxuXHRcdHZhciBzdWNjZXNzID0gdGhpcy5DcmVhdGVEYXRhUHJvcGVydHkoTywgUCwgVik7XG5cdFx0aWYgKCFzdWNjZXNzKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcigndW5hYmxlIHRvIGNyZWF0ZSBkYXRhIHByb3BlcnR5Jyk7XG5cdFx0fVxuXHRcdHJldHVybiBzdWNjZXNzO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtb2JqZWN0Y3JlYXRlXG5cdE9iamVjdENyZWF0ZTogZnVuY3Rpb24gT2JqZWN0Q3JlYXRlKHByb3RvLCBpbnRlcm5hbFNsb3RzTGlzdCkge1xuXHRcdGlmIChwcm90byAhPT0gbnVsbCAmJiB0aGlzLlR5cGUocHJvdG8pICE9PSAnT2JqZWN0Jykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IHByb3RvIG11c3QgYmUgbnVsbCBvciBhbiBvYmplY3QnKTtcblx0XHR9XG5cdFx0dmFyIHNsb3RzID0gYXJndW1lbnRzLmxlbmd0aCA8IDIgPyBbXSA6IGludGVybmFsU2xvdHNMaXN0O1xuXHRcdGlmIChzbG90cy5sZW5ndGggPiAwKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFN5bnRheEVycm9yKCdlcy1hYnN0cmFjdCBkb2VzIG5vdCB5ZXQgc3VwcG9ydCBpbnRlcm5hbCBzbG90cycpO1xuXHRcdH1cblxuXHRcdGlmIChwcm90byA9PT0gbnVsbCAmJiAhJE9iamVjdENyZWF0ZSkge1xuXHRcdFx0dGhyb3cgbmV3ICRTeW50YXhFcnJvcignbmF0aXZlIE9iamVjdC5jcmVhdGUgc3VwcG9ydCBpcyByZXF1aXJlZCB0byBjcmVhdGUgbnVsbCBvYmplY3RzJyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuICRPYmplY3RDcmVhdGUocHJvdG8pO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1hZHZhbmNlc3RyaW5naW5kZXhcblx0QWR2YW5jZVN0cmluZ0luZGV4OiBmdW5jdGlvbiBBZHZhbmNlU3RyaW5nSW5kZXgoUywgaW5kZXgsIHVuaWNvZGUpIHtcblx0XHRpZiAodGhpcy5UeXBlKFMpICE9PSAnU3RyaW5nJykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ1MgbXVzdCBiZSBhIFN0cmluZycpO1xuXHRcdH1cblx0XHRpZiAoIXRoaXMuSXNJbnRlZ2VyKGluZGV4KSB8fCBpbmRleCA8IDAgfHwgaW5kZXggPiBNQVhfU0FGRV9JTlRFR0VSKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogbGVuZ3RoIG11c3QgYmUgYW4gaW50ZWdlciA+PSAwIGFuZCA8PSAyKio1MycpO1xuXHRcdH1cblx0XHRpZiAodGhpcy5UeXBlKHVuaWNvZGUpICE9PSAnQm9vbGVhbicpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiB1bmljb2RlIG11c3QgYmUgYSBCb29sZWFuJyk7XG5cdFx0fVxuXHRcdGlmICghdW5pY29kZSkge1xuXHRcdFx0cmV0dXJuIGluZGV4ICsgMTtcblx0XHR9XG5cdFx0dmFyIGxlbmd0aCA9IFMubGVuZ3RoO1xuXHRcdGlmICgoaW5kZXggKyAxKSA+PSBsZW5ndGgpIHtcblx0XHRcdHJldHVybiBpbmRleCArIDE7XG5cdFx0fVxuXG5cdFx0dmFyIGZpcnN0ID0gJGNoYXJDb2RlQXQoUywgaW5kZXgpO1xuXHRcdGlmIChmaXJzdCA8IDB4RDgwMCB8fCBmaXJzdCA+IDB4REJGRikge1xuXHRcdFx0cmV0dXJuIGluZGV4ICsgMTtcblx0XHR9XG5cblx0XHR2YXIgc2Vjb25kID0gJGNoYXJDb2RlQXQoUywgaW5kZXggKyAxKTtcblx0XHRpZiAoc2Vjb25kIDwgMHhEQzAwIHx8IHNlY29uZCA+IDB4REZGRikge1xuXHRcdFx0cmV0dXJuIGluZGV4ICsgMTtcblx0XHR9XG5cblx0XHRyZXR1cm4gaW5kZXggKyAyO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtY3JlYXRlbWV0aG9kcHJvcGVydHlcblx0Q3JlYXRlTWV0aG9kUHJvcGVydHk6IGZ1bmN0aW9uIENyZWF0ZU1ldGhvZFByb3BlcnR5KE8sIFAsIFYpIHtcblx0XHRpZiAodGhpcy5UeXBlKE8pICE9PSAnT2JqZWN0Jykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IFR5cGUoTykgaXMgbm90IE9iamVjdCcpO1xuXHRcdH1cblxuXHRcdGlmICghdGhpcy5Jc1Byb3BlcnR5S2V5KFApKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogSXNQcm9wZXJ0eUtleShQKSBpcyBub3QgdHJ1ZScpO1xuXHRcdH1cblxuXHRcdHZhciBuZXdEZXNjID0ge1xuXHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdFx0ZW51bWVyYWJsZTogZmFsc2UsXG5cdFx0XHR2YWx1ZTogVixcblx0XHRcdHdyaXRhYmxlOiB0cnVlXG5cdFx0fTtcblx0XHRyZXR1cm4gISEkZGVmaW5lUHJvcGVydHkoTywgUCwgbmV3RGVzYyk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1kZWZpbmVwcm9wZXJ0eW9ydGhyb3dcblx0RGVmaW5lUHJvcGVydHlPclRocm93OiBmdW5jdGlvbiBEZWZpbmVQcm9wZXJ0eU9yVGhyb3coTywgUCwgZGVzYykge1xuXHRcdGlmICh0aGlzLlR5cGUoTykgIT09ICdPYmplY3QnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogVHlwZShPKSBpcyBub3QgT2JqZWN0Jyk7XG5cdFx0fVxuXG5cdFx0aWYgKCF0aGlzLklzUHJvcGVydHlLZXkoUCkpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBJc1Byb3BlcnR5S2V5KFApIGlzIG5vdCB0cnVlJyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuICEhJGRlZmluZVByb3BlcnR5KE8sIFAsIGRlc2MpO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtZGVsZXRlcHJvcGVydHlvcnRocm93XG5cdERlbGV0ZVByb3BlcnR5T3JUaHJvdzogZnVuY3Rpb24gRGVsZXRlUHJvcGVydHlPclRocm93KE8sIFApIHtcblx0XHRpZiAodGhpcy5UeXBlKE8pICE9PSAnT2JqZWN0Jykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IFR5cGUoTykgaXMgbm90IE9iamVjdCcpO1xuXHRcdH1cblxuXHRcdGlmICghdGhpcy5Jc1Byb3BlcnR5S2V5KFApKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogSXNQcm9wZXJ0eUtleShQKSBpcyBub3QgdHJ1ZScpO1xuXHRcdH1cblxuXHRcdHZhciBzdWNjZXNzID0gZGVsZXRlIE9bUF07XG5cdFx0aWYgKCFzdWNjZXNzKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdBdHRlbXB0IHRvIGRlbGV0ZSBwcm9wZXJ0eSBmYWlsZWQuJyk7XG5cdFx0fVxuXHRcdHJldHVybiBzdWNjZXNzO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtZW51bWVyYWJsZW93bm5hbWVzXG5cdEVudW1lcmFibGVPd25OYW1lczogZnVuY3Rpb24gRW51bWVyYWJsZU93bk5hbWVzKE8pIHtcblx0XHRpZiAodGhpcy5UeXBlKE8pICE9PSAnT2JqZWN0Jykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IFR5cGUoTykgaXMgbm90IE9iamVjdCcpO1xuXHRcdH1cblxuXHRcdHJldHVybiBrZXlzKE8pO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1wcm9wZXJ0aWVzLW9mLXRoZS1udW1iZXItcHJvdG90eXBlLW9iamVjdFxuXHR0aGlzTnVtYmVyVmFsdWU6IGZ1bmN0aW9uIHRoaXNOdW1iZXJWYWx1ZSh2YWx1ZSkge1xuXHRcdGlmICh0aGlzLlR5cGUodmFsdWUpID09PSAnTnVtYmVyJykge1xuXHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdH1cblxuXHRcdHJldHVybiAkTnVtYmVyVmFsdWVPZih2YWx1ZSk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLXByb3BlcnRpZXMtb2YtdGhlLWJvb2xlYW4tcHJvdG90eXBlLW9iamVjdFxuXHR0aGlzQm9vbGVhblZhbHVlOiBmdW5jdGlvbiB0aGlzQm9vbGVhblZhbHVlKHZhbHVlKSB7XG5cdFx0aWYgKHRoaXMuVHlwZSh2YWx1ZSkgPT09ICdCb29sZWFuJykge1xuXHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdH1cblxuXHRcdHJldHVybiAkQm9vbGVhblZhbHVlT2YodmFsdWUpO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1wcm9wZXJ0aWVzLW9mLXRoZS1zdHJpbmctcHJvdG90eXBlLW9iamVjdFxuXHR0aGlzU3RyaW5nVmFsdWU6IGZ1bmN0aW9uIHRoaXNTdHJpbmdWYWx1ZSh2YWx1ZSkge1xuXHRcdGlmICh0aGlzLlR5cGUodmFsdWUpID09PSAnU3RyaW5nJykge1xuXHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdH1cblxuXHRcdHJldHVybiAkU3RyaW5nVmFsdWVPZih2YWx1ZSk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLXByb3BlcnRpZXMtb2YtdGhlLWRhdGUtcHJvdG90eXBlLW9iamVjdFxuXHR0aGlzVGltZVZhbHVlOiBmdW5jdGlvbiB0aGlzVGltZVZhbHVlKHZhbHVlKSB7XG5cdFx0cmV0dXJuICREYXRlVmFsdWVPZih2YWx1ZSk7XG5cdH1cbn0pO1xuXG5kZWxldGUgRVM2LkNoZWNrT2JqZWN0Q29lcmNpYmxlOyAvLyByZW5hbWVkIGluIEVTNiB0byBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlXG5cbm1vZHVsZS5leHBvcnRzID0gRVM2O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VzLWFic3RyYWN0L2VzMjAxNS5qc1xuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbnZhciBiaW5kID0gcmVxdWlyZSgnZnVuY3Rpb24tYmluZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJpbmQuY2FsbChGdW5jdGlvbi5jYWxsLCBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9oYXMvc3JjL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxudmFyIGltcGxlbWVudGF0aW9uID0gcmVxdWlyZSgnLi9pbXBsZW1lbnRhdGlvbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kIHx8IGltcGxlbWVudGF0aW9uO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Z1bmN0aW9uLWJpbmQvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKiBlc2xpbnQgbm8taW52YWxpZC10aGlzOiAxICovXG5cbnZhciBFUlJPUl9NRVNTQUdFID0gJ0Z1bmN0aW9uLnByb3RvdHlwZS5iaW5kIGNhbGxlZCBvbiBpbmNvbXBhdGlibGUgJztcbnZhciBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgZnVuY1R5cGUgPSAnW29iamVjdCBGdW5jdGlvbl0nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJpbmQodGhhdCkge1xuICAgIHZhciB0YXJnZXQgPSB0aGlzO1xuICAgIGlmICh0eXBlb2YgdGFyZ2V0ICE9PSAnZnVuY3Rpb24nIHx8IHRvU3RyLmNhbGwodGFyZ2V0KSAhPT0gZnVuY1R5cGUpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihFUlJPUl9NRVNTQUdFICsgdGFyZ2V0KTtcbiAgICB9XG4gICAgdmFyIGFyZ3MgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG5cbiAgICB2YXIgYm91bmQ7XG4gICAgdmFyIGJpbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBib3VuZCkge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHRhcmdldC5hcHBseShcbiAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgIGFyZ3MuY29uY2F0KHNsaWNlLmNhbGwoYXJndW1lbnRzKSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAoT2JqZWN0KHJlc3VsdCkgPT09IHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXQuYXBwbHkoXG4gICAgICAgICAgICAgICAgdGhhdCxcbiAgICAgICAgICAgICAgICBhcmdzLmNvbmNhdChzbGljZS5jYWxsKGFyZ3VtZW50cykpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHZhciBib3VuZExlbmd0aCA9IE1hdGgubWF4KDAsIHRhcmdldC5sZW5ndGggLSBhcmdzLmxlbmd0aCk7XG4gICAgdmFyIGJvdW5kQXJncyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYm91bmRMZW5ndGg7IGkrKykge1xuICAgICAgICBib3VuZEFyZ3MucHVzaCgnJCcgKyBpKTtcbiAgICB9XG5cbiAgICBib3VuZCA9IEZ1bmN0aW9uKCdiaW5kZXInLCAncmV0dXJuIGZ1bmN0aW9uICgnICsgYm91bmRBcmdzLmpvaW4oJywnKSArICcpeyByZXR1cm4gYmluZGVyLmFwcGx5KHRoaXMsYXJndW1lbnRzKTsgfScpKGJpbmRlcik7XG5cbiAgICBpZiAodGFyZ2V0LnByb3RvdHlwZSkge1xuICAgICAgICB2YXIgRW1wdHkgPSBmdW5jdGlvbiBFbXB0eSgpIHt9O1xuICAgICAgICBFbXB0eS5wcm90b3R5cGUgPSB0YXJnZXQucHJvdG90eXBlO1xuICAgICAgICBib3VuZC5wcm90b3R5cGUgPSBuZXcgRW1wdHkoKTtcbiAgICAgICAgRW1wdHkucHJvdG90eXBlID0gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gYm91bmQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Z1bmN0aW9uLWJpbmQvaW1wbGVtZW50YXRpb24uanNcbi8vIG1vZHVsZSBpZCA9IDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZXMyMDE1Jyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZXMtdG8tcHJpbWl0aXZlL2VzNi5qc1xuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbnZhciBoYXNTeW1ib2xzID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSAnc3ltYm9sJztcblxudmFyIGlzUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9oZWxwZXJzL2lzUHJpbWl0aXZlJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJ2lzLWNhbGxhYmxlJyk7XG52YXIgaXNEYXRlID0gcmVxdWlyZSgnaXMtZGF0ZS1vYmplY3QnKTtcbnZhciBpc1N5bWJvbCA9IHJlcXVpcmUoJ2lzLXN5bWJvbCcpO1xuXG52YXIgb3JkaW5hcnlUb1ByaW1pdGl2ZSA9IGZ1bmN0aW9uIE9yZGluYXJ5VG9QcmltaXRpdmUoTywgaGludCkge1xuXHRpZiAodHlwZW9mIE8gPT09ICd1bmRlZmluZWQnIHx8IE8gPT09IG51bGwpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBtZXRob2Qgb24gJyArIE8pO1xuXHR9XG5cdGlmICh0eXBlb2YgaGludCAhPT0gJ3N0cmluZycgfHwgKGhpbnQgIT09ICdudW1iZXInICYmIGhpbnQgIT09ICdzdHJpbmcnKSkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ2hpbnQgbXVzdCBiZSBcInN0cmluZ1wiIG9yIFwibnVtYmVyXCInKTtcblx0fVxuXHR2YXIgbWV0aG9kTmFtZXMgPSBoaW50ID09PSAnc3RyaW5nJyA/IFsndG9TdHJpbmcnLCAndmFsdWVPZiddIDogWyd2YWx1ZU9mJywgJ3RvU3RyaW5nJ107XG5cdHZhciBtZXRob2QsIHJlc3VsdCwgaTtcblx0Zm9yIChpID0gMDsgaSA8IG1ldGhvZE5hbWVzLmxlbmd0aDsgKytpKSB7XG5cdFx0bWV0aG9kID0gT1ttZXRob2ROYW1lc1tpXV07XG5cdFx0aWYgKGlzQ2FsbGFibGUobWV0aG9kKSkge1xuXHRcdFx0cmVzdWx0ID0gbWV0aG9kLmNhbGwoTyk7XG5cdFx0XHRpZiAoaXNQcmltaXRpdmUocmVzdWx0KSkge1xuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHR0aHJvdyBuZXcgVHlwZUVycm9yKCdObyBkZWZhdWx0IHZhbHVlJyk7XG59O1xuXG52YXIgR2V0TWV0aG9kID0gZnVuY3Rpb24gR2V0TWV0aG9kKE8sIFApIHtcblx0dmFyIGZ1bmMgPSBPW1BdO1xuXHRpZiAoZnVuYyAhPT0gbnVsbCAmJiB0eXBlb2YgZnVuYyAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRpZiAoIWlzQ2FsbGFibGUoZnVuYykpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoZnVuYyArICcgcmV0dXJuZWQgZm9yIHByb3BlcnR5ICcgKyBQICsgJyBvZiBvYmplY3QgJyArIE8gKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG5cdFx0fVxuXHRcdHJldHVybiBmdW5jO1xuXHR9XG5cdHJldHVybiB2b2lkIDA7XG59O1xuXG4vLyBodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtdG9wcmltaXRpdmVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gVG9QcmltaXRpdmUoaW5wdXQpIHtcblx0aWYgKGlzUHJpbWl0aXZlKGlucHV0KSkge1xuXHRcdHJldHVybiBpbnB1dDtcblx0fVxuXHR2YXIgaGludCA9ICdkZWZhdWx0Jztcblx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG5cdFx0aWYgKGFyZ3VtZW50c1sxXSA9PT0gU3RyaW5nKSB7XG5cdFx0XHRoaW50ID0gJ3N0cmluZyc7XG5cdFx0fSBlbHNlIGlmIChhcmd1bWVudHNbMV0gPT09IE51bWJlcikge1xuXHRcdFx0aGludCA9ICdudW1iZXInO1xuXHRcdH1cblx0fVxuXG5cdHZhciBleG90aWNUb1ByaW07XG5cdGlmIChoYXNTeW1ib2xzKSB7XG5cdFx0aWYgKFN5bWJvbC50b1ByaW1pdGl2ZSkge1xuXHRcdFx0ZXhvdGljVG9QcmltID0gR2V0TWV0aG9kKGlucHV0LCBTeW1ib2wudG9QcmltaXRpdmUpO1xuXHRcdH0gZWxzZSBpZiAoaXNTeW1ib2woaW5wdXQpKSB7XG5cdFx0XHRleG90aWNUb1ByaW0gPSBTeW1ib2wucHJvdG90eXBlLnZhbHVlT2Y7XG5cdFx0fVxuXHR9XG5cdGlmICh0eXBlb2YgZXhvdGljVG9QcmltICE9PSAndW5kZWZpbmVkJykge1xuXHRcdHZhciByZXN1bHQgPSBleG90aWNUb1ByaW0uY2FsbChpbnB1dCwgaGludCk7XG5cdFx0aWYgKGlzUHJpbWl0aXZlKHJlc3VsdCkpIHtcblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fVxuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ3VuYWJsZSB0byBjb252ZXJ0IGV4b3RpYyBvYmplY3QgdG8gcHJpbWl0aXZlJyk7XG5cdH1cblx0aWYgKGhpbnQgPT09ICdkZWZhdWx0JyAmJiAoaXNEYXRlKGlucHV0KSB8fCBpc1N5bWJvbChpbnB1dCkpKSB7XG5cdFx0aGludCA9ICdzdHJpbmcnO1xuXHR9XG5cdHJldHVybiBvcmRpbmFyeVRvUHJpbWl0aXZlKGlucHV0LCBoaW50ID09PSAnZGVmYXVsdCcgPyAnbnVtYmVyJyA6IGhpbnQpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy10by1wcmltaXRpdmUvZXMyMDE1LmpzXG4vLyBtb2R1bGUgaWQgPSA0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNQcmltaXRpdmUodmFsdWUpIHtcblx0cmV0dXJuIHZhbHVlID09PSBudWxsIHx8ICh0eXBlb2YgdmFsdWUgIT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0Jyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VzLXRvLXByaW1pdGl2ZS9oZWxwZXJzL2lzUHJpbWl0aXZlLmpzXG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxudmFyIGZuVG9TdHIgPSBGdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmc7XG5cbnZhciBjb25zdHJ1Y3RvclJlZ2V4ID0gL15cXHMqY2xhc3NcXGIvO1xudmFyIGlzRVM2Q2xhc3NGbiA9IGZ1bmN0aW9uIGlzRVM2Q2xhc3NGdW5jdGlvbih2YWx1ZSkge1xuXHR0cnkge1xuXHRcdHZhciBmblN0ciA9IGZuVG9TdHIuY2FsbCh2YWx1ZSk7XG5cdFx0cmV0dXJuIGNvbnN0cnVjdG9yUmVnZXgudGVzdChmblN0cik7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRyZXR1cm4gZmFsc2U7IC8vIG5vdCBhIGZ1bmN0aW9uXG5cdH1cbn07XG5cbnZhciB0cnlGdW5jdGlvbk9iamVjdCA9IGZ1bmN0aW9uIHRyeUZ1bmN0aW9uVG9TdHIodmFsdWUpIHtcblx0dHJ5IHtcblx0XHRpZiAoaXNFUzZDbGFzc0ZuKHZhbHVlKSkgeyByZXR1cm4gZmFsc2U7IH1cblx0XHRmblRvU3RyLmNhbGwodmFsdWUpO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbnZhciBmbkNsYXNzID0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbnZhciBnZW5DbGFzcyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXSc7XG52YXIgaGFzVG9TdHJpbmdUYWcgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBTeW1ib2wudG9TdHJpbmdUYWcgPT09ICdzeW1ib2wnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQ2FsbGFibGUodmFsdWUpIHtcblx0aWYgKCF2YWx1ZSkgeyByZXR1cm4gZmFsc2U7IH1cblx0aWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnKSB7IHJldHVybiBmYWxzZTsgfVxuXHRpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nICYmICF2YWx1ZS5wcm90b3R5cGUpIHsgcmV0dXJuIHRydWU7IH1cblx0aWYgKGhhc1RvU3RyaW5nVGFnKSB7IHJldHVybiB0cnlGdW5jdGlvbk9iamVjdCh2YWx1ZSk7IH1cblx0aWYgKGlzRVM2Q2xhc3NGbih2YWx1ZSkpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdHZhciBzdHJDbGFzcyA9IHRvU3RyLmNhbGwodmFsdWUpO1xuXHRyZXR1cm4gc3RyQ2xhc3MgPT09IGZuQ2xhc3MgfHwgc3RyQ2xhc3MgPT09IGdlbkNsYXNzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9pcy1jYWxsYWJsZS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbnZhciBnZXREYXkgPSBEYXRlLnByb3RvdHlwZS5nZXREYXk7XG52YXIgdHJ5RGF0ZU9iamVjdCA9IGZ1bmN0aW9uIHRyeURhdGVPYmplY3QodmFsdWUpIHtcblx0dHJ5IHtcblx0XHRnZXREYXkuY2FsbCh2YWx1ZSk7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn07XG5cbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgZGF0ZUNsYXNzID0gJ1tvYmplY3QgRGF0ZV0nO1xudmFyIGhhc1RvU3RyaW5nVGFnID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgU3ltYm9sLnRvU3RyaW5nVGFnID09PSAnc3ltYm9sJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0RhdGVPYmplY3QodmFsdWUpIHtcblx0aWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcgfHwgdmFsdWUgPT09IG51bGwpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdHJldHVybiBoYXNUb1N0cmluZ1RhZyA/IHRyeURhdGVPYmplY3QodmFsdWUpIDogdG9TdHIuY2FsbCh2YWx1ZSkgPT09IGRhdGVDbGFzcztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaXMtZGF0ZS1vYmplY3QvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIGhhc1N5bWJvbHMgPSByZXF1aXJlKCdoYXMtc3ltYm9scycpKCk7XG5cbmlmIChoYXNTeW1ib2xzKSB7XG5cdHZhciBzeW1Ub1N0ciA9IFN5bWJvbC5wcm90b3R5cGUudG9TdHJpbmc7XG5cdHZhciBzeW1TdHJpbmdSZWdleCA9IC9eU3ltYm9sXFwoLipcXCkkLztcblx0dmFyIGlzU3ltYm9sT2JqZWN0ID0gZnVuY3Rpb24gaXNSZWFsU3ltYm9sT2JqZWN0KHZhbHVlKSB7XG5cdFx0aWYgKHR5cGVvZiB2YWx1ZS52YWx1ZU9mKCkgIT09ICdzeW1ib2wnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHJldHVybiBzeW1TdHJpbmdSZWdleC50ZXN0KHN5bVRvU3RyLmNhbGwodmFsdWUpKTtcblx0fTtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG5cdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N5bWJvbCcpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRpZiAodG9TdHIuY2FsbCh2YWx1ZSkgIT09ICdbb2JqZWN0IFN5bWJvbF0nKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHRyeSB7XG5cdFx0XHRyZXR1cm4gaXNTeW1ib2xPYmplY3QodmFsdWUpO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH07XG59IGVsc2Uge1xuXG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNTeW1ib2wodmFsdWUpIHtcblx0XHQvLyB0aGlzIGVudmlyb25tZW50IGRvZXMgbm90IHN1cHBvcnQgU3ltYm9scy5cblx0XHRyZXR1cm4gZmFsc2UgJiYgdmFsdWU7XG5cdH07XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaXMtc3ltYm9sL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxudmFyIG9yaWdTeW1ib2wgPSBnbG9iYWwuU3ltYm9sO1xudmFyIGhhc1N5bWJvbFNoYW0gPSByZXF1aXJlKCcuL3NoYW1zJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaGFzTmF0aXZlU3ltYm9scygpIHtcblx0aWYgKHR5cGVvZiBvcmlnU3ltYm9sICE9PSAnZnVuY3Rpb24nKSB7IHJldHVybiBmYWxzZTsgfVxuXHRpZiAodHlwZW9mIFN5bWJvbCAhPT0gJ2Z1bmN0aW9uJykgeyByZXR1cm4gZmFsc2U7IH1cblx0aWYgKHR5cGVvZiBvcmlnU3ltYm9sKCdmb28nKSAhPT0gJ3N5bWJvbCcpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdGlmICh0eXBlb2YgU3ltYm9sKCdiYXInKSAhPT0gJ3N5bWJvbCcpIHsgcmV0dXJuIGZhbHNlOyB9XG5cblx0cmV0dXJuIGhhc1N5bWJvbFNoYW0oKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaGFzLXN5bWJvbHMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKiBlc2xpbnQgY29tcGxleGl0eTogWzIsIDE3XSwgbWF4LXN0YXRlbWVudHM6IFsyLCAzM10gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaGFzU3ltYm9scygpIHtcblx0aWYgKHR5cGVvZiBTeW1ib2wgIT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgIT09ICdmdW5jdGlvbicpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdGlmICh0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSAnc3ltYm9sJykgeyByZXR1cm4gdHJ1ZTsgfVxuXG5cdHZhciBvYmogPSB7fTtcblx0dmFyIHN5bSA9IFN5bWJvbCgndGVzdCcpO1xuXHR2YXIgc3ltT2JqID0gT2JqZWN0KHN5bSk7XG5cdGlmICh0eXBlb2Ygc3ltID09PSAnc3RyaW5nJykgeyByZXR1cm4gZmFsc2U7IH1cblxuXHRpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHN5bSkgIT09ICdbb2JqZWN0IFN5bWJvbF0nKSB7IHJldHVybiBmYWxzZTsgfVxuXHRpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHN5bU9iaikgIT09ICdbb2JqZWN0IFN5bWJvbF0nKSB7IHJldHVybiBmYWxzZTsgfVxuXG5cdC8vIHRlbXAgZGlzYWJsZWQgcGVyIGh0dHBzOi8vZ2l0aHViLmNvbS9samhhcmIvb2JqZWN0LmFzc2lnbi9pc3N1ZXMvMTdcblx0Ly8gaWYgKHN5bSBpbnN0YW5jZW9mIFN5bWJvbCkgeyByZXR1cm4gZmFsc2U7IH1cblx0Ly8gdGVtcCBkaXNhYmxlZCBwZXIgaHR0cHM6Ly9naXRodWIuY29tL1dlYlJlZmxlY3Rpb24vZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzL2lzc3Vlcy80XG5cdC8vIGlmICghKHN5bU9iaiBpbnN0YW5jZW9mIFN5bWJvbCkpIHsgcmV0dXJuIGZhbHNlOyB9XG5cblx0Ly8gaWYgKHR5cGVvZiBTeW1ib2wucHJvdG90eXBlLnRvU3RyaW5nICE9PSAnZnVuY3Rpb24nKSB7IHJldHVybiBmYWxzZTsgfVxuXHQvLyBpZiAoU3RyaW5nKHN5bSkgIT09IFN5bWJvbC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChzeW0pKSB7IHJldHVybiBmYWxzZTsgfVxuXG5cdHZhciBzeW1WYWwgPSA0Mjtcblx0b2JqW3N5bV0gPSBzeW1WYWw7XG5cdGZvciAoc3ltIGluIG9iaikgeyByZXR1cm4gZmFsc2U7IH0gLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuXHRpZiAodHlwZW9mIE9iamVjdC5rZXlzID09PSAnZnVuY3Rpb24nICYmIE9iamVjdC5rZXlzKG9iaikubGVuZ3RoICE9PSAwKSB7IHJldHVybiBmYWxzZTsgfVxuXG5cdGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgPT09ICdmdW5jdGlvbicgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMob2JqKS5sZW5ndGggIT09IDApIHsgcmV0dXJuIGZhbHNlOyB9XG5cblx0dmFyIHN5bXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iaik7XG5cdGlmIChzeW1zLmxlbmd0aCAhPT0gMSB8fCBzeW1zWzBdICE9PSBzeW0pIHsgcmV0dXJuIGZhbHNlOyB9XG5cblx0aWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwob2JqLCBzeW0pKSB7IHJldHVybiBmYWxzZTsgfVxuXG5cdGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIHN5bSk7XG5cdFx0aWYgKGRlc2NyaXB0b3IudmFsdWUgIT09IHN5bVZhbCB8fCBkZXNjcmlwdG9yLmVudW1lcmFibGUgIT09IHRydWUpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdH1cblxuXHRyZXR1cm4gdHJ1ZTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaGFzLXN5bWJvbHMvc2hhbXMuanNcbi8vIG1vZHVsZSBpZCA9IDU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKiBnbG9iYWxzXG5cdFNldCxcblx0TWFwLFxuXHRXZWFrU2V0LFxuXHRXZWFrTWFwLFxuXG5cdFByb21pc2UsXG5cblx0U3ltYm9sLFxuXHRQcm94eSxcblxuXHRBdG9taWNzLFxuXHRTaGFyZWRBcnJheUJ1ZmZlcixcblxuXHRBcnJheUJ1ZmZlcixcblx0RGF0YVZpZXcsXG5cdFVpbnQ4QXJyYXksXG5cdEZsb2F0MzJBcnJheSxcblx0RmxvYXQ2NEFycmF5LFxuXHRJbnQ4QXJyYXksXG5cdEludDE2QXJyYXksXG5cdEludDMyQXJyYXksXG5cdFVpbnQ4Q2xhbXBlZEFycmF5LFxuXHRVaW50MTZBcnJheSxcblx0VWludDMyQXJyYXksXG4qL1xuXG52YXIgdW5kZWZpbmVkOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNoYWRvdy1yZXN0cmljdGVkLW5hbWVzXG5cbnZhciBUaHJvd1R5cGVFcnJvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Jcblx0PyAoZnVuY3Rpb24gKCkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihhcmd1bWVudHMsICdjYWxsZWUnKS5nZXQ7IH0oKSlcblx0OiBmdW5jdGlvbiAoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoKTsgfTtcblxudmFyIGhhc1N5bWJvbHMgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09ICdzeW1ib2wnO1xuXG52YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHguX19wcm90b19fOyB9OyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXByb3RvXG5cbnZhciBnZW5lcmF0b3I7IC8vID0gZnVuY3Rpb24gKiAoKSB7fTtcbnZhciBnZW5lcmF0b3JGdW5jdGlvbiA9IGdlbmVyYXRvciA/IGdldFByb3RvKGdlbmVyYXRvcikgOiB1bmRlZmluZWQ7XG52YXIgYXN5bmNGbjsgLy8gYXN5bmMgZnVuY3Rpb24oKSB7fTtcbnZhciBhc3luY0Z1bmN0aW9uID0gYXN5bmNGbiA/IGFzeW5jRm4uY29uc3RydWN0b3IgOiB1bmRlZmluZWQ7XG52YXIgYXN5bmNHZW47IC8vIGFzeW5jIGZ1bmN0aW9uICogKCkge307XG52YXIgYXN5bmNHZW5GdW5jdGlvbiA9IGFzeW5jR2VuID8gZ2V0UHJvdG8oYXN5bmNHZW4pIDogdW5kZWZpbmVkO1xudmFyIGFzeW5jR2VuSXRlcmF0b3IgPSBhc3luY0dlbiA/IGFzeW5jR2VuKCkgOiB1bmRlZmluZWQ7XG5cbnZhciBUeXBlZEFycmF5ID0gdHlwZW9mIFVpbnQ4QXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogZ2V0UHJvdG8oVWludDhBcnJheSk7XG5cbnZhciBJTlRSSU5TSUNTID0ge1xuXHQnJCAlQXJyYXklJzogQXJyYXksXG5cdCckICVBcnJheUJ1ZmZlciUnOiB0eXBlb2YgQXJyYXlCdWZmZXIgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogQXJyYXlCdWZmZXIsXG5cdCckICVBcnJheUJ1ZmZlclByb3RvdHlwZSUnOiB0eXBlb2YgQXJyYXlCdWZmZXIgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogQXJyYXlCdWZmZXIucHJvdG90eXBlLFxuXHQnJCAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUnOiBoYXNTeW1ib2xzID8gZ2V0UHJvdG8oW11bU3ltYm9sLml0ZXJhdG9yXSgpKSA6IHVuZGVmaW5lZCxcblx0JyQgJUFycmF5UHJvdG90eXBlJSc6IEFycmF5LnByb3RvdHlwZSxcblx0JyQgJUFycmF5UHJvdG9fZW50cmllcyUnOiBBcnJheS5wcm90b3R5cGUuZW50cmllcyxcblx0JyQgJUFycmF5UHJvdG9fZm9yRWFjaCUnOiBBcnJheS5wcm90b3R5cGUuZm9yRWFjaCxcblx0JyQgJUFycmF5UHJvdG9fa2V5cyUnOiBBcnJheS5wcm90b3R5cGUua2V5cyxcblx0JyQgJUFycmF5UHJvdG9fdmFsdWVzJSc6IEFycmF5LnByb3RvdHlwZS52YWx1ZXMsXG5cdCckICVBc3luY0Zyb21TeW5jSXRlcmF0b3JQcm90b3R5cGUlJzogdW5kZWZpbmVkLFxuXHQnJCAlQXN5bmNGdW5jdGlvbiUnOiBhc3luY0Z1bmN0aW9uLFxuXHQnJCAlQXN5bmNGdW5jdGlvblByb3RvdHlwZSUnOiBhc3luY0Z1bmN0aW9uID8gYXN5bmNGdW5jdGlvbi5wcm90b3R5cGUgOiB1bmRlZmluZWQsXG5cdCckICVBc3luY0dlbmVyYXRvciUnOiBhc3luY0dlbiA/IGdldFByb3RvKGFzeW5jR2VuSXRlcmF0b3IpIDogdW5kZWZpbmVkLFxuXHQnJCAlQXN5bmNHZW5lcmF0b3JGdW5jdGlvbiUnOiBhc3luY0dlbkZ1bmN0aW9uLFxuXHQnJCAlQXN5bmNHZW5lcmF0b3JQcm90b3R5cGUlJzogYXN5bmNHZW5GdW5jdGlvbiA/IGFzeW5jR2VuRnVuY3Rpb24ucHJvdG90eXBlIDogdW5kZWZpbmVkLFxuXHQnJCAlQXN5bmNJdGVyYXRvclByb3RvdHlwZSUnOiBhc3luY0dlbkl0ZXJhdG9yICYmIGhhc1N5bWJvbHMgJiYgU3ltYm9sLmFzeW5jSXRlcmF0b3IgPyBhc3luY0dlbkl0ZXJhdG9yW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSgpIDogdW5kZWZpbmVkLFxuXHQnJCAlQXRvbWljcyUnOiB0eXBlb2YgQXRvbWljcyA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBBdG9taWNzLFxuXHQnJCAlQm9vbGVhbiUnOiBCb29sZWFuLFxuXHQnJCAlQm9vbGVhblByb3RvdHlwZSUnOiBCb29sZWFuLnByb3RvdHlwZSxcblx0JyQgJURhdGFWaWV3JSc6IHR5cGVvZiBEYXRhVmlldyA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBEYXRhVmlldyxcblx0JyQgJURhdGFWaWV3UHJvdG90eXBlJSc6IHR5cGVvZiBEYXRhVmlldyA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBEYXRhVmlldy5wcm90b3R5cGUsXG5cdCckICVEYXRlJSc6IERhdGUsXG5cdCckICVEYXRlUHJvdG90eXBlJSc6IERhdGUucHJvdG90eXBlLFxuXHQnJCAlZGVjb2RlVVJJJSc6IGRlY29kZVVSSSxcblx0JyQgJWRlY29kZVVSSUNvbXBvbmVudCUnOiBkZWNvZGVVUklDb21wb25lbnQsXG5cdCckICVlbmNvZGVVUkklJzogZW5jb2RlVVJJLFxuXHQnJCAlZW5jb2RlVVJJQ29tcG9uZW50JSc6IGVuY29kZVVSSUNvbXBvbmVudCxcblx0JyQgJUVycm9yJSc6IEVycm9yLFxuXHQnJCAlRXJyb3JQcm90b3R5cGUlJzogRXJyb3IucHJvdG90eXBlLFxuXHQnJCAlZXZhbCUnOiBldmFsLCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWV2YWxcblx0JyQgJUV2YWxFcnJvciUnOiBFdmFsRXJyb3IsXG5cdCckICVFdmFsRXJyb3JQcm90b3R5cGUlJzogRXZhbEVycm9yLnByb3RvdHlwZSxcblx0JyQgJUZsb2F0MzJBcnJheSUnOiB0eXBlb2YgRmxvYXQzMkFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IEZsb2F0MzJBcnJheSxcblx0JyQgJUZsb2F0MzJBcnJheVByb3RvdHlwZSUnOiB0eXBlb2YgRmxvYXQzMkFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IEZsb2F0MzJBcnJheS5wcm90b3R5cGUsXG5cdCckICVGbG9hdDY0QXJyYXklJzogdHlwZW9mIEZsb2F0NjRBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBGbG9hdDY0QXJyYXksXG5cdCckICVGbG9hdDY0QXJyYXlQcm90b3R5cGUlJzogdHlwZW9mIEZsb2F0NjRBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBGbG9hdDY0QXJyYXkucHJvdG90eXBlLFxuXHQnJCAlRnVuY3Rpb24lJzogRnVuY3Rpb24sXG5cdCckICVGdW5jdGlvblByb3RvdHlwZSUnOiBGdW5jdGlvbi5wcm90b3R5cGUsXG5cdCckICVHZW5lcmF0b3IlJzogZ2VuZXJhdG9yID8gZ2V0UHJvdG8oZ2VuZXJhdG9yKCkpIDogdW5kZWZpbmVkLFxuXHQnJCAlR2VuZXJhdG9yRnVuY3Rpb24lJzogZ2VuZXJhdG9yRnVuY3Rpb24sXG5cdCckICVHZW5lcmF0b3JQcm90b3R5cGUlJzogZ2VuZXJhdG9yRnVuY3Rpb24gPyBnZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgOiB1bmRlZmluZWQsXG5cdCckICVJbnQ4QXJyYXklJzogdHlwZW9mIEludDhBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBJbnQ4QXJyYXksXG5cdCckICVJbnQ4QXJyYXlQcm90b3R5cGUlJzogdHlwZW9mIEludDhBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBJbnQ4QXJyYXkucHJvdG90eXBlLFxuXHQnJCAlSW50MTZBcnJheSUnOiB0eXBlb2YgSW50MTZBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBJbnQxNkFycmF5LFxuXHQnJCAlSW50MTZBcnJheVByb3RvdHlwZSUnOiB0eXBlb2YgSW50MTZBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBJbnQ4QXJyYXkucHJvdG90eXBlLFxuXHQnJCAlSW50MzJBcnJheSUnOiB0eXBlb2YgSW50MzJBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBJbnQzMkFycmF5LFxuXHQnJCAlSW50MzJBcnJheVByb3RvdHlwZSUnOiB0eXBlb2YgSW50MzJBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBJbnQzMkFycmF5LnByb3RvdHlwZSxcblx0JyQgJWlzRmluaXRlJSc6IGlzRmluaXRlLFxuXHQnJCAlaXNOYU4lJzogaXNOYU4sXG5cdCckICVJdGVyYXRvclByb3RvdHlwZSUnOiBoYXNTeW1ib2xzID8gZ2V0UHJvdG8oZ2V0UHJvdG8oW11bU3ltYm9sLml0ZXJhdG9yXSgpKSkgOiB1bmRlZmluZWQsXG5cdCckICVKU09OJSc6IEpTT04sXG5cdCckICVKU09OUGFyc2UlJzogSlNPTi5wYXJzZSxcblx0JyQgJU1hcCUnOiB0eXBlb2YgTWFwID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IE1hcCxcblx0JyQgJU1hcEl0ZXJhdG9yUHJvdG90eXBlJSc6IHR5cGVvZiBNYXAgPT09ICd1bmRlZmluZWQnIHx8ICFoYXNTeW1ib2xzID8gdW5kZWZpbmVkIDogZ2V0UHJvdG8obmV3IE1hcCgpW1N5bWJvbC5pdGVyYXRvcl0oKSksXG5cdCckICVNYXBQcm90b3R5cGUlJzogdHlwZW9mIE1hcCA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBNYXAucHJvdG90eXBlLFxuXHQnJCAlTWF0aCUnOiBNYXRoLFxuXHQnJCAlTnVtYmVyJSc6IE51bWJlcixcblx0JyQgJU51bWJlclByb3RvdHlwZSUnOiBOdW1iZXIucHJvdG90eXBlLFxuXHQnJCAlT2JqZWN0JSc6IE9iamVjdCxcblx0JyQgJU9iamVjdFByb3RvdHlwZSUnOiBPYmplY3QucHJvdG90eXBlLFxuXHQnJCAlT2JqUHJvdG9fdG9TdHJpbmclJzogT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyxcblx0JyQgJU9ialByb3RvX3ZhbHVlT2YlJzogT2JqZWN0LnByb3RvdHlwZS52YWx1ZU9mLFxuXHQnJCAlcGFyc2VGbG9hdCUnOiBwYXJzZUZsb2F0LFxuXHQnJCAlcGFyc2VJbnQlJzogcGFyc2VJbnQsXG5cdCckICVQcm9taXNlJSc6IHR5cGVvZiBQcm9taXNlID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFByb21pc2UsXG5cdCckICVQcm9taXNlUHJvdG90eXBlJSc6IHR5cGVvZiBQcm9taXNlID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFByb21pc2UucHJvdG90eXBlLFxuXHQnJCAlUHJvbWlzZVByb3RvX3RoZW4lJzogdHlwZW9mIFByb21pc2UgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogUHJvbWlzZS5wcm90b3R5cGUudGhlbixcblx0JyQgJVByb21pc2VfYWxsJSc6IHR5cGVvZiBQcm9taXNlID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFByb21pc2UuYWxsLFxuXHQnJCAlUHJvbWlzZV9yZWplY3QlJzogdHlwZW9mIFByb21pc2UgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogUHJvbWlzZS5yZWplY3QsXG5cdCckICVQcm9taXNlX3Jlc29sdmUlJzogdHlwZW9mIFByb21pc2UgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogUHJvbWlzZS5yZXNvbHZlLFxuXHQnJCAlUHJveHklJzogdHlwZW9mIFByb3h5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFByb3h5LFxuXHQnJCAlUmFuZ2VFcnJvciUnOiBSYW5nZUVycm9yLFxuXHQnJCAlUmFuZ2VFcnJvclByb3RvdHlwZSUnOiBSYW5nZUVycm9yLnByb3RvdHlwZSxcblx0JyQgJVJlZmVyZW5jZUVycm9yJSc6IFJlZmVyZW5jZUVycm9yLFxuXHQnJCAlUmVmZXJlbmNlRXJyb3JQcm90b3R5cGUlJzogUmVmZXJlbmNlRXJyb3IucHJvdG90eXBlLFxuXHQnJCAlUmVmbGVjdCUnOiB0eXBlb2YgUmVmbGVjdCA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBSZWZsZWN0LFxuXHQnJCAlUmVnRXhwJSc6IFJlZ0V4cCxcblx0JyQgJVJlZ0V4cFByb3RvdHlwZSUnOiBSZWdFeHAucHJvdG90eXBlLFxuXHQnJCAlU2V0JSc6IHR5cGVvZiBTZXQgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogU2V0LFxuXHQnJCAlU2V0SXRlcmF0b3JQcm90b3R5cGUlJzogdHlwZW9mIFNldCA9PT0gJ3VuZGVmaW5lZCcgfHwgIWhhc1N5bWJvbHMgPyB1bmRlZmluZWQgOiBnZXRQcm90byhuZXcgU2V0KClbU3ltYm9sLml0ZXJhdG9yXSgpKSxcblx0JyQgJVNldFByb3RvdHlwZSUnOiB0eXBlb2YgU2V0ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFNldC5wcm90b3R5cGUsXG5cdCckICVTaGFyZWRBcnJheUJ1ZmZlciUnOiB0eXBlb2YgU2hhcmVkQXJyYXlCdWZmZXIgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogU2hhcmVkQXJyYXlCdWZmZXIsXG5cdCckICVTaGFyZWRBcnJheUJ1ZmZlclByb3RvdHlwZSUnOiB0eXBlb2YgU2hhcmVkQXJyYXlCdWZmZXIgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogU2hhcmVkQXJyYXlCdWZmZXIucHJvdG90eXBlLFxuXHQnJCAlU3RyaW5nJSc6IFN0cmluZyxcblx0JyQgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJSc6IGhhc1N5bWJvbHMgPyBnZXRQcm90bygnJ1tTeW1ib2wuaXRlcmF0b3JdKCkpIDogdW5kZWZpbmVkLFxuXHQnJCAlU3RyaW5nUHJvdG90eXBlJSc6IFN0cmluZy5wcm90b3R5cGUsXG5cdCckICVTeW1ib2wlJzogaGFzU3ltYm9scyA/IFN5bWJvbCA6IHVuZGVmaW5lZCxcblx0JyQgJVN5bWJvbFByb3RvdHlwZSUnOiBoYXNTeW1ib2xzID8gU3ltYm9sLnByb3RvdHlwZSA6IHVuZGVmaW5lZCxcblx0JyQgJVN5bnRheEVycm9yJSc6IFN5bnRheEVycm9yLFxuXHQnJCAlU3ludGF4RXJyb3JQcm90b3R5cGUlJzogU3ludGF4RXJyb3IucHJvdG90eXBlLFxuXHQnJCAlVGhyb3dUeXBlRXJyb3IlJzogVGhyb3dUeXBlRXJyb3IsXG5cdCckICVUeXBlZEFycmF5JSc6IFR5cGVkQXJyYXksXG5cdCckICVUeXBlZEFycmF5UHJvdG90eXBlJSc6IFR5cGVkQXJyYXkgPyBUeXBlZEFycmF5LnByb3RvdHlwZSA6IHVuZGVmaW5lZCxcblx0JyQgJVR5cGVFcnJvciUnOiBUeXBlRXJyb3IsXG5cdCckICVUeXBlRXJyb3JQcm90b3R5cGUlJzogVHlwZUVycm9yLnByb3RvdHlwZSxcblx0JyQgJVVpbnQ4QXJyYXklJzogdHlwZW9mIFVpbnQ4QXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogVWludDhBcnJheSxcblx0JyQgJVVpbnQ4QXJyYXlQcm90b3R5cGUlJzogdHlwZW9mIFVpbnQ4QXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogVWludDhBcnJheS5wcm90b3R5cGUsXG5cdCckICVVaW50OENsYW1wZWRBcnJheSUnOiB0eXBlb2YgVWludDhDbGFtcGVkQXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogVWludDhDbGFtcGVkQXJyYXksXG5cdCckICVVaW50OENsYW1wZWRBcnJheVByb3RvdHlwZSUnOiB0eXBlb2YgVWludDhDbGFtcGVkQXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogVWludDhDbGFtcGVkQXJyYXkucHJvdG90eXBlLFxuXHQnJCAlVWludDE2QXJyYXklJzogdHlwZW9mIFVpbnQxNkFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFVpbnQxNkFycmF5LFxuXHQnJCAlVWludDE2QXJyYXlQcm90b3R5cGUlJzogdHlwZW9mIFVpbnQxNkFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFVpbnQxNkFycmF5LnByb3RvdHlwZSxcblx0JyQgJVVpbnQzMkFycmF5JSc6IHR5cGVvZiBVaW50MzJBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBVaW50MzJBcnJheSxcblx0JyQgJVVpbnQzMkFycmF5UHJvdG90eXBlJSc6IHR5cGVvZiBVaW50MzJBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBVaW50MzJBcnJheS5wcm90b3R5cGUsXG5cdCckICVVUklFcnJvciUnOiBVUklFcnJvcixcblx0JyQgJVVSSUVycm9yUHJvdG90eXBlJSc6IFVSSUVycm9yLnByb3RvdHlwZSxcblx0JyQgJVdlYWtNYXAlJzogdHlwZW9mIFdlYWtNYXAgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogV2Vha01hcCxcblx0JyQgJVdlYWtNYXBQcm90b3R5cGUlJzogdHlwZW9mIFdlYWtNYXAgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogV2Vha01hcC5wcm90b3R5cGUsXG5cdCckICVXZWFrU2V0JSc6IHR5cGVvZiBXZWFrU2V0ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFdlYWtTZXQsXG5cdCckICVXZWFrU2V0UHJvdG90eXBlJSc6IHR5cGVvZiBXZWFrU2V0ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFdlYWtTZXQucHJvdG90eXBlXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIEdldEludHJpbnNpYyhuYW1lLCBhbGxvd01pc3NpbmcpIHtcblx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIHR5cGVvZiBhbGxvd01pc3NpbmcgIT09ICdib29sZWFuJykge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ1wiYWxsb3dNaXNzaW5nXCIgYXJndW1lbnQgbXVzdCBiZSBhIGJvb2xlYW4nKTtcblx0fVxuXG5cdHZhciBrZXkgPSAnJCAnICsgbmFtZTtcblx0aWYgKCEoa2V5IGluIElOVFJJTlNJQ1MpKSB7XG5cdFx0dGhyb3cgbmV3IFN5bnRheEVycm9yKCdpbnRyaW5zaWMgJyArIG5hbWUgKyAnIGRvZXMgbm90IGV4aXN0IScpO1xuXHR9XG5cblx0Ly8gaXN0YW5idWwgaWdub3JlIGlmIC8vIGhvcGVmdWxseSB0aGlzIGlzIGltcG9zc2libGUgdG8gdGVzdCA6LSlcblx0aWYgKHR5cGVvZiBJTlRSSU5TSUNTW2tleV0gPT09ICd1bmRlZmluZWQnICYmICFhbGxvd01pc3NpbmcpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdpbnRyaW5zaWMgJyArIG5hbWUgKyAnIGV4aXN0cywgYnV0IGlzIG5vdCBhdmFpbGFibGUuIFBsZWFzZSBmaWxlIGFuIGlzc3VlIScpO1xuXHR9XG5cdHJldHVybiBJTlRSSU5TSUNTW2tleV07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VzLWFic3RyYWN0L0dldEludHJpbnNpYy5qc1xuLy8gbW9kdWxlIGlkID0gNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbnZhciBHZXRJbnRyaW5zaWMgPSByZXF1aXJlKCcuLi9HZXRJbnRyaW5zaWMnKTtcblxudmFyICRUeXBlRXJyb3IgPSBHZXRJbnRyaW5zaWMoJyVUeXBlRXJyb3IlJyk7XG52YXIgJFN5bnRheEVycm9yID0gR2V0SW50cmluc2ljKCclU3ludGF4RXJyb3IlJyk7XG5cbnZhciBoYXMgPSByZXF1aXJlKCdoYXMnKTtcblxudmFyIHByZWRpY2F0ZXMgPSB7XG4gIC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1wcm9wZXJ0eS1kZXNjcmlwdG9yLXNwZWNpZmljYXRpb24tdHlwZVxuICAnUHJvcGVydHkgRGVzY3JpcHRvcic6IGZ1bmN0aW9uIGlzUHJvcGVydHlEZXNjcmlwdG9yKEVTLCBEZXNjKSB7XG4gICAgaWYgKEVTLlR5cGUoRGVzYykgIT09ICdPYmplY3QnKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHZhciBhbGxvd2VkID0ge1xuICAgICAgJ1tbQ29uZmlndXJhYmxlXV0nOiB0cnVlLFxuICAgICAgJ1tbRW51bWVyYWJsZV1dJzogdHJ1ZSxcbiAgICAgICdbW0dldF1dJzogdHJ1ZSxcbiAgICAgICdbW1NldF1dJzogdHJ1ZSxcbiAgICAgICdbW1ZhbHVlXV0nOiB0cnVlLFxuICAgICAgJ1tbV3JpdGFibGVdXSc6IHRydWVcbiAgICB9O1xuXG4gICAgZm9yICh2YXIga2V5IGluIERlc2MpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgaWYgKGhhcyhEZXNjLCBrZXkpICYmICFhbGxvd2VkW2tleV0pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBpc0RhdGEgPSBoYXMoRGVzYywgJ1tbVmFsdWVdXScpO1xuICAgIHZhciBJc0FjY2Vzc29yID0gaGFzKERlc2MsICdbW0dldF1dJykgfHwgaGFzKERlc2MsICdbW1NldF1dJyk7XG4gICAgaWYgKGlzRGF0YSAmJiBJc0FjY2Vzc29yKSB7XG4gICAgICB0aHJvdyBuZXcgJFR5cGVFcnJvcignUHJvcGVydHkgRGVzY3JpcHRvcnMgbWF5IG5vdCBiZSBib3RoIGFjY2Vzc29yIGFuZCBkYXRhIGRlc2NyaXB0b3JzJyk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGFzc2VydFJlY29yZChFUywgcmVjb3JkVHlwZSwgYXJndW1lbnROYW1lLCB2YWx1ZSkge1xuICB2YXIgcHJlZGljYXRlID0gcHJlZGljYXRlc1tyZWNvcmRUeXBlXTtcbiAgaWYgKHR5cGVvZiBwcmVkaWNhdGUgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgJFN5bnRheEVycm9yKCd1bmtub3duIHJlY29yZCB0eXBlOiAnICsgcmVjb3JkVHlwZSk7XG4gIH1cbiAgaWYgKCFwcmVkaWNhdGUoRVMsIHZhbHVlKSkge1xuICAgIHRocm93IG5ldyAkVHlwZUVycm9yKGFyZ3VtZW50TmFtZSArICcgbXVzdCBiZSBhICcgKyByZWNvcmRUeXBlKTtcbiAgfVxuICBjb25zb2xlLmxvZyhwcmVkaWNhdGUoRVMsIHZhbHVlKSwgdmFsdWUpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy1hYnN0cmFjdC9oZWxwZXJzL2Fzc2VydFJlY29yZC5qc1xuLy8gbW9kdWxlIGlkID0gNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJtb2R1bGUuZXhwb3J0cyA9IE51bWJlci5pc05hTiB8fCBmdW5jdGlvbiBpc05hTihhKSB7XG5cdHJldHVybiBhICE9PSBhO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy1hYnN0cmFjdC9oZWxwZXJzL2lzTmFOLmpzXG4vLyBtb2R1bGUgaWQgPSA1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsInZhciAkaXNOYU4gPSBOdW1iZXIuaXNOYU4gfHwgZnVuY3Rpb24gKGEpIHsgcmV0dXJuIGEgIT09IGE7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gTnVtYmVyLmlzRmluaXRlIHx8IGZ1bmN0aW9uICh4KSB7IHJldHVybiB0eXBlb2YgeCA9PT0gJ251bWJlcicgJiYgISRpc05hTih4KSAmJiB4ICE9PSBJbmZpbml0eSAmJiB4ICE9PSAtSW5maW5pdHk7IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZXMtYWJzdHJhY3QvaGVscGVycy9pc0Zpbml0ZS5qc1xuLy8gbW9kdWxlIGlkID0gNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJ2YXIgYmluZCA9IHJlcXVpcmUoJ2Z1bmN0aW9uLWJpbmQnKTtcbnZhciBoYXMgPSBiaW5kLmNhbGwoRnVuY3Rpb24uY2FsbCwgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG5cbnZhciAkYXNzaWduID0gT2JqZWN0LmFzc2lnbjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2UpIHtcblx0aWYgKCRhc3NpZ24pIHtcblx0XHRyZXR1cm4gJGFzc2lnbih0YXJnZXQsIHNvdXJjZSk7XG5cdH1cblxuXHRmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG5cdFx0aWYgKGhhcyhzb3VyY2UsIGtleSkpIHtcblx0XHRcdHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG5cdFx0fVxuXHR9XG5cdHJldHVybiB0YXJnZXQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VzLWFic3RyYWN0L2hlbHBlcnMvYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSA2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2lnbihudW1iZXIpIHtcblx0cmV0dXJuIG51bWJlciA+PSAwID8gMSA6IC0xO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy1hYnN0cmFjdC9oZWxwZXJzL3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBtb2QobnVtYmVyLCBtb2R1bG8pIHtcblx0dmFyIHJlbWFpbiA9IG51bWJlciAlIG1vZHVsbztcblx0cmV0dXJuIE1hdGguZmxvb3IocmVtYWluID49IDAgPyByZW1haW4gOiByZW1haW4gKyBtb2R1bG8pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy1hYnN0cmFjdC9oZWxwZXJzL21vZC5qc1xuLy8gbW9kdWxlIGlkID0gNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzUHJpbWl0aXZlKHZhbHVlKSB7XG5cdHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCAodHlwZW9mIHZhbHVlICE9PSAnZnVuY3Rpb24nICYmIHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy1hYnN0cmFjdC9oZWxwZXJzL2lzUHJpbWl0aXZlLmpzXG4vLyBtb2R1bGUgaWQgPSA2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxudmFyIEdldEludHJpbnNpYyA9IHJlcXVpcmUoJy4vR2V0SW50cmluc2ljJyk7XG5cbnZhciAkT2JqZWN0ID0gR2V0SW50cmluc2ljKCclT2JqZWN0JScpO1xudmFyICRUeXBlRXJyb3IgPSBHZXRJbnRyaW5zaWMoJyVUeXBlRXJyb3IlJyk7XG52YXIgJFN0cmluZyA9IEdldEludHJpbnNpYygnJVN0cmluZyUnKTtcblxudmFyIGFzc2VydFJlY29yZCA9IHJlcXVpcmUoJy4vaGVscGVycy9hc3NlcnRSZWNvcmQnKTtcbnZhciAkaXNOYU4gPSByZXF1aXJlKCcuL2hlbHBlcnMvaXNOYU4nKTtcbnZhciAkaXNGaW5pdGUgPSByZXF1aXJlKCcuL2hlbHBlcnMvaXNGaW5pdGUnKTtcblxudmFyIHNpZ24gPSByZXF1aXJlKCcuL2hlbHBlcnMvc2lnbicpO1xudmFyIG1vZCA9IHJlcXVpcmUoJy4vaGVscGVycy9tb2QnKTtcblxudmFyIElzQ2FsbGFibGUgPSByZXF1aXJlKCdpcy1jYWxsYWJsZScpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnZXMtdG8tcHJpbWl0aXZlL2VzNScpO1xuXG52YXIgaGFzID0gcmVxdWlyZSgnaGFzJyk7XG5cbi8vIGh0dHBzOi8vZXM1LmdpdGh1Yi5pby8jeDlcbnZhciBFUzUgPSB7XG5cdFRvUHJpbWl0aXZlOiB0b1ByaW1pdGl2ZSxcblxuXHRUb0Jvb2xlYW46IGZ1bmN0aW9uIFRvQm9vbGVhbih2YWx1ZSkge1xuXHRcdHJldHVybiAhIXZhbHVlO1xuXHR9LFxuXHRUb051bWJlcjogZnVuY3Rpb24gVG9OdW1iZXIodmFsdWUpIHtcblx0XHRyZXR1cm4gK3ZhbHVlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWltcGxpY2l0LWNvZXJjaW9uXG5cdH0sXG5cdFRvSW50ZWdlcjogZnVuY3Rpb24gVG9JbnRlZ2VyKHZhbHVlKSB7XG5cdFx0dmFyIG51bWJlciA9IHRoaXMuVG9OdW1iZXIodmFsdWUpO1xuXHRcdGlmICgkaXNOYU4obnVtYmVyKSkgeyByZXR1cm4gMDsgfVxuXHRcdGlmIChudW1iZXIgPT09IDAgfHwgISRpc0Zpbml0ZShudW1iZXIpKSB7IHJldHVybiBudW1iZXI7IH1cblx0XHRyZXR1cm4gc2lnbihudW1iZXIpICogTWF0aC5mbG9vcihNYXRoLmFicyhudW1iZXIpKTtcblx0fSxcblx0VG9JbnQzMjogZnVuY3Rpb24gVG9JbnQzMih4KSB7XG5cdFx0cmV0dXJuIHRoaXMuVG9OdW1iZXIoeCkgPj4gMDtcblx0fSxcblx0VG9VaW50MzI6IGZ1bmN0aW9uIFRvVWludDMyKHgpIHtcblx0XHRyZXR1cm4gdGhpcy5Ub051bWJlcih4KSA+Pj4gMDtcblx0fSxcblx0VG9VaW50MTY6IGZ1bmN0aW9uIFRvVWludDE2KHZhbHVlKSB7XG5cdFx0dmFyIG51bWJlciA9IHRoaXMuVG9OdW1iZXIodmFsdWUpO1xuXHRcdGlmICgkaXNOYU4obnVtYmVyKSB8fCBudW1iZXIgPT09IDAgfHwgISRpc0Zpbml0ZShudW1iZXIpKSB7IHJldHVybiAwOyB9XG5cdFx0dmFyIHBvc0ludCA9IHNpZ24obnVtYmVyKSAqIE1hdGguZmxvb3IoTWF0aC5hYnMobnVtYmVyKSk7XG5cdFx0cmV0dXJuIG1vZChwb3NJbnQsIDB4MTAwMDApO1xuXHR9LFxuXHRUb1N0cmluZzogZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUpIHtcblx0XHRyZXR1cm4gJFN0cmluZyh2YWx1ZSk7XG5cdH0sXG5cdFRvT2JqZWN0OiBmdW5jdGlvbiBUb09iamVjdCh2YWx1ZSkge1xuXHRcdHRoaXMuQ2hlY2tPYmplY3RDb2VyY2libGUodmFsdWUpO1xuXHRcdHJldHVybiAkT2JqZWN0KHZhbHVlKTtcblx0fSxcblx0Q2hlY2tPYmplY3RDb2VyY2libGU6IGZ1bmN0aW9uIENoZWNrT2JqZWN0Q29lcmNpYmxlKHZhbHVlLCBvcHRNZXNzYWdlKSB7XG5cdFx0LyoganNoaW50IGVxbnVsbDp0cnVlICovXG5cdFx0aWYgKHZhbHVlID09IG51bGwpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKG9wdE1lc3NhZ2UgfHwgJ0Nhbm5vdCBjYWxsIG1ldGhvZCBvbiAnICsgdmFsdWUpO1xuXHRcdH1cblx0XHRyZXR1cm4gdmFsdWU7XG5cdH0sXG5cdElzQ2FsbGFibGU6IElzQ2FsbGFibGUsXG5cdFNhbWVWYWx1ZTogZnVuY3Rpb24gU2FtZVZhbHVlKHgsIHkpIHtcblx0XHRpZiAoeCA9PT0geSkgeyAvLyAwID09PSAtMCwgYnV0IHRoZXkgYXJlIG5vdCBpZGVudGljYWwuXG5cdFx0XHRpZiAoeCA9PT0gMCkgeyByZXR1cm4gMSAvIHggPT09IDEgLyB5OyB9XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0cmV0dXJuICRpc05hTih4KSAmJiAkaXNOYU4oeSk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi81LjEvI3NlYy04XG5cdFR5cGU6IGZ1bmN0aW9uIFR5cGUoeCkge1xuXHRcdGlmICh4ID09PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gJ051bGwnO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIHggPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRyZXR1cm4gJ1VuZGVmaW5lZCc7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2YgeCA9PT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgeCA9PT0gJ29iamVjdCcpIHtcblx0XHRcdHJldHVybiAnT2JqZWN0Jztcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiB4ID09PSAnbnVtYmVyJykge1xuXHRcdFx0cmV0dXJuICdOdW1iZXInO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIHggPT09ICdib29sZWFuJykge1xuXHRcdFx0cmV0dXJuICdCb29sZWFuJztcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiB4ID09PSAnc3RyaW5nJykge1xuXHRcdFx0cmV0dXJuICdTdHJpbmcnO1xuXHRcdH1cblx0fSxcblxuXHQvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtcHJvcGVydHktZGVzY3JpcHRvci1zcGVjaWZpY2F0aW9uLXR5cGVcblx0SXNQcm9wZXJ0eURlc2NyaXB0b3I6IGZ1bmN0aW9uIElzUHJvcGVydHlEZXNjcmlwdG9yKERlc2MpIHtcblx0XHRpZiAodGhpcy5UeXBlKERlc2MpICE9PSAnT2JqZWN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHR2YXIgYWxsb3dlZCA9IHtcblx0XHRcdCdbW0NvbmZpZ3VyYWJsZV1dJzogdHJ1ZSxcblx0XHRcdCdbW0VudW1lcmFibGVdXSc6IHRydWUsXG5cdFx0XHQnW1tHZXRdXSc6IHRydWUsXG5cdFx0XHQnW1tTZXRdXSc6IHRydWUsXG5cdFx0XHQnW1tWYWx1ZV1dJzogdHJ1ZSxcblx0XHRcdCdbW1dyaXRhYmxlXV0nOiB0cnVlXG5cdFx0fTtcblxuXHRcdGZvciAodmFyIGtleSBpbiBEZXNjKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblx0XHRcdGlmIChoYXMoRGVzYywga2V5KSAmJiAhYWxsb3dlZFtrZXldKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR2YXIgaXNEYXRhID0gaGFzKERlc2MsICdbW1ZhbHVlXV0nKTtcblx0XHR2YXIgSXNBY2Nlc3NvciA9IGhhcyhEZXNjLCAnW1tHZXRdXScpIHx8IGhhcyhEZXNjLCAnW1tTZXRdXScpO1xuXHRcdGlmIChpc0RhdGEgJiYgSXNBY2Nlc3Nvcikge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ1Byb3BlcnR5IERlc2NyaXB0b3JzIG1heSBub3QgYmUgYm90aCBhY2Nlc3NvciBhbmQgZGF0YSBkZXNjcmlwdG9ycycpO1xuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSxcblxuXHQvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNS4xLyNzZWMtOC4xMC4xXG5cdElzQWNjZXNzb3JEZXNjcmlwdG9yOiBmdW5jdGlvbiBJc0FjY2Vzc29yRGVzY3JpcHRvcihEZXNjKSB7XG5cdFx0aWYgKHR5cGVvZiBEZXNjID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGFzc2VydFJlY29yZCh0aGlzLCAnUHJvcGVydHkgRGVzY3JpcHRvcicsICdEZXNjJywgRGVzYyk7XG5cblx0XHRpZiAoIWhhcyhEZXNjLCAnW1tHZXRdXScpICYmICFoYXMoRGVzYywgJ1tbU2V0XV0nKSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi81LjEvI3NlYy04LjEwLjJcblx0SXNEYXRhRGVzY3JpcHRvcjogZnVuY3Rpb24gSXNEYXRhRGVzY3JpcHRvcihEZXNjKSB7XG5cdFx0aWYgKHR5cGVvZiBEZXNjID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGFzc2VydFJlY29yZCh0aGlzLCAnUHJvcGVydHkgRGVzY3JpcHRvcicsICdEZXNjJywgRGVzYyk7XG5cblx0XHRpZiAoIWhhcyhEZXNjLCAnW1tWYWx1ZV1dJykgJiYgIWhhcyhEZXNjLCAnW1tXcml0YWJsZV1dJykpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSxcblxuXHQvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNS4xLyNzZWMtOC4xMC4zXG5cdElzR2VuZXJpY0Rlc2NyaXB0b3I6IGZ1bmN0aW9uIElzR2VuZXJpY0Rlc2NyaXB0b3IoRGVzYykge1xuXHRcdGlmICh0eXBlb2YgRGVzYyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRhc3NlcnRSZWNvcmQodGhpcywgJ1Byb3BlcnR5IERlc2NyaXB0b3InLCAnRGVzYycsIERlc2MpO1xuXG5cdFx0aWYgKCF0aGlzLklzQWNjZXNzb3JEZXNjcmlwdG9yKERlc2MpICYmICF0aGlzLklzRGF0YURlc2NyaXB0b3IoRGVzYykpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fSxcblxuXHQvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNS4xLyNzZWMtOC4xMC40XG5cdEZyb21Qcm9wZXJ0eURlc2NyaXB0b3I6IGZ1bmN0aW9uIEZyb21Qcm9wZXJ0eURlc2NyaXB0b3IoRGVzYykge1xuXHRcdGlmICh0eXBlb2YgRGVzYyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdHJldHVybiBEZXNjO1xuXHRcdH1cblxuXHRcdGFzc2VydFJlY29yZCh0aGlzLCAnUHJvcGVydHkgRGVzY3JpcHRvcicsICdEZXNjJywgRGVzYyk7XG5cblx0XHRpZiAodGhpcy5Jc0RhdGFEZXNjcmlwdG9yKERlc2MpKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHR2YWx1ZTogRGVzY1snW1tWYWx1ZV1dJ10sXG5cdFx0XHRcdHdyaXRhYmxlOiAhIURlc2NbJ1tbV3JpdGFibGVdXSddLFxuXHRcdFx0XHRlbnVtZXJhYmxlOiAhIURlc2NbJ1tbRW51bWVyYWJsZV1dJ10sXG5cdFx0XHRcdGNvbmZpZ3VyYWJsZTogISFEZXNjWydbW0NvbmZpZ3VyYWJsZV1dJ11cblx0XHRcdH07XG5cdFx0fSBlbHNlIGlmICh0aGlzLklzQWNjZXNzb3JEZXNjcmlwdG9yKERlc2MpKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRnZXQ6IERlc2NbJ1tbR2V0XV0nXSxcblx0XHRcdFx0c2V0OiBEZXNjWydbW1NldF1dJ10sXG5cdFx0XHRcdGVudW1lcmFibGU6ICEhRGVzY1snW1tFbnVtZXJhYmxlXV0nXSxcblx0XHRcdFx0Y29uZmlndXJhYmxlOiAhIURlc2NbJ1tbQ29uZmlndXJhYmxlXV0nXVxuXHRcdFx0fTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Zyb21Qcm9wZXJ0eURlc2NyaXB0b3IgbXVzdCBiZSBjYWxsZWQgd2l0aCBhIGZ1bGx5IHBvcHVsYXRlZCBQcm9wZXJ0eSBEZXNjcmlwdG9yJyk7XG5cdFx0fVxuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi81LjEvI3NlYy04LjEwLjVcblx0VG9Qcm9wZXJ0eURlc2NyaXB0b3I6IGZ1bmN0aW9uIFRvUHJvcGVydHlEZXNjcmlwdG9yKE9iaikge1xuXHRcdGlmICh0aGlzLlR5cGUoT2JqKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdUb1Byb3BlcnR5RGVzY3JpcHRvciByZXF1aXJlcyBhbiBvYmplY3QnKTtcblx0XHR9XG5cblx0XHR2YXIgZGVzYyA9IHt9O1xuXHRcdGlmIChoYXMoT2JqLCAnZW51bWVyYWJsZScpKSB7XG5cdFx0XHRkZXNjWydbW0VudW1lcmFibGVdXSddID0gdGhpcy5Ub0Jvb2xlYW4oT2JqLmVudW1lcmFibGUpO1xuXHRcdH1cblx0XHRpZiAoaGFzKE9iaiwgJ2NvbmZpZ3VyYWJsZScpKSB7XG5cdFx0XHRkZXNjWydbW0NvbmZpZ3VyYWJsZV1dJ10gPSB0aGlzLlRvQm9vbGVhbihPYmouY29uZmlndXJhYmxlKTtcblx0XHR9XG5cdFx0aWYgKGhhcyhPYmosICd2YWx1ZScpKSB7XG5cdFx0XHRkZXNjWydbW1ZhbHVlXV0nXSA9IE9iai52YWx1ZTtcblx0XHR9XG5cdFx0aWYgKGhhcyhPYmosICd3cml0YWJsZScpKSB7XG5cdFx0XHRkZXNjWydbW1dyaXRhYmxlXV0nXSA9IHRoaXMuVG9Cb29sZWFuKE9iai53cml0YWJsZSk7XG5cdFx0fVxuXHRcdGlmIChoYXMoT2JqLCAnZ2V0JykpIHtcblx0XHRcdHZhciBnZXR0ZXIgPSBPYmouZ2V0O1xuXHRcdFx0aWYgKHR5cGVvZiBnZXR0ZXIgIT09ICd1bmRlZmluZWQnICYmICF0aGlzLklzQ2FsbGFibGUoZ2V0dGVyKSkge1xuXHRcdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdnZXR0ZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cdFx0XHR9XG5cdFx0XHRkZXNjWydbW0dldF1dJ10gPSBnZXR0ZXI7XG5cdFx0fVxuXHRcdGlmIChoYXMoT2JqLCAnc2V0JykpIHtcblx0XHRcdHZhciBzZXR0ZXIgPSBPYmouc2V0O1xuXHRcdFx0aWYgKHR5cGVvZiBzZXR0ZXIgIT09ICd1bmRlZmluZWQnICYmICF0aGlzLklzQ2FsbGFibGUoc2V0dGVyKSkge1xuXHRcdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignc2V0dGVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXHRcdFx0fVxuXHRcdFx0ZGVzY1snW1tTZXRdXSddID0gc2V0dGVyO1xuXHRcdH1cblxuXHRcdGlmICgoaGFzKGRlc2MsICdbW0dldF1dJykgfHwgaGFzKGRlc2MsICdbW1NldF1dJykpICYmIChoYXMoZGVzYywgJ1tbVmFsdWVdXScpIHx8IGhhcyhkZXNjLCAnW1tXcml0YWJsZV1dJykpKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignSW52YWxpZCBwcm9wZXJ0eSBkZXNjcmlwdG9yLiBDYW5ub3QgYm90aCBzcGVjaWZ5IGFjY2Vzc29ycyBhbmQgYSB2YWx1ZSBvciB3cml0YWJsZSBhdHRyaWJ1dGUnKTtcblx0XHR9XG5cdFx0cmV0dXJuIGRlc2M7XG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRVM1O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VzLWFic3RyYWN0L2VzNS5qc1xuLy8gbW9kdWxlIGlkID0gNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbnZhciBpc1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vaGVscGVycy9pc1ByaW1pdGl2ZScpO1xuXG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJ2lzLWNhbGxhYmxlJyk7XG5cbi8vIGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzUuMS8jc2VjLTguMTIuOFxudmFyIEVTNWludGVybmFsU2xvdHMgPSB7XG5cdCdbW0RlZmF1bHRWYWx1ZV1dJzogZnVuY3Rpb24gKE8pIHtcblx0XHR2YXIgYWN0dWFsSGludDtcblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcblx0XHRcdGFjdHVhbEhpbnQgPSBhcmd1bWVudHNbMV07XG5cdFx0fSBlbHNlIHtcblx0XHRcdGFjdHVhbEhpbnQgPSB0b1N0ci5jYWxsKE8pID09PSAnW29iamVjdCBEYXRlXScgPyBTdHJpbmcgOiBOdW1iZXI7XG5cdFx0fVxuXG5cdFx0aWYgKGFjdHVhbEhpbnQgPT09IFN0cmluZyB8fCBhY3R1YWxIaW50ID09PSBOdW1iZXIpIHtcblx0XHRcdHZhciBtZXRob2RzID0gYWN0dWFsSGludCA9PT0gU3RyaW5nID8gWyd0b1N0cmluZycsICd2YWx1ZU9mJ10gOiBbJ3ZhbHVlT2YnLCAndG9TdHJpbmcnXTtcblx0XHRcdHZhciB2YWx1ZSwgaTtcblx0XHRcdGZvciAoaSA9IDA7IGkgPCBtZXRob2RzLmxlbmd0aDsgKytpKSB7XG5cdFx0XHRcdGlmIChpc0NhbGxhYmxlKE9bbWV0aG9kc1tpXV0pKSB7XG5cdFx0XHRcdFx0dmFsdWUgPSBPW21ldGhvZHNbaV1dKCk7XG5cdFx0XHRcdFx0aWYgKGlzUHJpbWl0aXZlKHZhbHVlKSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignTm8gZGVmYXVsdCB2YWx1ZScpO1xuXHRcdH1cblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdpbnZhbGlkIFtbRGVmYXVsdFZhbHVlXV0gaGludCBzdXBwbGllZCcpO1xuXHR9XG59O1xuXG4vLyBodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi81LjEvI3NlYy05LjFcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gVG9QcmltaXRpdmUoaW5wdXQpIHtcblx0aWYgKGlzUHJpbWl0aXZlKGlucHV0KSkge1xuXHRcdHJldHVybiBpbnB1dDtcblx0fVxuXHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcblx0XHRyZXR1cm4gRVM1aW50ZXJuYWxTbG90c1snW1tEZWZhdWx0VmFsdWVdXSddKGlucHV0LCBhcmd1bWVudHNbMV0pO1xuXHR9XG5cdHJldHVybiBFUzVpbnRlcm5hbFNsb3RzWydbW0RlZmF1bHRWYWx1ZV1dJ10oaW5wdXQpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy10by1wcmltaXRpdmUvZXM1LmpzXG4vLyBtb2R1bGUgaWQgPSA2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxudmFyIGhhcyA9IHJlcXVpcmUoJ2hhcycpO1xudmFyIHJlZ2V4RXhlYyA9IFJlZ0V4cC5wcm90b3R5cGUuZXhlYztcbnZhciBnT1BEID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxudmFyIHRyeVJlZ2V4RXhlY0NhbGwgPSBmdW5jdGlvbiB0cnlSZWdleEV4ZWModmFsdWUpIHtcblx0dHJ5IHtcblx0XHR2YXIgbGFzdEluZGV4ID0gdmFsdWUubGFzdEluZGV4O1xuXHRcdHZhbHVlLmxhc3RJbmRleCA9IDA7XG5cblx0XHRyZWdleEV4ZWMuY2FsbCh2YWx1ZSk7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0gZmluYWxseSB7XG5cdFx0dmFsdWUubGFzdEluZGV4ID0gbGFzdEluZGV4O1xuXHR9XG59O1xudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbnZhciByZWdleENsYXNzID0gJ1tvYmplY3QgUmVnRXhwXSc7XG52YXIgaGFzVG9TdHJpbmdUYWcgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBTeW1ib2wudG9TdHJpbmdUYWcgPT09ICdzeW1ib2wnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzUmVnZXgodmFsdWUpIHtcblx0aWYgKCF2YWx1ZSB8fCB0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cdGlmICghaGFzVG9TdHJpbmdUYWcpIHtcblx0XHRyZXR1cm4gdG9TdHIuY2FsbCh2YWx1ZSkgPT09IHJlZ2V4Q2xhc3M7XG5cdH1cblxuXHR2YXIgZGVzY3JpcHRvciA9IGdPUEQodmFsdWUsICdsYXN0SW5kZXgnKTtcblx0dmFyIGhhc0xhc3RJbmRleERhdGFQcm9wZXJ0eSA9IGRlc2NyaXB0b3IgJiYgaGFzKGRlc2NyaXB0b3IsICd2YWx1ZScpO1xuXHRpZiAoIWhhc0xhc3RJbmRleERhdGFQcm9wZXJ0eSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHJldHVybiB0cnlSZWdleEV4ZWNDYWxsKHZhbHVlKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaXMtcmVnZXgvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgRVMgPSByZXF1aXJlKCdlcy1hYnN0cmFjdC9lczYnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBmaW5kKHByZWRpY2F0ZSkge1xuXHR2YXIgbGlzdCA9IEVTLlRvT2JqZWN0KHRoaXMpO1xuXHR2YXIgbGVuZ3RoID0gRVMuVG9MZW5ndGgobGlzdC5sZW5ndGgpO1xuXHRpZiAoIUVTLklzQ2FsbGFibGUocHJlZGljYXRlKSkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0FycmF5I2ZpbmQ6IHByZWRpY2F0ZSBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcblx0fVxuXHRpZiAobGVuZ3RoID09PSAwKSB7XG5cdFx0cmV0dXJuIHZvaWQgMDtcblx0fVxuXHR2YXIgdGhpc0FyZztcblx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAwKSB7XG5cdFx0dGhpc0FyZyA9IGFyZ3VtZW50c1sxXTtcblx0fVxuXG5cdGZvciAodmFyIGkgPSAwLCB2YWx1ZTsgaSA8IGxlbmd0aDsgaSsrKSB7XG5cdFx0dmFsdWUgPSBsaXN0W2ldO1xuXHRcdC8vIGlubGluZWQgZm9yIHBlcmZvcm1hbmNlOiBpZiAoRVMuQ2FsbChwcmVkaWNhdGUsIHRoaXNBcmcsIFt2YWx1ZSwgaSwgbGlzdF0pKSB7XG5cdFx0aWYgKHByZWRpY2F0ZS5hcHBseSh0aGlzQXJnLCBbdmFsdWUsIGksIGxpc3RdKSkge1xuXHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gdm9pZCAwO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9hcnJheS5wcm90b3R5cGUuZmluZC9pbXBsZW1lbnRhdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZ2V0UG9seWZpbGwoKSB7XG5cdC8vIERldGVjdCBpZiBhbiBpbXBsZW1lbnRhdGlvbiBleGlzdHNcblx0Ly8gRGV0ZWN0IGVhcmx5IGltcGxlbWVudGF0aW9ucyB3aGljaCBza2lwcGVkIGhvbGVzIGluIHNwYXJzZSBhcnJheXNcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNwYXJzZS1hcnJheXNcblx0dmFyIGltcGxlbWVudGVkID0gQXJyYXkucHJvdG90eXBlLmZpbmQgJiYgWywgMV0uZmluZChmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0pICE9PSAxO1xuXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBnbG9iYWwtcmVxdWlyZVxuXHRyZXR1cm4gaW1wbGVtZW50ZWQgPyBBcnJheS5wcm90b3R5cGUuZmluZCA6IHJlcXVpcmUoJy4vaW1wbGVtZW50YXRpb24nKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYXJyYXkucHJvdG90eXBlLmZpbmQvcG9seWZpbGwuanNcbi8vIG1vZHVsZSBpZCA9IDY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZGVmaW5lID0gcmVxdWlyZSgnZGVmaW5lLXByb3BlcnRpZXMnKTtcbnZhciBnZXRQb2x5ZmlsbCA9IHJlcXVpcmUoJy4vcG9seWZpbGwnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzaGltQXJyYXlQcm90b3R5cGVGaW5kKCkge1xuXHR2YXIgcG9seWZpbGwgPSBnZXRQb2x5ZmlsbCgpO1xuXG5cdGRlZmluZShBcnJheS5wcm90b3R5cGUsIHsgZmluZDogcG9seWZpbGwgfSwge1xuXHRcdGZpbmQ6IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBBcnJheS5wcm90b3R5cGUuZmluZCAhPT0gcG9seWZpbGw7XG5cdFx0fVxuXHR9KTtcblxuXHRyZXR1cm4gcG9seWZpbGw7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2FycmF5LnByb3RvdHlwZS5maW5kL3NoaW0uanNcbi8vIG1vZHVsZSBpZCA9IDY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDE3OTIgMTc5MlxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tYXJyb3dzLWFsdFxcXCI+PHRpdGxlPmFycm93cy1hbHQ8L3RpdGxlPjxwYXRoIGQ9XFxcIk0xNDExIDU0MWwtMzU1IDM1NSAzNTUgMzU1IDE0NC0xNDRxMjktMzEgNzAtMTQgMzkgMTcgMzkgNTl2NDQ4cTAgMjYtMTkgNDV0LTQ1IDE5aC00NDhxLTQyIDAtNTktNDAtMTctMzkgMTQtNjlsMTQ0LTE0NC0zNTUtMzU1LTM1NSAzNTUgMTQ0IDE0NHEzMSAzMCAxNCA2OS0xNyA0MC01OSA0MGgtNDQ4cS0yNiAwLTQ1LTE5dC0xOS00NXYtNDQ4cTAtNDIgNDAtNTkgMzktMTcgNjkgMTRsMTQ0IDE0NCAzNTUtMzU1LTM1NS0zNTUtMTQ0IDE0NHEtMTkgMTktNDUgMTktMTIgMC0yNC01LTQwLTE3LTQwLTU5di00NDhxMC0yNiAxOS00NXQ0NS0xOWg0NDhxNDIgMCA1OSA0MCAxNyAzOS0xNCA2OWwtMTQ0IDE0NCAzNTUgMzU1IDM1NS0zNTUtMTQ0LTE0NHEtMzEtMzAtMTQtNjkgMTctNDAgNTktNDBoNDQ4cTI2IDAgNDUgMTl0MTkgNDV2NDQ4cTAgNDItMzkgNTktMTMgNS0yNSA1LTI2IDAtNDUtMTl6XFxcIi8+PC9zeW1ib2w+PHN5bWJvbCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNzkyIDE3OTJcXFwiIGlkPVxcXCJsZXBsYXllci1pY29uLWJhY2t3YXJkXFxcIj48dGl0bGU+YmFja3dhcmQ8L3RpdGxlPjxwYXRoIGQ9XFxcIk0xNjgzIDE0MXExOS0xOSAzMi0xM3QxMyAzMnYxNDcycTAgMjYtMTMgMzJ0LTMyLTEzbC03MTAtNzEwcS04LTktMTMtMTl2NzEwcTAgMjYtMTMgMzJ0LTMyLTEzbC03MTAtNzEwcS0xOS0xOS0xOS00NXQxOS00NWw3MTAtNzEwcTE5LTE5IDMyLTEzdDEzIDMydjcxMHE1LTExIDEzLTE5elxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi1idWxsc2V5ZVxcXCI+PHRpdGxlPmJ1bGxzZXllPC90aXRsZT48cGF0aCBkPVxcXCJNMTE1MiA4OTZxMCAxMDYtNzUgMTgxdC0xODEgNzUtMTgxLTc1LTc1LTE4MSA3NS0xODEgMTgxLTc1IDE4MSA3NSA3NSAxODF6bTEyOCAwcTAtMTU5LTExMi41LTI3MS41dC0yNzEuNS0xMTIuNS0yNzEuNSAxMTIuNS0xMTIuNSAyNzEuNSAxMTIuNSAyNzEuNSAyNzEuNSAxMTIuNSAyNzEuNS0xMTIuNSAxMTIuNS0yNzEuNXptMTI4IDBxMCAyMTItMTUwIDM2MnQtMzYyIDE1MC0zNjItMTUwLTE1MC0zNjIgMTUwLTM2MiAzNjItMTUwIDM2MiAxNTAgMTUwIDM2MnptMTI4IDBxMC0xMzAtNTEtMjQ4LjV0LTEzNi41LTIwNC0yMDQtMTM2LjUtMjQ4LjUtNTEtMjQ4LjUgNTEtMjA0IDEzNi41LTEzNi41IDIwNC01MSAyNDguNSA1MSAyNDguNSAxMzYuNSAyMDQgMjA0IDEzNi41IDI0OC41IDUxIDI0OC41LTUxIDIwNC0xMzYuNSAxMzYuNS0yMDQgNTEtMjQ4LjV6bTEyOCAwcTAgMjA5LTEwMyAzODUuNXQtMjc5LjUgMjc5LjUtMzg1LjUgMTAzLTM4NS41LTEwMy0yNzkuNS0yNzkuNS0xMDMtMzg1LjUgMTAzLTM4NS41IDI3OS41LTI3OS41IDM4NS41LTEwMyAzODUuNSAxMDMgMjc5LjUgMjc5LjUgMTAzIDM4NS41elxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgNDAwIDM4MFxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tY2F0XFxcIj48dGl0bGU+Y2F0PC90aXRsZT4gPHBhdGggZD1cXFwiTSAxNTEuMzQ5MDQsMzA3LjIwNDU1IEwgMjY0LjM0OTA0LDMwNy4yMDQ1NSBDIDI2NC4zNDkwNCwyOTEuMTQwOTYgMjYzLjIwMjEsMjg3Ljk1NDU1IDIzNi41OTkwNCwyODcuOTU0NTUgQyAyNDAuODQ5MDQsMjc1LjIwNDU1IDI1OC4xMjQyNCwyNDQuMzU4MDggMjY3LjcyNDA0LDI0NC4zNTgwOCBDIDI3Ni4yMTcwNywyNDQuMzU4MDggMjg2LjM0OTA0LDI0NC44MjU5MiAyODYuMzQ5MDQsMjY0LjIwNDU1IEMgMjg2LjM0OTA0LDI4Ni4yMDQ1NSAzMjMuMzcxNzEsMzIxLjY3NTQ3IDMzMi4zNDkwNCwzMDcuMjA0NTUgQyAzNDUuNzI3NjksMjg1LjYzODk3IDMwOS4zNDkwNCwyOTIuMjE1MTQgMzA5LjM0OTA0LDI0MC4yMDQ1NSBDIDMwOS4zNDkwNCwxNjkuMDUxMzUgMzUwLjg3NDE3LDE3OS4xODA3MSAzNTAuODc0MTcsMTM5LjIwNDU1IEMgMzUwLjg3NDE3LDExOS4yMDQ1NSAzNDUuMzQ5MDQsMTE2LjUwMzc0IDM0NS4zNDkwNCwxMDIuMjA0NTUgQyAzNDUuMzQ5MDQsODMuMzA2OTUgMzYxLjk5NzE3LDg0LjQwMzU3NyAzNTguNzU4MDUsNjguNzM0ODc5IEMgMzU2LjUyMDYxLDU3LjkxMTY1NiAzNTQuNzY5NjIsNDkuMjMxOTkgMzUzLjQ2NTE2LDM2LjE0Mzg4OSBDIDM1Mi41Mzk1OSwyNi44NTczMDUgMzUyLjI0NDUyLDE2Ljk1OTM5OCAzNDIuNTk4NTUsMTcuMzU3MzgyIEMgMzMxLjI2NTA1LDE3LjgyNDk5MiAzMjYuOTY1NDksMzcuNzc0MTkgMzA5LjM0OTA0LDM5LjIwNDU0OSBDIDI5MS43Njg1MSw0MC42MzE5OTEgMjc2Ljc3ODM0LDI0LjIzODAyOCAyNjkuOTc0MDQsMjYuNTc5NTQ5IEMgMjYzLjIyNzA5LDI4LjkwMTMzNCAyNjUuMzQ5MDQsNDcuMjA0NTQ5IDI2OS4zNDkwNCw2MC4yMDQ1NDkgQyAyNzUuNjM1ODgsODAuNjM2NzcxIDI4OS4zNDkwNCwxMDcuMjA0NTUgMjY0LjM0OTA0LDExMS4yMDQ1NSBDIDIzOS4zNDkwNCwxMTUuMjA0NTUgMTk2LjM0OTA0LDExOS4yMDQ1NSAxNjUuMzQ5MDQsMTYwLjIwNDU1IEMgMTM0LjM0OTA0LDIwMS4yMDQ1NSAxMzUuNDkzNDIsMjQ5LjMyMTIgMTIzLjM0OTA0LDI2NC4yMDQ1NSBDIDgyLjU5MDY5NiwzMTQuMTU1MjkgNDAuODIzOTE5LDI5My42NDYyNSA0MC44MjM5MTksMzM1LjIwNDU1IEMgNDAuODIzOTE5LDM1My44MTAxOSA3Mi4zNDkwNDUsMzY3LjIwNDU1IDc3LjM0OTA0NSwzNjEuMjA0NTUgQyA4Mi4zNDkwNDUsMzU1LjIwNDU1IDM0Ljg2Mzc2NCwzMzcuMzI1ODcgODcuOTk1NDkyLDMxNi4yMDQ1NSBDIDEzMy4zODcxMSwyOTguMTYwMTQgMTM3LjQzOTE0LDI5NC40NzY2MyAxNTEuMzQ5MDQsMzA3LjIwNDU1IHogXFxcIiBzdHlsZT1cXFwiZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjFweDtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxXFxcIi8+IDwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi1jb21tZW50aW5nLW9cXFwiPjx0aXRsZT5jb21tZW50aW5nLW88L3RpdGxlPjxwYXRoIGQ9XFxcIk02NDAgODk2cTAgNTMtMzcuNSA5MC41dC05MC41IDM3LjUtOTAuNS0zNy41LTM3LjUtOTAuNSAzNy41LTkwLjUgOTAuNS0zNy41IDkwLjUgMzcuNSAzNy41IDkwLjV6bTM4NCAwcTAgNTMtMzcuNSA5MC41dC05MC41IDM3LjUtOTAuNS0zNy41LTM3LjUtOTAuNSAzNy41LTkwLjUgOTAuNS0zNy41IDkwLjUgMzcuNSAzNy41IDkwLjV6bTM4NCAwcTAgNTMtMzcuNSA5MC41dC05MC41IDM3LjUtOTAuNS0zNy41LTM3LjUtOTAuNSAzNy41LTkwLjUgOTAuNS0zNy41IDkwLjUgMzcuNSAzNy41IDkwLjV6bS01MTItNTEycS0yMDQgMC0zODEuNSA2OS41dC0yODIgMTg3LjUtMTA0LjUgMjU1cTAgMTEyIDcxLjUgMjEzLjV0MjAxLjUgMTc1LjVsODcgNTAtMjcgOTZxLTI0IDkxLTcwIDE3MiAxNTItNjMgMjc1LTE3MWw0My0zOCA1NyA2cTY5IDggMTMwIDggMjA0IDAgMzgxLjUtNjkuNXQyODItMTg3LjUgMTA0LjUtMjU1LTEwNC41LTI1NS0yODItMTg3LjUtMzgxLjUtNjkuNXptODk2IDUxMnEwIDE3NC0xMjAgMzIxLjV0LTMyNiAyMzMtNDUwIDg1LjVxLTcwIDAtMTQ1LTgtMTk4IDE3NS00NjAgMjQyLTQ5IDE0LTExNCAyMmgtNXEtMTUgMC0yNy0xMC41dC0xNi0yNy41di0xcS0zLTQtLjUtMTJ0Mi0xMCA0LjUtOS41bDYtOSA3LTguNSA4LTlxNy04IDMxLTM0LjV0MzQuNS0zOCAzMS0zOS41IDMyLjUtNTEgMjctNTkgMjYtNzZxLTE1Ny04OS0yNDcuNS0yMjB0LTkwLjUtMjgxcTAtMTMwIDcxLTI0OC41dDE5MS0yMDQuNSAyODYtMTM2LjUgMzQ4LTUwLjUgMzQ4IDUwLjUgMjg2IDEzNi41IDE5MSAyMDQuNSA3MSAyNDguNXpcXFwiLz48L3N5bWJvbD48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDE3OTIgMTc5MlxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tZG93bmxvYWRcXFwiPjx0aXRsZT5kb3dubG9hZDwvdGl0bGU+PHBhdGggZD1cXFwiTTEzNDQgMTM0NHEwLTI2LTE5LTQ1dC00NS0xOS00NSAxOS0xOSA0NSAxOSA0NSA0NSAxOSA0NS0xOSAxOS00NXptMjU2IDBxMC0yNi0xOS00NXQtNDUtMTktNDUgMTktMTkgNDUgMTkgNDUgNDUgMTkgNDUtMTkgMTktNDV6bTEyOC0yMjR2MzIwcTAgNDAtMjggNjh0LTY4IDI4aC0xNDcycS00MCAwLTY4LTI4dC0yOC02OHYtMzIwcTAtNDAgMjgtNjh0NjgtMjhoNDY1bDEzNSAxMzZxNTggNTYgMTM2IDU2dDEzNi01NmwxMzYtMTM2aDQ2NHE0MCAwIDY4IDI4dDI4IDY4em0tMzI1LTU2OXExNyA0MS0xNCA3MGwtNDQ4IDQ0OHEtMTggMTktNDUgMTl0LTQ1LTE5bC00NDgtNDQ4cS0zMS0yOS0xNC03MCAxNy0zOSA1OS0zOWgyNTZ2LTQ0OHEwLTI2IDE5LTQ1dDQ1LTE5aDI1NnEyNiAwIDQ1IDE5dDE5IDQ1djQ0OGgyNTZxNDIgMCA1OSAzOXpcXFwiLz48L3N5bWJvbD48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDE3OTIgMTc5MlxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tZWRpdFxcXCI+PHRpdGxlPmVkaXQ8L3RpdGxlPjxwYXRoIGQ9XFxcIk04ODggMTE4NGwxMTYtMTE2LTE1Mi0xNTItMTE2IDExNnY1Nmg5NnY5Nmg1NnptNDQwLTcyMHEtMTYtMTYtMzMgMWwtMzUwIDM1MHEtMTcgMTctMSAzM3QzMy0xbDM1MC0zNTBxMTctMTcgMS0zM3ptODAgNTk0djE5MHEwIDExOS04NC41IDIwMy41dC0yMDMuNSA4NC41aC04MzJxLTExOSAwLTIwMy41LTg0LjV0LTg0LjUtMjAzLjV2LTgzMnEwLTExOSA4NC41LTIwMy41dDIwMy41LTg0LjVoODMycTYzIDAgMTE3IDI1IDE1IDcgMTggMjMgMyAxNy05IDI5bC00OSA0OXEtMTQgMTQtMzIgOC0yMy02LTQ1LTZoLTgzMnEtNjYgMC0xMTMgNDd0LTQ3IDExM3Y4MzJxMCA2NiA0NyAxMTN0MTEzIDQ3aDgzMnE2NiAwIDExMy00N3Q0Ny0xMTN2LTEyNnEwLTEzIDktMjJsNjQtNjRxMTUtMTUgMzUtN3QyMCAyOXptLTk2LTczOGwyODggMjg4LTY3MiA2NzJoLTI4OHYtMjg4em00NDQgMTMybC05MiA5Mi0yODgtMjg4IDkyLTkycTI4LTI4IDY4LTI4dDY4IDI4bDE1MiAxNTJxMjggMjggMjggNjh0LTI4IDY4elxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi1mb3J3YXJkXFxcIj48dGl0bGU+Zm9yd2FyZDwvdGl0bGU+PHBhdGggZD1cXFwiTTEwOSAxNjUxcS0xOSAxOS0zMiAxM3QtMTMtMzJ2LTE0NzJxMC0yNiAxMy0zMnQzMiAxM2w3MTAgNzEwcTggOCAxMyAxOXYtNzEwcTAtMjYgMTMtMzJ0MzIgMTNsNzEwIDcxMHExOSAxOSAxOSA0NXQtMTkgNDVsLTcxMCA3MTBxLTE5IDE5LTMyIDEzdC0xMy0zMnYtNzEwcS01IDEwLTEzIDE5elxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi1pbmZvXFxcIj48dGl0bGU+aW5mbzwvdGl0bGU+PHBhdGggZD1cXFwiTTEyMTYgMTM0NHYxMjhxMCAyNi0xOSA0NXQtNDUgMTloLTUxMnEtMjYgMC00NS0xOXQtMTktNDV2LTEyOHEwLTI2IDE5LTQ1dDQ1LTE5aDY0di0zODRoLTY0cS0yNiAwLTQ1LTE5dC0xOS00NXYtMTI4cTAtMjYgMTktNDV0NDUtMTloMzg0cTI2IDAgNDUgMTl0MTkgNDV2NTc2aDY0cTI2IDAgNDUgMTl0MTkgNDV6bS0xMjgtMTE1MnYxOTJxMCAyNi0xOSA0NXQtNDUgMTloLTI1NnEtMjYgMC00NS0xOXQtMTktNDV2LTE5MnEwLTI2IDE5LTQ1dDQ1LTE5aDI1NnEyNiAwIDQ1IDE5dDE5IDQ1elxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi1saXN0LXVsXFxcIj48dGl0bGU+bGlzdC11bDwvdGl0bGU+PHBhdGggZD1cXFwiTTM4NCAxNDA4cTAgODAtNTYgMTM2dC0xMzYgNTYtMTM2LTU2LTU2LTEzNiA1Ni0xMzYgMTM2LTU2IDEzNiA1NiA1NiAxMzZ6bTAtNTEycTAgODAtNTYgMTM2dC0xMzYgNTYtMTM2LTU2LTU2LTEzNiA1Ni0xMzYgMTM2LTU2IDEzNiA1NiA1NiAxMzZ6bTE0MDggNDE2djE5MnEwIDEzLTkuNSAyMi41dC0yMi41IDkuNWgtMTIxNnEtMTMgMC0yMi41LTkuNXQtOS41LTIyLjV2LTE5MnEwLTEzIDkuNS0yMi41dDIyLjUtOS41aDEyMTZxMTMgMCAyMi41IDkuNXQ5LjUgMjIuNXptLTE0MDgtOTI4cTAgODAtNTYgMTM2dC0xMzYgNTYtMTM2LTU2LTU2LTEzNiA1Ni0xMzYgMTM2LTU2IDEzNiA1NiA1NiAxMzZ6bTE0MDggNDE2djE5MnEwIDEzLTkuNSAyMi41dC0yMi41IDkuNWgtMTIxNnEtMTMgMC0yMi41LTkuNXQtOS41LTIyLjV2LTE5MnEwLTEzIDkuNS0yMi41dDIyLjUtOS41aDEyMTZxMTMgMCAyMi41IDkuNXQ5LjUgMjIuNXptMC01MTJ2MTkycTAgMTMtOS41IDIyLjV0LTIyLjUgOS41aC0xMjE2cS0xMyAwLTIyLjUtOS41dC05LjUtMjIuNXYtMTkycTAtMTMgOS41LTIyLjV0MjIuNS05LjVoMTIxNnExMyAwIDIyLjUgOS41dDkuNSAyMi41elxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi1tYWdpY1xcXCI+PHRpdGxlPm1hZ2ljPC90aXRsZT48cGF0aCBkPVxcXCJNMTI1NCA1ODFsMjkzLTI5My0xMDctMTA3LTI5MyAyOTN6bTQ0Ny0yOTNxMCAyNy0xOCA0NWwtMTI4NiAxMjg2cS0xOCAxOC00NSAxOHQtNDUtMThsLTE5OC0xOThxLTE4LTE4LTE4LTQ1dDE4LTQ1bDEyODYtMTI4NnExOC0xOCA0NS0xOHQ0NSAxOGwxOTggMTk4cTE4IDE4IDE4IDQ1em0tMTM1MS0xOTBsOTggMzAtOTggMzAtMzAgOTgtMzAtOTgtOTgtMzAgOTgtMzAgMzAtOTh6bTM1MCAxNjJsMTk2IDYwLTE5NiA2MC02MCAxOTYtNjAtMTk2LTE5Ni02MCAxOTYtNjAgNjAtMTk2em05MzAgNDc4bDk4IDMwLTk4IDMwLTMwIDk4LTMwLTk4LTk4LTMwIDk4LTMwIDMwLTk4em0tNjQwLTY0MGw5OCAzMC05OCAzMC0zMCA5OC0zMC05OC05OC0zMCA5OC0zMCAzMC05OHpcXFwiLz48L3N5bWJvbD48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDE3OTIgMTc5MlxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tcGF1c2VcXFwiPjx0aXRsZT5wYXVzZTwvdGl0bGU+PHBhdGggZD1cXFwiTTE2NjQgMTkydjE0MDhxMCAyNi0xOSA0NXQtNDUgMTloLTUxMnEtMjYgMC00NS0xOXQtMTktNDV2LTE0MDhxMC0yNiAxOS00NXQ0NS0xOWg1MTJxMjYgMCA0NSAxOXQxOSA0NXptLTg5NiAwdjE0MDhxMCAyNi0xOSA0NXQtNDUgMTloLTUxMnEtMjYgMC00NS0xOXQtMTktNDV2LTE0MDhxMC0yNiAxOS00NXQ0NS0xOWg1MTJxMjYgMCA0NSAxOXQxOSA0NXpcXFwiLz48L3N5bWJvbD48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDE3OTIgMTc5MlxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tcGxhbmVcXFwiPjx0aXRsZT5wbGFuZTwvdGl0bGU+PHBhdGggZD1cXFwiTTE1NjggMTYwcTQ0IDUyIDEyIDE0OHQtMTA4IDE3MmwtMTYxIDE2MSAxNjAgNjk2cTUgMTktMTIgMzNsLTEyOCA5NnEtNyA2LTE5IDYtNCAwLTctMS0xNS0zLTIxLTE2bC0yNzktNTA4LTI1OSAyNTkgNTMgMTk0cTUgMTctOCAzMWwtOTYgOTZxLTkgOS0yMyA5aC0ycS0xNS0yLTI0LTEzbC0xODktMjUyLTI1Mi0xODlxLTExLTctMTMtMjMtMS0xMyA5LTI1bDk2LTk3cTktOSAyMy05IDYgMCA4IDFsMTk0IDUzIDI1OS0yNTktNTA4LTI3OXEtMTQtOC0xNy0yNC0yLTE2IDktMjdsMTI4LTEyOHExNC0xMyAzMC04bDY2NSAxNTkgMTYwLTE2MHE3Ni03NiAxNzItMTA4dDE0OCAxMnpcXFwiLz48L3N5bWJvbD48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDE3OTIgMTc5MlxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tcGxheVxcXCI+PHRpdGxlPnBsYXk8L3RpdGxlPjxwYXRoIGQ9XFxcIk0xNTc2IDkyN2wtMTMyOCA3MzhxLTIzIDEzLTM5LjUgM3QtMTYuNS0zNnYtMTQ3MnEwLTI2IDE2LjUtMzZ0MzkuNSAzbDEzMjggNzM4cTIzIDEzIDIzIDMxdC0yMyAzMXpcXFwiLz48L3N5bWJvbD48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDE3OTIgMTc5MlxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tcGx1c1xcXCI+PHRpdGxlPnBsdXM8L3RpdGxlPjxwYXRoIGQ9XFxcIk0xNjAwIDczNnYxOTJxMCA0MC0yOCA2OHQtNjggMjhoLTQxNnY0MTZxMCA0MC0yOCA2OHQtNjggMjhoLTE5MnEtNDAgMC02OC0yOHQtMjgtNjh2LTQxNmgtNDE2cS00MCAwLTY4LTI4dC0yOC02OHYtMTkycTAtNDAgMjgtNjh0NjgtMjhoNDE2di00MTZxMC00MCAyOC02OHQ2OC0yOGgxOTJxNDAgMCA2OCAyOHQyOCA2OHY0MTZoNDE2cTQwIDAgNjggMjh0MjggNjh6XFxcIi8+PC9zeW1ib2w+PHN5bWJvbCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNzkyIDE3OTJcXFwiIGlkPVxcXCJsZXBsYXllci1pY29uLXJlZG9cXFwiPjx0aXRsZT5yZWRvPC90aXRsZT48cGF0aCBkPVxcXCJNMTY2NCAyNTZ2NDQ4cTAgMjYtMTkgNDV0LTQ1IDE5aC00NDhxLTQyIDAtNTktNDAtMTctMzkgMTQtNjlsMTM4LTEzOHEtMTQ4LTEzNy0zNDktMTM3LTEwNCAwLTE5OC41IDQwLjV0LTE2My41IDEwOS41LTEwOS41IDE2My41LTQwLjUgMTk4LjUgNDAuNSAxOTguNSAxMDkuNSAxNjMuNSAxNjMuNSAxMDkuNSAxOTguNSA0MC41cTExOSAwIDIyNS01MnQxNzktMTQ3cTctMTAgMjMtMTIgMTQgMCAyNSA5bDEzNyAxMzhxOSA4IDkuNSAyMC41dC03LjUgMjIuNXEtMTA5IDEzMi0yNjQgMjA0LjV0LTMyNyA3Mi41cS0xNTYgMC0yOTgtNjF0LTI0NS0xNjQtMTY0LTI0NS02MS0yOTggNjEtMjk4IDE2NC0yNDUgMjQ1LTE2NCAyOTgtNjFxMTQ3IDAgMjg0LjUgNTUuNXQyNDQuNSAxNTYuNWwxMzAtMTI5cTI5LTMxIDcwLTE0IDM5IDE3IDM5IDU5elxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi1yZWZyZXNoXFxcIj48dGl0bGU+cmVmcmVzaDwvdGl0bGU+PHBhdGggZD1cXFwiTTE2MzkgMTA1NnEwIDUtMSA3LTY0IDI2OC0yNjggNDM0LjV0LTQ3OCAxNjYuNXEtMTQ2IDAtMjgyLjUtNTV0LTI0My41LTE1N2wtMTI5IDEyOXEtMTkgMTktNDUgMTl0LTQ1LTE5LTE5LTQ1di00NDhxMC0yNiAxOS00NXQ0NS0xOWg0NDhxMjYgMCA0NSAxOXQxOSA0NS0xOSA0NWwtMTM3IDEzN3E3MSA2NiAxNjEgMTAydDE4NyAzNnExMzQgMCAyNTAtNjV0MTg2LTE3OXExMS0xNyA1My0xMTcgOC0yMyAzMC0yM2gxOTJxMTMgMCAyMi41IDkuNXQ5LjUgMjIuNXptMjUtODAwdjQ0OHEwIDI2LTE5IDQ1dC00NSAxOWgtNDQ4cS0yNiAwLTQ1LTE5dC0xOS00NSAxOS00NWwxMzgtMTM4cS0xNDgtMTM3LTM0OS0xMzctMTM0IDAtMjUwIDY1dC0xODYgMTc5cS0xMSAxNy01MyAxMTctOCAyMy0zMCAyM2gtMTk5cS0xMyAwLTIyLjUtOS41dC05LjUtMjIuNXYtN3E2NS0yNjggMjcwLTQzNC41dDQ4MC0xNjYuNXExNDYgMCAyODQgNTUuNXQyNDUgMTU2LjVsMTMwLTEyOXExOS0xOSA0NS0xOXQ0NSAxOSAxOSA0NXpcXFwiLz48L3N5bWJvbD48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDE3OTIgMTc5MlxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tdHJhc2hcXFwiPjx0aXRsZT50cmFzaDwvdGl0bGU+PHBhdGggZD1cXFwiTTcwNCAxMzc2di03MDRxMC0xNC05LTIzdC0yMy05aC02NHEtMTQgMC0yMyA5dC05IDIzdjcwNHEwIDE0IDkgMjN0MjMgOWg2NHExNCAwIDIzLTl0OS0yM3ptMjU2IDB2LTcwNHEwLTE0LTktMjN0LTIzLTloLTY0cS0xNCAwLTIzIDl0LTkgMjN2NzA0cTAgMTQgOSAyM3QyMyA5aDY0cTE0IDAgMjMtOXQ5LTIzem0yNTYgMHYtNzA0cTAtMTQtOS0yM3QtMjMtOWgtNjRxLTE0IDAtMjMgOXQtOSAyM3Y3MDRxMCAxNCA5IDIzdDIzIDloNjRxMTQgMCAyMy05dDktMjN6bS01NDQtOTkyaDQ0OGwtNDgtMTE3cS03LTktMTctMTFoLTMxN3EtMTAgMi0xNyAxMXptOTI4IDMydjY0cTAgMTQtOSAyM3QtMjMgOWgtOTZ2OTQ4cTAgODMtNDcgMTQzLjV0LTExMyA2MC41aC04MzJxLTY2IDAtMTEzLTU4LjV0LTQ3LTE0MS41di05NTJoLTk2cS0xNCAwLTIzLTl0LTktMjN2LTY0cTAtMTQgOS0yM3QyMy05aDMwOWw3MC0xNjdxMTUtMzcgNTQtNjN0NzktMjZoMzIwcTQwIDAgNzkgMjZ0NTQgNjNsNzAgMTY3aDMwOXExNCAwIDIzIDl0OSAyM3pcXFwiLz48L3N5bWJvbD48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDE3OTIgMTc5MlxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tdW5kb1xcXCI+PHRpdGxlPnVuZG88L3RpdGxlPjxwYXRoIGQ9XFxcIk0xNjY0IDg5NnEwIDE1Ni02MSAyOTh0LTE2NCAyNDUtMjQ1IDE2NC0yOTggNjFxLTE3MiAwLTMyNy03Mi41dC0yNjQtMjA0LjVxLTctMTAtNi41LTIyLjV0OC41LTIwLjVsMTM3LTEzOHExMC05IDI1LTkgMTYgMiAyMyAxMiA3MyA5NSAxNzkgMTQ3dDIyNSA1MnExMDQgMCAxOTguNS00MC41dDE2My41LTEwOS41IDEwOS41LTE2My41IDQwLjUtMTk4LjUtNDAuNS0xOTguNS0xMDkuNS0xNjMuNS0xNjMuNS0xMDkuNS0xOTguNS00MC41cS05OCAwLTE4OCAzNS41dC0xNjAgMTAxLjVsMTM3IDEzOHEzMSAzMCAxNCA2OS0xNyA0MC01OSA0MGgtNDQ4cS0yNiAwLTQ1LTE5dC0xOS00NXYtNDQ4cTAtNDIgNDAtNTkgMzktMTcgNjkgMTRsMTMwIDEyOXExMDctMTAxIDI0NC41LTE1Ni41dDI4NC41LTU1LjVxMTU2IDAgMjk4IDYxdDI0NSAxNjQgMTY0IDI0NSA2MSAyOTh6XFxcIi8+PC9zeW1ib2w+PHN5bWJvbCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNzkyIDE3OTJcXFwiIGlkPVxcXCJsZXBsYXllci1pY29uLXZvbHVtZS1kb3duXFxcIj48dGl0bGU+dm9sdW1lLWRvd248L3RpdGxlPjxwYXRoIGQ9XFxcIk0xMDg4IDM1MnYxMDg4cTAgMjYtMTkgNDV0LTQ1IDE5LTQ1LTE5bC0zMzMtMzMzaC0yNjJxLTI2IDAtNDUtMTl0LTE5LTQ1di0zODRxMC0yNiAxOS00NXQ0NS0xOWgyNjJsMzMzLTMzM3ExOS0xOSA0NS0xOXQ0NSAxOSAxOSA0NXptMzg0IDU0NHEwIDc2LTQyLjUgMTQxLjV0LTExMi41IDkzLjVxLTEwIDUtMjUgNS0yNiAwLTQ1LTE4LjV0LTE5LTQ1LjVxMC0yMSAxMi0zNS41dDI5LTI1IDM0LTIzIDI5LTM1LjUgMTItNTctMTItNTctMjktMzUuNS0zNC0yMy0yOS0yNS0xMi0zNS41cTAtMjcgMTktNDUuNXQ0NS0xOC41cTE1IDAgMjUgNSA3MCAyNyAxMTIuNSA5M3Q0Mi41IDE0MnpcXFwiLz48L3N5bWJvbD48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDE3OTIgMTc5MlxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tdm9sdW1lLW9mZlxcXCI+PHRpdGxlPnZvbHVtZS1vZmY8L3RpdGxlPjxwYXRoIGQ9XFxcIk0xMjgwIDM1MnYxMDg4cTAgMjYtMTkgNDV0LTQ1IDE5LTQ1LTE5bC0zMzMtMzMzaC0yNjJxLTI2IDAtNDUtMTl0LTE5LTQ1di0zODRxMC0yNiAxOS00NXQ0NS0xOWgyNjJsMzMzLTMzM3ExOS0xOSA0NS0xOXQ0NSAxOSAxOSA0NXpcXFwiLz48L3N5bWJvbD48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDE3OTIgMTc5MlxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tdm9sdW1lLXVwXFxcIj48dGl0bGU+dm9sdW1lLXVwPC90aXRsZT48cGF0aCBkPVxcXCJNODMyIDM1MnYxMDg4cTAgMjYtMTkgNDV0LTQ1IDE5LTQ1LTE5bC0zMzMtMzMzaC0yNjJxLTI2IDAtNDUtMTl0LTE5LTQ1di0zODRxMC0yNiAxOS00NXQ0NS0xOWgyNjJsMzMzLTMzM3ExOS0xOSA0NS0xOXQ0NSAxOSAxOSA0NXptMzg0IDU0NHEwIDc2LTQyLjUgMTQxLjV0LTExMi41IDkzLjVxLTEwIDUtMjUgNS0yNiAwLTQ1LTE4LjV0LTE5LTQ1LjVxMC0yMSAxMi0zNS41dDI5LTI1IDM0LTIzIDI5LTM1LjUgMTItNTctMTItNTctMjktMzUuNS0zNC0yMy0yOS0yNS0xMi0zNS41cTAtMjcgMTktNDUuNXQ0NS0xOC41cTE1IDAgMjUgNSA3MCAyNyAxMTIuNSA5M3Q0Mi41IDE0MnptMjU2IDBxMCAxNTMtODUgMjgyLjV0LTIyNSAxODguNXEtMTMgNS0yNSA1LTI3IDAtNDYtMTl0LTE5LTQ1cTAtMzkgMzktNTkgNTYtMjkgNzYtNDQgNzQtNTQgMTE1LjUtMTM1LjV0NDEuNS0xNzMuNS00MS41LTE3My41LTExNS41LTEzNS41cS0yMC0xNS03Ni00NC0zOS0yMC0zOS01OSAwLTI2IDE5LTQ1dDQ1LTE5cTEzIDAgMjYgNSAxNDAgNTkgMjI1IDE4OC41dDg1IDI4Mi41em0yNTYgMHEwIDIzMC0xMjcgNDIyLjV0LTMzOCAyODMuNXEtMTMgNS0yNiA1LTI2IDAtNDUtMTl0LTE5LTQ1cTAtMzYgMzktNTkgNy00IDIyLjUtMTAuNXQyMi41LTEwLjVxNDYtMjUgODItNTEgMTIzLTkxIDE5Mi0yMjd0NjktMjg5LTY5LTI4OS0xOTItMjI3cS0zNi0yNi04Mi01MS03LTQtMjIuNS0xMC41dC0yMi41LTEwLjVxLTM5LTIzLTM5LTU5IDAtMjYgMTktNDV0NDUtMTlxMTMgMCAyNiA1IDIxMSA5MSAzMzggMjgzLjV0MTI3IDQyMi41elxcXCIvPjwvc3ltYm9sPjwvc3ZnPlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9kaXN0L3N2Zy9zdmctZGVmcy5zdmdcbi8vIG1vZHVsZSBpZCA9IDcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiZXhwb3J0IGNvbnN0IHByZXNldCA9IHtcblx0b3B0aW9ucyA6IHtcblx0XHR3aWR0aCA6ICcxMDAlJyxcblx0XHRjb250cm9scyA6IHtcblx0XHRcdGNvbW1vbiA6IFtcblx0XHRcdFx0WydwbGF5JywgJ3ZvbHVtZScsICdkaXZpZGVyJywgJ3RpbWVsaW5lJywgJ2RpdmlkZXInLCAnZnVsbHNjcmVlbiddLFxuXHRcdFx0XHRbJ3JhdGUnLCAnZGl2aWRlcicsICdiYWNrd2FyZCcsICdkaXZpZGVyJywgJ3NvdXJjZScsICdkaXZpZGVyJywgJ2Rvd25sb2FkJ11cblx0XHRcdF0sXG5cdFx0XHRmdWxsc2NyZWVuIDogW1xuXHRcdFx0XHRbJ3BsYXknLCAndm9sdW1lJywgJ2RpdmlkZXInLCAndGltZWxpbmUnLCAnZGl2aWRlcicsICdyYXRlJywgJ2RpdmlkZXInLCAnYmFja3dhcmQnLCAnZGl2aWRlcicsICdzb3VyY2UnLCAnZGl2aWRlcicsICdkb3dubG9hZCcsICdkaXZpZGVyJywgJ2Z1bGxzY3JlZW4nXVxuXHRcdFx0XVxuXHRcdH1cblx0fSxcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9wcmVzZXRzL3Zwcy5qcyIsImNvbnN0IGNvbnRyb2xzID0gWydwbGF5JywgJ3ZvbHVtZScsICdkaXZpZGVyJywgJ3RpbWVsaW5lJywgJ2RpdmlkZXInLCAncmF0ZScsICdkb3dubG9hZCcsICdmdWxsc2NyZWVuJ107XG5cbmV4cG9ydCBjb25zdCBwcmVzZXQgPSB7XG5cdG9wdGlvbnMgOiB7XG5cdFx0Y29udHJvbHMgOiB7XG5cdFx0XHRjb21tb24gOiBbXG5cdFx0XHRcdGNvbnRyb2xzLFxuXHRcdFx0XHRbXVxuXHRcdFx0XSxcblx0XHRcdGZ1bGxzY3JlZW4gOiBbXG5cdFx0XHRcdGNvbnRyb2xzXG5cdFx0XHRdXG5cdFx0fVxuXHR9LFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL3ByZXNldHMvc2ltcGxlLmpzIiwiZXhwb3J0IGNvbnN0IHByZXNldCA9IHtcblx0b3B0aW9ucyA6IHtcblx0XHR3aWR0aCA6ICcxMDAlJyxcblx0XHRjb250cm9scyA6IHtcblx0XHRcdGNvbW1vbiA6IFtcblx0XHRcdFx0WydwbGF5JywgJ3ZvbHVtZScsICd0aW1lbGluZScsICdyYXRlJywgJ3NvdXJjZScsICdkaXZpZGVyJywgJ2Rvd25sb2FkJywgJ2Z1bGxzY3JlZW4nXSxcblx0XHRcdFx0W11cblx0XHRcdF0sXG5cdFx0XHRmdWxsc2NyZWVuIDogW1xuXHRcdFx0XHRbJ3BsYXknLCAndm9sdW1lJywgJ3RpbWVsaW5lJywgJ3JhdGUnLCAnc291cmNlJywgJ2RpdmlkZXInLCAnZG93bmxvYWQnLCAnZnVsbHNjcmVlbiddLFxuXHRcdFx0XVxuXHRcdH1cblx0fSxcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9wcmVzZXRzL3Ntcy5qcyIsImV4cG9ydCBjb25zdCBwcmVzZXQgPSB7XG5cdG9wdGlvbnMgOiB7XG5cdFx0d2lkdGggOiAnMTAwJScsXG5cdFx0Y29udHJvbHMgOiB7XG5cdFx0XHRjb21tb24gOiBbXG5cdFx0XHRcdFsncGxheScsICd2b2x1bWUnLCAndGltZWxpbmUnLCAncmF0ZScsICdzb3VyY2UnLCAnZGl2aWRlcicsICdmdWxsc2NyZWVuJ10sXG5cdFx0XHRcdFtdXG5cdFx0XHRdLFxuXHRcdFx0ZnVsbHNjcmVlbiA6IFtcblx0XHRcdFx0WydwbGF5JywgJ3ZvbHVtZScsICd0aW1lbGluZScsICdyYXRlJywgJ3NvdXJjZScsICdkaXZpZGVyJywgJ2Z1bGxzY3JlZW4nXSxcblx0XHRcdF1cblx0XHR9XG5cdH0sXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvcHJlc2V0cy9jb21wcmVzc2VkLmpzIiwiZXhwb3J0IGNvbnN0IHByZXNldCA9IHtcblx0b3B0aW9ucyA6IHtcblx0XHR3aWR0aCA6ICcxMDAlJyxcblxuXHRcdGNvbnRyb2xzT3B0aW9ucyA6IHtcblx0XHRcdGNvbW1vbiA6IHtcblx0XHRcdFx0YWxpZ24gOiBbJ2p1c3RpZnknXVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Y29udHJvbHMgOiB7XG5cdFx0XHRjb21tb24gOiBbXG5cdFx0XHRcdFsncGxheScsICd0aW1lbGluZScsICdyYXRlJywgJ3ZvbHVtZScsICdzb3VyY2UnLCAnZnVsbHNjcmVlbiddLFxuXHRcdFx0XSxcblx0XHRcdGZ1bGxzY3JlZW4gOiBbXG5cdFx0XHRcdFsncGxheScsICd0aW1lbGluZScsICdyYXRlJywgJ3ZvbHVtZScsICdzb3VyY2UnLCAnZnVsbHNjcmVlbiddXG5cdFx0XHRdLFxuXHRcdFx0bWluaSA6IFtcblx0XHRcdFx0WydwbGF5JywgJ3RpbWVsaW5lJywgJ3ZvbHVtZScsICdmdWxsc2NyZWVuJ11cblx0XHRcdF0sXG5cdFx0fVxuXHR9LFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL3ByZXNldHMvMjAzNS5qcyIsImltcG9ydCAnLi9sZS1wbGF5ZXInXG5pbXBvcnQgJy4vcGx1Z2lucy9sZS1wbGF5ZXItZ2EnXG5pbXBvcnQgJy4vcGx1Z2lucy9sZS1wbGF5ZXIteW91dHViZSdcbmltcG9ydCAnLi9wbHVnaW5zL2xlLXBsYXllci1uZXh0J1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9sZS1wbGF5ZXItZnVsbC5qcyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuY29uc3QgUGxheWVyID0gd2luZG93LmxlUGxheWVyIHx8IHdpbmRvdy4kLmxlUGxheWVyO1xuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG5cdHZpZGVvUGxheWVkIDogWzI1LCA1MCwgMTAwXSxcblx0dmlkZW9QbGF5ZWREZWx0YSA6IDUsXG5cdHZvbHVtZUNoYW5nZURlbGF5IDogMTAwMCxcblx0cmF0ZUNoYW5nZURlbGF5IDogMjAwMFxufVxuXG5QbGF5ZXIucGx1Z2luKCdnYScsIGZ1bmN0aW9uKHBsdWdpbk9wdGlvbnMpIHtcblx0Y29uc3Qgb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0T3B0aW9ucywgcGx1Z2luT3B0aW9ucyk7XG5cdGNvbnN0IHBsYXllciA9IHRoaXM7XG5cblx0aWYgKCF3aW5kb3cuZ2EpIHtcblx0XHRjb25zb2xlLmVycm9yKCdHb29nbGUgQW5hbHl0aWNzIGRvZXMgbm90IGV4aXN0Jyk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0cGxheWVyLm9uKCdmaXJzdHBsYXknLCAoZSkgPT4ge1xuXHRcdHdpbmRvdy5nYShcblx0XHRcdCdzZW5kJyxcblx0XHRcdCdldmVudCcsXG5cdFx0XHQnUGxheWVyIFZpZGVvIFN0YXJ0ZWQnXG5cdFx0KVxuXHR9KTtcblxuXHRwbGF5ZXIub24oJ2NvbnRyb2xjbGljaycsIChlLCBkYXRhKSA9PiB7XG5cdFx0Y29uc3QgY29udHJvbCA9IGRhdGEuY29udHJvbDtcblx0XHRjb25zdCB7bmFtZSwgY29sbGVjdGlvbn0gPSBjb250cm9sLm9wdGlvbnM7XG5cdFx0aWYobmFtZSkge1xuXHRcdFx0d2luZG93LmdhKFxuXHRcdFx0XHQnc2VuZCcsXG5cdFx0XHRcdCdldmVudCcsXG5cdFx0XHRcdCdQbGF5ZXIgQ29udHJvbCBDbGljaycsXG5cdFx0XHRcdG5hbWUsXG5cdFx0XHRcdGNvbGxlY3Rpb25cblx0XHRcdClcblx0XHR9XG5cdH0pO1xuXG5cdHBsYXllci5vbignc2VjdGlvbnNjbGljaycsIChlLCBkYXRhKSA9PiB7XG5cdFx0d2luZG93LmdhKFxuXHRcdFx0J3NlbmQnLFxuXHRcdFx0J2V2ZW50Jyxcblx0XHRcdCdQbGF5ZXIgU2VjdGlvbnMnLFxuXHRcdFx0J0NsaWNrJyxcblx0XHRcdHBsYXllci52aWV3XG5cdFx0KVxuXHR9KTtcblxuXG5cdGxldCB2b2x1bWVDaGFuZ2VUaW1lb3V0ID0gbnVsbDtcblxuXHRwbGF5ZXIub24oJ3ZvbHVtZWNoYW5nZScsIChlLCBkYXRhKSA9PiB7XG5cdFx0Y2xlYXJUaW1lb3V0KHZvbHVtZUNoYW5nZVRpbWVvdXQpO1xuXG5cdFx0dm9sdW1lQ2hhbmdlVGltZW91dCA9IHNldFRpbWVvdXQoXyA9PiB7XG5cdFx0XHRjb25zdCB2YWx1ZSA9IGRhdGEudm9sdW1lO1xuXHRcdFx0d2luZG93LmdhKFxuXHRcdFx0XHQnc2VuZCcsXG5cdFx0XHRcdCdldmVudCcsXG5cdFx0XHRcdCdQbGF5ZXIgVm9sdW1lIENoYW5nZScsXG5cdFx0XHRcdE51bWJlcih2YWx1ZSkudG9GaXhlZCgxKVxuXHRcdFx0KVxuXG5cdFx0fSwgb3B0aW9ucy52b2x1bWVDaGFuZ2VEZWxheSk7XG5cdH0pO1xuXG5cdGxldCByYXRlQ2hhbmdlVGltZW91dCA9IG51bGw7XG5cdHBsYXllci5vbigncmF0ZWNoYW5nZScsIChlLCBkYXRhKSA9PiB7XG5cdFx0Y2xlYXJUaW1lb3V0KHJhdGVDaGFuZ2VUaW1lb3V0KTtcblxuXHRcdHJhdGVDaGFuZ2VUaW1lb3V0ID0gc2V0VGltZW91dChfID0+IHtcblx0XHRcdGNvbnN0IHZhbHVlID0gZGF0YS5yYXRlO1xuXHRcdFx0d2luZG93LmdhKFxuXHRcdFx0XHQnc2VuZCcsXG5cdFx0XHRcdCdldmVudCcsXG5cdFx0XHRcdCdQbGF5ZXIgUmF0ZSBDaGFuZ2UnLFxuXHRcdFx0XHR2YWx1ZVxuXHRcdFx0KVxuXG5cdFx0fSwgb3B0aW9ucy5yYXRlQ2hhbmdlRGVsYXkpO1xuXHR9KVxuXG5cblx0bGV0IHBsYXllZEV2ZW50c1NlbnQgPSB7fTtcblx0cGxheWVyLm9uKCd0aW1ldXBkYXRlJywgKCkgPT4ge1xuXHRcdGNvbnN0IHBlcmNlbnQgPSBwbGF5ZXIudmlkZW8ucGxheWVkUGVyY2VudGFnZTtcblx0XHRjb25zdCBkZWx0YSA9IG9wdGlvbnMudmlkZW9QbGF5ZWREZWx0YTtcblx0XHRvcHRpb25zLnZpZGVvUGxheWVkLmZvckVhY2goaXRlbSA9PiB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdCFwbGF5ZWRFdmVudHNTZW50W2l0ZW1dICYmXG5cdFx0XHRcdE1hdGguYWJzKHBlcmNlbnQgLSBpdGVtKSA8IGRlbHRhXG5cdFx0XHQpIHtcblx0XHRcdFx0d2luZG93LmdhKFxuXHRcdFx0XHRcdCdzZW5kJyxcblx0XHRcdFx0XHQnZXZlbnQnLFxuXHRcdFx0XHRcdCdQbGF5ZXIgVmlkZW8gUGxheWVkJyxcblx0XHRcdFx0XHRgJHtpdGVtIC0gZGVsdGF9LSR7aXRlbX0lYFxuXHRcdFx0XHQpO1xuXHRcdFx0XHRwbGF5ZWRFdmVudHNTZW50W2l0ZW1dID0gdHJ1ZTtcblxuXHRcdFx0fVxuXHRcdH0pXG5cdH0pO1xuXG5cblx0Ly8gRmlyc3QgcXVhbGl0eWNoYW5nZSBmaXJlZCBvbiBwbGF5ZXIgaW5pdCwgYW5kIHdlIGRvbid0IG5lZWQgdHJhY2sgdGhpcyB0byBHQVxuXHRsZXQgbG9hZFF1YWxpdHkgPSBmYWxzZTtcblx0cGxheWVyLm9uKCdxdWFsaXR5Y2hhbmdlJywgZnVuY3Rpb24oZSkge1xuXHRcdGlmKCFsb2FkUXVhbGl0eSkge1xuXHRcdFx0bG9hZFF1YWxpdHkgPSB0cnVlO1xuXHRcdFx0cmV0dXJuXG5cdFx0fVxuXG5cdFx0aWYocGxheWVyLnZpZGVvLnBsYXliYWNrUXVhbGl0eSAhPSBudWxsKSB7XG5cdFx0XHR3aW5kb3cuZ2EoXG5cdFx0XHRcdCdzZW5kJyxcblx0XHRcdFx0J2V2ZW50Jyxcblx0XHRcdFx0J1BsYXllciBDaGFuZ2UgUXVhbGl0eScsXG5cdFx0XHRcdHBsYXllci52aWRlby5wbGF5YmFja1F1YWxpdHkudGl0bGVcblx0XHRcdClcblx0XHR9XG5cdH0pXG5cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvcGx1Z2lucy9sZS1wbGF5ZXItZ2EuanMiLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbmNvbnN0IFBsYXllciA9IHdpbmRvdy5sZVBsYXllciB8fCB3aW5kb3cuJC5sZVBsYXllcjtcbmNvbnN0IEVudGl0eSA9IFBsYXllci5nZXRDb21wb25lbnQoJ0VudGl0eScpO1xuXG5jb25zdCB0cmFja1Byb3ZpZGUgPSB0cmFjayA9PiB7XG5cdGlmKHRyYWNrID09IG51bGwgfHwgdHJhY2subGFuZ3VhZ2VDb2RlID09IG51bGwpIHtcblx0XHRyZXR1cm4gdHJhY2tcblx0fVxuXHRyZXR1cm4ge1xuXHRcdGxhbmd1YWdlIDogdHJhY2subGFuZ3VhZ2VDb2RlLFxuXHRcdHRpdGxlIDogdHJhY2subGFuZ3VhZ2VDb2RlLFxuXHRcdHRvb2x0aXAgOiB0cmFjay5sYW5ndWFnZU5hbWUsXG5cdFx0bmFtZSA6IHRyYWNrLmxhbmd1YWdlQ29kZSxcblx0fVxufVxuXG5cbmNsYXNzIFlvdXR1YmUgZXh0ZW5kcyBFbnRpdHkge1xuXHRjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXHRcdHRoaXMuX3BhdXNlZCA9IHRydWU7XG5cblx0XHR0aGlzLnNyYyA9IHRoaXMucGxheWVyLm9wdGlvbnMuc3JjO1xuXG5cdFx0dGhpcy5wbGF5ZXIuYWRkQ2xhc3MoJ2xlcGxheWVyLS15b3V0dWJlJyk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdjbGljaycsIHRoaXMub25DbGljay5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ2RibGNsaWNrJywgdGhpcy5vbkRibGNsaWNrLmJpbmQodGhpcykpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0c2V0IHNyYyhzcmMpIHtcblx0XHRpZihzcmMgPT0gbnVsbCkgcmV0dXJuO1xuXHRcdGlmKHRoaXMuc3JjICYmIHRoaXMuc3JjLnVybCA9PT0gc3JjLnVybCkgcmV0dXJuO1xuXG5cdFx0Y29uc3QgdXJsID0gc3JjLnVybCB8fCBzcmMuaWQ7XG5cblx0XHR0aGlzLnZpZGVvSWQgPSBZb3V0dWJlLnBhcnNlVXJsKHVybCk7XG5cblx0XHRpZih0aGlzLnBsYXllci5vcHRpb25zLnBvc3Rlcikge1xuXHRcdFx0dGhpcy5wb3N0ZXIgPSB0aGlzLnBsYXllci5vcHRpb25zLnBvc3RlclxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnBvc3RlciA9ICdodHRwczovL2ltZy55b3V0dWJlLmNvbS92aS8nICsgdGhpcy52aWRlb0lkICsgJy8wLmpwZyc7XG5cdFx0fVxuXHR9XG5cblx0b25DbGljayhldmVudCkge1xuXHRcdHRoaXMudHJpZ2dlcignY2xpY2snKTtcblx0fVxuXG5cdG9uRGJsY2xpY2soKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCdkYmxjbGljaycpO1xuXHR9XG5cblx0Z2V0IGN1cnJlbnRUaW1lKCkge1xuXHRcdHJldHVybiB0aGlzLnl0UGxheWVyPyB0aGlzLnl0UGxheWVyLmdldEN1cnJlbnRUaW1lKCkgOiAwO1xuXHR9XG5cblx0c2V0IGN1cnJlbnRUaW1lKHZhbHVlKSB7XG5cdFx0aWYodGhpcy5sYXN0U3RhdGUgPT09IFlULlBsYXllclN0YXRlLlBBVVNFRCkge1xuXHRcdFx0dGhpcy50aW1lQmVmb3JlU2VlayA9IHRoaXMuY3VycmVudFRpbWU7XG5cdFx0fVxuXG5cdFx0aWYgKCF0aGlzLmlzU2Vla2luZykge1xuXHRcdFx0dGhpcy53YXNQYXVzZWRCZWZvcmVTZWVrID0gdGhpcy5wYXVzZWQ7XG5cdFx0fVxuXG5cdFx0bGV0IHRpbWU7XG5cdFx0aWYgKHZhbHVlID49IHRoaXMuZHVyYXRpb24pIHtcblx0XHRcdHRpbWUgPSB0aGlzLmR1cmF0aW9uXG5cdFx0fSBlbHNlIGlmICh2YWx1ZSA8IDApIHtcblx0XHRcdHRpbWUgPSAwXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRpbWUgPSB2YWx1ZTtcblx0XHR9XG5cblx0XHR0aGlzLmlzU2Vla2luZyA9IHRydWU7XG5cdFx0dGhpcy55dFBsYXllci5zZWVrVG8odGltZSwgdHJ1ZSk7XG5cdFx0dGhpcy5wbGF5ZXIudHJpZ2dlcigndGltZXVwZGF0ZWxvYWQnLCB7IGN1cnJlbnRUaW1lIDogdGltZSB9KTtcblxuXHRcdHRoaXMudHJpZ2dlcignc2Vla2luZycpO1xuXG5cdFx0dGhpcy5lbWl0VGltZXVwZGF0ZSgpO1xuXHR9XG5cblx0Z2V0IGR1cmF0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLnl0UGxheWVyICYmIHRoaXMueXRQbGF5ZXIuZ2V0RHVyYXRpb24gPyB0aGlzLnl0UGxheWVyLmdldER1cmF0aW9uKCkgOiBOYU47XG5cdH1cblxuXHRnZXQgcGF1c2VkKCkge1xuXHRcdHJldHVybiAodGhpcy55dFBsYXllcikgP1xuXHRcdFx0KHRoaXMubGFzdFN0YXRlICE9PSBZVC5QbGF5ZXJTdGF0ZS5QTEFZSU5HICYmIHRoaXMubGFzdFN0YXRlICE9PSBZVC5QbGF5ZXJTdGF0ZS5CVUZGRVJJTkcpXG5cdFx0XHQ6IHRydWU7XG5cblx0fVxuXG5cblx0Z2V0IHJhdGUoKSB7XG5cdFx0cmV0dXJuIHRoaXMueXRQbGF5ZXIuZ2V0UGxheWJhY2tSYXRlKCk7XG5cdH1cblxuXHRzZXQgcmF0ZSh2YWx1ZSkge1xuXHRcdHN1cGVyLnJhdGUgPSB2YWx1ZTtcblx0XHR0aGlzLnl0UGxheWVyLnNldFBsYXliYWNrUmF0ZSh2YWx1ZSk7XG5cdFx0dGhpcy50cmlnZ2VyKCdyYXRlY2hhbmdlJyk7XG5cdH1cblxuXHRzZXQgbXV0ZWQodmFsdWUpIHtcblx0XHRpZih2YWx1ZSkge1xuXHRcdFx0dGhpcy55dFBsYXllci5tdXRlKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMueXRQbGF5ZXIudW5NdXRlKCk7XG5cdFx0fVxuXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHR0aGlzLnRyaWdnZXIoJ3ZvbHVtZWNoYW5nZScpO1xuXHRcdH0sIDUwKTtcblx0fVxuXG5cdGdldCBtdXRlZCgpIHtcblx0XHRyZXR1cm4gdGhpcy55dFBsYXllci5pc011dGVkKCk7XG5cdH1cblxuXHRnZXQgc3VidGl0bGVzKCkge1xuXHRcdHJldHVybiB0aGlzLmNoZWNrQ2FwdGlvbnNFeGlzdCgpXG5cdFx0XHQ/ICh0aGlzLnl0UGxheWVyLmdldE9wdGlvbignY2FwdGlvbnMnLCAndHJhY2tsaXN0JykgfHwgW10pLm1hcCh0cmFja1Byb3ZpZGUpXG5cdFx0XHQ6IFtdXG5cdH1cblxuXHRnZXQgdHJhY2soKSB7XG5cdFx0aWYodGhpcy5fdHJhY2sgPT09IHVuZGVmaW5lZCAmJiB0aGlzLmNoZWNrQ2FwdGlvbnNFeGlzdCgpKSB7XG5cdFx0XHRyZXR1cm4gdHJhY2tQcm92aWRlKHRoaXMueXRQbGF5ZXIuZ2V0T3B0aW9uKCdjYXB0aW9ucycsICd0cmFjaycpKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5fdHJhY2s7XG5cdFx0fVxuXHR9XG5cblx0c2V0IHRyYWNrKHZhbHVlKSB7XG5cdFx0dGhpcy5fdHJhY2sgPSB2YWx1ZTtcblx0XHRpZih2YWx1ZSA9PT0gbnVsbCkge1xuXHRcdFx0dGhpcy5fdHJhY2tzRGlzYWJsZSA9IHRydWU7XG5cdFx0XHQvKiBEaXNhYmxlIGNhcHRpb25zICovXG5cdFx0XHR0aGlzLnl0UGxheWVyLnVubG9hZE1vZHVsZSgnY2FwdGlvbnMnKTtcblxuXHRcdFx0dGhpcy50cmlnZ2VyKCd0cmFja3NjaGFuZ2UnKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy55dFBsYXllclxuXHRcdFx0LnNldE9wdGlvbignY2FwdGlvbnMnLCAndHJhY2snLCB7IGxhbmd1YWdlQ29kZSA6IHZhbHVlLm5hbWUgfSlcblx0XHRcdC5zZXRPcHRpb24oJ2NhcHRpb25zJywgJ3JlbG9hZCcsIHRydWUpO1xuXG5cdFx0aWYodGhpcy5fdHJhY2tzRGlzYWJsZSkge1xuXHRcdFx0LyogRW5hYmxlIGNhcHRpb25zICovXG5cdFx0XHR0aGlzLnl0UGxheWVyLmxvYWRNb2R1bGUoJ2NhcHRpb25zJyk7XG5cdFx0fVxuXHRcdHRoaXMudHJpZ2dlcigndHJhY2tzY2hhbmdlJyk7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRpbmNyZWFzZVJhdGUoKSB7XG5cdFx0Y29uc3QgaW5kZXggPSB0aGlzLmF2YWlsYWJsZVJhdGVzLmluZGV4T2YodGhpcy5yYXRlKTtcblx0XHRpZihpbmRleCArIDEgPj0gdGhpcy5hdmFpbGFibGVSYXRlcy5sZW5ndGgpIHJldHVybjtcblx0XHRyZXR1cm4gdGhpcy5yYXRlID0gdGhpcy5hdmFpbGFibGVSYXRlc1tpbmRleCArIDFdO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0ZGVjcmVhc2VSYXRlKCkge1xuXHRcdGNvbnN0IGluZGV4ID0gdGhpcy5hdmFpbGFibGVSYXRlcy5pbmRleE9mKHRoaXMucmF0ZSk7XG5cdFx0aWYoaW5kZXggLSAxIDwgMCkgcmV0dXJuO1xuXHRcdHJldHVybiB0aGlzLnJhdGUgPSB0aGlzLmF2YWlsYWJsZVJhdGVzW2luZGV4IC0gMV07XG5cdH1cblxuXHRnZXRBdmFpbGFibGVRdWFsaXR5TGV2ZWxzKCkge1xuXHRcdGNvbnN0IGFyciA9IHRoaXMueXRQbGF5ZXIuZ2V0QXZhaWxhYmxlUXVhbGl0eUxldmVscygpO1xuXHRcdGNvbnN0IGluZGV4ID0gYXJyLmluZGV4T2YoJ2F1dG8nKTtcblxuXHRcdGlmKGluZGV4ID4gLTEpIHtcblx0XHRcdGFyci5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdH1cblxuXHRcdHJldHVybiBhcnIubWFwKGl0ZW0gPT4gKHtcblx0XHRcdHRpdGxlIDogWW91dHViZS5RVUFMSVRZX05BTUVTW2l0ZW1dIHx8IGl0ZW0sXG5cdFx0XHRuYW1lIDogaXRlbVxuXHRcdH0pKTtcblx0fVxuXG5cblx0c2V0IHBsYXliYWNrUXVhbGl0eShuYW1lKSB7XG5cdFx0c3VwZXIucGxheWJhY2tRdWFsaXR5ID0gbmFtZTtcblx0XHRjb25zdCB0aW1lID0gdGhpcy5jdXJyZW50VGltZTtcblx0XHRjb25zdCBzdGF0dXMgPSB0aGlzLnl0UGxheWVyLmdldFBsYXllclN0YXRlKCk7XG5cblx0XHRpZihzdGF0dXMgIT09IFlULlBsYXllclN0YXRlLlVOU1RBUlRFRCAmJiBzdGF0dXMgIT09IFlULlBsYXllclN0YXRlLkNVRUQpIHtcblx0XHRcdHRoaXMueXRQbGF5ZXIucGF1c2VWaWRlbygpO1xuXHRcdH1cblxuXHRcdHRoaXMuX25leHRQbGF5YmFja1F1YWxpdHkgPSBuYW1lO1xuXHRcdHRoaXMueXRQbGF5ZXIuc2V0UGxheWJhY2tRdWFsaXR5KG5hbWUpO1xuXHRcdHRoaXMueXRQbGF5ZXIuc2Vla1RvKHRpbWUpO1xuXG5cdFx0aWYoc3RhdHVzICE9PSBZVC5QbGF5ZXJTdGF0ZS5QQVVTRUQpIHtcblx0XHRcdHRoaXMueXRQbGF5ZXIucGxheVZpZGVvKCk7XG5cdFx0fVxuXG5cdH1cblxuXHRnZXQgcGxheWJhY2tRdWFsaXR5KCkge1xuXHRcdGlmICh0aGlzLl9wbGF5YmFja1F1YWxpdHkgPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5fcGxheWJhY2tRdWFsaXR5ID0gdGhpcy5nZXRBdmFpbGFibGVRdWFsaXR5TGV2ZWxzKClcblx0XHRcdFx0LmZpbmQoaXRlbSA9PiBpdGVtLm5hbWUgPT09IHRoaXMueXRQbGF5ZXIuZ2V0UGxheWJhY2tRdWFsaXR5KCkpXG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLl9wbGF5YmFja1F1YWxpdHk7XG5cdH1cblxuXHRnZXQgdm9sdW1lKCkge1xuXHRcdHJldHVybiB0aGlzLnl0UGxheWVyID8gdGhpcy55dFBsYXllci5nZXRWb2x1bWUoKSAvIDEwMC4wIDogMTtcblx0fVxuXG5cdHNldCB2b2x1bWUodmFsdWUpIHtcblx0XHRzdXBlci52b2x1bWUgPSB2YWx1ZTtcblx0XHR0aGlzLnl0UGxheWVyLnNldFZvbHVtZSh2YWx1ZSAqIDEwMCk7XG5cblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdHRoaXMudHJpZ2dlcigndm9sdW1lY2hhbmdlJyk7XG5cdFx0fSwgNTApXG5cblx0fVxuXG5cdHN1cHBvcnRzRnVsbFNjcmVlbigpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdHBsYXkoKSB7XG5cdFx0dGhpcy55dFBsYXllci5wbGF5VmlkZW8oKTtcblx0XHR0aGlzLnRyaWdnZXIoJ3BsYXknKTtcblx0fVxuXG5cdHBhdXNlKCkge1xuXHRcdHRoaXMueXRQbGF5ZXIucGF1c2VWaWRlbygpO1xuXHRcdHRoaXMudHJpZ2dlcigncGF1c2UnKTtcblx0fVxuXG5cblx0aW5pdCgpIHtcblx0XHRzdXBlci5pbml0KCk7XG5cdFx0cmV0dXJuIFlvdXR1YmUuYXBpTG9hZGVkKClcblx0XHRcdC50aGVuKCgpID0+IHRoaXMuaW5pdFlUUGxheWVyKCkpXG5cdH1cblxuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdHRoaXMuZWxlbWVudCA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0LmFkZENsYXNzKCdsZXBsYXllcl9feW91dHViZS13cmFwcGVyJylcblx0XHRcdC5hdHRyKCd0YWJpbmRleCcsICcwJyk7XG5cdFx0dGhpcy55b3V0dWJlRWxlbWVudCA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0LmFkZENsYXNzKCdsZXBsYXllcl9feW91dHViZScpO1xuXHRcdHRoaXMuYmxvY2tlciA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0LmFkZENsYXNzKCdsZXBsYXllcl9feW91dHViZS1ibG9ja2VyJyk7XG5cblxuXHRcdHJldHVybiB0aGlzLmVsZW1lbnRcblx0XHRcdC5hcHBlbmQodGhpcy5ibG9ja2VyKVxuXHRcdFx0LmFwcGVuZCh0aGlzLnlvdXR1YmVFbGVtZW50KTtcblx0fVxuXG5cdGluaXRZVFBsYXllcigpIHtcblx0XHR0aGlzLl9pbml0UHJvbWlzZSA9ICQuRGVmZXJyZWQoKTtcblx0XHRjb25zdCBnbG9iYWxPcHRpb25zID0gdGhpcy5wbGF5ZXIub3B0aW9ucztcblx0XHRsZXQgeXRPcHRpb25zID0ge1xuXHRcdFx0YXV0b3BsYXkgOiBnbG9iYWxPcHRpb25zLmF1dG9wbGF5ID8gMSA6IDAsXG5cdFx0XHRsb29wIDogZ2xvYmFsT3B0aW9ucy5sb29wID8gMSA6IDAsXG5cdFx0XHRpdl9sb2FkX3BvbGljeSA6IDMsXG5cdFx0XHRjb250cm9scyA6IDAsXG5cdFx0XHRtb2Rlc3RicmFuZGluZyA6IDEsXG5cdFx0XHRyZWwgOiAwLFxuXHRcdFx0c2hvd2luZm8gOiAwLFxuXHRcdFx0Y2NfbG9hZF9wb2xpY3kgOiAwLFxuXHRcdFx0ZGlzYWJsZWtiIDogMCxcblx0XHRcdGZzIDogMCxcblx0XHRcdHN0YXJ0IDogZ2xvYmFsT3B0aW9ucy50aW1lXG5cdFx0fTtcblxuXHRcdFlULnJlYWR5KCgpID0+IHtcblx0XHRcdHRoaXMub3B0aW9ucy5jdHgucmVwbGFjZVdpdGgodGhpcy5lbGVtZW50KTtcblxuXHRcdFx0dGhpcy55dFBsYXllciA9IG5ldyBZVC5QbGF5ZXIodGhpcy55b3V0dWJlRWxlbWVudFswXSwge1xuXHRcdFx0XHR2aWRlb0lkIDogdGhpcy52aWRlb0lkLFxuXHRcdFx0XHR3aWR0aCA6IGdsb2JhbE9wdGlvbnMud2lkdGggfHwgJzEwMCUnLFxuXHRcdFx0XHRwbGF5ZXJWYXJzIDogeXRPcHRpb25zLFxuXHRcdFx0XHRldmVudHMgOiB7XG5cdFx0XHRcdFx0b25SZWFkeSA6IHRoaXMub25ZVFBSZWFkeS5iaW5kKHRoaXMpLFxuXHRcdFx0XHRcdG9uU3RhdGVDaGFuZ2UgOiB0aGlzLm9uWVRQU3RhdGVDaGFuZ2UuYmluZCh0aGlzKSxcblx0XHRcdFx0XHRvblBsYXliYWNrUmF0ZUNoYW5nZSA6IHRoaXMub25ZVFBSYXRlQ2hhbmdlLmJpbmQodGhpcyksXG5cdFx0XHRcdFx0b25QbGF5YmFja1F1YWxpdHlDaGFuZ2UgOiB0aGlzLm9uWVRQUGxheWJhY2tRdWFsaXR5Q2hhbmdlLmJpbmQodGhpcylcblx0XHRcdFx0fVxuXHRcdFx0fSlcblxuXHRcdH0pXG5cdFx0cmV0dXJuIHRoaXMuX2luaXRQcm9taXNlLnByb21pc2UoKTtcblx0fVxuXG5cblx0c2V0QXZhaWxhYmxlUGxheWJhY2tSYXRlcygpIHtcblx0XHR0aGlzLmF2YWlsYWJsZVJhdGVzID0gdGhpcy55dFBsYXllci5nZXRBdmFpbGFibGVQbGF5YmFja1JhdGVzKCk7XG5cdFx0dGhpcy5yYXRlTWluID0gdGhpcy5hdmFpbGFibGVSYXRlc1swXTtcblx0XHR0aGlzLnJhdGVNYXggPSB0aGlzLmF2YWlsYWJsZVJhdGVzW3RoaXMuYXZhaWxhYmxlUmF0ZXMubGVuZ3RoIC0gMV07XG5cdH1cblxuXHRvbllUUFJlYWR5KGUpIHtcblx0XHR0aGlzLl9pbml0UHJvbWlzZS5yZXNvbHZlKCk7XG5cdFx0dGhpcy5faW5pdFJhdGUoKTtcblx0XHR0aGlzLl9pbml0Vm9sdW1lKCk7XG5cdFx0dGhpcy5zZXRBdmFpbGFibGVQbGF5YmFja1JhdGVzKCk7XG5cdH1cblxuXHRvbllUUFJhdGVDaGFuZ2UoZSkge1xuXHRcdHRoaXMudHJpZ2dlcigncmF0ZWNoYW5nZScpO1xuXHR9XG5cblx0b25ZVFBQbGF5YmFja1F1YWxpdHlDaGFuZ2UoZSkge1xuXHRcdGNvbnN0IGRhdGEgPSBlLmRhdGE7XG5cdFx0dGhpcy5fcGxheWJhY2tRdWFsaXR5ID0gdGhpcy5nZXRBdmFpbGFibGVRdWFsaXR5TGV2ZWxzKCkuZmluZChpdGVtID0+IGl0ZW0ubmFtZSA9PT0gZGF0YSk7XG5cdFx0dGhpcy50cmlnZ2VyKCdxdWFsaXR5Y2hhbmdlJywgdGhpcy5fcGxheWJhY2tRdWFsaXR5KTtcblx0fVxuXG5cdG9uWVRQU3RhdGVDaGFuZ2UoZSkge1xuXHRcdGNvbnN0IHN0YXRlID0gZS5kYXRhO1xuXHRcdGlmKHN0YXRlID09PSB0aGlzLmxhc3RTdGF0ZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMubGFzdFN0YXRlID0gc3RhdGU7XG5cdFx0c3dpdGNoKHN0YXRlKSB7XG5cdFx0Y2FzZSBZVC5QbGF5ZXJTdGF0ZS5VTlNUQVJURUQ6XG5cdFx0XHR0aGlzLnRyaWdnZXIoJ2xvYWRzdGFydCcpO1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdsb2FkZWRtZXRhZGF0YScpO1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdkdXJhdGlvbmNoYW5nZScpO1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdyYXRlY2hhbmdlJyk7XG5cdFx0XHR0aGlzLnRyaWdnZXIoJ3ZvbHVtZWNoYW5nZScpO1xuXHRcdFx0dGhpcy50cmlnZ2VyKCd0cmFja3NjaGFuZ2UnKTtcblx0XHRcdGlmKHRoaXMucGxheWVyLm9wdGlvbnMuYXV0b3BsYXkpIHtcblx0XHRcdFx0dGhpcy50cmlnZ2VyKCdwbGF5Jyk7XG5cdFx0XHR9XG5cdFx0XHRicmVhaztcblxuXHRcdGNhc2UgWVQuUGxheWVyU3RhdGUuRU5ERUQ6XG5cdFx0XHR0aGlzLnRyaWdnZXIoJ3BhdXNlJyk7XG5cdFx0XHR0aGlzLnRyaWdnZXIoJ2VuZGVkJyk7XG5cdFx0XHRicmVhaztcblxuXHRcdGNhc2UgWVQuUGxheWVyU3RhdGUuUExBWUlORzpcblx0XHRcdHRoaXMudHJpZ2dlcigndGltZXVwZGF0ZScpO1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdkdXJhdGlvbmNoYW5nZScpO1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdwbGF5aW5nJyk7XG5cblx0XHRcdHRoaXMueXRQbGF5ZXIuc2V0UGxheWJhY2tRdWFsaXR5KHRoaXMuX25leHRQbGF5YmFja1F1YWxpdHkpO1xuXG5cdFx0XHRpZih0aGlzLmlzU2Vla2luZykge1xuXHRcdFx0XHR0aGlzLm9uU2Vla2VkKCk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMubG9hZENhcHRpb25zKClcblx0XHRcdHRoaXMuZW1pdFRpbWV1cGRhdGUoKTtcblx0XHRcdGJyZWFrO1xuXG5cdFx0Y2FzZSBZVC5QbGF5ZXJTdGF0ZS5QQVVTRUQ6XG5cdFx0XHR0aGlzLnRyaWdnZXIoJ2NhbnBsYXknKTtcblxuXHRcdFx0aWYodGhpcy5pc1NlZWtpbmcpIHtcblx0XHRcdFx0dGhpcy5vblNlZWtlZCgpO1xuXHRcdFx0fVxuXHRcdFx0YnJlYWs7XG5cblx0XHRjYXNlIFlULlBsYXllclN0YXRlLkJVRkZFUklORzpcblx0XHRcdHRoaXMucGxheWVyLnRyaWdnZXIoJ3RpbWV1cGRhdGUnKTtcblx0XHRcdHRoaXMucGxheWVyLnRyaWdnZXIoJ3dhaXRpbmcnKTtcblxuXHRcdFx0dGhpcy55dFBsYXllci5zZXRQbGF5YmFja1F1YWxpdHkodGhpcy5fbmV4dFBsYXliYWNrUXVhbGl0eSk7XG5cblx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHR9XG5cblx0b25TZWVrZWQoKSB7XG5cdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLnNlZWtpbmdJbnRlcnZhbCk7XG5cdFx0dGhpcy5pc1NlZWtpbmcgPSBmYWxzZTtcblxuXHRcdGlmICh0aGlzLndhc1BhdXNlZEJlZm9yZVNlZWspIHtcblx0XHRcdHRoaXMucGF1c2UoKTtcblx0XHR9XG5cblx0XHR0aGlzLnRyaWdnZXIoJ3NlZWtlZCcpO1xuXHR9XG5cblx0ZW1pdFRpbWV1cGRhdGUoKSB7XG5cdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLnNlZWtpbmdJbnRlcnZhbCk7XG5cblx0XHR0aGlzLnNlZWtpbmdJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcblx0XHRcdGlmKHRoaXMubGFzdFN0YXRlID09PSBZVC5QbGF5ZXJTdGF0ZS5QQVVTRUQpIHtcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLnNlZWtpbmdJbnRlcnZhbCk7XG5cdFx0XHR9IGVsc2UgaWYodGhpcy5jdXJyZW50VGltZSAhPT0gdGhpcy50aW1lQmVmb3JlU2Vlaykge1xuXHRcdFx0XHR0aGlzLnRyaWdnZXIoJ3RpbWV1cGRhdGUnKTtcblx0XHRcdH1cblx0XHR9LCAyNTApXG5cdH1cblxuXHRsb2FkQ2FwdGlvbnMoKSB7XG5cdFx0Y29uc3QgZW1wdHlUcmFja2xpc3QgPSAoKSA9PiAodGhpcy5zdWJ0aXRsZXMgPT0gbnVsbCB8fCB0aGlzLnN1YnRpdGxlcy5sZW5ndGggPT09IDApO1xuXG5cdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLl9sb2FkQ2FwdGlvbnNXYXRjaGVyKTtcblx0XHRpZihcblx0XHRcdCF0aGlzLl90cmFja3NEaXNhYmxlICYmXG5cdFx0XHR0aGlzLmNoZWNrQ2FwdGlvbnNFeGlzdCgpICYmXG5cdFx0XHRlbXB0eVRyYWNrbGlzdCgpXG5cdFx0KSB7XG5cdFx0XHR0aGlzLnl0UGxheWVyLmxvYWRNb2R1bGUoJ2NhcHRpb25zJyk7XG5cblx0XHRcdHRoaXMuX2xvYWRDYXB0aW9uc1dhdGNoZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG5cdFx0XHRcdGlmKCFlbXB0eVRyYWNrbGlzdCgpICYmIHRoaXMuY2hlY2tDYXB0aW9uc0V4aXN0KCkpIHtcblx0XHRcdFx0XHR0aGlzLnRyaWdnZXIoJ3RyYWNrc2NoYW5nZScpO1xuXHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwodGhpcy5fbG9hZENhcHRpb25zV2F0Y2hlcik7XG5cdFx0XHRcdH1cblx0XHRcdH0sIDI1MClcblx0XHR9XG5cdH1cblxuXHRjaGVja0NhcHRpb25zRXhpc3QoKSB7XG5cdFx0dHJ5IHtcblx0XHRcdHJldHVybiB0aGlzLnl0UGxheWVyLmdldE9wdGlvbnMoJ2NhcHRpb25zJykgIT0gbnVsbDtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fVxuXG5cdHN0YXRpYyBwYXJzZVVybCh1cmwpIHtcblx0XHRsZXQgcmVzdWx0ID0gbnVsbDtcblx0XHRjb25zdCByZWdleCA9IFlvdXR1YmUuVVJMX1JFR0VYO1xuXHRcdGNvbnN0IG1hdGNoID0gdXJsLm1hdGNoKHJlZ2V4KTtcblx0XHRpZih1cmwubGVuZ3RoID09PSAxMSkge1xuXHRcdFx0cmVzdWx0ID0gdXJsO1xuXHRcdH0gZWxzZSBpZihtYXRjaCAmJiBtYXRjaFsyXS5sZW5ndGggPT09IDExKSB7XG5cdFx0XHRyZXN1bHQgPSBtYXRjaFsyXTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxufVxuXG5Zb3V0dWJlLlRFU1RfVklERU8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpO1xuLyoqXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICogICAgICAgICAtIFRydWUgaWYgdm9sdW1lIGNhbiBiZSBjb250cm9sbGVkXG4gKiAgICAgICAgIC0gRmFsc2Ugb3RoZXJ3aXNlXG4gKi9cbllvdXR1YmUuY2FuQ29udHJvbFZvbHVtZSA9IGZ1bmN0aW9uKCkge1xuXHQvLyBJRSB3aWxsIGVycm9yIGlmIFdpbmRvd3MgTWVkaWEgUGxheWVyIG5vdCBpbnN0YWxsZWQgIzMzMTVcblx0dHJ5IHtcblx0XHRjb25zdCB2b2x1bWUgPSBZb3V0dWJlLlRFU1RfVklERU8udm9sdW1lO1xuXG5cdFx0WW91dHViZS5URVNUX1ZJREVPLnZvbHVtZSA9ICh2b2x1bWUgLyAyKSArIDAuMTtcblx0XHRyZXR1cm4gdm9sdW1lICE9PSBZb3V0dWJlLlRFU1RfVklERU8udm9sdW1lO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xuXG5Zb3V0dWJlLnByb3RvdHlwZS5mZWF0dXJlQ29udHJvbFZvbHVtZSA9IFlvdXR1YmUuY2FuQ29udHJvbFZvbHVtZSgpO1xuXG5Zb3V0dWJlLlVSTF9SRUdFWCA9IC9eLiooeW91dHUuYmVcXC98dlxcL3x1XFwvXFx3XFwvfGVtYmVkXFwvfHdhdGNoXFw/dj18XFwmdj0pKFteI1xcJlxcP10qKS4qLztcblxuWW91dHViZS5RVUFMSVRZX05BTUVTID0ge1xuXHR0aW55IDogJzE0MHAnLFxuXHRzbWFsbCA6ICcyNDBwJyxcblx0bWVkaXVtIDogJzM2MHAnLFxuXHRsYXJnZSA6ICc0ODBwJyxcblx0aGQ3MjAgOiAnNzIwcCcsXG5cdGhkMTA4MCA6ICcxMDgwcCcsXG5cdGhpZ2hyZXMgOiAnSEQnLFxuXHRhdXRvIDogJ9CQ0LLRgtC+J1xufVxuXG5Zb3V0dWJlLmFwaUxvYWRlZCA9IGZ1bmN0aW9uKCkge1xuXHRpZih0aGlzLl9sb2FkZWQpIHJldHVybiAkLkRlZmVycmVkKCkucmVzb2x2ZSgpO1xuXG5cdHJldHVybiAkLmdldFNjcmlwdCgnaHR0cHM6Ly93d3cueW91dHViZS5jb20vaWZyYW1lX2FwaScpXG5cdFx0LnRoZW4oKCkgPT4gdGhpcy5fbG9hZGVkID0gdHJ1ZSlcbn1cblxuUGxheWVyLnJlZ2lzdGVyQ29tcG9uZW50KCdZb3V0dWJlJywgWW91dHViZSk7XG5cblBsYXllci5wcmVzZXQoJ3lvdXR1YmUnLCB7XG5cdG9wdGlvbnMgOiB7XG5cdFx0ZW50aXR5IDogJ1lvdXR1YmUnLFxuXHRcdGNvbnRyb2xzIDoge1xuXHRcdFx0Y29tbW9uIDogW1xuXHRcdFx0XHRbJ3BsYXknLCAndm9sdW1lJywgJ3RpbWVsaW5lJywgJ3JhdGUnLCAnYmFja3dhcmQnLCAnc291cmNlJywgJ3N1YnRpdGxlJywgJ2RpdmlkZXInLCAnc2VjdGlvbicsICdmdWxsc2NyZWVuJ10sXG5cdFx0XHRcdFtdXG5cdFx0XHRdLFxuXHRcdFx0ZnVsbHNjcmVlbiA6IFtcblx0XHRcdFx0WydwbGF5JywgJ3ZvbHVtZScsICd0aW1lbGluZScsICdyYXRlJywgJ2JhY2t3YXJkJywgJ3NvdXJjZScsICdzdWJ0aXRsZScsICdkaXZpZGVyJywgJ3NlY3Rpb24nLCAnZnVsbHNjcmVlbiddLFxuXHRcdFx0XVxuXHRcdH1cblx0fSxcbn0pO1xuXG5QbGF5ZXIucGx1Z2luKCd5b3V0dWJlJywgZnVuY3Rpb24ocGx1Z2luT3B0aW9ucykge1xuXG5cdC8qIGdsb2JhbCBZVCAqL1xuXHRZb3V0dWJlLmFwaUxvYWRlZCgpXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL3BsdWdpbnMvbGUtcGxheWVyLXlvdXR1YmUuanMiLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5jb25zdCBQbGF5ZXIgPSB3aW5kb3cubGVQbGF5ZXI7XG5jb25zdCBDb21wb25lbnQgPSBQbGF5ZXIuZ2V0Q29tcG9uZW50KCdDb21wb25lbnQnKTtcbmNvbnN0IEljb24gPSBQbGF5ZXIuZ2V0Q29tcG9uZW50KCdJY29uJyk7XG5jb25zdCBzZWNvbmRzVG9UaW1lID0gUGxheWVyLnNlY29uZHNUb1RpbWU7XG5cbmNsYXNzIFJhZGlhbEJhciBleHRlbmRzIENvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRzdHJva2VEYXNoYXJyYXkgOiAyOTMsXG5cdFx0XHRzaXplIDogOThcblx0XHR9LCBvcHRpb25zKTtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXHRcdHRoaXMuX2NpcmNsZUVsZW1lbnQgPSB0aGlzLmVsZW1lbnQuZmluZCgnc3ZnIGNpcmNsZScpO1xuXHR9XG5cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHRjb25zdCB7IHN0cm9rZURhc2hhcnJheSwgc2l6ZSB9ID0gdGhpcy5vcHRpb25zO1xuXHRcdGNvbnN0IHRlbXBsYXRlID0gYFxuXHRcdFx0PGRpdiBjbGFzcz1cImxlcGxheWVyLW5leHRfX3BsYXkgbGVwbGF5ZXItcGxheS1idXR0b25cIj5cbiAgICAgICAgICAgICAgICA8c3ZnIGhlaWdodD1cIjEwMCVcIiB2ZXJzaW9uPVwiMS4xXCIgdmlld0JveD1cIjAgMCAke3NpemV9ICR7c2l6ZX1cIiBjbGFzcz1cImxlcGxheWVyLW5leHRfX3N2Zy1zcGlubmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9XCIkey1zaXplIC8gMn1cIiBjeT1cIiR7c2l6ZSAvIDJ9XCIgZmlsbC1vcGFjaXR5PVwiMFwiIHI9XCI0Ni41XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLWRhc2hhcnJheT1cIiR7c3Ryb2tlRGFzaGFycmF5fVwiIHN0cm9rZS1kYXNob2Zmc2V0PVwiJHstMSAqIHN0cm9rZURhc2hhcnJheX1cIiBzdHJva2Utd2lkdGg9XCI2XCIgdHJhbnNmb3JtPVwicm90YXRlKC05MClcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9jaXJjbGU+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJsZXBsYXllci1uZXh0X19idXR0b24gbGVwbGF5ZXItcGxheS1idXR0b25fX2J1dHRvblwiPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdGAudHJpbSgpXG5cdFx0dGhpcy5lbGVtZW50ID0gJCgnPGRpdiAvPicpLmh0bWwodGVtcGxhdGUpLmNvbnRlbnRzKCk7XG5cblx0XHR0aGlzLmVsZW1lbnRcblx0XHRcdC5maW5kKCcubGVwbGF5ZXItbmV4dF9fYnV0dG9uJylcblx0XHRcdC5hcHBlbmQobmV3IEljb24odGhpcy5wbGF5ZXIsIHsgaWNvbk5hbWUgOiAncGxheScgfSkuZWxlbWVudCk7XG5cblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50O1xuXG5cdH1cblxuXHRzdGFydEFuaW1hdGlvbihjYikge1xuXHRcdHRoaXMuX2NpcmNsZUVsZW1lbnRcblx0XHRcdC5zdG9wKClcblx0XHRcdC5hbmltYXRlKHtcblx0XHRcdFx0J3N0cm9rZS1kYXNob2Zmc2V0JyA6IC0yICogdGhpcy5vcHRpb25zLnN0cm9rZURhc2hhcnJheVxuXHRcdFx0fSwgdGhpcy5vcHRpb25zLnRpbWVvdXQsIGNiKTtcblx0fVxuXG5cdHN0b3BBbmltYXRpb24oKSB7XG5cdFx0dGhpcy5fY2lyY2xlRWxlbWVudC5zdG9wKCk7XG5cdH1cblxuXHRzZXQgcmFkaWFsKHZhbHVlKSB7XG5cdFx0dGhpcy5fcmFkaWFsID0gdmFsdWU7XG5cdFx0dGhpcy5fY2lyY2xlRWxlbWVudC5jc3MoJ3N0cm9rZS1kYXNob2Zmc2V0JywgLSh2YWx1ZSArIDEpICogdGhpcy5vcHRpb25zLnN0cm9rZURhc2hhcnJheSk7XG5cdH1cblxuXHRnZXQgcmFkaWFsKCkge1xuXHRcdHJldHVybiB0aGlzLl9yYWRpYWw7XG5cdH1cbn1cblxuXG5cbmNsYXNzIE5leHRDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucykge1xuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0dGl0bGUgOiAnJyxcblx0XHRcdGRlc2NyaXB0aW9uIDogJycsXG5cdFx0XHR0aW1lb3V0IDogMTAwMDAsXG5cdFx0XHRhdXRvIDogZmFsc2UsXG5cdFx0XHRmbiA6ICgpID0+IHt9LFxuXHRcdH0sIG9wdGlvbnMpO1xuXG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblxuXHRcdHRoaXMuY2FuY2VsQnV0dG9uID0gdGhpcy5lbGVtZW50LmZpbmQoJy5sZXBsYXllci1uZXh0X19jYW5jZWwnKTtcblx0XHR0aGlzLnBsYXllci5vbigncGxheScsICgpID0+IHRoaXMuaGlkZSgpKTtcblx0XHR0aGlzLnBsYXllci5vbignbG9hZHN0YXJ0JywgKCkgPT4gdGhpcy5oaWRlKCkpO1xuXHRcdHRoaXMucGxheWVyLm9uKCdlbmRlZCcsICgpID0+IHRoaXMuc2hvdygpKTtcblxuXHRcdHRoaXMucGxheWVyLm9uKCd0aW1ldXBkYXRlJywgKCkgPT4ge1xuXHRcdFx0aWYoIXRoaXMucGxheWVyLmVuZGVkKSB7XG5cdFx0XHRcdHRoaXMuaGlkZSgpXG5cdFx0XHR9XG5cdFx0fSlcblxuXHRcdHRoaXMucHJvZ3Jlc3NCdXR0b24uZWxlbWVudC5vbignY2xpY2snLCB0aGlzLm5leHQuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5jYW5jZWxCdXR0b24ub24oJ2NsaWNrJywgdGhpcy5jYW5jZWwuYmluZCh0aGlzKSk7XG5cblx0fVxuXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0Y29uc3QgeyB0aW1lb3V0LCB0aXRsZSwgZGVzY3JpcHRpb24sIHBvc3RlciwgYXV0bywgdGltZSB9ID0gdGhpcy5vcHRpb25zO1xuXHRcdGNvbnN0IHRlbXBsYXRlID0gYFxuXHRcdFx0PGRpdiBjbGFzcz1cImxlcGxheWVyLW5leHRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGVwbGF5ZXItbmV4dF9faGVhZFwiPtCh0LvQtdC00YPRjtGJ0LXQtSDQstC40LTQtdC+PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJsZXBsYXllci1uZXh0X19ib3hcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibGVwbGF5ZXItbmV4dF9fcG9zdGVyXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibGVwbGF5ZXItbmV4dF9fbWluaS10aXRsZVwiPiR7dGl0bGV9PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibGVwbGF5ZXItbmV4dF9fY2FuY2VsXCIgcm9sZT1cImJ1dHRvblwiPtCe0YLQvNC10L3QsDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJsZXBsYXllci1uZXh0X19jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGVwbGF5ZXItbmV4dF9fdGl0bGVcIj4ke3RpdGxlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxlcGxheWVyLW5leHRfX2Rlc2NyaXB0aW9uXCI+JHtkZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7dGltZSA/IGA8ZGl2IGNsYXNzPVwibGVwbGF5ZXItbmV4dF9fdGltZVwiPiR7c2Vjb25kc1RvVGltZSh0aW1lKX08L2Rpdj5gIDogJyd9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cblx0XHRgLnRyaW0oKTtcblxuXHRcdHRoaXMucHJvZ3Jlc3NCdXR0b24gPSBuZXcgUmFkaWFsQmFyKHRoaXMucGxheWVyLCB7IHRpbWVvdXQgfSk7XG5cblx0XHR0aGlzLmVsZW1lbnQgPSAkKCc8ZGl2IC8+JykuaHRtbCh0ZW1wbGF0ZSkuY29udGVudHMoKTtcblxuXHRcdHRoaXMuZWxlbWVudFxuXHRcdFx0LmZpbmQoJy5sZXBsYXllci1uZXh0X19wb3N0ZXInKVxuXHRcdFx0LmFwcGVuZCh0aGlzLnByb2dyZXNzQnV0dG9uLmVsZW1lbnQpO1xuXG5cdFx0aWYocG9zdGVyICE9IG51bGwpIHtcblx0XHRcdHRoaXMuZWxlbWVudFxuXHRcdFx0XHQuZmluZCgnLmxlcGxheWVyLW5leHRfX3Bvc3RlcicpXG5cdFx0XHRcdC5jc3Moe1xuXHRcdFx0XHRcdCdiYWNrZ3JvdW5kLWltYWdlJyA6IGB1cmwoJHtwb3N0ZXJ9KWBcblx0XHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0aWYoYXV0bykge1xuXHRcdFx0dGhpcy5hZGRDbGFzcygnbGVwbGF5ZXItbmV4dC0tYXV0bycpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQ7XG5cdH1cblxuXHRjYW5jZWwoKSB7XG5cdFx0Y2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVvdXQpO1xuXHRcdHRoaXMucmVtb3ZlQ2xhc3MoJ2xlcGxheWVyLW5leHQtLWF1dG8nKTtcblx0fVxuXG5cdG5leHQoKSB7XG5cdFx0aWYodGhpcy5vcHRpb25zLnVybCAhPSBudWxsKSB7XG5cdFx0XHR3aW5kb3cubG9jYXRpb24gPSB0aGlzLm9wdGlvbnMudXJsO1xuXHRcdH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLmZuICYmICQuaXNGdW5jdGlvbih0aGlzLm9wdGlvbnMuZm4pKSB7XG5cdFx0XHR0aGlzLm9wdGlvbnMuZm4odGhpcylcblx0XHR9XG5cdH1cblxuXHRzaG93KCkge1xuXHRcdGlmKHRoaXMuY2FuY2VsbGVkKSByZXR1cm47XG5cblx0XHR0aGlzLmVsZW1lbnQuc2hvdygpO1xuXG5cdFx0aWYodGhpcy5vcHRpb25zLmF1dG8pIHtcblx0XHRcdHRoaXMucHJvZ3Jlc3NCdXR0b24uc3RhcnRBbmltYXRpb24oKTtcblx0XHRcdGNsZWFyVGltZW91dCh0aGlzLl90aW1lb3V0KTtcblx0XHRcdHRoaXMuX3RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMubmV4dCgpLCB0aGlzLm9wdGlvbnMudGltZW91dCk7XG5cdFx0fVxuXHR9XG5cblx0aGlkZSgpIHtcblx0XHR0aGlzLmVsZW1lbnQuaGlkZSgpO1xuXG5cdFx0aWYodGhpcy5vcHRpb25zLmF1dG8pIHtcblx0XHRcdHRoaXMucHJvZ3Jlc3NCdXR0b24uc3RvcEFuaW1hdGlvbigpO1xuXHRcdFx0dGhpcy5wcm9ncmVzc0J1dHRvbi5yYWRpYWwgPSAwO1xuXHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVvdXQpO1xuXHRcdH1cblx0fVxuXG59XG5cblxuUGxheWVyLnBsdWdpbignbmV4dCcsIGZ1bmN0aW9uKHBsdWdpbk9wdGlvbnMpIHtcblx0dGhpcy5fbmV4dENvbXBvbmVudCA9IG5ldyBOZXh0Q29tcG9uZW50KHRoaXMsIHBsdWdpbk9wdGlvbnMpXG5cblx0dGhpcy5pbm5lckVsZW1lbnQuYXBwZW5kKHRoaXMuX25leHRDb21wb25lbnQuZWxlbWVudCk7XG5cbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL3BsdWdpbnMvbGUtcGxheWVyLW5leHQuanMiXSwic291cmNlUm9vdCI6IiJ9