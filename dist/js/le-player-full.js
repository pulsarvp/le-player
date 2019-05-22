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

	module.exports = __webpack_require__(70);


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
				this.toggleMuted();
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
			controls: {
				common: [['play', 'timeline', 'rate', 'volume', 'source', 'fullscreen'], []],
				fullscreen: [['play', 'timeline', 'rate', 'volume', 'source', 'fullscreen']]
			}
		}
	};

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(1);
	
	__webpack_require__(71);
	
	__webpack_require__(72);
	
	__webpack_require__(73);

/***/ }),
/* 71 */
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
/* 72 */
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
/* 73 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOWFlMDRmODRhMmU4NjdmYjI5NDQ/MDVkYiIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvbGUtcGxheWVyLmpzPzZkMDIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiJFwiPzU3YWEiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvQ29udHJvbC5qcz84MWNjIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL0NvbXBvbmVudC5qcz9mNTc4Iiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL0ljb24uanM/N2RlZiIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9QbGF5QnV0dG9uLmpzP2U3MmIiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL3V0aWxzL2luZGV4LmpzPzY1ZDkiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL3V0aWxzL2Jyb3dzZXIuanM/MDY0NSIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9TcGxhc2hJY29uLmpzP2E5ZjEiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvVGltZWxpbmUvVGltZS5qcz8xZDI4Iiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL0NvbnRyb2xDb2xsZWN0aW9uLmpzPzE0NWEiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvU2VjdGlvbnMuanM/Y2Q2NyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9FcnJvckRpc3BsYXkuanM/NTRhMSIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9Qb3N0ZXIuanM/MzJmNSIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvRnVsbHNjcmVlbkFwaS5qcz8yMmJjIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy91dGlscy9jb29raWUuanM/YTAzZiIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvTWVkaWFFcnJvci5qcz9kM2UzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL1BsYXlDb250cm9sLmpzPzEyNTUiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvVm9sdW1lQ29udHJvbC5qcz9hYTIwIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL0NvbnRyb2xEcm9wZG93bi5qcz84NjE4Iiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL1RpbWVsaW5lL1RpbWVsaW5lQ29udHJvbC5qcz9iZmRkIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL0NvbnRyb2xUZXh0LmpzPzcwMjIiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvVGltZWxpbmUvQnVmZmVyZWRSYW5nZXMuanM/N2Q0MCIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9UaW1lbGluZS9NYXJrZXIuanM/ZTM5MiIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9TZWN0aW9uQ29udHJvbC5qcz9mMDdiIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL0NvbnRyb2xDaGVja2JveC5qcz9iMmI3Iiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL0Z1bGxzY3JlZW5Db250cm9sLmpzPzVkYjYiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvUmF0ZUNvbnRyb2wuanM/MWU5YiIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9CYWNrd2FyZENvbnRyb2wuanM/ODc2YSIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9Tb3VyY2VDb250cm9sLmpzP2QxZWYiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvQ29udHJvbENvbnRhaW5lci5qcz8zNzM1Iiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL1N1YnRpdGxlQ29udHJvbC5qcz80MTc5Iiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL0Rvd25sb2FkQ29udHJvbC5qcz83ZTg2Iiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL0tleWJpbmRpbmdJbmZvQ29udHJvbC5qcz81MDRkIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL1RpbWVJbmZvQ29udHJvbC5qcz9mNmYzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9lbnRpdHkvSHRtbDUuanM/YmQ3MyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvZW50aXR5L0VudGl0eS5qcz9mMWQyIiwid2VicGFjazovLy8uL34vYXJyYXkucHJvdG90eXBlLmZpbmQvaW5kZXguanM/N2M0MiIsIndlYnBhY2s6Ly8vLi9+L2RlZmluZS1wcm9wZXJ0aWVzL2luZGV4LmpzP2U0ZjgiLCJ3ZWJwYWNrOi8vLy4vfi9vYmplY3Qta2V5cy9pbmRleC5qcz9hNTNiIiwid2VicGFjazovLy8uL34vb2JqZWN0LWtleXMvaXNBcmd1bWVudHMuanM/ZmI5NCIsIndlYnBhY2s6Ly8vLi9+L2ZvcmVhY2gvaW5kZXguanM/ZjdhZCIsIndlYnBhY2s6Ly8vLi9+L2VzLWFic3RyYWN0L2VzNi5qcz9hMzEzIiwid2VicGFjazovLy8uL34vZXMtYWJzdHJhY3QvaGVscGVycy9pc05hTi5qcz83MWMyIiwid2VicGFjazovLy8uL34vZXMtYWJzdHJhY3QvaGVscGVycy9pc0Zpbml0ZS5qcz84NzA1Iiwid2VicGFjazovLy8uL34vZXMtYWJzdHJhY3QvaGVscGVycy9hc3NpZ24uanM/ZTY5ZSIsIndlYnBhY2s6Ly8vLi9+L2VzLWFic3RyYWN0L2hlbHBlcnMvc2lnbi5qcz9kMGNhIiwid2VicGFjazovLy8uL34vZXMtYWJzdHJhY3QvaGVscGVycy9tb2QuanM/MTkxMyIsIndlYnBhY2s6Ly8vLi9+L2VzLWFic3RyYWN0L2hlbHBlcnMvaXNQcmltaXRpdmUuanM/ODczMyIsIndlYnBhY2s6Ly8vLi9+L2VzLXRvLXByaW1pdGl2ZS9lczYuanM/ODk1OSIsIndlYnBhY2s6Ly8vLi9+L2VzLXRvLXByaW1pdGl2ZS9oZWxwZXJzL2lzUHJpbWl0aXZlLmpzP2Q5MGIiLCJ3ZWJwYWNrOi8vLy4vfi9pcy1jYWxsYWJsZS9pbmRleC5qcz81YmIwIiwid2VicGFjazovLy8uL34vaXMtZGF0ZS1vYmplY3QvaW5kZXguanM/MTIzZSIsIndlYnBhY2s6Ly8vLi9+L2lzLXN5bWJvbC9pbmRleC5qcz8yOTg0Iiwid2VicGFjazovLy8uL34vZnVuY3Rpb24tYmluZC9pbmRleC5qcz82YmJlIiwid2VicGFjazovLy8uL34vZnVuY3Rpb24tYmluZC9pbXBsZW1lbnRhdGlvbi5qcz9jMzJkIiwid2VicGFjazovLy8uL34vZXMtYWJzdHJhY3QvZXM1LmpzP2NjMjAiLCJ3ZWJwYWNrOi8vLy4vfi9lcy10by1wcmltaXRpdmUvZXM1LmpzP2I3ZGEiLCJ3ZWJwYWNrOi8vLy4vfi9pcy1yZWdleC9pbmRleC5qcz9iMjcwIiwid2VicGFjazovLy8uL34vaGFzL3NyYy9pbmRleC5qcz81ZDA2Iiwid2VicGFjazovLy8uL34vYXJyYXkucHJvdG90eXBlLmZpbmQvaW1wbGVtZW50YXRpb24uanM/MDY5MCIsIndlYnBhY2s6Ly8vLi9+L2FycmF5LnByb3RvdHlwZS5maW5kL3BvbHlmaWxsLmpzP2Q2ZTQiLCJ3ZWJwYWNrOi8vLy4vfi9hcnJheS5wcm90b3R5cGUuZmluZC9zaGltLmpzPzlhZDciLCJ3ZWJwYWNrOi8vLy4vZGlzdC9zdmcvc3ZnLWRlZnMuc3ZnP2E0YWEiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL3ByZXNldHMvdnBzLmpzP2IzMGQiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL3ByZXNldHMvc2ltcGxlLmpzPzZiMzIiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL3ByZXNldHMvc21zLmpzPzdjNzAiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL3ByZXNldHMvY29tcHJlc3NlZC5qcz9kZTBiIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9wcmVzZXRzLzIwMzUuanM/MmQyMCIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvbGUtcGxheWVyLWZ1bGwuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL3BsdWdpbnMvbGUtcGxheWVyLWdhLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9wbHVnaW5zL2xlLXBsYXllci15b3V0dWJlLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9wbHVnaW5zL2xlLXBsYXllci1uZXh0LmpzIl0sIm5hbWVzIjpbInJlZ2lzdGVyQ29udHJvbCIsImVsZW1lbnQiLCJhZGRDbGFzcyIsImV4Y2x1ZGVBcnJheSIsInNvdXJjZSIsImRpc3QiLCJyZXN1bHQiLCJjb25jYXQiLCJmb3JFYWNoIiwiaW5kZXgiLCJpbmRleE9mIiwiaXRlbSIsInNwbGljZSIsImRlZmF1bHRPcHRpb25zIiwiZW50aXR5IiwiYXV0b3BsYXkiLCJoZWlnaHQiLCJsb29wIiwibXV0ZWQiLCJwcmVsb2FkIiwicG9zdGVyIiwic3ZnUGF0aCIsImlubmFjdGl2aXR5VGltZW91dCIsInJhdGUiLCJzdGVwIiwibWluIiwibWF4IiwiZGVmYXVsdCIsInBsYXliYWNrIiwic2hvcnQiLCJtZWRpdW0iLCJsb25nIiwiY29udHJvbHMiLCJjb21tb24iLCJmdWxsc2NyZWVuIiwibWluaSIsImNvbnRyb2xzT3B0aW9ucyIsImFsaWduIiwidm9sdW1lIiwibXV0ZWxpbWl0Iiwia2V5QmluZGluZyIsImtleSIsImluZm8iLCJkZXNjcmlwdGlvbiIsImZuIiwicGxheWVyIiwidmlkZW8iLCJ0b2dnbGVQbGF5IiwiY3VycmVudFRpbWUiLCJvcHRpb25zIiwic3BsYXNoSWNvbiIsInNob3ciLCJzaGlmdEtleSIsInNlY3Rpb25zIiwicHJldiIsIm5leHQiLCJjYWxjVm9sdW1lSWNvbiIsInRvZ2dsZUZ1bGxzY3JlZW4iLCJwbHVnaW5zIiwibWluaXBsYXllciIsIm9uUGxheWVySW5pdGVkIiwiUGxheWVyIiwiY3JlYXRlRWxlbWVudCIsIl9lbGVtZW50IiwiaW5uZXJFbGVtZW50IiwiX3VzZXJPcHRpb25zIiwiX2luaXRPcHRpb25zIiwiX2xvYWRTVkdTcHJpdGUiLCJkZWZhdWx0U3ByaXRlIiwiX3ZpZXciLCJsb2FkRW50aXR5IiwiY3R4IiwiX2luaXRDb250cm9scyIsIl9kYmxjbGlja1RpbWVvdXQiLCJfaW5pdFNlY3Rpb25zIiwidGhlbiIsImRhdGEiLCJ0cmlnZ2VyIiwiX2luaXRQbHVnaW5zIiwiX2xpc3RlbkhvdEtleXMiLCJfdXNlckFjdGl2aXR5IiwiX2xpc3RlblVzZXJBY3Rpdml0eSIsIl93YWl0aW5nVGltZW91dHMiLCJvbiIsImV2ZW50TmFtZSIsIm9uZSIsInJlbW92ZUNsYXNzIiwidGltZSIsImR1cmF0aW9uIiwiZXJyb3IiLCJfc3RhcnRXYWl0aW5nIiwiX3N0b3BXYXl0aW5nIiwiZSIsInVybCIsInBsYXkiLCJwYXVzZWQiLCJwYXVzZSIsImNvZGUiLCJpbml0Iiwic3JjIiwiX29uRnVsbHNjcmVlbkNoYW5nZSIsImJpbmQiLCJfb25DbGljayIsIl9vbkRiY2xpY2siLCJfb25Jbml0ZWQiLCJfb25QbGF5IiwiX29uUGF1c2UiLCJkb2N1bWVudCIsImZ1bGxzY3JlZW5jaGFuZ2UiLCJfb25FbnRpdHlGdWxsc2NyZW5DaGFuZ2UiLCJuYW1lIiwiRW50aXR5IiwiZ2V0Q29tcG9uZW50IiwiX2VudGl0eSIsImxvYWQiLCJ2aWV3IiwiYXJncyIsInF1YWxpdHkiLCJpc1BhdXNlZCIsInBsYXliYWNrUmF0ZSIsImRmZCIsIkRlZmVycmVkIiwiX2RhdGEiLCJ1bmRlZmluZWQiLCJyZXNvbHZlIiwicHJvbWlzZSIsImFqYXgiLCJtZXRob2QiLCJkYXRhVHlwZSIsImdldERhdGEiLCJmc0FwaSIsInJlcXVlc3RGdWxsc2NyZWVuIiwic3VwcG9ydHNGdWxsU2NyZWVuIiwiZW50ZXJGdWxsc2NyZWVuIiwiZXhpdEZ1bGxzY3JlZW4iLCJ3aWR0aCIsImxlbmd0aCIsIm5ld1NlY3Rpb25zIiwiaSIsImVuZFNlY3Rpb24iLCJiZWdpbiIsImVuZCIsImF0dHIiLCJjc3MiLCJlcnJvckRpc3BsYXkiLCJwbGF5QnV0dG9uIiwibG9hZGVyIiwiYXBwZW5kIiwiaWNvbk5hbWUiLCJjbGFzc05hbWUiLCJ2aWRlb0NvbnRhaW5lciIsImxhc3RUaW1lciIsInZpZGVvSW5mbyIsImNvbnNvbGUiLCJ3YXJuIiwiaW5mb0VsZW1lbnQiLCJodG1sIiwidGl0bGUiLCJzZWN0aW9uQ29udGFpbmVyIiwic2VjdGlvbnNDb250YWluZXIiLCJiZWZvcmUiLCJhdHRyT3B0aW9ucyIsInJlZHVjZSIsIm9iaiIsInZhbCIsInNvdXJjZXMiLCJmaW5kIiwiZWFjaCIsInZhbHVlIiwiZmxhZyIsInZpc2libGUiLCJvdXRzaWRlU2VjdGlvbnMiLCJfb3B0aW9uc0Zyb21FbGVtZW50IiwicHJlc2V0T3B0aW9ucyIsInByZXNldCIsImdldFByZXNldCIsImV4dGVuZCIsIkFycmF5IiwiaXNBcnJheSIsImV4Y2x1ZGVDb250cm9scyIsImhhc093blByb3BlcnR5IiwiY29udHJvbENvbGxlY3Rpb24iLCJyb3ciLCJpbml0T3B0aW9ucyIsImFjdGl2ZSIsImlzS2V5QmluZGluZyIsImJpbmRpbmciLCJ3aGljaCIsImN0cmxLZXkiLCJwcmV2ZW50RGVmYXVsdCIsInJlamVjdCIsImdldFNlY3Rpb25EYXRhIiwiZG9uZSIsImlzU2VjdGlvbk91dHNpZGUiLCJfY29tcGxldGVTZWN0aW9ucyIsIml0ZW1zIiwiZnVsbHNjcmVlbk9ubHkiLCJoaWRlU2Nyb2xsIiwicGx1Z2luT3B0aW9ucyIsIm1vdXNlSW5Qcm9ncmVzcyIsImxhc3RNb3ZlWCIsImxhc3RNb3ZlWSIsIm9uTW91c2VNb3ZlIiwic2NyZWVuWCIsInNjcmVlblkiLCJvbk1vdXNlRG93biIsImNsZWFySW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsIm9uTW91c2VVcCIsImluYWN0aXZpdHlUaW1lb3V0IiwiZGVsYXkiLCJ1c2VyQWN0aXZlIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsInB1c2giLCJjYWxsIiwiZm9jdXMiLCJpc0ZzIiwiX2xhc3RTZWN0aW9uc1ZhbHVlIiwiZnVsbHNjcmVlbkVsZW1lbnQiLCJlbmRlZCIsIl9lcnJvciIsImhpZGUiLCJfdXNlckFjdGl2ZSIsImdldFVzZXJBY3RpdmUiLCJ0b2dnbGVDbGFzcyIsInBsdWdpbiIsInByb3RvdHlwZSIsInJlZ2lzdGVyQ29tcG9uZW50IiwiZ2V0Q29udHJvbCIsInNlY29uZHNUb1RpbWUiLCJfcHJlc2V0cyIsIkNvb2tpZSIsInN2ZyIsImhpZGRlbkVsZW1lbnQiLCJwcmVwZW5kIiwicmVxdWlyZSIsInZlcnNpb24iLCJ3aW5kb3ciLCIkIiwibGVQbGF5ZXIiLCJvZmZzZXRTaG93Iiwib2Zmc2V0IiwidG9wIiwib3V0ZXJIZWlnaHQiLCJnZXRDb250cm9scyIsImNvbnRyb2xPcHRpb25zIiwiY29udHJvbCIsImRpc2FibGUiLCJpc0Z1bmN0aW9uIiwiZ2V0V2lkdGgiLCJfdXBkYXRlTWluaVBsYXllciIsImZvcmNlIiwic2Nyb2xsVG9wIiwiaGlkZU1pbmlQbGF5ZXIiLCJzaG93TWluaVBsYXllciIsIm9uU2V0VmlldyIsIm9uRGVsVmlldyIsIm1vZHVsZSIsImV4cG9ydHMiLCJDb250cm9sIiwiZW1pdFRhcEV2ZW50cyIsImNsaWNrIiwib25DbGljayIsInRhcCIsImljb24iLCJhdHRycyIsInRhZyIsImJ1aWxkQ1NTQ2xhc3MiLCJoYXNDbGFzcyIsImFyZ3VtZW50cyIsIl9kaXNhYmxlIiwiX2NvbnRyb2xzIiwiY29udHJvbENsYXNzIiwidG9QbGF5ZXJFdmVudCIsImV2ZW50cyIsInNwbGl0IiwiYWNjIiwiQ29tcG9uZW50IiwiX19ub2RlIiwiYmx1ciIsImV2ZW50IiwiRXZlbnQiLCJ0cmlnZ2VySGFuZGxlciIsImV2ZW50TmFtZXMiLCJTdHJpbmciLCJ0b3VjaFN0YXJ0IiwiZmlyc3RUb3VjaCIsImxhc3RNb3ZlVG91Y2giLCJ0YXBNb3ZlbWVudFRocmVzaG9sZCIsInRvdWNoVGltZVRocmVzaG9sZCIsImNvdWxkQmVUYXAiLCJ0b3VjaGVzIiwicGFnZVgiLCJwYWdlWSIsIkRhdGUiLCJnZXRUaW1lIiwieGRpZmYiLCJ5ZGlmZiIsInRvdWNoRGlzdGFuY2UiLCJNYXRoIiwic3FydCIsIm5vVGFwIiwidG91Y2hUaW1lIiwidGFwRXZlbnQiLCJjb21wb25lbnQiLCJfY29tcG9uZW50cyIsIkljb24iLCJfdXNlVGFnIiwiY3JlYXRlRWxlbWVudE5TIiwiX3N2Z1RhZyIsIl9pY29uTmFtZSIsImFwcGVuZENoaWxkIiwiYXR0ck5TIiwicmVtb3ZlQXR0cmlidXRlTlMiLCJzZXRBdHRyaWJ1dGVOUyIsIlBsYXlCdXR0b24iLCJpbm5lciIsInBlcmNlbnRpZnkiLCJjcmVhdGVFbCIsIiRodG1sIiwibm9vcCIsInNlY29uZHMiLCJzaG93SG91cnMiLCJoIiwiZmxvb3IiLCJtIiwicyIsIm91dCIsInBlcmNlbnQiLCJwcm9wcyIsImdldFNjcm9sbEJhcldpZHRoIiwib3V0ZXIiLCJ2aXNpYmlsaXR5Iiwib3ZlcmZsb3ciLCJhcHBlbmRUbyIsIndpZHRoV2l0aFNjcm9sbCIsIm91dGVyV2lkdGgiLCJyZW1vdmUiLCJVU0VSX0FHRU5UIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiSVNfTU9CSUxFIiwidGVzdCIsIklTX0NIUk9NRSIsIklTX0FORFJPSUQiLCJJU19BTkRST0lEX1BIT05FIiwiSVNfSVBBRCIsIklTX0lQSE9ORSIsIklTX0lQT0QiLCJJU19JT1MiLCJJU19TQUZBUkkiLCJJU19UT1VDSCIsIm1heFRvdWNoUG9pbnRzIiwiU3BsYXNoSWNvbiIsIlRpbWUiLCJ1cGRhdGVUZXh0IiwidGV4dCIsIkNvbnRyb2xDb2xsZWN0aW9uIiwibG9jYWxVYU9wdGlvbnMiLCJsb2NhbE5hbWUiLCJpbmRleFJvdyIsImNyZWF0ZSIsImNvbGxlY3Rpb24iLCJfcm93cyIsImFkZFJvdyIsImVsZW1Sb3ciLCJmaXJzdCIsInNlY29uZCIsImdsb2JhbEFsaWduIiwicm93QWxpZ24iLCJjb250cm9sTmFtZSIsImFkZENvbnRyb2wiLCJfZ2V0Q29udHJvbE9wdGlvbnMiLCJTZWN0aW9ucyIsInNjcm9sbEVsZW1lbnQiLCJfaW5uZXJFbGVtZW50IiwiYWN0aXZlU2VjdGlvbiIsImdldFNlY3Rpb25CeUluZGV4Iiwic2V0QWN0aXZlQnlJbmRleCIsIm9uU2VjdGlvbkNsaWNrIiwib25UaW1lVXBkYXRlIiwidXBkYXRlU2VjdGlvbkR1cmF0aW9uIiwic2VjdGlvbkluZGV4IiwicGFyc2VJbnQiLCJuZXdJbmRleCIsInJpZ2h0IiwiX2NyZWF0ZVNlY3Rpb25zIiwic2VjdGlvbiIsInRhcmdldCIsImNsb3Nlc3QiLCJ0b3BQb3NpdGlvbiIsInBvc2l0aW9uIiwiYW5pbWF0ZSIsImVuZFNlY3Rpb25UaW1lIiwidG9TdHJpbmciLCJuZXh0SW5mbyIsInRyaW0iLCJyZXBsYWNlV2l0aCIsImNyZWF0ZVNlY3Rpb24iLCJpc1Zpc2libGUiLCJFcnJvckRpc3BsYXkiLCJtZXNzYWdlIiwib25QbGF5ZXJFcnJvciIsIlBvc3RlciIsIl91cmwiLCJGdWxsc2NyZWVuQXBpIiwiYXBpTWFwIiwic3BlY0FwaSIsImJyb3dzZXJBcGkiLCJkZmx0IiwiY29va2llcyIsImNvb2tpZSIsImQiLCJzZXREYXRlIiwieWVhciIsIk1lZGlhRXJyb3IiLCJkZWZhdWx0TWVzc2FnZXMiLCJlcnJvclR5cGVzIiwiZXJyTnVtIiwiUGxheUNvbnRyb2wiLCJ1cGRhdGUiLCJzaG93UmVwbGF5Iiwic2hvd1BsYXkiLCJzaG93UGF1c2UiLCJJbmZpbml0eSIsIl9yZXBsYXkiLCJWb2x1bWVDb250cm9sIiwiZmVhdHVyZUNvbnRyb2xWb2x1bWUiLCJkcmFnIiwibWFya2VyIiwibGluZSIsInAiLCJnZXRQb3NpdGlvbiIsImRyb3Bkb3duQ29udGVudCIsIm1vdXNlbW92ZSIsIm1vdXNldXAiLCJ5IiwidG9nZ2xlTXV0ZWQiLCJkZWZhdWx0Vm9sdW1lIiwicm91bmQiLCJDb250cm9sRHJvcGRvd24iLCJfb3BlbmVkIiwib3BlbiIsImNsb3NlIiwidG9nZ2xlIiwib25Eb2N1bWVudEV2ZW50cyIsIlRpbWVsaW5lQ29udHJvbCIsIl9vbk1hcmtlck1vdXNlbW92ZSIsIl9vbk1hcmtlck1vdXNlZG93biIsIm9uU2VjdGlvbnNJbml0IiwiX29uVGltZVVwZGF0ZSIsIl9vbkR1cmF0aW9uQ2hhbmdlIiwibWFya2VyU2hhZG93IiwieCIsIm1hcmtlclRpbWUiLCJpc05hTiIsIm1vdmUiLCJ0b3RhbFRpbWUiLCJwbGF5ZWRSYW5nZXMiLCJidWZmZXJlZFJhbmdlcyIsIm1vdXNlbGVhdmUiLCJtb3VzZWRvd24iLCJfb25MaW5lQ2xpY2siLCJ1cGRhdGVTZWN0aW9uUmFuZ2VzIiwiY3JlYXRlU2VjdGlvblJhbmdlcyIsImxlZnQiLCJ1cGRhdGVMYWJlbHMiLCJ3YXRjaEJ1ZmZlckludGVydmFsIiwidXBkYXRlUHJvZ3Jlc3NCYXIiLCJFTkQiLCJTVEFSVCIsImxvYWRlZCIsImRvbUl0ZW0iLCJhZGQiLCJidWZmZXJlZCIsImxvYWRlZFNpemUiLCJDb250cm9sVGV4dCIsIl90ZXh0IiwiQnVmZmVyZWRSYW5nZXMiLCJyYW5nZSIsIk1hcmtlciIsIl9vbk1vdXNlZG93biIsIl9kcmFnIiwiU2VjdGlvbkNvbnRyb2wiLCJfb25TZWN0aW9uc0luaXQiLCJfb25TZWN0aW9uVG9nZ2xlIiwidG9nZ2xlU2VjdGlvbnMiLCJjaGVja2VkIiwiQ29udHJvbENoZWNrYm94Iiwib25DaGVja2VkIiwiX2NoZWNrZWQiLCJGdWxsc2NyZWVuQ29udHJvbCIsIlJhdGVDb250cm9sIiwiZG93bkNvbnRyb2wiLCJkZWNyZWFzZVJhdGUiLCJ1cENvbnRyb2wiLCJpbmNyZWFzZVJhdGUiLCJjdXJyZW50UmF0ZSIsInBhcnNlRmxvYXQiLCJ0b0ZpeGVkIiwicmVwbGFjZSIsInJhdGVNaW4iLCJyYXRlTWF4IiwiZ2V0IiwiQmFja3dhcmRDb250cm9sIiwiU291cmNlQ29udHJvbCIsInBsYXliYWNrUXVhbGl0eSIsImdldEF2YWlsYWJsZVF1YWxpdHlMZXZlbHMiLCJDb250cm9sQ29udGFpbmVyIiwiX2FjdGl2ZSIsImxpc3QiLCJjb250ZW50IiwidG9vbHRpcCIsIm9uSXRlbUNsaWNrIiwiY3VycmVudFRhcmdldCIsImN1cnJlbnRWYWx1ZSIsImdldEN1cnJlbnRWYWx1ZSIsImVtcHR5IiwiZWxlbSIsImFkZEl0ZW0iLCJTdWJ0aXRsZUNvbnRyb2wiLCJ0cmFjayIsInN0b3BQcm9wYWdhdGlvbiIsImhhc1ZhbHVlIiwic3VidGl0bGVzIiwiRG93bmxvYWRDb250cm9sIiwib25Mb2FkU3RhcnQiLCJocmVmIiwiZG93bmxvYWQiLCJsaW5rIiwiZmlsZU5hbWUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJnZXRGaWxlRXh0ZW5zaW9uIiwicGFyc2VyIiwicGF0aG5hbWUiLCJwb3AiLCJLZXlCaW5kaW5nSW5mb0NvbnRyb2wiLCJpbmZvQ29udGVudCIsIl9rZXkiLCJob3RrZXkiLCJrZXlTdHJpbmciLCJUaW1lSW5mb0NvbnRyb2wiLCJfY3VycmVudFRpbWVDb250cm9sIiwiX3RvdGFsVGltZUNvbnRyb2wiLCJIdG1sNSIsIm1lZGlhIiwiYnVmZmVyUmFuZ2VzIiwiX3BsYXliYWNrUXVhbGl0eSIsIm9uRHVyYXRpb25DaGFuZ2UiLCJvblByb2dyZXNzIiwib25TZWVraW5nIiwib25TZWVrZWQiLCJvblZvbHVtZUNoYW5nZSIsIm9uRGJsY2xpY2siLCJvblBsYXkiLCJvblBhdXNlIiwib25SYXRlQ2hhbmdlIiwib25FbmRlZCIsIm9uQ2FucGxheVRocm91Z2giLCJvbldhaXRpbmciLCJvbkVycm9yIiwicmVtb3ZlQXR0ciIsInByb3AiLCJtYXAiLCJfaW5pdFN1YnRpdGxlcyIsIl9pbml0VmlkZW8iLCJfaW5pdFJhdGUiLCJfaW5pdFZvbHVtZSIsIndlYmtpdEVudGVyRnVsbFNjcmVlbiIsIm5ldHdvcmtTdGF0ZSIsIkhBVkVfTUVUQURBVEEiLCJ3ZWJraXRFeGl0RnVsbFNjcmVlbiIsInBsYXllZCIsInBsYXlQcm9taXNlIiwicGF1c2VQcm9taXNlIiwiX3NlbGYiLCJjaGlsZHJlbiIsImxhbmd1YWdlIiwicmVhZHlTdGF0ZSIsIkhUTUxNZWRpYUVsZW1lbnQiLCJIQVZFX05PVEhJTkciLCJfdGV4dFRyYWNrc0hhY2siLCJ0ZXh0VHJhY2tzIiwiY2xpZW50SGVpZ2h0IiwiY2xpZW50V2lkdGgiLCJNT0JJTEVfTUFYX1JBVEUiLCJTQUZBUklfTUFYX1JBVEUiLCJNT0JJTEVfTUlOX1JBVEUiLCJTQUZBUklfTUlOX1JBVEUiLCJzdG9wIiwiX3NvdXJjZSIsIl90cmFjayIsIm1vZGUiLCJtdXRlIiwic2Vla2FibGUiLCJzdGFydCIsImN1cnJlbnRTcmMiLCJURVNUX1ZJREVPIiwiY2FuQ29udHJvbFZvbHVtZSIsIl90cmlnZ2VyU3RhY2siLCJfc3RvcExpc3RlbiIsImRlZmF1bHRSYXRlIiwiX3Bvc3RlciIsImlubmVySGVpZ2h0IiwiX3JhdGVNYXgiLCJfcmF0ZU1pbiIsInNldCIsImxldmVscyIsInNvbWUiLCJ2aWRlb1BsYXllZCIsInZpZGVvUGxheWVkRGVsdGEiLCJ2b2x1bWVDaGFuZ2VEZWxheSIsInJhdGVDaGFuZ2VEZWxheSIsImdhIiwidm9sdW1lQ2hhbmdlVGltZW91dCIsIk51bWJlciIsInJhdGVDaGFuZ2VUaW1lb3V0IiwicGxheWVkRXZlbnRzU2VudCIsInBsYXllZFBlcmNlbnRhZ2UiLCJkZWx0YSIsImFicyIsImxvYWRRdWFsaXR5IiwidHJhY2tQcm92aWRlIiwibGFuZ3VhZ2VDb2RlIiwibGFuZ3VhZ2VOYW1lIiwiWW91dHViZSIsIl9wYXVzZWQiLCJhdmFpbGFibGVSYXRlcyIsImFyciIsInl0UGxheWVyIiwiUVVBTElUWV9OQU1FUyIsInBsYXlWaWRlbyIsInBhdXNlVmlkZW8iLCJhcGlMb2FkZWQiLCJpbml0WVRQbGF5ZXIiLCJ5b3V0dWJlRWxlbWVudCIsImJsb2NrZXIiLCJfaW5pdFByb21pc2UiLCJnbG9iYWxPcHRpb25zIiwieXRPcHRpb25zIiwiaXZfbG9hZF9wb2xpY3kiLCJtb2Rlc3RicmFuZGluZyIsInJlbCIsInNob3dpbmZvIiwiY2NfbG9hZF9wb2xpY3kiLCJkaXNhYmxla2IiLCJmcyIsIllUIiwicmVhZHkiLCJ2aWRlb0lkIiwicGxheWVyVmFycyIsIm9uUmVhZHkiLCJvbllUUFJlYWR5Iiwib25TdGF0ZUNoYW5nZSIsIm9uWVRQU3RhdGVDaGFuZ2UiLCJvblBsYXliYWNrUmF0ZUNoYW5nZSIsIm9uWVRQUmF0ZUNoYW5nZSIsIm9uUGxheWJhY2tRdWFsaXR5Q2hhbmdlIiwib25ZVFBQbGF5YmFja1F1YWxpdHlDaGFuZ2UiLCJnZXRBdmFpbGFibGVQbGF5YmFja1JhdGVzIiwic2V0QXZhaWxhYmxlUGxheWJhY2tSYXRlcyIsInN0YXRlIiwibGFzdFN0YXRlIiwiUGxheWVyU3RhdGUiLCJVTlNUQVJURUQiLCJFTkRFRCIsIlBMQVlJTkciLCJzZXRQbGF5YmFja1F1YWxpdHkiLCJfbmV4dFBsYXliYWNrUXVhbGl0eSIsImlzU2Vla2luZyIsImxvYWRDYXB0aW9ucyIsImVtaXRUaW1ldXBkYXRlIiwiUEFVU0VEIiwiQlVGRkVSSU5HIiwic2Vla2luZ0ludGVydmFsIiwid2FzUGF1c2VkQmVmb3JlU2VlayIsInRpbWVCZWZvcmVTZWVrIiwiZW1wdHlUcmFja2xpc3QiLCJfbG9hZENhcHRpb25zV2F0Y2hlciIsIl90cmFja3NEaXNhYmxlIiwiY2hlY2tDYXB0aW9uc0V4aXN0IiwibG9hZE1vZHVsZSIsImdldE9wdGlvbnMiLCJpZCIsInBhcnNlVXJsIiwiZ2V0Q3VycmVudFRpbWUiLCJzZWVrVG8iLCJnZXREdXJhdGlvbiIsIk5hTiIsImdldFBsYXliYWNrUmF0ZSIsInNldFBsYXliYWNrUmF0ZSIsInVuTXV0ZSIsImlzTXV0ZWQiLCJnZXRPcHRpb24iLCJ1bmxvYWRNb2R1bGUiLCJzZXRPcHRpb24iLCJzdGF0dXMiLCJnZXRQbGF5ZXJTdGF0ZSIsIkNVRUQiLCJnZXRQbGF5YmFja1F1YWxpdHkiLCJnZXRWb2x1bWUiLCJzZXRWb2x1bWUiLCJyZWdleCIsIlVSTF9SRUdFWCIsIm1hdGNoIiwidGlueSIsInNtYWxsIiwibGFyZ2UiLCJoZDcyMCIsImhkMTA4MCIsImhpZ2hyZXMiLCJhdXRvIiwiX2xvYWRlZCIsImdldFNjcmlwdCIsIlJhZGlhbEJhciIsInN0cm9rZURhc2hhcnJheSIsInNpemUiLCJfY2lyY2xlRWxlbWVudCIsInRlbXBsYXRlIiwiY29udGVudHMiLCJjYiIsInRpbWVvdXQiLCJfcmFkaWFsIiwiTmV4dENvbXBvbmVudCIsImNhbmNlbEJ1dHRvbiIsInByb2dyZXNzQnV0dG9uIiwiY2FuY2VsIiwiX3RpbWVvdXQiLCJsb2NhdGlvbiIsImNhbmNlbGxlZCIsInN0YXJ0QW5pbWF0aW9uIiwic3RvcEFuaW1hdGlvbiIsInJhZGlhbCIsIl9uZXh0Q29tcG9uZW50Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7Ozs7OztBQUVBOzs7O0FBR0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOztBQUNBOztBQVNBOzs7O0FBRUE7Ozs7QUFHQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FBaEJBOzs7QUFtQkEsbUJBQVFBLGVBQVIsQ0FBd0IsU0FBeEIsRUFBbUMsWUFBVztBQUM3QyxTQUFPO0FBQ05DLFlBQVUsc0JBQUUsUUFBRixFQUFZQyxRQUFaLENBQXFCLFNBQXJCO0FBREosR0FBUDtBQUdBLEVBSkQ7O0FBUUE7Ozs7Ozs7O0FBUUEsVUFBU0MsWUFBVCxDQUFzQkMsTUFBdEIsRUFBOEJDLElBQTlCLEVBQW9DO0FBQ25DLE1BQU1DLFNBQVMsR0FBR0MsTUFBSCxDQUFVSCxNQUFWLENB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QUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQzNJQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNmQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF1QixPQUFPO0FBQzlCO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDcEJBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLDJCQUEwQjs7QUFFMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQSxLQUFJO0FBQ0o7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQSw4REFBNkQsVUFBVTtBQUN2RTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQSx1Q0FBc0MsVUFBVTtBQUNoRCx3QkFBdUIsYUFBYTtBQUNwQztBQUNBLDBCQUF5QixjQUFjO0FBQ3ZDLDBCQUF5QixVQUFVO0FBQ25DLHFCQUFvQixjQUFjO0FBQ2xDO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCLFVBQVUsRUFBRTtBQUM3QixnQ0FBK0IseUJBQXlCO0FBQ3hEO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTBCLFdBQVc7QUFDckM7QUFDQSxvREFBbUQsVUFBVTtBQUM3RDtBQUNBLEdBQUU7O0FBRUY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlFQUFnRTtBQUNoRSxHQUFFOztBQUVGO0FBQ0E7QUFDQSxtQ0FBa0MsYUFBYTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7O0FBRUQsaUNBQWdDOztBQUVoQzs7Ozs7OztBQzNVQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNGQSw0Q0FBMkMsZ0JBQWdCOztBQUUzRCxtREFBa0QsaUZBQWlGOzs7Ozs7O0FDRm5JO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDSEE7QUFDQTtBQUNBOzs7Ozs7O0FDRkE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBWSx3QkFBd0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDekVBO0FBQ0E7QUFDQTs7Ozs7OztBQ0ZBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFFQUFvRSxFQUFFO0FBQ3RFO0FBQ0EsR0FBRTtBQUNGLGdCQUFlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkJBQTRCLGNBQWM7QUFDMUM7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWMsY0FBYztBQUM1QixpRUFBZ0UsY0FBYztBQUM5RSx1QkFBc0IsaUNBQWlDO0FBQ3ZELDRCQUEyQixjQUFjO0FBQ3pDO0FBQ0E7QUFDQTs7Ozs7OztBQ3RDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvREFBbUQsY0FBYztBQUNqRTtBQUNBOzs7Ozs7O0FDbkJBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNEMsY0FBYztBQUMxRDtBQUNBO0FBQ0E7QUFDQSxtQ0FBa0MsYUFBYTtBQUMvQyxpREFBZ0QsY0FBYztBQUM5RDtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDMUJBOztBQUVBOzs7Ozs7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7O0FBRUEsK0VBQThFLHFDQUFxQyxFQUFFOztBQUVySDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQy9DQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQSx3QkFBdUIsVUFBVTtBQUNqQyw0Q0FBMkMsZUFBZTtBQUMxRDtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBLDhEQUE2RCxVQUFVO0FBQ3ZFO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQSxpQkFBZ0I7QUFDaEIsa0JBQWlCLHdCQUF3QjtBQUN6QztBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDckZBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWMsb0JBQW9CO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3BDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDdENBOztBQUVBOzs7Ozs7O0FDRkE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBdUIsWUFBWTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3JCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTs7Ozs7OztBQ1pBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwyQkFBMEIsaUJBQWlCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTs7Ozs7OztBQ2ZBLGcvRkFBKytGLGtCQUFrQixZQUFZLGlCQUFpQixvQkFBb0Isc0JBQXNCLCt0Uzs7Ozs7Ozs7Ozs7QUNBamtHLEtBQU0rRCwwQkFBUztBQUNyQjdILFdBQVU7QUFDVHNGLFVBQVEsTUFEQztBQUVUdkcsYUFBVztBQUNWQyxZQUFTLENBQ1IsQ0FBQyxNQUFELEVBQVMsUUFBVCxFQUFtQixTQUFuQixFQUE4QixVQUE5QixFQUEwQyxTQUExQyxFQUFxRCxZQUFyRCxDQURRLEVBRVIsQ0FBQyxNQUFELEVBQVMsU0FBVCxFQUFvQixVQUFwQixFQUFnQyxTQUFoQyxFQUEyQyxRQUEzQyxFQUFxRCxTQUFyRCxFQUFnRSxVQUFoRSxDQUZRLENBREM7QUFLVkMsZ0JBQWEsQ0FDWixDQUFDLE1BQUQsRUFBUyxRQUFULEVBQW1CLFNBQW5CLEVBQThCLFVBQTlCLEVBQTBDLFNBQTFDLEVBQXFELE1BQXJELEVBQTZELFNBQTdELEVBQXdFLFVBQXhFLEVBQW9GLFNBQXBGLEVBQStGLFFBQS9GLEVBQXlHLFNBQXpHLEVBQW9ILFVBQXBILEVBQWdJLFNBQWhJLEVBQTJJLFlBQTNJLENBRFk7QUFMSDtBQUZGO0FBRFcsRUFBZixDOzs7Ozs7Ozs7OztBQ0FQLEtBQU1GLFdBQVcsQ0FBQyxNQUFELEVBQVMsUUFBVCxFQUFtQixTQUFuQixFQUE4QixVQUE5QixFQUEwQyxTQUExQyxFQUFxRCxNQUFyRCxFQUE2RCxVQUE3RCxFQUF5RSxZQUF6RSxDQUFqQjs7QUFFTyxLQUFNOEksMEJBQVM7QUFDckI3SCxXQUFVO0FBQ1RqQixhQUFXO0FBQ1ZDLFlBQVMsQ0FDUkQsUUFEUSxFQUVSLEVBRlEsQ0FEQztBQUtWRSxnQkFBYSxDQUNaRixRQURZO0FBTEg7QUFERjtBQURXLEVBQWYsQzs7Ozs7Ozs7Ozs7QUNGQSxLQUFNOEksMEJBQVM7QUFDckI3SCxXQUFVO0FBQ1RzRixVQUFRLE1BREM7QUFFVHZHLGFBQVc7QUFDVkMsWUFBUyxDQUNSLENBQUMsTUFBRCxFQUFTLFFBQVQsRUFBbUIsVUFBbkIsRUFBK0IsTUFBL0IsRUFBdUMsUUFBdkMsRUFBaUQsU0FBakQsRUFBNEQsVUFBNUQsRUFBd0UsWUFBeEUsQ0FEUSxFQUVSLEVBRlEsQ0FEQztBQUtWQyxnQkFBYSxDQUNaLENBQUMsTUFBRCxFQUFTLFFBQVQsRUFBbUIsVUFBbkIsRUFBK0IsTUFBL0IsRUFBdUMsUUFBdkMsRUFBaUQsU0FBakQsRUFBNEQsVUFBNUQsRUFBd0UsWUFBeEUsQ0FEWTtBQUxIO0FBRkY7QUFEVyxFQUFmLEM7Ozs7Ozs7Ozs7O0FDQUEsS0FBTTRJLDBCQUFTO0FBQ3JCN0gsV0FBVTtBQUNUc0YsVUFBUSxNQURDO0FBRVR2RyxhQUFXO0FBQ1ZDLFlBQVMsQ0FDUixDQUFDLE1BQUQsRUFBUyxRQUFULEVBQW1CLFVBQW5CLEVBQStCLE1BQS9CLEVBQXVDLFFBQXZDLEVBQWlELFNBQWpELEVBQTRELFlBQTVELENBRFEsRUFFUixFQUZRLENBREM7QUFLVkMsZ0JBQWEsQ0FDWixDQUFDLE1BQUQsRUFBUyxRQUFULEVBQW1CLFVBQW5CLEVBQStCLE1BQS9CLEVBQXVDLFFBQXZDLEVBQWlELFNBQWpELEVBQTRELFlBQTVELENBRFk7QUFMSDtBQUZGO0FBRFcsRUFBZixDOzs7Ozs7Ozs7OztBQ0FBLEtBQU00SSwwQkFBUztBQUNyQjdILFdBQVU7QUFDVHNGLFVBQVEsTUFEQztBQUVUdkcsYUFBVztBQUNWQyxZQUFTLENBQ1IsQ0FBQyxNQUFELEVBQVMsVUFBVCxFQUFxQixNQUFyQixFQUE2QixRQUE3QixFQUF1QyxRQUF2QyxFQUFpRCxZQUFqRCxDQURRLEVBRVIsRUFGUSxDQURDO0FBS1ZDLGdCQUFhLENBQ1osQ0FBQyxNQUFELEVBQVMsVUFBVCxFQUFxQixNQUFyQixFQUE2QixRQUE3QixFQUF1QyxRQUF2QyxFQUFpRCxZQUFqRCxDQURZO0FBTEg7QUFGRjtBQURXLEVBQWYsQzs7Ozs7Ozs7QUNBUDs7QUFDQTs7QUFDQTs7QUFDQSx5Qjs7Ozs7O0FDSEE7O0FBRUE7Ozs7OztBQUVBLEtBQU0yQixTQUFTaUwsT0FBT0UsUUFBUCxJQUFtQkYsT0FBT0MsQ0FBUCxDQUFTQyxRQUEzQztBQUNBLEtBQU1uTyxpQkFBaUI7QUFDdEJxbEIsZUFBYyxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsR0FBVCxDQURRO0FBRXRCQyxvQkFBbUIsQ0FGRztBQUd0QkMscUJBQW9CLElBSEU7QUFJdEJDLG1CQUFrQjtBQUpJLEVBQXZCOztBQU9BeGlCLFFBQU9xSyxNQUFQLENBQWMsSUFBZCxFQUFvQixVQUFTNUIsYUFBVCxFQUF3QjtBQUMzQyxNQUFNckosVUFBVSxpQkFBRStILE1BQUYsQ0FBUyxFQUFULEVBQWFuSyxjQUFiLEVBQTZCeUwsYUFBN0IsQ0FBaEI7QUFDQSxNQUFNekosU0FBUyxJQUFmOztBQUVBLE1BQUksQ0FBQ2lNLE9BQU93WCxFQUFaLEVBQWdCO0FBQ2Y3YyxXQUFRaEUsS0FBUixDQUFjLGlDQUFkO0FBQ0E7QUFDQTs7QUFFRDVDLFNBQU9zQyxFQUFQLENBQVUsV0FBVixFQUF1QixVQUFDUyxDQUFELEVBQU87QUFDN0JrSixVQUFPd1gsRUFBUCxDQUNDLE1BREQsRUFFQyxPQUZELEVBR0Msc0JBSEQ7QUFLQSxHQU5EOztBQVFBempCLFNBQU9zQyxFQUFQLENBQVUsY0FBVixFQUEwQixVQUFDUyxDQUFELEVBQUloQixJQUFKLEVBQWE7QUFDdEMsT0FBTTJLLFVBQVUzSyxLQUFLMkssT0FBckI7QUFEc0MsMEJBRVhBLFFBQVF0TSxPQUZHO0FBQUEsT0FFL0I2RCxJQUYrQixvQkFFL0JBLElBRitCO0FBQUEsT0FFekI2UCxVQUZ5QixvQkFFekJBLFVBRnlCOztBQUd0QyxPQUFHN1AsSUFBSCxFQUFTO0FBQ1JnSSxXQUFPd1gsRUFBUCxDQUNDLE1BREQsRUFFQyxPQUZELEVBR0Msc0JBSEQsRUFJQ3hmLElBSkQsRUFLQzZQLFVBTEQ7QUFPQTtBQUNELEdBWkQ7O0FBY0E5VCxTQUFPc0MsRUFBUCxDQUFVLGVBQVYsRUFBMkIsVUFBQ1MsQ0FBRCxFQUFJaEIsSUFBSixFQUFhO0FBQ3ZDa0ssVUFBT3dYLEVBQVAsQ0FDQyxNQURELEVBRUMsT0FGRCxFQUdDLGlCQUhELEVBSUMsT0FKRCxFQUtDempCLE9BQU9zRSxJQUxSO0FBT0EsR0FSRDs7QUFXQSxNQUFJb2Ysc0JBQXNCLElBQTFCOztBQUVBMWpCLFNBQU9zQyxFQUFQLENBQVUsY0FBVixFQUEwQixVQUFDUyxDQUFELEVBQUloQixJQUFKLEVBQWE7QUFDdEN3SSxnQkFBYW1aLG1CQUFiOztBQUVBQSx5QkFBc0JsWixXQUFXLGFBQUs7QUFDckMsUUFBTTdDLFFBQVE1RixLQUFLdEMsTUFBbkI7QUFDQXdNLFdBQU93WCxFQUFQLENBQ0MsTUFERCxFQUVDLE9BRkQsRUFHQyxzQkFIRCxFQUlDRSxPQUFPaGMsS0FBUCxFQUFjNFUsT0FBZCxDQUFzQixDQUF0QixDQUpEO0FBT0EsSUFUcUIsRUFTbkJuYyxRQUFRbWpCLGlCQVRXLENBQXRCO0FBVUEsR0FiRDs7QUFlQSxNQUFJSyxvQkFBb0IsSUFBeEI7QUFDQTVqQixTQUFPc0MsRUFBUCxDQUFVLFlBQVYsRUFBd0IsVUFBQ1MsQ0FBRCxFQUFJaEIsSUFBSixFQUFhO0FBQ3BDd0ksZ0JBQWFxWixpQkFBYjs7QUFFQUEsdUJBQW9CcFosV0FBVyxhQUFLO0FBQ25DLFFBQU03QyxRQUFRNUYsS0FBS3JELElBQW5CO0FBQ0F1TixXQUFPd1gsRUFBUCxDQUNDLE1BREQsRUFFQyxPQUZELEVBR0Msb0JBSEQsRUFJQzliLEtBSkQ7QUFPQSxJQVRtQixFQVNqQnZILFFBQVFvakIsZUFUUyxDQUFwQjtBQVVBLEdBYkQ7O0FBZ0JBLE1BQUlLLG1CQUFtQixFQUF2QjtBQUNBN2pCLFNBQU9zQyxFQUFQLENBQVUsWUFBVixFQUF3QixZQUFNO0FBQzdCLE9BQU1zUCxVQUFVNVIsT0FBT0MsS0FBUCxDQUFhNmpCLGdCQUE3QjtBQUNBLE9BQU1DLFFBQVEzakIsUUFBUWtqQixnQkFBdEI7QUFDQWxqQixXQUFRaWpCLFdBQVIsQ0FBb0IxbEIsT0FBcEIsQ0FBNEIsZ0JBQVE7QUFDbkMsUUFDQyxDQUFDa21CLGlCQUFpQi9sQixJQUFqQixDQUFELElBQ0FpUyxLQUFLaVUsR0FBTCxDQUFTcFMsVUFBVTlULElBQW5CLElBQTJCaW1CLEtBRjVCLEVBR0U7QUFDRDlYLFlBQU93WCxFQUFQLENBQ0MsTUFERCxFQUVDLE9BRkQsRUFHQyxxQkFIRCxFQUlJM2xCLE9BQU9pbUIsS0FKWCxTQUlvQmptQixJQUpwQjtBQU1BK2xCLHNCQUFpQi9sQixJQUFqQixJQUF5QixJQUF6QjtBQUVBO0FBQ0QsSUFkRDtBQWVBLEdBbEJEOztBQXFCQTtBQUNBLE1BQUltbUIsY0FBYyxLQUFsQjtBQUNBamtCLFNBQU9zQyxFQUFQLENBQVUsZUFBVixFQUEyQixVQUFTUyxDQUFULEVBQVk7QUFDdEMsT0FBRyxDQUFDa2hCLFdBQUosRUFBaUI7QUFDaEJBLGtCQUFjLElBQWQ7QUFDQTtBQUNBOztBQUVELE9BQUdqa0IsT0FBT0MsS0FBUCxDQUFhNmMsZUFBYixJQUFnQyxJQUFuQyxFQUF5QztBQUN4QzdRLFdBQU93WCxFQUFQLENBQ0MsTUFERCxFQUVDLE9BRkQsRUFHQyx1QkFIRCxFQUlDempCLE9BQU9DLEtBQVAsQ0FBYTZjLGVBQWIsQ0FBNkI5VixLQUo5QjtBQU1BO0FBQ0QsR0FkRDtBQWdCQSxFQXBIRCxFOzs7Ozs7QUNaQTs7Ozs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7O0FBRUEsS0FBTWhHLFNBQVNpTCxPQUFPRSxRQUFQLElBQW1CRixPQUFPQyxDQUFQLENBQVNDLFFBQTNDO0FBQ0EsS0FBTWpJLFNBQVNsRCxPQUFPbUQsWUFBUCxDQUFvQixRQUFwQixDQUFmOztBQUVBLEtBQU0rZixlQUFlLFNBQWZBLFlBQWUsUUFBUztBQUM3QixNQUFHckcsU0FBUyxJQUFULElBQWlCQSxNQUFNc0csWUFBTixJQUFzQixJQUExQyxFQUFnRDtBQUMvQyxVQUFPdEcsS0FBUDtBQUNBO0FBQ0QsU0FBTztBQUNOd0QsYUFBV3hELE1BQU1zRyxZQURYO0FBRU5uZCxVQUFRNlcsTUFBTXNHLFlBRlI7QUFHTi9HLFlBQVVTLE1BQU11RyxZQUhWO0FBSU5uZ0IsU0FBTzRaLE1BQU1zRztBQUpQLEdBQVA7QUFNQSxFQVZEOztLQWFNRSxPOzs7QUFDTCxtQkFBWXJrQixNQUFaLEVBQW9CSSxPQUFwQixFQUE2QjtBQUFBOztBQUFBLGlIQUN0QkosTUFEc0IsRUFDZEksT0FEYzs7QUFFNUIsU0FBS2trQixPQUFMLEdBQWUsSUFBZjs7QUFFQSxTQUFLaGhCLEdBQUwsR0FBVyxNQUFLdEQsTUFBTCxDQUFZSSxPQUFaLENBQW9Ca0QsR0FBL0I7O0FBRUEsU0FBS3RELE1BQUwsQ0FBWTNDLFFBQVosQ0FBcUIsbUJBQXJCO0FBQ0EsU0FBS0QsT0FBTCxDQUFha0YsRUFBYixDQUFnQixPQUFoQixFQUF5QixNQUFLb0wsT0FBTCxDQUFhbEssSUFBYixPQUF6QjtBQUNBLFNBQUtwRyxPQUFMLENBQWFrRixFQUFiLENBQWdCLFVBQWhCLEVBQTRCLE1BQUt1ZCxVQUFMLENBQWdCcmMsSUFBaEIsT0FBNUI7QUFSNEI7QUFTNUI7O0FBRUQ7Ozs7Ozs7MkJBa0JRb0wsSyxFQUFPO0FBQ2QsU0FBSzVNLE9BQUwsQ0FBYSxPQUFiO0FBQ0E7OztnQ0FFWTtBQUNaLFNBQUtBLE9BQUwsQ0FBYSxVQUFiO0FBQ0E7Ozs7O0FBMEdEOzs7a0NBR2U7QUFDZCxRQUFNcEUsUUFBUSxLQUFLMm1CLGNBQUwsQ0FBb0IxbUIsT0FBcEIsQ0FBNEIsS0FBS2EsSUFBakMsQ0FBZDtBQUNBLFFBQUdkLFFBQVEsQ0FBUixJQUFhLEtBQUsybUIsY0FBTCxDQUFvQjVlLE1BQXBDLEVBQTRDO0FBQzVDLFdBQU8sS0FBS2pILElBQUwsR0FBWSxLQUFLNmxCLGNBQUwsQ0FBb0IzbUIsUUFBUSxDQUE1QixDQUFuQjtBQUNBOztBQUVEOzs7Ozs7a0NBR2U7QUFDZCxRQUFNQSxRQUFRLEtBQUsybUIsY0FBTCxDQUFvQjFtQixPQUFwQixDQUE0QixLQUFLYSxJQUFqQyxDQUFkO0FBQ0EsUUFBR2QsUUFBUSxDQUFSLEdBQVksQ0FBZixFQUFrQjtBQUNsQixXQUFPLEtBQUtjLElBQUwsR0FBWSxLQUFLNmxCLGNBQUwsQ0FBb0IzbUIsUUFBUSxDQUE1QixDQUFuQjtBQUNBOzs7K0NBRTJCO0FBQzNCLFFBQU00bUIsTUFBTSxLQUFLQyxRQUFMLENBQWMxSCx5QkFBZCxFQUFaO0FBQ0EsUUFBTW5mLFFBQVE0bUIsSUFBSTNtQixPQUFKLENBQVksTUFBWixDQUFkOztBQUVBLFFBQUdELFFBQVEsQ0FBQyxDQUFaLEVBQWU7QUFDZDRtQixTQUFJem1CLE1BQUosQ0FBV0gsS0FBWCxFQUFrQixDQUFsQjtBQUNBOztBQUVELFdBQU80bUIsSUFBSWpFLEdBQUosQ0FBUTtBQUFBLFlBQVM7QUFDdkJ2WixhQUFRcWQsUUFBUUssYUFBUixDQUFzQjVtQixJQUF0QixLQUErQkEsSUFEaEI7QUFFdkJtRyxZQUFPbkc7QUFGZ0IsTUFBVDtBQUFBLEtBQVIsQ0FBUDtBQUlBOzs7d0NBNENvQjtBQUNwQixXQUFPLElBQVA7QUFDQTs7OzBCQUVNO0FBQ04sU0FBSzJtQixRQUFMLENBQWNFLFNBQWQ7QUFDQSxTQUFLM2lCLE9BQUwsQ0FBYSxNQUFiO0FBQ0E7OzsyQkFFTztBQUNQLFNBQUt5aUIsUUFBTCxDQUFjRyxVQUFkO0FBQ0EsU0FBSzVpQixPQUFMLENBQWEsT0FBYjtBQUNBOzs7MEJBR007QUFBQTs7QUFDTjtBQUNBLFdBQU9xaUIsUUFBUVEsU0FBUixHQUNML2lCLElBREssQ0FDQTtBQUFBLFlBQU0sT0FBS2dqQixZQUFMLEVBQU47QUFBQSxLQURBLENBQVA7QUFFQTs7O21DQUVlO0FBQ2YsU0FBSzFuQixPQUFMLEdBQWUsc0JBQUUsU0FBRixFQUNiQyxRQURhLENBQ0osMkJBREksRUFFYjRJLElBRmEsQ0FFUixVQUZRLEVBRUksR0FGSixDQUFmO0FBR0EsU0FBSzhlLGNBQUwsR0FBc0Isc0JBQUUsU0FBRixFQUNwQjFuQixRQURvQixDQUNYLG1CQURXLENBQXRCO0FBRUEsU0FBSzJuQixPQUFMLEdBQWUsc0JBQUUsU0FBRixFQUNiM25CLFFBRGEsQ0FDSiwyQkFESSxDQUFmOztBQUlBLFdBQU8sS0FBS0QsT0FBTCxDQUNMa0osTUFESyxDQUNFLEtBQUswZSxPQURQLEVBRUwxZSxNQUZLLENBRUUsS0FBS3llLGNBRlAsQ0FBUDtBQUdBOzs7a0NBRWM7QUFBQTs7QUFDZCxTQUFLRSxZQUFMLEdBQW9CLGlCQUFFcmdCLFFBQUYsRUFBcEI7QUFDQSxRQUFNc2dCLGdCQUFnQixLQUFLbGxCLE1BQUwsQ0FBWUksT0FBbEM7QUFDQSxRQUFJK2tCLFlBQVk7QUFDZmpuQixlQUFXZ25CLGNBQWNobkIsUUFBZCxHQUF5QixDQUF6QixHQUE2QixDQUR6QjtBQUVmRSxXQUFPOG1CLGNBQWM5bUIsSUFBZCxHQUFxQixDQUFyQixHQUF5QixDQUZqQjtBQUdmZ25CLHFCQUFpQixDQUhGO0FBSWZqbUIsZUFBVyxDQUpJO0FBS2ZrbUIscUJBQWlCLENBTEY7QUFNZkMsVUFBTSxDQU5TO0FBT2ZDLGVBQVcsQ0FQSTtBQVFmQyxxQkFBaUIsQ0FSRjtBQVNmQyxnQkFBWSxDQVRHO0FBVWZDLFNBQUssQ0FWVTtBQVdmbkQsWUFBUTJDLGNBQWN4aUI7QUFYUCxLQUFoQjs7QUFjQWlqQixPQUFHQyxLQUFILENBQVMsWUFBTTtBQUNkLFlBQUt4bEIsT0FBTCxDQUFhc0IsR0FBYixDQUFpQnVVLFdBQWpCLENBQTZCLE9BQUs3WSxPQUFsQzs7QUFFQSxZQUFLcW5CLFFBQUwsR0FBZ0IsSUFBSWtCLEdBQUcza0IsTUFBUCxDQUFjLE9BQUsrakIsY0FBTCxDQUFvQixDQUFwQixDQUFkLEVBQXNDO0FBQ3JEYyxlQUFVLE9BQUtBLE9BRHNDO0FBRXJEbmdCLGFBQVF3ZixjQUFjeGYsS0FBZCxJQUF1QixNQUZzQjtBQUdyRG9nQixrQkFBYVgsU0FId0M7QUFJckQ3VyxjQUFTO0FBQ1J5WCxnQkFBVSxPQUFLQyxVQUFMLENBQWdCeGlCLElBQWhCLENBQXFCLE1BQXJCLENBREY7QUFFUnlpQixzQkFBZ0IsT0FBS0MsZ0JBQUwsQ0FBc0IxaUIsSUFBdEIsQ0FBMkIsTUFBM0IsQ0FGUjtBQUdSMmlCLDZCQUF1QixPQUFLQyxlQUFMLENBQXFCNWlCLElBQXJCLENBQTBCLE1BQTFCLENBSGY7QUFJUjZpQixnQ0FBMEIsT0FBS0MsMEJBQUwsQ0FBZ0M5aUIsSUFBaEMsQ0FBcUMsTUFBckM7QUFKbEI7QUFKNEMsTUFBdEMsQ0FBaEI7QUFZQSxLQWZEO0FBZ0JBLFdBQU8sS0FBS3loQixZQUFMLENBQWtCamdCLE9BQWxCLEVBQVA7QUFDQTs7OytDQUcyQjtBQUMzQixTQUFLdWYsY0FBTCxHQUFzQixLQUFLRSxRQUFMLENBQWM4Qix5QkFBZCxFQUF0QjtBQUNBLFNBQUs5SixPQUFMLEdBQWUsS0FBSzhILGNBQUwsQ0FBb0IsQ0FBcEIsQ0FBZjtBQUNBLFNBQUs3SCxPQUFMLEdBQWUsS0FBSzZILGNBQUwsQ0FBb0IsS0FBS0EsY0FBTCxDQUFvQjVlLE1BQXBCLEdBQTZCLENBQWpELENBQWY7QUFDQTs7OzhCQUVVNUMsQyxFQUFHO0FBQ2IsU0FBS2tpQixZQUFMLENBQWtCbGdCLE9BQWxCO0FBQ0EsU0FBSzJiLFNBQUw7QUFDQSxTQUFLQyxXQUFMO0FBQ0EsU0FBSzZGLHlCQUFMO0FBQ0E7OzttQ0FFZXpqQixDLEVBQUc7QUFDbEIsU0FBS2YsT0FBTCxDQUFhLFlBQWI7QUFDQTs7OzhDQUUwQmUsQyxFQUFHO0FBQzdCLFFBQU1oQixPQUFPZ0IsRUFBRWhCLElBQWY7QUFDQSxTQUFLd2QsZ0JBQUwsR0FBd0IsS0FBS3hDLHlCQUFMLEdBQWlDdFYsSUFBakMsQ0FBc0M7QUFBQSxZQUFRM0osS0FBS21HLElBQUwsS0FBY2xDLElBQXRCO0FBQUEsS0FBdEMsQ0FBeEI7QUFDQSxTQUFLQyxPQUFMLENBQWEsZUFBYixFQUE4QixLQUFLdWQsZ0JBQW5DO0FBQ0E7OztvQ0FFZ0J4YyxDLEVBQUc7QUFDbkIsUUFBTTBqQixRQUFRMWpCLEVBQUVoQixJQUFoQjtBQUNBLFFBQUcwa0IsVUFBVSxLQUFLQyxTQUFsQixFQUE2QjtBQUM1QjtBQUNBOztBQUVELFNBQUtBLFNBQUwsR0FBaUJELEtBQWpCO0FBQ0EsWUFBT0EsS0FBUDtBQUNBLFVBQUtkLEdBQUdnQixXQUFILENBQWVDLFNBQXBCO0FBQ0MsV0FBSzVrQixPQUFMLENBQWEsV0FBYjtBQUNBLFdBQUtBLE9BQUwsQ0FBYSxnQkFBYjtBQUNBLFdBQUtBLE9BQUwsQ0FBYSxnQkFBYjtBQUNBLFdBQUtBLE9BQUwsQ0FBYSxZQUFiO0FBQ0EsV0FBS0EsT0FBTCxDQUFhLGNBQWI7QUFDQSxXQUFLQSxPQUFMLENBQWEsY0FBYjtBQUNBLFVBQUcsS0FBS2hDLE1BQUwsQ0FBWUksT0FBWixDQUFvQmxDLFFBQXZCLEVBQWlDO0FBQ2hDLFlBQUs4RCxPQUFMLENBQWEsTUFBYjtBQUNBO0FBQ0Q7O0FBRUQsVUFBSzJqQixHQUFHZ0IsV0FBSCxDQUFlRSxLQUFwQjtBQUNDLFdBQUs3a0IsT0FBTCxDQUFhLE9BQWI7QUFDQSxXQUFLQSxPQUFMLENBQWEsT0FBYjtBQUNBOztBQUVELFVBQUsyakIsR0FBR2dCLFdBQUgsQ0FBZUcsT0FBcEI7QUFDQyxXQUFLOWtCLE9BQUwsQ0FBYSxZQUFiO0FBQ0EsV0FBS0EsT0FBTCxDQUFhLGdCQUFiO0FBQ0EsV0FBS0EsT0FBTCxDQUFhLFNBQWI7O0FBRUEsV0FBS3lpQixRQUFMLENBQWNzQyxrQkFBZCxDQUFpQyxLQUFLQyxvQkFBdEM7O0FBRUEsVUFBRyxLQUFLQyxTQUFSLEVBQW1CO0FBQ2xCLFlBQUt0SCxRQUFMO0FBQ0E7O0FBRUQsV0FBS3VILFlBQUw7QUFDQSxXQUFLQyxjQUFMO0FBQ0E7O0FBRUQsVUFBS3hCLEdBQUdnQixXQUFILENBQWVTLE1BQXBCO0FBQ0MsV0FBS3BsQixPQUFMLENBQWEsU0FBYjs7QUFFQSxVQUFHLEtBQUtpbEIsU0FBUixFQUFtQjtBQUNsQixZQUFLdEgsUUFBTDtBQUNBO0FBQ0Q7O0FBRUQsVUFBS2dHLEdBQUdnQixXQUFILENBQWVVLFNBQXBCO0FBQ0MsV0FBS3JuQixNQUFMLENBQVlnQyxPQUFaLENBQW9CLFlBQXBCO0FBQ0EsV0FBS2hDLE1BQUwsQ0FBWWdDLE9BQVosQ0FBb0IsU0FBcEI7O0FBRUEsV0FBS3lpQixRQUFMLENBQWNzQyxrQkFBZCxDQUFpQyxLQUFLQyxvQkFBdEM7O0FBRUE7QUEvQ0Q7QUFrREE7Ozs4QkFFVTtBQUNWL2Msa0JBQWMsS0FBS3FkLGVBQW5CO0FBQ0EsU0FBS0wsU0FBTCxHQUFpQixLQUFqQjs7QUFFQSxRQUFJLEtBQUtNLG1CQUFULEVBQThCO0FBQzdCLFVBQUtwa0IsS0FBTDtBQUNBOztBQUVELFNBQUtuQixPQUFMLENBQWEsUUFBYjtBQUNBOzs7b0NBRWdCO0FBQUE7O0FBQ2hCaUksa0JBQWMsS0FBS3FkLGVBQW5COztBQUVBLFNBQUtBLGVBQUwsR0FBdUJwZCxZQUFZLFlBQU07QUFDeEMsU0FBRyxPQUFLd2MsU0FBTCxLQUFtQmYsR0FBR2dCLFdBQUgsQ0FBZVMsTUFBckMsRUFBNkM7QUFDNUNuZCxvQkFBYyxPQUFLcWQsZUFBbkI7QUFDQSxNQUZELE1BRU8sSUFBRyxPQUFLbm5CLFdBQUwsS0FBcUIsT0FBS3FuQixjQUE3QixFQUE2QztBQUNuRCxhQUFLeGxCLE9BQUwsQ0FBYSxZQUFiO0FBQ0E7QUFDRCxLQU5zQixFQU1wQixHQU5vQixDQUF2QjtBQU9BOzs7a0NBRWM7QUFBQTs7QUFDZCxRQUFNeWxCLGlCQUFpQixTQUFqQkEsY0FBaUI7QUFBQSxZQUFPLE9BQUt6SixTQUFMLElBQWtCLElBQWxCLElBQTBCLE9BQUtBLFNBQUwsQ0FBZXJZLE1BQWYsS0FBMEIsQ0FBM0Q7QUFBQSxLQUF2Qjs7QUFFQXNFLGtCQUFjLEtBQUt5ZCxvQkFBbkI7QUFDQSxRQUNDLENBQUMsS0FBS0MsY0FBTixJQUNBLEtBQUtDLGtCQUFMLEVBREEsSUFFQUgsZ0JBSEQsRUFJRTtBQUNELFVBQUtoRCxRQUFMLENBQWNvRCxVQUFkLENBQXlCLFVBQXpCOztBQUVBLFVBQUtILG9CQUFMLEdBQTRCeGQsWUFBWSxZQUFNO0FBQzdDLFVBQUcsQ0FBQ3VkLGdCQUFELElBQXFCLE9BQUtHLGtCQUFMLEVBQXhCLEVBQW1EO0FBQ2xELGNBQUs1bEIsT0FBTCxDQUFhLGNBQWI7QUFDQWlJLHFCQUFjLE9BQUt5ZCxvQkFBbkI7QUFDQTtBQUNELE1BTDJCLEVBS3pCLEdBTHlCLENBQTVCO0FBTUE7QUFDRDs7O3dDQUVvQjtBQUNwQixRQUFJO0FBQ0gsWUFBTyxLQUFLakQsUUFBTCxDQUFjcUQsVUFBZCxDQUF5QixVQUF6QixLQUF3QyxJQUEvQztBQUNBLEtBRkQsQ0FFRSxPQUFPbGxCLEtBQVAsRUFBYztBQUNmLFlBQU8sS0FBUDtBQUNBO0FBQ0Q7OztxQkFyWk9VLEcsRUFBSztBQUNaLFFBQUdBLE9BQU8sSUFBVixFQUFnQjtBQUNoQixRQUFHLEtBQUtBLEdBQUwsSUFBWSxLQUFLQSxHQUFMLENBQVNOLEdBQVQsS0FBaUJNLElBQUlOLEdBQXBDLEVBQXlDOztBQUV6QyxRQUFNQSxNQUFNTSxJQUFJTixHQUFKLElBQVdNLElBQUl5a0IsRUFBM0I7O0FBRUEsU0FBS2xDLE9BQUwsR0FBZXhCLFFBQVEyRCxRQUFSLENBQWlCaGxCLEdBQWpCLENBQWY7O0FBRUEsUUFBRyxLQUFLaEQsTUFBTCxDQUFZSSxPQUFaLENBQW9CN0IsTUFBdkIsRUFBK0I7QUFDOUIsVUFBS0EsTUFBTCxHQUFjLEtBQUt5QixNQUFMLENBQVlJLE9BQVosQ0FBb0I3QixNQUFsQztBQUNBLEtBRkQsTUFFTztBQUNOLFVBQUtBLE1BQUwsR0FBYyxnQ0FBZ0MsS0FBS3NuQixPQUFyQyxHQUErQyxRQUE3RDtBQUNBO0FBQ0Q7Ozt1QkFVaUI7QUFDakIsV0FBTyxLQUFLcEIsUUFBTCxHQUFlLEtBQUtBLFFBQUwsQ0FBY3dELGNBQWQsRUFBZixHQUFnRCxDQUF2RDtBQUNBLEk7cUJBRWV0Z0IsSyxFQUFPO0FBQ3RCLFFBQUcsS0FBSytlLFNBQUwsS0FBbUJmLEdBQUdnQixXQUFILENBQWVTLE1BQXJDLEVBQTZDO0FBQzVDLFVBQUtJLGNBQUwsR0FBc0IsS0FBS3JuQixXQUEzQjtBQUNBOztBQUVELFFBQUksQ0FBQyxLQUFLOG1CLFNBQVYsRUFBcUI7QUFDcEIsVUFBS00sbUJBQUwsR0FBMkIsS0FBS3JrQixNQUFoQztBQUNBOztBQUVELFFBQUlSLGFBQUo7QUFDQSxRQUFJaUYsU0FBUyxLQUFLaEYsUUFBbEIsRUFBNEI7QUFDM0JELFlBQU8sS0FBS0MsUUFBWjtBQUNBLEtBRkQsTUFFTyxJQUFJZ0YsUUFBUSxDQUFaLEVBQWU7QUFDckJqRixZQUFPLENBQVA7QUFDQSxLQUZNLE1BRUE7QUFDTkEsWUFBT2lGLEtBQVA7QUFDQTs7QUFFRCxTQUFLc2YsU0FBTCxHQUFpQixJQUFqQjtBQUNBLFNBQUt4QyxRQUFMLENBQWN5RCxNQUFkLENBQXFCeGxCLElBQXJCLEVBQTJCLElBQTNCO0FBQ0EsU0FBSzFDLE1BQUwsQ0FBWWdDLE9BQVosQ0FBb0IsZ0JBQXBCLEVBQXNDLEVBQUU3QixhQUFjdUMsSUFBaEIsRUFBdEM7O0FBRUEsU0FBS1YsT0FBTCxDQUFhLFNBQWI7O0FBRUEsU0FBS21sQixjQUFMO0FBQ0E7Ozt1QkFFYztBQUNkLFdBQU8sS0FBSzFDLFFBQUwsSUFBaUIsS0FBS0EsUUFBTCxDQUFjMEQsV0FBL0IsR0FBNkMsS0FBSzFELFFBQUwsQ0FBYzBELFdBQWQsRUFBN0MsR0FBMkVDLEdBQWxGO0FBQ0E7Ozt1QkFFWTtBQUNaLFdBQVEsS0FBSzNELFFBQU4sR0FDTCxLQUFLaUMsU0FBTCxLQUFtQmYsR0FBR2dCLFdBQUgsQ0FBZUcsT0FBbEMsSUFBNkMsS0FBS0osU0FBTCxLQUFtQmYsR0FBR2dCLFdBQUgsQ0FBZVUsU0FEMUUsR0FFSixJQUZIO0FBSUE7Ozt1QkFHVTtBQUNWLFdBQU8sS0FBSzVDLFFBQUwsQ0FBYzRELGVBQWQsRUFBUDtBQUNBLEk7cUJBRVExZ0IsSyxFQUFPO0FBQ2YsMEZBQWFBLEtBQWI7QUFDQSxTQUFLOGMsUUFBTCxDQUFjNkQsZUFBZCxDQUE4QjNnQixLQUE5QjtBQUNBLFNBQUszRixPQUFMLENBQWEsWUFBYjtBQUNBOzs7cUJBRVMyRixLLEVBQU87QUFBQTs7QUFDaEIsUUFBR0EsS0FBSCxFQUFVO0FBQ1QsVUFBSzhjLFFBQUwsQ0FBY3BDLElBQWQ7QUFDQSxLQUZELE1BRU87QUFDTixVQUFLb0MsUUFBTCxDQUFjOEQsTUFBZDtBQUNBOztBQUVEL2QsZUFBVyxZQUFNO0FBQ2hCLFlBQUt4SSxPQUFMLENBQWEsY0FBYjtBQUNBLEtBRkQsRUFFRyxFQUZIO0FBR0EsSTt1QkFFVztBQUNYLFdBQU8sS0FBS3lpQixRQUFMLENBQWMrRCxPQUFkLEVBQVA7QUFDQTs7O3VCQUVlO0FBQ2YsV0FBTyxLQUFLWixrQkFBTCxLQUNKLENBQUMsS0FBS25ELFFBQUwsQ0FBY2dFLFNBQWQsQ0FBd0IsVUFBeEIsRUFBb0MsV0FBcEMsS0FBb0QsRUFBckQsRUFBeURsSSxHQUF6RCxDQUE2RDJELFlBQTdELENBREksR0FFSixFQUZIO0FBR0E7Ozt1QkFFVztBQUNYLFFBQUcsS0FBSy9CLE1BQUwsS0FBZ0JyZCxTQUFoQixJQUE2QixLQUFLOGlCLGtCQUFMLEVBQWhDLEVBQTJEO0FBQzFELFlBQU8xRCxhQUFhLEtBQUtPLFFBQUwsQ0FBY2dFLFNBQWQsQ0FBd0IsVUFBeEIsRUFBb0MsT0FBcEMsQ0FBYixDQUFQO0FBQ0EsS0FGRCxNQUVPO0FBQ04sWUFBTyxLQUFLdEcsTUFBWjtBQUNBO0FBQ0QsSTtxQkFFU3hhLEssRUFBTztBQUNoQixTQUFLd2EsTUFBTCxHQUFjeGEsS0FBZDtBQUNBLFFBQUdBLFVBQVUsSUFBYixFQUFtQjtBQUNsQixVQUFLZ2dCLGNBQUwsR0FBc0IsSUFBdEI7QUFDQTtBQUNBLFVBQUtsRCxRQUFMLENBQWNpRSxZQUFkLENBQTJCLFVBQTNCOztBQUVBLFVBQUsxbUIsT0FBTCxDQUFhLGNBQWI7QUFDQTtBQUNBO0FBQ0QsU0FBS3lpQixRQUFMLENBQ0VrRSxTQURGLENBQ1ksVUFEWixFQUN3QixPQUR4QixFQUNpQyxFQUFFeEUsY0FBZXhjLE1BQU0xRCxJQUF2QixFQURqQyxFQUVFMGtCLFNBRkYsQ0FFWSxVQUZaLEVBRXdCLFFBRnhCLEVBRWtDLElBRmxDOztBQUlBLFFBQUcsS0FBS2hCLGNBQVIsRUFBd0I7QUFDdkI7QUFDQSxVQUFLbEQsUUFBTCxDQUFjb0QsVUFBZCxDQUF5QixVQUF6QjtBQUNBO0FBQ0QsU0FBSzdsQixPQUFMLENBQWEsY0FBYjtBQUNBOzs7cUJBbUNtQmlDLEksRUFBTTtBQUN6QixxR0FBd0JBLElBQXhCO0FBQ0EsUUFBTXZCLE9BQU8sS0FBS3ZDLFdBQWxCO0FBQ0EsUUFBTXlvQixTQUFTLEtBQUtuRSxRQUFMLENBQWNvRSxjQUFkLEVBQWY7O0FBRUEsUUFBR0QsV0FBV2pELEdBQUdnQixXQUFILENBQWVDLFNBQTFCLElBQXVDZ0MsV0FBV2pELEdBQUdnQixXQUFILENBQWVtQyxJQUFwRSxFQUEwRTtBQUN6RSxVQUFLckUsUUFBTCxDQUFjRyxVQUFkO0FBQ0E7O0FBRUQsU0FBS29DLG9CQUFMLEdBQTRCL2lCLElBQTVCO0FBQ0EsU0FBS3dnQixRQUFMLENBQWNzQyxrQkFBZCxDQUFpQzlpQixJQUFqQztBQUNBLFNBQUt3Z0IsUUFBTCxDQUFjeUQsTUFBZCxDQUFxQnhsQixJQUFyQjs7QUFFQSxRQUFHa21CLFdBQVdqRCxHQUFHZ0IsV0FBSCxDQUFlUyxNQUE3QixFQUFxQztBQUNwQyxVQUFLM0MsUUFBTCxDQUFjRSxTQUFkO0FBQ0E7QUFFRCxJO3VCQUVxQjtBQUFBOztBQUNyQixRQUFJLEtBQUtwRixnQkFBTCxJQUF5QixJQUE3QixFQUFtQztBQUNsQyxVQUFLQSxnQkFBTCxHQUF3QixLQUFLeEMseUJBQUwsR0FDdEJ0VixJQURzQixDQUNqQjtBQUFBLGFBQVEzSixLQUFLbUcsSUFBTCxLQUFjLE9BQUt3Z0IsUUFBTCxDQUFjc0Usa0JBQWQsRUFBdEI7QUFBQSxNQURpQixDQUF4QjtBQUVBO0FBQ0QsV0FBTyxLQUFLeEosZ0JBQVo7QUFDQTs7O3VCQUVZO0FBQ1osV0FBTyxLQUFLa0YsUUFBTCxHQUFnQixLQUFLQSxRQUFMLENBQWN1RSxTQUFkLEtBQTRCLEtBQTVDLEdBQW9ELENBQTNEO0FBQ0EsSTtxQkFFVXJoQixLLEVBQU87QUFBQTs7QUFDakIsNEZBQWVBLEtBQWY7QUFDQSxTQUFLOGMsUUFBTCxDQUFjd0UsU0FBZCxDQUF3QnRoQixRQUFRLEdBQWhDOztBQUVBNkMsZUFBVyxZQUFNO0FBQ2hCLFlBQUt4SSxPQUFMLENBQWEsY0FBYjtBQUNBLEtBRkQsRUFFRyxFQUZIO0FBSUE7Ozs0QkFnTmVnQixHLEVBQUs7QUFDcEIsUUFBSXZGLFNBQVMsSUFBYjtBQUNBLFFBQU15ckIsUUFBUTdFLFFBQVE4RSxTQUF0QjtBQUNBLFFBQU1DLFFBQVFwbUIsSUFBSW9tQixLQUFKLENBQVVGLEtBQVYsQ0FBZDtBQUNBLFFBQUdsbUIsSUFBSTJDLE1BQUosS0FBZSxFQUFsQixFQUFzQjtBQUNyQmxJLGNBQVN1RixHQUFUO0FBQ0EsS0FGRCxNQUVPLElBQUdvbUIsU0FBU0EsTUFBTSxDQUFOLEVBQVN6akIsTUFBVCxLQUFvQixFQUFoQyxFQUFvQztBQUMxQ2xJLGNBQVMyckIsTUFBTSxDQUFOLENBQVQ7QUFDQTtBQUNELFdBQU8zckIsTUFBUDtBQUNBOzs7O0dBaGJvQnlHLE07O0FBbWJ0Qm1nQixTQUFRNUIsVUFBUixHQUFxQjNlLFNBQVM3QyxhQUFULENBQXVCLE9BQXZCLENBQXJCO0FBQ0E7Ozs7O0FBS0FvakIsU0FBUTNCLGdCQUFSLEdBQTJCLFlBQVc7QUFDckM7QUFDQSxNQUFJO0FBQ0gsT0FBTWpqQixTQUFTNGtCLFFBQVE1QixVQUFSLENBQW1CaGpCLE1BQWxDOztBQUVBNGtCLFdBQVE1QixVQUFSLENBQW1CaGpCLE1BQW5CLEdBQTZCQSxTQUFTLENBQVYsR0FBZSxHQUEzQztBQUNBLFVBQU9BLFdBQVc0a0IsUUFBUTVCLFVBQVIsQ0FBbUJoakIsTUFBckM7QUFDQSxHQUxELENBS0UsT0FBT3NELENBQVAsRUFBVTtBQUNYLFVBQU8sS0FBUDtBQUNBO0FBQ0QsRUFWRDs7QUFZQXNoQixTQUFRL1ksU0FBUixDQUFrQnlNLG9CQUFsQixHQUF5Q3NNLFFBQVEzQixnQkFBUixFQUF6Qzs7QUFFQTJCLFNBQVE4RSxTQUFSLEdBQW9CLGlFQUFwQjs7QUFFQTlFLFNBQVFLLGFBQVIsR0FBd0I7QUFDdkIyRSxRQUFPLE1BRGdCO0FBRXZCQyxTQUFRLE1BRmU7QUFHdkJycUIsVUFBUyxNQUhjO0FBSXZCc3FCLFNBQVEsTUFKZTtBQUt2QkMsU0FBUSxNQUxlO0FBTXZCQyxVQUFTLE9BTmM7QUFPdkJDLFdBQVUsSUFQYTtBQVF2QkMsUUFBTztBQVJnQixFQUF4Qjs7QUFXQXRGLFNBQVFRLFNBQVIsR0FBb0IsWUFBVztBQUFBOztBQUM5QixNQUFHLEtBQUsrRSxPQUFSLEVBQWlCLE9BQU8saUJBQUVobEIsUUFBRixHQUFhRyxPQUFiLEVBQVA7O0FBRWpCLFNBQU8saUJBQUU4a0IsU0FBRixDQUFZLG9DQUFaLEVBQ0wvbkIsSUFESyxDQUNBO0FBQUEsVUFBTSxPQUFLOG5CLE9BQUwsR0FBZSxJQUFyQjtBQUFBLEdBREEsQ0FBUDtBQUVBLEVBTEQ7O0FBT0E1b0IsUUFBT3VLLGlCQUFQLENBQXlCLFNBQXpCLEVBQW9DOFksT0FBcEM7O0FBRUFyakIsUUFBT2lILE1BQVAsQ0FBYyxTQUFkLEVBQXlCO0FBQ3hCN0gsV0FBVTtBQUNUbkMsV0FBUyxTQURBO0FBRVRrQixhQUFXO0FBQ1ZDLFlBQVMsQ0FDUixDQUFDLE1BQUQsRUFBUyxRQUFULEVBQW1CLFVBQW5CLEVBQStCLE1BQS9CLEVBQXVDLFVBQXZDLEVBQW1ELFFBQW5ELEVBQTZELFVBQTdELEVBQXlFLFNBQXpFLEVBQW9GLFNBQXBGLEVBQStGLFlBQS9GLENBRFEsRUFFUixFQUZRLENBREM7QUFLVkMsZ0JBQWEsQ0FDWixDQUFDLE1BQUQsRUFBUyxRQUFULEVBQW1CLFVBQW5CLEVBQStCLE1BQS9CLEVBQXVDLFVBQXZDLEVBQW1ELFFBQW5ELEVBQTZELFVBQTdELEVBQXlFLFNBQXpFLEVBQW9GLFNBQXBGLEVBQStGLFlBQS9GLENBRFk7QUFMSDtBQUZGO0FBRGMsRUFBekI7O0FBZUEyQixRQUFPcUssTUFBUCxDQUFjLFNBQWQsRUFBeUIsVUFBUzVCLGFBQVQsRUFBd0I7O0FBRWhEO0FBQ0E0YSxVQUFRUSxTQUFSO0FBQ0EsRUFKRCxFOzs7Ozs7Ozs7O0FDaGdCQTs7Ozs7Ozs7Ozs7O0FBRUEsS0FBTTdqQixTQUFTaUwsT0FBT0UsUUFBdEI7QUFDQSxLQUFNc0MsWUFBWXpOLE9BQU9tRCxZQUFQLENBQW9CLFdBQXBCLENBQWxCO0FBQ0EsS0FBTW1NLE9BQU90UCxPQUFPbUQsWUFBUCxDQUFvQixNQUFwQixDQUFiO0FBQ0EsS0FBTXNILGdCQUFnQnpLLE9BQU95SyxhQUE3Qjs7S0FFTXFlLFM7OztBQUVMLHFCQUFZOXBCLE1BQVosRUFBb0JJLE9BQXBCLEVBQTZCO0FBQUE7O0FBQzVCQSxhQUFVLGlCQUFFK0gsTUFBRixDQUFTLEVBQVQsRUFBYTtBQUN0QjRoQixxQkFBa0IsR0FESTtBQUV0QkMsVUFBTztBQUZlLElBQWIsRUFHUDVwQixPQUhPLENBQVY7O0FBRDRCLHFIQUt0QkosTUFMc0IsRUFLZEksT0FMYzs7QUFNNUIsU0FBSzZwQixjQUFMLEdBQXNCLE1BQUs3c0IsT0FBTCxDQUFhcUssSUFBYixDQUFrQixZQUFsQixDQUF0QjtBQU40QjtBQU81Qjs7OzttQ0FFZTtBQUFBLG1CQUNtQixLQUFLckgsT0FEeEI7QUFBQSxRQUNQMnBCLGVBRE8sWUFDUEEsZUFETztBQUFBLFFBQ1VDLElBRFYsWUFDVUEsSUFEVjs7QUFFZixRQUFNRSxXQUFXLG9JQUU2Q0YsSUFGN0MsU0FFcURBLElBRnJELCtFQUdlLENBQUNBLElBQUQsR0FBUSxDQUh2QixjQUdpQ0EsT0FBTyxDQUh4Qyw0RUFHZ0hELGVBSGhILDZCQUd1SixDQUFDLENBQUQsR0FBS0EsZUFINUosdU5BU2YvVCxJQVRlLEVBQWpCO0FBVUEsU0FBSzVZLE9BQUwsR0FBZSxzQkFBRSxTQUFGLEVBQWEySixJQUFiLENBQWtCbWpCLFFBQWxCLEVBQTRCQyxRQUE1QixFQUFmOztBQUVBLFNBQUsvc0IsT0FBTCxDQUNFcUssSUFERixDQUNPLHdCQURQLEVBRUVuQixNQUZGLENBRVMsSUFBSWdLLElBQUosQ0FBUyxLQUFLdFEsTUFBZCxFQUFzQixFQUFFdUcsVUFBVyxNQUFiLEVBQXRCLEVBQTZDbkosT0FGdEQ7O0FBSUEsV0FBTyxLQUFLQSxPQUFaO0FBRUE7OztrQ0FFY2d0QixFLEVBQUk7QUFDbEIsU0FBS0gsY0FBTCxDQUNFaEksSUFERixHQUVFck0sT0FGRixDQUVVO0FBQ1IsMEJBQXNCLENBQUMsQ0FBRCxHQUFLLEtBQUt4VixPQUFMLENBQWEycEI7QUFEaEMsS0FGVixFQUlJLEtBQUszcEIsT0FBTCxDQUFhaXFCLE9BSmpCLEVBSTBCRCxFQUoxQjtBQUtBOzs7bUNBRWU7QUFDZixTQUFLSCxjQUFMLENBQW9CaEksSUFBcEI7QUFDQTs7O3FCQUVVdGEsSyxFQUFPO0FBQ2pCLFNBQUsyaUIsT0FBTCxHQUFlM2lCLEtBQWY7QUFDQSxTQUFLc2lCLGNBQUwsQ0FBb0IvakIsR0FBcEIsQ0FBd0IsbUJBQXhCLEVBQTZDLEVBQUV5QixRQUFRLENBQVYsSUFBZSxLQUFLdkgsT0FBTCxDQUFhMnBCLGVBQXpFO0FBQ0EsSTt1QkFFWTtBQUNaLFdBQU8sS0FBS08sT0FBWjtBQUNBOzs7O0dBcERzQjdiLFM7O0tBeURsQjhiLGE7OztBQUVMLHlCQUFZdnFCLE1BQVosRUFBb0JJLE9BQXBCLEVBQTZCO0FBQUE7O0FBQzVCQSxhQUFVLGlCQUFFK0gsTUFBRixDQUFTLEVBQVQsRUFBYTtBQUN0Qm5CLFdBQVEsRUFEYztBQUV0QmxILGlCQUFjLEVBRlE7QUFHdEJ1cUIsYUFBVSxLQUhZO0FBSXRCVixVQUFPLEtBSmU7QUFLdEI1cEIsUUFBSyxjQUFNLENBQUU7QUFMUyxJQUFiLEVBTVBLLE9BTk8sQ0FBVjs7QUFENEIsOEhBU3RCSixNQVRzQixFQVNkSSxPQVRjOztBQVc1QixVQUFLb3FCLFlBQUwsR0FBb0IsT0FBS3B0QixPQUFMLENBQWFxSyxJQUFiLENBQWtCLHdCQUFsQixDQUFwQjtBQUNBLFVBQUt6SCxNQUFMLENBQVlzQyxFQUFaLENBQWUsTUFBZixFQUF1QjtBQUFBLFdBQU0sT0FBSzJJLElBQUwsRUFBTjtBQUFBLElBQXZCO0FBQ0EsVUFBS2pMLE1BQUwsQ0FBWXNDLEVBQVosQ0FBZSxXQUFmLEVBQTRCO0FBQUEsV0FBTSxPQUFLMkksSUFBTCxFQUFOO0FBQUEsSUFBNUI7QUFDQSxVQUFLakwsTUFBTCxDQUFZc0MsRUFBWixDQUFlLE9BQWYsRUFBd0I7QUFBQSxXQUFNLE9BQUtoQyxJQUFMLEVBQU47QUFBQSxJQUF4Qjs7QUFFQSxVQUFLTixNQUFMLENBQVlzQyxFQUFaLENBQWUsWUFBZixFQUE2QixZQUFNO0FBQ2xDLFFBQUcsQ0FBQyxPQUFLdEMsTUFBTCxDQUFZK0ssS0FBaEIsRUFBdUI7QUFDdEIsWUFBS0UsSUFBTDtBQUNBO0FBQ0QsSUFKRDs7QUFNQSxVQUFLd2YsY0FBTCxDQUFvQnJ0QixPQUFwQixDQUE0QmtGLEVBQTVCLENBQStCLE9BQS9CLEVBQXdDLE9BQUs1QixJQUFMLENBQVU4QyxJQUFWLFFBQXhDO0FBQ0EsVUFBS2duQixZQUFMLENBQWtCbG9CLEVBQWxCLENBQXFCLE9BQXJCLEVBQThCLE9BQUtvb0IsTUFBTCxDQUFZbG5CLElBQVosUUFBOUI7O0FBdkI0QjtBQXlCNUI7Ozs7bUNBRWU7QUFBQSxvQkFDNkMsS0FBS3BELE9BRGxEO0FBQUEsUUFDUGlxQixPQURPLGFBQ1BBLE9BRE87QUFBQSxRQUNFcmpCLEtBREYsYUFDRUEsS0FERjtBQUFBLFFBQ1NsSCxXQURULGFBQ1NBLFdBRFQ7QUFBQSxRQUNzQnZCLE1BRHRCLGFBQ3NCQSxNQUR0QjtBQUFBLFFBQzhCb3JCLElBRDlCLGFBQzhCQSxJQUQ5QjtBQUFBLFFBQ29Dam5CLElBRHBDLGFBQ29DQSxJQURwQzs7QUFFZixRQUFNd25CLFdBQVcscVVBSzRCbGpCLEtBTDVCLHFQQVN5Q0EsS0FUekMsZ0ZBVStDbEgsV0FWL0MseUNBV080Qyw2Q0FBMkMrSSxjQUFjL0ksSUFBZCxDQUEzQyxjQUF5RSxFQVhoRixnRUFnQmZzVCxJQWhCZSxFQUFqQjs7QUFrQkEsU0FBS3lVLGNBQUwsR0FBc0IsSUFBSVgsU0FBSixDQUFjLEtBQUs5cEIsTUFBbkIsRUFBMkIsRUFBRXFxQixnQkFBRixFQUEzQixDQUF0Qjs7QUFFQSxTQUFLanRCLE9BQUwsR0FBZSxzQkFBRSxTQUFGLEVBQWEySixJQUFiLENBQWtCbWpCLFFBQWxCLEVBQTRCQyxRQUE1QixFQUFmOztBQUVBLFNBQUsvc0IsT0FBTCxDQUNFcUssSUFERixDQUNPLHdCQURQLEVBRUVuQixNQUZGLENBRVMsS0FBS21rQixjQUFMLENBQW9CcnRCLE9BRjdCOztBQUlBLFFBQUdtQixVQUFVLElBQWIsRUFBbUI7QUFDbEIsVUFBS25CLE9BQUwsQ0FDRXFLLElBREYsQ0FDTyx3QkFEUCxFQUVFdkIsR0FGRixDQUVNO0FBQ0osbUNBQTRCM0gsTUFBNUI7QUFESSxNQUZOO0FBS0E7O0FBRUQsUUFBR29yQixJQUFILEVBQVM7QUFDUixVQUFLdHNCLFFBQUwsQ0FBYyxxQkFBZDtBQUNBOztBQUVELFdBQU8sS0FBS0QsT0FBWjtBQUNBOzs7NEJBRVE7QUFDUm1OLGlCQUFhLEtBQUtvZ0IsUUFBbEI7QUFDQSxTQUFLbG9CLFdBQUwsQ0FBaUIscUJBQWpCO0FBQ0E7OzswQkFFTTtBQUNOLFFBQUcsS0FBS3JDLE9BQUwsQ0FBYTRDLEdBQWIsSUFBb0IsSUFBdkIsRUFBNkI7QUFDNUJpSixZQUFPMmUsUUFBUCxHQUFrQixLQUFLeHFCLE9BQUwsQ0FBYTRDLEdBQS9CO0FBQ0EsS0FGRCxNQUVPLElBQUksS0FBSzVDLE9BQUwsQ0FBYUwsRUFBYixJQUFtQixpQkFBRTZNLFVBQUYsQ0FBYSxLQUFLeE0sT0FBTCxDQUFhTCxFQUExQixDQUF2QixFQUFzRDtBQUM1RCxVQUFLSyxPQUFMLENBQWFMLEVBQWIsQ0FBZ0IsSUFBaEI7QUFDQTtBQUNEOzs7MEJBRU07QUFBQTs7QUFDTixRQUFHLEtBQUs4cUIsU0FBUixFQUFtQjs7QUFFbkIsU0FBS3p0QixPQUFMLENBQWFrRCxJQUFiOztBQUVBLFFBQUcsS0FBS0YsT0FBTCxDQUFhdXBCLElBQWhCLEVBQXNCO0FBQ3JCLFVBQUtjLGNBQUwsQ0FBb0JLLGNBQXBCO0FBQ0F2Z0Isa0JBQWEsS0FBS29nQixRQUFsQjtBQUNBLFVBQUtBLFFBQUwsR0FBZ0JuZ0IsV0FBVztBQUFBLGFBQU0sT0FBSzlKLElBQUwsRUFBTjtBQUFBLE1BQVgsRUFBOEIsS0FBS04sT0FBTCxDQUFhaXFCLE9BQTNDLENBQWhCO0FBQ0E7QUFDRDs7OzBCQUVNO0FBQ04sU0FBS2p0QixPQUFMLENBQWE2TixJQUFiOztBQUVBLFFBQUcsS0FBSzdLLE9BQUwsQ0FBYXVwQixJQUFoQixFQUFzQjtBQUNyQixVQUFLYyxjQUFMLENBQW9CTSxhQUFwQjtBQUNBLFVBQUtOLGNBQUwsQ0FBb0JPLE1BQXBCLEdBQTZCLENBQTdCO0FBQ0F6Z0Isa0JBQWEsS0FBS29nQixRQUFsQjtBQUNBO0FBQ0Q7Ozs7R0F6RzBCbGMsUzs7QUE4RzVCek4sUUFBT3FLLE1BQVAsQ0FBYyxNQUFkLEVBQXNCLFVBQVM1QixhQUFULEVBQXdCO0FBQzdDLE9BQUt3aEIsY0FBTCxHQUFzQixJQUFJVixhQUFKLENBQWtCLElBQWxCLEVBQXdCOWdCLGFBQXhCLENBQXRCOztBQUVBLE9BQUt0SSxZQUFMLENBQWtCbUYsTUFBbEIsQ0FBeUIsS0FBSzJrQixjQUFMLENBQW9CN3RCLE9BQTdDO0FBRUEsRUFMRCxFIiwiZmlsZSI6ImxlLXBsYXllci1mdWxsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvanMvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOWFlMDRmODRhMmU4NjdmYjI5NDQiLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cblxuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9jb21wb25lbnRzL0NvbnRyb2wnO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvQ29tcG9uZW50JztcbmltcG9ydCBQbGF5QnV0dG9uIGZyb20gJy4vY29tcG9uZW50cy9QbGF5QnV0dG9uJztcbmltcG9ydCBTcGxhc2hJY29uIGZyb20gJy4vY29tcG9uZW50cy9TcGxhc2hJY29uJztcblxuaW1wb3J0IEljb24gZnJvbSAnLi9jb21wb25lbnRzL0ljb24nO1xuaW1wb3J0IFRpbWUgZnJvbSAnLi9jb21wb25lbnRzL1RpbWVsaW5lL1RpbWUnO1xuaW1wb3J0IENvbnRyb2xDb2xsZWN0aW9uIGZyb20gJy4vY29tcG9uZW50cy9Db250cm9sQ29sbGVjdGlvbic7XG5pbXBvcnQgU2VjdGlvbnMgZnJvbSAnLi9jb21wb25lbnRzL1NlY3Rpb25zJztcbmltcG9ydCBFcnJvckRpc3BsYXkgZnJvbSAnLi9jb21wb25lbnRzL0Vycm9yRGlzcGxheSc7XG5pbXBvcnQgUG9zdGVyIGZyb20gJy4vY29tcG9uZW50cy9Qb3N0ZXInO1xuaW1wb3J0IEZ1bGxzY3JlZW5BcGkgZnJvbSAnLi9GdWxsc2NyZWVuQXBpJztcblxuaW1wb3J0IHsgY3JlYXRlRWwsIHNlY29uZHNUb1RpbWUsIG5vb3AgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7XG5cdElTX0FORFJPSURfUEhPTkUsXG5cdElTX0FORFJPSUQsXG5cdElTX0lQT0QsXG5cdElTX0lQSE9ORSxcblx0SVNfTU9CSUxFLFxuXHRJU19UT1VDSFxufSBmcm9tICcuL3V0aWxzL2Jyb3dzZXInO1xuXG5pbXBvcnQgQ29va2llIGZyb20gJy4vdXRpbHMvY29va2llJztcblxuaW1wb3J0IE1lZGlhRXJyb3IgZnJvbSAnLi9NZWRpYUVycm9yJztcblxuLy8gUmVnaXN0ZXIgY29tbW9uIGNvbnRyb2xzXG5pbXBvcnQgJy4vY29tcG9uZW50cy9QbGF5Q29udHJvbCc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9Wb2x1bWVDb250cm9sJztcbmltcG9ydCAnLi9jb21wb25lbnRzL1RpbWVsaW5lL1RpbWVsaW5lQ29udHJvbCc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9TZWN0aW9uQ29udHJvbCc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9GdWxsc2NyZWVuQ29udHJvbCc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9SYXRlQ29udHJvbCc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9CYWNrd2FyZENvbnRyb2wnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvU291cmNlQ29udHJvbCc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9TdWJ0aXRsZUNvbnRyb2wnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvRG93bmxvYWRDb250cm9sJztcbmltcG9ydCAnLi9jb21wb25lbnRzL0tleWJpbmRpbmdJbmZvQ29udHJvbCc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9UaW1lSW5mb0NvbnRyb2wnO1xuXG5pbXBvcnQgJy4vZW50aXR5L0h0bWw1JztcblxuaW1wb3J0ICdhcnJheS5wcm90b3R5cGUuZmluZCc7XG5cblxuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ2RpdmlkZXInLCBmdW5jdGlvbigpIHtcblx0cmV0dXJuIHtcblx0XHRlbGVtZW50IDogJCgnPGRpdi8+JykuYWRkQ2xhc3MoJ2RpdmlkZXInKVxuXHR9O1xufSk7XG5cblxuXG4vKipcbiAqIFJldHVybiBhcnJheSB3aXRoIGV4Y2x1ZGVkIGRpc3QncyBpdGVtcyBmcm9tIHNvdXJjZSBhcnJheVxuICpcbiAqIEBhY2Nlc3MgcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gc291cmNlXG4gKiBAcGFyYW0ge0FycmF5fSBkaXN0XG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqL1xuZnVuY3Rpb24gZXhjbHVkZUFycmF5KHNvdXJjZSwgZGlzdCkge1xuXHRjb25zdCByZXN1bHQgPSBbXS5jb25jYXQoc291cmNlKTtcblx0ZGlzdC5mb3JFYWNoKGl0ZW0gPT4ge1xuXHRcdGNvbnN0IGluZGV4ID0gcmVzdWx0LmluZGV4T2YoaXRlbSk7XG5cdFx0aWYgKGluZGV4ID4gLTEpIHtcblx0XHRcdHJlc3VsdC5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdFx0cmV0dXJuXG5cdFx0fVxuXHR9KVxuXG5cdHJldHVybiByZXN1bHQ7XG59XG5cbmNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuXHRlbnRpdHkgOiAnSHRtbDUnLFxuXHRhdXRvcGxheSA6IGZhbHNlLFxuXHRoZWlnaHQgOiAnYXV0bycsXG5cdGxvb3AgOiBmYWxzZSxcblx0bXV0ZWQgOiBmYWxzZSxcblx0cHJlbG9hZCA6ICdtZXRhZGF0YScsXG5cdHBvc3RlciA6IG51bGwsXG5cdHN2Z1BhdGggOiAnJyxcblx0aW5uYWN0aXZpdHlUaW1lb3V0IDogNTAwMCxcblx0cmF0ZSA6IHtcblx0XHRzdGVwIDogMC4yNSxcblx0XHRtaW4gOiAwLjUsXG5cdFx0bWF4IDogNC4wLFxuXHRcdGRlZmF1bHQgOiAxXG5cdH0sXG5cdHBsYXliYWNrIDoge1xuXHRcdHN0ZXAgOiB7XG5cdFx0XHRzaG9ydCA6IDUsXG5cdFx0XHRtZWRpdW0gOiAxMCxcblx0XHRcdGxvbmcgOiAzMFxuXHRcdH1cblx0fSxcblx0Y29udHJvbHMgOiB7XG5cdFx0Y29tbW9uIDogW1xuXHRcdFx0WydwbGF5JywgJ3ZvbHVtZScsICdkaXZpZGVyJywgJ3RpbWVsaW5lJywgICdkaXZpZGVyJywgJ3NlY3Rpb24nLCAnZGl2aWRlcicsICdmdWxsc2NyZWVuJ10sXG5cdFx0XHRbJ3JhdGUnLCAnZGl2aWRlcicsICdiYWNrd2FyZCcsICdkaXZpZGVyJywgJ3NvdXJjZScsICdkaXZpZGVyJywgJ3N1YnRpdGxlJywgJ2RpdmlkZXInLCAnZG93bmxvYWQnLCAnZGl2aWRlcicsICdrZXliaW5kaW5nIGluZm8nXVxuXHRcdF0sXG5cdFx0ZnVsbHNjcmVlbiA6IFtcblx0XHRcdFsncGxheScsICd2b2x1bWUnLCAnZGl2aWRlcicsICd0aW1lbGluZScsICdkaXZpZGVyJywgJ3JhdGUnLCAnZGl2aWRlcicsICdrZXliaW5kaW5nIGluZm8nLCAgJ2RpdmlkZXInLCAnYmFja3dhcmQnLCAnZGl2aWRlcicsICdzb3VyY2UnLCAnZGl2aWRlcicsICdzdWJ0aXRsZScsICdkaXZpZGVyJywgJ2Rvd25sb2FkJywgJ2RpdmlkZXInLCAnc2VjdGlvbicsICdkaXZpZGVyJywgJ2Z1bGxzY3JlZW4nXVxuXHRcdF0sXG5cdFx0bWluaSA6IFtcblx0XHRcdFsncGxheScsICd2b2x1bWUnLCAnZGl2aWRlcicsICdmdWxsc2NyZWVuJywgJ2RpdmlkZXInLCAndGltZWluZm8nXVxuXHRcdF0sXG5cdFx0J2NvbW1vbjphbmRyb2lkJyA6IFtcblx0XHRcdFsncGxheScsICd0aW1lbGluZScsICdmdWxsc2NyZWVuJ10sXG5cdFx0XHRbJ3JhdGUnLCAnc291cmNlJywgJ3NlY3Rpb24nXVxuXHRcdF0sXG5cdFx0J2Z1bGxzY3JlZW46bW9iaWxlJyA6IFtcblx0XHRcdFsncGxheScsICd0aW1lbGluZScsICdmdWxsc2NyZWVuJ10sXG5cdFx0XHRbJ3JhdGUnLCAnc291cmNlJywgJ3NlY3Rpb24nXVxuXHRcdF0sXG5cdFx0J2NvbW1vbjppb3MnIDogW1xuXHRcdFx0WydwbGF5JywgJ3JhdGUnLCAndGltZWxpbmUnLCAnc291cmNlJ11cblx0XHRdLFxuXHR9LFxuXHRjb250cm9sc09wdGlvbnMgOiB7XG5cblx0XHRjb21tb24gOiB7XG5cdFx0XHRhbGlnbiA6IFsnanVzdGlmeScsICdsZWZ0J10sXG5cdFx0XHQvLyBtb2JpbGUgOiB0cnVlXG5cdFx0fSxcblx0XHRmdWxsc2NyZWVuIDoge1xuXHRcdFx0YWxpZ24gOiAnanVzdGlmeSdcblx0XHR9LFxuXHRcdCdjb21tb246YW5kcm9pZCcgOiB7XG5cdFx0XHRhbGlnbiA6IFsnanVzdGlmeScsICdyaWdodCddXG5cdFx0fSxcblxuXHRcdCdmdWxsc2NyZWVuOm1vYmlsZScgOiB7XG5cdFx0XHRhbGlnbiA6IFsnanVzdGlmeScsICdyaWdodCddXG5cdFx0fVxuXHR9LFxuXHR2b2x1bWUgOiB7XG5cdFx0ZGVmYXVsdCA6IDAuNCxcblx0XHRtdXRlbGltaXQgOiAwLjA1LFxuXHRcdHN0ZXAgOiAwLjFcblx0fSxcblx0a2V5QmluZGluZyA6IFtcblx0XHR7XG5cdFx0XHRrZXkgOiAzMixcblx0XHRcdGluZm8gOiBbJ1NwYWNlJ10sXG5cdFx0XHRkZXNjcmlwdGlvbiA6ICfQndCw0YfQsNGC0Ywg0L/RgNC+0LjQs9GA0YvQstCw0L3QuNC1IC8g0L/QvtGB0YLQsNCy0LjRgtGMINC90LAg0L/QsNGD0LfRgycsXG5cdFx0XHRmbiA6IChwbGF5ZXIpID0+IHtcblx0XHRcdFx0cGxheWVyLnZpZGVvLnRvZ2dsZVBsYXkoKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdHtcblx0XHRcdGtleSA6IDM3LFxuXHRcdFx0aW5mbyA6IFsn4oaQJ10sXG5cdFx0XHRkZXNjcmlwdGlvbiA6IGDQn9C10YDQtdC80L7RgtCw0YLRjCDQvdCwIDEwINGB0LXQutGD0L3QtCDQvdCw0LfQsNC0YCxcblx0XHRcdGZuIDogKHBsYXllcikgPT4ge1xuXHRcdFx0XHRwbGF5ZXIudmlkZW8uY3VycmVudFRpbWUgLT0gcGxheWVyLm9wdGlvbnMucGxheWJhY2suc3RlcC5tZWRpdW07XG5cdFx0XHRcdHBsYXllci5zcGxhc2hJY29uLnNob3coJ3VuZG8nKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdHtcblx0XHRcdGtleSA6IDM5LFxuXHRcdFx0aW5mbyA6IFsn4oaSJ10sXG5cdFx0XHRkZXNjcmlwdGlvbiA6IGDQn9C10YDQtdC80L7RgtCw0YLRjCDQvdCwIDEwINGB0LXQutGD0L3QtCDQstC/0LXRgNGR0LRgLFxuXHRcdFx0Zm4gOiAocGxheWVyKSA9PiB7XG5cdFx0XHRcdHBsYXllci52aWRlby5jdXJyZW50VGltZSArPSBwbGF5ZXIub3B0aW9ucy5wbGF5YmFjay5zdGVwLm1lZGl1bTtcblx0XHRcdFx0cGxheWVyLnNwbGFzaEljb24uc2hvdygncmVkbycpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0c2hpZnRLZXkgOiB0cnVlLFxuXHRcdFx0aW5mbyA6IFsnU2hpZnQnLCAn4oaQJ10sXG5cdFx0XHRkZXNjcmlwdGlvbiA6ICfQn9C10YDQtdC50YLQuCDQvdCwINC/0YDQtdC00YvQtNGD0YnRg9GOINGB0LXQutGG0LjRjicsXG5cdFx0XHRrZXkgOiAzNyxcblx0XHRcdGZuIDogKHBsYXllcikgPT4ge1xuXHRcdFx0XHRpZihwbGF5ZXIuc2VjdGlvbnMgPT0gbnVsbCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRwbGF5ZXIuc2VjdGlvbnMucHJldigpO1xuXG5cdFx0XHR9XG5cdFx0fSxcblx0XHR7XG5cdFx0XHRzaGlmdEtleSA6IHRydWUsXG5cdFx0XHRrZXkgOiAzOSxcblx0XHRcdGluZm8gOiBbJ1NoaWZ0JywgJ+KGkiddLFxuXHRcdFx0ZGVzY3JpcHRpb24gOiAn0J/QtdGA0LXQudGC0Lgg0L3QsCDRgdC70LXQtNGD0Y7RidGD0Y4g0YHQtdC60YbQuNGOJyxcblx0XHRcdGZuIDogKHBsYXllcikgPT4ge1xuXHRcdFx0XHRpZihwbGF5ZXIuc2VjdGlvbnMgPT0gbnVsbCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRwbGF5ZXIuc2VjdGlvbnMubmV4dCgpXG5cdFx0XHR9XG5cdFx0fSxcblx0XHR7XG5cdFx0XHRrZXkgOiAzOCxcblx0XHRcdGluZm8gOiBbJ+KGkSddLFxuXHRcdFx0ZGVzY3JpcHRpb24gOiAn0KPQstC10LvQuNGH0LjRgtGMINCz0YDQvtC80LrQvtGB0YLRjCcsXG5cdFx0XHRmbiA6IChwbGF5ZXIpID0+IHtcblx0XHRcdFx0cGxheWVyLnZpZGVvLnZvbHVtZSArPSBwbGF5ZXIub3B0aW9ucy52b2x1bWUuc3RlcDtcblxuXHRcdFx0XHRwbGF5ZXIuc3BsYXNoSWNvbi5zaG93KHBsYXllci5jYWxjVm9sdW1lSWNvbihwbGF5ZXIudmlkZW8udm9sdW1lKSk7XG5cblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0e1xuXHRcdFx0a2V5IDogNDAsXG5cdFx0XHRpbmZvIDogWyfihpMnXSxcblx0XHRcdGRlc2NyaXB0aW9uIDogJ9Cj0LzQtdC90YzRiNC40YLRjCDQs9GA0L7QvNC60L7RgdGC0YwnLFxuXHRcdFx0Zm4gOiAocGxheWVyKSA9PiB7XG5cdFx0XHRcdHBsYXllci52aWRlby52b2x1bWUgLT0gcGxheWVyLm9wdGlvbnMudm9sdW1lLnN0ZXA7XG5cblx0XHRcdFx0cGxheWVyLnNwbGFzaEljb24uc2hvdyhwbGF5ZXIuY2FsY1ZvbHVtZUljb24ocGxheWVyLnZpZGVvLnZvbHVtZSkpO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHR7XG5cdFx0XHRrZXkgOiA3MCxcblx0XHRcdGluZm8gOiBbJ2YnXSxcblx0XHRcdGRlc2NyaXB0aW9uIDogJ9Ce0YLQutGA0YvRgtGML9C30LDQutGA0YvRgtGMINC/0L7Qu9C90L7RjdC60YDQsNC90YvQuSDRgNC10LbQuNC8Jyxcblx0XHRcdGZuIDogKHBsYXllcikgPT4ge1xuXHRcdFx0XHRwbGF5ZXIudG9nZ2xlRnVsbHNjcmVlbigpO1xuXHRcdFx0fVxuXHRcdH1cblx0XSxcblx0cGx1Z2lucyA6IHtcblx0XHRtaW5pcGxheWVyIDoge31cblx0fSxcblx0b25QbGF5ZXJJbml0ZWQgOiBub29wXG59O1xuXG4vKipcbiAqIEBjbGFzcyBQbGF5ZXJcbiAqIEBleHRlbmRzIENvbXBvbmVudFxuICogQHBhcmFtIHtqUXVlcnl9IGVsZW1lbnQgRWxlbWVudCB3aGVuIHBsYXllciB3aWxsIGluaXRcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuYXV0b3BsYXk9ZmFsc2VdXG4gKiBXaGVuIHByZXNlbnQsIHRoZSB2aWRlbyB3aWxsIGF1dG9tYXRpY2FsbHkgc3RhcnQgcGxheWluZyBhcyBzb29uIGFzIGl0IGNhbiBkbyBzbyB3aXRob3V0IHN0b3BwaW5nLlxuICogQHBhcmFtIHtTdHJpbmd8TnVtYmVyfSBbb3B0aW9ucy5oZWlnaHQ9J2F1dG8nXSBIZWlnaHQgb2YgdmlkZW8gY29udGFpbmVyXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMud2lkdGhdIFdpZHRoIG9mIHZpZGVvIGNvbnRhaW5lclxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5sb29wPWZhbHNlXVxuICogV2hlbiBwcmVzZW50LCBpdCBzcGVjaWZpZXMgdGhhdCB0aGUgdmlkZW8gd2lsbCBzdGFydCBvdmVyIGFnYWluLCBldmVyeSB0aW1lIGl0IGlzIGZpbmlzaGVkLlxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5tdXRlZD1mYWxzZV1cbiAqIFdoZW4gcHJlc2VudCwgaXQgc3BlY2lmaWVzIHRoYXQgdGhlIGF1ZGlvIG91dHB1dCBvZiB0aGUgdmlkZW8gc2hvdWxkIGJlIG11dGVkLlxuICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLnByZWxvYWQ9J21ldGFkYXRhJ10gQ2FuIGJlICgnYXV0byd8J21ldGFkYXRhJ3wnbm9uZScpXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMucG9zdGVyXSBQYXRoIHRvIHBvc3RlciBvZiB2aWRlb1xuICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLnN2Z1BhdGhdIFBhdGggdG8gc3ZnIHNwcml0ZSBmb3IgaWNvbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5yYXRlXSBSYXRlIG9wdGlvbnNcbiAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5yYXRlLnN0ZXA9MC4yNV0gU3RlcCBvZiBpbmNyZWFzZS9kZWNyZWFzZSBieSByYXRlIGNvbnRyb2xcbiAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5yYXRlLm1pbj0wLjVdIE1pbiBvZiByYXRlXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMucmF0ZS5tYXg9NC4wXSBNYXggb2YgcmF0ZVxuICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLnJhdGUuZGVmYXVsdD0xXVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLnBsYXliYWNrXSBQbGF5YmFjayBvcHRpb25zXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMucGxheWJhY2suc3RlcF1cbiAqIEBwYXJhbSB7TnVibWVyfSBbb3B0aW9ucy5wbGF5YmFjay5zdGVwLnNob3J0PTVdXG4gKiBAcGFyYW0ge051Ym1lcn0gW29wdGlvbnMucGxheWJhY2suc3RlcC5tZWRpdW09MzBdXG4gKiBAcGFyYW0ge051Ym1lcn0gW29wdGlvbnMucGxheWJhY2suc3RlcC5sb25nPTYwXVxuICogQHBhcmFtIHtPYmVqY3R9IFtvcHRpb25zLmNvbnRyb2xzXSBPYmplY3Qgb2YgY29udHJvbHNcbiAqIEBwYXJhbSB7U3RyaW5nW119IFtvcHRpb25zLmNvbnRyb2xzLmNvbW1vbl0gQXJyYXkgb2YgY29udHJvbHMgZm9yIGRlZmF1bHQgdmlld1xuICogQHBhcmFtIHtTdHJpbmdbXX0gW29wdGlvbnMuY29udHJvbHMuZnVsbHNjcmVlbl0gQXJyYXkgb2YgY29udHJvbCBmb3IgZnVsbHNyZWVuIHZpZXdcbiAqIEBwYXJhbSB7U3RyaW5nW119IFtvcHRpb25zLmNvbnRyb2xzLm1pbmldIEFycmF5IG9mIGNvbnRyb2wgZm9yIG1pbmlwbGF5ZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5leGNsdWRlQ29udHJvbHNdIE9iamVjdCBvZiBleGNsdWRlIGNvbnRyb2xzLiBTdHJ1Y3R1cmUgaXMgdGhlIHNhbWUgYXMgdGhhdCBvZiBvcHRpb25zLmNvbnRyb2xzXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMudm9sdW1lXSBWb2x1bWUncyBvcHRpb25zXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMudm9sdW1lLmRlZmF1bHQ9MC40XSBEZWZhdWx0IHZvbHVtZVxuICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLnZvbHVtZS5tdXRlbGltaXQ9MC4wNV0gRGVsdGEgd2hlbiB2b2x1bWUgaXMgbXV0ZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy52b2x1bWUuc3RlcD0wLjA1XVxuICogQHBhcmFtIHtPYmplY3RbXX0gW29wdGlvbnMua2V5YmluZGluZ11cbiAqIE9iamVjdCB3aXRoIGtleWJpbmRpbmcgb3B0aW9ucywgd2hlbiBrZXkgaXQncyBuYW1lIG9mIGtleSBiaW5kaW5nLCBhbmQgdmFsdWUgaXQncyBrZXkgYmluZGluZyBzZXR0aW5nc1xuICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmtleWJpbmRpbmdbXS5rZXldIENvZGUgb2Yga2V5IGJpbmRpbmcgKGZvciBleGFtcGxlIDMyIGl0J3Mgc3BhY2UpXG4gKiBAcGFyYW0ge1N0cmluZ1tdfSBbb3B0aW9ucy5rZXliaW5kaW5nW10uaW5mb10gQXJyYXkgb2Yga2V5c3Ryb2tlcyBvcmRlclxuICogQHBhcmFtIHtTdHJpbmd9IG9wdGlvbnMua2V5YmluZGluZ1tdLmRlc2NyaXB0aW9uXSBEZXNjcmlwdGlvbiBvZiBrZXkgYmluZGluZ1xuICogQHBhcmFtIHtGdW5jdGlvbn0gb3B0aW9ucy5rZXliaW5kaW5nW10uZm5dIENhbGxiYWNrXG4gKiBAcGFyYW0ge09iamVjdHxCb29sZWFufSBbb3B0aW9ucy5taW5pcGxheWVyPWZhbHNlXVxuICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLm1pbmlwbGF5ZXIud2lkdGhdIFdpZHRoIG9mIG1pbmlwbGF5ZXIgY29udGFpbmVyXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMubWluaXBsYXllci53aWR0aF0gTWluaVBsYXllcidzIHdpZHRoXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuc2VjdGlvbkNvbnRhaW5lcl0gU2VsZWN0b3IgZm9yIHNlY3Rpb25zXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMucGx1Z2luc10gS2V5cyBvZiBvYmplY3RzIGFyZSBuYW1lIG9mIHBsdWdpbiwgdmFsdWUgLSBwbHVnaW4gb3B0aW9uc1xuICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fSBbb3B0aW9ucy5kYXRhXSBVcmwgb3IgSlNPTiB3aXRoIGRhdGEgZm9yIHBsYXllclxuICogQHBhcmFtIHtBcnJheX0gW29wdGlvbnMuZGF0YS5zZWN0aW9uc10gU2VjdGlvbnMgYXJyYXlcbiAqL1xuXG5jbGFzcyBQbGF5ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3RvcihlbGVtZW50LCBvcHRpb25zKSB7XG5cblx0XHRvcHRpb25zLmNyZWF0ZUVsZW1lbnQgPSBmYWxzZTtcblxuXHRcdHN1cGVyKG51bGwsIG9wdGlvbnMpO1xuXG5cdFx0dGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XG5cblx0XHQvKipcblx0XHQgKiBET00gY29udGFpbmVyIHRvIGhvbGQgaW5uZXIgb2YgcGxheWVyXG5cdFx0ICpcblx0XHQgKiBAbWVtYmVyb2YhIFBsYXllciNcblx0XHQgKiBAdHlwZSB7alF1ZXJ5fVxuXHRcdCAqL1xuXHRcdHRoaXMuaW5uZXJFbGVtZW50ID0gY3JlYXRlRWwoJ2RpdicpO1xuXG5cdFx0Ly8gVXNlcnMgb3B0aW9uc1xuXHRcdHRoaXMuX3VzZXJPcHRpb25zID0gb3B0aW9ucztcblx0XHR0aGlzLl9pbml0T3B0aW9ucygpO1xuXG5cdFx0aWYodGhpcy5vcHRpb25zLnN2Z1BhdGggPT09ICcnKSB7XG5cdFx0XHRQbGF5ZXIuX2xvYWRTVkdTcHJpdGUoUGxheWVyLmRlZmF1bHRTcHJpdGUpO1xuXHRcdH1cblxuXHRcdHRoaXMuX3ZpZXcgPSAnY29tbW9uJztcblxuXHRcdC8qKlxuXHRcdCAqIERPTSBjb250YWluZXIgdG8gaG9sZCBhbGwgcGxheWVyXG5cdFx0ICpcblx0XHQgKiBAbWVtYmVyb2YhIFBsYXllciNcblx0XHQgKiBAdHlwZSB7alF1ZXJ5fVxuXHRcdCAqL1xuXHRcdHRoaXMuZWxlbWVudCA9IHRoaXMuY3JlYXRlRWxlbWVudCgpO1xuXG5cdFx0dGhpcy5sb2FkRW50aXR5KHRoaXMub3B0aW9ucy5lbnRpdHksIHsgY3R4IDogZWxlbWVudCB9KTtcblx0XHQvKipcblx0XHQgKiBWaWRlbyBodG1sNSBjb21wb25lbnRcblx0XHQgKlxuXHRcdCAqIEBtZW1iZXJvZiEgUGxheWVyI1xuXHRcdCAqIEB0eXBlIHtFbnRpdHl9XG5cdFx0ICovXG5cdFx0dGhpcy52aWRlbyA9IHRoaXMuZW50aXR5O1xuXG5cdFx0Ly8gQ3JlYXRlIGNvbnRyb2xzXG5cdFx0Ly8gVE9ETzogbW92ZSB0aGlzIGFjdGlvbiB0byB0aGUgY3JlYXRlRWxlbWVudFxuXHRcdHRoaXMuY29udHJvbHMgPSB7fTtcblx0XHR0aGlzLl9pbml0Q29udHJvbHMoKTtcblxuXHRcdC8qKlxuXHRcdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdHRoaXMuX2RibGNsaWNrVGltZW91dCA9IG51bGw7XG5cblx0XHR0aGlzLl9pbml0U2VjdGlvbnMoKS50aGVuKChkYXRhKSA9PiB7XG5cdFx0XHQvKipcblx0XHRcdCAqIFNlY3Rpb25zIGluaXQgZXZlbnRcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI3NlY3Rpb25zaW5pdFxuXHRcdFx0ICogQGV4YW1wbGVcblx0XHRcdCAqIGNvbnN0IHBsYXllciA9IG5ldyBQbGF5ZXIoJCgnI3ZpZGVvJyksIG9wdGlvbnMpO1xuXHRcdFx0ICogcGxheWVyLm9uKCdzZWN0aW9uc2luaXQnLCAoZSwgZGF0YSkgPT4gY29zbm9sZS5sb2coZGF0YSkpO1xuXHRcdFx0ICpcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdzZWN0aW9uc2luaXQnLCBkYXRhKTtcblx0XHR9KTtcblx0XHR0aGlzLl9pbml0UGx1Z2lucygpO1xuXG5cdFx0dGhpcy5fbGlzdGVuSG90S2V5cygpO1xuXG5cdFx0dGhpcy5fdXNlckFjdGl2aXR5ID0gZmFsc2U7XG5cdFx0dGhpcy5fbGlzdGVuVXNlckFjdGl2aXR5KCk7XG5cblx0XHR0aGlzLl93YWl0aW5nVGltZW91dHMgPSBbXTtcblxuXHRcdC8qIFJldHJpZ2dlciB7QGxpbmsgRW50aXR5fSBFdmVudHMgKi9cblx0XHRbXG5cdFx0XHQvKipcblx0XHRcdCAqIGR1cmF0aW9uY2hhbmdlIHBsYXllciBldmVudFxuXHRcdFx0ICpcblx0XHRcdCAqIEBldmVudCBQbGF5ZXIjZHVyYXRpb25jaGFuZ2Vcblx0XHRcdCAqL1xuXHRcdFx0J2R1cmF0aW9uY2hhbmdlJyxcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBwcm9ncmVzcyBodG1sNSBtZWRpYSBldmVudFxuXHRcdFx0ICpcblx0XHRcdCAqIEBldmVudCBQbGF5ZXIjcHJvZ3Jlc3Ncblx0XHRcdCAqL1xuXHRcdFx0J3Byb2dyZXNzJyxcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBkYmxjbGlja1xuXHRcdFx0ICpcblx0XHRcdCAqIEBldmVudCBQbGF5ZXIjZGJjbGlja1xuXHRcdFx0ICovXG5cdFx0XHQnZGJsY2xpY2snLFxuXG5cdFx0XHQvKipcblx0XHRcdCAqIGRibGNsaWNrXG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciNkYmNsaWNrXG5cdFx0XHQgKi9cblx0XHRcdCdjbGljaycsXG5cblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBjYW5wbGF5IGh0bWw1IG1lZGlhIGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciNjYW5wbGF5XG5cdFx0XHQgKi9cblx0XHRcdCdjYW5wbGF5JyxcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBxdWFsaXR5Y2hhbmdlIGh0bWw1XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciNxdWFsaXR5Y2hhbmdlXG5cdFx0XHQgKi9cblx0XHRcdCdxdWFsaXR5Y2hhbmdlJyxcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBxdWFsaXR5Y2hhbmdlIGh0bWw1XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciN0cmFja3NjaGFuZ2Vcblx0XHRcdCAqL1xuXHRcdFx0J3RyYWNrc2NoYW5nZScsXG5cblxuXG5cdFx0XS5mb3JFYWNoKGV2ZW50TmFtZSA9PiB7XG5cdFx0XHR0aGlzLnZpZGVvLm9uKGV2ZW50TmFtZSwgKCkgPT4ge1xuXHRcdFx0XHR0aGlzLnRyaWdnZXIoZXZlbnROYW1lKTtcblx0XHRcdH0pXG5cdFx0fSk7XG5cblx0XHR0aGlzLnZpZGVvLm9uZSgncGxheScsICgpID0+IHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRmlyc3QgcGxheSBldmVudFxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBldmVudCBQbGF5ZXIjZmlyc3RwbGF5XG4gICAgICAgICAgICAgKi9cblx0XHRcdHRoaXMudHJpZ2dlcignZmlyc3RwbGF5Jyk7XG5cdFx0XHR0aGlzLnJlbW92ZUNsYXNzKCdsZXBsYXllci0tdmlyZ2luJyk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLnZpZGVvLm9uKCd0aW1ldXBkYXRlJywgKCkgPT4ge1xuXHRcdFx0aWYgKHRoaXMudmlkZW8uY3VycmVudFRpbWUgPiAwKSB7XG5cdFx0XHRcdHRoaXMucmVtb3ZlQ2xhc3MoJ2xlcGxheWVyLS12aXJnaW4nKTtcblx0XHRcdH1cblxuXHRcdFx0LyoqXG5cdFx0XHQgKiB0aW1ldXBkYXRlIGh0bWw1IG1lZGlhIGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciN0aW1ldXBkYXRlXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMudHJpZ2dlcigndGltZXVwZGF0ZScsIHsgdGltZSA6IHRoaXMudmlkZW8uY3VycmVudFRpbWUsIGR1cmF0aW9uIDogdGhpcy52aWRlby5kdXJhdGlvbiB9KTtcblxuXHRcdH0pXG5cblx0XHR0aGlzLnZpZGVvLm9uKCdsb2Fkc3RhcnQnLCAoKSA9PiB7XG5cdFx0XHR0aGlzLnJlbW92ZUNsYXNzKCdsZXBsYXllci0tZW5kZWQnKTtcblxuXHRcdFx0dGhpcy5lcnJvciA9IG51bGw7XG5cdFx0XHQvKipcblx0XHRcdCAqIGxvYWRzdGFydCBwbGF5ZXIgZXZlbnRcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI2xvYWRzdGFydFxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLnRyaWdnZXIoJ2xvYWRzdGFydCcpO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy52aWRlby5vbignc2Vla2luZycsICgpID0+IHtcblx0XHRcdHRoaXMuX3N0YXJ0V2FpdGluZygpO1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBzZWVraW5nIGh0bWw1IG1lZGlhIGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciNzZWVraW5nXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMudHJpZ2dlcignc2Vla2luZycpO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy52aWRlby5vbignc2Vla2VkJywgKCkgPT4ge1xuXHRcdFx0dGhpcy5fc3RvcFdheXRpbmcoKTtcblx0XHRcdC8qKlxuXHRcdFx0ICogc2Vla2VkIGh0bWw1IG1lZGlhIGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciNzZWVrZWRcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdzZWVrZWQnKTtcblx0XHR9KTtcblxuXHRcdHRoaXMudmlkZW8ub24oJ3ZvbHVtZWNoYW5nZScsICgpID0+IHtcblx0XHRcdC8qKlxuXHRcdFx0ICogdm9sdW1lY2hhbmdlIGh0bWw1IG1lZGlhIGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciN2b2x1bWVjaGFuZ2Vcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy50cmlnZ2VyKCd2b2x1bWVjaGFuZ2UnLCB7IHZvbHVtZSA6IHRoaXMudmlkZW8udm9sdW1lIH0pO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy52aWRlby5vbigncG9zdGVyY2hhbmdlJywgKGUsIGRhdGEpID0+IHtcblx0XHRcdGNvbnN0IHVybCA9IGRhdGEudXJsO1xuXHRcdFx0dGhpcy5wb3N0ZXIudXJsID0gdXJsO1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdwb3N0ZXJjaGFuZ2UnKTtcblx0XHR9KTtcblxuXHRcdHRoaXMudmlkZW8ub24oJ3BsYXknLCAoZSkgPT4ge1xuXHRcdFx0dGhpcy5yZW1vdmVDbGFzcygnbGVwbGF5ZXItLWVuZGVkJyk7XG5cdFx0XHR0aGlzLnJlbW92ZUNsYXNzKCdsZXBsYXllci0tcGF1c2VkJyk7XG5cdFx0XHR0aGlzLmFkZENsYXNzKCdsZXBsYXllci0tcGxheWluZycpO1xuXG5cdFx0XHQvKipcblx0XHRcdCAqIHBsYXkgaHRtbDUgbWVkaWEgZXZlbnRcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI3BsYXlcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdwbGF5Jyk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLnZpZGVvLm9uKCdwYXVzZScsICgpID0+IHtcblx0XHRcdHRoaXMucmVtb3ZlQ2xhc3MoJ2xlcGxheWVyLS1wbGF5aW5nJyk7XG5cdFx0XHR0aGlzLmFkZENsYXNzKCdsZXBsYXllci0tcGF1c2VkJyk7XG5cblx0XHRcdC8qKlxuXHRcdFx0ICogcGF1c2UgaHRtbDUgbWVkaWEgZXZlbnRcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI3BhdXNlXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMudHJpZ2dlcigncGF1c2UnKTtcblx0XHR9KTtcblxuXHRcdHRoaXMudmlkZW8ub24oJ3BsYXlpbmcnLCAoKSA9PiB7XG5cdFx0XHR0aGlzLl9zdG9wV2F5dGluZygpO1xuXG5cdFx0XHQvKipcblx0XHRcdCAqIHBsYXlpbmcgaHRtbDUgbWVkaWEgZXZlbnRcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI3BsYXlpbmdcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdwbGF5aW5nJyk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLnZpZGVvLm9uKCdyYXRlY2hhbmdlJywgKCkgPT4ge1xuXHRcdFx0LyoqXG5cdFx0XHQgKiByYXRlIGh0bWw1IG1lZGlhIGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciNyYXRlXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMudHJpZ2dlcigncmF0ZWNoYW5nZScsIHsgcmF0ZSA6IHRoaXMudmlkZW8ucmF0ZSB9KTtcblx0XHR9KTtcblxuXHRcdHRoaXMudmlkZW8ub24oJ2VuZGVkJywgKCkgPT4ge1xuXHRcdFx0dGhpcy5hZGRDbGFzcygnbGVwbGF5ZXItLWVuZGVkJyk7XG5cblx0XHRcdGlmKHRoaXMub3B0aW9ucy5sb29wKSB7XG5cdFx0XHRcdHRoaXMuY3VycmVudFRpbWUgPSAwO1xuXHRcdFx0XHR0aGlzLnZpZGVvLnBsYXkoKTtcblx0XHRcdH0gZWxzZSBpZiAoIXRoaXMudmlkZW8ucGF1c2VkKSB7XG5cdFx0XHRcdHRoaXMudmlkZW8ucGF1c2UoKTtcblx0XHRcdH1cblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBlbmRlZCBodG1sNSBtZWRpYSBldmVudFxuXHRcdFx0ICpcblx0XHRcdCAqIEBldmVudCBQbGF5ZXIjZW5kZWRcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdlbmRlZCcpO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy52aWRlby5vbignY2FucGxheXRocm91Z2gnLCAoKSA9PiB7XG5cdFx0XHR0aGlzLl9zdG9wV2F5dGluZygpO1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBjYW5wbGF5dGhyb3VnaCBodG1sNSBtZWRpYSBldmVudFxuXHRcdFx0ICpcblx0XHRcdCAqIEBldmVudCBQbGF5ZXIjY2FucGxheXRocm91Z2hcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdjYW5wbGF5dGhyb3VnaCcpO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy52aWRlby5vbignd2FpdGluZycsICgpID0+IHtcblx0XHRcdHRoaXMuX3N0YXJ0V2FpdGluZygpO1xuXG5cdFx0XHR0aGlzLnZpZGVvLm9uZSgndGltZXVwZGF0ZScsICgpID0+IHRoaXMuX3N0b3BXYXl0aW5nKCkpO1xuXG5cdFx0XHQvKipcblx0XHRcdCAqIHdhaXRpbmcgaHRtbDUgbWVkaWEgZXZlbnRcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI3dhaXRpbmdcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy50cmlnZ2VyKCd3YWl0aW5nJyk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLnZpZGVvLm9uKCdlcnJvcicsIChlLCBkYXRhKSA9PiB7XG5cdFx0XHR0aGlzLmVycm9yID0gbmV3IE1lZGlhRXJyb3IoZGF0YS5jb2RlKTtcblx0XHR9KTtcblxuXHRcdHRoaXMudmlkZW8uaW5pdCgpLnRoZW4oKCkgPT4ge1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBQbGF5ZXIgaW5pdCBldmVudFxuXHRcdFx0ICpcblx0XHRcdCAqIEBldmVudCBQbGF5ZXIjaW5pdGVkXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMudHJpZ2dlcignaW5pdGVkJyk7XG5cblx0XHRcdGlmKHRoaXMub3B0aW9ucy50aW1lKSB7XG5cdFx0XHRcdHRoaXMuY3VycmVudFRpbWUgPSB0aGlzLm9wdGlvbnMudGltZTtcblx0XHRcdH1cblxuXHRcdFx0aWYodGhpcy52aWRlby5zcmMgIT0gbnVsbCAmJiB0aGlzLm9wdGlvbnMuYXV0b3BsYXkpIHtcblx0XHRcdFx0dGhpcy5wbGF5KCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblxuXHRcdHRoaXMub24oJ2Z1bGxzY3JlZW5jaGFuZ2UnLCB0aGlzLl9vbkZ1bGxzY3JlZW5DaGFuZ2UuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5vbignY2xpY2snLCB0aGlzLl9vbkNsaWNrLmJpbmQodGhpcykpO1xuXHRcdHRoaXMub24oJ2RibGNsaWNrJywgdGhpcy5fb25EYmNsaWNrLmJpbmQodGhpcykpO1xuXHRcdHRoaXMub24oJ2luaXRlZCcsIHRoaXMuX29uSW5pdGVkLmJpbmQodGhpcykpO1xuXHRcdHRoaXMub24oJ3BsYXknLCB0aGlzLl9vblBsYXkuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5vbigncGF1c2UnLCB0aGlzLl9vblBhdXNlLmJpbmQodGhpcykpO1xuXG5cdFx0JChkb2N1bWVudCkub24oRnVsbHNjcmVlbkFwaS5mdWxsc2NyZWVuY2hhbmdlLCB0aGlzLl9vbkVudGl0eUZ1bGxzY3JlbkNoYW5nZS5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdGdldCBlbnRpdHkoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2VudGl0eTtcblx0fVxuXG5cdGxvYWRFbnRpdHkobmFtZSwgb3B0aW9ucykge1xuXHRcdGNvbnN0IEVudGl0eSA9IFBsYXllci5nZXRDb21wb25lbnQobmFtZSk7XG5cdFx0dGhpcy5fZW50aXR5ID0gbmV3IEVudGl0eSh0aGlzLCBvcHRpb25zKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTdGFydHMgcGxheWluZyB0aGUgdmlkZW9cblx0ICpcblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQGV4YW1wbGVcblx0ICogY29uc3QgcGxheWVyID0gbmV3IFBsYXllcigkKFwiI3ZpZGVvXCIpLG9wdGlvbnMpO1xuXHQgKiAkKCcuc29tZS1idXR0b24nKS5vbignY2xpY2snLCAoKSA9PiBwbGF5ZXIucGxheSgpKTtcblx0ICovXG5cdHBsYXkoKSB7XG5cdFx0cmV0dXJuIHRoaXMudmlkZW8ucGxheSgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFBhdXNlcyB0aGUgY3VycmVudGx5IHBsYXlpbmcgdmlkZW9cblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICovXG5cdHBhdXNlKCkge1xuXHRcdHJldHVybiB0aGlzLnZpZGVvLnBhdXNlKCk7XG5cdH1cblxuXHQvKipcblx0ICogVG9nZ2xlIHRoZSBjdXJyZW50bHkgcGxheWluZyB2aWRlb1xuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKi9cblx0dG9nZ2xlUGxheSgpIHtcblx0XHRyZXR1cm4gdGhpcy52aWRlby50b2dnbGVQbGF5KCk7XG5cdH1cblxuXHQvKipcblx0ICogQmVnaW4gbG9hZGluZyB0aGUgc3JjIGRhdGFcblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICovXG5cdGxvYWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMudmlkZW8ubG9hZCgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIE9uIHNldCB2aWV3IGNhbGxiYWNrXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSB2aWV3IFZpZXcgbmFtZVxuXHQgKiBAcmV0dXJucyB7UGxheWVyfSB0aGlzXG5cdCAqIEBleGFtcGxlXG5cdCAqIGNvbnN0IHBsYXllciA9IG5ldyBQbGF5ZXIoJCgnI3ZpZGVvJyksIG9wdGlvbnMpO1xuXHQgKiBwbGF5ZXIub25TZXRWaWV3KCdtaW5pJywgKCkgPT4gY29uc29sZS5sb2coJ01pbmlwbGF5ZXIgeWVhaCEnKVxuXHQgKiAgICAgLm9uU2V0VmlldygnZnVsbHNjcmVlbicsICgpID0+IGNvbnNvbGUubG9nKCdGdWxsc2NyZWVuIGJvb20hJylcblx0ICogICAgIC5vblNldFZpZXcoJ2NvbW1vbicsICgpID0+IGNvbnNvbGUubG9nKCdDb21tb24gdmlldyAtIGxvbCcpO1xuXHQgKi9cblx0b25TZXRWaWV3KHZpZXcsIC4uLmFyZ3MpIHtcblx0XHR0aGlzLm9uKGBzZXR2aWV3LiR7dmlld31gLCAuLi5hcmdzKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0LyoqXG5cdCAqIENoYW5nZSBzb3VyY2UgYW5kIHNhdmUgdGltZSwgcmF0ZVxuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAcGFyYW0ge09iamVjdH0gcXVhbGl0eVxuXHQgKiBAcGFyYW0ge1N0cmluZ30gW3F1YWxpdHkudGl0bGVdIFRoZSBuYW1lIG9mIHF1YWxpdHV0IGUueCBTRCBvciBIRFxuXHQgKiBAcGFyYW0ge1N0cmluZ30gcXVhbGl0eS51cmxcblx0ICovXG5cdGNoYW5nZVF1YWxpdHkocXVhbGl0eSkge1xuXHRcdGNvbnN0IHZpZGVvID0gdGhpcy52aWRlbztcblx0XHRpZihxdWFsaXR5ID09IG51bGwpIHJldHVybjtcblx0XHRjb25zdCB0aW1lID0gdGhpcy5jdXJyZW50VGltZTtcblx0XHRjb25zdCByYXRlID0gdGhpcy5yYXRlO1xuXHRcdGNvbnN0IGlzUGF1c2VkID0gdGhpcy5wYXVzZWQ7XG5cblx0XHR2aWRlby5zcmMgPSBxdWFsaXR5O1xuXHRcdHRoaXMucGxheWJhY2tSYXRlID0gcmF0ZTtcblx0XHR0aGlzLmN1cnJlbnRUaW1lID0gdGltZTtcblxuXHRcdGlmKGlzUGF1c2VkKSB7XG5cdFx0XHR0aGlzLnBhdXNlKClcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5wbGF5KClcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogT24gZGVsIHZpZXcgY2FsbGJhY2tcblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHBhcmFtIHtTdHJpbmd9IHZpZXcgVmlldyBuYW1lXG5cdCAqIEByZXR1cm5zIHtQbGF5ZXJ9IHRoaXNcblx0ICogQGV4YW1wbGVcblx0ICogY29uc3QgcGxheWVyID0gbmV3IFBsYXllcigkKCcjdmlkZW8nKSwgb3B0aW9ucyk7XG5cdCAqIHBsYXllci5vbkRlbFZpZXcoJ21pbmknLCAoKSA9PiBjb25zb2xlLmxvZygnRXhpdCBtaW5pcGxheWVyJylcblx0ICovXG5cdG9uRGVsVmlldyh2aWV3LCAuLi5hcmdzKSB7XG5cdFx0dGhpcy5vbihgZGVsdmlldy4ke3ZpZXd9YCwgLi4uYXJncyk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgc29tZSBkYXRhIGZvciBwbGF5ZXJcblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHJldHVybnMge2pRdWVyeS5wcm9taXNlfSBQcm9taXNlXG5cdCAqL1xuXHRnZXREYXRhKCkge1xuXHRcdGNvbnN0IGRmZCA9IG5ldyAkLkRlZmVycmVkKCk7XG5cblx0XHRpZiAodGhpcy5fZGF0YSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRkZmQucmVzb2x2ZSh0aGlzLl9kYXRhKTtcblx0XHRcdHJldHVybiBkZmQucHJvbWlzZSgpXG5cdFx0fVxuXG5cdFx0aWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuZGF0YSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdHJldHVybiAkLmFqYXgoe1xuXHRcdFx0XHR1cmwgOiB0aGlzLm9wdGlvbnMuZGF0YSxcblx0XHRcdFx0bWV0aG9kIDogJ0dFVCcsXG5cdFx0XHRcdGRhdGFUeXBlIDogJ2pzb24nXG5cdFx0XHR9KS5wcm9taXNlKCk7XG5cblx0XHR9IGVsc2UgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuZGF0YSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdGRmZC5yZXNvbHZlKHRoaXMub3B0aW9ucy5kYXRhKTtcblx0XHRcdHJldHVybiBkZmQucHJvbWlzZSgpXG5cdFx0fVxuXHR9XG5cblx0Z2V0U2VjdGlvbkRhdGEoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0RGF0YSgpXG5cdFx0XHQudGhlbihkYXRhID0+IHtcblx0XHRcdFx0cmV0dXJuIGRhdGEuc2VjdGlvbnNcblx0XHRcdH0pXG5cdH1cblxuXHQvKipcblx0ICogUmVxdWVzdCBmdWxsc2NyZWVuXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBmaXJlcyBQbGF5ZXIjZnVsbHNjcmVlbmNoYW5nZVxuXHQgKi9cblx0cmVxdWVzdEZ1bGxzY3JlZW4oKSB7XG5cdFx0Y29uc3QgZnNBcGkgPSBGdWxsc2NyZWVuQXBpO1xuXG5cdFx0aWYoZnNBcGkucmVxdWVzdEZ1bGxzY3JlZW4pIHtcblx0XHRcdC8vIENhbGwgSFRNTDUgVmlkZW8gYXBpIHJlcXVlc3RGdWxsc2NyZWVuXG5cdFx0XHR0aGlzLmVsZW1lbnRbMF1bZnNBcGkucmVxdWVzdEZ1bGxzY3JlZW5dKCk7XG5cblx0XHRcdC8qKlxuXHRcdFx0ICogZnVsbHNjcmVlbmNoYW5nZSBodG1sNSBtZWRpYSBldmVudFxuXHRcdFx0ICpcblx0XHRcdCAqIEBldmVudCBQbGF5ZXIjZnVsbHNjcmVlbmNoYW5nZVxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLnRyaWdnZXIoJ2Z1bGxzY3JlZW5jaGFuZ2UnLCB0cnVlKTtcblx0XHR9IGVsc2UgaWYgKHRoaXMudmlkZW8uc3VwcG9ydHNGdWxsU2NyZWVuKCkpIHtcblx0XHRcdHRoaXMudmlkZW8uZW50ZXJGdWxsc2NyZWVuKCk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEV4aXQgZnVsbHNjcmVlblxuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAZmlyZXMgUGxheWVyI2Z1bGxzY3JlZW5jaGFuZ2Vcblx0ICovXG5cdGV4aXRGdWxsc2NyZWVuKCkge1xuXHRcdGNvbnN0IGZzQXBpID0gRnVsbHNjcmVlbkFwaTtcblxuXHRcdGlmKGZzQXBpLmV4aXRGdWxsc2NyZWVuKSB7XG5cdFx0XHRkb2N1bWVudFtmc0FwaS5leGl0RnVsbHNjcmVlbl0oKTtcblx0XHR9IGVsc2UgaWYgKHRoaXMudmlkZW8uc3VwcG9ydHNGdWxsU2NyZWVuKCkpIHtcblx0XHRcdHRoaXMudmlkZW8uZXhpdEZ1bGxzY3JlZW4oKTtcblx0XHR9XG5cblx0XHR0aGlzLnRyaWdnZXIoJ2Z1bGxzY3JlZW5jaGFuZ2UnLCBmYWxzZSk7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBUb2dnbGUgZnVsbHNjcmVlblxuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAZmlyZXMgUGxheWVyI2Z1bGxzY3JlZW5jaGFuZ2Vcblx0ICovXG5cdHRvZ2dsZUZ1bGxzY3JlZW4oKSB7XG5cdFx0aWYodGhpcy52aWV3ID09PSAnZnVsbHNjcmVlbicpIHtcblx0XHRcdHRoaXMuZXhpdEZ1bGxzY3JlZW4oKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnJlcXVlc3RGdWxsc2NyZWVuKClcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogR2V0IENvbnRyb2xDb2xsZWN0aW9uIG9mIFBsYXllciBieSBuYW1lIChlLnggJ2NvbW1vbicsICdmdWxsc2NyZWVuJylcblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgLSBOYW1lIG9mIENvbnRyb2xDb2xsZWN0aW9uXG5cdCAqIEByZXR1cm5zIHtDb250cm9sQ29sbGVjdGlvbn1cblx0ICovXG5cdGdldENvbnRyb2xzKG5hbWUpIHtcblx0XHRyZXR1cm4gdGhpcy5jb250cm9sc1tuYW1lXTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm4gdGhlIHdpZHRoIG9mIHBsYXllci5cblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHJldHVybnMge051bWJlcn0gV2lkdGggaW4gcHhcblx0ICovXG5cdGdldFdpZHRoKCkge1xuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQud2lkdGgoKVxuXHR9XG5cblx0LyoqXG5cdCAqIENvbXBsZXRlIHRoZSBzZWN0aW9ucywgYnkgdGhlIGFkZGl0aW9uYWwgZmllbGQgJ2VuZCcgaW4gZWFjaCBzZWN0aW9uXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge09iamVjdH0gc2VjdGlvbnMgLSBTZWN0aW9uc1xuXHQgKiBAcmV0dXJucyB7T2JqZWN0fSBOZXcgc2VjdGlvbnNcblx0ICovXG5cdF9jb21wbGV0ZVNlY3Rpb25zKHNlY3Rpb25zKSB7XG5cdFx0aWYgKHNlY3Rpb25zID09IG51bGwgfHwgc2VjdGlvbnMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm5cblx0XHR9XG5cdFx0bGV0IG5ld1NlY3Rpb25zID0gW10uY29uY2F0KHNlY3Rpb25zKVxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbmV3U2VjdGlvbnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGxldCBlbmRTZWN0aW9uO1xuXHRcdFx0aWYgKGkgPCAobmV3U2VjdGlvbnMubGVuZ3RoIC0gMSkpIHtcblx0XHRcdFx0ZW5kU2VjdGlvbiA9IG5ld1NlY3Rpb25zW2krMV0uYmVnaW5cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGVuZFNlY3Rpb24gPSB0aGlzLnZpZGVvLmR1cmF0aW9uO1xuXHRcdFx0fVxuXHRcdFx0bmV3U2VjdGlvbnNbaV0uZW5kID0gZW5kU2VjdGlvbjtcblx0XHR9XG5cdFx0cmV0dXJuIG5ld1NlY3Rpb25zO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBhbmQgc2V0IHRoZSBjdXJyZW50IHBsYXliYWNrIHBvc2l0aW9uIGluIHRoZSBhdWRpby92aWRlbyAoaW4gc2Vjb25kcylcblx0ICogR2V0dGVyIGFuZCBzZXR0ZXJcblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQG1lbWJlcm9mISBQbGF5ZXIjXG5cdCAqIEB0eXBlIHtOdWJtZXJ9XG5cdCAqL1xuXHRnZXQgY3VycmVudFRpbWUoKSB7XG5cdFx0cmV0dXJuIHRoaXMudmlkZW8uY3VycmVudFRpbWU7XG5cdH1cblxuXHRzZXQgY3VycmVudFRpbWUodmFsdWUpIHtcblx0XHR0aGlzLnZpZGVvLmN1cnJlbnRUaW1lID0gdmFsdWU7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyB0aGUgbGVuZ3RoIG9mIHRoZSBjdXJyZW50IGF1ZGlvL3ZpZGVvIChpbiBzZWNvbmRzKVxuXHQgKiBHZXR0ZXJcblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQG1lbWJlcm9mISBQbGF5ZXIjXG5cdCAqIEB0eXBlIHtOdWJtZXJ9XG5cdCAqL1xuXHRnZXQgZHVyYXRpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMudmlkZW8uZHVyYXRpb247XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyB3aGV0aGVyIHRoZSBwbGF5YmFjayBvZiB0aGUgYXVkaW8vdmlkZW8gaGFzIGVuZGVkIG9yIG5vdFxuXHQgKiBHZXR0ZXJcblx0ICpcblx0ICogQG1lbWJlcm9mISBQbGF5ZXIjXG5cdCAqIEB0eXBlIHtCb29sZWFufVxuXHQgKi9cblx0Z2V0IGVuZGVkKCkge1xuXHRcdHJldHVybiB0aGlzLnZpZGVvLmVuZGVkO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgYW5kIHNldCB3aGV0aGVyIHRoZSBwbGF5YmFjayBvZiB0aGUgYXVkaW8vdmlkZW8gaGFzIGVuZGVkIG9yIG5vdFxuXHQgKiBHZXR0ZXIgYW5kIHNldHRlclxuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAbWVtYmVyb2YhIFBsYXllciNcblx0ICogQHR5cGUge01lZGlhRXJyb3J8U3RyaW5nfVxuXHQgKiBAZmlyZXMgUGxheWVyI2Vycm9yXG5cdCAqL1xuXHRnZXQgZXJyb3IoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2Vycm9yIHx8IG51bGw7XG5cdH1cblxuXHRzZXQgZXJyb3IodmFsdWUpIHtcblx0XHRpZiAodmFsdWUgPT09IG51bGwpIHtcblx0XHRcdHRoaXMuX2Vycm9yID0gbnVsbDtcblx0XHRcdHRoaXMucmVtb3ZlQ2xhc3MoJ2xlcGxheWVyLS1lcnJvcicpO1xuXHRcdFx0aWYodGhpcy5lcnJvckRpc3BsYXkpIHtcblx0XHRcdFx0dGhpcy5lcnJvckRpc3BsYXkuZWxlbWVudC5oaWRlKClcblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblx0XHR0aGlzLl9lcnJvciA9IG5ldyBNZWRpYUVycm9yKHZhbHVlKTtcblxuXHRcdHRoaXMuYWRkQ2xhc3MoJ2xlcGxheWVyLS1lcnJvcicpO1xuXG5cdFx0LyoqXG5cdFx0ICogZXJyb3IgZXZlbnRcblx0XHQgKlxuXHRcdCAqIEBldmVudCBQbGF5ZXIjZXJyb3Jcblx0XHQgKiBAcHJvcGVydHkge01lZGlhRXJyb3J9IGVycm9yXG5cdFx0ICogQGV4YW1wbGVcblx0XHQgKiBjb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyKCQoJyN2aWRlbycpLCBvcHRpb25zKTtcblx0XHQgKiBwbGF5ZXIub24oJ2Vycm9yJywgKGUsIGRhdGEpID0+IGNvbnNvbGUuZXJyb3IoZGF0YS5lcnJvcikpO1xuXHRcdCAqL1xuXHRcdHRoaXMudHJpZ2dlcignZXJyb3InLCB7IGVycm9yIDogdGhpcy5fZXJyb3J9KTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Z2V0IHJhdGUoKSB7XG5cdFx0cmV0dXJuIHRoaXMudmlkZW8ucmF0ZTtcblx0fVxuXG5cdHNldCByYXRlKHZhbHVlKSB7XG5cdFx0dGhpcy52aWRlby5yYXRlID0gdmFsdWU7XG5cdH1cblxuXHRnZXQgcGF1c2VkKCkge1xuXHRcdHJldHVybiB0aGlzLnZpZGVvLnBhdXNlZDtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm4gdGhlIGhlaWdodCBvZiBwbGF5ZXIuIElmIHlvdSB3YW50IGdldCBoZWlnaHQgb25seSBvZiB2aWRlbyBlbGVtZW50LCB1c2UgdGhpcy52aWRlby5oZWlnaHQgb3Igd2hhdGV2ZXJcblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHR5cGUge051bWJlcn1cblx0ICogQG1lbWJlcm9mISBQbGF5ZXIjXG5cdCAqL1xuXHRnZXQgaGVpZ2h0KCkge1xuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQuaGVpZ2h0KClcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm4gdW5uZWNlc3NhcnkgdmlkZW8gaGVpZ3RoXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEB0eXBlIHtOdW1iZXJ9XG5cdCAqIEBtZW1iZXJvZiEgUGxheWVyI1xuXHQgKi9cblx0Z2V0IHZpZGVvSGVpZ2h0KCkge1xuXHRcdHJldHVybiB0aGlzLnZpZGVvLmhlaWdodDtcblx0fVxuXG5cblx0LyoqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEB0eXBlIHtCb29sZWFufVxuXHQgKiBAbWVibWVyb2YhIFBsYXllciNcblx0ICovXG5cdGdldCB1c2VyQWN0aXZlKCkge1xuXHRcdHJldHVybiB0aGlzLl91c2VyQWN0aXZlIHx8IGZhbHNlO1xuXHR9XG5cblx0c2V0IHVzZXJBY3RpdmUodmFsdWUpIHtcblx0XHRpZih2YWx1ZSAhPT0gdGhpcy5nZXRVc2VyQWN0aXZlKSB7XG5cdFx0XHR0aGlzLl91c2VyQWN0aXZlID0gdmFsdWU7XG5cdFx0XHR0aGlzLnRvZ2dsZUNsYXNzKCdsZXBsYXllci0tdXNlci1hY3RpdmUnLCB2YWx1ZSk7XG5cdFx0XHQvKipcblx0XHRcdCAqIFVzZXIgYWN0aXZlIGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciN1c2VyYWN0aXZlXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMudHJpZ2dlcigndXNlcmFjdGl2ZScpO1xuXHRcdH1cblx0fVxuXG5cblx0LyoqXG5cdCAqIFNldCBhbmQgZ2V0IHBsYXllciB2aWV3LiBWaWV3IENhbiBiZSAnY29tbW9uJywgJ2Z1bGxzY3JlZW4nLCAnbWluaSd3XG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEB0eXBlIHtTdHJpbmd9XG5cdCAqIEBtZW1iZXJvZiEgUGxheWVyI1xuXHQgKi9cblx0Z2V0IHZpZXcoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3ZpZXc7XG5cdH1cblxuXHRzZXQgdmlldyh2aWV3KSB7XG5cdFx0aWYodGhpcy52aWV3ICE9IG51bGwpIHtcblx0XHRcdHRoaXMucmVtb3ZlQ2xhc3MoYGxlcGxheWVyLS0ke3RoaXMudmlld31gKTtcblx0XHRcdHRoaXMudHJpZ2dlcihgZGVsdmlldy4ke3RoaXMudmlld31gKTtcblx0XHR9XG5cblx0XHR0aGlzLl92aWV3ID0gdmlldztcblx0XHR0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoYGxlcGxheWVyLS0ke3ZpZXd9YClcblx0XHR0aGlzLnRyaWdnZXIoYHNldHZpZXcuJHt2aWV3fWApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvKipcblx0ICogUmVtb3ZlIHVubmVjZXNzYXJ5IGF0dHJpYnV0ZXMsIGFuZCBzZXQgc29tZSBhdHRycyBmcm9tIG9wdGlvbnMgKGxvb3AsIHBvc3RlciBldGMuLi4pLiBDcmVhdGUgbWFpbiBET00gb2JqZWN0c1xuXHQgKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0Y29uc3Qgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcblx0XHRjb25zdCBlbGVtZW50ID0gdGhpcy5fZWxlbWVudDtcblxuXHRcdHRoaXMuZWxlbWVudCA9IGNyZWF0ZUVsKCdkaXYnKTtcblxuXG5cdFx0dGhpcy5lbGVtZW50ID0gdGhpcy5lbGVtZW50XG5cdFx0XHQuYWRkQ2xhc3MoJ2xlcGxheWVyJylcblx0XHRcdC5hdHRyKCd0YWJpbmRleCcsIDApXG5cdFx0XHQuY3NzKCd3aWR0aCcsIG9wdGlvbnMud2lkdGggJiYgJzEwMCUnKVxuXHRcdFx0LmNzcygnbWF4LXdpZHRoJywgb3B0aW9ucy53aWR0aClcblxuXHRcdC8qKlxuXHRcdCAqIEVycm9yIGRpc3BsYXkgY29tcG9uZW50LlxuXHRcdCAqXG5cdFx0ICogQHR5cGUge0Vycm9yRGlzcGxheX1cblx0XHQgKiBAbWVtYmVyb2YhIFBsYXllciNcblx0XHQgKi9cblx0XHR0aGlzLmVycm9yRGlzcGxheSA9IG5ldyBFcnJvckRpc3BsYXkodGhpcyk7XG5cblxuXHRcdC8qKlxuXHRcdCAqIFBsYXkgYnV0dG9uIGNvbXBvbmVudC5cblx0XHQgKlxuXHRcdCAqIEB0eXBlIHtQbGF5QnV0dG9ufVxuXHRcdCAqIEBtZW1iZXJvZiEgUGxheWVyI1xuXHRcdCAqL1xuXHRcdHRoaXMucGxheUJ1dHRvbiA9IG5ldyBQbGF5QnV0dG9uKHRoaXMpO1xuXG5cdFx0Ly8gVE9ETzog0JLRi9C90LXRgdGC0Lgg0Y3RgtC+INCyINC+0YLQtNC10LvRjNC90LXRi9C5INC60L7QvNC/0L7QvdC10L3RglxuXHRcdHRoaXMubG9hZGVyID0gJCgnPGRpdiAvPicpXG5cdFx0XHQuYWRkQ2xhc3MoJ2xlcGxheWVyLWxvYWRlci1jb250YWluZXInKVxuXHRcdFx0LmFwcGVuZChuZXcgSWNvbih0aGlzLCB7XG5cdFx0XHRcdGljb25OYW1lIDogJ3JlZnJlc2gnLFxuXHRcdFx0XHRjbGFzc05hbWUgOiAnbGVwbGF5ZXItbG9hZGVyLWNvbnRhaW5lcl9faWNvbidcblx0XHRcdH0pLmVsZW1lbnQpO1xuXG5cblx0XHQvKipcblx0XHQgKiBTcGxhc2ggaWNvbiBjb21wb25lbnQuXG5cdFx0ICpcblx0XHQgKiBAdHlwZSB7U3BsYXNoSWNvbn1cblx0XHQgKiBAbWVtYmVyb2YhIFBsYXllciNcblx0XHQgKi9cblx0XHR0aGlzLnNwbGFzaEljb24gPSBuZXcgU3BsYXNoSWNvbih0aGlzKTtcblxuXHRcdHRoaXMudmlkZW9Db250YWluZXIgPSBjcmVhdGVFbCgnZGl2Jywge1xuXHRcdFx0Y2xhc3NOYW1lIDogJ2xlcGxheWVyLXZpZGVvJ1xuXHRcdH0pXG5cdFx0LmFwcGVuZCh0aGlzLmVycm9yRGlzcGxheS5lbGVtZW50KVxuXHRcdC5hcHBlbmQodGhpcy5wbGF5QnV0dG9uLmVsZW1lbnQpXG5cdFx0LmFwcGVuZCh0aGlzLmxvYWRlcilcblx0XHQuYXBwZW5kKHRoaXMuc3BsYXNoSWNvbi5lbGVtZW50KVxuXG5cdFx0dGhpcy5wb3N0ZXIgPSBuZXcgUG9zdGVyKHRoaXMpO1xuXHRcdHRoaXMudmlkZW9Db250YWluZXIuYXBwZW5kKHRoaXMucG9zdGVyLmVsZW1lbnQpO1xuXG5cblx0XHRjb25zdCBsYXN0VGltZXIgPSBuZXcgVGltZSh0aGlzLCB7XG5cdFx0XHRmbiA6IChwbGF5ZXIpID0+IHtcblx0XHRcdFx0Y29uc3QgdmlkZW8gPSBwbGF5ZXIudmlkZW87XG5cdFx0XHRcdHJldHVybiBzZWNvbmRzVG9UaW1lKHZpZGVvLmR1cmF0aW9uIC0gdmlkZW8uY3VycmVudFRpbWUpO1xuXHRcdFx0fVxuXHRcdH0pXG5cblx0XHRpZih0aGlzLm9wdGlvbnMudmlkZW9JbmZvKSB7XG5cdFx0XHRjb25zb2xlLndhcm4oJ29wdGlvbnMudmlkZW9JbmZvIGlzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2UgaXN0ZWFkIG9wdGlvbnMuZGVzY3JpcHRpb24nKTtcblx0XHR9XG5cblx0XHR0aGlzLmluZm9FbGVtZW50ID0gY3JlYXRlRWwoJ2RpdicsIHtcblx0XHRcdGNsYXNzTmFtZSA6ICdsZXBsYXllcl9faW5mbydcblx0XHR9KVxuXHRcdC5hcHBlbmQoY3JlYXRlRWwoJ2RpdicsIHtcblx0XHRcdGNsYXNzTmFtZSA6ICdsZXBsYXllcl9fdGl0bGUnLFxuXHRcdFx0aHRtbCA6IHRoaXMub3B0aW9ucy50aXRsZSB8fCBcIlwiXG5cdFx0fSkpXG5cdFx0LmFwcGVuZChjcmVhdGVFbCgnZGl2Jywge1xuXHRcdFx0Y2xhc3NOYW1lIDogJ2xlcGxheWVyX192aWRlby1pbmZvJyxcblx0XHRcdGh0bWwgOiB0aGlzLm9wdGlvbnMuZGVzY3JpcHRpb24gfHwgdGhpcy5vcHRpb25zLnZpZGVvSW5mbyB8fCBcIlwiXG5cdFx0fSkpXG5cdFx0LmFwcGVuZChjcmVhdGVFbCgnZGl2Jywge1xuXHRcdFx0Y2xhc3NOYW1lIDogJ2xlcGxheWVyX19sYXN0Jyxcblx0XHRcdGh0bWwgOiBg0JLQuNC00LXQviDQt9Cw0LrQvtC90YfQuNGC0YHRjyDRh9C10YDQtdC3IGAsXG5cdFx0fSkuYXBwZW5kKGxhc3RUaW1lci5lbGVtZW50KSlcblxuXHRcdHRoaXMuaW5uZXJFbGVtZW50ID0gJCgnPGRpdiAvPicpXG5cdFx0XHQuYWRkQ2xhc3MoJ2xlcGxheWVyX19pbm5lcicpXG5cdFx0XHQuYXBwZW5kKHRoaXMudmlkZW9Db250YWluZXIpXG5cdFx0XHQuYXBwZW5kKHRoaXMuaW5mb0VsZW1lbnQpXG5cblx0XHR0aGlzLmVsZW1lbnQgPSB0aGlzLmVsZW1lbnRcblx0XHRcdC5hcHBlbmQodGhpcy5pbm5lckVsZW1lbnQpXG5cblx0XHR0aGlzLmFkZENsYXNzKCdsZXBsYXllci0tcGF1c2VkJyk7XG5cdFx0dGhpcy5hZGRDbGFzcygnbGVwbGF5ZXItLXZpcmdpbicpO1xuXG5cdFx0aWYoSVNfSVBIT05FKSB7XG5cdFx0XHR0aGlzLmFkZENsYXNzKCdsZXBsYXllci0taXBob25lJyk7XG5cdFx0fVxuXG5cdFx0aWYoSVNfQU5EUk9JRCkge1xuXHRcdFx0dGhpcy5hZGRDbGFzcygnbGVwbGF5ZXItLWFuZHJvaWQnKTtcblx0XHR9XG5cblx0XHRpZihJU19NT0JJTEUpIHtcblx0XHRcdHRoaXMuYWRkQ2xhc3MoJ2xlcGxheWVyLS1tb2JpbGUnKTtcblx0XHR9XG5cblxuXG5cdFx0aWYob3B0aW9ucy5zZWN0aW9uQ29udGFpbmVyKSB7XG5cdFx0XHR0aGlzLnNlY3Rpb25zQ29udGFpbmVyID0gJChvcHRpb25zLnNlY3Rpb25Db250YWluZXIpO1xuXHRcdH1cblxuXHRcdGVsZW1lbnQuYmVmb3JlKHRoaXMuZWxlbWVudCk7XG5cdFx0dGhpcy52aWRlb0NvbnRhaW5lci5hcHBlbmQoZWxlbWVudCk7XG5cblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50O1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBvcHRpb25zIGZyb20gdmlkZW8ncyBhdHRyaWJ1dGUgKCBoZWlnaHQsIHdpZHRoLCBwb3N0ZXIsIHByZWxvYWQgZXRjLi4uKVxuXHQgKiBHZXQgc291cmNlIHZpZGVvIGZyb20gc3JjIGF0dHIgb3IgPHNvdXJjZT4gZWxlbWVudCB3aXRoIGRhdGEgYXR0ciAnZGF0YS1xdWFsaXR5J1xuXHQgKiBBbHNvIGdldCBzb3VyY2VzIGZvciBkaWZmZXJlbnQgcXVhbGl0eSBmcm9tIDxzb3VyY2U+IGVsZW1lbnQgd2l0aCBkYXRhIGF0dHIgJ2RhdGEtcXVhbGl0eSdcblx0ICpcblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqIEByZXR1cm5zIHtPYmplY3R9IG9wdGlvbnNcblx0ICovXG5cdF9vcHRpb25zRnJvbUVsZW1lbnQoKSB7XG5cdFx0Ly8gQ29weSB2aWRlbyBhdHRycyB0byB0aGUgb3BpdG9uc1xuXHRcdGNvbnN0ICBlbGVtZW50ID0gdGhpcy5fZWxlbWVudDtcblx0XHRpZiAoZWxlbWVudCA9PSBudWxsIHx8IGVsZW1lbnQubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm4ge31cblx0XHR9XG5cblx0XHRsZXQgYXR0ck9wdGlvbnMgPSBbXG5cdFx0XHQnaGVpZ2h0Jyxcblx0XHRcdCd3aWR0aCcsXG5cdFx0XHQncG9zdGVyJyxcblx0XHRcdCdhdXRvcGxheScsXG5cdFx0XHQnbG9vcCcsXG5cdFx0XHQnbXV0ZWQnLFxuXHRcdFx0J3ByZWxvYWQnLFxuXHRcdF1cblx0XHQucmVkdWNlKChvYmosIGl0ZW0pID0+IHtcblx0XHRcdGNvbnN0IHZhbCA9IGVsZW1lbnQuYXR0cihpdGVtKTtcblx0XHRcdGlmKHZhbCAhPSBudWxsKSB7XG5cdFx0XHRcdG9ialtpdGVtXSA9IGVsZW1lbnQuYXR0cihpdGVtKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBvYmo7XG5cdFx0fSwge30pO1xuXG5cdFx0YXR0ck9wdGlvbnMuc291cmNlcyA9IFtdO1xuXG5cdFx0Ly8gU3JjIGl0IGlzIG1haW4gc291cmNlLCB0aGF0IHdpbGwgYmUgbG9hZFxuXHRcdGlmKGVsZW1lbnQuYXR0cignc3JjJykpIHtcblx0XHRcdGF0dHJPcHRpb25zLnNyYyA9IHtcblx0XHRcdFx0dXJsIDogZWxlbWVudC5hdHRyKCdzcmMnKSxcblx0XHRcdFx0dGl0bGUgOiBlbGVtZW50LmF0dHIoJ2RhdGEtcXVhbGl0eScpIHx8IGVsZW1lbnQuYXR0cigndGl0bGUnKSB8fCAnZGVmYXVsdCdcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBDb3B5IHNvdXJjZXMgZnJvbSBIVE1MNSBzb3VyY2UgZWxlbWVudCB3aXRoIGRhdGEtcXVhbGl0eSBhdHRyXG5cdFx0Ly8gSWYgZGF0YS1xdWFsaXR5IGF0dHIgZG9lcyBub3QgZXhpc3QgLSBub1xuXHRcdGVsZW1lbnQuZmluZCgnc291cmNlJykuZWFjaCgoaSwgaXRlbSkgPT4ge1xuXHRcdFx0aXRlbSA9ICQoaXRlbSk7XG5cdFx0XHRpZighaXRlbS5hdHRyKCdkYXRhLXF1YWxpdHknKSkge1xuXHRcdFx0XHRyZXR1cm5cblx0XHRcdH1cblx0XHRcdGF0dHJPcHRpb25zLnNvdXJjZXMgPSBhdHRyT3B0aW9ucy5zb3VyY2VzLmNvbmNhdCh7XG5cdFx0XHRcdHVybCA6IGl0ZW0uYXR0cignc3JjJyksXG5cdFx0XHRcdHRpdGxlIDogaXRlbS5hdHRyKCdkYXRhLXF1YWxpdHknKSB8fCBpdGVtLmF0dHIoJ3RpdGxlJykgfHwgJ2RlZmF1bHQnXG5cdFx0XHR9KVxuXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gYXR0ck9wdGlvbnM7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJuIGEgbmFtZSBvZiBpY29uLiBJZiBsZXNzIHRoZW4gMC4xIHJldHVybiB2b2x1bWUtb2ZmLFxuXHQgKiBpZiBsZXNzIHRoZW4gMC41IHJldHVybiB2b2x1bWUgZG93biwgZWxzZSByZXR1cm4gdm9sdW1lLXVwXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge051bWJlcn0gdmFsdWUgVm9sdW1lIHZhbHVlXG5cdCAqIEByZXR1cm5zIHtTdHJpbmd9IEljb24gbmFtZVxuXHQgKi9cblx0Y2FsY1ZvbHVtZUljb24odmFsdWUpIHtcblx0XHRpZih2YWx1ZSA9PSBudWxsKSB7XG5cdFx0XHR2YWx1ZSA9IHRoaXMudmlkZW8udm9sdW1lO1xuXHRcdH1cblx0XHRjb25zdCB2b2x1bWUgPSB2YWx1ZTtcblxuXHRcdGlmICh2b2x1bWUgPCB0aGlzLm9wdGlvbnMudm9sdW1lLm11dGVsaW1pdCkge1xuXHRcdFx0cmV0dXJuICd2b2x1bWUtb2ZmJztcblx0XHR9IGVsc2UgaWYgKHZhbHVlIDwgMC41KSB7XG5cdFx0XHRyZXR1cm4gJ3ZvbHVtZS1kb3duJztcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuICd2b2x1bWUtdXAnO1xuXHRcdH1cblx0fVxuXG5cdHRvZ2dsZVNlY3Rpb25zKGZsYWcpIHtcblx0XHRpZih0aGlzLnNlY3Rpb25zKSB7XG5cdFx0XHR0aGlzLnNlY3Rpb25zLnZpc2libGUgPSBmbGFnO1xuXHRcdH1cblx0XHRpZih0aGlzLm91dHNpZGVTZWN0aW9ucykge1xuXHRcdFx0dGhpcy5vdXRzaWRlU2VjdGlvbnMudmlzaWJsZSA9IGZsYWc7XG5cdFx0fVxuXHR9XG5cblxuXG5cdC8qKlxuXHQgKiBNZXJnZSBkZWZhdWx0T3B0aW9ucywgcHJlc2V0T3B0aW9ucyB3aXRoIGF0dHJPcHRpb25zIGFuZCB1c2VyJ3Mgb3B0aW9ucztcblx0ICpcblx0ICogQW5kIGNvbXBsZW1lbnQgdHdvIG9iamVjdHM6IGNvbnRyb2xzIGFuZCBleGNsdWRlQ29udHJvbHNcblx0ICpcblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqL1xuXHRfaW5pdE9wdGlvbnMoKSB7XG5cdFx0Y29uc3QgYXR0ck9wdGlvbnMgPSB0aGlzLl9vcHRpb25zRnJvbUVsZW1lbnQoKTtcblx0XHRsZXQgcHJlc2V0T3B0aW9ucyA9IHt9O1xuXG5cdFx0aWYgKHRoaXMuX3VzZXJPcHRpb25zLnByZXNldCAmJiBQbGF5ZXIuZ2V0UHJlc2V0KHRoaXMuX3VzZXJPcHRpb25zLnByZXNldCkpIHtcblx0XHRcdHByZXNldE9wdGlvbnMgPSBQbGF5ZXIuZ2V0UHJlc2V0KHRoaXMuX3VzZXJPcHRpb25zLnByZXNldCkub3B0aW9ucztcblx0XHR9XG5cblxuXHRcdC8vIE1lcmdlIGRlZmF1bHQgb3B0aW9ucyArIHByZXNldCBvcHRpb25zICsgdmlkZW8gYXR0cmlidXR0cysgdXNlciBvcHRpb25zXG5cdFx0dGhpcy5vcHRpb25zID0gJC5leHRlbmQodHJ1ZSwge30sIGRlZmF1bHRPcHRpb25zLCBwcmVzZXRPcHRpb25zLCBhdHRyT3B0aW9ucywgdGhpcy5fdXNlck9wdGlvbnMpO1xuXG5cdFx0aWYodGhpcy5vcHRpb25zLnNvdXJjZXMgJiYgIUFycmF5LmlzQXJyYXkodGhpcy5vcHRpb25zLnNvdXJjZXMpKSB7XG5cdFx0XHR0aGlzLm9wdGlvbnMuc291cmNlcyA9IFt0aGlzLm9wdGlvbnMuc291cmNlc11cblx0XHR9XG5cblx0XHRpZih0eXBlb2YgdGhpcy5vcHRpb25zLnNyYyA9PT0gJ3N0cmluZycpIHtcblx0XHRcdHRoaXMub3B0aW9ucy5zcmMgPSB7IHVybCA6IHRoaXMub3B0aW9ucy5zcmMgfVxuXHRcdH1cblxuXHRcdGlmKHRoaXMub3B0aW9ucy5zcmMgPT0gbnVsbCAmJiB0aGlzLm9wdGlvbnMuc291cmNlcy5sZW5ndGggPiAwKSB7XG5cdFx0XHR0aGlzLm9wdGlvbnMuc3JjID0gdGhpcy5vcHRpb25zLnNvdXJjZXNbMF1cblx0XHR9XG5cblxuXHRcdC8vIEdlbmVyYXRlIGFuZHJvaWQ6ZnVsbHNjcmVlbiwgYW5kcm9pZDpjb21tb24gYW5kIGV0YyBjb250cm9scyBvcHRpb25zXG5cblxuXHRcdC8vIE1lcmdlIGNvcnJlY3RseSBjb250cm9scywgd2l0aG91dCBkZWVwIG1lcmdlXG5cdFx0dGhpcy5vcHRpb25zLmNvbnRyb2xzID0gJC5leHRlbmQoe30sIGRlZmF1bHRPcHRpb25zLmNvbnRyb2xzLCBwcmVzZXRPcHRpb25zLmNvbnRyb2xzLCB0aGlzLl91c2VyT3B0aW9ucy5jb250cm9scyk7XG5cblx0XHQvLyBleGNsdWRlIGNvbnRyb2xzIG9wdGlvblxuXHRcdC8vIFRPRE8oYWRpbnZhZGltKTpcblx0XHQvLyBTZXQgZGVwcmVjZXRlZCBmbGFnIGZvciB0aGlzIG9wdGlvbjtcblx0XHRmb3IgKGNvbnN0IG5hbWUgaW4gdGhpcy5vcHRpb25zLmV4Y2x1ZGVDb250cm9scykge1xuXHRcdFx0aWYgKCF0aGlzLm9wdGlvbnMuZXhjbHVkZUNvbnRyb2xzLmhhc093blByb3BlcnR5KG5hbWUpKSByZXR1cm47XG5cdFx0XHRjb25zdCBjb250cm9sQ29sbGVjdGlvbiA9IHRoaXMub3B0aW9ucy5leGNsdWRlQ29udHJvbHNbbmFtZV07XG5cdFx0XHRjb250cm9sQ29sbGVjdGlvbi5mb3JFYWNoKChyb3csIGluZGV4KSA9PiB7XG5cdFx0XHRcdGlmICh0aGlzLm9wdGlvbnMuY29udHJvbHNbbmFtZV0gJiYgdGhpcy5vcHRpb25zLmNvbnRyb2xzW25hbWVdW2luZGV4XSkge1xuXHRcdFx0XHRcdHRoaXMub3B0aW9ucy5jb250cm9sc1tuYW1lXVtpbmRleF0gPSBleGNsdWRlQXJyYXkodGhpcy5vcHRpb25zLmNvbnRyb2xzW25hbWVdW2luZGV4XSwgcm93KTtcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHR9XG5cblx0XHRpZiAodGhpcy5vcHRpb25zLnByZXNldCAmJiBQbGF5ZXIuZ2V0UHJlc2V0KHRoaXMub3B0aW9ucy5wcmVzZXQpKSB7XG5cdFx0XHRQbGF5ZXIuZ2V0UHJlc2V0KHRoaXMub3B0aW9ucy5wcmVzZXQpLmluaXRPcHRpb25zKCk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZSBhbmQgaW5pdCBhbGwgY29udHJvbHNcblx0ICpcblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqL1xuXHRfaW5pdENvbnRyb2xzKCkge1xuXHRcdGZvciAoY29uc3QgbmFtZSBvZiBbJ2NvbW1vbicsICdmdWxsc2NyZWVuJ10pIHtcblx0XHRcdGlmICghdGhpcy5vcHRpb25zLmNvbnRyb2xzLmhhc093blByb3BlcnR5KG5hbWUpKSByZXR1cm47XG5cdFx0XHRjb25zdCBjb250cm9sQ29sbGVjdGlvbiA9IG5ldyBDb250cm9sQ29sbGVjdGlvbih0aGlzLCB7IG5hbWUgfSk7XG5cblx0XHRcdHRoaXMuZWxlbWVudC5hcHBlbmQoY29udHJvbENvbGxlY3Rpb24uZWxlbWVudCk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuY29udHJvbHMuY29tbW9uICE9IG51bGwpIHtcblx0XHRcdHRoaXMuY29udHJvbHMuY29tbW9uLmFjdGl2ZSA9IHRydWU7XG5cdFx0fVxuXHR9XG5cblxuXHRfbGlzdGVuSG90S2V5cygpIHtcblxuXHRcdGNvbnN0IGlzS2V5QmluZGluZyA9IChlLCBiaW5kaW5nKSA9PiB7XG5cdFx0XHRyZXR1cm4gKChlLndoaWNoID09PSBiaW5kaW5nLmtleSkgfHwgKGUua2V5ID09PSBiaW5kaW5nLmtleSkpICYmXG5cdFx0XHRcdFx0KCEhYmluZGluZy5zaGlmdEtleSA9PT0gZS5zaGlmdEtleSkgJiZcblx0XHRcdFx0XHQoISFiaW5kaW5nLmN0cmxLZXkgPT09IGUuY3RybEtleSlcblx0XHR9XG5cblx0XHR0aGlzLmVsZW1lbnQub24oJ2tleWRvd24ubGVwbGF5ZXIuaG90a2V5JywgKGUpID0+IHtcblx0XHRcdHRoaXMub3B0aW9ucy5rZXlCaW5kaW5nLmZvckVhY2goYmluZGluZyA9PiB7XG5cblx0XHRcdFx0aWYoaXNLZXlCaW5kaW5nKGUsIGJpbmRpbmcpKSB7XG5cdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdGJpbmRpbmcuZm4odGhpcyk7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cblx0XHRcdH0pXG5cdFx0fSlcblx0fVxuXG5cdC8qKlxuXHQgKiBJbml0IHNlY3Rpb25zLCBnZXQgYWpheCBvciBqc29uIHdpdGggc2VjdGlvbnMgZGF0YSBhbmQgY3JlYXRlIFNlY3Rpb25zIG9iamVjdCBhbmQgYWRkZWQgdGhlbSB0byB0aGUgRE9NXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHQgKiBAcmV0dXJucyB7anFQcm9taXNlfSBqUXVlcnkgcHJvbWlzZVxuXHQgKi9cblx0X2luaXRTZWN0aW9ucygpIHtcblx0XHRjb25zdCBkZmQgPSAkLkRlZmVycmVkKCk7XG5cdFx0aWYgKHRoaXMub3B0aW9ucy5kYXRhID09IG51bGwpIHtcblx0XHRcdGRmZC5yZWplY3QobnVsbClcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5nZXRTZWN0aW9uRGF0YSgpLmRvbmUoc2VjdGlvbnMgPT4ge1xuXHRcdFx0XHRzZWN0aW9ucyA9IFsuLi5zZWN0aW9uc107XG5cblx0XHRcdFx0Y29uc3QgaXNTZWN0aW9uT3V0c2lkZSA9ICh0aGlzLnNlY3Rpb25zQ29udGFpbmVyICYmIHRoaXMuc2VjdGlvbnNDb250YWluZXIubGVuZ3RoID4gMCk7XG5cblx0XHRcdFx0aWYgKHNlY3Rpb25zID09IG51bGwgfHwgc2VjdGlvbnMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0ZGZkLnJlamVjdChudWxsKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRzZWN0aW9ucyA9IHRoaXMuX2NvbXBsZXRlU2VjdGlvbnMoc2VjdGlvbnMpO1xuXG5cdFx0XHRcdHRoaXMuc2VjdGlvbnMgPSBuZXcgU2VjdGlvbnModGhpcywge1xuXHRcdFx0XHRcdGl0ZW1zIDogc2VjdGlvbnMsXG5cdFx0XHRcdFx0ZnVsbHNjcmVlbk9ubHkgOiBpc1NlY3Rpb25PdXRzaWRlLFxuXHRcdFx0XHRcdGhpZGVTY3JvbGwgOiB0cnVlXG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdHRoaXMuaW5uZXJFbGVtZW50LmFwcGVuZCh0aGlzLnNlY3Rpb25zLmVsZW1lbnQpO1xuXG5cdFx0XHRcdGlmIChpc1NlY3Rpb25PdXRzaWRlKSB7XG5cdFx0XHRcdFx0dGhpcy5vdXRzaWRlU2VjdGlvbnMgPSBuZXcgU2VjdGlvbnModGhpcywge1xuXHRcdFx0XHRcdFx0aXRlbXMgOiBzZWN0aW9uc1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdHRoaXMuc2VjdGlvbnNDb250YWluZXIuYXBwZW5kKHRoaXMub3V0c2lkZVNlY3Rpb25zLmVsZW1lbnQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGRmZC5yZXNvbHZlKHsgaXRlbXMgOiBzZWN0aW9ucyB9KTtcblx0XHRcdH0pXG5cdFx0fVxuXG5cdFx0cmV0dXJuIGRmZC5wcm9taXNlKClcblx0fVxuXG5cdC8qKlxuXHQgKiBGdW5jdGlvbiwgdGhhbiBpbml0IGFsbCBwbHVnaW5zIGZyb20gcGxheWVyIG9wdGlvbnMuXG5cdCAqIElmIHBsdWdpbiBkb2Vzbid0IGV4aXN0IHRocm93IGFuIGVycm9yXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHQgKiBAcmV0dXJucyB7UGxheWVyfSB0aGlzXG5cdCAqL1xuXHRfaW5pdFBsdWdpbnMoKSB7XG5cdFx0aWYgKHRoaXMub3B0aW9ucy5wbHVnaW5zKSB7XG5cdFx0XHRmb3IgKGNvbnN0IG5hbWUgaW4gdGhpcy5vcHRpb25zLnBsdWdpbnMpIHtcblx0XHRcdFx0aWYoIXRoaXMub3B0aW9ucy5wbHVnaW5zLmhhc093blByb3BlcnR5KG5hbWUpKSByZXR1cm47XG5cdFx0XHRcdGNvbnN0IHBsdWdpbk9wdGlvbnMgPSB0aGlzLm9wdGlvbnMucGx1Z2luc1tuYW1lXTtcblx0XHRcdFx0aWYodGhpc1tuYW1lXSkge1xuXHRcdFx0XHRcdGlmKHBsdWdpbk9wdGlvbnMpIHtcblx0XHRcdFx0XHRcdHRoaXNbbmFtZV0ocGx1Z2luT3B0aW9ucyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoYFBsdWdpbiAnJHtuYW1lfScgZG9lc24ndCBleGlzdGApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBAYWNjZXNzIHByaXZhdGVcblx0ICovXG5cdF9saXN0ZW5Vc2VyQWN0aXZpdHkoKSB7XG5cdFx0bGV0IG1vdXNlSW5Qcm9ncmVzcztcblx0XHRsZXQgbGFzdE1vdmVYO1xuXHRcdGxldCBsYXN0TW92ZVk7XG5cblx0XHRjb25zdCBvbk1vdXNlTW92ZSA9IChlKSA9PiB7XG5cdFx0XHRpZihlLnNjcmVlblggIT09IGxhc3RNb3ZlWCB8fCBlLnNjcmVlblkgIT09IGxhc3RNb3ZlWSkge1xuXHRcdFx0XHRsYXN0TW92ZVggPSBlLnNjcmVlblg7XG5cdFx0XHRcdGxhc3RNb3ZlWSA9IGUuc2NyZWVuWTtcblx0XHRcdFx0dGhpcy5fdXNlckFjdGl2aXR5ID0gdHJ1ZVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGNvbnN0IG9uTW91c2VEb3duID0gKGUpID0+IHtcblx0XHRcdHRoaXMuX3VzZXJBY3Rpdml0eSA9IHRydWVcblxuXHRcdFx0Ly8gV2hpbGUgdXNlciBpcyBwcmVzc2luZyBtb3VzZSBvciB0b3VjaCwgZGlzcGF0Y2ggdXNlciBhY3Rpdml0eVxuXHRcdFx0Y2xlYXJJbnRlcnZhbChtb3VzZUluUHJvZ3Jlc3MpO1xuXG5cdFx0XHRtb3VzZUluUHJvZ3Jlc3MgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG5cdFx0XHRcdHRoaXMuX3VzZXJBY3Rpdml0eSA9IHRydWVcblx0XHRcdH0sIDI1MCk7XG5cdFx0fVxuXG5cdFx0Y29uc3Qgb25Nb3VzZVVwID0gKGUpID0+IHtcblx0XHRcdHRoaXMuX3VzZXJBY3Rpdml0eSA9IHRydWVcblx0XHRcdGNsZWFySW50ZXJ2YWwobW91c2VJblByb2dyZXNzKTtcblx0XHR9XG5cblx0XHR0aGlzLmVsZW1lbnQub24oJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcblxuXHRcdHRoaXMuZWxlbWVudC5vbignbW91c2Vkb3duJywgb25Nb3VzZURvd24pO1xuXG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdtb3VzZXVwJywgb25Nb3VzZVVwKTtcblxuXHRcdHRoaXMuZWxlbWVudC5vbigna2V5ZG93bicsIChlKSA9PiB0aGlzLl91c2VyQWN0aXZpdHkgPSB0cnVlKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ2tleXVwJywgKGUpID0+IHRoaXMuX3VzZXJBY3Rpdml0eSA9IHRydWUpO1xuXG5cdFx0Ly8gU2VlIGh0dHA6Ly9lam9obi5vcmcvYmxvZy9sZWFybmluZy1mcm9tLXR3aXR0ZXIvXG5cdFx0bGV0IGluYWN0aXZpdHlUaW1lb3V0O1xuXHRcdGNvbnN0IGRlbGF5ID0gdGhpcy5vcHRpb25zLmlubmFjdGl2aXR5VGltZW91dDtcblx0XHRzZXRJbnRlcnZhbCgoKSA9PiB7XG5cdFx0XHRpZiAodGhpcy5fdXNlckFjdGl2aXR5KSB7XG5cblx0XHRcdFx0Ly8gUmVzZXQgdXNlciBhY3RpdnV0eSB0cmFja2VyXG5cdFx0XHRcdHRoaXMuX3VzZXJBY3Rpdml0eSA9IGZhbHNlO1xuXG5cdFx0XHRcdHRoaXMudXNlckFjdGl2ZSA9IHRydWU7XG5cblx0XHRcdFx0Y2xlYXJUaW1lb3V0KGluYWN0aXZpdHlUaW1lb3V0KTtcblxuXHRcdFx0XHRpZiAoZGVsYXkgPiAwKSB7XG5cblx0XHRcdFx0XHRpbmFjdGl2aXR5VGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKCF0aGlzLl91c2VyQWN0aXZpdHkpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy51c2VyQWN0aXZlID0gZmFsc2U7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSwgZGVsYXkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSwgMjUwKVxuXHR9XG5cblx0LyoqXG5cdCAqIFN0b3Agc2hvd2luZyBzcGlubmVyIGFuZCBjbGVhciBkZWxheSBvZiBzaG93aW5nIHNwaW5uZXJcblx0ICpcblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqL1xuXHRfc3RvcFdheXRpbmcoKSB7XG5cdFx0dGhpcy5fd2FpdGluZ1RpbWVvdXRzLmZvckVhY2goaXRlbSA9PiBjbGVhclRpbWVvdXQoaXRlbSkpO1xuXHRcdHRoaXMuX3dhaXRpbmdUaW1lb3V0cyA9IFtdO1xuXHRcdHRoaXMucmVtb3ZlQ2xhc3MoJ2xlcGxheWVyLS13YWl0aW5nJyk7XG5cdH1cblxuXHQvKipcblx0ICogU2hvdyBzcGlubmVyIHdpdGggZGVsYXkgaW4gMzAwbXNcblx0ICpcblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqL1xuXHRfc3RhcnRXYWl0aW5nKCkge1xuXHRcdHRoaXMuX3dhaXRpbmdUaW1lb3V0cy5wdXNoKHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0dGhpcy5hZGRDbGFzcygnbGVwbGF5ZXItLXdhaXRpbmcnKTtcblx0XHR9LCAzMDApKTtcblx0fVxuXG5cblx0LyoqXG5cdCAqIE9uIGluaXRlZCBwbGF5ZXIgZXZlbnQgaGFuZGxlclxuXHQgKlxuXHQgKiBAYWNjZXNzIHByaXZhdGVcblx0ICogQHBhcmFtIHtQbGF5ZXJFdmVudH0gZVxuXHQgKi9cblx0X29uSW5pdGVkKGUpIHtcblx0XHR0aGlzLmFkZENsYXNzKCdsZXBsYXllci0taW5pdGVkJyk7XG5cblx0XHR0aGlzLm9wdGlvbnMub25QbGF5ZXJJbml0ZWQuY2FsbCh0aGlzLCBlKTtcblx0fVxuXG5cblx0LyoqXG5cdCAqIE9uIGNsaWNrIHZpZGVvIGV2ZW50IGhhbmRsZXIuIEZvY3VzIG9uIHZpZGVvIGFuZCB0b2dnbGVQbGF5XG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge1BsYXllckV2ZW50fSBlXG5cdCAqL1xuXHRfb25DbGljayhlKSB7XG5cdFx0Y2xlYXJUaW1lb3V0KHRoaXMuX2RibGNsaWNrVGltZW91dCk7XG5cdFx0Y29uc3QgdG9nZ2xlUGxheSA9ICgpID0+IHtcblx0XHRcdHRoaXMuX2RibGNsaWNrVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLnZpZGVvLmVsZW1lbnQuZm9jdXMoKVxuXHRcdFx0XHR0aGlzLnRvZ2dsZVBsYXkoKTtcblxuXHRcdFx0fSwgMzAwKTtcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBTZWUgTFBMUi0yOTBcblx0XHQgKiBPbiB0b3VjaCBkZXZpY2VzIGluIGZ1bGxzY3JlZW4gaWYgdXNlciBub3QgYWN0aXZlIHdlIGRvbid0IHNob3VsZCB0b2dnbGVcblx0XHQgKiBBdCBmaXJzdCB3ZSBzaG93IGhpbSBhIGNvbnRyb2xzXG5cdFx0ICovXG5cdFx0aWYoSVNfVE9VQ0goKSAmJiB0aGlzLnZpZXcgPT09ICdmdWxsc2NyZWVuJykge1xuXHRcdFx0aWYodGhpcy5wbGF5ZXIudXNlckFjdGl2ZSkge1xuXHRcdFx0XHR0b2dnbGVQbGF5KClcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dG9nZ2xlUGxheSgpXG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIE9uIGRibGNsaWNrIG9uIHRoZSB2aWRlbyBwbGF5ZXIgZXZlbnQgaGFuZGxlclxuXHQgKlxuXHQgKiBAYWNjZXNzIHByaXZhdGVcblx0ICogQHBhcmFtIHtQbGF5ZXJFdmVudH0gZVxuXHQgKi9cblx0X29uRGJjbGljayhlKSB7XG5cdFx0Y2xlYXJUaW1lb3V0KHRoaXMuX2RibGNsaWNrVGltZW91dCk7XG5cdFx0dGhpcy50b2dnbGVGdWxsc2NyZWVuKCk7XG5cdH1cblxuXHQvKipcblx0ICogT24gZnVsbHNjcmVlbiBjaGFuZ2UgcGxheWVyIGV2ZW50IGhhbmRsZXJcblx0ICpcblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqIEBwYXJhbSB7UGxheWVyRXZlbnR9IGVcblx0ICovXG5cdF9vbkZ1bGxzY3JlZW5DaGFuZ2UoZSwgaXNGcykge1xuXHRcdGlmKGlzRnMpIHtcblx0XHRcdHRoaXMudmlldyA9ICdmdWxsc2NyZWVuJztcblxuXHRcdFx0Ly8gSGlkZSBzZWN0aW9ucyBieSBkZWZhdWx0IG9uIG1vYmlsZSBmdWxsc2NyZWVuXG5cdFx0XHRpZihJU19BTkRST0lEKSB7XG5cdFx0XHRcdHRoaXMuX2xhc3RTZWN0aW9uc1ZhbHVlID0gdGhpcy5zZWN0aW9ucy52aXNpYmxlO1xuXHRcdFx0XHR0aGlzLnNlY3Rpb25zLnZpc2libGUgPSBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5mb2N1cygpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnZpZXcgPSAnY29tbW9uJztcblxuXHRcdFx0aWYoSVNfQU5EUk9JRCkge1xuXHRcdFx0XHR0aGlzLnNlY3Rpb25zLnZpc2libGUgPSB0aGlzLl9sYXN0U2VjdGlvbnNWYWx1ZTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gUGF1c2UgdmlkZW8gb24gZXhpdCBmdWxsc2NyZWVlbiBvbiBtb2JpbGVcblx0XHRcdGlmKElTX0FORFJPSURfUEhPTkUgfHwgSVNfSVBIT05FIHx8IElTX0lQT0QpIHtcblx0XHRcdFx0dGhpcy5wYXVzZSgpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cblx0LyoqXG5cdCAqIE9uIHBsYXkgZXZlbnQgaGFuZGxlclxuXHQgKlxuXHQgKiBAYWNjZXNzIHByaXZhdGVcblx0ICogQHBhcmFtIHtQbGF5ZXJFdmVudH0gZVxuXHQgKi9cblx0X29uUGxheSgpIHtcblx0XHR0aGlzLnNwbGFzaEljb24uc2hvdygncGxheScpO1xuXHR9XG5cblx0LyoqXG5cdCAqIE9uIHBhdXNlIHBsYXllciBldmVudCBoYW5kbGVyXG5cdCAqIFNob3cgcGF1c2UgaWNvbiBpbiB0aGUgY2VudGVyIG9mIHZpZGVvXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHQgKi9cblx0X29uUGF1c2UoKSB7XG5cdFx0dGhpcy5zcGxhc2hJY29uLnNob3coJ3BhdXNlJyk7XG5cdH1cblxuXHRfb25FbnRpdHlGdWxsc2NyZW5DaGFuZ2UoKSB7XG5cdFx0Y29uc3QgZnNBcGkgPSBGdWxsc2NyZWVuQXBpO1xuXHRcdGNvbnN0IGlzRnMgPSAhIWRvY3VtZW50W2ZzQXBpLmZ1bGxzY3JlZW5FbGVtZW50XTtcblx0XHR0aGlzLnRyaWdnZXIoJ2Z1bGxzY3JlZW5jaGFuZ2UnLCBpc0ZzKTtcblx0fVxuXG59XG5cbi8qKlxuICogU3RhdGljIGhlbHBlciBmb3IgY3JlYXRpbmcgYSBwbHVnaW5zIGZvciBsZXBsYXllclxuICpcbiAqIEBhY2Nlc3MgcHVibGljXG4gKiBAc3RhdGljXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiBwbHVnaW5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFBsdWdpbiBpbml0IGZ1bmN0aW9uXG4gKlxuICogQGV4YW1wbGVcbiAqIFBsYXllci5wbHVnaW4oJ2hlbGxvV29ybGQnLCBmdW5jdGlvbihwbHVnaW5PcHRpb25zKSB7XG4gKiAgICBjb25zdCBwbGF5ZXIgPSB0aGlzO1xuICogICAgcGxheWVyLm9uKCdjbGljaycsICgpID0+IGNvbnNvbGUubG9nKCdIZWxsbyB3b3JsZCcpKTtcbiAqIH0pXG4gKlxuICovXG5QbGF5ZXIucGx1Z2luID0gZnVuY3Rpb24obmFtZSwgZm4pIHtcblx0UGxheWVyLnByb3RvdHlwZVtuYW1lXSA9IGZuO1xufVxuXG4vKipcbiAqIEdldCBieSBuYW1lIHJlZ2lzdGVyZWQgY29tcG9uZW50XG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgLSBOYW1lIG9mIGNvbXBvbmVudFxuICogQHJldHVybiB7Q29tcG9uZW50fVxuICovXG5QbGF5ZXIuZ2V0Q29tcG9uZW50ID0gQ29tcG9uZW50LmdldENvbXBvbmVudDtcblxuLyoqXG4gKiBSZWdpc3RlciBjb21wb25lbnRcbiAqXG4gKiBAYWNjZXNzIHB1YmxpY1xuICogQHN0YXRpY1xuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7Q29tcG9uZW50fSBjb21wb25lbnRcbiAqXG4gKiBAZXhhbXBsZVxuICogUGxheWVyLnJlZ2lzdGVyQ29tcG9uZW50KCdFcnJvckRpc3BsYXknLCBFcnJvckRpc3BsYXkpO1xuICovXG5QbGF5ZXIucmVnaXN0ZXJDb21wb25lbnQgPSBDb21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQ7XG5cbi8qKlxuICogUmVnaXN0ZXIgY29udHJvbFxuICpcbiAqIEBhY2Nlc3MgcHVibGljXG4gKiBAc3RhdGljXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtDb250cm9sfSBjb250cm9sXG4gKi9cblBsYXllci5nZXRDb250cm9sID0gQ29udHJvbC5nZXRDb250cm9sO1xuXG4vKipcbiAqIEdldCBieSBuYW1lIHJlZ2lzdGVyZWQgY29udHJvbFxuICpcbiAqIEBhY2Nlc3MgcHVibGljXG4gKiBAc3RhdGljXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHJldHVybnMge0NvbnRyb2x9XG4gKlxuICogQGV4YW1wbGVcbiAqIFBsYXllci5yZWdpc3RlckNvbnRyb2woJ2JhY2t3YXJkJywgQmFja3dhcmRDb250cm9sKTtcbiAqL1xuUGxheWVyLnJlZ2lzdGVyQ29udHJvbCA9IENvbnRyb2wucmVnaXN0ZXJDb250cm9sO1xuXG5cbi8qKlxuICogQ29udmVydCBzZWNvbmRzIHRvIGZvcm1hdCBzdHJpbmcgJ2hoPzptbTpzcydcbiAqXG4gKiBAYWNjZXNzIHB1YmxpY1xuICogQHBhcmFtIHtOdW1iZXJ9IHNlY29uZHMgU2Vjb25kc1xuICogQHBhcmFtIHtCb29sZWFufSBzaG93SG91cnMgY29udmVydCB0byBmb3JtYXQgJ2hoOm1tOnNzJ1xuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xuUGxheWVyLnNlY29uZHNUb1RpbWUgPSBzZWNvbmRzVG9UaW1lO1xuXG5cbi8qKlxuICogU3RhdGljIGhlbHBlciBmb3IgY3JlYXRpbmcgYSBwbHVnaW5zIGZvciBsZXBsYXllclxuICpcbiAqIEBhY2Nlc3MgcHVibGljXG4gKiBAc3RhdGljXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiBwbHVnaW5cbiAqIEBwYXJhbSB7RnVuY3Rpb258T2JqZWN0fSBmbiBQbHVnaW4gaW5pdCBmdW5jdGlvblxuICpcbiAqIEBleGFtcGxlXG4gKiBQbGF5ZXIucHJlc2V0KCdjb21tb24nLCB7XG4gKiAgICAgd2lkdGggOiAnMTAwJScsXG4gKiAgICAgcGx1Z2lucyA6IHtcbiAqICAgICAgICAgbWluaXBsYXllciA6IHRydWVcbiAqICAgICB9XG4gKiB9KTtcbiAqL1xuUGxheWVyLnByZXNldCA9IGZ1bmN0aW9uKG5hbWUsIG9iaikge1xuXHRpZih0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jykge1xuXHRcdFBsYXllci5fcHJlc2V0c1tuYW1lXSA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRvcHRpb25zIDoge30sXG5cdFx0XHRpbml0T3B0aW9ucyA6IG5vb3Bcblx0XHR9LCBvYmopO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvYmogPT09ICdmdW5jdGlvbicpIHtcblx0XHRQbGF5ZXIuX3ByZXNldHNbbmFtZV0gPSBvYmooKTtcblx0fVxufTtcblxuXG5QbGF5ZXIuZ2V0UHJlc2V0ID0gZnVuY3Rpb24obmFtZSkge1xuXHRpZihQbGF5ZXIuX3ByZXNldHNbbmFtZV0pIHtcblx0XHRyZXR1cm4gUGxheWVyLl9wcmVzZXRzW25hbWVdO1xuXHR9IGVsc2Uge1xuXHRcdGNvbnNvbGUuZXJyb3IoYHByZXNldCAke25hbWV9IGRvZXNuJ3QgZXhpc3RgKTtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxufVxuXG5cblBsYXllci5fcHJlc2V0cyA9IHt9O1xuXG5QbGF5ZXIuQ29va2llID0gQ29va2llO1xuXG5QbGF5ZXIuX2xvYWRTVkdTcHJpdGUgPSBmdW5jdGlvbihzdmcpIHtcblx0Y29uc3QgaGlkZGVuRWxlbWVudCA9ICQoJzxkaXYvPicpLmhpZGUoKTtcblx0JCgnYm9keScpLnByZXBlbmQoaGlkZGVuRWxlbWVudC5hcHBlbmQoc3ZnKSk7XG5cdHJldHVybiBoaWRkZW5FbGVtZW50O1xufVxuXG5QbGF5ZXIuZGVmYXVsdFNwcml0ZSA9IHJlcXVpcmUoJy4uLy4uL2Rpc3Qvc3ZnL3N2Zy1kZWZzLnN2ZycpO1xuXG4vKiBnbG9iYWwgVkVSU0lPTiAqL1xuUGxheWVyLnZlcnNpb24gPSBWRVJTSU9OO1xuXG53aW5kb3cuJC5mbi5sZVBsYXllciA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cdHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBuZXcgUGxheWVyKCQodGhpcyksIG9wdGlvbnMpO1xuXHR9KTtcbn07XG5cbndpbmRvdy4kLmxlUGxheWVyID0gUGxheWVyO1xuXG53aW5kb3cubGVQbGF5ZXIgPSBQbGF5ZXI7XG5cblxuLyoqXG4gKiBNaW5pIFBsYXllciBwbHVnaW5cbiAqXG4gKiBAcGx1Z2luXG4gKi9cblBsYXllci5wbHVnaW4oJ21pbmlwbGF5ZXInLCBmdW5jdGlvbihwbHVnaW5PcHRpb25zKSB7XG5cdGNvbnN0IHBsYXllciA9IHRoaXM7XG5cblx0Ly8g0JzQtdGA0LbQuNC8INGBIHRoaXMub3B0aW9ucy5taW5pcGxheWVyLCDRh9GC0L7QsdGLINC90LUg0YHQu9C+0LzQsNGC0Ywg0L7QsdGA0LDRgtC90YPRjiDRgdC+0LLQvNC10YHRgtC40LzQvtGB0YwsINGC0LDQuiDQutCw0Log0YDQsNC90YzRiNC1XG5cdC8vINC80LjQvdC40L/Qu9C10LXRgCDQvdC1INCx0YvQuyDQv9C70LDQs9C40L3QvtC8INC/0LvQtdC10YDQsC5cblx0Y29uc3Qgb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0d2lkdGggOiAnMTAwJScsXG5cdFx0b2Zmc2V0U2hvdyA6IChwbGF5ZXIpID0+IHtcblx0XHRcdGNvbnN0IG9mZnNldCA9IHBsYXllci5lbGVtZW50Lm9mZnNldCgpLnRvcFxuXHRcdFx0XHQrIHBsYXllci5lbGVtZW50Lm91dGVySGVpZ2h0KClcblx0XHRcdFx0LSBwbGF5ZXIuZ2V0Q29udHJvbHMoJ2NvbW1vbicpLmVsZW1lbnQuaGVpZ2h0KCk7XG5cblx0XHRcdHJldHVybiBvZmZzZXQ7XG5cdFx0fVxuXHR9LCB0aGlzLm9wdGlvbnMubWluaXBsYXllciwgcGx1Z2luT3B0aW9ucyk7XG5cblx0Y29uc3QgY29udHJvbHMgPSBuZXcgQ29udHJvbENvbGxlY3Rpb24odGhpcywge1xuXHRcdG5hbWUgOiAnbWluaScsXG5cdFx0Y29udHJvbHMgOiBvcHRpb25zLmNvbnRyb2xzLFxuXHRcdGNvbnRyb2xPcHRpb25zIDoge1xuXHRcdFx0Y29udHJvbCA6IHtcblx0XHRcdFx0ZGlzYWJsZSA6IGZhbHNlXG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblxuXHQvLyDQktGB0YLQsNCy0LvRj9C10Lwg0LIgaW5mb0VsZW1lbnQg0L/QvtC0IHRpdGxlINC4IGRlc2NyaXB0aW9uXG5cdHRoaXMuaW5mb0VsZW1lbnQuYXBwZW5kKGNvbnRyb2xzLmVsZW1lbnQpO1xuXG5cdC8qKlxuXHQgKiBSZXR1cm4gb2Zmc2V0IG9uIG9ZICwgd2hlbiBtaW5pcGxheWVyIHNob3VsZCBzaG93aW5nIG9yIGhpZGluZ1xuXHQgKlxuXHQgKiBAcmV0dXJucyB7TnVtYmVyfVxuXHQgKi9cblx0Y29uc3Qgb2Zmc2V0U2hvdyA9ICgpID0+IHtcblx0XHRpZiAoJC5pc0Z1bmN0aW9uKG9wdGlvbnMub2Zmc2V0U2hvdykpIHtcblx0XHRcdHJldHVybiBvcHRpb25zLm9mZnNldFNob3cocGxheWVyKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gb3B0aW9ucy5vZmZzZXRTaG93XG5cdH1cblxuXHRjb25zdCBnZXRXaWR0aCA9ICgpID0+IHtcblx0XHRyZXR1cm4gb3B0aW9ucy53aWR0aCB8fCB0aGlzLmVsZW1lbnQud2lkdGgoKTtcblx0fVxuXG5cblx0dGhpcy5fdXBkYXRlTWluaVBsYXllciA9IChlLCBmb3JjZSkgPT4ge1xuXHRcdGNvbnN0IHNjcm9sbFRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcblxuXHRcdC8vIEJlY2F1c2UgaW4gZm9yY2UgdXBkYXRlLCBmb3Igbm9ybWFsbHkgY291bnQgaGVpZ2h0IGFuZCBwYWRkaW5nXG5cdFx0Ly8gbWluaXBsYXllciBiZWZvcmUgdGhlIHNob3cgbXVzdCBmaXJzdCBiZSBoaWRkZW5cblx0XHRpZihmb3JjZSkge1xuXHRcdFx0dGhpcy5oaWRlTWluaVBsYXllcihmb3JjZSk7XG5cdFx0fVxuXG5cdFx0aWYoc2Nyb2xsVG9wID4gb2Zmc2V0U2hvdygpKSB7XG5cdFx0XHR0aGlzLnNob3dNaW5pUGxheWVyKGZvcmNlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5oaWRlTWluaVBsYXllcigpO1xuXHRcdH1cblx0fVxuXG5cdHRoaXMuc2hvd01pbmlQbGF5ZXIgPSAoZm9yY2UpID0+IHtcblx0XHRpZiAoIWZvcmNlICYmIHRoaXMudmlldyA9PT0gJ21pbmknKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gQWRkZWQgZW1wdHkgc3BhY2Vcblx0XHR0aGlzLmVsZW1lbnQuY3NzKCdwYWRkaW5nLXRvcCcsIHRoaXMudmlkZW9Db250YWluZXIuaGVpZ2h0KCkpO1xuXG5cdFx0dGhpcy52aWV3ID0nbWluaSc7XG5cdH1cblxuXHR0aGlzLmhpZGVNaW5pUGxheWVyID0gKGZvcmNlKSA9PiB7XG5cdFx0aWYoIWZvcmNlICYmIHRoaXMudmlldyAhPT0gJ21pbmknKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMudmlldyA9ICdjb21tb24nO1xuXHR9XG5cblx0JCh3aW5kb3cpLm9uKCdzY3JvbGwnLCB0aGlzLl91cGRhdGVNaW5pUGxheWVyLmJpbmQodGhpcykpO1xuXHQkKHdpbmRvdykub24oJ3Jlc2l6ZScsIHRoaXMuX3VwZGF0ZU1pbmlQbGF5ZXIuYmluZCh0aGlzKSk7XG5cdHRoaXMub24oJ2luaXRlZCcsIChlKSA9PiB0aGlzLl91cGRhdGVNaW5pUGxheWVyKGUsIHRydWUpKTtcblxuXHR0aGlzLm9uU2V0VmlldygnbWluaScsICgpID0+IHtcblx0XHR0aGlzLmlubmVyRWxlbWVudC5jc3MoJ21heC13aWR0aCcsIGdldFdpZHRoKCkpO1xuXHRcdHRoaXMuaW5uZXJFbGVtZW50LmNzcygnaGVpZ2h0JywgdGhpcy52aWRlby5oZWlnaHQpO1xuXHR9KTtcblxuXHR0aGlzLm9uRGVsVmlldygnbWluaScsICgpID0+IHtcblx0XHR0aGlzLmlubmVyRWxlbWVudC5jc3MoJ21heC13aWR0aCcsICcnKVxuXHRcdHRoaXMuaW5uZXJFbGVtZW50LmNzcygnaGVpZ2h0JywgJycpXG5cblx0XHR0aGlzLmVsZW1lbnQuY3NzKCdwYWRkaW5nLXRvcCcsICcnKTtcblx0fSk7XG5cblxuXHR0aGlzLl91cGRhdGVNaW5pUGxheWVyKCk7XG59KTtcblxuXG5QbGF5ZXIucHJlc2V0KCd2cHMnLCByZXF1aXJlKCcuL3ByZXNldHMvdnBzLmpzJykucHJlc2V0KTtcblBsYXllci5wcmVzZXQoJ3NpbXBsZScsIHJlcXVpcmUoJy4vcHJlc2V0cy9zaW1wbGUuanMnKS5wcmVzZXQpO1xuUGxheWVyLnByZXNldCgnc21zJywgcmVxdWlyZSgnLi9wcmVzZXRzL3Ntcy5qcycpLnByZXNldCk7XG5QbGF5ZXIucHJlc2V0KCdjb21wcmVzc2VkJywgcmVxdWlyZSgnLi9wcmVzZXRzL2NvbXByZXNzZWQuanMnKS5wcmVzZXQpO1xuUGxheWVyLnByZXNldCgnMjAzNScsIHJlcXVpcmUoJy4vcHJlc2V0cy8yMDM1LmpzJykucHJlc2V0KTtcblxubW9kdWxlLmV4cG9ydHMgPSBQbGF5ZXJcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvbGUtcGxheWVyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSAkO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiJFwiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBDb250cm9sLmpzXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJztcblxuLyoqXG4gKiBAY2xhc3MgQ29udHJvbFxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBDb250cm9sJ3Mgb3B0aW9uc1xuICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLmljb25OYW1lXSBOYW1lIG9mIGNvbnRyb2wncyBpY29uLiBJZiBlbXB0eSwgY29udHJvbCB3aWxsIG5vdCBoYXZlIGEgaWNvblxuICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLmNsYXNzTmFtZV1cbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5uYW1lXVxuICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLmNvbGxlY3Rpb25dXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMudGl0bGVdIENvbnRvcmwncyB0b29sdGlwLCB0aXRsZSBhdHRyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb3B0aW9ucy5vbkNsaWNrXSBPbiBjbGljayBldmVudCBoYW5kbGVyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmRpc2FibGU9ZmFsc2VdXG4gKiBAcHJvcGVydHkge0ljb259IGljb24gSWNvbiBpbiBjb250cm9sLCBpZiBpdCBpcyBleGlzdFxuICogQGV4dGVuZHMgQ29tcG9uZW50XG4gKi9cbmNsYXNzIENvbnRyb2wgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucykge1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cdFx0dGhpcy5lbWl0VGFwRXZlbnRzKCk7XG5cdFx0dGhpcy5kaXNhYmxlID0gdGhpcy5vcHRpb25zLmRpc2FibGUgIT0gbnVsbD8gdGhpcy5vcHRpb25zLmRpc2FibGUgOiB0cnVlO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ2luaXRlZCcsIChlKSA9PiB7XG5cdFx0XHR0aGlzLmRpc2FibGUgPSB0aGlzLm9wdGlvbnMuZGlzYWJsZSAhPSBudWxsPyB0aGlzLm9wdGlvbnMuZGlzYWJsZSA6IGZhbHNlO1xuXHRcdH0pXG5cblx0XHR0aGlzLmVsZW1lbnQub24oe1xuXHRcdFx0Y2xpY2sgOiB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKSxcblx0XHRcdHRhcCA6IHRoaXMub25DbGljay5iaW5kKHRoaXMpLFxuXHRcdH0pO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ2luaXRlZCcsIHRoaXMub25QbGF5ZXJJbml0ZWQuYmluZCh0aGlzKSlcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0aWYgKHRoaXMub3B0aW9ucy5pY29uTmFtZSkge1xuXHRcdFx0dGhpcy5pY29uID0gbmV3IEljb24odGhpcy5wbGF5ZXIsIHtcblx0XHRcdFx0aWNvbk5hbWUgOiB0aGlzLm9wdGlvbnMuaWNvbk5hbWVcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRsZXQgYXR0cnMgPSB7XG5cdFx0XHR0aXRsZSA6IHRoaXMub3B0aW9ucy50aXRsZVxuXHRcdH1cblx0XHR0aGlzLmVsZW1lbnQgPSAkKGA8JHt0aGlzLm9wdGlvbnMudGFnIHx8ICdidXR0b24nfSAvPmApXG5cdFx0XHQuYWRkQ2xhc3ModGhpcy5idWlsZENTU0NsYXNzKCkpXG5cdFx0XHQuYXBwZW5kKHRoaXMuaWNvbiAmJiB0aGlzLmljb24uZWxlbWVudClcblx0XHRcdC5hdHRyKGF0dHJzKTtcblxuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQ7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRidWlsZENTU0NsYXNzKCkge1xuXHRcdGxldCByZXN1bHQgPSBgY29udHJvbCAke3RoaXMub3B0aW9ucy5jbGFzc05hbWV9ICR7c3VwZXIuYnVpbGRDU1NDbGFzcygpfWA7XG5cdFx0LyoqXG5cdFx0ICogQHNlZSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yMzg4NTI1NS9ob3ctdG8tcmVtb3ZlLWlnbm9yZS1ob3Zlci1jc3Mtc3R5bGUtb24tdG91Y2gtZGV2aWNlc1xuXHRcdCAqIFdlIHNob3VsZCBpZ25vcmUgaG92ZXIgZWZmZXRjcyBvbiBpcGhvbmUsIGJlY2F1c2Ugd2Ugc2hvdyBob3ZlciBlZmZlY3Qgb24gdGFwXG5cdFx0ICovXG5cdFx0aWYoIXRoaXMucGxheWVyLmhhc0NsYXNzKCdsZXBsYXllci0taXBob25lJykpIHtcblx0XHRcdHJlc3VsdCArPSAnIGNvbnRyb2wtLW5vLWlwaG9uZSc7XG5cdFx0fVxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRzZXQgdGFwKHZhbHVlKSB7XG5cdFx0dGhpcy50b2dnbGVDbGFzcygnY29udHJvbC0tdGFwJywgdmFsdWUpO1xuXHR9XG5cblx0c2V0IGRpc2FibGUodmFsdWUpIHtcblx0XHR0aGlzLl9kaXNhYmxlID0gdmFsdWU7XG5cdFx0dGhpcy50b2dnbGVDbGFzcygnZGlzYWJsZWQnLCB2YWx1ZSk7XG5cdH1cblxuXHRnZXQgZGlzYWJsZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5fZGlzYWJsZVxuXHR9XG5cblx0LyoqXG5cdCAqXG5cdCAqIE9uIGNsaWNrIGV2ZW50IGhhbmRsZXJcblx0ICogQGFic3RhY3Rcblx0ICovXG5cdG9uQ2xpY2sgKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0aWYgKHRoaXMuZGlzYWJsZSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHR0aGlzLnBsYXllci50cmlnZ2VyKCdjb250cm9sY2xpY2snLCB7IGNvbnRyb2wgOiB0aGlzIH0pO1xuXG5cdFx0aWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0dGhpcy5vcHRpb25zLm9uQ2xpY2suY2FsbCh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdH1cblx0fVxuXG5cblx0b25QbGF5ZXJJbml0ZWQgKGUsIGRhdGEpIHtcblxuXHR9XG5cblx0c3RhdGljIHJlZ2lzdGVyQ29udHJvbChuYW1lLCBjb250cm9sKSB7XG5cdFx0aWYobmFtZSA9PSBudWxsKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYoQ29udHJvbC5fY29udHJvbHMgPT0gbnVsbCkge1xuXHRcdFx0Q29udHJvbC5fY29udHJvbHMgPSB7fTtcblx0XHR9XG5cblx0XHRDb250cm9sLl9jb250cm9sc1tuYW1lXSA9IGNvbnRyb2w7XG5cblx0XHRyZXR1cm4gY29udHJvbDtcblx0fVxuXG5cdHN0YXRpYyBnZXRDb250cm9sKG5hbWUpIHtcblx0XHRpZihuYW1lID09IG51bGwpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZihDb250cm9sLl9jb250cm9scyAmJiBDb250cm9sLl9jb250cm9sc1tuYW1lXSkge1xuXHRcdFx0cmV0dXJuIENvbnRyb2wuX2NvbnRyb2xzW25hbWVdO1xuXHRcdH1cblx0fVxuXG5cdHN0YXRpYyBjcmVhdGUocGxheWVyLCBuYW1lLCBvcHRpb25zKSB7XG5cdFx0dmFyIGNvbnRyb2xDbGFzcyA9IHRoaXMuZ2V0Q29udHJvbChuYW1lKTtcblx0XHRpZihjb250cm9sQ2xhc3MgPT0gbnVsbCkge1xuXHRcdFx0Y29uc29sZS5lcnJvcihgQ29udHJvbCAke25hbWV9IGRvZXNuJ3QgZXhpc3RgKTtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdHJldHVybiBuZXcgY29udHJvbENsYXNzKHBsYXllciwgb3B0aW9ucyk7XG5cdH1cblxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ0NvbnRyb2wnLCBDb250cm9sKTtcbkNvbnRyb2wucmVnaXN0ZXJDb250cm9sKCdjb250cm9sJywgQ29udHJvbCk7XG5leHBvcnQgZGVmYXVsdCBDb250cm9sO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvQ29udHJvbC5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgQ29tcG9uZW50LmpzXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuY29uc3QgdG9QbGF5ZXJFdmVudCA9IChldmVudHMpID0+IGV2ZW50cy5zcGxpdCgnICcpLnJlZHVjZSgoYWNjLCBlKSA9PiBhY2MgKyBgbGVwbGF5ZXJfJHtlfSBgLCAnJyk7XG5cbi8qKlxuICogUGxheWVyIGNvbXBvbmVudCAtIEJhc2UgY2xhc3MgZm9yIGFsbCBVSVxuICpcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gT3B0aW9ucyBvZiBjb21wb25lbnRcbiAqIEBwYXJhbSB7alF1ZXJ5fSBbb3B0aW9ucy5lbGVtZW50XSDQrdC70LXQvNC10L3RgiDQvdCwINC60L7RgtC+0YDQvtC8INC80L7QttC90L4g0LjQvdC40YbQuNC70LjQt9C+0LLQsNGC0Ywg0LrQu9Cw0YHRgS5cbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcHJvcGVydHkge2pRdWVyeX0gZWxlbWVudFxuICogQGNsYXNzIENvbXBvbmVudFxuICovXG5jbGFzcyBDb21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucykge1xuXHRcdG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0Y3JlYXRlRWxlbWVudCA6IHRydWVcblx0XHR9LCB0aGlzLm9wdGlvbnMsIG9wdGlvbnMpO1xuXG5cdFx0aWYoIXBsYXllciAmJiB0aGlzLnBsYXkgIT0gbnVsbCkge1xuXHRcdFx0dGhpcy5wbGF5ZXIgPSBwbGF5ZXIgPSB0aGlzO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnBsYXllciA9IHBsYXllcjtcblx0XHR9XG5cblx0XHRpZihvcHRpb25zLmNyZWF0ZUVsZW1lbnQpIHtcblxuXHRcdFx0aWYgKG9wdGlvbnMuZWxlbWVudCkge1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQgPSBvcHRpb25zLmVsZW1lbnQ7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmNyZWF0ZUVsZW1lbnQoKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMuZWxlbWVudC5sZW5ndGggIT09IDEpIHtcblx0XHRcdFx0Y29uc29sZS5lcnJvcihgQ29tcG9uZW50LnByb3RvdHlwZS5lbGVtZW50Lmxlbmd0aCBtdXN0IGVxdWFsIDEsIG5vdCAke3RoaXMuZWxlbWVudC5sZW5ndGh9XFxuYCwgdGhpcy5lbGVtZW50KTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5lbGVtZW50WzBdLl9fbm9kZSA9IHRoaXM7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEBhYnN0cmFjdFxuXHQgKi9cblx0Y3JlYXRlRWxlbWVudCgpIHtcblxuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdC8qKlxuXHQgKiBAYWJzdHJhY3Rcblx0ICovXG5cdGJ1aWxkQ1NTQ2xhc3MoKSB7XG5cdFx0cmV0dXJuICcnXG5cdH1cblxuXG5cdC8qKlxuXHQgKiBTZXQgdGhlIGZvY3VzIHRvIHRoaXMgY29tcG9uZW50XG5cdCAqL1xuXHRmb2N1cygpIHtcblx0XHR0aGlzLmVsZW1lbnQuZm9jdXMoKTtcblx0fVxuXG5cblx0LyoqXG5cdCAqIFJlbW92ZSB0aGUgZm9jdXMgZnJvbSB0aGlzIGNvbXBvbmVudFxuXHQgKi9cblx0Ymx1cigpIHtcblx0XHR0aGlzLmVsZW1lbnQuYmx1cigpO1xuXHR9XG5cblxuXHQvKipcblx0ICogRW1pdCBhIHBsYXllciBldmVudCAodGhlIG5hbWUgb2YgZXZlbnQgd291bGQgYmUgYSBsZXBsYXllcl9zbXRoKVxuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnROYW1lXG5cdCAqIEBwYXJhbSB7QXJndW1lbnRzfSAuLi5hcmdzIGpRdWVyeS5mbi5vbiBvdGhlciBhcmd1bWVudHNcblx0ICogQHJldHVybnMge1BsYXllcn0gdGhpc1xuXHQgKi9cblx0dHJpZ2dlcihldmVudE5hbWUsIC4uLmFyZ3MpIHtcblx0XHRjb25zdCBldmVudCA9ICQuRXZlbnQoYGxlcGxheWVyXyR7ZXZlbnROYW1lfWAsIHsgcGxheWVyIDogdGhpcy5wbGF5ZXIgfSk7XG5cdFx0dGhpcy5lbGVtZW50LnRyaWdnZXJIYW5kbGVyKGV2ZW50LCAuLi5hcmdzKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cblx0LyoqXG5cdCAqIExpc3RlbiBhIHBsYXllciBldmVudCB3aXRoIGxlcGxheWVyXyBzdWZmaXhcblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50TmFtZVxuXHQgKiBAcGFyYW0ge0FyZ3VtZW50c30gLi4uYXJncyBqUXVlcnkuZm4ub24gb3RoZXIgYXJndW1lbnRzXG5cdCAqIEByZXR1cm5zIHtQbGF5ZXJ9IHRoaXNcblx0ICovXG5cdG9uKGV2ZW50TmFtZXMsIC4uLmFyZ3MpIHtcblx0XHRpZih0eXBlb2YgZXZlbnROYW1lcyA9PT0gJ3N0cmluZycgfHwgZXZlbnROYW1lcyBpbnN0YW5jZW9mIFN0cmluZykge1xuXHRcdFx0dGhpcy5lbGVtZW50Lm9uKHRvUGxheWVyRXZlbnQoZXZlbnROYW1lcyksIC4uLmFyZ3MpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zb2xlLndhcm4oJ0ZpcnN0IGFyZ3VtZW50IG9mIFxcJ0NvbXBvbmVudC5vblxcJyBzaG91bGQgYmUgYSBzdHJpbmcnKTtcblx0XHRcdHRoaXMuZWxlbWVudC5vbihldmVudE5hbWVzLCAuLi5hcmdzKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXG5cdG9uZShldmVudE5hbWVzLCAuLi5hcmdzKSB7XG5cdFx0aWYodHlwZW9mIGV2ZW50TmFtZXMgPT09ICdzdHJpbmcnIHx8IGV2ZW50TmFtZXMgaW5zdGFuY2VvZiBTdHJpbmcpIHtcblx0XHRcdHRoaXMuZWxlbWVudC5vbmUodG9QbGF5ZXJFdmVudChldmVudE5hbWVzKSwgLi4uYXJncyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnNvbGUud2FybignRmlyc3QgYXJndW1lbnQgb2YgXFwnQ29tcG9uZW50Lm9uZVxcJyBzaG91bGQgYmUgYSBzdHJpbmcnKTtcblx0XHRcdHRoaXMuZWxlbWVudC5vbmUoZXZlbnROYW1lcywgLi4uYXJncyk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblxuXHQvKipcblx0ICogQWRkIHRoZSBDU1MgY2xhc3MgZm9yIGdlbmVyYWwgbGVwbGF5ZXIgRE9NIGVsZW1lbnRcblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZSBOYW1lIG9mIGNsYXNzIChub3QgYSBzZWxlY3RvciwgaXQncyBtZWFuLCB0aGF0IHN0cmluZyBzb3VsZCBiZSB3aXRob3V0IHBvaW50IGF0IHRoZSBzdGFydClcblx0ICogQHJldHVybnMge1BsYXllcn0gdGhpc1xuXHQgKi9cblx0YWRkQ2xhc3MoY2xhc3NOYW1lKSB7XG5cdFx0dGhpcy5lbGVtZW50LmFkZENsYXNzKGNsYXNzTmFtZSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvKipcblx0ICogUmVtb3ZlIHRoZSBDU1MgY2xhc3MgZnJvbSBnZW5lcmFsIGxlcGxheWVyIERPTSBlbGVtZW50XG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWUgTmFtZSBvZiBjbGFzc1xuXHQgKiBAcmV0dXJucyB7UGxheWVyfSB0aGlzXG5cdCAqL1xuXHRyZW1vdmVDbGFzcyhjbGFzc05hbWUpIHtcblx0XHR0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8qKlxuXHQgKiBUb2dnbGUgdGhlIENTUyBjbGFzcyBmcm9tIGdlbmVyYWwgbGVwbGF5ZXIgRE9NIGVsZW1lbnRcblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZVxuXHQgKiBAcGFyYW0ge0Jvb2xlYW59IGZsYWdcblx0ICogQHJldHVybnMge1BsYXllcn0gdGhpc1xuXHQgKi9cblx0dG9nZ2xlQ2xhc3MoY2xhc3NOYW1lLCBmbGFnKSB7XG5cdFx0dGhpcy5lbGVtZW50LnRvZ2dsZUNsYXNzKGNsYXNzTmFtZSwgZmxhZyk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRoYXNDbGFzcyhjbGFzc05hbWUpIHtcblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50Lmhhc0NsYXNzKGNsYXNzTmFtZSk7XG5cdH1cblxuXG5cdHN0YXRpYyByZWdpc3RlckNvbXBvbmVudChuYW1lLCBjb21wb25lbnQpIHtcblx0XHRpZihuYW1lID09IG51bGwpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZihDb21wb25lbnQuX2NvbXBvbmVudHMgPT0gbnVsbCkge1xuXHRcdFx0Q29tcG9uZW50Ll9jb21wb25lbnRzID0ge307XG5cdFx0fVxuXG5cdFx0Q29tcG9uZW50Ll9jb21wb25lbnRzW25hbWVdID0gY29tcG9uZW50O1xuXG5cdFx0cmV0dXJuIGNvbXBvbmVudDtcblx0fVxuXG5cdHN0YXRpYyBnZXRDb21wb25lbnQobmFtZSkge1xuXHRcdGlmKG5hbWUgPT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmKENvbXBvbmVudC5fY29tcG9uZW50cyAmJiBDb21wb25lbnQuX2NvbXBvbmVudHNbbmFtZV0pIHtcblx0XHRcdHJldHVybiBDb21wb25lbnQuX2NvbXBvbmVudHNbbmFtZV07XG5cdFx0fVxuXG5cdH1cblxuXHRzZXQgdGFwKHZhbHVlKSB7fVxuXG5cdGVtaXRUYXBFdmVudHMoZWxlbWVudD1udWxsKSB7XG5cdFx0aWYoZWxlbWVudCA9PSBudWxsKSB7XG5cdFx0XHRlbGVtZW50ID0gdGhpcy5lbGVtZW50O1xuXHRcdH1cblx0XHQvLyBUcmFjayB0aGUgc3RhcnQgdGltZSBzbyB3ZSBjYW4gZGV0ZXJtaW5lIGhvdyBsb25nIHRoZSB0b3VjaCBsYXN0ZWRcblx0XHRsZXQgdG91Y2hTdGFydCA9IDA7XG5cdFx0bGV0IGZpcnN0VG91Y2ggPSBudWxsO1xuXHRcdGxldCBsYXN0TW92ZVRvdWNoID0gbnVsbDtcblxuXHRcdC8vIE1heGltdW0gbW92ZW1lbnQgYWxsb3dlZCBkdXJpbmcgYSB0b3VjaCBldmVudCB0byBzdGlsbCBiZSBjb25zaWRlcmVkIGEgdGFwXG5cdFx0Ly8gT3RoZXIgcG9wdWxhciBsaWJzIHVzZSBhbnl3aGVyZSBmcm9tIDIgKGhhbW1lci5qcykgdG8gMTUsXG5cdFx0Ly8gc28gMTAgc2VlbXMgbGlrZSBhIG5pY2UsIHJvdW5kIG51bWJlci5cblx0XHRjb25zdCB0YXBNb3ZlbWVudFRocmVzaG9sZCA9IDEwO1xuXG5cdFx0Ly8gVGhlIG1heGltdW0gbGVuZ3RoIGEgdG91Y2ggY2FuIGJlIHdoaWxlIHN0aWxsIGJlaW5nIGNvbnNpZGVyZWQgYSB0YXBcblx0XHRjb25zdCB0b3VjaFRpbWVUaHJlc2hvbGQgPSAyMDA7XG5cblx0XHRsZXQgY291bGRCZVRhcDtcblxuXHRcdC8vIHNlZSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xNzk1NzU5My9ob3ctdG8tY2FwdHVyZS10b3VjaGVuZC1jb29yZGluYXRlc1xuXG5cdFx0ZWxlbWVudC5vbigndG91Y2hzdGFydCcsIChldmVudCkgPT4ge1xuXHRcdFx0Ly8gSWYgbW9yZSB0aGFuIG9uZSBmaW5nZXIsIGRvbid0IGNvbnNpZGVyIHRyZWF0aW5nIHRoaXMgYXMgYSBjbGlja1xuXHRcdFx0aWYgKGV2ZW50LnRvdWNoZXMubGVuZ3RoID09PSAxKSB7XG5cdFx0XHRcdC8vIENvcHkgcGFnZVgvcGFnZVkgZnJvbSB0aGUgb2JqZWN0XG5cdFx0XHRcdGZpcnN0VG91Y2ggPSBsYXN0TW92ZVRvdWNoID0ge1xuXHRcdFx0XHRcdHBhZ2VYIDogZXZlbnQudG91Y2hlc1swXS5wYWdlWCxcblx0XHRcdFx0XHRwYWdlWSA6IGV2ZW50LnRvdWNoZXNbMF0ucGFnZVlcblx0XHRcdFx0fTtcblx0XHRcdFx0Ly8gUmVjb3JkIHN0YXJ0IHRpbWUgc28gd2UgY2FuIGRldGVjdCBhIHRhcCB2cy4gXCJ0b3VjaCBhbmQgaG9sZFwiXG5cdFx0XHRcdHRvdWNoU3RhcnQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblx0XHRcdFx0Ly8gUmVzZXQgY291bGRCZVRhcCB0cmFja2luZ1xuXHRcdFx0XHRjb3VsZEJlVGFwID0gdHJ1ZTtcblx0XHRcdFx0dGhpcy50YXAgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0ZWxlbWVudC5vbigndG91Y2htb3ZlJywgKGV2ZW50KSA9PiB7XG5cdFx0XHQvLyBJZiBtb3JlIHRoYW4gb25lIGZpbmdlciwgZG9uJ3QgY29uc2lkZXIgdHJlYXRpbmcgdGhpcyBhcyBhIGNsaWNrXG5cdFx0XHRpZiAoZXZlbnQudG91Y2hlcy5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdGNvdWxkQmVUYXAgPSBmYWxzZTtcblx0XHRcdH0gZWxzZSBpZiAoZmlyc3RUb3VjaCkge1xuXHRcdFx0Ly8gU29tZSBkZXZpY2VzIHdpbGwgdGhyb3cgdG91Y2htb3ZlcyBmb3IgYWxsIGJ1dCB0aGUgc2xpZ2h0ZXN0IG9mIHRhcHMuXG5cdFx0XHQvLyBTbywgaWYgd2UgbW92ZWQgb25seSBhIHNtYWxsIGRpc3RhbmNlLCB0aGlzIGNvdWxkIHN0aWxsIGJlIGEgdGFwXG5cdFx0XHRcdGNvbnN0IHhkaWZmID0gZXZlbnQudG91Y2hlc1swXS5wYWdlWCAtIGZpcnN0VG91Y2gucGFnZVg7XG5cdFx0XHRcdGNvbnN0IHlkaWZmID0gZXZlbnQudG91Y2hlc1swXS5wYWdlWSAtIGZpcnN0VG91Y2gucGFnZVk7XG5cdFx0XHRcdGNvbnN0IHRvdWNoRGlzdGFuY2UgPSBNYXRoLnNxcnQoeGRpZmYgKiB4ZGlmZiArIHlkaWZmICogeWRpZmYpO1xuXG5cdFx0XHRcdGlmIChldmVudC50b3VjaGVzLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0XHRcdGxhc3RNb3ZlVG91Y2ggPSB7XG5cdFx0XHRcdFx0XHRwYWdlWCA6IGV2ZW50LnRvdWNoZXNbMF0ucGFnZVgsXG5cdFx0XHRcdFx0XHRwYWdlWSA6IGV2ZW50LnRvdWNoZXNbMF0ucGFnZVlcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHRvdWNoRGlzdGFuY2UgPiB0YXBNb3ZlbWVudFRocmVzaG9sZCkge1xuXHRcdFx0XHRcdGNvdWxkQmVUYXAgPSBmYWxzZTtcblx0XHRcdFx0XHR0aGlzLnRhcCA9IGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRjb25zdCBub1RhcCA9ICgpID0+IHtcblx0XHRcdGNvdWxkQmVUYXAgPSBmYWxzZTtcblx0XHRcdHRoaXMudGFwID0gZmFsc2U7XG5cdFx0fTtcblxuXHRcdC8vIFRPRE86IExpc3RlbiB0byB0aGUgb3JpZ2luYWwgdGFyZ2V0LiBodHRwOi8veW91dHUuYmUvRHVqZnBYT0tVcDg/dD0xM204c1xuXHRcdGVsZW1lbnQub24oJ3RvdWNobGVhdmUnLCBub1RhcCk7XG5cdFx0ZWxlbWVudC5vbigndG91Y2hjYW5jZWwnLCBub1RhcCk7XG5cblx0XHQvLyBXaGVuIHRoZSB0b3VjaCBlbmRzLCBtZWFzdXJlIGhvdyBsb25nIGl0IHRvb2sgYW5kIHRyaWdnZXIgdGhlIGFwcHJvcHJpYXRlXG5cdFx0Ly8gZXZlbnRcblx0XHRlbGVtZW50Lm9uKCd0b3VjaGVuZCcsIChldmVudCkgPT4ge1xuXHRcdFx0Zmlyc3RUb3VjaCA9IG51bGw7XG5cdFx0XHR0aGlzLnRhcCA9IGZhbHNlO1xuXHRcdFx0Ly8gUHJvY2VlZCBvbmx5IGlmIHRoZSB0b3VjaG1vdmUvbGVhdmUvY2FuY2VsIGV2ZW50IGRpZG4ndCBoYXBwZW5cblx0XHRcdGlmIChjb3VsZEJlVGFwID09PSB0cnVlKSB7XG5cdFx0XHQvLyBNZWFzdXJlIGhvdyBsb25nIHRoZSB0b3VjaCBsYXN0ZWRcblx0XHRcdFx0Y29uc3QgdG91Y2hUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSB0b3VjaFN0YXJ0O1xuXG5cdFx0XHRcdC8vIE1ha2Ugc3VyZSB0aGUgdG91Y2ggd2FzIGxlc3MgdGhhbiB0aGUgdGhyZXNob2xkIHRvIGJlIGNvbnNpZGVyZWQgYSB0YXBcblx0XHRcdFx0aWYgKHRvdWNoVGltZSA8IHRvdWNoVGltZVRocmVzaG9sZCkge1xuXHRcdFx0XHRcdC8vIERvbid0IGxldCBicm93c2VyIHR1cm4gdGhpcyBpbnRvIGEgY2xpY2tcblx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdC8qKlxuXHRcdFx0XHRcdCAqIFRyaWdnZXJlZCB3aGVuIGEgYENvbXBvbmVudGAgaXMgdGFwcGVkLlxuXHRcdFx0XHRcdCAqXG5cdFx0XHRcdFx0ICogQGV2ZW50IENvbXBvbmVudCN0YXBcblx0XHRcdFx0XHQgKi9cblx0XHRcdFx0XHRjb25zdCB0YXBFdmVudCA9ICQuRXZlbnQoJ3RhcCcpO1xuXHRcdFx0XHRcdHRhcEV2ZW50LnBhZ2VYID0gbGFzdE1vdmVUb3VjaC5wYWdlWDtcblx0XHRcdFx0XHR0YXBFdmVudC5wYWdlWSA9IGxhc3RNb3ZlVG91Y2gucGFnZVk7XG5cdFx0XHRcdFx0ZWxlbWVudC50cmlnZ2VyKHRhcEV2ZW50KTtcblx0XHRcdFx0XHQvLyBJdCBtYXkgYmUgZ29vZCB0byBjb3B5IHRoZSB0b3VjaGVuZCBldmVudCBvYmplY3QgYW5kIGNoYW5nZSB0aGVcblx0XHRcdFx0XHQvLyB0eXBlIHRvIHRhcCwgaWYgdGhlIG90aGVyIGV2ZW50IHByb3BlcnRpZXMgYXJlbid0IGV4YWN0IGFmdGVyXG5cdFx0XHRcdFx0Ly8gRXZlbnRzLmZpeEV2ZW50IHJ1bnMgKGUuZy4gZXZlbnQudGFyZ2V0KVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ0NvbXBvbmVudCcsIENvbXBvbmVudCk7XG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9Db21wb25lbnQuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIEljb24uanNcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5cbi8qKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBJY29uJ3Mgb3B0aW9uc1xuICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLmljb25OYW1lPScnXSBJY29uJ3MgbmFtZS4gSWYgdXNlIHN2Z3Nwcml0ZSBpY29ucywgaWNvbk5hbWUgaXQncyBpZCBpbiBzcHJpdGVcbiAqIEBjbGFzcyBJY29uXG4gKiBAZXh0ZW5kcyBDb21wb25lbnRcbiAqL1xuY2xhc3MgSWNvbiBleHRlbmRzIENvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IgKHBsYXllciwgb3B0aW9ucz17fSkge1xuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0Y2xhc3NOYW1lIDogJycsXG5cdFx0XHRpY29uTmFtZSA6ICcnXG5cdFx0fSwgb3B0aW9ucylcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXG5cdH1cblxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0dGhpcy5fdXNlVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICd1c2UnKTtcblx0XHR0aGlzLl9zdmdUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xuXG5cdFx0dGhpcy5pY29uTmFtZSA9IHRoaXMuX2ljb25OYW1lID0gdGhpcy5vcHRpb25zLmljb25OYW1lO1xuXHRcdHRoaXMuX3N2Z1RhZy5hcHBlbmRDaGlsZCh0aGlzLl91c2VUYWcpO1xuXHRcdHRoaXMuZWxlbWVudCA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0LmFkZENsYXNzKHRoaXMuYnVpbGRDU1NDbGFzcygpKVxuXHRcdFx0LmF0dHIoJ3RpdGxlJywgdGhpcy5vcHRpb25zLnRpdGxlKVxuXHRcdFx0LmFwcGVuZCgkKHRoaXMuX3N2Z1RhZykpO1xuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQ7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRidWlsZENTU0NsYXNzKCkge1xuXHRcdHJldHVybiBgJHtzdXBlci5idWlsZENTU0NsYXNzKCl9IGxlcGxheWVyLWljb24gJHt0aGlzLm9wdGlvbnMuY2xhc3NOYW1lfWBcblx0fVxuXG5cdC8qKlxuXHQgKiBTZXR0ZXIgb2YgaWNvbk5hbWUgZmllbGRcblx0ICogQHBhcmFtIHtTdHJpbmd9IGljb25OYW1lXG5cdCAqL1xuXHRzZXQgaWNvbk5hbWUoaWNvbk5hbWUpIHtcblx0XHRsZXQgYXR0ck5TID0gWydodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJywgJ2hyZWYnXVxuXHRcdHRoaXMuX3VzZVRhZy5yZW1vdmVBdHRyaWJ1dGVOUyguLi5hdHRyTlMsIGAke3RoaXMucGxheWVyLm9wdGlvbnMuc3ZnUGF0aH0jbGVwbGF5ZXItaWNvbi0ke3RoaXMuaWNvbk5hbWV9YClcblx0XHR0aGlzLl91c2VUYWcuc2V0QXR0cmlidXRlTlMoLi4uYXR0ck5TLCBgJHt0aGlzLnBsYXllci5vcHRpb25zLnN2Z1BhdGh9I2xlcGxheWVyLWljb24tJHtpY29uTmFtZX1gKVxuXHRcdHRoaXMuX2ljb25OYW1lID0gaWNvbk5hbWU7XG5cdH1cblxuXHQvKipcblx0ICogR2V0dGVyIG9mIGljb25OYW1lIGZpZWxkXG5cdCAqIEByZXR1cm4ge1N0cmluZ30gSWNvbidzIG5hbWVcblx0ICovXG5cdGdldCBpY29uTmFtZSAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2ljb25OYW1lO1xuXHR9XG5cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdJY29uJywgSWNvbik7XG5leHBvcnQgZGVmYXVsdCBJY29uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvSWNvbi5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgUGxheUJ1dHRvbi5qc1xuICovXG5cbmltcG9ydCBDb250cm9sIGZyb20gJy4vQ29udHJvbCc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCBJY29uIGZyb20gJy4vSWNvbic7XG5pbXBvcnQgeyBjcmVhdGVFbCB9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IElTX1RPVUNIIH0gZnJvbSAnLi4vdXRpbHMvYnJvd3Nlcic7XG5cbi8qKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICovXG5jbGFzcyBQbGF5QnV0dG9uIGV4dGVuZHMgQ29udHJvbCB7XG5cblx0Y29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKVxuXHR9XG5cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHRjb25zdCBpbm5lciA9IGNyZWF0ZUVsKCdkaXYnLCB7XG5cdFx0XHRjbGFzc05hbWUgOiAnbGVwbGF5ZXItcGxheS1idXR0b25fX2J1dHRvbidcblx0XHR9KVxuXHRcdC5hcHBlbmQobmV3IEljb24odGhpcy5wbGF5ZXIsIHsgaWNvbk5hbWUgOiAncGxheScgfSkuZWxlbWVudCk7XG5cblx0XHR0aGlzLmVsZW1lbnQgPSBjcmVhdGVFbCgnZGl2Jywge1xuXHRcdFx0Y2xhc3NOYW1lIDogdGhpcy5idWlsZENTU0NsYXNzKClcblx0XHR9KVxuXHRcdC5hcHBlbmQoaW5uZXIpO1xuXG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudDtcblx0fVxuXG5cdG9uQ2xpY2soZSkge1xuXHRcdHN1cGVyLm9uQ2xpY2soZSk7XG5cdFx0LyoqXG5cdFx0ICogU2VlIExQTFItMjkwXG5cdFx0ICogT24gdG91Y2ggZGV2aWNlcyBpbiBmdWxsc2NyZWVuIGlmIHVzZXIgbm90IGFjdGl2ZSB3ZSBkb24ndCBzaG91bGQgcGxheS5cblx0XHQgKiBBdCBmaXJzdCB3ZSBzaG93IGhpbSBhIGNvbnRyb2xzXG5cdFx0ICovXG5cdFx0aWYoSVNfVE9VQ0goKSAmJiB0aGlzLnBsYXllci52aWV3ID09PSAnZnVsbHNjcmVlbicpIHtcblx0XHRcdGlmKHRoaXMucGxheWVyLnVzZXJBY3RpdmUpIHtcblx0XHRcdFx0dGhpcy5wbGF5ZXIucGxheSgpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnBsYXllci5wbGF5KCk7XG5cdFx0fVxuXG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRidWlsZENTU0NsYXNzKCkge1xuXHRcdHJldHVybiBgbGVwbGF5ZXItcGxheS1idXR0b24gJHt0aGlzLm9wdGlvbnMuY2xhc3NOYW1lfWBcblx0fVxuXG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnUGxheUJ1dHRvbicsIFBsYXlCdXR0b24pO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ3BsYXkgYnV0dG9uJywgUGxheUJ1dHRvbik7XG5leHBvcnQgZGVmYXVsdCBQbGF5QnV0dG9uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvUGxheUJ1dHRvbi5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgdGltZS5qc1xuICpcbiAqIEBtb2R1bGUgdGltZVxuICovXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG4vKipcbiAqIENvbnZlcnQgc2Vjb25kcyB0byBmb3JtYXQgc3RyaW5nICdoaD86bW06c3MnXG4gKlxuICogQGFjY2VzcyBwdWJsaWNcbiAqIEBwYXJhbSB7TnVtYmVyfSBzZWNvbmRzIFNlY29uZHNcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gc2hvd0hvdXJzIGNvbnZlcnQgdG8gZm9ybWF0ICdoaDptbTpzcydcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZWNvbmRzVG9UaW1lIChzZWNvbmRzLCBzaG93SG91cnMpIHtcblx0dmFyIGggPSBNYXRoLmZsb29yKHNlY29uZHMgLyAzNjAwKTtcblx0dmFyIG0gPSBNYXRoLmZsb29yKHNlY29uZHMgJSAzNjAwIC8gNjApO1xuXHR2YXIgcyA9IE1hdGguZmxvb3Ioc2Vjb25kcyAlIDM2MDAgJSA2MCk7XG5cdHZhciBvdXQgPSAnJztcblx0aWYgKG0gPCAxMCkge1xuXHRcdG0gPSAnMCcgKyBtO1xuXHR9XG5cdGlmIChzIDwgMTApIHtcblx0XHRzID0gJzAnICsgcztcblx0fVxuXHRvdXQgPSBgJHttfToke3N9YDtcblxuXHRpZihoID4gMCB8fCBzaG93SG91cnMpIHtcblx0XHRvdXQgPSBgJHtofTpgICsgb3V0XG5cdH1cblx0cmV0dXJuIG91dDtcbn1cblxuXG4vKipcbiAqIFJldHVybiBsZW5ndGggLyBlbmRcbiAqXG4gKiBAYWNjZXNzIHB1YmxpY1xuICogQHBhcmFtIHtOdW1iZXJ9IGxlbmd0aFxuICogQHBhcmFtIHtOdWJtZXJ9IGVuZFxuICovXG5leHBvcnQgZnVuY3Rpb24gcGVyY2VudGlmeSAobGVuZ3RoLCBlbmQpIHtcblx0Ly8gb3IgemVybyBiZWFjYXNlIE5hTlxuXHRjb25zdCBwZXJjZW50ID0gKGxlbmd0aCAvIGVuZCkgfHwgMDtcblx0cmV0dXJuIChwZXJjZW50ID49IDEpID8gMSA6IHBlcmNlbnQ7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsKHRhZz0nZGl2JywgcHJvcHMpIHtcblx0aWYocHJvcHMgJiYgcHJvcHMuY2xhc3NOYW1lKSB7XG5cdFx0cHJvcHNbXCJjbGFzc1wiXSA9IHByb3BzLmNsYXNzTmFtZTtcblx0XHRkZWxldGUgcHJvcHMuY2xhc3NOYW1lO1xuXHR9XG5cdHJldHVybiAkKGA8JHt0YWd9Lz5gLCBwcm9wcyk7XG59XG5cblxuLyoqXG4gKiBAcGFyYW1zIHtTdHJpbmd9IEh0bWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICRodG1sKGh0bWwpIHtcblxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBub29wKCkge31cblxuZXhwb3J0IGNvbnN0IGdldFNjcm9sbEJhcldpZHRoID0gKGZ1bmN0aW9uKCkge1xuXHRsZXQgcmVzdWx0O1xuXG5cdHJldHVybiBmdW5jdGlvbigpIHtcblxuXHRcdGlmKHJlc3VsdCAhPSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH1cblxuXHRcdGNvbnN0IG91dGVyID0gJCgnPGRpdiAvPicpLmNzcyh7XG5cdFx0XHR2aXNpYmlsaXR5IDogJ2hpZGRlbicsXG5cdFx0XHR3aWR0aCA6IDEwMCxcblx0XHRcdG92ZXJmbG93IDogJ3Njcm9sbCdcblx0XHR9KS5hcHBlbmRUbygnYm9keScpO1xuXG5cdFx0Y29uc3Qgd2lkdGhXaXRoU2Nyb2xsID0gJCgnPGRpdiAvPicpLmNzcyh7XG5cdFx0XHR3aWR0aCA6ICcxMDAlJ1xuXHRcdH0pLmFwcGVuZFRvKG91dGVyKS5vdXRlcldpZHRoKCk7XG5cblx0XHRvdXRlci5yZW1vdmUoKTtcblx0XHRyZXR1cm4gcmVzdWx0ID0gMTAwIC0gd2lkdGhXaXRoU2Nyb2xsO1xuXHR9XG5cbn0oKSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvdXRpbHMvaW5kZXguanMiLCIvKipcbiAqIEBmaWxlIGJyb3dzZXIuanNcbiAqL1xuXG5cbmNvbnN0IFVTRVJfQUdFTlQgPSB3aW5kb3cubmF2aWdhdG9yICYmIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50IHx8ICcnO1xuXG5leHBvcnQgY29uc3QgSVNfTU9CSUxFID0gKC9Nb2JpbGUvaSkudGVzdChVU0VSX0FHRU5UKTtcblxuZXhwb3J0IGNvbnN0IElTX0NIUk9NRSA9IFVTRVJfQUdFTlQuaW5kZXhPZignQ2hyb21lJykgPiAtMTtcblxuZXhwb3J0IGNvbnN0IElTX0FORFJPSUQgPSAoL0FuZHJvaWQvaSkudGVzdChVU0VSX0FHRU5UKTtcblxuZXhwb3J0IGNvbnN0IElTX0FORFJPSURfUEhPTkUgPSBJU19BTkRST0lEICYmIElTX01PQklMRTtcblxuZXhwb3J0IGNvbnN0IElTX0lQQUQgPSAoL2lQYWQvaSkudGVzdChVU0VSX0FHRU5UKTtcbi8vIFRoZSBGYWNlYm9vayBhcHAncyBVSVdlYlZpZXcgaWRlbnRpZmllcyBhcyBib3RoIGFuIGlQaG9uZSBhbmQgaVBhZCwgc29cbi8vIHRvIGlkZW50aWZ5IGlQaG9uZXMsIHdlIG5lZWQgdG8gZXhjbHVkZSBpUGFkcy5cbi8vIGh0dHA6Ly9hcnRzeS5naXRodWIuaW8vYmxvZy8yMDEyLzEwLzE4L3RoZS1wZXJpbHMtb2YtaW9zLXVzZXItYWdlbnQtc25pZmZpbmcvXG5leHBvcnQgY29uc3QgSVNfSVBIT05FID0gKC9pUGhvbmUvaSkudGVzdChVU0VSX0FHRU5UKSAmJiAhSVNfSVBBRDtcbmV4cG9ydCBjb25zdCBJU19JUE9EID0gKC9pUG9kL2kpLnRlc3QoVVNFUl9BR0VOVCk7XG5leHBvcnQgY29uc3QgSVNfSU9TID0gSVNfSVBIT05FIHx8IElTX0lQQUQgfHwgSVNfSVBPRDtcblxuZXhwb3J0IGNvbnN0IElTX1NBRkFSSSA9IFVTRVJfQUdFTlQuaW5kZXhPZignU2FmYXJpJykgPiAtMSAmJiAhSVNfQ0hST01FO1xuXG5leHBvcnQgY29uc3QgSVNfVE9VQ0ggPSAoKSA9PiAnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cgfHwgbmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy91dGlscy9icm93c2VyLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBTcGxhc2hJY29uLmpzXG4gKi9cblxuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgSWNvbiBmcm9tICcuL0ljb24nO1xuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEBjbGFzcyBTcGxhc2hJY29uXG4gKiBAZXh0ZW5kcyBDb21wb25lbnRcbiAqL1xuY2xhc3MgU3BsYXNoSWNvbiBleHRlbmRzIENvbXBvbmVudCB7XG5cblx0c2hvdyhuYW1lKSB7XG5cdFx0dGhpcy5pY29uLmljb25OYW1lID0gbmFtZTtcblx0XHR0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoJ2xlcGxheWVyLXNwbGFzaGljb24tLWFjdGl2ZScpO1xuXHRcdHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbGVtZW50LnJlbW92ZUNsYXNzKCdsZXBsYXllci1zcGxhc2hpY29uLS1hY3RpdmUnKSwgMzAwKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0dGhpcy5pY29uID0gbmV3IEljb24odGhpcy5wbGF5ZXIpO1xuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQgPSAkKCc8ZGl2IC8+Jylcblx0XHRcdC5hZGRDbGFzcygnbGVwbGF5ZXItc3BsYXNoaWNvbicpXG5cdFx0XHQuYXBwZW5kKHRoaXMuaWNvbi5lbGVtZW50KTtcblx0fVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNwbGFzaEljb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9TcGxhc2hJY29uLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBUaW1lLmpzXG4gKi9cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL0NvbXBvbmVudCc7XG5pbXBvcnQgeyBzZWNvbmRzVG9UaW1lLCBjcmVhdGVFbCB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuLy8gVE9ETzog0JjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGMINGN0YLQvtGCINCx0LvQvtC6INCyIFRpbWVDb250cm9sXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEBjbGFzcyBUaW1lXG4gKiBAZXh0ZW5kcyBDb250cm9sXG4gKi9cbmNsYXNzIFRpbWUgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yIChwbGF5ZXIsIG9wdGlvbnM9e30pIHtcblx0XHRvcHRpb25zID0gJC5leHRlbmQoe30sIHtcblx0XHRcdGZuIDogKHBsYXllcikgPT4ge1xuXHRcdFx0XHRjb25zdCB2aWRlbyA9IHBsYXllci52aWRlbztcblx0XHRcdFx0cmV0dXJuIHNlY29uZHNUb1RpbWUodmlkZW8uY3VycmVudFRpbWUpO1xuXHRcdFx0fVxuXHRcdH0sIG9wdGlvbnMpO1xuXG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblxuXHRcdHRoaXMucGxheWVyLm9uKCd0aW1ldXBkYXRlJywgdGhpcy51cGRhdGVUZXh0LmJpbmQodGhpcykpO1xuXHRcdHRoaXMucGxheWVyLm9uKCdpbml0ZWQnLCB0aGlzLnVwZGF0ZVRleHQuYmluZCh0aGlzKSk7XG5cdH1cblxuXHR1cGRhdGVUZXh0KGUsIGRhdGEpIHtcblx0XHR0aGlzLmVsZW1lbnQudGV4dCh0aGlzLm9wdGlvbnMuZm4odGhpcy5wbGF5ZXIpKTtcblx0fVxuXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0dGhpcy5lbGVtZW50ID0gY3JlYXRlRWwoJ2RpdicsIHsgY2xhc3NOYW1lIDogJ2xlcGxheWVyLXRpbWUnIH0pO1xuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQ7XG5cdH1cblxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ1RpbWUnLCBUaW1lKTtcbmV4cG9ydCBkZWZhdWx0IFRpbWU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9UaW1lbGluZS9UaW1lLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBDb250cm9sQ29sbGVjdGlvbi5qc1xuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCBDb250cm9sIGZyb20gJy4vQ29udHJvbCc7XG5cbmltcG9ydCB7IGNyZWF0ZUVsIH0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgSVNfQU5EUk9JRF9QSE9ORSwgSVNfSVBIT05FLCBJU19NT0JJTEUgfSBmcm9tICcuLi91dGlscy9icm93c2VyJztcblxuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gT3B0aW9ucyBvZiBjb21wb25lbnRcbiAqIEBwYXJhbSB7alF1ZXJ5fSBbb3B0aW9ucy5jb250cm9sc10gQXJyYXkgb2Ygcm93cyBvZiBjb250cm9sJ3MgbmFtZVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLmNvbnRyb2xzT3B0aW9uc10gQ29udHJvbCBvcHRpb25zXG4gKiBAcHJvcGVydHkge0FycmF5fSBBcnJheSBvZiByb3dzIG9mIGNvbnRyb2wncyBuYW1lXG4gKiBAcHJcbiAqXG4gKi9cbmNsYXNzIENvbnRyb2xDb2xsZWN0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IgKHBsYXllciwgb3B0aW9ucykge1xuXHRcdGxldCB7IG5hbWUgfSA9IG9wdGlvbnM7XG5cblx0XHQvLyBPcHRpb25zIGJ5IHVzZXIgYWdlbnRcblx0XHQvLyBPcHRpb25zIG9ubHkgZm9yIGNvbW1vbjphbmRyb2lkIG9yIHdoYXRldmVyOmFuZHJvaWQsIHdoYXRldmVyOmlvcyBjb250cm9sc1xuXHRcdGxldCBsb2NhbFVhT3B0aW9ucyA9IHt9O1xuXG5cdFx0bGV0IGNvbnRyb2xzT3B0aW9ucyA9IHt9O1xuXG5cdFx0bGV0IGNvbnRyb2xzID0gW107XG5cblx0XHRpZihuYW1lICE9IG51bGwpIHtcblxuXHRcdFx0Y29udHJvbHMgPSBwbGF5ZXIub3B0aW9ucy5jb250cm9sc1tuYW1lXTtcblxuXHRcdFx0Y29udHJvbHNPcHRpb25zID0gcGxheWVyLm9wdGlvbnMuY29udHJvbHNPcHRpb25zW25hbWVdO1xuXG5cdFx0XHRbXG5cdFx0XHRcdHsgZmxhZyA6IElTX01PQklMRSwgbmFtZSA6ICdtb2JpbGUnfSxcbiAgICAgICAgICAgICAgICB7IGZsYWcgOiBJU19BTkRST0lEX1BIT05FLCBuYW1lIDogJ2FuZHJvaWQnIH0sXG4gICAgICAgICAgICAgICAgeyBmbGFnIDogSVNfSVBIT05FLCBuYW1lIDogJ2lvcycgfSxcblx0XHRcdF0uZm9yRWFjaChpdGVtID0+IHtcblx0XHRcdFx0aWYoaXRlbS5mbGFnKSB7XG5cdFx0XHRcdFx0Y29uc3QgbG9jYWxOYW1lID0gYCR7bmFtZX06JHtpdGVtLm5hbWV9YDtcblxuXHRcdFx0XHRcdGlmKHBsYXllci5vcHRpb25zLmNvbnRyb2xzW2xvY2FsTmFtZV0pIHtcblx0XHRcdFx0XHRcdGxvY2FsVWFPcHRpb25zID0gJC5leHRlbmQoe30sIGxvY2FsVWFPcHRpb25zLCBwbGF5ZXIub3B0aW9ucy5jb250cm9sc09wdGlvbnNbbG9jYWxOYW1lXSk7XG5cdFx0XHRcdFx0XHRjb250cm9scyA9IHBsYXllci5vcHRpb25zLmNvbnRyb2xzW2xvY2FsTmFtZV07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBpdGVtLmZsYWc7XG5cdFx0XHR9KTtcblx0XHR9XG5cblxuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0Y29udHJvbHMgOiBjb250cm9scyxcblx0XHRcdGFsaWduIDogJ2xlZnQnLFxuXHRcdFx0Y29udHJvbHNPcHRpb25zIDoge31cblx0XHR9LCBsb2NhbFVhT3B0aW9ucywgY29udHJvbHNPcHRpb25zLCBvcHRpb25zKTtcblxuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cblx0XHR0aGlzLmFjdGl2ZSA9IG9wdGlvbnMuYWN0aXZlIHx8IGZhbHNlO1xuXHRcdHRoaXMubmFtZSA9IG9wdGlvbnMubmFtZTtcblxuXHRcdHRoaXMucGxheWVyLmNvbnRyb2xzW3RoaXMubmFtZV0gPSB0aGlzO1xuXHR9XG5cblxuXHRfZ2V0Q29udHJvbE9wdGlvbnMobmFtZSkge1xuXHRcdGNvbnN0IHsgY29udHJvbHNPcHRpb25zIH0gPSB0aGlzLm9wdGlvbnM7XG5cdFx0bGV0IHJlc3VsdCA9IGNvbnRyb2xzT3B0aW9ucy5jb250cm9sIHx8IHt9O1xuXG5cdFx0aWYoY29udHJvbHNPcHRpb25zW25hbWVdKSB7XG5cdFx0XHRyZXN1bHQgPSAkLmV4dGVuZCh0cnVlLCB7fSwgcmVzdWx0LCBjb250cm9sc09wdGlvbnNbbmFtZV0pO1xuXHRcdH1cblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblxuXHRhZGRDb250cm9sKGluZGV4Um93LCBuYW1lLCBvcHRpb25zKSB7XG5cdFx0Y29uc3QgY29udHJvbCA9IENvbnRyb2wuY3JlYXRlKHRoaXMucGxheWVyLCBuYW1lLCB7XG5cdFx0XHRjb2xsZWN0aW9uIDogdGhpcy5vcHRpb25zLm5hbWUsXG5cdFx0XHQuLi5vcHRpb25zXG5cdFx0fSk7XG5cblx0XHRpZihjb250cm9sID09IG51bGwpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR3aGlsZShpbmRleFJvdyA+IHRoaXMuX3Jvd3MubGVuZ3RoKSB7XG5cdFx0XHR0aGlzLmFkZFJvdygpO1xuXHRcdH1cblxuXHRcdGNvbnN0IGVsZW1Sb3cgPSB0aGlzLl9yb3dzW2luZGV4Um93XTtcblx0XHRlbGVtUm93LmFwcGVuZChjb250cm9sLmVsZW1lbnQpO1xuXG5cdFx0aWYgKHRoaXMuY29udHJvbHMgPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5jb250cm9scyA9IFtdO1xuXHRcdH1cblx0XHRpZiAodGhpcy5jb250cm9sc1tpbmRleFJvd10gPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5jb250cm9sc1tpbmRleFJvd10gPSB7fTtcblx0XHR9XG5cblx0XHR0aGlzLmNvbnRyb2xzW2luZGV4Um93XVtuYW1lXSA9IGNvbnRyb2w7XG5cdH1cblxuXHRnZXRDb250cm9sKGZpcnN0LCBzZWNvbmQpIHtcblx0XHRpZihzZWNvbmQgPT0gbnVsbCkge1xuXHRcdFx0Y29uc3QgbmFtZSA9IGZpcnN0O1xuXHRcdFx0Zm9yKGxldCBpID0gMDsgaSA8IHRoaXMuY29udHJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYodGhpcy5jb250cm9sc1tpXVtuYW1lXSAhPSBudWxsKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuY29udHJvbHNbaV1bbmFtZV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3QgbmFtZSA9IGZpcnN0O1xuXHRcdFx0Y29uc3QgaW5kZXhSb3cgPSBzZWNvbmQ7XG5cdFx0XHRyZXR1cm4gdGhpcy5jb250cm9sc1tpbmRleFJvd11bbmFtZV07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRhZGRSb3coKSB7XG5cdFx0Y29uc3QgZWxlbVJvdyA9IGNyZWF0ZUVsKCdkaXYnLCB7XG5cdFx0XHRjbGFzc05hbWUgOiBgbGVwbGF5ZXItY29udHJvbHMgY29udHJvbHMtJHt0aGlzLm9wdGlvbnMubmFtZX1gXG5cdFx0fSk7XG5cblx0XHRpZiAodGhpcy5fcm93cyA9PSBudWxsKSB7XG5cdFx0XHR0aGlzLl9yb3dzID0gW11cblx0XHR9XG5cdFx0dGhpcy5fcm93cy5wdXNoKGVsZW1Sb3cpO1xuXHRcdHRoaXMuZWxlbWVudC5hcHBlbmQoZWxlbVJvdyk7XG5cblx0XHRyZXR1cm4gZWxlbVJvdztcblx0fVxuXG5cdGdldFJvdyhpbmRleFJvdykge1xuXHRcdHJldHVybiB0aGlzLl9yb3dzW2luZGV4Um93IHx8IDBdO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHRjb25zdCB7IG5hbWUsIGNvbnRyb2xzLCBhbGlnbiB9ID0gdGhpcy5vcHRpb25zO1xuXHRcdGxldCBnbG9iYWxBbGlnbiA9IG51bGw7XG5cblx0XHR0aGlzLmVsZW1lbnQgPSBjcmVhdGVFbCgnZGl2Jywge1xuXHRcdFx0Y2xhc3NOYW1lIDogYGxlcGxheWVyLWNvbnRyb2wtY29sbGVjdGlvbiBsZXBsYXllci1jb250cm9sLWNvbGxlY3Rpb24tLSR7bmFtZX1gLFxuXHRcdH0pXG5cblx0XHRpZih0eXBlb2YgYWxpZ24gPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRnbG9iYWxBbGlnbiA9IGFsaWduO1xuXHRcdH1cblxuXHRcdGNvbnRyb2xzLmZvckVhY2goKHJvdywgaW5kZXhSb3cpID0+IHtcblx0XHRcdGNvbnN0IGVsZW1Sb3cgPSB0aGlzLmFkZFJvdygpO1xuXHRcdFx0bGV0IHJvd0FsaWduID0gZ2xvYmFsQWxpZ247XG5cblx0XHRcdGlmKEFycmF5LmlzQXJyYXkoYWxpZ24pICYmIGFsaWduW2luZGV4Um93XSkge1xuXHRcdFx0XHRyb3dBbGlnbiA9IGFsaWduW2luZGV4Um93XVxuXHRcdFx0fVxuXG5cdFx0XHRyb3cuZm9yRWFjaChjb250cm9sTmFtZSA9PiB7XG5cblx0XHRcdFx0aWYoY29udHJvbE5hbWUgPT09ICd0aW1lbGluZScgJiYgcm93QWxpZ24gIT09ICdqdXN0aWZ5Jykge1xuXHRcdFx0XHRcdGNvbnNvbGUud2FybignQ29ucm9scyBzaG91bGQgaGF2ZSBqdXN0aWZ5IGFsaWduLCBpZiB0aGVyZSBpcyB0aGUgdGltZWxpbmUgaW4gaXQnKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuYWRkQ29udHJvbChpbmRleFJvdywgY29udHJvbE5hbWUsIHRoaXMuX2dldENvbnRyb2xPcHRpb25zKG5hbWUpKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRlbGVtUm93LmFkZENsYXNzKGBsZXBsYXllci1jb250cm9scy0tJHtyb3dBbGlnbn1gKVxuXHRcdFx0XHQuYXR0cigndGFiaW5kZXgnLCAwKTtcblxuXHRcdFx0ZWxlbVJvdy5maW5kKCcuZGl2aWRlciArIC5kaXZpZGVyJykucmVtb3ZlKCk7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50O1xuXHR9XG5cblx0aGlkZSAoKSB7XG5cdFx0dGhpcy5lbGVtZW50LmhpZGUoKTtcblx0XHR0aGlzLmVsZW1lbnQuZmluZCgnLmxlcGxheWVyLWNvbnRyb2xzJykuaGlkZSgpXG5cdH1cblxuXHRzaG93ICgpIHtcblx0XHR0aGlzLmVsZW1lbnQuc2hvdygpXG5cdFx0dGhpcy5lbGVtZW50LmZpbmQoJy5sZXBsYXllci1jb250cm9scycpLnNob3coKVxuXHR9XG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnQ29udHJvbENvbGxlY3Rpb24nLCBDb250cm9sQ29sbGVjdGlvbik7XG5leHBvcnQgZGVmYXVsdCBDb250cm9sQ29sbGVjdGlvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL0NvbnRyb2xDb2xsZWN0aW9uLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBTZWN0aW9ucy5qc1xuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcblxuaW1wb3J0IHsgc2Vjb25kc1RvVGltZSwgZ2V0U2Nyb2xsQmFyV2lkdGggfSBmcm9tICcuLi91dGlscyc7XG4vKipcbiAqIEBjbGFzcyBTZWN0aW9uc1xuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHBhcmFtIHtBcnJheX0gW29wdGlvbnMuaXRlbXM9W119IERhdGEgZm9yIHNlY3Rpb25zXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnZpZXdzXSBTaG93IHNlY3Rpb24gb25seSBpbiBmdWxsc2NyZWVuXG4gKiBAZXh0ZW5kcyBDb21wb25lbnRcbiAqL1xuY2xhc3MgU2VjdGlvbnMgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcblx0XHRsZXQgeyBpdGVtcyA9IFtdIH0gPSBvcHRpb25zO1xuXHRcdGl0ZW1zID0gW10uY29uY2F0KGl0ZW1zKTtcblxuXHRcdC8vb3B0aW9ucy5pdGVtcyA9IGl0ZW1zO1xuXG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblxuXHRcdHRoaXMuc2Nyb2xsRWxlbWVudCA9IHRoaXMuX2lubmVyRWxlbWVudDtcblx0XHR0aGlzLmFjdGl2ZVNlY3Rpb24gPSB0aGlzLmdldFNlY3Rpb25CeUluZGV4KDApO1xuXG5cdFx0dGhpcy5pdGVtcyA9IGl0ZW1zO1xuXHRcdHRoaXMubGVuZ3RoID0gdGhpcy5pdGVtcy5sZW5ndGg7XG5cblx0XHR0aGlzLnNldEFjdGl2ZUJ5SW5kZXgoMCk7XG5cblx0XHR0aGlzLmVsZW1lbnRcblx0XHRcdC5maW5kKCcubGVwbGF5ZXItc2VjdGlvbicpXG5cdFx0XHQub24oJ2NsaWNrJywgdGhpcy5vblNlY3Rpb25DbGljay5iaW5kKHRoaXMpKTtcblxuXHRcdC8vIHRoaXMucGxheWVyLm9uKCdzZWN0aW9uc3RvZ2dsZScsIHRoaXMuX29uU2VjdGlvbnNUb2dnbGUuYmluZCh0aGlzKSk7XG5cblx0XHR0aGlzLnBsYXllci5vbigndGltZXVwZGF0ZScsIHRoaXMub25UaW1lVXBkYXRlLmJpbmQodGhpcykpO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ2luaXRlZCcsIHRoaXMudXBkYXRlU2VjdGlvbkR1cmF0aW9uLmJpbmQodGhpcykpO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ2R1cmF0aW9uY2hhbmdlJywgdGhpcy51cGRhdGVTZWN0aW9uRHVyYXRpb24uYmluZCh0aGlzKSk7XG5cblx0XHR0aGlzLnBsYXllci5vbignZm9jdXMnLCAoKSA9PiB0aGlzLnBsYXllci5mb2N1cygpKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0bmV4dCgpIHtcblx0XHRjb25zdCBzZWN0aW9uSW5kZXggPSBwYXJzZUludCh0aGlzLmFjdGl2ZVNlY3Rpb24uYXR0cignZGF0YS1pbmRleCcpKTtcblx0XHRjb25zdCBuZXdJbmRleCA9IHNlY3Rpb25JbmRleCA+PSB0aGlzLmxlbmd0aCA/IHRoaXMubGVuZ3RoIDogc2VjdGlvbkluZGV4ICsgMTtcblxuXHRcdHRoaXMuc2V0QWN0aXZlQnlJbmRleChuZXdJbmRleCk7XG5cblx0XHR0aGlzLnBsYXllci52aWRlby5jdXJyZW50VGltZSA9IHRoaXMuaXRlbXNbc2VjdGlvbkluZGV4XS5lbmQ7XG5cdH1cblxuXHRwcmV2KCkge1xuXHRcdGNvbnN0IHNlY3Rpb25JbmRleCA9IHBhcnNlSW50KHRoaXMuYWN0aXZlU2VjdGlvbi5hdHRyKCdkYXRhLWluZGV4JykpO1xuXHRcdGNvbnN0IG5ld0luZGV4ID0gc2VjdGlvbkluZGV4IDw9IDAgPyAwIDogc2VjdGlvbkluZGV4IC0gMTtcblxuXHRcdHRoaXMuc2V0QWN0aXZlQnlJbmRleChuZXdJbmRleCk7XG5cdFx0dGhpcy5wbGF5ZXIudmlkZW8uY3VycmVudFRpbWUgPSB0aGlzLml0ZW1zW25ld0luZGV4XS5iZWdpbjtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0Y29uc3QgeyBmdWxsc2NyZWVuT25seSwgaGlkZVNjcm9sbCB9ID0gdGhpcy5vcHRpb25zO1xuXG5cblx0XHR0aGlzLmVsZW1lbnQgPSAkKCc8ZGl2IC8+Jylcblx0XHRcdC5hZGRDbGFzcygnbGVwbGF5ZXItc2VjdGlvbnMnKVxuXHRcdFx0LmF0dHIoJ3RhYmluZGV4JywgJzAnKTtcblxuXHRcdHRoaXMuX2lubmVyRWxlbWVudCA9ICQoJzxkaXYgLz4nKS5hZGRDbGFzcygnbGVwbGF5ZXItc2VjdGlvbnNfX2lubmVyJyk7XG5cblx0XHRpZihmdWxsc2NyZWVuT25seSkge1xuXHRcdFx0dGhpcy5lbGVtZW50LmFkZENsYXNzKCdsZXBsYXllci1zZWN0aW9ucy0tZnNvbmx5Jyk7XG5cdFx0fVxuXG5cdFx0aWYoaGlkZVNjcm9sbCkge1xuXHRcdFx0dGhpcy5lbGVtZW50LmFkZENsYXNzKCdsZXBsYXllci1zZWN0aW9ucy0taGlkZS1zY3JvbGwnKTtcblx0XHRcdHRoaXMuX2lubmVyRWxlbWVudC5jc3Moe1xuXHRcdFx0XHRyaWdodCA6IC0xICogZ2V0U2Nyb2xsQmFyV2lkdGgoKVxuXHRcdFx0fSlcblx0XHR9XG5cblx0XHR0aGlzLmVsZW1lbnQuYXBwZW5kKFxuXHRcdFx0dGhpcy5faW5uZXJFbGVtZW50LmFwcGVuZCh0aGlzLl9jcmVhdGVTZWN0aW9ucyh0aGlzLm9wdGlvbnMuaXRlbXMpKVxuXHRcdClcblxuXG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudDtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdHVwZGF0ZVNlY3Rpb25EdXJhdGlvbigpIHtcblx0XHRpZih0aGlzLml0ZW1zICE9IG51bGwgJiYgdGhpcy5pdGVtcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRjb25zdCBsZW5ndGggPSB0aGlzLml0ZW1zLmxlbmd0aFxuXHRcdFx0dGhpcy5pdGVtc1tsZW5ndGggLSAxXS5lbmQgPSB0aGlzLnBsYXllci52aWRlby5kdXJhdGlvbjtcblxuXHRcdFx0Ly8gVE9ETzog0J/RgNC+0LTRg9C80LDRgtGMINGE0YPQvdC60YbQuNGP0Y4gdXBkYXRlU2VjdGlvblxuXHRcdFx0Ly90aGlzLnVwZGF0ZVNlY3Rpb24odGhpcy5pdGVtc1tsZW5ndGggLSAxXSwgbGVuZ3RoIC0gMSk7XG5cdFx0fVxuXHR9XG5cblxuXHRvblNlY3Rpb25DbGljayhlKSB7XG5cdFx0Y29uc3QgdmlkZW8gPSB0aGlzLnBsYXllci52aWRlbztcblx0XHRjb25zdCBzZWN0aW9uID0gJChlLnRhcmdldCkuY2xvc2VzdCgnLmxlcGxheWVyLXNlY3Rpb24nKTtcblx0XHR2aWRlby5jdXJyZW50VGltZSA9IHNlY3Rpb24uYXR0cignZGF0YS1iZWdpbicpO1xuXHRcdHRoaXMucGxheWVyLnRyaWdnZXIoJ3NlY3Rpb25zY2xpY2snLCB7IHNlY3Rpb24gOiB0aGlzLml0ZW1zW3NlY3Rpb24uYXR0cignZGF0YS1pbmRleCcpXX0pO1xuXHR9XG5cblx0c2V0QWN0aXZlQnlJbmRleChpbmRleCkge1xuXHRcdGlmIChcblx0XHRcdHRoaXMuYWN0aXZlU2VjdGlvbi5sZW5ndGggPT09IDAgfHxcblx0XHRcdHBhcnNlSW50KHRoaXMuYWN0aXZlU2VjdGlvbi5hdHRyKCdkYXRhLWluZGV4JykpID09PSBpbmRleCB8fFxuXHRcdFx0dGhpcy5nZXRTZWN0aW9uQnlJbmRleChpbmRleCkubGVuZ3RoID09PSAwXG5cdFx0KSB7XG5cdFx0XHRyZXR1cm4gdGhpc1xuXHRcdH1cblxuXHRcdHRoaXMuYWN0aXZlU2VjdGlvbi5yZW1vdmVDbGFzcygnbGVwbGF5ZXItc2VjdGlvbi0tYWN0aXZlJyk7XG5cdFx0dGhpcy5hY3RpdmVTZWN0aW9uID0gdGhpcy5nZXRTZWN0aW9uQnlJbmRleChpbmRleCk7XG5cdFx0dGhpcy5hY3RpdmVTZWN0aW9uLmFkZENsYXNzKCdsZXBsYXllci1zZWN0aW9uLS1hY3RpdmUnKTtcblxuXHRcdGNvbnN0IHRvcFBvc2l0aW9uID0gdGhpcy5hY3RpdmVTZWN0aW9uLnBvc2l0aW9uKCkudG9wO1xuXG5cdFx0dGhpcy5zY3JvbGxFbGVtZW50XG5cdFx0XHQuYW5pbWF0ZSh7XG5cdFx0XHRcdHNjcm9sbFRvcCA6IHRoaXMuc2Nyb2xsRWxlbWVudC5zY3JvbGxUb3AoKSArIHRvcFBvc2l0aW9uXG5cdFx0XHR9LCA4MDApXG5cblx0XHR0aGlzLnBsYXllci50cmlnZ2VyKCdzZWN0aW9uc2NoYW5nZScsIHsgc2VjdGlvbiA6IHRoaXMuaXRlbXNbaW5kZXhdfSk7XG5cblx0XHRyZXR1cm4gdGhpc1xuXHR9XG5cblx0Z2V0U2VjdGlvbkJ5SW5kZXgoaW5kZXgpIHtcblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50LmZpbmQoYC5sZXBsYXllci1zZWN0aW9uW2RhdGEtaW5kZXg9XCIke2luZGV4fVwiXWApO1xuXHR9XG5cblxuXHRvblRpbWVVcGRhdGUoZSwgZGF0YSkge1xuXHRcdGlmICh0aGlzLmFjdGl2ZVNlY3Rpb24ubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm5cblx0XHR9XG5cblx0XHRjb25zdCBjdXJyZW50VGltZSA9IHRoaXMucGxheWVyLmN1cnJlbnRUaW1lO1xuXG5cdFx0Ly8gVXBkYXRlIHNwYW4gd2l0aCBlbmQgc2VjdGlvbiB0aW1lXG5cdFx0Ly8gVE9ETzog0JLRi9C90LXRgdGC0Lgg0Y3RgtC+INCyINC+0YLQtNC10LvRjNC90YvQuSDQutC+0LzQv9C+0L3QtdC90YIgU2hvd1RpbWUg0LjQu9C4INGC0LjQv9C+INGC0L7Qs9C+XG5cdFx0aWYodGhpcy5wbGF5ZXIudmlldyA9PT0gJ21pbmknKSB7XG5cdFx0XHRjb25zdCBlbmRTZWN0aW9uVGltZSA9IHRoaXMuYWN0aXZlU2VjdGlvbi5hdHRyKCdkYXRhLWVuZCcpO1xuXHRcdFx0dGhpcy5hY3RpdmVTZWN0aW9uXG5cdFx0XHRcdC5uZXh0KClcblx0XHRcdFx0LmZpbmQoJy50aW1lJylcblx0XHRcdFx0LnRleHQoc2Vjb25kc1RvVGltZShlbmRTZWN0aW9uVGltZSAtIGN1cnJlbnRUaW1lKSk7XG5cdFx0fVxuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBzZWN0aW9uID0gdGhpcy5pdGVtc1tpXTtcblx0XHRcdGlmIChjdXJyZW50VGltZSA8IHNlY3Rpb24uZW5kKSB7XG5cdFx0XHRcdHRoaXMuc2V0QWN0aXZlQnlJbmRleChpKVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRzZXQgdmlzaWJsZSh2YWx1ZSkge1xuXHRcdGlmICh0aGlzLmVsZW1lbnQuaGFzQ2xhc3MoJ2xlcGxheWVyLXNlY3Rpb25zLS1oaWRkZW4nKSAmJiB2YWx1ZSkge1xuXHRcdFx0dGhpcy5lbGVtZW50LnJlbW92ZUNsYXNzKCdsZXBsYXllci1zZWN0aW9ucy0taGlkZGVuJyk7XG5cdFx0XHR0aGlzLnBsYXllci50cmlnZ2VyKCdzZWN0aW9uc3RvZ2dsZScsIHsgaXNWaXNpYmxlIDogdmFsdWUgfSk7XG5cdFx0fSBlbHNlIGlmICghdmFsdWUpIHtcblx0XHRcdHRoaXMuZWxlbWVudC5hZGRDbGFzcygnbGVwbGF5ZXItc2VjdGlvbnMtLWhpZGRlbicpO1xuXHRcdFx0dGhpcy5wbGF5ZXIudHJpZ2dlcignc2VjdGlvbnN0b2dnbGUnLCB7IGlzVmlzaWJsZSA6IHZhbHVlIH0pO1xuXHRcdH1cblx0fVxuXG5cdGdldCB2aXNpYmxlKCkge1xuXHRcdHJldHVybiAhdGhpcy5lbGVtZW50Lmhhc0NsYXNzKCdsZXBsYXllci1zZWN0aW9ucy0taGlkZGVuJylcblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGUgSFRNTCBvZiBzZWN0aW9uIGJ5IGRhdGEgYW5kIGluZGV4IHNlY3Rpb25cblx0ICpcblx0ICogQHJldHVybnMge1N0cmluZ30gSFRNTFxuXHQgKi9cblx0Y3JlYXRlU2VjdGlvbihzZWN0aW9uLCBpbmRleCkge1xuXHRcdGNvbnN0IGl0ZW1zID0gdGhpcy5pdGVtcyB8fCB0aGlzLm9wdGlvbnMuaXRlbXM7XG5cdFx0Y29uc3QgaXRlbSA9IGBcblx0XHRcdDxkaXYgY2xhc3M9XCJsZXBsYXllci1zZWN0aW9uICR7IWluZGV4ID8gJ2xlcGxheWVyLXNlY3Rpb24tLWFjdGl2ZScgOiAnJ31cIlxuXHRcdFx0XHRkYXRhLWJlZ2luPVwiJHtzZWN0aW9uLmJlZ2lufVwiXG5cdFx0XHRcdGRhdGEtaW5kZXg9XCIke2luZGV4LnRvU3RyaW5nKCl9XCJcblx0XHRcdFx0ZGF0YS1lbmQ9XCIke3NlY3Rpb24uZW5kfVwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibGVwbGF5ZXItc2VjdGlvbi10aW1lXCI+JHtzZWNvbmRzVG9UaW1lKHNlY3Rpb24uYmVnaW4pfTwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibGVwbGF5ZXItc2VjdGlvbi1pbmZvXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImxlcGxheWVyLXNlY3Rpb24tbmV4dC1pbmZvXCI+XG5cdFx0XHRcdFx0XHQke3NlY3Rpb24ubmV4dEluZm8gfHwgJ9Ch0LvQtdC00YPRjtGJ0LDRjyDRgdC10LrRhtC40Y8g0L3QsNGH0L3QtdGC0YHRjyDRh9C10YDQtdC3J31cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwidGltZVwiPiR7c2Vjb25kc1RvVGltZShpdGVtc1swXS5lbmQpfTwvc3Bhbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQke1xuXHRcdFx0XHRcdFx0c2VjdGlvbi50aXRsZSAhPSBudWxsID9cblx0XHRcdFx0XHRcdFx0YDxkaXYgY2xhc3M9XCJsZXBsYXllci1zZWN0aW9uLXRpdGxlXCI+JHtzZWN0aW9uLnRpdGxlfTwvZGl2PmBcblx0XHRcdFx0XHRcdDogJydcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0JHtcblx0XHRcdFx0XHRcdHNlY3Rpb24uZGVzY3JpcHRpb24gIT0gbnVsbCA/XG5cdFx0XHRcdFx0XHRcdGA8ZGl2IGNsYXNzPVwibGVwbGF5ZXItc2VjdGlvbi1kZXNjcmlwdGlvblwiPiR7c2VjdGlvbi5kZXNjcmlwdGlvbn08L2Rpdj5gXG5cdFx0XHRcdFx0XHQ6ICcnXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdGAudHJpbSgpXG5cdFx0cmV0dXJuIGl0ZW1cblx0fVxuXG5cdC8vIFRPRE86INCf0YDQuNC00YPQvNCw0YLRjCDRh9GC0L4g0YHQtNC10LvQsNGC0Ywg0YEg0YHQvtCx0YvRgtC40Y/QvNC4INC/0L7RgdC70LUg0L7QsdC90L7QstC70LXQvdC40Y8g0L/QvtC70L3QvtGB0YzRjiDRgdC10LrRhtC40Lhcblx0LyoqXG5cdCAqIEZpbmQgc2VjdGlvbiBieSBpbmRleCBhbmQgdXBkYXRlIGhpbSB1c2luZyBkYXRhXG5cdCAqXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuXHQgKi9cblx0dXBkYXRlU2VjdGlvbihkYXRhLCBpbmRleCkge1xuXHRcdHRoaXMuZ2V0U2VjdGlvbkJ5SW5kZXgoaW5kZXgpXG5cdFx0XHQucmVwbGFjZVdpdGgodGhpcy5jcmVhdGVTZWN0aW9uKGRhdGEsIGluZGV4KSlcblx0XHRcdC5vbignY2xpY2snLCB0aGlzLm9uU2VjdGlvbkNsaWNrLmJpbmQodGhpcykpO1xuXHR9XG5cblx0X2NyZWF0ZVNlY3Rpb25zKGl0ZW1zKSB7XG5cdFx0bGV0IHJlc3VsdCA9ICcnO1xuXHRcdGl0ZW1zLmZvckVhY2goKHNlY3Rpb24sIGluZGV4KSA9PiB7XG5cdFx0XHRyZXN1bHQgKz0gdGhpcy5jcmVhdGVTZWN0aW9uKHNlY3Rpb24sIGluZGV4KTtcblx0XHR9KTtcblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnU2VjdGlvbnMnLCBTZWN0aW9ucyk7XG5leHBvcnQgZGVmYXVsdCBTZWN0aW9ucztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL1NlY3Rpb25zLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBFcnJvckRpc3BsYXkuanNcbiAqL1xuXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcblxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAY2xhc3MgRXJyb3JEaXNwbGF5XG4gKiBAZXh0ZW5kcyBDb21wb25lbnRcbiAqL1xuY2xhc3MgRXJyb3JEaXNwbGF5IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnM9e30pIHtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXHRcdGlmKHRoaXMucGxheWVyLl9lcnJvciAhPSBudWxsKSB7XG5cdFx0XHR0aGlzLm1lc3NhZ2UgPSB0aGlzLnBsYXllci5fZXJyb3IubWVzc2FnZTtcblx0XHRcdHRoaXMuZWxlbWVudC5zaG93KCk7XG5cdFx0fVxuXHRcdHRoaXMucGxheWVyLm9uKCdlcnJvcicsIHRoaXMub25QbGF5ZXJFcnJvci5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0dGhpcy5lbGVtZW50ID0gJCgnPGRpdiAvPicpXG5cdFx0XHQuYWRkQ2xhc3MoJ2xlcGxheWVyLWVycm9yLWRpc3BsYXknKVxuXHR9XG5cblx0c2V0IG1lc3NhZ2UodmFsdWUpIHtcblx0XHR0aGlzLmVsZW1lbnQuaHRtbCh2YWx1ZSk7XG5cdH1cblxuXHRvblBsYXllckVycm9yKGUsIGRhdGEpIHtcblx0XHRjb25zdCBlcnJvciA9IGRhdGEuZXJyb3I7XG5cdFx0dGhpcy5tZXNzYWdlID0gZXJyb3IubWVzc2FnZTtcblx0XHR0aGlzLmVsZW1lbnQuc2hvdygpO1xuXHR9XG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnRXJyb3JEaXNwbGF5JywgRXJyb3JEaXNwbGF5KTtcbmV4cG9ydCBkZWZhdWx0IEVycm9yRGlzcGxheTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL0Vycm9yRGlzcGxheS5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgRXJyb3JEaXNwbGF5LmpzXG4gKi9cblxuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5cbi8qKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLnVybF0gcGF0aCB0byBwb3N0ZXIgaW1hZ2VcbiAqIEBjbGFzcyBQb3N0ZXJcbiAqIEBleHRlbmRzIENvbXBvbmVudFxuICovXG5jbGFzcyBQb3N0ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucz17fSkge1xuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0dXJsIDogb3B0aW9ucy51cmxcblx0XHR9LCBvcHRpb25zKTtcblxuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cblx0XHR0aGlzLnVybCA9IHRoaXMub3B0aW9ucy51cmw7XG5cdH1cblxuXHRzZXQgdXJsKHZhbHVlKSB7XG5cdFx0aWYodmFsdWUgPT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0aGlzLl91cmwgPSB2YWx1ZTtcblx0XHR0aGlzLmVsZW1lbnQuY3NzKCdiYWNrZ3JvdW5kLWltYWdlJywgYHVybChcIiR7dmFsdWV9XCIpYClcblx0fVxuXG5cdGdldCB1cmwoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3VybDtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0dGhpcy5lbGVtZW50ID0gJCgnPGRpdiAvPicpXG5cdFx0XHQuYWRkQ2xhc3MoJ2xlcGxheWVyLXBvc3RlcicpO1xuXG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudDtcblx0fVxuXG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnUG9zdGVyJywgUG9zdGVyKTtcbmV4cG9ydCBkZWZhdWx0IFBvc3RlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL1Bvc3Rlci5qcyIsIi8qKlxuICogQGZpbGUgZnVsbHNjcmVlbi1hcGkuanNcbiAqL1xuXG5cbi8qXG4gKiBTdG9yZSB0aGUgYnJvd3Nlci1zcGVjaWZpYyBtZXRob2RzIGZvciB0aGUgZnVsbHNjcmVlbiBBUElcbiAqIEB0eXBlIHtPYmplY3R8dW5kZWZpbmVkfVxuICogQHByaXZhdGVcbiAqL1xubGV0IEZ1bGxzY3JlZW5BcGkgPSB7fTtcblxuLy8gYnJvd3NlciBBUEkgbWV0aG9kc1xuLy8gbWFwIGFwcHJvYWNoIGZyb20gU2NyZWVuZnVsLmpzIC0gaHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy9zY3JlZW5mdWxsLmpzXG5jb25zdCBhcGlNYXAgPSBbXG5cdC8vIFNwZWM6IGh0dHBzOi8vZHZjcy53My5vcmcvaGcvZnVsbHNjcmVlbi9yYXctZmlsZS90aXAvT3ZlcnZpZXcuaHRtbFxuXHRbXG5cdFx0J3JlcXVlc3RGdWxsc2NyZWVuJyxcblx0XHQnZXhpdEZ1bGxzY3JlZW4nLFxuXHRcdCdmdWxsc2NyZWVuRWxlbWVudCcsXG5cdFx0J2Z1bGxzY3JlZW5FbmFibGVkJyxcblx0XHQnZnVsbHNjcmVlbmNoYW5nZScsXG5cdFx0J2Z1bGxzY3JlZW5lcnJvcidcblx0XSxcblx0Ly8gV2ViS2l0XG5cdFtcblx0XHQnd2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4nLFxuXHRcdCd3ZWJraXRFeGl0RnVsbHNjcmVlbicsXG5cdFx0J3dlYmtpdEZ1bGxzY3JlZW5FbGVtZW50Jyxcblx0XHQnd2Via2l0RnVsbHNjcmVlbkVuYWJsZWQnLFxuXHRcdCd3ZWJraXRmdWxsc2NyZWVuY2hhbmdlJyxcblx0XHQnd2Via2l0ZnVsbHNjcmVlbmVycm9yJ1xuXHRdLFxuXHQvLyBPbGQgV2ViS2l0IChTYWZhcmkgNS4xKVxuXHRbXG5cdFx0J3dlYmtpdFJlcXVlc3RGdWxsU2NyZWVuJyxcblx0XHQnd2Via2l0Q2FuY2VsRnVsbFNjcmVlbicsXG5cdFx0J3dlYmtpdEN1cnJlbnRGdWxsU2NyZWVuRWxlbWVudCcsXG5cdFx0J3dlYmtpdENhbmNlbEZ1bGxTY3JlZW4nLFxuXHRcdCd3ZWJraXRmdWxsc2NyZWVuY2hhbmdlJyxcblx0XHQnd2Via2l0ZnVsbHNjcmVlbmVycm9yJ1xuXHRdLFxuXHQvLyBNb3ppbGxhXG5cdFtcblx0XHQnbW96UmVxdWVzdEZ1bGxTY3JlZW4nLFxuXHRcdCdtb3pDYW5jZWxGdWxsU2NyZWVuJyxcblx0XHQnbW96RnVsbFNjcmVlbkVsZW1lbnQnLFxuXHRcdCdtb3pGdWxsU2NyZWVuRW5hYmxlZCcsXG5cdFx0J21vemZ1bGxzY3JlZW5jaGFuZ2UnLFxuXHRcdCdtb3pmdWxsc2NyZWVuZXJyb3InXG5cdF0sXG5cdC8vIE1pY3Jvc29mdFxuXHRbXG5cdFx0J21zUmVxdWVzdEZ1bGxzY3JlZW4nLFxuXHRcdCdtc0V4aXRGdWxsc2NyZWVuJyxcblx0XHQnbXNGdWxsc2NyZWVuRWxlbWVudCcsXG5cdFx0J21zRnVsbHNjcmVlbkVuYWJsZWQnLFxuXHRcdCdNU0Z1bGxzY3JlZW5DaGFuZ2UnLFxuXHRcdCdNU0Z1bGxzY3JlZW5FcnJvcidcblx0XVxuXTtcblxuXG5sZXQgc3BlY0FwaSA9IGFwaU1hcFswXTtcblxubGV0IGJyb3dzZXJBcGk7XG5cbi8vIGRldGVybWluZSB0aGUgc3VwcG9ydGVkIHNldCBvZiBmdW5jdGlvbnNcbmZvciAobGV0IGkgPSAwOyBpIDwgYXBpTWFwLmxlbmd0aDsgaSsrKSB7XG5cdC8vIGNoZWNrIGZvciBleGl0RnVsbHNjcmVlbiBmdW5jdGlvblxuXHRpZiAoYXBpTWFwW2ldWzFdIGluIGRvY3VtZW50KSB7XG5cdFx0YnJvd3NlckFwaSA9IGFwaU1hcFtpXTtcblx0XHRicmVhaztcblx0fVxufVxuXG4vLyBtYXAgdGhlIGJyb3dzZXIgQVBJIG5hbWVzIHRvIHRoZSBzcGVjIEFQSSBuYW1lc1xuaWYgKGJyb3dzZXJBcGkpIHtcblx0Zm9yIChsZXQgaT0wOyBpPGJyb3dzZXJBcGkubGVuZ3RoOyBpKyspIHtcblx0XHRGdWxsc2NyZWVuQXBpW3NwZWNBcGlbaV1dID0gYnJvd3NlckFwaVtpXTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBGdWxsc2NyZWVuQXBpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL0Z1bGxzY3JlZW5BcGkuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIGNvb2tpZS1jb250cm9sLmpzXG4gKlxuICogQGNsYXMgQ29va2llXG4gKi9cbmNsYXNzIENvb2tpZSB7XG5cdC8qKlxuXHQgKiBAcHVibGljXG5cdCAqXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIE5hbWUgb2YgY29va2llXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBbZGZsdF0gUmV0dXJuIGRlZmF1bHQgdmFsdWUgaWYgdGhpcyBmaWVsZCBpcyBlbXB0eVxuXHQgKlxuXHQgKi9cblx0c3RhdGljIGdldCAobmFtZSwgZGZsdCkge1xuXHRcdGxldCBjb29raWVzID0gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7Jyk7XG5cdFx0Zm9yIChsZXQgaSBpbiBjb29raWVzKSB7XG5cdFx0XHR2YXIgZCA9IGNvb2tpZXNbIGkgXS50cmltKCkuc3BsaXQoJz0nKTtcblx0XHRcdGlmIChkWyAwIF0gPT09ICdsZXBsYXllcl8nICsgbmFtZSlcblx0XHRcdFx0cmV0dXJuIGRbIDEgXTtcblx0XHR9XG5cdFx0cmV0dXJuIGRmbHQ7XG5cdH1cblxuXHQvKipcblx0ICogQHB1YmxpY1xuXHQgKlxuXHQgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBLZXlcblx0ICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIFZhbHVlXG5cdCAqL1xuXHRzdGF0aWMgc2V0IChuYW1lLCB2YWx1ZSkge1xuXHRcdHZhciBkID0gbmV3IERhdGUoKTtcblx0XHRkLnNldERhdGUoZC55ZWFyICsgMSk7XG5cdFx0ZG9jdW1lbnQuY29va2llID0gJ2xlcGxheWVyXycgKyBuYW1lICsgJz0nICsgdmFsdWUgKyAnO2V4cGlyZXM9JyArIGQudG9TdHJpbmcoKTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb29raWU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvdXRpbHMvY29va2llLmpzIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuY2xhc3MgTWVkaWFFcnJvciB7XG5cdGNvbnN0cnVjdG9yKHZhbHVlKSB7XG5cdFx0aWYodmFsdWUgaW5zdGFuY2VvZiBNZWRpYUVycm9yKSB7XG5cdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG5cdFx0XHR0aGlzLmNvZGUgPSB2YWx1ZTtcblx0XHR9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcblx0XHQvLyBkZWZhdWx0IGNvZGUgaXMgemVybywgc28gdGhpcyBpcyBhIGN1c3RvbSBlcnJvclxuXHRcdFx0dGhpcy5tZXNzYWdlID0gdmFsdWU7XG5cdFx0fSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG5cblx0XHRcdC8vIFdlIGFzc2lnbiB0aGUgYGNvZGVgIHByb3BlcnR5IG1hbnVhbGx5IGJlY2F1c2UgbmF0aXZlIE1lZGlhRXJyb3Igb2JqZWN0c1xuXHRcdFx0Ly8gZG8gbm90IGV4cG9zZSBpdCBhcyBhbiBvd24vZW51bWVyYWJsZSBwcm9wZXJ0eSBvZiB0aGUgb2JqZWN0LlxuXHRcdFx0aWYgKHR5cGVvZiB2YWx1ZS5jb2RlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHR0aGlzLmNvZGUgPSB2YWx1ZS5jb2RlO1xuXHRcdFx0fVxuXG5cdFx0XHQkLmV4dGVuZCh0aGlzLCB2YWx1ZSk7XG5cdFx0fVxuXG5cdFx0aWYgKCF0aGlzLm1lc3NhZ2UpIHtcblx0XHRcdHRoaXMubWVzc2FnZSA9IE1lZGlhRXJyb3IuZGVmYXVsdE1lc3NhZ2VzW3RoaXMuY29kZV0gfHwgJyc7XG5cdFx0fVxuXHR9XG59XG5cbk1lZGlhRXJyb3IucHJvdG90eXBlLmNvZGUgPSAwO1xuXG5NZWRpYUVycm9yLnByb3RvdHlwZS5tZXNzYWdlID0gJyc7XG5cbk1lZGlhRXJyb3IuZXJyb3JUeXBlcyA9IFtcblx0J01FRElBX0VSUl9DVVNUT00nLFxuXHQnTUVESUFfRVJSX0FCT1JURUQnLFxuXHQnTUVESUFfRVJSX05FVFdPUksnLFxuXHQnTUVESUFfRVJSX0RFQ09ERScsXG5cdCdNRURJQV9FUlJfU1JDX05PVF9TVVBQT1JURUQnLFxuXHQnTUVESUFfRVJSX0VOQ1JZUFRFRCdcbl07XG5cblxuTWVkaWFFcnJvci5kZWZhdWx0TWVzc2FnZXMgPSB7XG5cdDEgOiAn0JLRiyDQv9GA0LXRgNCy0LDQu9C4INC30LDQs9GA0YPQt9C60YMg0LLQuNC00LXQvi4nLFxuXHQyIDogJ9CX0LDQs9GA0YPQt9C60LAg0LLQuNC00LXQviDQv9GA0LXRgNCy0LDQvdCwINC40Lct0LfQsCDQv9C+0YLQtdGA0Lgg0YHQvtC10LTQuNC90LXQvdC40Y8uJyxcblx0MyA6ICfQl9Cw0LPRgNGD0LfQutCwINCy0LjQtNC10L4g0L7RgdGC0LDQvdC+0LLQu9C10L3QsCDQuNC3LdC30LAg0L/RgNC+0LHQu9C10Lwg0YEg0LLQuNC00LXQvtGE0LDQudC70L7QvCDQuNC70Lgg0LjQty3Qt9CwINGC0L7Qs9C+LCDRh9GC0L4g0LLQsNGIINCx0YDQsNGD0LfQtdGAINC90LUg0L/QvtC00LTQtdGA0LbQuNCy0LDQtdGCINCy0L7RgdC/0YDQvtC40LfQstC10LTQtdC90LjQtSDQtNCw0L3QvdC+0LPQviDRhNCw0LnQu9CwLicsXG5cdDQgOiAn0JLQuNC00LXQviDQvdC1INC80L7QttC10YIg0LHRi9GC0Ywg0LfQsNCz0YDRg9C20LXQvdC+INC40Lct0LfQsCDQv9GA0L7QsdC70LXQvCDRgSDQuNC90YLQtdGA0L3QtdGCLdGB0L7QtdC00LjQvdC10L3QuNC10Lwg0LjQu9C4INC/0YDQvtCx0LvQtdC8INC90LAg0YHQtdGA0LLQtdGA0LUuINCY0LvQuCDRhNC+0YDQvNCw0YIg0YTQsNC50LvQsCDQvdC1INC/0L7QtNC00LXRgNC20LjQstCw0LXRgtGB0Y8g0LLQsNGI0LjQvCDQsdGA0LDRg9C30LXRgNC+0LwuJyxcblx0NSA6ICfQktC40LTQtdC+INC30LDRiNC40YTRgNC+0LLQsNC90L4sINC4INC80Ysg0L3QtSDQvNC+0LbQtdC8INC10LPQviDRgNCw0YHRiNC40YTRgNC+0LLQsNGC0YwuJ1xufTtcblxuLy8gQWRkIHR5cGVzIGFzIHByb3BlcnRpZXMgb24gTWVkaWFFcnJvclxuLy8gZS5nLiBNZWRpYUVycm9yLk1FRElBX0VSUl9TUkNfTk9UX1NVUFBPUlRFRCA9IDQ7XG5mb3IgKGxldCBlcnJOdW0gPSAwOyBlcnJOdW0gPCBNZWRpYUVycm9yLmVycm9yVHlwZXMubGVuZ3RoOyBlcnJOdW0rKykge1xuXHRNZWRpYUVycm9yW01lZGlhRXJyb3IuZXJyb3JUeXBlc1tlcnJOdW1dXSA9IGVyck51bTtcblx0Ly8gdmFsdWVzIHNob3VsZCBiZSBhY2Nlc3NpYmxlIG9uIGJvdGggdGhlIGNsYXNzIGFuZCBpbnN0YW5jZVxuXHRNZWRpYUVycm9yLnByb3RvdHlwZVtNZWRpYUVycm9yLmVycm9yVHlwZXNbZXJyTnVtXV0gPSBlcnJOdW07XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lZGlhRXJyb3I7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvTWVkaWFFcnJvci5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgUGxheUNvbnRyb2wuanNcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL0NvbnRyb2wnO1xuXG4vKipcbiAqIEBjbGFzcyBQbGF5Q29udHJvbFxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQGV4dGVuZHMgQ29udHJvbFxuICovXG5jbGFzcyBQbGF5Q29udHJvbCBleHRlbmRzIENvbnRyb2wge1xuXHRjb25zdHJ1Y3RvciAocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRpY29uTmFtZSA6ICdwbGF5Jyxcblx0XHRcdHRpdGxlIDogJ9CS0L7RgdC/0YDQvtC40LfQstC10YHRgtC4INCy0LjQtNC10L4nLFxuXHRcdFx0Y2xhc3NOYW1lIDogJ3BsYXknLFxuXHRcdFx0bmFtZSA6ICdwbGF5J1xuXHRcdH0sIG9wdGlvbnMpO1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cblx0XHR0aGlzLnBsYXllci5vbihcblx0XHRcdGBwbGF5IHBsYXlpbmcgcGF1c2UgZW5kZWQgc2Vla2luZyBsb2Fkc3RhcnRgLFxuXHRcdFx0dGhpcy51cGRhdGUuYmluZCh0aGlzKVxuXHRcdClcblx0fVxuXG5cblx0LyoqXG5cdCAqIFBhdXNlIHRoZSB2aWRlb1xuXHQgKi9cblx0c2hvd1BsYXkgKCkge1xuXHRcdGlmKHRoaXMuaWNvbi5pY29uTmFtZSA9PT0gJ3BsYXknKSByZXR1cm47XG5cdFx0dGhpcy5pY29uLmljb25OYW1lID0gJ3BsYXknO1xuXHRcdHRoaXMuZWxlbWVudC5hdHRyKCd0aXRsZScsIHRoaXMub3B0aW9ucy50aXRsZSk7XG5cdH1cblxuXHQvKipcblx0ICogUGxheSB0aGUgdmlkZW9cblx0ICovXG5cdHNob3dQYXVzZSAoKSB7XG5cdFx0aWYodGhpcy5pY29uLmljb25OYW1lID09PSAncGF1c2UnKSByZXR1cm47XG5cdFx0dGhpcy5pY29uLmljb25OYW1lID0gJ3BhdXNlJztcblx0XHR0aGlzLmVsZW1lbnQuYXR0cigndGl0bGUnLCAn0J/QvtGB0YLQsNCy0LjRgtGMINC90LAg0L/QsNGD0LfRgycpO1xuXHR9XG5cblx0dXBkYXRlKCkge1xuXHRcdGlmICh0aGlzLnBsYXllci5lbmRlZCkge1xuXHRcdFx0dGhpcy5zaG93UmVwbGF5KCk7XG5cdFx0fSBlbHNlIGlmKHRoaXMucGxheWVyLnBhdXNlZCkge1xuXHRcdFx0dGhpcy5zaG93UGxheSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnNob3dQYXVzZSgpO1xuXHRcdH1cblx0fVxuXG5cdHNob3dSZXBsYXkoKSB7XG5cdFx0aWYodGhpcy5pY29uLmljb25OYW1lID09PSAncmVmcmVzaCcpIHJldHVybjtcblx0XHRpZih0aGlzLnBsYXllci5kdXJhdGlvbiAhPT0gSW5maW5pdHkpIHtcblx0XHRcdHRoaXMuX3JlcGxheSA9IHRydWU7XG5cdFx0XHR0aGlzLmljb24uaWNvbk5hbWUgPSAncmVmcmVzaCc7XG5cdFx0XHR0aGlzLmVsZW1lbnQuYXR0cigndGl0bGUnLCAn0JfQsNC/0YPRgdGC0LjRgtGMINC30LDQvdC+0LLQvicpXG5cdFx0fVxuXHR9XG5cblx0cmVtb3ZlUmVwbGF5KCkge1xuXHRcdGlmKCF0aGlzLl9yZXBsYXkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy5fcmVwbGF5ID0gZmFsc2U7XG5cblx0XHRpZih0aGlzLnBsYXllci52aWRlby5wYXVzZWQpIHtcblx0XHRcdHRoaXMuc2hvd1BsYXkoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zaG93UGF1c2UoKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRvbkNsaWNrKGUpIHtcblx0XHR0aGlzLnBsYXllci52aWRlby50b2dnbGVQbGF5KCk7XG5cdH1cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdQbGF5Q29udHJvbCcsIFBsYXlDb250cm9sKTtcbkNvbnRyb2wucmVnaXN0ZXJDb250cm9sKCdwbGF5JywgUGxheUNvbnRyb2wpO1xuZXhwb3J0IGRlZmF1bHQgUGxheUNvbnRyb2w7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9QbGF5Q29udHJvbC5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgVm9sdW1lQ29udHJvbC5qc1xuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCBDb250cm9sIGZyb20gJy4vQ29udHJvbCc7XG5pbXBvcnQgQ29udHJvbERyb3Bkb3duIGZyb20gJy4vQ29udHJvbERyb3Bkb3duJztcbmltcG9ydCB7IElTX0FORFJPSURfUEhPTkUgfSBmcm9tICcuLi91dGlscy9icm93c2VyJztcblxuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBjbGFzcyBWb2x1bWVDb250cm9sXG4gKiBAZXh0ZW5kcyBDb250cm9sRHJvcGRvd25cbiAqL1xuY2xhc3MgVm9sdW1lQ29udHJvbCBleHRlbmRzIENvbnRyb2xEcm9wZG93biB7XG5cblx0Y29uc3RydWN0b3IgKHBsYXllciwgb3B0aW9ucz17fSkge1xuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0aWNvbk5hbWUgOiAndm9sdW1lLWRvd24nLFxuXHRcdFx0Y2xhc3NOYW1lIDogJ3ZvbHVtZS1jb250cm9sJyxcblx0XHRcdG5hbWUgOiAndm9sdW1lJ1xuXHRcdH0sIG9wdGlvbnMpO1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cblx0XHRpZighcGxheWVyLnZpZGVvLmZlYXR1cmVDb250cm9sVm9sdW1lIHx8IElTX0FORFJPSURfUEhPTkUpIHtcblx0XHRcdHRoaXMuZWxlbWVudC5oaWRlKCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ3ZvbHVtZWNoYW5nZScsIChlLCBkYXRhKSA9PiB7XG5cdFx0XHRjb25zdCB2aWRlbyA9IHRoaXMucGxheWVyLnZpZGVvO1xuXHRcdFx0dGhpcy52YWx1ZSA9IHZpZGVvLm11dGVkID8gMCA6IHZpZGVvLnZvbHVtZTtcblx0XHR9KVxuXHR9XG5cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHRzdXBlci5jcmVhdGVFbGVtZW50KCk7XG5cdFx0bGV0IGRyYWcgPSBmYWxzZTtcblx0XHRjb25zdCB2aWRlbyA9IHRoaXMucGxheWVyLnZpZGVvO1xuXG5cdFx0dGhpcy5tYXJrZXIgPSAkKCc8ZGl2Lz4nKS5hZGRDbGFzcygndm9sdW1lLW1hcmtlcicpO1xuXG5cdFx0dGhpcy5hY3RpdmUgPSAkKCc8ZGl2Lz4nKS5hZGRDbGFzcygndm9sdW1lLWFjdGl2ZScpO1xuXG5cdFx0dGhpcy5saW5lID0gJCgnPGRpdi8+Jylcblx0XHRcdC5hZGRDbGFzcygndm9sdW1lLWxpbmUnKVxuXHRcdFx0LmFwcGVuZCh0aGlzLmFjdGl2ZSlcblx0XHRcdC5hcHBlbmQodGhpcy5tYXJrZXIpXG5cdFx0XHQub24oJ2NsaWNrJywgKGUpID0+IHtcblx0XHRcdFx0aWYgKGRyYWcpIHJldHVybjtcblx0XHRcdFx0bGV0IHAgPSB0aGlzLmdldFBvc2l0aW9uKGUucGFnZVkpO1xuXHRcdFx0XHRpZiAocCA+PSAwICYmIHAgPD0gMSkge1xuXHRcdFx0XHRcdGlmKHZpZGVvLm11dGVkKSB7XG5cdFx0XHRcdFx0XHR2aWRlby5tdXRlZCA9IGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR2aWRlby52b2x1bWUgPSAxIC0gcDtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHR0aGlzLmRyb3Bkb3duQ29udGVudFxuXHRcdFx0LmFkZENsYXNzKCd2b2x1bWUtc2xpZGVyJylcblx0XHRcdC5hcHBlbmQodGhpcy5saW5lKTtcblxuXHRcdHRoaXMuaWNvbi5lbGVtZW50LmF0dHIoJ3RpdGxlJywgJ9Ce0YLQutC70Y7Rh9C40YLRjCDQt9Cy0YPQuicpO1xuXG5cdFx0dGhpcy5tYXJrZXIub24oJ21vdXNlZG93bicsIChlKSA9PiB7XG5cdFx0XHRpZiAoZS53aGljaCAhPT0gMSkgcmV0dXJuO1xuXHRcdFx0ZHJhZyA9IHRydWU7XG5cdFx0fSk7XG5cblx0XHQkKGRvY3VtZW50KS5vbih7XG5cdFx0XHRtb3VzZW1vdmUgOiAoZSkgPT4ge1xuXHRcdFx0XHRpZiAoIWRyYWcpIHJldHVybjtcblx0XHRcdFx0bGV0IHAgPSB0aGlzLmdldFBvc2l0aW9uKGUucGFnZVkpO1xuXHRcdFx0XHRpZiAocCA+PSAwICYmIHAgPD0gMSkge1xuXHRcdFx0XHRcdGlmKHZpZGVvLm11dGVkKSB7XG5cdFx0XHRcdFx0XHR2aWRlby5tdXRlZCA9IGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR2aWRlby52b2x1bWUgPSAxIC0gcFxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXG5cdFx0XHRtb3VzZXVwIDogKGUpID0+IHtcblx0XHRcdFx0ZHJhZyA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQ7XG5cdH1cblxuXG5cdHNldCB2YWx1ZSAodmFsdWUpIHtcblx0XHR0aGlzLmljb24uaWNvbk5hbWUgPSB0aGlzLnBsYXllci5jYWxjVm9sdW1lSWNvbih2YWx1ZSk7XG5cblx0XHRsZXQgcCA9IE1hdGgucm91bmQodmFsdWUgKiAxMDApLnRvU3RyaW5nKCkgKyAnJSc7XG5cdFx0dGhpcy5hY3RpdmUuY3NzKCdoZWlnaHQnLCBwKTtcblx0XHR0aGlzLm1hcmtlci5jc3MoJ2JvdHRvbScsIHApO1xuXHR9XG5cblx0dG9nZ2xlTXV0ZWQgKCkge1xuXHRcdGNvbnN0IHsgdmlkZW8gfSA9IHRoaXMucGxheWVyO1xuXG5cdFx0dmlkZW8ubXV0ZWQgPSAhdmlkZW8ubXV0ZWQ7XG5cdH1cblxuXHRnZXRQb3NpdGlvbiAoeSkge1xuXHRcdHJldHVybiAoeSAtIHRoaXMubGluZS5vZmZzZXQoKS50b3ApIC8gdGhpcy5saW5lLmhlaWdodCgpO1xuXHR9XG5cblx0b25DbGljayAoZSkge1xuXHRcdHN1cGVyLm9uQ2xpY2soZSk7XG5cdFx0dGhpcy50b2dnbGVNdXRlZCgpO1xuXHR9XG5cblx0b25QbGF5ZXJJbml0ZWQoKSB7XG5cdFx0aWYoIXRoaXMucGxheWVyLnZpZGVvLmZlYXR1cmVDb250cm9sVm9sdW1lKSB7XG5cdFx0XHR0aGlzLmVsZW1lbnQuaGlkZSgpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0aGlzLnZhbHVlID0gdGhpcy5wbGF5ZXIudmlkZW8uZGVmYXVsdFZvbHVtZTtcblx0fVxuXG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnVm9sdW1lQ29udHJvbCcsIFZvbHVtZUNvbnRyb2wpO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ3ZvbHVtZScsIFZvbHVtZUNvbnRyb2wpO1xuZXhwb3J0IGRlZmF1bHQgVm9sdW1lQ29udHJvbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL1ZvbHVtZUNvbnRyb2wuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIENvbnRyb2xEcm9wZG93bi5qc1xuICovXG5cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb250cm9sIGZyb20gJy4vQ29udHJvbCc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCB7IElTX01PQklMRSB9IGZyb20gJy4uL3V0aWxzL2Jyb3dzZXInO1xuXG4vKipcbiAqIEBjbGFzcyBDb250cm9sRHJvcGRvd25cbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEBwcm9wZXJ0eSB7alF1ZXJ5fSBkcm9wZG93bkNvbnRlbnQgQ29udGVudCBvZiBwb3B1cFxuICogQGV4dGVuZHMgQ29udHJvbFxuICovXG5jbGFzcyBDb250cm9sRHJvcGRvd24gZXh0ZW5kcyBDb250cm9sIHtcblxuXHRjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnM9e30pIHtcblx0XHRvcHRpb25zID0gJC5leHRlbmQoe30sIHtcblx0XHRcdHRhZyA6ICdkaXYnLFxuXHRcdH0sIG9wdGlvbnMpO1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cdFx0dGhpcy5fb3BlbmVkID0gZmFsc2U7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdtb3VzZWVudGVyJywgdGhpcy5vcGVuLmJpbmQodGhpcykpO1xuXHRcdHRoaXMuZWxlbWVudC5vbignbW91c2VsZWF2ZScsIHRoaXMuY2xvc2UuYmluZCh0aGlzKSk7XG5cdFx0aWYoSVNfTU9CSUxFKSB7XG5cdFx0XHR0aGlzLmVsZW1lbnQub24oJ3RhcCcsIHRoaXMudG9nZ2xlLmJpbmQodGhpcykpO1xuXHRcdFx0JChkb2N1bWVudCkub24oJ3RvdWNoZW5kIHRvdWNoc3RhcnQgY2xpY2snLCB0aGlzLm9uRG9jdW1lbnRFdmVudHMuYmluZCh0aGlzKSk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHRzdXBlci5jcmVhdGVFbGVtZW50KCk7XG5cdFx0dGhpcy5kcm9wZG93bkNvbnRlbnQgPSAkKCc8ZGl2IC8+JykuYWRkQ2xhc3MoJ2NvbnRyb2wtZHJvcGRvd25fX2NvbnRlbnQnKTtcblx0XHR0aGlzLmVsZW1lbnQuYXBwZW5kKHRoaXMuZHJvcGRvd25Db250ZW50KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGJ1aWxkQ1NTQ2xhc3MoKSB7XG5cdFx0cmV0dXJuIGBjb250cm9sLWRyb3Bkb3duICR7c3VwZXIuYnVpbGRDU1NDbGFzcygpfWBcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdG9uQ2xpY2soZSkge1xuXHRcdGlmKCQoZS50YXJnZXQpLmNsb3Nlc3QodGhpcy5kcm9wZG93bkNvbnRlbnQpLmxlbmd0aCA+IDApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRzdXBlci5vbkNsaWNrKGUpO1xuXHR9XG5cblx0dG9nZ2xlKCkge1xuXHRcdGlmKHRoaXMuZGlzYWJsZSkgdHJ1ZTtcblx0XHRpZih0aGlzLl9vcGVuZWQpIHtcblx0XHRcdHRoaXMuY2xvc2UoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5vcGVuKCk7XG5cdFx0fVxuXHR9XG5cblx0b3BlbigpIHtcblx0XHRpZih0aGlzLmRpc2FibGUpIHJldHVybjtcblx0XHR0aGlzLl9vcGVuZWQgPSB0cnVlO1xuXHRcdHRoaXMuZHJvcGRvd25Db250ZW50LnNob3coKTtcblx0fVxuXG5cdGNsb3NlKCkge1xuXHRcdGlmKHRoaXMuZGlzYWJsZSkgcmV0dXJuO1xuXHRcdHRoaXMuX29wZW5lZCA9IGZhbHNlO1xuXHRcdHRoaXMuZHJvcGRvd25Db250ZW50LmhpZGUoKTtcblx0fVxuXG5cdG9uRG9jdW1lbnRFdmVudHMoZSkge1xuXHRcdGlmKFxuXHRcdFx0ISgkKGUudGFyZ2V0KS5jbG9zZXN0KHRoaXMuZWxlbWVudCkubGVuZ3RoID4gMCkgJiZcblx0XHRcdCEoJChlLnRhcmdldCkuY2xvc2VzdCh0aGlzLmRyb3Bkb3duQ29udGVudCkubGVuZ3RoID4gMClcblx0XHQpIHtcblx0XHRcdGlmKHRoaXMuX29wZW5lZCl7XG5cdFx0XHRcdHRoaXMuY2xvc2UoKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ0NvbnRyb2xEcm9wZG93bicsIENvbnRyb2xEcm9wZG93bik7XG5Db250cm9sLnJlZ2lzdGVyQ29udHJvbCgnZHJvcGRvd24nLCBDb250cm9sRHJvcGRvd24pO1xuZXhwb3J0IGRlZmF1bHQgQ29udHJvbERyb3Bkb3duO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvQ29udHJvbERyb3Bkb3duLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBUaW1lbGluZUNvbnRyb2wuanNcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9Db21wb25lbnQnO1xuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi4vQ29udHJvbCc7XG5pbXBvcnQgQ29udHJvbFRleHQgZnJvbSAnLi4vQ29udHJvbFRleHQnO1xuaW1wb3J0IEJ1ZmZlcmVkUmFuZ2VzIGZyb20gJy4vQnVmZmVyZWRSYW5nZXMnO1xuaW1wb3J0IE1hcmtlciBmcm9tICcuL01hcmtlcic7XG5pbXBvcnQgeyBzZWNvbmRzVG9UaW1lIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBjbGFzcyBUaW1lbGluZUNvbnRyb2xcbiAqIEBwcm9wZXJ0eSB7Q29udHJvbFRleHR9IGN1cnJlbnRUaW1lIEN1cnJlbnQgdGltZSdzIHRleHRcbiAqIEBwcm9wZXJ0eSB7Q29udHJvbFRleHR9IHRvdGFsVGltZSBUb3RhbCB0aW1lXG4gKiBAcHJvcGVydHkge2pRdWVyeX0gbGluZVxuICogQGV4dGVuZHMgQ29udHJvbFxuICovXG5jbGFzcyBUaW1lbGluZUNvbnRyb2wgZXh0ZW5kcyBDb250cm9sIHtcblxuXHRjb25zdHJ1Y3RvciAocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRuYW1lIDogJ3RpbWVsaW5lJyxcblx0XHRcdGNsYXNzTmFtZSA6ICdjb250cm9sLXRpbWVsaW5lIHRpbWVsaW5lLWNvbnRhaW5lcicsXG5cdFx0XHR0YWcgOiAnZGl2Jyxcblx0XHR9LCBvcHRpb25zKTtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXG5cblx0XHR0aGlzLm1hcmtlci5lbGVtZW50Lm9uKCdsZXBsYXllcl9tb3VzZW1vdmUnLCB0aGlzLl9vbk1hcmtlck1vdXNlbW92ZS5iaW5kKHRoaXMpKTtcblxuXHRcdHRoaXMubWFya2VyLmVsZW1lbnQub24oJ2xlcGxheWVyX21vdXNlZG93bicsIHRoaXMuX29uTWFya2VyTW91c2Vkb3duLmJpbmQodGhpcykpO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ3NlY3Rpb25zaW5pdCcsIHRoaXMub25TZWN0aW9uc0luaXQuYmluZCh0aGlzKSk7XG5cblx0XHR0aGlzLnBsYXllci5vbigndGltZXVwZGF0ZScsIHRoaXMuX29uVGltZVVwZGF0ZS5iaW5kKHRoaXMpKTtcblxuXHRcdC8vIHRoaXMucGxheWVyLm9uKCd0aW1ldXBkYXRlbG9hZCcsIHRoaXMuX29uVGltZVVwZGF0ZS5iaW5kKHRoaXMpKVxuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ2R1cmF0aW9uY2hhbmdlJywgdGhpcy5fb25EdXJhdGlvbkNoYW5nZS5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdF9vbk1hcmtlck1vdXNlZG93bihlKSB7XG5cdFx0dGhpcy5tYXJrZXJTaGFkb3cuZWxlbWVudC5oaWRlKCk7XG5cdH1cblxuXHRfb25NYXJrZXJNb3VzZW1vdmUoZSwgZGF0YSkge1xuXHRcdGNvbnN0IHggPSBkYXRhLng7XG5cdFx0Y29uc3QgcCA9IHRoaXMuZ2V0UG9zaXRpb24oeCk7XG5cdFx0Y29uc3QgdmlkZW8gPSB0aGlzLnBsYXllci52aWRlbztcblx0XHRpZiAocCA+IDAgJiYgcCA8IDEpIHtcblx0XHRcdHRoaXMubWFya2VyLm1hcmtlclRpbWVcblx0XHRcdFx0LnNob3coKVxuXHRcdFx0XHQuaHRtbChzZWNvbmRzVG9UaW1lKHZpZGVvLmR1cmF0aW9uICogcCkpO1xuXHRcdFx0Ly8gdmlkZW8uY3VycmVudFRpbWUgPSB2aWRlby5kdXJhdGlvbiAqIHBcblx0XHR9XG5cdH1cblxuXHRfb25UaW1lVXBkYXRlKGUsIGRhdGEpIHtcblx0XHRjb25zdCBkdXJhdGlvbiA9IHRoaXMucGxheWVyLnZpZGVvLmR1cmF0aW9uO1xuXHRcdGxldCBjdXJyZW50VGltZSA9IHRoaXMucGxheWVyLmN1cnJlbnRUaW1lO1xuXHRcdGlmKGRhdGEgJiYgZGF0YS5jdXJyZW50VGltZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRjdXJyZW50VGltZSA9IGRhdGEuY3VycmVudFRpbWU7XG5cdFx0fVxuXHRcdGxldCBwZXJjZW50ID0gY3VycmVudFRpbWUgLyBkdXJhdGlvbjtcblxuXHRcdGlmKGlzTmFOKGR1cmF0aW9uKSAmJiBjdXJyZW50VGltZSA9PT0gMCkgcGVyY2VudCA9IDA7XG5cblx0XHR0aGlzLm1vdmUoeyBwZXJjZW50LCBjdXJyZW50VGltZSB9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0c3VwZXIuY3JlYXRlRWxlbWVudCgpO1xuXHRcdGxldCB2aWRlbyA9IHRoaXMucGxheWVyLnZpZGVvO1xuXG5cdFx0dGhpcy5kcmFnID0gZmFsc2U7XG5cblx0XHQvLyBDcmVhdGUgbGFiZWxzXG5cdFx0dGhpcy5jdXJyZW50VGltZSA9IG5ldyBDb250cm9sVGV4dCh0aGlzLnBsYXllciwgeyBjbGFzc05hbWUgOiAndGltZS1jdXJyZW50JyB9KTtcblx0XHR0aGlzLmN1cnJlbnRUaW1lLnRleHQgPSAnMDA6MDAnO1xuXHRcdHRoaXMudG90YWxUaW1lID0gbmV3IENvbnRyb2xUZXh0KHRoaXMucGxheWVyLCB7Y2xhc3NOYW1lIDogJ3RpbWUtdG90YWwnIH0pO1xuXG5cdFx0Ly8gQ3JlYXRlIGxpbmUgd2l0aCBtYXJrZXJzIGFuZCBwbGF5ZWQgcmFuZ2VcblxuXHRcdHRoaXMubWFya2VyID0gbmV3IE1hcmtlcih0aGlzLnBsYXllciwge1xuXHRcdFx0ZHJhZyA6IHRydWVcblx0XHR9KTtcblxuXHRcdHRoaXMubWFya2VyU2hhZG93ID0gbmV3IE1hcmtlcih0aGlzLnBsYXllciwge1xuXHRcdFx0Y2xhc3NOYW1lIDogJ3NoYWRvdydcblx0XHR9KTtcblx0XHR0aGlzLm1hcmtlclNoYWRvdy5lbGVtZW50LmhpZGUoKTtcblxuXG5cdFx0Ly8gUGxheWVkIHJhbmdlc1xuXHRcdHRoaXMucGxheWVkUmFuZ2VzID0gJCgnPGRpdiAvPicpLmFkZENsYXNzKCd0aW1lLXBsYXllZCcpO1xuXG5cblx0XHQvLyBCdWZmZXJlZCByYW5nZXNcblx0XHR0aGlzLmJ1ZmZlcmVkUmFuZ2VzID0gbmV3IEJ1ZmZlcmVkUmFuZ2VzKHRoaXMucGxheWVyKS5lbGVtZW50O1xuXG5cdFx0dGhpcy5saW5lID0gJCgnPGRpdiAvPicpO1xuXHRcdHRoaXMuZW1pdFRhcEV2ZW50cyh0aGlzLmxpbmUpXG5cblx0XHR0aGlzLmxpbmVcblx0XHRcdC5hZGRDbGFzcygndGltZWxpbmUnKVxuXHRcdFx0LmFwcGVuZCh0aGlzLm1hcmtlci5lbGVtZW50KVxuXHRcdFx0LmFwcGVuZCh0aGlzLm1hcmtlclNoYWRvdy5lbGVtZW50KVxuXHRcdFx0LmFwcGVuZCh0aGlzLnBsYXllZFJhbmdlcylcblx0XHRcdC5hcHBlbmQodGhpcy5idWZmZXJlZFJhbmdlcylcblx0XHRcdC5vbih7XG5cdFx0XHRcdG1vdXNlbW92ZSA6IChlKSA9PiB7XG5cdFx0XHRcdFx0aWYgKHRoaXMubWFya2VyLmRyYWcpIHJldHVybjtcblxuXHRcdFx0XHRcdGxldCBwID0gdGhpcy5nZXRQb3NpdGlvbihlLnBhZ2VYKTtcblx0XHRcdFx0XHRpZiAocCA+IDAgJiYgcCA8IDEpIHtcblx0XHRcdFx0XHRcdHRoaXMubWFya2VyU2hhZG93LmVsZW1lbnRcblx0XHRcdFx0XHRcdFx0LnNob3coKVxuXHRcdFx0XHRcdFx0XHQuY3NzKCdsZWZ0JywgcCAqIDEwMCArICclJyk7XG5cdFx0XHRcdFx0XHR0aGlzLm1hcmtlclNoYWRvd1xuXHRcdFx0XHRcdFx0XHQubWFya2VyVGltZVxuXHRcdFx0XHRcdFx0XHQuc2hvdygpXG5cdFx0XHRcdFx0XHRcdC5odG1sKHNlY29uZHNUb1RpbWUodmlkZW8uZHVyYXRpb24gKiBwKSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRoaXMubWFya2VyU2hhZG93LmVsZW1lbnQuaGlkZSgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblxuXHRcdFx0XHRtb3VzZWxlYXZlIDogKGUpID0+IHtcblx0XHRcdFx0XHRpZiAodGhpcy5kcmFnKSByZXR1cm47XG5cdFx0XHRcdFx0dGhpcy5tYXJrZXJTaGFkb3cuZWxlbWVudC5oaWRlKClcblx0XHRcdFx0fSxcblxuXHRcdFx0XHRtb3VzZWRvd24gOiAoZSkgPT4ge1xuXHRcdFx0XHR9LFxuXG5cdFx0XHRcdGNsaWNrIDogdGhpcy5fb25MaW5lQ2xpY2suYmluZCh0aGlzKSxcblx0XHRcdFx0dGFwIDogdGhpcy5fb25MaW5lQ2xpY2suYmluZCh0aGlzKSxcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5lbGVtZW50LmFkZENsYXNzKCd0aW1lbGluZS1jb250YWluZXInKVxuXHRcdFx0LmFwcGVuZCgkKCc8ZGl2IC8+Jylcblx0XHRcdFx0LmFkZENsYXNzKCd0aW1lbGluZS1zdWJjb250YWluZXInKVxuXHRcdFx0XHQuYXBwZW5kKHRoaXMuY3VycmVudFRpbWUuZWxlbWVudClcblx0XHRcdFx0LmFwcGVuZCh0aGlzLmxpbmUpXG5cdFx0XHRcdC5hcHBlbmQodGhpcy50b3RhbFRpbWUuZWxlbWVudCkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0b25DbGljayhlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHR9XG5cblx0X29uTGluZUNsaWNrKGUpIHtcblx0XHRpZiAodGhpcy5kcmFnKSByZXR1cm47XG5cdFx0Y29uc3QgdmlkZW8gPSB0aGlzLnBsYXllci52aWRlbztcblx0XHR0aGlzLm1vdmUoeyBwZXJjZW50IDogdGhpcy5nZXRQb3NpdGlvbihlLnBhZ2VYKX0pO1xuXHRcdHZpZGVvLmN1cnJlbnRUaW1lID0gKHZpZGVvLmR1cmF0aW9uICogdGhpcy5nZXRQb3NpdGlvbihlLnBhZ2VYKSk7XG5cdH1cblxuXHRvblNlY3Rpb25zSW5pdChlKSB7XG5cdFx0Y29uc3QgZHVyYXRpb24gPSB0aGlzLnBsYXllci52aWRlby5kdXJhdGlvbjtcblx0XHRpZihpc05hTihkdXJhdGlvbikpIHtcblx0XHRcdHJldHVyblxuXHRcdH1cblx0XHRpZiAodGhpcy5wbGF5ZXIuc2VjdGlvbnMpIHtcblx0XHRcdHRoaXMudXBkYXRlU2VjdGlvblJhbmdlcyh0aGlzLnBsYXllci5zZWN0aW9ucy5pdGVtcyk7XG5cdFx0fVxuXHR9XG5cblx0dXBkYXRlU2VjdGlvblJhbmdlcyhpdGVtcykge1xuXHRcdGlmKHRoaXMuc2VjdGlvbnMgPT0gbnVsbCB8fCB0aGlzLnNlY3Rpb25zLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0dGhpcy5zZWN0aW9ucyA9IHRoaXMuY3JlYXRlU2VjdGlvblJhbmdlcyhpdGVtcyk7XG5cdFx0XHR0aGlzLmxpbmUuYXBwZW5kKHRoaXMuc2VjdGlvbnMpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnNlY3Rpb25zLmh0bWwodGhpcy5jcmVhdGVTZWN0aW9uUmFuZ2VzKGl0ZW1zKSk7XG5cdFx0fVxuXHR9XG5cblx0Y3JlYXRlU2VjdGlvblJhbmdlcyhpdGVtcykge1xuXHRcdGNvbnN0IGR1cmF0aW9uID0gdGhpcy5wbGF5ZXIudmlkZW8uZHVyYXRpb247XG5cdFx0bGV0IHJlc3VsdCA9ICQoJzxkaXYgLz4nKS5hZGRDbGFzcygnbGVwbGF5ZXItdGltZWxpbmUtc2VjdGlvbnMnKTtcblx0XHRpdGVtcy5mb3JFYWNoKChzZWN0aW9uKSA9PiB7XG5cdFx0XHRjb25zdCBsZW5ndGggPSAoc2VjdGlvbi5lbmQgLSBzZWN0aW9uLmJlZ2luKTtcblx0XHRcdGNvbnN0IGl0ZW0gPSAkKCc8ZGl2IC8+Jylcblx0XHRcdFx0LmFkZENsYXNzKCdsZXBsYXllci10aW1lbGluZS1zZWN0aW9uJylcblx0XHRcdFx0LmNzcyh7XG5cdFx0XHRcdFx0d2lkdGggOiBsZW5ndGggLyBkdXJhdGlvbiAqIDEwMCArICclJyxcblx0XHRcdFx0XHRsZWZ0IDogc2VjdGlvbi5iZWdpbiAvIGR1cmF0aW9uICogMTAwICsgJyUnXG5cdFx0XHRcdH0pO1xuXHRcdFx0cmVzdWx0LmFwcGVuZChpdGVtKTtcblx0XHR9KVxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblxuXHRnZXRQb3NpdGlvbiAoeCkge1xuXHRcdHJldHVybiAoeCAtIHRoaXMubGluZS5vZmZzZXQoKS5sZWZ0KSAvIHRoaXMubGluZS53aWR0aCgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIE1vdmUgbWFya2VyIG9uIHRpbWVsaW5lIG9uIHBlcmNlbnQgZnJvbSBhcmd1bWVudCwgbm90IGZyb20gdmlkZW8uY3VycmVudFRpbWVcblx0ICogQHBhcmFtIHtOdW1iZXJ9IHBlcmNlbnQgVGhlIHBlcmNlbnQgd2hpY2ggeW91IHdhbnQgdG8gbW92ZSBtYXJrZXIgb24gdGltZWxpbmVcblx0ICovXG5cdG1vdmUgKHsgcGVyY2VudCwgY3VycmVudFRpbWUgfSkge1xuXHRcdGlmKGN1cnJlbnRUaW1lID09PSB1bmRlZmluZWQpIHtcblx0XHRcdGN1cnJlbnRUaW1lID0gdGhpcy5wbGF5ZXIudmlkZW8uZHVyYXRpb24gKiBwZXJjZW50O1xuXHRcdH1cblxuXHRcdGlmKGlzTmFOKGN1cnJlbnRUaW1lKSkgcmV0dXJuO1xuXHRcdHBlcmNlbnQgPSBwZXJjZW50ICogMTAwO1xuXHRcdHRoaXMubWFya2VyLmVsZW1lbnQuY3NzKCdsZWZ0JywgcGVyY2VudCArICclJyk7XG5cdFx0dGhpcy5wbGF5ZWRSYW5nZXMuY3NzKCd3aWR0aCcsIHBlcmNlbnQgKyAnJScpO1xuXHRcdHRoaXMuY3VycmVudFRpbWUudGV4dCA9IHNlY29uZHNUb1RpbWUoY3VycmVudFRpbWUpO1xuXHR9XG5cblx0dXBkYXRlTGFiZWxzKCkge1xuXHRcdGNvbnN0IHZpZGVvID0gdGhpcy5wbGF5ZXIudmlkZW87XG5cdFx0dGhpcy50b3RhbFRpbWUudGV4dCA9IHNlY29uZHNUb1RpbWUoMCwgTWF0aC5mbG9vcih2aWRlby5kdXJhdGlvbiAvIDM2MDApID4gMCk7XG5cblx0XHQvLyBjb25zdCB3aWR0aCA9IHRoaXMudG90YWxUaW1lLmVsZW1lbnQud2lkdGgoKTtcblxuXHRcdHRoaXMudG90YWxUaW1lLnRleHQgPSBzZWNvbmRzVG9UaW1lKHZpZGVvLmR1cmF0aW9uKTtcblx0XHR0aGlzLmN1cnJlbnRUaW1lLnRleHQgPSBzZWNvbmRzVG9UaW1lKHZpZGVvLmN1cnJlbnRUaW1lIHx8IDApO1xuXHRcdC8vIHRoaXMuY3VycmVudFRpbWUuZWxlbWVudC5jc3Moe1xuXHRcdC8vIFx0d2lkdGhcblx0XHQvLyB9KVxuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0b25QbGF5ZXJJbml0ZWQoZSkge1xuXHRcdHRoaXMudXBkYXRlTGFiZWxzKCk7XG5cdFx0aWYgKHRoaXMucGxheWVyLnNlY3Rpb25zKSB7XG5cdFx0XHR0aGlzLnVwZGF0ZVNlY3Rpb25SYW5nZXModGhpcy5wbGF5ZXIuc2VjdGlvbnMuaXRlbXMpO1xuXHRcdH1cblx0fVxuXG5cdF9pbml0V2F0Y2hCdWZmZXIgKCkge1xuXHRcdGNsZWFySW50ZXJ2YWwodGhpcy53YXRjaEJ1ZmZlckludGVydmFsKTtcblx0XHRsZXQgdmlkZW8gPSB0aGlzLnBsYXllci52aWRlbztcblx0XHRsZXQgdXBkYXRlUHJvZ3Jlc3NCYXIgPSAoKSA9PiB7XG5cdFx0XHRjb25zdCBFTkQgPSAxO1xuXHRcdFx0Y29uc3QgU1RBUlQgPSAwO1xuXHRcdFx0bGV0IHJlc3VsdCA9ICQoJycpO1xuXHRcdFx0dmlkZW8ubG9hZGVkLmZvckVhY2goaXRlbSA9PiB7XG5cdFx0XHRcdGxldCBkb21JdGVtID0gJCgnPGRpdiAvPicpLmFkZENsYXNzKCd0aW1lLWJ1ZmZlcmVkJyk7XG5cdFx0XHRcdGRvbUl0ZW0uY3NzKHtcblx0XHRcdFx0XHRsZWZ0IDogaXRlbVtTVEFSVF0gKiAxMDAgKyAnJScsXG5cdFx0XHRcdFx0d2lkdGggOiAoaXRlbVtFTkRdIC0gaXRlbVtTVEFSVF0pICogMTAwICsgJyUnXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRyZXN1bHQgPSByZXN1bHQuYWRkKGRvbUl0ZW0pO1xuXHRcdFx0fSk7XG5cdFx0XHR0aGlzLmJ1ZmZlcmVkLmh0bWwocmVzdWx0KTtcblx0XHRcdGlmICh2aWRlby5sb2FkZWQubGVuZ3RoICYmICgxIC0gdmlkZW8ubG9hZGVkU2l6ZSkgPD0gMC4wNSkge1xuXHRcdFx0XHRjbGVhckludGVydmFsKHRoaXMud2F0Y2hCdWZmZXJJbnRlcnZhbCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHRoaXMud2F0Y2hCdWZmZXJJbnRlcnZhbCA9IHNldEludGVydmFsKHVwZGF0ZVByb2dyZXNzQmFyLCA1MDApO1xuXHR9XG5cblx0LyoqXG5cdCAqIE9uIGR1cmF0aW9uY2hhbmdlIGV2ZW50IGhhbmRsZXJcblx0ICovXG5cdF9vbkR1cmF0aW9uQ2hhbmdlICgpIHtcblx0XHR0aGlzLnVwZGF0ZUxhYmVscygpO1xuXHRcdGlmICh0aGlzLnBsYXllci5zZWN0aW9ucykge1xuXHRcdFx0dGhpcy51cGRhdGVTZWN0aW9uUmFuZ2VzKHRoaXMucGxheWVyLnNlY3Rpb25zLml0ZW1zKTtcblx0XHR9XG5cdH1cblxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ1RpbWVsaW5lQ29udHJvbCcsIFRpbWVsaW5lQ29udHJvbCk7XG5Db250cm9sLnJlZ2lzdGVyQ29udHJvbCgndGltZWxpbmUnLCBUaW1lbGluZUNvbnRyb2wpO1xuZXhwb3J0IGRlZmF1bHQgVGltZWxpbmVDb250cm9sO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvVGltZWxpbmUvVGltZWxpbmVDb250cm9sLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBDb250cm9sVGV4dC5qc1xuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL0NvbnRyb2wnO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5cbi8qKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQGNsYXNzIENvbnRyb2xUZXh0XG4gKiBAZXhudGVkcyBDb250cm9sXG4gKi9cbmNsYXNzIENvbnRyb2xUZXh0IGV4dGVuZHMgQ29udHJvbCB7XG5cdGNvbnN0cnVjdG9yIChwbGF5ZXIsIG9wdGlvbnM9e30pIHtcblx0XHRvcHRpb25zID0gJC5leHRlbmQoe30sIHtcblx0XHRcdGNsYXNzTmFtZSA6ICcnLFxuXHRcdFx0dGFnIDogJ2RpdicsXG5cdFx0fSwgb3B0aW9ucyk7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0c3VwZXIuY3JlYXRlRWxlbWVudCgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0YnVpbGRDU1NDbGFzcygpIHtcblx0XHRyZXR1cm4gYGNvbnRyb2wtdGV4dCAke3RoaXMub3B0aW9ucy5jbGFzc05hbWV9YDtcblx0fVxuXG5cblx0LyoqXG5cdCAqIFNldHRlciBvZiB0ZXh0IGZpZWxkXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG5cdCAqL1xuXG5cdHNldCB0ZXh0ICh2YWx1ZSkge1xuXHRcdHRoaXMuX3RleHQgPSB2YWx1ZTtcblx0XHR0aGlzLmVsZW1lbnQuaHRtbCh2YWx1ZSk7XG5cdH1cblxuXHRnZXQgdGV4dCAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3RleHRcblx0fVxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ0NvbnRyb2xUZXh0JywgQ29udHJvbFRleHQpO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ3RleHQnLCBDb250cm9sVGV4dCk7XG5leHBvcnQgZGVmYXVsdCBDb250cm9sVGV4dDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL0NvbnRyb2xUZXh0LmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBCdWZmZXJlZFJhbmdlcy5qc1xuICovXG5cbmltcG9ydCB7IHBlcmNlbnRpZnksIGNyZWF0ZUVsIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9Db21wb25lbnQnO1xuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBjbGFzcyBCdWZmZXJlZFJhbmdlc1xuICogQGV4dGVuZHMgQ29udHJvbFxuICovXG5cbmNsYXNzIEJ1ZmZlcmVkUmFuZ2VzIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ3Byb2dyZXNzJywgdGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5wbGF5ZXIub24oJ3NlZWtlZCcsIHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xuXHRcdHRoaXMucGxheWVyLm9uKCdsb2Fkc3RhcnQnLCB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0dGhpcy5yYW5nZSA9IGNyZWF0ZUVsKCdkaXYnLCB7XG5cdFx0XHRjbGFzc05hbWUgOiAnbGVwbGF5ZXItdGltZWxpbmUtYnVmZmVyZWRfX3JhbmdlJ1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudCA9IGNyZWF0ZUVsKCdkaXYnLCB7XG5cdFx0XHRjbGFzc05hbWUgOiAnbGVwbGF5ZXItdGltZWxpbmUtYnVmZmVyZWQnXG5cdFx0fSkuYXBwZW5kKHRoaXMucmFuZ2UpO1xuXHR9XG5cblxuXHR1cGRhdGUoKSB7XG5cdFx0Y29uc3QgYnVmZmVyZWQgPSB0aGlzLnBsYXllci52aWRlby5idWZmZXJlZDtcblx0XHRjb25zdCBkdXJhdGlvbiA9IHRoaXMucGxheWVyLnZpZGVvLmR1cmF0aW9uO1xuXHRcdGlmKGJ1ZmZlcmVkID09IG51bGwpIHJldHVybjtcblxuXHRcdGxldCBlbmQgPSAwO1xuXHRcdGlmIChidWZmZXJlZC5sZW5ndGggPiAwKSB7XG5cdFx0XHRlbmQgPSBidWZmZXJlZC5lbmQoYnVmZmVyZWQubGVuZ3RoIC0gMSk7XG5cdFx0fVxuXG5cdFx0bGV0IHdpZHRoID0gMDtcblx0XHRpZiAoZHVyYXRpb24gPiAwKSB7XG5cdFx0XHR3aWR0aCA9IHBlcmNlbnRpZnkoZW5kLCBkdXJhdGlvbikgKiAxMDAgKyAnJSdcblx0XHR9XG5cdFx0dGhpcy5yYW5nZS5jc3MoeyB3aWR0aCB9KVxuXHR9XG59XG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ0J1ZmZlcmVkUmFuZ2VzJywgQnVmZmVyZWRSYW5nZXMpO1xuZXhwb3J0IGRlZmF1bHQgQnVmZmVyZWRSYW5nZXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9UaW1lbGluZS9CdWZmZXJlZFJhbmdlcy5qcyIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL0NvbXBvbmVudCc7XG5cbmNsYXNzIE1hcmtlciBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucykge1xuXG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRkcmFnIDogZmFsc2UsXG5cdFx0XHRjbGFzc05hbWUgOiAnJ1xuXHRcdH0sIG9wdGlvbnMpO1xuXG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ21vdXNlZG93bicsIHRoaXMuX29uTW91c2Vkb3duLmJpbmQodGhpcykpO1xuXG5cdFx0JChkb2N1bWVudCkub24oe1xuXG5cdFx0XHRtb3VzZW1vdmUgOiAoZSkgPT4ge1xuXHRcdFx0XHRpZiAoIXRoaXMuZHJhZykgcmV0dXJuO1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQudHJpZ2dlcignbGVwbGF5ZXJfbW91c2Vtb3ZlJywgeyB4IDogZS5wYWdlWCB9KTtcblx0XHRcdH0sXG5cblx0XHRcdG1vdXNldXAgOiAoZSkgPT4ge1xuXHRcdFx0XHRpZiAoIXRoaXMuZHJhZykgcmV0dXJuO1xuXHRcdFx0XHR0aGlzLmRyYWcgPSBmYWxzZTtcblx0XHRcdFx0dGhpcy5tYXJrZXJUaW1lLmhpZGUoKTtcblx0XHRcdFx0dGhpcy5lbGVtZW50LnRyaWdnZXIoJ2xlcGxheWVyX21vdXNldXAnLCB7IHggOiBlLnBhZ2VYIH0pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0c2V0IGRyYWcodmFsdWUpIHtcblx0XHR0aGlzLl9kcmFnID0gdmFsdWU7XG5cdFx0dGhpcy5lbGVtZW50LnRvZ2dsZUNsYXNzKCd0aW1lLW1hcmtlci0tZHJhZycsIHZhbHVlKTtcblx0fVxuXG5cdGdldCBkcmFnKCkge1xuXHRcdHJldHVybiB0aGlzLl9kcmFnO1xuXHR9XG5cblx0X29uTW91c2Vkb3duKGUpIHtcblx0XHRpZiAoZS53aGljaCAhPT0gMSkgcmV0dXJuO1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRpZih0aGlzLm9wdGlvbnMuZHJhZykge1xuXHRcdFx0dGhpcy5kcmFnID0gdHJ1ZTtcblx0XHR9XG5cdFx0dGhpcy5lbGVtZW50LnRyaWdnZXIoJ2xlcGxheWVyX21vdXNlZG93bicpO1xuXHR9XG5cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHQvLyBNYXJrZXIgb2YgY3VycmVudCB0aW1lIG9uIHRpbWVsaW5lXG5cdFx0dGhpcy5tYXJrZXJUaW1lID0gJCgnPGRpdiAvPicpXG5cdFx0XHQuYWRkQ2xhc3MoJ3RpbWUnKVxuXHRcdFx0LmhpZGUoKTtcblxuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQgPSAkKCc8ZGl2IC8+Jylcblx0XHRcdC5hZGRDbGFzcyhgdGltZS1tYXJrZXIgJHt0aGlzLm9wdGlvbnMuY2xhc3NOYW1lfWApXG5cdFx0XHQuYXBwZW5kKHRoaXMubWFya2VyVGltZSlcblxuXHR9XG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnTWFya2VyJywgTWFya2VyKTtcbmV4cG9ydCBkZWZhdWx0IE1hcmtlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL1RpbWVsaW5lL01hcmtlci5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgU2VjdGlvbkNvbnRyb2wuanNcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL0NvbnRyb2wnO1xuaW1wb3J0IENvbnRyb2xDaGVja2JveCBmcm9tICcuL0NvbnRyb2xDaGVja2JveCc7XG5cbi8qKlxuICogQGNsYXNzIFNlY3Rpb25Db250cm9sXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmNoZWNrZWQ9dHJ1ZV1cbiAqIEBleHRlbmRzIENvbnRyb2xDaGVja2JveFxuICovXG5jbGFzcyBTZWN0aW9uQ29udHJvbCBleHRlbmRzIENvbnRyb2xDaGVja2JveCB7XG5cdGNvbnN0cnVjdG9yIChwbGF5ZXIsIG9wdGlvbnM9e30pIHtcblx0XHRvcHRpb25zID0gJC5leHRlbmQoe30sIHtcblx0XHRcdGljb25OYW1lIDogJ2xpc3QtdWwnLFxuXHRcdFx0Y2xhc3NOYW1lIDogJ3NlY3Rpb24nLFxuXHRcdFx0bmFtZSA6ICdzZWN0aW9uJyxcblx0XHRcdHRpdGxlIDogJ9Cf0L7QutCw0LfQsNGC0Ywv0YHQutGA0YvRgtGMINGB0LXQutGG0LjQuCcsXG5cdFx0XHRkaXNhYmxlIDogdHJ1ZVxuXHRcdH0sIG9wdGlvbnMpO1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cblx0XHR0aGlzLnBsYXllci5vbignc2VjdGlvbnNpbml0JywgdGhpcy5fb25TZWN0aW9uc0luaXQuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5wbGF5ZXIub24oJ3NlY3Rpb25zdG9nZ2xlJywgdGhpcy5fb25TZWN0aW9uVG9nZ2xlLmJpbmQodGhpcykpXG5cdH1cblxuXHRvbkNoZWNrZWQoZSwgZGF0YSkge1xuXHRcdHN1cGVyLm9uQ2hlY2tlZChlKTtcblx0XHR0aGlzLnBsYXllci50b2dnbGVTZWN0aW9ucyhkYXRhLmNoZWNrZWQpO1xuXHR9XG5cblx0X29uU2VjdGlvblRvZ2dsZShlLCBkYXRhKSB7XG5cdFx0Y29uc3QgeyBpc1Zpc2libGUgfSA9IGRhdGE7XG5cdFx0aWYodGhpcy5jaGVja2VkICE9PSBpc1Zpc2libGUpIHtcblx0XHRcdHRoaXMuY2hlY2tlZCA9IGlzVmlzaWJsZTtcblx0XHR9XG5cblx0fVxuXG5cdF9vblNlY3Rpb25zSW5pdChlKSB7XG5cdFx0dGhpcy5vcHRpb25zLmRpc2FibGUgPSB0aGlzLmRpc2FibGUgPSBmYWxzZTtcblx0XHR0aGlzLmNoZWNrZWQgPSB0cnVlO1xuXHR9XG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnU2VjdGlvbkNvbnRyb2wnLCBTZWN0aW9uQ29udHJvbCk7XG5Db250cm9sLnJlZ2lzdGVyQ29udHJvbCgnc2VjdGlvbicsIFNlY3Rpb25Db250cm9sKTtcbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb25Db250cm9sO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvU2VjdGlvbkNvbnRyb2wuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIGNvbnRyb2wtY2hlY2tib3guanNcbiAqL1xuXG5cbmltcG9ydCBDb250cm9sIGZyb20gJy4vQ29udHJvbCc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcblxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmNoZWNrZWQ9ZmFsc2VdXG4gKiBAY2xhc3MgQ29udHJvbENoZWNrYm94IFRvZ2dhYmxlIGNvbnRyb2xcbiAqL1xuY2xhc3MgQ29udHJvbENoZWNrYm94IGV4dGVuZHMgQ29udHJvbCB7XG5cblx0Y29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblx0XHR0aGlzLmNoZWNrZWQgPSB0aGlzLm9wdGlvbnMuY2hlY2tlZCB8fCBmYWxzZTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ2xlcGxheWVyX2NoZWNrZWQnLCB0aGlzLm9uQ2hlY2tlZC5iaW5kKHRoaXMpKVxuXHR9XG5cblxuXHQvKipcblx0ICogU2V0dGVyIGZvciBjaGVja2VkIHByb3BlcnR5XG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtib29sZWFufSB2YWxcblx0ICovXG5cdHNldCBjaGVja2VkICh2YWwpIHtcblx0XHRpZiAodGhpcy5kaXNhYmxlKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHZhbCA9ICEhdmFsO1xuXHRcdHRoaXMuX2NoZWNrZWQgPSB2YWxcblx0XHR0aGlzLmVsZW1lbnQudG9nZ2xlQ2xhc3MoJ2NvbnRyb2wtY2hlY2tib3gtLWNoZWNrZWQnLCB2YWwpO1xuXHRcdHRoaXMuZWxlbWVudC50cmlnZ2VyKCdsZXBsYXllcl9jaGVja2VkJywgeyBjaGVja2VkIDogdmFsIH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldHRlciBmb3IgY2hlY2tlZCBwcm9wZXJ5XG5cdCAqIEBwdWJsaWNcblx0ICogQHJldHVybiB7Ym9vbGVhbn1cblx0ICovXG5cdGdldCBjaGVja2VkICgpIHtcblx0XHRyZXR1cm4gdGhpcy5fY2hlY2tlZDtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdG9uQ2xpY2sgKGUpIHtcblx0XHRzdXBlci5vbkNsaWNrKGUpO1xuXHRcdHRoaXMuY2hlY2tlZCA9ICF0aGlzLmNoZWNrZWQ7XG5cdH1cblxuXHQvKipcblx0ICogT24gY2hlY2tlZCBldmVudCBoYW5kbGVyXG5cdCAqXG5cdCAqIEBwYXJhbSB7RXZlbnR9IGVcblx0ICogQHBhcmFtIHtPYmplY3R9IGRhdGFcblx0ICovXG5cdG9uQ2hlY2tlZChlLCBkYXRhKSB7XG5cblx0fVxuXG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0YnVpbGRDU1NDbGFzcygpIHtcblx0XHRyZXR1cm4gYGNvbnRyb2wtY2hlY2tib3ggJHtzdXBlci5idWlsZENTU0NsYXNzKCl9YFxuXHR9XG5cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdDb250cm9sQ2hlY2tib3gnLCBDb250cm9sQ2hlY2tib3gpO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ2NoZWNrYm94JywgQ29udHJvbENoZWNrYm94KTtcbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xDaGVja2JveDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL0NvbnRyb2xDaGVja2JveC5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgRnVsbHNjcmVlbkNvbnRyb2wuanNcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL0NvbnRyb2wnO1xuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBjbGFzcyBGdWxsc2NyZWVuQ29udHJvbFxuICogQGV4dGVuZHMgQ29udHJvbFxuICovXG5jbGFzcyBGdWxsc2NyZWVuQ29udHJvbCBleHRlbmRzIENvbnRyb2wge1xuXHRjb25zdHJ1Y3RvciAocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRpY29uTmFtZSA6ICdhcnJvd3MtYWx0Jyxcblx0XHRcdGNsYXNzTmFtZSA6ICdmdWxsc2NyZWVuJyxcblx0XHRcdHRpdGxlIDogJ9Cg0LDQt9Cy0LXRgNC90YPRgtGML9GB0LLQtdGA0L3Rg9GC0Ywg0L3QsCDQv9C+0LvQvdGL0Lkg0Y3QutGA0LDQvScsXG5cdFx0XHRuYW1lIDogJ2Z1bGxzY3JlZW4nXG5cdFx0fSwgb3B0aW9ucyk7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdG9uQ2xpY2soZSkge1xuXHRcdHN1cGVyLm9uQ2xpY2soZSlcblx0XHR0aGlzLnBsYXllci50b2dnbGVGdWxsc2NyZWVuKCk7XG5cdH1cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdGdWxsc2NyZWVuQ29udHJvbCcsIEZ1bGxzY3JlZW5Db250cm9sKTtcbkNvbnRyb2wucmVnaXN0ZXJDb250cm9sKCdmdWxsc2NyZWVuJywgRnVsbHNjcmVlbkNvbnRyb2wpO1xuZXhwb3J0IGRlZmF1bHQgRnVsbHNjcmVlbkNvbnRyb2w7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9GdWxsc2NyZWVuQ29udHJvbC5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgUmF0ZUNvbnRyb2wuanNcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL0NvbnRyb2wnO1xuaW1wb3J0IENvbnRyb2xUZXh0IGZyb20gJy4vQ29udHJvbFRleHQnO1xuaW1wb3J0IENvb2tpZSBmcm9tICcuLi91dGlscy9jb29raWUnO1xuXG4vKipcbiAqIEBjbGFzcyBSYXRlQ29udHJvbFxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHByb3BlcnR5IHtDb250cm9sfSBkb3duQ29udHJvbCAgRG93biByYXRlIGNvbnRyb2xcbiAqIEBwcm9wZXJ0eSB7Q29udHJvbH0gdXBDb250cm9sICBVcCByYXRlIGNvbnRyb2xcbiAqIEBwcm9wZXJ0eSB7Q29udHJvbFRleHR9IGN1cnJlbnRSYXRlIENvbnRyb2wgb2YgY3V1cmVudCByYXRlXG4gKiBAZXh0ZW5kcyBDb250cm9sXG4gKi9cbmNsYXNzIFJhdGVDb250cm9sIGV4dGVuZHMgQ29udHJvbCB7XG5cdGNvbnN0cnVjdG9yIChwbGF5ZXIsIG9wdGlvbnM9e30pIHtcblx0XHRvcHRpb25zID0gJC5leHRlbmQoe30sIHtcblx0XHRcdGNsYXNzTmFtZSA6ICdjb250cm9sLWNvbnRhaW5lcicsXG5cdFx0XHR0YWcgOiAnZGl2J1xuXHRcdH0sIG9wdGlvbnMpO1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cblx0XHR0aGlzLnBsYXllci5vbigncmF0ZWNoYW5nZScsICgpID0+IHtcblx0XHRcdHRoaXMudXBkYXRlKCk7XG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdHN1cGVyLmNyZWF0ZUVsZW1lbnQoKTtcblx0XHRjb25zdCB2aWRlbyA9IHRoaXMucGxheWVyLnZpZGVvO1xuXG5cdFx0dGhpcy5kb3duQ29udHJvbCA9IG5ldyBDb250cm9sKHRoaXMucGxheWVyLCB7XG5cdFx0XHRjbGFzc05hbWUgOiAncmF0ZS1kb3duJyxcblx0XHRcdG5hbWUgOiAncmF0ZS1kb3duJyxcblx0XHRcdGljb25OYW1lIDogJ2JhY2t3YXJkJyxcblx0XHRcdGNvbGxlY3Rpb24gOiB0aGlzLm9wdGlvbnMuY29sbGVjdGlvbixcblx0XHRcdHRpdGxlIDogJ9Cj0LzQtdC90YzRiNC40YLRjCDRgdC60L7RgNC+0YHRgtGMINC/0YDQvtC40LPRgNGL0LLQsNC90LjRjycsXG5cdFx0XHRvbkNsaWNrIDogZnVuY3Rpb24oZSkge1xuXHRcdFx0XHR2aWRlby5kZWNyZWFzZVJhdGUoKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHRoaXMudXBDb250cm9sID0gbmV3IENvbnRyb2wodGhpcy5wbGF5ZXIsIHtcblx0XHRcdGNsYXNzTmFtZSA6ICdyYXRlLXVwJyxcblx0XHRcdG5hbWUgOiAncmF0ZS11cCcsXG5cdFx0XHRpY29uTmFtZSA6ICdmb3J3YXJkJyxcblx0XHRcdGNvbGxlY3Rpb24gOiB0aGlzLm9wdGlvbnMuY29sbGVjdGlvbixcblx0XHRcdHRpdGxlIDogJ9Cj0LLQtdC70LjRh9C40YLRjCDRgdC60L7RgNC+0YHRgtGMINC/0YDQvtC40LPRgNGL0LLQsNC90LjRjycsXG5cdFx0XHRvbkNsaWNrIDogZnVuY3Rpb24oZSkge1xuXHRcdFx0XHR2aWRlby5pbmNyZWFzZVJhdGUoKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHRoaXMuY3VycmVudFJhdGUgPSBuZXcgQ29udHJvbFRleHQodGhpcy5wbGF5ZXIsIHtcblx0XHRcdGNsYXNzTmFtZSA6ICdyYXRlLWN1cnJlbnQnLFxuXHRcdFx0b25DbGljayA6IGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0dmlkZW8ucmF0ZSA9IHRoaXMucGxheWVyLm9wdGlvbnMucmF0ZS5kZWZhdWx0XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHR0aGlzLmVsZW1lbnRcblx0XHRcdC5hcHBlbmQodGhpcy5kb3duQ29udHJvbC5lbGVtZW50KVxuXHRcdFx0LmFwcGVuZCh0aGlzLmN1cnJlbnRSYXRlLmVsZW1lbnQpXG5cdFx0XHQuYXBwZW5kKHRoaXMudXBDb250cm9sLmVsZW1lbnQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0YnVpbGRDU1NDbGFzcygpIHtcblx0XHRyZXR1cm4gdGhpcy5vcHRpb25zLmNsYXNzTmFtZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdG9uUGxheWVySW5pdGVkKCkge1xuXHRcdHRoaXMudXBkYXRlKCk7XG5cdH1cblxuXHQvKipcblx0ICpcblx0ICovXG5cdG9uQ2xpY2soZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKVxuXHR9XG5cblx0dXBkYXRlKHZhbHVlKSB7XG5cdFx0Y29uc3QgdmlkZW8gPSB0aGlzLnBsYXllci52aWRlbztcblxuXHRcdHZhbHVlID0gdmFsdWUgfHwgdmlkZW8ucmF0ZTtcblx0XHR2YWx1ZSA9IHBhcnNlRmxvYXQodmFsdWUpXG5cdFx0XHQudG9GaXhlZCgyKVxuXHRcdFx0LnRvU3RyaW5nKClcblx0XHRcdC5yZXBsYWNlKC8sL2csICcuJyk7XG5cdFx0dGhpcy5jdXJyZW50UmF0ZS50ZXh0ID0gJ8OXJyArIHZhbHVlO1xuXG5cdFx0aWYodGhpcy5kaXNhYmxlKSByZXR1cm47XG5cblx0XHRpZih2aWRlby5yYXRlIDw9IHZpZGVvLnJhdGVNaW4pIHtcblx0XHRcdHRoaXMuZG93bkNvbnRyb2wuZGlzYWJsZSA9IHRydWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuZG93bkNvbnRyb2wuZGlzYWJsZSA9IGZhbHNlO1xuXHRcdH1cblxuXHRcdGlmKHZpZGVvLnJhdGUgPj0gdmlkZW8ucmF0ZU1heCkge1xuXHRcdFx0dGhpcy51cENvbnRyb2wuZGlzYWJsZSA9IHRydWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMudXBDb250cm9sLmRpc2FibGUgPSBmYWxzZTtcblx0XHR9XG5cdH1cblxuXHRzZXQgZGlzYWJsZSh2YWx1ZSkge1xuXHRcdHRoaXMuX2Rpc2FibGUgPSB2YWx1ZTtcblx0XHR0aGlzLmRvd25Db250cm9sLmRpc2FibGUgPSB2YWx1ZTtcblx0XHR0aGlzLnVwQ29udHJvbC5kaXNhYmxlID0gdmFsdWU7XG5cdH1cblxuXHRpbml0ICgpIHtcblx0XHRsZXQgcmF0ZSA9IENvb2tpZS5nZXQoJ3JhdGUnLCB0aGlzLnBsYXllci5vcHRpb25zLnJhdGUuZGVmYXVsdCk7XG5cdFx0dGhpcy5zaG93KHJhdGUpO1xuXHR9XG5cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdSYXRlQ29udHJvbCcsIFJhdGVDb250cm9sKTtcbkNvbnRyb2wucmVnaXN0ZXJDb250cm9sKCdyYXRlJywgUmF0ZUNvbnRyb2wpO1xuZXhwb3J0IGRlZmF1bHQgUmF0ZUNvbnRyb2w7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9SYXRlQ29udHJvbC5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgQmFja3dhcmRDb250cm9sLmpzXG4gKlxuICogQmFja3dhcmQgY29udHJvbFxuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCBDb250cm9sIGZyb20gJy4vQ29udHJvbCc7XG5cbi8qKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBPcHRpb25zXG4gKiBAY2xhc3MgQmFja3dhcmRDb250cm9sXG4gKiBAZXh0ZW5kcyBDb250cm9sXG4gKi9cbmNsYXNzIEJhY2t3YXJkQ29udHJvbCBleHRlbmRzIENvbnRyb2wge1xuXHRjb25zdHJ1Y3RvciAocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRpY29uTmFtZSA6ICd1bmRvJyxcblx0XHRcdGNsYXNzTmFtZSA6ICdiYWNrd2FyZCcsXG5cdFx0XHRuYW1lIDogJ2JhY2t3YXJkJyxcblx0XHRcdHRpdGxlIDogYNCe0YLQvNC+0YLQsNGC0Ywg0L3QsNC30LDQtCDQvdCwICR7cGxheWVyLm9wdGlvbnMucGxheWJhY2suc3RlcC5tZWRpdW19INGB0LXQutGD0L3QtGAsXG5cdFx0XHRkaXNhYmxlIDogdHJ1ZVxuXHRcdH0sIG9wdGlvbnMpO1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cblx0XHR0aGlzLnBsYXllci5vbignZmlyc3RwbGF5JywgKCkgPT4gdGhpcy5kaXNhYmxlID0gZmFsc2UpXG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRvbkNsaWNrKGUpIHtcblx0XHRzdXBlci5vbkNsaWNrKGUpO1xuXHRcdHRoaXMucGxheWVyLnZpZGVvLmN1cnJlbnRUaW1lIC09IHRoaXMucGxheWVyLm9wdGlvbnMucGxheWJhY2suc3RlcC5tZWRpdW07XG5cdFx0dGhpcy5wbGF5ZXIuc3BsYXNoSWNvbi5zaG93KCd1bmRvJyk7XG5cdH1cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdCYWNrd2FyZENvbnRyb2wnLCBCYWNrd2FyZENvbnRyb2wpO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ2JhY2t3YXJkJywgQmFja3dhcmRDb250cm9sKTtcbmV4cG9ydCBkZWZhdWx0IEJhY2t3YXJkQ29udHJvbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL0JhY2t3YXJkQ29udHJvbC5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgU291cmNlQ29udHJvbC5qc1xuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCBDb250cm9sIGZyb20gJy4vQ29udHJvbCc7XG5pbXBvcnQgQ29udHJvbENvbnRhaW5lciBmcm9tICcuL0NvbnRyb2xDb250YWluZXInO1xuXG5cbi8qKlxuICogQGNsYXNzIFNvdXJjZUNvbnRyb2xcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBleHRlbmRzIENvbnRyb2xDb25haW5lclxuICovXG5jbGFzcyBTb3VyY2VDb250cm9sIGV4dGVuZHMgQ29udHJvbENvbnRhaW5lciB7XG5cdC8vIFRPRE86INCU0LXQu9Cw0YLRjCBkaXNhYmxlL2VuYWJsZSDQv9C+0YHQu9C1IG9wdGlvbnMgaW5pdFxuXHRjb25zdHJ1Y3RvciAocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRuYW1lIDogJ3NvdXJjZScsXG5cdFx0XHRpY29uTmFtZSA6ICdidWxsc2V5ZScsXG5cdFx0XHR0aXRsZSA6ICfQmtCw0YfQtdGB0YLQstC+Jyxcblx0XHRcdGNsYXNzTmFtZSA6ICdzb3VyY2UtY29udHJvbCcsXG5cdFx0XHRkaXNhYmxlIDogdHJ1ZVxuXHRcdH0sIG9wdGlvbnMpO1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cblx0XHR0aGlzLnBsYXllci5vbigncGxheWluZycsIHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xuXHRcdHRoaXMucGxheWVyLm9uKCdxdWFsaXR5Y2hhbmdlJywgdGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG5cdH1cblxuXHRvbkl0ZW1DbGljayhlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0Y29uc3QgaXRlbSA9ICQoZS50YXJnZXQpO1xuXHRcdGNvbnN0IHZpZGVvID0gdGhpcy5wbGF5ZXIudmlkZW87XG5cdFx0dmlkZW8ucGxheWJhY2tRdWFsaXR5ID0gaXRlbS5kYXRhKCduYW1lJyk7XG5cblx0XHR0aGlzLmRyb3Bkb3duQ29udGVudC5oaWRlKCk7XG5cblx0fVxuXG5cdG9uUGxheWVySW5pdGVkKGUsIGRhdGEpIHtcblx0XHR0aGlzLnVwZGF0ZSgpO1xuXHR9XG5cblx0Z2V0RGF0YSgpIHtcblx0XHRyZXR1cm4gdGhpcy5wbGF5ZXIudmlkZW8uZ2V0QXZhaWxhYmxlUXVhbGl0eUxldmVscygpO1xuXHR9XG5cblx0Z2V0Q3VycmVudFZhbHVlKCkge1xuXHRcdHJldHVybiB0aGlzLnBsYXllci52aWRlby5wbGF5YmFja1F1YWxpdHk7XG5cdH1cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdTb3VyY2VDb250cm9sJywgU291cmNlQ29udHJvbCk7XG5Db250cm9sLnJlZ2lzdGVyQ29udHJvbCgnc291cmNlJywgU291cmNlQ29udHJvbCk7XG5leHBvcnQgZGVmYXVsdCBTb3VyY2VDb250cm9sO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvU291cmNlQ29udHJvbC5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgQ29udHJvbENvbnRhaW5lci5qc1xuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCBDb250cm9sIGZyb20gJy4vQ29udHJvbCc7XG5pbXBvcnQgQ29udHJvbERyb3Bkb3duIGZyb20gJy4vQ29udHJvbERyb3Bkb3duJztcblxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAY2xhc3MgQ29udHJvbENvbnRhaW5lclxuICogQGV4dGVuZHMgQ29udHJvbERyb3Bkb3duXG4gKi9cbmNsYXNzIENvbnRyb2xDb250YWluZXIgZXh0ZW5kcyBDb250cm9sRHJvcGRvd24ge1xuXG5cdGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucz17fSkge1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cdFx0dGhpcy5fYWN0aXZlID0gbnVsbDtcblx0XHQvKipcblx0XHQgKiBMaXN0IG9mIGl0ZW1zXG5cdFx0ICpcblx0XHQgKiBAcHVibGljXG5cdFx0ICogQHR5cGUge0FycmF5fVxuXHRcdCAqL1xuXHRcdHRoaXMubGlzdCA9IFtdO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBpdGVtIG9mIGNvbnRhaW5lciBieSBpbmRleFxuXHQgKlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuXHQgKi9cblx0Z2V0QnlJbmRleChpbmRleCkge1xuXHRcdHJldHVybiB0aGlzLmxpc3RbaW5kZXhdO1xuXHR9XG5cblx0LyoqXG5cdCAqIFNldCBpdGVtIGFjdGl2ZSBieSBpbmRleFxuXHQgKlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuXHQgKi9cblx0c2V0QWN0aXZlQnlJbmRleChpbmRleCkge1xuXHRcdGlmICh0aGlzLmFjdGl2ZSkge1xuXHRcdFx0dGhpcy5hY3RpdmUucmVtb3ZlQ2xhc3MoJ2NvbnRyb2wtY29udGFpbmVyX19pdGVtLS1hY3RpdmUnKTtcblx0XHR9XG5cdFx0dGhpcy5fYWN0aXZlID0gdGhpcy5saXN0W2luZGV4XS5hZGRDbGFzcygnY29udHJvbC1jb250YWluZXJfX2l0ZW0tLWFjdGl2ZScpO1xuXHRcdHJldHVybiB0aGlzLl9hY3RpdmU7XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBHZXR0ZXIgb2YgYWN0aXZlIGZpZWxkXG5cdCAqXG5cdCAqIEBwdWJsaWNcblx0ICogQHR5cGUge2pRdWVyeX1cblx0ICovXG5cdGdldCBhY3RpdmUgKCkge1xuXHRcdGlmICh0aGlzLl9hY3RpdmUgJiYgdGhpcy5fYWN0aXZlLmxlbmd0aCA+IDApIHtcblx0XHRcdHJldHVybiB0aGlzLl9hY3RpdmU7XG5cdFx0fVxuXHRcdHRoaXMubGlzdC5mb3JFYWNoKGl0ZW0gPT4ge1xuXHRcdFx0aWYgKGl0ZW0uaGFzQ2xhc3MoJ2NvbnRyb2wtY29udGFpbmVyX19pdGVtLS1hY3RpdmUnKSkge1xuXHRcdFx0XHR0aGlzLl9hY3RpdmUgPSBpdGVtO1xuXHRcdFx0fVxuXHRcdH0pXG5cdFx0cmV0dXJuIHRoaXMuX2FjdGl2ZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTZXR0ZXIgb2YgYWN0aXZlIGZpZWxkXG5cdCAqXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtqUXVlcnl9IEl0ZW0gb2YgY29udGFpbmVyXG5cdCAqL1xuXHRzZXQgYWN0aXZlIChlbGVtZW50KSB7XG5cdFx0aWYgKHRoaXMuYWN0aXZlKSB7XG5cdFx0XHR0aGlzLmFjdGl2ZS5yZW1vdmVDbGFzcygnY29udHJvbC1jb250YWluZXJfX2l0ZW0tLWFjdGl2ZScpO1xuXHRcdH1cblx0XHRpZiAoZWxlbWVudCkge1xuXHRcdFx0JChlbGVtZW50KS5hZGRDbGFzcygnY29udHJvbC1jb250YWluZXJfX2l0ZW0tLWFjdGl2ZScpO1xuXHRcdH1cblx0XHR0aGlzLl9hY3RpdmUgPSBlbGVtZW50O1xuXHRcdHRoaXMuY2xvc2UoKTtcblx0XHRyZXR1cm4gdGhpcy5fYWN0aXZlXG5cdH1cblxuXG5cdC8qKlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7U3RyaW5nfGpRdWVyeX0gQ29udGVudCBvZiBpdGVtXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBEYXRhIG9mIGl0ZW1cblx0ICovXG5cdGFkZEl0ZW0gKGNvbnRlbnQsIGRhdGEpIHtcblx0XHRjb25zdCBpdGVtID0gJCgnPGRpdiAvPicpXG5cdFx0XHQuYWRkQ2xhc3MoJ2NvbnRyb2wtY29udGFpbmVyX19pdGVtJylcblx0XHRcdC5kYXRhKGRhdGEpXG5cdFx0XHQuYXR0cigndGl0bGUnLCBkYXRhLnRvb2x0aXApXG5cdFx0XHQub24oJ2NsaWNrIHRhcCcsIHRoaXMub25JdGVtQ2xpY2suYmluZCh0aGlzKSlcblx0XHRcdC5hcHBlbmQoY29udGVudCk7XG5cblx0XHR0aGlzLmxpc3QgPSB0aGlzLmxpc3QuY29uY2F0KGl0ZW0pO1xuXG5cdFx0dGhpcy5kcm9wZG93bkNvbnRlbnQuYXBwZW5kKGl0ZW0pO1xuXG5cdFx0dGhpcy5lbWl0VGFwRXZlbnRzKGl0ZW0pO1xuXG5cdFx0cmV0dXJuIGl0ZW07XG5cdH1cblxuXHQvKipcblx0ICogT24gaXRlbSBjbGljayBldmVudCBoYW5kbGVyXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtFdmVudH0gZVxuXHQgKi9cblx0b25JdGVtQ2xpY2sgKGUpIHtcblx0XHR0aGlzLmFjdGl2ZSA9IGUuY3VycmVudFRhcmdldDtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGJ1aWxkQ1NTQ2xhc3MoKSB7XG5cdFx0cmV0dXJuIGAke3N1cGVyLmJ1aWxkQ1NTQ2xhc3MoKX0gY29udHJvbC1jb250YWluZXJgXG5cdH1cblxuXHR1cGRhdGUoKSB7XG5cdFx0Y29uc3QgZGF0YSA9IHRoaXMuZ2V0RGF0YSgpXG5cdFx0Y29uc3QgY3VycmVudFZhbHVlID0gdGhpcy5nZXRDdXJyZW50VmFsdWUoKVxuXG5cdFx0aWYoZGF0YSA9PSBudWxsIHx8IGRhdGEubGVuZ3RoID09PSAwKSB7XG5cdFx0XHR0aGlzLmRpc2FibGUgPSB0cnVlO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMubGlzdCA9IFtdO1xuXHRcdHRoaXMuZHJvcGRvd25Db250ZW50LmVtcHR5KCk7XG5cblx0XHRkYXRhLmZvckVhY2goaXRlbSA9PiB7XG5cdFx0XHRjb25zdCBlbGVtID0gdGhpcy5hZGRJdGVtKGl0ZW0udGl0bGUsIGl0ZW0pO1xuXHRcdFx0aWYoY3VycmVudFZhbHVlICYmIGN1cnJlbnRWYWx1ZS5uYW1lID09PSBpdGVtLm5hbWUpIHtcblxuXHRcdFx0XHR0aGlzLmFjdGl2ZSA9IGVsZW07XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0dGhpcy5kaXNhYmxlID0gZmFsc2U7XG5cdH1cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdDb250cm9sQ29udGFpbmVyJywgQ29udHJvbENvbnRhaW5lcik7XG5Db250cm9sLnJlZ2lzdGVyQ29udHJvbCgnY29udGFpbmVyJywgQ29udHJvbENvbnRhaW5lcik7XG5leHBvcnQgZGVmYXVsdCBDb250cm9sQ29udGFpbmVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvQ29udHJvbENvbnRhaW5lci5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgU3VidGl0bGVDb250cm9sLmpzXG4gKlxuICogU3VidGl0bGUgY29udHJvbFxuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCBDb250cm9sIGZyb20gJy4vQ29udHJvbCc7XG5pbXBvcnQgQ29udHJvbENvbnRhaW5lciBmcm9tICcuL0NvbnRyb2xDb250YWluZXInO1xuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBjbGFzcyBTdWJ0aXRsZUNvbnRyb2xcbiAqIEBleHRlbmRzIENvbnRyb2xDb250YWluZXJcbiAqL1xuY2xhc3MgU3VidGl0bGVDb250cm9sIGV4dGVuZHMgQ29udHJvbENvbnRhaW5lciB7XG5cdGNvbnN0cnVjdG9yIChwbGF5ZXIsIG9wdGlvbnM9e30pIHtcblx0XHRvcHRpb25zID0gJC5leHRlbmQoe30sIHtcblx0XHRcdGljb25OYW1lIDogJ2NvbW1lbnRpbmctbycsXG5cdFx0XHR0aXRsZSA6ICfQodGD0LHRgtC40YLRgNGLJyxcblx0XHRcdG5hbWUgOiAnc3VidGl0bGUnLFxuXHRcdFx0Y2xhc3NOYW1lIDogJ3N1YnRpdGxlLWNvbnRyb2wnLFxuXHRcdFx0ZGlzYWJsZSA6IHRydWVcblx0XHR9LCBvcHRpb25zKTtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ3BsYXlpbmcnLCB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLnBsYXllci5vbigndHJhY2tzY2hhbmdlJywgdGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG5cdH1cblxuXHRvbkNsaWNrIChlKSB7XG5cdFx0c3VwZXIub25DbGljayhlKTtcblx0XHRjb25zdCB2aWRlbyA9IHRoaXMucGxheWVyLnZpZGVvO1xuXHRcdHZpZGVvLnRyYWNrID0gbnVsbFxuXHR9XG5cblx0b25JdGVtQ2xpY2sgKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0ZS5zdG9wUHJvcGFnYXRpb24oKVxuXG5cdFx0Y29uc3QgaXRlbSA9ICQoZS50YXJnZXQpXG5cdFx0Y29uc3QgdmlkZW8gPSB0aGlzLnBsYXllci52aWRlbztcblx0XHRpZiAoaXRlbS5kYXRhKCkpIHtcblx0XHRcdHZpZGVvLnRyYWNrID0gaXRlbS5kYXRhKCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5kcm9wZG93bkNvbnRlbnQuaGlkZSgpXG5cdH1cblxuXHRvblBsYXllckluaXRlZChlLCBkYXRhKSB7XG5cdFx0dGhpcy51cGRhdGUoKVxuXHR9XG5cblx0dXBkYXRlKCkge1xuXHRcdHN1cGVyLnVwZGF0ZSgpO1xuXHRcdGNvbnN0IGhhc1ZhbHVlID0gISEodGhpcy5nZXRDdXJyZW50VmFsdWUoKSAmJiB0aGlzLmdldEN1cnJlbnRWYWx1ZSgpLm5hbWUgIT0gbnVsbCk7XG5cdFx0dGhpcy5lbGVtZW50LnRvZ2dsZUNsYXNzKFxuXHRcdFx0J2NvbnRyb2wtY2hlY2tib3gtLWNoZWNrZWQnLFxuXHRcdFx0aGFzVmFsdWVcblx0XHQpXG5cdH1cblxuXHRnZXREYXRhKCkge1xuXHRcdHJldHVybiB0aGlzLnBsYXllci52aWRlby5zdWJ0aXRsZXM7XG5cdH1cblxuXHRnZXRDdXJyZW50VmFsdWUoKSB7XG5cdFx0cmV0dXJuIHRoaXMucGxheWVyLnZpZGVvLnRyYWNrO1xuXHR9XG5cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdTdWJ0aXRsZUNvbnRyb2wnLCBTdWJ0aXRsZUNvbnRyb2wpO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ3N1YnRpdGxlJywgU3VidGl0bGVDb250cm9sKTtcbmV4cG9ydCBkZWZhdWx0IFN1YnRpdGxlQ29udHJvbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL1N1YnRpdGxlQ29udHJvbC5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgRG93bmxvYWRDb250cm9sLmpzXG4gKlxuICogRG93bmxvYWQgY29udHJvbFxuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL0NvbnRyb2wnO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgSWNvbiBmcm9tICcuL0ljb24nO1xuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEBjbGFzcyBEb3dubG9hZENvbnRyb2xcbiAqIEBleG50ZWRzIENvbnRyb2xcbiAqL1xuY2xhc3MgRG93bmxvYWRDb250cm9sIGV4dGVuZHMgQ29udHJvbCB7XG5cdGNvbnN0cnVjdG9yIChwbGF5ZXIsIG9wdGlvbnM9e30pIHtcblx0XHRvcHRpb25zID0gJC5leHRlbmQoe1xuXHRcdFx0dGl0bGUgOiAn0KHQutCw0YfQsNGC0Ywg0LLQuNC00LXQvicsXG5cdFx0XHRjbGFzc05hbWUgOiAnZG93bmxvYWQnLFxuXHRcdFx0bmFtZSA6ICdkb3dubG9hZCcsXG5cdFx0fSwgb3B0aW9ucyk7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblx0XHR0aGlzLnBsYXllci5vbignbG9hZHN0YXJ0JywgdGhpcy5vbkxvYWRTdGFydC5iaW5kKHRoaXMpKTtcblx0fVxuXG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHQvLyBUT0RPOiDQlNC+0L7Qv9GA0LXQtNC10LvQuNGC0Ywg0Y3RgtC+0YIg0LzQtdGC0L7QtCwg0LAg0L3QtSDQv9C10YDQtdC+0L/RgNC10LTQu9C10LjRgtGMXG5cdFx0dGhpcy5lbGVtZW50ID0gJCgnPGEgLz4nKVxuXHRcdFx0LmF0dHIoe1xuXHRcdFx0XHRocmVmIDogJycsXG5cdFx0XHRcdHRhcmdldCA6ICdfYmxhbmsnLFxuXHRcdFx0XHRkb3dubG9hZCA6IHRydWUsXG5cdFx0XHRcdHRpdGxlIDogdGhpcy5vcHRpb25zLnRpdGxlLFxuXHRcdFx0fSlcblx0XHRcdC5hZGRDbGFzcyh0aGlzLmJ1aWxkQ1NTQ2xhc3MoKSlcblx0XHRcdC5hcHBlbmQobmV3IEljb24odGhpcy5wbGF5ZXIsIHsgaWNvbk5hbWUgOiAnZG93bmxvYWQnIH0pLmVsZW1lbnQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0YnVpbGRDU1NDbGFzcygpIHtcblx0XHRyZXR1cm4gYCR7c3VwZXIuYnVpbGRDU1NDbGFzcygpfWA7XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBTZXR0ZXIgb2YgbGluayBmaWVsZFxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSBQYXRoIGZvciB2aWRlb1xuXHQgKi9cblx0c2V0IGxpbmsgKHZhbHVlKSB7XG5cdFx0Y29uc3QgdGl0bGUgPSB0aGlzLnBsYXllci5vcHRpb25zLnRpdGxlO1xuXHRcdGxldCBmaWxlTmFtZTtcblxuXHRcdGlmKHRpdGxlICE9IG51bGwpIHtcblx0XHRcdGZpbGVOYW1lID0gZGVjb2RlVVJJQ29tcG9uZW50KHRpdGxlKSArICcuJyArIGdldEZpbGVFeHRlbnNpb24odmFsdWUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zdCBwYXJzZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cdFx0XHRwYXJzZXIuaHJlZiA9IHZhbHVlO1xuXHRcdFx0ZmlsZU5hbWUgPSBwYXJzZXIucGF0aG5hbWUuc3BsaXQoJy8nKTtcblx0XHRcdGZpbGVOYW1lID0gZmlsZU5hbWVbZmlsZU5hbWUubGVuZ3RoIC0gMV07XG5cdFx0fVxuXG5cdFx0dGhpcy5lbGVtZW50LmF0dHIoe1xuXHRcdFx0aHJlZiA6IHZhbHVlLFxuXHRcdFx0ZG93bmxvYWQgOiBmaWxlTmFtZVxuXHRcdH0pO1xuXHR9XG5cblxuXHRvbkxvYWRTdGFydChlLCBkYXRhKSB7XG5cdFx0dGhpcy5saW5rID0gdGhpcy5wbGF5ZXIudmlkZW8uc3JjLnVybDtcblx0fVxuXG59XG5mdW5jdGlvbiBnZXRGaWxlRXh0ZW5zaW9uKGZpbGVOYW1lKSB7XG5cdHJldHVybiBmaWxlTmFtZS5zcGxpdCgnLicpLnBvcCgpO1xufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ0Rvd25sb2FkQ29udHJvbCcsIERvd25sb2FkQ29udHJvbCk7XG5Db250cm9sLnJlZ2lzdGVyQ29udHJvbCgnZG93bmxvYWQnLCBEb3dubG9hZENvbnRyb2wpO1xuZXhwb3J0IGRlZmF1bHQgRG93bmxvYWRDb250cm9sO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvRG93bmxvYWRDb250cm9sLmpzIiwiXG4ndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIEtleWJpbmRpbmdJbmZvQ29udHJvbC5qc1xuICpcbiAqIEluZm8gY29udHJvbFxuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCBDb250cm9sIGZyb20gJy4vQ29udHJvbCc7XG5pbXBvcnQgQ29udHJvbERyb3Bkb3duIGZyb20gJy4vQ29udHJvbERyb3Bkb3duJztcblxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAY2xhc3MgS2V5QmluZGluZ0luZm9Db250cm9sXG4gKiBAZXh0ZW5kcyBDb250cm9sRHJvcGRvd25cbiAqL1xuY2xhc3MgS2V5QmluZGluZ0luZm9Db250cm9sIGV4dGVuZHMgQ29udHJvbERyb3Bkb3duIHtcblxuXHRjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcblx0XHRvcHRpb25zID0gJC5leHRlbmQoe30sIHtcblx0XHRcdGljb25OYW1lIDogJ2luZm8nLFxuXHRcdFx0dGl0bGUgOiAn0JjQvdGE0L4nLFxuXHRcdFx0Y2xhc3NOYW1lIDogJ2luZm8tY29udHJvbCcsXG5cdFx0XHRuYW1lIDogJ2luZm8nXG5cdFx0fSwgb3B0aW9ucyk7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblx0fVxuXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0c3VwZXIuY3JlYXRlRWxlbWVudCgpO1xuXHRcdGxldCBrZXlCaW5kaW5nID0gdGhpcy5wbGF5ZXIub3B0aW9ucy5rZXlCaW5kaW5nO1xuXHRcdGxldCBpbmZvQ29udGVudCA9IGBgO1xuXHRcdGZvciAobGV0IF9rZXkgaW4ga2V5QmluZGluZykge1xuXHRcdFx0aWYgKCFrZXlCaW5kaW5nLmhhc093blByb3BlcnR5KF9rZXkpKSBjb250aW51ZTtcblxuXHRcdFx0bGV0IGhvdGtleSA9IGtleUJpbmRpbmdbX2tleV07XG5cdFx0XHRsZXQgaXRlbSA9ICcnO1xuXHRcdFx0bGV0IGtleVN0cmluZyA9ICcnO1xuXG5cdFx0XHRob3RrZXkuaW5mby5mb3JFYWNoKChrZXksIGluZGV4KSA9PiB7XG5cdFx0XHRcdGlmIChpbmRleCAhPT0gMCkge1xuXHRcdFx0XHRcdGtleVN0cmluZyArPSBgICsgYFxuXHRcdFx0XHR9XG5cdFx0XHRcdGtleVN0cmluZyArPSBgPGtiZCBjbGFzcz1cImxlcGxheWVyLWtleVwiPiR7a2V5fTwva2JkPmBcblx0XHRcdH0pO1xuXG5cdFx0XHRpdGVtID0gYFxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiaW5mby1jb250cm9sX19pdGVtXCI+XG5cdFx0XHRcdFx0JHtrZXlTdHJpbmd9IC0gJHtob3RrZXkuZGVzY3JpcHRpb259XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0YFxuXG5cdFx0XHRpbmZvQ29udGVudCArPSBpdGVtO1xuXG5cdFx0fVxuXHRcdHRoaXMuZHJvcGRvd25Db250ZW50XG5cdFx0XHQuYWRkQ2xhc3MoJ2luZm8tY29udHJvbF9fY29udGVudCcpXG5cdFx0XHQuYXBwZW5kKGluZm9Db250ZW50KTtcblx0fVxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ0tleUJpbmRpbmdJbmZvQ29udHJvbCcsIEtleUJpbmRpbmdJbmZvQ29udHJvbCk7XG5Db250cm9sLnJlZ2lzdGVyQ29udHJvbCgna2V5YmluZGluZyBpbmZvJywgS2V5QmluZGluZ0luZm9Db250cm9sKTtcbmV4cG9ydCBkZWZhdWx0IEtleUJpbmRpbmdJbmZvQ29udHJvbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL0tleWJpbmRpbmdJbmZvQ29udHJvbC5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgVGltZUluZm9Db250cm9sLmpzXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9Db250cm9sJztcbmltcG9ydCBDb250cm9sVGV4dCBmcm9tICcuL0NvbnRyb2xUZXh0JztcbmltcG9ydCB7IHNlY29uZHNUb1RpbWUgfSBmcm9tICcuLi91dGlscyc7XG5cbi8qKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQGNsYXNzIFRpbWVJbmZvQ29udHJvbFxuICogQHByb3BlcnR5IHtDb250cm9sVGV4dH0gY3VycmVudFRpbWUgQ3VycmVudCB0aW1lJ3MgdGV4dFxuICogQHByb3BlcnR5IHtDb250cm9sVGV4dH0gdG90YWxUaW1lIFRvdGFsIHRpbWVcbiAqIEBwcm9wZXJ0eSB7alF1ZXJ5fSBsaW5lXG4gKiBAZXh0ZW5kcyBDb250cm9sXG4gKi9cbmNsYXNzIFRpbWVJbmZvQ29udHJvbCBleHRlbmRzIENvbnRyb2wge1xuXG5cdGNvbnN0cnVjdG9yIChwbGF5ZXIsIG9wdGlvbnM9e30pIHtcblx0XHRvcHRpb25zID0gJC5leHRlbmQoe30sIHtcblx0XHRcdGNsYXNzTmFtZSA6ICd0aW1lbGluZSB0aW1lbGluZS1jb250YWluZXInLFxuXHRcdFx0bmFtZSA6ICd0aW1lLWluZm8nXG5cdFx0fSwgb3B0aW9ucyk7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblxuXHRcdHRoaXMucGxheWVyLm9uKCd0aW1ldXBkYXRlJywgKGUsIGRhdGEpID0+IHtcblx0XHRcdGNvbnN0IHRpbWUgPSB0aGlzLnBsYXllci5jdXJyZW50VGltZTtcblx0XHRcdHRoaXMuX2N1cnJlbnRUaW1lQ29udHJvbC50ZXh0ID0gc2Vjb25kc1RvVGltZSh0aW1lKTtcblx0XHR9KTtcblxuXHRcdHRoaXMucGxheWVyLm9uKCdkdXJhdGlvbmNoYW5nZScsIChlKSA9PiB7XG5cdFx0XHR0aGlzLl90b3RhbFRpbWVDb250cm9sLnRleHQgPSBzZWNvbmRzVG9UaW1lKHRoaXMucGxheWVyLnZpZGVvLmR1cmF0aW9uKTtcblx0XHR9KTtcblx0fVxuXG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHRjb25zdCBkdXJhdGlvbiA9IHRoaXMucGxheWVyLnZpZGVvLmR1cmF0aW9uO1xuXHRcdGNvbnN0IGN1cnJlbnRUaW1lID0gdGhpcy5wbGF5ZXIudmlkZW8uY3VycmVudFRpbWU7XG5cdFx0dGhpcy5fY3VycmVudFRpbWVDb250cm9sID0gbmV3IENvbnRyb2xUZXh0KHRoaXMucGxheWVyLCB7IGNsYXNzTmFtZSA6ICdjb250cm9sLXRpbWVfX2N1cnJlbnQnfSk7XG5cdFx0dGhpcy5fdG90YWxUaW1lQ29udHJvbCA9IG5ldyBDb250cm9sVGV4dCh0aGlzLnBsYXllciwgeyBjbGFzc05hbWUgOiAnY29udHJvbC10aW1lX190b3RhbCd9KTtcblxuXHRcdGlmKGlzTmFOKGR1cmF0aW9uKSB8fCBkdXJhdGlvbiA9PSBudWxsKSB7XG5cdFx0XHR0aGlzLl90b3RhbFRpbWVDb250cm9sLnRleHQgPSAnJztcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5fdG90YWxUaW1lQ29udHJvbC50ZXh0ID0gc2Vjb25kc1RvVGltZShkdXJhdGlvbik7XG5cdFx0fVxuXG5cdFx0aWYoY3VycmVudFRpbWUgPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5fY3VycmVudFRpbWVDb250cm9sLnRleHQgPSBzZWNvbmRzVG9UaW1lKDApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLl9jdXJyZW50VGltZUNvbnRyb2wudGV4dCA9IHNlY29uZHNUb1RpbWUoY3VycmVudFRpbWUpO1xuXHRcdH1cblxuXHRcdHRoaXMuZWxlbWVudCA9ICQoJzxkaXYvPicpLmFkZENsYXNzKCdjb250cm9sLXRpbWUnKTtcblx0XHR0aGlzLmVsZW1lbnRcblx0XHRcdC5hcHBlbmQodGhpcy5fY3VycmVudFRpbWVDb250cm9sLmVsZW1lbnQpXG5cdFx0XHQuYXBwZW5kKHRoaXMuX3RvdGFsVGltZUNvbnRyb2wuZWxlbWVudClcblxuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQ7XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdG9uUGxheWVySW5pdGVkKGUpIHtcblx0XHRsZXQgdmlkZW8gPSB0aGlzLnBsYXllci52aWRlbztcblx0XHR0aGlzLl9jdXJyZW50VGltZUNvbnRyb2wudGV4dCA9IHNlY29uZHNUb1RpbWUodmlkZW8uY3VycmVudFRpbWUpO1xuXHRcdHRoaXMuX3RvdGFsVGltZUNvbnRyb2wudGV4dCA9IHNlY29uZHNUb1RpbWUodmlkZW8uZHVyYXRpb24pO1xuXHR9XG5cblx0b25DbGljayhlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdH1cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdUaW1lSW5mb0NvbnRyb2wnLCBUaW1lSW5mb0NvbnRyb2wpO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ3RpbWVpbmZvJywgVGltZUluZm9Db250cm9sKTtcbmV4cG9ydCBkZWZhdWx0IFRpbWVJbmZvQ29udHJvbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL1RpbWVJbmZvQ29udHJvbC5qcyIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudHMvQ29tcG9uZW50JztcbmltcG9ydCB7IElTX1NBRkFSSSwgSVNfSU9TLCBJU19BTkRST0lEIH0gZnJvbSAnLi4vdXRpbHMvYnJvd3Nlcic7XG5pbXBvcnQgRW50aXR5IGZyb20gJy4vRW50aXR5JztcblxuXG5jbGFzcyBIdG1sNSBleHRlbmRzIEVudGl0eSB7XG5cdGNvbnN0cnVjdG9yIChwbGF5ZXIsIG9wdGlvbnMpIHtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXHRcdHRoaXMubWVkaWEgPSB0aGlzLmVsZW1lbnRbMF07XG5cblx0XHR0aGlzLnN1YnRpdGxlcyA9IFtdO1xuXHRcdHRoaXMuYnVmZmVyUmFuZ2VzID0gW107XG5cblx0XHR0aGlzLnNyYyA9IHRoaXMucGxheWVyLm9wdGlvbnMuc3JjO1xuXG5cdFx0aWYodGhpcy5wbGF5ZXIub3B0aW9ucy5wb3N0ZXIgIT0gbnVsbCkge1xuXHRcdFx0dGhpcy5wb3N0ZXIgPSB0aGlzLnBsYXllci5vcHRpb25zLnBvc3Rlcjtcblx0XHR9XG5cblx0XHRpZih0aGlzLmdldEF2YWlsYWJsZVF1YWxpdHlMZXZlbHMoKS5sZW5ndGggPiAwKSB7XG5cdFx0XHR0aGlzLl9wbGF5YmFja1F1YWxpdHkgPSB0aGlzLmdldEF2YWlsYWJsZVF1YWxpdHlMZXZlbHMoKVswXTtcblx0XHR9XG5cblx0XHR0aGlzLmVsZW1lbnQub24oJ2xvYWRzdGFydCcsIHRoaXMub25Mb2FkU3RhcnQuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCd0aW1ldXBkYXRlJywgdGhpcy5vblRpbWVVcGRhdGUuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdkdXJhdGlvbmNoYW5nZScsIHRoaXMub25EdXJhdGlvbkNoYW5nZS5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ3Byb2dyZXNzJywgdGhpcy5vblByb2dyZXNzLmJpbmQodGhpcykpO1xuXHRcdHRoaXMuZWxlbWVudC5vbignc2Vla2luZycsIHRoaXMub25TZWVraW5nLmJpbmQodGhpcykpO1xuXHRcdHRoaXMuZWxlbWVudC5vbignc2Vla2VkJywgdGhpcy5vblNlZWtlZC5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ3ZvbHVtZWNoYW5nZScsIHRoaXMub25Wb2x1bWVDaGFuZ2UuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdjbGljaycsIHRoaXMub25DbGljay5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ2RibGNsaWNrJywgdGhpcy5vbkRibGNsaWNrLmJpbmQodGhpcykpO1xuXHRcdHRoaXMuZWxlbWVudC5vbigncGxheScsIHRoaXMub25QbGF5LmJpbmQodGhpcykpO1xuXHRcdHRoaXMuZWxlbWVudC5vbigncGF1c2UnLCB0aGlzLm9uUGF1c2UuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdyYXRlY2hhbmdlJywgdGhpcy5vblJhdGVDaGFuZ2UuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdlbmRlZCcsIHRoaXMub25FbmRlZC5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ2NhbnBsYXl0aHJvdWdoJywgdGhpcy5vbkNhbnBsYXlUaHJvdWdoLmJpbmQodGhpcykpO1xuXHRcdHRoaXMuZWxlbWVudC5vbignd2FpdGluZycsIHRoaXMub25XYWl0aW5nLmJpbmQodGhpcykpO1xuXHRcdHRoaXMuZWxlbWVudC5vbignZXJyb3InLCB0aGlzLm9uRXJyb3IuYmluZCh0aGlzKSk7XG5cdH1cblxuXHRvbkxvYWRTdGFydChlKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCdsb2Fkc3RhcnQnKTtcblx0fVxuXG5cdG9uVGltZVVwZGF0ZShlKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCd0aW1ldXBkYXRlJyk7XG5cdH1cblxuXHRvbkR1cmF0aW9uQ2hhbmdlKGUpIHtcblx0XHR0aGlzLnRyaWdnZXIoJ2R1cmF0aW9uY2hhbmdlJyk7XG5cdH1cblxuXHRvblByb2dyZXNzKGUpIHtcblx0XHR0aGlzLnRyaWdnZXIoJ3Byb2dyZXNzJyk7XG5cdH1cblxuXHRvblNlZWtpbmcoZSkge1xuXHRcdHRoaXMudHJpZ2dlcignc2Vla2luZycpO1xuXHR9XG5cblx0b25TZWVrZWQoZSkge1xuXHRcdHRoaXMudHJpZ2dlcignc2Vla2VkJyk7XG5cdH1cblxuXHRvblZvbHVtZUNoYW5nZShlKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCd2b2x1bWVjaGFuZ2UnKTtcblx0fVxuXG5cdG9uQ2xpY2soKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCdjbGljaycpO1xuXHR9XG5cblx0b25EYmxjbGljaygpIHtcblx0XHR0aGlzLnRyaWdnZXIoJ2RibGNsaWNrJyk7XG5cdH1cblxuXHRvblBsYXkoKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCdwbGF5Jyk7XG5cdH1cblxuXHRvblBhdXNlKCkge1xuXHRcdHRoaXMudHJpZ2dlcigncGF1c2UnKTtcblx0fVxuXG5cdG9uUGxheWluZygpIHtcblx0XHR0aGlzLnRyaWdnZXIoJ3BsYXlpbmcnKTtcblx0fVxuXG5cdG9uUmF0ZUNoYW5nZSgpIHtcblx0XHR0aGlzLnRyaWdnZXIoJ3JhdGVjaGFuZ2UnKTtcblx0fVxuXG5cdG9uRW5kZWQoKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCdlbmRlZCcpO1xuXHR9XG5cblx0b25DYW5wbGF5VGhyb3VnaCgpIHtcblx0XHR0aGlzLnRyaWdnZXIoJ2NhbnBsYXl0aHJvdWdoJyk7XG5cdH1cblxuXHRvbldhaXRpbmcoKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCd3YWl0aW5nJyk7XG5cdH1cblxuXHRvbkVycm9yKGUpIHtcblx0XHR0aGlzLnRyaWdnZXIoJ2Vycm9yJywgeyBjb2RlIDogZS50YXJnZXQuZXJyb3IuY29kZSB9KTtcblx0fVxuXG5cdC8qIFRPRE8gKi9cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHR0aGlzLmVsZW1lbnQgPSB0aGlzLm9wdGlvbnMuY3R4O1xuXHRcdFtcblxuXHRcdFx0Ly8gUmVtb3ZlIGNvbnRyb2xzIGJlY2F1c2Ugd2UgZG9udCBub3Qgc3VwcG9ydCBuYXRpdmUgY29udHJvbHMgeWV0XG5cdFx0XHQnY29udHJvbHMnLFxuXHRcdFx0J3Bvc3RlcicsXG5cblx0XHRcdC8vIEl0IGlzIHVubmVjZXNzYXJ5IGF0dHJzLCB0aGlzIGZ1bmN0aW9uYWxpdHkgc29sdmUgQ1NTXG5cdFx0XHQnaGVpZ2h0Jyxcblx0XHRcdCd3aWR0aCdcblxuXHRcdF0uZm9yRWFjaChpdGVtID0+IHtcblx0XHRcdHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyKGl0ZW0pO1xuXHRcdH0pO1xuXG5cdFx0Ly8gU2V0IGF0dHJzIGZyb20gb3B0aW9uc1xuXHRcdFtcblx0XHRcdCdwcmVsb2FkJyxcblx0XHRcdCdhdXRvcGxheScsXG5cdFx0XHQnbG9vcCcsXG5cdFx0XHQnbXV0ZWQnXG5cdFx0XS5mb3JFYWNoKGl0ZW0gPT4ge1xuXHRcdFx0aWYodGhpcy5wbGF5ZXIub3B0aW9uc1tpdGVtXSkge1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQuYXR0cihpdGVtLCB0aGlzLnBsYXllci5vcHRpb25zW2l0ZW1dKTtcblx0XHRcdFx0dGhpcy5lbGVtZW50LnByb3AoaXRlbSwgdGhpcy5wbGF5ZXIub3B0aW9uc1tpdGVtXSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblxuXHRcdHRoaXMuZWxlbWVudC5maW5kKCdzb3VyY2VbZGF0YS1xdWFsaXR5XScpLmVhY2goKGksIGl0ZW0pID0+IHtcblx0XHRcdCQoaXRlbSkucmVtb3ZlKCk7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50O1xuXHR9XG5cblx0Z2V0IGN1cnJlbnRUaW1lICgpIHtcblx0XHRyZXR1cm4gdGhpcy5tZWRpYS5jdXJyZW50VGltZTtcblx0fVxuXG5cdHNldCBjdXJyZW50VGltZSAodmFsdWUpIHtcblx0XHRsZXQgdGltZTtcblx0XHRpZiAodmFsdWUgPiB0aGlzLmR1cmF0aW9uKSB7XG5cdFx0XHR0aW1lID0gdGhpcy5kdXJhdGlvblxuXHRcdH0gZWxzZSBpZiAodmFsdWUgPCAwKSB7XG5cdFx0XHR0aW1lID0gMFxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aW1lID0gdmFsdWU7XG5cdFx0fVxuXG5cdFx0dGhpcy5wbGF5ZXIudHJpZ2dlcigndGltZXVwZGF0ZWxvYWQnLCB7IGN1cnJlbnRUaW1lIDogdGltZSB9KTtcblxuXHRcdHRoaXMubWVkaWEuY3VycmVudFRpbWUgPSB0aW1lO1xuXHR9XG5cblx0Z2V0IGR1cmF0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5tZWRpYS5kdXJhdGlvbjtcblx0fVxuXG5cdGdldCBoZWlnaHQgKCkge1xuXHRcdHJldHVybiB0aGlzLm1lZGlhLmNsaWVudEhlaWdodDtcblx0fVxuXG5cdGdldCB3aWR0aCAoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWVkaWEuY2xpZW50V2lkdGg7XG5cdH1cblxuXHRnZXQgcmF0ZSAoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWVkaWEucGxheWJhY2tSYXRlO1xuXHR9XG5cblx0c2V0IG11dGVkKHZhbHVlKSB7XG5cdFx0dGhpcy5tZWRpYS5tdXRlZCA9IHZhbHVlO1xuXHR9XG5cblx0Z2V0IG11dGVkKCkge1xuXHRcdHJldHVybiB0aGlzLm1lZGlhLm11dGVkXG5cdH1cblxuXHRnZXQgcmF0ZU1heCgpIHtcblx0XHRsZXQgbWF4ID0gdGhpcy5wbGF5ZXIub3B0aW9ucy5yYXRlLm1heDtcblx0XHRpZihJU19JT1MgfHwgSVNfQU5EUk9JRCkge1xuXHRcdFx0bWF4ID0gSHRtbDUuTU9CSUxFX01BWF9SQVRFO1xuXHRcdH1cblx0XHRpZihJU19TQUZBUkkpIHtcblx0XHRcdG1heCA9IEh0bWw1LlNBRkFSSV9NQVhfUkFURTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbWF4O1xuXHR9XG5cblx0Z2V0IHJhdGVNaW4oKSB7XG5cdFx0bGV0IG1pbiA9IHRoaXMucGxheWVyLm9wdGlvbnMucmF0ZS5taW47XG5cblx0XHRpZiAoSVNfSU9TIHx8IElTX0FORFJPSUQpIHtcblx0XHRcdG1pbiA9IEh0bWw1Lk1PQklMRV9NSU5fUkFURTtcblx0XHR9XG5cblx0XHRpZiAoSVNfU0FGQVJJKSB7XG5cdFx0XHRtaW4gPSBIdG1sNS5TQUZBUklfTUlOX1JBVEU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1pbjtcblx0fVxuXG5cdHNldCByYXRlICh2YWx1ZSkge1xuXHRcdHN1cGVyLnJhdGUgPSB2YWx1ZTtcblx0XHR0aGlzLm1lZGlhLnBsYXliYWNrUmF0ZSA9IHZhbHVlO1xuXHR9XG5cblx0Z2V0QXZhaWxhYmxlUXVhbGl0eUxldmVscygpIHtcblx0XHRyZXR1cm4gdGhpcy5wbGF5ZXIub3B0aW9ucy5zb3VyY2VzLm1hcChpdGVtID0+ICh7XG5cdFx0XHRuYW1lIDogaXRlbS50aXRsZSxcblx0XHRcdC4uLml0ZW1cblx0XHR9KSk7XG5cdH1cblxuXHRzZXQgcGxheWJhY2tRdWFsaXR5KG5hbWUpIHtcblx0XHRzdXBlci5wbGF5YmFja1F1YWxpdHkgPSBuYW1lO1xuXHRcdGNvbnN0IHRpbWUgPSB0aGlzLmN1cnJlbnRUaW1lO1xuXHRcdGNvbnN0IHJhdGUgPSB0aGlzLnJhdGU7XG5cdFx0Y29uc3Qgc3RvcCA9IHRoaXMucGF1c2VkO1xuXG5cdFx0dGhpcy5fcGxheWJhY2tRdWFsaXR5ID0gdGhpcy5nZXRBdmFpbGFibGVRdWFsaXR5TGV2ZWxzKCkuZmluZChpdGVtID0+IGl0ZW0ubmFtZSA9PT0gbmFtZSk7XG5cblx0XHR0aGlzLnNyYyA9IHRoaXMuX3BsYXliYWNrUXVhbGl0eTtcblx0XHR0aGlzLnJhdGUgPSByYXRlO1xuXHRcdHRoaXMuY3VycmVudFRpbWUgPSB0aW1lO1xuXG5cdFx0aWYgKHN0b3ApIHtcblx0XHRcdHRoaXMucGF1c2UoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5wbGF5KCk7XG5cdFx0fVxuXG5cdFx0dGhpcy50cmlnZ2VyKCdxdWFsaXR5Y2hhbmdlJywgdGhpcy5fcGxheWJhY2tRdWFsaXR5KTtcblxuXHR9XG5cblx0Z2V0IHBsYXliYWNrUXVhbGl0eSgpIHtcblx0XHRyZXR1cm4gdGhpcy5fcGxheWJhY2tRdWFsaXR5O1xuXHR9XG5cblx0c2V0IHNyYyAoc3JjKSB7XG5cdFx0aWYoc3JjID09IG51bGwpIHJldHVybjtcblx0XHRpZih0aGlzLnNyYyAmJiB0aGlzLnNyYy51cmwgPT09IHNyYy51cmwpIHJldHVybjtcblxuXHRcdHRoaXMubWVkaWEuc3JjID0gc3JjLnVybDtcblxuXHRcdHRoaXMuX3NvdXJjZSA9IHNyYztcblx0fVxuXG5cdGdldCBzcmMgKCkge1xuXHRcdHJldHVybiB0aGlzLl9zb3VyY2Vcblx0fVxuXG5cdGdldCB0cmFjayAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3RyYWNrO1xuXHR9XG5cblx0c2V0IHRyYWNrICh2YWx1ZSkge1xuXHRcdFsuLi50aGlzLm1lZGlhLnRleHRUcmFja3NdLmZvckVhY2goaXRlbSA9PiB7XG5cdFx0XHRpZih2YWx1ZSAhPSBudWxsICYmIGl0ZW0ubGFuZ3VhZ2UgPT09IHZhbHVlLmxhbmd1YWdlKSB7XG5cdFx0XHRcdGl0ZW0ubW9kZSA9ICdzaG93aW5nJ1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aXRlbS5tb2RlID0gJ2hpZGRlbic7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0dGhpcy5fdHJhY2sgPSB2YWx1ZTtcblx0XHR0aGlzLnRyaWdnZXIoJ3RyYWNrc2NoYW5nZScpO1xuXHR9XG5cblx0Z2V0IHBhdXNlZCgpIHtcblx0XHRyZXR1cm4gdGhpcy5tZWRpYS5wYXVzZWQ7XG5cdH1cblxuXHRnZXQgdm9sdW1lICgpIHtcblx0XHRyZXR1cm4gdGhpcy5tZWRpYS52b2x1bWU7XG5cdH1cblxuXHRzZXQgdm9sdW1lICh2YWx1ZSkge1xuXHRcdHN1cGVyLnZvbHVtZSA9IHZhbHVlO1xuXHRcdGNvbnN0IHBsYXllciA9IHRoaXMucGxheWVyO1xuXHRcdGlmICh2YWx1ZSA+IDEpIHtcblx0XHRcdHRoaXMubWVkaWEudm9sdW1lID0gMTtcblx0XHR9IGVsc2UgaWYgKHZhbHVlIDwgcGxheWVyLm9wdGlvbnMudm9sdW1lLm11dGVsaW1pdCkge1xuXHRcdFx0dGhpcy5tZWRpYS52b2x1bWUgPSAwO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLm1lZGlhLnZvbHVtZSA9IHZhbHVlO1xuXHRcdH1cblx0XHR0aGlzLm1lZGlhLm11dGUgPSAodmFsdWUgPCBwbGF5ZXIub3B0aW9ucy52b2x1bWUubXV0ZWxpbWl0KTtcblx0fVxuXG5cblx0Z2V0IGJ1ZmZlcmVkICgpIHtcblx0XHRyZXR1cm4gdGhpcy5tZWRpYS5idWZmZXJlZDtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJuIHtUaW1lUmFuZ2VzfVxuXHQgKi9cblx0Z2V0IHNlZWthYmxlICgpIHtcblx0XHRyZXR1cm4gdGhpcy5tZWRpYS5zZWVrYWJsZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJuIHtUaW1lUmFuZ2VzfVxuXHQgKi9cblx0Z2V0IHBsYXllZCgpIHtcblx0XHRyZXR1cm4gdGhpcy5tZWRpYS5wbGF5ZWQ7XG5cdH1cblxuXHRnZXQgZW5kZWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWVkaWEuZW5kZWQ7XG5cdH1cblxuXHRnZXQgcGxheWVkUGVyY2VudGFnZSgpIHtcblx0XHRsZXQgcmVzdWx0ID0gMDtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGxheWVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRyZXN1bHQgKz0gKHRoaXMucGxheWVkLmVuZChpKSAtIHRoaXMucGxheWVkLnN0YXJ0KGkpKVxuXHRcdH1cblxuXHRcdHJldHVybiByZXN1bHQgLyB0aGlzLmR1cmF0aW9uICogMTAwXG5cdH1cblxuXHRnZXQgY3VycmVudFNyYygpIHtcblx0XHRyZXR1cm4gdGhpcy5tZWRpYS5jdXJyZW50U3JjO1xuXHR9XG5cblx0aW5pdCAoKSB7XG5cdFx0c3VwZXIuaW5pdCgpO1xuXHRcdHRoaXMubG9hZCgpO1xuXHRcdGxldCBkZmQgPSAkLkRlZmVycmVkKCk7XG5cdFx0dGhpcy5faW5pdFN1YnRpdGxlcygpO1xuXHRcdHRoaXMuX2luaXRWaWRlbygpXG5cdFx0XHQuZG9uZSgoKSA9PiB7XG5cdFx0XHRcdHRoaXMuX2luaXRSYXRlKCk7XG5cdFx0XHRcdHRoaXMuX2luaXRWb2x1bWUoKTtcblx0XHRcdFx0ZGZkLnJlc29sdmUoKTtcblx0XHRcdH0pO1xuXHRcdHJldHVybiBkZmQucHJvbWlzZSgpO1xuXHR9XG5cblx0c3VwcG9ydHNGdWxsU2NyZWVuKCkge1xuXHRcdGlmICh0eXBlb2YgdGhpcy5tZWRpYS53ZWJraXRFbnRlckZ1bGxTY3JlZW4gPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdGNvbnN0IHVzZXJBZ2VudCA9IHdpbmRvdy5uYXZpZ2F0b3IgJiYgd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQgfHwgJyc7XG5cblx0XHRcdC8vIFNlZW1zIHRvIGJlIGJyb2tlbiBpbiBDaHJvbWl1bS9DaHJvbWUgJiYgU2FmYXJpIGluIExlb3BhcmRcblx0XHRcdGlmICgoL0FuZHJvaWQvKS50ZXN0KHVzZXJBZ2VudCkgfHwgISgvQ2hyb21lfE1hYyBPUyBYIDEwLjUvKS50ZXN0KHVzZXJBZ2VudCkpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGVudGVyRnVsbHNjcmVlbigpIHtcblx0XHRjb25zdCB2aWRlbyA9IHRoaXMubWVkaWE7XG5cdFx0aWYgKHZpZGVvLnBhdXNlZCAmJiB2aWRlby5uZXR3b3JrU3RhdGUgPD0gdmlkZW8uSEFWRV9NRVRBREFUQSkge1xuXHRcdFx0Ly8gYXR0ZW1wdCB0byBwcmltZSB0aGUgdmlkZW8gZWxlbWVudCBmb3IgcHJvZ3JhbW1hdGljIGFjY2Vzc1xuXHRcdFx0Ly8gdGhpcyBpc24ndCBuZWNlc3Nhcnkgb24gdGhlIGRlc2t0b3AgYnV0IHNob3VsZG4ndCBodXJ0XG5cdFx0XHR0aGlzLnBsYXkoKTtcblxuXHRcdFx0Ly8gcGxheWluZyBhbmQgcGF1c2luZyBzeW5jaHJvbm91c2x5IGR1cmluZyB0aGUgdHJhbnNpdGlvbiB0byBmdWxsc2NyZWVuXG5cdFx0XHQvLyBjYW4gZ2V0IGlPUyB+Ni4xIGRldmljZXMgaW50byBhIHBsYXkvcGF1c2UgbG9vcFxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdHRoaXMucGF1c2UoKTtcblx0XHRcdFx0dmlkZW8ud2Via2l0RW50ZXJGdWxsU2NyZWVuKCk7XG5cdFx0XHR9LCAwKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmlkZW8ud2Via2l0RW50ZXJGdWxsU2NyZWVuKCk7XG5cdFx0fVxuXHR9XG5cblx0ZXhpdEZ1bGxzY3JlZW4oKSB7XG5cdFx0dGhpcy5tZWRpYS53ZWJraXRFeGl0RnVsbFNjcmVlbigpO1xuXHR9XG5cblx0dG9nZ2xlUGxheSAoKSB7XG5cdFx0aWYgKCF0aGlzLm1lZGlhLnBsYXllZCB8fCB0aGlzLm1lZGlhLnBhdXNlZCkge1xuXHRcdFx0dGhpcy5wbGF5KCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucGF1c2UoKTtcblx0XHR9XG5cdH1cblxuXHRwbGF5ICgpIHtcblx0XHRsZXQgZGZkID0gJC5EZWZlcnJlZCgpO1xuXHRcdGNvbnN0IHBsYXlQcm9taXNlID0gdGhpcy5tZWRpYS5wbGF5KCk7XG5cblx0XHRpZihwbGF5UHJvbWlzZSAhPSBudWxsKSB7XG5cdFx0XHRwbGF5UHJvbWlzZS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRkZmQucmVzb2x2ZSgpO1xuXHRcdFx0fSlcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZGZkLnJlc29sdmUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIGRmZC5wcm9taXNlKCk7XG5cdH1cblxuXHRwYXVzZSAoKSB7XG5cdFx0bGV0IGRmZCA9ICQuRGVmZXJyZWQoKTtcblx0XHRjb25zdCBwYXVzZVByb21pc2UgPSB0aGlzLm1lZGlhLnBhdXNlKCk7XG5cblx0XHRpZihwYXVzZVByb21pc2UgIT0gbnVsbCkge1xuXHRcdFx0cGF1c2VQcm9taXNlLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGRmZC5yZXNvbHZlKCk7XG5cdFx0XHR9KVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRkZmQucmVzb2x2ZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gZGZkLnByb21pc2UoKTtcblx0fVxuXG5cdGxvYWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWVkaWEubG9hZCgpXG5cdH1cblxuXHRfaW5pdFN1YnRpdGxlcyAoKSB7XG5cdFx0bGV0IF9zZWxmID0gdGhpcztcblx0XHR0aGlzLmVsZW1lbnQuY2hpbGRyZW4oJ3RyYWNrW2tpbmQ9XCJzdWJ0aXRsZXNcIl0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHRcdGNvbnN0IGxhbmd1YWdlID0gJCh0aGlzKS5hdHRyKCdzcmNsYW5nJyk7XG5cdFx0XHRjb25zdCB0aXRsZSA9ICQodGhpcykuYXR0cignbGFiZWwnKTtcblx0XHRcdGNvbnN0IHNyYyA9ICQodGhpcykuYXR0cignc3JjJyk7XG5cdFx0XHRpZiAodGl0bGUubGVuZ3RoID4gMCAmJiBzcmMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRfc2VsZi5zdWJ0aXRsZXMucHVzaCh7XG5cdFx0XHRcdFx0dGl0bGUgOiB0aXRsZSxcblx0XHRcdFx0XHRuYW1lIDogbGFuZ3VhZ2UsXG5cdFx0XHRcdFx0bGFuZ3VhZ2UgOiBsYW5ndWFnZVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdF9pbml0VmlkZW8gKCkge1xuXHRcdGxldCBkZmQgPSAkLkRlZmVycmVkKCk7XG5cdFx0aWYgKHRoaXMubWVkaWEucmVhZHlTdGF0ZSA+IEhUTUxNZWRpYUVsZW1lbnQuSEFWRV9OT1RISU5HKSB7XG5cdFx0XHRkZmQucmVzb2x2ZSgpO1xuXHRcdFx0dGhpcy5fdGV4dFRyYWNrc0hhY2soKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JCh0aGlzLm1lZGlhKS5vbmUoJ2xvYWRlZG1ldGFkYXRhJywgKGUpID0+IHtcblx0XHRcdFx0ZGZkLnJlc29sdmUoKVxuXHRcdFx0XHR0aGlzLl90ZXh0VHJhY2tzSGFjaygpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdHJldHVybiBkZmQucHJvbWlzZSgpO1xuXHR9XG5cblx0X3RleHRUcmFja3NIYWNrICgpIHtcblxuXHRcdC8vIFRoaXMgaXMgZ2VuZXJhbGx5IGZvciBGaXJlZm94IG9ubHlcblx0XHQvLyBiZWNhdXNlIGl0IHNvbWVob3cgcmVzZXRzIHRyYWNrIGxpc3Rcblx0XHQvLyBmb3IgdmlkZW8gZWxlbWVudCBhZnRlciBET00gbWFuaXB1bGF0aW9uLlxuXG5cdFx0aWYgKHRoaXMubWVkaWEudGV4dFRyYWNrcy5sZW5ndGggPT09IDAgJiYgdGhpcy5zdWJ0aXRsZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0dGhpcy5lbGVtZW50LmNoaWxkcmVuKCd0cmFja1traW5kPVwic3VidGl0bGVzXCJdJykucmVtb3ZlKCk7XG5cdFx0XHRmb3IgKHZhciBpIGluIHRoaXMuc3VidGl0bGVzKSB7XG5cdFx0XHRcdGlmICh0aGlzLnN1YnRpdGxlcy5oYXNPd25Qcm9wZXJ0eShpKSkge1xuXHRcdFx0XHRcdHRoaXMuZWxlbWVudFxuXHRcdFx0XHRcdFx0LmFwcGVuZCgkKCc8dHJhY2svPicpXG5cdFx0XHRcdFx0XHRcdC5hdHRyKCdsYWJlbCcsIHRoaXMuc3VidGl0bGVzWyBpIF0udGl0bGUpXG5cdFx0XHRcdFx0XHRcdC5hdHRyKCdzcmMnLCB0aGlzLnN1YnRpdGxlc1sgaSBdLnNyYylcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ3NyY2xhbmcnLCB0aGlzLnN1YnRpdGxlc1sgaSBdLmxhbmd1YWdlKVxuXHRcdFx0XHRcdFx0XHQuYXR0cignaWQnLCB0aGlzLnN1YnRpdGxlc1sgaSBdLmxhbmd1YWdlKVxuXHRcdFx0XHRcdFx0XHQuYXR0cigna2luZCcsICdzdWJ0aXRsZXMnKSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxufVxuLyoqXG4gKiBNaW4gcmF0ZSBmb3IgYW5kcm9pZCBhbmQgaW9zXG4gKi9cbkh0bWw1Lk1PQklMRV9NSU5fUkFURSA9IDAuNTtcblxuLyoqXG4gKiBNYXggcmF0ZSBmb3IgYW5kcm9pZCBhbmQgaW9zXG4gKi9cbkh0bWw1Lk1PQklMRV9NQVhfUkFURSA9IDI7XG5cbkh0bWw1LlNBRkFSSV9NSU5fUkFURSA9IDAuNTtcblxuSHRtbDUuU0FGQVJJX01BWF9SQVRFID0gMjtcblxuSHRtbDUuVEVTVF9WSURFTyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJyk7XG5cbi8qKlxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqICAgICAgICAgLSBUcnVlIGlmIHZvbHVtZSBjYW4gYmUgY29udHJvbGxlZFxuICogICAgICAgICAtIEZhbHNlIG90aGVyd2lzZVxuICovXG5IdG1sNS5jYW5Db250cm9sVm9sdW1lID0gZnVuY3Rpb24oKSB7XG5cdC8vIElFIHdpbGwgZXJyb3IgaWYgV2luZG93cyBNZWRpYSBQbGF5ZXIgbm90IGluc3RhbGxlZCAjMzMxNVxuXHR0cnkge1xuXHRcdGNvbnN0IHZvbHVtZSA9IEh0bWw1LlRFU1RfVklERU8udm9sdW1lO1xuXG5cdFx0SHRtbDUuVEVTVF9WSURFTy52b2x1bWUgPSAodm9sdW1lIC8gMikgKyAwLjE7XG5cdFx0cmV0dXJuIHZvbHVtZSAhPT0gSHRtbDUuVEVTVF9WSURFTy52b2x1bWU7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn07XG5cbkh0bWw1LnByb3RvdHlwZS5mZWF0dXJlQ29udHJvbFZvbHVtZSA9IEh0bWw1LmNhbkNvbnRyb2xWb2x1bWUoKTtcblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdIdG1sNScsIEh0bWw1KTtcbmV4cG9ydCBkZWZhdWx0IEh0bWw1O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2VudGl0eS9IdG1sNS5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50cy9Db21wb25lbnQnO1xuaW1wb3J0IENvb2tpZSBmcm9tICcuLi91dGlscy9jb29raWUnO1xuaW1wb3J0IE1lZGlhRXJyb3IgZnJvbSAnLi4vTWVkaWFFcnJvcic7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5jbGFzcyBFbnRpdHkgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXHRcdHRoaXMuX3RyaWdnZXJTdGFjayA9IFtdO1xuXHRcdHRoaXMuX3N0b3BMaXN0ZW4gPSBmYWxzZTtcblxuXHRcdGlmICh0aGlzLnBsYXllci5vcHRpb25zLnNyYyA9PSBudWxsKSB7XG5cdFx0XHR0aGlzLnBsYXllci5lcnJvciA9IG5ldyBNZWRpYUVycm9yKCfQktC40LTQtdC+0YTQsNC50Lsg0L3QtSDQvdCw0LnQtNC10L0uJyk7XG5cdFx0fVxuXG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHR0cmlnZ2VyKC4uLmFyZ3MpIHtcblx0XHRpZighdGhpcy5fc3RvcExpc3Rlbikge1xuXHRcdFx0dGhpcy5fdHJpZ2dlclN0YWNrLnB1c2goYXJncyk7XG5cdFx0fVxuXHRcdHN1cGVyLnRyaWdnZXIoLi4uYXJncyk7XG5cdH1cblxuXHRpbml0KCkge1xuXHRcdHRoaXMuX3N0b3BMaXN0ZW4gPSB0cnVlO1xuXHRcdHRoaXMuX3RyaWdnZXJTdGFjay5mb3JFYWNoKGFyZ3MgPT4ge1xuXHRcdFx0dGhpcy50cmlnZ2VyKC4uLmFyZ3MpO1xuXHRcdH0pO1xuXHR9XG5cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50ID0gJCgnPGRpdiAvPicpO1xuXHR9XG5cblx0c2V0IHBvc3Rlcih1cmwpIHtcblx0XHR0aGlzLl9wb3N0ZXIgPSB1cmw7XG5cdFx0dGhpcy50cmlnZ2VyKCdwb3N0ZXJjaGFuZ2UnLCB7IHVybCB9KTtcblx0fVxuXG5cblx0Z2V0IHBvc3RlcigpIHtcblx0XHRyZXR1cm4gdGhpcy5fcG9zdGVyO1xuXHR9XG5cblx0Z2V0IGN1cnJlbnRUaW1lKCkge1xuXHRcdHJldHVyblxuXHR9XG5cblx0c2V0IGN1cnJlbnRUaW1lKHZhbHVlKSB7XG5cblx0fVxuXG5cdGdldCBkdXJhdGlvbigpIHtcblx0XHRyZXR1cm5cblx0fVxuXG5cdHNldCBtdXRlZCh2YWx1ZSkge1xuXG5cdH1cblxuXHRnZXQgbXV0ZWQoKSB7XG5cblx0fVxuXG5cdGdldCBoZWlnaHQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudC5pbm5lckhlaWdodCgpXG5cdH1cblxuXHRnZXQgd2lkdGgoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudC53aWR0aCgpXG5cdH1cblxuXHRzZXQgcmF0ZU1heCh2YWx1ZSkge1xuXHRcdHRoaXMuX3JhdGVNYXggPSB2YWx1ZTtcblx0fVxuXG5cdHNldCByYXRlTWluKHZhbHVlKSB7XG5cdFx0dGhpcy5fcmF0ZU1pbiA9IHZhbHVlO1xuXHR9XG5cblx0Z2V0IHJhdGVNYXgoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3JhdGVNYXggfHwgdGhpcy5wbGF5ZXIub3B0aW9ucy5yYXRlLm1heDtcblxuXHR9XG5cblx0Z2V0IHJhdGVNaW4oKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3JhdGVNaW4gfHwgdGhpcy5wbGF5ZXIub3B0aW9ucy5yYXRlLm1pbjtcblx0fVxuXG5cdGdldCByYXRlKCkge1xuXHR9XG5cblx0c2V0IHJhdGUodmFsdWUpIHtcblx0XHRpZih2YWx1ZSA+IHRoaXMucmF0ZU1heCB8fCB2YWx1ZSA8IHRoaXMucmF0ZU1pbikgcmV0dXJuO1xuXHRcdENvb2tpZS5zZXQoJ3JhdGUnLCB2YWx1ZSk7XG5cdH1cblxuXHRpbmNyZWFzZVJhdGUoKSB7XG5cdFx0dGhpcy5yYXRlICs9IHRoaXMucGxheWVyLm9wdGlvbnMucmF0ZS5zdGVwO1xuXHR9XG5cblx0ZGVjcmVhc2VSYXRlKCkge1xuXHRcdHRoaXMucmF0ZSAtPSB0aGlzLnBsYXllci5vcHRpb25zLnJhdGUuc3RlcDtcblx0fVxuXG5cdHNldCBwbGF5YmFja1F1YWxpdHkobmFtZSkge1xuXHRcdGNvbnN0IGxldmVscyA9IHRoaXMuZ2V0QXZhaWxhYmxlUXVhbGl0eUxldmVscygpO1xuXHRcdGlmKCFsZXZlbHMuc29tZShvYmogPT4gbmFtZSBpbiBvYmopKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHR9XG5cblx0Z2V0IHBsYXliYWNrUXVhbGl0eSgpIHtcblxuXHR9XG5cblx0Z2V0IHBhdXNlZCgpIHtcblxuXHR9XG5cblx0Z2V0IHBsYXllZCgpIHtcblxuXHR9XG5cblx0Z2V0IGRlZmF1bHRSYXRlKCkge1xuXHRcdHJldHVybiBDb29raWUuZ2V0KCdyYXRlJykgfHwgdGhpcy5wbGF5ZXIub3B0aW9ucy5yYXRlLmRlZmF1bHRcblx0fVxuXG5cdGdldCBkZWZhdWx0Vm9sdW1lICgpIHtcblx0XHRyZXR1cm4gQ29va2llLmdldCgndm9sdW1lJykgfHwgdGhpcy5wbGF5ZXIub3B0aW9ucy52b2x1bWUuZGVmYXVsdDtcblx0fVxuXG5cdHNldCB2b2x1bWUodmFsdWUpIHtcblx0XHRjb25zdCBwbGF5ZXIgPSB0aGlzLnBsYXllcjtcblx0XHRpZih2YWx1ZSA8IDEgJiYgdmFsdWUgPiBwbGF5ZXIub3B0aW9ucy52b2x1bWUubXV0ZWxpbWl0KSB7XG5cdFx0XHRDb29raWUuc2V0KCd2b2x1bWUnLCB2YWx1ZSk7XG5cdFx0fVxuXHR9XG5cblx0c2V0IHNyYyAodmFsdWUpIHtcblxuXHR9XG5cblx0Z2V0IHNyYygpIHtcblxuXHR9XG5cblx0c3VwcG9ydHNGdWxsU2NyZWVuKCkge1xuXG5cdH1cblxuXHRwbGF5KCkge1xuXG5cdH1cblxuXHRwYXVzZSAoKSB7XG5cblx0fVxuXG5cdGxvYWQoKSB7XG5cdH1cblxuXHR0b2dnbGVQbGF5ICgpIHtcblx0XHRpZiAodGhpcy5wYXVzZWQpIHtcblx0XHRcdHRoaXMucGxheSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnBhdXNlKCk7XG5cdFx0fVxuXHR9XG5cblx0X2luaXRSYXRlICgpIHtcblx0XHR0aGlzLnJhdGUgPSB0aGlzLmRlZmF1bHRSYXRlO1xuXHR9XG5cblx0X2luaXRWb2x1bWUgKCkge1xuXHRcdHRoaXMudm9sdW1lID0gdGhpcy5kZWZhdWx0Vm9sdW1lO1xuXHR9XG5cbn1cbkVudGl0eS5wcm90b3R5cGUuZmVhdHVyZUNvbnRyb2xWb2x1bWUgPSB0cnVlO1xuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ0VudGl0eScsIEVudGl0eSk7XG5cbmV4cG9ydCBkZWZhdWx0IEVudGl0eTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9lbnRpdHkvRW50aXR5LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZGVmaW5lID0gcmVxdWlyZSgnZGVmaW5lLXByb3BlcnRpZXMnKTtcbnZhciBFUyA9IHJlcXVpcmUoJ2VzLWFic3RyYWN0L2VzNicpO1xuXG52YXIgaW1wbGVtZW50YXRpb24gPSByZXF1aXJlKCcuL2ltcGxlbWVudGF0aW9uJyk7XG52YXIgZ2V0UG9seWZpbGwgPSByZXF1aXJlKCcuL3BvbHlmaWxsJyk7XG52YXIgc2hpbSA9IHJlcXVpcmUoJy4vc2hpbScpO1xuXG52YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG5cbnZhciBwb2x5ZmlsbCA9IGdldFBvbHlmaWxsKCk7XG5cbnZhciBib3VuZEZpbmRTaGltID0gZnVuY3Rpb24gZmluZChhcnJheSwgcHJlZGljYXRlKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcblx0RVMuUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcnJheSk7XG5cdHZhciBhcmdzID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuXHRyZXR1cm4gcG9seWZpbGwuYXBwbHkoYXJyYXksIGFyZ3MpO1xufTtcblxuZGVmaW5lKGJvdW5kRmluZFNoaW0sIHtcblx0Z2V0UG9seWZpbGw6IGdldFBvbHlmaWxsLFxuXHRpbXBsZW1lbnRhdGlvbjogaW1wbGVtZW50YXRpb24sXG5cdHNoaW06IHNoaW1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJvdW5kRmluZFNoaW07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYXJyYXkucHJvdG90eXBlLmZpbmQvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIga2V5cyA9IHJlcXVpcmUoJ29iamVjdC1rZXlzJyk7XG52YXIgZm9yZWFjaCA9IHJlcXVpcmUoJ2ZvcmVhY2gnKTtcbnZhciBoYXNTeW1ib2xzID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgU3ltYm9sKCkgPT09ICdzeW1ib2wnO1xuXG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG52YXIgaXNGdW5jdGlvbiA9IGZ1bmN0aW9uIChmbikge1xuXHRyZXR1cm4gdHlwZW9mIGZuID09PSAnZnVuY3Rpb24nICYmIHRvU3RyLmNhbGwoZm4pID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xufTtcblxudmFyIGFyZVByb3BlcnR5RGVzY3JpcHRvcnNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoKSB7XG5cdHZhciBvYmogPSB7fTtcblx0dHJ5IHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCAneCcsIHsgZW51bWVyYWJsZTogZmFsc2UsIHZhbHVlOiBvYmogfSk7XG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzLCBuby1yZXN0cmljdGVkLXN5bnRheCAqL1xuICAgICAgICBmb3IgKHZhciBfIGluIG9iaikgeyByZXR1cm4gZmFsc2U7IH1cbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycywgbm8tcmVzdHJpY3RlZC1zeW50YXggKi9cblx0XHRyZXR1cm4gb2JqLnggPT09IG9iajtcblx0fSBjYXRjaCAoZSkgeyAvKiB0aGlzIGlzIElFIDguICovXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xudmFyIHN1cHBvcnRzRGVzY3JpcHRvcnMgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgYXJlUHJvcGVydHlEZXNjcmlwdG9yc1N1cHBvcnRlZCgpO1xuXG52YXIgZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lLCB2YWx1ZSwgcHJlZGljYXRlKSB7XG5cdGlmIChuYW1lIGluIG9iamVjdCAmJiAoIWlzRnVuY3Rpb24ocHJlZGljYXRlKSB8fCAhcHJlZGljYXRlKCkpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGlmIChzdXBwb3J0c0Rlc2NyaXB0b3JzKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG9iamVjdCwgbmFtZSwge1xuXHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdFx0ZW51bWVyYWJsZTogZmFsc2UsXG5cdFx0XHR2YWx1ZTogdmFsdWUsXG5cdFx0XHR3cml0YWJsZTogdHJ1ZVxuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdG9iamVjdFtuYW1lXSA9IHZhbHVlO1xuXHR9XG59O1xuXG52YXIgZGVmaW5lUHJvcGVydGllcyA9IGZ1bmN0aW9uIChvYmplY3QsIG1hcCkge1xuXHR2YXIgcHJlZGljYXRlcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyID8gYXJndW1lbnRzWzJdIDoge307XG5cdHZhciBwcm9wcyA9IGtleXMobWFwKTtcblx0aWYgKGhhc1N5bWJvbHMpIHtcblx0XHRwcm9wcyA9IHByb3BzLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG1hcCkpO1xuXHR9XG5cdGZvcmVhY2gocHJvcHMsIGZ1bmN0aW9uIChuYW1lKSB7XG5cdFx0ZGVmaW5lUHJvcGVydHkob2JqZWN0LCBuYW1lLCBtYXBbbmFtZV0sIHByZWRpY2F0ZXNbbmFtZV0pO1xuXHR9KTtcbn07XG5cbmRlZmluZVByb3BlcnRpZXMuc3VwcG9ydHNEZXNjcmlwdG9ycyA9ICEhc3VwcG9ydHNEZXNjcmlwdG9ycztcblxubW9kdWxlLmV4cG9ydHMgPSBkZWZpbmVQcm9wZXJ0aWVzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2RlZmluZS1wcm9wZXJ0aWVzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxuLy8gbW9kaWZpZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZXMtc2hpbXMvZXM1LXNoaW1cbnZhciBoYXMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbnZhciBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcbnZhciBpc0FyZ3MgPSByZXF1aXJlKCcuL2lzQXJndW1lbnRzJyk7XG52YXIgaXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbnZhciBoYXNEb250RW51bUJ1ZyA9ICFpc0VudW1lcmFibGUuY2FsbCh7IHRvU3RyaW5nOiBudWxsIH0sICd0b1N0cmluZycpO1xudmFyIGhhc1Byb3RvRW51bUJ1ZyA9IGlzRW51bWVyYWJsZS5jYWxsKGZ1bmN0aW9uICgpIHt9LCAncHJvdG90eXBlJyk7XG52YXIgZG9udEVudW1zID0gW1xuXHQndG9TdHJpbmcnLFxuXHQndG9Mb2NhbGVTdHJpbmcnLFxuXHQndmFsdWVPZicsXG5cdCdoYXNPd25Qcm9wZXJ0eScsXG5cdCdpc1Byb3RvdHlwZU9mJyxcblx0J3Byb3BlcnR5SXNFbnVtZXJhYmxlJyxcblx0J2NvbnN0cnVjdG9yJ1xuXTtcbnZhciBlcXVhbHNDb25zdHJ1Y3RvclByb3RvdHlwZSA9IGZ1bmN0aW9uIChvKSB7XG5cdHZhciBjdG9yID0gby5jb25zdHJ1Y3Rvcjtcblx0cmV0dXJuIGN0b3IgJiYgY3Rvci5wcm90b3R5cGUgPT09IG87XG59O1xudmFyIGV4Y2x1ZGVkS2V5cyA9IHtcblx0JGNvbnNvbGU6IHRydWUsXG5cdCRleHRlcm5hbDogdHJ1ZSxcblx0JGZyYW1lOiB0cnVlLFxuXHQkZnJhbWVFbGVtZW50OiB0cnVlLFxuXHQkZnJhbWVzOiB0cnVlLFxuXHQkaW5uZXJIZWlnaHQ6IHRydWUsXG5cdCRpbm5lcldpZHRoOiB0cnVlLFxuXHQkb3V0ZXJIZWlnaHQ6IHRydWUsXG5cdCRvdXRlcldpZHRoOiB0cnVlLFxuXHQkcGFnZVhPZmZzZXQ6IHRydWUsXG5cdCRwYWdlWU9mZnNldDogdHJ1ZSxcblx0JHBhcmVudDogdHJ1ZSxcblx0JHNjcm9sbExlZnQ6IHRydWUsXG5cdCRzY3JvbGxUb3A6IHRydWUsXG5cdCRzY3JvbGxYOiB0cnVlLFxuXHQkc2Nyb2xsWTogdHJ1ZSxcblx0JHNlbGY6IHRydWUsXG5cdCR3ZWJraXRJbmRleGVkREI6IHRydWUsXG5cdCR3ZWJraXRTdG9yYWdlSW5mbzogdHJ1ZSxcblx0JHdpbmRvdzogdHJ1ZVxufTtcbnZhciBoYXNBdXRvbWF0aW9uRXF1YWxpdHlCdWcgPSAoZnVuY3Rpb24gKCkge1xuXHQvKiBnbG9iYWwgd2luZG93ICovXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgeyByZXR1cm4gZmFsc2U7IH1cblx0Zm9yICh2YXIgayBpbiB3aW5kb3cpIHtcblx0XHR0cnkge1xuXHRcdFx0aWYgKCFleGNsdWRlZEtleXNbJyQnICsga10gJiYgaGFzLmNhbGwod2luZG93LCBrKSAmJiB3aW5kb3dba10gIT09IG51bGwgJiYgdHlwZW9mIHdpbmRvd1trXSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRlcXVhbHNDb25zdHJ1Y3RvclByb3RvdHlwZSh3aW5kb3dba10pO1xuXHRcdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIGZhbHNlO1xufSgpKTtcbnZhciBlcXVhbHNDb25zdHJ1Y3RvclByb3RvdHlwZUlmTm90QnVnZ3kgPSBmdW5jdGlvbiAobykge1xuXHQvKiBnbG9iYWwgd2luZG93ICovXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCAhaGFzQXV0b21hdGlvbkVxdWFsaXR5QnVnKSB7XG5cdFx0cmV0dXJuIGVxdWFsc0NvbnN0cnVjdG9yUHJvdG90eXBlKG8pO1xuXHR9XG5cdHRyeSB7XG5cdFx0cmV0dXJuIGVxdWFsc0NvbnN0cnVjdG9yUHJvdG90eXBlKG8pO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xuXG52YXIga2V5c1NoaW0gPSBmdW5jdGlvbiBrZXlzKG9iamVjdCkge1xuXHR2YXIgaXNPYmplY3QgPSBvYmplY3QgIT09IG51bGwgJiYgdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCc7XG5cdHZhciBpc0Z1bmN0aW9uID0gdG9TdHIuY2FsbChvYmplY3QpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xuXHR2YXIgaXNBcmd1bWVudHMgPSBpc0FyZ3Mob2JqZWN0KTtcblx0dmFyIGlzU3RyaW5nID0gaXNPYmplY3QgJiYgdG9TdHIuY2FsbChvYmplY3QpID09PSAnW29iamVjdCBTdHJpbmddJztcblx0dmFyIHRoZUtleXMgPSBbXTtcblxuXHRpZiAoIWlzT2JqZWN0ICYmICFpc0Z1bmN0aW9uICYmICFpc0FyZ3VtZW50cykge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5rZXlzIGNhbGxlZCBvbiBhIG5vbi1vYmplY3QnKTtcblx0fVxuXG5cdHZhciBza2lwUHJvdG8gPSBoYXNQcm90b0VudW1CdWcgJiYgaXNGdW5jdGlvbjtcblx0aWYgKGlzU3RyaW5nICYmIG9iamVjdC5sZW5ndGggPiAwICYmICFoYXMuY2FsbChvYmplY3QsIDApKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBvYmplY3QubGVuZ3RoOyArK2kpIHtcblx0XHRcdHRoZUtleXMucHVzaChTdHJpbmcoaSkpO1xuXHRcdH1cblx0fVxuXG5cdGlmIChpc0FyZ3VtZW50cyAmJiBvYmplY3QubGVuZ3RoID4gMCkge1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgb2JqZWN0Lmxlbmd0aDsgKytqKSB7XG5cdFx0XHR0aGVLZXlzLnB1c2goU3RyaW5nKGopKTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0Zm9yICh2YXIgbmFtZSBpbiBvYmplY3QpIHtcblx0XHRcdGlmICghKHNraXBQcm90byAmJiBuYW1lID09PSAncHJvdG90eXBlJykgJiYgaGFzLmNhbGwob2JqZWN0LCBuYW1lKSkge1xuXHRcdFx0XHR0aGVLZXlzLnB1c2goU3RyaW5nKG5hbWUpKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRpZiAoaGFzRG9udEVudW1CdWcpIHtcblx0XHR2YXIgc2tpcENvbnN0cnVjdG9yID0gZXF1YWxzQ29uc3RydWN0b3JQcm90b3R5cGVJZk5vdEJ1Z2d5KG9iamVjdCk7XG5cblx0XHRmb3IgKHZhciBrID0gMDsgayA8IGRvbnRFbnVtcy5sZW5ndGg7ICsraykge1xuXHRcdFx0aWYgKCEoc2tpcENvbnN0cnVjdG9yICYmIGRvbnRFbnVtc1trXSA9PT0gJ2NvbnN0cnVjdG9yJykgJiYgaGFzLmNhbGwob2JqZWN0LCBkb250RW51bXNba10pKSB7XG5cdFx0XHRcdHRoZUtleXMucHVzaChkb250RW51bXNba10pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gdGhlS2V5cztcbn07XG5cbmtleXNTaGltLnNoaW0gPSBmdW5jdGlvbiBzaGltT2JqZWN0S2V5cygpIHtcblx0aWYgKE9iamVjdC5rZXlzKSB7XG5cdFx0dmFyIGtleXNXb3Jrc1dpdGhBcmd1bWVudHMgPSAoZnVuY3Rpb24gKCkge1xuXHRcdFx0Ly8gU2FmYXJpIDUuMCBidWdcblx0XHRcdHJldHVybiAoT2JqZWN0LmtleXMoYXJndW1lbnRzKSB8fCAnJykubGVuZ3RoID09PSAyO1xuXHRcdH0oMSwgMikpO1xuXHRcdGlmICgha2V5c1dvcmtzV2l0aEFyZ3VtZW50cykge1xuXHRcdFx0dmFyIG9yaWdpbmFsS2V5cyA9IE9iamVjdC5rZXlzO1xuXHRcdFx0T2JqZWN0LmtleXMgPSBmdW5jdGlvbiBrZXlzKG9iamVjdCkge1xuXHRcdFx0XHRpZiAoaXNBcmdzKG9iamVjdCkpIHtcblx0XHRcdFx0XHRyZXR1cm4gb3JpZ2luYWxLZXlzKHNsaWNlLmNhbGwob2JqZWN0KSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuIG9yaWdpbmFsS2V5cyhvYmplY3QpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRPYmplY3Qua2V5cyA9IGtleXNTaGltO1xuXHR9XG5cdHJldHVybiBPYmplY3Qua2V5cyB8fCBrZXlzU2hpbTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ga2V5c1NoaW07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vb2JqZWN0LWtleXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQXJndW1lbnRzKHZhbHVlKSB7XG5cdHZhciBzdHIgPSB0b1N0ci5jYWxsKHZhbHVlKTtcblx0dmFyIGlzQXJncyA9IHN0ciA9PT0gJ1tvYmplY3QgQXJndW1lbnRzXSc7XG5cdGlmICghaXNBcmdzKSB7XG5cdFx0aXNBcmdzID0gc3RyICE9PSAnW29iamVjdCBBcnJheV0nICYmXG5cdFx0XHR2YWx1ZSAhPT0gbnVsbCAmJlxuXHRcdFx0dHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJlxuXHRcdFx0dHlwZW9mIHZhbHVlLmxlbmd0aCA9PT0gJ251bWJlcicgJiZcblx0XHRcdHZhbHVlLmxlbmd0aCA+PSAwICYmXG5cdFx0XHR0b1N0ci5jYWxsKHZhbHVlLmNhbGxlZSkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG5cdH1cblx0cmV0dXJuIGlzQXJncztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vb2JqZWN0LWtleXMvaXNBcmd1bWVudHMuanNcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiXG52YXIgaGFzT3duID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZm9yRWFjaCAob2JqLCBmbiwgY3R4KSB7XG4gICAgaWYgKHRvU3RyaW5nLmNhbGwoZm4pICE9PSAnW29iamVjdCBGdW5jdGlvbl0nKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2l0ZXJhdG9yIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICAgIH1cbiAgICB2YXIgbCA9IG9iai5sZW5ndGg7XG4gICAgaWYgKGwgPT09ICtsKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBmbi5jYWxsKGN0eCwgb2JqW2ldLCBpLCBvYmopO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZm9yICh2YXIgayBpbiBvYmopIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChvYmosIGspKSB7XG4gICAgICAgICAgICAgICAgZm4uY2FsbChjdHgsIG9ialtrXSwgaywgb2JqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9mb3JlYWNoL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbnZhciBoYXNTeW1ib2xzID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSAnc3ltYm9sJztcbnZhciBzeW1ib2xUb1N0ciA9IGhhc1N5bWJvbHMgPyBTeW1ib2wucHJvdG90eXBlLnRvU3RyaW5nIDogdG9TdHI7XG5cbnZhciAkaXNOYU4gPSByZXF1aXJlKCcuL2hlbHBlcnMvaXNOYU4nKTtcbnZhciAkaXNGaW5pdGUgPSByZXF1aXJlKCcuL2hlbHBlcnMvaXNGaW5pdGUnKTtcbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIgfHwgTWF0aC5wb3coMiwgNTMpIC0gMTtcblxudmFyIGFzc2lnbiA9IHJlcXVpcmUoJy4vaGVscGVycy9hc3NpZ24nKTtcbnZhciBzaWduID0gcmVxdWlyZSgnLi9oZWxwZXJzL3NpZ24nKTtcbnZhciBtb2QgPSByZXF1aXJlKCcuL2hlbHBlcnMvbW9kJyk7XG52YXIgaXNQcmltaXRpdmUgPSByZXF1aXJlKCcuL2hlbHBlcnMvaXNQcmltaXRpdmUnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJ2VzLXRvLXByaW1pdGl2ZS9lczYnKTtcbnZhciBwYXJzZUludGVnZXIgPSBwYXJzZUludDtcbnZhciBiaW5kID0gcmVxdWlyZSgnZnVuY3Rpb24tYmluZCcpO1xudmFyIHN0clNsaWNlID0gYmluZC5jYWxsKEZ1bmN0aW9uLmNhbGwsIFN0cmluZy5wcm90b3R5cGUuc2xpY2UpO1xudmFyIGlzQmluYXJ5ID0gYmluZC5jYWxsKEZ1bmN0aW9uLmNhbGwsIFJlZ0V4cC5wcm90b3R5cGUudGVzdCwgL14wYlswMV0rJC9pKTtcbnZhciBpc09jdGFsID0gYmluZC5jYWxsKEZ1bmN0aW9uLmNhbGwsIFJlZ0V4cC5wcm90b3R5cGUudGVzdCwgL14wb1swLTddKyQvaSk7XG52YXIgbm9uV1MgPSBbJ1xcdTAwODUnLCAnXFx1MjAwYicsICdcXHVmZmZlJ10uam9pbignJyk7XG52YXIgbm9uV1NyZWdleCA9IG5ldyBSZWdFeHAoJ1snICsgbm9uV1MgKyAnXScsICdnJyk7XG52YXIgaGFzTm9uV1MgPSBiaW5kLmNhbGwoRnVuY3Rpb24uY2FsbCwgUmVnRXhwLnByb3RvdHlwZS50ZXN0LCBub25XU3JlZ2V4KTtcbnZhciBpbnZhbGlkSGV4TGl0ZXJhbCA9IC9eWy0rXTB4WzAtOWEtZl0rJC9pO1xudmFyIGlzSW52YWxpZEhleExpdGVyYWwgPSBiaW5kLmNhbGwoRnVuY3Rpb24uY2FsbCwgUmVnRXhwLnByb3RvdHlwZS50ZXN0LCBpbnZhbGlkSGV4TGl0ZXJhbCk7XG5cbi8vIHdoaXRlc3BhY2UgZnJvbTogaHR0cDovL2VzNS5naXRodWIuaW8vI3gxNS41LjQuMjBcbi8vIGltcGxlbWVudGF0aW9uIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2VzLXNoaW1zL2VzNS1zaGltL2Jsb2IvdjMuNC4wL2VzNS1zaGltLmpzI0wxMzA0LUwxMzI0XG52YXIgd3MgPSBbXG5cdCdcXHgwOVxceDBBXFx4MEJcXHgwQ1xceDBEXFx4MjBcXHhBMFxcdTE2ODBcXHUxODBFXFx1MjAwMFxcdTIwMDFcXHUyMDAyXFx1MjAwMycsXG5cdCdcXHUyMDA0XFx1MjAwNVxcdTIwMDZcXHUyMDA3XFx1MjAwOFxcdTIwMDlcXHUyMDBBXFx1MjAyRlxcdTIwNUZcXHUzMDAwXFx1MjAyOCcsXG5cdCdcXHUyMDI5XFx1RkVGRidcbl0uam9pbignJyk7XG52YXIgdHJpbVJlZ2V4ID0gbmV3IFJlZ0V4cCgnKF5bJyArIHdzICsgJ10rKXwoWycgKyB3cyArICddKyQpJywgJ2cnKTtcbnZhciByZXBsYWNlID0gYmluZC5jYWxsKEZ1bmN0aW9uLmNhbGwsIFN0cmluZy5wcm90b3R5cGUucmVwbGFjZSk7XG52YXIgdHJpbSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRyZXR1cm4gcmVwbGFjZSh2YWx1ZSwgdHJpbVJlZ2V4LCAnJyk7XG59O1xuXG52YXIgRVM1ID0gcmVxdWlyZSgnLi9lczUnKTtcblxudmFyIGhhc1JlZ0V4cE1hdGNoZXIgPSByZXF1aXJlKCdpcy1yZWdleCcpO1xuXG4vLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtYWJzdHJhY3Qtb3BlcmF0aW9uc1xudmFyIEVTNiA9IGFzc2lnbihhc3NpZ24oe30sIEVTNSksIHtcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtY2FsbC1mLXYtYXJnc1xuXHRDYWxsOiBmdW5jdGlvbiBDYWxsKEYsIFYpIHtcblx0XHR2YXIgYXJncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyID8gYXJndW1lbnRzWzJdIDogW107XG5cdFx0aWYgKCF0aGlzLklzQ2FsbGFibGUoRikpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoRiArICcgaXMgbm90IGEgZnVuY3Rpb24nKTtcblx0XHR9XG5cdFx0cmV0dXJuIEYuYXBwbHkoViwgYXJncyk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvcHJpbWl0aXZlXG5cdFRvUHJpbWl0aXZlOiB0b1ByaW1pdGl2ZSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG9ib29sZWFuXG5cdC8vIFRvQm9vbGVhbjogRVM1LlRvQm9vbGVhbixcblxuXHQvLyBodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtdG9udW1iZXJcblx0VG9OdW1iZXI6IGZ1bmN0aW9uIFRvTnVtYmVyKGFyZ3VtZW50KSB7XG5cdFx0dmFyIHZhbHVlID0gaXNQcmltaXRpdmUoYXJndW1lbnQpID8gYXJndW1lbnQgOiB0b1ByaW1pdGl2ZShhcmd1bWVudCwgJ251bWJlcicpO1xuXHRcdGlmICh0eXBlb2YgdmFsdWUgPT09ICdzeW1ib2wnKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCBhIFN5bWJvbCB2YWx1ZSB0byBhIG51bWJlcicpO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuXHRcdFx0aWYgKGlzQmluYXJ5KHZhbHVlKSkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5Ub051bWJlcihwYXJzZUludGVnZXIoc3RyU2xpY2UodmFsdWUsIDIpLCAyKSk7XG5cdFx0XHR9IGVsc2UgaWYgKGlzT2N0YWwodmFsdWUpKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLlRvTnVtYmVyKHBhcnNlSW50ZWdlcihzdHJTbGljZSh2YWx1ZSwgMiksIDgpKTtcblx0XHRcdH0gZWxzZSBpZiAoaGFzTm9uV1ModmFsdWUpIHx8IGlzSW52YWxpZEhleExpdGVyYWwodmFsdWUpKSB7XG5cdFx0XHRcdHJldHVybiBOYU47XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIgdHJpbW1lZCA9IHRyaW0odmFsdWUpO1xuXHRcdFx0XHRpZiAodHJpbW1lZCAhPT0gdmFsdWUpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5Ub051bWJlcih0cmltbWVkKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gTnVtYmVyKHZhbHVlKTtcblx0fSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG9pbnRlZ2VyXG5cdC8vIFRvSW50ZWdlcjogRVM1LlRvTnVtYmVyLFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b2ludDMyXG5cdC8vIFRvSW50MzI6IEVTNS5Ub0ludDMyLFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b3VpbnQzMlxuXHQvLyBUb1VpbnQzMjogRVM1LlRvVWludDMyLFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b2ludDE2XG5cdFRvSW50MTY6IGZ1bmN0aW9uIFRvSW50MTYoYXJndW1lbnQpIHtcblx0XHR2YXIgaW50MTZiaXQgPSB0aGlzLlRvVWludDE2KGFyZ3VtZW50KTtcblx0XHRyZXR1cm4gaW50MTZiaXQgPj0gMHg4MDAwID8gaW50MTZiaXQgLSAweDEwMDAwIDogaW50MTZiaXQ7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvdWludDE2XG5cdC8vIFRvVWludDE2OiBFUzUuVG9VaW50MTYsXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvaW50OFxuXHRUb0ludDg6IGZ1bmN0aW9uIFRvSW50OChhcmd1bWVudCkge1xuXHRcdHZhciBpbnQ4Yml0ID0gdGhpcy5Ub1VpbnQ4KGFyZ3VtZW50KTtcblx0XHRyZXR1cm4gaW50OGJpdCA+PSAweDgwID8gaW50OGJpdCAtIDB4MTAwIDogaW50OGJpdDtcblx0fSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG91aW50OFxuXHRUb1VpbnQ4OiBmdW5jdGlvbiBUb1VpbnQ4KGFyZ3VtZW50KSB7XG5cdFx0dmFyIG51bWJlciA9IHRoaXMuVG9OdW1iZXIoYXJndW1lbnQpO1xuXHRcdGlmICgkaXNOYU4obnVtYmVyKSB8fCBudW1iZXIgPT09IDAgfHwgISRpc0Zpbml0ZShudW1iZXIpKSB7IHJldHVybiAwOyB9XG5cdFx0dmFyIHBvc0ludCA9IHNpZ24obnVtYmVyKSAqIE1hdGguZmxvb3IoTWF0aC5hYnMobnVtYmVyKSk7XG5cdFx0cmV0dXJuIG1vZChwb3NJbnQsIDB4MTAwKTtcblx0fSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG91aW50OGNsYW1wXG5cdFRvVWludDhDbGFtcDogZnVuY3Rpb24gVG9VaW50OENsYW1wKGFyZ3VtZW50KSB7XG5cdFx0dmFyIG51bWJlciA9IHRoaXMuVG9OdW1iZXIoYXJndW1lbnQpO1xuXHRcdGlmICgkaXNOYU4obnVtYmVyKSB8fCBudW1iZXIgPD0gMCkgeyByZXR1cm4gMDsgfVxuXHRcdGlmIChudW1iZXIgPj0gMHhGRikgeyByZXR1cm4gMHhGRjsgfVxuXHRcdHZhciBmID0gTWF0aC5mbG9vcihhcmd1bWVudCk7XG5cdFx0aWYgKGYgKyAwLjUgPCBudW1iZXIpIHsgcmV0dXJuIGYgKyAxOyB9XG5cdFx0aWYgKG51bWJlciA8IGYgKyAwLjUpIHsgcmV0dXJuIGY7IH1cblx0XHRpZiAoZiAlIDIgIT09IDApIHsgcmV0dXJuIGYgKyAxOyB9XG5cdFx0cmV0dXJuIGY7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvc3RyaW5nXG5cdFRvU3RyaW5nOiBmdW5jdGlvbiBUb1N0cmluZyhhcmd1bWVudCkge1xuXHRcdGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdzeW1ib2wnKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCBhIFN5bWJvbCB2YWx1ZSB0byBhIHN0cmluZycpO1xuXHRcdH1cblx0XHRyZXR1cm4gU3RyaW5nKGFyZ3VtZW50KTtcblx0fSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG9vYmplY3Rcblx0VG9PYmplY3Q6IGZ1bmN0aW9uIFRvT2JqZWN0KHZhbHVlKSB7XG5cdFx0dGhpcy5SZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHZhbHVlKTtcblx0XHRyZXR1cm4gT2JqZWN0KHZhbHVlKTtcblx0fSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG9wcm9wZXJ0eWtleVxuXHRUb1Byb3BlcnR5S2V5OiBmdW5jdGlvbiBUb1Byb3BlcnR5S2V5KGFyZ3VtZW50KSB7XG5cdFx0dmFyIGtleSA9IHRoaXMuVG9QcmltaXRpdmUoYXJndW1lbnQsIFN0cmluZyk7XG5cdFx0cmV0dXJuIHR5cGVvZiBrZXkgPT09ICdzeW1ib2wnID8gc3ltYm9sVG9TdHIuY2FsbChrZXkpIDogdGhpcy5Ub1N0cmluZyhrZXkpO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b2xlbmd0aFxuXHRUb0xlbmd0aDogZnVuY3Rpb24gVG9MZW5ndGgoYXJndW1lbnQpIHtcblx0XHR2YXIgbGVuID0gdGhpcy5Ub0ludGVnZXIoYXJndW1lbnQpO1xuXHRcdGlmIChsZW4gPD0gMCkgeyByZXR1cm4gMDsgfSAvLyBpbmNsdWRlcyBjb252ZXJ0aW5nIC0wIHRvICswXG5cdFx0aWYgKGxlbiA+IE1BWF9TQUZFX0lOVEVHRVIpIHsgcmV0dXJuIE1BWF9TQUZFX0lOVEVHRVI7IH1cblx0XHRyZXR1cm4gbGVuO1xuXHR9LFxuXG5cdC8vIGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1jYW5vbmljYWxudW1lcmljaW5kZXhzdHJpbmdcblx0Q2Fub25pY2FsTnVtZXJpY0luZGV4U3RyaW5nOiBmdW5jdGlvbiBDYW5vbmljYWxOdW1lcmljSW5kZXhTdHJpbmcoYXJndW1lbnQpIHtcblx0XHRpZiAodG9TdHIuY2FsbChhcmd1bWVudCkgIT09ICdbb2JqZWN0IFN0cmluZ10nKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdtdXN0IGJlIGEgc3RyaW5nJyk7XG5cdFx0fVxuXHRcdGlmIChhcmd1bWVudCA9PT0gJy0wJykgeyByZXR1cm4gLTA7IH1cblx0XHR2YXIgbiA9IHRoaXMuVG9OdW1iZXIoYXJndW1lbnQpO1xuXHRcdGlmICh0aGlzLlNhbWVWYWx1ZSh0aGlzLlRvU3RyaW5nKG4pLCBhcmd1bWVudCkpIHsgcmV0dXJuIG47IH1cblx0XHRyZXR1cm4gdm9pZCAwO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1yZXF1aXJlb2JqZWN0Y29lcmNpYmxlXG5cdFJlcXVpcmVPYmplY3RDb2VyY2libGU6IEVTNS5DaGVja09iamVjdENvZXJjaWJsZSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtaXNhcnJheVxuXHRJc0FycmF5OiBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIElzQXJyYXkoYXJndW1lbnQpIHtcblx0XHRyZXR1cm4gdG9TdHIuY2FsbChhcmd1bWVudCkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWlzY2FsbGFibGVcblx0Ly8gSXNDYWxsYWJsZTogRVM1LklzQ2FsbGFibGUsXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWlzY29uc3RydWN0b3Jcblx0SXNDb25zdHJ1Y3RvcjogZnVuY3Rpb24gSXNDb25zdHJ1Y3Rvcihhcmd1bWVudCkge1xuXHRcdHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT09ICdmdW5jdGlvbicgJiYgISFhcmd1bWVudC5wcm90b3R5cGU7IC8vIHVuZm9ydHVuYXRlbHkgdGhlcmUncyBubyB3YXkgdG8gdHJ1bHkgY2hlY2sgdGhpcyB3aXRob3V0IHRyeS9jYXRjaCBgbmV3IGFyZ3VtZW50YFxuXHR9LFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1pc2V4dGVuc2libGUtb1xuXHRJc0V4dGVuc2libGU6IGZ1bmN0aW9uIElzRXh0ZW5zaWJsZShvYmopIHtcblx0XHRpZiAoIU9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucykgeyByZXR1cm4gdHJ1ZTsgfVxuXHRcdGlmIChpc1ByaW1pdGl2ZShvYmopKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHJldHVybiBPYmplY3QuaXNFeHRlbnNpYmxlKG9iaik7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWlzaW50ZWdlclxuXHRJc0ludGVnZXI6IGZ1bmN0aW9uIElzSW50ZWdlcihhcmd1bWVudCkge1xuXHRcdGlmICh0eXBlb2YgYXJndW1lbnQgIT09ICdudW1iZXInIHx8ICRpc05hTihhcmd1bWVudCkgfHwgISRpc0Zpbml0ZShhcmd1bWVudCkpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0dmFyIGFicyA9IE1hdGguYWJzKGFyZ3VtZW50KTtcblx0XHRyZXR1cm4gTWF0aC5mbG9vcihhYnMpID09PSBhYnM7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWlzcHJvcGVydHlrZXlcblx0SXNQcm9wZXJ0eUtleTogZnVuY3Rpb24gSXNQcm9wZXJ0eUtleShhcmd1bWVudCkge1xuXHRcdHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N5bWJvbCc7XG5cdH0sXG5cblx0Ly8gaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWlzcmVnZXhwXG5cdElzUmVnRXhwOiBmdW5jdGlvbiBJc1JlZ0V4cChhcmd1bWVudCkge1xuXHRcdGlmICghYXJndW1lbnQgfHwgdHlwZW9mIGFyZ3VtZW50ICE9PSAnb2JqZWN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRpZiAoaGFzU3ltYm9scykge1xuXHRcdFx0dmFyIGlzUmVnRXhwID0gYXJndW1lbnRbU3ltYm9sLm1hdGNoXTtcblx0XHRcdGlmICh0eXBlb2YgaXNSZWdFeHAgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdHJldHVybiBFUzUuVG9Cb29sZWFuKGlzUmVnRXhwKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGhhc1JlZ0V4cE1hdGNoZXIoYXJndW1lbnQpO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1zYW1ldmFsdWVcblx0Ly8gU2FtZVZhbHVlOiBFUzUuU2FtZVZhbHVlLFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1zYW1ldmFsdWV6ZXJvXG5cdFNhbWVWYWx1ZVplcm86IGZ1bmN0aW9uIFNhbWVWYWx1ZVplcm8oeCwgeSkge1xuXHRcdHJldHVybiAoeCA9PT0geSkgfHwgKCRpc05hTih4KSAmJiAkaXNOYU4oeSkpO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiA3LjMuMiBHZXRWIChWLCBQKVxuXHQgKiAxLiBBc3NlcnQ6IElzUHJvcGVydHlLZXkoUCkgaXMgdHJ1ZS5cblx0ICogMi4gTGV0IE8gYmUgVG9PYmplY3QoVikuXG5cdCAqIDMuIFJldHVybklmQWJydXB0KE8pLlxuXHQgKiA0LiBSZXR1cm4gTy5bW0dldF1dKFAsIFYpLlxuXHQgKi9cblx0R2V0VjogZnVuY3Rpb24gR2V0VihWLCBQKSB7XG5cdFx0Ly8gNy4zLjIuMVxuXHRcdGlmICghdGhpcy5Jc1Byb3BlcnR5S2V5KFApKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBJc1Byb3BlcnR5S2V5KFApIGlzIG5vdCB0cnVlJyk7XG5cdFx0fVxuXG5cdFx0Ly8gNy4zLjIuMi0zXG5cdFx0dmFyIE8gPSB0aGlzLlRvT2JqZWN0KFYpO1xuXG5cdFx0Ly8gNy4zLjIuNFxuXHRcdHJldHVybiBPW1BdO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiA3LjMuOSAtIGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1nZXRtZXRob2Rcblx0ICogMS4gQXNzZXJ0OiBJc1Byb3BlcnR5S2V5KFApIGlzIHRydWUuXG5cdCAqIDIuIExldCBmdW5jIGJlIEdldFYoTywgUCkuXG5cdCAqIDMuIFJldHVybklmQWJydXB0KGZ1bmMpLlxuXHQgKiA0LiBJZiBmdW5jIGlzIGVpdGhlciB1bmRlZmluZWQgb3IgbnVsbCwgcmV0dXJuIHVuZGVmaW5lZC5cblx0ICogNS4gSWYgSXNDYWxsYWJsZShmdW5jKSBpcyBmYWxzZSwgdGhyb3cgYSBUeXBlRXJyb3IgZXhjZXB0aW9uLlxuXHQgKiA2LiBSZXR1cm4gZnVuYy5cblx0ICovXG5cdEdldE1ldGhvZDogZnVuY3Rpb24gR2V0TWV0aG9kKE8sIFApIHtcblx0XHQvLyA3LjMuOS4xXG5cdFx0aWYgKCF0aGlzLklzUHJvcGVydHlLZXkoUCkpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IElzUHJvcGVydHlLZXkoUCkgaXMgbm90IHRydWUnKTtcblx0XHR9XG5cblx0XHQvLyA3LjMuOS4yXG5cdFx0dmFyIGZ1bmMgPSB0aGlzLkdldFYoTywgUCk7XG5cblx0XHQvLyA3LjMuOS40XG5cdFx0aWYgKGZ1bmMgPT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcblx0XHR9XG5cblx0XHQvLyA3LjMuOS41XG5cdFx0aWYgKCF0aGlzLklzQ2FsbGFibGUoZnVuYykpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoUCArICdpcyBub3QgYSBmdW5jdGlvbicpO1xuXHRcdH1cblxuXHRcdC8vIDcuMy45LjZcblx0XHRyZXR1cm4gZnVuYztcblx0fSxcblxuXHQvKipcblx0ICogNy4zLjEgR2V0IChPLCBQKSAtIGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1nZXQtby1wXG5cdCAqIDEuIEFzc2VydDogVHlwZShPKSBpcyBPYmplY3QuXG5cdCAqIDIuIEFzc2VydDogSXNQcm9wZXJ0eUtleShQKSBpcyB0cnVlLlxuXHQgKiAzLiBSZXR1cm4gTy5bW0dldF1dKFAsIE8pLlxuXHQgKi9cblx0R2V0OiBmdW5jdGlvbiBHZXQoTywgUCkge1xuXHRcdC8vIDcuMy4xLjFcblx0XHRpZiAodGhpcy5UeXBlKE8pICE9PSAnT2JqZWN0Jykge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogVHlwZShPKSBpcyBub3QgT2JqZWN0Jyk7XG5cdFx0fVxuXHRcdC8vIDcuMy4xLjJcblx0XHRpZiAoIXRoaXMuSXNQcm9wZXJ0eUtleShQKSkge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogSXNQcm9wZXJ0eUtleShQKSBpcyBub3QgdHJ1ZScpO1xuXHRcdH1cblx0XHQvLyA3LjMuMS4zXG5cdFx0cmV0dXJuIE9bUF07XG5cdH0sXG5cblx0VHlwZTogZnVuY3Rpb24gVHlwZSh4KSB7XG5cdFx0aWYgKHR5cGVvZiB4ID09PSAnc3ltYm9sJykge1xuXHRcdFx0cmV0dXJuICdTeW1ib2wnO1xuXHRcdH1cblx0XHRyZXR1cm4gRVM1LlR5cGUoeCk7XG5cdH0sXG5cblx0Ly8gaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLXNwZWNpZXNjb25zdHJ1Y3RvclxuXHRTcGVjaWVzQ29uc3RydWN0b3I6IGZ1bmN0aW9uIFNwZWNpZXNDb25zdHJ1Y3RvcihPLCBkZWZhdWx0Q29uc3RydWN0b3IpIHtcblx0XHRpZiAodGhpcy5UeXBlKE8pICE9PSAnT2JqZWN0Jykge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogVHlwZShPKSBpcyBub3QgT2JqZWN0Jyk7XG5cdFx0fVxuXHRcdHZhciBDID0gTy5jb25zdHJ1Y3Rvcjtcblx0XHRpZiAodHlwZW9mIEMgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRyZXR1cm4gZGVmYXVsdENvbnN0cnVjdG9yO1xuXHRcdH1cblx0XHRpZiAodGhpcy5UeXBlKEMpICE9PSAnT2JqZWN0Jykge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignTy5jb25zdHJ1Y3RvciBpcyBub3QgYW4gT2JqZWN0Jyk7XG5cdFx0fVxuXHRcdHZhciBTID0gaGFzU3ltYm9scyAmJiBTeW1ib2wuc3BlY2llcyA/IENbU3ltYm9sLnNwZWNpZXNdIDogdW5kZWZpbmVkO1xuXHRcdGlmIChTID09IG51bGwpIHtcblx0XHRcdHJldHVybiBkZWZhdWx0Q29uc3RydWN0b3I7XG5cdFx0fVxuXHRcdGlmICh0aGlzLklzQ29uc3RydWN0b3IoUykpIHtcblx0XHRcdHJldHVybiBTO1xuXHRcdH1cblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdubyBjb25zdHJ1Y3RvciBmb3VuZCcpO1xuXHR9XG59KTtcblxuZGVsZXRlIEVTNi5DaGVja09iamVjdENvZXJjaWJsZTsgLy8gcmVuYW1lZCBpbiBFUzYgdG8gUmVxdWlyZU9iamVjdENvZXJjaWJsZVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVTNjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy1hYnN0cmFjdC9lczYuanNcbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwibW9kdWxlLmV4cG9ydHMgPSBOdW1iZXIuaXNOYU4gfHwgZnVuY3Rpb24gaXNOYU4oYSkge1xuXHRyZXR1cm4gYSAhPT0gYTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZXMtYWJzdHJhY3QvaGVscGVycy9pc05hTi5qc1xuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJ2YXIgJGlzTmFOID0gTnVtYmVyLmlzTmFOIHx8IGZ1bmN0aW9uIChhKSB7IHJldHVybiBhICE9PSBhOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE51bWJlci5pc0Zpbml0ZSB8fCBmdW5jdGlvbiAoeCkgeyByZXR1cm4gdHlwZW9mIHggPT09ICdudW1iZXInICYmICEkaXNOYU4oeCkgJiYgeCAhPT0gSW5maW5pdHkgJiYgeCAhPT0gLUluZmluaXR5OyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VzLWFic3RyYWN0L2hlbHBlcnMvaXNGaW5pdGUuanNcbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwidmFyIGhhcyA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKSB7XG5cdGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcblx0XHRpZiAoaGFzLmNhbGwoc291cmNlLCBrZXkpKSB7XG5cdFx0XHR0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gdGFyZ2V0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy1hYnN0cmFjdC9oZWxwZXJzL2Fzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNpZ24obnVtYmVyKSB7XG5cdHJldHVybiBudW1iZXIgPj0gMCA/IDEgOiAtMTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZXMtYWJzdHJhY3QvaGVscGVycy9zaWduLmpzXG4vLyBtb2R1bGUgaWQgPSA0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbW9kKG51bWJlciwgbW9kdWxvKSB7XG5cdHZhciByZW1haW4gPSBudW1iZXIgJSBtb2R1bG87XG5cdHJldHVybiBNYXRoLmZsb29yKHJlbWFpbiA+PSAwID8gcmVtYWluIDogcmVtYWluICsgbW9kdWxvKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZXMtYWJzdHJhY3QvaGVscGVycy9tb2QuanNcbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc1ByaW1pdGl2ZSh2YWx1ZSkge1xuXHRyZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgKHR5cGVvZiB2YWx1ZSAhPT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZXMtYWJzdHJhY3QvaGVscGVycy9pc1ByaW1pdGl2ZS5qc1xuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbnZhciBoYXNTeW1ib2xzID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSAnc3ltYm9sJztcblxudmFyIGlzUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9oZWxwZXJzL2lzUHJpbWl0aXZlJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJ2lzLWNhbGxhYmxlJyk7XG52YXIgaXNEYXRlID0gcmVxdWlyZSgnaXMtZGF0ZS1vYmplY3QnKTtcbnZhciBpc1N5bWJvbCA9IHJlcXVpcmUoJ2lzLXN5bWJvbCcpO1xuXG52YXIgb3JkaW5hcnlUb1ByaW1pdGl2ZSA9IGZ1bmN0aW9uIE9yZGluYXJ5VG9QcmltaXRpdmUoTywgaGludCkge1xuXHRpZiAodHlwZW9mIE8gPT09ICd1bmRlZmluZWQnIHx8IE8gPT09IG51bGwpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBtZXRob2Qgb24gJyArIE8pO1xuXHR9XG5cdGlmICh0eXBlb2YgaGludCAhPT0gJ3N0cmluZycgfHwgKGhpbnQgIT09ICdudW1iZXInICYmIGhpbnQgIT09ICdzdHJpbmcnKSkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ2hpbnQgbXVzdCBiZSBcInN0cmluZ1wiIG9yIFwibnVtYmVyXCInKTtcblx0fVxuXHR2YXIgbWV0aG9kTmFtZXMgPSBoaW50ID09PSAnc3RyaW5nJyA/IFsndG9TdHJpbmcnLCAndmFsdWVPZiddIDogWyd2YWx1ZU9mJywgJ3RvU3RyaW5nJ107XG5cdHZhciBtZXRob2QsIHJlc3VsdCwgaTtcblx0Zm9yIChpID0gMDsgaSA8IG1ldGhvZE5hbWVzLmxlbmd0aDsgKytpKSB7XG5cdFx0bWV0aG9kID0gT1ttZXRob2ROYW1lc1tpXV07XG5cdFx0aWYgKGlzQ2FsbGFibGUobWV0aG9kKSkge1xuXHRcdFx0cmVzdWx0ID0gbWV0aG9kLmNhbGwoTyk7XG5cdFx0XHRpZiAoaXNQcmltaXRpdmUocmVzdWx0KSkge1xuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHR0aHJvdyBuZXcgVHlwZUVycm9yKCdObyBkZWZhdWx0IHZhbHVlJyk7XG59O1xuXG52YXIgR2V0TWV0aG9kID0gZnVuY3Rpb24gR2V0TWV0aG9kKE8sIFApIHtcblx0dmFyIGZ1bmMgPSBPW1BdO1xuXHRpZiAoZnVuYyAhPT0gbnVsbCAmJiB0eXBlb2YgZnVuYyAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRpZiAoIWlzQ2FsbGFibGUoZnVuYykpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoZnVuYyArICcgcmV0dXJuZWQgZm9yIHByb3BlcnR5ICcgKyBQICsgJyBvZiBvYmplY3QgJyArIE8gKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG5cdFx0fVxuXHRcdHJldHVybiBmdW5jO1xuXHR9XG59O1xuXG4vLyBodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtdG9wcmltaXRpdmVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gVG9QcmltaXRpdmUoaW5wdXQsIFByZWZlcnJlZFR5cGUpIHtcblx0aWYgKGlzUHJpbWl0aXZlKGlucHV0KSkge1xuXHRcdHJldHVybiBpbnB1dDtcblx0fVxuXHR2YXIgaGludCA9ICdkZWZhdWx0Jztcblx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG5cdFx0aWYgKFByZWZlcnJlZFR5cGUgPT09IFN0cmluZykge1xuXHRcdFx0aGludCA9ICdzdHJpbmcnO1xuXHRcdH0gZWxzZSBpZiAoUHJlZmVycmVkVHlwZSA9PT0gTnVtYmVyKSB7XG5cdFx0XHRoaW50ID0gJ251bWJlcic7XG5cdFx0fVxuXHR9XG5cblx0dmFyIGV4b3RpY1RvUHJpbTtcblx0aWYgKGhhc1N5bWJvbHMpIHtcblx0XHRpZiAoU3ltYm9sLnRvUHJpbWl0aXZlKSB7XG5cdFx0XHRleG90aWNUb1ByaW0gPSBHZXRNZXRob2QoaW5wdXQsIFN5bWJvbC50b1ByaW1pdGl2ZSk7XG5cdFx0fSBlbHNlIGlmIChpc1N5bWJvbChpbnB1dCkpIHtcblx0XHRcdGV4b3RpY1RvUHJpbSA9IFN5bWJvbC5wcm90b3R5cGUudmFsdWVPZjtcblx0XHR9XG5cdH1cblx0aWYgKHR5cGVvZiBleG90aWNUb1ByaW0gIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0dmFyIHJlc3VsdCA9IGV4b3RpY1RvUHJpbS5jYWxsKGlucHV0LCBoaW50KTtcblx0XHRpZiAoaXNQcmltaXRpdmUocmVzdWx0KSkge1xuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcigndW5hYmxlIHRvIGNvbnZlcnQgZXhvdGljIG9iamVjdCB0byBwcmltaXRpdmUnKTtcblx0fVxuXHRpZiAoaGludCA9PT0gJ2RlZmF1bHQnICYmIChpc0RhdGUoaW5wdXQpIHx8IGlzU3ltYm9sKGlucHV0KSkpIHtcblx0XHRoaW50ID0gJ3N0cmluZyc7XG5cdH1cblx0cmV0dXJuIG9yZGluYXJ5VG9QcmltaXRpdmUoaW5wdXQsIGhpbnQgPT09ICdkZWZhdWx0JyA/ICdudW1iZXInIDogaGludCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VzLXRvLXByaW1pdGl2ZS9lczYuanNcbi8vIG1vZHVsZSBpZCA9IDUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc1ByaW1pdGl2ZSh2YWx1ZSkge1xuXHRyZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgKHR5cGVvZiB2YWx1ZSAhPT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZXMtdG8tcHJpbWl0aXZlL2hlbHBlcnMvaXNQcmltaXRpdmUuanNcbi8vIG1vZHVsZSBpZCA9IDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZm5Ub1N0ciA9IEZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZztcblxudmFyIGNvbnN0cnVjdG9yUmVnZXggPSAvXlxccypjbGFzcyAvO1xudmFyIGlzRVM2Q2xhc3NGbiA9IGZ1bmN0aW9uIGlzRVM2Q2xhc3NGbih2YWx1ZSkge1xuXHR0cnkge1xuXHRcdHZhciBmblN0ciA9IGZuVG9TdHIuY2FsbCh2YWx1ZSk7XG5cdFx0dmFyIHNpbmdsZVN0cmlwcGVkID0gZm5TdHIucmVwbGFjZSgvXFwvXFwvLipcXG4vZywgJycpO1xuXHRcdHZhciBtdWx0aVN0cmlwcGVkID0gc2luZ2xlU3RyaXBwZWQucmVwbGFjZSgvXFwvXFwqWy5cXHNcXFNdKlxcKlxcLy9nLCAnJyk7XG5cdFx0dmFyIHNwYWNlU3RyaXBwZWQgPSBtdWx0aVN0cmlwcGVkLnJlcGxhY2UoL1xcbi9tZywgJyAnKS5yZXBsYWNlKC8gezJ9L2csICcgJyk7XG5cdFx0cmV0dXJuIGNvbnN0cnVjdG9yUmVnZXgudGVzdChzcGFjZVN0cmlwcGVkKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdHJldHVybiBmYWxzZTsgLy8gbm90IGEgZnVuY3Rpb25cblx0fVxufTtcblxudmFyIHRyeUZ1bmN0aW9uT2JqZWN0ID0gZnVuY3Rpb24gdHJ5RnVuY3Rpb25PYmplY3QodmFsdWUpIHtcblx0dHJ5IHtcblx0XHRpZiAoaXNFUzZDbGFzc0ZuKHZhbHVlKSkgeyByZXR1cm4gZmFsc2U7IH1cblx0XHRmblRvU3RyLmNhbGwodmFsdWUpO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbnZhciBmbkNsYXNzID0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbnZhciBnZW5DbGFzcyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXSc7XG52YXIgaGFzVG9TdHJpbmdUYWcgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBTeW1ib2wudG9TdHJpbmdUYWcgPT09ICdzeW1ib2wnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQ2FsbGFibGUodmFsdWUpIHtcblx0aWYgKCF2YWx1ZSkgeyByZXR1cm4gZmFsc2U7IH1cblx0aWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnKSB7IHJldHVybiBmYWxzZTsgfVxuXHRpZiAoaGFzVG9TdHJpbmdUYWcpIHsgcmV0dXJuIHRyeUZ1bmN0aW9uT2JqZWN0KHZhbHVlKTsgfVxuXHRpZiAoaXNFUzZDbGFzc0ZuKHZhbHVlKSkgeyByZXR1cm4gZmFsc2U7IH1cblx0dmFyIHN0ckNsYXNzID0gdG9TdHIuY2FsbCh2YWx1ZSk7XG5cdHJldHVybiBzdHJDbGFzcyA9PT0gZm5DbGFzcyB8fCBzdHJDbGFzcyA9PT0gZ2VuQ2xhc3M7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2lzLWNhbGxhYmxlL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxudmFyIGdldERheSA9IERhdGUucHJvdG90eXBlLmdldERheTtcbnZhciB0cnlEYXRlT2JqZWN0ID0gZnVuY3Rpb24gdHJ5RGF0ZU9iamVjdCh2YWx1ZSkge1xuXHR0cnkge1xuXHRcdGdldERheS5jYWxsKHZhbHVlKTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufTtcblxudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbnZhciBkYXRlQ2xhc3MgPSAnW29iamVjdCBEYXRlXSc7XG52YXIgaGFzVG9TdHJpbmdUYWcgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBTeW1ib2wudG9TdHJpbmdUYWcgPT09ICdzeW1ib2wnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzRGF0ZU9iamVjdCh2YWx1ZSkge1xuXHRpZiAodHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JyB8fCB2YWx1ZSA9PT0gbnVsbCkgeyByZXR1cm4gZmFsc2U7IH1cblx0cmV0dXJuIGhhc1RvU3RyaW5nVGFnID8gdHJ5RGF0ZU9iamVjdCh2YWx1ZSkgOiB0b1N0ci5jYWxsKHZhbHVlKSA9PT0gZGF0ZUNsYXNzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9pcy1kYXRlLW9iamVjdC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgaGFzU3ltYm9scyA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIFN5bWJvbCgpID09PSAnc3ltYm9sJztcblxuaWYgKGhhc1N5bWJvbHMpIHtcblx0dmFyIHN5bVRvU3RyID0gU3ltYm9sLnByb3RvdHlwZS50b1N0cmluZztcblx0dmFyIHN5bVN0cmluZ1JlZ2V4ID0gL15TeW1ib2xcXCguKlxcKSQvO1xuXHR2YXIgaXNTeW1ib2xPYmplY3QgPSBmdW5jdGlvbiBpc1N5bWJvbE9iamVjdCh2YWx1ZSkge1xuXHRcdGlmICh0eXBlb2YgdmFsdWUudmFsdWVPZigpICE9PSAnc3ltYm9sJykgeyByZXR1cm4gZmFsc2U7IH1cblx0XHRyZXR1cm4gc3ltU3RyaW5nUmVnZXgudGVzdChzeW1Ub1N0ci5jYWxsKHZhbHVlKSk7XG5cdH07XG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNTeW1ib2wodmFsdWUpIHtcblx0XHRpZiAodHlwZW9mIHZhbHVlID09PSAnc3ltYm9sJykgeyByZXR1cm4gdHJ1ZTsgfVxuXHRcdGlmICh0b1N0ci5jYWxsKHZhbHVlKSAhPT0gJ1tvYmplY3QgU3ltYm9sXScpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdFx0dHJ5IHtcblx0XHRcdHJldHVybiBpc1N5bWJvbE9iamVjdCh2YWx1ZSk7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fTtcbn0gZWxzZSB7XG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNTeW1ib2wodmFsdWUpIHtcblx0XHQvLyB0aGlzIGVudmlyb25tZW50IGRvZXMgbm90IHN1cHBvcnQgU3ltYm9scy5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH07XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaXMtc3ltYm9sL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsInZhciBpbXBsZW1lbnRhdGlvbiA9IHJlcXVpcmUoJy4vaW1wbGVtZW50YXRpb24nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBGdW5jdGlvbi5wcm90b3R5cGUuYmluZCB8fCBpbXBsZW1lbnRhdGlvbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9mdW5jdGlvbi1iaW5kL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsInZhciBFUlJPUl9NRVNTQUdFID0gJ0Z1bmN0aW9uLnByb3RvdHlwZS5iaW5kIGNhbGxlZCBvbiBpbmNvbXBhdGlibGUgJztcbnZhciBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgZnVuY1R5cGUgPSAnW29iamVjdCBGdW5jdGlvbl0nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJpbmQodGhhdCkge1xuICAgIHZhciB0YXJnZXQgPSB0aGlzO1xuICAgIGlmICh0eXBlb2YgdGFyZ2V0ICE9PSAnZnVuY3Rpb24nIHx8IHRvU3RyLmNhbGwodGFyZ2V0KSAhPT0gZnVuY1R5cGUpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihFUlJPUl9NRVNTQUdFICsgdGFyZ2V0KTtcbiAgICB9XG4gICAgdmFyIGFyZ3MgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG5cbiAgICB2YXIgYm91bmQ7XG4gICAgdmFyIGJpbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBib3VuZCkge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHRhcmdldC5hcHBseShcbiAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgIGFyZ3MuY29uY2F0KHNsaWNlLmNhbGwoYXJndW1lbnRzKSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAoT2JqZWN0KHJlc3VsdCkgPT09IHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXQuYXBwbHkoXG4gICAgICAgICAgICAgICAgdGhhdCxcbiAgICAgICAgICAgICAgICBhcmdzLmNvbmNhdChzbGljZS5jYWxsKGFyZ3VtZW50cykpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHZhciBib3VuZExlbmd0aCA9IE1hdGgubWF4KDAsIHRhcmdldC5sZW5ndGggLSBhcmdzLmxlbmd0aCk7XG4gICAgdmFyIGJvdW5kQXJncyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYm91bmRMZW5ndGg7IGkrKykge1xuICAgICAgICBib3VuZEFyZ3MucHVzaCgnJCcgKyBpKTtcbiAgICB9XG5cbiAgICBib3VuZCA9IEZ1bmN0aW9uKCdiaW5kZXInLCAncmV0dXJuIGZ1bmN0aW9uICgnICsgYm91bmRBcmdzLmpvaW4oJywnKSArICcpeyByZXR1cm4gYmluZGVyLmFwcGx5KHRoaXMsYXJndW1lbnRzKTsgfScpKGJpbmRlcik7XG5cbiAgICBpZiAodGFyZ2V0LnByb3RvdHlwZSkge1xuICAgICAgICB2YXIgRW1wdHkgPSBmdW5jdGlvbiBFbXB0eSgpIHt9O1xuICAgICAgICBFbXB0eS5wcm90b3R5cGUgPSB0YXJnZXQucHJvdG90eXBlO1xuICAgICAgICBib3VuZC5wcm90b3R5cGUgPSBuZXcgRW1wdHkoKTtcbiAgICAgICAgRW1wdHkucHJvdG90eXBlID0gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gYm91bmQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Z1bmN0aW9uLWJpbmQvaW1wbGVtZW50YXRpb24uanNcbi8vIG1vZHVsZSBpZCA9IDU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgJGlzTmFOID0gcmVxdWlyZSgnLi9oZWxwZXJzL2lzTmFOJyk7XG52YXIgJGlzRmluaXRlID0gcmVxdWlyZSgnLi9oZWxwZXJzL2lzRmluaXRlJyk7XG5cbnZhciBzaWduID0gcmVxdWlyZSgnLi9oZWxwZXJzL3NpZ24nKTtcbnZhciBtb2QgPSByZXF1aXJlKCcuL2hlbHBlcnMvbW9kJyk7XG5cbnZhciBJc0NhbGxhYmxlID0gcmVxdWlyZSgnaXMtY2FsbGFibGUnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJ2VzLXRvLXByaW1pdGl2ZS9lczUnKTtcblxuLy8gaHR0cHM6Ly9lczUuZ2l0aHViLmlvLyN4OVxudmFyIEVTNSA9IHtcblx0VG9QcmltaXRpdmU6IHRvUHJpbWl0aXZlLFxuXG5cdFRvQm9vbGVhbjogZnVuY3Rpb24gVG9Cb29sZWFuKHZhbHVlKSB7XG5cdFx0cmV0dXJuIEJvb2xlYW4odmFsdWUpO1xuXHR9LFxuXHRUb051bWJlcjogZnVuY3Rpb24gVG9OdW1iZXIodmFsdWUpIHtcblx0XHRyZXR1cm4gTnVtYmVyKHZhbHVlKTtcblx0fSxcblx0VG9JbnRlZ2VyOiBmdW5jdGlvbiBUb0ludGVnZXIodmFsdWUpIHtcblx0XHR2YXIgbnVtYmVyID0gdGhpcy5Ub051bWJlcih2YWx1ZSk7XG5cdFx0aWYgKCRpc05hTihudW1iZXIpKSB7IHJldHVybiAwOyB9XG5cdFx0aWYgKG51bWJlciA9PT0gMCB8fCAhJGlzRmluaXRlKG51bWJlcikpIHsgcmV0dXJuIG51bWJlcjsgfVxuXHRcdHJldHVybiBzaWduKG51bWJlcikgKiBNYXRoLmZsb29yKE1hdGguYWJzKG51bWJlcikpO1xuXHR9LFxuXHRUb0ludDMyOiBmdW5jdGlvbiBUb0ludDMyKHgpIHtcblx0XHRyZXR1cm4gdGhpcy5Ub051bWJlcih4KSA+PiAwO1xuXHR9LFxuXHRUb1VpbnQzMjogZnVuY3Rpb24gVG9VaW50MzIoeCkge1xuXHRcdHJldHVybiB0aGlzLlRvTnVtYmVyKHgpID4+PiAwO1xuXHR9LFxuXHRUb1VpbnQxNjogZnVuY3Rpb24gVG9VaW50MTYodmFsdWUpIHtcblx0XHR2YXIgbnVtYmVyID0gdGhpcy5Ub051bWJlcih2YWx1ZSk7XG5cdFx0aWYgKCRpc05hTihudW1iZXIpIHx8IG51bWJlciA9PT0gMCB8fCAhJGlzRmluaXRlKG51bWJlcikpIHsgcmV0dXJuIDA7IH1cblx0XHR2YXIgcG9zSW50ID0gc2lnbihudW1iZXIpICogTWF0aC5mbG9vcihNYXRoLmFicyhudW1iZXIpKTtcblx0XHRyZXR1cm4gbW9kKHBvc0ludCwgMHgxMDAwMCk7XG5cdH0sXG5cdFRvU3RyaW5nOiBmdW5jdGlvbiBUb1N0cmluZyh2YWx1ZSkge1xuXHRcdHJldHVybiBTdHJpbmcodmFsdWUpO1xuXHR9LFxuXHRUb09iamVjdDogZnVuY3Rpb24gVG9PYmplY3QodmFsdWUpIHtcblx0XHR0aGlzLkNoZWNrT2JqZWN0Q29lcmNpYmxlKHZhbHVlKTtcblx0XHRyZXR1cm4gT2JqZWN0KHZhbHVlKTtcblx0fSxcblx0Q2hlY2tPYmplY3RDb2VyY2libGU6IGZ1bmN0aW9uIENoZWNrT2JqZWN0Q29lcmNpYmxlKHZhbHVlLCBvcHRNZXNzYWdlKSB7XG5cdFx0LyoganNoaW50IGVxbnVsbDp0cnVlICovXG5cdFx0aWYgKHZhbHVlID09IG51bGwpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3Iob3B0TWVzc2FnZSB8fCAnQ2Fubm90IGNhbGwgbWV0aG9kIG9uICcgKyB2YWx1ZSk7XG5cdFx0fVxuXHRcdHJldHVybiB2YWx1ZTtcblx0fSxcblx0SXNDYWxsYWJsZTogSXNDYWxsYWJsZSxcblx0U2FtZVZhbHVlOiBmdW5jdGlvbiBTYW1lVmFsdWUoeCwgeSkge1xuXHRcdGlmICh4ID09PSB5KSB7IC8vIDAgPT09IC0wLCBidXQgdGhleSBhcmUgbm90IGlkZW50aWNhbC5cblx0XHRcdGlmICh4ID09PSAwKSB7IHJldHVybiAxIC8geCA9PT0gMSAvIHk7IH1cblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRyZXR1cm4gJGlzTmFOKHgpICYmICRpc05hTih5KTtcblx0fSxcblxuXHQvLyBodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNS4xLyNzZWMtOFxuXHRUeXBlOiBmdW5jdGlvbiBUeXBlKHgpIHtcblx0XHRpZiAoeCA9PT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuICdOdWxsJztcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiB4ID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0cmV0dXJuICdVbmRlZmluZWQnO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIHggPT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIHggPT09ICdvYmplY3QnKSB7XG5cdFx0XHRyZXR1cm4gJ09iamVjdCc7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2YgeCA9PT0gJ251bWJlcicpIHtcblx0XHRcdHJldHVybiAnTnVtYmVyJztcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiB4ID09PSAnYm9vbGVhbicpIHtcblx0XHRcdHJldHVybiAnQm9vbGVhbic7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2YgeCA9PT0gJ3N0cmluZycpIHtcblx0XHRcdHJldHVybiAnU3RyaW5nJztcblx0XHR9XG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRVM1O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VzLWFic3RyYWN0L2VzNS5qc1xuLy8gbW9kdWxlIGlkID0gNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbnZhciBpc1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vaGVscGVycy9pc1ByaW1pdGl2ZScpO1xuXG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJ2lzLWNhbGxhYmxlJyk7XG5cbi8vIGh0dHBzOi8vZXM1LmdpdGh1Yi5pby8jeDguMTJcbnZhciBFUzVpbnRlcm5hbFNsb3RzID0ge1xuXHQnW1tEZWZhdWx0VmFsdWVdXSc6IGZ1bmN0aW9uIChPLCBoaW50KSB7XG5cdFx0dmFyIGFjdHVhbEhpbnQgPSBoaW50IHx8ICh0b1N0ci5jYWxsKE8pID09PSAnW29iamVjdCBEYXRlXScgPyBTdHJpbmcgOiBOdW1iZXIpO1xuXG5cdFx0aWYgKGFjdHVhbEhpbnQgPT09IFN0cmluZyB8fCBhY3R1YWxIaW50ID09PSBOdW1iZXIpIHtcblx0XHRcdHZhciBtZXRob2RzID0gYWN0dWFsSGludCA9PT0gU3RyaW5nID8gWyd0b1N0cmluZycsICd2YWx1ZU9mJ10gOiBbJ3ZhbHVlT2YnLCAndG9TdHJpbmcnXTtcblx0XHRcdHZhciB2YWx1ZSwgaTtcblx0XHRcdGZvciAoaSA9IDA7IGkgPCBtZXRob2RzLmxlbmd0aDsgKytpKSB7XG5cdFx0XHRcdGlmIChpc0NhbGxhYmxlKE9bbWV0aG9kc1tpXV0pKSB7XG5cdFx0XHRcdFx0dmFsdWUgPSBPW21ldGhvZHNbaV1dKCk7XG5cdFx0XHRcdFx0aWYgKGlzUHJpbWl0aXZlKHZhbHVlKSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignTm8gZGVmYXVsdCB2YWx1ZScpO1xuXHRcdH1cblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdpbnZhbGlkIFtbRGVmYXVsdFZhbHVlXV0gaGludCBzdXBwbGllZCcpO1xuXHR9XG59O1xuXG4vLyBodHRwczovL2VzNS5naXRodWIuaW8vI3g5XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIFRvUHJpbWl0aXZlKGlucHV0LCBQcmVmZXJyZWRUeXBlKSB7XG5cdGlmIChpc1ByaW1pdGl2ZShpbnB1dCkpIHtcblx0XHRyZXR1cm4gaW5wdXQ7XG5cdH1cblx0cmV0dXJuIEVTNWludGVybmFsU2xvdHNbJ1tbRGVmYXVsdFZhbHVlXV0nXShpbnB1dCwgUHJlZmVycmVkVHlwZSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VzLXRvLXByaW1pdGl2ZS9lczUuanNcbi8vIG1vZHVsZSBpZCA9IDU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaGFzID0gcmVxdWlyZSgnaGFzJyk7XG52YXIgcmVnZXhFeGVjID0gUmVnRXhwLnByb3RvdHlwZS5leGVjO1xudmFyIGdPUEQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG52YXIgdHJ5UmVnZXhFeGVjQ2FsbCA9IGZ1bmN0aW9uIHRyeVJlZ2V4RXhlYyh2YWx1ZSkge1xuXHR0cnkge1xuXHRcdHZhciBsYXN0SW5kZXggPSB2YWx1ZS5sYXN0SW5kZXg7XG5cdFx0dmFsdWUubGFzdEluZGV4ID0gMDtcblxuXHRcdHJlZ2V4RXhlYy5jYWxsKHZhbHVlKTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fSBmaW5hbGx5IHtcblx0XHR2YWx1ZS5sYXN0SW5kZXggPSBsYXN0SW5kZXg7XG5cdH1cbn07XG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIHJlZ2V4Q2xhc3MgPSAnW29iamVjdCBSZWdFeHBdJztcbnZhciBoYXNUb1N0cmluZ1RhZyA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIFN5bWJvbC50b1N0cmluZ1RhZyA9PT0gJ3N5bWJvbCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNSZWdleCh2YWx1ZSkge1xuXHRpZiAoIXZhbHVlIHx8IHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0aWYgKCFoYXNUb1N0cmluZ1RhZykge1xuXHRcdHJldHVybiB0b1N0ci5jYWxsKHZhbHVlKSA9PT0gcmVnZXhDbGFzcztcblx0fVxuXG5cdHZhciBkZXNjcmlwdG9yID0gZ09QRCh2YWx1ZSwgJ2xhc3RJbmRleCcpO1xuXHR2YXIgaGFzTGFzdEluZGV4RGF0YVByb3BlcnR5ID0gZGVzY3JpcHRvciAmJiBoYXMoZGVzY3JpcHRvciwgJ3ZhbHVlJyk7XG5cdGlmICghaGFzTGFzdEluZGV4RGF0YVByb3BlcnR5KSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0cmV0dXJuIHRyeVJlZ2V4RXhlY0NhbGwodmFsdWUpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9pcy1yZWdleC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJ2YXIgYmluZCA9IHJlcXVpcmUoJ2Z1bmN0aW9uLWJpbmQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBiaW5kLmNhbGwoRnVuY3Rpb24uY2FsbCwgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaGFzL3NyYy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbnZhciBFUyA9IHJlcXVpcmUoJ2VzLWFic3RyYWN0L2VzNicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGZpbmQocHJlZGljYXRlKSB7XG5cdHZhciBsaXN0ID0gRVMuVG9PYmplY3QodGhpcyk7XG5cdHZhciBsZW5ndGggPSBFUy5Ub0ludGVnZXIoRVMuVG9MZW5ndGgobGlzdC5sZW5ndGgpKTtcblx0aWYgKCFFUy5Jc0NhbGxhYmxlKHByZWRpY2F0ZSkpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdBcnJheSNmaW5kOiBwcmVkaWNhdGUgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cdH1cblx0aWYgKGxlbmd0aCA9PT0gMCkge1xuXHRcdHJldHVybiB1bmRlZmluZWQ7XG5cdH1cblx0dmFyIHRoaXNBcmcgPSBhcmd1bWVudHNbMV07XG5cdGZvciAodmFyIGkgPSAwLCB2YWx1ZTsgaSA8IGxlbmd0aDsgaSsrKSB7XG5cdFx0dmFsdWUgPSBsaXN0W2ldO1xuXHRcdGlmIChFUy5DYWxsKHByZWRpY2F0ZSwgdGhpc0FyZywgW3ZhbHVlLCBpLCBsaXN0XSkpIHtcblx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHVuZGVmaW5lZDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYXJyYXkucHJvdG90eXBlLmZpbmQvaW1wbGVtZW50YXRpb24uanNcbi8vIG1vZHVsZSBpZCA9IDYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdldFBvbHlmaWxsKCkge1xuXHQvLyBEZXRlY3QgaWYgYW4gaW1wbGVtZW50YXRpb24gZXhpc3RzXG5cdC8vIERldGVjdCBlYXJseSBpbXBsZW1lbnRhdGlvbnMgd2hpY2ggc2tpcHBlZCBob2xlcyBpbiBzcGFyc2UgYXJyYXlzXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zcGFyc2UtYXJyYXlzXG5cdHZhciBpbXBsZW1lbnRlZCA9IEFycmF5LnByb3RvdHlwZS5maW5kICYmIFssIDFdLmZpbmQoZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9KSAhPT0gMTtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZ2xvYmFsLXJlcXVpcmVcblx0cmV0dXJuIGltcGxlbWVudGVkID8gQXJyYXkucHJvdG90eXBlLmZpbmQgOiByZXF1aXJlKCcuL2ltcGxlbWVudGF0aW9uJyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2FycmF5LnByb3RvdHlwZS5maW5kL3BvbHlmaWxsLmpzXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxudmFyIGRlZmluZSA9IHJlcXVpcmUoJ2RlZmluZS1wcm9wZXJ0aWVzJyk7XG52YXIgZ2V0UG9seWZpbGwgPSByZXF1aXJlKCcuL3BvbHlmaWxsJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2hpbUFycmF5UHJvdG90eXBlRmluZCgpIHtcblx0dmFyIHBvbHlmaWxsID0gZ2V0UG9seWZpbGwoKTtcblxuXHRkZWZpbmUoQXJyYXkucHJvdG90eXBlLCB7IGZpbmQ6IHBvbHlmaWxsIH0sIHtcblx0XHRmaW5kOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gQXJyYXkucHJvdG90eXBlLmZpbmQgIT09IHBvbHlmaWxsO1xuXHRcdH1cblx0fSk7XG5cblx0cmV0dXJuIHBvbHlmaWxsO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9hcnJheS5wcm90b3R5cGUuZmluZC9zaGltLmpzXG4vLyBtb2R1bGUgaWQgPSA2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+PHN5bWJvbCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNzkyIDE3OTJcXFwiIGlkPVxcXCJsZXBsYXllci1pY29uLWFycm93cy1hbHRcXFwiPjx0aXRsZT5hcnJvd3MtYWx0PC90aXRsZT48cGF0aCBkPVxcXCJNMTQxMSA1NDFsLTM1NSAzNTUgMzU1IDM1NSAxNDQtMTQ0cTI5LTMxIDcwLTE0IDM5IDE3IDM5IDU5djQ0OHEwIDI2LTE5IDQ1dC00NSAxOWgtNDQ4cS00MiAwLTU5LTQwLTE3LTM5IDE0LTY5bDE0NC0xNDQtMzU1LTM1NS0zNTUgMzU1IDE0NCAxNDRxMzEgMzAgMTQgNjktMTcgNDAtNTkgNDBoLTQ0OHEtMjYgMC00NS0xOXQtMTktNDV2LTQ0OHEwLTQyIDQwLTU5IDM5LTE3IDY5IDE0bDE0NCAxNDQgMzU1LTM1NS0zNTUtMzU1LTE0NCAxNDRxLTE5IDE5LTQ1IDE5LTEyIDAtMjQtNS00MC0xNy00MC01OXYtNDQ4cTAtMjYgMTktNDV0NDUtMTloNDQ4cTQyIDAgNTkgNDAgMTcgMzktMTQgNjlsLTE0NCAxNDQgMzU1IDM1NSAzNTUtMzU1LTE0NC0xNDRxLTMxLTMwLTE0LTY5IDE3LTQwIDU5LTQwaDQ0OHEyNiAwIDQ1IDE5dDE5IDQ1djQ0OHEwIDQyLTM5IDU5LTEzIDUtMjUgNS0yNiAwLTQ1LTE5elxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi1iYWNrd2FyZFxcXCI+PHRpdGxlPmJhY2t3YXJkPC90aXRsZT48cGF0aCBkPVxcXCJNMTY4MyAxNDFxMTktMTkgMzItMTN0MTMgMzJ2MTQ3MnEwIDI2LTEzIDMydC0zMi0xM2wtNzEwLTcxMHEtOC05LTEzLTE5djcxMHEwIDI2LTEzIDMydC0zMi0xM2wtNzEwLTcxMHEtMTktMTktMTktNDV0MTktNDVsNzEwLTcxMHExOS0xOSAzMi0xM3QxMyAzMnY3MTBxNS0xMSAxMy0xOXpcXFwiLz48L3N5bWJvbD48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDE3OTIgMTc5MlxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tYnVsbHNleWVcXFwiPjx0aXRsZT5idWxsc2V5ZTwvdGl0bGU+PHBhdGggZD1cXFwiTTExNTIgODk2cTAgMTA2LTc1IDE4MXQtMTgxIDc1LTE4MS03NS03NS0xODEgNzUtMTgxIDE4MS03NSAxODEgNzUgNzUgMTgxem0xMjggMHEwLTE1OS0xMTIuNS0yNzEuNXQtMjcxLjUtMTEyLjUtMjcxLjUgMTEyLjUtMTEyLjUgMjcxLjUgMTEyLjUgMjcxLjUgMjcxLjUgMTEyLjUgMjcxLjUtMTEyLjUgMTEyLjUtMjcxLjV6bTEyOCAwcTAgMjEyLTE1MCAzNjJ0LTM2MiAxNTAtMzYyLTE1MC0xNTAtMzYyIDE1MC0zNjIgMzYyLTE1MCAzNjIgMTUwIDE1MCAzNjJ6bTEyOCAwcTAtMTMwLTUxLTI0OC41dC0xMzYuNS0yMDQtMjA0LTEzNi41LTI0OC41LTUxLTI0OC41IDUxLTIwNCAxMzYuNS0xMzYuNSAyMDQtNTEgMjQ4LjUgNTEgMjQ4LjUgMTM2LjUgMjA0IDIwNCAxMzYuNSAyNDguNSA1MSAyNDguNS01MSAyMDQtMTM2LjUgMTM2LjUtMjA0IDUxLTI0OC41em0xMjggMHEwIDIwOS0xMDMgMzg1LjV0LTI3OS41IDI3OS41LTM4NS41IDEwMy0zODUuNS0xMDMtMjc5LjUtMjc5LjUtMTAzLTM4NS41IDEwMy0zODUuNSAyNzkuNS0yNzkuNSAzODUuNS0xMDMgMzg1LjUgMTAzIDI3OS41IDI3OS41IDEwMyAzODUuNXpcXFwiLz48L3N5bWJvbD48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDQwMCAzODBcXFwiIGlkPVxcXCJsZXBsYXllci1pY29uLWNhdFxcXCI+PHRpdGxlPmNhdDwvdGl0bGU+IDxwYXRoIGQ9XFxcIk0gMTUxLjM0OTA0LDMwNy4yMDQ1NSBMIDI2NC4zNDkwNCwzMDcuMjA0NTUgQyAyNjQuMzQ5MDQsMjkxLjE0MDk2IDI2My4yMDIxLDI4Ny45NTQ1NSAyMzYuNTk5MDQsMjg3Ljk1NDU1IEMgMjQwLjg0OTA0LDI3NS4yMDQ1NSAyNTguMTI0MjQsMjQ0LjM1ODA4IDI2Ny43MjQwNCwyNDQuMzU4MDggQyAyNzYuMjE3MDcsMjQ0LjM1ODA4IDI4Ni4zNDkwNCwyNDQuODI1OTIgMjg2LjM0OTA0LDI2NC4yMDQ1NSBDIDI4Ni4zNDkwNCwyODYuMjA0NTUgMzIzLjM3MTcxLDMyMS42NzU0NyAzMzIuMzQ5MDQsMzA3LjIwNDU1IEMgMzQ1LjcyNzY5LDI4NS42Mzg5NyAzMDkuMzQ5MDQsMjkyLjIxNTE0IDMwOS4zNDkwNCwyNDAuMjA0NTUgQyAzMDkuMzQ5MDQsMTY5LjA1MTM1IDM1MC44NzQxNywxNzkuMTgwNzEgMzUwLjg3NDE3LDEzOS4yMDQ1NSBDIDM1MC44NzQxNywxMTkuMjA0NTUgMzQ1LjM0OTA0LDExNi41MDM3NCAzNDUuMzQ5MDQsMTAyLjIwNDU1IEMgMzQ1LjM0OTA0LDgzLjMwNjk1IDM2MS45OTcxNyw4NC40MDM1NzcgMzU4Ljc1ODA1LDY4LjczNDg3OSBDIDM1Ni41MjA2MSw1Ny45MTE2NTYgMzU0Ljc2OTYyLDQ5LjIzMTk5IDM1My40NjUxNiwzNi4xNDM4ODkgQyAzNTIuNTM5NTksMjYuODU3MzA1IDM1Mi4yNDQ1MiwxNi45NTkzOTggMzQyLjU5ODU1LDE3LjM1NzM4MiBDIDMzMS4yNjUwNSwxNy44MjQ5OTIgMzI2Ljk2NTQ5LDM3Ljc3NDE5IDMwOS4zNDkwNCwzOS4yMDQ1NDkgQyAyOTEuNzY4NTEsNDAuNjMxOTkxIDI3Ni43NzgzNCwyNC4yMzgwMjggMjY5Ljk3NDA0LDI2LjU3OTU0OSBDIDI2My4yMjcwOSwyOC45MDEzMzQgMjY1LjM0OTA0LDQ3LjIwNDU0OSAyNjkuMzQ5MDQsNjAuMjA0NTQ5IEMgMjc1LjYzNTg4LDgwLjYzNjc3MSAyODkuMzQ5MDQsMTA3LjIwNDU1IDI2NC4zNDkwNCwxMTEuMjA0NTUgQyAyMzkuMzQ5MDQsMTE1LjIwNDU1IDE5Ni4zNDkwNCwxMTkuMjA0NTUgMTY1LjM0OTA0LDE2MC4yMDQ1NSBDIDEzNC4zNDkwNCwyMDEuMjA0NTUgMTM1LjQ5MzQyLDI0OS4zMjEyIDEyMy4zNDkwNCwyNjQuMjA0NTUgQyA4Mi41OTA2OTYsMzE0LjE1NTI5IDQwLjgyMzkxOSwyOTMuNjQ2MjUgNDAuODIzOTE5LDMzNS4yMDQ1NSBDIDQwLjgyMzkxOSwzNTMuODEwMTkgNzIuMzQ5MDQ1LDM2Ny4yMDQ1NSA3Ny4zNDkwNDUsMzYxLjIwNDU1IEMgODIuMzQ5MDQ1LDM1NS4yMDQ1NSAzNC44NjM3NjQsMzM3LjMyNTg3IDg3Ljk5NTQ5MiwzMTYuMjA0NTUgQyAxMzMuMzg3MTEsMjk4LjE2MDE0IDEzNy40MzkxNCwyOTQuNDc2NjMgMTUxLjM0OTA0LDMwNy4yMDQ1NSB6IFxcXCIgc3R5bGU9XFxcImZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpldmVub2RkO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDoxcHg7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW9wYWNpdHk6MVxcXCIvPiA8L3N5bWJvbD48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDE3OTIgMTc5MlxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tY29tbWVudGluZy1vXFxcIj48dGl0bGU+Y29tbWVudGluZy1vPC90aXRsZT48cGF0aCBkPVxcXCJNNjQwIDg5NnEwIDUzLTM3LjUgOTAuNXQtOTAuNSAzNy41LTkwLjUtMzcuNS0zNy41LTkwLjUgMzcuNS05MC41IDkwLjUtMzcuNSA5MC41IDM3LjUgMzcuNSA5MC41em0zODQgMHEwIDUzLTM3LjUgOTAuNXQtOTAuNSAzNy41LTkwLjUtMzcuNS0zNy41LTkwLjUgMzcuNS05MC41IDkwLjUtMzcuNSA5MC41IDM3LjUgMzcuNSA5MC41em0zODQgMHEwIDUzLTM3LjUgOTAuNXQtOTAuNSAzNy41LTkwLjUtMzcuNS0zNy41LTkwLjUgMzcuNS05MC41IDkwLjUtMzcuNSA5MC41IDM3LjUgMzcuNSA5MC41em0tNTEyLTUxMnEtMjA0IDAtMzgxLjUgNjkuNXQtMjgyIDE4Ny41LTEwNC41IDI1NXEwIDExMiA3MS41IDIxMy41dDIwMS41IDE3NS41bDg3IDUwLTI3IDk2cS0yNCA5MS03MCAxNzIgMTUyLTYzIDI3NS0xNzFsNDMtMzggNTcgNnE2OSA4IDEzMCA4IDIwNCAwIDM4MS41LTY5LjV0MjgyLTE4Ny41IDEwNC41LTI1NS0xMDQuNS0yNTUtMjgyLTE4Ny41LTM4MS41LTY5LjV6bTg5NiA1MTJxMCAxNzQtMTIwIDMyMS41dC0zMjYgMjMzLTQ1MCA4NS41cS03MCAwLTE0NS04LTE5OCAxNzUtNDYwIDI0Mi00OSAxNC0xMTQgMjJoLTVxLTE1IDAtMjctMTAuNXQtMTYtMjcuNXYtMXEtMy00LS41LTEydDItMTAgNC41LTkuNWw2LTkgNy04LjUgOC05cTctOCAzMS0zNC41dDM0LjUtMzggMzEtMzkuNSAzMi41LTUxIDI3LTU5IDI2LTc2cS0xNTctODktMjQ3LjUtMjIwdC05MC41LTI4MXEwLTEzMCA3MS0yNDguNXQxOTEtMjA0LjUgMjg2LTEzNi41IDM0OC01MC41IDM0OCA1MC41IDI4NiAxMzYuNSAxOTEgMjA0LjUgNzEgMjQ4LjV6XFxcIi8+PC9zeW1ib2w+PHN5bWJvbCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNzkyIDE3OTJcXFwiIGlkPVxcXCJsZXBsYXllci1pY29uLWRvd25sb2FkXFxcIj48dGl0bGU+ZG93bmxvYWQ8L3RpdGxlPjxwYXRoIGQ9XFxcIk0xMzQ0IDEzNDRxMC0yNi0xOS00NXQtNDUtMTktNDUgMTktMTkgNDUgMTkgNDUgNDUgMTkgNDUtMTkgMTktNDV6bTI1NiAwcTAtMjYtMTktNDV0LTQ1LTE5LTQ1IDE5LTE5IDQ1IDE5IDQ1IDQ1IDE5IDQ1LTE5IDE5LTQ1em0xMjgtMjI0djMyMHEwIDQwLTI4IDY4dC02OCAyOGgtMTQ3MnEtNDAgMC02OC0yOHQtMjgtNjh2LTMyMHEwLTQwIDI4LTY4dDY4LTI4aDQ2NWwxMzUgMTM2cTU4IDU2IDEzNiA1NnQxMzYtNTZsMTM2LTEzNmg0NjRxNDAgMCA2OCAyOHQyOCA2OHptLTMyNS01NjlxMTcgNDEtMTQgNzBsLTQ0OCA0NDhxLTE4IDE5LTQ1IDE5dC00NS0xOWwtNDQ4LTQ0OHEtMzEtMjktMTQtNzAgMTctMzkgNTktMzloMjU2di00NDhxMC0yNiAxOS00NXQ0NS0xOWgyNTZxMjYgMCA0NSAxOXQxOSA0NXY0NDhoMjU2cTQyIDAgNTkgMzl6XFxcIi8+PC9zeW1ib2w+PHN5bWJvbCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNzkyIDE3OTJcXFwiIGlkPVxcXCJsZXBsYXllci1pY29uLWVkaXRcXFwiPjx0aXRsZT5lZGl0PC90aXRsZT48cGF0aCBkPVxcXCJNODg4IDExODRsMTE2LTExNi0xNTItMTUyLTExNiAxMTZ2NTZoOTZ2OTZoNTZ6bTQ0MC03MjBxLTE2LTE2LTMzIDFsLTM1MCAzNTBxLTE3IDE3LTEgMzN0MzMtMWwzNTAtMzUwcTE3LTE3IDEtMzN6bTgwIDU5NHYxOTBxMCAxMTktODQuNSAyMDMuNXQtMjAzLjUgODQuNWgtODMycS0xMTkgMC0yMDMuNS04NC41dC04NC41LTIwMy41di04MzJxMC0xMTkgODQuNS0yMDMuNXQyMDMuNS04NC41aDgzMnE2MyAwIDExNyAyNSAxNSA3IDE4IDIzIDMgMTctOSAyOWwtNDkgNDlxLTE0IDE0LTMyIDgtMjMtNi00NS02aC04MzJxLTY2IDAtMTEzIDQ3dC00NyAxMTN2ODMycTAgNjYgNDcgMTEzdDExMyA0N2g4MzJxNjYgMCAxMTMtNDd0NDctMTEzdi0xMjZxMC0xMyA5LTIybDY0LTY0cTE1LTE1IDM1LTd0MjAgMjl6bS05Ni03MzhsMjg4IDI4OC02NzIgNjcyaC0yODh2LTI4OHptNDQ0IDEzMmwtOTIgOTItMjg4LTI4OCA5Mi05MnEyOC0yOCA2OC0yOHQ2OCAyOGwxNTIgMTUycTI4IDI4IDI4IDY4dC0yOCA2OHpcXFwiLz48L3N5bWJvbD48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDE3OTIgMTc5MlxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tZm9yd2FyZFxcXCI+PHRpdGxlPmZvcndhcmQ8L3RpdGxlPjxwYXRoIGQ9XFxcIk0xMDkgMTY1MXEtMTkgMTktMzIgMTN0LTEzLTMydi0xNDcycTAtMjYgMTMtMzJ0MzIgMTNsNzEwIDcxMHE4IDggMTMgMTl2LTcxMHEwLTI2IDEzLTMydDMyIDEzbDcxMCA3MTBxMTkgMTkgMTkgNDV0LTE5IDQ1bC03MTAgNzEwcS0xOSAxOS0zMiAxM3QtMTMtMzJ2LTcxMHEtNSAxMC0xMyAxOXpcXFwiLz48L3N5bWJvbD48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDE3OTIgMTc5MlxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24taW5mb1xcXCI+PHRpdGxlPmluZm88L3RpdGxlPjxwYXRoIGQ9XFxcIk0xMjE2IDEzNDR2MTI4cTAgMjYtMTkgNDV0LTQ1IDE5aC01MTJxLTI2IDAtNDUtMTl0LTE5LTQ1di0xMjhxMC0yNiAxOS00NXQ0NS0xOWg2NHYtMzg0aC02NHEtMjYgMC00NS0xOXQtMTktNDV2LTEyOHEwLTI2IDE5LTQ1dDQ1LTE5aDM4NHEyNiAwIDQ1IDE5dDE5IDQ1djU3Nmg2NHEyNiAwIDQ1IDE5dDE5IDQ1em0tMTI4LTExNTJ2MTkycTAgMjYtMTkgNDV0LTQ1IDE5aC0yNTZxLTI2IDAtNDUtMTl0LTE5LTQ1di0xOTJxMC0yNiAxOS00NXQ0NS0xOWgyNTZxMjYgMCA0NSAxOXQxOSA0NXpcXFwiLz48L3N5bWJvbD48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDE3OTIgMTc5MlxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tbGlzdC11bFxcXCI+PHRpdGxlPmxpc3QtdWw8L3RpdGxlPjxwYXRoIGQ9XFxcIk0zODQgMTQwOHEwIDgwLTU2IDEzNnQtMTM2IDU2LTEzNi01Ni01Ni0xMzYgNTYtMTM2IDEzNi01NiAxMzYgNTYgNTYgMTM2em0wLTUxMnEwIDgwLTU2IDEzNnQtMTM2IDU2LTEzNi01Ni01Ni0xMzYgNTYtMTM2IDEzNi01NiAxMzYgNTYgNTYgMTM2em0xNDA4IDQxNnYxOTJxMCAxMy05LjUgMjIuNXQtMjIuNSA5LjVoLTEyMTZxLTEzIDAtMjIuNS05LjV0LTkuNS0yMi41di0xOTJxMC0xMyA5LjUtMjIuNXQyMi41LTkuNWgxMjE2cTEzIDAgMjIuNSA5LjV0OS41IDIyLjV6bS0xNDA4LTkyOHEwIDgwLTU2IDEzNnQtMTM2IDU2LTEzNi01Ni01Ni0xMzYgNTYtMTM2IDEzNi01NiAxMzYgNTYgNTYgMTM2em0xNDA4IDQxNnYxOTJxMCAxMy05LjUgMjIuNXQtMjIuNSA5LjVoLTEyMTZxLTEzIDAtMjIuNS05LjV0LTkuNS0yMi41di0xOTJxMC0xMyA5LjUtMjIuNXQyMi41LTkuNWgxMjE2cTEzIDAgMjIuNSA5LjV0OS41IDIyLjV6bTAtNTEydjE5MnEwIDEzLTkuNSAyMi41dC0yMi41IDkuNWgtMTIxNnEtMTMgMC0yMi41LTkuNXQtOS41LTIyLjV2LTE5MnEwLTEzIDkuNS0yMi41dDIyLjUtOS41aDEyMTZxMTMgMCAyMi41IDkuNXQ5LjUgMjIuNXpcXFwiLz48L3N5bWJvbD48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDE3OTIgMTc5MlxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tbWFnaWNcXFwiPjx0aXRsZT5tYWdpYzwvdGl0bGU+PHBhdGggZD1cXFwiTTEyNTQgNTgxbDI5My0yOTMtMTA3LTEwNy0yOTMgMjkzem00NDctMjkzcTAgMjctMTggNDVsLTEyODYgMTI4NnEtMTggMTgtNDUgMTh0LTQ1LTE4bC0xOTgtMTk4cS0xOC0xOC0xOC00NXQxOC00NWwxMjg2LTEyODZxMTgtMTggNDUtMTh0NDUgMThsMTk4IDE5OHExOCAxOCAxOCA0NXptLTEzNTEtMTkwbDk4IDMwLTk4IDMwLTMwIDk4LTMwLTk4LTk4LTMwIDk4LTMwIDMwLTk4em0zNTAgMTYybDE5NiA2MC0xOTYgNjAtNjAgMTk2LTYwLTE5Ni0xOTYtNjAgMTk2LTYwIDYwLTE5NnptOTMwIDQ3OGw5OCAzMC05OCAzMC0zMCA5OC0zMC05OC05OC0zMCA5OC0zMCAzMC05OHptLTY0MC02NDBsOTggMzAtOTggMzAtMzAgOTgtMzAtOTgtOTgtMzAgOTgtMzAgMzAtOTh6XFxcIi8+PC9zeW1ib2w+PHN5bWJvbCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNzkyIDE3OTJcXFwiIGlkPVxcXCJsZXBsYXllci1pY29uLXBhdXNlXFxcIj48dGl0bGU+cGF1c2U8L3RpdGxlPjxwYXRoIGQ9XFxcIk0xNjY0IDE5MnYxNDA4cTAgMjYtMTkgNDV0LTQ1IDE5aC01MTJxLTI2IDAtNDUtMTl0LTE5LTQ1di0xNDA4cTAtMjYgMTktNDV0NDUtMTloNTEycTI2IDAgNDUgMTl0MTkgNDV6bS04OTYgMHYxNDA4cTAgMjYtMTkgNDV0LTQ1IDE5aC01MTJxLTI2IDAtNDUtMTl0LTE5LTQ1di0xNDA4cTAtMjYgMTktNDV0NDUtMTloNTEycTI2IDAgNDUgMTl0MTkgNDV6XFxcIi8+PC9zeW1ib2w+PHN5bWJvbCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNzkyIDE3OTJcXFwiIGlkPVxcXCJsZXBsYXllci1pY29uLXBsYW5lXFxcIj48dGl0bGU+cGxhbmU8L3RpdGxlPjxwYXRoIGQ9XFxcIk0xNTY4IDE2MHE0NCA1MiAxMiAxNDh0LTEwOCAxNzJsLTE2MSAxNjEgMTYwIDY5NnE1IDE5LTEyIDMzbC0xMjggOTZxLTcgNi0xOSA2LTQgMC03LTEtMTUtMy0yMS0xNmwtMjc5LTUwOC0yNTkgMjU5IDUzIDE5NHE1IDE3LTggMzFsLTk2IDk2cS05IDktMjMgOWgtMnEtMTUtMi0yNC0xM2wtMTg5LTI1Mi0yNTItMTg5cS0xMS03LTEzLTIzLTEtMTMgOS0yNWw5Ni05N3E5LTkgMjMtOSA2IDAgOCAxbDE5NCA1MyAyNTktMjU5LTUwOC0yNzlxLTE0LTgtMTctMjQtMi0xNiA5LTI3bDEyOC0xMjhxMTQtMTMgMzAtOGw2NjUgMTU5IDE2MC0xNjBxNzYtNzYgMTcyLTEwOHQxNDggMTJ6XFxcIi8+PC9zeW1ib2w+PHN5bWJvbCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNzkyIDE3OTJcXFwiIGlkPVxcXCJsZXBsYXllci1pY29uLXBsYXlcXFwiPjx0aXRsZT5wbGF5PC90aXRsZT48cGF0aCBkPVxcXCJNMTU3NiA5MjdsLTEzMjggNzM4cS0yMyAxMy0zOS41IDN0LTE2LjUtMzZ2LTE0NzJxMC0yNiAxNi41LTM2dDM5LjUgM2wxMzI4IDczOHEyMyAxMyAyMyAzMXQtMjMgMzF6XFxcIi8+PC9zeW1ib2w+PHN5bWJvbCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNzkyIDE3OTJcXFwiIGlkPVxcXCJsZXBsYXllci1pY29uLXBsdXNcXFwiPjx0aXRsZT5wbHVzPC90aXRsZT48cGF0aCBkPVxcXCJNMTYwMCA3MzZ2MTkycTAgNDAtMjggNjh0LTY4IDI4aC00MTZ2NDE2cTAgNDAtMjggNjh0LTY4IDI4aC0xOTJxLTQwIDAtNjgtMjh0LTI4LTY4di00MTZoLTQxNnEtNDAgMC02OC0yOHQtMjgtNjh2LTE5MnEwLTQwIDI4LTY4dDY4LTI4aDQxNnYtNDE2cTAtNDAgMjgtNjh0NjgtMjhoMTkycTQwIDAgNjggMjh0MjggNjh2NDE2aDQxNnE0MCAwIDY4IDI4dDI4IDY4elxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi1yZWRvXFxcIj48dGl0bGU+cmVkbzwvdGl0bGU+PHBhdGggZD1cXFwiTTE2NjQgMjU2djQ0OHEwIDI2LTE5IDQ1dC00NSAxOWgtNDQ4cS00MiAwLTU5LTQwLTE3LTM5IDE0LTY5bDEzOC0xMzhxLTE0OC0xMzctMzQ5LTEzNy0xMDQgMC0xOTguNSA0MC41dC0xNjMuNSAxMDkuNS0xMDkuNSAxNjMuNS00MC41IDE5OC41IDQwLjUgMTk4LjUgMTA5LjUgMTYzLjUgMTYzLjUgMTA5LjUgMTk4LjUgNDAuNXExMTkgMCAyMjUtNTJ0MTc5LTE0N3E3LTEwIDIzLTEyIDE0IDAgMjUgOWwxMzcgMTM4cTkgOCA5LjUgMjAuNXQtNy41IDIyLjVxLTEwOSAxMzItMjY0IDIwNC41dC0zMjcgNzIuNXEtMTU2IDAtMjk4LTYxdC0yNDUtMTY0LTE2NC0yNDUtNjEtMjk4IDYxLTI5OCAxNjQtMjQ1IDI0NS0xNjQgMjk4LTYxcTE0NyAwIDI4NC41IDU1LjV0MjQ0LjUgMTU2LjVsMTMwLTEyOXEyOS0zMSA3MC0xNCAzOSAxNyAzOSA1OXpcXFwiLz48L3N5bWJvbD48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDE3OTIgMTc5MlxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tcmVmcmVzaFxcXCI+PHRpdGxlPnJlZnJlc2g8L3RpdGxlPjxwYXRoIGQ9XFxcIk0xNjM5IDEwNTZxMCA1LTEgNy02NCAyNjgtMjY4IDQzNC41dC00NzggMTY2LjVxLTE0NiAwLTI4Mi41LTU1dC0yNDMuNS0xNTdsLTEyOSAxMjlxLTE5IDE5LTQ1IDE5dC00NS0xOS0xOS00NXYtNDQ4cTAtMjYgMTktNDV0NDUtMTloNDQ4cTI2IDAgNDUgMTl0MTkgNDUtMTkgNDVsLTEzNyAxMzdxNzEgNjYgMTYxIDEwMnQxODcgMzZxMTM0IDAgMjUwLTY1dDE4Ni0xNzlxMTEtMTcgNTMtMTE3IDgtMjMgMzAtMjNoMTkycTEzIDAgMjIuNSA5LjV0OS41IDIyLjV6bTI1LTgwMHY0NDhxMCAyNi0xOSA0NXQtNDUgMTloLTQ0OHEtMjYgMC00NS0xOXQtMTktNDUgMTktNDVsMTM4LTEzOHEtMTQ4LTEzNy0zNDktMTM3LTEzNCAwLTI1MCA2NXQtMTg2IDE3OXEtMTEgMTctNTMgMTE3LTggMjMtMzAgMjNoLTE5OXEtMTMgMC0yMi41LTkuNXQtOS41LTIyLjV2LTdxNjUtMjY4IDI3MC00MzQuNXQ0ODAtMTY2LjVxMTQ2IDAgMjg0IDU1LjV0MjQ1IDE1Ni41bDEzMC0xMjlxMTktMTkgNDUtMTl0NDUgMTkgMTkgNDV6XFxcIi8+PC9zeW1ib2w+PHN5bWJvbCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNzkyIDE3OTJcXFwiIGlkPVxcXCJsZXBsYXllci1pY29uLXRyYXNoXFxcIj48dGl0bGU+dHJhc2g8L3RpdGxlPjxwYXRoIGQ9XFxcIk03MDQgMTM3NnYtNzA0cTAtMTQtOS0yM3QtMjMtOWgtNjRxLTE0IDAtMjMgOXQtOSAyM3Y3MDRxMCAxNCA5IDIzdDIzIDloNjRxMTQgMCAyMy05dDktMjN6bTI1NiAwdi03MDRxMC0xNC05LTIzdC0yMy05aC02NHEtMTQgMC0yMyA5dC05IDIzdjcwNHEwIDE0IDkgMjN0MjMgOWg2NHExNCAwIDIzLTl0OS0yM3ptMjU2IDB2LTcwNHEwLTE0LTktMjN0LTIzLTloLTY0cS0xNCAwLTIzIDl0LTkgMjN2NzA0cTAgMTQgOSAyM3QyMyA5aDY0cTE0IDAgMjMtOXQ5LTIzem0tNTQ0LTk5Mmg0NDhsLTQ4LTExN3EtNy05LTE3LTExaC0zMTdxLTEwIDItMTcgMTF6bTkyOCAzMnY2NHEwIDE0LTkgMjN0LTIzIDloLTk2djk0OHEwIDgzLTQ3IDE0My41dC0xMTMgNjAuNWgtODMycS02NiAwLTExMy01OC41dC00Ny0xNDEuNXYtOTUyaC05NnEtMTQgMC0yMy05dC05LTIzdi02NHEwLTE0IDktMjN0MjMtOWgzMDlsNzAtMTY3cTE1LTM3IDU0LTYzdDc5LTI2aDMyMHE0MCAwIDc5IDI2dDU0IDYzbDcwIDE2N2gzMDlxMTQgMCAyMyA5dDkgMjN6XFxcIi8+PC9zeW1ib2w+PHN5bWJvbCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNzkyIDE3OTJcXFwiIGlkPVxcXCJsZXBsYXllci1pY29uLXVuZG9cXFwiPjx0aXRsZT51bmRvPC90aXRsZT48cGF0aCBkPVxcXCJNMTY2NCA4OTZxMCAxNTYtNjEgMjk4dC0xNjQgMjQ1LTI0NSAxNjQtMjk4IDYxcS0xNzIgMC0zMjctNzIuNXQtMjY0LTIwNC41cS03LTEwLTYuNS0yMi41dDguNS0yMC41bDEzNy0xMzhxMTAtOSAyNS05IDE2IDIgMjMgMTIgNzMgOTUgMTc5IDE0N3QyMjUgNTJxMTA0IDAgMTk4LjUtNDAuNXQxNjMuNS0xMDkuNSAxMDkuNS0xNjMuNSA0MC41LTE5OC41LTQwLjUtMTk4LjUtMTA5LjUtMTYzLjUtMTYzLjUtMTA5LjUtMTk4LjUtNDAuNXEtOTggMC0xODggMzUuNXQtMTYwIDEwMS41bDEzNyAxMzhxMzEgMzAgMTQgNjktMTcgNDAtNTkgNDBoLTQ0OHEtMjYgMC00NS0xOXQtMTktNDV2LTQ0OHEwLTQyIDQwLTU5IDM5LTE3IDY5IDE0bDEzMCAxMjlxMTA3LTEwMSAyNDQuNS0xNTYuNXQyODQuNS01NS41cTE1NiAwIDI5OCA2MXQyNDUgMTY0IDE2NCAyNDUgNjEgMjk4elxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi12b2x1bWUtZG93blxcXCI+PHRpdGxlPnZvbHVtZS1kb3duPC90aXRsZT48cGF0aCBkPVxcXCJNMTA4OCAzNTJ2MTA4OHEwIDI2LTE5IDQ1dC00NSAxOS00NS0xOWwtMzMzLTMzM2gtMjYycS0yNiAwLTQ1LTE5dC0xOS00NXYtMzg0cTAtMjYgMTktNDV0NDUtMTloMjYybDMzMy0zMzNxMTktMTkgNDUtMTl0NDUgMTkgMTkgNDV6bTM4NCA1NDRxMCA3Ni00Mi41IDE0MS41dC0xMTIuNSA5My41cS0xMCA1LTI1IDUtMjYgMC00NS0xOC41dC0xOS00NS41cTAtMjEgMTItMzUuNXQyOS0yNSAzNC0yMyAyOS0zNS41IDEyLTU3LTEyLTU3LTI5LTM1LjUtMzQtMjMtMjktMjUtMTItMzUuNXEwLTI3IDE5LTQ1LjV0NDUtMTguNXExNSAwIDI1IDUgNzAgMjcgMTEyLjUgOTN0NDIuNSAxNDJ6XFxcIi8+PC9zeW1ib2w+PHN5bWJvbCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNzkyIDE3OTJcXFwiIGlkPVxcXCJsZXBsYXllci1pY29uLXZvbHVtZS1vZmZcXFwiPjx0aXRsZT52b2x1bWUtb2ZmPC90aXRsZT48cGF0aCBkPVxcXCJNMTI4MCAzNTJ2MTA4OHEwIDI2LTE5IDQ1dC00NSAxOS00NS0xOWwtMzMzLTMzM2gtMjYycS0yNiAwLTQ1LTE5dC0xOS00NXYtMzg0cTAtMjYgMTktNDV0NDUtMTloMjYybDMzMy0zMzNxMTktMTkgNDUtMTl0NDUgMTkgMTkgNDV6XFxcIi8+PC9zeW1ib2w+PHN5bWJvbCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNzkyIDE3OTJcXFwiIGlkPVxcXCJsZXBsYXllci1pY29uLXZvbHVtZS11cFxcXCI+PHRpdGxlPnZvbHVtZS11cDwvdGl0bGU+PHBhdGggZD1cXFwiTTgzMiAzNTJ2MTA4OHEwIDI2LTE5IDQ1dC00NSAxOS00NS0xOWwtMzMzLTMzM2gtMjYycS0yNiAwLTQ1LTE5dC0xOS00NXYtMzg0cTAtMjYgMTktNDV0NDUtMTloMjYybDMzMy0zMzNxMTktMTkgNDUtMTl0NDUgMTkgMTkgNDV6bTM4NCA1NDRxMCA3Ni00Mi41IDE0MS41dC0xMTIuNSA5My41cS0xMCA1LTI1IDUtMjYgMC00NS0xOC41dC0xOS00NS41cTAtMjEgMTItMzUuNXQyOS0yNSAzNC0yMyAyOS0zNS41IDEyLTU3LTEyLTU3LTI5LTM1LjUtMzQtMjMtMjktMjUtMTItMzUuNXEwLTI3IDE5LTQ1LjV0NDUtMTguNXExNSAwIDI1IDUgNzAgMjcgMTEyLjUgOTN0NDIuNSAxNDJ6bTI1NiAwcTAgMTUzLTg1IDI4Mi41dC0yMjUgMTg4LjVxLTEzIDUtMjUgNS0yNyAwLTQ2LTE5dC0xOS00NXEwLTM5IDM5LTU5IDU2LTI5IDc2LTQ0IDc0LTU0IDExNS41LTEzNS41dDQxLjUtMTczLjUtNDEuNS0xNzMuNS0xMTUuNS0xMzUuNXEtMjAtMTUtNzYtNDQtMzktMjAtMzktNTkgMC0yNiAxOS00NXQ0NS0xOXExMyAwIDI2IDUgMTQwIDU5IDIyNSAxODguNXQ4NSAyODIuNXptMjU2IDBxMCAyMzAtMTI3IDQyMi41dC0zMzggMjgzLjVxLTEzIDUtMjYgNS0yNiAwLTQ1LTE5dC0xOS00NXEwLTM2IDM5LTU5IDctNCAyMi41LTEwLjV0MjIuNS0xMC41cTQ2LTI1IDgyLTUxIDEyMy05MSAxOTItMjI3dDY5LTI4OS02OS0yODktMTkyLTIyN3EtMzYtMjYtODItNTEtNy00LTIyLjUtMTAuNXQtMjIuNS0xMC41cS0zOS0yMy0zOS01OSAwLTI2IDE5LTQ1dDQ1LTE5cTEzIDAgMjYgNSAyMTEgOTEgMzM4IDI4My41dDEyNyA0MjIuNXpcXFwiLz48L3N5bWJvbD48L3N2Zz5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vZGlzdC9zdmcvc3ZnLWRlZnMuc3ZnXG4vLyBtb2R1bGUgaWQgPSA2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImV4cG9ydCBjb25zdCBwcmVzZXQgPSB7XG5cdG9wdGlvbnMgOiB7XG5cdFx0d2lkdGggOiAnMTAwJScsXG5cdFx0Y29udHJvbHMgOiB7XG5cdFx0XHRjb21tb24gOiBbXG5cdFx0XHRcdFsncGxheScsICd2b2x1bWUnLCAnZGl2aWRlcicsICd0aW1lbGluZScsICdkaXZpZGVyJywgJ2Z1bGxzY3JlZW4nXSxcblx0XHRcdFx0WydyYXRlJywgJ2RpdmlkZXInLCAnYmFja3dhcmQnLCAnZGl2aWRlcicsICdzb3VyY2UnLCAnZGl2aWRlcicsICdkb3dubG9hZCddXG5cdFx0XHRdLFxuXHRcdFx0ZnVsbHNjcmVlbiA6IFtcblx0XHRcdFx0WydwbGF5JywgJ3ZvbHVtZScsICdkaXZpZGVyJywgJ3RpbWVsaW5lJywgJ2RpdmlkZXInLCAncmF0ZScsICdkaXZpZGVyJywgJ2JhY2t3YXJkJywgJ2RpdmlkZXInLCAnc291cmNlJywgJ2RpdmlkZXInLCAnZG93bmxvYWQnLCAnZGl2aWRlcicsICdmdWxsc2NyZWVuJ11cblx0XHRcdF1cblx0XHR9XG5cdH0sXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvcHJlc2V0cy92cHMuanMiLCJjb25zdCBjb250cm9scyA9IFsncGxheScsICd2b2x1bWUnLCAnZGl2aWRlcicsICd0aW1lbGluZScsICdkaXZpZGVyJywgJ3JhdGUnLCAnZG93bmxvYWQnLCAnZnVsbHNjcmVlbiddO1xuXG5leHBvcnQgY29uc3QgcHJlc2V0ID0ge1xuXHRvcHRpb25zIDoge1xuXHRcdGNvbnRyb2xzIDoge1xuXHRcdFx0Y29tbW9uIDogW1xuXHRcdFx0XHRjb250cm9scyxcblx0XHRcdFx0W11cblx0XHRcdF0sXG5cdFx0XHRmdWxsc2NyZWVuIDogW1xuXHRcdFx0XHRjb250cm9sc1xuXHRcdFx0XVxuXHRcdH1cblx0fSxcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9wcmVzZXRzL3NpbXBsZS5qcyIsImV4cG9ydCBjb25zdCBwcmVzZXQgPSB7XG5cdG9wdGlvbnMgOiB7XG5cdFx0d2lkdGggOiAnMTAwJScsXG5cdFx0Y29udHJvbHMgOiB7XG5cdFx0XHRjb21tb24gOiBbXG5cdFx0XHRcdFsncGxheScsICd2b2x1bWUnLCAndGltZWxpbmUnLCAncmF0ZScsICdzb3VyY2UnLCAnZGl2aWRlcicsICdkb3dubG9hZCcsICdmdWxsc2NyZWVuJ10sXG5cdFx0XHRcdFtdXG5cdFx0XHRdLFxuXHRcdFx0ZnVsbHNjcmVlbiA6IFtcblx0XHRcdFx0WydwbGF5JywgJ3ZvbHVtZScsICd0aW1lbGluZScsICdyYXRlJywgJ3NvdXJjZScsICdkaXZpZGVyJywgJ2Rvd25sb2FkJywgJ2Z1bGxzY3JlZW4nXSxcblx0XHRcdF1cblx0XHR9XG5cdH0sXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvcHJlc2V0cy9zbXMuanMiLCJleHBvcnQgY29uc3QgcHJlc2V0ID0ge1xuXHRvcHRpb25zIDoge1xuXHRcdHdpZHRoIDogJzEwMCUnLFxuXHRcdGNvbnRyb2xzIDoge1xuXHRcdFx0Y29tbW9uIDogW1xuXHRcdFx0XHRbJ3BsYXknLCAndm9sdW1lJywgJ3RpbWVsaW5lJywgJ3JhdGUnLCAnc291cmNlJywgJ2RpdmlkZXInLCAnZnVsbHNjcmVlbiddLFxuXHRcdFx0XHRbXVxuXHRcdFx0XSxcblx0XHRcdGZ1bGxzY3JlZW4gOiBbXG5cdFx0XHRcdFsncGxheScsICd2b2x1bWUnLCAndGltZWxpbmUnLCAncmF0ZScsICdzb3VyY2UnLCAnZGl2aWRlcicsICdmdWxsc2NyZWVuJ10sXG5cdFx0XHRdXG5cdFx0fVxuXHR9LFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL3ByZXNldHMvY29tcHJlc3NlZC5qcyIsImV4cG9ydCBjb25zdCBwcmVzZXQgPSB7XG5cdG9wdGlvbnMgOiB7XG5cdFx0d2lkdGggOiAnMTAwJScsXG5cdFx0Y29udHJvbHMgOiB7XG5cdFx0XHRjb21tb24gOiBbXG5cdFx0XHRcdFsncGxheScsICd0aW1lbGluZScsICdyYXRlJywgJ3ZvbHVtZScsICdzb3VyY2UnLCAnZnVsbHNjcmVlbiddLFxuXHRcdFx0XHRbXVxuXHRcdFx0XSxcblx0XHRcdGZ1bGxzY3JlZW4gOiBbXG5cdFx0XHRcdFsncGxheScsICd0aW1lbGluZScsICdyYXRlJywgJ3ZvbHVtZScsICdzb3VyY2UnLCAnZnVsbHNjcmVlbiddXG5cdFx0XHRdXG5cdFx0fVxuXHR9LFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL3ByZXNldHMvMjAzNS5qcyIsImltcG9ydCAnLi9sZS1wbGF5ZXInXG5pbXBvcnQgJy4vcGx1Z2lucy9sZS1wbGF5ZXItZ2EnXG5pbXBvcnQgJy4vcGx1Z2lucy9sZS1wbGF5ZXIteW91dHViZSdcbmltcG9ydCAnLi9wbHVnaW5zL2xlLXBsYXllci1uZXh0J1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9sZS1wbGF5ZXItZnVsbC5qcyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuY29uc3QgUGxheWVyID0gd2luZG93LmxlUGxheWVyIHx8IHdpbmRvdy4kLmxlUGxheWVyO1xuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG5cdHZpZGVvUGxheWVkIDogWzI1LCA1MCwgMTAwXSxcblx0dmlkZW9QbGF5ZWREZWx0YSA6IDUsXG5cdHZvbHVtZUNoYW5nZURlbGF5IDogMTAwMCxcblx0cmF0ZUNoYW5nZURlbGF5IDogMjAwMFxufVxuXG5QbGF5ZXIucGx1Z2luKCdnYScsIGZ1bmN0aW9uKHBsdWdpbk9wdGlvbnMpIHtcblx0Y29uc3Qgb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0T3B0aW9ucywgcGx1Z2luT3B0aW9ucyk7XG5cdGNvbnN0IHBsYXllciA9IHRoaXM7XG5cblx0aWYgKCF3aW5kb3cuZ2EpIHtcblx0XHRjb25zb2xlLmVycm9yKCdHb29nbGUgQW5hbHl0aWNzIGRvZXMgbm90IGV4aXN0Jyk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0cGxheWVyLm9uKCdmaXJzdHBsYXknLCAoZSkgPT4ge1xuXHRcdHdpbmRvdy5nYShcblx0XHRcdCdzZW5kJyxcblx0XHRcdCdldmVudCcsXG5cdFx0XHQnUGxheWVyIFZpZGVvIFN0YXJ0ZWQnXG5cdFx0KVxuXHR9KTtcblxuXHRwbGF5ZXIub24oJ2NvbnRyb2xjbGljaycsIChlLCBkYXRhKSA9PiB7XG5cdFx0Y29uc3QgY29udHJvbCA9IGRhdGEuY29udHJvbDtcblx0XHRjb25zdCB7bmFtZSwgY29sbGVjdGlvbn0gPSBjb250cm9sLm9wdGlvbnM7XG5cdFx0aWYobmFtZSkge1xuXHRcdFx0d2luZG93LmdhKFxuXHRcdFx0XHQnc2VuZCcsXG5cdFx0XHRcdCdldmVudCcsXG5cdFx0XHRcdCdQbGF5ZXIgQ29udHJvbCBDbGljaycsXG5cdFx0XHRcdG5hbWUsXG5cdFx0XHRcdGNvbGxlY3Rpb25cblx0XHRcdClcblx0XHR9XG5cdH0pO1xuXG5cdHBsYXllci5vbignc2VjdGlvbnNjbGljaycsIChlLCBkYXRhKSA9PiB7XG5cdFx0d2luZG93LmdhKFxuXHRcdFx0J3NlbmQnLFxuXHRcdFx0J2V2ZW50Jyxcblx0XHRcdCdQbGF5ZXIgU2VjdGlvbnMnLFxuXHRcdFx0J0NsaWNrJyxcblx0XHRcdHBsYXllci52aWV3XG5cdFx0KVxuXHR9KTtcblxuXG5cdGxldCB2b2x1bWVDaGFuZ2VUaW1lb3V0ID0gbnVsbDtcblxuXHRwbGF5ZXIub24oJ3ZvbHVtZWNoYW5nZScsIChlLCBkYXRhKSA9PiB7XG5cdFx0Y2xlYXJUaW1lb3V0KHZvbHVtZUNoYW5nZVRpbWVvdXQpO1xuXG5cdFx0dm9sdW1lQ2hhbmdlVGltZW91dCA9IHNldFRpbWVvdXQoXyA9PiB7XG5cdFx0XHRjb25zdCB2YWx1ZSA9IGRhdGEudm9sdW1lO1xuXHRcdFx0d2luZG93LmdhKFxuXHRcdFx0XHQnc2VuZCcsXG5cdFx0XHRcdCdldmVudCcsXG5cdFx0XHRcdCdQbGF5ZXIgVm9sdW1lIENoYW5nZScsXG5cdFx0XHRcdE51bWJlcih2YWx1ZSkudG9GaXhlZCgxKVxuXHRcdFx0KVxuXG5cdFx0fSwgb3B0aW9ucy52b2x1bWVDaGFuZ2VEZWxheSk7XG5cdH0pO1xuXG5cdGxldCByYXRlQ2hhbmdlVGltZW91dCA9IG51bGw7XG5cdHBsYXllci5vbigncmF0ZWNoYW5nZScsIChlLCBkYXRhKSA9PiB7XG5cdFx0Y2xlYXJUaW1lb3V0KHJhdGVDaGFuZ2VUaW1lb3V0KTtcblxuXHRcdHJhdGVDaGFuZ2VUaW1lb3V0ID0gc2V0VGltZW91dChfID0+IHtcblx0XHRcdGNvbnN0IHZhbHVlID0gZGF0YS5yYXRlO1xuXHRcdFx0d2luZG93LmdhKFxuXHRcdFx0XHQnc2VuZCcsXG5cdFx0XHRcdCdldmVudCcsXG5cdFx0XHRcdCdQbGF5ZXIgUmF0ZSBDaGFuZ2UnLFxuXHRcdFx0XHR2YWx1ZVxuXHRcdFx0KVxuXG5cdFx0fSwgb3B0aW9ucy5yYXRlQ2hhbmdlRGVsYXkpO1xuXHR9KVxuXG5cblx0bGV0IHBsYXllZEV2ZW50c1NlbnQgPSB7fTtcblx0cGxheWVyLm9uKCd0aW1ldXBkYXRlJywgKCkgPT4ge1xuXHRcdGNvbnN0IHBlcmNlbnQgPSBwbGF5ZXIudmlkZW8ucGxheWVkUGVyY2VudGFnZTtcblx0XHRjb25zdCBkZWx0YSA9IG9wdGlvbnMudmlkZW9QbGF5ZWREZWx0YTtcblx0XHRvcHRpb25zLnZpZGVvUGxheWVkLmZvckVhY2goaXRlbSA9PiB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdCFwbGF5ZWRFdmVudHNTZW50W2l0ZW1dICYmXG5cdFx0XHRcdE1hdGguYWJzKHBlcmNlbnQgLSBpdGVtKSA8IGRlbHRhXG5cdFx0XHQpIHtcblx0XHRcdFx0d2luZG93LmdhKFxuXHRcdFx0XHRcdCdzZW5kJyxcblx0XHRcdFx0XHQnZXZlbnQnLFxuXHRcdFx0XHRcdCdQbGF5ZXIgVmlkZW8gUGxheWVkJyxcblx0XHRcdFx0XHRgJHtpdGVtIC0gZGVsdGF9LSR7aXRlbX0lYFxuXHRcdFx0XHQpO1xuXHRcdFx0XHRwbGF5ZWRFdmVudHNTZW50W2l0ZW1dID0gdHJ1ZTtcblxuXHRcdFx0fVxuXHRcdH0pXG5cdH0pO1xuXG5cblx0Ly8gRmlyc3QgcXVhbGl0eWNoYW5nZSBmaXJlZCBvbiBwbGF5ZXIgaW5pdCwgYW5kIHdlIGRvbid0IG5lZWQgdHJhY2sgdGhpcyB0byBHQVxuXHRsZXQgbG9hZFF1YWxpdHkgPSBmYWxzZTtcblx0cGxheWVyLm9uKCdxdWFsaXR5Y2hhbmdlJywgZnVuY3Rpb24oZSkge1xuXHRcdGlmKCFsb2FkUXVhbGl0eSkge1xuXHRcdFx0bG9hZFF1YWxpdHkgPSB0cnVlO1xuXHRcdFx0cmV0dXJuXG5cdFx0fVxuXG5cdFx0aWYocGxheWVyLnZpZGVvLnBsYXliYWNrUXVhbGl0eSAhPSBudWxsKSB7XG5cdFx0XHR3aW5kb3cuZ2EoXG5cdFx0XHRcdCdzZW5kJyxcblx0XHRcdFx0J2V2ZW50Jyxcblx0XHRcdFx0J1BsYXllciBDaGFuZ2UgUXVhbGl0eScsXG5cdFx0XHRcdHBsYXllci52aWRlby5wbGF5YmFja1F1YWxpdHkudGl0bGVcblx0XHRcdClcblx0XHR9XG5cdH0pXG5cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvcGx1Z2lucy9sZS1wbGF5ZXItZ2EuanMiLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbmNvbnN0IFBsYXllciA9IHdpbmRvdy5sZVBsYXllciB8fCB3aW5kb3cuJC5sZVBsYXllcjtcbmNvbnN0IEVudGl0eSA9IFBsYXllci5nZXRDb21wb25lbnQoJ0VudGl0eScpO1xuXG5jb25zdCB0cmFja1Byb3ZpZGUgPSB0cmFjayA9PiB7XG5cdGlmKHRyYWNrID09IG51bGwgfHwgdHJhY2subGFuZ3VhZ2VDb2RlID09IG51bGwpIHtcblx0XHRyZXR1cm4gdHJhY2tcblx0fVxuXHRyZXR1cm4ge1xuXHRcdGxhbmd1YWdlIDogdHJhY2subGFuZ3VhZ2VDb2RlLFxuXHRcdHRpdGxlIDogdHJhY2subGFuZ3VhZ2VDb2RlLFxuXHRcdHRvb2x0aXAgOiB0cmFjay5sYW5ndWFnZU5hbWUsXG5cdFx0bmFtZSA6IHRyYWNrLmxhbmd1YWdlQ29kZSxcblx0fVxufVxuXG5cbmNsYXNzIFlvdXR1YmUgZXh0ZW5kcyBFbnRpdHkge1xuXHRjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXHRcdHRoaXMuX3BhdXNlZCA9IHRydWU7XG5cblx0XHR0aGlzLnNyYyA9IHRoaXMucGxheWVyLm9wdGlvbnMuc3JjO1xuXG5cdFx0dGhpcy5wbGF5ZXIuYWRkQ2xhc3MoJ2xlcGxheWVyLS15b3V0dWJlJyk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdjbGljaycsIHRoaXMub25DbGljay5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ2RibGNsaWNrJywgdGhpcy5vbkRibGNsaWNrLmJpbmQodGhpcykpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0c2V0IHNyYyhzcmMpIHtcblx0XHRpZihzcmMgPT0gbnVsbCkgcmV0dXJuO1xuXHRcdGlmKHRoaXMuc3JjICYmIHRoaXMuc3JjLnVybCA9PT0gc3JjLnVybCkgcmV0dXJuO1xuXG5cdFx0Y29uc3QgdXJsID0gc3JjLnVybCB8fCBzcmMuaWQ7XG5cblx0XHR0aGlzLnZpZGVvSWQgPSBZb3V0dWJlLnBhcnNlVXJsKHVybCk7XG5cblx0XHRpZih0aGlzLnBsYXllci5vcHRpb25zLnBvc3Rlcikge1xuXHRcdFx0dGhpcy5wb3N0ZXIgPSB0aGlzLnBsYXllci5vcHRpb25zLnBvc3RlclxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnBvc3RlciA9ICdodHRwczovL2ltZy55b3V0dWJlLmNvbS92aS8nICsgdGhpcy52aWRlb0lkICsgJy8wLmpwZyc7XG5cdFx0fVxuXHR9XG5cblx0b25DbGljayhldmVudCkge1xuXHRcdHRoaXMudHJpZ2dlcignY2xpY2snKTtcblx0fVxuXG5cdG9uRGJsY2xpY2soKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCdkYmxjbGljaycpO1xuXHR9XG5cblx0Z2V0IGN1cnJlbnRUaW1lKCkge1xuXHRcdHJldHVybiB0aGlzLnl0UGxheWVyPyB0aGlzLnl0UGxheWVyLmdldEN1cnJlbnRUaW1lKCkgOiAwO1xuXHR9XG5cblx0c2V0IGN1cnJlbnRUaW1lKHZhbHVlKSB7XG5cdFx0aWYodGhpcy5sYXN0U3RhdGUgPT09IFlULlBsYXllclN0YXRlLlBBVVNFRCkge1xuXHRcdFx0dGhpcy50aW1lQmVmb3JlU2VlayA9IHRoaXMuY3VycmVudFRpbWU7XG5cdFx0fVxuXG5cdFx0aWYgKCF0aGlzLmlzU2Vla2luZykge1xuXHRcdFx0dGhpcy53YXNQYXVzZWRCZWZvcmVTZWVrID0gdGhpcy5wYXVzZWQ7XG5cdFx0fVxuXG5cdFx0bGV0IHRpbWU7XG5cdFx0aWYgKHZhbHVlID49IHRoaXMuZHVyYXRpb24pIHtcblx0XHRcdHRpbWUgPSB0aGlzLmR1cmF0aW9uXG5cdFx0fSBlbHNlIGlmICh2YWx1ZSA8IDApIHtcblx0XHRcdHRpbWUgPSAwXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRpbWUgPSB2YWx1ZTtcblx0XHR9XG5cblx0XHR0aGlzLmlzU2Vla2luZyA9IHRydWU7XG5cdFx0dGhpcy55dFBsYXllci5zZWVrVG8odGltZSwgdHJ1ZSk7XG5cdFx0dGhpcy5wbGF5ZXIudHJpZ2dlcigndGltZXVwZGF0ZWxvYWQnLCB7IGN1cnJlbnRUaW1lIDogdGltZSB9KTtcblxuXHRcdHRoaXMudHJpZ2dlcignc2Vla2luZycpO1xuXG5cdFx0dGhpcy5lbWl0VGltZXVwZGF0ZSgpO1xuXHR9XG5cblx0Z2V0IGR1cmF0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLnl0UGxheWVyICYmIHRoaXMueXRQbGF5ZXIuZ2V0RHVyYXRpb24gPyB0aGlzLnl0UGxheWVyLmdldER1cmF0aW9uKCkgOiBOYU47XG5cdH1cblxuXHRnZXQgcGF1c2VkKCkge1xuXHRcdHJldHVybiAodGhpcy55dFBsYXllcikgP1xuXHRcdFx0KHRoaXMubGFzdFN0YXRlICE9PSBZVC5QbGF5ZXJTdGF0ZS5QTEFZSU5HICYmIHRoaXMubGFzdFN0YXRlICE9PSBZVC5QbGF5ZXJTdGF0ZS5CVUZGRVJJTkcpXG5cdFx0XHQ6IHRydWU7XG5cblx0fVxuXG5cblx0Z2V0IHJhdGUoKSB7XG5cdFx0cmV0dXJuIHRoaXMueXRQbGF5ZXIuZ2V0UGxheWJhY2tSYXRlKCk7XG5cdH1cblxuXHRzZXQgcmF0ZSh2YWx1ZSkge1xuXHRcdHN1cGVyLnJhdGUgPSB2YWx1ZTtcblx0XHR0aGlzLnl0UGxheWVyLnNldFBsYXliYWNrUmF0ZSh2YWx1ZSk7XG5cdFx0dGhpcy50cmlnZ2VyKCdyYXRlY2hhbmdlJyk7XG5cdH1cblxuXHRzZXQgbXV0ZWQodmFsdWUpIHtcblx0XHRpZih2YWx1ZSkge1xuXHRcdFx0dGhpcy55dFBsYXllci5tdXRlKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMueXRQbGF5ZXIudW5NdXRlKCk7XG5cdFx0fVxuXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHR0aGlzLnRyaWdnZXIoJ3ZvbHVtZWNoYW5nZScpO1xuXHRcdH0sIDUwKTtcblx0fVxuXG5cdGdldCBtdXRlZCgpIHtcblx0XHRyZXR1cm4gdGhpcy55dFBsYXllci5pc011dGVkKCk7XG5cdH1cblxuXHRnZXQgc3VidGl0bGVzKCkge1xuXHRcdHJldHVybiB0aGlzLmNoZWNrQ2FwdGlvbnNFeGlzdCgpXG5cdFx0XHQ/ICh0aGlzLnl0UGxheWVyLmdldE9wdGlvbignY2FwdGlvbnMnLCAndHJhY2tsaXN0JykgfHwgW10pLm1hcCh0cmFja1Byb3ZpZGUpXG5cdFx0XHQ6IFtdXG5cdH1cblxuXHRnZXQgdHJhY2soKSB7XG5cdFx0aWYodGhpcy5fdHJhY2sgPT09IHVuZGVmaW5lZCAmJiB0aGlzLmNoZWNrQ2FwdGlvbnNFeGlzdCgpKSB7XG5cdFx0XHRyZXR1cm4gdHJhY2tQcm92aWRlKHRoaXMueXRQbGF5ZXIuZ2V0T3B0aW9uKCdjYXB0aW9ucycsICd0cmFjaycpKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5fdHJhY2s7XG5cdFx0fVxuXHR9XG5cblx0c2V0IHRyYWNrKHZhbHVlKSB7XG5cdFx0dGhpcy5fdHJhY2sgPSB2YWx1ZTtcblx0XHRpZih2YWx1ZSA9PT0gbnVsbCkge1xuXHRcdFx0dGhpcy5fdHJhY2tzRGlzYWJsZSA9IHRydWU7XG5cdFx0XHQvKiBEaXNhYmxlIGNhcHRpb25zICovXG5cdFx0XHR0aGlzLnl0UGxheWVyLnVubG9hZE1vZHVsZSgnY2FwdGlvbnMnKTtcblxuXHRcdFx0dGhpcy50cmlnZ2VyKCd0cmFja3NjaGFuZ2UnKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy55dFBsYXllclxuXHRcdFx0LnNldE9wdGlvbignY2FwdGlvbnMnLCAndHJhY2snLCB7IGxhbmd1YWdlQ29kZSA6IHZhbHVlLm5hbWUgfSlcblx0XHRcdC5zZXRPcHRpb24oJ2NhcHRpb25zJywgJ3JlbG9hZCcsIHRydWUpO1xuXG5cdFx0aWYodGhpcy5fdHJhY2tzRGlzYWJsZSkge1xuXHRcdFx0LyogRW5hYmxlIGNhcHRpb25zICovXG5cdFx0XHR0aGlzLnl0UGxheWVyLmxvYWRNb2R1bGUoJ2NhcHRpb25zJyk7XG5cdFx0fVxuXHRcdHRoaXMudHJpZ2dlcigndHJhY2tzY2hhbmdlJyk7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRpbmNyZWFzZVJhdGUoKSB7XG5cdFx0Y29uc3QgaW5kZXggPSB0aGlzLmF2YWlsYWJsZVJhdGVzLmluZGV4T2YodGhpcy5yYXRlKTtcblx0XHRpZihpbmRleCArIDEgPj0gdGhpcy5hdmFpbGFibGVSYXRlcy5sZW5ndGgpIHJldHVybjtcblx0XHRyZXR1cm4gdGhpcy5yYXRlID0gdGhpcy5hdmFpbGFibGVSYXRlc1tpbmRleCArIDFdO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0ZGVjcmVhc2VSYXRlKCkge1xuXHRcdGNvbnN0IGluZGV4ID0gdGhpcy5hdmFpbGFibGVSYXRlcy5pbmRleE9mKHRoaXMucmF0ZSk7XG5cdFx0aWYoaW5kZXggLSAxIDwgMCkgcmV0dXJuO1xuXHRcdHJldHVybiB0aGlzLnJhdGUgPSB0aGlzLmF2YWlsYWJsZVJhdGVzW2luZGV4IC0gMV07XG5cdH1cblxuXHRnZXRBdmFpbGFibGVRdWFsaXR5TGV2ZWxzKCkge1xuXHRcdGNvbnN0IGFyciA9IHRoaXMueXRQbGF5ZXIuZ2V0QXZhaWxhYmxlUXVhbGl0eUxldmVscygpO1xuXHRcdGNvbnN0IGluZGV4ID0gYXJyLmluZGV4T2YoJ2F1dG8nKTtcblxuXHRcdGlmKGluZGV4ID4gLTEpIHtcblx0XHRcdGFyci5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdH1cblxuXHRcdHJldHVybiBhcnIubWFwKGl0ZW0gPT4gKHtcblx0XHRcdHRpdGxlIDogWW91dHViZS5RVUFMSVRZX05BTUVTW2l0ZW1dIHx8IGl0ZW0sXG5cdFx0XHRuYW1lIDogaXRlbVxuXHRcdH0pKTtcblx0fVxuXG5cblx0c2V0IHBsYXliYWNrUXVhbGl0eShuYW1lKSB7XG5cdFx0c3VwZXIucGxheWJhY2tRdWFsaXR5ID0gbmFtZTtcblx0XHRjb25zdCB0aW1lID0gdGhpcy5jdXJyZW50VGltZTtcblx0XHRjb25zdCBzdGF0dXMgPSB0aGlzLnl0UGxheWVyLmdldFBsYXllclN0YXRlKCk7XG5cblx0XHRpZihzdGF0dXMgIT09IFlULlBsYXllclN0YXRlLlVOU1RBUlRFRCAmJiBzdGF0dXMgIT09IFlULlBsYXllclN0YXRlLkNVRUQpIHtcblx0XHRcdHRoaXMueXRQbGF5ZXIucGF1c2VWaWRlbygpO1xuXHRcdH1cblxuXHRcdHRoaXMuX25leHRQbGF5YmFja1F1YWxpdHkgPSBuYW1lO1xuXHRcdHRoaXMueXRQbGF5ZXIuc2V0UGxheWJhY2tRdWFsaXR5KG5hbWUpO1xuXHRcdHRoaXMueXRQbGF5ZXIuc2Vla1RvKHRpbWUpO1xuXG5cdFx0aWYoc3RhdHVzICE9PSBZVC5QbGF5ZXJTdGF0ZS5QQVVTRUQpIHtcblx0XHRcdHRoaXMueXRQbGF5ZXIucGxheVZpZGVvKCk7XG5cdFx0fVxuXG5cdH1cblxuXHRnZXQgcGxheWJhY2tRdWFsaXR5KCkge1xuXHRcdGlmICh0aGlzLl9wbGF5YmFja1F1YWxpdHkgPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5fcGxheWJhY2tRdWFsaXR5ID0gdGhpcy5nZXRBdmFpbGFibGVRdWFsaXR5TGV2ZWxzKClcblx0XHRcdFx0LmZpbmQoaXRlbSA9PiBpdGVtLm5hbWUgPT09IHRoaXMueXRQbGF5ZXIuZ2V0UGxheWJhY2tRdWFsaXR5KCkpXG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLl9wbGF5YmFja1F1YWxpdHk7XG5cdH1cblxuXHRnZXQgdm9sdW1lKCkge1xuXHRcdHJldHVybiB0aGlzLnl0UGxheWVyID8gdGhpcy55dFBsYXllci5nZXRWb2x1bWUoKSAvIDEwMC4wIDogMTtcblx0fVxuXG5cdHNldCB2b2x1bWUodmFsdWUpIHtcblx0XHRzdXBlci52b2x1bWUgPSB2YWx1ZTtcblx0XHR0aGlzLnl0UGxheWVyLnNldFZvbHVtZSh2YWx1ZSAqIDEwMCk7XG5cblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdHRoaXMudHJpZ2dlcigndm9sdW1lY2hhbmdlJyk7XG5cdFx0fSwgNTApXG5cblx0fVxuXG5cdHN1cHBvcnRzRnVsbFNjcmVlbigpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdHBsYXkoKSB7XG5cdFx0dGhpcy55dFBsYXllci5wbGF5VmlkZW8oKTtcblx0XHR0aGlzLnRyaWdnZXIoJ3BsYXknKTtcblx0fVxuXG5cdHBhdXNlKCkge1xuXHRcdHRoaXMueXRQbGF5ZXIucGF1c2VWaWRlbygpO1xuXHRcdHRoaXMudHJpZ2dlcigncGF1c2UnKTtcblx0fVxuXG5cblx0aW5pdCgpIHtcblx0XHRzdXBlci5pbml0KCk7XG5cdFx0cmV0dXJuIFlvdXR1YmUuYXBpTG9hZGVkKClcblx0XHRcdC50aGVuKCgpID0+IHRoaXMuaW5pdFlUUGxheWVyKCkpXG5cdH1cblxuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdHRoaXMuZWxlbWVudCA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0LmFkZENsYXNzKCdsZXBsYXllcl9feW91dHViZS13cmFwcGVyJylcblx0XHRcdC5hdHRyKCd0YWJpbmRleCcsICcwJyk7XG5cdFx0dGhpcy55b3V0dWJlRWxlbWVudCA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0LmFkZENsYXNzKCdsZXBsYXllcl9feW91dHViZScpO1xuXHRcdHRoaXMuYmxvY2tlciA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0LmFkZENsYXNzKCdsZXBsYXllcl9feW91dHViZS1ibG9ja2VyJyk7XG5cblxuXHRcdHJldHVybiB0aGlzLmVsZW1lbnRcblx0XHRcdC5hcHBlbmQodGhpcy5ibG9ja2VyKVxuXHRcdFx0LmFwcGVuZCh0aGlzLnlvdXR1YmVFbGVtZW50KTtcblx0fVxuXG5cdGluaXRZVFBsYXllcigpIHtcblx0XHR0aGlzLl9pbml0UHJvbWlzZSA9ICQuRGVmZXJyZWQoKTtcblx0XHRjb25zdCBnbG9iYWxPcHRpb25zID0gdGhpcy5wbGF5ZXIub3B0aW9ucztcblx0XHRsZXQgeXRPcHRpb25zID0ge1xuXHRcdFx0YXV0b3BsYXkgOiBnbG9iYWxPcHRpb25zLmF1dG9wbGF5ID8gMSA6IDAsXG5cdFx0XHRsb29wIDogZ2xvYmFsT3B0aW9ucy5sb29wID8gMSA6IDAsXG5cdFx0XHRpdl9sb2FkX3BvbGljeSA6IDMsXG5cdFx0XHRjb250cm9scyA6IDAsXG5cdFx0XHRtb2Rlc3RicmFuZGluZyA6IDEsXG5cdFx0XHRyZWwgOiAwLFxuXHRcdFx0c2hvd2luZm8gOiAwLFxuXHRcdFx0Y2NfbG9hZF9wb2xpY3kgOiAwLFxuXHRcdFx0ZGlzYWJsZWtiIDogMCxcblx0XHRcdGZzIDogMCxcblx0XHRcdHN0YXJ0IDogZ2xvYmFsT3B0aW9ucy50aW1lXG5cdFx0fTtcblxuXHRcdFlULnJlYWR5KCgpID0+IHtcblx0XHRcdHRoaXMub3B0aW9ucy5jdHgucmVwbGFjZVdpdGgodGhpcy5lbGVtZW50KTtcblxuXHRcdFx0dGhpcy55dFBsYXllciA9IG5ldyBZVC5QbGF5ZXIodGhpcy55b3V0dWJlRWxlbWVudFswXSwge1xuXHRcdFx0XHR2aWRlb0lkIDogdGhpcy52aWRlb0lkLFxuXHRcdFx0XHR3aWR0aCA6IGdsb2JhbE9wdGlvbnMud2lkdGggfHwgJzEwMCUnLFxuXHRcdFx0XHRwbGF5ZXJWYXJzIDogeXRPcHRpb25zLFxuXHRcdFx0XHRldmVudHMgOiB7XG5cdFx0XHRcdFx0b25SZWFkeSA6IHRoaXMub25ZVFBSZWFkeS5iaW5kKHRoaXMpLFxuXHRcdFx0XHRcdG9uU3RhdGVDaGFuZ2UgOiB0aGlzLm9uWVRQU3RhdGVDaGFuZ2UuYmluZCh0aGlzKSxcblx0XHRcdFx0XHRvblBsYXliYWNrUmF0ZUNoYW5nZSA6IHRoaXMub25ZVFBSYXRlQ2hhbmdlLmJpbmQodGhpcyksXG5cdFx0XHRcdFx0b25QbGF5YmFja1F1YWxpdHlDaGFuZ2UgOiB0aGlzLm9uWVRQUGxheWJhY2tRdWFsaXR5Q2hhbmdlLmJpbmQodGhpcylcblx0XHRcdFx0fVxuXHRcdFx0fSlcblxuXHRcdH0pXG5cdFx0cmV0dXJuIHRoaXMuX2luaXRQcm9taXNlLnByb21pc2UoKTtcblx0fVxuXG5cblx0c2V0QXZhaWxhYmxlUGxheWJhY2tSYXRlcygpIHtcblx0XHR0aGlzLmF2YWlsYWJsZVJhdGVzID0gdGhpcy55dFBsYXllci5nZXRBdmFpbGFibGVQbGF5YmFja1JhdGVzKCk7XG5cdFx0dGhpcy5yYXRlTWluID0gdGhpcy5hdmFpbGFibGVSYXRlc1swXTtcblx0XHR0aGlzLnJhdGVNYXggPSB0aGlzLmF2YWlsYWJsZVJhdGVzW3RoaXMuYXZhaWxhYmxlUmF0ZXMubGVuZ3RoIC0gMV07XG5cdH1cblxuXHRvbllUUFJlYWR5KGUpIHtcblx0XHR0aGlzLl9pbml0UHJvbWlzZS5yZXNvbHZlKCk7XG5cdFx0dGhpcy5faW5pdFJhdGUoKTtcblx0XHR0aGlzLl9pbml0Vm9sdW1lKCk7XG5cdFx0dGhpcy5zZXRBdmFpbGFibGVQbGF5YmFja1JhdGVzKCk7XG5cdH1cblxuXHRvbllUUFJhdGVDaGFuZ2UoZSkge1xuXHRcdHRoaXMudHJpZ2dlcigncmF0ZWNoYW5nZScpO1xuXHR9XG5cblx0b25ZVFBQbGF5YmFja1F1YWxpdHlDaGFuZ2UoZSkge1xuXHRcdGNvbnN0IGRhdGEgPSBlLmRhdGE7XG5cdFx0dGhpcy5fcGxheWJhY2tRdWFsaXR5ID0gdGhpcy5nZXRBdmFpbGFibGVRdWFsaXR5TGV2ZWxzKCkuZmluZChpdGVtID0+IGl0ZW0ubmFtZSA9PT0gZGF0YSk7XG5cdFx0dGhpcy50cmlnZ2VyKCdxdWFsaXR5Y2hhbmdlJywgdGhpcy5fcGxheWJhY2tRdWFsaXR5KTtcblx0fVxuXG5cdG9uWVRQU3RhdGVDaGFuZ2UoZSkge1xuXHRcdGNvbnN0IHN0YXRlID0gZS5kYXRhO1xuXHRcdGlmKHN0YXRlID09PSB0aGlzLmxhc3RTdGF0ZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMubGFzdFN0YXRlID0gc3RhdGU7XG5cdFx0c3dpdGNoKHN0YXRlKSB7XG5cdFx0Y2FzZSBZVC5QbGF5ZXJTdGF0ZS5VTlNUQVJURUQ6XG5cdFx0XHR0aGlzLnRyaWdnZXIoJ2xvYWRzdGFydCcpO1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdsb2FkZWRtZXRhZGF0YScpO1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdkdXJhdGlvbmNoYW5nZScpO1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdyYXRlY2hhbmdlJyk7XG5cdFx0XHR0aGlzLnRyaWdnZXIoJ3ZvbHVtZWNoYW5nZScpO1xuXHRcdFx0dGhpcy50cmlnZ2VyKCd0cmFja3NjaGFuZ2UnKTtcblx0XHRcdGlmKHRoaXMucGxheWVyLm9wdGlvbnMuYXV0b3BsYXkpIHtcblx0XHRcdFx0dGhpcy50cmlnZ2VyKCdwbGF5Jyk7XG5cdFx0XHR9XG5cdFx0XHRicmVhaztcblxuXHRcdGNhc2UgWVQuUGxheWVyU3RhdGUuRU5ERUQ6XG5cdFx0XHR0aGlzLnRyaWdnZXIoJ3BhdXNlJyk7XG5cdFx0XHR0aGlzLnRyaWdnZXIoJ2VuZGVkJyk7XG5cdFx0XHRicmVhaztcblxuXHRcdGNhc2UgWVQuUGxheWVyU3RhdGUuUExBWUlORzpcblx0XHRcdHRoaXMudHJpZ2dlcigndGltZXVwZGF0ZScpO1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdkdXJhdGlvbmNoYW5nZScpO1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdwbGF5aW5nJyk7XG5cblx0XHRcdHRoaXMueXRQbGF5ZXIuc2V0UGxheWJhY2tRdWFsaXR5KHRoaXMuX25leHRQbGF5YmFja1F1YWxpdHkpO1xuXG5cdFx0XHRpZih0aGlzLmlzU2Vla2luZykge1xuXHRcdFx0XHR0aGlzLm9uU2Vla2VkKCk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMubG9hZENhcHRpb25zKClcblx0XHRcdHRoaXMuZW1pdFRpbWV1cGRhdGUoKTtcblx0XHRcdGJyZWFrO1xuXG5cdFx0Y2FzZSBZVC5QbGF5ZXJTdGF0ZS5QQVVTRUQ6XG5cdFx0XHR0aGlzLnRyaWdnZXIoJ2NhbnBsYXknKTtcblxuXHRcdFx0aWYodGhpcy5pc1NlZWtpbmcpIHtcblx0XHRcdFx0dGhpcy5vblNlZWtlZCgpO1xuXHRcdFx0fVxuXHRcdFx0YnJlYWs7XG5cblx0XHRjYXNlIFlULlBsYXllclN0YXRlLkJVRkZFUklORzpcblx0XHRcdHRoaXMucGxheWVyLnRyaWdnZXIoJ3RpbWV1cGRhdGUnKTtcblx0XHRcdHRoaXMucGxheWVyLnRyaWdnZXIoJ3dhaXRpbmcnKTtcblxuXHRcdFx0dGhpcy55dFBsYXllci5zZXRQbGF5YmFja1F1YWxpdHkodGhpcy5fbmV4dFBsYXliYWNrUXVhbGl0eSk7XG5cblx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHR9XG5cblx0b25TZWVrZWQoKSB7XG5cdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLnNlZWtpbmdJbnRlcnZhbCk7XG5cdFx0dGhpcy5pc1NlZWtpbmcgPSBmYWxzZTtcblxuXHRcdGlmICh0aGlzLndhc1BhdXNlZEJlZm9yZVNlZWspIHtcblx0XHRcdHRoaXMucGF1c2UoKTtcblx0XHR9XG5cblx0XHR0aGlzLnRyaWdnZXIoJ3NlZWtlZCcpO1xuXHR9XG5cblx0ZW1pdFRpbWV1cGRhdGUoKSB7XG5cdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLnNlZWtpbmdJbnRlcnZhbCk7XG5cblx0XHR0aGlzLnNlZWtpbmdJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcblx0XHRcdGlmKHRoaXMubGFzdFN0YXRlID09PSBZVC5QbGF5ZXJTdGF0ZS5QQVVTRUQpIHtcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLnNlZWtpbmdJbnRlcnZhbCk7XG5cdFx0XHR9IGVsc2UgaWYodGhpcy5jdXJyZW50VGltZSAhPT0gdGhpcy50aW1lQmVmb3JlU2Vlaykge1xuXHRcdFx0XHR0aGlzLnRyaWdnZXIoJ3RpbWV1cGRhdGUnKTtcblx0XHRcdH1cblx0XHR9LCAyNTApXG5cdH1cblxuXHRsb2FkQ2FwdGlvbnMoKSB7XG5cdFx0Y29uc3QgZW1wdHlUcmFja2xpc3QgPSAoKSA9PiAodGhpcy5zdWJ0aXRsZXMgPT0gbnVsbCB8fCB0aGlzLnN1YnRpdGxlcy5sZW5ndGggPT09IDApO1xuXG5cdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLl9sb2FkQ2FwdGlvbnNXYXRjaGVyKTtcblx0XHRpZihcblx0XHRcdCF0aGlzLl90cmFja3NEaXNhYmxlICYmXG5cdFx0XHR0aGlzLmNoZWNrQ2FwdGlvbnNFeGlzdCgpICYmXG5cdFx0XHRlbXB0eVRyYWNrbGlzdCgpXG5cdFx0KSB7XG5cdFx0XHR0aGlzLnl0UGxheWVyLmxvYWRNb2R1bGUoJ2NhcHRpb25zJyk7XG5cblx0XHRcdHRoaXMuX2xvYWRDYXB0aW9uc1dhdGNoZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG5cdFx0XHRcdGlmKCFlbXB0eVRyYWNrbGlzdCgpICYmIHRoaXMuY2hlY2tDYXB0aW9uc0V4aXN0KCkpIHtcblx0XHRcdFx0XHR0aGlzLnRyaWdnZXIoJ3RyYWNrc2NoYW5nZScpO1xuXHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwodGhpcy5fbG9hZENhcHRpb25zV2F0Y2hlcik7XG5cdFx0XHRcdH1cblx0XHRcdH0sIDI1MClcblx0XHR9XG5cdH1cblxuXHRjaGVja0NhcHRpb25zRXhpc3QoKSB7XG5cdFx0dHJ5IHtcblx0XHRcdHJldHVybiB0aGlzLnl0UGxheWVyLmdldE9wdGlvbnMoJ2NhcHRpb25zJykgIT0gbnVsbDtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fVxuXG5cdHN0YXRpYyBwYXJzZVVybCh1cmwpIHtcblx0XHRsZXQgcmVzdWx0ID0gbnVsbDtcblx0XHRjb25zdCByZWdleCA9IFlvdXR1YmUuVVJMX1JFR0VYO1xuXHRcdGNvbnN0IG1hdGNoID0gdXJsLm1hdGNoKHJlZ2V4KTtcblx0XHRpZih1cmwubGVuZ3RoID09PSAxMSkge1xuXHRcdFx0cmVzdWx0ID0gdXJsO1xuXHRcdH0gZWxzZSBpZihtYXRjaCAmJiBtYXRjaFsyXS5sZW5ndGggPT09IDExKSB7XG5cdFx0XHRyZXN1bHQgPSBtYXRjaFsyXTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxufVxuXG5Zb3V0dWJlLlRFU1RfVklERU8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpO1xuLyoqXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICogICAgICAgICAtIFRydWUgaWYgdm9sdW1lIGNhbiBiZSBjb250cm9sbGVkXG4gKiAgICAgICAgIC0gRmFsc2Ugb3RoZXJ3aXNlXG4gKi9cbllvdXR1YmUuY2FuQ29udHJvbFZvbHVtZSA9IGZ1bmN0aW9uKCkge1xuXHQvLyBJRSB3aWxsIGVycm9yIGlmIFdpbmRvd3MgTWVkaWEgUGxheWVyIG5vdCBpbnN0YWxsZWQgIzMzMTVcblx0dHJ5IHtcblx0XHRjb25zdCB2b2x1bWUgPSBZb3V0dWJlLlRFU1RfVklERU8udm9sdW1lO1xuXG5cdFx0WW91dHViZS5URVNUX1ZJREVPLnZvbHVtZSA9ICh2b2x1bWUgLyAyKSArIDAuMTtcblx0XHRyZXR1cm4gdm9sdW1lICE9PSBZb3V0dWJlLlRFU1RfVklERU8udm9sdW1lO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xuXG5Zb3V0dWJlLnByb3RvdHlwZS5mZWF0dXJlQ29udHJvbFZvbHVtZSA9IFlvdXR1YmUuY2FuQ29udHJvbFZvbHVtZSgpO1xuXG5Zb3V0dWJlLlVSTF9SRUdFWCA9IC9eLiooeW91dHUuYmVcXC98dlxcL3x1XFwvXFx3XFwvfGVtYmVkXFwvfHdhdGNoXFw/dj18XFwmdj0pKFteI1xcJlxcP10qKS4qLztcblxuWW91dHViZS5RVUFMSVRZX05BTUVTID0ge1xuXHR0aW55IDogJzE0MHAnLFxuXHRzbWFsbCA6ICcyNDBwJyxcblx0bWVkaXVtIDogJzM2MHAnLFxuXHRsYXJnZSA6ICc0ODBwJyxcblx0aGQ3MjAgOiAnNzIwcCcsXG5cdGhkMTA4MCA6ICcxMDgwcCcsXG5cdGhpZ2hyZXMgOiAnSEQnLFxuXHRhdXRvIDogJ9CQ0LLRgtC+J1xufVxuXG5Zb3V0dWJlLmFwaUxvYWRlZCA9IGZ1bmN0aW9uKCkge1xuXHRpZih0aGlzLl9sb2FkZWQpIHJldHVybiAkLkRlZmVycmVkKCkucmVzb2x2ZSgpO1xuXG5cdHJldHVybiAkLmdldFNjcmlwdCgnaHR0cHM6Ly93d3cueW91dHViZS5jb20vaWZyYW1lX2FwaScpXG5cdFx0LnRoZW4oKCkgPT4gdGhpcy5fbG9hZGVkID0gdHJ1ZSlcbn1cblxuUGxheWVyLnJlZ2lzdGVyQ29tcG9uZW50KCdZb3V0dWJlJywgWW91dHViZSk7XG5cblBsYXllci5wcmVzZXQoJ3lvdXR1YmUnLCB7XG5cdG9wdGlvbnMgOiB7XG5cdFx0ZW50aXR5IDogJ1lvdXR1YmUnLFxuXHRcdGNvbnRyb2xzIDoge1xuXHRcdFx0Y29tbW9uIDogW1xuXHRcdFx0XHRbJ3BsYXknLCAndm9sdW1lJywgJ3RpbWVsaW5lJywgJ3JhdGUnLCAnYmFja3dhcmQnLCAnc291cmNlJywgJ3N1YnRpdGxlJywgJ2RpdmlkZXInLCAnc2VjdGlvbicsICdmdWxsc2NyZWVuJ10sXG5cdFx0XHRcdFtdXG5cdFx0XHRdLFxuXHRcdFx0ZnVsbHNjcmVlbiA6IFtcblx0XHRcdFx0WydwbGF5JywgJ3ZvbHVtZScsICd0aW1lbGluZScsICdyYXRlJywgJ2JhY2t3YXJkJywgJ3NvdXJjZScsICdzdWJ0aXRsZScsICdkaXZpZGVyJywgJ3NlY3Rpb24nLCAnZnVsbHNjcmVlbiddLFxuXHRcdFx0XVxuXHRcdH1cblx0fSxcbn0pO1xuXG5QbGF5ZXIucGx1Z2luKCd5b3V0dWJlJywgZnVuY3Rpb24ocGx1Z2luT3B0aW9ucykge1xuXG5cdC8qIGdsb2JhbCBZVCAqL1xuXHRZb3V0dWJlLmFwaUxvYWRlZCgpXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL3BsdWdpbnMvbGUtcGxheWVyLXlvdXR1YmUuanMiLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5jb25zdCBQbGF5ZXIgPSB3aW5kb3cubGVQbGF5ZXI7XG5jb25zdCBDb21wb25lbnQgPSBQbGF5ZXIuZ2V0Q29tcG9uZW50KCdDb21wb25lbnQnKTtcbmNvbnN0IEljb24gPSBQbGF5ZXIuZ2V0Q29tcG9uZW50KCdJY29uJyk7XG5jb25zdCBzZWNvbmRzVG9UaW1lID0gUGxheWVyLnNlY29uZHNUb1RpbWU7XG5cbmNsYXNzIFJhZGlhbEJhciBleHRlbmRzIENvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRzdHJva2VEYXNoYXJyYXkgOiAyOTMsXG5cdFx0XHRzaXplIDogOThcblx0XHR9LCBvcHRpb25zKTtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXHRcdHRoaXMuX2NpcmNsZUVsZW1lbnQgPSB0aGlzLmVsZW1lbnQuZmluZCgnc3ZnIGNpcmNsZScpO1xuXHR9XG5cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHRjb25zdCB7IHN0cm9rZURhc2hhcnJheSwgc2l6ZSB9ID0gdGhpcy5vcHRpb25zO1xuXHRcdGNvbnN0IHRlbXBsYXRlID0gYFxuXHRcdFx0PGRpdiBjbGFzcz1cImxlcGxheWVyLW5leHRfX3BsYXkgbGVwbGF5ZXItcGxheS1idXR0b25cIj5cbiAgICAgICAgICAgICAgICA8c3ZnIGhlaWdodD1cIjEwMCVcIiB2ZXJzaW9uPVwiMS4xXCIgdmlld0JveD1cIjAgMCAke3NpemV9ICR7c2l6ZX1cIiBjbGFzcz1cImxlcGxheWVyLW5leHRfX3N2Zy1zcGlubmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9XCIkey1zaXplIC8gMn1cIiBjeT1cIiR7c2l6ZSAvIDJ9XCIgZmlsbC1vcGFjaXR5PVwiMFwiIHI9XCI0Ni41XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLWRhc2hhcnJheT1cIiR7c3Ryb2tlRGFzaGFycmF5fVwiIHN0cm9rZS1kYXNob2Zmc2V0PVwiJHstMSAqIHN0cm9rZURhc2hhcnJheX1cIiBzdHJva2Utd2lkdGg9XCI2XCIgdHJhbnNmb3JtPVwicm90YXRlKC05MClcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9jaXJjbGU+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJsZXBsYXllci1uZXh0X19idXR0b24gbGVwbGF5ZXItcGxheS1idXR0b25fX2J1dHRvblwiPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdGAudHJpbSgpXG5cdFx0dGhpcy5lbGVtZW50ID0gJCgnPGRpdiAvPicpLmh0bWwodGVtcGxhdGUpLmNvbnRlbnRzKCk7XG5cblx0XHR0aGlzLmVsZW1lbnRcblx0XHRcdC5maW5kKCcubGVwbGF5ZXItbmV4dF9fYnV0dG9uJylcblx0XHRcdC5hcHBlbmQobmV3IEljb24odGhpcy5wbGF5ZXIsIHsgaWNvbk5hbWUgOiAncGxheScgfSkuZWxlbWVudCk7XG5cblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50O1xuXG5cdH1cblxuXHRzdGFydEFuaW1hdGlvbihjYikge1xuXHRcdHRoaXMuX2NpcmNsZUVsZW1lbnRcblx0XHRcdC5zdG9wKClcblx0XHRcdC5hbmltYXRlKHtcblx0XHRcdFx0J3N0cm9rZS1kYXNob2Zmc2V0JyA6IC0yICogdGhpcy5vcHRpb25zLnN0cm9rZURhc2hhcnJheVxuXHRcdFx0fSwgdGhpcy5vcHRpb25zLnRpbWVvdXQsIGNiKTtcblx0fVxuXG5cdHN0b3BBbmltYXRpb24oKSB7XG5cdFx0dGhpcy5fY2lyY2xlRWxlbWVudC5zdG9wKCk7XG5cdH1cblxuXHRzZXQgcmFkaWFsKHZhbHVlKSB7XG5cdFx0dGhpcy5fcmFkaWFsID0gdmFsdWU7XG5cdFx0dGhpcy5fY2lyY2xlRWxlbWVudC5jc3MoJ3N0cm9rZS1kYXNob2Zmc2V0JywgLSh2YWx1ZSArIDEpICogdGhpcy5vcHRpb25zLnN0cm9rZURhc2hhcnJheSk7XG5cdH1cblxuXHRnZXQgcmFkaWFsKCkge1xuXHRcdHJldHVybiB0aGlzLl9yYWRpYWw7XG5cdH1cbn1cblxuXG5cbmNsYXNzIE5leHRDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucykge1xuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0dGl0bGUgOiAnJyxcblx0XHRcdGRlc2NyaXB0aW9uIDogJycsXG5cdFx0XHR0aW1lb3V0IDogMTAwMDAsXG5cdFx0XHRhdXRvIDogZmFsc2UsXG5cdFx0XHRmbiA6ICgpID0+IHt9LFxuXHRcdH0sIG9wdGlvbnMpO1xuXG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblxuXHRcdHRoaXMuY2FuY2VsQnV0dG9uID0gdGhpcy5lbGVtZW50LmZpbmQoJy5sZXBsYXllci1uZXh0X19jYW5jZWwnKTtcblx0XHR0aGlzLnBsYXllci5vbigncGxheScsICgpID0+IHRoaXMuaGlkZSgpKTtcblx0XHR0aGlzLnBsYXllci5vbignbG9hZHN0YXJ0JywgKCkgPT4gdGhpcy5oaWRlKCkpO1xuXHRcdHRoaXMucGxheWVyLm9uKCdlbmRlZCcsICgpID0+IHRoaXMuc2hvdygpKTtcblxuXHRcdHRoaXMucGxheWVyLm9uKCd0aW1ldXBkYXRlJywgKCkgPT4ge1xuXHRcdFx0aWYoIXRoaXMucGxheWVyLmVuZGVkKSB7XG5cdFx0XHRcdHRoaXMuaGlkZSgpXG5cdFx0XHR9XG5cdFx0fSlcblxuXHRcdHRoaXMucHJvZ3Jlc3NCdXR0b24uZWxlbWVudC5vbignY2xpY2snLCB0aGlzLm5leHQuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5jYW5jZWxCdXR0b24ub24oJ2NsaWNrJywgdGhpcy5jYW5jZWwuYmluZCh0aGlzKSk7XG5cblx0fVxuXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0Y29uc3QgeyB0aW1lb3V0LCB0aXRsZSwgZGVzY3JpcHRpb24sIHBvc3RlciwgYXV0bywgdGltZSB9ID0gdGhpcy5vcHRpb25zO1xuXHRcdGNvbnN0IHRlbXBsYXRlID0gYFxuXHRcdFx0PGRpdiBjbGFzcz1cImxlcGxheWVyLW5leHRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGVwbGF5ZXItbmV4dF9faGVhZFwiPtCh0LvQtdC00YPRjtGJ0LXQtSDQstC40LTQtdC+PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJsZXBsYXllci1uZXh0X19ib3hcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibGVwbGF5ZXItbmV4dF9fcG9zdGVyXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibGVwbGF5ZXItbmV4dF9fbWluaS10aXRsZVwiPiR7dGl0bGV9PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibGVwbGF5ZXItbmV4dF9fY2FuY2VsXCIgcm9sZT1cImJ1dHRvblwiPtCe0YLQvNC10L3QsDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJsZXBsYXllci1uZXh0X19jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGVwbGF5ZXItbmV4dF9fdGl0bGVcIj4ke3RpdGxlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxlcGxheWVyLW5leHRfX2Rlc2NyaXB0aW9uXCI+JHtkZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7dGltZSA/IGA8ZGl2IGNsYXNzPVwibGVwbGF5ZXItbmV4dF9fdGltZVwiPiR7c2Vjb25kc1RvVGltZSh0aW1lKX08L2Rpdj5gIDogJyd9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cblx0XHRgLnRyaW0oKTtcblxuXHRcdHRoaXMucHJvZ3Jlc3NCdXR0b24gPSBuZXcgUmFkaWFsQmFyKHRoaXMucGxheWVyLCB7IHRpbWVvdXQgfSk7XG5cblx0XHR0aGlzLmVsZW1lbnQgPSAkKCc8ZGl2IC8+JykuaHRtbCh0ZW1wbGF0ZSkuY29udGVudHMoKTtcblxuXHRcdHRoaXMuZWxlbWVudFxuXHRcdFx0LmZpbmQoJy5sZXBsYXllci1uZXh0X19wb3N0ZXInKVxuXHRcdFx0LmFwcGVuZCh0aGlzLnByb2dyZXNzQnV0dG9uLmVsZW1lbnQpO1xuXG5cdFx0aWYocG9zdGVyICE9IG51bGwpIHtcblx0XHRcdHRoaXMuZWxlbWVudFxuXHRcdFx0XHQuZmluZCgnLmxlcGxheWVyLW5leHRfX3Bvc3RlcicpXG5cdFx0XHRcdC5jc3Moe1xuXHRcdFx0XHRcdCdiYWNrZ3JvdW5kLWltYWdlJyA6IGB1cmwoJHtwb3N0ZXJ9KWBcblx0XHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0aWYoYXV0bykge1xuXHRcdFx0dGhpcy5hZGRDbGFzcygnbGVwbGF5ZXItbmV4dC0tYXV0bycpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQ7XG5cdH1cblxuXHRjYW5jZWwoKSB7XG5cdFx0Y2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVvdXQpO1xuXHRcdHRoaXMucmVtb3ZlQ2xhc3MoJ2xlcGxheWVyLW5leHQtLWF1dG8nKTtcblx0fVxuXG5cdG5leHQoKSB7XG5cdFx0aWYodGhpcy5vcHRpb25zLnVybCAhPSBudWxsKSB7XG5cdFx0XHR3aW5kb3cubG9jYXRpb24gPSB0aGlzLm9wdGlvbnMudXJsO1xuXHRcdH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLmZuICYmICQuaXNGdW5jdGlvbih0aGlzLm9wdGlvbnMuZm4pKSB7XG5cdFx0XHR0aGlzLm9wdGlvbnMuZm4odGhpcylcblx0XHR9XG5cdH1cblxuXHRzaG93KCkge1xuXHRcdGlmKHRoaXMuY2FuY2VsbGVkKSByZXR1cm47XG5cblx0XHR0aGlzLmVsZW1lbnQuc2hvdygpO1xuXG5cdFx0aWYodGhpcy5vcHRpb25zLmF1dG8pIHtcblx0XHRcdHRoaXMucHJvZ3Jlc3NCdXR0b24uc3RhcnRBbmltYXRpb24oKTtcblx0XHRcdGNsZWFyVGltZW91dCh0aGlzLl90aW1lb3V0KTtcblx0XHRcdHRoaXMuX3RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMubmV4dCgpLCB0aGlzLm9wdGlvbnMudGltZW91dCk7XG5cdFx0fVxuXHR9XG5cblx0aGlkZSgpIHtcblx0XHR0aGlzLmVsZW1lbnQuaGlkZSgpO1xuXG5cdFx0aWYodGhpcy5vcHRpb25zLmF1dG8pIHtcblx0XHRcdHRoaXMucHJvZ3Jlc3NCdXR0b24uc3RvcEFuaW1hdGlvbigpO1xuXHRcdFx0dGhpcy5wcm9ncmVzc0J1dHRvbi5yYWRpYWwgPSAwO1xuXHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVvdXQpO1xuXHRcdH1cblx0fVxuXG59XG5cblxuUGxheWVyLnBsdWdpbignbmV4dCcsIGZ1bmN0aW9uKHBsdWdpbk9wdGlvbnMpIHtcblx0dGhpcy5fbmV4dENvbXBvbmVudCA9IG5ldyBOZXh0Q29tcG9uZW50KHRoaXMsIHBsdWdpbk9wdGlvbnMpXG5cblx0dGhpcy5pbm5lckVsZW1lbnQuYXBwZW5kKHRoaXMuX25leHRDb21wb25lbnQuZWxlbWVudCk7XG5cbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL3BsdWdpbnMvbGUtcGxheWVyLW5leHQuanMiXSwic291cmNlUm9vdCI6IiJ9