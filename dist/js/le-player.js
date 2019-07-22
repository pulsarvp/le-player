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
	
	Player.defaultSprite = __webpack_require__(64);
	
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
	
	Player.preset('vps', __webpack_require__(65).preset);
	Player.preset('simple', __webpack_require__(66).preset);
	Player.preset('sms', __webpack_require__(67).preset);
	Player.preset('compressed', __webpack_require__(68).preset);
	Player.preset('2035', __webpack_require__(69).preset);
	
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
	
	var implementation = __webpack_require__(61);
	var getPolyfill = __webpack_require__(62);
	var shim = __webpack_require__(63);
	
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
	var foreach = __webpack_require__(42);
	var hasSymbols = typeof Symbol === 'function' && typeof Symbol() === 'symbol';
	
	var toStr = Object.prototype.toString;
	
	var isFunction = function (fn) {
		return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
	};
	
	var arePropertyDescriptorsSupported = function () {
		var obj = {};
		try {
			Object.defineProperty(obj, 'x', { enumerable: false, value: obj });
	        /* eslint-disable no-unused-vars, no-restricted-syntax */
	        for (var _ in obj) { return false; }
	        /* eslint-enable no-unused-vars, no-restricted-syntax */
			return obj.x === obj;
		} catch (e) { /* this is IE 8. */
			return false;
		}
	};
	var supportsDescriptors = Object.defineProperty && arePropertyDescriptorsSupported();
	
	var defineProperty = function (object, name, value, predicate) {
		if (name in object && (!isFunction(predicate) || !predicate())) {
			return;
		}
		if (supportsDescriptors) {
			Object.defineProperty(object, name, {
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
			props = props.concat(Object.getOwnPropertySymbols(map));
		}
		foreach(props, function (name) {
			defineProperty(object, name, map[name], predicates[name]);
		});
	};
	
	defineProperties.supportsDescriptors = !!supportsDescriptors;
	
	module.exports = defineProperties;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// modified from https://github.com/es-shims/es5-shim
	var has = Object.prototype.hasOwnProperty;
	var toStr = Object.prototype.toString;
	var slice = Array.prototype.slice;
	var isArgs = __webpack_require__(41);
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
		$console: true,
		$external: true,
		$frame: true,
		$frameElement: true,
		$frames: true,
		$innerHeight: true,
		$innerWidth: true,
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
	
	var keysShim = function keys(object) {
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
	
	keysShim.shim = function shimObjectKeys() {
		if (Object.keys) {
			var keysWorksWithArguments = (function () {
				// Safari 5.0 bug
				return (Object.keys(arguments) || '').length === 2;
			}(1, 2));
			if (!keysWorksWithArguments) {
				var originalKeys = Object.keys;
				Object.keys = function keys(object) {
					if (isArgs(object)) {
						return originalKeys(slice.call(object));
					} else {
						return originalKeys(object);
					}
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
/***/ (function(module, exports) {

	
	var hasOwn = Object.prototype.hasOwnProperty;
	var toString = Object.prototype.toString;
	
	module.exports = function forEach (obj, fn, ctx) {
	    if (toString.call(fn) !== '[object Function]') {
	        throw new TypeError('iterator must be a function');
	    }
	    var l = obj.length;
	    if (l === +l) {
	        for (var i = 0; i < l; i++) {
	            fn.call(ctx, obj[i], i, obj);
	        }
	    } else {
	        for (var k in obj) {
	            if (hasOwn.call(obj, k)) {
	                fn.call(ctx, obj[k], k, obj);
	            }
	        }
	    }
	};
	


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var toStr = Object.prototype.toString;
	var hasSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol';
	var symbolToStr = hasSymbols ? Symbol.prototype.toString : toStr;
	
	var $isNaN = __webpack_require__(44);
	var $isFinite = __webpack_require__(45);
	var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1;
	
	var assign = __webpack_require__(46);
	var sign = __webpack_require__(47);
	var mod = __webpack_require__(48);
	var isPrimitive = __webpack_require__(49);
	var toPrimitive = __webpack_require__(50);
	var parseInteger = parseInt;
	var bind = __webpack_require__(55);
	var strSlice = bind.call(Function.call, String.prototype.slice);
	var isBinary = bind.call(Function.call, RegExp.prototype.test, /^0b[01]+$/i);
	var isOctal = bind.call(Function.call, RegExp.prototype.test, /^0o[0-7]+$/i);
	var nonWS = ['\u0085', '\u200b', '\ufffe'].join('');
	var nonWSregex = new RegExp('[' + nonWS + ']', 'g');
	var hasNonWS = bind.call(Function.call, RegExp.prototype.test, nonWSregex);
	var invalidHexLiteral = /^[-+]0x[0-9a-f]+$/i;
	var isInvalidHexLiteral = bind.call(Function.call, RegExp.prototype.test, invalidHexLiteral);
	
	// whitespace from: http://es5.github.io/#x15.5.4.20
	// implementation from https://github.com/es-shims/es5-shim/blob/v3.4.0/es5-shim.js#L1304-L1324
	var ws = [
		'\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003',
		'\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028',
		'\u2029\uFEFF'
	].join('');
	var trimRegex = new RegExp('(^[' + ws + ']+)|([' + ws + ']+$)', 'g');
	var replace = bind.call(Function.call, String.prototype.replace);
	var trim = function (value) {
		return replace(value, trimRegex, '');
	};
	
	var ES5 = __webpack_require__(57);
	
	var hasRegExpMatcher = __webpack_require__(59);
	
	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-abstract-operations
	var ES6 = assign(assign({}, ES5), {
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-call-f-v-args
		Call: function Call(F, V) {
			var args = arguments.length > 2 ? arguments[2] : [];
			if (!this.IsCallable(F)) {
				throw new TypeError(F + ' is not a function');
			}
			return F.apply(V, args);
		},
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toprimitive
		ToPrimitive: toPrimitive,
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toboolean
		// ToBoolean: ES5.ToBoolean,
	
		// http://www.ecma-international.org/ecma-262/6.0/#sec-tonumber
		ToNumber: function ToNumber(argument) {
			var value = isPrimitive(argument) ? argument : toPrimitive(argument, 'number');
			if (typeof value === 'symbol') {
				throw new TypeError('Cannot convert a Symbol value to a number');
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
			return Number(value);
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
			var posInt = sign(number) * Math.floor(Math.abs(number));
			return mod(posInt, 0x100);
		},
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-touint8clamp
		ToUint8Clamp: function ToUint8Clamp(argument) {
			var number = this.ToNumber(argument);
			if ($isNaN(number) || number <= 0) { return 0; }
			if (number >= 0xFF) { return 0xFF; }
			var f = Math.floor(argument);
			if (f + 0.5 < number) { return f + 1; }
			if (number < f + 0.5) { return f; }
			if (f % 2 !== 0) { return f + 1; }
			return f;
		},
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tostring
		ToString: function ToString(argument) {
			if (typeof argument === 'symbol') {
				throw new TypeError('Cannot convert a Symbol value to a string');
			}
			return String(argument);
		},
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toobject
		ToObject: function ToObject(value) {
			this.RequireObjectCoercible(value);
			return Object(value);
		},
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-topropertykey
		ToPropertyKey: function ToPropertyKey(argument) {
			var key = this.ToPrimitive(argument, String);
			return typeof key === 'symbol' ? symbolToStr.call(key) : this.ToString(key);
		},
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
		ToLength: function ToLength(argument) {
			var len = this.ToInteger(argument);
			if (len <= 0) { return 0; } // includes converting -0 to +0
			if (len > MAX_SAFE_INTEGER) { return MAX_SAFE_INTEGER; }
			return len;
		},
	
		// http://www.ecma-international.org/ecma-262/6.0/#sec-canonicalnumericindexstring
		CanonicalNumericIndexString: function CanonicalNumericIndexString(argument) {
			if (toStr.call(argument) !== '[object String]') {
				throw new TypeError('must be a string');
			}
			if (argument === '-0') { return -0; }
			var n = this.ToNumber(argument);
			if (this.SameValue(this.ToString(n), argument)) { return n; }
			return void 0;
		},
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-requireobjectcoercible
		RequireObjectCoercible: ES5.CheckObjectCoercible,
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isarray
		IsArray: Array.isArray || function IsArray(argument) {
			return toStr.call(argument) === '[object Array]';
		},
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-iscallable
		// IsCallable: ES5.IsCallable,
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isconstructor
		IsConstructor: function IsConstructor(argument) {
			return typeof argument === 'function' && !!argument.prototype; // unfortunately there's no way to truly check this without try/catch `new argument`
		},
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isextensible-o
		IsExtensible: function IsExtensible(obj) {
			if (!Object.preventExtensions) { return true; }
			if (isPrimitive(obj)) {
				return false;
			}
			return Object.isExtensible(obj);
		},
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isinteger
		IsInteger: function IsInteger(argument) {
			if (typeof argument !== 'number' || $isNaN(argument) || !$isFinite(argument)) {
				return false;
			}
			var abs = Math.abs(argument);
			return Math.floor(abs) === abs;
		},
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-ispropertykey
		IsPropertyKey: function IsPropertyKey(argument) {
			return typeof argument === 'string' || typeof argument === 'symbol';
		},
	
		// http://www.ecma-international.org/ecma-262/6.0/#sec-isregexp
		IsRegExp: function IsRegExp(argument) {
			if (!argument || typeof argument !== 'object') {
				return false;
			}
			if (hasSymbols) {
				var isRegExp = argument[Symbol.match];
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
				throw new TypeError('Assertion failed: IsPropertyKey(P) is not true');
			}
	
			// 7.3.2.2-3
			var O = this.ToObject(V);
	
			// 7.3.2.4
			return O[P];
		},
	
		/**
		 * 7.3.9 - http://www.ecma-international.org/ecma-262/6.0/#sec-getmethod
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
				throw new TypeError('Assertion failed: IsPropertyKey(P) is not true');
			}
	
			// 7.3.9.2
			var func = this.GetV(O, P);
	
			// 7.3.9.4
			if (func == null) {
				return undefined;
			}
	
			// 7.3.9.5
			if (!this.IsCallable(func)) {
				throw new TypeError(P + 'is not a function');
			}
	
			// 7.3.9.6
			return func;
		},
	
		/**
		 * 7.3.1 Get (O, P) - http://www.ecma-international.org/ecma-262/6.0/#sec-get-o-p
		 * 1. Assert: Type(O) is Object.
		 * 2. Assert: IsPropertyKey(P) is true.
		 * 3. Return O.[[Get]](P, O).
		 */
		Get: function Get(O, P) {
			// 7.3.1.1
			if (this.Type(O) !== 'Object') {
				throw new TypeError('Assertion failed: Type(O) is not Object');
			}
			// 7.3.1.2
			if (!this.IsPropertyKey(P)) {
				throw new TypeError('Assertion failed: IsPropertyKey(P) is not true');
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
	
		// http://www.ecma-international.org/ecma-262/6.0/#sec-speciesconstructor
		SpeciesConstructor: function SpeciesConstructor(O, defaultConstructor) {
			if (this.Type(O) !== 'Object') {
				throw new TypeError('Assertion failed: Type(O) is not Object');
			}
			var C = O.constructor;
			if (typeof C === 'undefined') {
				return defaultConstructor;
			}
			if (this.Type(C) !== 'Object') {
				throw new TypeError('O.constructor is not an Object');
			}
			var S = hasSymbols && Symbol.species ? C[Symbol.species] : undefined;
			if (S == null) {
				return defaultConstructor;
			}
			if (this.IsConstructor(S)) {
				return S;
			}
			throw new TypeError('no constructor found');
		}
	});
	
	delete ES6.CheckObjectCoercible; // renamed in ES6 to RequireObjectCoercible
	
	module.exports = ES6;


/***/ }),
/* 44 */
/***/ (function(module, exports) {

	module.exports = Number.isNaN || function isNaN(a) {
		return a !== a;
	};


/***/ }),
/* 45 */
/***/ (function(module, exports) {

	var $isNaN = Number.isNaN || function (a) { return a !== a; };
	
	module.exports = Number.isFinite || function (x) { return typeof x === 'number' && !$isNaN(x) && x !== Infinity && x !== -Infinity; };


/***/ }),
/* 46 */
/***/ (function(module, exports) {

	var has = Object.prototype.hasOwnProperty;
	module.exports = Object.assign || function assign(target, source) {
		for (var key in source) {
			if (has.call(source, key)) {
				target[key] = source[key];
			}
		}
		return target;
	};


/***/ }),
/* 47 */
/***/ (function(module, exports) {

	module.exports = function sign(number) {
		return number >= 0 ? 1 : -1;
	};


/***/ }),
/* 48 */
/***/ (function(module, exports) {

	module.exports = function mod(number, modulo) {
		var remain = number % modulo;
		return Math.floor(remain >= 0 ? remain : remain + modulo);
	};


/***/ }),
/* 49 */
/***/ (function(module, exports) {

	module.exports = function isPrimitive(value) {
		return value === null || (typeof value !== 'function' && typeof value !== 'object');
	};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var hasSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol';
	
	var isPrimitive = __webpack_require__(51);
	var isCallable = __webpack_require__(52);
	var isDate = __webpack_require__(53);
	var isSymbol = __webpack_require__(54);
	
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
	};
	
	// http://www.ecma-international.org/ecma-262/6.0/#sec-toprimitive
	module.exports = function ToPrimitive(input, PreferredType) {
		if (isPrimitive(input)) {
			return input;
		}
		var hint = 'default';
		if (arguments.length > 1) {
			if (PreferredType === String) {
				hint = 'string';
			} else if (PreferredType === Number) {
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
/* 51 */
/***/ (function(module, exports) {

	module.exports = function isPrimitive(value) {
		return value === null || (typeof value !== 'function' && typeof value !== 'object');
	};


/***/ }),
/* 52 */
/***/ (function(module, exports) {

	'use strict';
	
	var fnToStr = Function.prototype.toString;
	
	var constructorRegex = /^\s*class /;
	var isES6ClassFn = function isES6ClassFn(value) {
		try {
			var fnStr = fnToStr.call(value);
			var singleStripped = fnStr.replace(/\/\/.*\n/g, '');
			var multiStripped = singleStripped.replace(/\/\*[.\s\S]*\*\//g, '');
			var spaceStripped = multiStripped.replace(/\n/mg, ' ').replace(/ {2}/g, ' ');
			return constructorRegex.test(spaceStripped);
		} catch (e) {
			return false; // not a function
		}
	};
	
	var tryFunctionObject = function tryFunctionObject(value) {
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
		if (hasToStringTag) { return tryFunctionObject(value); }
		if (isES6ClassFn(value)) { return false; }
		var strClass = toStr.call(value);
		return strClass === fnClass || strClass === genClass;
	};


/***/ }),
/* 53 */
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
/* 54 */
/***/ (function(module, exports) {

	'use strict';
	
	var toStr = Object.prototype.toString;
	var hasSymbols = typeof Symbol === 'function' && typeof Symbol() === 'symbol';
	
	if (hasSymbols) {
		var symToStr = Symbol.prototype.toString;
		var symStringRegex = /^Symbol\(.*\)$/;
		var isSymbolObject = function isSymbolObject(value) {
			if (typeof value.valueOf() !== 'symbol') { return false; }
			return symStringRegex.test(symToStr.call(value));
		};
		module.exports = function isSymbol(value) {
			if (typeof value === 'symbol') { return true; }
			if (toStr.call(value) !== '[object Symbol]') { return false; }
			try {
				return isSymbolObject(value);
			} catch (e) {
				return false;
			}
		};
	} else {
		module.exports = function isSymbol(value) {
			// this environment does not support Symbols.
			return false;
		};
	}


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	var implementation = __webpack_require__(56);
	
	module.exports = Function.prototype.bind || implementation;


/***/ }),
/* 56 */
/***/ (function(module, exports) {

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
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var $isNaN = __webpack_require__(44);
	var $isFinite = __webpack_require__(45);
	
	var sign = __webpack_require__(47);
	var mod = __webpack_require__(48);
	
	var IsCallable = __webpack_require__(52);
	var toPrimitive = __webpack_require__(58);
	
	// https://es5.github.io/#x9
	var ES5 = {
		ToPrimitive: toPrimitive,
	
		ToBoolean: function ToBoolean(value) {
			return Boolean(value);
		},
		ToNumber: function ToNumber(value) {
			return Number(value);
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
			return String(value);
		},
		ToObject: function ToObject(value) {
			this.CheckObjectCoercible(value);
			return Object(value);
		},
		CheckObjectCoercible: function CheckObjectCoercible(value, optMessage) {
			/* jshint eqnull:true */
			if (value == null) {
				throw new TypeError(optMessage || 'Cannot call method on ' + value);
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
	
		// http://www.ecma-international.org/ecma-262/5.1/#sec-8
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
		}
	};
	
	module.exports = ES5;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var toStr = Object.prototype.toString;
	
	var isPrimitive = __webpack_require__(51);
	
	var isCallable = __webpack_require__(52);
	
	// https://es5.github.io/#x8.12
	var ES5internalSlots = {
		'[[DefaultValue]]': function (O, hint) {
			var actualHint = hint || (toStr.call(O) === '[object Date]' ? String : Number);
	
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
	
	// https://es5.github.io/#x9
	module.exports = function ToPrimitive(input, PreferredType) {
		if (isPrimitive(input)) {
			return input;
		}
		return ES5internalSlots['[[DefaultValue]]'](input, PreferredType);
	};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var has = __webpack_require__(60);
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
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	var bind = __webpack_require__(55);
	
	module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var ES = __webpack_require__(43);
	
	module.exports = function find(predicate) {
		var list = ES.ToObject(this);
		var length = ES.ToInteger(ES.ToLength(list.length));
		if (!ES.IsCallable(predicate)) {
			throw new TypeError('Array#find: predicate must be a function');
		}
		if (length === 0) {
			return undefined;
		}
		var thisArg = arguments[1];
		for (var i = 0, value; i < length; i++) {
			value = list[i];
			if (ES.Call(predicate, thisArg, [value, i, list])) {
				return value;
			}
		}
		return undefined;
	};


/***/ }),
/* 62 */
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
		return implemented ? Array.prototype.find : __webpack_require__(61);
	};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var define = __webpack_require__(39);
	var getPolyfill = __webpack_require__(62);
	
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
/* 64 */
/***/ (function(module, exports) {

	module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\"><symbol fill=\"currentColor\" viewBox=\"0 0 1792 1792\" id=\"leplayer-icon-arrows-alt\"><title>arrows-alt</title><path d=\"M1411 541l-355 355 355 355 144-144q29-31 70-14 39 17 39 59v448q0 26-19 45t-45 19h-448q-42 0-59-40-17-39 14-69l144-144-355-355-355 355 144 144q31 30 14 69-17 40-59 40h-448q-26 0-45-19t-19-45v-448q0-42 40-59 39-17 69 14l144 144 355-355-355-355-144 144q-19 19-45 19-12 0-24-5-40-17-40-59v-448q0-26 19-45t45-19h448q42 0 59 40 17 39-14 69l-144 144 355 355 355-355-144-144q-31-30-14-69 17-40 59-40h448q26 0 45 19t19 45v448q0 42-39 59-13 5-25 5-26 0-45-19z\"/></symbol><symbol fill=\"currentColor\" viewBox=\"0 0 1792 1792\" id=\"leplayer-icon-backward\"><title>backward</title><path d=\"M1683 141q19-19 32-13t13 32v1472q0 26-13 32t-32-13l-710-710q-8-9-13-19v710q0 26-13 32t-32-13l-710-710q-19-19-19-45t19-45l710-710q19-19 32-13t13 32v710q5-11 13-19z\"/></symbol><symbol fill=\"currentColor\" viewBox=\"0 0 1792 1792\" id=\"leplayer-icon-bullseye\"><title>bullseye</title><path d=\"M1152 896q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181zm128 0q0-159-112.5-271.5t-271.5-112.5-271.5 112.5-112.5 271.5 112.5 271.5 271.5 112.5 271.5-112.5 112.5-271.5zm128 0q0 212-150 362t-362 150-362-150-150-362 150-362 362-150 362 150 150 362zm128 0q0-130-51-248.5t-136.5-204-204-136.5-248.5-51-248.5 51-204 136.5-136.5 204-51 248.5 51 248.5 136.5 204 204 136.5 248.5 51 248.5-51 204-136.5 136.5-204 51-248.5zm128 0q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z\"/></symbol><symbol fill=\"currentColor\" viewBox=\"0 0 400 380\" id=\"leplayer-icon-cat\"><title>cat</title> <path d=\"M 151.34904,307.20455 L 264.34904,307.20455 C 264.34904,291.14096 263.2021,287.95455 236.59904,287.95455 C 240.84904,275.20455 258.12424,244.35808 267.72404,244.35808 C 276.21707,244.35808 286.34904,244.82592 286.34904,264.20455 C 286.34904,286.20455 323.37171,321.67547 332.34904,307.20455 C 345.72769,285.63897 309.34904,292.21514 309.34904,240.20455 C 309.34904,169.05135 350.87417,179.18071 350.87417,139.20455 C 350.87417,119.20455 345.34904,116.50374 345.34904,102.20455 C 345.34904,83.30695 361.99717,84.403577 358.75805,68.734879 C 356.52061,57.911656 354.76962,49.23199 353.46516,36.143889 C 352.53959,26.857305 352.24452,16.959398 342.59855,17.357382 C 331.26505,17.824992 326.96549,37.77419 309.34904,39.204549 C 291.76851,40.631991 276.77834,24.238028 269.97404,26.579549 C 263.22709,28.901334 265.34904,47.204549 269.34904,60.204549 C 275.63588,80.636771 289.34904,107.20455 264.34904,111.20455 C 239.34904,115.20455 196.34904,119.20455 165.34904,160.20455 C 134.34904,201.20455 135.49342,249.3212 123.34904,264.20455 C 82.590696,314.15529 40.823919,293.64625 40.823919,335.20455 C 40.823919,353.81019 72.349045,367.20455 77.349045,361.20455 C 82.349045,355.20455 34.863764,337.32587 87.995492,316.20455 C 133.38711,298.16014 137.43914,294.47663 151.34904,307.20455 z \" style=\"fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1\"/> </symbol><symbol fill=\"currentColor\" viewBox=\"0 0 1792 1792\" id=\"leplayer-icon-commenting-o\"><title>commenting-o</title><path d=\"M640 896q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm384 0q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm384 0q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-512-512q-204 0-381.5 69.5t-282 187.5-104.5 255q0 112 71.5 213.5t201.5 175.5l87 50-27 96q-24 91-70 172 152-63 275-171l43-38 57 6q69 8 130 8 204 0 381.5-69.5t282-187.5 104.5-255-104.5-255-282-187.5-381.5-69.5zm896 512q0 174-120 321.5t-326 233-450 85.5q-70 0-145-8-198 175-460 242-49 14-114 22h-5q-15 0-27-10.5t-16-27.5v-1q-3-4-.5-12t2-10 4.5-9.5l6-9 7-8.5 8-9q7-8 31-34.5t34.5-38 31-39.5 32.5-51 27-59 26-76q-157-89-247.5-220t-90.5-281q0-130 71-248.5t191-204.5 286-136.5 348-50.5 348 50.5 286 136.5 191 204.5 71 248.5z\"/></symbol><symbol fill=\"currentColor\" viewBox=\"0 0 1792 1792\" id=\"leplayer-icon-download\"><title>download</title><path d=\"M1344 1344q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm256 0q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm128-224v320q0 40-28 68t-68 28h-1472q-40 0-68-28t-28-68v-320q0-40 28-68t68-28h465l135 136q58 56 136 56t136-56l136-136h464q40 0 68 28t28 68zm-325-569q17 41-14 70l-448 448q-18 19-45 19t-45-19l-448-448q-31-29-14-70 17-39 59-39h256v-448q0-26 19-45t45-19h256q26 0 45 19t19 45v448h256q42 0 59 39z\"/></symbol><symbol fill=\"currentColor\" viewBox=\"0 0 1792 1792\" id=\"leplayer-icon-edit\"><title>edit</title><path d=\"M888 1184l116-116-152-152-116 116v56h96v96h56zm440-720q-16-16-33 1l-350 350q-17 17-1 33t33-1l350-350q17-17 1-33zm80 594v190q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h832q63 0 117 25 15 7 18 23 3 17-9 29l-49 49q-14 14-32 8-23-6-45-6h-832q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113v-126q0-13 9-22l64-64q15-15 35-7t20 29zm-96-738l288 288-672 672h-288v-288zm444 132l-92 92-288-288 92-92q28-28 68-28t68 28l152 152q28 28 28 68t-28 68z\"/></symbol><symbol fill=\"currentColor\" viewBox=\"0 0 1792 1792\" id=\"leplayer-icon-forward\"><title>forward</title><path d=\"M109 1651q-19 19-32 13t-13-32v-1472q0-26 13-32t32 13l710 710q8 8 13 19v-710q0-26 13-32t32 13l710 710q19 19 19 45t-19 45l-710 710q-19 19-32 13t-13-32v-710q-5 10-13 19z\"/></symbol><symbol fill=\"currentColor\" viewBox=\"0 0 1792 1792\" id=\"leplayer-icon-info\"><title>info</title><path d=\"M1216 1344v128q0 26-19 45t-45 19h-512q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h64v-384h-64q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h384q26 0 45 19t19 45v576h64q26 0 45 19t19 45zm-128-1152v192q0 26-19 45t-45 19h-256q-26 0-45-19t-19-45v-192q0-26 19-45t45-19h256q26 0 45 19t19 45z\"/></symbol><symbol fill=\"currentColor\" viewBox=\"0 0 1792 1792\" id=\"leplayer-icon-list-ul\"><title>list-ul</title><path d=\"M384 1408q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm0-512q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm1408 416v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5zm-1408-928q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm1408 416v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5zm0-512v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5z\"/></symbol><symbol fill=\"currentColor\" viewBox=\"0 0 1792 1792\" id=\"leplayer-icon-magic\"><title>magic</title><path d=\"M1254 581l293-293-107-107-293 293zm447-293q0 27-18 45l-1286 1286q-18 18-45 18t-45-18l-198-198q-18-18-18-45t18-45l1286-1286q18-18 45-18t45 18l198 198q18 18 18 45zm-1351-190l98 30-98 30-30 98-30-98-98-30 98-30 30-98zm350 162l196 60-196 60-60 196-60-196-196-60 196-60 60-196zm930 478l98 30-98 30-30 98-30-98-98-30 98-30 30-98zm-640-640l98 30-98 30-30 98-30-98-98-30 98-30 30-98z\"/></symbol><symbol fill=\"currentColor\" viewBox=\"0 0 1792 1792\" id=\"leplayer-icon-pause\"><title>pause</title><path d=\"M1664 192v1408q0 26-19 45t-45 19h-512q-26 0-45-19t-19-45v-1408q0-26 19-45t45-19h512q26 0 45 19t19 45zm-896 0v1408q0 26-19 45t-45 19h-512q-26 0-45-19t-19-45v-1408q0-26 19-45t45-19h512q26 0 45 19t19 45z\"/></symbol><symbol fill=\"currentColor\" viewBox=\"0 0 1792 1792\" id=\"leplayer-icon-plane\"><title>plane</title><path d=\"M1568 160q44 52 12 148t-108 172l-161 161 160 696q5 19-12 33l-128 96q-7 6-19 6-4 0-7-1-15-3-21-16l-279-508-259 259 53 194q5 17-8 31l-96 96q-9 9-23 9h-2q-15-2-24-13l-189-252-252-189q-11-7-13-23-1-13 9-25l96-97q9-9 23-9 6 0 8 1l194 53 259-259-508-279q-14-8-17-24-2-16 9-27l128-128q14-13 30-8l665 159 160-160q76-76 172-108t148 12z\"/></symbol><symbol fill=\"currentColor\" viewBox=\"0 0 1792 1792\" id=\"leplayer-icon-play\"><title>play</title><path d=\"M1576 927l-1328 738q-23 13-39.5 3t-16.5-36v-1472q0-26 16.5-36t39.5 3l1328 738q23 13 23 31t-23 31z\"/></symbol><symbol fill=\"currentColor\" viewBox=\"0 0 1792 1792\" id=\"leplayer-icon-plus\"><title>plus</title><path d=\"M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z\"/></symbol><symbol fill=\"currentColor\" viewBox=\"0 0 1792 1792\" id=\"leplayer-icon-redo\"><title>redo</title><path d=\"M1664 256v448q0 26-19 45t-45 19h-448q-42 0-59-40-17-39 14-69l138-138q-148-137-349-137-104 0-198.5 40.5t-163.5 109.5-109.5 163.5-40.5 198.5 40.5 198.5 109.5 163.5 163.5 109.5 198.5 40.5q119 0 225-52t179-147q7-10 23-12 14 0 25 9l137 138q9 8 9.5 20.5t-7.5 22.5q-109 132-264 204.5t-327 72.5q-156 0-298-61t-245-164-164-245-61-298 61-298 164-245 245-164 298-61q147 0 284.5 55.5t244.5 156.5l130-129q29-31 70-14 39 17 39 59z\"/></symbol><symbol fill=\"currentColor\" viewBox=\"0 0 1792 1792\" id=\"leplayer-icon-refresh\"><title>refresh</title><path d=\"M1639 1056q0 5-1 7-64 268-268 434.5t-478 166.5q-146 0-282.5-55t-243.5-157l-129 129q-19 19-45 19t-45-19-19-45v-448q0-26 19-45t45-19h448q26 0 45 19t19 45-19 45l-137 137q71 66 161 102t187 36q134 0 250-65t186-179q11-17 53-117 8-23 30-23h192q13 0 22.5 9.5t9.5 22.5zm25-800v448q0 26-19 45t-45 19h-448q-26 0-45-19t-19-45 19-45l138-138q-148-137-349-137-134 0-250 65t-186 179q-11 17-53 117-8 23-30 23h-199q-13 0-22.5-9.5t-9.5-22.5v-7q65-268 270-434.5t480-166.5q146 0 284 55.5t245 156.5l130-129q19-19 45-19t45 19 19 45z\"/></symbol><symbol fill=\"currentColor\" viewBox=\"0 0 1792 1792\" id=\"leplayer-icon-trash\"><title>trash</title><path d=\"M704 1376v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm-544-992h448l-48-117q-7-9-17-11h-317q-10 2-17 11zm928 32v64q0 14-9 23t-23 9h-96v948q0 83-47 143.5t-113 60.5h-832q-66 0-113-58.5t-47-141.5v-952h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h309l70-167q15-37 54-63t79-26h320q40 0 79 26t54 63l70 167h309q14 0 23 9t9 23z\"/></symbol><symbol fill=\"currentColor\" viewBox=\"0 0 1792 1792\" id=\"leplayer-icon-undo\"><title>undo</title><path d=\"M1664 896q0 156-61 298t-164 245-245 164-298 61q-172 0-327-72.5t-264-204.5q-7-10-6.5-22.5t8.5-20.5l137-138q10-9 25-9 16 2 23 12 73 95 179 147t225 52q104 0 198.5-40.5t163.5-109.5 109.5-163.5 40.5-198.5-40.5-198.5-109.5-163.5-163.5-109.5-198.5-40.5q-98 0-188 35.5t-160 101.5l137 138q31 30 14 69-17 40-59 40h-448q-26 0-45-19t-19-45v-448q0-42 40-59 39-17 69 14l130 129q107-101 244.5-156.5t284.5-55.5q156 0 298 61t245 164 164 245 61 298z\"/></symbol><symbol fill=\"currentColor\" viewBox=\"0 0 1792 1792\" id=\"leplayer-icon-volume-down\"><title>volume-down</title><path d=\"M1088 352v1088q0 26-19 45t-45 19-45-19l-333-333h-262q-26 0-45-19t-19-45v-384q0-26 19-45t45-19h262l333-333q19-19 45-19t45 19 19 45zm384 544q0 76-42.5 141.5t-112.5 93.5q-10 5-25 5-26 0-45-18.5t-19-45.5q0-21 12-35.5t29-25 34-23 29-35.5 12-57-12-57-29-35.5-34-23-29-25-12-35.5q0-27 19-45.5t45-18.5q15 0 25 5 70 27 112.5 93t42.5 142z\"/></symbol><symbol fill=\"currentColor\" viewBox=\"0 0 1792 1792\" id=\"leplayer-icon-volume-off\"><title>volume-off</title><path d=\"M1280 352v1088q0 26-19 45t-45 19-45-19l-333-333h-262q-26 0-45-19t-19-45v-384q0-26 19-45t45-19h262l333-333q19-19 45-19t45 19 19 45z\"/></symbol><symbol fill=\"currentColor\" viewBox=\"0 0 1792 1792\" id=\"leplayer-icon-volume-up\"><title>volume-up</title><path d=\"M832 352v1088q0 26-19 45t-45 19-45-19l-333-333h-262q-26 0-45-19t-19-45v-384q0-26 19-45t45-19h262l333-333q19-19 45-19t45 19 19 45zm384 544q0 76-42.5 141.5t-112.5 93.5q-10 5-25 5-26 0-45-18.5t-19-45.5q0-21 12-35.5t29-25 34-23 29-35.5 12-57-12-57-29-35.5-34-23-29-25-12-35.5q0-27 19-45.5t45-18.5q15 0 25 5 70 27 112.5 93t42.5 142zm256 0q0 153-85 282.5t-225 188.5q-13 5-25 5-27 0-46-19t-19-45q0-39 39-59 56-29 76-44 74-54 115.5-135.5t41.5-173.5-41.5-173.5-115.5-135.5q-20-15-76-44-39-20-39-59 0-26 19-45t45-19q13 0 26 5 140 59 225 188.5t85 282.5zm256 0q0 230-127 422.5t-338 283.5q-13 5-26 5-26 0-45-19t-19-45q0-36 39-59 7-4 22.5-10.5t22.5-10.5q46-25 82-51 123-91 192-227t69-289-69-289-192-227q-36-26-82-51-7-4-22.5-10.5t-22.5-10.5q-39-23-39-59 0-26 19-45t45-19q13 0 26 5 211 91 338 283.5t127 422.5z\"/></symbol></svg>"

/***/ }),
/* 65 */
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
/* 66 */
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
/* 67 */
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
/* 68 */
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
/* 69 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNmFkMjdlMmM1YmJkMDA5YmM5NjAiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2xlLXBsYXllci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCIkXCIiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvQ29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9Db21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvSWNvbi5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9QbGF5QnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy91dGlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvdXRpbHMvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9TcGxhc2hJY29uLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL1RpbWVsaW5lL1RpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvQ29udHJvbENvbGxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvU2VjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvRXJyb3JEaXNwbGF5LmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL1Bvc3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvRnVsbHNjcmVlbkFwaS5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvdXRpbHMvY29va2llLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9NZWRpYUVycm9yLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL1BsYXlDb250cm9sLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL1ZvbHVtZUNvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvQ29udHJvbERyb3Bkb3duLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL1RpbWVsaW5lL1RpbWVsaW5lQ29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9Db250cm9sVGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9UaW1lbGluZS9CdWZmZXJlZFJhbmdlcy5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9UaW1lbGluZS9NYXJrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvU2VjdGlvbkNvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvQ29udHJvbENoZWNrYm94LmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL0Z1bGxzY3JlZW5Db250cm9sLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL1JhdGVDb250cm9sLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL0JhY2t3YXJkQ29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9Tb3VyY2VDb250cm9sLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL0NvbnRyb2xDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvU3VidGl0bGVDb250cm9sLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL0Rvd25sb2FkQ29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9LZXliaW5kaW5nSW5mb0NvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvVGltZUluZm9Db250cm9sLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9lbnRpdHkvSHRtbDUuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2VudGl0eS9FbnRpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9hcnJheS5wcm90b3R5cGUuZmluZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2RlZmluZS1wcm9wZXJ0aWVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vb2JqZWN0LWtleXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9vYmplY3Qta2V5cy9pc0FyZ3VtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2ZvcmVhY2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9lcy1hYnN0cmFjdC9lczYuanMiLCJ3ZWJwYWNrOi8vLy4vfi9lcy1hYnN0cmFjdC9oZWxwZXJzL2lzTmFOLmpzIiwid2VicGFjazovLy8uL34vZXMtYWJzdHJhY3QvaGVscGVycy9pc0Zpbml0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2VzLWFic3RyYWN0L2hlbHBlcnMvYXNzaWduLmpzIiwid2VicGFjazovLy8uL34vZXMtYWJzdHJhY3QvaGVscGVycy9zaWduLmpzIiwid2VicGFjazovLy8uL34vZXMtYWJzdHJhY3QvaGVscGVycy9tb2QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9lcy1hYnN0cmFjdC9oZWxwZXJzL2lzUHJpbWl0aXZlLmpzIiwid2VicGFjazovLy8uL34vZXMtdG8tcHJpbWl0aXZlL2VzNi5qcyIsIndlYnBhY2s6Ly8vLi9+L2VzLXRvLXByaW1pdGl2ZS9oZWxwZXJzL2lzUHJpbWl0aXZlLmpzIiwid2VicGFjazovLy8uL34vaXMtY2FsbGFibGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9pcy1kYXRlLW9iamVjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2lzLXN5bWJvbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2Z1bmN0aW9uLWJpbmQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9mdW5jdGlvbi1iaW5kL2ltcGxlbWVudGF0aW9uLmpzIiwid2VicGFjazovLy8uL34vZXMtYWJzdHJhY3QvZXM1LmpzIiwid2VicGFjazovLy8uL34vZXMtdG8tcHJpbWl0aXZlL2VzNS5qcyIsIndlYnBhY2s6Ly8vLi9+L2lzLXJlZ2V4L2luZGV4LmpzIiwid2VicGFjazovLy8uL34vaGFzL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2FycmF5LnByb3RvdHlwZS5maW5kL2ltcGxlbWVudGF0aW9uLmpzIiwid2VicGFjazovLy8uL34vYXJyYXkucHJvdG90eXBlLmZpbmQvcG9seWZpbGwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9hcnJheS5wcm90b3R5cGUuZmluZC9zaGltLmpzIiwid2VicGFjazovLy8uL2Rpc3Qvc3ZnL3N2Zy1kZWZzLnN2ZyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvcHJlc2V0cy92cHMuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL3ByZXNldHMvc2ltcGxlLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9wcmVzZXRzL3Ntcy5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvcHJlc2V0cy9jb21wcmVzc2VkLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9wcmVzZXRzLzIwMzUuanMiXSwibmFtZXMiOlsicmVnaXN0ZXJDb250cm9sIiwiZWxlbWVudCIsImFkZENsYXNzIiwiZXhjbHVkZUFycmF5Iiwic291cmNlIiwiZGlzdCIsInJlc3VsdCIsImNvbmNhdCIsImZvckVhY2giLCJpbmRleCIsImluZGV4T2YiLCJpdGVtIiwic3BsaWNlIiwiZGVmYXVsdE9wdGlvbnMiLCJlbnRpdHkiLCJhdXRvcGxheSIsImhlaWdodCIsImxvb3AiLCJtdXRlZCIsInByZWxvYWQiLCJwb3N0ZXIiLCJzdmdQYXRoIiwiaW5uYWN0aXZpdHlUaW1lb3V0IiwicmF0ZSIsInN0ZXAiLCJtaW4iLCJtYXgiLCJkZWZhdWx0IiwicGxheWJhY2siLCJzaG9ydCIsIm1lZGl1bSIsImxvbmciLCJjb250cm9scyIsImNvbW1vbiIsImZ1bGxzY3JlZW4iLCJtaW5pIiwiY29udHJvbHNPcHRpb25zIiwiYWxpZ24iLCJ2b2x1bWUiLCJtdXRlbGltaXQiLCJrZXlCaW5kaW5nIiwia2V5IiwiaW5mbyIsImRlc2NyaXB0aW9uIiwiZm4iLCJwbGF5ZXIiLCJ2aWRlbyIsInRvZ2dsZVBsYXkiLCJjdXJyZW50VGltZSIsIm9wdGlvbnMiLCJzcGxhc2hJY29uIiwic2hvdyIsInNoaWZ0S2V5Iiwic2VjdGlvbnMiLCJwcmV2IiwibmV4dCIsImNhbGNWb2x1bWVJY29uIiwidG9nZ2xlRnVsbHNjcmVlbiIsInBsdWdpbnMiLCJtaW5pcGxheWVyIiwib25QbGF5ZXJJbml0ZWQiLCJQbGF5ZXIiLCJjcmVhdGVFbGVtZW50IiwiX2VsZW1lbnQiLCJpbm5lckVsZW1lbnQiLCJfdXNlck9wdGlvbnMiLCJfaW5pdE9wdGlvbnMiLCJfbG9hZFNWR1Nwcml0ZSIsImRlZmF1bHRTcHJpdGUiLCJfdmlldyIsImxvYWRFbnRpdHkiLCJjdHgiLCJfaW5pdENvbnRyb2xzIiwiX2RibGNsaWNrVGltZW91dCIsIl9pbml0U2VjdGlvbnMiLCJ0aGVuIiwiZGF0YSIsInRyaWdnZXIiLCJfaW5pdFBsdWdpbnMiLCJfbGlzdGVuSG90S2V5cyIsIl91c2VyQWN0aXZpdHkiLCJfbGlzdGVuVXNlckFjdGl2aXR5IiwiX3dhaXRpbmdUaW1lb3V0cyIsIm9uIiwiZXZlbnROYW1lIiwib25lIiwicmVtb3ZlQ2xhc3MiLCJ0aW1lIiwiZHVyYXRpb24iLCJlcnJvciIsIl9zdGFydFdhaXRpbmciLCJfc3RvcFdheXRpbmciLCJlIiwidXJsIiwicGxheSIsInBhdXNlZCIsInBhdXNlIiwiY29kZSIsImluaXQiLCJzcmMiLCJfb25GdWxsc2NyZWVuQ2hhbmdlIiwiYmluZCIsIl9vbkNsaWNrIiwiX29uRGJjbGljayIsIl9vbkluaXRlZCIsIl9vblBsYXkiLCJfb25QYXVzZSIsImRvY3VtZW50IiwiZnVsbHNjcmVlbmNoYW5nZSIsIl9vbkVudGl0eUZ1bGxzY3JlbkNoYW5nZSIsIm5hbWUiLCJFbnRpdHkiLCJnZXRDb21wb25lbnQiLCJfZW50aXR5IiwibG9hZCIsInZpZXciLCJhcmdzIiwicXVhbGl0eSIsImlzUGF1c2VkIiwicGxheWJhY2tSYXRlIiwiZGZkIiwiRGVmZXJyZWQiLCJfZGF0YSIsInVuZGVmaW5lZCIsInJlc29sdmUiLCJwcm9taXNlIiwiYWpheCIsIm1ldGhvZCIsImRhdGFUeXBlIiwiZ2V0RGF0YSIsImZzQXBpIiwicmVxdWVzdEZ1bGxzY3JlZW4iLCJzdXBwb3J0c0Z1bGxTY3JlZW4iLCJlbnRlckZ1bGxzY3JlZW4iLCJleGl0RnVsbHNjcmVlbiIsIndpZHRoIiwibGVuZ3RoIiwibmV3U2VjdGlvbnMiLCJpIiwiZW5kU2VjdGlvbiIsImJlZ2luIiwiZW5kIiwiYXR0ciIsImNzcyIsImVycm9yRGlzcGxheSIsInBsYXlCdXR0b24iLCJsb2FkZXIiLCJhcHBlbmQiLCJpY29uTmFtZSIsImNsYXNzTmFtZSIsInZpZGVvQ29udGFpbmVyIiwibGFzdFRpbWVyIiwidmlkZW9JbmZvIiwiY29uc29sZSIsIndhcm4iLCJpbmZvRWxlbWVudCIsImh0bWwiLCJ0aXRsZSIsInNlY3Rpb25Db250YWluZXIiLCJzZWN0aW9uc0NvbnRhaW5lciIsImJlZm9yZSIsImF0dHJPcHRpb25zIiwicmVkdWNlIiwib2JqIiwidmFsIiwic291cmNlcyIsImZpbmQiLCJlYWNoIiwidmFsdWUiLCJmbGFnIiwidmlzaWJsZSIsIm91dHNpZGVTZWN0aW9ucyIsIl9vcHRpb25zRnJvbUVsZW1lbnQiLCJwcmVzZXRPcHRpb25zIiwicHJlc2V0IiwiZ2V0UHJlc2V0IiwiZXh0ZW5kIiwiQXJyYXkiLCJpc0FycmF5IiwiZXhjbHVkZUNvbnRyb2xzIiwiaGFzT3duUHJvcGVydHkiLCJjb250cm9sQ29sbGVjdGlvbiIsInJvdyIsImluaXRPcHRpb25zIiwiYWN0aXZlIiwiaXNLZXlCaW5kaW5nIiwiYmluZGluZyIsIndoaWNoIiwiY3RybEtleSIsInByZXZlbnREZWZhdWx0IiwicmVqZWN0IiwiZ2V0U2VjdGlvbkRhdGEiLCJkb25lIiwiaXNTZWN0aW9uT3V0c2lkZSIsIl9jb21wbGV0ZVNlY3Rpb25zIiwiaXRlbXMiLCJmdWxsc2NyZWVuT25seSIsImhpZGVTY3JvbGwiLCJwbHVnaW5PcHRpb25zIiwibW91c2VJblByb2dyZXNzIiwibGFzdE1vdmVYIiwibGFzdE1vdmVZIiwib25Nb3VzZU1vdmUiLCJzY3JlZW5YIiwic2NyZWVuWSIsIm9uTW91c2VEb3duIiwiY2xlYXJJbnRlcnZhbCIsInNldEludGVydmFsIiwib25Nb3VzZVVwIiwiaW5hY3Rpdml0eVRpbWVvdXQiLCJkZWxheSIsInVzZXJBY3RpdmUiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwicHVzaCIsImNhbGwiLCJmb2N1cyIsImlzRnMiLCJfbGFzdFNlY3Rpb25zVmFsdWUiLCJmdWxsc2NyZWVuRWxlbWVudCIsImVuZGVkIiwiX2Vycm9yIiwiaGlkZSIsIl91c2VyQWN0aXZlIiwiZ2V0VXNlckFjdGl2ZSIsInRvZ2dsZUNsYXNzIiwicGx1Z2luIiwicHJvdG90eXBlIiwicmVnaXN0ZXJDb21wb25lbnQiLCJnZXRDb250cm9sIiwic2Vjb25kc1RvVGltZSIsIl9wcmVzZXRzIiwiQ29va2llIiwic3ZnIiwiaGlkZGVuRWxlbWVudCIsInByZXBlbmQiLCJyZXF1aXJlIiwidmVyc2lvbiIsIndpbmRvdyIsIiQiLCJsZVBsYXllciIsIm9mZnNldFNob3ciLCJvZmZzZXQiLCJ0b3AiLCJvdXRlckhlaWdodCIsImdldENvbnRyb2xzIiwiY29udHJvbE9wdGlvbnMiLCJjb250cm9sIiwiZGlzYWJsZSIsImlzRnVuY3Rpb24iLCJnZXRXaWR0aCIsIl91cGRhdGVNaW5pUGxheWVyIiwiZm9yY2UiLCJzY3JvbGxUb3AiLCJoaWRlTWluaVBsYXllciIsInNob3dNaW5pUGxheWVyIiwib25TZXRWaWV3Iiwib25EZWxWaWV3IiwibW9kdWxlIiwiZXhwb3J0cyIsIkNvbnRyb2wiLCJlbWl0VGFwRXZlbnRzIiwiY2xpY2siLCJvbkNsaWNrIiwidGFwIiwiaWNvbiIsImF0dHJzIiwidGFnIiwiYnVpbGRDU1NDbGFzcyIsImhhc0NsYXNzIiwiYXJndW1lbnRzIiwiX2Rpc2FibGUiLCJfY29udHJvbHMiLCJjb250cm9sQ2xhc3MiLCJ0b1BsYXllckV2ZW50IiwiZXZlbnRzIiwic3BsaXQiLCJhY2MiLCJDb21wb25lbnQiLCJfX25vZGUiLCJibHVyIiwiZXZlbnQiLCJFdmVudCIsInRyaWdnZXJIYW5kbGVyIiwiZXZlbnROYW1lcyIsIlN0cmluZyIsInRvdWNoU3RhcnQiLCJmaXJzdFRvdWNoIiwibGFzdE1vdmVUb3VjaCIsInRhcE1vdmVtZW50VGhyZXNob2xkIiwidG91Y2hUaW1lVGhyZXNob2xkIiwiY291bGRCZVRhcCIsInRvdWNoZXMiLCJwYWdlWCIsInBhZ2VZIiwiRGF0ZSIsImdldFRpbWUiLCJ4ZGlmZiIsInlkaWZmIiwidG91Y2hEaXN0YW5jZSIsIk1hdGgiLCJzcXJ0Iiwibm9UYXAiLCJ0b3VjaFRpbWUiLCJ0YXBFdmVudCIsImNvbXBvbmVudCIsIl9jb21wb25lbnRzIiwiSWNvbiIsIl91c2VUYWciLCJjcmVhdGVFbGVtZW50TlMiLCJfc3ZnVGFnIiwiX2ljb25OYW1lIiwiYXBwZW5kQ2hpbGQiLCJhdHRyTlMiLCJyZW1vdmVBdHRyaWJ1dGVOUyIsInNldEF0dHJpYnV0ZU5TIiwiUGxheUJ1dHRvbiIsImlubmVyIiwicGVyY2VudGlmeSIsImNyZWF0ZUVsIiwiJGh0bWwiLCJub29wIiwic2Vjb25kcyIsInNob3dIb3VycyIsImgiLCJmbG9vciIsIm0iLCJzIiwib3V0IiwicGVyY2VudCIsInByb3BzIiwiZ2V0U2Nyb2xsQmFyV2lkdGgiLCJvdXRlciIsInZpc2liaWxpdHkiLCJvdmVyZmxvdyIsImFwcGVuZFRvIiwid2lkdGhXaXRoU2Nyb2xsIiwib3V0ZXJXaWR0aCIsInJlbW92ZSIsIlVTRVJfQUdFTlQiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJJU19NT0JJTEUiLCJ0ZXN0IiwiSVNfQ0hST01FIiwiSVNfQU5EUk9JRCIsIklTX0FORFJPSURfUEhPTkUiLCJJU19JUEFEIiwiSVNfSVBIT05FIiwiSVNfSVBPRCIsIklTX0lPUyIsIklTX1NBRkFSSSIsIklTX1RPVUNIIiwibWF4VG91Y2hQb2ludHMiLCJTcGxhc2hJY29uIiwiVGltZSIsInVwZGF0ZVRleHQiLCJ0ZXh0IiwiQ29udHJvbENvbGxlY3Rpb24iLCJsb2NhbFVhT3B0aW9ucyIsImxvY2FsTmFtZSIsImluZGV4Um93IiwiY3JlYXRlIiwiY29sbGVjdGlvbiIsIl9yb3dzIiwiYWRkUm93IiwiZWxlbVJvdyIsImZpcnN0Iiwic2Vjb25kIiwiZ2xvYmFsQWxpZ24iLCJyb3dBbGlnbiIsImNvbnRyb2xOYW1lIiwiYWRkQ29udHJvbCIsIl9nZXRDb250cm9sT3B0aW9ucyIsIlNlY3Rpb25zIiwic2Nyb2xsRWxlbWVudCIsIl9pbm5lckVsZW1lbnQiLCJhY3RpdmVTZWN0aW9uIiwiZ2V0U2VjdGlvbkJ5SW5kZXgiLCJzZXRBY3RpdmVCeUluZGV4Iiwib25TZWN0aW9uQ2xpY2siLCJvblRpbWVVcGRhdGUiLCJ1cGRhdGVTZWN0aW9uRHVyYXRpb24iLCJzZWN0aW9uSW5kZXgiLCJwYXJzZUludCIsIm5ld0luZGV4IiwicmlnaHQiLCJfY3JlYXRlU2VjdGlvbnMiLCJzZWN0aW9uIiwidGFyZ2V0IiwiY2xvc2VzdCIsInRvcFBvc2l0aW9uIiwicG9zaXRpb24iLCJhbmltYXRlIiwiZW5kU2VjdGlvblRpbWUiLCJ0b1N0cmluZyIsIm5leHRJbmZvIiwidHJpbSIsInJlcGxhY2VXaXRoIiwiY3JlYXRlU2VjdGlvbiIsImlzVmlzaWJsZSIsIkVycm9yRGlzcGxheSIsIm1lc3NhZ2UiLCJvblBsYXllckVycm9yIiwiUG9zdGVyIiwiX3VybCIsIkZ1bGxzY3JlZW5BcGkiLCJhcGlNYXAiLCJzcGVjQXBpIiwiYnJvd3NlckFwaSIsImRmbHQiLCJjb29raWVzIiwiY29va2llIiwiZCIsInNldERhdGUiLCJ5ZWFyIiwiTWVkaWFFcnJvciIsImRlZmF1bHRNZXNzYWdlcyIsImVycm9yVHlwZXMiLCJlcnJOdW0iLCJQbGF5Q29udHJvbCIsInVwZGF0ZSIsInNob3dSZXBsYXkiLCJzaG93UGxheSIsInNob3dQYXVzZSIsIkluZmluaXR5IiwiX3JlcGxheSIsIlZvbHVtZUNvbnRyb2wiLCJmZWF0dXJlQ29udHJvbFZvbHVtZSIsImRyYWciLCJtYXJrZXIiLCJsaW5lIiwicCIsImdldFBvc2l0aW9uIiwiZHJvcGRvd25Db250ZW50IiwibW91c2Vtb3ZlIiwibW91c2V1cCIsInkiLCJ0b2dnbGVNdXRlZCIsImRlZmF1bHRWb2x1bWUiLCJyb3VuZCIsIkNvbnRyb2xEcm9wZG93biIsIl9vcGVuZWQiLCJvcGVuIiwiY2xvc2UiLCJ0b2dnbGUiLCJvbkRvY3VtZW50RXZlbnRzIiwiVGltZWxpbmVDb250cm9sIiwiX29uTWFya2VyTW91c2Vtb3ZlIiwiX29uTWFya2VyTW91c2Vkb3duIiwib25TZWN0aW9uc0luaXQiLCJfb25UaW1lVXBkYXRlIiwiX29uRHVyYXRpb25DaGFuZ2UiLCJtYXJrZXJTaGFkb3ciLCJ4IiwibWFya2VyVGltZSIsImlzTmFOIiwibW92ZSIsInRvdGFsVGltZSIsInBsYXllZFJhbmdlcyIsImJ1ZmZlcmVkUmFuZ2VzIiwibW91c2VsZWF2ZSIsIm1vdXNlZG93biIsIl9vbkxpbmVDbGljayIsInVwZGF0ZVNlY3Rpb25SYW5nZXMiLCJjcmVhdGVTZWN0aW9uUmFuZ2VzIiwibGVmdCIsInVwZGF0ZUxhYmVscyIsIndhdGNoQnVmZmVySW50ZXJ2YWwiLCJ1cGRhdGVQcm9ncmVzc0JhciIsIkVORCIsIlNUQVJUIiwibG9hZGVkIiwiZG9tSXRlbSIsImFkZCIsImJ1ZmZlcmVkIiwibG9hZGVkU2l6ZSIsIkNvbnRyb2xUZXh0IiwiX3RleHQiLCJCdWZmZXJlZFJhbmdlcyIsInJhbmdlIiwiTWFya2VyIiwiX29uTW91c2Vkb3duIiwiX2RyYWciLCJTZWN0aW9uQ29udHJvbCIsIl9vblNlY3Rpb25zSW5pdCIsIl9vblNlY3Rpb25Ub2dnbGUiLCJ0b2dnbGVTZWN0aW9ucyIsImNoZWNrZWQiLCJDb250cm9sQ2hlY2tib3giLCJvbkNoZWNrZWQiLCJfY2hlY2tlZCIsIkZ1bGxzY3JlZW5Db250cm9sIiwiUmF0ZUNvbnRyb2wiLCJkb3duQ29udHJvbCIsImRlY3JlYXNlUmF0ZSIsInVwQ29udHJvbCIsImluY3JlYXNlUmF0ZSIsImN1cnJlbnRSYXRlIiwicGFyc2VGbG9hdCIsInRvRml4ZWQiLCJyZXBsYWNlIiwicmF0ZU1pbiIsInJhdGVNYXgiLCJnZXQiLCJCYWNrd2FyZENvbnRyb2wiLCJTb3VyY2VDb250cm9sIiwicGxheWJhY2tRdWFsaXR5IiwiZ2V0QXZhaWxhYmxlUXVhbGl0eUxldmVscyIsIkNvbnRyb2xDb250YWluZXIiLCJfYWN0aXZlIiwibGlzdCIsImNvbnRlbnQiLCJ0b29sdGlwIiwib25JdGVtQ2xpY2siLCJjdXJyZW50VGFyZ2V0IiwiY3VycmVudFZhbHVlIiwiZ2V0Q3VycmVudFZhbHVlIiwiZW1wdHkiLCJlbGVtIiwiYWRkSXRlbSIsIlN1YnRpdGxlQ29udHJvbCIsInRyYWNrIiwic3RvcFByb3BhZ2F0aW9uIiwiaGFzVmFsdWUiLCJzdWJ0aXRsZXMiLCJEb3dubG9hZENvbnRyb2wiLCJvbkxvYWRTdGFydCIsImhyZWYiLCJkb3dubG9hZCIsImxpbmsiLCJmaWxlTmFtZSIsImRlY29kZVVSSUNvbXBvbmVudCIsImdldEZpbGVFeHRlbnNpb24iLCJwYXJzZXIiLCJwYXRobmFtZSIsInBvcCIsIktleUJpbmRpbmdJbmZvQ29udHJvbCIsImluZm9Db250ZW50IiwiX2tleSIsImhvdGtleSIsImtleVN0cmluZyIsIlRpbWVJbmZvQ29udHJvbCIsIl9jdXJyZW50VGltZUNvbnRyb2wiLCJfdG90YWxUaW1lQ29udHJvbCIsIkh0bWw1IiwibWVkaWEiLCJidWZmZXJSYW5nZXMiLCJfcGxheWJhY2tRdWFsaXR5Iiwib25EdXJhdGlvbkNoYW5nZSIsIm9uUHJvZ3Jlc3MiLCJvblNlZWtpbmciLCJvblNlZWtlZCIsIm9uVm9sdW1lQ2hhbmdlIiwib25EYmxjbGljayIsIm9uUGxheSIsIm9uUGF1c2UiLCJvblJhdGVDaGFuZ2UiLCJvbkVuZGVkIiwib25DYW5wbGF5VGhyb3VnaCIsIm9uV2FpdGluZyIsIm9uRXJyb3IiLCJyZW1vdmVBdHRyIiwicHJvcCIsIm1hcCIsIl9pbml0U3VidGl0bGVzIiwiX2luaXRWaWRlbyIsIl9pbml0UmF0ZSIsIl9pbml0Vm9sdW1lIiwid2Via2l0RW50ZXJGdWxsU2NyZWVuIiwibmV0d29ya1N0YXRlIiwiSEFWRV9NRVRBREFUQSIsIndlYmtpdEV4aXRGdWxsU2NyZWVuIiwicGxheWVkIiwicGxheVByb21pc2UiLCJwYXVzZVByb21pc2UiLCJfc2VsZiIsImNoaWxkcmVuIiwibGFuZ3VhZ2UiLCJyZWFkeVN0YXRlIiwiSFRNTE1lZGlhRWxlbWVudCIsIkhBVkVfTk9USElORyIsIl90ZXh0VHJhY2tzSGFjayIsInRleHRUcmFja3MiLCJjbGllbnRIZWlnaHQiLCJjbGllbnRXaWR0aCIsIk1PQklMRV9NQVhfUkFURSIsIlNBRkFSSV9NQVhfUkFURSIsIk1PQklMRV9NSU5fUkFURSIsIlNBRkFSSV9NSU5fUkFURSIsInN0b3AiLCJfc291cmNlIiwiX3RyYWNrIiwibW9kZSIsIm11dGUiLCJzZWVrYWJsZSIsInN0YXJ0IiwiY3VycmVudFNyYyIsIlRFU1RfVklERU8iLCJjYW5Db250cm9sVm9sdW1lIiwiX3RyaWdnZXJTdGFjayIsIl9zdG9wTGlzdGVuIiwiZGVmYXVsdFJhdGUiLCJfcG9zdGVyIiwiaW5uZXJIZWlnaHQiLCJfcmF0ZU1heCIsIl9yYXRlTWluIiwic2V0IiwibGV2ZWxzIiwic29tZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDdENBOzs7Ozs7QUFFQTs7OztBQUdBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7QUFDQTs7QUFTQTs7OztBQUVBOzs7O0FBR0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7OztBQWhCQTs7O0FBbUJBLG1CQUFRQSxlQUFSLENBQXdCLFNBQXhCLEVBQW1DLFlBQVc7QUFDN0MsU0FBTztBQUNOQyxZQUFVLHNCQUFFLFFBQUYsRUFBWUMsUUFBWixDQUFxQixTQUFyQjtBQURKLEdBQVA7QUFHQSxFQUpEOztBQVFBOzs7Ozs7OztBQVFBLFVBQVNDLFlBQVQsQ0FBc0JDLE1BQXRCLEVBQThCQyxJQUE5QixFQUFvQztBQUNuQyxNQUFNQyxTQUFTLEdBQUdDLE1BQUgsQ0FBVUgsTUFBVixDQUFmO0FBQ0FDLE9BQUtHLE9BQUwsQ0FBYSxnQkFBUTtBQUNwQixPQUFNQyxRQUFRSCxPQUFPSSxPQUFQLENBQWVDLElBQWYsQ0FBZDtBQUNBLE9BQUlGLFFBQVEsQ0FBQyxDQUFiLEVBQWdCO0FBQ2ZILFdBQU9NLE1BQVAsQ0FBY0gsS0FBZCxFQUFxQixDQUFyQjtBQUNBO0FBQ0E7QUFDRCxHQU5EOztBQVFBLFNBQU9ILE1BQVA7QUFDQTs7QUFFRCxLQUFNTyxpQkFBaUI7QUFDdEJDLFVBQVMsT0FEYTtBQUV0QkMsWUFBVyxLQUZXO0FBR3RCQyxVQUFTLE1BSGE7QUFJdEJDLFFBQU8sS0FKZTtBQUt0QkMsU0FBUSxLQUxjO0FBTXRCQyxXQUFVLFVBTlk7QUFPdEJDLFVBQVMsSUFQYTtBQVF0QkMsV0FBVSxFQVJZO0FBU3RCQyxzQkFBcUIsSUFUQztBQVV0QkMsUUFBTztBQUNOQyxTQUFPLElBREQ7QUFFTkMsUUFBTSxHQUZBO0FBR05DLFFBQU0sR0FIQTtBQUlOQyxZQUFVO0FBSkosR0FWZTtBQWdCdEJDLFlBQVc7QUFDVkosU0FBTztBQUNOSyxXQUFRLENBREY7QUFFTkMsWUFBUyxFQUZIO0FBR05DLFVBQU87QUFIRDtBQURHLEdBaEJXO0FBdUJ0QkMsWUFBVztBQUNWQyxXQUFTLENBQ1IsQ0FBQyxNQUFELEVBQVMsUUFBVCxFQUFtQixTQUFuQixFQUE4QixVQUE5QixFQUEyQyxTQUEzQyxFQUFzRCxTQUF0RCxFQUFpRSxTQUFqRSxFQUE0RSxZQUE1RSxDQURRLEVBRVIsQ0FBQyxNQUFELEVBQVMsU0FBVCxFQUFvQixVQUFwQixFQUFnQyxTQUFoQyxFQUEyQyxRQUEzQyxFQUFxRCxTQUFyRCxFQUFnRSxVQUFoRSxFQUE0RSxTQUE1RSxFQUF1RixVQUF2RixFQUFtRyxTQUFuRyxFQUE4RyxpQkFBOUcsQ0FGUSxDQURDO0FBS1ZDLGVBQWEsQ0FDWixDQUFDLE1BQUQsRUFBUyxRQUFULEVBQW1CLFNBQW5CLEVBQThCLFVBQTlCLEVBQTBDLFNBQTFDLEVBQXFELE1BQXJELEVBQTZELFNBQTdELEVBQXdFLGlCQUF4RSxFQUE0RixTQUE1RixFQUF1RyxVQUF2RyxFQUFtSCxTQUFuSCxFQUE4SCxRQUE5SCxFQUF3SSxTQUF4SSxFQUFtSixVQUFuSixFQUErSixTQUEvSixFQUEwSyxVQUExSyxFQUFzTCxTQUF0TCxFQUFpTSxTQUFqTSxFQUE0TSxTQUE1TSxFQUF1TixZQUF2TixDQURZLENBTEg7QUFRVkMsU0FBTyxDQUNOLENBQUMsTUFBRCxFQUFTLFFBQVQsRUFBbUIsU0FBbkIsRUFBOEIsWUFBOUIsRUFBNEMsU0FBNUMsRUFBdUQsVUFBdkQsQ0FETSxDQVJHO0FBV1YscUJBQW1CLENBQ2xCLENBQUMsTUFBRCxFQUFTLFVBQVQsRUFBcUIsWUFBckIsQ0FEa0IsRUFFbEIsQ0FBQyxNQUFELEVBQVMsUUFBVCxFQUFtQixTQUFuQixDQUZrQixDQVhUO0FBZVYsd0JBQXNCLENBQ3JCLENBQUMsTUFBRCxFQUFTLFVBQVQsRUFBcUIsWUFBckIsQ0FEcUIsRUFFckIsQ0FBQyxNQUFELEVBQVMsUUFBVCxFQUFtQixTQUFuQixDQUZxQixDQWZaO0FBbUJWLGlCQUFlLENBQ2QsQ0FBQyxNQUFELEVBQVMsTUFBVCxFQUFpQixVQUFqQixFQUE2QixRQUE3QixDQURjO0FBbkJMLEdBdkJXO0FBOEN0QkMsbUJBQWtCOztBQUVqQkgsV0FBUztBQUNSSSxXQUFRLENBQUMsU0FBRCxFQUFZLE1BQVo7QUFDUjtBQUZRLElBRlE7QUFNakJILGVBQWE7QUFDWkcsV0FBUTtBQURJLElBTkk7QUFTakIscUJBQW1CO0FBQ2xCQSxXQUFRLENBQUMsU0FBRCxFQUFZLE9BQVo7QUFEVSxJQVRGOztBQWFqQix3QkFBc0I7QUFDckJBLFdBQVEsQ0FBQyxTQUFELEVBQVksT0FBWjtBQURhO0FBYkwsR0E5Q0k7QUErRHRCQyxVQUFTO0FBQ1JYLFlBQVUsR0FERjtBQUVSWSxjQUFZLElBRko7QUFHUmYsU0FBTztBQUhDLEdBL0RhO0FBb0V0QmdCLGNBQWEsQ0FDWjtBQUNDQyxRQUFNLEVBRFA7QUFFQ0MsU0FBTyxDQUFDLE9BQUQsQ0FGUjtBQUdDQyxnQkFBYywwQ0FIZjtBQUlDQyxPQUFLLFlBQUNDLE1BQUQsRUFBWTtBQUNoQkEsV0FBT0MsS0FBUCxDQUFhQyxVQUFiO0FBQ0E7QUFORixHQURZLEVBU1o7QUFDQ04sUUFBTSxFQURQO0FBRUNDLFNBQU8sQ0FBQyxHQUFELENBRlI7QUFHQ0Msa0tBSEQ7QUFJQ0MsT0FBSyxZQUFDQyxNQUFELEVBQVk7QUFDaEJBLFdBQU9DLEtBQVAsQ0FBYUUsV0FBYixJQUE0QkgsT0FBT0ksT0FBUCxDQUFlckIsUUFBZixDQUF3QkosSUFBeEIsQ0FBNkJNLE1BQXpEO0FBQ0FlLFdBQU9LLFVBQVAsQ0FBa0JDLElBQWxCLENBQXVCLE1BQXZCO0FBQ0E7QUFQRixHQVRZLEVBa0JaO0FBQ0NWLFFBQU0sRUFEUDtBQUVDQyxTQUFPLENBQUMsR0FBRCxDQUZSO0FBR0NDLHdLQUhEO0FBSUNDLE9BQUssWUFBQ0MsTUFBRCxFQUFZO0FBQ2hCQSxXQUFPQyxLQUFQLENBQWFFLFdBQWIsSUFBNEJILE9BQU9JLE9BQVAsQ0FBZXJCLFFBQWYsQ0FBd0JKLElBQXhCLENBQTZCTSxNQUF6RDtBQUNBZSxXQUFPSyxVQUFQLENBQWtCQyxJQUFsQixDQUF1QixNQUF2QjtBQUNBO0FBUEYsR0FsQlksRUEyQlo7QUFDQ0MsYUFBVyxJQURaO0FBRUNWLFNBQU8sQ0FBQyxPQUFELEVBQVUsR0FBVixDQUZSO0FBR0NDLGdCQUFjLDhCQUhmO0FBSUNGLFFBQU0sRUFKUDtBQUtDRyxPQUFLLFlBQUNDLE1BQUQsRUFBWTtBQUNoQixRQUFHQSxPQUFPUSxRQUFQLElBQW1CLElBQXRCLEVBQTRCO0FBQzNCO0FBQ0E7QUFDRFIsV0FBT1EsUUFBUCxDQUFnQkMsSUFBaEI7QUFFQTtBQVhGLEdBM0JZLEVBd0NaO0FBQ0NGLGFBQVcsSUFEWjtBQUVDWCxRQUFNLEVBRlA7QUFHQ0MsU0FBTyxDQUFDLE9BQUQsRUFBVSxHQUFWLENBSFI7QUFJQ0MsZ0JBQWMsNkJBSmY7QUFLQ0MsT0FBSyxZQUFDQyxNQUFELEVBQVk7QUFDaEIsUUFBR0EsT0FBT1EsUUFBUCxJQUFtQixJQUF0QixFQUE0QjtBQUMzQjtBQUNBO0FBQ0RSLFdBQU9RLFFBQVAsQ0FBZ0JFLElBQWhCO0FBQ0E7QUFWRixHQXhDWSxFQW9EWjtBQUNDZCxRQUFNLEVBRFA7QUFFQ0MsU0FBTyxDQUFDLEdBQUQsQ0FGUjtBQUdDQyxnQkFBYyxxQkFIZjtBQUlDQyxPQUFLLFlBQUNDLE1BQUQsRUFBWTtBQUNoQkEsV0FBT0MsS0FBUCxDQUFhUixNQUFiLElBQXVCTyxPQUFPSSxPQUFQLENBQWVYLE1BQWYsQ0FBc0JkLElBQTdDOztBQUVBcUIsV0FBT0ssVUFBUCxDQUFrQkMsSUFBbEIsQ0FBdUJOLE9BQU9XLGNBQVAsQ0FBc0JYLE9BQU9DLEtBQVAsQ0FBYVIsTUFBbkMsQ0FBdkI7QUFFQTtBQVRGLEdBcERZLEVBZ0VaO0FBQ0NHLFFBQU0sRUFEUDtBQUVDQyxTQUFPLENBQUMsR0FBRCxDQUZSO0FBR0NDLGdCQUFjLHFCQUhmO0FBSUNDLE9BQUssWUFBQ0MsTUFBRCxFQUFZO0FBQ2hCQSxXQUFPQyxLQUFQLENBQWFSLE1BQWIsSUFBdUJPLE9BQU9JLE9BQVAsQ0FBZVgsTUFBZixDQUFzQmQsSUFBN0M7O0FBRUFxQixXQUFPSyxVQUFQLENBQWtCQyxJQUFsQixDQUF1Qk4sT0FBT1csY0FBUCxDQUFzQlgsT0FBT0MsS0FBUCxDQUFhUixNQUFuQyxDQUF2QjtBQUNBO0FBUkYsR0FoRVksRUEyRVo7QUFDQ0csUUFBTSxFQURQO0FBRUNDLFNBQU8sQ0FBQyxHQUFELENBRlI7QUFHQ0MsZ0JBQWMsb0NBSGY7QUFJQ0MsT0FBSyxZQUFDQyxNQUFELEVBQVk7QUFDaEJBLFdBQU9ZLGdCQUFQO0FBQ0E7QUFORixHQTNFWSxDQXBFUztBQXdKdEJDLFdBQVU7QUFDVEMsZUFBYTtBQURKLEdBeEpZO0FBMkp0QkM7QUEzSnNCLEVBQXZCOztBQThKQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FrRE1DLE07OztBQUNMLGtCQUFZNUQsT0FBWixFQUFxQmdELE9BQXJCLEVBQThCO0FBQUE7O0FBRTdCQSxXQUFRYSxhQUFSLEdBQXdCLEtBQXhCOztBQUY2QiwrR0FJdkIsSUFKdUIsRUFJakJiLE9BSmlCOztBQU03QixTQUFLYyxRQUFMLEdBQWdCOUQsT0FBaEI7O0FBRUE7Ozs7OztBQU1BLFNBQUsrRCxZQUFMLEdBQW9CLHFCQUFTLEtBQVQsQ0FBcEI7O0FBRUE7QUFDQSxTQUFLQyxZQUFMLEdBQW9CaEIsT0FBcEI7QUFDQSxTQUFLaUIsWUFBTDs7QUFFQSxPQUFHLE1BQUtqQixPQUFMLENBQWE1QixPQUFiLEtBQXlCLEVBQTVCLEVBQWdDO0FBQy9Cd0MsV0FBT00sY0FBUCxDQUFzQk4sT0FBT08sYUFBN0I7QUFDQTs7QUFFRCxTQUFLQyxLQUFMLEdBQWEsUUFBYjs7QUFFQTs7Ozs7O0FBTUEsU0FBS3BFLE9BQUwsR0FBZSxNQUFLNkQsYUFBTCxFQUFmOztBQUVBLFNBQUtRLFVBQUwsQ0FBZ0IsTUFBS3JCLE9BQUwsQ0FBYW5DLE1BQTdCLEVBQXFDLEVBQUV5RCxLQUFNdEUsT0FBUixFQUFyQztBQUNBOzs7Ozs7QUFNQSxTQUFLNkMsS0FBTCxHQUFhLE1BQUtoQyxNQUFsQjs7QUFFQTtBQUNBO0FBQ0EsU0FBS2tCLFFBQUwsR0FBZ0IsRUFBaEI7QUFDQSxTQUFLd0MsYUFBTDs7QUFFQTs7O0FBR0EsU0FBS0MsZ0JBQUwsR0FBd0IsSUFBeEI7O0FBRUEsU0FBS0MsYUFBTCxHQUFxQkMsSUFBckIsQ0FBMEIsVUFBQ0MsSUFBRCxFQUFVO0FBQ25DOzs7Ozs7Ozs7QUFTQSxVQUFLQyxPQUFMLENBQWEsY0FBYixFQUE2QkQsSUFBN0I7QUFDQSxJQVhEO0FBWUEsU0FBS0UsWUFBTDs7QUFFQSxTQUFLQyxjQUFMOztBQUVBLFNBQUtDLGFBQUwsR0FBcUIsS0FBckI7QUFDQSxTQUFLQyxtQkFBTDs7QUFFQSxTQUFLQyxnQkFBTCxHQUF3QixFQUF4Qjs7QUFFQTtBQUNBO0FBQ0M7Ozs7O0FBS0EsbUJBTkQ7O0FBUUM7Ozs7O0FBS0EsYUFiRDs7QUFlQzs7Ozs7QUFLQSxhQXBCRDs7QUFzQkM7Ozs7O0FBS0EsVUEzQkQ7O0FBOEJDOzs7OztBQUtBLFlBbkNEOztBQXFDQzs7Ozs7QUFLQSxrQkExQ0Q7O0FBNENDOzs7OztBQUtBLGlCQWpERCxFQXFERTFFLE9BckRGLENBcURVLHFCQUFhO0FBQ3RCLFVBQUtzQyxLQUFMLENBQVdxQyxFQUFYLENBQWNDLFNBQWQsRUFBeUIsWUFBTTtBQUM5QixXQUFLUCxPQUFMLENBQWFPLFNBQWI7QUFDQSxLQUZEO0FBR0EsSUF6REQ7O0FBMkRBLFNBQUt0QyxLQUFMLENBQVd1QyxHQUFYLENBQWUsTUFBZixFQUF1QixZQUFNO0FBQ25COzs7OztBQUtULFVBQUtSLE9BQUwsQ0FBYSxXQUFiO0FBQ0EsVUFBS1MsV0FBTCxDQUFpQixrQkFBakI7QUFDQSxJQVJEOztBQVVBLFNBQUt4QyxLQUFMLENBQVdxQyxFQUFYLENBQWMsWUFBZCxFQUE0QixZQUFNO0FBQ2pDLFFBQUksTUFBS3JDLEtBQUwsQ0FBV0UsV0FBWCxHQUF5QixDQUE3QixFQUFnQztBQUMvQixXQUFLc0MsV0FBTCxDQUFpQixrQkFBakI7QUFDQTs7QUFFRDs7Ozs7QUFLQSxVQUFLVCxPQUFMLENBQWEsWUFBYixFQUEyQixFQUFFVSxNQUFPLE1BQUt6QyxLQUFMLENBQVdFLFdBQXBCLEVBQWlDd0MsVUFBVyxNQUFLMUMsS0FBTCxDQUFXMEMsUUFBdkQsRUFBM0I7QUFFQSxJQVpEOztBQWNBLFNBQUsxQyxLQUFMLENBQVdxQyxFQUFYLENBQWMsV0FBZCxFQUEyQixZQUFNO0FBQ2hDLFVBQUtHLFdBQUwsQ0FBaUIsaUJBQWpCOztBQUVBLFVBQUtHLEtBQUwsR0FBYSxJQUFiO0FBQ0E7Ozs7O0FBS0EsVUFBS1osT0FBTCxDQUFhLFdBQWI7QUFDQSxJQVZEOztBQVlBLFNBQUsvQixLQUFMLENBQVdxQyxFQUFYLENBQWMsU0FBZCxFQUF5QixZQUFNO0FBQzlCLFVBQUtPLGFBQUw7QUFDQTs7Ozs7QUFLQSxVQUFLYixPQUFMLENBQWEsU0FBYjtBQUNBLElBUkQ7O0FBVUEsU0FBSy9CLEtBQUwsQ0FBV3FDLEVBQVgsQ0FBYyxRQUFkLEVBQXdCLFlBQU07QUFDN0IsVUFBS1EsWUFBTDtBQUNBOzs7OztBQUtBLFVBQUtkLE9BQUwsQ0FBYSxRQUFiO0FBQ0EsSUFSRDs7QUFVQSxTQUFLL0IsS0FBTCxDQUFXcUMsRUFBWCxDQUFjLGNBQWQsRUFBOEIsWUFBTTtBQUNuQzs7Ozs7QUFLQSxVQUFLTixPQUFMLENBQWEsY0FBYixFQUE2QixFQUFFdkMsUUFBUyxNQUFLUSxLQUFMLENBQVdSLE1BQXRCLEVBQTdCO0FBQ0EsSUFQRDs7QUFTQSxTQUFLUSxLQUFMLENBQVdxQyxFQUFYLENBQWMsY0FBZCxFQUE4QixVQUFDUyxDQUFELEVBQUloQixJQUFKLEVBQWE7QUFDMUMsUUFBTWlCLE1BQU1qQixLQUFLaUIsR0FBakI7QUFDQSxVQUFLekUsTUFBTCxDQUFZeUUsR0FBWixHQUFrQkEsR0FBbEI7QUFDQSxVQUFLaEIsT0FBTCxDQUFhLGNBQWI7QUFDQSxJQUpEOztBQU1BLFNBQUsvQixLQUFMLENBQVdxQyxFQUFYLENBQWMsTUFBZCxFQUFzQixVQUFDUyxDQUFELEVBQU87QUFDNUIsVUFBS04sV0FBTCxDQUFpQixpQkFBakI7QUFDQSxVQUFLQSxXQUFMLENBQWlCLGtCQUFqQjtBQUNBLFVBQUtwRixRQUFMLENBQWMsbUJBQWQ7O0FBRUE7Ozs7O0FBS0EsVUFBSzJFLE9BQUwsQ0FBYSxNQUFiO0FBQ0EsSUFYRDs7QUFhQSxTQUFLL0IsS0FBTCxDQUFXcUMsRUFBWCxDQUFjLE9BQWQsRUFBdUIsWUFBTTtBQUM1QixVQUFLRyxXQUFMLENBQWlCLG1CQUFqQjtBQUNBLFVBQUtwRixRQUFMLENBQWMsa0JBQWQ7O0FBRUE7Ozs7O0FBS0EsVUFBSzJFLE9BQUwsQ0FBYSxPQUFiO0FBQ0EsSUFWRDs7QUFZQSxTQUFLL0IsS0FBTCxDQUFXcUMsRUFBWCxDQUFjLFNBQWQsRUFBeUIsWUFBTTtBQUM5QixVQUFLUSxZQUFMOztBQUVBOzs7OztBQUtBLFVBQUtkLE9BQUwsQ0FBYSxTQUFiO0FBQ0EsSUFURDs7QUFXQSxTQUFLL0IsS0FBTCxDQUFXcUMsRUFBWCxDQUFjLFlBQWQsRUFBNEIsWUFBTTtBQUNqQzs7Ozs7QUFLQSxVQUFLTixPQUFMLENBQWEsWUFBYixFQUEyQixFQUFFdEQsTUFBTyxNQUFLdUIsS0FBTCxDQUFXdkIsSUFBcEIsRUFBM0I7QUFDQSxJQVBEOztBQVNBLFNBQUt1QixLQUFMLENBQVdxQyxFQUFYLENBQWMsT0FBZCxFQUF1QixZQUFNO0FBQzVCLFVBQUtqRixRQUFMLENBQWMsaUJBQWQ7O0FBRUEsUUFBRyxNQUFLK0MsT0FBTCxDQUFhaEMsSUFBaEIsRUFBc0I7QUFDckIsV0FBSytCLFdBQUwsR0FBbUIsQ0FBbkI7QUFDQSxXQUFLRixLQUFMLENBQVdnRCxJQUFYO0FBQ0EsS0FIRCxNQUdPLElBQUksQ0FBQyxNQUFLaEQsS0FBTCxDQUFXaUQsTUFBaEIsRUFBd0I7QUFDOUIsV0FBS2pELEtBQUwsQ0FBV2tELEtBQVg7QUFDQTs7QUFFRDs7Ozs7QUFLQSxVQUFLbkIsT0FBTCxDQUFhLE9BQWI7QUFDQSxJQWhCRDs7QUFrQkEsU0FBSy9CLEtBQUwsQ0FBV3FDLEVBQVgsQ0FBYyxnQkFBZCxFQUFnQyxZQUFNO0FBQ3JDLFVBQUtRLFlBQUw7QUFDQTs7Ozs7QUFLQSxVQUFLZCxPQUFMLENBQWEsZ0JBQWI7QUFDQSxJQVJEOztBQVVBLFNBQUsvQixLQUFMLENBQVdxQyxFQUFYLENBQWMsU0FBZCxFQUF5QixZQUFNO0FBQzlCLFVBQUtPLGFBQUw7O0FBRUEsVUFBSzVDLEtBQUwsQ0FBV3VDLEdBQVgsQ0FBZSxZQUFmLEVBQTZCO0FBQUEsWUFBTSxNQUFLTSxZQUFMLEVBQU47QUFBQSxLQUE3Qjs7QUFFQTs7Ozs7QUFLQSxVQUFLZCxPQUFMLENBQWEsU0FBYjtBQUNBLElBWEQ7O0FBYUEsU0FBSy9CLEtBQUwsQ0FBV3FDLEVBQVgsQ0FBYyxPQUFkLEVBQXVCLFVBQUNTLENBQUQsRUFBSWhCLElBQUosRUFBYTtBQUNuQyxVQUFLYSxLQUFMLEdBQWEseUJBQWViLEtBQUtxQixJQUFwQixDQUFiO0FBQ0EsSUFGRDs7QUFJQSxTQUFLbkQsS0FBTCxDQUFXb0QsSUFBWCxHQUFrQnZCLElBQWxCLENBQXVCLFlBQU07QUFDNUI7Ozs7O0FBS0EsVUFBS0UsT0FBTCxDQUFhLFFBQWI7O0FBRUEsUUFBRyxNQUFLNUIsT0FBTCxDQUFhc0MsSUFBaEIsRUFBc0I7QUFDckIsV0FBS3ZDLFdBQUwsR0FBbUIsTUFBS0MsT0FBTCxDQUFhc0MsSUFBaEM7QUFDQTs7QUFFRCxRQUFHLE1BQUt6QyxLQUFMLENBQVdxRCxHQUFYLElBQWtCLElBQWxCLElBQTBCLE1BQUtsRCxPQUFMLENBQWFsQyxRQUExQyxFQUFvRDtBQUNuRCxXQUFLK0UsSUFBTDtBQUNBO0FBQ0QsSUFmRDs7QUFrQkEsU0FBS1gsRUFBTCxDQUFRLGtCQUFSLEVBQTRCLE1BQUtpQixtQkFBTCxDQUF5QkMsSUFBekIsT0FBNUI7QUFDQSxTQUFLbEIsRUFBTCxDQUFRLE9BQVIsRUFBaUIsTUFBS21CLFFBQUwsQ0FBY0QsSUFBZCxPQUFqQjtBQUNBLFNBQUtsQixFQUFMLENBQVEsVUFBUixFQUFvQixNQUFLb0IsVUFBTCxDQUFnQkYsSUFBaEIsT0FBcEI7QUFDQSxTQUFLbEIsRUFBTCxDQUFRLFFBQVIsRUFBa0IsTUFBS3FCLFNBQUwsQ0FBZUgsSUFBZixPQUFsQjtBQUNBLFNBQUtsQixFQUFMLENBQVEsTUFBUixFQUFnQixNQUFLc0IsT0FBTCxDQUFhSixJQUFiLE9BQWhCO0FBQ0EsU0FBS2xCLEVBQUwsQ0FBUSxPQUFSLEVBQWlCLE1BQUt1QixRQUFMLENBQWNMLElBQWQsT0FBakI7O0FBRUEseUJBQUVNLFFBQUYsRUFBWXhCLEVBQVosQ0FBZSx3QkFBY3lCLGdCQUE3QixFQUErQyxNQUFLQyx3QkFBTCxDQUE4QlIsSUFBOUIsT0FBL0M7QUFoVTZCO0FBaVU3Qjs7Ozs4QkFNVVMsSSxFQUFNN0QsTyxFQUFTO0FBQ3pCLFFBQU04RCxTQUFTbEQsT0FBT21ELFlBQVAsQ0FBb0JGLElBQXBCLENBQWY7QUFDQSxTQUFLRyxPQUFMLEdBQWUsSUFBSUYsTUFBSixDQUFXLElBQVgsRUFBaUI5RCxPQUFqQixDQUFmO0FBQ0E7O0FBRUQ7Ozs7Ozs7Ozs7OzswQkFTTztBQUNOLFdBQU8sS0FBS0gsS0FBTCxDQUFXZ0QsSUFBWCxFQUFQO0FBQ0E7O0FBRUQ7Ozs7Ozs7OzJCQUtRO0FBQ1AsV0FBTyxLQUFLaEQsS0FBTCxDQUFXa0QsS0FBWCxFQUFQO0FBQ0E7O0FBRUQ7Ozs7Ozs7O2dDQUthO0FBQ1osV0FBTyxLQUFLbEQsS0FBTCxDQUFXQyxVQUFYLEVBQVA7QUFDQTs7QUFFRDs7Ozs7Ozs7MEJBS087QUFDTixXQUFPLEtBQUtELEtBQUwsQ0FBV29FLElBQVgsRUFBUDtBQUNBOztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7NkJBWVVDLEksRUFBZTtBQUFBLHNDQUFOQyxJQUFNO0FBQU5BLFNBQU07QUFBQTs7QUFDeEIsU0FBS2pDLEVBQUwsMkJBQW1CZ0MsSUFBbkIsU0FBOEJDLElBQTlCOztBQUVBLFdBQU8sSUFBUDtBQUNBOztBQUVEOzs7Ozs7Ozs7OztpQ0FRY0MsTyxFQUFTO0FBQ3RCLFFBQU12RSxRQUFRLEtBQUtBLEtBQW5CO0FBQ0EsUUFBR3VFLFdBQVcsSUFBZCxFQUFvQjtBQUNwQixRQUFNOUIsT0FBTyxLQUFLdkMsV0FBbEI7QUFDQSxRQUFNekIsT0FBTyxLQUFLQSxJQUFsQjtBQUNBLFFBQU0rRixXQUFXLEtBQUt2QixNQUF0Qjs7QUFFQWpELFVBQU1xRCxHQUFOLEdBQVlrQixPQUFaO0FBQ0EsU0FBS0UsWUFBTCxHQUFvQmhHLElBQXBCO0FBQ0EsU0FBS3lCLFdBQUwsR0FBbUJ1QyxJQUFuQjs7QUFFQSxRQUFHK0IsUUFBSCxFQUFhO0FBQ1osVUFBS3RCLEtBQUw7QUFDQSxLQUZELE1BRU87QUFDTixVQUFLRixJQUFMO0FBQ0E7QUFDRDs7QUFFRDs7Ozs7Ozs7Ozs7Ozs2QkFVVXFCLEksRUFBZTtBQUFBLHVDQUFOQyxJQUFNO0FBQU5BLFNBQU07QUFBQTs7QUFDeEIsU0FBS2pDLEVBQUwsMkJBQW1CZ0MsSUFBbkIsU0FBOEJDLElBQTlCOztBQUVBLFdBQU8sSUFBUDtBQUNBOztBQUVEOzs7Ozs7Ozs7NkJBTVU7QUFDVCxRQUFNSSxNQUFNLElBQUksaUJBQUVDLFFBQU4sRUFBWjs7QUFFQSxRQUFJLEtBQUtDLEtBQUwsS0FBZUMsU0FBbkIsRUFBOEI7QUFDN0JILFNBQUlJLE9BQUosQ0FBWSxLQUFLRixLQUFqQjtBQUNBLFlBQU9GLElBQUlLLE9BQUosRUFBUDtBQUNBOztBQUVELFFBQUksT0FBTyxLQUFLNUUsT0FBTCxDQUFhMkIsSUFBcEIsS0FBNkIsUUFBakMsRUFBMkM7QUFDMUMsWUFBTyxpQkFBRWtELElBQUYsQ0FBTztBQUNiakMsV0FBTSxLQUFLNUMsT0FBTCxDQUFhMkIsSUFETjtBQUVibUQsY0FBUyxLQUZJO0FBR2JDLGdCQUFXO0FBSEUsTUFBUCxFQUlKSCxPQUpJLEVBQVA7QUFNQSxLQVBELE1BT08sSUFBSSxRQUFPLEtBQUs1RSxPQUFMLENBQWEyQixJQUFwQixNQUE2QixRQUFqQyxFQUEyQztBQUNqRDRDLFNBQUlJLE9BQUosQ0FBWSxLQUFLM0UsT0FBTCxDQUFhMkIsSUFBekI7QUFDQSxZQUFPNEMsSUFBSUssT0FBSixFQUFQO0FBQ0E7QUFDRDs7O29DQUVnQjtBQUNoQixXQUFPLEtBQUtJLE9BQUwsR0FDTHRELElBREssQ0FDQSxnQkFBUTtBQUNiLFlBQU9DLEtBQUt2QixRQUFaO0FBQ0EsS0FISyxDQUFQO0FBSUE7O0FBRUQ7Ozs7Ozs7Ozt1Q0FNb0I7QUFDbkIsUUFBTTZFLCtCQUFOOztBQUVBLFFBQUdBLE1BQU1DLGlCQUFULEVBQTRCO0FBQzNCO0FBQ0EsVUFBS2xJLE9BQUwsQ0FBYSxDQUFiLEVBQWdCaUksTUFBTUMsaUJBQXRCOztBQUVBOzs7OztBQUtBLFVBQUt0RCxPQUFMLENBQWEsa0JBQWIsRUFBaUMsSUFBakM7QUFDQSxLQVZELE1BVU8sSUFBSSxLQUFLL0IsS0FBTCxDQUFXc0Ysa0JBQVgsRUFBSixFQUFxQztBQUMzQyxVQUFLdEYsS0FBTCxDQUFXdUYsZUFBWDtBQUNBO0FBQ0Q7O0FBRUQ7Ozs7Ozs7OztvQ0FNaUI7QUFDaEIsUUFBTUgsK0JBQU47O0FBRUEsUUFBR0EsTUFBTUksY0FBVCxFQUF5QjtBQUN4QjNCLGNBQVN1QixNQUFNSSxjQUFmO0FBQ0EsS0FGRCxNQUVPLElBQUksS0FBS3hGLEtBQUwsQ0FBV3NGLGtCQUFYLEVBQUosRUFBcUM7QUFDM0MsVUFBS3RGLEtBQUwsQ0FBV3dGLGNBQVg7QUFDQTs7QUFFRCxTQUFLekQsT0FBTCxDQUFhLGtCQUFiLEVBQWlDLEtBQWpDO0FBRUE7O0FBRUQ7Ozs7Ozs7OztzQ0FNbUI7QUFDbEIsUUFBRyxLQUFLc0MsSUFBTCxLQUFjLFlBQWpCLEVBQStCO0FBQzlCLFVBQUttQixjQUFMO0FBQ0EsS0FGRCxNQUVPO0FBQ04sVUFBS0gsaUJBQUw7QUFDQTtBQUNEOztBQUVEOzs7Ozs7Ozs7OytCQU9ZckIsSSxFQUFNO0FBQ2pCLFdBQU8sS0FBSzlFLFFBQUwsQ0FBYzhFLElBQWQsQ0FBUDtBQUNBOztBQUVEOzs7Ozs7Ozs7OEJBTVc7QUFDVixXQUFPLEtBQUs3RyxPQUFMLENBQWFzSSxLQUFiLEVBQVA7QUFDQTs7QUFFRDs7Ozs7Ozs7OztxQ0FPa0JsRixRLEVBQVU7QUFDM0IsUUFBSUEsWUFBWSxJQUFaLElBQW9CQSxTQUFTbUYsTUFBVCxLQUFvQixDQUE1QyxFQUErQztBQUM5QztBQUNBO0FBQ0QsUUFBSUMsY0FBYyxHQUFHbEksTUFBSCxDQUFVOEMsUUFBVixDQUFsQjtBQUNBLFNBQUssSUFBSXFGLElBQUksQ0FBYixFQUFnQkEsSUFBSUQsWUFBWUQsTUFBaEMsRUFBd0NFLEdBQXhDLEVBQTZDO0FBQzVDLFNBQUlDLG1CQUFKO0FBQ0EsU0FBSUQsSUFBS0QsWUFBWUQsTUFBWixHQUFxQixDQUE5QixFQUFrQztBQUNqQ0csbUJBQWFGLFlBQVlDLElBQUUsQ0FBZCxFQUFpQkUsS0FBOUI7QUFDQSxNQUZELE1BRU87QUFDTkQsbUJBQWEsS0FBSzdGLEtBQUwsQ0FBVzBDLFFBQXhCO0FBQ0E7QUFDRGlELGlCQUFZQyxDQUFaLEVBQWVHLEdBQWYsR0FBcUJGLFVBQXJCO0FBQ0E7QUFDRCxXQUFPRixXQUFQO0FBQ0E7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7QUFnS0E7Ozs7O21DQUtnQjtBQUNmLFFBQU14RixVQUFVLEtBQUtBLE9BQXJCO0FBQ0EsUUFBTWhELFVBQVUsS0FBSzhELFFBQXJCOztBQUVBLFNBQUs5RCxPQUFMLEdBQWUscUJBQVMsS0FBVCxDQUFmOztBQUdBLFNBQUtBLE9BQUwsR0FBZSxLQUFLQSxPQUFMLENBQ2JDLFFBRGEsQ0FDSixVQURJLEVBRWI0SSxJQUZhLENBRVIsVUFGUSxFQUVJLENBRkosRUFHYkMsR0FIYSxDQUdULE9BSFMsRUFHQTlGLFFBQVFzRixLQUFSLElBQWlCLE1BSGpCLEVBSWJRLEdBSmEsQ0FJVCxXQUpTLEVBSUk5RixRQUFRc0YsS0FKWixDQUFmOztBQU1BOzs7Ozs7QUFNQSxTQUFLUyxZQUFMLEdBQW9CLDJCQUFpQixJQUFqQixDQUFwQjs7QUFHQTs7Ozs7O0FBTUEsU0FBS0MsVUFBTCxHQUFrQix5QkFBZSxJQUFmLENBQWxCOztBQUVBO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLHNCQUFFLFNBQUYsRUFDWmhKLFFBRFksQ0FDSCwyQkFERyxFQUVaaUosTUFGWSxDQUVMLG1CQUFTLElBQVQsRUFBZTtBQUN0QkMsZUFBVyxTQURXO0FBRXRCQyxnQkFBWTtBQUZVLEtBQWYsRUFHTHBKLE9BTFUsQ0FBZDs7QUFRQTs7Ozs7O0FBTUEsU0FBS2lELFVBQUwsR0FBa0IseUJBQWUsSUFBZixDQUFsQjs7QUFFQSxTQUFLb0csY0FBTCxHQUFzQixxQkFBUyxLQUFULEVBQWdCO0FBQ3JDRCxnQkFBWTtBQUR5QixLQUFoQixFQUdyQkYsTUFIcUIsQ0FHZCxLQUFLSCxZQUFMLENBQWtCL0ksT0FISixFQUlyQmtKLE1BSnFCLENBSWQsS0FBS0YsVUFBTCxDQUFnQmhKLE9BSkYsRUFLckJrSixNQUxxQixDQUtkLEtBQUtELE1BTFMsRUFNckJDLE1BTnFCLENBTWQsS0FBS2pHLFVBQUwsQ0FBZ0JqRCxPQU5GLENBQXRCOztBQVFBLFNBQUttQixNQUFMLEdBQWMscUJBQVcsSUFBWCxDQUFkO0FBQ0EsU0FBS2tJLGNBQUwsQ0FBb0JILE1BQXBCLENBQTJCLEtBQUsvSCxNQUFMLENBQVluQixPQUF2Qzs7QUFHQSxRQUFNc0osWUFBWSxtQkFBUyxJQUFULEVBQWU7QUFDaEMzRyxTQUFLLFlBQUNDLE1BQUQsRUFBWTtBQUNoQixVQUFNQyxRQUFRRCxPQUFPQyxLQUFyQjtBQUNBLGFBQU8sMEJBQWNBLE1BQU0wQyxRQUFOLEdBQWlCMUMsTUFBTUUsV0FBckMsQ0FBUDtBQUNBO0FBSitCLEtBQWYsQ0FBbEI7O0FBT0EsUUFBRyxLQUFLQyxPQUFMLENBQWF1RyxTQUFoQixFQUEyQjtBQUMxQkMsYUFBUUMsSUFBUixDQUFhLHdFQUFiO0FBQ0E7O0FBRUQsU0FBS0MsV0FBTCxHQUFtQixxQkFBUyxLQUFULEVBQWdCO0FBQ2xDTixnQkFBWTtBQURzQixLQUFoQixFQUdsQkYsTUFIa0IsQ0FHWCxxQkFBUyxLQUFULEVBQWdCO0FBQ3ZCRSxnQkFBWSxpQkFEVztBQUV2Qk8sV0FBTyxLQUFLM0csT0FBTCxDQUFhNEcsS0FBYixJQUFzQjtBQUZOLEtBQWhCLENBSFcsRUFPbEJWLE1BUGtCLENBT1gscUJBQVMsS0FBVCxFQUFnQjtBQUN2QkUsZ0JBQVksc0JBRFc7QUFFdkJPLFdBQU8sS0FBSzNHLE9BQUwsQ0FBYU4sV0FBYixJQUE0QixLQUFLTSxPQUFMLENBQWF1RyxTQUF6QyxJQUFzRDtBQUZ0QyxLQUFoQixDQVBXLEVBV2xCTCxNQVhrQixDQVdYLHFCQUFTLEtBQVQsRUFBZ0I7QUFDdkJFLGdCQUFZLGdCQURXO0FBRXZCTztBQUZ1QixLQUFoQixFQUdMVCxNQUhLLENBR0VJLFVBQVV0SixPQUhaLENBWFcsQ0FBbkI7O0FBZ0JBLFNBQUsrRCxZQUFMLEdBQW9CLHNCQUFFLFNBQUYsRUFDbEI5RCxRQURrQixDQUNULGlCQURTLEVBRWxCaUosTUFGa0IsQ0FFWCxLQUFLRyxjQUZNLEVBR2xCSCxNQUhrQixDQUdYLEtBQUtRLFdBSE0sQ0FBcEI7O0FBS0EsU0FBSzFKLE9BQUwsR0FBZSxLQUFLQSxPQUFMLENBQ2JrSixNQURhLENBQ04sS0FBS25GLFlBREMsQ0FBZjs7QUFHQSxTQUFLOUQsUUFBTCxDQUFjLGtCQUFkO0FBQ0EsU0FBS0EsUUFBTCxDQUFjLGtCQUFkOztBQUVBLDRCQUFjO0FBQ2IsVUFBS0EsUUFBTCxDQUFjLGtCQUFkO0FBQ0E7O0FBRUQsNkJBQWU7QUFDZCxVQUFLQSxRQUFMLENBQWMsbUJBQWQ7QUFDQTs7QUFFRCw0QkFBYztBQUNiLFVBQUtBLFFBQUwsQ0FBYyxrQkFBZDtBQUNBOztBQUlELFFBQUcrQyxRQUFRNkcsZ0JBQVgsRUFBNkI7QUFDNUIsVUFBS0MsaUJBQUwsR0FBeUIsc0JBQUU5RyxRQUFRNkcsZ0JBQVYsQ0FBekI7QUFDQTs7QUFFRDdKLFlBQVErSixNQUFSLENBQWUsS0FBSy9KLE9BQXBCO0FBQ0EsU0FBS3FKLGNBQUwsQ0FBb0JILE1BQXBCLENBQTJCbEosT0FBM0I7O0FBRUEsV0FBTyxLQUFLQSxPQUFaO0FBQ0E7O0FBRUQ7Ozs7Ozs7Ozs7O3lDQVFzQjtBQUNyQjtBQUNBLFFBQU9BLFVBQVUsS0FBSzhELFFBQXRCO0FBQ0EsUUFBSTlELFdBQVcsSUFBWCxJQUFtQkEsUUFBUXVJLE1BQVIsS0FBbUIsQ0FBMUMsRUFBNkM7QUFDNUMsWUFBTyxFQUFQO0FBQ0E7O0FBRUQsUUFBSXlCLGNBQWMsQ0FDakIsUUFEaUIsRUFFakIsT0FGaUIsRUFHakIsUUFIaUIsRUFJakIsVUFKaUIsRUFLakIsTUFMaUIsRUFNakIsT0FOaUIsRUFPakIsU0FQaUIsRUFTakJDLE1BVGlCLENBU1YsVUFBQ0MsR0FBRCxFQUFNeEosSUFBTixFQUFlO0FBQ3RCLFNBQU15SixNQUFNbkssUUFBUTZJLElBQVIsQ0FBYW5JLElBQWIsQ0FBWjtBQUNBLFNBQUd5SixPQUFPLElBQVYsRUFBZ0I7QUFDZkQsVUFBSXhKLElBQUosSUFBWVYsUUFBUTZJLElBQVIsQ0FBYW5JLElBQWIsQ0FBWjtBQUNBO0FBQ0QsWUFBT3dKLEdBQVA7QUFDQSxLQWZpQixFQWVmLEVBZmUsQ0FBbEI7O0FBaUJBRixnQkFBWUksT0FBWixHQUFzQixFQUF0Qjs7QUFFQTtBQUNBLFFBQUdwSyxRQUFRNkksSUFBUixDQUFhLEtBQWIsQ0FBSCxFQUF3QjtBQUN2Qm1CLGlCQUFZOUQsR0FBWixHQUFrQjtBQUNqQk4sV0FBTTVGLFFBQVE2SSxJQUFSLENBQWEsS0FBYixDQURXO0FBRWpCZSxhQUFRNUosUUFBUTZJLElBQVIsQ0FBYSxjQUFiLEtBQWdDN0ksUUFBUTZJLElBQVIsQ0FBYSxPQUFiLENBQWhDLElBQXlEO0FBRmhELE1BQWxCO0FBSUE7O0FBRUQ7QUFDQTtBQUNBN0ksWUFBUXFLLElBQVIsQ0FBYSxRQUFiLEVBQXVCQyxJQUF2QixDQUE0QixVQUFDN0IsQ0FBRCxFQUFJL0gsSUFBSixFQUFhO0FBQ3hDQSxZQUFPLHNCQUFFQSxJQUFGLENBQVA7QUFDQSxTQUFHLENBQUNBLEtBQUttSSxJQUFMLENBQVUsY0FBVixDQUFKLEVBQStCO0FBQzlCO0FBQ0E7QUFDRG1CLGlCQUFZSSxPQUFaLEdBQXNCSixZQUFZSSxPQUFaLENBQW9COUosTUFBcEIsQ0FBMkI7QUFDaERzRixXQUFNbEYsS0FBS21JLElBQUwsQ0FBVSxLQUFWLENBRDBDO0FBRWhEZSxhQUFRbEosS0FBS21JLElBQUwsQ0FBVSxjQUFWLEtBQTZCbkksS0FBS21JLElBQUwsQ0FBVSxPQUFWLENBQTdCLElBQW1EO0FBRlgsTUFBM0IsQ0FBdEI7QUFLQSxLQVZEOztBQVlBLFdBQU9tQixXQUFQO0FBQ0E7O0FBRUQ7Ozs7Ozs7Ozs7O2tDQVFlTyxLLEVBQU87QUFDckIsUUFBR0EsU0FBUyxJQUFaLEVBQWtCO0FBQ2pCQSxhQUFRLEtBQUsxSCxLQUFMLENBQVdSLE1BQW5CO0FBQ0E7QUFDRCxRQUFNQSxTQUFTa0ksS0FBZjs7QUFFQSxRQUFJbEksU0FBUyxLQUFLVyxPQUFMLENBQWFYLE1BQWIsQ0FBb0JDLFNBQWpDLEVBQTRDO0FBQzNDLFlBQU8sWUFBUDtBQUNBLEtBRkQsTUFFTyxJQUFJaUksUUFBUSxHQUFaLEVBQWlCO0FBQ3ZCLFlBQU8sYUFBUDtBQUNBLEtBRk0sTUFFQTtBQUNOLFlBQU8sV0FBUDtBQUNBO0FBQ0Q7OztrQ0FFY0MsSSxFQUFNO0FBQ3BCLFFBQUcsS0FBS3BILFFBQVIsRUFBa0I7QUFDakIsVUFBS0EsUUFBTCxDQUFjcUgsT0FBZCxHQUF3QkQsSUFBeEI7QUFDQTtBQUNELFFBQUcsS0FBS0UsZUFBUixFQUF5QjtBQUN4QixVQUFLQSxlQUFMLENBQXFCRCxPQUFyQixHQUErQkQsSUFBL0I7QUFDQTtBQUNEOztBQUlEOzs7Ozs7Ozs7O2tDQU9lO0FBQUE7O0FBQ2QsUUFBTVIsY0FBYyxLQUFLVyxtQkFBTCxFQUFwQjtBQUNBLFFBQUlDLGdCQUFnQixFQUFwQjs7QUFFQSxRQUFJLEtBQUs1RyxZQUFMLENBQWtCNkcsTUFBbEIsSUFBNEJqSCxPQUFPa0gsU0FBUCxDQUFpQixLQUFLOUcsWUFBTCxDQUFrQjZHLE1BQW5DLENBQWhDLEVBQTRFO0FBQzNFRCxxQkFBZ0JoSCxPQUFPa0gsU0FBUCxDQUFpQixLQUFLOUcsWUFBTCxDQUFrQjZHLE1BQW5DLEVBQTJDN0gsT0FBM0Q7QUFDQTs7QUFHRDtBQUNBLFNBQUtBLE9BQUwsR0FBZSxpQkFBRStILE1BQUYsQ0FBUyxJQUFULEVBQWUsRUFBZixFQUFtQm5LLGNBQW5CLEVBQW1DZ0ssYUFBbkMsRUFBa0RaLFdBQWxELEVBQStELEtBQUtoRyxZQUFwRSxDQUFmOztBQUVBLFFBQUcsS0FBS2hCLE9BQUwsQ0FBYW9ILE9BQWIsSUFBd0IsQ0FBQ1ksTUFBTUMsT0FBTixDQUFjLEtBQUtqSSxPQUFMLENBQWFvSCxPQUEzQixDQUE1QixFQUFpRTtBQUNoRSxVQUFLcEgsT0FBTCxDQUFhb0gsT0FBYixHQUF1QixDQUFDLEtBQUtwSCxPQUFMLENBQWFvSCxPQUFkLENBQXZCO0FBQ0E7O0FBRUQsUUFBRyxPQUFPLEtBQUtwSCxPQUFMLENBQWFrRCxHQUFwQixLQUE0QixRQUEvQixFQUF5QztBQUN4QyxVQUFLbEQsT0FBTCxDQUFha0QsR0FBYixHQUFtQixFQUFFTixLQUFNLEtBQUs1QyxPQUFMLENBQWFrRCxHQUFyQixFQUFuQjtBQUNBOztBQUVELFFBQUcsS0FBS2xELE9BQUwsQ0FBYWtELEdBQWIsSUFBb0IsSUFBcEIsSUFBNEIsS0FBS2xELE9BQUwsQ0FBYW9ILE9BQWIsQ0FBcUI3QixNQUFyQixHQUE4QixDQUE3RCxFQUFnRTtBQUMvRCxVQUFLdkYsT0FBTCxDQUFha0QsR0FBYixHQUFtQixLQUFLbEQsT0FBTCxDQUFhb0gsT0FBYixDQUFxQixDQUFyQixDQUFuQjtBQUNBOztBQUdEOzs7QUFHQTtBQUNBLFNBQUtwSCxPQUFMLENBQWFqQixRQUFiLEdBQXdCLGlCQUFFZ0osTUFBRixDQUFTLEVBQVQsRUFBYW5LLGVBQWVtQixRQUE1QixFQUFzQzZJLGNBQWM3SSxRQUFwRCxFQUE4RCxLQUFLaUMsWUFBTCxDQUFrQmpDLFFBQWhGLENBQXhCOztBQUVBO0FBQ0E7QUFDQTs7QUFqQ2MsK0JBa0NIOEUsSUFsQ0c7QUFtQ2IsU0FBSSxDQUFDLE9BQUs3RCxPQUFMLENBQWFrSSxlQUFiLENBQTZCQyxjQUE3QixDQUE0Q3RFLElBQTVDLENBQUwsRUFBd0Q7QUFBQTtBQUFBO0FBQ3hELFNBQU11RSxvQkFBb0IsT0FBS3BJLE9BQUwsQ0FBYWtJLGVBQWIsQ0FBNkJyRSxJQUE3QixDQUExQjtBQUNBdUUsdUJBQWtCN0ssT0FBbEIsQ0FBMEIsVUFBQzhLLEdBQUQsRUFBTTdLLEtBQU4sRUFBZ0I7QUFDekMsVUFBSSxPQUFLd0MsT0FBTCxDQUFhakIsUUFBYixDQUFzQjhFLElBQXRCLEtBQStCLE9BQUs3RCxPQUFMLENBQWFqQixRQUFiLENBQXNCOEUsSUFBdEIsRUFBNEJyRyxLQUE1QixDQUFuQyxFQUF1RTtBQUN0RSxjQUFLd0MsT0FBTCxDQUFhakIsUUFBYixDQUFzQjhFLElBQXRCLEVBQTRCckcsS0FBNUIsSUFBcUNOLGFBQWEsT0FBSzhDLE9BQUwsQ0FBYWpCLFFBQWIsQ0FBc0I4RSxJQUF0QixFQUE0QnJHLEtBQTVCLENBQWIsRUFBaUQ2SyxHQUFqRCxDQUFyQztBQUNBO0FBQ0QsTUFKRDtBQXJDYTs7QUFrQ2QsU0FBSyxJQUFNeEUsSUFBWCxJQUFtQixLQUFLN0QsT0FBTCxDQUFha0ksZUFBaEMsRUFBaUQ7QUFBQSxzQkFBdENyRSxJQUFzQzs7QUFBQTtBQVFoRDs7QUFFRCxRQUFJLEtBQUs3RCxPQUFMLENBQWE2SCxNQUFiLElBQXVCakgsT0FBT2tILFNBQVAsQ0FBaUIsS0FBSzlILE9BQUwsQ0FBYTZILE1BQTlCLENBQTNCLEVBQWtFO0FBQ2pFakgsWUFBT2tILFNBQVAsQ0FBaUIsS0FBSzlILE9BQUwsQ0FBYTZILE1BQTlCLEVBQXNDUyxXQUF0QztBQUNBO0FBQ0Q7O0FBRUQ7Ozs7Ozs7O21DQUtnQjtBQUFBLGVBQ0ksQ0FBQyxRQUFELEVBQVcsWUFBWCxDQURKOztBQUNmLDZDQUE2QztBQUF4QyxTQUFNekUsZUFBTjtBQUNKLFNBQUksQ0FBQyxLQUFLN0QsT0FBTCxDQUFhakIsUUFBYixDQUFzQm9KLGNBQXRCLENBQXFDdEUsSUFBckMsQ0FBTCxFQUFpRDtBQUNqRCxTQUFNdUUsb0JBQW9CLGdDQUFzQixJQUF0QixFQUE0QixFQUFFdkUsVUFBRixFQUE1QixDQUExQjs7QUFFQSxVQUFLN0csT0FBTCxDQUFha0osTUFBYixDQUFvQmtDLGtCQUFrQnBMLE9BQXRDO0FBQ0E7O0FBRUQsUUFBSSxLQUFLK0IsUUFBTCxDQUFjQyxNQUFkLElBQXdCLElBQTVCLEVBQWtDO0FBQ2pDLFVBQUtELFFBQUwsQ0FBY0MsTUFBZCxDQUFxQnVKLE1BQXJCLEdBQThCLElBQTlCO0FBQ0E7QUFDRDs7O29DQUdnQjtBQUFBOztBQUVoQixRQUFNQyxlQUFlLFNBQWZBLFlBQWUsQ0FBQzdGLENBQUQsRUFBSThGLE9BQUosRUFBZ0I7QUFDcEMsWUFBTyxDQUFFOUYsRUFBRStGLEtBQUYsS0FBWUQsUUFBUWpKLEdBQXJCLElBQThCbUQsRUFBRW5ELEdBQUYsS0FBVWlKLFFBQVFqSixHQUFqRCxLQUNKLENBQUMsQ0FBQ2lKLFFBQVF0SSxRQUFWLEtBQXVCd0MsRUFBRXhDLFFBRHJCLElBRUosQ0FBQyxDQUFDc0ksUUFBUUUsT0FBVixLQUFzQmhHLEVBQUVnRyxPQUYzQjtBQUdBLEtBSkQ7O0FBTUEsU0FBSzNMLE9BQUwsQ0FBYWtGLEVBQWIsQ0FBZ0IseUJBQWhCLEVBQTJDLFVBQUNTLENBQUQsRUFBTztBQUNqRCxZQUFLM0MsT0FBTCxDQUFhVCxVQUFiLENBQXdCaEMsT0FBeEIsQ0FBZ0MsbUJBQVc7O0FBRTFDLFVBQUdpTCxhQUFhN0YsQ0FBYixFQUFnQjhGLE9BQWhCLENBQUgsRUFBNkI7QUFDNUI5RixTQUFFaUcsY0FBRjtBQUNBSCxlQUFROUksRUFBUjtBQUNBLGNBQU8sS0FBUDtBQUNBO0FBRUQsTUFSRDtBQVNBLEtBVkQ7QUFXQTs7QUFFRDs7Ozs7Ozs7O21DQU1nQjtBQUFBOztBQUNmLFFBQU00RSxNQUFNLGlCQUFFQyxRQUFGLEVBQVo7QUFDQSxRQUFJLEtBQUt4RSxPQUFMLENBQWEyQixJQUFiLElBQXFCLElBQXpCLEVBQStCO0FBQzlCNEMsU0FBSXNFLE1BQUosQ0FBVyxJQUFYO0FBQ0EsS0FGRCxNQUVPO0FBQ04sVUFBS0MsY0FBTCxHQUFzQkMsSUFBdEIsQ0FBMkIsb0JBQVk7QUFDdEMzSSw4Q0FBZUEsUUFBZjs7QUFFQSxVQUFNNEksbUJBQW9CLE9BQUtsQyxpQkFBTCxJQUEwQixPQUFLQSxpQkFBTCxDQUF1QnZCLE1BQXZCLEdBQWdDLENBQXBGOztBQUVBLFVBQUluRixZQUFZLElBQVosSUFBb0JBLFNBQVNtRixNQUFULEtBQW9CLENBQTVDLEVBQStDO0FBQzlDaEIsV0FBSXNFLE1BQUosQ0FBVyxJQUFYO0FBQ0E7QUFDQTs7QUFFRHpJLGlCQUFXLE9BQUs2SSxpQkFBTCxDQUF1QjdJLFFBQXZCLENBQVg7O0FBRUEsYUFBS0EsUUFBTCxHQUFnQiwrQkFBbUI7QUFDbEM4SSxjQUFROUksUUFEMEI7QUFFbEMrSSx1QkFBaUJILGdCQUZpQjtBQUdsQ0ksbUJBQWE7QUFIcUIsT0FBbkIsQ0FBaEI7O0FBTUEsYUFBS3JJLFlBQUwsQ0FBa0JtRixNQUFsQixDQUF5QixPQUFLOUYsUUFBTCxDQUFjcEQsT0FBdkM7O0FBRUEsVUFBSWdNLGdCQUFKLEVBQXNCO0FBQ3JCLGNBQUt0QixlQUFMLEdBQXVCLCtCQUFtQjtBQUN6Q3dCLGVBQVE5STtBQURpQyxRQUFuQixDQUF2QjtBQUdBLGNBQUswRyxpQkFBTCxDQUF1QlosTUFBdkIsQ0FBOEIsT0FBS3dCLGVBQUwsQ0FBcUIxSyxPQUFuRDtBQUNBO0FBQ0R1SCxVQUFJSSxPQUFKLENBQVksRUFBRXVFLE9BQVE5SSxRQUFWLEVBQVo7QUFDQSxNQTNCRDtBQTRCQTs7QUFFRCxXQUFPbUUsSUFBSUssT0FBSixFQUFQO0FBQ0E7O0FBRUQ7Ozs7Ozs7Ozs7a0NBT2U7QUFDZCxRQUFJLEtBQUs1RSxPQUFMLENBQWFTLE9BQWpCLEVBQTBCO0FBQ3pCLFVBQUssSUFBTW9ELElBQVgsSUFBbUIsS0FBSzdELE9BQUwsQ0FBYVMsT0FBaEMsRUFBeUM7QUFDeEMsVUFBRyxDQUFDLEtBQUtULE9BQUwsQ0FBYVMsT0FBYixDQUFxQjBILGNBQXJCLENBQW9DdEUsSUFBcEMsQ0FBSixFQUErQztBQUMvQyxVQUFNd0YsZ0JBQWdCLEtBQUtySixPQUFMLENBQWFTLE9BQWIsQ0FBcUJvRCxJQUFyQixDQUF0QjtBQUNBLFVBQUcsS0FBS0EsSUFBTCxDQUFILEVBQWU7QUFDZCxXQUFHd0YsYUFBSCxFQUFrQjtBQUNqQixhQUFLeEYsSUFBTCxFQUFXd0YsYUFBWDtBQUNBO0FBQ0QsT0FKRCxNQUlPO0FBQ043QyxlQUFRaEUsS0FBUixlQUF5QnFCLElBQXpCO0FBQ0E7QUFDRDtBQUNEOztBQUVELFdBQU8sSUFBUDtBQUNBOztBQUdEOzs7Ozs7eUNBR3NCO0FBQUE7O0FBQ3JCLFFBQUl5Rix3QkFBSjtBQUNBLFFBQUlDLGtCQUFKO0FBQ0EsUUFBSUMsa0JBQUo7O0FBRUEsUUFBTUMsY0FBYyxTQUFkQSxXQUFjLENBQUM5RyxDQUFELEVBQU87QUFDMUIsU0FBR0EsRUFBRStHLE9BQUYsS0FBY0gsU0FBZCxJQUEyQjVHLEVBQUVnSCxPQUFGLEtBQWNILFNBQTVDLEVBQXVEO0FBQ3RERCxrQkFBWTVHLEVBQUUrRyxPQUFkO0FBQ0FGLGtCQUFZN0csRUFBRWdILE9BQWQ7QUFDQSxhQUFLNUgsYUFBTCxHQUFxQixJQUFyQjtBQUNBO0FBQ0QsS0FORDs7QUFRQSxRQUFNNkgsY0FBYyxTQUFkQSxXQUFjLENBQUNqSCxDQUFELEVBQU87QUFDMUIsWUFBS1osYUFBTCxHQUFxQixJQUFyQjs7QUFFQTtBQUNBOEgsbUJBQWNQLGVBQWQ7O0FBRUFBLHVCQUFrQlEsWUFBWSxZQUFNO0FBQ25DLGFBQUsvSCxhQUFMLEdBQXFCLElBQXJCO0FBQ0EsTUFGaUIsRUFFZixHQUZlLENBQWxCO0FBR0EsS0FURDs7QUFXQSxRQUFNZ0ksWUFBWSxTQUFaQSxTQUFZLENBQUNwSCxDQUFELEVBQU87QUFDeEIsWUFBS1osYUFBTCxHQUFxQixJQUFyQjtBQUNBOEgsbUJBQWNQLGVBQWQ7QUFDQSxLQUhEOztBQUtBLFNBQUt0TSxPQUFMLENBQWFrRixFQUFiLENBQWdCLFdBQWhCLEVBQTZCdUgsV0FBN0I7O0FBRUEsU0FBS3pNLE9BQUwsQ0FBYWtGLEVBQWIsQ0FBZ0IsV0FBaEIsRUFBNkIwSCxXQUE3Qjs7QUFFQSxTQUFLNU0sT0FBTCxDQUFha0YsRUFBYixDQUFnQixTQUFoQixFQUEyQjZILFNBQTNCOztBQUVBLFNBQUsvTSxPQUFMLENBQWFrRixFQUFiLENBQWdCLFNBQWhCLEVBQTJCLFVBQUNTLENBQUQ7QUFBQSxZQUFPLE9BQUtaLGFBQUwsR0FBcUIsSUFBNUI7QUFBQSxLQUEzQjtBQUNBLFNBQUsvRSxPQUFMLENBQWFrRixFQUFiLENBQWdCLE9BQWhCLEVBQXlCLFVBQUNTLENBQUQ7QUFBQSxZQUFPLE9BQUtaLGFBQUwsR0FBcUIsSUFBNUI7QUFBQSxLQUF6Qjs7QUFFQTtBQUNBLFFBQUlpSSwwQkFBSjtBQUNBLFFBQU1DLFFBQVEsS0FBS2pLLE9BQUwsQ0FBYTNCLGtCQUEzQjtBQUNBeUwsZ0JBQVksWUFBTTtBQUNqQixTQUFJLE9BQUsvSCxhQUFULEVBQXdCOztBQUV2QjtBQUNBLGFBQUtBLGFBQUwsR0FBcUIsS0FBckI7O0FBRUEsYUFBS21JLFVBQUwsR0FBa0IsSUFBbEI7O0FBRUFDLG1CQUFhSCxpQkFBYjs7QUFFQSxVQUFJQyxRQUFRLENBQVosRUFBZTs7QUFFZEQsMkJBQW9CSSxXQUFXLFlBQU07QUFDcEMsWUFBSSxDQUFDLE9BQUtySSxhQUFWLEVBQXlCO0FBQ3hCLGdCQUFLbUksVUFBTCxHQUFrQixLQUFsQjtBQUNBO0FBQ0QsUUFKbUIsRUFJakJELEtBSmlCLENBQXBCO0FBS0E7QUFDRDtBQUNELEtBbkJELEVBbUJHLEdBbkJIO0FBb0JBOztBQUVEOzs7Ozs7OztrQ0FLZTtBQUNkLFNBQUtoSSxnQkFBTCxDQUFzQjFFLE9BQXRCLENBQThCO0FBQUEsWUFBUTRNLGFBQWF6TSxJQUFiLENBQVI7QUFBQSxLQUE5QjtBQUNBLFNBQUt1RSxnQkFBTCxHQUF3QixFQUF4QjtBQUNBLFNBQUtJLFdBQUwsQ0FBaUIsbUJBQWpCO0FBQ0E7O0FBRUQ7Ozs7Ozs7O21DQUtnQjtBQUFBOztBQUNmLFNBQUtKLGdCQUFMLENBQXNCb0ksSUFBdEIsQ0FBMkJELFdBQVcsWUFBTTtBQUMzQyxZQUFLbk4sUUFBTCxDQUFjLG1CQUFkO0FBQ0EsS0FGMEIsRUFFeEIsR0FGd0IsQ0FBM0I7QUFHQTs7QUFHRDs7Ozs7Ozs7OzZCQU1VMEYsQyxFQUFHO0FBQ1osU0FBSzFGLFFBQUwsQ0FBYyxrQkFBZDs7QUFFQSxTQUFLK0MsT0FBTCxDQUFhVyxjQUFiLENBQTRCMkosSUFBNUIsQ0FBaUMsSUFBakMsRUFBdUMzSCxDQUF2QztBQUNBOztBQUdEOzs7Ozs7Ozs7NEJBTVNBLEMsRUFBRztBQUFBOztBQUNYd0gsaUJBQWEsS0FBSzNJLGdCQUFsQjtBQUNBLFFBQU0xQixhQUFhLFNBQWJBLFVBQWEsR0FBTTtBQUN4QixZQUFLMEIsZ0JBQUwsR0FBd0I0SSxXQUFXLFlBQU07QUFDeEMsYUFBS3ZLLEtBQUwsQ0FBVzdDLE9BQVgsQ0FBbUJ1TixLQUFuQjtBQUNBLGFBQUt6SyxVQUFMO0FBRUEsTUFKdUIsRUFJckIsR0FKcUIsQ0FBeEI7QUFLQSxLQU5EOztBQVFBOzs7OztBQUtBLFFBQUcsNEJBQWMsS0FBS29FLElBQUwsS0FBYyxZQUEvQixFQUE2QztBQUM1QyxTQUFHLEtBQUt0RSxNQUFMLENBQVlzSyxVQUFmLEVBQTJCO0FBQzFCcEs7QUFDQTtBQUNELEtBSkQsTUFJTztBQUNOQTtBQUNBO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs4QkFNVzZDLEMsRUFBRztBQUNid0gsaUJBQWEsS0FBSzNJLGdCQUFsQjtBQUNBLFNBQUtoQixnQkFBTDtBQUNBOztBQUVEOzs7Ozs7Ozs7dUNBTW9CbUMsQyxFQUFHNkgsSSxFQUFNO0FBQzVCLFFBQUdBLElBQUgsRUFBUztBQUNSLFVBQUt0RyxJQUFMLEdBQVksWUFBWjs7QUFFQTtBQUNBLDhCQUFlO0FBQ2QsV0FBS3VHLGtCQUFMLEdBQTBCLEtBQUtySyxRQUFMLENBQWNxSCxPQUF4QztBQUNBLFdBQUtySCxRQUFMLENBQWNxSCxPQUFkLEdBQXdCLEtBQXhCO0FBQ0E7O0FBRUQsVUFBSzhDLEtBQUw7QUFDQSxLQVZELE1BVU87QUFDTixVQUFLckcsSUFBTCxHQUFZLFFBQVo7O0FBRUEsOEJBQWU7QUFDZCxXQUFLOUQsUUFBTCxDQUFjcUgsT0FBZCxHQUF3QixLQUFLZ0Qsa0JBQTdCO0FBQ0E7O0FBRUQ7QUFDQSxTQUFHLG1FQUFILEVBQTZDO0FBQzVDLFdBQUsxSCxLQUFMO0FBQ0E7QUFDRDtBQUNEOztBQUdEOzs7Ozs7Ozs7NkJBTVU7QUFDVCxTQUFLOUMsVUFBTCxDQUFnQkMsSUFBaEIsQ0FBcUIsTUFBckI7QUFDQTs7QUFFRDs7Ozs7Ozs7OzhCQU1XO0FBQ1YsU0FBS0QsVUFBTCxDQUFnQkMsSUFBaEIsQ0FBcUIsT0FBckI7QUFDQTs7OzhDQUUwQjtBQUMxQixRQUFNK0UsK0JBQU47QUFDQSxRQUFNdUYsT0FBTyxDQUFDLENBQUM5RyxTQUFTdUIsTUFBTXlGLGlCQUFmLENBQWY7QUFDQSxTQUFLOUksT0FBTCxDQUFhLGtCQUFiLEVBQWlDNEksSUFBakM7QUFDQTs7O3VCQTc5Qlk7QUFDWixXQUFPLEtBQUt4RyxPQUFaO0FBQ0E7Ozt1QkEyUGlCO0FBQ2pCLFdBQU8sS0FBS25FLEtBQUwsQ0FBV0UsV0FBbEI7QUFDQSxJO3FCQUVld0gsSyxFQUFPO0FBQ3RCLFNBQUsxSCxLQUFMLENBQVdFLFdBQVgsR0FBeUJ3SCxLQUF6QjtBQUNBOztBQUVEOzs7Ozs7Ozs7Ozt1QkFRZTtBQUNkLFdBQU8sS0FBSzFILEtBQUwsQ0FBVzBDLFFBQWxCO0FBQ0E7O0FBRUQ7Ozs7Ozs7Ozs7dUJBT1k7QUFDWCxXQUFPLEtBQUsxQyxLQUFMLENBQVc4SyxLQUFsQjtBQUNBOztBQUVEOzs7Ozs7Ozs7Ozs7dUJBU1k7QUFDWCxXQUFPLEtBQUtDLE1BQUwsSUFBZSxJQUF0QjtBQUNBLEk7cUJBRVNyRCxLLEVBQU87QUFDaEIsUUFBSUEsVUFBVSxJQUFkLEVBQW9CO0FBQ25CLFVBQUtxRCxNQUFMLEdBQWMsSUFBZDtBQUNBLFVBQUt2SSxXQUFMLENBQWlCLGlCQUFqQjtBQUNBLFNBQUcsS0FBSzBELFlBQVIsRUFBc0I7QUFDckIsV0FBS0EsWUFBTCxDQUFrQi9JLE9BQWxCLENBQTBCNk4sSUFBMUI7QUFDQTtBQUNELFlBQU8sSUFBUDtBQUNBO0FBQ0QsU0FBS0QsTUFBTCxHQUFjLHlCQUFlckQsS0FBZixDQUFkOztBQUVBLFNBQUt0SyxRQUFMLENBQWMsaUJBQWQ7O0FBRUE7Ozs7Ozs7OztBQVNBLFNBQUsyRSxPQUFMLENBQWEsT0FBYixFQUFzQixFQUFFWSxPQUFRLEtBQUtvSSxNQUFmLEVBQXRCOztBQUVBLFdBQU8sSUFBUDtBQUNBOzs7dUJBRVU7QUFDVixXQUFPLEtBQUsvSyxLQUFMLENBQVd2QixJQUFsQjtBQUNBLEk7cUJBRVFpSixLLEVBQU87QUFDZixTQUFLMUgsS0FBTCxDQUFXdkIsSUFBWCxHQUFrQmlKLEtBQWxCO0FBQ0E7Ozt1QkFFWTtBQUNaLFdBQU8sS0FBSzFILEtBQUwsQ0FBV2lELE1BQWxCO0FBQ0E7O0FBRUQ7Ozs7Ozs7Ozs7dUJBT2E7QUFDWixXQUFPLEtBQUs5RixPQUFMLENBQWFlLE1BQWIsRUFBUDtBQUNBOztBQUVEOzs7Ozs7Ozs7dUJBTWtCO0FBQ2pCLFdBQU8sS0FBSzhCLEtBQUwsQ0FBVzlCLE1BQWxCO0FBQ0E7O0FBR0Q7Ozs7Ozs7O3VCQUtpQjtBQUNoQixXQUFPLEtBQUsrTSxXQUFMLElBQW9CLEtBQTNCO0FBQ0EsSTtxQkFFY3ZELEssRUFBTztBQUNyQixRQUFHQSxVQUFVLEtBQUt3RCxhQUFsQixFQUFpQztBQUNoQyxVQUFLRCxXQUFMLEdBQW1CdkQsS0FBbkI7QUFDQSxVQUFLeUQsV0FBTCxDQUFpQix1QkFBakIsRUFBMEN6RCxLQUExQztBQUNBOzs7OztBQUtBLFVBQUszRixPQUFMLENBQWEsWUFBYjtBQUNBO0FBQ0Q7O0FBR0Q7Ozs7Ozs7Ozs7dUJBT1c7QUFDVixXQUFPLEtBQUtSLEtBQVo7QUFDQSxJO3FCQUVROEMsSSxFQUFNO0FBQ2QsUUFBRyxLQUFLQSxJQUFMLElBQWEsSUFBaEIsRUFBc0I7QUFDckIsVUFBSzdCLFdBQUwsZ0JBQThCLEtBQUs2QixJQUFuQztBQUNBLFVBQUt0QyxPQUFMLGNBQXdCLEtBQUtzQyxJQUE3QjtBQUNBOztBQUVELFNBQUs5QyxLQUFMLEdBQWE4QyxJQUFiO0FBQ0EsU0FBS2xILE9BQUwsQ0FBYUMsUUFBYixnQkFBbUNpSCxJQUFuQztBQUNBLFNBQUt0QyxPQUFMLGNBQXdCc0MsSUFBeEI7O0FBRUEsV0FBTyxJQUFQO0FBQ0E7Ozs7OztBQThrQkY7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZUF0RCxRQUFPcUssTUFBUCxHQUFnQixVQUFTcEgsSUFBVCxFQUFlbEUsRUFBZixFQUFtQjtBQUNsQ2lCLFNBQU9zSyxTQUFQLENBQWlCckgsSUFBakIsSUFBeUJsRSxFQUF6QjtBQUNBLEVBRkQ7O0FBSUE7Ozs7OztBQU1BaUIsUUFBT21ELFlBQVAsR0FBc0Isb0JBQVVBLFlBQWhDOztBQUVBOzs7Ozs7Ozs7OztBQVdBbkQsUUFBT3VLLGlCQUFQLEdBQTJCLG9CQUFVQSxpQkFBckM7O0FBRUE7Ozs7Ozs7O0FBUUF2SyxRQUFPd0ssVUFBUCxHQUFvQixrQkFBUUEsVUFBNUI7O0FBRUE7Ozs7Ozs7Ozs7O0FBV0F4SyxRQUFPN0QsZUFBUCxHQUF5QixrQkFBUUEsZUFBakM7O0FBR0E7Ozs7Ozs7O0FBUUE2RCxRQUFPeUssYUFBUDs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQXpLLFFBQU9pSCxNQUFQLEdBQWdCLFVBQVNoRSxJQUFULEVBQWVxRCxHQUFmLEVBQW9CO0FBQ25DLE1BQUcsUUFBT0EsR0FBUCx5Q0FBT0EsR0FBUCxPQUFlLFFBQWxCLEVBQTRCO0FBQzNCdEcsVUFBTzBLLFFBQVAsQ0FBZ0J6SCxJQUFoQixJQUF3QixpQkFBRWtFLE1BQUYsQ0FBUyxFQUFULEVBQWE7QUFDcEMvSCxhQUFVLEVBRDBCO0FBRXBDc0k7QUFGb0MsSUFBYixFQUdyQnBCLEdBSHFCLENBQXhCO0FBSUEsR0FMRCxNQUtPLElBQUksT0FBT0EsR0FBUCxLQUFlLFVBQW5CLEVBQStCO0FBQ3JDdEcsVUFBTzBLLFFBQVAsQ0FBZ0J6SCxJQUFoQixJQUF3QnFELEtBQXhCO0FBQ0E7QUFDRCxFQVREOztBQVlBdEcsUUFBT2tILFNBQVAsR0FBbUIsVUFBU2pFLElBQVQsRUFBZTtBQUNqQyxNQUFHakQsT0FBTzBLLFFBQVAsQ0FBZ0J6SCxJQUFoQixDQUFILEVBQTBCO0FBQ3pCLFVBQU9qRCxPQUFPMEssUUFBUCxDQUFnQnpILElBQWhCLENBQVA7QUFDQSxHQUZELE1BRU87QUFDTjJDLFdBQVFoRSxLQUFSLGFBQXdCcUIsSUFBeEI7QUFDQSxVQUFPLElBQVA7QUFDQTtBQUNELEVBUEQ7O0FBVUFqRCxRQUFPMEssUUFBUCxHQUFrQixFQUFsQjs7QUFFQTFLLFFBQU8ySyxNQUFQOztBQUVBM0ssUUFBT00sY0FBUCxHQUF3QixVQUFTc0ssR0FBVCxFQUFjO0FBQ3JDLE1BQU1DLGdCQUFnQixzQkFBRSxRQUFGLEVBQVlaLElBQVosRUFBdEI7QUFDQSx3QkFBRSxNQUFGLEVBQVVhLE9BQVYsQ0FBa0JELGNBQWN2RixNQUFkLENBQXFCc0YsR0FBckIsQ0FBbEI7QUFDQSxTQUFPQyxhQUFQO0FBQ0EsRUFKRDs7QUFNQTdLLFFBQU9PLGFBQVAsR0FBdUIsbUJBQUF3SyxDQUFRLEVBQVIsQ0FBdkI7O0FBRUE7QUFDQS9LLFFBQU9nTCxPQUFQLEdBQWlCLFNBQWpCOztBQUVBQyxRQUFPQyxDQUFQLENBQVNuTSxFQUFULENBQVlvTSxRQUFaLEdBQXVCLFVBQVUvTCxPQUFWLEVBQW1CO0FBQ3pDLFNBQU8sS0FBS3NILElBQUwsQ0FBVSxZQUFZO0FBQzVCLFVBQU8sSUFBSTFHLE1BQUosQ0FBVyxzQkFBRSxJQUFGLENBQVgsRUFBb0JaLE9BQXBCLENBQVA7QUFDQSxHQUZNLENBQVA7QUFHQSxFQUpEOztBQU1BNkwsUUFBT0MsQ0FBUCxDQUFTQyxRQUFULEdBQW9CbkwsTUFBcEI7O0FBRUFpTCxRQUFPRSxRQUFQLEdBQWtCbkwsTUFBbEI7O0FBR0E7Ozs7O0FBS0FBLFFBQU9xSyxNQUFQLENBQWMsWUFBZCxFQUE0QixVQUFTNUIsYUFBVCxFQUF3QjtBQUFBOztBQUNuRCxNQUFNekosU0FBUyxJQUFmOztBQUVBO0FBQ0E7QUFDQSxNQUFNSSxVQUFVLGlCQUFFK0gsTUFBRixDQUFTLEVBQVQsRUFBYTtBQUM1QnpDLFVBQVEsTUFEb0I7QUFFNUIwRyxlQUFhLG9CQUFDcE0sTUFBRCxFQUFZO0FBQ3hCLFFBQU1xTSxTQUFTck0sT0FBTzVDLE9BQVAsQ0FBZWlQLE1BQWYsR0FBd0JDLEdBQXhCLEdBQ1p0TSxPQUFPNUMsT0FBUCxDQUFlbVAsV0FBZixFQURZLEdBRVp2TSxPQUFPd00sV0FBUCxDQUFtQixRQUFuQixFQUE2QnBQLE9BQTdCLENBQXFDZSxNQUFyQyxFQUZIOztBQUlBLFdBQU9rTyxNQUFQO0FBQ0E7QUFSMkIsR0FBYixFQVNiLEtBQUtqTSxPQUFMLENBQWFVLFVBVEEsRUFTWTJJLGFBVFosQ0FBaEI7O0FBV0EsTUFBTXRLLFdBQVcsZ0NBQXNCLElBQXRCLEVBQTRCO0FBQzVDOEUsU0FBTyxNQURxQztBQUU1QzlFLGFBQVdpQixRQUFRakIsUUFGeUI7QUFHNUNzTixtQkFBaUI7QUFDaEJDLGFBQVU7QUFDVEMsY0FBVTtBQUREO0FBRE07QUFIMkIsR0FBNUIsQ0FBakI7O0FBVUE7QUFDQSxPQUFLN0YsV0FBTCxDQUFpQlIsTUFBakIsQ0FBd0JuSCxTQUFTL0IsT0FBakM7O0FBRUE7Ozs7O0FBS0EsTUFBTWdQLGFBQWEsU0FBYkEsVUFBYSxHQUFNO0FBQ3hCLE9BQUksaUJBQUVRLFVBQUYsQ0FBYXhNLFFBQVFnTSxVQUFyQixDQUFKLEVBQXNDO0FBQ3JDLFdBQU9oTSxRQUFRZ00sVUFBUixDQUFtQnBNLE1BQW5CLENBQVA7QUFDQTs7QUFFRCxVQUFPSSxRQUFRZ00sVUFBZjtBQUNBLEdBTkQ7O0FBUUEsTUFBTVMsV0FBVyxTQUFYQSxRQUFXLEdBQU07QUFDdEIsVUFBT3pNLFFBQVFzRixLQUFSLElBQWlCLE9BQUt0SSxPQUFMLENBQWFzSSxLQUFiLEVBQXhCO0FBQ0EsR0FGRDs7QUFLQSxPQUFLb0gsaUJBQUwsR0FBeUIsVUFBQy9KLENBQUQsRUFBSWdLLEtBQUosRUFBYztBQUN0QyxPQUFNQyxZQUFZLHNCQUFFZixNQUFGLEVBQVVlLFNBQVYsRUFBbEI7O0FBRUE7QUFDQTtBQUNBLE9BQUdELEtBQUgsRUFBVTtBQUNULFdBQUtFLGNBQUwsQ0FBb0JGLEtBQXBCO0FBQ0E7O0FBRUQsT0FBR0MsWUFBWVosWUFBZixFQUE2QjtBQUM1QixXQUFLYyxjQUFMLENBQW9CSCxLQUFwQjtBQUNBLElBRkQsTUFFTztBQUNOLFdBQUtFLGNBQUw7QUFDQTtBQUNELEdBZEQ7O0FBZ0JBLE9BQUtDLGNBQUwsR0FBc0IsVUFBQ0gsS0FBRCxFQUFXO0FBQ2hDLE9BQUksQ0FBQ0EsS0FBRCxJQUFVLE9BQUt6SSxJQUFMLEtBQWMsTUFBNUIsRUFBb0M7QUFDbkM7QUFDQTs7QUFFRDtBQUNBLFVBQUtsSCxPQUFMLENBQWE4SSxHQUFiLENBQWlCLGFBQWpCLEVBQWdDLE9BQUtPLGNBQUwsQ0FBb0J0SSxNQUFwQixFQUFoQzs7QUFFQSxVQUFLbUcsSUFBTCxHQUFXLE1BQVg7QUFDQSxHQVREOztBQVdBLE9BQUsySSxjQUFMLEdBQXNCLFVBQUNGLEtBQUQsRUFBVztBQUNoQyxPQUFHLENBQUNBLEtBQUQsSUFBVSxPQUFLekksSUFBTCxLQUFjLE1BQTNCLEVBQW1DO0FBQ2xDO0FBQ0E7QUFDRCxVQUFLQSxJQUFMLEdBQVksUUFBWjtBQUNBLEdBTEQ7O0FBT0Esd0JBQUUySCxNQUFGLEVBQVUzSixFQUFWLENBQWEsUUFBYixFQUF1QixLQUFLd0ssaUJBQUwsQ0FBdUJ0SixJQUF2QixDQUE0QixJQUE1QixDQUF2QjtBQUNBLHdCQUFFeUksTUFBRixFQUFVM0osRUFBVixDQUFhLFFBQWIsRUFBdUIsS0FBS3dLLGlCQUFMLENBQXVCdEosSUFBdkIsQ0FBNEIsSUFBNUIsQ0FBdkI7QUFDQSxPQUFLbEIsRUFBTCxDQUFRLFFBQVIsRUFBa0IsVUFBQ1MsQ0FBRDtBQUFBLFVBQU8sT0FBSytKLGlCQUFMLENBQXVCL0osQ0FBdkIsRUFBMEIsSUFBMUIsQ0FBUDtBQUFBLEdBQWxCOztBQUVBLE9BQUtvSyxTQUFMLENBQWUsTUFBZixFQUF1QixZQUFNO0FBQzVCLFVBQUtoTSxZQUFMLENBQWtCK0UsR0FBbEIsQ0FBc0IsV0FBdEIsRUFBbUMyRyxVQUFuQztBQUNBLFVBQUsxTCxZQUFMLENBQWtCK0UsR0FBbEIsQ0FBc0IsUUFBdEIsRUFBZ0MsT0FBS2pHLEtBQUwsQ0FBVzlCLE1BQTNDO0FBQ0EsR0FIRDs7QUFLQSxPQUFLaVAsU0FBTCxDQUFlLE1BQWYsRUFBdUIsWUFBTTtBQUM1QixVQUFLak0sWUFBTCxDQUFrQitFLEdBQWxCLENBQXNCLFdBQXRCLEVBQW1DLEVBQW5DO0FBQ0EsVUFBSy9FLFlBQUwsQ0FBa0IrRSxHQUFsQixDQUFzQixRQUF0QixFQUFnQyxFQUFoQzs7QUFFQSxVQUFLOUksT0FBTCxDQUFhOEksR0FBYixDQUFpQixhQUFqQixFQUFnQyxFQUFoQztBQUNBLEdBTEQ7O0FBUUEsT0FBSzRHLGlCQUFMO0FBQ0EsRUFuR0Q7O0FBc0dBOUwsUUFBT2lILE1BQVAsQ0FBYyxLQUFkLEVBQXFCLG1CQUFBOEQsQ0FBUSxFQUFSLEVBQTRCOUQsTUFBakQ7QUFDQWpILFFBQU9pSCxNQUFQLENBQWMsUUFBZCxFQUF3QixtQkFBQThELENBQVEsRUFBUixFQUErQjlELE1BQXZEO0FBQ0FqSCxRQUFPaUgsTUFBUCxDQUFjLEtBQWQsRUFBcUIsbUJBQUE4RCxDQUFRLEVBQVIsRUFBNEI5RCxNQUFqRDtBQUNBakgsUUFBT2lILE1BQVAsQ0FBYyxZQUFkLEVBQTRCLG1CQUFBOEQsQ0FBUSxFQUFSLEVBQW1DOUQsTUFBL0Q7QUFDQWpILFFBQU9pSCxNQUFQLENBQWMsTUFBZCxFQUFzQixtQkFBQThELENBQVEsRUFBUixFQUE2QjlELE1BQW5EOztBQUVBb0YsUUFBT0MsT0FBUCxHQUFpQnRNLE1BQWpCLEM7Ozs7OztBQ2owREEsb0I7Ozs7OztBQ0FBO0FBQ0E7Ozs7Ozs7Ozs7OztBQUlBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0tBY011TSxPOzs7QUFFTCxtQkFBWXZOLE1BQVosRUFBb0JJLE9BQXBCLEVBQTZCO0FBQUE7O0FBQUEsaUhBQ3RCSixNQURzQixFQUNkSSxPQURjOztBQUU1QixTQUFLb04sYUFBTDtBQUNBLFNBQUtiLE9BQUwsR0FBZSxNQUFLdk0sT0FBTCxDQUFhdU0sT0FBYixJQUF3QixJQUF4QixHQUE4QixNQUFLdk0sT0FBTCxDQUFhdU0sT0FBM0MsR0FBcUQsSUFBcEU7O0FBRUEsU0FBSzNNLE1BQUwsQ0FBWXNDLEVBQVosQ0FBZSxRQUFmLEVBQXlCLFVBQUNTLENBQUQsRUFBTztBQUMvQixVQUFLNEosT0FBTCxHQUFlLE1BQUt2TSxPQUFMLENBQWF1TSxPQUFiLElBQXdCLElBQXhCLEdBQThCLE1BQUt2TSxPQUFMLENBQWF1TSxPQUEzQyxHQUFxRCxLQUFwRTtBQUNBLElBRkQ7O0FBSUEsU0FBS3ZQLE9BQUwsQ0FBYWtGLEVBQWIsQ0FBZ0I7QUFDZm1MLFdBQVEsTUFBS0MsT0FBTCxDQUFhbEssSUFBYixPQURPO0FBRWZtSyxTQUFNLE1BQUtELE9BQUwsQ0FBYWxLLElBQWI7QUFGUyxJQUFoQjs7QUFLQSxTQUFLeEQsTUFBTCxDQUFZc0MsRUFBWixDQUFlLFFBQWYsRUFBeUIsTUFBS3ZCLGNBQUwsQ0FBb0J5QyxJQUFwQixPQUF6QjtBQWQ0QjtBQWU1Qjs7QUFFRDs7Ozs7OzttQ0FHZ0I7QUFDZixRQUFJLEtBQUtwRCxPQUFMLENBQWFtRyxRQUFqQixFQUEyQjtBQUMxQixVQUFLcUgsSUFBTCxHQUFZLG1CQUFTLEtBQUs1TixNQUFkLEVBQXNCO0FBQ2pDdUcsZ0JBQVcsS0FBS25HLE9BQUwsQ0FBYW1HO0FBRFMsTUFBdEIsQ0FBWjtBQUdBO0FBQ0QsUUFBSXNILFFBQVE7QUFDWDdHLFlBQVEsS0FBSzVHLE9BQUwsQ0FBYTRHO0FBRFYsS0FBWjtBQUdBLFNBQUs1SixPQUFMLEdBQWUsNkJBQU0sS0FBS2dELE9BQUwsQ0FBYTBOLEdBQWIsSUFBb0IsUUFBMUIsV0FDYnpRLFFBRGEsQ0FDSixLQUFLMFEsYUFBTCxFQURJLEVBRWJ6SCxNQUZhLENBRU4sS0FBS3NILElBQUwsSUFBYSxLQUFLQSxJQUFMLENBQVV4USxPQUZqQixFQUdiNkksSUFIYSxDQUdSNEgsS0FIUSxDQUFmOztBQUtBLFdBQU8sS0FBS3pRLE9BQVo7QUFDQTs7QUFFRDs7Ozs7O21DQUdnQjtBQUNmLFFBQUlLLHNCQUFvQixLQUFLMkMsT0FBTCxDQUFhb0csU0FBakMsd0hBQUo7QUFDQTs7OztBQUlBLFFBQUcsQ0FBQyxLQUFLeEcsTUFBTCxDQUFZZ08sUUFBWixDQUFxQixrQkFBckIsQ0FBSixFQUE4QztBQUM3Q3ZRLGVBQVUscUJBQVY7QUFDQTtBQUNELFdBQU9BLE1BQVA7QUFDQTs7QUFFRDs7Ozs7Ozs7QUFnQkE7Ozs7OzJCQUtTc0YsQyxFQUFHO0FBQ1hBLE1BQUVpRyxjQUFGO0FBQ0EsUUFBSSxLQUFLMkQsT0FBVCxFQUFrQjtBQUNqQixZQUFPLEtBQVA7QUFDQTtBQUNELFNBQUszTSxNQUFMLENBQVlnQyxPQUFaLENBQW9CLGNBQXBCLEVBQW9DLEVBQUUwSyxTQUFVLElBQVosRUFBcEM7O0FBRUEsUUFBSSxPQUFPLEtBQUt0TSxPQUFMLENBQWFzTixPQUFwQixLQUFnQyxVQUFwQyxFQUFnRDtBQUMvQyxVQUFLdE4sT0FBTCxDQUFhc04sT0FBYixDQUFxQmhELElBQXJCLENBQTBCLElBQTFCLEVBQWdDdUQsU0FBaEM7QUFDQTtBQUNEOzs7a0NBR2VsTCxDLEVBQUdoQixJLEVBQU0sQ0FFeEI7OztxQkFqQ080RixLLEVBQU87QUFDZCxTQUFLeUQsV0FBTCxDQUFpQixjQUFqQixFQUFpQ3pELEtBQWpDO0FBQ0E7OztxQkFFV0EsSyxFQUFPO0FBQ2xCLFNBQUt1RyxRQUFMLEdBQWdCdkcsS0FBaEI7QUFDQSxTQUFLeUQsV0FBTCxDQUFpQixVQUFqQixFQUE2QnpELEtBQTdCO0FBQ0EsSTt1QkFFYTtBQUNiLFdBQU8sS0FBS3VHLFFBQVo7QUFDQTs7O21DQXdCc0JqSyxJLEVBQU15SSxPLEVBQVM7QUFDckMsUUFBR3pJLFFBQVEsSUFBWCxFQUFpQjtBQUNoQjtBQUNBOztBQUVELFFBQUdzSixRQUFRWSxTQUFSLElBQXFCLElBQXhCLEVBQThCO0FBQzdCWixhQUFRWSxTQUFSLEdBQW9CLEVBQXBCO0FBQ0E7O0FBRURaLFlBQVFZLFNBQVIsQ0FBa0JsSyxJQUFsQixJQUEwQnlJLE9BQTFCOztBQUVBLFdBQU9BLE9BQVA7QUFDQTs7OzhCQUVpQnpJLEksRUFBTTtBQUN2QixRQUFHQSxRQUFRLElBQVgsRUFBaUI7QUFDaEI7QUFDQTs7QUFFRCxRQUFHc0osUUFBUVksU0FBUixJQUFxQlosUUFBUVksU0FBUixDQUFrQmxLLElBQWxCLENBQXhCLEVBQWlEO0FBQ2hELFlBQU9zSixRQUFRWSxTQUFSLENBQWtCbEssSUFBbEIsQ0FBUDtBQUNBO0FBQ0Q7OzswQkFFYWpFLE0sRUFBUWlFLEksRUFBTTdELE8sRUFBUztBQUNwQyxRQUFJZ08sZUFBZSxLQUFLNUMsVUFBTCxDQUFnQnZILElBQWhCLENBQW5CO0FBQ0EsUUFBR21LLGdCQUFnQixJQUFuQixFQUF5QjtBQUN4QnhILGFBQVFoRSxLQUFSLGNBQXlCcUIsSUFBekI7QUFDQSxZQUFPLElBQVA7QUFDQTs7QUFFRCxXQUFPLElBQUltSyxZQUFKLENBQWlCcE8sTUFBakIsRUFBeUJJLE9BQXpCLENBQVA7QUFDQTs7Ozs7O0FBSUYscUJBQVVtTCxpQkFBVixDQUE0QixTQUE1QixFQUF1Q2dDLE9BQXZDO0FBQ0FBLFNBQVFwUSxlQUFSLENBQXdCLFNBQXhCLEVBQW1Db1EsT0FBbkM7bUJBQ2VBLE87Ozs7OztBQ3pKZjtBQUNBOzs7Ozs7Ozs7O0FBSUE7Ozs7Ozs7O0FBRUEsS0FBTWMsZ0JBQWdCLFNBQWhCQSxhQUFnQixDQUFDQyxNQUFEO0FBQUEsU0FBWUEsT0FBT0MsS0FBUCxDQUFhLEdBQWIsRUFBa0JsSCxNQUFsQixDQUF5QixVQUFDbUgsR0FBRCxFQUFNekwsQ0FBTjtBQUFBLFVBQVl5TCxxQkFBa0J6TCxDQUFsQixPQUFaO0FBQUEsR0FBekIsRUFBNkQsRUFBN0QsQ0FBWjtBQUFBLEVBQXRCOztBQUVBOzs7Ozs7Ozs7OztLQVVNMEwsUztBQUVMLHFCQUFZek8sTUFBWixFQUFvQkksT0FBcEIsRUFBNkI7QUFBQTs7QUFDNUJBLGFBQVUsS0FBS0EsT0FBTCxHQUFlLGlCQUFFK0gsTUFBRixDQUFTLEVBQVQsRUFBYTtBQUNyQ2xILG1CQUFnQjtBQURxQixJQUFiLEVBRXRCLEtBQUtiLE9BRmlCLEVBRVJBLE9BRlEsQ0FBekI7O0FBSUEsT0FBRyxDQUFDSixNQUFELElBQVcsS0FBS2lELElBQUwsSUFBYSxJQUEzQixFQUFpQztBQUNoQyxTQUFLakQsTUFBTCxHQUFjQSxTQUFTLElBQXZCO0FBQ0EsSUFGRCxNQUVPO0FBQ04sU0FBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0E7O0FBRUQsT0FBR0ksUUFBUWEsYUFBWCxFQUEwQjs7QUFFekIsUUFBSWIsUUFBUWhELE9BQVosRUFBcUI7QUFDcEIsVUFBS0EsT0FBTCxHQUFlZ0QsUUFBUWhELE9BQXZCO0FBQ0EsS0FGRCxNQUVPO0FBQ04sVUFBSzZELGFBQUw7QUFDQTs7QUFFRCxRQUFJLEtBQUs3RCxPQUFMLENBQWF1SSxNQUFiLEtBQXdCLENBQTVCLEVBQStCO0FBQzlCaUIsYUFBUWhFLEtBQVIsMkRBQXNFLEtBQUt4RixPQUFMLENBQWF1SSxNQUFuRixTQUErRixLQUFLdkksT0FBcEc7QUFDQTs7QUFFRCxTQUFLQSxPQUFMLENBQWEsQ0FBYixFQUFnQnNSLE1BQWhCLEdBQXlCLElBQXpCO0FBQ0E7QUFDRDs7QUFFRDs7Ozs7OzttQ0FHZ0I7O0FBRWYsV0FBTyxFQUFQO0FBQ0E7O0FBRUQ7Ozs7OzttQ0FHZ0I7QUFDZixXQUFPLEVBQVA7QUFDQTs7QUFHRDs7Ozs7OzJCQUdRO0FBQ1AsU0FBS3RSLE9BQUwsQ0FBYXVOLEtBQWI7QUFDQTs7QUFHRDs7Ozs7OzBCQUdPO0FBQ04sU0FBS3ZOLE9BQUwsQ0FBYXVSLElBQWI7QUFDQTs7QUFHRDs7Ozs7Ozs7Ozs7MkJBUVFwTSxTLEVBQW9CO0FBQUE7O0FBQzNCLFFBQU1xTSxRQUFRLGlCQUFFQyxLQUFGLGVBQW9CdE0sU0FBcEIsRUFBaUMsRUFBRXZDLFFBQVMsS0FBS0EsTUFBaEIsRUFBakMsQ0FBZDs7QUFEMkIsc0NBQU51RSxJQUFNO0FBQU5BLFNBQU07QUFBQTs7QUFFM0IscUJBQUtuSCxPQUFMLEVBQWEwUixjQUFiLGtCQUE0QkYsS0FBNUIsU0FBc0NySyxJQUF0QztBQUNBLFdBQU8sSUFBUDtBQUNBOztBQUdEOzs7Ozs7Ozs7OztzQkFRR3dLLFUsRUFBcUI7QUFBQSx1Q0FBTnhLLElBQU07QUFBTkEsU0FBTTtBQUFBOztBQUN2QixRQUFHLE9BQU93SyxVQUFQLEtBQXNCLFFBQXRCLElBQWtDQSxzQkFBc0JDLE1BQTNELEVBQW1FO0FBQUE7O0FBQ2xFLHVCQUFLNVIsT0FBTCxFQUFha0YsRUFBYixtQkFBZ0IrTCxjQUFjVSxVQUFkLENBQWhCLFNBQThDeEssSUFBOUM7QUFDQSxLQUZELE1BRU87QUFBQTs7QUFDTnFDLGFBQVFDLElBQVIsQ0FBYSx1REFBYjtBQUNBLHVCQUFLekosT0FBTCxFQUFha0YsRUFBYixtQkFBZ0J5TSxVQUFoQixTQUErQnhLLElBQS9CO0FBQ0E7QUFDRCxXQUFPLElBQVA7QUFDQTs7O3VCQUdHd0ssVSxFQUFxQjtBQUFBLHVDQUFOeEssSUFBTTtBQUFOQSxTQUFNO0FBQUE7O0FBQ3hCLFFBQUcsT0FBT3dLLFVBQVAsS0FBc0IsUUFBdEIsSUFBa0NBLHNCQUFzQkMsTUFBM0QsRUFBbUU7QUFBQTs7QUFDbEUsdUJBQUs1UixPQUFMLEVBQWFvRixHQUFiLG1CQUFpQjZMLGNBQWNVLFVBQWQsQ0FBakIsU0FBK0N4SyxJQUEvQztBQUNBLEtBRkQsTUFFTztBQUFBOztBQUNOcUMsYUFBUUMsSUFBUixDQUFhLHdEQUFiO0FBQ0EsdUJBQUt6SixPQUFMLEVBQWFvRixHQUFiLG1CQUFpQnVNLFVBQWpCLFNBQWdDeEssSUFBaEM7QUFDQTtBQUNELFdBQU8sSUFBUDtBQUNBOztBQUdEOzs7Ozs7Ozs7OzRCQU9TaUMsUyxFQUFXO0FBQ25CLFNBQUtwSixPQUFMLENBQWFDLFFBQWIsQ0FBc0JtSixTQUF0QjtBQUNBLFdBQU8sSUFBUDtBQUNBOztBQUVEOzs7Ozs7Ozs7OytCQU9ZQSxTLEVBQVc7QUFDdEIsU0FBS3BKLE9BQUwsQ0FBYXFGLFdBQWIsQ0FBeUIrRCxTQUF6QjtBQUNBLFdBQU8sSUFBUDtBQUNBOztBQUVEOzs7Ozs7Ozs7OzsrQkFRWUEsUyxFQUFXb0IsSSxFQUFNO0FBQzVCLFNBQUt4SyxPQUFMLENBQWFnTyxXQUFiLENBQXlCNUUsU0FBekIsRUFBb0NvQixJQUFwQztBQUNBLFdBQU8sSUFBUDtBQUNBOzs7NEJBRVFwQixTLEVBQVc7QUFDbkIsV0FBTyxLQUFLcEosT0FBTCxDQUFhNFEsUUFBYixDQUFzQnhILFNBQXRCLENBQVA7QUFDQTs7O21DQThCMkI7QUFBQTs7QUFBQSxRQUFkcEosT0FBYyx1RUFBTixJQUFNOztBQUMzQixRQUFHQSxXQUFXLElBQWQsRUFBb0I7QUFDbkJBLGVBQVUsS0FBS0EsT0FBZjtBQUNBO0FBQ0Q7QUFDQSxRQUFJNlIsYUFBYSxDQUFqQjtBQUNBLFFBQUlDLGFBQWEsSUFBakI7QUFDQSxRQUFJQyxnQkFBZ0IsSUFBcEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBTUMsdUJBQXVCLEVBQTdCOztBQUVBO0FBQ0EsUUFBTUMscUJBQXFCLEdBQTNCOztBQUVBLFFBQUlDLG1CQUFKOztBQUVBOztBQUVBbFMsWUFBUWtGLEVBQVIsQ0FBVyxZQUFYLEVBQXlCLFVBQUNzTSxLQUFELEVBQVc7QUFDbkM7QUFDQSxTQUFJQSxNQUFNVyxPQUFOLENBQWM1SixNQUFkLEtBQXlCLENBQTdCLEVBQWdDO0FBQy9CO0FBQ0F1SixtQkFBYUMsZ0JBQWdCO0FBQzVCSyxjQUFRWixNQUFNVyxPQUFOLENBQWMsQ0FBZCxFQUFpQkMsS0FERztBQUU1QkMsY0FBUWIsTUFBTVcsT0FBTixDQUFjLENBQWQsRUFBaUJFO0FBRkcsT0FBN0I7QUFJQTtBQUNBUixtQkFBYSxJQUFJUyxJQUFKLEdBQVdDLE9BQVgsRUFBYjtBQUNBO0FBQ0FMLG1CQUFhLElBQWI7QUFDQSxZQUFLM0IsR0FBTCxHQUFXLElBQVg7QUFDQTtBQUNELEtBZEQ7O0FBZ0JBdlEsWUFBUWtGLEVBQVIsQ0FBVyxXQUFYLEVBQXdCLFVBQUNzTSxLQUFELEVBQVc7QUFDbEM7QUFDQSxTQUFJQSxNQUFNVyxPQUFOLENBQWM1SixNQUFkLEdBQXVCLENBQTNCLEVBQThCO0FBQzdCMkosbUJBQWEsS0FBYjtBQUNBLE1BRkQsTUFFTyxJQUFJSixVQUFKLEVBQWdCO0FBQ3ZCO0FBQ0E7QUFDQyxVQUFNVSxRQUFRaEIsTUFBTVcsT0FBTixDQUFjLENBQWQsRUFBaUJDLEtBQWpCLEdBQXlCTixXQUFXTSxLQUFsRDtBQUNBLFVBQU1LLFFBQVFqQixNQUFNVyxPQUFOLENBQWMsQ0FBZCxFQUFpQkUsS0FBakIsR0FBeUJQLFdBQVdPLEtBQWxEO0FBQ0EsVUFBTUssZ0JBQWdCQyxLQUFLQyxJQUFMLENBQVVKLFFBQVFBLEtBQVIsR0FBZ0JDLFFBQVFBLEtBQWxDLENBQXRCOztBQUVBLFVBQUlqQixNQUFNVyxPQUFOLENBQWM1SixNQUFkLEtBQXlCLENBQTdCLEVBQWdDO0FBQy9Cd0osdUJBQWdCO0FBQ2ZLLGVBQVFaLE1BQU1XLE9BQU4sQ0FBYyxDQUFkLEVBQWlCQyxLQURWO0FBRWZDLGVBQVFiLE1BQU1XLE9BQU4sQ0FBYyxDQUFkLEVBQWlCRTtBQUZWLFFBQWhCO0FBSUE7O0FBRUQsVUFBSUssZ0JBQWdCVixvQkFBcEIsRUFBMEM7QUFDekNFLG9CQUFhLEtBQWI7QUFDQSxhQUFLM0IsR0FBTCxHQUFXLEtBQVg7QUFDQTtBQUNEO0FBQ0QsS0F2QkQ7O0FBeUJBLFFBQU1zQyxRQUFRLFNBQVJBLEtBQVEsR0FBTTtBQUNuQlgsa0JBQWEsS0FBYjtBQUNBLFdBQUszQixHQUFMLEdBQVcsS0FBWDtBQUNBLEtBSEQ7O0FBS0E7QUFDQXZRLFlBQVFrRixFQUFSLENBQVcsWUFBWCxFQUF5QjJOLEtBQXpCO0FBQ0E3UyxZQUFRa0YsRUFBUixDQUFXLGFBQVgsRUFBMEIyTixLQUExQjs7QUFFQTtBQUNBO0FBQ0E3UyxZQUFRa0YsRUFBUixDQUFXLFVBQVgsRUFBdUIsVUFBQ3NNLEtBQUQsRUFBVztBQUNqQ00sa0JBQWEsSUFBYjtBQUNBLFdBQUt2QixHQUFMLEdBQVcsS0FBWDtBQUNBO0FBQ0EsU0FBSTJCLGVBQWUsSUFBbkIsRUFBeUI7QUFDekI7QUFDQyxVQUFNWSxZQUFZLElBQUlSLElBQUosR0FBV0MsT0FBWCxLQUF1QlYsVUFBekM7O0FBRUE7QUFDQSxVQUFJaUIsWUFBWWIsa0JBQWhCLEVBQW9DO0FBQ25DO0FBQ0FULGFBQU01RixjQUFOO0FBQ0E7Ozs7O0FBS0EsV0FBTW1ILFdBQVcsaUJBQUV0QixLQUFGLENBQVEsS0FBUixDQUFqQjtBQUNBc0IsZ0JBQVNYLEtBQVQsR0FBaUJMLGNBQWNLLEtBQS9CO0FBQ0FXLGdCQUFTVixLQUFULEdBQWlCTixjQUFjTSxLQUEvQjtBQUNBclMsZUFBUTRFLE9BQVIsQ0FBZ0JtTyxRQUFoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7QUFDRCxLQTFCRDtBQTJCQTs7O3FCQXRHT3hJLEssRUFBTyxDQUFFOzs7cUNBekJRMUQsSSxFQUFNbU0sUyxFQUFXO0FBQ3pDLFFBQUduTSxRQUFRLElBQVgsRUFBaUI7QUFDaEI7QUFDQTs7QUFFRCxRQUFHd0ssVUFBVTRCLFdBQVYsSUFBeUIsSUFBNUIsRUFBa0M7QUFDakM1QixlQUFVNEIsV0FBVixHQUF3QixFQUF4QjtBQUNBOztBQUVENUIsY0FBVTRCLFdBQVYsQ0FBc0JwTSxJQUF0QixJQUE4Qm1NLFNBQTlCOztBQUVBLFdBQU9BLFNBQVA7QUFDQTs7O2dDQUVtQm5NLEksRUFBTTtBQUN6QixRQUFHQSxRQUFRLElBQVgsRUFBaUI7QUFDaEI7QUFDQTs7QUFFRCxRQUFHd0ssVUFBVTRCLFdBQVYsSUFBeUI1QixVQUFVNEIsV0FBVixDQUFzQnBNLElBQXRCLENBQTVCLEVBQXlEO0FBQ3hELFlBQU93SyxVQUFVNEIsV0FBVixDQUFzQnBNLElBQXRCLENBQVA7QUFDQTtBQUVEOzs7Ozs7QUE0R0Z3SyxXQUFVbEQsaUJBQVYsQ0FBNEIsV0FBNUIsRUFBeUNrRCxTQUF6QzttQkFDZUEsUzs7Ozs7O0FDM1NmO0FBQ0E7Ozs7Ozs7Ozs7OztBQUlBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7O0tBT002QixJOzs7QUFFTCxnQkFBYXRRLE1BQWIsRUFBaUM7QUFBQSxPQUFaSSxPQUFZLHVFQUFKLEVBQUk7O0FBQUE7O0FBQ2hDQSxhQUFVLGlCQUFFK0gsTUFBRixDQUFTLEVBQVQsRUFBYTtBQUN0QjNCLGVBQVksRUFEVTtBQUV0QkQsY0FBVztBQUZXLElBQWIsRUFHUG5HLE9BSE8sQ0FBVjtBQURnQyxzR0FLMUJKLE1BTDBCLEVBS2xCSSxPQUxrQjtBQU9oQzs7QUFHRDs7Ozs7OzttQ0FHZ0I7QUFDZixTQUFLbVEsT0FBTCxHQUFlek0sU0FBUzBNLGVBQVQsQ0FBeUIsNEJBQXpCLEVBQXVELEtBQXZELENBQWY7QUFDQSxTQUFLQyxPQUFMLEdBQWUzTSxTQUFTME0sZUFBVCxDQUF5Qiw0QkFBekIsRUFBdUQsS0FBdkQsQ0FBZjs7QUFFQSxTQUFLakssUUFBTCxHQUFnQixLQUFLbUssU0FBTCxHQUFpQixLQUFLdFEsT0FBTCxDQUFhbUcsUUFBOUM7QUFDQSxTQUFLa0ssT0FBTCxDQUFhRSxXQUFiLENBQXlCLEtBQUtKLE9BQTlCO0FBQ0EsU0FBS25ULE9BQUwsR0FBZSxzQkFBRSxTQUFGLEVBQ2JDLFFBRGEsQ0FDSixLQUFLMFEsYUFBTCxFQURJLEVBRWI5SCxJQUZhLENBRVIsT0FGUSxFQUVDLEtBQUs3RixPQUFMLENBQWE0RyxLQUZkLEVBR2JWLE1BSGEsQ0FHTixzQkFBRSxLQUFLbUssT0FBUCxDQUhNLENBQWY7QUFJQSxXQUFPLEtBQUtyVCxPQUFaO0FBQ0E7O0FBRUQ7Ozs7OzttQ0FHZ0I7QUFDZiwySUFBaUQsS0FBS2dELE9BQUwsQ0FBYW9HLFNBQTlEO0FBQ0E7O0FBRUQ7Ozs7Ozs7cUJBSWFELFEsRUFBVTtBQUFBOztBQUN0QixRQUFJcUssU0FBUyxDQUFDLDhCQUFELEVBQWlDLE1BQWpDLENBQWI7QUFDQSxvQkFBS0wsT0FBTCxFQUFhTSxpQkFBYixnQkFBa0NELE1BQWxDLFNBQTZDLEtBQUs1USxNQUFMLENBQVlJLE9BQVosQ0FBb0I1QixPQUFqRSx1QkFBMEYsS0FBSytILFFBQS9GO0FBQ0EscUJBQUtnSyxPQUFMLEVBQWFPLGNBQWIsaUJBQStCRixNQUEvQixTQUEwQyxLQUFLNVEsTUFBTCxDQUFZSSxPQUFaLENBQW9CNUIsT0FBOUQsdUJBQXVGK0gsUUFBdkY7QUFDQSxTQUFLbUssU0FBTCxHQUFpQm5LLFFBQWpCO0FBQ0E7O0FBRUQ7Ozs7O3VCQUlnQjtBQUNmLFdBQU8sS0FBS21LLFNBQVo7QUFDQTs7Ozs7O0FBSUYscUJBQVVuRixpQkFBVixDQUE0QixNQUE1QixFQUFvQytFLElBQXBDO21CQUNlQSxJOzs7Ozs7QUN4RWY7QUFDQTs7Ozs7Ozs7Ozs7O0FBSUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQTs7O0tBR01TLFU7OztBQUVMLHNCQUFZL1EsTUFBWixFQUFvQkksT0FBcEIsRUFBNkI7QUFBQTs7QUFBQSxrSEFDdEJKLE1BRHNCLEVBQ2RJLE9BRGM7QUFFNUI7Ozs7bUNBRWU7QUFDZixRQUFNNFEsUUFBUSxxQkFBUyxLQUFULEVBQWdCO0FBQzdCeEssZ0JBQVk7QUFEaUIsS0FBaEIsRUFHYkYsTUFIYSxDQUdOLG1CQUFTLEtBQUt0RyxNQUFkLEVBQXNCLEVBQUV1RyxVQUFXLE1BQWIsRUFBdEIsRUFBNkNuSixPQUh2QyxDQUFkOztBQUtBLFNBQUtBLE9BQUwsR0FBZSxxQkFBUyxLQUFULEVBQWdCO0FBQzlCb0osZ0JBQVksS0FBS3VILGFBQUw7QUFEa0IsS0FBaEIsRUFHZHpILE1BSGMsQ0FHUDBLLEtBSE8sQ0FBZjs7QUFLQSxXQUFPLEtBQUs1VCxPQUFaO0FBQ0E7OzsyQkFFTzJGLEMsRUFBRztBQUNWLG9IQUFjQSxDQUFkO0FBQ0E7Ozs7O0FBS0EsUUFBRyw0QkFBYyxLQUFLL0MsTUFBTCxDQUFZc0UsSUFBWixLQUFxQixZQUF0QyxFQUFvRDtBQUNuRCxTQUFHLEtBQUt0RSxNQUFMLENBQVlzSyxVQUFmLEVBQTJCO0FBQzFCLFdBQUt0SyxNQUFMLENBQVlpRCxJQUFaO0FBQ0E7QUFDRCxLQUpELE1BSU87QUFDTixVQUFLakQsTUFBTCxDQUFZaUQsSUFBWjtBQUNBO0FBRUQ7O0FBRUQ7Ozs7OzttQ0FHZ0I7QUFDZixxQ0FBK0IsS0FBSzdDLE9BQUwsQ0FBYW9HLFNBQTVDO0FBQ0E7Ozs7OztBQUlGLHFCQUFVK0UsaUJBQVYsQ0FBNEIsWUFBNUIsRUFBMEN3RixVQUExQztBQUNBLG1CQUFRNVQsZUFBUixDQUF3QixhQUF4QixFQUF1QzRULFVBQXZDO21CQUNlQSxVOzs7Ozs7QUM5RGY7QUFDQTs7Ozs7Ozs7OztTQWVnQnRGLGEsR0FBQUEsYTtTQTJCQXdGLFUsR0FBQUEsVTtTQU9BQyxRLEdBQUFBLFE7U0FZQUMsSyxHQUFBQSxLO1NBS0FDLEksR0FBQUEsSTs7QUE3RGhCOzs7Ozs7QUFFQTs7Ozs7Ozs7QUFRTyxVQUFTM0YsYUFBVCxDQUF3QjRGLE9BQXhCLEVBQWlDQyxTQUFqQyxFQUE0QztBQUNsRCxNQUFJQyxJQUFJeEIsS0FBS3lCLEtBQUwsQ0FBV0gsVUFBVSxJQUFyQixDQUFSO0FBQ0EsTUFBSUksSUFBSTFCLEtBQUt5QixLQUFMLENBQVdILFVBQVUsSUFBVixHQUFpQixFQUE1QixDQUFSO0FBQ0EsTUFBSUssSUFBSTNCLEtBQUt5QixLQUFMLENBQVdILFVBQVUsSUFBVixHQUFpQixFQUE1QixDQUFSO0FBQ0EsTUFBSU0sTUFBTSxFQUFWO0FBQ0EsTUFBSUYsSUFBSSxFQUFSLEVBQVk7QUFDWEEsT0FBSSxNQUFNQSxDQUFWO0FBQ0E7QUFDRCxNQUFJQyxJQUFJLEVBQVIsRUFBWTtBQUNYQSxPQUFJLE1BQU1BLENBQVY7QUFDQTtBQUNEQyxRQUFTRixDQUFULFNBQWNDLENBQWQ7O0FBRUEsTUFBR0gsSUFBSSxDQUFKLElBQVNELFNBQVosRUFBdUI7QUFDdEJLLFNBQVNKLENBQUgsU0FBVUksR0FBaEI7QUFDQTtBQUNELFNBQU9BLEdBQVA7QUFDQTs7QUFHRDs7Ozs7OztBQU9PLFVBQVNWLFVBQVQsQ0FBcUJ0TCxNQUFyQixFQUE2QkssR0FBN0IsRUFBa0M7QUFDeEM7QUFDQSxNQUFNNEwsVUFBV2pNLFNBQVNLLEdBQVYsSUFBa0IsQ0FBbEM7QUFDQSxTQUFRNEwsV0FBVyxDQUFaLEdBQWlCLENBQWpCLEdBQXFCQSxPQUE1QjtBQUNBOztBQUdNLFVBQVNWLFFBQVQsR0FBb0M7QUFBQSxNQUFsQnBELEdBQWtCLHVFQUFkLEtBQWM7QUFBQSxNQUFQK0QsS0FBTzs7QUFDMUMsTUFBR0EsU0FBU0EsTUFBTXJMLFNBQWxCLEVBQTZCO0FBQzVCcUwsU0FBTSxPQUFOLElBQWlCQSxNQUFNckwsU0FBdkI7QUFDQSxVQUFPcUwsTUFBTXJMLFNBQWI7QUFDQTtBQUNELFNBQU8sNEJBQU1zSCxHQUFOLFNBQWUrRCxLQUFmLENBQVA7QUFDQTs7QUFHRDs7O0FBR08sVUFBU1YsS0FBVCxDQUFlcEssSUFBZixFQUFxQixDQUUzQjs7QUFHTSxVQUFTcUssSUFBVCxHQUFnQixDQUFFOztBQUVsQixLQUFNVSxnREFBcUIsWUFBVztBQUM1QyxNQUFJclUsZUFBSjs7QUFFQSxTQUFPLFlBQVc7O0FBRWpCLE9BQUdBLFVBQVUsSUFBYixFQUFtQjtBQUNsQixXQUFPQSxNQUFQO0FBQ0E7O0FBRUQsT0FBTXNVLFFBQVEsc0JBQUUsU0FBRixFQUFhN0wsR0FBYixDQUFpQjtBQUM5QjhMLGdCQUFhLFFBRGlCO0FBRTlCdE0sV0FBUSxHQUZzQjtBQUc5QnVNLGNBQVc7QUFIbUIsSUFBakIsRUFJWEMsUUFKVyxDQUlGLE1BSkUsQ0FBZDs7QUFNQSxPQUFNQyxrQkFBa0Isc0JBQUUsU0FBRixFQUFhak0sR0FBYixDQUFpQjtBQUN4Q1IsV0FBUTtBQURnQyxJQUFqQixFQUVyQndNLFFBRnFCLENBRVpILEtBRlksRUFFTEssVUFGSyxFQUF4Qjs7QUFJQUwsU0FBTU0sTUFBTjtBQUNBLFVBQU81VSxTQUFTLE1BQU0wVSxlQUF0QjtBQUNBLEdBbEJEO0FBb0JBLEVBdkJpQyxFQUEzQixDOzs7Ozs7Ozs7OztBQ3JFUDs7OztBQUtBLEtBQU1HLGFBQWFyRyxPQUFPc0csU0FBUCxJQUFvQnRHLE9BQU9zRyxTQUFQLENBQWlCQyxTQUFyQyxJQUFrRCxFQUFyRTs7QUFFTyxLQUFNQyxnQ0FBYSxTQUFELENBQVlDLElBQVosQ0FBaUJKLFVBQWpCLENBQWxCOztBQUVBLEtBQU1LLGdDQUFZTCxXQUFXelUsT0FBWCxDQUFtQixRQUFuQixJQUErQixDQUFDLENBQWxEOztBQUVBLEtBQU0rVSxrQ0FBYyxVQUFELENBQWFGLElBQWIsQ0FBa0JKLFVBQWxCLENBQW5COztBQUVBLEtBQU1PLDhDQUFtQkQsY0FBY0gsU0FBdkM7O0FBRUEsS0FBTUssNEJBQVcsT0FBRCxDQUFVSixJQUFWLENBQWVKLFVBQWYsQ0FBaEI7QUFDUDtBQUNBO0FBQ0E7QUFDTyxLQUFNUyxnQ0FBYSxTQUFELENBQVlMLElBQVosQ0FBaUJKLFVBQWpCLEtBQWdDLENBQUNRLE9BQW5EO0FBQ0EsS0FBTUUsNEJBQVcsT0FBRCxDQUFVTixJQUFWLENBQWVKLFVBQWYsQ0FBaEI7QUFDQSxLQUFNVywwQkFBU0YsYUFBYUQsT0FBYixJQUF3QkUsT0FBdkM7O0FBRUEsS0FBTUUsZ0NBQVlaLFdBQVd6VSxPQUFYLENBQW1CLFFBQW5CLElBQStCLENBQUMsQ0FBaEMsSUFBcUMsQ0FBQzhVLFNBQXhEOztBQUVBLEtBQU1RLDhCQUFXLFNBQVhBLFFBQVc7QUFBQSxVQUFNLGtCQUFrQmxILE1BQWxCLElBQTRCc0csVUFBVWEsY0FBNUM7QUFBQSxFQUFqQixDOzs7Ozs7QUN6QlA7QUFDQTs7Ozs7Ozs7OztBQUtBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7OztLQU1NQyxVOzs7Ozs7Ozs7Ozt3QkFFQXBQLEksRUFBTTtBQUFBOztBQUNWLFNBQUsySixJQUFMLENBQVVySCxRQUFWLEdBQXFCdEMsSUFBckI7QUFDQSxTQUFLN0csT0FBTCxDQUFhQyxRQUFiLENBQXNCLDZCQUF0QjtBQUNBbU4sZUFBVztBQUFBLFlBQU0sT0FBS3BOLE9BQUwsQ0FBYXFGLFdBQWIsQ0FBeUIsNkJBQXpCLENBQU47QUFBQSxLQUFYLEVBQTBFLEdBQTFFO0FBQ0E7O0FBRUQ7Ozs7OzttQ0FHZ0I7QUFDZixTQUFLbUwsSUFBTCxHQUFZLG1CQUFTLEtBQUs1TixNQUFkLENBQVo7QUFDQSxXQUFPLEtBQUs1QyxPQUFMLEdBQWUsc0JBQUUsU0FBRixFQUNwQkMsUUFEb0IsQ0FDWCxxQkFEVyxFQUVwQmlKLE1BRm9CLENBRWIsS0FBS3NILElBQUwsQ0FBVXhRLE9BRkcsQ0FBdEI7QUFHQTs7Ozs7O21CQUlhaVcsVTs7Ozs7O0FDcENmO0FBQ0E7Ozs7Ozs7Ozs7QUFHQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQTtBQUNBOzs7Ozs7S0FNTUMsSTs7O0FBRUwsZ0JBQWF0VCxNQUFiLEVBQWlDO0FBQUEsT0FBWkksT0FBWSx1RUFBSixFQUFJOztBQUFBOztBQUNoQ0EsYUFBVSxpQkFBRStILE1BQUYsQ0FBUyxFQUFULEVBQWE7QUFDdEJwSSxRQUFLLFlBQUNDLE1BQUQsRUFBWTtBQUNoQixTQUFNQyxRQUFRRCxPQUFPQyxLQUFyQjtBQUNBLFlBQU8sMEJBQWNBLE1BQU1FLFdBQXBCLENBQVA7QUFDQTtBQUpxQixJQUFiLEVBS1BDLE9BTE8sQ0FBVjs7QUFEZ0MsMkdBUTFCSixNQVIwQixFQVFsQkksT0FSa0I7O0FBVWhDLFNBQUtKLE1BQUwsQ0FBWXNDLEVBQVosQ0FBZSxZQUFmLEVBQTZCLE1BQUtpUixVQUFMLENBQWdCL1AsSUFBaEIsT0FBN0I7QUFDQSxTQUFLeEQsTUFBTCxDQUFZc0MsRUFBWixDQUFlLFFBQWYsRUFBeUIsTUFBS2lSLFVBQUwsQ0FBZ0IvUCxJQUFoQixPQUF6QjtBQVhnQztBQVloQzs7Ozs4QkFFVVQsQyxFQUFHaEIsSSxFQUFNO0FBQ25CLFNBQUszRSxPQUFMLENBQWFvVyxJQUFiLENBQWtCLEtBQUtwVCxPQUFMLENBQWFMLEVBQWIsQ0FBZ0IsS0FBS0MsTUFBckIsQ0FBbEI7QUFDQTs7O21DQUVlO0FBQ2YsU0FBSzVDLE9BQUwsR0FBZSxxQkFBUyxLQUFULEVBQWdCLEVBQUVvSixXQUFZLGVBQWQsRUFBaEIsQ0FBZjtBQUNBLFdBQU8sS0FBS3BKLE9BQVo7QUFDQTs7Ozs7O0FBSUYscUJBQVVtTyxpQkFBVixDQUE0QixNQUE1QixFQUFvQytILElBQXBDO21CQUNlQSxJOzs7Ozs7QUMzQ2Y7QUFDQTs7Ozs7Ozs7Ozs7O0FBSUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7QUFHQTs7Ozs7Ozs7O0tBU01HLGlCOzs7QUFDTCw2QkFBYXpULE1BQWIsRUFBcUJJLE9BQXJCLEVBQThCO0FBQUE7O0FBQUEsa0JBQ2RBLE9BRGM7QUFBQSxPQUN2QjZELElBRHVCLFlBQ3ZCQSxJQUR1Qjs7QUFHN0I7QUFDQTs7QUFDQSxPQUFJeVAsaUJBQWlCLEVBQXJCOztBQUVBLE9BQUluVSxrQkFBa0IsRUFBdEI7O0FBRUEsT0FBSUosV0FBVyxFQUFmOztBQUVBLE9BQUc4RSxRQUFRLElBQVgsRUFBaUI7O0FBRWhCOUUsZUFBV2EsT0FBT0ksT0FBUCxDQUFlakIsUUFBZixDQUF3QjhFLElBQXhCLENBQVg7O0FBRUExRSxzQkFBa0JTLE9BQU9JLE9BQVAsQ0FBZWIsZUFBZixDQUErQjBFLElBQS9CLENBQWxCOztBQUVBLEtBQ0MsRUFBRTJELHdCQUFGLEVBQW9CM0QsTUFBTyxRQUEzQixFQURELEVBRWEsRUFBRTJELCtCQUFGLEVBQTJCM0QsTUFBTyxTQUFsQyxFQUZiLEVBR2EsRUFBRTJELHdCQUFGLEVBQW9CM0QsTUFBTyxLQUEzQixFQUhiLEVBSUV0RyxPQUpGLENBSVUsZ0JBQVE7QUFDakIsU0FBR0csS0FBSzhKLElBQVIsRUFBYztBQUNiLFVBQU0rTCxZQUFlMVAsSUFBZixTQUF1Qm5HLEtBQUttRyxJQUFsQzs7QUFFQSxVQUFHakUsT0FBT0ksT0FBUCxDQUFlakIsUUFBZixDQUF3QndVLFNBQXhCLENBQUgsRUFBdUM7QUFDdENELHdCQUFpQixpQkFBRXZMLE1BQUYsQ0FBUyxFQUFULEVBQWF1TCxjQUFiLEVBQTZCMVQsT0FBT0ksT0FBUCxDQUFlYixlQUFmLENBQStCb1UsU0FBL0IsQ0FBN0IsQ0FBakI7QUFDQXhVLGtCQUFXYSxPQUFPSSxPQUFQLENBQWVqQixRQUFmLENBQXdCd1UsU0FBeEIsQ0FBWDtBQUNBO0FBQ0Q7QUFDRCxZQUFPN1YsS0FBSzhKLElBQVo7QUFDQSxLQWREO0FBZUE7O0FBR0R4SCxhQUFVLGlCQUFFK0gsTUFBRixDQUFTLEVBQVQsRUFBYTtBQUN0QmhKLGNBQVdBLFFBRFc7QUFFdEJLLFdBQVEsTUFGYztBQUd0QkQscUJBQWtCO0FBSEksSUFBYixFQUlQbVUsY0FKTyxFQUlTblUsZUFKVCxFQUkwQmEsT0FKMUIsQ0FBVjs7QUFuQzZCLHFJQXlDdkJKLE1BekN1QixFQXlDZkksT0F6Q2U7O0FBMkM3QixTQUFLdUksTUFBTCxHQUFjdkksUUFBUXVJLE1BQVIsSUFBa0IsS0FBaEM7QUFDQSxTQUFLMUUsSUFBTCxHQUFZN0QsUUFBUTZELElBQXBCOztBQUVBLFNBQUtqRSxNQUFMLENBQVliLFFBQVosQ0FBcUIsTUFBSzhFLElBQTFCO0FBOUM2QjtBQStDN0I7Ozs7c0NBR2tCQSxJLEVBQU07QUFBQSxRQUNoQjFFLGVBRGdCLEdBQ0ksS0FBS2EsT0FEVCxDQUNoQmIsZUFEZ0I7O0FBRXhCLFFBQUk5QixTQUFTOEIsZ0JBQWdCbU4sT0FBaEIsSUFBMkIsRUFBeEM7O0FBRUEsUUFBR25OLGdCQUFnQjBFLElBQWhCLENBQUgsRUFBMEI7QUFDekJ4RyxjQUFTLGlCQUFFMEssTUFBRixDQUFTLElBQVQsRUFBZSxFQUFmLEVBQW1CMUssTUFBbkIsRUFBMkI4QixnQkFBZ0IwRSxJQUFoQixDQUEzQixDQUFUO0FBQ0E7O0FBRUQsV0FBT3hHLE1BQVA7QUFDQTs7OzhCQUVVbVcsUSxFQUFVM1AsSSxFQUFNN0QsTyxFQUFTO0FBQ25DLFFBQU1zTSxVQUFVLGtCQUFRbUgsTUFBUixDQUFlLEtBQUs3VCxNQUFwQixFQUE0QmlFLElBQTVCO0FBQ2Y2UCxpQkFBYSxLQUFLMVQsT0FBTCxDQUFhNkQ7QUFEWCxPQUVaN0QsT0FGWSxFQUFoQjs7QUFLQSxRQUFHc00sV0FBVyxJQUFkLEVBQW9CO0FBQ25CO0FBQ0E7O0FBRUQsV0FBTWtILFdBQVcsS0FBS0csS0FBTCxDQUFXcE8sTUFBNUIsRUFBb0M7QUFDbkMsVUFBS3FPLE1BQUw7QUFDQTs7QUFFRCxRQUFNQyxVQUFVLEtBQUtGLEtBQUwsQ0FBV0gsUUFBWCxDQUFoQjtBQUNBSyxZQUFRM04sTUFBUixDQUFlb0csUUFBUXRQLE9BQXZCOztBQUVBLFFBQUksS0FBSytCLFFBQUwsSUFBaUIsSUFBckIsRUFBMkI7QUFDMUIsVUFBS0EsUUFBTCxHQUFnQixFQUFoQjtBQUNBO0FBQ0QsUUFBSSxLQUFLQSxRQUFMLENBQWN5VSxRQUFkLEtBQTJCLElBQS9CLEVBQXFDO0FBQ3BDLFVBQUt6VSxRQUFMLENBQWN5VSxRQUFkLElBQTBCLEVBQTFCO0FBQ0E7O0FBRUQsU0FBS3pVLFFBQUwsQ0FBY3lVLFFBQWQsRUFBd0IzUCxJQUF4QixJQUFnQ3lJLE9BQWhDO0FBQ0E7Ozs4QkFFVXdILEssRUFBT0MsTSxFQUFRO0FBQ3pCLFFBQUdBLFVBQVUsSUFBYixFQUFtQjtBQUNsQixTQUFNbFEsT0FBT2lRLEtBQWI7QUFDQSxVQUFJLElBQUlyTyxJQUFJLENBQVosRUFBZUEsSUFBSSxLQUFLMUcsUUFBTCxDQUFjd0csTUFBakMsRUFBeUNFLEdBQXpDLEVBQThDO0FBQzdDLFVBQUcsS0FBSzFHLFFBQUwsQ0FBYzBHLENBQWQsRUFBaUI1QixJQUFqQixLQUEwQixJQUE3QixFQUFtQztBQUNsQyxjQUFPLEtBQUs5RSxRQUFMLENBQWMwRyxDQUFkLEVBQWlCNUIsSUFBakIsQ0FBUDtBQUNBO0FBQ0Q7QUFDRCxLQVBELE1BT087QUFDTixTQUFNQSxRQUFPaVEsS0FBYjtBQUNBLFNBQU1OLFdBQVdPLE1BQWpCO0FBQ0EsWUFBTyxLQUFLaFYsUUFBTCxDQUFjeVUsUUFBZCxFQUF3QjNQLEtBQXhCLENBQVA7QUFDQTs7QUFFRCxXQUFPLElBQVA7QUFDQTs7OzRCQUVRO0FBQ1IsUUFBTWdRLFVBQVUscUJBQVMsS0FBVCxFQUFnQjtBQUMvQnpOLGdEQUEwQyxLQUFLcEcsT0FBTCxDQUFhNkQ7QUFEeEIsS0FBaEIsQ0FBaEI7O0FBSUEsUUFBSSxLQUFLOFAsS0FBTCxJQUFjLElBQWxCLEVBQXdCO0FBQ3ZCLFVBQUtBLEtBQUwsR0FBYSxFQUFiO0FBQ0E7QUFDRCxTQUFLQSxLQUFMLENBQVd0SixJQUFYLENBQWdCd0osT0FBaEI7QUFDQSxTQUFLN1csT0FBTCxDQUFha0osTUFBYixDQUFvQjJOLE9BQXBCOztBQUVBLFdBQU9BLE9BQVA7QUFDQTs7OzBCQUVNTCxRLEVBQVU7QUFDaEIsV0FBTyxLQUFLRyxLQUFMLENBQVdILFlBQVksQ0FBdkIsQ0FBUDtBQUNBOztBQUVEOzs7Ozs7bUNBR2dCO0FBQUE7O0FBQUEsb0JBQ21CLEtBQUt4VCxPQUR4QjtBQUFBLFFBQ1A2RCxJQURPLGFBQ1BBLElBRE87QUFBQSxRQUNEOUUsUUFEQyxhQUNEQSxRQURDO0FBQUEsUUFDU0ssS0FEVCxhQUNTQSxLQURUOztBQUVmLFFBQUk0VSxjQUFjLElBQWxCOztBQUVBLFNBQUtoWCxPQUFMLEdBQWUscUJBQVMsS0FBVCxFQUFnQjtBQUM5Qm9KLDhFQUF3RXZDO0FBRDFDLEtBQWhCLENBQWY7O0FBSUEsUUFBRyxPQUFPekUsS0FBUCxLQUFpQixRQUFwQixFQUE4QjtBQUM3QjRVLG1CQUFjNVUsS0FBZDtBQUNBOztBQUVETCxhQUFTeEIsT0FBVCxDQUFpQixVQUFDOEssR0FBRCxFQUFNbUwsUUFBTixFQUFtQjtBQUNuQyxTQUFNSyxVQUFVLE9BQUtELE1BQUwsRUFBaEI7QUFDQSxTQUFJSyxXQUFXRCxXQUFmOztBQUVBLFNBQUdoTSxNQUFNQyxPQUFOLENBQWM3SSxLQUFkLEtBQXdCQSxNQUFNb1UsUUFBTixDQUEzQixFQUE0QztBQUMzQ1MsaUJBQVc3VSxNQUFNb1UsUUFBTixDQUFYO0FBQ0E7O0FBRURuTCxTQUFJOUssT0FBSixDQUFZLHVCQUFlOztBQUUxQixVQUFHMlcsZ0JBQWdCLFVBQWhCLElBQThCRCxhQUFhLFNBQTlDLEVBQXlEO0FBQ3hEek4sZUFBUUMsSUFBUixDQUFhLG1FQUFiO0FBQ0E7O0FBRUQsYUFBSzBOLFVBQUwsQ0FBZ0JYLFFBQWhCLEVBQTBCVSxXQUExQixFQUF1QyxPQUFLRSxrQkFBTCxDQUF3QnZRLElBQXhCLENBQXZDO0FBQ0EsTUFQRDs7QUFTQWdRLGFBQVE1VyxRQUFSLHlCQUF1Q2dYLFFBQXZDLEVBQ0VwTyxJQURGLENBQ08sVUFEUCxFQUNtQixDQURuQjs7QUFHQWdPLGFBQVF4TSxJQUFSLENBQWEscUJBQWIsRUFBb0M0SyxNQUFwQztBQUNBLEtBckJEOztBQXVCQSxXQUFPLEtBQUtqVixPQUFaO0FBQ0E7OzswQkFFTztBQUNQLFNBQUtBLE9BQUwsQ0FBYTZOLElBQWI7QUFDQSxTQUFLN04sT0FBTCxDQUFhcUssSUFBYixDQUFrQixvQkFBbEIsRUFBd0N3RCxJQUF4QztBQUNBOzs7MEJBRU87QUFDUCxTQUFLN04sT0FBTCxDQUFha0QsSUFBYjtBQUNBLFNBQUtsRCxPQUFMLENBQWFxSyxJQUFiLENBQWtCLG9CQUFsQixFQUF3Q25ILElBQXhDO0FBQ0E7Ozs7OztBQUdGLHFCQUFVaUwsaUJBQVYsQ0FBNEIsbUJBQTVCLEVBQWlEa0ksaUJBQWpEO21CQUNlQSxpQjs7Ozs7O0FDdk1mO0FBQ0E7Ozs7Ozs7Ozs7QUFJQTs7OztBQUNBOzs7O0FBRUE7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7S0FRTWdCLFE7OztBQUNMLG9CQUFZelUsTUFBWixFQUFvQkksT0FBcEIsRUFBNkI7QUFBQTs7QUFBQTs7QUFBQSx3QkFDUEEsT0FETyxDQUN0QmtKLEtBRHNCO0FBQUEsT0FDdEJBLEtBRHNCLGtDQUNkLEVBRGM7O0FBRTVCQSxXQUFRLEdBQUc1TCxNQUFILENBQVU0TCxLQUFWLENBQVI7O0FBRUE7O0FBSjRCLG1IQU10QnRKLE1BTnNCLEVBTWRJLE9BTmM7O0FBUTVCLFNBQUtzVSxhQUFMLEdBQXFCLE1BQUtDLGFBQTFCO0FBQ0EsU0FBS0MsYUFBTCxHQUFxQixNQUFLQyxpQkFBTCxDQUF1QixDQUF2QixDQUFyQjs7QUFFQSxTQUFLdkwsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBSzNELE1BQUwsR0FBYyxNQUFLMkQsS0FBTCxDQUFXM0QsTUFBekI7O0FBRUEsU0FBS21QLGdCQUFMLENBQXNCLENBQXRCOztBQUVBLFNBQUsxWCxPQUFMLENBQ0VxSyxJQURGLENBQ08sbUJBRFAsRUFFRW5GLEVBRkYsQ0FFSyxPQUZMLEVBRWMsTUFBS3lTLGNBQUwsQ0FBb0J2UixJQUFwQixPQUZkOztBQUlBOztBQUVBLFNBQUt4RCxNQUFMLENBQVlzQyxFQUFaLENBQWUsWUFBZixFQUE2QixNQUFLMFMsWUFBTCxDQUFrQnhSLElBQWxCLE9BQTdCOztBQUVBLFNBQUt4RCxNQUFMLENBQVlzQyxFQUFaLENBQWUsUUFBZixFQUF5QixNQUFLMlMscUJBQUwsQ0FBMkJ6UixJQUEzQixPQUF6Qjs7QUFFQSxTQUFLeEQsTUFBTCxDQUFZc0MsRUFBWixDQUFlLGdCQUFmLEVBQWlDLE1BQUsyUyxxQkFBTCxDQUEyQnpSLElBQTNCLE9BQWpDOztBQUVBLFNBQUt4RCxNQUFMLENBQVlzQyxFQUFaLENBQWUsT0FBZixFQUF3QjtBQUFBLFdBQU0sTUFBS3RDLE1BQUwsQ0FBWTJLLEtBQVosRUFBTjtBQUFBLElBQXhCOztBQUVBO0FBQ0E7Ozs7MEJBRU07QUFDTixRQUFNdUssZUFBZUMsU0FBUyxLQUFLUCxhQUFMLENBQW1CM08sSUFBbkIsQ0FBd0IsWUFBeEIsQ0FBVCxDQUFyQjtBQUNBLFFBQU1tUCxXQUFXRixnQkFBZ0IsS0FBS3ZQLE1BQXJCLEdBQThCLEtBQUtBLE1BQW5DLEdBQTRDdVAsZUFBZSxDQUE1RTs7QUFFQSxTQUFLSixnQkFBTCxDQUFzQk0sUUFBdEI7O0FBRUEsU0FBS3BWLE1BQUwsQ0FBWUMsS0FBWixDQUFrQkUsV0FBbEIsR0FBZ0MsS0FBS21KLEtBQUwsQ0FBVzRMLFlBQVgsRUFBeUJsUCxHQUF6RDtBQUNBOzs7MEJBRU07QUFDTixRQUFNa1AsZUFBZUMsU0FBUyxLQUFLUCxhQUFMLENBQW1CM08sSUFBbkIsQ0FBd0IsWUFBeEIsQ0FBVCxDQUFyQjtBQUNBLFFBQU1tUCxXQUFXRixnQkFBZ0IsQ0FBaEIsR0FBb0IsQ0FBcEIsR0FBd0JBLGVBQWUsQ0FBeEQ7O0FBRUEsU0FBS0osZ0JBQUwsQ0FBc0JNLFFBQXRCO0FBQ0EsU0FBS3BWLE1BQUwsQ0FBWUMsS0FBWixDQUFrQkUsV0FBbEIsR0FBZ0MsS0FBS21KLEtBQUwsQ0FBVzhMLFFBQVgsRUFBcUJyUCxLQUFyRDtBQUNBOztBQUVEOzs7Ozs7bUNBR2dCO0FBQUEsbUJBQ3dCLEtBQUszRixPQUQ3QjtBQUFBLFFBQ1BtSixjQURPLFlBQ1BBLGNBRE87QUFBQSxRQUNTQyxVQURULFlBQ1NBLFVBRFQ7OztBQUlmLFNBQUtwTSxPQUFMLEdBQWUsc0JBQUUsU0FBRixFQUNiQyxRQURhLENBQ0osbUJBREksRUFFYjRJLElBRmEsQ0FFUixVQUZRLEVBRUksR0FGSixDQUFmOztBQUlBLFNBQUswTyxhQUFMLEdBQXFCLHNCQUFFLFNBQUYsRUFBYXRYLFFBQWIsQ0FBc0IsMEJBQXRCLENBQXJCOztBQUVBLFFBQUdrTSxjQUFILEVBQW1CO0FBQ2xCLFVBQUtuTSxPQUFMLENBQWFDLFFBQWIsQ0FBc0IsMkJBQXRCO0FBQ0E7O0FBRUQsUUFBR21NLFVBQUgsRUFBZTtBQUNkLFVBQUtwTSxPQUFMLENBQWFDLFFBQWIsQ0FBc0IsZ0NBQXRCO0FBQ0EsVUFBS3NYLGFBQUwsQ0FBbUJ6TyxHQUFuQixDQUF1QjtBQUN0Qm1QLGFBQVEsQ0FBQyxDQUFELEdBQUs7QUFEUyxNQUF2QjtBQUdBOztBQUVELFNBQUtqWSxPQUFMLENBQWFrSixNQUFiLENBQ0MsS0FBS3FPLGFBQUwsQ0FBbUJyTyxNQUFuQixDQUEwQixLQUFLZ1AsZUFBTCxDQUFxQixLQUFLbFYsT0FBTCxDQUFha0osS0FBbEMsQ0FBMUIsQ0FERDs7QUFLQSxXQUFPLEtBQUtsTSxPQUFaO0FBQ0E7O0FBRUQ7Ozs7OzsyQ0FHd0I7QUFDdkIsUUFBRyxLQUFLa00sS0FBTCxJQUFjLElBQWQsSUFBc0IsS0FBS0EsS0FBTCxDQUFXM0QsTUFBWCxHQUFvQixDQUE3QyxFQUFnRDtBQUMvQyxTQUFNQSxTQUFTLEtBQUsyRCxLQUFMLENBQVczRCxNQUExQjtBQUNBLFVBQUsyRCxLQUFMLENBQVczRCxTQUFTLENBQXBCLEVBQXVCSyxHQUF2QixHQUE2QixLQUFLaEcsTUFBTCxDQUFZQyxLQUFaLENBQWtCMEMsUUFBL0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0Q7OztrQ0FHY0ksQyxFQUFHO0FBQ2pCLFFBQU05QyxRQUFRLEtBQUtELE1BQUwsQ0FBWUMsS0FBMUI7QUFDQSxRQUFNc1YsVUFBVSxzQkFBRXhTLEVBQUV5UyxNQUFKLEVBQVlDLE9BQVosQ0FBb0IsbUJBQXBCLENBQWhCO0FBQ0F4VixVQUFNRSxXQUFOLEdBQW9Cb1YsUUFBUXRQLElBQVIsQ0FBYSxZQUFiLENBQXBCO0FBQ0EsU0FBS2pHLE1BQUwsQ0FBWWdDLE9BQVosQ0FBb0IsZUFBcEIsRUFBcUMsRUFBRXVULFNBQVUsS0FBS2pNLEtBQUwsQ0FBV2lNLFFBQVF0UCxJQUFSLENBQWEsWUFBYixDQUFYLENBQVosRUFBckM7QUFDQTs7O29DQUVnQnJJLEssRUFBTztBQUN2QixRQUNDLEtBQUtnWCxhQUFMLENBQW1CalAsTUFBbkIsS0FBOEIsQ0FBOUIsSUFDQXdQLFNBQVMsS0FBS1AsYUFBTCxDQUFtQjNPLElBQW5CLENBQXdCLFlBQXhCLENBQVQsTUFBb0RySSxLQURwRCxJQUVBLEtBQUtpWCxpQkFBTCxDQUF1QmpYLEtBQXZCLEVBQThCK0gsTUFBOUIsS0FBeUMsQ0FIMUMsRUFJRTtBQUNELFlBQU8sSUFBUDtBQUNBOztBQUVELFNBQUtpUCxhQUFMLENBQW1CblMsV0FBbkIsQ0FBK0IsMEJBQS9CO0FBQ0EsU0FBS21TLGFBQUwsR0FBcUIsS0FBS0MsaUJBQUwsQ0FBdUJqWCxLQUF2QixDQUFyQjtBQUNBLFNBQUtnWCxhQUFMLENBQW1CdlgsUUFBbkIsQ0FBNEIsMEJBQTVCOztBQUVBLFFBQU1xWSxjQUFjLEtBQUtkLGFBQUwsQ0FBbUJlLFFBQW5CLEdBQThCckosR0FBbEQ7O0FBRUEsU0FBS29JLGFBQUwsQ0FDRWtCLE9BREYsQ0FDVTtBQUNSNUksZ0JBQVksS0FBSzBILGFBQUwsQ0FBbUIxSCxTQUFuQixLQUFpQzBJO0FBRHJDLEtBRFYsRUFHSSxHQUhKOztBQUtBLFNBQUsxVixNQUFMLENBQVlnQyxPQUFaLENBQW9CLGdCQUFwQixFQUFzQyxFQUFFdVQsU0FBVSxLQUFLak0sS0FBTCxDQUFXMUwsS0FBWCxDQUFaLEVBQXRDOztBQUVBLFdBQU8sSUFBUDtBQUNBOzs7cUNBRWlCQSxLLEVBQU87QUFDeEIsV0FBTyxLQUFLUixPQUFMLENBQWFxSyxJQUFiLG9DQUFtRDdKLEtBQW5ELFFBQVA7QUFDQTs7O2dDQUdZbUYsQyxFQUFHaEIsSSxFQUFNO0FBQ3JCLFFBQUksS0FBSzZTLGFBQUwsQ0FBbUJqUCxNQUFuQixLQUE4QixDQUFsQyxFQUFxQztBQUNwQztBQUNBOztBQUVELFFBQU14RixjQUFjLEtBQUtILE1BQUwsQ0FBWUcsV0FBaEM7O0FBRUE7QUFDQTtBQUNBLFFBQUcsS0FBS0gsTUFBTCxDQUFZc0UsSUFBWixLQUFxQixNQUF4QixFQUFnQztBQUMvQixTQUFNdVIsaUJBQWlCLEtBQUtqQixhQUFMLENBQW1CM08sSUFBbkIsQ0FBd0IsVUFBeEIsQ0FBdkI7QUFDQSxVQUFLMk8sYUFBTCxDQUNFbFUsSUFERixHQUVFK0csSUFGRixDQUVPLE9BRlAsRUFHRStMLElBSEYsQ0FHTywwQkFBY3FDLGlCQUFpQjFWLFdBQS9CLENBSFA7QUFJQTs7QUFFRCxTQUFLLElBQUkwRixJQUFJLENBQWIsRUFBZ0JBLElBQUksS0FBS3lELEtBQUwsQ0FBVzNELE1BQS9CLEVBQXVDRSxHQUF2QyxFQUE0QztBQUMzQyxTQUFNMFAsVUFBVSxLQUFLak0sS0FBTCxDQUFXekQsQ0FBWCxDQUFoQjtBQUNBLFNBQUkxRixjQUFjb1YsUUFBUXZQLEdBQTFCLEVBQStCO0FBQzlCLFdBQUs4TyxnQkFBTCxDQUFzQmpQLENBQXRCO0FBQ0E7QUFDQTtBQUNEO0FBQ0Q7Ozs7O0FBZ0JEOzs7OztpQ0FLYzBQLE8sRUFBUzNYLEssRUFBTztBQUM3QixRQUFNMEwsUUFBUSxLQUFLQSxLQUFMLElBQWMsS0FBS2xKLE9BQUwsQ0FBYWtKLEtBQXpDO0FBQ0EsUUFBTXhMLE9BQU8sNENBQ21CLENBQUNGLEtBQUQsR0FBUywwQkFBVCxHQUFzQyxFQUR6RCxnQ0FFRzJYLFFBQVF4UCxLQUZYLCtCQUdHbkksTUFBTWtZLFFBQU4sRUFISCw2QkFJQ1AsUUFBUXZQLEdBSlQsdURBSzBCLDBCQUFjdVAsUUFBUXhQLEtBQXRCLENBTDFCLDhIQVFQd1AsUUFBUVEsUUFBUixJQUFvQixpQ0FSYiwwQ0FTWSwwQkFBY3pNLE1BQU0sQ0FBTixFQUFTdEQsR0FBdkIsQ0FUWiw4Q0FZVHVQLFFBQVF2TyxLQUFSLElBQWlCLElBQWpCLDRDQUN3Q3VPLFFBQVF2TyxLQURoRCxjQUVFLEVBZE8sc0JBaUJUdU8sUUFBUXpWLFdBQVIsSUFBdUIsSUFBdkIsa0RBQzhDeVYsUUFBUXpWLFdBRHRELGNBRUUsRUFuQk8sNENBdUJYa1csSUF2QlcsRUFBYjtBQXdCQSxXQUFPbFksSUFBUDtBQUNBOztBQUVEO0FBQ0E7Ozs7Ozs7OztpQ0FNY2lFLEksRUFBTW5FLEssRUFBTztBQUMxQixTQUFLaVgsaUJBQUwsQ0FBdUJqWCxLQUF2QixFQUNFcVksV0FERixDQUNjLEtBQUtDLGFBQUwsQ0FBbUJuVSxJQUFuQixFQUF5Qm5FLEtBQXpCLENBRGQsRUFFRTBFLEVBRkYsQ0FFSyxPQUZMLEVBRWMsS0FBS3lTLGNBQUwsQ0FBb0J2UixJQUFwQixDQUF5QixJQUF6QixDQUZkO0FBR0E7OzttQ0FFZThGLEssRUFBTztBQUFBOztBQUN0QixRQUFJN0wsU0FBUyxFQUFiO0FBQ0E2TCxVQUFNM0wsT0FBTixDQUFjLFVBQUM0WCxPQUFELEVBQVUzWCxLQUFWLEVBQW9CO0FBQ2pDSCxlQUFVLE9BQUt5WSxhQUFMLENBQW1CWCxPQUFuQixFQUE0QjNYLEtBQTVCLENBQVY7QUFDQSxLQUZEO0FBR0EsV0FBT0gsTUFBUDtBQUNBOzs7cUJBbkVXa0ssSyxFQUFPO0FBQ2xCLFFBQUksS0FBS3ZLLE9BQUwsQ0FBYTRRLFFBQWIsQ0FBc0IsMkJBQXRCLEtBQXNEckcsS0FBMUQsRUFBaUU7QUFDaEUsVUFBS3ZLLE9BQUwsQ0FBYXFGLFdBQWIsQ0FBeUIsMkJBQXpCO0FBQ0EsVUFBS3pDLE1BQUwsQ0FBWWdDLE9BQVosQ0FBb0IsZ0JBQXBCLEVBQXNDLEVBQUVtVSxXQUFZeE8sS0FBZCxFQUF0QztBQUNBLEtBSEQsTUFHTyxJQUFJLENBQUNBLEtBQUwsRUFBWTtBQUNsQixVQUFLdkssT0FBTCxDQUFhQyxRQUFiLENBQXNCLDJCQUF0QjtBQUNBLFVBQUsyQyxNQUFMLENBQVlnQyxPQUFaLENBQW9CLGdCQUFwQixFQUFzQyxFQUFFbVUsV0FBWXhPLEtBQWQsRUFBdEM7QUFDQTtBQUNELEk7dUJBRWE7QUFDYixXQUFPLENBQUMsS0FBS3ZLLE9BQUwsQ0FBYTRRLFFBQWIsQ0FBc0IsMkJBQXRCLENBQVI7QUFDQTs7Ozs7O0FBMERGLHFCQUFVekMsaUJBQVYsQ0FBNEIsVUFBNUIsRUFBd0NrSixRQUF4QzttQkFDZUEsUTs7Ozs7O0FDeFBmO0FBQ0E7Ozs7Ozs7Ozs7QUFLQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7O0tBTU0yQixZOzs7QUFFTCx3QkFBWXBXLE1BQVosRUFBZ0M7QUFBQSxPQUFaSSxPQUFZLHVFQUFKLEVBQUk7O0FBQUE7O0FBQUEsMkhBQ3pCSixNQUR5QixFQUNqQkksT0FEaUI7O0FBRS9CLE9BQUcsTUFBS0osTUFBTCxDQUFZZ0wsTUFBWixJQUFzQixJQUF6QixFQUErQjtBQUM5QixVQUFLcUwsT0FBTCxHQUFlLE1BQUtyVyxNQUFMLENBQVlnTCxNQUFaLENBQW1CcUwsT0FBbEM7QUFDQSxVQUFLalosT0FBTCxDQUFha0QsSUFBYjtBQUNBO0FBQ0QsU0FBS04sTUFBTCxDQUFZc0MsRUFBWixDQUFlLE9BQWYsRUFBd0IsTUFBS2dVLGFBQUwsQ0FBbUI5UyxJQUFuQixPQUF4QjtBQU4rQjtBQU8vQjs7QUFFRDs7Ozs7OzttQ0FHZ0I7QUFDZixTQUFLcEcsT0FBTCxHQUFlLHNCQUFFLFNBQUYsRUFDYkMsUUFEYSxDQUNKLHdCQURJLENBQWY7QUFFQTs7O2lDQU1hMEYsQyxFQUFHaEIsSSxFQUFNO0FBQ3RCLFFBQU1hLFFBQVFiLEtBQUthLEtBQW5CO0FBQ0EsU0FBS3lULE9BQUwsR0FBZXpULE1BQU15VCxPQUFyQjtBQUNBLFNBQUtqWixPQUFMLENBQWFrRCxJQUFiO0FBQ0E7OztxQkFSV3FILEssRUFBTztBQUNsQixTQUFLdkssT0FBTCxDQUFhMkosSUFBYixDQUFrQlksS0FBbEI7QUFDQTs7Ozs7O0FBU0YscUJBQVU0RCxpQkFBVixDQUE0QixjQUE1QixFQUE0QzZLLFlBQTVDO21CQUNlQSxZOzs7Ozs7QUM5Q2Y7QUFDQTs7Ozs7Ozs7OztBQUtBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7O0tBT01HLE07OztBQUVMLGtCQUFZdlcsTUFBWixFQUFnQztBQUFBLE9BQVpJLE9BQVksdUVBQUosRUFBSTs7QUFBQTs7QUFDL0JBLGFBQVUsaUJBQUUrSCxNQUFGLENBQVMsRUFBVCxFQUFhO0FBQ3RCbkYsU0FBTTVDLFFBQVE0QztBQURRLElBQWIsRUFFUDVDLE9BRk8sQ0FBVjs7QUFEK0IsK0dBS3pCSixNQUx5QixFQUtqQkksT0FMaUI7O0FBTy9CLFNBQUs0QyxHQUFMLEdBQVcsTUFBSzVDLE9BQUwsQ0FBYTRDLEdBQXhCO0FBUCtCO0FBUS9COzs7Ozs7QUFjRDs7O21DQUdnQjtBQUNmLFNBQUs1RixPQUFMLEdBQWUsc0JBQUUsU0FBRixFQUNiQyxRQURhLENBQ0osaUJBREksQ0FBZjs7QUFHQSxXQUFPLEtBQUtELE9BQVo7QUFDQTs7O3FCQXBCT3VLLEssRUFBTztBQUNkLFFBQUdBLFNBQVMsSUFBWixFQUFrQjtBQUNqQjtBQUNBO0FBQ0QsU0FBSzZPLElBQUwsR0FBWTdPLEtBQVo7QUFDQSxTQUFLdkssT0FBTCxDQUFhOEksR0FBYixDQUFpQixrQkFBakIsWUFBNkN5QixLQUE3QztBQUNBLEk7dUJBRVM7QUFDVCxXQUFPLEtBQUs2TyxJQUFaO0FBQ0E7Ozs7OztBQWNGLHFCQUFVakwsaUJBQVYsQ0FBNEIsUUFBNUIsRUFBc0NnTCxNQUF0QzttQkFDZUEsTTs7Ozs7Ozs7Ozs7QUNyRGY7Ozs7QUFLQTs7Ozs7QUFLQSxLQUFJRSxnQkFBZ0IsRUFBcEI7O0FBRUE7QUFDQTtBQUNBLEtBQU1DLFNBQVM7QUFDZDtBQUNBLEVBQ0MsbUJBREQsRUFFQyxnQkFGRCxFQUdDLG1CQUhELEVBSUMsbUJBSkQsRUFLQyxrQkFMRCxFQU1DLGlCQU5ELENBRmM7QUFVZDtBQUNBLEVBQ0MseUJBREQsRUFFQyxzQkFGRCxFQUdDLHlCQUhELEVBSUMseUJBSkQsRUFLQyx3QkFMRCxFQU1DLHVCQU5ELENBWGM7QUFtQmQ7QUFDQSxFQUNDLHlCQURELEVBRUMsd0JBRkQsRUFHQyxnQ0FIRCxFQUlDLHdCQUpELEVBS0Msd0JBTEQsRUFNQyx1QkFORCxDQXBCYztBQTRCZDtBQUNBLEVBQ0Msc0JBREQsRUFFQyxxQkFGRCxFQUdDLHNCQUhELEVBSUMsc0JBSkQsRUFLQyxxQkFMRCxFQU1DLG9CQU5ELENBN0JjO0FBcUNkO0FBQ0EsRUFDQyxxQkFERCxFQUVDLGtCQUZELEVBR0MscUJBSEQsRUFJQyxxQkFKRCxFQUtDLG9CQUxELEVBTUMsbUJBTkQsQ0F0Q2MsQ0FBZjs7QUFpREEsS0FBSUMsVUFBVUQsT0FBTyxDQUFQLENBQWQ7O0FBRUEsS0FBSUUsbUJBQUo7O0FBRUE7QUFDQSxNQUFLLElBQUkvUSxJQUFJLENBQWIsRUFBZ0JBLElBQUk2USxPQUFPL1EsTUFBM0IsRUFBbUNFLEdBQW5DLEVBQXdDO0FBQ3ZDO0FBQ0EsTUFBSTZRLE9BQU83USxDQUFQLEVBQVUsQ0FBVixLQUFnQi9CLFFBQXBCLEVBQThCO0FBQzdCOFMsZ0JBQWFGLE9BQU83USxDQUFQLENBQWI7QUFDQTtBQUNBO0FBQ0Q7O0FBRUQ7QUFDQSxLQUFJK1EsVUFBSixFQUFnQjtBQUNmLE9BQUssSUFBSS9RLEtBQUUsQ0FBWCxFQUFjQSxLQUFFK1EsV0FBV2pSLE1BQTNCLEVBQW1DRSxJQUFuQyxFQUF3QztBQUN2QzRRLGlCQUFjRSxRQUFROVEsRUFBUixDQUFkLElBQTRCK1EsV0FBVy9RLEVBQVgsQ0FBNUI7QUFDQTtBQUNEOzttQkFFYzRRLGE7Ozs7OztBQ25GZjtBQUNBOzs7Ozs7Ozs7Ozs7OztLQUtNOUssTTs7Ozs7Ozs7QUFDTDs7Ozs7Ozt1QkFPWTFILEksRUFBTTRTLEksRUFBTTtBQUN2QixRQUFJQyxVQUFVaFQsU0FBU2lULE1BQVQsQ0FBZ0J4SSxLQUFoQixDQUFzQixHQUF0QixDQUFkO0FBQ0EsU0FBSyxJQUFJMUksQ0FBVCxJQUFjaVIsT0FBZCxFQUF1QjtBQUN0QixTQUFJRSxJQUFJRixRQUFTalIsQ0FBVCxFQUFhbVEsSUFBYixHQUFvQnpILEtBQXBCLENBQTBCLEdBQTFCLENBQVI7QUFDQSxTQUFJeUksRUFBRyxDQUFILE1BQVcsY0FBYy9TLElBQTdCLEVBQ0MsT0FBTytTLEVBQUcsQ0FBSCxDQUFQO0FBQ0Q7QUFDRCxXQUFPSCxJQUFQO0FBQ0E7O0FBRUQ7Ozs7Ozs7Ozt1QkFNWTVTLEksRUFBTTBELEssRUFBTztBQUN4QixRQUFJcVAsSUFBSSxJQUFJdEgsSUFBSixFQUFSO0FBQ0FzSCxNQUFFQyxPQUFGLENBQVVELEVBQUVFLElBQUYsR0FBUyxDQUFuQjtBQUNBcFQsYUFBU2lULE1BQVQsR0FBa0IsY0FBYzlTLElBQWQsR0FBcUIsR0FBckIsR0FBMkIwRCxLQUEzQixHQUFtQyxXQUFuQyxHQUFpRHFQLEVBQUVsQixRQUFGLEVBQW5FO0FBQ0E7Ozs7OzttQkFHYW5LLE07Ozs7Ozs7Ozs7Ozs7O0FDckNmOzs7Ozs7OztLQUVNd0wsVSxHQUNMLG9CQUFZeFAsS0FBWixFQUFtQjtBQUFBOztBQUNsQixNQUFHQSxpQkFBaUJ3UCxVQUFwQixFQUFnQztBQUMvQixVQUFPeFAsS0FBUDtBQUNBO0FBQ0QsTUFBSSxPQUFPQSxLQUFQLEtBQWlCLFFBQXJCLEVBQStCO0FBQzlCLFFBQUt2RSxJQUFMLEdBQVl1RSxLQUFaO0FBQ0EsR0FGRCxNQUVPLElBQUksT0FBT0EsS0FBUCxLQUFpQixRQUFyQixFQUErQjtBQUN0QztBQUNDLFFBQUswTyxPQUFMLEdBQWUxTyxLQUFmO0FBQ0EsR0FITSxNQUdBLElBQUksUUFBT0EsS0FBUCx5Q0FBT0EsS0FBUCxPQUFpQixRQUFyQixFQUErQjs7QUFFckM7QUFDQTtBQUNBLE9BQUksT0FBT0EsTUFBTXZFLElBQWIsS0FBc0IsUUFBMUIsRUFBb0M7QUFDbkMsU0FBS0EsSUFBTCxHQUFZdUUsTUFBTXZFLElBQWxCO0FBQ0E7O0FBRUQsb0JBQUUrRSxNQUFGLENBQVMsSUFBVCxFQUFlUixLQUFmO0FBQ0E7O0FBRUQsTUFBSSxDQUFDLEtBQUswTyxPQUFWLEVBQW1CO0FBQ2xCLFFBQUtBLE9BQUwsR0FBZWMsV0FBV0MsZUFBWCxDQUEyQixLQUFLaFUsSUFBaEMsS0FBeUMsRUFBeEQ7QUFDQTtBQUNELEU7O0FBR0YrVCxZQUFXN0wsU0FBWCxDQUFxQmxJLElBQXJCLEdBQTRCLENBQTVCOztBQUVBK1QsWUFBVzdMLFNBQVgsQ0FBcUIrSyxPQUFyQixHQUErQixFQUEvQjs7QUFFQWMsWUFBV0UsVUFBWCxHQUF3QixDQUN2QixrQkFEdUIsRUFFdkIsbUJBRnVCLEVBR3ZCLG1CQUh1QixFQUl2QixrQkFKdUIsRUFLdkIsNkJBTHVCLEVBTXZCLHFCQU51QixDQUF4Qjs7QUFVQUYsWUFBV0MsZUFBWCxHQUE2QjtBQUM1QixLQUFJLDZCQUR3QjtBQUU1QixLQUFJLGtEQUZ3QjtBQUc1QixLQUFJLHVJQUh3QjtBQUk1QixLQUFJLGdKQUp3QjtBQUs1QixLQUFJO0FBTHdCLEVBQTdCOztBQVFBO0FBQ0E7QUFDQSxNQUFLLElBQUlFLFNBQVMsQ0FBbEIsRUFBcUJBLFNBQVNILFdBQVdFLFVBQVgsQ0FBc0IxUixNQUFwRCxFQUE0RDJSLFFBQTVELEVBQXNFO0FBQ3JFSCxhQUFXQSxXQUFXRSxVQUFYLENBQXNCQyxNQUF0QixDQUFYLElBQTRDQSxNQUE1QztBQUNBO0FBQ0FILGFBQVc3TCxTQUFYLENBQXFCNkwsV0FBV0UsVUFBWCxDQUFzQkMsTUFBdEIsQ0FBckIsSUFBc0RBLE1BQXREO0FBQ0E7O21CQUVjSCxVOzs7Ozs7QUMzRGY7QUFDQTs7Ozs7Ozs7OztBQUlBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7O0tBS01JLFc7OztBQUNMLHVCQUFhdlgsTUFBYixFQUFpQztBQUFBLE9BQVpJLE9BQVksdUVBQUosRUFBSTs7QUFBQTs7QUFDaENBLGFBQVUsaUJBQUUrSCxNQUFGLENBQVMsRUFBVCxFQUFhO0FBQ3RCNUIsY0FBVyxNQURXO0FBRXRCUyxXQUFRLHFCQUZjO0FBR3RCUixlQUFZLE1BSFU7QUFJdEJ2QyxVQUFPO0FBSmUsSUFBYixFQUtQN0QsT0FMTyxDQUFWOztBQURnQyx5SEFPMUJKLE1BUDBCLEVBT2xCSSxPQVBrQjs7QUFTaEMsU0FBS0osTUFBTCxDQUFZc0MsRUFBWiwrQ0FFQyxNQUFLa1YsTUFBTCxDQUFZaFUsSUFBWixPQUZEO0FBVGdDO0FBYWhDOztBQUdEOzs7Ozs7OzhCQUdZO0FBQ1gsUUFBRyxLQUFLb0ssSUFBTCxDQUFVckgsUUFBVixLQUF1QixNQUExQixFQUFrQztBQUNsQyxTQUFLcUgsSUFBTCxDQUFVckgsUUFBVixHQUFxQixNQUFyQjtBQUNBLFNBQUtuSixPQUFMLENBQWE2SSxJQUFiLENBQWtCLE9BQWxCLEVBQTJCLEtBQUs3RixPQUFMLENBQWE0RyxLQUF4QztBQUNBOztBQUVEOzs7Ozs7K0JBR2E7QUFDWixRQUFHLEtBQUs0RyxJQUFMLENBQVVySCxRQUFWLEtBQXVCLE9BQTFCLEVBQW1DO0FBQ25DLFNBQUtxSCxJQUFMLENBQVVySCxRQUFWLEdBQXFCLE9BQXJCO0FBQ0EsU0FBS25KLE9BQUwsQ0FBYTZJLElBQWIsQ0FBa0IsT0FBbEIsRUFBMkIsb0JBQTNCO0FBQ0E7Ozs0QkFFUTtBQUNSLFFBQUksS0FBS2pHLE1BQUwsQ0FBWStLLEtBQWhCLEVBQXVCO0FBQ3RCLFVBQUswTSxVQUFMO0FBQ0EsS0FGRCxNQUVPLElBQUcsS0FBS3pYLE1BQUwsQ0FBWWtELE1BQWYsRUFBdUI7QUFDN0IsVUFBS3dVLFFBQUw7QUFDQSxLQUZNLE1BRUE7QUFDTixVQUFLQyxTQUFMO0FBQ0E7QUFDRDs7O2dDQUVZO0FBQ1osUUFBRyxLQUFLL0osSUFBTCxDQUFVckgsUUFBVixLQUF1QixTQUExQixFQUFxQztBQUNyQyxRQUFHLEtBQUt2RyxNQUFMLENBQVkyQyxRQUFaLEtBQXlCaVYsUUFBNUIsRUFBc0M7QUFDckMsVUFBS0MsT0FBTCxHQUFlLElBQWY7QUFDQSxVQUFLakssSUFBTCxDQUFVckgsUUFBVixHQUFxQixTQUFyQjtBQUNBLFVBQUtuSixPQUFMLENBQWE2SSxJQUFiLENBQWtCLE9BQWxCLEVBQTJCLGtCQUEzQjtBQUNBO0FBQ0Q7OztrQ0FFYztBQUNkLFFBQUcsQ0FBQyxLQUFLNFIsT0FBVCxFQUFrQjtBQUNqQjtBQUNBO0FBQ0QsU0FBS0EsT0FBTCxHQUFlLEtBQWY7O0FBRUEsUUFBRyxLQUFLN1gsTUFBTCxDQUFZQyxLQUFaLENBQWtCaUQsTUFBckIsRUFBNkI7QUFDNUIsVUFBS3dVLFFBQUw7QUFDQSxLQUZELE1BRU87QUFDTixVQUFLQyxTQUFMO0FBQ0E7QUFDRDs7QUFFRDs7Ozs7OzJCQUdRNVUsQyxFQUFHO0FBQ1YsU0FBSy9DLE1BQUwsQ0FBWUMsS0FBWixDQUFrQkMsVUFBbEI7QUFDQTs7Ozs7O0FBR0YscUJBQVVxTCxpQkFBVixDQUE0QixhQUE1QixFQUEyQ2dNLFdBQTNDO0FBQ0EsbUJBQVFwYSxlQUFSLENBQXdCLE1BQXhCLEVBQWdDb2EsV0FBaEM7bUJBQ2VBLFc7Ozs7OztBQzNGZjtBQUNBOzs7Ozs7Ozs7Ozs7QUFJQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0FBR0E7Ozs7O0tBS01PLGE7OztBQUVMLHlCQUFhOVgsTUFBYixFQUFpQztBQUFBLE9BQVpJLE9BQVksdUVBQUosRUFBSTs7QUFBQTs7QUFDaENBLGFBQVUsaUJBQUUrSCxNQUFGLENBQVMsRUFBVCxFQUFhO0FBQ3RCNUIsY0FBVyxhQURXO0FBRXRCQyxlQUFZLGdCQUZVO0FBR3RCdkMsVUFBTztBQUhlLElBQWIsRUFJUDdELE9BSk8sQ0FBVjs7QUFEZ0MsNkhBTTFCSixNQU4wQixFQU1sQkksT0FOa0I7O0FBUWhDLE9BQUcsQ0FBQ0osT0FBT0MsS0FBUCxDQUFhOFgsb0JBQWQsNkJBQUgsRUFBMkQ7QUFDMUQsVUFBSzNhLE9BQUwsQ0FBYTZOLElBQWI7QUFDQTtBQUNBOztBQUVELFNBQUtqTCxNQUFMLENBQVlzQyxFQUFaLENBQWUsY0FBZixFQUErQixVQUFDUyxDQUFELEVBQUloQixJQUFKLEVBQWE7QUFDM0MsUUFBTTlCLFFBQVEsTUFBS0QsTUFBTCxDQUFZQyxLQUExQjtBQUNBLFVBQUswSCxLQUFMLEdBQWExSCxNQUFNNUIsS0FBTixHQUFjLENBQWQsR0FBa0I0QixNQUFNUixNQUFyQztBQUNBLElBSEQ7QUFiZ0M7QUFpQmhDOzs7O21DQUVlO0FBQUE7O0FBQ2Y7QUFDQSxRQUFJdVksT0FBTyxLQUFYO0FBQ0EsUUFBTS9YLFFBQVEsS0FBS0QsTUFBTCxDQUFZQyxLQUExQjs7QUFFQSxTQUFLZ1ksTUFBTCxHQUFjLHNCQUFFLFFBQUYsRUFBWTVhLFFBQVosQ0FBcUIsZUFBckIsQ0FBZDs7QUFFQSxTQUFLc0wsTUFBTCxHQUFjLHNCQUFFLFFBQUYsRUFBWXRMLFFBQVosQ0FBcUIsZUFBckIsQ0FBZDs7QUFFQSxTQUFLNmEsSUFBTCxHQUFZLHNCQUFFLFFBQUYsRUFDVjdhLFFBRFUsQ0FDRCxhQURDLEVBRVZpSixNQUZVLENBRUgsS0FBS3FDLE1BRkYsRUFHVnJDLE1BSFUsQ0FHSCxLQUFLMlIsTUFIRixFQUlWM1YsRUFKVSxDQUlQLE9BSk8sRUFJRSxVQUFDUyxDQUFELEVBQU87QUFDbkIsU0FBSWlWLElBQUosRUFBVTtBQUNWLFNBQUlHLElBQUksT0FBS0MsV0FBTCxDQUFpQnJWLEVBQUUwTSxLQUFuQixDQUFSO0FBQ0EsU0FBSTBJLEtBQUssQ0FBTCxJQUFVQSxLQUFLLENBQW5CLEVBQXNCO0FBQ3JCLFVBQUdsWSxNQUFNNUIsS0FBVCxFQUFnQjtBQUNmNEIsYUFBTTVCLEtBQU4sR0FBYyxLQUFkO0FBQ0E7QUFDRDRCLFlBQU1SLE1BQU4sR0FBZSxJQUFJMFksQ0FBbkI7QUFDQTtBQUNELEtBYlUsQ0FBWjs7QUFlQSxTQUFLRSxlQUFMLENBQ0VoYixRQURGLENBQ1csZUFEWCxFQUVFaUosTUFGRixDQUVTLEtBQUs0UixJQUZkOztBQUlBLFNBQUt0SyxJQUFMLENBQVV4USxPQUFWLENBQWtCNkksSUFBbEIsQ0FBdUIsT0FBdkIsRUFBZ0MsZ0JBQWhDOztBQUVBLFNBQUtnUyxNQUFMLENBQVkzVixFQUFaLENBQWUsV0FBZixFQUE0QixVQUFDUyxDQUFELEVBQU87QUFDbEMsU0FBSUEsRUFBRStGLEtBQUYsS0FBWSxDQUFoQixFQUFtQjtBQUNuQmtQLFlBQU8sSUFBUDtBQUNBLEtBSEQ7O0FBS0EsMEJBQUVsVSxRQUFGLEVBQVl4QixFQUFaLENBQWU7QUFDZGdXLGdCQUFZLG1CQUFDdlYsQ0FBRCxFQUFPO0FBQ2xCLFVBQUksQ0FBQ2lWLElBQUwsRUFBVztBQUNYLFVBQUlHLElBQUksT0FBS0MsV0FBTCxDQUFpQnJWLEVBQUUwTSxLQUFuQixDQUFSO0FBQ0EsVUFBSTBJLEtBQUssQ0FBTCxJQUFVQSxLQUFLLENBQW5CLEVBQXNCO0FBQ3JCLFdBQUdsWSxNQUFNNUIsS0FBVCxFQUFnQjtBQUNmNEIsY0FBTTVCLEtBQU4sR0FBYyxLQUFkO0FBQ0E7QUFDRDRCLGFBQU1SLE1BQU4sR0FBZSxJQUFJMFksQ0FBbkI7QUFDQTtBQUNELE1BVmE7O0FBWWRJLGNBQVUsaUJBQUN4VixDQUFELEVBQU87QUFDaEJpVixhQUFPLEtBQVA7QUFDQTtBQWRhLEtBQWY7QUFnQkEsV0FBTyxLQUFLNWEsT0FBWjtBQUNBOzs7aUNBV2M7QUFBQSxRQUNONkMsS0FETSxHQUNJLEtBQUtELE1BRFQsQ0FDTkMsS0FETTs7O0FBR2RBLFVBQU01QixLQUFOLEdBQWMsQ0FBQzRCLE1BQU01QixLQUFyQjtBQUNBOzs7K0JBRVltYSxDLEVBQUc7QUFDZixXQUFPLENBQUNBLElBQUksS0FBS04sSUFBTCxDQUFVN0wsTUFBVixHQUFtQkMsR0FBeEIsSUFBK0IsS0FBSzRMLElBQUwsQ0FBVS9aLE1BQVYsRUFBdEM7QUFDQTs7OzJCQUVRNEUsQyxFQUFHO0FBQ1gsMEhBQWNBLENBQWQ7QUFDQTtBQUNBLFFBQUlBLEVBQUV5UyxNQUFGLEtBQWEsS0FBSzVILElBQUwsQ0FBVXhRLE9BQVYsQ0FBa0IsQ0FBbEIsQ0FBakIsRUFBc0M7QUFDckMsVUFBS3FiLFdBQUw7QUFDQTtBQUVEOzs7b0NBRWdCO0FBQ2hCLFFBQUcsQ0FBQyxLQUFLelksTUFBTCxDQUFZQyxLQUFaLENBQWtCOFgsb0JBQXRCLEVBQTRDO0FBQzNDLFVBQUszYSxPQUFMLENBQWE2TixJQUFiO0FBQ0E7QUFDQTtBQUNELFNBQUt0RCxLQUFMLEdBQWEsS0FBSzNILE1BQUwsQ0FBWUMsS0FBWixDQUFrQnlZLGFBQS9CO0FBQ0E7OztxQkFqQ1UvUSxLLEVBQU87QUFDakIsU0FBS2lHLElBQUwsQ0FBVXJILFFBQVYsR0FBcUIsS0FBS3ZHLE1BQUwsQ0FBWVcsY0FBWixDQUEyQmdILEtBQTNCLENBQXJCOztBQUVBLFFBQUl3USxJQUFJcEksS0FBSzRJLEtBQUwsQ0FBV2hSLFFBQVEsR0FBbkIsRUFBd0JtTyxRQUF4QixLQUFxQyxHQUE3QztBQUNBLFNBQUtuTixNQUFMLENBQVl6QyxHQUFaLENBQWdCLFFBQWhCLEVBQTBCaVMsQ0FBMUI7QUFDQSxTQUFLRixNQUFMLENBQVkvUixHQUFaLENBQWdCLFFBQWhCLEVBQTBCaVMsQ0FBMUI7QUFDQTs7Ozs7O0FBK0JGLHFCQUFVNU0saUJBQVYsQ0FBNEIsZUFBNUIsRUFBNkN1TSxhQUE3QztBQUNBLG1CQUFRM2EsZUFBUixDQUF3QixRQUF4QixFQUFrQzJhLGFBQWxDO21CQUNlQSxhOzs7Ozs7QUNwSWY7QUFDQTs7Ozs7Ozs7Ozs7O0FBS0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQTs7Ozs7OztLQU9NYyxlOzs7QUFFTCwyQkFBWTVZLE1BQVosRUFBZ0M7QUFBQSxPQUFaSSxPQUFZLHVFQUFKLEVBQUk7O0FBQUE7O0FBQy9CQSxhQUFVLGlCQUFFK0gsTUFBRixDQUFTLEVBQVQsRUFBYTtBQUN0QjJGLFNBQU07QUFEZ0IsSUFBYixFQUVQMU4sT0FGTyxDQUFWOztBQUQrQixpSUFJekJKLE1BSnlCLEVBSWpCSSxPQUppQjs7QUFLL0IsU0FBS3lZLE9BQUwsR0FBZSxLQUFmO0FBQ0EsU0FBS3piLE9BQUwsQ0FBYWtGLEVBQWIsQ0FBZ0IsWUFBaEIsRUFBOEIsTUFBS3dXLElBQUwsQ0FBVXRWLElBQVYsT0FBOUI7QUFDQSxTQUFLcEcsT0FBTCxDQUFha0YsRUFBYixDQUFnQixZQUFoQixFQUE4QixNQUFLeVcsS0FBTCxDQUFXdlYsSUFBWCxPQUE5QjtBQUNBLDJCQUFjO0FBQ2IsVUFBS3BHLE9BQUwsQ0FBYWtGLEVBQWIsQ0FBZ0IsS0FBaEIsRUFBdUIsTUFBSzBXLE1BQUwsQ0FBWXhWLElBQVosT0FBdkI7QUFDQSwwQkFBRU0sUUFBRixFQUFZeEIsRUFBWixDQUFlLDJCQUFmLEVBQTRDLE1BQUsyVyxnQkFBTCxDQUFzQnpWLElBQXRCLE9BQTVDO0FBQ0E7QUFYOEI7QUFZL0I7O0FBRUQ7Ozs7Ozs7bUNBR2dCO0FBQ2Y7QUFDQSxTQUFLNlUsZUFBTCxHQUF1QixzQkFBRSxTQUFGLEVBQWFoYixRQUFiLENBQXNCLDJCQUF0QixDQUF2QjtBQUNBLFNBQUtELE9BQUwsQ0FBYWtKLE1BQWIsQ0FBb0IsS0FBSytSLGVBQXpCO0FBQ0E7O0FBRUQ7Ozs7OzttQ0FHZ0I7QUFDZjtBQUNBOztBQUVEOzs7Ozs7MkJBR1F0VixDLEVBQUc7QUFDVixRQUFHLHNCQUFFQSxFQUFFeVMsTUFBSixFQUFZQyxPQUFaLENBQW9CLEtBQUs0QyxlQUF6QixFQUEwQzFTLE1BQTFDLEdBQW1ELENBQXRELEVBQXlEO0FBQ3hEO0FBQ0E7O0FBRUQsOEhBQWM1QyxDQUFkO0FBQ0E7Ozs0QkFFUTtBQUNSLFFBQUcsS0FBSzRKLE9BQVIsRUFBaUI7QUFDakIsUUFBRyxLQUFLa00sT0FBUixFQUFpQjtBQUNoQixVQUFLRSxLQUFMO0FBQ0EsS0FGRCxNQUVPO0FBQ04sVUFBS0QsSUFBTDtBQUNBO0FBQ0Q7OzswQkFFTTtBQUNOLFFBQUcsS0FBS25NLE9BQVIsRUFBaUI7QUFDakIsU0FBS2tNLE9BQUwsR0FBZSxJQUFmO0FBQ0EsU0FBS1IsZUFBTCxDQUFxQi9YLElBQXJCO0FBQ0E7OzsyQkFFTztBQUNQLFFBQUcsS0FBS3FNLE9BQVIsRUFBaUI7QUFDakIsU0FBS2tNLE9BQUwsR0FBZSxLQUFmO0FBQ0EsU0FBS1IsZUFBTCxDQUFxQnBOLElBQXJCO0FBQ0E7OztvQ0FFZ0JsSSxDLEVBQUc7QUFDbkIsUUFDQyxFQUFFLHNCQUFFQSxFQUFFeVMsTUFBSixFQUFZQyxPQUFaLENBQW9CLEtBQUtyWSxPQUF6QixFQUFrQ3VJLE1BQWxDLEdBQTJDLENBQTdDLEtBQ0EsRUFBRSxzQkFBRTVDLEVBQUV5UyxNQUFKLEVBQVlDLE9BQVosQ0FBb0IsS0FBSzRDLGVBQXpCLEVBQTBDMVMsTUFBMUMsR0FBbUQsQ0FBckQsQ0FGRCxFQUdFO0FBQ0QsU0FBRyxLQUFLa1QsT0FBUixFQUFnQjtBQUNmLFdBQUtFLEtBQUw7QUFDQTtBQUNEO0FBQ0Q7Ozs7OztBQUlGLHFCQUFVeE4saUJBQVYsQ0FBNEIsaUJBQTVCLEVBQStDcU4sZUFBL0M7QUFDQSxtQkFBUXpiLGVBQVIsQ0FBd0IsVUFBeEIsRUFBb0N5YixlQUFwQzttQkFDZUEsZTs7Ozs7O0FDakdmO0FBQ0E7Ozs7Ozs7Ozs7OztBQUlBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0FBRUE7Ozs7Ozs7O0tBUU1NLGU7OztBQUVMLDJCQUFhbFosTUFBYixFQUFpQztBQUFBLE9BQVpJLE9BQVksdUVBQUosRUFBSTs7QUFBQTs7QUFDaENBLGFBQVUsaUJBQUUrSCxNQUFGLENBQVMsRUFBVCxFQUFhO0FBQ3RCbEUsVUFBTyxVQURlO0FBRXRCdUMsZUFBWSxxQ0FGVTtBQUd0QnNILFNBQU07QUFIZ0IsSUFBYixFQUlQMU4sT0FKTyxDQUFWOztBQURnQyxpSUFNMUJKLE1BTjBCLEVBTWxCSSxPQU5rQjs7QUFTaEMsU0FBSzZYLE1BQUwsQ0FBWTdhLE9BQVosQ0FBb0JrRixFQUFwQixDQUF1QixvQkFBdkIsRUFBNkMsTUFBSzZXLGtCQUFMLENBQXdCM1YsSUFBeEIsT0FBN0M7O0FBRUEsU0FBS3lVLE1BQUwsQ0FBWTdhLE9BQVosQ0FBb0JrRixFQUFwQixDQUF1QixvQkFBdkIsRUFBNkMsTUFBSzhXLGtCQUFMLENBQXdCNVYsSUFBeEIsT0FBN0M7O0FBRUEsU0FBS3hELE1BQUwsQ0FBWXNDLEVBQVosQ0FBZSxjQUFmLEVBQStCLE1BQUsrVyxjQUFMLENBQW9CN1YsSUFBcEIsT0FBL0I7O0FBRUEsU0FBS3hELE1BQUwsQ0FBWXNDLEVBQVosQ0FBZSxZQUFmLEVBQTZCLE1BQUtnWCxhQUFMLENBQW1COVYsSUFBbkIsT0FBN0I7O0FBRUE7O0FBRUEsU0FBS3hELE1BQUwsQ0FBWXNDLEVBQVosQ0FBZSxnQkFBZixFQUFpQyxNQUFLaVgsaUJBQUwsQ0FBdUIvVixJQUF2QixPQUFqQztBQW5CZ0M7QUFvQmhDOzs7O3NDQUVrQlQsQyxFQUFHO0FBQ3JCLFNBQUt5VyxZQUFMLENBQWtCcGMsT0FBbEIsQ0FBMEI2TixJQUExQjtBQUNBOzs7c0NBRWtCbEksQyxFQUFHaEIsSSxFQUFNO0FBQzNCLFFBQU0wWCxJQUFJMVgsS0FBSzBYLENBQWY7QUFDQSxRQUFNdEIsSUFBSSxLQUFLQyxXQUFMLENBQWlCcUIsQ0FBakIsQ0FBVjtBQUNBLFFBQU14WixRQUFRLEtBQUtELE1BQUwsQ0FBWUMsS0FBMUI7QUFDQSxRQUFJa1ksSUFBSSxDQUFKLElBQVNBLElBQUksQ0FBakIsRUFBb0I7QUFDbkIsVUFBS0YsTUFBTCxDQUFZeUIsVUFBWixDQUNFcFosSUFERixHQUVFeUcsSUFGRixDQUVPLDBCQUFjOUcsTUFBTTBDLFFBQU4sR0FBaUJ3VixDQUEvQixDQUZQO0FBR0E7QUFDQTtBQUNEOzs7aUNBRWFwVixDLEVBQUdoQixJLEVBQU07QUFDdEIsUUFBTVksV0FBVyxLQUFLM0MsTUFBTCxDQUFZQyxLQUFaLENBQWtCMEMsUUFBbkM7QUFDQSxRQUFJeEMsY0FBYyxLQUFLSCxNQUFMLENBQVlHLFdBQTlCO0FBQ0EsUUFBRzRCLFFBQVFBLEtBQUs1QixXQUFMLEtBQXFCMkUsU0FBaEMsRUFBMkM7QUFDMUMzRSxtQkFBYzRCLEtBQUs1QixXQUFuQjtBQUNBO0FBQ0QsUUFBSXlSLFVBQVV6UixjQUFjd0MsUUFBNUI7O0FBRUEsUUFBR2dYLE1BQU1oWCxRQUFOLEtBQW1CeEMsZ0JBQWdCLENBQXRDLEVBQXlDeVIsVUFBVSxDQUFWOztBQUV6QyxTQUFLZ0ksSUFBTCxDQUFVLEVBQUVoSSxnQkFBRixFQUFXelIsd0JBQVgsRUFBVjtBQUNBOztBQUVEOzs7Ozs7bUNBR2dCO0FBQUE7O0FBQ2Y7QUFDQSxRQUFJRixRQUFRLEtBQUtELE1BQUwsQ0FBWUMsS0FBeEI7O0FBRUEsU0FBSytYLElBQUwsR0FBWSxLQUFaOztBQUVBO0FBQ0EsU0FBSzdYLFdBQUwsR0FBbUIsMEJBQWdCLEtBQUtILE1BQXJCLEVBQTZCLEVBQUV3RyxXQUFZLGNBQWQsRUFBN0IsQ0FBbkI7QUFDQSxTQUFLckcsV0FBTCxDQUFpQnFULElBQWpCLEdBQXdCLE9BQXhCO0FBQ0EsU0FBS3FHLFNBQUwsR0FBaUIsMEJBQWdCLEtBQUs3WixNQUFyQixFQUE2QixFQUFDd0csV0FBWSxZQUFiLEVBQTdCLENBQWpCOztBQUVBOztBQUVBLFNBQUt5UixNQUFMLEdBQWMscUJBQVcsS0FBS2pZLE1BQWhCLEVBQXdCO0FBQ3JDZ1ksV0FBTztBQUQ4QixLQUF4QixDQUFkOztBQUlBLFNBQUt3QixZQUFMLEdBQW9CLHFCQUFXLEtBQUt4WixNQUFoQixFQUF3QjtBQUMzQ3dHLGdCQUFZO0FBRCtCLEtBQXhCLENBQXBCO0FBR0EsU0FBS2dULFlBQUwsQ0FBa0JwYyxPQUFsQixDQUEwQjZOLElBQTFCOztBQUdBO0FBQ0EsU0FBSzZPLFlBQUwsR0FBb0Isc0JBQUUsU0FBRixFQUFhemMsUUFBYixDQUFzQixhQUF0QixDQUFwQjs7QUFHQTtBQUNBLFNBQUswYyxjQUFMLEdBQXNCLDZCQUFtQixLQUFLL1osTUFBeEIsRUFBZ0M1QyxPQUF0RDs7QUFFQSxTQUFLOGEsSUFBTCxHQUFZLHNCQUFFLFNBQUYsQ0FBWjtBQUNBLFNBQUsxSyxhQUFMLENBQW1CLEtBQUswSyxJQUF4Qjs7QUFFQSxTQUFLQSxJQUFMLENBQ0U3YSxRQURGLENBQ1csVUFEWCxFQUVFaUosTUFGRixDQUVTLEtBQUsyUixNQUFMLENBQVk3YSxPQUZyQixFQUdFa0osTUFIRixDQUdTLEtBQUtrVCxZQUFMLENBQWtCcGMsT0FIM0IsRUFJRWtKLE1BSkYsQ0FJUyxLQUFLd1QsWUFKZCxFQUtFeFQsTUFMRixDQUtTLEtBQUt5VCxjQUxkLEVBTUV6WCxFQU5GLENBTUs7QUFDSGdXLGdCQUFZLG1CQUFDdlYsQ0FBRCxFQUFPO0FBQ2xCLFVBQUksT0FBS2tWLE1BQUwsQ0FBWUQsSUFBaEIsRUFBc0I7O0FBRXRCLFVBQUlHLElBQUksT0FBS0MsV0FBTCxDQUFpQnJWLEVBQUV5TSxLQUFuQixDQUFSO0FBQ0EsVUFBSTJJLElBQUksQ0FBSixJQUFTQSxJQUFJLENBQWpCLEVBQW9CO0FBQ25CLGNBQUtxQixZQUFMLENBQWtCcGMsT0FBbEIsQ0FDRWtELElBREYsR0FFRTRGLEdBRkYsQ0FFTSxNQUZOLEVBRWNpUyxJQUFJLEdBQUosR0FBVSxHQUZ4QjtBQUdBLGNBQUtxQixZQUFMLENBQ0VFLFVBREYsQ0FFRXBaLElBRkYsR0FHRXlHLElBSEYsQ0FHTywwQkFBYzlHLE1BQU0wQyxRQUFOLEdBQWlCd1YsQ0FBL0IsQ0FIUDtBQUlBLE9BUkQsTUFRTztBQUNOLGNBQUtxQixZQUFMLENBQWtCcGMsT0FBbEIsQ0FBMEI2TixJQUExQjtBQUNBO0FBQ0QsTUFoQkU7O0FBa0JIK08saUJBQWEsb0JBQUNqWCxDQUFELEVBQU87QUFDbkIsVUFBSSxPQUFLaVYsSUFBVCxFQUFlO0FBQ2YsYUFBS3dCLFlBQUwsQ0FBa0JwYyxPQUFsQixDQUEwQjZOLElBQTFCO0FBQ0EsTUFyQkU7O0FBdUJIZ1AsZ0JBQVksbUJBQUNsWCxDQUFELEVBQU8sQ0FDbEIsQ0F4QkU7O0FBMEJIMEssWUFBUSxLQUFLeU0sWUFBTCxDQUFrQjFXLElBQWxCLENBQXVCLElBQXZCLENBMUJMO0FBMkJIbUssVUFBTSxLQUFLdU0sWUFBTCxDQUFrQjFXLElBQWxCLENBQXVCLElBQXZCO0FBM0JILEtBTkw7O0FBb0NBLFNBQUtwRyxPQUFMLENBQWFDLFFBQWIsQ0FBc0Isb0JBQXRCLEVBQ0VpSixNQURGLENBQ1Msc0JBQUUsU0FBRixFQUNOakosUUFETSxDQUNHLHVCQURILEVBRU5pSixNQUZNLENBRUMsS0FBS25HLFdBQUwsQ0FBaUIvQyxPQUZsQixFQUdOa0osTUFITSxDQUdDLEtBQUs0UixJQUhOLEVBSU41UixNQUpNLENBSUMsS0FBS3VULFNBQUwsQ0FBZXpjLE9BSmhCLENBRFQ7QUFNQTs7QUFFRDs7Ozs7OzJCQUdRMkYsQyxFQUFHO0FBQ1ZBLE1BQUVpRyxjQUFGO0FBQ0E7OztnQ0FFWWpHLEMsRUFBRztBQUNmLFFBQUksS0FBS2lWLElBQVQsRUFBZTtBQUNmLFFBQU0vWCxRQUFRLEtBQUtELE1BQUwsQ0FBWUMsS0FBMUI7QUFDQSxTQUFLMlosSUFBTCxDQUFVLEVBQUVoSSxTQUFVLEtBQUt3RyxXQUFMLENBQWlCclYsRUFBRXlNLEtBQW5CLENBQVosRUFBVjtBQUNBdlAsVUFBTUUsV0FBTixHQUFxQkYsTUFBTTBDLFFBQU4sR0FBaUIsS0FBS3lWLFdBQUwsQ0FBaUJyVixFQUFFeU0sS0FBbkIsQ0FBdEM7QUFDQTs7O2tDQUVjek0sQyxFQUFHO0FBQ2pCLFFBQU1KLFdBQVcsS0FBSzNDLE1BQUwsQ0FBWUMsS0FBWixDQUFrQjBDLFFBQW5DO0FBQ0EsUUFBR2dYLE1BQU1oWCxRQUFOLENBQUgsRUFBb0I7QUFDbkI7QUFDQTtBQUNELFFBQUksS0FBSzNDLE1BQUwsQ0FBWVEsUUFBaEIsRUFBMEI7QUFDekIsVUFBSzJaLG1CQUFMLENBQXlCLEtBQUtuYSxNQUFMLENBQVlRLFFBQVosQ0FBcUI4SSxLQUE5QztBQUNBO0FBQ0Q7Ozt1Q0FFbUJBLEssRUFBTztBQUMxQixRQUFHLEtBQUs5SSxRQUFMLElBQWlCLElBQWpCLElBQXlCLEtBQUtBLFFBQUwsQ0FBY21GLE1BQWQsS0FBeUIsQ0FBckQsRUFBd0Q7QUFDdkQsVUFBS25GLFFBQUwsR0FBZ0IsS0FBSzRaLG1CQUFMLENBQXlCOVEsS0FBekIsQ0FBaEI7QUFDQSxVQUFLNE8sSUFBTCxDQUFVNVIsTUFBVixDQUFpQixLQUFLOUYsUUFBdEI7QUFDQSxLQUhELE1BR087QUFDTixVQUFLQSxRQUFMLENBQWN1RyxJQUFkLENBQW1CLEtBQUtxVCxtQkFBTCxDQUF5QjlRLEtBQXpCLENBQW5CO0FBQ0E7QUFDRDs7O3VDQUVtQkEsSyxFQUFPO0FBQzFCLFFBQU0zRyxXQUFXLEtBQUszQyxNQUFMLENBQVlDLEtBQVosQ0FBa0IwQyxRQUFuQztBQUNBLFFBQUlsRixTQUFTLHNCQUFFLFNBQUYsRUFBYUosUUFBYixDQUFzQiw0QkFBdEIsQ0FBYjtBQUNBaU0sVUFBTTNMLE9BQU4sQ0FBYyxVQUFDNFgsT0FBRCxFQUFhO0FBQzFCLFNBQU01UCxTQUFVNFAsUUFBUXZQLEdBQVIsR0FBY3VQLFFBQVF4UCxLQUF0QztBQUNBLFNBQU1qSSxPQUFPLHNCQUFFLFNBQUYsRUFDWFQsUUFEVyxDQUNGLDJCQURFLEVBRVg2SSxHQUZXLENBRVA7QUFDSlIsYUFBUUMsU0FBU2hELFFBQVQsR0FBb0IsR0FBcEIsR0FBMEIsR0FEOUI7QUFFSjBYLFlBQU85RSxRQUFReFAsS0FBUixHQUFnQnBELFFBQWhCLEdBQTJCLEdBQTNCLEdBQWlDO0FBRnBDLE1BRk8sQ0FBYjtBQU1BbEYsWUFBTzZJLE1BQVAsQ0FBY3hJLElBQWQ7QUFDQSxLQVREO0FBVUEsV0FBT0wsTUFBUDtBQUNBOzs7K0JBRVlnYyxDLEVBQUc7QUFDZixXQUFPLENBQUNBLElBQUksS0FBS3ZCLElBQUwsQ0FBVTdMLE1BQVYsR0FBbUJnTyxJQUF4QixJQUFnQyxLQUFLbkMsSUFBTCxDQUFVeFMsS0FBVixFQUF2QztBQUNBOztBQUVEOzs7Ozs7OzhCQUlnQztBQUFBLFFBQXhCa00sT0FBd0IsUUFBeEJBLE9BQXdCO0FBQUEsUUFBZnpSLFdBQWUsUUFBZkEsV0FBZTs7QUFDL0IsUUFBR0EsZ0JBQWdCMkUsU0FBbkIsRUFBOEI7QUFDN0IzRSxtQkFBYyxLQUFLSCxNQUFMLENBQVlDLEtBQVosQ0FBa0IwQyxRQUFsQixHQUE2QmlQLE9BQTNDO0FBQ0E7O0FBRUQsUUFBRytILE1BQU14WixXQUFOLENBQUgsRUFBdUI7QUFDdkJ5UixjQUFVQSxVQUFVLEdBQXBCO0FBQ0EsU0FBS3FHLE1BQUwsQ0FBWTdhLE9BQVosQ0FBb0I4SSxHQUFwQixDQUF3QixNQUF4QixFQUFnQzBMLFVBQVUsR0FBMUM7QUFDQSxTQUFLa0ksWUFBTCxDQUFrQjVULEdBQWxCLENBQXNCLE9BQXRCLEVBQStCMEwsVUFBVSxHQUF6QztBQUNBLFNBQUt6UixXQUFMLENBQWlCcVQsSUFBakIsR0FBd0IsMEJBQWNyVCxXQUFkLENBQXhCO0FBQ0E7OztrQ0FFYztBQUNkLFFBQU1GLFFBQVEsS0FBS0QsTUFBTCxDQUFZQyxLQUExQjtBQUNBLFNBQUs0WixTQUFMLENBQWVyRyxJQUFmLEdBQXNCLDBCQUFjLENBQWQsRUFBaUJ6RCxLQUFLeUIsS0FBTCxDQUFXdlIsTUFBTTBDLFFBQU4sR0FBaUIsSUFBNUIsSUFBb0MsQ0FBckQsQ0FBdEI7O0FBRUE7O0FBRUEsU0FBS2tYLFNBQUwsQ0FBZXJHLElBQWYsR0FBc0IsMEJBQWN2VCxNQUFNMEMsUUFBcEIsQ0FBdEI7QUFDQSxTQUFLeEMsV0FBTCxDQUFpQnFULElBQWpCLEdBQXdCLDBCQUFjdlQsTUFBTUUsV0FBTixJQUFxQixDQUFuQyxDQUF4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVEOzs7Ozs7a0NBR2U0QyxDLEVBQUc7QUFDakIsU0FBS3VYLFlBQUw7QUFDQSxRQUFJLEtBQUt0YSxNQUFMLENBQVlRLFFBQWhCLEVBQTBCO0FBQ3pCLFVBQUsyWixtQkFBTCxDQUF5QixLQUFLbmEsTUFBTCxDQUFZUSxRQUFaLENBQXFCOEksS0FBOUM7QUFDQTtBQUNEOzs7c0NBRW1CO0FBQUE7O0FBQ25CVyxrQkFBYyxLQUFLc1EsbUJBQW5CO0FBQ0EsUUFBSXRhLFFBQVEsS0FBS0QsTUFBTCxDQUFZQyxLQUF4QjtBQUNBLFFBQUl1YSxvQkFBb0IsU0FBcEJBLGlCQUFvQixHQUFNO0FBQzdCLFNBQU1DLE1BQU0sQ0FBWjtBQUNBLFNBQU1DLFFBQVEsQ0FBZDtBQUNBLFNBQUlqZCxTQUFTLHNCQUFFLEVBQUYsQ0FBYjtBQUNBd0MsV0FBTTBhLE1BQU4sQ0FBYWhkLE9BQWIsQ0FBcUIsZ0JBQVE7QUFDNUIsVUFBSWlkLFVBQVUsc0JBQUUsU0FBRixFQUFhdmQsUUFBYixDQUFzQixlQUF0QixDQUFkO0FBQ0F1ZCxjQUFRMVUsR0FBUixDQUFZO0FBQ1htVSxhQUFPdmMsS0FBSzRjLEtBQUwsSUFBYyxHQUFkLEdBQW9CLEdBRGhCO0FBRVhoVixjQUFRLENBQUM1SCxLQUFLMmMsR0FBTCxJQUFZM2MsS0FBSzRjLEtBQUwsQ0FBYixJQUE0QixHQUE1QixHQUFrQztBQUYvQixPQUFaO0FBSUFqZCxlQUFTQSxPQUFPb2QsR0FBUCxDQUFXRCxPQUFYLENBQVQ7QUFDQSxNQVBEO0FBUUEsWUFBS0UsUUFBTCxDQUFjL1QsSUFBZCxDQUFtQnRKLE1BQW5CO0FBQ0EsU0FBSXdDLE1BQU0wYSxNQUFOLENBQWFoVixNQUFiLElBQXdCLElBQUkxRixNQUFNOGEsVUFBWCxJQUEwQixJQUFyRCxFQUEyRDtBQUMxRDlRLG9CQUFjLE9BQUtzUSxtQkFBbkI7QUFDQTtBQUNELEtBaEJEO0FBaUJBLFNBQUtBLG1CQUFMLEdBQTJCclEsWUFBWXNRLGlCQUFaLEVBQStCLEdBQS9CLENBQTNCO0FBQ0E7O0FBRUQ7Ozs7Ozt1Q0FHcUI7QUFDcEIsU0FBS0YsWUFBTDtBQUNBLFFBQUksS0FBS3RhLE1BQUwsQ0FBWVEsUUFBaEIsRUFBMEI7QUFDekIsVUFBSzJaLG1CQUFMLENBQXlCLEtBQUtuYSxNQUFMLENBQVlRLFFBQVosQ0FBcUI4SSxLQUE5QztBQUNBO0FBQ0Q7Ozs7OztBQUlGLHFCQUFVaUMsaUJBQVYsQ0FBNEIsaUJBQTVCLEVBQStDMk4sZUFBL0M7QUFDQSxtQkFBUS9iLGVBQVIsQ0FBd0IsVUFBeEIsRUFBb0MrYixlQUFwQzttQkFDZUEsZTs7Ozs7O0FDM1JmO0FBQ0E7Ozs7Ozs7Ozs7OztBQUlBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7O0tBS004QixXOzs7QUFDTCx1QkFBYWhiLE1BQWIsRUFBaUM7QUFBQSxPQUFaSSxPQUFZLHVFQUFKLEVBQUk7O0FBQUE7O0FBQ2hDQSxhQUFVLGlCQUFFK0gsTUFBRixDQUFTLEVBQVQsRUFBYTtBQUN0QjNCLGVBQVksRUFEVTtBQUV0QnNILFNBQU07QUFGZ0IsSUFBYixFQUdQMU4sT0FITyxDQUFWO0FBRGdDLG9IQUsxQkosTUFMMEIsRUFLbEJJLE9BTGtCO0FBTWhDOztBQUVEOzs7Ozs7O21DQUdnQjtBQUNmO0FBQ0E7O0FBRUQ7Ozs7OzttQ0FHZ0I7QUFDZiw2QkFBdUIsS0FBS0EsT0FBTCxDQUFhb0csU0FBcEM7QUFDQTs7QUFHRDs7Ozs7Ozs7cUJBTVVtQixLLEVBQU87QUFDaEIsU0FBS3NULEtBQUwsR0FBYXRULEtBQWI7QUFDQSxTQUFLdkssT0FBTCxDQUFhMkosSUFBYixDQUFrQlksS0FBbEI7QUFDQSxJO3VCQUVXO0FBQ1gsV0FBTyxLQUFLc1QsS0FBWjtBQUNBOzs7Ozs7QUFHRixxQkFBVTFQLGlCQUFWLENBQTRCLGFBQTVCLEVBQTJDeVAsV0FBM0M7QUFDQSxtQkFBUTdkLGVBQVIsQ0FBd0IsTUFBeEIsRUFBZ0M2ZCxXQUFoQzttQkFDZUEsVzs7Ozs7O0FDeERmO0FBQ0E7Ozs7Ozs7Ozs7QUFJQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7OztLQU1NRSxjOzs7QUFFTCwwQkFBWWxiLE1BQVosRUFBb0JJLE9BQXBCLEVBQTZCO0FBQUE7O0FBQUEsK0hBQ3RCSixNQURzQixFQUNkSSxPQURjOztBQUc1QixTQUFLSixNQUFMLENBQVlzQyxFQUFaLENBQWUsVUFBZixFQUEyQixNQUFLa1YsTUFBTCxDQUFZaFUsSUFBWixPQUEzQjtBQUNBLFNBQUt4RCxNQUFMLENBQVlzQyxFQUFaLENBQWUsUUFBZixFQUF5QixNQUFLa1YsTUFBTCxDQUFZaFUsSUFBWixPQUF6QjtBQUNBLFNBQUt4RCxNQUFMLENBQVlzQyxFQUFaLENBQWUsV0FBZixFQUE0QixNQUFLa1YsTUFBTCxDQUFZaFUsSUFBWixPQUE1QjtBQUw0QjtBQU01Qjs7QUFFRDs7Ozs7OzttQ0FHZ0I7QUFDZixTQUFLMlgsS0FBTCxHQUFhLHFCQUFTLEtBQVQsRUFBZ0I7QUFDNUIzVSxnQkFBWTtBQURnQixLQUFoQixDQUFiOztBQUlBLFdBQU8sS0FBS3BKLE9BQUwsR0FBZSxxQkFBUyxLQUFULEVBQWdCO0FBQ3JDb0osZ0JBQVk7QUFEeUIsS0FBaEIsRUFFbkJGLE1BRm1CLENBRVosS0FBSzZVLEtBRk8sQ0FBdEI7QUFHQTs7OzRCQUdRO0FBQ1IsUUFBTUwsV0FBVyxLQUFLOWEsTUFBTCxDQUFZQyxLQUFaLENBQWtCNmEsUUFBbkM7QUFDQSxRQUFNblksV0FBVyxLQUFLM0MsTUFBTCxDQUFZQyxLQUFaLENBQWtCMEMsUUFBbkM7QUFDQSxRQUFHbVksWUFBWSxJQUFmLEVBQXFCOztBQUVyQixRQUFJOVUsTUFBTSxDQUFWO0FBQ0EsUUFBSThVLFNBQVNuVixNQUFULEdBQWtCLENBQXRCLEVBQXlCO0FBQ3hCSyxXQUFNOFUsU0FBUzlVLEdBQVQsQ0FBYThVLFNBQVNuVixNQUFULEdBQWtCLENBQS9CLENBQU47QUFDQTs7QUFFRCxRQUFJRCxRQUFRLENBQVo7QUFDQSxRQUFJL0MsV0FBVyxDQUFmLEVBQWtCO0FBQ2pCK0MsYUFBUSx1QkFBV00sR0FBWCxFQUFnQnJELFFBQWhCLElBQTRCLEdBQTVCLEdBQWtDLEdBQTFDO0FBQ0E7QUFDRCxTQUFLd1ksS0FBTCxDQUFXalYsR0FBWCxDQUFlLEVBQUVSLFlBQUYsRUFBZjtBQUNBOzs7Ozs7QUFFRixxQkFBVTZGLGlCQUFWLENBQTRCLGdCQUE1QixFQUE4QzJQLGNBQTlDO21CQUNlQSxjOzs7Ozs7Ozs7Ozs7OztBQ3hEZjs7OztBQUNBOzs7Ozs7Ozs7Ozs7S0FFTUUsTTs7O0FBQ0wsa0JBQVlwYixNQUFaLEVBQW9CSSxPQUFwQixFQUE2QjtBQUFBOztBQUU1QkEsYUFBVSxpQkFBRStILE1BQUYsQ0FBUyxFQUFULEVBQWE7QUFDdEI2UCxVQUFPLEtBRGU7QUFFdEJ4UixlQUFZO0FBRlUsSUFBYixFQUdQcEcsT0FITyxDQUFWOztBQUY0QiwrR0FPdEJKLE1BUHNCLEVBT2RJLE9BUGM7O0FBUTVCLFNBQUtoRCxPQUFMLENBQWFrRixFQUFiLENBQWdCLFdBQWhCLEVBQTZCLE1BQUsrWSxZQUFMLENBQWtCN1gsSUFBbEIsT0FBN0I7O0FBRUEseUJBQUVNLFFBQUYsRUFBWXhCLEVBQVosQ0FBZTs7QUFFZGdXLGVBQVksbUJBQUN2VixDQUFELEVBQU87QUFDbEIsU0FBSSxDQUFDLE1BQUtpVixJQUFWLEVBQWdCO0FBQ2hCLFdBQUs1YSxPQUFMLENBQWE0RSxPQUFiLENBQXFCLG9CQUFyQixFQUEyQyxFQUFFeVgsR0FBSTFXLEVBQUV5TSxLQUFSLEVBQTNDO0FBQ0EsS0FMYTs7QUFPZCtJLGFBQVUsaUJBQUN4VixDQUFELEVBQU87QUFDaEIsU0FBSSxDQUFDLE1BQUtpVixJQUFWLEVBQWdCO0FBQ2hCLFdBQUtBLElBQUwsR0FBWSxLQUFaO0FBQ0EsV0FBSzBCLFVBQUwsQ0FBZ0J6TyxJQUFoQjtBQUNBLFdBQUs3TixPQUFMLENBQWE0RSxPQUFiLENBQXFCLGtCQUFyQixFQUF5QyxFQUFFeVgsR0FBSTFXLEVBQUV5TSxLQUFSLEVBQXpDO0FBQ0E7QUFaYSxJQUFmO0FBVjRCO0FBd0I1Qjs7OztnQ0FXWXpNLEMsRUFBRztBQUNmLFFBQUlBLEVBQUUrRixLQUFGLEtBQVksQ0FBaEIsRUFBbUI7QUFDbkIvRixNQUFFaUcsY0FBRjtBQUNBLFFBQUcsS0FBSzVJLE9BQUwsQ0FBYTRYLElBQWhCLEVBQXNCO0FBQ3JCLFVBQUtBLElBQUwsR0FBWSxJQUFaO0FBQ0E7QUFDRCxTQUFLNWEsT0FBTCxDQUFhNEUsT0FBYixDQUFxQixvQkFBckI7QUFDQTs7O21DQUVlO0FBQ2Y7QUFDQSxTQUFLMFgsVUFBTCxHQUFrQixzQkFBRSxTQUFGLEVBQ2hCcmMsUUFEZ0IsQ0FDUCxNQURPLEVBRWhCNE4sSUFGZ0IsRUFBbEI7O0FBSUEsV0FBTyxLQUFLN04sT0FBTCxHQUFlLHNCQUFFLFNBQUYsRUFDcEJDLFFBRG9CLGtCQUNJLEtBQUsrQyxPQUFMLENBQWFvRyxTQURqQixFQUVwQkYsTUFGb0IsQ0FFYixLQUFLb1QsVUFGUSxDQUF0QjtBQUlBOzs7cUJBNUJRL1IsSyxFQUFPO0FBQ2YsU0FBSzJULEtBQUwsR0FBYTNULEtBQWI7QUFDQSxTQUFLdkssT0FBTCxDQUFhZ08sV0FBYixDQUF5QixtQkFBekIsRUFBOEN6RCxLQUE5QztBQUNBLEk7dUJBRVU7QUFDVixXQUFPLEtBQUsyVCxLQUFaO0FBQ0E7Ozs7OztBQXdCRixxQkFBVS9QLGlCQUFWLENBQTRCLFFBQTVCLEVBQXNDNlAsTUFBdEM7bUJBQ2VBLE07Ozs7OztBQzlEZjtBQUNBOzs7Ozs7Ozs7Ozs7QUFJQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7Ozs7S0FPTUcsYzs7O0FBQ0wsMEJBQWF2YixNQUFiLEVBQWlDO0FBQUEsT0FBWkksT0FBWSx1RUFBSixFQUFJOztBQUFBOztBQUNoQ0EsYUFBVSxpQkFBRStILE1BQUYsQ0FBUyxFQUFULEVBQWE7QUFDdEI1QixjQUFXLFNBRFc7QUFFdEJDLGVBQVksU0FGVTtBQUd0QnZDLFVBQU8sU0FIZTtBQUl0QitDLFdBQVEsd0JBSmM7QUFLdEIyRixhQUFVO0FBTFksSUFBYixFQU1Qdk0sT0FOTyxDQUFWOztBQURnQywrSEFRMUJKLE1BUjBCLEVBUWxCSSxPQVJrQjs7QUFVaEMsU0FBS0osTUFBTCxDQUFZc0MsRUFBWixDQUFlLGNBQWYsRUFBK0IsTUFBS2taLGVBQUwsQ0FBcUJoWSxJQUFyQixPQUEvQjtBQUNBLFNBQUt4RCxNQUFMLENBQVlzQyxFQUFaLENBQWUsZ0JBQWYsRUFBaUMsTUFBS21aLGdCQUFMLENBQXNCalksSUFBdEIsT0FBakM7QUFYZ0M7QUFZaEM7Ozs7NkJBRVNULEMsRUFBR2hCLEksRUFBTTtBQUNsQiw4SEFBZ0JnQixDQUFoQjtBQUNBLFNBQUsvQyxNQUFMLENBQVkwYixjQUFaLENBQTJCM1osS0FBSzRaLE9BQWhDO0FBQ0E7OztvQ0FFZ0I1WSxDLEVBQUdoQixJLEVBQU07QUFBQSxRQUNqQm9VLFNBRGlCLEdBQ0hwVSxJQURHLENBQ2pCb1UsU0FEaUI7O0FBRXpCLFFBQUcsS0FBS3dGLE9BQUwsS0FBaUJ4RixTQUFwQixFQUErQjtBQUM5QixVQUFLd0YsT0FBTCxHQUFleEYsU0FBZjtBQUNBO0FBRUQ7OzttQ0FFZXBULEMsRUFBRztBQUNsQixTQUFLM0MsT0FBTCxDQUFhdU0sT0FBYixHQUF1QixLQUFLQSxPQUFMLEdBQWUsS0FBdEM7QUFDQSxTQUFLZ1AsT0FBTCxHQUFlLElBQWY7QUFDQTs7Ozs7O0FBR0YscUJBQVVwUSxpQkFBVixDQUE0QixnQkFBNUIsRUFBOENnUSxjQUE5QztBQUNBLG1CQUFRcGUsZUFBUixDQUF3QixTQUF4QixFQUFtQ29lLGNBQW5DO21CQUNlQSxjOzs7Ozs7QUNyRGY7QUFDQTs7Ozs7Ozs7Ozs7O0FBS0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7OztLQU1NSyxlOzs7QUFFTCwyQkFBWTViLE1BQVosRUFBZ0M7QUFBQSxPQUFaSSxPQUFZLHVFQUFKLEVBQUk7O0FBQUE7O0FBQUEsaUlBQ3pCSixNQUR5QixFQUNqQkksT0FEaUI7O0FBRS9CLFNBQUt1YixPQUFMLEdBQWUsTUFBS3ZiLE9BQUwsQ0FBYXViLE9BQWIsSUFBd0IsS0FBdkM7QUFDQSxTQUFLdmUsT0FBTCxDQUFha0YsRUFBYixDQUFnQixrQkFBaEIsRUFBb0MsTUFBS3VaLFNBQUwsQ0FBZXJZLElBQWYsT0FBcEM7QUFIK0I7QUFJL0I7O0FBR0Q7Ozs7Ozs7Ozs7O0FBd0JBOzs7MkJBR1NULEMsRUFBRztBQUNYLDhIQUFjQSxDQUFkO0FBQ0EsU0FBSzRZLE9BQUwsR0FBZSxDQUFDLEtBQUtBLE9BQXJCO0FBQ0E7O0FBRUQ7Ozs7Ozs7Ozs2QkFNVTVZLEMsRUFBR2hCLEksRUFBTSxDQUVsQjs7QUFHRDs7Ozs7O21DQUdnQjtBQUNmO0FBQ0E7OztxQkEzQ1l3RixHLEVBQUs7QUFDakIsUUFBSSxLQUFLb0YsT0FBVCxFQUFrQjtBQUNqQjtBQUNBO0FBQ0RwRixVQUFNLENBQUMsQ0FBQ0EsR0FBUjtBQUNBLFNBQUt1VSxRQUFMLEdBQWdCdlUsR0FBaEI7QUFDQSxTQUFLbkssT0FBTCxDQUFhZ08sV0FBYixDQUF5QiwyQkFBekIsRUFBc0Q3RCxHQUF0RDtBQUNBLFNBQUtuSyxPQUFMLENBQWE0RSxPQUFiLENBQXFCLGtCQUFyQixFQUF5QyxFQUFFMlosU0FBVXBVLEdBQVosRUFBekM7QUFDQTs7QUFFRDs7Ozs7O3VCQUtlO0FBQ2QsV0FBTyxLQUFLdVUsUUFBWjtBQUNBOzs7Ozs7QUE4QkYscUJBQVV2USxpQkFBVixDQUE0QixpQkFBNUIsRUFBK0NxUSxlQUEvQztBQUNBLG1CQUFRemUsZUFBUixDQUF3QixVQUF4QixFQUFvQ3llLGVBQXBDO21CQUNlQSxlOzs7Ozs7QUM5RWY7QUFDQTs7Ozs7Ozs7Ozs7O0FBSUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7S0FLTUcsaUI7OztBQUNMLDZCQUFhL2IsTUFBYixFQUFpQztBQUFBLE9BQVpJLE9BQVksdUVBQUosRUFBSTs7QUFBQTs7QUFDaENBLGFBQVUsaUJBQUUrSCxNQUFGLENBQVMsRUFBVCxFQUFhO0FBQ3RCNUIsY0FBVyxZQURXO0FBRXRCQyxlQUFZLFlBRlU7QUFHdEJRLFdBQVEscUNBSGM7QUFJdEIvQyxVQUFPO0FBSmUsSUFBYixFQUtQN0QsT0FMTyxDQUFWO0FBRGdDLGdJQU8xQkosTUFQMEIsRUFPbEJJLE9BUGtCO0FBUWhDOztBQUVEOzs7Ozs7OzJCQUdRMkMsQyxFQUFHO0FBQ1Ysa0lBQWNBLENBQWQ7QUFDQSxTQUFLL0MsTUFBTCxDQUFZWSxnQkFBWjtBQUNBOzs7Ozs7QUFHRixxQkFBVTJLLGlCQUFWLENBQTRCLG1CQUE1QixFQUFpRHdRLGlCQUFqRDtBQUNBLG1CQUFRNWUsZUFBUixDQUF3QixZQUF4QixFQUFzQzRlLGlCQUF0QzttQkFDZUEsaUI7Ozs7OztBQ3BDZjtBQUNBOzs7Ozs7Ozs7Ozs7QUFJQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7Ozs7O0tBU01DLFc7OztBQUNMLHVCQUFhaGMsTUFBYixFQUFpQztBQUFBLE9BQVpJLE9BQVksdUVBQUosRUFBSTs7QUFBQTs7QUFDaENBLGFBQVUsaUJBQUUrSCxNQUFGLENBQVMsRUFBVCxFQUFhO0FBQ3RCM0IsZUFBWSxtQkFEVTtBQUV0QnNILFNBQU07QUFGZ0IsSUFBYixFQUdQMU4sT0FITyxDQUFWOztBQURnQyx5SEFLMUJKLE1BTDBCLEVBS2xCSSxPQUxrQjs7QUFPaEMsU0FBS0osTUFBTCxDQUFZc0MsRUFBWixDQUFlLFlBQWYsRUFBNkIsWUFBTTtBQUNsQyxVQUFLa1YsTUFBTDtBQUNBLElBRkQ7QUFQZ0M7QUFVaEM7O0FBRUQ7Ozs7Ozs7bUNBR2dCO0FBQ2Y7QUFDQSxRQUFNdlgsUUFBUSxLQUFLRCxNQUFMLENBQVlDLEtBQTFCOztBQUVBLFNBQUtnYyxXQUFMLEdBQW1CLHNCQUFZLEtBQUtqYyxNQUFqQixFQUF5QjtBQUMzQ3dHLGdCQUFZLFdBRCtCO0FBRTNDdkMsV0FBTyxXQUZvQztBQUczQ3NDLGVBQVcsVUFIZ0M7QUFJM0N1TixpQkFBYSxLQUFLMVQsT0FBTCxDQUFhMFQsVUFKaUI7QUFLM0M5TSxZQUFRLGlDQUxtQztBQU0zQzBHLGNBQVUsaUJBQVMzSyxDQUFULEVBQVk7QUFDckI5QyxZQUFNaWMsWUFBTjtBQUNBO0FBUjBDLEtBQXpCLENBQW5COztBQVdBLFNBQUtDLFNBQUwsR0FBaUIsc0JBQVksS0FBS25jLE1BQWpCLEVBQXlCO0FBQ3pDd0csZ0JBQVksU0FENkI7QUFFekN2QyxXQUFPLFNBRmtDO0FBR3pDc0MsZUFBVyxTQUg4QjtBQUl6Q3VOLGlCQUFhLEtBQUsxVCxPQUFMLENBQWEwVCxVQUplO0FBS3pDOU0sWUFBUSxpQ0FMaUM7QUFNekMwRyxjQUFVLGlCQUFTM0ssQ0FBVCxFQUFZO0FBQ3JCOUMsWUFBTW1jLFlBQU47QUFDQTtBQVJ3QyxLQUF6QixDQUFqQjs7QUFXQSxTQUFLQyxXQUFMLEdBQW1CLDBCQUFnQixLQUFLcmMsTUFBckIsRUFBNkI7QUFDL0N3RyxnQkFBWSxjQURtQztBQUUvQ2tILGNBQVUsaUJBQVMzSyxDQUFULEVBQVk7QUFDckI5QyxZQUFNdkIsSUFBTixHQUFhLEtBQUtzQixNQUFMLENBQVlJLE9BQVosQ0FBb0IxQixJQUFwQixDQUF5QkksT0FBdEM7QUFDQTtBQUo4QyxLQUE3QixDQUFuQjs7QUFPQSxTQUFLMUIsT0FBTCxDQUNFa0osTUFERixDQUNTLEtBQUsyVixXQUFMLENBQWlCN2UsT0FEMUIsRUFFRWtKLE1BRkYsQ0FFUyxLQUFLK1YsV0FBTCxDQUFpQmpmLE9BRjFCLEVBR0VrSixNQUhGLENBR1MsS0FBSzZWLFNBQUwsQ0FBZS9lLE9BSHhCO0FBSUE7O0FBRUQ7Ozs7OzttQ0FHZ0I7QUFDZixXQUFPLEtBQUtnRCxPQUFMLENBQWFvRyxTQUFwQjtBQUNBOztBQUVEOzs7Ozs7b0NBR2lCO0FBQ2hCLFNBQUtnUixNQUFMO0FBQ0E7O0FBRUQ7Ozs7OzsyQkFHUXpVLEMsRUFBRztBQUNWQSxNQUFFaUcsY0FBRjtBQUNBOzs7MEJBRU1yQixLLEVBQU87QUFDYixRQUFNMUgsUUFBUSxLQUFLRCxNQUFMLENBQVlDLEtBQTFCOztBQUVBMEgsWUFBUUEsU0FBUzFILE1BQU12QixJQUF2QjtBQUNBaUosWUFBUTJVLFdBQVczVSxLQUFYLEVBQ040VSxPQURNLENBQ0UsQ0FERixFQUVOekcsUUFGTSxHQUdOMEcsT0FITSxDQUdFLElBSEYsRUFHUSxHQUhSLENBQVI7QUFJQSxTQUFLSCxXQUFMLENBQWlCN0ksSUFBakIsR0FBd0IsTUFBTTdMLEtBQTlCOztBQUVBLFFBQUcsS0FBS2dGLE9BQVIsRUFBaUI7O0FBRWpCLFFBQUcxTSxNQUFNdkIsSUFBTixJQUFjdUIsTUFBTXdjLE9BQXZCLEVBQWdDO0FBQy9CLFVBQUtSLFdBQUwsQ0FBaUJ0UCxPQUFqQixHQUEyQixJQUEzQjtBQUNBLEtBRkQsTUFFTztBQUNOLFVBQUtzUCxXQUFMLENBQWlCdFAsT0FBakIsR0FBMkIsS0FBM0I7QUFDQTs7QUFFRCxRQUFHMU0sTUFBTXZCLElBQU4sSUFBY3VCLE1BQU15YyxPQUF2QixFQUFnQztBQUMvQixVQUFLUCxTQUFMLENBQWV4UCxPQUFmLEdBQXlCLElBQXpCO0FBQ0EsS0FGRCxNQUVPO0FBQ04sVUFBS3dQLFNBQUwsQ0FBZXhQLE9BQWYsR0FBeUIsS0FBekI7QUFDQTtBQUNEOzs7MEJBUU87QUFDUCxRQUFJak8sT0FBTyxpQkFBT2llLEdBQVAsQ0FBVyxNQUFYLEVBQW1CLEtBQUszYyxNQUFMLENBQVlJLE9BQVosQ0FBb0IxQixJQUFwQixDQUF5QkksT0FBNUMsQ0FBWDtBQUNBLFNBQUt3QixJQUFMLENBQVU1QixJQUFWO0FBQ0E7OztxQkFUV2lKLEssRUFBTztBQUNsQixTQUFLdUcsUUFBTCxHQUFnQnZHLEtBQWhCO0FBQ0EsU0FBS3NVLFdBQUwsQ0FBaUJ0UCxPQUFqQixHQUEyQmhGLEtBQTNCO0FBQ0EsU0FBS3dVLFNBQUwsQ0FBZXhQLE9BQWYsR0FBeUJoRixLQUF6QjtBQUNBOzs7Ozs7QUFTRixxQkFBVTRELGlCQUFWLENBQTRCLGFBQTVCLEVBQTJDeVEsV0FBM0M7QUFDQSxtQkFBUTdlLGVBQVIsQ0FBd0IsTUFBeEIsRUFBZ0M2ZSxXQUFoQzttQkFDZUEsVzs7Ozs7O0FDeElmO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBTUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7O0tBTU1ZLGU7OztBQUNMLDJCQUFhNWMsTUFBYixFQUFpQztBQUFBLE9BQVpJLE9BQVksdUVBQUosRUFBSTs7QUFBQTs7QUFDaENBLGFBQVUsaUJBQUUrSCxNQUFGLENBQVMsRUFBVCxFQUFhO0FBQ3RCNUIsY0FBVyxNQURXO0FBRXRCQyxlQUFZLFVBRlU7QUFHdEJ2QyxVQUFPLFVBSGU7QUFJdEIrQyw2R0FBNkJoSCxPQUFPSSxPQUFQLENBQWVyQixRQUFmLENBQXdCSixJQUF4QixDQUE2Qk0sTUFBMUQsMENBSnNCO0FBS3RCME4sYUFBVTtBQUxZLElBQWIsRUFNUHZNLE9BTk8sQ0FBVjs7QUFEZ0MsaUlBUTFCSixNQVIwQixFQVFsQkksT0FSa0I7O0FBVWhDLFNBQUtKLE1BQUwsQ0FBWXNDLEVBQVosQ0FBZSxXQUFmLEVBQTRCO0FBQUEsV0FBTSxNQUFLcUssT0FBTCxHQUFlLEtBQXJCO0FBQUEsSUFBNUI7QUFWZ0M7QUFXaEM7O0FBRUQ7Ozs7Ozs7MkJBR1E1SixDLEVBQUc7QUFDViw4SEFBY0EsQ0FBZDtBQUNBLFNBQUsvQyxNQUFMLENBQVlDLEtBQVosQ0FBa0JFLFdBQWxCLElBQWlDLEtBQUtILE1BQUwsQ0FBWUksT0FBWixDQUFvQnJCLFFBQXBCLENBQTZCSixJQUE3QixDQUFrQ00sTUFBbkU7QUFDQSxTQUFLZSxNQUFMLENBQVlLLFVBQVosQ0FBdUJDLElBQXZCLENBQTRCLE1BQTVCO0FBQ0E7Ozs7OztBQUdGLHFCQUFVaUwsaUJBQVYsQ0FBNEIsaUJBQTVCLEVBQStDcVIsZUFBL0M7QUFDQSxtQkFBUXpmLGVBQVIsQ0FBd0IsVUFBeEIsRUFBb0N5ZixlQUFwQzttQkFDZUEsZTs7Ozs7O0FDM0NmO0FBQ0E7Ozs7Ozs7Ozs7QUFJQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBR0E7Ozs7O0tBS01DLGE7OztBQUNMO0FBQ0EseUJBQWE3YyxNQUFiLEVBQWlDO0FBQUEsT0FBWkksT0FBWSx1RUFBSixFQUFJOztBQUFBOztBQUNoQ0EsYUFBVSxpQkFBRStILE1BQUYsQ0FBUyxFQUFULEVBQWE7QUFDdEJsRSxVQUFPLFFBRGU7QUFFdEJzQyxjQUFXLFVBRlc7QUFHdEJTLFdBQVEsVUFIYztBQUl0QlIsZUFBWSxnQkFKVTtBQUt0Qm1HLGFBQVU7QUFMWSxJQUFiLEVBTVB2TSxPQU5PLENBQVY7O0FBRGdDLDZIQVExQkosTUFSMEIsRUFRbEJJLE9BUmtCOztBQVVoQyxTQUFLSixNQUFMLENBQVlzQyxFQUFaLENBQWUsU0FBZixFQUEwQixNQUFLa1YsTUFBTCxDQUFZaFUsSUFBWixPQUExQjtBQUNBLFNBQUt4RCxNQUFMLENBQVlzQyxFQUFaLENBQWUsZUFBZixFQUFnQyxNQUFLa1YsTUFBTCxDQUFZaFUsSUFBWixPQUFoQztBQVhnQztBQVloQzs7OzsrQkFFV1QsQyxFQUFHO0FBQ2RBLE1BQUVpRyxjQUFGOztBQUVBLFFBQU1sTCxPQUFPLHNCQUFFaUYsRUFBRXlTLE1BQUosQ0FBYjtBQUNBLFFBQU12VixRQUFRLEtBQUtELE1BQUwsQ0FBWUMsS0FBMUI7QUFDQUEsVUFBTTZjLGVBQU4sR0FBd0JoZixLQUFLaUUsSUFBTCxDQUFVLE1BQVYsQ0FBeEI7O0FBRUEsU0FBS3NXLGVBQUwsQ0FBcUJwTixJQUFyQjtBQUVBOzs7a0NBRWNsSSxDLEVBQUdoQixJLEVBQU07QUFDdkIsU0FBS3lWLE1BQUw7QUFDQTs7OzZCQUVTO0FBQ1QsV0FBTyxLQUFLeFgsTUFBTCxDQUFZQyxLQUFaLENBQWtCOGMseUJBQWxCLEVBQVA7QUFDQTs7O3FDQUVpQjtBQUNqQixXQUFPLEtBQUsvYyxNQUFMLENBQVlDLEtBQVosQ0FBa0I2YyxlQUF6QjtBQUNBOzs7Ozs7QUFHRixxQkFBVXZSLGlCQUFWLENBQTRCLGVBQTVCLEVBQTZDc1IsYUFBN0M7QUFDQSxtQkFBUTFmLGVBQVIsQ0FBd0IsUUFBeEIsRUFBa0MwZixhQUFsQzttQkFDZUEsYTs7Ozs7O0FDMURmO0FBQ0E7Ozs7Ozs7Ozs7OztBQUlBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7S0FLTUcsZ0I7OztBQUVMLDRCQUFZaGQsTUFBWixFQUFnQztBQUFBLE9BQVpJLE9BQVksdUVBQUosRUFBSTs7QUFBQTs7QUFBQSxtSUFDekJKLE1BRHlCLEVBQ2pCSSxPQURpQjs7QUFFL0IsU0FBSzZjLE9BQUwsR0FBZSxJQUFmO0FBQ0E7Ozs7OztBQU1BLFNBQUtDLElBQUwsR0FBWSxFQUFaO0FBVCtCO0FBVS9COztBQUVEOzs7Ozs7Ozs7OzhCQU1XdGYsSyxFQUFPO0FBQ2pCLFdBQU8sS0FBS3NmLElBQUwsQ0FBVXRmLEtBQVYsQ0FBUDtBQUNBOztBQUVEOzs7Ozs7Ozs7b0NBTWlCQSxLLEVBQU87QUFDdkIsUUFBSSxLQUFLK0ssTUFBVCxFQUFpQjtBQUNoQixVQUFLQSxNQUFMLENBQVlsRyxXQUFaLENBQXdCLGlDQUF4QjtBQUNBO0FBQ0QsU0FBS3dhLE9BQUwsR0FBZSxLQUFLQyxJQUFMLENBQVV0ZixLQUFWLEVBQWlCUCxRQUFqQixDQUEwQixpQ0FBMUIsQ0FBZjtBQUNBLFdBQU8sS0FBSzRmLE9BQVo7QUFDQTs7QUFHRDs7Ozs7Ozs7Ozs7QUFxQ0E7Ozs7OzJCQUtTRSxPLEVBQVNwYixJLEVBQU07QUFDdkIsUUFBTWpFLE9BQU8sc0JBQUUsU0FBRixFQUNYVCxRQURXLENBQ0YseUJBREUsRUFFWDBFLElBRlcsQ0FFTkEsSUFGTSxFQUdYa0UsSUFIVyxDQUdOLE9BSE0sRUFHR2xFLEtBQUtxYixPQUhSLEVBSVg5YSxFQUpXLENBSVIsV0FKUSxFQUlLLEtBQUsrYSxXQUFMLENBQWlCN1osSUFBakIsQ0FBc0IsSUFBdEIsQ0FKTCxFQUtYOEMsTUFMVyxDQUtKNlcsT0FMSSxDQUFiOztBQU9BLFNBQUtELElBQUwsR0FBWSxLQUFLQSxJQUFMLENBQVV4ZixNQUFWLENBQWlCSSxJQUFqQixDQUFaOztBQUVBLFNBQUt1YSxlQUFMLENBQXFCL1IsTUFBckIsQ0FBNEJ4SSxJQUE1Qjs7QUFFQSxTQUFLMFAsYUFBTCxDQUFtQjFQLElBQW5COztBQUVBLFdBQU9BLElBQVA7QUFDQTs7QUFFRDs7Ozs7Ozs7K0JBS2FpRixDLEVBQUc7QUFDZixTQUFLNEYsTUFBTCxHQUFjNUYsRUFBRXVhLGFBQWhCO0FBQ0E7O0FBRUQ7Ozs7OzttQ0FHZ0I7QUFDZjtBQUNBOzs7NEJBRVE7QUFBQTs7QUFDUixRQUFNdmIsT0FBTyxLQUFLcUQsT0FBTCxFQUFiO0FBQ0EsUUFBTW1ZLGVBQWUsS0FBS0MsZUFBTCxFQUFyQjs7QUFFQSxRQUFHemIsUUFBUSxJQUFSLElBQWdCQSxLQUFLNEQsTUFBTCxLQUFnQixDQUFuQyxFQUFzQztBQUNyQyxVQUFLZ0gsT0FBTCxHQUFlLElBQWY7QUFDQTtBQUNBOztBQUVELFNBQUt1USxJQUFMLEdBQVksRUFBWjtBQUNBLFNBQUs3RSxlQUFMLENBQXFCb0YsS0FBckI7O0FBRUExYixTQUFLcEUsT0FBTCxDQUFhLGdCQUFRO0FBQ3BCLFNBQU0rZixPQUFPLE9BQUtDLE9BQUwsQ0FBYTdmLEtBQUtrSixLQUFsQixFQUF5QmxKLElBQXpCLENBQWI7QUFDQSxTQUFHeWYsZ0JBQWdCQSxhQUFhdFosSUFBYixLQUFzQm5HLEtBQUttRyxJQUE5QyxFQUFvRDs7QUFFbkQsYUFBSzBFLE1BQUwsR0FBYytVLElBQWQ7QUFDQTtBQUNELEtBTkQ7QUFPQSxTQUFLL1EsT0FBTCxHQUFlLEtBQWY7QUFDQTs7O3VCQXpGYTtBQUFBOztBQUNiLFFBQUksS0FBS3NRLE9BQUwsSUFBZ0IsS0FBS0EsT0FBTCxDQUFhdFgsTUFBYixHQUFzQixDQUExQyxFQUE2QztBQUM1QyxZQUFPLEtBQUtzWCxPQUFaO0FBQ0E7QUFDRCxTQUFLQyxJQUFMLENBQVV2ZixPQUFWLENBQWtCLGdCQUFRO0FBQ3pCLFNBQUlHLEtBQUtrUSxRQUFMLENBQWMsaUNBQWQsQ0FBSixFQUFzRDtBQUNyRCxhQUFLaVAsT0FBTCxHQUFlbmYsSUFBZjtBQUNBO0FBQ0QsS0FKRDtBQUtBLFdBQU8sS0FBS21mLE9BQVo7QUFDQTs7QUFFRDs7Ozs7OztxQkFNWTdmLE8sRUFBUztBQUNwQixRQUFJLEtBQUt1TCxNQUFULEVBQWlCO0FBQ2hCLFVBQUtBLE1BQUwsQ0FBWWxHLFdBQVosQ0FBd0IsaUNBQXhCO0FBQ0E7QUFDRCxRQUFJckYsT0FBSixFQUFhO0FBQ1osMkJBQUVBLE9BQUYsRUFBV0MsUUFBWCxDQUFvQixpQ0FBcEI7QUFDQTtBQUNELFNBQUs0ZixPQUFMLEdBQWU3ZixPQUFmO0FBQ0EsU0FBSzJiLEtBQUw7QUFDQSxXQUFPLEtBQUtrRSxPQUFaO0FBQ0E7Ozs7OztBQWdFRixxQkFBVTFSLGlCQUFWLENBQTRCLGtCQUE1QixFQUFnRHlSLGdCQUFoRDtBQUNBLG1CQUFRN2YsZUFBUixDQUF3QixXQUF4QixFQUFxQzZmLGdCQUFyQzttQkFDZUEsZ0I7Ozs7OztBQzFKZjtBQUNBOzs7Ozs7Ozs7Ozs7OztBQU1BOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7S0FLTVksZTs7O0FBQ0wsMkJBQWE1ZCxNQUFiLEVBQWlDO0FBQUEsT0FBWkksT0FBWSx1RUFBSixFQUFJOztBQUFBOztBQUNoQ0EsYUFBVSxpQkFBRStILE1BQUYsQ0FBUyxFQUFULEVBQWE7QUFDdEI1QixjQUFXLGNBRFc7QUFFdEJTLFdBQVEsVUFGYztBQUd0Qi9DLFVBQU8sVUFIZTtBQUl0QnVDLGVBQVksa0JBSlU7QUFLdEJtRyxhQUFVO0FBTFksSUFBYixFQU1Qdk0sT0FOTyxDQUFWOztBQURnQyxpSUFRMUJKLE1BUjBCLEVBUWxCSSxPQVJrQjs7QUFVaEMsU0FBS0osTUFBTCxDQUFZc0MsRUFBWixDQUFlLFNBQWYsRUFBMEIsTUFBS2tWLE1BQUwsQ0FBWWhVLElBQVosT0FBMUI7QUFDQSxTQUFLeEQsTUFBTCxDQUFZc0MsRUFBWixDQUFlLGNBQWYsRUFBK0IsTUFBS2tWLE1BQUwsQ0FBWWhVLElBQVosT0FBL0I7QUFYZ0M7QUFZaEM7Ozs7MkJBRVFULEMsRUFBRztBQUNYLDhIQUFjQSxDQUFkO0FBQ0EsUUFBTTlDLFFBQVEsS0FBS0QsTUFBTCxDQUFZQyxLQUExQjtBQUNBQSxVQUFNNGQsS0FBTixHQUFjLElBQWQ7QUFDQTs7OytCQUVZOWEsQyxFQUFHO0FBQ2ZBLE1BQUVpRyxjQUFGO0FBQ0FqRyxNQUFFK2EsZUFBRjs7QUFFQSxRQUFNaGdCLE9BQU8sc0JBQUVpRixFQUFFeVMsTUFBSixDQUFiO0FBQ0EsUUFBTXZWLFFBQVEsS0FBS0QsTUFBTCxDQUFZQyxLQUExQjtBQUNBLFFBQUluQyxLQUFLaUUsSUFBTCxFQUFKLEVBQWlCO0FBQ2hCOUIsV0FBTTRkLEtBQU4sR0FBYy9mLEtBQUtpRSxJQUFMLEVBQWQ7QUFDQTs7QUFFRCxTQUFLc1csZUFBTCxDQUFxQnBOLElBQXJCO0FBQ0E7OztrQ0FFY2xJLEMsRUFBR2hCLEksRUFBTTtBQUN2QixTQUFLeVYsTUFBTDtBQUNBOzs7NEJBRVE7QUFDUjtBQUNBLFFBQU11RyxXQUFXLENBQUMsRUFBRSxLQUFLUCxlQUFMLE1BQTBCLEtBQUtBLGVBQUwsR0FBdUJ2WixJQUF2QixJQUErQixJQUEzRCxDQUFsQjtBQUNBLFNBQUs3RyxPQUFMLENBQWFnTyxXQUFiLENBQ0MsMkJBREQsRUFFQzJTLFFBRkQ7QUFJQTs7OzZCQUVTO0FBQ1QsV0FBTyxLQUFLL2QsTUFBTCxDQUFZQyxLQUFaLENBQWtCK2QsU0FBekI7QUFDQTs7O3FDQUVpQjtBQUNqQixXQUFPLEtBQUtoZSxNQUFMLENBQVlDLEtBQVosQ0FBa0I0ZCxLQUF6QjtBQUNBOzs7Ozs7QUFJRixxQkFBVXRTLGlCQUFWLENBQTRCLGlCQUE1QixFQUErQ3FTLGVBQS9DO0FBQ0EsbUJBQVF6Z0IsZUFBUixDQUF3QixVQUF4QixFQUFvQ3lnQixlQUFwQzttQkFDZUEsZTs7Ozs7O0FDNUVmO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBTUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7S0FNTUssZTs7O0FBQ0wsMkJBQWFqZSxNQUFiLEVBQWlDO0FBQUEsT0FBWkksT0FBWSx1RUFBSixFQUFJOztBQUFBOztBQUNoQ0EsYUFBVSxpQkFBRStILE1BQUYsQ0FBUztBQUNsQm5CLFdBQVEsZUFEVTtBQUVsQlIsZUFBWSxVQUZNO0FBR2xCdkMsVUFBTztBQUhXLElBQVQsRUFJUDdELE9BSk8sQ0FBVjs7QUFEZ0MsaUlBTTFCSixNQU4wQixFQU1sQkksT0FOa0I7O0FBT2hDLFNBQUtKLE1BQUwsQ0FBWXNDLEVBQVosQ0FBZSxXQUFmLEVBQTRCLE1BQUs0YixXQUFMLENBQWlCMWEsSUFBakIsT0FBNUI7QUFQZ0M7QUFRaEM7O0FBR0Q7Ozs7Ozs7bUNBR2dCO0FBQ2Y7QUFDQSxTQUFLcEcsT0FBTCxHQUFlLHNCQUFFLE9BQUYsRUFDYjZJLElBRGEsQ0FDUjtBQUNMa1ksV0FBTyxFQURGO0FBRUwzSSxhQUFTLFFBRko7QUFHTDRJLGVBQVcsSUFITjtBQUlMcFgsWUFBUSxLQUFLNUcsT0FBTCxDQUFhNEc7QUFKaEIsS0FEUSxFQU9iM0osUUFQYSxDQU9KLEtBQUswUSxhQUFMLEVBUEksRUFRYnpILE1BUmEsQ0FRTixtQkFBUyxLQUFLdEcsTUFBZCxFQUFzQixFQUFFdUcsVUFBVyxVQUFiLEVBQXRCLEVBQWlEbkosT0FSM0MsQ0FBZjtBQVNBOztBQUVEOzs7Ozs7bUNBR2dCO0FBQ2Y7QUFDQTs7QUFHRDs7Ozs7Ozs7K0JBeUJZMkYsQyxFQUFHaEIsSSxFQUFNO0FBQ3BCLFNBQUtzYyxJQUFMLEdBQVksS0FBS3JlLE1BQUwsQ0FBWUMsS0FBWixDQUFrQnFELEdBQWxCLENBQXNCTixHQUFsQztBQUNBOzs7cUJBdEJTMkUsSyxFQUFPO0FBQ2hCLFFBQU1YLFFBQVEsS0FBS2hILE1BQUwsQ0FBWUksT0FBWixDQUFvQjRHLEtBQWxDO0FBQ0EsUUFBSXNYLGlCQUFKOztBQUVBLFFBQUd0WCxTQUFTLElBQVosRUFBa0I7QUFDakJzWCxnQkFBV0MsbUJBQW1CdlgsS0FBbkIsSUFBNEIsR0FBNUIsR0FBa0N3WCxpQkFBaUI3VyxLQUFqQixDQUE3QztBQUNBLEtBRkQsTUFFTztBQUNOLFNBQU04VyxTQUFTM2EsU0FBUzdDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBZjtBQUNBd2QsWUFBT04sSUFBUCxHQUFjeFcsS0FBZDtBQUNBMlcsZ0JBQVdHLE9BQU9DLFFBQVAsQ0FBZ0JuUSxLQUFoQixDQUFzQixHQUF0QixDQUFYO0FBQ0ErUCxnQkFBV0EsU0FBU0EsU0FBUzNZLE1BQVQsR0FBa0IsQ0FBM0IsQ0FBWDtBQUNBOztBQUVELFNBQUt2SSxPQUFMLENBQWE2SSxJQUFiLENBQWtCO0FBQ2pCa1ksV0FBT3hXLEtBRFU7QUFFakJ5VyxlQUFXRTtBQUZNLEtBQWxCO0FBSUE7Ozs7OztBQVFGLFVBQVNFLGdCQUFULENBQTBCRixRQUExQixFQUFvQztBQUNuQyxTQUFPQSxTQUFTL1AsS0FBVCxDQUFlLEdBQWYsRUFBb0JvUSxHQUFwQixFQUFQO0FBQ0E7O0FBRUQscUJBQVVwVCxpQkFBVixDQUE0QixpQkFBNUIsRUFBK0MwUyxlQUEvQztBQUNBLG1CQUFROWdCLGVBQVIsQ0FBd0IsVUFBeEIsRUFBb0M4Z0IsZUFBcEM7bUJBQ2VBLGU7Ozs7Ozs7QUN6RmY7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFNQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7O0tBS01XLHFCOzs7QUFFTCxpQ0FBWTVlLE1BQVosRUFBb0JJLE9BQXBCLEVBQTZCO0FBQUE7O0FBQzVCQSxhQUFVLGlCQUFFK0gsTUFBRixDQUFTLEVBQVQsRUFBYTtBQUN0QjVCLGNBQVcsTUFEVztBQUV0QlMsV0FBUSxNQUZjO0FBR3RCUixlQUFZLGNBSFU7QUFJdEJ2QyxVQUFPO0FBSmUsSUFBYixFQUtQN0QsT0FMTyxDQUFWO0FBRDRCLHdJQU90QkosTUFQc0IsRUFPZEksT0FQYztBQVE1Qjs7OzttQ0FFZTtBQUNmO0FBQ0EsUUFBSVQsYUFBYSxLQUFLSyxNQUFMLENBQVlJLE9BQVosQ0FBb0JULFVBQXJDO0FBQ0EsUUFBSWtmLGdCQUFKO0FBQ0EsU0FBSyxJQUFJQyxJQUFULElBQWlCbmYsVUFBakIsRUFBNkI7QUFDNUIsU0FBSSxDQUFDQSxXQUFXNEksY0FBWCxDQUEwQnVXLElBQTFCLENBQUwsRUFBc0M7O0FBRXRDLFNBQUlDLFNBQVNwZixXQUFXbWYsSUFBWCxDQUFiO0FBQ0EsU0FBSWhoQixPQUFPLEVBQVg7QUFDQSxTQUFJa2hCLFlBQVksRUFBaEI7O0FBRUFELFlBQU9sZixJQUFQLENBQVlsQyxPQUFaLENBQW9CLFVBQUNpQyxHQUFELEVBQU1oQyxLQUFOLEVBQWdCO0FBQ25DLFVBQUlBLFVBQVUsQ0FBZCxFQUFpQjtBQUNoQm9oQjtBQUNBO0FBQ0RBLGtEQUEwQ3BmLEdBQTFDO0FBQ0EsTUFMRDs7QUFPQTlCLHVFQUVJa2hCLFNBRkosV0FFbUJELE9BQU9qZixXQUYxQjs7QUFNQStlLG9CQUFlL2dCLElBQWY7QUFFQTtBQUNELFNBQUt1YSxlQUFMLENBQ0VoYixRQURGLENBQ1csdUJBRFgsRUFFRWlKLE1BRkYsQ0FFU3VZLFdBRlQ7QUFHQTs7Ozs7O0FBR0YscUJBQVV0VCxpQkFBVixDQUE0Qix1QkFBNUIsRUFBcURxVCxxQkFBckQ7QUFDQSxtQkFBUXpoQixlQUFSLENBQXdCLGlCQUF4QixFQUEyQ3loQixxQkFBM0M7bUJBQ2VBLHFCOzs7Ozs7QUNqRWY7QUFDQTs7Ozs7Ozs7OztBQUlBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQTs7Ozs7Ozs7S0FRTUssZTs7O0FBRUwsMkJBQWFqZixNQUFiLEVBQWlDO0FBQUEsT0FBWkksT0FBWSx1RUFBSixFQUFJOztBQUFBOztBQUNoQ0EsYUFBVSxpQkFBRStILE1BQUYsQ0FBUyxFQUFULEVBQWE7QUFDdEIzQixlQUFZLDZCQURVO0FBRXRCdkMsVUFBTztBQUZlLElBQWIsRUFHUDdELE9BSE8sQ0FBVjs7QUFEZ0MsaUlBSzFCSixNQUwwQixFQUtsQkksT0FMa0I7O0FBT2hDLFNBQUtKLE1BQUwsQ0FBWXNDLEVBQVosQ0FBZSxZQUFmLEVBQTZCLFVBQUNTLENBQUQsRUFBSWhCLElBQUosRUFBYTtBQUN6QyxRQUFNVyxPQUFPLE1BQUsxQyxNQUFMLENBQVlHLFdBQXpCO0FBQ0EsVUFBSytlLG1CQUFMLENBQXlCMUwsSUFBekIsR0FBZ0MsMEJBQWM5USxJQUFkLENBQWhDO0FBQ0EsSUFIRDs7QUFLQSxTQUFLMUMsTUFBTCxDQUFZc0MsRUFBWixDQUFlLGdCQUFmLEVBQWlDLFVBQUNTLENBQUQsRUFBTztBQUN2QyxVQUFLb2MsaUJBQUwsQ0FBdUIzTCxJQUF2QixHQUE4QiwwQkFBYyxNQUFLeFQsTUFBTCxDQUFZQyxLQUFaLENBQWtCMEMsUUFBaEMsQ0FBOUI7QUFDQSxJQUZEO0FBWmdDO0FBZWhDOztBQUdEOzs7Ozs7O21DQUdnQjtBQUNmLFFBQU1BLFdBQVcsS0FBSzNDLE1BQUwsQ0FBWUMsS0FBWixDQUFrQjBDLFFBQW5DO0FBQ0EsUUFBTXhDLGNBQWMsS0FBS0gsTUFBTCxDQUFZQyxLQUFaLENBQWtCRSxXQUF0QztBQUNBLFNBQUsrZSxtQkFBTCxHQUEyQiwwQkFBZ0IsS0FBS2xmLE1BQXJCLEVBQTZCLEVBQUV3RyxXQUFZLHVCQUFkLEVBQTdCLENBQTNCO0FBQ0EsU0FBSzJZLGlCQUFMLEdBQXlCLDBCQUFnQixLQUFLbmYsTUFBckIsRUFBNkIsRUFBRXdHLFdBQVkscUJBQWQsRUFBN0IsQ0FBekI7O0FBRUEsUUFBR21ULE1BQU1oWCxRQUFOLEtBQW1CQSxZQUFZLElBQWxDLEVBQXdDO0FBQ3ZDLFVBQUt3YyxpQkFBTCxDQUF1QjNMLElBQXZCLEdBQThCLEVBQTlCO0FBQ0EsS0FGRCxNQUVPO0FBQ04sVUFBSzJMLGlCQUFMLENBQXVCM0wsSUFBdkIsR0FBOEIsMEJBQWM3USxRQUFkLENBQTlCO0FBQ0E7O0FBRUQsUUFBR3hDLGVBQWUsSUFBbEIsRUFBd0I7QUFDdkIsVUFBSytlLG1CQUFMLENBQXlCMUwsSUFBekIsR0FBZ0MsMEJBQWMsQ0FBZCxDQUFoQztBQUNBLEtBRkQsTUFFTztBQUNOLFVBQUswTCxtQkFBTCxDQUF5QjFMLElBQXpCLEdBQWdDLDBCQUFjclQsV0FBZCxDQUFoQztBQUNBOztBQUVELFNBQUsvQyxPQUFMLEdBQWUsc0JBQUUsUUFBRixFQUFZQyxRQUFaLENBQXFCLGNBQXJCLENBQWY7QUFDQSxTQUFLRCxPQUFMLENBQ0VrSixNQURGLENBQ1MsS0FBSzRZLG1CQUFMLENBQXlCOWhCLE9BRGxDLEVBRUVrSixNQUZGLENBRVMsS0FBSzZZLGlCQUFMLENBQXVCL2hCLE9BRmhDOztBQUlBLFdBQU8sS0FBS0EsT0FBWjtBQUNBOztBQUdEOzs7Ozs7a0NBR2UyRixDLEVBQUc7QUFDakIsUUFBSTlDLFFBQVEsS0FBS0QsTUFBTCxDQUFZQyxLQUF4QjtBQUNBLFNBQUtpZixtQkFBTCxDQUF5QjFMLElBQXpCLEdBQWdDLDBCQUFjdlQsTUFBTUUsV0FBcEIsQ0FBaEM7QUFDQSxTQUFLZ2YsaUJBQUwsQ0FBdUIzTCxJQUF2QixHQUE4QiwwQkFBY3ZULE1BQU0wQyxRQUFwQixDQUE5QjtBQUNBOzs7MkJBRU9JLEMsRUFBRztBQUNWQSxNQUFFaUcsY0FBRjtBQUNBOzs7Ozs7QUFHRixxQkFBVXVDLGlCQUFWLENBQTRCLGlCQUE1QixFQUErQzBULGVBQS9DO0FBQ0EsbUJBQVE5aEIsZUFBUixDQUF3QixVQUF4QixFQUFvQzhoQixlQUFwQzttQkFDZUEsZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRmY7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7OztLQUdNRyxLOzs7QUFDTCxpQkFBYXBmLE1BQWIsRUFBcUJJLE9BQXJCLEVBQThCO0FBQUE7O0FBQUEsNkdBQ3ZCSixNQUR1QixFQUNmSSxPQURlOztBQUU3QixTQUFLaWYsS0FBTCxHQUFhLE1BQUtqaUIsT0FBTCxDQUFhLENBQWIsQ0FBYjs7QUFFQSxTQUFLNGdCLFNBQUwsR0FBaUIsRUFBakI7QUFDQSxTQUFLc0IsWUFBTCxHQUFvQixFQUFwQjs7QUFFQSxTQUFLaGMsR0FBTCxHQUFXLE1BQUt0RCxNQUFMLENBQVlJLE9BQVosQ0FBb0JrRCxHQUEvQjs7QUFFQSxPQUFHLE1BQUt0RCxNQUFMLENBQVlJLE9BQVosQ0FBb0I3QixNQUFwQixJQUE4QixJQUFqQyxFQUF1QztBQUN0QyxVQUFLQSxNQUFMLEdBQWMsTUFBS3lCLE1BQUwsQ0FBWUksT0FBWixDQUFvQjdCLE1BQWxDO0FBQ0E7O0FBRUQsT0FBRyxNQUFLd2UseUJBQUwsR0FBaUNwWCxNQUFqQyxHQUEwQyxDQUE3QyxFQUFnRDtBQUMvQyxVQUFLNFosZ0JBQUwsR0FBd0IsTUFBS3hDLHlCQUFMLEdBQWlDLENBQWpDLENBQXhCO0FBQ0E7O0FBRUQsU0FBSzNmLE9BQUwsQ0FBYWtGLEVBQWIsQ0FBZ0IsV0FBaEIsRUFBNkIsTUFBSzRiLFdBQUwsQ0FBaUIxYSxJQUFqQixPQUE3QjtBQUNBLFNBQUtwRyxPQUFMLENBQWFrRixFQUFiLENBQWdCLFlBQWhCLEVBQThCLE1BQUswUyxZQUFMLENBQWtCeFIsSUFBbEIsT0FBOUI7QUFDQSxTQUFLcEcsT0FBTCxDQUFha0YsRUFBYixDQUFnQixnQkFBaEIsRUFBa0MsTUFBS2tkLGdCQUFMLENBQXNCaGMsSUFBdEIsT0FBbEM7QUFDQSxTQUFLcEcsT0FBTCxDQUFha0YsRUFBYixDQUFnQixVQUFoQixFQUE0QixNQUFLbWQsVUFBTCxDQUFnQmpjLElBQWhCLE9BQTVCO0FBQ0EsU0FBS3BHLE9BQUwsQ0FBYWtGLEVBQWIsQ0FBZ0IsU0FBaEIsRUFBMkIsTUFBS29kLFNBQUwsQ0FBZWxjLElBQWYsT0FBM0I7QUFDQSxTQUFLcEcsT0FBTCxDQUFha0YsRUFBYixDQUFnQixRQUFoQixFQUEwQixNQUFLcWQsUUFBTCxDQUFjbmMsSUFBZCxPQUExQjtBQUNBLFNBQUtwRyxPQUFMLENBQWFrRixFQUFiLENBQWdCLGNBQWhCLEVBQWdDLE1BQUtzZCxjQUFMLENBQW9CcGMsSUFBcEIsT0FBaEM7QUFDQSxTQUFLcEcsT0FBTCxDQUFha0YsRUFBYixDQUFnQixPQUFoQixFQUF5QixNQUFLb0wsT0FBTCxDQUFhbEssSUFBYixPQUF6QjtBQUNBLFNBQUtwRyxPQUFMLENBQWFrRixFQUFiLENBQWdCLFVBQWhCLEVBQTRCLE1BQUt1ZCxVQUFMLENBQWdCcmMsSUFBaEIsT0FBNUI7QUFDQSxTQUFLcEcsT0FBTCxDQUFha0YsRUFBYixDQUFnQixNQUFoQixFQUF3QixNQUFLd2QsTUFBTCxDQUFZdGMsSUFBWixPQUF4QjtBQUNBLFNBQUtwRyxPQUFMLENBQWFrRixFQUFiLENBQWdCLE9BQWhCLEVBQXlCLE1BQUt5ZCxPQUFMLENBQWF2YyxJQUFiLE9BQXpCO0FBQ0EsU0FBS3BHLE9BQUwsQ0FBYWtGLEVBQWIsQ0FBZ0IsWUFBaEIsRUFBOEIsTUFBSzBkLFlBQUwsQ0FBa0J4YyxJQUFsQixPQUE5QjtBQUNBLFNBQUtwRyxPQUFMLENBQWFrRixFQUFiLENBQWdCLE9BQWhCLEVBQXlCLE1BQUsyZCxPQUFMLENBQWF6YyxJQUFiLE9BQXpCO0FBQ0EsU0FBS3BHLE9BQUwsQ0FBYWtGLEVBQWIsQ0FBZ0IsZ0JBQWhCLEVBQWtDLE1BQUs0ZCxnQkFBTCxDQUFzQjFjLElBQXRCLE9BQWxDO0FBQ0EsU0FBS3BHLE9BQUwsQ0FBYWtGLEVBQWIsQ0FBZ0IsU0FBaEIsRUFBMkIsTUFBSzZkLFNBQUwsQ0FBZTNjLElBQWYsT0FBM0I7QUFDQSxTQUFLcEcsT0FBTCxDQUFha0YsRUFBYixDQUFnQixPQUFoQixFQUF5QixNQUFLOGQsT0FBTCxDQUFhNWMsSUFBYixPQUF6QjtBQWhDNkI7QUFpQzdCOzs7OytCQUVXVCxDLEVBQUc7QUFDZCxTQUFLZixPQUFMLENBQWEsV0FBYjtBQUNBOzs7Z0NBRVllLEMsRUFBRztBQUNmLFNBQUtmLE9BQUwsQ0FBYSxZQUFiO0FBQ0E7OztvQ0FFZ0JlLEMsRUFBRztBQUNuQixTQUFLZixPQUFMLENBQWEsZ0JBQWI7QUFDQTs7OzhCQUVVZSxDLEVBQUc7QUFDYixTQUFLZixPQUFMLENBQWEsVUFBYjtBQUNBOzs7NkJBRVNlLEMsRUFBRztBQUNaLFNBQUtmLE9BQUwsQ0FBYSxTQUFiO0FBQ0E7Ozs0QkFFUWUsQyxFQUFHO0FBQ1gsU0FBS2YsT0FBTCxDQUFhLFFBQWI7QUFDQTs7O2tDQUVjZSxDLEVBQUc7QUFDakIsU0FBS2YsT0FBTCxDQUFhLGNBQWI7QUFDQTs7OzZCQUVTO0FBQ1QsU0FBS0EsT0FBTCxDQUFhLE9BQWI7QUFDQTs7O2dDQUVZO0FBQ1osU0FBS0EsT0FBTCxDQUFhLFVBQWI7QUFDQTs7OzRCQUVRO0FBQ1IsU0FBS0EsT0FBTCxDQUFhLE1BQWI7QUFDQTs7OzZCQUVTO0FBQ1QsU0FBS0EsT0FBTCxDQUFhLE9BQWI7QUFDQTs7OytCQUVXO0FBQ1gsU0FBS0EsT0FBTCxDQUFhLFNBQWI7QUFDQTs7O2tDQUVjO0FBQ2QsU0FBS0EsT0FBTCxDQUFhLFlBQWI7QUFDQTs7OzZCQUVTO0FBQ1QsU0FBS0EsT0FBTCxDQUFhLE9BQWI7QUFDQTs7O3NDQUVrQjtBQUNsQixTQUFLQSxPQUFMLENBQWEsZ0JBQWI7QUFDQTs7OytCQUVXO0FBQ1gsU0FBS0EsT0FBTCxDQUFhLFNBQWI7QUFDQTs7OzJCQUVPZSxDLEVBQUc7QUFDVixTQUFLZixPQUFMLENBQWEsT0FBYixFQUFzQixFQUFFb0IsTUFBT0wsRUFBRXlTLE1BQUYsQ0FBUzVTLEtBQVQsQ0FBZVEsSUFBeEIsRUFBdEI7QUFDQTs7QUFFRDs7OzttQ0FDZ0I7QUFBQTs7QUFDZixTQUFLaEcsT0FBTCxHQUFlLEtBQUtnRCxPQUFMLENBQWFzQixHQUE1QjtBQUNBOztBQUVDO0FBQ0EsY0FIRCxFQUlDLFFBSkQ7O0FBTUM7QUFDQSxZQVBELEVBUUMsT0FSRCxFQVVFL0QsT0FWRixDQVVVLGdCQUFRO0FBQ2pCLFlBQUtQLE9BQUwsQ0FBYWlqQixVQUFiLENBQXdCdmlCLElBQXhCO0FBQ0EsS0FaRDs7QUFjQTtBQUNBLEtBQ0MsU0FERCxFQUVDLFVBRkQsRUFHQyxNQUhELEVBSUMsT0FKRCxFQUtFSCxPQUxGLENBS1UsZ0JBQVE7QUFDakIsU0FBRyxPQUFLcUMsTUFBTCxDQUFZSSxPQUFaLENBQW9CdEMsSUFBcEIsQ0FBSCxFQUE4QjtBQUM3QixhQUFLVixPQUFMLENBQWE2SSxJQUFiLENBQWtCbkksSUFBbEIsRUFBd0IsT0FBS2tDLE1BQUwsQ0FBWUksT0FBWixDQUFvQnRDLElBQXBCLENBQXhCO0FBQ0EsYUFBS1YsT0FBTCxDQUFha2pCLElBQWIsQ0FBa0J4aUIsSUFBbEIsRUFBd0IsT0FBS2tDLE1BQUwsQ0FBWUksT0FBWixDQUFvQnRDLElBQXBCLENBQXhCO0FBQ0E7QUFDRCxLQVZEOztBQWFBLFNBQUtWLE9BQUwsQ0FBYXFLLElBQWIsQ0FBa0Isc0JBQWxCLEVBQTBDQyxJQUExQyxDQUErQyxVQUFDN0IsQ0FBRCxFQUFJL0gsSUFBSixFQUFhO0FBQzNELDJCQUFFQSxJQUFGLEVBQVF1VSxNQUFSO0FBQ0EsS0FGRDs7QUFJQSxXQUFPLEtBQUtqVixPQUFaO0FBQ0E7OzsrQ0E0RTJCO0FBQzNCLFdBQU8sS0FBSzRDLE1BQUwsQ0FBWUksT0FBWixDQUFvQm9ILE9BQXBCLENBQTRCK1ksR0FBNUIsQ0FBZ0M7QUFBQTtBQUN0Q3RjLFlBQU9uRyxLQUFLa0o7QUFEMEIsUUFFbkNsSixJQUZtQztBQUFBLEtBQWhDLENBQVA7QUFJQTs7OzBCQWtITztBQUFBOztBQUNQO0FBQ0EsU0FBS3VHLElBQUw7QUFDQSxRQUFJTSxNQUFNLGlCQUFFQyxRQUFGLEVBQVY7QUFDQSxTQUFLNGIsY0FBTDtBQUNBLFNBQUtDLFVBQUwsR0FDRXRYLElBREYsQ0FDTyxZQUFNO0FBQ1gsWUFBS3VYLFNBQUw7QUFDQSxZQUFLQyxXQUFMO0FBQ0FoYyxTQUFJSSxPQUFKO0FBQ0EsS0FMRjtBQU1BLFdBQU9KLElBQUlLLE9BQUosRUFBUDtBQUNBOzs7d0NBRW9CO0FBQ3BCLFFBQUksT0FBTyxLQUFLcWEsS0FBTCxDQUFXdUIscUJBQWxCLEtBQTRDLFVBQWhELEVBQTREO0FBQzNELFNBQU1wTyxZQUFZdkcsT0FBT3NHLFNBQVAsSUFBb0J0RyxPQUFPc0csU0FBUCxDQUFpQkMsU0FBckMsSUFBa0QsRUFBcEU7O0FBRUE7QUFDQSxTQUFLLFNBQUQsQ0FBWUUsSUFBWixDQUFpQkYsU0FBakIsS0FBK0IsQ0FBRSxzQkFBRCxDQUF5QkUsSUFBekIsQ0FBOEJGLFNBQTlCLENBQXBDLEVBQThFO0FBQzdFLGFBQU8sSUFBUDtBQUNBO0FBQ0Q7QUFDRCxXQUFPLEtBQVA7QUFDQTs7O3FDQUVpQjtBQUFBOztBQUNqQixRQUFNdlMsUUFBUSxLQUFLb2YsS0FBbkI7QUFDQSxRQUFJcGYsTUFBTWlELE1BQU4sSUFBZ0JqRCxNQUFNNGdCLFlBQU4sSUFBc0I1Z0IsTUFBTTZnQixhQUFoRCxFQUErRDtBQUM5RDtBQUNBO0FBQ0EsVUFBSzdkLElBQUw7O0FBRUE7QUFDQTtBQUNBdUgsZ0JBQVcsWUFBTTtBQUNoQixhQUFLckgsS0FBTDtBQUNBbEQsWUFBTTJnQixxQkFBTjtBQUNBLE1BSEQsRUFHRyxDQUhIO0FBSUEsS0FYRCxNQVdPO0FBQ04zZ0IsV0FBTTJnQixxQkFBTjtBQUNBO0FBQ0Q7OztvQ0FFZ0I7QUFDaEIsU0FBS3ZCLEtBQUwsQ0FBVzBCLG9CQUFYO0FBQ0E7OztnQ0FFYTtBQUNiLFFBQUksQ0FBQyxLQUFLMUIsS0FBTCxDQUFXMkIsTUFBWixJQUFzQixLQUFLM0IsS0FBTCxDQUFXbmMsTUFBckMsRUFBNkM7QUFDNUMsVUFBS0QsSUFBTDtBQUNBLEtBRkQsTUFFTztBQUNOLFVBQUtFLEtBQUw7QUFDQTtBQUNEOzs7MEJBRU87QUFDUCxRQUFJd0IsTUFBTSxpQkFBRUMsUUFBRixFQUFWO0FBQ0EsUUFBTXFjLGNBQWMsS0FBSzVCLEtBQUwsQ0FBV3BjLElBQVgsRUFBcEI7O0FBRUEsUUFBR2dlLGVBQWUsSUFBbEIsRUFBd0I7QUFDdkJBLGlCQUFZbmYsSUFBWixDQUFpQixZQUFXO0FBQzNCNkMsVUFBSUksT0FBSjtBQUNBLE1BRkQ7QUFHQSxLQUpELE1BSU87QUFDTkosU0FBSUksT0FBSjtBQUNBO0FBQ0QsV0FBT0osSUFBSUssT0FBSixFQUFQO0FBQ0E7OzsyQkFFUTtBQUNSLFFBQUlMLE1BQU0saUJBQUVDLFFBQUYsRUFBVjtBQUNBLFFBQU1zYyxlQUFlLEtBQUs3QixLQUFMLENBQVdsYyxLQUFYLEVBQXJCOztBQUVBLFFBQUcrZCxnQkFBZ0IsSUFBbkIsRUFBeUI7QUFDeEJBLGtCQUFhcGYsSUFBYixDQUFrQixZQUFXO0FBQzVCNkMsVUFBSUksT0FBSjtBQUNBLE1BRkQ7QUFHQSxLQUpELE1BSU87QUFDTkosU0FBSUksT0FBSjtBQUNBO0FBQ0QsV0FBT0osSUFBSUssT0FBSixFQUFQO0FBQ0E7OzswQkFFTTtBQUNOLFdBQU8sS0FBS3FhLEtBQUwsQ0FBV2hiLElBQVgsRUFBUDtBQUNBOzs7b0NBRWlCO0FBQ2pCLFFBQUk4YyxRQUFRLElBQVo7QUFDQSxTQUFLL2pCLE9BQUwsQ0FBYWdrQixRQUFiLENBQXNCLHlCQUF0QixFQUFpRDFaLElBQWpELENBQXNELFlBQVk7QUFDakUsU0FBTTJaLFdBQVcsc0JBQUUsSUFBRixFQUFRcGIsSUFBUixDQUFhLFNBQWIsQ0FBakI7QUFDQSxTQUFNZSxRQUFRLHNCQUFFLElBQUYsRUFBUWYsSUFBUixDQUFhLE9BQWIsQ0FBZDtBQUNBLFNBQU0zQyxNQUFNLHNCQUFFLElBQUYsRUFBUTJDLElBQVIsQ0FBYSxLQUFiLENBQVo7QUFDQSxTQUFJZSxNQUFNckIsTUFBTixHQUFlLENBQWYsSUFBb0JyQyxJQUFJcUMsTUFBSixHQUFhLENBQXJDLEVBQXdDO0FBQ3ZDd2IsWUFBTW5ELFNBQU4sQ0FBZ0J2VCxJQUFoQixDQUFxQjtBQUNwQnpELGNBQVFBLEtBRFk7QUFFcEIvQyxhQUFPb2QsUUFGYTtBQUdwQkEsaUJBQVdBO0FBSFMsT0FBckI7QUFLQTtBQUNELEtBWEQ7QUFZQTs7O2dDQUVhO0FBQUE7O0FBQ2IsUUFBSTFjLE1BQU0saUJBQUVDLFFBQUYsRUFBVjtBQUNBLFFBQUksS0FBS3lhLEtBQUwsQ0FBV2lDLFVBQVgsR0FBd0JDLGlCQUFpQkMsWUFBN0MsRUFBMkQ7QUFDMUQ3YyxTQUFJSSxPQUFKO0FBQ0EsVUFBSzBjLGVBQUw7QUFDQSxLQUhELE1BR087QUFDTiwyQkFBRSxLQUFLcEMsS0FBUCxFQUFjN2MsR0FBZCxDQUFrQixnQkFBbEIsRUFBb0MsVUFBQ08sQ0FBRCxFQUFPO0FBQzFDNEIsVUFBSUksT0FBSjtBQUNBLGFBQUswYyxlQUFMO0FBQ0EsTUFIRDtBQUlBO0FBQ0QsV0FBTzljLElBQUlLLE9BQUosRUFBUDtBQUNBOzs7cUNBRWtCOztBQUVsQjtBQUNBO0FBQ0E7O0FBRUEsUUFBSSxLQUFLcWEsS0FBTCxDQUFXcUMsVUFBWCxDQUFzQi9iLE1BQXRCLEtBQWlDLENBQWpDLElBQXNDLEtBQUtxWSxTQUFMLENBQWVyWSxNQUFmLEdBQXdCLENBQWxFLEVBQXFFO0FBQ3BFLFVBQUt2SSxPQUFMLENBQWFna0IsUUFBYixDQUFzQix5QkFBdEIsRUFBaUQvTyxNQUFqRDtBQUNBLFVBQUssSUFBSXhNLENBQVQsSUFBYyxLQUFLbVksU0FBbkIsRUFBOEI7QUFDN0IsVUFBSSxLQUFLQSxTQUFMLENBQWV6VixjQUFmLENBQThCMUMsQ0FBOUIsQ0FBSixFQUFzQztBQUNyQyxZQUFLekksT0FBTCxDQUNFa0osTUFERixDQUNTLHNCQUFFLFVBQUYsRUFDTkwsSUFETSxDQUNELE9BREMsRUFDUSxLQUFLK1gsU0FBTCxDQUFnQm5ZLENBQWhCLEVBQW9CbUIsS0FENUIsRUFFTmYsSUFGTSxDQUVELEtBRkMsRUFFTSxLQUFLK1gsU0FBTCxDQUFnQm5ZLENBQWhCLEVBQW9CdkMsR0FGMUIsRUFHTjJDLElBSE0sQ0FHRCxTQUhDLEVBR1UsS0FBSytYLFNBQUwsQ0FBZ0JuWSxDQUFoQixFQUFvQndiLFFBSDlCLEVBSU5wYixJQUpNLENBSUQsSUFKQyxFQUlLLEtBQUsrWCxTQUFMLENBQWdCblksQ0FBaEIsRUFBb0J3YixRQUp6QixFQUtOcGIsSUFMTSxDQUtELE1BTEMsRUFLTyxXQUxQLENBRFQ7QUFPQTtBQUNEO0FBQ0Q7QUFDRDs7O3VCQTNVa0I7QUFDbEIsV0FBTyxLQUFLb1osS0FBTCxDQUFXbGYsV0FBbEI7QUFDQSxJO3FCQUVnQndILEssRUFBTztBQUN2QixRQUFJakYsYUFBSjtBQUNBLFFBQUlpRixRQUFRLEtBQUtoRixRQUFqQixFQUEyQjtBQUMxQkQsWUFBTyxLQUFLQyxRQUFaO0FBQ0EsS0FGRCxNQUVPLElBQUlnRixRQUFRLENBQVosRUFBZTtBQUNyQmpGLFlBQU8sQ0FBUDtBQUNBLEtBRk0sTUFFQTtBQUNOQSxZQUFPaUYsS0FBUDtBQUNBOztBQUVELFNBQUszSCxNQUFMLENBQVlnQyxPQUFaLENBQW9CLGdCQUFwQixFQUFzQyxFQUFFN0IsYUFBY3VDLElBQWhCLEVBQXRDOztBQUVBLFNBQUsyYyxLQUFMLENBQVdsZixXQUFYLEdBQXlCdUMsSUFBekI7QUFDQTs7O3VCQUVlO0FBQ2YsV0FBTyxLQUFLMmMsS0FBTCxDQUFXMWMsUUFBbEI7QUFDQTs7O3VCQUVhO0FBQ2IsV0FBTyxLQUFLMGMsS0FBTCxDQUFXc0MsWUFBbEI7QUFDQTs7O3VCQUVZO0FBQ1osV0FBTyxLQUFLdEMsS0FBTCxDQUFXdUMsV0FBbEI7QUFDQTs7O3VCQUVXO0FBQ1gsV0FBTyxLQUFLdkMsS0FBTCxDQUFXM2EsWUFBbEI7QUFDQSxJO3FCQW9DU2lELEssRUFBTztBQUNoQixzRkFBYUEsS0FBYjtBQUNBLFNBQUswWCxLQUFMLENBQVczYSxZQUFYLEdBQTBCaUQsS0FBMUI7QUFDQTs7O3FCQXJDU0EsSyxFQUFPO0FBQ2hCLFNBQUswWCxLQUFMLENBQVdoaEIsS0FBWCxHQUFtQnNKLEtBQW5CO0FBQ0EsSTt1QkFFVztBQUNYLFdBQU8sS0FBSzBYLEtBQUwsQ0FBV2hoQixLQUFsQjtBQUNBOzs7dUJBRWE7QUFDYixRQUFJUSxNQUFNLEtBQUttQixNQUFMLENBQVlJLE9BQVosQ0FBb0IxQixJQUFwQixDQUF5QkcsR0FBbkM7QUFDQSxRQUFHLHNDQUFILEVBQXlCO0FBQ3hCQSxXQUFNdWdCLE1BQU15QyxlQUFaO0FBQ0E7QUFDRCw0QkFBYztBQUNiaGpCLFdBQU11Z0IsTUFBTTBDLGVBQVo7QUFDQTs7QUFFRCxXQUFPampCLEdBQVA7QUFDQTs7O3VCQUVhO0FBQ2IsUUFBSUQsTUFBTSxLQUFLb0IsTUFBTCxDQUFZSSxPQUFaLENBQW9CMUIsSUFBcEIsQ0FBeUJFLEdBQW5DOztBQUVBLFFBQUksc0NBQUosRUFBMEI7QUFDekJBLFdBQU13Z0IsTUFBTTJDLGVBQVo7QUFDQTs7QUFFRCw0QkFBZTtBQUNkbmpCLFdBQU13Z0IsTUFBTTRDLGVBQVo7QUFDQTs7QUFFRCxXQUFPcGpCLEdBQVA7QUFDQTs7O3FCQWNtQnFGLEksRUFBTTtBQUN6QixpR0FBd0JBLElBQXhCO0FBQ0EsUUFBTXZCLE9BQU8sS0FBS3ZDLFdBQWxCO0FBQ0EsUUFBTXpCLE9BQU8sS0FBS0EsSUFBbEI7QUFDQSxRQUFNdWpCLE9BQU8sS0FBSy9lLE1BQWxCOztBQUVBLFNBQUtxYyxnQkFBTCxHQUF3QixLQUFLeEMseUJBQUwsR0FBaUN0VixJQUFqQyxDQUFzQztBQUFBLFlBQVEzSixLQUFLbUcsSUFBTCxLQUFjQSxJQUF0QjtBQUFBLEtBQXRDLENBQXhCOztBQUVBLFNBQUtYLEdBQUwsR0FBVyxLQUFLaWMsZ0JBQWhCO0FBQ0EsU0FBSzdnQixJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLeUIsV0FBTCxHQUFtQnVDLElBQW5COztBQUVBLFFBQUl1ZixJQUFKLEVBQVU7QUFDVCxVQUFLOWUsS0FBTDtBQUNBLEtBRkQsTUFFTztBQUNOLFVBQUtGLElBQUw7QUFDQTs7QUFFRCxTQUFLakIsT0FBTCxDQUFhLGVBQWIsRUFBOEIsS0FBS3VkLGdCQUFuQztBQUVBLEk7dUJBRXFCO0FBQ3JCLFdBQU8sS0FBS0EsZ0JBQVo7QUFDQTs7O3FCQUVRamMsRyxFQUFLO0FBQ2IsUUFBR0EsT0FBTyxJQUFWLEVBQWdCO0FBQ2hCLFFBQUcsS0FBS0EsR0FBTCxJQUFZLEtBQUtBLEdBQUwsQ0FBU04sR0FBVCxLQUFpQk0sSUFBSU4sR0FBcEMsRUFBeUM7O0FBRXpDLFNBQUtxYyxLQUFMLENBQVcvYixHQUFYLEdBQWlCQSxJQUFJTixHQUFyQjs7QUFFQSxTQUFLa2YsT0FBTCxHQUFlNWUsR0FBZjtBQUNBLEk7dUJBRVU7QUFDVixXQUFPLEtBQUs0ZSxPQUFaO0FBQ0E7Ozt1QkFFWTtBQUNaLFdBQU8sS0FBS0MsTUFBWjtBQUNBLEk7cUJBRVV4YSxLLEVBQU87QUFDakIsaUNBQUksS0FBSzBYLEtBQUwsQ0FBV3FDLFVBQWYsR0FBMkIvakIsT0FBM0IsQ0FBbUMsZ0JBQVE7QUFDMUMsU0FBR2dLLFNBQVMsSUFBVCxJQUFpQjdKLEtBQUt1akIsUUFBTCxLQUFrQjFaLE1BQU0wWixRQUE1QyxFQUFzRDtBQUNyRHZqQixXQUFLc2tCLElBQUwsR0FBWSxTQUFaO0FBQ0EsTUFGRCxNQUVPO0FBQ050a0IsV0FBS3NrQixJQUFMLEdBQVksUUFBWjtBQUNBO0FBQ0QsS0FORDtBQU9BLFNBQUtELE1BQUwsR0FBY3hhLEtBQWQ7QUFDQSxTQUFLM0YsT0FBTCxDQUFhLGNBQWI7QUFDQTs7O3VCQUVZO0FBQ1osV0FBTyxLQUFLcWQsS0FBTCxDQUFXbmMsTUFBbEI7QUFDQTs7O3VCQUVhO0FBQ2IsV0FBTyxLQUFLbWMsS0FBTCxDQUFXNWYsTUFBbEI7QUFDQSxJO3FCQUVXa0ksSyxFQUFPO0FBQ2xCLHdGQUFlQSxLQUFmO0FBQ0EsUUFBTTNILFNBQVMsS0FBS0EsTUFBcEI7QUFDQSxRQUFJMkgsUUFBUSxDQUFaLEVBQWU7QUFDZCxVQUFLMFgsS0FBTCxDQUFXNWYsTUFBWCxHQUFvQixDQUFwQjtBQUNBLEtBRkQsTUFFTyxJQUFJa0ksUUFBUTNILE9BQU9JLE9BQVAsQ0FBZVgsTUFBZixDQUFzQkMsU0FBbEMsRUFBNkM7QUFDbkQsVUFBSzJmLEtBQUwsQ0FBVzVmLE1BQVgsR0FBb0IsQ0FBcEI7QUFDQSxLQUZNLE1BRUE7QUFDTixVQUFLNGYsS0FBTCxDQUFXNWYsTUFBWCxHQUFvQmtJLEtBQXBCO0FBQ0E7QUFDRCxTQUFLMFgsS0FBTCxDQUFXZ0QsSUFBWCxHQUFtQjFhLFFBQVEzSCxPQUFPSSxPQUFQLENBQWVYLE1BQWYsQ0FBc0JDLFNBQWpEO0FBQ0E7Ozt1QkFHZTtBQUNmLFdBQU8sS0FBSzJmLEtBQUwsQ0FBV3ZFLFFBQWxCO0FBQ0E7O0FBRUQ7Ozs7Ozt1QkFHZ0I7QUFDZixXQUFPLEtBQUt1RSxLQUFMLENBQVdpRCxRQUFsQjtBQUNBOztBQUVEOzs7Ozs7dUJBR2E7QUFDWixXQUFPLEtBQUtqRCxLQUFMLENBQVcyQixNQUFsQjtBQUNBOzs7dUJBRVc7QUFDWCxXQUFPLEtBQUszQixLQUFMLENBQVd0VSxLQUFsQjtBQUNBOzs7dUJBRXNCO0FBQ3RCLFFBQUl0TixTQUFTLENBQWI7QUFDQSxTQUFLLElBQUlvSSxJQUFJLENBQWIsRUFBZ0JBLElBQUksS0FBS21iLE1BQUwsQ0FBWXJiLE1BQWhDLEVBQXdDRSxHQUF4QyxFQUE2QztBQUM1Q3BJLGVBQVcsS0FBS3VqQixNQUFMLENBQVloYixHQUFaLENBQWdCSCxDQUFoQixJQUFxQixLQUFLbWIsTUFBTCxDQUFZdUIsS0FBWixDQUFrQjFjLENBQWxCLENBQWhDO0FBQ0E7O0FBRUQsV0FBT3BJLFNBQVMsS0FBS2tGLFFBQWQsR0FBeUIsR0FBaEM7QUFDQTs7O3VCQUVnQjtBQUNoQixXQUFPLEtBQUswYyxLQUFMLENBQVdtRCxVQUFsQjtBQUNBOzs7OztBQStJRjs7Ozs7QUFHQXBELE9BQU0yQyxlQUFOLEdBQXdCLEdBQXhCOztBQUVBOzs7QUFHQTNDLE9BQU15QyxlQUFOLEdBQXdCLENBQXhCOztBQUVBekMsT0FBTTRDLGVBQU4sR0FBd0IsR0FBeEI7O0FBRUE1QyxPQUFNMEMsZUFBTixHQUF3QixDQUF4Qjs7QUFFQTFDLE9BQU1xRCxVQUFOLEdBQW1CM2UsU0FBUzdDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBbkI7O0FBRUE7Ozs7O0FBS0FtZSxPQUFNc0QsZ0JBQU4sR0FBeUIsWUFBVztBQUNuQztBQUNBLE1BQUk7QUFDSCxPQUFNampCLFNBQVMyZixNQUFNcUQsVUFBTixDQUFpQmhqQixNQUFoQzs7QUFFQTJmLFNBQU1xRCxVQUFOLENBQWlCaGpCLE1BQWpCLEdBQTJCQSxTQUFTLENBQVYsR0FBZSxHQUF6QztBQUNBLFVBQU9BLFdBQVcyZixNQUFNcUQsVUFBTixDQUFpQmhqQixNQUFuQztBQUNBLEdBTEQsQ0FLRSxPQUFPc0QsQ0FBUCxFQUFVO0FBQ1gsVUFBTyxLQUFQO0FBQ0E7QUFDRCxFQVZEOztBQVlBcWMsT0FBTTlULFNBQU4sQ0FBZ0J5TSxvQkFBaEIsR0FBdUNxSCxNQUFNc0QsZ0JBQU4sRUFBdkM7O0FBRUEscUJBQVVuWCxpQkFBVixDQUE0QixPQUE1QixFQUFxQzZULEtBQXJDO21CQUNlQSxLOzs7Ozs7Ozs7Ozs7Ozs7O0FDdGdCZjs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7S0FFTWxiLE07OztBQUNMLGtCQUFZbEUsTUFBWixFQUFvQkksT0FBcEIsRUFBNkI7QUFBQTs7QUFBQSwrR0FDdEJKLE1BRHNCLEVBQ2RJLE9BRGM7O0FBRTVCLFNBQUt1aUIsYUFBTCxHQUFxQixFQUFyQjtBQUNBLFNBQUtDLFdBQUwsR0FBbUIsS0FBbkI7O0FBRUEsT0FBSSxNQUFLNWlCLE1BQUwsQ0FBWUksT0FBWixDQUFvQmtELEdBQXBCLElBQTJCLElBQS9CLEVBQXFDO0FBQ3BDLFVBQUt0RCxNQUFMLENBQVk0QyxLQUFaLEdBQW9CLHlCQUFlLHNCQUFmLENBQXBCO0FBQ0E7O0FBUDJCO0FBUzVCOztBQUVEOzs7Ozs7OzZCQUdpQjtBQUFBOztBQUFBLHNDQUFOMkIsSUFBTTtBQUFOQSxTQUFNO0FBQUE7O0FBQ2hCLFFBQUcsQ0FBQyxLQUFLcWUsV0FBVCxFQUFzQjtBQUNyQixVQUFLRCxhQUFMLENBQW1CbFksSUFBbkIsQ0FBd0JsRyxJQUF4QjtBQUNBO0FBQ0QsMklBQWlCQSxJQUFqQjtBQUNBOzs7MEJBRU07QUFBQTs7QUFDTixTQUFLcWUsV0FBTCxHQUFtQixJQUFuQjtBQUNBLFNBQUtELGFBQUwsQ0FBbUJobEIsT0FBbkIsQ0FBMkIsZ0JBQVE7QUFDbEMsWUFBS3FFLE9BQUwsa0NBQWdCdUMsSUFBaEI7QUFDQSxLQUZEO0FBR0E7OzttQ0FFZTtBQUNmLFdBQU8sS0FBS25ILE9BQUwsR0FBZSxzQkFBRSxTQUFGLENBQXRCO0FBQ0E7OztrQ0FpRWM7QUFDZCxTQUFLc0IsSUFBTCxJQUFhLEtBQUtzQixNQUFMLENBQVlJLE9BQVosQ0FBb0IxQixJQUFwQixDQUF5QkMsSUFBdEM7QUFDQTs7O2tDQUVjO0FBQ2QsU0FBS0QsSUFBTCxJQUFhLEtBQUtzQixNQUFMLENBQVlJLE9BQVosQ0FBb0IxQixJQUFwQixDQUF5QkMsSUFBdEM7QUFDQTs7O3dDQTRDb0IsQ0FFcEI7OzswQkFFTSxDQUVOOzs7MkJBRVEsQ0FFUjs7OzBCQUVNLENBQ047OztnQ0FFYTtBQUNiLFFBQUksS0FBS3VFLE1BQVQsRUFBaUI7QUFDaEIsVUFBS0QsSUFBTDtBQUNBLEtBRkQsTUFFTztBQUNOLFVBQUtFLEtBQUw7QUFDQTtBQUNEOzs7K0JBRVk7QUFDWixTQUFLekUsSUFBTCxHQUFZLEtBQUtta0IsV0FBakI7QUFDQTs7O2lDQUVjO0FBQ2QsU0FBS3BqQixNQUFMLEdBQWMsS0FBS2laLGFBQW5CO0FBQ0E7OztxQkE5SVUxVixHLEVBQUs7QUFDZixTQUFLOGYsT0FBTCxHQUFlOWYsR0FBZjtBQUNBLFNBQUtoQixPQUFMLENBQWEsY0FBYixFQUE2QixFQUFFZ0IsUUFBRixFQUE3QjtBQUNBLEk7dUJBR1k7QUFDWixXQUFPLEtBQUs4ZixPQUFaO0FBQ0E7Ozt1QkFFaUI7QUFDakI7QUFDQSxJO3FCQUVlbmIsSyxFQUFPLENBRXRCOzs7dUJBRWM7QUFDZDtBQUNBOzs7cUJBRVNBLEssRUFBTyxDQUVoQixDO3VCQUVXLENBRVg7Ozt1QkFFWTtBQUNaLFdBQU8sS0FBS3ZLLE9BQUwsQ0FBYTJsQixXQUFiLEVBQVA7QUFDQTs7O3VCQUVXO0FBQ1gsV0FBTyxLQUFLM2xCLE9BQUwsQ0FBYXNJLEtBQWIsRUFBUDtBQUNBOzs7cUJBRVdpQyxLLEVBQU87QUFDbEIsU0FBS3FiLFFBQUwsR0FBZ0JyYixLQUFoQjtBQUNBLEk7dUJBTWE7QUFDYixXQUFPLEtBQUtxYixRQUFMLElBQWlCLEtBQUtoakIsTUFBTCxDQUFZSSxPQUFaLENBQW9CMUIsSUFBcEIsQ0FBeUJHLEdBQWpEO0FBRUE7OztxQkFQVzhJLEssRUFBTztBQUNsQixTQUFLc2IsUUFBTCxHQUFnQnRiLEtBQWhCO0FBQ0EsSTt1QkFPYTtBQUNiLFdBQU8sS0FBS3NiLFFBQUwsSUFBaUIsS0FBS2pqQixNQUFMLENBQVlJLE9BQVosQ0FBb0IxQixJQUFwQixDQUF5QkUsR0FBakQ7QUFDQTs7O3VCQUVVLENBQ1YsQztxQkFFUStJLEssRUFBTztBQUNmLFFBQUdBLFFBQVEsS0FBSytVLE9BQWIsSUFBd0IvVSxRQUFRLEtBQUs4VSxPQUF4QyxFQUFpRDtBQUNqRCxxQkFBT3lHLEdBQVAsQ0FBVyxNQUFYLEVBQW1CdmIsS0FBbkI7QUFDQTs7O3FCQVVtQjFELEksRUFBTTtBQUN6QixRQUFNa2YsU0FBUyxLQUFLcEcseUJBQUwsRUFBZjtBQUNBLFFBQUcsQ0FBQ29HLE9BQU9DLElBQVAsQ0FBWTtBQUFBLFlBQU9uZixRQUFRcUQsR0FBZjtBQUFBLEtBQVosQ0FBSixFQUFxQztBQUNwQztBQUNBO0FBQ0QsSTt1QkFFcUIsQ0FFckI7Ozt1QkFFWSxDQUVaOzs7dUJBRVksQ0FFWjs7O3VCQUVpQjtBQUNqQixXQUFPLGlCQUFPcVYsR0FBUCxDQUFXLE1BQVgsS0FBc0IsS0FBSzNjLE1BQUwsQ0FBWUksT0FBWixDQUFvQjFCLElBQXBCLENBQXlCSSxPQUF0RDtBQUNBOzs7dUJBRW9CO0FBQ3BCLFdBQU8saUJBQU82ZCxHQUFQLENBQVcsUUFBWCxLQUF3QixLQUFLM2MsTUFBTCxDQUFZSSxPQUFaLENBQW9CWCxNQUFwQixDQUEyQlgsT0FBMUQ7QUFDQTs7O3FCQUVVNkksSyxFQUFPO0FBQ2pCLFFBQU0zSCxTQUFTLEtBQUtBLE1BQXBCO0FBQ0EsUUFBRzJILFFBQVEsQ0FBUixJQUFhQSxRQUFRM0gsT0FBT0ksT0FBUCxDQUFlWCxNQUFmLENBQXNCQyxTQUE5QyxFQUF5RDtBQUN4RCxzQkFBT3dqQixHQUFQLENBQVcsUUFBWCxFQUFxQnZiLEtBQXJCO0FBQ0E7QUFDRDs7O3FCQUVRQSxLLEVBQU8sQ0FFZixDO3VCQUVTLENBRVQ7Ozs7OztBQWtDRnpELFFBQU9vSCxTQUFQLENBQWlCeU0sb0JBQWpCLEdBQXdDLElBQXhDOztBQUVBLHFCQUFVeE0saUJBQVYsQ0FBNEIsUUFBNUIsRUFBc0NySCxNQUF0Qzs7bUJBRWVBLE07Ozs7OztBQzNMZjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxzREFBcUQ7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVEOzs7Ozs7O0FDekJBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0NBQW1DLGdDQUFnQztBQUNuRTtBQUNBLDZCQUE0QixjQUFjO0FBQzFDO0FBQ0E7QUFDQSxHQUFFLFlBQVk7QUFDZDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxHQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7O0FBRUE7O0FBRUE7Ozs7Ozs7QUN2REE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQXlDLGlCQUFpQjtBQUMxRCx1REFBc0Q7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBcUMsY0FBYztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWlCLG1CQUFtQjtBQUNwQztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBaUIsbUJBQW1CO0FBQ3BDO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWlCLHNCQUFzQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUMzSUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDZkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBdUIsT0FBTztBQUM5QjtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3BCQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSwyQkFBMEI7O0FBRTFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0EsS0FBSTtBQUNKO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0EsOERBQTZELFVBQVU7QUFDdkU7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0EsdUNBQXNDLFVBQVU7QUFDaEQsd0JBQXVCLGFBQWE7QUFDcEM7QUFDQSwwQkFBeUIsY0FBYztBQUN2QywwQkFBeUIsVUFBVTtBQUNuQyxxQkFBb0IsY0FBYztBQUNsQztBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQixVQUFVLEVBQUU7QUFDN0IsZ0NBQStCLHlCQUF5QjtBQUN4RDtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEwQixXQUFXO0FBQ3JDO0FBQ0Esb0RBQW1ELFVBQVU7QUFDN0Q7QUFDQSxHQUFFOztBQUVGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpRUFBZ0U7QUFDaEUsR0FBRTs7QUFFRjtBQUNBO0FBQ0EsbUNBQWtDLGFBQWE7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVELGlDQUFnQzs7QUFFaEM7Ozs7Ozs7QUMzVUE7QUFDQTtBQUNBOzs7Ozs7O0FDRkEsNENBQTJDLGdCQUFnQjs7QUFFM0QsbURB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LEVBQXVDLFFBQXZDLEVBQWlELFNBQWpELEVBQTRELFVBQTVELEVBQXdFLFlBQXhFLENBRFk7QUFMSDtBQUZGO0FBRFcsRUFBZixDOzs7Ozs7Ozs7OztBQ0FBLEtBQU00SSwwQkFBUztBQUNyQjdILFdBQVU7QUFDVHNGLFVBQVEsTUFEQztBQUVUdkcsYUFBVztBQUNWQyxZQUFTLENBQ1IsQ0FBQyxNQUFELEVBQVMsUUFBVCxFQUFtQixVQUFuQixFQUErQixNQUEvQixFQUF1QyxRQUF2QyxFQUFpRCxTQUFqRCxFQUE0RCxZQUE1RCxDQURRLEVBRVIsRUFGUSxDQURDO0FBS1ZDLGdCQUFhLENBQ1osQ0FBQyxNQUFELEVBQVMsUUFBVCxFQUFtQixVQUFuQixFQUErQixNQUEvQixFQUF1QyxRQUF2QyxFQUFpRCxTQUFqRCxFQUE0RCxZQUE1RCxDQURZO0FBTEg7QUFGRjtBQURXLEVBQWYsQzs7Ozs7Ozs7Ozs7QUNBQSxLQUFNNEksMEJBQVM7QUFDckI3SCxXQUFVO0FBQ1RzRixVQUFRLE1BREM7O0FBR1RuRyxvQkFBa0I7QUFDakJILFlBQVM7QUFDUkksWUFBUSxDQUFDLFNBQUQ7QUFEQTtBQURRLElBSFQ7QUFRVEwsYUFBVztBQUNWQyxZQUFTLENBQ1IsQ0FBQyxNQUFELEVBQVMsVUFBVCxFQUFxQixNQUFyQixFQUE2QixRQUE3QixFQUF1QyxRQUF2QyxFQUFpRCxZQUFqRCxDQURRLENBREM7QUFJVkMsZ0JBQWEsQ0FDWixDQUFDLE1BQUQsRUFBUyxVQUFULEVBQXFCLE1BQXJCLEVBQTZCLFFBQTdCLEVBQXVDLFFBQXZDLEVBQWlELFlBQWpELENBRFksQ0FKSDtBQU9WQyxVQUFPLENBQ04sQ0FBQyxNQUFELEVBQVMsVUFBVCxFQUFxQixRQUFyQixFQUErQixZQUEvQixDQURNO0FBUEc7QUFSRjtBQURXLEVBQWYsQyIsImZpbGUiOiJsZS1wbGF5ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9qcy9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA2YWQyN2UyYzViYmQwMDliYzk2MCIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuXG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL2NvbXBvbmVudHMvQ29udHJvbCc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9Db21wb25lbnQnO1xuaW1wb3J0IFBsYXlCdXR0b24gZnJvbSAnLi9jb21wb25lbnRzL1BsYXlCdXR0b24nO1xuaW1wb3J0IFNwbGFzaEljb24gZnJvbSAnLi9jb21wb25lbnRzL1NwbGFzaEljb24nO1xuXG5pbXBvcnQgSWNvbiBmcm9tICcuL2NvbXBvbmVudHMvSWNvbic7XG5pbXBvcnQgVGltZSBmcm9tICcuL2NvbXBvbmVudHMvVGltZWxpbmUvVGltZSc7XG5pbXBvcnQgQ29udHJvbENvbGxlY3Rpb24gZnJvbSAnLi9jb21wb25lbnRzL0NvbnRyb2xDb2xsZWN0aW9uJztcbmltcG9ydCBTZWN0aW9ucyBmcm9tICcuL2NvbXBvbmVudHMvU2VjdGlvbnMnO1xuaW1wb3J0IEVycm9yRGlzcGxheSBmcm9tICcuL2NvbXBvbmVudHMvRXJyb3JEaXNwbGF5JztcbmltcG9ydCBQb3N0ZXIgZnJvbSAnLi9jb21wb25lbnRzL1Bvc3Rlcic7XG5pbXBvcnQgRnVsbHNjcmVlbkFwaSBmcm9tICcuL0Z1bGxzY3JlZW5BcGknO1xuXG5pbXBvcnQgeyBjcmVhdGVFbCwgc2Vjb25kc1RvVGltZSwgbm9vcCB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHtcblx0SVNfQU5EUk9JRF9QSE9ORSxcblx0SVNfQU5EUk9JRCxcblx0SVNfSVBPRCxcblx0SVNfSVBIT05FLFxuXHRJU19NT0JJTEUsXG5cdElTX1RPVUNIXG59IGZyb20gJy4vdXRpbHMvYnJvd3Nlcic7XG5cbmltcG9ydCBDb29raWUgZnJvbSAnLi91dGlscy9jb29raWUnO1xuXG5pbXBvcnQgTWVkaWFFcnJvciBmcm9tICcuL01lZGlhRXJyb3InO1xuXG4vLyBSZWdpc3RlciBjb21tb24gY29udHJvbHNcbmltcG9ydCAnLi9jb21wb25lbnRzL1BsYXlDb250cm9sJztcbmltcG9ydCAnLi9jb21wb25lbnRzL1ZvbHVtZUNvbnRyb2wnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvVGltZWxpbmUvVGltZWxpbmVDb250cm9sJztcbmltcG9ydCAnLi9jb21wb25lbnRzL1NlY3Rpb25Db250cm9sJztcbmltcG9ydCAnLi9jb21wb25lbnRzL0Z1bGxzY3JlZW5Db250cm9sJztcbmltcG9ydCAnLi9jb21wb25lbnRzL1JhdGVDb250cm9sJztcbmltcG9ydCAnLi9jb21wb25lbnRzL0JhY2t3YXJkQ29udHJvbCc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9Tb3VyY2VDb250cm9sJztcbmltcG9ydCAnLi9jb21wb25lbnRzL1N1YnRpdGxlQ29udHJvbCc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9Eb3dubG9hZENvbnRyb2wnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvS2V5YmluZGluZ0luZm9Db250cm9sJztcbmltcG9ydCAnLi9jb21wb25lbnRzL1RpbWVJbmZvQ29udHJvbCc7XG5cbmltcG9ydCAnLi9lbnRpdHkvSHRtbDUnO1xuXG5pbXBvcnQgJ2FycmF5LnByb3RvdHlwZS5maW5kJztcblxuXG5Db250cm9sLnJlZ2lzdGVyQ29udHJvbCgnZGl2aWRlcicsIGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4ge1xuXHRcdGVsZW1lbnQgOiAkKCc8ZGl2Lz4nKS5hZGRDbGFzcygnZGl2aWRlcicpXG5cdH07XG59KTtcblxuXG5cbi8qKlxuICogUmV0dXJuIGFycmF5IHdpdGggZXhjbHVkZWQgZGlzdCdzIGl0ZW1zIGZyb20gc291cmNlIGFycmF5XG4gKlxuICogQGFjY2VzcyBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBzb3VyY2VcbiAqIEBwYXJhbSB7QXJyYXl9IGRpc3RcbiAqIEByZXR1cm4ge0FycmF5fVxuICovXG5mdW5jdGlvbiBleGNsdWRlQXJyYXkoc291cmNlLCBkaXN0KSB7XG5cdGNvbnN0IHJlc3VsdCA9IFtdLmNvbmNhdChzb3VyY2UpO1xuXHRkaXN0LmZvckVhY2goaXRlbSA9PiB7XG5cdFx0Y29uc3QgaW5kZXggPSByZXN1bHQuaW5kZXhPZihpdGVtKTtcblx0XHRpZiAoaW5kZXggPiAtMSkge1xuXHRcdFx0cmVzdWx0LnNwbGljZShpbmRleCwgMSk7XG5cdFx0XHRyZXR1cm5cblx0XHR9XG5cdH0pXG5cblx0cmV0dXJuIHJlc3VsdDtcbn1cblxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG5cdGVudGl0eSA6ICdIdG1sNScsXG5cdGF1dG9wbGF5IDogZmFsc2UsXG5cdGhlaWdodCA6ICdhdXRvJyxcblx0bG9vcCA6IGZhbHNlLFxuXHRtdXRlZCA6IGZhbHNlLFxuXHRwcmVsb2FkIDogJ21ldGFkYXRhJyxcblx0cG9zdGVyIDogbnVsbCxcblx0c3ZnUGF0aCA6ICcnLFxuXHRpbm5hY3Rpdml0eVRpbWVvdXQgOiA1MDAwLFxuXHRyYXRlIDoge1xuXHRcdHN0ZXAgOiAwLjI1LFxuXHRcdG1pbiA6IDAuNSxcblx0XHRtYXggOiA0LjAsXG5cdFx0ZGVmYXVsdCA6IDFcblx0fSxcblx0cGxheWJhY2sgOiB7XG5cdFx0c3RlcCA6IHtcblx0XHRcdHNob3J0IDogNSxcblx0XHRcdG1lZGl1bSA6IDEwLFxuXHRcdFx0bG9uZyA6IDMwXG5cdFx0fVxuXHR9LFxuXHRjb250cm9scyA6IHtcblx0XHRjb21tb24gOiBbXG5cdFx0XHRbJ3BsYXknLCAndm9sdW1lJywgJ2RpdmlkZXInLCAndGltZWxpbmUnLCAgJ2RpdmlkZXInLCAnc2VjdGlvbicsICdkaXZpZGVyJywgJ2Z1bGxzY3JlZW4nXSxcblx0XHRcdFsncmF0ZScsICdkaXZpZGVyJywgJ2JhY2t3YXJkJywgJ2RpdmlkZXInLCAnc291cmNlJywgJ2RpdmlkZXInLCAnc3VidGl0bGUnLCAnZGl2aWRlcicsICdkb3dubG9hZCcsICdkaXZpZGVyJywgJ2tleWJpbmRpbmcgaW5mbyddXG5cdFx0XSxcblx0XHRmdWxsc2NyZWVuIDogW1xuXHRcdFx0WydwbGF5JywgJ3ZvbHVtZScsICdkaXZpZGVyJywgJ3RpbWVsaW5lJywgJ2RpdmlkZXInLCAncmF0ZScsICdkaXZpZGVyJywgJ2tleWJpbmRpbmcgaW5mbycsICAnZGl2aWRlcicsICdiYWNrd2FyZCcsICdkaXZpZGVyJywgJ3NvdXJjZScsICdkaXZpZGVyJywgJ3N1YnRpdGxlJywgJ2RpdmlkZXInLCAnZG93bmxvYWQnLCAnZGl2aWRlcicsICdzZWN0aW9uJywgJ2RpdmlkZXInLCAnZnVsbHNjcmVlbiddXG5cdFx0XSxcblx0XHRtaW5pIDogW1xuXHRcdFx0WydwbGF5JywgJ3ZvbHVtZScsICdkaXZpZGVyJywgJ2Z1bGxzY3JlZW4nLCAnZGl2aWRlcicsICd0aW1laW5mbyddXG5cdFx0XSxcblx0XHQnY29tbW9uOmFuZHJvaWQnIDogW1xuXHRcdFx0WydwbGF5JywgJ3RpbWVsaW5lJywgJ2Z1bGxzY3JlZW4nXSxcblx0XHRcdFsncmF0ZScsICdzb3VyY2UnLCAnc2VjdGlvbiddXG5cdFx0XSxcblx0XHQnZnVsbHNjcmVlbjptb2JpbGUnIDogW1xuXHRcdFx0WydwbGF5JywgJ3RpbWVsaW5lJywgJ2Z1bGxzY3JlZW4nXSxcblx0XHRcdFsncmF0ZScsICdzb3VyY2UnLCAnc2VjdGlvbiddXG5cdFx0XSxcblx0XHQnY29tbW9uOmlvcycgOiBbXG5cdFx0XHRbJ3BsYXknLCAncmF0ZScsICd0aW1lbGluZScsICdzb3VyY2UnXVxuXHRcdF0sXG5cdH0sXG5cdGNvbnRyb2xzT3B0aW9ucyA6IHtcblxuXHRcdGNvbW1vbiA6IHtcblx0XHRcdGFsaWduIDogWydqdXN0aWZ5JywgJ2xlZnQnXSxcblx0XHRcdC8vIG1vYmlsZSA6IHRydWVcblx0XHR9LFxuXHRcdGZ1bGxzY3JlZW4gOiB7XG5cdFx0XHRhbGlnbiA6ICdqdXN0aWZ5J1xuXHRcdH0sXG5cdFx0J2NvbW1vbjphbmRyb2lkJyA6IHtcblx0XHRcdGFsaWduIDogWydqdXN0aWZ5JywgJ3JpZ2h0J11cblx0XHR9LFxuXG5cdFx0J2Z1bGxzY3JlZW46bW9iaWxlJyA6IHtcblx0XHRcdGFsaWduIDogWydqdXN0aWZ5JywgJ3JpZ2h0J11cblx0XHR9XG5cdH0sXG5cdHZvbHVtZSA6IHtcblx0XHRkZWZhdWx0IDogMC40LFxuXHRcdG11dGVsaW1pdCA6IDAuMDUsXG5cdFx0c3RlcCA6IDAuMVxuXHR9LFxuXHRrZXlCaW5kaW5nIDogW1xuXHRcdHtcblx0XHRcdGtleSA6IDMyLFxuXHRcdFx0aW5mbyA6IFsnU3BhY2UnXSxcblx0XHRcdGRlc2NyaXB0aW9uIDogJ9Cd0LDRh9Cw0YLRjCDQv9GA0L7QuNCz0YDRi9Cy0LDQvdC40LUgLyDQv9C+0YHRgtCw0LLQuNGC0Ywg0L3QsCDQv9Cw0YPQt9GDJyxcblx0XHRcdGZuIDogKHBsYXllcikgPT4ge1xuXHRcdFx0XHRwbGF5ZXIudmlkZW8udG9nZ2xlUGxheSgpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0a2V5IDogMzcsXG5cdFx0XHRpbmZvIDogWyfihpAnXSxcblx0XHRcdGRlc2NyaXB0aW9uIDogYNCf0LXRgNC10LzQvtGC0LDRgtGMINC90LAgMTAg0YHQtdC60YPQvdC0INC90LDQt9Cw0LRgLFxuXHRcdFx0Zm4gOiAocGxheWVyKSA9PiB7XG5cdFx0XHRcdHBsYXllci52aWRlby5jdXJyZW50VGltZSAtPSBwbGF5ZXIub3B0aW9ucy5wbGF5YmFjay5zdGVwLm1lZGl1bTtcblx0XHRcdFx0cGxheWVyLnNwbGFzaEljb24uc2hvdygndW5kbycpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0a2V5IDogMzksXG5cdFx0XHRpbmZvIDogWyfihpInXSxcblx0XHRcdGRlc2NyaXB0aW9uIDogYNCf0LXRgNC10LzQvtGC0LDRgtGMINC90LAgMTAg0YHQtdC60YPQvdC0INCy0L/QtdGA0ZHQtGAsXG5cdFx0XHRmbiA6IChwbGF5ZXIpID0+IHtcblx0XHRcdFx0cGxheWVyLnZpZGVvLmN1cnJlbnRUaW1lICs9IHBsYXllci5vcHRpb25zLnBsYXliYWNrLnN0ZXAubWVkaXVtO1xuXHRcdFx0XHRwbGF5ZXIuc3BsYXNoSWNvbi5zaG93KCdyZWRvJyk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHR7XG5cdFx0XHRzaGlmdEtleSA6IHRydWUsXG5cdFx0XHRpbmZvIDogWydTaGlmdCcsICfihpAnXSxcblx0XHRcdGRlc2NyaXB0aW9uIDogJ9Cf0LXRgNC10LnRgtC4INC90LAg0L/RgNC10LTRi9C00YPRidGD0Y4g0YHQtdC60YbQuNGOJyxcblx0XHRcdGtleSA6IDM3LFxuXHRcdFx0Zm4gOiAocGxheWVyKSA9PiB7XG5cdFx0XHRcdGlmKHBsYXllci5zZWN0aW9ucyA9PSBudWxsKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHBsYXllci5zZWN0aW9ucy5wcmV2KCk7XG5cblx0XHRcdH1cblx0XHR9LFxuXHRcdHtcblx0XHRcdHNoaWZ0S2V5IDogdHJ1ZSxcblx0XHRcdGtleSA6IDM5LFxuXHRcdFx0aW5mbyA6IFsnU2hpZnQnLCAn4oaSJ10sXG5cdFx0XHRkZXNjcmlwdGlvbiA6ICfQn9C10YDQtdC50YLQuCDQvdCwINGB0LvQtdC00YPRjtGJ0YPRjiDRgdC10LrRhtC40Y4nLFxuXHRcdFx0Zm4gOiAocGxheWVyKSA9PiB7XG5cdFx0XHRcdGlmKHBsYXllci5zZWN0aW9ucyA9PSBudWxsKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHBsYXllci5zZWN0aW9ucy5uZXh0KClcblx0XHRcdH1cblx0XHR9LFxuXHRcdHtcblx0XHRcdGtleSA6IDM4LFxuXHRcdFx0aW5mbyA6IFsn4oaRJ10sXG5cdFx0XHRkZXNjcmlwdGlvbiA6ICfQo9Cy0LXQu9C40YfQuNGC0Ywg0LPRgNC+0LzQutC+0YHRgtGMJyxcblx0XHRcdGZuIDogKHBsYXllcikgPT4ge1xuXHRcdFx0XHRwbGF5ZXIudmlkZW8udm9sdW1lICs9IHBsYXllci5vcHRpb25zLnZvbHVtZS5zdGVwO1xuXG5cdFx0XHRcdHBsYXllci5zcGxhc2hJY29uLnNob3cocGxheWVyLmNhbGNWb2x1bWVJY29uKHBsYXllci52aWRlby52b2x1bWUpKTtcblxuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHR7XG5cdFx0XHRrZXkgOiA0MCxcblx0XHRcdGluZm8gOiBbJ+KGkyddLFxuXHRcdFx0ZGVzY3JpcHRpb24gOiAn0KPQvNC10L3RjNGI0LjRgtGMINCz0YDQvtC80LrQvtGB0YLRjCcsXG5cdFx0XHRmbiA6IChwbGF5ZXIpID0+IHtcblx0XHRcdFx0cGxheWVyLnZpZGVvLnZvbHVtZSAtPSBwbGF5ZXIub3B0aW9ucy52b2x1bWUuc3RlcDtcblxuXHRcdFx0XHRwbGF5ZXIuc3BsYXNoSWNvbi5zaG93KHBsYXllci5jYWxjVm9sdW1lSWNvbihwbGF5ZXIudmlkZW8udm9sdW1lKSk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdHtcblx0XHRcdGtleSA6IDcwLFxuXHRcdFx0aW5mbyA6IFsnZiddLFxuXHRcdFx0ZGVzY3JpcHRpb24gOiAn0J7RgtC60YDRi9GC0Ywv0LfQsNC60YDRi9GC0Ywg0L/QvtC70L3QvtGN0LrRgNCw0L3Ri9C5INGA0LXQttC40LwnLFxuXHRcdFx0Zm4gOiAocGxheWVyKSA9PiB7XG5cdFx0XHRcdHBsYXllci50b2dnbGVGdWxsc2NyZWVuKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRdLFxuXHRwbHVnaW5zIDoge1xuXHRcdG1pbmlwbGF5ZXIgOiB7fVxuXHR9LFxuXHRvblBsYXllckluaXRlZCA6IG5vb3Bcbn07XG5cbi8qKlxuICogQGNsYXNzIFBsYXllclxuICogQGV4dGVuZHMgQ29tcG9uZW50XG4gKiBAcGFyYW0ge2pRdWVyeX0gZWxlbWVudCBFbGVtZW50IHdoZW4gcGxheWVyIHdpbGwgaW5pdFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5hdXRvcGxheT1mYWxzZV1cbiAqIFdoZW4gcHJlc2VudCwgdGhlIHZpZGVvIHdpbGwgYXV0b21hdGljYWxseSBzdGFydCBwbGF5aW5nIGFzIHNvb24gYXMgaXQgY2FuIGRvIHNvIHdpdGhvdXQgc3RvcHBpbmcuXG4gKiBAcGFyYW0ge1N0cmluZ3xOdW1iZXJ9IFtvcHRpb25zLmhlaWdodD0nYXV0byddIEhlaWdodCBvZiB2aWRlbyBjb250YWluZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy53aWR0aF0gV2lkdGggb2YgdmlkZW8gY29udGFpbmVyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmxvb3A9ZmFsc2VdXG4gKiBXaGVuIHByZXNlbnQsIGl0IHNwZWNpZmllcyB0aGF0IHRoZSB2aWRlbyB3aWxsIHN0YXJ0IG92ZXIgYWdhaW4sIGV2ZXJ5IHRpbWUgaXQgaXMgZmluaXNoZWQuXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLm11dGVkPWZhbHNlXVxuICogV2hlbiBwcmVzZW50LCBpdCBzcGVjaWZpZXMgdGhhdCB0aGUgYXVkaW8gb3V0cHV0IG9mIHRoZSB2aWRlbyBzaG91bGQgYmUgbXV0ZWQuXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMucHJlbG9hZD0nbWV0YWRhdGEnXSBDYW4gYmUgKCdhdXRvJ3wnbWV0YWRhdGEnfCdub25lJylcbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5wb3N0ZXJdIFBhdGggdG8gcG9zdGVyIG9mIHZpZGVvXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuc3ZnUGF0aF0gUGF0aCB0byBzdmcgc3ByaXRlIGZvciBpY29uc1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLnJhdGVdIFJhdGUgb3B0aW9uc1xuICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLnJhdGUuc3RlcD0wLjI1XSBTdGVwIG9mIGluY3JlYXNlL2RlY3JlYXNlIGJ5IHJhdGUgY29udHJvbFxuICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLnJhdGUubWluPTAuNV0gTWluIG9mIHJhdGVcbiAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5yYXRlLm1heD00LjBdIE1heCBvZiByYXRlXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMucmF0ZS5kZWZhdWx0PTFdXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMucGxheWJhY2tdIFBsYXliYWNrIG9wdGlvbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5wbGF5YmFjay5zdGVwXVxuICogQHBhcmFtIHtOdWJtZXJ9IFtvcHRpb25zLnBsYXliYWNrLnN0ZXAuc2hvcnQ9NV1cbiAqIEBwYXJhbSB7TnVibWVyfSBbb3B0aW9ucy5wbGF5YmFjay5zdGVwLm1lZGl1bT0zMF1cbiAqIEBwYXJhbSB7TnVibWVyfSBbb3B0aW9ucy5wbGF5YmFjay5zdGVwLmxvbmc9NjBdXG4gKiBAcGFyYW0ge09iZWpjdH0gW29wdGlvbnMuY29udHJvbHNdIE9iamVjdCBvZiBjb250cm9sc1xuICogQHBhcmFtIHtTdHJpbmdbXX0gW29wdGlvbnMuY29udHJvbHMuY29tbW9uXSBBcnJheSBvZiBjb250cm9scyBmb3IgZGVmYXVsdCB2aWV3XG4gKiBAcGFyYW0ge1N0cmluZ1tdfSBbb3B0aW9ucy5jb250cm9scy5mdWxsc2NyZWVuXSBBcnJheSBvZiBjb250cm9sIGZvciBmdWxsc3JlZW4gdmlld1xuICogQHBhcmFtIHtTdHJpbmdbXX0gW29wdGlvbnMuY29udHJvbHMubWluaV0gQXJyYXkgb2YgY29udHJvbCBmb3IgbWluaXBsYXllclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLmV4Y2x1ZGVDb250cm9sc10gT2JqZWN0IG9mIGV4Y2x1ZGUgY29udHJvbHMuIFN0cnVjdHVyZSBpcyB0aGUgc2FtZSBhcyB0aGF0IG9mIG9wdGlvbnMuY29udHJvbHNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy52b2x1bWVdIFZvbHVtZSdzIG9wdGlvbnNcbiAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy52b2x1bWUuZGVmYXVsdD0wLjRdIERlZmF1bHQgdm9sdW1lXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMudm9sdW1lLm11dGVsaW1pdD0wLjA1XSBEZWx0YSB3aGVuIHZvbHVtZSBpcyBtdXRlZFxuICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLnZvbHVtZS5zdGVwPTAuMDVdXG4gKiBAcGFyYW0ge09iamVjdFtdfSBbb3B0aW9ucy5rZXliaW5kaW5nXVxuICogT2JqZWN0IHdpdGgga2V5YmluZGluZyBvcHRpb25zLCB3aGVuIGtleSBpdCdzIG5hbWUgb2Yga2V5IGJpbmRpbmcsIGFuZCB2YWx1ZSBpdCdzIGtleSBiaW5kaW5nIHNldHRpbmdzXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMua2V5YmluZGluZ1tdLmtleV0gQ29kZSBvZiBrZXkgYmluZGluZyAoZm9yIGV4YW1wbGUgMzIgaXQncyBzcGFjZSlcbiAqIEBwYXJhbSB7U3RyaW5nW119IFtvcHRpb25zLmtleWJpbmRpbmdbXS5pbmZvXSBBcnJheSBvZiBrZXlzdHJva2VzIG9yZGVyXG4gKiBAcGFyYW0ge1N0cmluZ30gb3B0aW9ucy5rZXliaW5kaW5nW10uZGVzY3JpcHRpb25dIERlc2NyaXB0aW9uIG9mIGtleSBiaW5kaW5nXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBvcHRpb25zLmtleWJpbmRpbmdbXS5mbl0gQ2FsbGJhY2tcbiAqIEBwYXJhbSB7T2JqZWN0fEJvb2xlYW59IFtvcHRpb25zLm1pbmlwbGF5ZXI9ZmFsc2VdXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMubWluaXBsYXllci53aWR0aF0gV2lkdGggb2YgbWluaXBsYXllciBjb250YWluZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5taW5pcGxheWVyLndpZHRoXSBNaW5pUGxheWVyJ3Mgd2lkdGhcbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5zZWN0aW9uQ29udGFpbmVyXSBTZWxlY3RvciBmb3Igc2VjdGlvbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5wbHVnaW5zXSBLZXlzIG9mIG9iamVjdHMgYXJlIG5hbWUgb2YgcGx1Z2luLCB2YWx1ZSAtIHBsdWdpbiBvcHRpb25zXG4gKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9IFtvcHRpb25zLmRhdGFdIFVybCBvciBKU09OIHdpdGggZGF0YSBmb3IgcGxheWVyXG4gKiBAcGFyYW0ge0FycmF5fSBbb3B0aW9ucy5kYXRhLnNlY3Rpb25zXSBTZWN0aW9ucyBhcnJheVxuICovXG5cbmNsYXNzIFBsYXllciBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKGVsZW1lbnQsIG9wdGlvbnMpIHtcblxuXHRcdG9wdGlvbnMuY3JlYXRlRWxlbWVudCA9IGZhbHNlO1xuXG5cdFx0c3VwZXIobnVsbCwgb3B0aW9ucyk7XG5cblx0XHR0aGlzLl9lbGVtZW50ID0gZWxlbWVudDtcblxuXHRcdC8qKlxuXHRcdCAqIERPTSBjb250YWluZXIgdG8gaG9sZCBpbm5lciBvZiBwbGF5ZXJcblx0XHQgKlxuXHRcdCAqIEBtZW1iZXJvZiEgUGxheWVyI1xuXHRcdCAqIEB0eXBlIHtqUXVlcnl9XG5cdFx0ICovXG5cdFx0dGhpcy5pbm5lckVsZW1lbnQgPSBjcmVhdGVFbCgnZGl2Jyk7XG5cblx0XHQvLyBVc2VycyBvcHRpb25zXG5cdFx0dGhpcy5fdXNlck9wdGlvbnMgPSBvcHRpb25zO1xuXHRcdHRoaXMuX2luaXRPcHRpb25zKCk7XG5cblx0XHRpZih0aGlzLm9wdGlvbnMuc3ZnUGF0aCA9PT0gJycpIHtcblx0XHRcdFBsYXllci5fbG9hZFNWR1Nwcml0ZShQbGF5ZXIuZGVmYXVsdFNwcml0ZSk7XG5cdFx0fVxuXG5cdFx0dGhpcy5fdmlldyA9ICdjb21tb24nO1xuXG5cdFx0LyoqXG5cdFx0ICogRE9NIGNvbnRhaW5lciB0byBob2xkIGFsbCBwbGF5ZXJcblx0XHQgKlxuXHRcdCAqIEBtZW1iZXJvZiEgUGxheWVyI1xuXHRcdCAqIEB0eXBlIHtqUXVlcnl9XG5cdFx0ICovXG5cdFx0dGhpcy5lbGVtZW50ID0gdGhpcy5jcmVhdGVFbGVtZW50KCk7XG5cblx0XHR0aGlzLmxvYWRFbnRpdHkodGhpcy5vcHRpb25zLmVudGl0eSwgeyBjdHggOiBlbGVtZW50IH0pO1xuXHRcdC8qKlxuXHRcdCAqIFZpZGVvIGh0bWw1IGNvbXBvbmVudFxuXHRcdCAqXG5cdFx0ICogQG1lbWJlcm9mISBQbGF5ZXIjXG5cdFx0ICogQHR5cGUge0VudGl0eX1cblx0XHQgKi9cblx0XHR0aGlzLnZpZGVvID0gdGhpcy5lbnRpdHk7XG5cblx0XHQvLyBDcmVhdGUgY29udHJvbHNcblx0XHQvLyBUT0RPOiBtb3ZlIHRoaXMgYWN0aW9uIHRvIHRoZSBjcmVhdGVFbGVtZW50XG5cdFx0dGhpcy5jb250cm9scyA9IHt9O1xuXHRcdHRoaXMuX2luaXRDb250cm9scygpO1xuXG5cdFx0LyoqXG5cdFx0ICogQGFjY2VzcyBwcml2YXRlXG5cdFx0ICovXG5cdFx0dGhpcy5fZGJsY2xpY2tUaW1lb3V0ID0gbnVsbDtcblxuXHRcdHRoaXMuX2luaXRTZWN0aW9ucygpLnRoZW4oKGRhdGEpID0+IHtcblx0XHRcdC8qKlxuXHRcdFx0ICogU2VjdGlvbnMgaW5pdCBldmVudFxuXHRcdFx0ICpcblx0XHRcdCAqIEBldmVudCBQbGF5ZXIjc2VjdGlvbnNpbml0XG5cdFx0XHQgKiBAZXhhbXBsZVxuXHRcdFx0ICogY29uc3QgcGxheWVyID0gbmV3IFBsYXllcigkKCcjdmlkZW8nKSwgb3B0aW9ucyk7XG5cdFx0XHQgKiBwbGF5ZXIub24oJ3NlY3Rpb25zaW5pdCcsIChlLCBkYXRhKSA9PiBjb3Nub2xlLmxvZyhkYXRhKSk7XG5cdFx0XHQgKlxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLnRyaWdnZXIoJ3NlY3Rpb25zaW5pdCcsIGRhdGEpO1xuXHRcdH0pO1xuXHRcdHRoaXMuX2luaXRQbHVnaW5zKCk7XG5cblx0XHR0aGlzLl9saXN0ZW5Ib3RLZXlzKCk7XG5cblx0XHR0aGlzLl91c2VyQWN0aXZpdHkgPSBmYWxzZTtcblx0XHR0aGlzLl9saXN0ZW5Vc2VyQWN0aXZpdHkoKTtcblxuXHRcdHRoaXMuX3dhaXRpbmdUaW1lb3V0cyA9IFtdO1xuXG5cdFx0LyogUmV0cmlnZ2VyIHtAbGluayBFbnRpdHl9IEV2ZW50cyAqL1xuXHRcdFtcblx0XHRcdC8qKlxuXHRcdFx0ICogZHVyYXRpb25jaGFuZ2UgcGxheWVyIGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciNkdXJhdGlvbmNoYW5nZVxuXHRcdFx0ICovXG5cdFx0XHQnZHVyYXRpb25jaGFuZ2UnLFxuXG5cdFx0XHQvKipcblx0XHRcdCAqIHByb2dyZXNzIGh0bWw1IG1lZGlhIGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciNwcm9ncmVzc1xuXHRcdFx0ICovXG5cdFx0XHQncHJvZ3Jlc3MnLFxuXG5cdFx0XHQvKipcblx0XHRcdCAqIGRibGNsaWNrXG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciNkYmNsaWNrXG5cdFx0XHQgKi9cblx0XHRcdCdkYmxjbGljaycsXG5cblx0XHRcdC8qKlxuXHRcdFx0ICogZGJsY2xpY2tcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI2RiY2xpY2tcblx0XHRcdCAqL1xuXHRcdFx0J2NsaWNrJyxcblxuXG5cdFx0XHQvKipcblx0XHRcdCAqIGNhbnBsYXkgaHRtbDUgbWVkaWEgZXZlbnRcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI2NhbnBsYXlcblx0XHRcdCAqL1xuXHRcdFx0J2NhbnBsYXknLFxuXG5cdFx0XHQvKipcblx0XHRcdCAqIHF1YWxpdHljaGFuZ2UgaHRtbDVcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI3F1YWxpdHljaGFuZ2Vcblx0XHRcdCAqL1xuXHRcdFx0J3F1YWxpdHljaGFuZ2UnLFxuXG5cdFx0XHQvKipcblx0XHRcdCAqIHF1YWxpdHljaGFuZ2UgaHRtbDVcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI3RyYWNrc2NoYW5nZVxuXHRcdFx0ICovXG5cdFx0XHQndHJhY2tzY2hhbmdlJyxcblxuXG5cblx0XHRdLmZvckVhY2goZXZlbnROYW1lID0+IHtcblx0XHRcdHRoaXMudmlkZW8ub24oZXZlbnROYW1lLCAoKSA9PiB7XG5cdFx0XHRcdHRoaXMudHJpZ2dlcihldmVudE5hbWUpO1xuXHRcdFx0fSlcblx0XHR9KTtcblxuXHRcdHRoaXMudmlkZW8ub25lKCdwbGF5JywgKCkgPT4ge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBGaXJzdCBwbGF5IGV2ZW50XG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQGV2ZW50IFBsYXllciNmaXJzdHBsYXlcbiAgICAgICAgICAgICAqL1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdmaXJzdHBsYXknKTtcblx0XHRcdHRoaXMucmVtb3ZlQ2xhc3MoJ2xlcGxheWVyLS12aXJnaW4nKTtcblx0XHR9KTtcblxuXHRcdHRoaXMudmlkZW8ub24oJ3RpbWV1cGRhdGUnLCAoKSA9PiB7XG5cdFx0XHRpZiAodGhpcy52aWRlby5jdXJyZW50VGltZSA+IDApIHtcblx0XHRcdFx0dGhpcy5yZW1vdmVDbGFzcygnbGVwbGF5ZXItLXZpcmdpbicpO1xuXHRcdFx0fVxuXG5cdFx0XHQvKipcblx0XHRcdCAqIHRpbWV1cGRhdGUgaHRtbDUgbWVkaWEgZXZlbnRcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI3RpbWV1cGRhdGVcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy50cmlnZ2VyKCd0aW1ldXBkYXRlJywgeyB0aW1lIDogdGhpcy52aWRlby5jdXJyZW50VGltZSwgZHVyYXRpb24gOiB0aGlzLnZpZGVvLmR1cmF0aW9uIH0pO1xuXG5cdFx0fSlcblxuXHRcdHRoaXMudmlkZW8ub24oJ2xvYWRzdGFydCcsICgpID0+IHtcblx0XHRcdHRoaXMucmVtb3ZlQ2xhc3MoJ2xlcGxheWVyLS1lbmRlZCcpO1xuXG5cdFx0XHR0aGlzLmVycm9yID0gbnVsbDtcblx0XHRcdC8qKlxuXHRcdFx0ICogbG9hZHN0YXJ0IHBsYXllciBldmVudFxuXHRcdFx0ICpcblx0XHRcdCAqIEBldmVudCBQbGF5ZXIjbG9hZHN0YXJ0XG5cdFx0XHQgKi9cblx0XHRcdHRoaXMudHJpZ2dlcignbG9hZHN0YXJ0Jyk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLnZpZGVvLm9uKCdzZWVraW5nJywgKCkgPT4ge1xuXHRcdFx0dGhpcy5fc3RhcnRXYWl0aW5nKCk7XG5cdFx0XHQvKipcblx0XHRcdCAqIHNlZWtpbmcgaHRtbDUgbWVkaWEgZXZlbnRcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI3NlZWtpbmdcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdzZWVraW5nJyk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLnZpZGVvLm9uKCdzZWVrZWQnLCAoKSA9PiB7XG5cdFx0XHR0aGlzLl9zdG9wV2F5dGluZygpO1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBzZWVrZWQgaHRtbDUgbWVkaWEgZXZlbnRcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI3NlZWtlZFxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLnRyaWdnZXIoJ3NlZWtlZCcpO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy52aWRlby5vbigndm9sdW1lY2hhbmdlJywgKCkgPT4ge1xuXHRcdFx0LyoqXG5cdFx0XHQgKiB2b2x1bWVjaGFuZ2UgaHRtbDUgbWVkaWEgZXZlbnRcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI3ZvbHVtZWNoYW5nZVxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLnRyaWdnZXIoJ3ZvbHVtZWNoYW5nZScsIHsgdm9sdW1lIDogdGhpcy52aWRlby52b2x1bWUgfSk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLnZpZGVvLm9uKCdwb3N0ZXJjaGFuZ2UnLCAoZSwgZGF0YSkgPT4ge1xuXHRcdFx0Y29uc3QgdXJsID0gZGF0YS51cmw7XG5cdFx0XHR0aGlzLnBvc3Rlci51cmwgPSB1cmw7XG5cdFx0XHR0aGlzLnRyaWdnZXIoJ3Bvc3RlcmNoYW5nZScpO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy52aWRlby5vbigncGxheScsIChlKSA9PiB7XG5cdFx0XHR0aGlzLnJlbW92ZUNsYXNzKCdsZXBsYXllci0tZW5kZWQnKTtcblx0XHRcdHRoaXMucmVtb3ZlQ2xhc3MoJ2xlcGxheWVyLS1wYXVzZWQnKTtcblx0XHRcdHRoaXMuYWRkQ2xhc3MoJ2xlcGxheWVyLS1wbGF5aW5nJyk7XG5cblx0XHRcdC8qKlxuXHRcdFx0ICogcGxheSBodG1sNSBtZWRpYSBldmVudFxuXHRcdFx0ICpcblx0XHRcdCAqIEBldmVudCBQbGF5ZXIjcGxheVxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLnRyaWdnZXIoJ3BsYXknKTtcblx0XHR9KTtcblxuXHRcdHRoaXMudmlkZW8ub24oJ3BhdXNlJywgKCkgPT4ge1xuXHRcdFx0dGhpcy5yZW1vdmVDbGFzcygnbGVwbGF5ZXItLXBsYXlpbmcnKTtcblx0XHRcdHRoaXMuYWRkQ2xhc3MoJ2xlcGxheWVyLS1wYXVzZWQnKTtcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBwYXVzZSBodG1sNSBtZWRpYSBldmVudFxuXHRcdFx0ICpcblx0XHRcdCAqIEBldmVudCBQbGF5ZXIjcGF1c2Vcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdwYXVzZScpO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy52aWRlby5vbigncGxheWluZycsICgpID0+IHtcblx0XHRcdHRoaXMuX3N0b3BXYXl0aW5nKCk7XG5cblx0XHRcdC8qKlxuXHRcdFx0ICogcGxheWluZyBodG1sNSBtZWRpYSBldmVudFxuXHRcdFx0ICpcblx0XHRcdCAqIEBldmVudCBQbGF5ZXIjcGxheWluZ1xuXHRcdFx0ICovXG5cdFx0XHR0aGlzLnRyaWdnZXIoJ3BsYXlpbmcnKTtcblx0XHR9KTtcblxuXHRcdHRoaXMudmlkZW8ub24oJ3JhdGVjaGFuZ2UnLCAoKSA9PiB7XG5cdFx0XHQvKipcblx0XHRcdCAqIHJhdGUgaHRtbDUgbWVkaWEgZXZlbnRcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI3JhdGVcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdyYXRlY2hhbmdlJywgeyByYXRlIDogdGhpcy52aWRlby5yYXRlIH0pO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy52aWRlby5vbignZW5kZWQnLCAoKSA9PiB7XG5cdFx0XHR0aGlzLmFkZENsYXNzKCdsZXBsYXllci0tZW5kZWQnKTtcblxuXHRcdFx0aWYodGhpcy5vcHRpb25zLmxvb3ApIHtcblx0XHRcdFx0dGhpcy5jdXJyZW50VGltZSA9IDA7XG5cdFx0XHRcdHRoaXMudmlkZW8ucGxheSgpO1xuXHRcdFx0fSBlbHNlIGlmICghdGhpcy52aWRlby5wYXVzZWQpIHtcblx0XHRcdFx0dGhpcy52aWRlby5wYXVzZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHQvKipcblx0XHRcdCAqIGVuZGVkIGh0bWw1IG1lZGlhIGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciNlbmRlZFxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLnRyaWdnZXIoJ2VuZGVkJyk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLnZpZGVvLm9uKCdjYW5wbGF5dGhyb3VnaCcsICgpID0+IHtcblx0XHRcdHRoaXMuX3N0b3BXYXl0aW5nKCk7XG5cdFx0XHQvKipcblx0XHRcdCAqIGNhbnBsYXl0aHJvdWdoIGh0bWw1IG1lZGlhIGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciNjYW5wbGF5dGhyb3VnaFxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLnRyaWdnZXIoJ2NhbnBsYXl0aHJvdWdoJyk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLnZpZGVvLm9uKCd3YWl0aW5nJywgKCkgPT4ge1xuXHRcdFx0dGhpcy5fc3RhcnRXYWl0aW5nKCk7XG5cblx0XHRcdHRoaXMudmlkZW8ub25lKCd0aW1ldXBkYXRlJywgKCkgPT4gdGhpcy5fc3RvcFdheXRpbmcoKSk7XG5cblx0XHRcdC8qKlxuXHRcdFx0ICogd2FpdGluZyBodG1sNSBtZWRpYSBldmVudFxuXHRcdFx0ICpcblx0XHRcdCAqIEBldmVudCBQbGF5ZXIjd2FpdGluZ1xuXHRcdFx0ICovXG5cdFx0XHR0aGlzLnRyaWdnZXIoJ3dhaXRpbmcnKTtcblx0XHR9KTtcblxuXHRcdHRoaXMudmlkZW8ub24oJ2Vycm9yJywgKGUsIGRhdGEpID0+IHtcblx0XHRcdHRoaXMuZXJyb3IgPSBuZXcgTWVkaWFFcnJvcihkYXRhLmNvZGUpO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy52aWRlby5pbml0KCkudGhlbigoKSA9PiB7XG5cdFx0XHQvKipcblx0XHRcdCAqIFBsYXllciBpbml0IGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciNpbml0ZWRcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdpbml0ZWQnKTtcblxuXHRcdFx0aWYodGhpcy5vcHRpb25zLnRpbWUpIHtcblx0XHRcdFx0dGhpcy5jdXJyZW50VGltZSA9IHRoaXMub3B0aW9ucy50aW1lO1xuXHRcdFx0fVxuXG5cdFx0XHRpZih0aGlzLnZpZGVvLnNyYyAhPSBudWxsICYmIHRoaXMub3B0aW9ucy5hdXRvcGxheSkge1xuXHRcdFx0XHR0aGlzLnBsYXkoKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXG5cdFx0dGhpcy5vbignZnVsbHNjcmVlbmNoYW5nZScsIHRoaXMuX29uRnVsbHNjcmVlbkNoYW5nZS5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLm9uKCdjbGljaycsIHRoaXMuX29uQ2xpY2suYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5vbignZGJsY2xpY2snLCB0aGlzLl9vbkRiY2xpY2suYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5vbignaW5pdGVkJywgdGhpcy5fb25Jbml0ZWQuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5vbigncGxheScsIHRoaXMuX29uUGxheS5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLm9uKCdwYXVzZScsIHRoaXMuX29uUGF1c2UuYmluZCh0aGlzKSk7XG5cblx0XHQkKGRvY3VtZW50KS5vbihGdWxsc2NyZWVuQXBpLmZ1bGxzY3JlZW5jaGFuZ2UsIHRoaXMuX29uRW50aXR5RnVsbHNjcmVuQ2hhbmdlLmJpbmQodGhpcykpO1xuXHR9XG5cblx0Z2V0IGVudGl0eSgpIHtcblx0XHRyZXR1cm4gdGhpcy5fZW50aXR5O1xuXHR9XG5cblx0bG9hZEVudGl0eShuYW1lLCBvcHRpb25zKSB7XG5cdFx0Y29uc3QgRW50aXR5ID0gUGxheWVyLmdldENvbXBvbmVudChuYW1lKTtcblx0XHR0aGlzLl9lbnRpdHkgPSBuZXcgRW50aXR5KHRoaXMsIG9wdGlvbnMpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFN0YXJ0cyBwbGF5aW5nIHRoZSB2aWRlb1xuXHQgKlxuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAZXhhbXBsZVxuXHQgKiBjb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyKCQoXCIjdmlkZW9cIiksb3B0aW9ucyk7XG5cdCAqICQoJy5zb21lLWJ1dHRvbicpLm9uKCdjbGljaycsICgpID0+IHBsYXllci5wbGF5KCkpO1xuXHQgKi9cblx0cGxheSgpIHtcblx0XHRyZXR1cm4gdGhpcy52aWRlby5wbGF5KCk7XG5cdH1cblxuXHQvKipcblx0ICogUGF1c2VzIHRoZSBjdXJyZW50bHkgcGxheWluZyB2aWRlb1xuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKi9cblx0cGF1c2UoKSB7XG5cdFx0cmV0dXJuIHRoaXMudmlkZW8ucGF1c2UoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBUb2dnbGUgdGhlIGN1cnJlbnRseSBwbGF5aW5nIHZpZGVvXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqL1xuXHR0b2dnbGVQbGF5KCkge1xuXHRcdHJldHVybiB0aGlzLnZpZGVvLnRvZ2dsZVBsYXkoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBCZWdpbiBsb2FkaW5nIHRoZSBzcmMgZGF0YVxuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKi9cblx0bG9hZCgpIHtcblx0XHRyZXR1cm4gdGhpcy52aWRlby5sb2FkKCk7XG5cdH1cblxuXHQvKipcblx0ICogT24gc2V0IHZpZXcgY2FsbGJhY2tcblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHBhcmFtIHtTdHJpbmd9IHZpZXcgVmlldyBuYW1lXG5cdCAqIEByZXR1cm5zIHtQbGF5ZXJ9IHRoaXNcblx0ICogQGV4YW1wbGVcblx0ICogY29uc3QgcGxheWVyID0gbmV3IFBsYXllcigkKCcjdmlkZW8nKSwgb3B0aW9ucyk7XG5cdCAqIHBsYXllci5vblNldFZpZXcoJ21pbmknLCAoKSA9PiBjb25zb2xlLmxvZygnTWluaXBsYXllciB5ZWFoIScpXG5cdCAqICAgICAub25TZXRWaWV3KCdmdWxsc2NyZWVuJywgKCkgPT4gY29uc29sZS5sb2coJ0Z1bGxzY3JlZW4gYm9vbSEnKVxuXHQgKiAgICAgLm9uU2V0VmlldygnY29tbW9uJywgKCkgPT4gY29uc29sZS5sb2coJ0NvbW1vbiB2aWV3IC0gbG9sJyk7XG5cdCAqL1xuXHRvblNldFZpZXcodmlldywgLi4uYXJncykge1xuXHRcdHRoaXMub24oYHNldHZpZXcuJHt2aWV3fWAsIC4uLmFyZ3MpO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvKipcblx0ICogQ2hhbmdlIHNvdXJjZSBhbmQgc2F2ZSB0aW1lLCByYXRlXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBxdWFsaXR5XG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBbcXVhbGl0eS50aXRsZV0gVGhlIG5hbWUgb2YgcXVhbGl0dXQgZS54IFNEIG9yIEhEXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBxdWFsaXR5LnVybFxuXHQgKi9cblx0Y2hhbmdlUXVhbGl0eShxdWFsaXR5KSB7XG5cdFx0Y29uc3QgdmlkZW8gPSB0aGlzLnZpZGVvO1xuXHRcdGlmKHF1YWxpdHkgPT0gbnVsbCkgcmV0dXJuO1xuXHRcdGNvbnN0IHRpbWUgPSB0aGlzLmN1cnJlbnRUaW1lO1xuXHRcdGNvbnN0IHJhdGUgPSB0aGlzLnJhdGU7XG5cdFx0Y29uc3QgaXNQYXVzZWQgPSB0aGlzLnBhdXNlZDtcblxuXHRcdHZpZGVvLnNyYyA9IHF1YWxpdHk7XG5cdFx0dGhpcy5wbGF5YmFja1JhdGUgPSByYXRlO1xuXHRcdHRoaXMuY3VycmVudFRpbWUgPSB0aW1lO1xuXG5cdFx0aWYoaXNQYXVzZWQpIHtcblx0XHRcdHRoaXMucGF1c2UoKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnBsYXkoKVxuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBPbiBkZWwgdmlldyBjYWxsYmFja1xuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAcGFyYW0ge1N0cmluZ30gdmlldyBWaWV3IG5hbWVcblx0ICogQHJldHVybnMge1BsYXllcn0gdGhpc1xuXHQgKiBAZXhhbXBsZVxuXHQgKiBjb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyKCQoJyN2aWRlbycpLCBvcHRpb25zKTtcblx0ICogcGxheWVyLm9uRGVsVmlldygnbWluaScsICgpID0+IGNvbnNvbGUubG9nKCdFeGl0IG1pbmlwbGF5ZXInKVxuXHQgKi9cblx0b25EZWxWaWV3KHZpZXcsIC4uLmFyZ3MpIHtcblx0XHR0aGlzLm9uKGBkZWx2aWV3LiR7dmlld31gLCAuLi5hcmdzKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBzb21lIGRhdGEgZm9yIHBsYXllclxuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAcmV0dXJucyB7alF1ZXJ5LnByb21pc2V9IFByb21pc2Vcblx0ICovXG5cdGdldERhdGEoKSB7XG5cdFx0Y29uc3QgZGZkID0gbmV3ICQuRGVmZXJyZWQoKTtcblxuXHRcdGlmICh0aGlzLl9kYXRhICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdGRmZC5yZXNvbHZlKHRoaXMuX2RhdGEpO1xuXHRcdFx0cmV0dXJuIGRmZC5wcm9taXNlKClcblx0XHR9XG5cblx0XHRpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5kYXRhID09PSAnc3RyaW5nJykge1xuXHRcdFx0cmV0dXJuICQuYWpheCh7XG5cdFx0XHRcdHVybCA6IHRoaXMub3B0aW9ucy5kYXRhLFxuXHRcdFx0XHRtZXRob2QgOiAnR0VUJyxcblx0XHRcdFx0ZGF0YVR5cGUgOiAnanNvbidcblx0XHRcdH0pLnByb21pc2UoKTtcblxuXHRcdH0gZWxzZSBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5kYXRhID09PSAnb2JqZWN0Jykge1xuXHRcdFx0ZGZkLnJlc29sdmUodGhpcy5vcHRpb25zLmRhdGEpO1xuXHRcdFx0cmV0dXJuIGRmZC5wcm9taXNlKClcblx0XHR9XG5cdH1cblxuXHRnZXRTZWN0aW9uRGF0YSgpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXREYXRhKClcblx0XHRcdC50aGVuKGRhdGEgPT4ge1xuXHRcdFx0XHRyZXR1cm4gZGF0YS5zZWN0aW9uc1xuXHRcdFx0fSlcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXF1ZXN0IGZ1bGxzY3JlZW5cblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQGZpcmVzIFBsYXllciNmdWxsc2NyZWVuY2hhbmdlXG5cdCAqL1xuXHRyZXF1ZXN0RnVsbHNjcmVlbigpIHtcblx0XHRjb25zdCBmc0FwaSA9IEZ1bGxzY3JlZW5BcGk7XG5cblx0XHRpZihmc0FwaS5yZXF1ZXN0RnVsbHNjcmVlbikge1xuXHRcdFx0Ly8gQ2FsbCBIVE1MNSBWaWRlbyBhcGkgcmVxdWVzdEZ1bGxzY3JlZW5cblx0XHRcdHRoaXMuZWxlbWVudFswXVtmc0FwaS5yZXF1ZXN0RnVsbHNjcmVlbl0oKTtcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBmdWxsc2NyZWVuY2hhbmdlIGh0bWw1IG1lZGlhIGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciNmdWxsc2NyZWVuY2hhbmdlXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMudHJpZ2dlcignZnVsbHNjcmVlbmNoYW5nZScsIHRydWUpO1xuXHRcdH0gZWxzZSBpZiAodGhpcy52aWRlby5zdXBwb3J0c0Z1bGxTY3JlZW4oKSkge1xuXHRcdFx0dGhpcy52aWRlby5lbnRlckZ1bGxzY3JlZW4oKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogRXhpdCBmdWxsc2NyZWVuXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBmaXJlcyBQbGF5ZXIjZnVsbHNjcmVlbmNoYW5nZVxuXHQgKi9cblx0ZXhpdEZ1bGxzY3JlZW4oKSB7XG5cdFx0Y29uc3QgZnNBcGkgPSBGdWxsc2NyZWVuQXBpO1xuXG5cdFx0aWYoZnNBcGkuZXhpdEZ1bGxzY3JlZW4pIHtcblx0XHRcdGRvY3VtZW50W2ZzQXBpLmV4aXRGdWxsc2NyZWVuXSgpO1xuXHRcdH0gZWxzZSBpZiAodGhpcy52aWRlby5zdXBwb3J0c0Z1bGxTY3JlZW4oKSkge1xuXHRcdFx0dGhpcy52aWRlby5leGl0RnVsbHNjcmVlbigpO1xuXHRcdH1cblxuXHRcdHRoaXMudHJpZ2dlcignZnVsbHNjcmVlbmNoYW5nZScsIGZhbHNlKTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIFRvZ2dsZSBmdWxsc2NyZWVuXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBmaXJlcyBQbGF5ZXIjZnVsbHNjcmVlbmNoYW5nZVxuXHQgKi9cblx0dG9nZ2xlRnVsbHNjcmVlbigpIHtcblx0XHRpZih0aGlzLnZpZXcgPT09ICdmdWxsc2NyZWVuJykge1xuXHRcdFx0dGhpcy5leGl0RnVsbHNjcmVlbigpXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucmVxdWVzdEZ1bGxzY3JlZW4oKVxuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgQ29udHJvbENvbGxlY3Rpb24gb2YgUGxheWVyIGJ5IG5hbWUgKGUueCAnY29tbW9uJywgJ2Z1bGxzY3JlZW4nKVxuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSAtIE5hbWUgb2YgQ29udHJvbENvbGxlY3Rpb25cblx0ICogQHJldHVybnMge0NvbnRyb2xDb2xsZWN0aW9ufVxuXHQgKi9cblx0Z2V0Q29udHJvbHMobmFtZSkge1xuXHRcdHJldHVybiB0aGlzLmNvbnRyb2xzW25hbWVdO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybiB0aGUgd2lkdGggb2YgcGxheWVyLlxuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAcmV0dXJucyB7TnVtYmVyfSBXaWR0aCBpbiBweFxuXHQgKi9cblx0Z2V0V2lkdGgoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudC53aWR0aCgpXG5cdH1cblxuXHQvKipcblx0ICogQ29tcGxldGUgdGhlIHNlY3Rpb25zLCBieSB0aGUgYWRkaXRpb25hbCBmaWVsZCAnZW5kJyBpbiBlYWNoIHNlY3Rpb25cblx0ICpcblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBzZWN0aW9ucyAtIFNlY3Rpb25zXG5cdCAqIEByZXR1cm5zIHtPYmplY3R9IE5ldyBzZWN0aW9uc1xuXHQgKi9cblx0X2NvbXBsZXRlU2VjdGlvbnMoc2VjdGlvbnMpIHtcblx0XHRpZiAoc2VjdGlvbnMgPT0gbnVsbCB8fCBzZWN0aW9ucy5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVyblxuXHRcdH1cblx0XHRsZXQgbmV3U2VjdGlvbnMgPSBbXS5jb25jYXQoc2VjdGlvbnMpXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBuZXdTZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuXHRcdFx0bGV0IGVuZFNlY3Rpb247XG5cdFx0XHRpZiAoaSA8IChuZXdTZWN0aW9ucy5sZW5ndGggLSAxKSkge1xuXHRcdFx0XHRlbmRTZWN0aW9uID0gbmV3U2VjdGlvbnNbaSsxXS5iZWdpblxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZW5kU2VjdGlvbiA9IHRoaXMudmlkZW8uZHVyYXRpb247XG5cdFx0XHR9XG5cdFx0XHRuZXdTZWN0aW9uc1tpXS5lbmQgPSBlbmRTZWN0aW9uO1xuXHRcdH1cblx0XHRyZXR1cm4gbmV3U2VjdGlvbnM7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGFuZCBzZXQgdGhlIGN1cnJlbnQgcGxheWJhY2sgcG9zaXRpb24gaW4gdGhlIGF1ZGlvL3ZpZGVvIChpbiBzZWNvbmRzKVxuXHQgKiBHZXR0ZXIgYW5kIHNldHRlclxuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAbWVtYmVyb2YhIFBsYXllciNcblx0ICogQHR5cGUge051Ym1lcn1cblx0ICovXG5cdGdldCBjdXJyZW50VGltZSgpIHtcblx0XHRyZXR1cm4gdGhpcy52aWRlby5jdXJyZW50VGltZTtcblx0fVxuXG5cdHNldCBjdXJyZW50VGltZSh2YWx1ZSkge1xuXHRcdHRoaXMudmlkZW8uY3VycmVudFRpbWUgPSB2YWx1ZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHRoZSBsZW5ndGggb2YgdGhlIGN1cnJlbnQgYXVkaW8vdmlkZW8gKGluIHNlY29uZHMpXG5cdCAqIEdldHRlclxuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAbWVtYmVyb2YhIFBsYXllciNcblx0ICogQHR5cGUge051Ym1lcn1cblx0ICovXG5cdGdldCBkdXJhdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy52aWRlby5kdXJhdGlvbjtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHdoZXRoZXIgdGhlIHBsYXliYWNrIG9mIHRoZSBhdWRpby92aWRlbyBoYXMgZW5kZWQgb3Igbm90XG5cdCAqIEdldHRlclxuXHQgKlxuXHQgKiBAbWVtYmVyb2YhIFBsYXllciNcblx0ICogQHR5cGUge0Jvb2xlYW59XG5cdCAqL1xuXHRnZXQgZW5kZWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMudmlkZW8uZW5kZWQ7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyBhbmQgc2V0IHdoZXRoZXIgdGhlIHBsYXliYWNrIG9mIHRoZSBhdWRpby92aWRlbyBoYXMgZW5kZWQgb3Igbm90XG5cdCAqIEdldHRlciBhbmQgc2V0dGVyXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBtZW1iZXJvZiEgUGxheWVyI1xuXHQgKiBAdHlwZSB7TWVkaWFFcnJvcnxTdHJpbmd9XG5cdCAqIEBmaXJlcyBQbGF5ZXIjZXJyb3Jcblx0ICovXG5cdGdldCBlcnJvcigpIHtcblx0XHRyZXR1cm4gdGhpcy5fZXJyb3IgfHwgbnVsbDtcblx0fVxuXG5cdHNldCBlcnJvcih2YWx1ZSkge1xuXHRcdGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuXHRcdFx0dGhpcy5fZXJyb3IgPSBudWxsO1xuXHRcdFx0dGhpcy5yZW1vdmVDbGFzcygnbGVwbGF5ZXItLWVycm9yJyk7XG5cdFx0XHRpZih0aGlzLmVycm9yRGlzcGxheSkge1xuXHRcdFx0XHR0aGlzLmVycm9yRGlzcGxheS5lbGVtZW50LmhpZGUoKVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXHRcdHRoaXMuX2Vycm9yID0gbmV3IE1lZGlhRXJyb3IodmFsdWUpO1xuXG5cdFx0dGhpcy5hZGRDbGFzcygnbGVwbGF5ZXItLWVycm9yJyk7XG5cblx0XHQvKipcblx0XHQgKiBlcnJvciBldmVudFxuXHRcdCAqXG5cdFx0ICogQGV2ZW50IFBsYXllciNlcnJvclxuXHRcdCAqIEBwcm9wZXJ0eSB7TWVkaWFFcnJvcn0gZXJyb3Jcblx0XHQgKiBAZXhhbXBsZVxuXHRcdCAqIGNvbnN0IHBsYXllciA9IG5ldyBQbGF5ZXIoJCgnI3ZpZGVvJyksIG9wdGlvbnMpO1xuXHRcdCAqIHBsYXllci5vbignZXJyb3InLCAoZSwgZGF0YSkgPT4gY29uc29sZS5lcnJvcihkYXRhLmVycm9yKSk7XG5cdFx0ICovXG5cdFx0dGhpcy50cmlnZ2VyKCdlcnJvcicsIHsgZXJyb3IgOiB0aGlzLl9lcnJvcn0pO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRnZXQgcmF0ZSgpIHtcblx0XHRyZXR1cm4gdGhpcy52aWRlby5yYXRlO1xuXHR9XG5cblx0c2V0IHJhdGUodmFsdWUpIHtcblx0XHR0aGlzLnZpZGVvLnJhdGUgPSB2YWx1ZTtcblx0fVxuXG5cdGdldCBwYXVzZWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMudmlkZW8ucGF1c2VkO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybiB0aGUgaGVpZ2h0IG9mIHBsYXllci4gSWYgeW91IHdhbnQgZ2V0IGhlaWdodCBvbmx5IG9mIHZpZGVvIGVsZW1lbnQsIHVzZSB0aGlzLnZpZGVvLmhlaWdodCBvciB3aGF0ZXZlclxuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAdHlwZSB7TnVtYmVyfVxuXHQgKiBAbWVtYmVyb2YhIFBsYXllciNcblx0ICovXG5cdGdldCBoZWlnaHQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudC5oZWlnaHQoKVxuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybiB1bm5lY2Vzc2FyeSB2aWRlbyBoZWlndGhcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHR5cGUge051bWJlcn1cblx0ICogQG1lbWJlcm9mISBQbGF5ZXIjXG5cdCAqL1xuXHRnZXQgdmlkZW9IZWlnaHQoKSB7XG5cdFx0cmV0dXJuIHRoaXMudmlkZW8uaGVpZ2h0O1xuXHR9XG5cblxuXHQvKipcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHR5cGUge0Jvb2xlYW59XG5cdCAqIEBtZWJtZXJvZiEgUGxheWVyI1xuXHQgKi9cblx0Z2V0IHVzZXJBY3RpdmUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3VzZXJBY3RpdmUgfHwgZmFsc2U7XG5cdH1cblxuXHRzZXQgdXNlckFjdGl2ZSh2YWx1ZSkge1xuXHRcdGlmKHZhbHVlICE9PSB0aGlzLmdldFVzZXJBY3RpdmUpIHtcblx0XHRcdHRoaXMuX3VzZXJBY3RpdmUgPSB2YWx1ZTtcblx0XHRcdHRoaXMudG9nZ2xlQ2xhc3MoJ2xlcGxheWVyLS11c2VyLWFjdGl2ZScsIHZhbHVlKTtcblx0XHRcdC8qKlxuXHRcdFx0ICogVXNlciBhY3RpdmUgZXZlbnRcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI3VzZXJhY3RpdmVcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy50cmlnZ2VyKCd1c2VyYWN0aXZlJyk7XG5cdFx0fVxuXHR9XG5cblxuXHQvKipcblx0ICogU2V0IGFuZCBnZXQgcGxheWVyIHZpZXcuIFZpZXcgQ2FuIGJlICdjb21tb24nLCAnZnVsbHNjcmVlbicsICdtaW5pJ3dcblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHR5cGUge1N0cmluZ31cblx0ICogQG1lbWJlcm9mISBQbGF5ZXIjXG5cdCAqL1xuXHRnZXQgdmlldygpIHtcblx0XHRyZXR1cm4gdGhpcy5fdmlldztcblx0fVxuXG5cdHNldCB2aWV3KHZpZXcpIHtcblx0XHRpZih0aGlzLnZpZXcgIT0gbnVsbCkge1xuXHRcdFx0dGhpcy5yZW1vdmVDbGFzcyhgbGVwbGF5ZXItLSR7dGhpcy52aWV3fWApO1xuXHRcdFx0dGhpcy50cmlnZ2VyKGBkZWx2aWV3LiR7dGhpcy52aWV3fWApO1xuXHRcdH1cblxuXHRcdHRoaXMuX3ZpZXcgPSB2aWV3O1xuXHRcdHRoaXMuZWxlbWVudC5hZGRDbGFzcyhgbGVwbGF5ZXItLSR7dmlld31gKVxuXHRcdHRoaXMudHJpZ2dlcihgc2V0dmlldy4ke3ZpZXd9YCk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8qKlxuXHQgKiBSZW1vdmUgdW5uZWNlc3NhcnkgYXR0cmlidXRlcywgYW5kIHNldCBzb21lIGF0dHJzIGZyb20gb3B0aW9ucyAobG9vcCwgcG9zdGVyIGV0Yy4uLikuIENyZWF0ZSBtYWluIERPTSBvYmplY3RzXG5cdCAqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHRjb25zdCBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuXHRcdGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9lbGVtZW50O1xuXG5cdFx0dGhpcy5lbGVtZW50ID0gY3JlYXRlRWwoJ2RpdicpO1xuXG5cblx0XHR0aGlzLmVsZW1lbnQgPSB0aGlzLmVsZW1lbnRcblx0XHRcdC5hZGRDbGFzcygnbGVwbGF5ZXInKVxuXHRcdFx0LmF0dHIoJ3RhYmluZGV4JywgMClcblx0XHRcdC5jc3MoJ3dpZHRoJywgb3B0aW9ucy53aWR0aCAmJiAnMTAwJScpXG5cdFx0XHQuY3NzKCdtYXgtd2lkdGgnLCBvcHRpb25zLndpZHRoKVxuXG5cdFx0LyoqXG5cdFx0ICogRXJyb3IgZGlzcGxheSBjb21wb25lbnQuXG5cdFx0ICpcblx0XHQgKiBAdHlwZSB7RXJyb3JEaXNwbGF5fVxuXHRcdCAqIEBtZW1iZXJvZiEgUGxheWVyI1xuXHRcdCAqL1xuXHRcdHRoaXMuZXJyb3JEaXNwbGF5ID0gbmV3IEVycm9yRGlzcGxheSh0aGlzKTtcblxuXG5cdFx0LyoqXG5cdFx0ICogUGxheSBidXR0b24gY29tcG9uZW50LlxuXHRcdCAqXG5cdFx0ICogQHR5cGUge1BsYXlCdXR0b259XG5cdFx0ICogQG1lbWJlcm9mISBQbGF5ZXIjXG5cdFx0ICovXG5cdFx0dGhpcy5wbGF5QnV0dG9uID0gbmV3IFBsYXlCdXR0b24odGhpcyk7XG5cblx0XHQvLyBUT0RPOiDQktGL0L3QtdGB0YLQuCDRjdGC0L4g0LIg0L7RgtC00LXQu9GM0L3QtdGL0Lkg0LrQvtC80L/QvtC90LXQvdGCXG5cdFx0dGhpcy5sb2FkZXIgPSAkKCc8ZGl2IC8+Jylcblx0XHRcdC5hZGRDbGFzcygnbGVwbGF5ZXItbG9hZGVyLWNvbnRhaW5lcicpXG5cdFx0XHQuYXBwZW5kKG5ldyBJY29uKHRoaXMsIHtcblx0XHRcdFx0aWNvbk5hbWUgOiAncmVmcmVzaCcsXG5cdFx0XHRcdGNsYXNzTmFtZSA6ICdsZXBsYXllci1sb2FkZXItY29udGFpbmVyX19pY29uJ1xuXHRcdFx0fSkuZWxlbWVudCk7XG5cblxuXHRcdC8qKlxuXHRcdCAqIFNwbGFzaCBpY29uIGNvbXBvbmVudC5cblx0XHQgKlxuXHRcdCAqIEB0eXBlIHtTcGxhc2hJY29ufVxuXHRcdCAqIEBtZW1iZXJvZiEgUGxheWVyI1xuXHRcdCAqL1xuXHRcdHRoaXMuc3BsYXNoSWNvbiA9IG5ldyBTcGxhc2hJY29uKHRoaXMpO1xuXG5cdFx0dGhpcy52aWRlb0NvbnRhaW5lciA9IGNyZWF0ZUVsKCdkaXYnLCB7XG5cdFx0XHRjbGFzc05hbWUgOiAnbGVwbGF5ZXItdmlkZW8nXG5cdFx0fSlcblx0XHQuYXBwZW5kKHRoaXMuZXJyb3JEaXNwbGF5LmVsZW1lbnQpXG5cdFx0LmFwcGVuZCh0aGlzLnBsYXlCdXR0b24uZWxlbWVudClcblx0XHQuYXBwZW5kKHRoaXMubG9hZGVyKVxuXHRcdC5hcHBlbmQodGhpcy5zcGxhc2hJY29uLmVsZW1lbnQpXG5cblx0XHR0aGlzLnBvc3RlciA9IG5ldyBQb3N0ZXIodGhpcyk7XG5cdFx0dGhpcy52aWRlb0NvbnRhaW5lci5hcHBlbmQodGhpcy5wb3N0ZXIuZWxlbWVudCk7XG5cblxuXHRcdGNvbnN0IGxhc3RUaW1lciA9IG5ldyBUaW1lKHRoaXMsIHtcblx0XHRcdGZuIDogKHBsYXllcikgPT4ge1xuXHRcdFx0XHRjb25zdCB2aWRlbyA9IHBsYXllci52aWRlbztcblx0XHRcdFx0cmV0dXJuIHNlY29uZHNUb1RpbWUodmlkZW8uZHVyYXRpb24gLSB2aWRlby5jdXJyZW50VGltZSk7XG5cdFx0XHR9XG5cdFx0fSlcblxuXHRcdGlmKHRoaXMub3B0aW9ucy52aWRlb0luZm8pIHtcblx0XHRcdGNvbnNvbGUud2Fybignb3B0aW9ucy52aWRlb0luZm8gaXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBpc3RlYWQgb3B0aW9ucy5kZXNjcmlwdGlvbicpO1xuXHRcdH1cblxuXHRcdHRoaXMuaW5mb0VsZW1lbnQgPSBjcmVhdGVFbCgnZGl2Jywge1xuXHRcdFx0Y2xhc3NOYW1lIDogJ2xlcGxheWVyX19pbmZvJ1xuXHRcdH0pXG5cdFx0LmFwcGVuZChjcmVhdGVFbCgnZGl2Jywge1xuXHRcdFx0Y2xhc3NOYW1lIDogJ2xlcGxheWVyX190aXRsZScsXG5cdFx0XHRodG1sIDogdGhpcy5vcHRpb25zLnRpdGxlIHx8IFwiXCJcblx0XHR9KSlcblx0XHQuYXBwZW5kKGNyZWF0ZUVsKCdkaXYnLCB7XG5cdFx0XHRjbGFzc05hbWUgOiAnbGVwbGF5ZXJfX3ZpZGVvLWluZm8nLFxuXHRcdFx0aHRtbCA6IHRoaXMub3B0aW9ucy5kZXNjcmlwdGlvbiB8fCB0aGlzLm9wdGlvbnMudmlkZW9JbmZvIHx8IFwiXCJcblx0XHR9KSlcblx0XHQuYXBwZW5kKGNyZWF0ZUVsKCdkaXYnLCB7XG5cdFx0XHRjbGFzc05hbWUgOiAnbGVwbGF5ZXJfX2xhc3QnLFxuXHRcdFx0aHRtbCA6IGDQktC40LTQtdC+INC30LDQutC+0L3Rh9C40YLRgdGPINGH0LXRgNC10LcgYCxcblx0XHR9KS5hcHBlbmQobGFzdFRpbWVyLmVsZW1lbnQpKVxuXG5cdFx0dGhpcy5pbm5lckVsZW1lbnQgPSAkKCc8ZGl2IC8+Jylcblx0XHRcdC5hZGRDbGFzcygnbGVwbGF5ZXJfX2lubmVyJylcblx0XHRcdC5hcHBlbmQodGhpcy52aWRlb0NvbnRhaW5lcilcblx0XHRcdC5hcHBlbmQodGhpcy5pbmZvRWxlbWVudClcblxuXHRcdHRoaXMuZWxlbWVudCA9IHRoaXMuZWxlbWVudFxuXHRcdFx0LmFwcGVuZCh0aGlzLmlubmVyRWxlbWVudClcblxuXHRcdHRoaXMuYWRkQ2xhc3MoJ2xlcGxheWVyLS1wYXVzZWQnKTtcblx0XHR0aGlzLmFkZENsYXNzKCdsZXBsYXllci0tdmlyZ2luJyk7XG5cblx0XHRpZihJU19JUEhPTkUpIHtcblx0XHRcdHRoaXMuYWRkQ2xhc3MoJ2xlcGxheWVyLS1pcGhvbmUnKTtcblx0XHR9XG5cblx0XHRpZihJU19BTkRST0lEKSB7XG5cdFx0XHR0aGlzLmFkZENsYXNzKCdsZXBsYXllci0tYW5kcm9pZCcpO1xuXHRcdH1cblxuXHRcdGlmKElTX01PQklMRSkge1xuXHRcdFx0dGhpcy5hZGRDbGFzcygnbGVwbGF5ZXItLW1vYmlsZScpO1xuXHRcdH1cblxuXG5cblx0XHRpZihvcHRpb25zLnNlY3Rpb25Db250YWluZXIpIHtcblx0XHRcdHRoaXMuc2VjdGlvbnNDb250YWluZXIgPSAkKG9wdGlvbnMuc2VjdGlvbkNvbnRhaW5lcik7XG5cdFx0fVxuXG5cdFx0ZWxlbWVudC5iZWZvcmUodGhpcy5lbGVtZW50KTtcblx0XHR0aGlzLnZpZGVvQ29udGFpbmVyLmFwcGVuZChlbGVtZW50KTtcblxuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQ7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IG9wdGlvbnMgZnJvbSB2aWRlbydzIGF0dHJpYnV0ZSAoIGhlaWdodCwgd2lkdGgsIHBvc3RlciwgcHJlbG9hZCBldGMuLi4pXG5cdCAqIEdldCBzb3VyY2UgdmlkZW8gZnJvbSBzcmMgYXR0ciBvciA8c291cmNlPiBlbGVtZW50IHdpdGggZGF0YSBhdHRyICdkYXRhLXF1YWxpdHknXG5cdCAqIEFsc28gZ2V0IHNvdXJjZXMgZm9yIGRpZmZlcmVudCBxdWFsaXR5IGZyb20gPHNvdXJjZT4gZWxlbWVudCB3aXRoIGRhdGEgYXR0ciAnZGF0YS1xdWFsaXR5J1xuXHQgKlxuXHQgKiBAYWNjZXNzIHByaXZhdGVcblx0ICogQHJldHVybnMge09iamVjdH0gb3B0aW9uc1xuXHQgKi9cblx0X29wdGlvbnNGcm9tRWxlbWVudCgpIHtcblx0XHQvLyBDb3B5IHZpZGVvIGF0dHJzIHRvIHRoZSBvcGl0b25zXG5cdFx0Y29uc3QgIGVsZW1lbnQgPSB0aGlzLl9lbGVtZW50O1xuXHRcdGlmIChlbGVtZW50ID09IG51bGwgfHwgZWxlbWVudC5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybiB7fVxuXHRcdH1cblxuXHRcdGxldCBhdHRyT3B0aW9ucyA9IFtcblx0XHRcdCdoZWlnaHQnLFxuXHRcdFx0J3dpZHRoJyxcblx0XHRcdCdwb3N0ZXInLFxuXHRcdFx0J2F1dG9wbGF5Jyxcblx0XHRcdCdsb29wJyxcblx0XHRcdCdtdXRlZCcsXG5cdFx0XHQncHJlbG9hZCcsXG5cdFx0XVxuXHRcdC5yZWR1Y2UoKG9iaiwgaXRlbSkgPT4ge1xuXHRcdFx0Y29uc3QgdmFsID0gZWxlbWVudC5hdHRyKGl0ZW0pO1xuXHRcdFx0aWYodmFsICE9IG51bGwpIHtcblx0XHRcdFx0b2JqW2l0ZW1dID0gZWxlbWVudC5hdHRyKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG9iajtcblx0XHR9LCB7fSk7XG5cblx0XHRhdHRyT3B0aW9ucy5zb3VyY2VzID0gW107XG5cblx0XHQvLyBTcmMgaXQgaXMgbWFpbiBzb3VyY2UsIHRoYXQgd2lsbCBiZSBsb2FkXG5cdFx0aWYoZWxlbWVudC5hdHRyKCdzcmMnKSkge1xuXHRcdFx0YXR0ck9wdGlvbnMuc3JjID0ge1xuXHRcdFx0XHR1cmwgOiBlbGVtZW50LmF0dHIoJ3NyYycpLFxuXHRcdFx0XHR0aXRsZSA6IGVsZW1lbnQuYXR0cignZGF0YS1xdWFsaXR5JykgfHwgZWxlbWVudC5hdHRyKCd0aXRsZScpIHx8ICdkZWZhdWx0J1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIENvcHkgc291cmNlcyBmcm9tIEhUTUw1IHNvdXJjZSBlbGVtZW50IHdpdGggZGF0YS1xdWFsaXR5IGF0dHJcblx0XHQvLyBJZiBkYXRhLXF1YWxpdHkgYXR0ciBkb2VzIG5vdCBleGlzdCAtIG5vXG5cdFx0ZWxlbWVudC5maW5kKCdzb3VyY2UnKS5lYWNoKChpLCBpdGVtKSA9PiB7XG5cdFx0XHRpdGVtID0gJChpdGVtKTtcblx0XHRcdGlmKCFpdGVtLmF0dHIoJ2RhdGEtcXVhbGl0eScpKSB7XG5cdFx0XHRcdHJldHVyblxuXHRcdFx0fVxuXHRcdFx0YXR0ck9wdGlvbnMuc291cmNlcyA9IGF0dHJPcHRpb25zLnNvdXJjZXMuY29uY2F0KHtcblx0XHRcdFx0dXJsIDogaXRlbS5hdHRyKCdzcmMnKSxcblx0XHRcdFx0dGl0bGUgOiBpdGVtLmF0dHIoJ2RhdGEtcXVhbGl0eScpIHx8IGl0ZW0uYXR0cigndGl0bGUnKSB8fCAnZGVmYXVsdCdcblx0XHRcdH0pXG5cblx0XHR9KTtcblxuXHRcdHJldHVybiBhdHRyT3B0aW9ucztcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm4gYSBuYW1lIG9mIGljb24uIElmIGxlc3MgdGhlbiAwLjEgcmV0dXJuIHZvbHVtZS1vZmYsXG5cdCAqIGlmIGxlc3MgdGhlbiAwLjUgcmV0dXJuIHZvbHVtZSBkb3duLCBlbHNlIHJldHVybiB2b2x1bWUtdXBcblx0ICpcblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZSBWb2x1bWUgdmFsdWVcblx0ICogQHJldHVybnMge1N0cmluZ30gSWNvbiBuYW1lXG5cdCAqL1xuXHRjYWxjVm9sdW1lSWNvbih2YWx1ZSkge1xuXHRcdGlmKHZhbHVlID09IG51bGwpIHtcblx0XHRcdHZhbHVlID0gdGhpcy52aWRlby52b2x1bWU7XG5cdFx0fVxuXHRcdGNvbnN0IHZvbHVtZSA9IHZhbHVlO1xuXG5cdFx0aWYgKHZvbHVtZSA8IHRoaXMub3B0aW9ucy52b2x1bWUubXV0ZWxpbWl0KSB7XG5cdFx0XHRyZXR1cm4gJ3ZvbHVtZS1vZmYnO1xuXHRcdH0gZWxzZSBpZiAodmFsdWUgPCAwLjUpIHtcblx0XHRcdHJldHVybiAndm9sdW1lLWRvd24nO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gJ3ZvbHVtZS11cCc7XG5cdFx0fVxuXHR9XG5cblx0dG9nZ2xlU2VjdGlvbnMoZmxhZykge1xuXHRcdGlmKHRoaXMuc2VjdGlvbnMpIHtcblx0XHRcdHRoaXMuc2VjdGlvbnMudmlzaWJsZSA9IGZsYWc7XG5cdFx0fVxuXHRcdGlmKHRoaXMub3V0c2lkZVNlY3Rpb25zKSB7XG5cdFx0XHR0aGlzLm91dHNpZGVTZWN0aW9ucy52aXNpYmxlID0gZmxhZztcblx0XHR9XG5cdH1cblxuXG5cblx0LyoqXG5cdCAqIE1lcmdlIGRlZmF1bHRPcHRpb25zLCBwcmVzZXRPcHRpb25zIHdpdGggYXR0ck9wdGlvbnMgYW5kIHVzZXIncyBvcHRpb25zO1xuXHQgKlxuXHQgKiBBbmQgY29tcGxlbWVudCB0d28gb2JqZWN0czogY29udHJvbHMgYW5kIGV4Y2x1ZGVDb250cm9sc1xuXHQgKlxuXHQgKiBAYWNjZXNzIHByaXZhdGVcblx0ICovXG5cdF9pbml0T3B0aW9ucygpIHtcblx0XHRjb25zdCBhdHRyT3B0aW9ucyA9IHRoaXMuX29wdGlvbnNGcm9tRWxlbWVudCgpO1xuXHRcdGxldCBwcmVzZXRPcHRpb25zID0ge307XG5cblx0XHRpZiAodGhpcy5fdXNlck9wdGlvbnMucHJlc2V0ICYmIFBsYXllci5nZXRQcmVzZXQodGhpcy5fdXNlck9wdGlvbnMucHJlc2V0KSkge1xuXHRcdFx0cHJlc2V0T3B0aW9ucyA9IFBsYXllci5nZXRQcmVzZXQodGhpcy5fdXNlck9wdGlvbnMucHJlc2V0KS5vcHRpb25zO1xuXHRcdH1cblxuXG5cdFx0Ly8gTWVyZ2UgZGVmYXVsdCBvcHRpb25zICsgcHJlc2V0IG9wdGlvbnMgKyB2aWRlbyBhdHRyaWJ1dHRzKyB1c2VyIG9wdGlvbnNcblx0XHR0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh0cnVlLCB7fSwgZGVmYXVsdE9wdGlvbnMsIHByZXNldE9wdGlvbnMsIGF0dHJPcHRpb25zLCB0aGlzLl91c2VyT3B0aW9ucyk7XG5cblx0XHRpZih0aGlzLm9wdGlvbnMuc291cmNlcyAmJiAhQXJyYXkuaXNBcnJheSh0aGlzLm9wdGlvbnMuc291cmNlcykpIHtcblx0XHRcdHRoaXMub3B0aW9ucy5zb3VyY2VzID0gW3RoaXMub3B0aW9ucy5zb3VyY2VzXVxuXHRcdH1cblxuXHRcdGlmKHR5cGVvZiB0aGlzLm9wdGlvbnMuc3JjID09PSAnc3RyaW5nJykge1xuXHRcdFx0dGhpcy5vcHRpb25zLnNyYyA9IHsgdXJsIDogdGhpcy5vcHRpb25zLnNyYyB9XG5cdFx0fVxuXG5cdFx0aWYodGhpcy5vcHRpb25zLnNyYyA9PSBudWxsICYmIHRoaXMub3B0aW9ucy5zb3VyY2VzLmxlbmd0aCA+IDApIHtcblx0XHRcdHRoaXMub3B0aW9ucy5zcmMgPSB0aGlzLm9wdGlvbnMuc291cmNlc1swXVxuXHRcdH1cblxuXG5cdFx0Ly8gR2VuZXJhdGUgYW5kcm9pZDpmdWxsc2NyZWVuLCBhbmRyb2lkOmNvbW1vbiBhbmQgZXRjIGNvbnRyb2xzIG9wdGlvbnNcblxuXG5cdFx0Ly8gTWVyZ2UgY29ycmVjdGx5IGNvbnRyb2xzLCB3aXRob3V0IGRlZXAgbWVyZ2Vcblx0XHR0aGlzLm9wdGlvbnMuY29udHJvbHMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdE9wdGlvbnMuY29udHJvbHMsIHByZXNldE9wdGlvbnMuY29udHJvbHMsIHRoaXMuX3VzZXJPcHRpb25zLmNvbnRyb2xzKTtcblxuXHRcdC8vIGV4Y2x1ZGUgY29udHJvbHMgb3B0aW9uXG5cdFx0Ly8gVE9ETyhhZGludmFkaW0pOlxuXHRcdC8vIFNldCBkZXByZWNldGVkIGZsYWcgZm9yIHRoaXMgb3B0aW9uO1xuXHRcdGZvciAoY29uc3QgbmFtZSBpbiB0aGlzLm9wdGlvbnMuZXhjbHVkZUNvbnRyb2xzKSB7XG5cdFx0XHRpZiAoIXRoaXMub3B0aW9ucy5leGNsdWRlQ29udHJvbHMuaGFzT3duUHJvcGVydHkobmFtZSkpIHJldHVybjtcblx0XHRcdGNvbnN0IGNvbnRyb2xDb2xsZWN0aW9uID0gdGhpcy5vcHRpb25zLmV4Y2x1ZGVDb250cm9sc1tuYW1lXTtcblx0XHRcdGNvbnRyb2xDb2xsZWN0aW9uLmZvckVhY2goKHJvdywgaW5kZXgpID0+IHtcblx0XHRcdFx0aWYgKHRoaXMub3B0aW9ucy5jb250cm9sc1tuYW1lXSAmJiB0aGlzLm9wdGlvbnMuY29udHJvbHNbbmFtZV1baW5kZXhdKSB7XG5cdFx0XHRcdFx0dGhpcy5vcHRpb25zLmNvbnRyb2xzW25hbWVdW2luZGV4XSA9IGV4Y2x1ZGVBcnJheSh0aGlzLm9wdGlvbnMuY29udHJvbHNbbmFtZV1baW5kZXhdLCByb3cpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdH1cblxuXHRcdGlmICh0aGlzLm9wdGlvbnMucHJlc2V0ICYmIFBsYXllci5nZXRQcmVzZXQodGhpcy5vcHRpb25zLnByZXNldCkpIHtcblx0XHRcdFBsYXllci5nZXRQcmVzZXQodGhpcy5vcHRpb25zLnByZXNldCkuaW5pdE9wdGlvbnMoKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQ3JlYXRlIGFuZCBpbml0IGFsbCBjb250cm9sc1xuXHQgKlxuXHQgKiBAYWNjZXNzIHByaXZhdGVcblx0ICovXG5cdF9pbml0Q29udHJvbHMoKSB7XG5cdFx0Zm9yIChjb25zdCBuYW1lIG9mIFsnY29tbW9uJywgJ2Z1bGxzY3JlZW4nXSkge1xuXHRcdFx0aWYgKCF0aGlzLm9wdGlvbnMuY29udHJvbHMuaGFzT3duUHJvcGVydHkobmFtZSkpIHJldHVybjtcblx0XHRcdGNvbnN0IGNvbnRyb2xDb2xsZWN0aW9uID0gbmV3IENvbnRyb2xDb2xsZWN0aW9uKHRoaXMsIHsgbmFtZSB9KTtcblxuXHRcdFx0dGhpcy5lbGVtZW50LmFwcGVuZChjb250cm9sQ29sbGVjdGlvbi5lbGVtZW50KTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5jb250cm9scy5jb21tb24gIT0gbnVsbCkge1xuXHRcdFx0dGhpcy5jb250cm9scy5jb21tb24uYWN0aXZlID0gdHJ1ZTtcblx0XHR9XG5cdH1cblxuXG5cdF9saXN0ZW5Ib3RLZXlzKCkge1xuXG5cdFx0Y29uc3QgaXNLZXlCaW5kaW5nID0gKGUsIGJpbmRpbmcpID0+IHtcblx0XHRcdHJldHVybiAoKGUud2hpY2ggPT09IGJpbmRpbmcua2V5KSB8fCAoZS5rZXkgPT09IGJpbmRpbmcua2V5KSkgJiZcblx0XHRcdFx0XHQoISFiaW5kaW5nLnNoaWZ0S2V5ID09PSBlLnNoaWZ0S2V5KSAmJlxuXHRcdFx0XHRcdCghIWJpbmRpbmcuY3RybEtleSA9PT0gZS5jdHJsS2V5KVxuXHRcdH1cblxuXHRcdHRoaXMuZWxlbWVudC5vbigna2V5ZG93bi5sZXBsYXllci5ob3RrZXknLCAoZSkgPT4ge1xuXHRcdFx0dGhpcy5vcHRpb25zLmtleUJpbmRpbmcuZm9yRWFjaChiaW5kaW5nID0+IHtcblxuXHRcdFx0XHRpZihpc0tleUJpbmRpbmcoZSwgYmluZGluZykpIHtcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0YmluZGluZy5mbih0aGlzKTtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblxuXHRcdFx0fSlcblx0XHR9KVxuXHR9XG5cblx0LyoqXG5cdCAqIEluaXQgc2VjdGlvbnMsIGdldCBhamF4IG9yIGpzb24gd2l0aCBzZWN0aW9ucyBkYXRhIGFuZCBjcmVhdGUgU2VjdGlvbnMgb2JqZWN0IGFuZCBhZGRlZCB0aGVtIHRvIHRoZSBET01cblx0ICpcblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqIEByZXR1cm5zIHtqcVByb21pc2V9IGpRdWVyeSBwcm9taXNlXG5cdCAqL1xuXHRfaW5pdFNlY3Rpb25zKCkge1xuXHRcdGNvbnN0IGRmZCA9ICQuRGVmZXJyZWQoKTtcblx0XHRpZiAodGhpcy5vcHRpb25zLmRhdGEgPT0gbnVsbCkge1xuXHRcdFx0ZGZkLnJlamVjdChudWxsKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmdldFNlY3Rpb25EYXRhKCkuZG9uZShzZWN0aW9ucyA9PiB7XG5cdFx0XHRcdHNlY3Rpb25zID0gWy4uLnNlY3Rpb25zXTtcblxuXHRcdFx0XHRjb25zdCBpc1NlY3Rpb25PdXRzaWRlID0gKHRoaXMuc2VjdGlvbnNDb250YWluZXIgJiYgdGhpcy5zZWN0aW9uc0NvbnRhaW5lci5sZW5ndGggPiAwKTtcblxuXHRcdFx0XHRpZiAoc2VjdGlvbnMgPT0gbnVsbCB8fCBzZWN0aW9ucy5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHRkZmQucmVqZWN0KG51bGwpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHNlY3Rpb25zID0gdGhpcy5fY29tcGxldGVTZWN0aW9ucyhzZWN0aW9ucyk7XG5cblx0XHRcdFx0dGhpcy5zZWN0aW9ucyA9IG5ldyBTZWN0aW9ucyh0aGlzLCB7XG5cdFx0XHRcdFx0aXRlbXMgOiBzZWN0aW9ucyxcblx0XHRcdFx0XHRmdWxsc2NyZWVuT25seSA6IGlzU2VjdGlvbk91dHNpZGUsXG5cdFx0XHRcdFx0aGlkZVNjcm9sbCA6IHRydWVcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0dGhpcy5pbm5lckVsZW1lbnQuYXBwZW5kKHRoaXMuc2VjdGlvbnMuZWxlbWVudCk7XG5cblx0XHRcdFx0aWYgKGlzU2VjdGlvbk91dHNpZGUpIHtcblx0XHRcdFx0XHR0aGlzLm91dHNpZGVTZWN0aW9ucyA9IG5ldyBTZWN0aW9ucyh0aGlzLCB7XG5cdFx0XHRcdFx0XHRpdGVtcyA6IHNlY3Rpb25zXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0dGhpcy5zZWN0aW9uc0NvbnRhaW5lci5hcHBlbmQodGhpcy5vdXRzaWRlU2VjdGlvbnMuZWxlbWVudCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZGZkLnJlc29sdmUoeyBpdGVtcyA6IHNlY3Rpb25zIH0pO1xuXHRcdFx0fSlcblx0XHR9XG5cblx0XHRyZXR1cm4gZGZkLnByb21pc2UoKVxuXHR9XG5cblx0LyoqXG5cdCAqIEZ1bmN0aW9uLCB0aGFuIGluaXQgYWxsIHBsdWdpbnMgZnJvbSBwbGF5ZXIgb3B0aW9ucy5cblx0ICogSWYgcGx1Z2luIGRvZXNuJ3QgZXhpc3QgdGhyb3cgYW4gZXJyb3Jcblx0ICpcblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqIEByZXR1cm5zIHtQbGF5ZXJ9IHRoaXNcblx0ICovXG5cdF9pbml0UGx1Z2lucygpIHtcblx0XHRpZiAodGhpcy5vcHRpb25zLnBsdWdpbnMpIHtcblx0XHRcdGZvciAoY29uc3QgbmFtZSBpbiB0aGlzLm9wdGlvbnMucGx1Z2lucykge1xuXHRcdFx0XHRpZighdGhpcy5vcHRpb25zLnBsdWdpbnMuaGFzT3duUHJvcGVydHkobmFtZSkpIHJldHVybjtcblx0XHRcdFx0Y29uc3QgcGx1Z2luT3B0aW9ucyA9IHRoaXMub3B0aW9ucy5wbHVnaW5zW25hbWVdO1xuXHRcdFx0XHRpZih0aGlzW25hbWVdKSB7XG5cdFx0XHRcdFx0aWYocGx1Z2luT3B0aW9ucykge1xuXHRcdFx0XHRcdFx0dGhpc1tuYW1lXShwbHVnaW5PcHRpb25zKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcihgUGx1Z2luICcke25hbWV9JyBkb2Vzbid0IGV4aXN0YCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cblx0LyoqXG5cdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHQgKi9cblx0X2xpc3RlblVzZXJBY3Rpdml0eSgpIHtcblx0XHRsZXQgbW91c2VJblByb2dyZXNzO1xuXHRcdGxldCBsYXN0TW92ZVg7XG5cdFx0bGV0IGxhc3RNb3ZlWTtcblxuXHRcdGNvbnN0IG9uTW91c2VNb3ZlID0gKGUpID0+IHtcblx0XHRcdGlmKGUuc2NyZWVuWCAhPT0gbGFzdE1vdmVYIHx8IGUuc2NyZWVuWSAhPT0gbGFzdE1vdmVZKSB7XG5cdFx0XHRcdGxhc3RNb3ZlWCA9IGUuc2NyZWVuWDtcblx0XHRcdFx0bGFzdE1vdmVZID0gZS5zY3JlZW5ZO1xuXHRcdFx0XHR0aGlzLl91c2VyQWN0aXZpdHkgPSB0cnVlXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y29uc3Qgb25Nb3VzZURvd24gPSAoZSkgPT4ge1xuXHRcdFx0dGhpcy5fdXNlckFjdGl2aXR5ID0gdHJ1ZVxuXG5cdFx0XHQvLyBXaGlsZSB1c2VyIGlzIHByZXNzaW5nIG1vdXNlIG9yIHRvdWNoLCBkaXNwYXRjaCB1c2VyIGFjdGl2aXR5XG5cdFx0XHRjbGVhckludGVydmFsKG1vdXNlSW5Qcm9ncmVzcyk7XG5cblx0XHRcdG1vdXNlSW5Qcm9ncmVzcyA9IHNldEludGVydmFsKCgpID0+IHtcblx0XHRcdFx0dGhpcy5fdXNlckFjdGl2aXR5ID0gdHJ1ZVxuXHRcdFx0fSwgMjUwKTtcblx0XHR9XG5cblx0XHRjb25zdCBvbk1vdXNlVXAgPSAoZSkgPT4ge1xuXHRcdFx0dGhpcy5fdXNlckFjdGl2aXR5ID0gdHJ1ZVxuXHRcdFx0Y2xlYXJJbnRlcnZhbChtb3VzZUluUHJvZ3Jlc3MpO1xuXHRcdH1cblxuXHRcdHRoaXMuZWxlbWVudC5vbignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xuXG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdtb3VzZWRvd24nLCBvbk1vdXNlRG93bik7XG5cblx0XHR0aGlzLmVsZW1lbnQub24oJ21vdXNldXAnLCBvbk1vdXNlVXApO1xuXG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdrZXlkb3duJywgKGUpID0+IHRoaXMuX3VzZXJBY3Rpdml0eSA9IHRydWUpO1xuXHRcdHRoaXMuZWxlbWVudC5vbigna2V5dXAnLCAoZSkgPT4gdGhpcy5fdXNlckFjdGl2aXR5ID0gdHJ1ZSk7XG5cblx0XHQvLyBTZWUgaHR0cDovL2Vqb2huLm9yZy9ibG9nL2xlYXJuaW5nLWZyb20tdHdpdHRlci9cblx0XHRsZXQgaW5hY3Rpdml0eVRpbWVvdXQ7XG5cdFx0Y29uc3QgZGVsYXkgPSB0aGlzLm9wdGlvbnMuaW5uYWN0aXZpdHlUaW1lb3V0O1xuXHRcdHNldEludGVydmFsKCgpID0+IHtcblx0XHRcdGlmICh0aGlzLl91c2VyQWN0aXZpdHkpIHtcblxuXHRcdFx0XHQvLyBSZXNldCB1c2VyIGFjdGl2dXR5IHRyYWNrZXJcblx0XHRcdFx0dGhpcy5fdXNlckFjdGl2aXR5ID0gZmFsc2U7XG5cblx0XHRcdFx0dGhpcy51c2VyQWN0aXZlID0gdHJ1ZTtcblxuXHRcdFx0XHRjbGVhclRpbWVvdXQoaW5hY3Rpdml0eVRpbWVvdXQpO1xuXG5cdFx0XHRcdGlmIChkZWxheSA+IDApIHtcblxuXHRcdFx0XHRcdGluYWN0aXZpdHlUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoIXRoaXMuX3VzZXJBY3Rpdml0eSkge1xuXHRcdFx0XHRcdFx0XHR0aGlzLnVzZXJBY3RpdmUgPSBmYWxzZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9LCBkZWxheSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LCAyNTApXG5cdH1cblxuXHQvKipcblx0ICogU3RvcCBzaG93aW5nIHNwaW5uZXIgYW5kIGNsZWFyIGRlbGF5IG9mIHNob3dpbmcgc3Bpbm5lclxuXHQgKlxuXHQgKiBAYWNjZXNzIHByaXZhdGVcblx0ICovXG5cdF9zdG9wV2F5dGluZygpIHtcblx0XHR0aGlzLl93YWl0aW5nVGltZW91dHMuZm9yRWFjaChpdGVtID0+IGNsZWFyVGltZW91dChpdGVtKSk7XG5cdFx0dGhpcy5fd2FpdGluZ1RpbWVvdXRzID0gW107XG5cdFx0dGhpcy5yZW1vdmVDbGFzcygnbGVwbGF5ZXItLXdhaXRpbmcnKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTaG93IHNwaW5uZXIgd2l0aCBkZWxheSBpbiAzMDBtc1xuXHQgKlxuXHQgKiBAYWNjZXNzIHByaXZhdGVcblx0ICovXG5cdF9zdGFydFdhaXRpbmcoKSB7XG5cdFx0dGhpcy5fd2FpdGluZ1RpbWVvdXRzLnB1c2goc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHR0aGlzLmFkZENsYXNzKCdsZXBsYXllci0td2FpdGluZycpO1xuXHRcdH0sIDMwMCkpO1xuXHR9XG5cblxuXHQvKipcblx0ICogT24gaW5pdGVkIHBsYXllciBldmVudCBoYW5kbGVyXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge1BsYXllckV2ZW50fSBlXG5cdCAqL1xuXHRfb25Jbml0ZWQoZSkge1xuXHRcdHRoaXMuYWRkQ2xhc3MoJ2xlcGxheWVyLS1pbml0ZWQnKTtcblxuXHRcdHRoaXMub3B0aW9ucy5vblBsYXllckluaXRlZC5jYWxsKHRoaXMsIGUpO1xuXHR9XG5cblxuXHQvKipcblx0ICogT24gY2xpY2sgdmlkZW8gZXZlbnQgaGFuZGxlci4gRm9jdXMgb24gdmlkZW8gYW5kIHRvZ2dsZVBsYXlcblx0ICpcblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqIEBwYXJhbSB7UGxheWVyRXZlbnR9IGVcblx0ICovXG5cdF9vbkNsaWNrKGUpIHtcblx0XHRjbGVhclRpbWVvdXQodGhpcy5fZGJsY2xpY2tUaW1lb3V0KTtcblx0XHRjb25zdCB0b2dnbGVQbGF5ID0gKCkgPT4ge1xuXHRcdFx0dGhpcy5fZGJsY2xpY2tUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdHRoaXMudmlkZW8uZWxlbWVudC5mb2N1cygpXG5cdFx0XHRcdHRoaXMudG9nZ2xlUGxheSgpO1xuXG5cdFx0XHR9LCAzMDApO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIFNlZSBMUExSLTI5MFxuXHRcdCAqIE9uIHRvdWNoIGRldmljZXMgaW4gZnVsbHNjcmVlbiBpZiB1c2VyIG5vdCBhY3RpdmUgd2UgZG9uJ3Qgc2hvdWxkIHRvZ2dsZVxuXHRcdCAqIEF0IGZpcnN0IHdlIHNob3cgaGltIGEgY29udHJvbHNcblx0XHQgKi9cblx0XHRpZihJU19UT1VDSCgpICYmIHRoaXMudmlldyA9PT0gJ2Z1bGxzY3JlZW4nKSB7XG5cdFx0XHRpZih0aGlzLnBsYXllci51c2VyQWN0aXZlKSB7XG5cdFx0XHRcdHRvZ2dsZVBsYXkoKVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0b2dnbGVQbGF5KClcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogT24gZGJsY2xpY2sgb24gdGhlIHZpZGVvIHBsYXllciBldmVudCBoYW5kbGVyXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge1BsYXllckV2ZW50fSBlXG5cdCAqL1xuXHRfb25EYmNsaWNrKGUpIHtcblx0XHRjbGVhclRpbWVvdXQodGhpcy5fZGJsY2xpY2tUaW1lb3V0KTtcblx0XHR0aGlzLnRvZ2dsZUZ1bGxzY3JlZW4oKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBPbiBmdWxsc2NyZWVuIGNoYW5nZSBwbGF5ZXIgZXZlbnQgaGFuZGxlclxuXHQgKlxuXHQgKiBAYWNjZXNzIHByaXZhdGVcblx0ICogQHBhcmFtIHtQbGF5ZXJFdmVudH0gZVxuXHQgKi9cblx0X29uRnVsbHNjcmVlbkNoYW5nZShlLCBpc0ZzKSB7XG5cdFx0aWYoaXNGcykge1xuXHRcdFx0dGhpcy52aWV3ID0gJ2Z1bGxzY3JlZW4nO1xuXG5cdFx0XHQvLyBIaWRlIHNlY3Rpb25zIGJ5IGRlZmF1bHQgb24gbW9iaWxlIGZ1bGxzY3JlZW5cblx0XHRcdGlmKElTX0FORFJPSUQpIHtcblx0XHRcdFx0dGhpcy5fbGFzdFNlY3Rpb25zVmFsdWUgPSB0aGlzLnNlY3Rpb25zLnZpc2libGU7XG5cdFx0XHRcdHRoaXMuc2VjdGlvbnMudmlzaWJsZSA9IGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLmZvY3VzKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMudmlldyA9ICdjb21tb24nO1xuXG5cdFx0XHRpZihJU19BTkRST0lEKSB7XG5cdFx0XHRcdHRoaXMuc2VjdGlvbnMudmlzaWJsZSA9IHRoaXMuX2xhc3RTZWN0aW9uc1ZhbHVlO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBQYXVzZSB2aWRlbyBvbiBleGl0IGZ1bGxzY3JlZWVuIG9uIG1vYmlsZVxuXHRcdFx0aWYoSVNfQU5EUk9JRF9QSE9ORSB8fCBJU19JUEhPTkUgfHwgSVNfSVBPRCkge1xuXHRcdFx0XHR0aGlzLnBhdXNlKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblxuXHQvKipcblx0ICogT24gcGxheSBldmVudCBoYW5kbGVyXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge1BsYXllckV2ZW50fSBlXG5cdCAqL1xuXHRfb25QbGF5KCkge1xuXHRcdHRoaXMuc3BsYXNoSWNvbi5zaG93KCdwbGF5Jyk7XG5cdH1cblxuXHQvKipcblx0ICogT24gcGF1c2UgcGxheWVyIGV2ZW50IGhhbmRsZXJcblx0ICogU2hvdyBwYXVzZSBpY29uIGluIHRoZSBjZW50ZXIgb2YgdmlkZW9cblx0ICpcblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqL1xuXHRfb25QYXVzZSgpIHtcblx0XHR0aGlzLnNwbGFzaEljb24uc2hvdygncGF1c2UnKTtcblx0fVxuXG5cdF9vbkVudGl0eUZ1bGxzY3JlbkNoYW5nZSgpIHtcblx0XHRjb25zdCBmc0FwaSA9IEZ1bGxzY3JlZW5BcGk7XG5cdFx0Y29uc3QgaXNGcyA9ICEhZG9jdW1lbnRbZnNBcGkuZnVsbHNjcmVlbkVsZW1lbnRdO1xuXHRcdHRoaXMudHJpZ2dlcignZnVsbHNjcmVlbmNoYW5nZScsIGlzRnMpO1xuXHR9XG5cbn1cblxuLyoqXG4gKiBTdGF0aWMgaGVscGVyIGZvciBjcmVhdGluZyBhIHBsdWdpbnMgZm9yIGxlcGxheWVyXG4gKlxuICogQGFjY2VzcyBwdWJsaWNcbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHBsdWdpblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gUGx1Z2luIGluaXQgZnVuY3Rpb25cbiAqXG4gKiBAZXhhbXBsZVxuICogUGxheWVyLnBsdWdpbignaGVsbG9Xb3JsZCcsIGZ1bmN0aW9uKHBsdWdpbk9wdGlvbnMpIHtcbiAqICAgIGNvbnN0IHBsYXllciA9IHRoaXM7XG4gKiAgICBwbGF5ZXIub24oJ2NsaWNrJywgKCkgPT4gY29uc29sZS5sb2coJ0hlbGxvIHdvcmxkJykpO1xuICogfSlcbiAqXG4gKi9cblBsYXllci5wbHVnaW4gPSBmdW5jdGlvbihuYW1lLCBmbikge1xuXHRQbGF5ZXIucHJvdG90eXBlW25hbWVdID0gZm47XG59XG5cbi8qKlxuICogR2V0IGJ5IG5hbWUgcmVnaXN0ZXJlZCBjb21wb25lbnRcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSAtIE5hbWUgb2YgY29tcG9uZW50XG4gKiBAcmV0dXJuIHtDb21wb25lbnR9XG4gKi9cblBsYXllci5nZXRDb21wb25lbnQgPSBDb21wb25lbnQuZ2V0Q29tcG9uZW50O1xuXG4vKipcbiAqIFJlZ2lzdGVyIGNvbXBvbmVudFxuICpcbiAqIEBhY2Nlc3MgcHVibGljXG4gKiBAc3RhdGljXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtDb21wb25lbnR9IGNvbXBvbmVudFxuICpcbiAqIEBleGFtcGxlXG4gKiBQbGF5ZXIucmVnaXN0ZXJDb21wb25lbnQoJ0Vycm9yRGlzcGxheScsIEVycm9yRGlzcGxheSk7XG4gKi9cblBsYXllci5yZWdpc3RlckNvbXBvbmVudCA9IENvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudDtcblxuLyoqXG4gKiBSZWdpc3RlciBjb250cm9sXG4gKlxuICogQGFjY2VzcyBwdWJsaWNcbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge0NvbnRyb2x9IGNvbnRyb2xcbiAqL1xuUGxheWVyLmdldENvbnRyb2wgPSBDb250cm9sLmdldENvbnRyb2w7XG5cbi8qKlxuICogR2V0IGJ5IG5hbWUgcmVnaXN0ZXJlZCBjb250cm9sXG4gKlxuICogQGFjY2VzcyBwdWJsaWNcbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJucyB7Q29udHJvbH1cbiAqXG4gKiBAZXhhbXBsZVxuICogUGxheWVyLnJlZ2lzdGVyQ29udHJvbCgnYmFja3dhcmQnLCBCYWNrd2FyZENvbnRyb2wpO1xuICovXG5QbGF5ZXIucmVnaXN0ZXJDb250cm9sID0gQ29udHJvbC5yZWdpc3RlckNvbnRyb2w7XG5cblxuLyoqXG4gKiBDb252ZXJ0IHNlY29uZHMgdG8gZm9ybWF0IHN0cmluZyAnaGg/Om1tOnNzJ1xuICpcbiAqIEBhY2Nlc3MgcHVibGljXG4gKiBAcGFyYW0ge051bWJlcn0gc2Vjb25kcyBTZWNvbmRzXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHNob3dIb3VycyBjb252ZXJ0IHRvIGZvcm1hdCAnaGg6bW06c3MnXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG5QbGF5ZXIuc2Vjb25kc1RvVGltZSA9IHNlY29uZHNUb1RpbWU7XG5cblxuLyoqXG4gKiBTdGF0aWMgaGVscGVyIGZvciBjcmVhdGluZyBhIHBsdWdpbnMgZm9yIGxlcGxheWVyXG4gKlxuICogQGFjY2VzcyBwdWJsaWNcbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHBsdWdpblxuICogQHBhcmFtIHtGdW5jdGlvbnxPYmplY3R9IGZuIFBsdWdpbiBpbml0IGZ1bmN0aW9uXG4gKlxuICogQGV4YW1wbGVcbiAqIFBsYXllci5wcmVzZXQoJ2NvbW1vbicsIHtcbiAqICAgICB3aWR0aCA6ICcxMDAlJyxcbiAqICAgICBwbHVnaW5zIDoge1xuICogICAgICAgICBtaW5pcGxheWVyIDogdHJ1ZVxuICogICAgIH1cbiAqIH0pO1xuICovXG5QbGF5ZXIucHJlc2V0ID0gZnVuY3Rpb24obmFtZSwgb2JqKSB7XG5cdGlmKHR5cGVvZiBvYmogPT09ICdvYmplY3QnKSB7XG5cdFx0UGxheWVyLl9wcmVzZXRzW25hbWVdID0gJC5leHRlbmQoe30sIHtcblx0XHRcdG9wdGlvbnMgOiB7fSxcblx0XHRcdGluaXRPcHRpb25zIDogbm9vcFxuXHRcdH0sIG9iaik7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9iaiA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFBsYXllci5fcHJlc2V0c1tuYW1lXSA9IG9iaigpO1xuXHR9XG59O1xuXG5cblBsYXllci5nZXRQcmVzZXQgPSBmdW5jdGlvbihuYW1lKSB7XG5cdGlmKFBsYXllci5fcHJlc2V0c1tuYW1lXSkge1xuXHRcdHJldHVybiBQbGF5ZXIuX3ByZXNldHNbbmFtZV07XG5cdH0gZWxzZSB7XG5cdFx0Y29uc29sZS5lcnJvcihgcHJlc2V0ICR7bmFtZX0gZG9lc24ndCBleGlzdGApO1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG59XG5cblxuUGxheWVyLl9wcmVzZXRzID0ge307XG5cblBsYXllci5Db29raWUgPSBDb29raWU7XG5cblBsYXllci5fbG9hZFNWR1Nwcml0ZSA9IGZ1bmN0aW9uKHN2Zykge1xuXHRjb25zdCBoaWRkZW5FbGVtZW50ID0gJCgnPGRpdi8+JykuaGlkZSgpO1xuXHQkKCdib2R5JykucHJlcGVuZChoaWRkZW5FbGVtZW50LmFwcGVuZChzdmcpKTtcblx0cmV0dXJuIGhpZGRlbkVsZW1lbnQ7XG59XG5cblBsYXllci5kZWZhdWx0U3ByaXRlID0gcmVxdWlyZSgnLi4vLi4vZGlzdC9zdmcvc3ZnLWRlZnMuc3ZnJyk7XG5cbi8qIGdsb2JhbCBWRVJTSU9OICovXG5QbGF5ZXIudmVyc2lvbiA9IFZFUlNJT047XG5cbndpbmRvdy4kLmZuLmxlUGxheWVyID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIG5ldyBQbGF5ZXIoJCh0aGlzKSwgb3B0aW9ucyk7XG5cdH0pO1xufTtcblxud2luZG93LiQubGVQbGF5ZXIgPSBQbGF5ZXI7XG5cbndpbmRvdy5sZVBsYXllciA9IFBsYXllcjtcblxuXG4vKipcbiAqIE1pbmkgUGxheWVyIHBsdWdpblxuICpcbiAqIEBwbHVnaW5cbiAqL1xuUGxheWVyLnBsdWdpbignbWluaXBsYXllcicsIGZ1bmN0aW9uKHBsdWdpbk9wdGlvbnMpIHtcblx0Y29uc3QgcGxheWVyID0gdGhpcztcblxuXHQvLyDQnNC10YDQttC40Lwg0YEgdGhpcy5vcHRpb25zLm1pbmlwbGF5ZXIsINGH0YLQvtCx0Ysg0L3QtSDRgdC70L7QvNCw0YLRjCDQvtCx0YDQsNGC0L3Rg9GOINGB0L7QstC80LXRgdGC0LjQvNC+0YHRjCwg0YLQsNC6INC60LDQuiDRgNCw0L3RjNGI0LVcblx0Ly8g0LzQuNC90LjQv9C70LXQtdGAINC90LUg0LHRi9C7INC/0LvQsNCz0LjQvdC+0Lwg0L/Qu9C10LXRgNCwLlxuXHRjb25zdCBvcHRpb25zID0gJC5leHRlbmQoe30sIHtcblx0XHR3aWR0aCA6ICcxMDAlJyxcblx0XHRvZmZzZXRTaG93IDogKHBsYXllcikgPT4ge1xuXHRcdFx0Y29uc3Qgb2Zmc2V0ID0gcGxheWVyLmVsZW1lbnQub2Zmc2V0KCkudG9wXG5cdFx0XHRcdCsgcGxheWVyLmVsZW1lbnQub3V0ZXJIZWlnaHQoKVxuXHRcdFx0XHQtIHBsYXllci5nZXRDb250cm9scygnY29tbW9uJykuZWxlbWVudC5oZWlnaHQoKTtcblxuXHRcdFx0cmV0dXJuIG9mZnNldDtcblx0XHR9XG5cdH0sIHRoaXMub3B0aW9ucy5taW5pcGxheWVyLCBwbHVnaW5PcHRpb25zKTtcblxuXHRjb25zdCBjb250cm9scyA9IG5ldyBDb250cm9sQ29sbGVjdGlvbih0aGlzLCB7XG5cdFx0bmFtZSA6ICdtaW5pJyxcblx0XHRjb250cm9scyA6IG9wdGlvbnMuY29udHJvbHMsXG5cdFx0Y29udHJvbE9wdGlvbnMgOiB7XG5cdFx0XHRjb250cm9sIDoge1xuXHRcdFx0XHRkaXNhYmxlIDogZmFsc2Vcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xuXG5cdC8vINCS0YHRgtCw0LLQu9GP0LXQvCDQsiBpbmZvRWxlbWVudCDQv9C+0LQgdGl0bGUg0LggZGVzY3JpcHRpb25cblx0dGhpcy5pbmZvRWxlbWVudC5hcHBlbmQoY29udHJvbHMuZWxlbWVudCk7XG5cblx0LyoqXG5cdCAqIFJldHVybiBvZmZzZXQgb24gb1kgLCB3aGVuIG1pbmlwbGF5ZXIgc2hvdWxkIHNob3dpbmcgb3IgaGlkaW5nXG5cdCAqXG5cdCAqIEByZXR1cm5zIHtOdW1iZXJ9XG5cdCAqL1xuXHRjb25zdCBvZmZzZXRTaG93ID0gKCkgPT4ge1xuXHRcdGlmICgkLmlzRnVuY3Rpb24ob3B0aW9ucy5vZmZzZXRTaG93KSkge1xuXHRcdFx0cmV0dXJuIG9wdGlvbnMub2Zmc2V0U2hvdyhwbGF5ZXIpO1xuXHRcdH1cblxuXHRcdHJldHVybiBvcHRpb25zLm9mZnNldFNob3dcblx0fVxuXG5cdGNvbnN0IGdldFdpZHRoID0gKCkgPT4ge1xuXHRcdHJldHVybiBvcHRpb25zLndpZHRoIHx8IHRoaXMuZWxlbWVudC53aWR0aCgpO1xuXHR9XG5cblxuXHR0aGlzLl91cGRhdGVNaW5pUGxheWVyID0gKGUsIGZvcmNlKSA9PiB7XG5cdFx0Y29uc3Qgc2Nyb2xsVG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuXG5cdFx0Ly8gQmVjYXVzZSBpbiBmb3JjZSB1cGRhdGUsIGZvciBub3JtYWxseSBjb3VudCBoZWlnaHQgYW5kIHBhZGRpbmdcblx0XHQvLyBtaW5pcGxheWVyIGJlZm9yZSB0aGUgc2hvdyBtdXN0IGZpcnN0IGJlIGhpZGRlblxuXHRcdGlmKGZvcmNlKSB7XG5cdFx0XHR0aGlzLmhpZGVNaW5pUGxheWVyKGZvcmNlKTtcblx0XHR9XG5cblx0XHRpZihzY3JvbGxUb3AgPiBvZmZzZXRTaG93KCkpIHtcblx0XHRcdHRoaXMuc2hvd01pbmlQbGF5ZXIoZm9yY2UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmhpZGVNaW5pUGxheWVyKCk7XG5cdFx0fVxuXHR9XG5cblx0dGhpcy5zaG93TWluaVBsYXllciA9IChmb3JjZSkgPT4ge1xuXHRcdGlmICghZm9yY2UgJiYgdGhpcy52aWV3ID09PSAnbWluaScpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBBZGRlZCBlbXB0eSBzcGFjZVxuXHRcdHRoaXMuZWxlbWVudC5jc3MoJ3BhZGRpbmctdG9wJywgdGhpcy52aWRlb0NvbnRhaW5lci5oZWlnaHQoKSk7XG5cblx0XHR0aGlzLnZpZXcgPSdtaW5pJztcblx0fVxuXG5cdHRoaXMuaGlkZU1pbmlQbGF5ZXIgPSAoZm9yY2UpID0+IHtcblx0XHRpZighZm9yY2UgJiYgdGhpcy52aWV3ICE9PSAnbWluaScpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy52aWV3ID0gJ2NvbW1vbic7XG5cdH1cblxuXHQkKHdpbmRvdykub24oJ3Njcm9sbCcsIHRoaXMuX3VwZGF0ZU1pbmlQbGF5ZXIuYmluZCh0aGlzKSk7XG5cdCQod2luZG93KS5vbigncmVzaXplJywgdGhpcy5fdXBkYXRlTWluaVBsYXllci5iaW5kKHRoaXMpKTtcblx0dGhpcy5vbignaW5pdGVkJywgKGUpID0+IHRoaXMuX3VwZGF0ZU1pbmlQbGF5ZXIoZSwgdHJ1ZSkpO1xuXG5cdHRoaXMub25TZXRWaWV3KCdtaW5pJywgKCkgPT4ge1xuXHRcdHRoaXMuaW5uZXJFbGVtZW50LmNzcygnbWF4LXdpZHRoJywgZ2V0V2lkdGgoKSk7XG5cdFx0dGhpcy5pbm5lckVsZW1lbnQuY3NzKCdoZWlnaHQnLCB0aGlzLnZpZGVvLmhlaWdodCk7XG5cdH0pO1xuXG5cdHRoaXMub25EZWxWaWV3KCdtaW5pJywgKCkgPT4ge1xuXHRcdHRoaXMuaW5uZXJFbGVtZW50LmNzcygnbWF4LXdpZHRoJywgJycpXG5cdFx0dGhpcy5pbm5lckVsZW1lbnQuY3NzKCdoZWlnaHQnLCAnJylcblxuXHRcdHRoaXMuZWxlbWVudC5jc3MoJ3BhZGRpbmctdG9wJywgJycpO1xuXHR9KTtcblxuXG5cdHRoaXMuX3VwZGF0ZU1pbmlQbGF5ZXIoKTtcbn0pO1xuXG5cblBsYXllci5wcmVzZXQoJ3ZwcycsIHJlcXVpcmUoJy4vcHJlc2V0cy92cHMuanMnKS5wcmVzZXQpO1xuUGxheWVyLnByZXNldCgnc2ltcGxlJywgcmVxdWlyZSgnLi9wcmVzZXRzL3NpbXBsZS5qcycpLnByZXNldCk7XG5QbGF5ZXIucHJlc2V0KCdzbXMnLCByZXF1aXJlKCcuL3ByZXNldHMvc21zLmpzJykucHJlc2V0KTtcblBsYXllci5wcmVzZXQoJ2NvbXByZXNzZWQnLCByZXF1aXJlKCcuL3ByZXNldHMvY29tcHJlc3NlZC5qcycpLnByZXNldCk7XG5QbGF5ZXIucHJlc2V0KCcyMDM1JywgcmVxdWlyZSgnLi9wcmVzZXRzLzIwMzUuanMnKS5wcmVzZXQpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBsYXllclxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9sZS1wbGF5ZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9ICQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCIkXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIENvbnRyb2wuanNcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgSWNvbiBmcm9tICcuL0ljb24nO1xuXG4vKipcbiAqIEBjbGFzcyBDb250cm9sXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIENvbnRyb2wncyBvcHRpb25zXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuaWNvbk5hbWVdIE5hbWUgb2YgY29udHJvbCdzIGljb24uIElmIGVtcHR5LCBjb250cm9sIHdpbGwgbm90IGhhdmUgYSBpY29uXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuY2xhc3NOYW1lXVxuICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLm5hbWVdXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuY29sbGVjdGlvbl1cbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy50aXRsZV0gQ29udG9ybCdzIHRvb2x0aXAsIHRpdGxlIGF0dHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtvcHRpb25zLm9uQ2xpY2tdIE9uIGNsaWNrIGV2ZW50IGhhbmRsZXJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuZGlzYWJsZT1mYWxzZV1cbiAqIEBwcm9wZXJ0eSB7SWNvbn0gaWNvbiBJY29uIGluIGNvbnRyb2wsIGlmIGl0IGlzIGV4aXN0XG4gKiBAZXh0ZW5kcyBDb21wb25lbnRcbiAqL1xuY2xhc3MgQ29udHJvbCBleHRlbmRzIENvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblx0XHR0aGlzLmVtaXRUYXBFdmVudHMoKTtcblx0XHR0aGlzLmRpc2FibGUgPSB0aGlzLm9wdGlvbnMuZGlzYWJsZSAhPSBudWxsPyB0aGlzLm9wdGlvbnMuZGlzYWJsZSA6IHRydWU7XG5cblx0XHR0aGlzLnBsYXllci5vbignaW5pdGVkJywgKGUpID0+IHtcblx0XHRcdHRoaXMuZGlzYWJsZSA9IHRoaXMub3B0aW9ucy5kaXNhYmxlICE9IG51bGw/IHRoaXMub3B0aW9ucy5kaXNhYmxlIDogZmFsc2U7XG5cdFx0fSlcblxuXHRcdHRoaXMuZWxlbWVudC5vbih7XG5cdFx0XHRjbGljayA6IHRoaXMub25DbGljay5iaW5kKHRoaXMpLFxuXHRcdFx0dGFwIDogdGhpcy5vbkNsaWNrLmJpbmQodGhpcyksXG5cdFx0fSk7XG5cblx0XHR0aGlzLnBsYXllci5vbignaW5pdGVkJywgdGhpcy5vblBsYXllckluaXRlZC5iaW5kKHRoaXMpKVxuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHRpZiAodGhpcy5vcHRpb25zLmljb25OYW1lKSB7XG5cdFx0XHR0aGlzLmljb24gPSBuZXcgSWNvbih0aGlzLnBsYXllciwge1xuXHRcdFx0XHRpY29uTmFtZSA6IHRoaXMub3B0aW9ucy5pY29uTmFtZVxuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdGxldCBhdHRycyA9IHtcblx0XHRcdHRpdGxlIDogdGhpcy5vcHRpb25zLnRpdGxlXG5cdFx0fVxuXHRcdHRoaXMuZWxlbWVudCA9ICQoYDwke3RoaXMub3B0aW9ucy50YWcgfHwgJ2J1dHRvbid9IC8+YClcblx0XHRcdC5hZGRDbGFzcyh0aGlzLmJ1aWxkQ1NTQ2xhc3MoKSlcblx0XHRcdC5hcHBlbmQodGhpcy5pY29uICYmIHRoaXMuaWNvbi5lbGVtZW50KVxuXHRcdFx0LmF0dHIoYXR0cnMpO1xuXG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudDtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGJ1aWxkQ1NTQ2xhc3MoKSB7XG5cdFx0bGV0IHJlc3VsdCA9IGBjb250cm9sICR7dGhpcy5vcHRpb25zLmNsYXNzTmFtZX0gJHtzdXBlci5idWlsZENTU0NsYXNzKCl9YDtcblx0XHQvKipcblx0XHQgKiBAc2VlIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzIzODg1MjU1L2hvdy10by1yZW1vdmUtaWdub3JlLWhvdmVyLWNzcy1zdHlsZS1vbi10b3VjaC1kZXZpY2VzXG5cdFx0ICogV2Ugc2hvdWxkIGlnbm9yZSBob3ZlciBlZmZldGNzIG9uIGlwaG9uZSwgYmVjYXVzZSB3ZSBzaG93IGhvdmVyIGVmZmVjdCBvbiB0YXBcblx0XHQgKi9cblx0XHRpZighdGhpcy5wbGF5ZXIuaGFzQ2xhc3MoJ2xlcGxheWVyLS1pcGhvbmUnKSkge1xuXHRcdFx0cmVzdWx0ICs9ICcgY29udHJvbC0tbm8taXBob25lJztcblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdHNldCB0YXAodmFsdWUpIHtcblx0XHR0aGlzLnRvZ2dsZUNsYXNzKCdjb250cm9sLS10YXAnLCB2YWx1ZSk7XG5cdH1cblxuXHRzZXQgZGlzYWJsZSh2YWx1ZSkge1xuXHRcdHRoaXMuX2Rpc2FibGUgPSB2YWx1ZTtcblx0XHR0aGlzLnRvZ2dsZUNsYXNzKCdkaXNhYmxlZCcsIHZhbHVlKTtcblx0fVxuXG5cdGdldCBkaXNhYmxlKCkge1xuXHRcdHJldHVybiB0aGlzLl9kaXNhYmxlXG5cdH1cblxuXHQvKipcblx0ICpcblx0ICogT24gY2xpY2sgZXZlbnQgaGFuZGxlclxuXHQgKiBAYWJzdGFjdFxuXHQgKi9cblx0b25DbGljayAoZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRpZiAodGhpcy5kaXNhYmxlKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHRoaXMucGxheWVyLnRyaWdnZXIoJ2NvbnRyb2xjbGljaycsIHsgY29udHJvbCA6IHRoaXMgfSk7XG5cblx0XHRpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHR0aGlzLm9wdGlvbnMub25DbGljay5jYWxsKHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0fVxuXHR9XG5cblxuXHRvblBsYXllckluaXRlZCAoZSwgZGF0YSkge1xuXG5cdH1cblxuXHRzdGF0aWMgcmVnaXN0ZXJDb250cm9sKG5hbWUsIGNvbnRyb2wpIHtcblx0XHRpZihuYW1lID09IG51bGwpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZihDb250cm9sLl9jb250cm9scyA9PSBudWxsKSB7XG5cdFx0XHRDb250cm9sLl9jb250cm9scyA9IHt9O1xuXHRcdH1cblxuXHRcdENvbnRyb2wuX2NvbnRyb2xzW25hbWVdID0gY29udHJvbDtcblxuXHRcdHJldHVybiBjb250cm9sO1xuXHR9XG5cblx0c3RhdGljIGdldENvbnRyb2wobmFtZSkge1xuXHRcdGlmKG5hbWUgPT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmKENvbnRyb2wuX2NvbnRyb2xzICYmIENvbnRyb2wuX2NvbnRyb2xzW25hbWVdKSB7XG5cdFx0XHRyZXR1cm4gQ29udHJvbC5fY29udHJvbHNbbmFtZV07XG5cdFx0fVxuXHR9XG5cblx0c3RhdGljIGNyZWF0ZShwbGF5ZXIsIG5hbWUsIG9wdGlvbnMpIHtcblx0XHR2YXIgY29udHJvbENsYXNzID0gdGhpcy5nZXRDb250cm9sKG5hbWUpO1xuXHRcdGlmKGNvbnRyb2xDbGFzcyA9PSBudWxsKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKGBDb250cm9sICR7bmFtZX0gZG9lc24ndCBleGlzdGApO1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5ldyBjb250cm9sQ2xhc3MocGxheWVyLCBvcHRpb25zKTtcblx0fVxuXG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnQ29udHJvbCcsIENvbnRyb2wpO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ2NvbnRyb2wnLCBDb250cm9sKTtcbmV4cG9ydCBkZWZhdWx0IENvbnRyb2w7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9Db250cm9sLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBDb21wb25lbnQuanNcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5jb25zdCB0b1BsYXllckV2ZW50ID0gKGV2ZW50cykgPT4gZXZlbnRzLnNwbGl0KCcgJykucmVkdWNlKChhY2MsIGUpID0+IGFjYyArIGBsZXBsYXllcl8ke2V9IGAsICcnKTtcblxuLyoqXG4gKiBQbGF5ZXIgY29tcG9uZW50IC0gQmFzZSBjbGFzcyBmb3IgYWxsIFVJXG4gKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBPcHRpb25zIG9mIGNvbXBvbmVudFxuICogQHBhcmFtIHtqUXVlcnl9IFtvcHRpb25zLmVsZW1lbnRdINCt0LvQtdC80LXQvdGCINC90LAg0LrQvtGC0L7RgNC+0Lwg0LzQvtC20L3QviDQuNC90LjRhtC40LvQuNC30L7QstCw0YLRjCDQutC70LDRgdGBLlxuICogQHByb3BlcnR5IHtPYmplY3R9IG9wdGlvbnNcbiAqIEBwcm9wZXJ0eSB7alF1ZXJ5fSBlbGVtZW50XG4gKiBAY2xhc3MgQ29tcG9uZW50XG4gKi9cbmNsYXNzIENvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XG5cdFx0b3B0aW9ucyA9IHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRjcmVhdGVFbGVtZW50IDogdHJ1ZVxuXHRcdH0sIHRoaXMub3B0aW9ucywgb3B0aW9ucyk7XG5cblx0XHRpZighcGxheWVyICYmIHRoaXMucGxheSAhPSBudWxsKSB7XG5cdFx0XHR0aGlzLnBsYXllciA9IHBsYXllciA9IHRoaXM7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucGxheWVyID0gcGxheWVyO1xuXHRcdH1cblxuXHRcdGlmKG9wdGlvbnMuY3JlYXRlRWxlbWVudCkge1xuXG5cdFx0XHRpZiAob3B0aW9ucy5lbGVtZW50KSB7XG5cdFx0XHRcdHRoaXMuZWxlbWVudCA9IG9wdGlvbnMuZWxlbWVudDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuY3JlYXRlRWxlbWVudCgpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5lbGVtZW50Lmxlbmd0aCAhPT0gMSkge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKGBDb21wb25lbnQucHJvdG90eXBlLmVsZW1lbnQubGVuZ3RoIG11c3QgZXF1YWwgMSwgbm90ICR7dGhpcy5lbGVtZW50Lmxlbmd0aH1cXG5gLCB0aGlzLmVsZW1lbnQpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLmVsZW1lbnRbMF0uX19ub2RlID0gdGhpcztcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQGFic3RyYWN0XG5cdCAqL1xuXHRjcmVhdGVFbGVtZW50KCkge1xuXG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBhYnN0cmFjdFxuXHQgKi9cblx0YnVpbGRDU1NDbGFzcygpIHtcblx0XHRyZXR1cm4gJydcblx0fVxuXG5cblx0LyoqXG5cdCAqIFNldCB0aGUgZm9jdXMgdG8gdGhpcyBjb21wb25lbnRcblx0ICovXG5cdGZvY3VzKCkge1xuXHRcdHRoaXMuZWxlbWVudC5mb2N1cygpO1xuXHR9XG5cblxuXHQvKipcblx0ICogUmVtb3ZlIHRoZSBmb2N1cyBmcm9tIHRoaXMgY29tcG9uZW50XG5cdCAqL1xuXHRibHVyKCkge1xuXHRcdHRoaXMuZWxlbWVudC5ibHVyKCk7XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBFbWl0IGEgcGxheWVyIGV2ZW50ICh0aGUgbmFtZSBvZiBldmVudCB3b3VsZCBiZSBhIGxlcGxheWVyX3NtdGgpXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBldmVudE5hbWVcblx0ICogQHBhcmFtIHtBcmd1bWVudHN9IC4uLmFyZ3MgalF1ZXJ5LmZuLm9uIG90aGVyIGFyZ3VtZW50c1xuXHQgKiBAcmV0dXJucyB7UGxheWVyfSB0aGlzXG5cdCAqL1xuXHR0cmlnZ2VyKGV2ZW50TmFtZSwgLi4uYXJncykge1xuXHRcdGNvbnN0IGV2ZW50ID0gJC5FdmVudChgbGVwbGF5ZXJfJHtldmVudE5hbWV9YCwgeyBwbGF5ZXIgOiB0aGlzLnBsYXllciB9KTtcblx0XHR0aGlzLmVsZW1lbnQudHJpZ2dlckhhbmRsZXIoZXZlbnQsIC4uLmFyZ3MpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblxuXHQvKipcblx0ICogTGlzdGVuIGEgcGxheWVyIGV2ZW50IHdpdGggbGVwbGF5ZXJfIHN1ZmZpeFxuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnROYW1lXG5cdCAqIEBwYXJhbSB7QXJndW1lbnRzfSAuLi5hcmdzIGpRdWVyeS5mbi5vbiBvdGhlciBhcmd1bWVudHNcblx0ICogQHJldHVybnMge1BsYXllcn0gdGhpc1xuXHQgKi9cblx0b24oZXZlbnROYW1lcywgLi4uYXJncykge1xuXHRcdGlmKHR5cGVvZiBldmVudE5hbWVzID09PSAnc3RyaW5nJyB8fCBldmVudE5hbWVzIGluc3RhbmNlb2YgU3RyaW5nKSB7XG5cdFx0XHR0aGlzLmVsZW1lbnQub24odG9QbGF5ZXJFdmVudChldmVudE5hbWVzKSwgLi4uYXJncyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnNvbGUud2FybignRmlyc3QgYXJndW1lbnQgb2YgXFwnQ29tcG9uZW50Lm9uXFwnIHNob3VsZCBiZSBhIHN0cmluZycpO1xuXHRcdFx0dGhpcy5lbGVtZW50Lm9uKGV2ZW50TmFtZXMsIC4uLmFyZ3MpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cblx0b25lKGV2ZW50TmFtZXMsIC4uLmFyZ3MpIHtcblx0XHRpZih0eXBlb2YgZXZlbnROYW1lcyA9PT0gJ3N0cmluZycgfHwgZXZlbnROYW1lcyBpbnN0YW5jZW9mIFN0cmluZykge1xuXHRcdFx0dGhpcy5lbGVtZW50Lm9uZSh0b1BsYXllckV2ZW50KGV2ZW50TmFtZXMpLCAuLi5hcmdzKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc29sZS53YXJuKCdGaXJzdCBhcmd1bWVudCBvZiBcXCdDb21wb25lbnQub25lXFwnIHNob3VsZCBiZSBhIHN0cmluZycpO1xuXHRcdFx0dGhpcy5lbGVtZW50Lm9uZShldmVudE5hbWVzLCAuLi5hcmdzKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBBZGQgdGhlIENTUyBjbGFzcyBmb3IgZ2VuZXJhbCBsZXBsYXllciBET00gZWxlbWVudFxuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIE5hbWUgb2YgY2xhc3MgKG5vdCBhIHNlbGVjdG9yLCBpdCdzIG1lYW4sIHRoYXQgc3RyaW5nIHNvdWxkIGJlIHdpdGhvdXQgcG9pbnQgYXQgdGhlIHN0YXJ0KVxuXHQgKiBAcmV0dXJucyB7UGxheWVyfSB0aGlzXG5cdCAqL1xuXHRhZGRDbGFzcyhjbGFzc05hbWUpIHtcblx0XHR0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoY2xhc3NOYW1lKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8qKlxuXHQgKiBSZW1vdmUgdGhlIENTUyBjbGFzcyBmcm9tIGdlbmVyYWwgbGVwbGF5ZXIgRE9NIGVsZW1lbnRcblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZSBOYW1lIG9mIGNsYXNzXG5cdCAqIEByZXR1cm5zIHtQbGF5ZXJ9IHRoaXNcblx0ICovXG5cdHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkge1xuXHRcdHRoaXMuZWxlbWVudC5yZW1vdmVDbGFzcyhjbGFzc05hbWUpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRvZ2dsZSB0aGUgQ1NTIGNsYXNzIGZyb20gZ2VuZXJhbCBsZXBsYXllciBET00gZWxlbWVudFxuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lXG5cdCAqIEBwYXJhbSB7Qm9vbGVhbn0gZmxhZ1xuXHQgKiBAcmV0dXJucyB7UGxheWVyfSB0aGlzXG5cdCAqL1xuXHR0b2dnbGVDbGFzcyhjbGFzc05hbWUsIGZsYWcpIHtcblx0XHR0aGlzLmVsZW1lbnQudG9nZ2xlQ2xhc3MoY2xhc3NOYW1lLCBmbGFnKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGhhc0NsYXNzKGNsYXNzTmFtZSkge1xuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQuaGFzQ2xhc3MoY2xhc3NOYW1lKTtcblx0fVxuXG5cblx0c3RhdGljIHJlZ2lzdGVyQ29tcG9uZW50KG5hbWUsIGNvbXBvbmVudCkge1xuXHRcdGlmKG5hbWUgPT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmKENvbXBvbmVudC5fY29tcG9uZW50cyA9PSBudWxsKSB7XG5cdFx0XHRDb21wb25lbnQuX2NvbXBvbmVudHMgPSB7fTtcblx0XHR9XG5cblx0XHRDb21wb25lbnQuX2NvbXBvbmVudHNbbmFtZV0gPSBjb21wb25lbnQ7XG5cblx0XHRyZXR1cm4gY29tcG9uZW50O1xuXHR9XG5cblx0c3RhdGljIGdldENvbXBvbmVudChuYW1lKSB7XG5cdFx0aWYobmFtZSA9PSBudWxsKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYoQ29tcG9uZW50Ll9jb21wb25lbnRzICYmIENvbXBvbmVudC5fY29tcG9uZW50c1tuYW1lXSkge1xuXHRcdFx0cmV0dXJuIENvbXBvbmVudC5fY29tcG9uZW50c1tuYW1lXTtcblx0XHR9XG5cblx0fVxuXG5cdHNldCB0YXAodmFsdWUpIHt9XG5cblx0ZW1pdFRhcEV2ZW50cyhlbGVtZW50PW51bGwpIHtcblx0XHRpZihlbGVtZW50ID09IG51bGwpIHtcblx0XHRcdGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQ7XG5cdFx0fVxuXHRcdC8vIFRyYWNrIHRoZSBzdGFydCB0aW1lIHNvIHdlIGNhbiBkZXRlcm1pbmUgaG93IGxvbmcgdGhlIHRvdWNoIGxhc3RlZFxuXHRcdGxldCB0b3VjaFN0YXJ0ID0gMDtcblx0XHRsZXQgZmlyc3RUb3VjaCA9IG51bGw7XG5cdFx0bGV0IGxhc3RNb3ZlVG91Y2ggPSBudWxsO1xuXG5cdFx0Ly8gTWF4aW11bSBtb3ZlbWVudCBhbGxvd2VkIGR1cmluZyBhIHRvdWNoIGV2ZW50IHRvIHN0aWxsIGJlIGNvbnNpZGVyZWQgYSB0YXBcblx0XHQvLyBPdGhlciBwb3B1bGFyIGxpYnMgdXNlIGFueXdoZXJlIGZyb20gMiAoaGFtbWVyLmpzKSB0byAxNSxcblx0XHQvLyBzbyAxMCBzZWVtcyBsaWtlIGEgbmljZSwgcm91bmQgbnVtYmVyLlxuXHRcdGNvbnN0IHRhcE1vdmVtZW50VGhyZXNob2xkID0gMTA7XG5cblx0XHQvLyBUaGUgbWF4aW11bSBsZW5ndGggYSB0b3VjaCBjYW4gYmUgd2hpbGUgc3RpbGwgYmVpbmcgY29uc2lkZXJlZCBhIHRhcFxuXHRcdGNvbnN0IHRvdWNoVGltZVRocmVzaG9sZCA9IDIwMDtcblxuXHRcdGxldCBjb3VsZEJlVGFwO1xuXG5cdFx0Ly8gc2VlIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzE3OTU3NTkzL2hvdy10by1jYXB0dXJlLXRvdWNoZW5kLWNvb3JkaW5hdGVzXG5cblx0XHRlbGVtZW50Lm9uKCd0b3VjaHN0YXJ0JywgKGV2ZW50KSA9PiB7XG5cdFx0XHQvLyBJZiBtb3JlIHRoYW4gb25lIGZpbmdlciwgZG9uJ3QgY29uc2lkZXIgdHJlYXRpbmcgdGhpcyBhcyBhIGNsaWNrXG5cdFx0XHRpZiAoZXZlbnQudG91Y2hlcy5sZW5ndGggPT09IDEpIHtcblx0XHRcdFx0Ly8gQ29weSBwYWdlWC9wYWdlWSBmcm9tIHRoZSBvYmplY3Rcblx0XHRcdFx0Zmlyc3RUb3VjaCA9IGxhc3RNb3ZlVG91Y2ggPSB7XG5cdFx0XHRcdFx0cGFnZVggOiBldmVudC50b3VjaGVzWzBdLnBhZ2VYLFxuXHRcdFx0XHRcdHBhZ2VZIDogZXZlbnQudG91Y2hlc1swXS5wYWdlWVxuXHRcdFx0XHR9O1xuXHRcdFx0XHQvLyBSZWNvcmQgc3RhcnQgdGltZSBzbyB3ZSBjYW4gZGV0ZWN0IGEgdGFwIHZzLiBcInRvdWNoIGFuZCBob2xkXCJcblx0XHRcdFx0dG91Y2hTdGFydCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXHRcdFx0XHQvLyBSZXNldCBjb3VsZEJlVGFwIHRyYWNraW5nXG5cdFx0XHRcdGNvdWxkQmVUYXAgPSB0cnVlO1xuXHRcdFx0XHR0aGlzLnRhcCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRlbGVtZW50Lm9uKCd0b3VjaG1vdmUnLCAoZXZlbnQpID0+IHtcblx0XHRcdC8vIElmIG1vcmUgdGhhbiBvbmUgZmluZ2VyLCBkb24ndCBjb25zaWRlciB0cmVhdGluZyB0aGlzIGFzIGEgY2xpY2tcblx0XHRcdGlmIChldmVudC50b3VjaGVzLmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0Y291bGRCZVRhcCA9IGZhbHNlO1xuXHRcdFx0fSBlbHNlIGlmIChmaXJzdFRvdWNoKSB7XG5cdFx0XHQvLyBTb21lIGRldmljZXMgd2lsbCB0aHJvdyB0b3VjaG1vdmVzIGZvciBhbGwgYnV0IHRoZSBzbGlnaHRlc3Qgb2YgdGFwcy5cblx0XHRcdC8vIFNvLCBpZiB3ZSBtb3ZlZCBvbmx5IGEgc21hbGwgZGlzdGFuY2UsIHRoaXMgY291bGQgc3RpbGwgYmUgYSB0YXBcblx0XHRcdFx0Y29uc3QgeGRpZmYgPSBldmVudC50b3VjaGVzWzBdLnBhZ2VYIC0gZmlyc3RUb3VjaC5wYWdlWDtcblx0XHRcdFx0Y29uc3QgeWRpZmYgPSBldmVudC50b3VjaGVzWzBdLnBhZ2VZIC0gZmlyc3RUb3VjaC5wYWdlWTtcblx0XHRcdFx0Y29uc3QgdG91Y2hEaXN0YW5jZSA9IE1hdGguc3FydCh4ZGlmZiAqIHhkaWZmICsgeWRpZmYgKiB5ZGlmZik7XG5cblx0XHRcdFx0aWYgKGV2ZW50LnRvdWNoZXMubGVuZ3RoID09PSAxKSB7XG5cdFx0XHRcdFx0bGFzdE1vdmVUb3VjaCA9IHtcblx0XHRcdFx0XHRcdHBhZ2VYIDogZXZlbnQudG91Y2hlc1swXS5wYWdlWCxcblx0XHRcdFx0XHRcdHBhZ2VZIDogZXZlbnQudG91Y2hlc1swXS5wYWdlWVxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAodG91Y2hEaXN0YW5jZSA+IHRhcE1vdmVtZW50VGhyZXNob2xkKSB7XG5cdFx0XHRcdFx0Y291bGRCZVRhcCA9IGZhbHNlO1xuXHRcdFx0XHRcdHRoaXMudGFwID0gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdGNvbnN0IG5vVGFwID0gKCkgPT4ge1xuXHRcdFx0Y291bGRCZVRhcCA9IGZhbHNlO1xuXHRcdFx0dGhpcy50YXAgPSBmYWxzZTtcblx0XHR9O1xuXG5cdFx0Ly8gVE9ETzogTGlzdGVuIHRvIHRoZSBvcmlnaW5hbCB0YXJnZXQuIGh0dHA6Ly95b3V0dS5iZS9EdWpmcFhPS1VwOD90PTEzbThzXG5cdFx0ZWxlbWVudC5vbigndG91Y2hsZWF2ZScsIG5vVGFwKTtcblx0XHRlbGVtZW50Lm9uKCd0b3VjaGNhbmNlbCcsIG5vVGFwKTtcblxuXHRcdC8vIFdoZW4gdGhlIHRvdWNoIGVuZHMsIG1lYXN1cmUgaG93IGxvbmcgaXQgdG9vayBhbmQgdHJpZ2dlciB0aGUgYXBwcm9wcmlhdGVcblx0XHQvLyBldmVudFxuXHRcdGVsZW1lbnQub24oJ3RvdWNoZW5kJywgKGV2ZW50KSA9PiB7XG5cdFx0XHRmaXJzdFRvdWNoID0gbnVsbDtcblx0XHRcdHRoaXMudGFwID0gZmFsc2U7XG5cdFx0XHQvLyBQcm9jZWVkIG9ubHkgaWYgdGhlIHRvdWNobW92ZS9sZWF2ZS9jYW5jZWwgZXZlbnQgZGlkbid0IGhhcHBlblxuXHRcdFx0aWYgKGNvdWxkQmVUYXAgPT09IHRydWUpIHtcblx0XHRcdC8vIE1lYXN1cmUgaG93IGxvbmcgdGhlIHRvdWNoIGxhc3RlZFxuXHRcdFx0XHRjb25zdCB0b3VjaFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHRvdWNoU3RhcnQ7XG5cblx0XHRcdFx0Ly8gTWFrZSBzdXJlIHRoZSB0b3VjaCB3YXMgbGVzcyB0aGFuIHRoZSB0aHJlc2hvbGQgdG8gYmUgY29uc2lkZXJlZCBhIHRhcFxuXHRcdFx0XHRpZiAodG91Y2hUaW1lIDwgdG91Y2hUaW1lVGhyZXNob2xkKSB7XG5cdFx0XHRcdFx0Ly8gRG9uJ3QgbGV0IGJyb3dzZXIgdHVybiB0aGlzIGludG8gYSBjbGlja1xuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0LyoqXG5cdFx0XHRcdFx0ICogVHJpZ2dlcmVkIHdoZW4gYSBgQ29tcG9uZW50YCBpcyB0YXBwZWQuXG5cdFx0XHRcdFx0ICpcblx0XHRcdFx0XHQgKiBAZXZlbnQgQ29tcG9uZW50I3RhcFxuXHRcdFx0XHRcdCAqL1xuXHRcdFx0XHRcdGNvbnN0IHRhcEV2ZW50ID0gJC5FdmVudCgndGFwJyk7XG5cdFx0XHRcdFx0dGFwRXZlbnQucGFnZVggPSBsYXN0TW92ZVRvdWNoLnBhZ2VYO1xuXHRcdFx0XHRcdHRhcEV2ZW50LnBhZ2VZID0gbGFzdE1vdmVUb3VjaC5wYWdlWTtcblx0XHRcdFx0XHRlbGVtZW50LnRyaWdnZXIodGFwRXZlbnQpO1xuXHRcdFx0XHRcdC8vIEl0IG1heSBiZSBnb29kIHRvIGNvcHkgdGhlIHRvdWNoZW5kIGV2ZW50IG9iamVjdCBhbmQgY2hhbmdlIHRoZVxuXHRcdFx0XHRcdC8vIHR5cGUgdG8gdGFwLCBpZiB0aGUgb3RoZXIgZXZlbnQgcHJvcGVydGllcyBhcmVuJ3QgZXhhY3QgYWZ0ZXJcblx0XHRcdFx0XHQvLyBFdmVudHMuZml4RXZlbnQgcnVucyAoZS5nLiBldmVudC50YXJnZXQpXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnQ29tcG9uZW50JywgQ29tcG9uZW50KTtcbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL0NvbXBvbmVudC5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgSWNvbi5qc1xuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcblxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIEljb24ncyBvcHRpb25zXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuaWNvbk5hbWU9JyddIEljb24ncyBuYW1lLiBJZiB1c2Ugc3Znc3ByaXRlIGljb25zLCBpY29uTmFtZSBpdCdzIGlkIGluIHNwcml0ZVxuICogQGNsYXNzIEljb25cbiAqIEBleHRlbmRzIENvbXBvbmVudFxuICovXG5jbGFzcyBJY29uIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3RvciAocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRjbGFzc05hbWUgOiAnJyxcblx0XHRcdGljb25OYW1lIDogJydcblx0XHR9LCBvcHRpb25zKVxuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cblx0fVxuXG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHR0aGlzLl91c2VUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3VzZScpO1xuXHRcdHRoaXMuX3N2Z1RhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XG5cblx0XHR0aGlzLmljb25OYW1lID0gdGhpcy5faWNvbk5hbWUgPSB0aGlzLm9wdGlvbnMuaWNvbk5hbWU7XG5cdFx0dGhpcy5fc3ZnVGFnLmFwcGVuZENoaWxkKHRoaXMuX3VzZVRhZyk7XG5cdFx0dGhpcy5lbGVtZW50ID0gJCgnPGRpdiAvPicpXG5cdFx0XHQuYWRkQ2xhc3ModGhpcy5idWlsZENTU0NsYXNzKCkpXG5cdFx0XHQuYXR0cigndGl0bGUnLCB0aGlzLm9wdGlvbnMudGl0bGUpXG5cdFx0XHQuYXBwZW5kKCQodGhpcy5fc3ZnVGFnKSk7XG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudDtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGJ1aWxkQ1NTQ2xhc3MoKSB7XG5cdFx0cmV0dXJuIGAke3N1cGVyLmJ1aWxkQ1NTQ2xhc3MoKX0gbGVwbGF5ZXItaWNvbiAke3RoaXMub3B0aW9ucy5jbGFzc05hbWV9YFxuXHR9XG5cblx0LyoqXG5cdCAqIFNldHRlciBvZiBpY29uTmFtZSBmaWVsZFxuXHQgKiBAcGFyYW0ge1N0cmluZ30gaWNvbk5hbWVcblx0ICovXG5cdHNldCBpY29uTmFtZShpY29uTmFtZSkge1xuXHRcdGxldCBhdHRyTlMgPSBbJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnLCAnaHJlZiddXG5cdFx0dGhpcy5fdXNlVGFnLnJlbW92ZUF0dHJpYnV0ZU5TKC4uLmF0dHJOUywgYCR7dGhpcy5wbGF5ZXIub3B0aW9ucy5zdmdQYXRofSNsZXBsYXllci1pY29uLSR7dGhpcy5pY29uTmFtZX1gKVxuXHRcdHRoaXMuX3VzZVRhZy5zZXRBdHRyaWJ1dGVOUyguLi5hdHRyTlMsIGAke3RoaXMucGxheWVyLm9wdGlvbnMuc3ZnUGF0aH0jbGVwbGF5ZXItaWNvbi0ke2ljb25OYW1lfWApXG5cdFx0dGhpcy5faWNvbk5hbWUgPSBpY29uTmFtZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXR0ZXIgb2YgaWNvbk5hbWUgZmllbGRcblx0ICogQHJldHVybiB7U3RyaW5nfSBJY29uJ3MgbmFtZVxuXHQgKi9cblx0Z2V0IGljb25OYW1lICgpIHtcblx0XHRyZXR1cm4gdGhpcy5faWNvbk5hbWU7XG5cdH1cblxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ0ljb24nLCBJY29uKTtcbmV4cG9ydCBkZWZhdWx0IEljb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9JY29uLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBQbGF5QnV0dG9uLmpzXG4gKi9cblxuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9Db250cm9sJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJztcbmltcG9ydCB7IGNyZWF0ZUVsIH0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgSVNfVE9VQ0ggfSBmcm9tICcuLi91dGlscy9icm93c2VyJztcblxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKi9cbmNsYXNzIFBsYXlCdXR0b24gZXh0ZW5kcyBDb250cm9sIHtcblxuXHRjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpXG5cdH1cblxuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdGNvbnN0IGlubmVyID0gY3JlYXRlRWwoJ2RpdicsIHtcblx0XHRcdGNsYXNzTmFtZSA6ICdsZXBsYXllci1wbGF5LWJ1dHRvbl9fYnV0dG9uJ1xuXHRcdH0pXG5cdFx0LmFwcGVuZChuZXcgSWNvbih0aGlzLnBsYXllciwgeyBpY29uTmFtZSA6ICdwbGF5JyB9KS5lbGVtZW50KTtcblxuXHRcdHRoaXMuZWxlbWVudCA9IGNyZWF0ZUVsKCdkaXYnLCB7XG5cdFx0XHRjbGFzc05hbWUgOiB0aGlzLmJ1aWxkQ1NTQ2xhc3MoKVxuXHRcdH0pXG5cdFx0LmFwcGVuZChpbm5lcik7XG5cblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50O1xuXHR9XG5cblx0b25DbGljayhlKSB7XG5cdFx0c3VwZXIub25DbGljayhlKTtcblx0XHQvKipcblx0XHQgKiBTZWUgTFBMUi0yOTBcblx0XHQgKiBPbiB0b3VjaCBkZXZpY2VzIGluIGZ1bGxzY3JlZW4gaWYgdXNlciBub3QgYWN0aXZlIHdlIGRvbid0IHNob3VsZCBwbGF5LlxuXHRcdCAqIEF0IGZpcnN0IHdlIHNob3cgaGltIGEgY29udHJvbHNcblx0XHQgKi9cblx0XHRpZihJU19UT1VDSCgpICYmIHRoaXMucGxheWVyLnZpZXcgPT09ICdmdWxsc2NyZWVuJykge1xuXHRcdFx0aWYodGhpcy5wbGF5ZXIudXNlckFjdGl2ZSkge1xuXHRcdFx0XHR0aGlzLnBsYXllci5wbGF5KCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucGxheWVyLnBsYXkoKTtcblx0XHR9XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGJ1aWxkQ1NTQ2xhc3MoKSB7XG5cdFx0cmV0dXJuIGBsZXBsYXllci1wbGF5LWJ1dHRvbiAke3RoaXMub3B0aW9ucy5jbGFzc05hbWV9YFxuXHR9XG5cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdQbGF5QnV0dG9uJywgUGxheUJ1dHRvbik7XG5Db250cm9sLnJlZ2lzdGVyQ29udHJvbCgncGxheSBidXR0b24nLCBQbGF5QnV0dG9uKTtcbmV4cG9ydCBkZWZhdWx0IFBsYXlCdXR0b247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9QbGF5QnV0dG9uLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSB0aW1lLmpzXG4gKlxuICogQG1vZHVsZSB0aW1lXG4gKi9cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbi8qKlxuICogQ29udmVydCBzZWNvbmRzIHRvIGZvcm1hdCBzdHJpbmcgJ2hoPzptbTpzcydcbiAqXG4gKiBAYWNjZXNzIHB1YmxpY1xuICogQHBhcmFtIHtOdW1iZXJ9IHNlY29uZHMgU2Vjb25kc1xuICogQHBhcmFtIHtCb29sZWFufSBzaG93SG91cnMgY29udmVydCB0byBmb3JtYXQgJ2hoOm1tOnNzJ1xuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNlY29uZHNUb1RpbWUgKHNlY29uZHMsIHNob3dIb3Vycykge1xuXHR2YXIgaCA9IE1hdGguZmxvb3Ioc2Vjb25kcyAvIDM2MDApO1xuXHR2YXIgbSA9IE1hdGguZmxvb3Ioc2Vjb25kcyAlIDM2MDAgLyA2MCk7XG5cdHZhciBzID0gTWF0aC5mbG9vcihzZWNvbmRzICUgMzYwMCAlIDYwKTtcblx0dmFyIG91dCA9ICcnO1xuXHRpZiAobSA8IDEwKSB7XG5cdFx0bSA9ICcwJyArIG07XG5cdH1cblx0aWYgKHMgPCAxMCkge1xuXHRcdHMgPSAnMCcgKyBzO1xuXHR9XG5cdG91dCA9IGAke219OiR7c31gO1xuXG5cdGlmKGggPiAwIHx8IHNob3dIb3Vycykge1xuXHRcdG91dCA9IGAke2h9OmAgKyBvdXRcblx0fVxuXHRyZXR1cm4gb3V0O1xufVxuXG5cbi8qKlxuICogUmV0dXJuIGxlbmd0aCAvIGVuZFxuICpcbiAqIEBhY2Nlc3MgcHVibGljXG4gKiBAcGFyYW0ge051bWJlcn0gbGVuZ3RoXG4gKiBAcGFyYW0ge051Ym1lcn0gZW5kXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwZXJjZW50aWZ5IChsZW5ndGgsIGVuZCkge1xuXHQvLyBvciB6ZXJvIGJlYWNhc2UgTmFOXG5cdGNvbnN0IHBlcmNlbnQgPSAobGVuZ3RoIC8gZW5kKSB8fCAwO1xuXHRyZXR1cm4gKHBlcmNlbnQgPj0gMSkgPyAxIDogcGVyY2VudDtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWwodGFnPSdkaXYnLCBwcm9wcykge1xuXHRpZihwcm9wcyAmJiBwcm9wcy5jbGFzc05hbWUpIHtcblx0XHRwcm9wc1tcImNsYXNzXCJdID0gcHJvcHMuY2xhc3NOYW1lO1xuXHRcdGRlbGV0ZSBwcm9wcy5jbGFzc05hbWU7XG5cdH1cblx0cmV0dXJuICQoYDwke3RhZ30vPmAsIHByb3BzKTtcbn1cblxuXG4vKipcbiAqIEBwYXJhbXMge1N0cmluZ30gSHRtbFxuICovXG5leHBvcnQgZnVuY3Rpb24gJGh0bWwoaHRtbCkge1xuXG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5leHBvcnQgY29uc3QgZ2V0U2Nyb2xsQmFyV2lkdGggPSAoZnVuY3Rpb24oKSB7XG5cdGxldCByZXN1bHQ7XG5cblx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXG5cdFx0aWYocmVzdWx0ICE9IG51bGwpIHtcblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fVxuXG5cdFx0Y29uc3Qgb3V0ZXIgPSAkKCc8ZGl2IC8+JykuY3NzKHtcblx0XHRcdHZpc2liaWxpdHkgOiAnaGlkZGVuJyxcblx0XHRcdHdpZHRoIDogMTAwLFxuXHRcdFx0b3ZlcmZsb3cgOiAnc2Nyb2xsJ1xuXHRcdH0pLmFwcGVuZFRvKCdib2R5Jyk7XG5cblx0XHRjb25zdCB3aWR0aFdpdGhTY3JvbGwgPSAkKCc8ZGl2IC8+JykuY3NzKHtcblx0XHRcdHdpZHRoIDogJzEwMCUnXG5cdFx0fSkuYXBwZW5kVG8ob3V0ZXIpLm91dGVyV2lkdGgoKTtcblxuXHRcdG91dGVyLnJlbW92ZSgpO1xuXHRcdHJldHVybiByZXN1bHQgPSAxMDAgLSB3aWR0aFdpdGhTY3JvbGw7XG5cdH1cblxufSgpKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy91dGlscy9pbmRleC5qcyIsIi8qKlxuICogQGZpbGUgYnJvd3Nlci5qc1xuICovXG5cblxuY29uc3QgVVNFUl9BR0VOVCA9IHdpbmRvdy5uYXZpZ2F0b3IgJiYgd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQgfHwgJyc7XG5cbmV4cG9ydCBjb25zdCBJU19NT0JJTEUgPSAoL01vYmlsZS9pKS50ZXN0KFVTRVJfQUdFTlQpO1xuXG5leHBvcnQgY29uc3QgSVNfQ0hST01FID0gVVNFUl9BR0VOVC5pbmRleE9mKCdDaHJvbWUnKSA+IC0xO1xuXG5leHBvcnQgY29uc3QgSVNfQU5EUk9JRCA9ICgvQW5kcm9pZC9pKS50ZXN0KFVTRVJfQUdFTlQpO1xuXG5leHBvcnQgY29uc3QgSVNfQU5EUk9JRF9QSE9ORSA9IElTX0FORFJPSUQgJiYgSVNfTU9CSUxFO1xuXG5leHBvcnQgY29uc3QgSVNfSVBBRCA9ICgvaVBhZC9pKS50ZXN0KFVTRVJfQUdFTlQpO1xuLy8gVGhlIEZhY2Vib29rIGFwcCdzIFVJV2ViVmlldyBpZGVudGlmaWVzIGFzIGJvdGggYW4gaVBob25lIGFuZCBpUGFkLCBzb1xuLy8gdG8gaWRlbnRpZnkgaVBob25lcywgd2UgbmVlZCB0byBleGNsdWRlIGlQYWRzLlxuLy8gaHR0cDovL2FydHN5LmdpdGh1Yi5pby9ibG9nLzIwMTIvMTAvMTgvdGhlLXBlcmlscy1vZi1pb3MtdXNlci1hZ2VudC1zbmlmZmluZy9cbmV4cG9ydCBjb25zdCBJU19JUEhPTkUgPSAoL2lQaG9uZS9pKS50ZXN0KFVTRVJfQUdFTlQpICYmICFJU19JUEFEO1xuZXhwb3J0IGNvbnN0IElTX0lQT0QgPSAoL2lQb2QvaSkudGVzdChVU0VSX0FHRU5UKTtcbmV4cG9ydCBjb25zdCBJU19JT1MgPSBJU19JUEhPTkUgfHwgSVNfSVBBRCB8fCBJU19JUE9EO1xuXG5leHBvcnQgY29uc3QgSVNfU0FGQVJJID0gVVNFUl9BR0VOVC5pbmRleE9mKCdTYWZhcmknKSA+IC0xICYmICFJU19DSFJPTUU7XG5cbmV4cG9ydCBjb25zdCBJU19UT1VDSCA9ICgpID0+ICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdyB8fCBuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL3V0aWxzL2Jyb3dzZXIuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIFNwbGFzaEljb24uanNcbiAqL1xuXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCBJY29uIGZyb20gJy4vSWNvbic7XG5cbi8qKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQGNsYXNzIFNwbGFzaEljb25cbiAqIEBleHRlbmRzIENvbXBvbmVudFxuICovXG5jbGFzcyBTcGxhc2hJY29uIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXHRzaG93KG5hbWUpIHtcblx0XHR0aGlzLmljb24uaWNvbk5hbWUgPSBuYW1lO1xuXHRcdHRoaXMuZWxlbWVudC5hZGRDbGFzcygnbGVwbGF5ZXItc3BsYXNoaWNvbi0tYWN0aXZlJyk7XG5cdFx0c2V0VGltZW91dCgoKSA9PiB0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3MoJ2xlcGxheWVyLXNwbGFzaGljb24tLWFjdGl2ZScpLCAzMDApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHR0aGlzLmljb24gPSBuZXcgSWNvbih0aGlzLnBsYXllcik7XG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudCA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0LmFkZENsYXNzKCdsZXBsYXllci1zcGxhc2hpY29uJylcblx0XHRcdC5hcHBlbmQodGhpcy5pY29uLmVsZW1lbnQpO1xuXHR9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3BsYXNoSWNvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL1NwbGFzaEljb24uanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIFRpbWUuanNcbiAqL1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vQ29tcG9uZW50JztcbmltcG9ydCB7IHNlY29uZHNUb1RpbWUsIGNyZWF0ZUVsIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG4vLyBUT0RPOiDQmNGB0L/QvtC70YzQt9C+0LLQsNGC0Ywg0Y3RgtC+0YIg0LHQu9C+0Log0LIgVGltZUNvbnRyb2xcbi8qKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQGNsYXNzIFRpbWVcbiAqIEBleHRlbmRzIENvbnRyb2xcbiAqL1xuY2xhc3MgVGltZSBleHRlbmRzIENvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IgKHBsYXllciwgb3B0aW9ucz17fSkge1xuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0Zm4gOiAocGxheWVyKSA9PiB7XG5cdFx0XHRcdGNvbnN0IHZpZGVvID0gcGxheWVyLnZpZGVvO1xuXHRcdFx0XHRyZXR1cm4gc2Vjb25kc1RvVGltZSh2aWRlby5jdXJyZW50VGltZSk7XG5cdFx0XHR9XG5cdFx0fSwgb3B0aW9ucyk7XG5cblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ3RpbWV1cGRhdGUnLCB0aGlzLnVwZGF0ZVRleHQuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5wbGF5ZXIub24oJ2luaXRlZCcsIHRoaXMudXBkYXRlVGV4dC5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdHVwZGF0ZVRleHQoZSwgZGF0YSkge1xuXHRcdHRoaXMuZWxlbWVudC50ZXh0KHRoaXMub3B0aW9ucy5mbih0aGlzLnBsYXllcikpO1xuXHR9XG5cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHR0aGlzLmVsZW1lbnQgPSBjcmVhdGVFbCgnZGl2JywgeyBjbGFzc05hbWUgOiAnbGVwbGF5ZXItdGltZScgfSk7XG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudDtcblx0fVxuXG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnVGltZScsIFRpbWUpO1xuZXhwb3J0IGRlZmF1bHQgVGltZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL1RpbWVsaW5lL1RpbWUuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIENvbnRyb2xDb2xsZWN0aW9uLmpzXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9Db250cm9sJztcblxuaW1wb3J0IHsgY3JlYXRlRWwgfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBJU19BTkRST0lEX1BIT05FLCBJU19JUEhPTkUsIElTX01PQklMRSB9IGZyb20gJy4uL3V0aWxzL2Jyb3dzZXInO1xuXG5cbi8qKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBPcHRpb25zIG9mIGNvbXBvbmVudFxuICogQHBhcmFtIHtqUXVlcnl9IFtvcHRpb25zLmNvbnRyb2xzXSBBcnJheSBvZiByb3dzIG9mIGNvbnRyb2wncyBuYW1lXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMuY29udHJvbHNPcHRpb25zXSBDb250cm9sIG9wdGlvbnNcbiAqIEBwcm9wZXJ0eSB7QXJyYXl9IEFycmF5IG9mIHJvd3Mgb2YgY29udHJvbCdzIG5hbWVcbiAqIEBwclxuICpcbiAqL1xuY2xhc3MgQ29udHJvbENvbGxlY3Rpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3RvciAocGxheWVyLCBvcHRpb25zKSB7XG5cdFx0bGV0IHsgbmFtZSB9ID0gb3B0aW9ucztcblxuXHRcdC8vIE9wdGlvbnMgYnkgdXNlciBhZ2VudFxuXHRcdC8vIE9wdGlvbnMgb25seSBmb3IgY29tbW9uOmFuZHJvaWQgb3Igd2hhdGV2ZXI6YW5kcm9pZCwgd2hhdGV2ZXI6aW9zIGNvbnRyb2xzXG5cdFx0bGV0IGxvY2FsVWFPcHRpb25zID0ge307XG5cblx0XHRsZXQgY29udHJvbHNPcHRpb25zID0ge307XG5cblx0XHRsZXQgY29udHJvbHMgPSBbXTtcblxuXHRcdGlmKG5hbWUgIT0gbnVsbCkge1xuXG5cdFx0XHRjb250cm9scyA9IHBsYXllci5vcHRpb25zLmNvbnRyb2xzW25hbWVdO1xuXG5cdFx0XHRjb250cm9sc09wdGlvbnMgPSBwbGF5ZXIub3B0aW9ucy5jb250cm9sc09wdGlvbnNbbmFtZV07XG5cblx0XHRcdFtcblx0XHRcdFx0eyBmbGFnIDogSVNfTU9CSUxFLCBuYW1lIDogJ21vYmlsZSd9LFxuICAgICAgICAgICAgICAgIHsgZmxhZyA6IElTX0FORFJPSURfUEhPTkUsIG5hbWUgOiAnYW5kcm9pZCcgfSxcbiAgICAgICAgICAgICAgICB7IGZsYWcgOiBJU19JUEhPTkUsIG5hbWUgOiAnaW9zJyB9LFxuXHRcdFx0XS5mb3JFYWNoKGl0ZW0gPT4ge1xuXHRcdFx0XHRpZihpdGVtLmZsYWcpIHtcblx0XHRcdFx0XHRjb25zdCBsb2NhbE5hbWUgPSBgJHtuYW1lfToke2l0ZW0ubmFtZX1gO1xuXG5cdFx0XHRcdFx0aWYocGxheWVyLm9wdGlvbnMuY29udHJvbHNbbG9jYWxOYW1lXSkge1xuXHRcdFx0XHRcdFx0bG9jYWxVYU9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgbG9jYWxVYU9wdGlvbnMsIHBsYXllci5vcHRpb25zLmNvbnRyb2xzT3B0aW9uc1tsb2NhbE5hbWVdKTtcblx0XHRcdFx0XHRcdGNvbnRyb2xzID0gcGxheWVyLm9wdGlvbnMuY29udHJvbHNbbG9jYWxOYW1lXTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIGl0ZW0uZmxhZztcblx0XHRcdH0pO1xuXHRcdH1cblxuXG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRjb250cm9scyA6IGNvbnRyb2xzLFxuXHRcdFx0YWxpZ24gOiAnbGVmdCcsXG5cdFx0XHRjb250cm9sc09wdGlvbnMgOiB7fVxuXHRcdH0sIGxvY2FsVWFPcHRpb25zLCBjb250cm9sc09wdGlvbnMsIG9wdGlvbnMpO1xuXG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblxuXHRcdHRoaXMuYWN0aXZlID0gb3B0aW9ucy5hY3RpdmUgfHwgZmFsc2U7XG5cdFx0dGhpcy5uYW1lID0gb3B0aW9ucy5uYW1lO1xuXG5cdFx0dGhpcy5wbGF5ZXIuY29udHJvbHNbdGhpcy5uYW1lXSA9IHRoaXM7XG5cdH1cblxuXG5cdF9nZXRDb250cm9sT3B0aW9ucyhuYW1lKSB7XG5cdFx0Y29uc3QgeyBjb250cm9sc09wdGlvbnMgfSA9IHRoaXMub3B0aW9ucztcblx0XHRsZXQgcmVzdWx0ID0gY29udHJvbHNPcHRpb25zLmNvbnRyb2wgfHwge307XG5cblx0XHRpZihjb250cm9sc09wdGlvbnNbbmFtZV0pIHtcblx0XHRcdHJlc3VsdCA9ICQuZXh0ZW5kKHRydWUsIHt9LCByZXN1bHQsIGNvbnRyb2xzT3B0aW9uc1tuYW1lXSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdGFkZENvbnRyb2woaW5kZXhSb3csIG5hbWUsIG9wdGlvbnMpIHtcblx0XHRjb25zdCBjb250cm9sID0gQ29udHJvbC5jcmVhdGUodGhpcy5wbGF5ZXIsIG5hbWUsIHtcblx0XHRcdGNvbGxlY3Rpb24gOiB0aGlzLm9wdGlvbnMubmFtZSxcblx0XHRcdC4uLm9wdGlvbnNcblx0XHR9KTtcblxuXHRcdGlmKGNvbnRyb2wgPT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHdoaWxlKGluZGV4Um93ID4gdGhpcy5fcm93cy5sZW5ndGgpIHtcblx0XHRcdHRoaXMuYWRkUm93KCk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgZWxlbVJvdyA9IHRoaXMuX3Jvd3NbaW5kZXhSb3ddO1xuXHRcdGVsZW1Sb3cuYXBwZW5kKGNvbnRyb2wuZWxlbWVudCk7XG5cblx0XHRpZiAodGhpcy5jb250cm9scyA9PSBudWxsKSB7XG5cdFx0XHR0aGlzLmNvbnRyb2xzID0gW107XG5cdFx0fVxuXHRcdGlmICh0aGlzLmNvbnRyb2xzW2luZGV4Um93XSA9PSBudWxsKSB7XG5cdFx0XHR0aGlzLmNvbnRyb2xzW2luZGV4Um93XSA9IHt9O1xuXHRcdH1cblxuXHRcdHRoaXMuY29udHJvbHNbaW5kZXhSb3ddW25hbWVdID0gY29udHJvbDtcblx0fVxuXG5cdGdldENvbnRyb2woZmlyc3QsIHNlY29uZCkge1xuXHRcdGlmKHNlY29uZCA9PSBudWxsKSB7XG5cdFx0XHRjb25zdCBuYW1lID0gZmlyc3Q7XG5cdFx0XHRmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5jb250cm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZih0aGlzLmNvbnRyb2xzW2ldW25hbWVdICE9IG51bGwpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5jb250cm9sc1tpXVtuYW1lXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zdCBuYW1lID0gZmlyc3Q7XG5cdFx0XHRjb25zdCBpbmRleFJvdyA9IHNlY29uZDtcblx0XHRcdHJldHVybiB0aGlzLmNvbnRyb2xzW2luZGV4Um93XVtuYW1lXTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGFkZFJvdygpIHtcblx0XHRjb25zdCBlbGVtUm93ID0gY3JlYXRlRWwoJ2RpdicsIHtcblx0XHRcdGNsYXNzTmFtZSA6IGBsZXBsYXllci1jb250cm9scyBjb250cm9scy0ke3RoaXMub3B0aW9ucy5uYW1lfWBcblx0XHR9KTtcblxuXHRcdGlmICh0aGlzLl9yb3dzID09IG51bGwpIHtcblx0XHRcdHRoaXMuX3Jvd3MgPSBbXVxuXHRcdH1cblx0XHR0aGlzLl9yb3dzLnB1c2goZWxlbVJvdyk7XG5cdFx0dGhpcy5lbGVtZW50LmFwcGVuZChlbGVtUm93KTtcblxuXHRcdHJldHVybiBlbGVtUm93O1xuXHR9XG5cblx0Z2V0Um93KGluZGV4Um93KSB7XG5cdFx0cmV0dXJuIHRoaXMuX3Jvd3NbaW5kZXhSb3cgfHwgMF07XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdGNvbnN0IHsgbmFtZSwgY29udHJvbHMsIGFsaWduIH0gPSB0aGlzLm9wdGlvbnM7XG5cdFx0bGV0IGdsb2JhbEFsaWduID0gbnVsbDtcblxuXHRcdHRoaXMuZWxlbWVudCA9IGNyZWF0ZUVsKCdkaXYnLCB7XG5cdFx0XHRjbGFzc05hbWUgOiBgbGVwbGF5ZXItY29udHJvbC1jb2xsZWN0aW9uIGxlcGxheWVyLWNvbnRyb2wtY29sbGVjdGlvbi0tJHtuYW1lfWAsXG5cdFx0fSlcblxuXHRcdGlmKHR5cGVvZiBhbGlnbiA9PT0gJ3N0cmluZycpIHtcblx0XHRcdGdsb2JhbEFsaWduID0gYWxpZ247XG5cdFx0fVxuXG5cdFx0Y29udHJvbHMuZm9yRWFjaCgocm93LCBpbmRleFJvdykgPT4ge1xuXHRcdFx0Y29uc3QgZWxlbVJvdyA9IHRoaXMuYWRkUm93KCk7XG5cdFx0XHRsZXQgcm93QWxpZ24gPSBnbG9iYWxBbGlnbjtcblxuXHRcdFx0aWYoQXJyYXkuaXNBcnJheShhbGlnbikgJiYgYWxpZ25baW5kZXhSb3ddKSB7XG5cdFx0XHRcdHJvd0FsaWduID0gYWxpZ25baW5kZXhSb3ddXG5cdFx0XHR9XG5cblx0XHRcdHJvdy5mb3JFYWNoKGNvbnRyb2xOYW1lID0+IHtcblxuXHRcdFx0XHRpZihjb250cm9sTmFtZSA9PT0gJ3RpbWVsaW5lJyAmJiByb3dBbGlnbiAhPT0gJ2p1c3RpZnknKSB7XG5cdFx0XHRcdFx0Y29uc29sZS53YXJuKCdDb25yb2xzIHNob3VsZCBoYXZlIGp1c3RpZnkgYWxpZ24sIGlmIHRoZXJlIGlzIHRoZSB0aW1lbGluZSBpbiBpdCcpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5hZGRDb250cm9sKGluZGV4Um93LCBjb250cm9sTmFtZSwgdGhpcy5fZ2V0Q29udHJvbE9wdGlvbnMobmFtZSkpO1xuXHRcdFx0fSk7XG5cblx0XHRcdGVsZW1Sb3cuYWRkQ2xhc3MoYGxlcGxheWVyLWNvbnRyb2xzLS0ke3Jvd0FsaWdufWApXG5cdFx0XHRcdC5hdHRyKCd0YWJpbmRleCcsIDApO1xuXG5cdFx0XHRlbGVtUm93LmZpbmQoJy5kaXZpZGVyICsgLmRpdmlkZXInKS5yZW1vdmUoKTtcblx0XHR9KTtcblxuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQ7XG5cdH1cblxuXHRoaWRlICgpIHtcblx0XHR0aGlzLmVsZW1lbnQuaGlkZSgpO1xuXHRcdHRoaXMuZWxlbWVudC5maW5kKCcubGVwbGF5ZXItY29udHJvbHMnKS5oaWRlKClcblx0fVxuXG5cdHNob3cgKCkge1xuXHRcdHRoaXMuZWxlbWVudC5zaG93KClcblx0XHR0aGlzLmVsZW1lbnQuZmluZCgnLmxlcGxheWVyLWNvbnRyb2xzJykuc2hvdygpXG5cdH1cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdDb250cm9sQ29sbGVjdGlvbicsIENvbnRyb2xDb2xsZWN0aW9uKTtcbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xDb2xsZWN0aW9uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvQ29udHJvbENvbGxlY3Rpb24uanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIFNlY3Rpb25zLmpzXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuXG5pbXBvcnQgeyBzZWNvbmRzVG9UaW1lLCBnZXRTY3JvbGxCYXJXaWR0aCB9IGZyb20gJy4uL3V0aWxzJztcbi8qKlxuICogQGNsYXNzIFNlY3Rpb25zXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAcGFyYW0ge0FycmF5fSBbb3B0aW9ucy5pdGVtcz1bXX0gRGF0YSBmb3Igc2VjdGlvbnNcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMudmlld3NdIFNob3cgc2VjdGlvbiBvbmx5IGluIGZ1bGxzY3JlZW5cbiAqIEBleHRlbmRzIENvbXBvbmVudFxuICovXG5jbGFzcyBTZWN0aW9ucyBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucykge1xuXHRcdGxldCB7IGl0ZW1zID0gW10gfSA9IG9wdGlvbnM7XG5cdFx0aXRlbXMgPSBbXS5jb25jYXQoaXRlbXMpO1xuXG5cdFx0Ly9vcHRpb25zLml0ZW1zID0gaXRlbXM7XG5cblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXG5cdFx0dGhpcy5zY3JvbGxFbGVtZW50ID0gdGhpcy5faW5uZXJFbGVtZW50O1xuXHRcdHRoaXMuYWN0aXZlU2VjdGlvbiA9IHRoaXMuZ2V0U2VjdGlvbkJ5SW5kZXgoMCk7XG5cblx0XHR0aGlzLml0ZW1zID0gaXRlbXM7XG5cdFx0dGhpcy5sZW5ndGggPSB0aGlzLml0ZW1zLmxlbmd0aDtcblxuXHRcdHRoaXMuc2V0QWN0aXZlQnlJbmRleCgwKTtcblxuXHRcdHRoaXMuZWxlbWVudFxuXHRcdFx0LmZpbmQoJy5sZXBsYXllci1zZWN0aW9uJylcblx0XHRcdC5vbignY2xpY2snLCB0aGlzLm9uU2VjdGlvbkNsaWNrLmJpbmQodGhpcykpO1xuXG5cdFx0Ly8gdGhpcy5wbGF5ZXIub24oJ3NlY3Rpb25zdG9nZ2xlJywgdGhpcy5fb25TZWN0aW9uc1RvZ2dsZS5iaW5kKHRoaXMpKTtcblxuXHRcdHRoaXMucGxheWVyLm9uKCd0aW1ldXBkYXRlJywgdGhpcy5vblRpbWVVcGRhdGUuYmluZCh0aGlzKSk7XG5cblx0XHR0aGlzLnBsYXllci5vbignaW5pdGVkJywgdGhpcy51cGRhdGVTZWN0aW9uRHVyYXRpb24uYmluZCh0aGlzKSk7XG5cblx0XHR0aGlzLnBsYXllci5vbignZHVyYXRpb25jaGFuZ2UnLCB0aGlzLnVwZGF0ZVNlY3Rpb25EdXJhdGlvbi5iaW5kKHRoaXMpKTtcblxuXHRcdHRoaXMucGxheWVyLm9uKCdmb2N1cycsICgpID0+IHRoaXMucGxheWVyLmZvY3VzKCkpO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRuZXh0KCkge1xuXHRcdGNvbnN0IHNlY3Rpb25JbmRleCA9IHBhcnNlSW50KHRoaXMuYWN0aXZlU2VjdGlvbi5hdHRyKCdkYXRhLWluZGV4JykpO1xuXHRcdGNvbnN0IG5ld0luZGV4ID0gc2VjdGlvbkluZGV4ID49IHRoaXMubGVuZ3RoID8gdGhpcy5sZW5ndGggOiBzZWN0aW9uSW5kZXggKyAxO1xuXG5cdFx0dGhpcy5zZXRBY3RpdmVCeUluZGV4KG5ld0luZGV4KTtcblxuXHRcdHRoaXMucGxheWVyLnZpZGVvLmN1cnJlbnRUaW1lID0gdGhpcy5pdGVtc1tzZWN0aW9uSW5kZXhdLmVuZDtcblx0fVxuXG5cdHByZXYoKSB7XG5cdFx0Y29uc3Qgc2VjdGlvbkluZGV4ID0gcGFyc2VJbnQodGhpcy5hY3RpdmVTZWN0aW9uLmF0dHIoJ2RhdGEtaW5kZXgnKSk7XG5cdFx0Y29uc3QgbmV3SW5kZXggPSBzZWN0aW9uSW5kZXggPD0gMCA/IDAgOiBzZWN0aW9uSW5kZXggLSAxO1xuXG5cdFx0dGhpcy5zZXRBY3RpdmVCeUluZGV4KG5ld0luZGV4KTtcblx0XHR0aGlzLnBsYXllci52aWRlby5jdXJyZW50VGltZSA9IHRoaXMuaXRlbXNbbmV3SW5kZXhdLmJlZ2luO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHRjb25zdCB7IGZ1bGxzY3JlZW5Pbmx5LCBoaWRlU2Nyb2xsIH0gPSB0aGlzLm9wdGlvbnM7XG5cblxuXHRcdHRoaXMuZWxlbWVudCA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0LmFkZENsYXNzKCdsZXBsYXllci1zZWN0aW9ucycpXG5cdFx0XHQuYXR0cigndGFiaW5kZXgnLCAnMCcpO1xuXG5cdFx0dGhpcy5faW5uZXJFbGVtZW50ID0gJCgnPGRpdiAvPicpLmFkZENsYXNzKCdsZXBsYXllci1zZWN0aW9uc19faW5uZXInKTtcblxuXHRcdGlmKGZ1bGxzY3JlZW5Pbmx5KSB7XG5cdFx0XHR0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoJ2xlcGxheWVyLXNlY3Rpb25zLS1mc29ubHknKTtcblx0XHR9XG5cblx0XHRpZihoaWRlU2Nyb2xsKSB7XG5cdFx0XHR0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoJ2xlcGxheWVyLXNlY3Rpb25zLS1oaWRlLXNjcm9sbCcpO1xuXHRcdFx0dGhpcy5faW5uZXJFbGVtZW50LmNzcyh7XG5cdFx0XHRcdHJpZ2h0IDogLTEgKiBnZXRTY3JvbGxCYXJXaWR0aCgpXG5cdFx0XHR9KVxuXHRcdH1cblxuXHRcdHRoaXMuZWxlbWVudC5hcHBlbmQoXG5cdFx0XHR0aGlzLl9pbm5lckVsZW1lbnQuYXBwZW5kKHRoaXMuX2NyZWF0ZVNlY3Rpb25zKHRoaXMub3B0aW9ucy5pdGVtcykpXG5cdFx0KVxuXG5cblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50O1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0dXBkYXRlU2VjdGlvbkR1cmF0aW9uKCkge1xuXHRcdGlmKHRoaXMuaXRlbXMgIT0gbnVsbCAmJiB0aGlzLml0ZW1zLmxlbmd0aCA+IDApIHtcblx0XHRcdGNvbnN0IGxlbmd0aCA9IHRoaXMuaXRlbXMubGVuZ3RoXG5cdFx0XHR0aGlzLml0ZW1zW2xlbmd0aCAtIDFdLmVuZCA9IHRoaXMucGxheWVyLnZpZGVvLmR1cmF0aW9uO1xuXG5cdFx0XHQvLyBUT0RPOiDQn9GA0L7QtNGD0LzQsNGC0Ywg0YTRg9C90LrRhtC40Y/RjiB1cGRhdGVTZWN0aW9uXG5cdFx0XHQvL3RoaXMudXBkYXRlU2VjdGlvbih0aGlzLml0ZW1zW2xlbmd0aCAtIDFdLCBsZW5ndGggLSAxKTtcblx0XHR9XG5cdH1cblxuXG5cdG9uU2VjdGlvbkNsaWNrKGUpIHtcblx0XHRjb25zdCB2aWRlbyA9IHRoaXMucGxheWVyLnZpZGVvO1xuXHRcdGNvbnN0IHNlY3Rpb24gPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCcubGVwbGF5ZXItc2VjdGlvbicpO1xuXHRcdHZpZGVvLmN1cnJlbnRUaW1lID0gc2VjdGlvbi5hdHRyKCdkYXRhLWJlZ2luJyk7XG5cdFx0dGhpcy5wbGF5ZXIudHJpZ2dlcignc2VjdGlvbnNjbGljaycsIHsgc2VjdGlvbiA6IHRoaXMuaXRlbXNbc2VjdGlvbi5hdHRyKCdkYXRhLWluZGV4JyldfSk7XG5cdH1cblxuXHRzZXRBY3RpdmVCeUluZGV4KGluZGV4KSB7XG5cdFx0aWYgKFxuXHRcdFx0dGhpcy5hY3RpdmVTZWN0aW9uLmxlbmd0aCA9PT0gMCB8fFxuXHRcdFx0cGFyc2VJbnQodGhpcy5hY3RpdmVTZWN0aW9uLmF0dHIoJ2RhdGEtaW5kZXgnKSkgPT09IGluZGV4IHx8XG5cdFx0XHR0aGlzLmdldFNlY3Rpb25CeUluZGV4KGluZGV4KS5sZW5ndGggPT09IDBcblx0XHQpIHtcblx0XHRcdHJldHVybiB0aGlzXG5cdFx0fVxuXG5cdFx0dGhpcy5hY3RpdmVTZWN0aW9uLnJlbW92ZUNsYXNzKCdsZXBsYXllci1zZWN0aW9uLS1hY3RpdmUnKTtcblx0XHR0aGlzLmFjdGl2ZVNlY3Rpb24gPSB0aGlzLmdldFNlY3Rpb25CeUluZGV4KGluZGV4KTtcblx0XHR0aGlzLmFjdGl2ZVNlY3Rpb24uYWRkQ2xhc3MoJ2xlcGxheWVyLXNlY3Rpb24tLWFjdGl2ZScpO1xuXG5cdFx0Y29uc3QgdG9wUG9zaXRpb24gPSB0aGlzLmFjdGl2ZVNlY3Rpb24ucG9zaXRpb24oKS50b3A7XG5cblx0XHR0aGlzLnNjcm9sbEVsZW1lbnRcblx0XHRcdC5hbmltYXRlKHtcblx0XHRcdFx0c2Nyb2xsVG9wIDogdGhpcy5zY3JvbGxFbGVtZW50LnNjcm9sbFRvcCgpICsgdG9wUG9zaXRpb25cblx0XHRcdH0sIDgwMClcblxuXHRcdHRoaXMucGxheWVyLnRyaWdnZXIoJ3NlY3Rpb25zY2hhbmdlJywgeyBzZWN0aW9uIDogdGhpcy5pdGVtc1tpbmRleF19KTtcblxuXHRcdHJldHVybiB0aGlzXG5cdH1cblxuXHRnZXRTZWN0aW9uQnlJbmRleChpbmRleCkge1xuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQuZmluZChgLmxlcGxheWVyLXNlY3Rpb25bZGF0YS1pbmRleD1cIiR7aW5kZXh9XCJdYCk7XG5cdH1cblxuXG5cdG9uVGltZVVwZGF0ZShlLCBkYXRhKSB7XG5cdFx0aWYgKHRoaXMuYWN0aXZlU2VjdGlvbi5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVyblxuXHRcdH1cblxuXHRcdGNvbnN0IGN1cnJlbnRUaW1lID0gdGhpcy5wbGF5ZXIuY3VycmVudFRpbWU7XG5cblx0XHQvLyBVcGRhdGUgc3BhbiB3aXRoIGVuZCBzZWN0aW9uIHRpbWVcblx0XHQvLyBUT0RPOiDQktGL0L3QtdGB0YLQuCDRjdGC0L4g0LIg0L7RgtC00LXQu9GM0L3Ri9C5INC60L7QvNC/0L7QvdC10L3RgiBTaG93VGltZSDQuNC70Lgg0YLQuNC/0L4g0YLQvtCz0L5cblx0XHRpZih0aGlzLnBsYXllci52aWV3ID09PSAnbWluaScpIHtcblx0XHRcdGNvbnN0IGVuZFNlY3Rpb25UaW1lID0gdGhpcy5hY3RpdmVTZWN0aW9uLmF0dHIoJ2RhdGEtZW5kJyk7XG5cdFx0XHR0aGlzLmFjdGl2ZVNlY3Rpb25cblx0XHRcdFx0Lm5leHQoKVxuXHRcdFx0XHQuZmluZCgnLnRpbWUnKVxuXHRcdFx0XHQudGV4dChzZWNvbmRzVG9UaW1lKGVuZFNlY3Rpb25UaW1lIC0gY3VycmVudFRpbWUpKTtcblx0XHR9XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IHNlY3Rpb24gPSB0aGlzLml0ZW1zW2ldO1xuXHRcdFx0aWYgKGN1cnJlbnRUaW1lIDwgc2VjdGlvbi5lbmQpIHtcblx0XHRcdFx0dGhpcy5zZXRBY3RpdmVCeUluZGV4KGkpXG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHNldCB2aXNpYmxlKHZhbHVlKSB7XG5cdFx0aWYgKHRoaXMuZWxlbWVudC5oYXNDbGFzcygnbGVwbGF5ZXItc2VjdGlvbnMtLWhpZGRlbicpICYmIHZhbHVlKSB7XG5cdFx0XHR0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3MoJ2xlcGxheWVyLXNlY3Rpb25zLS1oaWRkZW4nKTtcblx0XHRcdHRoaXMucGxheWVyLnRyaWdnZXIoJ3NlY3Rpb25zdG9nZ2xlJywgeyBpc1Zpc2libGUgOiB2YWx1ZSB9KTtcblx0XHR9IGVsc2UgaWYgKCF2YWx1ZSkge1xuXHRcdFx0dGhpcy5lbGVtZW50LmFkZENsYXNzKCdsZXBsYXllci1zZWN0aW9ucy0taGlkZGVuJyk7XG5cdFx0XHR0aGlzLnBsYXllci50cmlnZ2VyKCdzZWN0aW9uc3RvZ2dsZScsIHsgaXNWaXNpYmxlIDogdmFsdWUgfSk7XG5cdFx0fVxuXHR9XG5cblx0Z2V0IHZpc2libGUoKSB7XG5cdFx0cmV0dXJuICF0aGlzLmVsZW1lbnQuaGFzQ2xhc3MoJ2xlcGxheWVyLXNlY3Rpb25zLS1oaWRkZW4nKVxuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZSBIVE1MIG9mIHNlY3Rpb24gYnkgZGF0YSBhbmQgaW5kZXggc2VjdGlvblxuXHQgKlxuXHQgKiBAcmV0dXJucyB7U3RyaW5nfSBIVE1MXG5cdCAqL1xuXHRjcmVhdGVTZWN0aW9uKHNlY3Rpb24sIGluZGV4KSB7XG5cdFx0Y29uc3QgaXRlbXMgPSB0aGlzLml0ZW1zIHx8IHRoaXMub3B0aW9ucy5pdGVtcztcblx0XHRjb25zdCBpdGVtID0gYFxuXHRcdFx0PGRpdiBjbGFzcz1cImxlcGxheWVyLXNlY3Rpb24gJHshaW5kZXggPyAnbGVwbGF5ZXItc2VjdGlvbi0tYWN0aXZlJyA6ICcnfVwiXG5cdFx0XHRcdGRhdGEtYmVnaW49XCIke3NlY3Rpb24uYmVnaW59XCJcblx0XHRcdFx0ZGF0YS1pbmRleD1cIiR7aW5kZXgudG9TdHJpbmcoKX1cIlxuXHRcdFx0XHRkYXRhLWVuZD1cIiR7c2VjdGlvbi5lbmR9XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJsZXBsYXllci1zZWN0aW9uLXRpbWVcIj4ke3NlY29uZHNUb1RpbWUoc2VjdGlvbi5iZWdpbil9PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJsZXBsYXllci1zZWN0aW9uLWluZm9cIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibGVwbGF5ZXItc2VjdGlvbi1uZXh0LWluZm9cIj5cblx0XHRcdFx0XHRcdCR7c2VjdGlvbi5uZXh0SW5mbyB8fCAn0KHQu9C10LTRg9GO0YnQsNGPINGB0LXQutGG0LjRjyDQvdCw0YfQvdC10YLRgdGPINGH0LXRgNC10LcnfVxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJ0aW1lXCI+JHtzZWNvbmRzVG9UaW1lKGl0ZW1zWzBdLmVuZCl9PC9zcGFuPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdCR7XG5cdFx0XHRcdFx0XHRzZWN0aW9uLnRpdGxlICE9IG51bGwgP1xuXHRcdFx0XHRcdFx0XHRgPGRpdiBjbGFzcz1cImxlcGxheWVyLXNlY3Rpb24tdGl0bGVcIj4ke3NlY3Rpb24udGl0bGV9PC9kaXY+YFxuXHRcdFx0XHRcdFx0OiAnJ1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQke1xuXHRcdFx0XHRcdFx0c2VjdGlvbi5kZXNjcmlwdGlvbiAhPSBudWxsID9cblx0XHRcdFx0XHRcdFx0YDxkaXYgY2xhc3M9XCJsZXBsYXllci1zZWN0aW9uLWRlc2NyaXB0aW9uXCI+JHtzZWN0aW9uLmRlc2NyaXB0aW9ufTwvZGl2PmBcblx0XHRcdFx0XHRcdDogJydcblx0XHRcdFx0XHR9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0YC50cmltKClcblx0XHRyZXR1cm4gaXRlbVxuXHR9XG5cblx0Ly8gVE9ETzog0J/RgNC40LTRg9C80LDRgtGMINGH0YLQviDRgdC00LXQu9Cw0YLRjCDRgSDRgdC+0LHRi9GC0LjRj9C80Lgg0L/QvtGB0LvQtSDQvtCx0L3QvtCy0LvQtdC90LjRjyDQv9C+0LvQvdC+0YHRjNGOINGB0LXQutGG0LjQuFxuXHQvKipcblx0ICogRmluZCBzZWN0aW9uIGJ5IGluZGV4IGFuZCB1cGRhdGUgaGltIHVzaW5nIGRhdGFcblx0ICpcblx0ICogQHBhcmFtIHtPYmplY3R9IGRhdGFcblx0ICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG5cdCAqL1xuXHR1cGRhdGVTZWN0aW9uKGRhdGEsIGluZGV4KSB7XG5cdFx0dGhpcy5nZXRTZWN0aW9uQnlJbmRleChpbmRleClcblx0XHRcdC5yZXBsYWNlV2l0aCh0aGlzLmNyZWF0ZVNlY3Rpb24oZGF0YSwgaW5kZXgpKVxuXHRcdFx0Lm9uKCdjbGljaycsIHRoaXMub25TZWN0aW9uQ2xpY2suYmluZCh0aGlzKSk7XG5cdH1cblxuXHRfY3JlYXRlU2VjdGlvbnMoaXRlbXMpIHtcblx0XHRsZXQgcmVzdWx0ID0gJyc7XG5cdFx0aXRlbXMuZm9yRWFjaCgoc2VjdGlvbiwgaW5kZXgpID0+IHtcblx0XHRcdHJlc3VsdCArPSB0aGlzLmNyZWF0ZVNlY3Rpb24oc2VjdGlvbiwgaW5kZXgpO1xuXHRcdH0pO1xuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdTZWN0aW9ucycsIFNlY3Rpb25zKTtcbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb25zO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvU2VjdGlvbnMuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIEVycm9yRGlzcGxheS5qc1xuICovXG5cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEBjbGFzcyBFcnJvckRpc3BsYXlcbiAqIEBleHRlbmRzIENvbXBvbmVudFxuICovXG5jbGFzcyBFcnJvckRpc3BsYXkgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucz17fSkge1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cdFx0aWYodGhpcy5wbGF5ZXIuX2Vycm9yICE9IG51bGwpIHtcblx0XHRcdHRoaXMubWVzc2FnZSA9IHRoaXMucGxheWVyLl9lcnJvci5tZXNzYWdlO1xuXHRcdFx0dGhpcy5lbGVtZW50LnNob3coKTtcblx0XHR9XG5cdFx0dGhpcy5wbGF5ZXIub24oJ2Vycm9yJywgdGhpcy5vblBsYXllckVycm9yLmJpbmQodGhpcykpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHR0aGlzLmVsZW1lbnQgPSAkKCc8ZGl2IC8+Jylcblx0XHRcdC5hZGRDbGFzcygnbGVwbGF5ZXItZXJyb3ItZGlzcGxheScpXG5cdH1cblxuXHRzZXQgbWVzc2FnZSh2YWx1ZSkge1xuXHRcdHRoaXMuZWxlbWVudC5odG1sKHZhbHVlKTtcblx0fVxuXG5cdG9uUGxheWVyRXJyb3IoZSwgZGF0YSkge1xuXHRcdGNvbnN0IGVycm9yID0gZGF0YS5lcnJvcjtcblx0XHR0aGlzLm1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xuXHRcdHRoaXMuZWxlbWVudC5zaG93KCk7XG5cdH1cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdFcnJvckRpc3BsYXknLCBFcnJvckRpc3BsYXkpO1xuZXhwb3J0IGRlZmF1bHQgRXJyb3JEaXNwbGF5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvRXJyb3JEaXNwbGF5LmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBFcnJvckRpc3BsYXkuanNcbiAqL1xuXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcblxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMudXJsXSBwYXRoIHRvIHBvc3RlciBpbWFnZVxuICogQGNsYXNzIFBvc3RlclxuICogQGV4dGVuZHMgQ29tcG9uZW50XG4gKi9cbmNsYXNzIFBvc3RlciBleHRlbmRzIENvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHR1cmwgOiBvcHRpb25zLnVybFxuXHRcdH0sIG9wdGlvbnMpO1xuXG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblxuXHRcdHRoaXMudXJsID0gdGhpcy5vcHRpb25zLnVybDtcblx0fVxuXG5cdHNldCB1cmwodmFsdWUpIHtcblx0XHRpZih2YWx1ZSA9PSBudWxsKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMuX3VybCA9IHZhbHVlO1xuXHRcdHRoaXMuZWxlbWVudC5jc3MoJ2JhY2tncm91bmQtaW1hZ2UnLCBgdXJsKFwiJHt2YWx1ZX1cIilgKVxuXHR9XG5cblx0Z2V0IHVybCgpIHtcblx0XHRyZXR1cm4gdGhpcy5fdXJsO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHR0aGlzLmVsZW1lbnQgPSAkKCc8ZGl2IC8+Jylcblx0XHRcdC5hZGRDbGFzcygnbGVwbGF5ZXItcG9zdGVyJyk7XG5cblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50O1xuXHR9XG5cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdQb3N0ZXInLCBQb3N0ZXIpO1xuZXhwb3J0IGRlZmF1bHQgUG9zdGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvUG9zdGVyLmpzIiwiLyoqXG4gKiBAZmlsZSBmdWxsc2NyZWVuLWFwaS5qc1xuICovXG5cblxuLypcbiAqIFN0b3JlIHRoZSBicm93c2VyLXNwZWNpZmljIG1ldGhvZHMgZm9yIHRoZSBmdWxsc2NyZWVuIEFQSVxuICogQHR5cGUge09iamVjdHx1bmRlZmluZWR9XG4gKiBAcHJpdmF0ZVxuICovXG5sZXQgRnVsbHNjcmVlbkFwaSA9IHt9O1xuXG4vLyBicm93c2VyIEFQSSBtZXRob2RzXG4vLyBtYXAgYXBwcm9hY2ggZnJvbSBTY3JlZW5mdWwuanMgLSBodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL3NjcmVlbmZ1bGwuanNcbmNvbnN0IGFwaU1hcCA9IFtcblx0Ly8gU3BlYzogaHR0cHM6Ly9kdmNzLnczLm9yZy9oZy9mdWxsc2NyZWVuL3Jhdy1maWxlL3RpcC9PdmVydmlldy5odG1sXG5cdFtcblx0XHQncmVxdWVzdEZ1bGxzY3JlZW4nLFxuXHRcdCdleGl0RnVsbHNjcmVlbicsXG5cdFx0J2Z1bGxzY3JlZW5FbGVtZW50Jyxcblx0XHQnZnVsbHNjcmVlbkVuYWJsZWQnLFxuXHRcdCdmdWxsc2NyZWVuY2hhbmdlJyxcblx0XHQnZnVsbHNjcmVlbmVycm9yJ1xuXHRdLFxuXHQvLyBXZWJLaXRcblx0W1xuXHRcdCd3ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbicsXG5cdFx0J3dlYmtpdEV4aXRGdWxsc2NyZWVuJyxcblx0XHQnd2Via2l0RnVsbHNjcmVlbkVsZW1lbnQnLFxuXHRcdCd3ZWJraXRGdWxsc2NyZWVuRW5hYmxlZCcsXG5cdFx0J3dlYmtpdGZ1bGxzY3JlZW5jaGFuZ2UnLFxuXHRcdCd3ZWJraXRmdWxsc2NyZWVuZXJyb3InXG5cdF0sXG5cdC8vIE9sZCBXZWJLaXQgKFNhZmFyaSA1LjEpXG5cdFtcblx0XHQnd2Via2l0UmVxdWVzdEZ1bGxTY3JlZW4nLFxuXHRcdCd3ZWJraXRDYW5jZWxGdWxsU2NyZWVuJyxcblx0XHQnd2Via2l0Q3VycmVudEZ1bGxTY3JlZW5FbGVtZW50Jyxcblx0XHQnd2Via2l0Q2FuY2VsRnVsbFNjcmVlbicsXG5cdFx0J3dlYmtpdGZ1bGxzY3JlZW5jaGFuZ2UnLFxuXHRcdCd3ZWJraXRmdWxsc2NyZWVuZXJyb3InXG5cdF0sXG5cdC8vIE1vemlsbGFcblx0W1xuXHRcdCdtb3pSZXF1ZXN0RnVsbFNjcmVlbicsXG5cdFx0J21vekNhbmNlbEZ1bGxTY3JlZW4nLFxuXHRcdCdtb3pGdWxsU2NyZWVuRWxlbWVudCcsXG5cdFx0J21vekZ1bGxTY3JlZW5FbmFibGVkJyxcblx0XHQnbW96ZnVsbHNjcmVlbmNoYW5nZScsXG5cdFx0J21vemZ1bGxzY3JlZW5lcnJvcidcblx0XSxcblx0Ly8gTWljcm9zb2Z0XG5cdFtcblx0XHQnbXNSZXF1ZXN0RnVsbHNjcmVlbicsXG5cdFx0J21zRXhpdEZ1bGxzY3JlZW4nLFxuXHRcdCdtc0Z1bGxzY3JlZW5FbGVtZW50Jyxcblx0XHQnbXNGdWxsc2NyZWVuRW5hYmxlZCcsXG5cdFx0J01TRnVsbHNjcmVlbkNoYW5nZScsXG5cdFx0J01TRnVsbHNjcmVlbkVycm9yJ1xuXHRdXG5dO1xuXG5cbmxldCBzcGVjQXBpID0gYXBpTWFwWzBdO1xuXG5sZXQgYnJvd3NlckFwaTtcblxuLy8gZGV0ZXJtaW5lIHRoZSBzdXBwb3J0ZWQgc2V0IG9mIGZ1bmN0aW9uc1xuZm9yIChsZXQgaSA9IDA7IGkgPCBhcGlNYXAubGVuZ3RoOyBpKyspIHtcblx0Ly8gY2hlY2sgZm9yIGV4aXRGdWxsc2NyZWVuIGZ1bmN0aW9uXG5cdGlmIChhcGlNYXBbaV1bMV0gaW4gZG9jdW1lbnQpIHtcblx0XHRicm93c2VyQXBpID0gYXBpTWFwW2ldO1xuXHRcdGJyZWFrO1xuXHR9XG59XG5cbi8vIG1hcCB0aGUgYnJvd3NlciBBUEkgbmFtZXMgdG8gdGhlIHNwZWMgQVBJIG5hbWVzXG5pZiAoYnJvd3NlckFwaSkge1xuXHRmb3IgKGxldCBpPTA7IGk8YnJvd3NlckFwaS5sZW5ndGg7IGkrKykge1xuXHRcdEZ1bGxzY3JlZW5BcGlbc3BlY0FwaVtpXV0gPSBicm93c2VyQXBpW2ldO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZ1bGxzY3JlZW5BcGk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvRnVsbHNjcmVlbkFwaS5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgY29va2llLWNvbnRyb2wuanNcbiAqXG4gKiBAY2xhcyBDb29raWVcbiAqL1xuY2xhc3MgQ29va2llIHtcblx0LyoqXG5cdCAqIEBwdWJsaWNcblx0ICpcblx0ICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgTmFtZSBvZiBjb29raWVcblx0ICogQHBhcmFtIHtTdHJpbmd9IFtkZmx0XSBSZXR1cm4gZGVmYXVsdCB2YWx1ZSBpZiB0aGlzIGZpZWxkIGlzIGVtcHR5XG5cdCAqXG5cdCAqL1xuXHRzdGF0aWMgZ2V0IChuYW1lLCBkZmx0KSB7XG5cdFx0bGV0IGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKTtcblx0XHRmb3IgKGxldCBpIGluIGNvb2tpZXMpIHtcblx0XHRcdHZhciBkID0gY29va2llc1sgaSBdLnRyaW0oKS5zcGxpdCgnPScpO1xuXHRcdFx0aWYgKGRbIDAgXSA9PT0gJ2xlcGxheWVyXycgKyBuYW1lKVxuXHRcdFx0XHRyZXR1cm4gZFsgMSBdO1xuXHRcdH1cblx0XHRyZXR1cm4gZGZsdDtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcHVibGljXG5cdCAqXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIEtleVxuXHQgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgVmFsdWVcblx0ICovXG5cdHN0YXRpYyBzZXQgKG5hbWUsIHZhbHVlKSB7XG5cdFx0dmFyIGQgPSBuZXcgRGF0ZSgpO1xuXHRcdGQuc2V0RGF0ZShkLnllYXIgKyAxKTtcblx0XHRkb2N1bWVudC5jb29raWUgPSAnbGVwbGF5ZXJfJyArIG5hbWUgKyAnPScgKyB2YWx1ZSArICc7ZXhwaXJlcz0nICsgZC50b1N0cmluZygpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvb2tpZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy91dGlscy9jb29raWUuanMiLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5jbGFzcyBNZWRpYUVycm9yIHtcblx0Y29uc3RydWN0b3IodmFsdWUpIHtcblx0XHRpZih2YWx1ZSBpbnN0YW5jZW9mIE1lZGlhRXJyb3IpIHtcblx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdHRoaXMuY29kZSA9IHZhbHVlO1xuXHRcdH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuXHRcdC8vIGRlZmF1bHQgY29kZSBpcyB6ZXJvLCBzbyB0aGlzIGlzIGEgY3VzdG9tIGVycm9yXG5cdFx0XHR0aGlzLm1lc3NhZ2UgPSB2YWx1ZTtcblx0XHR9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcblxuXHRcdFx0Ly8gV2UgYXNzaWduIHRoZSBgY29kZWAgcHJvcGVydHkgbWFudWFsbHkgYmVjYXVzZSBuYXRpdmUgTWVkaWFFcnJvciBvYmplY3RzXG5cdFx0XHQvLyBkbyBub3QgZXhwb3NlIGl0IGFzIGFuIG93bi9lbnVtZXJhYmxlIHByb3BlcnR5IG9mIHRoZSBvYmplY3QuXG5cdFx0XHRpZiAodHlwZW9mIHZhbHVlLmNvZGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdHRoaXMuY29kZSA9IHZhbHVlLmNvZGU7XG5cdFx0XHR9XG5cblx0XHRcdCQuZXh0ZW5kKHRoaXMsIHZhbHVlKTtcblx0XHR9XG5cblx0XHRpZiAoIXRoaXMubWVzc2FnZSkge1xuXHRcdFx0dGhpcy5tZXNzYWdlID0gTWVkaWFFcnJvci5kZWZhdWx0TWVzc2FnZXNbdGhpcy5jb2RlXSB8fCAnJztcblx0XHR9XG5cdH1cbn1cblxuTWVkaWFFcnJvci5wcm90b3R5cGUuY29kZSA9IDA7XG5cbk1lZGlhRXJyb3IucHJvdG90eXBlLm1lc3NhZ2UgPSAnJztcblxuTWVkaWFFcnJvci5lcnJvclR5cGVzID0gW1xuXHQnTUVESUFfRVJSX0NVU1RPTScsXG5cdCdNRURJQV9FUlJfQUJPUlRFRCcsXG5cdCdNRURJQV9FUlJfTkVUV09SSycsXG5cdCdNRURJQV9FUlJfREVDT0RFJyxcblx0J01FRElBX0VSUl9TUkNfTk9UX1NVUFBPUlRFRCcsXG5cdCdNRURJQV9FUlJfRU5DUllQVEVEJ1xuXTtcblxuXG5NZWRpYUVycm9yLmRlZmF1bHRNZXNzYWdlcyA9IHtcblx0MSA6ICfQktGLINC/0YDQtdGA0LLQsNC70Lgg0LfQsNCz0YDRg9C30LrRgyDQstC40LTQtdC+LicsXG5cdDIgOiAn0JfQsNCz0YDRg9C30LrQsCDQstC40LTQtdC+INC/0YDQtdGA0LLQsNC90LAg0LjQty3Qt9CwINC/0L7RgtC10YDQuCDRgdC+0LXQtNC40L3QtdC90LjRjy4nLFxuXHQzIDogJ9CX0LDQs9GA0YPQt9C60LAg0LLQuNC00LXQviDQvtGB0YLQsNC90L7QstC70LXQvdCwINC40Lct0LfQsCDQv9GA0L7QsdC70LXQvCDRgSDQstC40LTQtdC+0YTQsNC50LvQvtC8INC40LvQuCDQuNC3LdC30LAg0YLQvtCz0L4sINGH0YLQviDQstCw0Ygg0LHRgNCw0YPQt9C10YAg0L3QtSDQv9C+0LTQtNC10YDQttC40LLQsNC10YIg0LLQvtGB0L/RgNC+0LjQt9Cy0LXQtNC10L3QuNC1INC00LDQvdC90L7Qs9C+INGE0LDQudC70LAuJyxcblx0NCA6ICfQktC40LTQtdC+INC90LUg0LzQvtC20LXRgiDQsdGL0YLRjCDQt9Cw0LPRgNGD0LbQtdC90L4g0LjQty3Qt9CwINC/0YDQvtCx0LvQtdC8INGBINC40L3RgtC10YDQvdC10YIt0YHQvtC10LTQuNC90LXQvdC40LXQvCDQuNC70Lgg0L/RgNC+0LHQu9C10Lwg0L3QsCDRgdC10YDQstC10YDQtS4g0JjQu9C4INGE0L7RgNC80LDRgiDRhNCw0LnQu9CwINC90LUg0L/QvtC00LTQtdGA0LbQuNCy0LDQtdGC0YHRjyDQstCw0YjQuNC8INCx0YDQsNGD0LfQtdGA0L7QvC4nLFxuXHQ1IDogJ9CS0LjQtNC10L4g0LfQsNGI0LjRhNGA0L7QstCw0L3Qviwg0Lgg0LzRiyDQvdC1INC80L7QttC10Lwg0LXQs9C+INGA0LDRgdGI0LjRhNGA0L7QstCw0YLRjC4nXG59O1xuXG4vLyBBZGQgdHlwZXMgYXMgcHJvcGVydGllcyBvbiBNZWRpYUVycm9yXG4vLyBlLmcuIE1lZGlhRXJyb3IuTUVESUFfRVJSX1NSQ19OT1RfU1VQUE9SVEVEID0gNDtcbmZvciAobGV0IGVyck51bSA9IDA7IGVyck51bSA8IE1lZGlhRXJyb3IuZXJyb3JUeXBlcy5sZW5ndGg7IGVyck51bSsrKSB7XG5cdE1lZGlhRXJyb3JbTWVkaWFFcnJvci5lcnJvclR5cGVzW2Vyck51bV1dID0gZXJyTnVtO1xuXHQvLyB2YWx1ZXMgc2hvdWxkIGJlIGFjY2Vzc2libGUgb24gYm90aCB0aGUgY2xhc3MgYW5kIGluc3RhbmNlXG5cdE1lZGlhRXJyb3IucHJvdG90eXBlW01lZGlhRXJyb3IuZXJyb3JUeXBlc1tlcnJOdW1dXSA9IGVyck51bTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVkaWFFcnJvcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9NZWRpYUVycm9yLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBQbGF5Q29udHJvbC5qc1xuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCBDb250cm9sIGZyb20gJy4vQ29udHJvbCc7XG5cbi8qKlxuICogQGNsYXNzIFBsYXlDb250cm9sXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAZXh0ZW5kcyBDb250cm9sXG4gKi9cbmNsYXNzIFBsYXlDb250cm9sIGV4dGVuZHMgQ29udHJvbCB7XG5cdGNvbnN0cnVjdG9yIChwbGF5ZXIsIG9wdGlvbnM9e30pIHtcblx0XHRvcHRpb25zID0gJC5leHRlbmQoe30sIHtcblx0XHRcdGljb25OYW1lIDogJ3BsYXknLFxuXHRcdFx0dGl0bGUgOiAn0JLQvtGB0L/RgNC+0LjQt9Cy0LXRgdGC0Lgg0LLQuNC00LXQvicsXG5cdFx0XHRjbGFzc05hbWUgOiAncGxheScsXG5cdFx0XHRuYW1lIDogJ3BsYXknXG5cdFx0fSwgb3B0aW9ucyk7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblxuXHRcdHRoaXMucGxheWVyLm9uKFxuXHRcdFx0YHBsYXkgcGxheWluZyBwYXVzZSBlbmRlZCBzZWVraW5nIGxvYWRzdGFydGAsXG5cdFx0XHR0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpXG5cdFx0KVxuXHR9XG5cblxuXHQvKipcblx0ICogUGF1c2UgdGhlIHZpZGVvXG5cdCAqL1xuXHRzaG93UGxheSAoKSB7XG5cdFx0aWYodGhpcy5pY29uLmljb25OYW1lID09PSAncGxheScpIHJldHVybjtcblx0XHR0aGlzLmljb24uaWNvbk5hbWUgPSAncGxheSc7XG5cdFx0dGhpcy5lbGVtZW50LmF0dHIoJ3RpdGxlJywgdGhpcy5vcHRpb25zLnRpdGxlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBQbGF5IHRoZSB2aWRlb1xuXHQgKi9cblx0c2hvd1BhdXNlICgpIHtcblx0XHRpZih0aGlzLmljb24uaWNvbk5hbWUgPT09ICdwYXVzZScpIHJldHVybjtcblx0XHR0aGlzLmljb24uaWNvbk5hbWUgPSAncGF1c2UnO1xuXHRcdHRoaXMuZWxlbWVudC5hdHRyKCd0aXRsZScsICfQn9C+0YHRgtCw0LLQuNGC0Ywg0L3QsCDQv9Cw0YPQt9GDJyk7XG5cdH1cblxuXHR1cGRhdGUoKSB7XG5cdFx0aWYgKHRoaXMucGxheWVyLmVuZGVkKSB7XG5cdFx0XHR0aGlzLnNob3dSZXBsYXkoKTtcblx0XHR9IGVsc2UgaWYodGhpcy5wbGF5ZXIucGF1c2VkKSB7XG5cdFx0XHR0aGlzLnNob3dQbGF5KCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2hvd1BhdXNlKCk7XG5cdFx0fVxuXHR9XG5cblx0c2hvd1JlcGxheSgpIHtcblx0XHRpZih0aGlzLmljb24uaWNvbk5hbWUgPT09ICdyZWZyZXNoJykgcmV0dXJuO1xuXHRcdGlmKHRoaXMucGxheWVyLmR1cmF0aW9uICE9PSBJbmZpbml0eSkge1xuXHRcdFx0dGhpcy5fcmVwbGF5ID0gdHJ1ZTtcblx0XHRcdHRoaXMuaWNvbi5pY29uTmFtZSA9ICdyZWZyZXNoJztcblx0XHRcdHRoaXMuZWxlbWVudC5hdHRyKCd0aXRsZScsICfQl9Cw0L/Rg9GB0YLQuNGC0Ywg0LfQsNC90L7QstC+Jylcblx0XHR9XG5cdH1cblxuXHRyZW1vdmVSZXBsYXkoKSB7XG5cdFx0aWYoIXRoaXMuX3JlcGxheSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0aGlzLl9yZXBsYXkgPSBmYWxzZTtcblxuXHRcdGlmKHRoaXMucGxheWVyLnZpZGVvLnBhdXNlZCkge1xuXHRcdFx0dGhpcy5zaG93UGxheSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnNob3dQYXVzZSgpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdG9uQ2xpY2soZSkge1xuXHRcdHRoaXMucGxheWVyLnZpZGVvLnRvZ2dsZVBsYXkoKTtcblx0fVxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ1BsYXlDb250cm9sJywgUGxheUNvbnRyb2wpO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ3BsYXknLCBQbGF5Q29udHJvbCk7XG5leHBvcnQgZGVmYXVsdCBQbGF5Q29udHJvbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL1BsYXlDb250cm9sLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBWb2x1bWVDb250cm9sLmpzXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9Db250cm9sJztcbmltcG9ydCBDb250cm9sRHJvcGRvd24gZnJvbSAnLi9Db250cm9sRHJvcGRvd24nO1xuaW1wb3J0IHsgSVNfQU5EUk9JRF9QSE9ORSB9IGZyb20gJy4uL3V0aWxzL2Jyb3dzZXInO1xuXG5cbi8qKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQGNsYXNzIFZvbHVtZUNvbnRyb2xcbiAqIEBleHRlbmRzIENvbnRyb2xEcm9wZG93blxuICovXG5jbGFzcyBWb2x1bWVDb250cm9sIGV4dGVuZHMgQ29udHJvbERyb3Bkb3duIHtcblxuXHRjb25zdHJ1Y3RvciAocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRpY29uTmFtZSA6ICd2b2x1bWUtZG93bicsXG5cdFx0XHRjbGFzc05hbWUgOiAndm9sdW1lLWNvbnRyb2wnLFxuXHRcdFx0bmFtZSA6ICd2b2x1bWUnXG5cdFx0fSwgb3B0aW9ucyk7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblxuXHRcdGlmKCFwbGF5ZXIudmlkZW8uZmVhdHVyZUNvbnRyb2xWb2x1bWUgfHwgSVNfQU5EUk9JRF9QSE9ORSkge1xuXHRcdFx0dGhpcy5lbGVtZW50LmhpZGUoKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLnBsYXllci5vbigndm9sdW1lY2hhbmdlJywgKGUsIGRhdGEpID0+IHtcblx0XHRcdGNvbnN0IHZpZGVvID0gdGhpcy5wbGF5ZXIudmlkZW87XG5cdFx0XHR0aGlzLnZhbHVlID0gdmlkZW8ubXV0ZWQgPyAwIDogdmlkZW8udm9sdW1lO1xuXHRcdH0pXG5cdH1cblxuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdHN1cGVyLmNyZWF0ZUVsZW1lbnQoKTtcblx0XHRsZXQgZHJhZyA9IGZhbHNlO1xuXHRcdGNvbnN0IHZpZGVvID0gdGhpcy5wbGF5ZXIudmlkZW87XG5cblx0XHR0aGlzLm1hcmtlciA9ICQoJzxkaXYvPicpLmFkZENsYXNzKCd2b2x1bWUtbWFya2VyJyk7XG5cblx0XHR0aGlzLmFjdGl2ZSA9ICQoJzxkaXYvPicpLmFkZENsYXNzKCd2b2x1bWUtYWN0aXZlJyk7XG5cblx0XHR0aGlzLmxpbmUgPSAkKCc8ZGl2Lz4nKVxuXHRcdFx0LmFkZENsYXNzKCd2b2x1bWUtbGluZScpXG5cdFx0XHQuYXBwZW5kKHRoaXMuYWN0aXZlKVxuXHRcdFx0LmFwcGVuZCh0aGlzLm1hcmtlcilcblx0XHRcdC5vbignY2xpY2snLCAoZSkgPT4ge1xuXHRcdFx0XHRpZiAoZHJhZykgcmV0dXJuO1xuXHRcdFx0XHRsZXQgcCA9IHRoaXMuZ2V0UG9zaXRpb24oZS5wYWdlWSk7XG5cdFx0XHRcdGlmIChwID49IDAgJiYgcCA8PSAxKSB7XG5cdFx0XHRcdFx0aWYodmlkZW8ubXV0ZWQpIHtcblx0XHRcdFx0XHRcdHZpZGVvLm11dGVkID0gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHZpZGVvLnZvbHVtZSA9IDEgLSBwO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuZHJvcGRvd25Db250ZW50XG5cdFx0XHQuYWRkQ2xhc3MoJ3ZvbHVtZS1zbGlkZXInKVxuXHRcdFx0LmFwcGVuZCh0aGlzLmxpbmUpO1xuXG5cdFx0dGhpcy5pY29uLmVsZW1lbnQuYXR0cigndGl0bGUnLCAn0J7RgtC60LvRjtGH0LjRgtGMINC30LLRg9C6Jyk7XG5cblx0XHR0aGlzLm1hcmtlci5vbignbW91c2Vkb3duJywgKGUpID0+IHtcblx0XHRcdGlmIChlLndoaWNoICE9PSAxKSByZXR1cm47XG5cdFx0XHRkcmFnID0gdHJ1ZTtcblx0XHR9KTtcblxuXHRcdCQoZG9jdW1lbnQpLm9uKHtcblx0XHRcdG1vdXNlbW92ZSA6IChlKSA9PiB7XG5cdFx0XHRcdGlmICghZHJhZykgcmV0dXJuO1xuXHRcdFx0XHRsZXQgcCA9IHRoaXMuZ2V0UG9zaXRpb24oZS5wYWdlWSk7XG5cdFx0XHRcdGlmIChwID49IDAgJiYgcCA8PSAxKSB7XG5cdFx0XHRcdFx0aWYodmlkZW8ubXV0ZWQpIHtcblx0XHRcdFx0XHRcdHZpZGVvLm11dGVkID0gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHZpZGVvLnZvbHVtZSA9IDEgLSBwXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cblx0XHRcdG1vdXNldXAgOiAoZSkgPT4ge1xuXHRcdFx0XHRkcmFnID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudDtcblx0fVxuXG5cblx0c2V0IHZhbHVlICh2YWx1ZSkge1xuXHRcdHRoaXMuaWNvbi5pY29uTmFtZSA9IHRoaXMucGxheWVyLmNhbGNWb2x1bWVJY29uKHZhbHVlKTtcblxuXHRcdGxldCBwID0gTWF0aC5yb3VuZCh2YWx1ZSAqIDEwMCkudG9TdHJpbmcoKSArICclJztcblx0XHR0aGlzLmFjdGl2ZS5jc3MoJ2hlaWdodCcsIHApO1xuXHRcdHRoaXMubWFya2VyLmNzcygnYm90dG9tJywgcCk7XG5cdH1cblxuXHR0b2dnbGVNdXRlZCAoKSB7XG5cdFx0Y29uc3QgeyB2aWRlbyB9ID0gdGhpcy5wbGF5ZXI7XG5cblx0XHR2aWRlby5tdXRlZCA9ICF2aWRlby5tdXRlZDtcblx0fVxuXG5cdGdldFBvc2l0aW9uICh5KSB7XG5cdFx0cmV0dXJuICh5IC0gdGhpcy5saW5lLm9mZnNldCgpLnRvcCkgLyB0aGlzLmxpbmUuaGVpZ2h0KCk7XG5cdH1cblxuXHRvbkNsaWNrIChlKSB7XG5cdFx0c3VwZXIub25DbGljayhlKTtcblx0XHQvL3RvZG86IGxlYV9hbGV4IGtvc3RpbCdcblx0XHRpZiAoZS50YXJnZXQgPT09IHRoaXMuaWNvbi5lbGVtZW50WzBdKXtcblx0XHRcdHRoaXMudG9nZ2xlTXV0ZWQoKTtcblx0XHR9XG5cblx0fVxuXG5cdG9uUGxheWVySW5pdGVkKCkge1xuXHRcdGlmKCF0aGlzLnBsYXllci52aWRlby5mZWF0dXJlQ29udHJvbFZvbHVtZSkge1xuXHRcdFx0dGhpcy5lbGVtZW50LmhpZGUoKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy52YWx1ZSA9IHRoaXMucGxheWVyLnZpZGVvLmRlZmF1bHRWb2x1bWU7XG5cdH1cblxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ1ZvbHVtZUNvbnRyb2wnLCBWb2x1bWVDb250cm9sKTtcbkNvbnRyb2wucmVnaXN0ZXJDb250cm9sKCd2b2x1bWUnLCBWb2x1bWVDb250cm9sKTtcbmV4cG9ydCBkZWZhdWx0IFZvbHVtZUNvbnRyb2w7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9Wb2x1bWVDb250cm9sLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBDb250cm9sRHJvcGRvd24uanNcbiAqL1xuXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL0NvbnRyb2wnO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgeyBJU19NT0JJTEUgfSBmcm9tICcuLi91dGlscy9icm93c2VyJztcblxuLyoqXG4gKiBAY2xhc3MgQ29udHJvbERyb3Bkb3duXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAcHJvcGVydHkge2pRdWVyeX0gZHJvcGRvd25Db250ZW50IENvbnRlbnQgb2YgcG9wdXBcbiAqIEBleHRlbmRzIENvbnRyb2xcbiAqL1xuY2xhc3MgQ29udHJvbERyb3Bkb3duIGV4dGVuZHMgQ29udHJvbCB7XG5cblx0Y29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHR0YWcgOiAnZGl2Jyxcblx0XHR9LCBvcHRpb25zKTtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXHRcdHRoaXMuX29wZW5lZCA9IGZhbHNlO1xuXHRcdHRoaXMuZWxlbWVudC5vbignbW91c2VlbnRlcicsIHRoaXMub3Blbi5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ21vdXNlbGVhdmUnLCB0aGlzLmNsb3NlLmJpbmQodGhpcykpO1xuXHRcdGlmKElTX01PQklMRSkge1xuXHRcdFx0dGhpcy5lbGVtZW50Lm9uKCd0YXAnLCB0aGlzLnRvZ2dsZS5iaW5kKHRoaXMpKTtcblx0XHRcdCQoZG9jdW1lbnQpLm9uKCd0b3VjaGVuZCB0b3VjaHN0YXJ0IGNsaWNrJywgdGhpcy5vbkRvY3VtZW50RXZlbnRzLmJpbmQodGhpcykpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0c3VwZXIuY3JlYXRlRWxlbWVudCgpO1xuXHRcdHRoaXMuZHJvcGRvd25Db250ZW50ID0gJCgnPGRpdiAvPicpLmFkZENsYXNzKCdjb250cm9sLWRyb3Bkb3duX19jb250ZW50Jyk7XG5cdFx0dGhpcy5lbGVtZW50LmFwcGVuZCh0aGlzLmRyb3Bkb3duQ29udGVudCk7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRidWlsZENTU0NsYXNzKCkge1xuXHRcdHJldHVybiBgY29udHJvbC1kcm9wZG93biAke3N1cGVyLmJ1aWxkQ1NTQ2xhc3MoKX1gXG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRvbkNsaWNrKGUpIHtcblx0XHRpZigkKGUudGFyZ2V0KS5jbG9zZXN0KHRoaXMuZHJvcGRvd25Db250ZW50KS5sZW5ndGggPiAwKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0c3VwZXIub25DbGljayhlKTtcblx0fVxuXG5cdHRvZ2dsZSgpIHtcblx0XHRpZih0aGlzLmRpc2FibGUpIHRydWU7XG5cdFx0aWYodGhpcy5fb3BlbmVkKSB7XG5cdFx0XHR0aGlzLmNsb3NlKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMub3BlbigpO1xuXHRcdH1cblx0fVxuXG5cdG9wZW4oKSB7XG5cdFx0aWYodGhpcy5kaXNhYmxlKSByZXR1cm47XG5cdFx0dGhpcy5fb3BlbmVkID0gdHJ1ZTtcblx0XHR0aGlzLmRyb3Bkb3duQ29udGVudC5zaG93KCk7XG5cdH1cblxuXHRjbG9zZSgpIHtcblx0XHRpZih0aGlzLmRpc2FibGUpIHJldHVybjtcblx0XHR0aGlzLl9vcGVuZWQgPSBmYWxzZTtcblx0XHR0aGlzLmRyb3Bkb3duQ29udGVudC5oaWRlKCk7XG5cdH1cblxuXHRvbkRvY3VtZW50RXZlbnRzKGUpIHtcblx0XHRpZihcblx0XHRcdCEoJChlLnRhcmdldCkuY2xvc2VzdCh0aGlzLmVsZW1lbnQpLmxlbmd0aCA+IDApICYmXG5cdFx0XHQhKCQoZS50YXJnZXQpLmNsb3Nlc3QodGhpcy5kcm9wZG93bkNvbnRlbnQpLmxlbmd0aCA+IDApXG5cdFx0KSB7XG5cdFx0XHRpZih0aGlzLl9vcGVuZWQpe1xuXHRcdFx0XHR0aGlzLmNsb3NlKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdDb250cm9sRHJvcGRvd24nLCBDb250cm9sRHJvcGRvd24pO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ2Ryb3Bkb3duJywgQ29udHJvbERyb3Bkb3duKTtcbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xEcm9wZG93bjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL0NvbnRyb2xEcm9wZG93bi5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgVGltZWxpbmVDb250cm9sLmpzXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vQ29tcG9uZW50JztcbmltcG9ydCBDb250cm9sIGZyb20gJy4uL0NvbnRyb2wnO1xuaW1wb3J0IENvbnRyb2xUZXh0IGZyb20gJy4uL0NvbnRyb2xUZXh0JztcbmltcG9ydCBCdWZmZXJlZFJhbmdlcyBmcm9tICcuL0J1ZmZlcmVkUmFuZ2VzJztcbmltcG9ydCBNYXJrZXIgZnJvbSAnLi9NYXJrZXInO1xuaW1wb3J0IHsgc2Vjb25kc1RvVGltZSB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAY2xhc3MgVGltZWxpbmVDb250cm9sXG4gKiBAcHJvcGVydHkge0NvbnRyb2xUZXh0fSBjdXJyZW50VGltZSBDdXJyZW50IHRpbWUncyB0ZXh0XG4gKiBAcHJvcGVydHkge0NvbnRyb2xUZXh0fSB0b3RhbFRpbWUgVG90YWwgdGltZVxuICogQHByb3BlcnR5IHtqUXVlcnl9IGxpbmVcbiAqIEBleHRlbmRzIENvbnRyb2xcbiAqL1xuY2xhc3MgVGltZWxpbmVDb250cm9sIGV4dGVuZHMgQ29udHJvbCB7XG5cblx0Y29uc3RydWN0b3IgKHBsYXllciwgb3B0aW9ucz17fSkge1xuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0bmFtZSA6ICd0aW1lbGluZScsXG5cdFx0XHRjbGFzc05hbWUgOiAnY29udHJvbC10aW1lbGluZSB0aW1lbGluZS1jb250YWluZXInLFxuXHRcdFx0dGFnIDogJ2RpdicsXG5cdFx0fSwgb3B0aW9ucyk7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblxuXG5cdFx0dGhpcy5tYXJrZXIuZWxlbWVudC5vbignbGVwbGF5ZXJfbW91c2Vtb3ZlJywgdGhpcy5fb25NYXJrZXJNb3VzZW1vdmUuYmluZCh0aGlzKSk7XG5cblx0XHR0aGlzLm1hcmtlci5lbGVtZW50Lm9uKCdsZXBsYXllcl9tb3VzZWRvd24nLCB0aGlzLl9vbk1hcmtlck1vdXNlZG93bi5iaW5kKHRoaXMpKTtcblxuXHRcdHRoaXMucGxheWVyLm9uKCdzZWN0aW9uc2luaXQnLCB0aGlzLm9uU2VjdGlvbnNJbml0LmJpbmQodGhpcykpO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ3RpbWV1cGRhdGUnLCB0aGlzLl9vblRpbWVVcGRhdGUuYmluZCh0aGlzKSk7XG5cblx0XHQvLyB0aGlzLnBsYXllci5vbigndGltZXVwZGF0ZWxvYWQnLCB0aGlzLl9vblRpbWVVcGRhdGUuYmluZCh0aGlzKSlcblxuXHRcdHRoaXMucGxheWVyLm9uKCdkdXJhdGlvbmNoYW5nZScsIHRoaXMuX29uRHVyYXRpb25DaGFuZ2UuYmluZCh0aGlzKSk7XG5cdH1cblxuXHRfb25NYXJrZXJNb3VzZWRvd24oZSkge1xuXHRcdHRoaXMubWFya2VyU2hhZG93LmVsZW1lbnQuaGlkZSgpO1xuXHR9XG5cblx0X29uTWFya2VyTW91c2Vtb3ZlKGUsIGRhdGEpIHtcblx0XHRjb25zdCB4ID0gZGF0YS54O1xuXHRcdGNvbnN0IHAgPSB0aGlzLmdldFBvc2l0aW9uKHgpO1xuXHRcdGNvbnN0IHZpZGVvID0gdGhpcy5wbGF5ZXIudmlkZW87XG5cdFx0aWYgKHAgPiAwICYmIHAgPCAxKSB7XG5cdFx0XHR0aGlzLm1hcmtlci5tYXJrZXJUaW1lXG5cdFx0XHRcdC5zaG93KClcblx0XHRcdFx0Lmh0bWwoc2Vjb25kc1RvVGltZSh2aWRlby5kdXJhdGlvbiAqIHApKTtcblx0XHRcdC8vIHZpZGVvLmN1cnJlbnRUaW1lID0gdmlkZW8uZHVyYXRpb24gKiBwXG5cdFx0fVxuXHR9XG5cblx0X29uVGltZVVwZGF0ZShlLCBkYXRhKSB7XG5cdFx0Y29uc3QgZHVyYXRpb24gPSB0aGlzLnBsYXllci52aWRlby5kdXJhdGlvbjtcblx0XHRsZXQgY3VycmVudFRpbWUgPSB0aGlzLnBsYXllci5jdXJyZW50VGltZTtcblx0XHRpZihkYXRhICYmIGRhdGEuY3VycmVudFRpbWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0Y3VycmVudFRpbWUgPSBkYXRhLmN1cnJlbnRUaW1lO1xuXHRcdH1cblx0XHRsZXQgcGVyY2VudCA9IGN1cnJlbnRUaW1lIC8gZHVyYXRpb247XG5cblx0XHRpZihpc05hTihkdXJhdGlvbikgJiYgY3VycmVudFRpbWUgPT09IDApIHBlcmNlbnQgPSAwO1xuXG5cdFx0dGhpcy5tb3ZlKHsgcGVyY2VudCwgY3VycmVudFRpbWUgfSk7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdHN1cGVyLmNyZWF0ZUVsZW1lbnQoKTtcblx0XHRsZXQgdmlkZW8gPSB0aGlzLnBsYXllci52aWRlbztcblxuXHRcdHRoaXMuZHJhZyA9IGZhbHNlO1xuXG5cdFx0Ly8gQ3JlYXRlIGxhYmVsc1xuXHRcdHRoaXMuY3VycmVudFRpbWUgPSBuZXcgQ29udHJvbFRleHQodGhpcy5wbGF5ZXIsIHsgY2xhc3NOYW1lIDogJ3RpbWUtY3VycmVudCcgfSk7XG5cdFx0dGhpcy5jdXJyZW50VGltZS50ZXh0ID0gJzAwOjAwJztcblx0XHR0aGlzLnRvdGFsVGltZSA9IG5ldyBDb250cm9sVGV4dCh0aGlzLnBsYXllciwge2NsYXNzTmFtZSA6ICd0aW1lLXRvdGFsJyB9KTtcblxuXHRcdC8vIENyZWF0ZSBsaW5lIHdpdGggbWFya2VycyBhbmQgcGxheWVkIHJhbmdlXG5cblx0XHR0aGlzLm1hcmtlciA9IG5ldyBNYXJrZXIodGhpcy5wbGF5ZXIsIHtcblx0XHRcdGRyYWcgOiB0cnVlXG5cdFx0fSk7XG5cblx0XHR0aGlzLm1hcmtlclNoYWRvdyA9IG5ldyBNYXJrZXIodGhpcy5wbGF5ZXIsIHtcblx0XHRcdGNsYXNzTmFtZSA6ICdzaGFkb3cnXG5cdFx0fSk7XG5cdFx0dGhpcy5tYXJrZXJTaGFkb3cuZWxlbWVudC5oaWRlKCk7XG5cblxuXHRcdC8vIFBsYXllZCByYW5nZXNcblx0XHR0aGlzLnBsYXllZFJhbmdlcyA9ICQoJzxkaXYgLz4nKS5hZGRDbGFzcygndGltZS1wbGF5ZWQnKTtcblxuXG5cdFx0Ly8gQnVmZmVyZWQgcmFuZ2VzXG5cdFx0dGhpcy5idWZmZXJlZFJhbmdlcyA9IG5ldyBCdWZmZXJlZFJhbmdlcyh0aGlzLnBsYXllcikuZWxlbWVudDtcblxuXHRcdHRoaXMubGluZSA9ICQoJzxkaXYgLz4nKTtcblx0XHR0aGlzLmVtaXRUYXBFdmVudHModGhpcy5saW5lKVxuXG5cdFx0dGhpcy5saW5lXG5cdFx0XHQuYWRkQ2xhc3MoJ3RpbWVsaW5lJylcblx0XHRcdC5hcHBlbmQodGhpcy5tYXJrZXIuZWxlbWVudClcblx0XHRcdC5hcHBlbmQodGhpcy5tYXJrZXJTaGFkb3cuZWxlbWVudClcblx0XHRcdC5hcHBlbmQodGhpcy5wbGF5ZWRSYW5nZXMpXG5cdFx0XHQuYXBwZW5kKHRoaXMuYnVmZmVyZWRSYW5nZXMpXG5cdFx0XHQub24oe1xuXHRcdFx0XHRtb3VzZW1vdmUgOiAoZSkgPT4ge1xuXHRcdFx0XHRcdGlmICh0aGlzLm1hcmtlci5kcmFnKSByZXR1cm47XG5cblx0XHRcdFx0XHRsZXQgcCA9IHRoaXMuZ2V0UG9zaXRpb24oZS5wYWdlWCk7XG5cdFx0XHRcdFx0aWYgKHAgPiAwICYmIHAgPCAxKSB7XG5cdFx0XHRcdFx0XHR0aGlzLm1hcmtlclNoYWRvdy5lbGVtZW50XG5cdFx0XHRcdFx0XHRcdC5zaG93KClcblx0XHRcdFx0XHRcdFx0LmNzcygnbGVmdCcsIHAgKiAxMDAgKyAnJScpO1xuXHRcdFx0XHRcdFx0dGhpcy5tYXJrZXJTaGFkb3dcblx0XHRcdFx0XHRcdFx0Lm1hcmtlclRpbWVcblx0XHRcdFx0XHRcdFx0LnNob3coKVxuXHRcdFx0XHRcdFx0XHQuaHRtbChzZWNvbmRzVG9UaW1lKHZpZGVvLmR1cmF0aW9uICogcCkpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aGlzLm1hcmtlclNoYWRvdy5lbGVtZW50LmhpZGUoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0bW91c2VsZWF2ZSA6IChlKSA9PiB7XG5cdFx0XHRcdFx0aWYgKHRoaXMuZHJhZykgcmV0dXJuO1xuXHRcdFx0XHRcdHRoaXMubWFya2VyU2hhZG93LmVsZW1lbnQuaGlkZSgpXG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0bW91c2Vkb3duIDogKGUpID0+IHtcblx0XHRcdFx0fSxcblxuXHRcdFx0XHRjbGljayA6IHRoaXMuX29uTGluZUNsaWNrLmJpbmQodGhpcyksXG5cdFx0XHRcdHRhcCA6IHRoaXMuX29uTGluZUNsaWNrLmJpbmQodGhpcyksXG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuZWxlbWVudC5hZGRDbGFzcygndGltZWxpbmUtY29udGFpbmVyJylcblx0XHRcdC5hcHBlbmQoJCgnPGRpdiAvPicpXG5cdFx0XHRcdC5hZGRDbGFzcygndGltZWxpbmUtc3ViY29udGFpbmVyJylcblx0XHRcdFx0LmFwcGVuZCh0aGlzLmN1cnJlbnRUaW1lLmVsZW1lbnQpXG5cdFx0XHRcdC5hcHBlbmQodGhpcy5saW5lKVxuXHRcdFx0XHQuYXBwZW5kKHRoaXMudG90YWxUaW1lLmVsZW1lbnQpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdG9uQ2xpY2soZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0fVxuXG5cdF9vbkxpbmVDbGljayhlKSB7XG5cdFx0aWYgKHRoaXMuZHJhZykgcmV0dXJuO1xuXHRcdGNvbnN0IHZpZGVvID0gdGhpcy5wbGF5ZXIudmlkZW87XG5cdFx0dGhpcy5tb3ZlKHsgcGVyY2VudCA6IHRoaXMuZ2V0UG9zaXRpb24oZS5wYWdlWCl9KTtcblx0XHR2aWRlby5jdXJyZW50VGltZSA9ICh2aWRlby5kdXJhdGlvbiAqIHRoaXMuZ2V0UG9zaXRpb24oZS5wYWdlWCkpO1xuXHR9XG5cblx0b25TZWN0aW9uc0luaXQoZSkge1xuXHRcdGNvbnN0IGR1cmF0aW9uID0gdGhpcy5wbGF5ZXIudmlkZW8uZHVyYXRpb247XG5cdFx0aWYoaXNOYU4oZHVyYXRpb24pKSB7XG5cdFx0XHRyZXR1cm5cblx0XHR9XG5cdFx0aWYgKHRoaXMucGxheWVyLnNlY3Rpb25zKSB7XG5cdFx0XHR0aGlzLnVwZGF0ZVNlY3Rpb25SYW5nZXModGhpcy5wbGF5ZXIuc2VjdGlvbnMuaXRlbXMpO1xuXHRcdH1cblx0fVxuXG5cdHVwZGF0ZVNlY3Rpb25SYW5nZXMoaXRlbXMpIHtcblx0XHRpZih0aGlzLnNlY3Rpb25zID09IG51bGwgfHwgdGhpcy5zZWN0aW9ucy5sZW5ndGggPT09IDApIHtcblx0XHRcdHRoaXMuc2VjdGlvbnMgPSB0aGlzLmNyZWF0ZVNlY3Rpb25SYW5nZXMoaXRlbXMpO1xuXHRcdFx0dGhpcy5saW5lLmFwcGVuZCh0aGlzLnNlY3Rpb25zKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zZWN0aW9ucy5odG1sKHRoaXMuY3JlYXRlU2VjdGlvblJhbmdlcyhpdGVtcykpO1xuXHRcdH1cblx0fVxuXG5cdGNyZWF0ZVNlY3Rpb25SYW5nZXMoaXRlbXMpIHtcblx0XHRjb25zdCBkdXJhdGlvbiA9IHRoaXMucGxheWVyLnZpZGVvLmR1cmF0aW9uO1xuXHRcdGxldCByZXN1bHQgPSAkKCc8ZGl2IC8+JykuYWRkQ2xhc3MoJ2xlcGxheWVyLXRpbWVsaW5lLXNlY3Rpb25zJyk7XG5cdFx0aXRlbXMuZm9yRWFjaCgoc2VjdGlvbikgPT4ge1xuXHRcdFx0Y29uc3QgbGVuZ3RoID0gKHNlY3Rpb24uZW5kIC0gc2VjdGlvbi5iZWdpbik7XG5cdFx0XHRjb25zdCBpdGVtID0gJCgnPGRpdiAvPicpXG5cdFx0XHRcdC5hZGRDbGFzcygnbGVwbGF5ZXItdGltZWxpbmUtc2VjdGlvbicpXG5cdFx0XHRcdC5jc3Moe1xuXHRcdFx0XHRcdHdpZHRoIDogbGVuZ3RoIC8gZHVyYXRpb24gKiAxMDAgKyAnJScsXG5cdFx0XHRcdFx0bGVmdCA6IHNlY3Rpb24uYmVnaW4gLyBkdXJhdGlvbiAqIDEwMCArICclJ1xuXHRcdFx0XHR9KTtcblx0XHRcdHJlc3VsdC5hcHBlbmQoaXRlbSk7XG5cdFx0fSlcblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0Z2V0UG9zaXRpb24gKHgpIHtcblx0XHRyZXR1cm4gKHggLSB0aGlzLmxpbmUub2Zmc2V0KCkubGVmdCkgLyB0aGlzLmxpbmUud2lkdGgoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBNb3ZlIG1hcmtlciBvbiB0aW1lbGluZSBvbiBwZXJjZW50IGZyb20gYXJndW1lbnQsIG5vdCBmcm9tIHZpZGVvLmN1cnJlbnRUaW1lXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBwZXJjZW50IFRoZSBwZXJjZW50IHdoaWNoIHlvdSB3YW50IHRvIG1vdmUgbWFya2VyIG9uIHRpbWVsaW5lXG5cdCAqL1xuXHRtb3ZlICh7IHBlcmNlbnQsIGN1cnJlbnRUaW1lIH0pIHtcblx0XHRpZihjdXJyZW50VGltZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRjdXJyZW50VGltZSA9IHRoaXMucGxheWVyLnZpZGVvLmR1cmF0aW9uICogcGVyY2VudDtcblx0XHR9XG5cblx0XHRpZihpc05hTihjdXJyZW50VGltZSkpIHJldHVybjtcblx0XHRwZXJjZW50ID0gcGVyY2VudCAqIDEwMDtcblx0XHR0aGlzLm1hcmtlci5lbGVtZW50LmNzcygnbGVmdCcsIHBlcmNlbnQgKyAnJScpO1xuXHRcdHRoaXMucGxheWVkUmFuZ2VzLmNzcygnd2lkdGgnLCBwZXJjZW50ICsgJyUnKTtcblx0XHR0aGlzLmN1cnJlbnRUaW1lLnRleHQgPSBzZWNvbmRzVG9UaW1lKGN1cnJlbnRUaW1lKTtcblx0fVxuXG5cdHVwZGF0ZUxhYmVscygpIHtcblx0XHRjb25zdCB2aWRlbyA9IHRoaXMucGxheWVyLnZpZGVvO1xuXHRcdHRoaXMudG90YWxUaW1lLnRleHQgPSBzZWNvbmRzVG9UaW1lKDAsIE1hdGguZmxvb3IodmlkZW8uZHVyYXRpb24gLyAzNjAwKSA+IDApO1xuXG5cdFx0Ly8gY29uc3Qgd2lkdGggPSB0aGlzLnRvdGFsVGltZS5lbGVtZW50LndpZHRoKCk7XG5cblx0XHR0aGlzLnRvdGFsVGltZS50ZXh0ID0gc2Vjb25kc1RvVGltZSh2aWRlby5kdXJhdGlvbik7XG5cdFx0dGhpcy5jdXJyZW50VGltZS50ZXh0ID0gc2Vjb25kc1RvVGltZSh2aWRlby5jdXJyZW50VGltZSB8fCAwKTtcblx0XHQvLyB0aGlzLmN1cnJlbnRUaW1lLmVsZW1lbnQuY3NzKHtcblx0XHQvLyBcdHdpZHRoXG5cdFx0Ly8gfSlcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdG9uUGxheWVySW5pdGVkKGUpIHtcblx0XHR0aGlzLnVwZGF0ZUxhYmVscygpO1xuXHRcdGlmICh0aGlzLnBsYXllci5zZWN0aW9ucykge1xuXHRcdFx0dGhpcy51cGRhdGVTZWN0aW9uUmFuZ2VzKHRoaXMucGxheWVyLnNlY3Rpb25zLml0ZW1zKTtcblx0XHR9XG5cdH1cblxuXHRfaW5pdFdhdGNoQnVmZmVyICgpIHtcblx0XHRjbGVhckludGVydmFsKHRoaXMud2F0Y2hCdWZmZXJJbnRlcnZhbCk7XG5cdFx0bGV0IHZpZGVvID0gdGhpcy5wbGF5ZXIudmlkZW87XG5cdFx0bGV0IHVwZGF0ZVByb2dyZXNzQmFyID0gKCkgPT4ge1xuXHRcdFx0Y29uc3QgRU5EID0gMTtcblx0XHRcdGNvbnN0IFNUQVJUID0gMDtcblx0XHRcdGxldCByZXN1bHQgPSAkKCcnKTtcblx0XHRcdHZpZGVvLmxvYWRlZC5mb3JFYWNoKGl0ZW0gPT4ge1xuXHRcdFx0XHRsZXQgZG9tSXRlbSA9ICQoJzxkaXYgLz4nKS5hZGRDbGFzcygndGltZS1idWZmZXJlZCcpO1xuXHRcdFx0XHRkb21JdGVtLmNzcyh7XG5cdFx0XHRcdFx0bGVmdCA6IGl0ZW1bU1RBUlRdICogMTAwICsgJyUnLFxuXHRcdFx0XHRcdHdpZHRoIDogKGl0ZW1bRU5EXSAtIGl0ZW1bU1RBUlRdKSAqIDEwMCArICclJ1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0cmVzdWx0ID0gcmVzdWx0LmFkZChkb21JdGVtKTtcblx0XHRcdH0pO1xuXHRcdFx0dGhpcy5idWZmZXJlZC5odG1sKHJlc3VsdCk7XG5cdFx0XHRpZiAodmlkZW8ubG9hZGVkLmxlbmd0aCAmJiAoMSAtIHZpZGVvLmxvYWRlZFNpemUpIDw9IDAuMDUpIHtcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLndhdGNoQnVmZmVySW50ZXJ2YWwpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHR0aGlzLndhdGNoQnVmZmVySW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCh1cGRhdGVQcm9ncmVzc0JhciwgNTAwKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBPbiBkdXJhdGlvbmNoYW5nZSBldmVudCBoYW5kbGVyXG5cdCAqL1xuXHRfb25EdXJhdGlvbkNoYW5nZSAoKSB7XG5cdFx0dGhpcy51cGRhdGVMYWJlbHMoKTtcblx0XHRpZiAodGhpcy5wbGF5ZXIuc2VjdGlvbnMpIHtcblx0XHRcdHRoaXMudXBkYXRlU2VjdGlvblJhbmdlcyh0aGlzLnBsYXllci5zZWN0aW9ucy5pdGVtcyk7XG5cdFx0fVxuXHR9XG5cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdUaW1lbGluZUNvbnRyb2wnLCBUaW1lbGluZUNvbnRyb2wpO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ3RpbWVsaW5lJywgVGltZWxpbmVDb250cm9sKTtcbmV4cG9ydCBkZWZhdWx0IFRpbWVsaW5lQ29udHJvbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL1RpbWVsaW5lL1RpbWVsaW5lQ29udHJvbC5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgQ29udHJvbFRleHQuanNcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9Db250cm9sJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBjbGFzcyBDb250cm9sVGV4dFxuICogQGV4bnRlZHMgQ29udHJvbFxuICovXG5jbGFzcyBDb250cm9sVGV4dCBleHRlbmRzIENvbnRyb2wge1xuXHRjb25zdHJ1Y3RvciAocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRjbGFzc05hbWUgOiAnJyxcblx0XHRcdHRhZyA6ICdkaXYnLFxuXHRcdH0sIG9wdGlvbnMpO1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdHN1cGVyLmNyZWF0ZUVsZW1lbnQoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGJ1aWxkQ1NTQ2xhc3MoKSB7XG5cdFx0cmV0dXJuIGBjb250cm9sLXRleHQgJHt0aGlzLm9wdGlvbnMuY2xhc3NOYW1lfWA7XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBTZXR0ZXIgb2YgdGV4dCBmaWVsZFxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuXHQgKi9cblxuXHRzZXQgdGV4dCAodmFsdWUpIHtcblx0XHR0aGlzLl90ZXh0ID0gdmFsdWU7XG5cdFx0dGhpcy5lbGVtZW50Lmh0bWwodmFsdWUpO1xuXHR9XG5cblx0Z2V0IHRleHQgKCkge1xuXHRcdHJldHVybiB0aGlzLl90ZXh0XG5cdH1cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdDb250cm9sVGV4dCcsIENvbnRyb2xUZXh0KTtcbkNvbnRyb2wucmVnaXN0ZXJDb250cm9sKCd0ZXh0JywgQ29udHJvbFRleHQpO1xuZXhwb3J0IGRlZmF1bHQgQ29udHJvbFRleHQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9Db250cm9sVGV4dC5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgQnVmZmVyZWRSYW5nZXMuanNcbiAqL1xuXG5pbXBvcnQgeyBwZXJjZW50aWZ5LCBjcmVhdGVFbCB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vQ29tcG9uZW50JztcblxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAY2xhc3MgQnVmZmVyZWRSYW5nZXNcbiAqIEBleHRlbmRzIENvbnRyb2xcbiAqL1xuXG5jbGFzcyBCdWZmZXJlZFJhbmdlcyBleHRlbmRzIENvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblxuXHRcdHRoaXMucGxheWVyLm9uKCdwcm9ncmVzcycsIHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xuXHRcdHRoaXMucGxheWVyLm9uKCdzZWVrZWQnLCB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLnBsYXllci5vbignbG9hZHN0YXJ0JywgdGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdHRoaXMucmFuZ2UgPSBjcmVhdGVFbCgnZGl2Jywge1xuXHRcdFx0Y2xhc3NOYW1lIDogJ2xlcGxheWVyLXRpbWVsaW5lLWJ1ZmZlcmVkX19yYW5nZSdcblx0XHR9KTtcblxuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQgPSBjcmVhdGVFbCgnZGl2Jywge1xuXHRcdFx0Y2xhc3NOYW1lIDogJ2xlcGxheWVyLXRpbWVsaW5lLWJ1ZmZlcmVkJ1xuXHRcdH0pLmFwcGVuZCh0aGlzLnJhbmdlKTtcblx0fVxuXG5cblx0dXBkYXRlKCkge1xuXHRcdGNvbnN0IGJ1ZmZlcmVkID0gdGhpcy5wbGF5ZXIudmlkZW8uYnVmZmVyZWQ7XG5cdFx0Y29uc3QgZHVyYXRpb24gPSB0aGlzLnBsYXllci52aWRlby5kdXJhdGlvbjtcblx0XHRpZihidWZmZXJlZCA9PSBudWxsKSByZXR1cm47XG5cblx0XHRsZXQgZW5kID0gMDtcblx0XHRpZiAoYnVmZmVyZWQubGVuZ3RoID4gMCkge1xuXHRcdFx0ZW5kID0gYnVmZmVyZWQuZW5kKGJ1ZmZlcmVkLmxlbmd0aCAtIDEpO1xuXHRcdH1cblxuXHRcdGxldCB3aWR0aCA9IDA7XG5cdFx0aWYgKGR1cmF0aW9uID4gMCkge1xuXHRcdFx0d2lkdGggPSBwZXJjZW50aWZ5KGVuZCwgZHVyYXRpb24pICogMTAwICsgJyUnXG5cdFx0fVxuXHRcdHRoaXMucmFuZ2UuY3NzKHsgd2lkdGggfSlcblx0fVxufVxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdCdWZmZXJlZFJhbmdlcycsIEJ1ZmZlcmVkUmFuZ2VzKTtcbmV4cG9ydCBkZWZhdWx0IEJ1ZmZlcmVkUmFuZ2VzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvVGltZWxpbmUvQnVmZmVyZWRSYW5nZXMuanMiLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9Db21wb25lbnQnO1xuXG5jbGFzcyBNYXJrZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcblxuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0ZHJhZyA6IGZhbHNlLFxuXHRcdFx0Y2xhc3NOYW1lIDogJydcblx0XHR9LCBvcHRpb25zKTtcblxuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdtb3VzZWRvd24nLCB0aGlzLl9vbk1vdXNlZG93bi5iaW5kKHRoaXMpKTtcblxuXHRcdCQoZG9jdW1lbnQpLm9uKHtcblxuXHRcdFx0bW91c2Vtb3ZlIDogKGUpID0+IHtcblx0XHRcdFx0aWYgKCF0aGlzLmRyYWcpIHJldHVybjtcblx0XHRcdFx0dGhpcy5lbGVtZW50LnRyaWdnZXIoJ2xlcGxheWVyX21vdXNlbW92ZScsIHsgeCA6IGUucGFnZVggfSk7XG5cdFx0XHR9LFxuXG5cdFx0XHRtb3VzZXVwIDogKGUpID0+IHtcblx0XHRcdFx0aWYgKCF0aGlzLmRyYWcpIHJldHVybjtcblx0XHRcdFx0dGhpcy5kcmFnID0gZmFsc2U7XG5cdFx0XHRcdHRoaXMubWFya2VyVGltZS5oaWRlKCk7XG5cdFx0XHRcdHRoaXMuZWxlbWVudC50cmlnZ2VyKCdsZXBsYXllcl9tb3VzZXVwJywgeyB4IDogZS5wYWdlWCB9KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdHNldCBkcmFnKHZhbHVlKSB7XG5cdFx0dGhpcy5fZHJhZyA9IHZhbHVlO1xuXHRcdHRoaXMuZWxlbWVudC50b2dnbGVDbGFzcygndGltZS1tYXJrZXItLWRyYWcnLCB2YWx1ZSk7XG5cdH1cblxuXHRnZXQgZHJhZygpIHtcblx0XHRyZXR1cm4gdGhpcy5fZHJhZztcblx0fVxuXG5cdF9vbk1vdXNlZG93bihlKSB7XG5cdFx0aWYgKGUud2hpY2ggIT09IDEpIHJldHVybjtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0aWYodGhpcy5vcHRpb25zLmRyYWcpIHtcblx0XHRcdHRoaXMuZHJhZyA9IHRydWU7XG5cdFx0fVxuXHRcdHRoaXMuZWxlbWVudC50cmlnZ2VyKCdsZXBsYXllcl9tb3VzZWRvd24nKTtcblx0fVxuXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0Ly8gTWFya2VyIG9mIGN1cnJlbnQgdGltZSBvbiB0aW1lbGluZVxuXHRcdHRoaXMubWFya2VyVGltZSA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0LmFkZENsYXNzKCd0aW1lJylcblx0XHRcdC5oaWRlKCk7XG5cblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50ID0gJCgnPGRpdiAvPicpXG5cdFx0XHQuYWRkQ2xhc3MoYHRpbWUtbWFya2VyICR7dGhpcy5vcHRpb25zLmNsYXNzTmFtZX1gKVxuXHRcdFx0LmFwcGVuZCh0aGlzLm1hcmtlclRpbWUpXG5cblx0fVxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ01hcmtlcicsIE1hcmtlcik7XG5leHBvcnQgZGVmYXVsdCBNYXJrZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9UaW1lbGluZS9NYXJrZXIuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIFNlY3Rpb25Db250cm9sLmpzXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9Db250cm9sJztcbmltcG9ydCBDb250cm9sQ2hlY2tib3ggZnJvbSAnLi9Db250cm9sQ2hlY2tib3gnO1xuXG4vKipcbiAqIEBjbGFzcyBTZWN0aW9uQ29udHJvbFxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5jaGVja2VkPXRydWVdXG4gKiBAZXh0ZW5kcyBDb250cm9sQ2hlY2tib3hcbiAqL1xuY2xhc3MgU2VjdGlvbkNvbnRyb2wgZXh0ZW5kcyBDb250cm9sQ2hlY2tib3gge1xuXHRjb25zdHJ1Y3RvciAocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRpY29uTmFtZSA6ICdsaXN0LXVsJyxcblx0XHRcdGNsYXNzTmFtZSA6ICdzZWN0aW9uJyxcblx0XHRcdG5hbWUgOiAnc2VjdGlvbicsXG5cdFx0XHR0aXRsZSA6ICfQn9C+0LrQsNC30LDRgtGML9GB0LrRgNGL0YLRjCDRgdC10LrRhtC40LgnLFxuXHRcdFx0ZGlzYWJsZSA6IHRydWVcblx0XHR9LCBvcHRpb25zKTtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ3NlY3Rpb25zaW5pdCcsIHRoaXMuX29uU2VjdGlvbnNJbml0LmJpbmQodGhpcykpO1xuXHRcdHRoaXMucGxheWVyLm9uKCdzZWN0aW9uc3RvZ2dsZScsIHRoaXMuX29uU2VjdGlvblRvZ2dsZS5iaW5kKHRoaXMpKVxuXHR9XG5cblx0b25DaGVja2VkKGUsIGRhdGEpIHtcblx0XHRzdXBlci5vbkNoZWNrZWQoZSk7XG5cdFx0dGhpcy5wbGF5ZXIudG9nZ2xlU2VjdGlvbnMoZGF0YS5jaGVja2VkKTtcblx0fVxuXG5cdF9vblNlY3Rpb25Ub2dnbGUoZSwgZGF0YSkge1xuXHRcdGNvbnN0IHsgaXNWaXNpYmxlIH0gPSBkYXRhO1xuXHRcdGlmKHRoaXMuY2hlY2tlZCAhPT0gaXNWaXNpYmxlKSB7XG5cdFx0XHR0aGlzLmNoZWNrZWQgPSBpc1Zpc2libGU7XG5cdFx0fVxuXG5cdH1cblxuXHRfb25TZWN0aW9uc0luaXQoZSkge1xuXHRcdHRoaXMub3B0aW9ucy5kaXNhYmxlID0gdGhpcy5kaXNhYmxlID0gZmFsc2U7XG5cdFx0dGhpcy5jaGVja2VkID0gdHJ1ZTtcblx0fVxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ1NlY3Rpb25Db250cm9sJywgU2VjdGlvbkNvbnRyb2wpO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ3NlY3Rpb24nLCBTZWN0aW9uQ29udHJvbCk7XG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uQ29udHJvbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL1NlY3Rpb25Db250cm9sLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBjb250cm9sLWNoZWNrYm94LmpzXG4gKi9cblxuXG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL0NvbnRyb2wnO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5cbi8qKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5jaGVja2VkPWZhbHNlXVxuICogQGNsYXNzIENvbnRyb2xDaGVja2JveCBUb2dnYWJsZSBjb250cm9sXG4gKi9cbmNsYXNzIENvbnRyb2xDaGVja2JveCBleHRlbmRzIENvbnRyb2wge1xuXG5cdGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucz17fSkge1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cdFx0dGhpcy5jaGVja2VkID0gdGhpcy5vcHRpb25zLmNoZWNrZWQgfHwgZmFsc2U7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdsZXBsYXllcl9jaGVja2VkJywgdGhpcy5vbkNoZWNrZWQuYmluZCh0aGlzKSlcblx0fVxuXG5cblx0LyoqXG5cdCAqIFNldHRlciBmb3IgY2hlY2tlZCBwcm9wZXJ0eVxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gdmFsXG5cdCAqL1xuXHRzZXQgY2hlY2tlZCAodmFsKSB7XG5cdFx0aWYgKHRoaXMuZGlzYWJsZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR2YWwgPSAhIXZhbDtcblx0XHR0aGlzLl9jaGVja2VkID0gdmFsXG5cdFx0dGhpcy5lbGVtZW50LnRvZ2dsZUNsYXNzKCdjb250cm9sLWNoZWNrYm94LS1jaGVja2VkJywgdmFsKTtcblx0XHR0aGlzLmVsZW1lbnQudHJpZ2dlcignbGVwbGF5ZXJfY2hlY2tlZCcsIHsgY2hlY2tlZCA6IHZhbCB9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXR0ZXIgZm9yIGNoZWNrZWQgcHJvcGVyeVxuXHQgKiBAcHVibGljXG5cdCAqIEByZXR1cm4ge2Jvb2xlYW59XG5cdCAqL1xuXHRnZXQgY2hlY2tlZCAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2NoZWNrZWQ7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRvbkNsaWNrIChlKSB7XG5cdFx0c3VwZXIub25DbGljayhlKTtcblx0XHR0aGlzLmNoZWNrZWQgPSAhdGhpcy5jaGVja2VkO1xuXHR9XG5cblx0LyoqXG5cdCAqIE9uIGNoZWNrZWQgZXZlbnQgaGFuZGxlclxuXHQgKlxuXHQgKiBAcGFyYW0ge0V2ZW50fSBlXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG5cdCAqL1xuXHRvbkNoZWNrZWQoZSwgZGF0YSkge1xuXG5cdH1cblxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGJ1aWxkQ1NTQ2xhc3MoKSB7XG5cdFx0cmV0dXJuIGBjb250cm9sLWNoZWNrYm94ICR7c3VwZXIuYnVpbGRDU1NDbGFzcygpfWBcblx0fVxuXG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnQ29udHJvbENoZWNrYm94JywgQ29udHJvbENoZWNrYm94KTtcbkNvbnRyb2wucmVnaXN0ZXJDb250cm9sKCdjaGVja2JveCcsIENvbnRyb2xDaGVja2JveCk7XG5leHBvcnQgZGVmYXVsdCBDb250cm9sQ2hlY2tib3g7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9Db250cm9sQ2hlY2tib3guanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIEZ1bGxzY3JlZW5Db250cm9sLmpzXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9Db250cm9sJztcblxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAY2xhc3MgRnVsbHNjcmVlbkNvbnRyb2xcbiAqIEBleHRlbmRzIENvbnRyb2xcbiAqL1xuY2xhc3MgRnVsbHNjcmVlbkNvbnRyb2wgZXh0ZW5kcyBDb250cm9sIHtcblx0Y29uc3RydWN0b3IgKHBsYXllciwgb3B0aW9ucz17fSkge1xuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0aWNvbk5hbWUgOiAnYXJyb3dzLWFsdCcsXG5cdFx0XHRjbGFzc05hbWUgOiAnZnVsbHNjcmVlbicsXG5cdFx0XHR0aXRsZSA6ICfQoNCw0LfQstC10YDQvdGD0YLRjC/RgdCy0LXRgNC90YPRgtGMINC90LAg0L/QvtC70L3Ri9C5INGN0LrRgNCw0L0nLFxuXHRcdFx0bmFtZSA6ICdmdWxsc2NyZWVuJ1xuXHRcdH0sIG9wdGlvbnMpO1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRvbkNsaWNrKGUpIHtcblx0XHRzdXBlci5vbkNsaWNrKGUpXG5cdFx0dGhpcy5wbGF5ZXIudG9nZ2xlRnVsbHNjcmVlbigpO1xuXHR9XG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnRnVsbHNjcmVlbkNvbnRyb2wnLCBGdWxsc2NyZWVuQ29udHJvbCk7XG5Db250cm9sLnJlZ2lzdGVyQ29udHJvbCgnZnVsbHNjcmVlbicsIEZ1bGxzY3JlZW5Db250cm9sKTtcbmV4cG9ydCBkZWZhdWx0IEZ1bGxzY3JlZW5Db250cm9sO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvRnVsbHNjcmVlbkNvbnRyb2wuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIFJhdGVDb250cm9sLmpzXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9Db250cm9sJztcbmltcG9ydCBDb250cm9sVGV4dCBmcm9tICcuL0NvbnRyb2xUZXh0JztcbmltcG9ydCBDb29raWUgZnJvbSAnLi4vdXRpbHMvY29va2llJztcblxuLyoqXG4gKiBAY2xhc3MgUmF0ZUNvbnRyb2xcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEBwcm9wZXJ0eSB7Q29udHJvbH0gZG93bkNvbnRyb2wgIERvd24gcmF0ZSBjb250cm9sXG4gKiBAcHJvcGVydHkge0NvbnRyb2x9IHVwQ29udHJvbCAgVXAgcmF0ZSBjb250cm9sXG4gKiBAcHJvcGVydHkge0NvbnRyb2xUZXh0fSBjdXJyZW50UmF0ZSBDb250cm9sIG9mIGN1dXJlbnQgcmF0ZVxuICogQGV4dGVuZHMgQ29udHJvbFxuICovXG5jbGFzcyBSYXRlQ29udHJvbCBleHRlbmRzIENvbnRyb2wge1xuXHRjb25zdHJ1Y3RvciAocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRjbGFzc05hbWUgOiAnY29udHJvbC1jb250YWluZXInLFxuXHRcdFx0dGFnIDogJ2Rpdidcblx0XHR9LCBvcHRpb25zKTtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ3JhdGVjaGFuZ2UnLCAoKSA9PiB7XG5cdFx0XHR0aGlzLnVwZGF0ZSgpO1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHRzdXBlci5jcmVhdGVFbGVtZW50KCk7XG5cdFx0Y29uc3QgdmlkZW8gPSB0aGlzLnBsYXllci52aWRlbztcblxuXHRcdHRoaXMuZG93bkNvbnRyb2wgPSBuZXcgQ29udHJvbCh0aGlzLnBsYXllciwge1xuXHRcdFx0Y2xhc3NOYW1lIDogJ3JhdGUtZG93bicsXG5cdFx0XHRuYW1lIDogJ3JhdGUtZG93bicsXG5cdFx0XHRpY29uTmFtZSA6ICdiYWNrd2FyZCcsXG5cdFx0XHRjb2xsZWN0aW9uIDogdGhpcy5vcHRpb25zLmNvbGxlY3Rpb24sXG5cdFx0XHR0aXRsZSA6ICfQo9C80LXQvdGM0YjQuNGC0Ywg0YHQutC+0YDQvtGB0YLRjCDQv9GA0L7QuNCz0YDRi9Cy0LDQvdC40Y8nLFxuXHRcdFx0b25DbGljayA6IGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0dmlkZW8uZGVjcmVhc2VSYXRlKCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHR0aGlzLnVwQ29udHJvbCA9IG5ldyBDb250cm9sKHRoaXMucGxheWVyLCB7XG5cdFx0XHRjbGFzc05hbWUgOiAncmF0ZS11cCcsXG5cdFx0XHRuYW1lIDogJ3JhdGUtdXAnLFxuXHRcdFx0aWNvbk5hbWUgOiAnZm9yd2FyZCcsXG5cdFx0XHRjb2xsZWN0aW9uIDogdGhpcy5vcHRpb25zLmNvbGxlY3Rpb24sXG5cdFx0XHR0aXRsZSA6ICfQo9Cy0LXQu9C40YfQuNGC0Ywg0YHQutC+0YDQvtGB0YLRjCDQv9GA0L7QuNCz0YDRi9Cy0LDQvdC40Y8nLFxuXHRcdFx0b25DbGljayA6IGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0dmlkZW8uaW5jcmVhc2VSYXRlKCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHR0aGlzLmN1cnJlbnRSYXRlID0gbmV3IENvbnRyb2xUZXh0KHRoaXMucGxheWVyLCB7XG5cdFx0XHRjbGFzc05hbWUgOiAncmF0ZS1jdXJyZW50Jyxcblx0XHRcdG9uQ2xpY2sgOiBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdHZpZGVvLnJhdGUgPSB0aGlzLnBsYXllci5vcHRpb25zLnJhdGUuZGVmYXVsdFxuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0dGhpcy5lbGVtZW50XG5cdFx0XHQuYXBwZW5kKHRoaXMuZG93bkNvbnRyb2wuZWxlbWVudClcblx0XHRcdC5hcHBlbmQodGhpcy5jdXJyZW50UmF0ZS5lbGVtZW50KVxuXHRcdFx0LmFwcGVuZCh0aGlzLnVwQ29udHJvbC5lbGVtZW50KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGJ1aWxkQ1NTQ2xhc3MoKSB7XG5cdFx0cmV0dXJuIHRoaXMub3B0aW9ucy5jbGFzc05hbWU7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRvblBsYXllckluaXRlZCgpIHtcblx0XHR0aGlzLnVwZGF0ZSgpO1xuXHR9XG5cblx0LyoqXG5cdCAqXG5cdCAqL1xuXHRvbkNsaWNrKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0fVxuXG5cdHVwZGF0ZSh2YWx1ZSkge1xuXHRcdGNvbnN0IHZpZGVvID0gdGhpcy5wbGF5ZXIudmlkZW87XG5cblx0XHR2YWx1ZSA9IHZhbHVlIHx8IHZpZGVvLnJhdGU7XG5cdFx0dmFsdWUgPSBwYXJzZUZsb2F0KHZhbHVlKVxuXHRcdFx0LnRvRml4ZWQoMilcblx0XHRcdC50b1N0cmluZygpXG5cdFx0XHQucmVwbGFjZSgvLC9nLCAnLicpO1xuXHRcdHRoaXMuY3VycmVudFJhdGUudGV4dCA9ICfDlycgKyB2YWx1ZTtcblxuXHRcdGlmKHRoaXMuZGlzYWJsZSkgcmV0dXJuO1xuXG5cdFx0aWYodmlkZW8ucmF0ZSA8PSB2aWRlby5yYXRlTWluKSB7XG5cdFx0XHR0aGlzLmRvd25Db250cm9sLmRpc2FibGUgPSB0cnVlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmRvd25Db250cm9sLmRpc2FibGUgPSBmYWxzZTtcblx0XHR9XG5cblx0XHRpZih2aWRlby5yYXRlID49IHZpZGVvLnJhdGVNYXgpIHtcblx0XHRcdHRoaXMudXBDb250cm9sLmRpc2FibGUgPSB0cnVlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnVwQ29udHJvbC5kaXNhYmxlID0gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblx0c2V0IGRpc2FibGUodmFsdWUpIHtcblx0XHR0aGlzLl9kaXNhYmxlID0gdmFsdWU7XG5cdFx0dGhpcy5kb3duQ29udHJvbC5kaXNhYmxlID0gdmFsdWU7XG5cdFx0dGhpcy51cENvbnRyb2wuZGlzYWJsZSA9IHZhbHVlO1xuXHR9XG5cblx0aW5pdCAoKSB7XG5cdFx0bGV0IHJhdGUgPSBDb29raWUuZ2V0KCdyYXRlJywgdGhpcy5wbGF5ZXIub3B0aW9ucy5yYXRlLmRlZmF1bHQpO1xuXHRcdHRoaXMuc2hvdyhyYXRlKTtcblx0fVxuXG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnUmF0ZUNvbnRyb2wnLCBSYXRlQ29udHJvbCk7XG5Db250cm9sLnJlZ2lzdGVyQ29udHJvbCgncmF0ZScsIFJhdGVDb250cm9sKTtcbmV4cG9ydCBkZWZhdWx0IFJhdGVDb250cm9sO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvUmF0ZUNvbnRyb2wuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIEJhY2t3YXJkQ29udHJvbC5qc1xuICpcbiAqIEJhY2t3YXJkIGNvbnRyb2xcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL0NvbnRyb2wnO1xuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gT3B0aW9uc1xuICogQGNsYXNzIEJhY2t3YXJkQ29udHJvbFxuICogQGV4dGVuZHMgQ29udHJvbFxuICovXG5jbGFzcyBCYWNrd2FyZENvbnRyb2wgZXh0ZW5kcyBDb250cm9sIHtcblx0Y29uc3RydWN0b3IgKHBsYXllciwgb3B0aW9ucz17fSkge1xuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0aWNvbk5hbWUgOiAndW5kbycsXG5cdFx0XHRjbGFzc05hbWUgOiAnYmFja3dhcmQnLFxuXHRcdFx0bmFtZSA6ICdiYWNrd2FyZCcsXG5cdFx0XHR0aXRsZSA6IGDQntGC0LzQvtGC0LDRgtGMINC90LDQt9Cw0LQg0L3QsCAke3BsYXllci5vcHRpb25zLnBsYXliYWNrLnN0ZXAubWVkaXVtfSDRgdC10LrRg9C90LRgLFxuXHRcdFx0ZGlzYWJsZSA6IHRydWVcblx0XHR9LCBvcHRpb25zKTtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ2ZpcnN0cGxheScsICgpID0+IHRoaXMuZGlzYWJsZSA9IGZhbHNlKVxuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0b25DbGljayhlKSB7XG5cdFx0c3VwZXIub25DbGljayhlKTtcblx0XHR0aGlzLnBsYXllci52aWRlby5jdXJyZW50VGltZSAtPSB0aGlzLnBsYXllci5vcHRpb25zLnBsYXliYWNrLnN0ZXAubWVkaXVtO1xuXHRcdHRoaXMucGxheWVyLnNwbGFzaEljb24uc2hvdygndW5kbycpO1xuXHR9XG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnQmFja3dhcmRDb250cm9sJywgQmFja3dhcmRDb250cm9sKTtcbkNvbnRyb2wucmVnaXN0ZXJDb250cm9sKCdiYWNrd2FyZCcsIEJhY2t3YXJkQ29udHJvbCk7XG5leHBvcnQgZGVmYXVsdCBCYWNrd2FyZENvbnRyb2w7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9CYWNrd2FyZENvbnRyb2wuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIFNvdXJjZUNvbnRyb2wuanNcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL0NvbnRyb2wnO1xuaW1wb3J0IENvbnRyb2xDb250YWluZXIgZnJvbSAnLi9Db250cm9sQ29udGFpbmVyJztcblxuXG4vKipcbiAqIEBjbGFzcyBTb3VyY2VDb250cm9sXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAZXh0ZW5kcyBDb250cm9sQ29uYWluZXJcbiAqL1xuY2xhc3MgU291cmNlQ29udHJvbCBleHRlbmRzIENvbnRyb2xDb250YWluZXIge1xuXHQvLyBUT0RPOiDQlNC10LvQsNGC0YwgZGlzYWJsZS9lbmFibGUg0L/QvtGB0LvQtSBvcHRpb25zIGluaXRcblx0Y29uc3RydWN0b3IgKHBsYXllciwgb3B0aW9ucz17fSkge1xuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0bmFtZSA6ICdzb3VyY2UnLFxuXHRcdFx0aWNvbk5hbWUgOiAnYnVsbHNleWUnLFxuXHRcdFx0dGl0bGUgOiAn0JrQsNGH0LXRgdGC0LLQvicsXG5cdFx0XHRjbGFzc05hbWUgOiAnc291cmNlLWNvbnRyb2wnLFxuXHRcdFx0ZGlzYWJsZSA6IHRydWVcblx0XHR9LCBvcHRpb25zKTtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ3BsYXlpbmcnLCB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLnBsYXllci5vbigncXVhbGl0eWNoYW5nZScsIHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xuXHR9XG5cblx0b25JdGVtQ2xpY2soZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblxuXHRcdGNvbnN0IGl0ZW0gPSAkKGUudGFyZ2V0KTtcblx0XHRjb25zdCB2aWRlbyA9IHRoaXMucGxheWVyLnZpZGVvO1xuXHRcdHZpZGVvLnBsYXliYWNrUXVhbGl0eSA9IGl0ZW0uZGF0YSgnbmFtZScpO1xuXG5cdFx0dGhpcy5kcm9wZG93bkNvbnRlbnQuaGlkZSgpO1xuXG5cdH1cblxuXHRvblBsYXllckluaXRlZChlLCBkYXRhKSB7XG5cdFx0dGhpcy51cGRhdGUoKTtcblx0fVxuXG5cdGdldERhdGEoKSB7XG5cdFx0cmV0dXJuIHRoaXMucGxheWVyLnZpZGVvLmdldEF2YWlsYWJsZVF1YWxpdHlMZXZlbHMoKTtcblx0fVxuXG5cdGdldEN1cnJlbnRWYWx1ZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5wbGF5ZXIudmlkZW8ucGxheWJhY2tRdWFsaXR5O1xuXHR9XG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnU291cmNlQ29udHJvbCcsIFNvdXJjZUNvbnRyb2wpO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ3NvdXJjZScsIFNvdXJjZUNvbnRyb2wpO1xuZXhwb3J0IGRlZmF1bHQgU291cmNlQ29udHJvbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL1NvdXJjZUNvbnRyb2wuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIENvbnRyb2xDb250YWluZXIuanNcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL0NvbnRyb2wnO1xuaW1wb3J0IENvbnRyb2xEcm9wZG93biBmcm9tICcuL0NvbnRyb2xEcm9wZG93bic7XG5cbi8qKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQGNsYXNzIENvbnRyb2xDb250YWluZXJcbiAqIEBleHRlbmRzIENvbnRyb2xEcm9wZG93blxuICovXG5jbGFzcyBDb250cm9sQ29udGFpbmVyIGV4dGVuZHMgQ29udHJvbERyb3Bkb3duIHtcblxuXHRjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnM9e30pIHtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXHRcdHRoaXMuX2FjdGl2ZSA9IG51bGw7XG5cdFx0LyoqXG5cdFx0ICogTGlzdCBvZiBpdGVtc1xuXHRcdCAqXG5cdFx0ICogQHB1YmxpY1xuXHRcdCAqIEB0eXBlIHtBcnJheX1cblx0XHQgKi9cblx0XHR0aGlzLmxpc3QgPSBbXTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgaXRlbSBvZiBjb250YWluZXIgYnkgaW5kZXhcblx0ICpcblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcblx0ICovXG5cdGdldEJ5SW5kZXgoaW5kZXgpIHtcblx0XHRyZXR1cm4gdGhpcy5saXN0W2luZGV4XTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTZXQgaXRlbSBhY3RpdmUgYnkgaW5kZXhcblx0ICpcblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcblx0ICovXG5cdHNldEFjdGl2ZUJ5SW5kZXgoaW5kZXgpIHtcblx0XHRpZiAodGhpcy5hY3RpdmUpIHtcblx0XHRcdHRoaXMuYWN0aXZlLnJlbW92ZUNsYXNzKCdjb250cm9sLWNvbnRhaW5lcl9faXRlbS0tYWN0aXZlJyk7XG5cdFx0fVxuXHRcdHRoaXMuX2FjdGl2ZSA9IHRoaXMubGlzdFtpbmRleF0uYWRkQ2xhc3MoJ2NvbnRyb2wtY29udGFpbmVyX19pdGVtLS1hY3RpdmUnKTtcblx0XHRyZXR1cm4gdGhpcy5fYWN0aXZlO1xuXHR9XG5cblxuXHQvKipcblx0ICogR2V0dGVyIG9mIGFjdGl2ZSBmaWVsZFxuXHQgKlxuXHQgKiBAcHVibGljXG5cdCAqIEB0eXBlIHtqUXVlcnl9XG5cdCAqL1xuXHRnZXQgYWN0aXZlICgpIHtcblx0XHRpZiAodGhpcy5fYWN0aXZlICYmIHRoaXMuX2FjdGl2ZS5sZW5ndGggPiAwKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5fYWN0aXZlO1xuXHRcdH1cblx0XHR0aGlzLmxpc3QuZm9yRWFjaChpdGVtID0+IHtcblx0XHRcdGlmIChpdGVtLmhhc0NsYXNzKCdjb250cm9sLWNvbnRhaW5lcl9faXRlbS0tYWN0aXZlJykpIHtcblx0XHRcdFx0dGhpcy5fYWN0aXZlID0gaXRlbTtcblx0XHRcdH1cblx0XHR9KVxuXHRcdHJldHVybiB0aGlzLl9hY3RpdmU7XG5cdH1cblxuXHQvKipcblx0ICogU2V0dGVyIG9mIGFjdGl2ZSBmaWVsZFxuXHQgKlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7alF1ZXJ5fSBJdGVtIG9mIGNvbnRhaW5lclxuXHQgKi9cblx0c2V0IGFjdGl2ZSAoZWxlbWVudCkge1xuXHRcdGlmICh0aGlzLmFjdGl2ZSkge1xuXHRcdFx0dGhpcy5hY3RpdmUucmVtb3ZlQ2xhc3MoJ2NvbnRyb2wtY29udGFpbmVyX19pdGVtLS1hY3RpdmUnKTtcblx0XHR9XG5cdFx0aWYgKGVsZW1lbnQpIHtcblx0XHRcdCQoZWxlbWVudCkuYWRkQ2xhc3MoJ2NvbnRyb2wtY29udGFpbmVyX19pdGVtLS1hY3RpdmUnKTtcblx0XHR9XG5cdFx0dGhpcy5fYWN0aXZlID0gZWxlbWVudDtcblx0XHR0aGlzLmNsb3NlKCk7XG5cdFx0cmV0dXJuIHRoaXMuX2FjdGl2ZVxuXHR9XG5cblxuXHQvKipcblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge1N0cmluZ3xqUXVlcnl9IENvbnRlbnQgb2YgaXRlbVxuXHQgKiBAcGFyYW0ge09iamVjdH0gRGF0YSBvZiBpdGVtXG5cdCAqL1xuXHRhZGRJdGVtIChjb250ZW50LCBkYXRhKSB7XG5cdFx0Y29uc3QgaXRlbSA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0LmFkZENsYXNzKCdjb250cm9sLWNvbnRhaW5lcl9faXRlbScpXG5cdFx0XHQuZGF0YShkYXRhKVxuXHRcdFx0LmF0dHIoJ3RpdGxlJywgZGF0YS50b29sdGlwKVxuXHRcdFx0Lm9uKCdjbGljayB0YXAnLCB0aGlzLm9uSXRlbUNsaWNrLmJpbmQodGhpcykpXG5cdFx0XHQuYXBwZW5kKGNvbnRlbnQpO1xuXG5cdFx0dGhpcy5saXN0ID0gdGhpcy5saXN0LmNvbmNhdChpdGVtKTtcblxuXHRcdHRoaXMuZHJvcGRvd25Db250ZW50LmFwcGVuZChpdGVtKTtcblxuXHRcdHRoaXMuZW1pdFRhcEV2ZW50cyhpdGVtKTtcblxuXHRcdHJldHVybiBpdGVtO1xuXHR9XG5cblx0LyoqXG5cdCAqIE9uIGl0ZW0gY2xpY2sgZXZlbnQgaGFuZGxlclxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7RXZlbnR9IGVcblx0ICovXG5cdG9uSXRlbUNsaWNrIChlKSB7XG5cdFx0dGhpcy5hY3RpdmUgPSBlLmN1cnJlbnRUYXJnZXQ7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRidWlsZENTU0NsYXNzKCkge1xuXHRcdHJldHVybiBgJHtzdXBlci5idWlsZENTU0NsYXNzKCl9IGNvbnRyb2wtY29udGFpbmVyYFxuXHR9XG5cblx0dXBkYXRlKCkge1xuXHRcdGNvbnN0IGRhdGEgPSB0aGlzLmdldERhdGEoKVxuXHRcdGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHRoaXMuZ2V0Q3VycmVudFZhbHVlKClcblxuXHRcdGlmKGRhdGEgPT0gbnVsbCB8fCBkYXRhLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0dGhpcy5kaXNhYmxlID0gdHJ1ZTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLmxpc3QgPSBbXTtcblx0XHR0aGlzLmRyb3Bkb3duQ29udGVudC5lbXB0eSgpO1xuXG5cdFx0ZGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xuXHRcdFx0Y29uc3QgZWxlbSA9IHRoaXMuYWRkSXRlbShpdGVtLnRpdGxlLCBpdGVtKTtcblx0XHRcdGlmKGN1cnJlbnRWYWx1ZSAmJiBjdXJyZW50VmFsdWUubmFtZSA9PT0gaXRlbS5uYW1lKSB7XG5cblx0XHRcdFx0dGhpcy5hY3RpdmUgPSBlbGVtO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdHRoaXMuZGlzYWJsZSA9IGZhbHNlO1xuXHR9XG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnQ29udHJvbENvbnRhaW5lcicsIENvbnRyb2xDb250YWluZXIpO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ2NvbnRhaW5lcicsIENvbnRyb2xDb250YWluZXIpO1xuZXhwb3J0IGRlZmF1bHQgQ29udHJvbENvbnRhaW5lcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL0NvbnRyb2xDb250YWluZXIuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIFN1YnRpdGxlQ29udHJvbC5qc1xuICpcbiAqIFN1YnRpdGxlIGNvbnRyb2xcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL0NvbnRyb2wnO1xuaW1wb3J0IENvbnRyb2xDb250YWluZXIgZnJvbSAnLi9Db250cm9sQ29udGFpbmVyJztcblxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAY2xhc3MgU3VidGl0bGVDb250cm9sXG4gKiBAZXh0ZW5kcyBDb250cm9sQ29udGFpbmVyXG4gKi9cbmNsYXNzIFN1YnRpdGxlQ29udHJvbCBleHRlbmRzIENvbnRyb2xDb250YWluZXIge1xuXHRjb25zdHJ1Y3RvciAocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRpY29uTmFtZSA6ICdjb21tZW50aW5nLW8nLFxuXHRcdFx0dGl0bGUgOiAn0KHRg9Cx0YLQuNGC0YDRiycsXG5cdFx0XHRuYW1lIDogJ3N1YnRpdGxlJyxcblx0XHRcdGNsYXNzTmFtZSA6ICdzdWJ0aXRsZS1jb250cm9sJyxcblx0XHRcdGRpc2FibGUgOiB0cnVlXG5cdFx0fSwgb3B0aW9ucyk7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblxuXHRcdHRoaXMucGxheWVyLm9uKCdwbGF5aW5nJywgdGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5wbGF5ZXIub24oJ3RyYWNrc2NoYW5nZScsIHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xuXHR9XG5cblx0b25DbGljayAoZSkge1xuXHRcdHN1cGVyLm9uQ2xpY2soZSk7XG5cdFx0Y29uc3QgdmlkZW8gPSB0aGlzLnBsYXllci52aWRlbztcblx0XHR2aWRlby50cmFjayA9IG51bGxcblx0fVxuXG5cdG9uSXRlbUNsaWNrIChlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKClcblxuXHRcdGNvbnN0IGl0ZW0gPSAkKGUudGFyZ2V0KVxuXHRcdGNvbnN0IHZpZGVvID0gdGhpcy5wbGF5ZXIudmlkZW87XG5cdFx0aWYgKGl0ZW0uZGF0YSgpKSB7XG5cdFx0XHR2aWRlby50cmFjayA9IGl0ZW0uZGF0YSgpO1xuXHRcdH1cblxuXHRcdHRoaXMuZHJvcGRvd25Db250ZW50LmhpZGUoKVxuXHR9XG5cblx0b25QbGF5ZXJJbml0ZWQoZSwgZGF0YSkge1xuXHRcdHRoaXMudXBkYXRlKClcblx0fVxuXG5cdHVwZGF0ZSgpIHtcblx0XHRzdXBlci51cGRhdGUoKTtcblx0XHRjb25zdCBoYXNWYWx1ZSA9ICEhKHRoaXMuZ2V0Q3VycmVudFZhbHVlKCkgJiYgdGhpcy5nZXRDdXJyZW50VmFsdWUoKS5uYW1lICE9IG51bGwpO1xuXHRcdHRoaXMuZWxlbWVudC50b2dnbGVDbGFzcyhcblx0XHRcdCdjb250cm9sLWNoZWNrYm94LS1jaGVja2VkJyxcblx0XHRcdGhhc1ZhbHVlXG5cdFx0KVxuXHR9XG5cblx0Z2V0RGF0YSgpIHtcblx0XHRyZXR1cm4gdGhpcy5wbGF5ZXIudmlkZW8uc3VidGl0bGVzO1xuXHR9XG5cblx0Z2V0Q3VycmVudFZhbHVlKCkge1xuXHRcdHJldHVybiB0aGlzLnBsYXllci52aWRlby50cmFjaztcblx0fVxuXG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnU3VidGl0bGVDb250cm9sJywgU3VidGl0bGVDb250cm9sKTtcbkNvbnRyb2wucmVnaXN0ZXJDb250cm9sKCdzdWJ0aXRsZScsIFN1YnRpdGxlQ29udHJvbCk7XG5leHBvcnQgZGVmYXVsdCBTdWJ0aXRsZUNvbnRyb2w7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9TdWJ0aXRsZUNvbnRyb2wuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIERvd25sb2FkQ29udHJvbC5qc1xuICpcbiAqIERvd25sb2FkIGNvbnRyb2xcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9Db250cm9sJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJztcblxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAY2xhc3MgRG93bmxvYWRDb250cm9sXG4gKiBAZXhudGVkcyBDb250cm9sXG4gKi9cbmNsYXNzIERvd25sb2FkQ29udHJvbCBleHRlbmRzIENvbnRyb2wge1xuXHRjb25zdHJ1Y3RvciAocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHtcblx0XHRcdHRpdGxlIDogJ9Ch0LrQsNGH0LDRgtGMINCy0LjQtNC10L4nLFxuXHRcdFx0Y2xhc3NOYW1lIDogJ2Rvd25sb2FkJyxcblx0XHRcdG5hbWUgOiAnZG93bmxvYWQnLFxuXHRcdH0sIG9wdGlvbnMpO1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cdFx0dGhpcy5wbGF5ZXIub24oJ2xvYWRzdGFydCcsIHRoaXMub25Mb2FkU3RhcnQuYmluZCh0aGlzKSk7XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0Ly8gVE9ETzog0JTQvtC+0L/RgNC10LTQtdC70LjRgtGMINGN0YLQvtGCINC80LXRgtC+0LQsINCwINC90LUg0L/QtdGA0LXQvtC/0YDQtdC00LvQtdC40YLRjFxuXHRcdHRoaXMuZWxlbWVudCA9ICQoJzxhIC8+Jylcblx0XHRcdC5hdHRyKHtcblx0XHRcdFx0aHJlZiA6ICcnLFxuXHRcdFx0XHR0YXJnZXQgOiAnX2JsYW5rJyxcblx0XHRcdFx0ZG93bmxvYWQgOiB0cnVlLFxuXHRcdFx0XHR0aXRsZSA6IHRoaXMub3B0aW9ucy50aXRsZSxcblx0XHRcdH0pXG5cdFx0XHQuYWRkQ2xhc3ModGhpcy5idWlsZENTU0NsYXNzKCkpXG5cdFx0XHQuYXBwZW5kKG5ldyBJY29uKHRoaXMucGxheWVyLCB7IGljb25OYW1lIDogJ2Rvd25sb2FkJyB9KS5lbGVtZW50KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGJ1aWxkQ1NTQ2xhc3MoKSB7XG5cdFx0cmV0dXJuIGAke3N1cGVyLmJ1aWxkQ1NTQ2xhc3MoKX1gO1xuXHR9XG5cblxuXHQvKipcblx0ICogU2V0dGVyIG9mIGxpbmsgZmllbGRcblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgUGF0aCBmb3IgdmlkZW9cblx0ICovXG5cdHNldCBsaW5rICh2YWx1ZSkge1xuXHRcdGNvbnN0IHRpdGxlID0gdGhpcy5wbGF5ZXIub3B0aW9ucy50aXRsZTtcblx0XHRsZXQgZmlsZU5hbWU7XG5cblx0XHRpZih0aXRsZSAhPSBudWxsKSB7XG5cdFx0XHRmaWxlTmFtZSA9IGRlY29kZVVSSUNvbXBvbmVudCh0aXRsZSkgKyAnLicgKyBnZXRGaWxlRXh0ZW5zaW9uKHZhbHVlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3QgcGFyc2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXHRcdFx0cGFyc2VyLmhyZWYgPSB2YWx1ZTtcblx0XHRcdGZpbGVOYW1lID0gcGFyc2VyLnBhdGhuYW1lLnNwbGl0KCcvJyk7XG5cdFx0XHRmaWxlTmFtZSA9IGZpbGVOYW1lW2ZpbGVOYW1lLmxlbmd0aCAtIDFdO1xuXHRcdH1cblxuXHRcdHRoaXMuZWxlbWVudC5hdHRyKHtcblx0XHRcdGhyZWYgOiB2YWx1ZSxcblx0XHRcdGRvd25sb2FkIDogZmlsZU5hbWVcblx0XHR9KTtcblx0fVxuXG5cblx0b25Mb2FkU3RhcnQoZSwgZGF0YSkge1xuXHRcdHRoaXMubGluayA9IHRoaXMucGxheWVyLnZpZGVvLnNyYy51cmw7XG5cdH1cblxufVxuZnVuY3Rpb24gZ2V0RmlsZUV4dGVuc2lvbihmaWxlTmFtZSkge1xuXHRyZXR1cm4gZmlsZU5hbWUuc3BsaXQoJy4nKS5wb3AoKTtcbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdEb3dubG9hZENvbnRyb2wnLCBEb3dubG9hZENvbnRyb2wpO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ2Rvd25sb2FkJywgRG93bmxvYWRDb250cm9sKTtcbmV4cG9ydCBkZWZhdWx0IERvd25sb2FkQ29udHJvbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL0Rvd25sb2FkQ29udHJvbC5qcyIsIlxuJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBLZXliaW5kaW5nSW5mb0NvbnRyb2wuanNcbiAqXG4gKiBJbmZvIGNvbnRyb2xcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL0NvbnRyb2wnO1xuaW1wb3J0IENvbnRyb2xEcm9wZG93biBmcm9tICcuL0NvbnRyb2xEcm9wZG93bic7XG5cbi8qKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQGNsYXNzIEtleUJpbmRpbmdJbmZvQ29udHJvbFxuICogQGV4dGVuZHMgQ29udHJvbERyb3Bkb3duXG4gKi9cbmNsYXNzIEtleUJpbmRpbmdJbmZvQ29udHJvbCBleHRlbmRzIENvbnRyb2xEcm9wZG93biB7XG5cblx0Y29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRpY29uTmFtZSA6ICdpbmZvJyxcblx0XHRcdHRpdGxlIDogJ9CY0L3RhNC+Jyxcblx0XHRcdGNsYXNzTmFtZSA6ICdpbmZvLWNvbnRyb2wnLFxuXHRcdFx0bmFtZSA6ICdpbmZvJ1xuXHRcdH0sIG9wdGlvbnMpO1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cdH1cblxuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdHN1cGVyLmNyZWF0ZUVsZW1lbnQoKTtcblx0XHRsZXQga2V5QmluZGluZyA9IHRoaXMucGxheWVyLm9wdGlvbnMua2V5QmluZGluZztcblx0XHRsZXQgaW5mb0NvbnRlbnQgPSBgYDtcblx0XHRmb3IgKGxldCBfa2V5IGluIGtleUJpbmRpbmcpIHtcblx0XHRcdGlmICgha2V5QmluZGluZy5oYXNPd25Qcm9wZXJ0eShfa2V5KSkgY29udGludWU7XG5cblx0XHRcdGxldCBob3RrZXkgPSBrZXlCaW5kaW5nW19rZXldO1xuXHRcdFx0bGV0IGl0ZW0gPSAnJztcblx0XHRcdGxldCBrZXlTdHJpbmcgPSAnJztcblxuXHRcdFx0aG90a2V5LmluZm8uZm9yRWFjaCgoa2V5LCBpbmRleCkgPT4ge1xuXHRcdFx0XHRpZiAoaW5kZXggIT09IDApIHtcblx0XHRcdFx0XHRrZXlTdHJpbmcgKz0gYCArIGBcblx0XHRcdFx0fVxuXHRcdFx0XHRrZXlTdHJpbmcgKz0gYDxrYmQgY2xhc3M9XCJsZXBsYXllci1rZXlcIj4ke2tleX08L2tiZD5gXG5cdFx0XHR9KTtcblxuXHRcdFx0aXRlbSA9IGBcblx0XHRcdFx0PGRpdiBjbGFzcz1cImluZm8tY29udHJvbF9faXRlbVwiPlxuXHRcdFx0XHRcdCR7a2V5U3RyaW5nfSAtICR7aG90a2V5LmRlc2NyaXB0aW9ufVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdGBcblxuXHRcdFx0aW5mb0NvbnRlbnQgKz0gaXRlbTtcblxuXHRcdH1cblx0XHR0aGlzLmRyb3Bkb3duQ29udGVudFxuXHRcdFx0LmFkZENsYXNzKCdpbmZvLWNvbnRyb2xfX2NvbnRlbnQnKVxuXHRcdFx0LmFwcGVuZChpbmZvQ29udGVudCk7XG5cdH1cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdLZXlCaW5kaW5nSW5mb0NvbnRyb2wnLCBLZXlCaW5kaW5nSW5mb0NvbnRyb2wpO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ2tleWJpbmRpbmcgaW5mbycsIEtleUJpbmRpbmdJbmZvQ29udHJvbCk7XG5leHBvcnQgZGVmYXVsdCBLZXlCaW5kaW5nSW5mb0NvbnRyb2w7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9LZXliaW5kaW5nSW5mb0NvbnRyb2wuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIFRpbWVJbmZvQ29udHJvbC5qc1xuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCBDb250cm9sIGZyb20gJy4vQ29udHJvbCc7XG5pbXBvcnQgQ29udHJvbFRleHQgZnJvbSAnLi9Db250cm9sVGV4dCc7XG5pbXBvcnQgeyBzZWNvbmRzVG9UaW1lIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBjbGFzcyBUaW1lSW5mb0NvbnRyb2xcbiAqIEBwcm9wZXJ0eSB7Q29udHJvbFRleHR9IGN1cnJlbnRUaW1lIEN1cnJlbnQgdGltZSdzIHRleHRcbiAqIEBwcm9wZXJ0eSB7Q29udHJvbFRleHR9IHRvdGFsVGltZSBUb3RhbCB0aW1lXG4gKiBAcHJvcGVydHkge2pRdWVyeX0gbGluZVxuICogQGV4dGVuZHMgQ29udHJvbFxuICovXG5jbGFzcyBUaW1lSW5mb0NvbnRyb2wgZXh0ZW5kcyBDb250cm9sIHtcblxuXHRjb25zdHJ1Y3RvciAocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRjbGFzc05hbWUgOiAndGltZWxpbmUgdGltZWxpbmUtY29udGFpbmVyJyxcblx0XHRcdG5hbWUgOiAndGltZS1pbmZvJ1xuXHRcdH0sIG9wdGlvbnMpO1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cblx0XHR0aGlzLnBsYXllci5vbigndGltZXVwZGF0ZScsIChlLCBkYXRhKSA9PiB7XG5cdFx0XHRjb25zdCB0aW1lID0gdGhpcy5wbGF5ZXIuY3VycmVudFRpbWU7XG5cdFx0XHR0aGlzLl9jdXJyZW50VGltZUNvbnRyb2wudGV4dCA9IHNlY29uZHNUb1RpbWUodGltZSk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLnBsYXllci5vbignZHVyYXRpb25jaGFuZ2UnLCAoZSkgPT4ge1xuXHRcdFx0dGhpcy5fdG90YWxUaW1lQ29udHJvbC50ZXh0ID0gc2Vjb25kc1RvVGltZSh0aGlzLnBsYXllci52aWRlby5kdXJhdGlvbik7XG5cdFx0fSk7XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0Y29uc3QgZHVyYXRpb24gPSB0aGlzLnBsYXllci52aWRlby5kdXJhdGlvbjtcblx0XHRjb25zdCBjdXJyZW50VGltZSA9IHRoaXMucGxheWVyLnZpZGVvLmN1cnJlbnRUaW1lO1xuXHRcdHRoaXMuX2N1cnJlbnRUaW1lQ29udHJvbCA9IG5ldyBDb250cm9sVGV4dCh0aGlzLnBsYXllciwgeyBjbGFzc05hbWUgOiAnY29udHJvbC10aW1lX19jdXJyZW50J30pO1xuXHRcdHRoaXMuX3RvdGFsVGltZUNvbnRyb2wgPSBuZXcgQ29udHJvbFRleHQodGhpcy5wbGF5ZXIsIHsgY2xhc3NOYW1lIDogJ2NvbnRyb2wtdGltZV9fdG90YWwnfSk7XG5cblx0XHRpZihpc05hTihkdXJhdGlvbikgfHwgZHVyYXRpb24gPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5fdG90YWxUaW1lQ29udHJvbC50ZXh0ID0gJyc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuX3RvdGFsVGltZUNvbnRyb2wudGV4dCA9IHNlY29uZHNUb1RpbWUoZHVyYXRpb24pO1xuXHRcdH1cblxuXHRcdGlmKGN1cnJlbnRUaW1lID09IG51bGwpIHtcblx0XHRcdHRoaXMuX2N1cnJlbnRUaW1lQ29udHJvbC50ZXh0ID0gc2Vjb25kc1RvVGltZSgwKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5fY3VycmVudFRpbWVDb250cm9sLnRleHQgPSBzZWNvbmRzVG9UaW1lKGN1cnJlbnRUaW1lKTtcblx0XHR9XG5cblx0XHR0aGlzLmVsZW1lbnQgPSAkKCc8ZGl2Lz4nKS5hZGRDbGFzcygnY29udHJvbC10aW1lJyk7XG5cdFx0dGhpcy5lbGVtZW50XG5cdFx0XHQuYXBwZW5kKHRoaXMuX2N1cnJlbnRUaW1lQ29udHJvbC5lbGVtZW50KVxuXHRcdFx0LmFwcGVuZCh0aGlzLl90b3RhbFRpbWVDb250cm9sLmVsZW1lbnQpXG5cblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50O1xuXHR9XG5cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRvblBsYXllckluaXRlZChlKSB7XG5cdFx0bGV0IHZpZGVvID0gdGhpcy5wbGF5ZXIudmlkZW87XG5cdFx0dGhpcy5fY3VycmVudFRpbWVDb250cm9sLnRleHQgPSBzZWNvbmRzVG9UaW1lKHZpZGVvLmN1cnJlbnRUaW1lKTtcblx0XHR0aGlzLl90b3RhbFRpbWVDb250cm9sLnRleHQgPSBzZWNvbmRzVG9UaW1lKHZpZGVvLmR1cmF0aW9uKTtcblx0fVxuXG5cdG9uQ2xpY2soZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKVxuXHR9XG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnVGltZUluZm9Db250cm9sJywgVGltZUluZm9Db250cm9sKTtcbkNvbnRyb2wucmVnaXN0ZXJDb250cm9sKCd0aW1laW5mbycsIFRpbWVJbmZvQ29udHJvbCk7XG5leHBvcnQgZGVmYXVsdCBUaW1lSW5mb0NvbnRyb2w7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9UaW1lSW5mb0NvbnRyb2wuanMiLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL0NvbXBvbmVudCc7XG5pbXBvcnQgeyBJU19TQUZBUkksIElTX0lPUywgSVNfQU5EUk9JRCB9IGZyb20gJy4uL3V0aWxzL2Jyb3dzZXInO1xuaW1wb3J0IEVudGl0eSBmcm9tICcuL0VudGl0eSc7XG5cblxuY2xhc3MgSHRtbDUgZXh0ZW5kcyBFbnRpdHkge1xuXHRjb25zdHJ1Y3RvciAocGxheWVyLCBvcHRpb25zKSB7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblx0XHR0aGlzLm1lZGlhID0gdGhpcy5lbGVtZW50WzBdO1xuXG5cdFx0dGhpcy5zdWJ0aXRsZXMgPSBbXTtcblx0XHR0aGlzLmJ1ZmZlclJhbmdlcyA9IFtdO1xuXG5cdFx0dGhpcy5zcmMgPSB0aGlzLnBsYXllci5vcHRpb25zLnNyYztcblxuXHRcdGlmKHRoaXMucGxheWVyLm9wdGlvbnMucG9zdGVyICE9IG51bGwpIHtcblx0XHRcdHRoaXMucG9zdGVyID0gdGhpcy5wbGF5ZXIub3B0aW9ucy5wb3N0ZXI7XG5cdFx0fVxuXG5cdFx0aWYodGhpcy5nZXRBdmFpbGFibGVRdWFsaXR5TGV2ZWxzKCkubGVuZ3RoID4gMCkge1xuXHRcdFx0dGhpcy5fcGxheWJhY2tRdWFsaXR5ID0gdGhpcy5nZXRBdmFpbGFibGVRdWFsaXR5TGV2ZWxzKClbMF07XG5cdFx0fVxuXG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdsb2Fkc3RhcnQnLCB0aGlzLm9uTG9hZFN0YXJ0LmJpbmQodGhpcykpO1xuXHRcdHRoaXMuZWxlbWVudC5vbigndGltZXVwZGF0ZScsIHRoaXMub25UaW1lVXBkYXRlLmJpbmQodGhpcykpO1xuXHRcdHRoaXMuZWxlbWVudC5vbignZHVyYXRpb25jaGFuZ2UnLCB0aGlzLm9uRHVyYXRpb25DaGFuZ2UuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdwcm9ncmVzcycsIHRoaXMub25Qcm9ncmVzcy5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ3NlZWtpbmcnLCB0aGlzLm9uU2Vla2luZy5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ3NlZWtlZCcsIHRoaXMub25TZWVrZWQuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCd2b2x1bWVjaGFuZ2UnLCB0aGlzLm9uVm9sdW1lQ2hhbmdlLmJpbmQodGhpcykpO1xuXHRcdHRoaXMuZWxlbWVudC5vbignY2xpY2snLCB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdkYmxjbGljaycsIHRoaXMub25EYmxjbGljay5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ3BsYXknLCB0aGlzLm9uUGxheS5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ3BhdXNlJywgdGhpcy5vblBhdXNlLmJpbmQodGhpcykpO1xuXHRcdHRoaXMuZWxlbWVudC5vbigncmF0ZWNoYW5nZScsIHRoaXMub25SYXRlQ2hhbmdlLmJpbmQodGhpcykpO1xuXHRcdHRoaXMuZWxlbWVudC5vbignZW5kZWQnLCB0aGlzLm9uRW5kZWQuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdjYW5wbGF5dGhyb3VnaCcsIHRoaXMub25DYW5wbGF5VGhyb3VnaC5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ3dhaXRpbmcnLCB0aGlzLm9uV2FpdGluZy5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ2Vycm9yJywgdGhpcy5vbkVycm9yLmJpbmQodGhpcykpO1xuXHR9XG5cblx0b25Mb2FkU3RhcnQoZSkge1xuXHRcdHRoaXMudHJpZ2dlcignbG9hZHN0YXJ0Jyk7XG5cdH1cblxuXHRvblRpbWVVcGRhdGUoZSkge1xuXHRcdHRoaXMudHJpZ2dlcigndGltZXVwZGF0ZScpO1xuXHR9XG5cblx0b25EdXJhdGlvbkNoYW5nZShlKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCdkdXJhdGlvbmNoYW5nZScpO1xuXHR9XG5cblx0b25Qcm9ncmVzcyhlKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCdwcm9ncmVzcycpO1xuXHR9XG5cblx0b25TZWVraW5nKGUpIHtcblx0XHR0aGlzLnRyaWdnZXIoJ3NlZWtpbmcnKTtcblx0fVxuXG5cdG9uU2Vla2VkKGUpIHtcblx0XHR0aGlzLnRyaWdnZXIoJ3NlZWtlZCcpO1xuXHR9XG5cblx0b25Wb2x1bWVDaGFuZ2UoZSkge1xuXHRcdHRoaXMudHJpZ2dlcigndm9sdW1lY2hhbmdlJyk7XG5cdH1cblxuXHRvbkNsaWNrKCkge1xuXHRcdHRoaXMudHJpZ2dlcignY2xpY2snKTtcblx0fVxuXG5cdG9uRGJsY2xpY2soKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCdkYmxjbGljaycpO1xuXHR9XG5cblx0b25QbGF5KCkge1xuXHRcdHRoaXMudHJpZ2dlcigncGxheScpO1xuXHR9XG5cblx0b25QYXVzZSgpIHtcblx0XHR0aGlzLnRyaWdnZXIoJ3BhdXNlJyk7XG5cdH1cblxuXHRvblBsYXlpbmcoKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCdwbGF5aW5nJyk7XG5cdH1cblxuXHRvblJhdGVDaGFuZ2UoKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCdyYXRlY2hhbmdlJyk7XG5cdH1cblxuXHRvbkVuZGVkKCkge1xuXHRcdHRoaXMudHJpZ2dlcignZW5kZWQnKTtcblx0fVxuXG5cdG9uQ2FucGxheVRocm91Z2goKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCdjYW5wbGF5dGhyb3VnaCcpO1xuXHR9XG5cblx0b25XYWl0aW5nKCkge1xuXHRcdHRoaXMudHJpZ2dlcignd2FpdGluZycpO1xuXHR9XG5cblx0b25FcnJvcihlKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCdlcnJvcicsIHsgY29kZSA6IGUudGFyZ2V0LmVycm9yLmNvZGUgfSk7XG5cdH1cblxuXHQvKiBUT0RPICovXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0dGhpcy5lbGVtZW50ID0gdGhpcy5vcHRpb25zLmN0eDtcblx0XHRbXG5cblx0XHRcdC8vIFJlbW92ZSBjb250cm9scyBiZWNhdXNlIHdlIGRvbnQgbm90IHN1cHBvcnQgbmF0aXZlIGNvbnRyb2xzIHlldFxuXHRcdFx0J2NvbnRyb2xzJyxcblx0XHRcdCdwb3N0ZXInLFxuXG5cdFx0XHQvLyBJdCBpcyB1bm5lY2Vzc2FyeSBhdHRycywgdGhpcyBmdW5jdGlvbmFsaXR5IHNvbHZlIENTU1xuXHRcdFx0J2hlaWdodCcsXG5cdFx0XHQnd2lkdGgnXG5cblx0XHRdLmZvckVhY2goaXRlbSA9PiB7XG5cdFx0XHR0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cihpdGVtKTtcblx0XHR9KTtcblxuXHRcdC8vIFNldCBhdHRycyBmcm9tIG9wdGlvbnNcblx0XHRbXG5cdFx0XHQncHJlbG9hZCcsXG5cdFx0XHQnYXV0b3BsYXknLFxuXHRcdFx0J2xvb3AnLFxuXHRcdFx0J211dGVkJ1xuXHRcdF0uZm9yRWFjaChpdGVtID0+IHtcblx0XHRcdGlmKHRoaXMucGxheWVyLm9wdGlvbnNbaXRlbV0pIHtcblx0XHRcdFx0dGhpcy5lbGVtZW50LmF0dHIoaXRlbSwgdGhpcy5wbGF5ZXIub3B0aW9uc1tpdGVtXSk7XG5cdFx0XHRcdHRoaXMuZWxlbWVudC5wcm9wKGl0ZW0sIHRoaXMucGxheWVyLm9wdGlvbnNbaXRlbV0pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cblx0XHR0aGlzLmVsZW1lbnQuZmluZCgnc291cmNlW2RhdGEtcXVhbGl0eV0nKS5lYWNoKChpLCBpdGVtKSA9PiB7XG5cdFx0XHQkKGl0ZW0pLnJlbW92ZSgpO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudDtcblx0fVxuXG5cdGdldCBjdXJyZW50VGltZSAoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWVkaWEuY3VycmVudFRpbWU7XG5cdH1cblxuXHRzZXQgY3VycmVudFRpbWUgKHZhbHVlKSB7XG5cdFx0bGV0IHRpbWU7XG5cdFx0aWYgKHZhbHVlID4gdGhpcy5kdXJhdGlvbikge1xuXHRcdFx0dGltZSA9IHRoaXMuZHVyYXRpb25cblx0XHR9IGVsc2UgaWYgKHZhbHVlIDwgMCkge1xuXHRcdFx0dGltZSA9IDBcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGltZSA9IHZhbHVlO1xuXHRcdH1cblxuXHRcdHRoaXMucGxheWVyLnRyaWdnZXIoJ3RpbWV1cGRhdGVsb2FkJywgeyBjdXJyZW50VGltZSA6IHRpbWUgfSk7XG5cblx0XHR0aGlzLm1lZGlhLmN1cnJlbnRUaW1lID0gdGltZTtcblx0fVxuXG5cdGdldCBkdXJhdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWVkaWEuZHVyYXRpb247XG5cdH1cblxuXHRnZXQgaGVpZ2h0ICgpIHtcblx0XHRyZXR1cm4gdGhpcy5tZWRpYS5jbGllbnRIZWlnaHQ7XG5cdH1cblxuXHRnZXQgd2lkdGggKCkge1xuXHRcdHJldHVybiB0aGlzLm1lZGlhLmNsaWVudFdpZHRoO1xuXHR9XG5cblx0Z2V0IHJhdGUgKCkge1xuXHRcdHJldHVybiB0aGlzLm1lZGlhLnBsYXliYWNrUmF0ZTtcblx0fVxuXG5cdHNldCBtdXRlZCh2YWx1ZSkge1xuXHRcdHRoaXMubWVkaWEubXV0ZWQgPSB2YWx1ZTtcblx0fVxuXG5cdGdldCBtdXRlZCgpIHtcblx0XHRyZXR1cm4gdGhpcy5tZWRpYS5tdXRlZFxuXHR9XG5cblx0Z2V0IHJhdGVNYXgoKSB7XG5cdFx0bGV0IG1heCA9IHRoaXMucGxheWVyLm9wdGlvbnMucmF0ZS5tYXg7XG5cdFx0aWYoSVNfSU9TIHx8IElTX0FORFJPSUQpIHtcblx0XHRcdG1heCA9IEh0bWw1Lk1PQklMRV9NQVhfUkFURTtcblx0XHR9XG5cdFx0aWYoSVNfU0FGQVJJKSB7XG5cdFx0XHRtYXggPSBIdG1sNS5TQUZBUklfTUFYX1JBVEU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1heDtcblx0fVxuXG5cdGdldCByYXRlTWluKCkge1xuXHRcdGxldCBtaW4gPSB0aGlzLnBsYXllci5vcHRpb25zLnJhdGUubWluO1xuXG5cdFx0aWYgKElTX0lPUyB8fCBJU19BTkRST0lEKSB7XG5cdFx0XHRtaW4gPSBIdG1sNS5NT0JJTEVfTUlOX1JBVEU7XG5cdFx0fVxuXG5cdFx0aWYgKElTX1NBRkFSSSkge1xuXHRcdFx0bWluID0gSHRtbDUuU0FGQVJJX01JTl9SQVRFO1xuXHRcdH1cblxuXHRcdHJldHVybiBtaW47XG5cdH1cblxuXHRzZXQgcmF0ZSAodmFsdWUpIHtcblx0XHRzdXBlci5yYXRlID0gdmFsdWU7XG5cdFx0dGhpcy5tZWRpYS5wbGF5YmFja1JhdGUgPSB2YWx1ZTtcblx0fVxuXG5cdGdldEF2YWlsYWJsZVF1YWxpdHlMZXZlbHMoKSB7XG5cdFx0cmV0dXJuIHRoaXMucGxheWVyLm9wdGlvbnMuc291cmNlcy5tYXAoaXRlbSA9PiAoe1xuXHRcdFx0bmFtZSA6IGl0ZW0udGl0bGUsXG5cdFx0XHQuLi5pdGVtXG5cdFx0fSkpO1xuXHR9XG5cblx0c2V0IHBsYXliYWNrUXVhbGl0eShuYW1lKSB7XG5cdFx0c3VwZXIucGxheWJhY2tRdWFsaXR5ID0gbmFtZTtcblx0XHRjb25zdCB0aW1lID0gdGhpcy5jdXJyZW50VGltZTtcblx0XHRjb25zdCByYXRlID0gdGhpcy5yYXRlO1xuXHRcdGNvbnN0IHN0b3AgPSB0aGlzLnBhdXNlZDtcblxuXHRcdHRoaXMuX3BsYXliYWNrUXVhbGl0eSA9IHRoaXMuZ2V0QXZhaWxhYmxlUXVhbGl0eUxldmVscygpLmZpbmQoaXRlbSA9PiBpdGVtLm5hbWUgPT09IG5hbWUpO1xuXG5cdFx0dGhpcy5zcmMgPSB0aGlzLl9wbGF5YmFja1F1YWxpdHk7XG5cdFx0dGhpcy5yYXRlID0gcmF0ZTtcblx0XHR0aGlzLmN1cnJlbnRUaW1lID0gdGltZTtcblxuXHRcdGlmIChzdG9wKSB7XG5cdFx0XHR0aGlzLnBhdXNlKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucGxheSgpO1xuXHRcdH1cblxuXHRcdHRoaXMudHJpZ2dlcigncXVhbGl0eWNoYW5nZScsIHRoaXMuX3BsYXliYWNrUXVhbGl0eSk7XG5cblx0fVxuXG5cdGdldCBwbGF5YmFja1F1YWxpdHkoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3BsYXliYWNrUXVhbGl0eTtcblx0fVxuXG5cdHNldCBzcmMgKHNyYykge1xuXHRcdGlmKHNyYyA9PSBudWxsKSByZXR1cm47XG5cdFx0aWYodGhpcy5zcmMgJiYgdGhpcy5zcmMudXJsID09PSBzcmMudXJsKSByZXR1cm47XG5cblx0XHR0aGlzLm1lZGlhLnNyYyA9IHNyYy51cmw7XG5cblx0XHR0aGlzLl9zb3VyY2UgPSBzcmM7XG5cdH1cblxuXHRnZXQgc3JjICgpIHtcblx0XHRyZXR1cm4gdGhpcy5fc291cmNlXG5cdH1cblxuXHRnZXQgdHJhY2sgKCkge1xuXHRcdHJldHVybiB0aGlzLl90cmFjaztcblx0fVxuXG5cdHNldCB0cmFjayAodmFsdWUpIHtcblx0XHRbLi4udGhpcy5tZWRpYS50ZXh0VHJhY2tzXS5mb3JFYWNoKGl0ZW0gPT4ge1xuXHRcdFx0aWYodmFsdWUgIT0gbnVsbCAmJiBpdGVtLmxhbmd1YWdlID09PSB2YWx1ZS5sYW5ndWFnZSkge1xuXHRcdFx0XHRpdGVtLm1vZGUgPSAnc2hvd2luZydcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGl0ZW0ubW9kZSA9ICdoaWRkZW4nO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdHRoaXMuX3RyYWNrID0gdmFsdWU7XG5cdFx0dGhpcy50cmlnZ2VyKCd0cmFja3NjaGFuZ2UnKTtcblx0fVxuXG5cdGdldCBwYXVzZWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWVkaWEucGF1c2VkO1xuXHR9XG5cblx0Z2V0IHZvbHVtZSAoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWVkaWEudm9sdW1lO1xuXHR9XG5cblx0c2V0IHZvbHVtZSAodmFsdWUpIHtcblx0XHRzdXBlci52b2x1bWUgPSB2YWx1ZTtcblx0XHRjb25zdCBwbGF5ZXIgPSB0aGlzLnBsYXllcjtcblx0XHRpZiAodmFsdWUgPiAxKSB7XG5cdFx0XHR0aGlzLm1lZGlhLnZvbHVtZSA9IDE7XG5cdFx0fSBlbHNlIGlmICh2YWx1ZSA8IHBsYXllci5vcHRpb25zLnZvbHVtZS5tdXRlbGltaXQpIHtcblx0XHRcdHRoaXMubWVkaWEudm9sdW1lID0gMDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5tZWRpYS52b2x1bWUgPSB2YWx1ZTtcblx0XHR9XG5cdFx0dGhpcy5tZWRpYS5tdXRlID0gKHZhbHVlIDwgcGxheWVyLm9wdGlvbnMudm9sdW1lLm11dGVsaW1pdCk7XG5cdH1cblxuXG5cdGdldCBidWZmZXJlZCAoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWVkaWEuYnVmZmVyZWQ7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybiB7VGltZVJhbmdlc31cblx0ICovXG5cdGdldCBzZWVrYWJsZSAoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWVkaWEuc2Vla2FibGU7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybiB7VGltZVJhbmdlc31cblx0ICovXG5cdGdldCBwbGF5ZWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWVkaWEucGxheWVkO1xuXHR9XG5cblx0Z2V0IGVuZGVkKCkge1xuXHRcdHJldHVybiB0aGlzLm1lZGlhLmVuZGVkO1xuXHR9XG5cblx0Z2V0IHBsYXllZFBlcmNlbnRhZ2UoKSB7XG5cdFx0bGV0IHJlc3VsdCA9IDA7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBsYXllZC5sZW5ndGg7IGkrKykge1xuXHRcdFx0cmVzdWx0ICs9ICh0aGlzLnBsYXllZC5lbmQoaSkgLSB0aGlzLnBsYXllZC5zdGFydChpKSlcblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0IC8gdGhpcy5kdXJhdGlvbiAqIDEwMFxuXHR9XG5cblx0Z2V0IGN1cnJlbnRTcmMoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWVkaWEuY3VycmVudFNyYztcblx0fVxuXG5cdGluaXQgKCkge1xuXHRcdHN1cGVyLmluaXQoKTtcblx0XHR0aGlzLmxvYWQoKTtcblx0XHRsZXQgZGZkID0gJC5EZWZlcnJlZCgpO1xuXHRcdHRoaXMuX2luaXRTdWJ0aXRsZXMoKTtcblx0XHR0aGlzLl9pbml0VmlkZW8oKVxuXHRcdFx0LmRvbmUoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLl9pbml0UmF0ZSgpO1xuXHRcdFx0XHR0aGlzLl9pbml0Vm9sdW1lKCk7XG5cdFx0XHRcdGRmZC5yZXNvbHZlKCk7XG5cdFx0XHR9KTtcblx0XHRyZXR1cm4gZGZkLnByb21pc2UoKTtcblx0fVxuXG5cdHN1cHBvcnRzRnVsbFNjcmVlbigpIHtcblx0XHRpZiAodHlwZW9mIHRoaXMubWVkaWEud2Via2l0RW50ZXJGdWxsU2NyZWVuID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRjb25zdCB1c2VyQWdlbnQgPSB3aW5kb3cubmF2aWdhdG9yICYmIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50IHx8ICcnO1xuXG5cdFx0XHQvLyBTZWVtcyB0byBiZSBicm9rZW4gaW4gQ2hyb21pdW0vQ2hyb21lICYmIFNhZmFyaSBpbiBMZW9wYXJkXG5cdFx0XHRpZiAoKC9BbmRyb2lkLykudGVzdCh1c2VyQWdlbnQpIHx8ICEoL0Nocm9tZXxNYWMgT1MgWCAxMC41LykudGVzdCh1c2VyQWdlbnQpKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRlbnRlckZ1bGxzY3JlZW4oKSB7XG5cdFx0Y29uc3QgdmlkZW8gPSB0aGlzLm1lZGlhO1xuXHRcdGlmICh2aWRlby5wYXVzZWQgJiYgdmlkZW8ubmV0d29ya1N0YXRlIDw9IHZpZGVvLkhBVkVfTUVUQURBVEEpIHtcblx0XHRcdC8vIGF0dGVtcHQgdG8gcHJpbWUgdGhlIHZpZGVvIGVsZW1lbnQgZm9yIHByb2dyYW1tYXRpYyBhY2Nlc3Ncblx0XHRcdC8vIHRoaXMgaXNuJ3QgbmVjZXNzYXJ5IG9uIHRoZSBkZXNrdG9wIGJ1dCBzaG91bGRuJ3QgaHVydFxuXHRcdFx0dGhpcy5wbGF5KCk7XG5cblx0XHRcdC8vIHBsYXlpbmcgYW5kIHBhdXNpbmcgc3luY2hyb25vdXNseSBkdXJpbmcgdGhlIHRyYW5zaXRpb24gdG8gZnVsbHNjcmVlblxuXHRcdFx0Ly8gY2FuIGdldCBpT1MgfjYuMSBkZXZpY2VzIGludG8gYSBwbGF5L3BhdXNlIGxvb3Bcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLnBhdXNlKCk7XG5cdFx0XHRcdHZpZGVvLndlYmtpdEVudGVyRnVsbFNjcmVlbigpO1xuXHRcdFx0fSwgMCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZpZGVvLndlYmtpdEVudGVyRnVsbFNjcmVlbigpO1xuXHRcdH1cblx0fVxuXG5cdGV4aXRGdWxsc2NyZWVuKCkge1xuXHRcdHRoaXMubWVkaWEud2Via2l0RXhpdEZ1bGxTY3JlZW4oKTtcblx0fVxuXG5cdHRvZ2dsZVBsYXkgKCkge1xuXHRcdGlmICghdGhpcy5tZWRpYS5wbGF5ZWQgfHwgdGhpcy5tZWRpYS5wYXVzZWQpIHtcblx0XHRcdHRoaXMucGxheSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnBhdXNlKCk7XG5cdFx0fVxuXHR9XG5cblx0cGxheSAoKSB7XG5cdFx0bGV0IGRmZCA9ICQuRGVmZXJyZWQoKTtcblx0XHRjb25zdCBwbGF5UHJvbWlzZSA9IHRoaXMubWVkaWEucGxheSgpO1xuXG5cdFx0aWYocGxheVByb21pc2UgIT0gbnVsbCkge1xuXHRcdFx0cGxheVByb21pc2UudGhlbihmdW5jdGlvbigpIHtcblx0XHRcdFx0ZGZkLnJlc29sdmUoKTtcblx0XHRcdH0pXG5cdFx0fSBlbHNlIHtcblx0XHRcdGRmZC5yZXNvbHZlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBkZmQucHJvbWlzZSgpO1xuXHR9XG5cblx0cGF1c2UgKCkge1xuXHRcdGxldCBkZmQgPSAkLkRlZmVycmVkKCk7XG5cdFx0Y29uc3QgcGF1c2VQcm9taXNlID0gdGhpcy5tZWRpYS5wYXVzZSgpO1xuXG5cdFx0aWYocGF1c2VQcm9taXNlICE9IG51bGwpIHtcblx0XHRcdHBhdXNlUHJvbWlzZS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRkZmQucmVzb2x2ZSgpO1xuXHRcdFx0fSlcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZGZkLnJlc29sdmUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIGRmZC5wcm9taXNlKCk7XG5cdH1cblxuXHRsb2FkKCkge1xuXHRcdHJldHVybiB0aGlzLm1lZGlhLmxvYWQoKVxuXHR9XG5cblx0X2luaXRTdWJ0aXRsZXMgKCkge1xuXHRcdGxldCBfc2VsZiA9IHRoaXM7XG5cdFx0dGhpcy5lbGVtZW50LmNoaWxkcmVuKCd0cmFja1traW5kPVwic3VidGl0bGVzXCJdJykuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0XHRjb25zdCBsYW5ndWFnZSA9ICQodGhpcykuYXR0cignc3JjbGFuZycpO1xuXHRcdFx0Y29uc3QgdGl0bGUgPSAkKHRoaXMpLmF0dHIoJ2xhYmVsJyk7XG5cdFx0XHRjb25zdCBzcmMgPSAkKHRoaXMpLmF0dHIoJ3NyYycpO1xuXHRcdFx0aWYgKHRpdGxlLmxlbmd0aCA+IDAgJiYgc3JjLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0X3NlbGYuc3VidGl0bGVzLnB1c2goe1xuXHRcdFx0XHRcdHRpdGxlIDogdGl0bGUsXG5cdFx0XHRcdFx0bmFtZSA6IGxhbmd1YWdlLFxuXHRcdFx0XHRcdGxhbmd1YWdlIDogbGFuZ3VhZ2Vcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRfaW5pdFZpZGVvICgpIHtcblx0XHRsZXQgZGZkID0gJC5EZWZlcnJlZCgpO1xuXHRcdGlmICh0aGlzLm1lZGlhLnJlYWR5U3RhdGUgPiBIVE1MTWVkaWFFbGVtZW50LkhBVkVfTk9USElORykge1xuXHRcdFx0ZGZkLnJlc29sdmUoKTtcblx0XHRcdHRoaXMuX3RleHRUcmFja3NIYWNrKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCQodGhpcy5tZWRpYSkub25lKCdsb2FkZWRtZXRhZGF0YScsIChlKSA9PiB7XG5cdFx0XHRcdGRmZC5yZXNvbHZlKClcblx0XHRcdFx0dGhpcy5fdGV4dFRyYWNrc0hhY2soKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRyZXR1cm4gZGZkLnByb21pc2UoKTtcblx0fVxuXG5cdF90ZXh0VHJhY2tzSGFjayAoKSB7XG5cblx0XHQvLyBUaGlzIGlzIGdlbmVyYWxseSBmb3IgRmlyZWZveCBvbmx5XG5cdFx0Ly8gYmVjYXVzZSBpdCBzb21laG93IHJlc2V0cyB0cmFjayBsaXN0XG5cdFx0Ly8gZm9yIHZpZGVvIGVsZW1lbnQgYWZ0ZXIgRE9NIG1hbmlwdWxhdGlvbi5cblxuXHRcdGlmICh0aGlzLm1lZGlhLnRleHRUcmFja3MubGVuZ3RoID09PSAwICYmIHRoaXMuc3VidGl0bGVzLmxlbmd0aCA+IDApIHtcblx0XHRcdHRoaXMuZWxlbWVudC5jaGlsZHJlbigndHJhY2tba2luZD1cInN1YnRpdGxlc1wiXScpLnJlbW92ZSgpO1xuXHRcdFx0Zm9yICh2YXIgaSBpbiB0aGlzLnN1YnRpdGxlcykge1xuXHRcdFx0XHRpZiAodGhpcy5zdWJ0aXRsZXMuaGFzT3duUHJvcGVydHkoaSkpIHtcblx0XHRcdFx0XHR0aGlzLmVsZW1lbnRcblx0XHRcdFx0XHRcdC5hcHBlbmQoJCgnPHRyYWNrLz4nKVxuXHRcdFx0XHRcdFx0XHQuYXR0cignbGFiZWwnLCB0aGlzLnN1YnRpdGxlc1sgaSBdLnRpdGxlKVxuXHRcdFx0XHRcdFx0XHQuYXR0cignc3JjJywgdGhpcy5zdWJ0aXRsZXNbIGkgXS5zcmMpXG5cdFx0XHRcdFx0XHRcdC5hdHRyKCdzcmNsYW5nJywgdGhpcy5zdWJ0aXRsZXNbIGkgXS5sYW5ndWFnZSlcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ2lkJywgdGhpcy5zdWJ0aXRsZXNbIGkgXS5sYW5ndWFnZSlcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ2tpbmQnLCAnc3VidGl0bGVzJykpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cbn1cbi8qKlxuICogTWluIHJhdGUgZm9yIGFuZHJvaWQgYW5kIGlvc1xuICovXG5IdG1sNS5NT0JJTEVfTUlOX1JBVEUgPSAwLjU7XG5cbi8qKlxuICogTWF4IHJhdGUgZm9yIGFuZHJvaWQgYW5kIGlvc1xuICovXG5IdG1sNS5NT0JJTEVfTUFYX1JBVEUgPSAyO1xuXG5IdG1sNS5TQUZBUklfTUlOX1JBVEUgPSAwLjU7XG5cbkh0bWw1LlNBRkFSSV9NQVhfUkFURSA9IDI7XG5cbkh0bWw1LlRFU1RfVklERU8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpO1xuXG4vKipcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKiAgICAgICAgIC0gVHJ1ZSBpZiB2b2x1bWUgY2FuIGJlIGNvbnRyb2xsZWRcbiAqICAgICAgICAgLSBGYWxzZSBvdGhlcndpc2VcbiAqL1xuSHRtbDUuY2FuQ29udHJvbFZvbHVtZSA9IGZ1bmN0aW9uKCkge1xuXHQvLyBJRSB3aWxsIGVycm9yIGlmIFdpbmRvd3MgTWVkaWEgUGxheWVyIG5vdCBpbnN0YWxsZWQgIzMzMTVcblx0dHJ5IHtcblx0XHRjb25zdCB2b2x1bWUgPSBIdG1sNS5URVNUX1ZJREVPLnZvbHVtZTtcblxuXHRcdEh0bWw1LlRFU1RfVklERU8udm9sdW1lID0gKHZvbHVtZSAvIDIpICsgMC4xO1xuXHRcdHJldHVybiB2b2x1bWUgIT09IEh0bWw1LlRFU1RfVklERU8udm9sdW1lO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xuXG5IdG1sNS5wcm90b3R5cGUuZmVhdHVyZUNvbnRyb2xWb2x1bWUgPSBIdG1sNS5jYW5Db250cm9sVm9sdW1lKCk7XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnSHRtbDUnLCBIdG1sNSk7XG5leHBvcnQgZGVmYXVsdCBIdG1sNTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9lbnRpdHkvSHRtbDUuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudHMvQ29tcG9uZW50JztcbmltcG9ydCBDb29raWUgZnJvbSAnLi4vdXRpbHMvY29va2llJztcbmltcG9ydCBNZWRpYUVycm9yIGZyb20gJy4uL01lZGlhRXJyb3InO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuY2xhc3MgRW50aXR5IGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblx0XHR0aGlzLl90cmlnZ2VyU3RhY2sgPSBbXTtcblx0XHR0aGlzLl9zdG9wTGlzdGVuID0gZmFsc2U7XG5cblx0XHRpZiAodGhpcy5wbGF5ZXIub3B0aW9ucy5zcmMgPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5wbGF5ZXIuZXJyb3IgPSBuZXcgTWVkaWFFcnJvcign0JLQuNC00LXQvtGE0LDQudC7INC90LUg0L3QsNC50LTQtdC9LicpO1xuXHRcdH1cblxuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0dHJpZ2dlciguLi5hcmdzKSB7XG5cdFx0aWYoIXRoaXMuX3N0b3BMaXN0ZW4pIHtcblx0XHRcdHRoaXMuX3RyaWdnZXJTdGFjay5wdXNoKGFyZ3MpO1xuXHRcdH1cblx0XHRzdXBlci50cmlnZ2VyKC4uLmFyZ3MpO1xuXHR9XG5cblx0aW5pdCgpIHtcblx0XHR0aGlzLl9zdG9wTGlzdGVuID0gdHJ1ZTtcblx0XHR0aGlzLl90cmlnZ2VyU3RhY2suZm9yRWFjaChhcmdzID0+IHtcblx0XHRcdHRoaXMudHJpZ2dlciguLi5hcmdzKTtcblx0XHR9KTtcblx0fVxuXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudCA9ICQoJzxkaXYgLz4nKTtcblx0fVxuXG5cdHNldCBwb3N0ZXIodXJsKSB7XG5cdFx0dGhpcy5fcG9zdGVyID0gdXJsO1xuXHRcdHRoaXMudHJpZ2dlcigncG9zdGVyY2hhbmdlJywgeyB1cmwgfSk7XG5cdH1cblxuXG5cdGdldCBwb3N0ZXIoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3Bvc3Rlcjtcblx0fVxuXG5cdGdldCBjdXJyZW50VGltZSgpIHtcblx0XHRyZXR1cm5cblx0fVxuXG5cdHNldCBjdXJyZW50VGltZSh2YWx1ZSkge1xuXG5cdH1cblxuXHRnZXQgZHVyYXRpb24oKSB7XG5cdFx0cmV0dXJuXG5cdH1cblxuXHRzZXQgbXV0ZWQodmFsdWUpIHtcblxuXHR9XG5cblx0Z2V0IG11dGVkKCkge1xuXG5cdH1cblxuXHRnZXQgaGVpZ2h0KCkge1xuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQuaW5uZXJIZWlnaHQoKVxuXHR9XG5cblx0Z2V0IHdpZHRoKCkge1xuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQud2lkdGgoKVxuXHR9XG5cblx0c2V0IHJhdGVNYXgodmFsdWUpIHtcblx0XHR0aGlzLl9yYXRlTWF4ID0gdmFsdWU7XG5cdH1cblxuXHRzZXQgcmF0ZU1pbih2YWx1ZSkge1xuXHRcdHRoaXMuX3JhdGVNaW4gPSB2YWx1ZTtcblx0fVxuXG5cdGdldCByYXRlTWF4KCkge1xuXHRcdHJldHVybiB0aGlzLl9yYXRlTWF4IHx8IHRoaXMucGxheWVyLm9wdGlvbnMucmF0ZS5tYXg7XG5cblx0fVxuXG5cdGdldCByYXRlTWluKCkge1xuXHRcdHJldHVybiB0aGlzLl9yYXRlTWluIHx8IHRoaXMucGxheWVyLm9wdGlvbnMucmF0ZS5taW47XG5cdH1cblxuXHRnZXQgcmF0ZSgpIHtcblx0fVxuXG5cdHNldCByYXRlKHZhbHVlKSB7XG5cdFx0aWYodmFsdWUgPiB0aGlzLnJhdGVNYXggfHwgdmFsdWUgPCB0aGlzLnJhdGVNaW4pIHJldHVybjtcblx0XHRDb29raWUuc2V0KCdyYXRlJywgdmFsdWUpO1xuXHR9XG5cblx0aW5jcmVhc2VSYXRlKCkge1xuXHRcdHRoaXMucmF0ZSArPSB0aGlzLnBsYXllci5vcHRpb25zLnJhdGUuc3RlcDtcblx0fVxuXG5cdGRlY3JlYXNlUmF0ZSgpIHtcblx0XHR0aGlzLnJhdGUgLT0gdGhpcy5wbGF5ZXIub3B0aW9ucy5yYXRlLnN0ZXA7XG5cdH1cblxuXHRzZXQgcGxheWJhY2tRdWFsaXR5KG5hbWUpIHtcblx0XHRjb25zdCBsZXZlbHMgPSB0aGlzLmdldEF2YWlsYWJsZVF1YWxpdHlMZXZlbHMoKTtcblx0XHRpZighbGV2ZWxzLnNvbWUob2JqID0+IG5hbWUgaW4gb2JqKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0fVxuXG5cdGdldCBwbGF5YmFja1F1YWxpdHkoKSB7XG5cblx0fVxuXG5cdGdldCBwYXVzZWQoKSB7XG5cblx0fVxuXG5cdGdldCBwbGF5ZWQoKSB7XG5cblx0fVxuXG5cdGdldCBkZWZhdWx0UmF0ZSgpIHtcblx0XHRyZXR1cm4gQ29va2llLmdldCgncmF0ZScpIHx8IHRoaXMucGxheWVyLm9wdGlvbnMucmF0ZS5kZWZhdWx0XG5cdH1cblxuXHRnZXQgZGVmYXVsdFZvbHVtZSAoKSB7XG5cdFx0cmV0dXJuIENvb2tpZS5nZXQoJ3ZvbHVtZScpIHx8IHRoaXMucGxheWVyLm9wdGlvbnMudm9sdW1lLmRlZmF1bHQ7XG5cdH1cblxuXHRzZXQgdm9sdW1lKHZhbHVlKSB7XG5cdFx0Y29uc3QgcGxheWVyID0gdGhpcy5wbGF5ZXI7XG5cdFx0aWYodmFsdWUgPCAxICYmIHZhbHVlID4gcGxheWVyLm9wdGlvbnMudm9sdW1lLm11dGVsaW1pdCkge1xuXHRcdFx0Q29va2llLnNldCgndm9sdW1lJywgdmFsdWUpO1xuXHRcdH1cblx0fVxuXG5cdHNldCBzcmMgKHZhbHVlKSB7XG5cblx0fVxuXG5cdGdldCBzcmMoKSB7XG5cblx0fVxuXG5cdHN1cHBvcnRzRnVsbFNjcmVlbigpIHtcblxuXHR9XG5cblx0cGxheSgpIHtcblxuXHR9XG5cblx0cGF1c2UgKCkge1xuXG5cdH1cblxuXHRsb2FkKCkge1xuXHR9XG5cblx0dG9nZ2xlUGxheSAoKSB7XG5cdFx0aWYgKHRoaXMucGF1c2VkKSB7XG5cdFx0XHR0aGlzLnBsYXkoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5wYXVzZSgpO1xuXHRcdH1cblx0fVxuXG5cdF9pbml0UmF0ZSAoKSB7XG5cdFx0dGhpcy5yYXRlID0gdGhpcy5kZWZhdWx0UmF0ZTtcblx0fVxuXG5cdF9pbml0Vm9sdW1lICgpIHtcblx0XHR0aGlzLnZvbHVtZSA9IHRoaXMuZGVmYXVsdFZvbHVtZTtcblx0fVxuXG59XG5FbnRpdHkucHJvdG90eXBlLmZlYXR1cmVDb250cm9sVm9sdW1lID0gdHJ1ZTtcblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdFbnRpdHknLCBFbnRpdHkpO1xuXG5leHBvcnQgZGVmYXVsdCBFbnRpdHk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvZW50aXR5L0VudGl0eS5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGRlZmluZSA9IHJlcXVpcmUoJ2RlZmluZS1wcm9wZXJ0aWVzJyk7XG52YXIgRVMgPSByZXF1aXJlKCdlcy1hYnN0cmFjdC9lczYnKTtcblxudmFyIGltcGxlbWVudGF0aW9uID0gcmVxdWlyZSgnLi9pbXBsZW1lbnRhdGlvbicpO1xudmFyIGdldFBvbHlmaWxsID0gcmVxdWlyZSgnLi9wb2x5ZmlsbCcpO1xudmFyIHNoaW0gPSByZXF1aXJlKCcuL3NoaW0nKTtcblxudmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xuXG52YXIgcG9seWZpbGwgPSBnZXRQb2x5ZmlsbCgpO1xuXG52YXIgYm91bmRGaW5kU2hpbSA9IGZ1bmN0aW9uIGZpbmQoYXJyYXksIHByZWRpY2F0ZSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG5cdEVTLlJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJyYXkpO1xuXHR2YXIgYXJncyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcblx0cmV0dXJuIHBvbHlmaWxsLmFwcGx5KGFycmF5LCBhcmdzKTtcbn07XG5cbmRlZmluZShib3VuZEZpbmRTaGltLCB7XG5cdGdldFBvbHlmaWxsOiBnZXRQb2x5ZmlsbCxcblx0aW1wbGVtZW50YXRpb246IGltcGxlbWVudGF0aW9uLFxuXHRzaGltOiBzaGltXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBib3VuZEZpbmRTaGltO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2FycmF5LnByb3RvdHlwZS5maW5kL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxudmFyIGtleXMgPSByZXF1aXJlKCdvYmplY3Qta2V5cycpO1xudmFyIGZvcmVhY2ggPSByZXF1aXJlKCdmb3JlYWNoJyk7XG52YXIgaGFzU3ltYm9scyA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIFN5bWJvbCgpID09PSAnc3ltYm9sJztcblxudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxudmFyIGlzRnVuY3Rpb24gPSBmdW5jdGlvbiAoZm4pIHtcblx0cmV0dXJuIHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJyAmJiB0b1N0ci5jYWxsKGZuKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbn07XG5cbnZhciBhcmVQcm9wZXJ0eURlc2NyaXB0b3JzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgb2JqID0ge307XG5cdHRyeSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgJ3gnLCB7IGVudW1lcmFibGU6IGZhbHNlLCB2YWx1ZTogb2JqIH0pO1xuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycywgbm8tcmVzdHJpY3RlZC1zeW50YXggKi9cbiAgICAgICAgZm9yICh2YXIgXyBpbiBvYmopIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMsIG5vLXJlc3RyaWN0ZWQtc3ludGF4ICovXG5cdFx0cmV0dXJuIG9iai54ID09PSBvYmo7XG5cdH0gY2F0Y2ggKGUpIHsgLyogdGhpcyBpcyBJRSA4LiAqL1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufTtcbnZhciBzdXBwb3J0c0Rlc2NyaXB0b3JzID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIGFyZVByb3BlcnR5RGVzY3JpcHRvcnNTdXBwb3J0ZWQoKTtcblxudmFyIGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZSwgdmFsdWUsIHByZWRpY2F0ZSkge1xuXHRpZiAobmFtZSBpbiBvYmplY3QgJiYgKCFpc0Z1bmN0aW9uKHByZWRpY2F0ZSkgfHwgIXByZWRpY2F0ZSgpKSkge1xuXHRcdHJldHVybjtcblx0fVxuXHRpZiAoc3VwcG9ydHNEZXNjcmlwdG9ycykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmplY3QsIG5hbWUsIHtcblx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0XHRcdGVudW1lcmFibGU6IGZhbHNlLFxuXHRcdFx0dmFsdWU6IHZhbHVlLFxuXHRcdFx0d3JpdGFibGU6IHRydWVcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHRvYmplY3RbbmFtZV0gPSB2YWx1ZTtcblx0fVxufTtcblxudmFyIGRlZmluZVByb3BlcnRpZXMgPSBmdW5jdGlvbiAob2JqZWN0LCBtYXApIHtcblx0dmFyIHByZWRpY2F0ZXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IHt9O1xuXHR2YXIgcHJvcHMgPSBrZXlzKG1hcCk7XG5cdGlmIChoYXNTeW1ib2xzKSB7XG5cdFx0cHJvcHMgPSBwcm9wcy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhtYXApKTtcblx0fVxuXHRmb3JlYWNoKHByb3BzLCBmdW5jdGlvbiAobmFtZSkge1xuXHRcdGRlZmluZVByb3BlcnR5KG9iamVjdCwgbmFtZSwgbWFwW25hbWVdLCBwcmVkaWNhdGVzW25hbWVdKTtcblx0fSk7XG59O1xuXG5kZWZpbmVQcm9wZXJ0aWVzLnN1cHBvcnRzRGVzY3JpcHRvcnMgPSAhIXN1cHBvcnRzRGVzY3JpcHRvcnM7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVmaW5lUHJvcGVydGllcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kZWZpbmUtcHJvcGVydGllcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbi8vIG1vZGlmaWVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2VzLXNoaW1zL2VzNS1zaGltXG52YXIgaGFzID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG52YXIgaXNBcmdzID0gcmVxdWlyZSgnLi9pc0FyZ3VtZW50cycpO1xudmFyIGlzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG52YXIgaGFzRG9udEVudW1CdWcgPSAhaXNFbnVtZXJhYmxlLmNhbGwoeyB0b1N0cmluZzogbnVsbCB9LCAndG9TdHJpbmcnKTtcbnZhciBoYXNQcm90b0VudW1CdWcgPSBpc0VudW1lcmFibGUuY2FsbChmdW5jdGlvbiAoKSB7fSwgJ3Byb3RvdHlwZScpO1xudmFyIGRvbnRFbnVtcyA9IFtcblx0J3RvU3RyaW5nJyxcblx0J3RvTG9jYWxlU3RyaW5nJyxcblx0J3ZhbHVlT2YnLFxuXHQnaGFzT3duUHJvcGVydHknLFxuXHQnaXNQcm90b3R5cGVPZicsXG5cdCdwcm9wZXJ0eUlzRW51bWVyYWJsZScsXG5cdCdjb25zdHJ1Y3Rvcidcbl07XG52YXIgZXF1YWxzQ29uc3RydWN0b3JQcm90b3R5cGUgPSBmdW5jdGlvbiAobykge1xuXHR2YXIgY3RvciA9IG8uY29uc3RydWN0b3I7XG5cdHJldHVybiBjdG9yICYmIGN0b3IucHJvdG90eXBlID09PSBvO1xufTtcbnZhciBleGNsdWRlZEtleXMgPSB7XG5cdCRjb25zb2xlOiB0cnVlLFxuXHQkZXh0ZXJuYWw6IHRydWUsXG5cdCRmcmFtZTogdHJ1ZSxcblx0JGZyYW1lRWxlbWVudDogdHJ1ZSxcblx0JGZyYW1lczogdHJ1ZSxcblx0JGlubmVySGVpZ2h0OiB0cnVlLFxuXHQkaW5uZXJXaWR0aDogdHJ1ZSxcblx0JG91dGVySGVpZ2h0OiB0cnVlLFxuXHQkb3V0ZXJXaWR0aDogdHJ1ZSxcblx0JHBhZ2VYT2Zmc2V0OiB0cnVlLFxuXHQkcGFnZVlPZmZzZXQ6IHRydWUsXG5cdCRwYXJlbnQ6IHRydWUsXG5cdCRzY3JvbGxMZWZ0OiB0cnVlLFxuXHQkc2Nyb2xsVG9wOiB0cnVlLFxuXHQkc2Nyb2xsWDogdHJ1ZSxcblx0JHNjcm9sbFk6IHRydWUsXG5cdCRzZWxmOiB0cnVlLFxuXHQkd2Via2l0SW5kZXhlZERCOiB0cnVlLFxuXHQkd2Via2l0U3RvcmFnZUluZm86IHRydWUsXG5cdCR3aW5kb3c6IHRydWVcbn07XG52YXIgaGFzQXV0b21hdGlvbkVxdWFsaXR5QnVnID0gKGZ1bmN0aW9uICgpIHtcblx0LyogZ2xvYmFsIHdpbmRvdyAqL1xuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdGZvciAodmFyIGsgaW4gd2luZG93KSB7XG5cdFx0dHJ5IHtcblx0XHRcdGlmICghZXhjbHVkZWRLZXlzWyckJyArIGtdICYmIGhhcy5jYWxsKHdpbmRvdywgaykgJiYgd2luZG93W2tdICE9PSBudWxsICYmIHR5cGVvZiB3aW5kb3dba10gPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0ZXF1YWxzQ29uc3RydWN0b3JQcm90b3R5cGUod2luZG93W2tdKTtcblx0XHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBmYWxzZTtcbn0oKSk7XG52YXIgZXF1YWxzQ29uc3RydWN0b3JQcm90b3R5cGVJZk5vdEJ1Z2d5ID0gZnVuY3Rpb24gKG8pIHtcblx0LyogZ2xvYmFsIHdpbmRvdyAqL1xuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIWhhc0F1dG9tYXRpb25FcXVhbGl0eUJ1Zykge1xuXHRcdHJldHVybiBlcXVhbHNDb25zdHJ1Y3RvclByb3RvdHlwZShvKTtcblx0fVxuXHR0cnkge1xuXHRcdHJldHVybiBlcXVhbHNDb25zdHJ1Y3RvclByb3RvdHlwZShvKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufTtcblxudmFyIGtleXNTaGltID0gZnVuY3Rpb24ga2V5cyhvYmplY3QpIHtcblx0dmFyIGlzT2JqZWN0ID0gb2JqZWN0ICE9PSBudWxsICYmIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnO1xuXHR2YXIgaXNGdW5jdGlvbiA9IHRvU3RyLmNhbGwob2JqZWN0KSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcblx0dmFyIGlzQXJndW1lbnRzID0gaXNBcmdzKG9iamVjdCk7XG5cdHZhciBpc1N0cmluZyA9IGlzT2JqZWN0ICYmIHRvU3RyLmNhbGwob2JqZWN0KSA9PT0gJ1tvYmplY3QgU3RyaW5nXSc7XG5cdHZhciB0aGVLZXlzID0gW107XG5cblx0aWYgKCFpc09iamVjdCAmJiAhaXNGdW5jdGlvbiAmJiAhaXNBcmd1bWVudHMpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3Qua2V5cyBjYWxsZWQgb24gYSBub24tb2JqZWN0Jyk7XG5cdH1cblxuXHR2YXIgc2tpcFByb3RvID0gaGFzUHJvdG9FbnVtQnVnICYmIGlzRnVuY3Rpb247XG5cdGlmIChpc1N0cmluZyAmJiBvYmplY3QubGVuZ3RoID4gMCAmJiAhaGFzLmNhbGwob2JqZWN0LCAwKSkge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgb2JqZWN0Lmxlbmd0aDsgKytpKSB7XG5cdFx0XHR0aGVLZXlzLnB1c2goU3RyaW5nKGkpKTtcblx0XHR9XG5cdH1cblxuXHRpZiAoaXNBcmd1bWVudHMgJiYgb2JqZWN0Lmxlbmd0aCA+IDApIHtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IG9iamVjdC5sZW5ndGg7ICsraikge1xuXHRcdFx0dGhlS2V5cy5wdXNoKFN0cmluZyhqKSk7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdGZvciAodmFyIG5hbWUgaW4gb2JqZWN0KSB7XG5cdFx0XHRpZiAoIShza2lwUHJvdG8gJiYgbmFtZSA9PT0gJ3Byb3RvdHlwZScpICYmIGhhcy5jYWxsKG9iamVjdCwgbmFtZSkpIHtcblx0XHRcdFx0dGhlS2V5cy5wdXNoKFN0cmluZyhuYW1lKSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0aWYgKGhhc0RvbnRFbnVtQnVnKSB7XG5cdFx0dmFyIHNraXBDb25zdHJ1Y3RvciA9IGVxdWFsc0NvbnN0cnVjdG9yUHJvdG90eXBlSWZOb3RCdWdneShvYmplY3QpO1xuXG5cdFx0Zm9yICh2YXIgayA9IDA7IGsgPCBkb250RW51bXMubGVuZ3RoOyArK2spIHtcblx0XHRcdGlmICghKHNraXBDb25zdHJ1Y3RvciAmJiBkb250RW51bXNba10gPT09ICdjb25zdHJ1Y3RvcicpICYmIGhhcy5jYWxsKG9iamVjdCwgZG9udEVudW1zW2tdKSkge1xuXHRcdFx0XHR0aGVLZXlzLnB1c2goZG9udEVudW1zW2tdKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmV0dXJuIHRoZUtleXM7XG59O1xuXG5rZXlzU2hpbS5zaGltID0gZnVuY3Rpb24gc2hpbU9iamVjdEtleXMoKSB7XG5cdGlmIChPYmplY3Qua2V5cykge1xuXHRcdHZhciBrZXlzV29ya3NXaXRoQXJndW1lbnRzID0gKGZ1bmN0aW9uICgpIHtcblx0XHRcdC8vIFNhZmFyaSA1LjAgYnVnXG5cdFx0XHRyZXR1cm4gKE9iamVjdC5rZXlzKGFyZ3VtZW50cykgfHwgJycpLmxlbmd0aCA9PT0gMjtcblx0XHR9KDEsIDIpKTtcblx0XHRpZiAoIWtleXNXb3Jrc1dpdGhBcmd1bWVudHMpIHtcblx0XHRcdHZhciBvcmlnaW5hbEtleXMgPSBPYmplY3Qua2V5cztcblx0XHRcdE9iamVjdC5rZXlzID0gZnVuY3Rpb24ga2V5cyhvYmplY3QpIHtcblx0XHRcdFx0aWYgKGlzQXJncyhvYmplY3QpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG9yaWdpbmFsS2V5cyhzbGljZS5jYWxsKG9iamVjdCkpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiBvcmlnaW5hbEtleXMob2JqZWN0KTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0T2JqZWN0LmtleXMgPSBrZXlzU2hpbTtcblx0fVxuXHRyZXR1cm4gT2JqZWN0LmtleXMgfHwga2V5c1NoaW07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGtleXNTaGltO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L29iamVjdC1rZXlzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0FyZ3VtZW50cyh2YWx1ZSkge1xuXHR2YXIgc3RyID0gdG9TdHIuY2FsbCh2YWx1ZSk7XG5cdHZhciBpc0FyZ3MgPSBzdHIgPT09ICdbb2JqZWN0IEFyZ3VtZW50c10nO1xuXHRpZiAoIWlzQXJncykge1xuXHRcdGlzQXJncyA9IHN0ciAhPT0gJ1tvYmplY3QgQXJyYXldJyAmJlxuXHRcdFx0dmFsdWUgIT09IG51bGwgJiZcblx0XHRcdHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiZcblx0XHRcdHR5cGVvZiB2YWx1ZS5sZW5ndGggPT09ICdudW1iZXInICYmXG5cdFx0XHR2YWx1ZS5sZW5ndGggPj0gMCAmJlxuXHRcdFx0dG9TdHIuY2FsbCh2YWx1ZS5jYWxsZWUpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xuXHR9XG5cdHJldHVybiBpc0FyZ3M7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L29iamVjdC1rZXlzL2lzQXJndW1lbnRzLmpzXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIlxudmFyIGhhc093biA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGZvckVhY2ggKG9iaiwgZm4sIGN0eCkge1xuICAgIGlmICh0b1N0cmluZy5jYWxsKGZuKSAhPT0gJ1tvYmplY3QgRnVuY3Rpb25dJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdpdGVyYXRvciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcbiAgICB9XG4gICAgdmFyIGwgPSBvYmoubGVuZ3RoO1xuICAgIGlmIChsID09PSArbCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgZm4uY2FsbChjdHgsIG9ialtpXSwgaSwgb2JqKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAodmFyIGsgaW4gb2JqKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwob2JqLCBrKSkge1xuICAgICAgICAgICAgICAgIGZuLmNhbGwoY3R4LCBvYmpba10sIGssIG9iaik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZm9yZWFjaC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgaGFzU3ltYm9scyA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gJ3N5bWJvbCc7XG52YXIgc3ltYm9sVG9TdHIgPSBoYXNTeW1ib2xzID8gU3ltYm9sLnByb3RvdHlwZS50b1N0cmluZyA6IHRvU3RyO1xuXG52YXIgJGlzTmFOID0gcmVxdWlyZSgnLi9oZWxwZXJzL2lzTmFOJyk7XG52YXIgJGlzRmluaXRlID0gcmVxdWlyZSgnLi9oZWxwZXJzL2lzRmluaXRlJyk7XG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSIHx8IE1hdGgucG93KDIsIDUzKSAtIDE7XG5cbnZhciBhc3NpZ24gPSByZXF1aXJlKCcuL2hlbHBlcnMvYXNzaWduJyk7XG52YXIgc2lnbiA9IHJlcXVpcmUoJy4vaGVscGVycy9zaWduJyk7XG52YXIgbW9kID0gcmVxdWlyZSgnLi9oZWxwZXJzL21vZCcpO1xudmFyIGlzUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9oZWxwZXJzL2lzUHJpbWl0aXZlJyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCdlcy10by1wcmltaXRpdmUvZXM2Jyk7XG52YXIgcGFyc2VJbnRlZ2VyID0gcGFyc2VJbnQ7XG52YXIgYmluZCA9IHJlcXVpcmUoJ2Z1bmN0aW9uLWJpbmQnKTtcbnZhciBzdHJTbGljZSA9IGJpbmQuY2FsbChGdW5jdGlvbi5jYWxsLCBTdHJpbmcucHJvdG90eXBlLnNsaWNlKTtcbnZhciBpc0JpbmFyeSA9IGJpbmQuY2FsbChGdW5jdGlvbi5jYWxsLCBSZWdFeHAucHJvdG90eXBlLnRlc3QsIC9eMGJbMDFdKyQvaSk7XG52YXIgaXNPY3RhbCA9IGJpbmQuY2FsbChGdW5jdGlvbi5jYWxsLCBSZWdFeHAucHJvdG90eXBlLnRlc3QsIC9eMG9bMC03XSskL2kpO1xudmFyIG5vbldTID0gWydcXHUwMDg1JywgJ1xcdTIwMGInLCAnXFx1ZmZmZSddLmpvaW4oJycpO1xudmFyIG5vbldTcmVnZXggPSBuZXcgUmVnRXhwKCdbJyArIG5vbldTICsgJ10nLCAnZycpO1xudmFyIGhhc05vbldTID0gYmluZC5jYWxsKEZ1bmN0aW9uLmNhbGwsIFJlZ0V4cC5wcm90b3R5cGUudGVzdCwgbm9uV1NyZWdleCk7XG52YXIgaW52YWxpZEhleExpdGVyYWwgPSAvXlstK10weFswLTlhLWZdKyQvaTtcbnZhciBpc0ludmFsaWRIZXhMaXRlcmFsID0gYmluZC5jYWxsKEZ1bmN0aW9uLmNhbGwsIFJlZ0V4cC5wcm90b3R5cGUudGVzdCwgaW52YWxpZEhleExpdGVyYWwpO1xuXG4vLyB3aGl0ZXNwYWNlIGZyb206IGh0dHA6Ly9lczUuZ2l0aHViLmlvLyN4MTUuNS40LjIwXG4vLyBpbXBsZW1lbnRhdGlvbiBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9lcy1zaGltcy9lczUtc2hpbS9ibG9iL3YzLjQuMC9lczUtc2hpbS5qcyNMMTMwNC1MMTMyNFxudmFyIHdzID0gW1xuXHQnXFx4MDlcXHgwQVxceDBCXFx4MENcXHgwRFxceDIwXFx4QTBcXHUxNjgwXFx1MTgwRVxcdTIwMDBcXHUyMDAxXFx1MjAwMlxcdTIwMDMnLFxuXHQnXFx1MjAwNFxcdTIwMDVcXHUyMDA2XFx1MjAwN1xcdTIwMDhcXHUyMDA5XFx1MjAwQVxcdTIwMkZcXHUyMDVGXFx1MzAwMFxcdTIwMjgnLFxuXHQnXFx1MjAyOVxcdUZFRkYnXG5dLmpvaW4oJycpO1xudmFyIHRyaW1SZWdleCA9IG5ldyBSZWdFeHAoJyheWycgKyB3cyArICddKyl8KFsnICsgd3MgKyAnXSskKScsICdnJyk7XG52YXIgcmVwbGFjZSA9IGJpbmQuY2FsbChGdW5jdGlvbi5jYWxsLCBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2UpO1xudmFyIHRyaW0gPSBmdW5jdGlvbiAodmFsdWUpIHtcblx0cmV0dXJuIHJlcGxhY2UodmFsdWUsIHRyaW1SZWdleCwgJycpO1xufTtcblxudmFyIEVTNSA9IHJlcXVpcmUoJy4vZXM1Jyk7XG5cbnZhciBoYXNSZWdFeHBNYXRjaGVyID0gcmVxdWlyZSgnaXMtcmVnZXgnKTtcblxuLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWFic3RyYWN0LW9wZXJhdGlvbnNcbnZhciBFUzYgPSBhc3NpZ24oYXNzaWduKHt9LCBFUzUpLCB7XG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWNhbGwtZi12LWFyZ3Ncblx0Q2FsbDogZnVuY3Rpb24gQ2FsbChGLCBWKSB7XG5cdFx0dmFyIGFyZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IFtdO1xuXHRcdGlmICghdGhpcy5Jc0NhbGxhYmxlKEYpKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKEYgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG5cdFx0fVxuXHRcdHJldHVybiBGLmFwcGx5KFYsIGFyZ3MpO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b3ByaW1pdGl2ZVxuXHRUb1ByaW1pdGl2ZTogdG9QcmltaXRpdmUsXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvYm9vbGVhblxuXHQvLyBUb0Jvb2xlYW46IEVTNS5Ub0Jvb2xlYW4sXG5cblx0Ly8gaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLXRvbnVtYmVyXG5cdFRvTnVtYmVyOiBmdW5jdGlvbiBUb051bWJlcihhcmd1bWVudCkge1xuXHRcdHZhciB2YWx1ZSA9IGlzUHJpbWl0aXZlKGFyZ3VtZW50KSA/IGFyZ3VtZW50IDogdG9QcmltaXRpdmUoYXJndW1lbnQsICdudW1iZXInKTtcblx0XHRpZiAodHlwZW9mIHZhbHVlID09PSAnc3ltYm9sJykge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgYSBTeW1ib2wgdmFsdWUgdG8gYSBudW1iZXInKTtcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdGlmIChpc0JpbmFyeSh2YWx1ZSkpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuVG9OdW1iZXIocGFyc2VJbnRlZ2VyKHN0clNsaWNlKHZhbHVlLCAyKSwgMikpO1xuXHRcdFx0fSBlbHNlIGlmIChpc09jdGFsKHZhbHVlKSkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5Ub051bWJlcihwYXJzZUludGVnZXIoc3RyU2xpY2UodmFsdWUsIDIpLCA4KSk7XG5cdFx0XHR9IGVsc2UgaWYgKGhhc05vbldTKHZhbHVlKSB8fCBpc0ludmFsaWRIZXhMaXRlcmFsKHZhbHVlKSkge1xuXHRcdFx0XHRyZXR1cm4gTmFOO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyIHRyaW1tZWQgPSB0cmltKHZhbHVlKTtcblx0XHRcdFx0aWYgKHRyaW1tZWQgIT09IHZhbHVlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuVG9OdW1iZXIodHJpbW1lZCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIE51bWJlcih2YWx1ZSk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvaW50ZWdlclxuXHQvLyBUb0ludGVnZXI6IEVTNS5Ub051bWJlcixcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG9pbnQzMlxuXHQvLyBUb0ludDMyOiBFUzUuVG9JbnQzMixcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG91aW50MzJcblx0Ly8gVG9VaW50MzI6IEVTNS5Ub1VpbnQzMixcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG9pbnQxNlxuXHRUb0ludDE2OiBmdW5jdGlvbiBUb0ludDE2KGFyZ3VtZW50KSB7XG5cdFx0dmFyIGludDE2Yml0ID0gdGhpcy5Ub1VpbnQxNihhcmd1bWVudCk7XG5cdFx0cmV0dXJuIGludDE2Yml0ID49IDB4ODAwMCA/IGludDE2Yml0IC0gMHgxMDAwMCA6IGludDE2Yml0O1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b3VpbnQxNlxuXHQvLyBUb1VpbnQxNjogRVM1LlRvVWludDE2LFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b2ludDhcblx0VG9JbnQ4OiBmdW5jdGlvbiBUb0ludDgoYXJndW1lbnQpIHtcblx0XHR2YXIgaW50OGJpdCA9IHRoaXMuVG9VaW50OChhcmd1bWVudCk7XG5cdFx0cmV0dXJuIGludDhiaXQgPj0gMHg4MCA/IGludDhiaXQgLSAweDEwMCA6IGludDhiaXQ7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvdWludDhcblx0VG9VaW50ODogZnVuY3Rpb24gVG9VaW50OChhcmd1bWVudCkge1xuXHRcdHZhciBudW1iZXIgPSB0aGlzLlRvTnVtYmVyKGFyZ3VtZW50KTtcblx0XHRpZiAoJGlzTmFOKG51bWJlcikgfHwgbnVtYmVyID09PSAwIHx8ICEkaXNGaW5pdGUobnVtYmVyKSkgeyByZXR1cm4gMDsgfVxuXHRcdHZhciBwb3NJbnQgPSBzaWduKG51bWJlcikgKiBNYXRoLmZsb29yKE1hdGguYWJzKG51bWJlcikpO1xuXHRcdHJldHVybiBtb2QocG9zSW50LCAweDEwMCk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvdWludDhjbGFtcFxuXHRUb1VpbnQ4Q2xhbXA6IGZ1bmN0aW9uIFRvVWludDhDbGFtcChhcmd1bWVudCkge1xuXHRcdHZhciBudW1iZXIgPSB0aGlzLlRvTnVtYmVyKGFyZ3VtZW50KTtcblx0XHRpZiAoJGlzTmFOKG51bWJlcikgfHwgbnVtYmVyIDw9IDApIHsgcmV0dXJuIDA7IH1cblx0XHRpZiAobnVtYmVyID49IDB4RkYpIHsgcmV0dXJuIDB4RkY7IH1cblx0XHR2YXIgZiA9IE1hdGguZmxvb3IoYXJndW1lbnQpO1xuXHRcdGlmIChmICsgMC41IDwgbnVtYmVyKSB7IHJldHVybiBmICsgMTsgfVxuXHRcdGlmIChudW1iZXIgPCBmICsgMC41KSB7IHJldHVybiBmOyB9XG5cdFx0aWYgKGYgJSAyICE9PSAwKSB7IHJldHVybiBmICsgMTsgfVxuXHRcdHJldHVybiBmO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b3N0cmluZ1xuXHRUb1N0cmluZzogZnVuY3Rpb24gVG9TdHJpbmcoYXJndW1lbnQpIHtcblx0XHRpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnc3ltYm9sJykge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgYSBTeW1ib2wgdmFsdWUgdG8gYSBzdHJpbmcnKTtcblx0XHR9XG5cdFx0cmV0dXJuIFN0cmluZyhhcmd1bWVudCk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvb2JqZWN0XG5cdFRvT2JqZWN0OiBmdW5jdGlvbiBUb09iamVjdCh2YWx1ZSkge1xuXHRcdHRoaXMuUmVxdWlyZU9iamVjdENvZXJjaWJsZSh2YWx1ZSk7XG5cdFx0cmV0dXJuIE9iamVjdCh2YWx1ZSk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvcHJvcGVydHlrZXlcblx0VG9Qcm9wZXJ0eUtleTogZnVuY3Rpb24gVG9Qcm9wZXJ0eUtleShhcmd1bWVudCkge1xuXHRcdHZhciBrZXkgPSB0aGlzLlRvUHJpbWl0aXZlKGFyZ3VtZW50LCBTdHJpbmcpO1xuXHRcdHJldHVybiB0eXBlb2Yga2V5ID09PSAnc3ltYm9sJyA/IHN5bWJvbFRvU3RyLmNhbGwoa2V5KSA6IHRoaXMuVG9TdHJpbmcoa2V5KTtcblx0fSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG9sZW5ndGhcblx0VG9MZW5ndGg6IGZ1bmN0aW9uIFRvTGVuZ3RoKGFyZ3VtZW50KSB7XG5cdFx0dmFyIGxlbiA9IHRoaXMuVG9JbnRlZ2VyKGFyZ3VtZW50KTtcblx0XHRpZiAobGVuIDw9IDApIHsgcmV0dXJuIDA7IH0gLy8gaW5jbHVkZXMgY29udmVydGluZyAtMCB0byArMFxuXHRcdGlmIChsZW4gPiBNQVhfU0FGRV9JTlRFR0VSKSB7IHJldHVybiBNQVhfU0FGRV9JTlRFR0VSOyB9XG5cdFx0cmV0dXJuIGxlbjtcblx0fSxcblxuXHQvLyBodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtY2Fub25pY2FsbnVtZXJpY2luZGV4c3RyaW5nXG5cdENhbm9uaWNhbE51bWVyaWNJbmRleFN0cmluZzogZnVuY3Rpb24gQ2Fub25pY2FsTnVtZXJpY0luZGV4U3RyaW5nKGFyZ3VtZW50KSB7XG5cdFx0aWYgKHRvU3RyLmNhbGwoYXJndW1lbnQpICE9PSAnW29iamVjdCBTdHJpbmddJykge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignbXVzdCBiZSBhIHN0cmluZycpO1xuXHRcdH1cblx0XHRpZiAoYXJndW1lbnQgPT09ICctMCcpIHsgcmV0dXJuIC0wOyB9XG5cdFx0dmFyIG4gPSB0aGlzLlRvTnVtYmVyKGFyZ3VtZW50KTtcblx0XHRpZiAodGhpcy5TYW1lVmFsdWUodGhpcy5Ub1N0cmluZyhuKSwgYXJndW1lbnQpKSB7IHJldHVybiBuOyB9XG5cdFx0cmV0dXJuIHZvaWQgMDtcblx0fSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtcmVxdWlyZW9iamVjdGNvZXJjaWJsZVxuXHRSZXF1aXJlT2JqZWN0Q29lcmNpYmxlOiBFUzUuQ2hlY2tPYmplY3RDb2VyY2libGUsXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWlzYXJyYXlcblx0SXNBcnJheTogQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBJc0FycmF5KGFyZ3VtZW50KSB7XG5cdFx0cmV0dXJuIHRvU3RyLmNhbGwoYXJndW1lbnQpID09PSAnW29iamVjdCBBcnJheV0nO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1pc2NhbGxhYmxlXG5cdC8vIElzQ2FsbGFibGU6IEVTNS5Jc0NhbGxhYmxlLFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1pc2NvbnN0cnVjdG9yXG5cdElzQ29uc3RydWN0b3I6IGZ1bmN0aW9uIElzQ29uc3RydWN0b3IoYXJndW1lbnQpIHtcblx0XHRyZXR1cm4gdHlwZW9mIGFyZ3VtZW50ID09PSAnZnVuY3Rpb24nICYmICEhYXJndW1lbnQucHJvdG90eXBlOyAvLyB1bmZvcnR1bmF0ZWx5IHRoZXJlJ3Mgbm8gd2F5IHRvIHRydWx5IGNoZWNrIHRoaXMgd2l0aG91dCB0cnkvY2F0Y2ggYG5ldyBhcmd1bWVudGBcblx0fSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtaXNleHRlbnNpYmxlLW9cblx0SXNFeHRlbnNpYmxlOiBmdW5jdGlvbiBJc0V4dGVuc2libGUob2JqKSB7XG5cdFx0aWYgKCFPYmplY3QucHJldmVudEV4dGVuc2lvbnMpIHsgcmV0dXJuIHRydWU7IH1cblx0XHRpZiAoaXNQcmltaXRpdmUob2JqKSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRyZXR1cm4gT2JqZWN0LmlzRXh0ZW5zaWJsZShvYmopO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1pc2ludGVnZXJcblx0SXNJbnRlZ2VyOiBmdW5jdGlvbiBJc0ludGVnZXIoYXJndW1lbnQpIHtcblx0XHRpZiAodHlwZW9mIGFyZ3VtZW50ICE9PSAnbnVtYmVyJyB8fCAkaXNOYU4oYXJndW1lbnQpIHx8ICEkaXNGaW5pdGUoYXJndW1lbnQpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHZhciBhYnMgPSBNYXRoLmFicyhhcmd1bWVudCk7XG5cdFx0cmV0dXJuIE1hdGguZmxvb3IoYWJzKSA9PT0gYWJzO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1pc3Byb3BlcnR5a2V5XG5cdElzUHJvcGVydHlLZXk6IGZ1bmN0aW9uIElzUHJvcGVydHlLZXkoYXJndW1lbnQpIHtcblx0XHRyZXR1cm4gdHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgYXJndW1lbnQgPT09ICdzeW1ib2wnO1xuXHR9LFxuXG5cdC8vIGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1pc3JlZ2V4cFxuXHRJc1JlZ0V4cDogZnVuY3Rpb24gSXNSZWdFeHAoYXJndW1lbnQpIHtcblx0XHRpZiAoIWFyZ3VtZW50IHx8IHR5cGVvZiBhcmd1bWVudCAhPT0gJ29iamVjdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0aWYgKGhhc1N5bWJvbHMpIHtcblx0XHRcdHZhciBpc1JlZ0V4cCA9IGFyZ3VtZW50W1N5bWJvbC5tYXRjaF07XG5cdFx0XHRpZiAodHlwZW9mIGlzUmVnRXhwICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRyZXR1cm4gRVM1LlRvQm9vbGVhbihpc1JlZ0V4cCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBoYXNSZWdFeHBNYXRjaGVyKGFyZ3VtZW50KTtcblx0fSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtc2FtZXZhbHVlXG5cdC8vIFNhbWVWYWx1ZTogRVM1LlNhbWVWYWx1ZSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtc2FtZXZhbHVlemVyb1xuXHRTYW1lVmFsdWVaZXJvOiBmdW5jdGlvbiBTYW1lVmFsdWVaZXJvKHgsIHkpIHtcblx0XHRyZXR1cm4gKHggPT09IHkpIHx8ICgkaXNOYU4oeCkgJiYgJGlzTmFOKHkpKTtcblx0fSxcblxuXHQvKipcblx0ICogNy4zLjIgR2V0ViAoViwgUClcblx0ICogMS4gQXNzZXJ0OiBJc1Byb3BlcnR5S2V5KFApIGlzIHRydWUuXG5cdCAqIDIuIExldCBPIGJlIFRvT2JqZWN0KFYpLlxuXHQgKiAzLiBSZXR1cm5JZkFicnVwdChPKS5cblx0ICogNC4gUmV0dXJuIE8uW1tHZXRdXShQLCBWKS5cblx0ICovXG5cdEdldFY6IGZ1bmN0aW9uIEdldFYoViwgUCkge1xuXHRcdC8vIDcuMy4yLjFcblx0XHRpZiAoIXRoaXMuSXNQcm9wZXJ0eUtleShQKSkge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogSXNQcm9wZXJ0eUtleShQKSBpcyBub3QgdHJ1ZScpO1xuXHRcdH1cblxuXHRcdC8vIDcuMy4yLjItM1xuXHRcdHZhciBPID0gdGhpcy5Ub09iamVjdChWKTtcblxuXHRcdC8vIDcuMy4yLjRcblx0XHRyZXR1cm4gT1tQXTtcblx0fSxcblxuXHQvKipcblx0ICogNy4zLjkgLSBodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtZ2V0bWV0aG9kXG5cdCAqIDEuIEFzc2VydDogSXNQcm9wZXJ0eUtleShQKSBpcyB0cnVlLlxuXHQgKiAyLiBMZXQgZnVuYyBiZSBHZXRWKE8sIFApLlxuXHQgKiAzLiBSZXR1cm5JZkFicnVwdChmdW5jKS5cblx0ICogNC4gSWYgZnVuYyBpcyBlaXRoZXIgdW5kZWZpbmVkIG9yIG51bGwsIHJldHVybiB1bmRlZmluZWQuXG5cdCAqIDUuIElmIElzQ2FsbGFibGUoZnVuYykgaXMgZmFsc2UsIHRocm93IGEgVHlwZUVycm9yIGV4Y2VwdGlvbi5cblx0ICogNi4gUmV0dXJuIGZ1bmMuXG5cdCAqL1xuXHRHZXRNZXRob2Q6IGZ1bmN0aW9uIEdldE1ldGhvZChPLCBQKSB7XG5cdFx0Ly8gNy4zLjkuMVxuXHRcdGlmICghdGhpcy5Jc1Byb3BlcnR5S2V5KFApKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBJc1Byb3BlcnR5S2V5KFApIGlzIG5vdCB0cnVlJyk7XG5cdFx0fVxuXG5cdFx0Ly8gNy4zLjkuMlxuXHRcdHZhciBmdW5jID0gdGhpcy5HZXRWKE8sIFApO1xuXG5cdFx0Ly8gNy4zLjkuNFxuXHRcdGlmIChmdW5jID09IG51bGwpIHtcblx0XHRcdHJldHVybiB1bmRlZmluZWQ7XG5cdFx0fVxuXG5cdFx0Ly8gNy4zLjkuNVxuXHRcdGlmICghdGhpcy5Jc0NhbGxhYmxlKGZ1bmMpKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKFAgKyAnaXMgbm90IGEgZnVuY3Rpb24nKTtcblx0XHR9XG5cblx0XHQvLyA3LjMuOS42XG5cdFx0cmV0dXJuIGZ1bmM7XG5cdH0sXG5cblx0LyoqXG5cdCAqIDcuMy4xIEdldCAoTywgUCkgLSBodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtZ2V0LW8tcFxuXHQgKiAxLiBBc3NlcnQ6IFR5cGUoTykgaXMgT2JqZWN0LlxuXHQgKiAyLiBBc3NlcnQ6IElzUHJvcGVydHlLZXkoUCkgaXMgdHJ1ZS5cblx0ICogMy4gUmV0dXJuIE8uW1tHZXRdXShQLCBPKS5cblx0ICovXG5cdEdldDogZnVuY3Rpb24gR2V0KE8sIFApIHtcblx0XHQvLyA3LjMuMS4xXG5cdFx0aWYgKHRoaXMuVHlwZShPKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IFR5cGUoTykgaXMgbm90IE9iamVjdCcpO1xuXHRcdH1cblx0XHQvLyA3LjMuMS4yXG5cdFx0aWYgKCF0aGlzLklzUHJvcGVydHlLZXkoUCkpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IElzUHJvcGVydHlLZXkoUCkgaXMgbm90IHRydWUnKTtcblx0XHR9XG5cdFx0Ly8gNy4zLjEuM1xuXHRcdHJldHVybiBPW1BdO1xuXHR9LFxuXG5cdFR5cGU6IGZ1bmN0aW9uIFR5cGUoeCkge1xuXHRcdGlmICh0eXBlb2YgeCA9PT0gJ3N5bWJvbCcpIHtcblx0XHRcdHJldHVybiAnU3ltYm9sJztcblx0XHR9XG5cdFx0cmV0dXJuIEVTNS5UeXBlKHgpO1xuXHR9LFxuXG5cdC8vIGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1zcGVjaWVzY29uc3RydWN0b3Jcblx0U3BlY2llc0NvbnN0cnVjdG9yOiBmdW5jdGlvbiBTcGVjaWVzQ29uc3RydWN0b3IoTywgZGVmYXVsdENvbnN0cnVjdG9yKSB7XG5cdFx0aWYgKHRoaXMuVHlwZShPKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IFR5cGUoTykgaXMgbm90IE9iamVjdCcpO1xuXHRcdH1cblx0XHR2YXIgQyA9IE8uY29uc3RydWN0b3I7XG5cdFx0aWYgKHR5cGVvZiBDID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0cmV0dXJuIGRlZmF1bHRDb25zdHJ1Y3Rvcjtcblx0XHR9XG5cdFx0aWYgKHRoaXMuVHlwZShDKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ08uY29uc3RydWN0b3IgaXMgbm90IGFuIE9iamVjdCcpO1xuXHRcdH1cblx0XHR2YXIgUyA9IGhhc1N5bWJvbHMgJiYgU3ltYm9sLnNwZWNpZXMgPyBDW1N5bWJvbC5zcGVjaWVzXSA6IHVuZGVmaW5lZDtcblx0XHRpZiAoUyA9PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gZGVmYXVsdENvbnN0cnVjdG9yO1xuXHRcdH1cblx0XHRpZiAodGhpcy5Jc0NvbnN0cnVjdG9yKFMpKSB7XG5cdFx0XHRyZXR1cm4gUztcblx0XHR9XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignbm8gY29uc3RydWN0b3IgZm91bmQnKTtcblx0fVxufSk7XG5cbmRlbGV0ZSBFUzYuQ2hlY2tPYmplY3RDb2VyY2libGU7IC8vIHJlbmFtZWQgaW4gRVM2IHRvIFJlcXVpcmVPYmplY3RDb2VyY2libGVcblxubW9kdWxlLmV4cG9ydHMgPSBFUzY7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZXMtYWJzdHJhY3QvZXM2LmpzXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIm1vZHVsZS5leHBvcnRzID0gTnVtYmVyLmlzTmFOIHx8IGZ1bmN0aW9uIGlzTmFOKGEpIHtcblx0cmV0dXJuIGEgIT09IGE7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VzLWFic3RyYWN0L2hlbHBlcnMvaXNOYU4uanNcbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwidmFyICRpc05hTiA9IE51bWJlci5pc05hTiB8fCBmdW5jdGlvbiAoYSkgeyByZXR1cm4gYSAhPT0gYTsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBOdW1iZXIuaXNGaW5pdGUgfHwgZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHR5cGVvZiB4ID09PSAnbnVtYmVyJyAmJiAhJGlzTmFOKHgpICYmIHggIT09IEluZmluaXR5ICYmIHggIT09IC1JbmZpbml0eTsgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy1hYnN0cmFjdC9oZWxwZXJzL2lzRmluaXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsInZhciBoYXMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSkge1xuXHRmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG5cdFx0aWYgKGhhcy5jYWxsKHNvdXJjZSwga2V5KSkge1xuXHRcdFx0dGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHRhcmdldDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZXMtYWJzdHJhY3QvaGVscGVycy9hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzaWduKG51bWJlcikge1xuXHRyZXR1cm4gbnVtYmVyID49IDAgPyAxIDogLTE7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VzLWFic3RyYWN0L2hlbHBlcnMvc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG1vZChudW1iZXIsIG1vZHVsbykge1xuXHR2YXIgcmVtYWluID0gbnVtYmVyICUgbW9kdWxvO1xuXHRyZXR1cm4gTWF0aC5mbG9vcihyZW1haW4gPj0gMCA/IHJlbWFpbiA6IHJlbWFpbiArIG1vZHVsbyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VzLWFic3RyYWN0L2hlbHBlcnMvbW9kLmpzXG4vLyBtb2R1bGUgaWQgPSA0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNQcmltaXRpdmUodmFsdWUpIHtcblx0cmV0dXJuIHZhbHVlID09PSBudWxsIHx8ICh0eXBlb2YgdmFsdWUgIT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0Jyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VzLWFic3RyYWN0L2hlbHBlcnMvaXNQcmltaXRpdmUuanNcbi8vIG1vZHVsZSBpZCA9IDQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaGFzU3ltYm9scyA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gJ3N5bWJvbCc7XG5cbnZhciBpc1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vaGVscGVycy9pc1ByaW1pdGl2ZScpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCdpcy1jYWxsYWJsZScpO1xudmFyIGlzRGF0ZSA9IHJlcXVpcmUoJ2lzLWRhdGUtb2JqZWN0Jyk7XG52YXIgaXNTeW1ib2wgPSByZXF1aXJlKCdpcy1zeW1ib2wnKTtcblxudmFyIG9yZGluYXJ5VG9QcmltaXRpdmUgPSBmdW5jdGlvbiBPcmRpbmFyeVRvUHJpbWl0aXZlKE8sIGhpbnQpIHtcblx0aWYgKHR5cGVvZiBPID09PSAndW5kZWZpbmVkJyB8fCBPID09PSBudWxsKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgbWV0aG9kIG9uICcgKyBPKTtcblx0fVxuXHRpZiAodHlwZW9mIGhpbnQgIT09ICdzdHJpbmcnIHx8IChoaW50ICE9PSAnbnVtYmVyJyAmJiBoaW50ICE9PSAnc3RyaW5nJykpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdoaW50IG11c3QgYmUgXCJzdHJpbmdcIiBvciBcIm51bWJlclwiJyk7XG5cdH1cblx0dmFyIG1ldGhvZE5hbWVzID0gaGludCA9PT0gJ3N0cmluZycgPyBbJ3RvU3RyaW5nJywgJ3ZhbHVlT2YnXSA6IFsndmFsdWVPZicsICd0b1N0cmluZyddO1xuXHR2YXIgbWV0aG9kLCByZXN1bHQsIGk7XG5cdGZvciAoaSA9IDA7IGkgPCBtZXRob2ROYW1lcy5sZW5ndGg7ICsraSkge1xuXHRcdG1ldGhvZCA9IE9bbWV0aG9kTmFtZXNbaV1dO1xuXHRcdGlmIChpc0NhbGxhYmxlKG1ldGhvZCkpIHtcblx0XHRcdHJlc3VsdCA9IG1ldGhvZC5jYWxsKE8pO1xuXHRcdFx0aWYgKGlzUHJpbWl0aXZlKHJlc3VsdCkpIHtcblx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0dGhyb3cgbmV3IFR5cGVFcnJvcignTm8gZGVmYXVsdCB2YWx1ZScpO1xufTtcblxudmFyIEdldE1ldGhvZCA9IGZ1bmN0aW9uIEdldE1ldGhvZChPLCBQKSB7XG5cdHZhciBmdW5jID0gT1tQXTtcblx0aWYgKGZ1bmMgIT09IG51bGwgJiYgdHlwZW9mIGZ1bmMgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0aWYgKCFpc0NhbGxhYmxlKGZ1bmMpKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGZ1bmMgKyAnIHJldHVybmVkIGZvciBwcm9wZXJ0eSAnICsgUCArICcgb2Ygb2JqZWN0ICcgKyBPICsgJyBpcyBub3QgYSBmdW5jdGlvbicpO1xuXHRcdH1cblx0XHRyZXR1cm4gZnVuYztcblx0fVxufTtcblxuLy8gaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLXRvcHJpbWl0aXZlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIFRvUHJpbWl0aXZlKGlucHV0LCBQcmVmZXJyZWRUeXBlKSB7XG5cdGlmIChpc1ByaW1pdGl2ZShpbnB1dCkpIHtcblx0XHRyZXR1cm4gaW5wdXQ7XG5cdH1cblx0dmFyIGhpbnQgPSAnZGVmYXVsdCc7XG5cdGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuXHRcdGlmIChQcmVmZXJyZWRUeXBlID09PSBTdHJpbmcpIHtcblx0XHRcdGhpbnQgPSAnc3RyaW5nJztcblx0XHR9IGVsc2UgaWYgKFByZWZlcnJlZFR5cGUgPT09IE51bWJlcikge1xuXHRcdFx0aGludCA9ICdudW1iZXInO1xuXHRcdH1cblx0fVxuXG5cdHZhciBleG90aWNUb1ByaW07XG5cdGlmIChoYXNTeW1ib2xzKSB7XG5cdFx0aWYgKFN5bWJvbC50b1ByaW1pdGl2ZSkge1xuXHRcdFx0ZXhvdGljVG9QcmltID0gR2V0TWV0aG9kKGlucHV0LCBTeW1ib2wudG9QcmltaXRpdmUpO1xuXHRcdH0gZWxzZSBpZiAoaXNTeW1ib2woaW5wdXQpKSB7XG5cdFx0XHRleG90aWNUb1ByaW0gPSBTeW1ib2wucHJvdG90eXBlLnZhbHVlT2Y7XG5cdFx0fVxuXHR9XG5cdGlmICh0eXBlb2YgZXhvdGljVG9QcmltICE9PSAndW5kZWZpbmVkJykge1xuXHRcdHZhciByZXN1bHQgPSBleG90aWNUb1ByaW0uY2FsbChpbnB1dCwgaGludCk7XG5cdFx0aWYgKGlzUHJpbWl0aXZlKHJlc3VsdCkpIHtcblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fVxuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ3VuYWJsZSB0byBjb252ZXJ0IGV4b3RpYyBvYmplY3QgdG8gcHJpbWl0aXZlJyk7XG5cdH1cblx0aWYgKGhpbnQgPT09ICdkZWZhdWx0JyAmJiAoaXNEYXRlKGlucHV0KSB8fCBpc1N5bWJvbChpbnB1dCkpKSB7XG5cdFx0aGludCA9ICdzdHJpbmcnO1xuXHR9XG5cdHJldHVybiBvcmRpbmFyeVRvUHJpbWl0aXZlKGlucHV0LCBoaW50ID09PSAnZGVmYXVsdCcgPyAnbnVtYmVyJyA6IGhpbnQpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy10by1wcmltaXRpdmUvZXM2LmpzXG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNQcmltaXRpdmUodmFsdWUpIHtcblx0cmV0dXJuIHZhbHVlID09PSBudWxsIHx8ICh0eXBlb2YgdmFsdWUgIT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0Jyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VzLXRvLXByaW1pdGl2ZS9oZWxwZXJzL2lzUHJpbWl0aXZlLmpzXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxudmFyIGZuVG9TdHIgPSBGdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmc7XG5cbnZhciBjb25zdHJ1Y3RvclJlZ2V4ID0gL15cXHMqY2xhc3MgLztcbnZhciBpc0VTNkNsYXNzRm4gPSBmdW5jdGlvbiBpc0VTNkNsYXNzRm4odmFsdWUpIHtcblx0dHJ5IHtcblx0XHR2YXIgZm5TdHIgPSBmblRvU3RyLmNhbGwodmFsdWUpO1xuXHRcdHZhciBzaW5nbGVTdHJpcHBlZCA9IGZuU3RyLnJlcGxhY2UoL1xcL1xcLy4qXFxuL2csICcnKTtcblx0XHR2YXIgbXVsdGlTdHJpcHBlZCA9IHNpbmdsZVN0cmlwcGVkLnJlcGxhY2UoL1xcL1xcKlsuXFxzXFxTXSpcXCpcXC8vZywgJycpO1xuXHRcdHZhciBzcGFjZVN0cmlwcGVkID0gbXVsdGlTdHJpcHBlZC5yZXBsYWNlKC9cXG4vbWcsICcgJykucmVwbGFjZSgvIHsyfS9nLCAnICcpO1xuXHRcdHJldHVybiBjb25zdHJ1Y3RvclJlZ2V4LnRlc3Qoc3BhY2VTdHJpcHBlZCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRyZXR1cm4gZmFsc2U7IC8vIG5vdCBhIGZ1bmN0aW9uXG5cdH1cbn07XG5cbnZhciB0cnlGdW5jdGlvbk9iamVjdCA9IGZ1bmN0aW9uIHRyeUZ1bmN0aW9uT2JqZWN0KHZhbHVlKSB7XG5cdHRyeSB7XG5cdFx0aWYgKGlzRVM2Q2xhc3NGbih2YWx1ZSkpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdFx0Zm5Ub1N0ci5jYWxsKHZhbHVlKTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufTtcbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgZm5DbGFzcyA9ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG52YXIgZ2VuQ2xhc3MgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nO1xudmFyIGhhc1RvU3RyaW5nVGFnID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgU3ltYm9sLnRvU3RyaW5nVGFnID09PSAnc3ltYm9sJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0NhbGxhYmxlKHZhbHVlKSB7XG5cdGlmICghdmFsdWUpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdGlmICh0eXBlb2YgdmFsdWUgIT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JykgeyByZXR1cm4gZmFsc2U7IH1cblx0aWYgKGhhc1RvU3RyaW5nVGFnKSB7IHJldHVybiB0cnlGdW5jdGlvbk9iamVjdCh2YWx1ZSk7IH1cblx0aWYgKGlzRVM2Q2xhc3NGbih2YWx1ZSkpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdHZhciBzdHJDbGFzcyA9IHRvU3RyLmNhbGwodmFsdWUpO1xuXHRyZXR1cm4gc3RyQ2xhc3MgPT09IGZuQ2xhc3MgfHwgc3RyQ2xhc3MgPT09IGdlbkNsYXNzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9pcy1jYWxsYWJsZS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbnZhciBnZXREYXkgPSBEYXRlLnByb3RvdHlwZS5nZXREYXk7XG52YXIgdHJ5RGF0ZU9iamVjdCA9IGZ1bmN0aW9uIHRyeURhdGVPYmplY3QodmFsdWUpIHtcblx0dHJ5IHtcblx0XHRnZXREYXkuY2FsbCh2YWx1ZSk7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn07XG5cbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgZGF0ZUNsYXNzID0gJ1tvYmplY3QgRGF0ZV0nO1xudmFyIGhhc1RvU3RyaW5nVGFnID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgU3ltYm9sLnRvU3RyaW5nVGFnID09PSAnc3ltYm9sJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0RhdGVPYmplY3QodmFsdWUpIHtcblx0aWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcgfHwgdmFsdWUgPT09IG51bGwpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdHJldHVybiBoYXNUb1N0cmluZ1RhZyA/IHRyeURhdGVPYmplY3QodmFsdWUpIDogdG9TdHIuY2FsbCh2YWx1ZSkgPT09IGRhdGVDbGFzcztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaXMtZGF0ZS1vYmplY3QvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIGhhc1N5bWJvbHMgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBTeW1ib2woKSA9PT0gJ3N5bWJvbCc7XG5cbmlmIChoYXNTeW1ib2xzKSB7XG5cdHZhciBzeW1Ub1N0ciA9IFN5bWJvbC5wcm90b3R5cGUudG9TdHJpbmc7XG5cdHZhciBzeW1TdHJpbmdSZWdleCA9IC9eU3ltYm9sXFwoLipcXCkkLztcblx0dmFyIGlzU3ltYm9sT2JqZWN0ID0gZnVuY3Rpb24gaXNTeW1ib2xPYmplY3QodmFsdWUpIHtcblx0XHRpZiAodHlwZW9mIHZhbHVlLnZhbHVlT2YoKSAhPT0gJ3N5bWJvbCcpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdFx0cmV0dXJuIHN5bVN0cmluZ1JlZ2V4LnRlc3Qoc3ltVG9TdHIuY2FsbCh2YWx1ZSkpO1xuXHR9O1xuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG5cdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N5bWJvbCcpIHsgcmV0dXJuIHRydWU7IH1cblx0XHRpZiAodG9TdHIuY2FsbCh2YWx1ZSkgIT09ICdbb2JqZWN0IFN5bWJvbF0nKSB7IHJldHVybiBmYWxzZTsgfVxuXHRcdHRyeSB7XG5cdFx0XHRyZXR1cm4gaXNTeW1ib2xPYmplY3QodmFsdWUpO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH07XG59IGVsc2Uge1xuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG5cdFx0Ly8gdGhpcyBlbnZpcm9ubWVudCBkb2VzIG5vdCBzdXBwb3J0IFN5bWJvbHMuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9O1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2lzLXN5bWJvbC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJ2YXIgaW1wbGVtZW50YXRpb24gPSByZXF1aXJlKCcuL2ltcGxlbWVudGF0aW9uJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQgfHwgaW1wbGVtZW50YXRpb247XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZnVuY3Rpb24tYmluZC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJ2YXIgRVJST1JfTUVTU0FHRSA9ICdGdW5jdGlvbi5wcm90b3R5cGUuYmluZCBjYWxsZWQgb24gaW5jb21wYXRpYmxlICc7XG52YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIGZ1bmNUeXBlID0gJ1tvYmplY3QgRnVuY3Rpb25dJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiaW5kKHRoYXQpIHtcbiAgICB2YXIgdGFyZ2V0ID0gdGhpcztcbiAgICBpZiAodHlwZW9mIHRhcmdldCAhPT0gJ2Z1bmN0aW9uJyB8fCB0b1N0ci5jYWxsKHRhcmdldCkgIT09IGZ1bmNUeXBlKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRVJST1JfTUVTU0FHRSArIHRhcmdldCk7XG4gICAgfVxuICAgIHZhciBhcmdzID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuXG4gICAgdmFyIGJvdW5kO1xuICAgIHZhciBiaW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzIGluc3RhbmNlb2YgYm91bmQpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSB0YXJnZXQuYXBwbHkoXG4gICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICBhcmdzLmNvbmNhdChzbGljZS5jYWxsKGFyZ3VtZW50cykpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKE9iamVjdChyZXN1bHQpID09PSByZXN1bHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0LmFwcGx5KFxuICAgICAgICAgICAgICAgIHRoYXQsXG4gICAgICAgICAgICAgICAgYXJncy5jb25jYXQoc2xpY2UuY2FsbChhcmd1bWVudHMpKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgYm91bmRMZW5ndGggPSBNYXRoLm1heCgwLCB0YXJnZXQubGVuZ3RoIC0gYXJncy5sZW5ndGgpO1xuICAgIHZhciBib3VuZEFyZ3MgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvdW5kTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYm91bmRBcmdzLnB1c2goJyQnICsgaSk7XG4gICAgfVxuXG4gICAgYm91bmQgPSBGdW5jdGlvbignYmluZGVyJywgJ3JldHVybiBmdW5jdGlvbiAoJyArIGJvdW5kQXJncy5qb2luKCcsJykgKyAnKXsgcmV0dXJuIGJpbmRlci5hcHBseSh0aGlzLGFyZ3VtZW50cyk7IH0nKShiaW5kZXIpO1xuXG4gICAgaWYgKHRhcmdldC5wcm90b3R5cGUpIHtcbiAgICAgICAgdmFyIEVtcHR5ID0gZnVuY3Rpb24gRW1wdHkoKSB7fTtcbiAgICAgICAgRW1wdHkucHJvdG90eXBlID0gdGFyZ2V0LnByb3RvdHlwZTtcbiAgICAgICAgYm91bmQucHJvdG90eXBlID0gbmV3IEVtcHR5KCk7XG4gICAgICAgIEVtcHR5LnByb3RvdHlwZSA9IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJvdW5kO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9mdW5jdGlvbi1iaW5kL2ltcGxlbWVudGF0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSA1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxudmFyICRpc05hTiA9IHJlcXVpcmUoJy4vaGVscGVycy9pc05hTicpO1xudmFyICRpc0Zpbml0ZSA9IHJlcXVpcmUoJy4vaGVscGVycy9pc0Zpbml0ZScpO1xuXG52YXIgc2lnbiA9IHJlcXVpcmUoJy4vaGVscGVycy9zaWduJyk7XG52YXIgbW9kID0gcmVxdWlyZSgnLi9oZWxwZXJzL21vZCcpO1xuXG52YXIgSXNDYWxsYWJsZSA9IHJlcXVpcmUoJ2lzLWNhbGxhYmxlJyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCdlcy10by1wcmltaXRpdmUvZXM1Jyk7XG5cbi8vIGh0dHBzOi8vZXM1LmdpdGh1Yi5pby8jeDlcbnZhciBFUzUgPSB7XG5cdFRvUHJpbWl0aXZlOiB0b1ByaW1pdGl2ZSxcblxuXHRUb0Jvb2xlYW46IGZ1bmN0aW9uIFRvQm9vbGVhbih2YWx1ZSkge1xuXHRcdHJldHVybiBCb29sZWFuKHZhbHVlKTtcblx0fSxcblx0VG9OdW1iZXI6IGZ1bmN0aW9uIFRvTnVtYmVyKHZhbHVlKSB7XG5cdFx0cmV0dXJuIE51bWJlcih2YWx1ZSk7XG5cdH0sXG5cdFRvSW50ZWdlcjogZnVuY3Rpb24gVG9JbnRlZ2VyKHZhbHVlKSB7XG5cdFx0dmFyIG51bWJlciA9IHRoaXMuVG9OdW1iZXIodmFsdWUpO1xuXHRcdGlmICgkaXNOYU4obnVtYmVyKSkgeyByZXR1cm4gMDsgfVxuXHRcdGlmIChudW1iZXIgPT09IDAgfHwgISRpc0Zpbml0ZShudW1iZXIpKSB7IHJldHVybiBudW1iZXI7IH1cblx0XHRyZXR1cm4gc2lnbihudW1iZXIpICogTWF0aC5mbG9vcihNYXRoLmFicyhudW1iZXIpKTtcblx0fSxcblx0VG9JbnQzMjogZnVuY3Rpb24gVG9JbnQzMih4KSB7XG5cdFx0cmV0dXJuIHRoaXMuVG9OdW1iZXIoeCkgPj4gMDtcblx0fSxcblx0VG9VaW50MzI6IGZ1bmN0aW9uIFRvVWludDMyKHgpIHtcblx0XHRyZXR1cm4gdGhpcy5Ub051bWJlcih4KSA+Pj4gMDtcblx0fSxcblx0VG9VaW50MTY6IGZ1bmN0aW9uIFRvVWludDE2KHZhbHVlKSB7XG5cdFx0dmFyIG51bWJlciA9IHRoaXMuVG9OdW1iZXIodmFsdWUpO1xuXHRcdGlmICgkaXNOYU4obnVtYmVyKSB8fCBudW1iZXIgPT09IDAgfHwgISRpc0Zpbml0ZShudW1iZXIpKSB7IHJldHVybiAwOyB9XG5cdFx0dmFyIHBvc0ludCA9IHNpZ24obnVtYmVyKSAqIE1hdGguZmxvb3IoTWF0aC5hYnMobnVtYmVyKSk7XG5cdFx0cmV0dXJuIG1vZChwb3NJbnQsIDB4MTAwMDApO1xuXHR9LFxuXHRUb1N0cmluZzogZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUpIHtcblx0XHRyZXR1cm4gU3RyaW5nKHZhbHVlKTtcblx0fSxcblx0VG9PYmplY3Q6IGZ1bmN0aW9uIFRvT2JqZWN0KHZhbHVlKSB7XG5cdFx0dGhpcy5DaGVja09iamVjdENvZXJjaWJsZSh2YWx1ZSk7XG5cdFx0cmV0dXJuIE9iamVjdCh2YWx1ZSk7XG5cdH0sXG5cdENoZWNrT2JqZWN0Q29lcmNpYmxlOiBmdW5jdGlvbiBDaGVja09iamVjdENvZXJjaWJsZSh2YWx1ZSwgb3B0TWVzc2FnZSkge1xuXHRcdC8qIGpzaGludCBlcW51bGw6dHJ1ZSAqL1xuXHRcdGlmICh2YWx1ZSA9PSBudWxsKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKG9wdE1lc3NhZ2UgfHwgJ0Nhbm5vdCBjYWxsIG1ldGhvZCBvbiAnICsgdmFsdWUpO1xuXHRcdH1cblx0XHRyZXR1cm4gdmFsdWU7XG5cdH0sXG5cdElzQ2FsbGFibGU6IElzQ2FsbGFibGUsXG5cdFNhbWVWYWx1ZTogZnVuY3Rpb24gU2FtZVZhbHVlKHgsIHkpIHtcblx0XHRpZiAoeCA9PT0geSkgeyAvLyAwID09PSAtMCwgYnV0IHRoZXkgYXJlIG5vdCBpZGVudGljYWwuXG5cdFx0XHRpZiAoeCA9PT0gMCkgeyByZXR1cm4gMSAvIHggPT09IDEgLyB5OyB9XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0cmV0dXJuICRpc05hTih4KSAmJiAkaXNOYU4oeSk7XG5cdH0sXG5cblx0Ly8gaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzUuMS8jc2VjLThcblx0VHlwZTogZnVuY3Rpb24gVHlwZSh4KSB7XG5cdFx0aWYgKHggPT09IG51bGwpIHtcblx0XHRcdHJldHVybiAnTnVsbCc7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2YgeCA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdHJldHVybiAnVW5kZWZpbmVkJztcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiB4ID09PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiB4ID09PSAnb2JqZWN0Jykge1xuXHRcdFx0cmV0dXJuICdPYmplY3QnO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIHggPT09ICdudW1iZXInKSB7XG5cdFx0XHRyZXR1cm4gJ051bWJlcic7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2YgeCA9PT0gJ2Jvb2xlYW4nKSB7XG5cdFx0XHRyZXR1cm4gJ0Jvb2xlYW4nO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIHggPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRyZXR1cm4gJ1N0cmluZyc7XG5cdFx0fVxuXHR9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVTNTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy1hYnN0cmFjdC9lczUuanNcbi8vIG1vZHVsZSBpZCA9IDU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG52YXIgaXNQcmltaXRpdmUgPSByZXF1aXJlKCcuL2hlbHBlcnMvaXNQcmltaXRpdmUnKTtcblxudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCdpcy1jYWxsYWJsZScpO1xuXG4vLyBodHRwczovL2VzNS5naXRodWIuaW8vI3g4LjEyXG52YXIgRVM1aW50ZXJuYWxTbG90cyA9IHtcblx0J1tbRGVmYXVsdFZhbHVlXV0nOiBmdW5jdGlvbiAoTywgaGludCkge1xuXHRcdHZhciBhY3R1YWxIaW50ID0gaGludCB8fCAodG9TdHIuY2FsbChPKSA9PT0gJ1tvYmplY3QgRGF0ZV0nID8gU3RyaW5nIDogTnVtYmVyKTtcblxuXHRcdGlmIChhY3R1YWxIaW50ID09PSBTdHJpbmcgfHwgYWN0dWFsSGludCA9PT0gTnVtYmVyKSB7XG5cdFx0XHR2YXIgbWV0aG9kcyA9IGFjdHVhbEhpbnQgPT09IFN0cmluZyA/IFsndG9TdHJpbmcnLCAndmFsdWVPZiddIDogWyd2YWx1ZU9mJywgJ3RvU3RyaW5nJ107XG5cdFx0XHR2YXIgdmFsdWUsIGk7XG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgbWV0aG9kcy5sZW5ndGg7ICsraSkge1xuXHRcdFx0XHRpZiAoaXNDYWxsYWJsZShPW21ldGhvZHNbaV1dKSkge1xuXHRcdFx0XHRcdHZhbHVlID0gT1ttZXRob2RzW2ldXSgpO1xuXHRcdFx0XHRcdGlmIChpc1ByaW1pdGl2ZSh2YWx1ZSkpIHtcblx0XHRcdFx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ05vIGRlZmF1bHQgdmFsdWUnKTtcblx0XHR9XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignaW52YWxpZCBbW0RlZmF1bHRWYWx1ZV1dIGhpbnQgc3VwcGxpZWQnKTtcblx0fVxufTtcblxuLy8gaHR0cHM6Ly9lczUuZ2l0aHViLmlvLyN4OVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBUb1ByaW1pdGl2ZShpbnB1dCwgUHJlZmVycmVkVHlwZSkge1xuXHRpZiAoaXNQcmltaXRpdmUoaW5wdXQpKSB7XG5cdFx0cmV0dXJuIGlucHV0O1xuXHR9XG5cdHJldHVybiBFUzVpbnRlcm5hbFNsb3RzWydbW0RlZmF1bHRWYWx1ZV1dJ10oaW5wdXQsIFByZWZlcnJlZFR5cGUpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy10by1wcmltaXRpdmUvZXM1LmpzXG4vLyBtb2R1bGUgaWQgPSA1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxudmFyIGhhcyA9IHJlcXVpcmUoJ2hhcycpO1xudmFyIHJlZ2V4RXhlYyA9IFJlZ0V4cC5wcm90b3R5cGUuZXhlYztcbnZhciBnT1BEID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxudmFyIHRyeVJlZ2V4RXhlY0NhbGwgPSBmdW5jdGlvbiB0cnlSZWdleEV4ZWModmFsdWUpIHtcblx0dHJ5IHtcblx0XHR2YXIgbGFzdEluZGV4ID0gdmFsdWUubGFzdEluZGV4O1xuXHRcdHZhbHVlLmxhc3RJbmRleCA9IDA7XG5cblx0XHRyZWdleEV4ZWMuY2FsbCh2YWx1ZSk7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0gZmluYWxseSB7XG5cdFx0dmFsdWUubGFzdEluZGV4ID0gbGFzdEluZGV4O1xuXHR9XG59O1xudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbnZhciByZWdleENsYXNzID0gJ1tvYmplY3QgUmVnRXhwXSc7XG52YXIgaGFzVG9TdHJpbmdUYWcgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBTeW1ib2wudG9TdHJpbmdUYWcgPT09ICdzeW1ib2wnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzUmVnZXgodmFsdWUpIHtcblx0aWYgKCF2YWx1ZSB8fCB0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cdGlmICghaGFzVG9TdHJpbmdUYWcpIHtcblx0XHRyZXR1cm4gdG9TdHIuY2FsbCh2YWx1ZSkgPT09IHJlZ2V4Q2xhc3M7XG5cdH1cblxuXHR2YXIgZGVzY3JpcHRvciA9IGdPUEQodmFsdWUsICdsYXN0SW5kZXgnKTtcblx0dmFyIGhhc0xhc3RJbmRleERhdGFQcm9wZXJ0eSA9IGRlc2NyaXB0b3IgJiYgaGFzKGRlc2NyaXB0b3IsICd2YWx1ZScpO1xuXHRpZiAoIWhhc0xhc3RJbmRleERhdGFQcm9wZXJ0eSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHJldHVybiB0cnlSZWdleEV4ZWNDYWxsKHZhbHVlKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaXMtcmVnZXgvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwidmFyIGJpbmQgPSByZXF1aXJlKCdmdW5jdGlvbi1iaW5kJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYmluZC5jYWxsKEZ1bmN0aW9uLmNhbGwsIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2hhcy9zcmMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgRVMgPSByZXF1aXJlKCdlcy1hYnN0cmFjdC9lczYnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBmaW5kKHByZWRpY2F0ZSkge1xuXHR2YXIgbGlzdCA9IEVTLlRvT2JqZWN0KHRoaXMpO1xuXHR2YXIgbGVuZ3RoID0gRVMuVG9JbnRlZ2VyKEVTLlRvTGVuZ3RoKGxpc3QubGVuZ3RoKSk7XG5cdGlmICghRVMuSXNDYWxsYWJsZShwcmVkaWNhdGUpKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignQXJyYXkjZmluZDogcHJlZGljYXRlIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXHR9XG5cdGlmIChsZW5ndGggPT09IDApIHtcblx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXHR9XG5cdHZhciB0aGlzQXJnID0gYXJndW1lbnRzWzFdO1xuXHRmb3IgKHZhciBpID0gMCwgdmFsdWU7IGkgPCBsZW5ndGg7IGkrKykge1xuXHRcdHZhbHVlID0gbGlzdFtpXTtcblx0XHRpZiAoRVMuQ2FsbChwcmVkaWNhdGUsIHRoaXNBcmcsIFt2YWx1ZSwgaSwgbGlzdF0pKSB7XG5cdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0fVxuXHR9XG5cdHJldHVybiB1bmRlZmluZWQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2FycmF5LnByb3RvdHlwZS5maW5kL2ltcGxlbWVudGF0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSA2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnZXRQb2x5ZmlsbCgpIHtcblx0Ly8gRGV0ZWN0IGlmIGFuIGltcGxlbWVudGF0aW9uIGV4aXN0c1xuXHQvLyBEZXRlY3QgZWFybHkgaW1wbGVtZW50YXRpb25zIHdoaWNoIHNraXBwZWQgaG9sZXMgaW4gc3BhcnNlIGFycmF5c1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc3BhcnNlLWFycmF5c1xuXHR2YXIgaW1wbGVtZW50ZWQgPSBBcnJheS5wcm90b3R5cGUuZmluZCAmJiBbLCAxXS5maW5kKGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSkgIT09IDE7XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGdsb2JhbC1yZXF1aXJlXG5cdHJldHVybiBpbXBsZW1lbnRlZCA/IEFycmF5LnByb3RvdHlwZS5maW5kIDogcmVxdWlyZSgnLi9pbXBsZW1lbnRhdGlvbicpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9hcnJheS5wcm90b3R5cGUuZmluZC9wb2x5ZmlsbC5qc1xuLy8gbW9kdWxlIGlkID0gNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbnZhciBkZWZpbmUgPSByZXF1aXJlKCdkZWZpbmUtcHJvcGVydGllcycpO1xudmFyIGdldFBvbHlmaWxsID0gcmVxdWlyZSgnLi9wb2x5ZmlsbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNoaW1BcnJheVByb3RvdHlwZUZpbmQoKSB7XG5cdHZhciBwb2x5ZmlsbCA9IGdldFBvbHlmaWxsKCk7XG5cblx0ZGVmaW5lKEFycmF5LnByb3RvdHlwZSwgeyBmaW5kOiBwb2x5ZmlsbCB9LCB7XG5cdFx0ZmluZDogZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIEFycmF5LnByb3RvdHlwZS5maW5kICE9PSBwb2x5ZmlsbDtcblx0XHR9XG5cdH0pO1xuXG5cdHJldHVybiBwb2x5ZmlsbDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYXJyYXkucHJvdG90eXBlLmZpbmQvc2hpbS5qc1xuLy8gbW9kdWxlIGlkID0gNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi1hcnJvd3MtYWx0XFxcIj48dGl0bGU+YXJyb3dzLWFsdDwvdGl0bGU+PHBhdGggZD1cXFwiTTE0MTEgNTQxbC0zNTUgMzU1IDM1NSAzNTUgMTQ0LTE0NHEyOS0zMSA3MC0xNCAzOSAxNyAzOSA1OXY0NDhxMCAyNi0xOSA0NXQtNDUgMTloLTQ0OHEtNDIgMC01OS00MC0xNy0zOSAxNC02OWwxNDQtMTQ0LTM1NS0zNTUtMzU1IDM1NSAxNDQgMTQ0cTMxIDMwIDE0IDY5LTE3IDQwLTU5IDQwaC00NDhxLTI2IDAtNDUtMTl0LTE5LTQ1di00NDhxMC00MiA0MC01OSAzOS0xNyA2OSAxNGwxNDQgMTQ0IDM1NS0zNTUtMzU1LTM1NS0xNDQgMTQ0cS0xOSAxOS00NSAxOS0xMiAwLTI0LTUtNDAtMTctNDAtNTl2LTQ0OHEwLTI2IDE5LTQ1dDQ1LTE5aDQ0OHE0MiAwIDU5IDQwIDE3IDM5LTE0IDY5bC0xNDQgMTQ0IDM1NSAzNTUgMzU1LTM1NS0xNDQtMTQ0cS0zMS0zMC0xNC02OSAxNy00MCA1OS00MGg0NDhxMjYgMCA0NSAxOXQxOSA0NXY0NDhxMCA0Mi0zOSA1OS0xMyA1LTI1IDUtMjYgMC00NS0xOXpcXFwiLz48L3N5bWJvbD48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDE3OTIgMTc5MlxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tYmFja3dhcmRcXFwiPjx0aXRsZT5iYWNrd2FyZDwvdGl0bGU+PHBhdGggZD1cXFwiTTE2ODMgMTQxcTE5LTE5IDMyLTEzdDEzIDMydjE0NzJxMCAyNi0xMyAzMnQtMzItMTNsLTcxMC03MTBxLTgtOS0xMy0xOXY3MTBxMCAyNi0xMyAzMnQtMzItMTNsLTcxMC03MTBxLTE5LTE5LTE5LTQ1dDE5LTQ1bDcxMC03MTBxMTktMTkgMzItMTN0MTMgMzJ2NzEwcTUtMTEgMTMtMTl6XFxcIi8+PC9zeW1ib2w+PHN5bWJvbCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNzkyIDE3OTJcXFwiIGlkPVxcXCJsZXBsYXllci1pY29uLWJ1bGxzZXllXFxcIj48dGl0bGU+YnVsbHNleWU8L3RpdGxlPjxwYXRoIGQ9XFxcIk0xMTUyIDg5NnEwIDEwNi03NSAxODF0LTE4MSA3NS0xODEtNzUtNzUtMTgxIDc1LTE4MSAxODEtNzUgMTgxIDc1IDc1IDE4MXptMTI4IDBxMC0xNTktMTEyLjUtMjcxLjV0LTI3MS41LTExMi41LTI3MS41IDExMi41LTExMi41IDI3MS41IDExMi41IDI3MS41IDI3MS41IDExMi41IDI3MS41LTExMi41IDExMi41LTI3MS41em0xMjggMHEwIDIxMi0xNTAgMzYydC0zNjIgMTUwLTM2Mi0xNTAtMTUwLTM2MiAxNTAtMzYyIDM2Mi0xNTAgMzYyIDE1MCAxNTAgMzYyem0xMjggMHEwLTEzMC01MS0yNDguNXQtMTM2LjUtMjA0LTIwNC0xMzYuNS0yNDguNS01MS0yNDguNSA1MS0yMDQgMTM2LjUtMTM2LjUgMjA0LTUxIDI0OC41IDUxIDI0OC41IDEzNi41IDIwNCAyMDQgMTM2LjUgMjQ4LjUgNTEgMjQ4LjUtNTEgMjA0LTEzNi41IDEzNi41LTIwNCA1MS0yNDguNXptMTI4IDBxMCAyMDktMTAzIDM4NS41dC0yNzkuNSAyNzkuNS0zODUuNSAxMDMtMzg1LjUtMTAzLTI3OS41LTI3OS41LTEwMy0zODUuNSAxMDMtMzg1LjUgMjc5LjUtMjc5LjUgMzg1LjUtMTAzIDM4NS41IDEwMyAyNzkuNSAyNzkuNSAxMDMgMzg1LjV6XFxcIi8+PC9zeW1ib2w+PHN5bWJvbCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIHZpZXdCb3g9XFxcIjAgMCA0MDAgMzgwXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi1jYXRcXFwiPjx0aXRsZT5jYXQ8L3RpdGxlPiA8cGF0aCBkPVxcXCJNIDE1MS4zNDkwNCwzMDcuMjA0NTUgTCAyNjQuMzQ5MDQsMzA3LjIwNDU1IEMgMjY0LjM0OTA0LDI5MS4xNDA5NiAyNjMuMjAyMSwyODcuOTU0NTUgMjM2LjU5OTA0LDI4Ny45NTQ1NSBDIDI0MC44NDkwNCwyNzUuMjA0NTUgMjU4LjEyNDI0LDI0NC4zNTgwOCAyNjcuNzI0MDQsMjQ0LjM1ODA4IEMgMjc2LjIxNzA3LDI0NC4zNTgwOCAyODYuMzQ5MDQsMjQ0LjgyNTkyIDI4Ni4zNDkwNCwyNjQuMjA0NTUgQyAyODYuMzQ5MDQsMjg2LjIwNDU1IDMyMy4zNzE3MSwzMjEuNjc1NDcgMzMyLjM0OTA0LDMwNy4yMDQ1NSBDIDM0NS43Mjc2OSwyODUuNjM4OTcgMzA5LjM0OTA0LDI5Mi4yMTUxNCAzMDkuMzQ5MDQsMjQwLjIwNDU1IEMgMzA5LjM0OTA0LDE2OS4wNTEzNSAzNTAuODc0MTcsMTc5LjE4MDcxIDM1MC44NzQxNywxMzkuMjA0NTUgQyAzNTAuODc0MTcsMTE5LjIwNDU1IDM0NS4zNDkwNCwxMTYuNTAzNzQgMzQ1LjM0OTA0LDEwMi4yMDQ1NSBDIDM0NS4zNDkwNCw4My4zMDY5NSAzNjEuOTk3MTcsODQuNDAzNTc3IDM1OC43NTgwNSw2OC43MzQ4NzkgQyAzNTYuNTIwNjEsNTcuOTExNjU2IDM1NC43Njk2Miw0OS4yMzE5OSAzNTMuNDY1MTYsMzYuMTQzODg5IEMgMzUyLjUzOTU5LDI2Ljg1NzMwNSAzNTIuMjQ0NTIsMTYuOTU5Mzk4IDM0Mi41OTg1NSwxNy4zNTczODIgQyAzMzEuMjY1MDUsMTcuODI0OTkyIDMyNi45NjU0OSwzNy43NzQxOSAzMDkuMzQ5MDQsMzkuMjA0NTQ5IEMgMjkxLjc2ODUxLDQwLjYzMTk5MSAyNzYuNzc4MzQsMjQuMjM4MDI4IDI2OS45NzQwNCwyNi41Nzk1NDkgQyAyNjMuMjI3MDksMjguOTAxMzM0IDI2NS4zNDkwNCw0Ny4yMDQ1NDkgMjY5LjM0OTA0LDYwLjIwNDU0OSBDIDI3NS42MzU4OCw4MC42MzY3NzEgMjg5LjM0OTA0LDEwNy4yMDQ1NSAyNjQuMzQ5MDQsMTExLjIwNDU1IEMgMjM5LjM0OTA0LDExNS4yMDQ1NSAxOTYuMzQ5MDQsMTE5LjIwNDU1IDE2NS4zNDkwNCwxNjAuMjA0NTUgQyAxMzQuMzQ5MDQsMjAxLjIwNDU1IDEzNS40OTM0MiwyNDkuMzIxMiAxMjMuMzQ5MDQsMjY0LjIwNDU1IEMgODIuNTkwNjk2LDMxNC4xNTUyOSA0MC44MjM5MTksMjkzLjY0NjI1IDQwLjgyMzkxOSwzMzUuMjA0NTUgQyA0MC44MjM5MTksMzUzLjgxMDE5IDcyLjM0OTA0NSwzNjcuMjA0NTUgNzcuMzQ5MDQ1LDM2MS4yMDQ1NSBDIDgyLjM0OTA0NSwzNTUuMjA0NTUgMzQuODYzNzY0LDMzNy4zMjU4NyA4Ny45OTU0OTIsMzE2LjIwNDU1IEMgMTMzLjM4NzExLDI5OC4xNjAxNCAxMzcuNDM5MTQsMjk0LjQ3NjYzIDE1MS4zNDkwNCwzMDcuMjA0NTUgeiBcXFwiIHN0eWxlPVxcXCJmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MXB4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjFcXFwiLz4gPC9zeW1ib2w+PHN5bWJvbCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNzkyIDE3OTJcXFwiIGlkPVxcXCJsZXBsYXllci1pY29uLWNvbW1lbnRpbmctb1xcXCI+PHRpdGxlPmNvbW1lbnRpbmctbzwvdGl0bGU+PHBhdGggZD1cXFwiTTY0MCA4OTZxMCA1My0zNy41IDkwLjV0LTkwLjUgMzcuNS05MC41LTM3LjUtMzcuNS05MC41IDM3LjUtOTAuNSA5MC41LTM3LjUgOTAuNSAzNy41IDM3LjUgOTAuNXptMzg0IDBxMCA1My0zNy41IDkwLjV0LTkwLjUgMzcuNS05MC41LTM3LjUtMzcuNS05MC41IDM3LjUtOTAuNSA5MC41LTM3LjUgOTAuNSAzNy41IDM3LjUgOTAuNXptMzg0IDBxMCA1My0zNy41IDkwLjV0LTkwLjUgMzcuNS05MC41LTM3LjUtMzcuNS05MC41IDM3LjUtOTAuNSA5MC41LTM3LjUgOTAuNSAzNy41IDM3LjUgOTAuNXptLTUxMi01MTJxLTIwNCAwLTM4MS41IDY5LjV0LTI4MiAxODcuNS0xMDQuNSAyNTVxMCAxMTIgNzEuNSAyMTMuNXQyMDEuNSAxNzUuNWw4NyA1MC0yNyA5NnEtMjQgOTEtNzAgMTcyIDE1Mi02MyAyNzUtMTcxbDQzLTM4IDU3IDZxNjkgOCAxMzAgOCAyMDQgMCAzODEuNS02OS41dDI4Mi0xODcuNSAxMDQuNS0yNTUtMTA0LjUtMjU1LTI4Mi0xODcuNS0zODEuNS02OS41em04OTYgNTEycTAgMTc0LTEyMCAzMjEuNXQtMzI2IDIzMy00NTAgODUuNXEtNzAgMC0xNDUtOC0xOTggMTc1LTQ2MCAyNDItNDkgMTQtMTE0IDIyaC01cS0xNSAwLTI3LTEwLjV0LTE2LTI3LjV2LTFxLTMtNC0uNS0xMnQyLTEwIDQuNS05LjVsNi05IDctOC41IDgtOXE3LTggMzEtMzQuNXQzNC41LTM4IDMxLTM5LjUgMzIuNS01MSAyNy01OSAyNi03NnEtMTU3LTg5LTI0Ny41LTIyMHQtOTAuNS0yODFxMC0xMzAgNzEtMjQ4LjV0MTkxLTIwNC41IDI4Ni0xMzYuNSAzNDgtNTAuNSAzNDggNTAuNSAyODYgMTM2LjUgMTkxIDIwNC41IDcxIDI0OC41elxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi1kb3dubG9hZFxcXCI+PHRpdGxlPmRvd25sb2FkPC90aXRsZT48cGF0aCBkPVxcXCJNMTM0NCAxMzQ0cTAtMjYtMTktNDV0LTQ1LTE5LTQ1IDE5LTE5IDQ1IDE5IDQ1IDQ1IDE5IDQ1LTE5IDE5LTQ1em0yNTYgMHEwLTI2LTE5LTQ1dC00NS0xOS00NSAxOS0xOSA0NSAxOSA0NSA0NSAxOSA0NS0xOSAxOS00NXptMTI4LTIyNHYzMjBxMCA0MC0yOCA2OHQtNjggMjhoLTE0NzJxLTQwIDAtNjgtMjh0LTI4LTY4di0zMjBxMC00MCAyOC02OHQ2OC0yOGg0NjVsMTM1IDEzNnE1OCA1NiAxMzYgNTZ0MTM2LTU2bDEzNi0xMzZoNDY0cTQwIDAgNjggMjh0MjggNjh6bS0zMjUtNTY5cTE3IDQxLTE0IDcwbC00NDggNDQ4cS0xOCAxOS00NSAxOXQtNDUtMTlsLTQ0OC00NDhxLTMxLTI5LTE0LTcwIDE3LTM5IDU5LTM5aDI1NnYtNDQ4cTAtMjYgMTktNDV0NDUtMTloMjU2cTI2IDAgNDUgMTl0MTkgNDV2NDQ4aDI1NnE0MiAwIDU5IDM5elxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi1lZGl0XFxcIj48dGl0bGU+ZWRpdDwvdGl0bGU+PHBhdGggZD1cXFwiTTg4OCAxMTg0bDExNi0xMTYtMTUyLTE1Mi0xMTYgMTE2djU2aDk2djk2aDU2em00NDAtNzIwcS0xNi0xNi0zMyAxbC0zNTAgMzUwcS0xNyAxNy0xIDMzdDMzLTFsMzUwLTM1MHExNy0xNyAxLTMzem04MCA1OTR2MTkwcTAgMTE5LTg0LjUgMjAzLjV0LTIwMy41IDg0LjVoLTgzMnEtMTE5IDAtMjAzLjUtODQuNXQtODQuNS0yMDMuNXYtODMycTAtMTE5IDg0LjUtMjAzLjV0MjAzLjUtODQuNWg4MzJxNjMgMCAxMTcgMjUgMTUgNyAxOCAyMyAzIDE3LTkgMjlsLTQ5IDQ5cS0xNCAxNC0zMiA4LTIzLTYtNDUtNmgtODMycS02NiAwLTExMyA0N3QtNDcgMTEzdjgzMnEwIDY2IDQ3IDExM3QxMTMgNDdoODMycTY2IDAgMTEzLTQ3dDQ3LTExM3YtMTI2cTAtMTMgOS0yMmw2NC02NHExNS0xNSAzNS03dDIwIDI5em0tOTYtNzM4bDI4OCAyODgtNjcyIDY3MmgtMjg4di0yODh6bTQ0NCAxMzJsLTkyIDkyLTI4OC0yODggOTItOTJxMjgtMjggNjgtMjh0NjggMjhsMTUyIDE1MnEyOCAyOCAyOCA2OHQtMjggNjh6XFxcIi8+PC9zeW1ib2w+PHN5bWJvbCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNzkyIDE3OTJcXFwiIGlkPVxcXCJsZXBsYXllci1pY29uLWZvcndhcmRcXFwiPjx0aXRsZT5mb3J3YXJkPC90aXRsZT48cGF0aCBkPVxcXCJNMTA5IDE2NTFxLTE5IDE5LTMyIDEzdC0xMy0zMnYtMTQ3MnEwLTI2IDEzLTMydDMyIDEzbDcxMCA3MTBxOCA4IDEzIDE5di03MTBxMC0yNiAxMy0zMnQzMiAxM2w3MTAgNzEwcTE5IDE5IDE5IDQ1dC0xOSA0NWwtNzEwIDcxMHEtMTkgMTktMzIgMTN0LTEzLTMydi03MTBxLTUgMTAtMTMgMTl6XFxcIi8+PC9zeW1ib2w+PHN5bWJvbCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNzkyIDE3OTJcXFwiIGlkPVxcXCJsZXBsYXllci1pY29uLWluZm9cXFwiPjx0aXRsZT5pbmZvPC90aXRsZT48cGF0aCBkPVxcXCJNMTIxNiAxMzQ0djEyOHEwIDI2LTE5IDQ1dC00NSAxOWgtNTEycS0yNiAwLTQ1LTE5dC0xOS00NXYtMTI4cTAtMjYgMTktNDV0NDUtMTloNjR2LTM4NGgtNjRxLTI2IDAtNDUtMTl0LTE5LTQ1di0xMjhxMC0yNiAxOS00NXQ0NS0xOWgzODRxMjYgMCA0NSAxOXQxOSA0NXY1NzZoNjRxMjYgMCA0NSAxOXQxOSA0NXptLTEyOC0xMTUydjE5MnEwIDI2LTE5IDQ1dC00NSAxOWgtMjU2cS0yNiAwLTQ1LTE5dC0xOS00NXYtMTkycTAtMjYgMTktNDV0NDUtMTloMjU2cTI2IDAgNDUgMTl0MTkgNDV6XFxcIi8+PC9zeW1ib2w+PHN5bWJvbCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNzkyIDE3OTJcXFwiIGlkPVxcXCJsZXBsYXllci1pY29uLWxpc3QtdWxcXFwiPjx0aXRsZT5saXN0LXVsPC90aXRsZT48cGF0aCBkPVxcXCJNMzg0IDE0MDhxMCA4MC01NiAxMzZ0LTEzNiA1Ni0xMzYtNTYtNTYtMTM2IDU2LTEzNiAxMzYtNTYgMTM2IDU2IDU2IDEzNnptMC01MTJxMCA4MC01NiAxMzZ0LTEzNiA1Ni0xMzYtNTYtNTYtMTM2IDU2LTEzNiAxMzYtNTYgMTM2IDU2IDU2IDEzNnptMTQwOCA0MTZ2MTkycTAgMTMtOS41IDIyLjV0LTIyLjUgOS41aC0xMjE2cS0xMyAwLTIyLjUtOS41dC05LjUtMjIuNXYtMTkycTAtMTMgOS41LTIyLjV0MjIuNS05LjVoMTIxNnExMyAwIDIyLjUgOS41dDkuNSAyMi41em0tMTQwOC05MjhxMCA4MC01NiAxMzZ0LTEzNiA1Ni0xMzYtNTYtNTYtMTM2IDU2LTEzNiAxMzYtNTYgMTM2IDU2IDU2IDEzNnptMTQwOCA0MTZ2MTkycTAgMTMtOS41IDIyLjV0LTIyLjUgOS41aC0xMjE2cS0xMyAwLTIyLjUtOS41dC05LjUtMjIuNXYtMTkycTAtMTMgOS41LTIyLjV0MjIuNS05LjVoMTIxNnExMyAwIDIyLjUgOS41dDkuNSAyMi41em0wLTUxMnYxOTJxMCAxMy05LjUgMjIuNXQtMjIuNSA5LjVoLTEyMTZxLTEzIDAtMjIuNS05LjV0LTkuNS0yMi41di0xOTJxMC0xMyA5LjUtMjIuNXQyMi41LTkuNWgxMjE2cTEzIDAgMjIuNSA5LjV0OS41IDIyLjV6XFxcIi8+PC9zeW1ib2w+PHN5bWJvbCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNzkyIDE3OTJcXFwiIGlkPVxcXCJsZXBsYXllci1pY29uLW1hZ2ljXFxcIj48dGl0bGU+bWFnaWM8L3RpdGxlPjxwYXRoIGQ9XFxcIk0xMjU0IDU4MWwyOTMtMjkzLTEwNy0xMDctMjkzIDI5M3ptNDQ3LTI5M3EwIDI3LTE4IDQ1bC0xMjg2IDEyODZxLTE4IDE4LTQ1IDE4dC00NS0xOGwtMTk4LTE5OHEtMTgtMTgtMTgtNDV0MTgtNDVsMTI4Ni0xMjg2cTE4LTE4IDQ1LTE4dDQ1IDE4bDE5OCAxOThxMTggMTggMTggNDV6bS0xMzUxLTE5MGw5OCAzMC05OCAzMC0zMCA5OC0zMC05OC05OC0zMCA5OC0zMCAzMC05OHptMzUwIDE2MmwxOTYgNjAtMTk2IDYwLTYwIDE5Ni02MC0xOTYtMTk2LTYwIDE5Ni02MCA2MC0xOTZ6bTkzMCA0NzhsOTggMzAtOTggMzAtMzAgOTgtMzAtOTgtOTgtMzAgOTgtMzAgMzAtOTh6bS02NDAtNjQwbDk4IDMwLTk4IDMwLTMwIDk4LTMwLTk4LTk4LTMwIDk4LTMwIDMwLTk4elxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi1wYXVzZVxcXCI+PHRpdGxlPnBhdXNlPC90aXRsZT48cGF0aCBkPVxcXCJNMTY2NCAxOTJ2MTQwOHEwIDI2LTE5IDQ1dC00NSAxOWgtNTEycS0yNiAwLTQ1LTE5dC0xOS00NXYtMTQwOHEwLTI2IDE5LTQ1dDQ1LTE5aDUxMnEyNiAwIDQ1IDE5dDE5IDQ1em0tODk2IDB2MTQwOHEwIDI2LTE5IDQ1dC00NSAxOWgtNTEycS0yNiAwLTQ1LTE5dC0xOS00NXYtMTQwOHEwLTI2IDE5LTQ1dDQ1LTE5aDUxMnEyNiAwIDQ1IDE5dDE5IDQ1elxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi1wbGFuZVxcXCI+PHRpdGxlPnBsYW5lPC90aXRsZT48cGF0aCBkPVxcXCJNMTU2OCAxNjBxNDQgNTIgMTIgMTQ4dC0xMDggMTcybC0xNjEgMTYxIDE2MCA2OTZxNSAxOS0xMiAzM2wtMTI4IDk2cS03IDYtMTkgNi00IDAtNy0xLTE1LTMtMjEtMTZsLTI3OS01MDgtMjU5IDI1OSA1MyAxOTRxNSAxNy04IDMxbC05NiA5NnEtOSA5LTIzIDloLTJxLTE1LTItMjQtMTNsLTE4OS0yNTItMjUyLTE4OXEtMTEtNy0xMy0yMy0xLTEzIDktMjVsOTYtOTdxOS05IDIzLTkgNiAwIDggMWwxOTQgNTMgMjU5LTI1OS01MDgtMjc5cS0xNC04LTE3LTI0LTItMTYgOS0yN2wxMjgtMTI4cTE0LTEzIDMwLThsNjY1IDE1OSAxNjAtMTYwcTc2LTc2IDE3Mi0xMDh0MTQ4IDEyelxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi1wbGF5XFxcIj48dGl0bGU+cGxheTwvdGl0bGU+PHBhdGggZD1cXFwiTTE1NzYgOTI3bC0xMzI4IDczOHEtMjMgMTMtMzkuNSAzdC0xNi41LTM2di0xNDcycTAtMjYgMTYuNS0zNnQzOS41IDNsMTMyOCA3MzhxMjMgMTMgMjMgMzF0LTIzIDMxelxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi1wbHVzXFxcIj48dGl0bGU+cGx1czwvdGl0bGU+PHBhdGggZD1cXFwiTTE2MDAgNzM2djE5MnEwIDQwLTI4IDY4dC02OCAyOGgtNDE2djQxNnEwIDQwLTI4IDY4dC02OCAyOGgtMTkycS00MCAwLTY4LTI4dC0yOC02OHYtNDE2aC00MTZxLTQwIDAtNjgtMjh0LTI4LTY4di0xOTJxMC00MCAyOC02OHQ2OC0yOGg0MTZ2LTQxNnEwLTQwIDI4LTY4dDY4LTI4aDE5MnE0MCAwIDY4IDI4dDI4IDY4djQxNmg0MTZxNDAgMCA2OCAyOHQyOCA2OHpcXFwiLz48L3N5bWJvbD48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDE3OTIgMTc5MlxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tcmVkb1xcXCI+PHRpdGxlPnJlZG88L3RpdGxlPjxwYXRoIGQ9XFxcIk0xNjY0IDI1NnY0NDhxMCAyNi0xOSA0NXQtNDUgMTloLTQ0OHEtNDIgMC01OS00MC0xNy0zOSAxNC02OWwxMzgtMTM4cS0xNDgtMTM3LTM0OS0xMzctMTA0IDAtMTk4LjUgNDAuNXQtMTYzLjUgMTA5LjUtMTA5LjUgMTYzLjUtNDAuNSAxOTguNSA0MC41IDE5OC41IDEwOS41IDE2My41IDE2My41IDEwOS41IDE5OC41IDQwLjVxMTE5IDAgMjI1LTUydDE3OS0xNDdxNy0xMCAyMy0xMiAxNCAwIDI1IDlsMTM3IDEzOHE5IDggOS41IDIwLjV0LTcuNSAyMi41cS0xMDkgMTMyLTI2NCAyMDQuNXQtMzI3IDcyLjVxLTE1NiAwLTI5OC02MXQtMjQ1LTE2NC0xNjQtMjQ1LTYxLTI5OCA2MS0yOTggMTY0LTI0NSAyNDUtMTY0IDI5OC02MXExNDcgMCAyODQuNSA1NS41dDI0NC41IDE1Ni41bDEzMC0xMjlxMjktMzEgNzAtMTQgMzkgMTcgMzkgNTl6XFxcIi8+PC9zeW1ib2w+PHN5bWJvbCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNzkyIDE3OTJcXFwiIGlkPVxcXCJsZXBsYXllci1pY29uLXJlZnJlc2hcXFwiPjx0aXRsZT5yZWZyZXNoPC90aXRsZT48cGF0aCBkPVxcXCJNMTYzOSAxMDU2cTAgNS0xIDctNjQgMjY4LTI2OCA0MzQuNXQtNDc4IDE2Ni41cS0xNDYgMC0yODIuNS01NXQtMjQzLjUtMTU3bC0xMjkgMTI5cS0xOSAxOS00NSAxOXQtNDUtMTktMTktNDV2LTQ0OHEwLTI2IDE5LTQ1dDQ1LTE5aDQ0OHEyNiAwIDQ1IDE5dDE5IDQ1LTE5IDQ1bC0xMzcgMTM3cTcxIDY2IDE2MSAxMDJ0MTg3IDM2cTEzNCAwIDI1MC02NXQxODYtMTc5cTExLTE3IDUzLTExNyA4LTIzIDMwLTIzaDE5MnExMyAwIDIyLjUgOS41dDkuNSAyMi41em0yNS04MDB2NDQ4cTAgMjYtMTkgNDV0LTQ1IDE5aC00NDhxLTI2IDAtNDUtMTl0LTE5LTQ1IDE5LTQ1bDEzOC0xMzhxLTE0OC0xMzctMzQ5LTEzNy0xMzQgMC0yNTAgNjV0LTE4NiAxNzlxLTExIDE3LTUzIDExNy04IDIzLTMwIDIzaC0xOTlxLTEzIDAtMjIuNS05LjV0LTkuNS0yMi41di03cTY1LTI2OCAyNzAtNDM0LjV0NDgwLTE2Ni41cTE0NiAwIDI4NCA1NS41dDI0NSAxNTYuNWwxMzAtMTI5cTE5LTE5IDQ1LTE5dDQ1IDE5IDE5IDQ1elxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi10cmFzaFxcXCI+PHRpdGxlPnRyYXNoPC90aXRsZT48cGF0aCBkPVxcXCJNNzA0IDEzNzZ2LTcwNHEwLTE0LTktMjN0LTIzLTloLTY0cS0xNCAwLTIzIDl0LTkgMjN2NzA0cTAgMTQgOSAyM3QyMyA5aDY0cTE0IDAgMjMtOXQ5LTIzem0yNTYgMHYtNzA0cTAtMTQtOS0yM3QtMjMtOWgtNjRxLTE0IDAtMjMgOXQtOSAyM3Y3MDRxMCAxNCA5IDIzdDIzIDloNjRxMTQgMCAyMy05dDktMjN6bTI1NiAwdi03MDRxMC0xNC05LTIzdC0yMy05aC02NHEtMTQgMC0yMyA5dC05IDIzdjcwNHEwIDE0IDkgMjN0MjMgOWg2NHExNCAwIDIzLTl0OS0yM3ptLTU0NC05OTJoNDQ4bC00OC0xMTdxLTctOS0xNy0xMWgtMzE3cS0xMCAyLTE3IDExem05MjggMzJ2NjRxMCAxNC05IDIzdC0yMyA5aC05NnY5NDhxMCA4My00NyAxNDMuNXQtMTEzIDYwLjVoLTgzMnEtNjYgMC0xMTMtNTguNXQtNDctMTQxLjV2LTk1MmgtOTZxLTE0IDAtMjMtOXQtOS0yM3YtNjRxMC0xNCA5LTIzdDIzLTloMzA5bDcwLTE2N3ExNS0zNyA1NC02M3Q3OS0yNmgzMjBxNDAgMCA3OSAyNnQ1NCA2M2w3MCAxNjdoMzA5cTE0IDAgMjMgOXQ5IDIzelxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi11bmRvXFxcIj48dGl0bGU+dW5kbzwvdGl0bGU+PHBhdGggZD1cXFwiTTE2NjQgODk2cTAgMTU2LTYxIDI5OHQtMTY0IDI0NS0yNDUgMTY0LTI5OCA2MXEtMTcyIDAtMzI3LTcyLjV0LTI2NC0yMDQuNXEtNy0xMC02LjUtMjIuNXQ4LjUtMjAuNWwxMzctMTM4cTEwLTkgMjUtOSAxNiAyIDIzIDEyIDczIDk1IDE3OSAxNDd0MjI1IDUycTEwNCAwIDE5OC41LTQwLjV0MTYzLjUtMTA5LjUgMTA5LjUtMTYzLjUgNDAuNS0xOTguNS00MC41LTE5OC41LTEwOS41LTE2My41LTE2My41LTEwOS41LTE5OC41LTQwLjVxLTk4IDAtMTg4IDM1LjV0LTE2MCAxMDEuNWwxMzcgMTM4cTMxIDMwIDE0IDY5LTE3IDQwLTU5IDQwaC00NDhxLTI2IDAtNDUtMTl0LTE5LTQ1di00NDhxMC00MiA0MC01OSAzOS0xNyA2OSAxNGwxMzAgMTI5cTEwNy0xMDEgMjQ0LjUtMTU2LjV0Mjg0LjUtNTUuNXExNTYgMCAyOTggNjF0MjQ1IDE2NCAxNjQgMjQ1IDYxIDI5OHpcXFwiLz48L3N5bWJvbD48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDE3OTIgMTc5MlxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tdm9sdW1lLWRvd25cXFwiPjx0aXRsZT52b2x1bWUtZG93bjwvdGl0bGU+PHBhdGggZD1cXFwiTTEwODggMzUydjEwODhxMCAyNi0xOSA0NXQtNDUgMTktNDUtMTlsLTMzMy0zMzNoLTI2MnEtMjYgMC00NS0xOXQtMTktNDV2LTM4NHEwLTI2IDE5LTQ1dDQ1LTE5aDI2MmwzMzMtMzMzcTE5LTE5IDQ1LTE5dDQ1IDE5IDE5IDQ1em0zODQgNTQ0cTAgNzYtNDIuNSAxNDEuNXQtMTEyLjUgOTMuNXEtMTAgNS0yNSA1LTI2IDAtNDUtMTguNXQtMTktNDUuNXEwLTIxIDEyLTM1LjV0MjktMjUgMzQtMjMgMjktMzUuNSAxMi01Ny0xMi01Ny0yOS0zNS41LTM0LTIzLTI5LTI1LTEyLTM1LjVxMC0yNyAxOS00NS41dDQ1LTE4LjVxMTUgMCAyNSA1IDcwIDI3IDExMi41IDkzdDQyLjUgMTQyelxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi12b2x1bWUtb2ZmXFxcIj48dGl0bGU+dm9sdW1lLW9mZjwvdGl0bGU+PHBhdGggZD1cXFwiTTEyODAgMzUydjEwODhxMCAyNi0xOSA0NXQtNDUgMTktNDUtMTlsLTMzMy0zMzNoLTI2MnEtMjYgMC00NS0xOXQtMTktNDV2LTM4NHEwLTI2IDE5LTQ1dDQ1LTE5aDI2MmwzMzMtMzMzcTE5LTE5IDQ1LTE5dDQ1IDE5IDE5IDQ1elxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi12b2x1bWUtdXBcXFwiPjx0aXRsZT52b2x1bWUtdXA8L3RpdGxlPjxwYXRoIGQ9XFxcIk04MzIgMzUydjEwODhxMCAyNi0xOSA0NXQtNDUgMTktNDUtMTlsLTMzMy0zMzNoLTI2MnEtMjYgMC00NS0xOXQtMTktNDV2LTM4NHEwLTI2IDE5LTQ1dDQ1LTE5aDI2MmwzMzMtMzMzcTE5LTE5IDQ1LTE5dDQ1IDE5IDE5IDQ1em0zODQgNTQ0cTAgNzYtNDIuNSAxNDEuNXQtMTEyLjUgOTMuNXEtMTAgNS0yNSA1LTI2IDAtNDUtMTguNXQtMTktNDUuNXEwLTIxIDEyLTM1LjV0MjktMjUgMzQtMjMgMjktMzUuNSAxMi01Ny0xMi01Ny0yOS0zNS41LTM0LTIzLTI5LTI1LTEyLTM1LjVxMC0yNyAxOS00NS41dDQ1LTE4LjVxMTUgMCAyNSA1IDcwIDI3IDExMi41IDkzdDQyLjUgMTQyem0yNTYgMHEwIDE1My04NSAyODIuNXQtMjI1IDE4OC41cS0xMyA1LTI1IDUtMjcgMC00Ni0xOXQtMTktNDVxMC0zOSAzOS01OSA1Ni0yOSA3Ni00NCA3NC01NCAxMTUuNS0xMzUuNXQ0MS41LTE3My41LTQxLjUtMTczLjUtMTE1LjUtMTM1LjVxLTIwLTE1LTc2LTQ0LTM5LTIwLTM5LTU5IDAtMjYgMTktNDV0NDUtMTlxMTMgMCAyNiA1IDE0MCA1OSAyMjUgMTg4LjV0ODUgMjgyLjV6bTI1NiAwcTAgMjMwLTEyNyA0MjIuNXQtMzM4IDI4My41cS0xMyA1LTI2IDUtMjYgMC00NS0xOXQtMTktNDVxMC0zNiAzOS01OSA3LTQgMjIuNS0xMC41dDIyLjUtMTAuNXE0Ni0yNSA4Mi01MSAxMjMtOTEgMTkyLTIyN3Q2OS0yODktNjktMjg5LTE5Mi0yMjdxLTM2LTI2LTgyLTUxLTctNC0yMi41LTEwLjV0LTIyLjUtMTAuNXEtMzktMjMtMzktNTkgMC0yNiAxOS00NXQ0NS0xOXExMyAwIDI2IDUgMjExIDkxIDMzOCAyODMuNXQxMjcgNDIyLjV6XFxcIi8+PC9zeW1ib2w+PC9zdmc+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Rpc3Qvc3ZnL3N2Zy1kZWZzLnN2Z1xuLy8gbW9kdWxlIGlkID0gNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJleHBvcnQgY29uc3QgcHJlc2V0ID0ge1xuXHRvcHRpb25zIDoge1xuXHRcdHdpZHRoIDogJzEwMCUnLFxuXHRcdGNvbnRyb2xzIDoge1xuXHRcdFx0Y29tbW9uIDogW1xuXHRcdFx0XHRbJ3BsYXknLCAndm9sdW1lJywgJ2RpdmlkZXInLCAndGltZWxpbmUnLCAnZGl2aWRlcicsICdmdWxsc2NyZWVuJ10sXG5cdFx0XHRcdFsncmF0ZScsICdkaXZpZGVyJywgJ2JhY2t3YXJkJywgJ2RpdmlkZXInLCAnc291cmNlJywgJ2RpdmlkZXInLCAnZG93bmxvYWQnXVxuXHRcdFx0XSxcblx0XHRcdGZ1bGxzY3JlZW4gOiBbXG5cdFx0XHRcdFsncGxheScsICd2b2x1bWUnLCAnZGl2aWRlcicsICd0aW1lbGluZScsICdkaXZpZGVyJywgJ3JhdGUnLCAnZGl2aWRlcicsICdiYWNrd2FyZCcsICdkaXZpZGVyJywgJ3NvdXJjZScsICdkaXZpZGVyJywgJ2Rvd25sb2FkJywgJ2RpdmlkZXInLCAnZnVsbHNjcmVlbiddXG5cdFx0XHRdXG5cdFx0fVxuXHR9LFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL3ByZXNldHMvdnBzLmpzIiwiY29uc3QgY29udHJvbHMgPSBbJ3BsYXknLCAndm9sdW1lJywgJ2RpdmlkZXInLCAndGltZWxpbmUnLCAnZGl2aWRlcicsICdyYXRlJywgJ2Rvd25sb2FkJywgJ2Z1bGxzY3JlZW4nXTtcblxuZXhwb3J0IGNvbnN0IHByZXNldCA9IHtcblx0b3B0aW9ucyA6IHtcblx0XHRjb250cm9scyA6IHtcblx0XHRcdGNvbW1vbiA6IFtcblx0XHRcdFx0Y29udHJvbHMsXG5cdFx0XHRcdFtdXG5cdFx0XHRdLFxuXHRcdFx0ZnVsbHNjcmVlbiA6IFtcblx0XHRcdFx0Y29udHJvbHNcblx0XHRcdF1cblx0XHR9XG5cdH0sXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvcHJlc2V0cy9zaW1wbGUuanMiLCJleHBvcnQgY29uc3QgcHJlc2V0ID0ge1xuXHRvcHRpb25zIDoge1xuXHRcdHdpZHRoIDogJzEwMCUnLFxuXHRcdGNvbnRyb2xzIDoge1xuXHRcdFx0Y29tbW9uIDogW1xuXHRcdFx0XHRbJ3BsYXknLCAndm9sdW1lJywgJ3RpbWVsaW5lJywgJ3JhdGUnLCAnc291cmNlJywgJ2RpdmlkZXInLCAnZG93bmxvYWQnLCAnZnVsbHNjcmVlbiddLFxuXHRcdFx0XHRbXVxuXHRcdFx0XSxcblx0XHRcdGZ1bGxzY3JlZW4gOiBbXG5cdFx0XHRcdFsncGxheScsICd2b2x1bWUnLCAndGltZWxpbmUnLCAncmF0ZScsICdzb3VyY2UnLCAnZGl2aWRlcicsICdkb3dubG9hZCcsICdmdWxsc2NyZWVuJ10sXG5cdFx0XHRdXG5cdFx0fVxuXHR9LFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL3ByZXNldHMvc21zLmpzIiwiZXhwb3J0IGNvbnN0IHByZXNldCA9IHtcblx0b3B0aW9ucyA6IHtcblx0XHR3aWR0aCA6ICcxMDAlJyxcblx0XHRjb250cm9scyA6IHtcblx0XHRcdGNvbW1vbiA6IFtcblx0XHRcdFx0WydwbGF5JywgJ3ZvbHVtZScsICd0aW1lbGluZScsICdyYXRlJywgJ3NvdXJjZScsICdkaXZpZGVyJywgJ2Z1bGxzY3JlZW4nXSxcblx0XHRcdFx0W11cblx0XHRcdF0sXG5cdFx0XHRmdWxsc2NyZWVuIDogW1xuXHRcdFx0XHRbJ3BsYXknLCAndm9sdW1lJywgJ3RpbWVsaW5lJywgJ3JhdGUnLCAnc291cmNlJywgJ2RpdmlkZXInLCAnZnVsbHNjcmVlbiddLFxuXHRcdFx0XVxuXHRcdH1cblx0fSxcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9wcmVzZXRzL2NvbXByZXNzZWQuanMiLCJleHBvcnQgY29uc3QgcHJlc2V0ID0ge1xuXHRvcHRpb25zIDoge1xuXHRcdHdpZHRoIDogJzEwMCUnLFxuXG5cdFx0Y29udHJvbHNPcHRpb25zIDoge1xuXHRcdFx0Y29tbW9uIDoge1xuXHRcdFx0XHRhbGlnbiA6IFsnanVzdGlmeSddXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRjb250cm9scyA6IHtcblx0XHRcdGNvbW1vbiA6IFtcblx0XHRcdFx0WydwbGF5JywgJ3RpbWVsaW5lJywgJ3JhdGUnLCAndm9sdW1lJywgJ3NvdXJjZScsICdmdWxsc2NyZWVuJ10sXG5cdFx0XHRdLFxuXHRcdFx0ZnVsbHNjcmVlbiA6IFtcblx0XHRcdFx0WydwbGF5JywgJ3RpbWVsaW5lJywgJ3JhdGUnLCAndm9sdW1lJywgJ3NvdXJjZScsICdmdWxsc2NyZWVuJ11cblx0XHRcdF0sXG5cdFx0XHRtaW5pIDogW1xuXHRcdFx0XHRbJ3BsYXknLCAndGltZWxpbmUnLCAndm9sdW1lJywgJ2Z1bGxzY3JlZW4nXVxuXHRcdFx0XSxcblx0XHR9XG5cdH0sXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvcHJlc2V0cy8yMDM1LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==