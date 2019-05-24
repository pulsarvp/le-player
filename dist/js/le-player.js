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
	Player.version = ("0.5.0");
	
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
				mini: [['play', 'divider', 'timeline', 'volume', 'fullscreen']]
			}
		}
	};

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzU1N2VkNGE3OTg0OWUzZjI3ZjEiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2xlLXBsYXllci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCIkXCIiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvQ29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9Db21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvSWNvbi5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9QbGF5QnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy91dGlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvdXRpbHMvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9TcGxhc2hJY29uLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL1RpbWVsaW5lL1RpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvQ29udHJvbENvbGxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvU2VjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvRXJyb3JEaXNwbGF5LmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL1Bvc3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvRnVsbHNjcmVlbkFwaS5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvdXRpbHMvY29va2llLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9NZWRpYUVycm9yLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL1BsYXlDb250cm9sLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL1ZvbHVtZUNvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvQ29udHJvbERyb3Bkb3duLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL1RpbWVsaW5lL1RpbWVsaW5lQ29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9Db250cm9sVGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9UaW1lbGluZS9CdWZmZXJlZFJhbmdlcy5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9UaW1lbGluZS9NYXJrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvU2VjdGlvbkNvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvQ29udHJvbENoZWNrYm94LmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL0Z1bGxzY3JlZW5Db250cm9sLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL1JhdGVDb250cm9sLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL0JhY2t3YXJkQ29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9Tb3VyY2VDb250cm9sLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL0NvbnRyb2xDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvU3VidGl0bGVDb250cm9sLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL0Rvd25sb2FkQ29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9LZXliaW5kaW5nSW5mb0NvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvVGltZUluZm9Db250cm9sLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9lbnRpdHkvSHRtbDUuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2VudGl0eS9FbnRpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9hcnJheS5wcm90b3R5cGUuZmluZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2RlZmluZS1wcm9wZXJ0aWVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vb2JqZWN0LWtleXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9vYmplY3Qta2V5cy9pc0FyZ3VtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9+L29iamVjdC1rZXlzL2ltcGxlbWVudGF0aW9uLmpzIiwid2VicGFjazovLy8uL34vZXMtYWJzdHJhY3QvZXM2LmpzIiwid2VicGFjazovLy8uL34vZXMtYWJzdHJhY3QvZXMyMDE1LmpzIiwid2VicGFjazovLy8uL34vaGFzL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2Z1bmN0aW9uLWJpbmQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9mdW5jdGlvbi1iaW5kL2ltcGxlbWVudGF0aW9uLmpzIiwid2VicGFjazovLy8uL34vZXMtdG8tcHJpbWl0aXZlL2VzNi5qcyIsIndlYnBhY2s6Ly8vLi9+L2VzLXRvLXByaW1pdGl2ZS9lczIwMTUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9lcy10by1wcmltaXRpdmUvaGVscGVycy9pc1ByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2lzLWNhbGxhYmxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vaXMtZGF0ZS1vYmplY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9pcy1zeW1ib2wvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9oYXMtc3ltYm9scy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2hhcy1zeW1ib2xzL3NoYW1zLmpzIiwid2VicGFjazovLy8uL34vZXMtYWJzdHJhY3QvR2V0SW50cmluc2ljLmpzIiwid2VicGFjazovLy8uL34vZXMtYWJzdHJhY3QvaGVscGVycy9hc3NlcnRSZWNvcmQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9lcy1hYnN0cmFjdC9oZWxwZXJzL2lzTmFOLmpzIiwid2VicGFjazovLy8uL34vZXMtYWJzdHJhY3QvaGVscGVycy9pc0Zpbml0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2VzLWFic3RyYWN0L2hlbHBlcnMvYXNzaWduLmpzIiwid2VicGFjazovLy8uL34vZXMtYWJzdHJhY3QvaGVscGVycy9zaWduLmpzIiwid2VicGFjazovLy8uL34vZXMtYWJzdHJhY3QvaGVscGVycy9tb2QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9lcy1hYnN0cmFjdC9oZWxwZXJzL2lzUHJpbWl0aXZlLmpzIiwid2VicGFjazovLy8uL34vZXMtYWJzdHJhY3QvZXM1LmpzIiwid2VicGFjazovLy8uL34vZXMtdG8tcHJpbWl0aXZlL2VzNS5qcyIsIndlYnBhY2s6Ly8vLi9+L2lzLXJlZ2V4L2luZGV4LmpzIiwid2VicGFjazovLy8uL34vYXJyYXkucHJvdG90eXBlLmZpbmQvaW1wbGVtZW50YXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9hcnJheS5wcm90b3R5cGUuZmluZC9wb2x5ZmlsbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2FycmF5LnByb3RvdHlwZS5maW5kL3NoaW0uanMiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9zdmcvc3ZnLWRlZnMuc3ZnIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9wcmVzZXRzL3Zwcy5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvcHJlc2V0cy9zaW1wbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL3ByZXNldHMvc21zLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9wcmVzZXRzL2NvbXByZXNzZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL3ByZXNldHMvMjAzNS5qcyJdLCJuYW1lcyI6WyJDb250cm9sIiwicmVnaXN0ZXJDb250cm9sIiwiZWxlbWVudCIsImFkZENsYXNzIiwiZXhjbHVkZUFycmF5Iiwic291cmNlIiwiZGlzdCIsInJlc3VsdCIsImNvbmNhdCIsImZvckVhY2giLCJpbmRleCIsImluZGV4T2YiLCJpdGVtIiwic3BsaWNlIiwiZGVmYXVsdE9wdGlvbnMiLCJlbnRpdHkiLCJhdXRvcGxheSIsImhlaWdodCIsImxvb3AiLCJtdXRlZCIsInByZWxvYWQiLCJwb3N0ZXIiLCJzdmdQYXRoIiwiaW5uYWN0aXZpdHlUaW1lb3V0IiwicmF0ZSIsInN0ZXAiLCJtaW4iLCJtYXgiLCJkZWZhdWx0IiwicGxheWJhY2siLCJzaG9ydCIsIm1lZGl1bSIsImxvbmciLCJjb250cm9scyIsImNvbW1vbiIsImZ1bGxzY3JlZW4iLCJtaW5pIiwiY29udHJvbHNPcHRpb25zIiwiYWxpZ24iLCJ2b2x1bWUiLCJtdXRlbGltaXQiLCJrZXlCaW5kaW5nIiwia2V5IiwiaW5mbyIsImRlc2NyaXB0aW9uIiwiZm4iLCJwbGF5ZXIiLCJ2aWRlbyIsInRvZ2dsZVBsYXkiLCJjdXJyZW50VGltZSIsIm9wdGlvbnMiLCJzcGxhc2hJY29uIiwic2hvdyIsInNoaWZ0S2V5Iiwic2VjdGlvbnMiLCJwcmV2IiwibmV4dCIsImNhbGNWb2x1bWVJY29uIiwidG9nZ2xlRnVsbHNjcmVlbiIsInBsdWdpbnMiLCJtaW5pcGxheWVyIiwib25QbGF5ZXJJbml0ZWQiLCJub29wIiwiUGxheWVyIiwiY3JlYXRlRWxlbWVudCIsIl9lbGVtZW50IiwiaW5uZXJFbGVtZW50IiwiX3VzZXJPcHRpb25zIiwiX2luaXRPcHRpb25zIiwiX2xvYWRTVkdTcHJpdGUiLCJkZWZhdWx0U3ByaXRlIiwiX3ZpZXciLCJsb2FkRW50aXR5IiwiY3R4IiwiX2luaXRDb250cm9scyIsIl9kYmxjbGlja1RpbWVvdXQiLCJfaW5pdFNlY3Rpb25zIiwidGhlbiIsImRhdGEiLCJ0cmlnZ2VyIiwiX2luaXRQbHVnaW5zIiwiX2xpc3RlbkhvdEtleXMiLCJfdXNlckFjdGl2aXR5IiwiX2xpc3RlblVzZXJBY3Rpdml0eSIsIl93YWl0aW5nVGltZW91dHMiLCJvbiIsImV2ZW50TmFtZSIsIm9uZSIsInJlbW92ZUNsYXNzIiwidGltZSIsImR1cmF0aW9uIiwiZXJyb3IiLCJfc3RhcnRXYWl0aW5nIiwiX3N0b3BXYXl0aW5nIiwiZSIsInVybCIsInBsYXkiLCJwYXVzZWQiLCJwYXVzZSIsIk1lZGlhRXJyb3IiLCJjb2RlIiwiaW5pdCIsInNyYyIsIl9vbkZ1bGxzY3JlZW5DaGFuZ2UiLCJiaW5kIiwiX29uQ2xpY2siLCJfb25EYmNsaWNrIiwiX29uSW5pdGVkIiwiX29uUGxheSIsIl9vblBhdXNlIiwiZG9jdW1lbnQiLCJGdWxsc2NyZWVuQXBpIiwiZnVsbHNjcmVlbmNoYW5nZSIsIl9vbkVudGl0eUZ1bGxzY3JlbkNoYW5nZSIsIm5hbWUiLCJFbnRpdHkiLCJnZXRDb21wb25lbnQiLCJfZW50aXR5IiwibG9hZCIsInZpZXciLCJhcmdzIiwicXVhbGl0eSIsImlzUGF1c2VkIiwicGxheWJhY2tSYXRlIiwiZGZkIiwiJCIsIkRlZmVycmVkIiwiX2RhdGEiLCJ1bmRlZmluZWQiLCJyZXNvbHZlIiwicHJvbWlzZSIsImFqYXgiLCJtZXRob2QiLCJkYXRhVHlwZSIsImdldERhdGEiLCJmc0FwaSIsInJlcXVlc3RGdWxsc2NyZWVuIiwic3VwcG9ydHNGdWxsU2NyZWVuIiwiZW50ZXJGdWxsc2NyZWVuIiwiZXhpdEZ1bGxzY3JlZW4iLCJ3aWR0aCIsImxlbmd0aCIsIm5ld1NlY3Rpb25zIiwiaSIsImVuZFNlY3Rpb24iLCJiZWdpbiIsImVuZCIsImF0dHIiLCJjc3MiLCJlcnJvckRpc3BsYXkiLCJFcnJvckRpc3BsYXkiLCJwbGF5QnV0dG9uIiwiUGxheUJ1dHRvbiIsImxvYWRlciIsImFwcGVuZCIsIkljb24iLCJpY29uTmFtZSIsImNsYXNzTmFtZSIsIlNwbGFzaEljb24iLCJ2aWRlb0NvbnRhaW5lciIsIlBvc3RlciIsImxhc3RUaW1lciIsIlRpbWUiLCJ2aWRlb0luZm8iLCJjb25zb2xlIiwid2FybiIsImluZm9FbGVtZW50IiwiaHRtbCIsInRpdGxlIiwiSVNfSVBIT05FIiwiSVNfQU5EUk9JRCIsIklTX01PQklMRSIsInNlY3Rpb25Db250YWluZXIiLCJzZWN0aW9uc0NvbnRhaW5lciIsImJlZm9yZSIsImF0dHJPcHRpb25zIiwicmVkdWNlIiwib2JqIiwidmFsIiwic291cmNlcyIsImZpbmQiLCJlYWNoIiwidmFsdWUiLCJmbGFnIiwidmlzaWJsZSIsIm91dHNpZGVTZWN0aW9ucyIsIl9vcHRpb25zRnJvbUVsZW1lbnQiLCJwcmVzZXRPcHRpb25zIiwicHJlc2V0IiwiZ2V0UHJlc2V0IiwiZXh0ZW5kIiwiQXJyYXkiLCJpc0FycmF5IiwiZXhjbHVkZUNvbnRyb2xzIiwiaGFzT3duUHJvcGVydHkiLCJjb250cm9sQ29sbGVjdGlvbiIsInJvdyIsImluaXRPcHRpb25zIiwiQ29udHJvbENvbGxlY3Rpb24iLCJhY3RpdmUiLCJpc0tleUJpbmRpbmciLCJiaW5kaW5nIiwid2hpY2giLCJjdHJsS2V5IiwicHJldmVudERlZmF1bHQiLCJyZWplY3QiLCJnZXRTZWN0aW9uRGF0YSIsImRvbmUiLCJpc1NlY3Rpb25PdXRzaWRlIiwiX2NvbXBsZXRlU2VjdGlvbnMiLCJTZWN0aW9ucyIsIml0ZW1zIiwiZnVsbHNjcmVlbk9ubHkiLCJoaWRlU2Nyb2xsIiwicGx1Z2luT3B0aW9ucyIsIm1vdXNlSW5Qcm9ncmVzcyIsImxhc3RNb3ZlWCIsImxhc3RNb3ZlWSIsIm9uTW91c2VNb3ZlIiwic2NyZWVuWCIsInNjcmVlblkiLCJvbk1vdXNlRG93biIsImNsZWFySW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsIm9uTW91c2VVcCIsImluYWN0aXZpdHlUaW1lb3V0IiwiZGVsYXkiLCJ1c2VyQWN0aXZlIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsInB1c2giLCJjYWxsIiwiZm9jdXMiLCJpc0ZzIiwiX2xhc3RTZWN0aW9uc1ZhbHVlIiwiSVNfQU5EUk9JRF9QSE9ORSIsIklTX0lQT0QiLCJmdWxsc2NyZWVuRWxlbWVudCIsImVuZGVkIiwiX2Vycm9yIiwiaGlkZSIsIl91c2VyQWN0aXZlIiwiZ2V0VXNlckFjdGl2ZSIsInRvZ2dsZUNsYXNzIiwiQ29tcG9uZW50IiwicGx1Z2luIiwicHJvdG90eXBlIiwicmVnaXN0ZXJDb21wb25lbnQiLCJnZXRDb250cm9sIiwic2Vjb25kc1RvVGltZSIsIl9wcmVzZXRzIiwiQ29va2llIiwic3ZnIiwiaGlkZGVuRWxlbWVudCIsInByZXBlbmQiLCJyZXF1aXJlIiwidmVyc2lvbiIsIndpbmRvdyIsImxlUGxheWVyIiwib2Zmc2V0U2hvdyIsIm9mZnNldCIsInRvcCIsIm91dGVySGVpZ2h0IiwiZ2V0Q29udHJvbHMiLCJjb250cm9sT3B0aW9ucyIsImNvbnRyb2wiLCJkaXNhYmxlIiwiaXNGdW5jdGlvbiIsImdldFdpZHRoIiwiX3VwZGF0ZU1pbmlQbGF5ZXIiLCJmb3JjZSIsInNjcm9sbFRvcCIsImhpZGVNaW5pUGxheWVyIiwic2hvd01pbmlQbGF5ZXIiLCJvblNldFZpZXciLCJvbkRlbFZpZXciLCJtb2R1bGUiLCJleHBvcnRzIiwiZW1pdFRhcEV2ZW50cyIsImNsaWNrIiwib25DbGljayIsInRhcCIsImljb24iLCJhdHRycyIsInRhZyIsImJ1aWxkQ1NTQ2xhc3MiLCJoYXNDbGFzcyIsImFyZ3VtZW50cyIsIl9kaXNhYmxlIiwiX2NvbnRyb2xzIiwiY29udHJvbENsYXNzIiwidG9QbGF5ZXJFdmVudCIsImV2ZW50cyIsInNwbGl0IiwiYWNjIiwiX19ub2RlIiwiYmx1ciIsImV2ZW50IiwiRXZlbnQiLCJ0cmlnZ2VySGFuZGxlciIsImV2ZW50TmFtZXMiLCJTdHJpbmciLCJ0b3VjaFN0YXJ0IiwiZmlyc3RUb3VjaCIsImxhc3RNb3ZlVG91Y2giLCJ0YXBNb3ZlbWVudFRocmVzaG9sZCIsInRvdWNoVGltZVRocmVzaG9sZCIsImNvdWxkQmVUYXAiLCJ0b3VjaGVzIiwicGFnZVgiLCJwYWdlWSIsIkRhdGUiLCJnZXRUaW1lIiwieGRpZmYiLCJ5ZGlmZiIsInRvdWNoRGlzdGFuY2UiLCJNYXRoIiwic3FydCIsIm5vVGFwIiwidG91Y2hUaW1lIiwidGFwRXZlbnQiLCJjb21wb25lbnQiLCJfY29tcG9uZW50cyIsIl91c2VUYWciLCJjcmVhdGVFbGVtZW50TlMiLCJfc3ZnVGFnIiwiX2ljb25OYW1lIiwiYXBwZW5kQ2hpbGQiLCJhdHRyTlMiLCJyZW1vdmVBdHRyaWJ1dGVOUyIsInNldEF0dHJpYnV0ZU5TIiwiaW5uZXIiLCJwZXJjZW50aWZ5IiwiY3JlYXRlRWwiLCIkaHRtbCIsInNlY29uZHMiLCJzaG93SG91cnMiLCJoIiwiZmxvb3IiLCJtIiwicyIsIm91dCIsInBlcmNlbnQiLCJwcm9wcyIsImdldFNjcm9sbEJhcldpZHRoIiwib3V0ZXIiLCJ2aXNpYmlsaXR5Iiwib3ZlcmZsb3ciLCJhcHBlbmRUbyIsIndpZHRoV2l0aFNjcm9sbCIsIm91dGVyV2lkdGgiLCJyZW1vdmUiLCJVU0VSX0FHRU5UIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwidGVzdCIsIklTX0NIUk9NRSIsIklTX0lQQUQiLCJJU19JT1MiLCJJU19TQUZBUkkiLCJJU19UT1VDSCIsIm1heFRvdWNoUG9pbnRzIiwidXBkYXRlVGV4dCIsInRleHQiLCJsb2NhbFVhT3B0aW9ucyIsImxvY2FsTmFtZSIsImluZGV4Um93IiwiY3JlYXRlIiwiY29sbGVjdGlvbiIsIl9yb3dzIiwiYWRkUm93IiwiZWxlbVJvdyIsImZpcnN0Iiwic2Vjb25kIiwiZ2xvYmFsQWxpZ24iLCJyb3dBbGlnbiIsImNvbnRyb2xOYW1lIiwiYWRkQ29udHJvbCIsIl9nZXRDb250cm9sT3B0aW9ucyIsInNjcm9sbEVsZW1lbnQiLCJfaW5uZXJFbGVtZW50IiwiYWN0aXZlU2VjdGlvbiIsImdldFNlY3Rpb25CeUluZGV4Iiwic2V0QWN0aXZlQnlJbmRleCIsIm9uU2VjdGlvbkNsaWNrIiwib25UaW1lVXBkYXRlIiwidXBkYXRlU2VjdGlvbkR1cmF0aW9uIiwic2VjdGlvbkluZGV4IiwicGFyc2VJbnQiLCJuZXdJbmRleCIsInJpZ2h0IiwiX2NyZWF0ZVNlY3Rpb25zIiwic2VjdGlvbiIsInRhcmdldCIsImNsb3Nlc3QiLCJ0b3BQb3NpdGlvbiIsInBvc2l0aW9uIiwiYW5pbWF0ZSIsImVuZFNlY3Rpb25UaW1lIiwidG9TdHJpbmciLCJuZXh0SW5mbyIsInRyaW0iLCJyZXBsYWNlV2l0aCIsImNyZWF0ZVNlY3Rpb24iLCJpc1Zpc2libGUiLCJtZXNzYWdlIiwib25QbGF5ZXJFcnJvciIsIl91cmwiLCJhcGlNYXAiLCJzcGVjQXBpIiwiYnJvd3NlckFwaSIsImRmbHQiLCJjb29raWVzIiwiY29va2llIiwiZCIsInNldERhdGUiLCJ5ZWFyIiwiZGVmYXVsdE1lc3NhZ2VzIiwiZXJyb3JUeXBlcyIsImVyck51bSIsIlBsYXlDb250cm9sIiwidXBkYXRlIiwic2hvd1JlcGxheSIsInNob3dQbGF5Iiwic2hvd1BhdXNlIiwiSW5maW5pdHkiLCJfcmVwbGF5IiwiVm9sdW1lQ29udHJvbCIsImZlYXR1cmVDb250cm9sVm9sdW1lIiwiZHJhZyIsIm1hcmtlciIsImxpbmUiLCJwIiwiZ2V0UG9zaXRpb24iLCJkcm9wZG93bkNvbnRlbnQiLCJtb3VzZW1vdmUiLCJtb3VzZXVwIiwieSIsInRvZ2dsZU11dGVkIiwiZGVmYXVsdFZvbHVtZSIsInJvdW5kIiwiQ29udHJvbERyb3Bkb3duIiwiX29wZW5lZCIsIm9wZW4iLCJjbG9zZSIsInRvZ2dsZSIsIm9uRG9jdW1lbnRFdmVudHMiLCJUaW1lbGluZUNvbnRyb2wiLCJfb25NYXJrZXJNb3VzZW1vdmUiLCJfb25NYXJrZXJNb3VzZWRvd24iLCJvblNlY3Rpb25zSW5pdCIsIl9vblRpbWVVcGRhdGUiLCJfb25EdXJhdGlvbkNoYW5nZSIsIm1hcmtlclNoYWRvdyIsIngiLCJtYXJrZXJUaW1lIiwiaXNOYU4iLCJtb3ZlIiwiQ29udHJvbFRleHQiLCJ0b3RhbFRpbWUiLCJNYXJrZXIiLCJwbGF5ZWRSYW5nZXMiLCJidWZmZXJlZFJhbmdlcyIsIkJ1ZmZlcmVkUmFuZ2VzIiwibW91c2VsZWF2ZSIsIm1vdXNlZG93biIsIl9vbkxpbmVDbGljayIsInVwZGF0ZVNlY3Rpb25SYW5nZXMiLCJjcmVhdGVTZWN0aW9uUmFuZ2VzIiwibGVmdCIsInVwZGF0ZUxhYmVscyIsIndhdGNoQnVmZmVySW50ZXJ2YWwiLCJ1cGRhdGVQcm9ncmVzc0JhciIsIkVORCIsIlNUQVJUIiwibG9hZGVkIiwiZG9tSXRlbSIsImFkZCIsImJ1ZmZlcmVkIiwibG9hZGVkU2l6ZSIsIl90ZXh0IiwicmFuZ2UiLCJfb25Nb3VzZWRvd24iLCJfZHJhZyIsIlNlY3Rpb25Db250cm9sIiwiX29uU2VjdGlvbnNJbml0IiwiX29uU2VjdGlvblRvZ2dsZSIsInRvZ2dsZVNlY3Rpb25zIiwiY2hlY2tlZCIsIkNvbnRyb2xDaGVja2JveCIsIm9uQ2hlY2tlZCIsIl9jaGVja2VkIiwiRnVsbHNjcmVlbkNvbnRyb2wiLCJSYXRlQ29udHJvbCIsImRvd25Db250cm9sIiwiZGVjcmVhc2VSYXRlIiwidXBDb250cm9sIiwiaW5jcmVhc2VSYXRlIiwiY3VycmVudFJhdGUiLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsInJlcGxhY2UiLCJyYXRlTWluIiwicmF0ZU1heCIsImdldCIsIkJhY2t3YXJkQ29udHJvbCIsIlNvdXJjZUNvbnRyb2wiLCJwbGF5YmFja1F1YWxpdHkiLCJnZXRBdmFpbGFibGVRdWFsaXR5TGV2ZWxzIiwiQ29udHJvbENvbnRhaW5lciIsIl9hY3RpdmUiLCJsaXN0IiwiY29udGVudCIsInRvb2x0aXAiLCJvbkl0ZW1DbGljayIsImN1cnJlbnRUYXJnZXQiLCJjdXJyZW50VmFsdWUiLCJnZXRDdXJyZW50VmFsdWUiLCJlbXB0eSIsImVsZW0iLCJhZGRJdGVtIiwiU3VidGl0bGVDb250cm9sIiwidHJhY2siLCJzdG9wUHJvcGFnYXRpb24iLCJoYXNWYWx1ZSIsInN1YnRpdGxlcyIsIkRvd25sb2FkQ29udHJvbCIsIm9uTG9hZFN0YXJ0IiwiaHJlZiIsImRvd25sb2FkIiwibGluayIsImZpbGVOYW1lIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiZ2V0RmlsZUV4dGVuc2lvbiIsInBhcnNlciIsInBhdGhuYW1lIiwicG9wIiwiS2V5QmluZGluZ0luZm9Db250cm9sIiwiaW5mb0NvbnRlbnQiLCJfa2V5IiwiaG90a2V5Iiwia2V5U3RyaW5nIiwiVGltZUluZm9Db250cm9sIiwiX2N1cnJlbnRUaW1lQ29udHJvbCIsIl90b3RhbFRpbWVDb250cm9sIiwiSHRtbDUiLCJtZWRpYSIsImJ1ZmZlclJhbmdlcyIsIl9wbGF5YmFja1F1YWxpdHkiLCJvbkR1cmF0aW9uQ2hhbmdlIiwib25Qcm9ncmVzcyIsIm9uU2Vla2luZyIsIm9uU2Vla2VkIiwib25Wb2x1bWVDaGFuZ2UiLCJvbkRibGNsaWNrIiwib25QbGF5Iiwib25QYXVzZSIsIm9uUmF0ZUNoYW5nZSIsIm9uRW5kZWQiLCJvbkNhbnBsYXlUaHJvdWdoIiwib25XYWl0aW5nIiwib25FcnJvciIsInJlbW92ZUF0dHIiLCJwcm9wIiwibWFwIiwiX2luaXRTdWJ0aXRsZXMiLCJfaW5pdFZpZGVvIiwiX2luaXRSYXRlIiwiX2luaXRWb2x1bWUiLCJ3ZWJraXRFbnRlckZ1bGxTY3JlZW4iLCJuZXR3b3JrU3RhdGUiLCJIQVZFX01FVEFEQVRBIiwid2Via2l0RXhpdEZ1bGxTY3JlZW4iLCJwbGF5ZWQiLCJwbGF5UHJvbWlzZSIsInBhdXNlUHJvbWlzZSIsIl9zZWxmIiwiY2hpbGRyZW4iLCJsYW5ndWFnZSIsInJlYWR5U3RhdGUiLCJIVE1MTWVkaWFFbGVtZW50IiwiSEFWRV9OT1RISU5HIiwiX3RleHRUcmFja3NIYWNrIiwidGV4dFRyYWNrcyIsImNsaWVudEhlaWdodCIsImNsaWVudFdpZHRoIiwiTU9CSUxFX01BWF9SQVRFIiwiU0FGQVJJX01BWF9SQVRFIiwiTU9CSUxFX01JTl9SQVRFIiwiU0FGQVJJX01JTl9SQVRFIiwic3RvcCIsIl9zb3VyY2UiLCJfdHJhY2siLCJtb2RlIiwibXV0ZSIsInNlZWthYmxlIiwic3RhcnQiLCJjdXJyZW50U3JjIiwiVEVTVF9WSURFTyIsImNhbkNvbnRyb2xWb2x1bWUiLCJfdHJpZ2dlclN0YWNrIiwiX3N0b3BMaXN0ZW4iLCJkZWZhdWx0UmF0ZSIsIl9wb3N0ZXIiLCJpbm5lckhlaWdodCIsIl9yYXRlTWF4IiwiX3JhdGVNaW4iLCJzZXQiLCJsZXZlbHMiLCJzb21lIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7Ozs7OztBQUVBOzs7O0FBR0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOztBQUNBOztBQVNBOzs7O0FBRUE7Ozs7QUFHQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FBaEJBOzs7QUFtQkFBLG1CQUFRQyxlQUFSLENBQXdCLFNBQXhCLEVBQW1DLFlBQVc7QUFDN0MsU0FBTztBQUNOQyxZQUFVLHNCQUFFLFFBQUYsRUFBWUMsUUFBWixDQUFxQixTQUFyQjtBQURKLEdBQVA7QUFHQSxFQUpEOztBQVFBOzs7Ozs7OztBQVFBLFVBQVNDLFlBQVQsQ0FBc0JDLE1BQXRCLEVBQThCQyxJQUE5QixFQUFvQztBQUNuQyxNQUFNQyxTQUFTLEdBQUdDLE1BQUgsQ0FBVUgsTUFBVixDQUFmO0FBQ0FDLE9BQUtHLE9BQUwsQ0FBYSxnQkFBUTtBQUNwQixPQUFNQyxRQUFRSCxPQUFPSSxPQUFQLENBQWVDLElBQWYsQ0FBZDtBQUNBLE9BQUlGLFFBQVEsQ0FBQyxDQUFiLEVBQWdCO0FBQ2ZILFdBQU9NLE1BQVAsQ0FBY0gsS0FBZCxFQUFxQixDQUFyQjtBQUNBO0FBQ0E7QUFDRCxH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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0EsMkJBQTBCOztBQUUxQjtBQUNBO0FBQ0E7QUFDQSx3Q0FBdUM7QUFDdkMsMEJBQXlCOztBQUV6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBb0I7QUFDcEIsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVELGlDQUFnQzs7QUFFaEM7Ozs7Ozs7QUNyeEJBOztBQUVBOztBQUVB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMEJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDMU9BOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWMsb0JBQW9CO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUF2QyxFQUFpRCxTQUFqRCxFQUE0RCxZQUE1RCxDQURRLEVBRVIsRUFGUSxDQURDO0FBS1ZDLGdCQUFhLENBQ1osQ0FBQyxNQUFELEVBQVMsUUFBVCxFQUFtQixVQUFuQixFQUErQixNQUEvQixFQUF1QyxRQUF2QyxFQUFpRCxTQUFqRCxFQUE0RCxZQUE1RCxDQURZO0FBTEg7QUFGRjtBQURXLEVBQWYsQzs7Ozs7Ozs7Ozs7QUNBQSxLQUFNeUosMEJBQVM7QUFDckIxSSxXQUFVO0FBQ1QwRixVQUFRLE1BREM7O0FBR1R2RyxvQkFBa0I7QUFDakJILFlBQVM7QUFDUkksWUFBUSxDQUFDLFNBQUQ7QUFEQTtBQURRLElBSFQ7QUFRVEwsYUFBVztBQUNWQyxZQUFTLENBQ1IsQ0FBQyxNQUFELEVBQVMsVUFBVCxFQUFxQixNQUFyQixFQUE2QixRQUE3QixFQUF1QyxRQUF2QyxFQUFpRCxZQUFqRCxDQURRLENBREM7QUFJVkMsZ0JBQWEsQ0FDWixDQUFDLE1BQUQsRUFBUyxVQUFULEVBQXFCLE1BQXJCLEVBQTZCLFFBQTdCLEVBQXVDLFFBQXZDLEVBQWlELFlBQWpELENBRFksQ0FKSDtBQU9WQyxVQUFPLENBQ04sQ0FBQyxNQUFELEVBQVMsU0FBVCxFQUFvQixVQUFwQixFQUFnQyxRQUFoQyxFQUEwQyxZQUExQyxDQURNO0FBUEc7QUFSRjtBQURXLEVBQWYsQyIsImZpbGUiOiJsZS1wbGF5ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9qcy9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA3NTU3ZWQ0YTc5ODQ5ZTNmMjdmMSIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuXG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL2NvbXBvbmVudHMvQ29udHJvbCc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9Db21wb25lbnQnO1xuaW1wb3J0IFBsYXlCdXR0b24gZnJvbSAnLi9jb21wb25lbnRzL1BsYXlCdXR0b24nO1xuaW1wb3J0IFNwbGFzaEljb24gZnJvbSAnLi9jb21wb25lbnRzL1NwbGFzaEljb24nO1xuXG5pbXBvcnQgSWNvbiBmcm9tICcuL2NvbXBvbmVudHMvSWNvbic7XG5pbXBvcnQgVGltZSBmcm9tICcuL2NvbXBvbmVudHMvVGltZWxpbmUvVGltZSc7XG5pbXBvcnQgQ29udHJvbENvbGxlY3Rpb24gZnJvbSAnLi9jb21wb25lbnRzL0NvbnRyb2xDb2xsZWN0aW9uJztcbmltcG9ydCBTZWN0aW9ucyBmcm9tICcuL2NvbXBvbmVudHMvU2VjdGlvbnMnO1xuaW1wb3J0IEVycm9yRGlzcGxheSBmcm9tICcuL2NvbXBvbmVudHMvRXJyb3JEaXNwbGF5JztcbmltcG9ydCBQb3N0ZXIgZnJvbSAnLi9jb21wb25lbnRzL1Bvc3Rlcic7XG5pbXBvcnQgRnVsbHNjcmVlbkFwaSBmcm9tICcuL0Z1bGxzY3JlZW5BcGknO1xuXG5pbXBvcnQgeyBjcmVhdGVFbCwgc2Vjb25kc1RvVGltZSwgbm9vcCB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHtcblx0SVNfQU5EUk9JRF9QSE9ORSxcblx0SVNfQU5EUk9JRCxcblx0SVNfSVBPRCxcblx0SVNfSVBIT05FLFxuXHRJU19NT0JJTEUsXG5cdElTX1RPVUNIXG59IGZyb20gJy4vdXRpbHMvYnJvd3Nlcic7XG5cbmltcG9ydCBDb29raWUgZnJvbSAnLi91dGlscy9jb29raWUnO1xuXG5pbXBvcnQgTWVkaWFFcnJvciBmcm9tICcuL01lZGlhRXJyb3InO1xuXG4vLyBSZWdpc3RlciBjb21tb24gY29udHJvbHNcbmltcG9ydCAnLi9jb21wb25lbnRzL1BsYXlDb250cm9sJztcbmltcG9ydCAnLi9jb21wb25lbnRzL1ZvbHVtZUNvbnRyb2wnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvVGltZWxpbmUvVGltZWxpbmVDb250cm9sJztcbmltcG9ydCAnLi9jb21wb25lbnRzL1NlY3Rpb25Db250cm9sJztcbmltcG9ydCAnLi9jb21wb25lbnRzL0Z1bGxzY3JlZW5Db250cm9sJztcbmltcG9ydCAnLi9jb21wb25lbnRzL1JhdGVDb250cm9sJztcbmltcG9ydCAnLi9jb21wb25lbnRzL0JhY2t3YXJkQ29udHJvbCc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9Tb3VyY2VDb250cm9sJztcbmltcG9ydCAnLi9jb21wb25lbnRzL1N1YnRpdGxlQ29udHJvbCc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9Eb3dubG9hZENvbnRyb2wnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvS2V5YmluZGluZ0luZm9Db250cm9sJztcbmltcG9ydCAnLi9jb21wb25lbnRzL1RpbWVJbmZvQ29udHJvbCc7XG5cbmltcG9ydCAnLi9lbnRpdHkvSHRtbDUnO1xuXG5pbXBvcnQgJ2FycmF5LnByb3RvdHlwZS5maW5kJztcblxuXG5Db250cm9sLnJlZ2lzdGVyQ29udHJvbCgnZGl2aWRlcicsIGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4ge1xuXHRcdGVsZW1lbnQgOiAkKCc8ZGl2Lz4nKS5hZGRDbGFzcygnZGl2aWRlcicpXG5cdH07XG59KTtcblxuXG5cbi8qKlxuICogUmV0dXJuIGFycmF5IHdpdGggZXhjbHVkZWQgZGlzdCdzIGl0ZW1zIGZyb20gc291cmNlIGFycmF5XG4gKlxuICogQGFjY2VzcyBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBzb3VyY2VcbiAqIEBwYXJhbSB7QXJyYXl9IGRpc3RcbiAqIEByZXR1cm4ge0FycmF5fVxuICovXG5mdW5jdGlvbiBleGNsdWRlQXJyYXkoc291cmNlLCBkaXN0KSB7XG5cdGNvbnN0IHJlc3VsdCA9IFtdLmNvbmNhdChzb3VyY2UpO1xuXHRkaXN0LmZvckVhY2goaXRlbSA9PiB7XG5cdFx0Y29uc3QgaW5kZXggPSByZXN1bHQuaW5kZXhPZihpdGVtKTtcblx0XHRpZiAoaW5kZXggPiAtMSkge1xuXHRcdFx0cmVzdWx0LnNwbGljZShpbmRleCwgMSk7XG5cdFx0XHRyZXR1cm5cblx0XHR9XG5cdH0pXG5cblx0cmV0dXJuIHJlc3VsdDtcbn1cblxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG5cdGVudGl0eSA6ICdIdG1sNScsXG5cdGF1dG9wbGF5IDogZmFsc2UsXG5cdGhlaWdodCA6ICdhdXRvJyxcblx0bG9vcCA6IGZhbHNlLFxuXHRtdXRlZCA6IGZhbHNlLFxuXHRwcmVsb2FkIDogJ21ldGFkYXRhJyxcblx0cG9zdGVyIDogbnVsbCxcblx0c3ZnUGF0aCA6ICcnLFxuXHRpbm5hY3Rpdml0eVRpbWVvdXQgOiA1MDAwLFxuXHRyYXRlIDoge1xuXHRcdHN0ZXAgOiAwLjI1LFxuXHRcdG1pbiA6IDAuNSxcblx0XHRtYXggOiA0LjAsXG5cdFx0ZGVmYXVsdCA6IDFcblx0fSxcblx0cGxheWJhY2sgOiB7XG5cdFx0c3RlcCA6IHtcblx0XHRcdHNob3J0IDogNSxcblx0XHRcdG1lZGl1bSA6IDEwLFxuXHRcdFx0bG9uZyA6IDMwXG5cdFx0fVxuXHR9LFxuXHRjb250cm9scyA6IHtcblx0XHRjb21tb24gOiBbXG5cdFx0XHRbJ3BsYXknLCAndm9sdW1lJywgJ2RpdmlkZXInLCAndGltZWxpbmUnLCAgJ2RpdmlkZXInLCAnc2VjdGlvbicsICdkaXZpZGVyJywgJ2Z1bGxzY3JlZW4nXSxcblx0XHRcdFsncmF0ZScsICdkaXZpZGVyJywgJ2JhY2t3YXJkJywgJ2RpdmlkZXInLCAnc291cmNlJywgJ2RpdmlkZXInLCAnc3VidGl0bGUnLCAnZGl2aWRlcicsICdkb3dubG9hZCcsICdkaXZpZGVyJywgJ2tleWJpbmRpbmcgaW5mbyddXG5cdFx0XSxcblx0XHRmdWxsc2NyZWVuIDogW1xuXHRcdFx0WydwbGF5JywgJ3ZvbHVtZScsICdkaXZpZGVyJywgJ3RpbWVsaW5lJywgJ2RpdmlkZXInLCAncmF0ZScsICdkaXZpZGVyJywgJ2tleWJpbmRpbmcgaW5mbycsICAnZGl2aWRlcicsICdiYWNrd2FyZCcsICdkaXZpZGVyJywgJ3NvdXJjZScsICdkaXZpZGVyJywgJ3N1YnRpdGxlJywgJ2RpdmlkZXInLCAnZG93bmxvYWQnLCAnZGl2aWRlcicsICdzZWN0aW9uJywgJ2RpdmlkZXInLCAnZnVsbHNjcmVlbiddXG5cdFx0XSxcblx0XHRtaW5pIDogW1xuXHRcdFx0WydwbGF5JywgJ3ZvbHVtZScsICdkaXZpZGVyJywgJ2Z1bGxzY3JlZW4nLCAnZGl2aWRlcicsICd0aW1laW5mbyddXG5cdFx0XSxcblx0XHQnY29tbW9uOmFuZHJvaWQnIDogW1xuXHRcdFx0WydwbGF5JywgJ3RpbWVsaW5lJywgJ2Z1bGxzY3JlZW4nXSxcblx0XHRcdFsncmF0ZScsICdzb3VyY2UnLCAnc2VjdGlvbiddXG5cdFx0XSxcblx0XHQnZnVsbHNjcmVlbjptb2JpbGUnIDogW1xuXHRcdFx0WydwbGF5JywgJ3RpbWVsaW5lJywgJ2Z1bGxzY3JlZW4nXSxcblx0XHRcdFsncmF0ZScsICdzb3VyY2UnLCAnc2VjdGlvbiddXG5cdFx0XSxcblx0XHQnY29tbW9uOmlvcycgOiBbXG5cdFx0XHRbJ3BsYXknLCAncmF0ZScsICd0aW1lbGluZScsICdzb3VyY2UnXVxuXHRcdF0sXG5cdH0sXG5cdGNvbnRyb2xzT3B0aW9ucyA6IHtcblxuXHRcdGNvbW1vbiA6IHtcblx0XHRcdGFsaWduIDogWydqdXN0aWZ5JywgJ2xlZnQnXSxcblx0XHRcdC8vIG1vYmlsZSA6IHRydWVcblx0XHR9LFxuXHRcdGZ1bGxzY3JlZW4gOiB7XG5cdFx0XHRhbGlnbiA6ICdqdXN0aWZ5J1xuXHRcdH0sXG5cdFx0J2NvbW1vbjphbmRyb2lkJyA6IHtcblx0XHRcdGFsaWduIDogWydqdXN0aWZ5JywgJ3JpZ2h0J11cblx0XHR9LFxuXG5cdFx0J2Z1bGxzY3JlZW46bW9iaWxlJyA6IHtcblx0XHRcdGFsaWduIDogWydqdXN0aWZ5JywgJ3JpZ2h0J11cblx0XHR9XG5cdH0sXG5cdHZvbHVtZSA6IHtcblx0XHRkZWZhdWx0IDogMC40LFxuXHRcdG11dGVsaW1pdCA6IDAuMDUsXG5cdFx0c3RlcCA6IDAuMVxuXHR9LFxuXHRrZXlCaW5kaW5nIDogW1xuXHRcdHtcblx0XHRcdGtleSA6IDMyLFxuXHRcdFx0aW5mbyA6IFsnU3BhY2UnXSxcblx0XHRcdGRlc2NyaXB0aW9uIDogJ9Cd0LDRh9Cw0YLRjCDQv9GA0L7QuNCz0YDRi9Cy0LDQvdC40LUgLyDQv9C+0YHRgtCw0LLQuNGC0Ywg0L3QsCDQv9Cw0YPQt9GDJyxcblx0XHRcdGZuIDogKHBsYXllcikgPT4ge1xuXHRcdFx0XHRwbGF5ZXIudmlkZW8udG9nZ2xlUGxheSgpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0a2V5IDogMzcsXG5cdFx0XHRpbmZvIDogWyfihpAnXSxcblx0XHRcdGRlc2NyaXB0aW9uIDogYNCf0LXRgNC10LzQvtGC0LDRgtGMINC90LAgMTAg0YHQtdC60YPQvdC0INC90LDQt9Cw0LRgLFxuXHRcdFx0Zm4gOiAocGxheWVyKSA9PiB7XG5cdFx0XHRcdHBsYXllci52aWRlby5jdXJyZW50VGltZSAtPSBwbGF5ZXIub3B0aW9ucy5wbGF5YmFjay5zdGVwLm1lZGl1bTtcblx0XHRcdFx0cGxheWVyLnNwbGFzaEljb24uc2hvdygndW5kbycpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0a2V5IDogMzksXG5cdFx0XHRpbmZvIDogWyfihpInXSxcblx0XHRcdGRlc2NyaXB0aW9uIDogYNCf0LXRgNC10LzQvtGC0LDRgtGMINC90LAgMTAg0YHQtdC60YPQvdC0INCy0L/QtdGA0ZHQtGAsXG5cdFx0XHRmbiA6IChwbGF5ZXIpID0+IHtcblx0XHRcdFx0cGxheWVyLnZpZGVvLmN1cnJlbnRUaW1lICs9IHBsYXllci5vcHRpb25zLnBsYXliYWNrLnN0ZXAubWVkaXVtO1xuXHRcdFx0XHRwbGF5ZXIuc3BsYXNoSWNvbi5zaG93KCdyZWRvJyk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHR7XG5cdFx0XHRzaGlmdEtleSA6IHRydWUsXG5cdFx0XHRpbmZvIDogWydTaGlmdCcsICfihpAnXSxcblx0XHRcdGRlc2NyaXB0aW9uIDogJ9Cf0LXRgNC10LnRgtC4INC90LAg0L/RgNC10LTRi9C00YPRidGD0Y4g0YHQtdC60YbQuNGOJyxcblx0XHRcdGtleSA6IDM3LFxuXHRcdFx0Zm4gOiAocGxheWVyKSA9PiB7XG5cdFx0XHRcdGlmKHBsYXllci5zZWN0aW9ucyA9PSBudWxsKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHBsYXllci5zZWN0aW9ucy5wcmV2KCk7XG5cblx0XHRcdH1cblx0XHR9LFxuXHRcdHtcblx0XHRcdHNoaWZ0S2V5IDogdHJ1ZSxcblx0XHRcdGtleSA6IDM5LFxuXHRcdFx0aW5mbyA6IFsnU2hpZnQnLCAn4oaSJ10sXG5cdFx0XHRkZXNjcmlwdGlvbiA6ICfQn9C10YDQtdC50YLQuCDQvdCwINGB0LvQtdC00YPRjtGJ0YPRjiDRgdC10LrRhtC40Y4nLFxuXHRcdFx0Zm4gOiAocGxheWVyKSA9PiB7XG5cdFx0XHRcdGlmKHBsYXllci5zZWN0aW9ucyA9PSBudWxsKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHBsYXllci5zZWN0aW9ucy5uZXh0KClcblx0XHRcdH1cblx0XHR9LFxuXHRcdHtcblx0XHRcdGtleSA6IDM4LFxuXHRcdFx0aW5mbyA6IFsn4oaRJ10sXG5cdFx0XHRkZXNjcmlwdGlvbiA6ICfQo9Cy0LXQu9C40YfQuNGC0Ywg0LPRgNC+0LzQutC+0YHRgtGMJyxcblx0XHRcdGZuIDogKHBsYXllcikgPT4ge1xuXHRcdFx0XHRwbGF5ZXIudmlkZW8udm9sdW1lICs9IHBsYXllci5vcHRpb25zLnZvbHVtZS5zdGVwO1xuXG5cdFx0XHRcdHBsYXllci5zcGxhc2hJY29uLnNob3cocGxheWVyLmNhbGNWb2x1bWVJY29uKHBsYXllci52aWRlby52b2x1bWUpKTtcblxuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHR7XG5cdFx0XHRrZXkgOiA0MCxcblx0XHRcdGluZm8gOiBbJ+KGkyddLFxuXHRcdFx0ZGVzY3JpcHRpb24gOiAn0KPQvNC10L3RjNGI0LjRgtGMINCz0YDQvtC80LrQvtGB0YLRjCcsXG5cdFx0XHRmbiA6IChwbGF5ZXIpID0+IHtcblx0XHRcdFx0cGxheWVyLnZpZGVvLnZvbHVtZSAtPSBwbGF5ZXIub3B0aW9ucy52b2x1bWUuc3RlcDtcblxuXHRcdFx0XHRwbGF5ZXIuc3BsYXNoSWNvbi5zaG93KHBsYXllci5jYWxjVm9sdW1lSWNvbihwbGF5ZXIudmlkZW8udm9sdW1lKSk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdHtcblx0XHRcdGtleSA6IDcwLFxuXHRcdFx0aW5mbyA6IFsnZiddLFxuXHRcdFx0ZGVzY3JpcHRpb24gOiAn0J7RgtC60YDRi9GC0Ywv0LfQsNC60YDRi9GC0Ywg0L/QvtC70L3QvtGN0LrRgNCw0L3Ri9C5INGA0LXQttC40LwnLFxuXHRcdFx0Zm4gOiAocGxheWVyKSA9PiB7XG5cdFx0XHRcdHBsYXllci50b2dnbGVGdWxsc2NyZWVuKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRdLFxuXHRwbHVnaW5zIDoge1xuXHRcdG1pbmlwbGF5ZXIgOiB7fVxuXHR9LFxuXHRvblBsYXllckluaXRlZCA6IG5vb3Bcbn07XG5cbi8qKlxuICogQGNsYXNzIFBsYXllclxuICogQGV4dGVuZHMgQ29tcG9uZW50XG4gKiBAcGFyYW0ge2pRdWVyeX0gZWxlbWVudCBFbGVtZW50IHdoZW4gcGxheWVyIHdpbGwgaW5pdFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5hdXRvcGxheT1mYWxzZV1cbiAqIFdoZW4gcHJlc2VudCwgdGhlIHZpZGVvIHdpbGwgYXV0b21hdGljYWxseSBzdGFydCBwbGF5aW5nIGFzIHNvb24gYXMgaXQgY2FuIGRvIHNvIHdpdGhvdXQgc3RvcHBpbmcuXG4gKiBAcGFyYW0ge1N0cmluZ3xOdW1iZXJ9IFtvcHRpb25zLmhlaWdodD0nYXV0byddIEhlaWdodCBvZiB2aWRlbyBjb250YWluZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy53aWR0aF0gV2lkdGggb2YgdmlkZW8gY29udGFpbmVyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmxvb3A9ZmFsc2VdXG4gKiBXaGVuIHByZXNlbnQsIGl0IHNwZWNpZmllcyB0aGF0IHRoZSB2aWRlbyB3aWxsIHN0YXJ0IG92ZXIgYWdhaW4sIGV2ZXJ5IHRpbWUgaXQgaXMgZmluaXNoZWQuXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLm11dGVkPWZhbHNlXVxuICogV2hlbiBwcmVzZW50LCBpdCBzcGVjaWZpZXMgdGhhdCB0aGUgYXVkaW8gb3V0cHV0IG9mIHRoZSB2aWRlbyBzaG91bGQgYmUgbXV0ZWQuXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMucHJlbG9hZD0nbWV0YWRhdGEnXSBDYW4gYmUgKCdhdXRvJ3wnbWV0YWRhdGEnfCdub25lJylcbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5wb3N0ZXJdIFBhdGggdG8gcG9zdGVyIG9mIHZpZGVvXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuc3ZnUGF0aF0gUGF0aCB0byBzdmcgc3ByaXRlIGZvciBpY29uc1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLnJhdGVdIFJhdGUgb3B0aW9uc1xuICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLnJhdGUuc3RlcD0wLjI1XSBTdGVwIG9mIGluY3JlYXNlL2RlY3JlYXNlIGJ5IHJhdGUgY29udHJvbFxuICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLnJhdGUubWluPTAuNV0gTWluIG9mIHJhdGVcbiAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5yYXRlLm1heD00LjBdIE1heCBvZiByYXRlXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMucmF0ZS5kZWZhdWx0PTFdXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMucGxheWJhY2tdIFBsYXliYWNrIG9wdGlvbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5wbGF5YmFjay5zdGVwXVxuICogQHBhcmFtIHtOdWJtZXJ9IFtvcHRpb25zLnBsYXliYWNrLnN0ZXAuc2hvcnQ9NV1cbiAqIEBwYXJhbSB7TnVibWVyfSBbb3B0aW9ucy5wbGF5YmFjay5zdGVwLm1lZGl1bT0zMF1cbiAqIEBwYXJhbSB7TnVibWVyfSBbb3B0aW9ucy5wbGF5YmFjay5zdGVwLmxvbmc9NjBdXG4gKiBAcGFyYW0ge09iZWpjdH0gW29wdGlvbnMuY29udHJvbHNdIE9iamVjdCBvZiBjb250cm9sc1xuICogQHBhcmFtIHtTdHJpbmdbXX0gW29wdGlvbnMuY29udHJvbHMuY29tbW9uXSBBcnJheSBvZiBjb250cm9scyBmb3IgZGVmYXVsdCB2aWV3XG4gKiBAcGFyYW0ge1N0cmluZ1tdfSBbb3B0aW9ucy5jb250cm9scy5mdWxsc2NyZWVuXSBBcnJheSBvZiBjb250cm9sIGZvciBmdWxsc3JlZW4gdmlld1xuICogQHBhcmFtIHtTdHJpbmdbXX0gW29wdGlvbnMuY29udHJvbHMubWluaV0gQXJyYXkgb2YgY29udHJvbCBmb3IgbWluaXBsYXllclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLmV4Y2x1ZGVDb250cm9sc10gT2JqZWN0IG9mIGV4Y2x1ZGUgY29udHJvbHMuIFN0cnVjdHVyZSBpcyB0aGUgc2FtZSBhcyB0aGF0IG9mIG9wdGlvbnMuY29udHJvbHNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy52b2x1bWVdIFZvbHVtZSdzIG9wdGlvbnNcbiAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy52b2x1bWUuZGVmYXVsdD0wLjRdIERlZmF1bHQgdm9sdW1lXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMudm9sdW1lLm11dGVsaW1pdD0wLjA1XSBEZWx0YSB3aGVuIHZvbHVtZSBpcyBtdXRlZFxuICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLnZvbHVtZS5zdGVwPTAuMDVdXG4gKiBAcGFyYW0ge09iamVjdFtdfSBbb3B0aW9ucy5rZXliaW5kaW5nXVxuICogT2JqZWN0IHdpdGgga2V5YmluZGluZyBvcHRpb25zLCB3aGVuIGtleSBpdCdzIG5hbWUgb2Yga2V5IGJpbmRpbmcsIGFuZCB2YWx1ZSBpdCdzIGtleSBiaW5kaW5nIHNldHRpbmdzXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMua2V5YmluZGluZ1tdLmtleV0gQ29kZSBvZiBrZXkgYmluZGluZyAoZm9yIGV4YW1wbGUgMzIgaXQncyBzcGFjZSlcbiAqIEBwYXJhbSB7U3RyaW5nW119IFtvcHRpb25zLmtleWJpbmRpbmdbXS5pbmZvXSBBcnJheSBvZiBrZXlzdHJva2VzIG9yZGVyXG4gKiBAcGFyYW0ge1N0cmluZ30gb3B0aW9ucy5rZXliaW5kaW5nW10uZGVzY3JpcHRpb25dIERlc2NyaXB0aW9uIG9mIGtleSBiaW5kaW5nXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBvcHRpb25zLmtleWJpbmRpbmdbXS5mbl0gQ2FsbGJhY2tcbiAqIEBwYXJhbSB7T2JqZWN0fEJvb2xlYW59IFtvcHRpb25zLm1pbmlwbGF5ZXI9ZmFsc2VdXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMubWluaXBsYXllci53aWR0aF0gV2lkdGggb2YgbWluaXBsYXllciBjb250YWluZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5taW5pcGxheWVyLndpZHRoXSBNaW5pUGxheWVyJ3Mgd2lkdGhcbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5zZWN0aW9uQ29udGFpbmVyXSBTZWxlY3RvciBmb3Igc2VjdGlvbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5wbHVnaW5zXSBLZXlzIG9mIG9iamVjdHMgYXJlIG5hbWUgb2YgcGx1Z2luLCB2YWx1ZSAtIHBsdWdpbiBvcHRpb25zXG4gKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9IFtvcHRpb25zLmRhdGFdIFVybCBvciBKU09OIHdpdGggZGF0YSBmb3IgcGxheWVyXG4gKiBAcGFyYW0ge0FycmF5fSBbb3B0aW9ucy5kYXRhLnNlY3Rpb25zXSBTZWN0aW9ucyBhcnJheVxuICovXG5cbmNsYXNzIFBsYXllciBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKGVsZW1lbnQsIG9wdGlvbnMpIHtcblxuXHRcdG9wdGlvbnMuY3JlYXRlRWxlbWVudCA9IGZhbHNlO1xuXG5cdFx0c3VwZXIobnVsbCwgb3B0aW9ucyk7XG5cblx0XHR0aGlzLl9lbGVtZW50ID0gZWxlbWVudDtcblxuXHRcdC8qKlxuXHRcdCAqIERPTSBjb250YWluZXIgdG8gaG9sZCBpbm5lciBvZiBwbGF5ZXJcblx0XHQgKlxuXHRcdCAqIEBtZW1iZXJvZiEgUGxheWVyI1xuXHRcdCAqIEB0eXBlIHtqUXVlcnl9XG5cdFx0ICovXG5cdFx0dGhpcy5pbm5lckVsZW1lbnQgPSBjcmVhdGVFbCgnZGl2Jyk7XG5cblx0XHQvLyBVc2VycyBvcHRpb25zXG5cdFx0dGhpcy5fdXNlck9wdGlvbnMgPSBvcHRpb25zO1xuXHRcdHRoaXMuX2luaXRPcHRpb25zKCk7XG5cblx0XHRpZih0aGlzLm9wdGlvbnMuc3ZnUGF0aCA9PT0gJycpIHtcblx0XHRcdFBsYXllci5fbG9hZFNWR1Nwcml0ZShQbGF5ZXIuZGVmYXVsdFNwcml0ZSk7XG5cdFx0fVxuXG5cdFx0dGhpcy5fdmlldyA9ICdjb21tb24nO1xuXG5cdFx0LyoqXG5cdFx0ICogRE9NIGNvbnRhaW5lciB0byBob2xkIGFsbCBwbGF5ZXJcblx0XHQgKlxuXHRcdCAqIEBtZW1iZXJvZiEgUGxheWVyI1xuXHRcdCAqIEB0eXBlIHtqUXVlcnl9XG5cdFx0ICovXG5cdFx0dGhpcy5lbGVtZW50ID0gdGhpcy5jcmVhdGVFbGVtZW50KCk7XG5cblx0XHR0aGlzLmxvYWRFbnRpdHkodGhpcy5vcHRpb25zLmVudGl0eSwgeyBjdHggOiBlbGVtZW50IH0pO1xuXHRcdC8qKlxuXHRcdCAqIFZpZGVvIGh0bWw1IGNvbXBvbmVudFxuXHRcdCAqXG5cdFx0ICogQG1lbWJlcm9mISBQbGF5ZXIjXG5cdFx0ICogQHR5cGUge0VudGl0eX1cblx0XHQgKi9cblx0XHR0aGlzLnZpZGVvID0gdGhpcy5lbnRpdHk7XG5cblx0XHQvLyBDcmVhdGUgY29udHJvbHNcblx0XHQvLyBUT0RPOiBtb3ZlIHRoaXMgYWN0aW9uIHRvIHRoZSBjcmVhdGVFbGVtZW50XG5cdFx0dGhpcy5jb250cm9scyA9IHt9O1xuXHRcdHRoaXMuX2luaXRDb250cm9scygpO1xuXG5cdFx0LyoqXG5cdFx0ICogQGFjY2VzcyBwcml2YXRlXG5cdFx0ICovXG5cdFx0dGhpcy5fZGJsY2xpY2tUaW1lb3V0ID0gbnVsbDtcblxuXHRcdHRoaXMuX2luaXRTZWN0aW9ucygpLnRoZW4oKGRhdGEpID0+IHtcblx0XHRcdC8qKlxuXHRcdFx0ICogU2VjdGlvbnMgaW5pdCBldmVudFxuXHRcdFx0ICpcblx0XHRcdCAqIEBldmVudCBQbGF5ZXIjc2VjdGlvbnNpbml0XG5cdFx0XHQgKiBAZXhhbXBsZVxuXHRcdFx0ICogY29uc3QgcGxheWVyID0gbmV3IFBsYXllcigkKCcjdmlkZW8nKSwgb3B0aW9ucyk7XG5cdFx0XHQgKiBwbGF5ZXIub24oJ3NlY3Rpb25zaW5pdCcsIChlLCBkYXRhKSA9PiBjb3Nub2xlLmxvZyhkYXRhKSk7XG5cdFx0XHQgKlxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLnRyaWdnZXIoJ3NlY3Rpb25zaW5pdCcsIGRhdGEpO1xuXHRcdH0pO1xuXHRcdHRoaXMuX2luaXRQbHVnaW5zKCk7XG5cblx0XHR0aGlzLl9saXN0ZW5Ib3RLZXlzKCk7XG5cblx0XHR0aGlzLl91c2VyQWN0aXZpdHkgPSBmYWxzZTtcblx0XHR0aGlzLl9saXN0ZW5Vc2VyQWN0aXZpdHkoKTtcblxuXHRcdHRoaXMuX3dhaXRpbmdUaW1lb3V0cyA9IFtdO1xuXG5cdFx0LyogUmV0cmlnZ2VyIHtAbGluayBFbnRpdHl9IEV2ZW50cyAqL1xuXHRcdFtcblx0XHRcdC8qKlxuXHRcdFx0ICogZHVyYXRpb25jaGFuZ2UgcGxheWVyIGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciNkdXJhdGlvbmNoYW5nZVxuXHRcdFx0ICovXG5cdFx0XHQnZHVyYXRpb25jaGFuZ2UnLFxuXG5cdFx0XHQvKipcblx0XHRcdCAqIHByb2dyZXNzIGh0bWw1IG1lZGlhIGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciNwcm9ncmVzc1xuXHRcdFx0ICovXG5cdFx0XHQncHJvZ3Jlc3MnLFxuXG5cdFx0XHQvKipcblx0XHRcdCAqIGRibGNsaWNrXG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciNkYmNsaWNrXG5cdFx0XHQgKi9cblx0XHRcdCdkYmxjbGljaycsXG5cblx0XHRcdC8qKlxuXHRcdFx0ICogZGJsY2xpY2tcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI2RiY2xpY2tcblx0XHRcdCAqL1xuXHRcdFx0J2NsaWNrJyxcblxuXG5cdFx0XHQvKipcblx0XHRcdCAqIGNhbnBsYXkgaHRtbDUgbWVkaWEgZXZlbnRcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI2NhbnBsYXlcblx0XHRcdCAqL1xuXHRcdFx0J2NhbnBsYXknLFxuXG5cdFx0XHQvKipcblx0XHRcdCAqIHF1YWxpdHljaGFuZ2UgaHRtbDVcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI3F1YWxpdHljaGFuZ2Vcblx0XHRcdCAqL1xuXHRcdFx0J3F1YWxpdHljaGFuZ2UnLFxuXG5cdFx0XHQvKipcblx0XHRcdCAqIHF1YWxpdHljaGFuZ2UgaHRtbDVcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI3RyYWNrc2NoYW5nZVxuXHRcdFx0ICovXG5cdFx0XHQndHJhY2tzY2hhbmdlJyxcblxuXG5cblx0XHRdLmZvckVhY2goZXZlbnROYW1lID0+IHtcblx0XHRcdHRoaXMudmlkZW8ub24oZXZlbnROYW1lLCAoKSA9PiB7XG5cdFx0XHRcdHRoaXMudHJpZ2dlcihldmVudE5hbWUpO1xuXHRcdFx0fSlcblx0XHR9KTtcblxuXHRcdHRoaXMudmlkZW8ub25lKCdwbGF5JywgKCkgPT4ge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBGaXJzdCBwbGF5IGV2ZW50XG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQGV2ZW50IFBsYXllciNmaXJzdHBsYXlcbiAgICAgICAgICAgICAqL1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdmaXJzdHBsYXknKTtcblx0XHRcdHRoaXMucmVtb3ZlQ2xhc3MoJ2xlcGxheWVyLS12aXJnaW4nKTtcblx0XHR9KTtcblxuXHRcdHRoaXMudmlkZW8ub24oJ3RpbWV1cGRhdGUnLCAoKSA9PiB7XG5cdFx0XHRpZiAodGhpcy52aWRlby5jdXJyZW50VGltZSA+IDApIHtcblx0XHRcdFx0dGhpcy5yZW1vdmVDbGFzcygnbGVwbGF5ZXItLXZpcmdpbicpO1xuXHRcdFx0fVxuXG5cdFx0XHQvKipcblx0XHRcdCAqIHRpbWV1cGRhdGUgaHRtbDUgbWVkaWEgZXZlbnRcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI3RpbWV1cGRhdGVcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy50cmlnZ2VyKCd0aW1ldXBkYXRlJywgeyB0aW1lIDogdGhpcy52aWRlby5jdXJyZW50VGltZSwgZHVyYXRpb24gOiB0aGlzLnZpZGVvLmR1cmF0aW9uIH0pO1xuXG5cdFx0fSlcblxuXHRcdHRoaXMudmlkZW8ub24oJ2xvYWRzdGFydCcsICgpID0+IHtcblx0XHRcdHRoaXMucmVtb3ZlQ2xhc3MoJ2xlcGxheWVyLS1lbmRlZCcpO1xuXG5cdFx0XHR0aGlzLmVycm9yID0gbnVsbDtcblx0XHRcdC8qKlxuXHRcdFx0ICogbG9hZHN0YXJ0IHBsYXllciBldmVudFxuXHRcdFx0ICpcblx0XHRcdCAqIEBldmVudCBQbGF5ZXIjbG9hZHN0YXJ0XG5cdFx0XHQgKi9cblx0XHRcdHRoaXMudHJpZ2dlcignbG9hZHN0YXJ0Jyk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLnZpZGVvLm9uKCdzZWVraW5nJywgKCkgPT4ge1xuXHRcdFx0dGhpcy5fc3RhcnRXYWl0aW5nKCk7XG5cdFx0XHQvKipcblx0XHRcdCAqIHNlZWtpbmcgaHRtbDUgbWVkaWEgZXZlbnRcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI3NlZWtpbmdcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdzZWVraW5nJyk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLnZpZGVvLm9uKCdzZWVrZWQnLCAoKSA9PiB7XG5cdFx0XHR0aGlzLl9zdG9wV2F5dGluZygpO1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBzZWVrZWQgaHRtbDUgbWVkaWEgZXZlbnRcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI3NlZWtlZFxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLnRyaWdnZXIoJ3NlZWtlZCcpO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy52aWRlby5vbigndm9sdW1lY2hhbmdlJywgKCkgPT4ge1xuXHRcdFx0LyoqXG5cdFx0XHQgKiB2b2x1bWVjaGFuZ2UgaHRtbDUgbWVkaWEgZXZlbnRcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI3ZvbHVtZWNoYW5nZVxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLnRyaWdnZXIoJ3ZvbHVtZWNoYW5nZScsIHsgdm9sdW1lIDogdGhpcy52aWRlby52b2x1bWUgfSk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLnZpZGVvLm9uKCdwb3N0ZXJjaGFuZ2UnLCAoZSwgZGF0YSkgPT4ge1xuXHRcdFx0Y29uc3QgdXJsID0gZGF0YS51cmw7XG5cdFx0XHR0aGlzLnBvc3Rlci51cmwgPSB1cmw7XG5cdFx0XHR0aGlzLnRyaWdnZXIoJ3Bvc3RlcmNoYW5nZScpO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy52aWRlby5vbigncGxheScsIChlKSA9PiB7XG5cdFx0XHR0aGlzLnJlbW92ZUNsYXNzKCdsZXBsYXllci0tZW5kZWQnKTtcblx0XHRcdHRoaXMucmVtb3ZlQ2xhc3MoJ2xlcGxheWVyLS1wYXVzZWQnKTtcblx0XHRcdHRoaXMuYWRkQ2xhc3MoJ2xlcGxheWVyLS1wbGF5aW5nJyk7XG5cblx0XHRcdC8qKlxuXHRcdFx0ICogcGxheSBodG1sNSBtZWRpYSBldmVudFxuXHRcdFx0ICpcblx0XHRcdCAqIEBldmVudCBQbGF5ZXIjcGxheVxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLnRyaWdnZXIoJ3BsYXknKTtcblx0XHR9KTtcblxuXHRcdHRoaXMudmlkZW8ub24oJ3BhdXNlJywgKCkgPT4ge1xuXHRcdFx0dGhpcy5yZW1vdmVDbGFzcygnbGVwbGF5ZXItLXBsYXlpbmcnKTtcblx0XHRcdHRoaXMuYWRkQ2xhc3MoJ2xlcGxheWVyLS1wYXVzZWQnKTtcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBwYXVzZSBodG1sNSBtZWRpYSBldmVudFxuXHRcdFx0ICpcblx0XHRcdCAqIEBldmVudCBQbGF5ZXIjcGF1c2Vcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdwYXVzZScpO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy52aWRlby5vbigncGxheWluZycsICgpID0+IHtcblx0XHRcdHRoaXMuX3N0b3BXYXl0aW5nKCk7XG5cblx0XHRcdC8qKlxuXHRcdFx0ICogcGxheWluZyBodG1sNSBtZWRpYSBldmVudFxuXHRcdFx0ICpcblx0XHRcdCAqIEBldmVudCBQbGF5ZXIjcGxheWluZ1xuXHRcdFx0ICovXG5cdFx0XHR0aGlzLnRyaWdnZXIoJ3BsYXlpbmcnKTtcblx0XHR9KTtcblxuXHRcdHRoaXMudmlkZW8ub24oJ3JhdGVjaGFuZ2UnLCAoKSA9PiB7XG5cdFx0XHQvKipcblx0XHRcdCAqIHJhdGUgaHRtbDUgbWVkaWEgZXZlbnRcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI3JhdGVcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdyYXRlY2hhbmdlJywgeyByYXRlIDogdGhpcy52aWRlby5yYXRlIH0pO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy52aWRlby5vbignZW5kZWQnLCAoKSA9PiB7XG5cdFx0XHR0aGlzLmFkZENsYXNzKCdsZXBsYXllci0tZW5kZWQnKTtcblxuXHRcdFx0aWYodGhpcy5vcHRpb25zLmxvb3ApIHtcblx0XHRcdFx0dGhpcy5jdXJyZW50VGltZSA9IDA7XG5cdFx0XHRcdHRoaXMudmlkZW8ucGxheSgpO1xuXHRcdFx0fSBlbHNlIGlmICghdGhpcy52aWRlby5wYXVzZWQpIHtcblx0XHRcdFx0dGhpcy52aWRlby5wYXVzZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHQvKipcblx0XHRcdCAqIGVuZGVkIGh0bWw1IG1lZGlhIGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciNlbmRlZFxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLnRyaWdnZXIoJ2VuZGVkJyk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLnZpZGVvLm9uKCdjYW5wbGF5dGhyb3VnaCcsICgpID0+IHtcblx0XHRcdHRoaXMuX3N0b3BXYXl0aW5nKCk7XG5cdFx0XHQvKipcblx0XHRcdCAqIGNhbnBsYXl0aHJvdWdoIGh0bWw1IG1lZGlhIGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciNjYW5wbGF5dGhyb3VnaFxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLnRyaWdnZXIoJ2NhbnBsYXl0aHJvdWdoJyk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLnZpZGVvLm9uKCd3YWl0aW5nJywgKCkgPT4ge1xuXHRcdFx0dGhpcy5fc3RhcnRXYWl0aW5nKCk7XG5cblx0XHRcdHRoaXMudmlkZW8ub25lKCd0aW1ldXBkYXRlJywgKCkgPT4gdGhpcy5fc3RvcFdheXRpbmcoKSk7XG5cblx0XHRcdC8qKlxuXHRcdFx0ICogd2FpdGluZyBodG1sNSBtZWRpYSBldmVudFxuXHRcdFx0ICpcblx0XHRcdCAqIEBldmVudCBQbGF5ZXIjd2FpdGluZ1xuXHRcdFx0ICovXG5cdFx0XHR0aGlzLnRyaWdnZXIoJ3dhaXRpbmcnKTtcblx0XHR9KTtcblxuXHRcdHRoaXMudmlkZW8ub24oJ2Vycm9yJywgKGUsIGRhdGEpID0+IHtcblx0XHRcdHRoaXMuZXJyb3IgPSBuZXcgTWVkaWFFcnJvcihkYXRhLmNvZGUpO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy52aWRlby5pbml0KCkudGhlbigoKSA9PiB7XG5cdFx0XHQvKipcblx0XHRcdCAqIFBsYXllciBpbml0IGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciNpbml0ZWRcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdpbml0ZWQnKTtcblxuXHRcdFx0aWYodGhpcy5vcHRpb25zLnRpbWUpIHtcblx0XHRcdFx0dGhpcy5jdXJyZW50VGltZSA9IHRoaXMub3B0aW9ucy50aW1lO1xuXHRcdFx0fVxuXG5cdFx0XHRpZih0aGlzLnZpZGVvLnNyYyAhPSBudWxsICYmIHRoaXMub3B0aW9ucy5hdXRvcGxheSkge1xuXHRcdFx0XHR0aGlzLnBsYXkoKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXG5cdFx0dGhpcy5vbignZnVsbHNjcmVlbmNoYW5nZScsIHRoaXMuX29uRnVsbHNjcmVlbkNoYW5nZS5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLm9uKCdjbGljaycsIHRoaXMuX29uQ2xpY2suYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5vbignZGJsY2xpY2snLCB0aGlzLl9vbkRiY2xpY2suYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5vbignaW5pdGVkJywgdGhpcy5fb25Jbml0ZWQuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5vbigncGxheScsIHRoaXMuX29uUGxheS5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLm9uKCdwYXVzZScsIHRoaXMuX29uUGF1c2UuYmluZCh0aGlzKSk7XG5cblx0XHQkKGRvY3VtZW50KS5vbihGdWxsc2NyZWVuQXBpLmZ1bGxzY3JlZW5jaGFuZ2UsIHRoaXMuX29uRW50aXR5RnVsbHNjcmVuQ2hhbmdlLmJpbmQodGhpcykpO1xuXHR9XG5cblx0Z2V0IGVudGl0eSgpIHtcblx0XHRyZXR1cm4gdGhpcy5fZW50aXR5O1xuXHR9XG5cblx0bG9hZEVudGl0eShuYW1lLCBvcHRpb25zKSB7XG5cdFx0Y29uc3QgRW50aXR5ID0gUGxheWVyLmdldENvbXBvbmVudChuYW1lKTtcblx0XHR0aGlzLl9lbnRpdHkgPSBuZXcgRW50aXR5KHRoaXMsIG9wdGlvbnMpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFN0YXJ0cyBwbGF5aW5nIHRoZSB2aWRlb1xuXHQgKlxuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAZXhhbXBsZVxuXHQgKiBjb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyKCQoXCIjdmlkZW9cIiksb3B0aW9ucyk7XG5cdCAqICQoJy5zb21lLWJ1dHRvbicpLm9uKCdjbGljaycsICgpID0+IHBsYXllci5wbGF5KCkpO1xuXHQgKi9cblx0cGxheSgpIHtcblx0XHRyZXR1cm4gdGhpcy52aWRlby5wbGF5KCk7XG5cdH1cblxuXHQvKipcblx0ICogUGF1c2VzIHRoZSBjdXJyZW50bHkgcGxheWluZyB2aWRlb1xuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKi9cblx0cGF1c2UoKSB7XG5cdFx0cmV0dXJuIHRoaXMudmlkZW8ucGF1c2UoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBUb2dnbGUgdGhlIGN1cnJlbnRseSBwbGF5aW5nIHZpZGVvXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqL1xuXHR0b2dnbGVQbGF5KCkge1xuXHRcdHJldHVybiB0aGlzLnZpZGVvLnRvZ2dsZVBsYXkoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBCZWdpbiBsb2FkaW5nIHRoZSBzcmMgZGF0YVxuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKi9cblx0bG9hZCgpIHtcblx0XHRyZXR1cm4gdGhpcy52aWRlby5sb2FkKCk7XG5cdH1cblxuXHQvKipcblx0ICogT24gc2V0IHZpZXcgY2FsbGJhY2tcblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHBhcmFtIHtTdHJpbmd9IHZpZXcgVmlldyBuYW1lXG5cdCAqIEByZXR1cm5zIHtQbGF5ZXJ9IHRoaXNcblx0ICogQGV4YW1wbGVcblx0ICogY29uc3QgcGxheWVyID0gbmV3IFBsYXllcigkKCcjdmlkZW8nKSwgb3B0aW9ucyk7XG5cdCAqIHBsYXllci5vblNldFZpZXcoJ21pbmknLCAoKSA9PiBjb25zb2xlLmxvZygnTWluaXBsYXllciB5ZWFoIScpXG5cdCAqICAgICAub25TZXRWaWV3KCdmdWxsc2NyZWVuJywgKCkgPT4gY29uc29sZS5sb2coJ0Z1bGxzY3JlZW4gYm9vbSEnKVxuXHQgKiAgICAgLm9uU2V0VmlldygnY29tbW9uJywgKCkgPT4gY29uc29sZS5sb2coJ0NvbW1vbiB2aWV3IC0gbG9sJyk7XG5cdCAqL1xuXHRvblNldFZpZXcodmlldywgLi4uYXJncykge1xuXHRcdHRoaXMub24oYHNldHZpZXcuJHt2aWV3fWAsIC4uLmFyZ3MpO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvKipcblx0ICogQ2hhbmdlIHNvdXJjZSBhbmQgc2F2ZSB0aW1lLCByYXRlXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBxdWFsaXR5XG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBbcXVhbGl0eS50aXRsZV0gVGhlIG5hbWUgb2YgcXVhbGl0dXQgZS54IFNEIG9yIEhEXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBxdWFsaXR5LnVybFxuXHQgKi9cblx0Y2hhbmdlUXVhbGl0eShxdWFsaXR5KSB7XG5cdFx0Y29uc3QgdmlkZW8gPSB0aGlzLnZpZGVvO1xuXHRcdGlmKHF1YWxpdHkgPT0gbnVsbCkgcmV0dXJuO1xuXHRcdGNvbnN0IHRpbWUgPSB0aGlzLmN1cnJlbnRUaW1lO1xuXHRcdGNvbnN0IHJhdGUgPSB0aGlzLnJhdGU7XG5cdFx0Y29uc3QgaXNQYXVzZWQgPSB0aGlzLnBhdXNlZDtcblxuXHRcdHZpZGVvLnNyYyA9IHF1YWxpdHk7XG5cdFx0dGhpcy5wbGF5YmFja1JhdGUgPSByYXRlO1xuXHRcdHRoaXMuY3VycmVudFRpbWUgPSB0aW1lO1xuXG5cdFx0aWYoaXNQYXVzZWQpIHtcblx0XHRcdHRoaXMucGF1c2UoKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnBsYXkoKVxuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBPbiBkZWwgdmlldyBjYWxsYmFja1xuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAcGFyYW0ge1N0cmluZ30gdmlldyBWaWV3IG5hbWVcblx0ICogQHJldHVybnMge1BsYXllcn0gdGhpc1xuXHQgKiBAZXhhbXBsZVxuXHQgKiBjb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyKCQoJyN2aWRlbycpLCBvcHRpb25zKTtcblx0ICogcGxheWVyLm9uRGVsVmlldygnbWluaScsICgpID0+IGNvbnNvbGUubG9nKCdFeGl0IG1pbmlwbGF5ZXInKVxuXHQgKi9cblx0b25EZWxWaWV3KHZpZXcsIC4uLmFyZ3MpIHtcblx0XHR0aGlzLm9uKGBkZWx2aWV3LiR7dmlld31gLCAuLi5hcmdzKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBzb21lIGRhdGEgZm9yIHBsYXllclxuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAcmV0dXJucyB7alF1ZXJ5LnByb21pc2V9IFByb21pc2Vcblx0ICovXG5cdGdldERhdGEoKSB7XG5cdFx0Y29uc3QgZGZkID0gbmV3ICQuRGVmZXJyZWQoKTtcblxuXHRcdGlmICh0aGlzLl9kYXRhICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdGRmZC5yZXNvbHZlKHRoaXMuX2RhdGEpO1xuXHRcdFx0cmV0dXJuIGRmZC5wcm9taXNlKClcblx0XHR9XG5cblx0XHRpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5kYXRhID09PSAnc3RyaW5nJykge1xuXHRcdFx0cmV0dXJuICQuYWpheCh7XG5cdFx0XHRcdHVybCA6IHRoaXMub3B0aW9ucy5kYXRhLFxuXHRcdFx0XHRtZXRob2QgOiAnR0VUJyxcblx0XHRcdFx0ZGF0YVR5cGUgOiAnanNvbidcblx0XHRcdH0pLnByb21pc2UoKTtcblxuXHRcdH0gZWxzZSBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5kYXRhID09PSAnb2JqZWN0Jykge1xuXHRcdFx0ZGZkLnJlc29sdmUodGhpcy5vcHRpb25zLmRhdGEpO1xuXHRcdFx0cmV0dXJuIGRmZC5wcm9taXNlKClcblx0XHR9XG5cdH1cblxuXHRnZXRTZWN0aW9uRGF0YSgpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXREYXRhKClcblx0XHRcdC50aGVuKGRhdGEgPT4ge1xuXHRcdFx0XHRyZXR1cm4gZGF0YS5zZWN0aW9uc1xuXHRcdFx0fSlcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXF1ZXN0IGZ1bGxzY3JlZW5cblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQGZpcmVzIFBsYXllciNmdWxsc2NyZWVuY2hhbmdlXG5cdCAqL1xuXHRyZXF1ZXN0RnVsbHNjcmVlbigpIHtcblx0XHRjb25zdCBmc0FwaSA9IEZ1bGxzY3JlZW5BcGk7XG5cblx0XHRpZihmc0FwaS5yZXF1ZXN0RnVsbHNjcmVlbikge1xuXHRcdFx0Ly8gQ2FsbCBIVE1MNSBWaWRlbyBhcGkgcmVxdWVzdEZ1bGxzY3JlZW5cblx0XHRcdHRoaXMuZWxlbWVudFswXVtmc0FwaS5yZXF1ZXN0RnVsbHNjcmVlbl0oKTtcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBmdWxsc2NyZWVuY2hhbmdlIGh0bWw1IG1lZGlhIGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciNmdWxsc2NyZWVuY2hhbmdlXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMudHJpZ2dlcignZnVsbHNjcmVlbmNoYW5nZScsIHRydWUpO1xuXHRcdH0gZWxzZSBpZiAodGhpcy52aWRlby5zdXBwb3J0c0Z1bGxTY3JlZW4oKSkge1xuXHRcdFx0dGhpcy52aWRlby5lbnRlckZ1bGxzY3JlZW4oKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogRXhpdCBmdWxsc2NyZWVuXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBmaXJlcyBQbGF5ZXIjZnVsbHNjcmVlbmNoYW5nZVxuXHQgKi9cblx0ZXhpdEZ1bGxzY3JlZW4oKSB7XG5cdFx0Y29uc3QgZnNBcGkgPSBGdWxsc2NyZWVuQXBpO1xuXG5cdFx0aWYoZnNBcGkuZXhpdEZ1bGxzY3JlZW4pIHtcblx0XHRcdGRvY3VtZW50W2ZzQXBpLmV4aXRGdWxsc2NyZWVuXSgpO1xuXHRcdH0gZWxzZSBpZiAodGhpcy52aWRlby5zdXBwb3J0c0Z1bGxTY3JlZW4oKSkge1xuXHRcdFx0dGhpcy52aWRlby5leGl0RnVsbHNjcmVlbigpO1xuXHRcdH1cblxuXHRcdHRoaXMudHJpZ2dlcignZnVsbHNjcmVlbmNoYW5nZScsIGZhbHNlKTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIFRvZ2dsZSBmdWxsc2NyZWVuXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBmaXJlcyBQbGF5ZXIjZnVsbHNjcmVlbmNoYW5nZVxuXHQgKi9cblx0dG9nZ2xlRnVsbHNjcmVlbigpIHtcblx0XHRpZih0aGlzLnZpZXcgPT09ICdmdWxsc2NyZWVuJykge1xuXHRcdFx0dGhpcy5leGl0RnVsbHNjcmVlbigpXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucmVxdWVzdEZ1bGxzY3JlZW4oKVxuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgQ29udHJvbENvbGxlY3Rpb24gb2YgUGxheWVyIGJ5IG5hbWUgKGUueCAnY29tbW9uJywgJ2Z1bGxzY3JlZW4nKVxuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSAtIE5hbWUgb2YgQ29udHJvbENvbGxlY3Rpb25cblx0ICogQHJldHVybnMge0NvbnRyb2xDb2xsZWN0aW9ufVxuXHQgKi9cblx0Z2V0Q29udHJvbHMobmFtZSkge1xuXHRcdHJldHVybiB0aGlzLmNvbnRyb2xzW25hbWVdO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybiB0aGUgd2lkdGggb2YgcGxheWVyLlxuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAcmV0dXJucyB7TnVtYmVyfSBXaWR0aCBpbiBweFxuXHQgKi9cblx0Z2V0V2lkdGgoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudC53aWR0aCgpXG5cdH1cblxuXHQvKipcblx0ICogQ29tcGxldGUgdGhlIHNlY3Rpb25zLCBieSB0aGUgYWRkaXRpb25hbCBmaWVsZCAnZW5kJyBpbiBlYWNoIHNlY3Rpb25cblx0ICpcblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBzZWN0aW9ucyAtIFNlY3Rpb25zXG5cdCAqIEByZXR1cm5zIHtPYmplY3R9IE5ldyBzZWN0aW9uc1xuXHQgKi9cblx0X2NvbXBsZXRlU2VjdGlvbnMoc2VjdGlvbnMpIHtcblx0XHRpZiAoc2VjdGlvbnMgPT0gbnVsbCB8fCBzZWN0aW9ucy5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVyblxuXHRcdH1cblx0XHRsZXQgbmV3U2VjdGlvbnMgPSBbXS5jb25jYXQoc2VjdGlvbnMpXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBuZXdTZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuXHRcdFx0bGV0IGVuZFNlY3Rpb247XG5cdFx0XHRpZiAoaSA8IChuZXdTZWN0aW9ucy5sZW5ndGggLSAxKSkge1xuXHRcdFx0XHRlbmRTZWN0aW9uID0gbmV3U2VjdGlvbnNbaSsxXS5iZWdpblxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZW5kU2VjdGlvbiA9IHRoaXMudmlkZW8uZHVyYXRpb247XG5cdFx0XHR9XG5cdFx0XHRuZXdTZWN0aW9uc1tpXS5lbmQgPSBlbmRTZWN0aW9uO1xuXHRcdH1cblx0XHRyZXR1cm4gbmV3U2VjdGlvbnM7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGFuZCBzZXQgdGhlIGN1cnJlbnQgcGxheWJhY2sgcG9zaXRpb24gaW4gdGhlIGF1ZGlvL3ZpZGVvIChpbiBzZWNvbmRzKVxuXHQgKiBHZXR0ZXIgYW5kIHNldHRlclxuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAbWVtYmVyb2YhIFBsYXllciNcblx0ICogQHR5cGUge051Ym1lcn1cblx0ICovXG5cdGdldCBjdXJyZW50VGltZSgpIHtcblx0XHRyZXR1cm4gdGhpcy52aWRlby5jdXJyZW50VGltZTtcblx0fVxuXG5cdHNldCBjdXJyZW50VGltZSh2YWx1ZSkge1xuXHRcdHRoaXMudmlkZW8uY3VycmVudFRpbWUgPSB2YWx1ZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHRoZSBsZW5ndGggb2YgdGhlIGN1cnJlbnQgYXVkaW8vdmlkZW8gKGluIHNlY29uZHMpXG5cdCAqIEdldHRlclxuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAbWVtYmVyb2YhIFBsYXllciNcblx0ICogQHR5cGUge051Ym1lcn1cblx0ICovXG5cdGdldCBkdXJhdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy52aWRlby5kdXJhdGlvbjtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHdoZXRoZXIgdGhlIHBsYXliYWNrIG9mIHRoZSBhdWRpby92aWRlbyBoYXMgZW5kZWQgb3Igbm90XG5cdCAqIEdldHRlclxuXHQgKlxuXHQgKiBAbWVtYmVyb2YhIFBsYXllciNcblx0ICogQHR5cGUge0Jvb2xlYW59XG5cdCAqL1xuXHRnZXQgZW5kZWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMudmlkZW8uZW5kZWQ7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyBhbmQgc2V0IHdoZXRoZXIgdGhlIHBsYXliYWNrIG9mIHRoZSBhdWRpby92aWRlbyBoYXMgZW5kZWQgb3Igbm90XG5cdCAqIEdldHRlciBhbmQgc2V0dGVyXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBtZW1iZXJvZiEgUGxheWVyI1xuXHQgKiBAdHlwZSB7TWVkaWFFcnJvcnxTdHJpbmd9XG5cdCAqIEBmaXJlcyBQbGF5ZXIjZXJyb3Jcblx0ICovXG5cdGdldCBlcnJvcigpIHtcblx0XHRyZXR1cm4gdGhpcy5fZXJyb3IgfHwgbnVsbDtcblx0fVxuXG5cdHNldCBlcnJvcih2YWx1ZSkge1xuXHRcdGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuXHRcdFx0dGhpcy5fZXJyb3IgPSBudWxsO1xuXHRcdFx0dGhpcy5yZW1vdmVDbGFzcygnbGVwbGF5ZXItLWVycm9yJyk7XG5cdFx0XHRpZih0aGlzLmVycm9yRGlzcGxheSkge1xuXHRcdFx0XHR0aGlzLmVycm9yRGlzcGxheS5lbGVtZW50LmhpZGUoKVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXHRcdHRoaXMuX2Vycm9yID0gbmV3IE1lZGlhRXJyb3IodmFsdWUpO1xuXG5cdFx0dGhpcy5hZGRDbGFzcygnbGVwbGF5ZXItLWVycm9yJyk7XG5cblx0XHQvKipcblx0XHQgKiBlcnJvciBldmVudFxuXHRcdCAqXG5cdFx0ICogQGV2ZW50IFBsYXllciNlcnJvclxuXHRcdCAqIEBwcm9wZXJ0eSB7TWVkaWFFcnJvcn0gZXJyb3Jcblx0XHQgKiBAZXhhbXBsZVxuXHRcdCAqIGNvbnN0IHBsYXllciA9IG5ldyBQbGF5ZXIoJCgnI3ZpZGVvJyksIG9wdGlvbnMpO1xuXHRcdCAqIHBsYXllci5vbignZXJyb3InLCAoZSwgZGF0YSkgPT4gY29uc29sZS5lcnJvcihkYXRhLmVycm9yKSk7XG5cdFx0ICovXG5cdFx0dGhpcy50cmlnZ2VyKCdlcnJvcicsIHsgZXJyb3IgOiB0aGlzLl9lcnJvcn0pO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRnZXQgcmF0ZSgpIHtcblx0XHRyZXR1cm4gdGhpcy52aWRlby5yYXRlO1xuXHR9XG5cblx0c2V0IHJhdGUodmFsdWUpIHtcblx0XHR0aGlzLnZpZGVvLnJhdGUgPSB2YWx1ZTtcblx0fVxuXG5cdGdldCBwYXVzZWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMudmlkZW8ucGF1c2VkO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybiB0aGUgaGVpZ2h0IG9mIHBsYXllci4gSWYgeW91IHdhbnQgZ2V0IGhlaWdodCBvbmx5IG9mIHZpZGVvIGVsZW1lbnQsIHVzZSB0aGlzLnZpZGVvLmhlaWdodCBvciB3aGF0ZXZlclxuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAdHlwZSB7TnVtYmVyfVxuXHQgKiBAbWVtYmVyb2YhIFBsYXllciNcblx0ICovXG5cdGdldCBoZWlnaHQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudC5oZWlnaHQoKVxuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybiB1bm5lY2Vzc2FyeSB2aWRlbyBoZWlndGhcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHR5cGUge051bWJlcn1cblx0ICogQG1lbWJlcm9mISBQbGF5ZXIjXG5cdCAqL1xuXHRnZXQgdmlkZW9IZWlnaHQoKSB7XG5cdFx0cmV0dXJuIHRoaXMudmlkZW8uaGVpZ2h0O1xuXHR9XG5cblxuXHQvKipcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHR5cGUge0Jvb2xlYW59XG5cdCAqIEBtZWJtZXJvZiEgUGxheWVyI1xuXHQgKi9cblx0Z2V0IHVzZXJBY3RpdmUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3VzZXJBY3RpdmUgfHwgZmFsc2U7XG5cdH1cblxuXHRzZXQgdXNlckFjdGl2ZSh2YWx1ZSkge1xuXHRcdGlmKHZhbHVlICE9PSB0aGlzLmdldFVzZXJBY3RpdmUpIHtcblx0XHRcdHRoaXMuX3VzZXJBY3RpdmUgPSB2YWx1ZTtcblx0XHRcdHRoaXMudG9nZ2xlQ2xhc3MoJ2xlcGxheWVyLS11c2VyLWFjdGl2ZScsIHZhbHVlKTtcblx0XHRcdC8qKlxuXHRcdFx0ICogVXNlciBhY3RpdmUgZXZlbnRcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI3VzZXJhY3RpdmVcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy50cmlnZ2VyKCd1c2VyYWN0aXZlJyk7XG5cdFx0fVxuXHR9XG5cblxuXHQvKipcblx0ICogU2V0IGFuZCBnZXQgcGxheWVyIHZpZXcuIFZpZXcgQ2FuIGJlICdjb21tb24nLCAnZnVsbHNjcmVlbicsICdtaW5pJ3dcblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHR5cGUge1N0cmluZ31cblx0ICogQG1lbWJlcm9mISBQbGF5ZXIjXG5cdCAqL1xuXHRnZXQgdmlldygpIHtcblx0XHRyZXR1cm4gdGhpcy5fdmlldztcblx0fVxuXG5cdHNldCB2aWV3KHZpZXcpIHtcblx0XHRpZih0aGlzLnZpZXcgIT0gbnVsbCkge1xuXHRcdFx0dGhpcy5yZW1vdmVDbGFzcyhgbGVwbGF5ZXItLSR7dGhpcy52aWV3fWApO1xuXHRcdFx0dGhpcy50cmlnZ2VyKGBkZWx2aWV3LiR7dGhpcy52aWV3fWApO1xuXHRcdH1cblxuXHRcdHRoaXMuX3ZpZXcgPSB2aWV3O1xuXHRcdHRoaXMuZWxlbWVudC5hZGRDbGFzcyhgbGVwbGF5ZXItLSR7dmlld31gKVxuXHRcdHRoaXMudHJpZ2dlcihgc2V0dmlldy4ke3ZpZXd9YCk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8qKlxuXHQgKiBSZW1vdmUgdW5uZWNlc3NhcnkgYXR0cmlidXRlcywgYW5kIHNldCBzb21lIGF0dHJzIGZyb20gb3B0aW9ucyAobG9vcCwgcG9zdGVyIGV0Yy4uLikuIENyZWF0ZSBtYWluIERPTSBvYmplY3RzXG5cdCAqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHRjb25zdCBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuXHRcdGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9lbGVtZW50O1xuXG5cdFx0dGhpcy5lbGVtZW50ID0gY3JlYXRlRWwoJ2RpdicpO1xuXG5cblx0XHR0aGlzLmVsZW1lbnQgPSB0aGlzLmVsZW1lbnRcblx0XHRcdC5hZGRDbGFzcygnbGVwbGF5ZXInKVxuXHRcdFx0LmF0dHIoJ3RhYmluZGV4JywgMClcblx0XHRcdC5jc3MoJ3dpZHRoJywgb3B0aW9ucy53aWR0aCAmJiAnMTAwJScpXG5cdFx0XHQuY3NzKCdtYXgtd2lkdGgnLCBvcHRpb25zLndpZHRoKVxuXG5cdFx0LyoqXG5cdFx0ICogRXJyb3IgZGlzcGxheSBjb21wb25lbnQuXG5cdFx0ICpcblx0XHQgKiBAdHlwZSB7RXJyb3JEaXNwbGF5fVxuXHRcdCAqIEBtZW1iZXJvZiEgUGxheWVyI1xuXHRcdCAqL1xuXHRcdHRoaXMuZXJyb3JEaXNwbGF5ID0gbmV3IEVycm9yRGlzcGxheSh0aGlzKTtcblxuXG5cdFx0LyoqXG5cdFx0ICogUGxheSBidXR0b24gY29tcG9uZW50LlxuXHRcdCAqXG5cdFx0ICogQHR5cGUge1BsYXlCdXR0b259XG5cdFx0ICogQG1lbWJlcm9mISBQbGF5ZXIjXG5cdFx0ICovXG5cdFx0dGhpcy5wbGF5QnV0dG9uID0gbmV3IFBsYXlCdXR0b24odGhpcyk7XG5cblx0XHQvLyBUT0RPOiDQktGL0L3QtdGB0YLQuCDRjdGC0L4g0LIg0L7RgtC00LXQu9GM0L3QtdGL0Lkg0LrQvtC80L/QvtC90LXQvdGCXG5cdFx0dGhpcy5sb2FkZXIgPSAkKCc8ZGl2IC8+Jylcblx0XHRcdC5hZGRDbGFzcygnbGVwbGF5ZXItbG9hZGVyLWNvbnRhaW5lcicpXG5cdFx0XHQuYXBwZW5kKG5ldyBJY29uKHRoaXMsIHtcblx0XHRcdFx0aWNvbk5hbWUgOiAncmVmcmVzaCcsXG5cdFx0XHRcdGNsYXNzTmFtZSA6ICdsZXBsYXllci1sb2FkZXItY29udGFpbmVyX19pY29uJ1xuXHRcdFx0fSkuZWxlbWVudCk7XG5cblxuXHRcdC8qKlxuXHRcdCAqIFNwbGFzaCBpY29uIGNvbXBvbmVudC5cblx0XHQgKlxuXHRcdCAqIEB0eXBlIHtTcGxhc2hJY29ufVxuXHRcdCAqIEBtZW1iZXJvZiEgUGxheWVyI1xuXHRcdCAqL1xuXHRcdHRoaXMuc3BsYXNoSWNvbiA9IG5ldyBTcGxhc2hJY29uKHRoaXMpO1xuXG5cdFx0dGhpcy52aWRlb0NvbnRhaW5lciA9IGNyZWF0ZUVsKCdkaXYnLCB7XG5cdFx0XHRjbGFzc05hbWUgOiAnbGVwbGF5ZXItdmlkZW8nXG5cdFx0fSlcblx0XHQuYXBwZW5kKHRoaXMuZXJyb3JEaXNwbGF5LmVsZW1lbnQpXG5cdFx0LmFwcGVuZCh0aGlzLnBsYXlCdXR0b24uZWxlbWVudClcblx0XHQuYXBwZW5kKHRoaXMubG9hZGVyKVxuXHRcdC5hcHBlbmQodGhpcy5zcGxhc2hJY29uLmVsZW1lbnQpXG5cblx0XHR0aGlzLnBvc3RlciA9IG5ldyBQb3N0ZXIodGhpcyk7XG5cdFx0dGhpcy52aWRlb0NvbnRhaW5lci5hcHBlbmQodGhpcy5wb3N0ZXIuZWxlbWVudCk7XG5cblxuXHRcdGNvbnN0IGxhc3RUaW1lciA9IG5ldyBUaW1lKHRoaXMsIHtcblx0XHRcdGZuIDogKHBsYXllcikgPT4ge1xuXHRcdFx0XHRjb25zdCB2aWRlbyA9IHBsYXllci52aWRlbztcblx0XHRcdFx0cmV0dXJuIHNlY29uZHNUb1RpbWUodmlkZW8uZHVyYXRpb24gLSB2aWRlby5jdXJyZW50VGltZSk7XG5cdFx0XHR9XG5cdFx0fSlcblxuXHRcdGlmKHRoaXMub3B0aW9ucy52aWRlb0luZm8pIHtcblx0XHRcdGNvbnNvbGUud2Fybignb3B0aW9ucy52aWRlb0luZm8gaXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBpc3RlYWQgb3B0aW9ucy5kZXNjcmlwdGlvbicpO1xuXHRcdH1cblxuXHRcdHRoaXMuaW5mb0VsZW1lbnQgPSBjcmVhdGVFbCgnZGl2Jywge1xuXHRcdFx0Y2xhc3NOYW1lIDogJ2xlcGxheWVyX19pbmZvJ1xuXHRcdH0pXG5cdFx0LmFwcGVuZChjcmVhdGVFbCgnZGl2Jywge1xuXHRcdFx0Y2xhc3NOYW1lIDogJ2xlcGxheWVyX190aXRsZScsXG5cdFx0XHRodG1sIDogdGhpcy5vcHRpb25zLnRpdGxlIHx8IFwiXCJcblx0XHR9KSlcblx0XHQuYXBwZW5kKGNyZWF0ZUVsKCdkaXYnLCB7XG5cdFx0XHRjbGFzc05hbWUgOiAnbGVwbGF5ZXJfX3ZpZGVvLWluZm8nLFxuXHRcdFx0aHRtbCA6IHRoaXMub3B0aW9ucy5kZXNjcmlwdGlvbiB8fCB0aGlzLm9wdGlvbnMudmlkZW9JbmZvIHx8IFwiXCJcblx0XHR9KSlcblx0XHQuYXBwZW5kKGNyZWF0ZUVsKCdkaXYnLCB7XG5cdFx0XHRjbGFzc05hbWUgOiAnbGVwbGF5ZXJfX2xhc3QnLFxuXHRcdFx0aHRtbCA6IGDQktC40LTQtdC+INC30LDQutC+0L3Rh9C40YLRgdGPINGH0LXRgNC10LcgYCxcblx0XHR9KS5hcHBlbmQobGFzdFRpbWVyLmVsZW1lbnQpKVxuXG5cdFx0dGhpcy5pbm5lckVsZW1lbnQgPSAkKCc8ZGl2IC8+Jylcblx0XHRcdC5hZGRDbGFzcygnbGVwbGF5ZXJfX2lubmVyJylcblx0XHRcdC5hcHBlbmQodGhpcy52aWRlb0NvbnRhaW5lcilcblx0XHRcdC5hcHBlbmQodGhpcy5pbmZvRWxlbWVudClcblxuXHRcdHRoaXMuZWxlbWVudCA9IHRoaXMuZWxlbWVudFxuXHRcdFx0LmFwcGVuZCh0aGlzLmlubmVyRWxlbWVudClcblxuXHRcdHRoaXMuYWRkQ2xhc3MoJ2xlcGxheWVyLS1wYXVzZWQnKTtcblx0XHR0aGlzLmFkZENsYXNzKCdsZXBsYXllci0tdmlyZ2luJyk7XG5cblx0XHRpZihJU19JUEhPTkUpIHtcblx0XHRcdHRoaXMuYWRkQ2xhc3MoJ2xlcGxheWVyLS1pcGhvbmUnKTtcblx0XHR9XG5cblx0XHRpZihJU19BTkRST0lEKSB7XG5cdFx0XHR0aGlzLmFkZENsYXNzKCdsZXBsYXllci0tYW5kcm9pZCcpO1xuXHRcdH1cblxuXHRcdGlmKElTX01PQklMRSkge1xuXHRcdFx0dGhpcy5hZGRDbGFzcygnbGVwbGF5ZXItLW1vYmlsZScpO1xuXHRcdH1cblxuXG5cblx0XHRpZihvcHRpb25zLnNlY3Rpb25Db250YWluZXIpIHtcblx0XHRcdHRoaXMuc2VjdGlvbnNDb250YWluZXIgPSAkKG9wdGlvbnMuc2VjdGlvbkNvbnRhaW5lcik7XG5cdFx0fVxuXG5cdFx0ZWxlbWVudC5iZWZvcmUodGhpcy5lbGVtZW50KTtcblx0XHR0aGlzLnZpZGVvQ29udGFpbmVyLmFwcGVuZChlbGVtZW50KTtcblxuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQ7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IG9wdGlvbnMgZnJvbSB2aWRlbydzIGF0dHJpYnV0ZSAoIGhlaWdodCwgd2lkdGgsIHBvc3RlciwgcHJlbG9hZCBldGMuLi4pXG5cdCAqIEdldCBzb3VyY2UgdmlkZW8gZnJvbSBzcmMgYXR0ciBvciA8c291cmNlPiBlbGVtZW50IHdpdGggZGF0YSBhdHRyICdkYXRhLXF1YWxpdHknXG5cdCAqIEFsc28gZ2V0IHNvdXJjZXMgZm9yIGRpZmZlcmVudCBxdWFsaXR5IGZyb20gPHNvdXJjZT4gZWxlbWVudCB3aXRoIGRhdGEgYXR0ciAnZGF0YS1xdWFsaXR5J1xuXHQgKlxuXHQgKiBAYWNjZXNzIHByaXZhdGVcblx0ICogQHJldHVybnMge09iamVjdH0gb3B0aW9uc1xuXHQgKi9cblx0X29wdGlvbnNGcm9tRWxlbWVudCgpIHtcblx0XHQvLyBDb3B5IHZpZGVvIGF0dHJzIHRvIHRoZSBvcGl0b25zXG5cdFx0Y29uc3QgIGVsZW1lbnQgPSB0aGlzLl9lbGVtZW50O1xuXHRcdGlmIChlbGVtZW50ID09IG51bGwgfHwgZWxlbWVudC5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybiB7fVxuXHRcdH1cblxuXHRcdGxldCBhdHRyT3B0aW9ucyA9IFtcblx0XHRcdCdoZWlnaHQnLFxuXHRcdFx0J3dpZHRoJyxcblx0XHRcdCdwb3N0ZXInLFxuXHRcdFx0J2F1dG9wbGF5Jyxcblx0XHRcdCdsb29wJyxcblx0XHRcdCdtdXRlZCcsXG5cdFx0XHQncHJlbG9hZCcsXG5cdFx0XVxuXHRcdC5yZWR1Y2UoKG9iaiwgaXRlbSkgPT4ge1xuXHRcdFx0Y29uc3QgdmFsID0gZWxlbWVudC5hdHRyKGl0ZW0pO1xuXHRcdFx0aWYodmFsICE9IG51bGwpIHtcblx0XHRcdFx0b2JqW2l0ZW1dID0gZWxlbWVudC5hdHRyKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG9iajtcblx0XHR9LCB7fSk7XG5cblx0XHRhdHRyT3B0aW9ucy5zb3VyY2VzID0gW107XG5cblx0XHQvLyBTcmMgaXQgaXMgbWFpbiBzb3VyY2UsIHRoYXQgd2lsbCBiZSBsb2FkXG5cdFx0aWYoZWxlbWVudC5hdHRyKCdzcmMnKSkge1xuXHRcdFx0YXR0ck9wdGlvbnMuc3JjID0ge1xuXHRcdFx0XHR1cmwgOiBlbGVtZW50LmF0dHIoJ3NyYycpLFxuXHRcdFx0XHR0aXRsZSA6IGVsZW1lbnQuYXR0cignZGF0YS1xdWFsaXR5JykgfHwgZWxlbWVudC5hdHRyKCd0aXRsZScpIHx8ICdkZWZhdWx0J1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIENvcHkgc291cmNlcyBmcm9tIEhUTUw1IHNvdXJjZSBlbGVtZW50IHdpdGggZGF0YS1xdWFsaXR5IGF0dHJcblx0XHQvLyBJZiBkYXRhLXF1YWxpdHkgYXR0ciBkb2VzIG5vdCBleGlzdCAtIG5vXG5cdFx0ZWxlbWVudC5maW5kKCdzb3VyY2UnKS5lYWNoKChpLCBpdGVtKSA9PiB7XG5cdFx0XHRpdGVtID0gJChpdGVtKTtcblx0XHRcdGlmKCFpdGVtLmF0dHIoJ2RhdGEtcXVhbGl0eScpKSB7XG5cdFx0XHRcdHJldHVyblxuXHRcdFx0fVxuXHRcdFx0YXR0ck9wdGlvbnMuc291cmNlcyA9IGF0dHJPcHRpb25zLnNvdXJjZXMuY29uY2F0KHtcblx0XHRcdFx0dXJsIDogaXRlbS5hdHRyKCdzcmMnKSxcblx0XHRcdFx0dGl0bGUgOiBpdGVtLmF0dHIoJ2RhdGEtcXVhbGl0eScpIHx8IGl0ZW0uYXR0cigndGl0bGUnKSB8fCAnZGVmYXVsdCdcblx0XHRcdH0pXG5cblx0XHR9KTtcblxuXHRcdHJldHVybiBhdHRyT3B0aW9ucztcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm4gYSBuYW1lIG9mIGljb24uIElmIGxlc3MgdGhlbiAwLjEgcmV0dXJuIHZvbHVtZS1vZmYsXG5cdCAqIGlmIGxlc3MgdGhlbiAwLjUgcmV0dXJuIHZvbHVtZSBkb3duLCBlbHNlIHJldHVybiB2b2x1bWUtdXBcblx0ICpcblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZSBWb2x1bWUgdmFsdWVcblx0ICogQHJldHVybnMge1N0cmluZ30gSWNvbiBuYW1lXG5cdCAqL1xuXHRjYWxjVm9sdW1lSWNvbih2YWx1ZSkge1xuXHRcdGlmKHZhbHVlID09IG51bGwpIHtcblx0XHRcdHZhbHVlID0gdGhpcy52aWRlby52b2x1bWU7XG5cdFx0fVxuXHRcdGNvbnN0IHZvbHVtZSA9IHZhbHVlO1xuXG5cdFx0aWYgKHZvbHVtZSA8IHRoaXMub3B0aW9ucy52b2x1bWUubXV0ZWxpbWl0KSB7XG5cdFx0XHRyZXR1cm4gJ3ZvbHVtZS1vZmYnO1xuXHRcdH0gZWxzZSBpZiAodmFsdWUgPCAwLjUpIHtcblx0XHRcdHJldHVybiAndm9sdW1lLWRvd24nO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gJ3ZvbHVtZS11cCc7XG5cdFx0fVxuXHR9XG5cblx0dG9nZ2xlU2VjdGlvbnMoZmxhZykge1xuXHRcdGlmKHRoaXMuc2VjdGlvbnMpIHtcblx0XHRcdHRoaXMuc2VjdGlvbnMudmlzaWJsZSA9IGZsYWc7XG5cdFx0fVxuXHRcdGlmKHRoaXMub3V0c2lkZVNlY3Rpb25zKSB7XG5cdFx0XHR0aGlzLm91dHNpZGVTZWN0aW9ucy52aXNpYmxlID0gZmxhZztcblx0XHR9XG5cdH1cblxuXG5cblx0LyoqXG5cdCAqIE1lcmdlIGRlZmF1bHRPcHRpb25zLCBwcmVzZXRPcHRpb25zIHdpdGggYXR0ck9wdGlvbnMgYW5kIHVzZXIncyBvcHRpb25zO1xuXHQgKlxuXHQgKiBBbmQgY29tcGxlbWVudCB0d28gb2JqZWN0czogY29udHJvbHMgYW5kIGV4Y2x1ZGVDb250cm9sc1xuXHQgKlxuXHQgKiBAYWNjZXNzIHByaXZhdGVcblx0ICovXG5cdF9pbml0T3B0aW9ucygpIHtcblx0XHRjb25zdCBhdHRyT3B0aW9ucyA9IHRoaXMuX29wdGlvbnNGcm9tRWxlbWVudCgpO1xuXHRcdGxldCBwcmVzZXRPcHRpb25zID0ge307XG5cblx0XHRpZiAodGhpcy5fdXNlck9wdGlvbnMucHJlc2V0ICYmIFBsYXllci5nZXRQcmVzZXQodGhpcy5fdXNlck9wdGlvbnMucHJlc2V0KSkge1xuXHRcdFx0cHJlc2V0T3B0aW9ucyA9IFBsYXllci5nZXRQcmVzZXQodGhpcy5fdXNlck9wdGlvbnMucHJlc2V0KS5vcHRpb25zO1xuXHRcdH1cblxuXG5cdFx0Ly8gTWVyZ2UgZGVmYXVsdCBvcHRpb25zICsgcHJlc2V0IG9wdGlvbnMgKyB2aWRlbyBhdHRyaWJ1dHRzKyB1c2VyIG9wdGlvbnNcblx0XHR0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh0cnVlLCB7fSwgZGVmYXVsdE9wdGlvbnMsIHByZXNldE9wdGlvbnMsIGF0dHJPcHRpb25zLCB0aGlzLl91c2VyT3B0aW9ucyk7XG5cblx0XHRpZih0aGlzLm9wdGlvbnMuc291cmNlcyAmJiAhQXJyYXkuaXNBcnJheSh0aGlzLm9wdGlvbnMuc291cmNlcykpIHtcblx0XHRcdHRoaXMub3B0aW9ucy5zb3VyY2VzID0gW3RoaXMub3B0aW9ucy5zb3VyY2VzXVxuXHRcdH1cblxuXHRcdGlmKHR5cGVvZiB0aGlzLm9wdGlvbnMuc3JjID09PSAnc3RyaW5nJykge1xuXHRcdFx0dGhpcy5vcHRpb25zLnNyYyA9IHsgdXJsIDogdGhpcy5vcHRpb25zLnNyYyB9XG5cdFx0fVxuXG5cdFx0aWYodGhpcy5vcHRpb25zLnNyYyA9PSBudWxsICYmIHRoaXMub3B0aW9ucy5zb3VyY2VzLmxlbmd0aCA+IDApIHtcblx0XHRcdHRoaXMub3B0aW9ucy5zcmMgPSB0aGlzLm9wdGlvbnMuc291cmNlc1swXVxuXHRcdH1cblxuXG5cdFx0Ly8gR2VuZXJhdGUgYW5kcm9pZDpmdWxsc2NyZWVuLCBhbmRyb2lkOmNvbW1vbiBhbmQgZXRjIGNvbnRyb2xzIG9wdGlvbnNcblxuXG5cdFx0Ly8gTWVyZ2UgY29ycmVjdGx5IGNvbnRyb2xzLCB3aXRob3V0IGRlZXAgbWVyZ2Vcblx0XHR0aGlzLm9wdGlvbnMuY29udHJvbHMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdE9wdGlvbnMuY29udHJvbHMsIHByZXNldE9wdGlvbnMuY29udHJvbHMsIHRoaXMuX3VzZXJPcHRpb25zLmNvbnRyb2xzKTtcblxuXHRcdC8vIGV4Y2x1ZGUgY29udHJvbHMgb3B0aW9uXG5cdFx0Ly8gVE9ETyhhZGludmFkaW0pOlxuXHRcdC8vIFNldCBkZXByZWNldGVkIGZsYWcgZm9yIHRoaXMgb3B0aW9uO1xuXHRcdGZvciAoY29uc3QgbmFtZSBpbiB0aGlzLm9wdGlvbnMuZXhjbHVkZUNvbnRyb2xzKSB7XG5cdFx0XHRpZiAoIXRoaXMub3B0aW9ucy5leGNsdWRlQ29udHJvbHMuaGFzT3duUHJvcGVydHkobmFtZSkpIHJldHVybjtcblx0XHRcdGNvbnN0IGNvbnRyb2xDb2xsZWN0aW9uID0gdGhpcy5vcHRpb25zLmV4Y2x1ZGVDb250cm9sc1tuYW1lXTtcblx0XHRcdGNvbnRyb2xDb2xsZWN0aW9uLmZvckVhY2goKHJvdywgaW5kZXgpID0+IHtcblx0XHRcdFx0aWYgKHRoaXMub3B0aW9ucy5jb250cm9sc1tuYW1lXSAmJiB0aGlzLm9wdGlvbnMuY29udHJvbHNbbmFtZV1baW5kZXhdKSB7XG5cdFx0XHRcdFx0dGhpcy5vcHRpb25zLmNvbnRyb2xzW25hbWVdW2luZGV4XSA9IGV4Y2x1ZGVBcnJheSh0aGlzLm9wdGlvbnMuY29udHJvbHNbbmFtZV1baW5kZXhdLCByb3cpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdH1cblxuXHRcdGlmICh0aGlzLm9wdGlvbnMucHJlc2V0ICYmIFBsYXllci5nZXRQcmVzZXQodGhpcy5vcHRpb25zLnByZXNldCkpIHtcblx0XHRcdFBsYXllci5nZXRQcmVzZXQodGhpcy5vcHRpb25zLnByZXNldCkuaW5pdE9wdGlvbnMoKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQ3JlYXRlIGFuZCBpbml0IGFsbCBjb250cm9sc1xuXHQgKlxuXHQgKiBAYWNjZXNzIHByaXZhdGVcblx0ICovXG5cdF9pbml0Q29udHJvbHMoKSB7XG5cdFx0Zm9yIChjb25zdCBuYW1lIG9mIFsnY29tbW9uJywgJ2Z1bGxzY3JlZW4nXSkge1xuXHRcdFx0aWYgKCF0aGlzLm9wdGlvbnMuY29udHJvbHMuaGFzT3duUHJvcGVydHkobmFtZSkpIHJldHVybjtcblx0XHRcdGNvbnN0IGNvbnRyb2xDb2xsZWN0aW9uID0gbmV3IENvbnRyb2xDb2xsZWN0aW9uKHRoaXMsIHsgbmFtZSB9KTtcblxuXHRcdFx0dGhpcy5lbGVtZW50LmFwcGVuZChjb250cm9sQ29sbGVjdGlvbi5lbGVtZW50KTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5jb250cm9scy5jb21tb24gIT0gbnVsbCkge1xuXHRcdFx0dGhpcy5jb250cm9scy5jb21tb24uYWN0aXZlID0gdHJ1ZTtcblx0XHR9XG5cdH1cblxuXG5cdF9saXN0ZW5Ib3RLZXlzKCkge1xuXG5cdFx0Y29uc3QgaXNLZXlCaW5kaW5nID0gKGUsIGJpbmRpbmcpID0+IHtcblx0XHRcdHJldHVybiAoKGUud2hpY2ggPT09IGJpbmRpbmcua2V5KSB8fCAoZS5rZXkgPT09IGJpbmRpbmcua2V5KSkgJiZcblx0XHRcdFx0XHQoISFiaW5kaW5nLnNoaWZ0S2V5ID09PSBlLnNoaWZ0S2V5KSAmJlxuXHRcdFx0XHRcdCghIWJpbmRpbmcuY3RybEtleSA9PT0gZS5jdHJsS2V5KVxuXHRcdH1cblxuXHRcdHRoaXMuZWxlbWVudC5vbigna2V5ZG93bi5sZXBsYXllci5ob3RrZXknLCAoZSkgPT4ge1xuXHRcdFx0dGhpcy5vcHRpb25zLmtleUJpbmRpbmcuZm9yRWFjaChiaW5kaW5nID0+IHtcblxuXHRcdFx0XHRpZihpc0tleUJpbmRpbmcoZSwgYmluZGluZykpIHtcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0YmluZGluZy5mbih0aGlzKTtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblxuXHRcdFx0fSlcblx0XHR9KVxuXHR9XG5cblx0LyoqXG5cdCAqIEluaXQgc2VjdGlvbnMsIGdldCBhamF4IG9yIGpzb24gd2l0aCBzZWN0aW9ucyBkYXRhIGFuZCBjcmVhdGUgU2VjdGlvbnMgb2JqZWN0IGFuZCBhZGRlZCB0aGVtIHRvIHRoZSBET01cblx0ICpcblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqIEByZXR1cm5zIHtqcVByb21pc2V9IGpRdWVyeSBwcm9taXNlXG5cdCAqL1xuXHRfaW5pdFNlY3Rpb25zKCkge1xuXHRcdGNvbnN0IGRmZCA9ICQuRGVmZXJyZWQoKTtcblx0XHRpZiAodGhpcy5vcHRpb25zLmRhdGEgPT0gbnVsbCkge1xuXHRcdFx0ZGZkLnJlamVjdChudWxsKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmdldFNlY3Rpb25EYXRhKCkuZG9uZShzZWN0aW9ucyA9PiB7XG5cdFx0XHRcdHNlY3Rpb25zID0gWy4uLnNlY3Rpb25zXTtcblxuXHRcdFx0XHRjb25zdCBpc1NlY3Rpb25PdXRzaWRlID0gKHRoaXMuc2VjdGlvbnNDb250YWluZXIgJiYgdGhpcy5zZWN0aW9uc0NvbnRhaW5lci5sZW5ndGggPiAwKTtcblxuXHRcdFx0XHRpZiAoc2VjdGlvbnMgPT0gbnVsbCB8fCBzZWN0aW9ucy5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHRkZmQucmVqZWN0KG51bGwpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHNlY3Rpb25zID0gdGhpcy5fY29tcGxldGVTZWN0aW9ucyhzZWN0aW9ucyk7XG5cblx0XHRcdFx0dGhpcy5zZWN0aW9ucyA9IG5ldyBTZWN0aW9ucyh0aGlzLCB7XG5cdFx0XHRcdFx0aXRlbXMgOiBzZWN0aW9ucyxcblx0XHRcdFx0XHRmdWxsc2NyZWVuT25seSA6IGlzU2VjdGlvbk91dHNpZGUsXG5cdFx0XHRcdFx0aGlkZVNjcm9sbCA6IHRydWVcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0dGhpcy5pbm5lckVsZW1lbnQuYXBwZW5kKHRoaXMuc2VjdGlvbnMuZWxlbWVudCk7XG5cblx0XHRcdFx0aWYgKGlzU2VjdGlvbk91dHNpZGUpIHtcblx0XHRcdFx0XHR0aGlzLm91dHNpZGVTZWN0aW9ucyA9IG5ldyBTZWN0aW9ucyh0aGlzLCB7XG5cdFx0XHRcdFx0XHRpdGVtcyA6IHNlY3Rpb25zXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0dGhpcy5zZWN0aW9uc0NvbnRhaW5lci5hcHBlbmQodGhpcy5vdXRzaWRlU2VjdGlvbnMuZWxlbWVudCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZGZkLnJlc29sdmUoeyBpdGVtcyA6IHNlY3Rpb25zIH0pO1xuXHRcdFx0fSlcblx0XHR9XG5cblx0XHRyZXR1cm4gZGZkLnByb21pc2UoKVxuXHR9XG5cblx0LyoqXG5cdCAqIEZ1bmN0aW9uLCB0aGFuIGluaXQgYWxsIHBsdWdpbnMgZnJvbSBwbGF5ZXIgb3B0aW9ucy5cblx0ICogSWYgcGx1Z2luIGRvZXNuJ3QgZXhpc3QgdGhyb3cgYW4gZXJyb3Jcblx0ICpcblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqIEByZXR1cm5zIHtQbGF5ZXJ9IHRoaXNcblx0ICovXG5cdF9pbml0UGx1Z2lucygpIHtcblx0XHRpZiAodGhpcy5vcHRpb25zLnBsdWdpbnMpIHtcblx0XHRcdGZvciAoY29uc3QgbmFtZSBpbiB0aGlzLm9wdGlvbnMucGx1Z2lucykge1xuXHRcdFx0XHRpZighdGhpcy5vcHRpb25zLnBsdWdpbnMuaGFzT3duUHJvcGVydHkobmFtZSkpIHJldHVybjtcblx0XHRcdFx0Y29uc3QgcGx1Z2luT3B0aW9ucyA9IHRoaXMub3B0aW9ucy5wbHVnaW5zW25hbWVdO1xuXHRcdFx0XHRpZih0aGlzW25hbWVdKSB7XG5cdFx0XHRcdFx0aWYocGx1Z2luT3B0aW9ucykge1xuXHRcdFx0XHRcdFx0dGhpc1tuYW1lXShwbHVnaW5PcHRpb25zKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcihgUGx1Z2luICcke25hbWV9JyBkb2Vzbid0IGV4aXN0YCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cblx0LyoqXG5cdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHQgKi9cblx0X2xpc3RlblVzZXJBY3Rpdml0eSgpIHtcblx0XHRsZXQgbW91c2VJblByb2dyZXNzO1xuXHRcdGxldCBsYXN0TW92ZVg7XG5cdFx0bGV0IGxhc3RNb3ZlWTtcblxuXHRcdGNvbnN0IG9uTW91c2VNb3ZlID0gKGUpID0+IHtcblx0XHRcdGlmKGUuc2NyZWVuWCAhPT0gbGFzdE1vdmVYIHx8IGUuc2NyZWVuWSAhPT0gbGFzdE1vdmVZKSB7XG5cdFx0XHRcdGxhc3RNb3ZlWCA9IGUuc2NyZWVuWDtcblx0XHRcdFx0bGFzdE1vdmVZID0gZS5zY3JlZW5ZO1xuXHRcdFx0XHR0aGlzLl91c2VyQWN0aXZpdHkgPSB0cnVlXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y29uc3Qgb25Nb3VzZURvd24gPSAoZSkgPT4ge1xuXHRcdFx0dGhpcy5fdXNlckFjdGl2aXR5ID0gdHJ1ZVxuXG5cdFx0XHQvLyBXaGlsZSB1c2VyIGlzIHByZXNzaW5nIG1vdXNlIG9yIHRvdWNoLCBkaXNwYXRjaCB1c2VyIGFjdGl2aXR5XG5cdFx0XHRjbGVhckludGVydmFsKG1vdXNlSW5Qcm9ncmVzcyk7XG5cblx0XHRcdG1vdXNlSW5Qcm9ncmVzcyA9IHNldEludGVydmFsKCgpID0+IHtcblx0XHRcdFx0dGhpcy5fdXNlckFjdGl2aXR5ID0gdHJ1ZVxuXHRcdFx0fSwgMjUwKTtcblx0XHR9XG5cblx0XHRjb25zdCBvbk1vdXNlVXAgPSAoZSkgPT4ge1xuXHRcdFx0dGhpcy5fdXNlckFjdGl2aXR5ID0gdHJ1ZVxuXHRcdFx0Y2xlYXJJbnRlcnZhbChtb3VzZUluUHJvZ3Jlc3MpO1xuXHRcdH1cblxuXHRcdHRoaXMuZWxlbWVudC5vbignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xuXG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdtb3VzZWRvd24nLCBvbk1vdXNlRG93bik7XG5cblx0XHR0aGlzLmVsZW1lbnQub24oJ21vdXNldXAnLCBvbk1vdXNlVXApO1xuXG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdrZXlkb3duJywgKGUpID0+IHRoaXMuX3VzZXJBY3Rpdml0eSA9IHRydWUpO1xuXHRcdHRoaXMuZWxlbWVudC5vbigna2V5dXAnLCAoZSkgPT4gdGhpcy5fdXNlckFjdGl2aXR5ID0gdHJ1ZSk7XG5cblx0XHQvLyBTZWUgaHR0cDovL2Vqb2huLm9yZy9ibG9nL2xlYXJuaW5nLWZyb20tdHdpdHRlci9cblx0XHRsZXQgaW5hY3Rpdml0eVRpbWVvdXQ7XG5cdFx0Y29uc3QgZGVsYXkgPSB0aGlzLm9wdGlvbnMuaW5uYWN0aXZpdHlUaW1lb3V0O1xuXHRcdHNldEludGVydmFsKCgpID0+IHtcblx0XHRcdGlmICh0aGlzLl91c2VyQWN0aXZpdHkpIHtcblxuXHRcdFx0XHQvLyBSZXNldCB1c2VyIGFjdGl2dXR5IHRyYWNrZXJcblx0XHRcdFx0dGhpcy5fdXNlckFjdGl2aXR5ID0gZmFsc2U7XG5cblx0XHRcdFx0dGhpcy51c2VyQWN0aXZlID0gdHJ1ZTtcblxuXHRcdFx0XHRjbGVhclRpbWVvdXQoaW5hY3Rpdml0eVRpbWVvdXQpO1xuXG5cdFx0XHRcdGlmIChkZWxheSA+IDApIHtcblxuXHRcdFx0XHRcdGluYWN0aXZpdHlUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoIXRoaXMuX3VzZXJBY3Rpdml0eSkge1xuXHRcdFx0XHRcdFx0XHR0aGlzLnVzZXJBY3RpdmUgPSBmYWxzZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9LCBkZWxheSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LCAyNTApXG5cdH1cblxuXHQvKipcblx0ICogU3RvcCBzaG93aW5nIHNwaW5uZXIgYW5kIGNsZWFyIGRlbGF5IG9mIHNob3dpbmcgc3Bpbm5lclxuXHQgKlxuXHQgKiBAYWNjZXNzIHByaXZhdGVcblx0ICovXG5cdF9zdG9wV2F5dGluZygpIHtcblx0XHR0aGlzLl93YWl0aW5nVGltZW91dHMuZm9yRWFjaChpdGVtID0+IGNsZWFyVGltZW91dChpdGVtKSk7XG5cdFx0dGhpcy5fd2FpdGluZ1RpbWVvdXRzID0gW107XG5cdFx0dGhpcy5yZW1vdmVDbGFzcygnbGVwbGF5ZXItLXdhaXRpbmcnKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTaG93IHNwaW5uZXIgd2l0aCBkZWxheSBpbiAzMDBtc1xuXHQgKlxuXHQgKiBAYWNjZXNzIHByaXZhdGVcblx0ICovXG5cdF9zdGFydFdhaXRpbmcoKSB7XG5cdFx0dGhpcy5fd2FpdGluZ1RpbWVvdXRzLnB1c2goc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHR0aGlzLmFkZENsYXNzKCdsZXBsYXllci0td2FpdGluZycpO1xuXHRcdH0sIDMwMCkpO1xuXHR9XG5cblxuXHQvKipcblx0ICogT24gaW5pdGVkIHBsYXllciBldmVudCBoYW5kbGVyXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge1BsYXllckV2ZW50fSBlXG5cdCAqL1xuXHRfb25Jbml0ZWQoZSkge1xuXHRcdHRoaXMuYWRkQ2xhc3MoJ2xlcGxheWVyLS1pbml0ZWQnKTtcblxuXHRcdHRoaXMub3B0aW9ucy5vblBsYXllckluaXRlZC5jYWxsKHRoaXMsIGUpO1xuXHR9XG5cblxuXHQvKipcblx0ICogT24gY2xpY2sgdmlkZW8gZXZlbnQgaGFuZGxlci4gRm9jdXMgb24gdmlkZW8gYW5kIHRvZ2dsZVBsYXlcblx0ICpcblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqIEBwYXJhbSB7UGxheWVyRXZlbnR9IGVcblx0ICovXG5cdF9vbkNsaWNrKGUpIHtcblx0XHRjbGVhclRpbWVvdXQodGhpcy5fZGJsY2xpY2tUaW1lb3V0KTtcblx0XHRjb25zdCB0b2dnbGVQbGF5ID0gKCkgPT4ge1xuXHRcdFx0dGhpcy5fZGJsY2xpY2tUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdHRoaXMudmlkZW8uZWxlbWVudC5mb2N1cygpXG5cdFx0XHRcdHRoaXMudG9nZ2xlUGxheSgpO1xuXG5cdFx0XHR9LCAzMDApO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIFNlZSBMUExSLTI5MFxuXHRcdCAqIE9uIHRvdWNoIGRldmljZXMgaW4gZnVsbHNjcmVlbiBpZiB1c2VyIG5vdCBhY3RpdmUgd2UgZG9uJ3Qgc2hvdWxkIHRvZ2dsZVxuXHRcdCAqIEF0IGZpcnN0IHdlIHNob3cgaGltIGEgY29udHJvbHNcblx0XHQgKi9cblx0XHRpZihJU19UT1VDSCgpICYmIHRoaXMudmlldyA9PT0gJ2Z1bGxzY3JlZW4nKSB7XG5cdFx0XHRpZih0aGlzLnBsYXllci51c2VyQWN0aXZlKSB7XG5cdFx0XHRcdHRvZ2dsZVBsYXkoKVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0b2dnbGVQbGF5KClcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogT24gZGJsY2xpY2sgb24gdGhlIHZpZGVvIHBsYXllciBldmVudCBoYW5kbGVyXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge1BsYXllckV2ZW50fSBlXG5cdCAqL1xuXHRfb25EYmNsaWNrKGUpIHtcblx0XHRjbGVhclRpbWVvdXQodGhpcy5fZGJsY2xpY2tUaW1lb3V0KTtcblx0XHR0aGlzLnRvZ2dsZUZ1bGxzY3JlZW4oKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBPbiBmdWxsc2NyZWVuIGNoYW5nZSBwbGF5ZXIgZXZlbnQgaGFuZGxlclxuXHQgKlxuXHQgKiBAYWNjZXNzIHByaXZhdGVcblx0ICogQHBhcmFtIHtQbGF5ZXJFdmVudH0gZVxuXHQgKi9cblx0X29uRnVsbHNjcmVlbkNoYW5nZShlLCBpc0ZzKSB7XG5cdFx0aWYoaXNGcykge1xuXHRcdFx0dGhpcy52aWV3ID0gJ2Z1bGxzY3JlZW4nO1xuXG5cdFx0XHQvLyBIaWRlIHNlY3Rpb25zIGJ5IGRlZmF1bHQgb24gbW9iaWxlIGZ1bGxzY3JlZW5cblx0XHRcdGlmKElTX0FORFJPSUQpIHtcblx0XHRcdFx0dGhpcy5fbGFzdFNlY3Rpb25zVmFsdWUgPSB0aGlzLnNlY3Rpb25zLnZpc2libGU7XG5cdFx0XHRcdHRoaXMuc2VjdGlvbnMudmlzaWJsZSA9IGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLmZvY3VzKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMudmlldyA9ICdjb21tb24nO1xuXG5cdFx0XHRpZihJU19BTkRST0lEKSB7XG5cdFx0XHRcdHRoaXMuc2VjdGlvbnMudmlzaWJsZSA9IHRoaXMuX2xhc3RTZWN0aW9uc1ZhbHVlO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBQYXVzZSB2aWRlbyBvbiBleGl0IGZ1bGxzY3JlZWVuIG9uIG1vYmlsZVxuXHRcdFx0aWYoSVNfQU5EUk9JRF9QSE9ORSB8fCBJU19JUEhPTkUgfHwgSVNfSVBPRCkge1xuXHRcdFx0XHR0aGlzLnBhdXNlKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblxuXHQvKipcblx0ICogT24gcGxheSBldmVudCBoYW5kbGVyXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge1BsYXllckV2ZW50fSBlXG5cdCAqL1xuXHRfb25QbGF5KCkge1xuXHRcdHRoaXMuc3BsYXNoSWNvbi5zaG93KCdwbGF5Jyk7XG5cdH1cblxuXHQvKipcblx0ICogT24gcGF1c2UgcGxheWVyIGV2ZW50IGhhbmRsZXJcblx0ICogU2hvdyBwYXVzZSBpY29uIGluIHRoZSBjZW50ZXIgb2YgdmlkZW9cblx0ICpcblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqL1xuXHRfb25QYXVzZSgpIHtcblx0XHR0aGlzLnNwbGFzaEljb24uc2hvdygncGF1c2UnKTtcblx0fVxuXG5cdF9vbkVudGl0eUZ1bGxzY3JlbkNoYW5nZSgpIHtcblx0XHRjb25zdCBmc0FwaSA9IEZ1bGxzY3JlZW5BcGk7XG5cdFx0Y29uc3QgaXNGcyA9ICEhZG9jdW1lbnRbZnNBcGkuZnVsbHNjcmVlbkVsZW1lbnRdO1xuXHRcdHRoaXMudHJpZ2dlcignZnVsbHNjcmVlbmNoYW5nZScsIGlzRnMpO1xuXHR9XG5cbn1cblxuLyoqXG4gKiBTdGF0aWMgaGVscGVyIGZvciBjcmVhdGluZyBhIHBsdWdpbnMgZm9yIGxlcGxheWVyXG4gKlxuICogQGFjY2VzcyBwdWJsaWNcbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHBsdWdpblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gUGx1Z2luIGluaXQgZnVuY3Rpb25cbiAqXG4gKiBAZXhhbXBsZVxuICogUGxheWVyLnBsdWdpbignaGVsbG9Xb3JsZCcsIGZ1bmN0aW9uKHBsdWdpbk9wdGlvbnMpIHtcbiAqICAgIGNvbnN0IHBsYXllciA9IHRoaXM7XG4gKiAgICBwbGF5ZXIub24oJ2NsaWNrJywgKCkgPT4gY29uc29sZS5sb2coJ0hlbGxvIHdvcmxkJykpO1xuICogfSlcbiAqXG4gKi9cblBsYXllci5wbHVnaW4gPSBmdW5jdGlvbihuYW1lLCBmbikge1xuXHRQbGF5ZXIucHJvdG90eXBlW25hbWVdID0gZm47XG59XG5cbi8qKlxuICogR2V0IGJ5IG5hbWUgcmVnaXN0ZXJlZCBjb21wb25lbnRcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSAtIE5hbWUgb2YgY29tcG9uZW50XG4gKiBAcmV0dXJuIHtDb21wb25lbnR9XG4gKi9cblBsYXllci5nZXRDb21wb25lbnQgPSBDb21wb25lbnQuZ2V0Q29tcG9uZW50O1xuXG4vKipcbiAqIFJlZ2lzdGVyIGNvbXBvbmVudFxuICpcbiAqIEBhY2Nlc3MgcHVibGljXG4gKiBAc3RhdGljXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtDb21wb25lbnR9IGNvbXBvbmVudFxuICpcbiAqIEBleGFtcGxlXG4gKiBQbGF5ZXIucmVnaXN0ZXJDb21wb25lbnQoJ0Vycm9yRGlzcGxheScsIEVycm9yRGlzcGxheSk7XG4gKi9cblBsYXllci5yZWdpc3RlckNvbXBvbmVudCA9IENvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudDtcblxuLyoqXG4gKiBSZWdpc3RlciBjb250cm9sXG4gKlxuICogQGFjY2VzcyBwdWJsaWNcbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge0NvbnRyb2x9IGNvbnRyb2xcbiAqL1xuUGxheWVyLmdldENvbnRyb2wgPSBDb250cm9sLmdldENvbnRyb2w7XG5cbi8qKlxuICogR2V0IGJ5IG5hbWUgcmVnaXN0ZXJlZCBjb250cm9sXG4gKlxuICogQGFjY2VzcyBwdWJsaWNcbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJucyB7Q29udHJvbH1cbiAqXG4gKiBAZXhhbXBsZVxuICogUGxheWVyLnJlZ2lzdGVyQ29udHJvbCgnYmFja3dhcmQnLCBCYWNrd2FyZENvbnRyb2wpO1xuICovXG5QbGF5ZXIucmVnaXN0ZXJDb250cm9sID0gQ29udHJvbC5yZWdpc3RlckNvbnRyb2w7XG5cblxuLyoqXG4gKiBDb252ZXJ0IHNlY29uZHMgdG8gZm9ybWF0IHN0cmluZyAnaGg/Om1tOnNzJ1xuICpcbiAqIEBhY2Nlc3MgcHVibGljXG4gKiBAcGFyYW0ge051bWJlcn0gc2Vjb25kcyBTZWNvbmRzXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHNob3dIb3VycyBjb252ZXJ0IHRvIGZvcm1hdCAnaGg6bW06c3MnXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG5QbGF5ZXIuc2Vjb25kc1RvVGltZSA9IHNlY29uZHNUb1RpbWU7XG5cblxuLyoqXG4gKiBTdGF0aWMgaGVscGVyIGZvciBjcmVhdGluZyBhIHBsdWdpbnMgZm9yIGxlcGxheWVyXG4gKlxuICogQGFjY2VzcyBwdWJsaWNcbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHBsdWdpblxuICogQHBhcmFtIHtGdW5jdGlvbnxPYmplY3R9IGZuIFBsdWdpbiBpbml0IGZ1bmN0aW9uXG4gKlxuICogQGV4YW1wbGVcbiAqIFBsYXllci5wcmVzZXQoJ2NvbW1vbicsIHtcbiAqICAgICB3aWR0aCA6ICcxMDAlJyxcbiAqICAgICBwbHVnaW5zIDoge1xuICogICAgICAgICBtaW5pcGxheWVyIDogdHJ1ZVxuICogICAgIH1cbiAqIH0pO1xuICovXG5QbGF5ZXIucHJlc2V0ID0gZnVuY3Rpb24obmFtZSwgb2JqKSB7XG5cdGlmKHR5cGVvZiBvYmogPT09ICdvYmplY3QnKSB7XG5cdFx0UGxheWVyLl9wcmVzZXRzW25hbWVdID0gJC5leHRlbmQoe30sIHtcblx0XHRcdG9wdGlvbnMgOiB7fSxcblx0XHRcdGluaXRPcHRpb25zIDogbm9vcFxuXHRcdH0sIG9iaik7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9iaiA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFBsYXllci5fcHJlc2V0c1tuYW1lXSA9IG9iaigpO1xuXHR9XG59O1xuXG5cblBsYXllci5nZXRQcmVzZXQgPSBmdW5jdGlvbihuYW1lKSB7XG5cdGlmKFBsYXllci5fcHJlc2V0c1tuYW1lXSkge1xuXHRcdHJldHVybiBQbGF5ZXIuX3ByZXNldHNbbmFtZV07XG5cdH0gZWxzZSB7XG5cdFx0Y29uc29sZS5lcnJvcihgcHJlc2V0ICR7bmFtZX0gZG9lc24ndCBleGlzdGApO1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG59XG5cblxuUGxheWVyLl9wcmVzZXRzID0ge307XG5cblBsYXllci5Db29raWUgPSBDb29raWU7XG5cblBsYXllci5fbG9hZFNWR1Nwcml0ZSA9IGZ1bmN0aW9uKHN2Zykge1xuXHRjb25zdCBoaWRkZW5FbGVtZW50ID0gJCgnPGRpdi8+JykuaGlkZSgpO1xuXHQkKCdib2R5JykucHJlcGVuZChoaWRkZW5FbGVtZW50LmFwcGVuZChzdmcpKTtcblx0cmV0dXJuIGhpZGRlbkVsZW1lbnQ7XG59XG5cblBsYXllci5kZWZhdWx0U3ByaXRlID0gcmVxdWlyZSgnLi4vLi4vZGlzdC9zdmcvc3ZnLWRlZnMuc3ZnJyk7XG5cbi8qIGdsb2JhbCBWRVJTSU9OICovXG5QbGF5ZXIudmVyc2lvbiA9IFZFUlNJT047XG5cbndpbmRvdy4kLmZuLmxlUGxheWVyID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIG5ldyBQbGF5ZXIoJCh0aGlzKSwgb3B0aW9ucyk7XG5cdH0pO1xufTtcblxud2luZG93LiQubGVQbGF5ZXIgPSBQbGF5ZXI7XG5cbndpbmRvdy5sZVBsYXllciA9IFBsYXllcjtcblxuXG4vKipcbiAqIE1pbmkgUGxheWVyIHBsdWdpblxuICpcbiAqIEBwbHVnaW5cbiAqL1xuUGxheWVyLnBsdWdpbignbWluaXBsYXllcicsIGZ1bmN0aW9uKHBsdWdpbk9wdGlvbnMpIHtcblx0Y29uc3QgcGxheWVyID0gdGhpcztcblxuXHQvLyDQnNC10YDQttC40Lwg0YEgdGhpcy5vcHRpb25zLm1pbmlwbGF5ZXIsINGH0YLQvtCx0Ysg0L3QtSDRgdC70L7QvNCw0YLRjCDQvtCx0YDQsNGC0L3Rg9GOINGB0L7QstC80LXRgdGC0LjQvNC+0YHRjCwg0YLQsNC6INC60LDQuiDRgNCw0L3RjNGI0LVcblx0Ly8g0LzQuNC90LjQv9C70LXQtdGAINC90LUg0LHRi9C7INC/0LvQsNCz0LjQvdC+0Lwg0L/Qu9C10LXRgNCwLlxuXHRjb25zdCBvcHRpb25zID0gJC5leHRlbmQoe30sIHtcblx0XHR3aWR0aCA6ICcxMDAlJyxcblx0XHRvZmZzZXRTaG93IDogKHBsYXllcikgPT4ge1xuXHRcdFx0Y29uc3Qgb2Zmc2V0ID0gcGxheWVyLmVsZW1lbnQub2Zmc2V0KCkudG9wXG5cdFx0XHRcdCsgcGxheWVyLmVsZW1lbnQub3V0ZXJIZWlnaHQoKVxuXHRcdFx0XHQtIHBsYXllci5nZXRDb250cm9scygnY29tbW9uJykuZWxlbWVudC5oZWlnaHQoKTtcblxuXHRcdFx0cmV0dXJuIG9mZnNldDtcblx0XHR9XG5cdH0sIHRoaXMub3B0aW9ucy5taW5pcGxheWVyLCBwbHVnaW5PcHRpb25zKTtcblxuXHRjb25zdCBjb250cm9scyA9IG5ldyBDb250cm9sQ29sbGVjdGlvbih0aGlzLCB7XG5cdFx0bmFtZSA6ICdtaW5pJyxcblx0XHRjb250cm9scyA6IG9wdGlvbnMuY29udHJvbHMsXG5cdFx0Y29udHJvbE9wdGlvbnMgOiB7XG5cdFx0XHRjb250cm9sIDoge1xuXHRcdFx0XHRkaXNhYmxlIDogZmFsc2Vcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xuXG5cdC8vINCS0YHRgtCw0LLQu9GP0LXQvCDQsiBpbmZvRWxlbWVudCDQv9C+0LQgdGl0bGUg0LggZGVzY3JpcHRpb25cblx0dGhpcy5pbmZvRWxlbWVudC5hcHBlbmQoY29udHJvbHMuZWxlbWVudCk7XG5cblx0LyoqXG5cdCAqIFJldHVybiBvZmZzZXQgb24gb1kgLCB3aGVuIG1pbmlwbGF5ZXIgc2hvdWxkIHNob3dpbmcgb3IgaGlkaW5nXG5cdCAqXG5cdCAqIEByZXR1cm5zIHtOdW1iZXJ9XG5cdCAqL1xuXHRjb25zdCBvZmZzZXRTaG93ID0gKCkgPT4ge1xuXHRcdGlmICgkLmlzRnVuY3Rpb24ob3B0aW9ucy5vZmZzZXRTaG93KSkge1xuXHRcdFx0cmV0dXJuIG9wdGlvbnMub2Zmc2V0U2hvdyhwbGF5ZXIpO1xuXHRcdH1cblxuXHRcdHJldHVybiBvcHRpb25zLm9mZnNldFNob3dcblx0fVxuXG5cdGNvbnN0IGdldFdpZHRoID0gKCkgPT4ge1xuXHRcdHJldHVybiBvcHRpb25zLndpZHRoIHx8IHRoaXMuZWxlbWVudC53aWR0aCgpO1xuXHR9XG5cblxuXHR0aGlzLl91cGRhdGVNaW5pUGxheWVyID0gKGUsIGZvcmNlKSA9PiB7XG5cdFx0Y29uc3Qgc2Nyb2xsVG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuXG5cdFx0Ly8gQmVjYXVzZSBpbiBmb3JjZSB1cGRhdGUsIGZvciBub3JtYWxseSBjb3VudCBoZWlnaHQgYW5kIHBhZGRpbmdcblx0XHQvLyBtaW5pcGxheWVyIGJlZm9yZSB0aGUgc2hvdyBtdXN0IGZpcnN0IGJlIGhpZGRlblxuXHRcdGlmKGZvcmNlKSB7XG5cdFx0XHR0aGlzLmhpZGVNaW5pUGxheWVyKGZvcmNlKTtcblx0XHR9XG5cblx0XHRpZihzY3JvbGxUb3AgPiBvZmZzZXRTaG93KCkpIHtcblx0XHRcdHRoaXMuc2hvd01pbmlQbGF5ZXIoZm9yY2UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmhpZGVNaW5pUGxheWVyKCk7XG5cdFx0fVxuXHR9XG5cblx0dGhpcy5zaG93TWluaVBsYXllciA9IChmb3JjZSkgPT4ge1xuXHRcdGlmICghZm9yY2UgJiYgdGhpcy52aWV3ID09PSAnbWluaScpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBBZGRlZCBlbXB0eSBzcGFjZVxuXHRcdHRoaXMuZWxlbWVudC5jc3MoJ3BhZGRpbmctdG9wJywgdGhpcy52aWRlb0NvbnRhaW5lci5oZWlnaHQoKSk7XG5cblx0XHR0aGlzLnZpZXcgPSdtaW5pJztcblx0fVxuXG5cdHRoaXMuaGlkZU1pbmlQbGF5ZXIgPSAoZm9yY2UpID0+IHtcblx0XHRpZighZm9yY2UgJiYgdGhpcy52aWV3ICE9PSAnbWluaScpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy52aWV3ID0gJ2NvbW1vbic7XG5cdH1cblxuXHQkKHdpbmRvdykub24oJ3Njcm9sbCcsIHRoaXMuX3VwZGF0ZU1pbmlQbGF5ZXIuYmluZCh0aGlzKSk7XG5cdCQod2luZG93KS5vbigncmVzaXplJywgdGhpcy5fdXBkYXRlTWluaVBsYXllci5iaW5kKHRoaXMpKTtcblx0dGhpcy5vbignaW5pdGVkJywgKGUpID0+IHRoaXMuX3VwZGF0ZU1pbmlQbGF5ZXIoZSwgdHJ1ZSkpO1xuXG5cdHRoaXMub25TZXRWaWV3KCdtaW5pJywgKCkgPT4ge1xuXHRcdHRoaXMuaW5uZXJFbGVtZW50LmNzcygnbWF4LXdpZHRoJywgZ2V0V2lkdGgoKSk7XG5cdFx0dGhpcy5pbm5lckVsZW1lbnQuY3NzKCdoZWlnaHQnLCB0aGlzLnZpZGVvLmhlaWdodCk7XG5cdH0pO1xuXG5cdHRoaXMub25EZWxWaWV3KCdtaW5pJywgKCkgPT4ge1xuXHRcdHRoaXMuaW5uZXJFbGVtZW50LmNzcygnbWF4LXdpZHRoJywgJycpXG5cdFx0dGhpcy5pbm5lckVsZW1lbnQuY3NzKCdoZWlnaHQnLCAnJylcblxuXHRcdHRoaXMuZWxlbWVudC5jc3MoJ3BhZGRpbmctdG9wJywgJycpO1xuXHR9KTtcblxuXG5cdHRoaXMuX3VwZGF0ZU1pbmlQbGF5ZXIoKTtcbn0pO1xuXG5cblBsYXllci5wcmVzZXQoJ3ZwcycsIHJlcXVpcmUoJy4vcHJlc2V0cy92cHMuanMnKS5wcmVzZXQpO1xuUGxheWVyLnByZXNldCgnc2ltcGxlJywgcmVxdWlyZSgnLi9wcmVzZXRzL3NpbXBsZS5qcycpLnByZXNldCk7XG5QbGF5ZXIucHJlc2V0KCdzbXMnLCByZXF1aXJlKCcuL3ByZXNldHMvc21zLmpzJykucHJlc2V0KTtcblBsYXllci5wcmVzZXQoJ2NvbXByZXNzZWQnLCByZXF1aXJlKCcuL3ByZXNldHMvY29tcHJlc3NlZC5qcycpLnByZXNldCk7XG5QbGF5ZXIucHJlc2V0KCcyMDM1JywgcmVxdWlyZSgnLi9wcmVzZXRzLzIwMzUuanMnKS5wcmVzZXQpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBsYXllclxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9sZS1wbGF5ZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9ICQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCIkXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBDb250cm9sLmpzXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJztcblxuLyoqXG4gKiBAY2xhc3MgQ29udHJvbFxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBDb250cm9sJ3Mgb3B0aW9uc1xuICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLmljb25OYW1lXSBOYW1lIG9mIGNvbnRyb2wncyBpY29uLiBJZiBlbXB0eSwgY29udHJvbCB3aWxsIG5vdCBoYXZlIGEgaWNvblxuICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLmNsYXNzTmFtZV1cbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5uYW1lXVxuICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLmNvbGxlY3Rpb25dXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMudGl0bGVdIENvbnRvcmwncyB0b29sdGlwLCB0aXRsZSBhdHRyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb3B0aW9ucy5vbkNsaWNrXSBPbiBjbGljayBldmVudCBoYW5kbGVyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmRpc2FibGU9ZmFsc2VdXG4gKiBAcHJvcGVydHkge0ljb259IGljb24gSWNvbiBpbiBjb250cm9sLCBpZiBpdCBpcyBleGlzdFxuICogQGV4dGVuZHMgQ29tcG9uZW50XG4gKi9cbmNsYXNzIENvbnRyb2wgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucykge1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cdFx0dGhpcy5lbWl0VGFwRXZlbnRzKCk7XG5cdFx0dGhpcy5kaXNhYmxlID0gdGhpcy5vcHRpb25zLmRpc2FibGUgIT0gbnVsbD8gdGhpcy5vcHRpb25zLmRpc2FibGUgOiB0cnVlO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ2luaXRlZCcsIChlKSA9PiB7XG5cdFx0XHR0aGlzLmRpc2FibGUgPSB0aGlzLm9wdGlvbnMuZGlzYWJsZSAhPSBudWxsPyB0aGlzLm9wdGlvbnMuZGlzYWJsZSA6IGZhbHNlO1xuXHRcdH0pXG5cblx0XHR0aGlzLmVsZW1lbnQub24oe1xuXHRcdFx0Y2xpY2sgOiB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKSxcblx0XHRcdHRhcCA6IHRoaXMub25DbGljay5iaW5kKHRoaXMpLFxuXHRcdH0pO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ2luaXRlZCcsIHRoaXMub25QbGF5ZXJJbml0ZWQuYmluZCh0aGlzKSlcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0aWYgKHRoaXMub3B0aW9ucy5pY29uTmFtZSkge1xuXHRcdFx0dGhpcy5pY29uID0gbmV3IEljb24odGhpcy5wbGF5ZXIsIHtcblx0XHRcdFx0aWNvbk5hbWUgOiB0aGlzLm9wdGlvbnMuaWNvbk5hbWVcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRsZXQgYXR0cnMgPSB7XG5cdFx0XHR0aXRsZSA6IHRoaXMub3B0aW9ucy50aXRsZVxuXHRcdH1cblx0XHR0aGlzLmVsZW1lbnQgPSAkKGA8JHt0aGlzLm9wdGlvbnMudGFnIHx8ICdidXR0b24nfSAvPmApXG5cdFx0XHQuYWRkQ2xhc3ModGhpcy5idWlsZENTU0NsYXNzKCkpXG5cdFx0XHQuYXBwZW5kKHRoaXMuaWNvbiAmJiB0aGlzLmljb24uZWxlbWVudClcblx0XHRcdC5hdHRyKGF0dHJzKTtcblxuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQ7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRidWlsZENTU0NsYXNzKCkge1xuXHRcdGxldCByZXN1bHQgPSBgY29udHJvbCAke3RoaXMub3B0aW9ucy5jbGFzc05hbWV9ICR7c3VwZXIuYnVpbGRDU1NDbGFzcygpfWA7XG5cdFx0LyoqXG5cdFx0ICogQHNlZSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yMzg4NTI1NS9ob3ctdG8tcmVtb3ZlLWlnbm9yZS1ob3Zlci1jc3Mtc3R5bGUtb24tdG91Y2gtZGV2aWNlc1xuXHRcdCAqIFdlIHNob3VsZCBpZ25vcmUgaG92ZXIgZWZmZXRjcyBvbiBpcGhvbmUsIGJlY2F1c2Ugd2Ugc2hvdyBob3ZlciBlZmZlY3Qgb24gdGFwXG5cdFx0ICovXG5cdFx0aWYoIXRoaXMucGxheWVyLmhhc0NsYXNzKCdsZXBsYXllci0taXBob25lJykpIHtcblx0XHRcdHJlc3VsdCArPSAnIGNvbnRyb2wtLW5vLWlwaG9uZSc7XG5cdFx0fVxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRzZXQgdGFwKHZhbHVlKSB7XG5cdFx0dGhpcy50b2dnbGVDbGFzcygnY29udHJvbC0tdGFwJywgdmFsdWUpO1xuXHR9XG5cblx0c2V0IGRpc2FibGUodmFsdWUpIHtcblx0XHR0aGlzLl9kaXNhYmxlID0gdmFsdWU7XG5cdFx0dGhpcy50b2dnbGVDbGFzcygnZGlzYWJsZWQnLCB2YWx1ZSk7XG5cdH1cblxuXHRnZXQgZGlzYWJsZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5fZGlzYWJsZVxuXHR9XG5cblx0LyoqXG5cdCAqXG5cdCAqIE9uIGNsaWNrIGV2ZW50IGhhbmRsZXJcblx0ICogQGFic3RhY3Rcblx0ICovXG5cdG9uQ2xpY2sgKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0aWYgKHRoaXMuZGlzYWJsZSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHR0aGlzLnBsYXllci50cmlnZ2VyKCdjb250cm9sY2xpY2snLCB7IGNvbnRyb2wgOiB0aGlzIH0pO1xuXG5cdFx0aWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0dGhpcy5vcHRpb25zLm9uQ2xpY2suY2FsbCh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdH1cblx0fVxuXG5cblx0b25QbGF5ZXJJbml0ZWQgKGUsIGRhdGEpIHtcblxuXHR9XG5cblx0c3RhdGljIHJlZ2lzdGVyQ29udHJvbChuYW1lLCBjb250cm9sKSB7XG5cdFx0aWYobmFtZSA9PSBudWxsKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYoQ29udHJvbC5fY29udHJvbHMgPT0gbnVsbCkge1xuXHRcdFx0Q29udHJvbC5fY29udHJvbHMgPSB7fTtcblx0XHR9XG5cblx0XHRDb250cm9sLl9jb250cm9sc1tuYW1lXSA9IGNvbnRyb2w7XG5cblx0XHRyZXR1cm4gY29udHJvbDtcblx0fVxuXG5cdHN0YXRpYyBnZXRDb250cm9sKG5hbWUpIHtcblx0XHRpZihuYW1lID09IG51bGwpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZihDb250cm9sLl9jb250cm9scyAmJiBDb250cm9sLl9jb250cm9sc1tuYW1lXSkge1xuXHRcdFx0cmV0dXJuIENvbnRyb2wuX2NvbnRyb2xzW25hbWVdO1xuXHRcdH1cblx0fVxuXG5cdHN0YXRpYyBjcmVhdGUocGxheWVyLCBuYW1lLCBvcHRpb25zKSB7XG5cdFx0dmFyIGNvbnRyb2xDbGFzcyA9IHRoaXMuZ2V0Q29udHJvbChuYW1lKTtcblx0XHRpZihjb250cm9sQ2xhc3MgPT0gbnVsbCkge1xuXHRcdFx0Y29uc29sZS5lcnJvcihgQ29udHJvbCAke25hbWV9IGRvZXNuJ3QgZXhpc3RgKTtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdHJldHVybiBuZXcgY29udHJvbENsYXNzKHBsYXllciwgb3B0aW9ucyk7XG5cdH1cblxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ0NvbnRyb2wnLCBDb250cm9sKTtcbkNvbnRyb2wucmVnaXN0ZXJDb250cm9sKCdjb250cm9sJywgQ29udHJvbCk7XG5leHBvcnQgZGVmYXVsdCBDb250cm9sO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvQ29udHJvbC5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgQ29tcG9uZW50LmpzXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuY29uc3QgdG9QbGF5ZXJFdmVudCA9IChldmVudHMpID0+IGV2ZW50cy5zcGxpdCgnICcpLnJlZHVjZSgoYWNjLCBlKSA9PiBhY2MgKyBgbGVwbGF5ZXJfJHtlfSBgLCAnJyk7XG5cbi8qKlxuICogUGxheWVyIGNvbXBvbmVudCAtIEJhc2UgY2xhc3MgZm9yIGFsbCBVSVxuICpcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gT3B0aW9ucyBvZiBjb21wb25lbnRcbiAqIEBwYXJhbSB7alF1ZXJ5fSBbb3B0aW9ucy5lbGVtZW50XSDQrdC70LXQvNC10L3RgiDQvdCwINC60L7RgtC+0YDQvtC8INC80L7QttC90L4g0LjQvdC40YbQuNC70LjQt9C+0LLQsNGC0Ywg0LrQu9Cw0YHRgS5cbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcHJvcGVydHkge2pRdWVyeX0gZWxlbWVudFxuICogQGNsYXNzIENvbXBvbmVudFxuICovXG5jbGFzcyBDb21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucykge1xuXHRcdG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0Y3JlYXRlRWxlbWVudCA6IHRydWVcblx0XHR9LCB0aGlzLm9wdGlvbnMsIG9wdGlvbnMpO1xuXG5cdFx0aWYoIXBsYXllciAmJiB0aGlzLnBsYXkgIT0gbnVsbCkge1xuXHRcdFx0dGhpcy5wbGF5ZXIgPSBwbGF5ZXIgPSB0aGlzO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnBsYXllciA9IHBsYXllcjtcblx0XHR9XG5cblx0XHRpZihvcHRpb25zLmNyZWF0ZUVsZW1lbnQpIHtcblxuXHRcdFx0aWYgKG9wdGlvbnMuZWxlbWVudCkge1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQgPSBvcHRpb25zLmVsZW1lbnQ7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmNyZWF0ZUVsZW1lbnQoKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMuZWxlbWVudC5sZW5ndGggIT09IDEpIHtcblx0XHRcdFx0Y29uc29sZS5lcnJvcihgQ29tcG9uZW50LnByb3RvdHlwZS5lbGVtZW50Lmxlbmd0aCBtdXN0IGVxdWFsIDEsIG5vdCAke3RoaXMuZWxlbWVudC5sZW5ndGh9XFxuYCwgdGhpcy5lbGVtZW50KTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5lbGVtZW50WzBdLl9fbm9kZSA9IHRoaXM7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEBhYnN0cmFjdFxuXHQgKi9cblx0Y3JlYXRlRWxlbWVudCgpIHtcblxuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdC8qKlxuXHQgKiBAYWJzdHJhY3Rcblx0ICovXG5cdGJ1aWxkQ1NTQ2xhc3MoKSB7XG5cdFx0cmV0dXJuICcnXG5cdH1cblxuXG5cdC8qKlxuXHQgKiBTZXQgdGhlIGZvY3VzIHRvIHRoaXMgY29tcG9uZW50XG5cdCAqL1xuXHRmb2N1cygpIHtcblx0XHR0aGlzLmVsZW1lbnQuZm9jdXMoKTtcblx0fVxuXG5cblx0LyoqXG5cdCAqIFJlbW92ZSB0aGUgZm9jdXMgZnJvbSB0aGlzIGNvbXBvbmVudFxuXHQgKi9cblx0Ymx1cigpIHtcblx0XHR0aGlzLmVsZW1lbnQuYmx1cigpO1xuXHR9XG5cblxuXHQvKipcblx0ICogRW1pdCBhIHBsYXllciBldmVudCAodGhlIG5hbWUgb2YgZXZlbnQgd291bGQgYmUgYSBsZXBsYXllcl9zbXRoKVxuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnROYW1lXG5cdCAqIEBwYXJhbSB7QXJndW1lbnRzfSAuLi5hcmdzIGpRdWVyeS5mbi5vbiBvdGhlciBhcmd1bWVudHNcblx0ICogQHJldHVybnMge1BsYXllcn0gdGhpc1xuXHQgKi9cblx0dHJpZ2dlcihldmVudE5hbWUsIC4uLmFyZ3MpIHtcblx0XHRjb25zdCBldmVudCA9ICQuRXZlbnQoYGxlcGxheWVyXyR7ZXZlbnROYW1lfWAsIHsgcGxheWVyIDogdGhpcy5wbGF5ZXIgfSk7XG5cdFx0dGhpcy5lbGVtZW50LnRyaWdnZXJIYW5kbGVyKGV2ZW50LCAuLi5hcmdzKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cblx0LyoqXG5cdCAqIExpc3RlbiBhIHBsYXllciBldmVudCB3aXRoIGxlcGxheWVyXyBzdWZmaXhcblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50TmFtZVxuXHQgKiBAcGFyYW0ge0FyZ3VtZW50c30gLi4uYXJncyBqUXVlcnkuZm4ub24gb3RoZXIgYXJndW1lbnRzXG5cdCAqIEByZXR1cm5zIHtQbGF5ZXJ9IHRoaXNcblx0ICovXG5cdG9uKGV2ZW50TmFtZXMsIC4uLmFyZ3MpIHtcblx0XHRpZih0eXBlb2YgZXZlbnROYW1lcyA9PT0gJ3N0cmluZycgfHwgZXZlbnROYW1lcyBpbnN0YW5jZW9mIFN0cmluZykge1xuXHRcdFx0dGhpcy5lbGVtZW50Lm9uKHRvUGxheWVyRXZlbnQoZXZlbnROYW1lcyksIC4uLmFyZ3MpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zb2xlLndhcm4oJ0ZpcnN0IGFyZ3VtZW50IG9mIFxcJ0NvbXBvbmVudC5vblxcJyBzaG91bGQgYmUgYSBzdHJpbmcnKTtcblx0XHRcdHRoaXMuZWxlbWVudC5vbihldmVudE5hbWVzLCAuLi5hcmdzKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXG5cdG9uZShldmVudE5hbWVzLCAuLi5hcmdzKSB7XG5cdFx0aWYodHlwZW9mIGV2ZW50TmFtZXMgPT09ICdzdHJpbmcnIHx8IGV2ZW50TmFtZXMgaW5zdGFuY2VvZiBTdHJpbmcpIHtcblx0XHRcdHRoaXMuZWxlbWVudC5vbmUodG9QbGF5ZXJFdmVudChldmVudE5hbWVzKSwgLi4uYXJncyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnNvbGUud2FybignRmlyc3QgYXJndW1lbnQgb2YgXFwnQ29tcG9uZW50Lm9uZVxcJyBzaG91bGQgYmUgYSBzdHJpbmcnKTtcblx0XHRcdHRoaXMuZWxlbWVudC5vbmUoZXZlbnROYW1lcywgLi4uYXJncyk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblxuXHQvKipcblx0ICogQWRkIHRoZSBDU1MgY2xhc3MgZm9yIGdlbmVyYWwgbGVwbGF5ZXIgRE9NIGVsZW1lbnRcblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZSBOYW1lIG9mIGNsYXNzIChub3QgYSBzZWxlY3RvciwgaXQncyBtZWFuLCB0aGF0IHN0cmluZyBzb3VsZCBiZSB3aXRob3V0IHBvaW50IGF0IHRoZSBzdGFydClcblx0ICogQHJldHVybnMge1BsYXllcn0gdGhpc1xuXHQgKi9cblx0YWRkQ2xhc3MoY2xhc3NOYW1lKSB7XG5cdFx0dGhpcy5lbGVtZW50LmFkZENsYXNzKGNsYXNzTmFtZSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvKipcblx0ICogUmVtb3ZlIHRoZSBDU1MgY2xhc3MgZnJvbSBnZW5lcmFsIGxlcGxheWVyIERPTSBlbGVtZW50XG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWUgTmFtZSBvZiBjbGFzc1xuXHQgKiBAcmV0dXJucyB7UGxheWVyfSB0aGlzXG5cdCAqL1xuXHRyZW1vdmVDbGFzcyhjbGFzc05hbWUpIHtcblx0XHR0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8qKlxuXHQgKiBUb2dnbGUgdGhlIENTUyBjbGFzcyBmcm9tIGdlbmVyYWwgbGVwbGF5ZXIgRE9NIGVsZW1lbnRcblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZVxuXHQgKiBAcGFyYW0ge0Jvb2xlYW59IGZsYWdcblx0ICogQHJldHVybnMge1BsYXllcn0gdGhpc1xuXHQgKi9cblx0dG9nZ2xlQ2xhc3MoY2xhc3NOYW1lLCBmbGFnKSB7XG5cdFx0dGhpcy5lbGVtZW50LnRvZ2dsZUNsYXNzKGNsYXNzTmFtZSwgZmxhZyk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRoYXNDbGFzcyhjbGFzc05hbWUpIHtcblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50Lmhhc0NsYXNzKGNsYXNzTmFtZSk7XG5cdH1cblxuXG5cdHN0YXRpYyByZWdpc3RlckNvbXBvbmVudChuYW1lLCBjb21wb25lbnQpIHtcblx0XHRpZihuYW1lID09IG51bGwpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZihDb21wb25lbnQuX2NvbXBvbmVudHMgPT0gbnVsbCkge1xuXHRcdFx0Q29tcG9uZW50Ll9jb21wb25lbnRzID0ge307XG5cdFx0fVxuXG5cdFx0Q29tcG9uZW50Ll9jb21wb25lbnRzW25hbWVdID0gY29tcG9uZW50O1xuXG5cdFx0cmV0dXJuIGNvbXBvbmVudDtcblx0fVxuXG5cdHN0YXRpYyBnZXRDb21wb25lbnQobmFtZSkge1xuXHRcdGlmKG5hbWUgPT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmKENvbXBvbmVudC5fY29tcG9uZW50cyAmJiBDb21wb25lbnQuX2NvbXBvbmVudHNbbmFtZV0pIHtcblx0XHRcdHJldHVybiBDb21wb25lbnQuX2NvbXBvbmVudHNbbmFtZV07XG5cdFx0fVxuXG5cdH1cblxuXHRzZXQgdGFwKHZhbHVlKSB7fVxuXG5cdGVtaXRUYXBFdmVudHMoZWxlbWVudD1udWxsKSB7XG5cdFx0aWYoZWxlbWVudCA9PSBudWxsKSB7XG5cdFx0XHRlbGVtZW50ID0gdGhpcy5lbGVtZW50O1xuXHRcdH1cblx0XHQvLyBUcmFjayB0aGUgc3RhcnQgdGltZSBzbyB3ZSBjYW4gZGV0ZXJtaW5lIGhvdyBsb25nIHRoZSB0b3VjaCBsYXN0ZWRcblx0XHRsZXQgdG91Y2hTdGFydCA9IDA7XG5cdFx0bGV0IGZpcnN0VG91Y2ggPSBudWxsO1xuXHRcdGxldCBsYXN0TW92ZVRvdWNoID0gbnVsbDtcblxuXHRcdC8vIE1heGltdW0gbW92ZW1lbnQgYWxsb3dlZCBkdXJpbmcgYSB0b3VjaCBldmVudCB0byBzdGlsbCBiZSBjb25zaWRlcmVkIGEgdGFwXG5cdFx0Ly8gT3RoZXIgcG9wdWxhciBsaWJzIHVzZSBhbnl3aGVyZSBmcm9tIDIgKGhhbW1lci5qcykgdG8gMTUsXG5cdFx0Ly8gc28gMTAgc2VlbXMgbGlrZSBhIG5pY2UsIHJvdW5kIG51bWJlci5cblx0XHRjb25zdCB0YXBNb3ZlbWVudFRocmVzaG9sZCA9IDEwO1xuXG5cdFx0Ly8gVGhlIG1heGltdW0gbGVuZ3RoIGEgdG91Y2ggY2FuIGJlIHdoaWxlIHN0aWxsIGJlaW5nIGNvbnNpZGVyZWQgYSB0YXBcblx0XHRjb25zdCB0b3VjaFRpbWVUaHJlc2hvbGQgPSAyMDA7XG5cblx0XHRsZXQgY291bGRCZVRhcDtcblxuXHRcdC8vIHNlZSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xNzk1NzU5My9ob3ctdG8tY2FwdHVyZS10b3VjaGVuZC1jb29yZGluYXRlc1xuXG5cdFx0ZWxlbWVudC5vbigndG91Y2hzdGFydCcsIChldmVudCkgPT4ge1xuXHRcdFx0Ly8gSWYgbW9yZSB0aGFuIG9uZSBmaW5nZXIsIGRvbid0IGNvbnNpZGVyIHRyZWF0aW5nIHRoaXMgYXMgYSBjbGlja1xuXHRcdFx0aWYgKGV2ZW50LnRvdWNoZXMubGVuZ3RoID09PSAxKSB7XG5cdFx0XHRcdC8vIENvcHkgcGFnZVgvcGFnZVkgZnJvbSB0aGUgb2JqZWN0XG5cdFx0XHRcdGZpcnN0VG91Y2ggPSBsYXN0TW92ZVRvdWNoID0ge1xuXHRcdFx0XHRcdHBhZ2VYIDogZXZlbnQudG91Y2hlc1swXS5wYWdlWCxcblx0XHRcdFx0XHRwYWdlWSA6IGV2ZW50LnRvdWNoZXNbMF0ucGFnZVlcblx0XHRcdFx0fTtcblx0XHRcdFx0Ly8gUmVjb3JkIHN0YXJ0IHRpbWUgc28gd2UgY2FuIGRldGVjdCBhIHRhcCB2cy4gXCJ0b3VjaCBhbmQgaG9sZFwiXG5cdFx0XHRcdHRvdWNoU3RhcnQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblx0XHRcdFx0Ly8gUmVzZXQgY291bGRCZVRhcCB0cmFja2luZ1xuXHRcdFx0XHRjb3VsZEJlVGFwID0gdHJ1ZTtcblx0XHRcdFx0dGhpcy50YXAgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0ZWxlbWVudC5vbigndG91Y2htb3ZlJywgKGV2ZW50KSA9PiB7XG5cdFx0XHQvLyBJZiBtb3JlIHRoYW4gb25lIGZpbmdlciwgZG9uJ3QgY29uc2lkZXIgdHJlYXRpbmcgdGhpcyBhcyBhIGNsaWNrXG5cdFx0XHRpZiAoZXZlbnQudG91Y2hlcy5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdGNvdWxkQmVUYXAgPSBmYWxzZTtcblx0XHRcdH0gZWxzZSBpZiAoZmlyc3RUb3VjaCkge1xuXHRcdFx0Ly8gU29tZSBkZXZpY2VzIHdpbGwgdGhyb3cgdG91Y2htb3ZlcyBmb3IgYWxsIGJ1dCB0aGUgc2xpZ2h0ZXN0IG9mIHRhcHMuXG5cdFx0XHQvLyBTbywgaWYgd2UgbW92ZWQgb25seSBhIHNtYWxsIGRpc3RhbmNlLCB0aGlzIGNvdWxkIHN0aWxsIGJlIGEgdGFwXG5cdFx0XHRcdGNvbnN0IHhkaWZmID0gZXZlbnQudG91Y2hlc1swXS5wYWdlWCAtIGZpcnN0VG91Y2gucGFnZVg7XG5cdFx0XHRcdGNvbnN0IHlkaWZmID0gZXZlbnQudG91Y2hlc1swXS5wYWdlWSAtIGZpcnN0VG91Y2gucGFnZVk7XG5cdFx0XHRcdGNvbnN0IHRvdWNoRGlzdGFuY2UgPSBNYXRoLnNxcnQoeGRpZmYgKiB4ZGlmZiArIHlkaWZmICogeWRpZmYpO1xuXG5cdFx0XHRcdGlmIChldmVudC50b3VjaGVzLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0XHRcdGxhc3RNb3ZlVG91Y2ggPSB7XG5cdFx0XHRcdFx0XHRwYWdlWCA6IGV2ZW50LnRvdWNoZXNbMF0ucGFnZVgsXG5cdFx0XHRcdFx0XHRwYWdlWSA6IGV2ZW50LnRvdWNoZXNbMF0ucGFnZVlcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHRvdWNoRGlzdGFuY2UgPiB0YXBNb3ZlbWVudFRocmVzaG9sZCkge1xuXHRcdFx0XHRcdGNvdWxkQmVUYXAgPSBmYWxzZTtcblx0XHRcdFx0XHR0aGlzLnRhcCA9IGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRjb25zdCBub1RhcCA9ICgpID0+IHtcblx0XHRcdGNvdWxkQmVUYXAgPSBmYWxzZTtcblx0XHRcdHRoaXMudGFwID0gZmFsc2U7XG5cdFx0fTtcblxuXHRcdC8vIFRPRE86IExpc3RlbiB0byB0aGUgb3JpZ2luYWwgdGFyZ2V0LiBodHRwOi8veW91dHUuYmUvRHVqZnBYT0tVcDg/dD0xM204c1xuXHRcdGVsZW1lbnQub24oJ3RvdWNobGVhdmUnLCBub1RhcCk7XG5cdFx0ZWxlbWVudC5vbigndG91Y2hjYW5jZWwnLCBub1RhcCk7XG5cblx0XHQvLyBXaGVuIHRoZSB0b3VjaCBlbmRzLCBtZWFzdXJlIGhvdyBsb25nIGl0IHRvb2sgYW5kIHRyaWdnZXIgdGhlIGFwcHJvcHJpYXRlXG5cdFx0Ly8gZXZlbnRcblx0XHRlbGVtZW50Lm9uKCd0b3VjaGVuZCcsIChldmVudCkgPT4ge1xuXHRcdFx0Zmlyc3RUb3VjaCA9IG51bGw7XG5cdFx0XHR0aGlzLnRhcCA9IGZhbHNlO1xuXHRcdFx0Ly8gUHJvY2VlZCBvbmx5IGlmIHRoZSB0b3VjaG1vdmUvbGVhdmUvY2FuY2VsIGV2ZW50IGRpZG4ndCBoYXBwZW5cblx0XHRcdGlmIChjb3VsZEJlVGFwID09PSB0cnVlKSB7XG5cdFx0XHQvLyBNZWFzdXJlIGhvdyBsb25nIHRoZSB0b3VjaCBsYXN0ZWRcblx0XHRcdFx0Y29uc3QgdG91Y2hUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSB0b3VjaFN0YXJ0O1xuXG5cdFx0XHRcdC8vIE1ha2Ugc3VyZSB0aGUgdG91Y2ggd2FzIGxlc3MgdGhhbiB0aGUgdGhyZXNob2xkIHRvIGJlIGNvbnNpZGVyZWQgYSB0YXBcblx0XHRcdFx0aWYgKHRvdWNoVGltZSA8IHRvdWNoVGltZVRocmVzaG9sZCkge1xuXHRcdFx0XHRcdC8vIERvbid0IGxldCBicm93c2VyIHR1cm4gdGhpcyBpbnRvIGEgY2xpY2tcblx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdC8qKlxuXHRcdFx0XHRcdCAqIFRyaWdnZXJlZCB3aGVuIGEgYENvbXBvbmVudGAgaXMgdGFwcGVkLlxuXHRcdFx0XHRcdCAqXG5cdFx0XHRcdFx0ICogQGV2ZW50IENvbXBvbmVudCN0YXBcblx0XHRcdFx0XHQgKi9cblx0XHRcdFx0XHRjb25zdCB0YXBFdmVudCA9ICQuRXZlbnQoJ3RhcCcpO1xuXHRcdFx0XHRcdHRhcEV2ZW50LnBhZ2VYID0gbGFzdE1vdmVUb3VjaC5wYWdlWDtcblx0XHRcdFx0XHR0YXBFdmVudC5wYWdlWSA9IGxhc3RNb3ZlVG91Y2gucGFnZVk7XG5cdFx0XHRcdFx0ZWxlbWVudC50cmlnZ2VyKHRhcEV2ZW50KTtcblx0XHRcdFx0XHQvLyBJdCBtYXkgYmUgZ29vZCB0byBjb3B5IHRoZSB0b3VjaGVuZCBldmVudCBvYmplY3QgYW5kIGNoYW5nZSB0aGVcblx0XHRcdFx0XHQvLyB0eXBlIHRvIHRhcCwgaWYgdGhlIG90aGVyIGV2ZW50IHByb3BlcnRpZXMgYXJlbid0IGV4YWN0IGFmdGVyXG5cdFx0XHRcdFx0Ly8gRXZlbnRzLmZpeEV2ZW50IHJ1bnMgKGUuZy4gZXZlbnQudGFyZ2V0KVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ0NvbXBvbmVudCcsIENvbXBvbmVudCk7XG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9Db21wb25lbnQuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIEljb24uanNcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5cbi8qKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBJY29uJ3Mgb3B0aW9uc1xuICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLmljb25OYW1lPScnXSBJY29uJ3MgbmFtZS4gSWYgdXNlIHN2Z3Nwcml0ZSBpY29ucywgaWNvbk5hbWUgaXQncyBpZCBpbiBzcHJpdGVcbiAqIEBjbGFzcyBJY29uXG4gKiBAZXh0ZW5kcyBDb21wb25lbnRcbiAqL1xuY2xhc3MgSWNvbiBleHRlbmRzIENvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IgKHBsYXllciwgb3B0aW9ucz17fSkge1xuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0Y2xhc3NOYW1lIDogJycsXG5cdFx0XHRpY29uTmFtZSA6ICcnXG5cdFx0fSwgb3B0aW9ucylcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXG5cdH1cblxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0dGhpcy5fdXNlVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICd1c2UnKTtcblx0XHR0aGlzLl9zdmdUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xuXG5cdFx0dGhpcy5pY29uTmFtZSA9IHRoaXMuX2ljb25OYW1lID0gdGhpcy5vcHRpb25zLmljb25OYW1lO1xuXHRcdHRoaXMuX3N2Z1RhZy5hcHBlbmRDaGlsZCh0aGlzLl91c2VUYWcpO1xuXHRcdHRoaXMuZWxlbWVudCA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0LmFkZENsYXNzKHRoaXMuYnVpbGRDU1NDbGFzcygpKVxuXHRcdFx0LmF0dHIoJ3RpdGxlJywgdGhpcy5vcHRpb25zLnRpdGxlKVxuXHRcdFx0LmFwcGVuZCgkKHRoaXMuX3N2Z1RhZykpO1xuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQ7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRidWlsZENTU0NsYXNzKCkge1xuXHRcdHJldHVybiBgJHtzdXBlci5idWlsZENTU0NsYXNzKCl9IGxlcGxheWVyLWljb24gJHt0aGlzLm9wdGlvbnMuY2xhc3NOYW1lfWBcblx0fVxuXG5cdC8qKlxuXHQgKiBTZXR0ZXIgb2YgaWNvbk5hbWUgZmllbGRcblx0ICogQHBhcmFtIHtTdHJpbmd9IGljb25OYW1lXG5cdCAqL1xuXHRzZXQgaWNvbk5hbWUoaWNvbk5hbWUpIHtcblx0XHRsZXQgYXR0ck5TID0gWydodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJywgJ2hyZWYnXVxuXHRcdHRoaXMuX3VzZVRhZy5yZW1vdmVBdHRyaWJ1dGVOUyguLi5hdHRyTlMsIGAke3RoaXMucGxheWVyLm9wdGlvbnMuc3ZnUGF0aH0jbGVwbGF5ZXItaWNvbi0ke3RoaXMuaWNvbk5hbWV9YClcblx0XHR0aGlzLl91c2VUYWcuc2V0QXR0cmlidXRlTlMoLi4uYXR0ck5TLCBgJHt0aGlzLnBsYXllci5vcHRpb25zLnN2Z1BhdGh9I2xlcGxheWVyLWljb24tJHtpY29uTmFtZX1gKVxuXHRcdHRoaXMuX2ljb25OYW1lID0gaWNvbk5hbWU7XG5cdH1cblxuXHQvKipcblx0ICogR2V0dGVyIG9mIGljb25OYW1lIGZpZWxkXG5cdCAqIEByZXR1cm4ge1N0cmluZ30gSWNvbidzIG5hbWVcblx0ICovXG5cdGdldCBpY29uTmFtZSAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2ljb25OYW1lO1xuXHR9XG5cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdJY29uJywgSWNvbik7XG5leHBvcnQgZGVmYXVsdCBJY29uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvSWNvbi5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgUGxheUJ1dHRvbi5qc1xuICovXG5cbmltcG9ydCBDb250cm9sIGZyb20gJy4vQ29udHJvbCc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCBJY29uIGZyb20gJy4vSWNvbic7XG5pbXBvcnQgeyBjcmVhdGVFbCB9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IElTX1RPVUNIIH0gZnJvbSAnLi4vdXRpbHMvYnJvd3Nlcic7XG5cbi8qKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICovXG5jbGFzcyBQbGF5QnV0dG9uIGV4dGVuZHMgQ29udHJvbCB7XG5cblx0Y29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKVxuXHR9XG5cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHRjb25zdCBpbm5lciA9IGNyZWF0ZUVsKCdkaXYnLCB7XG5cdFx0XHRjbGFzc05hbWUgOiAnbGVwbGF5ZXItcGxheS1idXR0b25fX2J1dHRvbidcblx0XHR9KVxuXHRcdC5hcHBlbmQobmV3IEljb24odGhpcy5wbGF5ZXIsIHsgaWNvbk5hbWUgOiAncGxheScgfSkuZWxlbWVudCk7XG5cblx0XHR0aGlzLmVsZW1lbnQgPSBjcmVhdGVFbCgnZGl2Jywge1xuXHRcdFx0Y2xhc3NOYW1lIDogdGhpcy5idWlsZENTU0NsYXNzKClcblx0XHR9KVxuXHRcdC5hcHBlbmQoaW5uZXIpO1xuXG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudDtcblx0fVxuXG5cdG9uQ2xpY2soZSkge1xuXHRcdHN1cGVyLm9uQ2xpY2soZSk7XG5cdFx0LyoqXG5cdFx0ICogU2VlIExQTFItMjkwXG5cdFx0ICogT24gdG91Y2ggZGV2aWNlcyBpbiBmdWxsc2NyZWVuIGlmIHVzZXIgbm90IGFjdGl2ZSB3ZSBkb24ndCBzaG91bGQgcGxheS5cblx0XHQgKiBBdCBmaXJzdCB3ZSBzaG93IGhpbSBhIGNvbnRyb2xzXG5cdFx0ICovXG5cdFx0aWYoSVNfVE9VQ0goKSAmJiB0aGlzLnBsYXllci52aWV3ID09PSAnZnVsbHNjcmVlbicpIHtcblx0XHRcdGlmKHRoaXMucGxheWVyLnVzZXJBY3RpdmUpIHtcblx0XHRcdFx0dGhpcy5wbGF5ZXIucGxheSgpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnBsYXllci5wbGF5KCk7XG5cdFx0fVxuXG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRidWlsZENTU0NsYXNzKCkge1xuXHRcdHJldHVybiBgbGVwbGF5ZXItcGxheS1idXR0b24gJHt0aGlzLm9wdGlvbnMuY2xhc3NOYW1lfWBcblx0fVxuXG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnUGxheUJ1dHRvbicsIFBsYXlCdXR0b24pO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ3BsYXkgYnV0dG9uJywgUGxheUJ1dHRvbik7XG5leHBvcnQgZGVmYXVsdCBQbGF5QnV0dG9uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvUGxheUJ1dHRvbi5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgdGltZS5qc1xuICpcbiAqIEBtb2R1bGUgdGltZVxuICovXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG4vKipcbiAqIENvbnZlcnQgc2Vjb25kcyB0byBmb3JtYXQgc3RyaW5nICdoaD86bW06c3MnXG4gKlxuICogQGFjY2VzcyBwdWJsaWNcbiAqIEBwYXJhbSB7TnVtYmVyfSBzZWNvbmRzIFNlY29uZHNcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gc2hvd0hvdXJzIGNvbnZlcnQgdG8gZm9ybWF0ICdoaDptbTpzcydcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZWNvbmRzVG9UaW1lIChzZWNvbmRzLCBzaG93SG91cnMpIHtcblx0dmFyIGggPSBNYXRoLmZsb29yKHNlY29uZHMgLyAzNjAwKTtcblx0dmFyIG0gPSBNYXRoLmZsb29yKHNlY29uZHMgJSAzNjAwIC8gNjApO1xuXHR2YXIgcyA9IE1hdGguZmxvb3Ioc2Vjb25kcyAlIDM2MDAgJSA2MCk7XG5cdHZhciBvdXQgPSAnJztcblx0aWYgKG0gPCAxMCkge1xuXHRcdG0gPSAnMCcgKyBtO1xuXHR9XG5cdGlmIChzIDwgMTApIHtcblx0XHRzID0gJzAnICsgcztcblx0fVxuXHRvdXQgPSBgJHttfToke3N9YDtcblxuXHRpZihoID4gMCB8fCBzaG93SG91cnMpIHtcblx0XHRvdXQgPSBgJHtofTpgICsgb3V0XG5cdH1cblx0cmV0dXJuIG91dDtcbn1cblxuXG4vKipcbiAqIFJldHVybiBsZW5ndGggLyBlbmRcbiAqXG4gKiBAYWNjZXNzIHB1YmxpY1xuICogQHBhcmFtIHtOdW1iZXJ9IGxlbmd0aFxuICogQHBhcmFtIHtOdWJtZXJ9IGVuZFxuICovXG5leHBvcnQgZnVuY3Rpb24gcGVyY2VudGlmeSAobGVuZ3RoLCBlbmQpIHtcblx0Ly8gb3IgemVybyBiZWFjYXNlIE5hTlxuXHRjb25zdCBwZXJjZW50ID0gKGxlbmd0aCAvIGVuZCkgfHwgMDtcblx0cmV0dXJuIChwZXJjZW50ID49IDEpID8gMSA6IHBlcmNlbnQ7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsKHRhZz0nZGl2JywgcHJvcHMpIHtcblx0aWYocHJvcHMgJiYgcHJvcHMuY2xhc3NOYW1lKSB7XG5cdFx0cHJvcHNbXCJjbGFzc1wiXSA9IHByb3BzLmNsYXNzTmFtZTtcblx0XHRkZWxldGUgcHJvcHMuY2xhc3NOYW1lO1xuXHR9XG5cdHJldHVybiAkKGA8JHt0YWd9Lz5gLCBwcm9wcyk7XG59XG5cblxuLyoqXG4gKiBAcGFyYW1zIHtTdHJpbmd9IEh0bWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICRodG1sKGh0bWwpIHtcblxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBub29wKCkge31cblxuZXhwb3J0IGNvbnN0IGdldFNjcm9sbEJhcldpZHRoID0gKGZ1bmN0aW9uKCkge1xuXHRsZXQgcmVzdWx0O1xuXG5cdHJldHVybiBmdW5jdGlvbigpIHtcblxuXHRcdGlmKHJlc3VsdCAhPSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH1cblxuXHRcdGNvbnN0IG91dGVyID0gJCgnPGRpdiAvPicpLmNzcyh7XG5cdFx0XHR2aXNpYmlsaXR5IDogJ2hpZGRlbicsXG5cdFx0XHR3aWR0aCA6IDEwMCxcblx0XHRcdG92ZXJmbG93IDogJ3Njcm9sbCdcblx0XHR9KS5hcHBlbmRUbygnYm9keScpO1xuXG5cdFx0Y29uc3Qgd2lkdGhXaXRoU2Nyb2xsID0gJCgnPGRpdiAvPicpLmNzcyh7XG5cdFx0XHR3aWR0aCA6ICcxMDAlJ1xuXHRcdH0pLmFwcGVuZFRvKG91dGVyKS5vdXRlcldpZHRoKCk7XG5cblx0XHRvdXRlci5yZW1vdmUoKTtcblx0XHRyZXR1cm4gcmVzdWx0ID0gMTAwIC0gd2lkdGhXaXRoU2Nyb2xsO1xuXHR9XG5cbn0oKSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvdXRpbHMvaW5kZXguanMiLCIvKipcbiAqIEBmaWxlIGJyb3dzZXIuanNcbiAqL1xuXG5cbmNvbnN0IFVTRVJfQUdFTlQgPSB3aW5kb3cubmF2aWdhdG9yICYmIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50IHx8ICcnO1xuXG5leHBvcnQgY29uc3QgSVNfTU9CSUxFID0gKC9Nb2JpbGUvaSkudGVzdChVU0VSX0FHRU5UKTtcblxuZXhwb3J0IGNvbnN0IElTX0NIUk9NRSA9IFVTRVJfQUdFTlQuaW5kZXhPZignQ2hyb21lJykgPiAtMTtcblxuZXhwb3J0IGNvbnN0IElTX0FORFJPSUQgPSAoL0FuZHJvaWQvaSkudGVzdChVU0VSX0FHRU5UKTtcblxuZXhwb3J0IGNvbnN0IElTX0FORFJPSURfUEhPTkUgPSBJU19BTkRST0lEICYmIElTX01PQklMRTtcblxuZXhwb3J0IGNvbnN0IElTX0lQQUQgPSAoL2lQYWQvaSkudGVzdChVU0VSX0FHRU5UKTtcbi8vIFRoZSBGYWNlYm9vayBhcHAncyBVSVdlYlZpZXcgaWRlbnRpZmllcyBhcyBib3RoIGFuIGlQaG9uZSBhbmQgaVBhZCwgc29cbi8vIHRvIGlkZW50aWZ5IGlQaG9uZXMsIHdlIG5lZWQgdG8gZXhjbHVkZSBpUGFkcy5cbi8vIGh0dHA6Ly9hcnRzeS5naXRodWIuaW8vYmxvZy8yMDEyLzEwLzE4L3RoZS1wZXJpbHMtb2YtaW9zLXVzZXItYWdlbnQtc25pZmZpbmcvXG5leHBvcnQgY29uc3QgSVNfSVBIT05FID0gKC9pUGhvbmUvaSkudGVzdChVU0VSX0FHRU5UKSAmJiAhSVNfSVBBRDtcbmV4cG9ydCBjb25zdCBJU19JUE9EID0gKC9pUG9kL2kpLnRlc3QoVVNFUl9BR0VOVCk7XG5leHBvcnQgY29uc3QgSVNfSU9TID0gSVNfSVBIT05FIHx8IElTX0lQQUQgfHwgSVNfSVBPRDtcblxuZXhwb3J0IGNvbnN0IElTX1NBRkFSSSA9IFVTRVJfQUdFTlQuaW5kZXhPZignU2FmYXJpJykgPiAtMSAmJiAhSVNfQ0hST01FO1xuXG5leHBvcnQgY29uc3QgSVNfVE9VQ0ggPSAoKSA9PiAnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cgfHwgbmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy91dGlscy9icm93c2VyLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBTcGxhc2hJY29uLmpzXG4gKi9cblxuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgSWNvbiBmcm9tICcuL0ljb24nO1xuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEBjbGFzcyBTcGxhc2hJY29uXG4gKiBAZXh0ZW5kcyBDb21wb25lbnRcbiAqL1xuY2xhc3MgU3BsYXNoSWNvbiBleHRlbmRzIENvbXBvbmVudCB7XG5cblx0c2hvdyhuYW1lKSB7XG5cdFx0dGhpcy5pY29uLmljb25OYW1lID0gbmFtZTtcblx0XHR0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoJ2xlcGxheWVyLXNwbGFzaGljb24tLWFjdGl2ZScpO1xuXHRcdHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbGVtZW50LnJlbW92ZUNsYXNzKCdsZXBsYXllci1zcGxhc2hpY29uLS1hY3RpdmUnKSwgMzAwKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0dGhpcy5pY29uID0gbmV3IEljb24odGhpcy5wbGF5ZXIpO1xuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQgPSAkKCc8ZGl2IC8+Jylcblx0XHRcdC5hZGRDbGFzcygnbGVwbGF5ZXItc3BsYXNoaWNvbicpXG5cdFx0XHQuYXBwZW5kKHRoaXMuaWNvbi5lbGVtZW50KTtcblx0fVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNwbGFzaEljb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9TcGxhc2hJY29uLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBUaW1lLmpzXG4gKi9cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL0NvbXBvbmVudCc7XG5pbXBvcnQgeyBzZWNvbmRzVG9UaW1lLCBjcmVhdGVFbCB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuLy8gVE9ETzog0JjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGMINGN0YLQvtGCINCx0LvQvtC6INCyIFRpbWVDb250cm9sXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEBjbGFzcyBUaW1lXG4gKiBAZXh0ZW5kcyBDb250cm9sXG4gKi9cbmNsYXNzIFRpbWUgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yIChwbGF5ZXIsIG9wdGlvbnM9e30pIHtcblx0XHRvcHRpb25zID0gJC5leHRlbmQoe30sIHtcblx0XHRcdGZuIDogKHBsYXllcikgPT4ge1xuXHRcdFx0XHRjb25zdCB2aWRlbyA9IHBsYXllci52aWRlbztcblx0XHRcdFx0cmV0dXJuIHNlY29uZHNUb1RpbWUodmlkZW8uY3VycmVudFRpbWUpO1xuXHRcdFx0fVxuXHRcdH0sIG9wdGlvbnMpO1xuXG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblxuXHRcdHRoaXMucGxheWVyLm9uKCd0aW1ldXBkYXRlJywgdGhpcy51cGRhdGVUZXh0LmJpbmQodGhpcykpO1xuXHRcdHRoaXMucGxheWVyLm9uKCdpbml0ZWQnLCB0aGlzLnVwZGF0ZVRleHQuYmluZCh0aGlzKSk7XG5cdH1cblxuXHR1cGRhdGVUZXh0KGUsIGRhdGEpIHtcblx0XHR0aGlzLmVsZW1lbnQudGV4dCh0aGlzLm9wdGlvbnMuZm4odGhpcy5wbGF5ZXIpKTtcblx0fVxuXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0dGhpcy5lbGVtZW50ID0gY3JlYXRlRWwoJ2RpdicsIHsgY2xhc3NOYW1lIDogJ2xlcGxheWVyLXRpbWUnIH0pO1xuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQ7XG5cdH1cblxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ1RpbWUnLCBUaW1lKTtcbmV4cG9ydCBkZWZhdWx0IFRpbWU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9UaW1lbGluZS9UaW1lLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBDb250cm9sQ29sbGVjdGlvbi5qc1xuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCBDb250cm9sIGZyb20gJy4vQ29udHJvbCc7XG5cbmltcG9ydCB7IGNyZWF0ZUVsIH0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgSVNfQU5EUk9JRF9QSE9ORSwgSVNfSVBIT05FLCBJU19NT0JJTEUgfSBmcm9tICcuLi91dGlscy9icm93c2VyJztcblxuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gT3B0aW9ucyBvZiBjb21wb25lbnRcbiAqIEBwYXJhbSB7alF1ZXJ5fSBbb3B0aW9ucy5jb250cm9sc10gQXJyYXkgb2Ygcm93cyBvZiBjb250cm9sJ3MgbmFtZVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLmNvbnRyb2xzT3B0aW9uc10gQ29udHJvbCBvcHRpb25zXG4gKiBAcHJvcGVydHkge0FycmF5fSBBcnJheSBvZiByb3dzIG9mIGNvbnRyb2wncyBuYW1lXG4gKiBAcHJcbiAqXG4gKi9cbmNsYXNzIENvbnRyb2xDb2xsZWN0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IgKHBsYXllciwgb3B0aW9ucykge1xuXHRcdGxldCB7IG5hbWUgfSA9IG9wdGlvbnM7XG5cblx0XHQvLyBPcHRpb25zIGJ5IHVzZXIgYWdlbnRcblx0XHQvLyBPcHRpb25zIG9ubHkgZm9yIGNvbW1vbjphbmRyb2lkIG9yIHdoYXRldmVyOmFuZHJvaWQsIHdoYXRldmVyOmlvcyBjb250cm9sc1xuXHRcdGxldCBsb2NhbFVhT3B0aW9ucyA9IHt9O1xuXG5cdFx0bGV0IGNvbnRyb2xzT3B0aW9ucyA9IHt9O1xuXG5cdFx0bGV0IGNvbnRyb2xzID0gW107XG5cblx0XHRpZihuYW1lICE9IG51bGwpIHtcblxuXHRcdFx0Y29udHJvbHMgPSBwbGF5ZXIub3B0aW9ucy5jb250cm9sc1tuYW1lXTtcblxuXHRcdFx0Y29udHJvbHNPcHRpb25zID0gcGxheWVyLm9wdGlvbnMuY29udHJvbHNPcHRpb25zW25hbWVdO1xuXG5cdFx0XHRbXG5cdFx0XHRcdHsgZmxhZyA6IElTX01PQklMRSwgbmFtZSA6ICdtb2JpbGUnfSxcbiAgICAgICAgICAgICAgICB7IGZsYWcgOiBJU19BTkRST0lEX1BIT05FLCBuYW1lIDogJ2FuZHJvaWQnIH0sXG4gICAgICAgICAgICAgICAgeyBmbGFnIDogSVNfSVBIT05FLCBuYW1lIDogJ2lvcycgfSxcblx0XHRcdF0uZm9yRWFjaChpdGVtID0+IHtcblx0XHRcdFx0aWYoaXRlbS5mbGFnKSB7XG5cdFx0XHRcdFx0Y29uc3QgbG9jYWxOYW1lID0gYCR7bmFtZX06JHtpdGVtLm5hbWV9YDtcblxuXHRcdFx0XHRcdGlmKHBsYXllci5vcHRpb25zLmNvbnRyb2xzW2xvY2FsTmFtZV0pIHtcblx0XHRcdFx0XHRcdGxvY2FsVWFPcHRpb25zID0gJC5leHRlbmQoe30sIGxvY2FsVWFPcHRpb25zLCBwbGF5ZXIub3B0aW9ucy5jb250cm9sc09wdGlvbnNbbG9jYWxOYW1lXSk7XG5cdFx0XHRcdFx0XHRjb250cm9scyA9IHBsYXllci5vcHRpb25zLmNvbnRyb2xzW2xvY2FsTmFtZV07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBpdGVtLmZsYWc7XG5cdFx0XHR9KTtcblx0XHR9XG5cblxuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0Y29udHJvbHMgOiBjb250cm9scyxcblx0XHRcdGFsaWduIDogJ2xlZnQnLFxuXHRcdFx0Y29udHJvbHNPcHRpb25zIDoge31cblx0XHR9LCBsb2NhbFVhT3B0aW9ucywgY29udHJvbHNPcHRpb25zLCBvcHRpb25zKTtcblxuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cblx0XHR0aGlzLmFjdGl2ZSA9IG9wdGlvbnMuYWN0aXZlIHx8IGZhbHNlO1xuXHRcdHRoaXMubmFtZSA9IG9wdGlvbnMubmFtZTtcblxuXHRcdHRoaXMucGxheWVyLmNvbnRyb2xzW3RoaXMubmFtZV0gPSB0aGlzO1xuXHR9XG5cblxuXHRfZ2V0Q29udHJvbE9wdGlvbnMobmFtZSkge1xuXHRcdGNvbnN0IHsgY29udHJvbHNPcHRpb25zIH0gPSB0aGlzLm9wdGlvbnM7XG5cdFx0bGV0IHJlc3VsdCA9IGNvbnRyb2xzT3B0aW9ucy5jb250cm9sIHx8IHt9O1xuXG5cdFx0aWYoY29udHJvbHNPcHRpb25zW25hbWVdKSB7XG5cdFx0XHRyZXN1bHQgPSAkLmV4dGVuZCh0cnVlLCB7fSwgcmVzdWx0LCBjb250cm9sc09wdGlvbnNbbmFtZV0pO1xuXHRcdH1cblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblxuXHRhZGRDb250cm9sKGluZGV4Um93LCBuYW1lLCBvcHRpb25zKSB7XG5cdFx0Y29uc3QgY29udHJvbCA9IENvbnRyb2wuY3JlYXRlKHRoaXMucGxheWVyLCBuYW1lLCB7XG5cdFx0XHRjb2xsZWN0aW9uIDogdGhpcy5vcHRpb25zLm5hbWUsXG5cdFx0XHQuLi5vcHRpb25zXG5cdFx0fSk7XG5cblx0XHRpZihjb250cm9sID09IG51bGwpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR3aGlsZShpbmRleFJvdyA+IHRoaXMuX3Jvd3MubGVuZ3RoKSB7XG5cdFx0XHR0aGlzLmFkZFJvdygpO1xuXHRcdH1cblxuXHRcdGNvbnN0IGVsZW1Sb3cgPSB0aGlzLl9yb3dzW2luZGV4Um93XTtcblx0XHRlbGVtUm93LmFwcGVuZChjb250cm9sLmVsZW1lbnQpO1xuXG5cdFx0aWYgKHRoaXMuY29udHJvbHMgPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5jb250cm9scyA9IFtdO1xuXHRcdH1cblx0XHRpZiAodGhpcy5jb250cm9sc1tpbmRleFJvd10gPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5jb250cm9sc1tpbmRleFJvd10gPSB7fTtcblx0XHR9XG5cblx0XHR0aGlzLmNvbnRyb2xzW2luZGV4Um93XVtuYW1lXSA9IGNvbnRyb2w7XG5cdH1cblxuXHRnZXRDb250cm9sKGZpcnN0LCBzZWNvbmQpIHtcblx0XHRpZihzZWNvbmQgPT0gbnVsbCkge1xuXHRcdFx0Y29uc3QgbmFtZSA9IGZpcnN0O1xuXHRcdFx0Zm9yKGxldCBpID0gMDsgaSA8IHRoaXMuY29udHJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYodGhpcy5jb250cm9sc1tpXVtuYW1lXSAhPSBudWxsKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuY29udHJvbHNbaV1bbmFtZV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3QgbmFtZSA9IGZpcnN0O1xuXHRcdFx0Y29uc3QgaW5kZXhSb3cgPSBzZWNvbmQ7XG5cdFx0XHRyZXR1cm4gdGhpcy5jb250cm9sc1tpbmRleFJvd11bbmFtZV07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRhZGRSb3coKSB7XG5cdFx0Y29uc3QgZWxlbVJvdyA9IGNyZWF0ZUVsKCdkaXYnLCB7XG5cdFx0XHRjbGFzc05hbWUgOiBgbGVwbGF5ZXItY29udHJvbHMgY29udHJvbHMtJHt0aGlzLm9wdGlvbnMubmFtZX1gXG5cdFx0fSk7XG5cblx0XHRpZiAodGhpcy5fcm93cyA9PSBudWxsKSB7XG5cdFx0XHR0aGlzLl9yb3dzID0gW11cblx0XHR9XG5cdFx0dGhpcy5fcm93cy5wdXNoKGVsZW1Sb3cpO1xuXHRcdHRoaXMuZWxlbWVudC5hcHBlbmQoZWxlbVJvdyk7XG5cblx0XHRyZXR1cm4gZWxlbVJvdztcblx0fVxuXG5cdGdldFJvdyhpbmRleFJvdykge1xuXHRcdHJldHVybiB0aGlzLl9yb3dzW2luZGV4Um93IHx8IDBdO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHRjb25zdCB7IG5hbWUsIGNvbnRyb2xzLCBhbGlnbiB9ID0gdGhpcy5vcHRpb25zO1xuXHRcdGxldCBnbG9iYWxBbGlnbiA9IG51bGw7XG5cblx0XHR0aGlzLmVsZW1lbnQgPSBjcmVhdGVFbCgnZGl2Jywge1xuXHRcdFx0Y2xhc3NOYW1lIDogYGxlcGxheWVyLWNvbnRyb2wtY29sbGVjdGlvbiBsZXBsYXllci1jb250cm9sLWNvbGxlY3Rpb24tLSR7bmFtZX1gLFxuXHRcdH0pXG5cblx0XHRpZih0eXBlb2YgYWxpZ24gPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRnbG9iYWxBbGlnbiA9IGFsaWduO1xuXHRcdH1cblxuXHRcdGNvbnRyb2xzLmZvckVhY2goKHJvdywgaW5kZXhSb3cpID0+IHtcblx0XHRcdGNvbnN0IGVsZW1Sb3cgPSB0aGlzLmFkZFJvdygpO1xuXHRcdFx0bGV0IHJvd0FsaWduID0gZ2xvYmFsQWxpZ247XG5cblx0XHRcdGlmKEFycmF5LmlzQXJyYXkoYWxpZ24pICYmIGFsaWduW2luZGV4Um93XSkge1xuXHRcdFx0XHRyb3dBbGlnbiA9IGFsaWduW2luZGV4Um93XVxuXHRcdFx0fVxuXG5cdFx0XHRyb3cuZm9yRWFjaChjb250cm9sTmFtZSA9PiB7XG5cblx0XHRcdFx0aWYoY29udHJvbE5hbWUgPT09ICd0aW1lbGluZScgJiYgcm93QWxpZ24gIT09ICdqdXN0aWZ5Jykge1xuXHRcdFx0XHRcdGNvbnNvbGUud2FybignQ29ucm9scyBzaG91bGQgaGF2ZSBqdXN0aWZ5IGFsaWduLCBpZiB0aGVyZSBpcyB0aGUgdGltZWxpbmUgaW4gaXQnKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuYWRkQ29udHJvbChpbmRleFJvdywgY29udHJvbE5hbWUsIHRoaXMuX2dldENvbnRyb2xPcHRpb25zKG5hbWUpKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRlbGVtUm93LmFkZENsYXNzKGBsZXBsYXllci1jb250cm9scy0tJHtyb3dBbGlnbn1gKVxuXHRcdFx0XHQuYXR0cigndGFiaW5kZXgnLCAwKTtcblxuXHRcdFx0ZWxlbVJvdy5maW5kKCcuZGl2aWRlciArIC5kaXZpZGVyJykucmVtb3ZlKCk7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50O1xuXHR9XG5cblx0aGlkZSAoKSB7XG5cdFx0dGhpcy5lbGVtZW50LmhpZGUoKTtcblx0XHR0aGlzLmVsZW1lbnQuZmluZCgnLmxlcGxheWVyLWNvbnRyb2xzJykuaGlkZSgpXG5cdH1cblxuXHRzaG93ICgpIHtcblx0XHR0aGlzLmVsZW1lbnQuc2hvdygpXG5cdFx0dGhpcy5lbGVtZW50LmZpbmQoJy5sZXBsYXllci1jb250cm9scycpLnNob3coKVxuXHR9XG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnQ29udHJvbENvbGxlY3Rpb24nLCBDb250cm9sQ29sbGVjdGlvbik7XG5leHBvcnQgZGVmYXVsdCBDb250cm9sQ29sbGVjdGlvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL0NvbnRyb2xDb2xsZWN0aW9uLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBTZWN0aW9ucy5qc1xuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcblxuaW1wb3J0IHsgc2Vjb25kc1RvVGltZSwgZ2V0U2Nyb2xsQmFyV2lkdGggfSBmcm9tICcuLi91dGlscyc7XG4vKipcbiAqIEBjbGFzcyBTZWN0aW9uc1xuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHBhcmFtIHtBcnJheX0gW29wdGlvbnMuaXRlbXM9W119IERhdGEgZm9yIHNlY3Rpb25zXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnZpZXdzXSBTaG93IHNlY3Rpb24gb25seSBpbiBmdWxsc2NyZWVuXG4gKiBAZXh0ZW5kcyBDb21wb25lbnRcbiAqL1xuY2xhc3MgU2VjdGlvbnMgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcblx0XHRsZXQgeyBpdGVtcyA9IFtdIH0gPSBvcHRpb25zO1xuXHRcdGl0ZW1zID0gW10uY29uY2F0KGl0ZW1zKTtcblxuXHRcdC8vb3B0aW9ucy5pdGVtcyA9IGl0ZW1zO1xuXG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblxuXHRcdHRoaXMuc2Nyb2xsRWxlbWVudCA9IHRoaXMuX2lubmVyRWxlbWVudDtcblx0XHR0aGlzLmFjdGl2ZVNlY3Rpb24gPSB0aGlzLmdldFNlY3Rpb25CeUluZGV4KDApO1xuXG5cdFx0dGhpcy5pdGVtcyA9IGl0ZW1zO1xuXHRcdHRoaXMubGVuZ3RoID0gdGhpcy5pdGVtcy5sZW5ndGg7XG5cblx0XHR0aGlzLnNldEFjdGl2ZUJ5SW5kZXgoMCk7XG5cblx0XHR0aGlzLmVsZW1lbnRcblx0XHRcdC5maW5kKCcubGVwbGF5ZXItc2VjdGlvbicpXG5cdFx0XHQub24oJ2NsaWNrJywgdGhpcy5vblNlY3Rpb25DbGljay5iaW5kKHRoaXMpKTtcblxuXHRcdC8vIHRoaXMucGxheWVyLm9uKCdzZWN0aW9uc3RvZ2dsZScsIHRoaXMuX29uU2VjdGlvbnNUb2dnbGUuYmluZCh0aGlzKSk7XG5cblx0XHR0aGlzLnBsYXllci5vbigndGltZXVwZGF0ZScsIHRoaXMub25UaW1lVXBkYXRlLmJpbmQodGhpcykpO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ2luaXRlZCcsIHRoaXMudXBkYXRlU2VjdGlvbkR1cmF0aW9uLmJpbmQodGhpcykpO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ2R1cmF0aW9uY2hhbmdlJywgdGhpcy51cGRhdGVTZWN0aW9uRHVyYXRpb24uYmluZCh0aGlzKSk7XG5cblx0XHR0aGlzLnBsYXllci5vbignZm9jdXMnLCAoKSA9PiB0aGlzLnBsYXllci5mb2N1cygpKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0bmV4dCgpIHtcblx0XHRjb25zdCBzZWN0aW9uSW5kZXggPSBwYXJzZUludCh0aGlzLmFjdGl2ZVNlY3Rpb24uYXR0cignZGF0YS1pbmRleCcpKTtcblx0XHRjb25zdCBuZXdJbmRleCA9IHNlY3Rpb25JbmRleCA+PSB0aGlzLmxlbmd0aCA/IHRoaXMubGVuZ3RoIDogc2VjdGlvbkluZGV4ICsgMTtcblxuXHRcdHRoaXMuc2V0QWN0aXZlQnlJbmRleChuZXdJbmRleCk7XG5cblx0XHR0aGlzLnBsYXllci52aWRlby5jdXJyZW50VGltZSA9IHRoaXMuaXRlbXNbc2VjdGlvbkluZGV4XS5lbmQ7XG5cdH1cblxuXHRwcmV2KCkge1xuXHRcdGNvbnN0IHNlY3Rpb25JbmRleCA9IHBhcnNlSW50KHRoaXMuYWN0aXZlU2VjdGlvbi5hdHRyKCdkYXRhLWluZGV4JykpO1xuXHRcdGNvbnN0IG5ld0luZGV4ID0gc2VjdGlvbkluZGV4IDw9IDAgPyAwIDogc2VjdGlvbkluZGV4IC0gMTtcblxuXHRcdHRoaXMuc2V0QWN0aXZlQnlJbmRleChuZXdJbmRleCk7XG5cdFx0dGhpcy5wbGF5ZXIudmlkZW8uY3VycmVudFRpbWUgPSB0aGlzLml0ZW1zW25ld0luZGV4XS5iZWdpbjtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0Y29uc3QgeyBmdWxsc2NyZWVuT25seSwgaGlkZVNjcm9sbCB9ID0gdGhpcy5vcHRpb25zO1xuXG5cblx0XHR0aGlzLmVsZW1lbnQgPSAkKCc8ZGl2IC8+Jylcblx0XHRcdC5hZGRDbGFzcygnbGVwbGF5ZXItc2VjdGlvbnMnKVxuXHRcdFx0LmF0dHIoJ3RhYmluZGV4JywgJzAnKTtcblxuXHRcdHRoaXMuX2lubmVyRWxlbWVudCA9ICQoJzxkaXYgLz4nKS5hZGRDbGFzcygnbGVwbGF5ZXItc2VjdGlvbnNfX2lubmVyJyk7XG5cblx0XHRpZihmdWxsc2NyZWVuT25seSkge1xuXHRcdFx0dGhpcy5lbGVtZW50LmFkZENsYXNzKCdsZXBsYXllci1zZWN0aW9ucy0tZnNvbmx5Jyk7XG5cdFx0fVxuXG5cdFx0aWYoaGlkZVNjcm9sbCkge1xuXHRcdFx0dGhpcy5lbGVtZW50LmFkZENsYXNzKCdsZXBsYXllci1zZWN0aW9ucy0taGlkZS1zY3JvbGwnKTtcblx0XHRcdHRoaXMuX2lubmVyRWxlbWVudC5jc3Moe1xuXHRcdFx0XHRyaWdodCA6IC0xICogZ2V0U2Nyb2xsQmFyV2lkdGgoKVxuXHRcdFx0fSlcblx0XHR9XG5cblx0XHR0aGlzLmVsZW1lbnQuYXBwZW5kKFxuXHRcdFx0dGhpcy5faW5uZXJFbGVtZW50LmFwcGVuZCh0aGlzLl9jcmVhdGVTZWN0aW9ucyh0aGlzLm9wdGlvbnMuaXRlbXMpKVxuXHRcdClcblxuXG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudDtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdHVwZGF0ZVNlY3Rpb25EdXJhdGlvbigpIHtcblx0XHRpZih0aGlzLml0ZW1zICE9IG51bGwgJiYgdGhpcy5pdGVtcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRjb25zdCBsZW5ndGggPSB0aGlzLml0ZW1zLmxlbmd0aFxuXHRcdFx0dGhpcy5pdGVtc1tsZW5ndGggLSAxXS5lbmQgPSB0aGlzLnBsYXllci52aWRlby5kdXJhdGlvbjtcblxuXHRcdFx0Ly8gVE9ETzog0J/RgNC+0LTRg9C80LDRgtGMINGE0YPQvdC60YbQuNGP0Y4gdXBkYXRlU2VjdGlvblxuXHRcdFx0Ly90aGlzLnVwZGF0ZVNlY3Rpb24odGhpcy5pdGVtc1tsZW5ndGggLSAxXSwgbGVuZ3RoIC0gMSk7XG5cdFx0fVxuXHR9XG5cblxuXHRvblNlY3Rpb25DbGljayhlKSB7XG5cdFx0Y29uc3QgdmlkZW8gPSB0aGlzLnBsYXllci52aWRlbztcblx0XHRjb25zdCBzZWN0aW9uID0gJChlLnRhcmdldCkuY2xvc2VzdCgnLmxlcGxheWVyLXNlY3Rpb24nKTtcblx0XHR2aWRlby5jdXJyZW50VGltZSA9IHNlY3Rpb24uYXR0cignZGF0YS1iZWdpbicpO1xuXHRcdHRoaXMucGxheWVyLnRyaWdnZXIoJ3NlY3Rpb25zY2xpY2snLCB7IHNlY3Rpb24gOiB0aGlzLml0ZW1zW3NlY3Rpb24uYXR0cignZGF0YS1pbmRleCcpXX0pO1xuXHR9XG5cblx0c2V0QWN0aXZlQnlJbmRleChpbmRleCkge1xuXHRcdGlmIChcblx0XHRcdHRoaXMuYWN0aXZlU2VjdGlvbi5sZW5ndGggPT09IDAgfHxcblx0XHRcdHBhcnNlSW50KHRoaXMuYWN0aXZlU2VjdGlvbi5hdHRyKCdkYXRhLWluZGV4JykpID09PSBpbmRleCB8fFxuXHRcdFx0dGhpcy5nZXRTZWN0aW9uQnlJbmRleChpbmRleCkubGVuZ3RoID09PSAwXG5cdFx0KSB7XG5cdFx0XHRyZXR1cm4gdGhpc1xuXHRcdH1cblxuXHRcdHRoaXMuYWN0aXZlU2VjdGlvbi5yZW1vdmVDbGFzcygnbGVwbGF5ZXItc2VjdGlvbi0tYWN0aXZlJyk7XG5cdFx0dGhpcy5hY3RpdmVTZWN0aW9uID0gdGhpcy5nZXRTZWN0aW9uQnlJbmRleChpbmRleCk7XG5cdFx0dGhpcy5hY3RpdmVTZWN0aW9uLmFkZENsYXNzKCdsZXBsYXllci1zZWN0aW9uLS1hY3RpdmUnKTtcblxuXHRcdGNvbnN0IHRvcFBvc2l0aW9uID0gdGhpcy5hY3RpdmVTZWN0aW9uLnBvc2l0aW9uKCkudG9wO1xuXG5cdFx0dGhpcy5zY3JvbGxFbGVtZW50XG5cdFx0XHQuYW5pbWF0ZSh7XG5cdFx0XHRcdHNjcm9sbFRvcCA6IHRoaXMuc2Nyb2xsRWxlbWVudC5zY3JvbGxUb3AoKSArIHRvcFBvc2l0aW9uXG5cdFx0XHR9LCA4MDApXG5cblx0XHR0aGlzLnBsYXllci50cmlnZ2VyKCdzZWN0aW9uc2NoYW5nZScsIHsgc2VjdGlvbiA6IHRoaXMuaXRlbXNbaW5kZXhdfSk7XG5cblx0XHRyZXR1cm4gdGhpc1xuXHR9XG5cblx0Z2V0U2VjdGlvbkJ5SW5kZXgoaW5kZXgpIHtcblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50LmZpbmQoYC5sZXBsYXllci1zZWN0aW9uW2RhdGEtaW5kZXg9XCIke2luZGV4fVwiXWApO1xuXHR9XG5cblxuXHRvblRpbWVVcGRhdGUoZSwgZGF0YSkge1xuXHRcdGlmICh0aGlzLmFjdGl2ZVNlY3Rpb24ubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm5cblx0XHR9XG5cblx0XHRjb25zdCBjdXJyZW50VGltZSA9IHRoaXMucGxheWVyLmN1cnJlbnRUaW1lO1xuXG5cdFx0Ly8gVXBkYXRlIHNwYW4gd2l0aCBlbmQgc2VjdGlvbiB0aW1lXG5cdFx0Ly8gVE9ETzog0JLRi9C90LXRgdGC0Lgg0Y3RgtC+INCyINC+0YLQtNC10LvRjNC90YvQuSDQutC+0LzQv9C+0L3QtdC90YIgU2hvd1RpbWUg0LjQu9C4INGC0LjQv9C+INGC0L7Qs9C+XG5cdFx0aWYodGhpcy5wbGF5ZXIudmlldyA9PT0gJ21pbmknKSB7XG5cdFx0XHRjb25zdCBlbmRTZWN0aW9uVGltZSA9IHRoaXMuYWN0aXZlU2VjdGlvbi5hdHRyKCdkYXRhLWVuZCcpO1xuXHRcdFx0dGhpcy5hY3RpdmVTZWN0aW9uXG5cdFx0XHRcdC5uZXh0KClcblx0XHRcdFx0LmZpbmQoJy50aW1lJylcblx0XHRcdFx0LnRleHQoc2Vjb25kc1RvVGltZShlbmRTZWN0aW9uVGltZSAtIGN1cnJlbnRUaW1lKSk7XG5cdFx0fVxuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBzZWN0aW9uID0gdGhpcy5pdGVtc1tpXTtcblx0XHRcdGlmIChjdXJyZW50VGltZSA8IHNlY3Rpb24uZW5kKSB7XG5cdFx0XHRcdHRoaXMuc2V0QWN0aXZlQnlJbmRleChpKVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRzZXQgdmlzaWJsZSh2YWx1ZSkge1xuXHRcdGlmICh0aGlzLmVsZW1lbnQuaGFzQ2xhc3MoJ2xlcGxheWVyLXNlY3Rpb25zLS1oaWRkZW4nKSAmJiB2YWx1ZSkge1xuXHRcdFx0dGhpcy5lbGVtZW50LnJlbW92ZUNsYXNzKCdsZXBsYXllci1zZWN0aW9ucy0taGlkZGVuJyk7XG5cdFx0XHR0aGlzLnBsYXllci50cmlnZ2VyKCdzZWN0aW9uc3RvZ2dsZScsIHsgaXNWaXNpYmxlIDogdmFsdWUgfSk7XG5cdFx0fSBlbHNlIGlmICghdmFsdWUpIHtcblx0XHRcdHRoaXMuZWxlbWVudC5hZGRDbGFzcygnbGVwbGF5ZXItc2VjdGlvbnMtLWhpZGRlbicpO1xuXHRcdFx0dGhpcy5wbGF5ZXIudHJpZ2dlcignc2VjdGlvbnN0b2dnbGUnLCB7IGlzVmlzaWJsZSA6IHZhbHVlIH0pO1xuXHRcdH1cblx0fVxuXG5cdGdldCB2aXNpYmxlKCkge1xuXHRcdHJldHVybiAhdGhpcy5lbGVtZW50Lmhhc0NsYXNzKCdsZXBsYXllci1zZWN0aW9ucy0taGlkZGVuJylcblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGUgSFRNTCBvZiBzZWN0aW9uIGJ5IGRhdGEgYW5kIGluZGV4IHNlY3Rpb25cblx0ICpcblx0ICogQHJldHVybnMge1N0cmluZ30gSFRNTFxuXHQgKi9cblx0Y3JlYXRlU2VjdGlvbihzZWN0aW9uLCBpbmRleCkge1xuXHRcdGNvbnN0IGl0ZW1zID0gdGhpcy5pdGVtcyB8fCB0aGlzLm9wdGlvbnMuaXRlbXM7XG5cdFx0Y29uc3QgaXRlbSA9IGBcblx0XHRcdDxkaXYgY2xhc3M9XCJsZXBsYXllci1zZWN0aW9uICR7IWluZGV4ID8gJ2xlcGxheWVyLXNlY3Rpb24tLWFjdGl2ZScgOiAnJ31cIlxuXHRcdFx0XHRkYXRhLWJlZ2luPVwiJHtzZWN0aW9uLmJlZ2lufVwiXG5cdFx0XHRcdGRhdGEtaW5kZXg9XCIke2luZGV4LnRvU3RyaW5nKCl9XCJcblx0XHRcdFx0ZGF0YS1lbmQ9XCIke3NlY3Rpb24uZW5kfVwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibGVwbGF5ZXItc2VjdGlvbi10aW1lXCI+JHtzZWNvbmRzVG9UaW1lKHNlY3Rpb24uYmVnaW4pfTwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibGVwbGF5ZXItc2VjdGlvbi1pbmZvXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImxlcGxheWVyLXNlY3Rpb24tbmV4dC1pbmZvXCI+XG5cdFx0XHRcdFx0XHQke3NlY3Rpb24ubmV4dEluZm8gfHwgJ9Ch0LvQtdC00YPRjtGJ0LDRjyDRgdC10LrRhtC40Y8g0L3QsNGH0L3QtdGC0YHRjyDRh9C10YDQtdC3J31cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwidGltZVwiPiR7c2Vjb25kc1RvVGltZShpdGVtc1swXS5lbmQpfTwvc3Bhbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQke1xuXHRcdFx0XHRcdFx0c2VjdGlvbi50aXRsZSAhPSBudWxsID9cblx0XHRcdFx0XHRcdFx0YDxkaXYgY2xhc3M9XCJsZXBsYXllci1zZWN0aW9uLXRpdGxlXCI+JHtzZWN0aW9uLnRpdGxlfTwvZGl2PmBcblx0XHRcdFx0XHRcdDogJydcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0JHtcblx0XHRcdFx0XHRcdHNlY3Rpb24uZGVzY3JpcHRpb24gIT0gbnVsbCA/XG5cdFx0XHRcdFx0XHRcdGA8ZGl2IGNsYXNzPVwibGVwbGF5ZXItc2VjdGlvbi1kZXNjcmlwdGlvblwiPiR7c2VjdGlvbi5kZXNjcmlwdGlvbn08L2Rpdj5gXG5cdFx0XHRcdFx0XHQ6ICcnXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdGAudHJpbSgpXG5cdFx0cmV0dXJuIGl0ZW1cblx0fVxuXG5cdC8vIFRPRE86INCf0YDQuNC00YPQvNCw0YLRjCDRh9GC0L4g0YHQtNC10LvQsNGC0Ywg0YEg0YHQvtCx0YvRgtC40Y/QvNC4INC/0L7RgdC70LUg0L7QsdC90L7QstC70LXQvdC40Y8g0L/QvtC70L3QvtGB0YzRjiDRgdC10LrRhtC40Lhcblx0LyoqXG5cdCAqIEZpbmQgc2VjdGlvbiBieSBpbmRleCBhbmQgdXBkYXRlIGhpbSB1c2luZyBkYXRhXG5cdCAqXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuXHQgKi9cblx0dXBkYXRlU2VjdGlvbihkYXRhLCBpbmRleCkge1xuXHRcdHRoaXMuZ2V0U2VjdGlvbkJ5SW5kZXgoaW5kZXgpXG5cdFx0XHQucmVwbGFjZVdpdGgodGhpcy5jcmVhdGVTZWN0aW9uKGRhdGEsIGluZGV4KSlcblx0XHRcdC5vbignY2xpY2snLCB0aGlzLm9uU2VjdGlvbkNsaWNrLmJpbmQodGhpcykpO1xuXHR9XG5cblx0X2NyZWF0ZVNlY3Rpb25zKGl0ZW1zKSB7XG5cdFx0bGV0IHJlc3VsdCA9ICcnO1xuXHRcdGl0ZW1zLmZvckVhY2goKHNlY3Rpb24sIGluZGV4KSA9PiB7XG5cdFx0XHRyZXN1bHQgKz0gdGhpcy5jcmVhdGVTZWN0aW9uKHNlY3Rpb24sIGluZGV4KTtcblx0XHR9KTtcblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnU2VjdGlvbnMnLCBTZWN0aW9ucyk7XG5leHBvcnQgZGVmYXVsdCBTZWN0aW9ucztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL1NlY3Rpb25zLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBFcnJvckRpc3BsYXkuanNcbiAqL1xuXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcblxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAY2xhc3MgRXJyb3JEaXNwbGF5XG4gKiBAZXh0ZW5kcyBDb21wb25lbnRcbiAqL1xuY2xhc3MgRXJyb3JEaXNwbGF5IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnM9e30pIHtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXHRcdGlmKHRoaXMucGxheWVyLl9lcnJvciAhPSBudWxsKSB7XG5cdFx0XHR0aGlzLm1lc3NhZ2UgPSB0aGlzLnBsYXllci5fZXJyb3IubWVzc2FnZTtcblx0XHRcdHRoaXMuZWxlbWVudC5zaG93KCk7XG5cdFx0fVxuXHRcdHRoaXMucGxheWVyLm9uKCdlcnJvcicsIHRoaXMub25QbGF5ZXJFcnJvci5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0dGhpcy5lbGVtZW50ID0gJCgnPGRpdiAvPicpXG5cdFx0XHQuYWRkQ2xhc3MoJ2xlcGxheWVyLWVycm9yLWRpc3BsYXknKVxuXHR9XG5cblx0c2V0IG1lc3NhZ2UodmFsdWUpIHtcblx0XHR0aGlzLmVsZW1lbnQuaHRtbCh2YWx1ZSk7XG5cdH1cblxuXHRvblBsYXllckVycm9yKGUsIGRhdGEpIHtcblx0XHRjb25zdCBlcnJvciA9IGRhdGEuZXJyb3I7XG5cdFx0dGhpcy5tZXNzYWdlID0gZXJyb3IubWVzc2FnZTtcblx0XHR0aGlzLmVsZW1lbnQuc2hvdygpO1xuXHR9XG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnRXJyb3JEaXNwbGF5JywgRXJyb3JEaXNwbGF5KTtcbmV4cG9ydCBkZWZhdWx0IEVycm9yRGlzcGxheTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL0Vycm9yRGlzcGxheS5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgRXJyb3JEaXNwbGF5LmpzXG4gKi9cblxuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5cbi8qKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLnVybF0gcGF0aCB0byBwb3N0ZXIgaW1hZ2VcbiAqIEBjbGFzcyBQb3N0ZXJcbiAqIEBleHRlbmRzIENvbXBvbmVudFxuICovXG5jbGFzcyBQb3N0ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucz17fSkge1xuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0dXJsIDogb3B0aW9ucy51cmxcblx0XHR9LCBvcHRpb25zKTtcblxuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cblx0XHR0aGlzLnVybCA9IHRoaXMub3B0aW9ucy51cmw7XG5cdH1cblxuXHRzZXQgdXJsKHZhbHVlKSB7XG5cdFx0aWYodmFsdWUgPT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0aGlzLl91cmwgPSB2YWx1ZTtcblx0XHR0aGlzLmVsZW1lbnQuY3NzKCdiYWNrZ3JvdW5kLWltYWdlJywgYHVybChcIiR7dmFsdWV9XCIpYClcblx0fVxuXG5cdGdldCB1cmwoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3VybDtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0dGhpcy5lbGVtZW50ID0gJCgnPGRpdiAvPicpXG5cdFx0XHQuYWRkQ2xhc3MoJ2xlcGxheWVyLXBvc3RlcicpO1xuXG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudDtcblx0fVxuXG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnUG9zdGVyJywgUG9zdGVyKTtcbmV4cG9ydCBkZWZhdWx0IFBvc3RlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL1Bvc3Rlci5qcyIsIi8qKlxuICogQGZpbGUgZnVsbHNjcmVlbi1hcGkuanNcbiAqL1xuXG5cbi8qXG4gKiBTdG9yZSB0aGUgYnJvd3Nlci1zcGVjaWZpYyBtZXRob2RzIGZvciB0aGUgZnVsbHNjcmVlbiBBUElcbiAqIEB0eXBlIHtPYmplY3R8dW5kZWZpbmVkfVxuICogQHByaXZhdGVcbiAqL1xubGV0IEZ1bGxzY3JlZW5BcGkgPSB7fTtcblxuLy8gYnJvd3NlciBBUEkgbWV0aG9kc1xuLy8gbWFwIGFwcHJvYWNoIGZyb20gU2NyZWVuZnVsLmpzIC0gaHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy9zY3JlZW5mdWxsLmpzXG5jb25zdCBhcGlNYXAgPSBbXG5cdC8vIFNwZWM6IGh0dHBzOi8vZHZjcy53My5vcmcvaGcvZnVsbHNjcmVlbi9yYXctZmlsZS90aXAvT3ZlcnZpZXcuaHRtbFxuXHRbXG5cdFx0J3JlcXVlc3RGdWxsc2NyZWVuJyxcblx0XHQnZXhpdEZ1bGxzY3JlZW4nLFxuXHRcdCdmdWxsc2NyZWVuRWxlbWVudCcsXG5cdFx0J2Z1bGxzY3JlZW5FbmFibGVkJyxcblx0XHQnZnVsbHNjcmVlbmNoYW5nZScsXG5cdFx0J2Z1bGxzY3JlZW5lcnJvcidcblx0XSxcblx0Ly8gV2ViS2l0XG5cdFtcblx0XHQnd2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4nLFxuXHRcdCd3ZWJraXRFeGl0RnVsbHNjcmVlbicsXG5cdFx0J3dlYmtpdEZ1bGxzY3JlZW5FbGVtZW50Jyxcblx0XHQnd2Via2l0RnVsbHNjcmVlbkVuYWJsZWQnLFxuXHRcdCd3ZWJraXRmdWxsc2NyZWVuY2hhbmdlJyxcblx0XHQnd2Via2l0ZnVsbHNjcmVlbmVycm9yJ1xuXHRdLFxuXHQvLyBPbGQgV2ViS2l0IChTYWZhcmkgNS4xKVxuXHRbXG5cdFx0J3dlYmtpdFJlcXVlc3RGdWxsU2NyZWVuJyxcblx0XHQnd2Via2l0Q2FuY2VsRnVsbFNjcmVlbicsXG5cdFx0J3dlYmtpdEN1cnJlbnRGdWxsU2NyZWVuRWxlbWVudCcsXG5cdFx0J3dlYmtpdENhbmNlbEZ1bGxTY3JlZW4nLFxuXHRcdCd3ZWJraXRmdWxsc2NyZWVuY2hhbmdlJyxcblx0XHQnd2Via2l0ZnVsbHNjcmVlbmVycm9yJ1xuXHRdLFxuXHQvLyBNb3ppbGxhXG5cdFtcblx0XHQnbW96UmVxdWVzdEZ1bGxTY3JlZW4nLFxuXHRcdCdtb3pDYW5jZWxGdWxsU2NyZWVuJyxcblx0XHQnbW96RnVsbFNjcmVlbkVsZW1lbnQnLFxuXHRcdCdtb3pGdWxsU2NyZWVuRW5hYmxlZCcsXG5cdFx0J21vemZ1bGxzY3JlZW5jaGFuZ2UnLFxuXHRcdCdtb3pmdWxsc2NyZWVuZXJyb3InXG5cdF0sXG5cdC8vIE1pY3Jvc29mdFxuXHRbXG5cdFx0J21zUmVxdWVzdEZ1bGxzY3JlZW4nLFxuXHRcdCdtc0V4aXRGdWxsc2NyZWVuJyxcblx0XHQnbXNGdWxsc2NyZWVuRWxlbWVudCcsXG5cdFx0J21zRnVsbHNjcmVlbkVuYWJsZWQnLFxuXHRcdCdNU0Z1bGxzY3JlZW5DaGFuZ2UnLFxuXHRcdCdNU0Z1bGxzY3JlZW5FcnJvcidcblx0XVxuXTtcblxuXG5sZXQgc3BlY0FwaSA9IGFwaU1hcFswXTtcblxubGV0IGJyb3dzZXJBcGk7XG5cbi8vIGRldGVybWluZSB0aGUgc3VwcG9ydGVkIHNldCBvZiBmdW5jdGlvbnNcbmZvciAobGV0IGkgPSAwOyBpIDwgYXBpTWFwLmxlbmd0aDsgaSsrKSB7XG5cdC8vIGNoZWNrIGZvciBleGl0RnVsbHNjcmVlbiBmdW5jdGlvblxuXHRpZiAoYXBpTWFwW2ldWzFdIGluIGRvY3VtZW50KSB7XG5cdFx0YnJvd3NlckFwaSA9IGFwaU1hcFtpXTtcblx0XHRicmVhaztcblx0fVxufVxuXG4vLyBtYXAgdGhlIGJyb3dzZXIgQVBJIG5hbWVzIHRvIHRoZSBzcGVjIEFQSSBuYW1lc1xuaWYgKGJyb3dzZXJBcGkpIHtcblx0Zm9yIChsZXQgaT0wOyBpPGJyb3dzZXJBcGkubGVuZ3RoOyBpKyspIHtcblx0XHRGdWxsc2NyZWVuQXBpW3NwZWNBcGlbaV1dID0gYnJvd3NlckFwaVtpXTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBGdWxsc2NyZWVuQXBpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL0Z1bGxzY3JlZW5BcGkuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIGNvb2tpZS1jb250cm9sLmpzXG4gKlxuICogQGNsYXMgQ29va2llXG4gKi9cbmNsYXNzIENvb2tpZSB7XG5cdC8qKlxuXHQgKiBAcHVibGljXG5cdCAqXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIE5hbWUgb2YgY29va2llXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBbZGZsdF0gUmV0dXJuIGRlZmF1bHQgdmFsdWUgaWYgdGhpcyBmaWVsZCBpcyBlbXB0eVxuXHQgKlxuXHQgKi9cblx0c3RhdGljIGdldCAobmFtZSwgZGZsdCkge1xuXHRcdGxldCBjb29raWVzID0gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7Jyk7XG5cdFx0Zm9yIChsZXQgaSBpbiBjb29raWVzKSB7XG5cdFx0XHR2YXIgZCA9IGNvb2tpZXNbIGkgXS50cmltKCkuc3BsaXQoJz0nKTtcblx0XHRcdGlmIChkWyAwIF0gPT09ICdsZXBsYXllcl8nICsgbmFtZSlcblx0XHRcdFx0cmV0dXJuIGRbIDEgXTtcblx0XHR9XG5cdFx0cmV0dXJuIGRmbHQ7XG5cdH1cblxuXHQvKipcblx0ICogQHB1YmxpY1xuXHQgKlxuXHQgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBLZXlcblx0ICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIFZhbHVlXG5cdCAqL1xuXHRzdGF0aWMgc2V0IChuYW1lLCB2YWx1ZSkge1xuXHRcdHZhciBkID0gbmV3IERhdGUoKTtcblx0XHRkLnNldERhdGUoZC55ZWFyICsgMSk7XG5cdFx0ZG9jdW1lbnQuY29va2llID0gJ2xlcGxheWVyXycgKyBuYW1lICsgJz0nICsgdmFsdWUgKyAnO2V4cGlyZXM9JyArIGQudG9TdHJpbmcoKTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb29raWU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvdXRpbHMvY29va2llLmpzIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuY2xhc3MgTWVkaWFFcnJvciB7XG5cdGNvbnN0cnVjdG9yKHZhbHVlKSB7XG5cdFx0aWYodmFsdWUgaW5zdGFuY2VvZiBNZWRpYUVycm9yKSB7XG5cdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG5cdFx0XHR0aGlzLmNvZGUgPSB2YWx1ZTtcblx0XHR9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcblx0XHQvLyBkZWZhdWx0IGNvZGUgaXMgemVybywgc28gdGhpcyBpcyBhIGN1c3RvbSBlcnJvclxuXHRcdFx0dGhpcy5tZXNzYWdlID0gdmFsdWU7XG5cdFx0fSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG5cblx0XHRcdC8vIFdlIGFzc2lnbiB0aGUgYGNvZGVgIHByb3BlcnR5IG1hbnVhbGx5IGJlY2F1c2UgbmF0aXZlIE1lZGlhRXJyb3Igb2JqZWN0c1xuXHRcdFx0Ly8gZG8gbm90IGV4cG9zZSBpdCBhcyBhbiBvd24vZW51bWVyYWJsZSBwcm9wZXJ0eSBvZiB0aGUgb2JqZWN0LlxuXHRcdFx0aWYgKHR5cGVvZiB2YWx1ZS5jb2RlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHR0aGlzLmNvZGUgPSB2YWx1ZS5jb2RlO1xuXHRcdFx0fVxuXG5cdFx0XHQkLmV4dGVuZCh0aGlzLCB2YWx1ZSk7XG5cdFx0fVxuXG5cdFx0aWYgKCF0aGlzLm1lc3NhZ2UpIHtcblx0XHRcdHRoaXMubWVzc2FnZSA9IE1lZGlhRXJyb3IuZGVmYXVsdE1lc3NhZ2VzW3RoaXMuY29kZV0gfHwgJyc7XG5cdFx0fVxuXHR9XG59XG5cbk1lZGlhRXJyb3IucHJvdG90eXBlLmNvZGUgPSAwO1xuXG5NZWRpYUVycm9yLnByb3RvdHlwZS5tZXNzYWdlID0gJyc7XG5cbk1lZGlhRXJyb3IuZXJyb3JUeXBlcyA9IFtcblx0J01FRElBX0VSUl9DVVNUT00nLFxuXHQnTUVESUFfRVJSX0FCT1JURUQnLFxuXHQnTUVESUFfRVJSX05FVFdPUksnLFxuXHQnTUVESUFfRVJSX0RFQ09ERScsXG5cdCdNRURJQV9FUlJfU1JDX05PVF9TVVBQT1JURUQnLFxuXHQnTUVESUFfRVJSX0VOQ1JZUFRFRCdcbl07XG5cblxuTWVkaWFFcnJvci5kZWZhdWx0TWVzc2FnZXMgPSB7XG5cdDEgOiAn0JLRiyDQv9GA0LXRgNCy0LDQu9C4INC30LDQs9GA0YPQt9C60YMg0LLQuNC00LXQvi4nLFxuXHQyIDogJ9CX0LDQs9GA0YPQt9C60LAg0LLQuNC00LXQviDQv9GA0LXRgNCy0LDQvdCwINC40Lct0LfQsCDQv9C+0YLQtdGA0Lgg0YHQvtC10LTQuNC90LXQvdC40Y8uJyxcblx0MyA6ICfQl9Cw0LPRgNGD0LfQutCwINCy0LjQtNC10L4g0L7RgdGC0LDQvdC+0LLQu9C10L3QsCDQuNC3LdC30LAg0L/RgNC+0LHQu9C10Lwg0YEg0LLQuNC00LXQvtGE0LDQudC70L7QvCDQuNC70Lgg0LjQty3Qt9CwINGC0L7Qs9C+LCDRh9GC0L4g0LLQsNGIINCx0YDQsNGD0LfQtdGAINC90LUg0L/QvtC00LTQtdGA0LbQuNCy0LDQtdGCINCy0L7RgdC/0YDQvtC40LfQstC10LTQtdC90LjQtSDQtNCw0L3QvdC+0LPQviDRhNCw0LnQu9CwLicsXG5cdDQgOiAn0JLQuNC00LXQviDQvdC1INC80L7QttC10YIg0LHRi9GC0Ywg0LfQsNCz0YDRg9C20LXQvdC+INC40Lct0LfQsCDQv9GA0L7QsdC70LXQvCDRgSDQuNC90YLQtdGA0L3QtdGCLdGB0L7QtdC00LjQvdC10L3QuNC10Lwg0LjQu9C4INC/0YDQvtCx0LvQtdC8INC90LAg0YHQtdGA0LLQtdGA0LUuINCY0LvQuCDRhNC+0YDQvNCw0YIg0YTQsNC50LvQsCDQvdC1INC/0L7QtNC00LXRgNC20LjQstCw0LXRgtGB0Y8g0LLQsNGI0LjQvCDQsdGA0LDRg9C30LXRgNC+0LwuJyxcblx0NSA6ICfQktC40LTQtdC+INC30LDRiNC40YTRgNC+0LLQsNC90L4sINC4INC80Ysg0L3QtSDQvNC+0LbQtdC8INC10LPQviDRgNCw0YHRiNC40YTRgNC+0LLQsNGC0YwuJ1xufTtcblxuLy8gQWRkIHR5cGVzIGFzIHByb3BlcnRpZXMgb24gTWVkaWFFcnJvclxuLy8gZS5nLiBNZWRpYUVycm9yLk1FRElBX0VSUl9TUkNfTk9UX1NVUFBPUlRFRCA9IDQ7XG5mb3IgKGxldCBlcnJOdW0gPSAwOyBlcnJOdW0gPCBNZWRpYUVycm9yLmVycm9yVHlwZXMubGVuZ3RoOyBlcnJOdW0rKykge1xuXHRNZWRpYUVycm9yW01lZGlhRXJyb3IuZXJyb3JUeXBlc1tlcnJOdW1dXSA9IGVyck51bTtcblx0Ly8gdmFsdWVzIHNob3VsZCBiZSBhY2Nlc3NpYmxlIG9uIGJvdGggdGhlIGNsYXNzIGFuZCBpbnN0YW5jZVxuXHRNZWRpYUVycm9yLnByb3RvdHlwZVtNZWRpYUVycm9yLmVycm9yVHlwZXNbZXJyTnVtXV0gPSBlcnJOdW07XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lZGlhRXJyb3I7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvTWVkaWFFcnJvci5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgUGxheUNvbnRyb2wuanNcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL0NvbnRyb2wnO1xuXG4vKipcbiAqIEBjbGFzcyBQbGF5Q29udHJvbFxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQGV4dGVuZHMgQ29udHJvbFxuICovXG5jbGFzcyBQbGF5Q29udHJvbCBleHRlbmRzIENvbnRyb2wge1xuXHRjb25zdHJ1Y3RvciAocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRpY29uTmFtZSA6ICdwbGF5Jyxcblx0XHRcdHRpdGxlIDogJ9CS0L7RgdC/0YDQvtC40LfQstC10YHRgtC4INCy0LjQtNC10L4nLFxuXHRcdFx0Y2xhc3NOYW1lIDogJ3BsYXknLFxuXHRcdFx0bmFtZSA6ICdwbGF5J1xuXHRcdH0sIG9wdGlvbnMpO1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cblx0XHR0aGlzLnBsYXllci5vbihcblx0XHRcdGBwbGF5IHBsYXlpbmcgcGF1c2UgZW5kZWQgc2Vla2luZyBsb2Fkc3RhcnRgLFxuXHRcdFx0dGhpcy51cGRhdGUuYmluZCh0aGlzKVxuXHRcdClcblx0fVxuXG5cblx0LyoqXG5cdCAqIFBhdXNlIHRoZSB2aWRlb1xuXHQgKi9cblx0c2hvd1BsYXkgKCkge1xuXHRcdGlmKHRoaXMuaWNvbi5pY29uTmFtZSA9PT0gJ3BsYXknKSByZXR1cm47XG5cdFx0dGhpcy5pY29uLmljb25OYW1lID0gJ3BsYXknO1xuXHRcdHRoaXMuZWxlbWVudC5hdHRyKCd0aXRsZScsIHRoaXMub3B0aW9ucy50aXRsZSk7XG5cdH1cblxuXHQvKipcblx0ICogUGxheSB0aGUgdmlkZW9cblx0ICovXG5cdHNob3dQYXVzZSAoKSB7XG5cdFx0aWYodGhpcy5pY29uLmljb25OYW1lID09PSAncGF1c2UnKSByZXR1cm47XG5cdFx0dGhpcy5pY29uLmljb25OYW1lID0gJ3BhdXNlJztcblx0XHR0aGlzLmVsZW1lbnQuYXR0cigndGl0bGUnLCAn0J/QvtGB0YLQsNCy0LjRgtGMINC90LAg0L/QsNGD0LfRgycpO1xuXHR9XG5cblx0dXBkYXRlKCkge1xuXHRcdGlmICh0aGlzLnBsYXllci5lbmRlZCkge1xuXHRcdFx0dGhpcy5zaG93UmVwbGF5KCk7XG5cdFx0fSBlbHNlIGlmKHRoaXMucGxheWVyLnBhdXNlZCkge1xuXHRcdFx0dGhpcy5zaG93UGxheSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnNob3dQYXVzZSgpO1xuXHRcdH1cblx0fVxuXG5cdHNob3dSZXBsYXkoKSB7XG5cdFx0aWYodGhpcy5pY29uLmljb25OYW1lID09PSAncmVmcmVzaCcpIHJldHVybjtcblx0XHRpZih0aGlzLnBsYXllci5kdXJhdGlvbiAhPT0gSW5maW5pdHkpIHtcblx0XHRcdHRoaXMuX3JlcGxheSA9IHRydWU7XG5cdFx0XHR0aGlzLmljb24uaWNvbk5hbWUgPSAncmVmcmVzaCc7XG5cdFx0XHR0aGlzLmVsZW1lbnQuYXR0cigndGl0bGUnLCAn0JfQsNC/0YPRgdGC0LjRgtGMINC30LDQvdC+0LLQvicpXG5cdFx0fVxuXHR9XG5cblx0cmVtb3ZlUmVwbGF5KCkge1xuXHRcdGlmKCF0aGlzLl9yZXBsYXkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy5fcmVwbGF5ID0gZmFsc2U7XG5cblx0XHRpZih0aGlzLnBsYXllci52aWRlby5wYXVzZWQpIHtcblx0XHRcdHRoaXMuc2hvd1BsYXkoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zaG93UGF1c2UoKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRvbkNsaWNrKGUpIHtcblx0XHR0aGlzLnBsYXllci52aWRlby50b2dnbGVQbGF5KCk7XG5cdH1cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdQbGF5Q29udHJvbCcsIFBsYXlDb250cm9sKTtcbkNvbnRyb2wucmVnaXN0ZXJDb250cm9sKCdwbGF5JywgUGxheUNvbnRyb2wpO1xuZXhwb3J0IGRlZmF1bHQgUGxheUNvbnRyb2w7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9QbGF5Q29udHJvbC5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgVm9sdW1lQ29udHJvbC5qc1xuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCBDb250cm9sIGZyb20gJy4vQ29udHJvbCc7XG5pbXBvcnQgQ29udHJvbERyb3Bkb3duIGZyb20gJy4vQ29udHJvbERyb3Bkb3duJztcbmltcG9ydCB7IElTX0FORFJPSURfUEhPTkUgfSBmcm9tICcuLi91dGlscy9icm93c2VyJztcblxuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBjbGFzcyBWb2x1bWVDb250cm9sXG4gKiBAZXh0ZW5kcyBDb250cm9sRHJvcGRvd25cbiAqL1xuY2xhc3MgVm9sdW1lQ29udHJvbCBleHRlbmRzIENvbnRyb2xEcm9wZG93biB7XG5cblx0Y29uc3RydWN0b3IgKHBsYXllciwgb3B0aW9ucz17fSkge1xuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0aWNvbk5hbWUgOiAndm9sdW1lLWRvd24nLFxuXHRcdFx0Y2xhc3NOYW1lIDogJ3ZvbHVtZS1jb250cm9sJyxcblx0XHRcdG5hbWUgOiAndm9sdW1lJ1xuXHRcdH0sIG9wdGlvbnMpO1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cblx0XHRpZighcGxheWVyLnZpZGVvLmZlYXR1cmVDb250cm9sVm9sdW1lIHx8IElTX0FORFJPSURfUEhPTkUpIHtcblx0XHRcdHRoaXMuZWxlbWVudC5oaWRlKCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ3ZvbHVtZWNoYW5nZScsIChlLCBkYXRhKSA9PiB7XG5cdFx0XHRjb25zdCB2aWRlbyA9IHRoaXMucGxheWVyLnZpZGVvO1xuXHRcdFx0dGhpcy52YWx1ZSA9IHZpZGVvLm11dGVkID8gMCA6IHZpZGVvLnZvbHVtZTtcblx0XHR9KVxuXHR9XG5cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHRzdXBlci5jcmVhdGVFbGVtZW50KCk7XG5cdFx0bGV0IGRyYWcgPSBmYWxzZTtcblx0XHRjb25zdCB2aWRlbyA9IHRoaXMucGxheWVyLnZpZGVvO1xuXG5cdFx0dGhpcy5tYXJrZXIgPSAkKCc8ZGl2Lz4nKS5hZGRDbGFzcygndm9sdW1lLW1hcmtlcicpO1xuXG5cdFx0dGhpcy5hY3RpdmUgPSAkKCc8ZGl2Lz4nKS5hZGRDbGFzcygndm9sdW1lLWFjdGl2ZScpO1xuXG5cdFx0dGhpcy5saW5lID0gJCgnPGRpdi8+Jylcblx0XHRcdC5hZGRDbGFzcygndm9sdW1lLWxpbmUnKVxuXHRcdFx0LmFwcGVuZCh0aGlzLmFjdGl2ZSlcblx0XHRcdC5hcHBlbmQodGhpcy5tYXJrZXIpXG5cdFx0XHQub24oJ2NsaWNrJywgKGUpID0+IHtcblx0XHRcdFx0aWYgKGRyYWcpIHJldHVybjtcblx0XHRcdFx0bGV0IHAgPSB0aGlzLmdldFBvc2l0aW9uKGUucGFnZVkpO1xuXHRcdFx0XHRpZiAocCA+PSAwICYmIHAgPD0gMSkge1xuXHRcdFx0XHRcdGlmKHZpZGVvLm11dGVkKSB7XG5cdFx0XHRcdFx0XHR2aWRlby5tdXRlZCA9IGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR2aWRlby52b2x1bWUgPSAxIC0gcDtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHR0aGlzLmRyb3Bkb3duQ29udGVudFxuXHRcdFx0LmFkZENsYXNzKCd2b2x1bWUtc2xpZGVyJylcblx0XHRcdC5hcHBlbmQodGhpcy5saW5lKTtcblxuXHRcdHRoaXMuaWNvbi5lbGVtZW50LmF0dHIoJ3RpdGxlJywgJ9Ce0YLQutC70Y7Rh9C40YLRjCDQt9Cy0YPQuicpO1xuXG5cdFx0dGhpcy5tYXJrZXIub24oJ21vdXNlZG93bicsIChlKSA9PiB7XG5cdFx0XHRpZiAoZS53aGljaCAhPT0gMSkgcmV0dXJuO1xuXHRcdFx0ZHJhZyA9IHRydWU7XG5cdFx0fSk7XG5cblx0XHQkKGRvY3VtZW50KS5vbih7XG5cdFx0XHRtb3VzZW1vdmUgOiAoZSkgPT4ge1xuXHRcdFx0XHRpZiAoIWRyYWcpIHJldHVybjtcblx0XHRcdFx0bGV0IHAgPSB0aGlzLmdldFBvc2l0aW9uKGUucGFnZVkpO1xuXHRcdFx0XHRpZiAocCA+PSAwICYmIHAgPD0gMSkge1xuXHRcdFx0XHRcdGlmKHZpZGVvLm11dGVkKSB7XG5cdFx0XHRcdFx0XHR2aWRlby5tdXRlZCA9IGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR2aWRlby52b2x1bWUgPSAxIC0gcFxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXG5cdFx0XHRtb3VzZXVwIDogKGUpID0+IHtcblx0XHRcdFx0ZHJhZyA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQ7XG5cdH1cblxuXG5cdHNldCB2YWx1ZSAodmFsdWUpIHtcblx0XHR0aGlzLmljb24uaWNvbk5hbWUgPSB0aGlzLnBsYXllci5jYWxjVm9sdW1lSWNvbih2YWx1ZSk7XG5cblx0XHRsZXQgcCA9IE1hdGgucm91bmQodmFsdWUgKiAxMDApLnRvU3RyaW5nKCkgKyAnJSc7XG5cdFx0dGhpcy5hY3RpdmUuY3NzKCdoZWlnaHQnLCBwKTtcblx0XHR0aGlzLm1hcmtlci5jc3MoJ2JvdHRvbScsIHApO1xuXHR9XG5cblx0dG9nZ2xlTXV0ZWQgKCkge1xuXHRcdGNvbnN0IHsgdmlkZW8gfSA9IHRoaXMucGxheWVyO1xuXG5cdFx0dmlkZW8ubXV0ZWQgPSAhdmlkZW8ubXV0ZWQ7XG5cdH1cblxuXHRnZXRQb3NpdGlvbiAoeSkge1xuXHRcdHJldHVybiAoeSAtIHRoaXMubGluZS5vZmZzZXQoKS50b3ApIC8gdGhpcy5saW5lLmhlaWdodCgpO1xuXHR9XG5cblx0b25DbGljayAoZSkge1xuXHRcdHN1cGVyLm9uQ2xpY2soZSk7XG5cdFx0Ly90b2RvOiBsZWFfYWxleCBrb3N0aWwnXG5cdFx0aWYgKGUudGFyZ2V0ID09PSB0aGlzLmljb24uZWxlbWVudFswXSl7XG5cdFx0XHR0aGlzLnRvZ2dsZU11dGVkKCk7XG5cdFx0fVxuXG5cdH1cblxuXHRvblBsYXllckluaXRlZCgpIHtcblx0XHRpZighdGhpcy5wbGF5ZXIudmlkZW8uZmVhdHVyZUNvbnRyb2xWb2x1bWUpIHtcblx0XHRcdHRoaXMuZWxlbWVudC5oaWRlKCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMudmFsdWUgPSB0aGlzLnBsYXllci52aWRlby5kZWZhdWx0Vm9sdW1lO1xuXHR9XG5cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdWb2x1bWVDb250cm9sJywgVm9sdW1lQ29udHJvbCk7XG5Db250cm9sLnJlZ2lzdGVyQ29udHJvbCgndm9sdW1lJywgVm9sdW1lQ29udHJvbCk7XG5leHBvcnQgZGVmYXVsdCBWb2x1bWVDb250cm9sO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvVm9sdW1lQ29udHJvbC5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgQ29udHJvbERyb3Bkb3duLmpzXG4gKi9cblxuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9Db250cm9sJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IHsgSVNfTU9CSUxFIH0gZnJvbSAnLi4vdXRpbHMvYnJvd3Nlcic7XG5cbi8qKlxuICogQGNsYXNzIENvbnRyb2xEcm9wZG93blxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHByb3BlcnR5IHtqUXVlcnl9IGRyb3Bkb3duQ29udGVudCBDb250ZW50IG9mIHBvcHVwXG4gKiBAZXh0ZW5kcyBDb250cm9sXG4gKi9cbmNsYXNzIENvbnRyb2xEcm9wZG93biBleHRlbmRzIENvbnRyb2wge1xuXG5cdGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucz17fSkge1xuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0dGFnIDogJ2RpdicsXG5cdFx0fSwgb3B0aW9ucyk7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblx0XHR0aGlzLl9vcGVuZWQgPSBmYWxzZTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ21vdXNlZW50ZXInLCB0aGlzLm9wZW4uYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdtb3VzZWxlYXZlJywgdGhpcy5jbG9zZS5iaW5kKHRoaXMpKTtcblx0XHRpZihJU19NT0JJTEUpIHtcblx0XHRcdHRoaXMuZWxlbWVudC5vbigndGFwJywgdGhpcy50b2dnbGUuYmluZCh0aGlzKSk7XG5cdFx0XHQkKGRvY3VtZW50KS5vbigndG91Y2hlbmQgdG91Y2hzdGFydCBjbGljaycsIHRoaXMub25Eb2N1bWVudEV2ZW50cy5iaW5kKHRoaXMpKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdHN1cGVyLmNyZWF0ZUVsZW1lbnQoKTtcblx0XHR0aGlzLmRyb3Bkb3duQ29udGVudCA9ICQoJzxkaXYgLz4nKS5hZGRDbGFzcygnY29udHJvbC1kcm9wZG93bl9fY29udGVudCcpO1xuXHRcdHRoaXMuZWxlbWVudC5hcHBlbmQodGhpcy5kcm9wZG93bkNvbnRlbnQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0YnVpbGRDU1NDbGFzcygpIHtcblx0XHRyZXR1cm4gYGNvbnRyb2wtZHJvcGRvd24gJHtzdXBlci5idWlsZENTU0NsYXNzKCl9YFxuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0b25DbGljayhlKSB7XG5cdFx0aWYoJChlLnRhcmdldCkuY2xvc2VzdCh0aGlzLmRyb3Bkb3duQ29udGVudCkubGVuZ3RoID4gMCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHN1cGVyLm9uQ2xpY2soZSk7XG5cdH1cblxuXHR0b2dnbGUoKSB7XG5cdFx0aWYodGhpcy5kaXNhYmxlKSB0cnVlO1xuXHRcdGlmKHRoaXMuX29wZW5lZCkge1xuXHRcdFx0dGhpcy5jbG9zZSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLm9wZW4oKTtcblx0XHR9XG5cdH1cblxuXHRvcGVuKCkge1xuXHRcdGlmKHRoaXMuZGlzYWJsZSkgcmV0dXJuO1xuXHRcdHRoaXMuX29wZW5lZCA9IHRydWU7XG5cdFx0dGhpcy5kcm9wZG93bkNvbnRlbnQuc2hvdygpO1xuXHR9XG5cblx0Y2xvc2UoKSB7XG5cdFx0aWYodGhpcy5kaXNhYmxlKSByZXR1cm47XG5cdFx0dGhpcy5fb3BlbmVkID0gZmFsc2U7XG5cdFx0dGhpcy5kcm9wZG93bkNvbnRlbnQuaGlkZSgpO1xuXHR9XG5cblx0b25Eb2N1bWVudEV2ZW50cyhlKSB7XG5cdFx0aWYoXG5cdFx0XHQhKCQoZS50YXJnZXQpLmNsb3Nlc3QodGhpcy5lbGVtZW50KS5sZW5ndGggPiAwKSAmJlxuXHRcdFx0ISgkKGUudGFyZ2V0KS5jbG9zZXN0KHRoaXMuZHJvcGRvd25Db250ZW50KS5sZW5ndGggPiAwKVxuXHRcdCkge1xuXHRcdFx0aWYodGhpcy5fb3BlbmVkKXtcblx0XHRcdFx0dGhpcy5jbG9zZSgpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnQ29udHJvbERyb3Bkb3duJywgQ29udHJvbERyb3Bkb3duKTtcbkNvbnRyb2wucmVnaXN0ZXJDb250cm9sKCdkcm9wZG93bicsIENvbnRyb2xEcm9wZG93bik7XG5leHBvcnQgZGVmYXVsdCBDb250cm9sRHJvcGRvd247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9Db250cm9sRHJvcGRvd24uanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIFRpbWVsaW5lQ29udHJvbC5qc1xuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL0NvbXBvbmVudCc7XG5pbXBvcnQgQ29udHJvbCBmcm9tICcuLi9Db250cm9sJztcbmltcG9ydCBDb250cm9sVGV4dCBmcm9tICcuLi9Db250cm9sVGV4dCc7XG5pbXBvcnQgQnVmZmVyZWRSYW5nZXMgZnJvbSAnLi9CdWZmZXJlZFJhbmdlcyc7XG5pbXBvcnQgTWFya2VyIGZyb20gJy4vTWFya2VyJztcbmltcG9ydCB7IHNlY29uZHNUb1RpbWUgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbi8qKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQGNsYXNzIFRpbWVsaW5lQ29udHJvbFxuICogQHByb3BlcnR5IHtDb250cm9sVGV4dH0gY3VycmVudFRpbWUgQ3VycmVudCB0aW1lJ3MgdGV4dFxuICogQHByb3BlcnR5IHtDb250cm9sVGV4dH0gdG90YWxUaW1lIFRvdGFsIHRpbWVcbiAqIEBwcm9wZXJ0eSB7alF1ZXJ5fSBsaW5lXG4gKiBAZXh0ZW5kcyBDb250cm9sXG4gKi9cbmNsYXNzIFRpbWVsaW5lQ29udHJvbCBleHRlbmRzIENvbnRyb2wge1xuXG5cdGNvbnN0cnVjdG9yIChwbGF5ZXIsIG9wdGlvbnM9e30pIHtcblx0XHRvcHRpb25zID0gJC5leHRlbmQoe30sIHtcblx0XHRcdG5hbWUgOiAndGltZWxpbmUnLFxuXHRcdFx0Y2xhc3NOYW1lIDogJ2NvbnRyb2wtdGltZWxpbmUgdGltZWxpbmUtY29udGFpbmVyJyxcblx0XHRcdHRhZyA6ICdkaXYnLFxuXHRcdH0sIG9wdGlvbnMpO1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cblxuXHRcdHRoaXMubWFya2VyLmVsZW1lbnQub24oJ2xlcGxheWVyX21vdXNlbW92ZScsIHRoaXMuX29uTWFya2VyTW91c2Vtb3ZlLmJpbmQodGhpcykpO1xuXG5cdFx0dGhpcy5tYXJrZXIuZWxlbWVudC5vbignbGVwbGF5ZXJfbW91c2Vkb3duJywgdGhpcy5fb25NYXJrZXJNb3VzZWRvd24uYmluZCh0aGlzKSk7XG5cblx0XHR0aGlzLnBsYXllci5vbignc2VjdGlvbnNpbml0JywgdGhpcy5vblNlY3Rpb25zSW5pdC5iaW5kKHRoaXMpKTtcblxuXHRcdHRoaXMucGxheWVyLm9uKCd0aW1ldXBkYXRlJywgdGhpcy5fb25UaW1lVXBkYXRlLmJpbmQodGhpcykpO1xuXG5cdFx0Ly8gdGhpcy5wbGF5ZXIub24oJ3RpbWV1cGRhdGVsb2FkJywgdGhpcy5fb25UaW1lVXBkYXRlLmJpbmQodGhpcykpXG5cblx0XHR0aGlzLnBsYXllci5vbignZHVyYXRpb25jaGFuZ2UnLCB0aGlzLl9vbkR1cmF0aW9uQ2hhbmdlLmJpbmQodGhpcykpO1xuXHR9XG5cblx0X29uTWFya2VyTW91c2Vkb3duKGUpIHtcblx0XHR0aGlzLm1hcmtlclNoYWRvdy5lbGVtZW50LmhpZGUoKTtcblx0fVxuXG5cdF9vbk1hcmtlck1vdXNlbW92ZShlLCBkYXRhKSB7XG5cdFx0Y29uc3QgeCA9IGRhdGEueDtcblx0XHRjb25zdCBwID0gdGhpcy5nZXRQb3NpdGlvbih4KTtcblx0XHRjb25zdCB2aWRlbyA9IHRoaXMucGxheWVyLnZpZGVvO1xuXHRcdGlmIChwID4gMCAmJiBwIDwgMSkge1xuXHRcdFx0dGhpcy5tYXJrZXIubWFya2VyVGltZVxuXHRcdFx0XHQuc2hvdygpXG5cdFx0XHRcdC5odG1sKHNlY29uZHNUb1RpbWUodmlkZW8uZHVyYXRpb24gKiBwKSk7XG5cdFx0XHQvLyB2aWRlby5jdXJyZW50VGltZSA9IHZpZGVvLmR1cmF0aW9uICogcFxuXHRcdH1cblx0fVxuXG5cdF9vblRpbWVVcGRhdGUoZSwgZGF0YSkge1xuXHRcdGNvbnN0IGR1cmF0aW9uID0gdGhpcy5wbGF5ZXIudmlkZW8uZHVyYXRpb247XG5cdFx0bGV0IGN1cnJlbnRUaW1lID0gdGhpcy5wbGF5ZXIuY3VycmVudFRpbWU7XG5cdFx0aWYoZGF0YSAmJiBkYXRhLmN1cnJlbnRUaW1lICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdGN1cnJlbnRUaW1lID0gZGF0YS5jdXJyZW50VGltZTtcblx0XHR9XG5cdFx0bGV0IHBlcmNlbnQgPSBjdXJyZW50VGltZSAvIGR1cmF0aW9uO1xuXG5cdFx0aWYoaXNOYU4oZHVyYXRpb24pICYmIGN1cnJlbnRUaW1lID09PSAwKSBwZXJjZW50ID0gMDtcblxuXHRcdHRoaXMubW92ZSh7IHBlcmNlbnQsIGN1cnJlbnRUaW1lIH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHRzdXBlci5jcmVhdGVFbGVtZW50KCk7XG5cdFx0bGV0IHZpZGVvID0gdGhpcy5wbGF5ZXIudmlkZW87XG5cblx0XHR0aGlzLmRyYWcgPSBmYWxzZTtcblxuXHRcdC8vIENyZWF0ZSBsYWJlbHNcblx0XHR0aGlzLmN1cnJlbnRUaW1lID0gbmV3IENvbnRyb2xUZXh0KHRoaXMucGxheWVyLCB7IGNsYXNzTmFtZSA6ICd0aW1lLWN1cnJlbnQnIH0pO1xuXHRcdHRoaXMuY3VycmVudFRpbWUudGV4dCA9ICcwMDowMCc7XG5cdFx0dGhpcy50b3RhbFRpbWUgPSBuZXcgQ29udHJvbFRleHQodGhpcy5wbGF5ZXIsIHtjbGFzc05hbWUgOiAndGltZS10b3RhbCcgfSk7XG5cblx0XHQvLyBDcmVhdGUgbGluZSB3aXRoIG1hcmtlcnMgYW5kIHBsYXllZCByYW5nZVxuXG5cdFx0dGhpcy5tYXJrZXIgPSBuZXcgTWFya2VyKHRoaXMucGxheWVyLCB7XG5cdFx0XHRkcmFnIDogdHJ1ZVxuXHRcdH0pO1xuXG5cdFx0dGhpcy5tYXJrZXJTaGFkb3cgPSBuZXcgTWFya2VyKHRoaXMucGxheWVyLCB7XG5cdFx0XHRjbGFzc05hbWUgOiAnc2hhZG93J1xuXHRcdH0pO1xuXHRcdHRoaXMubWFya2VyU2hhZG93LmVsZW1lbnQuaGlkZSgpO1xuXG5cblx0XHQvLyBQbGF5ZWQgcmFuZ2VzXG5cdFx0dGhpcy5wbGF5ZWRSYW5nZXMgPSAkKCc8ZGl2IC8+JykuYWRkQ2xhc3MoJ3RpbWUtcGxheWVkJyk7XG5cblxuXHRcdC8vIEJ1ZmZlcmVkIHJhbmdlc1xuXHRcdHRoaXMuYnVmZmVyZWRSYW5nZXMgPSBuZXcgQnVmZmVyZWRSYW5nZXModGhpcy5wbGF5ZXIpLmVsZW1lbnQ7XG5cblx0XHR0aGlzLmxpbmUgPSAkKCc8ZGl2IC8+Jyk7XG5cdFx0dGhpcy5lbWl0VGFwRXZlbnRzKHRoaXMubGluZSlcblxuXHRcdHRoaXMubGluZVxuXHRcdFx0LmFkZENsYXNzKCd0aW1lbGluZScpXG5cdFx0XHQuYXBwZW5kKHRoaXMubWFya2VyLmVsZW1lbnQpXG5cdFx0XHQuYXBwZW5kKHRoaXMubWFya2VyU2hhZG93LmVsZW1lbnQpXG5cdFx0XHQuYXBwZW5kKHRoaXMucGxheWVkUmFuZ2VzKVxuXHRcdFx0LmFwcGVuZCh0aGlzLmJ1ZmZlcmVkUmFuZ2VzKVxuXHRcdFx0Lm9uKHtcblx0XHRcdFx0bW91c2Vtb3ZlIDogKGUpID0+IHtcblx0XHRcdFx0XHRpZiAodGhpcy5tYXJrZXIuZHJhZykgcmV0dXJuO1xuXG5cdFx0XHRcdFx0bGV0IHAgPSB0aGlzLmdldFBvc2l0aW9uKGUucGFnZVgpO1xuXHRcdFx0XHRcdGlmIChwID4gMCAmJiBwIDwgMSkge1xuXHRcdFx0XHRcdFx0dGhpcy5tYXJrZXJTaGFkb3cuZWxlbWVudFxuXHRcdFx0XHRcdFx0XHQuc2hvdygpXG5cdFx0XHRcdFx0XHRcdC5jc3MoJ2xlZnQnLCBwICogMTAwICsgJyUnKTtcblx0XHRcdFx0XHRcdHRoaXMubWFya2VyU2hhZG93XG5cdFx0XHRcdFx0XHRcdC5tYXJrZXJUaW1lXG5cdFx0XHRcdFx0XHRcdC5zaG93KClcblx0XHRcdFx0XHRcdFx0Lmh0bWwoc2Vjb25kc1RvVGltZSh2aWRlby5kdXJhdGlvbiAqIHApKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGhpcy5tYXJrZXJTaGFkb3cuZWxlbWVudC5oaWRlKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXG5cdFx0XHRcdG1vdXNlbGVhdmUgOiAoZSkgPT4ge1xuXHRcdFx0XHRcdGlmICh0aGlzLmRyYWcpIHJldHVybjtcblx0XHRcdFx0XHR0aGlzLm1hcmtlclNoYWRvdy5lbGVtZW50LmhpZGUoKVxuXHRcdFx0XHR9LFxuXG5cdFx0XHRcdG1vdXNlZG93biA6IChlKSA9PiB7XG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0Y2xpY2sgOiB0aGlzLl9vbkxpbmVDbGljay5iaW5kKHRoaXMpLFxuXHRcdFx0XHR0YXAgOiB0aGlzLl9vbkxpbmVDbGljay5iaW5kKHRoaXMpLFxuXHRcdFx0fSk7XG5cblx0XHR0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoJ3RpbWVsaW5lLWNvbnRhaW5lcicpXG5cdFx0XHQuYXBwZW5kKCQoJzxkaXYgLz4nKVxuXHRcdFx0XHQuYWRkQ2xhc3MoJ3RpbWVsaW5lLXN1YmNvbnRhaW5lcicpXG5cdFx0XHRcdC5hcHBlbmQodGhpcy5jdXJyZW50VGltZS5lbGVtZW50KVxuXHRcdFx0XHQuYXBwZW5kKHRoaXMubGluZSlcblx0XHRcdFx0LmFwcGVuZCh0aGlzLnRvdGFsVGltZS5lbGVtZW50KSk7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRvbkNsaWNrKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdH1cblxuXHRfb25MaW5lQ2xpY2soZSkge1xuXHRcdGlmICh0aGlzLmRyYWcpIHJldHVybjtcblx0XHRjb25zdCB2aWRlbyA9IHRoaXMucGxheWVyLnZpZGVvO1xuXHRcdHRoaXMubW92ZSh7IHBlcmNlbnQgOiB0aGlzLmdldFBvc2l0aW9uKGUucGFnZVgpfSk7XG5cdFx0dmlkZW8uY3VycmVudFRpbWUgPSAodmlkZW8uZHVyYXRpb24gKiB0aGlzLmdldFBvc2l0aW9uKGUucGFnZVgpKTtcblx0fVxuXG5cdG9uU2VjdGlvbnNJbml0KGUpIHtcblx0XHRjb25zdCBkdXJhdGlvbiA9IHRoaXMucGxheWVyLnZpZGVvLmR1cmF0aW9uO1xuXHRcdGlmKGlzTmFOKGR1cmF0aW9uKSkge1xuXHRcdFx0cmV0dXJuXG5cdFx0fVxuXHRcdGlmICh0aGlzLnBsYXllci5zZWN0aW9ucykge1xuXHRcdFx0dGhpcy51cGRhdGVTZWN0aW9uUmFuZ2VzKHRoaXMucGxheWVyLnNlY3Rpb25zLml0ZW1zKTtcblx0XHR9XG5cdH1cblxuXHR1cGRhdGVTZWN0aW9uUmFuZ2VzKGl0ZW1zKSB7XG5cdFx0aWYodGhpcy5zZWN0aW9ucyA9PSBudWxsIHx8IHRoaXMuc2VjdGlvbnMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHR0aGlzLnNlY3Rpb25zID0gdGhpcy5jcmVhdGVTZWN0aW9uUmFuZ2VzKGl0ZW1zKTtcblx0XHRcdHRoaXMubGluZS5hcHBlbmQodGhpcy5zZWN0aW9ucyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2VjdGlvbnMuaHRtbCh0aGlzLmNyZWF0ZVNlY3Rpb25SYW5nZXMoaXRlbXMpKTtcblx0XHR9XG5cdH1cblxuXHRjcmVhdGVTZWN0aW9uUmFuZ2VzKGl0ZW1zKSB7XG5cdFx0Y29uc3QgZHVyYXRpb24gPSB0aGlzLnBsYXllci52aWRlby5kdXJhdGlvbjtcblx0XHRsZXQgcmVzdWx0ID0gJCgnPGRpdiAvPicpLmFkZENsYXNzKCdsZXBsYXllci10aW1lbGluZS1zZWN0aW9ucycpO1xuXHRcdGl0ZW1zLmZvckVhY2goKHNlY3Rpb24pID0+IHtcblx0XHRcdGNvbnN0IGxlbmd0aCA9IChzZWN0aW9uLmVuZCAtIHNlY3Rpb24uYmVnaW4pO1xuXHRcdFx0Y29uc3QgaXRlbSA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0XHQuYWRkQ2xhc3MoJ2xlcGxheWVyLXRpbWVsaW5lLXNlY3Rpb24nKVxuXHRcdFx0XHQuY3NzKHtcblx0XHRcdFx0XHR3aWR0aCA6IGxlbmd0aCAvIGR1cmF0aW9uICogMTAwICsgJyUnLFxuXHRcdFx0XHRcdGxlZnQgOiBzZWN0aW9uLmJlZ2luIC8gZHVyYXRpb24gKiAxMDAgKyAnJSdcblx0XHRcdFx0fSk7XG5cdFx0XHRyZXN1bHQuYXBwZW5kKGl0ZW0pO1xuXHRcdH0pXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdGdldFBvc2l0aW9uICh4KSB7XG5cdFx0cmV0dXJuICh4IC0gdGhpcy5saW5lLm9mZnNldCgpLmxlZnQpIC8gdGhpcy5saW5lLndpZHRoKCk7XG5cdH1cblxuXHQvKipcblx0ICogTW92ZSBtYXJrZXIgb24gdGltZWxpbmUgb24gcGVyY2VudCBmcm9tIGFyZ3VtZW50LCBub3QgZnJvbSB2aWRlby5jdXJyZW50VGltZVxuXHQgKiBAcGFyYW0ge051bWJlcn0gcGVyY2VudCBUaGUgcGVyY2VudCB3aGljaCB5b3Ugd2FudCB0byBtb3ZlIG1hcmtlciBvbiB0aW1lbGluZVxuXHQgKi9cblx0bW92ZSAoeyBwZXJjZW50LCBjdXJyZW50VGltZSB9KSB7XG5cdFx0aWYoY3VycmVudFRpbWUgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0Y3VycmVudFRpbWUgPSB0aGlzLnBsYXllci52aWRlby5kdXJhdGlvbiAqIHBlcmNlbnQ7XG5cdFx0fVxuXG5cdFx0aWYoaXNOYU4oY3VycmVudFRpbWUpKSByZXR1cm47XG5cdFx0cGVyY2VudCA9IHBlcmNlbnQgKiAxMDA7XG5cdFx0dGhpcy5tYXJrZXIuZWxlbWVudC5jc3MoJ2xlZnQnLCBwZXJjZW50ICsgJyUnKTtcblx0XHR0aGlzLnBsYXllZFJhbmdlcy5jc3MoJ3dpZHRoJywgcGVyY2VudCArICclJyk7XG5cdFx0dGhpcy5jdXJyZW50VGltZS50ZXh0ID0gc2Vjb25kc1RvVGltZShjdXJyZW50VGltZSk7XG5cdH1cblxuXHR1cGRhdGVMYWJlbHMoKSB7XG5cdFx0Y29uc3QgdmlkZW8gPSB0aGlzLnBsYXllci52aWRlbztcblx0XHR0aGlzLnRvdGFsVGltZS50ZXh0ID0gc2Vjb25kc1RvVGltZSgwLCBNYXRoLmZsb29yKHZpZGVvLmR1cmF0aW9uIC8gMzYwMCkgPiAwKTtcblxuXHRcdC8vIGNvbnN0IHdpZHRoID0gdGhpcy50b3RhbFRpbWUuZWxlbWVudC53aWR0aCgpO1xuXG5cdFx0dGhpcy50b3RhbFRpbWUudGV4dCA9IHNlY29uZHNUb1RpbWUodmlkZW8uZHVyYXRpb24pO1xuXHRcdHRoaXMuY3VycmVudFRpbWUudGV4dCA9IHNlY29uZHNUb1RpbWUodmlkZW8uY3VycmVudFRpbWUgfHwgMCk7XG5cdFx0Ly8gdGhpcy5jdXJyZW50VGltZS5lbGVtZW50LmNzcyh7XG5cdFx0Ly8gXHR3aWR0aFxuXHRcdC8vIH0pXG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRvblBsYXllckluaXRlZChlKSB7XG5cdFx0dGhpcy51cGRhdGVMYWJlbHMoKTtcblx0XHRpZiAodGhpcy5wbGF5ZXIuc2VjdGlvbnMpIHtcblx0XHRcdHRoaXMudXBkYXRlU2VjdGlvblJhbmdlcyh0aGlzLnBsYXllci5zZWN0aW9ucy5pdGVtcyk7XG5cdFx0fVxuXHR9XG5cblx0X2luaXRXYXRjaEJ1ZmZlciAoKSB7XG5cdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLndhdGNoQnVmZmVySW50ZXJ2YWwpO1xuXHRcdGxldCB2aWRlbyA9IHRoaXMucGxheWVyLnZpZGVvO1xuXHRcdGxldCB1cGRhdGVQcm9ncmVzc0JhciA9ICgpID0+IHtcblx0XHRcdGNvbnN0IEVORCA9IDE7XG5cdFx0XHRjb25zdCBTVEFSVCA9IDA7XG5cdFx0XHRsZXQgcmVzdWx0ID0gJCgnJyk7XG5cdFx0XHR2aWRlby5sb2FkZWQuZm9yRWFjaChpdGVtID0+IHtcblx0XHRcdFx0bGV0IGRvbUl0ZW0gPSAkKCc8ZGl2IC8+JykuYWRkQ2xhc3MoJ3RpbWUtYnVmZmVyZWQnKTtcblx0XHRcdFx0ZG9tSXRlbS5jc3Moe1xuXHRcdFx0XHRcdGxlZnQgOiBpdGVtW1NUQVJUXSAqIDEwMCArICclJyxcblx0XHRcdFx0XHR3aWR0aCA6IChpdGVtW0VORF0gLSBpdGVtW1NUQVJUXSkgKiAxMDAgKyAnJSdcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHJlc3VsdCA9IHJlc3VsdC5hZGQoZG9tSXRlbSk7XG5cdFx0XHR9KTtcblx0XHRcdHRoaXMuYnVmZmVyZWQuaHRtbChyZXN1bHQpO1xuXHRcdFx0aWYgKHZpZGVvLmxvYWRlZC5sZW5ndGggJiYgKDEgLSB2aWRlby5sb2FkZWRTaXplKSA8PSAwLjA1KSB7XG5cdFx0XHRcdGNsZWFySW50ZXJ2YWwodGhpcy53YXRjaEJ1ZmZlckludGVydmFsKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0dGhpcy53YXRjaEJ1ZmZlckludGVydmFsID0gc2V0SW50ZXJ2YWwodXBkYXRlUHJvZ3Jlc3NCYXIsIDUwMCk7XG5cdH1cblxuXHQvKipcblx0ICogT24gZHVyYXRpb25jaGFuZ2UgZXZlbnQgaGFuZGxlclxuXHQgKi9cblx0X29uRHVyYXRpb25DaGFuZ2UgKCkge1xuXHRcdHRoaXMudXBkYXRlTGFiZWxzKCk7XG5cdFx0aWYgKHRoaXMucGxheWVyLnNlY3Rpb25zKSB7XG5cdFx0XHR0aGlzLnVwZGF0ZVNlY3Rpb25SYW5nZXModGhpcy5wbGF5ZXIuc2VjdGlvbnMuaXRlbXMpO1xuXHRcdH1cblx0fVxuXG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnVGltZWxpbmVDb250cm9sJywgVGltZWxpbmVDb250cm9sKTtcbkNvbnRyb2wucmVnaXN0ZXJDb250cm9sKCd0aW1lbGluZScsIFRpbWVsaW5lQ29udHJvbCk7XG5leHBvcnQgZGVmYXVsdCBUaW1lbGluZUNvbnRyb2w7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9UaW1lbGluZS9UaW1lbGluZUNvbnRyb2wuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIENvbnRyb2xUZXh0LmpzXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb250cm9sIGZyb20gJy4vQ29udHJvbCc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcblxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAY2xhc3MgQ29udHJvbFRleHRcbiAqIEBleG50ZWRzIENvbnRyb2xcbiAqL1xuY2xhc3MgQ29udHJvbFRleHQgZXh0ZW5kcyBDb250cm9sIHtcblx0Y29uc3RydWN0b3IgKHBsYXllciwgb3B0aW9ucz17fSkge1xuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0Y2xhc3NOYW1lIDogJycsXG5cdFx0XHR0YWcgOiAnZGl2Jyxcblx0XHR9LCBvcHRpb25zKTtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHRzdXBlci5jcmVhdGVFbGVtZW50KCk7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRidWlsZENTU0NsYXNzKCkge1xuXHRcdHJldHVybiBgY29udHJvbC10ZXh0ICR7dGhpcy5vcHRpb25zLmNsYXNzTmFtZX1gO1xuXHR9XG5cblxuXHQvKipcblx0ICogU2V0dGVyIG9mIHRleHQgZmllbGRcblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcblx0ICovXG5cblx0c2V0IHRleHQgKHZhbHVlKSB7XG5cdFx0dGhpcy5fdGV4dCA9IHZhbHVlO1xuXHRcdHRoaXMuZWxlbWVudC5odG1sKHZhbHVlKTtcblx0fVxuXG5cdGdldCB0ZXh0ICgpIHtcblx0XHRyZXR1cm4gdGhpcy5fdGV4dFxuXHR9XG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnQ29udHJvbFRleHQnLCBDb250cm9sVGV4dCk7XG5Db250cm9sLnJlZ2lzdGVyQ29udHJvbCgndGV4dCcsIENvbnRyb2xUZXh0KTtcbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xUZXh0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvQ29udHJvbFRleHQuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIEJ1ZmZlcmVkUmFuZ2VzLmpzXG4gKi9cblxuaW1wb3J0IHsgcGVyY2VudGlmeSwgY3JlYXRlRWwgfSBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL0NvbXBvbmVudCc7XG5cbi8qKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQGNsYXNzIEJ1ZmZlcmVkUmFuZ2VzXG4gKiBAZXh0ZW5kcyBDb250cm9sXG4gKi9cblxuY2xhc3MgQnVmZmVyZWRSYW5nZXMgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucykge1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cblx0XHR0aGlzLnBsYXllci5vbigncHJvZ3Jlc3MnLCB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLnBsYXllci5vbignc2Vla2VkJywgdGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5wbGF5ZXIub24oJ2xvYWRzdGFydCcsIHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHR0aGlzLnJhbmdlID0gY3JlYXRlRWwoJ2RpdicsIHtcblx0XHRcdGNsYXNzTmFtZSA6ICdsZXBsYXllci10aW1lbGluZS1idWZmZXJlZF9fcmFuZ2UnXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50ID0gY3JlYXRlRWwoJ2RpdicsIHtcblx0XHRcdGNsYXNzTmFtZSA6ICdsZXBsYXllci10aW1lbGluZS1idWZmZXJlZCdcblx0XHR9KS5hcHBlbmQodGhpcy5yYW5nZSk7XG5cdH1cblxuXG5cdHVwZGF0ZSgpIHtcblx0XHRjb25zdCBidWZmZXJlZCA9IHRoaXMucGxheWVyLnZpZGVvLmJ1ZmZlcmVkO1xuXHRcdGNvbnN0IGR1cmF0aW9uID0gdGhpcy5wbGF5ZXIudmlkZW8uZHVyYXRpb247XG5cdFx0aWYoYnVmZmVyZWQgPT0gbnVsbCkgcmV0dXJuO1xuXG5cdFx0bGV0IGVuZCA9IDA7XG5cdFx0aWYgKGJ1ZmZlcmVkLmxlbmd0aCA+IDApIHtcblx0XHRcdGVuZCA9IGJ1ZmZlcmVkLmVuZChidWZmZXJlZC5sZW5ndGggLSAxKTtcblx0XHR9XG5cblx0XHRsZXQgd2lkdGggPSAwO1xuXHRcdGlmIChkdXJhdGlvbiA+IDApIHtcblx0XHRcdHdpZHRoID0gcGVyY2VudGlmeShlbmQsIGR1cmF0aW9uKSAqIDEwMCArICclJ1xuXHRcdH1cblx0XHR0aGlzLnJhbmdlLmNzcyh7IHdpZHRoIH0pXG5cdH1cbn1cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnQnVmZmVyZWRSYW5nZXMnLCBCdWZmZXJlZFJhbmdlcyk7XG5leHBvcnQgZGVmYXVsdCBCdWZmZXJlZFJhbmdlcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL1RpbWVsaW5lL0J1ZmZlcmVkUmFuZ2VzLmpzIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vQ29tcG9uZW50JztcblxuY2xhc3MgTWFya2VyIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XG5cblx0XHRvcHRpb25zID0gJC5leHRlbmQoe30sIHtcblx0XHRcdGRyYWcgOiBmYWxzZSxcblx0XHRcdGNsYXNzTmFtZSA6ICcnXG5cdFx0fSwgb3B0aW9ucyk7XG5cblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXHRcdHRoaXMuZWxlbWVudC5vbignbW91c2Vkb3duJywgdGhpcy5fb25Nb3VzZWRvd24uYmluZCh0aGlzKSk7XG5cblx0XHQkKGRvY3VtZW50KS5vbih7XG5cblx0XHRcdG1vdXNlbW92ZSA6IChlKSA9PiB7XG5cdFx0XHRcdGlmICghdGhpcy5kcmFnKSByZXR1cm47XG5cdFx0XHRcdHRoaXMuZWxlbWVudC50cmlnZ2VyKCdsZXBsYXllcl9tb3VzZW1vdmUnLCB7IHggOiBlLnBhZ2VYIH0pO1xuXHRcdFx0fSxcblxuXHRcdFx0bW91c2V1cCA6IChlKSA9PiB7XG5cdFx0XHRcdGlmICghdGhpcy5kcmFnKSByZXR1cm47XG5cdFx0XHRcdHRoaXMuZHJhZyA9IGZhbHNlO1xuXHRcdFx0XHR0aGlzLm1hcmtlclRpbWUuaGlkZSgpO1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQudHJpZ2dlcignbGVwbGF5ZXJfbW91c2V1cCcsIHsgeCA6IGUucGFnZVggfSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRzZXQgZHJhZyh2YWx1ZSkge1xuXHRcdHRoaXMuX2RyYWcgPSB2YWx1ZTtcblx0XHR0aGlzLmVsZW1lbnQudG9nZ2xlQ2xhc3MoJ3RpbWUtbWFya2VyLS1kcmFnJywgdmFsdWUpO1xuXHR9XG5cblx0Z2V0IGRyYWcoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2RyYWc7XG5cdH1cblxuXHRfb25Nb3VzZWRvd24oZSkge1xuXHRcdGlmIChlLndoaWNoICE9PSAxKSByZXR1cm47XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGlmKHRoaXMub3B0aW9ucy5kcmFnKSB7XG5cdFx0XHR0aGlzLmRyYWcgPSB0cnVlO1xuXHRcdH1cblx0XHR0aGlzLmVsZW1lbnQudHJpZ2dlcignbGVwbGF5ZXJfbW91c2Vkb3duJyk7XG5cdH1cblxuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdC8vIE1hcmtlciBvZiBjdXJyZW50IHRpbWUgb24gdGltZWxpbmVcblx0XHR0aGlzLm1hcmtlclRpbWUgPSAkKCc8ZGl2IC8+Jylcblx0XHRcdC5hZGRDbGFzcygndGltZScpXG5cdFx0XHQuaGlkZSgpO1xuXG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudCA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0LmFkZENsYXNzKGB0aW1lLW1hcmtlciAke3RoaXMub3B0aW9ucy5jbGFzc05hbWV9YClcblx0XHRcdC5hcHBlbmQodGhpcy5tYXJrZXJUaW1lKVxuXG5cdH1cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdNYXJrZXInLCBNYXJrZXIpO1xuZXhwb3J0IGRlZmF1bHQgTWFya2VyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvVGltZWxpbmUvTWFya2VyLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBTZWN0aW9uQ29udHJvbC5qc1xuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCBDb250cm9sIGZyb20gJy4vQ29udHJvbCc7XG5pbXBvcnQgQ29udHJvbENoZWNrYm94IGZyb20gJy4vQ29udHJvbENoZWNrYm94JztcblxuLyoqXG4gKiBAY2xhc3MgU2VjdGlvbkNvbnRyb2xcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuY2hlY2tlZD10cnVlXVxuICogQGV4dGVuZHMgQ29udHJvbENoZWNrYm94XG4gKi9cbmNsYXNzIFNlY3Rpb25Db250cm9sIGV4dGVuZHMgQ29udHJvbENoZWNrYm94IHtcblx0Y29uc3RydWN0b3IgKHBsYXllciwgb3B0aW9ucz17fSkge1xuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0aWNvbk5hbWUgOiAnbGlzdC11bCcsXG5cdFx0XHRjbGFzc05hbWUgOiAnc2VjdGlvbicsXG5cdFx0XHRuYW1lIDogJ3NlY3Rpb24nLFxuXHRcdFx0dGl0bGUgOiAn0J/QvtC60LDQt9Cw0YLRjC/RgdC60YDRi9GC0Ywg0YHQtdC60YbQuNC4Jyxcblx0XHRcdGRpc2FibGUgOiB0cnVlXG5cdFx0fSwgb3B0aW9ucyk7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblxuXHRcdHRoaXMucGxheWVyLm9uKCdzZWN0aW9uc2luaXQnLCB0aGlzLl9vblNlY3Rpb25zSW5pdC5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLnBsYXllci5vbignc2VjdGlvbnN0b2dnbGUnLCB0aGlzLl9vblNlY3Rpb25Ub2dnbGUuYmluZCh0aGlzKSlcblx0fVxuXG5cdG9uQ2hlY2tlZChlLCBkYXRhKSB7XG5cdFx0c3VwZXIub25DaGVja2VkKGUpO1xuXHRcdHRoaXMucGxheWVyLnRvZ2dsZVNlY3Rpb25zKGRhdGEuY2hlY2tlZCk7XG5cdH1cblxuXHRfb25TZWN0aW9uVG9nZ2xlKGUsIGRhdGEpIHtcblx0XHRjb25zdCB7IGlzVmlzaWJsZSB9ID0gZGF0YTtcblx0XHRpZih0aGlzLmNoZWNrZWQgIT09IGlzVmlzaWJsZSkge1xuXHRcdFx0dGhpcy5jaGVja2VkID0gaXNWaXNpYmxlO1xuXHRcdH1cblxuXHR9XG5cblx0X29uU2VjdGlvbnNJbml0KGUpIHtcblx0XHR0aGlzLm9wdGlvbnMuZGlzYWJsZSA9IHRoaXMuZGlzYWJsZSA9IGZhbHNlO1xuXHRcdHRoaXMuY2hlY2tlZCA9IHRydWU7XG5cdH1cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdTZWN0aW9uQ29udHJvbCcsIFNlY3Rpb25Db250cm9sKTtcbkNvbnRyb2wucmVnaXN0ZXJDb250cm9sKCdzZWN0aW9uJywgU2VjdGlvbkNvbnRyb2wpO1xuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbkNvbnRyb2w7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9TZWN0aW9uQ29udHJvbC5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgY29udHJvbC1jaGVja2JveC5qc1xuICovXG5cblxuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9Db250cm9sJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuY2hlY2tlZD1mYWxzZV1cbiAqIEBjbGFzcyBDb250cm9sQ2hlY2tib3ggVG9nZ2FibGUgY29udHJvbFxuICovXG5jbGFzcyBDb250cm9sQ2hlY2tib3ggZXh0ZW5kcyBDb250cm9sIHtcblxuXHRjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnM9e30pIHtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXHRcdHRoaXMuY2hlY2tlZCA9IHRoaXMub3B0aW9ucy5jaGVja2VkIHx8IGZhbHNlO1xuXHRcdHRoaXMuZWxlbWVudC5vbignbGVwbGF5ZXJfY2hlY2tlZCcsIHRoaXMub25DaGVja2VkLmJpbmQodGhpcykpXG5cdH1cblxuXG5cdC8qKlxuXHQgKiBTZXR0ZXIgZm9yIGNoZWNrZWQgcHJvcGVydHlcblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IHZhbFxuXHQgKi9cblx0c2V0IGNoZWNrZWQgKHZhbCkge1xuXHRcdGlmICh0aGlzLmRpc2FibGUpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dmFsID0gISF2YWw7XG5cdFx0dGhpcy5fY2hlY2tlZCA9IHZhbFxuXHRcdHRoaXMuZWxlbWVudC50b2dnbGVDbGFzcygnY29udHJvbC1jaGVja2JveC0tY2hlY2tlZCcsIHZhbCk7XG5cdFx0dGhpcy5lbGVtZW50LnRyaWdnZXIoJ2xlcGxheWVyX2NoZWNrZWQnLCB7IGNoZWNrZWQgOiB2YWwgfSk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0dGVyIGZvciBjaGVja2VkIHByb3Blcnlcblx0ICogQHB1YmxpY1xuXHQgKiBAcmV0dXJuIHtib29sZWFufVxuXHQgKi9cblx0Z2V0IGNoZWNrZWQgKCkge1xuXHRcdHJldHVybiB0aGlzLl9jaGVja2VkO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0b25DbGljayAoZSkge1xuXHRcdHN1cGVyLm9uQ2xpY2soZSk7XG5cdFx0dGhpcy5jaGVja2VkID0gIXRoaXMuY2hlY2tlZDtcblx0fVxuXG5cdC8qKlxuXHQgKiBPbiBjaGVja2VkIGV2ZW50IGhhbmRsZXJcblx0ICpcblx0ICogQHBhcmFtIHtFdmVudH0gZVxuXHQgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuXHQgKi9cblx0b25DaGVja2VkKGUsIGRhdGEpIHtcblxuXHR9XG5cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRidWlsZENTU0NsYXNzKCkge1xuXHRcdHJldHVybiBgY29udHJvbC1jaGVja2JveCAke3N1cGVyLmJ1aWxkQ1NTQ2xhc3MoKX1gXG5cdH1cblxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ0NvbnRyb2xDaGVja2JveCcsIENvbnRyb2xDaGVja2JveCk7XG5Db250cm9sLnJlZ2lzdGVyQ29udHJvbCgnY2hlY2tib3gnLCBDb250cm9sQ2hlY2tib3gpO1xuZXhwb3J0IGRlZmF1bHQgQ29udHJvbENoZWNrYm94O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvQ29udHJvbENoZWNrYm94LmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBGdWxsc2NyZWVuQ29udHJvbC5qc1xuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCBDb250cm9sIGZyb20gJy4vQ29udHJvbCc7XG5cbi8qKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQGNsYXNzIEZ1bGxzY3JlZW5Db250cm9sXG4gKiBAZXh0ZW5kcyBDb250cm9sXG4gKi9cbmNsYXNzIEZ1bGxzY3JlZW5Db250cm9sIGV4dGVuZHMgQ29udHJvbCB7XG5cdGNvbnN0cnVjdG9yIChwbGF5ZXIsIG9wdGlvbnM9e30pIHtcblx0XHRvcHRpb25zID0gJC5leHRlbmQoe30sIHtcblx0XHRcdGljb25OYW1lIDogJ2Fycm93cy1hbHQnLFxuXHRcdFx0Y2xhc3NOYW1lIDogJ2Z1bGxzY3JlZW4nLFxuXHRcdFx0dGl0bGUgOiAn0KDQsNC30LLQtdGA0L3Rg9GC0Ywv0YHQstC10YDQvdGD0YLRjCDQvdCwINC/0L7Qu9C90YvQuSDRjdC60YDQsNC9Jyxcblx0XHRcdG5hbWUgOiAnZnVsbHNjcmVlbidcblx0XHR9LCBvcHRpb25zKTtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0b25DbGljayhlKSB7XG5cdFx0c3VwZXIub25DbGljayhlKVxuXHRcdHRoaXMucGxheWVyLnRvZ2dsZUZ1bGxzY3JlZW4oKTtcblx0fVxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ0Z1bGxzY3JlZW5Db250cm9sJywgRnVsbHNjcmVlbkNvbnRyb2wpO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ2Z1bGxzY3JlZW4nLCBGdWxsc2NyZWVuQ29udHJvbCk7XG5leHBvcnQgZGVmYXVsdCBGdWxsc2NyZWVuQ29udHJvbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL0Z1bGxzY3JlZW5Db250cm9sLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBSYXRlQ29udHJvbC5qc1xuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCBDb250cm9sIGZyb20gJy4vQ29udHJvbCc7XG5pbXBvcnQgQ29udHJvbFRleHQgZnJvbSAnLi9Db250cm9sVGV4dCc7XG5pbXBvcnQgQ29va2llIGZyb20gJy4uL3V0aWxzL2Nvb2tpZSc7XG5cbi8qKlxuICogQGNsYXNzIFJhdGVDb250cm9sXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAcHJvcGVydHkge0NvbnRyb2x9IGRvd25Db250cm9sICBEb3duIHJhdGUgY29udHJvbFxuICogQHByb3BlcnR5IHtDb250cm9sfSB1cENvbnRyb2wgIFVwIHJhdGUgY29udHJvbFxuICogQHByb3BlcnR5IHtDb250cm9sVGV4dH0gY3VycmVudFJhdGUgQ29udHJvbCBvZiBjdXVyZW50IHJhdGVcbiAqIEBleHRlbmRzIENvbnRyb2xcbiAqL1xuY2xhc3MgUmF0ZUNvbnRyb2wgZXh0ZW5kcyBDb250cm9sIHtcblx0Y29uc3RydWN0b3IgKHBsYXllciwgb3B0aW9ucz17fSkge1xuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0Y2xhc3NOYW1lIDogJ2NvbnRyb2wtY29udGFpbmVyJyxcblx0XHRcdHRhZyA6ICdkaXYnXG5cdFx0fSwgb3B0aW9ucyk7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblxuXHRcdHRoaXMucGxheWVyLm9uKCdyYXRlY2hhbmdlJywgKCkgPT4ge1xuXHRcdFx0dGhpcy51cGRhdGUoKTtcblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0c3VwZXIuY3JlYXRlRWxlbWVudCgpO1xuXHRcdGNvbnN0IHZpZGVvID0gdGhpcy5wbGF5ZXIudmlkZW87XG5cblx0XHR0aGlzLmRvd25Db250cm9sID0gbmV3IENvbnRyb2wodGhpcy5wbGF5ZXIsIHtcblx0XHRcdGNsYXNzTmFtZSA6ICdyYXRlLWRvd24nLFxuXHRcdFx0bmFtZSA6ICdyYXRlLWRvd24nLFxuXHRcdFx0aWNvbk5hbWUgOiAnYmFja3dhcmQnLFxuXHRcdFx0Y29sbGVjdGlvbiA6IHRoaXMub3B0aW9ucy5jb2xsZWN0aW9uLFxuXHRcdFx0dGl0bGUgOiAn0KPQvNC10L3RjNGI0LjRgtGMINGB0LrQvtGA0L7RgdGC0Ywg0L/RgNC+0LjQs9GA0YvQstCw0L3QuNGPJyxcblx0XHRcdG9uQ2xpY2sgOiBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdHZpZGVvLmRlY3JlYXNlUmF0ZSgpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0dGhpcy51cENvbnRyb2wgPSBuZXcgQ29udHJvbCh0aGlzLnBsYXllciwge1xuXHRcdFx0Y2xhc3NOYW1lIDogJ3JhdGUtdXAnLFxuXHRcdFx0bmFtZSA6ICdyYXRlLXVwJyxcblx0XHRcdGljb25OYW1lIDogJ2ZvcndhcmQnLFxuXHRcdFx0Y29sbGVjdGlvbiA6IHRoaXMub3B0aW9ucy5jb2xsZWN0aW9uLFxuXHRcdFx0dGl0bGUgOiAn0KPQstC10LvQuNGH0LjRgtGMINGB0LrQvtGA0L7RgdGC0Ywg0L/RgNC+0LjQs9GA0YvQstCw0L3QuNGPJyxcblx0XHRcdG9uQ2xpY2sgOiBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdHZpZGVvLmluY3JlYXNlUmF0ZSgpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0dGhpcy5jdXJyZW50UmF0ZSA9IG5ldyBDb250cm9sVGV4dCh0aGlzLnBsYXllciwge1xuXHRcdFx0Y2xhc3NOYW1lIDogJ3JhdGUtY3VycmVudCcsXG5cdFx0XHRvbkNsaWNrIDogZnVuY3Rpb24oZSkge1xuXHRcdFx0XHR2aWRlby5yYXRlID0gdGhpcy5wbGF5ZXIub3B0aW9ucy5yYXRlLmRlZmF1bHRcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHRoaXMuZWxlbWVudFxuXHRcdFx0LmFwcGVuZCh0aGlzLmRvd25Db250cm9sLmVsZW1lbnQpXG5cdFx0XHQuYXBwZW5kKHRoaXMuY3VycmVudFJhdGUuZWxlbWVudClcblx0XHRcdC5hcHBlbmQodGhpcy51cENvbnRyb2wuZWxlbWVudCk7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRidWlsZENTU0NsYXNzKCkge1xuXHRcdHJldHVybiB0aGlzLm9wdGlvbnMuY2xhc3NOYW1lO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0b25QbGF5ZXJJbml0ZWQoKSB7XG5cdFx0dGhpcy51cGRhdGUoKTtcblx0fVxuXG5cdC8qKlxuXHQgKlxuXHQgKi9cblx0b25DbGljayhlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdH1cblxuXHR1cGRhdGUodmFsdWUpIHtcblx0XHRjb25zdCB2aWRlbyA9IHRoaXMucGxheWVyLnZpZGVvO1xuXG5cdFx0dmFsdWUgPSB2YWx1ZSB8fCB2aWRlby5yYXRlO1xuXHRcdHZhbHVlID0gcGFyc2VGbG9hdCh2YWx1ZSlcblx0XHRcdC50b0ZpeGVkKDIpXG5cdFx0XHQudG9TdHJpbmcoKVxuXHRcdFx0LnJlcGxhY2UoLywvZywgJy4nKTtcblx0XHR0aGlzLmN1cnJlbnRSYXRlLnRleHQgPSAnw5cnICsgdmFsdWU7XG5cblx0XHRpZih0aGlzLmRpc2FibGUpIHJldHVybjtcblxuXHRcdGlmKHZpZGVvLnJhdGUgPD0gdmlkZW8ucmF0ZU1pbikge1xuXHRcdFx0dGhpcy5kb3duQ29udHJvbC5kaXNhYmxlID0gdHJ1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5kb3duQ29udHJvbC5kaXNhYmxlID0gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYodmlkZW8ucmF0ZSA+PSB2aWRlby5yYXRlTWF4KSB7XG5cdFx0XHR0aGlzLnVwQ29udHJvbC5kaXNhYmxlID0gdHJ1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy51cENvbnRyb2wuZGlzYWJsZSA9IGZhbHNlO1xuXHRcdH1cblx0fVxuXG5cdHNldCBkaXNhYmxlKHZhbHVlKSB7XG5cdFx0dGhpcy5fZGlzYWJsZSA9IHZhbHVlO1xuXHRcdHRoaXMuZG93bkNvbnRyb2wuZGlzYWJsZSA9IHZhbHVlO1xuXHRcdHRoaXMudXBDb250cm9sLmRpc2FibGUgPSB2YWx1ZTtcblx0fVxuXG5cdGluaXQgKCkge1xuXHRcdGxldCByYXRlID0gQ29va2llLmdldCgncmF0ZScsIHRoaXMucGxheWVyLm9wdGlvbnMucmF0ZS5kZWZhdWx0KTtcblx0XHR0aGlzLnNob3cocmF0ZSk7XG5cdH1cblxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ1JhdGVDb250cm9sJywgUmF0ZUNvbnRyb2wpO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ3JhdGUnLCBSYXRlQ29udHJvbCk7XG5leHBvcnQgZGVmYXVsdCBSYXRlQ29udHJvbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL1JhdGVDb250cm9sLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBCYWNrd2FyZENvbnRyb2wuanNcbiAqXG4gKiBCYWNrd2FyZCBjb250cm9sXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9Db250cm9sJztcblxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIE9wdGlvbnNcbiAqIEBjbGFzcyBCYWNrd2FyZENvbnRyb2xcbiAqIEBleHRlbmRzIENvbnRyb2xcbiAqL1xuY2xhc3MgQmFja3dhcmRDb250cm9sIGV4dGVuZHMgQ29udHJvbCB7XG5cdGNvbnN0cnVjdG9yIChwbGF5ZXIsIG9wdGlvbnM9e30pIHtcblx0XHRvcHRpb25zID0gJC5leHRlbmQoe30sIHtcblx0XHRcdGljb25OYW1lIDogJ3VuZG8nLFxuXHRcdFx0Y2xhc3NOYW1lIDogJ2JhY2t3YXJkJyxcblx0XHRcdG5hbWUgOiAnYmFja3dhcmQnLFxuXHRcdFx0dGl0bGUgOiBg0J7RgtC80L7RgtCw0YLRjCDQvdCw0LfQsNC0INC90LAgJHtwbGF5ZXIub3B0aW9ucy5wbGF5YmFjay5zdGVwLm1lZGl1bX0g0YHQtdC60YPQvdC0YCxcblx0XHRcdGRpc2FibGUgOiB0cnVlXG5cdFx0fSwgb3B0aW9ucyk7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblxuXHRcdHRoaXMucGxheWVyLm9uKCdmaXJzdHBsYXknLCAoKSA9PiB0aGlzLmRpc2FibGUgPSBmYWxzZSlcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdG9uQ2xpY2soZSkge1xuXHRcdHN1cGVyLm9uQ2xpY2soZSk7XG5cdFx0dGhpcy5wbGF5ZXIudmlkZW8uY3VycmVudFRpbWUgLT0gdGhpcy5wbGF5ZXIub3B0aW9ucy5wbGF5YmFjay5zdGVwLm1lZGl1bTtcblx0XHR0aGlzLnBsYXllci5zcGxhc2hJY29uLnNob3coJ3VuZG8nKTtcblx0fVxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ0JhY2t3YXJkQ29udHJvbCcsIEJhY2t3YXJkQ29udHJvbCk7XG5Db250cm9sLnJlZ2lzdGVyQ29udHJvbCgnYmFja3dhcmQnLCBCYWNrd2FyZENvbnRyb2wpO1xuZXhwb3J0IGRlZmF1bHQgQmFja3dhcmRDb250cm9sO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvQmFja3dhcmRDb250cm9sLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBTb3VyY2VDb250cm9sLmpzXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9Db250cm9sJztcbmltcG9ydCBDb250cm9sQ29udGFpbmVyIGZyb20gJy4vQ29udHJvbENvbnRhaW5lcic7XG5cblxuLyoqXG4gKiBAY2xhc3MgU291cmNlQ29udHJvbFxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQGV4dGVuZHMgQ29udHJvbENvbmFpbmVyXG4gKi9cbmNsYXNzIFNvdXJjZUNvbnRyb2wgZXh0ZW5kcyBDb250cm9sQ29udGFpbmVyIHtcblx0Ly8gVE9ETzog0JTQtdC70LDRgtGMIGRpc2FibGUvZW5hYmxlINC/0L7RgdC70LUgb3B0aW9ucyBpbml0XG5cdGNvbnN0cnVjdG9yIChwbGF5ZXIsIG9wdGlvbnM9e30pIHtcblx0XHRvcHRpb25zID0gJC5leHRlbmQoe30sIHtcblx0XHRcdG5hbWUgOiAnc291cmNlJyxcblx0XHRcdGljb25OYW1lIDogJ2J1bGxzZXllJyxcblx0XHRcdHRpdGxlIDogJ9Ca0LDRh9C10YHRgtCy0L4nLFxuXHRcdFx0Y2xhc3NOYW1lIDogJ3NvdXJjZS1jb250cm9sJyxcblx0XHRcdGRpc2FibGUgOiB0cnVlXG5cdFx0fSwgb3B0aW9ucyk7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblxuXHRcdHRoaXMucGxheWVyLm9uKCdwbGF5aW5nJywgdGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5wbGF5ZXIub24oJ3F1YWxpdHljaGFuZ2UnLCB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdG9uSXRlbUNsaWNrKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRjb25zdCBpdGVtID0gJChlLnRhcmdldCk7XG5cdFx0Y29uc3QgdmlkZW8gPSB0aGlzLnBsYXllci52aWRlbztcblx0XHR2aWRlby5wbGF5YmFja1F1YWxpdHkgPSBpdGVtLmRhdGEoJ25hbWUnKTtcblxuXHRcdHRoaXMuZHJvcGRvd25Db250ZW50LmhpZGUoKTtcblxuXHR9XG5cblx0b25QbGF5ZXJJbml0ZWQoZSwgZGF0YSkge1xuXHRcdHRoaXMudXBkYXRlKCk7XG5cdH1cblxuXHRnZXREYXRhKCkge1xuXHRcdHJldHVybiB0aGlzLnBsYXllci52aWRlby5nZXRBdmFpbGFibGVRdWFsaXR5TGV2ZWxzKCk7XG5cdH1cblxuXHRnZXRDdXJyZW50VmFsdWUoKSB7XG5cdFx0cmV0dXJuIHRoaXMucGxheWVyLnZpZGVvLnBsYXliYWNrUXVhbGl0eTtcblx0fVxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ1NvdXJjZUNvbnRyb2wnLCBTb3VyY2VDb250cm9sKTtcbkNvbnRyb2wucmVnaXN0ZXJDb250cm9sKCdzb3VyY2UnLCBTb3VyY2VDb250cm9sKTtcbmV4cG9ydCBkZWZhdWx0IFNvdXJjZUNvbnRyb2w7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9Tb3VyY2VDb250cm9sLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBDb250cm9sQ29udGFpbmVyLmpzXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9Db250cm9sJztcbmltcG9ydCBDb250cm9sRHJvcGRvd24gZnJvbSAnLi9Db250cm9sRHJvcGRvd24nO1xuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBjbGFzcyBDb250cm9sQ29udGFpbmVyXG4gKiBAZXh0ZW5kcyBDb250cm9sRHJvcGRvd25cbiAqL1xuY2xhc3MgQ29udHJvbENvbnRhaW5lciBleHRlbmRzIENvbnRyb2xEcm9wZG93biB7XG5cblx0Y29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblx0XHR0aGlzLl9hY3RpdmUgPSBudWxsO1xuXHRcdC8qKlxuXHRcdCAqIExpc3Qgb2YgaXRlbXNcblx0XHQgKlxuXHRcdCAqIEBwdWJsaWNcblx0XHQgKiBAdHlwZSB7QXJyYXl9XG5cdFx0ICovXG5cdFx0dGhpcy5saXN0ID0gW107XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGl0ZW0gb2YgY29udGFpbmVyIGJ5IGluZGV4XG5cdCAqXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG5cdCAqL1xuXHRnZXRCeUluZGV4KGluZGV4KSB7XG5cdFx0cmV0dXJuIHRoaXMubGlzdFtpbmRleF07XG5cdH1cblxuXHQvKipcblx0ICogU2V0IGl0ZW0gYWN0aXZlIGJ5IGluZGV4XG5cdCAqXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG5cdCAqL1xuXHRzZXRBY3RpdmVCeUluZGV4KGluZGV4KSB7XG5cdFx0aWYgKHRoaXMuYWN0aXZlKSB7XG5cdFx0XHR0aGlzLmFjdGl2ZS5yZW1vdmVDbGFzcygnY29udHJvbC1jb250YWluZXJfX2l0ZW0tLWFjdGl2ZScpO1xuXHRcdH1cblx0XHR0aGlzLl9hY3RpdmUgPSB0aGlzLmxpc3RbaW5kZXhdLmFkZENsYXNzKCdjb250cm9sLWNvbnRhaW5lcl9faXRlbS0tYWN0aXZlJyk7XG5cdFx0cmV0dXJuIHRoaXMuX2FjdGl2ZTtcblx0fVxuXG5cblx0LyoqXG5cdCAqIEdldHRlciBvZiBhY3RpdmUgZmllbGRcblx0ICpcblx0ICogQHB1YmxpY1xuXHQgKiBAdHlwZSB7alF1ZXJ5fVxuXHQgKi9cblx0Z2V0IGFjdGl2ZSAoKSB7XG5cdFx0aWYgKHRoaXMuX2FjdGl2ZSAmJiB0aGlzLl9hY3RpdmUubGVuZ3RoID4gMCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuX2FjdGl2ZTtcblx0XHR9XG5cdFx0dGhpcy5saXN0LmZvckVhY2goaXRlbSA9PiB7XG5cdFx0XHRpZiAoaXRlbS5oYXNDbGFzcygnY29udHJvbC1jb250YWluZXJfX2l0ZW0tLWFjdGl2ZScpKSB7XG5cdFx0XHRcdHRoaXMuX2FjdGl2ZSA9IGl0ZW07XG5cdFx0XHR9XG5cdFx0fSlcblx0XHRyZXR1cm4gdGhpcy5fYWN0aXZlO1xuXHR9XG5cblx0LyoqXG5cdCAqIFNldHRlciBvZiBhY3RpdmUgZmllbGRcblx0ICpcblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge2pRdWVyeX0gSXRlbSBvZiBjb250YWluZXJcblx0ICovXG5cdHNldCBhY3RpdmUgKGVsZW1lbnQpIHtcblx0XHRpZiAodGhpcy5hY3RpdmUpIHtcblx0XHRcdHRoaXMuYWN0aXZlLnJlbW92ZUNsYXNzKCdjb250cm9sLWNvbnRhaW5lcl9faXRlbS0tYWN0aXZlJyk7XG5cdFx0fVxuXHRcdGlmIChlbGVtZW50KSB7XG5cdFx0XHQkKGVsZW1lbnQpLmFkZENsYXNzKCdjb250cm9sLWNvbnRhaW5lcl9faXRlbS0tYWN0aXZlJyk7XG5cdFx0fVxuXHRcdHRoaXMuX2FjdGl2ZSA9IGVsZW1lbnQ7XG5cdFx0dGhpcy5jbG9zZSgpO1xuXHRcdHJldHVybiB0aGlzLl9hY3RpdmVcblx0fVxuXG5cblx0LyoqXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtTdHJpbmd8alF1ZXJ5fSBDb250ZW50IG9mIGl0ZW1cblx0ICogQHBhcmFtIHtPYmplY3R9IERhdGEgb2YgaXRlbVxuXHQgKi9cblx0YWRkSXRlbSAoY29udGVudCwgZGF0YSkge1xuXHRcdGNvbnN0IGl0ZW0gPSAkKCc8ZGl2IC8+Jylcblx0XHRcdC5hZGRDbGFzcygnY29udHJvbC1jb250YWluZXJfX2l0ZW0nKVxuXHRcdFx0LmRhdGEoZGF0YSlcblx0XHRcdC5hdHRyKCd0aXRsZScsIGRhdGEudG9vbHRpcClcblx0XHRcdC5vbignY2xpY2sgdGFwJywgdGhpcy5vbkl0ZW1DbGljay5iaW5kKHRoaXMpKVxuXHRcdFx0LmFwcGVuZChjb250ZW50KTtcblxuXHRcdHRoaXMubGlzdCA9IHRoaXMubGlzdC5jb25jYXQoaXRlbSk7XG5cblx0XHR0aGlzLmRyb3Bkb3duQ29udGVudC5hcHBlbmQoaXRlbSk7XG5cblx0XHR0aGlzLmVtaXRUYXBFdmVudHMoaXRlbSk7XG5cblx0XHRyZXR1cm4gaXRlbTtcblx0fVxuXG5cdC8qKlxuXHQgKiBPbiBpdGVtIGNsaWNrIGV2ZW50IGhhbmRsZXJcblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge0V2ZW50fSBlXG5cdCAqL1xuXHRvbkl0ZW1DbGljayAoZSkge1xuXHRcdHRoaXMuYWN0aXZlID0gZS5jdXJyZW50VGFyZ2V0O1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0YnVpbGRDU1NDbGFzcygpIHtcblx0XHRyZXR1cm4gYCR7c3VwZXIuYnVpbGRDU1NDbGFzcygpfSBjb250cm9sLWNvbnRhaW5lcmBcblx0fVxuXG5cdHVwZGF0ZSgpIHtcblx0XHRjb25zdCBkYXRhID0gdGhpcy5nZXREYXRhKClcblx0XHRjb25zdCBjdXJyZW50VmFsdWUgPSB0aGlzLmdldEN1cnJlbnRWYWx1ZSgpXG5cblx0XHRpZihkYXRhID09IG51bGwgfHwgZGF0YS5sZW5ndGggPT09IDApIHtcblx0XHRcdHRoaXMuZGlzYWJsZSA9IHRydWU7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5saXN0ID0gW107XG5cdFx0dGhpcy5kcm9wZG93bkNvbnRlbnQuZW1wdHkoKTtcblxuXHRcdGRhdGEuZm9yRWFjaChpdGVtID0+IHtcblx0XHRcdGNvbnN0IGVsZW0gPSB0aGlzLmFkZEl0ZW0oaXRlbS50aXRsZSwgaXRlbSk7XG5cdFx0XHRpZihjdXJyZW50VmFsdWUgJiYgY3VycmVudFZhbHVlLm5hbWUgPT09IGl0ZW0ubmFtZSkge1xuXG5cdFx0XHRcdHRoaXMuYWN0aXZlID0gZWxlbTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHR0aGlzLmRpc2FibGUgPSBmYWxzZTtcblx0fVxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ0NvbnRyb2xDb250YWluZXInLCBDb250cm9sQ29udGFpbmVyKTtcbkNvbnRyb2wucmVnaXN0ZXJDb250cm9sKCdjb250YWluZXInLCBDb250cm9sQ29udGFpbmVyKTtcbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xDb250YWluZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9Db250cm9sQ29udGFpbmVyLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBTdWJ0aXRsZUNvbnRyb2wuanNcbiAqXG4gKiBTdWJ0aXRsZSBjb250cm9sXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9Db250cm9sJztcbmltcG9ydCBDb250cm9sQ29udGFpbmVyIGZyb20gJy4vQ29udHJvbENvbnRhaW5lcic7XG5cbi8qKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQGNsYXNzIFN1YnRpdGxlQ29udHJvbFxuICogQGV4dGVuZHMgQ29udHJvbENvbnRhaW5lclxuICovXG5jbGFzcyBTdWJ0aXRsZUNvbnRyb2wgZXh0ZW5kcyBDb250cm9sQ29udGFpbmVyIHtcblx0Y29uc3RydWN0b3IgKHBsYXllciwgb3B0aW9ucz17fSkge1xuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0aWNvbk5hbWUgOiAnY29tbWVudGluZy1vJyxcblx0XHRcdHRpdGxlIDogJ9Ch0YPQsdGC0LjRgtGA0YsnLFxuXHRcdFx0bmFtZSA6ICdzdWJ0aXRsZScsXG5cdFx0XHRjbGFzc05hbWUgOiAnc3VidGl0bGUtY29udHJvbCcsXG5cdFx0XHRkaXNhYmxlIDogdHJ1ZVxuXHRcdH0sIG9wdGlvbnMpO1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cblx0XHR0aGlzLnBsYXllci5vbigncGxheWluZycsIHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xuXHRcdHRoaXMucGxheWVyLm9uKCd0cmFja3NjaGFuZ2UnLCB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdG9uQ2xpY2sgKGUpIHtcblx0XHRzdXBlci5vbkNsaWNrKGUpO1xuXHRcdGNvbnN0IHZpZGVvID0gdGhpcy5wbGF5ZXIudmlkZW87XG5cdFx0dmlkZW8udHJhY2sgPSBudWxsXG5cdH1cblxuXHRvbkl0ZW1DbGljayAoZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpXG5cblx0XHRjb25zdCBpdGVtID0gJChlLnRhcmdldClcblx0XHRjb25zdCB2aWRlbyA9IHRoaXMucGxheWVyLnZpZGVvO1xuXHRcdGlmIChpdGVtLmRhdGEoKSkge1xuXHRcdFx0dmlkZW8udHJhY2sgPSBpdGVtLmRhdGEoKTtcblx0XHR9XG5cblx0XHR0aGlzLmRyb3Bkb3duQ29udGVudC5oaWRlKClcblx0fVxuXG5cdG9uUGxheWVySW5pdGVkKGUsIGRhdGEpIHtcblx0XHR0aGlzLnVwZGF0ZSgpXG5cdH1cblxuXHR1cGRhdGUoKSB7XG5cdFx0c3VwZXIudXBkYXRlKCk7XG5cdFx0Y29uc3QgaGFzVmFsdWUgPSAhISh0aGlzLmdldEN1cnJlbnRWYWx1ZSgpICYmIHRoaXMuZ2V0Q3VycmVudFZhbHVlKCkubmFtZSAhPSBudWxsKTtcblx0XHR0aGlzLmVsZW1lbnQudG9nZ2xlQ2xhc3MoXG5cdFx0XHQnY29udHJvbC1jaGVja2JveC0tY2hlY2tlZCcsXG5cdFx0XHRoYXNWYWx1ZVxuXHRcdClcblx0fVxuXG5cdGdldERhdGEoKSB7XG5cdFx0cmV0dXJuIHRoaXMucGxheWVyLnZpZGVvLnN1YnRpdGxlcztcblx0fVxuXG5cdGdldEN1cnJlbnRWYWx1ZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5wbGF5ZXIudmlkZW8udHJhY2s7XG5cdH1cblxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ1N1YnRpdGxlQ29udHJvbCcsIFN1YnRpdGxlQ29udHJvbCk7XG5Db250cm9sLnJlZ2lzdGVyQ29udHJvbCgnc3VidGl0bGUnLCBTdWJ0aXRsZUNvbnRyb2wpO1xuZXhwb3J0IGRlZmF1bHQgU3VidGl0bGVDb250cm9sO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvU3VidGl0bGVDb250cm9sLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBEb3dubG9hZENvbnRyb2wuanNcbiAqXG4gKiBEb3dubG9hZCBjb250cm9sXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb250cm9sIGZyb20gJy4vQ29udHJvbCc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCBJY29uIGZyb20gJy4vSWNvbic7XG5cbi8qKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQGNsYXNzIERvd25sb2FkQ29udHJvbFxuICogQGV4bnRlZHMgQ29udHJvbFxuICovXG5jbGFzcyBEb3dubG9hZENvbnRyb2wgZXh0ZW5kcyBDb250cm9sIHtcblx0Y29uc3RydWN0b3IgKHBsYXllciwgb3B0aW9ucz17fSkge1xuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7XG5cdFx0XHR0aXRsZSA6ICfQodC60LDRh9Cw0YLRjCDQstC40LTQtdC+Jyxcblx0XHRcdGNsYXNzTmFtZSA6ICdkb3dubG9hZCcsXG5cdFx0XHRuYW1lIDogJ2Rvd25sb2FkJyxcblx0XHR9LCBvcHRpb25zKTtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXHRcdHRoaXMucGxheWVyLm9uKCdsb2Fkc3RhcnQnLCB0aGlzLm9uTG9hZFN0YXJ0LmJpbmQodGhpcykpO1xuXHR9XG5cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdC8vIFRPRE86INCU0L7QvtC/0YDQtdC00LXQu9C40YLRjCDRjdGC0L7RgiDQvNC10YLQvtC0LCDQsCDQvdC1INC/0LXRgNC10L7Qv9GA0LXQtNC70LXQuNGC0Yxcblx0XHR0aGlzLmVsZW1lbnQgPSAkKCc8YSAvPicpXG5cdFx0XHQuYXR0cih7XG5cdFx0XHRcdGhyZWYgOiAnJyxcblx0XHRcdFx0dGFyZ2V0IDogJ19ibGFuaycsXG5cdFx0XHRcdGRvd25sb2FkIDogdHJ1ZSxcblx0XHRcdFx0dGl0bGUgOiB0aGlzLm9wdGlvbnMudGl0bGUsXG5cdFx0XHR9KVxuXHRcdFx0LmFkZENsYXNzKHRoaXMuYnVpbGRDU1NDbGFzcygpKVxuXHRcdFx0LmFwcGVuZChuZXcgSWNvbih0aGlzLnBsYXllciwgeyBpY29uTmFtZSA6ICdkb3dubG9hZCcgfSkuZWxlbWVudCk7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRidWlsZENTU0NsYXNzKCkge1xuXHRcdHJldHVybiBgJHtzdXBlci5idWlsZENTU0NsYXNzKCl9YDtcblx0fVxuXG5cblx0LyoqXG5cdCAqIFNldHRlciBvZiBsaW5rIGZpZWxkXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIFBhdGggZm9yIHZpZGVvXG5cdCAqL1xuXHRzZXQgbGluayAodmFsdWUpIHtcblx0XHRjb25zdCB0aXRsZSA9IHRoaXMucGxheWVyLm9wdGlvbnMudGl0bGU7XG5cdFx0bGV0IGZpbGVOYW1lO1xuXG5cdFx0aWYodGl0bGUgIT0gbnVsbCkge1xuXHRcdFx0ZmlsZU5hbWUgPSBkZWNvZGVVUklDb21wb25lbnQodGl0bGUpICsgJy4nICsgZ2V0RmlsZUV4dGVuc2lvbih2YWx1ZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IHBhcnNlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblx0XHRcdHBhcnNlci5ocmVmID0gdmFsdWU7XG5cdFx0XHRmaWxlTmFtZSA9IHBhcnNlci5wYXRobmFtZS5zcGxpdCgnLycpO1xuXHRcdFx0ZmlsZU5hbWUgPSBmaWxlTmFtZVtmaWxlTmFtZS5sZW5ndGggLSAxXTtcblx0XHR9XG5cblx0XHR0aGlzLmVsZW1lbnQuYXR0cih7XG5cdFx0XHRocmVmIDogdmFsdWUsXG5cdFx0XHRkb3dubG9hZCA6IGZpbGVOYW1lXG5cdFx0fSk7XG5cdH1cblxuXG5cdG9uTG9hZFN0YXJ0KGUsIGRhdGEpIHtcblx0XHR0aGlzLmxpbmsgPSB0aGlzLnBsYXllci52aWRlby5zcmMudXJsO1xuXHR9XG5cbn1cbmZ1bmN0aW9uIGdldEZpbGVFeHRlbnNpb24oZmlsZU5hbWUpIHtcblx0cmV0dXJuIGZpbGVOYW1lLnNwbGl0KCcuJykucG9wKCk7XG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnRG93bmxvYWRDb250cm9sJywgRG93bmxvYWRDb250cm9sKTtcbkNvbnRyb2wucmVnaXN0ZXJDb250cm9sKCdkb3dubG9hZCcsIERvd25sb2FkQ29udHJvbCk7XG5leHBvcnQgZGVmYXVsdCBEb3dubG9hZENvbnRyb2w7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9Eb3dubG9hZENvbnRyb2wuanMiLCJcbid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgS2V5YmluZGluZ0luZm9Db250cm9sLmpzXG4gKlxuICogSW5mbyBjb250cm9sXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9Db250cm9sJztcbmltcG9ydCBDb250cm9sRHJvcGRvd24gZnJvbSAnLi9Db250cm9sRHJvcGRvd24nO1xuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBjbGFzcyBLZXlCaW5kaW5nSW5mb0NvbnRyb2xcbiAqIEBleHRlbmRzIENvbnRyb2xEcm9wZG93blxuICovXG5jbGFzcyBLZXlCaW5kaW5nSW5mb0NvbnRyb2wgZXh0ZW5kcyBDb250cm9sRHJvcGRvd24ge1xuXG5cdGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucykge1xuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0aWNvbk5hbWUgOiAnaW5mbycsXG5cdFx0XHR0aXRsZSA6ICfQmNC90YTQvicsXG5cdFx0XHRjbGFzc05hbWUgOiAnaW5mby1jb250cm9sJyxcblx0XHRcdG5hbWUgOiAnaW5mbydcblx0XHR9LCBvcHRpb25zKTtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXHR9XG5cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHRzdXBlci5jcmVhdGVFbGVtZW50KCk7XG5cdFx0bGV0IGtleUJpbmRpbmcgPSB0aGlzLnBsYXllci5vcHRpb25zLmtleUJpbmRpbmc7XG5cdFx0bGV0IGluZm9Db250ZW50ID0gYGA7XG5cdFx0Zm9yIChsZXQgX2tleSBpbiBrZXlCaW5kaW5nKSB7XG5cdFx0XHRpZiAoIWtleUJpbmRpbmcuaGFzT3duUHJvcGVydHkoX2tleSkpIGNvbnRpbnVlO1xuXG5cdFx0XHRsZXQgaG90a2V5ID0ga2V5QmluZGluZ1tfa2V5XTtcblx0XHRcdGxldCBpdGVtID0gJyc7XG5cdFx0XHRsZXQga2V5U3RyaW5nID0gJyc7XG5cblx0XHRcdGhvdGtleS5pbmZvLmZvckVhY2goKGtleSwgaW5kZXgpID0+IHtcblx0XHRcdFx0aWYgKGluZGV4ICE9PSAwKSB7XG5cdFx0XHRcdFx0a2V5U3RyaW5nICs9IGAgKyBgXG5cdFx0XHRcdH1cblx0XHRcdFx0a2V5U3RyaW5nICs9IGA8a2JkIGNsYXNzPVwibGVwbGF5ZXIta2V5XCI+JHtrZXl9PC9rYmQ+YFxuXHRcdFx0fSk7XG5cblx0XHRcdGl0ZW0gPSBgXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJpbmZvLWNvbnRyb2xfX2l0ZW1cIj5cblx0XHRcdFx0XHQke2tleVN0cmluZ30gLSAke2hvdGtleS5kZXNjcmlwdGlvbn1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRgXG5cblx0XHRcdGluZm9Db250ZW50ICs9IGl0ZW07XG5cblx0XHR9XG5cdFx0dGhpcy5kcm9wZG93bkNvbnRlbnRcblx0XHRcdC5hZGRDbGFzcygnaW5mby1jb250cm9sX19jb250ZW50Jylcblx0XHRcdC5hcHBlbmQoaW5mb0NvbnRlbnQpO1xuXHR9XG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnS2V5QmluZGluZ0luZm9Db250cm9sJywgS2V5QmluZGluZ0luZm9Db250cm9sKTtcbkNvbnRyb2wucmVnaXN0ZXJDb250cm9sKCdrZXliaW5kaW5nIGluZm8nLCBLZXlCaW5kaW5nSW5mb0NvbnRyb2wpO1xuZXhwb3J0IGRlZmF1bHQgS2V5QmluZGluZ0luZm9Db250cm9sO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvS2V5YmluZGluZ0luZm9Db250cm9sLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBUaW1lSW5mb0NvbnRyb2wuanNcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL0NvbnRyb2wnO1xuaW1wb3J0IENvbnRyb2xUZXh0IGZyb20gJy4vQ29udHJvbFRleHQnO1xuaW1wb3J0IHsgc2Vjb25kc1RvVGltZSB9IGZyb20gJy4uL3V0aWxzJztcblxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAY2xhc3MgVGltZUluZm9Db250cm9sXG4gKiBAcHJvcGVydHkge0NvbnRyb2xUZXh0fSBjdXJyZW50VGltZSBDdXJyZW50IHRpbWUncyB0ZXh0XG4gKiBAcHJvcGVydHkge0NvbnRyb2xUZXh0fSB0b3RhbFRpbWUgVG90YWwgdGltZVxuICogQHByb3BlcnR5IHtqUXVlcnl9IGxpbmVcbiAqIEBleHRlbmRzIENvbnRyb2xcbiAqL1xuY2xhc3MgVGltZUluZm9Db250cm9sIGV4dGVuZHMgQ29udHJvbCB7XG5cblx0Y29uc3RydWN0b3IgKHBsYXllciwgb3B0aW9ucz17fSkge1xuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0Y2xhc3NOYW1lIDogJ3RpbWVsaW5lIHRpbWVsaW5lLWNvbnRhaW5lcicsXG5cdFx0XHRuYW1lIDogJ3RpbWUtaW5mbydcblx0XHR9LCBvcHRpb25zKTtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ3RpbWV1cGRhdGUnLCAoZSwgZGF0YSkgPT4ge1xuXHRcdFx0Y29uc3QgdGltZSA9IHRoaXMucGxheWVyLmN1cnJlbnRUaW1lO1xuXHRcdFx0dGhpcy5fY3VycmVudFRpbWVDb250cm9sLnRleHQgPSBzZWNvbmRzVG9UaW1lKHRpbWUpO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ2R1cmF0aW9uY2hhbmdlJywgKGUpID0+IHtcblx0XHRcdHRoaXMuX3RvdGFsVGltZUNvbnRyb2wudGV4dCA9IHNlY29uZHNUb1RpbWUodGhpcy5wbGF5ZXIudmlkZW8uZHVyYXRpb24pO1xuXHRcdH0pO1xuXHR9XG5cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdGNvbnN0IGR1cmF0aW9uID0gdGhpcy5wbGF5ZXIudmlkZW8uZHVyYXRpb247XG5cdFx0Y29uc3QgY3VycmVudFRpbWUgPSB0aGlzLnBsYXllci52aWRlby5jdXJyZW50VGltZTtcblx0XHR0aGlzLl9jdXJyZW50VGltZUNvbnRyb2wgPSBuZXcgQ29udHJvbFRleHQodGhpcy5wbGF5ZXIsIHsgY2xhc3NOYW1lIDogJ2NvbnRyb2wtdGltZV9fY3VycmVudCd9KTtcblx0XHR0aGlzLl90b3RhbFRpbWVDb250cm9sID0gbmV3IENvbnRyb2xUZXh0KHRoaXMucGxheWVyLCB7IGNsYXNzTmFtZSA6ICdjb250cm9sLXRpbWVfX3RvdGFsJ30pO1xuXG5cdFx0aWYoaXNOYU4oZHVyYXRpb24pIHx8IGR1cmF0aW9uID09IG51bGwpIHtcblx0XHRcdHRoaXMuX3RvdGFsVGltZUNvbnRyb2wudGV4dCA9ICcnO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLl90b3RhbFRpbWVDb250cm9sLnRleHQgPSBzZWNvbmRzVG9UaW1lKGR1cmF0aW9uKTtcblx0XHR9XG5cblx0XHRpZihjdXJyZW50VGltZSA9PSBudWxsKSB7XG5cdFx0XHR0aGlzLl9jdXJyZW50VGltZUNvbnRyb2wudGV4dCA9IHNlY29uZHNUb1RpbWUoMCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuX2N1cnJlbnRUaW1lQ29udHJvbC50ZXh0ID0gc2Vjb25kc1RvVGltZShjdXJyZW50VGltZSk7XG5cdFx0fVxuXG5cdFx0dGhpcy5lbGVtZW50ID0gJCgnPGRpdi8+JykuYWRkQ2xhc3MoJ2NvbnRyb2wtdGltZScpO1xuXHRcdHRoaXMuZWxlbWVudFxuXHRcdFx0LmFwcGVuZCh0aGlzLl9jdXJyZW50VGltZUNvbnRyb2wuZWxlbWVudClcblx0XHRcdC5hcHBlbmQodGhpcy5fdG90YWxUaW1lQ29udHJvbC5lbGVtZW50KVxuXG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudDtcblx0fVxuXG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0b25QbGF5ZXJJbml0ZWQoZSkge1xuXHRcdGxldCB2aWRlbyA9IHRoaXMucGxheWVyLnZpZGVvO1xuXHRcdHRoaXMuX2N1cnJlbnRUaW1lQ29udHJvbC50ZXh0ID0gc2Vjb25kc1RvVGltZSh2aWRlby5jdXJyZW50VGltZSk7XG5cdFx0dGhpcy5fdG90YWxUaW1lQ29udHJvbC50ZXh0ID0gc2Vjb25kc1RvVGltZSh2aWRlby5kdXJhdGlvbik7XG5cdH1cblxuXHRvbkNsaWNrKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0fVxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ1RpbWVJbmZvQ29udHJvbCcsIFRpbWVJbmZvQ29udHJvbCk7XG5Db250cm9sLnJlZ2lzdGVyQ29udHJvbCgndGltZWluZm8nLCBUaW1lSW5mb0NvbnRyb2wpO1xuZXhwb3J0IGRlZmF1bHQgVGltZUluZm9Db250cm9sO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvVGltZUluZm9Db250cm9sLmpzIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50cy9Db21wb25lbnQnO1xuaW1wb3J0IHsgSVNfU0FGQVJJLCBJU19JT1MsIElTX0FORFJPSUQgfSBmcm9tICcuLi91dGlscy9icm93c2VyJztcbmltcG9ydCBFbnRpdHkgZnJvbSAnLi9FbnRpdHknO1xuXG5cbmNsYXNzIEh0bWw1IGV4dGVuZHMgRW50aXR5IHtcblx0Y29uc3RydWN0b3IgKHBsYXllciwgb3B0aW9ucykge1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cdFx0dGhpcy5tZWRpYSA9IHRoaXMuZWxlbWVudFswXTtcblxuXHRcdHRoaXMuc3VidGl0bGVzID0gW107XG5cdFx0dGhpcy5idWZmZXJSYW5nZXMgPSBbXTtcblxuXHRcdHRoaXMuc3JjID0gdGhpcy5wbGF5ZXIub3B0aW9ucy5zcmM7XG5cblx0XHRpZih0aGlzLnBsYXllci5vcHRpb25zLnBvc3RlciAhPSBudWxsKSB7XG5cdFx0XHR0aGlzLnBvc3RlciA9IHRoaXMucGxheWVyLm9wdGlvbnMucG9zdGVyO1xuXHRcdH1cblxuXHRcdGlmKHRoaXMuZ2V0QXZhaWxhYmxlUXVhbGl0eUxldmVscygpLmxlbmd0aCA+IDApIHtcblx0XHRcdHRoaXMuX3BsYXliYWNrUXVhbGl0eSA9IHRoaXMuZ2V0QXZhaWxhYmxlUXVhbGl0eUxldmVscygpWzBdO1xuXHRcdH1cblxuXHRcdHRoaXMuZWxlbWVudC5vbignbG9hZHN0YXJ0JywgdGhpcy5vbkxvYWRTdGFydC5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ3RpbWV1cGRhdGUnLCB0aGlzLm9uVGltZVVwZGF0ZS5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ2R1cmF0aW9uY2hhbmdlJywgdGhpcy5vbkR1cmF0aW9uQ2hhbmdlLmJpbmQodGhpcykpO1xuXHRcdHRoaXMuZWxlbWVudC5vbigncHJvZ3Jlc3MnLCB0aGlzLm9uUHJvZ3Jlc3MuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdzZWVraW5nJywgdGhpcy5vblNlZWtpbmcuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdzZWVrZWQnLCB0aGlzLm9uU2Vla2VkLmJpbmQodGhpcykpO1xuXHRcdHRoaXMuZWxlbWVudC5vbigndm9sdW1lY2hhbmdlJywgdGhpcy5vblZvbHVtZUNoYW5nZS5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ2NsaWNrJywgdGhpcy5vbkNsaWNrLmJpbmQodGhpcykpO1xuXHRcdHRoaXMuZWxlbWVudC5vbignZGJsY2xpY2snLCB0aGlzLm9uRGJsY2xpY2suYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdwbGF5JywgdGhpcy5vblBsYXkuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdwYXVzZScsIHRoaXMub25QYXVzZS5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ3JhdGVjaGFuZ2UnLCB0aGlzLm9uUmF0ZUNoYW5nZS5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ2VuZGVkJywgdGhpcy5vbkVuZGVkLmJpbmQodGhpcykpO1xuXHRcdHRoaXMuZWxlbWVudC5vbignY2FucGxheXRocm91Z2gnLCB0aGlzLm9uQ2FucGxheVRocm91Z2guYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCd3YWl0aW5nJywgdGhpcy5vbldhaXRpbmcuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdlcnJvcicsIHRoaXMub25FcnJvci5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdG9uTG9hZFN0YXJ0KGUpIHtcblx0XHR0aGlzLnRyaWdnZXIoJ2xvYWRzdGFydCcpO1xuXHR9XG5cblx0b25UaW1lVXBkYXRlKGUpIHtcblx0XHR0aGlzLnRyaWdnZXIoJ3RpbWV1cGRhdGUnKTtcblx0fVxuXG5cdG9uRHVyYXRpb25DaGFuZ2UoZSkge1xuXHRcdHRoaXMudHJpZ2dlcignZHVyYXRpb25jaGFuZ2UnKTtcblx0fVxuXG5cdG9uUHJvZ3Jlc3MoZSkge1xuXHRcdHRoaXMudHJpZ2dlcigncHJvZ3Jlc3MnKTtcblx0fVxuXG5cdG9uU2Vla2luZyhlKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCdzZWVraW5nJyk7XG5cdH1cblxuXHRvblNlZWtlZChlKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCdzZWVrZWQnKTtcblx0fVxuXG5cdG9uVm9sdW1lQ2hhbmdlKGUpIHtcblx0XHR0aGlzLnRyaWdnZXIoJ3ZvbHVtZWNoYW5nZScpO1xuXHR9XG5cblx0b25DbGljaygpIHtcblx0XHR0aGlzLnRyaWdnZXIoJ2NsaWNrJyk7XG5cdH1cblxuXHRvbkRibGNsaWNrKCkge1xuXHRcdHRoaXMudHJpZ2dlcignZGJsY2xpY2snKTtcblx0fVxuXG5cdG9uUGxheSgpIHtcblx0XHR0aGlzLnRyaWdnZXIoJ3BsYXknKTtcblx0fVxuXG5cdG9uUGF1c2UoKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCdwYXVzZScpO1xuXHR9XG5cblx0b25QbGF5aW5nKCkge1xuXHRcdHRoaXMudHJpZ2dlcigncGxheWluZycpO1xuXHR9XG5cblx0b25SYXRlQ2hhbmdlKCkge1xuXHRcdHRoaXMudHJpZ2dlcigncmF0ZWNoYW5nZScpO1xuXHR9XG5cblx0b25FbmRlZCgpIHtcblx0XHR0aGlzLnRyaWdnZXIoJ2VuZGVkJyk7XG5cdH1cblxuXHRvbkNhbnBsYXlUaHJvdWdoKCkge1xuXHRcdHRoaXMudHJpZ2dlcignY2FucGxheXRocm91Z2gnKTtcblx0fVxuXG5cdG9uV2FpdGluZygpIHtcblx0XHR0aGlzLnRyaWdnZXIoJ3dhaXRpbmcnKTtcblx0fVxuXG5cdG9uRXJyb3IoZSkge1xuXHRcdHRoaXMudHJpZ2dlcignZXJyb3InLCB7IGNvZGUgOiBlLnRhcmdldC5lcnJvci5jb2RlIH0pO1xuXHR9XG5cblx0LyogVE9ETyAqL1xuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdHRoaXMuZWxlbWVudCA9IHRoaXMub3B0aW9ucy5jdHg7XG5cdFx0W1xuXG5cdFx0XHQvLyBSZW1vdmUgY29udHJvbHMgYmVjYXVzZSB3ZSBkb250IG5vdCBzdXBwb3J0IG5hdGl2ZSBjb250cm9scyB5ZXRcblx0XHRcdCdjb250cm9scycsXG5cdFx0XHQncG9zdGVyJyxcblxuXHRcdFx0Ly8gSXQgaXMgdW5uZWNlc3NhcnkgYXR0cnMsIHRoaXMgZnVuY3Rpb25hbGl0eSBzb2x2ZSBDU1Ncblx0XHRcdCdoZWlnaHQnLFxuXHRcdFx0J3dpZHRoJ1xuXG5cdFx0XS5mb3JFYWNoKGl0ZW0gPT4ge1xuXHRcdFx0dGhpcy5lbGVtZW50LnJlbW92ZUF0dHIoaXRlbSk7XG5cdFx0fSk7XG5cblx0XHQvLyBTZXQgYXR0cnMgZnJvbSBvcHRpb25zXG5cdFx0W1xuXHRcdFx0J3ByZWxvYWQnLFxuXHRcdFx0J2F1dG9wbGF5Jyxcblx0XHRcdCdsb29wJyxcblx0XHRcdCdtdXRlZCdcblx0XHRdLmZvckVhY2goaXRlbSA9PiB7XG5cdFx0XHRpZih0aGlzLnBsYXllci5vcHRpb25zW2l0ZW1dKSB7XG5cdFx0XHRcdHRoaXMuZWxlbWVudC5hdHRyKGl0ZW0sIHRoaXMucGxheWVyLm9wdGlvbnNbaXRlbV0pO1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQucHJvcChpdGVtLCB0aGlzLnBsYXllci5vcHRpb25zW2l0ZW1dKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXG5cdFx0dGhpcy5lbGVtZW50LmZpbmQoJ3NvdXJjZVtkYXRhLXF1YWxpdHldJykuZWFjaCgoaSwgaXRlbSkgPT4ge1xuXHRcdFx0JChpdGVtKS5yZW1vdmUoKTtcblx0XHR9KTtcblxuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQ7XG5cdH1cblxuXHRnZXQgY3VycmVudFRpbWUgKCkge1xuXHRcdHJldHVybiB0aGlzLm1lZGlhLmN1cnJlbnRUaW1lO1xuXHR9XG5cblx0c2V0IGN1cnJlbnRUaW1lICh2YWx1ZSkge1xuXHRcdGxldCB0aW1lO1xuXHRcdGlmICh2YWx1ZSA+IHRoaXMuZHVyYXRpb24pIHtcblx0XHRcdHRpbWUgPSB0aGlzLmR1cmF0aW9uXG5cdFx0fSBlbHNlIGlmICh2YWx1ZSA8IDApIHtcblx0XHRcdHRpbWUgPSAwXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRpbWUgPSB2YWx1ZTtcblx0XHR9XG5cblx0XHR0aGlzLnBsYXllci50cmlnZ2VyKCd0aW1ldXBkYXRlbG9hZCcsIHsgY3VycmVudFRpbWUgOiB0aW1lIH0pO1xuXG5cdFx0dGhpcy5tZWRpYS5jdXJyZW50VGltZSA9IHRpbWU7XG5cdH1cblxuXHRnZXQgZHVyYXRpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLm1lZGlhLmR1cmF0aW9uO1xuXHR9XG5cblx0Z2V0IGhlaWdodCAoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWVkaWEuY2xpZW50SGVpZ2h0O1xuXHR9XG5cblx0Z2V0IHdpZHRoICgpIHtcblx0XHRyZXR1cm4gdGhpcy5tZWRpYS5jbGllbnRXaWR0aDtcblx0fVxuXG5cdGdldCByYXRlICgpIHtcblx0XHRyZXR1cm4gdGhpcy5tZWRpYS5wbGF5YmFja1JhdGU7XG5cdH1cblxuXHRzZXQgbXV0ZWQodmFsdWUpIHtcblx0XHR0aGlzLm1lZGlhLm11dGVkID0gdmFsdWU7XG5cdH1cblxuXHRnZXQgbXV0ZWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWVkaWEubXV0ZWRcblx0fVxuXG5cdGdldCByYXRlTWF4KCkge1xuXHRcdGxldCBtYXggPSB0aGlzLnBsYXllci5vcHRpb25zLnJhdGUubWF4O1xuXHRcdGlmKElTX0lPUyB8fCBJU19BTkRST0lEKSB7XG5cdFx0XHRtYXggPSBIdG1sNS5NT0JJTEVfTUFYX1JBVEU7XG5cdFx0fVxuXHRcdGlmKElTX1NBRkFSSSkge1xuXHRcdFx0bWF4ID0gSHRtbDUuU0FGQVJJX01BWF9SQVRFO1xuXHRcdH1cblxuXHRcdHJldHVybiBtYXg7XG5cdH1cblxuXHRnZXQgcmF0ZU1pbigpIHtcblx0XHRsZXQgbWluID0gdGhpcy5wbGF5ZXIub3B0aW9ucy5yYXRlLm1pbjtcblxuXHRcdGlmIChJU19JT1MgfHwgSVNfQU5EUk9JRCkge1xuXHRcdFx0bWluID0gSHRtbDUuTU9CSUxFX01JTl9SQVRFO1xuXHRcdH1cblxuXHRcdGlmIChJU19TQUZBUkkpIHtcblx0XHRcdG1pbiA9IEh0bWw1LlNBRkFSSV9NSU5fUkFURTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbWluO1xuXHR9XG5cblx0c2V0IHJhdGUgKHZhbHVlKSB7XG5cdFx0c3VwZXIucmF0ZSA9IHZhbHVlO1xuXHRcdHRoaXMubWVkaWEucGxheWJhY2tSYXRlID0gdmFsdWU7XG5cdH1cblxuXHRnZXRBdmFpbGFibGVRdWFsaXR5TGV2ZWxzKCkge1xuXHRcdHJldHVybiB0aGlzLnBsYXllci5vcHRpb25zLnNvdXJjZXMubWFwKGl0ZW0gPT4gKHtcblx0XHRcdG5hbWUgOiBpdGVtLnRpdGxlLFxuXHRcdFx0Li4uaXRlbVxuXHRcdH0pKTtcblx0fVxuXG5cdHNldCBwbGF5YmFja1F1YWxpdHkobmFtZSkge1xuXHRcdHN1cGVyLnBsYXliYWNrUXVhbGl0eSA9IG5hbWU7XG5cdFx0Y29uc3QgdGltZSA9IHRoaXMuY3VycmVudFRpbWU7XG5cdFx0Y29uc3QgcmF0ZSA9IHRoaXMucmF0ZTtcblx0XHRjb25zdCBzdG9wID0gdGhpcy5wYXVzZWQ7XG5cblx0XHR0aGlzLl9wbGF5YmFja1F1YWxpdHkgPSB0aGlzLmdldEF2YWlsYWJsZVF1YWxpdHlMZXZlbHMoKS5maW5kKGl0ZW0gPT4gaXRlbS5uYW1lID09PSBuYW1lKTtcblxuXHRcdHRoaXMuc3JjID0gdGhpcy5fcGxheWJhY2tRdWFsaXR5O1xuXHRcdHRoaXMucmF0ZSA9IHJhdGU7XG5cdFx0dGhpcy5jdXJyZW50VGltZSA9IHRpbWU7XG5cblx0XHRpZiAoc3RvcCkge1xuXHRcdFx0dGhpcy5wYXVzZSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnBsYXkoKTtcblx0XHR9XG5cblx0XHR0aGlzLnRyaWdnZXIoJ3F1YWxpdHljaGFuZ2UnLCB0aGlzLl9wbGF5YmFja1F1YWxpdHkpO1xuXG5cdH1cblxuXHRnZXQgcGxheWJhY2tRdWFsaXR5KCkge1xuXHRcdHJldHVybiB0aGlzLl9wbGF5YmFja1F1YWxpdHk7XG5cdH1cblxuXHRzZXQgc3JjIChzcmMpIHtcblx0XHRpZihzcmMgPT0gbnVsbCkgcmV0dXJuO1xuXHRcdGlmKHRoaXMuc3JjICYmIHRoaXMuc3JjLnVybCA9PT0gc3JjLnVybCkgcmV0dXJuO1xuXG5cdFx0dGhpcy5tZWRpYS5zcmMgPSBzcmMudXJsO1xuXG5cdFx0dGhpcy5fc291cmNlID0gc3JjO1xuXHR9XG5cblx0Z2V0IHNyYyAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3NvdXJjZVxuXHR9XG5cblx0Z2V0IHRyYWNrICgpIHtcblx0XHRyZXR1cm4gdGhpcy5fdHJhY2s7XG5cdH1cblxuXHRzZXQgdHJhY2sgKHZhbHVlKSB7XG5cdFx0Wy4uLnRoaXMubWVkaWEudGV4dFRyYWNrc10uZm9yRWFjaChpdGVtID0+IHtcblx0XHRcdGlmKHZhbHVlICE9IG51bGwgJiYgaXRlbS5sYW5ndWFnZSA9PT0gdmFsdWUubGFuZ3VhZ2UpIHtcblx0XHRcdFx0aXRlbS5tb2RlID0gJ3Nob3dpbmcnXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpdGVtLm1vZGUgPSAnaGlkZGVuJztcblx0XHRcdH1cblx0XHR9KTtcblx0XHR0aGlzLl90cmFjayA9IHZhbHVlO1xuXHRcdHRoaXMudHJpZ2dlcigndHJhY2tzY2hhbmdlJyk7XG5cdH1cblxuXHRnZXQgcGF1c2VkKCkge1xuXHRcdHJldHVybiB0aGlzLm1lZGlhLnBhdXNlZDtcblx0fVxuXG5cdGdldCB2b2x1bWUgKCkge1xuXHRcdHJldHVybiB0aGlzLm1lZGlhLnZvbHVtZTtcblx0fVxuXG5cdHNldCB2b2x1bWUgKHZhbHVlKSB7XG5cdFx0c3VwZXIudm9sdW1lID0gdmFsdWU7XG5cdFx0Y29uc3QgcGxheWVyID0gdGhpcy5wbGF5ZXI7XG5cdFx0aWYgKHZhbHVlID4gMSkge1xuXHRcdFx0dGhpcy5tZWRpYS52b2x1bWUgPSAxO1xuXHRcdH0gZWxzZSBpZiAodmFsdWUgPCBwbGF5ZXIub3B0aW9ucy52b2x1bWUubXV0ZWxpbWl0KSB7XG5cdFx0XHR0aGlzLm1lZGlhLnZvbHVtZSA9IDA7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMubWVkaWEudm9sdW1lID0gdmFsdWU7XG5cdFx0fVxuXHRcdHRoaXMubWVkaWEubXV0ZSA9ICh2YWx1ZSA8IHBsYXllci5vcHRpb25zLnZvbHVtZS5tdXRlbGltaXQpO1xuXHR9XG5cblxuXHRnZXQgYnVmZmVyZWQgKCkge1xuXHRcdHJldHVybiB0aGlzLm1lZGlhLmJ1ZmZlcmVkO1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm4ge1RpbWVSYW5nZXN9XG5cdCAqL1xuXHRnZXQgc2Vla2FibGUgKCkge1xuXHRcdHJldHVybiB0aGlzLm1lZGlhLnNlZWthYmxlO1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm4ge1RpbWVSYW5nZXN9XG5cdCAqL1xuXHRnZXQgcGxheWVkKCkge1xuXHRcdHJldHVybiB0aGlzLm1lZGlhLnBsYXllZDtcblx0fVxuXG5cdGdldCBlbmRlZCgpIHtcblx0XHRyZXR1cm4gdGhpcy5tZWRpYS5lbmRlZDtcblx0fVxuXG5cdGdldCBwbGF5ZWRQZXJjZW50YWdlKCkge1xuXHRcdGxldCByZXN1bHQgPSAwO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wbGF5ZWQubGVuZ3RoOyBpKyspIHtcblx0XHRcdHJlc3VsdCArPSAodGhpcy5wbGF5ZWQuZW5kKGkpIC0gdGhpcy5wbGF5ZWQuc3RhcnQoaSkpXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlc3VsdCAvIHRoaXMuZHVyYXRpb24gKiAxMDBcblx0fVxuXG5cdGdldCBjdXJyZW50U3JjKCkge1xuXHRcdHJldHVybiB0aGlzLm1lZGlhLmN1cnJlbnRTcmM7XG5cdH1cblxuXHRpbml0ICgpIHtcblx0XHRzdXBlci5pbml0KCk7XG5cdFx0dGhpcy5sb2FkKCk7XG5cdFx0bGV0IGRmZCA9ICQuRGVmZXJyZWQoKTtcblx0XHR0aGlzLl9pbml0U3VidGl0bGVzKCk7XG5cdFx0dGhpcy5faW5pdFZpZGVvKClcblx0XHRcdC5kb25lKCgpID0+IHtcblx0XHRcdFx0dGhpcy5faW5pdFJhdGUoKTtcblx0XHRcdFx0dGhpcy5faW5pdFZvbHVtZSgpO1xuXHRcdFx0XHRkZmQucmVzb2x2ZSgpO1xuXHRcdFx0fSk7XG5cdFx0cmV0dXJuIGRmZC5wcm9taXNlKCk7XG5cdH1cblxuXHRzdXBwb3J0c0Z1bGxTY3JlZW4oKSB7XG5cdFx0aWYgKHR5cGVvZiB0aGlzLm1lZGlhLndlYmtpdEVudGVyRnVsbFNjcmVlbiA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0Y29uc3QgdXNlckFnZW50ID0gd2luZG93Lm5hdmlnYXRvciAmJiB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCB8fCAnJztcblxuXHRcdFx0Ly8gU2VlbXMgdG8gYmUgYnJva2VuIGluIENocm9taXVtL0Nocm9tZSAmJiBTYWZhcmkgaW4gTGVvcGFyZFxuXHRcdFx0aWYgKCgvQW5kcm9pZC8pLnRlc3QodXNlckFnZW50KSB8fCAhKC9DaHJvbWV8TWFjIE9TIFggMTAuNS8pLnRlc3QodXNlckFnZW50KSkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0ZW50ZXJGdWxsc2NyZWVuKCkge1xuXHRcdGNvbnN0IHZpZGVvID0gdGhpcy5tZWRpYTtcblx0XHRpZiAodmlkZW8ucGF1c2VkICYmIHZpZGVvLm5ldHdvcmtTdGF0ZSA8PSB2aWRlby5IQVZFX01FVEFEQVRBKSB7XG5cdFx0XHQvLyBhdHRlbXB0IHRvIHByaW1lIHRoZSB2aWRlbyBlbGVtZW50IGZvciBwcm9ncmFtbWF0aWMgYWNjZXNzXG5cdFx0XHQvLyB0aGlzIGlzbid0IG5lY2Vzc2FyeSBvbiB0aGUgZGVza3RvcCBidXQgc2hvdWxkbid0IGh1cnRcblx0XHRcdHRoaXMucGxheSgpO1xuXG5cdFx0XHQvLyBwbGF5aW5nIGFuZCBwYXVzaW5nIHN5bmNocm9ub3VzbHkgZHVyaW5nIHRoZSB0cmFuc2l0aW9uIHRvIGZ1bGxzY3JlZW5cblx0XHRcdC8vIGNhbiBnZXQgaU9TIH42LjEgZGV2aWNlcyBpbnRvIGEgcGxheS9wYXVzZSBsb29wXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0dGhpcy5wYXVzZSgpO1xuXHRcdFx0XHR2aWRlby53ZWJraXRFbnRlckZ1bGxTY3JlZW4oKTtcblx0XHRcdH0sIDApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2aWRlby53ZWJraXRFbnRlckZ1bGxTY3JlZW4oKTtcblx0XHR9XG5cdH1cblxuXHRleGl0RnVsbHNjcmVlbigpIHtcblx0XHR0aGlzLm1lZGlhLndlYmtpdEV4aXRGdWxsU2NyZWVuKCk7XG5cdH1cblxuXHR0b2dnbGVQbGF5ICgpIHtcblx0XHRpZiAoIXRoaXMubWVkaWEucGxheWVkIHx8IHRoaXMubWVkaWEucGF1c2VkKSB7XG5cdFx0XHR0aGlzLnBsYXkoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5wYXVzZSgpO1xuXHRcdH1cblx0fVxuXG5cdHBsYXkgKCkge1xuXHRcdGxldCBkZmQgPSAkLkRlZmVycmVkKCk7XG5cdFx0Y29uc3QgcGxheVByb21pc2UgPSB0aGlzLm1lZGlhLnBsYXkoKTtcblxuXHRcdGlmKHBsYXlQcm9taXNlICE9IG51bGwpIHtcblx0XHRcdHBsYXlQcm9taXNlLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGRmZC5yZXNvbHZlKCk7XG5cdFx0XHR9KVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRkZmQucmVzb2x2ZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gZGZkLnByb21pc2UoKTtcblx0fVxuXG5cdHBhdXNlICgpIHtcblx0XHRsZXQgZGZkID0gJC5EZWZlcnJlZCgpO1xuXHRcdGNvbnN0IHBhdXNlUHJvbWlzZSA9IHRoaXMubWVkaWEucGF1c2UoKTtcblxuXHRcdGlmKHBhdXNlUHJvbWlzZSAhPSBudWxsKSB7XG5cdFx0XHRwYXVzZVByb21pc2UudGhlbihmdW5jdGlvbigpIHtcblx0XHRcdFx0ZGZkLnJlc29sdmUoKTtcblx0XHRcdH0pXG5cdFx0fSBlbHNlIHtcblx0XHRcdGRmZC5yZXNvbHZlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBkZmQucHJvbWlzZSgpO1xuXHR9XG5cblx0bG9hZCgpIHtcblx0XHRyZXR1cm4gdGhpcy5tZWRpYS5sb2FkKClcblx0fVxuXG5cdF9pbml0U3VidGl0bGVzICgpIHtcblx0XHRsZXQgX3NlbGYgPSB0aGlzO1xuXHRcdHRoaXMuZWxlbWVudC5jaGlsZHJlbigndHJhY2tba2luZD1cInN1YnRpdGxlc1wiXScpLmVhY2goZnVuY3Rpb24gKCkge1xuXHRcdFx0Y29uc3QgbGFuZ3VhZ2UgPSAkKHRoaXMpLmF0dHIoJ3NyY2xhbmcnKTtcblx0XHRcdGNvbnN0IHRpdGxlID0gJCh0aGlzKS5hdHRyKCdsYWJlbCcpO1xuXHRcdFx0Y29uc3Qgc3JjID0gJCh0aGlzKS5hdHRyKCdzcmMnKTtcblx0XHRcdGlmICh0aXRsZS5sZW5ndGggPiAwICYmIHNyYy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdF9zZWxmLnN1YnRpdGxlcy5wdXNoKHtcblx0XHRcdFx0XHR0aXRsZSA6IHRpdGxlLFxuXHRcdFx0XHRcdG5hbWUgOiBsYW5ndWFnZSxcblx0XHRcdFx0XHRsYW5ndWFnZSA6IGxhbmd1YWdlXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0X2luaXRWaWRlbyAoKSB7XG5cdFx0bGV0IGRmZCA9ICQuRGVmZXJyZWQoKTtcblx0XHRpZiAodGhpcy5tZWRpYS5yZWFkeVN0YXRlID4gSFRNTE1lZGlhRWxlbWVudC5IQVZFX05PVEhJTkcpIHtcblx0XHRcdGRmZC5yZXNvbHZlKCk7XG5cdFx0XHR0aGlzLl90ZXh0VHJhY2tzSGFjaygpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkKHRoaXMubWVkaWEpLm9uZSgnbG9hZGVkbWV0YWRhdGEnLCAoZSkgPT4ge1xuXHRcdFx0XHRkZmQucmVzb2x2ZSgpXG5cdFx0XHRcdHRoaXMuX3RleHRUcmFja3NIYWNrKCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0cmV0dXJuIGRmZC5wcm9taXNlKCk7XG5cdH1cblxuXHRfdGV4dFRyYWNrc0hhY2sgKCkge1xuXG5cdFx0Ly8gVGhpcyBpcyBnZW5lcmFsbHkgZm9yIEZpcmVmb3ggb25seVxuXHRcdC8vIGJlY2F1c2UgaXQgc29tZWhvdyByZXNldHMgdHJhY2sgbGlzdFxuXHRcdC8vIGZvciB2aWRlbyBlbGVtZW50IGFmdGVyIERPTSBtYW5pcHVsYXRpb24uXG5cblx0XHRpZiAodGhpcy5tZWRpYS50ZXh0VHJhY2tzLmxlbmd0aCA9PT0gMCAmJiB0aGlzLnN1YnRpdGxlcy5sZW5ndGggPiAwKSB7XG5cdFx0XHR0aGlzLmVsZW1lbnQuY2hpbGRyZW4oJ3RyYWNrW2tpbmQ9XCJzdWJ0aXRsZXNcIl0nKS5yZW1vdmUoKTtcblx0XHRcdGZvciAodmFyIGkgaW4gdGhpcy5zdWJ0aXRsZXMpIHtcblx0XHRcdFx0aWYgKHRoaXMuc3VidGl0bGVzLmhhc093blByb3BlcnR5KGkpKSB7XG5cdFx0XHRcdFx0dGhpcy5lbGVtZW50XG5cdFx0XHRcdFx0XHQuYXBwZW5kKCQoJzx0cmFjay8+Jylcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ2xhYmVsJywgdGhpcy5zdWJ0aXRsZXNbIGkgXS50aXRsZSlcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ3NyYycsIHRoaXMuc3VidGl0bGVzWyBpIF0uc3JjKVxuXHRcdFx0XHRcdFx0XHQuYXR0cignc3JjbGFuZycsIHRoaXMuc3VidGl0bGVzWyBpIF0ubGFuZ3VhZ2UpXG5cdFx0XHRcdFx0XHRcdC5hdHRyKCdpZCcsIHRoaXMuc3VidGl0bGVzWyBpIF0ubGFuZ3VhZ2UpXG5cdFx0XHRcdFx0XHRcdC5hdHRyKCdraW5kJywgJ3N1YnRpdGxlcycpKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG59XG4vKipcbiAqIE1pbiByYXRlIGZvciBhbmRyb2lkIGFuZCBpb3NcbiAqL1xuSHRtbDUuTU9CSUxFX01JTl9SQVRFID0gMC41O1xuXG4vKipcbiAqIE1heCByYXRlIGZvciBhbmRyb2lkIGFuZCBpb3NcbiAqL1xuSHRtbDUuTU9CSUxFX01BWF9SQVRFID0gMjtcblxuSHRtbDUuU0FGQVJJX01JTl9SQVRFID0gMC41O1xuXG5IdG1sNS5TQUZBUklfTUFYX1JBVEUgPSAyO1xuXG5IdG1sNS5URVNUX1ZJREVPID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8nKTtcblxuLyoqXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICogICAgICAgICAtIFRydWUgaWYgdm9sdW1lIGNhbiBiZSBjb250cm9sbGVkXG4gKiAgICAgICAgIC0gRmFsc2Ugb3RoZXJ3aXNlXG4gKi9cbkh0bWw1LmNhbkNvbnRyb2xWb2x1bWUgPSBmdW5jdGlvbigpIHtcblx0Ly8gSUUgd2lsbCBlcnJvciBpZiBXaW5kb3dzIE1lZGlhIFBsYXllciBub3QgaW5zdGFsbGVkICMzMzE1XG5cdHRyeSB7XG5cdFx0Y29uc3Qgdm9sdW1lID0gSHRtbDUuVEVTVF9WSURFTy52b2x1bWU7XG5cblx0XHRIdG1sNS5URVNUX1ZJREVPLnZvbHVtZSA9ICh2b2x1bWUgLyAyKSArIDAuMTtcblx0XHRyZXR1cm4gdm9sdW1lICE9PSBIdG1sNS5URVNUX1ZJREVPLnZvbHVtZTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufTtcblxuSHRtbDUucHJvdG90eXBlLmZlYXR1cmVDb250cm9sVm9sdW1lID0gSHRtbDUuY2FuQ29udHJvbFZvbHVtZSgpO1xuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ0h0bWw1JywgSHRtbDUpO1xuZXhwb3J0IGRlZmF1bHQgSHRtbDU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvZW50aXR5L0h0bWw1LmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL0NvbXBvbmVudCc7XG5pbXBvcnQgQ29va2llIGZyb20gJy4uL3V0aWxzL2Nvb2tpZSc7XG5pbXBvcnQgTWVkaWFFcnJvciBmcm9tICcuLi9NZWRpYUVycm9yJztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbmNsYXNzIEVudGl0eSBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucykge1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cdFx0dGhpcy5fdHJpZ2dlclN0YWNrID0gW107XG5cdFx0dGhpcy5fc3RvcExpc3RlbiA9IGZhbHNlO1xuXG5cdFx0aWYgKHRoaXMucGxheWVyLm9wdGlvbnMuc3JjID09IG51bGwpIHtcblx0XHRcdHRoaXMucGxheWVyLmVycm9yID0gbmV3IE1lZGlhRXJyb3IoJ9CS0LjQtNC10L7RhNCw0LnQuyDQvdC1INC90LDQudC00LXQvS4nKTtcblx0XHR9XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdHRyaWdnZXIoLi4uYXJncykge1xuXHRcdGlmKCF0aGlzLl9zdG9wTGlzdGVuKSB7XG5cdFx0XHR0aGlzLl90cmlnZ2VyU3RhY2sucHVzaChhcmdzKTtcblx0XHR9XG5cdFx0c3VwZXIudHJpZ2dlciguLi5hcmdzKTtcblx0fVxuXG5cdGluaXQoKSB7XG5cdFx0dGhpcy5fc3RvcExpc3RlbiA9IHRydWU7XG5cdFx0dGhpcy5fdHJpZ2dlclN0YWNrLmZvckVhY2goYXJncyA9PiB7XG5cdFx0XHR0aGlzLnRyaWdnZXIoLi4uYXJncyk7XG5cdFx0fSk7XG5cdH1cblxuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQgPSAkKCc8ZGl2IC8+Jyk7XG5cdH1cblxuXHRzZXQgcG9zdGVyKHVybCkge1xuXHRcdHRoaXMuX3Bvc3RlciA9IHVybDtcblx0XHR0aGlzLnRyaWdnZXIoJ3Bvc3RlcmNoYW5nZScsIHsgdXJsIH0pO1xuXHR9XG5cblxuXHRnZXQgcG9zdGVyKCkge1xuXHRcdHJldHVybiB0aGlzLl9wb3N0ZXI7XG5cdH1cblxuXHRnZXQgY3VycmVudFRpbWUoKSB7XG5cdFx0cmV0dXJuXG5cdH1cblxuXHRzZXQgY3VycmVudFRpbWUodmFsdWUpIHtcblxuXHR9XG5cblx0Z2V0IGR1cmF0aW9uKCkge1xuXHRcdHJldHVyblxuXHR9XG5cblx0c2V0IG11dGVkKHZhbHVlKSB7XG5cblx0fVxuXG5cdGdldCBtdXRlZCgpIHtcblxuXHR9XG5cblx0Z2V0IGhlaWdodCgpIHtcblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50LmlubmVySGVpZ2h0KClcblx0fVxuXG5cdGdldCB3aWR0aCgpIHtcblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50LndpZHRoKClcblx0fVxuXG5cdHNldCByYXRlTWF4KHZhbHVlKSB7XG5cdFx0dGhpcy5fcmF0ZU1heCA9IHZhbHVlO1xuXHR9XG5cblx0c2V0IHJhdGVNaW4odmFsdWUpIHtcblx0XHR0aGlzLl9yYXRlTWluID0gdmFsdWU7XG5cdH1cblxuXHRnZXQgcmF0ZU1heCgpIHtcblx0XHRyZXR1cm4gdGhpcy5fcmF0ZU1heCB8fCB0aGlzLnBsYXllci5vcHRpb25zLnJhdGUubWF4O1xuXG5cdH1cblxuXHRnZXQgcmF0ZU1pbigpIHtcblx0XHRyZXR1cm4gdGhpcy5fcmF0ZU1pbiB8fCB0aGlzLnBsYXllci5vcHRpb25zLnJhdGUubWluO1xuXHR9XG5cblx0Z2V0IHJhdGUoKSB7XG5cdH1cblxuXHRzZXQgcmF0ZSh2YWx1ZSkge1xuXHRcdGlmKHZhbHVlID4gdGhpcy5yYXRlTWF4IHx8IHZhbHVlIDwgdGhpcy5yYXRlTWluKSByZXR1cm47XG5cdFx0Q29va2llLnNldCgncmF0ZScsIHZhbHVlKTtcblx0fVxuXG5cdGluY3JlYXNlUmF0ZSgpIHtcblx0XHR0aGlzLnJhdGUgKz0gdGhpcy5wbGF5ZXIub3B0aW9ucy5yYXRlLnN0ZXA7XG5cdH1cblxuXHRkZWNyZWFzZVJhdGUoKSB7XG5cdFx0dGhpcy5yYXRlIC09IHRoaXMucGxheWVyLm9wdGlvbnMucmF0ZS5zdGVwO1xuXHR9XG5cblx0c2V0IHBsYXliYWNrUXVhbGl0eShuYW1lKSB7XG5cdFx0Y29uc3QgbGV2ZWxzID0gdGhpcy5nZXRBdmFpbGFibGVRdWFsaXR5TGV2ZWxzKCk7XG5cdFx0aWYoIWxldmVscy5zb21lKG9iaiA9PiBuYW1lIGluIG9iaikpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdH1cblxuXHRnZXQgcGxheWJhY2tRdWFsaXR5KCkge1xuXG5cdH1cblxuXHRnZXQgcGF1c2VkKCkge1xuXG5cdH1cblxuXHRnZXQgcGxheWVkKCkge1xuXG5cdH1cblxuXHRnZXQgZGVmYXVsdFJhdGUoKSB7XG5cdFx0cmV0dXJuIENvb2tpZS5nZXQoJ3JhdGUnKSB8fCB0aGlzLnBsYXllci5vcHRpb25zLnJhdGUuZGVmYXVsdFxuXHR9XG5cblx0Z2V0IGRlZmF1bHRWb2x1bWUgKCkge1xuXHRcdHJldHVybiBDb29raWUuZ2V0KCd2b2x1bWUnKSB8fCB0aGlzLnBsYXllci5vcHRpb25zLnZvbHVtZS5kZWZhdWx0O1xuXHR9XG5cblx0c2V0IHZvbHVtZSh2YWx1ZSkge1xuXHRcdGNvbnN0IHBsYXllciA9IHRoaXMucGxheWVyO1xuXHRcdGlmKHZhbHVlIDwgMSAmJiB2YWx1ZSA+IHBsYXllci5vcHRpb25zLnZvbHVtZS5tdXRlbGltaXQpIHtcblx0XHRcdENvb2tpZS5zZXQoJ3ZvbHVtZScsIHZhbHVlKTtcblx0XHR9XG5cdH1cblxuXHRzZXQgc3JjICh2YWx1ZSkge1xuXG5cdH1cblxuXHRnZXQgc3JjKCkge1xuXG5cdH1cblxuXHRzdXBwb3J0c0Z1bGxTY3JlZW4oKSB7XG5cblx0fVxuXG5cdHBsYXkoKSB7XG5cblx0fVxuXG5cdHBhdXNlICgpIHtcblxuXHR9XG5cblx0bG9hZCgpIHtcblx0fVxuXG5cdHRvZ2dsZVBsYXkgKCkge1xuXHRcdGlmICh0aGlzLnBhdXNlZCkge1xuXHRcdFx0dGhpcy5wbGF5KCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucGF1c2UoKTtcblx0XHR9XG5cdH1cblxuXHRfaW5pdFJhdGUgKCkge1xuXHRcdHRoaXMucmF0ZSA9IHRoaXMuZGVmYXVsdFJhdGU7XG5cdH1cblxuXHRfaW5pdFZvbHVtZSAoKSB7XG5cdFx0dGhpcy52b2x1bWUgPSB0aGlzLmRlZmF1bHRWb2x1bWU7XG5cdH1cblxufVxuRW50aXR5LnByb3RvdHlwZS5mZWF0dXJlQ29udHJvbFZvbHVtZSA9IHRydWU7XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnRW50aXR5JywgRW50aXR5KTtcblxuZXhwb3J0IGRlZmF1bHQgRW50aXR5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2VudGl0eS9FbnRpdHkuanMiLCIndXNlIHN0cmljdCc7XG5cbnZhciBkZWZpbmUgPSByZXF1aXJlKCdkZWZpbmUtcHJvcGVydGllcycpO1xudmFyIEVTID0gcmVxdWlyZSgnZXMtYWJzdHJhY3QvZXM2Jyk7XG5cbnZhciBpbXBsZW1lbnRhdGlvbiA9IHJlcXVpcmUoJy4vaW1wbGVtZW50YXRpb24nKTtcbnZhciBnZXRQb2x5ZmlsbCA9IHJlcXVpcmUoJy4vcG9seWZpbGwnKTtcbnZhciBzaGltID0gcmVxdWlyZSgnLi9zaGltJyk7XG5cbnZhciBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcblxudmFyIHBvbHlmaWxsID0gZ2V0UG9seWZpbGwoKTtcblxudmFyIGJvdW5kRmluZFNoaW0gPSBmdW5jdGlvbiBmaW5kKGFycmF5LCBwcmVkaWNhdGUpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuXHRFUy5SZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFycmF5KTtcblx0dmFyIGFyZ3MgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG5cdHJldHVybiBwb2x5ZmlsbC5hcHBseShhcnJheSwgYXJncyk7XG59O1xuXG5kZWZpbmUoYm91bmRGaW5kU2hpbSwge1xuXHRnZXRQb2x5ZmlsbDogZ2V0UG9seWZpbGwsXG5cdGltcGxlbWVudGF0aW9uOiBpbXBsZW1lbnRhdGlvbixcblx0c2hpbTogc2hpbVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gYm91bmRGaW5kU2hpbTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9hcnJheS5wcm90b3R5cGUuZmluZC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIga2V5cyA9IHJlcXVpcmUoJ29iamVjdC1rZXlzJyk7XG52YXIgaGFzU3ltYm9scyA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIFN5bWJvbCgnZm9vJykgPT09ICdzeW1ib2wnO1xuXG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIGNvbmNhdCA9IEFycmF5LnByb3RvdHlwZS5jb25jYXQ7XG52YXIgb3JpZ0RlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG52YXIgaXNGdW5jdGlvbiA9IGZ1bmN0aW9uIChmbikge1xuXHRyZXR1cm4gdHlwZW9mIGZuID09PSAnZnVuY3Rpb24nICYmIHRvU3RyLmNhbGwoZm4pID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xufTtcblxudmFyIGFyZVByb3BlcnR5RGVzY3JpcHRvcnNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoKSB7XG5cdHZhciBvYmogPSB7fTtcblx0dHJ5IHtcblx0XHRvcmlnRGVmaW5lUHJvcGVydHkob2JqLCAneCcsIHsgZW51bWVyYWJsZTogZmFsc2UsIHZhbHVlOiBvYmogfSk7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzLCBuby1yZXN0cmljdGVkLXN5bnRheFxuXHRcdGZvciAodmFyIF8gaW4gb2JqKSB7IC8vIGpzY3M6aWdub3JlIGRpc2FsbG93VW51c2VkVmFyaWFibGVzXG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHJldHVybiBvYmoueCA9PT0gb2JqO1xuXHR9IGNhdGNoIChlKSB7IC8qIHRoaXMgaXMgSUUgOC4gKi9cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn07XG52YXIgc3VwcG9ydHNEZXNjcmlwdG9ycyA9IG9yaWdEZWZpbmVQcm9wZXJ0eSAmJiBhcmVQcm9wZXJ0eURlc2NyaXB0b3JzU3VwcG9ydGVkKCk7XG5cbnZhciBkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIChvYmplY3QsIG5hbWUsIHZhbHVlLCBwcmVkaWNhdGUpIHtcblx0aWYgKG5hbWUgaW4gb2JqZWN0ICYmICghaXNGdW5jdGlvbihwcmVkaWNhdGUpIHx8ICFwcmVkaWNhdGUoKSkpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0aWYgKHN1cHBvcnRzRGVzY3JpcHRvcnMpIHtcblx0XHRvcmlnRGVmaW5lUHJvcGVydHkob2JqZWN0LCBuYW1lLCB7XG5cdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG5cdFx0XHRlbnVtZXJhYmxlOiBmYWxzZSxcblx0XHRcdHZhbHVlOiB2YWx1ZSxcblx0XHRcdHdyaXRhYmxlOiB0cnVlXG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0b2JqZWN0W25hbWVdID0gdmFsdWU7XG5cdH1cbn07XG5cbnZhciBkZWZpbmVQcm9wZXJ0aWVzID0gZnVuY3Rpb24gKG9iamVjdCwgbWFwKSB7XG5cdHZhciBwcmVkaWNhdGVzID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgPyBhcmd1bWVudHNbMl0gOiB7fTtcblx0dmFyIHByb3BzID0ga2V5cyhtYXApO1xuXHRpZiAoaGFzU3ltYm9scykge1xuXHRcdHByb3BzID0gY29uY2F0LmNhbGwocHJvcHMsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMobWFwKSk7XG5cdH1cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdGRlZmluZVByb3BlcnR5KG9iamVjdCwgcHJvcHNbaV0sIG1hcFtwcm9wc1tpXV0sIHByZWRpY2F0ZXNbcHJvcHNbaV1dKTtcblx0fVxufTtcblxuZGVmaW5lUHJvcGVydGllcy5zdXBwb3J0c0Rlc2NyaXB0b3JzID0gISFzdXBwb3J0c0Rlc2NyaXB0b3JzO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlZmluZVByb3BlcnRpZXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZGVmaW5lLXByb3BlcnRpZXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xudmFyIGlzQXJncyA9IHJlcXVpcmUoJy4vaXNBcmd1bWVudHMnKTtcblxudmFyIG9yaWdLZXlzID0gT2JqZWN0LmtleXM7XG52YXIga2V5c1NoaW0gPSBvcmlnS2V5cyA/IGZ1bmN0aW9uIGtleXMobykgeyByZXR1cm4gb3JpZ0tleXMobyk7IH0gOiByZXF1aXJlKCcuL2ltcGxlbWVudGF0aW9uJyk7XG5cbnZhciBvcmlnaW5hbEtleXMgPSBPYmplY3Qua2V5cztcblxua2V5c1NoaW0uc2hpbSA9IGZ1bmN0aW9uIHNoaW1PYmplY3RLZXlzKCkge1xuXHRpZiAoT2JqZWN0LmtleXMpIHtcblx0XHR2YXIga2V5c1dvcmtzV2l0aEFyZ3VtZW50cyA9IChmdW5jdGlvbiAoKSB7XG5cdFx0XHQvLyBTYWZhcmkgNS4wIGJ1Z1xuXHRcdFx0dmFyIGFyZ3MgPSBPYmplY3Qua2V5cyhhcmd1bWVudHMpO1xuXHRcdFx0cmV0dXJuIGFyZ3MgJiYgYXJncy5sZW5ndGggPT09IGFyZ3VtZW50cy5sZW5ndGg7XG5cdFx0fSgxLCAyKSk7XG5cdFx0aWYgKCFrZXlzV29ya3NXaXRoQXJndW1lbnRzKSB7XG5cdFx0XHRPYmplY3Qua2V5cyA9IGZ1bmN0aW9uIGtleXMob2JqZWN0KSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZnVuYy1uYW1lLW1hdGNoaW5nXG5cdFx0XHRcdGlmIChpc0FyZ3Mob2JqZWN0KSkge1xuXHRcdFx0XHRcdHJldHVybiBvcmlnaW5hbEtleXMoc2xpY2UuY2FsbChvYmplY3QpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gb3JpZ2luYWxLZXlzKG9iamVjdCk7XG5cdFx0XHR9O1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRPYmplY3Qua2V5cyA9IGtleXNTaGltO1xuXHR9XG5cdHJldHVybiBPYmplY3Qua2V5cyB8fCBrZXlzU2hpbTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ga2V5c1NoaW07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vb2JqZWN0LWtleXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0FyZ3VtZW50cyh2YWx1ZSkge1xuXHR2YXIgc3RyID0gdG9TdHIuY2FsbCh2YWx1ZSk7XG5cdHZhciBpc0FyZ3MgPSBzdHIgPT09ICdbb2JqZWN0IEFyZ3VtZW50c10nO1xuXHRpZiAoIWlzQXJncykge1xuXHRcdGlzQXJncyA9IHN0ciAhPT0gJ1tvYmplY3QgQXJyYXldJyAmJlxuXHRcdFx0dmFsdWUgIT09IG51bGwgJiZcblx0XHRcdHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiZcblx0XHRcdHR5cGVvZiB2YWx1ZS5sZW5ndGggPT09ICdudW1iZXInICYmXG5cdFx0XHR2YWx1ZS5sZW5ndGggPj0gMCAmJlxuXHRcdFx0dG9TdHIuY2FsbCh2YWx1ZS5jYWxsZWUpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xuXHR9XG5cdHJldHVybiBpc0FyZ3M7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L29iamVjdC1rZXlzL2lzQXJndW1lbnRzLmpzXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBrZXlzU2hpbTtcbmlmICghT2JqZWN0LmtleXMpIHtcblx0Ly8gbW9kaWZpZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZXMtc2hpbXMvZXM1LXNoaW1cblx0dmFyIGhhcyA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cdHZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cdHZhciBpc0FyZ3MgPSByZXF1aXJlKCcuL2lzQXJndW1lbnRzJyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZ2xvYmFsLXJlcXVpcmVcblx0dmFyIGlzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cdHZhciBoYXNEb250RW51bUJ1ZyA9ICFpc0VudW1lcmFibGUuY2FsbCh7IHRvU3RyaW5nOiBudWxsIH0sICd0b1N0cmluZycpO1xuXHR2YXIgaGFzUHJvdG9FbnVtQnVnID0gaXNFbnVtZXJhYmxlLmNhbGwoZnVuY3Rpb24gKCkge30sICdwcm90b3R5cGUnKTtcblx0dmFyIGRvbnRFbnVtcyA9IFtcblx0XHQndG9TdHJpbmcnLFxuXHRcdCd0b0xvY2FsZVN0cmluZycsXG5cdFx0J3ZhbHVlT2YnLFxuXHRcdCdoYXNPd25Qcm9wZXJ0eScsXG5cdFx0J2lzUHJvdG90eXBlT2YnLFxuXHRcdCdwcm9wZXJ0eUlzRW51bWVyYWJsZScsXG5cdFx0J2NvbnN0cnVjdG9yJ1xuXHRdO1xuXHR2YXIgZXF1YWxzQ29uc3RydWN0b3JQcm90b3R5cGUgPSBmdW5jdGlvbiAobykge1xuXHRcdHZhciBjdG9yID0gby5jb25zdHJ1Y3Rvcjtcblx0XHRyZXR1cm4gY3RvciAmJiBjdG9yLnByb3RvdHlwZSA9PT0gbztcblx0fTtcblx0dmFyIGV4Y2x1ZGVkS2V5cyA9IHtcblx0XHQkYXBwbGljYXRpb25DYWNoZTogdHJ1ZSxcblx0XHQkY29uc29sZTogdHJ1ZSxcblx0XHQkZXh0ZXJuYWw6IHRydWUsXG5cdFx0JGZyYW1lOiB0cnVlLFxuXHRcdCRmcmFtZUVsZW1lbnQ6IHRydWUsXG5cdFx0JGZyYW1lczogdHJ1ZSxcblx0XHQkaW5uZXJIZWlnaHQ6IHRydWUsXG5cdFx0JGlubmVyV2lkdGg6IHRydWUsXG5cdFx0JG9ubW96ZnVsbHNjcmVlbmNoYW5nZTogdHJ1ZSxcblx0XHQkb25tb3pmdWxsc2NyZWVuZXJyb3I6IHRydWUsXG5cdFx0JG91dGVySGVpZ2h0OiB0cnVlLFxuXHRcdCRvdXRlcldpZHRoOiB0cnVlLFxuXHRcdCRwYWdlWE9mZnNldDogdHJ1ZSxcblx0XHQkcGFnZVlPZmZzZXQ6IHRydWUsXG5cdFx0JHBhcmVudDogdHJ1ZSxcblx0XHQkc2Nyb2xsTGVmdDogdHJ1ZSxcblx0XHQkc2Nyb2xsVG9wOiB0cnVlLFxuXHRcdCRzY3JvbGxYOiB0cnVlLFxuXHRcdCRzY3JvbGxZOiB0cnVlLFxuXHRcdCRzZWxmOiB0cnVlLFxuXHRcdCR3ZWJraXRJbmRleGVkREI6IHRydWUsXG5cdFx0JHdlYmtpdFN0b3JhZ2VJbmZvOiB0cnVlLFxuXHRcdCR3aW5kb3c6IHRydWVcblx0fTtcblx0dmFyIGhhc0F1dG9tYXRpb25FcXVhbGl0eUJ1ZyA9IChmdW5jdGlvbiAoKSB7XG5cdFx0LyogZ2xvYmFsIHdpbmRvdyAqL1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgeyByZXR1cm4gZmFsc2U7IH1cblx0XHRmb3IgKHZhciBrIGluIHdpbmRvdykge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0aWYgKCFleGNsdWRlZEtleXNbJyQnICsga10gJiYgaGFzLmNhbGwod2luZG93LCBrKSAmJiB3aW5kb3dba10gIT09IG51bGwgJiYgdHlwZW9mIHdpbmRvd1trXSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0ZXF1YWxzQ29uc3RydWN0b3JQcm90b3R5cGUod2luZG93W2tdKTtcblx0XHRcdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fSgpKTtcblx0dmFyIGVxdWFsc0NvbnN0cnVjdG9yUHJvdG90eXBlSWZOb3RCdWdneSA9IGZ1bmN0aW9uIChvKSB7XG5cdFx0LyogZ2xvYmFsIHdpbmRvdyAqL1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCAhaGFzQXV0b21hdGlvbkVxdWFsaXR5QnVnKSB7XG5cdFx0XHRyZXR1cm4gZXF1YWxzQ29uc3RydWN0b3JQcm90b3R5cGUobyk7XG5cdFx0fVxuXHRcdHRyeSB7XG5cdFx0XHRyZXR1cm4gZXF1YWxzQ29uc3RydWN0b3JQcm90b3R5cGUobyk7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fTtcblxuXHRrZXlzU2hpbSA9IGZ1bmN0aW9uIGtleXMob2JqZWN0KSB7XG5cdFx0dmFyIGlzT2JqZWN0ID0gb2JqZWN0ICE9PSBudWxsICYmIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnO1xuXHRcdHZhciBpc0Z1bmN0aW9uID0gdG9TdHIuY2FsbChvYmplY3QpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xuXHRcdHZhciBpc0FyZ3VtZW50cyA9IGlzQXJncyhvYmplY3QpO1xuXHRcdHZhciBpc1N0cmluZyA9IGlzT2JqZWN0ICYmIHRvU3RyLmNhbGwob2JqZWN0KSA9PT0gJ1tvYmplY3QgU3RyaW5nXSc7XG5cdFx0dmFyIHRoZUtleXMgPSBbXTtcblxuXHRcdGlmICghaXNPYmplY3QgJiYgIWlzRnVuY3Rpb24gJiYgIWlzQXJndW1lbnRzKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3Qua2V5cyBjYWxsZWQgb24gYSBub24tb2JqZWN0Jyk7XG5cdFx0fVxuXG5cdFx0dmFyIHNraXBQcm90byA9IGhhc1Byb3RvRW51bUJ1ZyAmJiBpc0Z1bmN0aW9uO1xuXHRcdGlmIChpc1N0cmluZyAmJiBvYmplY3QubGVuZ3RoID4gMCAmJiAhaGFzLmNhbGwob2JqZWN0LCAwKSkge1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBvYmplY3QubGVuZ3RoOyArK2kpIHtcblx0XHRcdFx0dGhlS2V5cy5wdXNoKFN0cmluZyhpKSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGlzQXJndW1lbnRzICYmIG9iamVjdC5sZW5ndGggPiAwKSB7XG5cdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IG9iamVjdC5sZW5ndGg7ICsraikge1xuXHRcdFx0XHR0aGVLZXlzLnB1c2goU3RyaW5nKGopKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Zm9yICh2YXIgbmFtZSBpbiBvYmplY3QpIHtcblx0XHRcdFx0aWYgKCEoc2tpcFByb3RvICYmIG5hbWUgPT09ICdwcm90b3R5cGUnKSAmJiBoYXMuY2FsbChvYmplY3QsIG5hbWUpKSB7XG5cdFx0XHRcdFx0dGhlS2V5cy5wdXNoKFN0cmluZyhuYW1lKSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoaGFzRG9udEVudW1CdWcpIHtcblx0XHRcdHZhciBza2lwQ29uc3RydWN0b3IgPSBlcXVhbHNDb25zdHJ1Y3RvclByb3RvdHlwZUlmTm90QnVnZ3kob2JqZWN0KTtcblxuXHRcdFx0Zm9yICh2YXIgayA9IDA7IGsgPCBkb250RW51bXMubGVuZ3RoOyArK2spIHtcblx0XHRcdFx0aWYgKCEoc2tpcENvbnN0cnVjdG9yICYmIGRvbnRFbnVtc1trXSA9PT0gJ2NvbnN0cnVjdG9yJykgJiYgaGFzLmNhbGwob2JqZWN0LCBkb250RW51bXNba10pKSB7XG5cdFx0XHRcdFx0dGhlS2V5cy5wdXNoKGRvbnRFbnVtc1trXSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHRoZUtleXM7XG5cdH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGtleXNTaGltO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L29iamVjdC1rZXlzL2ltcGxlbWVudGF0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9lczIwMTUnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy1hYnN0cmFjdC9lczYuanNcbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIGhhcyA9IHJlcXVpcmUoJ2hhcycpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnZXMtdG8tcHJpbWl0aXZlL2VzNicpO1xudmFyIGtleXMgPSByZXF1aXJlKCdvYmplY3Qta2V5cycpO1xuXG52YXIgR2V0SW50cmluc2ljID0gcmVxdWlyZSgnLi9HZXRJbnRyaW5zaWMnKTtcblxudmFyICRUeXBlRXJyb3IgPSBHZXRJbnRyaW5zaWMoJyVUeXBlRXJyb3IlJyk7XG52YXIgJFN5bnRheEVycm9yID0gR2V0SW50cmluc2ljKCclU3ludGF4RXJyb3IlJyk7XG52YXIgJEFycmF5ID0gR2V0SW50cmluc2ljKCclQXJyYXklJyk7XG52YXIgJFN0cmluZyA9IEdldEludHJpbnNpYygnJVN0cmluZyUnKTtcbnZhciAkT2JqZWN0ID0gR2V0SW50cmluc2ljKCclT2JqZWN0JScpO1xudmFyICROdW1iZXIgPSBHZXRJbnRyaW5zaWMoJyVOdW1iZXIlJyk7XG52YXIgJFN5bWJvbCA9IEdldEludHJpbnNpYygnJVN5bWJvbCUnLCB0cnVlKTtcbnZhciAkUmVnRXhwID0gR2V0SW50cmluc2ljKCclUmVnRXhwJScpO1xuXG52YXIgaGFzU3ltYm9scyA9ICEhJFN5bWJvbDtcblxudmFyIGFzc2VydFJlY29yZCA9IHJlcXVpcmUoJy4vaGVscGVycy9hc3NlcnRSZWNvcmQnKTtcbnZhciAkaXNOYU4gPSByZXF1aXJlKCcuL2hlbHBlcnMvaXNOYU4nKTtcbnZhciAkaXNGaW5pdGUgPSByZXF1aXJlKCcuL2hlbHBlcnMvaXNGaW5pdGUnKTtcbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gJE51bWJlci5NQVhfU0FGRV9JTlRFR0VSIHx8IE1hdGgucG93KDIsIDUzKSAtIDE7XG5cbnZhciBhc3NpZ24gPSByZXF1aXJlKCcuL2hlbHBlcnMvYXNzaWduJyk7XG52YXIgc2lnbiA9IHJlcXVpcmUoJy4vaGVscGVycy9zaWduJyk7XG52YXIgbW9kID0gcmVxdWlyZSgnLi9oZWxwZXJzL21vZCcpO1xudmFyIGlzUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9oZWxwZXJzL2lzUHJpbWl0aXZlJyk7XG52YXIgcGFyc2VJbnRlZ2VyID0gcGFyc2VJbnQ7XG52YXIgYmluZCA9IHJlcXVpcmUoJ2Z1bmN0aW9uLWJpbmQnKTtcbnZhciBhcnJheVNsaWNlID0gYmluZC5jYWxsKEZ1bmN0aW9uLmNhbGwsICRBcnJheS5wcm90b3R5cGUuc2xpY2UpO1xudmFyIHN0clNsaWNlID0gYmluZC5jYWxsKEZ1bmN0aW9uLmNhbGwsICRTdHJpbmcucHJvdG90eXBlLnNsaWNlKTtcbnZhciBpc0JpbmFyeSA9IGJpbmQuY2FsbChGdW5jdGlvbi5jYWxsLCAkUmVnRXhwLnByb3RvdHlwZS50ZXN0LCAvXjBiWzAxXSskL2kpO1xudmFyIGlzT2N0YWwgPSBiaW5kLmNhbGwoRnVuY3Rpb24uY2FsbCwgJFJlZ0V4cC5wcm90b3R5cGUudGVzdCwgL14wb1swLTddKyQvaSk7XG52YXIgcmVnZXhFeGVjID0gYmluZC5jYWxsKEZ1bmN0aW9uLmNhbGwsICRSZWdFeHAucHJvdG90eXBlLmV4ZWMpO1xudmFyIG5vbldTID0gWydcXHUwMDg1JywgJ1xcdTIwMGInLCAnXFx1ZmZmZSddLmpvaW4oJycpO1xudmFyIG5vbldTcmVnZXggPSBuZXcgJFJlZ0V4cCgnWycgKyBub25XUyArICddJywgJ2cnKTtcbnZhciBoYXNOb25XUyA9IGJpbmQuY2FsbChGdW5jdGlvbi5jYWxsLCAkUmVnRXhwLnByb3RvdHlwZS50ZXN0LCBub25XU3JlZ2V4KTtcbnZhciBpbnZhbGlkSGV4TGl0ZXJhbCA9IC9eWy0rXTB4WzAtOWEtZl0rJC9pO1xudmFyIGlzSW52YWxpZEhleExpdGVyYWwgPSBiaW5kLmNhbGwoRnVuY3Rpb24uY2FsbCwgJFJlZ0V4cC5wcm90b3R5cGUudGVzdCwgaW52YWxpZEhleExpdGVyYWwpO1xudmFyICRjaGFyQ29kZUF0ID0gYmluZC5jYWxsKEZ1bmN0aW9uLmNhbGwsICRTdHJpbmcucHJvdG90eXBlLmNoYXJDb2RlQXQpO1xuXG52YXIgdG9TdHIgPSBiaW5kLmNhbGwoRnVuY3Rpb24uY2FsbCwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyk7XG5cbnZhciAkTnVtYmVyVmFsdWVPZiA9IGJpbmQuY2FsbChGdW5jdGlvbi5jYWxsLCBHZXRJbnRyaW5zaWMoJyVOdW1iZXJQcm90b3R5cGUlJykudmFsdWVPZik7XG52YXIgJEJvb2xlYW5WYWx1ZU9mID0gYmluZC5jYWxsKEZ1bmN0aW9uLmNhbGwsIEdldEludHJpbnNpYygnJUJvb2xlYW5Qcm90b3R5cGUlJykudmFsdWVPZik7XG52YXIgJFN0cmluZ1ZhbHVlT2YgPSBiaW5kLmNhbGwoRnVuY3Rpb24uY2FsbCwgR2V0SW50cmluc2ljKCclU3RyaW5nUHJvdG90eXBlJScpLnZhbHVlT2YpO1xudmFyICREYXRlVmFsdWVPZiA9IGJpbmQuY2FsbChGdW5jdGlvbi5jYWxsLCBHZXRJbnRyaW5zaWMoJyVEYXRlUHJvdG90eXBlJScpLnZhbHVlT2YpO1xuXG52YXIgJGZsb29yID0gTWF0aC5mbG9vcjtcbnZhciAkYWJzID0gTWF0aC5hYnM7XG5cbnZhciAkT2JqZWN0Q3JlYXRlID0gT2JqZWN0LmNyZWF0ZTtcbnZhciAkZ09QRCA9ICRPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG52YXIgJGlzRXh0ZW5zaWJsZSA9ICRPYmplY3QuaXNFeHRlbnNpYmxlO1xuXG52YXIgJGRlZmluZVByb3BlcnR5ID0gJE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuLy8gd2hpdGVzcGFjZSBmcm9tOiBodHRwOi8vZXM1LmdpdGh1Yi5pby8jeDE1LjUuNC4yMFxuLy8gaW1wbGVtZW50YXRpb24gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZXMtc2hpbXMvZXM1LXNoaW0vYmxvYi92My40LjAvZXM1LXNoaW0uanMjTDEzMDQtTDEzMjRcbnZhciB3cyA9IFtcblx0J1xceDA5XFx4MEFcXHgwQlxceDBDXFx4MERcXHgyMFxceEEwXFx1MTY4MFxcdTE4MEVcXHUyMDAwXFx1MjAwMVxcdTIwMDJcXHUyMDAzJyxcblx0J1xcdTIwMDRcXHUyMDA1XFx1MjAwNlxcdTIwMDdcXHUyMDA4XFx1MjAwOVxcdTIwMEFcXHUyMDJGXFx1MjA1RlxcdTMwMDBcXHUyMDI4Jyxcblx0J1xcdTIwMjlcXHVGRUZGJ1xuXS5qb2luKCcnKTtcbnZhciB0cmltUmVnZXggPSBuZXcgUmVnRXhwKCcoXlsnICsgd3MgKyAnXSspfChbJyArIHdzICsgJ10rJCknLCAnZycpO1xudmFyIHJlcGxhY2UgPSBiaW5kLmNhbGwoRnVuY3Rpb24uY2FsbCwgJFN0cmluZy5wcm90b3R5cGUucmVwbGFjZSk7XG52YXIgdHJpbSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRyZXR1cm4gcmVwbGFjZSh2YWx1ZSwgdHJpbVJlZ2V4LCAnJyk7XG59O1xuXG52YXIgRVM1ID0gcmVxdWlyZSgnLi9lczUnKTtcblxudmFyIGhhc1JlZ0V4cE1hdGNoZXIgPSByZXF1aXJlKCdpcy1yZWdleCcpO1xuXG4vLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtYWJzdHJhY3Qtb3BlcmF0aW9uc1xudmFyIEVTNiA9IGFzc2lnbihhc3NpZ24oe30sIEVTNSksIHtcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtY2FsbC1mLXYtYXJnc1xuXHRDYWxsOiBmdW5jdGlvbiBDYWxsKEYsIFYpIHtcblx0XHR2YXIgYXJncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyID8gYXJndW1lbnRzWzJdIDogW107XG5cdFx0aWYgKCF0aGlzLklzQ2FsbGFibGUoRikpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKEYgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG5cdFx0fVxuXHRcdHJldHVybiBGLmFwcGx5KFYsIGFyZ3MpO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b3ByaW1pdGl2ZVxuXHRUb1ByaW1pdGl2ZTogdG9QcmltaXRpdmUsXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvYm9vbGVhblxuXHQvLyBUb0Jvb2xlYW46IEVTNS5Ub0Jvb2xlYW4sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLXRvbnVtYmVyXG5cdFRvTnVtYmVyOiBmdW5jdGlvbiBUb051bWJlcihhcmd1bWVudCkge1xuXHRcdHZhciB2YWx1ZSA9IGlzUHJpbWl0aXZlKGFyZ3VtZW50KSA/IGFyZ3VtZW50IDogdG9QcmltaXRpdmUoYXJndW1lbnQsICROdW1iZXIpO1xuXHRcdGlmICh0eXBlb2YgdmFsdWUgPT09ICdzeW1ib2wnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgYSBTeW1ib2wgdmFsdWUgdG8gYSBudW1iZXInKTtcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdGlmIChpc0JpbmFyeSh2YWx1ZSkpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuVG9OdW1iZXIocGFyc2VJbnRlZ2VyKHN0clNsaWNlKHZhbHVlLCAyKSwgMikpO1xuXHRcdFx0fSBlbHNlIGlmIChpc09jdGFsKHZhbHVlKSkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5Ub051bWJlcihwYXJzZUludGVnZXIoc3RyU2xpY2UodmFsdWUsIDIpLCA4KSk7XG5cdFx0XHR9IGVsc2UgaWYgKGhhc05vbldTKHZhbHVlKSB8fCBpc0ludmFsaWRIZXhMaXRlcmFsKHZhbHVlKSkge1xuXHRcdFx0XHRyZXR1cm4gTmFOO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyIHRyaW1tZWQgPSB0cmltKHZhbHVlKTtcblx0XHRcdFx0aWYgKHRyaW1tZWQgIT09IHZhbHVlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuVG9OdW1iZXIodHJpbW1lZCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuICROdW1iZXIodmFsdWUpO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b2ludGVnZXJcblx0Ly8gVG9JbnRlZ2VyOiBFUzUuVG9OdW1iZXIsXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvaW50MzJcblx0Ly8gVG9JbnQzMjogRVM1LlRvSW50MzIsXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvdWludDMyXG5cdC8vIFRvVWludDMyOiBFUzUuVG9VaW50MzIsXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvaW50MTZcblx0VG9JbnQxNjogZnVuY3Rpb24gVG9JbnQxNihhcmd1bWVudCkge1xuXHRcdHZhciBpbnQxNmJpdCA9IHRoaXMuVG9VaW50MTYoYXJndW1lbnQpO1xuXHRcdHJldHVybiBpbnQxNmJpdCA+PSAweDgwMDAgPyBpbnQxNmJpdCAtIDB4MTAwMDAgOiBpbnQxNmJpdDtcblx0fSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG91aW50MTZcblx0Ly8gVG9VaW50MTY6IEVTNS5Ub1VpbnQxNixcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG9pbnQ4XG5cdFRvSW50ODogZnVuY3Rpb24gVG9JbnQ4KGFyZ3VtZW50KSB7XG5cdFx0dmFyIGludDhiaXQgPSB0aGlzLlRvVWludDgoYXJndW1lbnQpO1xuXHRcdHJldHVybiBpbnQ4Yml0ID49IDB4ODAgPyBpbnQ4Yml0IC0gMHgxMDAgOiBpbnQ4Yml0O1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b3VpbnQ4XG5cdFRvVWludDg6IGZ1bmN0aW9uIFRvVWludDgoYXJndW1lbnQpIHtcblx0XHR2YXIgbnVtYmVyID0gdGhpcy5Ub051bWJlcihhcmd1bWVudCk7XG5cdFx0aWYgKCRpc05hTihudW1iZXIpIHx8IG51bWJlciA9PT0gMCB8fCAhJGlzRmluaXRlKG51bWJlcikpIHsgcmV0dXJuIDA7IH1cblx0XHR2YXIgcG9zSW50ID0gc2lnbihudW1iZXIpICogJGZsb29yKCRhYnMobnVtYmVyKSk7XG5cdFx0cmV0dXJuIG1vZChwb3NJbnQsIDB4MTAwKTtcblx0fSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG91aW50OGNsYW1wXG5cdFRvVWludDhDbGFtcDogZnVuY3Rpb24gVG9VaW50OENsYW1wKGFyZ3VtZW50KSB7XG5cdFx0dmFyIG51bWJlciA9IHRoaXMuVG9OdW1iZXIoYXJndW1lbnQpO1xuXHRcdGlmICgkaXNOYU4obnVtYmVyKSB8fCBudW1iZXIgPD0gMCkgeyByZXR1cm4gMDsgfVxuXHRcdGlmIChudW1iZXIgPj0gMHhGRikgeyByZXR1cm4gMHhGRjsgfVxuXHRcdHZhciBmID0gJGZsb29yKGFyZ3VtZW50KTtcblx0XHRpZiAoZiArIDAuNSA8IG51bWJlcikgeyByZXR1cm4gZiArIDE7IH1cblx0XHRpZiAobnVtYmVyIDwgZiArIDAuNSkgeyByZXR1cm4gZjsgfVxuXHRcdGlmIChmICUgMiAhPT0gMCkgeyByZXR1cm4gZiArIDE7IH1cblx0XHRyZXR1cm4gZjtcblx0fSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG9zdHJpbmdcblx0VG9TdHJpbmc6IGZ1bmN0aW9uIFRvU3RyaW5nKGFyZ3VtZW50KSB7XG5cdFx0aWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N5bWJvbCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCBhIFN5bWJvbCB2YWx1ZSB0byBhIHN0cmluZycpO1xuXHRcdH1cblx0XHRyZXR1cm4gJFN0cmluZyhhcmd1bWVudCk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvb2JqZWN0XG5cdFRvT2JqZWN0OiBmdW5jdGlvbiBUb09iamVjdCh2YWx1ZSkge1xuXHRcdHRoaXMuUmVxdWlyZU9iamVjdENvZXJjaWJsZSh2YWx1ZSk7XG5cdFx0cmV0dXJuICRPYmplY3QodmFsdWUpO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b3Byb3BlcnR5a2V5XG5cdFRvUHJvcGVydHlLZXk6IGZ1bmN0aW9uIFRvUHJvcGVydHlLZXkoYXJndW1lbnQpIHtcblx0XHR2YXIga2V5ID0gdGhpcy5Ub1ByaW1pdGl2ZShhcmd1bWVudCwgJFN0cmluZyk7XG5cdFx0cmV0dXJuIHR5cGVvZiBrZXkgPT09ICdzeW1ib2wnID8ga2V5IDogdGhpcy5Ub1N0cmluZyhrZXkpO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b2xlbmd0aFxuXHRUb0xlbmd0aDogZnVuY3Rpb24gVG9MZW5ndGgoYXJndW1lbnQpIHtcblx0XHR2YXIgbGVuID0gdGhpcy5Ub0ludGVnZXIoYXJndW1lbnQpO1xuXHRcdGlmIChsZW4gPD0gMCkgeyByZXR1cm4gMDsgfSAvLyBpbmNsdWRlcyBjb252ZXJ0aW5nIC0wIHRvICswXG5cdFx0aWYgKGxlbiA+IE1BWF9TQUZFX0lOVEVHRVIpIHsgcmV0dXJuIE1BWF9TQUZFX0lOVEVHRVI7IH1cblx0XHRyZXR1cm4gbGVuO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1jYW5vbmljYWxudW1lcmljaW5kZXhzdHJpbmdcblx0Q2Fub25pY2FsTnVtZXJpY0luZGV4U3RyaW5nOiBmdW5jdGlvbiBDYW5vbmljYWxOdW1lcmljSW5kZXhTdHJpbmcoYXJndW1lbnQpIHtcblx0XHRpZiAodG9TdHIoYXJndW1lbnQpICE9PSAnW29iamVjdCBTdHJpbmddJykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ211c3QgYmUgYSBzdHJpbmcnKTtcblx0XHR9XG5cdFx0aWYgKGFyZ3VtZW50ID09PSAnLTAnKSB7IHJldHVybiAtMDsgfVxuXHRcdHZhciBuID0gdGhpcy5Ub051bWJlcihhcmd1bWVudCk7XG5cdFx0aWYgKHRoaXMuU2FtZVZhbHVlKHRoaXMuVG9TdHJpbmcobiksIGFyZ3VtZW50KSkgeyByZXR1cm4gbjsgfVxuXHRcdHJldHVybiB2b2lkIDA7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXJlcXVpcmVvYmplY3Rjb2VyY2libGVcblx0UmVxdWlyZU9iamVjdENvZXJjaWJsZTogRVM1LkNoZWNrT2JqZWN0Q29lcmNpYmxlLFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1pc2FycmF5XG5cdElzQXJyYXk6ICRBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIElzQXJyYXkoYXJndW1lbnQpIHtcblx0XHRyZXR1cm4gdG9TdHIoYXJndW1lbnQpID09PSAnW29iamVjdCBBcnJheV0nO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1pc2NhbGxhYmxlXG5cdC8vIElzQ2FsbGFibGU6IEVTNS5Jc0NhbGxhYmxlLFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1pc2NvbnN0cnVjdG9yXG5cdElzQ29uc3RydWN0b3I6IGZ1bmN0aW9uIElzQ29uc3RydWN0b3IoYXJndW1lbnQpIHtcblx0XHRyZXR1cm4gdHlwZW9mIGFyZ3VtZW50ID09PSAnZnVuY3Rpb24nICYmICEhYXJndW1lbnQucHJvdG90eXBlOyAvLyB1bmZvcnR1bmF0ZWx5IHRoZXJlJ3Mgbm8gd2F5IHRvIHRydWx5IGNoZWNrIHRoaXMgd2l0aG91dCB0cnkvY2F0Y2ggYG5ldyBhcmd1bWVudGBcblx0fSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtaXNleHRlbnNpYmxlLW9cblx0SXNFeHRlbnNpYmxlOiBPYmplY3QucHJldmVudEV4dGVuc2lvbnNcblx0XHQ/IGZ1bmN0aW9uIElzRXh0ZW5zaWJsZShvYmopIHtcblx0XHRcdGlmIChpc1ByaW1pdGl2ZShvYmopKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiAkaXNFeHRlbnNpYmxlKG9iaik7XG5cdFx0fVxuXHRcdDogZnVuY3Rpb24gaXNFeHRlbnNpYmxlKG9iaikgeyByZXR1cm4gdHJ1ZTsgfSwgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1pc2ludGVnZXJcblx0SXNJbnRlZ2VyOiBmdW5jdGlvbiBJc0ludGVnZXIoYXJndW1lbnQpIHtcblx0XHRpZiAodHlwZW9mIGFyZ3VtZW50ICE9PSAnbnVtYmVyJyB8fCAkaXNOYU4oYXJndW1lbnQpIHx8ICEkaXNGaW5pdGUoYXJndW1lbnQpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHZhciBhYnMgPSAkYWJzKGFyZ3VtZW50KTtcblx0XHRyZXR1cm4gJGZsb29yKGFicykgPT09IGFicztcblx0fSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtaXNwcm9wZXJ0eWtleVxuXHRJc1Byb3BlcnR5S2V5OiBmdW5jdGlvbiBJc1Byb3BlcnR5S2V5KGFyZ3VtZW50KSB7XG5cdFx0cmV0dXJuIHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIGFyZ3VtZW50ID09PSAnc3ltYm9sJztcblx0fSxcblxuXHQvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtaXNyZWdleHBcblx0SXNSZWdFeHA6IGZ1bmN0aW9uIElzUmVnRXhwKGFyZ3VtZW50KSB7XG5cdFx0aWYgKCFhcmd1bWVudCB8fCB0eXBlb2YgYXJndW1lbnQgIT09ICdvYmplY3QnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGlmIChoYXNTeW1ib2xzKSB7XG5cdFx0XHR2YXIgaXNSZWdFeHAgPSBhcmd1bWVudFskU3ltYm9sLm1hdGNoXTtcblx0XHRcdGlmICh0eXBlb2YgaXNSZWdFeHAgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdHJldHVybiBFUzUuVG9Cb29sZWFuKGlzUmVnRXhwKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGhhc1JlZ0V4cE1hdGNoZXIoYXJndW1lbnQpO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1zYW1ldmFsdWVcblx0Ly8gU2FtZVZhbHVlOiBFUzUuU2FtZVZhbHVlLFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1zYW1ldmFsdWV6ZXJvXG5cdFNhbWVWYWx1ZVplcm86IGZ1bmN0aW9uIFNhbWVWYWx1ZVplcm8oeCwgeSkge1xuXHRcdHJldHVybiAoeCA9PT0geSkgfHwgKCRpc05hTih4KSAmJiAkaXNOYU4oeSkpO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiA3LjMuMiBHZXRWIChWLCBQKVxuXHQgKiAxLiBBc3NlcnQ6IElzUHJvcGVydHlLZXkoUCkgaXMgdHJ1ZS5cblx0ICogMi4gTGV0IE8gYmUgVG9PYmplY3QoVikuXG5cdCAqIDMuIFJldHVybklmQWJydXB0KE8pLlxuXHQgKiA0LiBSZXR1cm4gTy5bW0dldF1dKFAsIFYpLlxuXHQgKi9cblx0R2V0VjogZnVuY3Rpb24gR2V0VihWLCBQKSB7XG5cdFx0Ly8gNy4zLjIuMVxuXHRcdGlmICghdGhpcy5Jc1Byb3BlcnR5S2V5KFApKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogSXNQcm9wZXJ0eUtleShQKSBpcyBub3QgdHJ1ZScpO1xuXHRcdH1cblxuXHRcdC8vIDcuMy4yLjItM1xuXHRcdHZhciBPID0gdGhpcy5Ub09iamVjdChWKTtcblxuXHRcdC8vIDcuMy4yLjRcblx0XHRyZXR1cm4gT1tQXTtcblx0fSxcblxuXHQvKipcblx0ICogNy4zLjkgLSBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtZ2V0bWV0aG9kXG5cdCAqIDEuIEFzc2VydDogSXNQcm9wZXJ0eUtleShQKSBpcyB0cnVlLlxuXHQgKiAyLiBMZXQgZnVuYyBiZSBHZXRWKE8sIFApLlxuXHQgKiAzLiBSZXR1cm5JZkFicnVwdChmdW5jKS5cblx0ICogNC4gSWYgZnVuYyBpcyBlaXRoZXIgdW5kZWZpbmVkIG9yIG51bGwsIHJldHVybiB1bmRlZmluZWQuXG5cdCAqIDUuIElmIElzQ2FsbGFibGUoZnVuYykgaXMgZmFsc2UsIHRocm93IGEgVHlwZUVycm9yIGV4Y2VwdGlvbi5cblx0ICogNi4gUmV0dXJuIGZ1bmMuXG5cdCAqL1xuXHRHZXRNZXRob2Q6IGZ1bmN0aW9uIEdldE1ldGhvZChPLCBQKSB7XG5cdFx0Ly8gNy4zLjkuMVxuXHRcdGlmICghdGhpcy5Jc1Byb3BlcnR5S2V5KFApKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogSXNQcm9wZXJ0eUtleShQKSBpcyBub3QgdHJ1ZScpO1xuXHRcdH1cblxuXHRcdC8vIDcuMy45LjJcblx0XHR2YXIgZnVuYyA9IHRoaXMuR2V0VihPLCBQKTtcblxuXHRcdC8vIDcuMy45LjRcblx0XHRpZiAoZnVuYyA9PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gdm9pZCAwO1xuXHRcdH1cblxuXHRcdC8vIDcuMy45LjVcblx0XHRpZiAoIXRoaXMuSXNDYWxsYWJsZShmdW5jKSkge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoUCArICdpcyBub3QgYSBmdW5jdGlvbicpO1xuXHRcdH1cblxuXHRcdC8vIDcuMy45LjZcblx0XHRyZXR1cm4gZnVuYztcblx0fSxcblxuXHQvKipcblx0ICogNy4zLjEgR2V0IChPLCBQKSAtIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1nZXQtby1wXG5cdCAqIDEuIEFzc2VydDogVHlwZShPKSBpcyBPYmplY3QuXG5cdCAqIDIuIEFzc2VydDogSXNQcm9wZXJ0eUtleShQKSBpcyB0cnVlLlxuXHQgKiAzLiBSZXR1cm4gTy5bW0dldF1dKFAsIE8pLlxuXHQgKi9cblx0R2V0OiBmdW5jdGlvbiBHZXQoTywgUCkge1xuXHRcdC8vIDcuMy4xLjFcblx0XHRpZiAodGhpcy5UeXBlKE8pICE9PSAnT2JqZWN0Jykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IFR5cGUoTykgaXMgbm90IE9iamVjdCcpO1xuXHRcdH1cblx0XHQvLyA3LjMuMS4yXG5cdFx0aWYgKCF0aGlzLklzUHJvcGVydHlLZXkoUCkpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBJc1Byb3BlcnR5S2V5KFApIGlzIG5vdCB0cnVlJyk7XG5cdFx0fVxuXHRcdC8vIDcuMy4xLjNcblx0XHRyZXR1cm4gT1tQXTtcblx0fSxcblxuXHRUeXBlOiBmdW5jdGlvbiBUeXBlKHgpIHtcblx0XHRpZiAodHlwZW9mIHggPT09ICdzeW1ib2wnKSB7XG5cdFx0XHRyZXR1cm4gJ1N5bWJvbCc7XG5cdFx0fVxuXHRcdHJldHVybiBFUzUuVHlwZSh4KTtcblx0fSxcblxuXHQvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtc3BlY2llc2NvbnN0cnVjdG9yXG5cdFNwZWNpZXNDb25zdHJ1Y3RvcjogZnVuY3Rpb24gU3BlY2llc0NvbnN0cnVjdG9yKE8sIGRlZmF1bHRDb25zdHJ1Y3Rvcikge1xuXHRcdGlmICh0aGlzLlR5cGUoTykgIT09ICdPYmplY3QnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogVHlwZShPKSBpcyBub3QgT2JqZWN0Jyk7XG5cdFx0fVxuXHRcdHZhciBDID0gTy5jb25zdHJ1Y3Rvcjtcblx0XHRpZiAodHlwZW9mIEMgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRyZXR1cm4gZGVmYXVsdENvbnN0cnVjdG9yO1xuXHRcdH1cblx0XHRpZiAodGhpcy5UeXBlKEMpICE9PSAnT2JqZWN0Jykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ08uY29uc3RydWN0b3IgaXMgbm90IGFuIE9iamVjdCcpO1xuXHRcdH1cblx0XHR2YXIgUyA9IGhhc1N5bWJvbHMgJiYgJFN5bWJvbC5zcGVjaWVzID8gQ1skU3ltYm9sLnNwZWNpZXNdIDogdm9pZCAwO1xuXHRcdGlmIChTID09IG51bGwpIHtcblx0XHRcdHJldHVybiBkZWZhdWx0Q29uc3RydWN0b3I7XG5cdFx0fVxuXHRcdGlmICh0aGlzLklzQ29uc3RydWN0b3IoUykpIHtcblx0XHRcdHJldHVybiBTO1xuXHRcdH1cblx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignbm8gY29uc3RydWN0b3IgZm91bmQnKTtcblx0fSxcblxuXHQvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtY29tcGxldGVwcm9wZXJ0eWRlc2NyaXB0b3Jcblx0Q29tcGxldGVQcm9wZXJ0eURlc2NyaXB0b3I6IGZ1bmN0aW9uIENvbXBsZXRlUHJvcGVydHlEZXNjcmlwdG9yKERlc2MpIHtcblx0XHRhc3NlcnRSZWNvcmQodGhpcywgJ1Byb3BlcnR5IERlc2NyaXB0b3InLCAnRGVzYycsIERlc2MpO1xuXG5cdFx0aWYgKHRoaXMuSXNHZW5lcmljRGVzY3JpcHRvcihEZXNjKSB8fCB0aGlzLklzRGF0YURlc2NyaXB0b3IoRGVzYykpIHtcblx0XHRcdGlmICghaGFzKERlc2MsICdbW1ZhbHVlXV0nKSkge1xuXHRcdFx0XHREZXNjWydbW1ZhbHVlXV0nXSA9IHZvaWQgMDtcblx0XHRcdH1cblx0XHRcdGlmICghaGFzKERlc2MsICdbW1dyaXRhYmxlXV0nKSkge1xuXHRcdFx0XHREZXNjWydbW1dyaXRhYmxlXV0nXSA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoIWhhcyhEZXNjLCAnW1tHZXRdXScpKSB7XG5cdFx0XHRcdERlc2NbJ1tbR2V0XV0nXSA9IHZvaWQgMDtcblx0XHRcdH1cblx0XHRcdGlmICghaGFzKERlc2MsICdbW1NldF1dJykpIHtcblx0XHRcdFx0RGVzY1snW1tTZXRdXSddID0gdm9pZCAwO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoIWhhcyhEZXNjLCAnW1tFbnVtZXJhYmxlXV0nKSkge1xuXHRcdFx0RGVzY1snW1tFbnVtZXJhYmxlXV0nXSA9IGZhbHNlO1xuXHRcdH1cblx0XHRpZiAoIWhhcyhEZXNjLCAnW1tDb25maWd1cmFibGVdXScpKSB7XG5cdFx0XHREZXNjWydbW0NvbmZpZ3VyYWJsZV1dJ10gPSBmYWxzZTtcblx0XHR9XG5cdFx0cmV0dXJuIERlc2M7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLXNldC1vLXAtdi10aHJvd1xuXHRTZXQ6IGZ1bmN0aW9uIFNldChPLCBQLCBWLCBUaHJvdykge1xuXHRcdGlmICh0aGlzLlR5cGUoTykgIT09ICdPYmplY3QnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignTyBtdXN0IGJlIGFuIE9iamVjdCcpO1xuXHRcdH1cblx0XHRpZiAoIXRoaXMuSXNQcm9wZXJ0eUtleShQKSkge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ1AgbXVzdCBiZSBhIFByb3BlcnR5IEtleScpO1xuXHRcdH1cblx0XHRpZiAodGhpcy5UeXBlKFRocm93KSAhPT0gJ0Jvb2xlYW4nKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignVGhyb3cgbXVzdCBiZSBhIEJvb2xlYW4nKTtcblx0XHR9XG5cdFx0aWYgKFRocm93KSB7XG5cdFx0XHRPW1BdID0gVjtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRPW1BdID0gVjtcblx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblxuXHQvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtaGFzb3ducHJvcGVydHlcblx0SGFzT3duUHJvcGVydHk6IGZ1bmN0aW9uIEhhc093blByb3BlcnR5KE8sIFApIHtcblx0XHRpZiAodGhpcy5UeXBlKE8pICE9PSAnT2JqZWN0Jykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ08gbXVzdCBiZSBhbiBPYmplY3QnKTtcblx0XHR9XG5cdFx0aWYgKCF0aGlzLklzUHJvcGVydHlLZXkoUCkpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdQIG11c3QgYmUgYSBQcm9wZXJ0eSBLZXknKTtcblx0XHR9XG5cdFx0cmV0dXJuIGhhcyhPLCBQKTtcblx0fSxcblxuXHQvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtaGFzcHJvcGVydHlcblx0SGFzUHJvcGVydHk6IGZ1bmN0aW9uIEhhc1Byb3BlcnR5KE8sIFApIHtcblx0XHRpZiAodGhpcy5UeXBlKE8pICE9PSAnT2JqZWN0Jykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ08gbXVzdCBiZSBhbiBPYmplY3QnKTtcblx0XHR9XG5cdFx0aWYgKCF0aGlzLklzUHJvcGVydHlLZXkoUCkpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdQIG11c3QgYmUgYSBQcm9wZXJ0eSBLZXknKTtcblx0XHR9XG5cdFx0cmV0dXJuIFAgaW4gTztcblx0fSxcblxuXHQvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtaXNjb25jYXRzcHJlYWRhYmxlXG5cdElzQ29uY2F0U3ByZWFkYWJsZTogZnVuY3Rpb24gSXNDb25jYXRTcHJlYWRhYmxlKE8pIHtcblx0XHRpZiAodGhpcy5UeXBlKE8pICE9PSAnT2JqZWN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRpZiAoaGFzU3ltYm9scyAmJiB0eXBlb2YgJFN5bWJvbC5pc0NvbmNhdFNwcmVhZGFibGUgPT09ICdzeW1ib2wnKSB7XG5cdFx0XHR2YXIgc3ByZWFkYWJsZSA9IHRoaXMuR2V0KE8sIFN5bWJvbC5pc0NvbmNhdFNwcmVhZGFibGUpO1xuXHRcdFx0aWYgKHR5cGVvZiBzcHJlYWRhYmxlICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5Ub0Jvb2xlYW4oc3ByZWFkYWJsZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLklzQXJyYXkoTyk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWludm9rZVxuXHRJbnZva2U6IGZ1bmN0aW9uIEludm9rZShPLCBQKSB7XG5cdFx0aWYgKCF0aGlzLklzUHJvcGVydHlLZXkoUCkpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdQIG11c3QgYmUgYSBQcm9wZXJ0eSBLZXknKTtcblx0XHR9XG5cdFx0dmFyIGFyZ3VtZW50c0xpc3QgPSBhcnJheVNsaWNlKGFyZ3VtZW50cywgMik7XG5cdFx0dmFyIGZ1bmMgPSB0aGlzLkdldFYoTywgUCk7XG5cdFx0cmV0dXJuIHRoaXMuQ2FsbChmdW5jLCBPLCBhcmd1bWVudHNMaXN0KTtcblx0fSxcblxuXHQvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtZ2V0aXRlcmF0b3Jcblx0R2V0SXRlcmF0b3I6IGZ1bmN0aW9uIEdldEl0ZXJhdG9yKG9iaiwgbWV0aG9kKSB7XG5cdFx0aWYgKCFoYXNTeW1ib2xzKSB7XG5cdFx0XHR0aHJvdyBuZXcgU3ludGF4RXJyb3IoJ0VTLkdldEl0ZXJhdG9yIGRlcGVuZHMgb24gbmF0aXZlIGl0ZXJhdG9yIHN1cHBvcnQuJyk7XG5cdFx0fVxuXG5cdFx0dmFyIGFjdHVhbE1ldGhvZCA9IG1ldGhvZDtcblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHtcblx0XHRcdGFjdHVhbE1ldGhvZCA9IHRoaXMuR2V0TWV0aG9kKG9iaiwgJFN5bWJvbC5pdGVyYXRvcik7XG5cdFx0fVxuXHRcdHZhciBpdGVyYXRvciA9IHRoaXMuQ2FsbChhY3R1YWxNZXRob2QsIG9iaik7XG5cdFx0aWYgKHRoaXMuVHlwZShpdGVyYXRvcikgIT09ICdPYmplY3QnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignaXRlcmF0b3IgbXVzdCByZXR1cm4gYW4gb2JqZWN0Jyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGl0ZXJhdG9yO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1pdGVyYXRvcm5leHRcblx0SXRlcmF0b3JOZXh0OiBmdW5jdGlvbiBJdGVyYXRvck5leHQoaXRlcmF0b3IsIHZhbHVlKSB7XG5cdFx0dmFyIHJlc3VsdCA9IHRoaXMuSW52b2tlKGl0ZXJhdG9yLCAnbmV4dCcsIGFyZ3VtZW50cy5sZW5ndGggPCAyID8gW10gOiBbdmFsdWVdKTtcblx0XHRpZiAodGhpcy5UeXBlKHJlc3VsdCkgIT09ICdPYmplY3QnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignaXRlcmF0b3IgbmV4dCBtdXN0IHJldHVybiBhbiBvYmplY3QnKTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fSxcblxuXHQvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtaXRlcmF0b3Jjb21wbGV0ZVxuXHRJdGVyYXRvckNvbXBsZXRlOiBmdW5jdGlvbiBJdGVyYXRvckNvbXBsZXRlKGl0ZXJSZXN1bHQpIHtcblx0XHRpZiAodGhpcy5UeXBlKGl0ZXJSZXN1bHQpICE9PSAnT2JqZWN0Jykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IFR5cGUoaXRlclJlc3VsdCkgaXMgbm90IE9iamVjdCcpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5Ub0Jvb2xlYW4odGhpcy5HZXQoaXRlclJlc3VsdCwgJ2RvbmUnKSk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWl0ZXJhdG9ydmFsdWVcblx0SXRlcmF0b3JWYWx1ZTogZnVuY3Rpb24gSXRlcmF0b3JWYWx1ZShpdGVyUmVzdWx0KSB7XG5cdFx0aWYgKHRoaXMuVHlwZShpdGVyUmVzdWx0KSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBUeXBlKGl0ZXJSZXN1bHQpIGlzIG5vdCBPYmplY3QnKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuR2V0KGl0ZXJSZXN1bHQsICd2YWx1ZScpO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1pdGVyYXRvcnN0ZXBcblx0SXRlcmF0b3JTdGVwOiBmdW5jdGlvbiBJdGVyYXRvclN0ZXAoaXRlcmF0b3IpIHtcblx0XHR2YXIgcmVzdWx0ID0gdGhpcy5JdGVyYXRvck5leHQoaXRlcmF0b3IpO1xuXHRcdHZhciBkb25lID0gdGhpcy5JdGVyYXRvckNvbXBsZXRlKHJlc3VsdCk7XG5cdFx0cmV0dXJuIGRvbmUgPT09IHRydWUgPyBmYWxzZSA6IHJlc3VsdDtcblx0fSxcblxuXHQvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtaXRlcmF0b3JjbG9zZVxuXHRJdGVyYXRvckNsb3NlOiBmdW5jdGlvbiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKSB7XG5cdFx0aWYgKHRoaXMuVHlwZShpdGVyYXRvcikgIT09ICdPYmplY3QnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogVHlwZShpdGVyYXRvcikgaXMgbm90IE9iamVjdCcpO1xuXHRcdH1cblx0XHRpZiAoIXRoaXMuSXNDYWxsYWJsZShjb21wbGV0aW9uKSkge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IGNvbXBsZXRpb24gaXMgbm90IGEgdGh1bmsgZm9yIGEgQ29tcGxldGlvbiBSZWNvcmQnKTtcblx0XHR9XG5cdFx0dmFyIGNvbXBsZXRpb25UaHVuayA9IGNvbXBsZXRpb247XG5cblx0XHR2YXIgaXRlcmF0b3JSZXR1cm4gPSB0aGlzLkdldE1ldGhvZChpdGVyYXRvciwgJ3JldHVybicpO1xuXG5cdFx0aWYgKHR5cGVvZiBpdGVyYXRvclJldHVybiA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdHJldHVybiBjb21wbGV0aW9uVGh1bmsoKTtcblx0XHR9XG5cblx0XHR2YXIgY29tcGxldGlvblJlY29yZDtcblx0XHR0cnkge1xuXHRcdFx0dmFyIGlubmVyUmVzdWx0ID0gdGhpcy5DYWxsKGl0ZXJhdG9yUmV0dXJuLCBpdGVyYXRvciwgW10pO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdC8vIGlmIHdlIGhpdCBoZXJlLCB0aGVuIFwiZVwiIGlzIHRoZSBpbm5lclJlc3VsdCBjb21wbGV0aW9uIHRoYXQgbmVlZHMgcmUtdGhyb3dpbmdcblxuXHRcdFx0Ly8gaWYgdGhlIGNvbXBsZXRpb24gaXMgb2YgdHlwZSBcInRocm93XCIsIHRoaXMgd2lsbCB0aHJvdy5cblx0XHRcdGNvbXBsZXRpb25SZWNvcmQgPSBjb21wbGV0aW9uVGh1bmsoKTtcblx0XHRcdGNvbXBsZXRpb25UaHVuayA9IG51bGw7IC8vIGVuc3VyZSBpdCdzIG5vdCBjYWxsZWQgdHdpY2UuXG5cblx0XHRcdC8vIGlmIG5vdCwgdGhlbiByZXR1cm4gdGhlIGlubmVyUmVzdWx0IGNvbXBsZXRpb25cblx0XHRcdHRocm93IGU7XG5cdFx0fVxuXHRcdGNvbXBsZXRpb25SZWNvcmQgPSBjb21wbGV0aW9uVGh1bmsoKTsgLy8gaWYgaW5uZXJSZXN1bHQgd29ya2VkLCB0aGVuIHRocm93IGlmIHRoZSBjb21wbGV0aW9uIGRvZXNcblx0XHRjb21wbGV0aW9uVGh1bmsgPSBudWxsOyAvLyBlbnN1cmUgaXQncyBub3QgY2FsbGVkIHR3aWNlLlxuXG5cdFx0aWYgKHRoaXMuVHlwZShpbm5lclJlc3VsdCkgIT09ICdPYmplY3QnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignaXRlcmF0b3IgLnJldHVybiBtdXN0IHJldHVybiBhbiBvYmplY3QnKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gY29tcGxldGlvblJlY29yZDtcblx0fSxcblxuXHQvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtY3JlYXRlaXRlcnJlc3VsdG9iamVjdFxuXHRDcmVhdGVJdGVyUmVzdWx0T2JqZWN0OiBmdW5jdGlvbiBDcmVhdGVJdGVyUmVzdWx0T2JqZWN0KHZhbHVlLCBkb25lKSB7XG5cdFx0aWYgKHRoaXMuVHlwZShkb25lKSAhPT0gJ0Jvb2xlYW4nKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogVHlwZShkb25lKSBpcyBub3QgQm9vbGVhbicpO1xuXHRcdH1cblx0XHRyZXR1cm4ge1xuXHRcdFx0dmFsdWU6IHZhbHVlLFxuXHRcdFx0ZG9uZTogZG9uZVxuXHRcdH07XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLXJlZ2V4cGV4ZWNcblx0UmVnRXhwRXhlYzogZnVuY3Rpb24gUmVnRXhwRXhlYyhSLCBTKSB7XG5cdFx0aWYgKHRoaXMuVHlwZShSKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdSIG11c3QgYmUgYW4gT2JqZWN0Jyk7XG5cdFx0fVxuXHRcdGlmICh0aGlzLlR5cGUoUykgIT09ICdTdHJpbmcnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignUyBtdXN0IGJlIGEgU3RyaW5nJyk7XG5cdFx0fVxuXHRcdHZhciBleGVjID0gdGhpcy5HZXQoUiwgJ2V4ZWMnKTtcblx0XHRpZiAodGhpcy5Jc0NhbGxhYmxlKGV4ZWMpKSB7XG5cdFx0XHR2YXIgcmVzdWx0ID0gdGhpcy5DYWxsKGV4ZWMsIFIsIFtTXSk7XG5cdFx0XHRpZiAocmVzdWx0ID09PSBudWxsIHx8IHRoaXMuVHlwZShyZXN1bHQpID09PSAnT2JqZWN0Jykge1xuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0fVxuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ1wiZXhlY1wiIG1ldGhvZCBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gT2JqZWN0Jyk7XG5cdFx0fVxuXHRcdHJldHVybiByZWdleEV4ZWMoUiwgUyk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWFycmF5c3BlY2llc2NyZWF0ZVxuXHRBcnJheVNwZWNpZXNDcmVhdGU6IGZ1bmN0aW9uIEFycmF5U3BlY2llc0NyZWF0ZShvcmlnaW5hbEFycmF5LCBsZW5ndGgpIHtcblx0XHRpZiAoIXRoaXMuSXNJbnRlZ2VyKGxlbmd0aCkgfHwgbGVuZ3RoIDwgMCkge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IGxlbmd0aCBtdXN0IGJlIGFuIGludGVnZXIgPj0gMCcpO1xuXHRcdH1cblx0XHR2YXIgbGVuID0gbGVuZ3RoID09PSAwID8gMCA6IGxlbmd0aDtcblx0XHR2YXIgQztcblx0XHR2YXIgaXNBcnJheSA9IHRoaXMuSXNBcnJheShvcmlnaW5hbEFycmF5KTtcblx0XHRpZiAoaXNBcnJheSkge1xuXHRcdFx0QyA9IHRoaXMuR2V0KG9yaWdpbmFsQXJyYXksICdjb25zdHJ1Y3RvcicpO1xuXHRcdFx0Ly8gVE9ETzogZmlndXJlIG91dCBob3cgdG8gbWFrZSBhIGNyb3NzLXJlYWxtIG5vcm1hbCBBcnJheSwgYSBzYW1lLXJlYWxtIEFycmF5XG5cdFx0XHQvLyBpZiAodGhpcy5Jc0NvbnN0cnVjdG9yKEMpKSB7XG5cdFx0XHQvLyBcdGlmIEMgaXMgYW5vdGhlciByZWFsbSdzIEFycmF5LCBDID0gdW5kZWZpbmVkXG5cdFx0XHQvLyBcdE9iamVjdC5nZXRQcm90b3R5cGVPZihPYmplY3QuZ2V0UHJvdG90eXBlT2YoT2JqZWN0LmdldFByb3RvdHlwZU9mKEFycmF5KSkpID09PSBudWxsID9cblx0XHRcdC8vIH1cblx0XHRcdGlmICh0aGlzLlR5cGUoQykgPT09ICdPYmplY3QnICYmIGhhc1N5bWJvbHMgJiYgJFN5bWJvbC5zcGVjaWVzKSB7XG5cdFx0XHRcdEMgPSB0aGlzLkdldChDLCAkU3ltYm9sLnNwZWNpZXMpO1xuXHRcdFx0XHRpZiAoQyA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdEMgPSB2b2lkIDA7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKHR5cGVvZiBDID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0cmV0dXJuICRBcnJheShsZW4pO1xuXHRcdH1cblx0XHRpZiAoIXRoaXMuSXNDb25zdHJ1Y3RvcihDKSkge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0MgbXVzdCBiZSBhIGNvbnN0cnVjdG9yJyk7XG5cdFx0fVxuXHRcdHJldHVybiBuZXcgQyhsZW4pOyAvLyB0aGlzLkNvbnN0cnVjdChDLCBsZW4pO1xuXHR9LFxuXG5cdENyZWF0ZURhdGFQcm9wZXJ0eTogZnVuY3Rpb24gQ3JlYXRlRGF0YVByb3BlcnR5KE8sIFAsIFYpIHtcblx0XHRpZiAodGhpcy5UeXBlKE8pICE9PSAnT2JqZWN0Jykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IFR5cGUoTykgaXMgbm90IE9iamVjdCcpO1xuXHRcdH1cblx0XHRpZiAoIXRoaXMuSXNQcm9wZXJ0eUtleShQKSkge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IElzUHJvcGVydHlLZXkoUCkgaXMgbm90IHRydWUnKTtcblx0XHR9XG5cdFx0dmFyIG9sZERlc2MgPSAkZ09QRChPLCBQKTtcblx0XHR2YXIgZXh0ZW5zaWJsZSA9IG9sZERlc2MgfHwgKHR5cGVvZiAkaXNFeHRlbnNpYmxlICE9PSAnZnVuY3Rpb24nIHx8ICRpc0V4dGVuc2libGUoTykpO1xuXHRcdHZhciBpbW11dGFibGUgPSBvbGREZXNjICYmICghb2xkRGVzYy53cml0YWJsZSB8fCAhb2xkRGVzYy5jb25maWd1cmFibGUpO1xuXHRcdGlmIChpbW11dGFibGUgfHwgIWV4dGVuc2libGUpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0dmFyIG5ld0Rlc2MgPSB7XG5cdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0dmFsdWU6IFYsXG5cdFx0XHR3cml0YWJsZTogdHJ1ZVxuXHRcdH07XG5cdFx0JGRlZmluZVByb3BlcnR5KE8sIFAsIG5ld0Rlc2MpO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1jcmVhdGVkYXRhcHJvcGVydHlvcnRocm93XG5cdENyZWF0ZURhdGFQcm9wZXJ0eU9yVGhyb3c6IGZ1bmN0aW9uIENyZWF0ZURhdGFQcm9wZXJ0eU9yVGhyb3coTywgUCwgVikge1xuXHRcdGlmICh0aGlzLlR5cGUoTykgIT09ICdPYmplY3QnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogVHlwZShPKSBpcyBub3QgT2JqZWN0Jyk7XG5cdFx0fVxuXHRcdGlmICghdGhpcy5Jc1Byb3BlcnR5S2V5KFApKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogSXNQcm9wZXJ0eUtleShQKSBpcyBub3QgdHJ1ZScpO1xuXHRcdH1cblx0XHR2YXIgc3VjY2VzcyA9IHRoaXMuQ3JlYXRlRGF0YVByb3BlcnR5KE8sIFAsIFYpO1xuXHRcdGlmICghc3VjY2Vzcykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ3VuYWJsZSB0byBjcmVhdGUgZGF0YSBwcm9wZXJ0eScpO1xuXHRcdH1cblx0XHRyZXR1cm4gc3VjY2Vzcztcblx0fSxcblxuXHQvLyBodHRwczovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLW9iamVjdGNyZWF0ZVxuXHRPYmplY3RDcmVhdGU6IGZ1bmN0aW9uIE9iamVjdENyZWF0ZShwcm90bywgaW50ZXJuYWxTbG90c0xpc3QpIHtcblx0XHRpZiAocHJvdG8gIT09IG51bGwgJiYgdGhpcy5UeXBlKHByb3RvKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBwcm90byBtdXN0IGJlIG51bGwgb3IgYW4gb2JqZWN0Jyk7XG5cdFx0fVxuXHRcdHZhciBzbG90cyA9IGFyZ3VtZW50cy5sZW5ndGggPCAyID8gW10gOiBpbnRlcm5hbFNsb3RzTGlzdDtcblx0XHRpZiAoc2xvdHMubGVuZ3RoID4gMCkge1xuXHRcdFx0dGhyb3cgbmV3ICRTeW50YXhFcnJvcignZXMtYWJzdHJhY3QgZG9lcyBub3QgeWV0IHN1cHBvcnQgaW50ZXJuYWwgc2xvdHMnKTtcblx0XHR9XG5cblx0XHRpZiAocHJvdG8gPT09IG51bGwgJiYgISRPYmplY3RDcmVhdGUpIHtcblx0XHRcdHRocm93IG5ldyAkU3ludGF4RXJyb3IoJ25hdGl2ZSBPYmplY3QuY3JlYXRlIHN1cHBvcnQgaXMgcmVxdWlyZWQgdG8gY3JlYXRlIG51bGwgb2JqZWN0cycpO1xuXHRcdH1cblxuXHRcdHJldHVybiAkT2JqZWN0Q3JlYXRlKHByb3RvKTtcblx0fSxcblxuXHQvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtYWR2YW5jZXN0cmluZ2luZGV4XG5cdEFkdmFuY2VTdHJpbmdJbmRleDogZnVuY3Rpb24gQWR2YW5jZVN0cmluZ0luZGV4KFMsIGluZGV4LCB1bmljb2RlKSB7XG5cdFx0aWYgKHRoaXMuVHlwZShTKSAhPT0gJ1N0cmluZycpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdTIG11c3QgYmUgYSBTdHJpbmcnKTtcblx0XHR9XG5cdFx0aWYgKCF0aGlzLklzSW50ZWdlcihpbmRleCkgfHwgaW5kZXggPCAwIHx8IGluZGV4ID4gTUFYX1NBRkVfSU5URUdFUikge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IGxlbmd0aCBtdXN0IGJlIGFuIGludGVnZXIgPj0gMCBhbmQgPD0gMioqNTMnKTtcblx0XHR9XG5cdFx0aWYgKHRoaXMuVHlwZSh1bmljb2RlKSAhPT0gJ0Jvb2xlYW4nKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogdW5pY29kZSBtdXN0IGJlIGEgQm9vbGVhbicpO1xuXHRcdH1cblx0XHRpZiAoIXVuaWNvZGUpIHtcblx0XHRcdHJldHVybiBpbmRleCArIDE7XG5cdFx0fVxuXHRcdHZhciBsZW5ndGggPSBTLmxlbmd0aDtcblx0XHRpZiAoKGluZGV4ICsgMSkgPj0gbGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm4gaW5kZXggKyAxO1xuXHRcdH1cblxuXHRcdHZhciBmaXJzdCA9ICRjaGFyQ29kZUF0KFMsIGluZGV4KTtcblx0XHRpZiAoZmlyc3QgPCAweEQ4MDAgfHwgZmlyc3QgPiAweERCRkYpIHtcblx0XHRcdHJldHVybiBpbmRleCArIDE7XG5cdFx0fVxuXG5cdFx0dmFyIHNlY29uZCA9ICRjaGFyQ29kZUF0KFMsIGluZGV4ICsgMSk7XG5cdFx0aWYgKHNlY29uZCA8IDB4REMwMCB8fCBzZWNvbmQgPiAweERGRkYpIHtcblx0XHRcdHJldHVybiBpbmRleCArIDE7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGluZGV4ICsgMjtcblx0fSxcblxuXHQvLyBodHRwczovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWNyZWF0ZW1ldGhvZHByb3BlcnR5XG5cdENyZWF0ZU1ldGhvZFByb3BlcnR5OiBmdW5jdGlvbiBDcmVhdGVNZXRob2RQcm9wZXJ0eShPLCBQLCBWKSB7XG5cdFx0aWYgKHRoaXMuVHlwZShPKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBUeXBlKE8pIGlzIG5vdCBPYmplY3QnKTtcblx0XHR9XG5cblx0XHRpZiAoIXRoaXMuSXNQcm9wZXJ0eUtleShQKSkge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IElzUHJvcGVydHlLZXkoUCkgaXMgbm90IHRydWUnKTtcblx0XHR9XG5cblx0XHR2YXIgbmV3RGVzYyA9IHtcblx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0XHRcdGVudW1lcmFibGU6IGZhbHNlLFxuXHRcdFx0dmFsdWU6IFYsXG5cdFx0XHR3cml0YWJsZTogdHJ1ZVxuXHRcdH07XG5cdFx0cmV0dXJuICEhJGRlZmluZVByb3BlcnR5KE8sIFAsIG5ld0Rlc2MpO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtZGVmaW5lcHJvcGVydHlvcnRocm93XG5cdERlZmluZVByb3BlcnR5T3JUaHJvdzogZnVuY3Rpb24gRGVmaW5lUHJvcGVydHlPclRocm93KE8sIFAsIGRlc2MpIHtcblx0XHRpZiAodGhpcy5UeXBlKE8pICE9PSAnT2JqZWN0Jykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IFR5cGUoTykgaXMgbm90IE9iamVjdCcpO1xuXHRcdH1cblxuXHRcdGlmICghdGhpcy5Jc1Byb3BlcnR5S2V5KFApKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogSXNQcm9wZXJ0eUtleShQKSBpcyBub3QgdHJ1ZScpO1xuXHRcdH1cblxuXHRcdHJldHVybiAhISRkZWZpbmVQcm9wZXJ0eShPLCBQLCBkZXNjKTtcblx0fSxcblxuXHQvLyBodHRwczovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWRlbGV0ZXByb3BlcnR5b3J0aHJvd1xuXHREZWxldGVQcm9wZXJ0eU9yVGhyb3c6IGZ1bmN0aW9uIERlbGV0ZVByb3BlcnR5T3JUaHJvdyhPLCBQKSB7XG5cdFx0aWYgKHRoaXMuVHlwZShPKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBUeXBlKE8pIGlzIG5vdCBPYmplY3QnKTtcblx0XHR9XG5cblx0XHRpZiAoIXRoaXMuSXNQcm9wZXJ0eUtleShQKSkge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IElzUHJvcGVydHlLZXkoUCkgaXMgbm90IHRydWUnKTtcblx0XHR9XG5cblx0XHR2YXIgc3VjY2VzcyA9IGRlbGV0ZSBPW1BdO1xuXHRcdGlmICghc3VjY2Vzcykge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignQXR0ZW1wdCB0byBkZWxldGUgcHJvcGVydHkgZmFpbGVkLicpO1xuXHRcdH1cblx0XHRyZXR1cm4gc3VjY2Vzcztcblx0fSxcblxuXHQvLyBodHRwczovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWVudW1lcmFibGVvd25uYW1lc1xuXHRFbnVtZXJhYmxlT3duTmFtZXM6IGZ1bmN0aW9uIEVudW1lcmFibGVPd25OYW1lcyhPKSB7XG5cdFx0aWYgKHRoaXMuVHlwZShPKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBUeXBlKE8pIGlzIG5vdCBPYmplY3QnKTtcblx0XHR9XG5cblx0XHRyZXR1cm4ga2V5cyhPKTtcblx0fSxcblxuXHQvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtcHJvcGVydGllcy1vZi10aGUtbnVtYmVyLXByb3RvdHlwZS1vYmplY3Rcblx0dGhpc051bWJlclZhbHVlOiBmdW5jdGlvbiB0aGlzTnVtYmVyVmFsdWUodmFsdWUpIHtcblx0XHRpZiAodGhpcy5UeXBlKHZhbHVlKSA9PT0gJ051bWJlcicpIHtcblx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gJE51bWJlclZhbHVlT2YodmFsdWUpO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1wcm9wZXJ0aWVzLW9mLXRoZS1ib29sZWFuLXByb3RvdHlwZS1vYmplY3Rcblx0dGhpc0Jvb2xlYW5WYWx1ZTogZnVuY3Rpb24gdGhpc0Jvb2xlYW5WYWx1ZSh2YWx1ZSkge1xuXHRcdGlmICh0aGlzLlR5cGUodmFsdWUpID09PSAnQm9vbGVhbicpIHtcblx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gJEJvb2xlYW5WYWx1ZU9mKHZhbHVlKTtcblx0fSxcblxuXHQvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtcHJvcGVydGllcy1vZi10aGUtc3RyaW5nLXByb3RvdHlwZS1vYmplY3Rcblx0dGhpc1N0cmluZ1ZhbHVlOiBmdW5jdGlvbiB0aGlzU3RyaW5nVmFsdWUodmFsdWUpIHtcblx0XHRpZiAodGhpcy5UeXBlKHZhbHVlKSA9PT0gJ1N0cmluZycpIHtcblx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gJFN0cmluZ1ZhbHVlT2YodmFsdWUpO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1wcm9wZXJ0aWVzLW9mLXRoZS1kYXRlLXByb3RvdHlwZS1vYmplY3Rcblx0dGhpc1RpbWVWYWx1ZTogZnVuY3Rpb24gdGhpc1RpbWVWYWx1ZSh2YWx1ZSkge1xuXHRcdHJldHVybiAkRGF0ZVZhbHVlT2YodmFsdWUpO1xuXHR9XG59KTtcblxuZGVsZXRlIEVTNi5DaGVja09iamVjdENvZXJjaWJsZTsgLy8gcmVuYW1lZCBpbiBFUzYgdG8gUmVxdWlyZU9iamVjdENvZXJjaWJsZVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVTNjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy1hYnN0cmFjdC9lczIwMTUuanNcbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJpbmQgPSByZXF1aXJlKCdmdW5jdGlvbi1iaW5kJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYmluZC5jYWxsKEZ1bmN0aW9uLmNhbGwsIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2hhcy9zcmMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIGltcGxlbWVudGF0aW9uID0gcmVxdWlyZSgnLi9pbXBsZW1lbnRhdGlvbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kIHx8IGltcGxlbWVudGF0aW9uO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Z1bmN0aW9uLWJpbmQvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuLyogZXNsaW50IG5vLWludmFsaWQtdGhpczogMSAqL1xuXG52YXIgRVJST1JfTUVTU0FHRSA9ICdGdW5jdGlvbi5wcm90b3R5cGUuYmluZCBjYWxsZWQgb24gaW5jb21wYXRpYmxlICc7XG52YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIGZ1bmNUeXBlID0gJ1tvYmplY3QgRnVuY3Rpb25dJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiaW5kKHRoYXQpIHtcbiAgICB2YXIgdGFyZ2V0ID0gdGhpcztcbiAgICBpZiAodHlwZW9mIHRhcmdldCAhPT0gJ2Z1bmN0aW9uJyB8fCB0b1N0ci5jYWxsKHRhcmdldCkgIT09IGZ1bmNUeXBlKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRVJST1JfTUVTU0FHRSArIHRhcmdldCk7XG4gICAgfVxuICAgIHZhciBhcmdzID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuXG4gICAgdmFyIGJvdW5kO1xuICAgIHZhciBiaW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzIGluc3RhbmNlb2YgYm91bmQpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSB0YXJnZXQuYXBwbHkoXG4gICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICBhcmdzLmNvbmNhdChzbGljZS5jYWxsKGFyZ3VtZW50cykpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKE9iamVjdChyZXN1bHQpID09PSByZXN1bHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0LmFwcGx5KFxuICAgICAgICAgICAgICAgIHRoYXQsXG4gICAgICAgICAgICAgICAgYXJncy5jb25jYXQoc2xpY2UuY2FsbChhcmd1bWVudHMpKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgYm91bmRMZW5ndGggPSBNYXRoLm1heCgwLCB0YXJnZXQubGVuZ3RoIC0gYXJncy5sZW5ndGgpO1xuICAgIHZhciBib3VuZEFyZ3MgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvdW5kTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYm91bmRBcmdzLnB1c2goJyQnICsgaSk7XG4gICAgfVxuXG4gICAgYm91bmQgPSBGdW5jdGlvbignYmluZGVyJywgJ3JldHVybiBmdW5jdGlvbiAoJyArIGJvdW5kQXJncy5qb2luKCcsJykgKyAnKXsgcmV0dXJuIGJpbmRlci5hcHBseSh0aGlzLGFyZ3VtZW50cyk7IH0nKShiaW5kZXIpO1xuXG4gICAgaWYgKHRhcmdldC5wcm90b3R5cGUpIHtcbiAgICAgICAgdmFyIEVtcHR5ID0gZnVuY3Rpb24gRW1wdHkoKSB7fTtcbiAgICAgICAgRW1wdHkucHJvdG90eXBlID0gdGFyZ2V0LnByb3RvdHlwZTtcbiAgICAgICAgYm91bmQucHJvdG90eXBlID0gbmV3IEVtcHR5KCk7XG4gICAgICAgIEVtcHR5LnByb3RvdHlwZSA9IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJvdW5kO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9mdW5jdGlvbi1iaW5kL2ltcGxlbWVudGF0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSA0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9lczIwMTUnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy10by1wcmltaXRpdmUvZXM2LmpzXG4vLyBtb2R1bGUgaWQgPSA0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBoYXNTeW1ib2xzID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSAnc3ltYm9sJztcblxudmFyIGlzUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9oZWxwZXJzL2lzUHJpbWl0aXZlJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJ2lzLWNhbGxhYmxlJyk7XG52YXIgaXNEYXRlID0gcmVxdWlyZSgnaXMtZGF0ZS1vYmplY3QnKTtcbnZhciBpc1N5bWJvbCA9IHJlcXVpcmUoJ2lzLXN5bWJvbCcpO1xuXG52YXIgb3JkaW5hcnlUb1ByaW1pdGl2ZSA9IGZ1bmN0aW9uIE9yZGluYXJ5VG9QcmltaXRpdmUoTywgaGludCkge1xuXHRpZiAodHlwZW9mIE8gPT09ICd1bmRlZmluZWQnIHx8IE8gPT09IG51bGwpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBtZXRob2Qgb24gJyArIE8pO1xuXHR9XG5cdGlmICh0eXBlb2YgaGludCAhPT0gJ3N0cmluZycgfHwgKGhpbnQgIT09ICdudW1iZXInICYmIGhpbnQgIT09ICdzdHJpbmcnKSkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ2hpbnQgbXVzdCBiZSBcInN0cmluZ1wiIG9yIFwibnVtYmVyXCInKTtcblx0fVxuXHR2YXIgbWV0aG9kTmFtZXMgPSBoaW50ID09PSAnc3RyaW5nJyA/IFsndG9TdHJpbmcnLCAndmFsdWVPZiddIDogWyd2YWx1ZU9mJywgJ3RvU3RyaW5nJ107XG5cdHZhciBtZXRob2QsIHJlc3VsdCwgaTtcblx0Zm9yIChpID0gMDsgaSA8IG1ldGhvZE5hbWVzLmxlbmd0aDsgKytpKSB7XG5cdFx0bWV0aG9kID0gT1ttZXRob2ROYW1lc1tpXV07XG5cdFx0aWYgKGlzQ2FsbGFibGUobWV0aG9kKSkge1xuXHRcdFx0cmVzdWx0ID0gbWV0aG9kLmNhbGwoTyk7XG5cdFx0XHRpZiAoaXNQcmltaXRpdmUocmVzdWx0KSkge1xuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHR0aHJvdyBuZXcgVHlwZUVycm9yKCdObyBkZWZhdWx0IHZhbHVlJyk7XG59O1xuXG52YXIgR2V0TWV0aG9kID0gZnVuY3Rpb24gR2V0TWV0aG9kKE8sIFApIHtcblx0dmFyIGZ1bmMgPSBPW1BdO1xuXHRpZiAoZnVuYyAhPT0gbnVsbCAmJiB0eXBlb2YgZnVuYyAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRpZiAoIWlzQ2FsbGFibGUoZnVuYykpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoZnVuYyArICcgcmV0dXJuZWQgZm9yIHByb3BlcnR5ICcgKyBQICsgJyBvZiBvYmplY3QgJyArIE8gKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG5cdFx0fVxuXHRcdHJldHVybiBmdW5jO1xuXHR9XG5cdHJldHVybiB2b2lkIDA7XG59O1xuXG4vLyBodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtdG9wcmltaXRpdmVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gVG9QcmltaXRpdmUoaW5wdXQpIHtcblx0aWYgKGlzUHJpbWl0aXZlKGlucHV0KSkge1xuXHRcdHJldHVybiBpbnB1dDtcblx0fVxuXHR2YXIgaGludCA9ICdkZWZhdWx0Jztcblx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG5cdFx0aWYgKGFyZ3VtZW50c1sxXSA9PT0gU3RyaW5nKSB7XG5cdFx0XHRoaW50ID0gJ3N0cmluZyc7XG5cdFx0fSBlbHNlIGlmIChhcmd1bWVudHNbMV0gPT09IE51bWJlcikge1xuXHRcdFx0aGludCA9ICdudW1iZXInO1xuXHRcdH1cblx0fVxuXG5cdHZhciBleG90aWNUb1ByaW07XG5cdGlmIChoYXNTeW1ib2xzKSB7XG5cdFx0aWYgKFN5bWJvbC50b1ByaW1pdGl2ZSkge1xuXHRcdFx0ZXhvdGljVG9QcmltID0gR2V0TWV0aG9kKGlucHV0LCBTeW1ib2wudG9QcmltaXRpdmUpO1xuXHRcdH0gZWxzZSBpZiAoaXNTeW1ib2woaW5wdXQpKSB7XG5cdFx0XHRleG90aWNUb1ByaW0gPSBTeW1ib2wucHJvdG90eXBlLnZhbHVlT2Y7XG5cdFx0fVxuXHR9XG5cdGlmICh0eXBlb2YgZXhvdGljVG9QcmltICE9PSAndW5kZWZpbmVkJykge1xuXHRcdHZhciByZXN1bHQgPSBleG90aWNUb1ByaW0uY2FsbChpbnB1dCwgaGludCk7XG5cdFx0aWYgKGlzUHJpbWl0aXZlKHJlc3VsdCkpIHtcblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fVxuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ3VuYWJsZSB0byBjb252ZXJ0IGV4b3RpYyBvYmplY3QgdG8gcHJpbWl0aXZlJyk7XG5cdH1cblx0aWYgKGhpbnQgPT09ICdkZWZhdWx0JyAmJiAoaXNEYXRlKGlucHV0KSB8fCBpc1N5bWJvbChpbnB1dCkpKSB7XG5cdFx0aGludCA9ICdzdHJpbmcnO1xuXHR9XG5cdHJldHVybiBvcmRpbmFyeVRvUHJpbWl0aXZlKGlucHV0LCBoaW50ID09PSAnZGVmYXVsdCcgPyAnbnVtYmVyJyA6IGhpbnQpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy10by1wcmltaXRpdmUvZXMyMDE1LmpzXG4vLyBtb2R1bGUgaWQgPSA0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzUHJpbWl0aXZlKHZhbHVlKSB7XG5cdHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCAodHlwZW9mIHZhbHVlICE9PSAnZnVuY3Rpb24nICYmIHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy10by1wcmltaXRpdmUvaGVscGVycy9pc1ByaW1pdGl2ZS5qc1xuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZm5Ub1N0ciA9IEZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZztcblxudmFyIGNvbnN0cnVjdG9yUmVnZXggPSAvXlxccypjbGFzc1xcYi87XG52YXIgaXNFUzZDbGFzc0ZuID0gZnVuY3Rpb24gaXNFUzZDbGFzc0Z1bmN0aW9uKHZhbHVlKSB7XG5cdHRyeSB7XG5cdFx0dmFyIGZuU3RyID0gZm5Ub1N0ci5jYWxsKHZhbHVlKTtcblx0XHRyZXR1cm4gY29uc3RydWN0b3JSZWdleC50ZXN0KGZuU3RyKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdHJldHVybiBmYWxzZTsgLy8gbm90IGEgZnVuY3Rpb25cblx0fVxufTtcblxudmFyIHRyeUZ1bmN0aW9uT2JqZWN0ID0gZnVuY3Rpb24gdHJ5RnVuY3Rpb25Ub1N0cih2YWx1ZSkge1xuXHR0cnkge1xuXHRcdGlmIChpc0VTNkNsYXNzRm4odmFsdWUpKSB7IHJldHVybiBmYWxzZTsgfVxuXHRcdGZuVG9TdHIuY2FsbCh2YWx1ZSk7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn07XG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIGZuQ2xhc3MgPSAnW29iamVjdCBGdW5jdGlvbl0nO1xudmFyIGdlbkNsYXNzID0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJztcbnZhciBoYXNUb1N0cmluZ1RhZyA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIFN5bWJvbC50b1N0cmluZ1RhZyA9PT0gJ3N5bWJvbCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNDYWxsYWJsZSh2YWx1ZSkge1xuXHRpZiAoIXZhbHVlKSB7IHJldHVybiBmYWxzZTsgfVxuXHRpZiAodHlwZW9mIHZhbHVlICE9PSAnZnVuY3Rpb24nICYmIHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicgJiYgIXZhbHVlLnByb3RvdHlwZSkgeyByZXR1cm4gdHJ1ZTsgfVxuXHRpZiAoaGFzVG9TdHJpbmdUYWcpIHsgcmV0dXJuIHRyeUZ1bmN0aW9uT2JqZWN0KHZhbHVlKTsgfVxuXHRpZiAoaXNFUzZDbGFzc0ZuKHZhbHVlKSkgeyByZXR1cm4gZmFsc2U7IH1cblx0dmFyIHN0ckNsYXNzID0gdG9TdHIuY2FsbCh2YWx1ZSk7XG5cdHJldHVybiBzdHJDbGFzcyA9PT0gZm5DbGFzcyB8fCBzdHJDbGFzcyA9PT0gZ2VuQ2xhc3M7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2lzLWNhbGxhYmxlL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBnZXREYXkgPSBEYXRlLnByb3RvdHlwZS5nZXREYXk7XG52YXIgdHJ5RGF0ZU9iamVjdCA9IGZ1bmN0aW9uIHRyeURhdGVPYmplY3QodmFsdWUpIHtcblx0dHJ5IHtcblx0XHRnZXREYXkuY2FsbCh2YWx1ZSk7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn07XG5cbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgZGF0ZUNsYXNzID0gJ1tvYmplY3QgRGF0ZV0nO1xudmFyIGhhc1RvU3RyaW5nVGFnID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgU3ltYm9sLnRvU3RyaW5nVGFnID09PSAnc3ltYm9sJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0RhdGVPYmplY3QodmFsdWUpIHtcblx0aWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcgfHwgdmFsdWUgPT09IG51bGwpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdHJldHVybiBoYXNUb1N0cmluZ1RhZyA/IHRyeURhdGVPYmplY3QodmFsdWUpIDogdG9TdHIuY2FsbCh2YWx1ZSkgPT09IGRhdGVDbGFzcztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaXMtZGF0ZS1vYmplY3QvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbnZhciBoYXNTeW1ib2xzID0gcmVxdWlyZSgnaGFzLXN5bWJvbHMnKSgpO1xuXG5pZiAoaGFzU3ltYm9scykge1xuXHR2YXIgc3ltVG9TdHIgPSBTeW1ib2wucHJvdG90eXBlLnRvU3RyaW5nO1xuXHR2YXIgc3ltU3RyaW5nUmVnZXggPSAvXlN5bWJvbFxcKC4qXFwpJC87XG5cdHZhciBpc1N5bWJvbE9iamVjdCA9IGZ1bmN0aW9uIGlzUmVhbFN5bWJvbE9iamVjdCh2YWx1ZSkge1xuXHRcdGlmICh0eXBlb2YgdmFsdWUudmFsdWVPZigpICE9PSAnc3ltYm9sJykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRyZXR1cm4gc3ltU3RyaW5nUmVnZXgudGVzdChzeW1Ub1N0ci5jYWxsKHZhbHVlKSk7XG5cdH07XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc1N5bWJvbCh2YWx1ZSkge1xuXHRcdGlmICh0eXBlb2YgdmFsdWUgPT09ICdzeW1ib2wnKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0aWYgKHRvU3RyLmNhbGwodmFsdWUpICE9PSAnW29iamVjdCBTeW1ib2xdJykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHR0cnkge1xuXHRcdFx0cmV0dXJuIGlzU3ltYm9sT2JqZWN0KHZhbHVlKTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9O1xufSBlbHNlIHtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG5cdFx0Ly8gdGhpcyBlbnZpcm9ubWVudCBkb2VzIG5vdCBzdXBwb3J0IFN5bWJvbHMuXG5cdFx0cmV0dXJuIGZhbHNlICYmIHZhbHVlO1xuXHR9O1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2lzLXN5bWJvbC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgb3JpZ1N5bWJvbCA9IGdsb2JhbC5TeW1ib2w7XG52YXIgaGFzU3ltYm9sU2hhbSA9IHJlcXVpcmUoJy4vc2hhbXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBoYXNOYXRpdmVTeW1ib2xzKCkge1xuXHRpZiAodHlwZW9mIG9yaWdTeW1ib2wgIT09ICdmdW5jdGlvbicpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdGlmICh0eXBlb2YgU3ltYm9sICE9PSAnZnVuY3Rpb24nKSB7IHJldHVybiBmYWxzZTsgfVxuXHRpZiAodHlwZW9mIG9yaWdTeW1ib2woJ2ZvbycpICE9PSAnc3ltYm9sJykgeyByZXR1cm4gZmFsc2U7IH1cblx0aWYgKHR5cGVvZiBTeW1ib2woJ2JhcicpICE9PSAnc3ltYm9sJykgeyByZXR1cm4gZmFsc2U7IH1cblxuXHRyZXR1cm4gaGFzU3ltYm9sU2hhbSgpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9oYXMtc3ltYm9scy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKiBlc2xpbnQgY29tcGxleGl0eTogWzIsIDE3XSwgbWF4LXN0YXRlbWVudHM6IFsyLCAzM10gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaGFzU3ltYm9scygpIHtcblx0aWYgKHR5cGVvZiBTeW1ib2wgIT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgIT09ICdmdW5jdGlvbicpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdGlmICh0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSAnc3ltYm9sJykgeyByZXR1cm4gdHJ1ZTsgfVxuXG5cdHZhciBvYmogPSB7fTtcblx0dmFyIHN5bSA9IFN5bWJvbCgndGVzdCcpO1xuXHR2YXIgc3ltT2JqID0gT2JqZWN0KHN5bSk7XG5cdGlmICh0eXBlb2Ygc3ltID09PSAnc3RyaW5nJykgeyByZXR1cm4gZmFsc2U7IH1cblxuXHRpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHN5bSkgIT09ICdbb2JqZWN0IFN5bWJvbF0nKSB7IHJldHVybiBmYWxzZTsgfVxuXHRpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHN5bU9iaikgIT09ICdbb2JqZWN0IFN5bWJvbF0nKSB7IHJldHVybiBmYWxzZTsgfVxuXG5cdC8vIHRlbXAgZGlzYWJsZWQgcGVyIGh0dHBzOi8vZ2l0aHViLmNvbS9samhhcmIvb2JqZWN0LmFzc2lnbi9pc3N1ZXMvMTdcblx0Ly8gaWYgKHN5bSBpbnN0YW5jZW9mIFN5bWJvbCkgeyByZXR1cm4gZmFsc2U7IH1cblx0Ly8gdGVtcCBkaXNhYmxlZCBwZXIgaHR0cHM6Ly9naXRodWIuY29tL1dlYlJlZmxlY3Rpb24vZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzL2lzc3Vlcy80XG5cdC8vIGlmICghKHN5bU9iaiBpbnN0YW5jZW9mIFN5bWJvbCkpIHsgcmV0dXJuIGZhbHNlOyB9XG5cblx0Ly8gaWYgKHR5cGVvZiBTeW1ib2wucHJvdG90eXBlLnRvU3RyaW5nICE9PSAnZnVuY3Rpb24nKSB7IHJldHVybiBmYWxzZTsgfVxuXHQvLyBpZiAoU3RyaW5nKHN5bSkgIT09IFN5bWJvbC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChzeW0pKSB7IHJldHVybiBmYWxzZTsgfVxuXG5cdHZhciBzeW1WYWwgPSA0Mjtcblx0b2JqW3N5bV0gPSBzeW1WYWw7XG5cdGZvciAoc3ltIGluIG9iaikgeyByZXR1cm4gZmFsc2U7IH0gLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuXHRpZiAodHlwZW9mIE9iamVjdC5rZXlzID09PSAnZnVuY3Rpb24nICYmIE9iamVjdC5rZXlzKG9iaikubGVuZ3RoICE9PSAwKSB7IHJldHVybiBmYWxzZTsgfVxuXG5cdGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgPT09ICdmdW5jdGlvbicgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMob2JqKS5sZW5ndGggIT09IDApIHsgcmV0dXJuIGZhbHNlOyB9XG5cblx0dmFyIHN5bXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iaik7XG5cdGlmIChzeW1zLmxlbmd0aCAhPT0gMSB8fCBzeW1zWzBdICE9PSBzeW0pIHsgcmV0dXJuIGZhbHNlOyB9XG5cblx0aWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwob2JqLCBzeW0pKSB7IHJldHVybiBmYWxzZTsgfVxuXG5cdGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIHN5bSk7XG5cdFx0aWYgKGRlc2NyaXB0b3IudmFsdWUgIT09IHN5bVZhbCB8fCBkZXNjcmlwdG9yLmVudW1lcmFibGUgIT09IHRydWUpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdH1cblxuXHRyZXR1cm4gdHJ1ZTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaGFzLXN5bWJvbHMvc2hhbXMuanNcbi8vIG1vZHVsZSBpZCA9IDU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuLyogZ2xvYmFsc1xuXHRTZXQsXG5cdE1hcCxcblx0V2Vha1NldCxcblx0V2Vha01hcCxcblxuXHRQcm9taXNlLFxuXG5cdFN5bWJvbCxcblx0UHJveHksXG5cblx0QXRvbWljcyxcblx0U2hhcmVkQXJyYXlCdWZmZXIsXG5cblx0QXJyYXlCdWZmZXIsXG5cdERhdGFWaWV3LFxuXHRVaW50OEFycmF5LFxuXHRGbG9hdDMyQXJyYXksXG5cdEZsb2F0NjRBcnJheSxcblx0SW50OEFycmF5LFxuXHRJbnQxNkFycmF5LFxuXHRJbnQzMkFycmF5LFxuXHRVaW50OENsYW1wZWRBcnJheSxcblx0VWludDE2QXJyYXksXG5cdFVpbnQzMkFycmF5LFxuKi9cblxudmFyIHVuZGVmaW5lZDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zaGFkb3ctcmVzdHJpY3RlZC1uYW1lc1xuXG52YXIgVGhyb3dUeXBlRXJyb3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yXG5cdD8gKGZ1bmN0aW9uICgpIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYXJndW1lbnRzLCAnY2FsbGVlJykuZ2V0OyB9KCkpXG5cdDogZnVuY3Rpb24gKCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCk7IH07XG5cbnZhciBoYXNTeW1ib2xzID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSAnc3ltYm9sJztcblxudmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4Ll9fcHJvdG9fXzsgfTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wcm90b1xuXG52YXIgZ2VuZXJhdG9yOyAvLyA9IGZ1bmN0aW9uICogKCkge307XG52YXIgZ2VuZXJhdG9yRnVuY3Rpb24gPSBnZW5lcmF0b3IgPyBnZXRQcm90byhnZW5lcmF0b3IpIDogdW5kZWZpbmVkO1xudmFyIGFzeW5jRm47IC8vIGFzeW5jIGZ1bmN0aW9uKCkge307XG52YXIgYXN5bmNGdW5jdGlvbiA9IGFzeW5jRm4gPyBhc3luY0ZuLmNvbnN0cnVjdG9yIDogdW5kZWZpbmVkO1xudmFyIGFzeW5jR2VuOyAvLyBhc3luYyBmdW5jdGlvbiAqICgpIHt9O1xudmFyIGFzeW5jR2VuRnVuY3Rpb24gPSBhc3luY0dlbiA/IGdldFByb3RvKGFzeW5jR2VuKSA6IHVuZGVmaW5lZDtcbnZhciBhc3luY0dlbkl0ZXJhdG9yID0gYXN5bmNHZW4gPyBhc3luY0dlbigpIDogdW5kZWZpbmVkO1xuXG52YXIgVHlwZWRBcnJheSA9IHR5cGVvZiBVaW50OEFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IGdldFByb3RvKFVpbnQ4QXJyYXkpO1xuXG52YXIgSU5UUklOU0lDUyA9IHtcblx0JyQgJUFycmF5JSc6IEFycmF5LFxuXHQnJCAlQXJyYXlCdWZmZXIlJzogdHlwZW9mIEFycmF5QnVmZmVyID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IEFycmF5QnVmZmVyLFxuXHQnJCAlQXJyYXlCdWZmZXJQcm90b3R5cGUlJzogdHlwZW9mIEFycmF5QnVmZmVyID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IEFycmF5QnVmZmVyLnByb3RvdHlwZSxcblx0JyQgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlJzogaGFzU3ltYm9scyA/IGdldFByb3RvKFtdW1N5bWJvbC5pdGVyYXRvcl0oKSkgOiB1bmRlZmluZWQsXG5cdCckICVBcnJheVByb3RvdHlwZSUnOiBBcnJheS5wcm90b3R5cGUsXG5cdCckICVBcnJheVByb3RvX2VudHJpZXMlJzogQXJyYXkucHJvdG90eXBlLmVudHJpZXMsXG5cdCckICVBcnJheVByb3RvX2ZvckVhY2glJzogQXJyYXkucHJvdG90eXBlLmZvckVhY2gsXG5cdCckICVBcnJheVByb3RvX2tleXMlJzogQXJyYXkucHJvdG90eXBlLmtleXMsXG5cdCckICVBcnJheVByb3RvX3ZhbHVlcyUnOiBBcnJheS5wcm90b3R5cGUudmFsdWVzLFxuXHQnJCAlQXN5bmNGcm9tU3luY0l0ZXJhdG9yUHJvdG90eXBlJSc6IHVuZGVmaW5lZCxcblx0JyQgJUFzeW5jRnVuY3Rpb24lJzogYXN5bmNGdW5jdGlvbixcblx0JyQgJUFzeW5jRnVuY3Rpb25Qcm90b3R5cGUlJzogYXN5bmNGdW5jdGlvbiA/IGFzeW5jRnVuY3Rpb24ucHJvdG90eXBlIDogdW5kZWZpbmVkLFxuXHQnJCAlQXN5bmNHZW5lcmF0b3IlJzogYXN5bmNHZW4gPyBnZXRQcm90byhhc3luY0dlbkl0ZXJhdG9yKSA6IHVuZGVmaW5lZCxcblx0JyQgJUFzeW5jR2VuZXJhdG9yRnVuY3Rpb24lJzogYXN5bmNHZW5GdW5jdGlvbixcblx0JyQgJUFzeW5jR2VuZXJhdG9yUHJvdG90eXBlJSc6IGFzeW5jR2VuRnVuY3Rpb24gPyBhc3luY0dlbkZ1bmN0aW9uLnByb3RvdHlwZSA6IHVuZGVmaW5lZCxcblx0JyQgJUFzeW5jSXRlcmF0b3JQcm90b3R5cGUlJzogYXN5bmNHZW5JdGVyYXRvciAmJiBoYXNTeW1ib2xzICYmIFN5bWJvbC5hc3luY0l0ZXJhdG9yID8gYXN5bmNHZW5JdGVyYXRvcltTeW1ib2wuYXN5bmNJdGVyYXRvcl0oKSA6IHVuZGVmaW5lZCxcblx0JyQgJUF0b21pY3MlJzogdHlwZW9mIEF0b21pY3MgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogQXRvbWljcyxcblx0JyQgJUJvb2xlYW4lJzogQm9vbGVhbixcblx0JyQgJUJvb2xlYW5Qcm90b3R5cGUlJzogQm9vbGVhbi5wcm90b3R5cGUsXG5cdCckICVEYXRhVmlldyUnOiB0eXBlb2YgRGF0YVZpZXcgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogRGF0YVZpZXcsXG5cdCckICVEYXRhVmlld1Byb3RvdHlwZSUnOiB0eXBlb2YgRGF0YVZpZXcgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogRGF0YVZpZXcucHJvdG90eXBlLFxuXHQnJCAlRGF0ZSUnOiBEYXRlLFxuXHQnJCAlRGF0ZVByb3RvdHlwZSUnOiBEYXRlLnByb3RvdHlwZSxcblx0JyQgJWRlY29kZVVSSSUnOiBkZWNvZGVVUkksXG5cdCckICVkZWNvZGVVUklDb21wb25lbnQlJzogZGVjb2RlVVJJQ29tcG9uZW50LFxuXHQnJCAlZW5jb2RlVVJJJSc6IGVuY29kZVVSSSxcblx0JyQgJWVuY29kZVVSSUNvbXBvbmVudCUnOiBlbmNvZGVVUklDb21wb25lbnQsXG5cdCckICVFcnJvciUnOiBFcnJvcixcblx0JyQgJUVycm9yUHJvdG90eXBlJSc6IEVycm9yLnByb3RvdHlwZSxcblx0JyQgJWV2YWwlJzogZXZhbCwgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1ldmFsXG5cdCckICVFdmFsRXJyb3IlJzogRXZhbEVycm9yLFxuXHQnJCAlRXZhbEVycm9yUHJvdG90eXBlJSc6IEV2YWxFcnJvci5wcm90b3R5cGUsXG5cdCckICVGbG9hdDMyQXJyYXklJzogdHlwZW9mIEZsb2F0MzJBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBGbG9hdDMyQXJyYXksXG5cdCckICVGbG9hdDMyQXJyYXlQcm90b3R5cGUlJzogdHlwZW9mIEZsb2F0MzJBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBGbG9hdDMyQXJyYXkucHJvdG90eXBlLFxuXHQnJCAlRmxvYXQ2NEFycmF5JSc6IHR5cGVvZiBGbG9hdDY0QXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogRmxvYXQ2NEFycmF5LFxuXHQnJCAlRmxvYXQ2NEFycmF5UHJvdG90eXBlJSc6IHR5cGVvZiBGbG9hdDY0QXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogRmxvYXQ2NEFycmF5LnByb3RvdHlwZSxcblx0JyQgJUZ1bmN0aW9uJSc6IEZ1bmN0aW9uLFxuXHQnJCAlRnVuY3Rpb25Qcm90b3R5cGUlJzogRnVuY3Rpb24ucHJvdG90eXBlLFxuXHQnJCAlR2VuZXJhdG9yJSc6IGdlbmVyYXRvciA/IGdldFByb3RvKGdlbmVyYXRvcigpKSA6IHVuZGVmaW5lZCxcblx0JyQgJUdlbmVyYXRvckZ1bmN0aW9uJSc6IGdlbmVyYXRvckZ1bmN0aW9uLFxuXHQnJCAlR2VuZXJhdG9yUHJvdG90eXBlJSc6IGdlbmVyYXRvckZ1bmN0aW9uID8gZ2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlIDogdW5kZWZpbmVkLFxuXHQnJCAlSW50OEFycmF5JSc6IHR5cGVvZiBJbnQ4QXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogSW50OEFycmF5LFxuXHQnJCAlSW50OEFycmF5UHJvdG90eXBlJSc6IHR5cGVvZiBJbnQ4QXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogSW50OEFycmF5LnByb3RvdHlwZSxcblx0JyQgJUludDE2QXJyYXklJzogdHlwZW9mIEludDE2QXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogSW50MTZBcnJheSxcblx0JyQgJUludDE2QXJyYXlQcm90b3R5cGUlJzogdHlwZW9mIEludDE2QXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogSW50OEFycmF5LnByb3RvdHlwZSxcblx0JyQgJUludDMyQXJyYXklJzogdHlwZW9mIEludDMyQXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogSW50MzJBcnJheSxcblx0JyQgJUludDMyQXJyYXlQcm90b3R5cGUlJzogdHlwZW9mIEludDMyQXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogSW50MzJBcnJheS5wcm90b3R5cGUsXG5cdCckICVpc0Zpbml0ZSUnOiBpc0Zpbml0ZSxcblx0JyQgJWlzTmFOJSc6IGlzTmFOLFxuXHQnJCAlSXRlcmF0b3JQcm90b3R5cGUlJzogaGFzU3ltYm9scyA/IGdldFByb3RvKGdldFByb3RvKFtdW1N5bWJvbC5pdGVyYXRvcl0oKSkpIDogdW5kZWZpbmVkLFxuXHQnJCAlSlNPTiUnOiBKU09OLFxuXHQnJCAlSlNPTlBhcnNlJSc6IEpTT04ucGFyc2UsXG5cdCckICVNYXAlJzogdHlwZW9mIE1hcCA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBNYXAsXG5cdCckICVNYXBJdGVyYXRvclByb3RvdHlwZSUnOiB0eXBlb2YgTWFwID09PSAndW5kZWZpbmVkJyB8fCAhaGFzU3ltYm9scyA/IHVuZGVmaW5lZCA6IGdldFByb3RvKG5ldyBNYXAoKVtTeW1ib2wuaXRlcmF0b3JdKCkpLFxuXHQnJCAlTWFwUHJvdG90eXBlJSc6IHR5cGVvZiBNYXAgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogTWFwLnByb3RvdHlwZSxcblx0JyQgJU1hdGglJzogTWF0aCxcblx0JyQgJU51bWJlciUnOiBOdW1iZXIsXG5cdCckICVOdW1iZXJQcm90b3R5cGUlJzogTnVtYmVyLnByb3RvdHlwZSxcblx0JyQgJU9iamVjdCUnOiBPYmplY3QsXG5cdCckICVPYmplY3RQcm90b3R5cGUlJzogT2JqZWN0LnByb3RvdHlwZSxcblx0JyQgJU9ialByb3RvX3RvU3RyaW5nJSc6IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcsXG5cdCckICVPYmpQcm90b192YWx1ZU9mJSc6IE9iamVjdC5wcm90b3R5cGUudmFsdWVPZixcblx0JyQgJXBhcnNlRmxvYXQlJzogcGFyc2VGbG9hdCxcblx0JyQgJXBhcnNlSW50JSc6IHBhcnNlSW50LFxuXHQnJCAlUHJvbWlzZSUnOiB0eXBlb2YgUHJvbWlzZSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBQcm9taXNlLFxuXHQnJCAlUHJvbWlzZVByb3RvdHlwZSUnOiB0eXBlb2YgUHJvbWlzZSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBQcm9taXNlLnByb3RvdHlwZSxcblx0JyQgJVByb21pc2VQcm90b190aGVuJSc6IHR5cGVvZiBQcm9taXNlID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFByb21pc2UucHJvdG90eXBlLnRoZW4sXG5cdCckICVQcm9taXNlX2FsbCUnOiB0eXBlb2YgUHJvbWlzZSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBQcm9taXNlLmFsbCxcblx0JyQgJVByb21pc2VfcmVqZWN0JSc6IHR5cGVvZiBQcm9taXNlID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFByb21pc2UucmVqZWN0LFxuXHQnJCAlUHJvbWlzZV9yZXNvbHZlJSc6IHR5cGVvZiBQcm9taXNlID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFByb21pc2UucmVzb2x2ZSxcblx0JyQgJVByb3h5JSc6IHR5cGVvZiBQcm94eSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBQcm94eSxcblx0JyQgJVJhbmdlRXJyb3IlJzogUmFuZ2VFcnJvcixcblx0JyQgJVJhbmdlRXJyb3JQcm90b3R5cGUlJzogUmFuZ2VFcnJvci5wcm90b3R5cGUsXG5cdCckICVSZWZlcmVuY2VFcnJvciUnOiBSZWZlcmVuY2VFcnJvcixcblx0JyQgJVJlZmVyZW5jZUVycm9yUHJvdG90eXBlJSc6IFJlZmVyZW5jZUVycm9yLnByb3RvdHlwZSxcblx0JyQgJVJlZmxlY3QlJzogdHlwZW9mIFJlZmxlY3QgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogUmVmbGVjdCxcblx0JyQgJVJlZ0V4cCUnOiBSZWdFeHAsXG5cdCckICVSZWdFeHBQcm90b3R5cGUlJzogUmVnRXhwLnByb3RvdHlwZSxcblx0JyQgJVNldCUnOiB0eXBlb2YgU2V0ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFNldCxcblx0JyQgJVNldEl0ZXJhdG9yUHJvdG90eXBlJSc6IHR5cGVvZiBTZXQgPT09ICd1bmRlZmluZWQnIHx8ICFoYXNTeW1ib2xzID8gdW5kZWZpbmVkIDogZ2V0UHJvdG8obmV3IFNldCgpW1N5bWJvbC5pdGVyYXRvcl0oKSksXG5cdCckICVTZXRQcm90b3R5cGUlJzogdHlwZW9mIFNldCA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBTZXQucHJvdG90eXBlLFxuXHQnJCAlU2hhcmVkQXJyYXlCdWZmZXIlJzogdHlwZW9mIFNoYXJlZEFycmF5QnVmZmVyID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFNoYXJlZEFycmF5QnVmZmVyLFxuXHQnJCAlU2hhcmVkQXJyYXlCdWZmZXJQcm90b3R5cGUlJzogdHlwZW9mIFNoYXJlZEFycmF5QnVmZmVyID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFNoYXJlZEFycmF5QnVmZmVyLnByb3RvdHlwZSxcblx0JyQgJVN0cmluZyUnOiBTdHJpbmcsXG5cdCckICVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUnOiBoYXNTeW1ib2xzID8gZ2V0UHJvdG8oJydbU3ltYm9sLml0ZXJhdG9yXSgpKSA6IHVuZGVmaW5lZCxcblx0JyQgJVN0cmluZ1Byb3RvdHlwZSUnOiBTdHJpbmcucHJvdG90eXBlLFxuXHQnJCAlU3ltYm9sJSc6IGhhc1N5bWJvbHMgPyBTeW1ib2wgOiB1bmRlZmluZWQsXG5cdCckICVTeW1ib2xQcm90b3R5cGUlJzogaGFzU3ltYm9scyA/IFN5bWJvbC5wcm90b3R5cGUgOiB1bmRlZmluZWQsXG5cdCckICVTeW50YXhFcnJvciUnOiBTeW50YXhFcnJvcixcblx0JyQgJVN5bnRheEVycm9yUHJvdG90eXBlJSc6IFN5bnRheEVycm9yLnByb3RvdHlwZSxcblx0JyQgJVRocm93VHlwZUVycm9yJSc6IFRocm93VHlwZUVycm9yLFxuXHQnJCAlVHlwZWRBcnJheSUnOiBUeXBlZEFycmF5LFxuXHQnJCAlVHlwZWRBcnJheVByb3RvdHlwZSUnOiBUeXBlZEFycmF5ID8gVHlwZWRBcnJheS5wcm90b3R5cGUgOiB1bmRlZmluZWQsXG5cdCckICVUeXBlRXJyb3IlJzogVHlwZUVycm9yLFxuXHQnJCAlVHlwZUVycm9yUHJvdG90eXBlJSc6IFR5cGVFcnJvci5wcm90b3R5cGUsXG5cdCckICVVaW50OEFycmF5JSc6IHR5cGVvZiBVaW50OEFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFVpbnQ4QXJyYXksXG5cdCckICVVaW50OEFycmF5UHJvdG90eXBlJSc6IHR5cGVvZiBVaW50OEFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFVpbnQ4QXJyYXkucHJvdG90eXBlLFxuXHQnJCAlVWludDhDbGFtcGVkQXJyYXklJzogdHlwZW9mIFVpbnQ4Q2xhbXBlZEFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFVpbnQ4Q2xhbXBlZEFycmF5LFxuXHQnJCAlVWludDhDbGFtcGVkQXJyYXlQcm90b3R5cGUlJzogdHlwZW9mIFVpbnQ4Q2xhbXBlZEFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFVpbnQ4Q2xhbXBlZEFycmF5LnByb3RvdHlwZSxcblx0JyQgJVVpbnQxNkFycmF5JSc6IHR5cGVvZiBVaW50MTZBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBVaW50MTZBcnJheSxcblx0JyQgJVVpbnQxNkFycmF5UHJvdG90eXBlJSc6IHR5cGVvZiBVaW50MTZBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBVaW50MTZBcnJheS5wcm90b3R5cGUsXG5cdCckICVVaW50MzJBcnJheSUnOiB0eXBlb2YgVWludDMyQXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogVWludDMyQXJyYXksXG5cdCckICVVaW50MzJBcnJheVByb3RvdHlwZSUnOiB0eXBlb2YgVWludDMyQXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogVWludDMyQXJyYXkucHJvdG90eXBlLFxuXHQnJCAlVVJJRXJyb3IlJzogVVJJRXJyb3IsXG5cdCckICVVUklFcnJvclByb3RvdHlwZSUnOiBVUklFcnJvci5wcm90b3R5cGUsXG5cdCckICVXZWFrTWFwJSc6IHR5cGVvZiBXZWFrTWFwID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFdlYWtNYXAsXG5cdCckICVXZWFrTWFwUHJvdG90eXBlJSc6IHR5cGVvZiBXZWFrTWFwID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFdlYWtNYXAucHJvdG90eXBlLFxuXHQnJCAlV2Vha1NldCUnOiB0eXBlb2YgV2Vha1NldCA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBXZWFrU2V0LFxuXHQnJCAlV2Vha1NldFByb3RvdHlwZSUnOiB0eXBlb2YgV2Vha1NldCA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBXZWFrU2V0LnByb3RvdHlwZVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBHZXRJbnRyaW5zaWMobmFtZSwgYWxsb3dNaXNzaW5nKSB7XG5cdGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSAmJiB0eXBlb2YgYWxsb3dNaXNzaW5nICE9PSAnYm9vbGVhbicpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdcImFsbG93TWlzc2luZ1wiIGFyZ3VtZW50IG11c3QgYmUgYSBib29sZWFuJyk7XG5cdH1cblxuXHR2YXIga2V5ID0gJyQgJyArIG5hbWU7XG5cdGlmICghKGtleSBpbiBJTlRSSU5TSUNTKSkge1xuXHRcdHRocm93IG5ldyBTeW50YXhFcnJvcignaW50cmluc2ljICcgKyBuYW1lICsgJyBkb2VzIG5vdCBleGlzdCEnKTtcblx0fVxuXG5cdC8vIGlzdGFuYnVsIGlnbm9yZSBpZiAvLyBob3BlZnVsbHkgdGhpcyBpcyBpbXBvc3NpYmxlIHRvIHRlc3QgOi0pXG5cdGlmICh0eXBlb2YgSU5UUklOU0lDU1trZXldID09PSAndW5kZWZpbmVkJyAmJiAhYWxsb3dNaXNzaW5nKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignaW50cmluc2ljICcgKyBuYW1lICsgJyBleGlzdHMsIGJ1dCBpcyBub3QgYXZhaWxhYmxlLiBQbGVhc2UgZmlsZSBhbiBpc3N1ZSEnKTtcblx0fVxuXHRyZXR1cm4gSU5UUklOU0lDU1trZXldO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy1hYnN0cmFjdC9HZXRJbnRyaW5zaWMuanNcbi8vIG1vZHVsZSBpZCA9IDU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIEdldEludHJpbnNpYyA9IHJlcXVpcmUoJy4uL0dldEludHJpbnNpYycpO1xuXG52YXIgJFR5cGVFcnJvciA9IEdldEludHJpbnNpYygnJVR5cGVFcnJvciUnKTtcbnZhciAkU3ludGF4RXJyb3IgPSBHZXRJbnRyaW5zaWMoJyVTeW50YXhFcnJvciUnKTtcblxudmFyIGhhcyA9IHJlcXVpcmUoJ2hhcycpO1xuXG52YXIgcHJlZGljYXRlcyA9IHtcbiAgLy8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLXByb3BlcnR5LWRlc2NyaXB0b3Itc3BlY2lmaWNhdGlvbi10eXBlXG4gICdQcm9wZXJ0eSBEZXNjcmlwdG9yJzogZnVuY3Rpb24gaXNQcm9wZXJ0eURlc2NyaXB0b3IoRVMsIERlc2MpIHtcbiAgICBpZiAoRVMuVHlwZShEZXNjKSAhPT0gJ09iamVjdCcpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFyIGFsbG93ZWQgPSB7XG4gICAgICAnW1tDb25maWd1cmFibGVdXSc6IHRydWUsXG4gICAgICAnW1tFbnVtZXJhYmxlXV0nOiB0cnVlLFxuICAgICAgJ1tbR2V0XV0nOiB0cnVlLFxuICAgICAgJ1tbU2V0XV0nOiB0cnVlLFxuICAgICAgJ1tbVmFsdWVdXSc6IHRydWUsXG4gICAgICAnW1tXcml0YWJsZV1dJzogdHJ1ZVxuICAgIH07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gRGVzYykgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICBpZiAoaGFzKERlc2MsIGtleSkgJiYgIWFsbG93ZWRba2V5XSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGlzRGF0YSA9IGhhcyhEZXNjLCAnW1tWYWx1ZV1dJyk7XG4gICAgdmFyIElzQWNjZXNzb3IgPSBoYXMoRGVzYywgJ1tbR2V0XV0nKSB8fCBoYXMoRGVzYywgJ1tbU2V0XV0nKTtcbiAgICBpZiAoaXNEYXRhICYmIElzQWNjZXNzb3IpIHtcbiAgICAgIHRocm93IG5ldyAkVHlwZUVycm9yKCdQcm9wZXJ0eSBEZXNjcmlwdG9ycyBtYXkgbm90IGJlIGJvdGggYWNjZXNzb3IgYW5kIGRhdGEgZGVzY3JpcHRvcnMnKTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYXNzZXJ0UmVjb3JkKEVTLCByZWNvcmRUeXBlLCBhcmd1bWVudE5hbWUsIHZhbHVlKSB7XG4gIHZhciBwcmVkaWNhdGUgPSBwcmVkaWNhdGVzW3JlY29yZFR5cGVdO1xuICBpZiAodHlwZW9mIHByZWRpY2F0ZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyAkU3ludGF4RXJyb3IoJ3Vua25vd24gcmVjb3JkIHR5cGU6ICcgKyByZWNvcmRUeXBlKTtcbiAgfVxuICBpZiAoIXByZWRpY2F0ZShFUywgdmFsdWUpKSB7XG4gICAgdGhyb3cgbmV3ICRUeXBlRXJyb3IoYXJndW1lbnROYW1lICsgJyBtdXN0IGJlIGEgJyArIHJlY29yZFR5cGUpO1xuICB9XG4gIGNvbnNvbGUubG9nKHByZWRpY2F0ZShFUywgdmFsdWUpLCB2YWx1ZSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VzLWFic3RyYWN0L2hlbHBlcnMvYXNzZXJ0UmVjb3JkLmpzXG4vLyBtb2R1bGUgaWQgPSA1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IE51bWJlci5pc05hTiB8fCBmdW5jdGlvbiBpc05hTihhKSB7XG5cdHJldHVybiBhICE9PSBhO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy1hYnN0cmFjdC9oZWxwZXJzL2lzTmFOLmpzXG4vLyBtb2R1bGUgaWQgPSA1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgJGlzTmFOID0gTnVtYmVyLmlzTmFOIHx8IGZ1bmN0aW9uIChhKSB7IHJldHVybiBhICE9PSBhOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE51bWJlci5pc0Zpbml0ZSB8fCBmdW5jdGlvbiAoeCkgeyByZXR1cm4gdHlwZW9mIHggPT09ICdudW1iZXInICYmICEkaXNOYU4oeCkgJiYgeCAhPT0gSW5maW5pdHkgJiYgeCAhPT0gLUluZmluaXR5OyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VzLWFic3RyYWN0L2hlbHBlcnMvaXNGaW5pdGUuanNcbi8vIG1vZHVsZSBpZCA9IDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiaW5kID0gcmVxdWlyZSgnZnVuY3Rpb24tYmluZCcpO1xudmFyIGhhcyA9IGJpbmQuY2FsbChGdW5jdGlvbi5jYWxsLCBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxudmFyICRhc3NpZ24gPSBPYmplY3QuYXNzaWduO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSkge1xuXHRpZiAoJGFzc2lnbikge1xuXHRcdHJldHVybiAkYXNzaWduKHRhcmdldCwgc291cmNlKTtcblx0fVxuXG5cdGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcblx0XHRpZiAoaGFzKHNvdXJjZSwga2V5KSkge1xuXHRcdFx0dGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHRhcmdldDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZXMtYWJzdHJhY3QvaGVscGVycy9hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2lnbihudW1iZXIpIHtcblx0cmV0dXJuIG51bWJlciA+PSAwID8gMSA6IC0xO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy1hYnN0cmFjdC9oZWxwZXJzL3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbW9kKG51bWJlciwgbW9kdWxvKSB7XG5cdHZhciByZW1haW4gPSBudW1iZXIgJSBtb2R1bG87XG5cdHJldHVybiBNYXRoLmZsb29yKHJlbWFpbiA+PSAwID8gcmVtYWluIDogcmVtYWluICsgbW9kdWxvKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZXMtYWJzdHJhY3QvaGVscGVycy9tb2QuanNcbi8vIG1vZHVsZSBpZCA9IDYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNQcmltaXRpdmUodmFsdWUpIHtcblx0cmV0dXJuIHZhbHVlID09PSBudWxsIHx8ICh0eXBlb2YgdmFsdWUgIT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0Jyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VzLWFic3RyYWN0L2hlbHBlcnMvaXNQcmltaXRpdmUuanNcbi8vIG1vZHVsZSBpZCA9IDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIEdldEludHJpbnNpYyA9IHJlcXVpcmUoJy4vR2V0SW50cmluc2ljJyk7XG5cbnZhciAkT2JqZWN0ID0gR2V0SW50cmluc2ljKCclT2JqZWN0JScpO1xudmFyICRUeXBlRXJyb3IgPSBHZXRJbnRyaW5zaWMoJyVUeXBlRXJyb3IlJyk7XG52YXIgJFN0cmluZyA9IEdldEludHJpbnNpYygnJVN0cmluZyUnKTtcblxudmFyIGFzc2VydFJlY29yZCA9IHJlcXVpcmUoJy4vaGVscGVycy9hc3NlcnRSZWNvcmQnKTtcbnZhciAkaXNOYU4gPSByZXF1aXJlKCcuL2hlbHBlcnMvaXNOYU4nKTtcbnZhciAkaXNGaW5pdGUgPSByZXF1aXJlKCcuL2hlbHBlcnMvaXNGaW5pdGUnKTtcblxudmFyIHNpZ24gPSByZXF1aXJlKCcuL2hlbHBlcnMvc2lnbicpO1xudmFyIG1vZCA9IHJlcXVpcmUoJy4vaGVscGVycy9tb2QnKTtcblxudmFyIElzQ2FsbGFibGUgPSByZXF1aXJlKCdpcy1jYWxsYWJsZScpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnZXMtdG8tcHJpbWl0aXZlL2VzNScpO1xuXG52YXIgaGFzID0gcmVxdWlyZSgnaGFzJyk7XG5cbi8vIGh0dHBzOi8vZXM1LmdpdGh1Yi5pby8jeDlcbnZhciBFUzUgPSB7XG5cdFRvUHJpbWl0aXZlOiB0b1ByaW1pdGl2ZSxcblxuXHRUb0Jvb2xlYW46IGZ1bmN0aW9uIFRvQm9vbGVhbih2YWx1ZSkge1xuXHRcdHJldHVybiAhIXZhbHVlO1xuXHR9LFxuXHRUb051bWJlcjogZnVuY3Rpb24gVG9OdW1iZXIodmFsdWUpIHtcblx0XHRyZXR1cm4gK3ZhbHVlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWltcGxpY2l0LWNvZXJjaW9uXG5cdH0sXG5cdFRvSW50ZWdlcjogZnVuY3Rpb24gVG9JbnRlZ2VyKHZhbHVlKSB7XG5cdFx0dmFyIG51bWJlciA9IHRoaXMuVG9OdW1iZXIodmFsdWUpO1xuXHRcdGlmICgkaXNOYU4obnVtYmVyKSkgeyByZXR1cm4gMDsgfVxuXHRcdGlmIChudW1iZXIgPT09IDAgfHwgISRpc0Zpbml0ZShudW1iZXIpKSB7IHJldHVybiBudW1iZXI7IH1cblx0XHRyZXR1cm4gc2lnbihudW1iZXIpICogTWF0aC5mbG9vcihNYXRoLmFicyhudW1iZXIpKTtcblx0fSxcblx0VG9JbnQzMjogZnVuY3Rpb24gVG9JbnQzMih4KSB7XG5cdFx0cmV0dXJuIHRoaXMuVG9OdW1iZXIoeCkgPj4gMDtcblx0fSxcblx0VG9VaW50MzI6IGZ1bmN0aW9uIFRvVWludDMyKHgpIHtcblx0XHRyZXR1cm4gdGhpcy5Ub051bWJlcih4KSA+Pj4gMDtcblx0fSxcblx0VG9VaW50MTY6IGZ1bmN0aW9uIFRvVWludDE2KHZhbHVlKSB7XG5cdFx0dmFyIG51bWJlciA9IHRoaXMuVG9OdW1iZXIodmFsdWUpO1xuXHRcdGlmICgkaXNOYU4obnVtYmVyKSB8fCBudW1iZXIgPT09IDAgfHwgISRpc0Zpbml0ZShudW1iZXIpKSB7IHJldHVybiAwOyB9XG5cdFx0dmFyIHBvc0ludCA9IHNpZ24obnVtYmVyKSAqIE1hdGguZmxvb3IoTWF0aC5hYnMobnVtYmVyKSk7XG5cdFx0cmV0dXJuIG1vZChwb3NJbnQsIDB4MTAwMDApO1xuXHR9LFxuXHRUb1N0cmluZzogZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUpIHtcblx0XHRyZXR1cm4gJFN0cmluZyh2YWx1ZSk7XG5cdH0sXG5cdFRvT2JqZWN0OiBmdW5jdGlvbiBUb09iamVjdCh2YWx1ZSkge1xuXHRcdHRoaXMuQ2hlY2tPYmplY3RDb2VyY2libGUodmFsdWUpO1xuXHRcdHJldHVybiAkT2JqZWN0KHZhbHVlKTtcblx0fSxcblx0Q2hlY2tPYmplY3RDb2VyY2libGU6IGZ1bmN0aW9uIENoZWNrT2JqZWN0Q29lcmNpYmxlKHZhbHVlLCBvcHRNZXNzYWdlKSB7XG5cdFx0LyoganNoaW50IGVxbnVsbDp0cnVlICovXG5cdFx0aWYgKHZhbHVlID09IG51bGwpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKG9wdE1lc3NhZ2UgfHwgJ0Nhbm5vdCBjYWxsIG1ldGhvZCBvbiAnICsgdmFsdWUpO1xuXHRcdH1cblx0XHRyZXR1cm4gdmFsdWU7XG5cdH0sXG5cdElzQ2FsbGFibGU6IElzQ2FsbGFibGUsXG5cdFNhbWVWYWx1ZTogZnVuY3Rpb24gU2FtZVZhbHVlKHgsIHkpIHtcblx0XHRpZiAoeCA9PT0geSkgeyAvLyAwID09PSAtMCwgYnV0IHRoZXkgYXJlIG5vdCBpZGVudGljYWwuXG5cdFx0XHRpZiAoeCA9PT0gMCkgeyByZXR1cm4gMSAvIHggPT09IDEgLyB5OyB9XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0cmV0dXJuICRpc05hTih4KSAmJiAkaXNOYU4oeSk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi81LjEvI3NlYy04XG5cdFR5cGU6IGZ1bmN0aW9uIFR5cGUoeCkge1xuXHRcdGlmICh4ID09PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gJ051bGwnO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIHggPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRyZXR1cm4gJ1VuZGVmaW5lZCc7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2YgeCA9PT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgeCA9PT0gJ29iamVjdCcpIHtcblx0XHRcdHJldHVybiAnT2JqZWN0Jztcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiB4ID09PSAnbnVtYmVyJykge1xuXHRcdFx0cmV0dXJuICdOdW1iZXInO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIHggPT09ICdib29sZWFuJykge1xuXHRcdFx0cmV0dXJuICdCb29sZWFuJztcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiB4ID09PSAnc3RyaW5nJykge1xuXHRcdFx0cmV0dXJuICdTdHJpbmcnO1xuXHRcdH1cblx0fSxcblxuXHQvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtcHJvcGVydHktZGVzY3JpcHRvci1zcGVjaWZpY2F0aW9uLXR5cGVcblx0SXNQcm9wZXJ0eURlc2NyaXB0b3I6IGZ1bmN0aW9uIElzUHJvcGVydHlEZXNjcmlwdG9yKERlc2MpIHtcblx0XHRpZiAodGhpcy5UeXBlKERlc2MpICE9PSAnT2JqZWN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHR2YXIgYWxsb3dlZCA9IHtcblx0XHRcdCdbW0NvbmZpZ3VyYWJsZV1dJzogdHJ1ZSxcblx0XHRcdCdbW0VudW1lcmFibGVdXSc6IHRydWUsXG5cdFx0XHQnW1tHZXRdXSc6IHRydWUsXG5cdFx0XHQnW1tTZXRdXSc6IHRydWUsXG5cdFx0XHQnW1tWYWx1ZV1dJzogdHJ1ZSxcblx0XHRcdCdbW1dyaXRhYmxlXV0nOiB0cnVlXG5cdFx0fTtcblxuXHRcdGZvciAodmFyIGtleSBpbiBEZXNjKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblx0XHRcdGlmIChoYXMoRGVzYywga2V5KSAmJiAhYWxsb3dlZFtrZXldKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR2YXIgaXNEYXRhID0gaGFzKERlc2MsICdbW1ZhbHVlXV0nKTtcblx0XHR2YXIgSXNBY2Nlc3NvciA9IGhhcyhEZXNjLCAnW1tHZXRdXScpIHx8IGhhcyhEZXNjLCAnW1tTZXRdXScpO1xuXHRcdGlmIChpc0RhdGEgJiYgSXNBY2Nlc3Nvcikge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ1Byb3BlcnR5IERlc2NyaXB0b3JzIG1heSBub3QgYmUgYm90aCBhY2Nlc3NvciBhbmQgZGF0YSBkZXNjcmlwdG9ycycpO1xuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSxcblxuXHQvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNS4xLyNzZWMtOC4xMC4xXG5cdElzQWNjZXNzb3JEZXNjcmlwdG9yOiBmdW5jdGlvbiBJc0FjY2Vzc29yRGVzY3JpcHRvcihEZXNjKSB7XG5cdFx0aWYgKHR5cGVvZiBEZXNjID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGFzc2VydFJlY29yZCh0aGlzLCAnUHJvcGVydHkgRGVzY3JpcHRvcicsICdEZXNjJywgRGVzYyk7XG5cblx0XHRpZiAoIWhhcyhEZXNjLCAnW1tHZXRdXScpICYmICFoYXMoRGVzYywgJ1tbU2V0XV0nKSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi81LjEvI3NlYy04LjEwLjJcblx0SXNEYXRhRGVzY3JpcHRvcjogZnVuY3Rpb24gSXNEYXRhRGVzY3JpcHRvcihEZXNjKSB7XG5cdFx0aWYgKHR5cGVvZiBEZXNjID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGFzc2VydFJlY29yZCh0aGlzLCAnUHJvcGVydHkgRGVzY3JpcHRvcicsICdEZXNjJywgRGVzYyk7XG5cblx0XHRpZiAoIWhhcyhEZXNjLCAnW1tWYWx1ZV1dJykgJiYgIWhhcyhEZXNjLCAnW1tXcml0YWJsZV1dJykpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSxcblxuXHQvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNS4xLyNzZWMtOC4xMC4zXG5cdElzR2VuZXJpY0Rlc2NyaXB0b3I6IGZ1bmN0aW9uIElzR2VuZXJpY0Rlc2NyaXB0b3IoRGVzYykge1xuXHRcdGlmICh0eXBlb2YgRGVzYyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRhc3NlcnRSZWNvcmQodGhpcywgJ1Byb3BlcnR5IERlc2NyaXB0b3InLCAnRGVzYycsIERlc2MpO1xuXG5cdFx0aWYgKCF0aGlzLklzQWNjZXNzb3JEZXNjcmlwdG9yKERlc2MpICYmICF0aGlzLklzRGF0YURlc2NyaXB0b3IoRGVzYykpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fSxcblxuXHQvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNS4xLyNzZWMtOC4xMC40XG5cdEZyb21Qcm9wZXJ0eURlc2NyaXB0b3I6IGZ1bmN0aW9uIEZyb21Qcm9wZXJ0eURlc2NyaXB0b3IoRGVzYykge1xuXHRcdGlmICh0eXBlb2YgRGVzYyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdHJldHVybiBEZXNjO1xuXHRcdH1cblxuXHRcdGFzc2VydFJlY29yZCh0aGlzLCAnUHJvcGVydHkgRGVzY3JpcHRvcicsICdEZXNjJywgRGVzYyk7XG5cblx0XHRpZiAodGhpcy5Jc0RhdGFEZXNjcmlwdG9yKERlc2MpKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHR2YWx1ZTogRGVzY1snW1tWYWx1ZV1dJ10sXG5cdFx0XHRcdHdyaXRhYmxlOiAhIURlc2NbJ1tbV3JpdGFibGVdXSddLFxuXHRcdFx0XHRlbnVtZXJhYmxlOiAhIURlc2NbJ1tbRW51bWVyYWJsZV1dJ10sXG5cdFx0XHRcdGNvbmZpZ3VyYWJsZTogISFEZXNjWydbW0NvbmZpZ3VyYWJsZV1dJ11cblx0XHRcdH07XG5cdFx0fSBlbHNlIGlmICh0aGlzLklzQWNjZXNzb3JEZXNjcmlwdG9yKERlc2MpKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRnZXQ6IERlc2NbJ1tbR2V0XV0nXSxcblx0XHRcdFx0c2V0OiBEZXNjWydbW1NldF1dJ10sXG5cdFx0XHRcdGVudW1lcmFibGU6ICEhRGVzY1snW1tFbnVtZXJhYmxlXV0nXSxcblx0XHRcdFx0Y29uZmlndXJhYmxlOiAhIURlc2NbJ1tbQ29uZmlndXJhYmxlXV0nXVxuXHRcdFx0fTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Zyb21Qcm9wZXJ0eURlc2NyaXB0b3IgbXVzdCBiZSBjYWxsZWQgd2l0aCBhIGZ1bGx5IHBvcHVsYXRlZCBQcm9wZXJ0eSBEZXNjcmlwdG9yJyk7XG5cdFx0fVxuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi81LjEvI3NlYy04LjEwLjVcblx0VG9Qcm9wZXJ0eURlc2NyaXB0b3I6IGZ1bmN0aW9uIFRvUHJvcGVydHlEZXNjcmlwdG9yKE9iaikge1xuXHRcdGlmICh0aGlzLlR5cGUoT2JqKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdUb1Byb3BlcnR5RGVzY3JpcHRvciByZXF1aXJlcyBhbiBvYmplY3QnKTtcblx0XHR9XG5cblx0XHR2YXIgZGVzYyA9IHt9O1xuXHRcdGlmIChoYXMoT2JqLCAnZW51bWVyYWJsZScpKSB7XG5cdFx0XHRkZXNjWydbW0VudW1lcmFibGVdXSddID0gdGhpcy5Ub0Jvb2xlYW4oT2JqLmVudW1lcmFibGUpO1xuXHRcdH1cblx0XHRpZiAoaGFzKE9iaiwgJ2NvbmZpZ3VyYWJsZScpKSB7XG5cdFx0XHRkZXNjWydbW0NvbmZpZ3VyYWJsZV1dJ10gPSB0aGlzLlRvQm9vbGVhbihPYmouY29uZmlndXJhYmxlKTtcblx0XHR9XG5cdFx0aWYgKGhhcyhPYmosICd2YWx1ZScpKSB7XG5cdFx0XHRkZXNjWydbW1ZhbHVlXV0nXSA9IE9iai52YWx1ZTtcblx0XHR9XG5cdFx0aWYgKGhhcyhPYmosICd3cml0YWJsZScpKSB7XG5cdFx0XHRkZXNjWydbW1dyaXRhYmxlXV0nXSA9IHRoaXMuVG9Cb29sZWFuKE9iai53cml0YWJsZSk7XG5cdFx0fVxuXHRcdGlmIChoYXMoT2JqLCAnZ2V0JykpIHtcblx0XHRcdHZhciBnZXR0ZXIgPSBPYmouZ2V0O1xuXHRcdFx0aWYgKHR5cGVvZiBnZXR0ZXIgIT09ICd1bmRlZmluZWQnICYmICF0aGlzLklzQ2FsbGFibGUoZ2V0dGVyKSkge1xuXHRcdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdnZXR0ZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cdFx0XHR9XG5cdFx0XHRkZXNjWydbW0dldF1dJ10gPSBnZXR0ZXI7XG5cdFx0fVxuXHRcdGlmIChoYXMoT2JqLCAnc2V0JykpIHtcblx0XHRcdHZhciBzZXR0ZXIgPSBPYmouc2V0O1xuXHRcdFx0aWYgKHR5cGVvZiBzZXR0ZXIgIT09ICd1bmRlZmluZWQnICYmICF0aGlzLklzQ2FsbGFibGUoc2V0dGVyKSkge1xuXHRcdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignc2V0dGVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXHRcdFx0fVxuXHRcdFx0ZGVzY1snW1tTZXRdXSddID0gc2V0dGVyO1xuXHRcdH1cblxuXHRcdGlmICgoaGFzKGRlc2MsICdbW0dldF1dJykgfHwgaGFzKGRlc2MsICdbW1NldF1dJykpICYmIChoYXMoZGVzYywgJ1tbVmFsdWVdXScpIHx8IGhhcyhkZXNjLCAnW1tXcml0YWJsZV1dJykpKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignSW52YWxpZCBwcm9wZXJ0eSBkZXNjcmlwdG9yLiBDYW5ub3QgYm90aCBzcGVjaWZ5IGFjY2Vzc29ycyBhbmQgYSB2YWx1ZSBvciB3cml0YWJsZSBhdHRyaWJ1dGUnKTtcblx0XHR9XG5cdFx0cmV0dXJuIGRlc2M7XG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRVM1O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VzLWFic3RyYWN0L2VzNS5qc1xuLy8gbW9kdWxlIGlkID0gNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG52YXIgaXNQcmltaXRpdmUgPSByZXF1aXJlKCcuL2hlbHBlcnMvaXNQcmltaXRpdmUnKTtcblxudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCdpcy1jYWxsYWJsZScpO1xuXG4vLyBodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi81LjEvI3NlYy04LjEyLjhcbnZhciBFUzVpbnRlcm5hbFNsb3RzID0ge1xuXHQnW1tEZWZhdWx0VmFsdWVdXSc6IGZ1bmN0aW9uIChPKSB7XG5cdFx0dmFyIGFjdHVhbEhpbnQ7XG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG5cdFx0XHRhY3R1YWxIaW50ID0gYXJndW1lbnRzWzFdO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRhY3R1YWxIaW50ID0gdG9TdHIuY2FsbChPKSA9PT0gJ1tvYmplY3QgRGF0ZV0nID8gU3RyaW5nIDogTnVtYmVyO1xuXHRcdH1cblxuXHRcdGlmIChhY3R1YWxIaW50ID09PSBTdHJpbmcgfHwgYWN0dWFsSGludCA9PT0gTnVtYmVyKSB7XG5cdFx0XHR2YXIgbWV0aG9kcyA9IGFjdHVhbEhpbnQgPT09IFN0cmluZyA/IFsndG9TdHJpbmcnLCAndmFsdWVPZiddIDogWyd2YWx1ZU9mJywgJ3RvU3RyaW5nJ107XG5cdFx0XHR2YXIgdmFsdWUsIGk7XG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgbWV0aG9kcy5sZW5ndGg7ICsraSkge1xuXHRcdFx0XHRpZiAoaXNDYWxsYWJsZShPW21ldGhvZHNbaV1dKSkge1xuXHRcdFx0XHRcdHZhbHVlID0gT1ttZXRob2RzW2ldXSgpO1xuXHRcdFx0XHRcdGlmIChpc1ByaW1pdGl2ZSh2YWx1ZSkpIHtcblx0XHRcdFx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ05vIGRlZmF1bHQgdmFsdWUnKTtcblx0XHR9XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignaW52YWxpZCBbW0RlZmF1bHRWYWx1ZV1dIGhpbnQgc3VwcGxpZWQnKTtcblx0fVxufTtcblxuLy8gaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNS4xLyNzZWMtOS4xXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIFRvUHJpbWl0aXZlKGlucHV0KSB7XG5cdGlmIChpc1ByaW1pdGl2ZShpbnB1dCkpIHtcblx0XHRyZXR1cm4gaW5wdXQ7XG5cdH1cblx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG5cdFx0cmV0dXJuIEVTNWludGVybmFsU2xvdHNbJ1tbRGVmYXVsdFZhbHVlXV0nXShpbnB1dCwgYXJndW1lbnRzWzFdKTtcblx0fVxuXHRyZXR1cm4gRVM1aW50ZXJuYWxTbG90c1snW1tEZWZhdWx0VmFsdWVdXSddKGlucHV0KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZXMtdG8tcHJpbWl0aXZlL2VzNS5qc1xuLy8gbW9kdWxlIGlkID0gNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaGFzID0gcmVxdWlyZSgnaGFzJyk7XG52YXIgcmVnZXhFeGVjID0gUmVnRXhwLnByb3RvdHlwZS5leGVjO1xudmFyIGdPUEQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG52YXIgdHJ5UmVnZXhFeGVjQ2FsbCA9IGZ1bmN0aW9uIHRyeVJlZ2V4RXhlYyh2YWx1ZSkge1xuXHR0cnkge1xuXHRcdHZhciBsYXN0SW5kZXggPSB2YWx1ZS5sYXN0SW5kZXg7XG5cdFx0dmFsdWUubGFzdEluZGV4ID0gMDtcblxuXHRcdHJlZ2V4RXhlYy5jYWxsKHZhbHVlKTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fSBmaW5hbGx5IHtcblx0XHR2YWx1ZS5sYXN0SW5kZXggPSBsYXN0SW5kZXg7XG5cdH1cbn07XG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIHJlZ2V4Q2xhc3MgPSAnW29iamVjdCBSZWdFeHBdJztcbnZhciBoYXNUb1N0cmluZ1RhZyA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIFN5bWJvbC50b1N0cmluZ1RhZyA9PT0gJ3N5bWJvbCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNSZWdleCh2YWx1ZSkge1xuXHRpZiAoIXZhbHVlIHx8IHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0aWYgKCFoYXNUb1N0cmluZ1RhZykge1xuXHRcdHJldHVybiB0b1N0ci5jYWxsKHZhbHVlKSA9PT0gcmVnZXhDbGFzcztcblx0fVxuXG5cdHZhciBkZXNjcmlwdG9yID0gZ09QRCh2YWx1ZSwgJ2xhc3RJbmRleCcpO1xuXHR2YXIgaGFzTGFzdEluZGV4RGF0YVByb3BlcnR5ID0gZGVzY3JpcHRvciAmJiBoYXMoZGVzY3JpcHRvciwgJ3ZhbHVlJyk7XG5cdGlmICghaGFzTGFzdEluZGV4RGF0YVByb3BlcnR5KSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0cmV0dXJuIHRyeVJlZ2V4RXhlY0NhbGwodmFsdWUpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9pcy1yZWdleC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgRVMgPSByZXF1aXJlKCdlcy1hYnN0cmFjdC9lczYnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBmaW5kKHByZWRpY2F0ZSkge1xuXHR2YXIgbGlzdCA9IEVTLlRvT2JqZWN0KHRoaXMpO1xuXHR2YXIgbGVuZ3RoID0gRVMuVG9MZW5ndGgobGlzdC5sZW5ndGgpO1xuXHRpZiAoIUVTLklzQ2FsbGFibGUocHJlZGljYXRlKSkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0FycmF5I2ZpbmQ6IHByZWRpY2F0ZSBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcblx0fVxuXHRpZiAobGVuZ3RoID09PSAwKSB7XG5cdFx0cmV0dXJuIHZvaWQgMDtcblx0fVxuXHR2YXIgdGhpc0FyZztcblx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAwKSB7XG5cdFx0dGhpc0FyZyA9IGFyZ3VtZW50c1sxXTtcblx0fVxuXG5cdGZvciAodmFyIGkgPSAwLCB2YWx1ZTsgaSA8IGxlbmd0aDsgaSsrKSB7XG5cdFx0dmFsdWUgPSBsaXN0W2ldO1xuXHRcdC8vIGlubGluZWQgZm9yIHBlcmZvcm1hbmNlOiBpZiAoRVMuQ2FsbChwcmVkaWNhdGUsIHRoaXNBcmcsIFt2YWx1ZSwgaSwgbGlzdF0pKSB7XG5cdFx0aWYgKHByZWRpY2F0ZS5hcHBseSh0aGlzQXJnLCBbdmFsdWUsIGksIGxpc3RdKSkge1xuXHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gdm9pZCAwO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9hcnJheS5wcm90b3R5cGUuZmluZC9pbXBsZW1lbnRhdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdldFBvbHlmaWxsKCkge1xuXHQvLyBEZXRlY3QgaWYgYW4gaW1wbGVtZW50YXRpb24gZXhpc3RzXG5cdC8vIERldGVjdCBlYXJseSBpbXBsZW1lbnRhdGlvbnMgd2hpY2ggc2tpcHBlZCBob2xlcyBpbiBzcGFyc2UgYXJyYXlzXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zcGFyc2UtYXJyYXlzXG5cdHZhciBpbXBsZW1lbnRlZCA9IEFycmF5LnByb3RvdHlwZS5maW5kICYmIFssIDFdLmZpbmQoZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9KSAhPT0gMTtcblxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZ2xvYmFsLXJlcXVpcmVcblx0cmV0dXJuIGltcGxlbWVudGVkID8gQXJyYXkucHJvdG90eXBlLmZpbmQgOiByZXF1aXJlKCcuL2ltcGxlbWVudGF0aW9uJyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2FycmF5LnByb3RvdHlwZS5maW5kL3BvbHlmaWxsLmpzXG4vLyBtb2R1bGUgaWQgPSA2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBkZWZpbmUgPSByZXF1aXJlKCdkZWZpbmUtcHJvcGVydGllcycpO1xudmFyIGdldFBvbHlmaWxsID0gcmVxdWlyZSgnLi9wb2x5ZmlsbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNoaW1BcnJheVByb3RvdHlwZUZpbmQoKSB7XG5cdHZhciBwb2x5ZmlsbCA9IGdldFBvbHlmaWxsKCk7XG5cblx0ZGVmaW5lKEFycmF5LnByb3RvdHlwZSwgeyBmaW5kOiBwb2x5ZmlsbCB9LCB7XG5cdFx0ZmluZDogZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIEFycmF5LnByb3RvdHlwZS5maW5kICE9PSBwb2x5ZmlsbDtcblx0XHR9XG5cdH0pO1xuXG5cdHJldHVybiBwb2x5ZmlsbDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYXJyYXkucHJvdG90eXBlLmZpbmQvc2hpbS5qc1xuLy8gbW9kdWxlIGlkID0gNjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDE3OTIgMTc5MlxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tYXJyb3dzLWFsdFxcXCI+PHRpdGxlPmFycm93cy1hbHQ8L3RpdGxlPjxwYXRoIGQ9XFxcIk0xNDExIDU0MWwtMzU1IDM1NSAzNTUgMzU1IDE0NC0xNDRxMjktMzEgNzAtMTQgMzkgMTcgMzkgNTl2NDQ4cTAgMjYtMTkgNDV0LTQ1IDE5aC00NDhxLTQyIDAtNTktNDAtMTctMzkgMTQtNjlsMTQ0LTE0NC0zNTUtMzU1LTM1NSAzNTUgMTQ0IDE0NHEzMSAzMCAxNCA2OS0xNyA0MC01OSA0MGgtNDQ4cS0yNiAwLTQ1LTE5dC0xOS00NXYtNDQ4cTAtNDIgNDAtNTkgMzktMTcgNjkgMTRsMTQ0IDE0NCAzNTUtMzU1LTM1NS0zNTUtMTQ0IDE0NHEtMTkgMTktNDUgMTktMTIgMC0yNC01LTQwLTE3LTQwLTU5di00NDhxMC0yNiAxOS00NXQ0NS0xOWg0NDhxNDIgMCA1OSA0MCAxNyAzOS0xNCA2OWwtMTQ0IDE0NCAzNTUgMzU1IDM1NS0zNTUtMTQ0LTE0NHEtMzEtMzAtMTQtNjkgMTctNDAgNTktNDBoNDQ4cTI2IDAgNDUgMTl0MTkgNDV2NDQ4cTAgNDItMzkgNTktMTMgNS0yNSA1LTI2IDAtNDUtMTl6XFxcIi8+PC9zeW1ib2w+PHN5bWJvbCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNzkyIDE3OTJcXFwiIGlkPVxcXCJsZXBsYXllci1pY29uLWJhY2t3YXJkXFxcIj48dGl0bGU+YmFja3dhcmQ8L3RpdGxlPjxwYXRoIGQ9XFxcIk0xNjgzIDE0MXExOS0xOSAzMi0xM3QxMyAzMnYxNDcycTAgMjYtMTMgMzJ0LTMyLTEzbC03MTAtNzEwcS04LTktMTMtMTl2NzEwcTAgMjYtMTMgMzJ0LTMyLTEzbC03MTAtNzEwcS0xOS0xOS0xOS00NXQxOS00NWw3MTAtNzEwcTE5LTE5IDMyLTEzdDEzIDMydjcxMHE1LTExIDEzLTE5elxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi1idWxsc2V5ZVxcXCI+PHRpdGxlPmJ1bGxzZXllPC90aXRsZT48cGF0aCBkPVxcXCJNMTE1MiA4OTZxMCAxMDYtNzUgMTgxdC0xODEgNzUtMTgxLTc1LTc1LTE4MSA3NS0xODEgMTgxLTc1IDE4MSA3NSA3NSAxODF6bTEyOCAwcTAtMTU5LTExMi41LTI3MS41dC0yNzEuNS0xMTIuNS0yNzEuNSAxMTIuNS0xMTIuNSAyNzEuNSAxMTIuNSAyNzEuNSAyNzEuNSAxMTIuNSAyNzEuNS0xMTIuNSAxMTIuNS0yNzEuNXptMTI4IDBxMCAyMTItMTUwIDM2MnQtMzYyIDE1MC0zNjItMTUwLTE1MC0zNjIgMTUwLTM2MiAzNjItMTUwIDM2MiAxNTAgMTUwIDM2MnptMTI4IDBxMC0xMzAtNTEtMjQ4LjV0LTEzNi41LTIwNC0yMDQtMTM2LjUtMjQ4LjUtNTEtMjQ4LjUgNTEtMjA0IDEzNi41LTEzNi41IDIwNC01MSAyNDguNSA1MSAyNDguNSAxMzYuNSAyMDQgMjA0IDEzNi41IDI0OC41IDUxIDI0OC41LTUxIDIwNC0xMzYuNSAxMzYuNS0yMDQgNTEtMjQ4LjV6bTEyOCAwcTAgMjA5LTEwMyAzODUuNXQtMjc5LjUgMjc5LjUtMzg1LjUgMTAzLTM4NS41LTEwMy0yNzkuNS0yNzkuNS0xMDMtMzg1LjUgMTAzLTM4NS41IDI3OS41LTI3OS41IDM4NS41LTEwMyAzODUuNSAxMDMgMjc5LjUgMjc5LjUgMTAzIDM4NS41elxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgNDAwIDM4MFxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tY2F0XFxcIj48dGl0bGU+Y2F0PC90aXRsZT4gPHBhdGggZD1cXFwiTSAxNTEuMzQ5MDQsMzA3LjIwNDU1IEwgMjY0LjM0OTA0LDMwNy4yMDQ1NSBDIDI2NC4zNDkwNCwyOTEuMTQwOTYgMjYzLjIwMjEsMjg3Ljk1NDU1IDIzNi41OTkwNCwyODcuOTU0NTUgQyAyNDAuODQ5MDQsMjc1LjIwNDU1IDI1OC4xMjQyNCwyNDQuMzU4MDggMjY3LjcyNDA0LDI0NC4zNTgwOCBDIDI3Ni4yMTcwNywyNDQuMzU4MDggMjg2LjM0OTA0LDI0NC44MjU5MiAyODYuMzQ5MDQsMjY0LjIwNDU1IEMgMjg2LjM0OTA0LDI4Ni4yMDQ1NSAzMjMuMzcxNzEsMzIxLjY3NTQ3IDMzMi4zNDkwNCwzMDcuMjA0NTUgQyAzNDUuNzI3NjksMjg1LjYzODk3IDMwOS4zNDkwNCwyOTIuMjE1MTQgMzA5LjM0OTA0LDI0MC4yMDQ1NSBDIDMwOS4zNDkwNCwxNjkuMDUxMzUgMzUwLjg3NDE3LDE3OS4xODA3MSAzNTAuODc0MTcsMTM5LjIwNDU1IEMgMzUwLjg3NDE3LDExOS4yMDQ1NSAzNDUuMzQ5MDQsMTE2LjUwMzc0IDM0NS4zNDkwNCwxMDIuMjA0NTUgQyAzNDUuMzQ5MDQsODMuMzA2OTUgMzYxLjk5NzE3LDg0LjQwMzU3NyAzNTguNzU4MDUsNjguNzM0ODc5IEMgMzU2LjUyMDYxLDU3LjkxMTY1NiAzNTQuNzY5NjIsNDkuMjMxOTkgMzUzLjQ2NTE2LDM2LjE0Mzg4OSBDIDM1Mi41Mzk1OSwyNi44NTczMDUgMzUyLjI0NDUyLDE2Ljk1OTM5OCAzNDIuNTk4NTUsMTcuMzU3MzgyIEMgMzMxLjI2NTA1LDE3LjgyNDk5MiAzMjYuOTY1NDksMzcuNzc0MTkgMzA5LjM0OTA0LDM5LjIwNDU0OSBDIDI5MS43Njg1MSw0MC42MzE5OTEgMjc2Ljc3ODM0LDI0LjIzODAyOCAyNjkuOTc0MDQsMjYuNTc5NTQ5IEMgMjYzLjIyNzA5LDI4LjkwMTMzNCAyNjUuMzQ5MDQsNDcuMjA0NTQ5IDI2OS4zNDkwNCw2MC4yMDQ1NDkgQyAyNzUuNjM1ODgsODAuNjM2NzcxIDI4OS4zNDkwNCwxMDcuMjA0NTUgMjY0LjM0OTA0LDExMS4yMDQ1NSBDIDIzOS4zNDkwNCwxMTUuMjA0NTUgMTk2LjM0OTA0LDExOS4yMDQ1NSAxNjUuMzQ5MDQsMTYwLjIwNDU1IEMgMTM0LjM0OTA0LDIwMS4yMDQ1NSAxMzUuNDkzNDIsMjQ5LjMyMTIgMTIzLjM0OTA0LDI2NC4yMDQ1NSBDIDgyLjU5MDY5NiwzMTQuMTU1MjkgNDAuODIzOTE5LDI5My42NDYyNSA0MC44MjM5MTksMzM1LjIwNDU1IEMgNDAuODIzOTE5LDM1My44MTAxOSA3Mi4zNDkwNDUsMzY3LjIwNDU1IDc3LjM0OTA0NSwzNjEuMjA0NTUgQyA4Mi4zNDkwNDUsMzU1LjIwNDU1IDM0Ljg2Mzc2NCwzMzcuMzI1ODcgODcuOTk1NDkyLDMxNi4yMDQ1NSBDIDEzMy4zODcxMSwyOTguMTYwMTQgMTM3LjQzOTE0LDI5NC40NzY2MyAxNTEuMzQ5MDQsMzA3LjIwNDU1IHogXFxcIiBzdHlsZT1cXFwiZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjFweDtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxXFxcIi8+IDwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi1jb21tZW50aW5nLW9cXFwiPjx0aXRsZT5jb21tZW50aW5nLW88L3RpdGxlPjxwYXRoIGQ9XFxcIk02NDAgODk2cTAgNTMtMzcuNSA5MC41dC05MC41IDM3LjUtOTAuNS0zNy41LTM3LjUtOTAuNSAzNy41LTkwLjUgOTAuNS0zNy41IDkwLjUgMzcuNSAzNy41IDkwLjV6bTM4NCAwcTAgNTMtMzcuNSA5MC41dC05MC41IDM3LjUtOTAuNS0zNy41LTM3LjUtOTAuNSAzNy41LTkwLjUgOTAuNS0zNy41IDkwLjUgMzcuNSAzNy41IDkwLjV6bTM4NCAwcTAgNTMtMzcuNSA5MC41dC05MC41IDM3LjUtOTAuNS0zNy41LTM3LjUtOTAuNSAzNy41LTkwLjUgOTAuNS0zNy41IDkwLjUgMzcuNSAzNy41IDkwLjV6bS01MTItNTEycS0yMDQgMC0zODEuNSA2OS41dC0yODIgMTg3LjUtMTA0LjUgMjU1cTAgMTEyIDcxLjUgMjEzLjV0MjAxLjUgMTc1LjVsODcgNTAtMjcgOTZxLTI0IDkxLTcwIDE3MiAxNTItNjMgMjc1LTE3MWw0My0zOCA1NyA2cTY5IDggMTMwIDggMjA0IDAgMzgxLjUtNjkuNXQyODItMTg3LjUgMTA0LjUtMjU1LTEwNC41LTI1NS0yODItMTg3LjUtMzgxLjUtNjkuNXptODk2IDUxMnEwIDE3NC0xMjAgMzIxLjV0LTMyNiAyMzMtNDUwIDg1LjVxLTcwIDAtMTQ1LTgtMTk4IDE3NS00NjAgMjQyLTQ5IDE0LTExNCAyMmgtNXEtMTUgMC0yNy0xMC41dC0xNi0yNy41di0xcS0zLTQtLjUtMTJ0Mi0xMCA0LjUtOS41bDYtOSA3LTguNSA4LTlxNy04IDMxLTM0LjV0MzQuNS0zOCAzMS0zOS41IDMyLjUtNTEgMjctNTkgMjYtNzZxLTE1Ny04OS0yNDcuNS0yMjB0LTkwLjUtMjgxcTAtMTMwIDcxLTI0OC41dDE5MS0yMDQuNSAyODYtMTM2LjUgMzQ4LTUwLjUgMzQ4IDUwLjUgMjg2IDEzNi41IDE5MSAyMDQuNSA3MSAyNDguNXpcXFwiLz48L3N5bWJvbD48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDE3OTIgMTc5MlxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tZG93bmxvYWRcXFwiPjx0aXRsZT5kb3dubG9hZDwvdGl0bGU+PHBhdGggZD1cXFwiTTEzNDQgMTM0NHEwLTI2LTE5LTQ1dC00NS0xOS00NSAxOS0xOSA0NSAxOSA0NSA0NSAxOSA0NS0xOSAxOS00NXptMjU2IDBxMC0yNi0xOS00NXQtNDUtMTktNDUgMTktMTkgNDUgMTkgNDUgNDUgMTkgNDUtMTkgMTktNDV6bTEyOC0yMjR2MzIwcTAgNDAtMjggNjh0LTY4IDI4aC0xNDcycS00MCAwLTY4LTI4dC0yOC02OHYtMzIwcTAtNDAgMjgtNjh0NjgtMjhoNDY1bDEzNSAxMzZxNTggNTYgMTM2IDU2dDEzNi01NmwxMzYtMTM2aDQ2NHE0MCAwIDY4IDI4dDI4IDY4em0tMzI1LTU2OXExNyA0MS0xNCA3MGwtNDQ4IDQ0OHEtMTggMTktNDUgMTl0LTQ1LTE5bC00NDgtNDQ4cS0zMS0yOS0xNC03MCAxNy0zOSA1OS0zOWgyNTZ2LTQ0OHEwLTI2IDE5LTQ1dDQ1LTE5aDI1NnEyNiAwIDQ1IDE5dDE5IDQ1djQ0OGgyNTZxNDIgMCA1OSAzOXpcXFwiLz48L3N5bWJvbD48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDE3OTIgMTc5MlxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tZWRpdFxcXCI+PHRpdGxlPmVkaXQ8L3RpdGxlPjxwYXRoIGQ9XFxcIk04ODggMTE4NGwxMTYtMTE2LTE1Mi0xNTItMTE2IDExNnY1Nmg5NnY5Nmg1NnptNDQwLTcyMHEtMTYtMTYtMzMgMWwtMzUwIDM1MHEtMTcgMTctMSAzM3QzMy0xbDM1MC0zNTBxMTctMTcgMS0zM3ptODAgNTk0djE5MHEwIDExOS04NC41IDIwMy41dC0yMDMuNSA4NC41aC04MzJxLTExOSAwLTIwMy41LTg0LjV0LTg0LjUtMjAzLjV2LTgzMnEwLTExOSA4NC41LTIwMy41dDIwMy41LTg0LjVoODMycTYzIDAgMTE3IDI1IDE1IDcgMTggMjMgMyAxNy05IDI5bC00OSA0OXEtMTQgMTQtMzIgOC0yMy02LTQ1LTZoLTgzMnEtNjYgMC0xMTMgNDd0LTQ3IDExM3Y4MzJxMCA2NiA0NyAxMTN0MTEzIDQ3aDgzMnE2NiAwIDExMy00N3Q0Ny0xMTN2LTEyNnEwLTEzIDktMjJsNjQtNjRxMTUtMTUgMzUtN3QyMCAyOXptLTk2LTczOGwyODggMjg4LTY3MiA2NzJoLTI4OHYtMjg4em00NDQgMTMybC05MiA5Mi0yODgtMjg4IDkyLTkycTI4LTI4IDY4LTI4dDY4IDI4bDE1MiAxNTJxMjggMjggMjggNjh0LTI4IDY4elxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi1mb3J3YXJkXFxcIj48dGl0bGU+Zm9yd2FyZDwvdGl0bGU+PHBhdGggZD1cXFwiTTEwOSAxNjUxcS0xOSAxOS0zMiAxM3QtMTMtMzJ2LTE0NzJxMC0yNiAxMy0zMnQzMiAxM2w3MTAgNzEwcTggOCAxMyAxOXYtNzEwcTAtMjYgMTMtMzJ0MzIgMTNsNzEwIDcxMHExOSAxOSAxOSA0NXQtMTkgNDVsLTcxMCA3MTBxLTE5IDE5LTMyIDEzdC0xMy0zMnYtNzEwcS01IDEwLTEzIDE5elxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi1pbmZvXFxcIj48dGl0bGU+aW5mbzwvdGl0bGU+PHBhdGggZD1cXFwiTTEyMTYgMTM0NHYxMjhxMCAyNi0xOSA0NXQtNDUgMTloLTUxMnEtMjYgMC00NS0xOXQtMTktNDV2LTEyOHEwLTI2IDE5LTQ1dDQ1LTE5aDY0di0zODRoLTY0cS0yNiAwLTQ1LTE5dC0xOS00NXYtMTI4cTAtMjYgMTktNDV0NDUtMTloMzg0cTI2IDAgNDUgMTl0MTkgNDV2NTc2aDY0cTI2IDAgNDUgMTl0MTkgNDV6bS0xMjgtMTE1MnYxOTJxMCAyNi0xOSA0NXQtNDUgMTloLTI1NnEtMjYgMC00NS0xOXQtMTktNDV2LTE5MnEwLTI2IDE5LTQ1dDQ1LTE5aDI1NnEyNiAwIDQ1IDE5dDE5IDQ1elxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi1saXN0LXVsXFxcIj48dGl0bGU+bGlzdC11bDwvdGl0bGU+PHBhdGggZD1cXFwiTTM4NCAxNDA4cTAgODAtNTYgMTM2dC0xMzYgNTYtMTM2LTU2LTU2LTEzNiA1Ni0xMzYgMTM2LTU2IDEzNiA1NiA1NiAxMzZ6bTAtNTEycTAgODAtNTYgMTM2dC0xMzYgNTYtMTM2LTU2LTU2LTEzNiA1Ni0xMzYgMTM2LTU2IDEzNiA1NiA1NiAxMzZ6bTE0MDggNDE2djE5MnEwIDEzLTkuNSAyMi41dC0yMi41IDkuNWgtMTIxNnEtMTMgMC0yMi41LTkuNXQtOS41LTIyLjV2LTE5MnEwLTEzIDkuNS0yMi41dDIyLjUtOS41aDEyMTZxMTMgMCAyMi41IDkuNXQ5LjUgMjIuNXptLTE0MDgtOTI4cTAgODAtNTYgMTM2dC0xMzYgNTYtMTM2LTU2LTU2LTEzNiA1Ni0xMzYgMTM2LTU2IDEzNiA1NiA1NiAxMzZ6bTE0MDggNDE2djE5MnEwIDEzLTkuNSAyMi41dC0yMi41IDkuNWgtMTIxNnEtMTMgMC0yMi41LTkuNXQtOS41LTIyLjV2LTE5MnEwLTEzIDkuNS0yMi41dDIyLjUtOS41aDEyMTZxMTMgMCAyMi41IDkuNXQ5LjUgMjIuNXptMC01MTJ2MTkycTAgMTMtOS41IDIyLjV0LTIyLjUgOS41aC0xMjE2cS0xMyAwLTIyLjUtOS41dC05LjUtMjIuNXYtMTkycTAtMTMgOS41LTIyLjV0MjIuNS05LjVoMTIxNnExMyAwIDIyLjUgOS41dDkuNSAyMi41elxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi1tYWdpY1xcXCI+PHRpdGxlPm1hZ2ljPC90aXRsZT48cGF0aCBkPVxcXCJNMTI1NCA1ODFsMjkzLTI5My0xMDctMTA3LTI5MyAyOTN6bTQ0Ny0yOTNxMCAyNy0xOCA0NWwtMTI4NiAxMjg2cS0xOCAxOC00NSAxOHQtNDUtMThsLTE5OC0xOThxLTE4LTE4LTE4LTQ1dDE4LTQ1bDEyODYtMTI4NnExOC0xOCA0NS0xOHQ0NSAxOGwxOTggMTk4cTE4IDE4IDE4IDQ1em0tMTM1MS0xOTBsOTggMzAtOTggMzAtMzAgOTgtMzAtOTgtOTgtMzAgOTgtMzAgMzAtOTh6bTM1MCAxNjJsMTk2IDYwLTE5NiA2MC02MCAxOTYtNjAtMTk2LTE5Ni02MCAxOTYtNjAgNjAtMTk2em05MzAgNDc4bDk4IDMwLTk4IDMwLTMwIDk4LTMwLTk4LTk4LTMwIDk4LTMwIDMwLTk4em0tNjQwLTY0MGw5OCAzMC05OCAzMC0zMCA5OC0zMC05OC05OC0zMCA5OC0zMCAzMC05OHpcXFwiLz48L3N5bWJvbD48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDE3OTIgMTc5MlxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tcGF1c2VcXFwiPjx0aXRsZT5wYXVzZTwvdGl0bGU+PHBhdGggZD1cXFwiTTE2NjQgMTkydjE0MDhxMCAyNi0xOSA0NXQtNDUgMTloLTUxMnEtMjYgMC00NS0xOXQtMTktNDV2LTE0MDhxMC0yNiAxOS00NXQ0NS0xOWg1MTJxMjYgMCA0NSAxOXQxOSA0NXptLTg5NiAwdjE0MDhxMCAyNi0xOSA0NXQtNDUgMTloLTUxMnEtMjYgMC00NS0xOXQtMTktNDV2LTE0MDhxMC0yNiAxOS00NXQ0NS0xOWg1MTJxMjYgMCA0NSAxOXQxOSA0NXpcXFwiLz48L3N5bWJvbD48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDE3OTIgMTc5MlxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tcGxhbmVcXFwiPjx0aXRsZT5wbGFuZTwvdGl0bGU+PHBhdGggZD1cXFwiTTE1NjggMTYwcTQ0IDUyIDEyIDE0OHQtMTA4IDE3MmwtMTYxIDE2MSAxNjAgNjk2cTUgMTktMTIgMzNsLTEyOCA5NnEtNyA2LTE5IDYtNCAwLTctMS0xNS0zLTIxLTE2bC0yNzktNTA4LTI1OSAyNTkgNTMgMTk0cTUgMTctOCAzMWwtOTYgOTZxLTkgOS0yMyA5aC0ycS0xNS0yLTI0LTEzbC0xODktMjUyLTI1Mi0xODlxLTExLTctMTMtMjMtMS0xMyA5LTI1bDk2LTk3cTktOSAyMy05IDYgMCA4IDFsMTk0IDUzIDI1OS0yNTktNTA4LTI3OXEtMTQtOC0xNy0yNC0yLTE2IDktMjdsMTI4LTEyOHExNC0xMyAzMC04bDY2NSAxNTkgMTYwLTE2MHE3Ni03NiAxNzItMTA4dDE0OCAxMnpcXFwiLz48L3N5bWJvbD48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDE3OTIgMTc5MlxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tcGxheVxcXCI+PHRpdGxlPnBsYXk8L3RpdGxlPjxwYXRoIGQ9XFxcIk0xNTc2IDkyN2wtMTMyOCA3MzhxLTIzIDEzLTM5LjUgM3QtMTYuNS0zNnYtMTQ3MnEwLTI2IDE2LjUtMzZ0MzkuNSAzbDEzMjggNzM4cTIzIDEzIDIzIDMxdC0yMyAzMXpcXFwiLz48L3N5bWJvbD48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDE3OTIgMTc5MlxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tcGx1c1xcXCI+PHRpdGxlPnBsdXM8L3RpdGxlPjxwYXRoIGQ9XFxcIk0xNjAwIDczNnYxOTJxMCA0MC0yOCA2OHQtNjggMjhoLTQxNnY0MTZxMCA0MC0yOCA2OHQtNjggMjhoLTE5MnEtNDAgMC02OC0yOHQtMjgtNjh2LTQxNmgtNDE2cS00MCAwLTY4LTI4dC0yOC02OHYtMTkycTAtNDAgMjgtNjh0NjgtMjhoNDE2di00MTZxMC00MCAyOC02OHQ2OC0yOGgxOTJxNDAgMCA2OCAyOHQyOCA2OHY0MTZoNDE2cTQwIDAgNjggMjh0MjggNjh6XFxcIi8+PC9zeW1ib2w+PHN5bWJvbCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNzkyIDE3OTJcXFwiIGlkPVxcXCJsZXBsYXllci1pY29uLXJlZG9cXFwiPjx0aXRsZT5yZWRvPC90aXRsZT48cGF0aCBkPVxcXCJNMTY2NCAyNTZ2NDQ4cTAgMjYtMTkgNDV0LTQ1IDE5aC00NDhxLTQyIDAtNTktNDAtMTctMzkgMTQtNjlsMTM4LTEzOHEtMTQ4LTEzNy0zNDktMTM3LTEwNCAwLTE5OC41IDQwLjV0LTE2My41IDEwOS41LTEwOS41IDE2My41LTQwLjUgMTk4LjUgNDAuNSAxOTguNSAxMDkuNSAxNjMuNSAxNjMuNSAxMDkuNSAxOTguNSA0MC41cTExOSAwIDIyNS01MnQxNzktMTQ3cTctMTAgMjMtMTIgMTQgMCAyNSA5bDEzNyAxMzhxOSA4IDkuNSAyMC41dC03LjUgMjIuNXEtMTA5IDEzMi0yNjQgMjA0LjV0LTMyNyA3Mi41cS0xNTYgMC0yOTgtNjF0LTI0NS0xNjQtMTY0LTI0NS02MS0yOTggNjEtMjk4IDE2NC0yNDUgMjQ1LTE2NCAyOTgtNjFxMTQ3IDAgMjg0LjUgNTUuNXQyNDQuNSAxNTYuNWwxMzAtMTI5cTI5LTMxIDcwLTE0IDM5IDE3IDM5IDU5elxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi1yZWZyZXNoXFxcIj48dGl0bGU+cmVmcmVzaDwvdGl0bGU+PHBhdGggZD1cXFwiTTE2MzkgMTA1NnEwIDUtMSA3LTY0IDI2OC0yNjggNDM0LjV0LTQ3OCAxNjYuNXEtMTQ2IDAtMjgyLjUtNTV0LTI0My41LTE1N2wtMTI5IDEyOXEtMTkgMTktNDUgMTl0LTQ1LTE5LTE5LTQ1di00NDhxMC0yNiAxOS00NXQ0NS0xOWg0NDhxMjYgMCA0NSAxOXQxOSA0NS0xOSA0NWwtMTM3IDEzN3E3MSA2NiAxNjEgMTAydDE4NyAzNnExMzQgMCAyNTAtNjV0MTg2LTE3OXExMS0xNyA1My0xMTcgOC0yMyAzMC0yM2gxOTJxMTMgMCAyMi41IDkuNXQ5LjUgMjIuNXptMjUtODAwdjQ0OHEwIDI2LTE5IDQ1dC00NSAxOWgtNDQ4cS0yNiAwLTQ1LTE5dC0xOS00NSAxOS00NWwxMzgtMTM4cS0xNDgtMTM3LTM0OS0xMzctMTM0IDAtMjUwIDY1dC0xODYgMTc5cS0xMSAxNy01MyAxMTctOCAyMy0zMCAyM2gtMTk5cS0xMyAwLTIyLjUtOS41dC05LjUtMjIuNXYtN3E2NS0yNjggMjcwLTQzNC41dDQ4MC0xNjYuNXExNDYgMCAyODQgNTUuNXQyNDUgMTU2LjVsMTMwLTEyOXExOS0xOSA0NS0xOXQ0NSAxOSAxOSA0NXpcXFwiLz48L3N5bWJvbD48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDE3OTIgMTc5MlxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tdHJhc2hcXFwiPjx0aXRsZT50cmFzaDwvdGl0bGU+PHBhdGggZD1cXFwiTTcwNCAxMzc2di03MDRxMC0xNC05LTIzdC0yMy05aC02NHEtMTQgMC0yMyA5dC05IDIzdjcwNHEwIDE0IDkgMjN0MjMgOWg2NHExNCAwIDIzLTl0OS0yM3ptMjU2IDB2LTcwNHEwLTE0LTktMjN0LTIzLTloLTY0cS0xNCAwLTIzIDl0LTkgMjN2NzA0cTAgMTQgOSAyM3QyMyA5aDY0cTE0IDAgMjMtOXQ5LTIzem0yNTYgMHYtNzA0cTAtMTQtOS0yM3QtMjMtOWgtNjRxLTE0IDAtMjMgOXQtOSAyM3Y3MDRxMCAxNCA5IDIzdDIzIDloNjRxMTQgMCAyMy05dDktMjN6bS01NDQtOTkyaDQ0OGwtNDgtMTE3cS03LTktMTctMTFoLTMxN3EtMTAgMi0xNyAxMXptOTI4IDMydjY0cTAgMTQtOSAyM3QtMjMgOWgtOTZ2OTQ4cTAgODMtNDcgMTQzLjV0LTExMyA2MC41aC04MzJxLTY2IDAtMTEzLTU4LjV0LTQ3LTE0MS41di05NTJoLTk2cS0xNCAwLTIzLTl0LTktMjN2LTY0cTAtMTQgOS0yM3QyMy05aDMwOWw3MC0xNjdxMTUtMzcgNTQtNjN0NzktMjZoMzIwcTQwIDAgNzkgMjZ0NTQgNjNsNzAgMTY3aDMwOXExNCAwIDIzIDl0OSAyM3pcXFwiLz48L3N5bWJvbD48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDE3OTIgMTc5MlxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tdW5kb1xcXCI+PHRpdGxlPnVuZG88L3RpdGxlPjxwYXRoIGQ9XFxcIk0xNjY0IDg5NnEwIDE1Ni02MSAyOTh0LTE2NCAyNDUtMjQ1IDE2NC0yOTggNjFxLTE3MiAwLTMyNy03Mi41dC0yNjQtMjA0LjVxLTctMTAtNi41LTIyLjV0OC41LTIwLjVsMTM3LTEzOHExMC05IDI1LTkgMTYgMiAyMyAxMiA3MyA5NSAxNzkgMTQ3dDIyNSA1MnExMDQgMCAxOTguNS00MC41dDE2My41LTEwOS41IDEwOS41LTE2My41IDQwLjUtMTk4LjUtNDAuNS0xOTguNS0xMDkuNS0xNjMuNS0xNjMuNS0xMDkuNS0xOTguNS00MC41cS05OCAwLTE4OCAzNS41dC0xNjAgMTAxLjVsMTM3IDEzOHEzMSAzMCAxNCA2OS0xNyA0MC01OSA0MGgtNDQ4cS0yNiAwLTQ1LTE5dC0xOS00NXYtNDQ4cTAtNDIgNDAtNTkgMzktMTcgNjkgMTRsMTMwIDEyOXExMDctMTAxIDI0NC41LTE1Ni41dDI4NC41LTU1LjVxMTU2IDAgMjk4IDYxdDI0NSAxNjQgMTY0IDI0NSA2MSAyOTh6XFxcIi8+PC9zeW1ib2w+PHN5bWJvbCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNzkyIDE3OTJcXFwiIGlkPVxcXCJsZXBsYXllci1pY29uLXZvbHVtZS1kb3duXFxcIj48dGl0bGU+dm9sdW1lLWRvd248L3RpdGxlPjxwYXRoIGQ9XFxcIk0xMDg4IDM1MnYxMDg4cTAgMjYtMTkgNDV0LTQ1IDE5LTQ1LTE5bC0zMzMtMzMzaC0yNjJxLTI2IDAtNDUtMTl0LTE5LTQ1di0zODRxMC0yNiAxOS00NXQ0NS0xOWgyNjJsMzMzLTMzM3ExOS0xOSA0NS0xOXQ0NSAxOSAxOSA0NXptMzg0IDU0NHEwIDc2LTQyLjUgMTQxLjV0LTExMi41IDkzLjVxLTEwIDUtMjUgNS0yNiAwLTQ1LTE4LjV0LTE5LTQ1LjVxMC0yMSAxMi0zNS41dDI5LTI1IDM0LTIzIDI5LTM1LjUgMTItNTctMTItNTctMjktMzUuNS0zNC0yMy0yOS0yNS0xMi0zNS41cTAtMjcgMTktNDUuNXQ0NS0xOC41cTE1IDAgMjUgNSA3MCAyNyAxMTIuNSA5M3Q0Mi41IDE0MnpcXFwiLz48L3N5bWJvbD48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDE3OTIgMTc5MlxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tdm9sdW1lLW9mZlxcXCI+PHRpdGxlPnZvbHVtZS1vZmY8L3RpdGxlPjxwYXRoIGQ9XFxcIk0xMjgwIDM1MnYxMDg4cTAgMjYtMTkgNDV0LTQ1IDE5LTQ1LTE5bC0zMzMtMzMzaC0yNjJxLTI2IDAtNDUtMTl0LTE5LTQ1di0zODRxMC0yNiAxOS00NXQ0NS0xOWgyNjJsMzMzLTMzM3ExOS0xOSA0NS0xOXQ0NSAxOSAxOSA0NXpcXFwiLz48L3N5bWJvbD48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDE3OTIgMTc5MlxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tdm9sdW1lLXVwXFxcIj48dGl0bGU+dm9sdW1lLXVwPC90aXRsZT48cGF0aCBkPVxcXCJNODMyIDM1MnYxMDg4cTAgMjYtMTkgNDV0LTQ1IDE5LTQ1LTE5bC0zMzMtMzMzaC0yNjJxLTI2IDAtNDUtMTl0LTE5LTQ1di0zODRxMC0yNiAxOS00NXQ0NS0xOWgyNjJsMzMzLTMzM3ExOS0xOSA0NS0xOXQ0NSAxOSAxOSA0NXptMzg0IDU0NHEwIDc2LTQyLjUgMTQxLjV0LTExMi41IDkzLjVxLTEwIDUtMjUgNS0yNiAwLTQ1LTE4LjV0LTE5LTQ1LjVxMC0yMSAxMi0zNS41dDI5LTI1IDM0LTIzIDI5LTM1LjUgMTItNTctMTItNTctMjktMzUuNS0zNC0yMy0yOS0yNS0xMi0zNS41cTAtMjcgMTktNDUuNXQ0NS0xOC41cTE1IDAgMjUgNSA3MCAyNyAxMTIuNSA5M3Q0Mi41IDE0MnptMjU2IDBxMCAxNTMtODUgMjgyLjV0LTIyNSAxODguNXEtMTMgNS0yNSA1LTI3IDAtNDYtMTl0LTE5LTQ1cTAtMzkgMzktNTkgNTYtMjkgNzYtNDQgNzQtNTQgMTE1LjUtMTM1LjV0NDEuNS0xNzMuNS00MS41LTE3My41LTExNS41LTEzNS41cS0yMC0xNS03Ni00NC0zOS0yMC0zOS01OSAwLTI2IDE5LTQ1dDQ1LTE5cTEzIDAgMjYgNSAxNDAgNTkgMjI1IDE4OC41dDg1IDI4Mi41em0yNTYgMHEwIDIzMC0xMjcgNDIyLjV0LTMzOCAyODMuNXEtMTMgNS0yNiA1LTI2IDAtNDUtMTl0LTE5LTQ1cTAtMzYgMzktNTkgNy00IDIyLjUtMTAuNXQyMi41LTEwLjVxNDYtMjUgODItNTEgMTIzLTkxIDE5Mi0yMjd0NjktMjg5LTY5LTI4OS0xOTItMjI3cS0zNi0yNi04Mi01MS03LTQtMjIuNS0xMC41dC0yMi41LTEwLjVxLTM5LTIzLTM5LTU5IDAtMjYgMTktNDV0NDUtMTlxMTMgMCAyNiA1IDIxMSA5MSAzMzggMjgzLjV0MTI3IDQyMi41elxcXCIvPjwvc3ltYm9sPjwvc3ZnPlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9kaXN0L3N2Zy9zdmctZGVmcy5zdmdcbi8vIG1vZHVsZSBpZCA9IDcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBjb25zdCBwcmVzZXQgPSB7XG5cdG9wdGlvbnMgOiB7XG5cdFx0d2lkdGggOiAnMTAwJScsXG5cdFx0Y29udHJvbHMgOiB7XG5cdFx0XHRjb21tb24gOiBbXG5cdFx0XHRcdFsncGxheScsICd2b2x1bWUnLCAnZGl2aWRlcicsICd0aW1lbGluZScsICdkaXZpZGVyJywgJ2Z1bGxzY3JlZW4nXSxcblx0XHRcdFx0WydyYXRlJywgJ2RpdmlkZXInLCAnYmFja3dhcmQnLCAnZGl2aWRlcicsICdzb3VyY2UnLCAnZGl2aWRlcicsICdkb3dubG9hZCddXG5cdFx0XHRdLFxuXHRcdFx0ZnVsbHNjcmVlbiA6IFtcblx0XHRcdFx0WydwbGF5JywgJ3ZvbHVtZScsICdkaXZpZGVyJywgJ3RpbWVsaW5lJywgJ2RpdmlkZXInLCAncmF0ZScsICdkaXZpZGVyJywgJ2JhY2t3YXJkJywgJ2RpdmlkZXInLCAnc291cmNlJywgJ2RpdmlkZXInLCAnZG93bmxvYWQnLCAnZGl2aWRlcicsICdmdWxsc2NyZWVuJ11cblx0XHRcdF1cblx0XHR9XG5cdH0sXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvcHJlc2V0cy92cHMuanMiLCJjb25zdCBjb250cm9scyA9IFsncGxheScsICd2b2x1bWUnLCAnZGl2aWRlcicsICd0aW1lbGluZScsICdkaXZpZGVyJywgJ3JhdGUnLCAnZG93bmxvYWQnLCAnZnVsbHNjcmVlbiddO1xuXG5leHBvcnQgY29uc3QgcHJlc2V0ID0ge1xuXHRvcHRpb25zIDoge1xuXHRcdGNvbnRyb2xzIDoge1xuXHRcdFx0Y29tbW9uIDogW1xuXHRcdFx0XHRjb250cm9scyxcblx0XHRcdFx0W11cblx0XHRcdF0sXG5cdFx0XHRmdWxsc2NyZWVuIDogW1xuXHRcdFx0XHRjb250cm9sc1xuXHRcdFx0XVxuXHRcdH1cblx0fSxcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9wcmVzZXRzL3NpbXBsZS5qcyIsImV4cG9ydCBjb25zdCBwcmVzZXQgPSB7XG5cdG9wdGlvbnMgOiB7XG5cdFx0d2lkdGggOiAnMTAwJScsXG5cdFx0Y29udHJvbHMgOiB7XG5cdFx0XHRjb21tb24gOiBbXG5cdFx0XHRcdFsncGxheScsICd2b2x1bWUnLCAndGltZWxpbmUnLCAncmF0ZScsICdzb3VyY2UnLCAnZGl2aWRlcicsICdkb3dubG9hZCcsICdmdWxsc2NyZWVuJ10sXG5cdFx0XHRcdFtdXG5cdFx0XHRdLFxuXHRcdFx0ZnVsbHNjcmVlbiA6IFtcblx0XHRcdFx0WydwbGF5JywgJ3ZvbHVtZScsICd0aW1lbGluZScsICdyYXRlJywgJ3NvdXJjZScsICdkaXZpZGVyJywgJ2Rvd25sb2FkJywgJ2Z1bGxzY3JlZW4nXSxcblx0XHRcdF1cblx0XHR9XG5cdH0sXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvcHJlc2V0cy9zbXMuanMiLCJleHBvcnQgY29uc3QgcHJlc2V0ID0ge1xuXHRvcHRpb25zIDoge1xuXHRcdHdpZHRoIDogJzEwMCUnLFxuXHRcdGNvbnRyb2xzIDoge1xuXHRcdFx0Y29tbW9uIDogW1xuXHRcdFx0XHRbJ3BsYXknLCAndm9sdW1lJywgJ3RpbWVsaW5lJywgJ3JhdGUnLCAnc291cmNlJywgJ2RpdmlkZXInLCAnZnVsbHNjcmVlbiddLFxuXHRcdFx0XHRbXVxuXHRcdFx0XSxcblx0XHRcdGZ1bGxzY3JlZW4gOiBbXG5cdFx0XHRcdFsncGxheScsICd2b2x1bWUnLCAndGltZWxpbmUnLCAncmF0ZScsICdzb3VyY2UnLCAnZGl2aWRlcicsICdmdWxsc2NyZWVuJ10sXG5cdFx0XHRdXG5cdFx0fVxuXHR9LFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL3ByZXNldHMvY29tcHJlc3NlZC5qcyIsImV4cG9ydCBjb25zdCBwcmVzZXQgPSB7XG5cdG9wdGlvbnMgOiB7XG5cdFx0d2lkdGggOiAnMTAwJScsXG5cblx0XHRjb250cm9sc09wdGlvbnMgOiB7XG5cdFx0XHRjb21tb24gOiB7XG5cdFx0XHRcdGFsaWduIDogWydqdXN0aWZ5J11cblx0XHRcdH1cblx0XHR9LFxuXHRcdGNvbnRyb2xzIDoge1xuXHRcdFx0Y29tbW9uIDogW1xuXHRcdFx0XHRbJ3BsYXknLCAndGltZWxpbmUnLCAncmF0ZScsICd2b2x1bWUnLCAnc291cmNlJywgJ2Z1bGxzY3JlZW4nXSxcblx0XHRcdF0sXG5cdFx0XHRmdWxsc2NyZWVuIDogW1xuXHRcdFx0XHRbJ3BsYXknLCAndGltZWxpbmUnLCAncmF0ZScsICd2b2x1bWUnLCAnc291cmNlJywgJ2Z1bGxzY3JlZW4nXVxuXHRcdFx0XSxcblx0XHRcdG1pbmkgOiBbXG5cdFx0XHRcdFsncGxheScsICdkaXZpZGVyJywgJ3RpbWVsaW5lJywgJ3ZvbHVtZScsICdmdWxsc2NyZWVuJ11cblx0XHRcdF0sXG5cdFx0fVxuXHR9LFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL3ByZXNldHMvMjAzNS5qcyJdLCJzb3VyY2VSb290IjoiIn0=