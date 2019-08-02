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
	Player.version = ("0.5.3");
	
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
	// Player.preset('2035', {
	// 	options : {
	// 		entity : 'Youtube',
	// 		controls : {
	// 			common : [
	// 				['play', 'volume', 'timeline', 'rate', 'backward', 'section', 'fullscreen'],
	// 			],
	// 			fullscreen : [
	// 				['play', 'volume', 'timeline', 'rate', 'backward',  'section', 'fullscreen'],
	// 			],
	// 			mini : [
	// 				['play', 'timeline', 'volume', 'fullscreen']
	// 			],
	// 		}
	// 	},
	// });
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZmFmNTZiNDliZTE0NDQwNjExMDY/NTRiOSIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvbGUtcGxheWVyLmpzPzZkMDIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiJFwiPzU3YWEiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvQ29udHJvbC5qcz84MWNjIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL0NvbXBvbmVudC5qcz9mNTc4Iiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL0ljb24uanM/N2RlZiIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9QbGF5QnV0dG9uLmpzP2U3MmIiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL3V0aWxzL2luZGV4LmpzPzY1ZDkiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL3V0aWxzL2Jyb3dzZXIuanM/MDY0NSIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9TcGxhc2hJY29uLmpzP2E5ZjEiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvVGltZWxpbmUvVGltZS5qcz8xZDI4Iiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL0NvbnRyb2xDb2xsZWN0aW9uLmpzPzE0NWEiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvU2VjdGlvbnMuanM/Y2Q2NyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9FcnJvckRpc3BsYXkuanM/NTRhMSIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9Qb3N0ZXIuanM/MzJmNSIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvRnVsbHNjcmVlbkFwaS5qcz8yMmJjIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy91dGlscy9jb29raWUuanM/YTAzZiIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvTWVkaWFFcnJvci5qcz9kM2UzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL1BsYXlDb250cm9sLmpzPzEyNTUiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvVm9sdW1lQ29udHJvbC5qcz9hYTIwIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL0NvbnRyb2xEcm9wZG93bi5qcz84NjE4Iiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL1RpbWVsaW5lL1RpbWVsaW5lQ29udHJvbC5qcz9iZmRkIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL0NvbnRyb2xUZXh0LmpzPzcwMjIiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvVGltZWxpbmUvQnVmZmVyZWRSYW5nZXMuanM/N2Q0MCIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9UaW1lbGluZS9NYXJrZXIuanM/ZTM5MiIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9TZWN0aW9uQ29udHJvbC5qcz9mMDdiIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL0NvbnRyb2xDaGVja2JveC5qcz9iMmI3Iiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL0Z1bGxzY3JlZW5Db250cm9sLmpzPzVkYjYiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvUmF0ZUNvbnRyb2wuanM/MWU5YiIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9CYWNrd2FyZENvbnRyb2wuanM/ODc2YSIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9Tb3VyY2VDb250cm9sLmpzP2QxZWYiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvQ29udHJvbENvbnRhaW5lci5qcz8zNzM1Iiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL1N1YnRpdGxlQ29udHJvbC5qcz80MTc5Iiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL0Rvd25sb2FkQ29udHJvbC5qcz83ZTg2Iiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL0tleWJpbmRpbmdJbmZvQ29udHJvbC5qcz81MDRkIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL1RpbWVJbmZvQ29udHJvbC5qcz9mNmYzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9lbnRpdHkvSHRtbDUuanM/YmQ3MyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvZW50aXR5L0VudGl0eS5qcz9mMWQyIiwid2VicGFjazovLy8uL34vYXJyYXkucHJvdG90eXBlLmZpbmQvaW5kZXguanM/N2M0MiIsIndlYnBhY2s6Ly8vLi9+L2RlZmluZS1wcm9wZXJ0aWVzL2luZGV4LmpzP2U0ZjgiLCJ3ZWJwYWNrOi8vLy4vfi9vYmplY3Qta2V5cy9pbmRleC5qcz9hNTNiIiwid2VicGFjazovLy8uL34vb2JqZWN0LWtleXMvaXNBcmd1bWVudHMuanM/ZmI5NCIsIndlYnBhY2s6Ly8vLi9+L29iamVjdC1rZXlzL2ltcGxlbWVudGF0aW9uLmpzPzYzZGIiLCJ3ZWJwYWNrOi8vLy4vfi9lcy1hYnN0cmFjdC9lczYuanM/YTMxMyIsIndlYnBhY2s6Ly8vLi9+L2VzLWFic3RyYWN0L2VzMjAxNS5qcz80OWMxIiwid2VicGFjazovLy8uL34vaGFzL3NyYy9pbmRleC5qcz81ZDA2Iiwid2VicGFjazovLy8uL34vZnVuY3Rpb24tYmluZC9pbmRleC5qcz82YmJlIiwid2VicGFjazovLy8uL34vZnVuY3Rpb24tYmluZC9pbXBsZW1lbnRhdGlvbi5qcz9jMzJkIiwid2VicGFjazovLy8uL34vZXMtdG8tcHJpbWl0aXZlL2VzNi5qcz84OTU5Iiwid2VicGFjazovLy8uL34vZXMtdG8tcHJpbWl0aXZlL2VzMjAxNS5qcz8wMTExIiwid2VicGFjazovLy8uL34vZXMtdG8tcHJpbWl0aXZlL2hlbHBlcnMvaXNQcmltaXRpdmUuanM/ZDkwYiIsIndlYnBhY2s6Ly8vLi9+L2lzLWNhbGxhYmxlL2luZGV4LmpzPzViYjAiLCJ3ZWJwYWNrOi8vLy4vfi9pcy1kYXRlLW9iamVjdC9pbmRleC5qcz8xMjNlIiwid2VicGFjazovLy8uL34vaXMtc3ltYm9sL2luZGV4LmpzPzI5ODQiLCJ3ZWJwYWNrOi8vLy4vfi9oYXMtc3ltYm9scy9pbmRleC5qcz85YTZjIiwid2VicGFjazovLy8uL34vaGFzLXN5bWJvbHMvc2hhbXMuanM/OWM0ZiIsIndlYnBhY2s6Ly8vLi9+L2VzLWFic3RyYWN0L0dldEludHJpbnNpYy5qcz80NjY4Iiwid2VicGFjazovLy8uL34vZXMtYWJzdHJhY3QvaGVscGVycy9hc3NlcnRSZWNvcmQuanM/Y2NhNiIsIndlYnBhY2s6Ly8vLi9+L2VzLWFic3RyYWN0L2hlbHBlcnMvaXNOYU4uanM/NzFjMiIsIndlYnBhY2s6Ly8vLi9+L2VzLWFic3RyYWN0L2hlbHBlcnMvaXNGaW5pdGUuanM/ODcwNSIsIndlYnBhY2s6Ly8vLi9+L2VzLWFic3RyYWN0L2hlbHBlcnMvYXNzaWduLmpzP2U2OWUiLCJ3ZWJwYWNrOi8vLy4vfi9lcy1hYnN0cmFjdC9oZWxwZXJzL3NpZ24uanM/ZDBjYSIsIndlYnBhY2s6Ly8vLi9+L2VzLWFic3RyYWN0L2hlbHBlcnMvbW9kLmpzPzE5MTMiLCJ3ZWJwYWNrOi8vLy4vfi9lcy1hYnN0cmFjdC9oZWxwZXJzL2lzUHJpbWl0aXZlLmpzPzg3MzMiLCJ3ZWJwYWNrOi8vLy4vfi9lcy1hYnN0cmFjdC9lczUuanM/Y2MyMCIsIndlYnBhY2s6Ly8vLi9+L2VzLXRvLXByaW1pdGl2ZS9lczUuanM/YjdkYSIsIndlYnBhY2s6Ly8vLi9+L2lzLXJlZ2V4L2luZGV4LmpzP2IyNzAiLCJ3ZWJwYWNrOi8vLy4vfi9hcnJheS5wcm90b3R5cGUuZmluZC9pbXBsZW1lbnRhdGlvbi5qcz8wNjkwIiwid2VicGFjazovLy8uL34vYXJyYXkucHJvdG90eXBlLmZpbmQvcG9seWZpbGwuanM/ZDZlNCIsIndlYnBhY2s6Ly8vLi9+L2FycmF5LnByb3RvdHlwZS5maW5kL3NoaW0uanM/OWFkNyIsIndlYnBhY2s6Ly8vLi9kaXN0L3N2Zy9zdmctZGVmcy5zdmc/YTRhYSIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvcHJlc2V0cy92cHMuanM/YjMwZCIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvcHJlc2V0cy9zaW1wbGUuanM/NmIzMiIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvcHJlc2V0cy9zbXMuanM/N2M3MCIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvcHJlc2V0cy9jb21wcmVzc2VkLmpzP2RlMGIiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL3ByZXNldHMvMjAzNS5qcz8yZDIwIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9sZS1wbGF5ZXItZnVsbC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvcGx1Z2lucy9sZS1wbGF5ZXItZ2EuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL3BsdWdpbnMvbGUtcGxheWVyLXlvdXR1YmUuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL3BsdWdpbnMvbGUtcGxheWVyLW5leHQuanMiXSwibmFtZXMiOlsicmVnaXN0ZXJDb250cm9sIiwiZWxlbWVudCIsImFkZENsYXNzIiwiZXhjbHVkZUFycmF5Iiwic291cmNlIiwiZGlzdCIsInJlc3VsdCIsImNvbmNhdCIsImZvckVhY2giLCJpbmRleCIsImluZGV4T2YiLCJpdGVtIiwic3BsaWNlIiwiZGVmYXVsdE9wdGlvbnMiLCJlbnRpdHkiLCJhdXRvcGxheSIsImhlaWdodCIsImxvb3AiLCJtdXRlZCIsInByZWxvYWQiLCJwb3N0ZXIiLCJzdmdQYXRoIiwiaW5uYWN0aXZpdHlUaW1lb3V0IiwicmF0ZSIsInN0ZXAiLCJtaW4iLCJtYXgiLCJkZWZhdWx0IiwicGxheWJhY2siLCJzaG9ydCIsIm1lZGl1bSIsImxvbmciLCJjb250cm9scyIsImNvbW1vbiIsImZ1bGxzY3JlZW4iLCJtaW5pIiwiY29udHJvbHNPcHRpb25zIiwiYWxpZ24iLCJ2b2x1bWUiLCJtdXRlbGltaXQiLCJrZXlCaW5kaW5nIiwia2V5IiwiaW5mbyIsImRlc2NyaXB0aW9uIiwiZm4iLCJwbGF5ZXIiLCJ2aWRlbyIsInRvZ2dsZVBsYXkiLCJjdXJyZW50VGltZSIsIm9wdGlvbnMiLCJzcGxhc2hJY29uIiwic2hvdyIsInNoaWZ0S2V5Iiwic2VjdGlvbnMiLCJwcmV2IiwibmV4dCIsImNhbGNWb2x1bWVJY29uIiwidG9nZ2xlRnVsbHNjcmVlbiIsInBsdWdpbnMiLCJtaW5pcGxheWVyIiwib25QbGF5ZXJJbml0ZWQiLCJQbGF5ZXIiLCJjcmVhdGVFbGVtZW50IiwiX2VsZW1lbnQiLCJpbm5lckVsZW1lbnQiLCJfdXNlck9wdGlvbnMiLCJfaW5pdE9wdGlvbnMiLCJfbG9hZFNWR1Nwcml0ZSIsImRlZmF1bHRTcHJpdGUiLCJfdmlldyIsImxvYWRFbnRpdHkiLCJjdHgiLCJfaW5pdENvbnRyb2xzIiwiX2RibGNsaWNrVGltZW91dCIsIl9pbml0U2VjdGlvbnMiLCJ0aGVuIiwiZGF0YSIsInRyaWdnZXIiLCJfaW5pdFBsdWdpbnMiLCJfbGlzdGVuSG90S2V5cyIsIl91c2VyQWN0aXZpdHkiLCJfbGlzdGVuVXNlckFjdGl2aXR5IiwiX3dhaXRpbmdUaW1lb3V0cyIsIm9uIiwiZXZlbnROYW1lIiwib25lIiwicmVtb3ZlQ2xhc3MiLCJ0aW1lIiwiZHVyYXRpb24iLCJlcnJvciIsIl9zdGFydFdhaXRpbmciLCJfc3RvcFdheXRpbmciLCJlIiwidXJsIiwicGxheSIsInBhdXNlZCIsInBhdXNlIiwiY29kZSIsImluaXQiLCJzcmMiLCJfb25GdWxsc2NyZWVuQ2hhbmdlIiwiYmluZCIsIl9vbkNsaWNrIiwiX29uRGJjbGljayIsIl9vbkluaXRlZCIsIl9vblBsYXkiLCJfb25QYXVzZSIsImRvY3VtZW50IiwiZnVsbHNjcmVlbmNoYW5nZSIsIl9vbkVudGl0eUZ1bGxzY3JlbkNoYW5nZSIsIm5hbWUiLCJFbnRpdHkiLCJnZXRDb21wb25lbnQiLCJfZW50aXR5IiwibG9hZCIsInZpZXciLCJhcmdzIiwicXVhbGl0eSIsImlzUGF1c2VkIiwicGxheWJhY2tSYXRlIiwiZGZkIiwiRGVmZXJyZWQiLCJfZGF0YSIsInVuZGVmaW5lZCIsInJlc29sdmUiLCJwcm9taXNlIiwiYWpheCIsIm1ldGhvZCIsImRhdGFUeXBlIiwiZ2V0RGF0YSIsImZzQXBpIiwicmVxdWVzdEZ1bGxzY3JlZW4iLCJzdXBwb3J0c0Z1bGxTY3JlZW4iLCJlbnRlckZ1bGxzY3JlZW4iLCJleGl0RnVsbHNjcmVlbiIsIndpZHRoIiwibGVuZ3RoIiwibmV3U2VjdGlvbnMiLCJpIiwiZW5kU2VjdGlvbiIsImJlZ2luIiwiZW5kIiwiYXR0ciIsImNzcyIsImVycm9yRGlzcGxheSIsInBsYXlCdXR0b24iLCJsb2FkZXIiLCJhcHBlbmQiLCJpY29uTmFtZSIsImNsYXNzTmFtZSIsInZpZGVvQ29udGFpbmVyIiwibGFzdFRpbWVyIiwidmlkZW9JbmZvIiwiY29uc29sZSIsIndhcm4iLCJpbmZvRWxlbWVudCIsImh0bWwiLCJ0aXRsZSIsInNlY3Rpb25Db250YWluZXIiLCJzZWN0aW9uc0NvbnRhaW5lciIsImJlZm9yZSIsImF0dHJPcHRpb25zIiwicmVkdWNlIiwib2JqIiwidmFsIiwic291cmNlcyIsImZpbmQiLCJlYWNoIiwidmFsdWUiLCJmbGFnIiwidmlzaWJsZSIsIm91dHNpZGVTZWN0aW9ucyIsIl9vcHRpb25zRnJvbUVsZW1lbnQiLCJwcmVzZXRPcHRpb25zIiwicHJlc2V0IiwiZ2V0UHJlc2V0IiwiZXh0ZW5kIiwiQXJyYXkiLCJpc0FycmF5IiwiZXhjbHVkZUNvbnRyb2xzIiwiaGFzT3duUHJvcGVydHkiLCJjb250cm9sQ29sbGVjdGlvbiIsInJvdyIsImluaXRPcHRpb25zIiwiYWN0aXZlIiwiaXNLZXlCaW5kaW5nIiwiYmluZGluZyIsIndoaWNoIiwiY3RybEtleSIsInByZXZlbnREZWZhdWx0IiwicmVqZWN0IiwiZ2V0U2VjdGlvbkRhdGEiLCJkb25lIiwiaXNTZWN0aW9uT3V0c2lkZSIsIl9jb21wbGV0ZVNlY3Rpb25zIiwiaXRlbXMiLCJmdWxsc2NyZWVuT25seSIsImhpZGVTY3JvbGwiLCJwbHVnaW5PcHRpb25zIiwibW91c2VJblByb2dyZXNzIiwibGFzdE1vdmVYIiwibGFzdE1vdmVZIiwib25Nb3VzZU1vdmUiLCJzY3JlZW5YIiwic2NyZWVuWSIsIm9uTW91c2VEb3duIiwiY2xlYXJJbnRlcnZhbCIsInNldEludGVydmFsIiwib25Nb3VzZVVwIiwiaW5hY3Rpdml0eVRpbWVvdXQiLCJkZWxheSIsInVzZXJBY3RpdmUiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwicHVzaCIsImNhbGwiLCJmb2N1cyIsImlzRnMiLCJfbGFzdFNlY3Rpb25zVmFsdWUiLCJmdWxsc2NyZWVuRWxlbWVudCIsImVuZGVkIiwiX2Vycm9yIiwiaGlkZSIsIl91c2VyQWN0aXZlIiwiZ2V0VXNlckFjdGl2ZSIsInRvZ2dsZUNsYXNzIiwicGx1Z2luIiwicHJvdG90eXBlIiwicmVnaXN0ZXJDb21wb25lbnQiLCJnZXRDb250cm9sIiwic2Vjb25kc1RvVGltZSIsIl9wcmVzZXRzIiwiQ29va2llIiwic3ZnIiwiaGlkZGVuRWxlbWVudCIsInByZXBlbmQiLCJyZXF1aXJlIiwidmVyc2lvbiIsIndpbmRvdyIsIiQiLCJsZVBsYXllciIsIm9mZnNldFNob3ciLCJvZmZzZXQiLCJ0b3AiLCJvdXRlckhlaWdodCIsImdldENvbnRyb2xzIiwiY29udHJvbE9wdGlvbnMiLCJjb250cm9sIiwiZGlzYWJsZSIsImlzRnVuY3Rpb24iLCJnZXRXaWR0aCIsIl91cGRhdGVNaW5pUGxheWVyIiwiZm9yY2UiLCJzY3JvbGxUb3AiLCJoaWRlTWluaVBsYXllciIsInNob3dNaW5pUGxheWVyIiwib25TZXRWaWV3Iiwib25EZWxWaWV3IiwibW9kdWxlIiwiZXhwb3J0cyIsIkNvbnRyb2wiLCJlbWl0VGFwRXZlbnRzIiwiY2xpY2siLCJvbkNsaWNrIiwidGFwIiwiaWNvbiIsImF0dHJzIiwidGFnIiwiYnVpbGRDU1NDbGFzcyIsImhhc0NsYXNzIiwiYXJndW1lbnRzIiwiX2Rpc2FibGUiLCJfY29udHJvbHMiLCJjb250cm9sQ2xhc3MiLCJ0b1BsYXllckV2ZW50IiwiZXZlbnRzIiwic3BsaXQiLCJhY2MiLCJDb21wb25lbnQiLCJfX25vZGUiLCJibHVyIiwiZXZlbnQiLCJFdmVudCIsInRyaWdnZXJIYW5kbGVyIiwiZXZlbnROYW1lcyIsIlN0cmluZyIsInRvdWNoU3RhcnQiLCJmaXJzdFRvdWNoIiwibGFzdE1vdmVUb3VjaCIsInRhcE1vdmVtZW50VGhyZXNob2xkIiwidG91Y2hUaW1lVGhyZXNob2xkIiwiY291bGRCZVRhcCIsInRvdWNoZXMiLCJwYWdlWCIsInBhZ2VZIiwiRGF0ZSIsImdldFRpbWUiLCJ4ZGlmZiIsInlkaWZmIiwidG91Y2hEaXN0YW5jZSIsIk1hdGgiLCJzcXJ0Iiwibm9UYXAiLCJ0b3VjaFRpbWUiLCJ0YXBFdmVudCIsImNvbXBvbmVudCIsIl9jb21wb25lbnRzIiwiSWNvbiIsIl91c2VUYWciLCJjcmVhdGVFbGVtZW50TlMiLCJfc3ZnVGFnIiwiX2ljb25OYW1lIiwiYXBwZW5kQ2hpbGQiLCJhdHRyTlMiLCJyZW1vdmVBdHRyaWJ1dGVOUyIsInNldEF0dHJpYnV0ZU5TIiwiUGxheUJ1dHRvbiIsImlubmVyIiwicGVyY2VudGlmeSIsImNyZWF0ZUVsIiwiJGh0bWwiLCJub29wIiwic2Vjb25kcyIsInNob3dIb3VycyIsImgiLCJmbG9vciIsIm0iLCJzIiwib3V0IiwicGVyY2VudCIsInByb3BzIiwiZ2V0U2Nyb2xsQmFyV2lkdGgiLCJvdXRlciIsInZpc2liaWxpdHkiLCJvdmVyZmxvdyIsImFwcGVuZFRvIiwid2lkdGhXaXRoU2Nyb2xsIiwib3V0ZXJXaWR0aCIsInJlbW92ZSIsIlVTRVJfQUdFTlQiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJJU19NT0JJTEUiLCJ0ZXN0IiwiSVNfQ0hST01FIiwiSVNfQU5EUk9JRCIsIklTX0FORFJPSURfUEhPTkUiLCJJU19JUEFEIiwiSVNfSVBIT05FIiwiSVNfSVBPRCIsIklTX0lPUyIsIklTX1NBRkFSSSIsIklTX1RPVUNIIiwibWF4VG91Y2hQb2ludHMiLCJTcGxhc2hJY29uIiwiVGltZSIsInVwZGF0ZVRleHQiLCJ0ZXh0IiwiQ29udHJvbENvbGxlY3Rpb24iLCJsb2NhbFVhT3B0aW9ucyIsImxvY2FsTmFtZSIsImluZGV4Um93IiwiY3JlYXRlIiwiY29sbGVjdGlvbiIsIl9yb3dzIiwiYWRkUm93IiwiZWxlbVJvdyIsImZpcnN0Iiwic2Vjb25kIiwiZ2xvYmFsQWxpZ24iLCJyb3dBbGlnbiIsImNvbnRyb2xOYW1lIiwiYWRkQ29udHJvbCIsIl9nZXRDb250cm9sT3B0aW9ucyIsIlNlY3Rpb25zIiwic2Nyb2xsRWxlbWVudCIsIl9pbm5lckVsZW1lbnQiLCJhY3RpdmVTZWN0aW9uIiwiZ2V0U2VjdGlvbkJ5SW5kZXgiLCJzZXRBY3RpdmVCeUluZGV4Iiwib25TZWN0aW9uQ2xpY2siLCJvblRpbWVVcGRhdGUiLCJ1cGRhdGVTZWN0aW9uRHVyYXRpb24iLCJzZWN0aW9uSW5kZXgiLCJwYXJzZUludCIsIm5ld0luZGV4IiwicmlnaHQiLCJfY3JlYXRlU2VjdGlvbnMiLCJzZWN0aW9uIiwidGFyZ2V0IiwiY2xvc2VzdCIsInRvcFBvc2l0aW9uIiwicG9zaXRpb24iLCJhbmltYXRlIiwiZW5kU2VjdGlvblRpbWUiLCJ0b1N0cmluZyIsIm5leHRJbmZvIiwidHJpbSIsInJlcGxhY2VXaXRoIiwiY3JlYXRlU2VjdGlvbiIsImlzVmlzaWJsZSIsIkVycm9yRGlzcGxheSIsIm1lc3NhZ2UiLCJvblBsYXllckVycm9yIiwiUG9zdGVyIiwiX3VybCIsIkZ1bGxzY3JlZW5BcGkiLCJhcGlNYXAiLCJzcGVjQXBpIiwiYnJvd3NlckFwaSIsImRmbHQiLCJjb29raWVzIiwiY29va2llIiwiZCIsInNldERhdGUiLCJ5ZWFyIiwiTWVkaWFFcnJvciIsImRlZmF1bHRNZXNzYWdlcyIsImVycm9yVHlwZXMiLCJlcnJOdW0iLCJQbGF5Q29udHJvbCIsInVwZGF0ZSIsInNob3dSZXBsYXkiLCJzaG93UGxheSIsInNob3dQYXVzZSIsIkluZmluaXR5IiwiX3JlcGxheSIsIlZvbHVtZUNvbnRyb2wiLCJmZWF0dXJlQ29udHJvbFZvbHVtZSIsImRyYWciLCJtYXJrZXIiLCJsaW5lIiwicCIsImdldFBvc2l0aW9uIiwiZHJvcGRvd25Db250ZW50IiwibW91c2Vtb3ZlIiwibW91c2V1cCIsInkiLCJ0b2dnbGVNdXRlZCIsImRlZmF1bHRWb2x1bWUiLCJyb3VuZCIsIkNvbnRyb2xEcm9wZG93biIsIl9vcGVuZWQiLCJvcGVuIiwiY2xvc2UiLCJ0b2dnbGUiLCJvbkRvY3VtZW50RXZlbnRzIiwiVGltZWxpbmVDb250cm9sIiwiX29uTWFya2VyTW91c2Vtb3ZlIiwiX29uTWFya2VyTW91c2Vkb3duIiwib25TZWN0aW9uc0luaXQiLCJfb25UaW1lVXBkYXRlIiwiX29uRHVyYXRpb25DaGFuZ2UiLCJtYXJrZXJTaGFkb3ciLCJ4IiwibWFya2VyVGltZSIsImlzTmFOIiwibW92ZSIsInRvdGFsVGltZSIsInBsYXllZFJhbmdlcyIsImJ1ZmZlcmVkUmFuZ2VzIiwibW91c2VsZWF2ZSIsIm1vdXNlZG93biIsIl9vbkxpbmVDbGljayIsInVwZGF0ZVNlY3Rpb25SYW5nZXMiLCJjcmVhdGVTZWN0aW9uUmFuZ2VzIiwibGVmdCIsInVwZGF0ZUxhYmVscyIsIndhdGNoQnVmZmVySW50ZXJ2YWwiLCJ1cGRhdGVQcm9ncmVzc0JhciIsIkVORCIsIlNUQVJUIiwibG9hZGVkIiwiZG9tSXRlbSIsImFkZCIsImJ1ZmZlcmVkIiwibG9hZGVkU2l6ZSIsIkNvbnRyb2xUZXh0IiwiX3RleHQiLCJCdWZmZXJlZFJhbmdlcyIsInJhbmdlIiwiTWFya2VyIiwiX29uTW91c2Vkb3duIiwiX2RyYWciLCJTZWN0aW9uQ29udHJvbCIsIl9vblNlY3Rpb25zSW5pdCIsIl9vblNlY3Rpb25Ub2dnbGUiLCJ0b2dnbGVTZWN0aW9ucyIsImNoZWNrZWQiLCJDb250cm9sQ2hlY2tib3giLCJvbkNoZWNrZWQiLCJfY2hlY2tlZCIsIkZ1bGxzY3JlZW5Db250cm9sIiwiUmF0ZUNvbnRyb2wiLCJkb3duQ29udHJvbCIsImRlY3JlYXNlUmF0ZSIsInVwQ29udHJvbCIsImluY3JlYXNlUmF0ZSIsImN1cnJlbnRSYXRlIiwicGFyc2VGbG9hdCIsInRvRml4ZWQiLCJyZXBsYWNlIiwicmF0ZU1pbiIsInJhdGVNYXgiLCJnZXQiLCJCYWNrd2FyZENvbnRyb2wiLCJTb3VyY2VDb250cm9sIiwicGxheWJhY2tRdWFsaXR5IiwiZ2V0QXZhaWxhYmxlUXVhbGl0eUxldmVscyIsIkNvbnRyb2xDb250YWluZXIiLCJfYWN0aXZlIiwibGlzdCIsImNvbnRlbnQiLCJ0b29sdGlwIiwib25JdGVtQ2xpY2siLCJjdXJyZW50VGFyZ2V0IiwiY3VycmVudFZhbHVlIiwiZ2V0Q3VycmVudFZhbHVlIiwiZW1wdHkiLCJlbGVtIiwiYWRkSXRlbSIsIlN1YnRpdGxlQ29udHJvbCIsInRyYWNrIiwic3RvcFByb3BhZ2F0aW9uIiwiaGFzVmFsdWUiLCJzdWJ0aXRsZXMiLCJEb3dubG9hZENvbnRyb2wiLCJvbkxvYWRTdGFydCIsImhyZWYiLCJkb3dubG9hZCIsImxpbmsiLCJmaWxlTmFtZSIsImRlY29kZVVSSUNvbXBvbmVudCIsImdldEZpbGVFeHRlbnNpb24iLCJwYXJzZXIiLCJwYXRobmFtZSIsInBvcCIsIktleUJpbmRpbmdJbmZvQ29udHJvbCIsImluZm9Db250ZW50IiwiX2tleSIsImhvdGtleSIsImtleVN0cmluZyIsIlRpbWVJbmZvQ29udHJvbCIsIl9jdXJyZW50VGltZUNvbnRyb2wiLCJfdG90YWxUaW1lQ29udHJvbCIsIkh0bWw1IiwibWVkaWEiLCJidWZmZXJSYW5nZXMiLCJfcGxheWJhY2tRdWFsaXR5Iiwib25EdXJhdGlvbkNoYW5nZSIsIm9uUHJvZ3Jlc3MiLCJvblNlZWtpbmciLCJvblNlZWtlZCIsIm9uVm9sdW1lQ2hhbmdlIiwib25EYmxjbGljayIsIm9uUGxheSIsIm9uUGF1c2UiLCJvblJhdGVDaGFuZ2UiLCJvbkVuZGVkIiwib25DYW5wbGF5VGhyb3VnaCIsIm9uV2FpdGluZyIsIm9uRXJyb3IiLCJyZW1vdmVBdHRyIiwicHJvcCIsIm1hcCIsIl9pbml0U3VidGl0bGVzIiwiX2luaXRWaWRlbyIsIl9pbml0UmF0ZSIsIl9pbml0Vm9sdW1lIiwid2Via2l0RW50ZXJGdWxsU2NyZWVuIiwibmV0d29ya1N0YXRlIiwiSEFWRV9NRVRBREFUQSIsIndlYmtpdEV4aXRGdWxsU2NyZWVuIiwicGxheWVkIiwicGxheVByb21pc2UiLCJwYXVzZVByb21pc2UiLCJfc2VsZiIsImNoaWxkcmVuIiwibGFuZ3VhZ2UiLCJyZWFkeVN0YXRlIiwiSFRNTE1lZGlhRWxlbWVudCIsIkhBVkVfTk9USElORyIsIl90ZXh0VHJhY2tzSGFjayIsInRleHRUcmFja3MiLCJjbGllbnRIZWlnaHQiLCJjbGllbnRXaWR0aCIsIk1PQklMRV9NQVhfUkFURSIsIlNBRkFSSV9NQVhfUkFURSIsIk1PQklMRV9NSU5fUkFURSIsIlNBRkFSSV9NSU5fUkFURSIsInN0b3AiLCJfc291cmNlIiwiX3RyYWNrIiwibW9kZSIsIm11dGUiLCJzZWVrYWJsZSIsInN0YXJ0IiwiY3VycmVudFNyYyIsIlRFU1RfVklERU8iLCJjYW5Db250cm9sVm9sdW1lIiwiX3RyaWdnZXJTdGFjayIsIl9zdG9wTGlzdGVuIiwiZGVmYXVsdFJhdGUiLCJfcG9zdGVyIiwiaW5uZXJIZWlnaHQiLCJfcmF0ZU1heCIsIl9yYXRlTWluIiwic2V0IiwibGV2ZWxzIiwic29tZSIsInZpZGVvUGxheWVkIiwidmlkZW9QbGF5ZWREZWx0YSIsInZvbHVtZUNoYW5nZURlbGF5IiwicmF0ZUNoYW5nZURlbGF5IiwiZ2EiLCJ2b2x1bWVDaGFuZ2VUaW1lb3V0IiwiTnVtYmVyIiwicmF0ZUNoYW5nZVRpbWVvdXQiLCJwbGF5ZWRFdmVudHNTZW50IiwicGxheWVkUGVyY2VudGFnZSIsImRlbHRhIiwiYWJzIiwibG9hZFF1YWxpdHkiLCJ0cmFja1Byb3ZpZGUiLCJsYW5ndWFnZUNvZGUiLCJsYW5ndWFnZU5hbWUiLCJZb3V0dWJlIiwiX3BhdXNlZCIsImF2YWlsYWJsZVJhdGVzIiwiYXJyIiwieXRQbGF5ZXIiLCJRVUFMSVRZX05BTUVTIiwicGxheVZpZGVvIiwicGF1c2VWaWRlbyIsImFwaUxvYWRlZCIsImluaXRZVFBsYXllciIsInlvdXR1YmVFbGVtZW50IiwiYmxvY2tlciIsIl9pbml0UHJvbWlzZSIsImdsb2JhbE9wdGlvbnMiLCJ5dE9wdGlvbnMiLCJpdl9sb2FkX3BvbGljeSIsIm1vZGVzdGJyYW5kaW5nIiwicmVsIiwic2hvd2luZm8iLCJjY19sb2FkX3BvbGljeSIsImRpc2FibGVrYiIsImZzIiwiWVQiLCJyZWFkeSIsInZpZGVvSWQiLCJwbGF5ZXJWYXJzIiwib25SZWFkeSIsIm9uWVRQUmVhZHkiLCJvblN0YXRlQ2hhbmdlIiwib25ZVFBTdGF0ZUNoYW5nZSIsIm9uUGxheWJhY2tSYXRlQ2hhbmdlIiwib25ZVFBSYXRlQ2hhbmdlIiwib25QbGF5YmFja1F1YWxpdHlDaGFuZ2UiLCJvbllUUFBsYXliYWNrUXVhbGl0eUNoYW5nZSIsImdldEF2YWlsYWJsZVBsYXliYWNrUmF0ZXMiLCJzZXRBdmFpbGFibGVQbGF5YmFja1JhdGVzIiwic3RhdGUiLCJsYXN0U3RhdGUiLCJQbGF5ZXJTdGF0ZSIsIlVOU1RBUlRFRCIsIkVOREVEIiwiUExBWUlORyIsInNldFBsYXliYWNrUXVhbGl0eSIsIl9uZXh0UGxheWJhY2tRdWFsaXR5IiwiaXNTZWVraW5nIiwibG9hZENhcHRpb25zIiwiZW1pdFRpbWV1cGRhdGUiLCJQQVVTRUQiLCJCVUZGRVJJTkciLCJzZWVraW5nSW50ZXJ2YWwiLCJ3YXNQYXVzZWRCZWZvcmVTZWVrIiwidGltZUJlZm9yZVNlZWsiLCJlbXB0eVRyYWNrbGlzdCIsIl9sb2FkQ2FwdGlvbnNXYXRjaGVyIiwiX3RyYWNrc0Rpc2FibGUiLCJjaGVja0NhcHRpb25zRXhpc3QiLCJsb2FkTW9kdWxlIiwiZ2V0T3B0aW9ucyIsImlkIiwicGFyc2VVcmwiLCJnZXRDdXJyZW50VGltZSIsInNlZWtUbyIsImdldER1cmF0aW9uIiwiTmFOIiwiZ2V0UGxheWJhY2tSYXRlIiwic2V0UGxheWJhY2tSYXRlIiwidW5NdXRlIiwiaXNNdXRlZCIsImdldE9wdGlvbiIsInVubG9hZE1vZHVsZSIsInNldE9wdGlvbiIsInN0YXR1cyIsImdldFBsYXllclN0YXRlIiwiQ1VFRCIsImdldFBsYXliYWNrUXVhbGl0eSIsImdldFZvbHVtZSIsInNldFZvbHVtZSIsInJlZ2V4IiwiVVJMX1JFR0VYIiwibWF0Y2giLCJ0aW55Iiwic21hbGwiLCJsYXJnZSIsImhkNzIwIiwiaGQxMDgwIiwiaGlnaHJlcyIsImF1dG8iLCJfbG9hZGVkIiwiZ2V0U2NyaXB0IiwiUmFkaWFsQmFyIiwic3Ryb2tlRGFzaGFycmF5Iiwic2l6ZSIsIl9jaXJjbGVFbGVtZW50IiwidGVtcGxhdGUiLCJjb250ZW50cyIsImNiIiwidGltZW91dCIsIl9yYWRpYWwiLCJOZXh0Q29tcG9uZW50IiwiY2FuY2VsQnV0dG9uIiwicHJvZ3Jlc3NCdXR0b24iLCJjYW5jZWwiLCJfdGltZW91dCIsImxvY2F0aW9uIiwiY2FuY2VsbGVkIiwic3RhcnRBbmltYXRpb24iLCJzdG9wQW5pbWF0aW9uIiwicmFkaWFsIiwiX25leHRDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3RDQTs7Ozs7O0FBRUE7Ozs7QUFHQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7O0FBQ0E7O0FBU0E7Ozs7QUFFQTs7OztBQUdBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7QUFoQkE7OztBQW1CQSxtQkFBUUEsZUFBUixDQUF3QixTQUF4QixFQUFtQyxZQUFXO0FBQzdDLFNBQU87QUFDTkMsWUFBVSxzQkFBRSxRQUFGLEVBQVlDLFFBQVosQ0FBcUIsU0FBckI7QUFESixHQUFQO0FBR0EsRUFKRDs7QUFRQTs7Ozs7Ozs7QUFRQSxVQUFTQyxZQUFULENBQXNCQyxNQUF0QixFQUE4QkMsSUFBOUIsRUFBb0M7QUFDbkMsTUFBTUMsU0FBUyxHQUFHQyxNQUFILENBQVVILE1BQVYsQ0FBZjtBQUNBQyxPQUFLRyxPQUFMLENBQWEsZ0JBQVE7QUFDcEIsT0FBTUMsUUFBUUgsT0FBT0ksT0FBUCxDQUFlQyxJQUFmLENBQWQ7QUFDQSxPQUFJRixRQUFRLENBQUMsQ0FBYixFQUFnQjtBQUNmSCxXQUFPTSxNQUFQLENBQWNILEtBQWQsRUFBcUIsQ0FBckI7QUFDQTtBQUNBO0FBQ0QsR0FORDs7QUFRQSxTQUFPSCxNQUFQO0FBQ0E7O0FBRUQsS0FBTU8saUJBQWlCO0FBQ3RCQyxVQUFTLE9BRGE7QUFFdEJDLFlBQVcsS0FGVztBQUd0QkMsVUFBUyxNQUhhO0FBSXRCQyxRQUFPLEtBSmU7QUFLdEJDLFNBQVEsS0FMYztBQU10QkMsV0FBVSxVQU5ZO0FBT3RCQyxVQUFTLElBUGE7QUFRdEJDLFdBQVUsRUFSWTtBQVN0QkMsc0JBQXFCLElBVEM7QUFVdEJDLFFBQU87QUFDTkMsU0FBTyxJQUREO0FBRU5DLFFBQU0sR0FGQTtBQUdOQyxRQUFNLEdBSEE7QUFJTkMsWUFBVTtBQUpKLEdBVmU7QUFnQnRCQyxZQUFXO0FBQ1ZKLFNBQU87QUFDTkssV0FBUSxDQURGO0FBRU5DLFlBQVMsRUFGSDtBQUdOQyxVQUFPO0FBSEQ7QUFERyxHQWhCVztBQXVCdEJDLFlBQVc7QUFDVkMsV0FBUyxDQUNSLENBQUMsTUFBRCxFQUFTLFFBQVQsRUFBbUIsU0FBbkIsRUFBOEIsVUFBOUIsRUFBMkMsU0FBM0MsRUFBc0QsU0FBdEQsRUFBaUUsU0FBakUsRUFBNEUsWUFBNUUsQ0FEUSxFQUVSLENBQUMsTUFBRCxFQUFTLFNBQVQsRUFBb0IsVUFBcEIsRUFBZ0MsU0FBaEMsRUFBMkMsUUFBM0MsRUFBcUQsU0FBckQsRUFBZ0UsVUFBaEUsRUFBNEUsU0FBNUUsRUFBdUYsVUFBdkYsRUFBbUcsU0FBbkcsRUFBOEcsaUJBQTlHLENBRlEsQ0FEQztBQUtWQyxlQUFhLENBQ1osQ0FBQyxNQUFELEVBQVMsUUFBVCxFQUFtQixTQUFuQixFQUE4QixVQUE5QixFQUEwQyxTQUExQyxFQUFxRCxNQUFyRCxFQUE2RCxTQUE3RCxFQUF3RSxpQkFBeEUsRUFBNEYsU0FBNUYsRUFBdUcsVUFBdkcsRUFBbUgsU0FBbkgsRUFBOEgsUUFBOUgsRUFBd0ksU0FBeEksRUFBbUosVUFBbkosRUFBK0osU0FBL0osRUFBMEssVUFBMUssRUFBc0wsU0FBdEwsRUFBaU0sU0FBak0sRUFBNE0sU0FBNU0sRUFBdU4sWUFBdk4sQ0FEWSxDQUxIO0FBUVZDLFNBQU8sQ0FDTixDQUFDLE1BQUQsRUFBUyxRQUFULEVBQW1CLFNBQW5CLEVBQThCLFlBQTlCLEVBQTRDLFNBQTVDLEVBQXVELFVBQXZELENBRE0sQ0FSRztBQVdWLHFCQUFtQixDQUNsQixDQUFDLE1BQUQsRUFBUyxVQUFULEVBQXFCLFlBQXJCLENBRGtCLEVBRWxCLENBQUMsTUFBRCxFQUFTLFFBQVQsRUFBbUIsU0FBbkIsQ0FGa0IsQ0FYVDtBQWVWLHdCQUFzQixDQUNyQixDQUFDLE1BQUQsRUFBUyxVQUFULEVBQXFCLFlBQXJCLENBRHFCLEVBRXJCLENBQUMsTUFBRCxFQUFTLFFBQVQsRUFBbUIsU0FBbkIsQ0FGcUIsQ0FmWjtBQW1CVixpQkFBZSxDQUNkLENBQUMsTUFBRCxFQUFTLE1BQVQsRUFBaUIsVUFBakIsRUFBNkIsUUFBN0IsQ0FEYztBQW5CTCxHQXZCVztBQThDdEJDLG1CQUFrQjs7QUFFakJILFdBQVM7QUFDUkksV0FBUSxDQUFDLFNBQUQsRUFBWSxNQUFaO0FBQ1I7QUFGUSxJQUZRO0FBTWpCSCxlQUFhO0FBQ1pHLFdBQVE7QUFESSxJQU5JO0FBU2pCLHFCQUFtQjtBQUNsQkEsV0FBUSxDQUFDLFNBQUQsRUFBWSxPQUFaO0FBRFUsSUFURjs7QUFhakIsd0JBQXNCO0FBQ3JCQSxXQUFRLENBQUMsU0FBRCxFQUFZLE9BQVo7QUFEYTtBQWJMLEdBOUNJO0FBK0R0QkMsVUFBUztBQUNSWCxZQUFVLEdBREY7QUFFUlksY0FBWSxJQUZKO0FBR1JmLFNBQU87QUFIQyxHQS9EYTtBQW9FdEJnQixjQUFhLENBQ1o7QUFDQ0MsUUFBTSxFQURQO0FBRUNDLFNBQU8sQ0FBQyxPQUFELENBRlI7QUFHQ0MsZ0JBQWMsMENBSGY7QUFJQ0MsT0FBSyxZQUFDQyxNQUFELEVBQVk7QUFDaEJBLFdBQU9DLEtBQVAsQ0FBYUMsVUFBYjtBQUNBO0FBTkYsR0FEWSxFQVNaO0FBQ0NOLFFBQU0sRUFEUDtBQUVDQyxTQUFPLENBQUMsR0FBRCxDQUZSO0FBR0NDLGtLQUhEO0FBSUNDLE9BQUssWUFBQ0MsTUFBRCxFQUFZO0FBQ2hCQSxXQUFPQyxLQUFQLENBQWFFLFdBQWIsSUFBNEJILE9BQU9JLE9BQVAsQ0FBZXJCLFFBQWYsQ0FBd0JKLElBQXhCLENBQTZCTSxNQUF6RDtBQUNBZSxXQUFPSyxVQUFQLENBQWtCQyxJQUFsQixDQUF1QixNQUF2QjtBQUNBO0FBUEYsR0FUWSxFQWtCWjtBQUNDVixRQUFNLEVBRFA7QUFFQ0MsU0FBTyxDQUFDLEdBQUQsQ0FGUjtBQUdDQyx3S0FIRDtBQUlDQyxPQUFLLFlBQUNDLE1BQUQsRUFBWTtBQUNoQkEsV0FBT0MsS0FBUCxDQUFhRSxXQUFiLElBQTRCSCxPQUFPSSxPQUFQLENBQWVyQixRQUFmLENBQXdCSixJQUF4QixDQUE2Qk0sTUFBekQ7QUFDQWUsV0FBT0ssVUFBUCxDQUFrQkMsSUFBbEIsQ0FBdUIsTUFBdkI7QUFDQTtBQVBGLEdBbEJZLEVBMkJaO0FBQ0NDLGFBQVcsSUFEWjtBQUVDVixTQUFPLENBQUMsT0FBRCxFQUFVLEdBQVYsQ0FGUjtBQUdDQyxnQkFBYyw4QkFIZjtBQUlDRixRQUFNLEVBSlA7QUFLQ0csT0FBSyxZQUFDQyxNQUFELEVBQVk7QUFDaEIsUUFBR0EsT0FBT1EsUUFBUCxJQUFtQixJQUF0QixFQUE0QjtBQUMzQjtBQUNBO0FBQ0RSLFdBQU9RLFFBQVAsQ0FBZ0JDLElBQWhCO0FBRUE7QUFYRixHQTNCWSxFQXdDWjtBQUNDRixhQUFXLElBRFo7QUFFQ1gsUUFBTSxFQUZQO0FBR0NDLFNBQU8sQ0FBQyxPQUFELEVBQVUsR0FBVixDQUhSO0FBSUNDLGdCQUFjLDZCQUpmO0FBS0NDLE9BQUssWUFBQ0MsTUFBRCxFQUFZO0FBQ2hCLFFBQUdBLE9BQU9RLFFBQVAsSUFBbUIsSUFBdEIsRUFBNEI7QUFDM0I7QUFDQTtBQUNEUixXQUFPUSxRQUFQLENBQWdCRSxJQUFoQjtBQUNBO0FBVkYsR0F4Q1ksRUFvRFo7QUFDQ2QsUUFBTSxFQURQO0FBRUNDLFNBQU8sQ0FBQyxHQUFELENBRlI7QUFHQ0MsZ0JBQWMscUJBSGY7QUFJQ0MsT0FBSyxZQUFDQyxNQUFELEVBQVk7QUFDaEJBLFdBQU9DLEtBQVAsQ0FBYVIsTUFBYixJQUF1Qk8sT0FBT0ksT0FBUCxDQUFlWCxNQUFmLENBQXNCZCxJQUE3Qzs7QUFFQXFCLFdBQU9LLFVBQVAsQ0FBa0JDLElBQWxCLENBQXVCTixPQUFPVyxjQUFQLENBQXNCWCxPQUFPQyxLQUFQLENBQWFSLE1BQW5DLENBQXZCO0FBRUE7QUFURixHQXBEWSxFQWdFWjtBQUNDRyxRQUFNLEVBRFA7QUFFQ0MsU0FBTyxDQUFDLEdBQUQsQ0FGUjtBQUdDQyxnQkFBYyxxQkFIZjtBQUlDQyxPQUFLLFlBQUNDLE1BQUQsRUFBWTtBQUNoQkEsV0FBT0MsS0FBUCxDQUFhUixNQUFiLElBQXVCTyxPQUFPSSxPQUFQLENBQWVYLE1BQWYsQ0FBc0JkLElBQTdDOztBQUVBcUIsV0FBT0ssVUFBUCxDQUFrQkMsSUFBbEIsQ0FBdUJOLE9BQU9XLGNBQVAsQ0FBc0JYLE9BQU9DLEtBQVAsQ0FBYVIsTUFBbkMsQ0FBdkI7QUFDQTtBQVJGLEdBaEVZLEVBMkVaO0FBQ0NHLFFBQU0sRUFEUDtBQUVDQyxTQUFPLENBQUMsR0FBRCxDQUZSO0FBR0NDLGdCQUFjLG9DQUhmO0FBSUNDLE9BQUssWUFBQ0MsTUFBRCxFQUFZO0FBQ2hCQSxXQUFPWSxnQkFBUDtBQUNBO0FBTkYsR0EzRVksQ0FwRVM7QUF3SnRCQyxXQUFVO0FBQ1RDLGVBQWE7QUFESixHQXhKWTtBQTJKdEJDO0FBM0pzQixFQUF2Qjs7QUE4SkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBa0RNQyxNOzs7QUFDTCxrQkFBWTVELE9BQVosRUFBcUJnRCxPQUFyQixFQUE4QjtBQUFBOztBQUU3QkEsV0FBUWEsYUFBUixHQUF3QixLQUF4Qjs7QUFGNkIsK0dBSXZCLElBSnVCLEVBSWpCYixPQUppQjs7QUFNN0IsU0FBS2MsUUFBTCxHQUFnQjlELE9BQWhCOztBQUVBOzs7Ozs7QUFNQSxTQUFLK0QsWUFBTCxHQUFvQixxQkFBUyxLQUFULENBQXBCOztBQUVBO0FBQ0EsU0FBS0MsWUFBTCxHQUFvQmhCLE9BQXBCO0FBQ0EsU0FBS2lCLFlBQUw7O0FBRUEsT0FBRyxNQUFLakIsT0FBTCxDQUFhNUIsT0FBYixLQUF5QixFQUE1QixFQUFnQztBQUMvQndDLFdBQU9NLGNBQVAsQ0FBc0JOLE9BQU9PLGFBQTdCO0FBQ0E7O0FBRUQsU0FBS0MsS0FBTCxHQUFhLFFBQWI7O0FBRUE7Ozs7OztBQU1BLFNBQUtwRSxPQUFMLEdBQWUsTUFBSzZELGFBQUwsRUFBZjs7QUFFQSxTQUFLUSxVQUFMLENBQWdCLE1BQUtyQixPQUFMLENBQWFuQyxNQUE3QixFQUFxQyxFQUFFeUQsS0FBTXRFLE9BQVIsRUFBckM7QUFDQTs7Ozs7O0FBTUEsU0FBSzZDLEtBQUwsR0FBYSxNQUFLaEMsTUFBbEI7O0FBRUE7QUFDQTtBQUNBLFNBQUtrQixRQUFMLEdBQWdCLEVBQWhCO0FBQ0EsU0FBS3dDLGFBQUw7O0FBRUE7OztBQUdBLFNBQUtDLGdCQUFMLEdBQXdCLElBQXhCOztBQUVBLFNBQUtDLGFBQUwsR0FBcUJDLElBQXJCLENBQTBCLFVBQUNDLElBQUQsRUFBVTtBQUNuQzs7Ozs7Ozs7O0FBU0EsVUFBS0MsT0FBTCxDQUFhLGNBQWIsRUFBNkJELElBQTdCO0FBQ0EsSUFYRDtBQVlBLFNBQUtFLFlBQUw7O0FBRUEsU0FBS0MsY0FBTDs7QUFFQSxTQUFLQyxhQUFMLEdBQXFCLEtBQXJCO0FBQ0EsU0FBS0MsbUJBQUw7O0FBRUEsU0FBS0MsZ0JBQUwsR0FBd0IsRUFBeEI7O0FBRUE7QUFDQTtBQUNDOzs7OztBQUtBLG1CQU5EOztBQVFDOzs7OztBQUtBLGFBYkQ7O0FBZUM7Ozs7O0FBS0EsYUFwQkQ7O0FBc0JDOzs7OztBQUtBLFVBM0JEOztBQThCQzs7Ozs7QUFLQSxZQW5DRDs7QUFxQ0M7Ozs7O0FBS0Esa0JBMUNEOztBQTRDQzs7Ozs7QUFLQSxpQkFqREQsRUFxREUxRSxPQXJERixDQXFEVSxxQkFBYTtBQUN0QixVQUFLc0MsS0FBTCxDQUFXcUMsRUFBWCxDQUFjQyxTQUFkLEVBQXlCLFlBQU07QUFDOUIsV0FBS1AsT0FBTCxDQUFhTyxTQUFiO0FBQ0EsS0FGRDtBQUdBLElBekREOztBQTJEQSxTQUFLdEMsS0FBTCxDQUFXdUMsR0FBWCxDQUFlLE1BQWYsRUFBdUIsWUFBTTtBQUNuQjs7Ozs7QUFLVCxVQUFLUixPQUFMLENBQWEsV0FBYjtBQUNBLFVBQUtTLFdBQUwsQ0FBaUIsa0JBQWpCO0FBQ0EsSUFSRDs7QUFVQSxTQUFLeEMsS0FBTCxDQUFXcUMsRUFBWCxDQUFjLFlBQWQsRUFBNEIsWUFBTTtBQUNqQyxRQUFJLE1BQUtyQyxLQUFMLENBQVdFLFdBQVgsR0FBeUIsQ0FBN0IsRUFBZ0M7QUFDL0IsV0FBS3NDLFdBQUwsQ0FBaUIsa0JBQWpCO0FBQ0E7O0FBRUQ7Ozs7O0FBS0EsVUFBS1QsT0FBTCxDQUFhLFlBQWIsRUFBMkIsRUFBRVUsTUFBTyxNQUFLekMsS0FBTCxDQUFXRSxXQUFwQixFQUFpQ3dDLFVBQVcsTUFBSzFDLEtBQUwsQ0FBVzBDLFFBQXZELEVBQTNCO0FBRUEsSUFaRDs7QUFjQSxTQUFLMUMsS0FBTCxDQUFXcUMsRUFBWCxDQUFjLFdBQWQsRUFBMkIsWUFBTTtBQUNoQyxVQUFLRyxXQUFMLENBQWlCLGlCQUFqQjs7QUFFQSxVQUFLRyxLQUFMLEdBQWEsSUFBYjtBQUNBOzs7OztBQUtBLFVBQUtaLE9BQUwsQ0FBYSxXQUFiO0FBQ0EsSUFWRDs7QUFZQSxTQUFLL0IsS0FBTCxDQUFXcUMsRUFBWCxDQUFjLFNBQWQsRUFBeUIsWUFBTTtBQUM5QixVQUFLTyxhQUFMO0FBQ0E7Ozs7O0FBS0EsVUFBS2IsT0FBTCxDQUFhLFNBQWI7QUFDQSxJQVJEOztBQVVBLFNBQUsvQixLQUFMLENBQVdxQyxFQUFYLENBQWMsUUFBZCxFQUF3QixZQUFNO0FBQzdCLFVBQUtRLFlBQUw7QUFDQTs7Ozs7QUFLQSxVQUFLZCxPQUFMLENBQWEsUUFBYjtBQUNBLElBUkQ7O0FBVUEsU0FBSy9CLEtBQUwsQ0FBV3FDLEVBQVgsQ0FBYyxjQUFkLEVBQThCLFlBQU07QUFDbkM7Ozs7O0FBS0EsVUFBS04sT0FBTCxDQUFhLGNBQWIsRUFBNkIsRUFBRXZDLFFBQVMsTUFBS1EsS0FBTCxDQUFXUixNQUF0QixFQUE3QjtBQUNBLElBUEQ7O0FBU0EsU0FBS1EsS0FBTCxDQUFXcUMsRUFBWCxDQUFjLGNBQWQsRUFBOEIsVUFBQ1MsQ0FBRCxFQUFJaEIsSUFBSixFQUFhO0FBQzFDLFFBQU1pQixNQUFNakIsS0FBS2lCLEdBQWpCO0FBQ0EsVUFBS3pFLE1BQUwsQ0FBWXlFLEdBQVosR0FBa0JBLEdBQWxCO0FBQ0EsVUFBS2hCLE9BQUwsQ0FBYSxjQUFiO0FBQ0EsSUFKRDs7QUFNQSxTQUFLL0IsS0FBTCxDQUFXcUMsRUFBWCxDQUFjLE1BQWQsRUFBc0IsVUFBQ1MsQ0FBRCxFQUFPO0FBQzVCLFVBQUtOLFdBQUwsQ0FBaUIsaUJBQWpCO0FBQ0EsVUFBS0EsV0FBTCxDQUFpQixrQkFBakI7QUFDQSxVQUFLcEYsUUFBTCxDQUFjLG1CQUFkOztBQUVBOzs7OztBQUtBLFVBQUsyRSxPQUFMLENBQWEsTUFBYjtBQUNBLElBWEQ7O0FBYUEsU0FBSy9CLEtBQUwsQ0FBV3FDLEVBQVgsQ0FBYyxPQUFkLEVBQXVCLFlBQU07QUFDNUIsVUFBS0csV0FBTCxDQUFpQixtQkFBakI7QUFDQSxVQUFLcEYsUUFBTCxDQUFjLGtCQUFkOztBQUVBOzs7OztBQUtBLFVBQUsyRSxPQUFMLENBQWEsT0FBYjtBQUNBLElBVkQ7O0FBWUEsU0FBSy9CLEtBQUwsQ0FBV3FDLEVBQVgsQ0FBYyxTQUFkLEVBQXlCLFlBQU07QUFDOUIsVUFBS1EsWUFBTDs7QUFFQTs7Ozs7QUFLQSxVQUFLZCxPQUFMLENBQWEsU0FBYjtBQUNBLElBVEQ7O0FBV0EsU0FBSy9CLEtBQUwsQ0FBV3FDLEVBQVgsQ0FBYyxZQUFkLEVBQTRCLFlBQU07QUFDakM7Ozs7O0FBS0EsVUFBS04sT0FBTCxDQUFhLFlBQWIsRUFBMkIsRUFBRXRELE1BQU8sTUFBS3VCLEtBQUwsQ0FBV3ZCLElBQXBCLEVBQTNCO0FBQ0EsSUFQRDs7QUFTQSxTQUFLdUIsS0FBTCxDQUFXcUMsRUFBWCxDQUFjLE9BQWQsRUFBdUIsWUFBTTtBQUM1QixVQUFLakYsUUFBTCxDQUFjLGlCQUFkOztBQUVBLFFBQUcsTUFBSytDLE9BQUwsQ0FBYWhDLElBQWhCLEVBQXNCO0FBQ3JCLFdBQUsrQixXQUFMLEdBQW1CLENBQW5CO0FBQ0EsV0FBS0YsS0FBTCxDQUFXZ0QsSUFBWDtBQUNBLEtBSEQsTUFHTyxJQUFJLENBQUMsTUFBS2hELEtBQUwsQ0FBV2lELE1BQWhCLEVBQXdCO0FBQzlCLFdBQUtqRCxLQUFMLENBQVdrRCxLQUFYO0FBQ0E7O0FBRUQ7Ozs7O0FBS0EsVUFBS25CLE9BQUwsQ0FBYSxPQUFiO0FBQ0EsSUFoQkQ7O0FBa0JBLFNBQUsvQixLQUFMLENBQVdxQyxFQUFYLENBQWMsZ0JBQWQsRUFBZ0MsWUFBTTtBQUNyQyxVQUFLUSxZQUFMO0FBQ0E7Ozs7O0FBS0EsVUFBS2QsT0FBTCxDQUFhLGdCQUFiO0FBQ0EsSUFSRDs7QUFVQSxTQUFLL0IsS0FBTCxDQUFXcUMsRUFBWCxDQUFjLFNBQWQsRUFBeUIsWUFBTTtBQUM5QixVQUFLTyxhQUFMOztBQUVBLFVBQUs1QyxLQUFMLENBQVd1QyxHQUFYLENBQWUsWUFBZixFQUE2QjtBQUFBLFlBQU0sTUFBS00sWUFBTCxFQUFOO0FBQUEsS0FBN0I7O0FBRUE7Ozs7O0FBS0EsVUFBS2QsT0FBTCxDQUFhLFNBQWI7QUFDQSxJQVhEOztBQWFBLFNBQUsvQixLQUFMLENBQVdxQyxFQUFYLENBQWMsT0FBZCxFQUF1QixVQUFDUyxDQUFELEVBQUloQixJQUFKLEVBQWE7QUFDbkMsVUFBS2EsS0FBTCxHQUFhLHlCQUFlYixLQUFLcUIsSUFBcEIsQ0FBYjtBQUNBLElBRkQ7O0FBSUEsU0FBS25ELEtBQUwsQ0FBV29ELElBQVgsR0FBa0J2QixJQUFsQixDQUF1QixZQUFNO0FBQzVCOzs7OztBQUtBLFVBQUtFLE9BQUwsQ0FBYSxRQUFiOztBQUVBLFFBQUcsTUFBSzVCLE9BQUwsQ0FBYXNDLElBQWhCLEVBQXNCO0FBQ3JCLFdBQUt2QyxXQUFMLEdBQW1CLE1BQUtDLE9BQUwsQ0FBYXNDLElBQWhDO0FBQ0E7O0FBRUQsUUFBRyxNQUFLekMsS0FBTCxDQUFXcUQsR0FBWCxJQUFrQixJQUFsQixJQUEwQixNQUFLbEQsT0FBTCxDQUFhbEMsUUFBMUMsRUFBb0Q7QUFDbkQsV0FBSytFLElBQUw7QUFDQTtBQUNELElBZkQ7O0FBa0JBLFNBQUtYLEVBQUwsQ0FBUSxrQkFBUixFQUE0QixNQUFLaUIsbUJBQUwsQ0FBeUJDLElBQXpCLE9BQTVCO0FBQ0EsU0FBS2xCLEVBQUwsQ0FBUSxPQUFSLEVBQWlCLE1BQUttQixRQUFMLENBQWNELElBQWQsT0FBakI7QUFDQSxTQUFLbEIsRUFBTCxDQUFRLFVBQVIsRUFBb0IsTUFBS29CLFVBQUwsQ0FBZ0JGLElBQWhCLE9BQXBCO0FBQ0EsU0FBS2xCLEVBQUwsQ0FBUSxRQUFSLEVBQWtCLE1BQUtxQixTQUFMLENBQWVILElBQWYsT0FBbEI7QUFDQSxTQUFLbEIsRUFBTCxDQUFRLE1BQVIsRUFBZ0IsTUFBS3NCLE9BQUwsQ0FBYUosSUFBYixPQUFoQjtBQUNBLFNBQUtsQixFQUFMLENBQVEsT0FBUixFQUFpQixNQUFLdUIsUUFBTCxDQUFjTCxJQUFkLE9BQWpCOztBQUVBLHlCQUFFTSxRQUFGLEVBQVl4QixFQUFaLENBQWUsd0JBQWN5QixnQkFBN0IsRUFBK0MsTUFBS0Msd0JBQUwsQ0FBOEJSLElBQTlCLE9BQS9DO0FBaFU2QjtBQWlVN0I7Ozs7OEJBTVVTLEksRUFBTTdELE8sRUFBUztBQUN6QixRQUFNOEQsU0FBU2xELE9BQU9tRCxZQUFQLENBQW9CRixJQUFwQixDQUFmO0FBQ0EsU0FBS0csT0FBTCxHQUFlLElBQUlGLE1BQUosQ0FBVyxJQUFYLEVBQWlCOUQsT0FBakIsQ0FBZjtBQUNBOztBQUVEOzs7Ozs7Ozs7Ozs7MEJBU087QUFDTixXQUFPLEtBQUtILEtBQUwsQ0FBV2dELElBQVgsRUFBUDtBQUNBOztBQUVEOzs7Ozs7OzsyQkFLUTtBQUNQLFdBQU8sS0FBS2hELEtBQUwsQ0FBV2tELEtBQVgsRUFBUDtBQUNBOztBQUVEOzs7Ozs7OztnQ0FLYTtBQUNaLFdBQU8sS0FBS2xELEtBQUwsQ0FBV0MsVUFBWCxFQUFQO0FBQ0E7O0FBRUQ7Ozs7Ozs7OzBCQUtPO0FBQ04sV0FBTyxLQUFLRCxLQUFMLENBQVdvRSxJQUFYLEVBQVA7QUFDQTs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7OzZCQVlVQyxJLEVBQWU7QUFBQSxzQ0FBTkMsSUFBTTtBQUFOQSxTQUFNO0FBQUE7O0FBQ3hCLFNBQUtqQyxFQUFMLDJCQUFtQmdDLElBQW5CLFNBQThCQyxJQUE5Qjs7QUFFQSxXQUFPLElBQVA7QUFDQTs7QUFFRDs7Ozs7Ozs7Ozs7aUNBUWNDLE8sRUFBUztBQUN0QixRQUFNdkUsUUFBUSxLQUFLQSxLQUFuQjtBQUNBLFFBQUd1RSxXQUFXLElBQWQsRUFBb0I7QUFDcEIsUUFBTTlCLE9BQU8sS0FBS3ZDLFdBQWxCO0FBQ0EsUUFBTXpCLE9BQU8sS0FBS0EsSUFBbEI7QUFDQSxRQUFNK0YsV0FBVyxLQUFLdkIsTUFBdEI7O0FBRUFqRCxVQUFNcUQsR0FBTixHQUFZa0IsT0FBWjtBQUNBLFNBQUtFLFlBQUwsR0FBb0JoRyxJQUFwQjtBQUNBLFNBQUt5QixXQUFMLEdBQW1CdUMsSUFBbkI7O0FBRUEsUUFBRytCLFFBQUgsRUFBYTtBQUNaLFVBQUt0QixLQUFMO0FBQ0EsS0FGRCxNQUVPO0FBQ04sVUFBS0YsSUFBTDtBQUNBO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7NkJBVVVxQixJLEVBQWU7QUFBQSx1Q0FBTkMsSUFBTTtBQUFOQSxTQUFNO0FBQUE7O0FBQ3hCLFNBQUtqQyxFQUFMLDJCQUFtQmdDLElBQW5CLFNBQThCQyxJQUE5Qjs7QUFFQSxXQUFPLElBQVA7QUFDQTs7QUFFRDs7Ozs7Ozs7OzZCQU1VO0FBQ1QsUUFBTUksTUFBTSxJQUFJLGlCQUFFQyxRQUFOLEVBQVo7O0FBRUEsUUFBSSxLQUFLQyxLQUFMLEtBQWVDLFNBQW5CLEVBQThCO0FBQzdCSCxTQUFJSSxPQUFKLENBQVksS0FBS0YsS0FBakI7QUFDQSxZQUFPRixJQUFJSyxPQUFKLEVBQVA7QUFDQTs7QUFFRCxRQUFJLE9BQU8sS0FBSzVFLE9BQUwsQ0FBYTJCLElBQXBCLEtBQTZCLFFBQWpDLEVBQTJDO0FBQzFDLFlBQU8saUJBQUVrRCxJQUFGLENBQU87QUFDYmpDLFdBQU0sS0FBSzVDLE9BQUwsQ0FBYTJCLElBRE47QUFFYm1ELGNBQVMsS0FGSTtBQUdiQyxnQkFBVztBQUhFLE1BQVAsRUFJSkgsT0FKSSxFQUFQO0FBTUEsS0FQRCxNQU9PLElBQUksUUFBTyxLQUFLNUUsT0FBTCxDQUFhMkIsSUFBcEIsTUFBNkIsUUFBakMsRUFBMkM7QUFDakQ0QyxTQUFJSSxPQUFKLENBQVksS0FBSzNFLE9BQUwsQ0FBYTJCLElBQXpCO0FBQ0EsWUFBTzRDLElBQUlLLE9BQUosRUFBUDtBQUNBO0FBQ0Q7OztvQ0FFZ0I7QUFDaEIsV0FBTyxLQUFLSSxPQUFMLEdBQ0x0RCxJQURLLENBQ0EsZ0JBQVE7QUFDYixZQUFPQyxLQUFLdkIsUUFBWjtBQUNBLEtBSEssQ0FBUDtBQUlBOztBQUVEOzs7Ozs7Ozs7dUNBTW9CO0FBQ25CLFFBQU02RSwrQkFBTjs7QUFFQSxRQUFHQSxNQUFNQyxpQkFBVCxFQUE0QjtBQUMzQjtBQUNBLFVBQUtsSSxPQUFMLENBQWEsQ0FBYixFQUFnQmlJLE1BQU1DLGlCQUF0Qjs7QUFFQTs7Ozs7QUFLQSxVQUFLdEQsT0FBTCxDQUFhLGtCQUFiLEVBQWlDLElBQWpDO0FBQ0EsS0FWRCxNQVVPLElBQUksS0FBSy9CLEtBQUwsQ0FBV3NGLGtCQUFYLEVBQUosRUFBcUM7QUFDM0MsVUFBS3RGLEtBQUwsQ0FBV3VGLGVBQVg7QUFDQTtBQUNEOztBQUVEOzs7Ozs7Ozs7b0NBTWlCO0FBQ2hCLFFBQU1ILCtCQUFOOztBQUVBLFFBQUdBLE1BQU1JLGNBQVQsRUFBeUI7QUFDeEIzQixjQUFTdUIsTUFBTUksY0FBZjtBQUNBLEtBRkQsTUFFTyxJQUFJLEtBQUt4RixLQUFMLENBQVdzRixrQkFBWCxFQUFKLEVBQXFDO0FBQzNDLFVBQUt0RixLQUFMLENBQVd3RixjQUFYO0FBQ0E7O0FBRUQsU0FBS3pELE9BQUwsQ0FBYSxrQkFBYixFQUFpQyxLQUFqQztBQUVBOztBQUVEOzs7Ozs7Ozs7c0NBTW1CO0FBQ2xCLFFBQUcsS0FBS3NDLElBQUwsS0FBYyxZQUFqQixFQUErQjtBQUM5QixVQUFLbUIsY0FBTDtBQUNBLEtBRkQsTUFFTztBQUNOLFVBQUtILGlCQUFMO0FBQ0E7QUFDRDs7QUFFRDs7Ozs7Ozs7OzsrQkFPWXJCLEksRUFBTTtBQUNqQixXQUFPLEtBQUs5RSxRQUFMLENBQWM4RSxJQUFkLENBQVA7QUFDQTs7QUFFRDs7Ozs7Ozs7OzhCQU1XO0FBQ1YsV0FBTyxLQUFLN0csT0FBTCxDQUFhc0ksS0FBYixFQUFQO0FBQ0E7O0FBRUQ7Ozs7Ozs7Ozs7cUNBT2tCbEYsUSxFQUFVO0FBQzNCLFFBQUlBLFlBQVksSUFBWixJQUFvQkEsU0FBU21GLE1BQVQsS0FBb0IsQ0FBNUMsRUFBK0M7QUFDOUM7QUFDQTtBQUNELFFBQUlDLGNBQWMsR0FBR2xJLE1BQUgsQ0FBVThDLFFBQVYsQ0FBbEI7QUFDQSxTQUFLLElBQUlxRixJQUFJLENBQWIsRUFBZ0JBLElBQUlELFlBQVlELE1BQWhDLEVBQXdDRSxHQUF4QyxFQUE2QztBQUM1QyxTQUFJQyxtQkFBSjtBQUNBLFNBQUlELElBQUtELFlBQVlELE1BQVosR0FBcUIsQ0FBOUIsRUFBa0M7QUFDakNHLG1CQUFhRixZQUFZQyxJQUFFLENBQWQsRUFBaUJFLEtBQTlCO0FBQ0EsTUFGRCxNQUVPO0FBQ05ELG1CQUFhLEtBQUs3RixLQUFMLENBQVcwQyxRQUF4QjtBQUNBO0FBQ0RpRCxpQkFBWUMsQ0FBWixFQUFlRyxHQUFmLEdBQXFCRixVQUFyQjtBQUNBO0FBQ0QsV0FBT0YsV0FBUDtBQUNBOztBQUVEOzs7Ozs7Ozs7Ozs7O0FBZ0tBOzs7OzttQ0FLZ0I7QUFDZixRQUFNeEYsVUFBVSxLQUFLQSxPQUFyQjtBQUNBLFFBQU1oRCxVQUFVLEtBQUs4RCxRQUFyQjs7QUFFQSxTQUFLOUQsT0FBTCxHQUFlLHFCQUFTLEtBQVQsQ0FBZjs7QUFHQSxTQUFLQSxPQUFMLEdBQWUsS0FBS0EsT0FBTCxDQUNiQyxRQURhLENBQ0osVUFESSxFQUViNEksSUFGYSxDQUVSLFVBRlEsRUFFSSxDQUZKLEVBR2JDLEdBSGEsQ0FHVCxPQUhTLEVBR0E5RixRQUFRc0YsS0FBUixJQUFpQixNQUhqQixFQUliUSxHQUphLENBSVQsV0FKUyxFQUlJOUYsUUFBUXNGLEtBSlosQ0FBZjs7QUFNQTs7Ozs7O0FBTUEsU0FBS1MsWUFBTCxHQUFvQiwyQkFBaUIsSUFBakIsQ0FBcEI7O0FBR0E7Ozs7OztBQU1BLFNBQUtDLFVBQUwsR0FBa0IseUJBQWUsSUFBZixDQUFsQjs7QUFFQTtBQUNBLFNBQUtDLE1BQUwsR0FBYyxzQkFBRSxTQUFGLEVBQ1poSixRQURZLENBQ0gsMkJBREcsRUFFWmlKLE1BRlksQ0FFTCxtQkFBUyxJQUFULEVBQWU7QUFDdEJDLGVBQVcsU0FEVztBQUV0QkMsZ0JBQVk7QUFGVSxLQUFmLEVBR0xwSixPQUxVLENBQWQ7O0FBUUE7Ozs7OztBQU1BLFNBQUtpRCxVQUFMLEdBQWtCLHlCQUFlLElBQWYsQ0FBbEI7O0FBRUEsU0FBS29HLGNBQUwsR0FBc0IscUJBQVMsS0FBVCxFQUFnQjtBQUNyQ0QsZ0JBQVk7QUFEeUIsS0FBaEIsRUFHckJGLE1BSHFCLENBR2QsS0FBS0gsWUFBTCxDQUFrQi9JLE9BSEosRUFJckJrSixNQUpxQixDQUlkLEtBQUtGLFVBQUwsQ0FBZ0JoSixPQUpGLEVBS3JCa0osTUFMcUIsQ0FLZCxLQUFLRCxNQUxTLEVBTXJCQyxNQU5xQixDQU1kLEtBQUtqRyxVQUFMLENBQWdCakQsT0FORixDQUF0Qjs7QUFRQSxTQUFLbUIsTUFBTCxHQUFjLHFCQUFXLElBQVgsQ0FBZDtBQUNBLFNBQUtrSSxjQUFMLENBQW9CSCxNQUFwQixDQUEyQixLQUFLL0gsTUFBTCxDQUFZbkIsT0FBdkM7O0FBR0EsUUFBTXNKLFlBQVksbUJBQVMsSUFBVCxFQUFlO0FBQ2hDM0csU0FBSyxZQUFDQyxNQUFELEVBQVk7QUFDaEIsVUFBTUMsUUFBUUQsT0FBT0MsS0FBckI7QUFDQSxhQUFPLDBCQUFjQSxNQUFNMEMsUUFBTixHQUFpQjFDLE1BQU1FLFdBQXJDLENBQVA7QUFDQTtBQUorQixLQUFmLENBQWxCOztBQU9BLFFBQUcsS0FBS0MsT0FBTCxDQUFhdUcsU0FBaEIsRUFBMkI7QUFDMUJDLGFBQVFDLElBQVIsQ0FBYSx3RUFBYjtBQUNBOztBQUVELFNBQUtDLFdBQUwsR0FBbUIscUJBQVMsS0FBVCxFQUFnQjtBQUNsQ04sZ0JBQVk7QUFEc0IsS0FBaEIsRUFHbEJGLE1BSGtCLENBR1gscUJBQVMsS0FBVCxFQUFnQjtBQUN2QkUsZ0JBQVksaUJBRFc7QUFFdkJPLFdBQU8sS0FBSzNHLE9BQUwsQ0FBYTRHLEtBQWIsSUFBc0I7QUFGTixLQUFoQixDQUhXLEVBT2xCVixNQVBrQixDQU9YLHFCQUFTLEtBQVQsRUFBZ0I7QUFDdkJFLGdCQUFZLHNCQURXO0FBRXZCTyxXQUFPLEtBQUszRyxPQUFMLENBQWFOLFdBQWIsSUFBNEIsS0FBS00sT0FBTCxDQUFhdUcsU0FBekMsSUFBc0Q7QUFGdEMsS0FBaEIsQ0FQVyxFQVdsQkwsTUFYa0IsQ0FXWCxxQkFBUyxLQUFULEVBQWdCO0FBQ3ZCRSxnQkFBWSxnQkFEVztBQUV2Qk87QUFGdUIsS0FBaEIsRUFHTFQsTUFISyxDQUdFSSxVQUFVdEosT0FIWixDQVhXLENBQW5COztBQWdCQSxTQUFLK0QsWUFBTCxHQUFvQixzQkFBRSxTQUFGLEVBQ2xCOUQsUUFEa0IsQ0FDVCxpQkFEUyxFQUVsQmlKLE1BRmtCLENBRVgsS0FBS0csY0FGTSxFQUdsQkgsTUFIa0IsQ0FHWCxLQUFLUSxXQUhNLENBQXBCOztBQUtBLFNBQUsxSixPQUFMLEdBQWUsS0FBS0EsT0FBTCxDQUNia0osTUFEYSxDQUNOLEtBQUtuRixZQURDLENBQWY7O0FBR0EsU0FBSzlELFFBQUwsQ0FBYyxrQkFBZDtBQUNBLFNBQUtBLFFBQUwsQ0FBYyxrQkFBZDs7QUFFQSw0QkFBYztBQUNiLFVBQUtBLFFBQUwsQ0FBYyxrQkFBZDtBQUNBOztBQUVELDZCQUFlO0FBQ2QsVUFBS0EsUUFBTCxDQUFjLG1CQUFkO0FBQ0E7O0FBRUQsNEJBQWM7QUFDYixVQUFLQSxRQUFMLENBQWMsa0JBQWQ7QUFDQTs7QUFJRCxRQUFHK0MsUUFBUTZHLGdCQUFYLEVBQTZCO0FBQzVCLFVBQUtDLGlCQUFMLEdBQXlCLHNCQUFFOUcsUUFBUTZHLGdCQUFWLENBQXpCO0FBQ0E7O0FBRUQ3SixZQUFRK0osTUFBUixDQUFlLEtBQUsvSixPQUFwQjtBQUNBLFNBQUtxSixjQUFMLENBQW9CSCxNQUFwQixDQUEyQmxKLE9BQTNCOztBQUVBLFdBQU8sS0FBS0EsT0FBWjtBQUNBOztBQUVEOzs7Ozs7Ozs7Ozt5Q0FRc0I7QUFDckI7QUFDQSxRQUFPQSxVQUFVLEtBQUs4RCxRQUF0QjtBQUNBLFFBQUk5RCxXQUFXLElBQVgsSUFBbUJBLFFBQVF1SSxNQUFSLEtBQW1CLENBQTFDLEVBQTZDO0FBQzVDLFlBQU8sRUFBUDtBQUNBOztBQUVELFFBQUl5QixjQUFjLENBQ2pCLFFBRGlCLEVBRWpCLE9BRmlCLEVBR2pCLFFBSGlCLEVBSWpCLFVBSmlCLEVBS2pCLE1BTGlCLEVBTWpCLE9BTmlCLEVBT2pCLFNBUGlCLEVBU2pCQyxNQVRpQixDQVNWLFVBQUNDLEdBQUQsRUFBTXhKLElBQU4sRUFBZTtBQUN0QixTQUFNeUosTUFBTW5LLFFBQVE2SSxJQUFSLENBQWFuSSxJQUFiLENBQVo7QUFDQSxTQUFHeUosT0FBTyxJQUFWLEVBQWdCO0FBQ2ZELFVBQUl4SixJQUFKLElBQVlWLFFBQVE2SSxJQUFSLENBQWFuSSxJQUFiLENBQVo7QUFDQTtBQUNELFlBQU93SixHQUFQO0FBQ0EsS0FmaUIsRUFlZixFQWZlLENBQWxCOztBQWlCQUYsZ0JBQVlJLE9BQVosR0FBc0IsRUFBdEI7O0FBRUE7QUFDQSxRQUFHcEssUUFBUTZJLElBQVIsQ0FBYSxLQUFiLENBQUgsRUFBd0I7QUFDdkJtQixpQkFBWTlELEdBQVosR0FBa0I7QUFDakJOLFdBQU01RixRQUFRNkksSUFBUixDQUFhLEtBQWIsQ0FEVztBQUVqQmUsYUFBUTVKLFFBQVE2SSxJQUFSLENBQWEsY0FBYixLQUFnQzdJLFFBQVE2SSxJQUFSLENBQWEsT0FBYixDQUFoQyxJQUF5RDtBQUZoRCxNQUFsQjtBQUlBOztBQUVEO0FBQ0E7QUFDQTdJLFlBQVFxSyxJQUFSLENBQWEsUUFBYixFQUF1QkMsSUFBdkIsQ0FBNEIsVUFBQzdCLENBQUQsRUFBSS9ILElBQUosRUFBYTtBQUN4Q0EsWUFBTyxzQkFBRUEsSUFBRixDQUFQO0FBQ0EsU0FBRyxDQUFDQSxLQUFLbUksSUFBTCxDQUFVLGNBQVYsQ0FBSixFQUErQjtBQUM5QjtBQUNBO0FBQ0RtQixpQkFBWUksT0FBWixHQUFzQkosWUFBWUksT0FBWixDQUFvQjlKLE1BQXBCLENBQTJCO0FBQ2hEc0YsV0FBTWxGLEtBQUttSSxJQUFMLENBQVUsS0FBVixDQUQwQztBQUVoRGUsYUFBUWxKLEtBQUttSSxJQUFMLENBQVUsY0FBVixLQUE2Qm5JLEtBQUttSSxJQUFMLENBQVUsT0FBVixDQUE3QixJQUFtRDtBQUZYLE1BQTNCLENBQXRCO0FBS0EsS0FWRDs7QUFZQSxXQUFPbUIsV0FBUDtBQUNBOztBQUVEOzs7Ozs7Ozs7OztrQ0FRZU8sSyxFQUFPO0FBQ3JCLFFBQUdBLFNBQVMsSUFBWixFQUFrQjtBQUNqQkEsYUFBUSxLQUFLMUgsS0FBTCxDQUFXUixNQUFuQjtBQUNBO0FBQ0QsUUFBTUEsU0FBU2tJLEtBQWY7O0FBRUEsUUFBSWxJLFNBQVMsS0FBS1csT0FBTCxDQUFhWCxNQUFiLENBQW9CQyxTQUFqQyxFQUE0QztBQUMzQyxZQUFPLFlBQVA7QUFDQSxLQUZELE1BRU8sSUFBSWlJLFFBQVEsR0FBWixFQUFpQjtBQUN2QixZQUFPLGFBQVA7QUFDQSxLQUZNLE1BRUE7QUFDTixZQUFPLFdBQVA7QUFDQTtBQUNEOzs7a0NBRWNDLEksRUFBTTtBQUNwQixRQUFHLEtBQUtwSCxRQUFSLEVBQWtCO0FBQ2pCLFVBQUtBLFFBQUwsQ0FBY3FILE9BQWQsR0FBd0JELElBQXhCO0FBQ0E7QUFDRCxRQUFHLEtBQUtFLGVBQVIsRUFBeUI7QUFDeEIsVUFBS0EsZUFBTCxDQUFxQkQsT0FBckIsR0FBK0JELElBQS9CO0FBQ0E7QUFDRDs7QUFJRDs7Ozs7Ozs7OztrQ0FPZTtBQUFBOztBQUNkLFFBQU1SLGNBQWMsS0FBS1csbUJBQUwsRUFBcEI7QUFDQSxRQUFJQyxnQkFBZ0IsRUFBcEI7O0FBRUEsUUFBSSxLQUFLNUcsWUFBTCxDQUFrQjZHLE1BQWxCLElBQTRCakgsT0FBT2tILFNBQVAsQ0FBaUIsS0FBSzlHLFlBQUwsQ0FBa0I2RyxNQUFuQyxDQUFoQyxFQUE0RTtBQUMzRUQscUJBQWdCaEgsT0FBT2tILFNBQVAsQ0FBaUIsS0FBSzlHLFlBQUwsQ0FBa0I2RyxNQUFuQyxFQUEyQzdILE9BQTNEO0FBQ0E7O0FBR0Q7QUFDQSxTQUFLQSxPQUFMLEdBQWUsaUJBQUUrSCxNQUFGLENBQVMsSUFBVCxFQUFlLEVBQWYsRUFBbUJuSyxjQUFuQixFQUFtQ2dLLGFBQW5DLEVBQWtEWixXQUFsRCxFQUErRCxLQUFLaEcsWUFBcEUsQ0FBZjs7QUFFQSxRQUFHLEtBQUtoQixPQUFMLENBQWFvSCxPQUFiLElBQXdCLENBQUNZLE1BQU1DLE9BQU4sQ0FBYyxLQUFLakksT0FBTCxDQUFhb0gsT0FBM0IsQ0FBNUIsRUFBaUU7QUFDaEUsVUFBS3BILE9BQUwsQ0FBYW9ILE9BQWIsR0FBdUIsQ0FBQyxLQUFLcEgsT0FBTCxDQUFhb0gsT0FBZCxDQUF2QjtBQUNBOztBQUVELFFBQUcsT0FBTyxLQUFLcEgsT0FBTCxDQUFha0QsR0FBcEIsS0FBNEIsUUFBL0IsRUFBeUM7QUFDeEMsVUFBS2xELE9BQUwsQ0FBYWtELEdBQWIsR0FBbUIsRUFBRU4sS0FBTSxLQUFLNUMsT0FBTCxDQUFha0QsR0FBckIsRUFBbkI7QUFDQTs7QUFFRCxRQUFHLEtBQUtsRCxPQUFMLENBQWFrRCxHQUFiLElBQW9CLElBQXBCLElBQTRCLEtBQUtsRCxPQUFMLENBQWFvSCxPQUFiLENBQXFCN0IsTUFBckIsR0FBOEIsQ0FBN0QsRUFBZ0U7QUFDL0QsVUFBS3ZGLE9BQUwsQ0FBYWtELEdBQWIsR0FBbUIsS0FBS2xELE9BQUwsQ0FBYW9ILE9BQWIsQ0FBcUIsQ0FBckIsQ0FBbkI7QUFDQTs7QUFHRDs7O0FBR0E7QUFDQSxTQUFLcEgsT0FBTCxDQUFhakIsUUFBYixHQUF3QixpQkFBRWdKLE1BQUYsQ0FBUyxFQUFULEVBQWFuSyxlQUFlbUIsUUFBNUIsRUFBc0M2SSxjQUFjN0ksUUFBcEQsRUFBOEQsS0FBS2lDLFlBQUwsQ0FBa0JqQyxRQUFoRixDQUF4Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBakNjLCtCQWtDSDhFLElBbENHO0FBbUNiLFNBQUksQ0FBQyxPQUFLN0QsT0FBTCxDQUFha0ksZUFBYixDQUE2QkMsY0FBN0IsQ0FBNEN0RSxJQUE1QyxDQUFMLEVBQXdEO0FBQUE7QUFBQTtBQUN4RCxTQUFNdUUsb0JBQW9CLE9BQUtwSSxPQUFMLENBQWFrSSxlQUFiLENBQTZCckUsSUFBN0IsQ0FBMUI7QUFDQXVFLHVCQUFrQjdLLE9BQWxCLENBQTBCLFVBQUM4SyxHQUFELEVBQU03SyxLQUFOLEVBQWdCO0FBQ3pDLFVBQUksT0FBS3dDLE9BQUwsQ0FBYWpCLFFBQWIsQ0FBc0I4RSxJQUF0QixLQUErQixPQUFLN0QsT0FBTCxDQUFhakIsUUFBYixDQUFzQjhFLElBQXRCLEVBQTRCckcsS0FBNUIsQ0FBbkMsRUFBdUU7QUFDdEUsY0FBS3dDLE9BQUwsQ0FBYWpCLFFBQWIsQ0FBc0I4RSxJQUF0QixFQUE0QnJHLEtBQTVCLElBQXFDTixhQUFhLE9BQUs4QyxPQUFMLENBQWFqQixRQUFiLENBQXNCOEUsSUFBdEIsRUFBNEJyRyxLQUE1QixDQUFiLEVBQWlENkssR0FBakQsQ0FBckM7QUFDQTtBQUNELE1BSkQ7QUFyQ2E7O0FBa0NkLFNBQUssSUFBTXhFLElBQVgsSUFBbUIsS0FBSzdELE9BQUwsQ0FBYWtJLGVBQWhDLEVBQWlEO0FBQUEsc0JBQXRDckUsSUFBc0M7O0FBQUE7QUFRaEQ7O0FBRUQsUUFBSSxLQUFLN0QsT0FBTCxDQUFhNkgsTUFBYixJQUF1QmpILE9BQU9rSCxTQUFQLENBQWlCLEtBQUs5SCxPQUFMLENBQWE2SCxNQUE5QixDQUEzQixFQUFrRTtBQUNqRWpILFlBQU9rSCxTQUFQLENBQWlCLEtBQUs5SCxPQUFMLENBQWE2SCxNQUE5QixFQUFzQ1MsV0FBdEM7QUFDQTtBQUNEOztBQUVEOzs7Ozs7OzttQ0FLZ0I7QUFBQSxlQUNJLENBQUMsUUFBRCxFQUFXLFlBQVgsQ0FESjs7QUFDZiw2Q0FBNkM7QUFBeEMsU0FBTXpFLGVBQU47QUFDSixTQUFJLENBQUMsS0FBSzdELE9BQUwsQ0FBYWpCLFFBQWIsQ0FBc0JvSixjQUF0QixDQUFxQ3RFLElBQXJDLENBQUwsRUFBaUQ7QUFDakQsU0FBTXVFLG9CQUFvQixnQ0FBc0IsSUFBdEIsRUFBNEIsRUFBRXZFLFVBQUYsRUFBNUIsQ0FBMUI7O0FBRUEsVUFBSzdHLE9BQUwsQ0FBYWtKLE1BQWIsQ0FBb0JrQyxrQkFBa0JwTCxPQUF0QztBQUNBOztBQUVELFFBQUksS0FBSytCLFFBQUwsQ0FBY0MsTUFBZCxJQUF3QixJQUE1QixFQUFrQztBQUNqQyxVQUFLRCxRQUFMLENBQWNDLE1BQWQsQ0FBcUJ1SixNQUFyQixHQUE4QixJQUE5QjtBQUNBO0FBQ0Q7OztvQ0FHZ0I7QUFBQTs7QUFFaEIsUUFBTUMsZUFBZSxTQUFmQSxZQUFlLENBQUM3RixDQUFELEVBQUk4RixPQUFKLEVBQWdCO0FBQ3BDLFlBQU8sQ0FBRTlGLEVBQUUrRixLQUFGLEtBQVlELFFBQVFqSixHQUFyQixJQUE4Qm1ELEVBQUVuRCxHQUFGLEtBQVVpSixRQUFRakosR0FBakQsS0FDSixDQUFDLENBQUNpSixRQUFRdEksUUFBVixLQUF1QndDLEVBQUV4QyxRQURyQixJQUVKLENBQUMsQ0FBQ3NJLFFBQVFFLE9BQVYsS0FBc0JoRyxFQUFFZ0csT0FGM0I7QUFHQSxLQUpEOztBQU1BLFNBQUszTCxPQUFMLENBQWFrRixFQUFiLENBQWdCLHlCQUFoQixFQUEyQyxVQUFDUyxDQUFELEVBQU87QUFDakQsWUFBSzNDLE9BQUwsQ0FBYVQsVUFBYixDQUF3QmhDLE9BQXhCLENBQWdDLG1CQUFXOztBQUUxQyxVQUFHaUwsYUFBYTdGLENBQWIsRUFBZ0I4RixPQUFoQixDQUFILEVBQTZCO0FBQzVCOUYsU0FBRWlHLGNBQUY7QUFDQUgsZUFBUTlJLEVBQVIsQ0FBVyxNQUFYO0FBQ0EsY0FBTyxLQUFQO0FBQ0E7QUFFRCxNQVJEO0FBU0EsS0FWRDtBQVdBOztBQUVEOzs7Ozs7Ozs7bUNBTWdCO0FBQUE7O0FBQ2YsUUFBTTRFLE1BQU0saUJBQUVDLFFBQUYsRUFBWjtBQUNBLFFBQUksS0FBS3hFLE9BQUwsQ0FBYTJCLElBQWIsSUFBcUIsSUFBekIsRUFBK0I7QUFDOUI0QyxTQUFJc0UsTUFBSixDQUFXLElBQVg7QUFDQSxLQUZELE1BRU87QUFDTixVQUFLQyxjQUFMLEdBQXNCQyxJQUF0QixDQUEyQixvQkFBWTtBQUN0QzNJLDhDQUFlQSxRQUFmOztBQUVBLFVBQU00SSxtQkFBb0IsT0FBS2xDLGlCQUFMLElBQTBCLE9BQUtBLGlCQUFMLENBQXVCdkIsTUFBdkIsR0FBZ0MsQ0FBcEY7O0FBRUEsVUFBSW5GLFlBQVksSUFBWixJQUFvQkEsU0FBU21GLE1BQVQsS0FBb0IsQ0FBNUMsRUFBK0M7QUFDOUNoQixXQUFJc0UsTUFBSixDQUFXLElBQVg7QUFDQTtBQUNBOztBQUVEekksaUJBQVcsT0FBSzZJLGlCQUFMLENBQXVCN0ksUUFBdkIsQ0FBWDs7QUFFQSxhQUFLQSxRQUFMLEdBQWdCLHVCQUFhLE1BQWIsRUFBbUI7QUFDbEM4SSxjQUFROUksUUFEMEI7QUFFbEMrSSx1QkFBaUJILGdCQUZpQjtBQUdsQ0ksbUJBQWE7QUFIcUIsT0FBbkIsQ0FBaEI7O0FBTUEsYUFBS3JJLFlBQUwsQ0FBa0JtRixNQUFsQixDQUF5QixPQUFLOUYsUUFBTCxDQUFjcEQsT0FBdkM7O0FBRUEsVUFBSWdNLGdCQUFKLEVBQXNCO0FBQ3JCLGNBQUt0QixlQUFMLEdBQXVCLHVCQUFhLE1BQWIsRUFBbUI7QUFDekN3QixlQUFROUk7QUFEaUMsUUFBbkIsQ0FBdkI7QUFHQSxjQUFLMEcsaUJBQUwsQ0FBdUJaLE1BQXZCLENBQThCLE9BQUt3QixlQUFMLENBQXFCMUssT0FBbkQ7QUFDQTtBQUNEdUgsVUFBSUksT0FBSixDQUFZLEVBQUV1RSxPQUFROUksUUFBVixFQUFaO0FBQ0EsTUEzQkQ7QUE0QkE7O0FBRUQsV0FBT21FLElBQUlLLE9BQUosRUFBUDtBQUNBOztBQUVEOzs7Ozs7Ozs7O2tDQU9lO0FBQ2QsUUFBSSxLQUFLNUUsT0FBTCxDQUFhUyxPQUFqQixFQUEwQjtBQUN6QixVQUFLLElBQU1vRCxJQUFYLElBQW1CLEtBQUs3RCxPQUFMLENBQWFTLE9BQWhDLEVBQXlDO0FBQ3hDLFVBQUcsQ0FBQyxLQUFLVCxPQUFMLENBQWFTLE9BQWIsQ0FBcUIwSCxjQUFyQixDQUFvQ3RFLElBQXBDLENBQUosRUFBK0M7QUFDL0MsVUFBTXdGLGdCQUFnQixLQUFLckosT0FBTCxDQUFhUyxPQUFiLENBQXFCb0QsSUFBckIsQ0FBdEI7QUFDQSxVQUFHLEtBQUtBLElBQUwsQ0FBSCxFQUFlO0FBQ2QsV0FBR3dGLGFBQUgsRUFBa0I7QUFDakIsYUFBS3hGLElBQUwsRUFBV3dGLGFBQVg7QUFDQTtBQUNELE9BSkQsTUFJTztBQUNON0MsZUFBUWhFLEtBQVIsZUFBeUJxQixJQUF6QjtBQUNBO0FBQ0Q7QUFDRDs7QUFFRCxXQUFPLElBQVA7QUFDQTs7QUFHRDs7Ozs7O3lDQUdzQjtBQUFBOztBQUNyQixRQUFJeUYsd0JBQUo7QUFDQSxRQUFJQyxrQkFBSjtBQUNBLFFBQUlDLGtCQUFKOztBQUVBLFFBQU1DLGNBQWMsU0FBZEEsV0FBYyxDQUFDOUcsQ0FBRCxFQUFPO0FBQzFCLFNBQUdBLEVBQUUrRyxPQUFGLEtBQWNILFNBQWQsSUFBMkI1RyxFQUFFZ0gsT0FBRixLQUFjSCxTQUE1QyxFQUF1RDtBQUN0REQsa0JBQVk1RyxFQUFFK0csT0FBZDtBQUNBRixrQkFBWTdHLEVBQUVnSCxPQUFkO0FBQ0EsYUFBSzVILGFBQUwsR0FBcUIsSUFBckI7QUFDQTtBQUNELEtBTkQ7O0FBUUEsUUFBTTZILGNBQWMsU0FBZEEsV0FBYyxDQUFDakgsQ0FBRCxFQUFPO0FBQzFCLFlBQUtaLGFBQUwsR0FBcUIsSUFBckI7O0FBRUE7QUFDQThILG1CQUFjUCxlQUFkOztBQUVBQSx1QkFBa0JRLFlBQVksWUFBTTtBQUNuQyxhQUFLL0gsYUFBTCxHQUFxQixJQUFyQjtBQUNBLE1BRmlCLEVBRWYsR0FGZSxDQUFsQjtBQUdBLEtBVEQ7O0FBV0EsUUFBTWdJLFlBQVksU0FBWkEsU0FBWSxDQUFDcEgsQ0FBRCxFQUFPO0FBQ3hCLFlBQUtaLGFBQUwsR0FBcUIsSUFBckI7QUFDQThILG1CQUFjUCxlQUFkO0FBQ0EsS0FIRDs7QUFLQSxTQUFLdE0sT0FBTCxDQUFha0YsRUFBYixDQUFnQixXQUFoQixFQUE2QnVILFdBQTdCOztBQUVBLFNBQUt6TSxPQUFMLENBQWFrRixFQUFiLENBQWdCLFdBQWhCLEVBQTZCMEgsV0FBN0I7O0FBRUEsU0FBSzVNLE9BQUwsQ0FBYWtGLEVBQWIsQ0FBZ0IsU0FBaEIsRUFBMkI2SCxTQUEzQjs7QUFFQSxTQUFLL00sT0FBTCxDQUFha0YsRUFBYixDQUFnQixTQUFoQixFQUEyQixVQUFDUyxDQUFEO0FBQUEsWUFBTyxPQUFLWixhQUFMLEdBQXFCLElBQTVCO0FBQUEsS0FBM0I7QUFDQSxTQUFLL0UsT0FBTCxDQUFha0YsRUFBYixDQUFnQixPQUFoQixFQUF5QixVQUFDUyxDQUFEO0FBQUEsWUFBTyxPQUFLWixhQUFMLEdBQXFCLElBQTVCO0FBQUEsS0FBekI7O0FBRUE7QUFDQSxRQUFJaUksMEJBQUo7QUFDQSxRQUFNQyxRQUFRLEtBQUtqSyxPQUFMLENBQWEzQixrQkFBM0I7QUFDQXlMLGdCQUFZLFlBQU07QUFDakIsU0FBSSxPQUFLL0gsYUFBVCxFQUF3Qjs7QUFFdkI7QUFDQSxhQUFLQSxhQUFMLEdBQXFCLEtBQXJCOztBQUVBLGFBQUttSSxVQUFMLEdBQWtCLElBQWxCOztBQUVBQyxtQkFBYUgsaUJBQWI7O0FBRUEsVUFBSUMsUUFBUSxDQUFaLEVBQWU7O0FBRWRELDJCQUFvQkksV0FBVyxZQUFNO0FBQ3BDLFlBQUksQ0FBQyxPQUFLckksYUFBVixFQUF5QjtBQUN4QixnQkFBS21JLFVBQUwsR0FBa0IsS0FBbEI7QUFDQTtBQUNELFFBSm1CLEVBSWpCRCxLQUppQixDQUFwQjtBQUtBO0FBQ0Q7QUFDRCxLQW5CRCxFQW1CRyxHQW5CSDtBQW9CQTs7QUFFRDs7Ozs7Ozs7a0NBS2U7QUFDZCxTQUFLaEksZ0JBQUwsQ0FBc0IxRSxPQUF0QixDQUE4QjtBQUFBLFlBQVE0TSxhQUFhek0sSUFBYixDQUFSO0FBQUEsS0FBOUI7QUFDQSxTQUFLdUUsZ0JBQUwsR0FBd0IsRUFBeEI7QUFDQSxTQUFLSSxXQUFMLENBQWlCLG1CQUFqQjtBQUNBOztBQUVEOzs7Ozs7OzttQ0FLZ0I7QUFBQTs7QUFDZixTQUFLSixnQkFBTCxDQUFzQm9JLElBQXRCLENBQTJCRCxXQUFXLFlBQU07QUFDM0MsWUFBS25OLFFBQUwsQ0FBYyxtQkFBZDtBQUNBLEtBRjBCLEVBRXhCLEdBRndCLENBQTNCO0FBR0E7O0FBR0Q7Ozs7Ozs7Ozs2QkFNVTBGLEMsRUFBRztBQUNaLFNBQUsxRixRQUFMLENBQWMsa0JBQWQ7O0FBRUEsU0FBSytDLE9BQUwsQ0FBYVcsY0FBYixDQUE0QjJKLElBQTVCLENBQWlDLElBQWpDLEVBQXVDM0gsQ0FBdkM7QUFDQTs7QUFHRDs7Ozs7Ozs7OzRCQU1TQSxDLEVBQUc7QUFBQTs7QUFDWHdILGlCQUFhLEtBQUszSSxnQkFBbEI7QUFDQSxRQUFNMUIsYUFBYSxTQUFiQSxVQUFhLEdBQU07QUFDeEIsWUFBSzBCLGdCQUFMLEdBQXdCNEksV0FBVyxZQUFNO0FBQ3hDLGFBQUt2SyxLQUFMLENBQVc3QyxPQUFYLENBQW1CdU4sS0FBbkI7QUFDQSxhQUFLekssVUFBTDtBQUVBLE1BSnVCLEVBSXJCLEdBSnFCLENBQXhCO0FBS0EsS0FORDs7QUFRQTs7Ozs7QUFLQSxRQUFHLDRCQUFjLEtBQUtvRSxJQUFMLEtBQWMsWUFBL0IsRUFBNkM7QUFDNUMsU0FBRyxLQUFLdEUsTUFBTCxDQUFZc0ssVUFBZixFQUEyQjtBQUMxQnBLO0FBQ0E7QUFDRCxLQUpELE1BSU87QUFDTkE7QUFDQTtBQUNEOztBQUVEOzs7Ozs7Ozs7OEJBTVc2QyxDLEVBQUc7QUFDYndILGlCQUFhLEtBQUszSSxnQkFBbEI7QUFDQSxTQUFLaEIsZ0JBQUw7QUFDQTs7QUFFRDs7Ozs7Ozs7O3VDQU1vQm1DLEMsRUFBRzZILEksRUFBTTtBQUM1QixRQUFHQSxJQUFILEVBQVM7QUFDUixVQUFLdEcsSUFBTCxHQUFZLFlBQVo7O0FBRUE7QUFDQSw4QkFBZTtBQUNkLFdBQUt1RyxrQkFBTCxHQUEwQixLQUFLckssUUFBTCxDQUFjcUgsT0FBeEM7QUFDQSxXQUFLckgsUUFBTCxDQUFjcUgsT0FBZCxHQUF3QixLQUF4QjtBQUNBOztBQUVELFVBQUs4QyxLQUFMO0FBQ0EsS0FWRCxNQVVPO0FBQ04sVUFBS3JHLElBQUwsR0FBWSxRQUFaOztBQUVBLDhCQUFlO0FBQ2QsV0FBSzlELFFBQUwsQ0FBY3FILE9BQWQsR0FBd0IsS0FBS2dELGtCQUE3QjtBQUNBOztBQUVEO0FBQ0EsU0FBRyxtRUFBSCxFQUE2QztBQUM1QyxXQUFLMUgsS0FBTDtBQUNBO0FBQ0Q7QUFDRDs7QUFHRDs7Ozs7Ozs7OzZCQU1VO0FBQ1QsU0FBSzlDLFVBQUwsQ0FBZ0JDLElBQWhCLENBQXFCLE1BQXJCO0FBQ0E7O0FBRUQ7Ozs7Ozs7Ozs4QkFNVztBQUNWLFNBQUtELFVBQUwsQ0FBZ0JDLElBQWhCLENBQXFCLE9BQXJCO0FBQ0E7Ozs4Q0FFMEI7QUFDMUIsUUFBTStFLCtCQUFOO0FBQ0EsUUFBTXVGLE9BQU8sQ0FBQyxDQUFDOUcsU0FBU3VCLE1BQU15RixpQkFBZixDQUFmO0FBQ0EsU0FBSzlJLE9BQUwsQ0FBYSxrQkFBYixFQUFpQzRJLElBQWpDO0FBQ0E7Ozt1QkE3OUJZO0FBQ1osV0FBTyxLQUFLeEcsT0FBWjtBQUNBOzs7dUJBMlBpQjtBQUNqQixXQUFPLEtBQUtuRSxLQUFMLENBQVdFLFdBQWxCO0FBQ0EsSTtxQkFFZXdILEssRUFBTztBQUN0QixTQUFLMUgsS0FBTCxDQUFXRSxXQUFYLEdBQXlCd0gsS0FBekI7QUFDQTs7QUFFRDs7Ozs7Ozs7Ozs7dUJBUWU7QUFDZCxXQUFPLEtBQUsxSCxLQUFMLENBQVcwQyxRQUFsQjtBQUNBOztBQUVEOzs7Ozs7Ozs7O3VCQU9ZO0FBQ1gsV0FBTyxLQUFLMUMsS0FBTCxDQUFXOEssS0FBbEI7QUFDQTs7QUFFRDs7Ozs7Ozs7Ozs7O3VCQVNZO0FBQ1gsV0FBTyxLQUFLQyxNQUFMLElBQWUsSUFBdEI7QUFDQSxJO3FCQUVTckQsSyxFQUFPO0FBQ2hCLFFBQUlBLFVBQVUsSUFBZCxFQUFvQjtBQUNuQixVQUFLcUQsTUFBTCxHQUFjLElBQWQ7QUFDQSxVQUFLdkksV0FBTCxDQUFpQixpQkFBakI7QUFDQSxTQUFHLEtBQUswRCxZQUFSLEVBQXNCO0FBQ3JCLFdBQUtBLFlBQUwsQ0FBa0IvSSxPQUFsQixDQUEwQjZOLElBQTFCO0FBQ0E7QUFDRCxZQUFPLElBQVA7QUFDQTtBQUNELFNBQUtELE1BQUwsR0FBYyx5QkFBZXJELEtBQWYsQ0FBZDs7QUFFQSxTQUFLdEssUUFBTCxDQUFjLGlCQUFkOztBQUVBOzs7Ozs7Ozs7QUFTQSxTQUFLMkUsT0FBTCxDQUFhLE9BQWIsRUFBc0IsRUFBRVksT0FBUSxLQUFLb0ksTUFBZixFQUF0Qjs7QUFFQSxXQUFPLElBQVA7QUFDQTs7O3VCQUVVO0FBQ1YsV0FBTyxLQUFLL0ssS0FBTCxDQUFXdkIsSUFBbEI7QUFDQSxJO3FCQUVRaUosSyxFQUFPO0FBQ2YsU0FBSzFILEtBQUwsQ0FBV3ZCLElBQVgsR0FBa0JpSixLQUFsQjtBQUNBOzs7dUJBRVk7QUFDWixXQUFPLEtBQUsxSCxLQUFMLENBQVdpRCxNQUFsQjtBQUNBOztBQUVEOzs7Ozs7Ozs7O3VCQU9hO0FBQ1osV0FBTyxLQUFLOUYsT0FBTCxDQUFhZSxNQUFiLEVBQVA7QUFDQTs7QUFFRDs7Ozs7Ozs7O3VCQU1rQjtBQUNqQixXQUFPLEtBQUs4QixLQUFMLENBQVc5QixNQUFsQjtBQUNBOztBQUdEOzs7Ozs7Ozt1QkFLaUI7QUFDaEIsV0FBTyxLQUFLK00sV0FBTCxJQUFvQixLQUEzQjtBQUNBLEk7cUJBRWN2RCxLLEVBQU87QUFDckIsUUFBR0EsVUFBVSxLQUFLd0QsYUFBbEIsRUFBaUM7QUFDaEMsVUFBS0QsV0FBTCxHQUFtQnZELEtBQW5CO0FBQ0EsVUFBS3lELFdBQUwsQ0FBaUIsdUJBQWpCLEVBQTBDekQsS0FBMUM7QUFDQTs7Ozs7QUFLQSxVQUFLM0YsT0FBTCxDQUFhLFlBQWI7QUFDQTtBQUNEOztBQUdEOzs7Ozs7Ozs7O3VCQU9XO0FBQ1YsV0FBTyxLQUFLUixLQUFaO0FBQ0EsSTtxQkFFUThDLEksRUFBTTtBQUNkLFFBQUcsS0FBS0EsSUFBTCxJQUFhLElBQWhCLEVBQXNCO0FBQ3JCLFVBQUs3QixXQUFMLGdCQUE4QixLQUFLNkIsSUFBbkM7QUFDQSxVQUFLdEMsT0FBTCxjQUF3QixLQUFLc0MsSUFBN0I7QUFDQTs7QUFFRCxTQUFLOUMsS0FBTCxHQUFhOEMsSUFBYjtBQUNBLFNBQUtsSCxPQUFMLENBQWFDLFFBQWIsZ0JBQW1DaUgsSUFBbkM7QUFDQSxTQUFLdEMsT0FBTCxjQUF3QnNDLElBQXhCOztBQUVBLFdBQU8sSUFBUDtBQUNBOzs7Ozs7QUE4a0JGOzs7Ozs7Ozs7Ozs7Ozs7OztBQWVBdEQsUUFBT3FLLE1BQVAsR0FBZ0IsVUFBU3BILElBQVQsRUFBZWxFLEVBQWYsRUFBbUI7QUFDbENpQixTQUFPc0ssU0FBUCxDQUFpQnJILElBQWpCLElBQXlCbEUsRUFBekI7QUFDQSxFQUZEOztBQUlBOzs7Ozs7QUFNQWlCLFFBQU9tRCxZQUFQLEdBQXNCLG9CQUFVQSxZQUFoQzs7QUFFQTs7Ozs7Ozs7Ozs7QUFXQW5ELFFBQU91SyxpQkFBUCxHQUEyQixvQkFBVUEsaUJBQXJDOztBQUVBOzs7Ozs7OztBQVFBdkssUUFBT3dLLFVBQVAsR0FBb0Isa0JBQVFBLFVBQTVCOztBQUVBOzs7Ozs7Ozs7OztBQVdBeEssUUFBTzdELGVBQVAsR0FBeUIsa0JBQVFBLGVBQWpDOztBQUdBOzs7Ozs7OztBQVFBNkQsUUFBT3lLLGFBQVA7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkF6SyxRQUFPaUgsTUFBUCxHQUFnQixVQUFTaEUsSUFBVCxFQUFlcUQsR0FBZixFQUFvQjtBQUNuQyxNQUFHLFFBQU9BLEdBQVAseUNBQU9BLEdBQVAsT0FBZSxRQUFsQixFQUE0QjtBQUMzQnRHLFVBQU8wSyxRQUFQLENBQWdCekgsSUFBaEIsSUFBd0IsaUJBQUVrRSxNQUFGLENBQVMsRUFBVCxFQUFhO0FBQ3BDL0gsYUFBVSxFQUQwQjtBQUVwQ3NJO0FBRm9DLElBQWIsRUFHckJwQixHQUhxQixDQUF4QjtBQUlBLEdBTEQsTUFLTyxJQUFJLE9BQU9BLEdBQVAsS0FBZSxVQUFuQixFQUErQjtBQUNyQ3RHLFVBQU8wSyxRQUFQLENBQWdCekgsSUFBaEIsSUFBd0JxRCxLQUF4QjtBQUNBO0FBQ0QsRUFURDs7QUFZQXRHLFFBQU9rSCxTQUFQLEdBQW1CLFVBQVNqRSxJQUFULEVBQWU7QUFDakMsTUFBR2pELE9BQU8wSyxRQUFQLENBQWdCekgsSUFBaEIsQ0FBSCxFQUEwQjtBQUN6QixVQUFPakQsT0FBTzBLLFFBQVAsQ0FBZ0J6SCxJQUFoQixDQUFQO0FBQ0EsR0FGRCxNQUVPO0FBQ04yQyxXQUFRaEUsS0FBUixhQUF3QnFCLElBQXhCO0FBQ0EsVUFBTyxJQUFQO0FBQ0E7QUFDRCxFQVBEOztBQVVBakQsUUFBTzBLLFFBQVAsR0FBa0IsRUFBbEI7O0FBRUExSyxRQUFPMkssTUFBUDs7QUFFQTNLLFFBQU9NLGNBQVAsR0FBd0IsVUFBU3NLLEdBQVQsRUFBYztBQUNyQyxNQUFNQyxnQkFBZ0Isc0JBQUUsUUFBRixFQUFZWixJQUFaLEVBQXRCO0FBQ0Esd0JBQUUsTUFBRixFQUFVYSxPQUFWLENBQWtCRCxjQUFjdkYsTUFBZCxDQUFxQnNGLEdBQXJCLENBQWxCO0FBQ0EsU0FBT0MsYUFBUDtBQUNBLEVBSkQ7O0FBTUE3SyxRQUFPTyxhQUFQLEdBQXVCLG1CQUFBd0ssQ0FBUSxFQUFSLENBQXZCOztBQUVBO0FBQ0EvSyxRQUFPZ0wsT0FBUCxHQUFpQixTQUFqQjs7QUFFQUMsUUFBT0MsQ0FBUCxDQUFTbk0sRUFBVCxDQUFZb00sUUFBWixHQUF1QixVQUFVL0wsT0FBVixFQUFtQjtBQUN6QyxTQUFPLEtBQUtzSCxJQUFMLENBQVUsWUFBWTtBQUM1QixVQUFPLElBQUkxRyxNQUFKLENBQVcsc0JBQUUsSUFBRixDQUFYLEVBQW9CWixPQUFwQixDQUFQO0FBQ0EsR0FGTSxDQUFQO0FBR0EsRUFKRDs7QUFNQTZMLFFBQU9DLENBQVAsQ0FBU0MsUUFBVCxHQUFvQm5MLE1BQXBCOztBQUVBaUwsUUFBT0UsUUFBUCxHQUFrQm5MLE1BQWxCOztBQUdBOzs7OztBQUtBQSxRQUFPcUssTUFBUCxDQUFjLFlBQWQsRUFBNEIsVUFBUzVCLGFBQVQsRUFBd0I7QUFBQTs7QUFDbkQsTUFBTXpKLFNBQVMsSUFBZjs7QUFFQTtBQUNBO0FBQ0EsTUFBTUksVUFBVSxpQkFBRStILE1BQUYsQ0FBUyxFQUFULEVBQWE7QUFDNUJ6QyxVQUFRLE1BRG9CO0FBRTVCMEcsZUFBYSxvQkFBQ3BNLE1BQUQsRUFBWTtBQUN4QixRQUFNcU0sU0FBU3JNLE9BQU81QyxPQUFQLENBQWVpUCxNQUFmLEdBQXdCQyxHQUF4QixHQUNadE0sT0FBTzVDLE9BQVAsQ0FBZW1QLFdBQWYsRUFEWSxHQUVadk0sT0FBT3dNLFdBQVAsQ0FBbUIsUUFBbkIsRUFBNkJwUCxPQUE3QixDQUFxQ2UsTUFBckMsRUFGSDs7QUFJQSxXQUFPa08sTUFBUDtBQUNBO0FBUjJCLEdBQWIsRUFTYixLQUFLak0sT0FBTCxDQUFhVSxVQVRBLEVBU1kySSxhQVRaLENBQWhCOztBQVdBLE1BQU10SyxXQUFXLGdDQUFzQixJQUF0QixFQUE0QjtBQUM1QzhFLFNBQU8sTUFEcUM7QUFFNUM5RSxhQUFXaUIsUUFBUWpCLFFBRnlCO0FBRzVDc04sbUJBQWlCO0FBQ2hCQyxhQUFVO0FBQ1RDLGNBQVU7QUFERDtBQURNO0FBSDJCLEdBQTVCLENBQWpCOztBQVVBO0FBQ0EsT0FBSzdGLFdBQUwsQ0FBaUJSLE1BQWpCLENBQXdCbkgsU0FBUy9CLE9BQWpDOztBQUVBOzs7OztBQUtBLE1BQU1nUCxhQUFhLFNBQWJBLFVBQWEsR0FBTTtBQUN4QixPQUFJLGlCQUFFUSxVQUFGLENBQWF4TSxRQUFRZ00sVUFBckIsQ0FBSixFQUFzQztBQUNyQyxXQUFPaE0sUUFBUWdNLFVBQVIsQ0FBbUJwTSxNQUFuQixDQUFQO0FBQ0E7O0FBRUQsVUFBT0ksUUFBUWdNLFVBQWY7QUFDQSxHQU5EOztBQVFBLE1BQU1TLFdBQVcsU0FBWEEsUUFBVyxHQUFNO0FBQ3RCLFVBQU96TSxRQUFRc0YsS0FBUixJQUFpQixPQUFLdEksT0FBTCxDQUFhc0ksS0FBYixFQUF4QjtBQUNBLEdBRkQ7O0FBS0EsT0FBS29ILGlCQUFMLEdBQXlCLFVBQUMvSixDQUFELEVBQUlnSyxLQUFKLEVBQWM7QUFDdEMsT0FBTUMsWUFBWSxzQkFBRWYsTUFBRixFQUFVZSxTQUFWLEVBQWxCOztBQUVBO0FBQ0E7QUFDQSxPQUFHRCxLQUFILEVBQVU7QUFDVCxXQUFLRSxjQUFMLENBQW9CRixLQUFwQjtBQUNBOztBQUVELE9BQUdDLFlBQVlaLFlBQWYsRUFBNkI7QUFDNUIsV0FBS2MsY0FBTCxDQUFvQkgsS0FBcEI7QUFDQSxJQUZELE1BRU87QUFDTixXQUFLRSxjQUFMO0FBQ0E7QUFDRCxHQWREOztBQWdCQSxPQUFLQyxjQUFMLEdBQXNCLFVBQUNILEtBQUQsRUFBVztBQUNoQyxPQUFJLENBQUNBLEtBQUQsSUFBVSxPQUFLekksSUFBTCxLQUFjLE1BQTVCLEVBQW9DO0FBQ25DO0FBQ0E7O0FBRUQ7QUFDQSxVQUFLbEgsT0FBTCxDQUFhOEksR0FBYixDQUFpQixhQUFqQixFQUFnQyxPQUFLTyxjQUFMLENBQW9CdEksTUFBcEIsRUFBaEM7O0FBRUEsVUFBS21HLElBQUwsR0FBVyxNQUFYO0FBQ0EsR0FURDs7QUFXQSxPQUFLMkksY0FBTCxHQUFzQixVQUFDRixLQUFELEVBQVc7QUFDaEMsT0FBRyxDQUFDQSxLQUFELElBQVUsT0FBS3pJLElBQUwsS0FBYyxNQUEzQixFQUFtQztBQUNsQztBQUNBO0FBQ0QsVUFBS0EsSUFBTCxHQUFZLFFBQVo7QUFDQSxHQUxEOztBQU9BLHdCQUFFMkgsTUFBRixFQUFVM0osRUFBVixDQUFhLFFBQWIsRUFBdUIsS0FBS3dLLGlCQUFMLENBQXVCdEosSUFBdkIsQ0FBNEIsSUFBNUIsQ0FBdkI7QUFDQSx3QkFBRXlJLE1BQUYsRUFBVTNKLEVBQVYsQ0FBYSxRQUFiLEVBQXVCLEtBQUt3SyxpQkFBTCxDQUF1QnRKLElBQXZCLENBQTRCLElBQTVCLENBQXZCO0FBQ0EsT0FBS2xCLEVBQUwsQ0FBUSxRQUFSLEVBQWtCLFVBQUNTLENBQUQ7QUFBQSxVQUFPLE9BQUsrSixpQkFBTCxDQUF1Qi9KLENBQXZCLEVBQTBCLElBQTFCLENBQVA7QUFBQSxHQUFsQjs7QUFFQSxPQUFLb0ssU0FBTCxDQUFlLE1BQWYsRUFBdUIsWUFBTTtBQUM1QixVQUFLaE0sWUFBTCxDQUFrQitFLEdBQWxCLENBQXNCLFdBQXRCLEVBQW1DMkcsVUFBbkM7QUFDQSxVQUFLMUwsWUFBTCxDQUFrQitFLEdBQWxCLENBQXNCLFFBQXRCLEVBQWdDLE9BQUtqRyxLQUFMLENBQVc5QixNQUEzQztBQUNBLEdBSEQ7O0FBS0EsT0FBS2lQLFNBQUwsQ0FBZSxNQUFmLEVBQXVCLFlBQU07QUFDNUIsVUFBS2pNLFlBQUwsQ0FBa0IrRSxHQUFsQixDQUFzQixXQUF0QixFQUFtQyxFQUFuQztBQUNBLFVBQUsvRSxZQUFMLENBQWtCK0UsR0FBbEIsQ0FBc0IsUUFBdEIsRUFBZ0MsRUFBaEM7O0FBRUEsVUFBSzlJLE9BQUwsQ0FBYThJLEdBQWIsQ0FBaUIsYUFBakIsRUFBZ0MsRUFBaEM7QUFDQSxHQUxEOztBQVFBLE9BQUs0RyxpQkFBTDtBQUNBLEVBbkdEOztBQXNHQTlMLFFBQU9pSCxNQUFQLENBQWMsS0FBZCxFQUFxQixtQkFBQThELENBQVEsRUFBUixFQUE0QjlELE1BQWpEO0FBQ0FqSCxRQUFPaUgsTUFBUCxDQUFjLFFBQWQsRUFBd0IsbUJBQUE4RCxDQUFRLEVBQVIsRUFBK0I5RCxNQUF2RDtBQUNBakgsUUFBT2lILE1BQVAsQ0FBYyxLQUFkLEVBQXFCLG1CQUFBOEQsQ0FBUSxFQUFSLEVBQTRCOUQsTUFBakQ7QUFDQWpILFFBQU9pSCxNQUFQLENBQWMsWUFBZCxFQUE0QixtQkFBQThELENBQVEsRUFBUixFQUFtQzlELE1BQS9EO0FBQ0FqSCxRQUFPaUgsTUFBUCxDQUFjLE1BQWQsRUFBc0IsbUJBQUE4RCxDQUFRLEVBQVIsRUFBNkI5RCxNQUFuRDs7QUFFQW9GLFFBQU9DLE9BQVAsR0FBaUJ0TSxNQUFqQixDOzs7Ozs7QUNqMERBLG9COzs7Ozs7QUNBQTtBQUNBOzs7Ozs7Ozs7Ozs7QUFJQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7Ozs7Ozs7OztLQWNNdU0sTzs7O0FBRUwsbUJBQVl2TixNQUFaLEVBQW9CSSxPQUFwQixFQUE2QjtBQUFBOztBQUFBLGlIQUN0QkosTUFEc0IsRUFDZEksT0FEYzs7QUFFNUIsU0FBS29OLGFBQUw7QUFDQSxTQUFLYixPQUFMLEdBQWUsTUFBS3ZNLE9BQUwsQ0FBYXVNLE9BQWIsSUFBd0IsSUFBeEIsR0FBOEIsTUFBS3ZNLE9BQUwsQ0FBYXVNLE9BQTNDLEdBQXFELElBQXBFOztBQUVBLFNBQUszTSxNQUFMLENBQVlzQyxFQUFaLENBQWUsUUFBZixFQUF5QixVQUFDUyxDQUFELEVBQU87QUFDL0IsVUFBSzRKLE9BQUwsR0FBZSxNQUFLdk0sT0FBTCxDQUFhdU0sT0FBYixJQUF3QixJQUF4QixHQUE4QixNQUFLdk0sT0FBTCxDQUFhdU0sT0FBM0MsR0FBcUQsS0FBcEU7QUFDQSxJQUZEOztBQUlBLFNBQUt2UCxPQUFMLENBQWFrRixFQUFiLENBQWdCO0FBQ2ZtTCxXQUFRLE1BQUtDLE9BQUwsQ0FBYWxLLElBQWIsT0FETztBQUVmbUssU0FBTSxNQUFLRCxPQUFMLENBQWFsSyxJQUFiO0FBRlMsSUFBaEI7O0FBS0EsU0FBS3hELE1BQUwsQ0FBWXNDLEVBQVosQ0FBZSxRQUFmLEVBQXlCLE1BQUt2QixjQUFMLENBQW9CeUMsSUFBcEIsT0FBekI7QUFkNEI7QUFlNUI7O0FBRUQ7Ozs7Ozs7bUNBR2dCO0FBQ2YsUUFBSSxLQUFLcEQsT0FBTCxDQUFhbUcsUUFBakIsRUFBMkI7QUFDMUIsVUFBS3FILElBQUwsR0FBWSxtQkFBUyxLQUFLNU4sTUFBZCxFQUFzQjtBQUNqQ3VHLGdCQUFXLEtBQUtuRyxPQUFMLENBQWFtRztBQURTLE1BQXRCLENBQVo7QUFHQTtBQUNELFFBQUlzSCxRQUFRO0FBQ1g3RyxZQUFRLEtBQUs1RyxPQUFMLENBQWE0RztBQURWLEtBQVo7QUFHQSxTQUFLNUosT0FBTCxHQUFlLDZCQUFNLEtBQUtnRCxPQUFMLENBQWEwTixHQUFiLElBQW9CLFFBQTFCLFdBQ2J6USxRQURhLENBQ0osS0FBSzBRLGFBQUwsRUFESSxFQUViekgsTUFGYSxDQUVOLEtBQUtzSCxJQUFMLElBQWEsS0FBS0EsSUFBTCxDQUFVeFEsT0FGakIsRUFHYjZJLElBSGEsQ0FHUjRILEtBSFEsQ0FBZjs7QUFLQSxXQUFPLEtBQUt6USxPQUFaO0FBQ0E7O0FBRUQ7Ozs7OzttQ0FHZ0I7QUFDZixRQUFJSyxzQkFBb0IsS0FBSzJDLE9BQUwsQ0FBYW9HLFNBQWpDLHdIQUFKO0FBQ0E7Ozs7QUFJQSxRQUFHLENBQUMsS0FBS3hHLE1BQUwsQ0FBWWdPLFFBQVosQ0FBcUIsa0JBQXJCLENBQUosRUFBOEM7QUFDN0N2USxlQUFVLHFCQUFWO0FBQ0E7QUFDRCxXQUFPQSxNQUFQO0FBQ0E7O0FBRUQ7Ozs7Ozs7O0FBZ0JBOzs7OzsyQkFLU3NGLEMsRUFBRztBQUNYQSxNQUFFaUcsY0FBRjtBQUNBLFFBQUksS0FBSzJELE9BQVQsRUFBa0I7QUFDakIsWUFBTyxLQUFQO0FBQ0E7QUFDRCxTQUFLM00sTUFBTCxDQUFZZ0MsT0FBWixDQUFvQixjQUFwQixFQUFvQyxFQUFFMEssU0FBVSxJQUFaLEVBQXBDOztBQUVBLFFBQUksT0FBTyxLQUFLdE0sT0FBTCxDQUFhc04sT0FBcEIsS0FBZ0MsVUFBcEMsRUFBZ0Q7QUFDL0MsVUFBS3ROLE9BQUwsQ0FBYXNOLE9BQWIsQ0FBcUJoRCxJQUFyQixDQUEwQixJQUExQixFQUFnQ3VELFNBQWhDO0FBQ0E7QUFDRDs7O2tDQUdlbEwsQyxFQUFHaEIsSSxFQUFNLENBRXhCOzs7cUJBakNPNEYsSyxFQUFPO0FBQ2QsU0FBS3lELFdBQUwsQ0FBaUIsY0FBakIsRUFBaUN6RCxLQUFqQztBQUNBOzs7cUJBRVdBLEssRUFBTztBQUNsQixTQUFLdUcsUUFBTCxHQUFnQnZHLEtBQWhCO0FBQ0EsU0FBS3lELFdBQUwsQ0FBaUIsVUFBakIsRUFBNkJ6RCxLQUE3QjtBQUNBLEk7dUJBRWE7QUFDYixXQUFPLEtBQUt1RyxRQUFaO0FBQ0E7OzttQ0F3QnNCakssSSxFQUFNeUksTyxFQUFTO0FBQ3JDLFFBQUd6SSxRQUFRLElBQVgsRUFBaUI7QUFDaEI7QUFDQTs7QUFFRCxRQUFHc0osUUFBUVksU0FBUixJQUFxQixJQUF4QixFQUE4QjtBQUM3QlosYUFBUVksU0FBUixHQUFvQixFQUFwQjtBQUNBOztBQUVEWixZQUFRWSxTQUFSLENBQWtCbEssSUFBbEIsSUFBMEJ5SSxPQUExQjs7QUFFQSxXQUFPQSxPQUFQO0FBQ0E7Ozs4QkFFaUJ6SSxJLEVBQU07QUFDdkIsUUFBR0EsUUFBUSxJQUFYLEVBQWlCO0FBQ2hCO0FBQ0E7O0FBRUQsUUFBR3NKLFFBQVFZLFNBQVIsSUFBcUJaLFFBQVFZLFNBQVIsQ0FBa0JsSyxJQUFsQixDQUF4QixFQUFpRDtBQUNoRCxZQUFPc0osUUFBUVksU0FBUixDQUFrQmxLLElBQWxCLENBQVA7QUFDQTtBQUNEOzs7MEJBRWFqRSxNLEVBQVFpRSxJLEVBQU03RCxPLEVBQVM7QUFDcEMsUUFBSWdPLGVBQWUsS0FBSzVDLFVBQUwsQ0FBZ0J2SCxJQUFoQixDQUFuQjtBQUNBLFFBQUdtSyxnQkFBZ0IsSUFBbkIsRUFBeUI7QUFDeEJ4SCxhQUFRaEUsS0FBUixjQUF5QnFCLElBQXpCO0FBQ0EsWUFBTyxJQUFQO0FBQ0E7O0FBRUQsV0FBTyxJQUFJbUssWUFBSixDQUFpQnBPLE1BQWpCLEVBQXlCSSxPQUF6QixDQUFQO0FBQ0E7Ozs7OztBQUlGLHFCQUFVbUwsaUJBQVYsQ0FBNEIsU0FBNUIsRUFBdUNnQyxPQUF2QztBQUNBQSxTQUFRcFEsZUFBUixDQUF3QixTQUF4QixFQUFtQ29RLE9BQW5DO21CQUNlQSxPOzs7Ozs7QUN6SmY7QUFDQTs7Ozs7Ozs7OztBQUlBOzs7Ozs7OztBQUVBLEtBQU1jLGdCQUFnQixTQUFoQkEsYUFBZ0IsQ0FBQ0MsTUFBRDtBQUFBLFNBQVlBLE9BQU9DLEtBQVAsQ0FBYSxHQUFiLEVBQWtCbEgsTUFBbEIsQ0FBeUIsVUFBQ21ILEdBQUQsRUFBTXpMLENBQU47QUFBQSxVQUFZeUwscUJBQWtCekwsQ0FBbEIsT0FBWjtBQUFBLEdBQXpCLEVBQTZELEVBQTdELENBQVo7QUFBQSxFQUF0Qjs7QUFFQTs7Ozs7Ozs7Ozs7S0FVTTBMLFM7QUFFTCxxQkFBWXpPLE1BQVosRUFBb0JJLE9BQXBCLEVBQTZCO0FBQUE7O0FBQzVCQSxhQUFVLEtBQUtBLE9BQUwsR0FBZSxpQkFBRStILE1BQUYsQ0FBUyxFQUFULEVBQWE7QUFDckNsSCxtQkFBZ0I7QUFEcUIsSUFBYixFQUV0QixLQUFLYixPQUZpQixFQUVSQSxPQUZRLENBQXpCOztBQUlBLE9BQUcsQ0FBQ0osTUFBRCxJQUFXLEtBQUtpRCxJQUFMLElBQWEsSUFBM0IsRUFBaUM7QUFDaEMsU0FBS2pELE1BQUwsR0FBY0EsU0FBUyxJQUF2QjtBQUNBLElBRkQsTUFFTztBQUNOLFNBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNBOztBQUVELE9BQUdJLFFBQVFhLGFBQVgsRUFBMEI7O0FBRXpCLFFBQUliLFFBQVFoRCxPQUFaLEVBQXFCO0FBQ3BCLFVBQUtBLE9BQUwsR0FBZWdELFFBQVFoRCxPQUF2QjtBQUNBLEtBRkQsTUFFTztBQUNOLFVBQUs2RCxhQUFMO0FBQ0E7O0FBRUQsUUFBSSxLQUFLN0QsT0FBTCxDQUFhdUksTUFBYixLQUF3QixDQUE1QixFQUErQjtBQUM5QmlCLGFBQVFoRSxLQUFSLDJEQUFzRSxLQUFLeEYsT0FBTCxDQUFhdUksTUFBbkYsU0FBK0YsS0FBS3ZJLE9BQXBHO0FBQ0E7O0FBRUQsU0FBS0EsT0FBTCxDQUFhLENBQWIsRUFBZ0JzUixNQUFoQixHQUF5QixJQUF6QjtBQUNBO0FBQ0Q7O0FBRUQ7Ozs7Ozs7bUNBR2dCOztBQUVmLFdBQU8sRUFBUDtBQUNBOztBQUVEOzs7Ozs7bUNBR2dCO0FBQ2YsV0FBTyxFQUFQO0FBQ0E7O0FBR0Q7Ozs7OzsyQkFHUTtBQUNQLFNBQUt0UixPQUFMLENBQWF1TixLQUFiO0FBQ0E7O0FBR0Q7Ozs7OzswQkFHTztBQUNOLFNBQUt2TixPQUFMLENBQWF1UixJQUFiO0FBQ0E7O0FBR0Q7Ozs7Ozs7Ozs7OzJCQVFRcE0sUyxFQUFvQjtBQUFBOztBQUMzQixRQUFNcU0sUUFBUSxpQkFBRUMsS0FBRixlQUFvQnRNLFNBQXBCLEVBQWlDLEVBQUV2QyxRQUFTLEtBQUtBLE1BQWhCLEVBQWpDLENBQWQ7O0FBRDJCLHNDQUFOdUUsSUFBTTtBQUFOQSxTQUFNO0FBQUE7O0FBRTNCLHFCQUFLbkgsT0FBTCxFQUFhMFIsY0FBYixrQkFBNEJGLEtBQTVCLFNBQXNDckssSUFBdEM7QUFDQSxXQUFPLElBQVA7QUFDQTs7QUFHRDs7Ozs7Ozs7Ozs7c0JBUUd3SyxVLEVBQXFCO0FBQUEsdUNBQU54SyxJQUFNO0FBQU5BLFNBQU07QUFBQTs7QUFDdkIsUUFBRyxPQUFPd0ssVUFBUCxLQUFzQixRQUF0QixJQUFrQ0Esc0JBQXNCQyxNQUEzRCxFQUFtRTtBQUFBOztBQUNsRSx1QkFBSzVSLE9BQUwsRUFBYWtGLEVBQWIsbUJBQWdCK0wsY0FBY1UsVUFBZCxDQUFoQixTQUE4Q3hLLElBQTlDO0FBQ0EsS0FGRCxNQUVPO0FBQUE7O0FBQ05xQyxhQUFRQyxJQUFSLENBQWEsdURBQWI7QUFDQSx1QkFBS3pKLE9BQUwsRUFBYWtGLEVBQWIsbUJBQWdCeU0sVUFBaEIsU0FBK0J4SyxJQUEvQjtBQUNBO0FBQ0QsV0FBTyxJQUFQO0FBQ0E7Ozt1QkFHR3dLLFUsRUFBcUI7QUFBQSx1Q0FBTnhLLElBQU07QUFBTkEsU0FBTTtBQUFBOztBQUN4QixRQUFHLE9BQU93SyxVQUFQLEtBQXNCLFFBQXRCLElBQWtDQSxzQkFBc0JDLE1BQTNELEVBQW1FO0FBQUE7O0FBQ2xFLHVCQUFLNVIsT0FBTCxFQUFhb0YsR0FBYixtQkFBaUI2TCxjQUFjVSxVQUFkLENBQWpCLFNBQStDeEssSUFBL0M7QUFDQSxLQUZELE1BRU87QUFBQTs7QUFDTnFDLGFBQVFDLElBQVIsQ0FBYSx3REFBYjtBQUNBLHVCQUFLekosT0FBTCxFQUFhb0YsR0FBYixtQkFBaUJ1TSxVQUFqQixTQUFnQ3hLLElBQWhDO0FBQ0E7QUFDRCxXQUFPLElBQVA7QUFDQTs7QUFHRDs7Ozs7Ozs7Ozs0QkFPU2lDLFMsRUFBVztBQUNuQixTQUFLcEosT0FBTCxDQUFhQyxRQUFiLENBQXNCbUosU0FBdEI7QUFDQSxXQUFPLElBQVA7QUFDQTs7QUFFRDs7Ozs7Ozs7OzsrQkFPWUEsUyxFQUFXO0FBQ3RCLFNBQUtwSixPQUFMLENBQWFxRixXQUFiLENBQXlCK0QsU0FBekI7QUFDQSxXQUFPLElBQVA7QUFDQTs7QUFFRDs7Ozs7Ozs7Ozs7K0JBUVlBLFMsRUFBV29CLEksRUFBTTtBQUM1QixTQUFLeEssT0FBTCxDQUFhZ08sV0FBYixDQUF5QjVFLFNBQXpCLEVBQW9Db0IsSUFBcEM7QUFDQSxXQUFPLElBQVA7QUFDQTs7OzRCQUVRcEIsUyxFQUFXO0FBQ25CLFdBQU8sS0FBS3BKLE9BQUwsQ0FBYTRRLFFBQWIsQ0FBc0J4SCxTQUF0QixDQUFQO0FBQ0E7OzttQ0E4QjJCO0FBQUE7O0FBQUEsUUFBZHBKLE9BQWMsdUVBQU4sSUFBTTs7QUFDM0IsUUFBR0EsV0FBVyxJQUFkLEVBQW9CO0FBQ25CQSxlQUFVLEtBQUtBLE9BQWY7QUFDQTtBQUNEO0FBQ0EsUUFBSTZSLGFBQWEsQ0FBakI7QUFDQSxRQUFJQyxhQUFhLElBQWpCO0FBQ0EsUUFBSUMsZ0JBQWdCLElBQXBCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQU1DLHVCQUF1QixFQUE3Qjs7QUFFQTtBQUNBLFFBQU1DLHFCQUFxQixHQUEzQjs7QUFFQSxRQUFJQyxtQkFBSjs7QUFFQTs7QUFFQWxTLFlBQVFrRixFQUFSLENBQVcsWUFBWCxFQUF5QixVQUFDc00sS0FBRCxFQUFXO0FBQ25DO0FBQ0EsU0FBSUEsTUFBTVcsT0FBTixDQUFjNUosTUFBZCxLQUF5QixDQUE3QixFQUFnQztBQUMvQjtBQUNBdUosbUJBQWFDLGdCQUFnQjtBQUM1QkssY0FBUVosTUFBTVcsT0FBTixDQUFjLENBQWQsRUFBaUJDLEtBREc7QUFFNUJDLGNBQVFiLE1BQU1XLE9BQU4sQ0FBYyxDQUFkLEVBQWlCRTtBQUZHLE9BQTdCO0FBSUE7QUFDQVIsbUJBQWEsSUFBSVMsSUFBSixHQUFXQyxPQUFYLEVBQWI7QUFDQTtBQUNBTCxtQkFBYSxJQUFiO0FBQ0EsWUFBSzNCLEdBQUwsR0FBVyxJQUFYO0FBQ0E7QUFDRCxLQWREOztBQWdCQXZRLFlBQVFrRixFQUFSLENBQVcsV0FBWCxFQUF3QixVQUFDc00sS0FBRCxFQUFXO0FBQ2xDO0FBQ0EsU0FBSUEsTUFBTVcsT0FBTixDQUFjNUosTUFBZCxHQUF1QixDQUEzQixFQUE4QjtBQUM3QjJKLG1CQUFhLEtBQWI7QUFDQSxNQUZELE1BRU8sSUFBSUosVUFBSixFQUFnQjtBQUN2QjtBQUNBO0FBQ0MsVUFBTVUsUUFBUWhCLE1BQU1XLE9BQU4sQ0FBYyxDQUFkLEVBQWlCQyxLQUFqQixHQUF5Qk4sV0FBV00sS0FBbEQ7QUFDQSxVQUFNSyxRQUFRakIsTUFBTVcsT0FBTixDQUFjLENBQWQsRUFBaUJFLEtBQWpCLEdBQXlCUCxXQUFXTyxLQUFsRDtBQUNBLFVBQU1LLGdCQUFnQkMsS0FBS0MsSUFBTCxDQUFVSixRQUFRQSxLQUFSLEdBQWdCQyxRQUFRQSxLQUFsQyxDQUF0Qjs7QUFFQSxVQUFJakIsTUFBTVcsT0FBTixDQUFjNUosTUFBZCxLQUF5QixDQUE3QixFQUFnQztBQUMvQndKLHVCQUFnQjtBQUNmSyxlQUFRWixNQUFNVyxPQUFOLENBQWMsQ0FBZCxFQUFpQkMsS0FEVjtBQUVmQyxlQUFRYixNQUFNVyxPQUFOLENBQWMsQ0FBZCxFQUFpQkU7QUFGVixRQUFoQjtBQUlBOztBQUVELFVBQUlLLGdCQUFnQlYsb0JBQXBCLEVBQTBDO0FBQ3pDRSxvQkFBYSxLQUFiO0FBQ0EsYUFBSzNCLEdBQUwsR0FBVyxLQUFYO0FBQ0E7QUFDRDtBQUNELEtBdkJEOztBQXlCQSxRQUFNc0MsUUFBUSxTQUFSQSxLQUFRLEdBQU07QUFDbkJYLGtCQUFhLEtBQWI7QUFDQSxXQUFLM0IsR0FBTCxHQUFXLEtBQVg7QUFDQSxLQUhEOztBQUtBO0FBQ0F2USxZQUFRa0YsRUFBUixDQUFXLFlBQVgsRUFBeUIyTixLQUF6QjtBQUNBN1MsWUFBUWtGLEVBQVIsQ0FBVyxhQUFYLEVBQTBCMk4sS0FBMUI7O0FBRUE7QUFDQTtBQUNBN1MsWUFBUWtGLEVBQVIsQ0FBVyxVQUFYLEVBQXVCLFVBQUNzTSxLQUFELEVBQVc7QUFDakNNLGtCQUFhLElBQWI7QUFDQSxXQUFLdkIsR0FBTCxHQUFXLEtBQVg7QUFDQTtBQUNBLFNBQUkyQixlQUFlLElBQW5CLEVBQXlCO0FBQ3pCO0FBQ0MsVUFBTVksWUFBWSxJQUFJUixJQUFKLEdBQVdDLE9BQVgsS0FBdUJWLFVBQXpDOztBQUVBO0FBQ0EsVUFBSWlCLFlBQVliLGtCQUFoQixFQUFvQztBQUNuQztBQUNBVCxhQUFNNUYsY0FBTjtBQUNBOzs7OztBQUtBLFdBQU1tSCxXQUFXLGlCQUFFdEIsS0FBRixDQUFRLEtBQVIsQ0FBakI7QUFDQXNCLGdCQUFTWCxLQUFULEdBQWlCTCxjQUFjSyxLQUEvQjtBQUNBVyxnQkFBU1YsS0FBVCxHQUFpQk4sY0FBY00sS0FBL0I7QUFDQXJTLGVBQVE0RSxPQUFSLENBQWdCbU8sUUFBaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNEO0FBQ0QsS0ExQkQ7QUEyQkE7OztxQkF0R094SSxLLEVBQU8sQ0FBRTs7O3FDQXpCUTFELEksRUFBTW1NLFMsRUFBVztBQUN6QyxRQUFHbk0sUUFBUSxJQUFYLEVBQWlCO0FBQ2hCO0FBQ0E7O0FBRUQsUUFBR3dLLFVBQVU0QixXQUFWLElBQXlCLElBQTVCLEVBQWtDO0FBQ2pDNUIsZUFBVTRCLFdBQVYsR0FBd0IsRUFBeEI7QUFDQTs7QUFFRDVCLGNBQVU0QixXQUFWLENBQXNCcE0sSUFBdEIsSUFBOEJtTSxTQUE5Qjs7QUFFQSxXQUFPQSxTQUFQO0FBQ0E7OztnQ0FFbUJuTSxJLEVBQU07QUFDekIsUUFBR0EsUUFBUSxJQUFYLEVBQWlCO0FBQ2hCO0FBQ0E7O0FBRUQsUUFBR3dLLFVBQVU0QixXQUFWLElBQXlCNUIsVUFBVTRCLFdBQVYsQ0FBc0JwTSxJQUF0QixDQUE1QixFQUF5RDtBQUN4RCxZQUFPd0ssVUFBVTRCLFdBQVYsQ0FBc0JwTSxJQUF0QixDQUFQO0FBQ0E7QUFFRDs7Ozs7O0FBNEdGd0ssV0FBVWxELGlCQUFWLENBQTRCLFdBQTVCLEVBQXlDa0QsU0FBekM7bUJBQ2VBLFM7Ozs7OztBQzNTZjtBQUNBOzs7Ozs7Ozs7Ozs7QUFJQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7OztLQU9NNkIsSTs7O0FBRUwsZ0JBQWF0USxNQUFiLEVBQWlDO0FBQUEsT0FBWkksT0FBWSx1RUFBSixFQUFJOztBQUFBOztBQUNoQ0EsYUFBVSxpQkFBRStILE1BQUYsQ0FBUyxFQUFULEVBQWE7QUFDdEIzQixlQUFZLEVBRFU7QUFFdEJELGNBQVc7QUFGVyxJQUFiLEVBR1BuRyxPQUhPLENBQVY7QUFEZ0Msc0dBSzFCSixNQUwwQixFQUtsQkksT0FMa0I7QUFPaEM7O0FBR0Q7Ozs7Ozs7bUNBR2dCO0FBQ2YsU0FBS21RLE9BQUwsR0FBZXpNLFNBQVMwTSxlQUFULENBQXlCLDRCQUF6QixFQUF1RCxLQUF2RCxDQUFmO0FBQ0EsU0FBS0MsT0FBTCxHQUFlM00sU0FBUzBNLGVBQVQsQ0FBeUIsNEJBQXpCLEVBQXVELEtBQXZELENBQWY7O0FBRUEsU0FBS2pLLFFBQUwsR0FBZ0IsS0FBS21LLFNBQUwsR0FBaUIsS0FBS3RRLE9BQUwsQ0FBYW1HLFFBQTlDO0FBQ0EsU0FBS2tLLE9BQUwsQ0FBYUUsV0FBYixDQUF5QixLQUFLSixPQUE5QjtBQUNBLFNBQUtuVCxPQUFMLEdBQWUsc0JBQUUsU0FBRixFQUNiQyxRQURhLENBQ0osS0FBSzBRLGFBQUwsRUFESSxFQUViOUgsSUFGYSxDQUVSLE9BRlEsRUFFQyxLQUFLN0YsT0FBTCxDQUFhNEcsS0FGZCxFQUdiVixNQUhhLENBR04sc0JBQUUsS0FBS21LLE9BQVAsQ0FITSxDQUFmO0FBSUEsV0FBTyxLQUFLclQsT0FBWjtBQUNBOztBQUVEOzs7Ozs7bUNBR2dCO0FBQ2YsMklBQWlELEtBQUtnRCxPQUFMLENBQWFvRyxTQUE5RDtBQUNBOztBQUVEOzs7Ozs7O3FCQUlhRCxRLEVBQVU7QUFBQTs7QUFDdEIsUUFBSXFLLFNBQVMsQ0FBQyw4QkFBRCxFQUFpQyxNQUFqQyxDQUFiO0FBQ0Esb0JBQUtMLE9BQUwsRUFBYU0saUJBQWIsZ0JBQWtDRCxNQUFsQyxTQUE2QyxLQUFLNVEsTUFBTCxDQUFZSSxPQUFaLENBQW9CNUIsT0FBakUsdUJBQTBGLEtBQUsrSCxRQUEvRjtBQUNBLHFCQUFLZ0ssT0FBTCxFQUFhTyxjQUFiLGlCQUErQkYsTUFBL0IsU0FBMEMsS0FBSzVRLE1BQUwsQ0FBWUksT0FBWixDQUFvQjVCLE9BQTlELHVCQUF1RitILFFBQXZGO0FBQ0EsU0FBS21LLFNBQUwsR0FBaUJuSyxRQUFqQjtBQUNBOztBQUVEOzs7Ozt1QkFJZ0I7QUFDZixXQUFPLEtBQUttSyxTQUFaO0FBQ0E7Ozs7OztBQUlGLHFCQUFVbkYsaUJBQVYsQ0FBNEIsTUFBNUIsRUFBb0MrRSxJQUFwQzttQkFDZUEsSTs7Ozs7O0FDeEVmO0FBQ0E7Ozs7Ozs7Ozs7OztBQUlBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7O0FBRUE7OztLQUdNUyxVOzs7QUFFTCxzQkFBWS9RLE1BQVosRUFBb0JJLE9BQXBCLEVBQTZCO0FBQUE7O0FBQUEsa0hBQ3RCSixNQURzQixFQUNkSSxPQURjO0FBRTVCOzs7O21DQUVlO0FBQ2YsUUFBTTRRLFFBQVEscUJBQVMsS0FBVCxFQUFnQjtBQUM3QnhLLGdCQUFZO0FBRGlCLEtBQWhCLEVBR2JGLE1BSGEsQ0FHTixtQkFBUyxLQUFLdEcsTUFBZCxFQUFzQixFQUFFdUcsVUFBVyxNQUFiLEVBQXRCLEVBQTZDbkosT0FIdkMsQ0FBZDs7QUFLQSxTQUFLQSxPQUFMLEdBQWUscUJBQVMsS0FBVCxFQUFnQjtBQUM5Qm9KLGdCQUFZLEtBQUt1SCxhQUFMO0FBRGtCLEtBQWhCLEVBR2R6SCxNQUhjLENBR1AwSyxLQUhPLENBQWY7O0FBS0EsV0FBTyxLQUFLNVQsT0FBWjtBQUNBOzs7MkJBRU8yRixDLEVBQUc7QUFDVixvSEFBY0EsQ0FBZDtBQUNBOzs7OztBQUtBLFFBQUcsNEJBQWMsS0FBSy9DLE1BQUwsQ0FBWXNFLElBQVosS0FBcUIsWUFBdEMsRUFBb0Q7QUFDbkQsU0FBRyxLQUFLdEUsTUFBTCxDQUFZc0ssVUFBZixFQUEyQjtBQUMxQixXQUFLdEssTUFBTCxDQUFZaUQsSUFBWjtBQUNBO0FBQ0QsS0FKRCxNQUlPO0FBQ04sVUFBS2pELE1BQUwsQ0FBWWlELElBQVo7QUFDQTtBQUVEOztBQUVEOzs7Ozs7bUNBR2dCO0FBQ2YscUNBQStCLEtBQUs3QyxPQUFMLENBQWFvRyxTQUE1QztBQUNBOzs7Ozs7QUFJRixxQkFBVStFLGlCQUFWLENBQTRCLFlBQTVCLEVBQTBDd0YsVUFBMUM7QUFDQSxtQkFBUTVULGVBQVIsQ0FBd0IsYUFBeEIsRUFBdUM0VCxVQUF2QzttQkFDZUEsVTs7Ozs7O0FDOURmO0FBQ0E7Ozs7Ozs7Ozs7U0FlZ0J0RixhLEdBQUFBLGE7U0EyQkF3RixVLEdBQUFBLFU7U0FPQUMsUSxHQUFBQSxRO1NBWUFDLEssR0FBQUEsSztTQUtBQyxJLEdBQUFBLEk7O0FBN0RoQjs7Ozs7O0FBRUE7Ozs7Ozs7O0FBUU8sVUFBUzNGLGFBQVQsQ0FBd0I0RixPQUF4QixFQUFpQ0MsU0FBakMsRUFBNEM7QUFDbEQsTUFBSUMsSUFBSXhCLEtBQUt5QixLQUFMLENBQVdILFVBQVUsSUFBckIsQ0FBUjtBQUNBLE1BQUlJLElBQUkxQixLQUFLeUIsS0FBTCxDQUFXSCxVQUFVLElBQVYsR0FBaUIsRUFBNUIsQ0FBUjtBQUNBLE1BQUlLLElBQUkzQixLQUFLeUIsS0FBTCxDQUFXSCxVQUFVLElBQVYsR0FBaUIsRUFBNUIsQ0FBUjtBQUNBLE1BQUlNLE1BQU0sRUFBVjtBQUNBLE1BQUlGLElBQUksRUFBUixFQUFZO0FBQ1hBLE9BQUksTUFBTUEsQ0FBVjtBQUNBO0FBQ0QsTUFBSUMsSUFBSSxFQUFSLEVBQVk7QUFDWEEsT0FBSSxNQUFNQSxDQUFWO0FBQ0E7QUFDREMsUUFBU0YsQ0FBVCxTQUFjQyxDQUFkOztBQUVBLE1BQUdILElBQUksQ0FBSixJQUFTRCxTQUFaLEVBQXVCO0FBQ3RCSyxTQUFTSixDQUFILFNBQVVJLEdBQWhCO0FBQ0E7QUFDRCxTQUFPQSxHQUFQO0FBQ0E7O0FBR0Q7Ozs7Ozs7QUFPTyxVQUFTVixVQUFULENBQXFCdEwsTUFBckIsRUFBNkJLLEdBQTdCLEVBQWtDO0FBQ3hDO0FBQ0EsTUFBTTRMLFVBQVdqTSxTQUFTSyxHQUFWLElBQWtCLENBQWxDO0FBQ0EsU0FBUTRMLFdBQVcsQ0FBWixHQUFpQixDQUFqQixHQUFxQkEsT0FBNUI7QUFDQTs7QUFHTSxVQUFTVixRQUFULEdBQW9DO0FBQUEsTUFBbEJwRCxHQUFrQix1RUFBZCxLQUFjO0FBQUEsTUFBUCtELEtBQU87O0FBQzFDLE1BQUdBLFNBQVNBLE1BQU1yTCxTQUFsQixFQUE2QjtBQUM1QnFMLFNBQU0sT0FBTixJQUFpQkEsTUFBTXJMLFNBQXZCO0FBQ0EsVUFBT3FMLE1BQU1yTCxTQUFiO0FBQ0E7QUFDRCxTQUFPLDRCQUFNc0gsR0FBTixTQUFlK0QsS0FBZixDQUFQO0FBQ0E7O0FBR0Q7OztBQUdPLFVBQVNWLEtBQVQsQ0FBZXBLLElBQWYsRUFBcUIsQ0FFM0I7O0FBR00sVUFBU3FLLElBQVQsR0FBZ0IsQ0FBRTs7QUFFbEIsS0FBTVUsZ0RBQXFCLFlBQVc7QUFDNUMsTUFBSXJVLGVBQUo7O0FBRUEsU0FBTyxZQUFXOztBQUVqQixPQUFHQSxVQUFVLElBQWIsRUFBbUI7QUFDbEIsV0FBT0EsTUFBUDtBQUNBOztBQUVELE9BQU1zVSxRQUFRLHNCQUFFLFNBQUYsRUFBYTdMLEdBQWIsQ0FBaUI7QUFDOUI4TCxnQkFBYSxRQURpQjtBQUU5QnRNLFdBQVEsR0FGc0I7QUFHOUJ1TSxjQUFXO0FBSG1CLElBQWpCLEVBSVhDLFFBSlcsQ0FJRixNQUpFLENBQWQ7O0FBTUEsT0FBTUMsa0JBQWtCLHNCQUFFLFNBQUYsRUFBYWpNLEdBQWIsQ0FBaUI7QUFDeENSLFdBQVE7QUFEZ0MsSUFBakIsRUFFckJ3TSxRQUZxQixDQUVaSCxLQUZZLEVBRUxLLFVBRkssRUFBeEI7O0FBSUFMLFNBQU1NLE1BQU47QUFDQSxVQUFPNVUsU0FBUyxNQUFNMFUsZUFBdEI7QUFDQSxHQWxCRDtBQW9CQSxFQXZCaUMsRUFBM0IsQzs7Ozs7Ozs7Ozs7QUNyRVA7Ozs7QUFLQSxLQUFNRyxhQUFhckcsT0FBT3NHLFNBQVAsSUFBb0J0RyxPQUFPc0csU0FBUCxDQUFpQkMsU0FBckMsSUFBa0QsRUFBckU7O0FBRU8sS0FBTUMsZ0NBQWEsU0FBRCxDQUFZQyxJQUFaLENBQWlCSixVQUFqQixDQUFsQjs7QUFFQSxLQUFNSyxnQ0FBWUwsV0FBV3pVLE9BQVgsQ0FBbUIsUUFBbkIsSUFBK0IsQ0FBQyxDQUFsRDs7QUFFQSxLQUFNK1Usa0NBQWMsVUFBRCxDQUFhRixJQUFiLENBQWtCSixVQUFsQixDQUFuQjs7QUFFQSxLQUFNTyw4Q0FBbUJELGNBQWNILFNBQXZDOztBQUVBLEtBQU1LLDRCQUFXLE9BQUQsQ0FBVUosSUFBVixDQUFlSixVQUFmLENBQWhCO0FBQ1A7QUFDQTtBQUNBO0FBQ08sS0FBTVMsZ0NBQWEsU0FBRCxDQUFZTCxJQUFaLENBQWlCSixVQUFqQixLQUFnQyxDQUFDUSxPQUFuRDtBQUNBLEtBQU1FLDRCQUFXLE9BQUQsQ0FBVU4sSUFBVixDQUFlSixVQUFmLENBQWhCO0FBQ0EsS0FBTVcsMEJBQVNGLGFBQWFELE9BQWIsSUFBd0JFLE9BQXZDOztBQUVBLEtBQU1FLGdDQUFZWixXQUFXelUsT0FBWCxDQUFtQixRQUFuQixJQUErQixDQUFDLENBQWhDLElBQXFDLENBQUM4VSxTQUF4RDs7QUFFQSxLQUFNUSw4QkFBVyxTQUFYQSxRQUFXO0FBQUEsVUFBTSxrQkFBa0JsSCxNQUFsQixJQUE0QnNHLFVBQVVhLGNBQTVDO0FBQUEsRUFBakIsQzs7Ozs7O0FDekJQO0FBQ0E7Ozs7Ozs7Ozs7QUFLQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7S0FNTUMsVTs7Ozs7Ozs7Ozs7d0JBRUFwUCxJLEVBQU07QUFBQTs7QUFDVixTQUFLMkosSUFBTCxDQUFVckgsUUFBVixHQUFxQnRDLElBQXJCO0FBQ0EsU0FBSzdHLE9BQUwsQ0FBYUMsUUFBYixDQUFzQiw2QkFBdEI7QUFDQW1OLGVBQVc7QUFBQSxZQUFNLE9BQUtwTixPQUFMLENBQWFxRixXQUFiLENBQXlCLDZCQUF6QixDQUFOO0FBQUEsS0FBWCxFQUEwRSxHQUExRTtBQUNBOztBQUVEOzs7Ozs7bUNBR2dCO0FBQ2YsU0FBS21MLElBQUwsR0FBWSxtQkFBUyxLQUFLNU4sTUFBZCxDQUFaO0FBQ0EsV0FBTyxLQUFLNUMsT0FBTCxHQUFlLHNCQUFFLFNBQUYsRUFDcEJDLFFBRG9CLENBQ1gscUJBRFcsRUFFcEJpSixNQUZvQixDQUViLEtBQUtzSCxJQUFMLENBQVV4USxPQUZHLENBQXRCO0FBR0E7Ozs7OzttQkFJYWlXLFU7Ozs7OztBQ3BDZjtBQUNBOzs7Ozs7Ozs7O0FBR0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0FBRUE7QUFDQTs7Ozs7O0tBTU1DLEk7OztBQUVMLGdCQUFhdFQsTUFBYixFQUFpQztBQUFBLE9BQVpJLE9BQVksdUVBQUosRUFBSTs7QUFBQTs7QUFDaENBLGFBQVUsaUJBQUUrSCxNQUFGLENBQVMsRUFBVCxFQUFhO0FBQ3RCcEksUUFBSyxZQUFDQyxNQUFELEVBQVk7QUFDaEIsU0FBTUMsUUFBUUQsT0FBT0MsS0FBckI7QUFDQSxZQUFPLDBCQUFjQSxNQUFNRSxXQUFwQixDQUFQO0FBQ0E7QUFKcUIsSUFBYixFQUtQQyxPQUxPLENBQVY7O0FBRGdDLDJHQVExQkosTUFSMEIsRUFRbEJJLE9BUmtCOztBQVVoQyxTQUFLSixNQUFMLENBQVlzQyxFQUFaLENBQWUsWUFBZixFQUE2QixNQUFLaVIsVUFBTCxDQUFnQi9QLElBQWhCLE9BQTdCO0FBQ0EsU0FBS3hELE1BQUwsQ0FBWXNDLEVBQVosQ0FBZSxRQUFmLEVBQXlCLE1BQUtpUixVQUFMLENBQWdCL1AsSUFBaEIsT0FBekI7QUFYZ0M7QUFZaEM7Ozs7OEJBRVVULEMsRUFBR2hCLEksRUFBTTtBQUNuQixTQUFLM0UsT0FBTCxDQUFhb1csSUFBYixDQUFrQixLQUFLcFQsT0FBTCxDQUFhTCxFQUFiLENBQWdCLEtBQUtDLE1BQXJCLENBQWxCO0FBQ0E7OzttQ0FFZTtBQUNmLFNBQUs1QyxPQUFMLEdBQWUscUJBQVMsS0FBVCxFQUFnQixFQUFFb0osV0FBWSxlQUFkLEVBQWhCLENBQWY7QUFDQSxXQUFPLEtBQUtwSixPQUFaO0FBQ0E7Ozs7OztBQUlGLHFCQUFVbU8saUJBQVYsQ0FBNEIsTUFBNUIsRUFBb0MrSCxJQUFwQzttQkFDZUEsSTs7Ozs7O0FDM0NmO0FBQ0E7Ozs7Ozs7Ozs7OztBQUlBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOztBQUNBOzs7Ozs7Ozs7O0FBR0E7Ozs7Ozs7OztLQVNNRyxpQjs7O0FBQ0wsNkJBQWF6VCxNQUFiLEVBQXFCSSxPQUFyQixFQUE4QjtBQUFBOztBQUFBLGtCQUNkQSxPQURjO0FBQUEsT0FDdkI2RCxJQUR1QixZQUN2QkEsSUFEdUI7O0FBRzdCO0FBQ0E7O0FBQ0EsT0FBSXlQLGlCQUFpQixFQUFyQjs7QUFFQSxPQUFJblUsa0JBQWtCLEVBQXRCOztBQUVBLE9BQUlKLFdBQVcsRUFBZjs7QUFFQSxPQUFHOEUsUUFBUSxJQUFYLEVBQWlCOztBQUVoQjlFLGVBQVdhLE9BQU9JLE9BQVAsQ0FBZWpCLFFBQWYsQ0FBd0I4RSxJQUF4QixDQUFYOztBQUVBMUUsc0JBQWtCUyxPQUFPSSxPQUFQLENBQWViLGVBQWYsQ0FBK0IwRSxJQUEvQixDQUFsQjs7QUFFQSxLQUNDLEVBQUUyRCx3QkFBRixFQUFvQjNELE1BQU8sUUFBM0IsRUFERCxFQUVhLEVBQUUyRCwrQkFBRixFQUEyQjNELE1BQU8sU0FBbEMsRUFGYixFQUdhLEVBQUUyRCx3QkFBRixFQUFvQjNELE1BQU8sS0FBM0IsRUFIYixFQUlFdEcsT0FKRixDQUlVLGdCQUFRO0FBQ2pCLFNBQUdHLEtBQUs4SixJQUFSLEVBQWM7QUFDYixVQUFNK0wsWUFBZTFQLElBQWYsU0FBdUJuRyxLQUFLbUcsSUFBbEM7O0FBRUEsVUFBR2pFLE9BQU9JLE9BQVAsQ0FBZWpCLFFBQWYsQ0FBd0J3VSxTQUF4QixDQUFILEVBQXVDO0FBQ3RDRCx3QkFBaUIsaUJBQUV2TCxNQUFGLENBQVMsRUFBVCxFQUFhdUwsY0FBYixFQUE2QjFULE9BQU9JLE9BQVAsQ0FBZWIsZUFBZixDQUErQm9VLFNBQS9CLENBQTdCLENBQWpCO0FBQ0F4VSxrQkFBV2EsT0FBT0ksT0FBUCxDQUFlakIsUUFBZixDQUF3QndVLFNBQXhCLENBQVg7QUFDQTtBQUNEO0FBQ0QsWUFBTzdWLEtBQUs4SixJQUFaO0FBQ0EsS0FkRDtBQWVBOztBQUdEeEgsYUFBVSxpQkFBRStILE1BQUYsQ0FBUyxFQUFULEVBQWE7QUFDdEJoSixjQUFXQSxRQURXO0FBRXRCSyxXQUFRLE1BRmM7QUFHdEJELHFCQUFrQjtBQUhJLElBQWIsRUFJUG1VLGNBSk8sRUFJU25VLGVBSlQsRUFJMEJhLE9BSjFCLENBQVY7O0FBbkM2QixxSUF5Q3ZCSixNQXpDdUIsRUF5Q2ZJLE9BekNlOztBQTJDN0IsU0FBS3VJLE1BQUwsR0FBY3ZJLFFBQVF1SSxNQUFSLElBQWtCLEtBQWhDO0FBQ0EsU0FBSzFFLElBQUwsR0FBWTdELFFBQVE2RCxJQUFwQjs7QUFFQSxTQUFLakUsTUFBTCxDQUFZYixRQUFaLENBQXFCLE1BQUs4RSxJQUExQjtBQTlDNkI7QUErQzdCOzs7O3NDQUdrQkEsSSxFQUFNO0FBQUEsUUFDaEIxRSxlQURnQixHQUNJLEtBQUthLE9BRFQsQ0FDaEJiLGVBRGdCOztBQUV4QixRQUFJOUIsU0FBUzhCLGdCQUFnQm1OLE9BQWhCLElBQTJCLEVBQXhDOztBQUVBLFFBQUduTixnQkFBZ0IwRSxJQUFoQixDQUFILEVBQTBCO0FBQ3pCeEcsY0FBUyxpQkFBRTBLLE1BQUYsQ0FBUyxJQUFULEVBQWUsRUFBZixFQUFtQjFLLE1BQW5CLEVBQTJCOEIsZ0JBQWdCMEUsSUFBaEIsQ0FBM0IsQ0FBVDtBQUNBOztBQUVELFdBQU94RyxNQUFQO0FBQ0E7Ozs4QkFFVW1XLFEsRUFBVTNQLEksRUFBTTdELE8sRUFBUztBQUNuQyxRQUFNc00sVUFBVSxrQkFBUW1ILE1BQVIsQ0FBZSxLQUFLN1QsTUFBcEIsRUFBNEJpRSxJQUE1QjtBQUNmNlAsaUJBQWEsS0FBSzFULE9BQUwsQ0FBYTZEO0FBRFgsT0FFWjdELE9BRlksRUFBaEI7O0FBS0EsUUFBR3NNLFdBQVcsSUFBZCxFQUFvQjtBQUNuQjtBQUNBOztBQUVELFdBQU1rSCxXQUFXLEtBQUtHLEtBQUwsQ0FBV3BPLE1BQTVCLEVBQW9DO0FBQ25DLFVBQUtxTyxNQUFMO0FBQ0E7O0FBRUQsUUFBTUMsVUFBVSxLQUFLRixLQUFMLENBQVdILFFBQVgsQ0FBaEI7QUFDQUssWUFBUTNOLE1BQVIsQ0FBZW9HLFFBQVF0UCxPQUF2Qjs7QUFFQSxRQUFJLEtBQUsrQixRQUFMLElBQWlCLElBQXJCLEVBQTJCO0FBQzFCLFVBQUtBLFFBQUwsR0FBZ0IsRUFBaEI7QUFDQTtBQUNELFFBQUksS0FBS0EsUUFBTCxDQUFjeVUsUUFBZCxLQUEyQixJQUEvQixFQUFxQztBQUNwQyxVQUFLelUsUUFBTCxDQUFjeVUsUUFBZCxJQUEwQixFQUExQjtBQUNBOztBQUVELFNBQUt6VSxRQUFMLENBQWN5VSxRQUFkLEVBQXdCM1AsSUFBeEIsSUFBZ0N5SSxPQUFoQztBQUNBOzs7OEJBRVV3SCxLLEVBQU9DLE0sRUFBUTtBQUN6QixRQUFHQSxVQUFVLElBQWIsRUFBbUI7QUFDbEIsU0FBTWxRLE9BQU9pUSxLQUFiO0FBQ0EsVUFBSSxJQUFJck8sSUFBSSxDQUFaLEVBQWVBLElBQUksS0FBSzFHLFFBQUwsQ0FBY3dHLE1BQWpDLEVBQXlDRSxHQUF6QyxFQUE4QztBQUM3QyxVQUFHLEtBQUsxRyxRQUFMLENBQWMwRyxDQUFkLEVBQWlCNUIsSUFBakIsS0FBMEIsSUFBN0IsRUFBbUM7QUFDbEMsY0FBTyxLQUFLOUUsUUFBTCxDQUFjMEcsQ0FBZCxFQUFpQjVCLElBQWpCLENBQVA7QUFDQTtBQUNEO0FBQ0QsS0FQRCxNQU9PO0FBQ04sU0FBTUEsUUFBT2lRLEtBQWI7QUFDQSxTQUFNTixXQUFXTyxNQUFqQjtBQUNBLFlBQU8sS0FBS2hWLFFBQUwsQ0FBY3lVLFFBQWQsRUFBd0IzUCxLQUF4QixDQUFQO0FBQ0E7O0FBRUQsV0FBTyxJQUFQO0FBQ0E7Ozs0QkFFUTtBQUNSLFFBQU1nUSxVQUFVLHFCQUFTLEtBQVQsRUFBZ0I7QUFDL0J6TixnREFBMEMsS0FBS3BHLE9BQUwsQ0FBYTZEO0FBRHhCLEtBQWhCLENBQWhCOztBQUlBLFFBQUksS0FBSzhQLEtBQUwsSUFBYyxJQUFsQixFQUF3QjtBQUN2QixVQUFLQSxLQUFMLEdBQWEsRUFBYjtBQUNBO0FBQ0QsU0FBS0EsS0FBTCxDQUFXdEosSUFBWCxDQUFnQndKLE9BQWhCO0FBQ0EsU0FBSzdXLE9BQUwsQ0FBYWtKLE1BQWIsQ0FBb0IyTixPQUFwQjs7QUFFQSxXQUFPQSxPQUFQO0FBQ0E7OzswQkFFTUwsUSxFQUFVO0FBQ2hCLFdBQU8sS0FBS0csS0FBTCxDQUFXSCxZQUFZLENBQXZCLENBQVA7QUFDQTs7QUFFRDs7Ozs7O21DQUdnQjtBQUFBOztBQUFBLG9CQUNtQixLQUFLeFQsT0FEeEI7QUFBQSxRQUNQNkQsSUFETyxhQUNQQSxJQURPO0FBQUEsUUFDRDlFLFFBREMsYUFDREEsUUFEQztBQUFBLFFBQ1NLLEtBRFQsYUFDU0EsS0FEVDs7QUFFZixRQUFJNFUsY0FBYyxJQUFsQjs7QUFFQSxTQUFLaFgsT0FBTCxHQUFlLHFCQUFTLEtBQVQsRUFBZ0I7QUFDOUJvSiw4RUFBd0V2QztBQUQxQyxLQUFoQixDQUFmOztBQUlBLFFBQUcsT0FBT3pFLEtBQVAsS0FBaUIsUUFBcEIsRUFBOEI7QUFDN0I0VSxtQkFBYzVVLEtBQWQ7QUFDQTs7QUFFREwsYUFBU3hCLE9BQVQsQ0FBaUIsVUFBQzhLLEdBQUQsRUFBTW1MLFFBQU4sRUFBbUI7QUFDbkMsU0FBTUssVUFBVSxPQUFLRCxNQUFMLEVBQWhCO0FBQ0EsU0FBSUssV0FBV0QsV0FBZjs7QUFFQSxTQUFHaE0sTUFBTUMsT0FBTixDQUFjN0ksS0FBZCxLQUF3QkEsTUFBTW9VLFFBQU4sQ0FBM0IsRUFBNEM7QUFDM0NTLGlCQUFXN1UsTUFBTW9VLFFBQU4sQ0FBWDtBQUNBOztBQUVEbkwsU0FBSTlLLE9BQUosQ0FBWSx1QkFBZTs7QUFFMUIsVUFBRzJXLGdCQUFnQixVQUFoQixJQUE4QkQsYUFBYSxTQUE5QyxFQUF5RDtBQUN4RHpOLGVBQVFDLElBQVIsQ0FBYSxtRUFBYjtBQUNBOztBQUVELGFBQUswTixVQUFMLENBQWdCWCxRQUFoQixFQUEwQlUsV0FBMUIsRUFBdUMsT0FBS0Usa0JBQUwsQ0FBd0J2USxJQUF4QixDQUF2QztBQUNBLE1BUEQ7O0FBU0FnUSxhQUFRNVcsUUFBUix5QkFBdUNnWCxRQUF2QyxFQUNFcE8sSUFERixDQUNPLFVBRFAsRUFDbUIsQ0FEbkI7O0FBR0FnTyxhQUFReE0sSUFBUixDQUFhLHFCQUFiLEVBQW9DNEssTUFBcEM7QUFDQSxLQXJCRDs7QUF1QkEsV0FBTyxLQUFLalYsT0FBWjtBQUNBOzs7MEJBRU87QUFDUCxTQUFLQSxPQUFMLENBQWE2TixJQUFiO0FBQ0EsU0FBSzdOLE9BQUwsQ0FBYXFLLElBQWIsQ0FBa0Isb0JBQWxCLEVBQXdDd0QsSUFBeEM7QUFDQTs7OzBCQUVPO0FBQ1AsU0FBSzdOLE9BQUwsQ0FBYWtELElBQWI7QUFDQSxTQUFLbEQsT0FBTCxDQUFhcUssSUFBYixDQUFrQixvQkFBbEIsRUFBd0NuSCxJQUF4QztBQUNBOzs7Ozs7QUFHRixxQkFBVWlMLGlCQUFWLENBQTRCLG1CQUE1QixFQUFpRGtJLGlCQUFqRDttQkFDZUEsaUI7Ozs7OztBQ3ZNZjtBQUNBOzs7Ozs7Ozs7O0FBSUE7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7O0tBUU1nQixROzs7QUFDTCxvQkFBWXpVLE1BQVosRUFBb0JJLE9BQXBCLEVBQTZCO0FBQUE7O0FBQUE7O0FBQUEsd0JBQ1BBLE9BRE8sQ0FDdEJrSixLQURzQjtBQUFBLE9BQ3RCQSxLQURzQixrQ0FDZCxFQURjOztBQUU1QkEsV0FBUSxHQUFHNUwsTUFBSCxDQUFVNEwsS0FBVixDQUFSOztBQUVBOztBQUo0QixtSEFNdEJ0SixNQU5zQixFQU1kSSxPQU5jOztBQVE1QixTQUFLc1UsYUFBTCxHQUFxQixNQUFLQyxhQUExQjtBQUNBLFNBQUtDLGFBQUwsR0FBcUIsTUFBS0MsaUJBQUwsQ0FBdUIsQ0FBdkIsQ0FBckI7O0FBRUEsU0FBS3ZMLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUszRCxNQUFMLEdBQWMsTUFBSzJELEtBQUwsQ0FBVzNELE1BQXpCOztBQUVBLFNBQUttUCxnQkFBTCxDQUFzQixDQUF0Qjs7QUFFQSxTQUFLMVgsT0FBTCxDQUNFcUssSUFERixDQUNPLG1CQURQLEVBRUVuRixFQUZGLENBRUssT0FGTCxFQUVjLE1BQUt5UyxjQUFMLENBQW9CdlIsSUFBcEIsT0FGZDs7QUFJQTs7QUFFQSxTQUFLeEQsTUFBTCxDQUFZc0MsRUFBWixDQUFlLFlBQWYsRUFBNkIsTUFBSzBTLFlBQUwsQ0FBa0J4UixJQUFsQixPQUE3Qjs7QUFFQSxTQUFLeEQsTUFBTCxDQUFZc0MsRUFBWixDQUFlLFFBQWYsRUFBeUIsTUFBSzJTLHFCQUFMLENBQTJCelIsSUFBM0IsT0FBekI7O0FBRUEsU0FBS3hELE1BQUwsQ0FBWXNDLEVBQVosQ0FBZSxnQkFBZixFQUFpQyxNQUFLMlMscUJBQUwsQ0FBMkJ6UixJQUEzQixPQUFqQzs7QUFFQSxTQUFLeEQsTUFBTCxDQUFZc0MsRUFBWixDQUFlLE9BQWYsRUFBd0I7QUFBQSxXQUFNLE1BQUt0QyxNQUFMLENBQVkySyxLQUFaLEVBQU47QUFBQSxJQUF4Qjs7QUFFQTtBQUNBOzs7OzBCQUVNO0FBQ04sUUFBTXVLLGVBQWVDLFNBQVMsS0FBS1AsYUFBTCxDQUFtQjNPLElBQW5CLENBQXdCLFlBQXhCLENBQVQsQ0FBckI7QUFDQSxRQUFNbVAsV0FBV0YsZ0JBQWdCLEtBQUt2UCxNQUFyQixHQUE4QixLQUFLQSxNQUFuQyxHQUE0Q3VQLGVBQWUsQ0FBNUU7O0FBRUEsU0FBS0osZ0JBQUwsQ0FBc0JNLFFBQXRCOztBQUVBLFNBQUtwVixNQUFMLENBQVlDLEtBQVosQ0FBa0JFLFdBQWxCLEdBQWdDLEtBQUttSixLQUFMLENBQVc0TCxZQUFYLEVBQXlCbFAsR0FBekQ7QUFDQTs7OzBCQUVNO0FBQ04sUUFBTWtQLGVBQWVDLFNBQVMsS0FBS1AsYUFBTCxDQUFtQjNPLElBQW5CLENBQXdCLFlBQXhCLENBQVQsQ0FBckI7QUFDQSxRQUFNbVAsV0FBV0YsZ0JBQWdCLENBQWhCLEdBQW9CLENBQXBCLEdBQXdCQSxlQUFlLENBQXhEOztBQUVBLFNBQUtKLGdCQUFMLENBQXNCTSxRQUF0QjtBQUNBLFNBQUtwVixNQUFMLENBQVlDLEtBQVosQ0FBa0JFLFdBQWxCLEdBQWdDLEtBQUttSixLQUFMLENBQVc4TCxRQUFYLEVBQXFCclAsS0FBckQ7QUFDQTs7QUFFRDs7Ozs7O21DQUdnQjtBQUFBLG1CQUN3QixLQUFLM0YsT0FEN0I7QUFBQSxRQUNQbUosY0FETyxZQUNQQSxjQURPO0FBQUEsUUFDU0MsVUFEVCxZQUNTQSxVQURUOzs7QUFJZixTQUFLcE0sT0FBTCxHQUFlLHNCQUFFLFNBQUYsRUFDYkMsUUFEYSxDQUNKLG1CQURJLEVBRWI0SSxJQUZhLENBRVIsVUFGUSxFQUVJLEdBRkosQ0FBZjs7QUFJQSxTQUFLME8sYUFBTCxHQUFxQixzQkFBRSxTQUFGLEVBQWF0WCxRQUFiLENBQXNCLDBCQUF0QixDQUFyQjs7QUFFQSxRQUFHa00sY0FBSCxFQUFtQjtBQUNsQixVQUFLbk0sT0FBTCxDQUFhQyxRQUFiLENBQXNCLDJCQUF0QjtBQUNBOztBQUVELFFBQUdtTSxVQUFILEVBQWU7QUFDZCxVQUFLcE0sT0FBTCxDQUFhQyxRQUFiLENBQXNCLGdDQUF0QjtBQUNBLFVBQUtzWCxhQUFMLENBQW1Cek8sR0FBbkIsQ0FBdUI7QUFDdEJtUCxhQUFRLENBQUMsQ0FBRCxHQUFLO0FBRFMsTUFBdkI7QUFHQTs7QUFFRCxTQUFLalksT0FBTCxDQUFha0osTUFBYixDQUNDLEtBQUtxTyxhQUFMLENBQW1Cck8sTUFBbkIsQ0FBMEIsS0FBS2dQLGVBQUwsQ0FBcUIsS0FBS2xWLE9BQUwsQ0FBYWtKLEtBQWxDLENBQTFCLENBREQ7O0FBS0EsV0FBTyxLQUFLbE0sT0FBWjtBQUNBOztBQUVEOzs7Ozs7MkNBR3dCO0FBQ3ZCLFFBQUcsS0FBS2tNLEtBQUwsSUFBYyxJQUFkLElBQXNCLEtBQUtBLEtBQUwsQ0FBVzNELE1BQVgsR0FBb0IsQ0FBN0MsRUFBZ0Q7QUFDL0MsU0FBTUEsU0FBUyxLQUFLMkQsS0FBTCxDQUFXM0QsTUFBMUI7QUFDQSxVQUFLMkQsS0FBTCxDQUFXM0QsU0FBUyxDQUFwQixFQUF1QkssR0FBdkIsR0FBNkIsS0FBS2hHLE1BQUwsQ0FBWUMsS0FBWixDQUFrQjBDLFFBQS9DOztBQUVBO0FBQ0E7QUFDQTtBQUNEOzs7a0NBR2NJLEMsRUFBRztBQUNqQixRQUFNOUMsUUFBUSxLQUFLRCxNQUFMLENBQVlDLEtBQTFCO0FBQ0EsUUFBTXNWLFVBQVUsc0JBQUV4UyxFQUFFeVMsTUFBSixFQUFZQyxPQUFaLENBQW9CLG1CQUFwQixDQUFoQjtBQUNBeFYsVUFBTUUsV0FBTixHQUFvQm9WLFFBQVF0UCxJQUFSLENBQWEsWUFBYixDQUFwQjtBQUNBLFNBQUtqRyxNQUFMLENBQVlnQyxPQUFaLENBQW9CLGVBQXBCLEVBQXFDLEVBQUV1VCxTQUFVLEtBQUtqTSxLQUFMLENBQVdpTSxRQUFRdFAsSUFBUixDQUFhLFlBQWIsQ0FBWCxDQUFaLEVBQXJDO0FBQ0E7OztvQ0FFZ0JySSxLLEVBQU87QUFDdkIsUUFDQyxLQUFLZ1gsYUFBTCxDQUFtQmpQLE1BQW5CLEtBQThCLENBQTlCLElBQ0F3UCxTQUFTLEtBQUtQLGFBQUwsQ0FBbUIzTyxJQUFuQixDQUF3QixZQUF4QixDQUFULE1BQW9EckksS0FEcEQsSUFFQSxLQUFLaVgsaUJBQUwsQ0FBdUJqWCxLQUF2QixFQUE4QitILE1BQTlCLEtBQXlDLENBSDFDLEVBSUU7QUFDRCxZQUFPLElBQVA7QUFDQTs7QUFFRCxTQUFLaVAsYUFBTCxDQUFtQm5TLFdBQW5CLENBQStCLDBCQUEvQjtBQUNBLFNBQUttUyxhQUFMLEdBQXFCLEtBQUtDLGlCQUFMLENBQXVCalgsS0FBdkIsQ0FBckI7QUFDQSxTQUFLZ1gsYUFBTCxDQUFtQnZYLFFBQW5CLENBQTRCLDBCQUE1Qjs7QUFFQSxRQUFNcVksY0FBYyxLQUFLZCxhQUFMLENBQW1CZSxRQUFuQixHQUE4QnJKLEdBQWxEOztBQUVBLFNBQUtvSSxhQUFMLENBQ0VrQixPQURGLENBQ1U7QUFDUjVJLGdCQUFZLEtBQUswSCxhQUFMLENBQW1CMUgsU0FBbkIsS0FBaUMwSTtBQURyQyxLQURWLEVBR0ksR0FISjs7QUFLQSxTQUFLMVYsTUFBTCxDQUFZZ0MsT0FBWixDQUFvQixnQkFBcEIsRUFBc0MsRUFBRXVULFNBQVUsS0FBS2pNLEtBQUwsQ0FBVzFMLEtBQVgsQ0FBWixFQUF0Qzs7QUFFQSxXQUFPLElBQVA7QUFDQTs7O3FDQUVpQkEsSyxFQUFPO0FBQ3hCLFdBQU8sS0FBS1IsT0FBTCxDQUFhcUssSUFBYixvQ0FBbUQ3SixLQUFuRCxRQUFQO0FBQ0E7OztnQ0FHWW1GLEMsRUFBR2hCLEksRUFBTTtBQUNyQixRQUFJLEtBQUs2UyxhQUFMLENBQW1CalAsTUFBbkIsS0FBOEIsQ0FBbEMsRUFBcUM7QUFDcEM7QUFDQTs7QUFFRCxRQUFNeEYsY0FBYyxLQUFLSCxNQUFMLENBQVlHLFdBQWhDOztBQUVBO0FBQ0E7QUFDQSxRQUFHLEtBQUtILE1BQUwsQ0FBWXNFLElBQVosS0FBcUIsTUFBeEIsRUFBZ0M7QUFDL0IsU0FBTXVSLGlCQUFpQixLQUFLakIsYUFBTCxDQUFtQjNPLElBQW5CLENBQXdCLFVBQXhCLENBQXZCO0FBQ0EsVUFBSzJPLGFBQUwsQ0FDRWxVLElBREYsR0FFRStHLElBRkYsQ0FFTyxPQUZQLEVBR0UrTCxJQUhGLENBR08sMEJBQWNxQyxpQkFBaUIxVixXQUEvQixDQUhQO0FBSUE7O0FBRUQsU0FBSyxJQUFJMEYsSUFBSSxDQUFiLEVBQWdCQSxJQUFJLEtBQUt5RCxLQUFMLENBQVczRCxNQUEvQixFQUF1Q0UsR0FBdkMsRUFBNEM7QUFDM0MsU0FBTTBQLFVBQVUsS0FBS2pNLEtBQUwsQ0FBV3pELENBQVgsQ0FBaEI7QUFDQSxTQUFJMUYsY0FBY29WLFFBQVF2UCxHQUExQixFQUErQjtBQUM5QixXQUFLOE8sZ0JBQUwsQ0FBc0JqUCxDQUF0QjtBQUNBO0FBQ0E7QUFDRDtBQUNEOzs7OztBQWdCRDs7Ozs7aUNBS2MwUCxPLEVBQVMzWCxLLEVBQU87QUFDN0IsUUFBTTBMLFFBQVEsS0FBS0EsS0FBTCxJQUFjLEtBQUtsSixPQUFMLENBQWFrSixLQUF6QztBQUNBLFFBQU14TCxPQUFPLDRDQUNtQixDQUFDRixLQUFELEdBQVMsMEJBQVQsR0FBc0MsRUFEekQsZ0NBRUcyWCxRQUFReFAsS0FGWCwrQkFHR25JLE1BQU1rWSxRQUFOLEVBSEgsNkJBSUNQLFFBQVF2UCxHQUpULHVEQUswQiwwQkFBY3VQLFFBQVF4UCxLQUF0QixDQUwxQiw4SEFRUHdQLFFBQVFRLFFBQVIsSUFBb0IsaUNBUmIsMENBU1ksMEJBQWN6TSxNQUFNLENBQU4sRUFBU3RELEdBQXZCLENBVFosOENBWVR1UCxRQUFRdk8sS0FBUixJQUFpQixJQUFqQiw0Q0FDd0N1TyxRQUFRdk8sS0FEaEQsY0FFRSxFQWRPLHNCQWlCVHVPLFFBQVF6VixXQUFSLElBQXVCLElBQXZCLGtEQUM4Q3lWLFFBQVF6VixXQUR0RCxjQUVFLEVBbkJPLDRDQXVCWGtXLElBdkJXLEVBQWI7QUF3QkEsV0FBT2xZLElBQVA7QUFDQTs7QUFFRDtBQUNBOzs7Ozs7Ozs7aUNBTWNpRSxJLEVBQU1uRSxLLEVBQU87QUFDMUIsU0FBS2lYLGlCQUFMLENBQXVCalgsS0FBdkIsRUFDRXFZLFdBREYsQ0FDYyxLQUFLQyxhQUFMLENBQW1CblUsSUFBbkIsRUFBeUJuRSxLQUF6QixDQURkLEVBRUUwRSxFQUZGLENBRUssT0FGTCxFQUVjLEtBQUt5UyxjQUFMLENBQW9CdlIsSUFBcEIsQ0FBeUIsSUFBekIsQ0FGZDtBQUdBOzs7bUNBRWU4RixLLEVBQU87QUFBQTs7QUFDdEIsUUFBSTdMLFNBQVMsRUFBYjtBQUNBNkwsVUFBTTNMLE9BQU4sQ0FBYyxVQUFDNFgsT0FBRCxFQUFVM1gsS0FBVixFQUFvQjtBQUNqQ0gsZUFBVSxPQUFLeVksYUFBTCxDQUFtQlgsT0FBbkIsRUFBNEIzWCxLQUE1QixDQUFWO0FBQ0EsS0FGRDtBQUdBLFdBQU9ILE1BQVA7QUFDQTs7O3FCQW5FV2tLLEssRUFBTztBQUNsQixRQUFJLEtBQUt2SyxPQUFMLENBQWE0USxRQUFiLENBQXNCLDJCQUF0QixLQUFzRHJHLEtBQTFELEVBQWlFO0FBQ2hFLFVBQUt2SyxPQUFMLENBQWFxRixXQUFiLENBQXlCLDJCQUF6QjtBQUNBLFVBQUt6QyxNQUFMLENBQVlnQyxPQUFaLENBQW9CLGdCQUFwQixFQUFzQyxFQUFFbVUsV0FBWXhPLEtBQWQsRUFBdEM7QUFDQSxLQUhELE1BR08sSUFBSSxDQUFDQSxLQUFMLEVBQVk7QUFDbEIsVUFBS3ZLLE9BQUwsQ0FBYUMsUUFBYixDQUFzQiwyQkFBdEI7QUFDQSxVQUFLMkMsTUFBTCxDQUFZZ0MsT0FBWixDQUFvQixnQkFBcEIsRUFBc0MsRUFBRW1VLFdBQVl4TyxLQUFkLEVBQXRDO0FBQ0E7QUFDRCxJO3VCQUVhO0FBQ2IsV0FBTyxDQUFDLEtBQUt2SyxPQUFMLENBQWE0USxRQUFiLENBQXNCLDJCQUF0QixDQUFSO0FBQ0E7Ozs7OztBQTBERixxQkFBVXpDLGlCQUFWLENBQTRCLFVBQTVCLEVBQXdDa0osUUFBeEM7bUJBQ2VBLFE7Ozs7OztBQ3hQZjtBQUNBOzs7Ozs7Ozs7O0FBS0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7OztLQU1NMkIsWTs7O0FBRUwsd0JBQVlwVyxNQUFaLEVBQWdDO0FBQUEsT0FBWkksT0FBWSx1RUFBSixFQUFJOztBQUFBOztBQUFBLDJIQUN6QkosTUFEeUIsRUFDakJJLE9BRGlCOztBQUUvQixPQUFHLE1BQUtKLE1BQUwsQ0FBWWdMLE1BQVosSUFBc0IsSUFBekIsRUFBK0I7QUFDOUIsVUFBS3FMLE9BQUwsR0FBZSxNQUFLclcsTUFBTCxDQUFZZ0wsTUFBWixDQUFtQnFMLE9BQWxDO0FBQ0EsVUFBS2paLE9BQUwsQ0FBYWtELElBQWI7QUFDQTtBQUNELFNBQUtOLE1BQUwsQ0FBWXNDLEVBQVosQ0FBZSxPQUFmLEVBQXdCLE1BQUtnVSxhQUFMLENBQW1COVMsSUFBbkIsT0FBeEI7QUFOK0I7QUFPL0I7O0FBRUQ7Ozs7Ozs7bUNBR2dCO0FBQ2YsU0FBS3BHLE9BQUwsR0FBZSxzQkFBRSxTQUFGLEVBQ2JDLFFBRGEsQ0FDSix3QkFESSxDQUFmO0FBRUE7OztpQ0FNYTBGLEMsRUFBR2hCLEksRUFBTTtBQUN0QixRQUFNYSxRQUFRYixLQUFLYSxLQUFuQjtBQUNBLFNBQUt5VCxPQUFMLEdBQWV6VCxNQUFNeVQsT0FBckI7QUFDQSxTQUFLalosT0FBTCxDQUFha0QsSUFBYjtBQUNBOzs7cUJBUldxSCxLLEVBQU87QUFDbEIsU0FBS3ZLLE9BQUwsQ0FBYTJKLElBQWIsQ0FBa0JZLEtBQWxCO0FBQ0E7Ozs7OztBQVNGLHFCQUFVNEQsaUJBQVYsQ0FBNEIsY0FBNUIsRUFBNEM2SyxZQUE1QzttQkFDZUEsWTs7Ozs7O0FDOUNmO0FBQ0E7Ozs7Ozs7Ozs7QUFLQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7OztLQU9NRyxNOzs7QUFFTCxrQkFBWXZXLE1BQVosRUFBZ0M7QUFBQSxPQUFaSSxPQUFZLHVFQUFKLEVBQUk7O0FBQUE7O0FBQy9CQSxhQUFVLGlCQUFFK0gsTUFBRixDQUFTLEVBQVQsRUFBYTtBQUN0Qm5GLFNBQU01QyxRQUFRNEM7QUFEUSxJQUFiLEVBRVA1QyxPQUZPLENBQVY7O0FBRCtCLCtHQUt6QkosTUFMeUIsRUFLakJJLE9BTGlCOztBQU8vQixTQUFLNEMsR0FBTCxHQUFXLE1BQUs1QyxPQUFMLENBQWE0QyxHQUF4QjtBQVArQjtBQVEvQjs7Ozs7O0FBY0Q7OzttQ0FHZ0I7QUFDZixTQUFLNUYsT0FBTCxHQUFlLHNCQUFFLFNBQUYsRUFDYkMsUUFEYSxDQUNKLGlCQURJLENBQWY7O0FBR0EsV0FBTyxLQUFLRCxPQUFaO0FBQ0E7OztxQkFwQk91SyxLLEVBQU87QUFDZCxRQUFHQSxTQUFTLElBQVosRUFBa0I7QUFDakI7QUFDQTtBQUNELFNBQUs2TyxJQUFMLEdBQVk3TyxLQUFaO0FBQ0EsU0FBS3ZLLE9BQUwsQ0FBYThJLEdBQWIsQ0FBaUIsa0JBQWpCLFlBQTZDeUIsS0FBN0M7QUFDQSxJO3VCQUVTO0FBQ1QsV0FBTyxLQUFLNk8sSUFBWjtBQUNBOzs7Ozs7QUFjRixxQkFBVWpMLGlCQUFWLENBQTRCLFFBQTVCLEVBQXNDZ0wsTUFBdEM7bUJBQ2VBLE07Ozs7Ozs7Ozs7O0FDckRmOzs7O0FBS0E7Ozs7O0FBS0EsS0FBSUUsZ0JBQWdCLEVBQXBCOztBQUVBO0FBQ0E7QUFDQSxLQUFNQyxTQUFTO0FBQ2Q7QUFDQSxFQUNDLG1CQURELEVBRUMsZ0JBRkQsRUFHQyxtQkFIRCxFQUlDLG1CQUpELEVBS0Msa0JBTEQsRUFNQyxpQkFORCxDQUZjO0FBVWQ7QUFDQSxFQUNDLHlCQURELEVBRUMsc0JBRkQsRUFHQyx5QkFIRCxFQUlDLHlCQUpELEVBS0Msd0JBTEQsRUFNQyx1QkFORCxDQVhjO0FBbUJkO0FBQ0EsRUFDQyx5QkFERCxFQUVDLHdCQUZELEVBR0MsZ0NBSEQsRUFJQyx3QkFKRCxFQUtDLHdCQUxELEVBTUMsdUJBTkQsQ0FwQmM7QUE0QmQ7QUFDQSxFQUNDLHNCQURELEVBRUMscUJBRkQsRUFHQyxzQkFIRCxFQUlDLHNCQUpELEVBS0MscUJBTEQsRUFNQyxvQkFORCxDQTdCYztBQXFDZDtBQUNBLEVBQ0MscUJBREQsRUFFQyxrQkFGRCxFQUdDLHFCQUhELEVBSUMscUJBSkQsRUFLQyxvQkFMRCxFQU1DLG1CQU5ELENBdENjLENBQWY7O0FBaURBLEtBQUlDLFVBQVVELE9BQU8sQ0FBUCxDQUFkOztBQUVBLEtBQUlFLG1CQUFKOztBQUVBO0FBQ0EsTUFBSyxJQUFJL1EsSUFBSSxDQUFiLEVBQWdCQSxJQUFJNlEsT0FBTy9RLE1BQTNCLEVBQW1DRSxHQUFuQyxFQUF3QztBQUN2QztBQUNBLE1BQUk2USxPQUFPN1EsQ0FBUCxFQUFVLENBQVYsS0FBZ0IvQixRQUFwQixFQUE4QjtBQUM3QjhTLGdCQUFhRixPQUFPN1EsQ0FBUCxDQUFiO0FBQ0E7QUFDQTtBQUNEOztBQUVEO0FBQ0EsS0FBSStRLFVBQUosRUFBZ0I7QUFDZixPQUFLLElBQUkvUSxLQUFFLENBQVgsRUFBY0EsS0FBRStRLFdBQVdqUixNQUEzQixFQUFtQ0UsSUFBbkMsRUFBd0M7QUFDdkM0USxpQkFBY0UsUUFBUTlRLEVBQVIsQ0FBZCxJQUE0QitRLFdBQVcvUSxFQUFYLENBQTVCO0FBQ0E7QUFDRDs7bUJBRWM0USxhOzs7Ozs7QUNuRmY7QUFDQTs7Ozs7Ozs7Ozs7Ozs7S0FLTTlLLE07Ozs7Ozs7O0FBQ0w7Ozs7Ozs7dUJBT1kxSCxJLEVBQU00UyxJLEVBQU07QUFDdkIsUUFBSUMsVUFBVWhULFNBQVNpVCxNQUFULENBQWdCeEksS0FBaEIsQ0FBc0IsR0FBdEIsQ0FBZDtBQUNBLFNBQUssSUFBSTFJLENBQVQsSUFBY2lSLE9BQWQsRUFBdUI7QUFDdEIsU0FBSUUsSUFBSUYsUUFBU2pSLENBQVQsRUFBYW1RLElBQWIsR0FBb0J6SCxLQUFwQixDQUEwQixHQUExQixDQUFSO0FBQ0EsU0FBSXlJLEVBQUcsQ0FBSCxNQUFXLGNBQWMvUyxJQUE3QixFQUNDLE9BQU8rUyxFQUFHLENBQUgsQ0FBUDtBQUNEO0FBQ0QsV0FBT0gsSUFBUDtBQUNBOztBQUVEOzs7Ozs7Ozs7dUJBTVk1UyxJLEVBQU0wRCxLLEVBQU87QUFDeEIsUUFBSXFQLElBQUksSUFBSXRILElBQUosRUFBUjtBQUNBc0gsTUFBRUMsT0FBRixDQUFVRCxFQUFFRSxJQUFGLEdBQVMsQ0FBbkI7QUFDQXBULGFBQVNpVCxNQUFULEdBQWtCLGNBQWM5UyxJQUFkLEdBQXFCLEdBQXJCLEdBQTJCMEQsS0FBM0IsR0FBbUMsV0FBbkMsR0FBaURxUCxFQUFFbEIsUUFBRixFQUFuRTtBQUNBOzs7Ozs7bUJBR2FuSyxNOzs7Ozs7Ozs7Ozs7OztBQ3JDZjs7Ozs7Ozs7S0FFTXdMLFUsR0FDTCxvQkFBWXhQLEtBQVosRUFBbUI7QUFBQTs7QUFDbEIsTUFBR0EsaUJBQWlCd1AsVUFBcEIsRUFBZ0M7QUFDL0IsVUFBT3hQLEtBQVA7QUFDQTtBQUNELE1BQUksT0FBT0EsS0FBUCxLQUFpQixRQUFyQixFQUErQjtBQUM5QixRQUFLdkUsSUFBTCxHQUFZdUUsS0FBWjtBQUNBLEdBRkQsTUFFTyxJQUFJLE9BQU9BLEtBQVAsS0FBaUIsUUFBckIsRUFBK0I7QUFDdEM7QUFDQyxRQUFLME8sT0FBTCxHQUFlMU8sS0FBZjtBQUNBLEdBSE0sTUFHQSxJQUFJLFFBQU9BLEtBQVAseUNBQU9BLEtBQVAsT0FBaUIsUUFBckIsRUFBK0I7O0FBRXJDO0FBQ0E7QUFDQSxPQUFJLE9BQU9BLE1BQU12RSxJQUFiLEtBQXNCLFFBQTFCLEVBQW9DO0FBQ25DLFNBQUtBLElBQUwsR0FBWXVFLE1BQU12RSxJQUFsQjtBQUNBOztBQUVELG9CQUFFK0UsTUFBRixDQUFTLElBQVQsRUFBZVIsS0FBZjtBQUNBOztBQUVELE1BQUksQ0FBQyxLQUFLME8sT0FBVixFQUFtQjtBQUNsQixRQUFLQSxPQUFMLEdBQWVjLFdBQVdDLGVBQVgsQ0FBMkIsS0FBS2hVLElBQWhDLEtBQXlDLEVBQXhEO0FBQ0E7QUFDRCxFOztBQUdGK1QsWUFBVzdMLFNBQVgsQ0FBcUJsSSxJQUFyQixHQUE0QixDQUE1Qjs7QUFFQStULFlBQVc3TCxTQUFYLENBQXFCK0ssT0FBckIsR0FBK0IsRUFBL0I7O0FBRUFjLFlBQVdFLFVBQVgsR0FBd0IsQ0FDdkIsa0JBRHVCLEVBRXZCLG1CQUZ1QixFQUd2QixtQkFIdUIsRUFJdkIsa0JBSnVCLEVBS3ZCLDZCQUx1QixFQU12QixxQkFOdUIsQ0FBeEI7O0FBVUFGLFlBQVdDLGVBQVgsR0FBNkI7QUFDNUIsS0FBSSw2QkFEd0I7QUFFNUIsS0FBSSxrREFGd0I7QUFHNUIsS0FBSSx1SUFId0I7QUFJNUIsS0FBSSxnSkFKd0I7QUFLNUIsS0FBSTtBQUx3QixFQUE3Qjs7QUFRQTtBQUNBO0FBQ0EsTUFBSyxJQUFJRSxTQUFTLENBQWxCLEVBQXFCQSxTQUFTSCxXQUFXRSxVQUFYLENBQXNCMVIsTUFBcEQsRUFBNEQyUixRQUE1RCxFQUFzRTtBQUNyRUgsYUFBV0EsV0FBV0UsVUFBWCxDQUFzQkMsTUFBdEIsQ0FBWCxJQUE0Q0EsTUFBNUM7QUFDQTtBQUNBSCxhQUFXN0wsU0FBWCxDQUFxQjZMLFdBQVdFLFVBQVgsQ0FBc0JDLE1BQXRCLENBQXJCLElBQXNEQSxNQUF0RDtBQUNBOzttQkFFY0gsVTs7Ozs7O0FDM0RmO0FBQ0E7Ozs7Ozs7Ozs7QUFJQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBOzs7OztLQUtNSSxXOzs7QUFDTCx1QkFBYXZYLE1BQWIsRUFBaUM7QUFBQSxPQUFaSSxPQUFZLHVFQUFKLEVBQUk7O0FBQUE7O0FBQ2hDQSxhQUFVLGlCQUFFK0gsTUFBRixDQUFTLEVBQVQsRUFBYTtBQUN0QjVCLGNBQVcsTUFEVztBQUV0QlMsV0FBUSxxQkFGYztBQUd0QlIsZUFBWSxNQUhVO0FBSXRCdkMsVUFBTztBQUplLElBQWIsRUFLUDdELE9BTE8sQ0FBVjs7QUFEZ0MseUhBTzFCSixNQVAwQixFQU9sQkksT0FQa0I7O0FBU2hDLFNBQUtKLE1BQUwsQ0FBWXNDLEVBQVosK0NBRUMsTUFBS2tWLE1BQUwsQ0FBWWhVLElBQVosT0FGRDtBQVRnQztBQWFoQzs7QUFHRDs7Ozs7Ozs4QkFHWTtBQUNYLFFBQUcsS0FBS29LLElBQUwsQ0FBVXJILFFBQVYsS0FBdUIsTUFBMUIsRUFBa0M7QUFDbEMsU0FBS3FILElBQUwsQ0FBVXJILFFBQVYsR0FBcUIsTUFBckI7QUFDQSxTQUFLbkosT0FBTCxDQUFhNkksSUFBYixDQUFrQixPQUFsQixFQUEyQixLQUFLN0YsT0FBTCxDQUFhNEcsS0FBeEM7QUFDQTs7QUFFRDs7Ozs7OytCQUdhO0FBQ1osUUFBRyxLQUFLNEcsSUFBTCxDQUFVckgsUUFBVixLQUF1QixPQUExQixFQUFtQztBQUNuQyxTQUFLcUgsSUFBTCxDQUFVckgsUUFBVixHQUFxQixPQUFyQjtBQUNBLFNBQUtuSixPQUFMLENBQWE2SSxJQUFiLENBQWtCLE9BQWxCLEVBQTJCLG9CQUEzQjtBQUNBOzs7NEJBRVE7QUFDUixRQUFJLEtBQUtqRyxNQUFMLENBQVkrSyxLQUFoQixFQUF1QjtBQUN0QixVQUFLME0sVUFBTDtBQUNBLEtBRkQsTUFFTyxJQUFHLEtBQUt6WCxNQUFMLENBQVlrRCxNQUFmLEVBQXVCO0FBQzdCLFVBQUt3VSxRQUFMO0FBQ0EsS0FGTSxNQUVBO0FBQ04sVUFBS0MsU0FBTDtBQUNBO0FBQ0Q7OztnQ0FFWTtBQUNaLFFBQUcsS0FBSy9KLElBQUwsQ0FBVXJILFFBQVYsS0FBdUIsU0FBMUIsRUFBcUM7QUFDckMsUUFBRyxLQUFLdkcsTUFBTCxDQUFZMkMsUUFBWixLQUF5QmlWLFFBQTVCLEVBQXNDO0FBQ3JDLFVBQUtDLE9BQUwsR0FBZSxJQUFmO0FBQ0EsVUFBS2pLLElBQUwsQ0FBVXJILFFBQVYsR0FBcUIsU0FBckI7QUFDQSxVQUFLbkosT0FBTCxDQUFhNkksSUFBYixDQUFrQixPQUFsQixFQUEyQixrQkFBM0I7QUFDQTtBQUNEOzs7a0NBRWM7QUFDZCxRQUFHLENBQUMsS0FBSzRSLE9BQVQsRUFBa0I7QUFDakI7QUFDQTtBQUNELFNBQUtBLE9BQUwsR0FBZSxLQUFmOztBQUVBLFFBQUcsS0FBSzdYLE1BQUwsQ0FBWUMsS0FBWixDQUFrQmlELE1BQXJCLEVBQTZCO0FBQzVCLFVBQUt3VSxRQUFMO0FBQ0EsS0FGRCxNQUVPO0FBQ04sVUFBS0MsU0FBTDtBQUNBO0FBQ0Q7O0FBRUQ7Ozs7OzsyQkFHUTVVLEMsRUFBRztBQUNWLFNBQUsvQyxNQUFMLENBQVlDLEtBQVosQ0FBa0JDLFVBQWxCO0FBQ0E7Ozs7OztBQUdGLHFCQUFVcUwsaUJBQVYsQ0FBNEIsYUFBNUIsRUFBMkNnTSxXQUEzQztBQUNBLG1CQUFRcGEsZUFBUixDQUF3QixNQUF4QixFQUFnQ29hLFdBQWhDO21CQUNlQSxXOzs7Ozs7QUMzRmY7QUFDQTs7Ozs7Ozs7Ozs7O0FBSUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztBQUdBOzs7OztLQUtNTyxhOzs7QUFFTCx5QkFBYTlYLE1BQWIsRUFBaUM7QUFBQSxPQUFaSSxPQUFZLHVFQUFKLEVBQUk7O0FBQUE7O0FBQ2hDQSxhQUFVLGlCQUFFK0gsTUFBRixDQUFTLEVBQVQsRUFBYTtBQUN0QjVCLGNBQVcsYUFEVztBQUV0QkMsZUFBWSxnQkFGVTtBQUd0QnZDLFVBQU87QUFIZSxJQUFiLEVBSVA3RCxPQUpPLENBQVY7O0FBRGdDLDZIQU0xQkosTUFOMEIsRUFNbEJJLE9BTmtCOztBQVFoQyxPQUFHLENBQUNKLE9BQU9DLEtBQVAsQ0FBYThYLG9CQUFkLDZCQUFILEVBQTJEO0FBQzFELFVBQUszYSxPQUFMLENBQWE2TixJQUFiO0FBQ0E7QUFDQTs7QUFFRCxTQUFLakwsTUFBTCxDQUFZc0MsRUFBWixDQUFlLGNBQWYsRUFBK0IsVUFBQ1MsQ0FBRCxFQUFJaEIsSUFBSixFQUFhO0FBQzNDLFFBQU05QixRQUFRLE1BQUtELE1BQUwsQ0FBWUMsS0FBMUI7QUFDQSxVQUFLMEgsS0FBTCxHQUFhMUgsTUFBTTVCLEtBQU4sR0FBYyxDQUFkLEdBQWtCNEIsTUFBTVIsTUFBckM7QUFDQSxJQUhEO0FBYmdDO0FBaUJoQzs7OzttQ0FFZTtBQUFBOztBQUNmO0FBQ0EsUUFBSXVZLE9BQU8sS0FBWDtBQUNBLFFBQU0vWCxRQUFRLEtBQUtELE1BQUwsQ0FBWUMsS0FBMUI7O0FBRUEsU0FBS2dZLE1BQUwsR0FBYyxzQkFBRSxRQUFGLEVBQVk1YSxRQUFaLENBQXFCLGVBQXJCLENBQWQ7O0FBRUEsU0FBS3NMLE1BQUwsR0FBYyxzQkFBRSxRQUFGLEVBQVl0TCxRQUFaLENBQXFCLGVBQXJCLENBQWQ7O0FBRUEsU0FBSzZhLElBQUwsR0FBWSxzQkFBRSxRQUFGLEVBQ1Y3YSxRQURVLENBQ0QsYUFEQyxFQUVWaUosTUFGVSxDQUVILEtBQUtxQyxNQUZGLEVBR1ZyQyxNQUhVLENBR0gsS0FBSzJSLE1BSEYsRUFJVjNWLEVBSlUsQ0FJUCxPQUpPLEVBSUUsVUFBQ1MsQ0FBRCxFQUFPO0FBQ25CLFNBQUlpVixJQUFKLEVBQVU7QUFDVixTQUFJRyxJQUFJLE9BQUtDLFdBQUwsQ0FBaUJyVixFQUFFME0sS0FBbkIsQ0FBUjtBQUNBLFNBQUkwSSxLQUFLLENBQUwsSUFBVUEsS0FBSyxDQUFuQixFQUFzQjtBQUNyQixVQUFHbFksTUFBTTVCLEtBQVQsRUFBZ0I7QUFDZjRCLGFBQU01QixLQUFOLEdBQWMsS0FBZDtBQUNBO0FBQ0Q0QixZQUFNUixNQUFOLEdBQWUsSUFBSTBZLENBQW5CO0FBQ0E7QUFDRCxLQWJVLENBQVo7O0FBZUEsU0FBS0UsZUFBTCxDQUNFaGIsUUFERixDQUNXLGVBRFgsRUFFRWlKLE1BRkYsQ0FFUyxLQUFLNFIsSUFGZDs7QUFJQSxTQUFLdEssSUFBTCxDQUFVeFEsT0FBVixDQUFrQjZJLElBQWxCLENBQXVCLE9BQXZCLEVBQWdDLGdCQUFoQzs7QUFFQSxTQUFLZ1MsTUFBTCxDQUFZM1YsRUFBWixDQUFlLFdBQWYsRUFBNEIsVUFBQ1MsQ0FBRCxFQUFPO0FBQ2xDLFNBQUlBLEVBQUUrRixLQUFGLEtBQVksQ0FBaEIsRUFBbUI7QUFDbkJrUCxZQUFPLElBQVA7QUFDQSxLQUhEOztBQUtBLDBCQUFFbFUsUUFBRixFQUFZeEIsRUFBWixDQUFlO0FBQ2RnVyxnQkFBWSxtQkFBQ3ZWLENBQUQsRUFBTztBQUNsQixVQUFJLENBQUNpVixJQUFMLEVBQVc7QUFDWCxVQUFJRyxJQUFJLE9BQUtDLFdBQUwsQ0FBaUJyVixFQUFFME0sS0FBbkIsQ0FBUjtBQUNBLFVBQUkwSSxLQUFLLENBQUwsSUFBVUEsS0FBSyxDQUFuQixFQUFzQjtBQUNyQixXQUFHbFksTUFBTTVCLEtBQVQsRUFBZ0I7QUFDZjRCLGNBQU01QixLQUFOLEdBQWMsS0FBZDtBQUNBO0FBQ0Q0QixhQUFNUixNQUFOLEdBQWUsSUFBSTBZLENBQW5CO0FBQ0E7QUFDRCxNQVZhOztBQVlkSSxjQUFVLGlCQUFDeFYsQ0FBRCxFQUFPO0FBQ2hCaVYsYUFBTyxLQUFQO0FBQ0E7QUFkYSxLQUFmO0FBZ0JBLFdBQU8sS0FBSzVhLE9BQVo7QUFDQTs7O2lDQVdjO0FBQUEsUUFDTjZDLEtBRE0sR0FDSSxLQUFLRCxNQURULENBQ05DLEtBRE07OztBQUdkQSxVQUFNNUIsS0FBTixHQUFjLENBQUM0QixNQUFNNUIsS0FBckI7QUFDQTs7OytCQUVZbWEsQyxFQUFHO0FBQ2YsV0FBTyxDQUFDQSxJQUFJLEtBQUtOLElBQUwsQ0FBVTdMLE1BQVYsR0FBbUJDLEdBQXhCLElBQStCLEtBQUs0TCxJQUFMLENBQVUvWixNQUFWLEVBQXRDO0FBQ0E7OzsyQkFFUTRFLEMsRUFBRztBQUNYLDBIQUFjQSxDQUFkO0FBQ0E7QUFDQSxRQUFJQSxFQUFFeVMsTUFBRixLQUFhLEtBQUs1SCxJQUFMLENBQVV4USxPQUFWLENBQWtCLENBQWxCLENBQWpCLEVBQXNDO0FBQ3JDLFVBQUtxYixXQUFMO0FBQ0E7QUFFRDs7O29DQUVnQjtBQUNoQixRQUFHLENBQUMsS0FBS3pZLE1BQUwsQ0FBWUMsS0FBWixDQUFrQjhYLG9CQUF0QixFQUE0QztBQUMzQyxVQUFLM2EsT0FBTCxDQUFhNk4sSUFBYjtBQUNBO0FBQ0E7QUFDRCxTQUFLdEQsS0FBTCxHQUFhLEtBQUszSCxNQUFMLENBQVlDLEtBQVosQ0FBa0J5WSxhQUEvQjtBQUNBOzs7cUJBakNVL1EsSyxFQUFPO0FBQ2pCLFNBQUtpRyxJQUFMLENBQVVySCxRQUFWLEdBQXFCLEtBQUt2RyxNQUFMLENBQVlXLGNBQVosQ0FBMkJnSCxLQUEzQixDQUFyQjs7QUFFQSxRQUFJd1EsSUFBSXBJLEtBQUs0SSxLQUFMLENBQVdoUixRQUFRLEdBQW5CLEVBQXdCbU8sUUFBeEIsS0FBcUMsR0FBN0M7QUFDQSxTQUFLbk4sTUFBTCxDQUFZekMsR0FBWixDQUFnQixRQUFoQixFQUEwQmlTLENBQTFCO0FBQ0EsU0FBS0YsTUFBTCxDQUFZL1IsR0FBWixDQUFnQixRQUFoQixFQUEwQmlTLENBQTFCO0FBQ0E7Ozs7OztBQStCRixxQkFBVTVNLGlCQUFWLENBQTRCLGVBQTVCLEVBQTZDdU0sYUFBN0M7QUFDQSxtQkFBUTNhLGVBQVIsQ0FBd0IsUUFBeEIsRUFBa0MyYSxhQUFsQzttQkFDZUEsYTs7Ozs7O0FDcElmO0FBQ0E7Ozs7Ozs7Ozs7OztBQUtBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0FBRUE7Ozs7Ozs7S0FPTWMsZTs7O0FBRUwsMkJBQVk1WSxNQUFaLEVBQWdDO0FBQUEsT0FBWkksT0FBWSx1RUFBSixFQUFJOztBQUFBOztBQUMvQkEsYUFBVSxpQkFBRStILE1BQUYsQ0FBUyxFQUFULEVBQWE7QUFDdEIyRixTQUFNO0FBRGdCLElBQWIsRUFFUDFOLE9BRk8sQ0FBVjs7QUFEK0IsaUlBSXpCSixNQUp5QixFQUlqQkksT0FKaUI7O0FBSy9CLFNBQUt5WSxPQUFMLEdBQWUsS0FBZjtBQUNBLFNBQUt6YixPQUFMLENBQWFrRixFQUFiLENBQWdCLFlBQWhCLEVBQThCLE1BQUt3VyxJQUFMLENBQVV0VixJQUFWLE9BQTlCO0FBQ0EsU0FBS3BHLE9BQUwsQ0FBYWtGLEVBQWIsQ0FBZ0IsWUFBaEIsRUFBOEIsTUFBS3lXLEtBQUwsQ0FBV3ZWLElBQVgsT0FBOUI7QUFDQSwyQkFBYztBQUNiLFVBQUtwRyxPQUFMLENBQWFrRixFQUFiLENBQWdCLEtBQWhCLEVBQXVCLE1BQUswVyxNQUFMLENBQVl4VixJQUFaLE9BQXZCO0FBQ0EsMEJBQUVNLFFBQUYsRUFBWXhCLEVBQVosQ0FBZSwyQkFBZixFQUE0QyxNQUFLMlcsZ0JBQUwsQ0FBc0J6VixJQUF0QixPQUE1QztBQUNBO0FBWDhCO0FBWS9COztBQUVEOzs7Ozs7O21DQUdnQjtBQUNmO0FBQ0EsU0FBSzZVLGVBQUwsR0FBdUIsc0JBQUUsU0FBRixFQUFhaGIsUUFBYixDQUFzQiwyQkFBdEIsQ0FBdkI7QUFDQSxTQUFLRCxPQUFMLENBQWFrSixNQUFiLENBQW9CLEtBQUsrUixlQUF6QjtBQUNBOztBQUVEOzs7Ozs7bUNBR2dCO0FBQ2Y7QUFDQTs7QUFFRDs7Ozs7OzJCQUdRdFYsQyxFQUFHO0FBQ1YsUUFBRyxzQkFBRUEsRUFBRXlTLE1BQUosRUFBWUMsT0FBWixDQUFvQixLQUFLNEMsZUFBekIsRUFBMEMxUyxNQUExQyxHQUFtRCxDQUF0RCxFQUF5RDtBQUN4RDtBQUNBOztBQUVELDhIQUFjNUMsQ0FBZDtBQUNBOzs7NEJBRVE7QUFDUixRQUFHLEtBQUs0SixPQUFSLEVBQWlCO0FBQ2pCLFFBQUcsS0FBS2tNLE9BQVIsRUFBaUI7QUFDaEIsVUFBS0UsS0FBTDtBQUNBLEtBRkQsTUFFTztBQUNOLFVBQUtELElBQUw7QUFDQTtBQUNEOzs7MEJBRU07QUFDTixRQUFHLEtBQUtuTSxPQUFSLEVBQWlCO0FBQ2pCLFNBQUtrTSxPQUFMLEdBQWUsSUFBZjtBQUNBLFNBQUtSLGVBQUwsQ0FBcUIvWCxJQUFyQjtBQUNBOzs7MkJBRU87QUFDUCxRQUFHLEtBQUtxTSxPQUFSLEVBQWlCO0FBQ2pCLFNBQUtrTSxPQUFMLEdBQWUsS0FBZjtBQUNBLFNBQUtSLGVBQUwsQ0FBcUJwTixJQUFyQjtBQUNBOzs7b0NBRWdCbEksQyxFQUFHO0FBQ25CLFFBQ0MsRUFBRSxzQkFBRUEsRUFBRXlTLE1BQUosRUFBWUMsT0FBWixDQUFvQixLQUFLclksT0FBekIsRUFBa0N1SSxNQUFsQyxHQUEyQyxDQUE3QyxLQUNBLEVBQUUsc0JBQUU1QyxFQUFFeVMsTUFBSixFQUFZQyxPQUFaLENBQW9CLEtBQUs0QyxlQUF6QixFQUEwQzFTLE1BQTFDLEdBQW1ELENBQXJELENBRkQsRUFHRTtBQUNELFNBQUcsS0FBS2tULE9BQVIsRUFBZ0I7QUFDZixXQUFLRSxLQUFMO0FBQ0E7QUFDRDtBQUNEOzs7Ozs7QUFJRixxQkFBVXhOLGlCQUFWLENBQTRCLGlCQUE1QixFQUErQ3FOLGVBQS9DO0FBQ0EsbUJBQVF6YixlQUFSLENBQXdCLFVBQXhCLEVBQW9DeWIsZUFBcEM7bUJBQ2VBLGU7Ozs7OztBQ2pHZjtBQUNBOzs7Ozs7Ozs7Ozs7QUFJQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztBQUVBOzs7Ozs7OztLQVFNTSxlOzs7QUFFTCwyQkFBYWxaLE1BQWIsRUFBaUM7QUFBQSxPQUFaSSxPQUFZLHVFQUFKLEVBQUk7O0FBQUE7O0FBQ2hDQSxhQUFVLGlCQUFFK0gsTUFBRixDQUFTLEVBQVQsRUFBYTtBQUN0QmxFLFVBQU8sVUFEZTtBQUV0QnVDLGVBQVkscUNBRlU7QUFHdEJzSCxTQUFNO0FBSGdCLElBQWIsRUFJUDFOLE9BSk8sQ0FBVjs7QUFEZ0MsaUlBTTFCSixNQU4wQixFQU1sQkksT0FOa0I7O0FBU2hDLFNBQUs2WCxNQUFMLENBQVk3YSxPQUFaLENBQW9Ca0YsRUFBcEIsQ0FBdUIsb0JBQXZCLEVBQTZDLE1BQUs2VyxrQkFBTCxDQUF3QjNWLElBQXhCLE9BQTdDOztBQUVBLFNBQUt5VSxNQUFMLENBQVk3YSxPQUFaLENBQW9Ca0YsRUFBcEIsQ0FBdUIsb0JBQXZCLEVBQTZDLE1BQUs4VyxrQkFBTCxDQUF3QjVWLElBQXhCLE9BQTdDOztBQUVBLFNBQUt4RCxNQUFMLENBQVlzQyxFQUFaLENBQWUsY0FBZixFQUErQixNQUFLK1csY0FBTCxDQUFvQjdWLElBQXBCLE9BQS9COztBQUVBLFNBQUt4RCxNQUFMLENBQVlzQyxFQUFaLENBQWUsWUFBZixFQUE2QixNQUFLZ1gsYUFBTCxDQUFtQjlWLElBQW5CLE9BQTdCOztBQUVBOztBQUVBLFNBQUt4RCxNQUFMLENBQVlzQyxFQUFaLENBQWUsZ0JBQWYsRUFBaUMsTUFBS2lYLGlCQUFMLENBQXVCL1YsSUFBdkIsT0FBakM7QUFuQmdDO0FBb0JoQzs7OztzQ0FFa0JULEMsRUFBRztBQUNyQixTQUFLeVcsWUFBTCxDQUFrQnBjLE9BQWxCLENBQTBCNk4sSUFBMUI7QUFDQTs7O3NDQUVrQmxJLEMsRUFBR2hCLEksRUFBTTtBQUMzQixRQUFNMFgsSUFBSTFYLEtBQUswWCxDQUFmO0FBQ0EsUUFBTXRCLElBQUksS0FBS0MsV0FBTCxDQUFpQnFCLENBQWpCLENBQVY7QUFDQSxRQUFNeFosUUFBUSxLQUFLRCxNQUFMLENBQVlDLEtBQTFCO0FBQ0EsUUFBSWtZLElBQUksQ0FBSixJQUFTQSxJQUFJLENBQWpCLEVBQW9CO0FBQ25CLFVBQUtGLE1BQUwsQ0FBWXlCLFVBQVosQ0FDRXBaLElBREYsR0FFRXlHLElBRkYsQ0FFTywwQkFBYzlHLE1BQU0wQyxRQUFOLEdBQWlCd1YsQ0FBL0IsQ0FGUDtBQUdBO0FBQ0E7QUFDRDs7O2lDQUVhcFYsQyxFQUFHaEIsSSxFQUFNO0FBQ3RCLFFBQU1ZLFdBQVcsS0FBSzNDLE1BQUwsQ0FBWUMsS0FBWixDQUFrQjBDLFFBQW5DO0FBQ0EsUUFBSXhDLGNBQWMsS0FBS0gsTUFBTCxDQUFZRyxXQUE5QjtBQUNBLFFBQUc0QixRQUFRQSxLQUFLNUIsV0FBTCxLQUFxQjJFLFNBQWhDLEVBQTJDO0FBQzFDM0UsbUJBQWM0QixLQUFLNUIsV0FBbkI7QUFDQTtBQUNELFFBQUl5UixVQUFVelIsY0FBY3dDLFFBQTVCOztBQUVBLFFBQUdnWCxNQUFNaFgsUUFBTixLQUFtQnhDLGdCQUFnQixDQUF0QyxFQUF5Q3lSLFVBQVUsQ0FBVjs7QUFFekMsU0FBS2dJLElBQUwsQ0FBVSxFQUFFaEksZ0JBQUYsRUFBV3pSLHdCQUFYLEVBQVY7QUFDQTs7QUFFRDs7Ozs7O21DQUdnQjtBQUFBOztBQUNmO0FBQ0EsUUFBSUYsUUFBUSxLQUFLRCxNQUFMLENBQVlDLEtBQXhCOztBQUVBLFNBQUsrWCxJQUFMLEdBQVksS0FBWjs7QUFFQTtBQUNBLFNBQUs3WCxXQUFMLEdBQW1CLDBCQUFnQixLQUFLSCxNQUFyQixFQUE2QixFQUFFd0csV0FBWSxjQUFkLEVBQTdCLENBQW5CO0FBQ0EsU0FBS3JHLFdBQUwsQ0FBaUJxVCxJQUFqQixHQUF3QixPQUF4QjtBQUNBLFNBQUtxRyxTQUFMLEdBQWlCLDBCQUFnQixLQUFLN1osTUFBckIsRUFBNkIsRUFBQ3dHLFdBQVksWUFBYixFQUE3QixDQUFqQjs7QUFFQTs7QUFFQSxTQUFLeVIsTUFBTCxHQUFjLHFCQUFXLEtBQUtqWSxNQUFoQixFQUF3QjtBQUNyQ2dZLFdBQU87QUFEOEIsS0FBeEIsQ0FBZDs7QUFJQSxTQUFLd0IsWUFBTCxHQUFvQixxQkFBVyxLQUFLeFosTUFBaEIsRUFBd0I7QUFDM0N3RyxnQkFBWTtBQUQrQixLQUF4QixDQUFwQjtBQUdBLFNBQUtnVCxZQUFMLENBQWtCcGMsT0FBbEIsQ0FBMEI2TixJQUExQjs7QUFHQTtBQUNBLFNBQUs2TyxZQUFMLEdBQW9CLHNCQUFFLFNBQUYsRUFBYXpjLFFBQWIsQ0FBc0IsYUFBdEIsQ0FBcEI7O0FBR0E7QUFDQSxTQUFLMGMsY0FBTCxHQUFzQiw2QkFBbUIsS0FBSy9aLE1BQXhCLEVBQWdDNUMsT0FBdEQ7O0FBRUEsU0FBSzhhLElBQUwsR0FBWSxzQkFBRSxTQUFGLENBQVo7QUFDQSxTQUFLMUssYUFBTCxDQUFtQixLQUFLMEssSUFBeEI7O0FBRUEsU0FBS0EsSUFBTCxDQUNFN2EsUUFERixDQUNXLFVBRFgsRUFFRWlKLE1BRkYsQ0FFUyxLQUFLMlIsTUFBTCxDQUFZN2EsT0FGckIsRUFHRWtKLE1BSEYsQ0FHUyxLQUFLa1QsWUFBTCxDQUFrQnBjLE9BSDNCLEVBSUVrSixNQUpGLENBSVMsS0FBS3dULFlBSmQsRUFLRXhULE1BTEYsQ0FLUyxLQUFLeVQsY0FMZCxFQU1FelgsRUFORixDQU1LO0FBQ0hnVyxnQkFBWSxtQkFBQ3ZWLENBQUQsRUFBTztBQUNsQixVQUFJLE9BQUtrVixNQUFMLENBQVlELElBQWhCLEVBQXNCOztBQUV0QixVQUFJRyxJQUFJLE9BQUtDLFdBQUwsQ0FBaUJyVixFQUFFeU0sS0FBbkIsQ0FBUjtBQUNBLFVBQUkySSxJQUFJLENBQUosSUFBU0EsSUFBSSxDQUFqQixFQUFvQjtBQUNuQixjQUFLcUIsWUFBTCxDQUFrQnBjLE9BQWxCLENBQ0VrRCxJQURGLEdBRUU0RixHQUZGLENBRU0sTUFGTixFQUVjaVMsSUFBSSxHQUFKLEdBQVUsR0FGeEI7QUFHQSxjQUFLcUIsWUFBTCxDQUNFRSxVQURGLENBRUVwWixJQUZGLEdBR0V5RyxJQUhGLENBR08sMEJBQWM5RyxNQUFNMEMsUUFBTixHQUFpQndWLENBQS9CLENBSFA7QUFJQSxPQVJELE1BUU87QUFDTixjQUFLcUIsWUFBTCxDQUFrQnBjLE9BQWxCLENBQTBCNk4sSUFBMUI7QUFDQTtBQUNELE1BaEJFOztBQWtCSCtPLGlCQUFhLG9CQUFDalgsQ0FBRCxFQUFPO0FBQ25CLFVBQUksT0FBS2lWLElBQVQsRUFBZTtBQUNmLGFBQUt3QixZQUFMLENBQWtCcGMsT0FBbEIsQ0FBMEI2TixJQUExQjtBQUNBLE1BckJFOztBQXVCSGdQLGdCQUFZLG1CQUFDbFgsQ0FBRCxFQUFPLENBQ2xCLENBeEJFOztBQTBCSDBLLFlBQVEsS0FBS3lNLFlBQUwsQ0FBa0IxVyxJQUFsQixDQUF1QixJQUF2QixDQTFCTDtBQTJCSG1LLFVBQU0sS0FBS3VNLFlBQUwsQ0FBa0IxVyxJQUFsQixDQUF1QixJQUF2QjtBQTNCSCxLQU5MOztBQW9DQSxTQUFLcEcsT0FBTCxDQUFhQyxRQUFiLENBQXNCLG9CQUF0QixFQUNFaUosTUFERixDQUNTLHNCQUFFLFNBQUYsRUFDTmpKLFFBRE0sQ0FDRyx1QkFESCxFQUVOaUosTUFGTSxDQUVDLEtBQUtuRyxXQUFMLENBQWlCL0MsT0FGbEIsRUFHTmtKLE1BSE0sQ0FHQyxLQUFLNFIsSUFITixFQUlONVIsTUFKTSxDQUlDLEtBQUt1VCxTQUFMLENBQWV6YyxPQUpoQixDQURUO0FBTUE7O0FBRUQ7Ozs7OzsyQkFHUTJGLEMsRUFBRztBQUNWQSxNQUFFaUcsY0FBRjtBQUNBOzs7Z0NBRVlqRyxDLEVBQUc7QUFDZixRQUFJLEtBQUtpVixJQUFULEVBQWU7QUFDZixRQUFNL1gsUUFBUSxLQUFLRCxNQUFMLENBQVlDLEtBQTFCO0FBQ0EsU0FBSzJaLElBQUwsQ0FBVSxFQUFFaEksU0FBVSxLQUFLd0csV0FBTCxDQUFpQnJWLEVBQUV5TSxLQUFuQixDQUFaLEVBQVY7QUFDQXZQLFVBQU1FLFdBQU4sR0FBcUJGLE1BQU0wQyxRQUFOLEdBQWlCLEtBQUt5VixXQUFMLENBQWlCclYsRUFBRXlNLEtBQW5CLENBQXRDO0FBQ0E7OztrQ0FFY3pNLEMsRUFBRztBQUNqQixRQUFNSixXQUFXLEtBQUszQyxNQUFMLENBQVlDLEtBQVosQ0FBa0IwQyxRQUFuQztBQUNBLFFBQUdnWCxNQUFNaFgsUUFBTixDQUFILEVBQW9CO0FBQ25CO0FBQ0E7QUFDRCxRQUFJLEtBQUszQyxNQUFMLENBQVlRLFFBQWhCLEVBQTBCO0FBQ3pCLFVBQUsyWixtQkFBTCxDQUF5QixLQUFLbmEsTUFBTCxDQUFZUSxRQUFaLENBQXFCOEksS0FBOUM7QUFDQTtBQUNEOzs7dUNBRW1CQSxLLEVBQU87QUFDMUIsUUFBRyxLQUFLOUksUUFBTCxJQUFpQixJQUFqQixJQUF5QixLQUFLQSxRQUFMLENBQWNtRixNQUFkLEtBQXlCLENBQXJELEVBQXdEO0FBQ3ZELFVBQUtuRixRQUFMLEdBQWdCLEtBQUs0WixtQkFBTCxDQUF5QjlRLEtBQXpCLENBQWhCO0FBQ0EsVUFBSzRPLElBQUwsQ0FBVTVSLE1BQVYsQ0FBaUIsS0FBSzlGLFFBQXRCO0FBQ0EsS0FIRCxNQUdPO0FBQ04sVUFBS0EsUUFBTCxDQUFjdUcsSUFBZCxDQUFtQixLQUFLcVQsbUJBQUwsQ0FBeUI5USxLQUF6QixDQUFuQjtBQUNBO0FBQ0Q7Ozt1Q0FFbUJBLEssRUFBTztBQUMxQixRQUFNM0csV0FBVyxLQUFLM0MsTUFBTCxDQUFZQyxLQUFaLENBQWtCMEMsUUFBbkM7QUFDQSxRQUFJbEYsU0FBUyxzQkFBRSxTQUFGLEVBQWFKLFFBQWIsQ0FBc0IsNEJBQXRCLENBQWI7QUFDQWlNLFVBQU0zTCxPQUFOLENBQWMsVUFBQzRYLE9BQUQsRUFBYTtBQUMxQixTQUFNNVAsU0FBVTRQLFFBQVF2UCxHQUFSLEdBQWN1UCxRQUFReFAsS0FBdEM7QUFDQSxTQUFNakksT0FBTyxzQkFBRSxTQUFGLEVBQ1hULFFBRFcsQ0FDRiwyQkFERSxFQUVYNkksR0FGVyxDQUVQO0FBQ0pSLGFBQVFDLFNBQVNoRCxRQUFULEdBQW9CLEdBQXBCLEdBQTBCLEdBRDlCO0FBRUowWCxZQUFPOUUsUUFBUXhQLEtBQVIsR0FBZ0JwRCxRQUFoQixHQUEyQixHQUEzQixHQUFpQztBQUZwQyxNQUZPLENBQWI7QUFNQWxGLFlBQU82SSxNQUFQLENBQWN4SSxJQUFkO0FBQ0EsS0FURDtBQVVBLFdBQU9MLE1BQVA7QUFDQTs7OytCQUVZZ2MsQyxFQUFHO0FBQ2YsV0FBTyxDQUFDQSxJQUFJLEtBQUt2QixJQUFMLENBQVU3TCxNQUFWLEdBQW1CZ08sSUFBeEIsSUFBZ0MsS0FBS25DLElBQUwsQ0FBVXhTLEtBQVYsRUFBdkM7QUFDQTs7QUFFRDs7Ozs7Ozs4QkFJZ0M7QUFBQSxRQUF4QmtNLE9BQXdCLFFBQXhCQSxPQUF3QjtBQUFBLFFBQWZ6UixXQUFlLFFBQWZBLFdBQWU7O0FBQy9CLFFBQUdBLGdCQUFnQjJFLFNBQW5CLEVBQThCO0FBQzdCM0UsbUJBQWMsS0FBS0gsTUFBTCxDQUFZQyxLQUFaLENBQWtCMEMsUUFBbEIsR0FBNkJpUCxPQUEzQztBQUNBOztBQUVELFFBQUcrSCxNQUFNeFosV0FBTixDQUFILEVBQXVCO0FBQ3ZCeVIsY0FBVUEsVUFBVSxHQUFwQjtBQUNBLFNBQUtxRyxNQUFMLENBQVk3YSxPQUFaLENBQW9COEksR0FBcEIsQ0FBd0IsTUFBeEIsRUFBZ0MwTCxVQUFVLEdBQTFDO0FBQ0EsU0FBS2tJLFlBQUwsQ0FBa0I1VCxHQUFsQixDQUFzQixPQUF0QixFQUErQjBMLFVBQVUsR0FBekM7QUFDQSxTQUFLelIsV0FBTCxDQUFpQnFULElBQWpCLEdBQXdCLDBCQUFjclQsV0FBZCxDQUF4QjtBQUNBOzs7a0NBRWM7QUFDZCxRQUFNRixRQUFRLEtBQUtELE1BQUwsQ0FBWUMsS0FBMUI7QUFDQSxTQUFLNFosU0FBTCxDQUFlckcsSUFBZixHQUFzQiwwQkFBYyxDQUFkLEVBQWlCekQsS0FBS3lCLEtBQUwsQ0FBV3ZSLE1BQU0wQyxRQUFOLEdBQWlCLElBQTVCLElBQW9DLENBQXJELENBQXRCOztBQUVBOztBQUVBLFNBQUtrWCxTQUFMLENBQWVyRyxJQUFmLEdBQXNCLDBCQUFjdlQsTUFBTTBDLFFBQXBCLENBQXRCO0FBQ0EsU0FBS3hDLFdBQUwsQ0FBaUJxVCxJQUFqQixHQUF3QiwwQkFBY3ZULE1BQU1FLFdBQU4sSUFBcUIsQ0FBbkMsQ0FBeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFRDs7Ozs7O2tDQUdlNEMsQyxFQUFHO0FBQ2pCLFNBQUt1WCxZQUFMO0FBQ0EsUUFBSSxLQUFLdGEsTUFBTCxDQUFZUSxRQUFoQixFQUEwQjtBQUN6QixVQUFLMlosbUJBQUwsQ0FBeUIsS0FBS25hLE1BQUwsQ0FBWVEsUUFBWixDQUFxQjhJLEtBQTlDO0FBQ0E7QUFDRDs7O3NDQUVtQjtBQUFBOztBQUNuQlcsa0JBQWMsS0FBS3NRLG1CQUFuQjtBQUNBLFFBQUl0YSxRQUFRLEtBQUtELE1BQUwsQ0FBWUMsS0FBeEI7QUFDQSxRQUFJdWEsb0JBQW9CLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUM3QixTQUFNQyxNQUFNLENBQVo7QUFDQSxTQUFNQyxRQUFRLENBQWQ7QUFDQSxTQUFJamQsU0FBUyxzQkFBRSxFQUFGLENBQWI7QUFDQXdDLFdBQU0wYSxNQUFOLENBQWFoZCxPQUFiLENBQXFCLGdCQUFRO0FBQzVCLFVBQUlpZCxVQUFVLHNCQUFFLFNBQUYsRUFBYXZkLFFBQWIsQ0FBc0IsZUFBdEIsQ0FBZDtBQUNBdWQsY0FBUTFVLEdBQVIsQ0FBWTtBQUNYbVUsYUFBT3ZjLEtBQUs0YyxLQUFMLElBQWMsR0FBZCxHQUFvQixHQURoQjtBQUVYaFYsY0FBUSxDQUFDNUgsS0FBSzJjLEdBQUwsSUFBWTNjLEtBQUs0YyxLQUFMLENBQWIsSUFBNEIsR0FBNUIsR0FBa0M7QUFGL0IsT0FBWjtBQUlBamQsZUFBU0EsT0FBT29kLEdBQVAsQ0FBV0QsT0FBWCxDQUFUO0FBQ0EsTUFQRDtBQVFBLFlBQUtFLFFBQUwsQ0FBYy9ULElBQWQsQ0FBbUJ0SixNQUFuQjtBQUNBLFNBQUl3QyxNQUFNMGEsTUFBTixDQUFhaFYsTUFBYixJQUF3QixJQUFJMUYsTUFBTThhLFVBQVgsSUFBMEIsSUFBckQsRUFBMkQ7QUFDMUQ5USxvQkFBYyxPQUFLc1EsbUJBQW5CO0FBQ0E7QUFDRCxLQWhCRDtBQWlCQSxTQUFLQSxtQkFBTCxHQUEyQnJRLFlBQVlzUSxpQkFBWixFQUErQixHQUEvQixDQUEzQjtBQUNBOztBQUVEOzs7Ozs7dUNBR3FCO0FBQ3BCLFNBQUtGLFlBQUw7QUFDQSxRQUFJLEtBQUt0YSxNQUFMLENBQVlRLFFBQWhCLEVBQTBCO0FBQ3pCLFVBQUsyWixtQkFBTCxDQUF5QixLQUFLbmEsTUFBTCxDQUFZUSxRQUFaLENBQXFCOEksS0FBOUM7QUFDQTtBQUNEOzs7Ozs7QUFJRixxQkFBVWlDLGlCQUFWLENBQTRCLGlCQUE1QixFQUErQzJOLGVBQS9DO0FBQ0EsbUJBQVEvYixlQUFSLENBQXdCLFVBQXhCLEVBQW9DK2IsZUFBcEM7bUJBQ2VBLGU7Ozs7OztBQzNSZjtBQUNBOzs7Ozs7Ozs7Ozs7QUFJQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBOzs7OztLQUtNOEIsVzs7O0FBQ0wsdUJBQWFoYixNQUFiLEVBQWlDO0FBQUEsT0FBWkksT0FBWSx1RUFBSixFQUFJOztBQUFBOztBQUNoQ0EsYUFBVSxpQkFBRStILE1BQUYsQ0FBUyxFQUFULEVBQWE7QUFDdEIzQixlQUFZLEVBRFU7QUFFdEJzSCxTQUFNO0FBRmdCLElBQWIsRUFHUDFOLE9BSE8sQ0FBVjtBQURnQyxvSEFLMUJKLE1BTDBCLEVBS2xCSSxPQUxrQjtBQU1oQzs7QUFFRDs7Ozs7OzttQ0FHZ0I7QUFDZjtBQUNBOztBQUVEOzs7Ozs7bUNBR2dCO0FBQ2YsNkJBQXVCLEtBQUtBLE9BQUwsQ0FBYW9HLFNBQXBDO0FBQ0E7O0FBR0Q7Ozs7Ozs7O3FCQU1VbUIsSyxFQUFPO0FBQ2hCLFNBQUtzVCxLQUFMLEdBQWF0VCxLQUFiO0FBQ0EsU0FBS3ZLLE9BQUwsQ0FBYTJKLElBQWIsQ0FBa0JZLEtBQWxCO0FBQ0EsSTt1QkFFVztBQUNYLFdBQU8sS0FBS3NULEtBQVo7QUFDQTs7Ozs7O0FBR0YscUJBQVUxUCxpQkFBVixDQUE0QixhQUE1QixFQUEyQ3lQLFdBQTNDO0FBQ0EsbUJBQVE3ZCxlQUFSLENBQXdCLE1BQXhCLEVBQWdDNmQsV0FBaEM7bUJBQ2VBLFc7Ozs7OztBQ3hEZjtBQUNBOzs7Ozs7Ozs7O0FBSUE7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7S0FNTUUsYzs7O0FBRUwsMEJBQVlsYixNQUFaLEVBQW9CSSxPQUFwQixFQUE2QjtBQUFBOztBQUFBLCtIQUN0QkosTUFEc0IsRUFDZEksT0FEYzs7QUFHNUIsU0FBS0osTUFBTCxDQUFZc0MsRUFBWixDQUFlLFVBQWYsRUFBMkIsTUFBS2tWLE1BQUwsQ0FBWWhVLElBQVosT0FBM0I7QUFDQSxTQUFLeEQsTUFBTCxDQUFZc0MsRUFBWixDQUFlLFFBQWYsRUFBeUIsTUFBS2tWLE1BQUwsQ0FBWWhVLElBQVosT0FBekI7QUFDQSxTQUFLeEQsTUFBTCxDQUFZc0MsRUFBWixDQUFlLFdBQWYsRUFBNEIsTUFBS2tWLE1BQUwsQ0FBWWhVLElBQVosT0FBNUI7QUFMNEI7QUFNNUI7O0FBRUQ7Ozs7Ozs7bUNBR2dCO0FBQ2YsU0FBSzJYLEtBQUwsR0FBYSxxQkFBUyxLQUFULEVBQWdCO0FBQzVCM1UsZ0JBQVk7QUFEZ0IsS0FBaEIsQ0FBYjs7QUFJQSxXQUFPLEtBQUtwSixPQUFMLEdBQWUscUJBQVMsS0FBVCxFQUFnQjtBQUNyQ29KLGdCQUFZO0FBRHlCLEtBQWhCLEVBRW5CRixNQUZtQixDQUVaLEtBQUs2VSxLQUZPLENBQXRCO0FBR0E7Ozs0QkFHUTtBQUNSLFFBQU1MLFdBQVcsS0FBSzlhLE1BQUwsQ0FBWUMsS0FBWixDQUFrQjZhLFFBQW5DO0FBQ0EsUUFBTW5ZLFdBQVcsS0FBSzNDLE1BQUwsQ0FBWUMsS0FBWixDQUFrQjBDLFFBQW5DO0FBQ0EsUUFBR21ZLFlBQVksSUFBZixFQUFxQjs7QUFFckIsUUFBSTlVLE1BQU0sQ0FBVjtBQUNBLFFBQUk4VSxTQUFTblYsTUFBVCxHQUFrQixDQUF0QixFQUF5QjtBQUN4QkssV0FBTThVLFNBQVM5VSxHQUFULENBQWE4VSxTQUFTblYsTUFBVCxHQUFrQixDQUEvQixDQUFOO0FBQ0E7O0FBRUQsUUFBSUQsUUFBUSxDQUFaO0FBQ0EsUUFBSS9DLFdBQVcsQ0FBZixFQUFrQjtBQUNqQitDLGFBQVEsdUJBQVdNLEdBQVgsRUFBZ0JyRCxRQUFoQixJQUE0QixHQUE1QixHQUFrQyxHQUExQztBQUNBO0FBQ0QsU0FBS3dZLEtBQUwsQ0FBV2pWLEdBQVgsQ0FBZSxFQUFFUixZQUFGLEVBQWY7QUFDQTs7Ozs7O0FBRUYscUJBQVU2RixpQkFBVixDQUE0QixnQkFBNUIsRUFBOEMyUCxjQUE5QzttQkFDZUEsYzs7Ozs7Ozs7Ozs7Ozs7QUN4RGY7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0tBRU1FLE07OztBQUNMLGtCQUFZcGIsTUFBWixFQUFvQkksT0FBcEIsRUFBNkI7QUFBQTs7QUFFNUJBLGFBQVUsaUJBQUUrSCxNQUFGLENBQVMsRUFBVCxFQUFhO0FBQ3RCNlAsVUFBTyxLQURlO0FBRXRCeFIsZUFBWTtBQUZVLElBQWIsRUFHUHBHLE9BSE8sQ0FBVjs7QUFGNEIsK0dBT3RCSixNQVBzQixFQU9kSSxPQVBjOztBQVE1QixTQUFLaEQsT0FBTCxDQUFha0YsRUFBYixDQUFnQixXQUFoQixFQUE2QixNQUFLK1ksWUFBTCxDQUFrQjdYLElBQWxCLE9BQTdCOztBQUVBLHlCQUFFTSxRQUFGLEVBQVl4QixFQUFaLENBQWU7O0FBRWRnVyxlQUFZLG1CQUFDdlYsQ0FBRCxFQUFPO0FBQ2xCLFNBQUksQ0FBQyxNQUFLaVYsSUFBVixFQUFnQjtBQUNoQixXQUFLNWEsT0FBTCxDQUFhNEUsT0FBYixDQUFxQixvQkFBckIsRUFBMkMsRUFBRXlYLEdBQUkxVyxFQUFFeU0sS0FBUixFQUEzQztBQUNBLEtBTGE7O0FBT2QrSSxhQUFVLGlCQUFDeFYsQ0FBRCxFQUFPO0FBQ2hCLFNBQUksQ0FBQyxNQUFLaVYsSUFBVixFQUFnQjtBQUNoQixXQUFLQSxJQUFMLEdBQVksS0FBWjtBQUNBLFdBQUswQixVQUFMLENBQWdCek8sSUFBaEI7QUFDQSxXQUFLN04sT0FBTCxDQUFhNEUsT0FBYixDQUFxQixrQkFBckIsRUFBeUMsRUFBRXlYLEdBQUkxVyxFQUFFeU0sS0FBUixFQUF6QztBQUNBO0FBWmEsSUFBZjtBQVY0QjtBQXdCNUI7Ozs7Z0NBV1l6TSxDLEVBQUc7QUFDZixRQUFJQSxFQUFFK0YsS0FBRixLQUFZLENBQWhCLEVBQW1CO0FBQ25CL0YsTUFBRWlHLGNBQUY7QUFDQSxRQUFHLEtBQUs1SSxPQUFMLENBQWE0WCxJQUFoQixFQUFzQjtBQUNyQixVQUFLQSxJQUFMLEdBQVksSUFBWjtBQUNBO0FBQ0QsU0FBSzVhLE9BQUwsQ0FBYTRFLE9BQWIsQ0FBcUIsb0JBQXJCO0FBQ0E7OzttQ0FFZTtBQUNmO0FBQ0EsU0FBSzBYLFVBQUwsR0FBa0Isc0JBQUUsU0FBRixFQUNoQnJjLFFBRGdCLENBQ1AsTUFETyxFQUVoQjROLElBRmdCLEVBQWxCOztBQUlBLFdBQU8sS0FBSzdOLE9BQUwsR0FBZSxzQkFBRSxTQUFGLEVBQ3BCQyxRQURvQixrQkFDSSxLQUFLK0MsT0FBTCxDQUFhb0csU0FEakIsRUFFcEJGLE1BRm9CLENBRWIsS0FBS29ULFVBRlEsQ0FBdEI7QUFJQTs7O3FCQTVCUS9SLEssRUFBTztBQUNmLFNBQUsyVCxLQUFMLEdBQWEzVCxLQUFiO0FBQ0EsU0FBS3ZLLE9BQUwsQ0FBYWdPLFdBQWIsQ0FBeUIsbUJBQXpCLEVBQThDekQsS0FBOUM7QUFDQSxJO3VCQUVVO0FBQ1YsV0FBTyxLQUFLMlQsS0FBWjtBQUNBOzs7Ozs7QUF3QkYscUJBQVUvUCxpQkFBVixDQUE0QixRQUE1QixFQUFzQzZQLE1BQXRDO21CQUNlQSxNOzs7Ozs7QUM5RGY7QUFDQTs7Ozs7Ozs7Ozs7O0FBSUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7O0tBT01HLGM7OztBQUNMLDBCQUFhdmIsTUFBYixFQUFpQztBQUFBLE9BQVpJLE9BQVksdUVBQUosRUFBSTs7QUFBQTs7QUFDaENBLGFBQVUsaUJBQUUrSCxNQUFGLENBQVMsRUFBVCxFQUFhO0FBQ3RCNUIsY0FBVyxTQURXO0FBRXRCQyxlQUFZLFNBRlU7QUFHdEJ2QyxVQUFPLFNBSGU7QUFJdEIrQyxXQUFRLHdCQUpjO0FBS3RCMkYsYUFBVTtBQUxZLElBQWIsRUFNUHZNLE9BTk8sQ0FBVjs7QUFEZ0MsK0hBUTFCSixNQVIwQixFQVFsQkksT0FSa0I7O0FBVWhDLFNBQUtKLE1BQUwsQ0FBWXNDLEVBQVosQ0FBZSxjQUFmLEVBQStCLE1BQUtrWixlQUFMLENBQXFCaFksSUFBckIsT0FBL0I7QUFDQSxTQUFLeEQsTUFBTCxDQUFZc0MsRUFBWixDQUFlLGdCQUFmLEVBQWlDLE1BQUttWixnQkFBTCxDQUFzQmpZLElBQXRCLE9BQWpDO0FBWGdDO0FBWWhDOzs7OzZCQUVTVCxDLEVBQUdoQixJLEVBQU07QUFDbEIsOEhBQWdCZ0IsQ0FBaEI7QUFDQSxTQUFLL0MsTUFBTCxDQUFZMGIsY0FBWixDQUEyQjNaLEtBQUs0WixPQUFoQztBQUNBOzs7b0NBRWdCNVksQyxFQUFHaEIsSSxFQUFNO0FBQUEsUUFDakJvVSxTQURpQixHQUNIcFUsSUFERyxDQUNqQm9VLFNBRGlCOztBQUV6QixRQUFHLEtBQUt3RixPQUFMLEtBQWlCeEYsU0FBcEIsRUFBK0I7QUFDOUIsVUFBS3dGLE9BQUwsR0FBZXhGLFNBQWY7QUFDQTtBQUVEOzs7bUNBRWVwVCxDLEVBQUc7QUFDbEIsU0FBSzNDLE9BQUwsQ0FBYXVNLE9BQWIsR0FBdUIsS0FBS0EsT0FBTCxHQUFlLEtBQXRDO0FBQ0EsU0FBS2dQLE9BQUwsR0FBZSxJQUFmO0FBQ0E7Ozs7OztBQUdGLHFCQUFVcFEsaUJBQVYsQ0FBNEIsZ0JBQTVCLEVBQThDZ1EsY0FBOUM7QUFDQSxtQkFBUXBlLGVBQVIsQ0FBd0IsU0FBeEIsRUFBbUNvZSxjQUFuQzttQkFDZUEsYzs7Ozs7O0FDckRmO0FBQ0E7Ozs7Ozs7Ozs7OztBQUtBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7S0FNTUssZTs7O0FBRUwsMkJBQVk1YixNQUFaLEVBQWdDO0FBQUEsT0FBWkksT0FBWSx1RUFBSixFQUFJOztBQUFBOztBQUFBLGlJQUN6QkosTUFEeUIsRUFDakJJLE9BRGlCOztBQUUvQixTQUFLdWIsT0FBTCxHQUFlLE1BQUt2YixPQUFMLENBQWF1YixPQUFiLElBQXdCLEtBQXZDO0FBQ0EsU0FBS3ZlLE9BQUwsQ0FBYWtGLEVBQWIsQ0FBZ0Isa0JBQWhCLEVBQW9DLE1BQUt1WixTQUFMLENBQWVyWSxJQUFmLE9BQXBDO0FBSCtCO0FBSS9COztBQUdEOzs7Ozs7Ozs7OztBQXdCQTs7OzJCQUdTVCxDLEVBQUc7QUFDWCw4SEFBY0EsQ0FBZDtBQUNBLFNBQUs0WSxPQUFMLEdBQWUsQ0FBQyxLQUFLQSxPQUFyQjtBQUNBOztBQUVEOzs7Ozs7Ozs7NkJBTVU1WSxDLEVBQUdoQixJLEVBQU0sQ0FFbEI7O0FBR0Q7Ozs7OzttQ0FHZ0I7QUFDZjtBQUNBOzs7cUJBM0NZd0YsRyxFQUFLO0FBQ2pCLFFBQUksS0FBS29GLE9BQVQsRUFBa0I7QUFDakI7QUFDQTtBQUNEcEYsVUFBTSxDQUFDLENBQUNBLEdBQVI7QUFDQSxTQUFLdVUsUUFBTCxHQUFnQnZVLEdBQWhCO0FBQ0EsU0FBS25LLE9BQUwsQ0FBYWdPLFdBQWIsQ0FBeUIsMkJBQXpCLEVBQXNEN0QsR0FBdEQ7QUFDQSxTQUFLbkssT0FBTCxDQUFhNEUsT0FBYixDQUFxQixrQkFBckIsRUFBeUMsRUFBRTJaLFNBQVVwVSxHQUFaLEVBQXpDO0FBQ0E7O0FBRUQ7Ozs7Ozt1QkFLZTtBQUNkLFdBQU8sS0FBS3VVLFFBQVo7QUFDQTs7Ozs7O0FBOEJGLHFCQUFVdlEsaUJBQVYsQ0FBNEIsaUJBQTVCLEVBQStDcVEsZUFBL0M7QUFDQSxtQkFBUXplLGVBQVIsQ0FBd0IsVUFBeEIsRUFBb0N5ZSxlQUFwQzttQkFDZUEsZTs7Ozs7O0FDOUVmO0FBQ0E7Ozs7Ozs7Ozs7OztBQUlBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7O0tBS01HLGlCOzs7QUFDTCw2QkFBYS9iLE1BQWIsRUFBaUM7QUFBQSxPQUFaSSxPQUFZLHVFQUFKLEVBQUk7O0FBQUE7O0FBQ2hDQSxhQUFVLGlCQUFFK0gsTUFBRixDQUFTLEVBQVQsRUFBYTtBQUN0QjVCLGNBQVcsWUFEVztBQUV0QkMsZUFBWSxZQUZVO0FBR3RCUSxXQUFRLHFDQUhjO0FBSXRCL0MsVUFBTztBQUplLElBQWIsRUFLUDdELE9BTE8sQ0FBVjtBQURnQyxnSUFPMUJKLE1BUDBCLEVBT2xCSSxPQVBrQjtBQVFoQzs7QUFFRDs7Ozs7OzsyQkFHUTJDLEMsRUFBRztBQUNWLGtJQUFjQSxDQUFkO0FBQ0EsU0FBSy9DLE1BQUwsQ0FBWVksZ0JBQVo7QUFDQTs7Ozs7O0FBR0YscUJBQVUySyxpQkFBVixDQUE0QixtQkFBNUIsRUFBaUR3USxpQkFBakQ7QUFDQSxtQkFBUTVlLGVBQVIsQ0FBd0IsWUFBeEIsRUFBc0M0ZSxpQkFBdEM7bUJBQ2VBLGlCOzs7Ozs7QUNwQ2Y7QUFDQTs7Ozs7Ozs7Ozs7O0FBSUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7Ozs7OztLQVNNQyxXOzs7QUFDTCx1QkFBYWhjLE1BQWIsRUFBaUM7QUFBQSxPQUFaSSxPQUFZLHVFQUFKLEVBQUk7O0FBQUE7O0FBQ2hDQSxhQUFVLGlCQUFFK0gsTUFBRixDQUFTLEVBQVQsRUFBYTtBQUN0QjNCLGVBQVksbUJBRFU7QUFFdEJzSCxTQUFNO0FBRmdCLElBQWIsRUFHUDFOLE9BSE8sQ0FBVjs7QUFEZ0MseUhBSzFCSixNQUwwQixFQUtsQkksT0FMa0I7O0FBT2hDLFNBQUtKLE1BQUwsQ0FBWXNDLEVBQVosQ0FBZSxZQUFmLEVBQTZCLFlBQU07QUFDbEMsVUFBS2tWLE1BQUw7QUFDQSxJQUZEO0FBUGdDO0FBVWhDOztBQUVEOzs7Ozs7O21DQUdnQjtBQUNmO0FBQ0EsUUFBTXZYLFFBQVEsS0FBS0QsTUFBTCxDQUFZQyxLQUExQjs7QUFFQSxTQUFLZ2MsV0FBTCxHQUFtQixzQkFBWSxLQUFLamMsTUFBakIsRUFBeUI7QUFDM0N3RyxnQkFBWSxXQUQrQjtBQUUzQ3ZDLFdBQU8sV0FGb0M7QUFHM0NzQyxlQUFXLFVBSGdDO0FBSTNDdU4saUJBQWEsS0FBSzFULE9BQUwsQ0FBYTBULFVBSmlCO0FBSzNDOU0sWUFBUSxpQ0FMbUM7QUFNM0MwRyxjQUFVLGlCQUFTM0ssQ0FBVCxFQUFZO0FBQ3JCOUMsWUFBTWljLFlBQU47QUFDQTtBQVIwQyxLQUF6QixDQUFuQjs7QUFXQSxTQUFLQyxTQUFMLEdBQWlCLHNCQUFZLEtBQUtuYyxNQUFqQixFQUF5QjtBQUN6Q3dHLGdCQUFZLFNBRDZCO0FBRXpDdkMsV0FBTyxTQUZrQztBQUd6Q3NDLGVBQVcsU0FIOEI7QUFJekN1TixpQkFBYSxLQUFLMVQsT0FBTCxDQUFhMFQsVUFKZTtBQUt6QzlNLFlBQVEsaUNBTGlDO0FBTXpDMEcsY0FBVSxpQkFBUzNLLENBQVQsRUFBWTtBQUNyQjlDLFlBQU1tYyxZQUFOO0FBQ0E7QUFSd0MsS0FBekIsQ0FBakI7O0FBV0EsU0FBS0MsV0FBTCxHQUFtQiwwQkFBZ0IsS0FBS3JjLE1BQXJCLEVBQTZCO0FBQy9Dd0csZ0JBQVksY0FEbUM7QUFFL0NrSCxjQUFVLGlCQUFTM0ssQ0FBVCxFQUFZO0FBQ3JCOUMsWUFBTXZCLElBQU4sR0FBYSxLQUFLc0IsTUFBTCxDQUFZSSxPQUFaLENBQW9CMUIsSUFBcEIsQ0FBeUJJLE9BQXRDO0FBQ0E7QUFKOEMsS0FBN0IsQ0FBbkI7O0FBT0EsU0FBSzFCLE9BQUwsQ0FDRWtKLE1BREYsQ0FDUyxLQUFLMlYsV0FBTCxDQUFpQjdlLE9BRDFCLEVBRUVrSixNQUZGLENBRVMsS0FBSytWLFdBQUwsQ0FBaUJqZixPQUYxQixFQUdFa0osTUFIRixDQUdTLEtBQUs2VixTQUFMLENBQWUvZSxPQUh4QjtBQUlBOztBQUVEOzs7Ozs7bUNBR2dCO0FBQ2YsV0FBTyxLQUFLZ0QsT0FBTCxDQUFhb0csU0FBcEI7QUFDQTs7QUFFRDs7Ozs7O29DQUdpQjtBQUNoQixTQUFLZ1IsTUFBTDtBQUNBOztBQUVEOzs7Ozs7MkJBR1F6VSxDLEVBQUc7QUFDVkEsTUFBRWlHLGNBQUY7QUFDQTs7OzBCQUVNckIsSyxFQUFPO0FBQ2IsUUFBTTFILFFBQVEsS0FBS0QsTUFBTCxDQUFZQyxLQUExQjs7QUFFQTBILFlBQVFBLFNBQVMxSCxNQUFNdkIsSUFBdkI7QUFDQWlKLFlBQVEyVSxXQUFXM1UsS0FBWCxFQUNONFUsT0FETSxDQUNFLENBREYsRUFFTnpHLFFBRk0sR0FHTjBHLE9BSE0sQ0FHRSxJQUhGLEVBR1EsR0FIUixDQUFSO0FBSUEsU0FBS0gsV0FBTCxDQUFpQjdJLElBQWpCLEdBQXdCLE1BQU03TCxLQUE5Qjs7QUFFQSxRQUFHLEtBQUtnRixPQUFSLEVBQWlCOztBQUVqQixRQUFHMU0sTUFBTXZCLElBQU4sSUFBY3VCLE1BQU13YyxPQUF2QixFQUFnQztBQUMvQixVQUFLUixXQUFMLENBQWlCdFAsT0FBakIsR0FBMkIsSUFBM0I7QUFDQSxLQUZELE1BRU87QUFDTixVQUFLc1AsV0FBTCxDQUFpQnRQLE9BQWpCLEdBQTJCLEtBQTNCO0FBQ0E7O0FBRUQsUUFBRzFNLE1BQU12QixJQUFOLElBQWN1QixNQUFNeWMsT0FBdkIsRUFBZ0M7QUFDL0IsVUFBS1AsU0FBTCxDQUFleFAsT0FBZixHQUF5QixJQUF6QjtBQUNBLEtBRkQsTUFFTztBQUNOLFVBQUt3UCxTQUFMLENBQWV4UCxPQUFmLEdBQXlCLEtBQXpCO0FBQ0E7QUFDRDs7OzBCQVFPO0FBQ1AsUUFBSWpPLE9BQU8saUJBQU9pZSxHQUFQLENBQVcsTUFBWCxFQUFtQixLQUFLM2MsTUFBTCxDQUFZSSxPQUFaLENBQW9CMUIsSUFBcEIsQ0FBeUJJLE9BQTVDLENBQVg7QUFDQSxTQUFLd0IsSUFBTCxDQUFVNUIsSUFBVjtBQUNBOzs7cUJBVFdpSixLLEVBQU87QUFDbEIsU0FBS3VHLFFBQUwsR0FBZ0J2RyxLQUFoQjtBQUNBLFNBQUtzVSxXQUFMLENBQWlCdFAsT0FBakIsR0FBMkJoRixLQUEzQjtBQUNBLFNBQUt3VSxTQUFMLENBQWV4UCxPQUFmLEdBQXlCaEYsS0FBekI7QUFDQTs7Ozs7O0FBU0YscUJBQVU0RCxpQkFBVixDQUE0QixhQUE1QixFQUEyQ3lRLFdBQTNDO0FBQ0EsbUJBQVE3ZSxlQUFSLENBQXdCLE1BQXhCLEVBQWdDNmUsV0FBaEM7bUJBQ2VBLFc7Ozs7OztBQ3hJZjtBQUNBOzs7Ozs7Ozs7Ozs7OztBQU1BOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7OztLQU1NWSxlOzs7QUFDTCwyQkFBYTVjLE1BQWIsRUFBaUM7QUFBQSxPQUFaSSxPQUFZLHVFQUFKLEVBQUk7O0FBQUE7O0FBQ2hDQSxhQUFVLGlCQUFFK0gsTUFBRixDQUFTLEVBQVQsRUFBYTtBQUN0QjVCLGNBQVcsTUFEVztBQUV0QkMsZUFBWSxVQUZVO0FBR3RCdkMsVUFBTyxVQUhlO0FBSXRCK0MsNkdBQTZCaEgsT0FBT0ksT0FBUCxDQUFlckIsUUFBZixDQUF3QkosSUFBeEIsQ0FBNkJNLE1BQTFELDBDQUpzQjtBQUt0QjBOLGFBQVU7QUFMWSxJQUFiLEVBTVB2TSxPQU5PLENBQVY7O0FBRGdDLGlJQVExQkosTUFSMEIsRUFRbEJJLE9BUmtCOztBQVVoQyxTQUFLSixNQUFMLENBQVlzQyxFQUFaLENBQWUsV0FBZixFQUE0QjtBQUFBLFdBQU0sTUFBS3FLLE9BQUwsR0FBZSxLQUFyQjtBQUFBLElBQTVCO0FBVmdDO0FBV2hDOztBQUVEOzs7Ozs7OzJCQUdRNUosQyxFQUFHO0FBQ1YsOEhBQWNBLENBQWQ7QUFDQSxTQUFLL0MsTUFBTCxDQUFZQyxLQUFaLENBQWtCRSxXQUFsQixJQUFpQyxLQUFLSCxNQUFMLENBQVlJLE9BQVosQ0FBb0JyQixRQUFwQixDQUE2QkosSUFBN0IsQ0FBa0NNLE1BQW5FO0FBQ0EsU0FBS2UsTUFBTCxDQUFZSyxVQUFaLENBQXVCQyxJQUF2QixDQUE0QixNQUE1QjtBQUNBOzs7Ozs7QUFHRixxQkFBVWlMLGlCQUFWLENBQTRCLGlCQUE1QixFQUErQ3FSLGVBQS9DO0FBQ0EsbUJBQVF6ZixlQUFSLENBQXdCLFVBQXhCLEVBQW9DeWYsZUFBcEM7bUJBQ2VBLGU7Ozs7OztBQzNDZjtBQUNBOzs7Ozs7Ozs7O0FBSUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUdBOzs7OztLQUtNQyxhOzs7QUFDTDtBQUNBLHlCQUFhN2MsTUFBYixFQUFpQztBQUFBLE9BQVpJLE9BQVksdUVBQUosRUFBSTs7QUFBQTs7QUFDaENBLGFBQVUsaUJBQUUrSCxNQUFGLENBQVMsRUFBVCxFQUFhO0FBQ3RCbEUsVUFBTyxRQURlO0FBRXRCc0MsY0FBVyxVQUZXO0FBR3RCUyxXQUFRLFVBSGM7QUFJdEJSLGVBQVksZ0JBSlU7QUFLdEJtRyxhQUFVO0FBTFksSUFBYixFQU1Qdk0sT0FOTyxDQUFWOztBQURnQyw2SEFRMUJKLE1BUjBCLEVBUWxCSSxPQVJrQjs7QUFVaEMsU0FBS0osTUFBTCxDQUFZc0MsRUFBWixDQUFlLFNBQWYsRUFBMEIsTUFBS2tWLE1BQUwsQ0FBWWhVLElBQVosT0FBMUI7QUFDQSxTQUFLeEQsTUFBTCxDQUFZc0MsRUFBWixDQUFlLGVBQWYsRUFBZ0MsTUFBS2tWLE1BQUwsQ0FBWWhVLElBQVosT0FBaEM7QUFYZ0M7QUFZaEM7Ozs7K0JBRVdULEMsRUFBRztBQUNkQSxNQUFFaUcsY0FBRjs7QUFFQSxRQUFNbEwsT0FBTyxzQkFBRWlGLEVBQUV5UyxNQUFKLENBQWI7QUFDQSxRQUFNdlYsUUFBUSxLQUFLRCxNQUFMLENBQVlDLEtBQTFCO0FBQ0FBLFVBQU02YyxlQUFOLEdBQXdCaGYsS0FBS2lFLElBQUwsQ0FBVSxNQUFWLENBQXhCOztBQUVBLFNBQUtzVyxlQUFMLENBQXFCcE4sSUFBckI7QUFFQTs7O2tDQUVjbEksQyxFQUFHaEIsSSxFQUFNO0FBQ3ZCLFNBQUt5VixNQUFMO0FBQ0E7Ozs2QkFFUztBQUNULFdBQU8sS0FBS3hYLE1BQUwsQ0FBWUMsS0FBWixDQUFrQjhjLHlCQUFsQixFQUFQO0FBQ0E7OztxQ0FFaUI7QUFDakIsV0FBTyxLQUFLL2MsTUFBTCxDQUFZQyxLQUFaLENBQWtCNmMsZUFBekI7QUFDQTs7Ozs7O0FBR0YscUJBQVV2UixpQkFBVixDQUE0QixlQUE1QixFQUE2Q3NSLGFBQTdDO0FBQ0EsbUJBQVExZixlQUFSLENBQXdCLFFBQXhCLEVBQWtDMGYsYUFBbEM7bUJBQ2VBLGE7Ozs7OztBQzFEZjtBQUNBOzs7Ozs7Ozs7Ozs7QUFJQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7O0tBS01HLGdCOzs7QUFFTCw0QkFBWWhkLE1BQVosRUFBZ0M7QUFBQSxPQUFaSSxPQUFZLHVFQUFKLEVBQUk7O0FBQUE7O0FBQUEsbUlBQ3pCSixNQUR5QixFQUNqQkksT0FEaUI7O0FBRS9CLFNBQUs2YyxPQUFMLEdBQWUsSUFBZjtBQUNBOzs7Ozs7QUFNQSxTQUFLQyxJQUFMLEdBQVksRUFBWjtBQVQrQjtBQVUvQjs7QUFFRDs7Ozs7Ozs7Ozs4QkFNV3RmLEssRUFBTztBQUNqQixXQUFPLEtBQUtzZixJQUFMLENBQVV0ZixLQUFWLENBQVA7QUFDQTs7QUFFRDs7Ozs7Ozs7O29DQU1pQkEsSyxFQUFPO0FBQ3ZCLFFBQUksS0FBSytLLE1BQVQsRUFBaUI7QUFDaEIsVUFBS0EsTUFBTCxDQUFZbEcsV0FBWixDQUF3QixpQ0FBeEI7QUFDQTtBQUNELFNBQUt3YSxPQUFMLEdBQWUsS0FBS0MsSUFBTCxDQUFVdGYsS0FBVixFQUFpQlAsUUFBakIsQ0FBMEIsaUNBQTFCLENBQWY7QUFDQSxXQUFPLEtBQUs0ZixPQUFaO0FBQ0E7O0FBR0Q7Ozs7Ozs7Ozs7O0FBcUNBOzs7OzsyQkFLU0UsTyxFQUFTcGIsSSxFQUFNO0FBQ3ZCLFFBQU1qRSxPQUFPLHNCQUFFLFNBQUYsRUFDWFQsUUFEVyxDQUNGLHlCQURFLEVBRVgwRSxJQUZXLENBRU5BLElBRk0sRUFHWGtFLElBSFcsQ0FHTixPQUhNLEVBR0dsRSxLQUFLcWIsT0FIUixFQUlYOWEsRUFKVyxDQUlSLFdBSlEsRUFJSyxLQUFLK2EsV0FBTCxDQUFpQjdaLElBQWpCLENBQXNCLElBQXRCLENBSkwsRUFLWDhDLE1BTFcsQ0FLSjZXLE9BTEksQ0FBYjs7QUFPQSxTQUFLRCxJQUFMLEdBQVksS0FBS0EsSUFBTCxDQUFVeGYsTUFBVixDQUFpQkksSUFBakIsQ0FBWjs7QUFFQSxTQUFLdWEsZUFBTCxDQUFxQi9SLE1BQXJCLENBQTRCeEksSUFBNUI7O0FBRUEsU0FBSzBQLGFBQUwsQ0FBbUIxUCxJQUFuQjs7QUFFQSxXQUFPQSxJQUFQO0FBQ0E7O0FBRUQ7Ozs7Ozs7OytCQUthaUYsQyxFQUFHO0FBQ2YsU0FBSzRGLE1BQUwsR0FBYzVGLEVBQUV1YSxhQUFoQjtBQUNBOztBQUVEOzs7Ozs7bUNBR2dCO0FBQ2Y7QUFDQTs7OzRCQUVRO0FBQUE7O0FBQ1IsUUFBTXZiLE9BQU8sS0FBS3FELE9BQUwsRUFBYjtBQUNBLFFBQU1tWSxlQUFlLEtBQUtDLGVBQUwsRUFBckI7O0FBRUEsUUFBR3piLFFBQVEsSUFBUixJQUFnQkEsS0FBSzRELE1BQUwsS0FBZ0IsQ0FBbkMsRUFBc0M7QUFDckMsVUFBS2dILE9BQUwsR0FBZSxJQUFmO0FBQ0E7QUFDQTs7QUFFRCxTQUFLdVEsSUFBTCxHQUFZLEVBQVo7QUFDQSxTQUFLN0UsZUFBTCxDQUFxQm9GLEtBQXJCOztBQUVBMWIsU0FBS3BFLE9BQUwsQ0FBYSxnQkFBUTtBQUNwQixTQUFNK2YsT0FBTyxPQUFLQyxPQUFMLENBQWE3ZixLQUFLa0osS0FBbEIsRUFBeUJsSixJQUF6QixDQUFiO0FBQ0EsU0FBR3lmLGdCQUFnQkEsYUFBYXRaLElBQWIsS0FBc0JuRyxLQUFLbUcsSUFBOUMsRUFBb0Q7O0FBRW5ELGFBQUswRSxNQUFMLEdBQWMrVSxJQUFkO0FBQ0E7QUFDRCxLQU5EO0FBT0EsU0FBSy9RLE9BQUwsR0FBZSxLQUFmO0FBQ0E7Ozt1QkF6RmE7QUFBQTs7QUFDYixRQUFJLEtBQUtzUSxPQUFMLElBQWdCLEtBQUtBLE9BQUwsQ0FBYXRYLE1BQWIsR0FBc0IsQ0FBMUMsRUFBNkM7QUFDNUMsWUFBTyxLQUFLc1gsT0FBWjtBQUNBO0FBQ0QsU0FBS0MsSUFBTCxDQUFVdmYsT0FBVixDQUFrQixnQkFBUTtBQUN6QixTQUFJRyxLQUFLa1EsUUFBTCxDQUFjLGlDQUFkLENBQUosRUFBc0Q7QUFDckQsYUFBS2lQLE9BQUwsR0FBZW5mLElBQWY7QUFDQTtBQUNELEtBSkQ7QUFLQSxXQUFPLEtBQUttZixPQUFaO0FBQ0E7O0FBRUQ7Ozs7Ozs7cUJBTVk3ZixPLEVBQVM7QUFDcEIsUUFBSSxLQUFLdUwsTUFBVCxFQUFpQjtBQUNoQixVQUFLQSxNQUFMLENBQVlsRyxXQUFaLENBQXdCLGlDQUF4QjtBQUNBO0FBQ0QsUUFBSXJGLE9BQUosRUFBYTtBQUNaLDJCQUFFQSxPQUFGLEVBQVdDLFFBQVgsQ0FBb0IsaUNBQXBCO0FBQ0E7QUFDRCxTQUFLNGYsT0FBTCxHQUFlN2YsT0FBZjtBQUNBLFNBQUsyYixLQUFMO0FBQ0EsV0FBTyxLQUFLa0UsT0FBWjtBQUNBOzs7Ozs7QUFnRUYscUJBQVUxUixpQkFBVixDQUE0QixrQkFBNUIsRUFBZ0R5UixnQkFBaEQ7QUFDQSxtQkFBUTdmLGVBQVIsQ0FBd0IsV0FBeEIsRUFBcUM2ZixnQkFBckM7bUJBQ2VBLGdCOzs7Ozs7QUMxSmY7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFNQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7O0tBS01ZLGU7OztBQUNMLDJCQUFhNWQsTUFBYixFQUFpQztBQUFBLE9BQVpJLE9BQVksdUVBQUosRUFBSTs7QUFBQTs7QUFDaENBLGFBQVUsaUJBQUUrSCxNQUFGLENBQVMsRUFBVCxFQUFhO0FBQ3RCNUIsY0FBVyxjQURXO0FBRXRCUyxXQUFRLFVBRmM7QUFHdEIvQyxVQUFPLFVBSGU7QUFJdEJ1QyxlQUFZLGtCQUpVO0FBS3RCbUcsYUFBVTtBQUxZLElBQWIsRUFNUHZNLE9BTk8sQ0FBVjs7QUFEZ0MsaUlBUTFCSixNQVIwQixFQVFsQkksT0FSa0I7O0FBVWhDLFNBQUtKLE1BQUwsQ0FBWXNDLEVBQVosQ0FBZSxTQUFmLEVBQTBCLE1BQUtrVixNQUFMLENBQVloVSxJQUFaLE9BQTFCO0FBQ0EsU0FBS3hELE1BQUwsQ0FBWXNDLEVBQVosQ0FBZSxjQUFmLEVBQStCLE1BQUtrVixNQUFMLENBQVloVSxJQUFaLE9BQS9CO0FBWGdDO0FBWWhDOzs7OzJCQUVRVCxDLEVBQUc7QUFDWCw4SEFBY0EsQ0FBZDtBQUNBLFFBQU05QyxRQUFRLEtBQUtELE1BQUwsQ0FBWUMsS0FBMUI7QUFDQUEsVUFBTTRkLEtBQU4sR0FBYyxJQUFkO0FBQ0E7OzsrQkFFWTlhLEMsRUFBRztBQUNmQSxNQUFFaUcsY0FBRjtBQUNBakcsTUFBRSthLGVBQUY7O0FBRUEsUUFBTWhnQixPQUFPLHNCQUFFaUYsRUFBRXlTLE1BQUosQ0FBYjtBQUNBLFFBQU12VixRQUFRLEtBQUtELE1BQUwsQ0FBWUMsS0FBMUI7QUFDQSxRQUFJbkMsS0FBS2lFLElBQUwsRUFBSixFQUFpQjtBQUNoQjlCLFdBQU00ZCxLQUFOLEdBQWMvZixLQUFLaUUsSUFBTCxFQUFkO0FBQ0E7O0FBRUQsU0FBS3NXLGVBQUwsQ0FBcUJwTixJQUFyQjtBQUNBOzs7a0NBRWNsSSxDLEVBQUdoQixJLEVBQU07QUFDdkIsU0FBS3lWLE1BQUw7QUFDQTs7OzRCQUVRO0FBQ1I7QUFDQSxRQUFNdUcsV0FBVyxDQUFDLEVBQUUsS0FBS1AsZUFBTCxNQUEwQixLQUFLQSxlQUFMLEdBQXVCdlosSUFBdkIsSUFBK0IsSUFBM0QsQ0FBbEI7QUFDQSxTQUFLN0csT0FBTCxDQUFhZ08sV0FBYixDQUNDLDJCQURELEVBRUMyUyxRQUZEO0FBSUE7Ozs2QkFFUztBQUNULFdBQU8sS0FBSy9kLE1BQUwsQ0FBWUMsS0FBWixDQUFrQitkLFNBQXpCO0FBQ0E7OztxQ0FFaUI7QUFDakIsV0FBTyxLQUFLaGUsTUFBTCxDQUFZQyxLQUFaLENBQWtCNGQsS0FBekI7QUFDQTs7Ozs7O0FBSUYscUJBQVV0UyxpQkFBVixDQUE0QixpQkFBNUIsRUFBK0NxUyxlQUEvQztBQUNBLG1CQUFRemdCLGVBQVIsQ0FBd0IsVUFBeEIsRUFBb0N5Z0IsZUFBcEM7bUJBQ2VBLGU7Ozs7OztBQzVFZjtBQUNBOzs7Ozs7Ozs7Ozs7OztBQU1BOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7O0tBTU1LLGU7OztBQUNMLDJCQUFhamUsTUFBYixFQUFpQztBQUFBLE9BQVpJLE9BQVksdUVBQUosRUFBSTs7QUFBQTs7QUFDaENBLGFBQVUsaUJBQUUrSCxNQUFGLENBQVM7QUFDbEJuQixXQUFRLGVBRFU7QUFFbEJSLGVBQVksVUFGTTtBQUdsQnZDLFVBQU87QUFIVyxJQUFULEVBSVA3RCxPQUpPLENBQVY7O0FBRGdDLGlJQU0xQkosTUFOMEIsRUFNbEJJLE9BTmtCOztBQU9oQyxTQUFLSixNQUFMLENBQVlzQyxFQUFaLENBQWUsV0FBZixFQUE0QixNQUFLNGIsV0FBTCxDQUFpQjFhLElBQWpCLE9BQTVCO0FBUGdDO0FBUWhDOztBQUdEOzs7Ozs7O21DQUdnQjtBQUNmO0FBQ0EsU0FBS3BHLE9BQUwsR0FBZSxzQkFBRSxPQUFGLEVBQ2I2SSxJQURhLENBQ1I7QUFDTGtZLFdBQU8sRUFERjtBQUVMM0ksYUFBUyxRQUZKO0FBR0w0SSxlQUFXLElBSE47QUFJTHBYLFlBQVEsS0FBSzVHLE9BQUwsQ0FBYTRHO0FBSmhCLEtBRFEsRUFPYjNKLFFBUGEsQ0FPSixLQUFLMFEsYUFBTCxFQVBJLEVBUWJ6SCxNQVJhLENBUU4sbUJBQVMsS0FBS3RHLE1BQWQsRUFBc0IsRUFBRXVHLFVBQVcsVUFBYixFQUF0QixFQUFpRG5KLE9BUjNDLENBQWY7QUFTQTs7QUFFRDs7Ozs7O21DQUdnQjtBQUNmO0FBQ0E7O0FBR0Q7Ozs7Ozs7OytCQXlCWTJGLEMsRUFBR2hCLEksRUFBTTtBQUNwQixTQUFLc2MsSUFBTCxHQUFZLEtBQUtyZSxNQUFMLENBQVlDLEtBQVosQ0FBa0JxRCxHQUFsQixDQUFzQk4sR0FBbEM7QUFDQTs7O3FCQXRCUzJFLEssRUFBTztBQUNoQixRQUFNWCxRQUFRLEtBQUtoSCxNQUFMLENBQVlJLE9BQVosQ0FBb0I0RyxLQUFsQztBQUNBLFFBQUlzWCxpQkFBSjs7QUFFQSxRQUFHdFgsU0FBUyxJQUFaLEVBQWtCO0FBQ2pCc1gsZ0JBQVdDLG1CQUFtQnZYLEtBQW5CLElBQTRCLEdBQTVCLEdBQWtDd1gsaUJBQWlCN1csS0FBakIsQ0FBN0M7QUFDQSxLQUZELE1BRU87QUFDTixTQUFNOFcsU0FBUzNhLFNBQVM3QyxhQUFULENBQXVCLEdBQXZCLENBQWY7QUFDQXdkLFlBQU9OLElBQVAsR0FBY3hXLEtBQWQ7QUFDQTJXLGdCQUFXRyxPQUFPQyxRQUFQLENBQWdCblEsS0FBaEIsQ0FBc0IsR0FBdEIsQ0FBWDtBQUNBK1AsZ0JBQVdBLFNBQVNBLFNBQVMzWSxNQUFULEdBQWtCLENBQTNCLENBQVg7QUFDQTs7QUFFRCxTQUFLdkksT0FBTCxDQUFhNkksSUFBYixDQUFrQjtBQUNqQmtZLFdBQU94VyxLQURVO0FBRWpCeVcsZUFBV0U7QUFGTSxLQUFsQjtBQUlBOzs7Ozs7QUFRRixVQUFTRSxnQkFBVCxDQUEwQkYsUUFBMUIsRUFBb0M7QUFDbkMsU0FBT0EsU0FBUy9QLEtBQVQsQ0FBZSxHQUFmLEVBQW9Cb1EsR0FBcEIsRUFBUDtBQUNBOztBQUVELHFCQUFVcFQsaUJBQVYsQ0FBNEIsaUJBQTVCLEVBQStDMFMsZUFBL0M7QUFDQSxtQkFBUTlnQixlQUFSLENBQXdCLFVBQXhCLEVBQW9DOGdCLGVBQXBDO21CQUNlQSxlOzs7Ozs7O0FDekZmO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBTUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBOzs7OztLQUtNVyxxQjs7O0FBRUwsaUNBQVk1ZSxNQUFaLEVBQW9CSSxPQUFwQixFQUE2QjtBQUFBOztBQUM1QkEsYUFBVSxpQkFBRStILE1BQUYsQ0FBUyxFQUFULEVBQWE7QUFDdEI1QixjQUFXLE1BRFc7QUFFdEJTLFdBQVEsTUFGYztBQUd0QlIsZUFBWSxjQUhVO0FBSXRCdkMsVUFBTztBQUplLElBQWIsRUFLUDdELE9BTE8sQ0FBVjtBQUQ0Qix3SUFPdEJKLE1BUHNCLEVBT2RJLE9BUGM7QUFRNUI7Ozs7bUNBRWU7QUFDZjtBQUNBLFFBQUlULGFBQWEsS0FBS0ssTUFBTCxDQUFZSSxPQUFaLENBQW9CVCxVQUFyQztBQUNBLFFBQUlrZixnQkFBSjtBQUNBLFNBQUssSUFBSUMsSUFBVCxJQUFpQm5mLFVBQWpCLEVBQTZCO0FBQzVCLFNBQUksQ0FBQ0EsV0FBVzRJLGNBQVgsQ0FBMEJ1VyxJQUExQixDQUFMLEVBQXNDOztBQUV0QyxTQUFJQyxTQUFTcGYsV0FBV21mLElBQVgsQ0FBYjtBQUNBLFNBQUloaEIsT0FBTyxFQUFYO0FBQ0EsU0FBSWtoQixZQUFZLEVBQWhCOztBQUVBRCxZQUFPbGYsSUFBUCxDQUFZbEMsT0FBWixDQUFvQixVQUFDaUMsR0FBRCxFQUFNaEMsS0FBTixFQUFnQjtBQUNuQyxVQUFJQSxVQUFVLENBQWQsRUFBaUI7QUFDaEJvaEI7QUFDQTtBQUNEQSxrREFBMENwZixHQUExQztBQUNBLE1BTEQ7O0FBT0E5Qix1RUFFSWtoQixTQUZKLFdBRW1CRCxPQUFPamYsV0FGMUI7O0FBTUErZSxvQkFBZS9nQixJQUFmO0FBRUE7QUFDRCxTQUFLdWEsZUFBTCxDQUNFaGIsUUFERixDQUNXLHVCQURYLEVBRUVpSixNQUZGLENBRVN1WSxXQUZUO0FBR0E7Ozs7OztBQUdGLHFCQUFVdFQsaUJBQVYsQ0FBNEIsdUJBQTVCLEVBQXFEcVQscUJBQXJEO0FBQ0EsbUJBQVF6aEIsZUFBUixDQUF3QixpQkFBeEIsRUFBMkN5aEIscUJBQTNDO21CQUNlQSxxQjs7Ozs7O0FDakVmO0FBQ0E7Ozs7Ozs7Ozs7QUFJQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0FBRUE7Ozs7Ozs7O0tBUU1LLGU7OztBQUVMLDJCQUFhamYsTUFBYixFQUFpQztBQUFBLE9BQVpJLE9BQVksdUVBQUosRUFBSTs7QUFBQTs7QUFDaENBLGFBQVUsaUJBQUUrSCxNQUFGLENBQVMsRUFBVCxFQUFhO0FBQ3RCM0IsZUFBWSw2QkFEVTtBQUV0QnZDLFVBQU87QUFGZSxJQUFiLEVBR1A3RCxPQUhPLENBQVY7O0FBRGdDLGlJQUsxQkosTUFMMEIsRUFLbEJJLE9BTGtCOztBQU9oQyxTQUFLSixNQUFMLENBQVlzQyxFQUFaLENBQWUsWUFBZixFQUE2QixVQUFDUyxDQUFELEVBQUloQixJQUFKLEVBQWE7QUFDekMsUUFBTVcsT0FBTyxNQUFLMUMsTUFBTCxDQUFZRyxXQUF6QjtBQUNBLFVBQUsrZSxtQkFBTCxDQUF5QjFMLElBQXpCLEdBQWdDLDBCQUFjOVEsSUFBZCxDQUFoQztBQUNBLElBSEQ7O0FBS0EsU0FBSzFDLE1BQUwsQ0FBWXNDLEVBQVosQ0FBZSxnQkFBZixFQUFpQyxVQUFDUyxDQUFELEVBQU87QUFDdkMsVUFBS29jLGlCQUFMLENBQXVCM0wsSUFBdkIsR0FBOEIsMEJBQWMsTUFBS3hULE1BQUwsQ0FBWUMsS0FBWixDQUFrQjBDLFFBQWhDLENBQTlCO0FBQ0EsSUFGRDtBQVpnQztBQWVoQzs7QUFHRDs7Ozs7OzttQ0FHZ0I7QUFDZixRQUFNQSxXQUFXLEtBQUszQyxNQUFMLENBQVlDLEtBQVosQ0FBa0IwQyxRQUFuQztBQUNBLFFBQU14QyxjQUFjLEtBQUtILE1BQUwsQ0FBWUMsS0FBWixDQUFrQkUsV0FBdEM7QUFDQSxTQUFLK2UsbUJBQUwsR0FBMkIsMEJBQWdCLEtBQUtsZixNQUFyQixFQUE2QixFQUFFd0csV0FBWSx1QkFBZCxFQUE3QixDQUEzQjtBQUNBLFNBQUsyWSxpQkFBTCxHQUF5QiwwQkFBZ0IsS0FBS25mLE1BQXJCLEVBQTZCLEVBQUV3RyxXQUFZLHFCQUFkLEVBQTdCLENBQXpCOztBQUVBLFFBQUdtVCxNQUFNaFgsUUFBTixLQUFtQkEsWUFBWSxJQUFsQyxFQUF3QztBQUN2QyxVQUFLd2MsaUJBQUwsQ0FBdUIzTCxJQUF2QixHQUE4QixFQUE5QjtBQUNBLEtBRkQsTUFFTztBQUNOLFVBQUsyTCxpQkFBTCxDQUF1QjNMLElBQXZCLEdBQThCLDBCQUFjN1EsUUFBZCxDQUE5QjtBQUNBOztBQUVELFFBQUd4QyxlQUFlLElBQWxCLEVBQXdCO0FBQ3ZCLFVBQUsrZSxtQkFBTCxDQUF5QjFMLElBQXpCLEdBQWdDLDBCQUFjLENBQWQsQ0FBaEM7QUFDQSxLQUZELE1BRU87QUFDTixVQUFLMEwsbUJBQUwsQ0FBeUIxTCxJQUF6QixHQUFnQywwQkFBY3JULFdBQWQsQ0FBaEM7QUFDQTs7QUFFRCxTQUFLL0MsT0FBTCxHQUFlLHNCQUFFLFFBQUYsRUFBWUMsUUFBWixDQUFxQixjQUFyQixDQUFmO0FBQ0EsU0FBS0QsT0FBTCxDQUNFa0osTUFERixDQUNTLEtBQUs0WSxtQkFBTCxDQUF5QjloQixPQURsQyxFQUVFa0osTUFGRixDQUVTLEtBQUs2WSxpQkFBTCxDQUF1Qi9oQixPQUZoQzs7QUFJQSxXQUFPLEtBQUtBLE9BQVo7QUFDQTs7QUFHRDs7Ozs7O2tDQUdlMkYsQyxFQUFHO0FBQ2pCLFFBQUk5QyxRQUFRLEtBQUtELE1BQUwsQ0FBWUMsS0FBeEI7QUFDQSxTQUFLaWYsbUJBQUwsQ0FBeUIxTCxJQUF6QixHQUFnQywwQkFBY3ZULE1BQU1FLFdBQXBCLENBQWhDO0FBQ0EsU0FBS2dmLGlCQUFMLENBQXVCM0wsSUFBdkIsR0FBOEIsMEJBQWN2VCxNQUFNMEMsUUFBcEIsQ0FBOUI7QUFDQTs7OzJCQUVPSSxDLEVBQUc7QUFDVkEsTUFBRWlHLGNBQUY7QUFDQTs7Ozs7O0FBR0YscUJBQVV1QyxpQkFBVixDQUE0QixpQkFBNUIsRUFBK0MwVCxlQUEvQztBQUNBLG1CQUFROWhCLGVBQVIsQ0FBd0IsVUFBeEIsRUFBb0M4aEIsZUFBcEM7bUJBQ2VBLGU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckZmOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7S0FHTUcsSzs7O0FBQ0wsaUJBQWFwZixNQUFiLEVBQXFCSSxPQUFyQixFQUE4QjtBQUFBOztBQUFBLDZHQUN2QkosTUFEdUIsRUFDZkksT0FEZTs7QUFFN0IsU0FBS2lmLEtBQUwsR0FBYSxNQUFLamlCLE9BQUwsQ0FBYSxDQUFiLENBQWI7O0FBRUEsU0FBSzRnQixTQUFMLEdBQWlCLEVBQWpCO0FBQ0EsU0FBS3NCLFlBQUwsR0FBb0IsRUFBcEI7O0FBRUEsU0FBS2hjLEdBQUwsR0FBVyxNQUFLdEQsTUFBTCxDQUFZSSxPQUFaLENBQW9Ca0QsR0FBL0I7O0FBRUEsT0FBRyxNQUFLdEQsTUFBTCxDQUFZSSxPQUFaLENBQW9CN0IsTUFBcEIsSUFBOEIsSUFBakMsRUFBdUM7QUFDdEMsVUFBS0EsTUFBTCxHQUFjLE1BQUt5QixNQUFMLENBQVlJLE9BQVosQ0FBb0I3QixNQUFsQztBQUNBOztBQUVELE9BQUcsTUFBS3dlLHlCQUFMLEdBQWlDcFgsTUFBakMsR0FBMEMsQ0FBN0MsRUFBZ0Q7QUFDL0MsVUFBSzRaLGdCQUFMLEdBQXdCLE1BQUt4Qyx5QkFBTCxHQUFpQyxDQUFqQyxDQUF4QjtBQUNBOztBQUVELFNBQUszZixPQUFMLENBQWFrRixFQUFiLENBQWdCLFdBQWhCLEVBQTZCLE1BQUs0YixXQUFMLENBQWlCMWEsSUFBakIsT0FBN0I7QUFDQSxTQUFLcEcsT0FBTCxDQUFha0YsRUFBYixDQUFnQixZQUFoQixFQUE4QixNQUFLMFMsWUFBTCxDQUFrQnhSLElBQWxCLE9BQTlCO0FBQ0EsU0FBS3BHLE9BQUwsQ0FBYWtGLEVBQWIsQ0FBZ0IsZ0JBQWhCLEVBQWtDLE1BQUtrZCxnQkFBTCxDQUFzQmhjLElBQXRCLE9BQWxDO0FBQ0EsU0FBS3BHLE9BQUwsQ0FBYWtGLEVBQWIsQ0FBZ0IsVUFBaEIsRUFBNEIsTUFBS21kLFVBQUwsQ0FBZ0JqYyxJQUFoQixPQUE1QjtBQUNBLFNBQUtwRyxPQUFMLENBQWFrRixFQUFiLENBQWdCLFNBQWhCLEVBQTJCLE1BQUtvZCxTQUFMLENBQWVsYyxJQUFmLE9BQTNCO0FBQ0EsU0FBS3BHLE9BQUwsQ0FBYWtGLEVBQWIsQ0FBZ0IsUUFBaEIsRUFBMEIsTUFBS3FkLFFBQUwsQ0FBY25jLElBQWQsT0FBMUI7QUFDQSxTQUFLcEcsT0FBTCxDQUFha0YsRUFBYixDQUFnQixjQUFoQixFQUFnQyxNQUFLc2QsY0FBTCxDQUFvQnBjLElBQXBCLE9BQWhDO0FBQ0EsU0FBS3BHLE9BQUwsQ0FBYWtGLEVBQWIsQ0FBZ0IsT0FBaEIsRUFBeUIsTUFBS29MLE9BQUwsQ0FBYWxLLElBQWIsT0FBekI7QUFDQSxTQUFLcEcsT0FBTCxDQUFha0YsRUFBYixDQUFnQixVQUFoQixFQUE0QixNQUFLdWQsVUFBTCxDQUFnQnJjLElBQWhCLE9BQTVCO0FBQ0EsU0FBS3BHLE9BQUwsQ0FBYWtGLEVBQWIsQ0FBZ0IsTUFBaEIsRUFBd0IsTUFBS3dkLE1BQUwsQ0FBWXRjLElBQVosT0FBeEI7QUFDQSxTQUFLcEcsT0FBTCxDQUFha0YsRUFBYixDQUFnQixPQUFoQixFQUF5QixNQUFLeWQsT0FBTCxDQUFhdmMsSUFBYixPQUF6QjtBQUNBLFNBQUtwRyxPQUFMLENBQWFrRixFQUFiLENBQWdCLFlBQWhCLEVBQThCLE1BQUswZCxZQUFMLENBQWtCeGMsSUFBbEIsT0FBOUI7QUFDQSxTQUFLcEcsT0FBTCxDQUFha0YsRUFBYixDQUFnQixPQUFoQixFQUF5QixNQUFLMmQsT0FBTCxDQUFhemMsSUFBYixPQUF6QjtBQUNBLFNBQUtwRyxPQUFMLENBQWFrRixFQUFiLENBQWdCLGdCQUFoQixFQUFrQyxNQUFLNGQsZ0JBQUwsQ0FBc0IxYyxJQUF0QixPQUFsQztBQUNBLFNBQUtwRyxPQUFMLENBQWFrRixFQUFiLENBQWdCLFNBQWhCLEVBQTJCLE1BQUs2ZCxTQUFMLENBQWUzYyxJQUFmLE9BQTNCO0FBQ0EsU0FBS3BHLE9BQUwsQ0FBYWtGLEVBQWIsQ0FBZ0IsT0FBaEIsRUFBeUIsTUFBSzhkLE9BQUwsQ0FBYTVjLElBQWIsT0FBekI7QUFoQzZCO0FBaUM3Qjs7OzsrQkFFV1QsQyxFQUFHO0FBQ2QsU0FBS2YsT0FBTCxDQUFhLFdBQWI7QUFDQTs7O2dDQUVZZSxDLEVBQUc7QUFDZixTQUFLZixPQUFMLENBQWEsWUFBYjtBQUNBOzs7b0NBRWdCZSxDLEVBQUc7QUFDbkIsU0FBS2YsT0FBTCxDQUFhLGdCQUFiO0FBQ0E7Ozs4QkFFVWUsQyxFQUFHO0FBQ2IsU0FBS2YsT0FBTCxDQUFhLFVBQWI7QUFDQTs7OzZCQUVTZSxDLEVBQUc7QUFDWixTQUFLZixPQUFMLENBQWEsU0FBYjtBQUNBOzs7NEJBRVFlLEMsRUFBRztBQUNYLFNBQUtmLE9BQUwsQ0FBYSxRQUFiO0FBQ0E7OztrQ0FFY2UsQyxFQUFHO0FBQ2pCLFNBQUtmLE9BQUwsQ0FBYSxjQUFiO0FBQ0E7Ozs2QkFFUztBQUNULFNBQUtBLE9BQUwsQ0FBYSxPQUFiO0FBQ0E7OztnQ0FFWTtBQUNaLFNBQUtBLE9BQUwsQ0FBYSxVQUFiO0FBQ0E7Ozs0QkFFUTtBQUNSLFNBQUtBLE9BQUwsQ0FBYSxNQUFiO0FBQ0E7Ozs2QkFFUztBQUNULFNBQUtBLE9BQUwsQ0FBYSxPQUFiO0FBQ0E7OzsrQkFFVztBQUNYLFNBQUtBLE9BQUwsQ0FBYSxTQUFiO0FBQ0E7OztrQ0FFYztBQUNkLFNBQUtBLE9BQUwsQ0FBYSxZQUFiO0FBQ0E7Ozs2QkFFUztBQUNULFNBQUtBLE9BQUwsQ0FBYSxPQUFiO0FBQ0E7OztzQ0FFa0I7QUFDbEIsU0FBS0EsT0FBTCxDQUFhLGdCQUFiO0FBQ0E7OzsrQkFFVztBQUNYLFNBQUtBLE9BQUwsQ0FBYSxTQUFiO0FBQ0E7OzsyQkFFT2UsQyxFQUFHO0FBQ1YsU0FBS2YsT0FBTCxDQUFhLE9BQWIsRUFBc0IsRUFBRW9CLE1BQU9MLEVBQUV5UyxNQUFGLENBQVM1UyxLQUFULENBQWVRLElBQXhCLEVBQXRCO0FBQ0E7O0FBRUQ7Ozs7bUNBQ2dCO0FBQUE7O0FBQ2YsU0FBS2hHLE9BQUwsR0FBZSxLQUFLZ0QsT0FBTCxDQUFhc0IsR0FBNUI7QUFDQTs7QUFFQztBQUNBLGNBSEQsRUFJQyxRQUpEOztBQU1DO0FBQ0EsWUFQRCxFQVFDLE9BUkQsRUFVRS9ELE9BVkYsQ0FVVSxnQkFBUTtBQUNqQixZQUFLUCxPQUFMLENBQWFpakIsVUFBYixDQUF3QnZpQixJQUF4QjtBQUNBLEtBWkQ7O0FBY0E7QUFDQSxLQUNDLFNBREQsRUFFQyxVQUZELEVBR0MsTUFIRCxFQUlDLE9BSkQsRUFLRUgsT0FMRixDQUtVLGdCQUFRO0FBQ2pCLFNBQUcsT0FBS3FDLE1BQUwsQ0FBWUksT0FBWixDQUFvQnRDLElBQXBCLENBQUgsRUFBOEI7QUFDN0IsYUFBS1YsT0FBTCxDQUFhNkksSUFBYixDQUFrQm5JLElBQWxCLEVBQXdCLE9BQUtrQyxNQUFMLENBQVlJLE9BQVosQ0FBb0J0QyxJQUFwQixDQUF4QjtBQUNBLGFBQUtWLE9BQUwsQ0FBYWtqQixJQUFiLENBQWtCeGlCLElBQWxCLEVBQXdCLE9BQUtrQyxNQUFMLENBQVlJLE9BQVosQ0FBb0J0QyxJQUFwQixDQUF4QjtBQUNBO0FBQ0QsS0FWRDs7QUFhQSxTQUFLVixPQUFMLENBQWFxSyxJQUFiLENBQWtCLHNCQUFsQixFQUEwQ0MsSUFBMUMsQ0FBK0MsVUFBQzdCLENBQUQsRUFBSS9ILElBQUosRUFBYTtBQUMzRCwyQkFBRUEsSUFBRixFQUFRdVUsTUFBUjtBQUNBLEtBRkQ7O0FBSUEsV0FBTyxLQUFLalYsT0FBWjtBQUNBOzs7K0NBNEUyQjtBQUMzQixXQUFPLEtBQUs0QyxNQUFMLENBQVlJLE9BQVosQ0FBb0JvSCxPQUFwQixDQUE0QitZLEdBQTVCLENBQWdDO0FBQUE7QUFDdEN0YyxZQUFPbkcsS0FBS2tKO0FBRDBCLFFBRW5DbEosSUFGbUM7QUFBQSxLQUFoQyxDQUFQO0FBSUE7OzswQkFrSE87QUFBQTs7QUFDUDtBQUNBLFNBQUt1RyxJQUFMO0FBQ0EsUUFBSU0sTUFBTSxpQkFBRUMsUUFBRixFQUFWO0FBQ0EsU0FBSzRiLGNBQUw7QUFDQSxTQUFLQyxVQUFMLEdBQ0V0WCxJQURGLENBQ08sWUFBTTtBQUNYLFlBQUt1WCxTQUFMO0FBQ0EsWUFBS0MsV0FBTDtBQUNBaGMsU0FBSUksT0FBSjtBQUNBLEtBTEY7QUFNQSxXQUFPSixJQUFJSyxPQUFKLEVBQVA7QUFDQTs7O3dDQUVvQjtBQUNwQixRQUFJLE9BQU8sS0FBS3FhLEtBQUwsQ0FBV3VCLHFCQUFsQixLQUE0QyxVQUFoRCxFQUE0RDtBQUMzRCxTQUFNcE8sWUFBWXZHLE9BQU9zRyxTQUFQLElBQW9CdEcsT0FBT3NHLFNBQVAsQ0FBaUJDLFNBQXJDLElBQWtELEVBQXBFOztBQUVBO0FBQ0EsU0FBSyxTQUFELENBQVlFLElBQVosQ0FBaUJGLFNBQWpCLEtBQStCLENBQUUsc0JBQUQsQ0FBeUJFLElBQXpCLENBQThCRixTQUE5QixDQUFwQyxFQUE4RTtBQUM3RSxhQUFPLElBQVA7QUFDQTtBQUNEO0FBQ0QsV0FBTyxLQUFQO0FBQ0E7OztxQ0FFaUI7QUFBQTs7QUFDakIsUUFBTXZTLFFBQVEsS0FBS29mLEtBQW5CO0FBQ0EsUUFBSXBmLE1BQU1pRCxNQUFOLElBQWdCakQsTUFBTTRnQixZQUFOLElBQXNCNWdCLE1BQU02Z0IsYUFBaEQsRUFBK0Q7QUFDOUQ7QUFDQTtBQUNBLFVBQUs3ZCxJQUFMOztBQUVBO0FBQ0E7QUFDQXVILGdCQUFXLFlBQU07QUFDaEIsYUFBS3JILEtBQUw7QUFDQWxELFlBQU0yZ0IscUJBQU47QUFDQSxNQUhELEVBR0csQ0FISDtBQUlBLEtBWEQsTUFXTztBQUNOM2dCLFdBQU0yZ0IscUJBQU47QUFDQTtBQUNEOzs7b0NBRWdCO0FBQ2hCLFNBQUt2QixLQUFMLENBQVcwQixvQkFBWDtBQUNBOzs7Z0NBRWE7QUFDYixRQUFJLENBQUMsS0FBSzFCLEtBQUwsQ0FBVzJCLE1BQVosSUFBc0IsS0FBSzNCLEtBQUwsQ0FBV25jLE1BQXJDLEVBQTZDO0FBQzVDLFVBQUtELElBQUw7QUFDQSxLQUZELE1BRU87QUFDTixVQUFLRSxLQUFMO0FBQ0E7QUFDRDs7OzBCQUVPO0FBQ1AsUUFBSXdCLE1BQU0saUJBQUVDLFFBQUYsRUFBVjtBQUNBLFFBQU1xYyxjQUFjLEtBQUs1QixLQUFMLENBQVdwYyxJQUFYLEVBQXBCOztBQUVBLFFBQUdnZSxlQUFlLElBQWxCLEVBQXdCO0FBQ3ZCQSxpQkFBWW5mLElBQVosQ0FBaUIsWUFBVztBQUMzQjZDLFVBQUlJLE9BQUo7QUFDQSxNQUZEO0FBR0EsS0FKRCxNQUlPO0FBQ05KLFNBQUlJLE9BQUo7QUFDQTtBQUNELFdBQU9KLElBQUlLLE9BQUosRUFBUDtBQUNBOzs7MkJBRVE7QUFDUixRQUFJTCxNQUFNLGlCQUFFQyxRQUFGLEVBQVY7QUFDQSxRQUFNc2MsZUFBZSxLQUFLN0IsS0FBTCxDQUFXbGMsS0FBWCxFQUFyQjs7QUFFQSxRQUFHK2QsZ0JBQWdCLElBQW5CLEVBQXlCO0FBQ3hCQSxrQkFBYXBmLElBQWIsQ0FBa0IsWUFBVztBQUM1QjZDLFVBQUlJLE9BQUo7QUFDQSxNQUZEO0FBR0EsS0FKRCxNQUlPO0FBQ05KLFNBQUlJLE9BQUo7QUFDQTtBQUNELFdBQU9KLElBQUlLLE9BQUosRUFBUDtBQUNBOzs7MEJBRU07QUFDTixXQUFPLEtBQUtxYSxLQUFMLENBQVdoYixJQUFYLEVBQVA7QUFDQTs7O29DQUVpQjtBQUNqQixRQUFJOGMsUUFBUSxJQUFaO0FBQ0EsU0FBSy9qQixPQUFMLENBQWFna0IsUUFBYixDQUFzQix5QkFBdEIsRUFBaUQxWixJQUFqRCxDQUFzRCxZQUFZO0FBQ2pFLFNBQU0yWixXQUFXLHNCQUFFLElBQUYsRUFBUXBiLElBQVIsQ0FBYSxTQUFiLENBQWpCO0FBQ0EsU0FBTWUsUUFBUSxzQkFBRSxJQUFGLEVBQVFmLElBQVIsQ0FBYSxPQUFiLENBQWQ7QUFDQSxTQUFNM0MsTUFBTSxzQkFBRSxJQUFGLEVBQVEyQyxJQUFSLENBQWEsS0FBYixDQUFaO0FBQ0EsU0FBSWUsTUFBTXJCLE1BQU4sR0FBZSxDQUFmLElBQW9CckMsSUFBSXFDLE1BQUosR0FBYSxDQUFyQyxFQUF3QztBQUN2Q3diLFlBQU1uRCxTQUFOLENBQWdCdlQsSUFBaEIsQ0FBcUI7QUFDcEJ6RCxjQUFRQSxLQURZO0FBRXBCL0MsYUFBT29kLFFBRmE7QUFHcEJBLGlCQUFXQTtBQUhTLE9BQXJCO0FBS0E7QUFDRCxLQVhEO0FBWUE7OztnQ0FFYTtBQUFBOztBQUNiLFFBQUkxYyxNQUFNLGlCQUFFQyxRQUFGLEVBQVY7QUFDQSxRQUFJLEtBQUt5YSxLQUFMLENBQVdpQyxVQUFYLEdBQXdCQyxpQkFBaUJDLFlBQTdDLEVBQTJEO0FBQzFEN2MsU0FBSUksT0FBSjtBQUNBLFVBQUswYyxlQUFMO0FBQ0EsS0FIRCxNQUdPO0FBQ04sMkJBQUUsS0FBS3BDLEtBQVAsRUFBYzdjLEdBQWQsQ0FBa0IsZ0JBQWxCLEVBQW9DLFVBQUNPLENBQUQsRUFBTztBQUMxQzRCLFVBQUlJLE9BQUo7QUFDQSxhQUFLMGMsZUFBTDtBQUNBLE1BSEQ7QUFJQTtBQUNELFdBQU85YyxJQUFJSyxPQUFKLEVBQVA7QUFDQTs7O3FDQUVrQjs7QUFFbEI7QUFDQTtBQUNBOztBQUVBLFFBQUksS0FBS3FhLEtBQUwsQ0FBV3FDLFVBQVgsQ0FBc0IvYixNQUF0QixLQUFpQyxDQUFqQyxJQUFzQyxLQUFLcVksU0FBTCxDQUFlclksTUFBZixHQUF3QixDQUFsRSxFQUFxRTtBQUNwRSxVQUFLdkksT0FBTCxDQUFhZ2tCLFFBQWIsQ0FBc0IseUJBQXRCLEVBQWlEL08sTUFBakQ7QUFDQSxVQUFLLElBQUl4TSxDQUFULElBQWMsS0FBS21ZLFNBQW5CLEVBQThCO0FBQzdCLFVBQUksS0FBS0EsU0FBTCxDQUFlelYsY0FBZixDQUE4QjFDLENBQTlCLENBQUosRUFBc0M7QUFDckMsWUFBS3pJLE9BQUwsQ0FDRWtKLE1BREYsQ0FDUyxzQkFBRSxVQUFGLEVBQ05MLElBRE0sQ0FDRCxPQURDLEVBQ1EsS0FBSytYLFNBQUwsQ0FBZ0JuWSxDQUFoQixFQUFvQm1CLEtBRDVCLEVBRU5mLElBRk0sQ0FFRCxLQUZDLEVBRU0sS0FBSytYLFNBQUwsQ0FBZ0JuWSxDQUFoQixFQUFvQnZDLEdBRjFCLEVBR04yQyxJQUhNLENBR0QsU0FIQyxFQUdVLEtBQUsrWCxTQUFMLENBQWdCblksQ0FBaEIsRUFBb0J3YixRQUg5QixFQUlOcGIsSUFKTSxDQUlELElBSkMsRUFJSyxLQUFLK1gsU0FBTCxDQUFnQm5ZLENBQWhCLEVBQW9Cd2IsUUFKekIsRUFLTnBiLElBTE0sQ0FLRCxNQUxDLEVBS08sV0FMUCxDQURUO0FBT0E7QUFDRDtBQUNEO0FBQ0Q7Ozt1QkEzVWtCO0FBQ2xCLFdBQU8sS0FBS29aLEtBQUwsQ0FBV2xmLFdBQWxCO0FBQ0EsSTtxQkFFZ0J3SCxLLEVBQU87QUFDdkIsUUFBSWpGLGFBQUo7QUFDQSxRQUFJaUYsUUFBUSxLQUFLaEYsUUFBakIsRUFBMkI7QUFDMUJELFlBQU8sS0FBS0MsUUFBWjtBQUNBLEtBRkQsTUFFTyxJQUFJZ0YsUUFBUSxDQUFaLEVBQWU7QUFDckJqRixZQUFPLENBQVA7QUFDQSxLQUZNLE1BRUE7QUFDTkEsWUFBT2lGLEtBQVA7QUFDQTs7QUFFRCxTQUFLM0gsTUFBTCxDQUFZZ0MsT0FBWixDQUFvQixnQkFBcEIsRUFBc0MsRUFBRTdCLGFBQWN1QyxJQUFoQixFQUF0Qzs7QUFFQSxTQUFLMmMsS0FBTCxDQUFXbGYsV0FBWCxHQUF5QnVDLElBQXpCO0FBQ0E7Ozt1QkFFZTtBQUNmLFdBQU8sS0FBSzJjLEtBQUwsQ0FBVzFjLFFBQWxCO0FBQ0E7Ozt1QkFFYTtBQUNiLFdBQU8sS0FBSzBjLEtBQUwsQ0FBV3NDLFlBQWxCO0FBQ0E7Ozt1QkFFWTtBQUNaLFdBQU8sS0FBS3RDLEtBQUwsQ0FBV3VDLFdBQWxCO0FBQ0E7Ozt1QkFFVztBQUNYLFdBQU8sS0FBS3ZDLEtBQUwsQ0FBVzNhLFlBQWxCO0FBQ0EsSTtxQkFvQ1NpRCxLLEVBQU87QUFDaEIsc0ZBQWFBLEtBQWI7QUFDQSxTQUFLMFgsS0FBTCxDQUFXM2EsWUFBWCxHQUEwQmlELEtBQTFCO0FBQ0E7OztxQkFyQ1NBLEssRUFBTztBQUNoQixTQUFLMFgsS0FBTCxDQUFXaGhCLEtBQVgsR0FBbUJzSixLQUFuQjtBQUNBLEk7dUJBRVc7QUFDWCxXQUFPLEtBQUswWCxLQUFMLENBQVdoaEIsS0FBbEI7QUFDQTs7O3VCQUVhO0FBQ2IsUUFBSVEsTUFBTSxLQUFLbUIsTUFBTCxDQUFZSSxPQUFaLENBQW9CMUIsSUFBcEIsQ0FBeUJHLEdBQW5DO0FBQ0EsUUFBRyxzQ0FBSCxFQUF5QjtBQUN4QkEsV0FBTXVnQixNQUFNeUMsZUFBWjtBQUNBO0FBQ0QsNEJBQWM7QUFDYmhqQixXQUFNdWdCLE1BQU0wQyxlQUFaO0FBQ0E7O0FBRUQsV0FBT2pqQixHQUFQO0FBQ0E7Ozt1QkFFYTtBQUNiLFFBQUlELE1BQU0sS0FBS29CLE1BQUwsQ0FBWUksT0FBWixDQUFvQjFCLElBQXBCLENBQXlCRSxHQUFuQzs7QUFFQSxRQUFJLHNDQUFKLEVBQTBCO0FBQ3pCQSxXQUFNd2dCLE1BQU0yQyxlQUFaO0FBQ0E7O0FBRUQsNEJBQWU7QUFDZG5qQixXQUFNd2dCLE1BQU00QyxlQUFaO0FBQ0E7O0FBRUQsV0FBT3BqQixHQUFQO0FBQ0E7OztxQkFjbUJxRixJLEVBQU07QUFDekIsaUdBQXdCQSxJQUF4QjtBQUNBLFFBQU12QixPQUFPLEtBQUt2QyxXQUFsQjtBQUNBLFFBQU16QixPQUFPLEtBQUtBLElBQWxCO0FBQ0EsUUFBTXVqQixPQUFPLEtBQUsvZSxNQUFsQjs7QUFFQSxTQUFLcWMsZ0JBQUwsR0FBd0IsS0FBS3hDLHlCQUFMLEdBQWlDdFYsSUFBakMsQ0FBc0M7QUFBQSxZQUFRM0osS0FBS21HLElBQUwsS0FBY0EsSUFBdEI7QUFBQSxLQUF0QyxDQUF4Qjs7QUFFQSxTQUFLWCxHQUFMLEdBQVcsS0FBS2ljLGdCQUFoQjtBQUNBLFNBQUs3Z0IsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS3lCLFdBQUwsR0FBbUJ1QyxJQUFuQjs7QUFFQSxRQUFJdWYsSUFBSixFQUFVO0FBQ1QsVUFBSzllLEtBQUw7QUFDQSxLQUZELE1BRU87QUFDTixVQUFLRixJQUFMO0FBQ0E7O0FBRUQsU0FBS2pCLE9BQUwsQ0FBYSxlQUFiLEVBQThCLEtBQUt1ZCxnQkFBbkM7QUFFQSxJO3VCQUVxQjtBQUNyQixXQUFPLEtBQUtBLGdCQUFaO0FBQ0E7OztxQkFFUWpjLEcsRUFBSztBQUNiLFFBQUdBLE9BQU8sSUFBVixFQUFnQjtBQUNoQixRQUFHLEtBQUtBLEdBQUwsSUFBWSxLQUFLQSxHQUFMLENBQVNOLEdBQVQsS0FBaUJNLElBQUlOLEdBQXBDLEVBQXlDOztBQUV6QyxTQUFLcWMsS0FBTCxDQUFXL2IsR0FBWCxHQUFpQkEsSUFBSU4sR0FBckI7O0FBRUEsU0FBS2tmLE9BQUwsR0FBZTVlLEdBQWY7QUFDQSxJO3VCQUVVO0FBQ1YsV0FBTyxLQUFLNGUsT0FBWjtBQUNBOzs7dUJBRVk7QUFDWixXQUFPLEtBQUtDLE1BQVo7QUFDQSxJO3FCQUVVeGEsSyxFQUFPO0FBQ2pCLGlDQUFJLEtBQUswWCxLQUFMLENBQVdxQyxVQUFmLEdBQTJCL2pCLE9BQTNCLENBQW1DLGdCQUFRO0FBQzFDLFNBQUdnSyxTQUFTLElBQVQsSUFBaUI3SixLQUFLdWpCLFFBQUwsS0FBa0IxWixNQUFNMFosUUFBNUMsRUFBc0Q7QUFDckR2akIsV0FBS3NrQixJQUFMLEdBQVksU0FBWjtBQUNBLE1BRkQsTUFFTztBQUNOdGtCLFdBQUtza0IsSUFBTCxHQUFZLFFBQVo7QUFDQTtBQUNELEtBTkQ7QUFPQSxTQUFLRCxNQUFMLEdBQWN4YSxLQUFkO0FBQ0EsU0FBSzNGLE9BQUwsQ0FBYSxjQUFiO0FBQ0E7Ozt1QkFFWTtBQUNaLFdBQU8sS0FBS3FkLEtBQUwsQ0FBV25jLE1BQWxCO0FBQ0E7Ozt1QkFFYTtBQUNiLFdBQU8sS0FBS21jLEtBQUwsQ0FBVzVmLE1BQWxCO0FBQ0EsSTtxQkFFV2tJLEssRUFBTztBQUNsQix3RkFBZUEsS0FBZjtBQUNBLFFBQU0zSCxTQUFTLEtBQUtBLE1BQXBCO0FBQ0EsUUFBSTJILFFBQVEsQ0FBWixFQUFlO0FBQ2QsVUFBSzBYLEtBQUwsQ0FBVzVmLE1BQVgsR0FBb0IsQ0FBcEI7QUFDQSxLQUZELE1BRU8sSUFBSWtJLFFBQVEzSCxPQUFPSSxPQUFQLENBQWVYLE1BQWYsQ0FBc0JDLFNBQWxDLEVBQTZDO0FBQ25ELFVBQUsyZixLQUFMLENBQVc1ZixNQUFYLEdBQW9CLENBQXBCO0FBQ0EsS0FGTSxNQUVBO0FBQ04sVUFBSzRmLEtBQUwsQ0FBVzVmLE1BQVgsR0FBb0JrSSxLQUFwQjtBQUNBO0FBQ0QsU0FBSzBYLEtBQUwsQ0FBV2dELElBQVgsR0FBbUIxYSxRQUFRM0gsT0FBT0ksT0FBUCxDQUFlWCxNQUFmLENBQXNCQyxTQUFqRDtBQUNBOzs7dUJBR2U7QUFDZixXQUFPLEtBQUsyZixLQUFMLENBQVd2RSxRQUFsQjtBQUNBOztBQUVEOzs7Ozs7dUJBR2dCO0FBQ2YsV0FBTyxLQUFLdUUsS0FBTCxDQUFXaUQsUUFBbEI7QUFDQTs7QUFFRDs7Ozs7O3VCQUdhO0FBQ1osV0FBTyxLQUFLakQsS0FBTCxDQUFXMkIsTUFBbEI7QUFDQTs7O3VCQUVXO0FBQ1gsV0FBTyxLQUFLM0IsS0FBTCxDQUFXdFUsS0FBbEI7QUFDQTs7O3VCQUVzQjtBQUN0QixRQUFJdE4sU0FBUyxDQUFiO0FBQ0EsU0FBSyxJQUFJb0ksSUFBSSxDQUFiLEVBQWdCQSxJQUFJLEtBQUttYixNQUFMLENBQVlyYixNQUFoQyxFQUF3Q0UsR0FBeEMsRUFBNkM7QUFDNUNwSSxlQUFXLEtBQUt1akIsTUFBTCxDQUFZaGIsR0FBWixDQUFnQkgsQ0FBaEIsSUFBcUIsS0FBS21iLE1BQUwsQ0FBWXVCLEtBQVosQ0FBa0IxYyxDQUFsQixDQUFoQztBQUNBOztBQUVELFdBQU9wSSxTQUFTLEtBQUtrRixRQUFkLEdBQXlCLEdBQWhDO0FBQ0E7Ozt1QkFFZ0I7QUFDaEIsV0FBTyxLQUFLMGMsS0FBTCxDQUFXbUQsVUFBbEI7QUFDQTs7Ozs7QUErSUY7Ozs7O0FBR0FwRCxPQUFNMkMsZUFBTixHQUF3QixHQUF4Qjs7QUFFQTs7O0FBR0EzQyxPQUFNeUMsZUFBTixHQUF3QixDQUF4Qjs7QUFFQXpDLE9BQU00QyxlQUFOLEdBQXdCLEdBQXhCOztBQUVBNUMsT0FBTTBDLGVBQU4sR0FBd0IsQ0FBeEI7O0FBRUExQyxPQUFNcUQsVUFBTixHQUFtQjNlLFNBQVM3QyxhQUFULENBQXVCLE9BQXZCLENBQW5COztBQUVBOzs7OztBQUtBbWUsT0FBTXNELGdCQUFOLEdBQXlCLFlBQVc7QUFDbkM7QUFDQSxNQUFJO0FBQ0gsT0FBTWpqQixTQUFTMmYsTUFBTXFELFVBQU4sQ0FBaUJoakIsTUFBaEM7O0FBRUEyZixTQUFNcUQsVUFBTixDQUFpQmhqQixNQUFqQixHQUEyQkEsU0FBUyxDQUFWLEdBQWUsR0FBekM7QUFDQSxVQUFPQSxXQUFXMmYsTUFBTXFELFVBQU4sQ0FBaUJoakIsTUFBbkM7QUFDQSxHQUxELENBS0UsT0FBT3NELENBQVAsRUFBVTtBQUNYLFVBQU8sS0FBUDtBQUNBO0FBQ0QsRUFWRDs7QUFZQXFjLE9BQU05VCxTQUFOLENBQWdCeU0sb0JBQWhCLEdBQXVDcUgsTUFBTXNELGdCQUFOLEVBQXZDOztBQUVBLHFCQUFVblgsaUJBQVYsQ0FBNEIsT0FBNUIsRUFBcUM2VCxLQUFyQzttQkFDZUEsSzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RnQmY7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0tBRU1sYixNOzs7QUFDTCxrQkFBWWxFLE1BQVosRUFBb0JJLE9BQXBCLEVBQTZCO0FBQUE7O0FBQUEsK0dBQ3RCSixNQURzQixFQUNkSSxPQURjOztBQUU1QixTQUFLdWlCLGFBQUwsR0FBcUIsRUFBckI7QUFDQSxTQUFLQyxXQUFMLEdBQW1CLEtBQW5COztBQUVBLE9BQUksTUFBSzVpQixNQUFMLENBQVlJLE9BQVosQ0FBb0JrRCxHQUFwQixJQUEyQixJQUEvQixFQUFxQztBQUNwQyxVQUFLdEQsTUFBTCxDQUFZNEMsS0FBWixHQUFvQix5QkFBZSxzQkFBZixDQUFwQjtBQUNBOztBQVAyQjtBQVM1Qjs7QUFFRDs7Ozs7Ozs2QkFHaUI7QUFBQTs7QUFBQSxzQ0FBTjJCLElBQU07QUFBTkEsU0FBTTtBQUFBOztBQUNoQixRQUFHLENBQUMsS0FBS3FlLFdBQVQsRUFBc0I7QUFDckIsVUFBS0QsYUFBTCxDQUFtQmxZLElBQW5CLENBQXdCbEcsSUFBeEI7QUFDQTtBQUNELDJJQUFpQkEsSUFBakI7QUFDQTs7OzBCQUVNO0FBQUE7O0FBQ04sU0FBS3FlLFdBQUwsR0FBbUIsSUFBbkI7QUFDQSxTQUFLRCxhQUFMLENBQW1CaGxCLE9BQW5CLENBQTJCLGdCQUFRO0FBQ2xDLFlBQUtxRSxPQUFMLGtDQUFnQnVDLElBQWhCO0FBQ0EsS0FGRDtBQUdBOzs7bUNBRWU7QUFDZixXQUFPLEtBQUtuSCxPQUFMLEdBQWUsc0JBQUUsU0FBRixDQUF0QjtBQUNBOzs7a0NBaUVjO0FBQ2QsU0FBS3NCLElBQUwsSUFBYSxLQUFLc0IsTUFBTCxDQUFZSSxPQUFaLENBQW9CMUIsSUFBcEIsQ0FBeUJDLElBQXRDO0FBQ0E7OztrQ0FFYztBQUNkLFNBQUtELElBQUwsSUFBYSxLQUFLc0IsTUFBTCxDQUFZSSxPQUFaLENBQW9CMUIsSUFBcEIsQ0FBeUJDLElBQXRDO0FBQ0E7Ozt3Q0E0Q29CLENBRXBCOzs7MEJBRU0sQ0FFTjs7OzJCQUVRLENBRVI7OzswQkFFTSxDQUNOOzs7Z0NBRWE7QUFDYixRQUFJLEtBQUt1RSxNQUFULEVBQWlCO0FBQ2hCLFVBQUtELElBQUw7QUFDQSxLQUZELE1BRU87QUFDTixVQUFLRSxLQUFMO0FBQ0E7QUFDRDs7OytCQUVZO0FBQ1osU0FBS3pFLElBQUwsR0FBWSxLQUFLbWtCLFdBQWpCO0FBQ0E7OztpQ0FFYztBQUNkLFNBQUtwakIsTUFBTCxHQUFjLEtBQUtpWixhQUFuQjtBQUNBOzs7cUJBOUlVMVYsRyxFQUFLO0FBQ2YsU0FBSzhmLE9BQUwsR0FBZTlmLEdBQWY7QUFDQSxTQUFLaEIsT0FBTCxDQUFhLGNBQWIsRUFBNkIsRUFBRWdCLFFBQUYsRUFBN0I7QUFDQSxJO3VCQUdZO0FBQ1osV0FBTyxLQUFLOGYsT0FBWjtBQUNBOzs7dUJBRWlCO0FBQ2pCO0FBQ0EsSTtxQkFFZW5iLEssRUFBTyxDQUV0Qjs7O3VCQUVjO0FBQ2Q7QUFDQTs7O3FCQUVTQSxLLEVBQU8sQ0FFaEIsQzt1QkFFVyxDQUVYOzs7dUJBRVk7QUFDWixXQUFPLEtBQUt2SyxPQUFMLENBQWEybEIsV0FBYixFQUFQO0FBQ0E7Ozt1QkFFVztBQUNYLFdBQU8sS0FBSzNsQixPQUFMLENBQWFzSSxLQUFiLEVBQVA7QUFDQTs7O3FCQUVXaUMsSyxFQUFPO0FBQ2xCLFNBQUtxYixRQUFMLEdBQWdCcmIsS0FBaEI7QUFDQSxJO3VCQU1hO0FBQ2IsV0FBTyxLQUFLcWIsUUFBTCxJQUFpQixLQUFLaGpCLE1BQUwsQ0FBWUksT0FBWixDQUFvQjFCLElBQXBCLENBQXlCRyxHQUFqRDtBQUVBOzs7cUJBUFc4SSxLLEVBQU87QUFDbEIsU0FBS3NiLFFBQUwsR0FBZ0J0YixLQUFoQjtBQUNBLEk7dUJBT2E7QUFDYixXQUFPLEtBQUtzYixRQUFMLElBQWlCLEtBQUtqakIsTUFBTCxDQUFZSSxPQUFaLENBQW9CMUIsSUFBcEIsQ0FBeUJFLEdBQWpEO0FBQ0E7Ozt1QkFFVSxDQUNWLEM7cUJBRVErSSxLLEVBQU87QUFDZixRQUFHQSxRQUFRLEtBQUsrVSxPQUFiLElBQXdCL1UsUUFBUSxLQUFLOFUsT0FBeEMsRUFBaUQ7QUFDakQscUJBQU95RyxHQUFQLENBQVcsTUFBWCxFQUFtQnZiLEtBQW5CO0FBQ0E7OztxQkFVbUIxRCxJLEVBQU07QUFDekIsUUFBTWtmLFNBQVMsS0FBS3BHLHlCQUFMLEVBQWY7QUFDQSxRQUFHLENBQUNvRyxPQUFPQyxJQUFQLENBQVk7QUFBQSxZQUFPbmYsUUFBUXFELEdBQWY7QUFBQSxLQUFaLENBQUosRUFBcUM7QUFDcEM7QUFDQTtBQUNELEk7dUJBRXFCLENBRXJCOzs7dUJBRVksQ0FFWjs7O3VCQUVZLENBRVo7Ozt1QkFFaUI7QUFDakIsV0FBTyxpQkFBT3FWLEdBQVAsQ0FBVyxNQUFYLEtBQXNCLEtBQUszYyxNQUFMLENBQVlJLE9BQVosQ0FBb0IxQixJQUFwQixDQUF5QkksT0FBdEQ7QUFDQTs7O3VCQUVvQjtBQUNwQixXQUFPLGlCQUFPNmQsR0FBUCxDQUFXLFFBQVgsS0FBd0IsS0FBSzNjLE1BQUwsQ0FBWUksT0FBWixDQUFvQlgsTUFBcEIsQ0FBMkJYLE9BQTFEO0FBQ0E7OztxQkFFVTZJLEssRUFBTztBQUNqQixRQUFNM0gsU0FBUyxLQUFLQSxNQUFwQjtBQUNBLFFBQUcySCxRQUFRLENBQVIsSUFBYUEsUUFBUTNILE9BQU9JLE9BQVAsQ0FBZVgsTUFBZixDQUFzQkMsU0FBOUMsRUFBeUQ7QUFDeEQsc0JBQU93akIsR0FBUCxDQUFXLFFBQVgsRUFBcUJ2YixLQUFyQjtBQUNBO0FBQ0Q7OztxQkFFUUEsSyxFQUFPLENBRWYsQzt1QkFFUyxDQUVUOzs7Ozs7QUFrQ0Z6RCxRQUFPb0gsU0FBUCxDQUFpQnlNLG9CQUFqQixHQUF3QyxJQUF4Qzs7QUFFQSxxQkFBVXhNLGlCQUFWLENBQTRCLFFBQTVCLEVBQXNDckgsTUFBdEM7O21CQUVlQSxNOzs7Ozs7QUMzTGY7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsc0RBQXFEO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDs7Ozs7OztBQ3pCQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUNBQWdDLGdDQUFnQztBQUNoRTtBQUNBLHVCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQSxHQUFFLFlBQVk7QUFDZDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxHQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQixrQkFBa0I7QUFDbEM7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7Ozs7O0FDekRBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw2Q0FBNEMsb0JBQW9CLEVBQUU7O0FBRWxFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLHlDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUMvQkE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNoQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBLDJDQUEwQyxpQkFBaUI7QUFDM0Qsd0RBQXVEO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXNDLGNBQWM7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFrQixtQkFBbUI7QUFDckM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQWtCLG1CQUFtQjtBQUNyQztBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG1CQUFrQixzQkFBc0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDekhBOztBQUVBOzs7Ozs7O0FDRkE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsMkJBQTBCOztBQUUxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBLEtBQUk7QUFDSjtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBLDhEQUE2RCxVQUFVO0FBQ3ZFO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBLHVDQUFzQyxVQUFVO0FBQ2hELHdCQUF1QixhQUFhO0FBQ3BDO0FBQ0EsMEJBQXlCLGNBQWM7QUFDdkMsMEJBQXlCLFVBQVU7QUFDbkMscUJBQW9CLGNBQWM7QUFDbEM7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQSxrQkFBaUIsVUFBVSxFQUFFO0FBQzdCLGdDQUErQix5QkFBeUI7QUFDeEQ7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMEIsV0FBVztBQUNyQztBQUNBLG9EQUFtRCxVQUFVO0FBQzdEO0FBQ0EsR0FBRTs7QUFFRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUVBQWdFO0FBQ2hFLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFnQyxhQUFhLEVBQUU7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0E7QUFDQSwyQkFBMEI7O0FBRTFCO0FBQ0E7QUFDQTtBQUNBLHdDQUF1QztBQUN2QywwQkFBeUI7O0FBRXpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFvQjtBQUNwQixHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNB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LEVBQThCLEtBQUtOLE9BQUwsQ0FBYWlxQixPQUEzQyxDQUFoQjtBQUNBO0FBQ0Q7OzswQkFFTTtBQUNOLFNBQUtqdEIsT0FBTCxDQUFhNk4sSUFBYjs7QUFFQSxRQUFHLEtBQUs3SyxPQUFMLENBQWF1cEIsSUFBaEIsRUFBc0I7QUFDckIsVUFBS2MsY0FBTCxDQUFvQk0sYUFBcEI7QUFDQSxVQUFLTixjQUFMLENBQW9CTyxNQUFwQixHQUE2QixDQUE3QjtBQUNBemdCLGtCQUFhLEtBQUtvZ0IsUUFBbEI7QUFDQTtBQUNEOzs7O0dBekcwQmxjLFM7O0FBOEc1QnpOLFFBQU9xSyxNQUFQLENBQWMsTUFBZCxFQUFzQixVQUFTNUIsYUFBVCxFQUF3QjtBQUM3QyxPQUFLd2hCLGNBQUwsR0FBc0IsSUFBSVYsYUFBSixDQUFrQixJQUFsQixFQUF3QjlnQixhQUF4QixDQUF0Qjs7QUFFQSxPQUFLdEksWUFBTCxDQUFrQm1GLE1BQWxCLENBQXlCLEtBQUsya0IsY0FBTCxDQUFvQjd0QixPQUE3QztBQUVBLEVBTEQsRSIsImZpbGUiOiJsZS1wbGF5ZXItZnVsbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L2pzL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGZhZjU2YjQ5YmUxNDQ0MDYxMTA2IiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5cbmltcG9ydCBDb250cm9sIGZyb20gJy4vY29tcG9uZW50cy9Db250cm9sJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL0NvbXBvbmVudCc7XG5pbXBvcnQgUGxheUJ1dHRvbiBmcm9tICcuL2NvbXBvbmVudHMvUGxheUJ1dHRvbic7XG5pbXBvcnQgU3BsYXNoSWNvbiBmcm9tICcuL2NvbXBvbmVudHMvU3BsYXNoSWNvbic7XG5cbmltcG9ydCBJY29uIGZyb20gJy4vY29tcG9uZW50cy9JY29uJztcbmltcG9ydCBUaW1lIGZyb20gJy4vY29tcG9uZW50cy9UaW1lbGluZS9UaW1lJztcbmltcG9ydCBDb250cm9sQ29sbGVjdGlvbiBmcm9tICcuL2NvbXBvbmVudHMvQ29udHJvbENvbGxlY3Rpb24nO1xuaW1wb3J0IFNlY3Rpb25zIGZyb20gJy4vY29tcG9uZW50cy9TZWN0aW9ucyc7XG5pbXBvcnQgRXJyb3JEaXNwbGF5IGZyb20gJy4vY29tcG9uZW50cy9FcnJvckRpc3BsYXknO1xuaW1wb3J0IFBvc3RlciBmcm9tICcuL2NvbXBvbmVudHMvUG9zdGVyJztcbmltcG9ydCBGdWxsc2NyZWVuQXBpIGZyb20gJy4vRnVsbHNjcmVlbkFwaSc7XG5cbmltcG9ydCB7IGNyZWF0ZUVsLCBzZWNvbmRzVG9UaW1lLCBub29wIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQge1xuXHRJU19BTkRST0lEX1BIT05FLFxuXHRJU19BTkRST0lELFxuXHRJU19JUE9ELFxuXHRJU19JUEhPTkUsXG5cdElTX01PQklMRSxcblx0SVNfVE9VQ0hcbn0gZnJvbSAnLi91dGlscy9icm93c2VyJztcblxuaW1wb3J0IENvb2tpZSBmcm9tICcuL3V0aWxzL2Nvb2tpZSc7XG5cbmltcG9ydCBNZWRpYUVycm9yIGZyb20gJy4vTWVkaWFFcnJvcic7XG5cbi8vIFJlZ2lzdGVyIGNvbW1vbiBjb250cm9sc1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvUGxheUNvbnRyb2wnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvVm9sdW1lQ29udHJvbCc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9UaW1lbGluZS9UaW1lbGluZUNvbnRyb2wnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvU2VjdGlvbkNvbnRyb2wnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvRnVsbHNjcmVlbkNvbnRyb2wnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvUmF0ZUNvbnRyb2wnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvQmFja3dhcmRDb250cm9sJztcbmltcG9ydCAnLi9jb21wb25lbnRzL1NvdXJjZUNvbnRyb2wnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvU3VidGl0bGVDb250cm9sJztcbmltcG9ydCAnLi9jb21wb25lbnRzL0Rvd25sb2FkQ29udHJvbCc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9LZXliaW5kaW5nSW5mb0NvbnRyb2wnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvVGltZUluZm9Db250cm9sJztcblxuaW1wb3J0ICcuL2VudGl0eS9IdG1sNSc7XG5cbmltcG9ydCAnYXJyYXkucHJvdG90eXBlLmZpbmQnO1xuXG5cbkNvbnRyb2wucmVnaXN0ZXJDb250cm9sKCdkaXZpZGVyJywgZnVuY3Rpb24oKSB7XG5cdHJldHVybiB7XG5cdFx0ZWxlbWVudCA6ICQoJzxkaXYvPicpLmFkZENsYXNzKCdkaXZpZGVyJylcblx0fTtcbn0pO1xuXG5cblxuLyoqXG4gKiBSZXR1cm4gYXJyYXkgd2l0aCBleGNsdWRlZCBkaXN0J3MgaXRlbXMgZnJvbSBzb3VyY2UgYXJyYXlcbiAqXG4gKiBAYWNjZXNzIHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IHNvdXJjZVxuICogQHBhcmFtIHtBcnJheX0gZGlzdFxuICogQHJldHVybiB7QXJyYXl9XG4gKi9cbmZ1bmN0aW9uIGV4Y2x1ZGVBcnJheShzb3VyY2UsIGRpc3QpIHtcblx0Y29uc3QgcmVzdWx0ID0gW10uY29uY2F0KHNvdXJjZSk7XG5cdGRpc3QuZm9yRWFjaChpdGVtID0+IHtcblx0XHRjb25zdCBpbmRleCA9IHJlc3VsdC5pbmRleE9mKGl0ZW0pO1xuXHRcdGlmIChpbmRleCA+IC0xKSB7XG5cdFx0XHRyZXN1bHQuc3BsaWNlKGluZGV4LCAxKTtcblx0XHRcdHJldHVyblxuXHRcdH1cblx0fSlcblxuXHRyZXR1cm4gcmVzdWx0O1xufVxuXG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcblx0ZW50aXR5IDogJ0h0bWw1Jyxcblx0YXV0b3BsYXkgOiBmYWxzZSxcblx0aGVpZ2h0IDogJ2F1dG8nLFxuXHRsb29wIDogZmFsc2UsXG5cdG11dGVkIDogZmFsc2UsXG5cdHByZWxvYWQgOiAnbWV0YWRhdGEnLFxuXHRwb3N0ZXIgOiBudWxsLFxuXHRzdmdQYXRoIDogJycsXG5cdGlubmFjdGl2aXR5VGltZW91dCA6IDUwMDAsXG5cdHJhdGUgOiB7XG5cdFx0c3RlcCA6IDAuMjUsXG5cdFx0bWluIDogMC41LFxuXHRcdG1heCA6IDQuMCxcblx0XHRkZWZhdWx0IDogMVxuXHR9LFxuXHRwbGF5YmFjayA6IHtcblx0XHRzdGVwIDoge1xuXHRcdFx0c2hvcnQgOiA1LFxuXHRcdFx0bWVkaXVtIDogMTAsXG5cdFx0XHRsb25nIDogMzBcblx0XHR9XG5cdH0sXG5cdGNvbnRyb2xzIDoge1xuXHRcdGNvbW1vbiA6IFtcblx0XHRcdFsncGxheScsICd2b2x1bWUnLCAnZGl2aWRlcicsICd0aW1lbGluZScsICAnZGl2aWRlcicsICdzZWN0aW9uJywgJ2RpdmlkZXInLCAnZnVsbHNjcmVlbiddLFxuXHRcdFx0WydyYXRlJywgJ2RpdmlkZXInLCAnYmFja3dhcmQnLCAnZGl2aWRlcicsICdzb3VyY2UnLCAnZGl2aWRlcicsICdzdWJ0aXRsZScsICdkaXZpZGVyJywgJ2Rvd25sb2FkJywgJ2RpdmlkZXInLCAna2V5YmluZGluZyBpbmZvJ11cblx0XHRdLFxuXHRcdGZ1bGxzY3JlZW4gOiBbXG5cdFx0XHRbJ3BsYXknLCAndm9sdW1lJywgJ2RpdmlkZXInLCAndGltZWxpbmUnLCAnZGl2aWRlcicsICdyYXRlJywgJ2RpdmlkZXInLCAna2V5YmluZGluZyBpbmZvJywgICdkaXZpZGVyJywgJ2JhY2t3YXJkJywgJ2RpdmlkZXInLCAnc291cmNlJywgJ2RpdmlkZXInLCAnc3VidGl0bGUnLCAnZGl2aWRlcicsICdkb3dubG9hZCcsICdkaXZpZGVyJywgJ3NlY3Rpb24nLCAnZGl2aWRlcicsICdmdWxsc2NyZWVuJ11cblx0XHRdLFxuXHRcdG1pbmkgOiBbXG5cdFx0XHRbJ3BsYXknLCAndm9sdW1lJywgJ2RpdmlkZXInLCAnZnVsbHNjcmVlbicsICdkaXZpZGVyJywgJ3RpbWVpbmZvJ11cblx0XHRdLFxuXHRcdCdjb21tb246YW5kcm9pZCcgOiBbXG5cdFx0XHRbJ3BsYXknLCAndGltZWxpbmUnLCAnZnVsbHNjcmVlbiddLFxuXHRcdFx0WydyYXRlJywgJ3NvdXJjZScsICdzZWN0aW9uJ11cblx0XHRdLFxuXHRcdCdmdWxsc2NyZWVuOm1vYmlsZScgOiBbXG5cdFx0XHRbJ3BsYXknLCAndGltZWxpbmUnLCAnZnVsbHNjcmVlbiddLFxuXHRcdFx0WydyYXRlJywgJ3NvdXJjZScsICdzZWN0aW9uJ11cblx0XHRdLFxuXHRcdCdjb21tb246aW9zJyA6IFtcblx0XHRcdFsncGxheScsICdyYXRlJywgJ3RpbWVsaW5lJywgJ3NvdXJjZSddXG5cdFx0XSxcblx0fSxcblx0Y29udHJvbHNPcHRpb25zIDoge1xuXG5cdFx0Y29tbW9uIDoge1xuXHRcdFx0YWxpZ24gOiBbJ2p1c3RpZnknLCAnbGVmdCddLFxuXHRcdFx0Ly8gbW9iaWxlIDogdHJ1ZVxuXHRcdH0sXG5cdFx0ZnVsbHNjcmVlbiA6IHtcblx0XHRcdGFsaWduIDogJ2p1c3RpZnknXG5cdFx0fSxcblx0XHQnY29tbW9uOmFuZHJvaWQnIDoge1xuXHRcdFx0YWxpZ24gOiBbJ2p1c3RpZnknLCAncmlnaHQnXVxuXHRcdH0sXG5cblx0XHQnZnVsbHNjcmVlbjptb2JpbGUnIDoge1xuXHRcdFx0YWxpZ24gOiBbJ2p1c3RpZnknLCAncmlnaHQnXVxuXHRcdH1cblx0fSxcblx0dm9sdW1lIDoge1xuXHRcdGRlZmF1bHQgOiAwLjQsXG5cdFx0bXV0ZWxpbWl0IDogMC4wNSxcblx0XHRzdGVwIDogMC4xXG5cdH0sXG5cdGtleUJpbmRpbmcgOiBbXG5cdFx0e1xuXHRcdFx0a2V5IDogMzIsXG5cdFx0XHRpbmZvIDogWydTcGFjZSddLFxuXHRcdFx0ZGVzY3JpcHRpb24gOiAn0J3QsNGH0LDRgtGMINC/0YDQvtC40LPRgNGL0LLQsNC90LjQtSAvINC/0L7RgdGC0LDQstC40YLRjCDQvdCwINC/0LDRg9C30YMnLFxuXHRcdFx0Zm4gOiAocGxheWVyKSA9PiB7XG5cdFx0XHRcdHBsYXllci52aWRlby50b2dnbGVQbGF5KCk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHR7XG5cdFx0XHRrZXkgOiAzNyxcblx0XHRcdGluZm8gOiBbJ+KGkCddLFxuXHRcdFx0ZGVzY3JpcHRpb24gOiBg0J/QtdGA0LXQvNC+0YLQsNGC0Ywg0L3QsCAxMCDRgdC10LrRg9C90LQg0L3QsNC30LDQtGAsXG5cdFx0XHRmbiA6IChwbGF5ZXIpID0+IHtcblx0XHRcdFx0cGxheWVyLnZpZGVvLmN1cnJlbnRUaW1lIC09IHBsYXllci5vcHRpb25zLnBsYXliYWNrLnN0ZXAubWVkaXVtO1xuXHRcdFx0XHRwbGF5ZXIuc3BsYXNoSWNvbi5zaG93KCd1bmRvJyk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHR7XG5cdFx0XHRrZXkgOiAzOSxcblx0XHRcdGluZm8gOiBbJ+KGkiddLFxuXHRcdFx0ZGVzY3JpcHRpb24gOiBg0J/QtdGA0LXQvNC+0YLQsNGC0Ywg0L3QsCAxMCDRgdC10LrRg9C90LQg0LLQv9C10YDRkdC0YCxcblx0XHRcdGZuIDogKHBsYXllcikgPT4ge1xuXHRcdFx0XHRwbGF5ZXIudmlkZW8uY3VycmVudFRpbWUgKz0gcGxheWVyLm9wdGlvbnMucGxheWJhY2suc3RlcC5tZWRpdW07XG5cdFx0XHRcdHBsYXllci5zcGxhc2hJY29uLnNob3coJ3JlZG8nKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdHtcblx0XHRcdHNoaWZ0S2V5IDogdHJ1ZSxcblx0XHRcdGluZm8gOiBbJ1NoaWZ0JywgJ+KGkCddLFxuXHRcdFx0ZGVzY3JpcHRpb24gOiAn0J/QtdGA0LXQudGC0Lgg0L3QsCDQv9GA0LXQtNGL0LTRg9GJ0YPRjiDRgdC10LrRhtC40Y4nLFxuXHRcdFx0a2V5IDogMzcsXG5cdFx0XHRmbiA6IChwbGF5ZXIpID0+IHtcblx0XHRcdFx0aWYocGxheWVyLnNlY3Rpb25zID09IG51bGwpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0cGxheWVyLnNlY3Rpb25zLnByZXYoKTtcblxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0c2hpZnRLZXkgOiB0cnVlLFxuXHRcdFx0a2V5IDogMzksXG5cdFx0XHRpbmZvIDogWydTaGlmdCcsICfihpInXSxcblx0XHRcdGRlc2NyaXB0aW9uIDogJ9Cf0LXRgNC10LnRgtC4INC90LAg0YHQu9C10LTRg9GO0YnRg9GOINGB0LXQutGG0LjRjicsXG5cdFx0XHRmbiA6IChwbGF5ZXIpID0+IHtcblx0XHRcdFx0aWYocGxheWVyLnNlY3Rpb25zID09IG51bGwpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0cGxheWVyLnNlY3Rpb25zLm5leHQoKVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0a2V5IDogMzgsXG5cdFx0XHRpbmZvIDogWyfihpEnXSxcblx0XHRcdGRlc2NyaXB0aW9uIDogJ9Cj0LLQtdC70LjRh9C40YLRjCDQs9GA0L7QvNC60L7RgdGC0YwnLFxuXHRcdFx0Zm4gOiAocGxheWVyKSA9PiB7XG5cdFx0XHRcdHBsYXllci52aWRlby52b2x1bWUgKz0gcGxheWVyLm9wdGlvbnMudm9sdW1lLnN0ZXA7XG5cblx0XHRcdFx0cGxheWVyLnNwbGFzaEljb24uc2hvdyhwbGF5ZXIuY2FsY1ZvbHVtZUljb24ocGxheWVyLnZpZGVvLnZvbHVtZSkpO1xuXG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdHtcblx0XHRcdGtleSA6IDQwLFxuXHRcdFx0aW5mbyA6IFsn4oaTJ10sXG5cdFx0XHRkZXNjcmlwdGlvbiA6ICfQo9C80LXQvdGM0YjQuNGC0Ywg0LPRgNC+0LzQutC+0YHRgtGMJyxcblx0XHRcdGZuIDogKHBsYXllcikgPT4ge1xuXHRcdFx0XHRwbGF5ZXIudmlkZW8udm9sdW1lIC09IHBsYXllci5vcHRpb25zLnZvbHVtZS5zdGVwO1xuXG5cdFx0XHRcdHBsYXllci5zcGxhc2hJY29uLnNob3cocGxheWVyLmNhbGNWb2x1bWVJY29uKHBsYXllci52aWRlby52b2x1bWUpKTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0e1xuXHRcdFx0a2V5IDogNzAsXG5cdFx0XHRpbmZvIDogWydmJ10sXG5cdFx0XHRkZXNjcmlwdGlvbiA6ICfQntGC0LrRgNGL0YLRjC/Qt9Cw0LrRgNGL0YLRjCDQv9C+0LvQvdC+0Y3QutGA0LDQvdGL0Lkg0YDQtdC20LjQvCcsXG5cdFx0XHRmbiA6IChwbGF5ZXIpID0+IHtcblx0XHRcdFx0cGxheWVyLnRvZ2dsZUZ1bGxzY3JlZW4oKTtcblx0XHRcdH1cblx0XHR9XG5cdF0sXG5cdHBsdWdpbnMgOiB7XG5cdFx0bWluaXBsYXllciA6IHt9XG5cdH0sXG5cdG9uUGxheWVySW5pdGVkIDogbm9vcFxufTtcblxuLyoqXG4gKiBAY2xhc3MgUGxheWVyXG4gKiBAZXh0ZW5kcyBDb21wb25lbnRcbiAqIEBwYXJhbSB7alF1ZXJ5fSBlbGVtZW50IEVsZW1lbnQgd2hlbiBwbGF5ZXIgd2lsbCBpbml0XG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmF1dG9wbGF5PWZhbHNlXVxuICogV2hlbiBwcmVzZW50LCB0aGUgdmlkZW8gd2lsbCBhdXRvbWF0aWNhbGx5IHN0YXJ0IHBsYXlpbmcgYXMgc29vbiBhcyBpdCBjYW4gZG8gc28gd2l0aG91dCBzdG9wcGluZy5cbiAqIEBwYXJhbSB7U3RyaW5nfE51bWJlcn0gW29wdGlvbnMuaGVpZ2h0PSdhdXRvJ10gSGVpZ2h0IG9mIHZpZGVvIGNvbnRhaW5lclxuICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLndpZHRoXSBXaWR0aCBvZiB2aWRlbyBjb250YWluZXJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMubG9vcD1mYWxzZV1cbiAqIFdoZW4gcHJlc2VudCwgaXQgc3BlY2lmaWVzIHRoYXQgdGhlIHZpZGVvIHdpbGwgc3RhcnQgb3ZlciBhZ2FpbiwgZXZlcnkgdGltZSBpdCBpcyBmaW5pc2hlZC5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMubXV0ZWQ9ZmFsc2VdXG4gKiBXaGVuIHByZXNlbnQsIGl0IHNwZWNpZmllcyB0aGF0IHRoZSBhdWRpbyBvdXRwdXQgb2YgdGhlIHZpZGVvIHNob3VsZCBiZSBtdXRlZC5cbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5wcmVsb2FkPSdtZXRhZGF0YSddIENhbiBiZSAoJ2F1dG8nfCdtZXRhZGF0YSd8J25vbmUnKVxuICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLnBvc3Rlcl0gUGF0aCB0byBwb3N0ZXIgb2YgdmlkZW9cbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5zdmdQYXRoXSBQYXRoIHRvIHN2ZyBzcHJpdGUgZm9yIGljb25zXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMucmF0ZV0gUmF0ZSBvcHRpb25zXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMucmF0ZS5zdGVwPTAuMjVdIFN0ZXAgb2YgaW5jcmVhc2UvZGVjcmVhc2UgYnkgcmF0ZSBjb250cm9sXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMucmF0ZS5taW49MC41XSBNaW4gb2YgcmF0ZVxuICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLnJhdGUubWF4PTQuMF0gTWF4IG9mIHJhdGVcbiAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5yYXRlLmRlZmF1bHQ9MV1cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5wbGF5YmFja10gUGxheWJhY2sgb3B0aW9uc1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLnBsYXliYWNrLnN0ZXBdXG4gKiBAcGFyYW0ge051Ym1lcn0gW29wdGlvbnMucGxheWJhY2suc3RlcC5zaG9ydD01XVxuICogQHBhcmFtIHtOdWJtZXJ9IFtvcHRpb25zLnBsYXliYWNrLnN0ZXAubWVkaXVtPTMwXVxuICogQHBhcmFtIHtOdWJtZXJ9IFtvcHRpb25zLnBsYXliYWNrLnN0ZXAubG9uZz02MF1cbiAqIEBwYXJhbSB7T2JlamN0fSBbb3B0aW9ucy5jb250cm9sc10gT2JqZWN0IG9mIGNvbnRyb2xzXG4gKiBAcGFyYW0ge1N0cmluZ1tdfSBbb3B0aW9ucy5jb250cm9scy5jb21tb25dIEFycmF5IG9mIGNvbnRyb2xzIGZvciBkZWZhdWx0IHZpZXdcbiAqIEBwYXJhbSB7U3RyaW5nW119IFtvcHRpb25zLmNvbnRyb2xzLmZ1bGxzY3JlZW5dIEFycmF5IG9mIGNvbnRyb2wgZm9yIGZ1bGxzcmVlbiB2aWV3XG4gKiBAcGFyYW0ge1N0cmluZ1tdfSBbb3B0aW9ucy5jb250cm9scy5taW5pXSBBcnJheSBvZiBjb250cm9sIGZvciBtaW5pcGxheWVyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMuZXhjbHVkZUNvbnRyb2xzXSBPYmplY3Qgb2YgZXhjbHVkZSBjb250cm9scy4gU3RydWN0dXJlIGlzIHRoZSBzYW1lIGFzIHRoYXQgb2Ygb3B0aW9ucy5jb250cm9sc1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLnZvbHVtZV0gVm9sdW1lJ3Mgb3B0aW9uc1xuICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLnZvbHVtZS5kZWZhdWx0PTAuNF0gRGVmYXVsdCB2b2x1bWVcbiAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy52b2x1bWUubXV0ZWxpbWl0PTAuMDVdIERlbHRhIHdoZW4gdm9sdW1lIGlzIG11dGVkXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMudm9sdW1lLnN0ZXA9MC4wNV1cbiAqIEBwYXJhbSB7T2JqZWN0W119IFtvcHRpb25zLmtleWJpbmRpbmddXG4gKiBPYmplY3Qgd2l0aCBrZXliaW5kaW5nIG9wdGlvbnMsIHdoZW4ga2V5IGl0J3MgbmFtZSBvZiBrZXkgYmluZGluZywgYW5kIHZhbHVlIGl0J3Mga2V5IGJpbmRpbmcgc2V0dGluZ3NcbiAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5rZXliaW5kaW5nW10ua2V5XSBDb2RlIG9mIGtleSBiaW5kaW5nIChmb3IgZXhhbXBsZSAzMiBpdCdzIHNwYWNlKVxuICogQHBhcmFtIHtTdHJpbmdbXX0gW29wdGlvbnMua2V5YmluZGluZ1tdLmluZm9dIEFycmF5IG9mIGtleXN0cm9rZXMgb3JkZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSBvcHRpb25zLmtleWJpbmRpbmdbXS5kZXNjcmlwdGlvbl0gRGVzY3JpcHRpb24gb2Yga2V5IGJpbmRpbmdcbiAqIEBwYXJhbSB7RnVuY3Rpb259IG9wdGlvbnMua2V5YmluZGluZ1tdLmZuXSBDYWxsYmFja1xuICogQHBhcmFtIHtPYmplY3R8Qm9vbGVhbn0gW29wdGlvbnMubWluaXBsYXllcj1mYWxzZV1cbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5taW5pcGxheWVyLndpZHRoXSBXaWR0aCBvZiBtaW5pcGxheWVyIGNvbnRhaW5lclxuICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLm1pbmlwbGF5ZXIud2lkdGhdIE1pbmlQbGF5ZXIncyB3aWR0aFxuICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLnNlY3Rpb25Db250YWluZXJdIFNlbGVjdG9yIGZvciBzZWN0aW9uc1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLnBsdWdpbnNdIEtleXMgb2Ygb2JqZWN0cyBhcmUgbmFtZSBvZiBwbHVnaW4sIHZhbHVlIC0gcGx1Z2luIG9wdGlvbnNcbiAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH0gW29wdGlvbnMuZGF0YV0gVXJsIG9yIEpTT04gd2l0aCBkYXRhIGZvciBwbGF5ZXJcbiAqIEBwYXJhbSB7QXJyYXl9IFtvcHRpb25zLmRhdGEuc2VjdGlvbnNdIFNlY3Rpb25zIGFycmF5XG4gKi9cblxuY2xhc3MgUGxheWVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucykge1xuXG5cdFx0b3B0aW9ucy5jcmVhdGVFbGVtZW50ID0gZmFsc2U7XG5cblx0XHRzdXBlcihudWxsLCBvcHRpb25zKTtcblxuXHRcdHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xuXG5cdFx0LyoqXG5cdFx0ICogRE9NIGNvbnRhaW5lciB0byBob2xkIGlubmVyIG9mIHBsYXllclxuXHRcdCAqXG5cdFx0ICogQG1lbWJlcm9mISBQbGF5ZXIjXG5cdFx0ICogQHR5cGUge2pRdWVyeX1cblx0XHQgKi9cblx0XHR0aGlzLmlubmVyRWxlbWVudCA9IGNyZWF0ZUVsKCdkaXYnKTtcblxuXHRcdC8vIFVzZXJzIG9wdGlvbnNcblx0XHR0aGlzLl91c2VyT3B0aW9ucyA9IG9wdGlvbnM7XG5cdFx0dGhpcy5faW5pdE9wdGlvbnMoKTtcblxuXHRcdGlmKHRoaXMub3B0aW9ucy5zdmdQYXRoID09PSAnJykge1xuXHRcdFx0UGxheWVyLl9sb2FkU1ZHU3ByaXRlKFBsYXllci5kZWZhdWx0U3ByaXRlKTtcblx0XHR9XG5cblx0XHR0aGlzLl92aWV3ID0gJ2NvbW1vbic7XG5cblx0XHQvKipcblx0XHQgKiBET00gY29udGFpbmVyIHRvIGhvbGQgYWxsIHBsYXllclxuXHRcdCAqXG5cdFx0ICogQG1lbWJlcm9mISBQbGF5ZXIjXG5cdFx0ICogQHR5cGUge2pRdWVyeX1cblx0XHQgKi9cblx0XHR0aGlzLmVsZW1lbnQgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoKTtcblxuXHRcdHRoaXMubG9hZEVudGl0eSh0aGlzLm9wdGlvbnMuZW50aXR5LCB7IGN0eCA6IGVsZW1lbnQgfSk7XG5cdFx0LyoqXG5cdFx0ICogVmlkZW8gaHRtbDUgY29tcG9uZW50XG5cdFx0ICpcblx0XHQgKiBAbWVtYmVyb2YhIFBsYXllciNcblx0XHQgKiBAdHlwZSB7RW50aXR5fVxuXHRcdCAqL1xuXHRcdHRoaXMudmlkZW8gPSB0aGlzLmVudGl0eTtcblxuXHRcdC8vIENyZWF0ZSBjb250cm9sc1xuXHRcdC8vIFRPRE86IG1vdmUgdGhpcyBhY3Rpb24gdG8gdGhlIGNyZWF0ZUVsZW1lbnRcblx0XHR0aGlzLmNvbnRyb2xzID0ge307XG5cdFx0dGhpcy5faW5pdENvbnRyb2xzKCk7XG5cblx0XHQvKipcblx0XHQgKiBAYWNjZXNzIHByaXZhdGVcblx0XHQgKi9cblx0XHR0aGlzLl9kYmxjbGlja1RpbWVvdXQgPSBudWxsO1xuXG5cdFx0dGhpcy5faW5pdFNlY3Rpb25zKCkudGhlbigoZGF0YSkgPT4ge1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBTZWN0aW9ucyBpbml0IGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciNzZWN0aW9uc2luaXRcblx0XHRcdCAqIEBleGFtcGxlXG5cdFx0XHQgKiBjb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyKCQoJyN2aWRlbycpLCBvcHRpb25zKTtcblx0XHRcdCAqIHBsYXllci5vbignc2VjdGlvbnNpbml0JywgKGUsIGRhdGEpID0+IGNvc25vbGUubG9nKGRhdGEpKTtcblx0XHRcdCAqXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMudHJpZ2dlcignc2VjdGlvbnNpbml0JywgZGF0YSk7XG5cdFx0fSk7XG5cdFx0dGhpcy5faW5pdFBsdWdpbnMoKTtcblxuXHRcdHRoaXMuX2xpc3RlbkhvdEtleXMoKTtcblxuXHRcdHRoaXMuX3VzZXJBY3Rpdml0eSA9IGZhbHNlO1xuXHRcdHRoaXMuX2xpc3RlblVzZXJBY3Rpdml0eSgpO1xuXG5cdFx0dGhpcy5fd2FpdGluZ1RpbWVvdXRzID0gW107XG5cblx0XHQvKiBSZXRyaWdnZXIge0BsaW5rIEVudGl0eX0gRXZlbnRzICovXG5cdFx0W1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBkdXJhdGlvbmNoYW5nZSBwbGF5ZXIgZXZlbnRcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI2R1cmF0aW9uY2hhbmdlXG5cdFx0XHQgKi9cblx0XHRcdCdkdXJhdGlvbmNoYW5nZScsXG5cblx0XHRcdC8qKlxuXHRcdFx0ICogcHJvZ3Jlc3MgaHRtbDUgbWVkaWEgZXZlbnRcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI3Byb2dyZXNzXG5cdFx0XHQgKi9cblx0XHRcdCdwcm9ncmVzcycsXG5cblx0XHRcdC8qKlxuXHRcdFx0ICogZGJsY2xpY2tcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI2RiY2xpY2tcblx0XHRcdCAqL1xuXHRcdFx0J2RibGNsaWNrJyxcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBkYmxjbGlja1xuXHRcdFx0ICpcblx0XHRcdCAqIEBldmVudCBQbGF5ZXIjZGJjbGlja1xuXHRcdFx0ICovXG5cdFx0XHQnY2xpY2snLFxuXG5cblx0XHRcdC8qKlxuXHRcdFx0ICogY2FucGxheSBodG1sNSBtZWRpYSBldmVudFxuXHRcdFx0ICpcblx0XHRcdCAqIEBldmVudCBQbGF5ZXIjY2FucGxheVxuXHRcdFx0ICovXG5cdFx0XHQnY2FucGxheScsXG5cblx0XHRcdC8qKlxuXHRcdFx0ICogcXVhbGl0eWNoYW5nZSBodG1sNVxuXHRcdFx0ICpcblx0XHRcdCAqIEBldmVudCBQbGF5ZXIjcXVhbGl0eWNoYW5nZVxuXHRcdFx0ICovXG5cdFx0XHQncXVhbGl0eWNoYW5nZScsXG5cblx0XHRcdC8qKlxuXHRcdFx0ICogcXVhbGl0eWNoYW5nZSBodG1sNVxuXHRcdFx0ICpcblx0XHRcdCAqIEBldmVudCBQbGF5ZXIjdHJhY2tzY2hhbmdlXG5cdFx0XHQgKi9cblx0XHRcdCd0cmFja3NjaGFuZ2UnLFxuXG5cblxuXHRcdF0uZm9yRWFjaChldmVudE5hbWUgPT4ge1xuXHRcdFx0dGhpcy52aWRlby5vbihldmVudE5hbWUsICgpID0+IHtcblx0XHRcdFx0dGhpcy50cmlnZ2VyKGV2ZW50TmFtZSk7XG5cdFx0XHR9KVxuXHRcdH0pO1xuXG5cdFx0dGhpcy52aWRlby5vbmUoJ3BsYXknLCAoKSA9PiB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEZpcnN0IHBsYXkgZXZlbnRcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAZXZlbnQgUGxheWVyI2ZpcnN0cGxheVxuICAgICAgICAgICAgICovXG5cdFx0XHR0aGlzLnRyaWdnZXIoJ2ZpcnN0cGxheScpO1xuXHRcdFx0dGhpcy5yZW1vdmVDbGFzcygnbGVwbGF5ZXItLXZpcmdpbicpO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy52aWRlby5vbigndGltZXVwZGF0ZScsICgpID0+IHtcblx0XHRcdGlmICh0aGlzLnZpZGVvLmN1cnJlbnRUaW1lID4gMCkge1xuXHRcdFx0XHR0aGlzLnJlbW92ZUNsYXNzKCdsZXBsYXllci0tdmlyZ2luJyk7XG5cdFx0XHR9XG5cblx0XHRcdC8qKlxuXHRcdFx0ICogdGltZXVwZGF0ZSBodG1sNSBtZWRpYSBldmVudFxuXHRcdFx0ICpcblx0XHRcdCAqIEBldmVudCBQbGF5ZXIjdGltZXVwZGF0ZVxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLnRyaWdnZXIoJ3RpbWV1cGRhdGUnLCB7IHRpbWUgOiB0aGlzLnZpZGVvLmN1cnJlbnRUaW1lLCBkdXJhdGlvbiA6IHRoaXMudmlkZW8uZHVyYXRpb24gfSk7XG5cblx0XHR9KVxuXG5cdFx0dGhpcy52aWRlby5vbignbG9hZHN0YXJ0JywgKCkgPT4ge1xuXHRcdFx0dGhpcy5yZW1vdmVDbGFzcygnbGVwbGF5ZXItLWVuZGVkJyk7XG5cblx0XHRcdHRoaXMuZXJyb3IgPSBudWxsO1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBsb2Fkc3RhcnQgcGxheWVyIGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciNsb2Fkc3RhcnRcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdsb2Fkc3RhcnQnKTtcblx0XHR9KTtcblxuXHRcdHRoaXMudmlkZW8ub24oJ3NlZWtpbmcnLCAoKSA9PiB7XG5cdFx0XHR0aGlzLl9zdGFydFdhaXRpbmcoKTtcblx0XHRcdC8qKlxuXHRcdFx0ICogc2Vla2luZyBodG1sNSBtZWRpYSBldmVudFxuXHRcdFx0ICpcblx0XHRcdCAqIEBldmVudCBQbGF5ZXIjc2Vla2luZ1xuXHRcdFx0ICovXG5cdFx0XHR0aGlzLnRyaWdnZXIoJ3NlZWtpbmcnKTtcblx0XHR9KTtcblxuXHRcdHRoaXMudmlkZW8ub24oJ3NlZWtlZCcsICgpID0+IHtcblx0XHRcdHRoaXMuX3N0b3BXYXl0aW5nKCk7XG5cdFx0XHQvKipcblx0XHRcdCAqIHNlZWtlZCBodG1sNSBtZWRpYSBldmVudFxuXHRcdFx0ICpcblx0XHRcdCAqIEBldmVudCBQbGF5ZXIjc2Vla2VkXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMudHJpZ2dlcignc2Vla2VkJyk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLnZpZGVvLm9uKCd2b2x1bWVjaGFuZ2UnLCAoKSA9PiB7XG5cdFx0XHQvKipcblx0XHRcdCAqIHZvbHVtZWNoYW5nZSBodG1sNSBtZWRpYSBldmVudFxuXHRcdFx0ICpcblx0XHRcdCAqIEBldmVudCBQbGF5ZXIjdm9sdW1lY2hhbmdlXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMudHJpZ2dlcigndm9sdW1lY2hhbmdlJywgeyB2b2x1bWUgOiB0aGlzLnZpZGVvLnZvbHVtZSB9KTtcblx0XHR9KTtcblxuXHRcdHRoaXMudmlkZW8ub24oJ3Bvc3RlcmNoYW5nZScsIChlLCBkYXRhKSA9PiB7XG5cdFx0XHRjb25zdCB1cmwgPSBkYXRhLnVybDtcblx0XHRcdHRoaXMucG9zdGVyLnVybCA9IHVybDtcblx0XHRcdHRoaXMudHJpZ2dlcigncG9zdGVyY2hhbmdlJyk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLnZpZGVvLm9uKCdwbGF5JywgKGUpID0+IHtcblx0XHRcdHRoaXMucmVtb3ZlQ2xhc3MoJ2xlcGxheWVyLS1lbmRlZCcpO1xuXHRcdFx0dGhpcy5yZW1vdmVDbGFzcygnbGVwbGF5ZXItLXBhdXNlZCcpO1xuXHRcdFx0dGhpcy5hZGRDbGFzcygnbGVwbGF5ZXItLXBsYXlpbmcnKTtcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBwbGF5IGh0bWw1IG1lZGlhIGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciNwbGF5XG5cdFx0XHQgKi9cblx0XHRcdHRoaXMudHJpZ2dlcigncGxheScpO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy52aWRlby5vbigncGF1c2UnLCAoKSA9PiB7XG5cdFx0XHR0aGlzLnJlbW92ZUNsYXNzKCdsZXBsYXllci0tcGxheWluZycpO1xuXHRcdFx0dGhpcy5hZGRDbGFzcygnbGVwbGF5ZXItLXBhdXNlZCcpO1xuXG5cdFx0XHQvKipcblx0XHRcdCAqIHBhdXNlIGh0bWw1IG1lZGlhIGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciNwYXVzZVxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLnRyaWdnZXIoJ3BhdXNlJyk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLnZpZGVvLm9uKCdwbGF5aW5nJywgKCkgPT4ge1xuXHRcdFx0dGhpcy5fc3RvcFdheXRpbmcoKTtcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBwbGF5aW5nIGh0bWw1IG1lZGlhIGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciNwbGF5aW5nXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMudHJpZ2dlcigncGxheWluZycpO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy52aWRlby5vbigncmF0ZWNoYW5nZScsICgpID0+IHtcblx0XHRcdC8qKlxuXHRcdFx0ICogcmF0ZSBodG1sNSBtZWRpYSBldmVudFxuXHRcdFx0ICpcblx0XHRcdCAqIEBldmVudCBQbGF5ZXIjcmF0ZVxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLnRyaWdnZXIoJ3JhdGVjaGFuZ2UnLCB7IHJhdGUgOiB0aGlzLnZpZGVvLnJhdGUgfSk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLnZpZGVvLm9uKCdlbmRlZCcsICgpID0+IHtcblx0XHRcdHRoaXMuYWRkQ2xhc3MoJ2xlcGxheWVyLS1lbmRlZCcpO1xuXG5cdFx0XHRpZih0aGlzLm9wdGlvbnMubG9vcCkge1xuXHRcdFx0XHR0aGlzLmN1cnJlbnRUaW1lID0gMDtcblx0XHRcdFx0dGhpcy52aWRlby5wbGF5KCk7XG5cdFx0XHR9IGVsc2UgaWYgKCF0aGlzLnZpZGVvLnBhdXNlZCkge1xuXHRcdFx0XHR0aGlzLnZpZGVvLnBhdXNlKCk7XG5cdFx0XHR9XG5cblx0XHRcdC8qKlxuXHRcdFx0ICogZW5kZWQgaHRtbDUgbWVkaWEgZXZlbnRcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI2VuZGVkXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMudHJpZ2dlcignZW5kZWQnKTtcblx0XHR9KTtcblxuXHRcdHRoaXMudmlkZW8ub24oJ2NhbnBsYXl0aHJvdWdoJywgKCkgPT4ge1xuXHRcdFx0dGhpcy5fc3RvcFdheXRpbmcoKTtcblx0XHRcdC8qKlxuXHRcdFx0ICogY2FucGxheXRocm91Z2ggaHRtbDUgbWVkaWEgZXZlbnRcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI2NhbnBsYXl0aHJvdWdoXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMudHJpZ2dlcignY2FucGxheXRocm91Z2gnKTtcblx0XHR9KTtcblxuXHRcdHRoaXMudmlkZW8ub24oJ3dhaXRpbmcnLCAoKSA9PiB7XG5cdFx0XHR0aGlzLl9zdGFydFdhaXRpbmcoKTtcblxuXHRcdFx0dGhpcy52aWRlby5vbmUoJ3RpbWV1cGRhdGUnLCAoKSA9PiB0aGlzLl9zdG9wV2F5dGluZygpKTtcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiB3YWl0aW5nIGh0bWw1IG1lZGlhIGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciN3YWl0aW5nXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMudHJpZ2dlcignd2FpdGluZycpO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy52aWRlby5vbignZXJyb3InLCAoZSwgZGF0YSkgPT4ge1xuXHRcdFx0dGhpcy5lcnJvciA9IG5ldyBNZWRpYUVycm9yKGRhdGEuY29kZSk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLnZpZGVvLmluaXQoKS50aGVuKCgpID0+IHtcblx0XHRcdC8qKlxuXHRcdFx0ICogUGxheWVyIGluaXQgZXZlbnRcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI2luaXRlZFxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLnRyaWdnZXIoJ2luaXRlZCcpO1xuXG5cdFx0XHRpZih0aGlzLm9wdGlvbnMudGltZSkge1xuXHRcdFx0XHR0aGlzLmN1cnJlbnRUaW1lID0gdGhpcy5vcHRpb25zLnRpbWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmKHRoaXMudmlkZW8uc3JjICE9IG51bGwgJiYgdGhpcy5vcHRpb25zLmF1dG9wbGF5KSB7XG5cdFx0XHRcdHRoaXMucGxheSgpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cblx0XHR0aGlzLm9uKCdmdWxsc2NyZWVuY2hhbmdlJywgdGhpcy5fb25GdWxsc2NyZWVuQ2hhbmdlLmJpbmQodGhpcykpO1xuXHRcdHRoaXMub24oJ2NsaWNrJywgdGhpcy5fb25DbGljay5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLm9uKCdkYmxjbGljaycsIHRoaXMuX29uRGJjbGljay5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLm9uKCdpbml0ZWQnLCB0aGlzLl9vbkluaXRlZC5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLm9uKCdwbGF5JywgdGhpcy5fb25QbGF5LmJpbmQodGhpcykpO1xuXHRcdHRoaXMub24oJ3BhdXNlJywgdGhpcy5fb25QYXVzZS5iaW5kKHRoaXMpKTtcblxuXHRcdCQoZG9jdW1lbnQpLm9uKEZ1bGxzY3JlZW5BcGkuZnVsbHNjcmVlbmNoYW5nZSwgdGhpcy5fb25FbnRpdHlGdWxsc2NyZW5DaGFuZ2UuYmluZCh0aGlzKSk7XG5cdH1cblxuXHRnZXQgZW50aXR5KCkge1xuXHRcdHJldHVybiB0aGlzLl9lbnRpdHk7XG5cdH1cblxuXHRsb2FkRW50aXR5KG5hbWUsIG9wdGlvbnMpIHtcblx0XHRjb25zdCBFbnRpdHkgPSBQbGF5ZXIuZ2V0Q29tcG9uZW50KG5hbWUpO1xuXHRcdHRoaXMuX2VudGl0eSA9IG5ldyBFbnRpdHkodGhpcywgb3B0aW9ucyk7XG5cdH1cblxuXHQvKipcblx0ICogU3RhcnRzIHBsYXlpbmcgdGhlIHZpZGVvXG5cdCAqXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBleGFtcGxlXG5cdCAqIGNvbnN0IHBsYXllciA9IG5ldyBQbGF5ZXIoJChcIiN2aWRlb1wiKSxvcHRpb25zKTtcblx0ICogJCgnLnNvbWUtYnV0dG9uJykub24oJ2NsaWNrJywgKCkgPT4gcGxheWVyLnBsYXkoKSk7XG5cdCAqL1xuXHRwbGF5KCkge1xuXHRcdHJldHVybiB0aGlzLnZpZGVvLnBsYXkoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBQYXVzZXMgdGhlIGN1cnJlbnRseSBwbGF5aW5nIHZpZGVvXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqL1xuXHRwYXVzZSgpIHtcblx0XHRyZXR1cm4gdGhpcy52aWRlby5wYXVzZSgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRvZ2dsZSB0aGUgY3VycmVudGx5IHBsYXlpbmcgdmlkZW9cblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICovXG5cdHRvZ2dsZVBsYXkoKSB7XG5cdFx0cmV0dXJuIHRoaXMudmlkZW8udG9nZ2xlUGxheSgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEJlZ2luIGxvYWRpbmcgdGhlIHNyYyBkYXRhXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqL1xuXHRsb2FkKCkge1xuXHRcdHJldHVybiB0aGlzLnZpZGVvLmxvYWQoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBPbiBzZXQgdmlldyBjYWxsYmFja1xuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAcGFyYW0ge1N0cmluZ30gdmlldyBWaWV3IG5hbWVcblx0ICogQHJldHVybnMge1BsYXllcn0gdGhpc1xuXHQgKiBAZXhhbXBsZVxuXHQgKiBjb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyKCQoJyN2aWRlbycpLCBvcHRpb25zKTtcblx0ICogcGxheWVyLm9uU2V0VmlldygnbWluaScsICgpID0+IGNvbnNvbGUubG9nKCdNaW5pcGxheWVyIHllYWghJylcblx0ICogICAgIC5vblNldFZpZXcoJ2Z1bGxzY3JlZW4nLCAoKSA9PiBjb25zb2xlLmxvZygnRnVsbHNjcmVlbiBib29tIScpXG5cdCAqICAgICAub25TZXRWaWV3KCdjb21tb24nLCAoKSA9PiBjb25zb2xlLmxvZygnQ29tbW9uIHZpZXcgLSBsb2wnKTtcblx0ICovXG5cdG9uU2V0Vmlldyh2aWV3LCAuLi5hcmdzKSB7XG5cdFx0dGhpcy5vbihgc2V0dmlldy4ke3ZpZXd9YCwgLi4uYXJncyk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8qKlxuXHQgKiBDaGFuZ2Ugc291cmNlIGFuZCBzYXZlIHRpbWUsIHJhdGVcblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHBhcmFtIHtPYmplY3R9IHF1YWxpdHlcblx0ICogQHBhcmFtIHtTdHJpbmd9IFtxdWFsaXR5LnRpdGxlXSBUaGUgbmFtZSBvZiBxdWFsaXR1dCBlLnggU0Qgb3IgSERcblx0ICogQHBhcmFtIHtTdHJpbmd9IHF1YWxpdHkudXJsXG5cdCAqL1xuXHRjaGFuZ2VRdWFsaXR5KHF1YWxpdHkpIHtcblx0XHRjb25zdCB2aWRlbyA9IHRoaXMudmlkZW87XG5cdFx0aWYocXVhbGl0eSA9PSBudWxsKSByZXR1cm47XG5cdFx0Y29uc3QgdGltZSA9IHRoaXMuY3VycmVudFRpbWU7XG5cdFx0Y29uc3QgcmF0ZSA9IHRoaXMucmF0ZTtcblx0XHRjb25zdCBpc1BhdXNlZCA9IHRoaXMucGF1c2VkO1xuXG5cdFx0dmlkZW8uc3JjID0gcXVhbGl0eTtcblx0XHR0aGlzLnBsYXliYWNrUmF0ZSA9IHJhdGU7XG5cdFx0dGhpcy5jdXJyZW50VGltZSA9IHRpbWU7XG5cblx0XHRpZihpc1BhdXNlZCkge1xuXHRcdFx0dGhpcy5wYXVzZSgpXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucGxheSgpXG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIE9uIGRlbCB2aWV3IGNhbGxiYWNrXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSB2aWV3IFZpZXcgbmFtZVxuXHQgKiBAcmV0dXJucyB7UGxheWVyfSB0aGlzXG5cdCAqIEBleGFtcGxlXG5cdCAqIGNvbnN0IHBsYXllciA9IG5ldyBQbGF5ZXIoJCgnI3ZpZGVvJyksIG9wdGlvbnMpO1xuXHQgKiBwbGF5ZXIub25EZWxWaWV3KCdtaW5pJywgKCkgPT4gY29uc29sZS5sb2coJ0V4aXQgbWluaXBsYXllcicpXG5cdCAqL1xuXHRvbkRlbFZpZXcodmlldywgLi4uYXJncykge1xuXHRcdHRoaXMub24oYGRlbHZpZXcuJHt2aWV3fWAsIC4uLmFyZ3MpO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHNvbWUgZGF0YSBmb3IgcGxheWVyXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEByZXR1cm5zIHtqUXVlcnkucHJvbWlzZX0gUHJvbWlzZVxuXHQgKi9cblx0Z2V0RGF0YSgpIHtcblx0XHRjb25zdCBkZmQgPSBuZXcgJC5EZWZlcnJlZCgpO1xuXG5cdFx0aWYgKHRoaXMuX2RhdGEgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0ZGZkLnJlc29sdmUodGhpcy5fZGF0YSk7XG5cdFx0XHRyZXR1cm4gZGZkLnByb21pc2UoKVxuXHRcdH1cblxuXHRcdGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmRhdGEgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRyZXR1cm4gJC5hamF4KHtcblx0XHRcdFx0dXJsIDogdGhpcy5vcHRpb25zLmRhdGEsXG5cdFx0XHRcdG1ldGhvZCA6ICdHRVQnLFxuXHRcdFx0XHRkYXRhVHlwZSA6ICdqc29uJ1xuXHRcdFx0fSkucHJvbWlzZSgpO1xuXG5cdFx0fSBlbHNlIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmRhdGEgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRkZmQucmVzb2x2ZSh0aGlzLm9wdGlvbnMuZGF0YSk7XG5cdFx0XHRyZXR1cm4gZGZkLnByb21pc2UoKVxuXHRcdH1cblx0fVxuXG5cdGdldFNlY3Rpb25EYXRhKCkge1xuXHRcdHJldHVybiB0aGlzLmdldERhdGEoKVxuXHRcdFx0LnRoZW4oZGF0YSA9PiB7XG5cdFx0XHRcdHJldHVybiBkYXRhLnNlY3Rpb25zXG5cdFx0XHR9KVxuXHR9XG5cblx0LyoqXG5cdCAqIFJlcXVlc3QgZnVsbHNjcmVlblxuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAZmlyZXMgUGxheWVyI2Z1bGxzY3JlZW5jaGFuZ2Vcblx0ICovXG5cdHJlcXVlc3RGdWxsc2NyZWVuKCkge1xuXHRcdGNvbnN0IGZzQXBpID0gRnVsbHNjcmVlbkFwaTtcblxuXHRcdGlmKGZzQXBpLnJlcXVlc3RGdWxsc2NyZWVuKSB7XG5cdFx0XHQvLyBDYWxsIEhUTUw1IFZpZGVvIGFwaSByZXF1ZXN0RnVsbHNjcmVlblxuXHRcdFx0dGhpcy5lbGVtZW50WzBdW2ZzQXBpLnJlcXVlc3RGdWxsc2NyZWVuXSgpO1xuXG5cdFx0XHQvKipcblx0XHRcdCAqIGZ1bGxzY3JlZW5jaGFuZ2UgaHRtbDUgbWVkaWEgZXZlbnRcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI2Z1bGxzY3JlZW5jaGFuZ2Vcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdmdWxsc2NyZWVuY2hhbmdlJywgdHJ1ZSk7XG5cdFx0fSBlbHNlIGlmICh0aGlzLnZpZGVvLnN1cHBvcnRzRnVsbFNjcmVlbigpKSB7XG5cdFx0XHR0aGlzLnZpZGVvLmVudGVyRnVsbHNjcmVlbigpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBFeGl0IGZ1bGxzY3JlZW5cblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQGZpcmVzIFBsYXllciNmdWxsc2NyZWVuY2hhbmdlXG5cdCAqL1xuXHRleGl0RnVsbHNjcmVlbigpIHtcblx0XHRjb25zdCBmc0FwaSA9IEZ1bGxzY3JlZW5BcGk7XG5cblx0XHRpZihmc0FwaS5leGl0RnVsbHNjcmVlbikge1xuXHRcdFx0ZG9jdW1lbnRbZnNBcGkuZXhpdEZ1bGxzY3JlZW5dKCk7XG5cdFx0fSBlbHNlIGlmICh0aGlzLnZpZGVvLnN1cHBvcnRzRnVsbFNjcmVlbigpKSB7XG5cdFx0XHR0aGlzLnZpZGVvLmV4aXRGdWxsc2NyZWVuKCk7XG5cdFx0fVxuXG5cdFx0dGhpcy50cmlnZ2VyKCdmdWxsc2NyZWVuY2hhbmdlJywgZmFsc2UpO1xuXG5cdH1cblxuXHQvKipcblx0ICogVG9nZ2xlIGZ1bGxzY3JlZW5cblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQGZpcmVzIFBsYXllciNmdWxsc2NyZWVuY2hhbmdlXG5cdCAqL1xuXHR0b2dnbGVGdWxsc2NyZWVuKCkge1xuXHRcdGlmKHRoaXMudmlldyA9PT0gJ2Z1bGxzY3JlZW4nKSB7XG5cdFx0XHR0aGlzLmV4aXRGdWxsc2NyZWVuKClcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5yZXF1ZXN0RnVsbHNjcmVlbigpXG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBDb250cm9sQ29sbGVjdGlvbiBvZiBQbGF5ZXIgYnkgbmFtZSAoZS54ICdjb21tb24nLCAnZnVsbHNjcmVlbicpXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIC0gTmFtZSBvZiBDb250cm9sQ29sbGVjdGlvblxuXHQgKiBAcmV0dXJucyB7Q29udHJvbENvbGxlY3Rpb259XG5cdCAqL1xuXHRnZXRDb250cm9scyhuYW1lKSB7XG5cdFx0cmV0dXJuIHRoaXMuY29udHJvbHNbbmFtZV07XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJuIHRoZSB3aWR0aCBvZiBwbGF5ZXIuXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEByZXR1cm5zIHtOdW1iZXJ9IFdpZHRoIGluIHB4XG5cdCAqL1xuXHRnZXRXaWR0aCgpIHtcblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50LndpZHRoKClcblx0fVxuXG5cdC8qKlxuXHQgKiBDb21wbGV0ZSB0aGUgc2VjdGlvbnMsIGJ5IHRoZSBhZGRpdGlvbmFsIGZpZWxkICdlbmQnIGluIGVhY2ggc2VjdGlvblxuXHQgKlxuXHQgKiBAYWNjZXNzIHByaXZhdGVcblx0ICogQHBhcmFtIHtPYmplY3R9IHNlY3Rpb25zIC0gU2VjdGlvbnNcblx0ICogQHJldHVybnMge09iamVjdH0gTmV3IHNlY3Rpb25zXG5cdCAqL1xuXHRfY29tcGxldGVTZWN0aW9ucyhzZWN0aW9ucykge1xuXHRcdGlmIChzZWN0aW9ucyA9PSBudWxsIHx8IHNlY3Rpb25zLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuXG5cdFx0fVxuXHRcdGxldCBuZXdTZWN0aW9ucyA9IFtdLmNvbmNhdChzZWN0aW9ucylcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG5ld1NlY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRsZXQgZW5kU2VjdGlvbjtcblx0XHRcdGlmIChpIDwgKG5ld1NlY3Rpb25zLmxlbmd0aCAtIDEpKSB7XG5cdFx0XHRcdGVuZFNlY3Rpb24gPSBuZXdTZWN0aW9uc1tpKzFdLmJlZ2luXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRlbmRTZWN0aW9uID0gdGhpcy52aWRlby5kdXJhdGlvbjtcblx0XHRcdH1cblx0XHRcdG5ld1NlY3Rpb25zW2ldLmVuZCA9IGVuZFNlY3Rpb247XG5cdFx0fVxuXHRcdHJldHVybiBuZXdTZWN0aW9ucztcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgYW5kIHNldCB0aGUgY3VycmVudCBwbGF5YmFjayBwb3NpdGlvbiBpbiB0aGUgYXVkaW8vdmlkZW8gKGluIHNlY29uZHMpXG5cdCAqIEdldHRlciBhbmQgc2V0dGVyXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBtZW1iZXJvZiEgUGxheWVyI1xuXHQgKiBAdHlwZSB7TnVibWVyfVxuXHQgKi9cblx0Z2V0IGN1cnJlbnRUaW1lKCkge1xuXHRcdHJldHVybiB0aGlzLnZpZGVvLmN1cnJlbnRUaW1lO1xuXHR9XG5cblx0c2V0IGN1cnJlbnRUaW1lKHZhbHVlKSB7XG5cdFx0dGhpcy52aWRlby5jdXJyZW50VGltZSA9IHZhbHVlO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgdGhlIGxlbmd0aCBvZiB0aGUgY3VycmVudCBhdWRpby92aWRlbyAoaW4gc2Vjb25kcylcblx0ICogR2V0dGVyXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBtZW1iZXJvZiEgUGxheWVyI1xuXHQgKiBAdHlwZSB7TnVibWVyfVxuXHQgKi9cblx0Z2V0IGR1cmF0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLnZpZGVvLmR1cmF0aW9uO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgd2hldGhlciB0aGUgcGxheWJhY2sgb2YgdGhlIGF1ZGlvL3ZpZGVvIGhhcyBlbmRlZCBvciBub3Rcblx0ICogR2V0dGVyXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiEgUGxheWVyI1xuXHQgKiBAdHlwZSB7Qm9vbGVhbn1cblx0ICovXG5cdGdldCBlbmRlZCgpIHtcblx0XHRyZXR1cm4gdGhpcy52aWRlby5lbmRlZDtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIGFuZCBzZXQgd2hldGhlciB0aGUgcGxheWJhY2sgb2YgdGhlIGF1ZGlvL3ZpZGVvIGhhcyBlbmRlZCBvciBub3Rcblx0ICogR2V0dGVyIGFuZCBzZXR0ZXJcblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQG1lbWJlcm9mISBQbGF5ZXIjXG5cdCAqIEB0eXBlIHtNZWRpYUVycm9yfFN0cmluZ31cblx0ICogQGZpcmVzIFBsYXllciNlcnJvclxuXHQgKi9cblx0Z2V0IGVycm9yKCkge1xuXHRcdHJldHVybiB0aGlzLl9lcnJvciB8fCBudWxsO1xuXHR9XG5cblx0c2V0IGVycm9yKHZhbHVlKSB7XG5cdFx0aWYgKHZhbHVlID09PSBudWxsKSB7XG5cdFx0XHR0aGlzLl9lcnJvciA9IG51bGw7XG5cdFx0XHR0aGlzLnJlbW92ZUNsYXNzKCdsZXBsYXllci0tZXJyb3InKTtcblx0XHRcdGlmKHRoaXMuZXJyb3JEaXNwbGF5KSB7XG5cdFx0XHRcdHRoaXMuZXJyb3JEaXNwbGF5LmVsZW1lbnQuaGlkZSgpXG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cdFx0dGhpcy5fZXJyb3IgPSBuZXcgTWVkaWFFcnJvcih2YWx1ZSk7XG5cblx0XHR0aGlzLmFkZENsYXNzKCdsZXBsYXllci0tZXJyb3InKTtcblxuXHRcdC8qKlxuXHRcdCAqIGVycm9yIGV2ZW50XG5cdFx0ICpcblx0XHQgKiBAZXZlbnQgUGxheWVyI2Vycm9yXG5cdFx0ICogQHByb3BlcnR5IHtNZWRpYUVycm9yfSBlcnJvclxuXHRcdCAqIEBleGFtcGxlXG5cdFx0ICogY29uc3QgcGxheWVyID0gbmV3IFBsYXllcigkKCcjdmlkZW8nKSwgb3B0aW9ucyk7XG5cdFx0ICogcGxheWVyLm9uKCdlcnJvcicsIChlLCBkYXRhKSA9PiBjb25zb2xlLmVycm9yKGRhdGEuZXJyb3IpKTtcblx0XHQgKi9cblx0XHR0aGlzLnRyaWdnZXIoJ2Vycm9yJywgeyBlcnJvciA6IHRoaXMuX2Vycm9yfSk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGdldCByYXRlKCkge1xuXHRcdHJldHVybiB0aGlzLnZpZGVvLnJhdGU7XG5cdH1cblxuXHRzZXQgcmF0ZSh2YWx1ZSkge1xuXHRcdHRoaXMudmlkZW8ucmF0ZSA9IHZhbHVlO1xuXHR9XG5cblx0Z2V0IHBhdXNlZCgpIHtcblx0XHRyZXR1cm4gdGhpcy52aWRlby5wYXVzZWQ7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJuIHRoZSBoZWlnaHQgb2YgcGxheWVyLiBJZiB5b3Ugd2FudCBnZXQgaGVpZ2h0IG9ubHkgb2YgdmlkZW8gZWxlbWVudCwgdXNlIHRoaXMudmlkZW8uaGVpZ2h0IG9yIHdoYXRldmVyXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEB0eXBlIHtOdW1iZXJ9XG5cdCAqIEBtZW1iZXJvZiEgUGxheWVyI1xuXHQgKi9cblx0Z2V0IGhlaWdodCgpIHtcblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50LmhlaWdodCgpXG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJuIHVubmVjZXNzYXJ5IHZpZGVvIGhlaWd0aFxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAdHlwZSB7TnVtYmVyfVxuXHQgKiBAbWVtYmVyb2YhIFBsYXllciNcblx0ICovXG5cdGdldCB2aWRlb0hlaWdodCgpIHtcblx0XHRyZXR1cm4gdGhpcy52aWRlby5oZWlnaHQ7XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAdHlwZSB7Qm9vbGVhbn1cblx0ICogQG1lYm1lcm9mISBQbGF5ZXIjXG5cdCAqL1xuXHRnZXQgdXNlckFjdGl2ZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5fdXNlckFjdGl2ZSB8fCBmYWxzZTtcblx0fVxuXG5cdHNldCB1c2VyQWN0aXZlKHZhbHVlKSB7XG5cdFx0aWYodmFsdWUgIT09IHRoaXMuZ2V0VXNlckFjdGl2ZSkge1xuXHRcdFx0dGhpcy5fdXNlckFjdGl2ZSA9IHZhbHVlO1xuXHRcdFx0dGhpcy50b2dnbGVDbGFzcygnbGVwbGF5ZXItLXVzZXItYWN0aXZlJywgdmFsdWUpO1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBVc2VyIGFjdGl2ZSBldmVudFxuXHRcdFx0ICpcblx0XHRcdCAqIEBldmVudCBQbGF5ZXIjdXNlcmFjdGl2ZVxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLnRyaWdnZXIoJ3VzZXJhY3RpdmUnKTtcblx0XHR9XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBTZXQgYW5kIGdldCBwbGF5ZXIgdmlldy4gVmlldyBDYW4gYmUgJ2NvbW1vbicsICdmdWxsc2NyZWVuJywgJ21pbmknd1xuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAdHlwZSB7U3RyaW5nfVxuXHQgKiBAbWVtYmVyb2YhIFBsYXllciNcblx0ICovXG5cdGdldCB2aWV3KCkge1xuXHRcdHJldHVybiB0aGlzLl92aWV3O1xuXHR9XG5cblx0c2V0IHZpZXcodmlldykge1xuXHRcdGlmKHRoaXMudmlldyAhPSBudWxsKSB7XG5cdFx0XHR0aGlzLnJlbW92ZUNsYXNzKGBsZXBsYXllci0tJHt0aGlzLnZpZXd9YCk7XG5cdFx0XHR0aGlzLnRyaWdnZXIoYGRlbHZpZXcuJHt0aGlzLnZpZXd9YCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5fdmlldyA9IHZpZXc7XG5cdFx0dGhpcy5lbGVtZW50LmFkZENsYXNzKGBsZXBsYXllci0tJHt2aWV3fWApXG5cdFx0dGhpcy50cmlnZ2VyKGBzZXR2aWV3LiR7dmlld31gKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlbW92ZSB1bm5lY2Vzc2FyeSBhdHRyaWJ1dGVzLCBhbmQgc2V0IHNvbWUgYXR0cnMgZnJvbSBvcHRpb25zIChsb29wLCBwb3N0ZXIgZXRjLi4uKS4gQ3JlYXRlIG1haW4gRE9NIG9iamVjdHNcblx0ICpcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdGNvbnN0IG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG5cdFx0Y29uc3QgZWxlbWVudCA9IHRoaXMuX2VsZW1lbnQ7XG5cblx0XHR0aGlzLmVsZW1lbnQgPSBjcmVhdGVFbCgnZGl2Jyk7XG5cblxuXHRcdHRoaXMuZWxlbWVudCA9IHRoaXMuZWxlbWVudFxuXHRcdFx0LmFkZENsYXNzKCdsZXBsYXllcicpXG5cdFx0XHQuYXR0cigndGFiaW5kZXgnLCAwKVxuXHRcdFx0LmNzcygnd2lkdGgnLCBvcHRpb25zLndpZHRoICYmICcxMDAlJylcblx0XHRcdC5jc3MoJ21heC13aWR0aCcsIG9wdGlvbnMud2lkdGgpXG5cblx0XHQvKipcblx0XHQgKiBFcnJvciBkaXNwbGF5IGNvbXBvbmVudC5cblx0XHQgKlxuXHRcdCAqIEB0eXBlIHtFcnJvckRpc3BsYXl9XG5cdFx0ICogQG1lbWJlcm9mISBQbGF5ZXIjXG5cdFx0ICovXG5cdFx0dGhpcy5lcnJvckRpc3BsYXkgPSBuZXcgRXJyb3JEaXNwbGF5KHRoaXMpO1xuXG5cblx0XHQvKipcblx0XHQgKiBQbGF5IGJ1dHRvbiBjb21wb25lbnQuXG5cdFx0ICpcblx0XHQgKiBAdHlwZSB7UGxheUJ1dHRvbn1cblx0XHQgKiBAbWVtYmVyb2YhIFBsYXllciNcblx0XHQgKi9cblx0XHR0aGlzLnBsYXlCdXR0b24gPSBuZXcgUGxheUJ1dHRvbih0aGlzKTtcblxuXHRcdC8vIFRPRE86INCS0YvQvdC10YHRgtC4INGN0YLQviDQsiDQvtGC0LTQtdC70YzQvdC10YvQuSDQutC+0LzQv9C+0L3QtdC90YJcblx0XHR0aGlzLmxvYWRlciA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0LmFkZENsYXNzKCdsZXBsYXllci1sb2FkZXItY29udGFpbmVyJylcblx0XHRcdC5hcHBlbmQobmV3IEljb24odGhpcywge1xuXHRcdFx0XHRpY29uTmFtZSA6ICdyZWZyZXNoJyxcblx0XHRcdFx0Y2xhc3NOYW1lIDogJ2xlcGxheWVyLWxvYWRlci1jb250YWluZXJfX2ljb24nXG5cdFx0XHR9KS5lbGVtZW50KTtcblxuXG5cdFx0LyoqXG5cdFx0ICogU3BsYXNoIGljb24gY29tcG9uZW50LlxuXHRcdCAqXG5cdFx0ICogQHR5cGUge1NwbGFzaEljb259XG5cdFx0ICogQG1lbWJlcm9mISBQbGF5ZXIjXG5cdFx0ICovXG5cdFx0dGhpcy5zcGxhc2hJY29uID0gbmV3IFNwbGFzaEljb24odGhpcyk7XG5cblx0XHR0aGlzLnZpZGVvQ29udGFpbmVyID0gY3JlYXRlRWwoJ2RpdicsIHtcblx0XHRcdGNsYXNzTmFtZSA6ICdsZXBsYXllci12aWRlbydcblx0XHR9KVxuXHRcdC5hcHBlbmQodGhpcy5lcnJvckRpc3BsYXkuZWxlbWVudClcblx0XHQuYXBwZW5kKHRoaXMucGxheUJ1dHRvbi5lbGVtZW50KVxuXHRcdC5hcHBlbmQodGhpcy5sb2FkZXIpXG5cdFx0LmFwcGVuZCh0aGlzLnNwbGFzaEljb24uZWxlbWVudClcblxuXHRcdHRoaXMucG9zdGVyID0gbmV3IFBvc3Rlcih0aGlzKTtcblx0XHR0aGlzLnZpZGVvQ29udGFpbmVyLmFwcGVuZCh0aGlzLnBvc3Rlci5lbGVtZW50KTtcblxuXG5cdFx0Y29uc3QgbGFzdFRpbWVyID0gbmV3IFRpbWUodGhpcywge1xuXHRcdFx0Zm4gOiAocGxheWVyKSA9PiB7XG5cdFx0XHRcdGNvbnN0IHZpZGVvID0gcGxheWVyLnZpZGVvO1xuXHRcdFx0XHRyZXR1cm4gc2Vjb25kc1RvVGltZSh2aWRlby5kdXJhdGlvbiAtIHZpZGVvLmN1cnJlbnRUaW1lKTtcblx0XHRcdH1cblx0XHR9KVxuXG5cdFx0aWYodGhpcy5vcHRpb25zLnZpZGVvSW5mbykge1xuXHRcdFx0Y29uc29sZS53YXJuKCdvcHRpb25zLnZpZGVvSW5mbyBpcyBkZXByZWNhdGVkLCBwbGVhc2UgdXNlIGlzdGVhZCBvcHRpb25zLmRlc2NyaXB0aW9uJyk7XG5cdFx0fVxuXG5cdFx0dGhpcy5pbmZvRWxlbWVudCA9IGNyZWF0ZUVsKCdkaXYnLCB7XG5cdFx0XHRjbGFzc05hbWUgOiAnbGVwbGF5ZXJfX2luZm8nXG5cdFx0fSlcblx0XHQuYXBwZW5kKGNyZWF0ZUVsKCdkaXYnLCB7XG5cdFx0XHRjbGFzc05hbWUgOiAnbGVwbGF5ZXJfX3RpdGxlJyxcblx0XHRcdGh0bWwgOiB0aGlzLm9wdGlvbnMudGl0bGUgfHwgXCJcIlxuXHRcdH0pKVxuXHRcdC5hcHBlbmQoY3JlYXRlRWwoJ2RpdicsIHtcblx0XHRcdGNsYXNzTmFtZSA6ICdsZXBsYXllcl9fdmlkZW8taW5mbycsXG5cdFx0XHRodG1sIDogdGhpcy5vcHRpb25zLmRlc2NyaXB0aW9uIHx8IHRoaXMub3B0aW9ucy52aWRlb0luZm8gfHwgXCJcIlxuXHRcdH0pKVxuXHRcdC5hcHBlbmQoY3JlYXRlRWwoJ2RpdicsIHtcblx0XHRcdGNsYXNzTmFtZSA6ICdsZXBsYXllcl9fbGFzdCcsXG5cdFx0XHRodG1sIDogYNCS0LjQtNC10L4g0LfQsNC60L7QvdGH0LjRgtGB0Y8g0YfQtdGA0LXQtyBgLFxuXHRcdH0pLmFwcGVuZChsYXN0VGltZXIuZWxlbWVudCkpXG5cblx0XHR0aGlzLmlubmVyRWxlbWVudCA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0LmFkZENsYXNzKCdsZXBsYXllcl9faW5uZXInKVxuXHRcdFx0LmFwcGVuZCh0aGlzLnZpZGVvQ29udGFpbmVyKVxuXHRcdFx0LmFwcGVuZCh0aGlzLmluZm9FbGVtZW50KVxuXG5cdFx0dGhpcy5lbGVtZW50ID0gdGhpcy5lbGVtZW50XG5cdFx0XHQuYXBwZW5kKHRoaXMuaW5uZXJFbGVtZW50KVxuXG5cdFx0dGhpcy5hZGRDbGFzcygnbGVwbGF5ZXItLXBhdXNlZCcpO1xuXHRcdHRoaXMuYWRkQ2xhc3MoJ2xlcGxheWVyLS12aXJnaW4nKTtcblxuXHRcdGlmKElTX0lQSE9ORSkge1xuXHRcdFx0dGhpcy5hZGRDbGFzcygnbGVwbGF5ZXItLWlwaG9uZScpO1xuXHRcdH1cblxuXHRcdGlmKElTX0FORFJPSUQpIHtcblx0XHRcdHRoaXMuYWRkQ2xhc3MoJ2xlcGxheWVyLS1hbmRyb2lkJyk7XG5cdFx0fVxuXG5cdFx0aWYoSVNfTU9CSUxFKSB7XG5cdFx0XHR0aGlzLmFkZENsYXNzKCdsZXBsYXllci0tbW9iaWxlJyk7XG5cdFx0fVxuXG5cblxuXHRcdGlmKG9wdGlvbnMuc2VjdGlvbkNvbnRhaW5lcikge1xuXHRcdFx0dGhpcy5zZWN0aW9uc0NvbnRhaW5lciA9ICQob3B0aW9ucy5zZWN0aW9uQ29udGFpbmVyKTtcblx0XHR9XG5cblx0XHRlbGVtZW50LmJlZm9yZSh0aGlzLmVsZW1lbnQpO1xuXHRcdHRoaXMudmlkZW9Db250YWluZXIuYXBwZW5kKGVsZW1lbnQpO1xuXG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudDtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgb3B0aW9ucyBmcm9tIHZpZGVvJ3MgYXR0cmlidXRlICggaGVpZ2h0LCB3aWR0aCwgcG9zdGVyLCBwcmVsb2FkIGV0Yy4uLilcblx0ICogR2V0IHNvdXJjZSB2aWRlbyBmcm9tIHNyYyBhdHRyIG9yIDxzb3VyY2U+IGVsZW1lbnQgd2l0aCBkYXRhIGF0dHIgJ2RhdGEtcXVhbGl0eSdcblx0ICogQWxzbyBnZXQgc291cmNlcyBmb3IgZGlmZmVyZW50IHF1YWxpdHkgZnJvbSA8c291cmNlPiBlbGVtZW50IHdpdGggZGF0YSBhdHRyICdkYXRhLXF1YWxpdHknXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHQgKiBAcmV0dXJucyB7T2JqZWN0fSBvcHRpb25zXG5cdCAqL1xuXHRfb3B0aW9uc0Zyb21FbGVtZW50KCkge1xuXHRcdC8vIENvcHkgdmlkZW8gYXR0cnMgdG8gdGhlIG9waXRvbnNcblx0XHRjb25zdCAgZWxlbWVudCA9IHRoaXMuX2VsZW1lbnQ7XG5cdFx0aWYgKGVsZW1lbnQgPT0gbnVsbCB8fCBlbGVtZW50Lmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIHt9XG5cdFx0fVxuXG5cdFx0bGV0IGF0dHJPcHRpb25zID0gW1xuXHRcdFx0J2hlaWdodCcsXG5cdFx0XHQnd2lkdGgnLFxuXHRcdFx0J3Bvc3RlcicsXG5cdFx0XHQnYXV0b3BsYXknLFxuXHRcdFx0J2xvb3AnLFxuXHRcdFx0J211dGVkJyxcblx0XHRcdCdwcmVsb2FkJyxcblx0XHRdXG5cdFx0LnJlZHVjZSgob2JqLCBpdGVtKSA9PiB7XG5cdFx0XHRjb25zdCB2YWwgPSBlbGVtZW50LmF0dHIoaXRlbSk7XG5cdFx0XHRpZih2YWwgIT0gbnVsbCkge1xuXHRcdFx0XHRvYmpbaXRlbV0gPSBlbGVtZW50LmF0dHIoaXRlbSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gb2JqO1xuXHRcdH0sIHt9KTtcblxuXHRcdGF0dHJPcHRpb25zLnNvdXJjZXMgPSBbXTtcblxuXHRcdC8vIFNyYyBpdCBpcyBtYWluIHNvdXJjZSwgdGhhdCB3aWxsIGJlIGxvYWRcblx0XHRpZihlbGVtZW50LmF0dHIoJ3NyYycpKSB7XG5cdFx0XHRhdHRyT3B0aW9ucy5zcmMgPSB7XG5cdFx0XHRcdHVybCA6IGVsZW1lbnQuYXR0cignc3JjJyksXG5cdFx0XHRcdHRpdGxlIDogZWxlbWVudC5hdHRyKCdkYXRhLXF1YWxpdHknKSB8fCBlbGVtZW50LmF0dHIoJ3RpdGxlJykgfHwgJ2RlZmF1bHQnXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gQ29weSBzb3VyY2VzIGZyb20gSFRNTDUgc291cmNlIGVsZW1lbnQgd2l0aCBkYXRhLXF1YWxpdHkgYXR0clxuXHRcdC8vIElmIGRhdGEtcXVhbGl0eSBhdHRyIGRvZXMgbm90IGV4aXN0IC0gbm9cblx0XHRlbGVtZW50LmZpbmQoJ3NvdXJjZScpLmVhY2goKGksIGl0ZW0pID0+IHtcblx0XHRcdGl0ZW0gPSAkKGl0ZW0pO1xuXHRcdFx0aWYoIWl0ZW0uYXR0cignZGF0YS1xdWFsaXR5JykpIHtcblx0XHRcdFx0cmV0dXJuXG5cdFx0XHR9XG5cdFx0XHRhdHRyT3B0aW9ucy5zb3VyY2VzID0gYXR0ck9wdGlvbnMuc291cmNlcy5jb25jYXQoe1xuXHRcdFx0XHR1cmwgOiBpdGVtLmF0dHIoJ3NyYycpLFxuXHRcdFx0XHR0aXRsZSA6IGl0ZW0uYXR0cignZGF0YS1xdWFsaXR5JykgfHwgaXRlbS5hdHRyKCd0aXRsZScpIHx8ICdkZWZhdWx0J1xuXHRcdFx0fSlcblxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIGF0dHJPcHRpb25zO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybiBhIG5hbWUgb2YgaWNvbi4gSWYgbGVzcyB0aGVuIDAuMSByZXR1cm4gdm9sdW1lLW9mZixcblx0ICogaWYgbGVzcyB0aGVuIDAuNSByZXR1cm4gdm9sdW1lIGRvd24sIGVsc2UgcmV0dXJuIHZvbHVtZS11cFxuXHQgKlxuXHQgKiBAYWNjZXNzIHByaXZhdGVcblx0ICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlIFZvbHVtZSB2YWx1ZVxuXHQgKiBAcmV0dXJucyB7U3RyaW5nfSBJY29uIG5hbWVcblx0ICovXG5cdGNhbGNWb2x1bWVJY29uKHZhbHVlKSB7XG5cdFx0aWYodmFsdWUgPT0gbnVsbCkge1xuXHRcdFx0dmFsdWUgPSB0aGlzLnZpZGVvLnZvbHVtZTtcblx0XHR9XG5cdFx0Y29uc3Qgdm9sdW1lID0gdmFsdWU7XG5cblx0XHRpZiAodm9sdW1lIDwgdGhpcy5vcHRpb25zLnZvbHVtZS5tdXRlbGltaXQpIHtcblx0XHRcdHJldHVybiAndm9sdW1lLW9mZic7XG5cdFx0fSBlbHNlIGlmICh2YWx1ZSA8IDAuNSkge1xuXHRcdFx0cmV0dXJuICd2b2x1bWUtZG93bic7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiAndm9sdW1lLXVwJztcblx0XHR9XG5cdH1cblxuXHR0b2dnbGVTZWN0aW9ucyhmbGFnKSB7XG5cdFx0aWYodGhpcy5zZWN0aW9ucykge1xuXHRcdFx0dGhpcy5zZWN0aW9ucy52aXNpYmxlID0gZmxhZztcblx0XHR9XG5cdFx0aWYodGhpcy5vdXRzaWRlU2VjdGlvbnMpIHtcblx0XHRcdHRoaXMub3V0c2lkZVNlY3Rpb25zLnZpc2libGUgPSBmbGFnO1xuXHRcdH1cblx0fVxuXG5cblxuXHQvKipcblx0ICogTWVyZ2UgZGVmYXVsdE9wdGlvbnMsIHByZXNldE9wdGlvbnMgd2l0aCBhdHRyT3B0aW9ucyBhbmQgdXNlcidzIG9wdGlvbnM7XG5cdCAqXG5cdCAqIEFuZCBjb21wbGVtZW50IHR3byBvYmplY3RzOiBjb250cm9scyBhbmQgZXhjbHVkZUNvbnRyb2xzXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHQgKi9cblx0X2luaXRPcHRpb25zKCkge1xuXHRcdGNvbnN0IGF0dHJPcHRpb25zID0gdGhpcy5fb3B0aW9uc0Zyb21FbGVtZW50KCk7XG5cdFx0bGV0IHByZXNldE9wdGlvbnMgPSB7fTtcblxuXHRcdGlmICh0aGlzLl91c2VyT3B0aW9ucy5wcmVzZXQgJiYgUGxheWVyLmdldFByZXNldCh0aGlzLl91c2VyT3B0aW9ucy5wcmVzZXQpKSB7XG5cdFx0XHRwcmVzZXRPcHRpb25zID0gUGxheWVyLmdldFByZXNldCh0aGlzLl91c2VyT3B0aW9ucy5wcmVzZXQpLm9wdGlvbnM7XG5cdFx0fVxuXG5cblx0XHQvLyBNZXJnZSBkZWZhdWx0IG9wdGlvbnMgKyBwcmVzZXQgb3B0aW9ucyArIHZpZGVvIGF0dHJpYnV0dHMrIHVzZXIgb3B0aW9uc1xuXHRcdHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHRydWUsIHt9LCBkZWZhdWx0T3B0aW9ucywgcHJlc2V0T3B0aW9ucywgYXR0ck9wdGlvbnMsIHRoaXMuX3VzZXJPcHRpb25zKTtcblxuXHRcdGlmKHRoaXMub3B0aW9ucy5zb3VyY2VzICYmICFBcnJheS5pc0FycmF5KHRoaXMub3B0aW9ucy5zb3VyY2VzKSkge1xuXHRcdFx0dGhpcy5vcHRpb25zLnNvdXJjZXMgPSBbdGhpcy5vcHRpb25zLnNvdXJjZXNdXG5cdFx0fVxuXG5cdFx0aWYodHlwZW9mIHRoaXMub3B0aW9ucy5zcmMgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHR0aGlzLm9wdGlvbnMuc3JjID0geyB1cmwgOiB0aGlzLm9wdGlvbnMuc3JjIH1cblx0XHR9XG5cblx0XHRpZih0aGlzLm9wdGlvbnMuc3JjID09IG51bGwgJiYgdGhpcy5vcHRpb25zLnNvdXJjZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0dGhpcy5vcHRpb25zLnNyYyA9IHRoaXMub3B0aW9ucy5zb3VyY2VzWzBdXG5cdFx0fVxuXG5cblx0XHQvLyBHZW5lcmF0ZSBhbmRyb2lkOmZ1bGxzY3JlZW4sIGFuZHJvaWQ6Y29tbW9uIGFuZCBldGMgY29udHJvbHMgb3B0aW9uc1xuXG5cblx0XHQvLyBNZXJnZSBjb3JyZWN0bHkgY29udHJvbHMsIHdpdGhvdXQgZGVlcCBtZXJnZVxuXHRcdHRoaXMub3B0aW9ucy5jb250cm9scyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0T3B0aW9ucy5jb250cm9scywgcHJlc2V0T3B0aW9ucy5jb250cm9scywgdGhpcy5fdXNlck9wdGlvbnMuY29udHJvbHMpO1xuXG5cdFx0Ly8gZXhjbHVkZSBjb250cm9scyBvcHRpb25cblx0XHQvLyBUT0RPKGFkaW52YWRpbSk6XG5cdFx0Ly8gU2V0IGRlcHJlY2V0ZWQgZmxhZyBmb3IgdGhpcyBvcHRpb247XG5cdFx0Zm9yIChjb25zdCBuYW1lIGluIHRoaXMub3B0aW9ucy5leGNsdWRlQ29udHJvbHMpIHtcblx0XHRcdGlmICghdGhpcy5vcHRpb25zLmV4Y2x1ZGVDb250cm9scy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkgcmV0dXJuO1xuXHRcdFx0Y29uc3QgY29udHJvbENvbGxlY3Rpb24gPSB0aGlzLm9wdGlvbnMuZXhjbHVkZUNvbnRyb2xzW25hbWVdO1xuXHRcdFx0Y29udHJvbENvbGxlY3Rpb24uZm9yRWFjaCgocm93LCBpbmRleCkgPT4ge1xuXHRcdFx0XHRpZiAodGhpcy5vcHRpb25zLmNvbnRyb2xzW25hbWVdICYmIHRoaXMub3B0aW9ucy5jb250cm9sc1tuYW1lXVtpbmRleF0pIHtcblx0XHRcdFx0XHR0aGlzLm9wdGlvbnMuY29udHJvbHNbbmFtZV1baW5kZXhdID0gZXhjbHVkZUFycmF5KHRoaXMub3B0aW9ucy5jb250cm9sc1tuYW1lXVtpbmRleF0sIHJvdyk7XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMub3B0aW9ucy5wcmVzZXQgJiYgUGxheWVyLmdldFByZXNldCh0aGlzLm9wdGlvbnMucHJlc2V0KSkge1xuXHRcdFx0UGxheWVyLmdldFByZXNldCh0aGlzLm9wdGlvbnMucHJlc2V0KS5pbml0T3B0aW9ucygpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGUgYW5kIGluaXQgYWxsIGNvbnRyb2xzXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHQgKi9cblx0X2luaXRDb250cm9scygpIHtcblx0XHRmb3IgKGNvbnN0IG5hbWUgb2YgWydjb21tb24nLCAnZnVsbHNjcmVlbiddKSB7XG5cdFx0XHRpZiAoIXRoaXMub3B0aW9ucy5jb250cm9scy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkgcmV0dXJuO1xuXHRcdFx0Y29uc3QgY29udHJvbENvbGxlY3Rpb24gPSBuZXcgQ29udHJvbENvbGxlY3Rpb24odGhpcywgeyBuYW1lIH0pO1xuXG5cdFx0XHR0aGlzLmVsZW1lbnQuYXBwZW5kKGNvbnRyb2xDb2xsZWN0aW9uLmVsZW1lbnQpO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLmNvbnRyb2xzLmNvbW1vbiAhPSBudWxsKSB7XG5cdFx0XHR0aGlzLmNvbnRyb2xzLmNvbW1vbi5hY3RpdmUgPSB0cnVlO1xuXHRcdH1cblx0fVxuXG5cblx0X2xpc3RlbkhvdEtleXMoKSB7XG5cblx0XHRjb25zdCBpc0tleUJpbmRpbmcgPSAoZSwgYmluZGluZykgPT4ge1xuXHRcdFx0cmV0dXJuICgoZS53aGljaCA9PT0gYmluZGluZy5rZXkpIHx8IChlLmtleSA9PT0gYmluZGluZy5rZXkpKSAmJlxuXHRcdFx0XHRcdCghIWJpbmRpbmcuc2hpZnRLZXkgPT09IGUuc2hpZnRLZXkpICYmXG5cdFx0XHRcdFx0KCEhYmluZGluZy5jdHJsS2V5ID09PSBlLmN0cmxLZXkpXG5cdFx0fVxuXG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdrZXlkb3duLmxlcGxheWVyLmhvdGtleScsIChlKSA9PiB7XG5cdFx0XHR0aGlzLm9wdGlvbnMua2V5QmluZGluZy5mb3JFYWNoKGJpbmRpbmcgPT4ge1xuXG5cdFx0XHRcdGlmKGlzS2V5QmluZGluZyhlLCBiaW5kaW5nKSkge1xuXHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRiaW5kaW5nLmZuKHRoaXMpO1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXG5cdFx0XHR9KVxuXHRcdH0pXG5cdH1cblxuXHQvKipcblx0ICogSW5pdCBzZWN0aW9ucywgZ2V0IGFqYXggb3IganNvbiB3aXRoIHNlY3Rpb25zIGRhdGEgYW5kIGNyZWF0ZSBTZWN0aW9ucyBvYmplY3QgYW5kIGFkZGVkIHRoZW0gdG8gdGhlIERPTVxuXHQgKlxuXHQgKiBAYWNjZXNzIHByaXZhdGVcblx0ICogQHJldHVybnMge2pxUHJvbWlzZX0galF1ZXJ5IHByb21pc2Vcblx0ICovXG5cdF9pbml0U2VjdGlvbnMoKSB7XG5cdFx0Y29uc3QgZGZkID0gJC5EZWZlcnJlZCgpO1xuXHRcdGlmICh0aGlzLm9wdGlvbnMuZGF0YSA9PSBudWxsKSB7XG5cdFx0XHRkZmQucmVqZWN0KG51bGwpXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuZ2V0U2VjdGlvbkRhdGEoKS5kb25lKHNlY3Rpb25zID0+IHtcblx0XHRcdFx0c2VjdGlvbnMgPSBbLi4uc2VjdGlvbnNdO1xuXG5cdFx0XHRcdGNvbnN0IGlzU2VjdGlvbk91dHNpZGUgPSAodGhpcy5zZWN0aW9uc0NvbnRhaW5lciAmJiB0aGlzLnNlY3Rpb25zQ29udGFpbmVyLmxlbmd0aCA+IDApO1xuXG5cdFx0XHRcdGlmIChzZWN0aW9ucyA9PSBudWxsIHx8IHNlY3Rpb25zLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRcdGRmZC5yZWplY3QobnVsbCk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0c2VjdGlvbnMgPSB0aGlzLl9jb21wbGV0ZVNlY3Rpb25zKHNlY3Rpb25zKTtcblxuXHRcdFx0XHR0aGlzLnNlY3Rpb25zID0gbmV3IFNlY3Rpb25zKHRoaXMsIHtcblx0XHRcdFx0XHRpdGVtcyA6IHNlY3Rpb25zLFxuXHRcdFx0XHRcdGZ1bGxzY3JlZW5Pbmx5IDogaXNTZWN0aW9uT3V0c2lkZSxcblx0XHRcdFx0XHRoaWRlU2Nyb2xsIDogdHJ1ZVxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHR0aGlzLmlubmVyRWxlbWVudC5hcHBlbmQodGhpcy5zZWN0aW9ucy5lbGVtZW50KTtcblxuXHRcdFx0XHRpZiAoaXNTZWN0aW9uT3V0c2lkZSkge1xuXHRcdFx0XHRcdHRoaXMub3V0c2lkZVNlY3Rpb25zID0gbmV3IFNlY3Rpb25zKHRoaXMsIHtcblx0XHRcdFx0XHRcdGl0ZW1zIDogc2VjdGlvbnNcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR0aGlzLnNlY3Rpb25zQ29udGFpbmVyLmFwcGVuZCh0aGlzLm91dHNpZGVTZWN0aW9ucy5lbGVtZW50KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRkZmQucmVzb2x2ZSh7IGl0ZW1zIDogc2VjdGlvbnMgfSk7XG5cdFx0XHR9KVxuXHRcdH1cblxuXHRcdHJldHVybiBkZmQucHJvbWlzZSgpXG5cdH1cblxuXHQvKipcblx0ICogRnVuY3Rpb24sIHRoYW4gaW5pdCBhbGwgcGx1Z2lucyBmcm9tIHBsYXllciBvcHRpb25zLlxuXHQgKiBJZiBwbHVnaW4gZG9lc24ndCBleGlzdCB0aHJvdyBhbiBlcnJvclxuXHQgKlxuXHQgKiBAYWNjZXNzIHByaXZhdGVcblx0ICogQHJldHVybnMge1BsYXllcn0gdGhpc1xuXHQgKi9cblx0X2luaXRQbHVnaW5zKCkge1xuXHRcdGlmICh0aGlzLm9wdGlvbnMucGx1Z2lucykge1xuXHRcdFx0Zm9yIChjb25zdCBuYW1lIGluIHRoaXMub3B0aW9ucy5wbHVnaW5zKSB7XG5cdFx0XHRcdGlmKCF0aGlzLm9wdGlvbnMucGx1Z2lucy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkgcmV0dXJuO1xuXHRcdFx0XHRjb25zdCBwbHVnaW5PcHRpb25zID0gdGhpcy5vcHRpb25zLnBsdWdpbnNbbmFtZV07XG5cdFx0XHRcdGlmKHRoaXNbbmFtZV0pIHtcblx0XHRcdFx0XHRpZihwbHVnaW5PcHRpb25zKSB7XG5cdFx0XHRcdFx0XHR0aGlzW25hbWVdKHBsdWdpbk9wdGlvbnMpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGBQbHVnaW4gJyR7bmFtZX0nIGRvZXNuJ3QgZXhpc3RgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblxuXHQvKipcblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqL1xuXHRfbGlzdGVuVXNlckFjdGl2aXR5KCkge1xuXHRcdGxldCBtb3VzZUluUHJvZ3Jlc3M7XG5cdFx0bGV0IGxhc3RNb3ZlWDtcblx0XHRsZXQgbGFzdE1vdmVZO1xuXG5cdFx0Y29uc3Qgb25Nb3VzZU1vdmUgPSAoZSkgPT4ge1xuXHRcdFx0aWYoZS5zY3JlZW5YICE9PSBsYXN0TW92ZVggfHwgZS5zY3JlZW5ZICE9PSBsYXN0TW92ZVkpIHtcblx0XHRcdFx0bGFzdE1vdmVYID0gZS5zY3JlZW5YO1xuXHRcdFx0XHRsYXN0TW92ZVkgPSBlLnNjcmVlblk7XG5cdFx0XHRcdHRoaXMuX3VzZXJBY3Rpdml0eSA9IHRydWVcblx0XHRcdH1cblx0XHR9XG5cblx0XHRjb25zdCBvbk1vdXNlRG93biA9IChlKSA9PiB7XG5cdFx0XHR0aGlzLl91c2VyQWN0aXZpdHkgPSB0cnVlXG5cblx0XHRcdC8vIFdoaWxlIHVzZXIgaXMgcHJlc3NpbmcgbW91c2Ugb3IgdG91Y2gsIGRpc3BhdGNoIHVzZXIgYWN0aXZpdHlcblx0XHRcdGNsZWFySW50ZXJ2YWwobW91c2VJblByb2dyZXNzKTtcblxuXHRcdFx0bW91c2VJblByb2dyZXNzID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLl91c2VyQWN0aXZpdHkgPSB0cnVlXG5cdFx0XHR9LCAyNTApO1xuXHRcdH1cblxuXHRcdGNvbnN0IG9uTW91c2VVcCA9IChlKSA9PiB7XG5cdFx0XHR0aGlzLl91c2VyQWN0aXZpdHkgPSB0cnVlXG5cdFx0XHRjbGVhckludGVydmFsKG1vdXNlSW5Qcm9ncmVzcyk7XG5cdFx0fVxuXG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XG5cblx0XHR0aGlzLmVsZW1lbnQub24oJ21vdXNlZG93bicsIG9uTW91c2VEb3duKTtcblxuXHRcdHRoaXMuZWxlbWVudC5vbignbW91c2V1cCcsIG9uTW91c2VVcCk7XG5cblx0XHR0aGlzLmVsZW1lbnQub24oJ2tleWRvd24nLCAoZSkgPT4gdGhpcy5fdXNlckFjdGl2aXR5ID0gdHJ1ZSk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdrZXl1cCcsIChlKSA9PiB0aGlzLl91c2VyQWN0aXZpdHkgPSB0cnVlKTtcblxuXHRcdC8vIFNlZSBodHRwOi8vZWpvaG4ub3JnL2Jsb2cvbGVhcm5pbmctZnJvbS10d2l0dGVyL1xuXHRcdGxldCBpbmFjdGl2aXR5VGltZW91dDtcblx0XHRjb25zdCBkZWxheSA9IHRoaXMub3B0aW9ucy5pbm5hY3Rpdml0eVRpbWVvdXQ7XG5cdFx0c2V0SW50ZXJ2YWwoKCkgPT4ge1xuXHRcdFx0aWYgKHRoaXMuX3VzZXJBY3Rpdml0eSkge1xuXG5cdFx0XHRcdC8vIFJlc2V0IHVzZXIgYWN0aXZ1dHkgdHJhY2tlclxuXHRcdFx0XHR0aGlzLl91c2VyQWN0aXZpdHkgPSBmYWxzZTtcblxuXHRcdFx0XHR0aGlzLnVzZXJBY3RpdmUgPSB0cnVlO1xuXG5cdFx0XHRcdGNsZWFyVGltZW91dChpbmFjdGl2aXR5VGltZW91dCk7XG5cblx0XHRcdFx0aWYgKGRlbGF5ID4gMCkge1xuXG5cdFx0XHRcdFx0aW5hY3Rpdml0eVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRcdGlmICghdGhpcy5fdXNlckFjdGl2aXR5KSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMudXNlckFjdGl2ZSA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0sIGRlbGF5KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sIDI1MClcblx0fVxuXG5cdC8qKlxuXHQgKiBTdG9wIHNob3dpbmcgc3Bpbm5lciBhbmQgY2xlYXIgZGVsYXkgb2Ygc2hvd2luZyBzcGlubmVyXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHQgKi9cblx0X3N0b3BXYXl0aW5nKCkge1xuXHRcdHRoaXMuX3dhaXRpbmdUaW1lb3V0cy5mb3JFYWNoKGl0ZW0gPT4gY2xlYXJUaW1lb3V0KGl0ZW0pKTtcblx0XHR0aGlzLl93YWl0aW5nVGltZW91dHMgPSBbXTtcblx0XHR0aGlzLnJlbW92ZUNsYXNzKCdsZXBsYXllci0td2FpdGluZycpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFNob3cgc3Bpbm5lciB3aXRoIGRlbGF5IGluIDMwMG1zXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHQgKi9cblx0X3N0YXJ0V2FpdGluZygpIHtcblx0XHR0aGlzLl93YWl0aW5nVGltZW91dHMucHVzaChzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdHRoaXMuYWRkQ2xhc3MoJ2xlcGxheWVyLS13YWl0aW5nJyk7XG5cdFx0fSwgMzAwKSk7XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBPbiBpbml0ZWQgcGxheWVyIGV2ZW50IGhhbmRsZXJcblx0ICpcblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqIEBwYXJhbSB7UGxheWVyRXZlbnR9IGVcblx0ICovXG5cdF9vbkluaXRlZChlKSB7XG5cdFx0dGhpcy5hZGRDbGFzcygnbGVwbGF5ZXItLWluaXRlZCcpO1xuXG5cdFx0dGhpcy5vcHRpb25zLm9uUGxheWVySW5pdGVkLmNhbGwodGhpcywgZSk7XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBPbiBjbGljayB2aWRlbyBldmVudCBoYW5kbGVyLiBGb2N1cyBvbiB2aWRlbyBhbmQgdG9nZ2xlUGxheVxuXHQgKlxuXHQgKiBAYWNjZXNzIHByaXZhdGVcblx0ICogQHBhcmFtIHtQbGF5ZXJFdmVudH0gZVxuXHQgKi9cblx0X29uQ2xpY2soZSkge1xuXHRcdGNsZWFyVGltZW91dCh0aGlzLl9kYmxjbGlja1RpbWVvdXQpO1xuXHRcdGNvbnN0IHRvZ2dsZVBsYXkgPSAoKSA9PiB7XG5cdFx0XHR0aGlzLl9kYmxjbGlja1RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0dGhpcy52aWRlby5lbGVtZW50LmZvY3VzKClcblx0XHRcdFx0dGhpcy50b2dnbGVQbGF5KCk7XG5cblx0XHRcdH0sIDMwMCk7XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogU2VlIExQTFItMjkwXG5cdFx0ICogT24gdG91Y2ggZGV2aWNlcyBpbiBmdWxsc2NyZWVuIGlmIHVzZXIgbm90IGFjdGl2ZSB3ZSBkb24ndCBzaG91bGQgdG9nZ2xlXG5cdFx0ICogQXQgZmlyc3Qgd2Ugc2hvdyBoaW0gYSBjb250cm9sc1xuXHRcdCAqL1xuXHRcdGlmKElTX1RPVUNIKCkgJiYgdGhpcy52aWV3ID09PSAnZnVsbHNjcmVlbicpIHtcblx0XHRcdGlmKHRoaXMucGxheWVyLnVzZXJBY3RpdmUpIHtcblx0XHRcdFx0dG9nZ2xlUGxheSgpXG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRvZ2dsZVBsYXkoKVxuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBPbiBkYmxjbGljayBvbiB0aGUgdmlkZW8gcGxheWVyIGV2ZW50IGhhbmRsZXJcblx0ICpcblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqIEBwYXJhbSB7UGxheWVyRXZlbnR9IGVcblx0ICovXG5cdF9vbkRiY2xpY2soZSkge1xuXHRcdGNsZWFyVGltZW91dCh0aGlzLl9kYmxjbGlja1RpbWVvdXQpO1xuXHRcdHRoaXMudG9nZ2xlRnVsbHNjcmVlbigpO1xuXHR9XG5cblx0LyoqXG5cdCAqIE9uIGZ1bGxzY3JlZW4gY2hhbmdlIHBsYXllciBldmVudCBoYW5kbGVyXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge1BsYXllckV2ZW50fSBlXG5cdCAqL1xuXHRfb25GdWxsc2NyZWVuQ2hhbmdlKGUsIGlzRnMpIHtcblx0XHRpZihpc0ZzKSB7XG5cdFx0XHR0aGlzLnZpZXcgPSAnZnVsbHNjcmVlbic7XG5cblx0XHRcdC8vIEhpZGUgc2VjdGlvbnMgYnkgZGVmYXVsdCBvbiBtb2JpbGUgZnVsbHNjcmVlblxuXHRcdFx0aWYoSVNfQU5EUk9JRCkge1xuXHRcdFx0XHR0aGlzLl9sYXN0U2VjdGlvbnNWYWx1ZSA9IHRoaXMuc2VjdGlvbnMudmlzaWJsZTtcblx0XHRcdFx0dGhpcy5zZWN0aW9ucy52aXNpYmxlID0gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuZm9jdXMoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy52aWV3ID0gJ2NvbW1vbic7XG5cblx0XHRcdGlmKElTX0FORFJPSUQpIHtcblx0XHRcdFx0dGhpcy5zZWN0aW9ucy52aXNpYmxlID0gdGhpcy5fbGFzdFNlY3Rpb25zVmFsdWU7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFBhdXNlIHZpZGVvIG9uIGV4aXQgZnVsbHNjcmVlZW4gb24gbW9iaWxlXG5cdFx0XHRpZihJU19BTkRST0lEX1BIT05FIHx8IElTX0lQSE9ORSB8fCBJU19JUE9EKSB7XG5cdFx0XHRcdHRoaXMucGF1c2UoKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBPbiBwbGF5IGV2ZW50IGhhbmRsZXJcblx0ICpcblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqIEBwYXJhbSB7UGxheWVyRXZlbnR9IGVcblx0ICovXG5cdF9vblBsYXkoKSB7XG5cdFx0dGhpcy5zcGxhc2hJY29uLnNob3coJ3BsYXknKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBPbiBwYXVzZSBwbGF5ZXIgZXZlbnQgaGFuZGxlclxuXHQgKiBTaG93IHBhdXNlIGljb24gaW4gdGhlIGNlbnRlciBvZiB2aWRlb1xuXHQgKlxuXHQgKiBAYWNjZXNzIHByaXZhdGVcblx0ICovXG5cdF9vblBhdXNlKCkge1xuXHRcdHRoaXMuc3BsYXNoSWNvbi5zaG93KCdwYXVzZScpO1xuXHR9XG5cblx0X29uRW50aXR5RnVsbHNjcmVuQ2hhbmdlKCkge1xuXHRcdGNvbnN0IGZzQXBpID0gRnVsbHNjcmVlbkFwaTtcblx0XHRjb25zdCBpc0ZzID0gISFkb2N1bWVudFtmc0FwaS5mdWxsc2NyZWVuRWxlbWVudF07XG5cdFx0dGhpcy50cmlnZ2VyKCdmdWxsc2NyZWVuY2hhbmdlJywgaXNGcyk7XG5cdH1cblxufVxuXG4vKipcbiAqIFN0YXRpYyBoZWxwZXIgZm9yIGNyZWF0aW5nIGEgcGx1Z2lucyBmb3IgbGVwbGF5ZXJcbiAqXG4gKiBAYWNjZXNzIHB1YmxpY1xuICogQHN0YXRpY1xuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgcGx1Z2luXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBQbHVnaW4gaW5pdCBmdW5jdGlvblxuICpcbiAqIEBleGFtcGxlXG4gKiBQbGF5ZXIucGx1Z2luKCdoZWxsb1dvcmxkJywgZnVuY3Rpb24ocGx1Z2luT3B0aW9ucykge1xuICogICAgY29uc3QgcGxheWVyID0gdGhpcztcbiAqICAgIHBsYXllci5vbignY2xpY2snLCAoKSA9PiBjb25zb2xlLmxvZygnSGVsbG8gd29ybGQnKSk7XG4gKiB9KVxuICpcbiAqL1xuUGxheWVyLnBsdWdpbiA9IGZ1bmN0aW9uKG5hbWUsIGZuKSB7XG5cdFBsYXllci5wcm90b3R5cGVbbmFtZV0gPSBmbjtcbn1cblxuLyoqXG4gKiBHZXQgYnkgbmFtZSByZWdpc3RlcmVkIGNvbXBvbmVudFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIC0gTmFtZSBvZiBjb21wb25lbnRcbiAqIEByZXR1cm4ge0NvbXBvbmVudH1cbiAqL1xuUGxheWVyLmdldENvbXBvbmVudCA9IENvbXBvbmVudC5nZXRDb21wb25lbnQ7XG5cbi8qKlxuICogUmVnaXN0ZXIgY29tcG9uZW50XG4gKlxuICogQGFjY2VzcyBwdWJsaWNcbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge0NvbXBvbmVudH0gY29tcG9uZW50XG4gKlxuICogQGV4YW1wbGVcbiAqIFBsYXllci5yZWdpc3RlckNvbXBvbmVudCgnRXJyb3JEaXNwbGF5JywgRXJyb3JEaXNwbGF5KTtcbiAqL1xuUGxheWVyLnJlZ2lzdGVyQ29tcG9uZW50ID0gQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50O1xuXG4vKipcbiAqIFJlZ2lzdGVyIGNvbnRyb2xcbiAqXG4gKiBAYWNjZXNzIHB1YmxpY1xuICogQHN0YXRpY1xuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7Q29udHJvbH0gY29udHJvbFxuICovXG5QbGF5ZXIuZ2V0Q29udHJvbCA9IENvbnRyb2wuZ2V0Q29udHJvbDtcblxuLyoqXG4gKiBHZXQgYnkgbmFtZSByZWdpc3RlcmVkIGNvbnRyb2xcbiAqXG4gKiBAYWNjZXNzIHB1YmxpY1xuICogQHN0YXRpY1xuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEByZXR1cm5zIHtDb250cm9sfVxuICpcbiAqIEBleGFtcGxlXG4gKiBQbGF5ZXIucmVnaXN0ZXJDb250cm9sKCdiYWNrd2FyZCcsIEJhY2t3YXJkQ29udHJvbCk7XG4gKi9cblBsYXllci5yZWdpc3RlckNvbnRyb2wgPSBDb250cm9sLnJlZ2lzdGVyQ29udHJvbDtcblxuXG4vKipcbiAqIENvbnZlcnQgc2Vjb25kcyB0byBmb3JtYXQgc3RyaW5nICdoaD86bW06c3MnXG4gKlxuICogQGFjY2VzcyBwdWJsaWNcbiAqIEBwYXJhbSB7TnVtYmVyfSBzZWNvbmRzIFNlY29uZHNcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gc2hvd0hvdXJzIGNvbnZlcnQgdG8gZm9ybWF0ICdoaDptbTpzcydcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cblBsYXllci5zZWNvbmRzVG9UaW1lID0gc2Vjb25kc1RvVGltZTtcblxuXG4vKipcbiAqIFN0YXRpYyBoZWxwZXIgZm9yIGNyZWF0aW5nIGEgcGx1Z2lucyBmb3IgbGVwbGF5ZXJcbiAqXG4gKiBAYWNjZXNzIHB1YmxpY1xuICogQHN0YXRpY1xuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgcGx1Z2luXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufE9iamVjdH0gZm4gUGx1Z2luIGluaXQgZnVuY3Rpb25cbiAqXG4gKiBAZXhhbXBsZVxuICogUGxheWVyLnByZXNldCgnY29tbW9uJywge1xuICogICAgIHdpZHRoIDogJzEwMCUnLFxuICogICAgIHBsdWdpbnMgOiB7XG4gKiAgICAgICAgIG1pbmlwbGF5ZXIgOiB0cnVlXG4gKiAgICAgfVxuICogfSk7XG4gKi9cblBsYXllci5wcmVzZXQgPSBmdW5jdGlvbihuYW1lLCBvYmopIHtcblx0aWYodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcpIHtcblx0XHRQbGF5ZXIuX3ByZXNldHNbbmFtZV0gPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0b3B0aW9ucyA6IHt9LFxuXHRcdFx0aW5pdE9wdGlvbnMgOiBub29wXG5cdFx0fSwgb2JqKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb2JqID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0UGxheWVyLl9wcmVzZXRzW25hbWVdID0gb2JqKCk7XG5cdH1cbn07XG5cblxuUGxheWVyLmdldFByZXNldCA9IGZ1bmN0aW9uKG5hbWUpIHtcblx0aWYoUGxheWVyLl9wcmVzZXRzW25hbWVdKSB7XG5cdFx0cmV0dXJuIFBsYXllci5fcHJlc2V0c1tuYW1lXTtcblx0fSBlbHNlIHtcblx0XHRjb25zb2xlLmVycm9yKGBwcmVzZXQgJHtuYW1lfSBkb2Vzbid0IGV4aXN0YCk7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cbn1cblxuXG5QbGF5ZXIuX3ByZXNldHMgPSB7fTtcblxuUGxheWVyLkNvb2tpZSA9IENvb2tpZTtcblxuUGxheWVyLl9sb2FkU1ZHU3ByaXRlID0gZnVuY3Rpb24oc3ZnKSB7XG5cdGNvbnN0IGhpZGRlbkVsZW1lbnQgPSAkKCc8ZGl2Lz4nKS5oaWRlKCk7XG5cdCQoJ2JvZHknKS5wcmVwZW5kKGhpZGRlbkVsZW1lbnQuYXBwZW5kKHN2ZykpO1xuXHRyZXR1cm4gaGlkZGVuRWxlbWVudDtcbn1cblxuUGxheWVyLmRlZmF1bHRTcHJpdGUgPSByZXF1aXJlKCcuLi8uLi9kaXN0L3N2Zy9zdmctZGVmcy5zdmcnKTtcblxuLyogZ2xvYmFsIFZFUlNJT04gKi9cblBsYXllci52ZXJzaW9uID0gVkVSU0lPTjtcblxud2luZG93LiQuZm4ubGVQbGF5ZXIgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXHRyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gbmV3IFBsYXllcigkKHRoaXMpLCBvcHRpb25zKTtcblx0fSk7XG59O1xuXG53aW5kb3cuJC5sZVBsYXllciA9IFBsYXllcjtcblxud2luZG93LmxlUGxheWVyID0gUGxheWVyO1xuXG5cbi8qKlxuICogTWluaSBQbGF5ZXIgcGx1Z2luXG4gKlxuICogQHBsdWdpblxuICovXG5QbGF5ZXIucGx1Z2luKCdtaW5pcGxheWVyJywgZnVuY3Rpb24ocGx1Z2luT3B0aW9ucykge1xuXHRjb25zdCBwbGF5ZXIgPSB0aGlzO1xuXG5cdC8vINCc0LXRgNC20LjQvCDRgSB0aGlzLm9wdGlvbnMubWluaXBsYXllciwg0YfRgtC+0LHRiyDQvdC1INGB0LvQvtC80LDRgtGMINC+0LHRgNCw0YLQvdGD0Y4g0YHQvtCy0LzQtdGB0YLQuNC80L7RgdGMLCDRgtCw0Log0LrQsNC6INGA0LDQvdGM0YjQtVxuXHQvLyDQvNC40L3QuNC/0LvQtdC10YAg0L3QtSDQsdGL0Lsg0L/Qu9Cw0LPQuNC90L7QvCDQv9C70LXQtdGA0LAuXG5cdGNvbnN0IG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdHdpZHRoIDogJzEwMCUnLFxuXHRcdG9mZnNldFNob3cgOiAocGxheWVyKSA9PiB7XG5cdFx0XHRjb25zdCBvZmZzZXQgPSBwbGF5ZXIuZWxlbWVudC5vZmZzZXQoKS50b3Bcblx0XHRcdFx0KyBwbGF5ZXIuZWxlbWVudC5vdXRlckhlaWdodCgpXG5cdFx0XHRcdC0gcGxheWVyLmdldENvbnRyb2xzKCdjb21tb24nKS5lbGVtZW50LmhlaWdodCgpO1xuXG5cdFx0XHRyZXR1cm4gb2Zmc2V0O1xuXHRcdH1cblx0fSwgdGhpcy5vcHRpb25zLm1pbmlwbGF5ZXIsIHBsdWdpbk9wdGlvbnMpO1xuXG5cdGNvbnN0IGNvbnRyb2xzID0gbmV3IENvbnRyb2xDb2xsZWN0aW9uKHRoaXMsIHtcblx0XHRuYW1lIDogJ21pbmknLFxuXHRcdGNvbnRyb2xzIDogb3B0aW9ucy5jb250cm9scyxcblx0XHRjb250cm9sT3B0aW9ucyA6IHtcblx0XHRcdGNvbnRyb2wgOiB7XG5cdFx0XHRcdGRpc2FibGUgOiBmYWxzZVxuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG5cblx0Ly8g0JLRgdGC0LDQstC70Y/QtdC8INCyIGluZm9FbGVtZW50INC/0L7QtCB0aXRsZSDQuCBkZXNjcmlwdGlvblxuXHR0aGlzLmluZm9FbGVtZW50LmFwcGVuZChjb250cm9scy5lbGVtZW50KTtcblxuXHQvKipcblx0ICogUmV0dXJuIG9mZnNldCBvbiBvWSAsIHdoZW4gbWluaXBsYXllciBzaG91bGQgc2hvd2luZyBvciBoaWRpbmdcblx0ICpcblx0ICogQHJldHVybnMge051bWJlcn1cblx0ICovXG5cdGNvbnN0IG9mZnNldFNob3cgPSAoKSA9PiB7XG5cdFx0aWYgKCQuaXNGdW5jdGlvbihvcHRpb25zLm9mZnNldFNob3cpKSB7XG5cdFx0XHRyZXR1cm4gb3B0aW9ucy5vZmZzZXRTaG93KHBsYXllcik7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG9wdGlvbnMub2Zmc2V0U2hvd1xuXHR9XG5cblx0Y29uc3QgZ2V0V2lkdGggPSAoKSA9PiB7XG5cdFx0cmV0dXJuIG9wdGlvbnMud2lkdGggfHwgdGhpcy5lbGVtZW50LndpZHRoKCk7XG5cdH1cblxuXG5cdHRoaXMuX3VwZGF0ZU1pbmlQbGF5ZXIgPSAoZSwgZm9yY2UpID0+IHtcblx0XHRjb25zdCBzY3JvbGxUb3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG5cblx0XHQvLyBCZWNhdXNlIGluIGZvcmNlIHVwZGF0ZSwgZm9yIG5vcm1hbGx5IGNvdW50IGhlaWdodCBhbmQgcGFkZGluZ1xuXHRcdC8vIG1pbmlwbGF5ZXIgYmVmb3JlIHRoZSBzaG93IG11c3QgZmlyc3QgYmUgaGlkZGVuXG5cdFx0aWYoZm9yY2UpIHtcblx0XHRcdHRoaXMuaGlkZU1pbmlQbGF5ZXIoZm9yY2UpO1xuXHRcdH1cblxuXHRcdGlmKHNjcm9sbFRvcCA+IG9mZnNldFNob3coKSkge1xuXHRcdFx0dGhpcy5zaG93TWluaVBsYXllcihmb3JjZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuaGlkZU1pbmlQbGF5ZXIoKTtcblx0XHR9XG5cdH1cblxuXHR0aGlzLnNob3dNaW5pUGxheWVyID0gKGZvcmNlKSA9PiB7XG5cdFx0aWYgKCFmb3JjZSAmJiB0aGlzLnZpZXcgPT09ICdtaW5pJykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIEFkZGVkIGVtcHR5IHNwYWNlXG5cdFx0dGhpcy5lbGVtZW50LmNzcygncGFkZGluZy10b3AnLCB0aGlzLnZpZGVvQ29udGFpbmVyLmhlaWdodCgpKTtcblxuXHRcdHRoaXMudmlldyA9J21pbmknO1xuXHR9XG5cblx0dGhpcy5oaWRlTWluaVBsYXllciA9IChmb3JjZSkgPT4ge1xuXHRcdGlmKCFmb3JjZSAmJiB0aGlzLnZpZXcgIT09ICdtaW5pJykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0aGlzLnZpZXcgPSAnY29tbW9uJztcblx0fVxuXG5cdCQod2luZG93KS5vbignc2Nyb2xsJywgdGhpcy5fdXBkYXRlTWluaVBsYXllci5iaW5kKHRoaXMpKTtcblx0JCh3aW5kb3cpLm9uKCdyZXNpemUnLCB0aGlzLl91cGRhdGVNaW5pUGxheWVyLmJpbmQodGhpcykpO1xuXHR0aGlzLm9uKCdpbml0ZWQnLCAoZSkgPT4gdGhpcy5fdXBkYXRlTWluaVBsYXllcihlLCB0cnVlKSk7XG5cblx0dGhpcy5vblNldFZpZXcoJ21pbmknLCAoKSA9PiB7XG5cdFx0dGhpcy5pbm5lckVsZW1lbnQuY3NzKCdtYXgtd2lkdGgnLCBnZXRXaWR0aCgpKTtcblx0XHR0aGlzLmlubmVyRWxlbWVudC5jc3MoJ2hlaWdodCcsIHRoaXMudmlkZW8uaGVpZ2h0KTtcblx0fSk7XG5cblx0dGhpcy5vbkRlbFZpZXcoJ21pbmknLCAoKSA9PiB7XG5cdFx0dGhpcy5pbm5lckVsZW1lbnQuY3NzKCdtYXgtd2lkdGgnLCAnJylcblx0XHR0aGlzLmlubmVyRWxlbWVudC5jc3MoJ2hlaWdodCcsICcnKVxuXG5cdFx0dGhpcy5lbGVtZW50LmNzcygncGFkZGluZy10b3AnLCAnJyk7XG5cdH0pO1xuXG5cblx0dGhpcy5fdXBkYXRlTWluaVBsYXllcigpO1xufSk7XG5cblxuUGxheWVyLnByZXNldCgndnBzJywgcmVxdWlyZSgnLi9wcmVzZXRzL3Zwcy5qcycpLnByZXNldCk7XG5QbGF5ZXIucHJlc2V0KCdzaW1wbGUnLCByZXF1aXJlKCcuL3ByZXNldHMvc2ltcGxlLmpzJykucHJlc2V0KTtcblBsYXllci5wcmVzZXQoJ3NtcycsIHJlcXVpcmUoJy4vcHJlc2V0cy9zbXMuanMnKS5wcmVzZXQpO1xuUGxheWVyLnByZXNldCgnY29tcHJlc3NlZCcsIHJlcXVpcmUoJy4vcHJlc2V0cy9jb21wcmVzc2VkLmpzJykucHJlc2V0KTtcblBsYXllci5wcmVzZXQoJzIwMzUnLCByZXF1aXJlKCcuL3ByZXNldHMvMjAzNS5qcycpLnByZXNldCk7XG5cbm1vZHVsZS5leHBvcnRzID0gUGxheWVyXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2xlLXBsYXllci5qcyIsIm1vZHVsZS5leHBvcnRzID0gJDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIiRcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgQ29udHJvbC5qc1xuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCBJY29uIGZyb20gJy4vSWNvbic7XG5cbi8qKlxuICogQGNsYXNzIENvbnRyb2xcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gQ29udHJvbCdzIG9wdGlvbnNcbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5pY29uTmFtZV0gTmFtZSBvZiBjb250cm9sJ3MgaWNvbi4gSWYgZW1wdHksIGNvbnRyb2wgd2lsbCBub3QgaGF2ZSBhIGljb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5jbGFzc05hbWVdXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMubmFtZV1cbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5jb2xsZWN0aW9uXVxuICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLnRpdGxlXSBDb250b3JsJ3MgdG9vbHRpcCwgdGl0bGUgYXR0clxuICogQHBhcmFtIHtGdW5jdGlvbn0gW29wdGlvbnMub25DbGlja10gT24gY2xpY2sgZXZlbnQgaGFuZGxlclxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5kaXNhYmxlPWZhbHNlXVxuICogQHByb3BlcnR5IHtJY29ufSBpY29uIEljb24gaW4gY29udHJvbCwgaWYgaXQgaXMgZXhpc3RcbiAqIEBleHRlbmRzIENvbXBvbmVudFxuICovXG5jbGFzcyBDb250cm9sIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXHRcdHRoaXMuZW1pdFRhcEV2ZW50cygpO1xuXHRcdHRoaXMuZGlzYWJsZSA9IHRoaXMub3B0aW9ucy5kaXNhYmxlICE9IG51bGw/IHRoaXMub3B0aW9ucy5kaXNhYmxlIDogdHJ1ZTtcblxuXHRcdHRoaXMucGxheWVyLm9uKCdpbml0ZWQnLCAoZSkgPT4ge1xuXHRcdFx0dGhpcy5kaXNhYmxlID0gdGhpcy5vcHRpb25zLmRpc2FibGUgIT0gbnVsbD8gdGhpcy5vcHRpb25zLmRpc2FibGUgOiBmYWxzZTtcblx0XHR9KVxuXG5cdFx0dGhpcy5lbGVtZW50Lm9uKHtcblx0XHRcdGNsaWNrIDogdGhpcy5vbkNsaWNrLmJpbmQodGhpcyksXG5cdFx0XHR0YXAgOiB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKSxcblx0XHR9KTtcblxuXHRcdHRoaXMucGxheWVyLm9uKCdpbml0ZWQnLCB0aGlzLm9uUGxheWVySW5pdGVkLmJpbmQodGhpcykpXG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdGlmICh0aGlzLm9wdGlvbnMuaWNvbk5hbWUpIHtcblx0XHRcdHRoaXMuaWNvbiA9IG5ldyBJY29uKHRoaXMucGxheWVyLCB7XG5cdFx0XHRcdGljb25OYW1lIDogdGhpcy5vcHRpb25zLmljb25OYW1lXG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0bGV0IGF0dHJzID0ge1xuXHRcdFx0dGl0bGUgOiB0aGlzLm9wdGlvbnMudGl0bGVcblx0XHR9XG5cdFx0dGhpcy5lbGVtZW50ID0gJChgPCR7dGhpcy5vcHRpb25zLnRhZyB8fCAnYnV0dG9uJ30gLz5gKVxuXHRcdFx0LmFkZENsYXNzKHRoaXMuYnVpbGRDU1NDbGFzcygpKVxuXHRcdFx0LmFwcGVuZCh0aGlzLmljb24gJiYgdGhpcy5pY29uLmVsZW1lbnQpXG5cdFx0XHQuYXR0cihhdHRycyk7XG5cblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50O1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0YnVpbGRDU1NDbGFzcygpIHtcblx0XHRsZXQgcmVzdWx0ID0gYGNvbnRyb2wgJHt0aGlzLm9wdGlvbnMuY2xhc3NOYW1lfSAke3N1cGVyLmJ1aWxkQ1NTQ2xhc3MoKX1gO1xuXHRcdC8qKlxuXHRcdCAqIEBzZWUgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjM4ODUyNTUvaG93LXRvLXJlbW92ZS1pZ25vcmUtaG92ZXItY3NzLXN0eWxlLW9uLXRvdWNoLWRldmljZXNcblx0XHQgKiBXZSBzaG91bGQgaWdub3JlIGhvdmVyIGVmZmV0Y3Mgb24gaXBob25lLCBiZWNhdXNlIHdlIHNob3cgaG92ZXIgZWZmZWN0IG9uIHRhcFxuXHRcdCAqL1xuXHRcdGlmKCF0aGlzLnBsYXllci5oYXNDbGFzcygnbGVwbGF5ZXItLWlwaG9uZScpKSB7XG5cdFx0XHRyZXN1bHQgKz0gJyBjb250cm9sLS1uby1pcGhvbmUnO1xuXHRcdH1cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0c2V0IHRhcCh2YWx1ZSkge1xuXHRcdHRoaXMudG9nZ2xlQ2xhc3MoJ2NvbnRyb2wtLXRhcCcsIHZhbHVlKTtcblx0fVxuXG5cdHNldCBkaXNhYmxlKHZhbHVlKSB7XG5cdFx0dGhpcy5fZGlzYWJsZSA9IHZhbHVlO1xuXHRcdHRoaXMudG9nZ2xlQ2xhc3MoJ2Rpc2FibGVkJywgdmFsdWUpO1xuXHR9XG5cblx0Z2V0IGRpc2FibGUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2Rpc2FibGVcblx0fVxuXG5cdC8qKlxuXHQgKlxuXHQgKiBPbiBjbGljayBldmVudCBoYW5kbGVyXG5cdCAqIEBhYnN0YWN0XG5cdCAqL1xuXHRvbkNsaWNrIChlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGlmICh0aGlzLmRpc2FibGUpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0dGhpcy5wbGF5ZXIudHJpZ2dlcignY29udHJvbGNsaWNrJywgeyBjb250cm9sIDogdGhpcyB9KTtcblxuXHRcdGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdHRoaXMub3B0aW9ucy5vbkNsaWNrLmNhbGwodGhpcywgYXJndW1lbnRzKTtcblx0XHR9XG5cdH1cblxuXG5cdG9uUGxheWVySW5pdGVkIChlLCBkYXRhKSB7XG5cblx0fVxuXG5cdHN0YXRpYyByZWdpc3RlckNvbnRyb2wobmFtZSwgY29udHJvbCkge1xuXHRcdGlmKG5hbWUgPT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmKENvbnRyb2wuX2NvbnRyb2xzID09IG51bGwpIHtcblx0XHRcdENvbnRyb2wuX2NvbnRyb2xzID0ge307XG5cdFx0fVxuXG5cdFx0Q29udHJvbC5fY29udHJvbHNbbmFtZV0gPSBjb250cm9sO1xuXG5cdFx0cmV0dXJuIGNvbnRyb2w7XG5cdH1cblxuXHRzdGF0aWMgZ2V0Q29udHJvbChuYW1lKSB7XG5cdFx0aWYobmFtZSA9PSBudWxsKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYoQ29udHJvbC5fY29udHJvbHMgJiYgQ29udHJvbC5fY29udHJvbHNbbmFtZV0pIHtcblx0XHRcdHJldHVybiBDb250cm9sLl9jb250cm9sc1tuYW1lXTtcblx0XHR9XG5cdH1cblxuXHRzdGF0aWMgY3JlYXRlKHBsYXllciwgbmFtZSwgb3B0aW9ucykge1xuXHRcdHZhciBjb250cm9sQ2xhc3MgPSB0aGlzLmdldENvbnRyb2wobmFtZSk7XG5cdFx0aWYoY29udHJvbENsYXNzID09IG51bGwpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoYENvbnRyb2wgJHtuYW1lfSBkb2Vzbid0IGV4aXN0YCk7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHRyZXR1cm4gbmV3IGNvbnRyb2xDbGFzcyhwbGF5ZXIsIG9wdGlvbnMpO1xuXHR9XG5cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdDb250cm9sJywgQ29udHJvbCk7XG5Db250cm9sLnJlZ2lzdGVyQ29udHJvbCgnY29udHJvbCcsIENvbnRyb2wpO1xuZXhwb3J0IGRlZmF1bHQgQ29udHJvbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL0NvbnRyb2wuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIENvbXBvbmVudC5qc1xuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbmNvbnN0IHRvUGxheWVyRXZlbnQgPSAoZXZlbnRzKSA9PiBldmVudHMuc3BsaXQoJyAnKS5yZWR1Y2UoKGFjYywgZSkgPT4gYWNjICsgYGxlcGxheWVyXyR7ZX0gYCwgJycpO1xuXG4vKipcbiAqIFBsYXllciBjb21wb25lbnQgLSBCYXNlIGNsYXNzIGZvciBhbGwgVUlcbiAqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIE9wdGlvbnMgb2YgY29tcG9uZW50XG4gKiBAcGFyYW0ge2pRdWVyeX0gW29wdGlvbnMuZWxlbWVudF0g0K3Qu9C10LzQtdC90YIg0L3QsCDQutC+0YLQvtGA0L7QvCDQvNC+0LbQvdC+INC40L3QuNGG0LjQu9C40LfQvtCy0LDRgtGMINC60LvQsNGB0YEuXG4gKiBAcHJvcGVydHkge09iamVjdH0gb3B0aW9uc1xuICogQHByb3BlcnR5IHtqUXVlcnl9IGVsZW1lbnRcbiAqIEBjbGFzcyBDb21wb25lbnRcbiAqL1xuY2xhc3MgQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcblx0XHRvcHRpb25zID0gdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIHtcblx0XHRcdGNyZWF0ZUVsZW1lbnQgOiB0cnVlXG5cdFx0fSwgdGhpcy5vcHRpb25zLCBvcHRpb25zKTtcblxuXHRcdGlmKCFwbGF5ZXIgJiYgdGhpcy5wbGF5ICE9IG51bGwpIHtcblx0XHRcdHRoaXMucGxheWVyID0gcGxheWVyID0gdGhpcztcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XG5cdFx0fVxuXG5cdFx0aWYob3B0aW9ucy5jcmVhdGVFbGVtZW50KSB7XG5cblx0XHRcdGlmIChvcHRpb25zLmVsZW1lbnQpIHtcblx0XHRcdFx0dGhpcy5lbGVtZW50ID0gb3B0aW9ucy5lbGVtZW50O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5jcmVhdGVFbGVtZW50KCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0aGlzLmVsZW1lbnQubGVuZ3RoICE9PSAxKSB7XG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoYENvbXBvbmVudC5wcm90b3R5cGUuZWxlbWVudC5sZW5ndGggbXVzdCBlcXVhbCAxLCBub3QgJHt0aGlzLmVsZW1lbnQubGVuZ3RofVxcbmAsIHRoaXMuZWxlbWVudCk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuZWxlbWVudFswXS5fX25vZGUgPSB0aGlzO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBAYWJzdHJhY3Rcblx0ICovXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHQvKipcblx0ICogQGFic3RyYWN0XG5cdCAqL1xuXHRidWlsZENTU0NsYXNzKCkge1xuXHRcdHJldHVybiAnJ1xuXHR9XG5cblxuXHQvKipcblx0ICogU2V0IHRoZSBmb2N1cyB0byB0aGlzIGNvbXBvbmVudFxuXHQgKi9cblx0Zm9jdXMoKSB7XG5cdFx0dGhpcy5lbGVtZW50LmZvY3VzKCk7XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBSZW1vdmUgdGhlIGZvY3VzIGZyb20gdGhpcyBjb21wb25lbnRcblx0ICovXG5cdGJsdXIoKSB7XG5cdFx0dGhpcy5lbGVtZW50LmJsdXIoKTtcblx0fVxuXG5cblx0LyoqXG5cdCAqIEVtaXQgYSBwbGF5ZXIgZXZlbnQgKHRoZSBuYW1lIG9mIGV2ZW50IHdvdWxkIGJlIGEgbGVwbGF5ZXJfc210aClcblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50TmFtZVxuXHQgKiBAcGFyYW0ge0FyZ3VtZW50c30gLi4uYXJncyBqUXVlcnkuZm4ub24gb3RoZXIgYXJndW1lbnRzXG5cdCAqIEByZXR1cm5zIHtQbGF5ZXJ9IHRoaXNcblx0ICovXG5cdHRyaWdnZXIoZXZlbnROYW1lLCAuLi5hcmdzKSB7XG5cdFx0Y29uc3QgZXZlbnQgPSAkLkV2ZW50KGBsZXBsYXllcl8ke2V2ZW50TmFtZX1gLCB7IHBsYXllciA6IHRoaXMucGxheWVyIH0pO1xuXHRcdHRoaXMuZWxlbWVudC50cmlnZ2VySGFuZGxlcihldmVudCwgLi4uYXJncyk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBMaXN0ZW4gYSBwbGF5ZXIgZXZlbnQgd2l0aCBsZXBsYXllcl8gc3VmZml4XG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBldmVudE5hbWVcblx0ICogQHBhcmFtIHtBcmd1bWVudHN9IC4uLmFyZ3MgalF1ZXJ5LmZuLm9uIG90aGVyIGFyZ3VtZW50c1xuXHQgKiBAcmV0dXJucyB7UGxheWVyfSB0aGlzXG5cdCAqL1xuXHRvbihldmVudE5hbWVzLCAuLi5hcmdzKSB7XG5cdFx0aWYodHlwZW9mIGV2ZW50TmFtZXMgPT09ICdzdHJpbmcnIHx8IGV2ZW50TmFtZXMgaW5zdGFuY2VvZiBTdHJpbmcpIHtcblx0XHRcdHRoaXMuZWxlbWVudC5vbih0b1BsYXllckV2ZW50KGV2ZW50TmFtZXMpLCAuLi5hcmdzKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc29sZS53YXJuKCdGaXJzdCBhcmd1bWVudCBvZiBcXCdDb21wb25lbnQub25cXCcgc2hvdWxkIGJlIGEgc3RyaW5nJyk7XG5cdFx0XHR0aGlzLmVsZW1lbnQub24oZXZlbnROYW1lcywgLi4uYXJncyk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblxuXHRvbmUoZXZlbnROYW1lcywgLi4uYXJncykge1xuXHRcdGlmKHR5cGVvZiBldmVudE5hbWVzID09PSAnc3RyaW5nJyB8fCBldmVudE5hbWVzIGluc3RhbmNlb2YgU3RyaW5nKSB7XG5cdFx0XHR0aGlzLmVsZW1lbnQub25lKHRvUGxheWVyRXZlbnQoZXZlbnROYW1lcyksIC4uLmFyZ3MpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zb2xlLndhcm4oJ0ZpcnN0IGFyZ3VtZW50IG9mIFxcJ0NvbXBvbmVudC5vbmVcXCcgc2hvdWxkIGJlIGEgc3RyaW5nJyk7XG5cdFx0XHR0aGlzLmVsZW1lbnQub25lKGV2ZW50TmFtZXMsIC4uLmFyZ3MpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cblx0LyoqXG5cdCAqIEFkZCB0aGUgQ1NTIGNsYXNzIGZvciBnZW5lcmFsIGxlcGxheWVyIERPTSBlbGVtZW50XG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWUgTmFtZSBvZiBjbGFzcyAobm90IGEgc2VsZWN0b3IsIGl0J3MgbWVhbiwgdGhhdCBzdHJpbmcgc291bGQgYmUgd2l0aG91dCBwb2ludCBhdCB0aGUgc3RhcnQpXG5cdCAqIEByZXR1cm5zIHtQbGF5ZXJ9IHRoaXNcblx0ICovXG5cdGFkZENsYXNzKGNsYXNzTmFtZSkge1xuXHRcdHRoaXMuZWxlbWVudC5hZGRDbGFzcyhjbGFzc05hbWUpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlbW92ZSB0aGUgQ1NTIGNsYXNzIGZyb20gZ2VuZXJhbCBsZXBsYXllciBET00gZWxlbWVudFxuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIE5hbWUgb2YgY2xhc3Ncblx0ICogQHJldHVybnMge1BsYXllcn0gdGhpc1xuXHQgKi9cblx0cmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7XG5cdFx0dGhpcy5lbGVtZW50LnJlbW92ZUNsYXNzKGNsYXNzTmFtZSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvKipcblx0ICogVG9nZ2xlIHRoZSBDU1MgY2xhc3MgZnJvbSBnZW5lcmFsIGxlcGxheWVyIERPTSBlbGVtZW50XG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWVcblx0ICogQHBhcmFtIHtCb29sZWFufSBmbGFnXG5cdCAqIEByZXR1cm5zIHtQbGF5ZXJ9IHRoaXNcblx0ICovXG5cdHRvZ2dsZUNsYXNzKGNsYXNzTmFtZSwgZmxhZykge1xuXHRcdHRoaXMuZWxlbWVudC50b2dnbGVDbGFzcyhjbGFzc05hbWUsIGZsYWcpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0aGFzQ2xhc3MoY2xhc3NOYW1lKSB7XG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudC5oYXNDbGFzcyhjbGFzc05hbWUpO1xuXHR9XG5cblxuXHRzdGF0aWMgcmVnaXN0ZXJDb21wb25lbnQobmFtZSwgY29tcG9uZW50KSB7XG5cdFx0aWYobmFtZSA9PSBudWxsKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYoQ29tcG9uZW50Ll9jb21wb25lbnRzID09IG51bGwpIHtcblx0XHRcdENvbXBvbmVudC5fY29tcG9uZW50cyA9IHt9O1xuXHRcdH1cblxuXHRcdENvbXBvbmVudC5fY29tcG9uZW50c1tuYW1lXSA9IGNvbXBvbmVudDtcblxuXHRcdHJldHVybiBjb21wb25lbnQ7XG5cdH1cblxuXHRzdGF0aWMgZ2V0Q29tcG9uZW50KG5hbWUpIHtcblx0XHRpZihuYW1lID09IG51bGwpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZihDb21wb25lbnQuX2NvbXBvbmVudHMgJiYgQ29tcG9uZW50Ll9jb21wb25lbnRzW25hbWVdKSB7XG5cdFx0XHRyZXR1cm4gQ29tcG9uZW50Ll9jb21wb25lbnRzW25hbWVdO1xuXHRcdH1cblxuXHR9XG5cblx0c2V0IHRhcCh2YWx1ZSkge31cblxuXHRlbWl0VGFwRXZlbnRzKGVsZW1lbnQ9bnVsbCkge1xuXHRcdGlmKGVsZW1lbnQgPT0gbnVsbCkge1xuXHRcdFx0ZWxlbWVudCA9IHRoaXMuZWxlbWVudDtcblx0XHR9XG5cdFx0Ly8gVHJhY2sgdGhlIHN0YXJ0IHRpbWUgc28gd2UgY2FuIGRldGVybWluZSBob3cgbG9uZyB0aGUgdG91Y2ggbGFzdGVkXG5cdFx0bGV0IHRvdWNoU3RhcnQgPSAwO1xuXHRcdGxldCBmaXJzdFRvdWNoID0gbnVsbDtcblx0XHRsZXQgbGFzdE1vdmVUb3VjaCA9IG51bGw7XG5cblx0XHQvLyBNYXhpbXVtIG1vdmVtZW50IGFsbG93ZWQgZHVyaW5nIGEgdG91Y2ggZXZlbnQgdG8gc3RpbGwgYmUgY29uc2lkZXJlZCBhIHRhcFxuXHRcdC8vIE90aGVyIHBvcHVsYXIgbGlicyB1c2UgYW55d2hlcmUgZnJvbSAyIChoYW1tZXIuanMpIHRvIDE1LFxuXHRcdC8vIHNvIDEwIHNlZW1zIGxpa2UgYSBuaWNlLCByb3VuZCBudW1iZXIuXG5cdFx0Y29uc3QgdGFwTW92ZW1lbnRUaHJlc2hvbGQgPSAxMDtcblxuXHRcdC8vIFRoZSBtYXhpbXVtIGxlbmd0aCBhIHRvdWNoIGNhbiBiZSB3aGlsZSBzdGlsbCBiZWluZyBjb25zaWRlcmVkIGEgdGFwXG5cdFx0Y29uc3QgdG91Y2hUaW1lVGhyZXNob2xkID0gMjAwO1xuXG5cdFx0bGV0IGNvdWxkQmVUYXA7XG5cblx0XHQvLyBzZWUgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTc5NTc1OTMvaG93LXRvLWNhcHR1cmUtdG91Y2hlbmQtY29vcmRpbmF0ZXNcblxuXHRcdGVsZW1lbnQub24oJ3RvdWNoc3RhcnQnLCAoZXZlbnQpID0+IHtcblx0XHRcdC8vIElmIG1vcmUgdGhhbiBvbmUgZmluZ2VyLCBkb24ndCBjb25zaWRlciB0cmVhdGluZyB0aGlzIGFzIGEgY2xpY2tcblx0XHRcdGlmIChldmVudC50b3VjaGVzLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0XHQvLyBDb3B5IHBhZ2VYL3BhZ2VZIGZyb20gdGhlIG9iamVjdFxuXHRcdFx0XHRmaXJzdFRvdWNoID0gbGFzdE1vdmVUb3VjaCA9IHtcblx0XHRcdFx0XHRwYWdlWCA6IGV2ZW50LnRvdWNoZXNbMF0ucGFnZVgsXG5cdFx0XHRcdFx0cGFnZVkgOiBldmVudC50b3VjaGVzWzBdLnBhZ2VZXG5cdFx0XHRcdH07XG5cdFx0XHRcdC8vIFJlY29yZCBzdGFydCB0aW1lIHNvIHdlIGNhbiBkZXRlY3QgYSB0YXAgdnMuIFwidG91Y2ggYW5kIGhvbGRcIlxuXHRcdFx0XHR0b3VjaFN0YXJ0ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cdFx0XHRcdC8vIFJlc2V0IGNvdWxkQmVUYXAgdHJhY2tpbmdcblx0XHRcdFx0Y291bGRCZVRhcCA9IHRydWU7XG5cdFx0XHRcdHRoaXMudGFwID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdGVsZW1lbnQub24oJ3RvdWNobW92ZScsIChldmVudCkgPT4ge1xuXHRcdFx0Ly8gSWYgbW9yZSB0aGFuIG9uZSBmaW5nZXIsIGRvbid0IGNvbnNpZGVyIHRyZWF0aW5nIHRoaXMgYXMgYSBjbGlja1xuXHRcdFx0aWYgKGV2ZW50LnRvdWNoZXMubGVuZ3RoID4gMSkge1xuXHRcdFx0XHRjb3VsZEJlVGFwID0gZmFsc2U7XG5cdFx0XHR9IGVsc2UgaWYgKGZpcnN0VG91Y2gpIHtcblx0XHRcdC8vIFNvbWUgZGV2aWNlcyB3aWxsIHRocm93IHRvdWNobW92ZXMgZm9yIGFsbCBidXQgdGhlIHNsaWdodGVzdCBvZiB0YXBzLlxuXHRcdFx0Ly8gU28sIGlmIHdlIG1vdmVkIG9ubHkgYSBzbWFsbCBkaXN0YW5jZSwgdGhpcyBjb3VsZCBzdGlsbCBiZSBhIHRhcFxuXHRcdFx0XHRjb25zdCB4ZGlmZiA9IGV2ZW50LnRvdWNoZXNbMF0ucGFnZVggLSBmaXJzdFRvdWNoLnBhZ2VYO1xuXHRcdFx0XHRjb25zdCB5ZGlmZiA9IGV2ZW50LnRvdWNoZXNbMF0ucGFnZVkgLSBmaXJzdFRvdWNoLnBhZ2VZO1xuXHRcdFx0XHRjb25zdCB0b3VjaERpc3RhbmNlID0gTWF0aC5zcXJ0KHhkaWZmICogeGRpZmYgKyB5ZGlmZiAqIHlkaWZmKTtcblxuXHRcdFx0XHRpZiAoZXZlbnQudG91Y2hlcy5sZW5ndGggPT09IDEpIHtcblx0XHRcdFx0XHRsYXN0TW92ZVRvdWNoID0ge1xuXHRcdFx0XHRcdFx0cGFnZVggOiBldmVudC50b3VjaGVzWzBdLnBhZ2VYLFxuXHRcdFx0XHRcdFx0cGFnZVkgOiBldmVudC50b3VjaGVzWzBdLnBhZ2VZXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICh0b3VjaERpc3RhbmNlID4gdGFwTW92ZW1lbnRUaHJlc2hvbGQpIHtcblx0XHRcdFx0XHRjb3VsZEJlVGFwID0gZmFsc2U7XG5cdFx0XHRcdFx0dGhpcy50YXAgPSBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0Y29uc3Qgbm9UYXAgPSAoKSA9PiB7XG5cdFx0XHRjb3VsZEJlVGFwID0gZmFsc2U7XG5cdFx0XHR0aGlzLnRhcCA9IGZhbHNlO1xuXHRcdH07XG5cblx0XHQvLyBUT0RPOiBMaXN0ZW4gdG8gdGhlIG9yaWdpbmFsIHRhcmdldC4gaHR0cDovL3lvdXR1LmJlL0R1amZwWE9LVXA4P3Q9MTNtOHNcblx0XHRlbGVtZW50Lm9uKCd0b3VjaGxlYXZlJywgbm9UYXApO1xuXHRcdGVsZW1lbnQub24oJ3RvdWNoY2FuY2VsJywgbm9UYXApO1xuXG5cdFx0Ly8gV2hlbiB0aGUgdG91Y2ggZW5kcywgbWVhc3VyZSBob3cgbG9uZyBpdCB0b29rIGFuZCB0cmlnZ2VyIHRoZSBhcHByb3ByaWF0ZVxuXHRcdC8vIGV2ZW50XG5cdFx0ZWxlbWVudC5vbigndG91Y2hlbmQnLCAoZXZlbnQpID0+IHtcblx0XHRcdGZpcnN0VG91Y2ggPSBudWxsO1xuXHRcdFx0dGhpcy50YXAgPSBmYWxzZTtcblx0XHRcdC8vIFByb2NlZWQgb25seSBpZiB0aGUgdG91Y2htb3ZlL2xlYXZlL2NhbmNlbCBldmVudCBkaWRuJ3QgaGFwcGVuXG5cdFx0XHRpZiAoY291bGRCZVRhcCA9PT0gdHJ1ZSkge1xuXHRcdFx0Ly8gTWVhc3VyZSBob3cgbG9uZyB0aGUgdG91Y2ggbGFzdGVkXG5cdFx0XHRcdGNvbnN0IHRvdWNoVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gdG91Y2hTdGFydDtcblxuXHRcdFx0XHQvLyBNYWtlIHN1cmUgdGhlIHRvdWNoIHdhcyBsZXNzIHRoYW4gdGhlIHRocmVzaG9sZCB0byBiZSBjb25zaWRlcmVkIGEgdGFwXG5cdFx0XHRcdGlmICh0b3VjaFRpbWUgPCB0b3VjaFRpbWVUaHJlc2hvbGQpIHtcblx0XHRcdFx0XHQvLyBEb24ndCBsZXQgYnJvd3NlciB0dXJuIHRoaXMgaW50byBhIGNsaWNrXG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHQvKipcblx0XHRcdFx0XHQgKiBUcmlnZ2VyZWQgd2hlbiBhIGBDb21wb25lbnRgIGlzIHRhcHBlZC5cblx0XHRcdFx0XHQgKlxuXHRcdFx0XHRcdCAqIEBldmVudCBDb21wb25lbnQjdGFwXG5cdFx0XHRcdFx0ICovXG5cdFx0XHRcdFx0Y29uc3QgdGFwRXZlbnQgPSAkLkV2ZW50KCd0YXAnKTtcblx0XHRcdFx0XHR0YXBFdmVudC5wYWdlWCA9IGxhc3RNb3ZlVG91Y2gucGFnZVg7XG5cdFx0XHRcdFx0dGFwRXZlbnQucGFnZVkgPSBsYXN0TW92ZVRvdWNoLnBhZ2VZO1xuXHRcdFx0XHRcdGVsZW1lbnQudHJpZ2dlcih0YXBFdmVudCk7XG5cdFx0XHRcdFx0Ly8gSXQgbWF5IGJlIGdvb2QgdG8gY29weSB0aGUgdG91Y2hlbmQgZXZlbnQgb2JqZWN0IGFuZCBjaGFuZ2UgdGhlXG5cdFx0XHRcdFx0Ly8gdHlwZSB0byB0YXAsIGlmIHRoZSBvdGhlciBldmVudCBwcm9wZXJ0aWVzIGFyZW4ndCBleGFjdCBhZnRlclxuXHRcdFx0XHRcdC8vIEV2ZW50cy5maXhFdmVudCBydW5zIChlLmcuIGV2ZW50LnRhcmdldClcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdDb21wb25lbnQnLCBDb21wb25lbnQpO1xuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvQ29tcG9uZW50LmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBJY29uLmpzXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gSWNvbidzIG9wdGlvbnNcbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5pY29uTmFtZT0nJ10gSWNvbidzIG5hbWUuIElmIHVzZSBzdmdzcHJpdGUgaWNvbnMsIGljb25OYW1lIGl0J3MgaWQgaW4gc3ByaXRlXG4gKiBAY2xhc3MgSWNvblxuICogQGV4dGVuZHMgQ29tcG9uZW50XG4gKi9cbmNsYXNzIEljb24gZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yIChwbGF5ZXIsIG9wdGlvbnM9e30pIHtcblx0XHRvcHRpb25zID0gJC5leHRlbmQoe30sIHtcblx0XHRcdGNsYXNzTmFtZSA6ICcnLFxuXHRcdFx0aWNvbk5hbWUgOiAnJ1xuXHRcdH0sIG9wdGlvbnMpXG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblxuXHR9XG5cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdHRoaXMuX3VzZVRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAndXNlJyk7XG5cdFx0dGhpcy5fc3ZnVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcblxuXHRcdHRoaXMuaWNvbk5hbWUgPSB0aGlzLl9pY29uTmFtZSA9IHRoaXMub3B0aW9ucy5pY29uTmFtZTtcblx0XHR0aGlzLl9zdmdUYWcuYXBwZW5kQ2hpbGQodGhpcy5fdXNlVGFnKTtcblx0XHR0aGlzLmVsZW1lbnQgPSAkKCc8ZGl2IC8+Jylcblx0XHRcdC5hZGRDbGFzcyh0aGlzLmJ1aWxkQ1NTQ2xhc3MoKSlcblx0XHRcdC5hdHRyKCd0aXRsZScsIHRoaXMub3B0aW9ucy50aXRsZSlcblx0XHRcdC5hcHBlbmQoJCh0aGlzLl9zdmdUYWcpKTtcblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50O1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0YnVpbGRDU1NDbGFzcygpIHtcblx0XHRyZXR1cm4gYCR7c3VwZXIuYnVpbGRDU1NDbGFzcygpfSBsZXBsYXllci1pY29uICR7dGhpcy5vcHRpb25zLmNsYXNzTmFtZX1gXG5cdH1cblxuXHQvKipcblx0ICogU2V0dGVyIG9mIGljb25OYW1lIGZpZWxkXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBpY29uTmFtZVxuXHQgKi9cblx0c2V0IGljb25OYW1lKGljb25OYW1lKSB7XG5cdFx0bGV0IGF0dHJOUyA9IFsnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycsICdocmVmJ11cblx0XHR0aGlzLl91c2VUYWcucmVtb3ZlQXR0cmlidXRlTlMoLi4uYXR0ck5TLCBgJHt0aGlzLnBsYXllci5vcHRpb25zLnN2Z1BhdGh9I2xlcGxheWVyLWljb24tJHt0aGlzLmljb25OYW1lfWApXG5cdFx0dGhpcy5fdXNlVGFnLnNldEF0dHJpYnV0ZU5TKC4uLmF0dHJOUywgYCR7dGhpcy5wbGF5ZXIub3B0aW9ucy5zdmdQYXRofSNsZXBsYXllci1pY29uLSR7aWNvbk5hbWV9YClcblx0XHR0aGlzLl9pY29uTmFtZSA9IGljb25OYW1lO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldHRlciBvZiBpY29uTmFtZSBmaWVsZFxuXHQgKiBAcmV0dXJuIHtTdHJpbmd9IEljb24ncyBuYW1lXG5cdCAqL1xuXHRnZXQgaWNvbk5hbWUgKCkge1xuXHRcdHJldHVybiB0aGlzLl9pY29uTmFtZTtcblx0fVxuXG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnSWNvbicsIEljb24pO1xuZXhwb3J0IGRlZmF1bHQgSWNvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL0ljb24uanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIFBsYXlCdXR0b24uanNcbiAqL1xuXG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL0NvbnRyb2wnO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgSWNvbiBmcm9tICcuL0ljb24nO1xuaW1wb3J0IHsgY3JlYXRlRWwgfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBJU19UT1VDSCB9IGZyb20gJy4uL3V0aWxzL2Jyb3dzZXInO1xuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqL1xuY2xhc3MgUGxheUJ1dHRvbiBleHRlbmRzIENvbnRyb2wge1xuXG5cdGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucykge1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucylcblx0fVxuXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0Y29uc3QgaW5uZXIgPSBjcmVhdGVFbCgnZGl2Jywge1xuXHRcdFx0Y2xhc3NOYW1lIDogJ2xlcGxheWVyLXBsYXktYnV0dG9uX19idXR0b24nXG5cdFx0fSlcblx0XHQuYXBwZW5kKG5ldyBJY29uKHRoaXMucGxheWVyLCB7IGljb25OYW1lIDogJ3BsYXknIH0pLmVsZW1lbnQpO1xuXG5cdFx0dGhpcy5lbGVtZW50ID0gY3JlYXRlRWwoJ2RpdicsIHtcblx0XHRcdGNsYXNzTmFtZSA6IHRoaXMuYnVpbGRDU1NDbGFzcygpXG5cdFx0fSlcblx0XHQuYXBwZW5kKGlubmVyKTtcblxuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQ7XG5cdH1cblxuXHRvbkNsaWNrKGUpIHtcblx0XHRzdXBlci5vbkNsaWNrKGUpO1xuXHRcdC8qKlxuXHRcdCAqIFNlZSBMUExSLTI5MFxuXHRcdCAqIE9uIHRvdWNoIGRldmljZXMgaW4gZnVsbHNjcmVlbiBpZiB1c2VyIG5vdCBhY3RpdmUgd2UgZG9uJ3Qgc2hvdWxkIHBsYXkuXG5cdFx0ICogQXQgZmlyc3Qgd2Ugc2hvdyBoaW0gYSBjb250cm9sc1xuXHRcdCAqL1xuXHRcdGlmKElTX1RPVUNIKCkgJiYgdGhpcy5wbGF5ZXIudmlldyA9PT0gJ2Z1bGxzY3JlZW4nKSB7XG5cdFx0XHRpZih0aGlzLnBsYXllci51c2VyQWN0aXZlKSB7XG5cdFx0XHRcdHRoaXMucGxheWVyLnBsYXkoKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5wbGF5ZXIucGxheSgpO1xuXHRcdH1cblxuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0YnVpbGRDU1NDbGFzcygpIHtcblx0XHRyZXR1cm4gYGxlcGxheWVyLXBsYXktYnV0dG9uICR7dGhpcy5vcHRpb25zLmNsYXNzTmFtZX1gXG5cdH1cblxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ1BsYXlCdXR0b24nLCBQbGF5QnV0dG9uKTtcbkNvbnRyb2wucmVnaXN0ZXJDb250cm9sKCdwbGF5IGJ1dHRvbicsIFBsYXlCdXR0b24pO1xuZXhwb3J0IGRlZmF1bHQgUGxheUJ1dHRvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL1BsYXlCdXR0b24uanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIHRpbWUuanNcbiAqXG4gKiBAbW9kdWxlIHRpbWVcbiAqL1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuLyoqXG4gKiBDb252ZXJ0IHNlY29uZHMgdG8gZm9ybWF0IHN0cmluZyAnaGg/Om1tOnNzJ1xuICpcbiAqIEBhY2Nlc3MgcHVibGljXG4gKiBAcGFyYW0ge051bWJlcn0gc2Vjb25kcyBTZWNvbmRzXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHNob3dIb3VycyBjb252ZXJ0IHRvIGZvcm1hdCAnaGg6bW06c3MnXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2Vjb25kc1RvVGltZSAoc2Vjb25kcywgc2hvd0hvdXJzKSB7XG5cdHZhciBoID0gTWF0aC5mbG9vcihzZWNvbmRzIC8gMzYwMCk7XG5cdHZhciBtID0gTWF0aC5mbG9vcihzZWNvbmRzICUgMzYwMCAvIDYwKTtcblx0dmFyIHMgPSBNYXRoLmZsb29yKHNlY29uZHMgJSAzNjAwICUgNjApO1xuXHR2YXIgb3V0ID0gJyc7XG5cdGlmIChtIDwgMTApIHtcblx0XHRtID0gJzAnICsgbTtcblx0fVxuXHRpZiAocyA8IDEwKSB7XG5cdFx0cyA9ICcwJyArIHM7XG5cdH1cblx0b3V0ID0gYCR7bX06JHtzfWA7XG5cblx0aWYoaCA+IDAgfHwgc2hvd0hvdXJzKSB7XG5cdFx0b3V0ID0gYCR7aH06YCArIG91dFxuXHR9XG5cdHJldHVybiBvdXQ7XG59XG5cblxuLyoqXG4gKiBSZXR1cm4gbGVuZ3RoIC8gZW5kXG4gKlxuICogQGFjY2VzcyBwdWJsaWNcbiAqIEBwYXJhbSB7TnVtYmVyfSBsZW5ndGhcbiAqIEBwYXJhbSB7TnVibWVyfSBlbmRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBlcmNlbnRpZnkgKGxlbmd0aCwgZW5kKSB7XG5cdC8vIG9yIHplcm8gYmVhY2FzZSBOYU5cblx0Y29uc3QgcGVyY2VudCA9IChsZW5ndGggLyBlbmQpIHx8IDA7XG5cdHJldHVybiAocGVyY2VudCA+PSAxKSA/IDEgOiBwZXJjZW50O1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbCh0YWc9J2RpdicsIHByb3BzKSB7XG5cdGlmKHByb3BzICYmIHByb3BzLmNsYXNzTmFtZSkge1xuXHRcdHByb3BzW1wiY2xhc3NcIl0gPSBwcm9wcy5jbGFzc05hbWU7XG5cdFx0ZGVsZXRlIHByb3BzLmNsYXNzTmFtZTtcblx0fVxuXHRyZXR1cm4gJChgPCR7dGFnfS8+YCwgcHJvcHMpO1xufVxuXG5cbi8qKlxuICogQHBhcmFtcyB7U3RyaW5nfSBIdG1sXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAkaHRtbChodG1sKSB7XG5cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gbm9vcCgpIHt9XG5cbmV4cG9ydCBjb25zdCBnZXRTY3JvbGxCYXJXaWR0aCA9IChmdW5jdGlvbigpIHtcblx0bGV0IHJlc3VsdDtcblxuXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cblx0XHRpZihyZXN1bHQgIT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9XG5cblx0XHRjb25zdCBvdXRlciA9ICQoJzxkaXYgLz4nKS5jc3Moe1xuXHRcdFx0dmlzaWJpbGl0eSA6ICdoaWRkZW4nLFxuXHRcdFx0d2lkdGggOiAxMDAsXG5cdFx0XHRvdmVyZmxvdyA6ICdzY3JvbGwnXG5cdFx0fSkuYXBwZW5kVG8oJ2JvZHknKTtcblxuXHRcdGNvbnN0IHdpZHRoV2l0aFNjcm9sbCA9ICQoJzxkaXYgLz4nKS5jc3Moe1xuXHRcdFx0d2lkdGggOiAnMTAwJSdcblx0XHR9KS5hcHBlbmRUbyhvdXRlcikub3V0ZXJXaWR0aCgpO1xuXG5cdFx0b3V0ZXIucmVtb3ZlKCk7XG5cdFx0cmV0dXJuIHJlc3VsdCA9IDEwMCAtIHdpZHRoV2l0aFNjcm9sbDtcblx0fVxuXG59KCkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL3V0aWxzL2luZGV4LmpzIiwiLyoqXG4gKiBAZmlsZSBicm93c2VyLmpzXG4gKi9cblxuXG5jb25zdCBVU0VSX0FHRU5UID0gd2luZG93Lm5hdmlnYXRvciAmJiB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCB8fCAnJztcblxuZXhwb3J0IGNvbnN0IElTX01PQklMRSA9ICgvTW9iaWxlL2kpLnRlc3QoVVNFUl9BR0VOVCk7XG5cbmV4cG9ydCBjb25zdCBJU19DSFJPTUUgPSBVU0VSX0FHRU5ULmluZGV4T2YoJ0Nocm9tZScpID4gLTE7XG5cbmV4cG9ydCBjb25zdCBJU19BTkRST0lEID0gKC9BbmRyb2lkL2kpLnRlc3QoVVNFUl9BR0VOVCk7XG5cbmV4cG9ydCBjb25zdCBJU19BTkRST0lEX1BIT05FID0gSVNfQU5EUk9JRCAmJiBJU19NT0JJTEU7XG5cbmV4cG9ydCBjb25zdCBJU19JUEFEID0gKC9pUGFkL2kpLnRlc3QoVVNFUl9BR0VOVCk7XG4vLyBUaGUgRmFjZWJvb2sgYXBwJ3MgVUlXZWJWaWV3IGlkZW50aWZpZXMgYXMgYm90aCBhbiBpUGhvbmUgYW5kIGlQYWQsIHNvXG4vLyB0byBpZGVudGlmeSBpUGhvbmVzLCB3ZSBuZWVkIHRvIGV4Y2x1ZGUgaVBhZHMuXG4vLyBodHRwOi8vYXJ0c3kuZ2l0aHViLmlvL2Jsb2cvMjAxMi8xMC8xOC90aGUtcGVyaWxzLW9mLWlvcy11c2VyLWFnZW50LXNuaWZmaW5nL1xuZXhwb3J0IGNvbnN0IElTX0lQSE9ORSA9ICgvaVBob25lL2kpLnRlc3QoVVNFUl9BR0VOVCkgJiYgIUlTX0lQQUQ7XG5leHBvcnQgY29uc3QgSVNfSVBPRCA9ICgvaVBvZC9pKS50ZXN0KFVTRVJfQUdFTlQpO1xuZXhwb3J0IGNvbnN0IElTX0lPUyA9IElTX0lQSE9ORSB8fCBJU19JUEFEIHx8IElTX0lQT0Q7XG5cbmV4cG9ydCBjb25zdCBJU19TQUZBUkkgPSBVU0VSX0FHRU5ULmluZGV4T2YoJ1NhZmFyaScpID4gLTEgJiYgIUlTX0NIUk9NRTtcblxuZXhwb3J0IGNvbnN0IElTX1RPVUNIID0gKCkgPT4gJ29udG91Y2hzdGFydCcgaW4gd2luZG93IHx8IG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvdXRpbHMvYnJvd3Nlci5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgU3BsYXNoSWNvbi5qc1xuICovXG5cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJztcblxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAY2xhc3MgU3BsYXNoSWNvblxuICogQGV4dGVuZHMgQ29tcG9uZW50XG4gKi9cbmNsYXNzIFNwbGFzaEljb24gZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdHNob3cobmFtZSkge1xuXHRcdHRoaXMuaWNvbi5pY29uTmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5lbGVtZW50LmFkZENsYXNzKCdsZXBsYXllci1zcGxhc2hpY29uLS1hY3RpdmUnKTtcblx0XHRzZXRUaW1lb3V0KCgpID0+IHRoaXMuZWxlbWVudC5yZW1vdmVDbGFzcygnbGVwbGF5ZXItc3BsYXNoaWNvbi0tYWN0aXZlJyksIDMwMCk7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdHRoaXMuaWNvbiA9IG5ldyBJY29uKHRoaXMucGxheWVyKTtcblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50ID0gJCgnPGRpdiAvPicpXG5cdFx0XHQuYWRkQ2xhc3MoJ2xlcGxheWVyLXNwbGFzaGljb24nKVxuXHRcdFx0LmFwcGVuZCh0aGlzLmljb24uZWxlbWVudCk7XG5cdH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBTcGxhc2hJY29uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvU3BsYXNoSWNvbi5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgVGltZS5qc1xuICovXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9Db21wb25lbnQnO1xuaW1wb3J0IHsgc2Vjb25kc1RvVGltZSwgY3JlYXRlRWwgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbi8vIFRPRE86INCY0YHQv9C+0LvRjNC30L7QstCw0YLRjCDRjdGC0L7RgiDQsdC70L7QuiDQsiBUaW1lQ29udHJvbFxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAY2xhc3MgVGltZVxuICogQGV4dGVuZHMgQ29udHJvbFxuICovXG5jbGFzcyBUaW1lIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3RvciAocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRmbiA6IChwbGF5ZXIpID0+IHtcblx0XHRcdFx0Y29uc3QgdmlkZW8gPSBwbGF5ZXIudmlkZW87XG5cdFx0XHRcdHJldHVybiBzZWNvbmRzVG9UaW1lKHZpZGVvLmN1cnJlbnRUaW1lKTtcblx0XHRcdH1cblx0XHR9LCBvcHRpb25zKTtcblxuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cblx0XHR0aGlzLnBsYXllci5vbigndGltZXVwZGF0ZScsIHRoaXMudXBkYXRlVGV4dC5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLnBsYXllci5vbignaW5pdGVkJywgdGhpcy51cGRhdGVUZXh0LmJpbmQodGhpcykpO1xuXHR9XG5cblx0dXBkYXRlVGV4dChlLCBkYXRhKSB7XG5cdFx0dGhpcy5lbGVtZW50LnRleHQodGhpcy5vcHRpb25zLmZuKHRoaXMucGxheWVyKSk7XG5cdH1cblxuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdHRoaXMuZWxlbWVudCA9IGNyZWF0ZUVsKCdkaXYnLCB7IGNsYXNzTmFtZSA6ICdsZXBsYXllci10aW1lJyB9KTtcblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50O1xuXHR9XG5cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdUaW1lJywgVGltZSk7XG5leHBvcnQgZGVmYXVsdCBUaW1lO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvVGltZWxpbmUvVGltZS5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgQ29udHJvbENvbGxlY3Rpb24uanNcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL0NvbnRyb2wnO1xuXG5pbXBvcnQgeyBjcmVhdGVFbCB9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IElTX0FORFJPSURfUEhPTkUsIElTX0lQSE9ORSwgSVNfTU9CSUxFIH0gZnJvbSAnLi4vdXRpbHMvYnJvd3Nlcic7XG5cblxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIE9wdGlvbnMgb2YgY29tcG9uZW50XG4gKiBAcGFyYW0ge2pRdWVyeX0gW29wdGlvbnMuY29udHJvbHNdIEFycmF5IG9mIHJvd3Mgb2YgY29udHJvbCdzIG5hbWVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5jb250cm9sc09wdGlvbnNdIENvbnRyb2wgb3B0aW9uc1xuICogQHByb3BlcnR5IHtBcnJheX0gQXJyYXkgb2Ygcm93cyBvZiBjb250cm9sJ3MgbmFtZVxuICogQHByXG4gKlxuICovXG5jbGFzcyBDb250cm9sQ29sbGVjdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yIChwbGF5ZXIsIG9wdGlvbnMpIHtcblx0XHRsZXQgeyBuYW1lIH0gPSBvcHRpb25zO1xuXG5cdFx0Ly8gT3B0aW9ucyBieSB1c2VyIGFnZW50XG5cdFx0Ly8gT3B0aW9ucyBvbmx5IGZvciBjb21tb246YW5kcm9pZCBvciB3aGF0ZXZlcjphbmRyb2lkLCB3aGF0ZXZlcjppb3MgY29udHJvbHNcblx0XHRsZXQgbG9jYWxVYU9wdGlvbnMgPSB7fTtcblxuXHRcdGxldCBjb250cm9sc09wdGlvbnMgPSB7fTtcblxuXHRcdGxldCBjb250cm9scyA9IFtdO1xuXG5cdFx0aWYobmFtZSAhPSBudWxsKSB7XG5cblx0XHRcdGNvbnRyb2xzID0gcGxheWVyLm9wdGlvbnMuY29udHJvbHNbbmFtZV07XG5cblx0XHRcdGNvbnRyb2xzT3B0aW9ucyA9IHBsYXllci5vcHRpb25zLmNvbnRyb2xzT3B0aW9uc1tuYW1lXTtcblxuXHRcdFx0W1xuXHRcdFx0XHR7IGZsYWcgOiBJU19NT0JJTEUsIG5hbWUgOiAnbW9iaWxlJ30sXG4gICAgICAgICAgICAgICAgeyBmbGFnIDogSVNfQU5EUk9JRF9QSE9ORSwgbmFtZSA6ICdhbmRyb2lkJyB9LFxuICAgICAgICAgICAgICAgIHsgZmxhZyA6IElTX0lQSE9ORSwgbmFtZSA6ICdpb3MnIH0sXG5cdFx0XHRdLmZvckVhY2goaXRlbSA9PiB7XG5cdFx0XHRcdGlmKGl0ZW0uZmxhZykge1xuXHRcdFx0XHRcdGNvbnN0IGxvY2FsTmFtZSA9IGAke25hbWV9OiR7aXRlbS5uYW1lfWA7XG5cblx0XHRcdFx0XHRpZihwbGF5ZXIub3B0aW9ucy5jb250cm9sc1tsb2NhbE5hbWVdKSB7XG5cdFx0XHRcdFx0XHRsb2NhbFVhT3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBsb2NhbFVhT3B0aW9ucywgcGxheWVyLm9wdGlvbnMuY29udHJvbHNPcHRpb25zW2xvY2FsTmFtZV0pO1xuXHRcdFx0XHRcdFx0Y29udHJvbHMgPSBwbGF5ZXIub3B0aW9ucy5jb250cm9sc1tsb2NhbE5hbWVdO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gaXRlbS5mbGFnO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cblx0XHRvcHRpb25zID0gJC5leHRlbmQoe30sIHtcblx0XHRcdGNvbnRyb2xzIDogY29udHJvbHMsXG5cdFx0XHRhbGlnbiA6ICdsZWZ0Jyxcblx0XHRcdGNvbnRyb2xzT3B0aW9ucyA6IHt9XG5cdFx0fSwgbG9jYWxVYU9wdGlvbnMsIGNvbnRyb2xzT3B0aW9ucywgb3B0aW9ucyk7XG5cblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXG5cdFx0dGhpcy5hY3RpdmUgPSBvcHRpb25zLmFjdGl2ZSB8fCBmYWxzZTtcblx0XHR0aGlzLm5hbWUgPSBvcHRpb25zLm5hbWU7XG5cblx0XHR0aGlzLnBsYXllci5jb250cm9sc1t0aGlzLm5hbWVdID0gdGhpcztcblx0fVxuXG5cblx0X2dldENvbnRyb2xPcHRpb25zKG5hbWUpIHtcblx0XHRjb25zdCB7IGNvbnRyb2xzT3B0aW9ucyB9ID0gdGhpcy5vcHRpb25zO1xuXHRcdGxldCByZXN1bHQgPSBjb250cm9sc09wdGlvbnMuY29udHJvbCB8fCB7fTtcblxuXHRcdGlmKGNvbnRyb2xzT3B0aW9uc1tuYW1lXSkge1xuXHRcdFx0cmVzdWx0ID0gJC5leHRlbmQodHJ1ZSwge30sIHJlc3VsdCwgY29udHJvbHNPcHRpb25zW25hbWVdKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0YWRkQ29udHJvbChpbmRleFJvdywgbmFtZSwgb3B0aW9ucykge1xuXHRcdGNvbnN0IGNvbnRyb2wgPSBDb250cm9sLmNyZWF0ZSh0aGlzLnBsYXllciwgbmFtZSwge1xuXHRcdFx0Y29sbGVjdGlvbiA6IHRoaXMub3B0aW9ucy5uYW1lLFxuXHRcdFx0Li4ub3B0aW9uc1xuXHRcdH0pO1xuXG5cdFx0aWYoY29udHJvbCA9PSBudWxsKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0d2hpbGUoaW5kZXhSb3cgPiB0aGlzLl9yb3dzLmxlbmd0aCkge1xuXHRcdFx0dGhpcy5hZGRSb3coKTtcblx0XHR9XG5cblx0XHRjb25zdCBlbGVtUm93ID0gdGhpcy5fcm93c1tpbmRleFJvd107XG5cdFx0ZWxlbVJvdy5hcHBlbmQoY29udHJvbC5lbGVtZW50KTtcblxuXHRcdGlmICh0aGlzLmNvbnRyb2xzID09IG51bGwpIHtcblx0XHRcdHRoaXMuY29udHJvbHMgPSBbXTtcblx0XHR9XG5cdFx0aWYgKHRoaXMuY29udHJvbHNbaW5kZXhSb3ddID09IG51bGwpIHtcblx0XHRcdHRoaXMuY29udHJvbHNbaW5kZXhSb3ddID0ge307XG5cdFx0fVxuXG5cdFx0dGhpcy5jb250cm9sc1tpbmRleFJvd11bbmFtZV0gPSBjb250cm9sO1xuXHR9XG5cblx0Z2V0Q29udHJvbChmaXJzdCwgc2Vjb25kKSB7XG5cdFx0aWYoc2Vjb25kID09IG51bGwpIHtcblx0XHRcdGNvbnN0IG5hbWUgPSBmaXJzdDtcblx0XHRcdGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmNvbnRyb2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmKHRoaXMuY29udHJvbHNbaV1bbmFtZV0gIT0gbnVsbCkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLmNvbnRyb2xzW2ldW25hbWVdO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IG5hbWUgPSBmaXJzdDtcblx0XHRcdGNvbnN0IGluZGV4Um93ID0gc2Vjb25kO1xuXHRcdFx0cmV0dXJuIHRoaXMuY29udHJvbHNbaW5kZXhSb3ddW25hbWVdO1xuXHRcdH1cblxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0YWRkUm93KCkge1xuXHRcdGNvbnN0IGVsZW1Sb3cgPSBjcmVhdGVFbCgnZGl2Jywge1xuXHRcdFx0Y2xhc3NOYW1lIDogYGxlcGxheWVyLWNvbnRyb2xzIGNvbnRyb2xzLSR7dGhpcy5vcHRpb25zLm5hbWV9YFxuXHRcdH0pO1xuXG5cdFx0aWYgKHRoaXMuX3Jvd3MgPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5fcm93cyA9IFtdXG5cdFx0fVxuXHRcdHRoaXMuX3Jvd3MucHVzaChlbGVtUm93KTtcblx0XHR0aGlzLmVsZW1lbnQuYXBwZW5kKGVsZW1Sb3cpO1xuXG5cdFx0cmV0dXJuIGVsZW1Sb3c7XG5cdH1cblxuXHRnZXRSb3coaW5kZXhSb3cpIHtcblx0XHRyZXR1cm4gdGhpcy5fcm93c1tpbmRleFJvdyB8fCAwXTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0Y29uc3QgeyBuYW1lLCBjb250cm9scywgYWxpZ24gfSA9IHRoaXMub3B0aW9ucztcblx0XHRsZXQgZ2xvYmFsQWxpZ24gPSBudWxsO1xuXG5cdFx0dGhpcy5lbGVtZW50ID0gY3JlYXRlRWwoJ2RpdicsIHtcblx0XHRcdGNsYXNzTmFtZSA6IGBsZXBsYXllci1jb250cm9sLWNvbGxlY3Rpb24gbGVwbGF5ZXItY29udHJvbC1jb2xsZWN0aW9uLS0ke25hbWV9YCxcblx0XHR9KVxuXG5cdFx0aWYodHlwZW9mIGFsaWduID09PSAnc3RyaW5nJykge1xuXHRcdFx0Z2xvYmFsQWxpZ24gPSBhbGlnbjtcblx0XHR9XG5cblx0XHRjb250cm9scy5mb3JFYWNoKChyb3csIGluZGV4Um93KSA9PiB7XG5cdFx0XHRjb25zdCBlbGVtUm93ID0gdGhpcy5hZGRSb3coKTtcblx0XHRcdGxldCByb3dBbGlnbiA9IGdsb2JhbEFsaWduO1xuXG5cdFx0XHRpZihBcnJheS5pc0FycmF5KGFsaWduKSAmJiBhbGlnbltpbmRleFJvd10pIHtcblx0XHRcdFx0cm93QWxpZ24gPSBhbGlnbltpbmRleFJvd11cblx0XHRcdH1cblxuXHRcdFx0cm93LmZvckVhY2goY29udHJvbE5hbWUgPT4ge1xuXG5cdFx0XHRcdGlmKGNvbnRyb2xOYW1lID09PSAndGltZWxpbmUnICYmIHJvd0FsaWduICE9PSAnanVzdGlmeScpIHtcblx0XHRcdFx0XHRjb25zb2xlLndhcm4oJ0NvbnJvbHMgc2hvdWxkIGhhdmUganVzdGlmeSBhbGlnbiwgaWYgdGhlcmUgaXMgdGhlIHRpbWVsaW5lIGluIGl0Jyk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLmFkZENvbnRyb2woaW5kZXhSb3csIGNvbnRyb2xOYW1lLCB0aGlzLl9nZXRDb250cm9sT3B0aW9ucyhuYW1lKSk7XG5cdFx0XHR9KTtcblxuXHRcdFx0ZWxlbVJvdy5hZGRDbGFzcyhgbGVwbGF5ZXItY29udHJvbHMtLSR7cm93QWxpZ259YClcblx0XHRcdFx0LmF0dHIoJ3RhYmluZGV4JywgMCk7XG5cblx0XHRcdGVsZW1Sb3cuZmluZCgnLmRpdmlkZXIgKyAuZGl2aWRlcicpLnJlbW92ZSgpO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudDtcblx0fVxuXG5cdGhpZGUgKCkge1xuXHRcdHRoaXMuZWxlbWVudC5oaWRlKCk7XG5cdFx0dGhpcy5lbGVtZW50LmZpbmQoJy5sZXBsYXllci1jb250cm9scycpLmhpZGUoKVxuXHR9XG5cblx0c2hvdyAoKSB7XG5cdFx0dGhpcy5lbGVtZW50LnNob3coKVxuXHRcdHRoaXMuZWxlbWVudC5maW5kKCcubGVwbGF5ZXItY29udHJvbHMnKS5zaG93KClcblx0fVxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ0NvbnRyb2xDb2xsZWN0aW9uJywgQ29udHJvbENvbGxlY3Rpb24pO1xuZXhwb3J0IGRlZmF1bHQgQ29udHJvbENvbGxlY3Rpb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9Db250cm9sQ29sbGVjdGlvbi5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgU2VjdGlvbnMuanNcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5cbmltcG9ydCB7IHNlY29uZHNUb1RpbWUsIGdldFNjcm9sbEJhcldpZHRoIH0gZnJvbSAnLi4vdXRpbHMnO1xuLyoqXG4gKiBAY2xhc3MgU2VjdGlvbnNcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEBwYXJhbSB7QXJyYXl9IFtvcHRpb25zLml0ZW1zPVtdfSBEYXRhIGZvciBzZWN0aW9uc1xuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy52aWV3c10gU2hvdyBzZWN0aW9uIG9ubHkgaW4gZnVsbHNjcmVlblxuICogQGV4dGVuZHMgQ29tcG9uZW50XG4gKi9cbmNsYXNzIFNlY3Rpb25zIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XG5cdFx0bGV0IHsgaXRlbXMgPSBbXSB9ID0gb3B0aW9ucztcblx0XHRpdGVtcyA9IFtdLmNvbmNhdChpdGVtcyk7XG5cblx0XHQvL29wdGlvbnMuaXRlbXMgPSBpdGVtcztcblxuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cblx0XHR0aGlzLnNjcm9sbEVsZW1lbnQgPSB0aGlzLl9pbm5lckVsZW1lbnQ7XG5cdFx0dGhpcy5hY3RpdmVTZWN0aW9uID0gdGhpcy5nZXRTZWN0aW9uQnlJbmRleCgwKTtcblxuXHRcdHRoaXMuaXRlbXMgPSBpdGVtcztcblx0XHR0aGlzLmxlbmd0aCA9IHRoaXMuaXRlbXMubGVuZ3RoO1xuXG5cdFx0dGhpcy5zZXRBY3RpdmVCeUluZGV4KDApO1xuXG5cdFx0dGhpcy5lbGVtZW50XG5cdFx0XHQuZmluZCgnLmxlcGxheWVyLXNlY3Rpb24nKVxuXHRcdFx0Lm9uKCdjbGljaycsIHRoaXMub25TZWN0aW9uQ2xpY2suYmluZCh0aGlzKSk7XG5cblx0XHQvLyB0aGlzLnBsYXllci5vbignc2VjdGlvbnN0b2dnbGUnLCB0aGlzLl9vblNlY3Rpb25zVG9nZ2xlLmJpbmQodGhpcykpO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ3RpbWV1cGRhdGUnLCB0aGlzLm9uVGltZVVwZGF0ZS5iaW5kKHRoaXMpKTtcblxuXHRcdHRoaXMucGxheWVyLm9uKCdpbml0ZWQnLCB0aGlzLnVwZGF0ZVNlY3Rpb25EdXJhdGlvbi5iaW5kKHRoaXMpKTtcblxuXHRcdHRoaXMucGxheWVyLm9uKCdkdXJhdGlvbmNoYW5nZScsIHRoaXMudXBkYXRlU2VjdGlvbkR1cmF0aW9uLmJpbmQodGhpcykpO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ2ZvY3VzJywgKCkgPT4gdGhpcy5wbGF5ZXIuZm9jdXMoKSk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdG5leHQoKSB7XG5cdFx0Y29uc3Qgc2VjdGlvbkluZGV4ID0gcGFyc2VJbnQodGhpcy5hY3RpdmVTZWN0aW9uLmF0dHIoJ2RhdGEtaW5kZXgnKSk7XG5cdFx0Y29uc3QgbmV3SW5kZXggPSBzZWN0aW9uSW5kZXggPj0gdGhpcy5sZW5ndGggPyB0aGlzLmxlbmd0aCA6IHNlY3Rpb25JbmRleCArIDE7XG5cblx0XHR0aGlzLnNldEFjdGl2ZUJ5SW5kZXgobmV3SW5kZXgpO1xuXG5cdFx0dGhpcy5wbGF5ZXIudmlkZW8uY3VycmVudFRpbWUgPSB0aGlzLml0ZW1zW3NlY3Rpb25JbmRleF0uZW5kO1xuXHR9XG5cblx0cHJldigpIHtcblx0XHRjb25zdCBzZWN0aW9uSW5kZXggPSBwYXJzZUludCh0aGlzLmFjdGl2ZVNlY3Rpb24uYXR0cignZGF0YS1pbmRleCcpKTtcblx0XHRjb25zdCBuZXdJbmRleCA9IHNlY3Rpb25JbmRleCA8PSAwID8gMCA6IHNlY3Rpb25JbmRleCAtIDE7XG5cblx0XHR0aGlzLnNldEFjdGl2ZUJ5SW5kZXgobmV3SW5kZXgpO1xuXHRcdHRoaXMucGxheWVyLnZpZGVvLmN1cnJlbnRUaW1lID0gdGhpcy5pdGVtc1tuZXdJbmRleF0uYmVnaW47XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdGNvbnN0IHsgZnVsbHNjcmVlbk9ubHksIGhpZGVTY3JvbGwgfSA9IHRoaXMub3B0aW9ucztcblxuXG5cdFx0dGhpcy5lbGVtZW50ID0gJCgnPGRpdiAvPicpXG5cdFx0XHQuYWRkQ2xhc3MoJ2xlcGxheWVyLXNlY3Rpb25zJylcblx0XHRcdC5hdHRyKCd0YWJpbmRleCcsICcwJyk7XG5cblx0XHR0aGlzLl9pbm5lckVsZW1lbnQgPSAkKCc8ZGl2IC8+JykuYWRkQ2xhc3MoJ2xlcGxheWVyLXNlY3Rpb25zX19pbm5lcicpO1xuXG5cdFx0aWYoZnVsbHNjcmVlbk9ubHkpIHtcblx0XHRcdHRoaXMuZWxlbWVudC5hZGRDbGFzcygnbGVwbGF5ZXItc2VjdGlvbnMtLWZzb25seScpO1xuXHRcdH1cblxuXHRcdGlmKGhpZGVTY3JvbGwpIHtcblx0XHRcdHRoaXMuZWxlbWVudC5hZGRDbGFzcygnbGVwbGF5ZXItc2VjdGlvbnMtLWhpZGUtc2Nyb2xsJyk7XG5cdFx0XHR0aGlzLl9pbm5lckVsZW1lbnQuY3NzKHtcblx0XHRcdFx0cmlnaHQgOiAtMSAqIGdldFNjcm9sbEJhcldpZHRoKClcblx0XHRcdH0pXG5cdFx0fVxuXG5cdFx0dGhpcy5lbGVtZW50LmFwcGVuZChcblx0XHRcdHRoaXMuX2lubmVyRWxlbWVudC5hcHBlbmQodGhpcy5fY3JlYXRlU2VjdGlvbnModGhpcy5vcHRpb25zLml0ZW1zKSlcblx0XHQpXG5cblxuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQ7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHR1cGRhdGVTZWN0aW9uRHVyYXRpb24oKSB7XG5cdFx0aWYodGhpcy5pdGVtcyAhPSBudWxsICYmIHRoaXMuaXRlbXMubGVuZ3RoID4gMCkge1xuXHRcdFx0Y29uc3QgbGVuZ3RoID0gdGhpcy5pdGVtcy5sZW5ndGhcblx0XHRcdHRoaXMuaXRlbXNbbGVuZ3RoIC0gMV0uZW5kID0gdGhpcy5wbGF5ZXIudmlkZW8uZHVyYXRpb247XG5cblx0XHRcdC8vIFRPRE86INCf0YDQvtC00YPQvNCw0YLRjCDRhNGD0L3QutGG0LjRj9GOIHVwZGF0ZVNlY3Rpb25cblx0XHRcdC8vdGhpcy51cGRhdGVTZWN0aW9uKHRoaXMuaXRlbXNbbGVuZ3RoIC0gMV0sIGxlbmd0aCAtIDEpO1xuXHRcdH1cblx0fVxuXG5cblx0b25TZWN0aW9uQ2xpY2soZSkge1xuXHRcdGNvbnN0IHZpZGVvID0gdGhpcy5wbGF5ZXIudmlkZW87XG5cdFx0Y29uc3Qgc2VjdGlvbiA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5sZXBsYXllci1zZWN0aW9uJyk7XG5cdFx0dmlkZW8uY3VycmVudFRpbWUgPSBzZWN0aW9uLmF0dHIoJ2RhdGEtYmVnaW4nKTtcblx0XHR0aGlzLnBsYXllci50cmlnZ2VyKCdzZWN0aW9uc2NsaWNrJywgeyBzZWN0aW9uIDogdGhpcy5pdGVtc1tzZWN0aW9uLmF0dHIoJ2RhdGEtaW5kZXgnKV19KTtcblx0fVxuXG5cdHNldEFjdGl2ZUJ5SW5kZXgoaW5kZXgpIHtcblx0XHRpZiAoXG5cdFx0XHR0aGlzLmFjdGl2ZVNlY3Rpb24ubGVuZ3RoID09PSAwIHx8XG5cdFx0XHRwYXJzZUludCh0aGlzLmFjdGl2ZVNlY3Rpb24uYXR0cignZGF0YS1pbmRleCcpKSA9PT0gaW5kZXggfHxcblx0XHRcdHRoaXMuZ2V0U2VjdGlvbkJ5SW5kZXgoaW5kZXgpLmxlbmd0aCA9PT0gMFxuXHRcdCkge1xuXHRcdFx0cmV0dXJuIHRoaXNcblx0XHR9XG5cblx0XHR0aGlzLmFjdGl2ZVNlY3Rpb24ucmVtb3ZlQ2xhc3MoJ2xlcGxheWVyLXNlY3Rpb24tLWFjdGl2ZScpO1xuXHRcdHRoaXMuYWN0aXZlU2VjdGlvbiA9IHRoaXMuZ2V0U2VjdGlvbkJ5SW5kZXgoaW5kZXgpO1xuXHRcdHRoaXMuYWN0aXZlU2VjdGlvbi5hZGRDbGFzcygnbGVwbGF5ZXItc2VjdGlvbi0tYWN0aXZlJyk7XG5cblx0XHRjb25zdCB0b3BQb3NpdGlvbiA9IHRoaXMuYWN0aXZlU2VjdGlvbi5wb3NpdGlvbigpLnRvcDtcblxuXHRcdHRoaXMuc2Nyb2xsRWxlbWVudFxuXHRcdFx0LmFuaW1hdGUoe1xuXHRcdFx0XHRzY3JvbGxUb3AgOiB0aGlzLnNjcm9sbEVsZW1lbnQuc2Nyb2xsVG9wKCkgKyB0b3BQb3NpdGlvblxuXHRcdFx0fSwgODAwKVxuXG5cdFx0dGhpcy5wbGF5ZXIudHJpZ2dlcignc2VjdGlvbnNjaGFuZ2UnLCB7IHNlY3Rpb24gOiB0aGlzLml0ZW1zW2luZGV4XX0pO1xuXG5cdFx0cmV0dXJuIHRoaXNcblx0fVxuXG5cdGdldFNlY3Rpb25CeUluZGV4KGluZGV4KSB7XG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudC5maW5kKGAubGVwbGF5ZXItc2VjdGlvbltkYXRhLWluZGV4PVwiJHtpbmRleH1cIl1gKTtcblx0fVxuXG5cblx0b25UaW1lVXBkYXRlKGUsIGRhdGEpIHtcblx0XHRpZiAodGhpcy5hY3RpdmVTZWN0aW9uLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuXG5cdFx0fVxuXG5cdFx0Y29uc3QgY3VycmVudFRpbWUgPSB0aGlzLnBsYXllci5jdXJyZW50VGltZTtcblxuXHRcdC8vIFVwZGF0ZSBzcGFuIHdpdGggZW5kIHNlY3Rpb24gdGltZVxuXHRcdC8vIFRPRE86INCS0YvQvdC10YHRgtC4INGN0YLQviDQsiDQvtGC0LTQtdC70YzQvdGL0Lkg0LrQvtC80L/QvtC90LXQvdGCIFNob3dUaW1lINC40LvQuCDRgtC40L/QviDRgtC+0LPQvlxuXHRcdGlmKHRoaXMucGxheWVyLnZpZXcgPT09ICdtaW5pJykge1xuXHRcdFx0Y29uc3QgZW5kU2VjdGlvblRpbWUgPSB0aGlzLmFjdGl2ZVNlY3Rpb24uYXR0cignZGF0YS1lbmQnKTtcblx0XHRcdHRoaXMuYWN0aXZlU2VjdGlvblxuXHRcdFx0XHQubmV4dCgpXG5cdFx0XHRcdC5maW5kKCcudGltZScpXG5cdFx0XHRcdC50ZXh0KHNlY29uZHNUb1RpbWUoZW5kU2VjdGlvblRpbWUgLSBjdXJyZW50VGltZSkpO1xuXHRcdH1cblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3Qgc2VjdGlvbiA9IHRoaXMuaXRlbXNbaV07XG5cdFx0XHRpZiAoY3VycmVudFRpbWUgPCBzZWN0aW9uLmVuZCkge1xuXHRcdFx0XHR0aGlzLnNldEFjdGl2ZUJ5SW5kZXgoaSlcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0c2V0IHZpc2libGUodmFsdWUpIHtcblx0XHRpZiAodGhpcy5lbGVtZW50Lmhhc0NsYXNzKCdsZXBsYXllci1zZWN0aW9ucy0taGlkZGVuJykgJiYgdmFsdWUpIHtcblx0XHRcdHRoaXMuZWxlbWVudC5yZW1vdmVDbGFzcygnbGVwbGF5ZXItc2VjdGlvbnMtLWhpZGRlbicpO1xuXHRcdFx0dGhpcy5wbGF5ZXIudHJpZ2dlcignc2VjdGlvbnN0b2dnbGUnLCB7IGlzVmlzaWJsZSA6IHZhbHVlIH0pO1xuXHRcdH0gZWxzZSBpZiAoIXZhbHVlKSB7XG5cdFx0XHR0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoJ2xlcGxheWVyLXNlY3Rpb25zLS1oaWRkZW4nKTtcblx0XHRcdHRoaXMucGxheWVyLnRyaWdnZXIoJ3NlY3Rpb25zdG9nZ2xlJywgeyBpc1Zpc2libGUgOiB2YWx1ZSB9KTtcblx0XHR9XG5cdH1cblxuXHRnZXQgdmlzaWJsZSgpIHtcblx0XHRyZXR1cm4gIXRoaXMuZWxlbWVudC5oYXNDbGFzcygnbGVwbGF5ZXItc2VjdGlvbnMtLWhpZGRlbicpXG5cdH1cblxuXHQvKipcblx0ICogQ3JlYXRlIEhUTUwgb2Ygc2VjdGlvbiBieSBkYXRhIGFuZCBpbmRleCBzZWN0aW9uXG5cdCAqXG5cdCAqIEByZXR1cm5zIHtTdHJpbmd9IEhUTUxcblx0ICovXG5cdGNyZWF0ZVNlY3Rpb24oc2VjdGlvbiwgaW5kZXgpIHtcblx0XHRjb25zdCBpdGVtcyA9IHRoaXMuaXRlbXMgfHwgdGhpcy5vcHRpb25zLml0ZW1zO1xuXHRcdGNvbnN0IGl0ZW0gPSBgXG5cdFx0XHQ8ZGl2IGNsYXNzPVwibGVwbGF5ZXItc2VjdGlvbiAkeyFpbmRleCA/ICdsZXBsYXllci1zZWN0aW9uLS1hY3RpdmUnIDogJyd9XCJcblx0XHRcdFx0ZGF0YS1iZWdpbj1cIiR7c2VjdGlvbi5iZWdpbn1cIlxuXHRcdFx0XHRkYXRhLWluZGV4PVwiJHtpbmRleC50b1N0cmluZygpfVwiXG5cdFx0XHRcdGRhdGEtZW5kPVwiJHtzZWN0aW9uLmVuZH1cIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImxlcGxheWVyLXNlY3Rpb24tdGltZVwiPiR7c2Vjb25kc1RvVGltZShzZWN0aW9uLmJlZ2luKX08L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImxlcGxheWVyLXNlY3Rpb24taW5mb1wiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJsZXBsYXllci1zZWN0aW9uLW5leHQtaW5mb1wiPlxuXHRcdFx0XHRcdFx0JHtzZWN0aW9uLm5leHRJbmZvIHx8ICfQodC70LXQtNGD0Y7RidCw0Y8g0YHQtdC60YbQuNGPINC90LDRh9C90LXRgtGB0Y8g0YfQtdGA0LXQtyd9XG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cInRpbWVcIj4ke3NlY29uZHNUb1RpbWUoaXRlbXNbMF0uZW5kKX08L3NwYW4+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0JHtcblx0XHRcdFx0XHRcdHNlY3Rpb24udGl0bGUgIT0gbnVsbCA/XG5cdFx0XHRcdFx0XHRcdGA8ZGl2IGNsYXNzPVwibGVwbGF5ZXItc2VjdGlvbi10aXRsZVwiPiR7c2VjdGlvbi50aXRsZX08L2Rpdj5gXG5cdFx0XHRcdFx0XHQ6ICcnXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdCR7XG5cdFx0XHRcdFx0XHRzZWN0aW9uLmRlc2NyaXB0aW9uICE9IG51bGwgP1xuXHRcdFx0XHRcdFx0XHRgPGRpdiBjbGFzcz1cImxlcGxheWVyLXNlY3Rpb24tZGVzY3JpcHRpb25cIj4ke3NlY3Rpb24uZGVzY3JpcHRpb259PC9kaXY+YFxuXHRcdFx0XHRcdFx0OiAnJ1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRgLnRyaW0oKVxuXHRcdHJldHVybiBpdGVtXG5cdH1cblxuXHQvLyBUT0RPOiDQn9GA0LjQtNGD0LzQsNGC0Ywg0YfRgtC+INGB0LTQtdC70LDRgtGMINGBINGB0L7QsdGL0YLQuNGP0LzQuCDQv9C+0YHQu9C1INC+0LHQvdC+0LLQu9C10L3QuNGPINC/0L7Qu9C90L7RgdGM0Y4g0YHQtdC60YbQuNC4XG5cdC8qKlxuXHQgKiBGaW5kIHNlY3Rpb24gYnkgaW5kZXggYW5kIHVwZGF0ZSBoaW0gdXNpbmcgZGF0YVxuXHQgKlxuXHQgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuXHQgKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcblx0ICovXG5cdHVwZGF0ZVNlY3Rpb24oZGF0YSwgaW5kZXgpIHtcblx0XHR0aGlzLmdldFNlY3Rpb25CeUluZGV4KGluZGV4KVxuXHRcdFx0LnJlcGxhY2VXaXRoKHRoaXMuY3JlYXRlU2VjdGlvbihkYXRhLCBpbmRleCkpXG5cdFx0XHQub24oJ2NsaWNrJywgdGhpcy5vblNlY3Rpb25DbGljay5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdF9jcmVhdGVTZWN0aW9ucyhpdGVtcykge1xuXHRcdGxldCByZXN1bHQgPSAnJztcblx0XHRpdGVtcy5mb3JFYWNoKChzZWN0aW9uLCBpbmRleCkgPT4ge1xuXHRcdFx0cmVzdWx0ICs9IHRoaXMuY3JlYXRlU2VjdGlvbihzZWN0aW9uLCBpbmRleCk7XG5cdFx0fSk7XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ1NlY3Rpb25zJywgU2VjdGlvbnMpO1xuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbnM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9TZWN0aW9ucy5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgRXJyb3JEaXNwbGF5LmpzXG4gKi9cblxuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5cbi8qKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQGNsYXNzIEVycm9yRGlzcGxheVxuICogQGV4dGVuZHMgQ29tcG9uZW50XG4gKi9cbmNsYXNzIEVycm9yRGlzcGxheSBleHRlbmRzIENvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblx0XHRpZih0aGlzLnBsYXllci5fZXJyb3IgIT0gbnVsbCkge1xuXHRcdFx0dGhpcy5tZXNzYWdlID0gdGhpcy5wbGF5ZXIuX2Vycm9yLm1lc3NhZ2U7XG5cdFx0XHR0aGlzLmVsZW1lbnQuc2hvdygpO1xuXHRcdH1cblx0XHR0aGlzLnBsYXllci5vbignZXJyb3InLCB0aGlzLm9uUGxheWVyRXJyb3IuYmluZCh0aGlzKSk7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdHRoaXMuZWxlbWVudCA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0LmFkZENsYXNzKCdsZXBsYXllci1lcnJvci1kaXNwbGF5Jylcblx0fVxuXG5cdHNldCBtZXNzYWdlKHZhbHVlKSB7XG5cdFx0dGhpcy5lbGVtZW50Lmh0bWwodmFsdWUpO1xuXHR9XG5cblx0b25QbGF5ZXJFcnJvcihlLCBkYXRhKSB7XG5cdFx0Y29uc3QgZXJyb3IgPSBkYXRhLmVycm9yO1xuXHRcdHRoaXMubWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XG5cdFx0dGhpcy5lbGVtZW50LnNob3coKTtcblx0fVxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ0Vycm9yRGlzcGxheScsIEVycm9yRGlzcGxheSk7XG5leHBvcnQgZGVmYXVsdCBFcnJvckRpc3BsYXk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9FcnJvckRpc3BsYXkuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIEVycm9yRGlzcGxheS5qc1xuICovXG5cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy51cmxdIHBhdGggdG8gcG9zdGVyIGltYWdlXG4gKiBAY2xhc3MgUG9zdGVyXG4gKiBAZXh0ZW5kcyBDb21wb25lbnRcbiAqL1xuY2xhc3MgUG9zdGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnM9e30pIHtcblx0XHRvcHRpb25zID0gJC5leHRlbmQoe30sIHtcblx0XHRcdHVybCA6IG9wdGlvbnMudXJsXG5cdFx0fSwgb3B0aW9ucyk7XG5cblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXG5cdFx0dGhpcy51cmwgPSB0aGlzLm9wdGlvbnMudXJsO1xuXHR9XG5cblx0c2V0IHVybCh2YWx1ZSkge1xuXHRcdGlmKHZhbHVlID09IG51bGwpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy5fdXJsID0gdmFsdWU7XG5cdFx0dGhpcy5lbGVtZW50LmNzcygnYmFja2dyb3VuZC1pbWFnZScsIGB1cmwoXCIke3ZhbHVlfVwiKWApXG5cdH1cblxuXHRnZXQgdXJsKCkge1xuXHRcdHJldHVybiB0aGlzLl91cmw7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdHRoaXMuZWxlbWVudCA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0LmFkZENsYXNzKCdsZXBsYXllci1wb3N0ZXInKTtcblxuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQ7XG5cdH1cblxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ1Bvc3RlcicsIFBvc3Rlcik7XG5leHBvcnQgZGVmYXVsdCBQb3N0ZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9Qb3N0ZXIuanMiLCIvKipcbiAqIEBmaWxlIGZ1bGxzY3JlZW4tYXBpLmpzXG4gKi9cblxuXG4vKlxuICogU3RvcmUgdGhlIGJyb3dzZXItc3BlY2lmaWMgbWV0aG9kcyBmb3IgdGhlIGZ1bGxzY3JlZW4gQVBJXG4gKiBAdHlwZSB7T2JqZWN0fHVuZGVmaW5lZH1cbiAqIEBwcml2YXRlXG4gKi9cbmxldCBGdWxsc2NyZWVuQXBpID0ge307XG5cbi8vIGJyb3dzZXIgQVBJIG1ldGhvZHNcbi8vIG1hcCBhcHByb2FjaCBmcm9tIFNjcmVlbmZ1bC5qcyAtIGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvc2NyZWVuZnVsbC5qc1xuY29uc3QgYXBpTWFwID0gW1xuXHQvLyBTcGVjOiBodHRwczovL2R2Y3MudzMub3JnL2hnL2Z1bGxzY3JlZW4vcmF3LWZpbGUvdGlwL092ZXJ2aWV3Lmh0bWxcblx0W1xuXHRcdCdyZXF1ZXN0RnVsbHNjcmVlbicsXG5cdFx0J2V4aXRGdWxsc2NyZWVuJyxcblx0XHQnZnVsbHNjcmVlbkVsZW1lbnQnLFxuXHRcdCdmdWxsc2NyZWVuRW5hYmxlZCcsXG5cdFx0J2Z1bGxzY3JlZW5jaGFuZ2UnLFxuXHRcdCdmdWxsc2NyZWVuZXJyb3InXG5cdF0sXG5cdC8vIFdlYktpdFxuXHRbXG5cdFx0J3dlYmtpdFJlcXVlc3RGdWxsc2NyZWVuJyxcblx0XHQnd2Via2l0RXhpdEZ1bGxzY3JlZW4nLFxuXHRcdCd3ZWJraXRGdWxsc2NyZWVuRWxlbWVudCcsXG5cdFx0J3dlYmtpdEZ1bGxzY3JlZW5FbmFibGVkJyxcblx0XHQnd2Via2l0ZnVsbHNjcmVlbmNoYW5nZScsXG5cdFx0J3dlYmtpdGZ1bGxzY3JlZW5lcnJvcidcblx0XSxcblx0Ly8gT2xkIFdlYktpdCAoU2FmYXJpIDUuMSlcblx0W1xuXHRcdCd3ZWJraXRSZXF1ZXN0RnVsbFNjcmVlbicsXG5cdFx0J3dlYmtpdENhbmNlbEZ1bGxTY3JlZW4nLFxuXHRcdCd3ZWJraXRDdXJyZW50RnVsbFNjcmVlbkVsZW1lbnQnLFxuXHRcdCd3ZWJraXRDYW5jZWxGdWxsU2NyZWVuJyxcblx0XHQnd2Via2l0ZnVsbHNjcmVlbmNoYW5nZScsXG5cdFx0J3dlYmtpdGZ1bGxzY3JlZW5lcnJvcidcblx0XSxcblx0Ly8gTW96aWxsYVxuXHRbXG5cdFx0J21velJlcXVlc3RGdWxsU2NyZWVuJyxcblx0XHQnbW96Q2FuY2VsRnVsbFNjcmVlbicsXG5cdFx0J21vekZ1bGxTY3JlZW5FbGVtZW50Jyxcblx0XHQnbW96RnVsbFNjcmVlbkVuYWJsZWQnLFxuXHRcdCdtb3pmdWxsc2NyZWVuY2hhbmdlJyxcblx0XHQnbW96ZnVsbHNjcmVlbmVycm9yJ1xuXHRdLFxuXHQvLyBNaWNyb3NvZnRcblx0W1xuXHRcdCdtc1JlcXVlc3RGdWxsc2NyZWVuJyxcblx0XHQnbXNFeGl0RnVsbHNjcmVlbicsXG5cdFx0J21zRnVsbHNjcmVlbkVsZW1lbnQnLFxuXHRcdCdtc0Z1bGxzY3JlZW5FbmFibGVkJyxcblx0XHQnTVNGdWxsc2NyZWVuQ2hhbmdlJyxcblx0XHQnTVNGdWxsc2NyZWVuRXJyb3InXG5cdF1cbl07XG5cblxubGV0IHNwZWNBcGkgPSBhcGlNYXBbMF07XG5cbmxldCBicm93c2VyQXBpO1xuXG4vLyBkZXRlcm1pbmUgdGhlIHN1cHBvcnRlZCBzZXQgb2YgZnVuY3Rpb25zXG5mb3IgKGxldCBpID0gMDsgaSA8IGFwaU1hcC5sZW5ndGg7IGkrKykge1xuXHQvLyBjaGVjayBmb3IgZXhpdEZ1bGxzY3JlZW4gZnVuY3Rpb25cblx0aWYgKGFwaU1hcFtpXVsxXSBpbiBkb2N1bWVudCkge1xuXHRcdGJyb3dzZXJBcGkgPSBhcGlNYXBbaV07XG5cdFx0YnJlYWs7XG5cdH1cbn1cblxuLy8gbWFwIHRoZSBicm93c2VyIEFQSSBuYW1lcyB0byB0aGUgc3BlYyBBUEkgbmFtZXNcbmlmIChicm93c2VyQXBpKSB7XG5cdGZvciAobGV0IGk9MDsgaTxicm93c2VyQXBpLmxlbmd0aDsgaSsrKSB7XG5cdFx0RnVsbHNjcmVlbkFwaVtzcGVjQXBpW2ldXSA9IGJyb3dzZXJBcGlbaV07XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRnVsbHNjcmVlbkFwaTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9GdWxsc2NyZWVuQXBpLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBjb29raWUtY29udHJvbC5qc1xuICpcbiAqIEBjbGFzIENvb2tpZVxuICovXG5jbGFzcyBDb29raWUge1xuXHQvKipcblx0ICogQHB1YmxpY1xuXHQgKlxuXHQgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBOYW1lIG9mIGNvb2tpZVxuXHQgKiBAcGFyYW0ge1N0cmluZ30gW2RmbHRdIFJldHVybiBkZWZhdWx0IHZhbHVlIGlmIHRoaXMgZmllbGQgaXMgZW1wdHlcblx0ICpcblx0ICovXG5cdHN0YXRpYyBnZXQgKG5hbWUsIGRmbHQpIHtcblx0XHRsZXQgY29va2llcyA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOycpO1xuXHRcdGZvciAobGV0IGkgaW4gY29va2llcykge1xuXHRcdFx0dmFyIGQgPSBjb29raWVzWyBpIF0udHJpbSgpLnNwbGl0KCc9Jyk7XG5cdFx0XHRpZiAoZFsgMCBdID09PSAnbGVwbGF5ZXJfJyArIG5hbWUpXG5cdFx0XHRcdHJldHVybiBkWyAxIF07XG5cdFx0fVxuXHRcdHJldHVybiBkZmx0O1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwdWJsaWNcblx0ICpcblx0ICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgS2V5XG5cdCAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSBWYWx1ZVxuXHQgKi9cblx0c3RhdGljIHNldCAobmFtZSwgdmFsdWUpIHtcblx0XHR2YXIgZCA9IG5ldyBEYXRlKCk7XG5cdFx0ZC5zZXREYXRlKGQueWVhciArIDEpO1xuXHRcdGRvY3VtZW50LmNvb2tpZSA9ICdsZXBsYXllcl8nICsgbmFtZSArICc9JyArIHZhbHVlICsgJztleHBpcmVzPScgKyBkLnRvU3RyaW5nKCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29va2llO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL3V0aWxzL2Nvb2tpZS5qcyIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbmNsYXNzIE1lZGlhRXJyb3Ige1xuXHRjb25zdHJ1Y3Rvcih2YWx1ZSkge1xuXHRcdGlmKHZhbHVlIGluc3RhbmNlb2YgTWVkaWFFcnJvcikge1xuXHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuXHRcdFx0dGhpcy5jb2RlID0gdmFsdWU7XG5cdFx0fSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG5cdFx0Ly8gZGVmYXVsdCBjb2RlIGlzIHplcm8sIHNvIHRoaXMgaXMgYSBjdXN0b20gZXJyb3Jcblx0XHRcdHRoaXMubWVzc2FnZSA9IHZhbHVlO1xuXHRcdH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuXG5cdFx0XHQvLyBXZSBhc3NpZ24gdGhlIGBjb2RlYCBwcm9wZXJ0eSBtYW51YWxseSBiZWNhdXNlIG5hdGl2ZSBNZWRpYUVycm9yIG9iamVjdHNcblx0XHRcdC8vIGRvIG5vdCBleHBvc2UgaXQgYXMgYW4gb3duL2VudW1lcmFibGUgcHJvcGVydHkgb2YgdGhlIG9iamVjdC5cblx0XHRcdGlmICh0eXBlb2YgdmFsdWUuY29kZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0dGhpcy5jb2RlID0gdmFsdWUuY29kZTtcblx0XHRcdH1cblxuXHRcdFx0JC5leHRlbmQodGhpcywgdmFsdWUpO1xuXHRcdH1cblxuXHRcdGlmICghdGhpcy5tZXNzYWdlKSB7XG5cdFx0XHR0aGlzLm1lc3NhZ2UgPSBNZWRpYUVycm9yLmRlZmF1bHRNZXNzYWdlc1t0aGlzLmNvZGVdIHx8ICcnO1xuXHRcdH1cblx0fVxufVxuXG5NZWRpYUVycm9yLnByb3RvdHlwZS5jb2RlID0gMDtcblxuTWVkaWFFcnJvci5wcm90b3R5cGUubWVzc2FnZSA9ICcnO1xuXG5NZWRpYUVycm9yLmVycm9yVHlwZXMgPSBbXG5cdCdNRURJQV9FUlJfQ1VTVE9NJyxcblx0J01FRElBX0VSUl9BQk9SVEVEJyxcblx0J01FRElBX0VSUl9ORVRXT1JLJyxcblx0J01FRElBX0VSUl9ERUNPREUnLFxuXHQnTUVESUFfRVJSX1NSQ19OT1RfU1VQUE9SVEVEJyxcblx0J01FRElBX0VSUl9FTkNSWVBURUQnXG5dO1xuXG5cbk1lZGlhRXJyb3IuZGVmYXVsdE1lc3NhZ2VzID0ge1xuXHQxIDogJ9CS0Ysg0L/RgNC10YDQstCw0LvQuCDQt9Cw0LPRgNGD0LfQutGDINCy0LjQtNC10L4uJyxcblx0MiA6ICfQl9Cw0LPRgNGD0LfQutCwINCy0LjQtNC10L4g0L/RgNC10YDQstCw0L3QsCDQuNC3LdC30LAg0L/QvtGC0LXRgNC4INGB0L7QtdC00LjQvdC10L3QuNGPLicsXG5cdDMgOiAn0JfQsNCz0YDRg9C30LrQsCDQstC40LTQtdC+INC+0YHRgtCw0L3QvtCy0LvQtdC90LAg0LjQty3Qt9CwINC/0YDQvtCx0LvQtdC8INGBINCy0LjQtNC10L7RhNCw0LnQu9C+0Lwg0LjQu9C4INC40Lct0LfQsCDRgtC+0LPQviwg0YfRgtC+INCy0LDRiCDQsdGA0LDRg9C30LXRgCDQvdC1INC/0L7QtNC00LXRgNC20LjQstCw0LXRgiDQstC+0YHQv9GA0L7QuNC30LLQtdC00LXQvdC40LUg0LTQsNC90L3QvtCz0L4g0YTQsNC50LvQsC4nLFxuXHQ0IDogJ9CS0LjQtNC10L4g0L3QtSDQvNC+0LbQtdGCINCx0YvRgtGMINC30LDQs9GA0YPQttC10L3QviDQuNC3LdC30LAg0L/RgNC+0LHQu9C10Lwg0YEg0LjQvdGC0LXRgNC90LXRgi3RgdC+0LXQtNC40L3QtdC90LjQtdC8INC40LvQuCDQv9GA0L7QsdC70LXQvCDQvdCwINGB0LXRgNCy0LXRgNC1LiDQmNC70Lgg0YTQvtGA0LzQsNGCINGE0LDQudC70LAg0L3QtSDQv9C+0LTQtNC10YDQttC40LLQsNC10YLRgdGPINCy0LDRiNC40Lwg0LHRgNCw0YPQt9C10YDQvtC8LicsXG5cdDUgOiAn0JLQuNC00LXQviDQt9Cw0YjQuNGE0YDQvtCy0LDQvdC+LCDQuCDQvNGLINC90LUg0LzQvtC20LXQvCDQtdCz0L4g0YDQsNGB0YjQuNGE0YDQvtCy0LDRgtGMLidcbn07XG5cbi8vIEFkZCB0eXBlcyBhcyBwcm9wZXJ0aWVzIG9uIE1lZGlhRXJyb3Jcbi8vIGUuZy4gTWVkaWFFcnJvci5NRURJQV9FUlJfU1JDX05PVF9TVVBQT1JURUQgPSA0O1xuZm9yIChsZXQgZXJyTnVtID0gMDsgZXJyTnVtIDwgTWVkaWFFcnJvci5lcnJvclR5cGVzLmxlbmd0aDsgZXJyTnVtKyspIHtcblx0TWVkaWFFcnJvcltNZWRpYUVycm9yLmVycm9yVHlwZXNbZXJyTnVtXV0gPSBlcnJOdW07XG5cdC8vIHZhbHVlcyBzaG91bGQgYmUgYWNjZXNzaWJsZSBvbiBib3RoIHRoZSBjbGFzcyBhbmQgaW5zdGFuY2Vcblx0TWVkaWFFcnJvci5wcm90b3R5cGVbTWVkaWFFcnJvci5lcnJvclR5cGVzW2Vyck51bV1dID0gZXJyTnVtO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNZWRpYUVycm9yO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL01lZGlhRXJyb3IuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIFBsYXlDb250cm9sLmpzXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9Db250cm9sJztcblxuLyoqXG4gKiBAY2xhc3MgUGxheUNvbnRyb2xcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBleHRlbmRzIENvbnRyb2xcbiAqL1xuY2xhc3MgUGxheUNvbnRyb2wgZXh0ZW5kcyBDb250cm9sIHtcblx0Y29uc3RydWN0b3IgKHBsYXllciwgb3B0aW9ucz17fSkge1xuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0aWNvbk5hbWUgOiAncGxheScsXG5cdFx0XHR0aXRsZSA6ICfQktC+0YHQv9GA0L7QuNC30LLQtdGB0YLQuCDQstC40LTQtdC+Jyxcblx0XHRcdGNsYXNzTmFtZSA6ICdwbGF5Jyxcblx0XHRcdG5hbWUgOiAncGxheSdcblx0XHR9LCBvcHRpb25zKTtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oXG5cdFx0XHRgcGxheSBwbGF5aW5nIHBhdXNlIGVuZGVkIHNlZWtpbmcgbG9hZHN0YXJ0YCxcblx0XHRcdHRoaXMudXBkYXRlLmJpbmQodGhpcylcblx0XHQpXG5cdH1cblxuXG5cdC8qKlxuXHQgKiBQYXVzZSB0aGUgdmlkZW9cblx0ICovXG5cdHNob3dQbGF5ICgpIHtcblx0XHRpZih0aGlzLmljb24uaWNvbk5hbWUgPT09ICdwbGF5JykgcmV0dXJuO1xuXHRcdHRoaXMuaWNvbi5pY29uTmFtZSA9ICdwbGF5Jztcblx0XHR0aGlzLmVsZW1lbnQuYXR0cigndGl0bGUnLCB0aGlzLm9wdGlvbnMudGl0bGUpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFBsYXkgdGhlIHZpZGVvXG5cdCAqL1xuXHRzaG93UGF1c2UgKCkge1xuXHRcdGlmKHRoaXMuaWNvbi5pY29uTmFtZSA9PT0gJ3BhdXNlJykgcmV0dXJuO1xuXHRcdHRoaXMuaWNvbi5pY29uTmFtZSA9ICdwYXVzZSc7XG5cdFx0dGhpcy5lbGVtZW50LmF0dHIoJ3RpdGxlJywgJ9Cf0L7RgdGC0LDQstC40YLRjCDQvdCwINC/0LDRg9C30YMnKTtcblx0fVxuXG5cdHVwZGF0ZSgpIHtcblx0XHRpZiAodGhpcy5wbGF5ZXIuZW5kZWQpIHtcblx0XHRcdHRoaXMuc2hvd1JlcGxheSgpO1xuXHRcdH0gZWxzZSBpZih0aGlzLnBsYXllci5wYXVzZWQpIHtcblx0XHRcdHRoaXMuc2hvd1BsYXkoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zaG93UGF1c2UoKTtcblx0XHR9XG5cdH1cblxuXHRzaG93UmVwbGF5KCkge1xuXHRcdGlmKHRoaXMuaWNvbi5pY29uTmFtZSA9PT0gJ3JlZnJlc2gnKSByZXR1cm47XG5cdFx0aWYodGhpcy5wbGF5ZXIuZHVyYXRpb24gIT09IEluZmluaXR5KSB7XG5cdFx0XHR0aGlzLl9yZXBsYXkgPSB0cnVlO1xuXHRcdFx0dGhpcy5pY29uLmljb25OYW1lID0gJ3JlZnJlc2gnO1xuXHRcdFx0dGhpcy5lbGVtZW50LmF0dHIoJ3RpdGxlJywgJ9CX0LDQv9GD0YHRgtC40YLRjCDQt9Cw0L3QvtCy0L4nKVxuXHRcdH1cblx0fVxuXG5cdHJlbW92ZVJlcGxheSgpIHtcblx0XHRpZighdGhpcy5fcmVwbGF5KSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMuX3JlcGxheSA9IGZhbHNlO1xuXG5cdFx0aWYodGhpcy5wbGF5ZXIudmlkZW8ucGF1c2VkKSB7XG5cdFx0XHR0aGlzLnNob3dQbGF5KCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2hvd1BhdXNlKCk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0b25DbGljayhlKSB7XG5cdFx0dGhpcy5wbGF5ZXIudmlkZW8udG9nZ2xlUGxheSgpO1xuXHR9XG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnUGxheUNvbnRyb2wnLCBQbGF5Q29udHJvbCk7XG5Db250cm9sLnJlZ2lzdGVyQ29udHJvbCgncGxheScsIFBsYXlDb250cm9sKTtcbmV4cG9ydCBkZWZhdWx0IFBsYXlDb250cm9sO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvUGxheUNvbnRyb2wuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIFZvbHVtZUNvbnRyb2wuanNcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL0NvbnRyb2wnO1xuaW1wb3J0IENvbnRyb2xEcm9wZG93biBmcm9tICcuL0NvbnRyb2xEcm9wZG93bic7XG5pbXBvcnQgeyBJU19BTkRST0lEX1BIT05FIH0gZnJvbSAnLi4vdXRpbHMvYnJvd3Nlcic7XG5cblxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAY2xhc3MgVm9sdW1lQ29udHJvbFxuICogQGV4dGVuZHMgQ29udHJvbERyb3Bkb3duXG4gKi9cbmNsYXNzIFZvbHVtZUNvbnRyb2wgZXh0ZW5kcyBDb250cm9sRHJvcGRvd24ge1xuXG5cdGNvbnN0cnVjdG9yIChwbGF5ZXIsIG9wdGlvbnM9e30pIHtcblx0XHRvcHRpb25zID0gJC5leHRlbmQoe30sIHtcblx0XHRcdGljb25OYW1lIDogJ3ZvbHVtZS1kb3duJyxcblx0XHRcdGNsYXNzTmFtZSA6ICd2b2x1bWUtY29udHJvbCcsXG5cdFx0XHRuYW1lIDogJ3ZvbHVtZSdcblx0XHR9LCBvcHRpb25zKTtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXG5cdFx0aWYoIXBsYXllci52aWRlby5mZWF0dXJlQ29udHJvbFZvbHVtZSB8fCBJU19BTkRST0lEX1BIT05FKSB7XG5cdFx0XHR0aGlzLmVsZW1lbnQuaGlkZSgpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMucGxheWVyLm9uKCd2b2x1bWVjaGFuZ2UnLCAoZSwgZGF0YSkgPT4ge1xuXHRcdFx0Y29uc3QgdmlkZW8gPSB0aGlzLnBsYXllci52aWRlbztcblx0XHRcdHRoaXMudmFsdWUgPSB2aWRlby5tdXRlZCA/IDAgOiB2aWRlby52b2x1bWU7XG5cdFx0fSlcblx0fVxuXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0c3VwZXIuY3JlYXRlRWxlbWVudCgpO1xuXHRcdGxldCBkcmFnID0gZmFsc2U7XG5cdFx0Y29uc3QgdmlkZW8gPSB0aGlzLnBsYXllci52aWRlbztcblxuXHRcdHRoaXMubWFya2VyID0gJCgnPGRpdi8+JykuYWRkQ2xhc3MoJ3ZvbHVtZS1tYXJrZXInKTtcblxuXHRcdHRoaXMuYWN0aXZlID0gJCgnPGRpdi8+JykuYWRkQ2xhc3MoJ3ZvbHVtZS1hY3RpdmUnKTtcblxuXHRcdHRoaXMubGluZSA9ICQoJzxkaXYvPicpXG5cdFx0XHQuYWRkQ2xhc3MoJ3ZvbHVtZS1saW5lJylcblx0XHRcdC5hcHBlbmQodGhpcy5hY3RpdmUpXG5cdFx0XHQuYXBwZW5kKHRoaXMubWFya2VyKVxuXHRcdFx0Lm9uKCdjbGljaycsIChlKSA9PiB7XG5cdFx0XHRcdGlmIChkcmFnKSByZXR1cm47XG5cdFx0XHRcdGxldCBwID0gdGhpcy5nZXRQb3NpdGlvbihlLnBhZ2VZKTtcblx0XHRcdFx0aWYgKHAgPj0gMCAmJiBwIDw9IDEpIHtcblx0XHRcdFx0XHRpZih2aWRlby5tdXRlZCkge1xuXHRcdFx0XHRcdFx0dmlkZW8ubXV0ZWQgPSBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dmlkZW8udm9sdW1lID0gMSAtIHA7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5kcm9wZG93bkNvbnRlbnRcblx0XHRcdC5hZGRDbGFzcygndm9sdW1lLXNsaWRlcicpXG5cdFx0XHQuYXBwZW5kKHRoaXMubGluZSk7XG5cblx0XHR0aGlzLmljb24uZWxlbWVudC5hdHRyKCd0aXRsZScsICfQntGC0LrQu9GO0YfQuNGC0Ywg0LfQstGD0LonKTtcblxuXHRcdHRoaXMubWFya2VyLm9uKCdtb3VzZWRvd24nLCAoZSkgPT4ge1xuXHRcdFx0aWYgKGUud2hpY2ggIT09IDEpIHJldHVybjtcblx0XHRcdGRyYWcgPSB0cnVlO1xuXHRcdH0pO1xuXG5cdFx0JChkb2N1bWVudCkub24oe1xuXHRcdFx0bW91c2Vtb3ZlIDogKGUpID0+IHtcblx0XHRcdFx0aWYgKCFkcmFnKSByZXR1cm47XG5cdFx0XHRcdGxldCBwID0gdGhpcy5nZXRQb3NpdGlvbihlLnBhZ2VZKTtcblx0XHRcdFx0aWYgKHAgPj0gMCAmJiBwIDw9IDEpIHtcblx0XHRcdFx0XHRpZih2aWRlby5tdXRlZCkge1xuXHRcdFx0XHRcdFx0dmlkZW8ubXV0ZWQgPSBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dmlkZW8udm9sdW1lID0gMSAtIHBcblx0XHRcdFx0fVxuXHRcdFx0fSxcblxuXHRcdFx0bW91c2V1cCA6IChlKSA9PiB7XG5cdFx0XHRcdGRyYWcgPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50O1xuXHR9XG5cblxuXHRzZXQgdmFsdWUgKHZhbHVlKSB7XG5cdFx0dGhpcy5pY29uLmljb25OYW1lID0gdGhpcy5wbGF5ZXIuY2FsY1ZvbHVtZUljb24odmFsdWUpO1xuXG5cdFx0bGV0IHAgPSBNYXRoLnJvdW5kKHZhbHVlICogMTAwKS50b1N0cmluZygpICsgJyUnO1xuXHRcdHRoaXMuYWN0aXZlLmNzcygnaGVpZ2h0JywgcCk7XG5cdFx0dGhpcy5tYXJrZXIuY3NzKCdib3R0b20nLCBwKTtcblx0fVxuXG5cdHRvZ2dsZU11dGVkICgpIHtcblx0XHRjb25zdCB7IHZpZGVvIH0gPSB0aGlzLnBsYXllcjtcblxuXHRcdHZpZGVvLm11dGVkID0gIXZpZGVvLm11dGVkO1xuXHR9XG5cblx0Z2V0UG9zaXRpb24gKHkpIHtcblx0XHRyZXR1cm4gKHkgLSB0aGlzLmxpbmUub2Zmc2V0KCkudG9wKSAvIHRoaXMubGluZS5oZWlnaHQoKTtcblx0fVxuXG5cdG9uQ2xpY2sgKGUpIHtcblx0XHRzdXBlci5vbkNsaWNrKGUpO1xuXHRcdC8vdG9kbzogbGVhX2FsZXgga29zdGlsJ1xuXHRcdGlmIChlLnRhcmdldCA9PT0gdGhpcy5pY29uLmVsZW1lbnRbMF0pe1xuXHRcdFx0dGhpcy50b2dnbGVNdXRlZCgpO1xuXHRcdH1cblxuXHR9XG5cblx0b25QbGF5ZXJJbml0ZWQoKSB7XG5cdFx0aWYoIXRoaXMucGxheWVyLnZpZGVvLmZlYXR1cmVDb250cm9sVm9sdW1lKSB7XG5cdFx0XHR0aGlzLmVsZW1lbnQuaGlkZSgpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0aGlzLnZhbHVlID0gdGhpcy5wbGF5ZXIudmlkZW8uZGVmYXVsdFZvbHVtZTtcblx0fVxuXG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnVm9sdW1lQ29udHJvbCcsIFZvbHVtZUNvbnRyb2wpO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ3ZvbHVtZScsIFZvbHVtZUNvbnRyb2wpO1xuZXhwb3J0IGRlZmF1bHQgVm9sdW1lQ29udHJvbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL1ZvbHVtZUNvbnRyb2wuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIENvbnRyb2xEcm9wZG93bi5qc1xuICovXG5cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb250cm9sIGZyb20gJy4vQ29udHJvbCc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCB7IElTX01PQklMRSB9IGZyb20gJy4uL3V0aWxzL2Jyb3dzZXInO1xuXG4vKipcbiAqIEBjbGFzcyBDb250cm9sRHJvcGRvd25cbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEBwcm9wZXJ0eSB7alF1ZXJ5fSBkcm9wZG93bkNvbnRlbnQgQ29udGVudCBvZiBwb3B1cFxuICogQGV4dGVuZHMgQ29udHJvbFxuICovXG5jbGFzcyBDb250cm9sRHJvcGRvd24gZXh0ZW5kcyBDb250cm9sIHtcblxuXHRjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnM9e30pIHtcblx0XHRvcHRpb25zID0gJC5leHRlbmQoe30sIHtcblx0XHRcdHRhZyA6ICdkaXYnLFxuXHRcdH0sIG9wdGlvbnMpO1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cdFx0dGhpcy5fb3BlbmVkID0gZmFsc2U7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdtb3VzZWVudGVyJywgdGhpcy5vcGVuLmJpbmQodGhpcykpO1xuXHRcdHRoaXMuZWxlbWVudC5vbignbW91c2VsZWF2ZScsIHRoaXMuY2xvc2UuYmluZCh0aGlzKSk7XG5cdFx0aWYoSVNfTU9CSUxFKSB7XG5cdFx0XHR0aGlzLmVsZW1lbnQub24oJ3RhcCcsIHRoaXMudG9nZ2xlLmJpbmQodGhpcykpO1xuXHRcdFx0JChkb2N1bWVudCkub24oJ3RvdWNoZW5kIHRvdWNoc3RhcnQgY2xpY2snLCB0aGlzLm9uRG9jdW1lbnRFdmVudHMuYmluZCh0aGlzKSk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHRzdXBlci5jcmVhdGVFbGVtZW50KCk7XG5cdFx0dGhpcy5kcm9wZG93bkNvbnRlbnQgPSAkKCc8ZGl2IC8+JykuYWRkQ2xhc3MoJ2NvbnRyb2wtZHJvcGRvd25fX2NvbnRlbnQnKTtcblx0XHR0aGlzLmVsZW1lbnQuYXBwZW5kKHRoaXMuZHJvcGRvd25Db250ZW50KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGJ1aWxkQ1NTQ2xhc3MoKSB7XG5cdFx0cmV0dXJuIGBjb250cm9sLWRyb3Bkb3duICR7c3VwZXIuYnVpbGRDU1NDbGFzcygpfWBcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdG9uQ2xpY2soZSkge1xuXHRcdGlmKCQoZS50YXJnZXQpLmNsb3Nlc3QodGhpcy5kcm9wZG93bkNvbnRlbnQpLmxlbmd0aCA+IDApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRzdXBlci5vbkNsaWNrKGUpO1xuXHR9XG5cblx0dG9nZ2xlKCkge1xuXHRcdGlmKHRoaXMuZGlzYWJsZSkgdHJ1ZTtcblx0XHRpZih0aGlzLl9vcGVuZWQpIHtcblx0XHRcdHRoaXMuY2xvc2UoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5vcGVuKCk7XG5cdFx0fVxuXHR9XG5cblx0b3BlbigpIHtcblx0XHRpZih0aGlzLmRpc2FibGUpIHJldHVybjtcblx0XHR0aGlzLl9vcGVuZWQgPSB0cnVlO1xuXHRcdHRoaXMuZHJvcGRvd25Db250ZW50LnNob3coKTtcblx0fVxuXG5cdGNsb3NlKCkge1xuXHRcdGlmKHRoaXMuZGlzYWJsZSkgcmV0dXJuO1xuXHRcdHRoaXMuX29wZW5lZCA9IGZhbHNlO1xuXHRcdHRoaXMuZHJvcGRvd25Db250ZW50LmhpZGUoKTtcblx0fVxuXG5cdG9uRG9jdW1lbnRFdmVudHMoZSkge1xuXHRcdGlmKFxuXHRcdFx0ISgkKGUudGFyZ2V0KS5jbG9zZXN0KHRoaXMuZWxlbWVudCkubGVuZ3RoID4gMCkgJiZcblx0XHRcdCEoJChlLnRhcmdldCkuY2xvc2VzdCh0aGlzLmRyb3Bkb3duQ29udGVudCkubGVuZ3RoID4gMClcblx0XHQpIHtcblx0XHRcdGlmKHRoaXMuX29wZW5lZCl7XG5cdFx0XHRcdHRoaXMuY2xvc2UoKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ0NvbnRyb2xEcm9wZG93bicsIENvbnRyb2xEcm9wZG93bik7XG5Db250cm9sLnJlZ2lzdGVyQ29udHJvbCgnZHJvcGRvd24nLCBDb250cm9sRHJvcGRvd24pO1xuZXhwb3J0IGRlZmF1bHQgQ29udHJvbERyb3Bkb3duO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvQ29udHJvbERyb3Bkb3duLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBUaW1lbGluZUNvbnRyb2wuanNcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9Db21wb25lbnQnO1xuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi4vQ29udHJvbCc7XG5pbXBvcnQgQ29udHJvbFRleHQgZnJvbSAnLi4vQ29udHJvbFRleHQnO1xuaW1wb3J0IEJ1ZmZlcmVkUmFuZ2VzIGZyb20gJy4vQnVmZmVyZWRSYW5nZXMnO1xuaW1wb3J0IE1hcmtlciBmcm9tICcuL01hcmtlcic7XG5pbXBvcnQgeyBzZWNvbmRzVG9UaW1lIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBjbGFzcyBUaW1lbGluZUNvbnRyb2xcbiAqIEBwcm9wZXJ0eSB7Q29udHJvbFRleHR9IGN1cnJlbnRUaW1lIEN1cnJlbnQgdGltZSdzIHRleHRcbiAqIEBwcm9wZXJ0eSB7Q29udHJvbFRleHR9IHRvdGFsVGltZSBUb3RhbCB0aW1lXG4gKiBAcHJvcGVydHkge2pRdWVyeX0gbGluZVxuICogQGV4dGVuZHMgQ29udHJvbFxuICovXG5jbGFzcyBUaW1lbGluZUNvbnRyb2wgZXh0ZW5kcyBDb250cm9sIHtcblxuXHRjb25zdHJ1Y3RvciAocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRuYW1lIDogJ3RpbWVsaW5lJyxcblx0XHRcdGNsYXNzTmFtZSA6ICdjb250cm9sLXRpbWVsaW5lIHRpbWVsaW5lLWNvbnRhaW5lcicsXG5cdFx0XHR0YWcgOiAnZGl2Jyxcblx0XHR9LCBvcHRpb25zKTtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXG5cblx0XHR0aGlzLm1hcmtlci5lbGVtZW50Lm9uKCdsZXBsYXllcl9tb3VzZW1vdmUnLCB0aGlzLl9vbk1hcmtlck1vdXNlbW92ZS5iaW5kKHRoaXMpKTtcblxuXHRcdHRoaXMubWFya2VyLmVsZW1lbnQub24oJ2xlcGxheWVyX21vdXNlZG93bicsIHRoaXMuX29uTWFya2VyTW91c2Vkb3duLmJpbmQodGhpcykpO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ3NlY3Rpb25zaW5pdCcsIHRoaXMub25TZWN0aW9uc0luaXQuYmluZCh0aGlzKSk7XG5cblx0XHR0aGlzLnBsYXllci5vbigndGltZXVwZGF0ZScsIHRoaXMuX29uVGltZVVwZGF0ZS5iaW5kKHRoaXMpKTtcblxuXHRcdC8vIHRoaXMucGxheWVyLm9uKCd0aW1ldXBkYXRlbG9hZCcsIHRoaXMuX29uVGltZVVwZGF0ZS5iaW5kKHRoaXMpKVxuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ2R1cmF0aW9uY2hhbmdlJywgdGhpcy5fb25EdXJhdGlvbkNoYW5nZS5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdF9vbk1hcmtlck1vdXNlZG93bihlKSB7XG5cdFx0dGhpcy5tYXJrZXJTaGFkb3cuZWxlbWVudC5oaWRlKCk7XG5cdH1cblxuXHRfb25NYXJrZXJNb3VzZW1vdmUoZSwgZGF0YSkge1xuXHRcdGNvbnN0IHggPSBkYXRhLng7XG5cdFx0Y29uc3QgcCA9IHRoaXMuZ2V0UG9zaXRpb24oeCk7XG5cdFx0Y29uc3QgdmlkZW8gPSB0aGlzLnBsYXllci52aWRlbztcblx0XHRpZiAocCA+IDAgJiYgcCA8IDEpIHtcblx0XHRcdHRoaXMubWFya2VyLm1hcmtlclRpbWVcblx0XHRcdFx0LnNob3coKVxuXHRcdFx0XHQuaHRtbChzZWNvbmRzVG9UaW1lKHZpZGVvLmR1cmF0aW9uICogcCkpO1xuXHRcdFx0Ly8gdmlkZW8uY3VycmVudFRpbWUgPSB2aWRlby5kdXJhdGlvbiAqIHBcblx0XHR9XG5cdH1cblxuXHRfb25UaW1lVXBkYXRlKGUsIGRhdGEpIHtcblx0XHRjb25zdCBkdXJhdGlvbiA9IHRoaXMucGxheWVyLnZpZGVvLmR1cmF0aW9uO1xuXHRcdGxldCBjdXJyZW50VGltZSA9IHRoaXMucGxheWVyLmN1cnJlbnRUaW1lO1xuXHRcdGlmKGRhdGEgJiYgZGF0YS5jdXJyZW50VGltZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRjdXJyZW50VGltZSA9IGRhdGEuY3VycmVudFRpbWU7XG5cdFx0fVxuXHRcdGxldCBwZXJjZW50ID0gY3VycmVudFRpbWUgLyBkdXJhdGlvbjtcblxuXHRcdGlmKGlzTmFOKGR1cmF0aW9uKSAmJiBjdXJyZW50VGltZSA9PT0gMCkgcGVyY2VudCA9IDA7XG5cblx0XHR0aGlzLm1vdmUoeyBwZXJjZW50LCBjdXJyZW50VGltZSB9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0c3VwZXIuY3JlYXRlRWxlbWVudCgpO1xuXHRcdGxldCB2aWRlbyA9IHRoaXMucGxheWVyLnZpZGVvO1xuXG5cdFx0dGhpcy5kcmFnID0gZmFsc2U7XG5cblx0XHQvLyBDcmVhdGUgbGFiZWxzXG5cdFx0dGhpcy5jdXJyZW50VGltZSA9IG5ldyBDb250cm9sVGV4dCh0aGlzLnBsYXllciwgeyBjbGFzc05hbWUgOiAndGltZS1jdXJyZW50JyB9KTtcblx0XHR0aGlzLmN1cnJlbnRUaW1lLnRleHQgPSAnMDA6MDAnO1xuXHRcdHRoaXMudG90YWxUaW1lID0gbmV3IENvbnRyb2xUZXh0KHRoaXMucGxheWVyLCB7Y2xhc3NOYW1lIDogJ3RpbWUtdG90YWwnIH0pO1xuXG5cdFx0Ly8gQ3JlYXRlIGxpbmUgd2l0aCBtYXJrZXJzIGFuZCBwbGF5ZWQgcmFuZ2VcblxuXHRcdHRoaXMubWFya2VyID0gbmV3IE1hcmtlcih0aGlzLnBsYXllciwge1xuXHRcdFx0ZHJhZyA6IHRydWVcblx0XHR9KTtcblxuXHRcdHRoaXMubWFya2VyU2hhZG93ID0gbmV3IE1hcmtlcih0aGlzLnBsYXllciwge1xuXHRcdFx0Y2xhc3NOYW1lIDogJ3NoYWRvdydcblx0XHR9KTtcblx0XHR0aGlzLm1hcmtlclNoYWRvdy5lbGVtZW50LmhpZGUoKTtcblxuXG5cdFx0Ly8gUGxheWVkIHJhbmdlc1xuXHRcdHRoaXMucGxheWVkUmFuZ2VzID0gJCgnPGRpdiAvPicpLmFkZENsYXNzKCd0aW1lLXBsYXllZCcpO1xuXG5cblx0XHQvLyBCdWZmZXJlZCByYW5nZXNcblx0XHR0aGlzLmJ1ZmZlcmVkUmFuZ2VzID0gbmV3IEJ1ZmZlcmVkUmFuZ2VzKHRoaXMucGxheWVyKS5lbGVtZW50O1xuXG5cdFx0dGhpcy5saW5lID0gJCgnPGRpdiAvPicpO1xuXHRcdHRoaXMuZW1pdFRhcEV2ZW50cyh0aGlzLmxpbmUpXG5cblx0XHR0aGlzLmxpbmVcblx0XHRcdC5hZGRDbGFzcygndGltZWxpbmUnKVxuXHRcdFx0LmFwcGVuZCh0aGlzLm1hcmtlci5lbGVtZW50KVxuXHRcdFx0LmFwcGVuZCh0aGlzLm1hcmtlclNoYWRvdy5lbGVtZW50KVxuXHRcdFx0LmFwcGVuZCh0aGlzLnBsYXllZFJhbmdlcylcblx0XHRcdC5hcHBlbmQodGhpcy5idWZmZXJlZFJhbmdlcylcblx0XHRcdC5vbih7XG5cdFx0XHRcdG1vdXNlbW92ZSA6IChlKSA9PiB7XG5cdFx0XHRcdFx0aWYgKHRoaXMubWFya2VyLmRyYWcpIHJldHVybjtcblxuXHRcdFx0XHRcdGxldCBwID0gdGhpcy5nZXRQb3NpdGlvbihlLnBhZ2VYKTtcblx0XHRcdFx0XHRpZiAocCA+IDAgJiYgcCA8IDEpIHtcblx0XHRcdFx0XHRcdHRoaXMubWFya2VyU2hhZG93LmVsZW1lbnRcblx0XHRcdFx0XHRcdFx0LnNob3coKVxuXHRcdFx0XHRcdFx0XHQuY3NzKCdsZWZ0JywgcCAqIDEwMCArICclJyk7XG5cdFx0XHRcdFx0XHR0aGlzLm1hcmtlclNoYWRvd1xuXHRcdFx0XHRcdFx0XHQubWFya2VyVGltZVxuXHRcdFx0XHRcdFx0XHQuc2hvdygpXG5cdFx0XHRcdFx0XHRcdC5odG1sKHNlY29uZHNUb1RpbWUodmlkZW8uZHVyYXRpb24gKiBwKSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRoaXMubWFya2VyU2hhZG93LmVsZW1lbnQuaGlkZSgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblxuXHRcdFx0XHRtb3VzZWxlYXZlIDogKGUpID0+IHtcblx0XHRcdFx0XHRpZiAodGhpcy5kcmFnKSByZXR1cm47XG5cdFx0XHRcdFx0dGhpcy5tYXJrZXJTaGFkb3cuZWxlbWVudC5oaWRlKClcblx0XHRcdFx0fSxcblxuXHRcdFx0XHRtb3VzZWRvd24gOiAoZSkgPT4ge1xuXHRcdFx0XHR9LFxuXG5cdFx0XHRcdGNsaWNrIDogdGhpcy5fb25MaW5lQ2xpY2suYmluZCh0aGlzKSxcblx0XHRcdFx0dGFwIDogdGhpcy5fb25MaW5lQ2xpY2suYmluZCh0aGlzKSxcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5lbGVtZW50LmFkZENsYXNzKCd0aW1lbGluZS1jb250YWluZXInKVxuXHRcdFx0LmFwcGVuZCgkKCc8ZGl2IC8+Jylcblx0XHRcdFx0LmFkZENsYXNzKCd0aW1lbGluZS1zdWJjb250YWluZXInKVxuXHRcdFx0XHQuYXBwZW5kKHRoaXMuY3VycmVudFRpbWUuZWxlbWVudClcblx0XHRcdFx0LmFwcGVuZCh0aGlzLmxpbmUpXG5cdFx0XHRcdC5hcHBlbmQodGhpcy50b3RhbFRpbWUuZWxlbWVudCkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0b25DbGljayhlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHR9XG5cblx0X29uTGluZUNsaWNrKGUpIHtcblx0XHRpZiAodGhpcy5kcmFnKSByZXR1cm47XG5cdFx0Y29uc3QgdmlkZW8gPSB0aGlzLnBsYXllci52aWRlbztcblx0XHR0aGlzLm1vdmUoeyBwZXJjZW50IDogdGhpcy5nZXRQb3NpdGlvbihlLnBhZ2VYKX0pO1xuXHRcdHZpZGVvLmN1cnJlbnRUaW1lID0gKHZpZGVvLmR1cmF0aW9uICogdGhpcy5nZXRQb3NpdGlvbihlLnBhZ2VYKSk7XG5cdH1cblxuXHRvblNlY3Rpb25zSW5pdChlKSB7XG5cdFx0Y29uc3QgZHVyYXRpb24gPSB0aGlzLnBsYXllci52aWRlby5kdXJhdGlvbjtcblx0XHRpZihpc05hTihkdXJhdGlvbikpIHtcblx0XHRcdHJldHVyblxuXHRcdH1cblx0XHRpZiAodGhpcy5wbGF5ZXIuc2VjdGlvbnMpIHtcblx0XHRcdHRoaXMudXBkYXRlU2VjdGlvblJhbmdlcyh0aGlzLnBsYXllci5zZWN0aW9ucy5pdGVtcyk7XG5cdFx0fVxuXHR9XG5cblx0dXBkYXRlU2VjdGlvblJhbmdlcyhpdGVtcykge1xuXHRcdGlmKHRoaXMuc2VjdGlvbnMgPT0gbnVsbCB8fCB0aGlzLnNlY3Rpb25zLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0dGhpcy5zZWN0aW9ucyA9IHRoaXMuY3JlYXRlU2VjdGlvblJhbmdlcyhpdGVtcyk7XG5cdFx0XHR0aGlzLmxpbmUuYXBwZW5kKHRoaXMuc2VjdGlvbnMpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnNlY3Rpb25zLmh0bWwodGhpcy5jcmVhdGVTZWN0aW9uUmFuZ2VzKGl0ZW1zKSk7XG5cdFx0fVxuXHR9XG5cblx0Y3JlYXRlU2VjdGlvblJhbmdlcyhpdGVtcykge1xuXHRcdGNvbnN0IGR1cmF0aW9uID0gdGhpcy5wbGF5ZXIudmlkZW8uZHVyYXRpb247XG5cdFx0bGV0IHJlc3VsdCA9ICQoJzxkaXYgLz4nKS5hZGRDbGFzcygnbGVwbGF5ZXItdGltZWxpbmUtc2VjdGlvbnMnKTtcblx0XHRpdGVtcy5mb3JFYWNoKChzZWN0aW9uKSA9PiB7XG5cdFx0XHRjb25zdCBsZW5ndGggPSAoc2VjdGlvbi5lbmQgLSBzZWN0aW9uLmJlZ2luKTtcblx0XHRcdGNvbnN0IGl0ZW0gPSAkKCc8ZGl2IC8+Jylcblx0XHRcdFx0LmFkZENsYXNzKCdsZXBsYXllci10aW1lbGluZS1zZWN0aW9uJylcblx0XHRcdFx0LmNzcyh7XG5cdFx0XHRcdFx0d2lkdGggOiBsZW5ndGggLyBkdXJhdGlvbiAqIDEwMCArICclJyxcblx0XHRcdFx0XHRsZWZ0IDogc2VjdGlvbi5iZWdpbiAvIGR1cmF0aW9uICogMTAwICsgJyUnXG5cdFx0XHRcdH0pO1xuXHRcdFx0cmVzdWx0LmFwcGVuZChpdGVtKTtcblx0XHR9KVxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblxuXHRnZXRQb3NpdGlvbiAoeCkge1xuXHRcdHJldHVybiAoeCAtIHRoaXMubGluZS5vZmZzZXQoKS5sZWZ0KSAvIHRoaXMubGluZS53aWR0aCgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIE1vdmUgbWFya2VyIG9uIHRpbWVsaW5lIG9uIHBlcmNlbnQgZnJvbSBhcmd1bWVudCwgbm90IGZyb20gdmlkZW8uY3VycmVudFRpbWVcblx0ICogQHBhcmFtIHtOdW1iZXJ9IHBlcmNlbnQgVGhlIHBlcmNlbnQgd2hpY2ggeW91IHdhbnQgdG8gbW92ZSBtYXJrZXIgb24gdGltZWxpbmVcblx0ICovXG5cdG1vdmUgKHsgcGVyY2VudCwgY3VycmVudFRpbWUgfSkge1xuXHRcdGlmKGN1cnJlbnRUaW1lID09PSB1bmRlZmluZWQpIHtcblx0XHRcdGN1cnJlbnRUaW1lID0gdGhpcy5wbGF5ZXIudmlkZW8uZHVyYXRpb24gKiBwZXJjZW50O1xuXHRcdH1cblxuXHRcdGlmKGlzTmFOKGN1cnJlbnRUaW1lKSkgcmV0dXJuO1xuXHRcdHBlcmNlbnQgPSBwZXJjZW50ICogMTAwO1xuXHRcdHRoaXMubWFya2VyLmVsZW1lbnQuY3NzKCdsZWZ0JywgcGVyY2VudCArICclJyk7XG5cdFx0dGhpcy5wbGF5ZWRSYW5nZXMuY3NzKCd3aWR0aCcsIHBlcmNlbnQgKyAnJScpO1xuXHRcdHRoaXMuY3VycmVudFRpbWUudGV4dCA9IHNlY29uZHNUb1RpbWUoY3VycmVudFRpbWUpO1xuXHR9XG5cblx0dXBkYXRlTGFiZWxzKCkge1xuXHRcdGNvbnN0IHZpZGVvID0gdGhpcy5wbGF5ZXIudmlkZW87XG5cdFx0dGhpcy50b3RhbFRpbWUudGV4dCA9IHNlY29uZHNUb1RpbWUoMCwgTWF0aC5mbG9vcih2aWRlby5kdXJhdGlvbiAvIDM2MDApID4gMCk7XG5cblx0XHQvLyBjb25zdCB3aWR0aCA9IHRoaXMudG90YWxUaW1lLmVsZW1lbnQud2lkdGgoKTtcblxuXHRcdHRoaXMudG90YWxUaW1lLnRleHQgPSBzZWNvbmRzVG9UaW1lKHZpZGVvLmR1cmF0aW9uKTtcblx0XHR0aGlzLmN1cnJlbnRUaW1lLnRleHQgPSBzZWNvbmRzVG9UaW1lKHZpZGVvLmN1cnJlbnRUaW1lIHx8IDApO1xuXHRcdC8vIHRoaXMuY3VycmVudFRpbWUuZWxlbWVudC5jc3Moe1xuXHRcdC8vIFx0d2lkdGhcblx0XHQvLyB9KVxuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0b25QbGF5ZXJJbml0ZWQoZSkge1xuXHRcdHRoaXMudXBkYXRlTGFiZWxzKCk7XG5cdFx0aWYgKHRoaXMucGxheWVyLnNlY3Rpb25zKSB7XG5cdFx0XHR0aGlzLnVwZGF0ZVNlY3Rpb25SYW5nZXModGhpcy5wbGF5ZXIuc2VjdGlvbnMuaXRlbXMpO1xuXHRcdH1cblx0fVxuXG5cdF9pbml0V2F0Y2hCdWZmZXIgKCkge1xuXHRcdGNsZWFySW50ZXJ2YWwodGhpcy53YXRjaEJ1ZmZlckludGVydmFsKTtcblx0XHRsZXQgdmlkZW8gPSB0aGlzLnBsYXllci52aWRlbztcblx0XHRsZXQgdXBkYXRlUHJvZ3Jlc3NCYXIgPSAoKSA9PiB7XG5cdFx0XHRjb25zdCBFTkQgPSAxO1xuXHRcdFx0Y29uc3QgU1RBUlQgPSAwO1xuXHRcdFx0bGV0IHJlc3VsdCA9ICQoJycpO1xuXHRcdFx0dmlkZW8ubG9hZGVkLmZvckVhY2goaXRlbSA9PiB7XG5cdFx0XHRcdGxldCBkb21JdGVtID0gJCgnPGRpdiAvPicpLmFkZENsYXNzKCd0aW1lLWJ1ZmZlcmVkJyk7XG5cdFx0XHRcdGRvbUl0ZW0uY3NzKHtcblx0XHRcdFx0XHRsZWZ0IDogaXRlbVtTVEFSVF0gKiAxMDAgKyAnJScsXG5cdFx0XHRcdFx0d2lkdGggOiAoaXRlbVtFTkRdIC0gaXRlbVtTVEFSVF0pICogMTAwICsgJyUnXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRyZXN1bHQgPSByZXN1bHQuYWRkKGRvbUl0ZW0pO1xuXHRcdFx0fSk7XG5cdFx0XHR0aGlzLmJ1ZmZlcmVkLmh0bWwocmVzdWx0KTtcblx0XHRcdGlmICh2aWRlby5sb2FkZWQubGVuZ3RoICYmICgxIC0gdmlkZW8ubG9hZGVkU2l6ZSkgPD0gMC4wNSkge1xuXHRcdFx0XHRjbGVhckludGVydmFsKHRoaXMud2F0Y2hCdWZmZXJJbnRlcnZhbCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHRoaXMud2F0Y2hCdWZmZXJJbnRlcnZhbCA9IHNldEludGVydmFsKHVwZGF0ZVByb2dyZXNzQmFyLCA1MDApO1xuXHR9XG5cblx0LyoqXG5cdCAqIE9uIGR1cmF0aW9uY2hhbmdlIGV2ZW50IGhhbmRsZXJcblx0ICovXG5cdF9vbkR1cmF0aW9uQ2hhbmdlICgpIHtcblx0XHR0aGlzLnVwZGF0ZUxhYmVscygpO1xuXHRcdGlmICh0aGlzLnBsYXllci5zZWN0aW9ucykge1xuXHRcdFx0dGhpcy51cGRhdGVTZWN0aW9uUmFuZ2VzKHRoaXMucGxheWVyLnNlY3Rpb25zLml0ZW1zKTtcblx0XHR9XG5cdH1cblxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ1RpbWVsaW5lQ29udHJvbCcsIFRpbWVsaW5lQ29udHJvbCk7XG5Db250cm9sLnJlZ2lzdGVyQ29udHJvbCgndGltZWxpbmUnLCBUaW1lbGluZUNvbnRyb2wpO1xuZXhwb3J0IGRlZmF1bHQgVGltZWxpbmVDb250cm9sO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvVGltZWxpbmUvVGltZWxpbmVDb250cm9sLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBDb250cm9sVGV4dC5qc1xuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL0NvbnRyb2wnO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5cbi8qKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQGNsYXNzIENvbnRyb2xUZXh0XG4gKiBAZXhudGVkcyBDb250cm9sXG4gKi9cbmNsYXNzIENvbnRyb2xUZXh0IGV4dGVuZHMgQ29udHJvbCB7XG5cdGNvbnN0cnVjdG9yIChwbGF5ZXIsIG9wdGlvbnM9e30pIHtcblx0XHRvcHRpb25zID0gJC5leHRlbmQoe30sIHtcblx0XHRcdGNsYXNzTmFtZSA6ICcnLFxuXHRcdFx0dGFnIDogJ2RpdicsXG5cdFx0fSwgb3B0aW9ucyk7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0c3VwZXIuY3JlYXRlRWxlbWVudCgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0YnVpbGRDU1NDbGFzcygpIHtcblx0XHRyZXR1cm4gYGNvbnRyb2wtdGV4dCAke3RoaXMub3B0aW9ucy5jbGFzc05hbWV9YDtcblx0fVxuXG5cblx0LyoqXG5cdCAqIFNldHRlciBvZiB0ZXh0IGZpZWxkXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG5cdCAqL1xuXG5cdHNldCB0ZXh0ICh2YWx1ZSkge1xuXHRcdHRoaXMuX3RleHQgPSB2YWx1ZTtcblx0XHR0aGlzLmVsZW1lbnQuaHRtbCh2YWx1ZSk7XG5cdH1cblxuXHRnZXQgdGV4dCAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3RleHRcblx0fVxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ0NvbnRyb2xUZXh0JywgQ29udHJvbFRleHQpO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ3RleHQnLCBDb250cm9sVGV4dCk7XG5leHBvcnQgZGVmYXVsdCBDb250cm9sVGV4dDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL0NvbnRyb2xUZXh0LmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBCdWZmZXJlZFJhbmdlcy5qc1xuICovXG5cbmltcG9ydCB7IHBlcmNlbnRpZnksIGNyZWF0ZUVsIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9Db21wb25lbnQnO1xuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBjbGFzcyBCdWZmZXJlZFJhbmdlc1xuICogQGV4dGVuZHMgQ29udHJvbFxuICovXG5cbmNsYXNzIEJ1ZmZlcmVkUmFuZ2VzIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ3Byb2dyZXNzJywgdGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5wbGF5ZXIub24oJ3NlZWtlZCcsIHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xuXHRcdHRoaXMucGxheWVyLm9uKCdsb2Fkc3RhcnQnLCB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0dGhpcy5yYW5nZSA9IGNyZWF0ZUVsKCdkaXYnLCB7XG5cdFx0XHRjbGFzc05hbWUgOiAnbGVwbGF5ZXItdGltZWxpbmUtYnVmZmVyZWRfX3JhbmdlJ1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudCA9IGNyZWF0ZUVsKCdkaXYnLCB7XG5cdFx0XHRjbGFzc05hbWUgOiAnbGVwbGF5ZXItdGltZWxpbmUtYnVmZmVyZWQnXG5cdFx0fSkuYXBwZW5kKHRoaXMucmFuZ2UpO1xuXHR9XG5cblxuXHR1cGRhdGUoKSB7XG5cdFx0Y29uc3QgYnVmZmVyZWQgPSB0aGlzLnBsYXllci52aWRlby5idWZmZXJlZDtcblx0XHRjb25zdCBkdXJhdGlvbiA9IHRoaXMucGxheWVyLnZpZGVvLmR1cmF0aW9uO1xuXHRcdGlmKGJ1ZmZlcmVkID09IG51bGwpIHJldHVybjtcblxuXHRcdGxldCBlbmQgPSAwO1xuXHRcdGlmIChidWZmZXJlZC5sZW5ndGggPiAwKSB7XG5cdFx0XHRlbmQgPSBidWZmZXJlZC5lbmQoYnVmZmVyZWQubGVuZ3RoIC0gMSk7XG5cdFx0fVxuXG5cdFx0bGV0IHdpZHRoID0gMDtcblx0XHRpZiAoZHVyYXRpb24gPiAwKSB7XG5cdFx0XHR3aWR0aCA9IHBlcmNlbnRpZnkoZW5kLCBkdXJhdGlvbikgKiAxMDAgKyAnJSdcblx0XHR9XG5cdFx0dGhpcy5yYW5nZS5jc3MoeyB3aWR0aCB9KVxuXHR9XG59XG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ0J1ZmZlcmVkUmFuZ2VzJywgQnVmZmVyZWRSYW5nZXMpO1xuZXhwb3J0IGRlZmF1bHQgQnVmZmVyZWRSYW5nZXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9UaW1lbGluZS9CdWZmZXJlZFJhbmdlcy5qcyIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL0NvbXBvbmVudCc7XG5cbmNsYXNzIE1hcmtlciBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucykge1xuXG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRkcmFnIDogZmFsc2UsXG5cdFx0XHRjbGFzc05hbWUgOiAnJ1xuXHRcdH0sIG9wdGlvbnMpO1xuXG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ21vdXNlZG93bicsIHRoaXMuX29uTW91c2Vkb3duLmJpbmQodGhpcykpO1xuXG5cdFx0JChkb2N1bWVudCkub24oe1xuXG5cdFx0XHRtb3VzZW1vdmUgOiAoZSkgPT4ge1xuXHRcdFx0XHRpZiAoIXRoaXMuZHJhZykgcmV0dXJuO1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQudHJpZ2dlcignbGVwbGF5ZXJfbW91c2Vtb3ZlJywgeyB4IDogZS5wYWdlWCB9KTtcblx0XHRcdH0sXG5cblx0XHRcdG1vdXNldXAgOiAoZSkgPT4ge1xuXHRcdFx0XHRpZiAoIXRoaXMuZHJhZykgcmV0dXJuO1xuXHRcdFx0XHR0aGlzLmRyYWcgPSBmYWxzZTtcblx0XHRcdFx0dGhpcy5tYXJrZXJUaW1lLmhpZGUoKTtcblx0XHRcdFx0dGhpcy5lbGVtZW50LnRyaWdnZXIoJ2xlcGxheWVyX21vdXNldXAnLCB7IHggOiBlLnBhZ2VYIH0pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0c2V0IGRyYWcodmFsdWUpIHtcblx0XHR0aGlzLl9kcmFnID0gdmFsdWU7XG5cdFx0dGhpcy5lbGVtZW50LnRvZ2dsZUNsYXNzKCd0aW1lLW1hcmtlci0tZHJhZycsIHZhbHVlKTtcblx0fVxuXG5cdGdldCBkcmFnKCkge1xuXHRcdHJldHVybiB0aGlzLl9kcmFnO1xuXHR9XG5cblx0X29uTW91c2Vkb3duKGUpIHtcblx0XHRpZiAoZS53aGljaCAhPT0gMSkgcmV0dXJuO1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRpZih0aGlzLm9wdGlvbnMuZHJhZykge1xuXHRcdFx0dGhpcy5kcmFnID0gdHJ1ZTtcblx0XHR9XG5cdFx0dGhpcy5lbGVtZW50LnRyaWdnZXIoJ2xlcGxheWVyX21vdXNlZG93bicpO1xuXHR9XG5cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHQvLyBNYXJrZXIgb2YgY3VycmVudCB0aW1lIG9uIHRpbWVsaW5lXG5cdFx0dGhpcy5tYXJrZXJUaW1lID0gJCgnPGRpdiAvPicpXG5cdFx0XHQuYWRkQ2xhc3MoJ3RpbWUnKVxuXHRcdFx0LmhpZGUoKTtcblxuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQgPSAkKCc8ZGl2IC8+Jylcblx0XHRcdC5hZGRDbGFzcyhgdGltZS1tYXJrZXIgJHt0aGlzLm9wdGlvbnMuY2xhc3NOYW1lfWApXG5cdFx0XHQuYXBwZW5kKHRoaXMubWFya2VyVGltZSlcblxuXHR9XG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnTWFya2VyJywgTWFya2VyKTtcbmV4cG9ydCBkZWZhdWx0IE1hcmtlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL1RpbWVsaW5lL01hcmtlci5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgU2VjdGlvbkNvbnRyb2wuanNcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL0NvbnRyb2wnO1xuaW1wb3J0IENvbnRyb2xDaGVja2JveCBmcm9tICcuL0NvbnRyb2xDaGVja2JveCc7XG5cbi8qKlxuICogQGNsYXNzIFNlY3Rpb25Db250cm9sXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmNoZWNrZWQ9dHJ1ZV1cbiAqIEBleHRlbmRzIENvbnRyb2xDaGVja2JveFxuICovXG5jbGFzcyBTZWN0aW9uQ29udHJvbCBleHRlbmRzIENvbnRyb2xDaGVja2JveCB7XG5cdGNvbnN0cnVjdG9yIChwbGF5ZXIsIG9wdGlvbnM9e30pIHtcblx0XHRvcHRpb25zID0gJC5leHRlbmQoe30sIHtcblx0XHRcdGljb25OYW1lIDogJ2xpc3QtdWwnLFxuXHRcdFx0Y2xhc3NOYW1lIDogJ3NlY3Rpb24nLFxuXHRcdFx0bmFtZSA6ICdzZWN0aW9uJyxcblx0XHRcdHRpdGxlIDogJ9Cf0L7QutCw0LfQsNGC0Ywv0YHQutGA0YvRgtGMINGB0LXQutGG0LjQuCcsXG5cdFx0XHRkaXNhYmxlIDogdHJ1ZVxuXHRcdH0sIG9wdGlvbnMpO1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cblx0XHR0aGlzLnBsYXllci5vbignc2VjdGlvbnNpbml0JywgdGhpcy5fb25TZWN0aW9uc0luaXQuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5wbGF5ZXIub24oJ3NlY3Rpb25zdG9nZ2xlJywgdGhpcy5fb25TZWN0aW9uVG9nZ2xlLmJpbmQodGhpcykpXG5cdH1cblxuXHRvbkNoZWNrZWQoZSwgZGF0YSkge1xuXHRcdHN1cGVyLm9uQ2hlY2tlZChlKTtcblx0XHR0aGlzLnBsYXllci50b2dnbGVTZWN0aW9ucyhkYXRhLmNoZWNrZWQpO1xuXHR9XG5cblx0X29uU2VjdGlvblRvZ2dsZShlLCBkYXRhKSB7XG5cdFx0Y29uc3QgeyBpc1Zpc2libGUgfSA9IGRhdGE7XG5cdFx0aWYodGhpcy5jaGVja2VkICE9PSBpc1Zpc2libGUpIHtcblx0XHRcdHRoaXMuY2hlY2tlZCA9IGlzVmlzaWJsZTtcblx0XHR9XG5cblx0fVxuXG5cdF9vblNlY3Rpb25zSW5pdChlKSB7XG5cdFx0dGhpcy5vcHRpb25zLmRpc2FibGUgPSB0aGlzLmRpc2FibGUgPSBmYWxzZTtcblx0XHR0aGlzLmNoZWNrZWQgPSB0cnVlO1xuXHR9XG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnU2VjdGlvbkNvbnRyb2wnLCBTZWN0aW9uQ29udHJvbCk7XG5Db250cm9sLnJlZ2lzdGVyQ29udHJvbCgnc2VjdGlvbicsIFNlY3Rpb25Db250cm9sKTtcbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb25Db250cm9sO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvU2VjdGlvbkNvbnRyb2wuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIGNvbnRyb2wtY2hlY2tib3guanNcbiAqL1xuXG5cbmltcG9ydCBDb250cm9sIGZyb20gJy4vQ29udHJvbCc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcblxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmNoZWNrZWQ9ZmFsc2VdXG4gKiBAY2xhc3MgQ29udHJvbENoZWNrYm94IFRvZ2dhYmxlIGNvbnRyb2xcbiAqL1xuY2xhc3MgQ29udHJvbENoZWNrYm94IGV4dGVuZHMgQ29udHJvbCB7XG5cblx0Y29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblx0XHR0aGlzLmNoZWNrZWQgPSB0aGlzLm9wdGlvbnMuY2hlY2tlZCB8fCBmYWxzZTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ2xlcGxheWVyX2NoZWNrZWQnLCB0aGlzLm9uQ2hlY2tlZC5iaW5kKHRoaXMpKVxuXHR9XG5cblxuXHQvKipcblx0ICogU2V0dGVyIGZvciBjaGVja2VkIHByb3BlcnR5XG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtib29sZWFufSB2YWxcblx0ICovXG5cdHNldCBjaGVja2VkICh2YWwpIHtcblx0XHRpZiAodGhpcy5kaXNhYmxlKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHZhbCA9ICEhdmFsO1xuXHRcdHRoaXMuX2NoZWNrZWQgPSB2YWxcblx0XHR0aGlzLmVsZW1lbnQudG9nZ2xlQ2xhc3MoJ2NvbnRyb2wtY2hlY2tib3gtLWNoZWNrZWQnLCB2YWwpO1xuXHRcdHRoaXMuZWxlbWVudC50cmlnZ2VyKCdsZXBsYXllcl9jaGVja2VkJywgeyBjaGVja2VkIDogdmFsIH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldHRlciBmb3IgY2hlY2tlZCBwcm9wZXJ5XG5cdCAqIEBwdWJsaWNcblx0ICogQHJldHVybiB7Ym9vbGVhbn1cblx0ICovXG5cdGdldCBjaGVja2VkICgpIHtcblx0XHRyZXR1cm4gdGhpcy5fY2hlY2tlZDtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdG9uQ2xpY2sgKGUpIHtcblx0XHRzdXBlci5vbkNsaWNrKGUpO1xuXHRcdHRoaXMuY2hlY2tlZCA9ICF0aGlzLmNoZWNrZWQ7XG5cdH1cblxuXHQvKipcblx0ICogT24gY2hlY2tlZCBldmVudCBoYW5kbGVyXG5cdCAqXG5cdCAqIEBwYXJhbSB7RXZlbnR9IGVcblx0ICogQHBhcmFtIHtPYmplY3R9IGRhdGFcblx0ICovXG5cdG9uQ2hlY2tlZChlLCBkYXRhKSB7XG5cblx0fVxuXG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0YnVpbGRDU1NDbGFzcygpIHtcblx0XHRyZXR1cm4gYGNvbnRyb2wtY2hlY2tib3ggJHtzdXBlci5idWlsZENTU0NsYXNzKCl9YFxuXHR9XG5cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdDb250cm9sQ2hlY2tib3gnLCBDb250cm9sQ2hlY2tib3gpO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ2NoZWNrYm94JywgQ29udHJvbENoZWNrYm94KTtcbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xDaGVja2JveDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL0NvbnRyb2xDaGVja2JveC5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgRnVsbHNjcmVlbkNvbnRyb2wuanNcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL0NvbnRyb2wnO1xuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBjbGFzcyBGdWxsc2NyZWVuQ29udHJvbFxuICogQGV4dGVuZHMgQ29udHJvbFxuICovXG5jbGFzcyBGdWxsc2NyZWVuQ29udHJvbCBleHRlbmRzIENvbnRyb2wge1xuXHRjb25zdHJ1Y3RvciAocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRpY29uTmFtZSA6ICdhcnJvd3MtYWx0Jyxcblx0XHRcdGNsYXNzTmFtZSA6ICdmdWxsc2NyZWVuJyxcblx0XHRcdHRpdGxlIDogJ9Cg0LDQt9Cy0LXRgNC90YPRgtGML9GB0LLQtdGA0L3Rg9GC0Ywg0L3QsCDQv9C+0LvQvdGL0Lkg0Y3QutGA0LDQvScsXG5cdFx0XHRuYW1lIDogJ2Z1bGxzY3JlZW4nXG5cdFx0fSwgb3B0aW9ucyk7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdG9uQ2xpY2soZSkge1xuXHRcdHN1cGVyLm9uQ2xpY2soZSlcblx0XHR0aGlzLnBsYXllci50b2dnbGVGdWxsc2NyZWVuKCk7XG5cdH1cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdGdWxsc2NyZWVuQ29udHJvbCcsIEZ1bGxzY3JlZW5Db250cm9sKTtcbkNvbnRyb2wucmVnaXN0ZXJDb250cm9sKCdmdWxsc2NyZWVuJywgRnVsbHNjcmVlbkNvbnRyb2wpO1xuZXhwb3J0IGRlZmF1bHQgRnVsbHNjcmVlbkNvbnRyb2w7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9GdWxsc2NyZWVuQ29udHJvbC5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgUmF0ZUNvbnRyb2wuanNcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL0NvbnRyb2wnO1xuaW1wb3J0IENvbnRyb2xUZXh0IGZyb20gJy4vQ29udHJvbFRleHQnO1xuaW1wb3J0IENvb2tpZSBmcm9tICcuLi91dGlscy9jb29raWUnO1xuXG4vKipcbiAqIEBjbGFzcyBSYXRlQ29udHJvbFxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHByb3BlcnR5IHtDb250cm9sfSBkb3duQ29udHJvbCAgRG93biByYXRlIGNvbnRyb2xcbiAqIEBwcm9wZXJ0eSB7Q29udHJvbH0gdXBDb250cm9sICBVcCByYXRlIGNvbnRyb2xcbiAqIEBwcm9wZXJ0eSB7Q29udHJvbFRleHR9IGN1cnJlbnRSYXRlIENvbnRyb2wgb2YgY3V1cmVudCByYXRlXG4gKiBAZXh0ZW5kcyBDb250cm9sXG4gKi9cbmNsYXNzIFJhdGVDb250cm9sIGV4dGVuZHMgQ29udHJvbCB7XG5cdGNvbnN0cnVjdG9yIChwbGF5ZXIsIG9wdGlvbnM9e30pIHtcblx0XHRvcHRpb25zID0gJC5leHRlbmQoe30sIHtcblx0XHRcdGNsYXNzTmFtZSA6ICdjb250cm9sLWNvbnRhaW5lcicsXG5cdFx0XHR0YWcgOiAnZGl2J1xuXHRcdH0sIG9wdGlvbnMpO1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cblx0XHR0aGlzLnBsYXllci5vbigncmF0ZWNoYW5nZScsICgpID0+IHtcblx0XHRcdHRoaXMudXBkYXRlKCk7XG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdHN1cGVyLmNyZWF0ZUVsZW1lbnQoKTtcblx0XHRjb25zdCB2aWRlbyA9IHRoaXMucGxheWVyLnZpZGVvO1xuXG5cdFx0dGhpcy5kb3duQ29udHJvbCA9IG5ldyBDb250cm9sKHRoaXMucGxheWVyLCB7XG5cdFx0XHRjbGFzc05hbWUgOiAncmF0ZS1kb3duJyxcblx0XHRcdG5hbWUgOiAncmF0ZS1kb3duJyxcblx0XHRcdGljb25OYW1lIDogJ2JhY2t3YXJkJyxcblx0XHRcdGNvbGxlY3Rpb24gOiB0aGlzLm9wdGlvbnMuY29sbGVjdGlvbixcblx0XHRcdHRpdGxlIDogJ9Cj0LzQtdC90YzRiNC40YLRjCDRgdC60L7RgNC+0YHRgtGMINC/0YDQvtC40LPRgNGL0LLQsNC90LjRjycsXG5cdFx0XHRvbkNsaWNrIDogZnVuY3Rpb24oZSkge1xuXHRcdFx0XHR2aWRlby5kZWNyZWFzZVJhdGUoKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHRoaXMudXBDb250cm9sID0gbmV3IENvbnRyb2wodGhpcy5wbGF5ZXIsIHtcblx0XHRcdGNsYXNzTmFtZSA6ICdyYXRlLXVwJyxcblx0XHRcdG5hbWUgOiAncmF0ZS11cCcsXG5cdFx0XHRpY29uTmFtZSA6ICdmb3J3YXJkJyxcblx0XHRcdGNvbGxlY3Rpb24gOiB0aGlzLm9wdGlvbnMuY29sbGVjdGlvbixcblx0XHRcdHRpdGxlIDogJ9Cj0LLQtdC70LjRh9C40YLRjCDRgdC60L7RgNC+0YHRgtGMINC/0YDQvtC40LPRgNGL0LLQsNC90LjRjycsXG5cdFx0XHRvbkNsaWNrIDogZnVuY3Rpb24oZSkge1xuXHRcdFx0XHR2aWRlby5pbmNyZWFzZVJhdGUoKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHRoaXMuY3VycmVudFJhdGUgPSBuZXcgQ29udHJvbFRleHQodGhpcy5wbGF5ZXIsIHtcblx0XHRcdGNsYXNzTmFtZSA6ICdyYXRlLWN1cnJlbnQnLFxuXHRcdFx0b25DbGljayA6IGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0dmlkZW8ucmF0ZSA9IHRoaXMucGxheWVyLm9wdGlvbnMucmF0ZS5kZWZhdWx0XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHR0aGlzLmVsZW1lbnRcblx0XHRcdC5hcHBlbmQodGhpcy5kb3duQ29udHJvbC5lbGVtZW50KVxuXHRcdFx0LmFwcGVuZCh0aGlzLmN1cnJlbnRSYXRlLmVsZW1lbnQpXG5cdFx0XHQuYXBwZW5kKHRoaXMudXBDb250cm9sLmVsZW1lbnQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0YnVpbGRDU1NDbGFzcygpIHtcblx0XHRyZXR1cm4gdGhpcy5vcHRpb25zLmNsYXNzTmFtZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdG9uUGxheWVySW5pdGVkKCkge1xuXHRcdHRoaXMudXBkYXRlKCk7XG5cdH1cblxuXHQvKipcblx0ICpcblx0ICovXG5cdG9uQ2xpY2soZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKVxuXHR9XG5cblx0dXBkYXRlKHZhbHVlKSB7XG5cdFx0Y29uc3QgdmlkZW8gPSB0aGlzLnBsYXllci52aWRlbztcblxuXHRcdHZhbHVlID0gdmFsdWUgfHwgdmlkZW8ucmF0ZTtcblx0XHR2YWx1ZSA9IHBhcnNlRmxvYXQodmFsdWUpXG5cdFx0XHQudG9GaXhlZCgyKVxuXHRcdFx0LnRvU3RyaW5nKClcblx0XHRcdC5yZXBsYWNlKC8sL2csICcuJyk7XG5cdFx0dGhpcy5jdXJyZW50UmF0ZS50ZXh0ID0gJ8OXJyArIHZhbHVlO1xuXG5cdFx0aWYodGhpcy5kaXNhYmxlKSByZXR1cm47XG5cblx0XHRpZih2aWRlby5yYXRlIDw9IHZpZGVvLnJhdGVNaW4pIHtcblx0XHRcdHRoaXMuZG93bkNvbnRyb2wuZGlzYWJsZSA9IHRydWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuZG93bkNvbnRyb2wuZGlzYWJsZSA9IGZhbHNlO1xuXHRcdH1cblxuXHRcdGlmKHZpZGVvLnJhdGUgPj0gdmlkZW8ucmF0ZU1heCkge1xuXHRcdFx0dGhpcy51cENvbnRyb2wuZGlzYWJsZSA9IHRydWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMudXBDb250cm9sLmRpc2FibGUgPSBmYWxzZTtcblx0XHR9XG5cdH1cblxuXHRzZXQgZGlzYWJsZSh2YWx1ZSkge1xuXHRcdHRoaXMuX2Rpc2FibGUgPSB2YWx1ZTtcblx0XHR0aGlzLmRvd25Db250cm9sLmRpc2FibGUgPSB2YWx1ZTtcblx0XHR0aGlzLnVwQ29udHJvbC5kaXNhYmxlID0gdmFsdWU7XG5cdH1cblxuXHRpbml0ICgpIHtcblx0XHRsZXQgcmF0ZSA9IENvb2tpZS5nZXQoJ3JhdGUnLCB0aGlzLnBsYXllci5vcHRpb25zLnJhdGUuZGVmYXVsdCk7XG5cdFx0dGhpcy5zaG93KHJhdGUpO1xuXHR9XG5cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdSYXRlQ29udHJvbCcsIFJhdGVDb250cm9sKTtcbkNvbnRyb2wucmVnaXN0ZXJDb250cm9sKCdyYXRlJywgUmF0ZUNvbnRyb2wpO1xuZXhwb3J0IGRlZmF1bHQgUmF0ZUNvbnRyb2w7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9SYXRlQ29udHJvbC5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgQmFja3dhcmRDb250cm9sLmpzXG4gKlxuICogQmFja3dhcmQgY29udHJvbFxuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCBDb250cm9sIGZyb20gJy4vQ29udHJvbCc7XG5cbi8qKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBPcHRpb25zXG4gKiBAY2xhc3MgQmFja3dhcmRDb250cm9sXG4gKiBAZXh0ZW5kcyBDb250cm9sXG4gKi9cbmNsYXNzIEJhY2t3YXJkQ29udHJvbCBleHRlbmRzIENvbnRyb2wge1xuXHRjb25zdHJ1Y3RvciAocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRpY29uTmFtZSA6ICd1bmRvJyxcblx0XHRcdGNsYXNzTmFtZSA6ICdiYWNrd2FyZCcsXG5cdFx0XHRuYW1lIDogJ2JhY2t3YXJkJyxcblx0XHRcdHRpdGxlIDogYNCe0YLQvNC+0YLQsNGC0Ywg0L3QsNC30LDQtCDQvdCwICR7cGxheWVyLm9wdGlvbnMucGxheWJhY2suc3RlcC5tZWRpdW19INGB0LXQutGD0L3QtGAsXG5cdFx0XHRkaXNhYmxlIDogdHJ1ZVxuXHRcdH0sIG9wdGlvbnMpO1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cblx0XHR0aGlzLnBsYXllci5vbignZmlyc3RwbGF5JywgKCkgPT4gdGhpcy5kaXNhYmxlID0gZmFsc2UpXG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRvbkNsaWNrKGUpIHtcblx0XHRzdXBlci5vbkNsaWNrKGUpO1xuXHRcdHRoaXMucGxheWVyLnZpZGVvLmN1cnJlbnRUaW1lIC09IHRoaXMucGxheWVyLm9wdGlvbnMucGxheWJhY2suc3RlcC5tZWRpdW07XG5cdFx0dGhpcy5wbGF5ZXIuc3BsYXNoSWNvbi5zaG93KCd1bmRvJyk7XG5cdH1cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdCYWNrd2FyZENvbnRyb2wnLCBCYWNrd2FyZENvbnRyb2wpO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ2JhY2t3YXJkJywgQmFja3dhcmRDb250cm9sKTtcbmV4cG9ydCBkZWZhdWx0IEJhY2t3YXJkQ29udHJvbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL0JhY2t3YXJkQ29udHJvbC5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgU291cmNlQ29udHJvbC5qc1xuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCBDb250cm9sIGZyb20gJy4vQ29udHJvbCc7XG5pbXBvcnQgQ29udHJvbENvbnRhaW5lciBmcm9tICcuL0NvbnRyb2xDb250YWluZXInO1xuXG5cbi8qKlxuICogQGNsYXNzIFNvdXJjZUNvbnRyb2xcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBleHRlbmRzIENvbnRyb2xDb25haW5lclxuICovXG5jbGFzcyBTb3VyY2VDb250cm9sIGV4dGVuZHMgQ29udHJvbENvbnRhaW5lciB7XG5cdC8vIFRPRE86INCU0LXQu9Cw0YLRjCBkaXNhYmxlL2VuYWJsZSDQv9C+0YHQu9C1IG9wdGlvbnMgaW5pdFxuXHRjb25zdHJ1Y3RvciAocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRuYW1lIDogJ3NvdXJjZScsXG5cdFx0XHRpY29uTmFtZSA6ICdidWxsc2V5ZScsXG5cdFx0XHR0aXRsZSA6ICfQmtCw0YfQtdGB0YLQstC+Jyxcblx0XHRcdGNsYXNzTmFtZSA6ICdzb3VyY2UtY29udHJvbCcsXG5cdFx0XHRkaXNhYmxlIDogdHJ1ZVxuXHRcdH0sIG9wdGlvbnMpO1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cblx0XHR0aGlzLnBsYXllci5vbigncGxheWluZycsIHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xuXHRcdHRoaXMucGxheWVyLm9uKCdxdWFsaXR5Y2hhbmdlJywgdGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG5cdH1cblxuXHRvbkl0ZW1DbGljayhlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0Y29uc3QgaXRlbSA9ICQoZS50YXJnZXQpO1xuXHRcdGNvbnN0IHZpZGVvID0gdGhpcy5wbGF5ZXIudmlkZW87XG5cdFx0dmlkZW8ucGxheWJhY2tRdWFsaXR5ID0gaXRlbS5kYXRhKCduYW1lJyk7XG5cblx0XHR0aGlzLmRyb3Bkb3duQ29udGVudC5oaWRlKCk7XG5cblx0fVxuXG5cdG9uUGxheWVySW5pdGVkKGUsIGRhdGEpIHtcblx0XHR0aGlzLnVwZGF0ZSgpO1xuXHR9XG5cblx0Z2V0RGF0YSgpIHtcblx0XHRyZXR1cm4gdGhpcy5wbGF5ZXIudmlkZW8uZ2V0QXZhaWxhYmxlUXVhbGl0eUxldmVscygpO1xuXHR9XG5cblx0Z2V0Q3VycmVudFZhbHVlKCkge1xuXHRcdHJldHVybiB0aGlzLnBsYXllci52aWRlby5wbGF5YmFja1F1YWxpdHk7XG5cdH1cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdTb3VyY2VDb250cm9sJywgU291cmNlQ29udHJvbCk7XG5Db250cm9sLnJlZ2lzdGVyQ29udHJvbCgnc291cmNlJywgU291cmNlQ29udHJvbCk7XG5leHBvcnQgZGVmYXVsdCBTb3VyY2VDb250cm9sO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvU291cmNlQ29udHJvbC5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgQ29udHJvbENvbnRhaW5lci5qc1xuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCBDb250cm9sIGZyb20gJy4vQ29udHJvbCc7XG5pbXBvcnQgQ29udHJvbERyb3Bkb3duIGZyb20gJy4vQ29udHJvbERyb3Bkb3duJztcblxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAY2xhc3MgQ29udHJvbENvbnRhaW5lclxuICogQGV4dGVuZHMgQ29udHJvbERyb3Bkb3duXG4gKi9cbmNsYXNzIENvbnRyb2xDb250YWluZXIgZXh0ZW5kcyBDb250cm9sRHJvcGRvd24ge1xuXG5cdGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucz17fSkge1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cdFx0dGhpcy5fYWN0aXZlID0gbnVsbDtcblx0XHQvKipcblx0XHQgKiBMaXN0IG9mIGl0ZW1zXG5cdFx0ICpcblx0XHQgKiBAcHVibGljXG5cdFx0ICogQHR5cGUge0FycmF5fVxuXHRcdCAqL1xuXHRcdHRoaXMubGlzdCA9IFtdO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBpdGVtIG9mIGNvbnRhaW5lciBieSBpbmRleFxuXHQgKlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuXHQgKi9cblx0Z2V0QnlJbmRleChpbmRleCkge1xuXHRcdHJldHVybiB0aGlzLmxpc3RbaW5kZXhdO1xuXHR9XG5cblx0LyoqXG5cdCAqIFNldCBpdGVtIGFjdGl2ZSBieSBpbmRleFxuXHQgKlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuXHQgKi9cblx0c2V0QWN0aXZlQnlJbmRleChpbmRleCkge1xuXHRcdGlmICh0aGlzLmFjdGl2ZSkge1xuXHRcdFx0dGhpcy5hY3RpdmUucmVtb3ZlQ2xhc3MoJ2NvbnRyb2wtY29udGFpbmVyX19pdGVtLS1hY3RpdmUnKTtcblx0XHR9XG5cdFx0dGhpcy5fYWN0aXZlID0gdGhpcy5saXN0W2luZGV4XS5hZGRDbGFzcygnY29udHJvbC1jb250YWluZXJfX2l0ZW0tLWFjdGl2ZScpO1xuXHRcdHJldHVybiB0aGlzLl9hY3RpdmU7XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBHZXR0ZXIgb2YgYWN0aXZlIGZpZWxkXG5cdCAqXG5cdCAqIEBwdWJsaWNcblx0ICogQHR5cGUge2pRdWVyeX1cblx0ICovXG5cdGdldCBhY3RpdmUgKCkge1xuXHRcdGlmICh0aGlzLl9hY3RpdmUgJiYgdGhpcy5fYWN0aXZlLmxlbmd0aCA+IDApIHtcblx0XHRcdHJldHVybiB0aGlzLl9hY3RpdmU7XG5cdFx0fVxuXHRcdHRoaXMubGlzdC5mb3JFYWNoKGl0ZW0gPT4ge1xuXHRcdFx0aWYgKGl0ZW0uaGFzQ2xhc3MoJ2NvbnRyb2wtY29udGFpbmVyX19pdGVtLS1hY3RpdmUnKSkge1xuXHRcdFx0XHR0aGlzLl9hY3RpdmUgPSBpdGVtO1xuXHRcdFx0fVxuXHRcdH0pXG5cdFx0cmV0dXJuIHRoaXMuX2FjdGl2ZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTZXR0ZXIgb2YgYWN0aXZlIGZpZWxkXG5cdCAqXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtqUXVlcnl9IEl0ZW0gb2YgY29udGFpbmVyXG5cdCAqL1xuXHRzZXQgYWN0aXZlIChlbGVtZW50KSB7XG5cdFx0aWYgKHRoaXMuYWN0aXZlKSB7XG5cdFx0XHR0aGlzLmFjdGl2ZS5yZW1vdmVDbGFzcygnY29udHJvbC1jb250YWluZXJfX2l0ZW0tLWFjdGl2ZScpO1xuXHRcdH1cblx0XHRpZiAoZWxlbWVudCkge1xuXHRcdFx0JChlbGVtZW50KS5hZGRDbGFzcygnY29udHJvbC1jb250YWluZXJfX2l0ZW0tLWFjdGl2ZScpO1xuXHRcdH1cblx0XHR0aGlzLl9hY3RpdmUgPSBlbGVtZW50O1xuXHRcdHRoaXMuY2xvc2UoKTtcblx0XHRyZXR1cm4gdGhpcy5fYWN0aXZlXG5cdH1cblxuXG5cdC8qKlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7U3RyaW5nfGpRdWVyeX0gQ29udGVudCBvZiBpdGVtXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBEYXRhIG9mIGl0ZW1cblx0ICovXG5cdGFkZEl0ZW0gKGNvbnRlbnQsIGRhdGEpIHtcblx0XHRjb25zdCBpdGVtID0gJCgnPGRpdiAvPicpXG5cdFx0XHQuYWRkQ2xhc3MoJ2NvbnRyb2wtY29udGFpbmVyX19pdGVtJylcblx0XHRcdC5kYXRhKGRhdGEpXG5cdFx0XHQuYXR0cigndGl0bGUnLCBkYXRhLnRvb2x0aXApXG5cdFx0XHQub24oJ2NsaWNrIHRhcCcsIHRoaXMub25JdGVtQ2xpY2suYmluZCh0aGlzKSlcblx0XHRcdC5hcHBlbmQoY29udGVudCk7XG5cblx0XHR0aGlzLmxpc3QgPSB0aGlzLmxpc3QuY29uY2F0KGl0ZW0pO1xuXG5cdFx0dGhpcy5kcm9wZG93bkNvbnRlbnQuYXBwZW5kKGl0ZW0pO1xuXG5cdFx0dGhpcy5lbWl0VGFwRXZlbnRzKGl0ZW0pO1xuXG5cdFx0cmV0dXJuIGl0ZW07XG5cdH1cblxuXHQvKipcblx0ICogT24gaXRlbSBjbGljayBldmVudCBoYW5kbGVyXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtFdmVudH0gZVxuXHQgKi9cblx0b25JdGVtQ2xpY2sgKGUpIHtcblx0XHR0aGlzLmFjdGl2ZSA9IGUuY3VycmVudFRhcmdldDtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGJ1aWxkQ1NTQ2xhc3MoKSB7XG5cdFx0cmV0dXJuIGAke3N1cGVyLmJ1aWxkQ1NTQ2xhc3MoKX0gY29udHJvbC1jb250YWluZXJgXG5cdH1cblxuXHR1cGRhdGUoKSB7XG5cdFx0Y29uc3QgZGF0YSA9IHRoaXMuZ2V0RGF0YSgpXG5cdFx0Y29uc3QgY3VycmVudFZhbHVlID0gdGhpcy5nZXRDdXJyZW50VmFsdWUoKVxuXG5cdFx0aWYoZGF0YSA9PSBudWxsIHx8IGRhdGEubGVuZ3RoID09PSAwKSB7XG5cdFx0XHR0aGlzLmRpc2FibGUgPSB0cnVlO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMubGlzdCA9IFtdO1xuXHRcdHRoaXMuZHJvcGRvd25Db250ZW50LmVtcHR5KCk7XG5cblx0XHRkYXRhLmZvckVhY2goaXRlbSA9PiB7XG5cdFx0XHRjb25zdCBlbGVtID0gdGhpcy5hZGRJdGVtKGl0ZW0udGl0bGUsIGl0ZW0pO1xuXHRcdFx0aWYoY3VycmVudFZhbHVlICYmIGN1cnJlbnRWYWx1ZS5uYW1lID09PSBpdGVtLm5hbWUpIHtcblxuXHRcdFx0XHR0aGlzLmFjdGl2ZSA9IGVsZW07XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0dGhpcy5kaXNhYmxlID0gZmFsc2U7XG5cdH1cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdDb250cm9sQ29udGFpbmVyJywgQ29udHJvbENvbnRhaW5lcik7XG5Db250cm9sLnJlZ2lzdGVyQ29udHJvbCgnY29udGFpbmVyJywgQ29udHJvbENvbnRhaW5lcik7XG5leHBvcnQgZGVmYXVsdCBDb250cm9sQ29udGFpbmVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvQ29udHJvbENvbnRhaW5lci5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgU3VidGl0bGVDb250cm9sLmpzXG4gKlxuICogU3VidGl0bGUgY29udHJvbFxuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCBDb250cm9sIGZyb20gJy4vQ29udHJvbCc7XG5pbXBvcnQgQ29udHJvbENvbnRhaW5lciBmcm9tICcuL0NvbnRyb2xDb250YWluZXInO1xuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBjbGFzcyBTdWJ0aXRsZUNvbnRyb2xcbiAqIEBleHRlbmRzIENvbnRyb2xDb250YWluZXJcbiAqL1xuY2xhc3MgU3VidGl0bGVDb250cm9sIGV4dGVuZHMgQ29udHJvbENvbnRhaW5lciB7XG5cdGNvbnN0cnVjdG9yIChwbGF5ZXIsIG9wdGlvbnM9e30pIHtcblx0XHRvcHRpb25zID0gJC5leHRlbmQoe30sIHtcblx0XHRcdGljb25OYW1lIDogJ2NvbW1lbnRpbmctbycsXG5cdFx0XHR0aXRsZSA6ICfQodGD0LHRgtC40YLRgNGLJyxcblx0XHRcdG5hbWUgOiAnc3VidGl0bGUnLFxuXHRcdFx0Y2xhc3NOYW1lIDogJ3N1YnRpdGxlLWNvbnRyb2wnLFxuXHRcdFx0ZGlzYWJsZSA6IHRydWVcblx0XHR9LCBvcHRpb25zKTtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ3BsYXlpbmcnLCB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLnBsYXllci5vbigndHJhY2tzY2hhbmdlJywgdGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG5cdH1cblxuXHRvbkNsaWNrIChlKSB7XG5cdFx0c3VwZXIub25DbGljayhlKTtcblx0XHRjb25zdCB2aWRlbyA9IHRoaXMucGxheWVyLnZpZGVvO1xuXHRcdHZpZGVvLnRyYWNrID0gbnVsbFxuXHR9XG5cblx0b25JdGVtQ2xpY2sgKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0ZS5zdG9wUHJvcGFnYXRpb24oKVxuXG5cdFx0Y29uc3QgaXRlbSA9ICQoZS50YXJnZXQpXG5cdFx0Y29uc3QgdmlkZW8gPSB0aGlzLnBsYXllci52aWRlbztcblx0XHRpZiAoaXRlbS5kYXRhKCkpIHtcblx0XHRcdHZpZGVvLnRyYWNrID0gaXRlbS5kYXRhKCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5kcm9wZG93bkNvbnRlbnQuaGlkZSgpXG5cdH1cblxuXHRvblBsYXllckluaXRlZChlLCBkYXRhKSB7XG5cdFx0dGhpcy51cGRhdGUoKVxuXHR9XG5cblx0dXBkYXRlKCkge1xuXHRcdHN1cGVyLnVwZGF0ZSgpO1xuXHRcdGNvbnN0IGhhc1ZhbHVlID0gISEodGhpcy5nZXRDdXJyZW50VmFsdWUoKSAmJiB0aGlzLmdldEN1cnJlbnRWYWx1ZSgpLm5hbWUgIT0gbnVsbCk7XG5cdFx0dGhpcy5lbGVtZW50LnRvZ2dsZUNsYXNzKFxuXHRcdFx0J2NvbnRyb2wtY2hlY2tib3gtLWNoZWNrZWQnLFxuXHRcdFx0aGFzVmFsdWVcblx0XHQpXG5cdH1cblxuXHRnZXREYXRhKCkge1xuXHRcdHJldHVybiB0aGlzLnBsYXllci52aWRlby5zdWJ0aXRsZXM7XG5cdH1cblxuXHRnZXRDdXJyZW50VmFsdWUoKSB7XG5cdFx0cmV0dXJuIHRoaXMucGxheWVyLnZpZGVvLnRyYWNrO1xuXHR9XG5cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdTdWJ0aXRsZUNvbnRyb2wnLCBTdWJ0aXRsZUNvbnRyb2wpO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ3N1YnRpdGxlJywgU3VidGl0bGVDb250cm9sKTtcbmV4cG9ydCBkZWZhdWx0IFN1YnRpdGxlQ29udHJvbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL1N1YnRpdGxlQ29udHJvbC5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgRG93bmxvYWRDb250cm9sLmpzXG4gKlxuICogRG93bmxvYWQgY29udHJvbFxuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL0NvbnRyb2wnO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgSWNvbiBmcm9tICcuL0ljb24nO1xuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEBjbGFzcyBEb3dubG9hZENvbnRyb2xcbiAqIEBleG50ZWRzIENvbnRyb2xcbiAqL1xuY2xhc3MgRG93bmxvYWRDb250cm9sIGV4dGVuZHMgQ29udHJvbCB7XG5cdGNvbnN0cnVjdG9yIChwbGF5ZXIsIG9wdGlvbnM9e30pIHtcblx0XHRvcHRpb25zID0gJC5leHRlbmQoe1xuXHRcdFx0dGl0bGUgOiAn0KHQutCw0YfQsNGC0Ywg0LLQuNC00LXQvicsXG5cdFx0XHRjbGFzc05hbWUgOiAnZG93bmxvYWQnLFxuXHRcdFx0bmFtZSA6ICdkb3dubG9hZCcsXG5cdFx0fSwgb3B0aW9ucyk7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblx0XHR0aGlzLnBsYXllci5vbignbG9hZHN0YXJ0JywgdGhpcy5vbkxvYWRTdGFydC5iaW5kKHRoaXMpKTtcblx0fVxuXG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHQvLyBUT0RPOiDQlNC+0L7Qv9GA0LXQtNC10LvQuNGC0Ywg0Y3RgtC+0YIg0LzQtdGC0L7QtCwg0LAg0L3QtSDQv9C10YDQtdC+0L/RgNC10LTQu9C10LjRgtGMXG5cdFx0dGhpcy5lbGVtZW50ID0gJCgnPGEgLz4nKVxuXHRcdFx0LmF0dHIoe1xuXHRcdFx0XHRocmVmIDogJycsXG5cdFx0XHRcdHRhcmdldCA6ICdfYmxhbmsnLFxuXHRcdFx0XHRkb3dubG9hZCA6IHRydWUsXG5cdFx0XHRcdHRpdGxlIDogdGhpcy5vcHRpb25zLnRpdGxlLFxuXHRcdFx0fSlcblx0XHRcdC5hZGRDbGFzcyh0aGlzLmJ1aWxkQ1NTQ2xhc3MoKSlcblx0XHRcdC5hcHBlbmQobmV3IEljb24odGhpcy5wbGF5ZXIsIHsgaWNvbk5hbWUgOiAnZG93bmxvYWQnIH0pLmVsZW1lbnQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0YnVpbGRDU1NDbGFzcygpIHtcblx0XHRyZXR1cm4gYCR7c3VwZXIuYnVpbGRDU1NDbGFzcygpfWA7XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBTZXR0ZXIgb2YgbGluayBmaWVsZFxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSBQYXRoIGZvciB2aWRlb1xuXHQgKi9cblx0c2V0IGxpbmsgKHZhbHVlKSB7XG5cdFx0Y29uc3QgdGl0bGUgPSB0aGlzLnBsYXllci5vcHRpb25zLnRpdGxlO1xuXHRcdGxldCBmaWxlTmFtZTtcblxuXHRcdGlmKHRpdGxlICE9IG51bGwpIHtcblx0XHRcdGZpbGVOYW1lID0gZGVjb2RlVVJJQ29tcG9uZW50KHRpdGxlKSArICcuJyArIGdldEZpbGVFeHRlbnNpb24odmFsdWUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zdCBwYXJzZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cdFx0XHRwYXJzZXIuaHJlZiA9IHZhbHVlO1xuXHRcdFx0ZmlsZU5hbWUgPSBwYXJzZXIucGF0aG5hbWUuc3BsaXQoJy8nKTtcblx0XHRcdGZpbGVOYW1lID0gZmlsZU5hbWVbZmlsZU5hbWUubGVuZ3RoIC0gMV07XG5cdFx0fVxuXG5cdFx0dGhpcy5lbGVtZW50LmF0dHIoe1xuXHRcdFx0aHJlZiA6IHZhbHVlLFxuXHRcdFx0ZG93bmxvYWQgOiBmaWxlTmFtZVxuXHRcdH0pO1xuXHR9XG5cblxuXHRvbkxvYWRTdGFydChlLCBkYXRhKSB7XG5cdFx0dGhpcy5saW5rID0gdGhpcy5wbGF5ZXIudmlkZW8uc3JjLnVybDtcblx0fVxuXG59XG5mdW5jdGlvbiBnZXRGaWxlRXh0ZW5zaW9uKGZpbGVOYW1lKSB7XG5cdHJldHVybiBmaWxlTmFtZS5zcGxpdCgnLicpLnBvcCgpO1xufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ0Rvd25sb2FkQ29udHJvbCcsIERvd25sb2FkQ29udHJvbCk7XG5Db250cm9sLnJlZ2lzdGVyQ29udHJvbCgnZG93bmxvYWQnLCBEb3dubG9hZENvbnRyb2wpO1xuZXhwb3J0IGRlZmF1bHQgRG93bmxvYWRDb250cm9sO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvRG93bmxvYWRDb250cm9sLmpzIiwiXG4ndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIEtleWJpbmRpbmdJbmZvQ29udHJvbC5qc1xuICpcbiAqIEluZm8gY29udHJvbFxuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCBDb250cm9sIGZyb20gJy4vQ29udHJvbCc7XG5pbXBvcnQgQ29udHJvbERyb3Bkb3duIGZyb20gJy4vQ29udHJvbERyb3Bkb3duJztcblxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAY2xhc3MgS2V5QmluZGluZ0luZm9Db250cm9sXG4gKiBAZXh0ZW5kcyBDb250cm9sRHJvcGRvd25cbiAqL1xuY2xhc3MgS2V5QmluZGluZ0luZm9Db250cm9sIGV4dGVuZHMgQ29udHJvbERyb3Bkb3duIHtcblxuXHRjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcblx0XHRvcHRpb25zID0gJC5leHRlbmQoe30sIHtcblx0XHRcdGljb25OYW1lIDogJ2luZm8nLFxuXHRcdFx0dGl0bGUgOiAn0JjQvdGE0L4nLFxuXHRcdFx0Y2xhc3NOYW1lIDogJ2luZm8tY29udHJvbCcsXG5cdFx0XHRuYW1lIDogJ2luZm8nXG5cdFx0fSwgb3B0aW9ucyk7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblx0fVxuXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0c3VwZXIuY3JlYXRlRWxlbWVudCgpO1xuXHRcdGxldCBrZXlCaW5kaW5nID0gdGhpcy5wbGF5ZXIub3B0aW9ucy5rZXlCaW5kaW5nO1xuXHRcdGxldCBpbmZvQ29udGVudCA9IGBgO1xuXHRcdGZvciAobGV0IF9rZXkgaW4ga2V5QmluZGluZykge1xuXHRcdFx0aWYgKCFrZXlCaW5kaW5nLmhhc093blByb3BlcnR5KF9rZXkpKSBjb250aW51ZTtcblxuXHRcdFx0bGV0IGhvdGtleSA9IGtleUJpbmRpbmdbX2tleV07XG5cdFx0XHRsZXQgaXRlbSA9ICcnO1xuXHRcdFx0bGV0IGtleVN0cmluZyA9ICcnO1xuXG5cdFx0XHRob3RrZXkuaW5mby5mb3JFYWNoKChrZXksIGluZGV4KSA9PiB7XG5cdFx0XHRcdGlmIChpbmRleCAhPT0gMCkge1xuXHRcdFx0XHRcdGtleVN0cmluZyArPSBgICsgYFxuXHRcdFx0XHR9XG5cdFx0XHRcdGtleVN0cmluZyArPSBgPGtiZCBjbGFzcz1cImxlcGxheWVyLWtleVwiPiR7a2V5fTwva2JkPmBcblx0XHRcdH0pO1xuXG5cdFx0XHRpdGVtID0gYFxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiaW5mby1jb250cm9sX19pdGVtXCI+XG5cdFx0XHRcdFx0JHtrZXlTdHJpbmd9IC0gJHtob3RrZXkuZGVzY3JpcHRpb259XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0YFxuXG5cdFx0XHRpbmZvQ29udGVudCArPSBpdGVtO1xuXG5cdFx0fVxuXHRcdHRoaXMuZHJvcGRvd25Db250ZW50XG5cdFx0XHQuYWRkQ2xhc3MoJ2luZm8tY29udHJvbF9fY29udGVudCcpXG5cdFx0XHQuYXBwZW5kKGluZm9Db250ZW50KTtcblx0fVxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ0tleUJpbmRpbmdJbmZvQ29udHJvbCcsIEtleUJpbmRpbmdJbmZvQ29udHJvbCk7XG5Db250cm9sLnJlZ2lzdGVyQ29udHJvbCgna2V5YmluZGluZyBpbmZvJywgS2V5QmluZGluZ0luZm9Db250cm9sKTtcbmV4cG9ydCBkZWZhdWx0IEtleUJpbmRpbmdJbmZvQ29udHJvbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL0tleWJpbmRpbmdJbmZvQ29udHJvbC5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgVGltZUluZm9Db250cm9sLmpzXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9Db250cm9sJztcbmltcG9ydCBDb250cm9sVGV4dCBmcm9tICcuL0NvbnRyb2xUZXh0JztcbmltcG9ydCB7IHNlY29uZHNUb1RpbWUgfSBmcm9tICcuLi91dGlscyc7XG5cbi8qKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQGNsYXNzIFRpbWVJbmZvQ29udHJvbFxuICogQHByb3BlcnR5IHtDb250cm9sVGV4dH0gY3VycmVudFRpbWUgQ3VycmVudCB0aW1lJ3MgdGV4dFxuICogQHByb3BlcnR5IHtDb250cm9sVGV4dH0gdG90YWxUaW1lIFRvdGFsIHRpbWVcbiAqIEBwcm9wZXJ0eSB7alF1ZXJ5fSBsaW5lXG4gKiBAZXh0ZW5kcyBDb250cm9sXG4gKi9cbmNsYXNzIFRpbWVJbmZvQ29udHJvbCBleHRlbmRzIENvbnRyb2wge1xuXG5cdGNvbnN0cnVjdG9yIChwbGF5ZXIsIG9wdGlvbnM9e30pIHtcblx0XHRvcHRpb25zID0gJC5leHRlbmQoe30sIHtcblx0XHRcdGNsYXNzTmFtZSA6ICd0aW1lbGluZSB0aW1lbGluZS1jb250YWluZXInLFxuXHRcdFx0bmFtZSA6ICd0aW1lLWluZm8nXG5cdFx0fSwgb3B0aW9ucyk7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblxuXHRcdHRoaXMucGxheWVyLm9uKCd0aW1ldXBkYXRlJywgKGUsIGRhdGEpID0+IHtcblx0XHRcdGNvbnN0IHRpbWUgPSB0aGlzLnBsYXllci5jdXJyZW50VGltZTtcblx0XHRcdHRoaXMuX2N1cnJlbnRUaW1lQ29udHJvbC50ZXh0ID0gc2Vjb25kc1RvVGltZSh0aW1lKTtcblx0XHR9KTtcblxuXHRcdHRoaXMucGxheWVyLm9uKCdkdXJhdGlvbmNoYW5nZScsIChlKSA9PiB7XG5cdFx0XHR0aGlzLl90b3RhbFRpbWVDb250cm9sLnRleHQgPSBzZWNvbmRzVG9UaW1lKHRoaXMucGxheWVyLnZpZGVvLmR1cmF0aW9uKTtcblx0XHR9KTtcblx0fVxuXG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHRjb25zdCBkdXJhdGlvbiA9IHRoaXMucGxheWVyLnZpZGVvLmR1cmF0aW9uO1xuXHRcdGNvbnN0IGN1cnJlbnRUaW1lID0gdGhpcy5wbGF5ZXIudmlkZW8uY3VycmVudFRpbWU7XG5cdFx0dGhpcy5fY3VycmVudFRpbWVDb250cm9sID0gbmV3IENvbnRyb2xUZXh0KHRoaXMucGxheWVyLCB7IGNsYXNzTmFtZSA6ICdjb250cm9sLXRpbWVfX2N1cnJlbnQnfSk7XG5cdFx0dGhpcy5fdG90YWxUaW1lQ29udHJvbCA9IG5ldyBDb250cm9sVGV4dCh0aGlzLnBsYXllciwgeyBjbGFzc05hbWUgOiAnY29udHJvbC10aW1lX190b3RhbCd9KTtcblxuXHRcdGlmKGlzTmFOKGR1cmF0aW9uKSB8fCBkdXJhdGlvbiA9PSBudWxsKSB7XG5cdFx0XHR0aGlzLl90b3RhbFRpbWVDb250cm9sLnRleHQgPSAnJztcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5fdG90YWxUaW1lQ29udHJvbC50ZXh0ID0gc2Vjb25kc1RvVGltZShkdXJhdGlvbik7XG5cdFx0fVxuXG5cdFx0aWYoY3VycmVudFRpbWUgPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5fY3VycmVudFRpbWVDb250cm9sLnRleHQgPSBzZWNvbmRzVG9UaW1lKDApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLl9jdXJyZW50VGltZUNvbnRyb2wudGV4dCA9IHNlY29uZHNUb1RpbWUoY3VycmVudFRpbWUpO1xuXHRcdH1cblxuXHRcdHRoaXMuZWxlbWVudCA9ICQoJzxkaXYvPicpLmFkZENsYXNzKCdjb250cm9sLXRpbWUnKTtcblx0XHR0aGlzLmVsZW1lbnRcblx0XHRcdC5hcHBlbmQodGhpcy5fY3VycmVudFRpbWVDb250cm9sLmVsZW1lbnQpXG5cdFx0XHQuYXBwZW5kKHRoaXMuX3RvdGFsVGltZUNvbnRyb2wuZWxlbWVudClcblxuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQ7XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdG9uUGxheWVySW5pdGVkKGUpIHtcblx0XHRsZXQgdmlkZW8gPSB0aGlzLnBsYXllci52aWRlbztcblx0XHR0aGlzLl9jdXJyZW50VGltZUNvbnRyb2wudGV4dCA9IHNlY29uZHNUb1RpbWUodmlkZW8uY3VycmVudFRpbWUpO1xuXHRcdHRoaXMuX3RvdGFsVGltZUNvbnRyb2wudGV4dCA9IHNlY29uZHNUb1RpbWUodmlkZW8uZHVyYXRpb24pO1xuXHR9XG5cblx0b25DbGljayhlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdH1cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdUaW1lSW5mb0NvbnRyb2wnLCBUaW1lSW5mb0NvbnRyb2wpO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ3RpbWVpbmZvJywgVGltZUluZm9Db250cm9sKTtcbmV4cG9ydCBkZWZhdWx0IFRpbWVJbmZvQ29udHJvbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL1RpbWVJbmZvQ29udHJvbC5qcyIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudHMvQ29tcG9uZW50JztcbmltcG9ydCB7IElTX1NBRkFSSSwgSVNfSU9TLCBJU19BTkRST0lEIH0gZnJvbSAnLi4vdXRpbHMvYnJvd3Nlcic7XG5pbXBvcnQgRW50aXR5IGZyb20gJy4vRW50aXR5JztcblxuXG5jbGFzcyBIdG1sNSBleHRlbmRzIEVudGl0eSB7XG5cdGNvbnN0cnVjdG9yIChwbGF5ZXIsIG9wdGlvbnMpIHtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXHRcdHRoaXMubWVkaWEgPSB0aGlzLmVsZW1lbnRbMF07XG5cblx0XHR0aGlzLnN1YnRpdGxlcyA9IFtdO1xuXHRcdHRoaXMuYnVmZmVyUmFuZ2VzID0gW107XG5cblx0XHR0aGlzLnNyYyA9IHRoaXMucGxheWVyLm9wdGlvbnMuc3JjO1xuXG5cdFx0aWYodGhpcy5wbGF5ZXIub3B0aW9ucy5wb3N0ZXIgIT0gbnVsbCkge1xuXHRcdFx0dGhpcy5wb3N0ZXIgPSB0aGlzLnBsYXllci5vcHRpb25zLnBvc3Rlcjtcblx0XHR9XG5cblx0XHRpZih0aGlzLmdldEF2YWlsYWJsZVF1YWxpdHlMZXZlbHMoKS5sZW5ndGggPiAwKSB7XG5cdFx0XHR0aGlzLl9wbGF5YmFja1F1YWxpdHkgPSB0aGlzLmdldEF2YWlsYWJsZVF1YWxpdHlMZXZlbHMoKVswXTtcblx0XHR9XG5cblx0XHR0aGlzLmVsZW1lbnQub24oJ2xvYWRzdGFydCcsIHRoaXMub25Mb2FkU3RhcnQuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCd0aW1ldXBkYXRlJywgdGhpcy5vblRpbWVVcGRhdGUuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdkdXJhdGlvbmNoYW5nZScsIHRoaXMub25EdXJhdGlvbkNoYW5nZS5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ3Byb2dyZXNzJywgdGhpcy5vblByb2dyZXNzLmJpbmQodGhpcykpO1xuXHRcdHRoaXMuZWxlbWVudC5vbignc2Vla2luZycsIHRoaXMub25TZWVraW5nLmJpbmQodGhpcykpO1xuXHRcdHRoaXMuZWxlbWVudC5vbignc2Vla2VkJywgdGhpcy5vblNlZWtlZC5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ3ZvbHVtZWNoYW5nZScsIHRoaXMub25Wb2x1bWVDaGFuZ2UuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdjbGljaycsIHRoaXMub25DbGljay5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ2RibGNsaWNrJywgdGhpcy5vbkRibGNsaWNrLmJpbmQodGhpcykpO1xuXHRcdHRoaXMuZWxlbWVudC5vbigncGxheScsIHRoaXMub25QbGF5LmJpbmQodGhpcykpO1xuXHRcdHRoaXMuZWxlbWVudC5vbigncGF1c2UnLCB0aGlzLm9uUGF1c2UuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdyYXRlY2hhbmdlJywgdGhpcy5vblJhdGVDaGFuZ2UuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdlbmRlZCcsIHRoaXMub25FbmRlZC5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ2NhbnBsYXl0aHJvdWdoJywgdGhpcy5vbkNhbnBsYXlUaHJvdWdoLmJpbmQodGhpcykpO1xuXHRcdHRoaXMuZWxlbWVudC5vbignd2FpdGluZycsIHRoaXMub25XYWl0aW5nLmJpbmQodGhpcykpO1xuXHRcdHRoaXMuZWxlbWVudC5vbignZXJyb3InLCB0aGlzLm9uRXJyb3IuYmluZCh0aGlzKSk7XG5cdH1cblxuXHRvbkxvYWRTdGFydChlKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCdsb2Fkc3RhcnQnKTtcblx0fVxuXG5cdG9uVGltZVVwZGF0ZShlKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCd0aW1ldXBkYXRlJyk7XG5cdH1cblxuXHRvbkR1cmF0aW9uQ2hhbmdlKGUpIHtcblx0XHR0aGlzLnRyaWdnZXIoJ2R1cmF0aW9uY2hhbmdlJyk7XG5cdH1cblxuXHRvblByb2dyZXNzKGUpIHtcblx0XHR0aGlzLnRyaWdnZXIoJ3Byb2dyZXNzJyk7XG5cdH1cblxuXHRvblNlZWtpbmcoZSkge1xuXHRcdHRoaXMudHJpZ2dlcignc2Vla2luZycpO1xuXHR9XG5cblx0b25TZWVrZWQoZSkge1xuXHRcdHRoaXMudHJpZ2dlcignc2Vla2VkJyk7XG5cdH1cblxuXHRvblZvbHVtZUNoYW5nZShlKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCd2b2x1bWVjaGFuZ2UnKTtcblx0fVxuXG5cdG9uQ2xpY2soKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCdjbGljaycpO1xuXHR9XG5cblx0b25EYmxjbGljaygpIHtcblx0XHR0aGlzLnRyaWdnZXIoJ2RibGNsaWNrJyk7XG5cdH1cblxuXHRvblBsYXkoKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCdwbGF5Jyk7XG5cdH1cblxuXHRvblBhdXNlKCkge1xuXHRcdHRoaXMudHJpZ2dlcigncGF1c2UnKTtcblx0fVxuXG5cdG9uUGxheWluZygpIHtcblx0XHR0aGlzLnRyaWdnZXIoJ3BsYXlpbmcnKTtcblx0fVxuXG5cdG9uUmF0ZUNoYW5nZSgpIHtcblx0XHR0aGlzLnRyaWdnZXIoJ3JhdGVjaGFuZ2UnKTtcblx0fVxuXG5cdG9uRW5kZWQoKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCdlbmRlZCcpO1xuXHR9XG5cblx0b25DYW5wbGF5VGhyb3VnaCgpIHtcblx0XHR0aGlzLnRyaWdnZXIoJ2NhbnBsYXl0aHJvdWdoJyk7XG5cdH1cblxuXHRvbldhaXRpbmcoKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCd3YWl0aW5nJyk7XG5cdH1cblxuXHRvbkVycm9yKGUpIHtcblx0XHR0aGlzLnRyaWdnZXIoJ2Vycm9yJywgeyBjb2RlIDogZS50YXJnZXQuZXJyb3IuY29kZSB9KTtcblx0fVxuXG5cdC8qIFRPRE8gKi9cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHR0aGlzLmVsZW1lbnQgPSB0aGlzLm9wdGlvbnMuY3R4O1xuXHRcdFtcblxuXHRcdFx0Ly8gUmVtb3ZlIGNvbnRyb2xzIGJlY2F1c2Ugd2UgZG9udCBub3Qgc3VwcG9ydCBuYXRpdmUgY29udHJvbHMgeWV0XG5cdFx0XHQnY29udHJvbHMnLFxuXHRcdFx0J3Bvc3RlcicsXG5cblx0XHRcdC8vIEl0IGlzIHVubmVjZXNzYXJ5IGF0dHJzLCB0aGlzIGZ1bmN0aW9uYWxpdHkgc29sdmUgQ1NTXG5cdFx0XHQnaGVpZ2h0Jyxcblx0XHRcdCd3aWR0aCdcblxuXHRcdF0uZm9yRWFjaChpdGVtID0+IHtcblx0XHRcdHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyKGl0ZW0pO1xuXHRcdH0pO1xuXG5cdFx0Ly8gU2V0IGF0dHJzIGZyb20gb3B0aW9uc1xuXHRcdFtcblx0XHRcdCdwcmVsb2FkJyxcblx0XHRcdCdhdXRvcGxheScsXG5cdFx0XHQnbG9vcCcsXG5cdFx0XHQnbXV0ZWQnXG5cdFx0XS5mb3JFYWNoKGl0ZW0gPT4ge1xuXHRcdFx0aWYodGhpcy5wbGF5ZXIub3B0aW9uc1tpdGVtXSkge1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQuYXR0cihpdGVtLCB0aGlzLnBsYXllci5vcHRpb25zW2l0ZW1dKTtcblx0XHRcdFx0dGhpcy5lbGVtZW50LnByb3AoaXRlbSwgdGhpcy5wbGF5ZXIub3B0aW9uc1tpdGVtXSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblxuXHRcdHRoaXMuZWxlbWVudC5maW5kKCdzb3VyY2VbZGF0YS1xdWFsaXR5XScpLmVhY2goKGksIGl0ZW0pID0+IHtcblx0XHRcdCQoaXRlbSkucmVtb3ZlKCk7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50O1xuXHR9XG5cblx0Z2V0IGN1cnJlbnRUaW1lICgpIHtcblx0XHRyZXR1cm4gdGhpcy5tZWRpYS5jdXJyZW50VGltZTtcblx0fVxuXG5cdHNldCBjdXJyZW50VGltZSAodmFsdWUpIHtcblx0XHRsZXQgdGltZTtcblx0XHRpZiAodmFsdWUgPiB0aGlzLmR1cmF0aW9uKSB7XG5cdFx0XHR0aW1lID0gdGhpcy5kdXJhdGlvblxuXHRcdH0gZWxzZSBpZiAodmFsdWUgPCAwKSB7XG5cdFx0XHR0aW1lID0gMFxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aW1lID0gdmFsdWU7XG5cdFx0fVxuXG5cdFx0dGhpcy5wbGF5ZXIudHJpZ2dlcigndGltZXVwZGF0ZWxvYWQnLCB7IGN1cnJlbnRUaW1lIDogdGltZSB9KTtcblxuXHRcdHRoaXMubWVkaWEuY3VycmVudFRpbWUgPSB0aW1lO1xuXHR9XG5cblx0Z2V0IGR1cmF0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5tZWRpYS5kdXJhdGlvbjtcblx0fVxuXG5cdGdldCBoZWlnaHQgKCkge1xuXHRcdHJldHVybiB0aGlzLm1lZGlhLmNsaWVudEhlaWdodDtcblx0fVxuXG5cdGdldCB3aWR0aCAoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWVkaWEuY2xpZW50V2lkdGg7XG5cdH1cblxuXHRnZXQgcmF0ZSAoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWVkaWEucGxheWJhY2tSYXRlO1xuXHR9XG5cblx0c2V0IG11dGVkKHZhbHVlKSB7XG5cdFx0dGhpcy5tZWRpYS5tdXRlZCA9IHZhbHVlO1xuXHR9XG5cblx0Z2V0IG11dGVkKCkge1xuXHRcdHJldHVybiB0aGlzLm1lZGlhLm11dGVkXG5cdH1cblxuXHRnZXQgcmF0ZU1heCgpIHtcblx0XHRsZXQgbWF4ID0gdGhpcy5wbGF5ZXIub3B0aW9ucy5yYXRlLm1heDtcblx0XHRpZihJU19JT1MgfHwgSVNfQU5EUk9JRCkge1xuXHRcdFx0bWF4ID0gSHRtbDUuTU9CSUxFX01BWF9SQVRFO1xuXHRcdH1cblx0XHRpZihJU19TQUZBUkkpIHtcblx0XHRcdG1heCA9IEh0bWw1LlNBRkFSSV9NQVhfUkFURTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbWF4O1xuXHR9XG5cblx0Z2V0IHJhdGVNaW4oKSB7XG5cdFx0bGV0IG1pbiA9IHRoaXMucGxheWVyLm9wdGlvbnMucmF0ZS5taW47XG5cblx0XHRpZiAoSVNfSU9TIHx8IElTX0FORFJPSUQpIHtcblx0XHRcdG1pbiA9IEh0bWw1Lk1PQklMRV9NSU5fUkFURTtcblx0XHR9XG5cblx0XHRpZiAoSVNfU0FGQVJJKSB7XG5cdFx0XHRtaW4gPSBIdG1sNS5TQUZBUklfTUlOX1JBVEU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1pbjtcblx0fVxuXG5cdHNldCByYXRlICh2YWx1ZSkge1xuXHRcdHN1cGVyLnJhdGUgPSB2YWx1ZTtcblx0XHR0aGlzLm1lZGlhLnBsYXliYWNrUmF0ZSA9IHZhbHVlO1xuXHR9XG5cblx0Z2V0QXZhaWxhYmxlUXVhbGl0eUxldmVscygpIHtcblx0XHRyZXR1cm4gdGhpcy5wbGF5ZXIub3B0aW9ucy5zb3VyY2VzLm1hcChpdGVtID0+ICh7XG5cdFx0XHRuYW1lIDogaXRlbS50aXRsZSxcblx0XHRcdC4uLml0ZW1cblx0XHR9KSk7XG5cdH1cblxuXHRzZXQgcGxheWJhY2tRdWFsaXR5KG5hbWUpIHtcblx0XHRzdXBlci5wbGF5YmFja1F1YWxpdHkgPSBuYW1lO1xuXHRcdGNvbnN0IHRpbWUgPSB0aGlzLmN1cnJlbnRUaW1lO1xuXHRcdGNvbnN0IHJhdGUgPSB0aGlzLnJhdGU7XG5cdFx0Y29uc3Qgc3RvcCA9IHRoaXMucGF1c2VkO1xuXG5cdFx0dGhpcy5fcGxheWJhY2tRdWFsaXR5ID0gdGhpcy5nZXRBdmFpbGFibGVRdWFsaXR5TGV2ZWxzKCkuZmluZChpdGVtID0+IGl0ZW0ubmFtZSA9PT0gbmFtZSk7XG5cblx0XHR0aGlzLnNyYyA9IHRoaXMuX3BsYXliYWNrUXVhbGl0eTtcblx0XHR0aGlzLnJhdGUgPSByYXRlO1xuXHRcdHRoaXMuY3VycmVudFRpbWUgPSB0aW1lO1xuXG5cdFx0aWYgKHN0b3ApIHtcblx0XHRcdHRoaXMucGF1c2UoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5wbGF5KCk7XG5cdFx0fVxuXG5cdFx0dGhpcy50cmlnZ2VyKCdxdWFsaXR5Y2hhbmdlJywgdGhpcy5fcGxheWJhY2tRdWFsaXR5KTtcblxuXHR9XG5cblx0Z2V0IHBsYXliYWNrUXVhbGl0eSgpIHtcblx0XHRyZXR1cm4gdGhpcy5fcGxheWJhY2tRdWFsaXR5O1xuXHR9XG5cblx0c2V0IHNyYyAoc3JjKSB7XG5cdFx0aWYoc3JjID09IG51bGwpIHJldHVybjtcblx0XHRpZih0aGlzLnNyYyAmJiB0aGlzLnNyYy51cmwgPT09IHNyYy51cmwpIHJldHVybjtcblxuXHRcdHRoaXMubWVkaWEuc3JjID0gc3JjLnVybDtcblxuXHRcdHRoaXMuX3NvdXJjZSA9IHNyYztcblx0fVxuXG5cdGdldCBzcmMgKCkge1xuXHRcdHJldHVybiB0aGlzLl9zb3VyY2Vcblx0fVxuXG5cdGdldCB0cmFjayAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3RyYWNrO1xuXHR9XG5cblx0c2V0IHRyYWNrICh2YWx1ZSkge1xuXHRcdFsuLi50aGlzLm1lZGlhLnRleHRUcmFja3NdLmZvckVhY2goaXRlbSA9PiB7XG5cdFx0XHRpZih2YWx1ZSAhPSBudWxsICYmIGl0ZW0ubGFuZ3VhZ2UgPT09IHZhbHVlLmxhbmd1YWdlKSB7XG5cdFx0XHRcdGl0ZW0ubW9kZSA9ICdzaG93aW5nJ1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aXRlbS5tb2RlID0gJ2hpZGRlbic7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0dGhpcy5fdHJhY2sgPSB2YWx1ZTtcblx0XHR0aGlzLnRyaWdnZXIoJ3RyYWNrc2NoYW5nZScpO1xuXHR9XG5cblx0Z2V0IHBhdXNlZCgpIHtcblx0XHRyZXR1cm4gdGhpcy5tZWRpYS5wYXVzZWQ7XG5cdH1cblxuXHRnZXQgdm9sdW1lICgpIHtcblx0XHRyZXR1cm4gdGhpcy5tZWRpYS52b2x1bWU7XG5cdH1cblxuXHRzZXQgdm9sdW1lICh2YWx1ZSkge1xuXHRcdHN1cGVyLnZvbHVtZSA9IHZhbHVlO1xuXHRcdGNvbnN0IHBsYXllciA9IHRoaXMucGxheWVyO1xuXHRcdGlmICh2YWx1ZSA+IDEpIHtcblx0XHRcdHRoaXMubWVkaWEudm9sdW1lID0gMTtcblx0XHR9IGVsc2UgaWYgKHZhbHVlIDwgcGxheWVyLm9wdGlvbnMudm9sdW1lLm11dGVsaW1pdCkge1xuXHRcdFx0dGhpcy5tZWRpYS52b2x1bWUgPSAwO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLm1lZGlhLnZvbHVtZSA9IHZhbHVlO1xuXHRcdH1cblx0XHR0aGlzLm1lZGlhLm11dGUgPSAodmFsdWUgPCBwbGF5ZXIub3B0aW9ucy52b2x1bWUubXV0ZWxpbWl0KTtcblx0fVxuXG5cblx0Z2V0IGJ1ZmZlcmVkICgpIHtcblx0XHRyZXR1cm4gdGhpcy5tZWRpYS5idWZmZXJlZDtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJuIHtUaW1lUmFuZ2VzfVxuXHQgKi9cblx0Z2V0IHNlZWthYmxlICgpIHtcblx0XHRyZXR1cm4gdGhpcy5tZWRpYS5zZWVrYWJsZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJuIHtUaW1lUmFuZ2VzfVxuXHQgKi9cblx0Z2V0IHBsYXllZCgpIHtcblx0XHRyZXR1cm4gdGhpcy5tZWRpYS5wbGF5ZWQ7XG5cdH1cblxuXHRnZXQgZW5kZWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWVkaWEuZW5kZWQ7XG5cdH1cblxuXHRnZXQgcGxheWVkUGVyY2VudGFnZSgpIHtcblx0XHRsZXQgcmVzdWx0ID0gMDtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGxheWVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRyZXN1bHQgKz0gKHRoaXMucGxheWVkLmVuZChpKSAtIHRoaXMucGxheWVkLnN0YXJ0KGkpKVxuXHRcdH1cblxuXHRcdHJldHVybiByZXN1bHQgLyB0aGlzLmR1cmF0aW9uICogMTAwXG5cdH1cblxuXHRnZXQgY3VycmVudFNyYygpIHtcblx0XHRyZXR1cm4gdGhpcy5tZWRpYS5jdXJyZW50U3JjO1xuXHR9XG5cblx0aW5pdCAoKSB7XG5cdFx0c3VwZXIuaW5pdCgpO1xuXHRcdHRoaXMubG9hZCgpO1xuXHRcdGxldCBkZmQgPSAkLkRlZmVycmVkKCk7XG5cdFx0dGhpcy5faW5pdFN1YnRpdGxlcygpO1xuXHRcdHRoaXMuX2luaXRWaWRlbygpXG5cdFx0XHQuZG9uZSgoKSA9PiB7XG5cdFx0XHRcdHRoaXMuX2luaXRSYXRlKCk7XG5cdFx0XHRcdHRoaXMuX2luaXRWb2x1bWUoKTtcblx0XHRcdFx0ZGZkLnJlc29sdmUoKTtcblx0XHRcdH0pO1xuXHRcdHJldHVybiBkZmQucHJvbWlzZSgpO1xuXHR9XG5cblx0c3VwcG9ydHNGdWxsU2NyZWVuKCkge1xuXHRcdGlmICh0eXBlb2YgdGhpcy5tZWRpYS53ZWJraXRFbnRlckZ1bGxTY3JlZW4gPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdGNvbnN0IHVzZXJBZ2VudCA9IHdpbmRvdy5uYXZpZ2F0b3IgJiYgd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQgfHwgJyc7XG5cblx0XHRcdC8vIFNlZW1zIHRvIGJlIGJyb2tlbiBpbiBDaHJvbWl1bS9DaHJvbWUgJiYgU2FmYXJpIGluIExlb3BhcmRcblx0XHRcdGlmICgoL0FuZHJvaWQvKS50ZXN0KHVzZXJBZ2VudCkgfHwgISgvQ2hyb21lfE1hYyBPUyBYIDEwLjUvKS50ZXN0KHVzZXJBZ2VudCkpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGVudGVyRnVsbHNjcmVlbigpIHtcblx0XHRjb25zdCB2aWRlbyA9IHRoaXMubWVkaWE7XG5cdFx0aWYgKHZpZGVvLnBhdXNlZCAmJiB2aWRlby5uZXR3b3JrU3RhdGUgPD0gdmlkZW8uSEFWRV9NRVRBREFUQSkge1xuXHRcdFx0Ly8gYXR0ZW1wdCB0byBwcmltZSB0aGUgdmlkZW8gZWxlbWVudCBmb3IgcHJvZ3JhbW1hdGljIGFjY2Vzc1xuXHRcdFx0Ly8gdGhpcyBpc24ndCBuZWNlc3Nhcnkgb24gdGhlIGRlc2t0b3AgYnV0IHNob3VsZG4ndCBodXJ0XG5cdFx0XHR0aGlzLnBsYXkoKTtcblxuXHRcdFx0Ly8gcGxheWluZyBhbmQgcGF1c2luZyBzeW5jaHJvbm91c2x5IGR1cmluZyB0aGUgdHJhbnNpdGlvbiB0byBmdWxsc2NyZWVuXG5cdFx0XHQvLyBjYW4gZ2V0IGlPUyB+Ni4xIGRldmljZXMgaW50byBhIHBsYXkvcGF1c2UgbG9vcFxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdHRoaXMucGF1c2UoKTtcblx0XHRcdFx0dmlkZW8ud2Via2l0RW50ZXJGdWxsU2NyZWVuKCk7XG5cdFx0XHR9LCAwKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmlkZW8ud2Via2l0RW50ZXJGdWxsU2NyZWVuKCk7XG5cdFx0fVxuXHR9XG5cblx0ZXhpdEZ1bGxzY3JlZW4oKSB7XG5cdFx0dGhpcy5tZWRpYS53ZWJraXRFeGl0RnVsbFNjcmVlbigpO1xuXHR9XG5cblx0dG9nZ2xlUGxheSAoKSB7XG5cdFx0aWYgKCF0aGlzLm1lZGlhLnBsYXllZCB8fCB0aGlzLm1lZGlhLnBhdXNlZCkge1xuXHRcdFx0dGhpcy5wbGF5KCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucGF1c2UoKTtcblx0XHR9XG5cdH1cblxuXHRwbGF5ICgpIHtcblx0XHRsZXQgZGZkID0gJC5EZWZlcnJlZCgpO1xuXHRcdGNvbnN0IHBsYXlQcm9taXNlID0gdGhpcy5tZWRpYS5wbGF5KCk7XG5cblx0XHRpZihwbGF5UHJvbWlzZSAhPSBudWxsKSB7XG5cdFx0XHRwbGF5UHJvbWlzZS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRkZmQucmVzb2x2ZSgpO1xuXHRcdFx0fSlcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZGZkLnJlc29sdmUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIGRmZC5wcm9taXNlKCk7XG5cdH1cblxuXHRwYXVzZSAoKSB7XG5cdFx0bGV0IGRmZCA9ICQuRGVmZXJyZWQoKTtcblx0XHRjb25zdCBwYXVzZVByb21pc2UgPSB0aGlzLm1lZGlhLnBhdXNlKCk7XG5cblx0XHRpZihwYXVzZVByb21pc2UgIT0gbnVsbCkge1xuXHRcdFx0cGF1c2VQcm9taXNlLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGRmZC5yZXNvbHZlKCk7XG5cdFx0XHR9KVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRkZmQucmVzb2x2ZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gZGZkLnByb21pc2UoKTtcblx0fVxuXG5cdGxvYWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWVkaWEubG9hZCgpXG5cdH1cblxuXHRfaW5pdFN1YnRpdGxlcyAoKSB7XG5cdFx0bGV0IF9zZWxmID0gdGhpcztcblx0XHR0aGlzLmVsZW1lbnQuY2hpbGRyZW4oJ3RyYWNrW2tpbmQ9XCJzdWJ0aXRsZXNcIl0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHRcdGNvbnN0IGxhbmd1YWdlID0gJCh0aGlzKS5hdHRyKCdzcmNsYW5nJyk7XG5cdFx0XHRjb25zdCB0aXRsZSA9ICQodGhpcykuYXR0cignbGFiZWwnKTtcblx0XHRcdGNvbnN0IHNyYyA9ICQodGhpcykuYXR0cignc3JjJyk7XG5cdFx0XHRpZiAodGl0bGUubGVuZ3RoID4gMCAmJiBzcmMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRfc2VsZi5zdWJ0aXRsZXMucHVzaCh7XG5cdFx0XHRcdFx0dGl0bGUgOiB0aXRsZSxcblx0XHRcdFx0XHRuYW1lIDogbGFuZ3VhZ2UsXG5cdFx0XHRcdFx0bGFuZ3VhZ2UgOiBsYW5ndWFnZVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdF9pbml0VmlkZW8gKCkge1xuXHRcdGxldCBkZmQgPSAkLkRlZmVycmVkKCk7XG5cdFx0aWYgKHRoaXMubWVkaWEucmVhZHlTdGF0ZSA+IEhUTUxNZWRpYUVsZW1lbnQuSEFWRV9OT1RISU5HKSB7XG5cdFx0XHRkZmQucmVzb2x2ZSgpO1xuXHRcdFx0dGhpcy5fdGV4dFRyYWNrc0hhY2soKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JCh0aGlzLm1lZGlhKS5vbmUoJ2xvYWRlZG1ldGFkYXRhJywgKGUpID0+IHtcblx0XHRcdFx0ZGZkLnJlc29sdmUoKVxuXHRcdFx0XHR0aGlzLl90ZXh0VHJhY2tzSGFjaygpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdHJldHVybiBkZmQucHJvbWlzZSgpO1xuXHR9XG5cblx0X3RleHRUcmFja3NIYWNrICgpIHtcblxuXHRcdC8vIFRoaXMgaXMgZ2VuZXJhbGx5IGZvciBGaXJlZm94IG9ubHlcblx0XHQvLyBiZWNhdXNlIGl0IHNvbWVob3cgcmVzZXRzIHRyYWNrIGxpc3Rcblx0XHQvLyBmb3IgdmlkZW8gZWxlbWVudCBhZnRlciBET00gbWFuaXB1bGF0aW9uLlxuXG5cdFx0aWYgKHRoaXMubWVkaWEudGV4dFRyYWNrcy5sZW5ndGggPT09IDAgJiYgdGhpcy5zdWJ0aXRsZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0dGhpcy5lbGVtZW50LmNoaWxkcmVuKCd0cmFja1traW5kPVwic3VidGl0bGVzXCJdJykucmVtb3ZlKCk7XG5cdFx0XHRmb3IgKHZhciBpIGluIHRoaXMuc3VidGl0bGVzKSB7XG5cdFx0XHRcdGlmICh0aGlzLnN1YnRpdGxlcy5oYXNPd25Qcm9wZXJ0eShpKSkge1xuXHRcdFx0XHRcdHRoaXMuZWxlbWVudFxuXHRcdFx0XHRcdFx0LmFwcGVuZCgkKCc8dHJhY2svPicpXG5cdFx0XHRcdFx0XHRcdC5hdHRyKCdsYWJlbCcsIHRoaXMuc3VidGl0bGVzWyBpIF0udGl0bGUpXG5cdFx0XHRcdFx0XHRcdC5hdHRyKCdzcmMnLCB0aGlzLnN1YnRpdGxlc1sgaSBdLnNyYylcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ3NyY2xhbmcnLCB0aGlzLnN1YnRpdGxlc1sgaSBdLmxhbmd1YWdlKVxuXHRcdFx0XHRcdFx0XHQuYXR0cignaWQnLCB0aGlzLnN1YnRpdGxlc1sgaSBdLmxhbmd1YWdlKVxuXHRcdFx0XHRcdFx0XHQuYXR0cigna2luZCcsICdzdWJ0aXRsZXMnKSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxufVxuLyoqXG4gKiBNaW4gcmF0ZSBmb3IgYW5kcm9pZCBhbmQgaW9zXG4gKi9cbkh0bWw1Lk1PQklMRV9NSU5fUkFURSA9IDAuNTtcblxuLyoqXG4gKiBNYXggcmF0ZSBmb3IgYW5kcm9pZCBhbmQgaW9zXG4gKi9cbkh0bWw1Lk1PQklMRV9NQVhfUkFURSA9IDI7XG5cbkh0bWw1LlNBRkFSSV9NSU5fUkFURSA9IDAuNTtcblxuSHRtbDUuU0FGQVJJX01BWF9SQVRFID0gMjtcblxuSHRtbDUuVEVTVF9WSURFTyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJyk7XG5cbi8qKlxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqICAgICAgICAgLSBUcnVlIGlmIHZvbHVtZSBjYW4gYmUgY29udHJvbGxlZFxuICogICAgICAgICAtIEZhbHNlIG90aGVyd2lzZVxuICovXG5IdG1sNS5jYW5Db250cm9sVm9sdW1lID0gZnVuY3Rpb24oKSB7XG5cdC8vIElFIHdpbGwgZXJyb3IgaWYgV2luZG93cyBNZWRpYSBQbGF5ZXIgbm90IGluc3RhbGxlZCAjMzMxNVxuXHR0cnkge1xuXHRcdGNvbnN0IHZvbHVtZSA9IEh0bWw1LlRFU1RfVklERU8udm9sdW1lO1xuXG5cdFx0SHRtbDUuVEVTVF9WSURFTy52b2x1bWUgPSAodm9sdW1lIC8gMikgKyAwLjE7XG5cdFx0cmV0dXJuIHZvbHVtZSAhPT0gSHRtbDUuVEVTVF9WSURFTy52b2x1bWU7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn07XG5cbkh0bWw1LnByb3RvdHlwZS5mZWF0dXJlQ29udHJvbFZvbHVtZSA9IEh0bWw1LmNhbkNvbnRyb2xWb2x1bWUoKTtcblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdIdG1sNScsIEh0bWw1KTtcbmV4cG9ydCBkZWZhdWx0IEh0bWw1O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2VudGl0eS9IdG1sNS5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50cy9Db21wb25lbnQnO1xuaW1wb3J0IENvb2tpZSBmcm9tICcuLi91dGlscy9jb29raWUnO1xuaW1wb3J0IE1lZGlhRXJyb3IgZnJvbSAnLi4vTWVkaWFFcnJvcic7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5jbGFzcyBFbnRpdHkgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXHRcdHRoaXMuX3RyaWdnZXJTdGFjayA9IFtdO1xuXHRcdHRoaXMuX3N0b3BMaXN0ZW4gPSBmYWxzZTtcblxuXHRcdGlmICh0aGlzLnBsYXllci5vcHRpb25zLnNyYyA9PSBudWxsKSB7XG5cdFx0XHR0aGlzLnBsYXllci5lcnJvciA9IG5ldyBNZWRpYUVycm9yKCfQktC40LTQtdC+0YTQsNC50Lsg0L3QtSDQvdCw0LnQtNC10L0uJyk7XG5cdFx0fVxuXG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHR0cmlnZ2VyKC4uLmFyZ3MpIHtcblx0XHRpZighdGhpcy5fc3RvcExpc3Rlbikge1xuXHRcdFx0dGhpcy5fdHJpZ2dlclN0YWNrLnB1c2goYXJncyk7XG5cdFx0fVxuXHRcdHN1cGVyLnRyaWdnZXIoLi4uYXJncyk7XG5cdH1cblxuXHRpbml0KCkge1xuXHRcdHRoaXMuX3N0b3BMaXN0ZW4gPSB0cnVlO1xuXHRcdHRoaXMuX3RyaWdnZXJTdGFjay5mb3JFYWNoKGFyZ3MgPT4ge1xuXHRcdFx0dGhpcy50cmlnZ2VyKC4uLmFyZ3MpO1xuXHRcdH0pO1xuXHR9XG5cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50ID0gJCgnPGRpdiAvPicpO1xuXHR9XG5cblx0c2V0IHBvc3Rlcih1cmwpIHtcblx0XHR0aGlzLl9wb3N0ZXIgPSB1cmw7XG5cdFx0dGhpcy50cmlnZ2VyKCdwb3N0ZXJjaGFuZ2UnLCB7IHVybCB9KTtcblx0fVxuXG5cblx0Z2V0IHBvc3RlcigpIHtcblx0XHRyZXR1cm4gdGhpcy5fcG9zdGVyO1xuXHR9XG5cblx0Z2V0IGN1cnJlbnRUaW1lKCkge1xuXHRcdHJldHVyblxuXHR9XG5cblx0c2V0IGN1cnJlbnRUaW1lKHZhbHVlKSB7XG5cblx0fVxuXG5cdGdldCBkdXJhdGlvbigpIHtcblx0XHRyZXR1cm5cblx0fVxuXG5cdHNldCBtdXRlZCh2YWx1ZSkge1xuXG5cdH1cblxuXHRnZXQgbXV0ZWQoKSB7XG5cblx0fVxuXG5cdGdldCBoZWlnaHQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudC5pbm5lckhlaWdodCgpXG5cdH1cblxuXHRnZXQgd2lkdGgoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudC53aWR0aCgpXG5cdH1cblxuXHRzZXQgcmF0ZU1heCh2YWx1ZSkge1xuXHRcdHRoaXMuX3JhdGVNYXggPSB2YWx1ZTtcblx0fVxuXG5cdHNldCByYXRlTWluKHZhbHVlKSB7XG5cdFx0dGhpcy5fcmF0ZU1pbiA9IHZhbHVlO1xuXHR9XG5cblx0Z2V0IHJhdGVNYXgoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3JhdGVNYXggfHwgdGhpcy5wbGF5ZXIub3B0aW9ucy5yYXRlLm1heDtcblxuXHR9XG5cblx0Z2V0IHJhdGVNaW4oKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3JhdGVNaW4gfHwgdGhpcy5wbGF5ZXIub3B0aW9ucy5yYXRlLm1pbjtcblx0fVxuXG5cdGdldCByYXRlKCkge1xuXHR9XG5cblx0c2V0IHJhdGUodmFsdWUpIHtcblx0XHRpZih2YWx1ZSA+IHRoaXMucmF0ZU1heCB8fCB2YWx1ZSA8IHRoaXMucmF0ZU1pbikgcmV0dXJuO1xuXHRcdENvb2tpZS5zZXQoJ3JhdGUnLCB2YWx1ZSk7XG5cdH1cblxuXHRpbmNyZWFzZVJhdGUoKSB7XG5cdFx0dGhpcy5yYXRlICs9IHRoaXMucGxheWVyLm9wdGlvbnMucmF0ZS5zdGVwO1xuXHR9XG5cblx0ZGVjcmVhc2VSYXRlKCkge1xuXHRcdHRoaXMucmF0ZSAtPSB0aGlzLnBsYXllci5vcHRpb25zLnJhdGUuc3RlcDtcblx0fVxuXG5cdHNldCBwbGF5YmFja1F1YWxpdHkobmFtZSkge1xuXHRcdGNvbnN0IGxldmVscyA9IHRoaXMuZ2V0QXZhaWxhYmxlUXVhbGl0eUxldmVscygpO1xuXHRcdGlmKCFsZXZlbHMuc29tZShvYmogPT4gbmFtZSBpbiBvYmopKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHR9XG5cblx0Z2V0IHBsYXliYWNrUXVhbGl0eSgpIHtcblxuXHR9XG5cblx0Z2V0IHBhdXNlZCgpIHtcblxuXHR9XG5cblx0Z2V0IHBsYXllZCgpIHtcblxuXHR9XG5cblx0Z2V0IGRlZmF1bHRSYXRlKCkge1xuXHRcdHJldHVybiBDb29raWUuZ2V0KCdyYXRlJykgfHwgdGhpcy5wbGF5ZXIub3B0aW9ucy5yYXRlLmRlZmF1bHRcblx0fVxuXG5cdGdldCBkZWZhdWx0Vm9sdW1lICgpIHtcblx0XHRyZXR1cm4gQ29va2llLmdldCgndm9sdW1lJykgfHwgdGhpcy5wbGF5ZXIub3B0aW9ucy52b2x1bWUuZGVmYXVsdDtcblx0fVxuXG5cdHNldCB2b2x1bWUodmFsdWUpIHtcblx0XHRjb25zdCBwbGF5ZXIgPSB0aGlzLnBsYXllcjtcblx0XHRpZih2YWx1ZSA8IDEgJiYgdmFsdWUgPiBwbGF5ZXIub3B0aW9ucy52b2x1bWUubXV0ZWxpbWl0KSB7XG5cdFx0XHRDb29raWUuc2V0KCd2b2x1bWUnLCB2YWx1ZSk7XG5cdFx0fVxuXHR9XG5cblx0c2V0IHNyYyAodmFsdWUpIHtcblxuXHR9XG5cblx0Z2V0IHNyYygpIHtcblxuXHR9XG5cblx0c3VwcG9ydHNGdWxsU2NyZWVuKCkge1xuXG5cdH1cblxuXHRwbGF5KCkge1xuXG5cdH1cblxuXHRwYXVzZSAoKSB7XG5cblx0fVxuXG5cdGxvYWQoKSB7XG5cdH1cblxuXHR0b2dnbGVQbGF5ICgpIHtcblx0XHRpZiAodGhpcy5wYXVzZWQpIHtcblx0XHRcdHRoaXMucGxheSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnBhdXNlKCk7XG5cdFx0fVxuXHR9XG5cblx0X2luaXRSYXRlICgpIHtcblx0XHR0aGlzLnJhdGUgPSB0aGlzLmRlZmF1bHRSYXRlO1xuXHR9XG5cblx0X2luaXRWb2x1bWUgKCkge1xuXHRcdHRoaXMudm9sdW1lID0gdGhpcy5kZWZhdWx0Vm9sdW1lO1xuXHR9XG5cbn1cbkVudGl0eS5wcm90b3R5cGUuZmVhdHVyZUNvbnRyb2xWb2x1bWUgPSB0cnVlO1xuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ0VudGl0eScsIEVudGl0eSk7XG5cbmV4cG9ydCBkZWZhdWx0IEVudGl0eTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9lbnRpdHkvRW50aXR5LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZGVmaW5lID0gcmVxdWlyZSgnZGVmaW5lLXByb3BlcnRpZXMnKTtcbnZhciBFUyA9IHJlcXVpcmUoJ2VzLWFic3RyYWN0L2VzNicpO1xuXG52YXIgaW1wbGVtZW50YXRpb24gPSByZXF1aXJlKCcuL2ltcGxlbWVudGF0aW9uJyk7XG52YXIgZ2V0UG9seWZpbGwgPSByZXF1aXJlKCcuL3BvbHlmaWxsJyk7XG52YXIgc2hpbSA9IHJlcXVpcmUoJy4vc2hpbScpO1xuXG52YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG5cbnZhciBwb2x5ZmlsbCA9IGdldFBvbHlmaWxsKCk7XG5cbnZhciBib3VuZEZpbmRTaGltID0gZnVuY3Rpb24gZmluZChhcnJheSwgcHJlZGljYXRlKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcblx0RVMuUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcnJheSk7XG5cdHZhciBhcmdzID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuXHRyZXR1cm4gcG9seWZpbGwuYXBwbHkoYXJyYXksIGFyZ3MpO1xufTtcblxuZGVmaW5lKGJvdW5kRmluZFNoaW0sIHtcblx0Z2V0UG9seWZpbGw6IGdldFBvbHlmaWxsLFxuXHRpbXBsZW1lbnRhdGlvbjogaW1wbGVtZW50YXRpb24sXG5cdHNoaW06IHNoaW1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJvdW5kRmluZFNoaW07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYXJyYXkucHJvdG90eXBlLmZpbmQvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIga2V5cyA9IHJlcXVpcmUoJ29iamVjdC1rZXlzJyk7XG52YXIgaGFzU3ltYm9scyA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIFN5bWJvbCgnZm9vJykgPT09ICdzeW1ib2wnO1xuXG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIGNvbmNhdCA9IEFycmF5LnByb3RvdHlwZS5jb25jYXQ7XG52YXIgb3JpZ0RlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG52YXIgaXNGdW5jdGlvbiA9IGZ1bmN0aW9uIChmbikge1xuXHRyZXR1cm4gdHlwZW9mIGZuID09PSAnZnVuY3Rpb24nICYmIHRvU3RyLmNhbGwoZm4pID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xufTtcblxudmFyIGFyZVByb3BlcnR5RGVzY3JpcHRvcnNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoKSB7XG5cdHZhciBvYmogPSB7fTtcblx0dHJ5IHtcblx0XHRvcmlnRGVmaW5lUHJvcGVydHkob2JqLCAneCcsIHsgZW51bWVyYWJsZTogZmFsc2UsIHZhbHVlOiBvYmogfSk7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzLCBuby1yZXN0cmljdGVkLXN5bnRheFxuXHRcdGZvciAodmFyIF8gaW4gb2JqKSB7IC8vIGpzY3M6aWdub3JlIGRpc2FsbG93VW51c2VkVmFyaWFibGVzXG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHJldHVybiBvYmoueCA9PT0gb2JqO1xuXHR9IGNhdGNoIChlKSB7IC8qIHRoaXMgaXMgSUUgOC4gKi9cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn07XG52YXIgc3VwcG9ydHNEZXNjcmlwdG9ycyA9IG9yaWdEZWZpbmVQcm9wZXJ0eSAmJiBhcmVQcm9wZXJ0eURlc2NyaXB0b3JzU3VwcG9ydGVkKCk7XG5cbnZhciBkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIChvYmplY3QsIG5hbWUsIHZhbHVlLCBwcmVkaWNhdGUpIHtcblx0aWYgKG5hbWUgaW4gb2JqZWN0ICYmICghaXNGdW5jdGlvbihwcmVkaWNhdGUpIHx8ICFwcmVkaWNhdGUoKSkpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0aWYgKHN1cHBvcnRzRGVzY3JpcHRvcnMpIHtcblx0XHRvcmlnRGVmaW5lUHJvcGVydHkob2JqZWN0LCBuYW1lLCB7XG5cdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG5cdFx0XHRlbnVtZXJhYmxlOiBmYWxzZSxcblx0XHRcdHZhbHVlOiB2YWx1ZSxcblx0XHRcdHdyaXRhYmxlOiB0cnVlXG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0b2JqZWN0W25hbWVdID0gdmFsdWU7XG5cdH1cbn07XG5cbnZhciBkZWZpbmVQcm9wZXJ0aWVzID0gZnVuY3Rpb24gKG9iamVjdCwgbWFwKSB7XG5cdHZhciBwcmVkaWNhdGVzID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgPyBhcmd1bWVudHNbMl0gOiB7fTtcblx0dmFyIHByb3BzID0ga2V5cyhtYXApO1xuXHRpZiAoaGFzU3ltYm9scykge1xuXHRcdHByb3BzID0gY29uY2F0LmNhbGwocHJvcHMsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMobWFwKSk7XG5cdH1cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdGRlZmluZVByb3BlcnR5KG9iamVjdCwgcHJvcHNbaV0sIG1hcFtwcm9wc1tpXV0sIHByZWRpY2F0ZXNbcHJvcHNbaV1dKTtcblx0fVxufTtcblxuZGVmaW5lUHJvcGVydGllcy5zdXBwb3J0c0Rlc2NyaXB0b3JzID0gISFzdXBwb3J0c0Rlc2NyaXB0b3JzO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlZmluZVByb3BlcnRpZXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZGVmaW5lLXByb3BlcnRpZXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG52YXIgaXNBcmdzID0gcmVxdWlyZSgnLi9pc0FyZ3VtZW50cycpO1xuXG52YXIgb3JpZ0tleXMgPSBPYmplY3Qua2V5cztcbnZhciBrZXlzU2hpbSA9IG9yaWdLZXlzID8gZnVuY3Rpb24ga2V5cyhvKSB7IHJldHVybiBvcmlnS2V5cyhvKTsgfSA6IHJlcXVpcmUoJy4vaW1wbGVtZW50YXRpb24nKTtcblxudmFyIG9yaWdpbmFsS2V5cyA9IE9iamVjdC5rZXlzO1xuXG5rZXlzU2hpbS5zaGltID0gZnVuY3Rpb24gc2hpbU9iamVjdEtleXMoKSB7XG5cdGlmIChPYmplY3Qua2V5cykge1xuXHRcdHZhciBrZXlzV29ya3NXaXRoQXJndW1lbnRzID0gKGZ1bmN0aW9uICgpIHtcblx0XHRcdC8vIFNhZmFyaSA1LjAgYnVnXG5cdFx0XHR2YXIgYXJncyA9IE9iamVjdC5rZXlzKGFyZ3VtZW50cyk7XG5cdFx0XHRyZXR1cm4gYXJncyAmJiBhcmdzLmxlbmd0aCA9PT0gYXJndW1lbnRzLmxlbmd0aDtcblx0XHR9KDEsIDIpKTtcblx0XHRpZiAoIWtleXNXb3Jrc1dpdGhBcmd1bWVudHMpIHtcblx0XHRcdE9iamVjdC5rZXlzID0gZnVuY3Rpb24ga2V5cyhvYmplY3QpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBmdW5jLW5hbWUtbWF0Y2hpbmdcblx0XHRcdFx0aWYgKGlzQXJncyhvYmplY3QpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG9yaWdpbmFsS2V5cyhzbGljZS5jYWxsKG9iamVjdCkpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBvcmlnaW5hbEtleXMob2JqZWN0KTtcblx0XHRcdH07XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdE9iamVjdC5rZXlzID0ga2V5c1NoaW07XG5cdH1cblx0cmV0dXJuIE9iamVjdC5rZXlzIHx8IGtleXNTaGltO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBrZXlzU2hpbTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9vYmplY3Qta2V5cy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNBcmd1bWVudHModmFsdWUpIHtcblx0dmFyIHN0ciA9IHRvU3RyLmNhbGwodmFsdWUpO1xuXHR2YXIgaXNBcmdzID0gc3RyID09PSAnW29iamVjdCBBcmd1bWVudHNdJztcblx0aWYgKCFpc0FyZ3MpIHtcblx0XHRpc0FyZ3MgPSBzdHIgIT09ICdbb2JqZWN0IEFycmF5XScgJiZcblx0XHRcdHZhbHVlICE9PSBudWxsICYmXG5cdFx0XHR0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmXG5cdFx0XHR0eXBlb2YgdmFsdWUubGVuZ3RoID09PSAnbnVtYmVyJyAmJlxuXHRcdFx0dmFsdWUubGVuZ3RoID49IDAgJiZcblx0XHRcdHRvU3RyLmNhbGwodmFsdWUuY2FsbGVlKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcblx0fVxuXHRyZXR1cm4gaXNBcmdzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9vYmplY3Qta2V5cy9pc0FyZ3VtZW50cy5qc1xuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbnZhciBrZXlzU2hpbTtcbmlmICghT2JqZWN0LmtleXMpIHtcblx0Ly8gbW9kaWZpZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZXMtc2hpbXMvZXM1LXNoaW1cblx0dmFyIGhhcyA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cdHZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cdHZhciBpc0FyZ3MgPSByZXF1aXJlKCcuL2lzQXJndW1lbnRzJyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZ2xvYmFsLXJlcXVpcmVcblx0dmFyIGlzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cdHZhciBoYXNEb250RW51bUJ1ZyA9ICFpc0VudW1lcmFibGUuY2FsbCh7IHRvU3RyaW5nOiBudWxsIH0sICd0b1N0cmluZycpO1xuXHR2YXIgaGFzUHJvdG9FbnVtQnVnID0gaXNFbnVtZXJhYmxlLmNhbGwoZnVuY3Rpb24gKCkge30sICdwcm90b3R5cGUnKTtcblx0dmFyIGRvbnRFbnVtcyA9IFtcblx0XHQndG9TdHJpbmcnLFxuXHRcdCd0b0xvY2FsZVN0cmluZycsXG5cdFx0J3ZhbHVlT2YnLFxuXHRcdCdoYXNPd25Qcm9wZXJ0eScsXG5cdFx0J2lzUHJvdG90eXBlT2YnLFxuXHRcdCdwcm9wZXJ0eUlzRW51bWVyYWJsZScsXG5cdFx0J2NvbnN0cnVjdG9yJ1xuXHRdO1xuXHR2YXIgZXF1YWxzQ29uc3RydWN0b3JQcm90b3R5cGUgPSBmdW5jdGlvbiAobykge1xuXHRcdHZhciBjdG9yID0gby5jb25zdHJ1Y3Rvcjtcblx0XHRyZXR1cm4gY3RvciAmJiBjdG9yLnByb3RvdHlwZSA9PT0gbztcblx0fTtcblx0dmFyIGV4Y2x1ZGVkS2V5cyA9IHtcblx0XHQkYXBwbGljYXRpb25DYWNoZTogdHJ1ZSxcblx0XHQkY29uc29sZTogdHJ1ZSxcblx0XHQkZXh0ZXJuYWw6IHRydWUsXG5cdFx0JGZyYW1lOiB0cnVlLFxuXHRcdCRmcmFtZUVsZW1lbnQ6IHRydWUsXG5cdFx0JGZyYW1lczogdHJ1ZSxcblx0XHQkaW5uZXJIZWlnaHQ6IHRydWUsXG5cdFx0JGlubmVyV2lkdGg6IHRydWUsXG5cdFx0JG9ubW96ZnVsbHNjcmVlbmNoYW5nZTogdHJ1ZSxcblx0XHQkb25tb3pmdWxsc2NyZWVuZXJyb3I6IHRydWUsXG5cdFx0JG91dGVySGVpZ2h0OiB0cnVlLFxuXHRcdCRvdXRlcldpZHRoOiB0cnVlLFxuXHRcdCRwYWdlWE9mZnNldDogdHJ1ZSxcblx0XHQkcGFnZVlPZmZzZXQ6IHRydWUsXG5cdFx0JHBhcmVudDogdHJ1ZSxcblx0XHQkc2Nyb2xsTGVmdDogdHJ1ZSxcblx0XHQkc2Nyb2xsVG9wOiB0cnVlLFxuXHRcdCRzY3JvbGxYOiB0cnVlLFxuXHRcdCRzY3JvbGxZOiB0cnVlLFxuXHRcdCRzZWxmOiB0cnVlLFxuXHRcdCR3ZWJraXRJbmRleGVkREI6IHRydWUsXG5cdFx0JHdlYmtpdFN0b3JhZ2VJbmZvOiB0cnVlLFxuXHRcdCR3aW5kb3c6IHRydWVcblx0fTtcblx0dmFyIGhhc0F1dG9tYXRpb25FcXVhbGl0eUJ1ZyA9IChmdW5jdGlvbiAoKSB7XG5cdFx0LyogZ2xvYmFsIHdpbmRvdyAqL1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgeyByZXR1cm4gZmFsc2U7IH1cblx0XHRmb3IgKHZhciBrIGluIHdpbmRvdykge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0aWYgKCFleGNsdWRlZEtleXNbJyQnICsga10gJiYgaGFzLmNhbGwod2luZG93LCBrKSAmJiB3aW5kb3dba10gIT09IG51bGwgJiYgdHlwZW9mIHdpbmRvd1trXSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0ZXF1YWxzQ29uc3RydWN0b3JQcm90b3R5cGUod2luZG93W2tdKTtcblx0XHRcdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fSgpKTtcblx0dmFyIGVxdWFsc0NvbnN0cnVjdG9yUHJvdG90eXBlSWZOb3RCdWdneSA9IGZ1bmN0aW9uIChvKSB7XG5cdFx0LyogZ2xvYmFsIHdpbmRvdyAqL1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCAhaGFzQXV0b21hdGlvbkVxdWFsaXR5QnVnKSB7XG5cdFx0XHRyZXR1cm4gZXF1YWxzQ29uc3RydWN0b3JQcm90b3R5cGUobyk7XG5cdFx0fVxuXHRcdHRyeSB7XG5cdFx0XHRyZXR1cm4gZXF1YWxzQ29uc3RydWN0b3JQcm90b3R5cGUobyk7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fTtcblxuXHRrZXlzU2hpbSA9IGZ1bmN0aW9uIGtleXMob2JqZWN0KSB7XG5cdFx0dmFyIGlzT2JqZWN0ID0gb2JqZWN0ICE9PSBudWxsICYmIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnO1xuXHRcdHZhciBpc0Z1bmN0aW9uID0gdG9TdHIuY2FsbChvYmplY3QpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xuXHRcdHZhciBpc0FyZ3VtZW50cyA9IGlzQXJncyhvYmplY3QpO1xuXHRcdHZhciBpc1N0cmluZyA9IGlzT2JqZWN0ICYmIHRvU3RyLmNhbGwob2JqZWN0KSA9PT0gJ1tvYmplY3QgU3RyaW5nXSc7XG5cdFx0dmFyIHRoZUtleXMgPSBbXTtcblxuXHRcdGlmICghaXNPYmplY3QgJiYgIWlzRnVuY3Rpb24gJiYgIWlzQXJndW1lbnRzKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3Qua2V5cyBjYWxsZWQgb24gYSBub24tb2JqZWN0Jyk7XG5cdFx0fVxuXG5cdFx0dmFyIHNraXBQcm90byA9IGhhc1Byb3RvRW51bUJ1ZyAmJiBpc0Z1bmN0aW9uO1xuXHRcdGlmIChpc1N0cmluZyAmJiBvYmplY3QubGVuZ3RoID4gMCAmJiAhaGFzLmNhbGwob2JqZWN0LCAwKSkge1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBvYmplY3QubGVuZ3RoOyArK2kpIHtcblx0XHRcdFx0dGhlS2V5cy5wdXNoKFN0cmluZyhpKSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGlzQXJndW1lbnRzICYmIG9iamVjdC5sZW5ndGggPiAwKSB7XG5cdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IG9iamVjdC5sZW5ndGg7ICsraikge1xuXHRcdFx0XHR0aGVLZXlzLnB1c2goU3RyaW5nKGopKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Zm9yICh2YXIgbmFtZSBpbiBvYmplY3QpIHtcblx0XHRcdFx0aWYgKCEoc2tpcFByb3RvICYmIG5hbWUgPT09ICdwcm90b3R5cGUnKSAmJiBoYXMuY2FsbChvYmplY3QsIG5hbWUpKSB7XG5cdFx0XHRcdFx0dGhlS2V5cy5wdXNoKFN0cmluZyhuYW1lKSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoaGFzRG9udEVudW1CdWcpIHtcblx0XHRcdHZhciBza2lwQ29uc3RydWN0b3IgPSBlcXVhbHNDb25zdHJ1Y3RvclByb3RvdHlwZUlmTm90QnVnZ3kob2JqZWN0KTtcblxuXHRcdFx0Zm9yICh2YXIgayA9IDA7IGsgPCBkb250RW51bXMubGVuZ3RoOyArK2spIHtcblx0XHRcdFx0aWYgKCEoc2tpcENvbnN0cnVjdG9yICYmIGRvbnRFbnVtc1trXSA9PT0gJ2NvbnN0cnVjdG9yJykgJiYgaGFzLmNhbGwob2JqZWN0LCBkb250RW51bXNba10pKSB7XG5cdFx0XHRcdFx0dGhlS2V5cy5wdXNoKGRvbnRFbnVtc1trXSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHRoZUtleXM7XG5cdH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGtleXNTaGltO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L29iamVjdC1rZXlzL2ltcGxlbWVudGF0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2VzMjAxNScpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VzLWFic3RyYWN0L2VzNi5qc1xuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbnZhciBoYXMgPSByZXF1aXJlKCdoYXMnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJ2VzLXRvLXByaW1pdGl2ZS9lczYnKTtcbnZhciBrZXlzID0gcmVxdWlyZSgnb2JqZWN0LWtleXMnKTtcblxudmFyIEdldEludHJpbnNpYyA9IHJlcXVpcmUoJy4vR2V0SW50cmluc2ljJyk7XG5cbnZhciAkVHlwZUVycm9yID0gR2V0SW50cmluc2ljKCclVHlwZUVycm9yJScpO1xudmFyICRTeW50YXhFcnJvciA9IEdldEludHJpbnNpYygnJVN5bnRheEVycm9yJScpO1xudmFyICRBcnJheSA9IEdldEludHJpbnNpYygnJUFycmF5JScpO1xudmFyICRTdHJpbmcgPSBHZXRJbnRyaW5zaWMoJyVTdHJpbmclJyk7XG52YXIgJE9iamVjdCA9IEdldEludHJpbnNpYygnJU9iamVjdCUnKTtcbnZhciAkTnVtYmVyID0gR2V0SW50cmluc2ljKCclTnVtYmVyJScpO1xudmFyICRTeW1ib2wgPSBHZXRJbnRyaW5zaWMoJyVTeW1ib2wlJywgdHJ1ZSk7XG52YXIgJFJlZ0V4cCA9IEdldEludHJpbnNpYygnJVJlZ0V4cCUnKTtcblxudmFyIGhhc1N5bWJvbHMgPSAhISRTeW1ib2w7XG5cbnZhciBhc3NlcnRSZWNvcmQgPSByZXF1aXJlKCcuL2hlbHBlcnMvYXNzZXJ0UmVjb3JkJyk7XG52YXIgJGlzTmFOID0gcmVxdWlyZSgnLi9oZWxwZXJzL2lzTmFOJyk7XG52YXIgJGlzRmluaXRlID0gcmVxdWlyZSgnLi9oZWxwZXJzL2lzRmluaXRlJyk7XG52YXIgTUFYX1NBRkVfSU5URUdFUiA9ICROdW1iZXIuTUFYX1NBRkVfSU5URUdFUiB8fCBNYXRoLnBvdygyLCA1MykgLSAxO1xuXG52YXIgYXNzaWduID0gcmVxdWlyZSgnLi9oZWxwZXJzL2Fzc2lnbicpO1xudmFyIHNpZ24gPSByZXF1aXJlKCcuL2hlbHBlcnMvc2lnbicpO1xudmFyIG1vZCA9IHJlcXVpcmUoJy4vaGVscGVycy9tb2QnKTtcbnZhciBpc1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vaGVscGVycy9pc1ByaW1pdGl2ZScpO1xudmFyIHBhcnNlSW50ZWdlciA9IHBhcnNlSW50O1xudmFyIGJpbmQgPSByZXF1aXJlKCdmdW5jdGlvbi1iaW5kJyk7XG52YXIgYXJyYXlTbGljZSA9IGJpbmQuY2FsbChGdW5jdGlvbi5jYWxsLCAkQXJyYXkucHJvdG90eXBlLnNsaWNlKTtcbnZhciBzdHJTbGljZSA9IGJpbmQuY2FsbChGdW5jdGlvbi5jYWxsLCAkU3RyaW5nLnByb3RvdHlwZS5zbGljZSk7XG52YXIgaXNCaW5hcnkgPSBiaW5kLmNhbGwoRnVuY3Rpb24uY2FsbCwgJFJlZ0V4cC5wcm90b3R5cGUudGVzdCwgL14wYlswMV0rJC9pKTtcbnZhciBpc09jdGFsID0gYmluZC5jYWxsKEZ1bmN0aW9uLmNhbGwsICRSZWdFeHAucHJvdG90eXBlLnRlc3QsIC9eMG9bMC03XSskL2kpO1xudmFyIHJlZ2V4RXhlYyA9IGJpbmQuY2FsbChGdW5jdGlvbi5jYWxsLCAkUmVnRXhwLnByb3RvdHlwZS5leGVjKTtcbnZhciBub25XUyA9IFsnXFx1MDA4NScsICdcXHUyMDBiJywgJ1xcdWZmZmUnXS5qb2luKCcnKTtcbnZhciBub25XU3JlZ2V4ID0gbmV3ICRSZWdFeHAoJ1snICsgbm9uV1MgKyAnXScsICdnJyk7XG52YXIgaGFzTm9uV1MgPSBiaW5kLmNhbGwoRnVuY3Rpb24uY2FsbCwgJFJlZ0V4cC5wcm90b3R5cGUudGVzdCwgbm9uV1NyZWdleCk7XG52YXIgaW52YWxpZEhleExpdGVyYWwgPSAvXlstK10weFswLTlhLWZdKyQvaTtcbnZhciBpc0ludmFsaWRIZXhMaXRlcmFsID0gYmluZC5jYWxsKEZ1bmN0aW9uLmNhbGwsICRSZWdFeHAucHJvdG90eXBlLnRlc3QsIGludmFsaWRIZXhMaXRlcmFsKTtcbnZhciAkY2hhckNvZGVBdCA9IGJpbmQuY2FsbChGdW5jdGlvbi5jYWxsLCAkU3RyaW5nLnByb3RvdHlwZS5jaGFyQ29kZUF0KTtcblxudmFyIHRvU3RyID0gYmluZC5jYWxsKEZ1bmN0aW9uLmNhbGwsIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcpO1xuXG52YXIgJE51bWJlclZhbHVlT2YgPSBiaW5kLmNhbGwoRnVuY3Rpb24uY2FsbCwgR2V0SW50cmluc2ljKCclTnVtYmVyUHJvdG90eXBlJScpLnZhbHVlT2YpO1xudmFyICRCb29sZWFuVmFsdWVPZiA9IGJpbmQuY2FsbChGdW5jdGlvbi5jYWxsLCBHZXRJbnRyaW5zaWMoJyVCb29sZWFuUHJvdG90eXBlJScpLnZhbHVlT2YpO1xudmFyICRTdHJpbmdWYWx1ZU9mID0gYmluZC5jYWxsKEZ1bmN0aW9uLmNhbGwsIEdldEludHJpbnNpYygnJVN0cmluZ1Byb3RvdHlwZSUnKS52YWx1ZU9mKTtcbnZhciAkRGF0ZVZhbHVlT2YgPSBiaW5kLmNhbGwoRnVuY3Rpb24uY2FsbCwgR2V0SW50cmluc2ljKCclRGF0ZVByb3RvdHlwZSUnKS52YWx1ZU9mKTtcblxudmFyICRmbG9vciA9IE1hdGguZmxvb3I7XG52YXIgJGFicyA9IE1hdGguYWJzO1xuXG52YXIgJE9iamVjdENyZWF0ZSA9IE9iamVjdC5jcmVhdGU7XG52YXIgJGdPUEQgPSAkT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxudmFyICRpc0V4dGVuc2libGUgPSAkT2JqZWN0LmlzRXh0ZW5zaWJsZTtcblxudmFyICRkZWZpbmVQcm9wZXJ0eSA9ICRPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbi8vIHdoaXRlc3BhY2UgZnJvbTogaHR0cDovL2VzNS5naXRodWIuaW8vI3gxNS41LjQuMjBcbi8vIGltcGxlbWVudGF0aW9uIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2VzLXNoaW1zL2VzNS1zaGltL2Jsb2IvdjMuNC4wL2VzNS1zaGltLmpzI0wxMzA0LUwxMzI0XG52YXIgd3MgPSBbXG5cdCdcXHgwOVxceDBBXFx4MEJcXHgwQ1xceDBEXFx4MjBcXHhBMFxcdTE2ODBcXHUxODBFXFx1MjAwMFxcdTIwMDFcXHUyMDAyXFx1MjAwMycsXG5cdCdcXHUyMDA0XFx1MjAwNVxcdTIwMDZcXHUyMDA3XFx1MjAwOFxcdTIwMDlcXHUyMDBBXFx1MjAyRlxcdTIwNUZcXHUzMDAwXFx1MjAyOCcsXG5cdCdcXHUyMDI5XFx1RkVGRidcbl0uam9pbignJyk7XG52YXIgdHJpbVJlZ2V4ID0gbmV3IFJlZ0V4cCgnKF5bJyArIHdzICsgJ10rKXwoWycgKyB3cyArICddKyQpJywgJ2cnKTtcbnZhciByZXBsYWNlID0gYmluZC5jYWxsKEZ1bmN0aW9uLmNhbGwsICRTdHJpbmcucHJvdG90eXBlLnJlcGxhY2UpO1xudmFyIHRyaW0gPSBmdW5jdGlvbiAodmFsdWUpIHtcblx0cmV0dXJuIHJlcGxhY2UodmFsdWUsIHRyaW1SZWdleCwgJycpO1xufTtcblxudmFyIEVTNSA9IHJlcXVpcmUoJy4vZXM1Jyk7XG5cbnZhciBoYXNSZWdFeHBNYXRjaGVyID0gcmVxdWlyZSgnaXMtcmVnZXgnKTtcblxuLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWFic3RyYWN0LW9wZXJhdGlvbnNcbnZhciBFUzYgPSBhc3NpZ24oYXNzaWduKHt9LCBFUzUpLCB7XG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWNhbGwtZi12LWFyZ3Ncblx0Q2FsbDogZnVuY3Rpb24gQ2FsbChGLCBWKSB7XG5cdFx0dmFyIGFyZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IFtdO1xuXHRcdGlmICghdGhpcy5Jc0NhbGxhYmxlKEYpKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcihGICsgJyBpcyBub3QgYSBmdW5jdGlvbicpO1xuXHRcdH1cblx0XHRyZXR1cm4gRi5hcHBseShWLCBhcmdzKTtcblx0fSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG9wcmltaXRpdmVcblx0VG9QcmltaXRpdmU6IHRvUHJpbWl0aXZlLFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b2Jvb2xlYW5cblx0Ly8gVG9Cb29sZWFuOiBFUzUuVG9Cb29sZWFuLFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy10b251bWJlclxuXHRUb051bWJlcjogZnVuY3Rpb24gVG9OdW1iZXIoYXJndW1lbnQpIHtcblx0XHR2YXIgdmFsdWUgPSBpc1ByaW1pdGl2ZShhcmd1bWVudCkgPyBhcmd1bWVudCA6IHRvUHJpbWl0aXZlKGFyZ3VtZW50LCAkTnVtYmVyKTtcblx0XHRpZiAodHlwZW9mIHZhbHVlID09PSAnc3ltYm9sJykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IGEgU3ltYm9sIHZhbHVlIHRvIGEgbnVtYmVyJyk7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRpZiAoaXNCaW5hcnkodmFsdWUpKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLlRvTnVtYmVyKHBhcnNlSW50ZWdlcihzdHJTbGljZSh2YWx1ZSwgMiksIDIpKTtcblx0XHRcdH0gZWxzZSBpZiAoaXNPY3RhbCh2YWx1ZSkpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuVG9OdW1iZXIocGFyc2VJbnRlZ2VyKHN0clNsaWNlKHZhbHVlLCAyKSwgOCkpO1xuXHRcdFx0fSBlbHNlIGlmIChoYXNOb25XUyh2YWx1ZSkgfHwgaXNJbnZhbGlkSGV4TGl0ZXJhbCh2YWx1ZSkpIHtcblx0XHRcdFx0cmV0dXJuIE5hTjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciB0cmltbWVkID0gdHJpbSh2YWx1ZSk7XG5cdFx0XHRcdGlmICh0cmltbWVkICE9PSB2YWx1ZSkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLlRvTnVtYmVyKHRyaW1tZWQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiAkTnVtYmVyKHZhbHVlKTtcblx0fSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG9pbnRlZ2VyXG5cdC8vIFRvSW50ZWdlcjogRVM1LlRvTnVtYmVyLFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b2ludDMyXG5cdC8vIFRvSW50MzI6IEVTNS5Ub0ludDMyLFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b3VpbnQzMlxuXHQvLyBUb1VpbnQzMjogRVM1LlRvVWludDMyLFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b2ludDE2XG5cdFRvSW50MTY6IGZ1bmN0aW9uIFRvSW50MTYoYXJndW1lbnQpIHtcblx0XHR2YXIgaW50MTZiaXQgPSB0aGlzLlRvVWludDE2KGFyZ3VtZW50KTtcblx0XHRyZXR1cm4gaW50MTZiaXQgPj0gMHg4MDAwID8gaW50MTZiaXQgLSAweDEwMDAwIDogaW50MTZiaXQ7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvdWludDE2XG5cdC8vIFRvVWludDE2OiBFUzUuVG9VaW50MTYsXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvaW50OFxuXHRUb0ludDg6IGZ1bmN0aW9uIFRvSW50OChhcmd1bWVudCkge1xuXHRcdHZhciBpbnQ4Yml0ID0gdGhpcy5Ub1VpbnQ4KGFyZ3VtZW50KTtcblx0XHRyZXR1cm4gaW50OGJpdCA+PSAweDgwID8gaW50OGJpdCAtIDB4MTAwIDogaW50OGJpdDtcblx0fSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG91aW50OFxuXHRUb1VpbnQ4OiBmdW5jdGlvbiBUb1VpbnQ4KGFyZ3VtZW50KSB7XG5cdFx0dmFyIG51bWJlciA9IHRoaXMuVG9OdW1iZXIoYXJndW1lbnQpO1xuXHRcdGlmICgkaXNOYU4obnVtYmVyKSB8fCBudW1iZXIgPT09IDAgfHwgISRpc0Zpbml0ZShudW1iZXIpKSB7IHJldHVybiAwOyB9XG5cdFx0dmFyIHBvc0ludCA9IHNpZ24obnVtYmVyKSAqICRmbG9vcigkYWJzKG51bWJlcikpO1xuXHRcdHJldHVybiBtb2QocG9zSW50LCAweDEwMCk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvdWludDhjbGFtcFxuXHRUb1VpbnQ4Q2xhbXA6IGZ1bmN0aW9uIFRvVWludDhDbGFtcChhcmd1bWVudCkge1xuXHRcdHZhciBudW1iZXIgPSB0aGlzLlRvTnVtYmVyKGFyZ3VtZW50KTtcblx0XHRpZiAoJGlzTmFOKG51bWJlcikgfHwgbnVtYmVyIDw9IDApIHsgcmV0dXJuIDA7IH1cblx0XHRpZiAobnVtYmVyID49IDB4RkYpIHsgcmV0dXJuIDB4RkY7IH1cblx0XHR2YXIgZiA9ICRmbG9vcihhcmd1bWVudCk7XG5cdFx0aWYgKGYgKyAwLjUgPCBudW1iZXIpIHsgcmV0dXJuIGYgKyAxOyB9XG5cdFx0aWYgKG51bWJlciA8IGYgKyAwLjUpIHsgcmV0dXJuIGY7IH1cblx0XHRpZiAoZiAlIDIgIT09IDApIHsgcmV0dXJuIGYgKyAxOyB9XG5cdFx0cmV0dXJuIGY7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvc3RyaW5nXG5cdFRvU3RyaW5nOiBmdW5jdGlvbiBUb1N0cmluZyhhcmd1bWVudCkge1xuXHRcdGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdzeW1ib2wnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgYSBTeW1ib2wgdmFsdWUgdG8gYSBzdHJpbmcnKTtcblx0XHR9XG5cdFx0cmV0dXJuICRTdHJpbmcoYXJndW1lbnQpO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b29iamVjdFxuXHRUb09iamVjdDogZnVuY3Rpb24gVG9PYmplY3QodmFsdWUpIHtcblx0XHR0aGlzLlJlcXVpcmVPYmplY3RDb2VyY2libGUodmFsdWUpO1xuXHRcdHJldHVybiAkT2JqZWN0KHZhbHVlKTtcblx0fSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG9wcm9wZXJ0eWtleVxuXHRUb1Byb3BlcnR5S2V5OiBmdW5jdGlvbiBUb1Byb3BlcnR5S2V5KGFyZ3VtZW50KSB7XG5cdFx0dmFyIGtleSA9IHRoaXMuVG9QcmltaXRpdmUoYXJndW1lbnQsICRTdHJpbmcpO1xuXHRcdHJldHVybiB0eXBlb2Yga2V5ID09PSAnc3ltYm9sJyA/IGtleSA6IHRoaXMuVG9TdHJpbmcoa2V5KTtcblx0fSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG9sZW5ndGhcblx0VG9MZW5ndGg6IGZ1bmN0aW9uIFRvTGVuZ3RoKGFyZ3VtZW50KSB7XG5cdFx0dmFyIGxlbiA9IHRoaXMuVG9JbnRlZ2VyKGFyZ3VtZW50KTtcblx0XHRpZiAobGVuIDw9IDApIHsgcmV0dXJuIDA7IH0gLy8gaW5jbHVkZXMgY29udmVydGluZyAtMCB0byArMFxuXHRcdGlmIChsZW4gPiBNQVhfU0FGRV9JTlRFR0VSKSB7IHJldHVybiBNQVhfU0FGRV9JTlRFR0VSOyB9XG5cdFx0cmV0dXJuIGxlbjtcblx0fSxcblxuXHQvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtY2Fub25pY2FsbnVtZXJpY2luZGV4c3RyaW5nXG5cdENhbm9uaWNhbE51bWVyaWNJbmRleFN0cmluZzogZnVuY3Rpb24gQ2Fub25pY2FsTnVtZXJpY0luZGV4U3RyaW5nKGFyZ3VtZW50KSB7XG5cdFx0aWYgKHRvU3RyKGFyZ3VtZW50KSAhPT0gJ1tvYmplY3QgU3RyaW5nXScpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdtdXN0IGJlIGEgc3RyaW5nJyk7XG5cdFx0fVxuXHRcdGlmIChhcmd1bWVudCA9PT0gJy0wJykgeyByZXR1cm4gLTA7IH1cblx0XHR2YXIgbiA9IHRoaXMuVG9OdW1iZXIoYXJndW1lbnQpO1xuXHRcdGlmICh0aGlzLlNhbWVWYWx1ZSh0aGlzLlRvU3RyaW5nKG4pLCBhcmd1bWVudCkpIHsgcmV0dXJuIG47IH1cblx0XHRyZXR1cm4gdm9pZCAwO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1yZXF1aXJlb2JqZWN0Y29lcmNpYmxlXG5cdFJlcXVpcmVPYmplY3RDb2VyY2libGU6IEVTNS5DaGVja09iamVjdENvZXJjaWJsZSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtaXNhcnJheVxuXHRJc0FycmF5OiAkQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBJc0FycmF5KGFyZ3VtZW50KSB7XG5cdFx0cmV0dXJuIHRvU3RyKGFyZ3VtZW50KSA9PT0gJ1tvYmplY3QgQXJyYXldJztcblx0fSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtaXNjYWxsYWJsZVxuXHQvLyBJc0NhbGxhYmxlOiBFUzUuSXNDYWxsYWJsZSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtaXNjb25zdHJ1Y3RvclxuXHRJc0NvbnN0cnVjdG9yOiBmdW5jdGlvbiBJc0NvbnN0cnVjdG9yKGFyZ3VtZW50KSB7XG5cdFx0cmV0dXJuIHR5cGVvZiBhcmd1bWVudCA9PT0gJ2Z1bmN0aW9uJyAmJiAhIWFyZ3VtZW50LnByb3RvdHlwZTsgLy8gdW5mb3J0dW5hdGVseSB0aGVyZSdzIG5vIHdheSB0byB0cnVseSBjaGVjayB0aGlzIHdpdGhvdXQgdHJ5L2NhdGNoIGBuZXcgYXJndW1lbnRgXG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWlzZXh0ZW5zaWJsZS1vXG5cdElzRXh0ZW5zaWJsZTogT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zXG5cdFx0PyBmdW5jdGlvbiBJc0V4dGVuc2libGUob2JqKSB7XG5cdFx0XHRpZiAoaXNQcmltaXRpdmUob2JqKSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gJGlzRXh0ZW5zaWJsZShvYmopO1xuXHRcdH1cblx0XHQ6IGZ1bmN0aW9uIGlzRXh0ZW5zaWJsZShvYmopIHsgcmV0dXJuIHRydWU7IH0sIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtaXNpbnRlZ2VyXG5cdElzSW50ZWdlcjogZnVuY3Rpb24gSXNJbnRlZ2VyKGFyZ3VtZW50KSB7XG5cdFx0aWYgKHR5cGVvZiBhcmd1bWVudCAhPT0gJ251bWJlcicgfHwgJGlzTmFOKGFyZ3VtZW50KSB8fCAhJGlzRmluaXRlKGFyZ3VtZW50KSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHR2YXIgYWJzID0gJGFicyhhcmd1bWVudCk7XG5cdFx0cmV0dXJuICRmbG9vcihhYnMpID09PSBhYnM7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWlzcHJvcGVydHlrZXlcblx0SXNQcm9wZXJ0eUtleTogZnVuY3Rpb24gSXNQcm9wZXJ0eUtleShhcmd1bWVudCkge1xuXHRcdHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N5bWJvbCc7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWlzcmVnZXhwXG5cdElzUmVnRXhwOiBmdW5jdGlvbiBJc1JlZ0V4cChhcmd1bWVudCkge1xuXHRcdGlmICghYXJndW1lbnQgfHwgdHlwZW9mIGFyZ3VtZW50ICE9PSAnb2JqZWN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRpZiAoaGFzU3ltYm9scykge1xuXHRcdFx0dmFyIGlzUmVnRXhwID0gYXJndW1lbnRbJFN5bWJvbC5tYXRjaF07XG5cdFx0XHRpZiAodHlwZW9mIGlzUmVnRXhwICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRyZXR1cm4gRVM1LlRvQm9vbGVhbihpc1JlZ0V4cCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBoYXNSZWdFeHBNYXRjaGVyKGFyZ3VtZW50KTtcblx0fSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtc2FtZXZhbHVlXG5cdC8vIFNhbWVWYWx1ZTogRVM1LlNhbWVWYWx1ZSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtc2FtZXZhbHVlemVyb1xuXHRTYW1lVmFsdWVaZXJvOiBmdW5jdGlvbiBTYW1lVmFsdWVaZXJvKHgsIHkpIHtcblx0XHRyZXR1cm4gKHggPT09IHkpIHx8ICgkaXNOYU4oeCkgJiYgJGlzTmFOKHkpKTtcblx0fSxcblxuXHQvKipcblx0ICogNy4zLjIgR2V0ViAoViwgUClcblx0ICogMS4gQXNzZXJ0OiBJc1Byb3BlcnR5S2V5KFApIGlzIHRydWUuXG5cdCAqIDIuIExldCBPIGJlIFRvT2JqZWN0KFYpLlxuXHQgKiAzLiBSZXR1cm5JZkFicnVwdChPKS5cblx0ICogNC4gUmV0dXJuIE8uW1tHZXRdXShQLCBWKS5cblx0ICovXG5cdEdldFY6IGZ1bmN0aW9uIEdldFYoViwgUCkge1xuXHRcdC8vIDcuMy4yLjFcblx0XHRpZiAoIXRoaXMuSXNQcm9wZXJ0eUtleShQKSkge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IElzUHJvcGVydHlLZXkoUCkgaXMgbm90IHRydWUnKTtcblx0XHR9XG5cblx0XHQvLyA3LjMuMi4yLTNcblx0XHR2YXIgTyA9IHRoaXMuVG9PYmplY3QoVik7XG5cblx0XHQvLyA3LjMuMi40XG5cdFx0cmV0dXJuIE9bUF07XG5cdH0sXG5cblx0LyoqXG5cdCAqIDcuMy45IC0gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWdldG1ldGhvZFxuXHQgKiAxLiBBc3NlcnQ6IElzUHJvcGVydHlLZXkoUCkgaXMgdHJ1ZS5cblx0ICogMi4gTGV0IGZ1bmMgYmUgR2V0VihPLCBQKS5cblx0ICogMy4gUmV0dXJuSWZBYnJ1cHQoZnVuYykuXG5cdCAqIDQuIElmIGZ1bmMgaXMgZWl0aGVyIHVuZGVmaW5lZCBvciBudWxsLCByZXR1cm4gdW5kZWZpbmVkLlxuXHQgKiA1LiBJZiBJc0NhbGxhYmxlKGZ1bmMpIGlzIGZhbHNlLCB0aHJvdyBhIFR5cGVFcnJvciBleGNlcHRpb24uXG5cdCAqIDYuIFJldHVybiBmdW5jLlxuXHQgKi9cblx0R2V0TWV0aG9kOiBmdW5jdGlvbiBHZXRNZXRob2QoTywgUCkge1xuXHRcdC8vIDcuMy45LjFcblx0XHRpZiAoIXRoaXMuSXNQcm9wZXJ0eUtleShQKSkge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IElzUHJvcGVydHlLZXkoUCkgaXMgbm90IHRydWUnKTtcblx0XHR9XG5cblx0XHQvLyA3LjMuOS4yXG5cdFx0dmFyIGZ1bmMgPSB0aGlzLkdldFYoTywgUCk7XG5cblx0XHQvLyA3LjMuOS40XG5cdFx0aWYgKGZ1bmMgPT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIHZvaWQgMDtcblx0XHR9XG5cblx0XHQvLyA3LjMuOS41XG5cdFx0aWYgKCF0aGlzLklzQ2FsbGFibGUoZnVuYykpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKFAgKyAnaXMgbm90IGEgZnVuY3Rpb24nKTtcblx0XHR9XG5cblx0XHQvLyA3LjMuOS42XG5cdFx0cmV0dXJuIGZ1bmM7XG5cdH0sXG5cblx0LyoqXG5cdCAqIDcuMy4xIEdldCAoTywgUCkgLSBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtZ2V0LW8tcFxuXHQgKiAxLiBBc3NlcnQ6IFR5cGUoTykgaXMgT2JqZWN0LlxuXHQgKiAyLiBBc3NlcnQ6IElzUHJvcGVydHlLZXkoUCkgaXMgdHJ1ZS5cblx0ICogMy4gUmV0dXJuIE8uW1tHZXRdXShQLCBPKS5cblx0ICovXG5cdEdldDogZnVuY3Rpb24gR2V0KE8sIFApIHtcblx0XHQvLyA3LjMuMS4xXG5cdFx0aWYgKHRoaXMuVHlwZShPKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBUeXBlKE8pIGlzIG5vdCBPYmplY3QnKTtcblx0XHR9XG5cdFx0Ly8gNy4zLjEuMlxuXHRcdGlmICghdGhpcy5Jc1Byb3BlcnR5S2V5KFApKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogSXNQcm9wZXJ0eUtleShQKSBpcyBub3QgdHJ1ZScpO1xuXHRcdH1cblx0XHQvLyA3LjMuMS4zXG5cdFx0cmV0dXJuIE9bUF07XG5cdH0sXG5cblx0VHlwZTogZnVuY3Rpb24gVHlwZSh4KSB7XG5cdFx0aWYgKHR5cGVvZiB4ID09PSAnc3ltYm9sJykge1xuXHRcdFx0cmV0dXJuICdTeW1ib2wnO1xuXHRcdH1cblx0XHRyZXR1cm4gRVM1LlR5cGUoeCk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLXNwZWNpZXNjb25zdHJ1Y3RvclxuXHRTcGVjaWVzQ29uc3RydWN0b3I6IGZ1bmN0aW9uIFNwZWNpZXNDb25zdHJ1Y3RvcihPLCBkZWZhdWx0Q29uc3RydWN0b3IpIHtcblx0XHRpZiAodGhpcy5UeXBlKE8pICE9PSAnT2JqZWN0Jykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IFR5cGUoTykgaXMgbm90IE9iamVjdCcpO1xuXHRcdH1cblx0XHR2YXIgQyA9IE8uY29uc3RydWN0b3I7XG5cdFx0aWYgKHR5cGVvZiBDID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0cmV0dXJuIGRlZmF1bHRDb25zdHJ1Y3Rvcjtcblx0XHR9XG5cdFx0aWYgKHRoaXMuVHlwZShDKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdPLmNvbnN0cnVjdG9yIGlzIG5vdCBhbiBPYmplY3QnKTtcblx0XHR9XG5cdFx0dmFyIFMgPSBoYXNTeW1ib2xzICYmICRTeW1ib2wuc3BlY2llcyA/IENbJFN5bWJvbC5zcGVjaWVzXSA6IHZvaWQgMDtcblx0XHRpZiAoUyA9PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gZGVmYXVsdENvbnN0cnVjdG9yO1xuXHRcdH1cblx0XHRpZiAodGhpcy5Jc0NvbnN0cnVjdG9yKFMpKSB7XG5cdFx0XHRyZXR1cm4gUztcblx0XHR9XG5cdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ25vIGNvbnN0cnVjdG9yIGZvdW5kJyk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWNvbXBsZXRlcHJvcGVydHlkZXNjcmlwdG9yXG5cdENvbXBsZXRlUHJvcGVydHlEZXNjcmlwdG9yOiBmdW5jdGlvbiBDb21wbGV0ZVByb3BlcnR5RGVzY3JpcHRvcihEZXNjKSB7XG5cdFx0YXNzZXJ0UmVjb3JkKHRoaXMsICdQcm9wZXJ0eSBEZXNjcmlwdG9yJywgJ0Rlc2MnLCBEZXNjKTtcblxuXHRcdGlmICh0aGlzLklzR2VuZXJpY0Rlc2NyaXB0b3IoRGVzYykgfHwgdGhpcy5Jc0RhdGFEZXNjcmlwdG9yKERlc2MpKSB7XG5cdFx0XHRpZiAoIWhhcyhEZXNjLCAnW1tWYWx1ZV1dJykpIHtcblx0XHRcdFx0RGVzY1snW1tWYWx1ZV1dJ10gPSB2b2lkIDA7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIWhhcyhEZXNjLCAnW1tXcml0YWJsZV1dJykpIHtcblx0XHRcdFx0RGVzY1snW1tXcml0YWJsZV1dJ10gPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKCFoYXMoRGVzYywgJ1tbR2V0XV0nKSkge1xuXHRcdFx0XHREZXNjWydbW0dldF1dJ10gPSB2b2lkIDA7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIWhhcyhEZXNjLCAnW1tTZXRdXScpKSB7XG5cdFx0XHRcdERlc2NbJ1tbU2V0XV0nXSA9IHZvaWQgMDtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKCFoYXMoRGVzYywgJ1tbRW51bWVyYWJsZV1dJykpIHtcblx0XHRcdERlc2NbJ1tbRW51bWVyYWJsZV1dJ10gPSBmYWxzZTtcblx0XHR9XG5cdFx0aWYgKCFoYXMoRGVzYywgJ1tbQ29uZmlndXJhYmxlXV0nKSkge1xuXHRcdFx0RGVzY1snW1tDb25maWd1cmFibGVdXSddID0gZmFsc2U7XG5cdFx0fVxuXHRcdHJldHVybiBEZXNjO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1zZXQtby1wLXYtdGhyb3dcblx0U2V0OiBmdW5jdGlvbiBTZXQoTywgUCwgViwgVGhyb3cpIHtcblx0XHRpZiAodGhpcy5UeXBlKE8pICE9PSAnT2JqZWN0Jykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ08gbXVzdCBiZSBhbiBPYmplY3QnKTtcblx0XHR9XG5cdFx0aWYgKCF0aGlzLklzUHJvcGVydHlLZXkoUCkpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdQIG11c3QgYmUgYSBQcm9wZXJ0eSBLZXknKTtcblx0XHR9XG5cdFx0aWYgKHRoaXMuVHlwZShUaHJvdykgIT09ICdCb29sZWFuJykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ1Rocm93IG11c3QgYmUgYSBCb29sZWFuJyk7XG5cdFx0fVxuXHRcdGlmIChUaHJvdykge1xuXHRcdFx0T1tQXSA9IFY7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0T1tQXSA9IFY7XG5cdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWhhc293bnByb3BlcnR5XG5cdEhhc093blByb3BlcnR5OiBmdW5jdGlvbiBIYXNPd25Qcm9wZXJ0eShPLCBQKSB7XG5cdFx0aWYgKHRoaXMuVHlwZShPKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdPIG11c3QgYmUgYW4gT2JqZWN0Jyk7XG5cdFx0fVxuXHRcdGlmICghdGhpcy5Jc1Byb3BlcnR5S2V5KFApKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignUCBtdXN0IGJlIGEgUHJvcGVydHkgS2V5Jyk7XG5cdFx0fVxuXHRcdHJldHVybiBoYXMoTywgUCk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWhhc3Byb3BlcnR5XG5cdEhhc1Byb3BlcnR5OiBmdW5jdGlvbiBIYXNQcm9wZXJ0eShPLCBQKSB7XG5cdFx0aWYgKHRoaXMuVHlwZShPKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdPIG11c3QgYmUgYW4gT2JqZWN0Jyk7XG5cdFx0fVxuXHRcdGlmICghdGhpcy5Jc1Byb3BlcnR5S2V5KFApKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignUCBtdXN0IGJlIGEgUHJvcGVydHkgS2V5Jyk7XG5cdFx0fVxuXHRcdHJldHVybiBQIGluIE87XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWlzY29uY2F0c3ByZWFkYWJsZVxuXHRJc0NvbmNhdFNwcmVhZGFibGU6IGZ1bmN0aW9uIElzQ29uY2F0U3ByZWFkYWJsZShPKSB7XG5cdFx0aWYgKHRoaXMuVHlwZShPKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0aWYgKGhhc1N5bWJvbHMgJiYgdHlwZW9mICRTeW1ib2wuaXNDb25jYXRTcHJlYWRhYmxlID09PSAnc3ltYm9sJykge1xuXHRcdFx0dmFyIHNwcmVhZGFibGUgPSB0aGlzLkdldChPLCBTeW1ib2wuaXNDb25jYXRTcHJlYWRhYmxlKTtcblx0XHRcdGlmICh0eXBlb2Ygc3ByZWFkYWJsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuVG9Cb29sZWFuKHNwcmVhZGFibGUpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5Jc0FycmF5KE8pO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1pbnZva2Vcblx0SW52b2tlOiBmdW5jdGlvbiBJbnZva2UoTywgUCkge1xuXHRcdGlmICghdGhpcy5Jc1Byb3BlcnR5S2V5KFApKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignUCBtdXN0IGJlIGEgUHJvcGVydHkgS2V5Jyk7XG5cdFx0fVxuXHRcdHZhciBhcmd1bWVudHNMaXN0ID0gYXJyYXlTbGljZShhcmd1bWVudHMsIDIpO1xuXHRcdHZhciBmdW5jID0gdGhpcy5HZXRWKE8sIFApO1xuXHRcdHJldHVybiB0aGlzLkNhbGwoZnVuYywgTywgYXJndW1lbnRzTGlzdCk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWdldGl0ZXJhdG9yXG5cdEdldEl0ZXJhdG9yOiBmdW5jdGlvbiBHZXRJdGVyYXRvcihvYmosIG1ldGhvZCkge1xuXHRcdGlmICghaGFzU3ltYm9scykge1xuXHRcdFx0dGhyb3cgbmV3IFN5bnRheEVycm9yKCdFUy5HZXRJdGVyYXRvciBkZXBlbmRzIG9uIG5hdGl2ZSBpdGVyYXRvciBzdXBwb3J0LicpO1xuXHRcdH1cblxuXHRcdHZhciBhY3R1YWxNZXRob2QgPSBtZXRob2Q7XG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB7XG5cdFx0XHRhY3R1YWxNZXRob2QgPSB0aGlzLkdldE1ldGhvZChvYmosICRTeW1ib2wuaXRlcmF0b3IpO1xuXHRcdH1cblx0XHR2YXIgaXRlcmF0b3IgPSB0aGlzLkNhbGwoYWN0dWFsTWV0aG9kLCBvYmopO1xuXHRcdGlmICh0aGlzLlR5cGUoaXRlcmF0b3IpICE9PSAnT2JqZWN0Jykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ2l0ZXJhdG9yIG11c3QgcmV0dXJuIGFuIG9iamVjdCcpO1xuXHRcdH1cblxuXHRcdHJldHVybiBpdGVyYXRvcjtcblx0fSxcblxuXHQvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtaXRlcmF0b3JuZXh0XG5cdEl0ZXJhdG9yTmV4dDogZnVuY3Rpb24gSXRlcmF0b3JOZXh0KGl0ZXJhdG9yLCB2YWx1ZSkge1xuXHRcdHZhciByZXN1bHQgPSB0aGlzLkludm9rZShpdGVyYXRvciwgJ25leHQnLCBhcmd1bWVudHMubGVuZ3RoIDwgMiA/IFtdIDogW3ZhbHVlXSk7XG5cdFx0aWYgKHRoaXMuVHlwZShyZXN1bHQpICE9PSAnT2JqZWN0Jykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ2l0ZXJhdG9yIG5leHQgbXVzdCByZXR1cm4gYW4gb2JqZWN0Jyk7XG5cdFx0fVxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWl0ZXJhdG9yY29tcGxldGVcblx0SXRlcmF0b3JDb21wbGV0ZTogZnVuY3Rpb24gSXRlcmF0b3JDb21wbGV0ZShpdGVyUmVzdWx0KSB7XG5cdFx0aWYgKHRoaXMuVHlwZShpdGVyUmVzdWx0KSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBUeXBlKGl0ZXJSZXN1bHQpIGlzIG5vdCBPYmplY3QnKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuVG9Cb29sZWFuKHRoaXMuR2V0KGl0ZXJSZXN1bHQsICdkb25lJykpO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1pdGVyYXRvcnZhbHVlXG5cdEl0ZXJhdG9yVmFsdWU6IGZ1bmN0aW9uIEl0ZXJhdG9yVmFsdWUoaXRlclJlc3VsdCkge1xuXHRcdGlmICh0aGlzLlR5cGUoaXRlclJlc3VsdCkgIT09ICdPYmplY3QnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogVHlwZShpdGVyUmVzdWx0KSBpcyBub3QgT2JqZWN0Jyk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLkdldChpdGVyUmVzdWx0LCAndmFsdWUnKTtcblx0fSxcblxuXHQvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtaXRlcmF0b3JzdGVwXG5cdEl0ZXJhdG9yU3RlcDogZnVuY3Rpb24gSXRlcmF0b3JTdGVwKGl0ZXJhdG9yKSB7XG5cdFx0dmFyIHJlc3VsdCA9IHRoaXMuSXRlcmF0b3JOZXh0KGl0ZXJhdG9yKTtcblx0XHR2YXIgZG9uZSA9IHRoaXMuSXRlcmF0b3JDb21wbGV0ZShyZXN1bHQpO1xuXHRcdHJldHVybiBkb25lID09PSB0cnVlID8gZmFsc2UgOiByZXN1bHQ7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWl0ZXJhdG9yY2xvc2Vcblx0SXRlcmF0b3JDbG9zZTogZnVuY3Rpb24gSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbikge1xuXHRcdGlmICh0aGlzLlR5cGUoaXRlcmF0b3IpICE9PSAnT2JqZWN0Jykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IFR5cGUoaXRlcmF0b3IpIGlzIG5vdCBPYmplY3QnKTtcblx0XHR9XG5cdFx0aWYgKCF0aGlzLklzQ2FsbGFibGUoY29tcGxldGlvbikpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBjb21wbGV0aW9uIGlzIG5vdCBhIHRodW5rIGZvciBhIENvbXBsZXRpb24gUmVjb3JkJyk7XG5cdFx0fVxuXHRcdHZhciBjb21wbGV0aW9uVGh1bmsgPSBjb21wbGV0aW9uO1xuXG5cdFx0dmFyIGl0ZXJhdG9yUmV0dXJuID0gdGhpcy5HZXRNZXRob2QoaXRlcmF0b3IsICdyZXR1cm4nKTtcblxuXHRcdGlmICh0eXBlb2YgaXRlcmF0b3JSZXR1cm4gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRyZXR1cm4gY29tcGxldGlvblRodW5rKCk7XG5cdFx0fVxuXG5cdFx0dmFyIGNvbXBsZXRpb25SZWNvcmQ7XG5cdFx0dHJ5IHtcblx0XHRcdHZhciBpbm5lclJlc3VsdCA9IHRoaXMuQ2FsbChpdGVyYXRvclJldHVybiwgaXRlcmF0b3IsIFtdKTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHQvLyBpZiB3ZSBoaXQgaGVyZSwgdGhlbiBcImVcIiBpcyB0aGUgaW5uZXJSZXN1bHQgY29tcGxldGlvbiB0aGF0IG5lZWRzIHJlLXRocm93aW5nXG5cblx0XHRcdC8vIGlmIHRoZSBjb21wbGV0aW9uIGlzIG9mIHR5cGUgXCJ0aHJvd1wiLCB0aGlzIHdpbGwgdGhyb3cuXG5cdFx0XHRjb21wbGV0aW9uUmVjb3JkID0gY29tcGxldGlvblRodW5rKCk7XG5cdFx0XHRjb21wbGV0aW9uVGh1bmsgPSBudWxsOyAvLyBlbnN1cmUgaXQncyBub3QgY2FsbGVkIHR3aWNlLlxuXG5cdFx0XHQvLyBpZiBub3QsIHRoZW4gcmV0dXJuIHRoZSBpbm5lclJlc3VsdCBjb21wbGV0aW9uXG5cdFx0XHR0aHJvdyBlO1xuXHRcdH1cblx0XHRjb21wbGV0aW9uUmVjb3JkID0gY29tcGxldGlvblRodW5rKCk7IC8vIGlmIGlubmVyUmVzdWx0IHdvcmtlZCwgdGhlbiB0aHJvdyBpZiB0aGUgY29tcGxldGlvbiBkb2VzXG5cdFx0Y29tcGxldGlvblRodW5rID0gbnVsbDsgLy8gZW5zdXJlIGl0J3Mgbm90IGNhbGxlZCB0d2ljZS5cblxuXHRcdGlmICh0aGlzLlR5cGUoaW5uZXJSZXN1bHQpICE9PSAnT2JqZWN0Jykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ2l0ZXJhdG9yIC5yZXR1cm4gbXVzdCByZXR1cm4gYW4gb2JqZWN0Jyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNvbXBsZXRpb25SZWNvcmQ7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWNyZWF0ZWl0ZXJyZXN1bHRvYmplY3Rcblx0Q3JlYXRlSXRlclJlc3VsdE9iamVjdDogZnVuY3Rpb24gQ3JlYXRlSXRlclJlc3VsdE9iamVjdCh2YWx1ZSwgZG9uZSkge1xuXHRcdGlmICh0aGlzLlR5cGUoZG9uZSkgIT09ICdCb29sZWFuJykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IFR5cGUoZG9uZSkgaXMgbm90IEJvb2xlYW4nKTtcblx0XHR9XG5cdFx0cmV0dXJuIHtcblx0XHRcdHZhbHVlOiB2YWx1ZSxcblx0XHRcdGRvbmU6IGRvbmVcblx0XHR9O1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1yZWdleHBleGVjXG5cdFJlZ0V4cEV4ZWM6IGZ1bmN0aW9uIFJlZ0V4cEV4ZWMoUiwgUykge1xuXHRcdGlmICh0aGlzLlR5cGUoUikgIT09ICdPYmplY3QnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignUiBtdXN0IGJlIGFuIE9iamVjdCcpO1xuXHRcdH1cblx0XHRpZiAodGhpcy5UeXBlKFMpICE9PSAnU3RyaW5nJykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ1MgbXVzdCBiZSBhIFN0cmluZycpO1xuXHRcdH1cblx0XHR2YXIgZXhlYyA9IHRoaXMuR2V0KFIsICdleGVjJyk7XG5cdFx0aWYgKHRoaXMuSXNDYWxsYWJsZShleGVjKSkge1xuXHRcdFx0dmFyIHJlc3VsdCA9IHRoaXMuQ2FsbChleGVjLCBSLCBbU10pO1xuXHRcdFx0aWYgKHJlc3VsdCA9PT0gbnVsbCB8fCB0aGlzLlR5cGUocmVzdWx0KSA9PT0gJ09iamVjdCcpIHtcblx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdH1cblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdcImV4ZWNcIiBtZXRob2QgbXVzdCByZXR1cm4gYG51bGxgIG9yIGFuIE9iamVjdCcpO1xuXHRcdH1cblx0XHRyZXR1cm4gcmVnZXhFeGVjKFIsIFMpO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1hcnJheXNwZWNpZXNjcmVhdGVcblx0QXJyYXlTcGVjaWVzQ3JlYXRlOiBmdW5jdGlvbiBBcnJheVNwZWNpZXNDcmVhdGUob3JpZ2luYWxBcnJheSwgbGVuZ3RoKSB7XG5cdFx0aWYgKCF0aGlzLklzSW50ZWdlcihsZW5ndGgpIHx8IGxlbmd0aCA8IDApIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBsZW5ndGggbXVzdCBiZSBhbiBpbnRlZ2VyID49IDAnKTtcblx0XHR9XG5cdFx0dmFyIGxlbiA9IGxlbmd0aCA9PT0gMCA/IDAgOiBsZW5ndGg7XG5cdFx0dmFyIEM7XG5cdFx0dmFyIGlzQXJyYXkgPSB0aGlzLklzQXJyYXkob3JpZ2luYWxBcnJheSk7XG5cdFx0aWYgKGlzQXJyYXkpIHtcblx0XHRcdEMgPSB0aGlzLkdldChvcmlnaW5hbEFycmF5LCAnY29uc3RydWN0b3InKTtcblx0XHRcdC8vIFRPRE86IGZpZ3VyZSBvdXQgaG93IHRvIG1ha2UgYSBjcm9zcy1yZWFsbSBub3JtYWwgQXJyYXksIGEgc2FtZS1yZWFsbSBBcnJheVxuXHRcdFx0Ly8gaWYgKHRoaXMuSXNDb25zdHJ1Y3RvcihDKSkge1xuXHRcdFx0Ly8gXHRpZiBDIGlzIGFub3RoZXIgcmVhbG0ncyBBcnJheSwgQyA9IHVuZGVmaW5lZFxuXHRcdFx0Ly8gXHRPYmplY3QuZ2V0UHJvdG90eXBlT2YoT2JqZWN0LmdldFByb3RvdHlwZU9mKE9iamVjdC5nZXRQcm90b3R5cGVPZihBcnJheSkpKSA9PT0gbnVsbCA/XG5cdFx0XHQvLyB9XG5cdFx0XHRpZiAodGhpcy5UeXBlKEMpID09PSAnT2JqZWN0JyAmJiBoYXNTeW1ib2xzICYmICRTeW1ib2wuc3BlY2llcykge1xuXHRcdFx0XHRDID0gdGhpcy5HZXQoQywgJFN5bWJvbC5zcGVjaWVzKTtcblx0XHRcdFx0aWYgKEMgPT09IG51bGwpIHtcblx0XHRcdFx0XHRDID0gdm9pZCAwO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICh0eXBlb2YgQyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdHJldHVybiAkQXJyYXkobGVuKTtcblx0XHR9XG5cdFx0aWYgKCF0aGlzLklzQ29uc3RydWN0b3IoQykpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdDIG11c3QgYmUgYSBjb25zdHJ1Y3RvcicpO1xuXHRcdH1cblx0XHRyZXR1cm4gbmV3IEMobGVuKTsgLy8gdGhpcy5Db25zdHJ1Y3QoQywgbGVuKTtcblx0fSxcblxuXHRDcmVhdGVEYXRhUHJvcGVydHk6IGZ1bmN0aW9uIENyZWF0ZURhdGFQcm9wZXJ0eShPLCBQLCBWKSB7XG5cdFx0aWYgKHRoaXMuVHlwZShPKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBUeXBlKE8pIGlzIG5vdCBPYmplY3QnKTtcblx0XHR9XG5cdFx0aWYgKCF0aGlzLklzUHJvcGVydHlLZXkoUCkpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBJc1Byb3BlcnR5S2V5KFApIGlzIG5vdCB0cnVlJyk7XG5cdFx0fVxuXHRcdHZhciBvbGREZXNjID0gJGdPUEQoTywgUCk7XG5cdFx0dmFyIGV4dGVuc2libGUgPSBvbGREZXNjIHx8ICh0eXBlb2YgJGlzRXh0ZW5zaWJsZSAhPT0gJ2Z1bmN0aW9uJyB8fCAkaXNFeHRlbnNpYmxlKE8pKTtcblx0XHR2YXIgaW1tdXRhYmxlID0gb2xkRGVzYyAmJiAoIW9sZERlc2Mud3JpdGFibGUgfHwgIW9sZERlc2MuY29uZmlndXJhYmxlKTtcblx0XHRpZiAoaW1tdXRhYmxlIHx8ICFleHRlbnNpYmxlKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHZhciBuZXdEZXNjID0ge1xuXHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdHZhbHVlOiBWLFxuXHRcdFx0d3JpdGFibGU6IHRydWVcblx0XHR9O1xuXHRcdCRkZWZpbmVQcm9wZXJ0eShPLCBQLCBuZXdEZXNjKTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSxcblxuXHQvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtY3JlYXRlZGF0YXByb3BlcnR5b3J0aHJvd1xuXHRDcmVhdGVEYXRhUHJvcGVydHlPclRocm93OiBmdW5jdGlvbiBDcmVhdGVEYXRhUHJvcGVydHlPclRocm93KE8sIFAsIFYpIHtcblx0XHRpZiAodGhpcy5UeXBlKE8pICE9PSAnT2JqZWN0Jykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IFR5cGUoTykgaXMgbm90IE9iamVjdCcpO1xuXHRcdH1cblx0XHRpZiAoIXRoaXMuSXNQcm9wZXJ0eUtleShQKSkge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IElzUHJvcGVydHlLZXkoUCkgaXMgbm90IHRydWUnKTtcblx0XHR9XG5cdFx0dmFyIHN1Y2Nlc3MgPSB0aGlzLkNyZWF0ZURhdGFQcm9wZXJ0eShPLCBQLCBWKTtcblx0XHRpZiAoIXN1Y2Nlc3MpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCd1bmFibGUgdG8gY3JlYXRlIGRhdGEgcHJvcGVydHknKTtcblx0XHR9XG5cdFx0cmV0dXJuIHN1Y2Nlc3M7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1vYmplY3RjcmVhdGVcblx0T2JqZWN0Q3JlYXRlOiBmdW5jdGlvbiBPYmplY3RDcmVhdGUocHJvdG8sIGludGVybmFsU2xvdHNMaXN0KSB7XG5cdFx0aWYgKHByb3RvICE9PSBudWxsICYmIHRoaXMuVHlwZShwcm90bykgIT09ICdPYmplY3QnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogcHJvdG8gbXVzdCBiZSBudWxsIG9yIGFuIG9iamVjdCcpO1xuXHRcdH1cblx0XHR2YXIgc2xvdHMgPSBhcmd1bWVudHMubGVuZ3RoIDwgMiA/IFtdIDogaW50ZXJuYWxTbG90c0xpc3Q7XG5cdFx0aWYgKHNsb3RzLmxlbmd0aCA+IDApIHtcblx0XHRcdHRocm93IG5ldyAkU3ludGF4RXJyb3IoJ2VzLWFic3RyYWN0IGRvZXMgbm90IHlldCBzdXBwb3J0IGludGVybmFsIHNsb3RzJyk7XG5cdFx0fVxuXG5cdFx0aWYgKHByb3RvID09PSBudWxsICYmICEkT2JqZWN0Q3JlYXRlKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFN5bnRheEVycm9yKCduYXRpdmUgT2JqZWN0LmNyZWF0ZSBzdXBwb3J0IGlzIHJlcXVpcmVkIHRvIGNyZWF0ZSBudWxsIG9iamVjdHMnKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gJE9iamVjdENyZWF0ZShwcm90byk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWFkdmFuY2VzdHJpbmdpbmRleFxuXHRBZHZhbmNlU3RyaW5nSW5kZXg6IGZ1bmN0aW9uIEFkdmFuY2VTdHJpbmdJbmRleChTLCBpbmRleCwgdW5pY29kZSkge1xuXHRcdGlmICh0aGlzLlR5cGUoUykgIT09ICdTdHJpbmcnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignUyBtdXN0IGJlIGEgU3RyaW5nJyk7XG5cdFx0fVxuXHRcdGlmICghdGhpcy5Jc0ludGVnZXIoaW5kZXgpIHx8IGluZGV4IDwgMCB8fCBpbmRleCA+IE1BWF9TQUZFX0lOVEVHRVIpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBsZW5ndGggbXVzdCBiZSBhbiBpbnRlZ2VyID49IDAgYW5kIDw9IDIqKjUzJyk7XG5cdFx0fVxuXHRcdGlmICh0aGlzLlR5cGUodW5pY29kZSkgIT09ICdCb29sZWFuJykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IHVuaWNvZGUgbXVzdCBiZSBhIEJvb2xlYW4nKTtcblx0XHR9XG5cdFx0aWYgKCF1bmljb2RlKSB7XG5cdFx0XHRyZXR1cm4gaW5kZXggKyAxO1xuXHRcdH1cblx0XHR2YXIgbGVuZ3RoID0gUy5sZW5ndGg7XG5cdFx0aWYgKChpbmRleCArIDEpID49IGxlbmd0aCkge1xuXHRcdFx0cmV0dXJuIGluZGV4ICsgMTtcblx0XHR9XG5cblx0XHR2YXIgZmlyc3QgPSAkY2hhckNvZGVBdChTLCBpbmRleCk7XG5cdFx0aWYgKGZpcnN0IDwgMHhEODAwIHx8IGZpcnN0ID4gMHhEQkZGKSB7XG5cdFx0XHRyZXR1cm4gaW5kZXggKyAxO1xuXHRcdH1cblxuXHRcdHZhciBzZWNvbmQgPSAkY2hhckNvZGVBdChTLCBpbmRleCArIDEpO1xuXHRcdGlmIChzZWNvbmQgPCAweERDMDAgfHwgc2Vjb25kID4gMHhERkZGKSB7XG5cdFx0XHRyZXR1cm4gaW5kZXggKyAxO1xuXHRcdH1cblxuXHRcdHJldHVybiBpbmRleCArIDI7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1jcmVhdGVtZXRob2Rwcm9wZXJ0eVxuXHRDcmVhdGVNZXRob2RQcm9wZXJ0eTogZnVuY3Rpb24gQ3JlYXRlTWV0aG9kUHJvcGVydHkoTywgUCwgVikge1xuXHRcdGlmICh0aGlzLlR5cGUoTykgIT09ICdPYmplY3QnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogVHlwZShPKSBpcyBub3QgT2JqZWN0Jyk7XG5cdFx0fVxuXG5cdFx0aWYgKCF0aGlzLklzUHJvcGVydHlLZXkoUCkpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBJc1Byb3BlcnR5S2V5KFApIGlzIG5vdCB0cnVlJyk7XG5cdFx0fVxuXG5cdFx0dmFyIG5ld0Rlc2MgPSB7XG5cdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG5cdFx0XHRlbnVtZXJhYmxlOiBmYWxzZSxcblx0XHRcdHZhbHVlOiBWLFxuXHRcdFx0d3JpdGFibGU6IHRydWVcblx0XHR9O1xuXHRcdHJldHVybiAhISRkZWZpbmVQcm9wZXJ0eShPLCBQLCBuZXdEZXNjKTtcblx0fSxcblxuXHQvLyBodHRwczovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWRlZmluZXByb3BlcnR5b3J0aHJvd1xuXHREZWZpbmVQcm9wZXJ0eU9yVGhyb3c6IGZ1bmN0aW9uIERlZmluZVByb3BlcnR5T3JUaHJvdyhPLCBQLCBkZXNjKSB7XG5cdFx0aWYgKHRoaXMuVHlwZShPKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBUeXBlKE8pIGlzIG5vdCBPYmplY3QnKTtcblx0XHR9XG5cblx0XHRpZiAoIXRoaXMuSXNQcm9wZXJ0eUtleShQKSkge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IElzUHJvcGVydHlLZXkoUCkgaXMgbm90IHRydWUnKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gISEkZGVmaW5lUHJvcGVydHkoTywgUCwgZGVzYyk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1kZWxldGVwcm9wZXJ0eW9ydGhyb3dcblx0RGVsZXRlUHJvcGVydHlPclRocm93OiBmdW5jdGlvbiBEZWxldGVQcm9wZXJ0eU9yVGhyb3coTywgUCkge1xuXHRcdGlmICh0aGlzLlR5cGUoTykgIT09ICdPYmplY3QnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogVHlwZShPKSBpcyBub3QgT2JqZWN0Jyk7XG5cdFx0fVxuXG5cdFx0aWYgKCF0aGlzLklzUHJvcGVydHlLZXkoUCkpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBJc1Byb3BlcnR5S2V5KFApIGlzIG5vdCB0cnVlJyk7XG5cdFx0fVxuXG5cdFx0dmFyIHN1Y2Nlc3MgPSBkZWxldGUgT1tQXTtcblx0XHRpZiAoIXN1Y2Nlc3MpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0F0dGVtcHQgdG8gZGVsZXRlIHByb3BlcnR5IGZhaWxlZC4nKTtcblx0XHR9XG5cdFx0cmV0dXJuIHN1Y2Nlc3M7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1lbnVtZXJhYmxlb3dubmFtZXNcblx0RW51bWVyYWJsZU93bk5hbWVzOiBmdW5jdGlvbiBFbnVtZXJhYmxlT3duTmFtZXMoTykge1xuXHRcdGlmICh0aGlzLlR5cGUoTykgIT09ICdPYmplY3QnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogVHlwZShPKSBpcyBub3QgT2JqZWN0Jyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGtleXMoTyk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLXByb3BlcnRpZXMtb2YtdGhlLW51bWJlci1wcm90b3R5cGUtb2JqZWN0XG5cdHRoaXNOdW1iZXJWYWx1ZTogZnVuY3Rpb24gdGhpc051bWJlclZhbHVlKHZhbHVlKSB7XG5cdFx0aWYgKHRoaXMuVHlwZSh2YWx1ZSkgPT09ICdOdW1iZXInKSB7XG5cdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuICROdW1iZXJWYWx1ZU9mKHZhbHVlKTtcblx0fSxcblxuXHQvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtcHJvcGVydGllcy1vZi10aGUtYm9vbGVhbi1wcm90b3R5cGUtb2JqZWN0XG5cdHRoaXNCb29sZWFuVmFsdWU6IGZ1bmN0aW9uIHRoaXNCb29sZWFuVmFsdWUodmFsdWUpIHtcblx0XHRpZiAodGhpcy5UeXBlKHZhbHVlKSA9PT0gJ0Jvb2xlYW4nKSB7XG5cdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuICRCb29sZWFuVmFsdWVPZih2YWx1ZSk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLXByb3BlcnRpZXMtb2YtdGhlLXN0cmluZy1wcm90b3R5cGUtb2JqZWN0XG5cdHRoaXNTdHJpbmdWYWx1ZTogZnVuY3Rpb24gdGhpc1N0cmluZ1ZhbHVlKHZhbHVlKSB7XG5cdFx0aWYgKHRoaXMuVHlwZSh2YWx1ZSkgPT09ICdTdHJpbmcnKSB7XG5cdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuICRTdHJpbmdWYWx1ZU9mKHZhbHVlKTtcblx0fSxcblxuXHQvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtcHJvcGVydGllcy1vZi10aGUtZGF0ZS1wcm90b3R5cGUtb2JqZWN0XG5cdHRoaXNUaW1lVmFsdWU6IGZ1bmN0aW9uIHRoaXNUaW1lVmFsdWUodmFsdWUpIHtcblx0XHRyZXR1cm4gJERhdGVWYWx1ZU9mKHZhbHVlKTtcblx0fVxufSk7XG5cbmRlbGV0ZSBFUzYuQ2hlY2tPYmplY3RDb2VyY2libGU7IC8vIHJlbmFtZWQgaW4gRVM2IHRvIFJlcXVpcmVPYmplY3RDb2VyY2libGVcblxubW9kdWxlLmV4cG9ydHMgPSBFUzY7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZXMtYWJzdHJhY3QvZXMyMDE1LmpzXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJpbmQgPSByZXF1aXJlKCdmdW5jdGlvbi1iaW5kJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYmluZC5jYWxsKEZ1bmN0aW9uLmNhbGwsIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2hhcy9zcmMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaW1wbGVtZW50YXRpb24gPSByZXF1aXJlKCcuL2ltcGxlbWVudGF0aW9uJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQgfHwgaW1wbGVtZW50YXRpb247XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZnVuY3Rpb24tYmluZC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbi8qIGVzbGludCBuby1pbnZhbGlkLXRoaXM6IDEgKi9cblxudmFyIEVSUk9SX01FU1NBR0UgPSAnRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQgY2FsbGVkIG9uIGluY29tcGF0aWJsZSAnO1xudmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbnZhciBmdW5jVHlwZSA9ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYmluZCh0aGF0KSB7XG4gICAgdmFyIHRhcmdldCA9IHRoaXM7XG4gICAgaWYgKHR5cGVvZiB0YXJnZXQgIT09ICdmdW5jdGlvbicgfHwgdG9TdHIuY2FsbCh0YXJnZXQpICE9PSBmdW5jVHlwZSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEVSUk9SX01FU1NBR0UgKyB0YXJnZXQpO1xuICAgIH1cbiAgICB2YXIgYXJncyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcblxuICAgIHZhciBib3VuZDtcbiAgICB2YXIgYmluZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcyBpbnN0YW5jZW9mIGJvdW5kKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gdGFyZ2V0LmFwcGx5KFxuICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgYXJncy5jb25jYXQoc2xpY2UuY2FsbChhcmd1bWVudHMpKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChPYmplY3QocmVzdWx0KSA9PT0gcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRhcmdldC5hcHBseShcbiAgICAgICAgICAgICAgICB0aGF0LFxuICAgICAgICAgICAgICAgIGFyZ3MuY29uY2F0KHNsaWNlLmNhbGwoYXJndW1lbnRzKSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIGJvdW5kTGVuZ3RoID0gTWF0aC5tYXgoMCwgdGFyZ2V0Lmxlbmd0aCAtIGFyZ3MubGVuZ3RoKTtcbiAgICB2YXIgYm91bmRBcmdzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBib3VuZExlbmd0aDsgaSsrKSB7XG4gICAgICAgIGJvdW5kQXJncy5wdXNoKCckJyArIGkpO1xuICAgIH1cblxuICAgIGJvdW5kID0gRnVuY3Rpb24oJ2JpbmRlcicsICdyZXR1cm4gZnVuY3Rpb24gKCcgKyBib3VuZEFyZ3Muam9pbignLCcpICsgJyl7IHJldHVybiBiaW5kZXIuYXBwbHkodGhpcyxhcmd1bWVudHMpOyB9JykoYmluZGVyKTtcblxuICAgIGlmICh0YXJnZXQucHJvdG90eXBlKSB7XG4gICAgICAgIHZhciBFbXB0eSA9IGZ1bmN0aW9uIEVtcHR5KCkge307XG4gICAgICAgIEVtcHR5LnByb3RvdHlwZSA9IHRhcmdldC5wcm90b3R5cGU7XG4gICAgICAgIGJvdW5kLnByb3RvdHlwZSA9IG5ldyBFbXB0eSgpO1xuICAgICAgICBFbXB0eS5wcm90b3R5cGUgPSBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBib3VuZDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZnVuY3Rpb24tYmluZC9pbXBsZW1lbnRhdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9lczIwMTUnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy10by1wcmltaXRpdmUvZXM2LmpzXG4vLyBtb2R1bGUgaWQgPSA0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxudmFyIGhhc1N5bWJvbHMgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09ICdzeW1ib2wnO1xuXG52YXIgaXNQcmltaXRpdmUgPSByZXF1aXJlKCcuL2hlbHBlcnMvaXNQcmltaXRpdmUnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnaXMtY2FsbGFibGUnKTtcbnZhciBpc0RhdGUgPSByZXF1aXJlKCdpcy1kYXRlLW9iamVjdCcpO1xudmFyIGlzU3ltYm9sID0gcmVxdWlyZSgnaXMtc3ltYm9sJyk7XG5cbnZhciBvcmRpbmFyeVRvUHJpbWl0aXZlID0gZnVuY3Rpb24gT3JkaW5hcnlUb1ByaW1pdGl2ZShPLCBoaW50KSB7XG5cdGlmICh0eXBlb2YgTyA9PT0gJ3VuZGVmaW5lZCcgfHwgTyA9PT0gbnVsbCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIG1ldGhvZCBvbiAnICsgTyk7XG5cdH1cblx0aWYgKHR5cGVvZiBoaW50ICE9PSAnc3RyaW5nJyB8fCAoaGludCAhPT0gJ251bWJlcicgJiYgaGludCAhPT0gJ3N0cmluZycpKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignaGludCBtdXN0IGJlIFwic3RyaW5nXCIgb3IgXCJudW1iZXJcIicpO1xuXHR9XG5cdHZhciBtZXRob2ROYW1lcyA9IGhpbnQgPT09ICdzdHJpbmcnID8gWyd0b1N0cmluZycsICd2YWx1ZU9mJ10gOiBbJ3ZhbHVlT2YnLCAndG9TdHJpbmcnXTtcblx0dmFyIG1ldGhvZCwgcmVzdWx0LCBpO1xuXHRmb3IgKGkgPSAwOyBpIDwgbWV0aG9kTmFtZXMubGVuZ3RoOyArK2kpIHtcblx0XHRtZXRob2QgPSBPW21ldGhvZE5hbWVzW2ldXTtcblx0XHRpZiAoaXNDYWxsYWJsZShtZXRob2QpKSB7XG5cdFx0XHRyZXN1bHQgPSBtZXRob2QuY2FsbChPKTtcblx0XHRcdGlmIChpc1ByaW1pdGl2ZShyZXN1bHQpKSB7XG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHRocm93IG5ldyBUeXBlRXJyb3IoJ05vIGRlZmF1bHQgdmFsdWUnKTtcbn07XG5cbnZhciBHZXRNZXRob2QgPSBmdW5jdGlvbiBHZXRNZXRob2QoTywgUCkge1xuXHR2YXIgZnVuYyA9IE9bUF07XG5cdGlmIChmdW5jICE9PSBudWxsICYmIHR5cGVvZiBmdW5jICE9PSAndW5kZWZpbmVkJykge1xuXHRcdGlmICghaXNDYWxsYWJsZShmdW5jKSkge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihmdW5jICsgJyByZXR1cm5lZCBmb3IgcHJvcGVydHkgJyArIFAgKyAnIG9mIG9iamVjdCAnICsgTyArICcgaXMgbm90IGEgZnVuY3Rpb24nKTtcblx0XHR9XG5cdFx0cmV0dXJuIGZ1bmM7XG5cdH1cblx0cmV0dXJuIHZvaWQgMDtcbn07XG5cbi8vIGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy10b3ByaW1pdGl2ZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBUb1ByaW1pdGl2ZShpbnB1dCkge1xuXHRpZiAoaXNQcmltaXRpdmUoaW5wdXQpKSB7XG5cdFx0cmV0dXJuIGlucHV0O1xuXHR9XG5cdHZhciBoaW50ID0gJ2RlZmF1bHQnO1xuXHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcblx0XHRpZiAoYXJndW1lbnRzWzFdID09PSBTdHJpbmcpIHtcblx0XHRcdGhpbnQgPSAnc3RyaW5nJztcblx0XHR9IGVsc2UgaWYgKGFyZ3VtZW50c1sxXSA9PT0gTnVtYmVyKSB7XG5cdFx0XHRoaW50ID0gJ251bWJlcic7XG5cdFx0fVxuXHR9XG5cblx0dmFyIGV4b3RpY1RvUHJpbTtcblx0aWYgKGhhc1N5bWJvbHMpIHtcblx0XHRpZiAoU3ltYm9sLnRvUHJpbWl0aXZlKSB7XG5cdFx0XHRleG90aWNUb1ByaW0gPSBHZXRNZXRob2QoaW5wdXQsIFN5bWJvbC50b1ByaW1pdGl2ZSk7XG5cdFx0fSBlbHNlIGlmIChpc1N5bWJvbChpbnB1dCkpIHtcblx0XHRcdGV4b3RpY1RvUHJpbSA9IFN5bWJvbC5wcm90b3R5cGUudmFsdWVPZjtcblx0XHR9XG5cdH1cblx0aWYgKHR5cGVvZiBleG90aWNUb1ByaW0gIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0dmFyIHJlc3VsdCA9IGV4b3RpY1RvUHJpbS5jYWxsKGlucHV0LCBoaW50KTtcblx0XHRpZiAoaXNQcmltaXRpdmUocmVzdWx0KSkge1xuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcigndW5hYmxlIHRvIGNvbnZlcnQgZXhvdGljIG9iamVjdCB0byBwcmltaXRpdmUnKTtcblx0fVxuXHRpZiAoaGludCA9PT0gJ2RlZmF1bHQnICYmIChpc0RhdGUoaW5wdXQpIHx8IGlzU3ltYm9sKGlucHV0KSkpIHtcblx0XHRoaW50ID0gJ3N0cmluZyc7XG5cdH1cblx0cmV0dXJuIG9yZGluYXJ5VG9QcmltaXRpdmUoaW5wdXQsIGhpbnQgPT09ICdkZWZhdWx0JyA/ICdudW1iZXInIDogaGludCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VzLXRvLXByaW1pdGl2ZS9lczIwMTUuanNcbi8vIG1vZHVsZSBpZCA9IDQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc1ByaW1pdGl2ZSh2YWx1ZSkge1xuXHRyZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgKHR5cGVvZiB2YWx1ZSAhPT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZXMtdG8tcHJpbWl0aXZlL2hlbHBlcnMvaXNQcmltaXRpdmUuanNcbi8vIG1vZHVsZSBpZCA9IDUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZm5Ub1N0ciA9IEZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZztcblxudmFyIGNvbnN0cnVjdG9yUmVnZXggPSAvXlxccypjbGFzc1xcYi87XG52YXIgaXNFUzZDbGFzc0ZuID0gZnVuY3Rpb24gaXNFUzZDbGFzc0Z1bmN0aW9uKHZhbHVlKSB7XG5cdHRyeSB7XG5cdFx0dmFyIGZuU3RyID0gZm5Ub1N0ci5jYWxsKHZhbHVlKTtcblx0XHRyZXR1cm4gY29uc3RydWN0b3JSZWdleC50ZXN0KGZuU3RyKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdHJldHVybiBmYWxzZTsgLy8gbm90IGEgZnVuY3Rpb25cblx0fVxufTtcblxudmFyIHRyeUZ1bmN0aW9uT2JqZWN0ID0gZnVuY3Rpb24gdHJ5RnVuY3Rpb25Ub1N0cih2YWx1ZSkge1xuXHR0cnkge1xuXHRcdGlmIChpc0VTNkNsYXNzRm4odmFsdWUpKSB7IHJldHVybiBmYWxzZTsgfVxuXHRcdGZuVG9TdHIuY2FsbCh2YWx1ZSk7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn07XG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIGZuQ2xhc3MgPSAnW29iamVjdCBGdW5jdGlvbl0nO1xudmFyIGdlbkNsYXNzID0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJztcbnZhciBoYXNUb1N0cmluZ1RhZyA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIFN5bWJvbC50b1N0cmluZ1RhZyA9PT0gJ3N5bWJvbCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNDYWxsYWJsZSh2YWx1ZSkge1xuXHRpZiAoIXZhbHVlKSB7IHJldHVybiBmYWxzZTsgfVxuXHRpZiAodHlwZW9mIHZhbHVlICE9PSAnZnVuY3Rpb24nICYmIHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicgJiYgIXZhbHVlLnByb3RvdHlwZSkgeyByZXR1cm4gdHJ1ZTsgfVxuXHRpZiAoaGFzVG9TdHJpbmdUYWcpIHsgcmV0dXJuIHRyeUZ1bmN0aW9uT2JqZWN0KHZhbHVlKTsgfVxuXHRpZiAoaXNFUzZDbGFzc0ZuKHZhbHVlKSkgeyByZXR1cm4gZmFsc2U7IH1cblx0dmFyIHN0ckNsYXNzID0gdG9TdHIuY2FsbCh2YWx1ZSk7XG5cdHJldHVybiBzdHJDbGFzcyA9PT0gZm5DbGFzcyB8fCBzdHJDbGFzcyA9PT0gZ2VuQ2xhc3M7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2lzLWNhbGxhYmxlL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxudmFyIGdldERheSA9IERhdGUucHJvdG90eXBlLmdldERheTtcbnZhciB0cnlEYXRlT2JqZWN0ID0gZnVuY3Rpb24gdHJ5RGF0ZU9iamVjdCh2YWx1ZSkge1xuXHR0cnkge1xuXHRcdGdldERheS5jYWxsKHZhbHVlKTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufTtcblxudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbnZhciBkYXRlQ2xhc3MgPSAnW29iamVjdCBEYXRlXSc7XG52YXIgaGFzVG9TdHJpbmdUYWcgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBTeW1ib2wudG9TdHJpbmdUYWcgPT09ICdzeW1ib2wnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzRGF0ZU9iamVjdCh2YWx1ZSkge1xuXHRpZiAodHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JyB8fCB2YWx1ZSA9PT0gbnVsbCkgeyByZXR1cm4gZmFsc2U7IH1cblx0cmV0dXJuIGhhc1RvU3RyaW5nVGFnID8gdHJ5RGF0ZU9iamVjdCh2YWx1ZSkgOiB0b1N0ci5jYWxsKHZhbHVlKSA9PT0gZGF0ZUNsYXNzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9pcy1kYXRlLW9iamVjdC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgaGFzU3ltYm9scyA9IHJlcXVpcmUoJ2hhcy1zeW1ib2xzJykoKTtcblxuaWYgKGhhc1N5bWJvbHMpIHtcblx0dmFyIHN5bVRvU3RyID0gU3ltYm9sLnByb3RvdHlwZS50b1N0cmluZztcblx0dmFyIHN5bVN0cmluZ1JlZ2V4ID0gL15TeW1ib2xcXCguKlxcKSQvO1xuXHR2YXIgaXNTeW1ib2xPYmplY3QgPSBmdW5jdGlvbiBpc1JlYWxTeW1ib2xPYmplY3QodmFsdWUpIHtcblx0XHRpZiAodHlwZW9mIHZhbHVlLnZhbHVlT2YoKSAhPT0gJ3N5bWJvbCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0cmV0dXJuIHN5bVN0cmluZ1JlZ2V4LnRlc3Qoc3ltVG9TdHIuY2FsbCh2YWx1ZSkpO1xuXHR9O1xuXG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNTeW1ib2wodmFsdWUpIHtcblx0XHRpZiAodHlwZW9mIHZhbHVlID09PSAnc3ltYm9sJykge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdGlmICh0b1N0ci5jYWxsKHZhbHVlKSAhPT0gJ1tvYmplY3QgU3ltYm9sXScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0dHJ5IHtcblx0XHRcdHJldHVybiBpc1N5bWJvbE9iamVjdCh2YWx1ZSk7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fTtcbn0gZWxzZSB7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc1N5bWJvbCh2YWx1ZSkge1xuXHRcdC8vIHRoaXMgZW52aXJvbm1lbnQgZG9lcyBub3Qgc3VwcG9ydCBTeW1ib2xzLlxuXHRcdHJldHVybiBmYWxzZSAmJiB2YWx1ZTtcblx0fTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9pcy1zeW1ib2wvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgb3JpZ1N5bWJvbCA9IGdsb2JhbC5TeW1ib2w7XG52YXIgaGFzU3ltYm9sU2hhbSA9IHJlcXVpcmUoJy4vc2hhbXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBoYXNOYXRpdmVTeW1ib2xzKCkge1xuXHRpZiAodHlwZW9mIG9yaWdTeW1ib2wgIT09ICdmdW5jdGlvbicpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdGlmICh0eXBlb2YgU3ltYm9sICE9PSAnZnVuY3Rpb24nKSB7IHJldHVybiBmYWxzZTsgfVxuXHRpZiAodHlwZW9mIG9yaWdTeW1ib2woJ2ZvbycpICE9PSAnc3ltYm9sJykgeyByZXR1cm4gZmFsc2U7IH1cblx0aWYgKHR5cGVvZiBTeW1ib2woJ2JhcicpICE9PSAnc3ltYm9sJykgeyByZXR1cm4gZmFsc2U7IH1cblxuXHRyZXR1cm4gaGFzU3ltYm9sU2hhbSgpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9oYXMtc3ltYm9scy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbi8qIGVzbGludCBjb21wbGV4aXR5OiBbMiwgMTddLCBtYXgtc3RhdGVtZW50czogWzIsIDMzXSAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBoYXNTeW1ib2xzKCkge1xuXHRpZiAodHlwZW9mIFN5bWJvbCAhPT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyAhPT0gJ2Z1bmN0aW9uJykgeyByZXR1cm4gZmFsc2U7IH1cblx0aWYgKHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09ICdzeW1ib2wnKSB7IHJldHVybiB0cnVlOyB9XG5cblx0dmFyIG9iaiA9IHt9O1xuXHR2YXIgc3ltID0gU3ltYm9sKCd0ZXN0Jyk7XG5cdHZhciBzeW1PYmogPSBPYmplY3Qoc3ltKTtcblx0aWYgKHR5cGVvZiBzeW0gPT09ICdzdHJpbmcnKSB7IHJldHVybiBmYWxzZTsgfVxuXG5cdGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoc3ltKSAhPT0gJ1tvYmplY3QgU3ltYm9sXScpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoc3ltT2JqKSAhPT0gJ1tvYmplY3QgU3ltYm9sXScpIHsgcmV0dXJuIGZhbHNlOyB9XG5cblx0Ly8gdGVtcCBkaXNhYmxlZCBwZXIgaHR0cHM6Ly9naXRodWIuY29tL2xqaGFyYi9vYmplY3QuYXNzaWduL2lzc3Vlcy8xN1xuXHQvLyBpZiAoc3ltIGluc3RhbmNlb2YgU3ltYm9sKSB7IHJldHVybiBmYWxzZTsgfVxuXHQvLyB0ZW1wIGRpc2FibGVkIHBlciBodHRwczovL2dpdGh1Yi5jb20vV2ViUmVmbGVjdGlvbi9nZXQtb3duLXByb3BlcnR5LXN5bWJvbHMvaXNzdWVzLzRcblx0Ly8gaWYgKCEoc3ltT2JqIGluc3RhbmNlb2YgU3ltYm9sKSkgeyByZXR1cm4gZmFsc2U7IH1cblxuXHQvLyBpZiAodHlwZW9mIFN5bWJvbC5wcm90b3R5cGUudG9TdHJpbmcgIT09ICdmdW5jdGlvbicpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdC8vIGlmIChTdHJpbmcoc3ltKSAhPT0gU3ltYm9sLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHN5bSkpIHsgcmV0dXJuIGZhbHNlOyB9XG5cblx0dmFyIHN5bVZhbCA9IDQyO1xuXHRvYmpbc3ltXSA9IHN5bVZhbDtcblx0Zm9yIChzeW0gaW4gb2JqKSB7IHJldHVybiBmYWxzZTsgfSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG5cdGlmICh0eXBlb2YgT2JqZWN0LmtleXMgPT09ICdmdW5jdGlvbicgJiYgT2JqZWN0LmtleXMob2JqKS5sZW5ndGggIT09IDApIHsgcmV0dXJuIGZhbHNlOyB9XG5cblx0aWYgKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyA9PT0gJ2Z1bmN0aW9uJyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmopLmxlbmd0aCAhPT0gMCkgeyByZXR1cm4gZmFsc2U7IH1cblxuXHR2YXIgc3ltcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqKTtcblx0aWYgKHN5bXMubGVuZ3RoICE9PSAxIHx8IHN5bXNbMF0gIT09IHN5bSkgeyByZXR1cm4gZmFsc2U7IH1cblxuXHRpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChvYmosIHN5bSkpIHsgcmV0dXJuIGZhbHNlOyB9XG5cblx0aWYgKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwgc3ltKTtcblx0XHRpZiAoZGVzY3JpcHRvci52YWx1ZSAhPT0gc3ltVmFsIHx8IGRlc2NyaXB0b3IuZW51bWVyYWJsZSAhPT0gdHJ1ZSkgeyByZXR1cm4gZmFsc2U7IH1cblx0fVxuXG5cdHJldHVybiB0cnVlO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9oYXMtc3ltYm9scy9zaGFtcy5qc1xuLy8gbW9kdWxlIGlkID0gNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbi8qIGdsb2JhbHNcblx0U2V0LFxuXHRNYXAsXG5cdFdlYWtTZXQsXG5cdFdlYWtNYXAsXG5cblx0UHJvbWlzZSxcblxuXHRTeW1ib2wsXG5cdFByb3h5LFxuXG5cdEF0b21pY3MsXG5cdFNoYXJlZEFycmF5QnVmZmVyLFxuXG5cdEFycmF5QnVmZmVyLFxuXHREYXRhVmlldyxcblx0VWludDhBcnJheSxcblx0RmxvYXQzMkFycmF5LFxuXHRGbG9hdDY0QXJyYXksXG5cdEludDhBcnJheSxcblx0SW50MTZBcnJheSxcblx0SW50MzJBcnJheSxcblx0VWludDhDbGFtcGVkQXJyYXksXG5cdFVpbnQxNkFycmF5LFxuXHRVaW50MzJBcnJheSxcbiovXG5cbnZhciB1bmRlZmluZWQ7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2hhZG93LXJlc3RyaWN0ZWQtbmFtZXNcblxudmFyIFRocm93VHlwZUVycm9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvclxuXHQ/IChmdW5jdGlvbiAoKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGFyZ3VtZW50cywgJ2NhbGxlZScpLmdldDsgfSgpKVxuXHQ6IGZ1bmN0aW9uICgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcigpOyB9O1xuXG52YXIgaGFzU3ltYm9scyA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gJ3N5bWJvbCc7XG5cbnZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiAoeCkgeyByZXR1cm4geC5fX3Byb3RvX187IH07IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcHJvdG9cblxudmFyIGdlbmVyYXRvcjsgLy8gPSBmdW5jdGlvbiAqICgpIHt9O1xudmFyIGdlbmVyYXRvckZ1bmN0aW9uID0gZ2VuZXJhdG9yID8gZ2V0UHJvdG8oZ2VuZXJhdG9yKSA6IHVuZGVmaW5lZDtcbnZhciBhc3luY0ZuOyAvLyBhc3luYyBmdW5jdGlvbigpIHt9O1xudmFyIGFzeW5jRnVuY3Rpb24gPSBhc3luY0ZuID8gYXN5bmNGbi5jb25zdHJ1Y3RvciA6IHVuZGVmaW5lZDtcbnZhciBhc3luY0dlbjsgLy8gYXN5bmMgZnVuY3Rpb24gKiAoKSB7fTtcbnZhciBhc3luY0dlbkZ1bmN0aW9uID0gYXN5bmNHZW4gPyBnZXRQcm90byhhc3luY0dlbikgOiB1bmRlZmluZWQ7XG52YXIgYXN5bmNHZW5JdGVyYXRvciA9IGFzeW5jR2VuID8gYXN5bmNHZW4oKSA6IHVuZGVmaW5lZDtcblxudmFyIFR5cGVkQXJyYXkgPSB0eXBlb2YgVWludDhBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBnZXRQcm90byhVaW50OEFycmF5KTtcblxudmFyIElOVFJJTlNJQ1MgPSB7XG5cdCckICVBcnJheSUnOiBBcnJheSxcblx0JyQgJUFycmF5QnVmZmVyJSc6IHR5cGVvZiBBcnJheUJ1ZmZlciA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBBcnJheUJ1ZmZlcixcblx0JyQgJUFycmF5QnVmZmVyUHJvdG90eXBlJSc6IHR5cGVvZiBBcnJheUJ1ZmZlciA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBBcnJheUJ1ZmZlci5wcm90b3R5cGUsXG5cdCckICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJSc6IGhhc1N5bWJvbHMgPyBnZXRQcm90byhbXVtTeW1ib2wuaXRlcmF0b3JdKCkpIDogdW5kZWZpbmVkLFxuXHQnJCAlQXJyYXlQcm90b3R5cGUlJzogQXJyYXkucHJvdG90eXBlLFxuXHQnJCAlQXJyYXlQcm90b19lbnRyaWVzJSc6IEFycmF5LnByb3RvdHlwZS5lbnRyaWVzLFxuXHQnJCAlQXJyYXlQcm90b19mb3JFYWNoJSc6IEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLFxuXHQnJCAlQXJyYXlQcm90b19rZXlzJSc6IEFycmF5LnByb3RvdHlwZS5rZXlzLFxuXHQnJCAlQXJyYXlQcm90b192YWx1ZXMlJzogQXJyYXkucHJvdG90eXBlLnZhbHVlcyxcblx0JyQgJUFzeW5jRnJvbVN5bmNJdGVyYXRvclByb3RvdHlwZSUnOiB1bmRlZmluZWQsXG5cdCckICVBc3luY0Z1bmN0aW9uJSc6IGFzeW5jRnVuY3Rpb24sXG5cdCckICVBc3luY0Z1bmN0aW9uUHJvdG90eXBlJSc6IGFzeW5jRnVuY3Rpb24gPyBhc3luY0Z1bmN0aW9uLnByb3RvdHlwZSA6IHVuZGVmaW5lZCxcblx0JyQgJUFzeW5jR2VuZXJhdG9yJSc6IGFzeW5jR2VuID8gZ2V0UHJvdG8oYXN5bmNHZW5JdGVyYXRvcikgOiB1bmRlZmluZWQsXG5cdCckICVBc3luY0dlbmVyYXRvckZ1bmN0aW9uJSc6IGFzeW5jR2VuRnVuY3Rpb24sXG5cdCckICVBc3luY0dlbmVyYXRvclByb3RvdHlwZSUnOiBhc3luY0dlbkZ1bmN0aW9uID8gYXN5bmNHZW5GdW5jdGlvbi5wcm90b3R5cGUgOiB1bmRlZmluZWQsXG5cdCckICVBc3luY0l0ZXJhdG9yUHJvdG90eXBlJSc6IGFzeW5jR2VuSXRlcmF0b3IgJiYgaGFzU3ltYm9scyAmJiBTeW1ib2wuYXN5bmNJdGVyYXRvciA/IGFzeW5jR2VuSXRlcmF0b3JbU3ltYm9sLmFzeW5jSXRlcmF0b3JdKCkgOiB1bmRlZmluZWQsXG5cdCckICVBdG9taWNzJSc6IHR5cGVvZiBBdG9taWNzID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IEF0b21pY3MsXG5cdCckICVCb29sZWFuJSc6IEJvb2xlYW4sXG5cdCckICVCb29sZWFuUHJvdG90eXBlJSc6IEJvb2xlYW4ucHJvdG90eXBlLFxuXHQnJCAlRGF0YVZpZXclJzogdHlwZW9mIERhdGFWaWV3ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IERhdGFWaWV3LFxuXHQnJCAlRGF0YVZpZXdQcm90b3R5cGUlJzogdHlwZW9mIERhdGFWaWV3ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IERhdGFWaWV3LnByb3RvdHlwZSxcblx0JyQgJURhdGUlJzogRGF0ZSxcblx0JyQgJURhdGVQcm90b3R5cGUlJzogRGF0ZS5wcm90b3R5cGUsXG5cdCckICVkZWNvZGVVUkklJzogZGVjb2RlVVJJLFxuXHQnJCAlZGVjb2RlVVJJQ29tcG9uZW50JSc6IGRlY29kZVVSSUNvbXBvbmVudCxcblx0JyQgJWVuY29kZVVSSSUnOiBlbmNvZGVVUkksXG5cdCckICVlbmNvZGVVUklDb21wb25lbnQlJzogZW5jb2RlVVJJQ29tcG9uZW50LFxuXHQnJCAlRXJyb3IlJzogRXJyb3IsXG5cdCckICVFcnJvclByb3RvdHlwZSUnOiBFcnJvci5wcm90b3R5cGUsXG5cdCckICVldmFsJSc6IGV2YWwsIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tZXZhbFxuXHQnJCAlRXZhbEVycm9yJSc6IEV2YWxFcnJvcixcblx0JyQgJUV2YWxFcnJvclByb3RvdHlwZSUnOiBFdmFsRXJyb3IucHJvdG90eXBlLFxuXHQnJCAlRmxvYXQzMkFycmF5JSc6IHR5cGVvZiBGbG9hdDMyQXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogRmxvYXQzMkFycmF5LFxuXHQnJCAlRmxvYXQzMkFycmF5UHJvdG90eXBlJSc6IHR5cGVvZiBGbG9hdDMyQXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogRmxvYXQzMkFycmF5LnByb3RvdHlwZSxcblx0JyQgJUZsb2F0NjRBcnJheSUnOiB0eXBlb2YgRmxvYXQ2NEFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IEZsb2F0NjRBcnJheSxcblx0JyQgJUZsb2F0NjRBcnJheVByb3RvdHlwZSUnOiB0eXBlb2YgRmxvYXQ2NEFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IEZsb2F0NjRBcnJheS5wcm90b3R5cGUsXG5cdCckICVGdW5jdGlvbiUnOiBGdW5jdGlvbixcblx0JyQgJUZ1bmN0aW9uUHJvdG90eXBlJSc6IEZ1bmN0aW9uLnByb3RvdHlwZSxcblx0JyQgJUdlbmVyYXRvciUnOiBnZW5lcmF0b3IgPyBnZXRQcm90byhnZW5lcmF0b3IoKSkgOiB1bmRlZmluZWQsXG5cdCckICVHZW5lcmF0b3JGdW5jdGlvbiUnOiBnZW5lcmF0b3JGdW5jdGlvbixcblx0JyQgJUdlbmVyYXRvclByb3RvdHlwZSUnOiBnZW5lcmF0b3JGdW5jdGlvbiA/IGdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA6IHVuZGVmaW5lZCxcblx0JyQgJUludDhBcnJheSUnOiB0eXBlb2YgSW50OEFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IEludDhBcnJheSxcblx0JyQgJUludDhBcnJheVByb3RvdHlwZSUnOiB0eXBlb2YgSW50OEFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IEludDhBcnJheS5wcm90b3R5cGUsXG5cdCckICVJbnQxNkFycmF5JSc6IHR5cGVvZiBJbnQxNkFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IEludDE2QXJyYXksXG5cdCckICVJbnQxNkFycmF5UHJvdG90eXBlJSc6IHR5cGVvZiBJbnQxNkFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IEludDhBcnJheS5wcm90b3R5cGUsXG5cdCckICVJbnQzMkFycmF5JSc6IHR5cGVvZiBJbnQzMkFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IEludDMyQXJyYXksXG5cdCckICVJbnQzMkFycmF5UHJvdG90eXBlJSc6IHR5cGVvZiBJbnQzMkFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IEludDMyQXJyYXkucHJvdG90eXBlLFxuXHQnJCAlaXNGaW5pdGUlJzogaXNGaW5pdGUsXG5cdCckICVpc05hTiUnOiBpc05hTixcblx0JyQgJUl0ZXJhdG9yUHJvdG90eXBlJSc6IGhhc1N5bWJvbHMgPyBnZXRQcm90byhnZXRQcm90byhbXVtTeW1ib2wuaXRlcmF0b3JdKCkpKSA6IHVuZGVmaW5lZCxcblx0JyQgJUpTT04lJzogSlNPTixcblx0JyQgJUpTT05QYXJzZSUnOiBKU09OLnBhcnNlLFxuXHQnJCAlTWFwJSc6IHR5cGVvZiBNYXAgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogTWFwLFxuXHQnJCAlTWFwSXRlcmF0b3JQcm90b3R5cGUlJzogdHlwZW9mIE1hcCA9PT0gJ3VuZGVmaW5lZCcgfHwgIWhhc1N5bWJvbHMgPyB1bmRlZmluZWQgOiBnZXRQcm90byhuZXcgTWFwKClbU3ltYm9sLml0ZXJhdG9yXSgpKSxcblx0JyQgJU1hcFByb3RvdHlwZSUnOiB0eXBlb2YgTWFwID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IE1hcC5wcm90b3R5cGUsXG5cdCckICVNYXRoJSc6IE1hdGgsXG5cdCckICVOdW1iZXIlJzogTnVtYmVyLFxuXHQnJCAlTnVtYmVyUHJvdG90eXBlJSc6IE51bWJlci5wcm90b3R5cGUsXG5cdCckICVPYmplY3QlJzogT2JqZWN0LFxuXHQnJCAlT2JqZWN0UHJvdG90eXBlJSc6IE9iamVjdC5wcm90b3R5cGUsXG5cdCckICVPYmpQcm90b190b1N0cmluZyUnOiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLFxuXHQnJCAlT2JqUHJvdG9fdmFsdWVPZiUnOiBPYmplY3QucHJvdG90eXBlLnZhbHVlT2YsXG5cdCckICVwYXJzZUZsb2F0JSc6IHBhcnNlRmxvYXQsXG5cdCckICVwYXJzZUludCUnOiBwYXJzZUludCxcblx0JyQgJVByb21pc2UlJzogdHlwZW9mIFByb21pc2UgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogUHJvbWlzZSxcblx0JyQgJVByb21pc2VQcm90b3R5cGUlJzogdHlwZW9mIFByb21pc2UgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogUHJvbWlzZS5wcm90b3R5cGUsXG5cdCckICVQcm9taXNlUHJvdG9fdGhlbiUnOiB0eXBlb2YgUHJvbWlzZSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBQcm9taXNlLnByb3RvdHlwZS50aGVuLFxuXHQnJCAlUHJvbWlzZV9hbGwlJzogdHlwZW9mIFByb21pc2UgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogUHJvbWlzZS5hbGwsXG5cdCckICVQcm9taXNlX3JlamVjdCUnOiB0eXBlb2YgUHJvbWlzZSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBQcm9taXNlLnJlamVjdCxcblx0JyQgJVByb21pc2VfcmVzb2x2ZSUnOiB0eXBlb2YgUHJvbWlzZSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBQcm9taXNlLnJlc29sdmUsXG5cdCckICVQcm94eSUnOiB0eXBlb2YgUHJveHkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogUHJveHksXG5cdCckICVSYW5nZUVycm9yJSc6IFJhbmdlRXJyb3IsXG5cdCckICVSYW5nZUVycm9yUHJvdG90eXBlJSc6IFJhbmdlRXJyb3IucHJvdG90eXBlLFxuXHQnJCAlUmVmZXJlbmNlRXJyb3IlJzogUmVmZXJlbmNlRXJyb3IsXG5cdCckICVSZWZlcmVuY2VFcnJvclByb3RvdHlwZSUnOiBSZWZlcmVuY2VFcnJvci5wcm90b3R5cGUsXG5cdCckICVSZWZsZWN0JSc6IHR5cGVvZiBSZWZsZWN0ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFJlZmxlY3QsXG5cdCckICVSZWdFeHAlJzogUmVnRXhwLFxuXHQnJCAlUmVnRXhwUHJvdG90eXBlJSc6IFJlZ0V4cC5wcm90b3R5cGUsXG5cdCckICVTZXQlJzogdHlwZW9mIFNldCA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBTZXQsXG5cdCckICVTZXRJdGVyYXRvclByb3RvdHlwZSUnOiB0eXBlb2YgU2V0ID09PSAndW5kZWZpbmVkJyB8fCAhaGFzU3ltYm9scyA/IHVuZGVmaW5lZCA6IGdldFByb3RvKG5ldyBTZXQoKVtTeW1ib2wuaXRlcmF0b3JdKCkpLFxuXHQnJCAlU2V0UHJvdG90eXBlJSc6IHR5cGVvZiBTZXQgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogU2V0LnByb3RvdHlwZSxcblx0JyQgJVNoYXJlZEFycmF5QnVmZmVyJSc6IHR5cGVvZiBTaGFyZWRBcnJheUJ1ZmZlciA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBTaGFyZWRBcnJheUJ1ZmZlcixcblx0JyQgJVNoYXJlZEFycmF5QnVmZmVyUHJvdG90eXBlJSc6IHR5cGVvZiBTaGFyZWRBcnJheUJ1ZmZlciA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBTaGFyZWRBcnJheUJ1ZmZlci5wcm90b3R5cGUsXG5cdCckICVTdHJpbmclJzogU3RyaW5nLFxuXHQnJCAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlJzogaGFzU3ltYm9scyA/IGdldFByb3RvKCcnW1N5bWJvbC5pdGVyYXRvcl0oKSkgOiB1bmRlZmluZWQsXG5cdCckICVTdHJpbmdQcm90b3R5cGUlJzogU3RyaW5nLnByb3RvdHlwZSxcblx0JyQgJVN5bWJvbCUnOiBoYXNTeW1ib2xzID8gU3ltYm9sIDogdW5kZWZpbmVkLFxuXHQnJCAlU3ltYm9sUHJvdG90eXBlJSc6IGhhc1N5bWJvbHMgPyBTeW1ib2wucHJvdG90eXBlIDogdW5kZWZpbmVkLFxuXHQnJCAlU3ludGF4RXJyb3IlJzogU3ludGF4RXJyb3IsXG5cdCckICVTeW50YXhFcnJvclByb3RvdHlwZSUnOiBTeW50YXhFcnJvci5wcm90b3R5cGUsXG5cdCckICVUaHJvd1R5cGVFcnJvciUnOiBUaHJvd1R5cGVFcnJvcixcblx0JyQgJVR5cGVkQXJyYXklJzogVHlwZWRBcnJheSxcblx0JyQgJVR5cGVkQXJyYXlQcm90b3R5cGUlJzogVHlwZWRBcnJheSA/IFR5cGVkQXJyYXkucHJvdG90eXBlIDogdW5kZWZpbmVkLFxuXHQnJCAlVHlwZUVycm9yJSc6IFR5cGVFcnJvcixcblx0JyQgJVR5cGVFcnJvclByb3RvdHlwZSUnOiBUeXBlRXJyb3IucHJvdG90eXBlLFxuXHQnJCAlVWludDhBcnJheSUnOiB0eXBlb2YgVWludDhBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBVaW50OEFycmF5LFxuXHQnJCAlVWludDhBcnJheVByb3RvdHlwZSUnOiB0eXBlb2YgVWludDhBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBVaW50OEFycmF5LnByb3RvdHlwZSxcblx0JyQgJVVpbnQ4Q2xhbXBlZEFycmF5JSc6IHR5cGVvZiBVaW50OENsYW1wZWRBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBVaW50OENsYW1wZWRBcnJheSxcblx0JyQgJVVpbnQ4Q2xhbXBlZEFycmF5UHJvdG90eXBlJSc6IHR5cGVvZiBVaW50OENsYW1wZWRBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBVaW50OENsYW1wZWRBcnJheS5wcm90b3R5cGUsXG5cdCckICVVaW50MTZBcnJheSUnOiB0eXBlb2YgVWludDE2QXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogVWludDE2QXJyYXksXG5cdCckICVVaW50MTZBcnJheVByb3RvdHlwZSUnOiB0eXBlb2YgVWludDE2QXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogVWludDE2QXJyYXkucHJvdG90eXBlLFxuXHQnJCAlVWludDMyQXJyYXklJzogdHlwZW9mIFVpbnQzMkFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFVpbnQzMkFycmF5LFxuXHQnJCAlVWludDMyQXJyYXlQcm90b3R5cGUlJzogdHlwZW9mIFVpbnQzMkFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFVpbnQzMkFycmF5LnByb3RvdHlwZSxcblx0JyQgJVVSSUVycm9yJSc6IFVSSUVycm9yLFxuXHQnJCAlVVJJRXJyb3JQcm90b3R5cGUlJzogVVJJRXJyb3IucHJvdG90eXBlLFxuXHQnJCAlV2Vha01hcCUnOiB0eXBlb2YgV2Vha01hcCA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBXZWFrTWFwLFxuXHQnJCAlV2Vha01hcFByb3RvdHlwZSUnOiB0eXBlb2YgV2Vha01hcCA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBXZWFrTWFwLnByb3RvdHlwZSxcblx0JyQgJVdlYWtTZXQlJzogdHlwZW9mIFdlYWtTZXQgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogV2Vha1NldCxcblx0JyQgJVdlYWtTZXRQcm90b3R5cGUlJzogdHlwZW9mIFdlYWtTZXQgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogV2Vha1NldC5wcm90b3R5cGVcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gR2V0SW50cmluc2ljKG5hbWUsIGFsbG93TWlzc2luZykge1xuXHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgdHlwZW9mIGFsbG93TWlzc2luZyAhPT0gJ2Jvb2xlYW4nKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignXCJhbGxvd01pc3NpbmdcIiBhcmd1bWVudCBtdXN0IGJlIGEgYm9vbGVhbicpO1xuXHR9XG5cblx0dmFyIGtleSA9ICckICcgKyBuYW1lO1xuXHRpZiAoIShrZXkgaW4gSU5UUklOU0lDUykpIHtcblx0XHR0aHJvdyBuZXcgU3ludGF4RXJyb3IoJ2ludHJpbnNpYyAnICsgbmFtZSArICcgZG9lcyBub3QgZXhpc3QhJyk7XG5cdH1cblxuXHQvLyBpc3RhbmJ1bCBpZ25vcmUgaWYgLy8gaG9wZWZ1bGx5IHRoaXMgaXMgaW1wb3NzaWJsZSB0byB0ZXN0IDotKVxuXHRpZiAodHlwZW9mIElOVFJJTlNJQ1Nba2V5XSA9PT0gJ3VuZGVmaW5lZCcgJiYgIWFsbG93TWlzc2luZykge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ2ludHJpbnNpYyAnICsgbmFtZSArICcgZXhpc3RzLCBidXQgaXMgbm90IGF2YWlsYWJsZS4gUGxlYXNlIGZpbGUgYW4gaXNzdWUhJyk7XG5cdH1cblx0cmV0dXJuIElOVFJJTlNJQ1Nba2V5XTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZXMtYWJzdHJhY3QvR2V0SW50cmluc2ljLmpzXG4vLyBtb2R1bGUgaWQgPSA1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxudmFyIEdldEludHJpbnNpYyA9IHJlcXVpcmUoJy4uL0dldEludHJpbnNpYycpO1xuXG52YXIgJFR5cGVFcnJvciA9IEdldEludHJpbnNpYygnJVR5cGVFcnJvciUnKTtcbnZhciAkU3ludGF4RXJyb3IgPSBHZXRJbnRyaW5zaWMoJyVTeW50YXhFcnJvciUnKTtcblxudmFyIGhhcyA9IHJlcXVpcmUoJ2hhcycpO1xuXG52YXIgcHJlZGljYXRlcyA9IHtcbiAgLy8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLXByb3BlcnR5LWRlc2NyaXB0b3Itc3BlY2lmaWNhdGlvbi10eXBlXG4gICdQcm9wZXJ0eSBEZXNjcmlwdG9yJzogZnVuY3Rpb24gaXNQcm9wZXJ0eURlc2NyaXB0b3IoRVMsIERlc2MpIHtcbiAgICBpZiAoRVMuVHlwZShEZXNjKSAhPT0gJ09iamVjdCcpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFyIGFsbG93ZWQgPSB7XG4gICAgICAnW1tDb25maWd1cmFibGVdXSc6IHRydWUsXG4gICAgICAnW1tFbnVtZXJhYmxlXV0nOiB0cnVlLFxuICAgICAgJ1tbR2V0XV0nOiB0cnVlLFxuICAgICAgJ1tbU2V0XV0nOiB0cnVlLFxuICAgICAgJ1tbVmFsdWVdXSc6IHRydWUsXG4gICAgICAnW1tXcml0YWJsZV1dJzogdHJ1ZVxuICAgIH07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gRGVzYykgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICBpZiAoaGFzKERlc2MsIGtleSkgJiYgIWFsbG93ZWRba2V5XSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGlzRGF0YSA9IGhhcyhEZXNjLCAnW1tWYWx1ZV1dJyk7XG4gICAgdmFyIElzQWNjZXNzb3IgPSBoYXMoRGVzYywgJ1tbR2V0XV0nKSB8fCBoYXMoRGVzYywgJ1tbU2V0XV0nKTtcbiAgICBpZiAoaXNEYXRhICYmIElzQWNjZXNzb3IpIHtcbiAgICAgIHRocm93IG5ldyAkVHlwZUVycm9yKCdQcm9wZXJ0eSBEZXNjcmlwdG9ycyBtYXkgbm90IGJlIGJvdGggYWNjZXNzb3IgYW5kIGRhdGEgZGVzY3JpcHRvcnMnKTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYXNzZXJ0UmVjb3JkKEVTLCByZWNvcmRUeXBlLCBhcmd1bWVudE5hbWUsIHZhbHVlKSB7XG4gIHZhciBwcmVkaWNhdGUgPSBwcmVkaWNhdGVzW3JlY29yZFR5cGVdO1xuICBpZiAodHlwZW9mIHByZWRpY2F0ZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyAkU3ludGF4RXJyb3IoJ3Vua25vd24gcmVjb3JkIHR5cGU6ICcgKyByZWNvcmRUeXBlKTtcbiAgfVxuICBpZiAoIXByZWRpY2F0ZShFUywgdmFsdWUpKSB7XG4gICAgdGhyb3cgbmV3ICRUeXBlRXJyb3IoYXJndW1lbnROYW1lICsgJyBtdXN0IGJlIGEgJyArIHJlY29yZFR5cGUpO1xuICB9XG4gIGNvbnNvbGUubG9nKHByZWRpY2F0ZShFUywgdmFsdWUpLCB2YWx1ZSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VzLWFic3RyYWN0L2hlbHBlcnMvYXNzZXJ0UmVjb3JkLmpzXG4vLyBtb2R1bGUgaWQgPSA1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIm1vZHVsZS5leHBvcnRzID0gTnVtYmVyLmlzTmFOIHx8IGZ1bmN0aW9uIGlzTmFOKGEpIHtcblx0cmV0dXJuIGEgIT09IGE7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VzLWFic3RyYWN0L2hlbHBlcnMvaXNOYU4uanNcbi8vIG1vZHVsZSBpZCA9IDU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwidmFyICRpc05hTiA9IE51bWJlci5pc05hTiB8fCBmdW5jdGlvbiAoYSkgeyByZXR1cm4gYSAhPT0gYTsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBOdW1iZXIuaXNGaW5pdGUgfHwgZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHR5cGVvZiB4ID09PSAnbnVtYmVyJyAmJiAhJGlzTmFOKHgpICYmIHggIT09IEluZmluaXR5ICYmIHggIT09IC1JbmZpbml0eTsgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy1hYnN0cmFjdC9oZWxwZXJzL2lzRmluaXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsInZhciBiaW5kID0gcmVxdWlyZSgnZnVuY3Rpb24tYmluZCcpO1xudmFyIGhhcyA9IGJpbmQuY2FsbChGdW5jdGlvbi5jYWxsLCBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxudmFyICRhc3NpZ24gPSBPYmplY3QuYXNzaWduO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSkge1xuXHRpZiAoJGFzc2lnbikge1xuXHRcdHJldHVybiAkYXNzaWduKHRhcmdldCwgc291cmNlKTtcblx0fVxuXG5cdGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcblx0XHRpZiAoaGFzKHNvdXJjZSwga2V5KSkge1xuXHRcdFx0dGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHRhcmdldDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZXMtYWJzdHJhY3QvaGVscGVycy9hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzaWduKG51bWJlcikge1xuXHRyZXR1cm4gbnVtYmVyID49IDAgPyAxIDogLTE7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VzLWFic3RyYWN0L2hlbHBlcnMvc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG1vZChudW1iZXIsIG1vZHVsbykge1xuXHR2YXIgcmVtYWluID0gbnVtYmVyICUgbW9kdWxvO1xuXHRyZXR1cm4gTWF0aC5mbG9vcihyZW1haW4gPj0gMCA/IHJlbWFpbiA6IHJlbWFpbiArIG1vZHVsbyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VzLWFic3RyYWN0L2hlbHBlcnMvbW9kLmpzXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNQcmltaXRpdmUodmFsdWUpIHtcblx0cmV0dXJuIHZhbHVlID09PSBudWxsIHx8ICh0eXBlb2YgdmFsdWUgIT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0Jyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VzLWFic3RyYWN0L2hlbHBlcnMvaXNQcmltaXRpdmUuanNcbi8vIG1vZHVsZSBpZCA9IDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgR2V0SW50cmluc2ljID0gcmVxdWlyZSgnLi9HZXRJbnRyaW5zaWMnKTtcblxudmFyICRPYmplY3QgPSBHZXRJbnRyaW5zaWMoJyVPYmplY3QlJyk7XG52YXIgJFR5cGVFcnJvciA9IEdldEludHJpbnNpYygnJVR5cGVFcnJvciUnKTtcbnZhciAkU3RyaW5nID0gR2V0SW50cmluc2ljKCclU3RyaW5nJScpO1xuXG52YXIgYXNzZXJ0UmVjb3JkID0gcmVxdWlyZSgnLi9oZWxwZXJzL2Fzc2VydFJlY29yZCcpO1xudmFyICRpc05hTiA9IHJlcXVpcmUoJy4vaGVscGVycy9pc05hTicpO1xudmFyICRpc0Zpbml0ZSA9IHJlcXVpcmUoJy4vaGVscGVycy9pc0Zpbml0ZScpO1xuXG52YXIgc2lnbiA9IHJlcXVpcmUoJy4vaGVscGVycy9zaWduJyk7XG52YXIgbW9kID0gcmVxdWlyZSgnLi9oZWxwZXJzL21vZCcpO1xuXG52YXIgSXNDYWxsYWJsZSA9IHJlcXVpcmUoJ2lzLWNhbGxhYmxlJyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCdlcy10by1wcmltaXRpdmUvZXM1Jyk7XG5cbnZhciBoYXMgPSByZXF1aXJlKCdoYXMnKTtcblxuLy8gaHR0cHM6Ly9lczUuZ2l0aHViLmlvLyN4OVxudmFyIEVTNSA9IHtcblx0VG9QcmltaXRpdmU6IHRvUHJpbWl0aXZlLFxuXG5cdFRvQm9vbGVhbjogZnVuY3Rpb24gVG9Cb29sZWFuKHZhbHVlKSB7XG5cdFx0cmV0dXJuICEhdmFsdWU7XG5cdH0sXG5cdFRvTnVtYmVyOiBmdW5jdGlvbiBUb051bWJlcih2YWx1ZSkge1xuXHRcdHJldHVybiArdmFsdWU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8taW1wbGljaXQtY29lcmNpb25cblx0fSxcblx0VG9JbnRlZ2VyOiBmdW5jdGlvbiBUb0ludGVnZXIodmFsdWUpIHtcblx0XHR2YXIgbnVtYmVyID0gdGhpcy5Ub051bWJlcih2YWx1ZSk7XG5cdFx0aWYgKCRpc05hTihudW1iZXIpKSB7IHJldHVybiAwOyB9XG5cdFx0aWYgKG51bWJlciA9PT0gMCB8fCAhJGlzRmluaXRlKG51bWJlcikpIHsgcmV0dXJuIG51bWJlcjsgfVxuXHRcdHJldHVybiBzaWduKG51bWJlcikgKiBNYXRoLmZsb29yKE1hdGguYWJzKG51bWJlcikpO1xuXHR9LFxuXHRUb0ludDMyOiBmdW5jdGlvbiBUb0ludDMyKHgpIHtcblx0XHRyZXR1cm4gdGhpcy5Ub051bWJlcih4KSA+PiAwO1xuXHR9LFxuXHRUb1VpbnQzMjogZnVuY3Rpb24gVG9VaW50MzIoeCkge1xuXHRcdHJldHVybiB0aGlzLlRvTnVtYmVyKHgpID4+PiAwO1xuXHR9LFxuXHRUb1VpbnQxNjogZnVuY3Rpb24gVG9VaW50MTYodmFsdWUpIHtcblx0XHR2YXIgbnVtYmVyID0gdGhpcy5Ub051bWJlcih2YWx1ZSk7XG5cdFx0aWYgKCRpc05hTihudW1iZXIpIHx8IG51bWJlciA9PT0gMCB8fCAhJGlzRmluaXRlKG51bWJlcikpIHsgcmV0dXJuIDA7IH1cblx0XHR2YXIgcG9zSW50ID0gc2lnbihudW1iZXIpICogTWF0aC5mbG9vcihNYXRoLmFicyhudW1iZXIpKTtcblx0XHRyZXR1cm4gbW9kKHBvc0ludCwgMHgxMDAwMCk7XG5cdH0sXG5cdFRvU3RyaW5nOiBmdW5jdGlvbiBUb1N0cmluZyh2YWx1ZSkge1xuXHRcdHJldHVybiAkU3RyaW5nKHZhbHVlKTtcblx0fSxcblx0VG9PYmplY3Q6IGZ1bmN0aW9uIFRvT2JqZWN0KHZhbHVlKSB7XG5cdFx0dGhpcy5DaGVja09iamVjdENvZXJjaWJsZSh2YWx1ZSk7XG5cdFx0cmV0dXJuICRPYmplY3QodmFsdWUpO1xuXHR9LFxuXHRDaGVja09iamVjdENvZXJjaWJsZTogZnVuY3Rpb24gQ2hlY2tPYmplY3RDb2VyY2libGUodmFsdWUsIG9wdE1lc3NhZ2UpIHtcblx0XHQvKiBqc2hpbnQgZXFudWxsOnRydWUgKi9cblx0XHRpZiAodmFsdWUgPT0gbnVsbCkge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3Iob3B0TWVzc2FnZSB8fCAnQ2Fubm90IGNhbGwgbWV0aG9kIG9uICcgKyB2YWx1ZSk7XG5cdFx0fVxuXHRcdHJldHVybiB2YWx1ZTtcblx0fSxcblx0SXNDYWxsYWJsZTogSXNDYWxsYWJsZSxcblx0U2FtZVZhbHVlOiBmdW5jdGlvbiBTYW1lVmFsdWUoeCwgeSkge1xuXHRcdGlmICh4ID09PSB5KSB7IC8vIDAgPT09IC0wLCBidXQgdGhleSBhcmUgbm90IGlkZW50aWNhbC5cblx0XHRcdGlmICh4ID09PSAwKSB7IHJldHVybiAxIC8geCA9PT0gMSAvIHk7IH1cblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRyZXR1cm4gJGlzTmFOKHgpICYmICRpc05hTih5KTtcblx0fSxcblxuXHQvLyBodHRwczovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzUuMS8jc2VjLThcblx0VHlwZTogZnVuY3Rpb24gVHlwZSh4KSB7XG5cdFx0aWYgKHggPT09IG51bGwpIHtcblx0XHRcdHJldHVybiAnTnVsbCc7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2YgeCA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdHJldHVybiAnVW5kZWZpbmVkJztcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiB4ID09PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiB4ID09PSAnb2JqZWN0Jykge1xuXHRcdFx0cmV0dXJuICdPYmplY3QnO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIHggPT09ICdudW1iZXInKSB7XG5cdFx0XHRyZXR1cm4gJ051bWJlcic7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2YgeCA9PT0gJ2Jvb2xlYW4nKSB7XG5cdFx0XHRyZXR1cm4gJ0Jvb2xlYW4nO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIHggPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRyZXR1cm4gJ1N0cmluZyc7XG5cdFx0fVxuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1wcm9wZXJ0eS1kZXNjcmlwdG9yLXNwZWNpZmljYXRpb24tdHlwZVxuXHRJc1Byb3BlcnR5RGVzY3JpcHRvcjogZnVuY3Rpb24gSXNQcm9wZXJ0eURlc2NyaXB0b3IoRGVzYykge1xuXHRcdGlmICh0aGlzLlR5cGUoRGVzYykgIT09ICdPYmplY3QnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHZhciBhbGxvd2VkID0ge1xuXHRcdFx0J1tbQ29uZmlndXJhYmxlXV0nOiB0cnVlLFxuXHRcdFx0J1tbRW51bWVyYWJsZV1dJzogdHJ1ZSxcblx0XHRcdCdbW0dldF1dJzogdHJ1ZSxcblx0XHRcdCdbW1NldF1dJzogdHJ1ZSxcblx0XHRcdCdbW1ZhbHVlXV0nOiB0cnVlLFxuXHRcdFx0J1tbV3JpdGFibGVdXSc6IHRydWVcblx0XHR9O1xuXG5cdFx0Zm9yICh2YXIga2V5IGluIERlc2MpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXHRcdFx0aWYgKGhhcyhEZXNjLCBrZXkpICYmICFhbGxvd2VkW2tleV0pIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHZhciBpc0RhdGEgPSBoYXMoRGVzYywgJ1tbVmFsdWVdXScpO1xuXHRcdHZhciBJc0FjY2Vzc29yID0gaGFzKERlc2MsICdbW0dldF1dJykgfHwgaGFzKERlc2MsICdbW1NldF1dJyk7XG5cdFx0aWYgKGlzRGF0YSAmJiBJc0FjY2Vzc29yKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignUHJvcGVydHkgRGVzY3JpcHRvcnMgbWF5IG5vdCBiZSBib3RoIGFjY2Vzc29yIGFuZCBkYXRhIGRlc2NyaXB0b3JzJyk7XG5cdFx0fVxuXHRcdHJldHVybiB0cnVlO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi81LjEvI3NlYy04LjEwLjFcblx0SXNBY2Nlc3NvckRlc2NyaXB0b3I6IGZ1bmN0aW9uIElzQWNjZXNzb3JEZXNjcmlwdG9yKERlc2MpIHtcblx0XHRpZiAodHlwZW9mIERlc2MgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0YXNzZXJ0UmVjb3JkKHRoaXMsICdQcm9wZXJ0eSBEZXNjcmlwdG9yJywgJ0Rlc2MnLCBEZXNjKTtcblxuXHRcdGlmICghaGFzKERlc2MsICdbW0dldF1dJykgJiYgIWhhcyhEZXNjLCAnW1tTZXRdXScpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzUuMS8jc2VjLTguMTAuMlxuXHRJc0RhdGFEZXNjcmlwdG9yOiBmdW5jdGlvbiBJc0RhdGFEZXNjcmlwdG9yKERlc2MpIHtcblx0XHRpZiAodHlwZW9mIERlc2MgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0YXNzZXJ0UmVjb3JkKHRoaXMsICdQcm9wZXJ0eSBEZXNjcmlwdG9yJywgJ0Rlc2MnLCBEZXNjKTtcblxuXHRcdGlmICghaGFzKERlc2MsICdbW1ZhbHVlXV0nKSAmJiAhaGFzKERlc2MsICdbW1dyaXRhYmxlXV0nKSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi81LjEvI3NlYy04LjEwLjNcblx0SXNHZW5lcmljRGVzY3JpcHRvcjogZnVuY3Rpb24gSXNHZW5lcmljRGVzY3JpcHRvcihEZXNjKSB7XG5cdFx0aWYgKHR5cGVvZiBEZXNjID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGFzc2VydFJlY29yZCh0aGlzLCAnUHJvcGVydHkgRGVzY3JpcHRvcicsICdEZXNjJywgRGVzYyk7XG5cblx0XHRpZiAoIXRoaXMuSXNBY2Nlc3NvckRlc2NyaXB0b3IoRGVzYykgJiYgIXRoaXMuSXNEYXRhRGVzY3JpcHRvcihEZXNjKSkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi81LjEvI3NlYy04LjEwLjRcblx0RnJvbVByb3BlcnR5RGVzY3JpcHRvcjogZnVuY3Rpb24gRnJvbVByb3BlcnR5RGVzY3JpcHRvcihEZXNjKSB7XG5cdFx0aWYgKHR5cGVvZiBEZXNjID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0cmV0dXJuIERlc2M7XG5cdFx0fVxuXG5cdFx0YXNzZXJ0UmVjb3JkKHRoaXMsICdQcm9wZXJ0eSBEZXNjcmlwdG9yJywgJ0Rlc2MnLCBEZXNjKTtcblxuXHRcdGlmICh0aGlzLklzRGF0YURlc2NyaXB0b3IoRGVzYykpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHZhbHVlOiBEZXNjWydbW1ZhbHVlXV0nXSxcblx0XHRcdFx0d3JpdGFibGU6ICEhRGVzY1snW1tXcml0YWJsZV1dJ10sXG5cdFx0XHRcdGVudW1lcmFibGU6ICEhRGVzY1snW1tFbnVtZXJhYmxlXV0nXSxcblx0XHRcdFx0Y29uZmlndXJhYmxlOiAhIURlc2NbJ1tbQ29uZmlndXJhYmxlXV0nXVxuXHRcdFx0fTtcblx0XHR9IGVsc2UgaWYgKHRoaXMuSXNBY2Nlc3NvckRlc2NyaXB0b3IoRGVzYykpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGdldDogRGVzY1snW1tHZXRdXSddLFxuXHRcdFx0XHRzZXQ6IERlc2NbJ1tbU2V0XV0nXSxcblx0XHRcdFx0ZW51bWVyYWJsZTogISFEZXNjWydbW0VudW1lcmFibGVdXSddLFxuXHRcdFx0XHRjb25maWd1cmFibGU6ICEhRGVzY1snW1tDb25maWd1cmFibGVdXSddXG5cdFx0XHR9O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignRnJvbVByb3BlcnR5RGVzY3JpcHRvciBtdXN0IGJlIGNhbGxlZCB3aXRoIGEgZnVsbHkgcG9wdWxhdGVkIFByb3BlcnR5IERlc2NyaXB0b3InKTtcblx0XHR9XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzUuMS8jc2VjLTguMTAuNVxuXHRUb1Byb3BlcnR5RGVzY3JpcHRvcjogZnVuY3Rpb24gVG9Qcm9wZXJ0eURlc2NyaXB0b3IoT2JqKSB7XG5cdFx0aWYgKHRoaXMuVHlwZShPYmopICE9PSAnT2JqZWN0Jykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ1RvUHJvcGVydHlEZXNjcmlwdG9yIHJlcXVpcmVzIGFuIG9iamVjdCcpO1xuXHRcdH1cblxuXHRcdHZhciBkZXNjID0ge307XG5cdFx0aWYgKGhhcyhPYmosICdlbnVtZXJhYmxlJykpIHtcblx0XHRcdGRlc2NbJ1tbRW51bWVyYWJsZV1dJ10gPSB0aGlzLlRvQm9vbGVhbihPYmouZW51bWVyYWJsZSk7XG5cdFx0fVxuXHRcdGlmIChoYXMoT2JqLCAnY29uZmlndXJhYmxlJykpIHtcblx0XHRcdGRlc2NbJ1tbQ29uZmlndXJhYmxlXV0nXSA9IHRoaXMuVG9Cb29sZWFuKE9iai5jb25maWd1cmFibGUpO1xuXHRcdH1cblx0XHRpZiAoaGFzKE9iaiwgJ3ZhbHVlJykpIHtcblx0XHRcdGRlc2NbJ1tbVmFsdWVdXSddID0gT2JqLnZhbHVlO1xuXHRcdH1cblx0XHRpZiAoaGFzKE9iaiwgJ3dyaXRhYmxlJykpIHtcblx0XHRcdGRlc2NbJ1tbV3JpdGFibGVdXSddID0gdGhpcy5Ub0Jvb2xlYW4oT2JqLndyaXRhYmxlKTtcblx0XHR9XG5cdFx0aWYgKGhhcyhPYmosICdnZXQnKSkge1xuXHRcdFx0dmFyIGdldHRlciA9IE9iai5nZXQ7XG5cdFx0XHRpZiAodHlwZW9mIGdldHRlciAhPT0gJ3VuZGVmaW5lZCcgJiYgIXRoaXMuSXNDYWxsYWJsZShnZXR0ZXIpKSB7XG5cdFx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ2dldHRlciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcblx0XHRcdH1cblx0XHRcdGRlc2NbJ1tbR2V0XV0nXSA9IGdldHRlcjtcblx0XHR9XG5cdFx0aWYgKGhhcyhPYmosICdzZXQnKSkge1xuXHRcdFx0dmFyIHNldHRlciA9IE9iai5zZXQ7XG5cdFx0XHRpZiAodHlwZW9mIHNldHRlciAhPT0gJ3VuZGVmaW5lZCcgJiYgIXRoaXMuSXNDYWxsYWJsZShzZXR0ZXIpKSB7XG5cdFx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdzZXR0ZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cdFx0XHR9XG5cdFx0XHRkZXNjWydbW1NldF1dJ10gPSBzZXR0ZXI7XG5cdFx0fVxuXG5cdFx0aWYgKChoYXMoZGVzYywgJ1tbR2V0XV0nKSB8fCBoYXMoZGVzYywgJ1tbU2V0XV0nKSkgJiYgKGhhcyhkZXNjLCAnW1tWYWx1ZV1dJykgfHwgaGFzKGRlc2MsICdbW1dyaXRhYmxlXV0nKSkpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdJbnZhbGlkIHByb3BlcnR5IGRlc2NyaXB0b3IuIENhbm5vdCBib3RoIHNwZWNpZnkgYWNjZXNzb3JzIGFuZCBhIHZhbHVlIG9yIHdyaXRhYmxlIGF0dHJpYnV0ZScpO1xuXHRcdH1cblx0XHRyZXR1cm4gZGVzYztcblx0fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBFUzU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZXMtYWJzdHJhY3QvZXM1LmpzXG4vLyBtb2R1bGUgaWQgPSA2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxudmFyIGlzUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9oZWxwZXJzL2lzUHJpbWl0aXZlJyk7XG5cbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnaXMtY2FsbGFibGUnKTtcblxuLy8gaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNS4xLyNzZWMtOC4xMi44XG52YXIgRVM1aW50ZXJuYWxTbG90cyA9IHtcblx0J1tbRGVmYXVsdFZhbHVlXV0nOiBmdW5jdGlvbiAoTykge1xuXHRcdHZhciBhY3R1YWxIaW50O1xuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuXHRcdFx0YWN0dWFsSGludCA9IGFyZ3VtZW50c1sxXTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0YWN0dWFsSGludCA9IHRvU3RyLmNhbGwoTykgPT09ICdbb2JqZWN0IERhdGVdJyA/IFN0cmluZyA6IE51bWJlcjtcblx0XHR9XG5cblx0XHRpZiAoYWN0dWFsSGludCA9PT0gU3RyaW5nIHx8IGFjdHVhbEhpbnQgPT09IE51bWJlcikge1xuXHRcdFx0dmFyIG1ldGhvZHMgPSBhY3R1YWxIaW50ID09PSBTdHJpbmcgPyBbJ3RvU3RyaW5nJywgJ3ZhbHVlT2YnXSA6IFsndmFsdWVPZicsICd0b1N0cmluZyddO1xuXHRcdFx0dmFyIHZhbHVlLCBpO1xuXHRcdFx0Zm9yIChpID0gMDsgaSA8IG1ldGhvZHMubGVuZ3RoOyArK2kpIHtcblx0XHRcdFx0aWYgKGlzQ2FsbGFibGUoT1ttZXRob2RzW2ldXSkpIHtcblx0XHRcdFx0XHR2YWx1ZSA9IE9bbWV0aG9kc1tpXV0oKTtcblx0XHRcdFx0XHRpZiAoaXNQcmltaXRpdmUodmFsdWUpKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdObyBkZWZhdWx0IHZhbHVlJyk7XG5cdFx0fVxuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ2ludmFsaWQgW1tEZWZhdWx0VmFsdWVdXSBoaW50IHN1cHBsaWVkJyk7XG5cdH1cbn07XG5cbi8vIGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzUuMS8jc2VjLTkuMVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBUb1ByaW1pdGl2ZShpbnB1dCkge1xuXHRpZiAoaXNQcmltaXRpdmUoaW5wdXQpKSB7XG5cdFx0cmV0dXJuIGlucHV0O1xuXHR9XG5cdGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuXHRcdHJldHVybiBFUzVpbnRlcm5hbFNsb3RzWydbW0RlZmF1bHRWYWx1ZV1dJ10oaW5wdXQsIGFyZ3VtZW50c1sxXSk7XG5cdH1cblx0cmV0dXJuIEVTNWludGVybmFsU2xvdHNbJ1tbRGVmYXVsdFZhbHVlXV0nXShpbnB1dCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VzLXRvLXByaW1pdGl2ZS9lczUuanNcbi8vIG1vZHVsZSBpZCA9IDY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaGFzID0gcmVxdWlyZSgnaGFzJyk7XG52YXIgcmVnZXhFeGVjID0gUmVnRXhwLnByb3RvdHlwZS5leGVjO1xudmFyIGdPUEQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG52YXIgdHJ5UmVnZXhFeGVjQ2FsbCA9IGZ1bmN0aW9uIHRyeVJlZ2V4RXhlYyh2YWx1ZSkge1xuXHR0cnkge1xuXHRcdHZhciBsYXN0SW5kZXggPSB2YWx1ZS5sYXN0SW5kZXg7XG5cdFx0dmFsdWUubGFzdEluZGV4ID0gMDtcblxuXHRcdHJlZ2V4RXhlYy5jYWxsKHZhbHVlKTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fSBmaW5hbGx5IHtcblx0XHR2YWx1ZS5sYXN0SW5kZXggPSBsYXN0SW5kZXg7XG5cdH1cbn07XG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIHJlZ2V4Q2xhc3MgPSAnW29iamVjdCBSZWdFeHBdJztcbnZhciBoYXNUb1N0cmluZ1RhZyA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIFN5bWJvbC50b1N0cmluZ1RhZyA9PT0gJ3N5bWJvbCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNSZWdleCh2YWx1ZSkge1xuXHRpZiAoIXZhbHVlIHx8IHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0aWYgKCFoYXNUb1N0cmluZ1RhZykge1xuXHRcdHJldHVybiB0b1N0ci5jYWxsKHZhbHVlKSA9PT0gcmVnZXhDbGFzcztcblx0fVxuXG5cdHZhciBkZXNjcmlwdG9yID0gZ09QRCh2YWx1ZSwgJ2xhc3RJbmRleCcpO1xuXHR2YXIgaGFzTGFzdEluZGV4RGF0YVByb3BlcnR5ID0gZGVzY3JpcHRvciAmJiBoYXMoZGVzY3JpcHRvciwgJ3ZhbHVlJyk7XG5cdGlmICghaGFzTGFzdEluZGV4RGF0YVByb3BlcnR5KSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0cmV0dXJuIHRyeVJlZ2V4RXhlY0NhbGwodmFsdWUpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9pcy1yZWdleC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbnZhciBFUyA9IHJlcXVpcmUoJ2VzLWFic3RyYWN0L2VzNicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGZpbmQocHJlZGljYXRlKSB7XG5cdHZhciBsaXN0ID0gRVMuVG9PYmplY3QodGhpcyk7XG5cdHZhciBsZW5ndGggPSBFUy5Ub0xlbmd0aChsaXN0Lmxlbmd0aCk7XG5cdGlmICghRVMuSXNDYWxsYWJsZShwcmVkaWNhdGUpKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignQXJyYXkjZmluZDogcHJlZGljYXRlIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXHR9XG5cdGlmIChsZW5ndGggPT09IDApIHtcblx0XHRyZXR1cm4gdm9pZCAwO1xuXHR9XG5cdHZhciB0aGlzQXJnO1xuXHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDApIHtcblx0XHR0aGlzQXJnID0gYXJndW1lbnRzWzFdO1xuXHR9XG5cblx0Zm9yICh2YXIgaSA9IDAsIHZhbHVlOyBpIDwgbGVuZ3RoOyBpKyspIHtcblx0XHR2YWx1ZSA9IGxpc3RbaV07XG5cdFx0Ly8gaW5saW5lZCBmb3IgcGVyZm9ybWFuY2U6IGlmIChFUy5DYWxsKHByZWRpY2F0ZSwgdGhpc0FyZywgW3ZhbHVlLCBpLCBsaXN0XSkpIHtcblx0XHRpZiAocHJlZGljYXRlLmFwcGx5KHRoaXNBcmcsIFt2YWx1ZSwgaSwgbGlzdF0pKSB7XG5cdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0fVxuXHR9XG5cdHJldHVybiB2b2lkIDA7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2FycmF5LnByb3RvdHlwZS5maW5kL2ltcGxlbWVudGF0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSA2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnZXRQb2x5ZmlsbCgpIHtcblx0Ly8gRGV0ZWN0IGlmIGFuIGltcGxlbWVudGF0aW9uIGV4aXN0c1xuXHQvLyBEZXRlY3QgZWFybHkgaW1wbGVtZW50YXRpb25zIHdoaWNoIHNraXBwZWQgaG9sZXMgaW4gc3BhcnNlIGFycmF5c1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc3BhcnNlLWFycmF5c1xuXHR2YXIgaW1wbGVtZW50ZWQgPSBBcnJheS5wcm90b3R5cGUuZmluZCAmJiBbLCAxXS5maW5kKGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSkgIT09IDE7XG5cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGdsb2JhbC1yZXF1aXJlXG5cdHJldHVybiBpbXBsZW1lbnRlZCA/IEFycmF5LnByb3RvdHlwZS5maW5kIDogcmVxdWlyZSgnLi9pbXBsZW1lbnRhdGlvbicpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9hcnJheS5wcm90b3R5cGUuZmluZC9wb2x5ZmlsbC5qc1xuLy8gbW9kdWxlIGlkID0gNjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbnZhciBkZWZpbmUgPSByZXF1aXJlKCdkZWZpbmUtcHJvcGVydGllcycpO1xudmFyIGdldFBvbHlmaWxsID0gcmVxdWlyZSgnLi9wb2x5ZmlsbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNoaW1BcnJheVByb3RvdHlwZUZpbmQoKSB7XG5cdHZhciBwb2x5ZmlsbCA9IGdldFBvbHlmaWxsKCk7XG5cblx0ZGVmaW5lKEFycmF5LnByb3RvdHlwZSwgeyBmaW5kOiBwb2x5ZmlsbCB9LCB7XG5cdFx0ZmluZDogZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIEFycmF5LnByb3RvdHlwZS5maW5kICE9PSBwb2x5ZmlsbDtcblx0XHR9XG5cdH0pO1xuXG5cdHJldHVybiBwb2x5ZmlsbDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYXJyYXkucHJvdG90eXBlLmZpbmQvc2hpbS5qc1xuLy8gbW9kdWxlIGlkID0gNjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi1hcnJvd3MtYWx0XFxcIj48dGl0bGU+YXJyb3dzLWFsdDwvdGl0bGU+PHBhdGggZD1cXFwiTTE0MTEgNTQxbC0zNTUgMzU1IDM1NSAzNTUgMTQ0LTE0NHEyOS0zMSA3MC0xNCAzOSAxNyAzOSA1OXY0NDhxMCAyNi0xOSA0NXQtNDUgMTloLTQ0OHEtNDIgMC01OS00MC0xNy0zOSAxNC02OWwxNDQtMTQ0LTM1NS0zNTUtMzU1IDM1NSAxNDQgMTQ0cTMxIDMwIDE0IDY5LTE3IDQwLTU5IDQwaC00NDhxLTI2IDAtNDUtMTl0LTE5LTQ1di00NDhxMC00MiA0MC01OSAzOS0xNyA2OSAxNGwxNDQgMTQ0IDM1NS0zNTUtMzU1LTM1NS0xNDQgMTQ0cS0xOSAxOS00NSAxOS0xMiAwLTI0LTUtNDAtMTctNDAtNTl2LTQ0OHEwLTI2IDE5LTQ1dDQ1LTE5aDQ0OHE0MiAwIDU5IDQwIDE3IDM5LTE0IDY5bC0xNDQgMTQ0IDM1NSAzNTUgMzU1LTM1NS0xNDQtMTQ0cS0zMS0zMC0xNC02OSAxNy00MCA1OS00MGg0NDhxMjYgMCA0NSAxOXQxOSA0NXY0NDhxMCA0Mi0zOSA1OS0xMyA1LTI1IDUtMjYgMC00NS0xOXpcXFwiLz48L3N5bWJvbD48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDE3OTIgMTc5MlxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tYmFja3dhcmRcXFwiPjx0aXRsZT5iYWNrd2FyZDwvdGl0bGU+PHBhdGggZD1cXFwiTTE2ODMgMTQxcTE5LTE5IDMyLTEzdDEzIDMydjE0NzJxMCAyNi0xMyAzMnQtMzItMTNsLTcxMC03MTBxLTgtOS0xMy0xOXY3MTBxMCAyNi0xMyAzMnQtMzItMTNsLTcxMC03MTBxLTE5LTE5LTE5LTQ1dDE5LTQ1bDcxMC03MTBxMTktMTkgMzItMTN0MTMgMzJ2NzEwcTUtMTEgMTMtMTl6XFxcIi8+PC9zeW1ib2w+PHN5bWJvbCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNzkyIDE3OTJcXFwiIGlkPVxcXCJsZXBsYXllci1pY29uLWJ1bGxzZXllXFxcIj48dGl0bGU+YnVsbHNleWU8L3RpdGxlPjxwYXRoIGQ9XFxcIk0xMTUyIDg5NnEwIDEwNi03NSAxODF0LTE4MSA3NS0xODEtNzUtNzUtMTgxIDc1LTE4MSAxODEtNzUgMTgxIDc1IDc1IDE4MXptMTI4IDBxMC0xNTktMTEyLjUtMjcxLjV0LTI3MS41LTExMi41LTI3MS41IDExMi41LTExMi41IDI3MS41IDExMi41IDI3MS41IDI3MS41IDExMi41IDI3MS41LTExMi41IDExMi41LTI3MS41em0xMjggMHEwIDIxMi0xNTAgMzYydC0zNjIgMTUwLTM2Mi0xNTAtMTUwLTM2MiAxNTAtMzYyIDM2Mi0xNTAgMzYyIDE1MCAxNTAgMzYyem0xMjggMHEwLTEzMC01MS0yNDguNXQtMTM2LjUtMjA0LTIwNC0xMzYuNS0yNDguNS01MS0yNDguNSA1MS0yMDQgMTM2LjUtMTM2LjUgMjA0LTUxIDI0OC41IDUxIDI0OC41IDEzNi41IDIwNCAyMDQgMTM2LjUgMjQ4LjUgNTEgMjQ4LjUtNTEgMjA0LTEzNi41IDEzNi41LTIwNCA1MS0yNDguNXptMTI4IDBxMCAyMDktMTAzIDM4NS41dC0yNzkuNSAyNzkuNS0zODUuNSAxMDMtMzg1LjUtMTAzLTI3OS41LTI3OS41LTEwMy0zODUuNSAxMDMtMzg1LjUgMjc5LjUtMjc5LjUgMzg1LjUtMTAzIDM4NS41IDEwMyAyNzkuNSAyNzkuNSAxMDMgMzg1LjV6XFxcIi8+PC9zeW1ib2w+PHN5bWJvbCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIHZpZXdCb3g9XFxcIjAgMCA0MDAgMzgwXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi1jYXRcXFwiPjx0aXRsZT5jYXQ8L3RpdGxlPiA8cGF0aCBkPVxcXCJNIDE1MS4zNDkwNCwzMDcuMjA0NTUgTCAyNjQuMzQ5MDQsMzA3LjIwNDU1IEMgMjY0LjM0OTA0LDI5MS4xNDA5NiAyNjMuMjAyMSwyODcuOTU0NTUgMjM2LjU5OTA0LDI4Ny45NTQ1NSBDIDI0MC44NDkwNCwyNzUuMjA0NTUgMjU4LjEyNDI0LDI0NC4zNTgwOCAyNjcuNzI0MDQsMjQ0LjM1ODA4IEMgMjc2LjIxNzA3LDI0NC4zNTgwOCAyODYuMzQ5MDQsMjQ0LjgyNTkyIDI4Ni4zNDkwNCwyNjQuMjA0NTUgQyAyODYuMzQ5MDQsMjg2LjIwNDU1IDMyMy4zNzE3MSwzMjEuNjc1NDcgMzMyLjM0OTA0LDMwNy4yMDQ1NSBDIDM0NS43Mjc2OSwyODUuNjM4OTcgMzA5LjM0OTA0LDI5Mi4yMTUxNCAzMDkuMzQ5MDQsMjQwLjIwNDU1IEMgMzA5LjM0OTA0LDE2OS4wNTEzNSAzNTAuODc0MTcsMTc5LjE4MDcxIDM1MC44NzQxNywxMzkuMjA0NTUgQyAzNTAuODc0MTcsMTE5LjIwNDU1IDM0NS4zNDkwNCwxMTYuNTAzNzQgMzQ1LjM0OTA0LDEwMi4yMDQ1NSBDIDM0NS4zNDkwNCw4My4zMDY5NSAzNjEuOTk3MTcsODQuNDAzNTc3IDM1OC43NTgwNSw2OC43MzQ4NzkgQyAzNTYuNTIwNjEsNTcuOTExNjU2IDM1NC43Njk2Miw0OS4yMzE5OSAzNTMuNDY1MTYsMzYuMTQzODg5IEMgMzUyLjUzOTU5LDI2Ljg1NzMwNSAzNTIuMjQ0NTIsMTYuOTU5Mzk4IDM0Mi41OTg1NSwxNy4zNTczODIgQyAzMzEuMjY1MDUsMTcuODI0OTkyIDMyNi45NjU0OSwzNy43NzQxOSAzMDkuMzQ5MDQsMzkuMjA0NTQ5IEMgMjkxLjc2ODUxLDQwLjYzMTk5MSAyNzYuNzc4MzQsMjQuMjM4MDI4IDI2OS45NzQwNCwyNi41Nzk1NDkgQyAyNjMuMjI3MDksMjguOTAxMzM0IDI2NS4zNDkwNCw0Ny4yMDQ1NDkgMjY5LjM0OTA0LDYwLjIwNDU0OSBDIDI3NS42MzU4OCw4MC42MzY3NzEgMjg5LjM0OTA0LDEwNy4yMDQ1NSAyNjQuMzQ5MDQsMTExLjIwNDU1IEMgMjM5LjM0OTA0LDExNS4yMDQ1NSAxOTYuMzQ5MDQsMTE5LjIwNDU1IDE2NS4zNDkwNCwxNjAuMjA0NTUgQyAxMzQuMzQ5MDQsMjAxLjIwNDU1IDEzNS40OTM0MiwyNDkuMzIxMiAxMjMuMzQ5MDQsMjY0LjIwNDU1IEMgODIuNTkwNjk2LDMxNC4xNTUyOSA0MC44MjM5MTksMjkzLjY0NjI1IDQwLjgyMzkxOSwzMzUuMjA0NTUgQyA0MC44MjM5MTksMzUzLjgxMDE5IDcyLjM0OTA0NSwzNjcuMjA0NTUgNzcuMzQ5MDQ1LDM2MS4yMDQ1NSBDIDgyLjM0OTA0NSwzNTUuMjA0NTUgMzQuODYzNzY0LDMzNy4zMjU4NyA4Ny45OTU0OTIsMzE2LjIwNDU1IEMgMTMzLjM4NzExLDI5OC4xNjAxNCAxMzcuNDM5MTQsMjk0LjQ3NjYzIDE1MS4zNDkwNCwzMDcuMjA0NTUgeiBcXFwiIHN0eWxlPVxcXCJmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MXB4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjFcXFwiLz4gPC9zeW1ib2w+PHN5bWJvbCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNzkyIDE3OTJcXFwiIGlkPVxcXCJsZXBsYXllci1pY29uLWNvbW1lbnRpbmctb1xcXCI+PHRpdGxlPmNvbW1lbnRpbmctbzwvdGl0bGU+PHBhdGggZD1cXFwiTTY0MCA4OTZxMCA1My0zNy41IDkwLjV0LTkwLjUgMzcuNS05MC41LTM3LjUtMzcuNS05MC41IDM3LjUtOTAuNSA5MC41LTM3LjUgOTAuNSAzNy41IDM3LjUgOTAuNXptMzg0IDBxMCA1My0zNy41IDkwLjV0LTkwLjUgMzcuNS05MC41LTM3LjUtMzcuNS05MC41IDM3LjUtOTAuNSA5MC41LTM3LjUgOTAuNSAzNy41IDM3LjUgOTAuNXptMzg0IDBxMCA1My0zNy41IDkwLjV0LTkwLjUgMzcuNS05MC41LTM3LjUtMzcuNS05MC41IDM3LjUtOTAuNSA5MC41LTM3LjUgOTAuNSAzNy41IDM3LjUgOTAuNXptLTUxMi01MTJxLTIwNCAwLTM4MS41IDY5LjV0LTI4MiAxODcuNS0xMDQuNSAyNTVxMCAxMTIgNzEuNSAyMTMuNXQyMDEuNSAxNzUuNWw4NyA1MC0yNyA5NnEtMjQgOTEtNzAgMTcyIDE1Mi02MyAyNzUtMTcxbDQzLTM4IDU3IDZxNjkgOCAxMzAgOCAyMDQgMCAzODEuNS02OS41dDI4Mi0xODcuNSAxMDQuNS0yNTUtMTA0LjUtMjU1LTI4Mi0xODcuNS0zODEuNS02OS41em04OTYgNTEycTAgMTc0LTEyMCAzMjEuNXQtMzI2IDIzMy00NTAgODUuNXEtNzAgMC0xNDUtOC0xOTggMTc1LTQ2MCAyNDItNDkgMTQtMTE0IDIyaC01cS0xNSAwLTI3LTEwLjV0LTE2LTI3LjV2LTFxLTMtNC0uNS0xMnQyLTEwIDQuNS05LjVsNi05IDctOC41IDgtOXE3LTggMzEtMzQuNXQzNC41LTM4IDMxLTM5LjUgMzIuNS01MSAyNy01OSAyNi03NnEtMTU3LTg5LTI0Ny41LTIyMHQtOTAuNS0yODFxMC0xMzAgNzEtMjQ4LjV0MTkxLTIwNC41IDI4Ni0xMzYuNSAzNDgtNTAuNSAzNDggNTAuNSAyODYgMTM2LjUgMTkxIDIwNC41IDcxIDI0OC41elxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi1kb3dubG9hZFxcXCI+PHRpdGxlPmRvd25sb2FkPC90aXRsZT48cGF0aCBkPVxcXCJNMTM0NCAxMzQ0cTAtMjYtMTktNDV0LTQ1LTE5LTQ1IDE5LTE5IDQ1IDE5IDQ1IDQ1IDE5IDQ1LTE5IDE5LTQ1em0yNTYgMHEwLTI2LTE5LTQ1dC00NS0xOS00NSAxOS0xOSA0NSAxOSA0NSA0NSAxOSA0NS0xOSAxOS00NXptMTI4LTIyNHYzMjBxMCA0MC0yOCA2OHQtNjggMjhoLTE0NzJxLTQwIDAtNjgtMjh0LTI4LTY4di0zMjBxMC00MCAyOC02OHQ2OC0yOGg0NjVsMTM1IDEzNnE1OCA1NiAxMzYgNTZ0MTM2LTU2bDEzNi0xMzZoNDY0cTQwIDAgNjggMjh0MjggNjh6bS0zMjUtNTY5cTE3IDQxLTE0IDcwbC00NDggNDQ4cS0xOCAxOS00NSAxOXQtNDUtMTlsLTQ0OC00NDhxLTMxLTI5LTE0LTcwIDE3LTM5IDU5LTM5aDI1NnYtNDQ4cTAtMjYgMTktNDV0NDUtMTloMjU2cTI2IDAgNDUgMTl0MTkgNDV2NDQ4aDI1NnE0MiAwIDU5IDM5elxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi1lZGl0XFxcIj48dGl0bGU+ZWRpdDwvdGl0bGU+PHBhdGggZD1cXFwiTTg4OCAxMTg0bDExNi0xMTYtMTUyLTE1Mi0xMTYgMTE2djU2aDk2djk2aDU2em00NDAtNzIwcS0xNi0xNi0zMyAxbC0zNTAgMzUwcS0xNyAxNy0xIDMzdDMzLTFsMzUwLTM1MHExNy0xNyAxLTMzem04MCA1OTR2MTkwcTAgMTE5LTg0LjUgMjAzLjV0LTIwMy41IDg0LjVoLTgzMnEtMTE5IDAtMjAzLjUtODQuNXQtODQuNS0yMDMuNXYtODMycTAtMTE5IDg0LjUtMjAzLjV0MjAzLjUtODQuNWg4MzJxNjMgMCAxMTcgMjUgMTUgNyAxOCAyMyAzIDE3LTkgMjlsLTQ5IDQ5cS0xNCAxNC0zMiA4LTIzLTYtNDUtNmgtODMycS02NiAwLTExMyA0N3QtNDcgMTEzdjgzMnEwIDY2IDQ3IDExM3QxMTMgNDdoODMycTY2IDAgMTEzLTQ3dDQ3LTExM3YtMTI2cTAtMTMgOS0yMmw2NC02NHExNS0xNSAzNS03dDIwIDI5em0tOTYtNzM4bDI4OCAyODgtNjcyIDY3MmgtMjg4di0yODh6bTQ0NCAxMzJsLTkyIDkyLTI4OC0yODggOTItOTJxMjgtMjggNjgtMjh0NjggMjhsMTUyIDE1MnEyOCAyOCAyOCA2OHQtMjggNjh6XFxcIi8+PC9zeW1ib2w+PHN5bWJvbCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNzkyIDE3OTJcXFwiIGlkPVxcXCJsZXBsYXllci1pY29uLWZvcndhcmRcXFwiPjx0aXRsZT5mb3J3YXJkPC90aXRsZT48cGF0aCBkPVxcXCJNMTA5IDE2NTFxLTE5IDE5LTMyIDEzdC0xMy0zMnYtMTQ3MnEwLTI2IDEzLTMydDMyIDEzbDcxMCA3MTBxOCA4IDEzIDE5di03MTBxMC0yNiAxMy0zMnQzMiAxM2w3MTAgNzEwcTE5IDE5IDE5IDQ1dC0xOSA0NWwtNzEwIDcxMHEtMTkgMTktMzIgMTN0LTEzLTMydi03MTBxLTUgMTAtMTMgMTl6XFxcIi8+PC9zeW1ib2w+PHN5bWJvbCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNzkyIDE3OTJcXFwiIGlkPVxcXCJsZXBsYXllci1pY29uLWluZm9cXFwiPjx0aXRsZT5pbmZvPC90aXRsZT48cGF0aCBkPVxcXCJNMTIxNiAxMzQ0djEyOHEwIDI2LTE5IDQ1dC00NSAxOWgtNTEycS0yNiAwLTQ1LTE5dC0xOS00NXYtMTI4cTAtMjYgMTktNDV0NDUtMTloNjR2LTM4NGgtNjRxLTI2IDAtNDUtMTl0LTE5LTQ1di0xMjhxMC0yNiAxOS00NXQ0NS0xOWgzODRxMjYgMCA0NSAxOXQxOSA0NXY1NzZoNjRxMjYgMCA0NSAxOXQxOSA0NXptLTEyOC0xMTUydjE5MnEwIDI2LTE5IDQ1dC00NSAxOWgtMjU2cS0yNiAwLTQ1LTE5dC0xOS00NXYtMTkycTAtMjYgMTktNDV0NDUtMTloMjU2cTI2IDAgNDUgMTl0MTkgNDV6XFxcIi8+PC9zeW1ib2w+PHN5bWJvbCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNzkyIDE3OTJcXFwiIGlkPVxcXCJsZXBsYXllci1pY29uLWxpc3QtdWxcXFwiPjx0aXRsZT5saXN0LXVsPC90aXRsZT48cGF0aCBkPVxcXCJNMzg0IDE0MDhxMCA4MC01NiAxMzZ0LTEzNiA1Ni0xMzYtNTYtNTYtMTM2IDU2LTEzNiAxMzYtNTYgMTM2IDU2IDU2IDEzNnptMC01MTJxMCA4MC01NiAxMzZ0LTEzNiA1Ni0xMzYtNTYtNTYtMTM2IDU2LTEzNiAxMzYtNTYgMTM2IDU2IDU2IDEzNnptMTQwOCA0MTZ2MTkycTAgMTMtOS41IDIyLjV0LTIyLjUgOS41aC0xMjE2cS0xMyAwLTIyLjUtOS41dC05LjUtMjIuNXYtMTkycTAtMTMgOS41LTIyLjV0MjIuNS05LjVoMTIxNnExMyAwIDIyLjUgOS41dDkuNSAyMi41em0tMTQwOC05MjhxMCA4MC01NiAxMzZ0LTEzNiA1Ni0xMzYtNTYtNTYtMTM2IDU2LTEzNiAxMzYtNTYgMTM2IDU2IDU2IDEzNnptMTQwOCA0MTZ2MTkycTAgMTMtOS41IDIyLjV0LTIyLjUgOS41aC0xMjE2cS0xMyAwLTIyLjUtOS41dC05LjUtMjIuNXYtMTkycTAtMTMgOS41LTIyLjV0MjIuNS05LjVoMTIxNnExMyAwIDIyLjUgOS41dDkuNSAyMi41em0wLTUxMnYxOTJxMCAxMy05LjUgMjIuNXQtMjIuNSA5LjVoLTEyMTZxLTEzIDAtMjIuNS05LjV0LTkuNS0yMi41di0xOTJxMC0xMyA5LjUtMjIuNXQyMi41LTkuNWgxMjE2cTEzIDAgMjIuNSA5LjV0OS41IDIyLjV6XFxcIi8+PC9zeW1ib2w+PHN5bWJvbCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNzkyIDE3OTJcXFwiIGlkPVxcXCJsZXBsYXllci1pY29uLW1hZ2ljXFxcIj48dGl0bGU+bWFnaWM8L3RpdGxlPjxwYXRoIGQ9XFxcIk0xMjU0IDU4MWwyOTMtMjkzLTEwNy0xMDctMjkzIDI5M3ptNDQ3LTI5M3EwIDI3LTE4IDQ1bC0xMjg2IDEyODZxLTE4IDE4LTQ1IDE4dC00NS0xOGwtMTk4LTE5OHEtMTgtMTgtMTgtNDV0MTgtNDVsMTI4Ni0xMjg2cTE4LTE4IDQ1LTE4dDQ1IDE4bDE5OCAxOThxMTggMTggMTggNDV6bS0xMzUxLTE5MGw5OCAzMC05OCAzMC0zMCA5OC0zMC05OC05OC0zMCA5OC0zMCAzMC05OHptMzUwIDE2MmwxOTYgNjAtMTk2IDYwLTYwIDE5Ni02MC0xOTYtMTk2LTYwIDE5Ni02MCA2MC0xOTZ6bTkzMCA0NzhsOTggMzAtOTggMzAtMzAgOTgtMzAtOTgtOTgtMzAgOTgtMzAgMzAtOTh6bS02NDAtNjQwbDk4IDMwLTk4IDMwLTMwIDk4LTMwLTk4LTk4LTMwIDk4LTMwIDMwLTk4elxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi1wYXVzZVxcXCI+PHRpdGxlPnBhdXNlPC90aXRsZT48cGF0aCBkPVxcXCJNMTY2NCAxOTJ2MTQwOHEwIDI2LTE5IDQ1dC00NSAxOWgtNTEycS0yNiAwLTQ1LTE5dC0xOS00NXYtMTQwOHEwLTI2IDE5LTQ1dDQ1LTE5aDUxMnEyNiAwIDQ1IDE5dDE5IDQ1em0tODk2IDB2MTQwOHEwIDI2LTE5IDQ1dC00NSAxOWgtNTEycS0yNiAwLTQ1LTE5dC0xOS00NXYtMTQwOHEwLTI2IDE5LTQ1dDQ1LTE5aDUxMnEyNiAwIDQ1IDE5dDE5IDQ1elxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi1wbGFuZVxcXCI+PHRpdGxlPnBsYW5lPC90aXRsZT48cGF0aCBkPVxcXCJNMTU2OCAxNjBxNDQgNTIgMTIgMTQ4dC0xMDggMTcybC0xNjEgMTYxIDE2MCA2OTZxNSAxOS0xMiAzM2wtMTI4IDk2cS03IDYtMTkgNi00IDAtNy0xLTE1LTMtMjEtMTZsLTI3OS01MDgtMjU5IDI1OSA1MyAxOTRxNSAxNy04IDMxbC05NiA5NnEtOSA5LTIzIDloLTJxLTE1LTItMjQtMTNsLTE4OS0yNTItMjUyLTE4OXEtMTEtNy0xMy0yMy0xLTEzIDktMjVsOTYtOTdxOS05IDIzLTkgNiAwIDggMWwxOTQgNTMgMjU5LTI1OS01MDgtMjc5cS0xNC04LTE3LTI0LTItMTYgOS0yN2wxMjgtMTI4cTE0LTEzIDMwLThsNjY1IDE1OSAxNjAtMTYwcTc2LTc2IDE3Mi0xMDh0MTQ4IDEyelxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi1wbGF5XFxcIj48dGl0bGU+cGxheTwvdGl0bGU+PHBhdGggZD1cXFwiTTE1NzYgOTI3bC0xMzI4IDczOHEtMjMgMTMtMzkuNSAzdC0xNi41LTM2di0xNDcycTAtMjYgMTYuNS0zNnQzOS41IDNsMTMyOCA3MzhxMjMgMTMgMjMgMzF0LTIzIDMxelxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi1wbHVzXFxcIj48dGl0bGU+cGx1czwvdGl0bGU+PHBhdGggZD1cXFwiTTE2MDAgNzM2djE5MnEwIDQwLTI4IDY4dC02OCAyOGgtNDE2djQxNnEwIDQwLTI4IDY4dC02OCAyOGgtMTkycS00MCAwLTY4LTI4dC0yOC02OHYtNDE2aC00MTZxLTQwIDAtNjgtMjh0LTI4LTY4di0xOTJxMC00MCAyOC02OHQ2OC0yOGg0MTZ2LTQxNnEwLTQwIDI4LTY4dDY4LTI4aDE5MnE0MCAwIDY4IDI4dDI4IDY4djQxNmg0MTZxNDAgMCA2OCAyOHQyOCA2OHpcXFwiLz48L3N5bWJvbD48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDE3OTIgMTc5MlxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tcmVkb1xcXCI+PHRpdGxlPnJlZG88L3RpdGxlPjxwYXRoIGQ9XFxcIk0xNjY0IDI1NnY0NDhxMCAyNi0xOSA0NXQtNDUgMTloLTQ0OHEtNDIgMC01OS00MC0xNy0zOSAxNC02OWwxMzgtMTM4cS0xNDgtMTM3LTM0OS0xMzctMTA0IDAtMTk4LjUgNDAuNXQtMTYzLjUgMTA5LjUtMTA5LjUgMTYzLjUtNDAuNSAxOTguNSA0MC41IDE5OC41IDEwOS41IDE2My41IDE2My41IDEwOS41IDE5OC41IDQwLjVxMTE5IDAgMjI1LTUydDE3OS0xNDdxNy0xMCAyMy0xMiAxNCAwIDI1IDlsMTM3IDEzOHE5IDggOS41IDIwLjV0LTcuNSAyMi41cS0xMDkgMTMyLTI2NCAyMDQuNXQtMzI3IDcyLjVxLTE1NiAwLTI5OC02MXQtMjQ1LTE2NC0xNjQtMjQ1LTYxLTI5OCA2MS0yOTggMTY0LTI0NSAyNDUtMTY0IDI5OC02MXExNDcgMCAyODQuNSA1NS41dDI0NC41IDE1Ni41bDEzMC0xMjlxMjktMzEgNzAtMTQgMzkgMTcgMzkgNTl6XFxcIi8+PC9zeW1ib2w+PHN5bWJvbCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNzkyIDE3OTJcXFwiIGlkPVxcXCJsZXBsYXllci1pY29uLXJlZnJlc2hcXFwiPjx0aXRsZT5yZWZyZXNoPC90aXRsZT48cGF0aCBkPVxcXCJNMTYzOSAxMDU2cTAgNS0xIDctNjQgMjY4LTI2OCA0MzQuNXQtNDc4IDE2Ni41cS0xNDYgMC0yODIuNS01NXQtMjQzLjUtMTU3bC0xMjkgMTI5cS0xOSAxOS00NSAxOXQtNDUtMTktMTktNDV2LTQ0OHEwLTI2IDE5LTQ1dDQ1LTE5aDQ0OHEyNiAwIDQ1IDE5dDE5IDQ1LTE5IDQ1bC0xMzcgMTM3cTcxIDY2IDE2MSAxMDJ0MTg3IDM2cTEzNCAwIDI1MC02NXQxODYtMTc5cTExLTE3IDUzLTExNyA4LTIzIDMwLTIzaDE5MnExMyAwIDIyLjUgOS41dDkuNSAyMi41em0yNS04MDB2NDQ4cTAgMjYtMTkgNDV0LTQ1IDE5aC00NDhxLTI2IDAtNDUtMTl0LTE5LTQ1IDE5LTQ1bDEzOC0xMzhxLTE0OC0xMzctMzQ5LTEzNy0xMzQgMC0yNTAgNjV0LTE4NiAxNzlxLTExIDE3LTUzIDExNy04IDIzLTMwIDIzaC0xOTlxLTEzIDAtMjIuNS05LjV0LTkuNS0yMi41di03cTY1LTI2OCAyNzAtNDM0LjV0NDgwLTE2Ni41cTE0NiAwIDI4NCA1NS41dDI0NSAxNTYuNWwxMzAtMTI5cTE5LTE5IDQ1LTE5dDQ1IDE5IDE5IDQ1elxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi10cmFzaFxcXCI+PHRpdGxlPnRyYXNoPC90aXRsZT48cGF0aCBkPVxcXCJNNzA0IDEzNzZ2LTcwNHEwLTE0LTktMjN0LTIzLTloLTY0cS0xNCAwLTIzIDl0LTkgMjN2NzA0cTAgMTQgOSAyM3QyMyA5aDY0cTE0IDAgMjMtOXQ5LTIzem0yNTYgMHYtNzA0cTAtMTQtOS0yM3QtMjMtOWgtNjRxLTE0IDAtMjMgOXQtOSAyM3Y3MDRxMCAxNCA5IDIzdDIzIDloNjRxMTQgMCAyMy05dDktMjN6bTI1NiAwdi03MDRxMC0xNC05LTIzdC0yMy05aC02NHEtMTQgMC0yMyA5dC05IDIzdjcwNHEwIDE0IDkgMjN0MjMgOWg2NHExNCAwIDIzLTl0OS0yM3ptLTU0NC05OTJoNDQ4bC00OC0xMTdxLTctOS0xNy0xMWgtMzE3cS0xMCAyLTE3IDExem05MjggMzJ2NjRxMCAxNC05IDIzdC0yMyA5aC05NnY5NDhxMCA4My00NyAxNDMuNXQtMTEzIDYwLjVoLTgzMnEtNjYgMC0xMTMtNTguNXQtNDctMTQxLjV2LTk1MmgtOTZxLTE0IDAtMjMtOXQtOS0yM3YtNjRxMC0xNCA5LTIzdDIzLTloMzA5bDcwLTE2N3ExNS0zNyA1NC02M3Q3OS0yNmgzMjBxNDAgMCA3OSAyNnQ1NCA2M2w3MCAxNjdoMzA5cTE0IDAgMjMgOXQ5IDIzelxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi11bmRvXFxcIj48dGl0bGU+dW5kbzwvdGl0bGU+PHBhdGggZD1cXFwiTTE2NjQgODk2cTAgMTU2LTYxIDI5OHQtMTY0IDI0NS0yNDUgMTY0LTI5OCA2MXEtMTcyIDAtMzI3LTcyLjV0LTI2NC0yMDQuNXEtNy0xMC02LjUtMjIuNXQ4LjUtMjAuNWwxMzctMTM4cTEwLTkgMjUtOSAxNiAyIDIzIDEyIDczIDk1IDE3OSAxNDd0MjI1IDUycTEwNCAwIDE5OC41LTQwLjV0MTYzLjUtMTA5LjUgMTA5LjUtMTYzLjUgNDAuNS0xOTguNS00MC41LTE5OC41LTEwOS41LTE2My41LTE2My41LTEwOS41LTE5OC41LTQwLjVxLTk4IDAtMTg4IDM1LjV0LTE2MCAxMDEuNWwxMzcgMTM4cTMxIDMwIDE0IDY5LTE3IDQwLTU5IDQwaC00NDhxLTI2IDAtNDUtMTl0LTE5LTQ1di00NDhxMC00MiA0MC01OSAzOS0xNyA2OSAxNGwxMzAgMTI5cTEwNy0xMDEgMjQ0LjUtMTU2LjV0Mjg0LjUtNTUuNXExNTYgMCAyOTggNjF0MjQ1IDE2NCAxNjQgMjQ1IDYxIDI5OHpcXFwiLz48L3N5bWJvbD48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDE3OTIgMTc5MlxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tdm9sdW1lLWRvd25cXFwiPjx0aXRsZT52b2x1bWUtZG93bjwvdGl0bGU+PHBhdGggZD1cXFwiTTEwODggMzUydjEwODhxMCAyNi0xOSA0NXQtNDUgMTktNDUtMTlsLTMzMy0zMzNoLTI2MnEtMjYgMC00NS0xOXQtMTktNDV2LTM4NHEwLTI2IDE5LTQ1dDQ1LTE5aDI2MmwzMzMtMzMzcTE5LTE5IDQ1LTE5dDQ1IDE5IDE5IDQ1em0zODQgNTQ0cTAgNzYtNDIuNSAxNDEuNXQtMTEyLjUgOTMuNXEtMTAgNS0yNSA1LTI2IDAtNDUtMTguNXQtMTktNDUuNXEwLTIxIDEyLTM1LjV0MjktMjUgMzQtMjMgMjktMzUuNSAxMi01Ny0xMi01Ny0yOS0zNS41LTM0LTIzLTI5LTI1LTEyLTM1LjVxMC0yNyAxOS00NS41dDQ1LTE4LjVxMTUgMCAyNSA1IDcwIDI3IDExMi41IDkzdDQyLjUgMTQyelxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi12b2x1bWUtb2ZmXFxcIj48dGl0bGU+dm9sdW1lLW9mZjwvdGl0bGU+PHBhdGggZD1cXFwiTTEyODAgMzUydjEwODhxMCAyNi0xOSA0NXQtNDUgMTktNDUtMTlsLTMzMy0zMzNoLTI2MnEtMjYgMC00NS0xOXQtMTktNDV2LTM4NHEwLTI2IDE5LTQ1dDQ1LTE5aDI2MmwzMzMtMzMzcTE5LTE5IDQ1LTE5dDQ1IDE5IDE5IDQ1elxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi12b2x1bWUtdXBcXFwiPjx0aXRsZT52b2x1bWUtdXA8L3RpdGxlPjxwYXRoIGQ9XFxcIk04MzIgMzUydjEwODhxMCAyNi0xOSA0NXQtNDUgMTktNDUtMTlsLTMzMy0zMzNoLTI2MnEtMjYgMC00NS0xOXQtMTktNDV2LTM4NHEwLTI2IDE5LTQ1dDQ1LTE5aDI2MmwzMzMtMzMzcTE5LTE5IDQ1LTE5dDQ1IDE5IDE5IDQ1em0zODQgNTQ0cTAgNzYtNDIuNSAxNDEuNXQtMTEyLjUgOTMuNXEtMTAgNS0yNSA1LTI2IDAtNDUtMTguNXQtMTktNDUuNXEwLTIxIDEyLTM1LjV0MjktMjUgMzQtMjMgMjktMzUuNSAxMi01Ny0xMi01Ny0yOS0zNS41LTM0LTIzLTI5LTI1LTEyLTM1LjVxMC0yNyAxOS00NS41dDQ1LTE4LjVxMTUgMCAyNSA1IDcwIDI3IDExMi41IDkzdDQyLjUgMTQyem0yNTYgMHEwIDE1My04NSAyODIuNXQtMjI1IDE4OC41cS0xMyA1LTI1IDUtMjcgMC00Ni0xOXQtMTktNDVxMC0zOSAzOS01OSA1Ni0yOSA3Ni00NCA3NC01NCAxMTUuNS0xMzUuNXQ0MS41LTE3My41LTQxLjUtMTczLjUtMTE1LjUtMTM1LjVxLTIwLTE1LTc2LTQ0LTM5LTIwLTM5LTU5IDAtMjYgMTktNDV0NDUtMTlxMTMgMCAyNiA1IDE0MCA1OSAyMjUgMTg4LjV0ODUgMjgyLjV6bTI1NiAwcTAgMjMwLTEyNyA0MjIuNXQtMzM4IDI4My41cS0xMyA1LTI2IDUtMjYgMC00NS0xOXQtMTktNDVxMC0zNiAzOS01OSA3LTQgMjIuNS0xMC41dDIyLjUtMTAuNXE0Ni0yNSA4Mi01MSAxMjMtOTEgMTkyLTIyN3Q2OS0yODktNjktMjg5LTE5Mi0yMjdxLTM2LTI2LTgyLTUxLTctNC0yMi41LTEwLjV0LTIyLjUtMTAuNXEtMzktMjMtMzktNTkgMC0yNiAxOS00NXQ0NS0xOXExMyAwIDI2IDUgMjExIDkxIDMzOCAyODMuNXQxMjcgNDIyLjV6XFxcIi8+PC9zeW1ib2w+PC9zdmc+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Rpc3Qvc3ZnL3N2Zy1kZWZzLnN2Z1xuLy8gbW9kdWxlIGlkID0gNzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJleHBvcnQgY29uc3QgcHJlc2V0ID0ge1xuXHRvcHRpb25zIDoge1xuXHRcdHdpZHRoIDogJzEwMCUnLFxuXHRcdGNvbnRyb2xzIDoge1xuXHRcdFx0Y29tbW9uIDogW1xuXHRcdFx0XHRbJ3BsYXknLCAndm9sdW1lJywgJ2RpdmlkZXInLCAndGltZWxpbmUnLCAnZGl2aWRlcicsICdmdWxsc2NyZWVuJ10sXG5cdFx0XHRcdFsncmF0ZScsICdkaXZpZGVyJywgJ2JhY2t3YXJkJywgJ2RpdmlkZXInLCAnc291cmNlJywgJ2RpdmlkZXInLCAnZG93bmxvYWQnXVxuXHRcdFx0XSxcblx0XHRcdGZ1bGxzY3JlZW4gOiBbXG5cdFx0XHRcdFsncGxheScsICd2b2x1bWUnLCAnZGl2aWRlcicsICd0aW1lbGluZScsICdkaXZpZGVyJywgJ3JhdGUnLCAnZGl2aWRlcicsICdiYWNrd2FyZCcsICdkaXZpZGVyJywgJ3NvdXJjZScsICdkaXZpZGVyJywgJ2Rvd25sb2FkJywgJ2RpdmlkZXInLCAnZnVsbHNjcmVlbiddXG5cdFx0XHRdXG5cdFx0fVxuXHR9LFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL3ByZXNldHMvdnBzLmpzIiwiY29uc3QgY29udHJvbHMgPSBbJ3BsYXknLCAndm9sdW1lJywgJ2RpdmlkZXInLCAndGltZWxpbmUnLCAnZGl2aWRlcicsICdyYXRlJywgJ2Rvd25sb2FkJywgJ2Z1bGxzY3JlZW4nXTtcblxuZXhwb3J0IGNvbnN0IHByZXNldCA9IHtcblx0b3B0aW9ucyA6IHtcblx0XHRjb250cm9scyA6IHtcblx0XHRcdGNvbW1vbiA6IFtcblx0XHRcdFx0Y29udHJvbHMsXG5cdFx0XHRcdFtdXG5cdFx0XHRdLFxuXHRcdFx0ZnVsbHNjcmVlbiA6IFtcblx0XHRcdFx0Y29udHJvbHNcblx0XHRcdF1cblx0XHR9XG5cdH0sXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvcHJlc2V0cy9zaW1wbGUuanMiLCJleHBvcnQgY29uc3QgcHJlc2V0ID0ge1xuXHRvcHRpb25zIDoge1xuXHRcdHdpZHRoIDogJzEwMCUnLFxuXHRcdGNvbnRyb2xzIDoge1xuXHRcdFx0Y29tbW9uIDogW1xuXHRcdFx0XHRbJ3BsYXknLCAndm9sdW1lJywgJ3RpbWVsaW5lJywgJ3JhdGUnLCAnc291cmNlJywgJ2RpdmlkZXInLCAnZG93bmxvYWQnLCAnZnVsbHNjcmVlbiddLFxuXHRcdFx0XHRbXVxuXHRcdFx0XSxcblx0XHRcdGZ1bGxzY3JlZW4gOiBbXG5cdFx0XHRcdFsncGxheScsICd2b2x1bWUnLCAndGltZWxpbmUnLCAncmF0ZScsICdzb3VyY2UnLCAnZGl2aWRlcicsICdkb3dubG9hZCcsICdmdWxsc2NyZWVuJ10sXG5cdFx0XHRdXG5cdFx0fVxuXHR9LFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL3ByZXNldHMvc21zLmpzIiwiZXhwb3J0IGNvbnN0IHByZXNldCA9IHtcblx0b3B0aW9ucyA6IHtcblx0XHR3aWR0aCA6ICcxMDAlJyxcblx0XHRjb250cm9scyA6IHtcblx0XHRcdGNvbW1vbiA6IFtcblx0XHRcdFx0WydwbGF5JywgJ3ZvbHVtZScsICd0aW1lbGluZScsICdyYXRlJywgJ3NvdXJjZScsICdkaXZpZGVyJywgJ2Z1bGxzY3JlZW4nXSxcblx0XHRcdFx0W11cblx0XHRcdF0sXG5cdFx0XHRmdWxsc2NyZWVuIDogW1xuXHRcdFx0XHRbJ3BsYXknLCAndm9sdW1lJywgJ3RpbWVsaW5lJywgJ3JhdGUnLCAnc291cmNlJywgJ2RpdmlkZXInLCAnZnVsbHNjcmVlbiddLFxuXHRcdFx0XVxuXHRcdH1cblx0fSxcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9wcmVzZXRzL2NvbXByZXNzZWQuanMiLCJleHBvcnQgY29uc3QgcHJlc2V0ID0ge1xuXHRvcHRpb25zIDoge1xuXHRcdHdpZHRoIDogJzEwMCUnLFxuXG5cdFx0Y29udHJvbHNPcHRpb25zIDoge1xuXHRcdFx0Y29tbW9uIDoge1xuXHRcdFx0XHRhbGlnbiA6IFsnanVzdGlmeSddXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRjb250cm9scyA6IHtcblx0XHRcdGNvbW1vbiA6IFtcblx0XHRcdFx0WydwbGF5JywgJ3RpbWVsaW5lJywgJ3JhdGUnLCAndm9sdW1lJywgJ3NvdXJjZScsICdmdWxsc2NyZWVuJ10sXG5cdFx0XHRdLFxuXHRcdFx0ZnVsbHNjcmVlbiA6IFtcblx0XHRcdFx0WydwbGF5JywgJ3RpbWVsaW5lJywgJ3JhdGUnLCAndm9sdW1lJywgJ3NvdXJjZScsICdmdWxsc2NyZWVuJ11cblx0XHRcdF0sXG5cdFx0XHRtaW5pIDogW1xuXHRcdFx0XHRbJ3BsYXknLCAndGltZWxpbmUnLCAndm9sdW1lJywgJ2Z1bGxzY3JlZW4nXVxuXHRcdFx0XSxcblx0XHR9XG5cdH0sXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvcHJlc2V0cy8yMDM1LmpzIiwiaW1wb3J0ICcuL2xlLXBsYXllcidcbmltcG9ydCAnLi9wbHVnaW5zL2xlLXBsYXllci1nYSdcbmltcG9ydCAnLi9wbHVnaW5zL2xlLXBsYXllci15b3V0dWJlJ1xuaW1wb3J0ICcuL3BsdWdpbnMvbGUtcGxheWVyLW5leHQnXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2xlLXBsYXllci1mdWxsLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5jb25zdCBQbGF5ZXIgPSB3aW5kb3cubGVQbGF5ZXIgfHwgd2luZG93LiQubGVQbGF5ZXI7XG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcblx0dmlkZW9QbGF5ZWQgOiBbMjUsIDUwLCAxMDBdLFxuXHR2aWRlb1BsYXllZERlbHRhIDogNSxcblx0dm9sdW1lQ2hhbmdlRGVsYXkgOiAxMDAwLFxuXHRyYXRlQ2hhbmdlRGVsYXkgOiAyMDAwXG59XG5cblBsYXllci5wbHVnaW4oJ2dhJywgZnVuY3Rpb24ocGx1Z2luT3B0aW9ucykge1xuXHRjb25zdCBvcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRPcHRpb25zLCBwbHVnaW5PcHRpb25zKTtcblx0Y29uc3QgcGxheWVyID0gdGhpcztcblxuXHRpZiAoIXdpbmRvdy5nYSkge1xuXHRcdGNvbnNvbGUuZXJyb3IoJ0dvb2dsZSBBbmFseXRpY3MgZG9lcyBub3QgZXhpc3QnKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRwbGF5ZXIub24oJ2ZpcnN0cGxheScsIChlKSA9PiB7XG5cdFx0d2luZG93LmdhKFxuXHRcdFx0J3NlbmQnLFxuXHRcdFx0J2V2ZW50Jyxcblx0XHRcdCdQbGF5ZXIgVmlkZW8gU3RhcnRlZCdcblx0XHQpXG5cdH0pO1xuXG5cdHBsYXllci5vbignY29udHJvbGNsaWNrJywgKGUsIGRhdGEpID0+IHtcblx0XHRjb25zdCBjb250cm9sID0gZGF0YS5jb250cm9sO1xuXHRcdGNvbnN0IHtuYW1lLCBjb2xsZWN0aW9ufSA9IGNvbnRyb2wub3B0aW9ucztcblx0XHRpZihuYW1lKSB7XG5cdFx0XHR3aW5kb3cuZ2EoXG5cdFx0XHRcdCdzZW5kJyxcblx0XHRcdFx0J2V2ZW50Jyxcblx0XHRcdFx0J1BsYXllciBDb250cm9sIENsaWNrJyxcblx0XHRcdFx0bmFtZSxcblx0XHRcdFx0Y29sbGVjdGlvblxuXHRcdFx0KVxuXHRcdH1cblx0fSk7XG5cblx0cGxheWVyLm9uKCdzZWN0aW9uc2NsaWNrJywgKGUsIGRhdGEpID0+IHtcblx0XHR3aW5kb3cuZ2EoXG5cdFx0XHQnc2VuZCcsXG5cdFx0XHQnZXZlbnQnLFxuXHRcdFx0J1BsYXllciBTZWN0aW9ucycsXG5cdFx0XHQnQ2xpY2snLFxuXHRcdFx0cGxheWVyLnZpZXdcblx0XHQpXG5cdH0pO1xuXG5cblx0bGV0IHZvbHVtZUNoYW5nZVRpbWVvdXQgPSBudWxsO1xuXG5cdHBsYXllci5vbigndm9sdW1lY2hhbmdlJywgKGUsIGRhdGEpID0+IHtcblx0XHRjbGVhclRpbWVvdXQodm9sdW1lQ2hhbmdlVGltZW91dCk7XG5cblx0XHR2b2x1bWVDaGFuZ2VUaW1lb3V0ID0gc2V0VGltZW91dChfID0+IHtcblx0XHRcdGNvbnN0IHZhbHVlID0gZGF0YS52b2x1bWU7XG5cdFx0XHR3aW5kb3cuZ2EoXG5cdFx0XHRcdCdzZW5kJyxcblx0XHRcdFx0J2V2ZW50Jyxcblx0XHRcdFx0J1BsYXllciBWb2x1bWUgQ2hhbmdlJyxcblx0XHRcdFx0TnVtYmVyKHZhbHVlKS50b0ZpeGVkKDEpXG5cdFx0XHQpXG5cblx0XHR9LCBvcHRpb25zLnZvbHVtZUNoYW5nZURlbGF5KTtcblx0fSk7XG5cblx0bGV0IHJhdGVDaGFuZ2VUaW1lb3V0ID0gbnVsbDtcblx0cGxheWVyLm9uKCdyYXRlY2hhbmdlJywgKGUsIGRhdGEpID0+IHtcblx0XHRjbGVhclRpbWVvdXQocmF0ZUNoYW5nZVRpbWVvdXQpO1xuXG5cdFx0cmF0ZUNoYW5nZVRpbWVvdXQgPSBzZXRUaW1lb3V0KF8gPT4ge1xuXHRcdFx0Y29uc3QgdmFsdWUgPSBkYXRhLnJhdGU7XG5cdFx0XHR3aW5kb3cuZ2EoXG5cdFx0XHRcdCdzZW5kJyxcblx0XHRcdFx0J2V2ZW50Jyxcblx0XHRcdFx0J1BsYXllciBSYXRlIENoYW5nZScsXG5cdFx0XHRcdHZhbHVlXG5cdFx0XHQpXG5cblx0XHR9LCBvcHRpb25zLnJhdGVDaGFuZ2VEZWxheSk7XG5cdH0pXG5cblxuXHRsZXQgcGxheWVkRXZlbnRzU2VudCA9IHt9O1xuXHRwbGF5ZXIub24oJ3RpbWV1cGRhdGUnLCAoKSA9PiB7XG5cdFx0Y29uc3QgcGVyY2VudCA9IHBsYXllci52aWRlby5wbGF5ZWRQZXJjZW50YWdlO1xuXHRcdGNvbnN0IGRlbHRhID0gb3B0aW9ucy52aWRlb1BsYXllZERlbHRhO1xuXHRcdG9wdGlvbnMudmlkZW9QbGF5ZWQuZm9yRWFjaChpdGVtID0+IHtcblx0XHRcdGlmIChcblx0XHRcdFx0IXBsYXllZEV2ZW50c1NlbnRbaXRlbV0gJiZcblx0XHRcdFx0TWF0aC5hYnMocGVyY2VudCAtIGl0ZW0pIDwgZGVsdGFcblx0XHRcdCkge1xuXHRcdFx0XHR3aW5kb3cuZ2EoXG5cdFx0XHRcdFx0J3NlbmQnLFxuXHRcdFx0XHRcdCdldmVudCcsXG5cdFx0XHRcdFx0J1BsYXllciBWaWRlbyBQbGF5ZWQnLFxuXHRcdFx0XHRcdGAke2l0ZW0gLSBkZWx0YX0tJHtpdGVtfSVgXG5cdFx0XHRcdCk7XG5cdFx0XHRcdHBsYXllZEV2ZW50c1NlbnRbaXRlbV0gPSB0cnVlO1xuXG5cdFx0XHR9XG5cdFx0fSlcblx0fSk7XG5cblxuXHQvLyBGaXJzdCBxdWFsaXR5Y2hhbmdlIGZpcmVkIG9uIHBsYXllciBpbml0LCBhbmQgd2UgZG9uJ3QgbmVlZCB0cmFjayB0aGlzIHRvIEdBXG5cdGxldCBsb2FkUXVhbGl0eSA9IGZhbHNlO1xuXHRwbGF5ZXIub24oJ3F1YWxpdHljaGFuZ2UnLCBmdW5jdGlvbihlKSB7XG5cdFx0aWYoIWxvYWRRdWFsaXR5KSB7XG5cdFx0XHRsb2FkUXVhbGl0eSA9IHRydWU7XG5cdFx0XHRyZXR1cm5cblx0XHR9XG5cblx0XHRpZihwbGF5ZXIudmlkZW8ucGxheWJhY2tRdWFsaXR5ICE9IG51bGwpIHtcblx0XHRcdHdpbmRvdy5nYShcblx0XHRcdFx0J3NlbmQnLFxuXHRcdFx0XHQnZXZlbnQnLFxuXHRcdFx0XHQnUGxheWVyIENoYW5nZSBRdWFsaXR5Jyxcblx0XHRcdFx0cGxheWVyLnZpZGVvLnBsYXliYWNrUXVhbGl0eS50aXRsZVxuXHRcdFx0KVxuXHRcdH1cblx0fSlcblxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9wbHVnaW5zL2xlLXBsYXllci1nYS5qcyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuY29uc3QgUGxheWVyID0gd2luZG93LmxlUGxheWVyIHx8IHdpbmRvdy4kLmxlUGxheWVyO1xuY29uc3QgRW50aXR5ID0gUGxheWVyLmdldENvbXBvbmVudCgnRW50aXR5Jyk7XG5cbmNvbnN0IHRyYWNrUHJvdmlkZSA9IHRyYWNrID0+IHtcblx0aWYodHJhY2sgPT0gbnVsbCB8fCB0cmFjay5sYW5ndWFnZUNvZGUgPT0gbnVsbCkge1xuXHRcdHJldHVybiB0cmFja1xuXHR9XG5cdHJldHVybiB7XG5cdFx0bGFuZ3VhZ2UgOiB0cmFjay5sYW5ndWFnZUNvZGUsXG5cdFx0dGl0bGUgOiB0cmFjay5sYW5ndWFnZUNvZGUsXG5cdFx0dG9vbHRpcCA6IHRyYWNrLmxhbmd1YWdlTmFtZSxcblx0XHRuYW1lIDogdHJhY2subGFuZ3VhZ2VDb2RlLFxuXHR9XG59XG5cblxuY2xhc3MgWW91dHViZSBleHRlbmRzIEVudGl0eSB7XG5cdGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucykge1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cdFx0dGhpcy5fcGF1c2VkID0gdHJ1ZTtcblxuXHRcdHRoaXMuc3JjID0gdGhpcy5wbGF5ZXIub3B0aW9ucy5zcmM7XG5cblx0XHR0aGlzLnBsYXllci5hZGRDbGFzcygnbGVwbGF5ZXItLXlvdXR1YmUnKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ2NsaWNrJywgdGhpcy5vbkNsaWNrLmJpbmQodGhpcykpO1xuXHRcdHRoaXMuZWxlbWVudC5vbignZGJsY2xpY2snLCB0aGlzLm9uRGJsY2xpY2suYmluZCh0aGlzKSk7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRzZXQgc3JjKHNyYykge1xuXHRcdGlmKHNyYyA9PSBudWxsKSByZXR1cm47XG5cdFx0aWYodGhpcy5zcmMgJiYgdGhpcy5zcmMudXJsID09PSBzcmMudXJsKSByZXR1cm47XG5cblx0XHRjb25zdCB1cmwgPSBzcmMudXJsIHx8IHNyYy5pZDtcblxuXHRcdHRoaXMudmlkZW9JZCA9IFlvdXR1YmUucGFyc2VVcmwodXJsKTtcblxuXHRcdGlmKHRoaXMucGxheWVyLm9wdGlvbnMucG9zdGVyKSB7XG5cdFx0XHR0aGlzLnBvc3RlciA9IHRoaXMucGxheWVyLm9wdGlvbnMucG9zdGVyXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucG9zdGVyID0gJ2h0dHBzOi8vaW1nLnlvdXR1YmUuY29tL3ZpLycgKyB0aGlzLnZpZGVvSWQgKyAnLzAuanBnJztcblx0XHR9XG5cdH1cblxuXHRvbkNsaWNrKGV2ZW50KSB7XG5cdFx0dGhpcy50cmlnZ2VyKCdjbGljaycpO1xuXHR9XG5cblx0b25EYmxjbGljaygpIHtcblx0XHR0aGlzLnRyaWdnZXIoJ2RibGNsaWNrJyk7XG5cdH1cblxuXHRnZXQgY3VycmVudFRpbWUoKSB7XG5cdFx0cmV0dXJuIHRoaXMueXRQbGF5ZXI/IHRoaXMueXRQbGF5ZXIuZ2V0Q3VycmVudFRpbWUoKSA6IDA7XG5cdH1cblxuXHRzZXQgY3VycmVudFRpbWUodmFsdWUpIHtcblx0XHRpZih0aGlzLmxhc3RTdGF0ZSA9PT0gWVQuUGxheWVyU3RhdGUuUEFVU0VEKSB7XG5cdFx0XHR0aGlzLnRpbWVCZWZvcmVTZWVrID0gdGhpcy5jdXJyZW50VGltZTtcblx0XHR9XG5cblx0XHRpZiAoIXRoaXMuaXNTZWVraW5nKSB7XG5cdFx0XHR0aGlzLndhc1BhdXNlZEJlZm9yZVNlZWsgPSB0aGlzLnBhdXNlZDtcblx0XHR9XG5cblx0XHRsZXQgdGltZTtcblx0XHRpZiAodmFsdWUgPj0gdGhpcy5kdXJhdGlvbikge1xuXHRcdFx0dGltZSA9IHRoaXMuZHVyYXRpb25cblx0XHR9IGVsc2UgaWYgKHZhbHVlIDwgMCkge1xuXHRcdFx0dGltZSA9IDBcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGltZSA9IHZhbHVlO1xuXHRcdH1cblxuXHRcdHRoaXMuaXNTZWVraW5nID0gdHJ1ZTtcblx0XHR0aGlzLnl0UGxheWVyLnNlZWtUbyh0aW1lLCB0cnVlKTtcblx0XHR0aGlzLnBsYXllci50cmlnZ2VyKCd0aW1ldXBkYXRlbG9hZCcsIHsgY3VycmVudFRpbWUgOiB0aW1lIH0pO1xuXG5cdFx0dGhpcy50cmlnZ2VyKCdzZWVraW5nJyk7XG5cblx0XHR0aGlzLmVtaXRUaW1ldXBkYXRlKCk7XG5cdH1cblxuXHRnZXQgZHVyYXRpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMueXRQbGF5ZXIgJiYgdGhpcy55dFBsYXllci5nZXREdXJhdGlvbiA/IHRoaXMueXRQbGF5ZXIuZ2V0RHVyYXRpb24oKSA6IE5hTjtcblx0fVxuXG5cdGdldCBwYXVzZWQoKSB7XG5cdFx0cmV0dXJuICh0aGlzLnl0UGxheWVyKSA/XG5cdFx0XHQodGhpcy5sYXN0U3RhdGUgIT09IFlULlBsYXllclN0YXRlLlBMQVlJTkcgJiYgdGhpcy5sYXN0U3RhdGUgIT09IFlULlBsYXllclN0YXRlLkJVRkZFUklORylcblx0XHRcdDogdHJ1ZTtcblxuXHR9XG5cblxuXHRnZXQgcmF0ZSgpIHtcblx0XHRyZXR1cm4gdGhpcy55dFBsYXllci5nZXRQbGF5YmFja1JhdGUoKTtcblx0fVxuXG5cdHNldCByYXRlKHZhbHVlKSB7XG5cdFx0c3VwZXIucmF0ZSA9IHZhbHVlO1xuXHRcdHRoaXMueXRQbGF5ZXIuc2V0UGxheWJhY2tSYXRlKHZhbHVlKTtcblx0XHR0aGlzLnRyaWdnZXIoJ3JhdGVjaGFuZ2UnKTtcblx0fVxuXG5cdHNldCBtdXRlZCh2YWx1ZSkge1xuXHRcdGlmKHZhbHVlKSB7XG5cdFx0XHR0aGlzLnl0UGxheWVyLm11dGUoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy55dFBsYXllci51bk11dGUoKTtcblx0XHR9XG5cblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdHRoaXMudHJpZ2dlcigndm9sdW1lY2hhbmdlJyk7XG5cdFx0fSwgNTApO1xuXHR9XG5cblx0Z2V0IG11dGVkKCkge1xuXHRcdHJldHVybiB0aGlzLnl0UGxheWVyLmlzTXV0ZWQoKTtcblx0fVxuXG5cdGdldCBzdWJ0aXRsZXMoKSB7XG5cdFx0cmV0dXJuIHRoaXMuY2hlY2tDYXB0aW9uc0V4aXN0KClcblx0XHRcdD8gKHRoaXMueXRQbGF5ZXIuZ2V0T3B0aW9uKCdjYXB0aW9ucycsICd0cmFja2xpc3QnKSB8fCBbXSkubWFwKHRyYWNrUHJvdmlkZSlcblx0XHRcdDogW11cblx0fVxuXG5cdGdldCB0cmFjaygpIHtcblx0XHRpZih0aGlzLl90cmFjayA9PT0gdW5kZWZpbmVkICYmIHRoaXMuY2hlY2tDYXB0aW9uc0V4aXN0KCkpIHtcblx0XHRcdHJldHVybiB0cmFja1Byb3ZpZGUodGhpcy55dFBsYXllci5nZXRPcHRpb24oJ2NhcHRpb25zJywgJ3RyYWNrJykpXG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLl90cmFjaztcblx0XHR9XG5cdH1cblxuXHRzZXQgdHJhY2sodmFsdWUpIHtcblx0XHR0aGlzLl90cmFjayA9IHZhbHVlO1xuXHRcdGlmKHZhbHVlID09PSBudWxsKSB7XG5cdFx0XHR0aGlzLl90cmFja3NEaXNhYmxlID0gdHJ1ZTtcblx0XHRcdC8qIERpc2FibGUgY2FwdGlvbnMgKi9cblx0XHRcdHRoaXMueXRQbGF5ZXIudW5sb2FkTW9kdWxlKCdjYXB0aW9ucycpO1xuXG5cdFx0XHR0aGlzLnRyaWdnZXIoJ3RyYWNrc2NoYW5nZScpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0aGlzLnl0UGxheWVyXG5cdFx0XHQuc2V0T3B0aW9uKCdjYXB0aW9ucycsICd0cmFjaycsIHsgbGFuZ3VhZ2VDb2RlIDogdmFsdWUubmFtZSB9KVxuXHRcdFx0LnNldE9wdGlvbignY2FwdGlvbnMnLCAncmVsb2FkJywgdHJ1ZSk7XG5cblx0XHRpZih0aGlzLl90cmFja3NEaXNhYmxlKSB7XG5cdFx0XHQvKiBFbmFibGUgY2FwdGlvbnMgKi9cblx0XHRcdHRoaXMueXRQbGF5ZXIubG9hZE1vZHVsZSgnY2FwdGlvbnMnKTtcblx0XHR9XG5cdFx0dGhpcy50cmlnZ2VyKCd0cmFja3NjaGFuZ2UnKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGluY3JlYXNlUmF0ZSgpIHtcblx0XHRjb25zdCBpbmRleCA9IHRoaXMuYXZhaWxhYmxlUmF0ZXMuaW5kZXhPZih0aGlzLnJhdGUpO1xuXHRcdGlmKGluZGV4ICsgMSA+PSB0aGlzLmF2YWlsYWJsZVJhdGVzLmxlbmd0aCkgcmV0dXJuO1xuXHRcdHJldHVybiB0aGlzLnJhdGUgPSB0aGlzLmF2YWlsYWJsZVJhdGVzW2luZGV4ICsgMV07XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRkZWNyZWFzZVJhdGUoKSB7XG5cdFx0Y29uc3QgaW5kZXggPSB0aGlzLmF2YWlsYWJsZVJhdGVzLmluZGV4T2YodGhpcy5yYXRlKTtcblx0XHRpZihpbmRleCAtIDEgPCAwKSByZXR1cm47XG5cdFx0cmV0dXJuIHRoaXMucmF0ZSA9IHRoaXMuYXZhaWxhYmxlUmF0ZXNbaW5kZXggLSAxXTtcblx0fVxuXG5cdGdldEF2YWlsYWJsZVF1YWxpdHlMZXZlbHMoKSB7XG5cdFx0Y29uc3QgYXJyID0gdGhpcy55dFBsYXllci5nZXRBdmFpbGFibGVRdWFsaXR5TGV2ZWxzKCk7XG5cdFx0Y29uc3QgaW5kZXggPSBhcnIuaW5kZXhPZignYXV0bycpO1xuXG5cdFx0aWYoaW5kZXggPiAtMSkge1xuXHRcdFx0YXJyLnNwbGljZShpbmRleCwgMSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGFyci5tYXAoaXRlbSA9PiAoe1xuXHRcdFx0dGl0bGUgOiBZb3V0dWJlLlFVQUxJVFlfTkFNRVNbaXRlbV0gfHwgaXRlbSxcblx0XHRcdG5hbWUgOiBpdGVtXG5cdFx0fSkpO1xuXHR9XG5cblxuXHRzZXQgcGxheWJhY2tRdWFsaXR5KG5hbWUpIHtcblx0XHRzdXBlci5wbGF5YmFja1F1YWxpdHkgPSBuYW1lO1xuXHRcdGNvbnN0IHRpbWUgPSB0aGlzLmN1cnJlbnRUaW1lO1xuXHRcdGNvbnN0IHN0YXR1cyA9IHRoaXMueXRQbGF5ZXIuZ2V0UGxheWVyU3RhdGUoKTtcblxuXHRcdGlmKHN0YXR1cyAhPT0gWVQuUGxheWVyU3RhdGUuVU5TVEFSVEVEICYmIHN0YXR1cyAhPT0gWVQuUGxheWVyU3RhdGUuQ1VFRCkge1xuXHRcdFx0dGhpcy55dFBsYXllci5wYXVzZVZpZGVvKCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5fbmV4dFBsYXliYWNrUXVhbGl0eSA9IG5hbWU7XG5cdFx0dGhpcy55dFBsYXllci5zZXRQbGF5YmFja1F1YWxpdHkobmFtZSk7XG5cdFx0dGhpcy55dFBsYXllci5zZWVrVG8odGltZSk7XG5cblx0XHRpZihzdGF0dXMgIT09IFlULlBsYXllclN0YXRlLlBBVVNFRCkge1xuXHRcdFx0dGhpcy55dFBsYXllci5wbGF5VmlkZW8oKTtcblx0XHR9XG5cblx0fVxuXG5cdGdldCBwbGF5YmFja1F1YWxpdHkoKSB7XG5cdFx0aWYgKHRoaXMuX3BsYXliYWNrUXVhbGl0eSA9PSBudWxsKSB7XG5cdFx0XHR0aGlzLl9wbGF5YmFja1F1YWxpdHkgPSB0aGlzLmdldEF2YWlsYWJsZVF1YWxpdHlMZXZlbHMoKVxuXHRcdFx0XHQuZmluZChpdGVtID0+IGl0ZW0ubmFtZSA9PT0gdGhpcy55dFBsYXllci5nZXRQbGF5YmFja1F1YWxpdHkoKSlcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuX3BsYXliYWNrUXVhbGl0eTtcblx0fVxuXG5cdGdldCB2b2x1bWUoKSB7XG5cdFx0cmV0dXJuIHRoaXMueXRQbGF5ZXIgPyB0aGlzLnl0UGxheWVyLmdldFZvbHVtZSgpIC8gMTAwLjAgOiAxO1xuXHR9XG5cblx0c2V0IHZvbHVtZSh2YWx1ZSkge1xuXHRcdHN1cGVyLnZvbHVtZSA9IHZhbHVlO1xuXHRcdHRoaXMueXRQbGF5ZXIuc2V0Vm9sdW1lKHZhbHVlICogMTAwKTtcblxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0dGhpcy50cmlnZ2VyKCd2b2x1bWVjaGFuZ2UnKTtcblx0XHR9LCA1MClcblxuXHR9XG5cblx0c3VwcG9ydHNGdWxsU2NyZWVuKCkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0cGxheSgpIHtcblx0XHR0aGlzLnl0UGxheWVyLnBsYXlWaWRlbygpO1xuXHRcdHRoaXMudHJpZ2dlcigncGxheScpO1xuXHR9XG5cblx0cGF1c2UoKSB7XG5cdFx0dGhpcy55dFBsYXllci5wYXVzZVZpZGVvKCk7XG5cdFx0dGhpcy50cmlnZ2VyKCdwYXVzZScpO1xuXHR9XG5cblxuXHRpbml0KCkge1xuXHRcdHN1cGVyLmluaXQoKTtcblx0XHRyZXR1cm4gWW91dHViZS5hcGlMb2FkZWQoKVxuXHRcdFx0LnRoZW4oKCkgPT4gdGhpcy5pbml0WVRQbGF5ZXIoKSlcblx0fVxuXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0dGhpcy5lbGVtZW50ID0gJCgnPGRpdiAvPicpXG5cdFx0XHQuYWRkQ2xhc3MoJ2xlcGxheWVyX195b3V0dWJlLXdyYXBwZXInKVxuXHRcdFx0LmF0dHIoJ3RhYmluZGV4JywgJzAnKTtcblx0XHR0aGlzLnlvdXR1YmVFbGVtZW50ID0gJCgnPGRpdiAvPicpXG5cdFx0XHQuYWRkQ2xhc3MoJ2xlcGxheWVyX195b3V0dWJlJyk7XG5cdFx0dGhpcy5ibG9ja2VyID0gJCgnPGRpdiAvPicpXG5cdFx0XHQuYWRkQ2xhc3MoJ2xlcGxheWVyX195b3V0dWJlLWJsb2NrZXInKTtcblxuXG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudFxuXHRcdFx0LmFwcGVuZCh0aGlzLmJsb2NrZXIpXG5cdFx0XHQuYXBwZW5kKHRoaXMueW91dHViZUVsZW1lbnQpO1xuXHR9XG5cblx0aW5pdFlUUGxheWVyKCkge1xuXHRcdHRoaXMuX2luaXRQcm9taXNlID0gJC5EZWZlcnJlZCgpO1xuXHRcdGNvbnN0IGdsb2JhbE9wdGlvbnMgPSB0aGlzLnBsYXllci5vcHRpb25zO1xuXHRcdGxldCB5dE9wdGlvbnMgPSB7XG5cdFx0XHRhdXRvcGxheSA6IGdsb2JhbE9wdGlvbnMuYXV0b3BsYXkgPyAxIDogMCxcblx0XHRcdGxvb3AgOiBnbG9iYWxPcHRpb25zLmxvb3AgPyAxIDogMCxcblx0XHRcdGl2X2xvYWRfcG9saWN5IDogMyxcblx0XHRcdGNvbnRyb2xzIDogMCxcblx0XHRcdG1vZGVzdGJyYW5kaW5nIDogMSxcblx0XHRcdHJlbCA6IDAsXG5cdFx0XHRzaG93aW5mbyA6IDAsXG5cdFx0XHRjY19sb2FkX3BvbGljeSA6IDAsXG5cdFx0XHRkaXNhYmxla2IgOiAwLFxuXHRcdFx0ZnMgOiAwLFxuXHRcdFx0c3RhcnQgOiBnbG9iYWxPcHRpb25zLnRpbWVcblx0XHR9O1xuXG5cdFx0WVQucmVhZHkoKCkgPT4ge1xuXHRcdFx0dGhpcy5vcHRpb25zLmN0eC5yZXBsYWNlV2l0aCh0aGlzLmVsZW1lbnQpO1xuXG5cdFx0XHR0aGlzLnl0UGxheWVyID0gbmV3IFlULlBsYXllcih0aGlzLnlvdXR1YmVFbGVtZW50WzBdLCB7XG5cdFx0XHRcdHZpZGVvSWQgOiB0aGlzLnZpZGVvSWQsXG5cdFx0XHRcdHdpZHRoIDogZ2xvYmFsT3B0aW9ucy53aWR0aCB8fCAnMTAwJScsXG5cdFx0XHRcdHBsYXllclZhcnMgOiB5dE9wdGlvbnMsXG5cdFx0XHRcdGV2ZW50cyA6IHtcblx0XHRcdFx0XHRvblJlYWR5IDogdGhpcy5vbllUUFJlYWR5LmJpbmQodGhpcyksXG5cdFx0XHRcdFx0b25TdGF0ZUNoYW5nZSA6IHRoaXMub25ZVFBTdGF0ZUNoYW5nZS5iaW5kKHRoaXMpLFxuXHRcdFx0XHRcdG9uUGxheWJhY2tSYXRlQ2hhbmdlIDogdGhpcy5vbllUUFJhdGVDaGFuZ2UuYmluZCh0aGlzKSxcblx0XHRcdFx0XHRvblBsYXliYWNrUXVhbGl0eUNoYW5nZSA6IHRoaXMub25ZVFBQbGF5YmFja1F1YWxpdHlDaGFuZ2UuYmluZCh0aGlzKVxuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXG5cdFx0fSlcblx0XHRyZXR1cm4gdGhpcy5faW5pdFByb21pc2UucHJvbWlzZSgpO1xuXHR9XG5cblxuXHRzZXRBdmFpbGFibGVQbGF5YmFja1JhdGVzKCkge1xuXHRcdHRoaXMuYXZhaWxhYmxlUmF0ZXMgPSB0aGlzLnl0UGxheWVyLmdldEF2YWlsYWJsZVBsYXliYWNrUmF0ZXMoKTtcblx0XHR0aGlzLnJhdGVNaW4gPSB0aGlzLmF2YWlsYWJsZVJhdGVzWzBdO1xuXHRcdHRoaXMucmF0ZU1heCA9IHRoaXMuYXZhaWxhYmxlUmF0ZXNbdGhpcy5hdmFpbGFibGVSYXRlcy5sZW5ndGggLSAxXTtcblx0fVxuXG5cdG9uWVRQUmVhZHkoZSkge1xuXHRcdHRoaXMuX2luaXRQcm9taXNlLnJlc29sdmUoKTtcblx0XHR0aGlzLl9pbml0UmF0ZSgpO1xuXHRcdHRoaXMuX2luaXRWb2x1bWUoKTtcblx0XHR0aGlzLnNldEF2YWlsYWJsZVBsYXliYWNrUmF0ZXMoKTtcblx0fVxuXG5cdG9uWVRQUmF0ZUNoYW5nZShlKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCdyYXRlY2hhbmdlJyk7XG5cdH1cblxuXHRvbllUUFBsYXliYWNrUXVhbGl0eUNoYW5nZShlKSB7XG5cdFx0Y29uc3QgZGF0YSA9IGUuZGF0YTtcblx0XHR0aGlzLl9wbGF5YmFja1F1YWxpdHkgPSB0aGlzLmdldEF2YWlsYWJsZVF1YWxpdHlMZXZlbHMoKS5maW5kKGl0ZW0gPT4gaXRlbS5uYW1lID09PSBkYXRhKTtcblx0XHR0aGlzLnRyaWdnZXIoJ3F1YWxpdHljaGFuZ2UnLCB0aGlzLl9wbGF5YmFja1F1YWxpdHkpO1xuXHR9XG5cblx0b25ZVFBTdGF0ZUNoYW5nZShlKSB7XG5cdFx0Y29uc3Qgc3RhdGUgPSBlLmRhdGE7XG5cdFx0aWYoc3RhdGUgPT09IHRoaXMubGFzdFN0YXRlKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5sYXN0U3RhdGUgPSBzdGF0ZTtcblx0XHRzd2l0Y2goc3RhdGUpIHtcblx0XHRjYXNlIFlULlBsYXllclN0YXRlLlVOU1RBUlRFRDpcblx0XHRcdHRoaXMudHJpZ2dlcignbG9hZHN0YXJ0Jyk7XG5cdFx0XHR0aGlzLnRyaWdnZXIoJ2xvYWRlZG1ldGFkYXRhJyk7XG5cdFx0XHR0aGlzLnRyaWdnZXIoJ2R1cmF0aW9uY2hhbmdlJyk7XG5cdFx0XHR0aGlzLnRyaWdnZXIoJ3JhdGVjaGFuZ2UnKTtcblx0XHRcdHRoaXMudHJpZ2dlcigndm9sdW1lY2hhbmdlJyk7XG5cdFx0XHR0aGlzLnRyaWdnZXIoJ3RyYWNrc2NoYW5nZScpO1xuXHRcdFx0aWYodGhpcy5wbGF5ZXIub3B0aW9ucy5hdXRvcGxheSkge1xuXHRcdFx0XHR0aGlzLnRyaWdnZXIoJ3BsYXknKTtcblx0XHRcdH1cblx0XHRcdGJyZWFrO1xuXG5cdFx0Y2FzZSBZVC5QbGF5ZXJTdGF0ZS5FTkRFRDpcblx0XHRcdHRoaXMudHJpZ2dlcigncGF1c2UnKTtcblx0XHRcdHRoaXMudHJpZ2dlcignZW5kZWQnKTtcblx0XHRcdGJyZWFrO1xuXG5cdFx0Y2FzZSBZVC5QbGF5ZXJTdGF0ZS5QTEFZSU5HOlxuXHRcdFx0dGhpcy50cmlnZ2VyKCd0aW1ldXBkYXRlJyk7XG5cdFx0XHR0aGlzLnRyaWdnZXIoJ2R1cmF0aW9uY2hhbmdlJyk7XG5cdFx0XHR0aGlzLnRyaWdnZXIoJ3BsYXlpbmcnKTtcblxuXHRcdFx0dGhpcy55dFBsYXllci5zZXRQbGF5YmFja1F1YWxpdHkodGhpcy5fbmV4dFBsYXliYWNrUXVhbGl0eSk7XG5cblx0XHRcdGlmKHRoaXMuaXNTZWVraW5nKSB7XG5cdFx0XHRcdHRoaXMub25TZWVrZWQoKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5sb2FkQ2FwdGlvbnMoKVxuXHRcdFx0dGhpcy5lbWl0VGltZXVwZGF0ZSgpO1xuXHRcdFx0YnJlYWs7XG5cblx0XHRjYXNlIFlULlBsYXllclN0YXRlLlBBVVNFRDpcblx0XHRcdHRoaXMudHJpZ2dlcignY2FucGxheScpO1xuXG5cdFx0XHRpZih0aGlzLmlzU2Vla2luZykge1xuXHRcdFx0XHR0aGlzLm9uU2Vla2VkKCk7XG5cdFx0XHR9XG5cdFx0XHRicmVhaztcblxuXHRcdGNhc2UgWVQuUGxheWVyU3RhdGUuQlVGRkVSSU5HOlxuXHRcdFx0dGhpcy5wbGF5ZXIudHJpZ2dlcigndGltZXVwZGF0ZScpO1xuXHRcdFx0dGhpcy5wbGF5ZXIudHJpZ2dlcignd2FpdGluZycpO1xuXG5cdFx0XHR0aGlzLnl0UGxheWVyLnNldFBsYXliYWNrUXVhbGl0eSh0aGlzLl9uZXh0UGxheWJhY2tRdWFsaXR5KTtcblxuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXG5cdH1cblxuXHRvblNlZWtlZCgpIHtcblx0XHRjbGVhckludGVydmFsKHRoaXMuc2Vla2luZ0ludGVydmFsKTtcblx0XHR0aGlzLmlzU2Vla2luZyA9IGZhbHNlO1xuXG5cdFx0aWYgKHRoaXMud2FzUGF1c2VkQmVmb3JlU2Vlaykge1xuXHRcdFx0dGhpcy5wYXVzZSgpO1xuXHRcdH1cblxuXHRcdHRoaXMudHJpZ2dlcignc2Vla2VkJyk7XG5cdH1cblxuXHRlbWl0VGltZXVwZGF0ZSgpIHtcblx0XHRjbGVhckludGVydmFsKHRoaXMuc2Vla2luZ0ludGVydmFsKTtcblxuXHRcdHRoaXMuc2Vla2luZ0ludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuXHRcdFx0aWYodGhpcy5sYXN0U3RhdGUgPT09IFlULlBsYXllclN0YXRlLlBBVVNFRCkge1xuXHRcdFx0XHRjbGVhckludGVydmFsKHRoaXMuc2Vla2luZ0ludGVydmFsKTtcblx0XHRcdH0gZWxzZSBpZih0aGlzLmN1cnJlbnRUaW1lICE9PSB0aGlzLnRpbWVCZWZvcmVTZWVrKSB7XG5cdFx0XHRcdHRoaXMudHJpZ2dlcigndGltZXVwZGF0ZScpO1xuXHRcdFx0fVxuXHRcdH0sIDI1MClcblx0fVxuXG5cdGxvYWRDYXB0aW9ucygpIHtcblx0XHRjb25zdCBlbXB0eVRyYWNrbGlzdCA9ICgpID0+ICh0aGlzLnN1YnRpdGxlcyA9PSBudWxsIHx8IHRoaXMuc3VidGl0bGVzLmxlbmd0aCA9PT0gMCk7XG5cblx0XHRjbGVhckludGVydmFsKHRoaXMuX2xvYWRDYXB0aW9uc1dhdGNoZXIpO1xuXHRcdGlmKFxuXHRcdFx0IXRoaXMuX3RyYWNrc0Rpc2FibGUgJiZcblx0XHRcdHRoaXMuY2hlY2tDYXB0aW9uc0V4aXN0KCkgJiZcblx0XHRcdGVtcHR5VHJhY2tsaXN0KClcblx0XHQpIHtcblx0XHRcdHRoaXMueXRQbGF5ZXIubG9hZE1vZHVsZSgnY2FwdGlvbnMnKTtcblxuXHRcdFx0dGhpcy5fbG9hZENhcHRpb25zV2F0Y2hlciA9IHNldEludGVydmFsKCgpID0+IHtcblx0XHRcdFx0aWYoIWVtcHR5VHJhY2tsaXN0KCkgJiYgdGhpcy5jaGVja0NhcHRpb25zRXhpc3QoKSkge1xuXHRcdFx0XHRcdHRoaXMudHJpZ2dlcigndHJhY2tzY2hhbmdlJyk7XG5cdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLl9sb2FkQ2FwdGlvbnNXYXRjaGVyKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgMjUwKVxuXHRcdH1cblx0fVxuXG5cdGNoZWNrQ2FwdGlvbnNFeGlzdCgpIHtcblx0XHR0cnkge1xuXHRcdFx0cmV0dXJuIHRoaXMueXRQbGF5ZXIuZ2V0T3B0aW9ucygnY2FwdGlvbnMnKSAhPSBudWxsO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblx0c3RhdGljIHBhcnNlVXJsKHVybCkge1xuXHRcdGxldCByZXN1bHQgPSBudWxsO1xuXHRcdGNvbnN0IHJlZ2V4ID0gWW91dHViZS5VUkxfUkVHRVg7XG5cdFx0Y29uc3QgbWF0Y2ggPSB1cmwubWF0Y2gocmVnZXgpO1xuXHRcdGlmKHVybC5sZW5ndGggPT09IDExKSB7XG5cdFx0XHRyZXN1bHQgPSB1cmw7XG5cdFx0fSBlbHNlIGlmKG1hdGNoICYmIG1hdGNoWzJdLmxlbmd0aCA9PT0gMTEpIHtcblx0XHRcdHJlc3VsdCA9IG1hdGNoWzJdO1xuXHRcdH1cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG59XG5cbllvdXR1YmUuVEVTVF9WSURFTyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJyk7XG4vKipcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKiAgICAgICAgIC0gVHJ1ZSBpZiB2b2x1bWUgY2FuIGJlIGNvbnRyb2xsZWRcbiAqICAgICAgICAgLSBGYWxzZSBvdGhlcndpc2VcbiAqL1xuWW91dHViZS5jYW5Db250cm9sVm9sdW1lID0gZnVuY3Rpb24oKSB7XG5cdC8vIElFIHdpbGwgZXJyb3IgaWYgV2luZG93cyBNZWRpYSBQbGF5ZXIgbm90IGluc3RhbGxlZCAjMzMxNVxuXHR0cnkge1xuXHRcdGNvbnN0IHZvbHVtZSA9IFlvdXR1YmUuVEVTVF9WSURFTy52b2x1bWU7XG5cblx0XHRZb3V0dWJlLlRFU1RfVklERU8udm9sdW1lID0gKHZvbHVtZSAvIDIpICsgMC4xO1xuXHRcdHJldHVybiB2b2x1bWUgIT09IFlvdXR1YmUuVEVTVF9WSURFTy52b2x1bWU7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn07XG5cbllvdXR1YmUucHJvdG90eXBlLmZlYXR1cmVDb250cm9sVm9sdW1lID0gWW91dHViZS5jYW5Db250cm9sVm9sdW1lKCk7XG5cbllvdXR1YmUuVVJMX1JFR0VYID0gL14uKih5b3V0dS5iZVxcL3x2XFwvfHVcXC9cXHdcXC98ZW1iZWRcXC98d2F0Y2hcXD92PXxcXCZ2PSkoW14jXFwmXFw/XSopLiovO1xuXG5Zb3V0dWJlLlFVQUxJVFlfTkFNRVMgPSB7XG5cdHRpbnkgOiAnMTQwcCcsXG5cdHNtYWxsIDogJzI0MHAnLFxuXHRtZWRpdW0gOiAnMzYwcCcsXG5cdGxhcmdlIDogJzQ4MHAnLFxuXHRoZDcyMCA6ICc3MjBwJyxcblx0aGQxMDgwIDogJzEwODBwJyxcblx0aGlnaHJlcyA6ICdIRCcsXG5cdGF1dG8gOiAn0JDQstGC0L4nXG59XG5cbllvdXR1YmUuYXBpTG9hZGVkID0gZnVuY3Rpb24oKSB7XG5cdGlmKHRoaXMuX2xvYWRlZCkgcmV0dXJuICQuRGVmZXJyZWQoKS5yZXNvbHZlKCk7XG5cblx0cmV0dXJuICQuZ2V0U2NyaXB0KCdodHRwczovL3d3dy55b3V0dWJlLmNvbS9pZnJhbWVfYXBpJylcblx0XHQudGhlbigoKSA9PiB0aGlzLl9sb2FkZWQgPSB0cnVlKVxufVxuXG5QbGF5ZXIucmVnaXN0ZXJDb21wb25lbnQoJ1lvdXR1YmUnLCBZb3V0dWJlKTtcblxuUGxheWVyLnByZXNldCgneW91dHViZScsIHtcblx0b3B0aW9ucyA6IHtcblx0XHRlbnRpdHkgOiAnWW91dHViZScsXG5cdFx0Y29udHJvbHMgOiB7XG5cdFx0XHRjb21tb24gOiBbXG5cdFx0XHRcdFsncGxheScsICd2b2x1bWUnLCAndGltZWxpbmUnLCAncmF0ZScsICdiYWNrd2FyZCcsICdzb3VyY2UnLCAnc3VidGl0bGUnLCAnZGl2aWRlcicsICdzZWN0aW9uJywgJ2Z1bGxzY3JlZW4nXSxcblx0XHRcdFx0W11cblx0XHRcdF0sXG5cdFx0XHRmdWxsc2NyZWVuIDogW1xuXHRcdFx0XHRbJ3BsYXknLCAndm9sdW1lJywgJ3RpbWVsaW5lJywgJ3JhdGUnLCAnYmFja3dhcmQnLCAnc291cmNlJywgJ3N1YnRpdGxlJywgJ2RpdmlkZXInLCAnc2VjdGlvbicsICdmdWxsc2NyZWVuJ10sXG5cdFx0XHRdXG5cdFx0fVxuXHR9LFxufSk7XG4vLyBQbGF5ZXIucHJlc2V0KCcyMDM1Jywge1xuLy8gXHRvcHRpb25zIDoge1xuLy8gXHRcdGVudGl0eSA6ICdZb3V0dWJlJyxcbi8vIFx0XHRjb250cm9scyA6IHtcbi8vIFx0XHRcdGNvbW1vbiA6IFtcbi8vIFx0XHRcdFx0WydwbGF5JywgJ3ZvbHVtZScsICd0aW1lbGluZScsICdyYXRlJywgJ2JhY2t3YXJkJywgJ3NlY3Rpb24nLCAnZnVsbHNjcmVlbiddLFxuLy8gXHRcdFx0XSxcbi8vIFx0XHRcdGZ1bGxzY3JlZW4gOiBbXG4vLyBcdFx0XHRcdFsncGxheScsICd2b2x1bWUnLCAndGltZWxpbmUnLCAncmF0ZScsICdiYWNrd2FyZCcsICAnc2VjdGlvbicsICdmdWxsc2NyZWVuJ10sXG4vLyBcdFx0XHRdLFxuLy8gXHRcdFx0bWluaSA6IFtcbi8vIFx0XHRcdFx0WydwbGF5JywgJ3RpbWVsaW5lJywgJ3ZvbHVtZScsICdmdWxsc2NyZWVuJ11cbi8vIFx0XHRcdF0sXG4vLyBcdFx0fVxuLy8gXHR9LFxuLy8gfSk7XG5cblBsYXllci5wbHVnaW4oJ3lvdXR1YmUnLCBmdW5jdGlvbihwbHVnaW5PcHRpb25zKSB7XG5cblx0LyogZ2xvYmFsIFlUICovXG5cdFlvdXR1YmUuYXBpTG9hZGVkKClcbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvcGx1Z2lucy9sZS1wbGF5ZXIteW91dHViZS5qcyIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbmNvbnN0IFBsYXllciA9IHdpbmRvdy5sZVBsYXllcjtcbmNvbnN0IENvbXBvbmVudCA9IFBsYXllci5nZXRDb21wb25lbnQoJ0NvbXBvbmVudCcpO1xuY29uc3QgSWNvbiA9IFBsYXllci5nZXRDb21wb25lbnQoJ0ljb24nKTtcbmNvbnN0IHNlY29uZHNUb1RpbWUgPSBQbGF5ZXIuc2Vjb25kc1RvVGltZTtcblxuY2xhc3MgUmFkaWFsQmFyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcblx0XHRvcHRpb25zID0gJC5leHRlbmQoe30sIHtcblx0XHRcdHN0cm9rZURhc2hhcnJheSA6IDI5Myxcblx0XHRcdHNpemUgOiA5OFxuXHRcdH0sIG9wdGlvbnMpO1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cdFx0dGhpcy5fY2lyY2xlRWxlbWVudCA9IHRoaXMuZWxlbWVudC5maW5kKCdzdmcgY2lyY2xlJyk7XG5cdH1cblxuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdGNvbnN0IHsgc3Ryb2tlRGFzaGFycmF5LCBzaXplIH0gPSB0aGlzLm9wdGlvbnM7XG5cdFx0Y29uc3QgdGVtcGxhdGUgPSBgXG5cdFx0XHQ8ZGl2IGNsYXNzPVwibGVwbGF5ZXItbmV4dF9fcGxheSBsZXBsYXllci1wbGF5LWJ1dHRvblwiPlxuICAgICAgICAgICAgICAgIDxzdmcgaGVpZ2h0PVwiMTAwJVwiIHZlcnNpb249XCIxLjFcIiB2aWV3Qm94PVwiMCAwICR7c2l6ZX0gJHtzaXplfVwiIGNsYXNzPVwibGVwbGF5ZXItbmV4dF9fc3ZnLXNwaW5uZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBjeD1cIiR7LXNpemUgLyAyfVwiIGN5PVwiJHtzaXplIC8gMn1cIiBmaWxsLW9wYWNpdHk9XCIwXCIgcj1cIjQ2LjVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2UtZGFzaGFycmF5PVwiJHtzdHJva2VEYXNoYXJyYXl9XCIgc3Ryb2tlLWRhc2hvZmZzZXQ9XCIkey0xICogc3Ryb2tlRGFzaGFycmF5fVwiIHN0cm9rZS13aWR0aD1cIjZcIiB0cmFuc2Zvcm09XCJyb3RhdGUoLTkwKVwiPlxuICAgICAgICAgICAgICAgICAgICA8L2NpcmNsZT5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImxlcGxheWVyLW5leHRfX2J1dHRvbiBsZXBsYXllci1wbGF5LWJ1dHRvbl9fYnV0dG9uXCI+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0YC50cmltKClcblx0XHR0aGlzLmVsZW1lbnQgPSAkKCc8ZGl2IC8+JykuaHRtbCh0ZW1wbGF0ZSkuY29udGVudHMoKTtcblxuXHRcdHRoaXMuZWxlbWVudFxuXHRcdFx0LmZpbmQoJy5sZXBsYXllci1uZXh0X19idXR0b24nKVxuXHRcdFx0LmFwcGVuZChuZXcgSWNvbih0aGlzLnBsYXllciwgeyBpY29uTmFtZSA6ICdwbGF5JyB9KS5lbGVtZW50KTtcblxuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQ7XG5cblx0fVxuXG5cdHN0YXJ0QW5pbWF0aW9uKGNiKSB7XG5cdFx0dGhpcy5fY2lyY2xlRWxlbWVudFxuXHRcdFx0LnN0b3AoKVxuXHRcdFx0LmFuaW1hdGUoe1xuXHRcdFx0XHQnc3Ryb2tlLWRhc2hvZmZzZXQnIDogLTIgKiB0aGlzLm9wdGlvbnMuc3Ryb2tlRGFzaGFycmF5XG5cdFx0XHR9LCB0aGlzLm9wdGlvbnMudGltZW91dCwgY2IpO1xuXHR9XG5cblx0c3RvcEFuaW1hdGlvbigpIHtcblx0XHR0aGlzLl9jaXJjbGVFbGVtZW50LnN0b3AoKTtcblx0fVxuXG5cdHNldCByYWRpYWwodmFsdWUpIHtcblx0XHR0aGlzLl9yYWRpYWwgPSB2YWx1ZTtcblx0XHR0aGlzLl9jaXJjbGVFbGVtZW50LmNzcygnc3Ryb2tlLWRhc2hvZmZzZXQnLCAtKHZhbHVlICsgMSkgKiB0aGlzLm9wdGlvbnMuc3Ryb2tlRGFzaGFycmF5KTtcblx0fVxuXG5cdGdldCByYWRpYWwoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3JhZGlhbDtcblx0fVxufVxuXG5cblxuY2xhc3MgTmV4dENvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHR0aXRsZSA6ICcnLFxuXHRcdFx0ZGVzY3JpcHRpb24gOiAnJyxcblx0XHRcdHRpbWVvdXQgOiAxMDAwMCxcblx0XHRcdGF1dG8gOiBmYWxzZSxcblx0XHRcdGZuIDogKCkgPT4ge30sXG5cdFx0fSwgb3B0aW9ucyk7XG5cblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXG5cdFx0dGhpcy5jYW5jZWxCdXR0b24gPSB0aGlzLmVsZW1lbnQuZmluZCgnLmxlcGxheWVyLW5leHRfX2NhbmNlbCcpO1xuXHRcdHRoaXMucGxheWVyLm9uKCdwbGF5JywgKCkgPT4gdGhpcy5oaWRlKCkpO1xuXHRcdHRoaXMucGxheWVyLm9uKCdsb2Fkc3RhcnQnLCAoKSA9PiB0aGlzLmhpZGUoKSk7XG5cdFx0dGhpcy5wbGF5ZXIub24oJ2VuZGVkJywgKCkgPT4gdGhpcy5zaG93KCkpO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ3RpbWV1cGRhdGUnLCAoKSA9PiB7XG5cdFx0XHRpZighdGhpcy5wbGF5ZXIuZW5kZWQpIHtcblx0XHRcdFx0dGhpcy5oaWRlKClcblx0XHRcdH1cblx0XHR9KVxuXG5cdFx0dGhpcy5wcm9ncmVzc0J1dHRvbi5lbGVtZW50Lm9uKCdjbGljaycsIHRoaXMubmV4dC5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLmNhbmNlbEJ1dHRvbi5vbignY2xpY2snLCB0aGlzLmNhbmNlbC5iaW5kKHRoaXMpKTtcblxuXHR9XG5cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHRjb25zdCB7IHRpbWVvdXQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgcG9zdGVyLCBhdXRvLCB0aW1lIH0gPSB0aGlzLm9wdGlvbnM7XG5cdFx0Y29uc3QgdGVtcGxhdGUgPSBgXG5cdFx0XHQ8ZGl2IGNsYXNzPVwibGVwbGF5ZXItbmV4dFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZXBsYXllci1uZXh0X19oZWFkXCI+0KHQu9C10LTRg9GO0YnQtdC1INCy0LjQtNC10L48L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImxlcGxheWVyLW5leHRfX2JveFwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJsZXBsYXllci1uZXh0X19wb3N0ZXJcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJsZXBsYXllci1uZXh0X19taW5pLXRpdGxlXCI+JHt0aXRsZX08L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJsZXBsYXllci1uZXh0X19jYW5jZWxcIiByb2xlPVwiYnV0dG9uXCI+0J7RgtC80LXQvdCwPC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImxlcGxheWVyLW5leHRfX2NvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZXBsYXllci1uZXh0X190aXRsZVwiPiR7dGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGVwbGF5ZXItbmV4dF9fZGVzY3JpcHRpb25cIj4ke2Rlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgJHt0aW1lID8gYDxkaXYgY2xhc3M9XCJsZXBsYXllci1uZXh0X190aW1lXCI+JHtzZWNvbmRzVG9UaW1lKHRpbWUpfTwvZGl2PmAgOiAnJ31cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdGAudHJpbSgpO1xuXG5cdFx0dGhpcy5wcm9ncmVzc0J1dHRvbiA9IG5ldyBSYWRpYWxCYXIodGhpcy5wbGF5ZXIsIHsgdGltZW91dCB9KTtcblxuXHRcdHRoaXMuZWxlbWVudCA9ICQoJzxkaXYgLz4nKS5odG1sKHRlbXBsYXRlKS5jb250ZW50cygpO1xuXG5cdFx0dGhpcy5lbGVtZW50XG5cdFx0XHQuZmluZCgnLmxlcGxheWVyLW5leHRfX3Bvc3RlcicpXG5cdFx0XHQuYXBwZW5kKHRoaXMucHJvZ3Jlc3NCdXR0b24uZWxlbWVudCk7XG5cblx0XHRpZihwb3N0ZXIgIT0gbnVsbCkge1xuXHRcdFx0dGhpcy5lbGVtZW50XG5cdFx0XHRcdC5maW5kKCcubGVwbGF5ZXItbmV4dF9fcG9zdGVyJylcblx0XHRcdFx0LmNzcyh7XG5cdFx0XHRcdFx0J2JhY2tncm91bmQtaW1hZ2UnIDogYHVybCgke3Bvc3Rlcn0pYFxuXHRcdFx0XHR9KTtcblx0XHR9XG5cblx0XHRpZihhdXRvKSB7XG5cdFx0XHR0aGlzLmFkZENsYXNzKCdsZXBsYXllci1uZXh0LS1hdXRvJyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudDtcblx0fVxuXG5cdGNhbmNlbCgpIHtcblx0XHRjbGVhclRpbWVvdXQodGhpcy5fdGltZW91dCk7XG5cdFx0dGhpcy5yZW1vdmVDbGFzcygnbGVwbGF5ZXItbmV4dC0tYXV0bycpO1xuXHR9XG5cblx0bmV4dCgpIHtcblx0XHRpZih0aGlzLm9wdGlvbnMudXJsICE9IG51bGwpIHtcblx0XHRcdHdpbmRvdy5sb2NhdGlvbiA9IHRoaXMub3B0aW9ucy51cmw7XG5cdFx0fSBlbHNlIGlmICh0aGlzLm9wdGlvbnMuZm4gJiYgJC5pc0Z1bmN0aW9uKHRoaXMub3B0aW9ucy5mbikpIHtcblx0XHRcdHRoaXMub3B0aW9ucy5mbih0aGlzKVxuXHRcdH1cblx0fVxuXG5cdHNob3coKSB7XG5cdFx0aWYodGhpcy5jYW5jZWxsZWQpIHJldHVybjtcblxuXHRcdHRoaXMuZWxlbWVudC5zaG93KCk7XG5cblx0XHRpZih0aGlzLm9wdGlvbnMuYXV0bykge1xuXHRcdFx0dGhpcy5wcm9ncmVzc0J1dHRvbi5zdGFydEFuaW1hdGlvbigpO1xuXHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVvdXQpO1xuXHRcdFx0dGhpcy5fdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5uZXh0KCksIHRoaXMub3B0aW9ucy50aW1lb3V0KTtcblx0XHR9XG5cdH1cblxuXHRoaWRlKCkge1xuXHRcdHRoaXMuZWxlbWVudC5oaWRlKCk7XG5cblx0XHRpZih0aGlzLm9wdGlvbnMuYXV0bykge1xuXHRcdFx0dGhpcy5wcm9ncmVzc0J1dHRvbi5zdG9wQW5pbWF0aW9uKCk7XG5cdFx0XHR0aGlzLnByb2dyZXNzQnV0dG9uLnJhZGlhbCA9IDA7XG5cdFx0XHRjbGVhclRpbWVvdXQodGhpcy5fdGltZW91dCk7XG5cdFx0fVxuXHR9XG5cbn1cblxuXG5QbGF5ZXIucGx1Z2luKCduZXh0JywgZnVuY3Rpb24ocGx1Z2luT3B0aW9ucykge1xuXHR0aGlzLl9uZXh0Q29tcG9uZW50ID0gbmV3IE5leHRDb21wb25lbnQodGhpcywgcGx1Z2luT3B0aW9ucylcblxuXHR0aGlzLmlubmVyRWxlbWVudC5hcHBlbmQodGhpcy5fbmV4dENvbXBvbmVudC5lbGVtZW50KTtcblxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvcGx1Z2lucy9sZS1wbGF5ZXItbmV4dC5qcyJdLCJzb3VyY2VSb290IjoiIn0=