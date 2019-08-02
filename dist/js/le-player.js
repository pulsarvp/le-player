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

	module.exports = __webpack_require__(1);


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

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZmFmNTZiNDliZTE0NDQwNjExMDYiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2xlLXBsYXllci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCIkXCIiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvQ29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9Db21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvSWNvbi5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9QbGF5QnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy91dGlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvdXRpbHMvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9TcGxhc2hJY29uLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL1RpbWVsaW5lL1RpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvQ29udHJvbENvbGxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvU2VjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvRXJyb3JEaXNwbGF5LmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL1Bvc3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvRnVsbHNjcmVlbkFwaS5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvdXRpbHMvY29va2llLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9NZWRpYUVycm9yLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL1BsYXlDb250cm9sLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL1ZvbHVtZUNvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvQ29udHJvbERyb3Bkb3duLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL1RpbWVsaW5lL1RpbWVsaW5lQ29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9Db250cm9sVGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9UaW1lbGluZS9CdWZmZXJlZFJhbmdlcy5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9UaW1lbGluZS9NYXJrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvU2VjdGlvbkNvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvQ29udHJvbENoZWNrYm94LmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL0Z1bGxzY3JlZW5Db250cm9sLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL1JhdGVDb250cm9sLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL0JhY2t3YXJkQ29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9Tb3VyY2VDb250cm9sLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL0NvbnRyb2xDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvU3VidGl0bGVDb250cm9sLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL0Rvd25sb2FkQ29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9LZXliaW5kaW5nSW5mb0NvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvVGltZUluZm9Db250cm9sLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9lbnRpdHkvSHRtbDUuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2VudGl0eS9FbnRpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9hcnJheS5wcm90b3R5cGUuZmluZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2RlZmluZS1wcm9wZXJ0aWVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vb2JqZWN0LWtleXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9vYmplY3Qta2V5cy9pc0FyZ3VtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9+L29iamVjdC1rZXlzL2ltcGxlbWVudGF0aW9uLmpzIiwid2VicGFjazovLy8uL34vZXMtYWJzdHJhY3QvZXM2LmpzIiwid2VicGFjazovLy8uL34vZXMtYWJzdHJhY3QvZXMyMDE1LmpzIiwid2VicGFjazovLy8uL34vaGFzL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2Z1bmN0aW9uLWJpbmQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9mdW5jdGlvbi1iaW5kL2ltcGxlbWVudGF0aW9uLmpzIiwid2VicGFjazovLy8uL34vZXMtdG8tcHJpbWl0aXZlL2VzNi5qcyIsIndlYnBhY2s6Ly8vLi9+L2VzLXRvLXByaW1pdGl2ZS9lczIwMTUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9lcy10by1wcmltaXRpdmUvaGVscGVycy9pc1ByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2lzLWNhbGxhYmxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vaXMtZGF0ZS1vYmplY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9pcy1zeW1ib2wvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9oYXMtc3ltYm9scy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2hhcy1zeW1ib2xzL3NoYW1zLmpzIiwid2VicGFjazovLy8uL34vZXMtYWJzdHJhY3QvR2V0SW50cmluc2ljLmpzIiwid2VicGFjazovLy8uL34vZXMtYWJzdHJhY3QvaGVscGVycy9hc3NlcnRSZWNvcmQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9lcy1hYnN0cmFjdC9oZWxwZXJzL2lzTmFOLmpzIiwid2VicGFjazovLy8uL34vZXMtYWJzdHJhY3QvaGVscGVycy9pc0Zpbml0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2VzLWFic3RyYWN0L2hlbHBlcnMvYXNzaWduLmpzIiwid2VicGFjazovLy8uL34vZXMtYWJzdHJhY3QvaGVscGVycy9zaWduLmpzIiwid2VicGFjazovLy8uL34vZXMtYWJzdHJhY3QvaGVscGVycy9tb2QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9lcy1hYnN0cmFjdC9oZWxwZXJzL2lzUHJpbWl0aXZlLmpzIiwid2VicGFjazovLy8uL34vZXMtYWJzdHJhY3QvZXM1LmpzIiwid2VicGFjazovLy8uL34vZXMtdG8tcHJpbWl0aXZlL2VzNS5qcyIsIndlYnBhY2s6Ly8vLi9+L2lzLXJlZ2V4L2luZGV4LmpzIiwid2VicGFjazovLy8uL34vYXJyYXkucHJvdG90eXBlLmZpbmQvaW1wbGVtZW50YXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9hcnJheS5wcm90b3R5cGUuZmluZC9wb2x5ZmlsbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2FycmF5LnByb3RvdHlwZS5maW5kL3NoaW0uanMiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9zdmcvc3ZnLWRlZnMuc3ZnIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9wcmVzZXRzL3Zwcy5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvcHJlc2V0cy9zaW1wbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL3ByZXNldHMvc21zLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9wcmVzZXRzL2NvbXByZXNzZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL3ByZXNldHMvMjAzNS5qcyJdLCJuYW1lcyI6WyJyZWdpc3RlckNvbnRyb2wiLCJlbGVtZW50IiwiYWRkQ2xhc3MiLCJleGNsdWRlQXJyYXkiLCJzb3VyY2UiLCJkaXN0IiwicmVzdWx0IiwiY29uY2F0IiwiZm9yRWFjaCIsImluZGV4IiwiaW5kZXhPZiIsIml0ZW0iLCJzcGxpY2UiLCJkZWZhdWx0T3B0aW9ucyIsImVudGl0eSIsImF1dG9wbGF5IiwiaGVpZ2h0IiwibG9vcCIsIm11dGVkIiwicHJlbG9hZCIsInBvc3RlciIsInN2Z1BhdGgiLCJpbm5hY3Rpdml0eVRpbWVvdXQiLCJyYXRlIiwic3RlcCIsIm1pbiIsIm1heCIsImRlZmF1bHQiLCJwbGF5YmFjayIsInNob3J0IiwibWVkaXVtIiwibG9uZyIsImNvbnRyb2xzIiwiY29tbW9uIiwiZnVsbHNjcmVlbiIsIm1pbmkiLCJjb250cm9sc09wdGlvbnMiLCJhbGlnbiIsInZvbHVtZSIsIm11dGVsaW1pdCIsImtleUJpbmRpbmciLCJrZXkiLCJpbmZvIiwiZGVzY3JpcHRpb24iLCJmbiIsInBsYXllciIsInZpZGVvIiwidG9nZ2xlUGxheSIsImN1cnJlbnRUaW1lIiwib3B0aW9ucyIsInNwbGFzaEljb24iLCJzaG93Iiwic2hpZnRLZXkiLCJzZWN0aW9ucyIsInByZXYiLCJuZXh0IiwiY2FsY1ZvbHVtZUljb24iLCJ0b2dnbGVGdWxsc2NyZWVuIiwicGx1Z2lucyIsIm1pbmlwbGF5ZXIiLCJvblBsYXllckluaXRlZCIsIlBsYXllciIsImNyZWF0ZUVsZW1lbnQiLCJfZWxlbWVudCIsImlubmVyRWxlbWVudCIsIl91c2VyT3B0aW9ucyIsIl9pbml0T3B0aW9ucyIsIl9sb2FkU1ZHU3ByaXRlIiwiZGVmYXVsdFNwcml0ZSIsIl92aWV3IiwibG9hZEVudGl0eSIsImN0eCIsIl9pbml0Q29udHJvbHMiLCJfZGJsY2xpY2tUaW1lb3V0IiwiX2luaXRTZWN0aW9ucyIsInRoZW4iLCJkYXRhIiwidHJpZ2dlciIsIl9pbml0UGx1Z2lucyIsIl9saXN0ZW5Ib3RLZXlzIiwiX3VzZXJBY3Rpdml0eSIsIl9saXN0ZW5Vc2VyQWN0aXZpdHkiLCJfd2FpdGluZ1RpbWVvdXRzIiwib24iLCJldmVudE5hbWUiLCJvbmUiLCJyZW1vdmVDbGFzcyIsInRpbWUiLCJkdXJhdGlvbiIsImVycm9yIiwiX3N0YXJ0V2FpdGluZyIsIl9zdG9wV2F5dGluZyIsImUiLCJ1cmwiLCJwbGF5IiwicGF1c2VkIiwicGF1c2UiLCJjb2RlIiwiaW5pdCIsInNyYyIsIl9vbkZ1bGxzY3JlZW5DaGFuZ2UiLCJiaW5kIiwiX29uQ2xpY2siLCJfb25EYmNsaWNrIiwiX29uSW5pdGVkIiwiX29uUGxheSIsIl9vblBhdXNlIiwiZG9jdW1lbnQiLCJmdWxsc2NyZWVuY2hhbmdlIiwiX29uRW50aXR5RnVsbHNjcmVuQ2hhbmdlIiwibmFtZSIsIkVudGl0eSIsImdldENvbXBvbmVudCIsIl9lbnRpdHkiLCJsb2FkIiwidmlldyIsImFyZ3MiLCJxdWFsaXR5IiwiaXNQYXVzZWQiLCJwbGF5YmFja1JhdGUiLCJkZmQiLCJEZWZlcnJlZCIsIl9kYXRhIiwidW5kZWZpbmVkIiwicmVzb2x2ZSIsInByb21pc2UiLCJhamF4IiwibWV0aG9kIiwiZGF0YVR5cGUiLCJnZXREYXRhIiwiZnNBcGkiLCJyZXF1ZXN0RnVsbHNjcmVlbiIsInN1cHBvcnRzRnVsbFNjcmVlbiIsImVudGVyRnVsbHNjcmVlbiIsImV4aXRGdWxsc2NyZWVuIiwid2lkdGgiLCJsZW5ndGgiLCJuZXdTZWN0aW9ucyIsImkiLCJlbmRTZWN0aW9uIiwiYmVnaW4iLCJlbmQiLCJhdHRyIiwiY3NzIiwiZXJyb3JEaXNwbGF5IiwicGxheUJ1dHRvbiIsImxvYWRlciIsImFwcGVuZCIsImljb25OYW1lIiwiY2xhc3NOYW1lIiwidmlkZW9Db250YWluZXIiLCJsYXN0VGltZXIiLCJ2aWRlb0luZm8iLCJjb25zb2xlIiwid2FybiIsImluZm9FbGVtZW50IiwiaHRtbCIsInRpdGxlIiwic2VjdGlvbkNvbnRhaW5lciIsInNlY3Rpb25zQ29udGFpbmVyIiwiYmVmb3JlIiwiYXR0ck9wdGlvbnMiLCJyZWR1Y2UiLCJvYmoiLCJ2YWwiLCJzb3VyY2VzIiwiZmluZCIsImVhY2giLCJ2YWx1ZSIsImZsYWciLCJ2aXNpYmxlIiwib3V0c2lkZVNlY3Rpb25zIiwiX29wdGlvbnNGcm9tRWxlbWVudCIsInByZXNldE9wdGlvbnMiLCJwcmVzZXQiLCJnZXRQcmVzZXQiLCJleHRlbmQiLCJBcnJheSIsImlzQXJyYXkiLCJleGNsdWRlQ29udHJvbHMiLCJoYXNPd25Qcm9wZXJ0eSIsImNvbnRyb2xDb2xsZWN0aW9uIiwicm93IiwiaW5pdE9wdGlvbnMiLCJhY3RpdmUiLCJpc0tleUJpbmRpbmciLCJiaW5kaW5nIiwid2hpY2giLCJjdHJsS2V5IiwicHJldmVudERlZmF1bHQiLCJyZWplY3QiLCJnZXRTZWN0aW9uRGF0YSIsImRvbmUiLCJpc1NlY3Rpb25PdXRzaWRlIiwiX2NvbXBsZXRlU2VjdGlvbnMiLCJpdGVtcyIsImZ1bGxzY3JlZW5Pbmx5IiwiaGlkZVNjcm9sbCIsInBsdWdpbk9wdGlvbnMiLCJtb3VzZUluUHJvZ3Jlc3MiLCJsYXN0TW92ZVgiLCJsYXN0TW92ZVkiLCJvbk1vdXNlTW92ZSIsInNjcmVlblgiLCJzY3JlZW5ZIiwib25Nb3VzZURvd24iLCJjbGVhckludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJvbk1vdXNlVXAiLCJpbmFjdGl2aXR5VGltZW91dCIsImRlbGF5IiwidXNlckFjdGl2ZSIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJwdXNoIiwiY2FsbCIsImZvY3VzIiwiaXNGcyIsIl9sYXN0U2VjdGlvbnNWYWx1ZSIsImZ1bGxzY3JlZW5FbGVtZW50IiwiZW5kZWQiLCJfZXJyb3IiLCJoaWRlIiwiX3VzZXJBY3RpdmUiLCJnZXRVc2VyQWN0aXZlIiwidG9nZ2xlQ2xhc3MiLCJwbHVnaW4iLCJwcm90b3R5cGUiLCJyZWdpc3RlckNvbXBvbmVudCIsImdldENvbnRyb2wiLCJzZWNvbmRzVG9UaW1lIiwiX3ByZXNldHMiLCJDb29raWUiLCJzdmciLCJoaWRkZW5FbGVtZW50IiwicHJlcGVuZCIsInJlcXVpcmUiLCJ2ZXJzaW9uIiwid2luZG93IiwiJCIsImxlUGxheWVyIiwib2Zmc2V0U2hvdyIsIm9mZnNldCIsInRvcCIsIm91dGVySGVpZ2h0IiwiZ2V0Q29udHJvbHMiLCJjb250cm9sT3B0aW9ucyIsImNvbnRyb2wiLCJkaXNhYmxlIiwiaXNGdW5jdGlvbiIsImdldFdpZHRoIiwiX3VwZGF0ZU1pbmlQbGF5ZXIiLCJmb3JjZSIsInNjcm9sbFRvcCIsImhpZGVNaW5pUGxheWVyIiwic2hvd01pbmlQbGF5ZXIiLCJvblNldFZpZXciLCJvbkRlbFZpZXciLCJtb2R1bGUiLCJleHBvcnRzIiwiQ29udHJvbCIsImVtaXRUYXBFdmVudHMiLCJjbGljayIsIm9uQ2xpY2siLCJ0YXAiLCJpY29uIiwiYXR0cnMiLCJ0YWciLCJidWlsZENTU0NsYXNzIiwiaGFzQ2xhc3MiLCJhcmd1bWVudHMiLCJfZGlzYWJsZSIsIl9jb250cm9scyIsImNvbnRyb2xDbGFzcyIsInRvUGxheWVyRXZlbnQiLCJldmVudHMiLCJzcGxpdCIsImFjYyIsIkNvbXBvbmVudCIsIl9fbm9kZSIsImJsdXIiLCJldmVudCIsIkV2ZW50IiwidHJpZ2dlckhhbmRsZXIiLCJldmVudE5hbWVzIiwiU3RyaW5nIiwidG91Y2hTdGFydCIsImZpcnN0VG91Y2giLCJsYXN0TW92ZVRvdWNoIiwidGFwTW92ZW1lbnRUaHJlc2hvbGQiLCJ0b3VjaFRpbWVUaHJlc2hvbGQiLCJjb3VsZEJlVGFwIiwidG91Y2hlcyIsInBhZ2VYIiwicGFnZVkiLCJEYXRlIiwiZ2V0VGltZSIsInhkaWZmIiwieWRpZmYiLCJ0b3VjaERpc3RhbmNlIiwiTWF0aCIsInNxcnQiLCJub1RhcCIsInRvdWNoVGltZSIsInRhcEV2ZW50IiwiY29tcG9uZW50IiwiX2NvbXBvbmVudHMiLCJJY29uIiwiX3VzZVRhZyIsImNyZWF0ZUVsZW1lbnROUyIsIl9zdmdUYWciLCJfaWNvbk5hbWUiLCJhcHBlbmRDaGlsZCIsImF0dHJOUyIsInJlbW92ZUF0dHJpYnV0ZU5TIiwic2V0QXR0cmlidXRlTlMiLCJQbGF5QnV0dG9uIiwiaW5uZXIiLCJwZXJjZW50aWZ5IiwiY3JlYXRlRWwiLCIkaHRtbCIsIm5vb3AiLCJzZWNvbmRzIiwic2hvd0hvdXJzIiwiaCIsImZsb29yIiwibSIsInMiLCJvdXQiLCJwZXJjZW50IiwicHJvcHMiLCJnZXRTY3JvbGxCYXJXaWR0aCIsIm91dGVyIiwidmlzaWJpbGl0eSIsIm92ZXJmbG93IiwiYXBwZW5kVG8iLCJ3aWR0aFdpdGhTY3JvbGwiLCJvdXRlcldpZHRoIiwicmVtb3ZlIiwiVVNFUl9BR0VOVCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsIklTX01PQklMRSIsInRlc3QiLCJJU19DSFJPTUUiLCJJU19BTkRST0lEIiwiSVNfQU5EUk9JRF9QSE9ORSIsIklTX0lQQUQiLCJJU19JUEhPTkUiLCJJU19JUE9EIiwiSVNfSU9TIiwiSVNfU0FGQVJJIiwiSVNfVE9VQ0giLCJtYXhUb3VjaFBvaW50cyIsIlNwbGFzaEljb24iLCJUaW1lIiwidXBkYXRlVGV4dCIsInRleHQiLCJDb250cm9sQ29sbGVjdGlvbiIsImxvY2FsVWFPcHRpb25zIiwibG9jYWxOYW1lIiwiaW5kZXhSb3ciLCJjcmVhdGUiLCJjb2xsZWN0aW9uIiwiX3Jvd3MiLCJhZGRSb3ciLCJlbGVtUm93IiwiZmlyc3QiLCJzZWNvbmQiLCJnbG9iYWxBbGlnbiIsInJvd0FsaWduIiwiY29udHJvbE5hbWUiLCJhZGRDb250cm9sIiwiX2dldENvbnRyb2xPcHRpb25zIiwiU2VjdGlvbnMiLCJzY3JvbGxFbGVtZW50IiwiX2lubmVyRWxlbWVudCIsImFjdGl2ZVNlY3Rpb24iLCJnZXRTZWN0aW9uQnlJbmRleCIsInNldEFjdGl2ZUJ5SW5kZXgiLCJvblNlY3Rpb25DbGljayIsIm9uVGltZVVwZGF0ZSIsInVwZGF0ZVNlY3Rpb25EdXJhdGlvbiIsInNlY3Rpb25JbmRleCIsInBhcnNlSW50IiwibmV3SW5kZXgiLCJyaWdodCIsIl9jcmVhdGVTZWN0aW9ucyIsInNlY3Rpb24iLCJ0YXJnZXQiLCJjbG9zZXN0IiwidG9wUG9zaXRpb24iLCJwb3NpdGlvbiIsImFuaW1hdGUiLCJlbmRTZWN0aW9uVGltZSIsInRvU3RyaW5nIiwibmV4dEluZm8iLCJ0cmltIiwicmVwbGFjZVdpdGgiLCJjcmVhdGVTZWN0aW9uIiwiaXNWaXNpYmxlIiwiRXJyb3JEaXNwbGF5IiwibWVzc2FnZSIsIm9uUGxheWVyRXJyb3IiLCJQb3N0ZXIiLCJfdXJsIiwiRnVsbHNjcmVlbkFwaSIsImFwaU1hcCIsInNwZWNBcGkiLCJicm93c2VyQXBpIiwiZGZsdCIsImNvb2tpZXMiLCJjb29raWUiLCJkIiwic2V0RGF0ZSIsInllYXIiLCJNZWRpYUVycm9yIiwiZGVmYXVsdE1lc3NhZ2VzIiwiZXJyb3JUeXBlcyIsImVyck51bSIsIlBsYXlDb250cm9sIiwidXBkYXRlIiwic2hvd1JlcGxheSIsInNob3dQbGF5Iiwic2hvd1BhdXNlIiwiSW5maW5pdHkiLCJfcmVwbGF5IiwiVm9sdW1lQ29udHJvbCIsImZlYXR1cmVDb250cm9sVm9sdW1lIiwiZHJhZyIsIm1hcmtlciIsImxpbmUiLCJwIiwiZ2V0UG9zaXRpb24iLCJkcm9wZG93bkNvbnRlbnQiLCJtb3VzZW1vdmUiLCJtb3VzZXVwIiwieSIsInRvZ2dsZU11dGVkIiwiZGVmYXVsdFZvbHVtZSIsInJvdW5kIiwiQ29udHJvbERyb3Bkb3duIiwiX29wZW5lZCIsIm9wZW4iLCJjbG9zZSIsInRvZ2dsZSIsIm9uRG9jdW1lbnRFdmVudHMiLCJUaW1lbGluZUNvbnRyb2wiLCJfb25NYXJrZXJNb3VzZW1vdmUiLCJfb25NYXJrZXJNb3VzZWRvd24iLCJvblNlY3Rpb25zSW5pdCIsIl9vblRpbWVVcGRhdGUiLCJfb25EdXJhdGlvbkNoYW5nZSIsIm1hcmtlclNoYWRvdyIsIngiLCJtYXJrZXJUaW1lIiwiaXNOYU4iLCJtb3ZlIiwidG90YWxUaW1lIiwicGxheWVkUmFuZ2VzIiwiYnVmZmVyZWRSYW5nZXMiLCJtb3VzZWxlYXZlIiwibW91c2Vkb3duIiwiX29uTGluZUNsaWNrIiwidXBkYXRlU2VjdGlvblJhbmdlcyIsImNyZWF0ZVNlY3Rpb25SYW5nZXMiLCJsZWZ0IiwidXBkYXRlTGFiZWxzIiwid2F0Y2hCdWZmZXJJbnRlcnZhbCIsInVwZGF0ZVByb2dyZXNzQmFyIiwiRU5EIiwiU1RBUlQiLCJsb2FkZWQiLCJkb21JdGVtIiwiYWRkIiwiYnVmZmVyZWQiLCJsb2FkZWRTaXplIiwiQ29udHJvbFRleHQiLCJfdGV4dCIsIkJ1ZmZlcmVkUmFuZ2VzIiwicmFuZ2UiLCJNYXJrZXIiLCJfb25Nb3VzZWRvd24iLCJfZHJhZyIsIlNlY3Rpb25Db250cm9sIiwiX29uU2VjdGlvbnNJbml0IiwiX29uU2VjdGlvblRvZ2dsZSIsInRvZ2dsZVNlY3Rpb25zIiwiY2hlY2tlZCIsIkNvbnRyb2xDaGVja2JveCIsIm9uQ2hlY2tlZCIsIl9jaGVja2VkIiwiRnVsbHNjcmVlbkNvbnRyb2wiLCJSYXRlQ29udHJvbCIsImRvd25Db250cm9sIiwiZGVjcmVhc2VSYXRlIiwidXBDb250cm9sIiwiaW5jcmVhc2VSYXRlIiwiY3VycmVudFJhdGUiLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsInJlcGxhY2UiLCJyYXRlTWluIiwicmF0ZU1heCIsImdldCIsIkJhY2t3YXJkQ29udHJvbCIsIlNvdXJjZUNvbnRyb2wiLCJwbGF5YmFja1F1YWxpdHkiLCJnZXRBdmFpbGFibGVRdWFsaXR5TGV2ZWxzIiwiQ29udHJvbENvbnRhaW5lciIsIl9hY3RpdmUiLCJsaXN0IiwiY29udGVudCIsInRvb2x0aXAiLCJvbkl0ZW1DbGljayIsImN1cnJlbnRUYXJnZXQiLCJjdXJyZW50VmFsdWUiLCJnZXRDdXJyZW50VmFsdWUiLCJlbXB0eSIsImVsZW0iLCJhZGRJdGVtIiwiU3VidGl0bGVDb250cm9sIiwidHJhY2siLCJzdG9wUHJvcGFnYXRpb24iLCJoYXNWYWx1ZSIsInN1YnRpdGxlcyIsIkRvd25sb2FkQ29udHJvbCIsIm9uTG9hZFN0YXJ0IiwiaHJlZiIsImRvd25sb2FkIiwibGluayIsImZpbGVOYW1lIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiZ2V0RmlsZUV4dGVuc2lvbiIsInBhcnNlciIsInBhdGhuYW1lIiwicG9wIiwiS2V5QmluZGluZ0luZm9Db250cm9sIiwiaW5mb0NvbnRlbnQiLCJfa2V5IiwiaG90a2V5Iiwia2V5U3RyaW5nIiwiVGltZUluZm9Db250cm9sIiwiX2N1cnJlbnRUaW1lQ29udHJvbCIsIl90b3RhbFRpbWVDb250cm9sIiwiSHRtbDUiLCJtZWRpYSIsImJ1ZmZlclJhbmdlcyIsIl9wbGF5YmFja1F1YWxpdHkiLCJvbkR1cmF0aW9uQ2hhbmdlIiwib25Qcm9ncmVzcyIsIm9uU2Vla2luZyIsIm9uU2Vla2VkIiwib25Wb2x1bWVDaGFuZ2UiLCJvbkRibGNsaWNrIiwib25QbGF5Iiwib25QYXVzZSIsIm9uUmF0ZUNoYW5nZSIsIm9uRW5kZWQiLCJvbkNhbnBsYXlUaHJvdWdoIiwib25XYWl0aW5nIiwib25FcnJvciIsInJlbW92ZUF0dHIiLCJwcm9wIiwibWFwIiwiX2luaXRTdWJ0aXRsZXMiLCJfaW5pdFZpZGVvIiwiX2luaXRSYXRlIiwiX2luaXRWb2x1bWUiLCJ3ZWJraXRFbnRlckZ1bGxTY3JlZW4iLCJuZXR3b3JrU3RhdGUiLCJIQVZFX01FVEFEQVRBIiwid2Via2l0RXhpdEZ1bGxTY3JlZW4iLCJwbGF5ZWQiLCJwbGF5UHJvbWlzZSIsInBhdXNlUHJvbWlzZSIsIl9zZWxmIiwiY2hpbGRyZW4iLCJsYW5ndWFnZSIsInJlYWR5U3RhdGUiLCJIVE1MTWVkaWFFbGVtZW50IiwiSEFWRV9OT1RISU5HIiwiX3RleHRUcmFja3NIYWNrIiwidGV4dFRyYWNrcyIsImNsaWVudEhlaWdodCIsImNsaWVudFdpZHRoIiwiTU9CSUxFX01BWF9SQVRFIiwiU0FGQVJJX01BWF9SQVRFIiwiTU9CSUxFX01JTl9SQVRFIiwiU0FGQVJJX01JTl9SQVRFIiwic3RvcCIsIl9zb3VyY2UiLCJfdHJhY2siLCJtb2RlIiwibXV0ZSIsInNlZWthYmxlIiwic3RhcnQiLCJjdXJyZW50U3JjIiwiVEVTVF9WSURFTyIsImNhbkNvbnRyb2xWb2x1bWUiLCJfdHJpZ2dlclN0YWNrIiwiX3N0b3BMaXN0ZW4iLCJkZWZhdWx0UmF0ZSIsIl9wb3N0ZXIiLCJpbm5lckhlaWdodCIsIl9yYXRlTWF4IiwiX3JhdGVNaW4iLCJzZXQiLCJsZXZlbHMiLCJzb21lIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7Ozs7OztBQUVBOzs7O0FBR0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOztBQUNBOztBQVNBOzs7O0FBRUE7Ozs7QUFHQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FBaEJBOzs7QUFtQkEsbUJBQVFBLGVBQVIsQ0FBd0IsU0FBeEIsRUFBbUMsWUFBVztBQUM3QyxTQUFPO0FBQ05DLFlBQVUsc0JBQUUsUUFBRixFQUFZQyxRQUFaLENBQXFCLFNBQXJCO0FBREosR0FBUDtBQUdBLEVBSkQ7O0FBUUE7Ozs7Ozs7O0FBUUEsVUFBU0MsWUFBVCxDQUFzQkMsTUFBdEIsRUFBOEJDLElBQTlCLEVBQW9DO0FBQ25DLE1BQU1DLFNBQVMsR0FBR0MsTUFBSCxDQUFVSCxNQUFWLENBQWY7QUFDQUMsT0FBS0csT0FBTCxDQUFhLGdCQUFRO0FBQ3BCLE9BQU1DLFFBQVFILE9BQU9JLE9BQVAsQ0FBZUMsSUFBZixDQUFkO0FBQ0EsT0FBSUYsUUFBUSxDQUFDLENBQWIsRUFBZ0I7QUFDZkgsV0FBT00sTUFBUCxDQUFjSCxLQUFkLEVBQXFCLENBQXJCO0FBQ0E7QUFDQTtBQUNELEdB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0EsMkJBQTBCOztBQUUxQjtBQUNBO0FBQ0E7QUFDQSx3Q0FBdUM7QUFDdkMsMEJBQXlCOztBQUV6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBb0I7QUFDcEIsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVELGlDQUFnQzs7QUFFaEM7Ozs7Ozs7QUNyeEJBOztBQUVBOztBQUVBOzs7Ozs7O0FDSkE7O0FBRUE7O0FBRUE7Ozs7Ozs7QUNKQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7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Q2Q7QUFDQSxhQUFZO0FBQ1o7QUFDQSxjQUFhO0FBQ2I7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDaExBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2hEQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNGQSw0Q0FBMkMsZ0JBQWdCOztBQUUzRCxtREFBa0QsaUZBQWlGOzs7Ozs7O0FDRm5JO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBOzs7Ozs7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNGQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBLGlCQUFnQjtBQUNoQixHQUFFO0FBQ0Y7QUFDQTtBQUNBLHdCQUF1QixVQUFVO0FBQ2pDLDRDQUEyQyxlQUFlO0FBQzFEO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0EsOERBQTZELFVBQVU7QUFDdkU7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBLGlCQUFnQjtBQUNoQixrQkFBaUIsd0JBQXdCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMEJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDMU9BOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWMsb0JBQW9CO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzVDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtB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MEJBQVM7QUFDckI3SCxXQUFVO0FBQ1RzRixVQUFRLE1BREM7O0FBR1RuRyxvQkFBa0I7QUFDakJILFlBQVM7QUFDUkksWUFBUSxDQUFDLFNBQUQ7QUFEQTtBQURRLElBSFQ7QUFRVEwsYUFBVztBQUNWQyxZQUFTLENBQ1IsQ0FBQyxNQUFELEVBQVMsVUFBVCxFQUFxQixNQUFyQixFQUE2QixRQUE3QixFQUF1QyxRQUF2QyxFQUFpRCxZQUFqRCxDQURRLENBREM7QUFJVkMsZ0JBQWEsQ0FDWixDQUFDLE1BQUQsRUFBUyxVQUFULEVBQXFCLE1BQXJCLEVBQTZCLFFBQTdCLEVBQXVDLFFBQXZDLEVBQWlELFlBQWpELENBRFksQ0FKSDtBQU9WQyxVQUFPLENBQ04sQ0FBQyxNQUFELEVBQVMsVUFBVCxFQUFxQixRQUFyQixFQUErQixZQUEvQixDQURNO0FBUEc7QUFSRjtBQURXLEVBQWYsQyIsImZpbGUiOiJsZS1wbGF5ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9qcy9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBmYWY1NmI0OWJlMTQ0NDA2MTEwNiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuXG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL2NvbXBvbmVudHMvQ29udHJvbCc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9Db21wb25lbnQnO1xuaW1wb3J0IFBsYXlCdXR0b24gZnJvbSAnLi9jb21wb25lbnRzL1BsYXlCdXR0b24nO1xuaW1wb3J0IFNwbGFzaEljb24gZnJvbSAnLi9jb21wb25lbnRzL1NwbGFzaEljb24nO1xuXG5pbXBvcnQgSWNvbiBmcm9tICcuL2NvbXBvbmVudHMvSWNvbic7XG5pbXBvcnQgVGltZSBmcm9tICcuL2NvbXBvbmVudHMvVGltZWxpbmUvVGltZSc7XG5pbXBvcnQgQ29udHJvbENvbGxlY3Rpb24gZnJvbSAnLi9jb21wb25lbnRzL0NvbnRyb2xDb2xsZWN0aW9uJztcbmltcG9ydCBTZWN0aW9ucyBmcm9tICcuL2NvbXBvbmVudHMvU2VjdGlvbnMnO1xuaW1wb3J0IEVycm9yRGlzcGxheSBmcm9tICcuL2NvbXBvbmVudHMvRXJyb3JEaXNwbGF5JztcbmltcG9ydCBQb3N0ZXIgZnJvbSAnLi9jb21wb25lbnRzL1Bvc3Rlcic7XG5pbXBvcnQgRnVsbHNjcmVlbkFwaSBmcm9tICcuL0Z1bGxzY3JlZW5BcGknO1xuXG5pbXBvcnQgeyBjcmVhdGVFbCwgc2Vjb25kc1RvVGltZSwgbm9vcCB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHtcblx0SVNfQU5EUk9JRF9QSE9ORSxcblx0SVNfQU5EUk9JRCxcblx0SVNfSVBPRCxcblx0SVNfSVBIT05FLFxuXHRJU19NT0JJTEUsXG5cdElTX1RPVUNIXG59IGZyb20gJy4vdXRpbHMvYnJvd3Nlcic7XG5cbmltcG9ydCBDb29raWUgZnJvbSAnLi91dGlscy9jb29raWUnO1xuXG5pbXBvcnQgTWVkaWFFcnJvciBmcm9tICcuL01lZGlhRXJyb3InO1xuXG4vLyBSZWdpc3RlciBjb21tb24gY29udHJvbHNcbmltcG9ydCAnLi9jb21wb25lbnRzL1BsYXlDb250cm9sJztcbmltcG9ydCAnLi9jb21wb25lbnRzL1ZvbHVtZUNvbnRyb2wnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvVGltZWxpbmUvVGltZWxpbmVDb250cm9sJztcbmltcG9ydCAnLi9jb21wb25lbnRzL1NlY3Rpb25Db250cm9sJztcbmltcG9ydCAnLi9jb21wb25lbnRzL0Z1bGxzY3JlZW5Db250cm9sJztcbmltcG9ydCAnLi9jb21wb25lbnRzL1JhdGVDb250cm9sJztcbmltcG9ydCAnLi9jb21wb25lbnRzL0JhY2t3YXJkQ29udHJvbCc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9Tb3VyY2VDb250cm9sJztcbmltcG9ydCAnLi9jb21wb25lbnRzL1N1YnRpdGxlQ29udHJvbCc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9Eb3dubG9hZENvbnRyb2wnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvS2V5YmluZGluZ0luZm9Db250cm9sJztcbmltcG9ydCAnLi9jb21wb25lbnRzL1RpbWVJbmZvQ29udHJvbCc7XG5cbmltcG9ydCAnLi9lbnRpdHkvSHRtbDUnO1xuXG5pbXBvcnQgJ2FycmF5LnByb3RvdHlwZS5maW5kJztcblxuXG5Db250cm9sLnJlZ2lzdGVyQ29udHJvbCgnZGl2aWRlcicsIGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4ge1xuXHRcdGVsZW1lbnQgOiAkKCc8ZGl2Lz4nKS5hZGRDbGFzcygnZGl2aWRlcicpXG5cdH07XG59KTtcblxuXG5cbi8qKlxuICogUmV0dXJuIGFycmF5IHdpdGggZXhjbHVkZWQgZGlzdCdzIGl0ZW1zIGZyb20gc291cmNlIGFycmF5XG4gKlxuICogQGFjY2VzcyBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBzb3VyY2VcbiAqIEBwYXJhbSB7QXJyYXl9IGRpc3RcbiAqIEByZXR1cm4ge0FycmF5fVxuICovXG5mdW5jdGlvbiBleGNsdWRlQXJyYXkoc291cmNlLCBkaXN0KSB7XG5cdGNvbnN0IHJlc3VsdCA9IFtdLmNvbmNhdChzb3VyY2UpO1xuXHRkaXN0LmZvckVhY2goaXRlbSA9PiB7XG5cdFx0Y29uc3QgaW5kZXggPSByZXN1bHQuaW5kZXhPZihpdGVtKTtcblx0XHRpZiAoaW5kZXggPiAtMSkge1xuXHRcdFx0cmVzdWx0LnNwbGljZShpbmRleCwgMSk7XG5cdFx0XHRyZXR1cm5cblx0XHR9XG5cdH0pXG5cblx0cmV0dXJuIHJlc3VsdDtcbn1cblxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG5cdGVudGl0eSA6ICdIdG1sNScsXG5cdGF1dG9wbGF5IDogZmFsc2UsXG5cdGhlaWdodCA6ICdhdXRvJyxcblx0bG9vcCA6IGZhbHNlLFxuXHRtdXRlZCA6IGZhbHNlLFxuXHRwcmVsb2FkIDogJ21ldGFkYXRhJyxcblx0cG9zdGVyIDogbnVsbCxcblx0c3ZnUGF0aCA6ICcnLFxuXHRpbm5hY3Rpdml0eVRpbWVvdXQgOiA1MDAwLFxuXHRyYXRlIDoge1xuXHRcdHN0ZXAgOiAwLjI1LFxuXHRcdG1pbiA6IDAuNSxcblx0XHRtYXggOiA0LjAsXG5cdFx0ZGVmYXVsdCA6IDFcblx0fSxcblx0cGxheWJhY2sgOiB7XG5cdFx0c3RlcCA6IHtcblx0XHRcdHNob3J0IDogNSxcblx0XHRcdG1lZGl1bSA6IDEwLFxuXHRcdFx0bG9uZyA6IDMwXG5cdFx0fVxuXHR9LFxuXHRjb250cm9scyA6IHtcblx0XHRjb21tb24gOiBbXG5cdFx0XHRbJ3BsYXknLCAndm9sdW1lJywgJ2RpdmlkZXInLCAndGltZWxpbmUnLCAgJ2RpdmlkZXInLCAnc2VjdGlvbicsICdkaXZpZGVyJywgJ2Z1bGxzY3JlZW4nXSxcblx0XHRcdFsncmF0ZScsICdkaXZpZGVyJywgJ2JhY2t3YXJkJywgJ2RpdmlkZXInLCAnc291cmNlJywgJ2RpdmlkZXInLCAnc3VidGl0bGUnLCAnZGl2aWRlcicsICdkb3dubG9hZCcsICdkaXZpZGVyJywgJ2tleWJpbmRpbmcgaW5mbyddXG5cdFx0XSxcblx0XHRmdWxsc2NyZWVuIDogW1xuXHRcdFx0WydwbGF5JywgJ3ZvbHVtZScsICdkaXZpZGVyJywgJ3RpbWVsaW5lJywgJ2RpdmlkZXInLCAncmF0ZScsICdkaXZpZGVyJywgJ2tleWJpbmRpbmcgaW5mbycsICAnZGl2aWRlcicsICdiYWNrd2FyZCcsICdkaXZpZGVyJywgJ3NvdXJjZScsICdkaXZpZGVyJywgJ3N1YnRpdGxlJywgJ2RpdmlkZXInLCAnZG93bmxvYWQnLCAnZGl2aWRlcicsICdzZWN0aW9uJywgJ2RpdmlkZXInLCAnZnVsbHNjcmVlbiddXG5cdFx0XSxcblx0XHRtaW5pIDogW1xuXHRcdFx0WydwbGF5JywgJ3ZvbHVtZScsICdkaXZpZGVyJywgJ2Z1bGxzY3JlZW4nLCAnZGl2aWRlcicsICd0aW1laW5mbyddXG5cdFx0XSxcblx0XHQnY29tbW9uOmFuZHJvaWQnIDogW1xuXHRcdFx0WydwbGF5JywgJ3RpbWVsaW5lJywgJ2Z1bGxzY3JlZW4nXSxcblx0XHRcdFsncmF0ZScsICdzb3VyY2UnLCAnc2VjdGlvbiddXG5cdFx0XSxcblx0XHQnZnVsbHNjcmVlbjptb2JpbGUnIDogW1xuXHRcdFx0WydwbGF5JywgJ3RpbWVsaW5lJywgJ2Z1bGxzY3JlZW4nXSxcblx0XHRcdFsncmF0ZScsICdzb3VyY2UnLCAnc2VjdGlvbiddXG5cdFx0XSxcblx0XHQnY29tbW9uOmlvcycgOiBbXG5cdFx0XHRbJ3BsYXknLCAncmF0ZScsICd0aW1lbGluZScsICdzb3VyY2UnXVxuXHRcdF0sXG5cdH0sXG5cdGNvbnRyb2xzT3B0aW9ucyA6IHtcblxuXHRcdGNvbW1vbiA6IHtcblx0XHRcdGFsaWduIDogWydqdXN0aWZ5JywgJ2xlZnQnXSxcblx0XHRcdC8vIG1vYmlsZSA6IHRydWVcblx0XHR9LFxuXHRcdGZ1bGxzY3JlZW4gOiB7XG5cdFx0XHRhbGlnbiA6ICdqdXN0aWZ5J1xuXHRcdH0sXG5cdFx0J2NvbW1vbjphbmRyb2lkJyA6IHtcblx0XHRcdGFsaWduIDogWydqdXN0aWZ5JywgJ3JpZ2h0J11cblx0XHR9LFxuXG5cdFx0J2Z1bGxzY3JlZW46bW9iaWxlJyA6IHtcblx0XHRcdGFsaWduIDogWydqdXN0aWZ5JywgJ3JpZ2h0J11cblx0XHR9XG5cdH0sXG5cdHZvbHVtZSA6IHtcblx0XHRkZWZhdWx0IDogMC40LFxuXHRcdG11dGVsaW1pdCA6IDAuMDUsXG5cdFx0c3RlcCA6IDAuMVxuXHR9LFxuXHRrZXlCaW5kaW5nIDogW1xuXHRcdHtcblx0XHRcdGtleSA6IDMyLFxuXHRcdFx0aW5mbyA6IFsnU3BhY2UnXSxcblx0XHRcdGRlc2NyaXB0aW9uIDogJ9Cd0LDRh9Cw0YLRjCDQv9GA0L7QuNCz0YDRi9Cy0LDQvdC40LUgLyDQv9C+0YHRgtCw0LLQuNGC0Ywg0L3QsCDQv9Cw0YPQt9GDJyxcblx0XHRcdGZuIDogKHBsYXllcikgPT4ge1xuXHRcdFx0XHRwbGF5ZXIudmlkZW8udG9nZ2xlUGxheSgpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0a2V5IDogMzcsXG5cdFx0XHRpbmZvIDogWyfihpAnXSxcblx0XHRcdGRlc2NyaXB0aW9uIDogYNCf0LXRgNC10LzQvtGC0LDRgtGMINC90LAgMTAg0YHQtdC60YPQvdC0INC90LDQt9Cw0LRgLFxuXHRcdFx0Zm4gOiAocGxheWVyKSA9PiB7XG5cdFx0XHRcdHBsYXllci52aWRlby5jdXJyZW50VGltZSAtPSBwbGF5ZXIub3B0aW9ucy5wbGF5YmFjay5zdGVwLm1lZGl1bTtcblx0XHRcdFx0cGxheWVyLnNwbGFzaEljb24uc2hvdygndW5kbycpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0a2V5IDogMzksXG5cdFx0XHRpbmZvIDogWyfihpInXSxcblx0XHRcdGRlc2NyaXB0aW9uIDogYNCf0LXRgNC10LzQvtGC0LDRgtGMINC90LAgMTAg0YHQtdC60YPQvdC0INCy0L/QtdGA0ZHQtGAsXG5cdFx0XHRmbiA6IChwbGF5ZXIpID0+IHtcblx0XHRcdFx0cGxheWVyLnZpZGVvLmN1cnJlbnRUaW1lICs9IHBsYXllci5vcHRpb25zLnBsYXliYWNrLnN0ZXAubWVkaXVtO1xuXHRcdFx0XHRwbGF5ZXIuc3BsYXNoSWNvbi5zaG93KCdyZWRvJyk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHR7XG5cdFx0XHRzaGlmdEtleSA6IHRydWUsXG5cdFx0XHRpbmZvIDogWydTaGlmdCcsICfihpAnXSxcblx0XHRcdGRlc2NyaXB0aW9uIDogJ9Cf0LXRgNC10LnRgtC4INC90LAg0L/RgNC10LTRi9C00YPRidGD0Y4g0YHQtdC60YbQuNGOJyxcblx0XHRcdGtleSA6IDM3LFxuXHRcdFx0Zm4gOiAocGxheWVyKSA9PiB7XG5cdFx0XHRcdGlmKHBsYXllci5zZWN0aW9ucyA9PSBudWxsKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHBsYXllci5zZWN0aW9ucy5wcmV2KCk7XG5cblx0XHRcdH1cblx0XHR9LFxuXHRcdHtcblx0XHRcdHNoaWZ0S2V5IDogdHJ1ZSxcblx0XHRcdGtleSA6IDM5LFxuXHRcdFx0aW5mbyA6IFsnU2hpZnQnLCAn4oaSJ10sXG5cdFx0XHRkZXNjcmlwdGlvbiA6ICfQn9C10YDQtdC50YLQuCDQvdCwINGB0LvQtdC00YPRjtGJ0YPRjiDRgdC10LrRhtC40Y4nLFxuXHRcdFx0Zm4gOiAocGxheWVyKSA9PiB7XG5cdFx0XHRcdGlmKHBsYXllci5zZWN0aW9ucyA9PSBudWxsKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHBsYXllci5zZWN0aW9ucy5uZXh0KClcblx0XHRcdH1cblx0XHR9LFxuXHRcdHtcblx0XHRcdGtleSA6IDM4LFxuXHRcdFx0aW5mbyA6IFsn4oaRJ10sXG5cdFx0XHRkZXNjcmlwdGlvbiA6ICfQo9Cy0LXQu9C40YfQuNGC0Ywg0LPRgNC+0LzQutC+0YHRgtGMJyxcblx0XHRcdGZuIDogKHBsYXllcikgPT4ge1xuXHRcdFx0XHRwbGF5ZXIudmlkZW8udm9sdW1lICs9IHBsYXllci5vcHRpb25zLnZvbHVtZS5zdGVwO1xuXG5cdFx0XHRcdHBsYXllci5zcGxhc2hJY29uLnNob3cocGxheWVyLmNhbGNWb2x1bWVJY29uKHBsYXllci52aWRlby52b2x1bWUpKTtcblxuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHR7XG5cdFx0XHRrZXkgOiA0MCxcblx0XHRcdGluZm8gOiBbJ+KGkyddLFxuXHRcdFx0ZGVzY3JpcHRpb24gOiAn0KPQvNC10L3RjNGI0LjRgtGMINCz0YDQvtC80LrQvtGB0YLRjCcsXG5cdFx0XHRmbiA6IChwbGF5ZXIpID0+IHtcblx0XHRcdFx0cGxheWVyLnZpZGVvLnZvbHVtZSAtPSBwbGF5ZXIub3B0aW9ucy52b2x1bWUuc3RlcDtcblxuXHRcdFx0XHRwbGF5ZXIuc3BsYXNoSWNvbi5zaG93KHBsYXllci5jYWxjVm9sdW1lSWNvbihwbGF5ZXIudmlkZW8udm9sdW1lKSk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdHtcblx0XHRcdGtleSA6IDcwLFxuXHRcdFx0aW5mbyA6IFsnZiddLFxuXHRcdFx0ZGVzY3JpcHRpb24gOiAn0J7RgtC60YDRi9GC0Ywv0LfQsNC60YDRi9GC0Ywg0L/QvtC70L3QvtGN0LrRgNCw0L3Ri9C5INGA0LXQttC40LwnLFxuXHRcdFx0Zm4gOiAocGxheWVyKSA9PiB7XG5cdFx0XHRcdHBsYXllci50b2dnbGVGdWxsc2NyZWVuKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRdLFxuXHRwbHVnaW5zIDoge1xuXHRcdG1pbmlwbGF5ZXIgOiB7fVxuXHR9LFxuXHRvblBsYXllckluaXRlZCA6IG5vb3Bcbn07XG5cbi8qKlxuICogQGNsYXNzIFBsYXllclxuICogQGV4dGVuZHMgQ29tcG9uZW50XG4gKiBAcGFyYW0ge2pRdWVyeX0gZWxlbWVudCBFbGVtZW50IHdoZW4gcGxheWVyIHdpbGwgaW5pdFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5hdXRvcGxheT1mYWxzZV1cbiAqIFdoZW4gcHJlc2VudCwgdGhlIHZpZGVvIHdpbGwgYXV0b21hdGljYWxseSBzdGFydCBwbGF5aW5nIGFzIHNvb24gYXMgaXQgY2FuIGRvIHNvIHdpdGhvdXQgc3RvcHBpbmcuXG4gKiBAcGFyYW0ge1N0cmluZ3xOdW1iZXJ9IFtvcHRpb25zLmhlaWdodD0nYXV0byddIEhlaWdodCBvZiB2aWRlbyBjb250YWluZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy53aWR0aF0gV2lkdGggb2YgdmlkZW8gY29udGFpbmVyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmxvb3A9ZmFsc2VdXG4gKiBXaGVuIHByZXNlbnQsIGl0IHNwZWNpZmllcyB0aGF0IHRoZSB2aWRlbyB3aWxsIHN0YXJ0IG92ZXIgYWdhaW4sIGV2ZXJ5IHRpbWUgaXQgaXMgZmluaXNoZWQuXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLm11dGVkPWZhbHNlXVxuICogV2hlbiBwcmVzZW50LCBpdCBzcGVjaWZpZXMgdGhhdCB0aGUgYXVkaW8gb3V0cHV0IG9mIHRoZSB2aWRlbyBzaG91bGQgYmUgbXV0ZWQuXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMucHJlbG9hZD0nbWV0YWRhdGEnXSBDYW4gYmUgKCdhdXRvJ3wnbWV0YWRhdGEnfCdub25lJylcbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5wb3N0ZXJdIFBhdGggdG8gcG9zdGVyIG9mIHZpZGVvXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuc3ZnUGF0aF0gUGF0aCB0byBzdmcgc3ByaXRlIGZvciBpY29uc1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLnJhdGVdIFJhdGUgb3B0aW9uc1xuICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLnJhdGUuc3RlcD0wLjI1XSBTdGVwIG9mIGluY3JlYXNlL2RlY3JlYXNlIGJ5IHJhdGUgY29udHJvbFxuICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLnJhdGUubWluPTAuNV0gTWluIG9mIHJhdGVcbiAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5yYXRlLm1heD00LjBdIE1heCBvZiByYXRlXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMucmF0ZS5kZWZhdWx0PTFdXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMucGxheWJhY2tdIFBsYXliYWNrIG9wdGlvbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5wbGF5YmFjay5zdGVwXVxuICogQHBhcmFtIHtOdWJtZXJ9IFtvcHRpb25zLnBsYXliYWNrLnN0ZXAuc2hvcnQ9NV1cbiAqIEBwYXJhbSB7TnVibWVyfSBbb3B0aW9ucy5wbGF5YmFjay5zdGVwLm1lZGl1bT0zMF1cbiAqIEBwYXJhbSB7TnVibWVyfSBbb3B0aW9ucy5wbGF5YmFjay5zdGVwLmxvbmc9NjBdXG4gKiBAcGFyYW0ge09iZWpjdH0gW29wdGlvbnMuY29udHJvbHNdIE9iamVjdCBvZiBjb250cm9sc1xuICogQHBhcmFtIHtTdHJpbmdbXX0gW29wdGlvbnMuY29udHJvbHMuY29tbW9uXSBBcnJheSBvZiBjb250cm9scyBmb3IgZGVmYXVsdCB2aWV3XG4gKiBAcGFyYW0ge1N0cmluZ1tdfSBbb3B0aW9ucy5jb250cm9scy5mdWxsc2NyZWVuXSBBcnJheSBvZiBjb250cm9sIGZvciBmdWxsc3JlZW4gdmlld1xuICogQHBhcmFtIHtTdHJpbmdbXX0gW29wdGlvbnMuY29udHJvbHMubWluaV0gQXJyYXkgb2YgY29udHJvbCBmb3IgbWluaXBsYXllclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLmV4Y2x1ZGVDb250cm9sc10gT2JqZWN0IG9mIGV4Y2x1ZGUgY29udHJvbHMuIFN0cnVjdHVyZSBpcyB0aGUgc2FtZSBhcyB0aGF0IG9mIG9wdGlvbnMuY29udHJvbHNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy52b2x1bWVdIFZvbHVtZSdzIG9wdGlvbnNcbiAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy52b2x1bWUuZGVmYXVsdD0wLjRdIERlZmF1bHQgdm9sdW1lXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMudm9sdW1lLm11dGVsaW1pdD0wLjA1XSBEZWx0YSB3aGVuIHZvbHVtZSBpcyBtdXRlZFxuICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLnZvbHVtZS5zdGVwPTAuMDVdXG4gKiBAcGFyYW0ge09iamVjdFtdfSBbb3B0aW9ucy5rZXliaW5kaW5nXVxuICogT2JqZWN0IHdpdGgga2V5YmluZGluZyBvcHRpb25zLCB3aGVuIGtleSBpdCdzIG5hbWUgb2Yga2V5IGJpbmRpbmcsIGFuZCB2YWx1ZSBpdCdzIGtleSBiaW5kaW5nIHNldHRpbmdzXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMua2V5YmluZGluZ1tdLmtleV0gQ29kZSBvZiBrZXkgYmluZGluZyAoZm9yIGV4YW1wbGUgMzIgaXQncyBzcGFjZSlcbiAqIEBwYXJhbSB7U3RyaW5nW119IFtvcHRpb25zLmtleWJpbmRpbmdbXS5pbmZvXSBBcnJheSBvZiBrZXlzdHJva2VzIG9yZGVyXG4gKiBAcGFyYW0ge1N0cmluZ30gb3B0aW9ucy5rZXliaW5kaW5nW10uZGVzY3JpcHRpb25dIERlc2NyaXB0aW9uIG9mIGtleSBiaW5kaW5nXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBvcHRpb25zLmtleWJpbmRpbmdbXS5mbl0gQ2FsbGJhY2tcbiAqIEBwYXJhbSB7T2JqZWN0fEJvb2xlYW59IFtvcHRpb25zLm1pbmlwbGF5ZXI9ZmFsc2VdXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMubWluaXBsYXllci53aWR0aF0gV2lkdGggb2YgbWluaXBsYXllciBjb250YWluZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5taW5pcGxheWVyLndpZHRoXSBNaW5pUGxheWVyJ3Mgd2lkdGhcbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5zZWN0aW9uQ29udGFpbmVyXSBTZWxlY3RvciBmb3Igc2VjdGlvbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5wbHVnaW5zXSBLZXlzIG9mIG9iamVjdHMgYXJlIG5hbWUgb2YgcGx1Z2luLCB2YWx1ZSAtIHBsdWdpbiBvcHRpb25zXG4gKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9IFtvcHRpb25zLmRhdGFdIFVybCBvciBKU09OIHdpdGggZGF0YSBmb3IgcGxheWVyXG4gKiBAcGFyYW0ge0FycmF5fSBbb3B0aW9ucy5kYXRhLnNlY3Rpb25zXSBTZWN0aW9ucyBhcnJheVxuICovXG5cbmNsYXNzIFBsYXllciBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKGVsZW1lbnQsIG9wdGlvbnMpIHtcblxuXHRcdG9wdGlvbnMuY3JlYXRlRWxlbWVudCA9IGZhbHNlO1xuXG5cdFx0c3VwZXIobnVsbCwgb3B0aW9ucyk7XG5cblx0XHR0aGlzLl9lbGVtZW50ID0gZWxlbWVudDtcblxuXHRcdC8qKlxuXHRcdCAqIERPTSBjb250YWluZXIgdG8gaG9sZCBpbm5lciBvZiBwbGF5ZXJcblx0XHQgKlxuXHRcdCAqIEBtZW1iZXJvZiEgUGxheWVyI1xuXHRcdCAqIEB0eXBlIHtqUXVlcnl9XG5cdFx0ICovXG5cdFx0dGhpcy5pbm5lckVsZW1lbnQgPSBjcmVhdGVFbCgnZGl2Jyk7XG5cblx0XHQvLyBVc2VycyBvcHRpb25zXG5cdFx0dGhpcy5fdXNlck9wdGlvbnMgPSBvcHRpb25zO1xuXHRcdHRoaXMuX2luaXRPcHRpb25zKCk7XG5cblx0XHRpZih0aGlzLm9wdGlvbnMuc3ZnUGF0aCA9PT0gJycpIHtcblx0XHRcdFBsYXllci5fbG9hZFNWR1Nwcml0ZShQbGF5ZXIuZGVmYXVsdFNwcml0ZSk7XG5cdFx0fVxuXG5cdFx0dGhpcy5fdmlldyA9ICdjb21tb24nO1xuXG5cdFx0LyoqXG5cdFx0ICogRE9NIGNvbnRhaW5lciB0byBob2xkIGFsbCBwbGF5ZXJcblx0XHQgKlxuXHRcdCAqIEBtZW1iZXJvZiEgUGxheWVyI1xuXHRcdCAqIEB0eXBlIHtqUXVlcnl9XG5cdFx0ICovXG5cdFx0dGhpcy5lbGVtZW50ID0gdGhpcy5jcmVhdGVFbGVtZW50KCk7XG5cblx0XHR0aGlzLmxvYWRFbnRpdHkodGhpcy5vcHRpb25zLmVudGl0eSwgeyBjdHggOiBlbGVtZW50IH0pO1xuXHRcdC8qKlxuXHRcdCAqIFZpZGVvIGh0bWw1IGNvbXBvbmVudFxuXHRcdCAqXG5cdFx0ICogQG1lbWJlcm9mISBQbGF5ZXIjXG5cdFx0ICogQHR5cGUge0VudGl0eX1cblx0XHQgKi9cblx0XHR0aGlzLnZpZGVvID0gdGhpcy5lbnRpdHk7XG5cblx0XHQvLyBDcmVhdGUgY29udHJvbHNcblx0XHQvLyBUT0RPOiBtb3ZlIHRoaXMgYWN0aW9uIHRvIHRoZSBjcmVhdGVFbGVtZW50XG5cdFx0dGhpcy5jb250cm9scyA9IHt9O1xuXHRcdHRoaXMuX2luaXRDb250cm9scygpO1xuXG5cdFx0LyoqXG5cdFx0ICogQGFjY2VzcyBwcml2YXRlXG5cdFx0ICovXG5cdFx0dGhpcy5fZGJsY2xpY2tUaW1lb3V0ID0gbnVsbDtcblxuXHRcdHRoaXMuX2luaXRTZWN0aW9ucygpLnRoZW4oKGRhdGEpID0+IHtcblx0XHRcdC8qKlxuXHRcdFx0ICogU2VjdGlvbnMgaW5pdCBldmVudFxuXHRcdFx0ICpcblx0XHRcdCAqIEBldmVudCBQbGF5ZXIjc2VjdGlvbnNpbml0XG5cdFx0XHQgKiBAZXhhbXBsZVxuXHRcdFx0ICogY29uc3QgcGxheWVyID0gbmV3IFBsYXllcigkKCcjdmlkZW8nKSwgb3B0aW9ucyk7XG5cdFx0XHQgKiBwbGF5ZXIub24oJ3NlY3Rpb25zaW5pdCcsIChlLCBkYXRhKSA9PiBjb3Nub2xlLmxvZyhkYXRhKSk7XG5cdFx0XHQgKlxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLnRyaWdnZXIoJ3NlY3Rpb25zaW5pdCcsIGRhdGEpO1xuXHRcdH0pO1xuXHRcdHRoaXMuX2luaXRQbHVnaW5zKCk7XG5cblx0XHR0aGlzLl9saXN0ZW5Ib3RLZXlzKCk7XG5cblx0XHR0aGlzLl91c2VyQWN0aXZpdHkgPSBmYWxzZTtcblx0XHR0aGlzLl9saXN0ZW5Vc2VyQWN0aXZpdHkoKTtcblxuXHRcdHRoaXMuX3dhaXRpbmdUaW1lb3V0cyA9IFtdO1xuXG5cdFx0LyogUmV0cmlnZ2VyIHtAbGluayBFbnRpdHl9IEV2ZW50cyAqL1xuXHRcdFtcblx0XHRcdC8qKlxuXHRcdFx0ICogZHVyYXRpb25jaGFuZ2UgcGxheWVyIGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciNkdXJhdGlvbmNoYW5nZVxuXHRcdFx0ICovXG5cdFx0XHQnZHVyYXRpb25jaGFuZ2UnLFxuXG5cdFx0XHQvKipcblx0XHRcdCAqIHByb2dyZXNzIGh0bWw1IG1lZGlhIGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciNwcm9ncmVzc1xuXHRcdFx0ICovXG5cdFx0XHQncHJvZ3Jlc3MnLFxuXG5cdFx0XHQvKipcblx0XHRcdCAqIGRibGNsaWNrXG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciNkYmNsaWNrXG5cdFx0XHQgKi9cblx0XHRcdCdkYmxjbGljaycsXG5cblx0XHRcdC8qKlxuXHRcdFx0ICogZGJsY2xpY2tcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI2RiY2xpY2tcblx0XHRcdCAqL1xuXHRcdFx0J2NsaWNrJyxcblxuXG5cdFx0XHQvKipcblx0XHRcdCAqIGNhbnBsYXkgaHRtbDUgbWVkaWEgZXZlbnRcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI2NhbnBsYXlcblx0XHRcdCAqL1xuXHRcdFx0J2NhbnBsYXknLFxuXG5cdFx0XHQvKipcblx0XHRcdCAqIHF1YWxpdHljaGFuZ2UgaHRtbDVcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI3F1YWxpdHljaGFuZ2Vcblx0XHRcdCAqL1xuXHRcdFx0J3F1YWxpdHljaGFuZ2UnLFxuXG5cdFx0XHQvKipcblx0XHRcdCAqIHF1YWxpdHljaGFuZ2UgaHRtbDVcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI3RyYWNrc2NoYW5nZVxuXHRcdFx0ICovXG5cdFx0XHQndHJhY2tzY2hhbmdlJyxcblxuXG5cblx0XHRdLmZvckVhY2goZXZlbnROYW1lID0+IHtcblx0XHRcdHRoaXMudmlkZW8ub24oZXZlbnROYW1lLCAoKSA9PiB7XG5cdFx0XHRcdHRoaXMudHJpZ2dlcihldmVudE5hbWUpO1xuXHRcdFx0fSlcblx0XHR9KTtcblxuXHRcdHRoaXMudmlkZW8ub25lKCdwbGF5JywgKCkgPT4ge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBGaXJzdCBwbGF5IGV2ZW50XG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQGV2ZW50IFBsYXllciNmaXJzdHBsYXlcbiAgICAgICAgICAgICAqL1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdmaXJzdHBsYXknKTtcblx0XHRcdHRoaXMucmVtb3ZlQ2xhc3MoJ2xlcGxheWVyLS12aXJnaW4nKTtcblx0XHR9KTtcblxuXHRcdHRoaXMudmlkZW8ub24oJ3RpbWV1cGRhdGUnLCAoKSA9PiB7XG5cdFx0XHRpZiAodGhpcy52aWRlby5jdXJyZW50VGltZSA+IDApIHtcblx0XHRcdFx0dGhpcy5yZW1vdmVDbGFzcygnbGVwbGF5ZXItLXZpcmdpbicpO1xuXHRcdFx0fVxuXG5cdFx0XHQvKipcblx0XHRcdCAqIHRpbWV1cGRhdGUgaHRtbDUgbWVkaWEgZXZlbnRcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI3RpbWV1cGRhdGVcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy50cmlnZ2VyKCd0aW1ldXBkYXRlJywgeyB0aW1lIDogdGhpcy52aWRlby5jdXJyZW50VGltZSwgZHVyYXRpb24gOiB0aGlzLnZpZGVvLmR1cmF0aW9uIH0pO1xuXG5cdFx0fSlcblxuXHRcdHRoaXMudmlkZW8ub24oJ2xvYWRzdGFydCcsICgpID0+IHtcblx0XHRcdHRoaXMucmVtb3ZlQ2xhc3MoJ2xlcGxheWVyLS1lbmRlZCcpO1xuXG5cdFx0XHR0aGlzLmVycm9yID0gbnVsbDtcblx0XHRcdC8qKlxuXHRcdFx0ICogbG9hZHN0YXJ0IHBsYXllciBldmVudFxuXHRcdFx0ICpcblx0XHRcdCAqIEBldmVudCBQbGF5ZXIjbG9hZHN0YXJ0XG5cdFx0XHQgKi9cblx0XHRcdHRoaXMudHJpZ2dlcignbG9hZHN0YXJ0Jyk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLnZpZGVvLm9uKCdzZWVraW5nJywgKCkgPT4ge1xuXHRcdFx0dGhpcy5fc3RhcnRXYWl0aW5nKCk7XG5cdFx0XHQvKipcblx0XHRcdCAqIHNlZWtpbmcgaHRtbDUgbWVkaWEgZXZlbnRcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI3NlZWtpbmdcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdzZWVraW5nJyk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLnZpZGVvLm9uKCdzZWVrZWQnLCAoKSA9PiB7XG5cdFx0XHR0aGlzLl9zdG9wV2F5dGluZygpO1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBzZWVrZWQgaHRtbDUgbWVkaWEgZXZlbnRcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI3NlZWtlZFxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLnRyaWdnZXIoJ3NlZWtlZCcpO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy52aWRlby5vbigndm9sdW1lY2hhbmdlJywgKCkgPT4ge1xuXHRcdFx0LyoqXG5cdFx0XHQgKiB2b2x1bWVjaGFuZ2UgaHRtbDUgbWVkaWEgZXZlbnRcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI3ZvbHVtZWNoYW5nZVxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLnRyaWdnZXIoJ3ZvbHVtZWNoYW5nZScsIHsgdm9sdW1lIDogdGhpcy52aWRlby52b2x1bWUgfSk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLnZpZGVvLm9uKCdwb3N0ZXJjaGFuZ2UnLCAoZSwgZGF0YSkgPT4ge1xuXHRcdFx0Y29uc3QgdXJsID0gZGF0YS51cmw7XG5cdFx0XHR0aGlzLnBvc3Rlci51cmwgPSB1cmw7XG5cdFx0XHR0aGlzLnRyaWdnZXIoJ3Bvc3RlcmNoYW5nZScpO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy52aWRlby5vbigncGxheScsIChlKSA9PiB7XG5cdFx0XHR0aGlzLnJlbW92ZUNsYXNzKCdsZXBsYXllci0tZW5kZWQnKTtcblx0XHRcdHRoaXMucmVtb3ZlQ2xhc3MoJ2xlcGxheWVyLS1wYXVzZWQnKTtcblx0XHRcdHRoaXMuYWRkQ2xhc3MoJ2xlcGxheWVyLS1wbGF5aW5nJyk7XG5cblx0XHRcdC8qKlxuXHRcdFx0ICogcGxheSBodG1sNSBtZWRpYSBldmVudFxuXHRcdFx0ICpcblx0XHRcdCAqIEBldmVudCBQbGF5ZXIjcGxheVxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLnRyaWdnZXIoJ3BsYXknKTtcblx0XHR9KTtcblxuXHRcdHRoaXMudmlkZW8ub24oJ3BhdXNlJywgKCkgPT4ge1xuXHRcdFx0dGhpcy5yZW1vdmVDbGFzcygnbGVwbGF5ZXItLXBsYXlpbmcnKTtcblx0XHRcdHRoaXMuYWRkQ2xhc3MoJ2xlcGxheWVyLS1wYXVzZWQnKTtcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBwYXVzZSBodG1sNSBtZWRpYSBldmVudFxuXHRcdFx0ICpcblx0XHRcdCAqIEBldmVudCBQbGF5ZXIjcGF1c2Vcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdwYXVzZScpO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy52aWRlby5vbigncGxheWluZycsICgpID0+IHtcblx0XHRcdHRoaXMuX3N0b3BXYXl0aW5nKCk7XG5cblx0XHRcdC8qKlxuXHRcdFx0ICogcGxheWluZyBodG1sNSBtZWRpYSBldmVudFxuXHRcdFx0ICpcblx0XHRcdCAqIEBldmVudCBQbGF5ZXIjcGxheWluZ1xuXHRcdFx0ICovXG5cdFx0XHR0aGlzLnRyaWdnZXIoJ3BsYXlpbmcnKTtcblx0XHR9KTtcblxuXHRcdHRoaXMudmlkZW8ub24oJ3JhdGVjaGFuZ2UnLCAoKSA9PiB7XG5cdFx0XHQvKipcblx0XHRcdCAqIHJhdGUgaHRtbDUgbWVkaWEgZXZlbnRcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI3JhdGVcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdyYXRlY2hhbmdlJywgeyByYXRlIDogdGhpcy52aWRlby5yYXRlIH0pO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy52aWRlby5vbignZW5kZWQnLCAoKSA9PiB7XG5cdFx0XHR0aGlzLmFkZENsYXNzKCdsZXBsYXllci0tZW5kZWQnKTtcblxuXHRcdFx0aWYodGhpcy5vcHRpb25zLmxvb3ApIHtcblx0XHRcdFx0dGhpcy5jdXJyZW50VGltZSA9IDA7XG5cdFx0XHRcdHRoaXMudmlkZW8ucGxheSgpO1xuXHRcdFx0fSBlbHNlIGlmICghdGhpcy52aWRlby5wYXVzZWQpIHtcblx0XHRcdFx0dGhpcy52aWRlby5wYXVzZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHQvKipcblx0XHRcdCAqIGVuZGVkIGh0bWw1IG1lZGlhIGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciNlbmRlZFxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLnRyaWdnZXIoJ2VuZGVkJyk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLnZpZGVvLm9uKCdjYW5wbGF5dGhyb3VnaCcsICgpID0+IHtcblx0XHRcdHRoaXMuX3N0b3BXYXl0aW5nKCk7XG5cdFx0XHQvKipcblx0XHRcdCAqIGNhbnBsYXl0aHJvdWdoIGh0bWw1IG1lZGlhIGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciNjYW5wbGF5dGhyb3VnaFxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLnRyaWdnZXIoJ2NhbnBsYXl0aHJvdWdoJyk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLnZpZGVvLm9uKCd3YWl0aW5nJywgKCkgPT4ge1xuXHRcdFx0dGhpcy5fc3RhcnRXYWl0aW5nKCk7XG5cblx0XHRcdHRoaXMudmlkZW8ub25lKCd0aW1ldXBkYXRlJywgKCkgPT4gdGhpcy5fc3RvcFdheXRpbmcoKSk7XG5cblx0XHRcdC8qKlxuXHRcdFx0ICogd2FpdGluZyBodG1sNSBtZWRpYSBldmVudFxuXHRcdFx0ICpcblx0XHRcdCAqIEBldmVudCBQbGF5ZXIjd2FpdGluZ1xuXHRcdFx0ICovXG5cdFx0XHR0aGlzLnRyaWdnZXIoJ3dhaXRpbmcnKTtcblx0XHR9KTtcblxuXHRcdHRoaXMudmlkZW8ub24oJ2Vycm9yJywgKGUsIGRhdGEpID0+IHtcblx0XHRcdHRoaXMuZXJyb3IgPSBuZXcgTWVkaWFFcnJvcihkYXRhLmNvZGUpO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy52aWRlby5pbml0KCkudGhlbigoKSA9PiB7XG5cdFx0XHQvKipcblx0XHRcdCAqIFBsYXllciBpbml0IGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciNpbml0ZWRcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdpbml0ZWQnKTtcblxuXHRcdFx0aWYodGhpcy5vcHRpb25zLnRpbWUpIHtcblx0XHRcdFx0dGhpcy5jdXJyZW50VGltZSA9IHRoaXMub3B0aW9ucy50aW1lO1xuXHRcdFx0fVxuXG5cdFx0XHRpZih0aGlzLnZpZGVvLnNyYyAhPSBudWxsICYmIHRoaXMub3B0aW9ucy5hdXRvcGxheSkge1xuXHRcdFx0XHR0aGlzLnBsYXkoKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXG5cdFx0dGhpcy5vbignZnVsbHNjcmVlbmNoYW5nZScsIHRoaXMuX29uRnVsbHNjcmVlbkNoYW5nZS5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLm9uKCdjbGljaycsIHRoaXMuX29uQ2xpY2suYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5vbignZGJsY2xpY2snLCB0aGlzLl9vbkRiY2xpY2suYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5vbignaW5pdGVkJywgdGhpcy5fb25Jbml0ZWQuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5vbigncGxheScsIHRoaXMuX29uUGxheS5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLm9uKCdwYXVzZScsIHRoaXMuX29uUGF1c2UuYmluZCh0aGlzKSk7XG5cblx0XHQkKGRvY3VtZW50KS5vbihGdWxsc2NyZWVuQXBpLmZ1bGxzY3JlZW5jaGFuZ2UsIHRoaXMuX29uRW50aXR5RnVsbHNjcmVuQ2hhbmdlLmJpbmQodGhpcykpO1xuXHR9XG5cblx0Z2V0IGVudGl0eSgpIHtcblx0XHRyZXR1cm4gdGhpcy5fZW50aXR5O1xuXHR9XG5cblx0bG9hZEVudGl0eShuYW1lLCBvcHRpb25zKSB7XG5cdFx0Y29uc3QgRW50aXR5ID0gUGxheWVyLmdldENvbXBvbmVudChuYW1lKTtcblx0XHR0aGlzLl9lbnRpdHkgPSBuZXcgRW50aXR5KHRoaXMsIG9wdGlvbnMpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFN0YXJ0cyBwbGF5aW5nIHRoZSB2aWRlb1xuXHQgKlxuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAZXhhbXBsZVxuXHQgKiBjb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyKCQoXCIjdmlkZW9cIiksb3B0aW9ucyk7XG5cdCAqICQoJy5zb21lLWJ1dHRvbicpLm9uKCdjbGljaycsICgpID0+IHBsYXllci5wbGF5KCkpO1xuXHQgKi9cblx0cGxheSgpIHtcblx0XHRyZXR1cm4gdGhpcy52aWRlby5wbGF5KCk7XG5cdH1cblxuXHQvKipcblx0ICogUGF1c2VzIHRoZSBjdXJyZW50bHkgcGxheWluZyB2aWRlb1xuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKi9cblx0cGF1c2UoKSB7XG5cdFx0cmV0dXJuIHRoaXMudmlkZW8ucGF1c2UoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBUb2dnbGUgdGhlIGN1cnJlbnRseSBwbGF5aW5nIHZpZGVvXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqL1xuXHR0b2dnbGVQbGF5KCkge1xuXHRcdHJldHVybiB0aGlzLnZpZGVvLnRvZ2dsZVBsYXkoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBCZWdpbiBsb2FkaW5nIHRoZSBzcmMgZGF0YVxuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKi9cblx0bG9hZCgpIHtcblx0XHRyZXR1cm4gdGhpcy52aWRlby5sb2FkKCk7XG5cdH1cblxuXHQvKipcblx0ICogT24gc2V0IHZpZXcgY2FsbGJhY2tcblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHBhcmFtIHtTdHJpbmd9IHZpZXcgVmlldyBuYW1lXG5cdCAqIEByZXR1cm5zIHtQbGF5ZXJ9IHRoaXNcblx0ICogQGV4YW1wbGVcblx0ICogY29uc3QgcGxheWVyID0gbmV3IFBsYXllcigkKCcjdmlkZW8nKSwgb3B0aW9ucyk7XG5cdCAqIHBsYXllci5vblNldFZpZXcoJ21pbmknLCAoKSA9PiBjb25zb2xlLmxvZygnTWluaXBsYXllciB5ZWFoIScpXG5cdCAqICAgICAub25TZXRWaWV3KCdmdWxsc2NyZWVuJywgKCkgPT4gY29uc29sZS5sb2coJ0Z1bGxzY3JlZW4gYm9vbSEnKVxuXHQgKiAgICAgLm9uU2V0VmlldygnY29tbW9uJywgKCkgPT4gY29uc29sZS5sb2coJ0NvbW1vbiB2aWV3IC0gbG9sJyk7XG5cdCAqL1xuXHRvblNldFZpZXcodmlldywgLi4uYXJncykge1xuXHRcdHRoaXMub24oYHNldHZpZXcuJHt2aWV3fWAsIC4uLmFyZ3MpO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvKipcblx0ICogQ2hhbmdlIHNvdXJjZSBhbmQgc2F2ZSB0aW1lLCByYXRlXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBxdWFsaXR5XG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBbcXVhbGl0eS50aXRsZV0gVGhlIG5hbWUgb2YgcXVhbGl0dXQgZS54IFNEIG9yIEhEXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBxdWFsaXR5LnVybFxuXHQgKi9cblx0Y2hhbmdlUXVhbGl0eShxdWFsaXR5KSB7XG5cdFx0Y29uc3QgdmlkZW8gPSB0aGlzLnZpZGVvO1xuXHRcdGlmKHF1YWxpdHkgPT0gbnVsbCkgcmV0dXJuO1xuXHRcdGNvbnN0IHRpbWUgPSB0aGlzLmN1cnJlbnRUaW1lO1xuXHRcdGNvbnN0IHJhdGUgPSB0aGlzLnJhdGU7XG5cdFx0Y29uc3QgaXNQYXVzZWQgPSB0aGlzLnBhdXNlZDtcblxuXHRcdHZpZGVvLnNyYyA9IHF1YWxpdHk7XG5cdFx0dGhpcy5wbGF5YmFja1JhdGUgPSByYXRlO1xuXHRcdHRoaXMuY3VycmVudFRpbWUgPSB0aW1lO1xuXG5cdFx0aWYoaXNQYXVzZWQpIHtcblx0XHRcdHRoaXMucGF1c2UoKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnBsYXkoKVxuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBPbiBkZWwgdmlldyBjYWxsYmFja1xuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAcGFyYW0ge1N0cmluZ30gdmlldyBWaWV3IG5hbWVcblx0ICogQHJldHVybnMge1BsYXllcn0gdGhpc1xuXHQgKiBAZXhhbXBsZVxuXHQgKiBjb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyKCQoJyN2aWRlbycpLCBvcHRpb25zKTtcblx0ICogcGxheWVyLm9uRGVsVmlldygnbWluaScsICgpID0+IGNvbnNvbGUubG9nKCdFeGl0IG1pbmlwbGF5ZXInKVxuXHQgKi9cblx0b25EZWxWaWV3KHZpZXcsIC4uLmFyZ3MpIHtcblx0XHR0aGlzLm9uKGBkZWx2aWV3LiR7dmlld31gLCAuLi5hcmdzKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBzb21lIGRhdGEgZm9yIHBsYXllclxuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAcmV0dXJucyB7alF1ZXJ5LnByb21pc2V9IFByb21pc2Vcblx0ICovXG5cdGdldERhdGEoKSB7XG5cdFx0Y29uc3QgZGZkID0gbmV3ICQuRGVmZXJyZWQoKTtcblxuXHRcdGlmICh0aGlzLl9kYXRhICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdGRmZC5yZXNvbHZlKHRoaXMuX2RhdGEpO1xuXHRcdFx0cmV0dXJuIGRmZC5wcm9taXNlKClcblx0XHR9XG5cblx0XHRpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5kYXRhID09PSAnc3RyaW5nJykge1xuXHRcdFx0cmV0dXJuICQuYWpheCh7XG5cdFx0XHRcdHVybCA6IHRoaXMub3B0aW9ucy5kYXRhLFxuXHRcdFx0XHRtZXRob2QgOiAnR0VUJyxcblx0XHRcdFx0ZGF0YVR5cGUgOiAnanNvbidcblx0XHRcdH0pLnByb21pc2UoKTtcblxuXHRcdH0gZWxzZSBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5kYXRhID09PSAnb2JqZWN0Jykge1xuXHRcdFx0ZGZkLnJlc29sdmUodGhpcy5vcHRpb25zLmRhdGEpO1xuXHRcdFx0cmV0dXJuIGRmZC5wcm9taXNlKClcblx0XHR9XG5cdH1cblxuXHRnZXRTZWN0aW9uRGF0YSgpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXREYXRhKClcblx0XHRcdC50aGVuKGRhdGEgPT4ge1xuXHRcdFx0XHRyZXR1cm4gZGF0YS5zZWN0aW9uc1xuXHRcdFx0fSlcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXF1ZXN0IGZ1bGxzY3JlZW5cblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQGZpcmVzIFBsYXllciNmdWxsc2NyZWVuY2hhbmdlXG5cdCAqL1xuXHRyZXF1ZXN0RnVsbHNjcmVlbigpIHtcblx0XHRjb25zdCBmc0FwaSA9IEZ1bGxzY3JlZW5BcGk7XG5cblx0XHRpZihmc0FwaS5yZXF1ZXN0RnVsbHNjcmVlbikge1xuXHRcdFx0Ly8gQ2FsbCBIVE1MNSBWaWRlbyBhcGkgcmVxdWVzdEZ1bGxzY3JlZW5cblx0XHRcdHRoaXMuZWxlbWVudFswXVtmc0FwaS5yZXF1ZXN0RnVsbHNjcmVlbl0oKTtcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBmdWxsc2NyZWVuY2hhbmdlIGh0bWw1IG1lZGlhIGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciNmdWxsc2NyZWVuY2hhbmdlXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMudHJpZ2dlcignZnVsbHNjcmVlbmNoYW5nZScsIHRydWUpO1xuXHRcdH0gZWxzZSBpZiAodGhpcy52aWRlby5zdXBwb3J0c0Z1bGxTY3JlZW4oKSkge1xuXHRcdFx0dGhpcy52aWRlby5lbnRlckZ1bGxzY3JlZW4oKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogRXhpdCBmdWxsc2NyZWVuXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBmaXJlcyBQbGF5ZXIjZnVsbHNjcmVlbmNoYW5nZVxuXHQgKi9cblx0ZXhpdEZ1bGxzY3JlZW4oKSB7XG5cdFx0Y29uc3QgZnNBcGkgPSBGdWxsc2NyZWVuQXBpO1xuXG5cdFx0aWYoZnNBcGkuZXhpdEZ1bGxzY3JlZW4pIHtcblx0XHRcdGRvY3VtZW50W2ZzQXBpLmV4aXRGdWxsc2NyZWVuXSgpO1xuXHRcdH0gZWxzZSBpZiAodGhpcy52aWRlby5zdXBwb3J0c0Z1bGxTY3JlZW4oKSkge1xuXHRcdFx0dGhpcy52aWRlby5leGl0RnVsbHNjcmVlbigpO1xuXHRcdH1cblxuXHRcdHRoaXMudHJpZ2dlcignZnVsbHNjcmVlbmNoYW5nZScsIGZhbHNlKTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIFRvZ2dsZSBmdWxsc2NyZWVuXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBmaXJlcyBQbGF5ZXIjZnVsbHNjcmVlbmNoYW5nZVxuXHQgKi9cblx0dG9nZ2xlRnVsbHNjcmVlbigpIHtcblx0XHRpZih0aGlzLnZpZXcgPT09ICdmdWxsc2NyZWVuJykge1xuXHRcdFx0dGhpcy5leGl0RnVsbHNjcmVlbigpXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucmVxdWVzdEZ1bGxzY3JlZW4oKVxuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgQ29udHJvbENvbGxlY3Rpb24gb2YgUGxheWVyIGJ5IG5hbWUgKGUueCAnY29tbW9uJywgJ2Z1bGxzY3JlZW4nKVxuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSAtIE5hbWUgb2YgQ29udHJvbENvbGxlY3Rpb25cblx0ICogQHJldHVybnMge0NvbnRyb2xDb2xsZWN0aW9ufVxuXHQgKi9cblx0Z2V0Q29udHJvbHMobmFtZSkge1xuXHRcdHJldHVybiB0aGlzLmNvbnRyb2xzW25hbWVdO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybiB0aGUgd2lkdGggb2YgcGxheWVyLlxuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAcmV0dXJucyB7TnVtYmVyfSBXaWR0aCBpbiBweFxuXHQgKi9cblx0Z2V0V2lkdGgoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudC53aWR0aCgpXG5cdH1cblxuXHQvKipcblx0ICogQ29tcGxldGUgdGhlIHNlY3Rpb25zLCBieSB0aGUgYWRkaXRpb25hbCBmaWVsZCAnZW5kJyBpbiBlYWNoIHNlY3Rpb25cblx0ICpcblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBzZWN0aW9ucyAtIFNlY3Rpb25zXG5cdCAqIEByZXR1cm5zIHtPYmplY3R9IE5ldyBzZWN0aW9uc1xuXHQgKi9cblx0X2NvbXBsZXRlU2VjdGlvbnMoc2VjdGlvbnMpIHtcblx0XHRpZiAoc2VjdGlvbnMgPT0gbnVsbCB8fCBzZWN0aW9ucy5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVyblxuXHRcdH1cblx0XHRsZXQgbmV3U2VjdGlvbnMgPSBbXS5jb25jYXQoc2VjdGlvbnMpXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBuZXdTZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuXHRcdFx0bGV0IGVuZFNlY3Rpb247XG5cdFx0XHRpZiAoaSA8IChuZXdTZWN0aW9ucy5sZW5ndGggLSAxKSkge1xuXHRcdFx0XHRlbmRTZWN0aW9uID0gbmV3U2VjdGlvbnNbaSsxXS5iZWdpblxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZW5kU2VjdGlvbiA9IHRoaXMudmlkZW8uZHVyYXRpb247XG5cdFx0XHR9XG5cdFx0XHRuZXdTZWN0aW9uc1tpXS5lbmQgPSBlbmRTZWN0aW9uO1xuXHRcdH1cblx0XHRyZXR1cm4gbmV3U2VjdGlvbnM7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGFuZCBzZXQgdGhlIGN1cnJlbnQgcGxheWJhY2sgcG9zaXRpb24gaW4gdGhlIGF1ZGlvL3ZpZGVvIChpbiBzZWNvbmRzKVxuXHQgKiBHZXR0ZXIgYW5kIHNldHRlclxuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAbWVtYmVyb2YhIFBsYXllciNcblx0ICogQHR5cGUge051Ym1lcn1cblx0ICovXG5cdGdldCBjdXJyZW50VGltZSgpIHtcblx0XHRyZXR1cm4gdGhpcy52aWRlby5jdXJyZW50VGltZTtcblx0fVxuXG5cdHNldCBjdXJyZW50VGltZSh2YWx1ZSkge1xuXHRcdHRoaXMudmlkZW8uY3VycmVudFRpbWUgPSB2YWx1ZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHRoZSBsZW5ndGggb2YgdGhlIGN1cnJlbnQgYXVkaW8vdmlkZW8gKGluIHNlY29uZHMpXG5cdCAqIEdldHRlclxuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAbWVtYmVyb2YhIFBsYXllciNcblx0ICogQHR5cGUge051Ym1lcn1cblx0ICovXG5cdGdldCBkdXJhdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy52aWRlby5kdXJhdGlvbjtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHdoZXRoZXIgdGhlIHBsYXliYWNrIG9mIHRoZSBhdWRpby92aWRlbyBoYXMgZW5kZWQgb3Igbm90XG5cdCAqIEdldHRlclxuXHQgKlxuXHQgKiBAbWVtYmVyb2YhIFBsYXllciNcblx0ICogQHR5cGUge0Jvb2xlYW59XG5cdCAqL1xuXHRnZXQgZW5kZWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMudmlkZW8uZW5kZWQ7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyBhbmQgc2V0IHdoZXRoZXIgdGhlIHBsYXliYWNrIG9mIHRoZSBhdWRpby92aWRlbyBoYXMgZW5kZWQgb3Igbm90XG5cdCAqIEdldHRlciBhbmQgc2V0dGVyXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBtZW1iZXJvZiEgUGxheWVyI1xuXHQgKiBAdHlwZSB7TWVkaWFFcnJvcnxTdHJpbmd9XG5cdCAqIEBmaXJlcyBQbGF5ZXIjZXJyb3Jcblx0ICovXG5cdGdldCBlcnJvcigpIHtcblx0XHRyZXR1cm4gdGhpcy5fZXJyb3IgfHwgbnVsbDtcblx0fVxuXG5cdHNldCBlcnJvcih2YWx1ZSkge1xuXHRcdGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuXHRcdFx0dGhpcy5fZXJyb3IgPSBudWxsO1xuXHRcdFx0dGhpcy5yZW1vdmVDbGFzcygnbGVwbGF5ZXItLWVycm9yJyk7XG5cdFx0XHRpZih0aGlzLmVycm9yRGlzcGxheSkge1xuXHRcdFx0XHR0aGlzLmVycm9yRGlzcGxheS5lbGVtZW50LmhpZGUoKVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXHRcdHRoaXMuX2Vycm9yID0gbmV3IE1lZGlhRXJyb3IodmFsdWUpO1xuXG5cdFx0dGhpcy5hZGRDbGFzcygnbGVwbGF5ZXItLWVycm9yJyk7XG5cblx0XHQvKipcblx0XHQgKiBlcnJvciBldmVudFxuXHRcdCAqXG5cdFx0ICogQGV2ZW50IFBsYXllciNlcnJvclxuXHRcdCAqIEBwcm9wZXJ0eSB7TWVkaWFFcnJvcn0gZXJyb3Jcblx0XHQgKiBAZXhhbXBsZVxuXHRcdCAqIGNvbnN0IHBsYXllciA9IG5ldyBQbGF5ZXIoJCgnI3ZpZGVvJyksIG9wdGlvbnMpO1xuXHRcdCAqIHBsYXllci5vbignZXJyb3InLCAoZSwgZGF0YSkgPT4gY29uc29sZS5lcnJvcihkYXRhLmVycm9yKSk7XG5cdFx0ICovXG5cdFx0dGhpcy50cmlnZ2VyKCdlcnJvcicsIHsgZXJyb3IgOiB0aGlzLl9lcnJvcn0pO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRnZXQgcmF0ZSgpIHtcblx0XHRyZXR1cm4gdGhpcy52aWRlby5yYXRlO1xuXHR9XG5cblx0c2V0IHJhdGUodmFsdWUpIHtcblx0XHR0aGlzLnZpZGVvLnJhdGUgPSB2YWx1ZTtcblx0fVxuXG5cdGdldCBwYXVzZWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMudmlkZW8ucGF1c2VkO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybiB0aGUgaGVpZ2h0IG9mIHBsYXllci4gSWYgeW91IHdhbnQgZ2V0IGhlaWdodCBvbmx5IG9mIHZpZGVvIGVsZW1lbnQsIHVzZSB0aGlzLnZpZGVvLmhlaWdodCBvciB3aGF0ZXZlclxuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAdHlwZSB7TnVtYmVyfVxuXHQgKiBAbWVtYmVyb2YhIFBsYXllciNcblx0ICovXG5cdGdldCBoZWlnaHQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudC5oZWlnaHQoKVxuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybiB1bm5lY2Vzc2FyeSB2aWRlbyBoZWlndGhcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHR5cGUge051bWJlcn1cblx0ICogQG1lbWJlcm9mISBQbGF5ZXIjXG5cdCAqL1xuXHRnZXQgdmlkZW9IZWlnaHQoKSB7XG5cdFx0cmV0dXJuIHRoaXMudmlkZW8uaGVpZ2h0O1xuXHR9XG5cblxuXHQvKipcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHR5cGUge0Jvb2xlYW59XG5cdCAqIEBtZWJtZXJvZiEgUGxheWVyI1xuXHQgKi9cblx0Z2V0IHVzZXJBY3RpdmUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3VzZXJBY3RpdmUgfHwgZmFsc2U7XG5cdH1cblxuXHRzZXQgdXNlckFjdGl2ZSh2YWx1ZSkge1xuXHRcdGlmKHZhbHVlICE9PSB0aGlzLmdldFVzZXJBY3RpdmUpIHtcblx0XHRcdHRoaXMuX3VzZXJBY3RpdmUgPSB2YWx1ZTtcblx0XHRcdHRoaXMudG9nZ2xlQ2xhc3MoJ2xlcGxheWVyLS11c2VyLWFjdGl2ZScsIHZhbHVlKTtcblx0XHRcdC8qKlxuXHRcdFx0ICogVXNlciBhY3RpdmUgZXZlbnRcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI3VzZXJhY3RpdmVcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy50cmlnZ2VyKCd1c2VyYWN0aXZlJyk7XG5cdFx0fVxuXHR9XG5cblxuXHQvKipcblx0ICogU2V0IGFuZCBnZXQgcGxheWVyIHZpZXcuIFZpZXcgQ2FuIGJlICdjb21tb24nLCAnZnVsbHNjcmVlbicsICdtaW5pJ3dcblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHR5cGUge1N0cmluZ31cblx0ICogQG1lbWJlcm9mISBQbGF5ZXIjXG5cdCAqL1xuXHRnZXQgdmlldygpIHtcblx0XHRyZXR1cm4gdGhpcy5fdmlldztcblx0fVxuXG5cdHNldCB2aWV3KHZpZXcpIHtcblx0XHRpZih0aGlzLnZpZXcgIT0gbnVsbCkge1xuXHRcdFx0dGhpcy5yZW1vdmVDbGFzcyhgbGVwbGF5ZXItLSR7dGhpcy52aWV3fWApO1xuXHRcdFx0dGhpcy50cmlnZ2VyKGBkZWx2aWV3LiR7dGhpcy52aWV3fWApO1xuXHRcdH1cblxuXHRcdHRoaXMuX3ZpZXcgPSB2aWV3O1xuXHRcdHRoaXMuZWxlbWVudC5hZGRDbGFzcyhgbGVwbGF5ZXItLSR7dmlld31gKVxuXHRcdHRoaXMudHJpZ2dlcihgc2V0dmlldy4ke3ZpZXd9YCk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8qKlxuXHQgKiBSZW1vdmUgdW5uZWNlc3NhcnkgYXR0cmlidXRlcywgYW5kIHNldCBzb21lIGF0dHJzIGZyb20gb3B0aW9ucyAobG9vcCwgcG9zdGVyIGV0Yy4uLikuIENyZWF0ZSBtYWluIERPTSBvYmplY3RzXG5cdCAqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHRjb25zdCBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuXHRcdGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9lbGVtZW50O1xuXG5cdFx0dGhpcy5lbGVtZW50ID0gY3JlYXRlRWwoJ2RpdicpO1xuXG5cblx0XHR0aGlzLmVsZW1lbnQgPSB0aGlzLmVsZW1lbnRcblx0XHRcdC5hZGRDbGFzcygnbGVwbGF5ZXInKVxuXHRcdFx0LmF0dHIoJ3RhYmluZGV4JywgMClcblx0XHRcdC5jc3MoJ3dpZHRoJywgb3B0aW9ucy53aWR0aCAmJiAnMTAwJScpXG5cdFx0XHQuY3NzKCdtYXgtd2lkdGgnLCBvcHRpb25zLndpZHRoKVxuXG5cdFx0LyoqXG5cdFx0ICogRXJyb3IgZGlzcGxheSBjb21wb25lbnQuXG5cdFx0ICpcblx0XHQgKiBAdHlwZSB7RXJyb3JEaXNwbGF5fVxuXHRcdCAqIEBtZW1iZXJvZiEgUGxheWVyI1xuXHRcdCAqL1xuXHRcdHRoaXMuZXJyb3JEaXNwbGF5ID0gbmV3IEVycm9yRGlzcGxheSh0aGlzKTtcblxuXG5cdFx0LyoqXG5cdFx0ICogUGxheSBidXR0b24gY29tcG9uZW50LlxuXHRcdCAqXG5cdFx0ICogQHR5cGUge1BsYXlCdXR0b259XG5cdFx0ICogQG1lbWJlcm9mISBQbGF5ZXIjXG5cdFx0ICovXG5cdFx0dGhpcy5wbGF5QnV0dG9uID0gbmV3IFBsYXlCdXR0b24odGhpcyk7XG5cblx0XHQvLyBUT0RPOiDQktGL0L3QtdGB0YLQuCDRjdGC0L4g0LIg0L7RgtC00LXQu9GM0L3QtdGL0Lkg0LrQvtC80L/QvtC90LXQvdGCXG5cdFx0dGhpcy5sb2FkZXIgPSAkKCc8ZGl2IC8+Jylcblx0XHRcdC5hZGRDbGFzcygnbGVwbGF5ZXItbG9hZGVyLWNvbnRhaW5lcicpXG5cdFx0XHQuYXBwZW5kKG5ldyBJY29uKHRoaXMsIHtcblx0XHRcdFx0aWNvbk5hbWUgOiAncmVmcmVzaCcsXG5cdFx0XHRcdGNsYXNzTmFtZSA6ICdsZXBsYXllci1sb2FkZXItY29udGFpbmVyX19pY29uJ1xuXHRcdFx0fSkuZWxlbWVudCk7XG5cblxuXHRcdC8qKlxuXHRcdCAqIFNwbGFzaCBpY29uIGNvbXBvbmVudC5cblx0XHQgKlxuXHRcdCAqIEB0eXBlIHtTcGxhc2hJY29ufVxuXHRcdCAqIEBtZW1iZXJvZiEgUGxheWVyI1xuXHRcdCAqL1xuXHRcdHRoaXMuc3BsYXNoSWNvbiA9IG5ldyBTcGxhc2hJY29uKHRoaXMpO1xuXG5cdFx0dGhpcy52aWRlb0NvbnRhaW5lciA9IGNyZWF0ZUVsKCdkaXYnLCB7XG5cdFx0XHRjbGFzc05hbWUgOiAnbGVwbGF5ZXItdmlkZW8nXG5cdFx0fSlcblx0XHQuYXBwZW5kKHRoaXMuZXJyb3JEaXNwbGF5LmVsZW1lbnQpXG5cdFx0LmFwcGVuZCh0aGlzLnBsYXlCdXR0b24uZWxlbWVudClcblx0XHQuYXBwZW5kKHRoaXMubG9hZGVyKVxuXHRcdC5hcHBlbmQodGhpcy5zcGxhc2hJY29uLmVsZW1lbnQpXG5cblx0XHR0aGlzLnBvc3RlciA9IG5ldyBQb3N0ZXIodGhpcyk7XG5cdFx0dGhpcy52aWRlb0NvbnRhaW5lci5hcHBlbmQodGhpcy5wb3N0ZXIuZWxlbWVudCk7XG5cblxuXHRcdGNvbnN0IGxhc3RUaW1lciA9IG5ldyBUaW1lKHRoaXMsIHtcblx0XHRcdGZuIDogKHBsYXllcikgPT4ge1xuXHRcdFx0XHRjb25zdCB2aWRlbyA9IHBsYXllci52aWRlbztcblx0XHRcdFx0cmV0dXJuIHNlY29uZHNUb1RpbWUodmlkZW8uZHVyYXRpb24gLSB2aWRlby5jdXJyZW50VGltZSk7XG5cdFx0XHR9XG5cdFx0fSlcblxuXHRcdGlmKHRoaXMub3B0aW9ucy52aWRlb0luZm8pIHtcblx0XHRcdGNvbnNvbGUud2Fybignb3B0aW9ucy52aWRlb0luZm8gaXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBpc3RlYWQgb3B0aW9ucy5kZXNjcmlwdGlvbicpO1xuXHRcdH1cblxuXHRcdHRoaXMuaW5mb0VsZW1lbnQgPSBjcmVhdGVFbCgnZGl2Jywge1xuXHRcdFx0Y2xhc3NOYW1lIDogJ2xlcGxheWVyX19pbmZvJ1xuXHRcdH0pXG5cdFx0LmFwcGVuZChjcmVhdGVFbCgnZGl2Jywge1xuXHRcdFx0Y2xhc3NOYW1lIDogJ2xlcGxheWVyX190aXRsZScsXG5cdFx0XHRodG1sIDogdGhpcy5vcHRpb25zLnRpdGxlIHx8IFwiXCJcblx0XHR9KSlcblx0XHQuYXBwZW5kKGNyZWF0ZUVsKCdkaXYnLCB7XG5cdFx0XHRjbGFzc05hbWUgOiAnbGVwbGF5ZXJfX3ZpZGVvLWluZm8nLFxuXHRcdFx0aHRtbCA6IHRoaXMub3B0aW9ucy5kZXNjcmlwdGlvbiB8fCB0aGlzLm9wdGlvbnMudmlkZW9JbmZvIHx8IFwiXCJcblx0XHR9KSlcblx0XHQuYXBwZW5kKGNyZWF0ZUVsKCdkaXYnLCB7XG5cdFx0XHRjbGFzc05hbWUgOiAnbGVwbGF5ZXJfX2xhc3QnLFxuXHRcdFx0aHRtbCA6IGDQktC40LTQtdC+INC30LDQutC+0L3Rh9C40YLRgdGPINGH0LXRgNC10LcgYCxcblx0XHR9KS5hcHBlbmQobGFzdFRpbWVyLmVsZW1lbnQpKVxuXG5cdFx0dGhpcy5pbm5lckVsZW1lbnQgPSAkKCc8ZGl2IC8+Jylcblx0XHRcdC5hZGRDbGFzcygnbGVwbGF5ZXJfX2lubmVyJylcblx0XHRcdC5hcHBlbmQodGhpcy52aWRlb0NvbnRhaW5lcilcblx0XHRcdC5hcHBlbmQodGhpcy5pbmZvRWxlbWVudClcblxuXHRcdHRoaXMuZWxlbWVudCA9IHRoaXMuZWxlbWVudFxuXHRcdFx0LmFwcGVuZCh0aGlzLmlubmVyRWxlbWVudClcblxuXHRcdHRoaXMuYWRkQ2xhc3MoJ2xlcGxheWVyLS1wYXVzZWQnKTtcblx0XHR0aGlzLmFkZENsYXNzKCdsZXBsYXllci0tdmlyZ2luJyk7XG5cblx0XHRpZihJU19JUEhPTkUpIHtcblx0XHRcdHRoaXMuYWRkQ2xhc3MoJ2xlcGxheWVyLS1pcGhvbmUnKTtcblx0XHR9XG5cblx0XHRpZihJU19BTkRST0lEKSB7XG5cdFx0XHR0aGlzLmFkZENsYXNzKCdsZXBsYXllci0tYW5kcm9pZCcpO1xuXHRcdH1cblxuXHRcdGlmKElTX01PQklMRSkge1xuXHRcdFx0dGhpcy5hZGRDbGFzcygnbGVwbGF5ZXItLW1vYmlsZScpO1xuXHRcdH1cblxuXG5cblx0XHRpZihvcHRpb25zLnNlY3Rpb25Db250YWluZXIpIHtcblx0XHRcdHRoaXMuc2VjdGlvbnNDb250YWluZXIgPSAkKG9wdGlvbnMuc2VjdGlvbkNvbnRhaW5lcik7XG5cdFx0fVxuXG5cdFx0ZWxlbWVudC5iZWZvcmUodGhpcy5lbGVtZW50KTtcblx0XHR0aGlzLnZpZGVvQ29udGFpbmVyLmFwcGVuZChlbGVtZW50KTtcblxuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQ7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IG9wdGlvbnMgZnJvbSB2aWRlbydzIGF0dHJpYnV0ZSAoIGhlaWdodCwgd2lkdGgsIHBvc3RlciwgcHJlbG9hZCBldGMuLi4pXG5cdCAqIEdldCBzb3VyY2UgdmlkZW8gZnJvbSBzcmMgYXR0ciBvciA8c291cmNlPiBlbGVtZW50IHdpdGggZGF0YSBhdHRyICdkYXRhLXF1YWxpdHknXG5cdCAqIEFsc28gZ2V0IHNvdXJjZXMgZm9yIGRpZmZlcmVudCBxdWFsaXR5IGZyb20gPHNvdXJjZT4gZWxlbWVudCB3aXRoIGRhdGEgYXR0ciAnZGF0YS1xdWFsaXR5J1xuXHQgKlxuXHQgKiBAYWNjZXNzIHByaXZhdGVcblx0ICogQHJldHVybnMge09iamVjdH0gb3B0aW9uc1xuXHQgKi9cblx0X29wdGlvbnNGcm9tRWxlbWVudCgpIHtcblx0XHQvLyBDb3B5IHZpZGVvIGF0dHJzIHRvIHRoZSBvcGl0b25zXG5cdFx0Y29uc3QgIGVsZW1lbnQgPSB0aGlzLl9lbGVtZW50O1xuXHRcdGlmIChlbGVtZW50ID09IG51bGwgfHwgZWxlbWVudC5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybiB7fVxuXHRcdH1cblxuXHRcdGxldCBhdHRyT3B0aW9ucyA9IFtcblx0XHRcdCdoZWlnaHQnLFxuXHRcdFx0J3dpZHRoJyxcblx0XHRcdCdwb3N0ZXInLFxuXHRcdFx0J2F1dG9wbGF5Jyxcblx0XHRcdCdsb29wJyxcblx0XHRcdCdtdXRlZCcsXG5cdFx0XHQncHJlbG9hZCcsXG5cdFx0XVxuXHRcdC5yZWR1Y2UoKG9iaiwgaXRlbSkgPT4ge1xuXHRcdFx0Y29uc3QgdmFsID0gZWxlbWVudC5hdHRyKGl0ZW0pO1xuXHRcdFx0aWYodmFsICE9IG51bGwpIHtcblx0XHRcdFx0b2JqW2l0ZW1dID0gZWxlbWVudC5hdHRyKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG9iajtcblx0XHR9LCB7fSk7XG5cblx0XHRhdHRyT3B0aW9ucy5zb3VyY2VzID0gW107XG5cblx0XHQvLyBTcmMgaXQgaXMgbWFpbiBzb3VyY2UsIHRoYXQgd2lsbCBiZSBsb2FkXG5cdFx0aWYoZWxlbWVudC5hdHRyKCdzcmMnKSkge1xuXHRcdFx0YXR0ck9wdGlvbnMuc3JjID0ge1xuXHRcdFx0XHR1cmwgOiBlbGVtZW50LmF0dHIoJ3NyYycpLFxuXHRcdFx0XHR0aXRsZSA6IGVsZW1lbnQuYXR0cignZGF0YS1xdWFsaXR5JykgfHwgZWxlbWVudC5hdHRyKCd0aXRsZScpIHx8ICdkZWZhdWx0J1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIENvcHkgc291cmNlcyBmcm9tIEhUTUw1IHNvdXJjZSBlbGVtZW50IHdpdGggZGF0YS1xdWFsaXR5IGF0dHJcblx0XHQvLyBJZiBkYXRhLXF1YWxpdHkgYXR0ciBkb2VzIG5vdCBleGlzdCAtIG5vXG5cdFx0ZWxlbWVudC5maW5kKCdzb3VyY2UnKS5lYWNoKChpLCBpdGVtKSA9PiB7XG5cdFx0XHRpdGVtID0gJChpdGVtKTtcblx0XHRcdGlmKCFpdGVtLmF0dHIoJ2RhdGEtcXVhbGl0eScpKSB7XG5cdFx0XHRcdHJldHVyblxuXHRcdFx0fVxuXHRcdFx0YXR0ck9wdGlvbnMuc291cmNlcyA9IGF0dHJPcHRpb25zLnNvdXJjZXMuY29uY2F0KHtcblx0XHRcdFx0dXJsIDogaXRlbS5hdHRyKCdzcmMnKSxcblx0XHRcdFx0dGl0bGUgOiBpdGVtLmF0dHIoJ2RhdGEtcXVhbGl0eScpIHx8IGl0ZW0uYXR0cigndGl0bGUnKSB8fCAnZGVmYXVsdCdcblx0XHRcdH0pXG5cblx0XHR9KTtcblxuXHRcdHJldHVybiBhdHRyT3B0aW9ucztcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm4gYSBuYW1lIG9mIGljb24uIElmIGxlc3MgdGhlbiAwLjEgcmV0dXJuIHZvbHVtZS1vZmYsXG5cdCAqIGlmIGxlc3MgdGhlbiAwLjUgcmV0dXJuIHZvbHVtZSBkb3duLCBlbHNlIHJldHVybiB2b2x1bWUtdXBcblx0ICpcblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZSBWb2x1bWUgdmFsdWVcblx0ICogQHJldHVybnMge1N0cmluZ30gSWNvbiBuYW1lXG5cdCAqL1xuXHRjYWxjVm9sdW1lSWNvbih2YWx1ZSkge1xuXHRcdGlmKHZhbHVlID09IG51bGwpIHtcblx0XHRcdHZhbHVlID0gdGhpcy52aWRlby52b2x1bWU7XG5cdFx0fVxuXHRcdGNvbnN0IHZvbHVtZSA9IHZhbHVlO1xuXG5cdFx0aWYgKHZvbHVtZSA8IHRoaXMub3B0aW9ucy52b2x1bWUubXV0ZWxpbWl0KSB7XG5cdFx0XHRyZXR1cm4gJ3ZvbHVtZS1vZmYnO1xuXHRcdH0gZWxzZSBpZiAodmFsdWUgPCAwLjUpIHtcblx0XHRcdHJldHVybiAndm9sdW1lLWRvd24nO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gJ3ZvbHVtZS11cCc7XG5cdFx0fVxuXHR9XG5cblx0dG9nZ2xlU2VjdGlvbnMoZmxhZykge1xuXHRcdGlmKHRoaXMuc2VjdGlvbnMpIHtcblx0XHRcdHRoaXMuc2VjdGlvbnMudmlzaWJsZSA9IGZsYWc7XG5cdFx0fVxuXHRcdGlmKHRoaXMub3V0c2lkZVNlY3Rpb25zKSB7XG5cdFx0XHR0aGlzLm91dHNpZGVTZWN0aW9ucy52aXNpYmxlID0gZmxhZztcblx0XHR9XG5cdH1cblxuXG5cblx0LyoqXG5cdCAqIE1lcmdlIGRlZmF1bHRPcHRpb25zLCBwcmVzZXRPcHRpb25zIHdpdGggYXR0ck9wdGlvbnMgYW5kIHVzZXIncyBvcHRpb25zO1xuXHQgKlxuXHQgKiBBbmQgY29tcGxlbWVudCB0d28gb2JqZWN0czogY29udHJvbHMgYW5kIGV4Y2x1ZGVDb250cm9sc1xuXHQgKlxuXHQgKiBAYWNjZXNzIHByaXZhdGVcblx0ICovXG5cdF9pbml0T3B0aW9ucygpIHtcblx0XHRjb25zdCBhdHRyT3B0aW9ucyA9IHRoaXMuX29wdGlvbnNGcm9tRWxlbWVudCgpO1xuXHRcdGxldCBwcmVzZXRPcHRpb25zID0ge307XG5cblx0XHRpZiAodGhpcy5fdXNlck9wdGlvbnMucHJlc2V0ICYmIFBsYXllci5nZXRQcmVzZXQodGhpcy5fdXNlck9wdGlvbnMucHJlc2V0KSkge1xuXHRcdFx0cHJlc2V0T3B0aW9ucyA9IFBsYXllci5nZXRQcmVzZXQodGhpcy5fdXNlck9wdGlvbnMucHJlc2V0KS5vcHRpb25zO1xuXHRcdH1cblxuXG5cdFx0Ly8gTWVyZ2UgZGVmYXVsdCBvcHRpb25zICsgcHJlc2V0IG9wdGlvbnMgKyB2aWRlbyBhdHRyaWJ1dHRzKyB1c2VyIG9wdGlvbnNcblx0XHR0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh0cnVlLCB7fSwgZGVmYXVsdE9wdGlvbnMsIHByZXNldE9wdGlvbnMsIGF0dHJPcHRpb25zLCB0aGlzLl91c2VyT3B0aW9ucyk7XG5cblx0XHRpZih0aGlzLm9wdGlvbnMuc291cmNlcyAmJiAhQXJyYXkuaXNBcnJheSh0aGlzLm9wdGlvbnMuc291cmNlcykpIHtcblx0XHRcdHRoaXMub3B0aW9ucy5zb3VyY2VzID0gW3RoaXMub3B0aW9ucy5zb3VyY2VzXVxuXHRcdH1cblxuXHRcdGlmKHR5cGVvZiB0aGlzLm9wdGlvbnMuc3JjID09PSAnc3RyaW5nJykge1xuXHRcdFx0dGhpcy5vcHRpb25zLnNyYyA9IHsgdXJsIDogdGhpcy5vcHRpb25zLnNyYyB9XG5cdFx0fVxuXG5cdFx0aWYodGhpcy5vcHRpb25zLnNyYyA9PSBudWxsICYmIHRoaXMub3B0aW9ucy5zb3VyY2VzLmxlbmd0aCA+IDApIHtcblx0XHRcdHRoaXMub3B0aW9ucy5zcmMgPSB0aGlzLm9wdGlvbnMuc291cmNlc1swXVxuXHRcdH1cblxuXG5cdFx0Ly8gR2VuZXJhdGUgYW5kcm9pZDpmdWxsc2NyZWVuLCBhbmRyb2lkOmNvbW1vbiBhbmQgZXRjIGNvbnRyb2xzIG9wdGlvbnNcblxuXG5cdFx0Ly8gTWVyZ2UgY29ycmVjdGx5IGNvbnRyb2xzLCB3aXRob3V0IGRlZXAgbWVyZ2Vcblx0XHR0aGlzLm9wdGlvbnMuY29udHJvbHMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdE9wdGlvbnMuY29udHJvbHMsIHByZXNldE9wdGlvbnMuY29udHJvbHMsIHRoaXMuX3VzZXJPcHRpb25zLmNvbnRyb2xzKTtcblxuXHRcdC8vIGV4Y2x1ZGUgY29udHJvbHMgb3B0aW9uXG5cdFx0Ly8gVE9ETyhhZGludmFkaW0pOlxuXHRcdC8vIFNldCBkZXByZWNldGVkIGZsYWcgZm9yIHRoaXMgb3B0aW9uO1xuXHRcdGZvciAoY29uc3QgbmFtZSBpbiB0aGlzLm9wdGlvbnMuZXhjbHVkZUNvbnRyb2xzKSB7XG5cdFx0XHRpZiAoIXRoaXMub3B0aW9ucy5leGNsdWRlQ29udHJvbHMuaGFzT3duUHJvcGVydHkobmFtZSkpIHJldHVybjtcblx0XHRcdGNvbnN0IGNvbnRyb2xDb2xsZWN0aW9uID0gdGhpcy5vcHRpb25zLmV4Y2x1ZGVDb250cm9sc1tuYW1lXTtcblx0XHRcdGNvbnRyb2xDb2xsZWN0aW9uLmZvckVhY2goKHJvdywgaW5kZXgpID0+IHtcblx0XHRcdFx0aWYgKHRoaXMub3B0aW9ucy5jb250cm9sc1tuYW1lXSAmJiB0aGlzLm9wdGlvbnMuY29udHJvbHNbbmFtZV1baW5kZXhdKSB7XG5cdFx0XHRcdFx0dGhpcy5vcHRpb25zLmNvbnRyb2xzW25hbWVdW2luZGV4XSA9IGV4Y2x1ZGVBcnJheSh0aGlzLm9wdGlvbnMuY29udHJvbHNbbmFtZV1baW5kZXhdLCByb3cpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdH1cblxuXHRcdGlmICh0aGlzLm9wdGlvbnMucHJlc2V0ICYmIFBsYXllci5nZXRQcmVzZXQodGhpcy5vcHRpb25zLnByZXNldCkpIHtcblx0XHRcdFBsYXllci5nZXRQcmVzZXQodGhpcy5vcHRpb25zLnByZXNldCkuaW5pdE9wdGlvbnMoKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQ3JlYXRlIGFuZCBpbml0IGFsbCBjb250cm9sc1xuXHQgKlxuXHQgKiBAYWNjZXNzIHByaXZhdGVcblx0ICovXG5cdF9pbml0Q29udHJvbHMoKSB7XG5cdFx0Zm9yIChjb25zdCBuYW1lIG9mIFsnY29tbW9uJywgJ2Z1bGxzY3JlZW4nXSkge1xuXHRcdFx0aWYgKCF0aGlzLm9wdGlvbnMuY29udHJvbHMuaGFzT3duUHJvcGVydHkobmFtZSkpIHJldHVybjtcblx0XHRcdGNvbnN0IGNvbnRyb2xDb2xsZWN0aW9uID0gbmV3IENvbnRyb2xDb2xsZWN0aW9uKHRoaXMsIHsgbmFtZSB9KTtcblxuXHRcdFx0dGhpcy5lbGVtZW50LmFwcGVuZChjb250cm9sQ29sbGVjdGlvbi5lbGVtZW50KTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5jb250cm9scy5jb21tb24gIT0gbnVsbCkge1xuXHRcdFx0dGhpcy5jb250cm9scy5jb21tb24uYWN0aXZlID0gdHJ1ZTtcblx0XHR9XG5cdH1cblxuXG5cdF9saXN0ZW5Ib3RLZXlzKCkge1xuXG5cdFx0Y29uc3QgaXNLZXlCaW5kaW5nID0gKGUsIGJpbmRpbmcpID0+IHtcblx0XHRcdHJldHVybiAoKGUud2hpY2ggPT09IGJpbmRpbmcua2V5KSB8fCAoZS5rZXkgPT09IGJpbmRpbmcua2V5KSkgJiZcblx0XHRcdFx0XHQoISFiaW5kaW5nLnNoaWZ0S2V5ID09PSBlLnNoaWZ0S2V5KSAmJlxuXHRcdFx0XHRcdCghIWJpbmRpbmcuY3RybEtleSA9PT0gZS5jdHJsS2V5KVxuXHRcdH1cblxuXHRcdHRoaXMuZWxlbWVudC5vbigna2V5ZG93bi5sZXBsYXllci5ob3RrZXknLCAoZSkgPT4ge1xuXHRcdFx0dGhpcy5vcHRpb25zLmtleUJpbmRpbmcuZm9yRWFjaChiaW5kaW5nID0+IHtcblxuXHRcdFx0XHRpZihpc0tleUJpbmRpbmcoZSwgYmluZGluZykpIHtcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0YmluZGluZy5mbih0aGlzKTtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblxuXHRcdFx0fSlcblx0XHR9KVxuXHR9XG5cblx0LyoqXG5cdCAqIEluaXQgc2VjdGlvbnMsIGdldCBhamF4IG9yIGpzb24gd2l0aCBzZWN0aW9ucyBkYXRhIGFuZCBjcmVhdGUgU2VjdGlvbnMgb2JqZWN0IGFuZCBhZGRlZCB0aGVtIHRvIHRoZSBET01cblx0ICpcblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqIEByZXR1cm5zIHtqcVByb21pc2V9IGpRdWVyeSBwcm9taXNlXG5cdCAqL1xuXHRfaW5pdFNlY3Rpb25zKCkge1xuXHRcdGNvbnN0IGRmZCA9ICQuRGVmZXJyZWQoKTtcblx0XHRpZiAodGhpcy5vcHRpb25zLmRhdGEgPT0gbnVsbCkge1xuXHRcdFx0ZGZkLnJlamVjdChudWxsKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmdldFNlY3Rpb25EYXRhKCkuZG9uZShzZWN0aW9ucyA9PiB7XG5cdFx0XHRcdHNlY3Rpb25zID0gWy4uLnNlY3Rpb25zXTtcblxuXHRcdFx0XHRjb25zdCBpc1NlY3Rpb25PdXRzaWRlID0gKHRoaXMuc2VjdGlvbnNDb250YWluZXIgJiYgdGhpcy5zZWN0aW9uc0NvbnRhaW5lci5sZW5ndGggPiAwKTtcblxuXHRcdFx0XHRpZiAoc2VjdGlvbnMgPT0gbnVsbCB8fCBzZWN0aW9ucy5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHRkZmQucmVqZWN0KG51bGwpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHNlY3Rpb25zID0gdGhpcy5fY29tcGxldGVTZWN0aW9ucyhzZWN0aW9ucyk7XG5cblx0XHRcdFx0dGhpcy5zZWN0aW9ucyA9IG5ldyBTZWN0aW9ucyh0aGlzLCB7XG5cdFx0XHRcdFx0aXRlbXMgOiBzZWN0aW9ucyxcblx0XHRcdFx0XHRmdWxsc2NyZWVuT25seSA6IGlzU2VjdGlvbk91dHNpZGUsXG5cdFx0XHRcdFx0aGlkZVNjcm9sbCA6IHRydWVcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0dGhpcy5pbm5lckVsZW1lbnQuYXBwZW5kKHRoaXMuc2VjdGlvbnMuZWxlbWVudCk7XG5cblx0XHRcdFx0aWYgKGlzU2VjdGlvbk91dHNpZGUpIHtcblx0XHRcdFx0XHR0aGlzLm91dHNpZGVTZWN0aW9ucyA9IG5ldyBTZWN0aW9ucyh0aGlzLCB7XG5cdFx0XHRcdFx0XHRpdGVtcyA6IHNlY3Rpb25zXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0dGhpcy5zZWN0aW9uc0NvbnRhaW5lci5hcHBlbmQodGhpcy5vdXRzaWRlU2VjdGlvbnMuZWxlbWVudCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZGZkLnJlc29sdmUoeyBpdGVtcyA6IHNlY3Rpb25zIH0pO1xuXHRcdFx0fSlcblx0XHR9XG5cblx0XHRyZXR1cm4gZGZkLnByb21pc2UoKVxuXHR9XG5cblx0LyoqXG5cdCAqIEZ1bmN0aW9uLCB0aGFuIGluaXQgYWxsIHBsdWdpbnMgZnJvbSBwbGF5ZXIgb3B0aW9ucy5cblx0ICogSWYgcGx1Z2luIGRvZXNuJ3QgZXhpc3QgdGhyb3cgYW4gZXJyb3Jcblx0ICpcblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqIEByZXR1cm5zIHtQbGF5ZXJ9IHRoaXNcblx0ICovXG5cdF9pbml0UGx1Z2lucygpIHtcblx0XHRpZiAodGhpcy5vcHRpb25zLnBsdWdpbnMpIHtcblx0XHRcdGZvciAoY29uc3QgbmFtZSBpbiB0aGlzLm9wdGlvbnMucGx1Z2lucykge1xuXHRcdFx0XHRpZighdGhpcy5vcHRpb25zLnBsdWdpbnMuaGFzT3duUHJvcGVydHkobmFtZSkpIHJldHVybjtcblx0XHRcdFx0Y29uc3QgcGx1Z2luT3B0aW9ucyA9IHRoaXMub3B0aW9ucy5wbHVnaW5zW25hbWVdO1xuXHRcdFx0XHRpZih0aGlzW25hbWVdKSB7XG5cdFx0XHRcdFx0aWYocGx1Z2luT3B0aW9ucykge1xuXHRcdFx0XHRcdFx0dGhpc1tuYW1lXShwbHVnaW5PcHRpb25zKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcihgUGx1Z2luICcke25hbWV9JyBkb2Vzbid0IGV4aXN0YCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cblx0LyoqXG5cdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHQgKi9cblx0X2xpc3RlblVzZXJBY3Rpdml0eSgpIHtcblx0XHRsZXQgbW91c2VJblByb2dyZXNzO1xuXHRcdGxldCBsYXN0TW92ZVg7XG5cdFx0bGV0IGxhc3RNb3ZlWTtcblxuXHRcdGNvbnN0IG9uTW91c2VNb3ZlID0gKGUpID0+IHtcblx0XHRcdGlmKGUuc2NyZWVuWCAhPT0gbGFzdE1vdmVYIHx8IGUuc2NyZWVuWSAhPT0gbGFzdE1vdmVZKSB7XG5cdFx0XHRcdGxhc3RNb3ZlWCA9IGUuc2NyZWVuWDtcblx0XHRcdFx0bGFzdE1vdmVZID0gZS5zY3JlZW5ZO1xuXHRcdFx0XHR0aGlzLl91c2VyQWN0aXZpdHkgPSB0cnVlXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y29uc3Qgb25Nb3VzZURvd24gPSAoZSkgPT4ge1xuXHRcdFx0dGhpcy5fdXNlckFjdGl2aXR5ID0gdHJ1ZVxuXG5cdFx0XHQvLyBXaGlsZSB1c2VyIGlzIHByZXNzaW5nIG1vdXNlIG9yIHRvdWNoLCBkaXNwYXRjaCB1c2VyIGFjdGl2aXR5XG5cdFx0XHRjbGVhckludGVydmFsKG1vdXNlSW5Qcm9ncmVzcyk7XG5cblx0XHRcdG1vdXNlSW5Qcm9ncmVzcyA9IHNldEludGVydmFsKCgpID0+IHtcblx0XHRcdFx0dGhpcy5fdXNlckFjdGl2aXR5ID0gdHJ1ZVxuXHRcdFx0fSwgMjUwKTtcblx0XHR9XG5cblx0XHRjb25zdCBvbk1vdXNlVXAgPSAoZSkgPT4ge1xuXHRcdFx0dGhpcy5fdXNlckFjdGl2aXR5ID0gdHJ1ZVxuXHRcdFx0Y2xlYXJJbnRlcnZhbChtb3VzZUluUHJvZ3Jlc3MpO1xuXHRcdH1cblxuXHRcdHRoaXMuZWxlbWVudC5vbignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xuXG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdtb3VzZWRvd24nLCBvbk1vdXNlRG93bik7XG5cblx0XHR0aGlzLmVsZW1lbnQub24oJ21vdXNldXAnLCBvbk1vdXNlVXApO1xuXG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdrZXlkb3duJywgKGUpID0+IHRoaXMuX3VzZXJBY3Rpdml0eSA9IHRydWUpO1xuXHRcdHRoaXMuZWxlbWVudC5vbigna2V5dXAnLCAoZSkgPT4gdGhpcy5fdXNlckFjdGl2aXR5ID0gdHJ1ZSk7XG5cblx0XHQvLyBTZWUgaHR0cDovL2Vqb2huLm9yZy9ibG9nL2xlYXJuaW5nLWZyb20tdHdpdHRlci9cblx0XHRsZXQgaW5hY3Rpdml0eVRpbWVvdXQ7XG5cdFx0Y29uc3QgZGVsYXkgPSB0aGlzLm9wdGlvbnMuaW5uYWN0aXZpdHlUaW1lb3V0O1xuXHRcdHNldEludGVydmFsKCgpID0+IHtcblx0XHRcdGlmICh0aGlzLl91c2VyQWN0aXZpdHkpIHtcblxuXHRcdFx0XHQvLyBSZXNldCB1c2VyIGFjdGl2dXR5IHRyYWNrZXJcblx0XHRcdFx0dGhpcy5fdXNlckFjdGl2aXR5ID0gZmFsc2U7XG5cblx0XHRcdFx0dGhpcy51c2VyQWN0aXZlID0gdHJ1ZTtcblxuXHRcdFx0XHRjbGVhclRpbWVvdXQoaW5hY3Rpdml0eVRpbWVvdXQpO1xuXG5cdFx0XHRcdGlmIChkZWxheSA+IDApIHtcblxuXHRcdFx0XHRcdGluYWN0aXZpdHlUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoIXRoaXMuX3VzZXJBY3Rpdml0eSkge1xuXHRcdFx0XHRcdFx0XHR0aGlzLnVzZXJBY3RpdmUgPSBmYWxzZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9LCBkZWxheSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LCAyNTApXG5cdH1cblxuXHQvKipcblx0ICogU3RvcCBzaG93aW5nIHNwaW5uZXIgYW5kIGNsZWFyIGRlbGF5IG9mIHNob3dpbmcgc3Bpbm5lclxuXHQgKlxuXHQgKiBAYWNjZXNzIHByaXZhdGVcblx0ICovXG5cdF9zdG9wV2F5dGluZygpIHtcblx0XHR0aGlzLl93YWl0aW5nVGltZW91dHMuZm9yRWFjaChpdGVtID0+IGNsZWFyVGltZW91dChpdGVtKSk7XG5cdFx0dGhpcy5fd2FpdGluZ1RpbWVvdXRzID0gW107XG5cdFx0dGhpcy5yZW1vdmVDbGFzcygnbGVwbGF5ZXItLXdhaXRpbmcnKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTaG93IHNwaW5uZXIgd2l0aCBkZWxheSBpbiAzMDBtc1xuXHQgKlxuXHQgKiBAYWNjZXNzIHByaXZhdGVcblx0ICovXG5cdF9zdGFydFdhaXRpbmcoKSB7XG5cdFx0dGhpcy5fd2FpdGluZ1RpbWVvdXRzLnB1c2goc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHR0aGlzLmFkZENsYXNzKCdsZXBsYXllci0td2FpdGluZycpO1xuXHRcdH0sIDMwMCkpO1xuXHR9XG5cblxuXHQvKipcblx0ICogT24gaW5pdGVkIHBsYXllciBldmVudCBoYW5kbGVyXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge1BsYXllckV2ZW50fSBlXG5cdCAqL1xuXHRfb25Jbml0ZWQoZSkge1xuXHRcdHRoaXMuYWRkQ2xhc3MoJ2xlcGxheWVyLS1pbml0ZWQnKTtcblxuXHRcdHRoaXMub3B0aW9ucy5vblBsYXllckluaXRlZC5jYWxsKHRoaXMsIGUpO1xuXHR9XG5cblxuXHQvKipcblx0ICogT24gY2xpY2sgdmlkZW8gZXZlbnQgaGFuZGxlci4gRm9jdXMgb24gdmlkZW8gYW5kIHRvZ2dsZVBsYXlcblx0ICpcblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqIEBwYXJhbSB7UGxheWVyRXZlbnR9IGVcblx0ICovXG5cdF9vbkNsaWNrKGUpIHtcblx0XHRjbGVhclRpbWVvdXQodGhpcy5fZGJsY2xpY2tUaW1lb3V0KTtcblx0XHRjb25zdCB0b2dnbGVQbGF5ID0gKCkgPT4ge1xuXHRcdFx0dGhpcy5fZGJsY2xpY2tUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdHRoaXMudmlkZW8uZWxlbWVudC5mb2N1cygpXG5cdFx0XHRcdHRoaXMudG9nZ2xlUGxheSgpO1xuXG5cdFx0XHR9LCAzMDApO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIFNlZSBMUExSLTI5MFxuXHRcdCAqIE9uIHRvdWNoIGRldmljZXMgaW4gZnVsbHNjcmVlbiBpZiB1c2VyIG5vdCBhY3RpdmUgd2UgZG9uJ3Qgc2hvdWxkIHRvZ2dsZVxuXHRcdCAqIEF0IGZpcnN0IHdlIHNob3cgaGltIGEgY29udHJvbHNcblx0XHQgKi9cblx0XHRpZihJU19UT1VDSCgpICYmIHRoaXMudmlldyA9PT0gJ2Z1bGxzY3JlZW4nKSB7XG5cdFx0XHRpZih0aGlzLnBsYXllci51c2VyQWN0aXZlKSB7XG5cdFx0XHRcdHRvZ2dsZVBsYXkoKVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0b2dnbGVQbGF5KClcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogT24gZGJsY2xpY2sgb24gdGhlIHZpZGVvIHBsYXllciBldmVudCBoYW5kbGVyXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge1BsYXllckV2ZW50fSBlXG5cdCAqL1xuXHRfb25EYmNsaWNrKGUpIHtcblx0XHRjbGVhclRpbWVvdXQodGhpcy5fZGJsY2xpY2tUaW1lb3V0KTtcblx0XHR0aGlzLnRvZ2dsZUZ1bGxzY3JlZW4oKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBPbiBmdWxsc2NyZWVuIGNoYW5nZSBwbGF5ZXIgZXZlbnQgaGFuZGxlclxuXHQgKlxuXHQgKiBAYWNjZXNzIHByaXZhdGVcblx0ICogQHBhcmFtIHtQbGF5ZXJFdmVudH0gZVxuXHQgKi9cblx0X29uRnVsbHNjcmVlbkNoYW5nZShlLCBpc0ZzKSB7XG5cdFx0aWYoaXNGcykge1xuXHRcdFx0dGhpcy52aWV3ID0gJ2Z1bGxzY3JlZW4nO1xuXG5cdFx0XHQvLyBIaWRlIHNlY3Rpb25zIGJ5IGRlZmF1bHQgb24gbW9iaWxlIGZ1bGxzY3JlZW5cblx0XHRcdGlmKElTX0FORFJPSUQpIHtcblx0XHRcdFx0dGhpcy5fbGFzdFNlY3Rpb25zVmFsdWUgPSB0aGlzLnNlY3Rpb25zLnZpc2libGU7XG5cdFx0XHRcdHRoaXMuc2VjdGlvbnMudmlzaWJsZSA9IGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLmZvY3VzKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMudmlldyA9ICdjb21tb24nO1xuXG5cdFx0XHRpZihJU19BTkRST0lEKSB7XG5cdFx0XHRcdHRoaXMuc2VjdGlvbnMudmlzaWJsZSA9IHRoaXMuX2xhc3RTZWN0aW9uc1ZhbHVlO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBQYXVzZSB2aWRlbyBvbiBleGl0IGZ1bGxzY3JlZWVuIG9uIG1vYmlsZVxuXHRcdFx0aWYoSVNfQU5EUk9JRF9QSE9ORSB8fCBJU19JUEhPTkUgfHwgSVNfSVBPRCkge1xuXHRcdFx0XHR0aGlzLnBhdXNlKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblxuXHQvKipcblx0ICogT24gcGxheSBldmVudCBoYW5kbGVyXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge1BsYXllckV2ZW50fSBlXG5cdCAqL1xuXHRfb25QbGF5KCkge1xuXHRcdHRoaXMuc3BsYXNoSWNvbi5zaG93KCdwbGF5Jyk7XG5cdH1cblxuXHQvKipcblx0ICogT24gcGF1c2UgcGxheWVyIGV2ZW50IGhhbmRsZXJcblx0ICogU2hvdyBwYXVzZSBpY29uIGluIHRoZSBjZW50ZXIgb2YgdmlkZW9cblx0ICpcblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqL1xuXHRfb25QYXVzZSgpIHtcblx0XHR0aGlzLnNwbGFzaEljb24uc2hvdygncGF1c2UnKTtcblx0fVxuXG5cdF9vbkVudGl0eUZ1bGxzY3JlbkNoYW5nZSgpIHtcblx0XHRjb25zdCBmc0FwaSA9IEZ1bGxzY3JlZW5BcGk7XG5cdFx0Y29uc3QgaXNGcyA9ICEhZG9jdW1lbnRbZnNBcGkuZnVsbHNjcmVlbkVsZW1lbnRdO1xuXHRcdHRoaXMudHJpZ2dlcignZnVsbHNjcmVlbmNoYW5nZScsIGlzRnMpO1xuXHR9XG5cbn1cblxuLyoqXG4gKiBTdGF0aWMgaGVscGVyIGZvciBjcmVhdGluZyBhIHBsdWdpbnMgZm9yIGxlcGxheWVyXG4gKlxuICogQGFjY2VzcyBwdWJsaWNcbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHBsdWdpblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gUGx1Z2luIGluaXQgZnVuY3Rpb25cbiAqXG4gKiBAZXhhbXBsZVxuICogUGxheWVyLnBsdWdpbignaGVsbG9Xb3JsZCcsIGZ1bmN0aW9uKHBsdWdpbk9wdGlvbnMpIHtcbiAqICAgIGNvbnN0IHBsYXllciA9IHRoaXM7XG4gKiAgICBwbGF5ZXIub24oJ2NsaWNrJywgKCkgPT4gY29uc29sZS5sb2coJ0hlbGxvIHdvcmxkJykpO1xuICogfSlcbiAqXG4gKi9cblBsYXllci5wbHVnaW4gPSBmdW5jdGlvbihuYW1lLCBmbikge1xuXHRQbGF5ZXIucHJvdG90eXBlW25hbWVdID0gZm47XG59XG5cbi8qKlxuICogR2V0IGJ5IG5hbWUgcmVnaXN0ZXJlZCBjb21wb25lbnRcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSAtIE5hbWUgb2YgY29tcG9uZW50XG4gKiBAcmV0dXJuIHtDb21wb25lbnR9XG4gKi9cblBsYXllci5nZXRDb21wb25lbnQgPSBDb21wb25lbnQuZ2V0Q29tcG9uZW50O1xuXG4vKipcbiAqIFJlZ2lzdGVyIGNvbXBvbmVudFxuICpcbiAqIEBhY2Nlc3MgcHVibGljXG4gKiBAc3RhdGljXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtDb21wb25lbnR9IGNvbXBvbmVudFxuICpcbiAqIEBleGFtcGxlXG4gKiBQbGF5ZXIucmVnaXN0ZXJDb21wb25lbnQoJ0Vycm9yRGlzcGxheScsIEVycm9yRGlzcGxheSk7XG4gKi9cblBsYXllci5yZWdpc3RlckNvbXBvbmVudCA9IENvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudDtcblxuLyoqXG4gKiBSZWdpc3RlciBjb250cm9sXG4gKlxuICogQGFjY2VzcyBwdWJsaWNcbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge0NvbnRyb2x9IGNvbnRyb2xcbiAqL1xuUGxheWVyLmdldENvbnRyb2wgPSBDb250cm9sLmdldENvbnRyb2w7XG5cbi8qKlxuICogR2V0IGJ5IG5hbWUgcmVnaXN0ZXJlZCBjb250cm9sXG4gKlxuICogQGFjY2VzcyBwdWJsaWNcbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJucyB7Q29udHJvbH1cbiAqXG4gKiBAZXhhbXBsZVxuICogUGxheWVyLnJlZ2lzdGVyQ29udHJvbCgnYmFja3dhcmQnLCBCYWNrd2FyZENvbnRyb2wpO1xuICovXG5QbGF5ZXIucmVnaXN0ZXJDb250cm9sID0gQ29udHJvbC5yZWdpc3RlckNvbnRyb2w7XG5cblxuLyoqXG4gKiBDb252ZXJ0IHNlY29uZHMgdG8gZm9ybWF0IHN0cmluZyAnaGg/Om1tOnNzJ1xuICpcbiAqIEBhY2Nlc3MgcHVibGljXG4gKiBAcGFyYW0ge051bWJlcn0gc2Vjb25kcyBTZWNvbmRzXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHNob3dIb3VycyBjb252ZXJ0IHRvIGZvcm1hdCAnaGg6bW06c3MnXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG5QbGF5ZXIuc2Vjb25kc1RvVGltZSA9IHNlY29uZHNUb1RpbWU7XG5cblxuLyoqXG4gKiBTdGF0aWMgaGVscGVyIGZvciBjcmVhdGluZyBhIHBsdWdpbnMgZm9yIGxlcGxheWVyXG4gKlxuICogQGFjY2VzcyBwdWJsaWNcbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHBsdWdpblxuICogQHBhcmFtIHtGdW5jdGlvbnxPYmplY3R9IGZuIFBsdWdpbiBpbml0IGZ1bmN0aW9uXG4gKlxuICogQGV4YW1wbGVcbiAqIFBsYXllci5wcmVzZXQoJ2NvbW1vbicsIHtcbiAqICAgICB3aWR0aCA6ICcxMDAlJyxcbiAqICAgICBwbHVnaW5zIDoge1xuICogICAgICAgICBtaW5pcGxheWVyIDogdHJ1ZVxuICogICAgIH1cbiAqIH0pO1xuICovXG5QbGF5ZXIucHJlc2V0ID0gZnVuY3Rpb24obmFtZSwgb2JqKSB7XG5cdGlmKHR5cGVvZiBvYmogPT09ICdvYmplY3QnKSB7XG5cdFx0UGxheWVyLl9wcmVzZXRzW25hbWVdID0gJC5leHRlbmQoe30sIHtcblx0XHRcdG9wdGlvbnMgOiB7fSxcblx0XHRcdGluaXRPcHRpb25zIDogbm9vcFxuXHRcdH0sIG9iaik7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9iaiA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFBsYXllci5fcHJlc2V0c1tuYW1lXSA9IG9iaigpO1xuXHR9XG59O1xuXG5cblBsYXllci5nZXRQcmVzZXQgPSBmdW5jdGlvbihuYW1lKSB7XG5cdGlmKFBsYXllci5fcHJlc2V0c1tuYW1lXSkge1xuXHRcdHJldHVybiBQbGF5ZXIuX3ByZXNldHNbbmFtZV07XG5cdH0gZWxzZSB7XG5cdFx0Y29uc29sZS5lcnJvcihgcHJlc2V0ICR7bmFtZX0gZG9lc24ndCBleGlzdGApO1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG59XG5cblxuUGxheWVyLl9wcmVzZXRzID0ge307XG5cblBsYXllci5Db29raWUgPSBDb29raWU7XG5cblBsYXllci5fbG9hZFNWR1Nwcml0ZSA9IGZ1bmN0aW9uKHN2Zykge1xuXHRjb25zdCBoaWRkZW5FbGVtZW50ID0gJCgnPGRpdi8+JykuaGlkZSgpO1xuXHQkKCdib2R5JykucHJlcGVuZChoaWRkZW5FbGVtZW50LmFwcGVuZChzdmcpKTtcblx0cmV0dXJuIGhpZGRlbkVsZW1lbnQ7XG59XG5cblBsYXllci5kZWZhdWx0U3ByaXRlID0gcmVxdWlyZSgnLi4vLi4vZGlzdC9zdmcvc3ZnLWRlZnMuc3ZnJyk7XG5cbi8qIGdsb2JhbCBWRVJTSU9OICovXG5QbGF5ZXIudmVyc2lvbiA9IFZFUlNJT047XG5cbndpbmRvdy4kLmZuLmxlUGxheWVyID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIG5ldyBQbGF5ZXIoJCh0aGlzKSwgb3B0aW9ucyk7XG5cdH0pO1xufTtcblxud2luZG93LiQubGVQbGF5ZXIgPSBQbGF5ZXI7XG5cbndpbmRvdy5sZVBsYXllciA9IFBsYXllcjtcblxuXG4vKipcbiAqIE1pbmkgUGxheWVyIHBsdWdpblxuICpcbiAqIEBwbHVnaW5cbiAqL1xuUGxheWVyLnBsdWdpbignbWluaXBsYXllcicsIGZ1bmN0aW9uKHBsdWdpbk9wdGlvbnMpIHtcblx0Y29uc3QgcGxheWVyID0gdGhpcztcblxuXHQvLyDQnNC10YDQttC40Lwg0YEgdGhpcy5vcHRpb25zLm1pbmlwbGF5ZXIsINGH0YLQvtCx0Ysg0L3QtSDRgdC70L7QvNCw0YLRjCDQvtCx0YDQsNGC0L3Rg9GOINGB0L7QstC80LXRgdGC0LjQvNC+0YHRjCwg0YLQsNC6INC60LDQuiDRgNCw0L3RjNGI0LVcblx0Ly8g0LzQuNC90LjQv9C70LXQtdGAINC90LUg0LHRi9C7INC/0LvQsNCz0LjQvdC+0Lwg0L/Qu9C10LXRgNCwLlxuXHRjb25zdCBvcHRpb25zID0gJC5leHRlbmQoe30sIHtcblx0XHR3aWR0aCA6ICcxMDAlJyxcblx0XHRvZmZzZXRTaG93IDogKHBsYXllcikgPT4ge1xuXHRcdFx0Y29uc3Qgb2Zmc2V0ID0gcGxheWVyLmVsZW1lbnQub2Zmc2V0KCkudG9wXG5cdFx0XHRcdCsgcGxheWVyLmVsZW1lbnQub3V0ZXJIZWlnaHQoKVxuXHRcdFx0XHQtIHBsYXllci5nZXRDb250cm9scygnY29tbW9uJykuZWxlbWVudC5oZWlnaHQoKTtcblxuXHRcdFx0cmV0dXJuIG9mZnNldDtcblx0XHR9XG5cdH0sIHRoaXMub3B0aW9ucy5taW5pcGxheWVyLCBwbHVnaW5PcHRpb25zKTtcblxuXHRjb25zdCBjb250cm9scyA9IG5ldyBDb250cm9sQ29sbGVjdGlvbih0aGlzLCB7XG5cdFx0bmFtZSA6ICdtaW5pJyxcblx0XHRjb250cm9scyA6IG9wdGlvbnMuY29udHJvbHMsXG5cdFx0Y29udHJvbE9wdGlvbnMgOiB7XG5cdFx0XHRjb250cm9sIDoge1xuXHRcdFx0XHRkaXNhYmxlIDogZmFsc2Vcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xuXG5cdC8vINCS0YHRgtCw0LLQu9GP0LXQvCDQsiBpbmZvRWxlbWVudCDQv9C+0LQgdGl0bGUg0LggZGVzY3JpcHRpb25cblx0dGhpcy5pbmZvRWxlbWVudC5hcHBlbmQoY29udHJvbHMuZWxlbWVudCk7XG5cblx0LyoqXG5cdCAqIFJldHVybiBvZmZzZXQgb24gb1kgLCB3aGVuIG1pbmlwbGF5ZXIgc2hvdWxkIHNob3dpbmcgb3IgaGlkaW5nXG5cdCAqXG5cdCAqIEByZXR1cm5zIHtOdW1iZXJ9XG5cdCAqL1xuXHRjb25zdCBvZmZzZXRTaG93ID0gKCkgPT4ge1xuXHRcdGlmICgkLmlzRnVuY3Rpb24ob3B0aW9ucy5vZmZzZXRTaG93KSkge1xuXHRcdFx0cmV0dXJuIG9wdGlvbnMub2Zmc2V0U2hvdyhwbGF5ZXIpO1xuXHRcdH1cblxuXHRcdHJldHVybiBvcHRpb25zLm9mZnNldFNob3dcblx0fVxuXG5cdGNvbnN0IGdldFdpZHRoID0gKCkgPT4ge1xuXHRcdHJldHVybiBvcHRpb25zLndpZHRoIHx8IHRoaXMuZWxlbWVudC53aWR0aCgpO1xuXHR9XG5cblxuXHR0aGlzLl91cGRhdGVNaW5pUGxheWVyID0gKGUsIGZvcmNlKSA9PiB7XG5cdFx0Y29uc3Qgc2Nyb2xsVG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuXG5cdFx0Ly8gQmVjYXVzZSBpbiBmb3JjZSB1cGRhdGUsIGZvciBub3JtYWxseSBjb3VudCBoZWlnaHQgYW5kIHBhZGRpbmdcblx0XHQvLyBtaW5pcGxheWVyIGJlZm9yZSB0aGUgc2hvdyBtdXN0IGZpcnN0IGJlIGhpZGRlblxuXHRcdGlmKGZvcmNlKSB7XG5cdFx0XHR0aGlzLmhpZGVNaW5pUGxheWVyKGZvcmNlKTtcblx0XHR9XG5cblx0XHRpZihzY3JvbGxUb3AgPiBvZmZzZXRTaG93KCkpIHtcblx0XHRcdHRoaXMuc2hvd01pbmlQbGF5ZXIoZm9yY2UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmhpZGVNaW5pUGxheWVyKCk7XG5cdFx0fVxuXHR9XG5cblx0dGhpcy5zaG93TWluaVBsYXllciA9IChmb3JjZSkgPT4ge1xuXHRcdGlmICghZm9yY2UgJiYgdGhpcy52aWV3ID09PSAnbWluaScpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBBZGRlZCBlbXB0eSBzcGFjZVxuXHRcdHRoaXMuZWxlbWVudC5jc3MoJ3BhZGRpbmctdG9wJywgdGhpcy52aWRlb0NvbnRhaW5lci5oZWlnaHQoKSk7XG5cblx0XHR0aGlzLnZpZXcgPSdtaW5pJztcblx0fVxuXG5cdHRoaXMuaGlkZU1pbmlQbGF5ZXIgPSAoZm9yY2UpID0+IHtcblx0XHRpZighZm9yY2UgJiYgdGhpcy52aWV3ICE9PSAnbWluaScpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy52aWV3ID0gJ2NvbW1vbic7XG5cdH1cblxuXHQkKHdpbmRvdykub24oJ3Njcm9sbCcsIHRoaXMuX3VwZGF0ZU1pbmlQbGF5ZXIuYmluZCh0aGlzKSk7XG5cdCQod2luZG93KS5vbigncmVzaXplJywgdGhpcy5fdXBkYXRlTWluaVBsYXllci5iaW5kKHRoaXMpKTtcblx0dGhpcy5vbignaW5pdGVkJywgKGUpID0+IHRoaXMuX3VwZGF0ZU1pbmlQbGF5ZXIoZSwgdHJ1ZSkpO1xuXG5cdHRoaXMub25TZXRWaWV3KCdtaW5pJywgKCkgPT4ge1xuXHRcdHRoaXMuaW5uZXJFbGVtZW50LmNzcygnbWF4LXdpZHRoJywgZ2V0V2lkdGgoKSk7XG5cdFx0dGhpcy5pbm5lckVsZW1lbnQuY3NzKCdoZWlnaHQnLCB0aGlzLnZpZGVvLmhlaWdodCk7XG5cdH0pO1xuXG5cdHRoaXMub25EZWxWaWV3KCdtaW5pJywgKCkgPT4ge1xuXHRcdHRoaXMuaW5uZXJFbGVtZW50LmNzcygnbWF4LXdpZHRoJywgJycpXG5cdFx0dGhpcy5pbm5lckVsZW1lbnQuY3NzKCdoZWlnaHQnLCAnJylcblxuXHRcdHRoaXMuZWxlbWVudC5jc3MoJ3BhZGRpbmctdG9wJywgJycpO1xuXHR9KTtcblxuXG5cdHRoaXMuX3VwZGF0ZU1pbmlQbGF5ZXIoKTtcbn0pO1xuXG5cblBsYXllci5wcmVzZXQoJ3ZwcycsIHJlcXVpcmUoJy4vcHJlc2V0cy92cHMuanMnKS5wcmVzZXQpO1xuUGxheWVyLnByZXNldCgnc2ltcGxlJywgcmVxdWlyZSgnLi9wcmVzZXRzL3NpbXBsZS5qcycpLnByZXNldCk7XG5QbGF5ZXIucHJlc2V0KCdzbXMnLCByZXF1aXJlKCcuL3ByZXNldHMvc21zLmpzJykucHJlc2V0KTtcblBsYXllci5wcmVzZXQoJ2NvbXByZXNzZWQnLCByZXF1aXJlKCcuL3ByZXNldHMvY29tcHJlc3NlZC5qcycpLnByZXNldCk7XG5QbGF5ZXIucHJlc2V0KCcyMDM1JywgcmVxdWlyZSgnLi9wcmVzZXRzLzIwMzUuanMnKS5wcmVzZXQpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBsYXllclxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9sZS1wbGF5ZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9ICQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCIkXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIENvbnRyb2wuanNcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgSWNvbiBmcm9tICcuL0ljb24nO1xuXG4vKipcbiAqIEBjbGFzcyBDb250cm9sXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIENvbnRyb2wncyBvcHRpb25zXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuaWNvbk5hbWVdIE5hbWUgb2YgY29udHJvbCdzIGljb24uIElmIGVtcHR5LCBjb250cm9sIHdpbGwgbm90IGhhdmUgYSBpY29uXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuY2xhc3NOYW1lXVxuICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLm5hbWVdXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuY29sbGVjdGlvbl1cbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy50aXRsZV0gQ29udG9ybCdzIHRvb2x0aXAsIHRpdGxlIGF0dHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtvcHRpb25zLm9uQ2xpY2tdIE9uIGNsaWNrIGV2ZW50IGhhbmRsZXJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuZGlzYWJsZT1mYWxzZV1cbiAqIEBwcm9wZXJ0eSB7SWNvbn0gaWNvbiBJY29uIGluIGNvbnRyb2wsIGlmIGl0IGlzIGV4aXN0XG4gKiBAZXh0ZW5kcyBDb21wb25lbnRcbiAqL1xuY2xhc3MgQ29udHJvbCBleHRlbmRzIENvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblx0XHR0aGlzLmVtaXRUYXBFdmVudHMoKTtcblx0XHR0aGlzLmRpc2FibGUgPSB0aGlzLm9wdGlvbnMuZGlzYWJsZSAhPSBudWxsPyB0aGlzLm9wdGlvbnMuZGlzYWJsZSA6IHRydWU7XG5cblx0XHR0aGlzLnBsYXllci5vbignaW5pdGVkJywgKGUpID0+IHtcblx0XHRcdHRoaXMuZGlzYWJsZSA9IHRoaXMub3B0aW9ucy5kaXNhYmxlICE9IG51bGw/IHRoaXMub3B0aW9ucy5kaXNhYmxlIDogZmFsc2U7XG5cdFx0fSlcblxuXHRcdHRoaXMuZWxlbWVudC5vbih7XG5cdFx0XHRjbGljayA6IHRoaXMub25DbGljay5iaW5kKHRoaXMpLFxuXHRcdFx0dGFwIDogdGhpcy5vbkNsaWNrLmJpbmQodGhpcyksXG5cdFx0fSk7XG5cblx0XHR0aGlzLnBsYXllci5vbignaW5pdGVkJywgdGhpcy5vblBsYXllckluaXRlZC5iaW5kKHRoaXMpKVxuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHRpZiAodGhpcy5vcHRpb25zLmljb25OYW1lKSB7XG5cdFx0XHR0aGlzLmljb24gPSBuZXcgSWNvbih0aGlzLnBsYXllciwge1xuXHRcdFx0XHRpY29uTmFtZSA6IHRoaXMub3B0aW9ucy5pY29uTmFtZVxuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdGxldCBhdHRycyA9IHtcblx0XHRcdHRpdGxlIDogdGhpcy5vcHRpb25zLnRpdGxlXG5cdFx0fVxuXHRcdHRoaXMuZWxlbWVudCA9ICQoYDwke3RoaXMub3B0aW9ucy50YWcgfHwgJ2J1dHRvbid9IC8+YClcblx0XHRcdC5hZGRDbGFzcyh0aGlzLmJ1aWxkQ1NTQ2xhc3MoKSlcblx0XHRcdC5hcHBlbmQodGhpcy5pY29uICYmIHRoaXMuaWNvbi5lbGVtZW50KVxuXHRcdFx0LmF0dHIoYXR0cnMpO1xuXG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudDtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGJ1aWxkQ1NTQ2xhc3MoKSB7XG5cdFx0bGV0IHJlc3VsdCA9IGBjb250cm9sICR7dGhpcy5vcHRpb25zLmNsYXNzTmFtZX0gJHtzdXBlci5idWlsZENTU0NsYXNzKCl9YDtcblx0XHQvKipcblx0XHQgKiBAc2VlIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzIzODg1MjU1L2hvdy10by1yZW1vdmUtaWdub3JlLWhvdmVyLWNzcy1zdHlsZS1vbi10b3VjaC1kZXZpY2VzXG5cdFx0ICogV2Ugc2hvdWxkIGlnbm9yZSBob3ZlciBlZmZldGNzIG9uIGlwaG9uZSwgYmVjYXVzZSB3ZSBzaG93IGhvdmVyIGVmZmVjdCBvbiB0YXBcblx0XHQgKi9cblx0XHRpZighdGhpcy5wbGF5ZXIuaGFzQ2xhc3MoJ2xlcGxheWVyLS1pcGhvbmUnKSkge1xuXHRcdFx0cmVzdWx0ICs9ICcgY29udHJvbC0tbm8taXBob25lJztcblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdHNldCB0YXAodmFsdWUpIHtcblx0XHR0aGlzLnRvZ2dsZUNsYXNzKCdjb250cm9sLS10YXAnLCB2YWx1ZSk7XG5cdH1cblxuXHRzZXQgZGlzYWJsZSh2YWx1ZSkge1xuXHRcdHRoaXMuX2Rpc2FibGUgPSB2YWx1ZTtcblx0XHR0aGlzLnRvZ2dsZUNsYXNzKCdkaXNhYmxlZCcsIHZhbHVlKTtcblx0fVxuXG5cdGdldCBkaXNhYmxlKCkge1xuXHRcdHJldHVybiB0aGlzLl9kaXNhYmxlXG5cdH1cblxuXHQvKipcblx0ICpcblx0ICogT24gY2xpY2sgZXZlbnQgaGFuZGxlclxuXHQgKiBAYWJzdGFjdFxuXHQgKi9cblx0b25DbGljayAoZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRpZiAodGhpcy5kaXNhYmxlKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHRoaXMucGxheWVyLnRyaWdnZXIoJ2NvbnRyb2xjbGljaycsIHsgY29udHJvbCA6IHRoaXMgfSk7XG5cblx0XHRpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHR0aGlzLm9wdGlvbnMub25DbGljay5jYWxsKHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0fVxuXHR9XG5cblxuXHRvblBsYXllckluaXRlZCAoZSwgZGF0YSkge1xuXG5cdH1cblxuXHRzdGF0aWMgcmVnaXN0ZXJDb250cm9sKG5hbWUsIGNvbnRyb2wpIHtcblx0XHRpZihuYW1lID09IG51bGwpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZihDb250cm9sLl9jb250cm9scyA9PSBudWxsKSB7XG5cdFx0XHRDb250cm9sLl9jb250cm9scyA9IHt9O1xuXHRcdH1cblxuXHRcdENvbnRyb2wuX2NvbnRyb2xzW25hbWVdID0gY29udHJvbDtcblxuXHRcdHJldHVybiBjb250cm9sO1xuXHR9XG5cblx0c3RhdGljIGdldENvbnRyb2wobmFtZSkge1xuXHRcdGlmKG5hbWUgPT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmKENvbnRyb2wuX2NvbnRyb2xzICYmIENvbnRyb2wuX2NvbnRyb2xzW25hbWVdKSB7XG5cdFx0XHRyZXR1cm4gQ29udHJvbC5fY29udHJvbHNbbmFtZV07XG5cdFx0fVxuXHR9XG5cblx0c3RhdGljIGNyZWF0ZShwbGF5ZXIsIG5hbWUsIG9wdGlvbnMpIHtcblx0XHR2YXIgY29udHJvbENsYXNzID0gdGhpcy5nZXRDb250cm9sKG5hbWUpO1xuXHRcdGlmKGNvbnRyb2xDbGFzcyA9PSBudWxsKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKGBDb250cm9sICR7bmFtZX0gZG9lc24ndCBleGlzdGApO1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5ldyBjb250cm9sQ2xhc3MocGxheWVyLCBvcHRpb25zKTtcblx0fVxuXG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnQ29udHJvbCcsIENvbnRyb2wpO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ2NvbnRyb2wnLCBDb250cm9sKTtcbmV4cG9ydCBkZWZhdWx0IENvbnRyb2w7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9Db250cm9sLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBDb21wb25lbnQuanNcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5jb25zdCB0b1BsYXllckV2ZW50ID0gKGV2ZW50cykgPT4gZXZlbnRzLnNwbGl0KCcgJykucmVkdWNlKChhY2MsIGUpID0+IGFjYyArIGBsZXBsYXllcl8ke2V9IGAsICcnKTtcblxuLyoqXG4gKiBQbGF5ZXIgY29tcG9uZW50IC0gQmFzZSBjbGFzcyBmb3IgYWxsIFVJXG4gKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBPcHRpb25zIG9mIGNvbXBvbmVudFxuICogQHBhcmFtIHtqUXVlcnl9IFtvcHRpb25zLmVsZW1lbnRdINCt0LvQtdC80LXQvdGCINC90LAg0LrQvtGC0L7RgNC+0Lwg0LzQvtC20L3QviDQuNC90LjRhtC40LvQuNC30L7QstCw0YLRjCDQutC70LDRgdGBLlxuICogQHByb3BlcnR5IHtPYmplY3R9IG9wdGlvbnNcbiAqIEBwcm9wZXJ0eSB7alF1ZXJ5fSBlbGVtZW50XG4gKiBAY2xhc3MgQ29tcG9uZW50XG4gKi9cbmNsYXNzIENvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XG5cdFx0b3B0aW9ucyA9IHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRjcmVhdGVFbGVtZW50IDogdHJ1ZVxuXHRcdH0sIHRoaXMub3B0aW9ucywgb3B0aW9ucyk7XG5cblx0XHRpZighcGxheWVyICYmIHRoaXMucGxheSAhPSBudWxsKSB7XG5cdFx0XHR0aGlzLnBsYXllciA9IHBsYXllciA9IHRoaXM7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucGxheWVyID0gcGxheWVyO1xuXHRcdH1cblxuXHRcdGlmKG9wdGlvbnMuY3JlYXRlRWxlbWVudCkge1xuXG5cdFx0XHRpZiAob3B0aW9ucy5lbGVtZW50KSB7XG5cdFx0XHRcdHRoaXMuZWxlbWVudCA9IG9wdGlvbnMuZWxlbWVudDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuY3JlYXRlRWxlbWVudCgpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5lbGVtZW50Lmxlbmd0aCAhPT0gMSkge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKGBDb21wb25lbnQucHJvdG90eXBlLmVsZW1lbnQubGVuZ3RoIG11c3QgZXF1YWwgMSwgbm90ICR7dGhpcy5lbGVtZW50Lmxlbmd0aH1cXG5gLCB0aGlzLmVsZW1lbnQpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLmVsZW1lbnRbMF0uX19ub2RlID0gdGhpcztcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQGFic3RyYWN0XG5cdCAqL1xuXHRjcmVhdGVFbGVtZW50KCkge1xuXG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBhYnN0cmFjdFxuXHQgKi9cblx0YnVpbGRDU1NDbGFzcygpIHtcblx0XHRyZXR1cm4gJydcblx0fVxuXG5cblx0LyoqXG5cdCAqIFNldCB0aGUgZm9jdXMgdG8gdGhpcyBjb21wb25lbnRcblx0ICovXG5cdGZvY3VzKCkge1xuXHRcdHRoaXMuZWxlbWVudC5mb2N1cygpO1xuXHR9XG5cblxuXHQvKipcblx0ICogUmVtb3ZlIHRoZSBmb2N1cyBmcm9tIHRoaXMgY29tcG9uZW50XG5cdCAqL1xuXHRibHVyKCkge1xuXHRcdHRoaXMuZWxlbWVudC5ibHVyKCk7XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBFbWl0IGEgcGxheWVyIGV2ZW50ICh0aGUgbmFtZSBvZiBldmVudCB3b3VsZCBiZSBhIGxlcGxheWVyX3NtdGgpXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBldmVudE5hbWVcblx0ICogQHBhcmFtIHtBcmd1bWVudHN9IC4uLmFyZ3MgalF1ZXJ5LmZuLm9uIG90aGVyIGFyZ3VtZW50c1xuXHQgKiBAcmV0dXJucyB7UGxheWVyfSB0aGlzXG5cdCAqL1xuXHR0cmlnZ2VyKGV2ZW50TmFtZSwgLi4uYXJncykge1xuXHRcdGNvbnN0IGV2ZW50ID0gJC5FdmVudChgbGVwbGF5ZXJfJHtldmVudE5hbWV9YCwgeyBwbGF5ZXIgOiB0aGlzLnBsYXllciB9KTtcblx0XHR0aGlzLmVsZW1lbnQudHJpZ2dlckhhbmRsZXIoZXZlbnQsIC4uLmFyZ3MpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblxuXHQvKipcblx0ICogTGlzdGVuIGEgcGxheWVyIGV2ZW50IHdpdGggbGVwbGF5ZXJfIHN1ZmZpeFxuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnROYW1lXG5cdCAqIEBwYXJhbSB7QXJndW1lbnRzfSAuLi5hcmdzIGpRdWVyeS5mbi5vbiBvdGhlciBhcmd1bWVudHNcblx0ICogQHJldHVybnMge1BsYXllcn0gdGhpc1xuXHQgKi9cblx0b24oZXZlbnROYW1lcywgLi4uYXJncykge1xuXHRcdGlmKHR5cGVvZiBldmVudE5hbWVzID09PSAnc3RyaW5nJyB8fCBldmVudE5hbWVzIGluc3RhbmNlb2YgU3RyaW5nKSB7XG5cdFx0XHR0aGlzLmVsZW1lbnQub24odG9QbGF5ZXJFdmVudChldmVudE5hbWVzKSwgLi4uYXJncyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnNvbGUud2FybignRmlyc3QgYXJndW1lbnQgb2YgXFwnQ29tcG9uZW50Lm9uXFwnIHNob3VsZCBiZSBhIHN0cmluZycpO1xuXHRcdFx0dGhpcy5lbGVtZW50Lm9uKGV2ZW50TmFtZXMsIC4uLmFyZ3MpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cblx0b25lKGV2ZW50TmFtZXMsIC4uLmFyZ3MpIHtcblx0XHRpZih0eXBlb2YgZXZlbnROYW1lcyA9PT0gJ3N0cmluZycgfHwgZXZlbnROYW1lcyBpbnN0YW5jZW9mIFN0cmluZykge1xuXHRcdFx0dGhpcy5lbGVtZW50Lm9uZSh0b1BsYXllckV2ZW50KGV2ZW50TmFtZXMpLCAuLi5hcmdzKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc29sZS53YXJuKCdGaXJzdCBhcmd1bWVudCBvZiBcXCdDb21wb25lbnQub25lXFwnIHNob3VsZCBiZSBhIHN0cmluZycpO1xuXHRcdFx0dGhpcy5lbGVtZW50Lm9uZShldmVudE5hbWVzLCAuLi5hcmdzKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBBZGQgdGhlIENTUyBjbGFzcyBmb3IgZ2VuZXJhbCBsZXBsYXllciBET00gZWxlbWVudFxuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIE5hbWUgb2YgY2xhc3MgKG5vdCBhIHNlbGVjdG9yLCBpdCdzIG1lYW4sIHRoYXQgc3RyaW5nIHNvdWxkIGJlIHdpdGhvdXQgcG9pbnQgYXQgdGhlIHN0YXJ0KVxuXHQgKiBAcmV0dXJucyB7UGxheWVyfSB0aGlzXG5cdCAqL1xuXHRhZGRDbGFzcyhjbGFzc05hbWUpIHtcblx0XHR0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoY2xhc3NOYW1lKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8qKlxuXHQgKiBSZW1vdmUgdGhlIENTUyBjbGFzcyBmcm9tIGdlbmVyYWwgbGVwbGF5ZXIgRE9NIGVsZW1lbnRcblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZSBOYW1lIG9mIGNsYXNzXG5cdCAqIEByZXR1cm5zIHtQbGF5ZXJ9IHRoaXNcblx0ICovXG5cdHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkge1xuXHRcdHRoaXMuZWxlbWVudC5yZW1vdmVDbGFzcyhjbGFzc05hbWUpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRvZ2dsZSB0aGUgQ1NTIGNsYXNzIGZyb20gZ2VuZXJhbCBsZXBsYXllciBET00gZWxlbWVudFxuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lXG5cdCAqIEBwYXJhbSB7Qm9vbGVhbn0gZmxhZ1xuXHQgKiBAcmV0dXJucyB7UGxheWVyfSB0aGlzXG5cdCAqL1xuXHR0b2dnbGVDbGFzcyhjbGFzc05hbWUsIGZsYWcpIHtcblx0XHR0aGlzLmVsZW1lbnQudG9nZ2xlQ2xhc3MoY2xhc3NOYW1lLCBmbGFnKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGhhc0NsYXNzKGNsYXNzTmFtZSkge1xuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQuaGFzQ2xhc3MoY2xhc3NOYW1lKTtcblx0fVxuXG5cblx0c3RhdGljIHJlZ2lzdGVyQ29tcG9uZW50KG5hbWUsIGNvbXBvbmVudCkge1xuXHRcdGlmKG5hbWUgPT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmKENvbXBvbmVudC5fY29tcG9uZW50cyA9PSBudWxsKSB7XG5cdFx0XHRDb21wb25lbnQuX2NvbXBvbmVudHMgPSB7fTtcblx0XHR9XG5cblx0XHRDb21wb25lbnQuX2NvbXBvbmVudHNbbmFtZV0gPSBjb21wb25lbnQ7XG5cblx0XHRyZXR1cm4gY29tcG9uZW50O1xuXHR9XG5cblx0c3RhdGljIGdldENvbXBvbmVudChuYW1lKSB7XG5cdFx0aWYobmFtZSA9PSBudWxsKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYoQ29tcG9uZW50Ll9jb21wb25lbnRzICYmIENvbXBvbmVudC5fY29tcG9uZW50c1tuYW1lXSkge1xuXHRcdFx0cmV0dXJuIENvbXBvbmVudC5fY29tcG9uZW50c1tuYW1lXTtcblx0XHR9XG5cblx0fVxuXG5cdHNldCB0YXAodmFsdWUpIHt9XG5cblx0ZW1pdFRhcEV2ZW50cyhlbGVtZW50PW51bGwpIHtcblx0XHRpZihlbGVtZW50ID09IG51bGwpIHtcblx0XHRcdGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQ7XG5cdFx0fVxuXHRcdC8vIFRyYWNrIHRoZSBzdGFydCB0aW1lIHNvIHdlIGNhbiBkZXRlcm1pbmUgaG93IGxvbmcgdGhlIHRvdWNoIGxhc3RlZFxuXHRcdGxldCB0b3VjaFN0YXJ0ID0gMDtcblx0XHRsZXQgZmlyc3RUb3VjaCA9IG51bGw7XG5cdFx0bGV0IGxhc3RNb3ZlVG91Y2ggPSBudWxsO1xuXG5cdFx0Ly8gTWF4aW11bSBtb3ZlbWVudCBhbGxvd2VkIGR1cmluZyBhIHRvdWNoIGV2ZW50IHRvIHN0aWxsIGJlIGNvbnNpZGVyZWQgYSB0YXBcblx0XHQvLyBPdGhlciBwb3B1bGFyIGxpYnMgdXNlIGFueXdoZXJlIGZyb20gMiAoaGFtbWVyLmpzKSB0byAxNSxcblx0XHQvLyBzbyAxMCBzZWVtcyBsaWtlIGEgbmljZSwgcm91bmQgbnVtYmVyLlxuXHRcdGNvbnN0IHRhcE1vdmVtZW50VGhyZXNob2xkID0gMTA7XG5cblx0XHQvLyBUaGUgbWF4aW11bSBsZW5ndGggYSB0b3VjaCBjYW4gYmUgd2hpbGUgc3RpbGwgYmVpbmcgY29uc2lkZXJlZCBhIHRhcFxuXHRcdGNvbnN0IHRvdWNoVGltZVRocmVzaG9sZCA9IDIwMDtcblxuXHRcdGxldCBjb3VsZEJlVGFwO1xuXG5cdFx0Ly8gc2VlIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzE3OTU3NTkzL2hvdy10by1jYXB0dXJlLXRvdWNoZW5kLWNvb3JkaW5hdGVzXG5cblx0XHRlbGVtZW50Lm9uKCd0b3VjaHN0YXJ0JywgKGV2ZW50KSA9PiB7XG5cdFx0XHQvLyBJZiBtb3JlIHRoYW4gb25lIGZpbmdlciwgZG9uJ3QgY29uc2lkZXIgdHJlYXRpbmcgdGhpcyBhcyBhIGNsaWNrXG5cdFx0XHRpZiAoZXZlbnQudG91Y2hlcy5sZW5ndGggPT09IDEpIHtcblx0XHRcdFx0Ly8gQ29weSBwYWdlWC9wYWdlWSBmcm9tIHRoZSBvYmplY3Rcblx0XHRcdFx0Zmlyc3RUb3VjaCA9IGxhc3RNb3ZlVG91Y2ggPSB7XG5cdFx0XHRcdFx0cGFnZVggOiBldmVudC50b3VjaGVzWzBdLnBhZ2VYLFxuXHRcdFx0XHRcdHBhZ2VZIDogZXZlbnQudG91Y2hlc1swXS5wYWdlWVxuXHRcdFx0XHR9O1xuXHRcdFx0XHQvLyBSZWNvcmQgc3RhcnQgdGltZSBzbyB3ZSBjYW4gZGV0ZWN0IGEgdGFwIHZzLiBcInRvdWNoIGFuZCBob2xkXCJcblx0XHRcdFx0dG91Y2hTdGFydCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXHRcdFx0XHQvLyBSZXNldCBjb3VsZEJlVGFwIHRyYWNraW5nXG5cdFx0XHRcdGNvdWxkQmVUYXAgPSB0cnVlO1xuXHRcdFx0XHR0aGlzLnRhcCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRlbGVtZW50Lm9uKCd0b3VjaG1vdmUnLCAoZXZlbnQpID0+IHtcblx0XHRcdC8vIElmIG1vcmUgdGhhbiBvbmUgZmluZ2VyLCBkb24ndCBjb25zaWRlciB0cmVhdGluZyB0aGlzIGFzIGEgY2xpY2tcblx0XHRcdGlmIChldmVudC50b3VjaGVzLmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0Y291bGRCZVRhcCA9IGZhbHNlO1xuXHRcdFx0fSBlbHNlIGlmIChmaXJzdFRvdWNoKSB7XG5cdFx0XHQvLyBTb21lIGRldmljZXMgd2lsbCB0aHJvdyB0b3VjaG1vdmVzIGZvciBhbGwgYnV0IHRoZSBzbGlnaHRlc3Qgb2YgdGFwcy5cblx0XHRcdC8vIFNvLCBpZiB3ZSBtb3ZlZCBvbmx5IGEgc21hbGwgZGlzdGFuY2UsIHRoaXMgY291bGQgc3RpbGwgYmUgYSB0YXBcblx0XHRcdFx0Y29uc3QgeGRpZmYgPSBldmVudC50b3VjaGVzWzBdLnBhZ2VYIC0gZmlyc3RUb3VjaC5wYWdlWDtcblx0XHRcdFx0Y29uc3QgeWRpZmYgPSBldmVudC50b3VjaGVzWzBdLnBhZ2VZIC0gZmlyc3RUb3VjaC5wYWdlWTtcblx0XHRcdFx0Y29uc3QgdG91Y2hEaXN0YW5jZSA9IE1hdGguc3FydCh4ZGlmZiAqIHhkaWZmICsgeWRpZmYgKiB5ZGlmZik7XG5cblx0XHRcdFx0aWYgKGV2ZW50LnRvdWNoZXMubGVuZ3RoID09PSAxKSB7XG5cdFx0XHRcdFx0bGFzdE1vdmVUb3VjaCA9IHtcblx0XHRcdFx0XHRcdHBhZ2VYIDogZXZlbnQudG91Y2hlc1swXS5wYWdlWCxcblx0XHRcdFx0XHRcdHBhZ2VZIDogZXZlbnQudG91Y2hlc1swXS5wYWdlWVxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAodG91Y2hEaXN0YW5jZSA+IHRhcE1vdmVtZW50VGhyZXNob2xkKSB7XG5cdFx0XHRcdFx0Y291bGRCZVRhcCA9IGZhbHNlO1xuXHRcdFx0XHRcdHRoaXMudGFwID0gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdGNvbnN0IG5vVGFwID0gKCkgPT4ge1xuXHRcdFx0Y291bGRCZVRhcCA9IGZhbHNlO1xuXHRcdFx0dGhpcy50YXAgPSBmYWxzZTtcblx0XHR9O1xuXG5cdFx0Ly8gVE9ETzogTGlzdGVuIHRvIHRoZSBvcmlnaW5hbCB0YXJnZXQuIGh0dHA6Ly95b3V0dS5iZS9EdWpmcFhPS1VwOD90PTEzbThzXG5cdFx0ZWxlbWVudC5vbigndG91Y2hsZWF2ZScsIG5vVGFwKTtcblx0XHRlbGVtZW50Lm9uKCd0b3VjaGNhbmNlbCcsIG5vVGFwKTtcblxuXHRcdC8vIFdoZW4gdGhlIHRvdWNoIGVuZHMsIG1lYXN1cmUgaG93IGxvbmcgaXQgdG9vayBhbmQgdHJpZ2dlciB0aGUgYXBwcm9wcmlhdGVcblx0XHQvLyBldmVudFxuXHRcdGVsZW1lbnQub24oJ3RvdWNoZW5kJywgKGV2ZW50KSA9PiB7XG5cdFx0XHRmaXJzdFRvdWNoID0gbnVsbDtcblx0XHRcdHRoaXMudGFwID0gZmFsc2U7XG5cdFx0XHQvLyBQcm9jZWVkIG9ubHkgaWYgdGhlIHRvdWNobW92ZS9sZWF2ZS9jYW5jZWwgZXZlbnQgZGlkbid0IGhhcHBlblxuXHRcdFx0aWYgKGNvdWxkQmVUYXAgPT09IHRydWUpIHtcblx0XHRcdC8vIE1lYXN1cmUgaG93IGxvbmcgdGhlIHRvdWNoIGxhc3RlZFxuXHRcdFx0XHRjb25zdCB0b3VjaFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHRvdWNoU3RhcnQ7XG5cblx0XHRcdFx0Ly8gTWFrZSBzdXJlIHRoZSB0b3VjaCB3YXMgbGVzcyB0aGFuIHRoZSB0aHJlc2hvbGQgdG8gYmUgY29uc2lkZXJlZCBhIHRhcFxuXHRcdFx0XHRpZiAodG91Y2hUaW1lIDwgdG91Y2hUaW1lVGhyZXNob2xkKSB7XG5cdFx0XHRcdFx0Ly8gRG9uJ3QgbGV0IGJyb3dzZXIgdHVybiB0aGlzIGludG8gYSBjbGlja1xuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0LyoqXG5cdFx0XHRcdFx0ICogVHJpZ2dlcmVkIHdoZW4gYSBgQ29tcG9uZW50YCBpcyB0YXBwZWQuXG5cdFx0XHRcdFx0ICpcblx0XHRcdFx0XHQgKiBAZXZlbnQgQ29tcG9uZW50I3RhcFxuXHRcdFx0XHRcdCAqL1xuXHRcdFx0XHRcdGNvbnN0IHRhcEV2ZW50ID0gJC5FdmVudCgndGFwJyk7XG5cdFx0XHRcdFx0dGFwRXZlbnQucGFnZVggPSBsYXN0TW92ZVRvdWNoLnBhZ2VYO1xuXHRcdFx0XHRcdHRhcEV2ZW50LnBhZ2VZID0gbGFzdE1vdmVUb3VjaC5wYWdlWTtcblx0XHRcdFx0XHRlbGVtZW50LnRyaWdnZXIodGFwRXZlbnQpO1xuXHRcdFx0XHRcdC8vIEl0IG1heSBiZSBnb29kIHRvIGNvcHkgdGhlIHRvdWNoZW5kIGV2ZW50IG9iamVjdCBhbmQgY2hhbmdlIHRoZVxuXHRcdFx0XHRcdC8vIHR5cGUgdG8gdGFwLCBpZiB0aGUgb3RoZXIgZXZlbnQgcHJvcGVydGllcyBhcmVuJ3QgZXhhY3QgYWZ0ZXJcblx0XHRcdFx0XHQvLyBFdmVudHMuZml4RXZlbnQgcnVucyAoZS5nLiBldmVudC50YXJnZXQpXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnQ29tcG9uZW50JywgQ29tcG9uZW50KTtcbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL0NvbXBvbmVudC5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgSWNvbi5qc1xuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcblxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIEljb24ncyBvcHRpb25zXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuaWNvbk5hbWU9JyddIEljb24ncyBuYW1lLiBJZiB1c2Ugc3Znc3ByaXRlIGljb25zLCBpY29uTmFtZSBpdCdzIGlkIGluIHNwcml0ZVxuICogQGNsYXNzIEljb25cbiAqIEBleHRlbmRzIENvbXBvbmVudFxuICovXG5jbGFzcyBJY29uIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3RvciAocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRjbGFzc05hbWUgOiAnJyxcblx0XHRcdGljb25OYW1lIDogJydcblx0XHR9LCBvcHRpb25zKVxuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cblx0fVxuXG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHR0aGlzLl91c2VUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3VzZScpO1xuXHRcdHRoaXMuX3N2Z1RhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XG5cblx0XHR0aGlzLmljb25OYW1lID0gdGhpcy5faWNvbk5hbWUgPSB0aGlzLm9wdGlvbnMuaWNvbk5hbWU7XG5cdFx0dGhpcy5fc3ZnVGFnLmFwcGVuZENoaWxkKHRoaXMuX3VzZVRhZyk7XG5cdFx0dGhpcy5lbGVtZW50ID0gJCgnPGRpdiAvPicpXG5cdFx0XHQuYWRkQ2xhc3ModGhpcy5idWlsZENTU0NsYXNzKCkpXG5cdFx0XHQuYXR0cigndGl0bGUnLCB0aGlzLm9wdGlvbnMudGl0bGUpXG5cdFx0XHQuYXBwZW5kKCQodGhpcy5fc3ZnVGFnKSk7XG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudDtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGJ1aWxkQ1NTQ2xhc3MoKSB7XG5cdFx0cmV0dXJuIGAke3N1cGVyLmJ1aWxkQ1NTQ2xhc3MoKX0gbGVwbGF5ZXItaWNvbiAke3RoaXMub3B0aW9ucy5jbGFzc05hbWV9YFxuXHR9XG5cblx0LyoqXG5cdCAqIFNldHRlciBvZiBpY29uTmFtZSBmaWVsZFxuXHQgKiBAcGFyYW0ge1N0cmluZ30gaWNvbk5hbWVcblx0ICovXG5cdHNldCBpY29uTmFtZShpY29uTmFtZSkge1xuXHRcdGxldCBhdHRyTlMgPSBbJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnLCAnaHJlZiddXG5cdFx0dGhpcy5fdXNlVGFnLnJlbW92ZUF0dHJpYnV0ZU5TKC4uLmF0dHJOUywgYCR7dGhpcy5wbGF5ZXIub3B0aW9ucy5zdmdQYXRofSNsZXBsYXllci1pY29uLSR7dGhpcy5pY29uTmFtZX1gKVxuXHRcdHRoaXMuX3VzZVRhZy5zZXRBdHRyaWJ1dGVOUyguLi5hdHRyTlMsIGAke3RoaXMucGxheWVyLm9wdGlvbnMuc3ZnUGF0aH0jbGVwbGF5ZXItaWNvbi0ke2ljb25OYW1lfWApXG5cdFx0dGhpcy5faWNvbk5hbWUgPSBpY29uTmFtZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXR0ZXIgb2YgaWNvbk5hbWUgZmllbGRcblx0ICogQHJldHVybiB7U3RyaW5nfSBJY29uJ3MgbmFtZVxuXHQgKi9cblx0Z2V0IGljb25OYW1lICgpIHtcblx0XHRyZXR1cm4gdGhpcy5faWNvbk5hbWU7XG5cdH1cblxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ0ljb24nLCBJY29uKTtcbmV4cG9ydCBkZWZhdWx0IEljb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9JY29uLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBQbGF5QnV0dG9uLmpzXG4gKi9cblxuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9Db250cm9sJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJztcbmltcG9ydCB7IGNyZWF0ZUVsIH0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgSVNfVE9VQ0ggfSBmcm9tICcuLi91dGlscy9icm93c2VyJztcblxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKi9cbmNsYXNzIFBsYXlCdXR0b24gZXh0ZW5kcyBDb250cm9sIHtcblxuXHRjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpXG5cdH1cblxuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdGNvbnN0IGlubmVyID0gY3JlYXRlRWwoJ2RpdicsIHtcblx0XHRcdGNsYXNzTmFtZSA6ICdsZXBsYXllci1wbGF5LWJ1dHRvbl9fYnV0dG9uJ1xuXHRcdH0pXG5cdFx0LmFwcGVuZChuZXcgSWNvbih0aGlzLnBsYXllciwgeyBpY29uTmFtZSA6ICdwbGF5JyB9KS5lbGVtZW50KTtcblxuXHRcdHRoaXMuZWxlbWVudCA9IGNyZWF0ZUVsKCdkaXYnLCB7XG5cdFx0XHRjbGFzc05hbWUgOiB0aGlzLmJ1aWxkQ1NTQ2xhc3MoKVxuXHRcdH0pXG5cdFx0LmFwcGVuZChpbm5lcik7XG5cblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50O1xuXHR9XG5cblx0b25DbGljayhlKSB7XG5cdFx0c3VwZXIub25DbGljayhlKTtcblx0XHQvKipcblx0XHQgKiBTZWUgTFBMUi0yOTBcblx0XHQgKiBPbiB0b3VjaCBkZXZpY2VzIGluIGZ1bGxzY3JlZW4gaWYgdXNlciBub3QgYWN0aXZlIHdlIGRvbid0IHNob3VsZCBwbGF5LlxuXHRcdCAqIEF0IGZpcnN0IHdlIHNob3cgaGltIGEgY29udHJvbHNcblx0XHQgKi9cblx0XHRpZihJU19UT1VDSCgpICYmIHRoaXMucGxheWVyLnZpZXcgPT09ICdmdWxsc2NyZWVuJykge1xuXHRcdFx0aWYodGhpcy5wbGF5ZXIudXNlckFjdGl2ZSkge1xuXHRcdFx0XHR0aGlzLnBsYXllci5wbGF5KCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucGxheWVyLnBsYXkoKTtcblx0XHR9XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGJ1aWxkQ1NTQ2xhc3MoKSB7XG5cdFx0cmV0dXJuIGBsZXBsYXllci1wbGF5LWJ1dHRvbiAke3RoaXMub3B0aW9ucy5jbGFzc05hbWV9YFxuXHR9XG5cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdQbGF5QnV0dG9uJywgUGxheUJ1dHRvbik7XG5Db250cm9sLnJlZ2lzdGVyQ29udHJvbCgncGxheSBidXR0b24nLCBQbGF5QnV0dG9uKTtcbmV4cG9ydCBkZWZhdWx0IFBsYXlCdXR0b247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9QbGF5QnV0dG9uLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSB0aW1lLmpzXG4gKlxuICogQG1vZHVsZSB0aW1lXG4gKi9cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbi8qKlxuICogQ29udmVydCBzZWNvbmRzIHRvIGZvcm1hdCBzdHJpbmcgJ2hoPzptbTpzcydcbiAqXG4gKiBAYWNjZXNzIHB1YmxpY1xuICogQHBhcmFtIHtOdW1iZXJ9IHNlY29uZHMgU2Vjb25kc1xuICogQHBhcmFtIHtCb29sZWFufSBzaG93SG91cnMgY29udmVydCB0byBmb3JtYXQgJ2hoOm1tOnNzJ1xuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNlY29uZHNUb1RpbWUgKHNlY29uZHMsIHNob3dIb3Vycykge1xuXHR2YXIgaCA9IE1hdGguZmxvb3Ioc2Vjb25kcyAvIDM2MDApO1xuXHR2YXIgbSA9IE1hdGguZmxvb3Ioc2Vjb25kcyAlIDM2MDAgLyA2MCk7XG5cdHZhciBzID0gTWF0aC5mbG9vcihzZWNvbmRzICUgMzYwMCAlIDYwKTtcblx0dmFyIG91dCA9ICcnO1xuXHRpZiAobSA8IDEwKSB7XG5cdFx0bSA9ICcwJyArIG07XG5cdH1cblx0aWYgKHMgPCAxMCkge1xuXHRcdHMgPSAnMCcgKyBzO1xuXHR9XG5cdG91dCA9IGAke219OiR7c31gO1xuXG5cdGlmKGggPiAwIHx8IHNob3dIb3Vycykge1xuXHRcdG91dCA9IGAke2h9OmAgKyBvdXRcblx0fVxuXHRyZXR1cm4gb3V0O1xufVxuXG5cbi8qKlxuICogUmV0dXJuIGxlbmd0aCAvIGVuZFxuICpcbiAqIEBhY2Nlc3MgcHVibGljXG4gKiBAcGFyYW0ge051bWJlcn0gbGVuZ3RoXG4gKiBAcGFyYW0ge051Ym1lcn0gZW5kXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwZXJjZW50aWZ5IChsZW5ndGgsIGVuZCkge1xuXHQvLyBvciB6ZXJvIGJlYWNhc2UgTmFOXG5cdGNvbnN0IHBlcmNlbnQgPSAobGVuZ3RoIC8gZW5kKSB8fCAwO1xuXHRyZXR1cm4gKHBlcmNlbnQgPj0gMSkgPyAxIDogcGVyY2VudDtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWwodGFnPSdkaXYnLCBwcm9wcykge1xuXHRpZihwcm9wcyAmJiBwcm9wcy5jbGFzc05hbWUpIHtcblx0XHRwcm9wc1tcImNsYXNzXCJdID0gcHJvcHMuY2xhc3NOYW1lO1xuXHRcdGRlbGV0ZSBwcm9wcy5jbGFzc05hbWU7XG5cdH1cblx0cmV0dXJuICQoYDwke3RhZ30vPmAsIHByb3BzKTtcbn1cblxuXG4vKipcbiAqIEBwYXJhbXMge1N0cmluZ30gSHRtbFxuICovXG5leHBvcnQgZnVuY3Rpb24gJGh0bWwoaHRtbCkge1xuXG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5leHBvcnQgY29uc3QgZ2V0U2Nyb2xsQmFyV2lkdGggPSAoZnVuY3Rpb24oKSB7XG5cdGxldCByZXN1bHQ7XG5cblx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXG5cdFx0aWYocmVzdWx0ICE9IG51bGwpIHtcblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fVxuXG5cdFx0Y29uc3Qgb3V0ZXIgPSAkKCc8ZGl2IC8+JykuY3NzKHtcblx0XHRcdHZpc2liaWxpdHkgOiAnaGlkZGVuJyxcblx0XHRcdHdpZHRoIDogMTAwLFxuXHRcdFx0b3ZlcmZsb3cgOiAnc2Nyb2xsJ1xuXHRcdH0pLmFwcGVuZFRvKCdib2R5Jyk7XG5cblx0XHRjb25zdCB3aWR0aFdpdGhTY3JvbGwgPSAkKCc8ZGl2IC8+JykuY3NzKHtcblx0XHRcdHdpZHRoIDogJzEwMCUnXG5cdFx0fSkuYXBwZW5kVG8ob3V0ZXIpLm91dGVyV2lkdGgoKTtcblxuXHRcdG91dGVyLnJlbW92ZSgpO1xuXHRcdHJldHVybiByZXN1bHQgPSAxMDAgLSB3aWR0aFdpdGhTY3JvbGw7XG5cdH1cblxufSgpKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy91dGlscy9pbmRleC5qcyIsIi8qKlxuICogQGZpbGUgYnJvd3Nlci5qc1xuICovXG5cblxuY29uc3QgVVNFUl9BR0VOVCA9IHdpbmRvdy5uYXZpZ2F0b3IgJiYgd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQgfHwgJyc7XG5cbmV4cG9ydCBjb25zdCBJU19NT0JJTEUgPSAoL01vYmlsZS9pKS50ZXN0KFVTRVJfQUdFTlQpO1xuXG5leHBvcnQgY29uc3QgSVNfQ0hST01FID0gVVNFUl9BR0VOVC5pbmRleE9mKCdDaHJvbWUnKSA+IC0xO1xuXG5leHBvcnQgY29uc3QgSVNfQU5EUk9JRCA9ICgvQW5kcm9pZC9pKS50ZXN0KFVTRVJfQUdFTlQpO1xuXG5leHBvcnQgY29uc3QgSVNfQU5EUk9JRF9QSE9ORSA9IElTX0FORFJPSUQgJiYgSVNfTU9CSUxFO1xuXG5leHBvcnQgY29uc3QgSVNfSVBBRCA9ICgvaVBhZC9pKS50ZXN0KFVTRVJfQUdFTlQpO1xuLy8gVGhlIEZhY2Vib29rIGFwcCdzIFVJV2ViVmlldyBpZGVudGlmaWVzIGFzIGJvdGggYW4gaVBob25lIGFuZCBpUGFkLCBzb1xuLy8gdG8gaWRlbnRpZnkgaVBob25lcywgd2UgbmVlZCB0byBleGNsdWRlIGlQYWRzLlxuLy8gaHR0cDovL2FydHN5LmdpdGh1Yi5pby9ibG9nLzIwMTIvMTAvMTgvdGhlLXBlcmlscy1vZi1pb3MtdXNlci1hZ2VudC1zbmlmZmluZy9cbmV4cG9ydCBjb25zdCBJU19JUEhPTkUgPSAoL2lQaG9uZS9pKS50ZXN0KFVTRVJfQUdFTlQpICYmICFJU19JUEFEO1xuZXhwb3J0IGNvbnN0IElTX0lQT0QgPSAoL2lQb2QvaSkudGVzdChVU0VSX0FHRU5UKTtcbmV4cG9ydCBjb25zdCBJU19JT1MgPSBJU19JUEhPTkUgfHwgSVNfSVBBRCB8fCBJU19JUE9EO1xuXG5leHBvcnQgY29uc3QgSVNfU0FGQVJJID0gVVNFUl9BR0VOVC5pbmRleE9mKCdTYWZhcmknKSA+IC0xICYmICFJU19DSFJPTUU7XG5cbmV4cG9ydCBjb25zdCBJU19UT1VDSCA9ICgpID0+ICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdyB8fCBuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL3V0aWxzL2Jyb3dzZXIuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIFNwbGFzaEljb24uanNcbiAqL1xuXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCBJY29uIGZyb20gJy4vSWNvbic7XG5cbi8qKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQGNsYXNzIFNwbGFzaEljb25cbiAqIEBleHRlbmRzIENvbXBvbmVudFxuICovXG5jbGFzcyBTcGxhc2hJY29uIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXHRzaG93KG5hbWUpIHtcblx0XHR0aGlzLmljb24uaWNvbk5hbWUgPSBuYW1lO1xuXHRcdHRoaXMuZWxlbWVudC5hZGRDbGFzcygnbGVwbGF5ZXItc3BsYXNoaWNvbi0tYWN0aXZlJyk7XG5cdFx0c2V0VGltZW91dCgoKSA9PiB0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3MoJ2xlcGxheWVyLXNwbGFzaGljb24tLWFjdGl2ZScpLCAzMDApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHR0aGlzLmljb24gPSBuZXcgSWNvbih0aGlzLnBsYXllcik7XG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudCA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0LmFkZENsYXNzKCdsZXBsYXllci1zcGxhc2hpY29uJylcblx0XHRcdC5hcHBlbmQodGhpcy5pY29uLmVsZW1lbnQpO1xuXHR9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3BsYXNoSWNvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL1NwbGFzaEljb24uanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIFRpbWUuanNcbiAqL1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vQ29tcG9uZW50JztcbmltcG9ydCB7IHNlY29uZHNUb1RpbWUsIGNyZWF0ZUVsIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG4vLyBUT0RPOiDQmNGB0L/QvtC70YzQt9C+0LLQsNGC0Ywg0Y3RgtC+0YIg0LHQu9C+0Log0LIgVGltZUNvbnRyb2xcbi8qKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQGNsYXNzIFRpbWVcbiAqIEBleHRlbmRzIENvbnRyb2xcbiAqL1xuY2xhc3MgVGltZSBleHRlbmRzIENvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IgKHBsYXllciwgb3B0aW9ucz17fSkge1xuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0Zm4gOiAocGxheWVyKSA9PiB7XG5cdFx0XHRcdGNvbnN0IHZpZGVvID0gcGxheWVyLnZpZGVvO1xuXHRcdFx0XHRyZXR1cm4gc2Vjb25kc1RvVGltZSh2aWRlby5jdXJyZW50VGltZSk7XG5cdFx0XHR9XG5cdFx0fSwgb3B0aW9ucyk7XG5cblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ3RpbWV1cGRhdGUnLCB0aGlzLnVwZGF0ZVRleHQuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5wbGF5ZXIub24oJ2luaXRlZCcsIHRoaXMudXBkYXRlVGV4dC5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdHVwZGF0ZVRleHQoZSwgZGF0YSkge1xuXHRcdHRoaXMuZWxlbWVudC50ZXh0KHRoaXMub3B0aW9ucy5mbih0aGlzLnBsYXllcikpO1xuXHR9XG5cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHR0aGlzLmVsZW1lbnQgPSBjcmVhdGVFbCgnZGl2JywgeyBjbGFzc05hbWUgOiAnbGVwbGF5ZXItdGltZScgfSk7XG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudDtcblx0fVxuXG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnVGltZScsIFRpbWUpO1xuZXhwb3J0IGRlZmF1bHQgVGltZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL1RpbWVsaW5lL1RpbWUuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIENvbnRyb2xDb2xsZWN0aW9uLmpzXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9Db250cm9sJztcblxuaW1wb3J0IHsgY3JlYXRlRWwgfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBJU19BTkRST0lEX1BIT05FLCBJU19JUEhPTkUsIElTX01PQklMRSB9IGZyb20gJy4uL3V0aWxzL2Jyb3dzZXInO1xuXG5cbi8qKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBPcHRpb25zIG9mIGNvbXBvbmVudFxuICogQHBhcmFtIHtqUXVlcnl9IFtvcHRpb25zLmNvbnRyb2xzXSBBcnJheSBvZiByb3dzIG9mIGNvbnRyb2wncyBuYW1lXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMuY29udHJvbHNPcHRpb25zXSBDb250cm9sIG9wdGlvbnNcbiAqIEBwcm9wZXJ0eSB7QXJyYXl9IEFycmF5IG9mIHJvd3Mgb2YgY29udHJvbCdzIG5hbWVcbiAqIEBwclxuICpcbiAqL1xuY2xhc3MgQ29udHJvbENvbGxlY3Rpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3RvciAocGxheWVyLCBvcHRpb25zKSB7XG5cdFx0bGV0IHsgbmFtZSB9ID0gb3B0aW9ucztcblxuXHRcdC8vIE9wdGlvbnMgYnkgdXNlciBhZ2VudFxuXHRcdC8vIE9wdGlvbnMgb25seSBmb3IgY29tbW9uOmFuZHJvaWQgb3Igd2hhdGV2ZXI6YW5kcm9pZCwgd2hhdGV2ZXI6aW9zIGNvbnRyb2xzXG5cdFx0bGV0IGxvY2FsVWFPcHRpb25zID0ge307XG5cblx0XHRsZXQgY29udHJvbHNPcHRpb25zID0ge307XG5cblx0XHRsZXQgY29udHJvbHMgPSBbXTtcblxuXHRcdGlmKG5hbWUgIT0gbnVsbCkge1xuXG5cdFx0XHRjb250cm9scyA9IHBsYXllci5vcHRpb25zLmNvbnRyb2xzW25hbWVdO1xuXG5cdFx0XHRjb250cm9sc09wdGlvbnMgPSBwbGF5ZXIub3B0aW9ucy5jb250cm9sc09wdGlvbnNbbmFtZV07XG5cblx0XHRcdFtcblx0XHRcdFx0eyBmbGFnIDogSVNfTU9CSUxFLCBuYW1lIDogJ21vYmlsZSd9LFxuICAgICAgICAgICAgICAgIHsgZmxhZyA6IElTX0FORFJPSURfUEhPTkUsIG5hbWUgOiAnYW5kcm9pZCcgfSxcbiAgICAgICAgICAgICAgICB7IGZsYWcgOiBJU19JUEhPTkUsIG5hbWUgOiAnaW9zJyB9LFxuXHRcdFx0XS5mb3JFYWNoKGl0ZW0gPT4ge1xuXHRcdFx0XHRpZihpdGVtLmZsYWcpIHtcblx0XHRcdFx0XHRjb25zdCBsb2NhbE5hbWUgPSBgJHtuYW1lfToke2l0ZW0ubmFtZX1gO1xuXG5cdFx0XHRcdFx0aWYocGxheWVyLm9wdGlvbnMuY29udHJvbHNbbG9jYWxOYW1lXSkge1xuXHRcdFx0XHRcdFx0bG9jYWxVYU9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgbG9jYWxVYU9wdGlvbnMsIHBsYXllci5vcHRpb25zLmNvbnRyb2xzT3B0aW9uc1tsb2NhbE5hbWVdKTtcblx0XHRcdFx0XHRcdGNvbnRyb2xzID0gcGxheWVyLm9wdGlvbnMuY29udHJvbHNbbG9jYWxOYW1lXTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIGl0ZW0uZmxhZztcblx0XHRcdH0pO1xuXHRcdH1cblxuXG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRjb250cm9scyA6IGNvbnRyb2xzLFxuXHRcdFx0YWxpZ24gOiAnbGVmdCcsXG5cdFx0XHRjb250cm9sc09wdGlvbnMgOiB7fVxuXHRcdH0sIGxvY2FsVWFPcHRpb25zLCBjb250cm9sc09wdGlvbnMsIG9wdGlvbnMpO1xuXG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblxuXHRcdHRoaXMuYWN0aXZlID0gb3B0aW9ucy5hY3RpdmUgfHwgZmFsc2U7XG5cdFx0dGhpcy5uYW1lID0gb3B0aW9ucy5uYW1lO1xuXG5cdFx0dGhpcy5wbGF5ZXIuY29udHJvbHNbdGhpcy5uYW1lXSA9IHRoaXM7XG5cdH1cblxuXG5cdF9nZXRDb250cm9sT3B0aW9ucyhuYW1lKSB7XG5cdFx0Y29uc3QgeyBjb250cm9sc09wdGlvbnMgfSA9IHRoaXMub3B0aW9ucztcblx0XHRsZXQgcmVzdWx0ID0gY29udHJvbHNPcHRpb25zLmNvbnRyb2wgfHwge307XG5cblx0XHRpZihjb250cm9sc09wdGlvbnNbbmFtZV0pIHtcblx0XHRcdHJlc3VsdCA9ICQuZXh0ZW5kKHRydWUsIHt9LCByZXN1bHQsIGNvbnRyb2xzT3B0aW9uc1tuYW1lXSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdGFkZENvbnRyb2woaW5kZXhSb3csIG5hbWUsIG9wdGlvbnMpIHtcblx0XHRjb25zdCBjb250cm9sID0gQ29udHJvbC5jcmVhdGUodGhpcy5wbGF5ZXIsIG5hbWUsIHtcblx0XHRcdGNvbGxlY3Rpb24gOiB0aGlzLm9wdGlvbnMubmFtZSxcblx0XHRcdC4uLm9wdGlvbnNcblx0XHR9KTtcblxuXHRcdGlmKGNvbnRyb2wgPT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHdoaWxlKGluZGV4Um93ID4gdGhpcy5fcm93cy5sZW5ndGgpIHtcblx0XHRcdHRoaXMuYWRkUm93KCk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgZWxlbVJvdyA9IHRoaXMuX3Jvd3NbaW5kZXhSb3ddO1xuXHRcdGVsZW1Sb3cuYXBwZW5kKGNvbnRyb2wuZWxlbWVudCk7XG5cblx0XHRpZiAodGhpcy5jb250cm9scyA9PSBudWxsKSB7XG5cdFx0XHR0aGlzLmNvbnRyb2xzID0gW107XG5cdFx0fVxuXHRcdGlmICh0aGlzLmNvbnRyb2xzW2luZGV4Um93XSA9PSBudWxsKSB7XG5cdFx0XHR0aGlzLmNvbnRyb2xzW2luZGV4Um93XSA9IHt9O1xuXHRcdH1cblxuXHRcdHRoaXMuY29udHJvbHNbaW5kZXhSb3ddW25hbWVdID0gY29udHJvbDtcblx0fVxuXG5cdGdldENvbnRyb2woZmlyc3QsIHNlY29uZCkge1xuXHRcdGlmKHNlY29uZCA9PSBudWxsKSB7XG5cdFx0XHRjb25zdCBuYW1lID0gZmlyc3Q7XG5cdFx0XHRmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5jb250cm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZih0aGlzLmNvbnRyb2xzW2ldW25hbWVdICE9IG51bGwpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5jb250cm9sc1tpXVtuYW1lXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zdCBuYW1lID0gZmlyc3Q7XG5cdFx0XHRjb25zdCBpbmRleFJvdyA9IHNlY29uZDtcblx0XHRcdHJldHVybiB0aGlzLmNvbnRyb2xzW2luZGV4Um93XVtuYW1lXTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGFkZFJvdygpIHtcblx0XHRjb25zdCBlbGVtUm93ID0gY3JlYXRlRWwoJ2RpdicsIHtcblx0XHRcdGNsYXNzTmFtZSA6IGBsZXBsYXllci1jb250cm9scyBjb250cm9scy0ke3RoaXMub3B0aW9ucy5uYW1lfWBcblx0XHR9KTtcblxuXHRcdGlmICh0aGlzLl9yb3dzID09IG51bGwpIHtcblx0XHRcdHRoaXMuX3Jvd3MgPSBbXVxuXHRcdH1cblx0XHR0aGlzLl9yb3dzLnB1c2goZWxlbVJvdyk7XG5cdFx0dGhpcy5lbGVtZW50LmFwcGVuZChlbGVtUm93KTtcblxuXHRcdHJldHVybiBlbGVtUm93O1xuXHR9XG5cblx0Z2V0Um93KGluZGV4Um93KSB7XG5cdFx0cmV0dXJuIHRoaXMuX3Jvd3NbaW5kZXhSb3cgfHwgMF07XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdGNvbnN0IHsgbmFtZSwgY29udHJvbHMsIGFsaWduIH0gPSB0aGlzLm9wdGlvbnM7XG5cdFx0bGV0IGdsb2JhbEFsaWduID0gbnVsbDtcblxuXHRcdHRoaXMuZWxlbWVudCA9IGNyZWF0ZUVsKCdkaXYnLCB7XG5cdFx0XHRjbGFzc05hbWUgOiBgbGVwbGF5ZXItY29udHJvbC1jb2xsZWN0aW9uIGxlcGxheWVyLWNvbnRyb2wtY29sbGVjdGlvbi0tJHtuYW1lfWAsXG5cdFx0fSlcblxuXHRcdGlmKHR5cGVvZiBhbGlnbiA9PT0gJ3N0cmluZycpIHtcblx0XHRcdGdsb2JhbEFsaWduID0gYWxpZ247XG5cdFx0fVxuXG5cdFx0Y29udHJvbHMuZm9yRWFjaCgocm93LCBpbmRleFJvdykgPT4ge1xuXHRcdFx0Y29uc3QgZWxlbVJvdyA9IHRoaXMuYWRkUm93KCk7XG5cdFx0XHRsZXQgcm93QWxpZ24gPSBnbG9iYWxBbGlnbjtcblxuXHRcdFx0aWYoQXJyYXkuaXNBcnJheShhbGlnbikgJiYgYWxpZ25baW5kZXhSb3ddKSB7XG5cdFx0XHRcdHJvd0FsaWduID0gYWxpZ25baW5kZXhSb3ddXG5cdFx0XHR9XG5cblx0XHRcdHJvdy5mb3JFYWNoKGNvbnRyb2xOYW1lID0+IHtcblxuXHRcdFx0XHRpZihjb250cm9sTmFtZSA9PT0gJ3RpbWVsaW5lJyAmJiByb3dBbGlnbiAhPT0gJ2p1c3RpZnknKSB7XG5cdFx0XHRcdFx0Y29uc29sZS53YXJuKCdDb25yb2xzIHNob3VsZCBoYXZlIGp1c3RpZnkgYWxpZ24sIGlmIHRoZXJlIGlzIHRoZSB0aW1lbGluZSBpbiBpdCcpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5hZGRDb250cm9sKGluZGV4Um93LCBjb250cm9sTmFtZSwgdGhpcy5fZ2V0Q29udHJvbE9wdGlvbnMobmFtZSkpO1xuXHRcdFx0fSk7XG5cblx0XHRcdGVsZW1Sb3cuYWRkQ2xhc3MoYGxlcGxheWVyLWNvbnRyb2xzLS0ke3Jvd0FsaWdufWApXG5cdFx0XHRcdC5hdHRyKCd0YWJpbmRleCcsIDApO1xuXG5cdFx0XHRlbGVtUm93LmZpbmQoJy5kaXZpZGVyICsgLmRpdmlkZXInKS5yZW1vdmUoKTtcblx0XHR9KTtcblxuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQ7XG5cdH1cblxuXHRoaWRlICgpIHtcblx0XHR0aGlzLmVsZW1lbnQuaGlkZSgpO1xuXHRcdHRoaXMuZWxlbWVudC5maW5kKCcubGVwbGF5ZXItY29udHJvbHMnKS5oaWRlKClcblx0fVxuXG5cdHNob3cgKCkge1xuXHRcdHRoaXMuZWxlbWVudC5zaG93KClcblx0XHR0aGlzLmVsZW1lbnQuZmluZCgnLmxlcGxheWVyLWNvbnRyb2xzJykuc2hvdygpXG5cdH1cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdDb250cm9sQ29sbGVjdGlvbicsIENvbnRyb2xDb2xsZWN0aW9uKTtcbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xDb2xsZWN0aW9uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvQ29udHJvbENvbGxlY3Rpb24uanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIFNlY3Rpb25zLmpzXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuXG5pbXBvcnQgeyBzZWNvbmRzVG9UaW1lLCBnZXRTY3JvbGxCYXJXaWR0aCB9IGZyb20gJy4uL3V0aWxzJztcbi8qKlxuICogQGNsYXNzIFNlY3Rpb25zXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAcGFyYW0ge0FycmF5fSBbb3B0aW9ucy5pdGVtcz1bXX0gRGF0YSBmb3Igc2VjdGlvbnNcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMudmlld3NdIFNob3cgc2VjdGlvbiBvbmx5IGluIGZ1bGxzY3JlZW5cbiAqIEBleHRlbmRzIENvbXBvbmVudFxuICovXG5jbGFzcyBTZWN0aW9ucyBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucykge1xuXHRcdGxldCB7IGl0ZW1zID0gW10gfSA9IG9wdGlvbnM7XG5cdFx0aXRlbXMgPSBbXS5jb25jYXQoaXRlbXMpO1xuXG5cdFx0Ly9vcHRpb25zLml0ZW1zID0gaXRlbXM7XG5cblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXG5cdFx0dGhpcy5zY3JvbGxFbGVtZW50ID0gdGhpcy5faW5uZXJFbGVtZW50O1xuXHRcdHRoaXMuYWN0aXZlU2VjdGlvbiA9IHRoaXMuZ2V0U2VjdGlvbkJ5SW5kZXgoMCk7XG5cblx0XHR0aGlzLml0ZW1zID0gaXRlbXM7XG5cdFx0dGhpcy5sZW5ndGggPSB0aGlzLml0ZW1zLmxlbmd0aDtcblxuXHRcdHRoaXMuc2V0QWN0aXZlQnlJbmRleCgwKTtcblxuXHRcdHRoaXMuZWxlbWVudFxuXHRcdFx0LmZpbmQoJy5sZXBsYXllci1zZWN0aW9uJylcblx0XHRcdC5vbignY2xpY2snLCB0aGlzLm9uU2VjdGlvbkNsaWNrLmJpbmQodGhpcykpO1xuXG5cdFx0Ly8gdGhpcy5wbGF5ZXIub24oJ3NlY3Rpb25zdG9nZ2xlJywgdGhpcy5fb25TZWN0aW9uc1RvZ2dsZS5iaW5kKHRoaXMpKTtcblxuXHRcdHRoaXMucGxheWVyLm9uKCd0aW1ldXBkYXRlJywgdGhpcy5vblRpbWVVcGRhdGUuYmluZCh0aGlzKSk7XG5cblx0XHR0aGlzLnBsYXllci5vbignaW5pdGVkJywgdGhpcy51cGRhdGVTZWN0aW9uRHVyYXRpb24uYmluZCh0aGlzKSk7XG5cblx0XHR0aGlzLnBsYXllci5vbignZHVyYXRpb25jaGFuZ2UnLCB0aGlzLnVwZGF0ZVNlY3Rpb25EdXJhdGlvbi5iaW5kKHRoaXMpKTtcblxuXHRcdHRoaXMucGxheWVyLm9uKCdmb2N1cycsICgpID0+IHRoaXMucGxheWVyLmZvY3VzKCkpO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRuZXh0KCkge1xuXHRcdGNvbnN0IHNlY3Rpb25JbmRleCA9IHBhcnNlSW50KHRoaXMuYWN0aXZlU2VjdGlvbi5hdHRyKCdkYXRhLWluZGV4JykpO1xuXHRcdGNvbnN0IG5ld0luZGV4ID0gc2VjdGlvbkluZGV4ID49IHRoaXMubGVuZ3RoID8gdGhpcy5sZW5ndGggOiBzZWN0aW9uSW5kZXggKyAxO1xuXG5cdFx0dGhpcy5zZXRBY3RpdmVCeUluZGV4KG5ld0luZGV4KTtcblxuXHRcdHRoaXMucGxheWVyLnZpZGVvLmN1cnJlbnRUaW1lID0gdGhpcy5pdGVtc1tzZWN0aW9uSW5kZXhdLmVuZDtcblx0fVxuXG5cdHByZXYoKSB7XG5cdFx0Y29uc3Qgc2VjdGlvbkluZGV4ID0gcGFyc2VJbnQodGhpcy5hY3RpdmVTZWN0aW9uLmF0dHIoJ2RhdGEtaW5kZXgnKSk7XG5cdFx0Y29uc3QgbmV3SW5kZXggPSBzZWN0aW9uSW5kZXggPD0gMCA/IDAgOiBzZWN0aW9uSW5kZXggLSAxO1xuXG5cdFx0dGhpcy5zZXRBY3RpdmVCeUluZGV4KG5ld0luZGV4KTtcblx0XHR0aGlzLnBsYXllci52aWRlby5jdXJyZW50VGltZSA9IHRoaXMuaXRlbXNbbmV3SW5kZXhdLmJlZ2luO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHRjb25zdCB7IGZ1bGxzY3JlZW5Pbmx5LCBoaWRlU2Nyb2xsIH0gPSB0aGlzLm9wdGlvbnM7XG5cblxuXHRcdHRoaXMuZWxlbWVudCA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0LmFkZENsYXNzKCdsZXBsYXllci1zZWN0aW9ucycpXG5cdFx0XHQuYXR0cigndGFiaW5kZXgnLCAnMCcpO1xuXG5cdFx0dGhpcy5faW5uZXJFbGVtZW50ID0gJCgnPGRpdiAvPicpLmFkZENsYXNzKCdsZXBsYXllci1zZWN0aW9uc19faW5uZXInKTtcblxuXHRcdGlmKGZ1bGxzY3JlZW5Pbmx5KSB7XG5cdFx0XHR0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoJ2xlcGxheWVyLXNlY3Rpb25zLS1mc29ubHknKTtcblx0XHR9XG5cblx0XHRpZihoaWRlU2Nyb2xsKSB7XG5cdFx0XHR0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoJ2xlcGxheWVyLXNlY3Rpb25zLS1oaWRlLXNjcm9sbCcpO1xuXHRcdFx0dGhpcy5faW5uZXJFbGVtZW50LmNzcyh7XG5cdFx0XHRcdHJpZ2h0IDogLTEgKiBnZXRTY3JvbGxCYXJXaWR0aCgpXG5cdFx0XHR9KVxuXHRcdH1cblxuXHRcdHRoaXMuZWxlbWVudC5hcHBlbmQoXG5cdFx0XHR0aGlzLl9pbm5lckVsZW1lbnQuYXBwZW5kKHRoaXMuX2NyZWF0ZVNlY3Rpb25zKHRoaXMub3B0aW9ucy5pdGVtcykpXG5cdFx0KVxuXG5cblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50O1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0dXBkYXRlU2VjdGlvbkR1cmF0aW9uKCkge1xuXHRcdGlmKHRoaXMuaXRlbXMgIT0gbnVsbCAmJiB0aGlzLml0ZW1zLmxlbmd0aCA+IDApIHtcblx0XHRcdGNvbnN0IGxlbmd0aCA9IHRoaXMuaXRlbXMubGVuZ3RoXG5cdFx0XHR0aGlzLml0ZW1zW2xlbmd0aCAtIDFdLmVuZCA9IHRoaXMucGxheWVyLnZpZGVvLmR1cmF0aW9uO1xuXG5cdFx0XHQvLyBUT0RPOiDQn9GA0L7QtNGD0LzQsNGC0Ywg0YTRg9C90LrRhtC40Y/RjiB1cGRhdGVTZWN0aW9uXG5cdFx0XHQvL3RoaXMudXBkYXRlU2VjdGlvbih0aGlzLml0ZW1zW2xlbmd0aCAtIDFdLCBsZW5ndGggLSAxKTtcblx0XHR9XG5cdH1cblxuXG5cdG9uU2VjdGlvbkNsaWNrKGUpIHtcblx0XHRjb25zdCB2aWRlbyA9IHRoaXMucGxheWVyLnZpZGVvO1xuXHRcdGNvbnN0IHNlY3Rpb24gPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCcubGVwbGF5ZXItc2VjdGlvbicpO1xuXHRcdHZpZGVvLmN1cnJlbnRUaW1lID0gc2VjdGlvbi5hdHRyKCdkYXRhLWJlZ2luJyk7XG5cdFx0dGhpcy5wbGF5ZXIudHJpZ2dlcignc2VjdGlvbnNjbGljaycsIHsgc2VjdGlvbiA6IHRoaXMuaXRlbXNbc2VjdGlvbi5hdHRyKCdkYXRhLWluZGV4JyldfSk7XG5cdH1cblxuXHRzZXRBY3RpdmVCeUluZGV4KGluZGV4KSB7XG5cdFx0aWYgKFxuXHRcdFx0dGhpcy5hY3RpdmVTZWN0aW9uLmxlbmd0aCA9PT0gMCB8fFxuXHRcdFx0cGFyc2VJbnQodGhpcy5hY3RpdmVTZWN0aW9uLmF0dHIoJ2RhdGEtaW5kZXgnKSkgPT09IGluZGV4IHx8XG5cdFx0XHR0aGlzLmdldFNlY3Rpb25CeUluZGV4KGluZGV4KS5sZW5ndGggPT09IDBcblx0XHQpIHtcblx0XHRcdHJldHVybiB0aGlzXG5cdFx0fVxuXG5cdFx0dGhpcy5hY3RpdmVTZWN0aW9uLnJlbW92ZUNsYXNzKCdsZXBsYXllci1zZWN0aW9uLS1hY3RpdmUnKTtcblx0XHR0aGlzLmFjdGl2ZVNlY3Rpb24gPSB0aGlzLmdldFNlY3Rpb25CeUluZGV4KGluZGV4KTtcblx0XHR0aGlzLmFjdGl2ZVNlY3Rpb24uYWRkQ2xhc3MoJ2xlcGxheWVyLXNlY3Rpb24tLWFjdGl2ZScpO1xuXG5cdFx0Y29uc3QgdG9wUG9zaXRpb24gPSB0aGlzLmFjdGl2ZVNlY3Rpb24ucG9zaXRpb24oKS50b3A7XG5cblx0XHR0aGlzLnNjcm9sbEVsZW1lbnRcblx0XHRcdC5hbmltYXRlKHtcblx0XHRcdFx0c2Nyb2xsVG9wIDogdGhpcy5zY3JvbGxFbGVtZW50LnNjcm9sbFRvcCgpICsgdG9wUG9zaXRpb25cblx0XHRcdH0sIDgwMClcblxuXHRcdHRoaXMucGxheWVyLnRyaWdnZXIoJ3NlY3Rpb25zY2hhbmdlJywgeyBzZWN0aW9uIDogdGhpcy5pdGVtc1tpbmRleF19KTtcblxuXHRcdHJldHVybiB0aGlzXG5cdH1cblxuXHRnZXRTZWN0aW9uQnlJbmRleChpbmRleCkge1xuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQuZmluZChgLmxlcGxheWVyLXNlY3Rpb25bZGF0YS1pbmRleD1cIiR7aW5kZXh9XCJdYCk7XG5cdH1cblxuXG5cdG9uVGltZVVwZGF0ZShlLCBkYXRhKSB7XG5cdFx0aWYgKHRoaXMuYWN0aXZlU2VjdGlvbi5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVyblxuXHRcdH1cblxuXHRcdGNvbnN0IGN1cnJlbnRUaW1lID0gdGhpcy5wbGF5ZXIuY3VycmVudFRpbWU7XG5cblx0XHQvLyBVcGRhdGUgc3BhbiB3aXRoIGVuZCBzZWN0aW9uIHRpbWVcblx0XHQvLyBUT0RPOiDQktGL0L3QtdGB0YLQuCDRjdGC0L4g0LIg0L7RgtC00LXQu9GM0L3Ri9C5INC60L7QvNC/0L7QvdC10L3RgiBTaG93VGltZSDQuNC70Lgg0YLQuNC/0L4g0YLQvtCz0L5cblx0XHRpZih0aGlzLnBsYXllci52aWV3ID09PSAnbWluaScpIHtcblx0XHRcdGNvbnN0IGVuZFNlY3Rpb25UaW1lID0gdGhpcy5hY3RpdmVTZWN0aW9uLmF0dHIoJ2RhdGEtZW5kJyk7XG5cdFx0XHR0aGlzLmFjdGl2ZVNlY3Rpb25cblx0XHRcdFx0Lm5leHQoKVxuXHRcdFx0XHQuZmluZCgnLnRpbWUnKVxuXHRcdFx0XHQudGV4dChzZWNvbmRzVG9UaW1lKGVuZFNlY3Rpb25UaW1lIC0gY3VycmVudFRpbWUpKTtcblx0XHR9XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IHNlY3Rpb24gPSB0aGlzLml0ZW1zW2ldO1xuXHRcdFx0aWYgKGN1cnJlbnRUaW1lIDwgc2VjdGlvbi5lbmQpIHtcblx0XHRcdFx0dGhpcy5zZXRBY3RpdmVCeUluZGV4KGkpXG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHNldCB2aXNpYmxlKHZhbHVlKSB7XG5cdFx0aWYgKHRoaXMuZWxlbWVudC5oYXNDbGFzcygnbGVwbGF5ZXItc2VjdGlvbnMtLWhpZGRlbicpICYmIHZhbHVlKSB7XG5cdFx0XHR0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3MoJ2xlcGxheWVyLXNlY3Rpb25zLS1oaWRkZW4nKTtcblx0XHRcdHRoaXMucGxheWVyLnRyaWdnZXIoJ3NlY3Rpb25zdG9nZ2xlJywgeyBpc1Zpc2libGUgOiB2YWx1ZSB9KTtcblx0XHR9IGVsc2UgaWYgKCF2YWx1ZSkge1xuXHRcdFx0dGhpcy5lbGVtZW50LmFkZENsYXNzKCdsZXBsYXllci1zZWN0aW9ucy0taGlkZGVuJyk7XG5cdFx0XHR0aGlzLnBsYXllci50cmlnZ2VyKCdzZWN0aW9uc3RvZ2dsZScsIHsgaXNWaXNpYmxlIDogdmFsdWUgfSk7XG5cdFx0fVxuXHR9XG5cblx0Z2V0IHZpc2libGUoKSB7XG5cdFx0cmV0dXJuICF0aGlzLmVsZW1lbnQuaGFzQ2xhc3MoJ2xlcGxheWVyLXNlY3Rpb25zLS1oaWRkZW4nKVxuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZSBIVE1MIG9mIHNlY3Rpb24gYnkgZGF0YSBhbmQgaW5kZXggc2VjdGlvblxuXHQgKlxuXHQgKiBAcmV0dXJucyB7U3RyaW5nfSBIVE1MXG5cdCAqL1xuXHRjcmVhdGVTZWN0aW9uKHNlY3Rpb24sIGluZGV4KSB7XG5cdFx0Y29uc3QgaXRlbXMgPSB0aGlzLml0ZW1zIHx8IHRoaXMub3B0aW9ucy5pdGVtcztcblx0XHRjb25zdCBpdGVtID0gYFxuXHRcdFx0PGRpdiBjbGFzcz1cImxlcGxheWVyLXNlY3Rpb24gJHshaW5kZXggPyAnbGVwbGF5ZXItc2VjdGlvbi0tYWN0aXZlJyA6ICcnfVwiXG5cdFx0XHRcdGRhdGEtYmVnaW49XCIke3NlY3Rpb24uYmVnaW59XCJcblx0XHRcdFx0ZGF0YS1pbmRleD1cIiR7aW5kZXgudG9TdHJpbmcoKX1cIlxuXHRcdFx0XHRkYXRhLWVuZD1cIiR7c2VjdGlvbi5lbmR9XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJsZXBsYXllci1zZWN0aW9uLXRpbWVcIj4ke3NlY29uZHNUb1RpbWUoc2VjdGlvbi5iZWdpbil9PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJsZXBsYXllci1zZWN0aW9uLWluZm9cIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibGVwbGF5ZXItc2VjdGlvbi1uZXh0LWluZm9cIj5cblx0XHRcdFx0XHRcdCR7c2VjdGlvbi5uZXh0SW5mbyB8fCAn0KHQu9C10LTRg9GO0YnQsNGPINGB0LXQutGG0LjRjyDQvdCw0YfQvdC10YLRgdGPINGH0LXRgNC10LcnfVxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJ0aW1lXCI+JHtzZWNvbmRzVG9UaW1lKGl0ZW1zWzBdLmVuZCl9PC9zcGFuPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdCR7XG5cdFx0XHRcdFx0XHRzZWN0aW9uLnRpdGxlICE9IG51bGwgP1xuXHRcdFx0XHRcdFx0XHRgPGRpdiBjbGFzcz1cImxlcGxheWVyLXNlY3Rpb24tdGl0bGVcIj4ke3NlY3Rpb24udGl0bGV9PC9kaXY+YFxuXHRcdFx0XHRcdFx0OiAnJ1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQke1xuXHRcdFx0XHRcdFx0c2VjdGlvbi5kZXNjcmlwdGlvbiAhPSBudWxsID9cblx0XHRcdFx0XHRcdFx0YDxkaXYgY2xhc3M9XCJsZXBsYXllci1zZWN0aW9uLWRlc2NyaXB0aW9uXCI+JHtzZWN0aW9uLmRlc2NyaXB0aW9ufTwvZGl2PmBcblx0XHRcdFx0XHRcdDogJydcblx0XHRcdFx0XHR9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0YC50cmltKClcblx0XHRyZXR1cm4gaXRlbVxuXHR9XG5cblx0Ly8gVE9ETzog0J/RgNC40LTRg9C80LDRgtGMINGH0YLQviDRgdC00LXQu9Cw0YLRjCDRgSDRgdC+0LHRi9GC0LjRj9C80Lgg0L/QvtGB0LvQtSDQvtCx0L3QvtCy0LvQtdC90LjRjyDQv9C+0LvQvdC+0YHRjNGOINGB0LXQutGG0LjQuFxuXHQvKipcblx0ICogRmluZCBzZWN0aW9uIGJ5IGluZGV4IGFuZCB1cGRhdGUgaGltIHVzaW5nIGRhdGFcblx0ICpcblx0ICogQHBhcmFtIHtPYmplY3R9IGRhdGFcblx0ICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG5cdCAqL1xuXHR1cGRhdGVTZWN0aW9uKGRhdGEsIGluZGV4KSB7XG5cdFx0dGhpcy5nZXRTZWN0aW9uQnlJbmRleChpbmRleClcblx0XHRcdC5yZXBsYWNlV2l0aCh0aGlzLmNyZWF0ZVNlY3Rpb24oZGF0YSwgaW5kZXgpKVxuXHRcdFx0Lm9uKCdjbGljaycsIHRoaXMub25TZWN0aW9uQ2xpY2suYmluZCh0aGlzKSk7XG5cdH1cblxuXHRfY3JlYXRlU2VjdGlvbnMoaXRlbXMpIHtcblx0XHRsZXQgcmVzdWx0ID0gJyc7XG5cdFx0aXRlbXMuZm9yRWFjaCgoc2VjdGlvbiwgaW5kZXgpID0+IHtcblx0XHRcdHJlc3VsdCArPSB0aGlzLmNyZWF0ZVNlY3Rpb24oc2VjdGlvbiwgaW5kZXgpO1xuXHRcdH0pO1xuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdTZWN0aW9ucycsIFNlY3Rpb25zKTtcbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb25zO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvU2VjdGlvbnMuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIEVycm9yRGlzcGxheS5qc1xuICovXG5cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEBjbGFzcyBFcnJvckRpc3BsYXlcbiAqIEBleHRlbmRzIENvbXBvbmVudFxuICovXG5jbGFzcyBFcnJvckRpc3BsYXkgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucz17fSkge1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cdFx0aWYodGhpcy5wbGF5ZXIuX2Vycm9yICE9IG51bGwpIHtcblx0XHRcdHRoaXMubWVzc2FnZSA9IHRoaXMucGxheWVyLl9lcnJvci5tZXNzYWdlO1xuXHRcdFx0dGhpcy5lbGVtZW50LnNob3coKTtcblx0XHR9XG5cdFx0dGhpcy5wbGF5ZXIub24oJ2Vycm9yJywgdGhpcy5vblBsYXllckVycm9yLmJpbmQodGhpcykpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHR0aGlzLmVsZW1lbnQgPSAkKCc8ZGl2IC8+Jylcblx0XHRcdC5hZGRDbGFzcygnbGVwbGF5ZXItZXJyb3ItZGlzcGxheScpXG5cdH1cblxuXHRzZXQgbWVzc2FnZSh2YWx1ZSkge1xuXHRcdHRoaXMuZWxlbWVudC5odG1sKHZhbHVlKTtcblx0fVxuXG5cdG9uUGxheWVyRXJyb3IoZSwgZGF0YSkge1xuXHRcdGNvbnN0IGVycm9yID0gZGF0YS5lcnJvcjtcblx0XHR0aGlzLm1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xuXHRcdHRoaXMuZWxlbWVudC5zaG93KCk7XG5cdH1cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdFcnJvckRpc3BsYXknLCBFcnJvckRpc3BsYXkpO1xuZXhwb3J0IGRlZmF1bHQgRXJyb3JEaXNwbGF5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvRXJyb3JEaXNwbGF5LmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBFcnJvckRpc3BsYXkuanNcbiAqL1xuXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcblxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMudXJsXSBwYXRoIHRvIHBvc3RlciBpbWFnZVxuICogQGNsYXNzIFBvc3RlclxuICogQGV4dGVuZHMgQ29tcG9uZW50XG4gKi9cbmNsYXNzIFBvc3RlciBleHRlbmRzIENvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHR1cmwgOiBvcHRpb25zLnVybFxuXHRcdH0sIG9wdGlvbnMpO1xuXG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblxuXHRcdHRoaXMudXJsID0gdGhpcy5vcHRpb25zLnVybDtcblx0fVxuXG5cdHNldCB1cmwodmFsdWUpIHtcblx0XHRpZih2YWx1ZSA9PSBudWxsKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMuX3VybCA9IHZhbHVlO1xuXHRcdHRoaXMuZWxlbWVudC5jc3MoJ2JhY2tncm91bmQtaW1hZ2UnLCBgdXJsKFwiJHt2YWx1ZX1cIilgKVxuXHR9XG5cblx0Z2V0IHVybCgpIHtcblx0XHRyZXR1cm4gdGhpcy5fdXJsO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHR0aGlzLmVsZW1lbnQgPSAkKCc8ZGl2IC8+Jylcblx0XHRcdC5hZGRDbGFzcygnbGVwbGF5ZXItcG9zdGVyJyk7XG5cblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50O1xuXHR9XG5cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdQb3N0ZXInLCBQb3N0ZXIpO1xuZXhwb3J0IGRlZmF1bHQgUG9zdGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvUG9zdGVyLmpzIiwiLyoqXG4gKiBAZmlsZSBmdWxsc2NyZWVuLWFwaS5qc1xuICovXG5cblxuLypcbiAqIFN0b3JlIHRoZSBicm93c2VyLXNwZWNpZmljIG1ldGhvZHMgZm9yIHRoZSBmdWxsc2NyZWVuIEFQSVxuICogQHR5cGUge09iamVjdHx1bmRlZmluZWR9XG4gKiBAcHJpdmF0ZVxuICovXG5sZXQgRnVsbHNjcmVlbkFwaSA9IHt9O1xuXG4vLyBicm93c2VyIEFQSSBtZXRob2RzXG4vLyBtYXAgYXBwcm9hY2ggZnJvbSBTY3JlZW5mdWwuanMgLSBodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL3NjcmVlbmZ1bGwuanNcbmNvbnN0IGFwaU1hcCA9IFtcblx0Ly8gU3BlYzogaHR0cHM6Ly9kdmNzLnczLm9yZy9oZy9mdWxsc2NyZWVuL3Jhdy1maWxlL3RpcC9PdmVydmlldy5odG1sXG5cdFtcblx0XHQncmVxdWVzdEZ1bGxzY3JlZW4nLFxuXHRcdCdleGl0RnVsbHNjcmVlbicsXG5cdFx0J2Z1bGxzY3JlZW5FbGVtZW50Jyxcblx0XHQnZnVsbHNjcmVlbkVuYWJsZWQnLFxuXHRcdCdmdWxsc2NyZWVuY2hhbmdlJyxcblx0XHQnZnVsbHNjcmVlbmVycm9yJ1xuXHRdLFxuXHQvLyBXZWJLaXRcblx0W1xuXHRcdCd3ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbicsXG5cdFx0J3dlYmtpdEV4aXRGdWxsc2NyZWVuJyxcblx0XHQnd2Via2l0RnVsbHNjcmVlbkVsZW1lbnQnLFxuXHRcdCd3ZWJraXRGdWxsc2NyZWVuRW5hYmxlZCcsXG5cdFx0J3dlYmtpdGZ1bGxzY3JlZW5jaGFuZ2UnLFxuXHRcdCd3ZWJraXRmdWxsc2NyZWVuZXJyb3InXG5cdF0sXG5cdC8vIE9sZCBXZWJLaXQgKFNhZmFyaSA1LjEpXG5cdFtcblx0XHQnd2Via2l0UmVxdWVzdEZ1bGxTY3JlZW4nLFxuXHRcdCd3ZWJraXRDYW5jZWxGdWxsU2NyZWVuJyxcblx0XHQnd2Via2l0Q3VycmVudEZ1bGxTY3JlZW5FbGVtZW50Jyxcblx0XHQnd2Via2l0Q2FuY2VsRnVsbFNjcmVlbicsXG5cdFx0J3dlYmtpdGZ1bGxzY3JlZW5jaGFuZ2UnLFxuXHRcdCd3ZWJraXRmdWxsc2NyZWVuZXJyb3InXG5cdF0sXG5cdC8vIE1vemlsbGFcblx0W1xuXHRcdCdtb3pSZXF1ZXN0RnVsbFNjcmVlbicsXG5cdFx0J21vekNhbmNlbEZ1bGxTY3JlZW4nLFxuXHRcdCdtb3pGdWxsU2NyZWVuRWxlbWVudCcsXG5cdFx0J21vekZ1bGxTY3JlZW5FbmFibGVkJyxcblx0XHQnbW96ZnVsbHNjcmVlbmNoYW5nZScsXG5cdFx0J21vemZ1bGxzY3JlZW5lcnJvcidcblx0XSxcblx0Ly8gTWljcm9zb2Z0XG5cdFtcblx0XHQnbXNSZXF1ZXN0RnVsbHNjcmVlbicsXG5cdFx0J21zRXhpdEZ1bGxzY3JlZW4nLFxuXHRcdCdtc0Z1bGxzY3JlZW5FbGVtZW50Jyxcblx0XHQnbXNGdWxsc2NyZWVuRW5hYmxlZCcsXG5cdFx0J01TRnVsbHNjcmVlbkNoYW5nZScsXG5cdFx0J01TRnVsbHNjcmVlbkVycm9yJ1xuXHRdXG5dO1xuXG5cbmxldCBzcGVjQXBpID0gYXBpTWFwWzBdO1xuXG5sZXQgYnJvd3NlckFwaTtcblxuLy8gZGV0ZXJtaW5lIHRoZSBzdXBwb3J0ZWQgc2V0IG9mIGZ1bmN0aW9uc1xuZm9yIChsZXQgaSA9IDA7IGkgPCBhcGlNYXAubGVuZ3RoOyBpKyspIHtcblx0Ly8gY2hlY2sgZm9yIGV4aXRGdWxsc2NyZWVuIGZ1bmN0aW9uXG5cdGlmIChhcGlNYXBbaV1bMV0gaW4gZG9jdW1lbnQpIHtcblx0XHRicm93c2VyQXBpID0gYXBpTWFwW2ldO1xuXHRcdGJyZWFrO1xuXHR9XG59XG5cbi8vIG1hcCB0aGUgYnJvd3NlciBBUEkgbmFtZXMgdG8gdGhlIHNwZWMgQVBJIG5hbWVzXG5pZiAoYnJvd3NlckFwaSkge1xuXHRmb3IgKGxldCBpPTA7IGk8YnJvd3NlckFwaS5sZW5ndGg7IGkrKykge1xuXHRcdEZ1bGxzY3JlZW5BcGlbc3BlY0FwaVtpXV0gPSBicm93c2VyQXBpW2ldO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZ1bGxzY3JlZW5BcGk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvRnVsbHNjcmVlbkFwaS5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgY29va2llLWNvbnRyb2wuanNcbiAqXG4gKiBAY2xhcyBDb29raWVcbiAqL1xuY2xhc3MgQ29va2llIHtcblx0LyoqXG5cdCAqIEBwdWJsaWNcblx0ICpcblx0ICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgTmFtZSBvZiBjb29raWVcblx0ICogQHBhcmFtIHtTdHJpbmd9IFtkZmx0XSBSZXR1cm4gZGVmYXVsdCB2YWx1ZSBpZiB0aGlzIGZpZWxkIGlzIGVtcHR5XG5cdCAqXG5cdCAqL1xuXHRzdGF0aWMgZ2V0IChuYW1lLCBkZmx0KSB7XG5cdFx0bGV0IGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKTtcblx0XHRmb3IgKGxldCBpIGluIGNvb2tpZXMpIHtcblx0XHRcdHZhciBkID0gY29va2llc1sgaSBdLnRyaW0oKS5zcGxpdCgnPScpO1xuXHRcdFx0aWYgKGRbIDAgXSA9PT0gJ2xlcGxheWVyXycgKyBuYW1lKVxuXHRcdFx0XHRyZXR1cm4gZFsgMSBdO1xuXHRcdH1cblx0XHRyZXR1cm4gZGZsdDtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcHVibGljXG5cdCAqXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIEtleVxuXHQgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgVmFsdWVcblx0ICovXG5cdHN0YXRpYyBzZXQgKG5hbWUsIHZhbHVlKSB7XG5cdFx0dmFyIGQgPSBuZXcgRGF0ZSgpO1xuXHRcdGQuc2V0RGF0ZShkLnllYXIgKyAxKTtcblx0XHRkb2N1bWVudC5jb29raWUgPSAnbGVwbGF5ZXJfJyArIG5hbWUgKyAnPScgKyB2YWx1ZSArICc7ZXhwaXJlcz0nICsgZC50b1N0cmluZygpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvb2tpZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy91dGlscy9jb29raWUuanMiLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5jbGFzcyBNZWRpYUVycm9yIHtcblx0Y29uc3RydWN0b3IodmFsdWUpIHtcblx0XHRpZih2YWx1ZSBpbnN0YW5jZW9mIE1lZGlhRXJyb3IpIHtcblx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdHRoaXMuY29kZSA9IHZhbHVlO1xuXHRcdH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuXHRcdC8vIGRlZmF1bHQgY29kZSBpcyB6ZXJvLCBzbyB0aGlzIGlzIGEgY3VzdG9tIGVycm9yXG5cdFx0XHR0aGlzLm1lc3NhZ2UgPSB2YWx1ZTtcblx0XHR9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcblxuXHRcdFx0Ly8gV2UgYXNzaWduIHRoZSBgY29kZWAgcHJvcGVydHkgbWFudWFsbHkgYmVjYXVzZSBuYXRpdmUgTWVkaWFFcnJvciBvYmplY3RzXG5cdFx0XHQvLyBkbyBub3QgZXhwb3NlIGl0IGFzIGFuIG93bi9lbnVtZXJhYmxlIHByb3BlcnR5IG9mIHRoZSBvYmplY3QuXG5cdFx0XHRpZiAodHlwZW9mIHZhbHVlLmNvZGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdHRoaXMuY29kZSA9IHZhbHVlLmNvZGU7XG5cdFx0XHR9XG5cblx0XHRcdCQuZXh0ZW5kKHRoaXMsIHZhbHVlKTtcblx0XHR9XG5cblx0XHRpZiAoIXRoaXMubWVzc2FnZSkge1xuXHRcdFx0dGhpcy5tZXNzYWdlID0gTWVkaWFFcnJvci5kZWZhdWx0TWVzc2FnZXNbdGhpcy5jb2RlXSB8fCAnJztcblx0XHR9XG5cdH1cbn1cblxuTWVkaWFFcnJvci5wcm90b3R5cGUuY29kZSA9IDA7XG5cbk1lZGlhRXJyb3IucHJvdG90eXBlLm1lc3NhZ2UgPSAnJztcblxuTWVkaWFFcnJvci5lcnJvclR5cGVzID0gW1xuXHQnTUVESUFfRVJSX0NVU1RPTScsXG5cdCdNRURJQV9FUlJfQUJPUlRFRCcsXG5cdCdNRURJQV9FUlJfTkVUV09SSycsXG5cdCdNRURJQV9FUlJfREVDT0RFJyxcblx0J01FRElBX0VSUl9TUkNfTk9UX1NVUFBPUlRFRCcsXG5cdCdNRURJQV9FUlJfRU5DUllQVEVEJ1xuXTtcblxuXG5NZWRpYUVycm9yLmRlZmF1bHRNZXNzYWdlcyA9IHtcblx0MSA6ICfQktGLINC/0YDQtdGA0LLQsNC70Lgg0LfQsNCz0YDRg9C30LrRgyDQstC40LTQtdC+LicsXG5cdDIgOiAn0JfQsNCz0YDRg9C30LrQsCDQstC40LTQtdC+INC/0YDQtdGA0LLQsNC90LAg0LjQty3Qt9CwINC/0L7RgtC10YDQuCDRgdC+0LXQtNC40L3QtdC90LjRjy4nLFxuXHQzIDogJ9CX0LDQs9GA0YPQt9C60LAg0LLQuNC00LXQviDQvtGB0YLQsNC90L7QstC70LXQvdCwINC40Lct0LfQsCDQv9GA0L7QsdC70LXQvCDRgSDQstC40LTQtdC+0YTQsNC50LvQvtC8INC40LvQuCDQuNC3LdC30LAg0YLQvtCz0L4sINGH0YLQviDQstCw0Ygg0LHRgNCw0YPQt9C10YAg0L3QtSDQv9C+0LTQtNC10YDQttC40LLQsNC10YIg0LLQvtGB0L/RgNC+0LjQt9Cy0LXQtNC10L3QuNC1INC00LDQvdC90L7Qs9C+INGE0LDQudC70LAuJyxcblx0NCA6ICfQktC40LTQtdC+INC90LUg0LzQvtC20LXRgiDQsdGL0YLRjCDQt9Cw0LPRgNGD0LbQtdC90L4g0LjQty3Qt9CwINC/0YDQvtCx0LvQtdC8INGBINC40L3RgtC10YDQvdC10YIt0YHQvtC10LTQuNC90LXQvdC40LXQvCDQuNC70Lgg0L/RgNC+0LHQu9C10Lwg0L3QsCDRgdC10YDQstC10YDQtS4g0JjQu9C4INGE0L7RgNC80LDRgiDRhNCw0LnQu9CwINC90LUg0L/QvtC00LTQtdGA0LbQuNCy0LDQtdGC0YHRjyDQstCw0YjQuNC8INCx0YDQsNGD0LfQtdGA0L7QvC4nLFxuXHQ1IDogJ9CS0LjQtNC10L4g0LfQsNGI0LjRhNGA0L7QstCw0L3Qviwg0Lgg0LzRiyDQvdC1INC80L7QttC10Lwg0LXQs9C+INGA0LDRgdGI0LjRhNGA0L7QstCw0YLRjC4nXG59O1xuXG4vLyBBZGQgdHlwZXMgYXMgcHJvcGVydGllcyBvbiBNZWRpYUVycm9yXG4vLyBlLmcuIE1lZGlhRXJyb3IuTUVESUFfRVJSX1NSQ19OT1RfU1VQUE9SVEVEID0gNDtcbmZvciAobGV0IGVyck51bSA9IDA7IGVyck51bSA8IE1lZGlhRXJyb3IuZXJyb3JUeXBlcy5sZW5ndGg7IGVyck51bSsrKSB7XG5cdE1lZGlhRXJyb3JbTWVkaWFFcnJvci5lcnJvclR5cGVzW2Vyck51bV1dID0gZXJyTnVtO1xuXHQvLyB2YWx1ZXMgc2hvdWxkIGJlIGFjY2Vzc2libGUgb24gYm90aCB0aGUgY2xhc3MgYW5kIGluc3RhbmNlXG5cdE1lZGlhRXJyb3IucHJvdG90eXBlW01lZGlhRXJyb3IuZXJyb3JUeXBlc1tlcnJOdW1dXSA9IGVyck51bTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVkaWFFcnJvcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9NZWRpYUVycm9yLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBQbGF5Q29udHJvbC5qc1xuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCBDb250cm9sIGZyb20gJy4vQ29udHJvbCc7XG5cbi8qKlxuICogQGNsYXNzIFBsYXlDb250cm9sXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAZXh0ZW5kcyBDb250cm9sXG4gKi9cbmNsYXNzIFBsYXlDb250cm9sIGV4dGVuZHMgQ29udHJvbCB7XG5cdGNvbnN0cnVjdG9yIChwbGF5ZXIsIG9wdGlvbnM9e30pIHtcblx0XHRvcHRpb25zID0gJC5leHRlbmQoe30sIHtcblx0XHRcdGljb25OYW1lIDogJ3BsYXknLFxuXHRcdFx0dGl0bGUgOiAn0JLQvtGB0L/RgNC+0LjQt9Cy0LXRgdGC0Lgg0LLQuNC00LXQvicsXG5cdFx0XHRjbGFzc05hbWUgOiAncGxheScsXG5cdFx0XHRuYW1lIDogJ3BsYXknXG5cdFx0fSwgb3B0aW9ucyk7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblxuXHRcdHRoaXMucGxheWVyLm9uKFxuXHRcdFx0YHBsYXkgcGxheWluZyBwYXVzZSBlbmRlZCBzZWVraW5nIGxvYWRzdGFydGAsXG5cdFx0XHR0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpXG5cdFx0KVxuXHR9XG5cblxuXHQvKipcblx0ICogUGF1c2UgdGhlIHZpZGVvXG5cdCAqL1xuXHRzaG93UGxheSAoKSB7XG5cdFx0aWYodGhpcy5pY29uLmljb25OYW1lID09PSAncGxheScpIHJldHVybjtcblx0XHR0aGlzLmljb24uaWNvbk5hbWUgPSAncGxheSc7XG5cdFx0dGhpcy5lbGVtZW50LmF0dHIoJ3RpdGxlJywgdGhpcy5vcHRpb25zLnRpdGxlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBQbGF5IHRoZSB2aWRlb1xuXHQgKi9cblx0c2hvd1BhdXNlICgpIHtcblx0XHRpZih0aGlzLmljb24uaWNvbk5hbWUgPT09ICdwYXVzZScpIHJldHVybjtcblx0XHR0aGlzLmljb24uaWNvbk5hbWUgPSAncGF1c2UnO1xuXHRcdHRoaXMuZWxlbWVudC5hdHRyKCd0aXRsZScsICfQn9C+0YHRgtCw0LLQuNGC0Ywg0L3QsCDQv9Cw0YPQt9GDJyk7XG5cdH1cblxuXHR1cGRhdGUoKSB7XG5cdFx0aWYgKHRoaXMucGxheWVyLmVuZGVkKSB7XG5cdFx0XHR0aGlzLnNob3dSZXBsYXkoKTtcblx0XHR9IGVsc2UgaWYodGhpcy5wbGF5ZXIucGF1c2VkKSB7XG5cdFx0XHR0aGlzLnNob3dQbGF5KCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2hvd1BhdXNlKCk7XG5cdFx0fVxuXHR9XG5cblx0c2hvd1JlcGxheSgpIHtcblx0XHRpZih0aGlzLmljb24uaWNvbk5hbWUgPT09ICdyZWZyZXNoJykgcmV0dXJuO1xuXHRcdGlmKHRoaXMucGxheWVyLmR1cmF0aW9uICE9PSBJbmZpbml0eSkge1xuXHRcdFx0dGhpcy5fcmVwbGF5ID0gdHJ1ZTtcblx0XHRcdHRoaXMuaWNvbi5pY29uTmFtZSA9ICdyZWZyZXNoJztcblx0XHRcdHRoaXMuZWxlbWVudC5hdHRyKCd0aXRsZScsICfQl9Cw0L/Rg9GB0YLQuNGC0Ywg0LfQsNC90L7QstC+Jylcblx0XHR9XG5cdH1cblxuXHRyZW1vdmVSZXBsYXkoKSB7XG5cdFx0aWYoIXRoaXMuX3JlcGxheSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0aGlzLl9yZXBsYXkgPSBmYWxzZTtcblxuXHRcdGlmKHRoaXMucGxheWVyLnZpZGVvLnBhdXNlZCkge1xuXHRcdFx0dGhpcy5zaG93UGxheSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnNob3dQYXVzZSgpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdG9uQ2xpY2soZSkge1xuXHRcdHRoaXMucGxheWVyLnZpZGVvLnRvZ2dsZVBsYXkoKTtcblx0fVxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ1BsYXlDb250cm9sJywgUGxheUNvbnRyb2wpO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ3BsYXknLCBQbGF5Q29udHJvbCk7XG5leHBvcnQgZGVmYXVsdCBQbGF5Q29udHJvbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL1BsYXlDb250cm9sLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBWb2x1bWVDb250cm9sLmpzXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9Db250cm9sJztcbmltcG9ydCBDb250cm9sRHJvcGRvd24gZnJvbSAnLi9Db250cm9sRHJvcGRvd24nO1xuaW1wb3J0IHsgSVNfQU5EUk9JRF9QSE9ORSB9IGZyb20gJy4uL3V0aWxzL2Jyb3dzZXInO1xuXG5cbi8qKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQGNsYXNzIFZvbHVtZUNvbnRyb2xcbiAqIEBleHRlbmRzIENvbnRyb2xEcm9wZG93blxuICovXG5jbGFzcyBWb2x1bWVDb250cm9sIGV4dGVuZHMgQ29udHJvbERyb3Bkb3duIHtcblxuXHRjb25zdHJ1Y3RvciAocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRpY29uTmFtZSA6ICd2b2x1bWUtZG93bicsXG5cdFx0XHRjbGFzc05hbWUgOiAndm9sdW1lLWNvbnRyb2wnLFxuXHRcdFx0bmFtZSA6ICd2b2x1bWUnXG5cdFx0fSwgb3B0aW9ucyk7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblxuXHRcdGlmKCFwbGF5ZXIudmlkZW8uZmVhdHVyZUNvbnRyb2xWb2x1bWUgfHwgSVNfQU5EUk9JRF9QSE9ORSkge1xuXHRcdFx0dGhpcy5lbGVtZW50LmhpZGUoKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLnBsYXllci5vbigndm9sdW1lY2hhbmdlJywgKGUsIGRhdGEpID0+IHtcblx0XHRcdGNvbnN0IHZpZGVvID0gdGhpcy5wbGF5ZXIudmlkZW87XG5cdFx0XHR0aGlzLnZhbHVlID0gdmlkZW8ubXV0ZWQgPyAwIDogdmlkZW8udm9sdW1lO1xuXHRcdH0pXG5cdH1cblxuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdHN1cGVyLmNyZWF0ZUVsZW1lbnQoKTtcblx0XHRsZXQgZHJhZyA9IGZhbHNlO1xuXHRcdGNvbnN0IHZpZGVvID0gdGhpcy5wbGF5ZXIudmlkZW87XG5cblx0XHR0aGlzLm1hcmtlciA9ICQoJzxkaXYvPicpLmFkZENsYXNzKCd2b2x1bWUtbWFya2VyJyk7XG5cblx0XHR0aGlzLmFjdGl2ZSA9ICQoJzxkaXYvPicpLmFkZENsYXNzKCd2b2x1bWUtYWN0aXZlJyk7XG5cblx0XHR0aGlzLmxpbmUgPSAkKCc8ZGl2Lz4nKVxuXHRcdFx0LmFkZENsYXNzKCd2b2x1bWUtbGluZScpXG5cdFx0XHQuYXBwZW5kKHRoaXMuYWN0aXZlKVxuXHRcdFx0LmFwcGVuZCh0aGlzLm1hcmtlcilcblx0XHRcdC5vbignY2xpY2snLCAoZSkgPT4ge1xuXHRcdFx0XHRpZiAoZHJhZykgcmV0dXJuO1xuXHRcdFx0XHRsZXQgcCA9IHRoaXMuZ2V0UG9zaXRpb24oZS5wYWdlWSk7XG5cdFx0XHRcdGlmIChwID49IDAgJiYgcCA8PSAxKSB7XG5cdFx0XHRcdFx0aWYodmlkZW8ubXV0ZWQpIHtcblx0XHRcdFx0XHRcdHZpZGVvLm11dGVkID0gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHZpZGVvLnZvbHVtZSA9IDEgLSBwO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuZHJvcGRvd25Db250ZW50XG5cdFx0XHQuYWRkQ2xhc3MoJ3ZvbHVtZS1zbGlkZXInKVxuXHRcdFx0LmFwcGVuZCh0aGlzLmxpbmUpO1xuXG5cdFx0dGhpcy5pY29uLmVsZW1lbnQuYXR0cigndGl0bGUnLCAn0J7RgtC60LvRjtGH0LjRgtGMINC30LLRg9C6Jyk7XG5cblx0XHR0aGlzLm1hcmtlci5vbignbW91c2Vkb3duJywgKGUpID0+IHtcblx0XHRcdGlmIChlLndoaWNoICE9PSAxKSByZXR1cm47XG5cdFx0XHRkcmFnID0gdHJ1ZTtcblx0XHR9KTtcblxuXHRcdCQoZG9jdW1lbnQpLm9uKHtcblx0XHRcdG1vdXNlbW92ZSA6IChlKSA9PiB7XG5cdFx0XHRcdGlmICghZHJhZykgcmV0dXJuO1xuXHRcdFx0XHRsZXQgcCA9IHRoaXMuZ2V0UG9zaXRpb24oZS5wYWdlWSk7XG5cdFx0XHRcdGlmIChwID49IDAgJiYgcCA8PSAxKSB7XG5cdFx0XHRcdFx0aWYodmlkZW8ubXV0ZWQpIHtcblx0XHRcdFx0XHRcdHZpZGVvLm11dGVkID0gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHZpZGVvLnZvbHVtZSA9IDEgLSBwXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cblx0XHRcdG1vdXNldXAgOiAoZSkgPT4ge1xuXHRcdFx0XHRkcmFnID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudDtcblx0fVxuXG5cblx0c2V0IHZhbHVlICh2YWx1ZSkge1xuXHRcdHRoaXMuaWNvbi5pY29uTmFtZSA9IHRoaXMucGxheWVyLmNhbGNWb2x1bWVJY29uKHZhbHVlKTtcblxuXHRcdGxldCBwID0gTWF0aC5yb3VuZCh2YWx1ZSAqIDEwMCkudG9TdHJpbmcoKSArICclJztcblx0XHR0aGlzLmFjdGl2ZS5jc3MoJ2hlaWdodCcsIHApO1xuXHRcdHRoaXMubWFya2VyLmNzcygnYm90dG9tJywgcCk7XG5cdH1cblxuXHR0b2dnbGVNdXRlZCAoKSB7XG5cdFx0Y29uc3QgeyB2aWRlbyB9ID0gdGhpcy5wbGF5ZXI7XG5cblx0XHR2aWRlby5tdXRlZCA9ICF2aWRlby5tdXRlZDtcblx0fVxuXG5cdGdldFBvc2l0aW9uICh5KSB7XG5cdFx0cmV0dXJuICh5IC0gdGhpcy5saW5lLm9mZnNldCgpLnRvcCkgLyB0aGlzLmxpbmUuaGVpZ2h0KCk7XG5cdH1cblxuXHRvbkNsaWNrIChlKSB7XG5cdFx0c3VwZXIub25DbGljayhlKTtcblx0XHQvL3RvZG86IGxlYV9hbGV4IGtvc3RpbCdcblx0XHRpZiAoZS50YXJnZXQgPT09IHRoaXMuaWNvbi5lbGVtZW50WzBdKXtcblx0XHRcdHRoaXMudG9nZ2xlTXV0ZWQoKTtcblx0XHR9XG5cblx0fVxuXG5cdG9uUGxheWVySW5pdGVkKCkge1xuXHRcdGlmKCF0aGlzLnBsYXllci52aWRlby5mZWF0dXJlQ29udHJvbFZvbHVtZSkge1xuXHRcdFx0dGhpcy5lbGVtZW50LmhpZGUoKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy52YWx1ZSA9IHRoaXMucGxheWVyLnZpZGVvLmRlZmF1bHRWb2x1bWU7XG5cdH1cblxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ1ZvbHVtZUNvbnRyb2wnLCBWb2x1bWVDb250cm9sKTtcbkNvbnRyb2wucmVnaXN0ZXJDb250cm9sKCd2b2x1bWUnLCBWb2x1bWVDb250cm9sKTtcbmV4cG9ydCBkZWZhdWx0IFZvbHVtZUNvbnRyb2w7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9Wb2x1bWVDb250cm9sLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBDb250cm9sRHJvcGRvd24uanNcbiAqL1xuXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL0NvbnRyb2wnO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgeyBJU19NT0JJTEUgfSBmcm9tICcuLi91dGlscy9icm93c2VyJztcblxuLyoqXG4gKiBAY2xhc3MgQ29udHJvbERyb3Bkb3duXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAcHJvcGVydHkge2pRdWVyeX0gZHJvcGRvd25Db250ZW50IENvbnRlbnQgb2YgcG9wdXBcbiAqIEBleHRlbmRzIENvbnRyb2xcbiAqL1xuY2xhc3MgQ29udHJvbERyb3Bkb3duIGV4dGVuZHMgQ29udHJvbCB7XG5cblx0Y29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHR0YWcgOiAnZGl2Jyxcblx0XHR9LCBvcHRpb25zKTtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXHRcdHRoaXMuX29wZW5lZCA9IGZhbHNlO1xuXHRcdHRoaXMuZWxlbWVudC5vbignbW91c2VlbnRlcicsIHRoaXMub3Blbi5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ21vdXNlbGVhdmUnLCB0aGlzLmNsb3NlLmJpbmQodGhpcykpO1xuXHRcdGlmKElTX01PQklMRSkge1xuXHRcdFx0dGhpcy5lbGVtZW50Lm9uKCd0YXAnLCB0aGlzLnRvZ2dsZS5iaW5kKHRoaXMpKTtcblx0XHRcdCQoZG9jdW1lbnQpLm9uKCd0b3VjaGVuZCB0b3VjaHN0YXJ0IGNsaWNrJywgdGhpcy5vbkRvY3VtZW50RXZlbnRzLmJpbmQodGhpcykpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0c3VwZXIuY3JlYXRlRWxlbWVudCgpO1xuXHRcdHRoaXMuZHJvcGRvd25Db250ZW50ID0gJCgnPGRpdiAvPicpLmFkZENsYXNzKCdjb250cm9sLWRyb3Bkb3duX19jb250ZW50Jyk7XG5cdFx0dGhpcy5lbGVtZW50LmFwcGVuZCh0aGlzLmRyb3Bkb3duQ29udGVudCk7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRidWlsZENTU0NsYXNzKCkge1xuXHRcdHJldHVybiBgY29udHJvbC1kcm9wZG93biAke3N1cGVyLmJ1aWxkQ1NTQ2xhc3MoKX1gXG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRvbkNsaWNrKGUpIHtcblx0XHRpZigkKGUudGFyZ2V0KS5jbG9zZXN0KHRoaXMuZHJvcGRvd25Db250ZW50KS5sZW5ndGggPiAwKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0c3VwZXIub25DbGljayhlKTtcblx0fVxuXG5cdHRvZ2dsZSgpIHtcblx0XHRpZih0aGlzLmRpc2FibGUpIHRydWU7XG5cdFx0aWYodGhpcy5fb3BlbmVkKSB7XG5cdFx0XHR0aGlzLmNsb3NlKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMub3BlbigpO1xuXHRcdH1cblx0fVxuXG5cdG9wZW4oKSB7XG5cdFx0aWYodGhpcy5kaXNhYmxlKSByZXR1cm47XG5cdFx0dGhpcy5fb3BlbmVkID0gdHJ1ZTtcblx0XHR0aGlzLmRyb3Bkb3duQ29udGVudC5zaG93KCk7XG5cdH1cblxuXHRjbG9zZSgpIHtcblx0XHRpZih0aGlzLmRpc2FibGUpIHJldHVybjtcblx0XHR0aGlzLl9vcGVuZWQgPSBmYWxzZTtcblx0XHR0aGlzLmRyb3Bkb3duQ29udGVudC5oaWRlKCk7XG5cdH1cblxuXHRvbkRvY3VtZW50RXZlbnRzKGUpIHtcblx0XHRpZihcblx0XHRcdCEoJChlLnRhcmdldCkuY2xvc2VzdCh0aGlzLmVsZW1lbnQpLmxlbmd0aCA+IDApICYmXG5cdFx0XHQhKCQoZS50YXJnZXQpLmNsb3Nlc3QodGhpcy5kcm9wZG93bkNvbnRlbnQpLmxlbmd0aCA+IDApXG5cdFx0KSB7XG5cdFx0XHRpZih0aGlzLl9vcGVuZWQpe1xuXHRcdFx0XHR0aGlzLmNsb3NlKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdDb250cm9sRHJvcGRvd24nLCBDb250cm9sRHJvcGRvd24pO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ2Ryb3Bkb3duJywgQ29udHJvbERyb3Bkb3duKTtcbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xEcm9wZG93bjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL0NvbnRyb2xEcm9wZG93bi5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgVGltZWxpbmVDb250cm9sLmpzXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vQ29tcG9uZW50JztcbmltcG9ydCBDb250cm9sIGZyb20gJy4uL0NvbnRyb2wnO1xuaW1wb3J0IENvbnRyb2xUZXh0IGZyb20gJy4uL0NvbnRyb2xUZXh0JztcbmltcG9ydCBCdWZmZXJlZFJhbmdlcyBmcm9tICcuL0J1ZmZlcmVkUmFuZ2VzJztcbmltcG9ydCBNYXJrZXIgZnJvbSAnLi9NYXJrZXInO1xuaW1wb3J0IHsgc2Vjb25kc1RvVGltZSB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAY2xhc3MgVGltZWxpbmVDb250cm9sXG4gKiBAcHJvcGVydHkge0NvbnRyb2xUZXh0fSBjdXJyZW50VGltZSBDdXJyZW50IHRpbWUncyB0ZXh0XG4gKiBAcHJvcGVydHkge0NvbnRyb2xUZXh0fSB0b3RhbFRpbWUgVG90YWwgdGltZVxuICogQHByb3BlcnR5IHtqUXVlcnl9IGxpbmVcbiAqIEBleHRlbmRzIENvbnRyb2xcbiAqL1xuY2xhc3MgVGltZWxpbmVDb250cm9sIGV4dGVuZHMgQ29udHJvbCB7XG5cblx0Y29uc3RydWN0b3IgKHBsYXllciwgb3B0aW9ucz17fSkge1xuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0bmFtZSA6ICd0aW1lbGluZScsXG5cdFx0XHRjbGFzc05hbWUgOiAnY29udHJvbC10aW1lbGluZSB0aW1lbGluZS1jb250YWluZXInLFxuXHRcdFx0dGFnIDogJ2RpdicsXG5cdFx0fSwgb3B0aW9ucyk7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblxuXG5cdFx0dGhpcy5tYXJrZXIuZWxlbWVudC5vbignbGVwbGF5ZXJfbW91c2Vtb3ZlJywgdGhpcy5fb25NYXJrZXJNb3VzZW1vdmUuYmluZCh0aGlzKSk7XG5cblx0XHR0aGlzLm1hcmtlci5lbGVtZW50Lm9uKCdsZXBsYXllcl9tb3VzZWRvd24nLCB0aGlzLl9vbk1hcmtlck1vdXNlZG93bi5iaW5kKHRoaXMpKTtcblxuXHRcdHRoaXMucGxheWVyLm9uKCdzZWN0aW9uc2luaXQnLCB0aGlzLm9uU2VjdGlvbnNJbml0LmJpbmQodGhpcykpO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ3RpbWV1cGRhdGUnLCB0aGlzLl9vblRpbWVVcGRhdGUuYmluZCh0aGlzKSk7XG5cblx0XHQvLyB0aGlzLnBsYXllci5vbigndGltZXVwZGF0ZWxvYWQnLCB0aGlzLl9vblRpbWVVcGRhdGUuYmluZCh0aGlzKSlcblxuXHRcdHRoaXMucGxheWVyLm9uKCdkdXJhdGlvbmNoYW5nZScsIHRoaXMuX29uRHVyYXRpb25DaGFuZ2UuYmluZCh0aGlzKSk7XG5cdH1cblxuXHRfb25NYXJrZXJNb3VzZWRvd24oZSkge1xuXHRcdHRoaXMubWFya2VyU2hhZG93LmVsZW1lbnQuaGlkZSgpO1xuXHR9XG5cblx0X29uTWFya2VyTW91c2Vtb3ZlKGUsIGRhdGEpIHtcblx0XHRjb25zdCB4ID0gZGF0YS54O1xuXHRcdGNvbnN0IHAgPSB0aGlzLmdldFBvc2l0aW9uKHgpO1xuXHRcdGNvbnN0IHZpZGVvID0gdGhpcy5wbGF5ZXIudmlkZW87XG5cdFx0aWYgKHAgPiAwICYmIHAgPCAxKSB7XG5cdFx0XHR0aGlzLm1hcmtlci5tYXJrZXJUaW1lXG5cdFx0XHRcdC5zaG93KClcblx0XHRcdFx0Lmh0bWwoc2Vjb25kc1RvVGltZSh2aWRlby5kdXJhdGlvbiAqIHApKTtcblx0XHRcdC8vIHZpZGVvLmN1cnJlbnRUaW1lID0gdmlkZW8uZHVyYXRpb24gKiBwXG5cdFx0fVxuXHR9XG5cblx0X29uVGltZVVwZGF0ZShlLCBkYXRhKSB7XG5cdFx0Y29uc3QgZHVyYXRpb24gPSB0aGlzLnBsYXllci52aWRlby5kdXJhdGlvbjtcblx0XHRsZXQgY3VycmVudFRpbWUgPSB0aGlzLnBsYXllci5jdXJyZW50VGltZTtcblx0XHRpZihkYXRhICYmIGRhdGEuY3VycmVudFRpbWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0Y3VycmVudFRpbWUgPSBkYXRhLmN1cnJlbnRUaW1lO1xuXHRcdH1cblx0XHRsZXQgcGVyY2VudCA9IGN1cnJlbnRUaW1lIC8gZHVyYXRpb247XG5cblx0XHRpZihpc05hTihkdXJhdGlvbikgJiYgY3VycmVudFRpbWUgPT09IDApIHBlcmNlbnQgPSAwO1xuXG5cdFx0dGhpcy5tb3ZlKHsgcGVyY2VudCwgY3VycmVudFRpbWUgfSk7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdHN1cGVyLmNyZWF0ZUVsZW1lbnQoKTtcblx0XHRsZXQgdmlkZW8gPSB0aGlzLnBsYXllci52aWRlbztcblxuXHRcdHRoaXMuZHJhZyA9IGZhbHNlO1xuXG5cdFx0Ly8gQ3JlYXRlIGxhYmVsc1xuXHRcdHRoaXMuY3VycmVudFRpbWUgPSBuZXcgQ29udHJvbFRleHQodGhpcy5wbGF5ZXIsIHsgY2xhc3NOYW1lIDogJ3RpbWUtY3VycmVudCcgfSk7XG5cdFx0dGhpcy5jdXJyZW50VGltZS50ZXh0ID0gJzAwOjAwJztcblx0XHR0aGlzLnRvdGFsVGltZSA9IG5ldyBDb250cm9sVGV4dCh0aGlzLnBsYXllciwge2NsYXNzTmFtZSA6ICd0aW1lLXRvdGFsJyB9KTtcblxuXHRcdC8vIENyZWF0ZSBsaW5lIHdpdGggbWFya2VycyBhbmQgcGxheWVkIHJhbmdlXG5cblx0XHR0aGlzLm1hcmtlciA9IG5ldyBNYXJrZXIodGhpcy5wbGF5ZXIsIHtcblx0XHRcdGRyYWcgOiB0cnVlXG5cdFx0fSk7XG5cblx0XHR0aGlzLm1hcmtlclNoYWRvdyA9IG5ldyBNYXJrZXIodGhpcy5wbGF5ZXIsIHtcblx0XHRcdGNsYXNzTmFtZSA6ICdzaGFkb3cnXG5cdFx0fSk7XG5cdFx0dGhpcy5tYXJrZXJTaGFkb3cuZWxlbWVudC5oaWRlKCk7XG5cblxuXHRcdC8vIFBsYXllZCByYW5nZXNcblx0XHR0aGlzLnBsYXllZFJhbmdlcyA9ICQoJzxkaXYgLz4nKS5hZGRDbGFzcygndGltZS1wbGF5ZWQnKTtcblxuXG5cdFx0Ly8gQnVmZmVyZWQgcmFuZ2VzXG5cdFx0dGhpcy5idWZmZXJlZFJhbmdlcyA9IG5ldyBCdWZmZXJlZFJhbmdlcyh0aGlzLnBsYXllcikuZWxlbWVudDtcblxuXHRcdHRoaXMubGluZSA9ICQoJzxkaXYgLz4nKTtcblx0XHR0aGlzLmVtaXRUYXBFdmVudHModGhpcy5saW5lKVxuXG5cdFx0dGhpcy5saW5lXG5cdFx0XHQuYWRkQ2xhc3MoJ3RpbWVsaW5lJylcblx0XHRcdC5hcHBlbmQodGhpcy5tYXJrZXIuZWxlbWVudClcblx0XHRcdC5hcHBlbmQodGhpcy5tYXJrZXJTaGFkb3cuZWxlbWVudClcblx0XHRcdC5hcHBlbmQodGhpcy5wbGF5ZWRSYW5nZXMpXG5cdFx0XHQuYXBwZW5kKHRoaXMuYnVmZmVyZWRSYW5nZXMpXG5cdFx0XHQub24oe1xuXHRcdFx0XHRtb3VzZW1vdmUgOiAoZSkgPT4ge1xuXHRcdFx0XHRcdGlmICh0aGlzLm1hcmtlci5kcmFnKSByZXR1cm47XG5cblx0XHRcdFx0XHRsZXQgcCA9IHRoaXMuZ2V0UG9zaXRpb24oZS5wYWdlWCk7XG5cdFx0XHRcdFx0aWYgKHAgPiAwICYmIHAgPCAxKSB7XG5cdFx0XHRcdFx0XHR0aGlzLm1hcmtlclNoYWRvdy5lbGVtZW50XG5cdFx0XHRcdFx0XHRcdC5zaG93KClcblx0XHRcdFx0XHRcdFx0LmNzcygnbGVmdCcsIHAgKiAxMDAgKyAnJScpO1xuXHRcdFx0XHRcdFx0dGhpcy5tYXJrZXJTaGFkb3dcblx0XHRcdFx0XHRcdFx0Lm1hcmtlclRpbWVcblx0XHRcdFx0XHRcdFx0LnNob3coKVxuXHRcdFx0XHRcdFx0XHQuaHRtbChzZWNvbmRzVG9UaW1lKHZpZGVvLmR1cmF0aW9uICogcCkpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aGlzLm1hcmtlclNoYWRvdy5lbGVtZW50LmhpZGUoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0bW91c2VsZWF2ZSA6IChlKSA9PiB7XG5cdFx0XHRcdFx0aWYgKHRoaXMuZHJhZykgcmV0dXJuO1xuXHRcdFx0XHRcdHRoaXMubWFya2VyU2hhZG93LmVsZW1lbnQuaGlkZSgpXG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0bW91c2Vkb3duIDogKGUpID0+IHtcblx0XHRcdFx0fSxcblxuXHRcdFx0XHRjbGljayA6IHRoaXMuX29uTGluZUNsaWNrLmJpbmQodGhpcyksXG5cdFx0XHRcdHRhcCA6IHRoaXMuX29uTGluZUNsaWNrLmJpbmQodGhpcyksXG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuZWxlbWVudC5hZGRDbGFzcygndGltZWxpbmUtY29udGFpbmVyJylcblx0XHRcdC5hcHBlbmQoJCgnPGRpdiAvPicpXG5cdFx0XHRcdC5hZGRDbGFzcygndGltZWxpbmUtc3ViY29udGFpbmVyJylcblx0XHRcdFx0LmFwcGVuZCh0aGlzLmN1cnJlbnRUaW1lLmVsZW1lbnQpXG5cdFx0XHRcdC5hcHBlbmQodGhpcy5saW5lKVxuXHRcdFx0XHQuYXBwZW5kKHRoaXMudG90YWxUaW1lLmVsZW1lbnQpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdG9uQ2xpY2soZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0fVxuXG5cdF9vbkxpbmVDbGljayhlKSB7XG5cdFx0aWYgKHRoaXMuZHJhZykgcmV0dXJuO1xuXHRcdGNvbnN0IHZpZGVvID0gdGhpcy5wbGF5ZXIudmlkZW87XG5cdFx0dGhpcy5tb3ZlKHsgcGVyY2VudCA6IHRoaXMuZ2V0UG9zaXRpb24oZS5wYWdlWCl9KTtcblx0XHR2aWRlby5jdXJyZW50VGltZSA9ICh2aWRlby5kdXJhdGlvbiAqIHRoaXMuZ2V0UG9zaXRpb24oZS5wYWdlWCkpO1xuXHR9XG5cblx0b25TZWN0aW9uc0luaXQoZSkge1xuXHRcdGNvbnN0IGR1cmF0aW9uID0gdGhpcy5wbGF5ZXIudmlkZW8uZHVyYXRpb247XG5cdFx0aWYoaXNOYU4oZHVyYXRpb24pKSB7XG5cdFx0XHRyZXR1cm5cblx0XHR9XG5cdFx0aWYgKHRoaXMucGxheWVyLnNlY3Rpb25zKSB7XG5cdFx0XHR0aGlzLnVwZGF0ZVNlY3Rpb25SYW5nZXModGhpcy5wbGF5ZXIuc2VjdGlvbnMuaXRlbXMpO1xuXHRcdH1cblx0fVxuXG5cdHVwZGF0ZVNlY3Rpb25SYW5nZXMoaXRlbXMpIHtcblx0XHRpZih0aGlzLnNlY3Rpb25zID09IG51bGwgfHwgdGhpcy5zZWN0aW9ucy5sZW5ndGggPT09IDApIHtcblx0XHRcdHRoaXMuc2VjdGlvbnMgPSB0aGlzLmNyZWF0ZVNlY3Rpb25SYW5nZXMoaXRlbXMpO1xuXHRcdFx0dGhpcy5saW5lLmFwcGVuZCh0aGlzLnNlY3Rpb25zKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zZWN0aW9ucy5odG1sKHRoaXMuY3JlYXRlU2VjdGlvblJhbmdlcyhpdGVtcykpO1xuXHRcdH1cblx0fVxuXG5cdGNyZWF0ZVNlY3Rpb25SYW5nZXMoaXRlbXMpIHtcblx0XHRjb25zdCBkdXJhdGlvbiA9IHRoaXMucGxheWVyLnZpZGVvLmR1cmF0aW9uO1xuXHRcdGxldCByZXN1bHQgPSAkKCc8ZGl2IC8+JykuYWRkQ2xhc3MoJ2xlcGxheWVyLXRpbWVsaW5lLXNlY3Rpb25zJyk7XG5cdFx0aXRlbXMuZm9yRWFjaCgoc2VjdGlvbikgPT4ge1xuXHRcdFx0Y29uc3QgbGVuZ3RoID0gKHNlY3Rpb24uZW5kIC0gc2VjdGlvbi5iZWdpbik7XG5cdFx0XHRjb25zdCBpdGVtID0gJCgnPGRpdiAvPicpXG5cdFx0XHRcdC5hZGRDbGFzcygnbGVwbGF5ZXItdGltZWxpbmUtc2VjdGlvbicpXG5cdFx0XHRcdC5jc3Moe1xuXHRcdFx0XHRcdHdpZHRoIDogbGVuZ3RoIC8gZHVyYXRpb24gKiAxMDAgKyAnJScsXG5cdFx0XHRcdFx0bGVmdCA6IHNlY3Rpb24uYmVnaW4gLyBkdXJhdGlvbiAqIDEwMCArICclJ1xuXHRcdFx0XHR9KTtcblx0XHRcdHJlc3VsdC5hcHBlbmQoaXRlbSk7XG5cdFx0fSlcblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0Z2V0UG9zaXRpb24gKHgpIHtcblx0XHRyZXR1cm4gKHggLSB0aGlzLmxpbmUub2Zmc2V0KCkubGVmdCkgLyB0aGlzLmxpbmUud2lkdGgoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBNb3ZlIG1hcmtlciBvbiB0aW1lbGluZSBvbiBwZXJjZW50IGZyb20gYXJndW1lbnQsIG5vdCBmcm9tIHZpZGVvLmN1cnJlbnRUaW1lXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBwZXJjZW50IFRoZSBwZXJjZW50IHdoaWNoIHlvdSB3YW50IHRvIG1vdmUgbWFya2VyIG9uIHRpbWVsaW5lXG5cdCAqL1xuXHRtb3ZlICh7IHBlcmNlbnQsIGN1cnJlbnRUaW1lIH0pIHtcblx0XHRpZihjdXJyZW50VGltZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRjdXJyZW50VGltZSA9IHRoaXMucGxheWVyLnZpZGVvLmR1cmF0aW9uICogcGVyY2VudDtcblx0XHR9XG5cblx0XHRpZihpc05hTihjdXJyZW50VGltZSkpIHJldHVybjtcblx0XHRwZXJjZW50ID0gcGVyY2VudCAqIDEwMDtcblx0XHR0aGlzLm1hcmtlci5lbGVtZW50LmNzcygnbGVmdCcsIHBlcmNlbnQgKyAnJScpO1xuXHRcdHRoaXMucGxheWVkUmFuZ2VzLmNzcygnd2lkdGgnLCBwZXJjZW50ICsgJyUnKTtcblx0XHR0aGlzLmN1cnJlbnRUaW1lLnRleHQgPSBzZWNvbmRzVG9UaW1lKGN1cnJlbnRUaW1lKTtcblx0fVxuXG5cdHVwZGF0ZUxhYmVscygpIHtcblx0XHRjb25zdCB2aWRlbyA9IHRoaXMucGxheWVyLnZpZGVvO1xuXHRcdHRoaXMudG90YWxUaW1lLnRleHQgPSBzZWNvbmRzVG9UaW1lKDAsIE1hdGguZmxvb3IodmlkZW8uZHVyYXRpb24gLyAzNjAwKSA+IDApO1xuXG5cdFx0Ly8gY29uc3Qgd2lkdGggPSB0aGlzLnRvdGFsVGltZS5lbGVtZW50LndpZHRoKCk7XG5cblx0XHR0aGlzLnRvdGFsVGltZS50ZXh0ID0gc2Vjb25kc1RvVGltZSh2aWRlby5kdXJhdGlvbik7XG5cdFx0dGhpcy5jdXJyZW50VGltZS50ZXh0ID0gc2Vjb25kc1RvVGltZSh2aWRlby5jdXJyZW50VGltZSB8fCAwKTtcblx0XHQvLyB0aGlzLmN1cnJlbnRUaW1lLmVsZW1lbnQuY3NzKHtcblx0XHQvLyBcdHdpZHRoXG5cdFx0Ly8gfSlcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdG9uUGxheWVySW5pdGVkKGUpIHtcblx0XHR0aGlzLnVwZGF0ZUxhYmVscygpO1xuXHRcdGlmICh0aGlzLnBsYXllci5zZWN0aW9ucykge1xuXHRcdFx0dGhpcy51cGRhdGVTZWN0aW9uUmFuZ2VzKHRoaXMucGxheWVyLnNlY3Rpb25zLml0ZW1zKTtcblx0XHR9XG5cdH1cblxuXHRfaW5pdFdhdGNoQnVmZmVyICgpIHtcblx0XHRjbGVhckludGVydmFsKHRoaXMud2F0Y2hCdWZmZXJJbnRlcnZhbCk7XG5cdFx0bGV0IHZpZGVvID0gdGhpcy5wbGF5ZXIudmlkZW87XG5cdFx0bGV0IHVwZGF0ZVByb2dyZXNzQmFyID0gKCkgPT4ge1xuXHRcdFx0Y29uc3QgRU5EID0gMTtcblx0XHRcdGNvbnN0IFNUQVJUID0gMDtcblx0XHRcdGxldCByZXN1bHQgPSAkKCcnKTtcblx0XHRcdHZpZGVvLmxvYWRlZC5mb3JFYWNoKGl0ZW0gPT4ge1xuXHRcdFx0XHRsZXQgZG9tSXRlbSA9ICQoJzxkaXYgLz4nKS5hZGRDbGFzcygndGltZS1idWZmZXJlZCcpO1xuXHRcdFx0XHRkb21JdGVtLmNzcyh7XG5cdFx0XHRcdFx0bGVmdCA6IGl0ZW1bU1RBUlRdICogMTAwICsgJyUnLFxuXHRcdFx0XHRcdHdpZHRoIDogKGl0ZW1bRU5EXSAtIGl0ZW1bU1RBUlRdKSAqIDEwMCArICclJ1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0cmVzdWx0ID0gcmVzdWx0LmFkZChkb21JdGVtKTtcblx0XHRcdH0pO1xuXHRcdFx0dGhpcy5idWZmZXJlZC5odG1sKHJlc3VsdCk7XG5cdFx0XHRpZiAodmlkZW8ubG9hZGVkLmxlbmd0aCAmJiAoMSAtIHZpZGVvLmxvYWRlZFNpemUpIDw9IDAuMDUpIHtcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLndhdGNoQnVmZmVySW50ZXJ2YWwpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHR0aGlzLndhdGNoQnVmZmVySW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCh1cGRhdGVQcm9ncmVzc0JhciwgNTAwKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBPbiBkdXJhdGlvbmNoYW5nZSBldmVudCBoYW5kbGVyXG5cdCAqL1xuXHRfb25EdXJhdGlvbkNoYW5nZSAoKSB7XG5cdFx0dGhpcy51cGRhdGVMYWJlbHMoKTtcblx0XHRpZiAodGhpcy5wbGF5ZXIuc2VjdGlvbnMpIHtcblx0XHRcdHRoaXMudXBkYXRlU2VjdGlvblJhbmdlcyh0aGlzLnBsYXllci5zZWN0aW9ucy5pdGVtcyk7XG5cdFx0fVxuXHR9XG5cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdUaW1lbGluZUNvbnRyb2wnLCBUaW1lbGluZUNvbnRyb2wpO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ3RpbWVsaW5lJywgVGltZWxpbmVDb250cm9sKTtcbmV4cG9ydCBkZWZhdWx0IFRpbWVsaW5lQ29udHJvbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL1RpbWVsaW5lL1RpbWVsaW5lQ29udHJvbC5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgQ29udHJvbFRleHQuanNcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9Db250cm9sJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBjbGFzcyBDb250cm9sVGV4dFxuICogQGV4bnRlZHMgQ29udHJvbFxuICovXG5jbGFzcyBDb250cm9sVGV4dCBleHRlbmRzIENvbnRyb2wge1xuXHRjb25zdHJ1Y3RvciAocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRjbGFzc05hbWUgOiAnJyxcblx0XHRcdHRhZyA6ICdkaXYnLFxuXHRcdH0sIG9wdGlvbnMpO1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdHN1cGVyLmNyZWF0ZUVsZW1lbnQoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGJ1aWxkQ1NTQ2xhc3MoKSB7XG5cdFx0cmV0dXJuIGBjb250cm9sLXRleHQgJHt0aGlzLm9wdGlvbnMuY2xhc3NOYW1lfWA7XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBTZXR0ZXIgb2YgdGV4dCBmaWVsZFxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuXHQgKi9cblxuXHRzZXQgdGV4dCAodmFsdWUpIHtcblx0XHR0aGlzLl90ZXh0ID0gdmFsdWU7XG5cdFx0dGhpcy5lbGVtZW50Lmh0bWwodmFsdWUpO1xuXHR9XG5cblx0Z2V0IHRleHQgKCkge1xuXHRcdHJldHVybiB0aGlzLl90ZXh0XG5cdH1cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdDb250cm9sVGV4dCcsIENvbnRyb2xUZXh0KTtcbkNvbnRyb2wucmVnaXN0ZXJDb250cm9sKCd0ZXh0JywgQ29udHJvbFRleHQpO1xuZXhwb3J0IGRlZmF1bHQgQ29udHJvbFRleHQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9Db250cm9sVGV4dC5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgQnVmZmVyZWRSYW5nZXMuanNcbiAqL1xuXG5pbXBvcnQgeyBwZXJjZW50aWZ5LCBjcmVhdGVFbCB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vQ29tcG9uZW50JztcblxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAY2xhc3MgQnVmZmVyZWRSYW5nZXNcbiAqIEBleHRlbmRzIENvbnRyb2xcbiAqL1xuXG5jbGFzcyBCdWZmZXJlZFJhbmdlcyBleHRlbmRzIENvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblxuXHRcdHRoaXMucGxheWVyLm9uKCdwcm9ncmVzcycsIHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xuXHRcdHRoaXMucGxheWVyLm9uKCdzZWVrZWQnLCB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLnBsYXllci5vbignbG9hZHN0YXJ0JywgdGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdHRoaXMucmFuZ2UgPSBjcmVhdGVFbCgnZGl2Jywge1xuXHRcdFx0Y2xhc3NOYW1lIDogJ2xlcGxheWVyLXRpbWVsaW5lLWJ1ZmZlcmVkX19yYW5nZSdcblx0XHR9KTtcblxuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQgPSBjcmVhdGVFbCgnZGl2Jywge1xuXHRcdFx0Y2xhc3NOYW1lIDogJ2xlcGxheWVyLXRpbWVsaW5lLWJ1ZmZlcmVkJ1xuXHRcdH0pLmFwcGVuZCh0aGlzLnJhbmdlKTtcblx0fVxuXG5cblx0dXBkYXRlKCkge1xuXHRcdGNvbnN0IGJ1ZmZlcmVkID0gdGhpcy5wbGF5ZXIudmlkZW8uYnVmZmVyZWQ7XG5cdFx0Y29uc3QgZHVyYXRpb24gPSB0aGlzLnBsYXllci52aWRlby5kdXJhdGlvbjtcblx0XHRpZihidWZmZXJlZCA9PSBudWxsKSByZXR1cm47XG5cblx0XHRsZXQgZW5kID0gMDtcblx0XHRpZiAoYnVmZmVyZWQubGVuZ3RoID4gMCkge1xuXHRcdFx0ZW5kID0gYnVmZmVyZWQuZW5kKGJ1ZmZlcmVkLmxlbmd0aCAtIDEpO1xuXHRcdH1cblxuXHRcdGxldCB3aWR0aCA9IDA7XG5cdFx0aWYgKGR1cmF0aW9uID4gMCkge1xuXHRcdFx0d2lkdGggPSBwZXJjZW50aWZ5KGVuZCwgZHVyYXRpb24pICogMTAwICsgJyUnXG5cdFx0fVxuXHRcdHRoaXMucmFuZ2UuY3NzKHsgd2lkdGggfSlcblx0fVxufVxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdCdWZmZXJlZFJhbmdlcycsIEJ1ZmZlcmVkUmFuZ2VzKTtcbmV4cG9ydCBkZWZhdWx0IEJ1ZmZlcmVkUmFuZ2VzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvVGltZWxpbmUvQnVmZmVyZWRSYW5nZXMuanMiLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9Db21wb25lbnQnO1xuXG5jbGFzcyBNYXJrZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcblxuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0ZHJhZyA6IGZhbHNlLFxuXHRcdFx0Y2xhc3NOYW1lIDogJydcblx0XHR9LCBvcHRpb25zKTtcblxuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdtb3VzZWRvd24nLCB0aGlzLl9vbk1vdXNlZG93bi5iaW5kKHRoaXMpKTtcblxuXHRcdCQoZG9jdW1lbnQpLm9uKHtcblxuXHRcdFx0bW91c2Vtb3ZlIDogKGUpID0+IHtcblx0XHRcdFx0aWYgKCF0aGlzLmRyYWcpIHJldHVybjtcblx0XHRcdFx0dGhpcy5lbGVtZW50LnRyaWdnZXIoJ2xlcGxheWVyX21vdXNlbW92ZScsIHsgeCA6IGUucGFnZVggfSk7XG5cdFx0XHR9LFxuXG5cdFx0XHRtb3VzZXVwIDogKGUpID0+IHtcblx0XHRcdFx0aWYgKCF0aGlzLmRyYWcpIHJldHVybjtcblx0XHRcdFx0dGhpcy5kcmFnID0gZmFsc2U7XG5cdFx0XHRcdHRoaXMubWFya2VyVGltZS5oaWRlKCk7XG5cdFx0XHRcdHRoaXMuZWxlbWVudC50cmlnZ2VyKCdsZXBsYXllcl9tb3VzZXVwJywgeyB4IDogZS5wYWdlWCB9KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdHNldCBkcmFnKHZhbHVlKSB7XG5cdFx0dGhpcy5fZHJhZyA9IHZhbHVlO1xuXHRcdHRoaXMuZWxlbWVudC50b2dnbGVDbGFzcygndGltZS1tYXJrZXItLWRyYWcnLCB2YWx1ZSk7XG5cdH1cblxuXHRnZXQgZHJhZygpIHtcblx0XHRyZXR1cm4gdGhpcy5fZHJhZztcblx0fVxuXG5cdF9vbk1vdXNlZG93bihlKSB7XG5cdFx0aWYgKGUud2hpY2ggIT09IDEpIHJldHVybjtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0aWYodGhpcy5vcHRpb25zLmRyYWcpIHtcblx0XHRcdHRoaXMuZHJhZyA9IHRydWU7XG5cdFx0fVxuXHRcdHRoaXMuZWxlbWVudC50cmlnZ2VyKCdsZXBsYXllcl9tb3VzZWRvd24nKTtcblx0fVxuXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0Ly8gTWFya2VyIG9mIGN1cnJlbnQgdGltZSBvbiB0aW1lbGluZVxuXHRcdHRoaXMubWFya2VyVGltZSA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0LmFkZENsYXNzKCd0aW1lJylcblx0XHRcdC5oaWRlKCk7XG5cblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50ID0gJCgnPGRpdiAvPicpXG5cdFx0XHQuYWRkQ2xhc3MoYHRpbWUtbWFya2VyICR7dGhpcy5vcHRpb25zLmNsYXNzTmFtZX1gKVxuXHRcdFx0LmFwcGVuZCh0aGlzLm1hcmtlclRpbWUpXG5cblx0fVxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ01hcmtlcicsIE1hcmtlcik7XG5leHBvcnQgZGVmYXVsdCBNYXJrZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9UaW1lbGluZS9NYXJrZXIuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIFNlY3Rpb25Db250cm9sLmpzXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9Db250cm9sJztcbmltcG9ydCBDb250cm9sQ2hlY2tib3ggZnJvbSAnLi9Db250cm9sQ2hlY2tib3gnO1xuXG4vKipcbiAqIEBjbGFzcyBTZWN0aW9uQ29udHJvbFxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5jaGVja2VkPXRydWVdXG4gKiBAZXh0ZW5kcyBDb250cm9sQ2hlY2tib3hcbiAqL1xuY2xhc3MgU2VjdGlvbkNvbnRyb2wgZXh0ZW5kcyBDb250cm9sQ2hlY2tib3gge1xuXHRjb25zdHJ1Y3RvciAocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRpY29uTmFtZSA6ICdsaXN0LXVsJyxcblx0XHRcdGNsYXNzTmFtZSA6ICdzZWN0aW9uJyxcblx0XHRcdG5hbWUgOiAnc2VjdGlvbicsXG5cdFx0XHR0aXRsZSA6ICfQn9C+0LrQsNC30LDRgtGML9GB0LrRgNGL0YLRjCDRgdC10LrRhtC40LgnLFxuXHRcdFx0ZGlzYWJsZSA6IHRydWVcblx0XHR9LCBvcHRpb25zKTtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ3NlY3Rpb25zaW5pdCcsIHRoaXMuX29uU2VjdGlvbnNJbml0LmJpbmQodGhpcykpO1xuXHRcdHRoaXMucGxheWVyLm9uKCdzZWN0aW9uc3RvZ2dsZScsIHRoaXMuX29uU2VjdGlvblRvZ2dsZS5iaW5kKHRoaXMpKVxuXHR9XG5cblx0b25DaGVja2VkKGUsIGRhdGEpIHtcblx0XHRzdXBlci5vbkNoZWNrZWQoZSk7XG5cdFx0dGhpcy5wbGF5ZXIudG9nZ2xlU2VjdGlvbnMoZGF0YS5jaGVja2VkKTtcblx0fVxuXG5cdF9vblNlY3Rpb25Ub2dnbGUoZSwgZGF0YSkge1xuXHRcdGNvbnN0IHsgaXNWaXNpYmxlIH0gPSBkYXRhO1xuXHRcdGlmKHRoaXMuY2hlY2tlZCAhPT0gaXNWaXNpYmxlKSB7XG5cdFx0XHR0aGlzLmNoZWNrZWQgPSBpc1Zpc2libGU7XG5cdFx0fVxuXG5cdH1cblxuXHRfb25TZWN0aW9uc0luaXQoZSkge1xuXHRcdHRoaXMub3B0aW9ucy5kaXNhYmxlID0gdGhpcy5kaXNhYmxlID0gZmFsc2U7XG5cdFx0dGhpcy5jaGVja2VkID0gdHJ1ZTtcblx0fVxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ1NlY3Rpb25Db250cm9sJywgU2VjdGlvbkNvbnRyb2wpO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ3NlY3Rpb24nLCBTZWN0aW9uQ29udHJvbCk7XG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uQ29udHJvbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL1NlY3Rpb25Db250cm9sLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBjb250cm9sLWNoZWNrYm94LmpzXG4gKi9cblxuXG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL0NvbnRyb2wnO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5cbi8qKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5jaGVja2VkPWZhbHNlXVxuICogQGNsYXNzIENvbnRyb2xDaGVja2JveCBUb2dnYWJsZSBjb250cm9sXG4gKi9cbmNsYXNzIENvbnRyb2xDaGVja2JveCBleHRlbmRzIENvbnRyb2wge1xuXG5cdGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucz17fSkge1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cdFx0dGhpcy5jaGVja2VkID0gdGhpcy5vcHRpb25zLmNoZWNrZWQgfHwgZmFsc2U7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdsZXBsYXllcl9jaGVja2VkJywgdGhpcy5vbkNoZWNrZWQuYmluZCh0aGlzKSlcblx0fVxuXG5cblx0LyoqXG5cdCAqIFNldHRlciBmb3IgY2hlY2tlZCBwcm9wZXJ0eVxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gdmFsXG5cdCAqL1xuXHRzZXQgY2hlY2tlZCAodmFsKSB7XG5cdFx0aWYgKHRoaXMuZGlzYWJsZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR2YWwgPSAhIXZhbDtcblx0XHR0aGlzLl9jaGVja2VkID0gdmFsXG5cdFx0dGhpcy5lbGVtZW50LnRvZ2dsZUNsYXNzKCdjb250cm9sLWNoZWNrYm94LS1jaGVja2VkJywgdmFsKTtcblx0XHR0aGlzLmVsZW1lbnQudHJpZ2dlcignbGVwbGF5ZXJfY2hlY2tlZCcsIHsgY2hlY2tlZCA6IHZhbCB9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXR0ZXIgZm9yIGNoZWNrZWQgcHJvcGVyeVxuXHQgKiBAcHVibGljXG5cdCAqIEByZXR1cm4ge2Jvb2xlYW59XG5cdCAqL1xuXHRnZXQgY2hlY2tlZCAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2NoZWNrZWQ7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRvbkNsaWNrIChlKSB7XG5cdFx0c3VwZXIub25DbGljayhlKTtcblx0XHR0aGlzLmNoZWNrZWQgPSAhdGhpcy5jaGVja2VkO1xuXHR9XG5cblx0LyoqXG5cdCAqIE9uIGNoZWNrZWQgZXZlbnQgaGFuZGxlclxuXHQgKlxuXHQgKiBAcGFyYW0ge0V2ZW50fSBlXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG5cdCAqL1xuXHRvbkNoZWNrZWQoZSwgZGF0YSkge1xuXG5cdH1cblxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGJ1aWxkQ1NTQ2xhc3MoKSB7XG5cdFx0cmV0dXJuIGBjb250cm9sLWNoZWNrYm94ICR7c3VwZXIuYnVpbGRDU1NDbGFzcygpfWBcblx0fVxuXG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnQ29udHJvbENoZWNrYm94JywgQ29udHJvbENoZWNrYm94KTtcbkNvbnRyb2wucmVnaXN0ZXJDb250cm9sKCdjaGVja2JveCcsIENvbnRyb2xDaGVja2JveCk7XG5leHBvcnQgZGVmYXVsdCBDb250cm9sQ2hlY2tib3g7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9Db250cm9sQ2hlY2tib3guanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIEZ1bGxzY3JlZW5Db250cm9sLmpzXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9Db250cm9sJztcblxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAY2xhc3MgRnVsbHNjcmVlbkNvbnRyb2xcbiAqIEBleHRlbmRzIENvbnRyb2xcbiAqL1xuY2xhc3MgRnVsbHNjcmVlbkNvbnRyb2wgZXh0ZW5kcyBDb250cm9sIHtcblx0Y29uc3RydWN0b3IgKHBsYXllciwgb3B0aW9ucz17fSkge1xuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0aWNvbk5hbWUgOiAnYXJyb3dzLWFsdCcsXG5cdFx0XHRjbGFzc05hbWUgOiAnZnVsbHNjcmVlbicsXG5cdFx0XHR0aXRsZSA6ICfQoNCw0LfQstC10YDQvdGD0YLRjC/RgdCy0LXRgNC90YPRgtGMINC90LAg0L/QvtC70L3Ri9C5INGN0LrRgNCw0L0nLFxuXHRcdFx0bmFtZSA6ICdmdWxsc2NyZWVuJ1xuXHRcdH0sIG9wdGlvbnMpO1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRvbkNsaWNrKGUpIHtcblx0XHRzdXBlci5vbkNsaWNrKGUpXG5cdFx0dGhpcy5wbGF5ZXIudG9nZ2xlRnVsbHNjcmVlbigpO1xuXHR9XG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnRnVsbHNjcmVlbkNvbnRyb2wnLCBGdWxsc2NyZWVuQ29udHJvbCk7XG5Db250cm9sLnJlZ2lzdGVyQ29udHJvbCgnZnVsbHNjcmVlbicsIEZ1bGxzY3JlZW5Db250cm9sKTtcbmV4cG9ydCBkZWZhdWx0IEZ1bGxzY3JlZW5Db250cm9sO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvRnVsbHNjcmVlbkNvbnRyb2wuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIFJhdGVDb250cm9sLmpzXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9Db250cm9sJztcbmltcG9ydCBDb250cm9sVGV4dCBmcm9tICcuL0NvbnRyb2xUZXh0JztcbmltcG9ydCBDb29raWUgZnJvbSAnLi4vdXRpbHMvY29va2llJztcblxuLyoqXG4gKiBAY2xhc3MgUmF0ZUNvbnRyb2xcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEBwcm9wZXJ0eSB7Q29udHJvbH0gZG93bkNvbnRyb2wgIERvd24gcmF0ZSBjb250cm9sXG4gKiBAcHJvcGVydHkge0NvbnRyb2x9IHVwQ29udHJvbCAgVXAgcmF0ZSBjb250cm9sXG4gKiBAcHJvcGVydHkge0NvbnRyb2xUZXh0fSBjdXJyZW50UmF0ZSBDb250cm9sIG9mIGN1dXJlbnQgcmF0ZVxuICogQGV4dGVuZHMgQ29udHJvbFxuICovXG5jbGFzcyBSYXRlQ29udHJvbCBleHRlbmRzIENvbnRyb2wge1xuXHRjb25zdHJ1Y3RvciAocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRjbGFzc05hbWUgOiAnY29udHJvbC1jb250YWluZXInLFxuXHRcdFx0dGFnIDogJ2Rpdidcblx0XHR9LCBvcHRpb25zKTtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ3JhdGVjaGFuZ2UnLCAoKSA9PiB7XG5cdFx0XHR0aGlzLnVwZGF0ZSgpO1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHRzdXBlci5jcmVhdGVFbGVtZW50KCk7XG5cdFx0Y29uc3QgdmlkZW8gPSB0aGlzLnBsYXllci52aWRlbztcblxuXHRcdHRoaXMuZG93bkNvbnRyb2wgPSBuZXcgQ29udHJvbCh0aGlzLnBsYXllciwge1xuXHRcdFx0Y2xhc3NOYW1lIDogJ3JhdGUtZG93bicsXG5cdFx0XHRuYW1lIDogJ3JhdGUtZG93bicsXG5cdFx0XHRpY29uTmFtZSA6ICdiYWNrd2FyZCcsXG5cdFx0XHRjb2xsZWN0aW9uIDogdGhpcy5vcHRpb25zLmNvbGxlY3Rpb24sXG5cdFx0XHR0aXRsZSA6ICfQo9C80LXQvdGM0YjQuNGC0Ywg0YHQutC+0YDQvtGB0YLRjCDQv9GA0L7QuNCz0YDRi9Cy0LDQvdC40Y8nLFxuXHRcdFx0b25DbGljayA6IGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0dmlkZW8uZGVjcmVhc2VSYXRlKCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHR0aGlzLnVwQ29udHJvbCA9IG5ldyBDb250cm9sKHRoaXMucGxheWVyLCB7XG5cdFx0XHRjbGFzc05hbWUgOiAncmF0ZS11cCcsXG5cdFx0XHRuYW1lIDogJ3JhdGUtdXAnLFxuXHRcdFx0aWNvbk5hbWUgOiAnZm9yd2FyZCcsXG5cdFx0XHRjb2xsZWN0aW9uIDogdGhpcy5vcHRpb25zLmNvbGxlY3Rpb24sXG5cdFx0XHR0aXRsZSA6ICfQo9Cy0LXQu9C40YfQuNGC0Ywg0YHQutC+0YDQvtGB0YLRjCDQv9GA0L7QuNCz0YDRi9Cy0LDQvdC40Y8nLFxuXHRcdFx0b25DbGljayA6IGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0dmlkZW8uaW5jcmVhc2VSYXRlKCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHR0aGlzLmN1cnJlbnRSYXRlID0gbmV3IENvbnRyb2xUZXh0KHRoaXMucGxheWVyLCB7XG5cdFx0XHRjbGFzc05hbWUgOiAncmF0ZS1jdXJyZW50Jyxcblx0XHRcdG9uQ2xpY2sgOiBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdHZpZGVvLnJhdGUgPSB0aGlzLnBsYXllci5vcHRpb25zLnJhdGUuZGVmYXVsdFxuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0dGhpcy5lbGVtZW50XG5cdFx0XHQuYXBwZW5kKHRoaXMuZG93bkNvbnRyb2wuZWxlbWVudClcblx0XHRcdC5hcHBlbmQodGhpcy5jdXJyZW50UmF0ZS5lbGVtZW50KVxuXHRcdFx0LmFwcGVuZCh0aGlzLnVwQ29udHJvbC5lbGVtZW50KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGJ1aWxkQ1NTQ2xhc3MoKSB7XG5cdFx0cmV0dXJuIHRoaXMub3B0aW9ucy5jbGFzc05hbWU7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRvblBsYXllckluaXRlZCgpIHtcblx0XHR0aGlzLnVwZGF0ZSgpO1xuXHR9XG5cblx0LyoqXG5cdCAqXG5cdCAqL1xuXHRvbkNsaWNrKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0fVxuXG5cdHVwZGF0ZSh2YWx1ZSkge1xuXHRcdGNvbnN0IHZpZGVvID0gdGhpcy5wbGF5ZXIudmlkZW87XG5cblx0XHR2YWx1ZSA9IHZhbHVlIHx8IHZpZGVvLnJhdGU7XG5cdFx0dmFsdWUgPSBwYXJzZUZsb2F0KHZhbHVlKVxuXHRcdFx0LnRvRml4ZWQoMilcblx0XHRcdC50b1N0cmluZygpXG5cdFx0XHQucmVwbGFjZSgvLC9nLCAnLicpO1xuXHRcdHRoaXMuY3VycmVudFJhdGUudGV4dCA9ICfDlycgKyB2YWx1ZTtcblxuXHRcdGlmKHRoaXMuZGlzYWJsZSkgcmV0dXJuO1xuXG5cdFx0aWYodmlkZW8ucmF0ZSA8PSB2aWRlby5yYXRlTWluKSB7XG5cdFx0XHR0aGlzLmRvd25Db250cm9sLmRpc2FibGUgPSB0cnVlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmRvd25Db250cm9sLmRpc2FibGUgPSBmYWxzZTtcblx0XHR9XG5cblx0XHRpZih2aWRlby5yYXRlID49IHZpZGVvLnJhdGVNYXgpIHtcblx0XHRcdHRoaXMudXBDb250cm9sLmRpc2FibGUgPSB0cnVlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnVwQ29udHJvbC5kaXNhYmxlID0gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblx0c2V0IGRpc2FibGUodmFsdWUpIHtcblx0XHR0aGlzLl9kaXNhYmxlID0gdmFsdWU7XG5cdFx0dGhpcy5kb3duQ29udHJvbC5kaXNhYmxlID0gdmFsdWU7XG5cdFx0dGhpcy51cENvbnRyb2wuZGlzYWJsZSA9IHZhbHVlO1xuXHR9XG5cblx0aW5pdCAoKSB7XG5cdFx0bGV0IHJhdGUgPSBDb29raWUuZ2V0KCdyYXRlJywgdGhpcy5wbGF5ZXIub3B0aW9ucy5yYXRlLmRlZmF1bHQpO1xuXHRcdHRoaXMuc2hvdyhyYXRlKTtcblx0fVxuXG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnUmF0ZUNvbnRyb2wnLCBSYXRlQ29udHJvbCk7XG5Db250cm9sLnJlZ2lzdGVyQ29udHJvbCgncmF0ZScsIFJhdGVDb250cm9sKTtcbmV4cG9ydCBkZWZhdWx0IFJhdGVDb250cm9sO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvUmF0ZUNvbnRyb2wuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIEJhY2t3YXJkQ29udHJvbC5qc1xuICpcbiAqIEJhY2t3YXJkIGNvbnRyb2xcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL0NvbnRyb2wnO1xuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gT3B0aW9uc1xuICogQGNsYXNzIEJhY2t3YXJkQ29udHJvbFxuICogQGV4dGVuZHMgQ29udHJvbFxuICovXG5jbGFzcyBCYWNrd2FyZENvbnRyb2wgZXh0ZW5kcyBDb250cm9sIHtcblx0Y29uc3RydWN0b3IgKHBsYXllciwgb3B0aW9ucz17fSkge1xuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0aWNvbk5hbWUgOiAndW5kbycsXG5cdFx0XHRjbGFzc05hbWUgOiAnYmFja3dhcmQnLFxuXHRcdFx0bmFtZSA6ICdiYWNrd2FyZCcsXG5cdFx0XHR0aXRsZSA6IGDQntGC0LzQvtGC0LDRgtGMINC90LDQt9Cw0LQg0L3QsCAke3BsYXllci5vcHRpb25zLnBsYXliYWNrLnN0ZXAubWVkaXVtfSDRgdC10LrRg9C90LRgLFxuXHRcdFx0ZGlzYWJsZSA6IHRydWVcblx0XHR9LCBvcHRpb25zKTtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ2ZpcnN0cGxheScsICgpID0+IHRoaXMuZGlzYWJsZSA9IGZhbHNlKVxuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0b25DbGljayhlKSB7XG5cdFx0c3VwZXIub25DbGljayhlKTtcblx0XHR0aGlzLnBsYXllci52aWRlby5jdXJyZW50VGltZSAtPSB0aGlzLnBsYXllci5vcHRpb25zLnBsYXliYWNrLnN0ZXAubWVkaXVtO1xuXHRcdHRoaXMucGxheWVyLnNwbGFzaEljb24uc2hvdygndW5kbycpO1xuXHR9XG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnQmFja3dhcmRDb250cm9sJywgQmFja3dhcmRDb250cm9sKTtcbkNvbnRyb2wucmVnaXN0ZXJDb250cm9sKCdiYWNrd2FyZCcsIEJhY2t3YXJkQ29udHJvbCk7XG5leHBvcnQgZGVmYXVsdCBCYWNrd2FyZENvbnRyb2w7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9CYWNrd2FyZENvbnRyb2wuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIFNvdXJjZUNvbnRyb2wuanNcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL0NvbnRyb2wnO1xuaW1wb3J0IENvbnRyb2xDb250YWluZXIgZnJvbSAnLi9Db250cm9sQ29udGFpbmVyJztcblxuXG4vKipcbiAqIEBjbGFzcyBTb3VyY2VDb250cm9sXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAZXh0ZW5kcyBDb250cm9sQ29uYWluZXJcbiAqL1xuY2xhc3MgU291cmNlQ29udHJvbCBleHRlbmRzIENvbnRyb2xDb250YWluZXIge1xuXHQvLyBUT0RPOiDQlNC10LvQsNGC0YwgZGlzYWJsZS9lbmFibGUg0L/QvtGB0LvQtSBvcHRpb25zIGluaXRcblx0Y29uc3RydWN0b3IgKHBsYXllciwgb3B0aW9ucz17fSkge1xuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0bmFtZSA6ICdzb3VyY2UnLFxuXHRcdFx0aWNvbk5hbWUgOiAnYnVsbHNleWUnLFxuXHRcdFx0dGl0bGUgOiAn0JrQsNGH0LXRgdGC0LLQvicsXG5cdFx0XHRjbGFzc05hbWUgOiAnc291cmNlLWNvbnRyb2wnLFxuXHRcdFx0ZGlzYWJsZSA6IHRydWVcblx0XHR9LCBvcHRpb25zKTtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ3BsYXlpbmcnLCB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLnBsYXllci5vbigncXVhbGl0eWNoYW5nZScsIHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xuXHR9XG5cblx0b25JdGVtQ2xpY2soZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblxuXHRcdGNvbnN0IGl0ZW0gPSAkKGUudGFyZ2V0KTtcblx0XHRjb25zdCB2aWRlbyA9IHRoaXMucGxheWVyLnZpZGVvO1xuXHRcdHZpZGVvLnBsYXliYWNrUXVhbGl0eSA9IGl0ZW0uZGF0YSgnbmFtZScpO1xuXG5cdFx0dGhpcy5kcm9wZG93bkNvbnRlbnQuaGlkZSgpO1xuXG5cdH1cblxuXHRvblBsYXllckluaXRlZChlLCBkYXRhKSB7XG5cdFx0dGhpcy51cGRhdGUoKTtcblx0fVxuXG5cdGdldERhdGEoKSB7XG5cdFx0cmV0dXJuIHRoaXMucGxheWVyLnZpZGVvLmdldEF2YWlsYWJsZVF1YWxpdHlMZXZlbHMoKTtcblx0fVxuXG5cdGdldEN1cnJlbnRWYWx1ZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5wbGF5ZXIudmlkZW8ucGxheWJhY2tRdWFsaXR5O1xuXHR9XG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnU291cmNlQ29udHJvbCcsIFNvdXJjZUNvbnRyb2wpO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ3NvdXJjZScsIFNvdXJjZUNvbnRyb2wpO1xuZXhwb3J0IGRlZmF1bHQgU291cmNlQ29udHJvbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL1NvdXJjZUNvbnRyb2wuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIENvbnRyb2xDb250YWluZXIuanNcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL0NvbnRyb2wnO1xuaW1wb3J0IENvbnRyb2xEcm9wZG93biBmcm9tICcuL0NvbnRyb2xEcm9wZG93bic7XG5cbi8qKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQGNsYXNzIENvbnRyb2xDb250YWluZXJcbiAqIEBleHRlbmRzIENvbnRyb2xEcm9wZG93blxuICovXG5jbGFzcyBDb250cm9sQ29udGFpbmVyIGV4dGVuZHMgQ29udHJvbERyb3Bkb3duIHtcblxuXHRjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnM9e30pIHtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXHRcdHRoaXMuX2FjdGl2ZSA9IG51bGw7XG5cdFx0LyoqXG5cdFx0ICogTGlzdCBvZiBpdGVtc1xuXHRcdCAqXG5cdFx0ICogQHB1YmxpY1xuXHRcdCAqIEB0eXBlIHtBcnJheX1cblx0XHQgKi9cblx0XHR0aGlzLmxpc3QgPSBbXTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgaXRlbSBvZiBjb250YWluZXIgYnkgaW5kZXhcblx0ICpcblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcblx0ICovXG5cdGdldEJ5SW5kZXgoaW5kZXgpIHtcblx0XHRyZXR1cm4gdGhpcy5saXN0W2luZGV4XTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTZXQgaXRlbSBhY3RpdmUgYnkgaW5kZXhcblx0ICpcblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcblx0ICovXG5cdHNldEFjdGl2ZUJ5SW5kZXgoaW5kZXgpIHtcblx0XHRpZiAodGhpcy5hY3RpdmUpIHtcblx0XHRcdHRoaXMuYWN0aXZlLnJlbW92ZUNsYXNzKCdjb250cm9sLWNvbnRhaW5lcl9faXRlbS0tYWN0aXZlJyk7XG5cdFx0fVxuXHRcdHRoaXMuX2FjdGl2ZSA9IHRoaXMubGlzdFtpbmRleF0uYWRkQ2xhc3MoJ2NvbnRyb2wtY29udGFpbmVyX19pdGVtLS1hY3RpdmUnKTtcblx0XHRyZXR1cm4gdGhpcy5fYWN0aXZlO1xuXHR9XG5cblxuXHQvKipcblx0ICogR2V0dGVyIG9mIGFjdGl2ZSBmaWVsZFxuXHQgKlxuXHQgKiBAcHVibGljXG5cdCAqIEB0eXBlIHtqUXVlcnl9XG5cdCAqL1xuXHRnZXQgYWN0aXZlICgpIHtcblx0XHRpZiAodGhpcy5fYWN0aXZlICYmIHRoaXMuX2FjdGl2ZS5sZW5ndGggPiAwKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5fYWN0aXZlO1xuXHRcdH1cblx0XHR0aGlzLmxpc3QuZm9yRWFjaChpdGVtID0+IHtcblx0XHRcdGlmIChpdGVtLmhhc0NsYXNzKCdjb250cm9sLWNvbnRhaW5lcl9faXRlbS0tYWN0aXZlJykpIHtcblx0XHRcdFx0dGhpcy5fYWN0aXZlID0gaXRlbTtcblx0XHRcdH1cblx0XHR9KVxuXHRcdHJldHVybiB0aGlzLl9hY3RpdmU7XG5cdH1cblxuXHQvKipcblx0ICogU2V0dGVyIG9mIGFjdGl2ZSBmaWVsZFxuXHQgKlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7alF1ZXJ5fSBJdGVtIG9mIGNvbnRhaW5lclxuXHQgKi9cblx0c2V0IGFjdGl2ZSAoZWxlbWVudCkge1xuXHRcdGlmICh0aGlzLmFjdGl2ZSkge1xuXHRcdFx0dGhpcy5hY3RpdmUucmVtb3ZlQ2xhc3MoJ2NvbnRyb2wtY29udGFpbmVyX19pdGVtLS1hY3RpdmUnKTtcblx0XHR9XG5cdFx0aWYgKGVsZW1lbnQpIHtcblx0XHRcdCQoZWxlbWVudCkuYWRkQ2xhc3MoJ2NvbnRyb2wtY29udGFpbmVyX19pdGVtLS1hY3RpdmUnKTtcblx0XHR9XG5cdFx0dGhpcy5fYWN0aXZlID0gZWxlbWVudDtcblx0XHR0aGlzLmNsb3NlKCk7XG5cdFx0cmV0dXJuIHRoaXMuX2FjdGl2ZVxuXHR9XG5cblxuXHQvKipcblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge1N0cmluZ3xqUXVlcnl9IENvbnRlbnQgb2YgaXRlbVxuXHQgKiBAcGFyYW0ge09iamVjdH0gRGF0YSBvZiBpdGVtXG5cdCAqL1xuXHRhZGRJdGVtIChjb250ZW50LCBkYXRhKSB7XG5cdFx0Y29uc3QgaXRlbSA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0LmFkZENsYXNzKCdjb250cm9sLWNvbnRhaW5lcl9faXRlbScpXG5cdFx0XHQuZGF0YShkYXRhKVxuXHRcdFx0LmF0dHIoJ3RpdGxlJywgZGF0YS50b29sdGlwKVxuXHRcdFx0Lm9uKCdjbGljayB0YXAnLCB0aGlzLm9uSXRlbUNsaWNrLmJpbmQodGhpcykpXG5cdFx0XHQuYXBwZW5kKGNvbnRlbnQpO1xuXG5cdFx0dGhpcy5saXN0ID0gdGhpcy5saXN0LmNvbmNhdChpdGVtKTtcblxuXHRcdHRoaXMuZHJvcGRvd25Db250ZW50LmFwcGVuZChpdGVtKTtcblxuXHRcdHRoaXMuZW1pdFRhcEV2ZW50cyhpdGVtKTtcblxuXHRcdHJldHVybiBpdGVtO1xuXHR9XG5cblx0LyoqXG5cdCAqIE9uIGl0ZW0gY2xpY2sgZXZlbnQgaGFuZGxlclxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7RXZlbnR9IGVcblx0ICovXG5cdG9uSXRlbUNsaWNrIChlKSB7XG5cdFx0dGhpcy5hY3RpdmUgPSBlLmN1cnJlbnRUYXJnZXQ7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRidWlsZENTU0NsYXNzKCkge1xuXHRcdHJldHVybiBgJHtzdXBlci5idWlsZENTU0NsYXNzKCl9IGNvbnRyb2wtY29udGFpbmVyYFxuXHR9XG5cblx0dXBkYXRlKCkge1xuXHRcdGNvbnN0IGRhdGEgPSB0aGlzLmdldERhdGEoKVxuXHRcdGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHRoaXMuZ2V0Q3VycmVudFZhbHVlKClcblxuXHRcdGlmKGRhdGEgPT0gbnVsbCB8fCBkYXRhLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0dGhpcy5kaXNhYmxlID0gdHJ1ZTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLmxpc3QgPSBbXTtcblx0XHR0aGlzLmRyb3Bkb3duQ29udGVudC5lbXB0eSgpO1xuXG5cdFx0ZGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xuXHRcdFx0Y29uc3QgZWxlbSA9IHRoaXMuYWRkSXRlbShpdGVtLnRpdGxlLCBpdGVtKTtcblx0XHRcdGlmKGN1cnJlbnRWYWx1ZSAmJiBjdXJyZW50VmFsdWUubmFtZSA9PT0gaXRlbS5uYW1lKSB7XG5cblx0XHRcdFx0dGhpcy5hY3RpdmUgPSBlbGVtO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdHRoaXMuZGlzYWJsZSA9IGZhbHNlO1xuXHR9XG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnQ29udHJvbENvbnRhaW5lcicsIENvbnRyb2xDb250YWluZXIpO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ2NvbnRhaW5lcicsIENvbnRyb2xDb250YWluZXIpO1xuZXhwb3J0IGRlZmF1bHQgQ29udHJvbENvbnRhaW5lcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL0NvbnRyb2xDb250YWluZXIuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIFN1YnRpdGxlQ29udHJvbC5qc1xuICpcbiAqIFN1YnRpdGxlIGNvbnRyb2xcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL0NvbnRyb2wnO1xuaW1wb3J0IENvbnRyb2xDb250YWluZXIgZnJvbSAnLi9Db250cm9sQ29udGFpbmVyJztcblxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAY2xhc3MgU3VidGl0bGVDb250cm9sXG4gKiBAZXh0ZW5kcyBDb250cm9sQ29udGFpbmVyXG4gKi9cbmNsYXNzIFN1YnRpdGxlQ29udHJvbCBleHRlbmRzIENvbnRyb2xDb250YWluZXIge1xuXHRjb25zdHJ1Y3RvciAocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRpY29uTmFtZSA6ICdjb21tZW50aW5nLW8nLFxuXHRcdFx0dGl0bGUgOiAn0KHRg9Cx0YLQuNGC0YDRiycsXG5cdFx0XHRuYW1lIDogJ3N1YnRpdGxlJyxcblx0XHRcdGNsYXNzTmFtZSA6ICdzdWJ0aXRsZS1jb250cm9sJyxcblx0XHRcdGRpc2FibGUgOiB0cnVlXG5cdFx0fSwgb3B0aW9ucyk7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblxuXHRcdHRoaXMucGxheWVyLm9uKCdwbGF5aW5nJywgdGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5wbGF5ZXIub24oJ3RyYWNrc2NoYW5nZScsIHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xuXHR9XG5cblx0b25DbGljayAoZSkge1xuXHRcdHN1cGVyLm9uQ2xpY2soZSk7XG5cdFx0Y29uc3QgdmlkZW8gPSB0aGlzLnBsYXllci52aWRlbztcblx0XHR2aWRlby50cmFjayA9IG51bGxcblx0fVxuXG5cdG9uSXRlbUNsaWNrIChlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKClcblxuXHRcdGNvbnN0IGl0ZW0gPSAkKGUudGFyZ2V0KVxuXHRcdGNvbnN0IHZpZGVvID0gdGhpcy5wbGF5ZXIudmlkZW87XG5cdFx0aWYgKGl0ZW0uZGF0YSgpKSB7XG5cdFx0XHR2aWRlby50cmFjayA9IGl0ZW0uZGF0YSgpO1xuXHRcdH1cblxuXHRcdHRoaXMuZHJvcGRvd25Db250ZW50LmhpZGUoKVxuXHR9XG5cblx0b25QbGF5ZXJJbml0ZWQoZSwgZGF0YSkge1xuXHRcdHRoaXMudXBkYXRlKClcblx0fVxuXG5cdHVwZGF0ZSgpIHtcblx0XHRzdXBlci51cGRhdGUoKTtcblx0XHRjb25zdCBoYXNWYWx1ZSA9ICEhKHRoaXMuZ2V0Q3VycmVudFZhbHVlKCkgJiYgdGhpcy5nZXRDdXJyZW50VmFsdWUoKS5uYW1lICE9IG51bGwpO1xuXHRcdHRoaXMuZWxlbWVudC50b2dnbGVDbGFzcyhcblx0XHRcdCdjb250cm9sLWNoZWNrYm94LS1jaGVja2VkJyxcblx0XHRcdGhhc1ZhbHVlXG5cdFx0KVxuXHR9XG5cblx0Z2V0RGF0YSgpIHtcblx0XHRyZXR1cm4gdGhpcy5wbGF5ZXIudmlkZW8uc3VidGl0bGVzO1xuXHR9XG5cblx0Z2V0Q3VycmVudFZhbHVlKCkge1xuXHRcdHJldHVybiB0aGlzLnBsYXllci52aWRlby50cmFjaztcblx0fVxuXG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnU3VidGl0bGVDb250cm9sJywgU3VidGl0bGVDb250cm9sKTtcbkNvbnRyb2wucmVnaXN0ZXJDb250cm9sKCdzdWJ0aXRsZScsIFN1YnRpdGxlQ29udHJvbCk7XG5leHBvcnQgZGVmYXVsdCBTdWJ0aXRsZUNvbnRyb2w7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9TdWJ0aXRsZUNvbnRyb2wuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIERvd25sb2FkQ29udHJvbC5qc1xuICpcbiAqIERvd25sb2FkIGNvbnRyb2xcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9Db250cm9sJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJztcblxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAY2xhc3MgRG93bmxvYWRDb250cm9sXG4gKiBAZXhudGVkcyBDb250cm9sXG4gKi9cbmNsYXNzIERvd25sb2FkQ29udHJvbCBleHRlbmRzIENvbnRyb2wge1xuXHRjb25zdHJ1Y3RvciAocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHtcblx0XHRcdHRpdGxlIDogJ9Ch0LrQsNGH0LDRgtGMINCy0LjQtNC10L4nLFxuXHRcdFx0Y2xhc3NOYW1lIDogJ2Rvd25sb2FkJyxcblx0XHRcdG5hbWUgOiAnZG93bmxvYWQnLFxuXHRcdH0sIG9wdGlvbnMpO1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cdFx0dGhpcy5wbGF5ZXIub24oJ2xvYWRzdGFydCcsIHRoaXMub25Mb2FkU3RhcnQuYmluZCh0aGlzKSk7XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0Ly8gVE9ETzog0JTQvtC+0L/RgNC10LTQtdC70LjRgtGMINGN0YLQvtGCINC80LXRgtC+0LQsINCwINC90LUg0L/QtdGA0LXQvtC/0YDQtdC00LvQtdC40YLRjFxuXHRcdHRoaXMuZWxlbWVudCA9ICQoJzxhIC8+Jylcblx0XHRcdC5hdHRyKHtcblx0XHRcdFx0aHJlZiA6ICcnLFxuXHRcdFx0XHR0YXJnZXQgOiAnX2JsYW5rJyxcblx0XHRcdFx0ZG93bmxvYWQgOiB0cnVlLFxuXHRcdFx0XHR0aXRsZSA6IHRoaXMub3B0aW9ucy50aXRsZSxcblx0XHRcdH0pXG5cdFx0XHQuYWRkQ2xhc3ModGhpcy5idWlsZENTU0NsYXNzKCkpXG5cdFx0XHQuYXBwZW5kKG5ldyBJY29uKHRoaXMucGxheWVyLCB7IGljb25OYW1lIDogJ2Rvd25sb2FkJyB9KS5lbGVtZW50KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGJ1aWxkQ1NTQ2xhc3MoKSB7XG5cdFx0cmV0dXJuIGAke3N1cGVyLmJ1aWxkQ1NTQ2xhc3MoKX1gO1xuXHR9XG5cblxuXHQvKipcblx0ICogU2V0dGVyIG9mIGxpbmsgZmllbGRcblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgUGF0aCBmb3IgdmlkZW9cblx0ICovXG5cdHNldCBsaW5rICh2YWx1ZSkge1xuXHRcdGNvbnN0IHRpdGxlID0gdGhpcy5wbGF5ZXIub3B0aW9ucy50aXRsZTtcblx0XHRsZXQgZmlsZU5hbWU7XG5cblx0XHRpZih0aXRsZSAhPSBudWxsKSB7XG5cdFx0XHRmaWxlTmFtZSA9IGRlY29kZVVSSUNvbXBvbmVudCh0aXRsZSkgKyAnLicgKyBnZXRGaWxlRXh0ZW5zaW9uKHZhbHVlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3QgcGFyc2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXHRcdFx0cGFyc2VyLmhyZWYgPSB2YWx1ZTtcblx0XHRcdGZpbGVOYW1lID0gcGFyc2VyLnBhdGhuYW1lLnNwbGl0KCcvJyk7XG5cdFx0XHRmaWxlTmFtZSA9IGZpbGVOYW1lW2ZpbGVOYW1lLmxlbmd0aCAtIDFdO1xuXHRcdH1cblxuXHRcdHRoaXMuZWxlbWVudC5hdHRyKHtcblx0XHRcdGhyZWYgOiB2YWx1ZSxcblx0XHRcdGRvd25sb2FkIDogZmlsZU5hbWVcblx0XHR9KTtcblx0fVxuXG5cblx0b25Mb2FkU3RhcnQoZSwgZGF0YSkge1xuXHRcdHRoaXMubGluayA9IHRoaXMucGxheWVyLnZpZGVvLnNyYy51cmw7XG5cdH1cblxufVxuZnVuY3Rpb24gZ2V0RmlsZUV4dGVuc2lvbihmaWxlTmFtZSkge1xuXHRyZXR1cm4gZmlsZU5hbWUuc3BsaXQoJy4nKS5wb3AoKTtcbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdEb3dubG9hZENvbnRyb2wnLCBEb3dubG9hZENvbnRyb2wpO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ2Rvd25sb2FkJywgRG93bmxvYWRDb250cm9sKTtcbmV4cG9ydCBkZWZhdWx0IERvd25sb2FkQ29udHJvbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL0Rvd25sb2FkQ29udHJvbC5qcyIsIlxuJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBLZXliaW5kaW5nSW5mb0NvbnRyb2wuanNcbiAqXG4gKiBJbmZvIGNvbnRyb2xcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL0NvbnRyb2wnO1xuaW1wb3J0IENvbnRyb2xEcm9wZG93biBmcm9tICcuL0NvbnRyb2xEcm9wZG93bic7XG5cbi8qKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQGNsYXNzIEtleUJpbmRpbmdJbmZvQ29udHJvbFxuICogQGV4dGVuZHMgQ29udHJvbERyb3Bkb3duXG4gKi9cbmNsYXNzIEtleUJpbmRpbmdJbmZvQ29udHJvbCBleHRlbmRzIENvbnRyb2xEcm9wZG93biB7XG5cblx0Y29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRpY29uTmFtZSA6ICdpbmZvJyxcblx0XHRcdHRpdGxlIDogJ9CY0L3RhNC+Jyxcblx0XHRcdGNsYXNzTmFtZSA6ICdpbmZvLWNvbnRyb2wnLFxuXHRcdFx0bmFtZSA6ICdpbmZvJ1xuXHRcdH0sIG9wdGlvbnMpO1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cdH1cblxuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdHN1cGVyLmNyZWF0ZUVsZW1lbnQoKTtcblx0XHRsZXQga2V5QmluZGluZyA9IHRoaXMucGxheWVyLm9wdGlvbnMua2V5QmluZGluZztcblx0XHRsZXQgaW5mb0NvbnRlbnQgPSBgYDtcblx0XHRmb3IgKGxldCBfa2V5IGluIGtleUJpbmRpbmcpIHtcblx0XHRcdGlmICgha2V5QmluZGluZy5oYXNPd25Qcm9wZXJ0eShfa2V5KSkgY29udGludWU7XG5cblx0XHRcdGxldCBob3RrZXkgPSBrZXlCaW5kaW5nW19rZXldO1xuXHRcdFx0bGV0IGl0ZW0gPSAnJztcblx0XHRcdGxldCBrZXlTdHJpbmcgPSAnJztcblxuXHRcdFx0aG90a2V5LmluZm8uZm9yRWFjaCgoa2V5LCBpbmRleCkgPT4ge1xuXHRcdFx0XHRpZiAoaW5kZXggIT09IDApIHtcblx0XHRcdFx0XHRrZXlTdHJpbmcgKz0gYCArIGBcblx0XHRcdFx0fVxuXHRcdFx0XHRrZXlTdHJpbmcgKz0gYDxrYmQgY2xhc3M9XCJsZXBsYXllci1rZXlcIj4ke2tleX08L2tiZD5gXG5cdFx0XHR9KTtcblxuXHRcdFx0aXRlbSA9IGBcblx0XHRcdFx0PGRpdiBjbGFzcz1cImluZm8tY29udHJvbF9faXRlbVwiPlxuXHRcdFx0XHRcdCR7a2V5U3RyaW5nfSAtICR7aG90a2V5LmRlc2NyaXB0aW9ufVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdGBcblxuXHRcdFx0aW5mb0NvbnRlbnQgKz0gaXRlbTtcblxuXHRcdH1cblx0XHR0aGlzLmRyb3Bkb3duQ29udGVudFxuXHRcdFx0LmFkZENsYXNzKCdpbmZvLWNvbnRyb2xfX2NvbnRlbnQnKVxuXHRcdFx0LmFwcGVuZChpbmZvQ29udGVudCk7XG5cdH1cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdLZXlCaW5kaW5nSW5mb0NvbnRyb2wnLCBLZXlCaW5kaW5nSW5mb0NvbnRyb2wpO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ2tleWJpbmRpbmcgaW5mbycsIEtleUJpbmRpbmdJbmZvQ29udHJvbCk7XG5leHBvcnQgZGVmYXVsdCBLZXlCaW5kaW5nSW5mb0NvbnRyb2w7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9LZXliaW5kaW5nSW5mb0NvbnRyb2wuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIFRpbWVJbmZvQ29udHJvbC5qc1xuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCBDb250cm9sIGZyb20gJy4vQ29udHJvbCc7XG5pbXBvcnQgQ29udHJvbFRleHQgZnJvbSAnLi9Db250cm9sVGV4dCc7XG5pbXBvcnQgeyBzZWNvbmRzVG9UaW1lIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBjbGFzcyBUaW1lSW5mb0NvbnRyb2xcbiAqIEBwcm9wZXJ0eSB7Q29udHJvbFRleHR9IGN1cnJlbnRUaW1lIEN1cnJlbnQgdGltZSdzIHRleHRcbiAqIEBwcm9wZXJ0eSB7Q29udHJvbFRleHR9IHRvdGFsVGltZSBUb3RhbCB0aW1lXG4gKiBAcHJvcGVydHkge2pRdWVyeX0gbGluZVxuICogQGV4dGVuZHMgQ29udHJvbFxuICovXG5jbGFzcyBUaW1lSW5mb0NvbnRyb2wgZXh0ZW5kcyBDb250cm9sIHtcblxuXHRjb25zdHJ1Y3RvciAocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRjbGFzc05hbWUgOiAndGltZWxpbmUgdGltZWxpbmUtY29udGFpbmVyJyxcblx0XHRcdG5hbWUgOiAndGltZS1pbmZvJ1xuXHRcdH0sIG9wdGlvbnMpO1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cblx0XHR0aGlzLnBsYXllci5vbigndGltZXVwZGF0ZScsIChlLCBkYXRhKSA9PiB7XG5cdFx0XHRjb25zdCB0aW1lID0gdGhpcy5wbGF5ZXIuY3VycmVudFRpbWU7XG5cdFx0XHR0aGlzLl9jdXJyZW50VGltZUNvbnRyb2wudGV4dCA9IHNlY29uZHNUb1RpbWUodGltZSk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLnBsYXllci5vbignZHVyYXRpb25jaGFuZ2UnLCAoZSkgPT4ge1xuXHRcdFx0dGhpcy5fdG90YWxUaW1lQ29udHJvbC50ZXh0ID0gc2Vjb25kc1RvVGltZSh0aGlzLnBsYXllci52aWRlby5kdXJhdGlvbik7XG5cdFx0fSk7XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0Y29uc3QgZHVyYXRpb24gPSB0aGlzLnBsYXllci52aWRlby5kdXJhdGlvbjtcblx0XHRjb25zdCBjdXJyZW50VGltZSA9IHRoaXMucGxheWVyLnZpZGVvLmN1cnJlbnRUaW1lO1xuXHRcdHRoaXMuX2N1cnJlbnRUaW1lQ29udHJvbCA9IG5ldyBDb250cm9sVGV4dCh0aGlzLnBsYXllciwgeyBjbGFzc05hbWUgOiAnY29udHJvbC10aW1lX19jdXJyZW50J30pO1xuXHRcdHRoaXMuX3RvdGFsVGltZUNvbnRyb2wgPSBuZXcgQ29udHJvbFRleHQodGhpcy5wbGF5ZXIsIHsgY2xhc3NOYW1lIDogJ2NvbnRyb2wtdGltZV9fdG90YWwnfSk7XG5cblx0XHRpZihpc05hTihkdXJhdGlvbikgfHwgZHVyYXRpb24gPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5fdG90YWxUaW1lQ29udHJvbC50ZXh0ID0gJyc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuX3RvdGFsVGltZUNvbnRyb2wudGV4dCA9IHNlY29uZHNUb1RpbWUoZHVyYXRpb24pO1xuXHRcdH1cblxuXHRcdGlmKGN1cnJlbnRUaW1lID09IG51bGwpIHtcblx0XHRcdHRoaXMuX2N1cnJlbnRUaW1lQ29udHJvbC50ZXh0ID0gc2Vjb25kc1RvVGltZSgwKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5fY3VycmVudFRpbWVDb250cm9sLnRleHQgPSBzZWNvbmRzVG9UaW1lKGN1cnJlbnRUaW1lKTtcblx0XHR9XG5cblx0XHR0aGlzLmVsZW1lbnQgPSAkKCc8ZGl2Lz4nKS5hZGRDbGFzcygnY29udHJvbC10aW1lJyk7XG5cdFx0dGhpcy5lbGVtZW50XG5cdFx0XHQuYXBwZW5kKHRoaXMuX2N1cnJlbnRUaW1lQ29udHJvbC5lbGVtZW50KVxuXHRcdFx0LmFwcGVuZCh0aGlzLl90b3RhbFRpbWVDb250cm9sLmVsZW1lbnQpXG5cblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50O1xuXHR9XG5cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRvblBsYXllckluaXRlZChlKSB7XG5cdFx0bGV0IHZpZGVvID0gdGhpcy5wbGF5ZXIudmlkZW87XG5cdFx0dGhpcy5fY3VycmVudFRpbWVDb250cm9sLnRleHQgPSBzZWNvbmRzVG9UaW1lKHZpZGVvLmN1cnJlbnRUaW1lKTtcblx0XHR0aGlzLl90b3RhbFRpbWVDb250cm9sLnRleHQgPSBzZWNvbmRzVG9UaW1lKHZpZGVvLmR1cmF0aW9uKTtcblx0fVxuXG5cdG9uQ2xpY2soZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKVxuXHR9XG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnVGltZUluZm9Db250cm9sJywgVGltZUluZm9Db250cm9sKTtcbkNvbnRyb2wucmVnaXN0ZXJDb250cm9sKCd0aW1laW5mbycsIFRpbWVJbmZvQ29udHJvbCk7XG5leHBvcnQgZGVmYXVsdCBUaW1lSW5mb0NvbnRyb2w7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9UaW1lSW5mb0NvbnRyb2wuanMiLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL0NvbXBvbmVudCc7XG5pbXBvcnQgeyBJU19TQUZBUkksIElTX0lPUywgSVNfQU5EUk9JRCB9IGZyb20gJy4uL3V0aWxzL2Jyb3dzZXInO1xuaW1wb3J0IEVudGl0eSBmcm9tICcuL0VudGl0eSc7XG5cblxuY2xhc3MgSHRtbDUgZXh0ZW5kcyBFbnRpdHkge1xuXHRjb25zdHJ1Y3RvciAocGxheWVyLCBvcHRpb25zKSB7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblx0XHR0aGlzLm1lZGlhID0gdGhpcy5lbGVtZW50WzBdO1xuXG5cdFx0dGhpcy5zdWJ0aXRsZXMgPSBbXTtcblx0XHR0aGlzLmJ1ZmZlclJhbmdlcyA9IFtdO1xuXG5cdFx0dGhpcy5zcmMgPSB0aGlzLnBsYXllci5vcHRpb25zLnNyYztcblxuXHRcdGlmKHRoaXMucGxheWVyLm9wdGlvbnMucG9zdGVyICE9IG51bGwpIHtcblx0XHRcdHRoaXMucG9zdGVyID0gdGhpcy5wbGF5ZXIub3B0aW9ucy5wb3N0ZXI7XG5cdFx0fVxuXG5cdFx0aWYodGhpcy5nZXRBdmFpbGFibGVRdWFsaXR5TGV2ZWxzKCkubGVuZ3RoID4gMCkge1xuXHRcdFx0dGhpcy5fcGxheWJhY2tRdWFsaXR5ID0gdGhpcy5nZXRBdmFpbGFibGVRdWFsaXR5TGV2ZWxzKClbMF07XG5cdFx0fVxuXG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdsb2Fkc3RhcnQnLCB0aGlzLm9uTG9hZFN0YXJ0LmJpbmQodGhpcykpO1xuXHRcdHRoaXMuZWxlbWVudC5vbigndGltZXVwZGF0ZScsIHRoaXMub25UaW1lVXBkYXRlLmJpbmQodGhpcykpO1xuXHRcdHRoaXMuZWxlbWVudC5vbignZHVyYXRpb25jaGFuZ2UnLCB0aGlzLm9uRHVyYXRpb25DaGFuZ2UuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdwcm9ncmVzcycsIHRoaXMub25Qcm9ncmVzcy5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ3NlZWtpbmcnLCB0aGlzLm9uU2Vla2luZy5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ3NlZWtlZCcsIHRoaXMub25TZWVrZWQuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCd2b2x1bWVjaGFuZ2UnLCB0aGlzLm9uVm9sdW1lQ2hhbmdlLmJpbmQodGhpcykpO1xuXHRcdHRoaXMuZWxlbWVudC5vbignY2xpY2snLCB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdkYmxjbGljaycsIHRoaXMub25EYmxjbGljay5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ3BsYXknLCB0aGlzLm9uUGxheS5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ3BhdXNlJywgdGhpcy5vblBhdXNlLmJpbmQodGhpcykpO1xuXHRcdHRoaXMuZWxlbWVudC5vbigncmF0ZWNoYW5nZScsIHRoaXMub25SYXRlQ2hhbmdlLmJpbmQodGhpcykpO1xuXHRcdHRoaXMuZWxlbWVudC5vbignZW5kZWQnLCB0aGlzLm9uRW5kZWQuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdjYW5wbGF5dGhyb3VnaCcsIHRoaXMub25DYW5wbGF5VGhyb3VnaC5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ3dhaXRpbmcnLCB0aGlzLm9uV2FpdGluZy5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ2Vycm9yJywgdGhpcy5vbkVycm9yLmJpbmQodGhpcykpO1xuXHR9XG5cblx0b25Mb2FkU3RhcnQoZSkge1xuXHRcdHRoaXMudHJpZ2dlcignbG9hZHN0YXJ0Jyk7XG5cdH1cblxuXHRvblRpbWVVcGRhdGUoZSkge1xuXHRcdHRoaXMudHJpZ2dlcigndGltZXVwZGF0ZScpO1xuXHR9XG5cblx0b25EdXJhdGlvbkNoYW5nZShlKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCdkdXJhdGlvbmNoYW5nZScpO1xuXHR9XG5cblx0b25Qcm9ncmVzcyhlKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCdwcm9ncmVzcycpO1xuXHR9XG5cblx0b25TZWVraW5nKGUpIHtcblx0XHR0aGlzLnRyaWdnZXIoJ3NlZWtpbmcnKTtcblx0fVxuXG5cdG9uU2Vla2VkKGUpIHtcblx0XHR0aGlzLnRyaWdnZXIoJ3NlZWtlZCcpO1xuXHR9XG5cblx0b25Wb2x1bWVDaGFuZ2UoZSkge1xuXHRcdHRoaXMudHJpZ2dlcigndm9sdW1lY2hhbmdlJyk7XG5cdH1cblxuXHRvbkNsaWNrKCkge1xuXHRcdHRoaXMudHJpZ2dlcignY2xpY2snKTtcblx0fVxuXG5cdG9uRGJsY2xpY2soKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCdkYmxjbGljaycpO1xuXHR9XG5cblx0b25QbGF5KCkge1xuXHRcdHRoaXMudHJpZ2dlcigncGxheScpO1xuXHR9XG5cblx0b25QYXVzZSgpIHtcblx0XHR0aGlzLnRyaWdnZXIoJ3BhdXNlJyk7XG5cdH1cblxuXHRvblBsYXlpbmcoKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCdwbGF5aW5nJyk7XG5cdH1cblxuXHRvblJhdGVDaGFuZ2UoKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCdyYXRlY2hhbmdlJyk7XG5cdH1cblxuXHRvbkVuZGVkKCkge1xuXHRcdHRoaXMudHJpZ2dlcignZW5kZWQnKTtcblx0fVxuXG5cdG9uQ2FucGxheVRocm91Z2goKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCdjYW5wbGF5dGhyb3VnaCcpO1xuXHR9XG5cblx0b25XYWl0aW5nKCkge1xuXHRcdHRoaXMudHJpZ2dlcignd2FpdGluZycpO1xuXHR9XG5cblx0b25FcnJvcihlKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCdlcnJvcicsIHsgY29kZSA6IGUudGFyZ2V0LmVycm9yLmNvZGUgfSk7XG5cdH1cblxuXHQvKiBUT0RPICovXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0dGhpcy5lbGVtZW50ID0gdGhpcy5vcHRpb25zLmN0eDtcblx0XHRbXG5cblx0XHRcdC8vIFJlbW92ZSBjb250cm9scyBiZWNhdXNlIHdlIGRvbnQgbm90IHN1cHBvcnQgbmF0aXZlIGNvbnRyb2xzIHlldFxuXHRcdFx0J2NvbnRyb2xzJyxcblx0XHRcdCdwb3N0ZXInLFxuXG5cdFx0XHQvLyBJdCBpcyB1bm5lY2Vzc2FyeSBhdHRycywgdGhpcyBmdW5jdGlvbmFsaXR5IHNvbHZlIENTU1xuXHRcdFx0J2hlaWdodCcsXG5cdFx0XHQnd2lkdGgnXG5cblx0XHRdLmZvckVhY2goaXRlbSA9PiB7XG5cdFx0XHR0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cihpdGVtKTtcblx0XHR9KTtcblxuXHRcdC8vIFNldCBhdHRycyBmcm9tIG9wdGlvbnNcblx0XHRbXG5cdFx0XHQncHJlbG9hZCcsXG5cdFx0XHQnYXV0b3BsYXknLFxuXHRcdFx0J2xvb3AnLFxuXHRcdFx0J211dGVkJ1xuXHRcdF0uZm9yRWFjaChpdGVtID0+IHtcblx0XHRcdGlmKHRoaXMucGxheWVyLm9wdGlvbnNbaXRlbV0pIHtcblx0XHRcdFx0dGhpcy5lbGVtZW50LmF0dHIoaXRlbSwgdGhpcy5wbGF5ZXIub3B0aW9uc1tpdGVtXSk7XG5cdFx0XHRcdHRoaXMuZWxlbWVudC5wcm9wKGl0ZW0sIHRoaXMucGxheWVyLm9wdGlvbnNbaXRlbV0pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cblx0XHR0aGlzLmVsZW1lbnQuZmluZCgnc291cmNlW2RhdGEtcXVhbGl0eV0nKS5lYWNoKChpLCBpdGVtKSA9PiB7XG5cdFx0XHQkKGl0ZW0pLnJlbW92ZSgpO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudDtcblx0fVxuXG5cdGdldCBjdXJyZW50VGltZSAoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWVkaWEuY3VycmVudFRpbWU7XG5cdH1cblxuXHRzZXQgY3VycmVudFRpbWUgKHZhbHVlKSB7XG5cdFx0bGV0IHRpbWU7XG5cdFx0aWYgKHZhbHVlID4gdGhpcy5kdXJhdGlvbikge1xuXHRcdFx0dGltZSA9IHRoaXMuZHVyYXRpb25cblx0XHR9IGVsc2UgaWYgKHZhbHVlIDwgMCkge1xuXHRcdFx0dGltZSA9IDBcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGltZSA9IHZhbHVlO1xuXHRcdH1cblxuXHRcdHRoaXMucGxheWVyLnRyaWdnZXIoJ3RpbWV1cGRhdGVsb2FkJywgeyBjdXJyZW50VGltZSA6IHRpbWUgfSk7XG5cblx0XHR0aGlzLm1lZGlhLmN1cnJlbnRUaW1lID0gdGltZTtcblx0fVxuXG5cdGdldCBkdXJhdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWVkaWEuZHVyYXRpb247XG5cdH1cblxuXHRnZXQgaGVpZ2h0ICgpIHtcblx0XHRyZXR1cm4gdGhpcy5tZWRpYS5jbGllbnRIZWlnaHQ7XG5cdH1cblxuXHRnZXQgd2lkdGggKCkge1xuXHRcdHJldHVybiB0aGlzLm1lZGlhLmNsaWVudFdpZHRoO1xuXHR9XG5cblx0Z2V0IHJhdGUgKCkge1xuXHRcdHJldHVybiB0aGlzLm1lZGlhLnBsYXliYWNrUmF0ZTtcblx0fVxuXG5cdHNldCBtdXRlZCh2YWx1ZSkge1xuXHRcdHRoaXMubWVkaWEubXV0ZWQgPSB2YWx1ZTtcblx0fVxuXG5cdGdldCBtdXRlZCgpIHtcblx0XHRyZXR1cm4gdGhpcy5tZWRpYS5tdXRlZFxuXHR9XG5cblx0Z2V0IHJhdGVNYXgoKSB7XG5cdFx0bGV0IG1heCA9IHRoaXMucGxheWVyLm9wdGlvbnMucmF0ZS5tYXg7XG5cdFx0aWYoSVNfSU9TIHx8IElTX0FORFJPSUQpIHtcblx0XHRcdG1heCA9IEh0bWw1Lk1PQklMRV9NQVhfUkFURTtcblx0XHR9XG5cdFx0aWYoSVNfU0FGQVJJKSB7XG5cdFx0XHRtYXggPSBIdG1sNS5TQUZBUklfTUFYX1JBVEU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1heDtcblx0fVxuXG5cdGdldCByYXRlTWluKCkge1xuXHRcdGxldCBtaW4gPSB0aGlzLnBsYXllci5vcHRpb25zLnJhdGUubWluO1xuXG5cdFx0aWYgKElTX0lPUyB8fCBJU19BTkRST0lEKSB7XG5cdFx0XHRtaW4gPSBIdG1sNS5NT0JJTEVfTUlOX1JBVEU7XG5cdFx0fVxuXG5cdFx0aWYgKElTX1NBRkFSSSkge1xuXHRcdFx0bWluID0gSHRtbDUuU0FGQVJJX01JTl9SQVRFO1xuXHRcdH1cblxuXHRcdHJldHVybiBtaW47XG5cdH1cblxuXHRzZXQgcmF0ZSAodmFsdWUpIHtcblx0XHRzdXBlci5yYXRlID0gdmFsdWU7XG5cdFx0dGhpcy5tZWRpYS5wbGF5YmFja1JhdGUgPSB2YWx1ZTtcblx0fVxuXG5cdGdldEF2YWlsYWJsZVF1YWxpdHlMZXZlbHMoKSB7XG5cdFx0cmV0dXJuIHRoaXMucGxheWVyLm9wdGlvbnMuc291cmNlcy5tYXAoaXRlbSA9PiAoe1xuXHRcdFx0bmFtZSA6IGl0ZW0udGl0bGUsXG5cdFx0XHQuLi5pdGVtXG5cdFx0fSkpO1xuXHR9XG5cblx0c2V0IHBsYXliYWNrUXVhbGl0eShuYW1lKSB7XG5cdFx0c3VwZXIucGxheWJhY2tRdWFsaXR5ID0gbmFtZTtcblx0XHRjb25zdCB0aW1lID0gdGhpcy5jdXJyZW50VGltZTtcblx0XHRjb25zdCByYXRlID0gdGhpcy5yYXRlO1xuXHRcdGNvbnN0IHN0b3AgPSB0aGlzLnBhdXNlZDtcblxuXHRcdHRoaXMuX3BsYXliYWNrUXVhbGl0eSA9IHRoaXMuZ2V0QXZhaWxhYmxlUXVhbGl0eUxldmVscygpLmZpbmQoaXRlbSA9PiBpdGVtLm5hbWUgPT09IG5hbWUpO1xuXG5cdFx0dGhpcy5zcmMgPSB0aGlzLl9wbGF5YmFja1F1YWxpdHk7XG5cdFx0dGhpcy5yYXRlID0gcmF0ZTtcblx0XHR0aGlzLmN1cnJlbnRUaW1lID0gdGltZTtcblxuXHRcdGlmIChzdG9wKSB7XG5cdFx0XHR0aGlzLnBhdXNlKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucGxheSgpO1xuXHRcdH1cblxuXHRcdHRoaXMudHJpZ2dlcigncXVhbGl0eWNoYW5nZScsIHRoaXMuX3BsYXliYWNrUXVhbGl0eSk7XG5cblx0fVxuXG5cdGdldCBwbGF5YmFja1F1YWxpdHkoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3BsYXliYWNrUXVhbGl0eTtcblx0fVxuXG5cdHNldCBzcmMgKHNyYykge1xuXHRcdGlmKHNyYyA9PSBudWxsKSByZXR1cm47XG5cdFx0aWYodGhpcy5zcmMgJiYgdGhpcy5zcmMudXJsID09PSBzcmMudXJsKSByZXR1cm47XG5cblx0XHR0aGlzLm1lZGlhLnNyYyA9IHNyYy51cmw7XG5cblx0XHR0aGlzLl9zb3VyY2UgPSBzcmM7XG5cdH1cblxuXHRnZXQgc3JjICgpIHtcblx0XHRyZXR1cm4gdGhpcy5fc291cmNlXG5cdH1cblxuXHRnZXQgdHJhY2sgKCkge1xuXHRcdHJldHVybiB0aGlzLl90cmFjaztcblx0fVxuXG5cdHNldCB0cmFjayAodmFsdWUpIHtcblx0XHRbLi4udGhpcy5tZWRpYS50ZXh0VHJhY2tzXS5mb3JFYWNoKGl0ZW0gPT4ge1xuXHRcdFx0aWYodmFsdWUgIT0gbnVsbCAmJiBpdGVtLmxhbmd1YWdlID09PSB2YWx1ZS5sYW5ndWFnZSkge1xuXHRcdFx0XHRpdGVtLm1vZGUgPSAnc2hvd2luZydcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGl0ZW0ubW9kZSA9ICdoaWRkZW4nO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdHRoaXMuX3RyYWNrID0gdmFsdWU7XG5cdFx0dGhpcy50cmlnZ2VyKCd0cmFja3NjaGFuZ2UnKTtcblx0fVxuXG5cdGdldCBwYXVzZWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWVkaWEucGF1c2VkO1xuXHR9XG5cblx0Z2V0IHZvbHVtZSAoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWVkaWEudm9sdW1lO1xuXHR9XG5cblx0c2V0IHZvbHVtZSAodmFsdWUpIHtcblx0XHRzdXBlci52b2x1bWUgPSB2YWx1ZTtcblx0XHRjb25zdCBwbGF5ZXIgPSB0aGlzLnBsYXllcjtcblx0XHRpZiAodmFsdWUgPiAxKSB7XG5cdFx0XHR0aGlzLm1lZGlhLnZvbHVtZSA9IDE7XG5cdFx0fSBlbHNlIGlmICh2YWx1ZSA8IHBsYXllci5vcHRpb25zLnZvbHVtZS5tdXRlbGltaXQpIHtcblx0XHRcdHRoaXMubWVkaWEudm9sdW1lID0gMDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5tZWRpYS52b2x1bWUgPSB2YWx1ZTtcblx0XHR9XG5cdFx0dGhpcy5tZWRpYS5tdXRlID0gKHZhbHVlIDwgcGxheWVyLm9wdGlvbnMudm9sdW1lLm11dGVsaW1pdCk7XG5cdH1cblxuXG5cdGdldCBidWZmZXJlZCAoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWVkaWEuYnVmZmVyZWQ7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybiB7VGltZVJhbmdlc31cblx0ICovXG5cdGdldCBzZWVrYWJsZSAoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWVkaWEuc2Vla2FibGU7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybiB7VGltZVJhbmdlc31cblx0ICovXG5cdGdldCBwbGF5ZWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWVkaWEucGxheWVkO1xuXHR9XG5cblx0Z2V0IGVuZGVkKCkge1xuXHRcdHJldHVybiB0aGlzLm1lZGlhLmVuZGVkO1xuXHR9XG5cblx0Z2V0IHBsYXllZFBlcmNlbnRhZ2UoKSB7XG5cdFx0bGV0IHJlc3VsdCA9IDA7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBsYXllZC5sZW5ndGg7IGkrKykge1xuXHRcdFx0cmVzdWx0ICs9ICh0aGlzLnBsYXllZC5lbmQoaSkgLSB0aGlzLnBsYXllZC5zdGFydChpKSlcblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0IC8gdGhpcy5kdXJhdGlvbiAqIDEwMFxuXHR9XG5cblx0Z2V0IGN1cnJlbnRTcmMoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWVkaWEuY3VycmVudFNyYztcblx0fVxuXG5cdGluaXQgKCkge1xuXHRcdHN1cGVyLmluaXQoKTtcblx0XHR0aGlzLmxvYWQoKTtcblx0XHRsZXQgZGZkID0gJC5EZWZlcnJlZCgpO1xuXHRcdHRoaXMuX2luaXRTdWJ0aXRsZXMoKTtcblx0XHR0aGlzLl9pbml0VmlkZW8oKVxuXHRcdFx0LmRvbmUoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLl9pbml0UmF0ZSgpO1xuXHRcdFx0XHR0aGlzLl9pbml0Vm9sdW1lKCk7XG5cdFx0XHRcdGRmZC5yZXNvbHZlKCk7XG5cdFx0XHR9KTtcblx0XHRyZXR1cm4gZGZkLnByb21pc2UoKTtcblx0fVxuXG5cdHN1cHBvcnRzRnVsbFNjcmVlbigpIHtcblx0XHRpZiAodHlwZW9mIHRoaXMubWVkaWEud2Via2l0RW50ZXJGdWxsU2NyZWVuID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRjb25zdCB1c2VyQWdlbnQgPSB3aW5kb3cubmF2aWdhdG9yICYmIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50IHx8ICcnO1xuXG5cdFx0XHQvLyBTZWVtcyB0byBiZSBicm9rZW4gaW4gQ2hyb21pdW0vQ2hyb21lICYmIFNhZmFyaSBpbiBMZW9wYXJkXG5cdFx0XHRpZiAoKC9BbmRyb2lkLykudGVzdCh1c2VyQWdlbnQpIHx8ICEoL0Nocm9tZXxNYWMgT1MgWCAxMC41LykudGVzdCh1c2VyQWdlbnQpKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRlbnRlckZ1bGxzY3JlZW4oKSB7XG5cdFx0Y29uc3QgdmlkZW8gPSB0aGlzLm1lZGlhO1xuXHRcdGlmICh2aWRlby5wYXVzZWQgJiYgdmlkZW8ubmV0d29ya1N0YXRlIDw9IHZpZGVvLkhBVkVfTUVUQURBVEEpIHtcblx0XHRcdC8vIGF0dGVtcHQgdG8gcHJpbWUgdGhlIHZpZGVvIGVsZW1lbnQgZm9yIHByb2dyYW1tYXRpYyBhY2Nlc3Ncblx0XHRcdC8vIHRoaXMgaXNuJ3QgbmVjZXNzYXJ5IG9uIHRoZSBkZXNrdG9wIGJ1dCBzaG91bGRuJ3QgaHVydFxuXHRcdFx0dGhpcy5wbGF5KCk7XG5cblx0XHRcdC8vIHBsYXlpbmcgYW5kIHBhdXNpbmcgc3luY2hyb25vdXNseSBkdXJpbmcgdGhlIHRyYW5zaXRpb24gdG8gZnVsbHNjcmVlblxuXHRcdFx0Ly8gY2FuIGdldCBpT1MgfjYuMSBkZXZpY2VzIGludG8gYSBwbGF5L3BhdXNlIGxvb3Bcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLnBhdXNlKCk7XG5cdFx0XHRcdHZpZGVvLndlYmtpdEVudGVyRnVsbFNjcmVlbigpO1xuXHRcdFx0fSwgMCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZpZGVvLndlYmtpdEVudGVyRnVsbFNjcmVlbigpO1xuXHRcdH1cblx0fVxuXG5cdGV4aXRGdWxsc2NyZWVuKCkge1xuXHRcdHRoaXMubWVkaWEud2Via2l0RXhpdEZ1bGxTY3JlZW4oKTtcblx0fVxuXG5cdHRvZ2dsZVBsYXkgKCkge1xuXHRcdGlmICghdGhpcy5tZWRpYS5wbGF5ZWQgfHwgdGhpcy5tZWRpYS5wYXVzZWQpIHtcblx0XHRcdHRoaXMucGxheSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnBhdXNlKCk7XG5cdFx0fVxuXHR9XG5cblx0cGxheSAoKSB7XG5cdFx0bGV0IGRmZCA9ICQuRGVmZXJyZWQoKTtcblx0XHRjb25zdCBwbGF5UHJvbWlzZSA9IHRoaXMubWVkaWEucGxheSgpO1xuXG5cdFx0aWYocGxheVByb21pc2UgIT0gbnVsbCkge1xuXHRcdFx0cGxheVByb21pc2UudGhlbihmdW5jdGlvbigpIHtcblx0XHRcdFx0ZGZkLnJlc29sdmUoKTtcblx0XHRcdH0pXG5cdFx0fSBlbHNlIHtcblx0XHRcdGRmZC5yZXNvbHZlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBkZmQucHJvbWlzZSgpO1xuXHR9XG5cblx0cGF1c2UgKCkge1xuXHRcdGxldCBkZmQgPSAkLkRlZmVycmVkKCk7XG5cdFx0Y29uc3QgcGF1c2VQcm9taXNlID0gdGhpcy5tZWRpYS5wYXVzZSgpO1xuXG5cdFx0aWYocGF1c2VQcm9taXNlICE9IG51bGwpIHtcblx0XHRcdHBhdXNlUHJvbWlzZS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRkZmQucmVzb2x2ZSgpO1xuXHRcdFx0fSlcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZGZkLnJlc29sdmUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIGRmZC5wcm9taXNlKCk7XG5cdH1cblxuXHRsb2FkKCkge1xuXHRcdHJldHVybiB0aGlzLm1lZGlhLmxvYWQoKVxuXHR9XG5cblx0X2luaXRTdWJ0aXRsZXMgKCkge1xuXHRcdGxldCBfc2VsZiA9IHRoaXM7XG5cdFx0dGhpcy5lbGVtZW50LmNoaWxkcmVuKCd0cmFja1traW5kPVwic3VidGl0bGVzXCJdJykuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0XHRjb25zdCBsYW5ndWFnZSA9ICQodGhpcykuYXR0cignc3JjbGFuZycpO1xuXHRcdFx0Y29uc3QgdGl0bGUgPSAkKHRoaXMpLmF0dHIoJ2xhYmVsJyk7XG5cdFx0XHRjb25zdCBzcmMgPSAkKHRoaXMpLmF0dHIoJ3NyYycpO1xuXHRcdFx0aWYgKHRpdGxlLmxlbmd0aCA+IDAgJiYgc3JjLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0X3NlbGYuc3VidGl0bGVzLnB1c2goe1xuXHRcdFx0XHRcdHRpdGxlIDogdGl0bGUsXG5cdFx0XHRcdFx0bmFtZSA6IGxhbmd1YWdlLFxuXHRcdFx0XHRcdGxhbmd1YWdlIDogbGFuZ3VhZ2Vcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRfaW5pdFZpZGVvICgpIHtcblx0XHRsZXQgZGZkID0gJC5EZWZlcnJlZCgpO1xuXHRcdGlmICh0aGlzLm1lZGlhLnJlYWR5U3RhdGUgPiBIVE1MTWVkaWFFbGVtZW50LkhBVkVfTk9USElORykge1xuXHRcdFx0ZGZkLnJlc29sdmUoKTtcblx0XHRcdHRoaXMuX3RleHRUcmFja3NIYWNrKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCQodGhpcy5tZWRpYSkub25lKCdsb2FkZWRtZXRhZGF0YScsIChlKSA9PiB7XG5cdFx0XHRcdGRmZC5yZXNvbHZlKClcblx0XHRcdFx0dGhpcy5fdGV4dFRyYWNrc0hhY2soKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRyZXR1cm4gZGZkLnByb21pc2UoKTtcblx0fVxuXG5cdF90ZXh0VHJhY2tzSGFjayAoKSB7XG5cblx0XHQvLyBUaGlzIGlzIGdlbmVyYWxseSBmb3IgRmlyZWZveCBvbmx5XG5cdFx0Ly8gYmVjYXVzZSBpdCBzb21laG93IHJlc2V0cyB0cmFjayBsaXN0XG5cdFx0Ly8gZm9yIHZpZGVvIGVsZW1lbnQgYWZ0ZXIgRE9NIG1hbmlwdWxhdGlvbi5cblxuXHRcdGlmICh0aGlzLm1lZGlhLnRleHRUcmFja3MubGVuZ3RoID09PSAwICYmIHRoaXMuc3VidGl0bGVzLmxlbmd0aCA+IDApIHtcblx0XHRcdHRoaXMuZWxlbWVudC5jaGlsZHJlbigndHJhY2tba2luZD1cInN1YnRpdGxlc1wiXScpLnJlbW92ZSgpO1xuXHRcdFx0Zm9yICh2YXIgaSBpbiB0aGlzLnN1YnRpdGxlcykge1xuXHRcdFx0XHRpZiAodGhpcy5zdWJ0aXRsZXMuaGFzT3duUHJvcGVydHkoaSkpIHtcblx0XHRcdFx0XHR0aGlzLmVsZW1lbnRcblx0XHRcdFx0XHRcdC5hcHBlbmQoJCgnPHRyYWNrLz4nKVxuXHRcdFx0XHRcdFx0XHQuYXR0cignbGFiZWwnLCB0aGlzLnN1YnRpdGxlc1sgaSBdLnRpdGxlKVxuXHRcdFx0XHRcdFx0XHQuYXR0cignc3JjJywgdGhpcy5zdWJ0aXRsZXNbIGkgXS5zcmMpXG5cdFx0XHRcdFx0XHRcdC5hdHRyKCdzcmNsYW5nJywgdGhpcy5zdWJ0aXRsZXNbIGkgXS5sYW5ndWFnZSlcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ2lkJywgdGhpcy5zdWJ0aXRsZXNbIGkgXS5sYW5ndWFnZSlcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ2tpbmQnLCAnc3VidGl0bGVzJykpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cbn1cbi8qKlxuICogTWluIHJhdGUgZm9yIGFuZHJvaWQgYW5kIGlvc1xuICovXG5IdG1sNS5NT0JJTEVfTUlOX1JBVEUgPSAwLjU7XG5cbi8qKlxuICogTWF4IHJhdGUgZm9yIGFuZHJvaWQgYW5kIGlvc1xuICovXG5IdG1sNS5NT0JJTEVfTUFYX1JBVEUgPSAyO1xuXG5IdG1sNS5TQUZBUklfTUlOX1JBVEUgPSAwLjU7XG5cbkh0bWw1LlNBRkFSSV9NQVhfUkFURSA9IDI7XG5cbkh0bWw1LlRFU1RfVklERU8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpO1xuXG4vKipcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKiAgICAgICAgIC0gVHJ1ZSBpZiB2b2x1bWUgY2FuIGJlIGNvbnRyb2xsZWRcbiAqICAgICAgICAgLSBGYWxzZSBvdGhlcndpc2VcbiAqL1xuSHRtbDUuY2FuQ29udHJvbFZvbHVtZSA9IGZ1bmN0aW9uKCkge1xuXHQvLyBJRSB3aWxsIGVycm9yIGlmIFdpbmRvd3MgTWVkaWEgUGxheWVyIG5vdCBpbnN0YWxsZWQgIzMzMTVcblx0dHJ5IHtcblx0XHRjb25zdCB2b2x1bWUgPSBIdG1sNS5URVNUX1ZJREVPLnZvbHVtZTtcblxuXHRcdEh0bWw1LlRFU1RfVklERU8udm9sdW1lID0gKHZvbHVtZSAvIDIpICsgMC4xO1xuXHRcdHJldHVybiB2b2x1bWUgIT09IEh0bWw1LlRFU1RfVklERU8udm9sdW1lO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xuXG5IdG1sNS5wcm90b3R5cGUuZmVhdHVyZUNvbnRyb2xWb2x1bWUgPSBIdG1sNS5jYW5Db250cm9sVm9sdW1lKCk7XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnSHRtbDUnLCBIdG1sNSk7XG5leHBvcnQgZGVmYXVsdCBIdG1sNTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9lbnRpdHkvSHRtbDUuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudHMvQ29tcG9uZW50JztcbmltcG9ydCBDb29raWUgZnJvbSAnLi4vdXRpbHMvY29va2llJztcbmltcG9ydCBNZWRpYUVycm9yIGZyb20gJy4uL01lZGlhRXJyb3InO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuY2xhc3MgRW50aXR5IGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblx0XHR0aGlzLl90cmlnZ2VyU3RhY2sgPSBbXTtcblx0XHR0aGlzLl9zdG9wTGlzdGVuID0gZmFsc2U7XG5cblx0XHRpZiAodGhpcy5wbGF5ZXIub3B0aW9ucy5zcmMgPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5wbGF5ZXIuZXJyb3IgPSBuZXcgTWVkaWFFcnJvcign0JLQuNC00LXQvtGE0LDQudC7INC90LUg0L3QsNC50LTQtdC9LicpO1xuXHRcdH1cblxuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0dHJpZ2dlciguLi5hcmdzKSB7XG5cdFx0aWYoIXRoaXMuX3N0b3BMaXN0ZW4pIHtcblx0XHRcdHRoaXMuX3RyaWdnZXJTdGFjay5wdXNoKGFyZ3MpO1xuXHRcdH1cblx0XHRzdXBlci50cmlnZ2VyKC4uLmFyZ3MpO1xuXHR9XG5cblx0aW5pdCgpIHtcblx0XHR0aGlzLl9zdG9wTGlzdGVuID0gdHJ1ZTtcblx0XHR0aGlzLl90cmlnZ2VyU3RhY2suZm9yRWFjaChhcmdzID0+IHtcblx0XHRcdHRoaXMudHJpZ2dlciguLi5hcmdzKTtcblx0XHR9KTtcblx0fVxuXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudCA9ICQoJzxkaXYgLz4nKTtcblx0fVxuXG5cdHNldCBwb3N0ZXIodXJsKSB7XG5cdFx0dGhpcy5fcG9zdGVyID0gdXJsO1xuXHRcdHRoaXMudHJpZ2dlcigncG9zdGVyY2hhbmdlJywgeyB1cmwgfSk7XG5cdH1cblxuXG5cdGdldCBwb3N0ZXIoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3Bvc3Rlcjtcblx0fVxuXG5cdGdldCBjdXJyZW50VGltZSgpIHtcblx0XHRyZXR1cm5cblx0fVxuXG5cdHNldCBjdXJyZW50VGltZSh2YWx1ZSkge1xuXG5cdH1cblxuXHRnZXQgZHVyYXRpb24oKSB7XG5cdFx0cmV0dXJuXG5cdH1cblxuXHRzZXQgbXV0ZWQodmFsdWUpIHtcblxuXHR9XG5cblx0Z2V0IG11dGVkKCkge1xuXG5cdH1cblxuXHRnZXQgaGVpZ2h0KCkge1xuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQuaW5uZXJIZWlnaHQoKVxuXHR9XG5cblx0Z2V0IHdpZHRoKCkge1xuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQud2lkdGgoKVxuXHR9XG5cblx0c2V0IHJhdGVNYXgodmFsdWUpIHtcblx0XHR0aGlzLl9yYXRlTWF4ID0gdmFsdWU7XG5cdH1cblxuXHRzZXQgcmF0ZU1pbih2YWx1ZSkge1xuXHRcdHRoaXMuX3JhdGVNaW4gPSB2YWx1ZTtcblx0fVxuXG5cdGdldCByYXRlTWF4KCkge1xuXHRcdHJldHVybiB0aGlzLl9yYXRlTWF4IHx8IHRoaXMucGxheWVyLm9wdGlvbnMucmF0ZS5tYXg7XG5cblx0fVxuXG5cdGdldCByYXRlTWluKCkge1xuXHRcdHJldHVybiB0aGlzLl9yYXRlTWluIHx8IHRoaXMucGxheWVyLm9wdGlvbnMucmF0ZS5taW47XG5cdH1cblxuXHRnZXQgcmF0ZSgpIHtcblx0fVxuXG5cdHNldCByYXRlKHZhbHVlKSB7XG5cdFx0aWYodmFsdWUgPiB0aGlzLnJhdGVNYXggfHwgdmFsdWUgPCB0aGlzLnJhdGVNaW4pIHJldHVybjtcblx0XHRDb29raWUuc2V0KCdyYXRlJywgdmFsdWUpO1xuXHR9XG5cblx0aW5jcmVhc2VSYXRlKCkge1xuXHRcdHRoaXMucmF0ZSArPSB0aGlzLnBsYXllci5vcHRpb25zLnJhdGUuc3RlcDtcblx0fVxuXG5cdGRlY3JlYXNlUmF0ZSgpIHtcblx0XHR0aGlzLnJhdGUgLT0gdGhpcy5wbGF5ZXIub3B0aW9ucy5yYXRlLnN0ZXA7XG5cdH1cblxuXHRzZXQgcGxheWJhY2tRdWFsaXR5KG5hbWUpIHtcblx0XHRjb25zdCBsZXZlbHMgPSB0aGlzLmdldEF2YWlsYWJsZVF1YWxpdHlMZXZlbHMoKTtcblx0XHRpZighbGV2ZWxzLnNvbWUob2JqID0+IG5hbWUgaW4gb2JqKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0fVxuXG5cdGdldCBwbGF5YmFja1F1YWxpdHkoKSB7XG5cblx0fVxuXG5cdGdldCBwYXVzZWQoKSB7XG5cblx0fVxuXG5cdGdldCBwbGF5ZWQoKSB7XG5cblx0fVxuXG5cdGdldCBkZWZhdWx0UmF0ZSgpIHtcblx0XHRyZXR1cm4gQ29va2llLmdldCgncmF0ZScpIHx8IHRoaXMucGxheWVyLm9wdGlvbnMucmF0ZS5kZWZhdWx0XG5cdH1cblxuXHRnZXQgZGVmYXVsdFZvbHVtZSAoKSB7XG5cdFx0cmV0dXJuIENvb2tpZS5nZXQoJ3ZvbHVtZScpIHx8IHRoaXMucGxheWVyLm9wdGlvbnMudm9sdW1lLmRlZmF1bHQ7XG5cdH1cblxuXHRzZXQgdm9sdW1lKHZhbHVlKSB7XG5cdFx0Y29uc3QgcGxheWVyID0gdGhpcy5wbGF5ZXI7XG5cdFx0aWYodmFsdWUgPCAxICYmIHZhbHVlID4gcGxheWVyLm9wdGlvbnMudm9sdW1lLm11dGVsaW1pdCkge1xuXHRcdFx0Q29va2llLnNldCgndm9sdW1lJywgdmFsdWUpO1xuXHRcdH1cblx0fVxuXG5cdHNldCBzcmMgKHZhbHVlKSB7XG5cblx0fVxuXG5cdGdldCBzcmMoKSB7XG5cblx0fVxuXG5cdHN1cHBvcnRzRnVsbFNjcmVlbigpIHtcblxuXHR9XG5cblx0cGxheSgpIHtcblxuXHR9XG5cblx0cGF1c2UgKCkge1xuXG5cdH1cblxuXHRsb2FkKCkge1xuXHR9XG5cblx0dG9nZ2xlUGxheSAoKSB7XG5cdFx0aWYgKHRoaXMucGF1c2VkKSB7XG5cdFx0XHR0aGlzLnBsYXkoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5wYXVzZSgpO1xuXHRcdH1cblx0fVxuXG5cdF9pbml0UmF0ZSAoKSB7XG5cdFx0dGhpcy5yYXRlID0gdGhpcy5kZWZhdWx0UmF0ZTtcblx0fVxuXG5cdF9pbml0Vm9sdW1lICgpIHtcblx0XHR0aGlzLnZvbHVtZSA9IHRoaXMuZGVmYXVsdFZvbHVtZTtcblx0fVxuXG59XG5FbnRpdHkucHJvdG90eXBlLmZlYXR1cmVDb250cm9sVm9sdW1lID0gdHJ1ZTtcblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdFbnRpdHknLCBFbnRpdHkpO1xuXG5leHBvcnQgZGVmYXVsdCBFbnRpdHk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvZW50aXR5L0VudGl0eS5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGRlZmluZSA9IHJlcXVpcmUoJ2RlZmluZS1wcm9wZXJ0aWVzJyk7XG52YXIgRVMgPSByZXF1aXJlKCdlcy1hYnN0cmFjdC9lczYnKTtcblxudmFyIGltcGxlbWVudGF0aW9uID0gcmVxdWlyZSgnLi9pbXBsZW1lbnRhdGlvbicpO1xudmFyIGdldFBvbHlmaWxsID0gcmVxdWlyZSgnLi9wb2x5ZmlsbCcpO1xudmFyIHNoaW0gPSByZXF1aXJlKCcuL3NoaW0nKTtcblxudmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xuXG52YXIgcG9seWZpbGwgPSBnZXRQb2x5ZmlsbCgpO1xuXG52YXIgYm91bmRGaW5kU2hpbSA9IGZ1bmN0aW9uIGZpbmQoYXJyYXksIHByZWRpY2F0ZSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG5cdEVTLlJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJyYXkpO1xuXHR2YXIgYXJncyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcblx0cmV0dXJuIHBvbHlmaWxsLmFwcGx5KGFycmF5LCBhcmdzKTtcbn07XG5cbmRlZmluZShib3VuZEZpbmRTaGltLCB7XG5cdGdldFBvbHlmaWxsOiBnZXRQb2x5ZmlsbCxcblx0aW1wbGVtZW50YXRpb246IGltcGxlbWVudGF0aW9uLFxuXHRzaGltOiBzaGltXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBib3VuZEZpbmRTaGltO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2FycmF5LnByb3RvdHlwZS5maW5kL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxudmFyIGtleXMgPSByZXF1aXJlKCdvYmplY3Qta2V5cycpO1xudmFyIGhhc1N5bWJvbHMgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBTeW1ib2woJ2ZvbycpID09PSAnc3ltYm9sJztcblxudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbnZhciBjb25jYXQgPSBBcnJheS5wcm90b3R5cGUuY29uY2F0O1xudmFyIG9yaWdEZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxudmFyIGlzRnVuY3Rpb24gPSBmdW5jdGlvbiAoZm4pIHtcblx0cmV0dXJuIHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJyAmJiB0b1N0ci5jYWxsKGZuKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbn07XG5cbnZhciBhcmVQcm9wZXJ0eURlc2NyaXB0b3JzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgb2JqID0ge307XG5cdHRyeSB7XG5cdFx0b3JpZ0RlZmluZVByb3BlcnR5KG9iaiwgJ3gnLCB7IGVudW1lcmFibGU6IGZhbHNlLCB2YWx1ZTogb2JqIH0pO1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFycywgbm8tcmVzdHJpY3RlZC1zeW50YXhcblx0XHRmb3IgKHZhciBfIGluIG9iaikgeyAvLyBqc2NzOmlnbm9yZSBkaXNhbGxvd1VudXNlZFZhcmlhYmxlc1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRyZXR1cm4gb2JqLnggPT09IG9iajtcblx0fSBjYXRjaCAoZSkgeyAvKiB0aGlzIGlzIElFIDguICovXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xudmFyIHN1cHBvcnRzRGVzY3JpcHRvcnMgPSBvcmlnRGVmaW5lUHJvcGVydHkgJiYgYXJlUHJvcGVydHlEZXNjcmlwdG9yc1N1cHBvcnRlZCgpO1xuXG52YXIgZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lLCB2YWx1ZSwgcHJlZGljYXRlKSB7XG5cdGlmIChuYW1lIGluIG9iamVjdCAmJiAoIWlzRnVuY3Rpb24ocHJlZGljYXRlKSB8fCAhcHJlZGljYXRlKCkpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGlmIChzdXBwb3J0c0Rlc2NyaXB0b3JzKSB7XG5cdFx0b3JpZ0RlZmluZVByb3BlcnR5KG9iamVjdCwgbmFtZSwge1xuXHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdFx0ZW51bWVyYWJsZTogZmFsc2UsXG5cdFx0XHR2YWx1ZTogdmFsdWUsXG5cdFx0XHR3cml0YWJsZTogdHJ1ZVxuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdG9iamVjdFtuYW1lXSA9IHZhbHVlO1xuXHR9XG59O1xuXG52YXIgZGVmaW5lUHJvcGVydGllcyA9IGZ1bmN0aW9uIChvYmplY3QsIG1hcCkge1xuXHR2YXIgcHJlZGljYXRlcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyID8gYXJndW1lbnRzWzJdIDoge307XG5cdHZhciBwcm9wcyA9IGtleXMobWFwKTtcblx0aWYgKGhhc1N5bWJvbHMpIHtcblx0XHRwcm9wcyA9IGNvbmNhdC5jYWxsKHByb3BzLCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG1hcCkpO1xuXHR9XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpICs9IDEpIHtcblx0XHRkZWZpbmVQcm9wZXJ0eShvYmplY3QsIHByb3BzW2ldLCBtYXBbcHJvcHNbaV1dLCBwcmVkaWNhdGVzW3Byb3BzW2ldXSk7XG5cdH1cbn07XG5cbmRlZmluZVByb3BlcnRpZXMuc3VwcG9ydHNEZXNjcmlwdG9ycyA9ICEhc3VwcG9ydHNEZXNjcmlwdG9ycztcblxubW9kdWxlLmV4cG9ydHMgPSBkZWZpbmVQcm9wZXJ0aWVzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2RlZmluZS1wcm9wZXJ0aWVzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxudmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xudmFyIGlzQXJncyA9IHJlcXVpcmUoJy4vaXNBcmd1bWVudHMnKTtcblxudmFyIG9yaWdLZXlzID0gT2JqZWN0LmtleXM7XG52YXIga2V5c1NoaW0gPSBvcmlnS2V5cyA/IGZ1bmN0aW9uIGtleXMobykgeyByZXR1cm4gb3JpZ0tleXMobyk7IH0gOiByZXF1aXJlKCcuL2ltcGxlbWVudGF0aW9uJyk7XG5cbnZhciBvcmlnaW5hbEtleXMgPSBPYmplY3Qua2V5cztcblxua2V5c1NoaW0uc2hpbSA9IGZ1bmN0aW9uIHNoaW1PYmplY3RLZXlzKCkge1xuXHRpZiAoT2JqZWN0LmtleXMpIHtcblx0XHR2YXIga2V5c1dvcmtzV2l0aEFyZ3VtZW50cyA9IChmdW5jdGlvbiAoKSB7XG5cdFx0XHQvLyBTYWZhcmkgNS4wIGJ1Z1xuXHRcdFx0dmFyIGFyZ3MgPSBPYmplY3Qua2V5cyhhcmd1bWVudHMpO1xuXHRcdFx0cmV0dXJuIGFyZ3MgJiYgYXJncy5sZW5ndGggPT09IGFyZ3VtZW50cy5sZW5ndGg7XG5cdFx0fSgxLCAyKSk7XG5cdFx0aWYgKCFrZXlzV29ya3NXaXRoQXJndW1lbnRzKSB7XG5cdFx0XHRPYmplY3Qua2V5cyA9IGZ1bmN0aW9uIGtleXMob2JqZWN0KSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZnVuYy1uYW1lLW1hdGNoaW5nXG5cdFx0XHRcdGlmIChpc0FyZ3Mob2JqZWN0KSkge1xuXHRcdFx0XHRcdHJldHVybiBvcmlnaW5hbEtleXMoc2xpY2UuY2FsbChvYmplY3QpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gb3JpZ2luYWxLZXlzKG9iamVjdCk7XG5cdFx0XHR9O1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRPYmplY3Qua2V5cyA9IGtleXNTaGltO1xuXHR9XG5cdHJldHVybiBPYmplY3Qua2V5cyB8fCBrZXlzU2hpbTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ga2V5c1NoaW07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vb2JqZWN0LWtleXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQXJndW1lbnRzKHZhbHVlKSB7XG5cdHZhciBzdHIgPSB0b1N0ci5jYWxsKHZhbHVlKTtcblx0dmFyIGlzQXJncyA9IHN0ciA9PT0gJ1tvYmplY3QgQXJndW1lbnRzXSc7XG5cdGlmICghaXNBcmdzKSB7XG5cdFx0aXNBcmdzID0gc3RyICE9PSAnW29iamVjdCBBcnJheV0nICYmXG5cdFx0XHR2YWx1ZSAhPT0gbnVsbCAmJlxuXHRcdFx0dHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJlxuXHRcdFx0dHlwZW9mIHZhbHVlLmxlbmd0aCA9PT0gJ251bWJlcicgJiZcblx0XHRcdHZhbHVlLmxlbmd0aCA+PSAwICYmXG5cdFx0XHR0b1N0ci5jYWxsKHZhbHVlLmNhbGxlZSkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG5cdH1cblx0cmV0dXJuIGlzQXJncztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vb2JqZWN0LWtleXMvaXNBcmd1bWVudHMuanNcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIga2V5c1NoaW07XG5pZiAoIU9iamVjdC5rZXlzKSB7XG5cdC8vIG1vZGlmaWVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2VzLXNoaW1zL2VzNS1zaGltXG5cdHZhciBoYXMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXHR2YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXHR2YXIgaXNBcmdzID0gcmVxdWlyZSgnLi9pc0FyZ3VtZW50cycpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGdsb2JhbC1yZXF1aXJlXG5cdHZhciBpc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXHR2YXIgaGFzRG9udEVudW1CdWcgPSAhaXNFbnVtZXJhYmxlLmNhbGwoeyB0b1N0cmluZzogbnVsbCB9LCAndG9TdHJpbmcnKTtcblx0dmFyIGhhc1Byb3RvRW51bUJ1ZyA9IGlzRW51bWVyYWJsZS5jYWxsKGZ1bmN0aW9uICgpIHt9LCAncHJvdG90eXBlJyk7XG5cdHZhciBkb250RW51bXMgPSBbXG5cdFx0J3RvU3RyaW5nJyxcblx0XHQndG9Mb2NhbGVTdHJpbmcnLFxuXHRcdCd2YWx1ZU9mJyxcblx0XHQnaGFzT3duUHJvcGVydHknLFxuXHRcdCdpc1Byb3RvdHlwZU9mJyxcblx0XHQncHJvcGVydHlJc0VudW1lcmFibGUnLFxuXHRcdCdjb25zdHJ1Y3Rvcidcblx0XTtcblx0dmFyIGVxdWFsc0NvbnN0cnVjdG9yUHJvdG90eXBlID0gZnVuY3Rpb24gKG8pIHtcblx0XHR2YXIgY3RvciA9IG8uY29uc3RydWN0b3I7XG5cdFx0cmV0dXJuIGN0b3IgJiYgY3Rvci5wcm90b3R5cGUgPT09IG87XG5cdH07XG5cdHZhciBleGNsdWRlZEtleXMgPSB7XG5cdFx0JGFwcGxpY2F0aW9uQ2FjaGU6IHRydWUsXG5cdFx0JGNvbnNvbGU6IHRydWUsXG5cdFx0JGV4dGVybmFsOiB0cnVlLFxuXHRcdCRmcmFtZTogdHJ1ZSxcblx0XHQkZnJhbWVFbGVtZW50OiB0cnVlLFxuXHRcdCRmcmFtZXM6IHRydWUsXG5cdFx0JGlubmVySGVpZ2h0OiB0cnVlLFxuXHRcdCRpbm5lcldpZHRoOiB0cnVlLFxuXHRcdCRvbm1vemZ1bGxzY3JlZW5jaGFuZ2U6IHRydWUsXG5cdFx0JG9ubW96ZnVsbHNjcmVlbmVycm9yOiB0cnVlLFxuXHRcdCRvdXRlckhlaWdodDogdHJ1ZSxcblx0XHQkb3V0ZXJXaWR0aDogdHJ1ZSxcblx0XHQkcGFnZVhPZmZzZXQ6IHRydWUsXG5cdFx0JHBhZ2VZT2Zmc2V0OiB0cnVlLFxuXHRcdCRwYXJlbnQ6IHRydWUsXG5cdFx0JHNjcm9sbExlZnQ6IHRydWUsXG5cdFx0JHNjcm9sbFRvcDogdHJ1ZSxcblx0XHQkc2Nyb2xsWDogdHJ1ZSxcblx0XHQkc2Nyb2xsWTogdHJ1ZSxcblx0XHQkc2VsZjogdHJ1ZSxcblx0XHQkd2Via2l0SW5kZXhlZERCOiB0cnVlLFxuXHRcdCR3ZWJraXRTdG9yYWdlSW5mbzogdHJ1ZSxcblx0XHQkd2luZG93OiB0cnVlXG5cdH07XG5cdHZhciBoYXNBdXRvbWF0aW9uRXF1YWxpdHlCdWcgPSAoZnVuY3Rpb24gKCkge1xuXHRcdC8qIGdsb2JhbCB3aW5kb3cgKi9cblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdFx0Zm9yICh2YXIgayBpbiB3aW5kb3cpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGlmICghZXhjbHVkZWRLZXlzWyckJyArIGtdICYmIGhhcy5jYWxsKHdpbmRvdywgaykgJiYgd2luZG93W2tdICE9PSBudWxsICYmIHR5cGVvZiB3aW5kb3dba10gPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdGVxdWFsc0NvbnN0cnVjdG9yUHJvdG90eXBlKHdpbmRvd1trXSk7XG5cdFx0XHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0oKSk7XG5cdHZhciBlcXVhbHNDb25zdHJ1Y3RvclByb3RvdHlwZUlmTm90QnVnZ3kgPSBmdW5jdGlvbiAobykge1xuXHRcdC8qIGdsb2JhbCB3aW5kb3cgKi9cblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIWhhc0F1dG9tYXRpb25FcXVhbGl0eUJ1Zykge1xuXHRcdFx0cmV0dXJuIGVxdWFsc0NvbnN0cnVjdG9yUHJvdG90eXBlKG8pO1xuXHRcdH1cblx0XHR0cnkge1xuXHRcdFx0cmV0dXJuIGVxdWFsc0NvbnN0cnVjdG9yUHJvdG90eXBlKG8pO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH07XG5cblx0a2V5c1NoaW0gPSBmdW5jdGlvbiBrZXlzKG9iamVjdCkge1xuXHRcdHZhciBpc09iamVjdCA9IG9iamVjdCAhPT0gbnVsbCAmJiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0Jztcblx0XHR2YXIgaXNGdW5jdGlvbiA9IHRvU3RyLmNhbGwob2JqZWN0KSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcblx0XHR2YXIgaXNBcmd1bWVudHMgPSBpc0FyZ3Mob2JqZWN0KTtcblx0XHR2YXIgaXNTdHJpbmcgPSBpc09iamVjdCAmJiB0b1N0ci5jYWxsKG9iamVjdCkgPT09ICdbb2JqZWN0IFN0cmluZ10nO1xuXHRcdHZhciB0aGVLZXlzID0gW107XG5cblx0XHRpZiAoIWlzT2JqZWN0ICYmICFpc0Z1bmN0aW9uICYmICFpc0FyZ3VtZW50cykge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmtleXMgY2FsbGVkIG9uIGEgbm9uLW9iamVjdCcpO1xuXHRcdH1cblxuXHRcdHZhciBza2lwUHJvdG8gPSBoYXNQcm90b0VudW1CdWcgJiYgaXNGdW5jdGlvbjtcblx0XHRpZiAoaXNTdHJpbmcgJiYgb2JqZWN0Lmxlbmd0aCA+IDAgJiYgIWhhcy5jYWxsKG9iamVjdCwgMCkpIHtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgb2JqZWN0Lmxlbmd0aDsgKytpKSB7XG5cdFx0XHRcdHRoZUtleXMucHVzaChTdHJpbmcoaSkpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChpc0FyZ3VtZW50cyAmJiBvYmplY3QubGVuZ3RoID4gMCkge1xuXHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBvYmplY3QubGVuZ3RoOyArK2opIHtcblx0XHRcdFx0dGhlS2V5cy5wdXNoKFN0cmluZyhqKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGZvciAodmFyIG5hbWUgaW4gb2JqZWN0KSB7XG5cdFx0XHRcdGlmICghKHNraXBQcm90byAmJiBuYW1lID09PSAncHJvdG90eXBlJykgJiYgaGFzLmNhbGwob2JqZWN0LCBuYW1lKSkge1xuXHRcdFx0XHRcdHRoZUtleXMucHVzaChTdHJpbmcobmFtZSkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGhhc0RvbnRFbnVtQnVnKSB7XG5cdFx0XHR2YXIgc2tpcENvbnN0cnVjdG9yID0gZXF1YWxzQ29uc3RydWN0b3JQcm90b3R5cGVJZk5vdEJ1Z2d5KG9iamVjdCk7XG5cblx0XHRcdGZvciAodmFyIGsgPSAwOyBrIDwgZG9udEVudW1zLmxlbmd0aDsgKytrKSB7XG5cdFx0XHRcdGlmICghKHNraXBDb25zdHJ1Y3RvciAmJiBkb250RW51bXNba10gPT09ICdjb25zdHJ1Y3RvcicpICYmIGhhcy5jYWxsKG9iamVjdCwgZG9udEVudW1zW2tdKSkge1xuXHRcdFx0XHRcdHRoZUtleXMucHVzaChkb250RW51bXNba10pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiB0aGVLZXlzO1xuXHR9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBrZXlzU2hpbTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9vYmplY3Qta2V5cy9pbXBsZW1lbnRhdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9lczIwMTUnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy1hYnN0cmFjdC9lczYuanNcbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaGFzID0gcmVxdWlyZSgnaGFzJyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCdlcy10by1wcmltaXRpdmUvZXM2Jyk7XG52YXIga2V5cyA9IHJlcXVpcmUoJ29iamVjdC1rZXlzJyk7XG5cbnZhciBHZXRJbnRyaW5zaWMgPSByZXF1aXJlKCcuL0dldEludHJpbnNpYycpO1xuXG52YXIgJFR5cGVFcnJvciA9IEdldEludHJpbnNpYygnJVR5cGVFcnJvciUnKTtcbnZhciAkU3ludGF4RXJyb3IgPSBHZXRJbnRyaW5zaWMoJyVTeW50YXhFcnJvciUnKTtcbnZhciAkQXJyYXkgPSBHZXRJbnRyaW5zaWMoJyVBcnJheSUnKTtcbnZhciAkU3RyaW5nID0gR2V0SW50cmluc2ljKCclU3RyaW5nJScpO1xudmFyICRPYmplY3QgPSBHZXRJbnRyaW5zaWMoJyVPYmplY3QlJyk7XG52YXIgJE51bWJlciA9IEdldEludHJpbnNpYygnJU51bWJlciUnKTtcbnZhciAkU3ltYm9sID0gR2V0SW50cmluc2ljKCclU3ltYm9sJScsIHRydWUpO1xudmFyICRSZWdFeHAgPSBHZXRJbnRyaW5zaWMoJyVSZWdFeHAlJyk7XG5cbnZhciBoYXNTeW1ib2xzID0gISEkU3ltYm9sO1xuXG52YXIgYXNzZXJ0UmVjb3JkID0gcmVxdWlyZSgnLi9oZWxwZXJzL2Fzc2VydFJlY29yZCcpO1xudmFyICRpc05hTiA9IHJlcXVpcmUoJy4vaGVscGVycy9pc05hTicpO1xudmFyICRpc0Zpbml0ZSA9IHJlcXVpcmUoJy4vaGVscGVycy9pc0Zpbml0ZScpO1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSAkTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIgfHwgTWF0aC5wb3coMiwgNTMpIC0gMTtcblxudmFyIGFzc2lnbiA9IHJlcXVpcmUoJy4vaGVscGVycy9hc3NpZ24nKTtcbnZhciBzaWduID0gcmVxdWlyZSgnLi9oZWxwZXJzL3NpZ24nKTtcbnZhciBtb2QgPSByZXF1aXJlKCcuL2hlbHBlcnMvbW9kJyk7XG52YXIgaXNQcmltaXRpdmUgPSByZXF1aXJlKCcuL2hlbHBlcnMvaXNQcmltaXRpdmUnKTtcbnZhciBwYXJzZUludGVnZXIgPSBwYXJzZUludDtcbnZhciBiaW5kID0gcmVxdWlyZSgnZnVuY3Rpb24tYmluZCcpO1xudmFyIGFycmF5U2xpY2UgPSBiaW5kLmNhbGwoRnVuY3Rpb24uY2FsbCwgJEFycmF5LnByb3RvdHlwZS5zbGljZSk7XG52YXIgc3RyU2xpY2UgPSBiaW5kLmNhbGwoRnVuY3Rpb24uY2FsbCwgJFN0cmluZy5wcm90b3R5cGUuc2xpY2UpO1xudmFyIGlzQmluYXJ5ID0gYmluZC5jYWxsKEZ1bmN0aW9uLmNhbGwsICRSZWdFeHAucHJvdG90eXBlLnRlc3QsIC9eMGJbMDFdKyQvaSk7XG52YXIgaXNPY3RhbCA9IGJpbmQuY2FsbChGdW5jdGlvbi5jYWxsLCAkUmVnRXhwLnByb3RvdHlwZS50ZXN0LCAvXjBvWzAtN10rJC9pKTtcbnZhciByZWdleEV4ZWMgPSBiaW5kLmNhbGwoRnVuY3Rpb24uY2FsbCwgJFJlZ0V4cC5wcm90b3R5cGUuZXhlYyk7XG52YXIgbm9uV1MgPSBbJ1xcdTAwODUnLCAnXFx1MjAwYicsICdcXHVmZmZlJ10uam9pbignJyk7XG52YXIgbm9uV1NyZWdleCA9IG5ldyAkUmVnRXhwKCdbJyArIG5vbldTICsgJ10nLCAnZycpO1xudmFyIGhhc05vbldTID0gYmluZC5jYWxsKEZ1bmN0aW9uLmNhbGwsICRSZWdFeHAucHJvdG90eXBlLnRlc3QsIG5vbldTcmVnZXgpO1xudmFyIGludmFsaWRIZXhMaXRlcmFsID0gL15bLStdMHhbMC05YS1mXSskL2k7XG52YXIgaXNJbnZhbGlkSGV4TGl0ZXJhbCA9IGJpbmQuY2FsbChGdW5jdGlvbi5jYWxsLCAkUmVnRXhwLnByb3RvdHlwZS50ZXN0LCBpbnZhbGlkSGV4TGl0ZXJhbCk7XG52YXIgJGNoYXJDb2RlQXQgPSBiaW5kLmNhbGwoRnVuY3Rpb24uY2FsbCwgJFN0cmluZy5wcm90b3R5cGUuY2hhckNvZGVBdCk7XG5cbnZhciB0b1N0ciA9IGJpbmQuY2FsbChGdW5jdGlvbi5jYWxsLCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKTtcblxudmFyICROdW1iZXJWYWx1ZU9mID0gYmluZC5jYWxsKEZ1bmN0aW9uLmNhbGwsIEdldEludHJpbnNpYygnJU51bWJlclByb3RvdHlwZSUnKS52YWx1ZU9mKTtcbnZhciAkQm9vbGVhblZhbHVlT2YgPSBiaW5kLmNhbGwoRnVuY3Rpb24uY2FsbCwgR2V0SW50cmluc2ljKCclQm9vbGVhblByb3RvdHlwZSUnKS52YWx1ZU9mKTtcbnZhciAkU3RyaW5nVmFsdWVPZiA9IGJpbmQuY2FsbChGdW5jdGlvbi5jYWxsLCBHZXRJbnRyaW5zaWMoJyVTdHJpbmdQcm90b3R5cGUlJykudmFsdWVPZik7XG52YXIgJERhdGVWYWx1ZU9mID0gYmluZC5jYWxsKEZ1bmN0aW9uLmNhbGwsIEdldEludHJpbnNpYygnJURhdGVQcm90b3R5cGUlJykudmFsdWVPZik7XG5cbnZhciAkZmxvb3IgPSBNYXRoLmZsb29yO1xudmFyICRhYnMgPSBNYXRoLmFicztcblxudmFyICRPYmplY3RDcmVhdGUgPSBPYmplY3QuY3JlYXRlO1xudmFyICRnT1BEID0gJE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbnZhciAkaXNFeHRlbnNpYmxlID0gJE9iamVjdC5pc0V4dGVuc2libGU7XG5cbnZhciAkZGVmaW5lUHJvcGVydHkgPSAkT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG4vLyB3aGl0ZXNwYWNlIGZyb206IGh0dHA6Ly9lczUuZ2l0aHViLmlvLyN4MTUuNS40LjIwXG4vLyBpbXBsZW1lbnRhdGlvbiBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9lcy1zaGltcy9lczUtc2hpbS9ibG9iL3YzLjQuMC9lczUtc2hpbS5qcyNMMTMwNC1MMTMyNFxudmFyIHdzID0gW1xuXHQnXFx4MDlcXHgwQVxceDBCXFx4MENcXHgwRFxceDIwXFx4QTBcXHUxNjgwXFx1MTgwRVxcdTIwMDBcXHUyMDAxXFx1MjAwMlxcdTIwMDMnLFxuXHQnXFx1MjAwNFxcdTIwMDVcXHUyMDA2XFx1MjAwN1xcdTIwMDhcXHUyMDA5XFx1MjAwQVxcdTIwMkZcXHUyMDVGXFx1MzAwMFxcdTIwMjgnLFxuXHQnXFx1MjAyOVxcdUZFRkYnXG5dLmpvaW4oJycpO1xudmFyIHRyaW1SZWdleCA9IG5ldyBSZWdFeHAoJyheWycgKyB3cyArICddKyl8KFsnICsgd3MgKyAnXSskKScsICdnJyk7XG52YXIgcmVwbGFjZSA9IGJpbmQuY2FsbChGdW5jdGlvbi5jYWxsLCAkU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlKTtcbnZhciB0cmltID0gZnVuY3Rpb24gKHZhbHVlKSB7XG5cdHJldHVybiByZXBsYWNlKHZhbHVlLCB0cmltUmVnZXgsICcnKTtcbn07XG5cbnZhciBFUzUgPSByZXF1aXJlKCcuL2VzNScpO1xuXG52YXIgaGFzUmVnRXhwTWF0Y2hlciA9IHJlcXVpcmUoJ2lzLXJlZ2V4Jyk7XG5cbi8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1hYnN0cmFjdC1vcGVyYXRpb25zXG52YXIgRVM2ID0gYXNzaWduKGFzc2lnbih7fSwgRVM1KSwge1xuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1jYWxsLWYtdi1hcmdzXG5cdENhbGw6IGZ1bmN0aW9uIENhbGwoRiwgVikge1xuXHRcdHZhciBhcmdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgPyBhcmd1bWVudHNbMl0gOiBbXTtcblx0XHRpZiAoIXRoaXMuSXNDYWxsYWJsZShGKSkge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoRiArICcgaXMgbm90IGEgZnVuY3Rpb24nKTtcblx0XHR9XG5cdFx0cmV0dXJuIEYuYXBwbHkoViwgYXJncyk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvcHJpbWl0aXZlXG5cdFRvUHJpbWl0aXZlOiB0b1ByaW1pdGl2ZSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG9ib29sZWFuXG5cdC8vIFRvQm9vbGVhbjogRVM1LlRvQm9vbGVhbixcblxuXHQvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtdG9udW1iZXJcblx0VG9OdW1iZXI6IGZ1bmN0aW9uIFRvTnVtYmVyKGFyZ3VtZW50KSB7XG5cdFx0dmFyIHZhbHVlID0gaXNQcmltaXRpdmUoYXJndW1lbnQpID8gYXJndW1lbnQgOiB0b1ByaW1pdGl2ZShhcmd1bWVudCwgJE51bWJlcik7XG5cdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N5bWJvbCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCBhIFN5bWJvbCB2YWx1ZSB0byBhIG51bWJlcicpO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuXHRcdFx0aWYgKGlzQmluYXJ5KHZhbHVlKSkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5Ub051bWJlcihwYXJzZUludGVnZXIoc3RyU2xpY2UodmFsdWUsIDIpLCAyKSk7XG5cdFx0XHR9IGVsc2UgaWYgKGlzT2N0YWwodmFsdWUpKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLlRvTnVtYmVyKHBhcnNlSW50ZWdlcihzdHJTbGljZSh2YWx1ZSwgMiksIDgpKTtcblx0XHRcdH0gZWxzZSBpZiAoaGFzTm9uV1ModmFsdWUpIHx8IGlzSW52YWxpZEhleExpdGVyYWwodmFsdWUpKSB7XG5cdFx0XHRcdHJldHVybiBOYU47XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIgdHJpbW1lZCA9IHRyaW0odmFsdWUpO1xuXHRcdFx0XHRpZiAodHJpbW1lZCAhPT0gdmFsdWUpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5Ub051bWJlcih0cmltbWVkKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gJE51bWJlcih2YWx1ZSk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvaW50ZWdlclxuXHQvLyBUb0ludGVnZXI6IEVTNS5Ub051bWJlcixcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG9pbnQzMlxuXHQvLyBUb0ludDMyOiBFUzUuVG9JbnQzMixcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG91aW50MzJcblx0Ly8gVG9VaW50MzI6IEVTNS5Ub1VpbnQzMixcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG9pbnQxNlxuXHRUb0ludDE2OiBmdW5jdGlvbiBUb0ludDE2KGFyZ3VtZW50KSB7XG5cdFx0dmFyIGludDE2Yml0ID0gdGhpcy5Ub1VpbnQxNihhcmd1bWVudCk7XG5cdFx0cmV0dXJuIGludDE2Yml0ID49IDB4ODAwMCA/IGludDE2Yml0IC0gMHgxMDAwMCA6IGludDE2Yml0O1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b3VpbnQxNlxuXHQvLyBUb1VpbnQxNjogRVM1LlRvVWludDE2LFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b2ludDhcblx0VG9JbnQ4OiBmdW5jdGlvbiBUb0ludDgoYXJndW1lbnQpIHtcblx0XHR2YXIgaW50OGJpdCA9IHRoaXMuVG9VaW50OChhcmd1bWVudCk7XG5cdFx0cmV0dXJuIGludDhiaXQgPj0gMHg4MCA/IGludDhiaXQgLSAweDEwMCA6IGludDhiaXQ7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvdWludDhcblx0VG9VaW50ODogZnVuY3Rpb24gVG9VaW50OChhcmd1bWVudCkge1xuXHRcdHZhciBudW1iZXIgPSB0aGlzLlRvTnVtYmVyKGFyZ3VtZW50KTtcblx0XHRpZiAoJGlzTmFOKG51bWJlcikgfHwgbnVtYmVyID09PSAwIHx8ICEkaXNGaW5pdGUobnVtYmVyKSkgeyByZXR1cm4gMDsgfVxuXHRcdHZhciBwb3NJbnQgPSBzaWduKG51bWJlcikgKiAkZmxvb3IoJGFicyhudW1iZXIpKTtcblx0XHRyZXR1cm4gbW9kKHBvc0ludCwgMHgxMDApO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b3VpbnQ4Y2xhbXBcblx0VG9VaW50OENsYW1wOiBmdW5jdGlvbiBUb1VpbnQ4Q2xhbXAoYXJndW1lbnQpIHtcblx0XHR2YXIgbnVtYmVyID0gdGhpcy5Ub051bWJlcihhcmd1bWVudCk7XG5cdFx0aWYgKCRpc05hTihudW1iZXIpIHx8IG51bWJlciA8PSAwKSB7IHJldHVybiAwOyB9XG5cdFx0aWYgKG51bWJlciA+PSAweEZGKSB7IHJldHVybiAweEZGOyB9XG5cdFx0dmFyIGYgPSAkZmxvb3IoYXJndW1lbnQpO1xuXHRcdGlmIChmICsgMC41IDwgbnVtYmVyKSB7IHJldHVybiBmICsgMTsgfVxuXHRcdGlmIChudW1iZXIgPCBmICsgMC41KSB7IHJldHVybiBmOyB9XG5cdFx0aWYgKGYgJSAyICE9PSAwKSB7IHJldHVybiBmICsgMTsgfVxuXHRcdHJldHVybiBmO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b3N0cmluZ1xuXHRUb1N0cmluZzogZnVuY3Rpb24gVG9TdHJpbmcoYXJndW1lbnQpIHtcblx0XHRpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnc3ltYm9sJykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IGEgU3ltYm9sIHZhbHVlIHRvIGEgc3RyaW5nJyk7XG5cdFx0fVxuXHRcdHJldHVybiAkU3RyaW5nKGFyZ3VtZW50KTtcblx0fSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG9vYmplY3Rcblx0VG9PYmplY3Q6IGZ1bmN0aW9uIFRvT2JqZWN0KHZhbHVlKSB7XG5cdFx0dGhpcy5SZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHZhbHVlKTtcblx0XHRyZXR1cm4gJE9iamVjdCh2YWx1ZSk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvcHJvcGVydHlrZXlcblx0VG9Qcm9wZXJ0eUtleTogZnVuY3Rpb24gVG9Qcm9wZXJ0eUtleShhcmd1bWVudCkge1xuXHRcdHZhciBrZXkgPSB0aGlzLlRvUHJpbWl0aXZlKGFyZ3VtZW50LCAkU3RyaW5nKTtcblx0XHRyZXR1cm4gdHlwZW9mIGtleSA9PT0gJ3N5bWJvbCcgPyBrZXkgOiB0aGlzLlRvU3RyaW5nKGtleSk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvbGVuZ3RoXG5cdFRvTGVuZ3RoOiBmdW5jdGlvbiBUb0xlbmd0aChhcmd1bWVudCkge1xuXHRcdHZhciBsZW4gPSB0aGlzLlRvSW50ZWdlcihhcmd1bWVudCk7XG5cdFx0aWYgKGxlbiA8PSAwKSB7IHJldHVybiAwOyB9IC8vIGluY2x1ZGVzIGNvbnZlcnRpbmcgLTAgdG8gKzBcblx0XHRpZiAobGVuID4gTUFYX1NBRkVfSU5URUdFUikgeyByZXR1cm4gTUFYX1NBRkVfSU5URUdFUjsgfVxuXHRcdHJldHVybiBsZW47XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWNhbm9uaWNhbG51bWVyaWNpbmRleHN0cmluZ1xuXHRDYW5vbmljYWxOdW1lcmljSW5kZXhTdHJpbmc6IGZ1bmN0aW9uIENhbm9uaWNhbE51bWVyaWNJbmRleFN0cmluZyhhcmd1bWVudCkge1xuXHRcdGlmICh0b1N0cihhcmd1bWVudCkgIT09ICdbb2JqZWN0IFN0cmluZ10nKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignbXVzdCBiZSBhIHN0cmluZycpO1xuXHRcdH1cblx0XHRpZiAoYXJndW1lbnQgPT09ICctMCcpIHsgcmV0dXJuIC0wOyB9XG5cdFx0dmFyIG4gPSB0aGlzLlRvTnVtYmVyKGFyZ3VtZW50KTtcblx0XHRpZiAodGhpcy5TYW1lVmFsdWUodGhpcy5Ub1N0cmluZyhuKSwgYXJndW1lbnQpKSB7IHJldHVybiBuOyB9XG5cdFx0cmV0dXJuIHZvaWQgMDtcblx0fSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtcmVxdWlyZW9iamVjdGNvZXJjaWJsZVxuXHRSZXF1aXJlT2JqZWN0Q29lcmNpYmxlOiBFUzUuQ2hlY2tPYmplY3RDb2VyY2libGUsXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWlzYXJyYXlcblx0SXNBcnJheTogJEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gSXNBcnJheShhcmd1bWVudCkge1xuXHRcdHJldHVybiB0b1N0cihhcmd1bWVudCkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWlzY2FsbGFibGVcblx0Ly8gSXNDYWxsYWJsZTogRVM1LklzQ2FsbGFibGUsXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWlzY29uc3RydWN0b3Jcblx0SXNDb25zdHJ1Y3RvcjogZnVuY3Rpb24gSXNDb25zdHJ1Y3Rvcihhcmd1bWVudCkge1xuXHRcdHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT09ICdmdW5jdGlvbicgJiYgISFhcmd1bWVudC5wcm90b3R5cGU7IC8vIHVuZm9ydHVuYXRlbHkgdGhlcmUncyBubyB3YXkgdG8gdHJ1bHkgY2hlY2sgdGhpcyB3aXRob3V0IHRyeS9jYXRjaCBgbmV3IGFyZ3VtZW50YFxuXHR9LFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1pc2V4dGVuc2libGUtb1xuXHRJc0V4dGVuc2libGU6IE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9uc1xuXHRcdD8gZnVuY3Rpb24gSXNFeHRlbnNpYmxlKG9iaikge1xuXHRcdFx0aWYgKGlzUHJpbWl0aXZlKG9iaikpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuICRpc0V4dGVuc2libGUob2JqKTtcblx0XHR9XG5cdFx0OiBmdW5jdGlvbiBpc0V4dGVuc2libGUob2JqKSB7IHJldHVybiB0cnVlOyB9LCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWlzaW50ZWdlclxuXHRJc0ludGVnZXI6IGZ1bmN0aW9uIElzSW50ZWdlcihhcmd1bWVudCkge1xuXHRcdGlmICh0eXBlb2YgYXJndW1lbnQgIT09ICdudW1iZXInIHx8ICRpc05hTihhcmd1bWVudCkgfHwgISRpc0Zpbml0ZShhcmd1bWVudCkpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0dmFyIGFicyA9ICRhYnMoYXJndW1lbnQpO1xuXHRcdHJldHVybiAkZmxvb3IoYWJzKSA9PT0gYWJzO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1pc3Byb3BlcnR5a2V5XG5cdElzUHJvcGVydHlLZXk6IGZ1bmN0aW9uIElzUHJvcGVydHlLZXkoYXJndW1lbnQpIHtcblx0XHRyZXR1cm4gdHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgYXJndW1lbnQgPT09ICdzeW1ib2wnO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1pc3JlZ2V4cFxuXHRJc1JlZ0V4cDogZnVuY3Rpb24gSXNSZWdFeHAoYXJndW1lbnQpIHtcblx0XHRpZiAoIWFyZ3VtZW50IHx8IHR5cGVvZiBhcmd1bWVudCAhPT0gJ29iamVjdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0aWYgKGhhc1N5bWJvbHMpIHtcblx0XHRcdHZhciBpc1JlZ0V4cCA9IGFyZ3VtZW50WyRTeW1ib2wubWF0Y2hdO1xuXHRcdFx0aWYgKHR5cGVvZiBpc1JlZ0V4cCAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0cmV0dXJuIEVTNS5Ub0Jvb2xlYW4oaXNSZWdFeHApO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gaGFzUmVnRXhwTWF0Y2hlcihhcmd1bWVudCk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXNhbWV2YWx1ZVxuXHQvLyBTYW1lVmFsdWU6IEVTNS5TYW1lVmFsdWUsXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXNhbWV2YWx1ZXplcm9cblx0U2FtZVZhbHVlWmVybzogZnVuY3Rpb24gU2FtZVZhbHVlWmVybyh4LCB5KSB7XG5cdFx0cmV0dXJuICh4ID09PSB5KSB8fCAoJGlzTmFOKHgpICYmICRpc05hTih5KSk7XG5cdH0sXG5cblx0LyoqXG5cdCAqIDcuMy4yIEdldFYgKFYsIFApXG5cdCAqIDEuIEFzc2VydDogSXNQcm9wZXJ0eUtleShQKSBpcyB0cnVlLlxuXHQgKiAyLiBMZXQgTyBiZSBUb09iamVjdChWKS5cblx0ICogMy4gUmV0dXJuSWZBYnJ1cHQoTykuXG5cdCAqIDQuIFJldHVybiBPLltbR2V0XV0oUCwgVikuXG5cdCAqL1xuXHRHZXRWOiBmdW5jdGlvbiBHZXRWKFYsIFApIHtcblx0XHQvLyA3LjMuMi4xXG5cdFx0aWYgKCF0aGlzLklzUHJvcGVydHlLZXkoUCkpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBJc1Byb3BlcnR5S2V5KFApIGlzIG5vdCB0cnVlJyk7XG5cdFx0fVxuXG5cdFx0Ly8gNy4zLjIuMi0zXG5cdFx0dmFyIE8gPSB0aGlzLlRvT2JqZWN0KFYpO1xuXG5cdFx0Ly8gNy4zLjIuNFxuXHRcdHJldHVybiBPW1BdO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiA3LjMuOSAtIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1nZXRtZXRob2Rcblx0ICogMS4gQXNzZXJ0OiBJc1Byb3BlcnR5S2V5KFApIGlzIHRydWUuXG5cdCAqIDIuIExldCBmdW5jIGJlIEdldFYoTywgUCkuXG5cdCAqIDMuIFJldHVybklmQWJydXB0KGZ1bmMpLlxuXHQgKiA0LiBJZiBmdW5jIGlzIGVpdGhlciB1bmRlZmluZWQgb3IgbnVsbCwgcmV0dXJuIHVuZGVmaW5lZC5cblx0ICogNS4gSWYgSXNDYWxsYWJsZShmdW5jKSBpcyBmYWxzZSwgdGhyb3cgYSBUeXBlRXJyb3IgZXhjZXB0aW9uLlxuXHQgKiA2LiBSZXR1cm4gZnVuYy5cblx0ICovXG5cdEdldE1ldGhvZDogZnVuY3Rpb24gR2V0TWV0aG9kKE8sIFApIHtcblx0XHQvLyA3LjMuOS4xXG5cdFx0aWYgKCF0aGlzLklzUHJvcGVydHlLZXkoUCkpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBJc1Byb3BlcnR5S2V5KFApIGlzIG5vdCB0cnVlJyk7XG5cdFx0fVxuXG5cdFx0Ly8gNy4zLjkuMlxuXHRcdHZhciBmdW5jID0gdGhpcy5HZXRWKE8sIFApO1xuXG5cdFx0Ly8gNy4zLjkuNFxuXHRcdGlmIChmdW5jID09IG51bGwpIHtcblx0XHRcdHJldHVybiB2b2lkIDA7XG5cdFx0fVxuXG5cdFx0Ly8gNy4zLjkuNVxuXHRcdGlmICghdGhpcy5Jc0NhbGxhYmxlKGZ1bmMpKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcihQICsgJ2lzIG5vdCBhIGZ1bmN0aW9uJyk7XG5cdFx0fVxuXG5cdFx0Ly8gNy4zLjkuNlxuXHRcdHJldHVybiBmdW5jO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiA3LjMuMSBHZXQgKE8sIFApIC0gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWdldC1vLXBcblx0ICogMS4gQXNzZXJ0OiBUeXBlKE8pIGlzIE9iamVjdC5cblx0ICogMi4gQXNzZXJ0OiBJc1Byb3BlcnR5S2V5KFApIGlzIHRydWUuXG5cdCAqIDMuIFJldHVybiBPLltbR2V0XV0oUCwgTykuXG5cdCAqL1xuXHRHZXQ6IGZ1bmN0aW9uIEdldChPLCBQKSB7XG5cdFx0Ly8gNy4zLjEuMVxuXHRcdGlmICh0aGlzLlR5cGUoTykgIT09ICdPYmplY3QnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogVHlwZShPKSBpcyBub3QgT2JqZWN0Jyk7XG5cdFx0fVxuXHRcdC8vIDcuMy4xLjJcblx0XHRpZiAoIXRoaXMuSXNQcm9wZXJ0eUtleShQKSkge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IElzUHJvcGVydHlLZXkoUCkgaXMgbm90IHRydWUnKTtcblx0XHR9XG5cdFx0Ly8gNy4zLjEuM1xuXHRcdHJldHVybiBPW1BdO1xuXHR9LFxuXG5cdFR5cGU6IGZ1bmN0aW9uIFR5cGUoeCkge1xuXHRcdGlmICh0eXBlb2YgeCA9PT0gJ3N5bWJvbCcpIHtcblx0XHRcdHJldHVybiAnU3ltYm9sJztcblx0XHR9XG5cdFx0cmV0dXJuIEVTNS5UeXBlKHgpO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1zcGVjaWVzY29uc3RydWN0b3Jcblx0U3BlY2llc0NvbnN0cnVjdG9yOiBmdW5jdGlvbiBTcGVjaWVzQ29uc3RydWN0b3IoTywgZGVmYXVsdENvbnN0cnVjdG9yKSB7XG5cdFx0aWYgKHRoaXMuVHlwZShPKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBUeXBlKE8pIGlzIG5vdCBPYmplY3QnKTtcblx0XHR9XG5cdFx0dmFyIEMgPSBPLmNvbnN0cnVjdG9yO1xuXHRcdGlmICh0eXBlb2YgQyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdHJldHVybiBkZWZhdWx0Q29uc3RydWN0b3I7XG5cdFx0fVxuXHRcdGlmICh0aGlzLlR5cGUoQykgIT09ICdPYmplY3QnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignTy5jb25zdHJ1Y3RvciBpcyBub3QgYW4gT2JqZWN0Jyk7XG5cdFx0fVxuXHRcdHZhciBTID0gaGFzU3ltYm9scyAmJiAkU3ltYm9sLnNwZWNpZXMgPyBDWyRTeW1ib2wuc3BlY2llc10gOiB2b2lkIDA7XG5cdFx0aWYgKFMgPT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIGRlZmF1bHRDb25zdHJ1Y3Rvcjtcblx0XHR9XG5cdFx0aWYgKHRoaXMuSXNDb25zdHJ1Y3RvcihTKSkge1xuXHRcdFx0cmV0dXJuIFM7XG5cdFx0fVxuXHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdubyBjb25zdHJ1Y3RvciBmb3VuZCcpO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1jb21wbGV0ZXByb3BlcnR5ZGVzY3JpcHRvclxuXHRDb21wbGV0ZVByb3BlcnR5RGVzY3JpcHRvcjogZnVuY3Rpb24gQ29tcGxldGVQcm9wZXJ0eURlc2NyaXB0b3IoRGVzYykge1xuXHRcdGFzc2VydFJlY29yZCh0aGlzLCAnUHJvcGVydHkgRGVzY3JpcHRvcicsICdEZXNjJywgRGVzYyk7XG5cblx0XHRpZiAodGhpcy5Jc0dlbmVyaWNEZXNjcmlwdG9yKERlc2MpIHx8IHRoaXMuSXNEYXRhRGVzY3JpcHRvcihEZXNjKSkge1xuXHRcdFx0aWYgKCFoYXMoRGVzYywgJ1tbVmFsdWVdXScpKSB7XG5cdFx0XHRcdERlc2NbJ1tbVmFsdWVdXSddID0gdm9pZCAwO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFoYXMoRGVzYywgJ1tbV3JpdGFibGVdXScpKSB7XG5cdFx0XHRcdERlc2NbJ1tbV3JpdGFibGVdXSddID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmICghaGFzKERlc2MsICdbW0dldF1dJykpIHtcblx0XHRcdFx0RGVzY1snW1tHZXRdXSddID0gdm9pZCAwO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFoYXMoRGVzYywgJ1tbU2V0XV0nKSkge1xuXHRcdFx0XHREZXNjWydbW1NldF1dJ10gPSB2b2lkIDA7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICghaGFzKERlc2MsICdbW0VudW1lcmFibGVdXScpKSB7XG5cdFx0XHREZXNjWydbW0VudW1lcmFibGVdXSddID0gZmFsc2U7XG5cdFx0fVxuXHRcdGlmICghaGFzKERlc2MsICdbW0NvbmZpZ3VyYWJsZV1dJykpIHtcblx0XHRcdERlc2NbJ1tbQ29uZmlndXJhYmxlXV0nXSA9IGZhbHNlO1xuXHRcdH1cblx0XHRyZXR1cm4gRGVzYztcblx0fSxcblxuXHQvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtc2V0LW8tcC12LXRocm93XG5cdFNldDogZnVuY3Rpb24gU2V0KE8sIFAsIFYsIFRocm93KSB7XG5cdFx0aWYgKHRoaXMuVHlwZShPKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdPIG11c3QgYmUgYW4gT2JqZWN0Jyk7XG5cdFx0fVxuXHRcdGlmICghdGhpcy5Jc1Byb3BlcnR5S2V5KFApKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignUCBtdXN0IGJlIGEgUHJvcGVydHkgS2V5Jyk7XG5cdFx0fVxuXHRcdGlmICh0aGlzLlR5cGUoVGhyb3cpICE9PSAnQm9vbGVhbicpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdUaHJvdyBtdXN0IGJlIGEgQm9vbGVhbicpO1xuXHRcdH1cblx0XHRpZiAoVGhyb3cpIHtcblx0XHRcdE9bUF0gPSBWO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdE9bUF0gPSBWO1xuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1oYXNvd25wcm9wZXJ0eVxuXHRIYXNPd25Qcm9wZXJ0eTogZnVuY3Rpb24gSGFzT3duUHJvcGVydHkoTywgUCkge1xuXHRcdGlmICh0aGlzLlR5cGUoTykgIT09ICdPYmplY3QnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignTyBtdXN0IGJlIGFuIE9iamVjdCcpO1xuXHRcdH1cblx0XHRpZiAoIXRoaXMuSXNQcm9wZXJ0eUtleShQKSkge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ1AgbXVzdCBiZSBhIFByb3BlcnR5IEtleScpO1xuXHRcdH1cblx0XHRyZXR1cm4gaGFzKE8sIFApO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1oYXNwcm9wZXJ0eVxuXHRIYXNQcm9wZXJ0eTogZnVuY3Rpb24gSGFzUHJvcGVydHkoTywgUCkge1xuXHRcdGlmICh0aGlzLlR5cGUoTykgIT09ICdPYmplY3QnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignTyBtdXN0IGJlIGFuIE9iamVjdCcpO1xuXHRcdH1cblx0XHRpZiAoIXRoaXMuSXNQcm9wZXJ0eUtleShQKSkge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ1AgbXVzdCBiZSBhIFByb3BlcnR5IEtleScpO1xuXHRcdH1cblx0XHRyZXR1cm4gUCBpbiBPO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1pc2NvbmNhdHNwcmVhZGFibGVcblx0SXNDb25jYXRTcHJlYWRhYmxlOiBmdW5jdGlvbiBJc0NvbmNhdFNwcmVhZGFibGUoTykge1xuXHRcdGlmICh0aGlzLlR5cGUoTykgIT09ICdPYmplY3QnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGlmIChoYXNTeW1ib2xzICYmIHR5cGVvZiAkU3ltYm9sLmlzQ29uY2F0U3ByZWFkYWJsZSA9PT0gJ3N5bWJvbCcpIHtcblx0XHRcdHZhciBzcHJlYWRhYmxlID0gdGhpcy5HZXQoTywgU3ltYm9sLmlzQ29uY2F0U3ByZWFkYWJsZSk7XG5cdFx0XHRpZiAodHlwZW9mIHNwcmVhZGFibGUgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLlRvQm9vbGVhbihzcHJlYWRhYmxlKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuSXNBcnJheShPKTtcblx0fSxcblxuXHQvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtaW52b2tlXG5cdEludm9rZTogZnVuY3Rpb24gSW52b2tlKE8sIFApIHtcblx0XHRpZiAoIXRoaXMuSXNQcm9wZXJ0eUtleShQKSkge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ1AgbXVzdCBiZSBhIFByb3BlcnR5IEtleScpO1xuXHRcdH1cblx0XHR2YXIgYXJndW1lbnRzTGlzdCA9IGFycmF5U2xpY2UoYXJndW1lbnRzLCAyKTtcblx0XHR2YXIgZnVuYyA9IHRoaXMuR2V0VihPLCBQKTtcblx0XHRyZXR1cm4gdGhpcy5DYWxsKGZ1bmMsIE8sIGFyZ3VtZW50c0xpc3QpO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1nZXRpdGVyYXRvclxuXHRHZXRJdGVyYXRvcjogZnVuY3Rpb24gR2V0SXRlcmF0b3Iob2JqLCBtZXRob2QpIHtcblx0XHRpZiAoIWhhc1N5bWJvbHMpIHtcblx0XHRcdHRocm93IG5ldyBTeW50YXhFcnJvcignRVMuR2V0SXRlcmF0b3IgZGVwZW5kcyBvbiBuYXRpdmUgaXRlcmF0b3Igc3VwcG9ydC4nKTtcblx0XHR9XG5cblx0XHR2YXIgYWN0dWFsTWV0aG9kID0gbWV0aG9kO1xuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikge1xuXHRcdFx0YWN0dWFsTWV0aG9kID0gdGhpcy5HZXRNZXRob2Qob2JqLCAkU3ltYm9sLml0ZXJhdG9yKTtcblx0XHR9XG5cdFx0dmFyIGl0ZXJhdG9yID0gdGhpcy5DYWxsKGFjdHVhbE1ldGhvZCwgb2JqKTtcblx0XHRpZiAodGhpcy5UeXBlKGl0ZXJhdG9yKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdpdGVyYXRvciBtdXN0IHJldHVybiBhbiBvYmplY3QnKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gaXRlcmF0b3I7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWl0ZXJhdG9ybmV4dFxuXHRJdGVyYXRvck5leHQ6IGZ1bmN0aW9uIEl0ZXJhdG9yTmV4dChpdGVyYXRvciwgdmFsdWUpIHtcblx0XHR2YXIgcmVzdWx0ID0gdGhpcy5JbnZva2UoaXRlcmF0b3IsICduZXh0JywgYXJndW1lbnRzLmxlbmd0aCA8IDIgPyBbXSA6IFt2YWx1ZV0pO1xuXHRcdGlmICh0aGlzLlR5cGUocmVzdWx0KSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdpdGVyYXRvciBuZXh0IG11c3QgcmV0dXJuIGFuIG9iamVjdCcpO1xuXHRcdH1cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1pdGVyYXRvcmNvbXBsZXRlXG5cdEl0ZXJhdG9yQ29tcGxldGU6IGZ1bmN0aW9uIEl0ZXJhdG9yQ29tcGxldGUoaXRlclJlc3VsdCkge1xuXHRcdGlmICh0aGlzLlR5cGUoaXRlclJlc3VsdCkgIT09ICdPYmplY3QnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogVHlwZShpdGVyUmVzdWx0KSBpcyBub3QgT2JqZWN0Jyk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLlRvQm9vbGVhbih0aGlzLkdldChpdGVyUmVzdWx0LCAnZG9uZScpKTtcblx0fSxcblxuXHQvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtaXRlcmF0b3J2YWx1ZVxuXHRJdGVyYXRvclZhbHVlOiBmdW5jdGlvbiBJdGVyYXRvclZhbHVlKGl0ZXJSZXN1bHQpIHtcblx0XHRpZiAodGhpcy5UeXBlKGl0ZXJSZXN1bHQpICE9PSAnT2JqZWN0Jykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IFR5cGUoaXRlclJlc3VsdCkgaXMgbm90IE9iamVjdCcpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5HZXQoaXRlclJlc3VsdCwgJ3ZhbHVlJyk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWl0ZXJhdG9yc3RlcFxuXHRJdGVyYXRvclN0ZXA6IGZ1bmN0aW9uIEl0ZXJhdG9yU3RlcChpdGVyYXRvcikge1xuXHRcdHZhciByZXN1bHQgPSB0aGlzLkl0ZXJhdG9yTmV4dChpdGVyYXRvcik7XG5cdFx0dmFyIGRvbmUgPSB0aGlzLkl0ZXJhdG9yQ29tcGxldGUocmVzdWx0KTtcblx0XHRyZXR1cm4gZG9uZSA9PT0gdHJ1ZSA/IGZhbHNlIDogcmVzdWx0O1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1pdGVyYXRvcmNsb3NlXG5cdEl0ZXJhdG9yQ2xvc2U6IGZ1bmN0aW9uIEl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsIGNvbXBsZXRpb24pIHtcblx0XHRpZiAodGhpcy5UeXBlKGl0ZXJhdG9yKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBUeXBlKGl0ZXJhdG9yKSBpcyBub3QgT2JqZWN0Jyk7XG5cdFx0fVxuXHRcdGlmICghdGhpcy5Jc0NhbGxhYmxlKGNvbXBsZXRpb24pKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogY29tcGxldGlvbiBpcyBub3QgYSB0aHVuayBmb3IgYSBDb21wbGV0aW9uIFJlY29yZCcpO1xuXHRcdH1cblx0XHR2YXIgY29tcGxldGlvblRodW5rID0gY29tcGxldGlvbjtcblxuXHRcdHZhciBpdGVyYXRvclJldHVybiA9IHRoaXMuR2V0TWV0aG9kKGl0ZXJhdG9yLCAncmV0dXJuJyk7XG5cblx0XHRpZiAodHlwZW9mIGl0ZXJhdG9yUmV0dXJuID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0cmV0dXJuIGNvbXBsZXRpb25UaHVuaygpO1xuXHRcdH1cblxuXHRcdHZhciBjb21wbGV0aW9uUmVjb3JkO1xuXHRcdHRyeSB7XG5cdFx0XHR2YXIgaW5uZXJSZXN1bHQgPSB0aGlzLkNhbGwoaXRlcmF0b3JSZXR1cm4sIGl0ZXJhdG9yLCBbXSk7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0Ly8gaWYgd2UgaGl0IGhlcmUsIHRoZW4gXCJlXCIgaXMgdGhlIGlubmVyUmVzdWx0IGNvbXBsZXRpb24gdGhhdCBuZWVkcyByZS10aHJvd2luZ1xuXG5cdFx0XHQvLyBpZiB0aGUgY29tcGxldGlvbiBpcyBvZiB0eXBlIFwidGhyb3dcIiwgdGhpcyB3aWxsIHRocm93LlxuXHRcdFx0Y29tcGxldGlvblJlY29yZCA9IGNvbXBsZXRpb25UaHVuaygpO1xuXHRcdFx0Y29tcGxldGlvblRodW5rID0gbnVsbDsgLy8gZW5zdXJlIGl0J3Mgbm90IGNhbGxlZCB0d2ljZS5cblxuXHRcdFx0Ly8gaWYgbm90LCB0aGVuIHJldHVybiB0aGUgaW5uZXJSZXN1bHQgY29tcGxldGlvblxuXHRcdFx0dGhyb3cgZTtcblx0XHR9XG5cdFx0Y29tcGxldGlvblJlY29yZCA9IGNvbXBsZXRpb25UaHVuaygpOyAvLyBpZiBpbm5lclJlc3VsdCB3b3JrZWQsIHRoZW4gdGhyb3cgaWYgdGhlIGNvbXBsZXRpb24gZG9lc1xuXHRcdGNvbXBsZXRpb25UaHVuayA9IG51bGw7IC8vIGVuc3VyZSBpdCdzIG5vdCBjYWxsZWQgdHdpY2UuXG5cblx0XHRpZiAodGhpcy5UeXBlKGlubmVyUmVzdWx0KSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdpdGVyYXRvciAucmV0dXJuIG11c3QgcmV0dXJuIGFuIG9iamVjdCcpO1xuXHRcdH1cblxuXHRcdHJldHVybiBjb21wbGV0aW9uUmVjb3JkO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1jcmVhdGVpdGVycmVzdWx0b2JqZWN0XG5cdENyZWF0ZUl0ZXJSZXN1bHRPYmplY3Q6IGZ1bmN0aW9uIENyZWF0ZUl0ZXJSZXN1bHRPYmplY3QodmFsdWUsIGRvbmUpIHtcblx0XHRpZiAodGhpcy5UeXBlKGRvbmUpICE9PSAnQm9vbGVhbicpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBUeXBlKGRvbmUpIGlzIG5vdCBCb29sZWFuJyk7XG5cdFx0fVxuXHRcdHJldHVybiB7XG5cdFx0XHR2YWx1ZTogdmFsdWUsXG5cdFx0XHRkb25lOiBkb25lXG5cdFx0fTtcblx0fSxcblxuXHQvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtcmVnZXhwZXhlY1xuXHRSZWdFeHBFeGVjOiBmdW5jdGlvbiBSZWdFeHBFeGVjKFIsIFMpIHtcblx0XHRpZiAodGhpcy5UeXBlKFIpICE9PSAnT2JqZWN0Jykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ1IgbXVzdCBiZSBhbiBPYmplY3QnKTtcblx0XHR9XG5cdFx0aWYgKHRoaXMuVHlwZShTKSAhPT0gJ1N0cmluZycpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdTIG11c3QgYmUgYSBTdHJpbmcnKTtcblx0XHR9XG5cdFx0dmFyIGV4ZWMgPSB0aGlzLkdldChSLCAnZXhlYycpO1xuXHRcdGlmICh0aGlzLklzQ2FsbGFibGUoZXhlYykpIHtcblx0XHRcdHZhciByZXN1bHQgPSB0aGlzLkNhbGwoZXhlYywgUiwgW1NdKTtcblx0XHRcdGlmIChyZXN1bHQgPT09IG51bGwgfHwgdGhpcy5UeXBlKHJlc3VsdCkgPT09ICdPYmplY3QnKSB7XG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHR9XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignXCJleGVjXCIgbWV0aG9kIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBPYmplY3QnKTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlZ2V4RXhlYyhSLCBTKTtcblx0fSxcblxuXHQvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtYXJyYXlzcGVjaWVzY3JlYXRlXG5cdEFycmF5U3BlY2llc0NyZWF0ZTogZnVuY3Rpb24gQXJyYXlTcGVjaWVzQ3JlYXRlKG9yaWdpbmFsQXJyYXksIGxlbmd0aCkge1xuXHRcdGlmICghdGhpcy5Jc0ludGVnZXIobGVuZ3RoKSB8fCBsZW5ndGggPCAwKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogbGVuZ3RoIG11c3QgYmUgYW4gaW50ZWdlciA+PSAwJyk7XG5cdFx0fVxuXHRcdHZhciBsZW4gPSBsZW5ndGggPT09IDAgPyAwIDogbGVuZ3RoO1xuXHRcdHZhciBDO1xuXHRcdHZhciBpc0FycmF5ID0gdGhpcy5Jc0FycmF5KG9yaWdpbmFsQXJyYXkpO1xuXHRcdGlmIChpc0FycmF5KSB7XG5cdFx0XHRDID0gdGhpcy5HZXQob3JpZ2luYWxBcnJheSwgJ2NvbnN0cnVjdG9yJyk7XG5cdFx0XHQvLyBUT0RPOiBmaWd1cmUgb3V0IGhvdyB0byBtYWtlIGEgY3Jvc3MtcmVhbG0gbm9ybWFsIEFycmF5LCBhIHNhbWUtcmVhbG0gQXJyYXlcblx0XHRcdC8vIGlmICh0aGlzLklzQ29uc3RydWN0b3IoQykpIHtcblx0XHRcdC8vIFx0aWYgQyBpcyBhbm90aGVyIHJlYWxtJ3MgQXJyYXksIEMgPSB1bmRlZmluZWRcblx0XHRcdC8vIFx0T2JqZWN0LmdldFByb3RvdHlwZU9mKE9iamVjdC5nZXRQcm90b3R5cGVPZihPYmplY3QuZ2V0UHJvdG90eXBlT2YoQXJyYXkpKSkgPT09IG51bGwgP1xuXHRcdFx0Ly8gfVxuXHRcdFx0aWYgKHRoaXMuVHlwZShDKSA9PT0gJ09iamVjdCcgJiYgaGFzU3ltYm9scyAmJiAkU3ltYm9sLnNwZWNpZXMpIHtcblx0XHRcdFx0QyA9IHRoaXMuR2V0KEMsICRTeW1ib2wuc3BlY2llcyk7XG5cdFx0XHRcdGlmIChDID09PSBudWxsKSB7XG5cdFx0XHRcdFx0QyA9IHZvaWQgMDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAodHlwZW9mIEMgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRyZXR1cm4gJEFycmF5KGxlbik7XG5cdFx0fVxuXHRcdGlmICghdGhpcy5Jc0NvbnN0cnVjdG9yKEMpKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQyBtdXN0IGJlIGEgY29uc3RydWN0b3InKTtcblx0XHR9XG5cdFx0cmV0dXJuIG5ldyBDKGxlbik7IC8vIHRoaXMuQ29uc3RydWN0KEMsIGxlbik7XG5cdH0sXG5cblx0Q3JlYXRlRGF0YVByb3BlcnR5OiBmdW5jdGlvbiBDcmVhdGVEYXRhUHJvcGVydHkoTywgUCwgVikge1xuXHRcdGlmICh0aGlzLlR5cGUoTykgIT09ICdPYmplY3QnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogVHlwZShPKSBpcyBub3QgT2JqZWN0Jyk7XG5cdFx0fVxuXHRcdGlmICghdGhpcy5Jc1Byb3BlcnR5S2V5KFApKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogSXNQcm9wZXJ0eUtleShQKSBpcyBub3QgdHJ1ZScpO1xuXHRcdH1cblx0XHR2YXIgb2xkRGVzYyA9ICRnT1BEKE8sIFApO1xuXHRcdHZhciBleHRlbnNpYmxlID0gb2xkRGVzYyB8fCAodHlwZW9mICRpc0V4dGVuc2libGUgIT09ICdmdW5jdGlvbicgfHwgJGlzRXh0ZW5zaWJsZShPKSk7XG5cdFx0dmFyIGltbXV0YWJsZSA9IG9sZERlc2MgJiYgKCFvbGREZXNjLndyaXRhYmxlIHx8ICFvbGREZXNjLmNvbmZpZ3VyYWJsZSk7XG5cdFx0aWYgKGltbXV0YWJsZSB8fCAhZXh0ZW5zaWJsZSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHR2YXIgbmV3RGVzYyA9IHtcblx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHR2YWx1ZTogVixcblx0XHRcdHdyaXRhYmxlOiB0cnVlXG5cdFx0fTtcblx0XHQkZGVmaW5lUHJvcGVydHkoTywgUCwgbmV3RGVzYyk7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWNyZWF0ZWRhdGFwcm9wZXJ0eW9ydGhyb3dcblx0Q3JlYXRlRGF0YVByb3BlcnR5T3JUaHJvdzogZnVuY3Rpb24gQ3JlYXRlRGF0YVByb3BlcnR5T3JUaHJvdyhPLCBQLCBWKSB7XG5cdFx0aWYgKHRoaXMuVHlwZShPKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBUeXBlKE8pIGlzIG5vdCBPYmplY3QnKTtcblx0XHR9XG5cdFx0aWYgKCF0aGlzLklzUHJvcGVydHlLZXkoUCkpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBJc1Byb3BlcnR5S2V5KFApIGlzIG5vdCB0cnVlJyk7XG5cdFx0fVxuXHRcdHZhciBzdWNjZXNzID0gdGhpcy5DcmVhdGVEYXRhUHJvcGVydHkoTywgUCwgVik7XG5cdFx0aWYgKCFzdWNjZXNzKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcigndW5hYmxlIHRvIGNyZWF0ZSBkYXRhIHByb3BlcnR5Jyk7XG5cdFx0fVxuXHRcdHJldHVybiBzdWNjZXNzO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtb2JqZWN0Y3JlYXRlXG5cdE9iamVjdENyZWF0ZTogZnVuY3Rpb24gT2JqZWN0Q3JlYXRlKHByb3RvLCBpbnRlcm5hbFNsb3RzTGlzdCkge1xuXHRcdGlmIChwcm90byAhPT0gbnVsbCAmJiB0aGlzLlR5cGUocHJvdG8pICE9PSAnT2JqZWN0Jykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IHByb3RvIG11c3QgYmUgbnVsbCBvciBhbiBvYmplY3QnKTtcblx0XHR9XG5cdFx0dmFyIHNsb3RzID0gYXJndW1lbnRzLmxlbmd0aCA8IDIgPyBbXSA6IGludGVybmFsU2xvdHNMaXN0O1xuXHRcdGlmIChzbG90cy5sZW5ndGggPiAwKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFN5bnRheEVycm9yKCdlcy1hYnN0cmFjdCBkb2VzIG5vdCB5ZXQgc3VwcG9ydCBpbnRlcm5hbCBzbG90cycpO1xuXHRcdH1cblxuXHRcdGlmIChwcm90byA9PT0gbnVsbCAmJiAhJE9iamVjdENyZWF0ZSkge1xuXHRcdFx0dGhyb3cgbmV3ICRTeW50YXhFcnJvcignbmF0aXZlIE9iamVjdC5jcmVhdGUgc3VwcG9ydCBpcyByZXF1aXJlZCB0byBjcmVhdGUgbnVsbCBvYmplY3RzJyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuICRPYmplY3RDcmVhdGUocHJvdG8pO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1hZHZhbmNlc3RyaW5naW5kZXhcblx0QWR2YW5jZVN0cmluZ0luZGV4OiBmdW5jdGlvbiBBZHZhbmNlU3RyaW5nSW5kZXgoUywgaW5kZXgsIHVuaWNvZGUpIHtcblx0XHRpZiAodGhpcy5UeXBlKFMpICE9PSAnU3RyaW5nJykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ1MgbXVzdCBiZSBhIFN0cmluZycpO1xuXHRcdH1cblx0XHRpZiAoIXRoaXMuSXNJbnRlZ2VyKGluZGV4KSB8fCBpbmRleCA8IDAgfHwgaW5kZXggPiBNQVhfU0FGRV9JTlRFR0VSKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogbGVuZ3RoIG11c3QgYmUgYW4gaW50ZWdlciA+PSAwIGFuZCA8PSAyKio1MycpO1xuXHRcdH1cblx0XHRpZiAodGhpcy5UeXBlKHVuaWNvZGUpICE9PSAnQm9vbGVhbicpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiB1bmljb2RlIG11c3QgYmUgYSBCb29sZWFuJyk7XG5cdFx0fVxuXHRcdGlmICghdW5pY29kZSkge1xuXHRcdFx0cmV0dXJuIGluZGV4ICsgMTtcblx0XHR9XG5cdFx0dmFyIGxlbmd0aCA9IFMubGVuZ3RoO1xuXHRcdGlmICgoaW5kZXggKyAxKSA+PSBsZW5ndGgpIHtcblx0XHRcdHJldHVybiBpbmRleCArIDE7XG5cdFx0fVxuXG5cdFx0dmFyIGZpcnN0ID0gJGNoYXJDb2RlQXQoUywgaW5kZXgpO1xuXHRcdGlmIChmaXJzdCA8IDB4RDgwMCB8fCBmaXJzdCA+IDB4REJGRikge1xuXHRcdFx0cmV0dXJuIGluZGV4ICsgMTtcblx0XHR9XG5cblx0XHR2YXIgc2Vjb25kID0gJGNoYXJDb2RlQXQoUywgaW5kZXggKyAxKTtcblx0XHRpZiAoc2Vjb25kIDwgMHhEQzAwIHx8IHNlY29uZCA+IDB4REZGRikge1xuXHRcdFx0cmV0dXJuIGluZGV4ICsgMTtcblx0XHR9XG5cblx0XHRyZXR1cm4gaW5kZXggKyAyO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtY3JlYXRlbWV0aG9kcHJvcGVydHlcblx0Q3JlYXRlTWV0aG9kUHJvcGVydHk6IGZ1bmN0aW9uIENyZWF0ZU1ldGhvZFByb3BlcnR5KE8sIFAsIFYpIHtcblx0XHRpZiAodGhpcy5UeXBlKE8pICE9PSAnT2JqZWN0Jykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IFR5cGUoTykgaXMgbm90IE9iamVjdCcpO1xuXHRcdH1cblxuXHRcdGlmICghdGhpcy5Jc1Byb3BlcnR5S2V5KFApKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogSXNQcm9wZXJ0eUtleShQKSBpcyBub3QgdHJ1ZScpO1xuXHRcdH1cblxuXHRcdHZhciBuZXdEZXNjID0ge1xuXHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdFx0ZW51bWVyYWJsZTogZmFsc2UsXG5cdFx0XHR2YWx1ZTogVixcblx0XHRcdHdyaXRhYmxlOiB0cnVlXG5cdFx0fTtcblx0XHRyZXR1cm4gISEkZGVmaW5lUHJvcGVydHkoTywgUCwgbmV3RGVzYyk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1kZWZpbmVwcm9wZXJ0eW9ydGhyb3dcblx0RGVmaW5lUHJvcGVydHlPclRocm93OiBmdW5jdGlvbiBEZWZpbmVQcm9wZXJ0eU9yVGhyb3coTywgUCwgZGVzYykge1xuXHRcdGlmICh0aGlzLlR5cGUoTykgIT09ICdPYmplY3QnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogVHlwZShPKSBpcyBub3QgT2JqZWN0Jyk7XG5cdFx0fVxuXG5cdFx0aWYgKCF0aGlzLklzUHJvcGVydHlLZXkoUCkpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBJc1Byb3BlcnR5S2V5KFApIGlzIG5vdCB0cnVlJyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuICEhJGRlZmluZVByb3BlcnR5KE8sIFAsIGRlc2MpO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtZGVsZXRlcHJvcGVydHlvcnRocm93XG5cdERlbGV0ZVByb3BlcnR5T3JUaHJvdzogZnVuY3Rpb24gRGVsZXRlUHJvcGVydHlPclRocm93KE8sIFApIHtcblx0XHRpZiAodGhpcy5UeXBlKE8pICE9PSAnT2JqZWN0Jykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IFR5cGUoTykgaXMgbm90IE9iamVjdCcpO1xuXHRcdH1cblxuXHRcdGlmICghdGhpcy5Jc1Byb3BlcnR5S2V5KFApKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogSXNQcm9wZXJ0eUtleShQKSBpcyBub3QgdHJ1ZScpO1xuXHRcdH1cblxuXHRcdHZhciBzdWNjZXNzID0gZGVsZXRlIE9bUF07XG5cdFx0aWYgKCFzdWNjZXNzKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdBdHRlbXB0IHRvIGRlbGV0ZSBwcm9wZXJ0eSBmYWlsZWQuJyk7XG5cdFx0fVxuXHRcdHJldHVybiBzdWNjZXNzO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtZW51bWVyYWJsZW93bm5hbWVzXG5cdEVudW1lcmFibGVPd25OYW1lczogZnVuY3Rpb24gRW51bWVyYWJsZU93bk5hbWVzKE8pIHtcblx0XHRpZiAodGhpcy5UeXBlKE8pICE9PSAnT2JqZWN0Jykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IFR5cGUoTykgaXMgbm90IE9iamVjdCcpO1xuXHRcdH1cblxuXHRcdHJldHVybiBrZXlzKE8pO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1wcm9wZXJ0aWVzLW9mLXRoZS1udW1iZXItcHJvdG90eXBlLW9iamVjdFxuXHR0aGlzTnVtYmVyVmFsdWU6IGZ1bmN0aW9uIHRoaXNOdW1iZXJWYWx1ZSh2YWx1ZSkge1xuXHRcdGlmICh0aGlzLlR5cGUodmFsdWUpID09PSAnTnVtYmVyJykge1xuXHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdH1cblxuXHRcdHJldHVybiAkTnVtYmVyVmFsdWVPZih2YWx1ZSk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLXByb3BlcnRpZXMtb2YtdGhlLWJvb2xlYW4tcHJvdG90eXBlLW9iamVjdFxuXHR0aGlzQm9vbGVhblZhbHVlOiBmdW5jdGlvbiB0aGlzQm9vbGVhblZhbHVlKHZhbHVlKSB7XG5cdFx0aWYgKHRoaXMuVHlwZSh2YWx1ZSkgPT09ICdCb29sZWFuJykge1xuXHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdH1cblxuXHRcdHJldHVybiAkQm9vbGVhblZhbHVlT2YodmFsdWUpO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1wcm9wZXJ0aWVzLW9mLXRoZS1zdHJpbmctcHJvdG90eXBlLW9iamVjdFxuXHR0aGlzU3RyaW5nVmFsdWU6IGZ1bmN0aW9uIHRoaXNTdHJpbmdWYWx1ZSh2YWx1ZSkge1xuXHRcdGlmICh0aGlzLlR5cGUodmFsdWUpID09PSAnU3RyaW5nJykge1xuXHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdH1cblxuXHRcdHJldHVybiAkU3RyaW5nVmFsdWVPZih2YWx1ZSk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLXByb3BlcnRpZXMtb2YtdGhlLWRhdGUtcHJvdG90eXBlLW9iamVjdFxuXHR0aGlzVGltZVZhbHVlOiBmdW5jdGlvbiB0aGlzVGltZVZhbHVlKHZhbHVlKSB7XG5cdFx0cmV0dXJuICREYXRlVmFsdWVPZih2YWx1ZSk7XG5cdH1cbn0pO1xuXG5kZWxldGUgRVM2LkNoZWNrT2JqZWN0Q29lcmNpYmxlOyAvLyByZW5hbWVkIGluIEVTNiB0byBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlXG5cbm1vZHVsZS5leHBvcnRzID0gRVM2O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VzLWFic3RyYWN0L2VzMjAxNS5qc1xuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbnZhciBiaW5kID0gcmVxdWlyZSgnZnVuY3Rpb24tYmluZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJpbmQuY2FsbChGdW5jdGlvbi5jYWxsLCBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9oYXMvc3JjL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxudmFyIGltcGxlbWVudGF0aW9uID0gcmVxdWlyZSgnLi9pbXBsZW1lbnRhdGlvbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kIHx8IGltcGxlbWVudGF0aW9uO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Z1bmN0aW9uLWJpbmQvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKiBlc2xpbnQgbm8taW52YWxpZC10aGlzOiAxICovXG5cbnZhciBFUlJPUl9NRVNTQUdFID0gJ0Z1bmN0aW9uLnByb3RvdHlwZS5iaW5kIGNhbGxlZCBvbiBpbmNvbXBhdGlibGUgJztcbnZhciBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgZnVuY1R5cGUgPSAnW29iamVjdCBGdW5jdGlvbl0nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJpbmQodGhhdCkge1xuICAgIHZhciB0YXJnZXQgPSB0aGlzO1xuICAgIGlmICh0eXBlb2YgdGFyZ2V0ICE9PSAnZnVuY3Rpb24nIHx8IHRvU3RyLmNhbGwodGFyZ2V0KSAhPT0gZnVuY1R5cGUpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihFUlJPUl9NRVNTQUdFICsgdGFyZ2V0KTtcbiAgICB9XG4gICAgdmFyIGFyZ3MgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG5cbiAgICB2YXIgYm91bmQ7XG4gICAgdmFyIGJpbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBib3VuZCkge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHRhcmdldC5hcHBseShcbiAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgIGFyZ3MuY29uY2F0KHNsaWNlLmNhbGwoYXJndW1lbnRzKSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAoT2JqZWN0KHJlc3VsdCkgPT09IHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXQuYXBwbHkoXG4gICAgICAgICAgICAgICAgdGhhdCxcbiAgICAgICAgICAgICAgICBhcmdzLmNvbmNhdChzbGljZS5jYWxsKGFyZ3VtZW50cykpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHZhciBib3VuZExlbmd0aCA9IE1hdGgubWF4KDAsIHRhcmdldC5sZW5ndGggLSBhcmdzLmxlbmd0aCk7XG4gICAgdmFyIGJvdW5kQXJncyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYm91bmRMZW5ndGg7IGkrKykge1xuICAgICAgICBib3VuZEFyZ3MucHVzaCgnJCcgKyBpKTtcbiAgICB9XG5cbiAgICBib3VuZCA9IEZ1bmN0aW9uKCdiaW5kZXInLCAncmV0dXJuIGZ1bmN0aW9uICgnICsgYm91bmRBcmdzLmpvaW4oJywnKSArICcpeyByZXR1cm4gYmluZGVyLmFwcGx5KHRoaXMsYXJndW1lbnRzKTsgfScpKGJpbmRlcik7XG5cbiAgICBpZiAodGFyZ2V0LnByb3RvdHlwZSkge1xuICAgICAgICB2YXIgRW1wdHkgPSBmdW5jdGlvbiBFbXB0eSgpIHt9O1xuICAgICAgICBFbXB0eS5wcm90b3R5cGUgPSB0YXJnZXQucHJvdG90eXBlO1xuICAgICAgICBib3VuZC5wcm90b3R5cGUgPSBuZXcgRW1wdHkoKTtcbiAgICAgICAgRW1wdHkucHJvdG90eXBlID0gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gYm91bmQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Z1bmN0aW9uLWJpbmQvaW1wbGVtZW50YXRpb24uanNcbi8vIG1vZHVsZSBpZCA9IDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZXMyMDE1Jyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZXMtdG8tcHJpbWl0aXZlL2VzNi5qc1xuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbnZhciBoYXNTeW1ib2xzID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSAnc3ltYm9sJztcblxudmFyIGlzUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9oZWxwZXJzL2lzUHJpbWl0aXZlJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJ2lzLWNhbGxhYmxlJyk7XG52YXIgaXNEYXRlID0gcmVxdWlyZSgnaXMtZGF0ZS1vYmplY3QnKTtcbnZhciBpc1N5bWJvbCA9IHJlcXVpcmUoJ2lzLXN5bWJvbCcpO1xuXG52YXIgb3JkaW5hcnlUb1ByaW1pdGl2ZSA9IGZ1bmN0aW9uIE9yZGluYXJ5VG9QcmltaXRpdmUoTywgaGludCkge1xuXHRpZiAodHlwZW9mIE8gPT09ICd1bmRlZmluZWQnIHx8IE8gPT09IG51bGwpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBtZXRob2Qgb24gJyArIE8pO1xuXHR9XG5cdGlmICh0eXBlb2YgaGludCAhPT0gJ3N0cmluZycgfHwgKGhpbnQgIT09ICdudW1iZXInICYmIGhpbnQgIT09ICdzdHJpbmcnKSkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ2hpbnQgbXVzdCBiZSBcInN0cmluZ1wiIG9yIFwibnVtYmVyXCInKTtcblx0fVxuXHR2YXIgbWV0aG9kTmFtZXMgPSBoaW50ID09PSAnc3RyaW5nJyA/IFsndG9TdHJpbmcnLCAndmFsdWVPZiddIDogWyd2YWx1ZU9mJywgJ3RvU3RyaW5nJ107XG5cdHZhciBtZXRob2QsIHJlc3VsdCwgaTtcblx0Zm9yIChpID0gMDsgaSA8IG1ldGhvZE5hbWVzLmxlbmd0aDsgKytpKSB7XG5cdFx0bWV0aG9kID0gT1ttZXRob2ROYW1lc1tpXV07XG5cdFx0aWYgKGlzQ2FsbGFibGUobWV0aG9kKSkge1xuXHRcdFx0cmVzdWx0ID0gbWV0aG9kLmNhbGwoTyk7XG5cdFx0XHRpZiAoaXNQcmltaXRpdmUocmVzdWx0KSkge1xuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHR0aHJvdyBuZXcgVHlwZUVycm9yKCdObyBkZWZhdWx0IHZhbHVlJyk7XG59O1xuXG52YXIgR2V0TWV0aG9kID0gZnVuY3Rpb24gR2V0TWV0aG9kKE8sIFApIHtcblx0dmFyIGZ1bmMgPSBPW1BdO1xuXHRpZiAoZnVuYyAhPT0gbnVsbCAmJiB0eXBlb2YgZnVuYyAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRpZiAoIWlzQ2FsbGFibGUoZnVuYykpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoZnVuYyArICcgcmV0dXJuZWQgZm9yIHByb3BlcnR5ICcgKyBQICsgJyBvZiBvYmplY3QgJyArIE8gKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG5cdFx0fVxuXHRcdHJldHVybiBmdW5jO1xuXHR9XG5cdHJldHVybiB2b2lkIDA7XG59O1xuXG4vLyBodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtdG9wcmltaXRpdmVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gVG9QcmltaXRpdmUoaW5wdXQpIHtcblx0aWYgKGlzUHJpbWl0aXZlKGlucHV0KSkge1xuXHRcdHJldHVybiBpbnB1dDtcblx0fVxuXHR2YXIgaGludCA9ICdkZWZhdWx0Jztcblx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG5cdFx0aWYgKGFyZ3VtZW50c1sxXSA9PT0gU3RyaW5nKSB7XG5cdFx0XHRoaW50ID0gJ3N0cmluZyc7XG5cdFx0fSBlbHNlIGlmIChhcmd1bWVudHNbMV0gPT09IE51bWJlcikge1xuXHRcdFx0aGludCA9ICdudW1iZXInO1xuXHRcdH1cblx0fVxuXG5cdHZhciBleG90aWNUb1ByaW07XG5cdGlmIChoYXNTeW1ib2xzKSB7XG5cdFx0aWYgKFN5bWJvbC50b1ByaW1pdGl2ZSkge1xuXHRcdFx0ZXhvdGljVG9QcmltID0gR2V0TWV0aG9kKGlucHV0LCBTeW1ib2wudG9QcmltaXRpdmUpO1xuXHRcdH0gZWxzZSBpZiAoaXNTeW1ib2woaW5wdXQpKSB7XG5cdFx0XHRleG90aWNUb1ByaW0gPSBTeW1ib2wucHJvdG90eXBlLnZhbHVlT2Y7XG5cdFx0fVxuXHR9XG5cdGlmICh0eXBlb2YgZXhvdGljVG9QcmltICE9PSAndW5kZWZpbmVkJykge1xuXHRcdHZhciByZXN1bHQgPSBleG90aWNUb1ByaW0uY2FsbChpbnB1dCwgaGludCk7XG5cdFx0aWYgKGlzUHJpbWl0aXZlKHJlc3VsdCkpIHtcblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fVxuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ3VuYWJsZSB0byBjb252ZXJ0IGV4b3RpYyBvYmplY3QgdG8gcHJpbWl0aXZlJyk7XG5cdH1cblx0aWYgKGhpbnQgPT09ICdkZWZhdWx0JyAmJiAoaXNEYXRlKGlucHV0KSB8fCBpc1N5bWJvbChpbnB1dCkpKSB7XG5cdFx0aGludCA9ICdzdHJpbmcnO1xuXHR9XG5cdHJldHVybiBvcmRpbmFyeVRvUHJpbWl0aXZlKGlucHV0LCBoaW50ID09PSAnZGVmYXVsdCcgPyAnbnVtYmVyJyA6IGhpbnQpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy10by1wcmltaXRpdmUvZXMyMDE1LmpzXG4vLyBtb2R1bGUgaWQgPSA0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNQcmltaXRpdmUodmFsdWUpIHtcblx0cmV0dXJuIHZhbHVlID09PSBudWxsIHx8ICh0eXBlb2YgdmFsdWUgIT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0Jyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VzLXRvLXByaW1pdGl2ZS9oZWxwZXJzL2lzUHJpbWl0aXZlLmpzXG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxudmFyIGZuVG9TdHIgPSBGdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmc7XG5cbnZhciBjb25zdHJ1Y3RvclJlZ2V4ID0gL15cXHMqY2xhc3NcXGIvO1xudmFyIGlzRVM2Q2xhc3NGbiA9IGZ1bmN0aW9uIGlzRVM2Q2xhc3NGdW5jdGlvbih2YWx1ZSkge1xuXHR0cnkge1xuXHRcdHZhciBmblN0ciA9IGZuVG9TdHIuY2FsbCh2YWx1ZSk7XG5cdFx0cmV0dXJuIGNvbnN0cnVjdG9yUmVnZXgudGVzdChmblN0cik7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRyZXR1cm4gZmFsc2U7IC8vIG5vdCBhIGZ1bmN0aW9uXG5cdH1cbn07XG5cbnZhciB0cnlGdW5jdGlvbk9iamVjdCA9IGZ1bmN0aW9uIHRyeUZ1bmN0aW9uVG9TdHIodmFsdWUpIHtcblx0dHJ5IHtcblx0XHRpZiAoaXNFUzZDbGFzc0ZuKHZhbHVlKSkgeyByZXR1cm4gZmFsc2U7IH1cblx0XHRmblRvU3RyLmNhbGwodmFsdWUpO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbnZhciBmbkNsYXNzID0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbnZhciBnZW5DbGFzcyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXSc7XG52YXIgaGFzVG9TdHJpbmdUYWcgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBTeW1ib2wudG9TdHJpbmdUYWcgPT09ICdzeW1ib2wnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQ2FsbGFibGUodmFsdWUpIHtcblx0aWYgKCF2YWx1ZSkgeyByZXR1cm4gZmFsc2U7IH1cblx0aWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnKSB7IHJldHVybiBmYWxzZTsgfVxuXHRpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nICYmICF2YWx1ZS5wcm90b3R5cGUpIHsgcmV0dXJuIHRydWU7IH1cblx0aWYgKGhhc1RvU3RyaW5nVGFnKSB7IHJldHVybiB0cnlGdW5jdGlvbk9iamVjdCh2YWx1ZSk7IH1cblx0aWYgKGlzRVM2Q2xhc3NGbih2YWx1ZSkpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdHZhciBzdHJDbGFzcyA9IHRvU3RyLmNhbGwodmFsdWUpO1xuXHRyZXR1cm4gc3RyQ2xhc3MgPT09IGZuQ2xhc3MgfHwgc3RyQ2xhc3MgPT09IGdlbkNsYXNzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9pcy1jYWxsYWJsZS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbnZhciBnZXREYXkgPSBEYXRlLnByb3RvdHlwZS5nZXREYXk7XG52YXIgdHJ5RGF0ZU9iamVjdCA9IGZ1bmN0aW9uIHRyeURhdGVPYmplY3QodmFsdWUpIHtcblx0dHJ5IHtcblx0XHRnZXREYXkuY2FsbCh2YWx1ZSk7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn07XG5cbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgZGF0ZUNsYXNzID0gJ1tvYmplY3QgRGF0ZV0nO1xudmFyIGhhc1RvU3RyaW5nVGFnID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgU3ltYm9sLnRvU3RyaW5nVGFnID09PSAnc3ltYm9sJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0RhdGVPYmplY3QodmFsdWUpIHtcblx0aWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcgfHwgdmFsdWUgPT09IG51bGwpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdHJldHVybiBoYXNUb1N0cmluZ1RhZyA/IHRyeURhdGVPYmplY3QodmFsdWUpIDogdG9TdHIuY2FsbCh2YWx1ZSkgPT09IGRhdGVDbGFzcztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaXMtZGF0ZS1vYmplY3QvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIGhhc1N5bWJvbHMgPSByZXF1aXJlKCdoYXMtc3ltYm9scycpKCk7XG5cbmlmIChoYXNTeW1ib2xzKSB7XG5cdHZhciBzeW1Ub1N0ciA9IFN5bWJvbC5wcm90b3R5cGUudG9TdHJpbmc7XG5cdHZhciBzeW1TdHJpbmdSZWdleCA9IC9eU3ltYm9sXFwoLipcXCkkLztcblx0dmFyIGlzU3ltYm9sT2JqZWN0ID0gZnVuY3Rpb24gaXNSZWFsU3ltYm9sT2JqZWN0KHZhbHVlKSB7XG5cdFx0aWYgKHR5cGVvZiB2YWx1ZS52YWx1ZU9mKCkgIT09ICdzeW1ib2wnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHJldHVybiBzeW1TdHJpbmdSZWdleC50ZXN0KHN5bVRvU3RyLmNhbGwodmFsdWUpKTtcblx0fTtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG5cdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N5bWJvbCcpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRpZiAodG9TdHIuY2FsbCh2YWx1ZSkgIT09ICdbb2JqZWN0IFN5bWJvbF0nKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHRyeSB7XG5cdFx0XHRyZXR1cm4gaXNTeW1ib2xPYmplY3QodmFsdWUpO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH07XG59IGVsc2Uge1xuXG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNTeW1ib2wodmFsdWUpIHtcblx0XHQvLyB0aGlzIGVudmlyb25tZW50IGRvZXMgbm90IHN1cHBvcnQgU3ltYm9scy5cblx0XHRyZXR1cm4gZmFsc2UgJiYgdmFsdWU7XG5cdH07XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaXMtc3ltYm9sL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxudmFyIG9yaWdTeW1ib2wgPSBnbG9iYWwuU3ltYm9sO1xudmFyIGhhc1N5bWJvbFNoYW0gPSByZXF1aXJlKCcuL3NoYW1zJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaGFzTmF0aXZlU3ltYm9scygpIHtcblx0aWYgKHR5cGVvZiBvcmlnU3ltYm9sICE9PSAnZnVuY3Rpb24nKSB7IHJldHVybiBmYWxzZTsgfVxuXHRpZiAodHlwZW9mIFN5bWJvbCAhPT0gJ2Z1bmN0aW9uJykgeyByZXR1cm4gZmFsc2U7IH1cblx0aWYgKHR5cGVvZiBvcmlnU3ltYm9sKCdmb28nKSAhPT0gJ3N5bWJvbCcpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdGlmICh0eXBlb2YgU3ltYm9sKCdiYXInKSAhPT0gJ3N5bWJvbCcpIHsgcmV0dXJuIGZhbHNlOyB9XG5cblx0cmV0dXJuIGhhc1N5bWJvbFNoYW0oKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaGFzLXN5bWJvbHMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKiBlc2xpbnQgY29tcGxleGl0eTogWzIsIDE3XSwgbWF4LXN0YXRlbWVudHM6IFsyLCAzM10gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaGFzU3ltYm9scygpIHtcblx0aWYgKHR5cGVvZiBTeW1ib2wgIT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgIT09ICdmdW5jdGlvbicpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdGlmICh0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSAnc3ltYm9sJykgeyByZXR1cm4gdHJ1ZTsgfVxuXG5cdHZhciBvYmogPSB7fTtcblx0dmFyIHN5bSA9IFN5bWJvbCgndGVzdCcpO1xuXHR2YXIgc3ltT2JqID0gT2JqZWN0KHN5bSk7XG5cdGlmICh0eXBlb2Ygc3ltID09PSAnc3RyaW5nJykgeyByZXR1cm4gZmFsc2U7IH1cblxuXHRpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHN5bSkgIT09ICdbb2JqZWN0IFN5bWJvbF0nKSB7IHJldHVybiBmYWxzZTsgfVxuXHRpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHN5bU9iaikgIT09ICdbb2JqZWN0IFN5bWJvbF0nKSB7IHJldHVybiBmYWxzZTsgfVxuXG5cdC8vIHRlbXAgZGlzYWJsZWQgcGVyIGh0dHBzOi8vZ2l0aHViLmNvbS9samhhcmIvb2JqZWN0LmFzc2lnbi9pc3N1ZXMvMTdcblx0Ly8gaWYgKHN5bSBpbnN0YW5jZW9mIFN5bWJvbCkgeyByZXR1cm4gZmFsc2U7IH1cblx0Ly8gdGVtcCBkaXNhYmxlZCBwZXIgaHR0cHM6Ly9naXRodWIuY29tL1dlYlJlZmxlY3Rpb24vZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzL2lzc3Vlcy80XG5cdC8vIGlmICghKHN5bU9iaiBpbnN0YW5jZW9mIFN5bWJvbCkpIHsgcmV0dXJuIGZhbHNlOyB9XG5cblx0Ly8gaWYgKHR5cGVvZiBTeW1ib2wucHJvdG90eXBlLnRvU3RyaW5nICE9PSAnZnVuY3Rpb24nKSB7IHJldHVybiBmYWxzZTsgfVxuXHQvLyBpZiAoU3RyaW5nKHN5bSkgIT09IFN5bWJvbC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChzeW0pKSB7IHJldHVybiBmYWxzZTsgfVxuXG5cdHZhciBzeW1WYWwgPSA0Mjtcblx0b2JqW3N5bV0gPSBzeW1WYWw7XG5cdGZvciAoc3ltIGluIG9iaikgeyByZXR1cm4gZmFsc2U7IH0gLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuXHRpZiAodHlwZW9mIE9iamVjdC5rZXlzID09PSAnZnVuY3Rpb24nICYmIE9iamVjdC5rZXlzKG9iaikubGVuZ3RoICE9PSAwKSB7IHJldHVybiBmYWxzZTsgfVxuXG5cdGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgPT09ICdmdW5jdGlvbicgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMob2JqKS5sZW5ndGggIT09IDApIHsgcmV0dXJuIGZhbHNlOyB9XG5cblx0dmFyIHN5bXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iaik7XG5cdGlmIChzeW1zLmxlbmd0aCAhPT0gMSB8fCBzeW1zWzBdICE9PSBzeW0pIHsgcmV0dXJuIGZhbHNlOyB9XG5cblx0aWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwob2JqLCBzeW0pKSB7IHJldHVybiBmYWxzZTsgfVxuXG5cdGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIHN5bSk7XG5cdFx0aWYgKGRlc2NyaXB0b3IudmFsdWUgIT09IHN5bVZhbCB8fCBkZXNjcmlwdG9yLmVudW1lcmFibGUgIT09IHRydWUpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdH1cblxuXHRyZXR1cm4gdHJ1ZTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaGFzLXN5bWJvbHMvc2hhbXMuanNcbi8vIG1vZHVsZSBpZCA9IDU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKiBnbG9iYWxzXG5cdFNldCxcblx0TWFwLFxuXHRXZWFrU2V0LFxuXHRXZWFrTWFwLFxuXG5cdFByb21pc2UsXG5cblx0U3ltYm9sLFxuXHRQcm94eSxcblxuXHRBdG9taWNzLFxuXHRTaGFyZWRBcnJheUJ1ZmZlcixcblxuXHRBcnJheUJ1ZmZlcixcblx0RGF0YVZpZXcsXG5cdFVpbnQ4QXJyYXksXG5cdEZsb2F0MzJBcnJheSxcblx0RmxvYXQ2NEFycmF5LFxuXHRJbnQ4QXJyYXksXG5cdEludDE2QXJyYXksXG5cdEludDMyQXJyYXksXG5cdFVpbnQ4Q2xhbXBlZEFycmF5LFxuXHRVaW50MTZBcnJheSxcblx0VWludDMyQXJyYXksXG4qL1xuXG52YXIgdW5kZWZpbmVkOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNoYWRvdy1yZXN0cmljdGVkLW5hbWVzXG5cbnZhciBUaHJvd1R5cGVFcnJvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Jcblx0PyAoZnVuY3Rpb24gKCkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihhcmd1bWVudHMsICdjYWxsZWUnKS5nZXQ7IH0oKSlcblx0OiBmdW5jdGlvbiAoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoKTsgfTtcblxudmFyIGhhc1N5bWJvbHMgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09ICdzeW1ib2wnO1xuXG52YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHguX19wcm90b19fOyB9OyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXByb3RvXG5cbnZhciBnZW5lcmF0b3I7IC8vID0gZnVuY3Rpb24gKiAoKSB7fTtcbnZhciBnZW5lcmF0b3JGdW5jdGlvbiA9IGdlbmVyYXRvciA/IGdldFByb3RvKGdlbmVyYXRvcikgOiB1bmRlZmluZWQ7XG52YXIgYXN5bmNGbjsgLy8gYXN5bmMgZnVuY3Rpb24oKSB7fTtcbnZhciBhc3luY0Z1bmN0aW9uID0gYXN5bmNGbiA/IGFzeW5jRm4uY29uc3RydWN0b3IgOiB1bmRlZmluZWQ7XG52YXIgYXN5bmNHZW47IC8vIGFzeW5jIGZ1bmN0aW9uICogKCkge307XG52YXIgYXN5bmNHZW5GdW5jdGlvbiA9IGFzeW5jR2VuID8gZ2V0UHJvdG8oYXN5bmNHZW4pIDogdW5kZWZpbmVkO1xudmFyIGFzeW5jR2VuSXRlcmF0b3IgPSBhc3luY0dlbiA/IGFzeW5jR2VuKCkgOiB1bmRlZmluZWQ7XG5cbnZhciBUeXBlZEFycmF5ID0gdHlwZW9mIFVpbnQ4QXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogZ2V0UHJvdG8oVWludDhBcnJheSk7XG5cbnZhciBJTlRSSU5TSUNTID0ge1xuXHQnJCAlQXJyYXklJzogQXJyYXksXG5cdCckICVBcnJheUJ1ZmZlciUnOiB0eXBlb2YgQXJyYXlCdWZmZXIgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogQXJyYXlCdWZmZXIsXG5cdCckICVBcnJheUJ1ZmZlclByb3RvdHlwZSUnOiB0eXBlb2YgQXJyYXlCdWZmZXIgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogQXJyYXlCdWZmZXIucHJvdG90eXBlLFxuXHQnJCAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUnOiBoYXNTeW1ib2xzID8gZ2V0UHJvdG8oW11bU3ltYm9sLml0ZXJhdG9yXSgpKSA6IHVuZGVmaW5lZCxcblx0JyQgJUFycmF5UHJvdG90eXBlJSc6IEFycmF5LnByb3RvdHlwZSxcblx0JyQgJUFycmF5UHJvdG9fZW50cmllcyUnOiBBcnJheS5wcm90b3R5cGUuZW50cmllcyxcblx0JyQgJUFycmF5UHJvdG9fZm9yRWFjaCUnOiBBcnJheS5wcm90b3R5cGUuZm9yRWFjaCxcblx0JyQgJUFycmF5UHJvdG9fa2V5cyUnOiBBcnJheS5wcm90b3R5cGUua2V5cyxcblx0JyQgJUFycmF5UHJvdG9fdmFsdWVzJSc6IEFycmF5LnByb3RvdHlwZS52YWx1ZXMsXG5cdCckICVBc3luY0Zyb21TeW5jSXRlcmF0b3JQcm90b3R5cGUlJzogdW5kZWZpbmVkLFxuXHQnJCAlQXN5bmNGdW5jdGlvbiUnOiBhc3luY0Z1bmN0aW9uLFxuXHQnJCAlQXN5bmNGdW5jdGlvblByb3RvdHlwZSUnOiBhc3luY0Z1bmN0aW9uID8gYXN5bmNGdW5jdGlvbi5wcm90b3R5cGUgOiB1bmRlZmluZWQsXG5cdCckICVBc3luY0dlbmVyYXRvciUnOiBhc3luY0dlbiA/IGdldFByb3RvKGFzeW5jR2VuSXRlcmF0b3IpIDogdW5kZWZpbmVkLFxuXHQnJCAlQXN5bmNHZW5lcmF0b3JGdW5jdGlvbiUnOiBhc3luY0dlbkZ1bmN0aW9uLFxuXHQnJCAlQXN5bmNHZW5lcmF0b3JQcm90b3R5cGUlJzogYXN5bmNHZW5GdW5jdGlvbiA/IGFzeW5jR2VuRnVuY3Rpb24ucHJvdG90eXBlIDogdW5kZWZpbmVkLFxuXHQnJCAlQXN5bmNJdGVyYXRvclByb3RvdHlwZSUnOiBhc3luY0dlbkl0ZXJhdG9yICYmIGhhc1N5bWJvbHMgJiYgU3ltYm9sLmFzeW5jSXRlcmF0b3IgPyBhc3luY0dlbkl0ZXJhdG9yW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSgpIDogdW5kZWZpbmVkLFxuXHQnJCAlQXRvbWljcyUnOiB0eXBlb2YgQXRvbWljcyA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBBdG9taWNzLFxuXHQnJCAlQm9vbGVhbiUnOiBCb29sZWFuLFxuXHQnJCAlQm9vbGVhblByb3RvdHlwZSUnOiBCb29sZWFuLnByb3RvdHlwZSxcblx0JyQgJURhdGFWaWV3JSc6IHR5cGVvZiBEYXRhVmlldyA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBEYXRhVmlldyxcblx0JyQgJURhdGFWaWV3UHJvdG90eXBlJSc6IHR5cGVvZiBEYXRhVmlldyA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBEYXRhVmlldy5wcm90b3R5cGUsXG5cdCckICVEYXRlJSc6IERhdGUsXG5cdCckICVEYXRlUHJvdG90eXBlJSc6IERhdGUucHJvdG90eXBlLFxuXHQnJCAlZGVjb2RlVVJJJSc6IGRlY29kZVVSSSxcblx0JyQgJWRlY29kZVVSSUNvbXBvbmVudCUnOiBkZWNvZGVVUklDb21wb25lbnQsXG5cdCckICVlbmNvZGVVUkklJzogZW5jb2RlVVJJLFxuXHQnJCAlZW5jb2RlVVJJQ29tcG9uZW50JSc6IGVuY29kZVVSSUNvbXBvbmVudCxcblx0JyQgJUVycm9yJSc6IEVycm9yLFxuXHQnJCAlRXJyb3JQcm90b3R5cGUlJzogRXJyb3IucHJvdG90eXBlLFxuXHQnJCAlZXZhbCUnOiBldmFsLCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWV2YWxcblx0JyQgJUV2YWxFcnJvciUnOiBFdmFsRXJyb3IsXG5cdCckICVFdmFsRXJyb3JQcm90b3R5cGUlJzogRXZhbEVycm9yLnByb3RvdHlwZSxcblx0JyQgJUZsb2F0MzJBcnJheSUnOiB0eXBlb2YgRmxvYXQzMkFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IEZsb2F0MzJBcnJheSxcblx0JyQgJUZsb2F0MzJBcnJheVByb3RvdHlwZSUnOiB0eXBlb2YgRmxvYXQzMkFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IEZsb2F0MzJBcnJheS5wcm90b3R5cGUsXG5cdCckICVGbG9hdDY0QXJyYXklJzogdHlwZW9mIEZsb2F0NjRBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBGbG9hdDY0QXJyYXksXG5cdCckICVGbG9hdDY0QXJyYXlQcm90b3R5cGUlJzogdHlwZW9mIEZsb2F0NjRBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBGbG9hdDY0QXJyYXkucHJvdG90eXBlLFxuXHQnJCAlRnVuY3Rpb24lJzogRnVuY3Rpb24sXG5cdCckICVGdW5jdGlvblByb3RvdHlwZSUnOiBGdW5jdGlvbi5wcm90b3R5cGUsXG5cdCckICVHZW5lcmF0b3IlJzogZ2VuZXJhdG9yID8gZ2V0UHJvdG8oZ2VuZXJhdG9yKCkpIDogdW5kZWZpbmVkLFxuXHQnJCAlR2VuZXJhdG9yRnVuY3Rpb24lJzogZ2VuZXJhdG9yRnVuY3Rpb24sXG5cdCckICVHZW5lcmF0b3JQcm90b3R5cGUlJzogZ2VuZXJhdG9yRnVuY3Rpb24gPyBnZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgOiB1bmRlZmluZWQsXG5cdCckICVJbnQ4QXJyYXklJzogdHlwZW9mIEludDhBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBJbnQ4QXJyYXksXG5cdCckICVJbnQ4QXJyYXlQcm90b3R5cGUlJzogdHlwZW9mIEludDhBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBJbnQ4QXJyYXkucHJvdG90eXBlLFxuXHQnJCAlSW50MTZBcnJheSUnOiB0eXBlb2YgSW50MTZBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBJbnQxNkFycmF5LFxuXHQnJCAlSW50MTZBcnJheVByb3RvdHlwZSUnOiB0eXBlb2YgSW50MTZBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBJbnQ4QXJyYXkucHJvdG90eXBlLFxuXHQnJCAlSW50MzJBcnJheSUnOiB0eXBlb2YgSW50MzJBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBJbnQzMkFycmF5LFxuXHQnJCAlSW50MzJBcnJheVByb3RvdHlwZSUnOiB0eXBlb2YgSW50MzJBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBJbnQzMkFycmF5LnByb3RvdHlwZSxcblx0JyQgJWlzRmluaXRlJSc6IGlzRmluaXRlLFxuXHQnJCAlaXNOYU4lJzogaXNOYU4sXG5cdCckICVJdGVyYXRvclByb3RvdHlwZSUnOiBoYXNTeW1ib2xzID8gZ2V0UHJvdG8oZ2V0UHJvdG8oW11bU3ltYm9sLml0ZXJhdG9yXSgpKSkgOiB1bmRlZmluZWQsXG5cdCckICVKU09OJSc6IEpTT04sXG5cdCckICVKU09OUGFyc2UlJzogSlNPTi5wYXJzZSxcblx0JyQgJU1hcCUnOiB0eXBlb2YgTWFwID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IE1hcCxcblx0JyQgJU1hcEl0ZXJhdG9yUHJvdG90eXBlJSc6IHR5cGVvZiBNYXAgPT09ICd1bmRlZmluZWQnIHx8ICFoYXNTeW1ib2xzID8gdW5kZWZpbmVkIDogZ2V0UHJvdG8obmV3IE1hcCgpW1N5bWJvbC5pdGVyYXRvcl0oKSksXG5cdCckICVNYXBQcm90b3R5cGUlJzogdHlwZW9mIE1hcCA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBNYXAucHJvdG90eXBlLFxuXHQnJCAlTWF0aCUnOiBNYXRoLFxuXHQnJCAlTnVtYmVyJSc6IE51bWJlcixcblx0JyQgJU51bWJlclByb3RvdHlwZSUnOiBOdW1iZXIucHJvdG90eXBlLFxuXHQnJCAlT2JqZWN0JSc6IE9iamVjdCxcblx0JyQgJU9iamVjdFByb3RvdHlwZSUnOiBPYmplY3QucHJvdG90eXBlLFxuXHQnJCAlT2JqUHJvdG9fdG9TdHJpbmclJzogT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyxcblx0JyQgJU9ialByb3RvX3ZhbHVlT2YlJzogT2JqZWN0LnByb3RvdHlwZS52YWx1ZU9mLFxuXHQnJCAlcGFyc2VGbG9hdCUnOiBwYXJzZUZsb2F0LFxuXHQnJCAlcGFyc2VJbnQlJzogcGFyc2VJbnQsXG5cdCckICVQcm9taXNlJSc6IHR5cGVvZiBQcm9taXNlID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFByb21pc2UsXG5cdCckICVQcm9taXNlUHJvdG90eXBlJSc6IHR5cGVvZiBQcm9taXNlID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFByb21pc2UucHJvdG90eXBlLFxuXHQnJCAlUHJvbWlzZVByb3RvX3RoZW4lJzogdHlwZW9mIFByb21pc2UgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogUHJvbWlzZS5wcm90b3R5cGUudGhlbixcblx0JyQgJVByb21pc2VfYWxsJSc6IHR5cGVvZiBQcm9taXNlID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFByb21pc2UuYWxsLFxuXHQnJCAlUHJvbWlzZV9yZWplY3QlJzogdHlwZW9mIFByb21pc2UgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogUHJvbWlzZS5yZWplY3QsXG5cdCckICVQcm9taXNlX3Jlc29sdmUlJzogdHlwZW9mIFByb21pc2UgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogUHJvbWlzZS5yZXNvbHZlLFxuXHQnJCAlUHJveHklJzogdHlwZW9mIFByb3h5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFByb3h5LFxuXHQnJCAlUmFuZ2VFcnJvciUnOiBSYW5nZUVycm9yLFxuXHQnJCAlUmFuZ2VFcnJvclByb3RvdHlwZSUnOiBSYW5nZUVycm9yLnByb3RvdHlwZSxcblx0JyQgJVJlZmVyZW5jZUVycm9yJSc6IFJlZmVyZW5jZUVycm9yLFxuXHQnJCAlUmVmZXJlbmNlRXJyb3JQcm90b3R5cGUlJzogUmVmZXJlbmNlRXJyb3IucHJvdG90eXBlLFxuXHQnJCAlUmVmbGVjdCUnOiB0eXBlb2YgUmVmbGVjdCA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBSZWZsZWN0LFxuXHQnJCAlUmVnRXhwJSc6IFJlZ0V4cCxcblx0JyQgJVJlZ0V4cFByb3RvdHlwZSUnOiBSZWdFeHAucHJvdG90eXBlLFxuXHQnJCAlU2V0JSc6IHR5cGVvZiBTZXQgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogU2V0LFxuXHQnJCAlU2V0SXRlcmF0b3JQcm90b3R5cGUlJzogdHlwZW9mIFNldCA9PT0gJ3VuZGVmaW5lZCcgfHwgIWhhc1N5bWJvbHMgPyB1bmRlZmluZWQgOiBnZXRQcm90byhuZXcgU2V0KClbU3ltYm9sLml0ZXJhdG9yXSgpKSxcblx0JyQgJVNldFByb3RvdHlwZSUnOiB0eXBlb2YgU2V0ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFNldC5wcm90b3R5cGUsXG5cdCckICVTaGFyZWRBcnJheUJ1ZmZlciUnOiB0eXBlb2YgU2hhcmVkQXJyYXlCdWZmZXIgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogU2hhcmVkQXJyYXlCdWZmZXIsXG5cdCckICVTaGFyZWRBcnJheUJ1ZmZlclByb3RvdHlwZSUnOiB0eXBlb2YgU2hhcmVkQXJyYXlCdWZmZXIgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogU2hhcmVkQXJyYXlCdWZmZXIucHJvdG90eXBlLFxuXHQnJCAlU3RyaW5nJSc6IFN0cmluZyxcblx0JyQgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJSc6IGhhc1N5bWJvbHMgPyBnZXRQcm90bygnJ1tTeW1ib2wuaXRlcmF0b3JdKCkpIDogdW5kZWZpbmVkLFxuXHQnJCAlU3RyaW5nUHJvdG90eXBlJSc6IFN0cmluZy5wcm90b3R5cGUsXG5cdCckICVTeW1ib2wlJzogaGFzU3ltYm9scyA/IFN5bWJvbCA6IHVuZGVmaW5lZCxcblx0JyQgJVN5bWJvbFByb3RvdHlwZSUnOiBoYXNTeW1ib2xzID8gU3ltYm9sLnByb3RvdHlwZSA6IHVuZGVmaW5lZCxcblx0JyQgJVN5bnRheEVycm9yJSc6IFN5bnRheEVycm9yLFxuXHQnJCAlU3ludGF4RXJyb3JQcm90b3R5cGUlJzogU3ludGF4RXJyb3IucHJvdG90eXBlLFxuXHQnJCAlVGhyb3dUeXBlRXJyb3IlJzogVGhyb3dUeXBlRXJyb3IsXG5cdCckICVUeXBlZEFycmF5JSc6IFR5cGVkQXJyYXksXG5cdCckICVUeXBlZEFycmF5UHJvdG90eXBlJSc6IFR5cGVkQXJyYXkgPyBUeXBlZEFycmF5LnByb3RvdHlwZSA6IHVuZGVmaW5lZCxcblx0JyQgJVR5cGVFcnJvciUnOiBUeXBlRXJyb3IsXG5cdCckICVUeXBlRXJyb3JQcm90b3R5cGUlJzogVHlwZUVycm9yLnByb3RvdHlwZSxcblx0JyQgJVVpbnQ4QXJyYXklJzogdHlwZW9mIFVpbnQ4QXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogVWludDhBcnJheSxcblx0JyQgJVVpbnQ4QXJyYXlQcm90b3R5cGUlJzogdHlwZW9mIFVpbnQ4QXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogVWludDhBcnJheS5wcm90b3R5cGUsXG5cdCckICVVaW50OENsYW1wZWRBcnJheSUnOiB0eXBlb2YgVWludDhDbGFtcGVkQXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogVWludDhDbGFtcGVkQXJyYXksXG5cdCckICVVaW50OENsYW1wZWRBcnJheVByb3RvdHlwZSUnOiB0eXBlb2YgVWludDhDbGFtcGVkQXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogVWludDhDbGFtcGVkQXJyYXkucHJvdG90eXBlLFxuXHQnJCAlVWludDE2QXJyYXklJzogdHlwZW9mIFVpbnQxNkFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFVpbnQxNkFycmF5LFxuXHQnJCAlVWludDE2QXJyYXlQcm90b3R5cGUlJzogdHlwZW9mIFVpbnQxNkFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFVpbnQxNkFycmF5LnByb3RvdHlwZSxcblx0JyQgJVVpbnQzMkFycmF5JSc6IHR5cGVvZiBVaW50MzJBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBVaW50MzJBcnJheSxcblx0JyQgJVVpbnQzMkFycmF5UHJvdG90eXBlJSc6IHR5cGVvZiBVaW50MzJBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBVaW50MzJBcnJheS5wcm90b3R5cGUsXG5cdCckICVVUklFcnJvciUnOiBVUklFcnJvcixcblx0JyQgJVVSSUVycm9yUHJvdG90eXBlJSc6IFVSSUVycm9yLnByb3RvdHlwZSxcblx0JyQgJVdlYWtNYXAlJzogdHlwZW9mIFdlYWtNYXAgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogV2Vha01hcCxcblx0JyQgJVdlYWtNYXBQcm90b3R5cGUlJzogdHlwZW9mIFdlYWtNYXAgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogV2Vha01hcC5wcm90b3R5cGUsXG5cdCckICVXZWFrU2V0JSc6IHR5cGVvZiBXZWFrU2V0ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFdlYWtTZXQsXG5cdCckICVXZWFrU2V0UHJvdG90eXBlJSc6IHR5cGVvZiBXZWFrU2V0ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFdlYWtTZXQucHJvdG90eXBlXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIEdldEludHJpbnNpYyhuYW1lLCBhbGxvd01pc3NpbmcpIHtcblx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIHR5cGVvZiBhbGxvd01pc3NpbmcgIT09ICdib29sZWFuJykge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ1wiYWxsb3dNaXNzaW5nXCIgYXJndW1lbnQgbXVzdCBiZSBhIGJvb2xlYW4nKTtcblx0fVxuXG5cdHZhciBrZXkgPSAnJCAnICsgbmFtZTtcblx0aWYgKCEoa2V5IGluIElOVFJJTlNJQ1MpKSB7XG5cdFx0dGhyb3cgbmV3IFN5bnRheEVycm9yKCdpbnRyaW5zaWMgJyArIG5hbWUgKyAnIGRvZXMgbm90IGV4aXN0IScpO1xuXHR9XG5cblx0Ly8gaXN0YW5idWwgaWdub3JlIGlmIC8vIGhvcGVmdWxseSB0aGlzIGlzIGltcG9zc2libGUgdG8gdGVzdCA6LSlcblx0aWYgKHR5cGVvZiBJTlRSSU5TSUNTW2tleV0gPT09ICd1bmRlZmluZWQnICYmICFhbGxvd01pc3NpbmcpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdpbnRyaW5zaWMgJyArIG5hbWUgKyAnIGV4aXN0cywgYnV0IGlzIG5vdCBhdmFpbGFibGUuIFBsZWFzZSBmaWxlIGFuIGlzc3VlIScpO1xuXHR9XG5cdHJldHVybiBJTlRSSU5TSUNTW2tleV07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VzLWFic3RyYWN0L0dldEludHJpbnNpYy5qc1xuLy8gbW9kdWxlIGlkID0gNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbnZhciBHZXRJbnRyaW5zaWMgPSByZXF1aXJlKCcuLi9HZXRJbnRyaW5zaWMnKTtcblxudmFyICRUeXBlRXJyb3IgPSBHZXRJbnRyaW5zaWMoJyVUeXBlRXJyb3IlJyk7XG52YXIgJFN5bnRheEVycm9yID0gR2V0SW50cmluc2ljKCclU3ludGF4RXJyb3IlJyk7XG5cbnZhciBoYXMgPSByZXF1aXJlKCdoYXMnKTtcblxudmFyIHByZWRpY2F0ZXMgPSB7XG4gIC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1wcm9wZXJ0eS1kZXNjcmlwdG9yLXNwZWNpZmljYXRpb24tdHlwZVxuICAnUHJvcGVydHkgRGVzY3JpcHRvcic6IGZ1bmN0aW9uIGlzUHJvcGVydHlEZXNjcmlwdG9yKEVTLCBEZXNjKSB7XG4gICAgaWYgKEVTLlR5cGUoRGVzYykgIT09ICdPYmplY3QnKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHZhciBhbGxvd2VkID0ge1xuICAgICAgJ1tbQ29uZmlndXJhYmxlXV0nOiB0cnVlLFxuICAgICAgJ1tbRW51bWVyYWJsZV1dJzogdHJ1ZSxcbiAgICAgICdbW0dldF1dJzogdHJ1ZSxcbiAgICAgICdbW1NldF1dJzogdHJ1ZSxcbiAgICAgICdbW1ZhbHVlXV0nOiB0cnVlLFxuICAgICAgJ1tbV3JpdGFibGVdXSc6IHRydWVcbiAgICB9O1xuXG4gICAgZm9yICh2YXIga2V5IGluIERlc2MpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgaWYgKGhhcyhEZXNjLCBrZXkpICYmICFhbGxvd2VkW2tleV0pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBpc0RhdGEgPSBoYXMoRGVzYywgJ1tbVmFsdWVdXScpO1xuICAgIHZhciBJc0FjY2Vzc29yID0gaGFzKERlc2MsICdbW0dldF1dJykgfHwgaGFzKERlc2MsICdbW1NldF1dJyk7XG4gICAgaWYgKGlzRGF0YSAmJiBJc0FjY2Vzc29yKSB7XG4gICAgICB0aHJvdyBuZXcgJFR5cGVFcnJvcignUHJvcGVydHkgRGVzY3JpcHRvcnMgbWF5IG5vdCBiZSBib3RoIGFjY2Vzc29yIGFuZCBkYXRhIGRlc2NyaXB0b3JzJyk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGFzc2VydFJlY29yZChFUywgcmVjb3JkVHlwZSwgYXJndW1lbnROYW1lLCB2YWx1ZSkge1xuICB2YXIgcHJlZGljYXRlID0gcHJlZGljYXRlc1tyZWNvcmRUeXBlXTtcbiAgaWYgKHR5cGVvZiBwcmVkaWNhdGUgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgJFN5bnRheEVycm9yKCd1bmtub3duIHJlY29yZCB0eXBlOiAnICsgcmVjb3JkVHlwZSk7XG4gIH1cbiAgaWYgKCFwcmVkaWNhdGUoRVMsIHZhbHVlKSkge1xuICAgIHRocm93IG5ldyAkVHlwZUVycm9yKGFyZ3VtZW50TmFtZSArICcgbXVzdCBiZSBhICcgKyByZWNvcmRUeXBlKTtcbiAgfVxuICBjb25zb2xlLmxvZyhwcmVkaWNhdGUoRVMsIHZhbHVlKSwgdmFsdWUpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy1hYnN0cmFjdC9oZWxwZXJzL2Fzc2VydFJlY29yZC5qc1xuLy8gbW9kdWxlIGlkID0gNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJtb2R1bGUuZXhwb3J0cyA9IE51bWJlci5pc05hTiB8fCBmdW5jdGlvbiBpc05hTihhKSB7XG5cdHJldHVybiBhICE9PSBhO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy1hYnN0cmFjdC9oZWxwZXJzL2lzTmFOLmpzXG4vLyBtb2R1bGUgaWQgPSA1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsInZhciAkaXNOYU4gPSBOdW1iZXIuaXNOYU4gfHwgZnVuY3Rpb24gKGEpIHsgcmV0dXJuIGEgIT09IGE7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gTnVtYmVyLmlzRmluaXRlIHx8IGZ1bmN0aW9uICh4KSB7IHJldHVybiB0eXBlb2YgeCA9PT0gJ251bWJlcicgJiYgISRpc05hTih4KSAmJiB4ICE9PSBJbmZpbml0eSAmJiB4ICE9PSAtSW5maW5pdHk7IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZXMtYWJzdHJhY3QvaGVscGVycy9pc0Zpbml0ZS5qc1xuLy8gbW9kdWxlIGlkID0gNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJ2YXIgYmluZCA9IHJlcXVpcmUoJ2Z1bmN0aW9uLWJpbmQnKTtcbnZhciBoYXMgPSBiaW5kLmNhbGwoRnVuY3Rpb24uY2FsbCwgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG5cbnZhciAkYXNzaWduID0gT2JqZWN0LmFzc2lnbjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2UpIHtcblx0aWYgKCRhc3NpZ24pIHtcblx0XHRyZXR1cm4gJGFzc2lnbih0YXJnZXQsIHNvdXJjZSk7XG5cdH1cblxuXHRmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG5cdFx0aWYgKGhhcyhzb3VyY2UsIGtleSkpIHtcblx0XHRcdHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG5cdFx0fVxuXHR9XG5cdHJldHVybiB0YXJnZXQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VzLWFic3RyYWN0L2hlbHBlcnMvYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSA2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2lnbihudW1iZXIpIHtcblx0cmV0dXJuIG51bWJlciA+PSAwID8gMSA6IC0xO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy1hYnN0cmFjdC9oZWxwZXJzL3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBtb2QobnVtYmVyLCBtb2R1bG8pIHtcblx0dmFyIHJlbWFpbiA9IG51bWJlciAlIG1vZHVsbztcblx0cmV0dXJuIE1hdGguZmxvb3IocmVtYWluID49IDAgPyByZW1haW4gOiByZW1haW4gKyBtb2R1bG8pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy1hYnN0cmFjdC9oZWxwZXJzL21vZC5qc1xuLy8gbW9kdWxlIGlkID0gNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzUHJpbWl0aXZlKHZhbHVlKSB7XG5cdHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCAodHlwZW9mIHZhbHVlICE9PSAnZnVuY3Rpb24nICYmIHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy1hYnN0cmFjdC9oZWxwZXJzL2lzUHJpbWl0aXZlLmpzXG4vLyBtb2R1bGUgaWQgPSA2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxudmFyIEdldEludHJpbnNpYyA9IHJlcXVpcmUoJy4vR2V0SW50cmluc2ljJyk7XG5cbnZhciAkT2JqZWN0ID0gR2V0SW50cmluc2ljKCclT2JqZWN0JScpO1xudmFyICRUeXBlRXJyb3IgPSBHZXRJbnRyaW5zaWMoJyVUeXBlRXJyb3IlJyk7XG52YXIgJFN0cmluZyA9IEdldEludHJpbnNpYygnJVN0cmluZyUnKTtcblxudmFyIGFzc2VydFJlY29yZCA9IHJlcXVpcmUoJy4vaGVscGVycy9hc3NlcnRSZWNvcmQnKTtcbnZhciAkaXNOYU4gPSByZXF1aXJlKCcuL2hlbHBlcnMvaXNOYU4nKTtcbnZhciAkaXNGaW5pdGUgPSByZXF1aXJlKCcuL2hlbHBlcnMvaXNGaW5pdGUnKTtcblxudmFyIHNpZ24gPSByZXF1aXJlKCcuL2hlbHBlcnMvc2lnbicpO1xudmFyIG1vZCA9IHJlcXVpcmUoJy4vaGVscGVycy9tb2QnKTtcblxudmFyIElzQ2FsbGFibGUgPSByZXF1aXJlKCdpcy1jYWxsYWJsZScpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnZXMtdG8tcHJpbWl0aXZlL2VzNScpO1xuXG52YXIgaGFzID0gcmVxdWlyZSgnaGFzJyk7XG5cbi8vIGh0dHBzOi8vZXM1LmdpdGh1Yi5pby8jeDlcbnZhciBFUzUgPSB7XG5cdFRvUHJpbWl0aXZlOiB0b1ByaW1pdGl2ZSxcblxuXHRUb0Jvb2xlYW46IGZ1bmN0aW9uIFRvQm9vbGVhbih2YWx1ZSkge1xuXHRcdHJldHVybiAhIXZhbHVlO1xuXHR9LFxuXHRUb051bWJlcjogZnVuY3Rpb24gVG9OdW1iZXIodmFsdWUpIHtcblx0XHRyZXR1cm4gK3ZhbHVlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWltcGxpY2l0LWNvZXJjaW9uXG5cdH0sXG5cdFRvSW50ZWdlcjogZnVuY3Rpb24gVG9JbnRlZ2VyKHZhbHVlKSB7XG5cdFx0dmFyIG51bWJlciA9IHRoaXMuVG9OdW1iZXIodmFsdWUpO1xuXHRcdGlmICgkaXNOYU4obnVtYmVyKSkgeyByZXR1cm4gMDsgfVxuXHRcdGlmIChudW1iZXIgPT09IDAgfHwgISRpc0Zpbml0ZShudW1iZXIpKSB7IHJldHVybiBudW1iZXI7IH1cblx0XHRyZXR1cm4gc2lnbihudW1iZXIpICogTWF0aC5mbG9vcihNYXRoLmFicyhudW1iZXIpKTtcblx0fSxcblx0VG9JbnQzMjogZnVuY3Rpb24gVG9JbnQzMih4KSB7XG5cdFx0cmV0dXJuIHRoaXMuVG9OdW1iZXIoeCkgPj4gMDtcblx0fSxcblx0VG9VaW50MzI6IGZ1bmN0aW9uIFRvVWludDMyKHgpIHtcblx0XHRyZXR1cm4gdGhpcy5Ub051bWJlcih4KSA+Pj4gMDtcblx0fSxcblx0VG9VaW50MTY6IGZ1bmN0aW9uIFRvVWludDE2KHZhbHVlKSB7XG5cdFx0dmFyIG51bWJlciA9IHRoaXMuVG9OdW1iZXIodmFsdWUpO1xuXHRcdGlmICgkaXNOYU4obnVtYmVyKSB8fCBudW1iZXIgPT09IDAgfHwgISRpc0Zpbml0ZShudW1iZXIpKSB7IHJldHVybiAwOyB9XG5cdFx0dmFyIHBvc0ludCA9IHNpZ24obnVtYmVyKSAqIE1hdGguZmxvb3IoTWF0aC5hYnMobnVtYmVyKSk7XG5cdFx0cmV0dXJuIG1vZChwb3NJbnQsIDB4MTAwMDApO1xuXHR9LFxuXHRUb1N0cmluZzogZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUpIHtcblx0XHRyZXR1cm4gJFN0cmluZyh2YWx1ZSk7XG5cdH0sXG5cdFRvT2JqZWN0OiBmdW5jdGlvbiBUb09iamVjdCh2YWx1ZSkge1xuXHRcdHRoaXMuQ2hlY2tPYmplY3RDb2VyY2libGUodmFsdWUpO1xuXHRcdHJldHVybiAkT2JqZWN0KHZhbHVlKTtcblx0fSxcblx0Q2hlY2tPYmplY3RDb2VyY2libGU6IGZ1bmN0aW9uIENoZWNrT2JqZWN0Q29lcmNpYmxlKHZhbHVlLCBvcHRNZXNzYWdlKSB7XG5cdFx0LyoganNoaW50IGVxbnVsbDp0cnVlICovXG5cdFx0aWYgKHZhbHVlID09IG51bGwpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKG9wdE1lc3NhZ2UgfHwgJ0Nhbm5vdCBjYWxsIG1ldGhvZCBvbiAnICsgdmFsdWUpO1xuXHRcdH1cblx0XHRyZXR1cm4gdmFsdWU7XG5cdH0sXG5cdElzQ2FsbGFibGU6IElzQ2FsbGFibGUsXG5cdFNhbWVWYWx1ZTogZnVuY3Rpb24gU2FtZVZhbHVlKHgsIHkpIHtcblx0XHRpZiAoeCA9PT0geSkgeyAvLyAwID09PSAtMCwgYnV0IHRoZXkgYXJlIG5vdCBpZGVudGljYWwuXG5cdFx0XHRpZiAoeCA9PT0gMCkgeyByZXR1cm4gMSAvIHggPT09IDEgLyB5OyB9XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0cmV0dXJuICRpc05hTih4KSAmJiAkaXNOYU4oeSk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi81LjEvI3NlYy04XG5cdFR5cGU6IGZ1bmN0aW9uIFR5cGUoeCkge1xuXHRcdGlmICh4ID09PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gJ051bGwnO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIHggPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRyZXR1cm4gJ1VuZGVmaW5lZCc7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2YgeCA9PT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgeCA9PT0gJ29iamVjdCcpIHtcblx0XHRcdHJldHVybiAnT2JqZWN0Jztcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiB4ID09PSAnbnVtYmVyJykge1xuXHRcdFx0cmV0dXJuICdOdW1iZXInO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIHggPT09ICdib29sZWFuJykge1xuXHRcdFx0cmV0dXJuICdCb29sZWFuJztcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiB4ID09PSAnc3RyaW5nJykge1xuXHRcdFx0cmV0dXJuICdTdHJpbmcnO1xuXHRcdH1cblx0fSxcblxuXHQvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtcHJvcGVydHktZGVzY3JpcHRvci1zcGVjaWZpY2F0aW9uLXR5cGVcblx0SXNQcm9wZXJ0eURlc2NyaXB0b3I6IGZ1bmN0aW9uIElzUHJvcGVydHlEZXNjcmlwdG9yKERlc2MpIHtcblx0XHRpZiAodGhpcy5UeXBlKERlc2MpICE9PSAnT2JqZWN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHR2YXIgYWxsb3dlZCA9IHtcblx0XHRcdCdbW0NvbmZpZ3VyYWJsZV1dJzogdHJ1ZSxcblx0XHRcdCdbW0VudW1lcmFibGVdXSc6IHRydWUsXG5cdFx0XHQnW1tHZXRdXSc6IHRydWUsXG5cdFx0XHQnW1tTZXRdXSc6IHRydWUsXG5cdFx0XHQnW1tWYWx1ZV1dJzogdHJ1ZSxcblx0XHRcdCdbW1dyaXRhYmxlXV0nOiB0cnVlXG5cdFx0fTtcblxuXHRcdGZvciAodmFyIGtleSBpbiBEZXNjKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblx0XHRcdGlmIChoYXMoRGVzYywga2V5KSAmJiAhYWxsb3dlZFtrZXldKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR2YXIgaXNEYXRhID0gaGFzKERlc2MsICdbW1ZhbHVlXV0nKTtcblx0XHR2YXIgSXNBY2Nlc3NvciA9IGhhcyhEZXNjLCAnW1tHZXRdXScpIHx8IGhhcyhEZXNjLCAnW1tTZXRdXScpO1xuXHRcdGlmIChpc0RhdGEgJiYgSXNBY2Nlc3Nvcikge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ1Byb3BlcnR5IERlc2NyaXB0b3JzIG1heSBub3QgYmUgYm90aCBhY2Nlc3NvciBhbmQgZGF0YSBkZXNjcmlwdG9ycycpO1xuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSxcblxuXHQvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNS4xLyNzZWMtOC4xMC4xXG5cdElzQWNjZXNzb3JEZXNjcmlwdG9yOiBmdW5jdGlvbiBJc0FjY2Vzc29yRGVzY3JpcHRvcihEZXNjKSB7XG5cdFx0aWYgKHR5cGVvZiBEZXNjID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGFzc2VydFJlY29yZCh0aGlzLCAnUHJvcGVydHkgRGVzY3JpcHRvcicsICdEZXNjJywgRGVzYyk7XG5cblx0XHRpZiAoIWhhcyhEZXNjLCAnW1tHZXRdXScpICYmICFoYXMoRGVzYywgJ1tbU2V0XV0nKSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi81LjEvI3NlYy04LjEwLjJcblx0SXNEYXRhRGVzY3JpcHRvcjogZnVuY3Rpb24gSXNEYXRhRGVzY3JpcHRvcihEZXNjKSB7XG5cdFx0aWYgKHR5cGVvZiBEZXNjID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGFzc2VydFJlY29yZCh0aGlzLCAnUHJvcGVydHkgRGVzY3JpcHRvcicsICdEZXNjJywgRGVzYyk7XG5cblx0XHRpZiAoIWhhcyhEZXNjLCAnW1tWYWx1ZV1dJykgJiYgIWhhcyhEZXNjLCAnW1tXcml0YWJsZV1dJykpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSxcblxuXHQvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNS4xLyNzZWMtOC4xMC4zXG5cdElzR2VuZXJpY0Rlc2NyaXB0b3I6IGZ1bmN0aW9uIElzR2VuZXJpY0Rlc2NyaXB0b3IoRGVzYykge1xuXHRcdGlmICh0eXBlb2YgRGVzYyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRhc3NlcnRSZWNvcmQodGhpcywgJ1Byb3BlcnR5IERlc2NyaXB0b3InLCAnRGVzYycsIERlc2MpO1xuXG5cdFx0aWYgKCF0aGlzLklzQWNjZXNzb3JEZXNjcmlwdG9yKERlc2MpICYmICF0aGlzLklzRGF0YURlc2NyaXB0b3IoRGVzYykpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fSxcblxuXHQvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNS4xLyNzZWMtOC4xMC40XG5cdEZyb21Qcm9wZXJ0eURlc2NyaXB0b3I6IGZ1bmN0aW9uIEZyb21Qcm9wZXJ0eURlc2NyaXB0b3IoRGVzYykge1xuXHRcdGlmICh0eXBlb2YgRGVzYyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdHJldHVybiBEZXNjO1xuXHRcdH1cblxuXHRcdGFzc2VydFJlY29yZCh0aGlzLCAnUHJvcGVydHkgRGVzY3JpcHRvcicsICdEZXNjJywgRGVzYyk7XG5cblx0XHRpZiAodGhpcy5Jc0RhdGFEZXNjcmlwdG9yKERlc2MpKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHR2YWx1ZTogRGVzY1snW1tWYWx1ZV1dJ10sXG5cdFx0XHRcdHdyaXRhYmxlOiAhIURlc2NbJ1tbV3JpdGFibGVdXSddLFxuXHRcdFx0XHRlbnVtZXJhYmxlOiAhIURlc2NbJ1tbRW51bWVyYWJsZV1dJ10sXG5cdFx0XHRcdGNvbmZpZ3VyYWJsZTogISFEZXNjWydbW0NvbmZpZ3VyYWJsZV1dJ11cblx0XHRcdH07XG5cdFx0fSBlbHNlIGlmICh0aGlzLklzQWNjZXNzb3JEZXNjcmlwdG9yKERlc2MpKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRnZXQ6IERlc2NbJ1tbR2V0XV0nXSxcblx0XHRcdFx0c2V0OiBEZXNjWydbW1NldF1dJ10sXG5cdFx0XHRcdGVudW1lcmFibGU6ICEhRGVzY1snW1tFbnVtZXJhYmxlXV0nXSxcblx0XHRcdFx0Y29uZmlndXJhYmxlOiAhIURlc2NbJ1tbQ29uZmlndXJhYmxlXV0nXVxuXHRcdFx0fTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Zyb21Qcm9wZXJ0eURlc2NyaXB0b3IgbXVzdCBiZSBjYWxsZWQgd2l0aCBhIGZ1bGx5IHBvcHVsYXRlZCBQcm9wZXJ0eSBEZXNjcmlwdG9yJyk7XG5cdFx0fVxuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi81LjEvI3NlYy04LjEwLjVcblx0VG9Qcm9wZXJ0eURlc2NyaXB0b3I6IGZ1bmN0aW9uIFRvUHJvcGVydHlEZXNjcmlwdG9yKE9iaikge1xuXHRcdGlmICh0aGlzLlR5cGUoT2JqKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdUb1Byb3BlcnR5RGVzY3JpcHRvciByZXF1aXJlcyBhbiBvYmplY3QnKTtcblx0XHR9XG5cblx0XHR2YXIgZGVzYyA9IHt9O1xuXHRcdGlmIChoYXMoT2JqLCAnZW51bWVyYWJsZScpKSB7XG5cdFx0XHRkZXNjWydbW0VudW1lcmFibGVdXSddID0gdGhpcy5Ub0Jvb2xlYW4oT2JqLmVudW1lcmFibGUpO1xuXHRcdH1cblx0XHRpZiAoaGFzKE9iaiwgJ2NvbmZpZ3VyYWJsZScpKSB7XG5cdFx0XHRkZXNjWydbW0NvbmZpZ3VyYWJsZV1dJ10gPSB0aGlzLlRvQm9vbGVhbihPYmouY29uZmlndXJhYmxlKTtcblx0XHR9XG5cdFx0aWYgKGhhcyhPYmosICd2YWx1ZScpKSB7XG5cdFx0XHRkZXNjWydbW1ZhbHVlXV0nXSA9IE9iai52YWx1ZTtcblx0XHR9XG5cdFx0aWYgKGhhcyhPYmosICd3cml0YWJsZScpKSB7XG5cdFx0XHRkZXNjWydbW1dyaXRhYmxlXV0nXSA9IHRoaXMuVG9Cb29sZWFuKE9iai53cml0YWJsZSk7XG5cdFx0fVxuXHRcdGlmIChoYXMoT2JqLCAnZ2V0JykpIHtcblx0XHRcdHZhciBnZXR0ZXIgPSBPYmouZ2V0O1xuXHRcdFx0aWYgKHR5cGVvZiBnZXR0ZXIgIT09ICd1bmRlZmluZWQnICYmICF0aGlzLklzQ2FsbGFibGUoZ2V0dGVyKSkge1xuXHRcdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdnZXR0ZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cdFx0XHR9XG5cdFx0XHRkZXNjWydbW0dldF1dJ10gPSBnZXR0ZXI7XG5cdFx0fVxuXHRcdGlmIChoYXMoT2JqLCAnc2V0JykpIHtcblx0XHRcdHZhciBzZXR0ZXIgPSBPYmouc2V0O1xuXHRcdFx0aWYgKHR5cGVvZiBzZXR0ZXIgIT09ICd1bmRlZmluZWQnICYmICF0aGlzLklzQ2FsbGFibGUoc2V0dGVyKSkge1xuXHRcdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignc2V0dGVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXHRcdFx0fVxuXHRcdFx0ZGVzY1snW1tTZXRdXSddID0gc2V0dGVyO1xuXHRcdH1cblxuXHRcdGlmICgoaGFzKGRlc2MsICdbW0dldF1dJykgfHwgaGFzKGRlc2MsICdbW1NldF1dJykpICYmIChoYXMoZGVzYywgJ1tbVmFsdWVdXScpIHx8IGhhcyhkZXNjLCAnW1tXcml0YWJsZV1dJykpKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignSW52YWxpZCBwcm9wZXJ0eSBkZXNjcmlwdG9yLiBDYW5ub3QgYm90aCBzcGVjaWZ5IGFjY2Vzc29ycyBhbmQgYSB2YWx1ZSBvciB3cml0YWJsZSBhdHRyaWJ1dGUnKTtcblx0XHR9XG5cdFx0cmV0dXJuIGRlc2M7XG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRVM1O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VzLWFic3RyYWN0L2VzNS5qc1xuLy8gbW9kdWxlIGlkID0gNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbnZhciBpc1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vaGVscGVycy9pc1ByaW1pdGl2ZScpO1xuXG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJ2lzLWNhbGxhYmxlJyk7XG5cbi8vIGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzUuMS8jc2VjLTguMTIuOFxudmFyIEVTNWludGVybmFsU2xvdHMgPSB7XG5cdCdbW0RlZmF1bHRWYWx1ZV1dJzogZnVuY3Rpb24gKE8pIHtcblx0XHR2YXIgYWN0dWFsSGludDtcblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcblx0XHRcdGFjdHVhbEhpbnQgPSBhcmd1bWVudHNbMV07XG5cdFx0fSBlbHNlIHtcblx0XHRcdGFjdHVhbEhpbnQgPSB0b1N0ci5jYWxsKE8pID09PSAnW29iamVjdCBEYXRlXScgPyBTdHJpbmcgOiBOdW1iZXI7XG5cdFx0fVxuXG5cdFx0aWYgKGFjdHVhbEhpbnQgPT09IFN0cmluZyB8fCBhY3R1YWxIaW50ID09PSBOdW1iZXIpIHtcblx0XHRcdHZhciBtZXRob2RzID0gYWN0dWFsSGludCA9PT0gU3RyaW5nID8gWyd0b1N0cmluZycsICd2YWx1ZU9mJ10gOiBbJ3ZhbHVlT2YnLCAndG9TdHJpbmcnXTtcblx0XHRcdHZhciB2YWx1ZSwgaTtcblx0XHRcdGZvciAoaSA9IDA7IGkgPCBtZXRob2RzLmxlbmd0aDsgKytpKSB7XG5cdFx0XHRcdGlmIChpc0NhbGxhYmxlKE9bbWV0aG9kc1tpXV0pKSB7XG5cdFx0XHRcdFx0dmFsdWUgPSBPW21ldGhvZHNbaV1dKCk7XG5cdFx0XHRcdFx0aWYgKGlzUHJpbWl0aXZlKHZhbHVlKSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignTm8gZGVmYXVsdCB2YWx1ZScpO1xuXHRcdH1cblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdpbnZhbGlkIFtbRGVmYXVsdFZhbHVlXV0gaGludCBzdXBwbGllZCcpO1xuXHR9XG59O1xuXG4vLyBodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi81LjEvI3NlYy05LjFcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gVG9QcmltaXRpdmUoaW5wdXQpIHtcblx0aWYgKGlzUHJpbWl0aXZlKGlucHV0KSkge1xuXHRcdHJldHVybiBpbnB1dDtcblx0fVxuXHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcblx0XHRyZXR1cm4gRVM1aW50ZXJuYWxTbG90c1snW1tEZWZhdWx0VmFsdWVdXSddKGlucHV0LCBhcmd1bWVudHNbMV0pO1xuXHR9XG5cdHJldHVybiBFUzVpbnRlcm5hbFNsb3RzWydbW0RlZmF1bHRWYWx1ZV1dJ10oaW5wdXQpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy10by1wcmltaXRpdmUvZXM1LmpzXG4vLyBtb2R1bGUgaWQgPSA2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxudmFyIGhhcyA9IHJlcXVpcmUoJ2hhcycpO1xudmFyIHJlZ2V4RXhlYyA9IFJlZ0V4cC5wcm90b3R5cGUuZXhlYztcbnZhciBnT1BEID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxudmFyIHRyeVJlZ2V4RXhlY0NhbGwgPSBmdW5jdGlvbiB0cnlSZWdleEV4ZWModmFsdWUpIHtcblx0dHJ5IHtcblx0XHR2YXIgbGFzdEluZGV4ID0gdmFsdWUubGFzdEluZGV4O1xuXHRcdHZhbHVlLmxhc3RJbmRleCA9IDA7XG5cblx0XHRyZWdleEV4ZWMuY2FsbCh2YWx1ZSk7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0gZmluYWxseSB7XG5cdFx0dmFsdWUubGFzdEluZGV4ID0gbGFzdEluZGV4O1xuXHR9XG59O1xudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbnZhciByZWdleENsYXNzID0gJ1tvYmplY3QgUmVnRXhwXSc7XG52YXIgaGFzVG9TdHJpbmdUYWcgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBTeW1ib2wudG9TdHJpbmdUYWcgPT09ICdzeW1ib2wnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzUmVnZXgodmFsdWUpIHtcblx0aWYgKCF2YWx1ZSB8fCB0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cdGlmICghaGFzVG9TdHJpbmdUYWcpIHtcblx0XHRyZXR1cm4gdG9TdHIuY2FsbCh2YWx1ZSkgPT09IHJlZ2V4Q2xhc3M7XG5cdH1cblxuXHR2YXIgZGVzY3JpcHRvciA9IGdPUEQodmFsdWUsICdsYXN0SW5kZXgnKTtcblx0dmFyIGhhc0xhc3RJbmRleERhdGFQcm9wZXJ0eSA9IGRlc2NyaXB0b3IgJiYgaGFzKGRlc2NyaXB0b3IsICd2YWx1ZScpO1xuXHRpZiAoIWhhc0xhc3RJbmRleERhdGFQcm9wZXJ0eSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHJldHVybiB0cnlSZWdleEV4ZWNDYWxsKHZhbHVlKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaXMtcmVnZXgvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgRVMgPSByZXF1aXJlKCdlcy1hYnN0cmFjdC9lczYnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBmaW5kKHByZWRpY2F0ZSkge1xuXHR2YXIgbGlzdCA9IEVTLlRvT2JqZWN0KHRoaXMpO1xuXHR2YXIgbGVuZ3RoID0gRVMuVG9MZW5ndGgobGlzdC5sZW5ndGgpO1xuXHRpZiAoIUVTLklzQ2FsbGFibGUocHJlZGljYXRlKSkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0FycmF5I2ZpbmQ6IHByZWRpY2F0ZSBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcblx0fVxuXHRpZiAobGVuZ3RoID09PSAwKSB7XG5cdFx0cmV0dXJuIHZvaWQgMDtcblx0fVxuXHR2YXIgdGhpc0FyZztcblx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAwKSB7XG5cdFx0dGhpc0FyZyA9IGFyZ3VtZW50c1sxXTtcblx0fVxuXG5cdGZvciAodmFyIGkgPSAwLCB2YWx1ZTsgaSA8IGxlbmd0aDsgaSsrKSB7XG5cdFx0dmFsdWUgPSBsaXN0W2ldO1xuXHRcdC8vIGlubGluZWQgZm9yIHBlcmZvcm1hbmNlOiBpZiAoRVMuQ2FsbChwcmVkaWNhdGUsIHRoaXNBcmcsIFt2YWx1ZSwgaSwgbGlzdF0pKSB7XG5cdFx0aWYgKHByZWRpY2F0ZS5hcHBseSh0aGlzQXJnLCBbdmFsdWUsIGksIGxpc3RdKSkge1xuXHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gdm9pZCAwO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9hcnJheS5wcm90b3R5cGUuZmluZC9pbXBsZW1lbnRhdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZ2V0UG9seWZpbGwoKSB7XG5cdC8vIERldGVjdCBpZiBhbiBpbXBsZW1lbnRhdGlvbiBleGlzdHNcblx0Ly8gRGV0ZWN0IGVhcmx5IGltcGxlbWVudGF0aW9ucyB3aGljaCBza2lwcGVkIGhvbGVzIGluIHNwYXJzZSBhcnJheXNcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNwYXJzZS1hcnJheXNcblx0dmFyIGltcGxlbWVudGVkID0gQXJyYXkucHJvdG90eXBlLmZpbmQgJiYgWywgMV0uZmluZChmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0pICE9PSAxO1xuXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBnbG9iYWwtcmVxdWlyZVxuXHRyZXR1cm4gaW1wbGVtZW50ZWQgPyBBcnJheS5wcm90b3R5cGUuZmluZCA6IHJlcXVpcmUoJy4vaW1wbGVtZW50YXRpb24nKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYXJyYXkucHJvdG90eXBlLmZpbmQvcG9seWZpbGwuanNcbi8vIG1vZHVsZSBpZCA9IDY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZGVmaW5lID0gcmVxdWlyZSgnZGVmaW5lLXByb3BlcnRpZXMnKTtcbnZhciBnZXRQb2x5ZmlsbCA9IHJlcXVpcmUoJy4vcG9seWZpbGwnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzaGltQXJyYXlQcm90b3R5cGVGaW5kKCkge1xuXHR2YXIgcG9seWZpbGwgPSBnZXRQb2x5ZmlsbCgpO1xuXG5cdGRlZmluZShBcnJheS5wcm90b3R5cGUsIHsgZmluZDogcG9seWZpbGwgfSwge1xuXHRcdGZpbmQ6IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBBcnJheS5wcm90b3R5cGUuZmluZCAhPT0gcG9seWZpbGw7XG5cdFx0fVxuXHR9KTtcblxuXHRyZXR1cm4gcG9seWZpbGw7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2FycmF5LnByb3RvdHlwZS5maW5kL3NoaW0uanNcbi8vIG1vZHVsZSBpZCA9IDY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDE3OTIgMTc5MlxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tYXJyb3dzLWFsdFxcXCI+PHRpdGxlPmFycm93cy1hbHQ8L3RpdGxlPjxwYXRoIGQ9XFxcIk0xNDExIDU0MWwtMzU1IDM1NSAzNTUgMzU1IDE0NC0xNDRxMjktMzEgNzAtMTQgMzkgMTcgMzkgNTl2NDQ4cTAgMjYtMTkgNDV0LTQ1IDE5aC00NDhxLTQyIDAtNTktNDAtMTctMzkgMTQtNjlsMTQ0LTE0NC0zNTUtMzU1LTM1NSAzNTUgMTQ0IDE0NHEzMSAzMCAxNCA2OS0xNyA0MC01OSA0MGgtNDQ4cS0yNiAwLTQ1LTE5dC0xOS00NXYtNDQ4cTAtNDIgNDAtNTkgMzktMTcgNjkgMTRsMTQ0IDE0NCAzNTUtMzU1LTM1NS0zNTUtMTQ0IDE0NHEtMTkgMTktNDUgMTktMTIgMC0yNC01LTQwLTE3LTQwLTU5di00NDhxMC0yNiAxOS00NXQ0NS0xOWg0NDhxNDIgMCA1OSA0MCAxNyAzOS0xNCA2OWwtMTQ0IDE0NCAzNTUgMzU1IDM1NS0zNTUtMTQ0LTE0NHEtMzEtMzAtMTQtNjkgMTctNDAgNTktNDBoNDQ4cTI2IDAgNDUgMTl0MTkgNDV2NDQ4cTAgNDItMzkgNTktMTMgNS0yNSA1LTI2IDAtNDUtMTl6XFxcIi8+PC9zeW1ib2w+PHN5bWJvbCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNzkyIDE3OTJcXFwiIGlkPVxcXCJsZXBsYXllci1pY29uLWJhY2t3YXJkXFxcIj48dGl0bGU+YmFja3dhcmQ8L3RpdGxlPjxwYXRoIGQ9XFxcIk0xNjgzIDE0MXExOS0xOSAzMi0xM3QxMyAzMnYxNDcycTAgMjYtMTMgMzJ0LTMyLTEzbC03MTAtNzEwcS04LTktMTMtMTl2NzEwcTAgMjYtMTMgMzJ0LTMyLTEzbC03MTAtNzEwcS0xOS0xOS0xOS00NXQxOS00NWw3MTAtNzEwcTE5LTE5IDMyLTEzdDEzIDMydjcxMHE1LTExIDEzLTE5elxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi1idWxsc2V5ZVxcXCI+PHRpdGxlPmJ1bGxzZXllPC90aXRsZT48cGF0aCBkPVxcXCJNMTE1MiA4OTZxMCAxMDYtNzUgMTgxdC0xODEgNzUtMTgxLTc1LTc1LTE4MSA3NS0xODEgMTgxLTc1IDE4MSA3NSA3NSAxODF6bTEyOCAwcTAtMTU5LTExMi41LTI3MS41dC0yNzEuNS0xMTIuNS0yNzEuNSAxMTIuNS0xMTIuNSAyNzEuNSAxMTIuNSAyNzEuNSAyNzEuNSAxMTIuNSAyNzEuNS0xMTIuNSAxMTIuNS0yNzEuNXptMTI4IDBxMCAyMTItMTUwIDM2MnQtMzYyIDE1MC0zNjItMTUwLTE1MC0zNjIgMTUwLTM2MiAzNjItMTUwIDM2MiAxNTAgMTUwIDM2MnptMTI4IDBxMC0xMzAtNTEtMjQ4LjV0LTEzNi41LTIwNC0yMDQtMTM2LjUtMjQ4LjUtNTEtMjQ4LjUgNTEtMjA0IDEzNi41LTEzNi41IDIwNC01MSAyNDguNSA1MSAyNDguNSAxMzYuNSAyMDQgMjA0IDEzNi41IDI0OC41IDUxIDI0OC41LTUxIDIwNC0xMzYuNSAxMzYuNS0yMDQgNTEtMjQ4LjV6bTEyOCAwcTAgMjA5LTEwMyAzODUuNXQtMjc5LjUgMjc5LjUtMzg1LjUgMTAzLTM4NS41LTEwMy0yNzkuNS0yNzkuNS0xMDMtMzg1LjUgMTAzLTM4NS41IDI3OS41LTI3OS41IDM4NS41LTEwMyAzODUuNSAxMDMgMjc5LjUgMjc5LjUgMTAzIDM4NS41elxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgNDAwIDM4MFxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tY2F0XFxcIj48dGl0bGU+Y2F0PC90aXRsZT4gPHBhdGggZD1cXFwiTSAxNTEuMzQ5MDQsMzA3LjIwNDU1IEwgMjY0LjM0OTA0LDMwNy4yMDQ1NSBDIDI2NC4zNDkwNCwyOTEuMTQwOTYgMjYzLjIwMjEsMjg3Ljk1NDU1IDIzNi41OTkwNCwyODcuOTU0NTUgQyAyNDAuODQ5MDQsMjc1LjIwNDU1IDI1OC4xMjQyNCwyNDQuMzU4MDggMjY3LjcyNDA0LDI0NC4zNTgwOCBDIDI3Ni4yMTcwNywyNDQuMzU4MDggMjg2LjM0OTA0LDI0NC44MjU5MiAyODYuMzQ5MDQsMjY0LjIwNDU1IEMgMjg2LjM0OTA0LDI4Ni4yMDQ1NSAzMjMuMzcxNzEsMzIxLjY3NTQ3IDMzMi4zNDkwNCwzMDcuMjA0NTUgQyAzNDUuNzI3NjksMjg1LjYzODk3IDMwOS4zNDkwNCwyOTIuMjE1MTQgMzA5LjM0OTA0LDI0MC4yMDQ1NSBDIDMwOS4zNDkwNCwxNjkuMDUxMzUgMzUwLjg3NDE3LDE3OS4xODA3MSAzNTAuODc0MTcsMTM5LjIwNDU1IEMgMzUwLjg3NDE3LDExOS4yMDQ1NSAzNDUuMzQ5MDQsMTE2LjUwMzc0IDM0NS4zNDkwNCwxMDIuMjA0NTUgQyAzNDUuMzQ5MDQsODMuMzA2OTUgMzYxLjk5NzE3LDg0LjQwMzU3NyAzNTguNzU4MDUsNjguNzM0ODc5IEMgMzU2LjUyMDYxLDU3LjkxMTY1NiAzNTQuNzY5NjIsNDkuMjMxOTkgMzUzLjQ2NTE2LDM2LjE0Mzg4OSBDIDM1Mi41Mzk1OSwyNi44NTczMDUgMzUyLjI0NDUyLDE2Ljk1OTM5OCAzNDIuNTk4NTUsMTcuMzU3MzgyIEMgMzMxLjI2NTA1LDE3LjgyNDk5MiAzMjYuOTY1NDksMzcuNzc0MTkgMzA5LjM0OTA0LDM5LjIwNDU0OSBDIDI5MS43Njg1MSw0MC42MzE5OTEgMjc2Ljc3ODM0LDI0LjIzODAyOCAyNjkuOTc0MDQsMjYuNTc5NTQ5IEMgMjYzLjIyNzA5LDI4LjkwMTMzNCAyNjUuMzQ5MDQsNDcuMjA0NTQ5IDI2OS4zNDkwNCw2MC4yMDQ1NDkgQyAyNzUuNjM1ODgsODAuNjM2NzcxIDI4OS4zNDkwNCwxMDcuMjA0NTUgMjY0LjM0OTA0LDExMS4yMDQ1NSBDIDIzOS4zNDkwNCwxMTUuMjA0NTUgMTk2LjM0OTA0LDExOS4yMDQ1NSAxNjUuMzQ5MDQsMTYwLjIwNDU1IEMgMTM0LjM0OTA0LDIwMS4yMDQ1NSAxMzUuNDkzNDIsMjQ5LjMyMTIgMTIzLjM0OTA0LDI2NC4yMDQ1NSBDIDgyLjU5MDY5NiwzMTQuMTU1MjkgNDAuODIzOTE5LDI5My42NDYyNSA0MC44MjM5MTksMzM1LjIwNDU1IEMgNDAuODIzOTE5LDM1My44MTAxOSA3Mi4zNDkwNDUsMzY3LjIwNDU1IDc3LjM0OTA0NSwzNjEuMjA0NTUgQyA4Mi4zNDkwNDUsMzU1LjIwNDU1IDM0Ljg2Mzc2NCwzMzcuMzI1ODcgODcuOTk1NDkyLDMxNi4yMDQ1NSBDIDEzMy4zODcxMSwyOTguMTYwMTQgMTM3LjQzOTE0LDI5NC40NzY2MyAxNTEuMzQ5MDQsMzA3LjIwNDU1IHogXFxcIiBzdHlsZT1cXFwiZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjFweDtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxXFxcIi8+IDwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi1jb21tZW50aW5nLW9cXFwiPjx0aXRsZT5jb21tZW50aW5nLW88L3RpdGxlPjxwYXRoIGQ9XFxcIk02NDAgODk2cTAgNTMtMzcuNSA5MC41dC05MC41IDM3LjUtOTAuNS0zNy41LTM3LjUtOTAuNSAzNy41LTkwLjUgOTAuNS0zNy41IDkwLjUgMzcuNSAzNy41IDkwLjV6bTM4NCAwcTAgNTMtMzcuNSA5MC41dC05MC41IDM3LjUtOTAuNS0zNy41LTM3LjUtOTAuNSAzNy41LTkwLjUgOTAuNS0zNy41IDkwLjUgMzcuNSAzNy41IDkwLjV6bTM4NCAwcTAgNTMtMzcuNSA5MC41dC05MC41IDM3LjUtOTAuNS0zNy41LTM3LjUtOTAuNSAzNy41LTkwLjUgOTAuNS0zNy41IDkwLjUgMzcuNSAzNy41IDkwLjV6bS01MTItNTEycS0yMDQgMC0zODEuNSA2OS41dC0yODIgMTg3LjUtMTA0LjUgMjU1cTAgMTEyIDcxLjUgMjEzLjV0MjAxLjUgMTc1LjVsODcgNTAtMjcgOTZxLTI0IDkxLTcwIDE3MiAxNTItNjMgMjc1LTE3MWw0My0zOCA1NyA2cTY5IDggMTMwIDggMjA0IDAgMzgxLjUtNjkuNXQyODItMTg3LjUgMTA0LjUtMjU1LTEwNC41LTI1NS0yODItMTg3LjUtMzgxLjUtNjkuNXptODk2IDUxMnEwIDE3NC0xMjAgMzIxLjV0LTMyNiAyMzMtNDUwIDg1LjVxLTcwIDAtMTQ1LTgtMTk4IDE3NS00NjAgMjQyLTQ5IDE0LTExNCAyMmgtNXEtMTUgMC0yNy0xMC41dC0xNi0yNy41di0xcS0zLTQtLjUtMTJ0Mi0xMCA0LjUtOS41bDYtOSA3LTguNSA4LTlxNy04IDMxLTM0LjV0MzQuNS0zOCAzMS0zOS41IDMyLjUtNTEgMjctNTkgMjYtNzZxLTE1Ny04OS0yNDcuNS0yMjB0LTkwLjUtMjgxcTAtMTMwIDcxLTI0OC41dDE5MS0yMDQuNSAyODYtMTM2LjUgMzQ4LTUwLjUgMzQ4IDUwLjUgMjg2IDEzNi41IDE5MSAyMDQuNSA3MSAyNDguNXpcXFwiLz48L3N5bWJvbD48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDE3OTIgMTc5MlxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tZG93bmxvYWRcXFwiPjx0aXRsZT5kb3dubG9hZDwvdGl0bGU+PHBhdGggZD1cXFwiTTEzNDQgMTM0NHEwLTI2LTE5LTQ1dC00NS0xOS00NSAxOS0xOSA0NSAxOSA0NSA0NSAxOSA0NS0xOSAxOS00NXptMjU2IDBxMC0yNi0xOS00NXQtNDUtMTktNDUgMTktMTkgNDUgMTkgNDUgNDUgMTkgNDUtMTkgMTktNDV6bTEyOC0yMjR2MzIwcTAgNDAtMjggNjh0LTY4IDI4aC0xNDcycS00MCAwLTY4LTI4dC0yOC02OHYtMzIwcTAtNDAgMjgtNjh0NjgtMjhoNDY1bDEzNSAxMzZxNTggNTYgMTM2IDU2dDEzNi01NmwxMzYtMTM2aDQ2NHE0MCAwIDY4IDI4dDI4IDY4em0tMzI1LTU2OXExNyA0MS0xNCA3MGwtNDQ4IDQ0OHEtMTggMTktNDUgMTl0LTQ1LTE5bC00NDgtNDQ4cS0zMS0yOS0xNC03MCAxNy0zOSA1OS0zOWgyNTZ2LTQ0OHEwLTI2IDE5LTQ1dDQ1LTE5aDI1NnEyNiAwIDQ1IDE5dDE5IDQ1djQ0OGgyNTZxNDIgMCA1OSAzOXpcXFwiLz48L3N5bWJvbD48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDE3OTIgMTc5MlxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tZWRpdFxcXCI+PHRpdGxlPmVkaXQ8L3RpdGxlPjxwYXRoIGQ9XFxcIk04ODggMTE4NGwxMTYtMTE2LTE1Mi0xNTItMTE2IDExNnY1Nmg5NnY5Nmg1NnptNDQwLTcyMHEtMTYtMTYtMzMgMWwtMzUwIDM1MHEtMTcgMTctMSAzM3QzMy0xbDM1MC0zNTBxMTctMTcgMS0zM3ptODAgNTk0djE5MHEwIDExOS04NC41IDIwMy41dC0yMDMuNSA4NC41aC04MzJxLTExOSAwLTIwMy41LTg0LjV0LTg0LjUtMjAzLjV2LTgzMnEwLTExOSA4NC41LTIwMy41dDIwMy41LTg0LjVoODMycTYzIDAgMTE3IDI1IDE1IDcgMTggMjMgMyAxNy05IDI5bC00OSA0OXEtMTQgMTQtMzIgOC0yMy02LTQ1LTZoLTgzMnEtNjYgMC0xMTMgNDd0LTQ3IDExM3Y4MzJxMCA2NiA0NyAxMTN0MTEzIDQ3aDgzMnE2NiAwIDExMy00N3Q0Ny0xMTN2LTEyNnEwLTEzIDktMjJsNjQtNjRxMTUtMTUgMzUtN3QyMCAyOXptLTk2LTczOGwyODggMjg4LTY3MiA2NzJoLTI4OHYtMjg4em00NDQgMTMybC05MiA5Mi0yODgtMjg4IDkyLTkycTI4LTI4IDY4LTI4dDY4IDI4bDE1MiAxNTJxMjggMjggMjggNjh0LTI4IDY4elxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi1mb3J3YXJkXFxcIj48dGl0bGU+Zm9yd2FyZDwvdGl0bGU+PHBhdGggZD1cXFwiTTEwOSAxNjUxcS0xOSAxOS0zMiAxM3QtMTMtMzJ2LTE0NzJxMC0yNiAxMy0zMnQzMiAxM2w3MTAgNzEwcTggOCAxMyAxOXYtNzEwcTAtMjYgMTMtMzJ0MzIgMTNsNzEwIDcxMHExOSAxOSAxOSA0NXQtMTkgNDVsLTcxMCA3MTBxLTE5IDE5LTMyIDEzdC0xMy0zMnYtNzEwcS01IDEwLTEzIDE5elxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi1pbmZvXFxcIj48dGl0bGU+aW5mbzwvdGl0bGU+PHBhdGggZD1cXFwiTTEyMTYgMTM0NHYxMjhxMCAyNi0xOSA0NXQtNDUgMTloLTUxMnEtMjYgMC00NS0xOXQtMTktNDV2LTEyOHEwLTI2IDE5LTQ1dDQ1LTE5aDY0di0zODRoLTY0cS0yNiAwLTQ1LTE5dC0xOS00NXYtMTI4cTAtMjYgMTktNDV0NDUtMTloMzg0cTI2IDAgNDUgMTl0MTkgNDV2NTc2aDY0cTI2IDAgNDUgMTl0MTkgNDV6bS0xMjgtMTE1MnYxOTJxMCAyNi0xOSA0NXQtNDUgMTloLTI1NnEtMjYgMC00NS0xOXQtMTktNDV2LTE5MnEwLTI2IDE5LTQ1dDQ1LTE5aDI1NnEyNiAwIDQ1IDE5dDE5IDQ1elxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi1saXN0LXVsXFxcIj48dGl0bGU+bGlzdC11bDwvdGl0bGU+PHBhdGggZD1cXFwiTTM4NCAxNDA4cTAgODAtNTYgMTM2dC0xMzYgNTYtMTM2LTU2LTU2LTEzNiA1Ni0xMzYgMTM2LTU2IDEzNiA1NiA1NiAxMzZ6bTAtNTEycTAgODAtNTYgMTM2dC0xMzYgNTYtMTM2LTU2LTU2LTEzNiA1Ni0xMzYgMTM2LTU2IDEzNiA1NiA1NiAxMzZ6bTE0MDggNDE2djE5MnEwIDEzLTkuNSAyMi41dC0yMi41IDkuNWgtMTIxNnEtMTMgMC0yMi41LTkuNXQtOS41LTIyLjV2LTE5MnEwLTEzIDkuNS0yMi41dDIyLjUtOS41aDEyMTZxMTMgMCAyMi41IDkuNXQ5LjUgMjIuNXptLTE0MDgtOTI4cTAgODAtNTYgMTM2dC0xMzYgNTYtMTM2LTU2LTU2LTEzNiA1Ni0xMzYgMTM2LTU2IDEzNiA1NiA1NiAxMzZ6bTE0MDggNDE2djE5MnEwIDEzLTkuNSAyMi41dC0yMi41IDkuNWgtMTIxNnEtMTMgMC0yMi41LTkuNXQtOS41LTIyLjV2LTE5MnEwLTEzIDkuNS0yMi41dDIyLjUtOS41aDEyMTZxMTMgMCAyMi41IDkuNXQ5LjUgMjIuNXptMC01MTJ2MTkycTAgMTMtOS41IDIyLjV0LTIyLjUgOS41aC0xMjE2cS0xMyAwLTIyLjUtOS41dC05LjUtMjIuNXYtMTkycTAtMTMgOS41LTIyLjV0MjIuNS05LjVoMTIxNnExMyAwIDIyLjUgOS41dDkuNSAyMi41elxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi1tYWdpY1xcXCI+PHRpdGxlPm1hZ2ljPC90aXRsZT48cGF0aCBkPVxcXCJNMTI1NCA1ODFsMjkzLTI5My0xMDctMTA3LTI5MyAyOTN6bTQ0Ny0yOTNxMCAyNy0xOCA0NWwtMTI4NiAxMjg2cS0xOCAxOC00NSAxOHQtNDUtMThsLTE5OC0xOThxLTE4LTE4LTE4LTQ1dDE4LTQ1bDEyODYtMTI4NnExOC0xOCA0NS0xOHQ0NSAxOGwxOTggMTk4cTE4IDE4IDE4IDQ1em0tMTM1MS0xOTBsOTggMzAtOTggMzAtMzAgOTgtMzAtOTgtOTgtMzAgOTgtMzAgMzAtOTh6bTM1MCAxNjJsMTk2IDYwLTE5NiA2MC02MCAxOTYtNjAtMTk2LTE5Ni02MCAxOTYtNjAgNjAtMTk2em05MzAgNDc4bDk4IDMwLTk4IDMwLTMwIDk4LTMwLTk4LTk4LTMwIDk4LTMwIDMwLTk4em0tNjQwLTY0MGw5OCAzMC05OCAzMC0zMCA5OC0zMC05OC05OC0zMCA5OC0zMCAzMC05OHpcXFwiLz48L3N5bWJvbD48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDE3OTIgMTc5MlxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tcGF1c2VcXFwiPjx0aXRsZT5wYXVzZTwvdGl0bGU+PHBhdGggZD1cXFwiTTE2NjQgMTkydjE0MDhxMCAyNi0xOSA0NXQtNDUgMTloLTUxMnEtMjYgMC00NS0xOXQtMTktNDV2LTE0MDhxMC0yNiAxOS00NXQ0NS0xOWg1MTJxMjYgMCA0NSAxOXQxOSA0NXptLTg5NiAwdjE0MDhxMCAyNi0xOSA0NXQtNDUgMTloLTUxMnEtMjYgMC00NS0xOXQtMTktNDV2LTE0MDhxMC0yNiAxOS00NXQ0NS0xOWg1MTJxMjYgMCA0NSAxOXQxOSA0NXpcXFwiLz48L3N5bWJvbD48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDE3OTIgMTc5MlxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tcGxhbmVcXFwiPjx0aXRsZT5wbGFuZTwvdGl0bGU+PHBhdGggZD1cXFwiTTE1NjggMTYwcTQ0IDUyIDEyIDE0OHQtMTA4IDE3MmwtMTYxIDE2MSAxNjAgNjk2cTUgMTktMTIgMzNsLTEyOCA5NnEtNyA2LTE5IDYtNCAwLTctMS0xNS0zLTIxLTE2bC0yNzktNTA4LTI1OSAyNTkgNTMgMTk0cTUgMTctOCAzMWwtOTYgOTZxLTkgOS0yMyA5aC0ycS0xNS0yLTI0LTEzbC0xODktMjUyLTI1Mi0xODlxLTExLTctMTMtMjMtMS0xMyA5LTI1bDk2LTk3cTktOSAyMy05IDYgMCA4IDFsMTk0IDUzIDI1OS0yNTktNTA4LTI3OXEtMTQtOC0xNy0yNC0yLTE2IDktMjdsMTI4LTEyOHExNC0xMyAzMC04bDY2NSAxNTkgMTYwLTE2MHE3Ni03NiAxNzItMTA4dDE0OCAxMnpcXFwiLz48L3N5bWJvbD48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDE3OTIgMTc5MlxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tcGxheVxcXCI+PHRpdGxlPnBsYXk8L3RpdGxlPjxwYXRoIGQ9XFxcIk0xNTc2IDkyN2wtMTMyOCA3MzhxLTIzIDEzLTM5LjUgM3QtMTYuNS0zNnYtMTQ3MnEwLTI2IDE2LjUtMzZ0MzkuNSAzbDEzMjggNzM4cTIzIDEzIDIzIDMxdC0yMyAzMXpcXFwiLz48L3N5bWJvbD48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDE3OTIgMTc5MlxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tcGx1c1xcXCI+PHRpdGxlPnBsdXM8L3RpdGxlPjxwYXRoIGQ9XFxcIk0xNjAwIDczNnYxOTJxMCA0MC0yOCA2OHQtNjggMjhoLTQxNnY0MTZxMCA0MC0yOCA2OHQtNjggMjhoLTE5MnEtNDAgMC02OC0yOHQtMjgtNjh2LTQxNmgtNDE2cS00MCAwLTY4LTI4dC0yOC02OHYtMTkycTAtNDAgMjgtNjh0NjgtMjhoNDE2di00MTZxMC00MCAyOC02OHQ2OC0yOGgxOTJxNDAgMCA2OCAyOHQyOCA2OHY0MTZoNDE2cTQwIDAgNjggMjh0MjggNjh6XFxcIi8+PC9zeW1ib2w+PHN5bWJvbCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNzkyIDE3OTJcXFwiIGlkPVxcXCJsZXBsYXllci1pY29uLXJlZG9cXFwiPjx0aXRsZT5yZWRvPC90aXRsZT48cGF0aCBkPVxcXCJNMTY2NCAyNTZ2NDQ4cTAgMjYtMTkgNDV0LTQ1IDE5aC00NDhxLTQyIDAtNTktNDAtMTctMzkgMTQtNjlsMTM4LTEzOHEtMTQ4LTEzNy0zNDktMTM3LTEwNCAwLTE5OC41IDQwLjV0LTE2My41IDEwOS41LTEwOS41IDE2My41LTQwLjUgMTk4LjUgNDAuNSAxOTguNSAxMDkuNSAxNjMuNSAxNjMuNSAxMDkuNSAxOTguNSA0MC41cTExOSAwIDIyNS01MnQxNzktMTQ3cTctMTAgMjMtMTIgMTQgMCAyNSA5bDEzNyAxMzhxOSA4IDkuNSAyMC41dC03LjUgMjIuNXEtMTA5IDEzMi0yNjQgMjA0LjV0LTMyNyA3Mi41cS0xNTYgMC0yOTgtNjF0LTI0NS0xNjQtMTY0LTI0NS02MS0yOTggNjEtMjk4IDE2NC0yNDUgMjQ1LTE2NCAyOTgtNjFxMTQ3IDAgMjg0LjUgNTUuNXQyNDQuNSAxNTYuNWwxMzAtMTI5cTI5LTMxIDcwLTE0IDM5IDE3IDM5IDU5elxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi1yZWZyZXNoXFxcIj48dGl0bGU+cmVmcmVzaDwvdGl0bGU+PHBhdGggZD1cXFwiTTE2MzkgMTA1NnEwIDUtMSA3LTY0IDI2OC0yNjggNDM0LjV0LTQ3OCAxNjYuNXEtMTQ2IDAtMjgyLjUtNTV0LTI0My41LTE1N2wtMTI5IDEyOXEtMTkgMTktNDUgMTl0LTQ1LTE5LTE5LTQ1di00NDhxMC0yNiAxOS00NXQ0NS0xOWg0NDhxMjYgMCA0NSAxOXQxOSA0NS0xOSA0NWwtMTM3IDEzN3E3MSA2NiAxNjEgMTAydDE4NyAzNnExMzQgMCAyNTAtNjV0MTg2LTE3OXExMS0xNyA1My0xMTcgOC0yMyAzMC0yM2gxOTJxMTMgMCAyMi41IDkuNXQ5LjUgMjIuNXptMjUtODAwdjQ0OHEwIDI2LTE5IDQ1dC00NSAxOWgtNDQ4cS0yNiAwLTQ1LTE5dC0xOS00NSAxOS00NWwxMzgtMTM4cS0xNDgtMTM3LTM0OS0xMzctMTM0IDAtMjUwIDY1dC0xODYgMTc5cS0xMSAxNy01MyAxMTctOCAyMy0zMCAyM2gtMTk5cS0xMyAwLTIyLjUtOS41dC05LjUtMjIuNXYtN3E2NS0yNjggMjcwLTQzNC41dDQ4MC0xNjYuNXExNDYgMCAyODQgNTUuNXQyNDUgMTU2LjVsMTMwLTEyOXExOS0xOSA0NS0xOXQ0NSAxOSAxOSA0NXpcXFwiLz48L3N5bWJvbD48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDE3OTIgMTc5MlxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tdHJhc2hcXFwiPjx0aXRsZT50cmFzaDwvdGl0bGU+PHBhdGggZD1cXFwiTTcwNCAxMzc2di03MDRxMC0xNC05LTIzdC0yMy05aC02NHEtMTQgMC0yMyA5dC05IDIzdjcwNHEwIDE0IDkgMjN0MjMgOWg2NHExNCAwIDIzLTl0OS0yM3ptMjU2IDB2LTcwNHEwLTE0LTktMjN0LTIzLTloLTY0cS0xNCAwLTIzIDl0LTkgMjN2NzA0cTAgMTQgOSAyM3QyMyA5aDY0cTE0IDAgMjMtOXQ5LTIzem0yNTYgMHYtNzA0cTAtMTQtOS0yM3QtMjMtOWgtNjRxLTE0IDAtMjMgOXQtOSAyM3Y3MDRxMCAxNCA5IDIzdDIzIDloNjRxMTQgMCAyMy05dDktMjN6bS01NDQtOTkyaDQ0OGwtNDgtMTE3cS03LTktMTctMTFoLTMxN3EtMTAgMi0xNyAxMXptOTI4IDMydjY0cTAgMTQtOSAyM3QtMjMgOWgtOTZ2OTQ4cTAgODMtNDcgMTQzLjV0LTExMyA2MC41aC04MzJxLTY2IDAtMTEzLTU4LjV0LTQ3LTE0MS41di05NTJoLTk2cS0xNCAwLTIzLTl0LTktMjN2LTY0cTAtMTQgOS0yM3QyMy05aDMwOWw3MC0xNjdxMTUtMzcgNTQtNjN0NzktMjZoMzIwcTQwIDAgNzkgMjZ0NTQgNjNsNzAgMTY3aDMwOXExNCAwIDIzIDl0OSAyM3pcXFwiLz48L3N5bWJvbD48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDE3OTIgMTc5MlxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tdW5kb1xcXCI+PHRpdGxlPnVuZG88L3RpdGxlPjxwYXRoIGQ9XFxcIk0xNjY0IDg5NnEwIDE1Ni02MSAyOTh0LTE2NCAyNDUtMjQ1IDE2NC0yOTggNjFxLTE3MiAwLTMyNy03Mi41dC0yNjQtMjA0LjVxLTctMTAtNi41LTIyLjV0OC41LTIwLjVsMTM3LTEzOHExMC05IDI1LTkgMTYgMiAyMyAxMiA3MyA5NSAxNzkgMTQ3dDIyNSA1MnExMDQgMCAxOTguNS00MC41dDE2My41LTEwOS41IDEwOS41LTE2My41IDQwLjUtMTk4LjUtNDAuNS0xOTguNS0xMDkuNS0xNjMuNS0xNjMuNS0xMDkuNS0xOTguNS00MC41cS05OCAwLTE4OCAzNS41dC0xNjAgMTAxLjVsMTM3IDEzOHEzMSAzMCAxNCA2OS0xNyA0MC01OSA0MGgtNDQ4cS0yNiAwLTQ1LTE5dC0xOS00NXYtNDQ4cTAtNDIgNDAtNTkgMzktMTcgNjkgMTRsMTMwIDEyOXExMDctMTAxIDI0NC41LTE1Ni41dDI4NC41LTU1LjVxMTU2IDAgMjk4IDYxdDI0NSAxNjQgMTY0IDI0NSA2MSAyOTh6XFxcIi8+PC9zeW1ib2w+PHN5bWJvbCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNzkyIDE3OTJcXFwiIGlkPVxcXCJsZXBsYXllci1pY29uLXZvbHVtZS1kb3duXFxcIj48dGl0bGU+dm9sdW1lLWRvd248L3RpdGxlPjxwYXRoIGQ9XFxcIk0xMDg4IDM1MnYxMDg4cTAgMjYtMTkgNDV0LTQ1IDE5LTQ1LTE5bC0zMzMtMzMzaC0yNjJxLTI2IDAtNDUtMTl0LTE5LTQ1di0zODRxMC0yNiAxOS00NXQ0NS0xOWgyNjJsMzMzLTMzM3ExOS0xOSA0NS0xOXQ0NSAxOSAxOSA0NXptMzg0IDU0NHEwIDc2LTQyLjUgMTQxLjV0LTExMi41IDkzLjVxLTEwIDUtMjUgNS0yNiAwLTQ1LTE4LjV0LTE5LTQ1LjVxMC0yMSAxMi0zNS41dDI5LTI1IDM0LTIzIDI5LTM1LjUgMTItNTctMTItNTctMjktMzUuNS0zNC0yMy0yOS0yNS0xMi0zNS41cTAtMjcgMTktNDUuNXQ0NS0xOC41cTE1IDAgMjUgNSA3MCAyNyAxMTIuNSA5M3Q0Mi41IDE0MnpcXFwiLz48L3N5bWJvbD48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDE3OTIgMTc5MlxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tdm9sdW1lLW9mZlxcXCI+PHRpdGxlPnZvbHVtZS1vZmY8L3RpdGxlPjxwYXRoIGQ9XFxcIk0xMjgwIDM1MnYxMDg4cTAgMjYtMTkgNDV0LTQ1IDE5LTQ1LTE5bC0zMzMtMzMzaC0yNjJxLTI2IDAtNDUtMTl0LTE5LTQ1di0zODRxMC0yNiAxOS00NXQ0NS0xOWgyNjJsMzMzLTMzM3ExOS0xOSA0NS0xOXQ0NSAxOSAxOSA0NXpcXFwiLz48L3N5bWJvbD48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDE3OTIgMTc5MlxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tdm9sdW1lLXVwXFxcIj48dGl0bGU+dm9sdW1lLXVwPC90aXRsZT48cGF0aCBkPVxcXCJNODMyIDM1MnYxMDg4cTAgMjYtMTkgNDV0LTQ1IDE5LTQ1LTE5bC0zMzMtMzMzaC0yNjJxLTI2IDAtNDUtMTl0LTE5LTQ1di0zODRxMC0yNiAxOS00NXQ0NS0xOWgyNjJsMzMzLTMzM3ExOS0xOSA0NS0xOXQ0NSAxOSAxOSA0NXptMzg0IDU0NHEwIDc2LTQyLjUgMTQxLjV0LTExMi41IDkzLjVxLTEwIDUtMjUgNS0yNiAwLTQ1LTE4LjV0LTE5LTQ1LjVxMC0yMSAxMi0zNS41dDI5LTI1IDM0LTIzIDI5LTM1LjUgMTItNTctMTItNTctMjktMzUuNS0zNC0yMy0yOS0yNS0xMi0zNS41cTAtMjcgMTktNDUuNXQ0NS0xOC41cTE1IDAgMjUgNSA3MCAyNyAxMTIuNSA5M3Q0Mi41IDE0MnptMjU2IDBxMCAxNTMtODUgMjgyLjV0LTIyNSAxODguNXEtMTMgNS0yNSA1LTI3IDAtNDYtMTl0LTE5LTQ1cTAtMzkgMzktNTkgNTYtMjkgNzYtNDQgNzQtNTQgMTE1LjUtMTM1LjV0NDEuNS0xNzMuNS00MS41LTE3My41LTExNS41LTEzNS41cS0yMC0xNS03Ni00NC0zOS0yMC0zOS01OSAwLTI2IDE5LTQ1dDQ1LTE5cTEzIDAgMjYgNSAxNDAgNTkgMjI1IDE4OC41dDg1IDI4Mi41em0yNTYgMHEwIDIzMC0xMjcgNDIyLjV0LTMzOCAyODMuNXEtMTMgNS0yNiA1LTI2IDAtNDUtMTl0LTE5LTQ1cTAtMzYgMzktNTkgNy00IDIyLjUtMTAuNXQyMi41LTEwLjVxNDYtMjUgODItNTEgMTIzLTkxIDE5Mi0yMjd0NjktMjg5LTY5LTI4OS0xOTItMjI3cS0zNi0yNi04Mi01MS03LTQtMjIuNS0xMC41dC0yMi41LTEwLjVxLTM5LTIzLTM5LTU5IDAtMjYgMTktNDV0NDUtMTlxMTMgMCAyNiA1IDIxMSA5MSAzMzggMjgzLjV0MTI3IDQyMi41elxcXCIvPjwvc3ltYm9sPjwvc3ZnPlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9kaXN0L3N2Zy9zdmctZGVmcy5zdmdcbi8vIG1vZHVsZSBpZCA9IDcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiZXhwb3J0IGNvbnN0IHByZXNldCA9IHtcblx0b3B0aW9ucyA6IHtcblx0XHR3aWR0aCA6ICcxMDAlJyxcblx0XHRjb250cm9scyA6IHtcblx0XHRcdGNvbW1vbiA6IFtcblx0XHRcdFx0WydwbGF5JywgJ3ZvbHVtZScsICdkaXZpZGVyJywgJ3RpbWVsaW5lJywgJ2RpdmlkZXInLCAnZnVsbHNjcmVlbiddLFxuXHRcdFx0XHRbJ3JhdGUnLCAnZGl2aWRlcicsICdiYWNrd2FyZCcsICdkaXZpZGVyJywgJ3NvdXJjZScsICdkaXZpZGVyJywgJ2Rvd25sb2FkJ11cblx0XHRcdF0sXG5cdFx0XHRmdWxsc2NyZWVuIDogW1xuXHRcdFx0XHRbJ3BsYXknLCAndm9sdW1lJywgJ2RpdmlkZXInLCAndGltZWxpbmUnLCAnZGl2aWRlcicsICdyYXRlJywgJ2RpdmlkZXInLCAnYmFja3dhcmQnLCAnZGl2aWRlcicsICdzb3VyY2UnLCAnZGl2aWRlcicsICdkb3dubG9hZCcsICdkaXZpZGVyJywgJ2Z1bGxzY3JlZW4nXVxuXHRcdFx0XVxuXHRcdH1cblx0fSxcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9wcmVzZXRzL3Zwcy5qcyIsImNvbnN0IGNvbnRyb2xzID0gWydwbGF5JywgJ3ZvbHVtZScsICdkaXZpZGVyJywgJ3RpbWVsaW5lJywgJ2RpdmlkZXInLCAncmF0ZScsICdkb3dubG9hZCcsICdmdWxsc2NyZWVuJ107XG5cbmV4cG9ydCBjb25zdCBwcmVzZXQgPSB7XG5cdG9wdGlvbnMgOiB7XG5cdFx0Y29udHJvbHMgOiB7XG5cdFx0XHRjb21tb24gOiBbXG5cdFx0XHRcdGNvbnRyb2xzLFxuXHRcdFx0XHRbXVxuXHRcdFx0XSxcblx0XHRcdGZ1bGxzY3JlZW4gOiBbXG5cdFx0XHRcdGNvbnRyb2xzXG5cdFx0XHRdXG5cdFx0fVxuXHR9LFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL3ByZXNldHMvc2ltcGxlLmpzIiwiZXhwb3J0IGNvbnN0IHByZXNldCA9IHtcblx0b3B0aW9ucyA6IHtcblx0XHR3aWR0aCA6ICcxMDAlJyxcblx0XHRjb250cm9scyA6IHtcblx0XHRcdGNvbW1vbiA6IFtcblx0XHRcdFx0WydwbGF5JywgJ3ZvbHVtZScsICd0aW1lbGluZScsICdyYXRlJywgJ3NvdXJjZScsICdkaXZpZGVyJywgJ2Rvd25sb2FkJywgJ2Z1bGxzY3JlZW4nXSxcblx0XHRcdFx0W11cblx0XHRcdF0sXG5cdFx0XHRmdWxsc2NyZWVuIDogW1xuXHRcdFx0XHRbJ3BsYXknLCAndm9sdW1lJywgJ3RpbWVsaW5lJywgJ3JhdGUnLCAnc291cmNlJywgJ2RpdmlkZXInLCAnZG93bmxvYWQnLCAnZnVsbHNjcmVlbiddLFxuXHRcdFx0XVxuXHRcdH1cblx0fSxcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9wcmVzZXRzL3Ntcy5qcyIsImV4cG9ydCBjb25zdCBwcmVzZXQgPSB7XG5cdG9wdGlvbnMgOiB7XG5cdFx0d2lkdGggOiAnMTAwJScsXG5cdFx0Y29udHJvbHMgOiB7XG5cdFx0XHRjb21tb24gOiBbXG5cdFx0XHRcdFsncGxheScsICd2b2x1bWUnLCAndGltZWxpbmUnLCAncmF0ZScsICdzb3VyY2UnLCAnZGl2aWRlcicsICdmdWxsc2NyZWVuJ10sXG5cdFx0XHRcdFtdXG5cdFx0XHRdLFxuXHRcdFx0ZnVsbHNjcmVlbiA6IFtcblx0XHRcdFx0WydwbGF5JywgJ3ZvbHVtZScsICd0aW1lbGluZScsICdyYXRlJywgJ3NvdXJjZScsICdkaXZpZGVyJywgJ2Z1bGxzY3JlZW4nXSxcblx0XHRcdF1cblx0XHR9XG5cdH0sXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvcHJlc2V0cy9jb21wcmVzc2VkLmpzIiwiZXhwb3J0IGNvbnN0IHByZXNldCA9IHtcblx0b3B0aW9ucyA6IHtcblx0XHR3aWR0aCA6ICcxMDAlJyxcblxuXHRcdGNvbnRyb2xzT3B0aW9ucyA6IHtcblx0XHRcdGNvbW1vbiA6IHtcblx0XHRcdFx0YWxpZ24gOiBbJ2p1c3RpZnknXVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Y29udHJvbHMgOiB7XG5cdFx0XHRjb21tb24gOiBbXG5cdFx0XHRcdFsncGxheScsICd0aW1lbGluZScsICdyYXRlJywgJ3ZvbHVtZScsICdzb3VyY2UnLCAnZnVsbHNjcmVlbiddLFxuXHRcdFx0XSxcblx0XHRcdGZ1bGxzY3JlZW4gOiBbXG5cdFx0XHRcdFsncGxheScsICd0aW1lbGluZScsICdyYXRlJywgJ3ZvbHVtZScsICdzb3VyY2UnLCAnZnVsbHNjcmVlbiddXG5cdFx0XHRdLFxuXHRcdFx0bWluaSA6IFtcblx0XHRcdFx0WydwbGF5JywgJ3RpbWVsaW5lJywgJ3ZvbHVtZScsICdmdWxsc2NyZWVuJ11cblx0XHRcdF0sXG5cdFx0fVxuXHR9LFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL3ByZXNldHMvMjAzNS5qcyJdLCJzb3VyY2VSb290IjoiIn0=