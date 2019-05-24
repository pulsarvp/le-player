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
			mini: [['play', 'timeline', 'volume', 'fullscreen']],
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
				fullscreen: [['play', 'timeline', 'rate', 'volume', 'source', 'fullscreen']]
			}
		}
	};

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTlmMWQyZjRiYzJjNDBjNWMwNzMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2xlLXBsYXllci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCIkXCIiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvQ29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9Db21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvSWNvbi5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9QbGF5QnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy91dGlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvdXRpbHMvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9TcGxhc2hJY29uLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL1RpbWVsaW5lL1RpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvQ29udHJvbENvbGxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvU2VjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvRXJyb3JEaXNwbGF5LmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL1Bvc3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvRnVsbHNjcmVlbkFwaS5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvdXRpbHMvY29va2llLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9NZWRpYUVycm9yLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL1BsYXlDb250cm9sLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL1ZvbHVtZUNvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvQ29udHJvbERyb3Bkb3duLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL1RpbWVsaW5lL1RpbWVsaW5lQ29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9Db250cm9sVGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9UaW1lbGluZS9CdWZmZXJlZFJhbmdlcy5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9UaW1lbGluZS9NYXJrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvU2VjdGlvbkNvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvQ29udHJvbENoZWNrYm94LmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL0Z1bGxzY3JlZW5Db250cm9sLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL1JhdGVDb250cm9sLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL0JhY2t3YXJkQ29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9Tb3VyY2VDb250cm9sLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL0NvbnRyb2xDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvU3VidGl0bGVDb250cm9sLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL0Rvd25sb2FkQ29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9LZXliaW5kaW5nSW5mb0NvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvVGltZUluZm9Db250cm9sLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9lbnRpdHkvSHRtbDUuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2VudGl0eS9FbnRpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9hcnJheS5wcm90b3R5cGUuZmluZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2RlZmluZS1wcm9wZXJ0aWVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vb2JqZWN0LWtleXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9vYmplY3Qta2V5cy9pc0FyZ3VtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9+L29iamVjdC1rZXlzL2ltcGxlbWVudGF0aW9uLmpzIiwid2VicGFjazovLy8uL34vZXMtYWJzdHJhY3QvZXM2LmpzIiwid2VicGFjazovLy8uL34vZXMtYWJzdHJhY3QvZXMyMDE1LmpzIiwid2VicGFjazovLy8uL34vaGFzL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2Z1bmN0aW9uLWJpbmQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9mdW5jdGlvbi1iaW5kL2ltcGxlbWVudGF0aW9uLmpzIiwid2VicGFjazovLy8uL34vZXMtdG8tcHJpbWl0aXZlL2VzNi5qcyIsIndlYnBhY2s6Ly8vLi9+L2VzLXRvLXByaW1pdGl2ZS9lczIwMTUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9lcy10by1wcmltaXRpdmUvaGVscGVycy9pc1ByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2lzLWNhbGxhYmxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vaXMtZGF0ZS1vYmplY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9pcy1zeW1ib2wvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9oYXMtc3ltYm9scy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2hhcy1zeW1ib2xzL3NoYW1zLmpzIiwid2VicGFjazovLy8uL34vZXMtYWJzdHJhY3QvR2V0SW50cmluc2ljLmpzIiwid2VicGFjazovLy8uL34vZXMtYWJzdHJhY3QvaGVscGVycy9hc3NlcnRSZWNvcmQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9lcy1hYnN0cmFjdC9oZWxwZXJzL2lzTmFOLmpzIiwid2VicGFjazovLy8uL34vZXMtYWJzdHJhY3QvaGVscGVycy9pc0Zpbml0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2VzLWFic3RyYWN0L2hlbHBlcnMvYXNzaWduLmpzIiwid2VicGFjazovLy8uL34vZXMtYWJzdHJhY3QvaGVscGVycy9zaWduLmpzIiwid2VicGFjazovLy8uL34vZXMtYWJzdHJhY3QvaGVscGVycy9tb2QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9lcy1hYnN0cmFjdC9oZWxwZXJzL2lzUHJpbWl0aXZlLmpzIiwid2VicGFjazovLy8uL34vZXMtYWJzdHJhY3QvZXM1LmpzIiwid2VicGFjazovLy8uL34vZXMtdG8tcHJpbWl0aXZlL2VzNS5qcyIsIndlYnBhY2s6Ly8vLi9+L2lzLXJlZ2V4L2luZGV4LmpzIiwid2VicGFjazovLy8uL34vYXJyYXkucHJvdG90eXBlLmZpbmQvaW1wbGVtZW50YXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9hcnJheS5wcm90b3R5cGUuZmluZC9wb2x5ZmlsbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2FycmF5LnByb3RvdHlwZS5maW5kL3NoaW0uanMiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9zdmcvc3ZnLWRlZnMuc3ZnIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9wcmVzZXRzL3Zwcy5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvcHJlc2V0cy9zaW1wbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL3ByZXNldHMvc21zLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9wcmVzZXRzL2NvbXByZXNzZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL3ByZXNldHMvMjAzNS5qcyJdLCJuYW1lcyI6WyJDb250cm9sIiwicmVnaXN0ZXJDb250cm9sIiwiZWxlbWVudCIsImFkZENsYXNzIiwiZXhjbHVkZUFycmF5Iiwic291cmNlIiwiZGlzdCIsInJlc3VsdCIsImNvbmNhdCIsImZvckVhY2giLCJpbmRleCIsImluZGV4T2YiLCJpdGVtIiwic3BsaWNlIiwiZGVmYXVsdE9wdGlvbnMiLCJlbnRpdHkiLCJhdXRvcGxheSIsImhlaWdodCIsImxvb3AiLCJtdXRlZCIsInByZWxvYWQiLCJwb3N0ZXIiLCJzdmdQYXRoIiwiaW5uYWN0aXZpdHlUaW1lb3V0IiwicmF0ZSIsInN0ZXAiLCJtaW4iLCJtYXgiLCJkZWZhdWx0IiwicGxheWJhY2siLCJzaG9ydCIsIm1lZGl1bSIsImxvbmciLCJjb250cm9scyIsImNvbW1vbiIsImZ1bGxzY3JlZW4iLCJtaW5pIiwiY29udHJvbHNPcHRpb25zIiwiYWxpZ24iLCJ2b2x1bWUiLCJtdXRlbGltaXQiLCJrZXlCaW5kaW5nIiwia2V5IiwiaW5mbyIsImRlc2NyaXB0aW9uIiwiZm4iLCJwbGF5ZXIiLCJ2aWRlbyIsInRvZ2dsZVBsYXkiLCJjdXJyZW50VGltZSIsIm9wdGlvbnMiLCJzcGxhc2hJY29uIiwic2hvdyIsInNoaWZ0S2V5Iiwic2VjdGlvbnMiLCJwcmV2IiwibmV4dCIsImNhbGNWb2x1bWVJY29uIiwidG9nZ2xlRnVsbHNjcmVlbiIsInBsdWdpbnMiLCJtaW5pcGxheWVyIiwib25QbGF5ZXJJbml0ZWQiLCJub29wIiwiUGxheWVyIiwiY3JlYXRlRWxlbWVudCIsIl9lbGVtZW50IiwiaW5uZXJFbGVtZW50IiwiX3VzZXJPcHRpb25zIiwiX2luaXRPcHRpb25zIiwiX2xvYWRTVkdTcHJpdGUiLCJkZWZhdWx0U3ByaXRlIiwiX3ZpZXciLCJsb2FkRW50aXR5IiwiY3R4IiwiX2luaXRDb250cm9scyIsIl9kYmxjbGlja1RpbWVvdXQiLCJfaW5pdFNlY3Rpb25zIiwidGhlbiIsImRhdGEiLCJ0cmlnZ2VyIiwiX2luaXRQbHVnaW5zIiwiX2xpc3RlbkhvdEtleXMiLCJfdXNlckFjdGl2aXR5IiwiX2xpc3RlblVzZXJBY3Rpdml0eSIsIl93YWl0aW5nVGltZW91dHMiLCJvbiIsImV2ZW50TmFtZSIsIm9uZSIsInJlbW92ZUNsYXNzIiwidGltZSIsImR1cmF0aW9uIiwiZXJyb3IiLCJfc3RhcnRXYWl0aW5nIiwiX3N0b3BXYXl0aW5nIiwiZSIsInVybCIsInBsYXkiLCJwYXVzZWQiLCJwYXVzZSIsIk1lZGlhRXJyb3IiLCJjb2RlIiwiaW5pdCIsInNyYyIsIl9vbkZ1bGxzY3JlZW5DaGFuZ2UiLCJiaW5kIiwiX29uQ2xpY2siLCJfb25EYmNsaWNrIiwiX29uSW5pdGVkIiwiX29uUGxheSIsIl9vblBhdXNlIiwiZG9jdW1lbnQiLCJGdWxsc2NyZWVuQXBpIiwiZnVsbHNjcmVlbmNoYW5nZSIsIl9vbkVudGl0eUZ1bGxzY3JlbkNoYW5nZSIsIm5hbWUiLCJFbnRpdHkiLCJnZXRDb21wb25lbnQiLCJfZW50aXR5IiwibG9hZCIsInZpZXciLCJhcmdzIiwicXVhbGl0eSIsImlzUGF1c2VkIiwicGxheWJhY2tSYXRlIiwiZGZkIiwiJCIsIkRlZmVycmVkIiwiX2RhdGEiLCJ1bmRlZmluZWQiLCJyZXNvbHZlIiwicHJvbWlzZSIsImFqYXgiLCJtZXRob2QiLCJkYXRhVHlwZSIsImdldERhdGEiLCJmc0FwaSIsInJlcXVlc3RGdWxsc2NyZWVuIiwic3VwcG9ydHNGdWxsU2NyZWVuIiwiZW50ZXJGdWxsc2NyZWVuIiwiZXhpdEZ1bGxzY3JlZW4iLCJ3aWR0aCIsImxlbmd0aCIsIm5ld1NlY3Rpb25zIiwiaSIsImVuZFNlY3Rpb24iLCJiZWdpbiIsImVuZCIsImF0dHIiLCJjc3MiLCJlcnJvckRpc3BsYXkiLCJFcnJvckRpc3BsYXkiLCJwbGF5QnV0dG9uIiwiUGxheUJ1dHRvbiIsImxvYWRlciIsImFwcGVuZCIsIkljb24iLCJpY29uTmFtZSIsImNsYXNzTmFtZSIsIlNwbGFzaEljb24iLCJ2aWRlb0NvbnRhaW5lciIsIlBvc3RlciIsImxhc3RUaW1lciIsIlRpbWUiLCJ2aWRlb0luZm8iLCJjb25zb2xlIiwid2FybiIsImluZm9FbGVtZW50IiwiaHRtbCIsInRpdGxlIiwiSVNfSVBIT05FIiwiSVNfQU5EUk9JRCIsIklTX01PQklMRSIsInNlY3Rpb25Db250YWluZXIiLCJzZWN0aW9uc0NvbnRhaW5lciIsImJlZm9yZSIsImF0dHJPcHRpb25zIiwicmVkdWNlIiwib2JqIiwidmFsIiwic291cmNlcyIsImZpbmQiLCJlYWNoIiwidmFsdWUiLCJmbGFnIiwidmlzaWJsZSIsIm91dHNpZGVTZWN0aW9ucyIsIl9vcHRpb25zRnJvbUVsZW1lbnQiLCJwcmVzZXRPcHRpb25zIiwicHJlc2V0IiwiZ2V0UHJlc2V0IiwiZXh0ZW5kIiwiQXJyYXkiLCJpc0FycmF5IiwiZXhjbHVkZUNvbnRyb2xzIiwiaGFzT3duUHJvcGVydHkiLCJjb250cm9sQ29sbGVjdGlvbiIsInJvdyIsImluaXRPcHRpb25zIiwiQ29udHJvbENvbGxlY3Rpb24iLCJhY3RpdmUiLCJpc0tleUJpbmRpbmciLCJiaW5kaW5nIiwid2hpY2giLCJjdHJsS2V5IiwicHJldmVudERlZmF1bHQiLCJyZWplY3QiLCJnZXRTZWN0aW9uRGF0YSIsImRvbmUiLCJpc1NlY3Rpb25PdXRzaWRlIiwiX2NvbXBsZXRlU2VjdGlvbnMiLCJTZWN0aW9ucyIsIml0ZW1zIiwiZnVsbHNjcmVlbk9ubHkiLCJoaWRlU2Nyb2xsIiwicGx1Z2luT3B0aW9ucyIsIm1vdXNlSW5Qcm9ncmVzcyIsImxhc3RNb3ZlWCIsImxhc3RNb3ZlWSIsIm9uTW91c2VNb3ZlIiwic2NyZWVuWCIsInNjcmVlblkiLCJvbk1vdXNlRG93biIsImNsZWFySW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsIm9uTW91c2VVcCIsImluYWN0aXZpdHlUaW1lb3V0IiwiZGVsYXkiLCJ1c2VyQWN0aXZlIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsInB1c2giLCJjYWxsIiwiZm9jdXMiLCJpc0ZzIiwiX2xhc3RTZWN0aW9uc1ZhbHVlIiwiSVNfQU5EUk9JRF9QSE9ORSIsIklTX0lQT0QiLCJmdWxsc2NyZWVuRWxlbWVudCIsImVuZGVkIiwiX2Vycm9yIiwiaGlkZSIsIl91c2VyQWN0aXZlIiwiZ2V0VXNlckFjdGl2ZSIsInRvZ2dsZUNsYXNzIiwiQ29tcG9uZW50IiwicGx1Z2luIiwicHJvdG90eXBlIiwicmVnaXN0ZXJDb21wb25lbnQiLCJnZXRDb250cm9sIiwic2Vjb25kc1RvVGltZSIsIl9wcmVzZXRzIiwiQ29va2llIiwic3ZnIiwiaGlkZGVuRWxlbWVudCIsInByZXBlbmQiLCJyZXF1aXJlIiwidmVyc2lvbiIsIndpbmRvdyIsImxlUGxheWVyIiwib2Zmc2V0U2hvdyIsIm9mZnNldCIsInRvcCIsIm91dGVySGVpZ2h0IiwiZ2V0Q29udHJvbHMiLCJjb250cm9sT3B0aW9ucyIsImNvbnRyb2wiLCJkaXNhYmxlIiwiaXNGdW5jdGlvbiIsImdldFdpZHRoIiwiX3VwZGF0ZU1pbmlQbGF5ZXIiLCJmb3JjZSIsInNjcm9sbFRvcCIsImhpZGVNaW5pUGxheWVyIiwic2hvd01pbmlQbGF5ZXIiLCJvblNldFZpZXciLCJvbkRlbFZpZXciLCJtb2R1bGUiLCJleHBvcnRzIiwiZW1pdFRhcEV2ZW50cyIsImNsaWNrIiwib25DbGljayIsInRhcCIsImljb24iLCJhdHRycyIsInRhZyIsImJ1aWxkQ1NTQ2xhc3MiLCJoYXNDbGFzcyIsImFyZ3VtZW50cyIsIl9kaXNhYmxlIiwiX2NvbnRyb2xzIiwiY29udHJvbENsYXNzIiwidG9QbGF5ZXJFdmVudCIsImV2ZW50cyIsInNwbGl0IiwiYWNjIiwiX19ub2RlIiwiYmx1ciIsImV2ZW50IiwiRXZlbnQiLCJ0cmlnZ2VySGFuZGxlciIsImV2ZW50TmFtZXMiLCJTdHJpbmciLCJ0b3VjaFN0YXJ0IiwiZmlyc3RUb3VjaCIsImxhc3RNb3ZlVG91Y2giLCJ0YXBNb3ZlbWVudFRocmVzaG9sZCIsInRvdWNoVGltZVRocmVzaG9sZCIsImNvdWxkQmVUYXAiLCJ0b3VjaGVzIiwicGFnZVgiLCJwYWdlWSIsIkRhdGUiLCJnZXRUaW1lIiwieGRpZmYiLCJ5ZGlmZiIsInRvdWNoRGlzdGFuY2UiLCJNYXRoIiwic3FydCIsIm5vVGFwIiwidG91Y2hUaW1lIiwidGFwRXZlbnQiLCJjb21wb25lbnQiLCJfY29tcG9uZW50cyIsIl91c2VUYWciLCJjcmVhdGVFbGVtZW50TlMiLCJfc3ZnVGFnIiwiX2ljb25OYW1lIiwiYXBwZW5kQ2hpbGQiLCJhdHRyTlMiLCJyZW1vdmVBdHRyaWJ1dGVOUyIsInNldEF0dHJpYnV0ZU5TIiwiaW5uZXIiLCJwZXJjZW50aWZ5IiwiY3JlYXRlRWwiLCIkaHRtbCIsInNlY29uZHMiLCJzaG93SG91cnMiLCJoIiwiZmxvb3IiLCJtIiwicyIsIm91dCIsInBlcmNlbnQiLCJwcm9wcyIsImdldFNjcm9sbEJhcldpZHRoIiwib3V0ZXIiLCJ2aXNpYmlsaXR5Iiwib3ZlcmZsb3ciLCJhcHBlbmRUbyIsIndpZHRoV2l0aFNjcm9sbCIsIm91dGVyV2lkdGgiLCJyZW1vdmUiLCJVU0VSX0FHRU5UIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwidGVzdCIsIklTX0NIUk9NRSIsIklTX0lQQUQiLCJJU19JT1MiLCJJU19TQUZBUkkiLCJJU19UT1VDSCIsIm1heFRvdWNoUG9pbnRzIiwidXBkYXRlVGV4dCIsInRleHQiLCJsb2NhbFVhT3B0aW9ucyIsImxvY2FsTmFtZSIsImluZGV4Um93IiwiY3JlYXRlIiwiY29sbGVjdGlvbiIsIl9yb3dzIiwiYWRkUm93IiwiZWxlbVJvdyIsImZpcnN0Iiwic2Vjb25kIiwiZ2xvYmFsQWxpZ24iLCJyb3dBbGlnbiIsImNvbnRyb2xOYW1lIiwiYWRkQ29udHJvbCIsIl9nZXRDb250cm9sT3B0aW9ucyIsInNjcm9sbEVsZW1lbnQiLCJfaW5uZXJFbGVtZW50IiwiYWN0aXZlU2VjdGlvbiIsImdldFNlY3Rpb25CeUluZGV4Iiwic2V0QWN0aXZlQnlJbmRleCIsIm9uU2VjdGlvbkNsaWNrIiwib25UaW1lVXBkYXRlIiwidXBkYXRlU2VjdGlvbkR1cmF0aW9uIiwic2VjdGlvbkluZGV4IiwicGFyc2VJbnQiLCJuZXdJbmRleCIsInJpZ2h0IiwiX2NyZWF0ZVNlY3Rpb25zIiwic2VjdGlvbiIsInRhcmdldCIsImNsb3Nlc3QiLCJ0b3BQb3NpdGlvbiIsInBvc2l0aW9uIiwiYW5pbWF0ZSIsImVuZFNlY3Rpb25UaW1lIiwidG9TdHJpbmciLCJuZXh0SW5mbyIsInRyaW0iLCJyZXBsYWNlV2l0aCIsImNyZWF0ZVNlY3Rpb24iLCJpc1Zpc2libGUiLCJtZXNzYWdlIiwib25QbGF5ZXJFcnJvciIsIl91cmwiLCJhcGlNYXAiLCJzcGVjQXBpIiwiYnJvd3NlckFwaSIsImRmbHQiLCJjb29raWVzIiwiY29va2llIiwiZCIsInNldERhdGUiLCJ5ZWFyIiwiZGVmYXVsdE1lc3NhZ2VzIiwiZXJyb3JUeXBlcyIsImVyck51bSIsIlBsYXlDb250cm9sIiwidXBkYXRlIiwic2hvd1JlcGxheSIsInNob3dQbGF5Iiwic2hvd1BhdXNlIiwiSW5maW5pdHkiLCJfcmVwbGF5IiwiVm9sdW1lQ29udHJvbCIsImZlYXR1cmVDb250cm9sVm9sdW1lIiwiZHJhZyIsIm1hcmtlciIsImxpbmUiLCJwIiwiZ2V0UG9zaXRpb24iLCJkcm9wZG93bkNvbnRlbnQiLCJtb3VzZW1vdmUiLCJtb3VzZXVwIiwieSIsInRvZ2dsZU11dGVkIiwiZGVmYXVsdFZvbHVtZSIsInJvdW5kIiwiQ29udHJvbERyb3Bkb3duIiwiX29wZW5lZCIsIm9wZW4iLCJjbG9zZSIsInRvZ2dsZSIsIm9uRG9jdW1lbnRFdmVudHMiLCJUaW1lbGluZUNvbnRyb2wiLCJfb25NYXJrZXJNb3VzZW1vdmUiLCJfb25NYXJrZXJNb3VzZWRvd24iLCJvblNlY3Rpb25zSW5pdCIsIl9vblRpbWVVcGRhdGUiLCJfb25EdXJhdGlvbkNoYW5nZSIsIm1hcmtlclNoYWRvdyIsIngiLCJtYXJrZXJUaW1lIiwiaXNOYU4iLCJtb3ZlIiwiQ29udHJvbFRleHQiLCJ0b3RhbFRpbWUiLCJNYXJrZXIiLCJwbGF5ZWRSYW5nZXMiLCJidWZmZXJlZFJhbmdlcyIsIkJ1ZmZlcmVkUmFuZ2VzIiwibW91c2VsZWF2ZSIsIm1vdXNlZG93biIsIl9vbkxpbmVDbGljayIsInVwZGF0ZVNlY3Rpb25SYW5nZXMiLCJjcmVhdGVTZWN0aW9uUmFuZ2VzIiwibGVmdCIsInVwZGF0ZUxhYmVscyIsIndhdGNoQnVmZmVySW50ZXJ2YWwiLCJ1cGRhdGVQcm9ncmVzc0JhciIsIkVORCIsIlNUQVJUIiwibG9hZGVkIiwiZG9tSXRlbSIsImFkZCIsImJ1ZmZlcmVkIiwibG9hZGVkU2l6ZSIsIl90ZXh0IiwicmFuZ2UiLCJfb25Nb3VzZWRvd24iLCJfZHJhZyIsIlNlY3Rpb25Db250cm9sIiwiX29uU2VjdGlvbnNJbml0IiwiX29uU2VjdGlvblRvZ2dsZSIsInRvZ2dsZVNlY3Rpb25zIiwiY2hlY2tlZCIsIkNvbnRyb2xDaGVja2JveCIsIm9uQ2hlY2tlZCIsIl9jaGVja2VkIiwiRnVsbHNjcmVlbkNvbnRyb2wiLCJSYXRlQ29udHJvbCIsImRvd25Db250cm9sIiwiZGVjcmVhc2VSYXRlIiwidXBDb250cm9sIiwiaW5jcmVhc2VSYXRlIiwiY3VycmVudFJhdGUiLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsInJlcGxhY2UiLCJyYXRlTWluIiwicmF0ZU1heCIsImdldCIsIkJhY2t3YXJkQ29udHJvbCIsIlNvdXJjZUNvbnRyb2wiLCJwbGF5YmFja1F1YWxpdHkiLCJnZXRBdmFpbGFibGVRdWFsaXR5TGV2ZWxzIiwiQ29udHJvbENvbnRhaW5lciIsIl9hY3RpdmUiLCJsaXN0IiwiY29udGVudCIsInRvb2x0aXAiLCJvbkl0ZW1DbGljayIsImN1cnJlbnRUYXJnZXQiLCJjdXJyZW50VmFsdWUiLCJnZXRDdXJyZW50VmFsdWUiLCJlbXB0eSIsImVsZW0iLCJhZGRJdGVtIiwiU3VidGl0bGVDb250cm9sIiwidHJhY2siLCJzdG9wUHJvcGFnYXRpb24iLCJoYXNWYWx1ZSIsInN1YnRpdGxlcyIsIkRvd25sb2FkQ29udHJvbCIsIm9uTG9hZFN0YXJ0IiwiaHJlZiIsImRvd25sb2FkIiwibGluayIsImZpbGVOYW1lIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiZ2V0RmlsZUV4dGVuc2lvbiIsInBhcnNlciIsInBhdGhuYW1lIiwicG9wIiwiS2V5QmluZGluZ0luZm9Db250cm9sIiwiaW5mb0NvbnRlbnQiLCJfa2V5IiwiaG90a2V5Iiwia2V5U3RyaW5nIiwiVGltZUluZm9Db250cm9sIiwiX2N1cnJlbnRUaW1lQ29udHJvbCIsIl90b3RhbFRpbWVDb250cm9sIiwiSHRtbDUiLCJtZWRpYSIsImJ1ZmZlclJhbmdlcyIsIl9wbGF5YmFja1F1YWxpdHkiLCJvbkR1cmF0aW9uQ2hhbmdlIiwib25Qcm9ncmVzcyIsIm9uU2Vla2luZyIsIm9uU2Vla2VkIiwib25Wb2x1bWVDaGFuZ2UiLCJvbkRibGNsaWNrIiwib25QbGF5Iiwib25QYXVzZSIsIm9uUmF0ZUNoYW5nZSIsIm9uRW5kZWQiLCJvbkNhbnBsYXlUaHJvdWdoIiwib25XYWl0aW5nIiwib25FcnJvciIsInJlbW92ZUF0dHIiLCJwcm9wIiwibWFwIiwiX2luaXRTdWJ0aXRsZXMiLCJfaW5pdFZpZGVvIiwiX2luaXRSYXRlIiwiX2luaXRWb2x1bWUiLCJ3ZWJraXRFbnRlckZ1bGxTY3JlZW4iLCJuZXR3b3JrU3RhdGUiLCJIQVZFX01FVEFEQVRBIiwid2Via2l0RXhpdEZ1bGxTY3JlZW4iLCJwbGF5ZWQiLCJwbGF5UHJvbWlzZSIsInBhdXNlUHJvbWlzZSIsIl9zZWxmIiwiY2hpbGRyZW4iLCJsYW5ndWFnZSIsInJlYWR5U3RhdGUiLCJIVE1MTWVkaWFFbGVtZW50IiwiSEFWRV9OT1RISU5HIiwiX3RleHRUcmFja3NIYWNrIiwidGV4dFRyYWNrcyIsImNsaWVudEhlaWdodCIsImNsaWVudFdpZHRoIiwiTU9CSUxFX01BWF9SQVRFIiwiU0FGQVJJX01BWF9SQVRFIiwiTU9CSUxFX01JTl9SQVRFIiwiU0FGQVJJX01JTl9SQVRFIiwic3RvcCIsIl9zb3VyY2UiLCJfdHJhY2siLCJtb2RlIiwibXV0ZSIsInNlZWthYmxlIiwic3RhcnQiLCJjdXJyZW50U3JjIiwiVEVTVF9WSURFTyIsImNhbkNvbnRyb2xWb2x1bWUiLCJfdHJpZ2dlclN0YWNrIiwiX3N0b3BMaXN0ZW4iLCJkZWZhdWx0UmF0ZSIsIl9wb3N0ZXIiLCJpbm5lckhlaWdodCIsIl9yYXRlTWF4IiwiX3JhdGVNaW4iLCJzZXQiLCJsZXZlbHMiLCJzb21lIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7Ozs7OztBQUVBOzs7O0FBR0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOztBQUNBOztBQVNBOzs7O0FBRUE7Ozs7QUFHQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FBaEJBOzs7QUFtQkFBLG1CQUFRQyxlQUFSLENBQXdCLFNBQXhCLEVBQW1DLFlBQVc7QUFDN0MsU0FBTztBQUNOQyxZQUFVLHNCQUFFLFFBQUYsRUFBWUMsUUFBWixDQUFxQixTQUFyQjtBQURKLEdBQVA7QUFHQSxFQUpEOztBQVFBOzs7Ozs7OztBQVFBLFVBQVNDLFlBQVQsQ0FBc0JDLE1BQXRCLEVBQThCQyxJQUE5QixFQUFvQztBQUNuQyxNQUFNQyxTQUFTLEdBQUdDLE1BQUgsQ0FBVUgsTUFBVixDQUFmO0FBQ0FDLE9BQUtHLE9BQUwsQ0FBYSxnQkFBUTtBQUNwQixPQUFNQyxRQUFRSCxPQUFPSSxPQUFQLENBQWVDLElBQWYsQ0FBZDtBQUNBLE9BQUlGLFFBQVEsQ0FBQyxDQUFiLEVBQWdCO0FBQ2ZILFdBQU9NLE1BQVAsQ0FBY0gsS0FBZCxFQUFxQixDQUFyQjtBQUNBO0FBQ0E7QUFDRCxH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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0EsMkJBQTBCOztBQUUxQjtBQUNBO0FBQ0E7QUFDQSx3Q0FBdUM7QUFDdkMsMEJBQXlCOztBQUV6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBb0I7QUFDcEIsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVELGlDQUFnQzs7QUFFaEM7Ozs7Ozs7QUNyeEJBOztBQUVBOztBQUVBOzs7Ozs7O0FDSkE7O0FBRUE7O0FBRUE7Ozs7Ozs7QUNKQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMEJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDMU9BOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWMsb0JBQW9CO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzVDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNB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QUF1QyxRQUF2QyxFQUFpRCxTQUFqRCxFQUE0RCxZQUE1RCxDQURZO0FBTEg7QUFGRjtBQURXLEVBQWYsQzs7Ozs7Ozs7Ozs7QUNBQSxLQUFNeUosMEJBQVM7QUFDckIxSSxXQUFVO0FBQ1QwRixVQUFRLE1BREM7O0FBR1R2RyxvQkFBa0I7QUFDakJILFlBQVM7QUFDUkksWUFBUSxDQUFDLFNBQUQ7QUFEQTtBQURRLElBSFQ7QUFRVEwsYUFBVztBQUNWQyxZQUFTLENBQ1IsQ0FBQyxNQUFELEVBQVMsVUFBVCxFQUFxQixNQUFyQixFQUE2QixRQUE3QixFQUF1QyxRQUF2QyxFQUFpRCxZQUFqRCxDQURRLENBREM7QUFJVkMsZ0JBQWEsQ0FDWixDQUFDLE1BQUQsRUFBUyxVQUFULEVBQXFCLE1BQXJCLEVBQTZCLFFBQTdCLEVBQXVDLFFBQXZDLEVBQWlELFlBQWpELENBRFk7QUFKSDtBQVJGO0FBRFcsRUFBZixDIiwiZmlsZSI6ImxlLXBsYXllci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L2pzL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDE5ZjFkMmY0YmMyYzQwYzVjMDczIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5cbmltcG9ydCBDb250cm9sIGZyb20gJy4vY29tcG9uZW50cy9Db250cm9sJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL0NvbXBvbmVudCc7XG5pbXBvcnQgUGxheUJ1dHRvbiBmcm9tICcuL2NvbXBvbmVudHMvUGxheUJ1dHRvbic7XG5pbXBvcnQgU3BsYXNoSWNvbiBmcm9tICcuL2NvbXBvbmVudHMvU3BsYXNoSWNvbic7XG5cbmltcG9ydCBJY29uIGZyb20gJy4vY29tcG9uZW50cy9JY29uJztcbmltcG9ydCBUaW1lIGZyb20gJy4vY29tcG9uZW50cy9UaW1lbGluZS9UaW1lJztcbmltcG9ydCBDb250cm9sQ29sbGVjdGlvbiBmcm9tICcuL2NvbXBvbmVudHMvQ29udHJvbENvbGxlY3Rpb24nO1xuaW1wb3J0IFNlY3Rpb25zIGZyb20gJy4vY29tcG9uZW50cy9TZWN0aW9ucyc7XG5pbXBvcnQgRXJyb3JEaXNwbGF5IGZyb20gJy4vY29tcG9uZW50cy9FcnJvckRpc3BsYXknO1xuaW1wb3J0IFBvc3RlciBmcm9tICcuL2NvbXBvbmVudHMvUG9zdGVyJztcbmltcG9ydCBGdWxsc2NyZWVuQXBpIGZyb20gJy4vRnVsbHNjcmVlbkFwaSc7XG5cbmltcG9ydCB7IGNyZWF0ZUVsLCBzZWNvbmRzVG9UaW1lLCBub29wIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQge1xuXHRJU19BTkRST0lEX1BIT05FLFxuXHRJU19BTkRST0lELFxuXHRJU19JUE9ELFxuXHRJU19JUEhPTkUsXG5cdElTX01PQklMRSxcblx0SVNfVE9VQ0hcbn0gZnJvbSAnLi91dGlscy9icm93c2VyJztcblxuaW1wb3J0IENvb2tpZSBmcm9tICcuL3V0aWxzL2Nvb2tpZSc7XG5cbmltcG9ydCBNZWRpYUVycm9yIGZyb20gJy4vTWVkaWFFcnJvcic7XG5cbi8vIFJlZ2lzdGVyIGNvbW1vbiBjb250cm9sc1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvUGxheUNvbnRyb2wnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvVm9sdW1lQ29udHJvbCc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9UaW1lbGluZS9UaW1lbGluZUNvbnRyb2wnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvU2VjdGlvbkNvbnRyb2wnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvRnVsbHNjcmVlbkNvbnRyb2wnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvUmF0ZUNvbnRyb2wnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvQmFja3dhcmRDb250cm9sJztcbmltcG9ydCAnLi9jb21wb25lbnRzL1NvdXJjZUNvbnRyb2wnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvU3VidGl0bGVDb250cm9sJztcbmltcG9ydCAnLi9jb21wb25lbnRzL0Rvd25sb2FkQ29udHJvbCc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9LZXliaW5kaW5nSW5mb0NvbnRyb2wnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvVGltZUluZm9Db250cm9sJztcblxuaW1wb3J0ICcuL2VudGl0eS9IdG1sNSc7XG5cbmltcG9ydCAnYXJyYXkucHJvdG90eXBlLmZpbmQnO1xuXG5cbkNvbnRyb2wucmVnaXN0ZXJDb250cm9sKCdkaXZpZGVyJywgZnVuY3Rpb24oKSB7XG5cdHJldHVybiB7XG5cdFx0ZWxlbWVudCA6ICQoJzxkaXYvPicpLmFkZENsYXNzKCdkaXZpZGVyJylcblx0fTtcbn0pO1xuXG5cblxuLyoqXG4gKiBSZXR1cm4gYXJyYXkgd2l0aCBleGNsdWRlZCBkaXN0J3MgaXRlbXMgZnJvbSBzb3VyY2UgYXJyYXlcbiAqXG4gKiBAYWNjZXNzIHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IHNvdXJjZVxuICogQHBhcmFtIHtBcnJheX0gZGlzdFxuICogQHJldHVybiB7QXJyYXl9XG4gKi9cbmZ1bmN0aW9uIGV4Y2x1ZGVBcnJheShzb3VyY2UsIGRpc3QpIHtcblx0Y29uc3QgcmVzdWx0ID0gW10uY29uY2F0KHNvdXJjZSk7XG5cdGRpc3QuZm9yRWFjaChpdGVtID0+IHtcblx0XHRjb25zdCBpbmRleCA9IHJlc3VsdC5pbmRleE9mKGl0ZW0pO1xuXHRcdGlmIChpbmRleCA+IC0xKSB7XG5cdFx0XHRyZXN1bHQuc3BsaWNlKGluZGV4LCAxKTtcblx0XHRcdHJldHVyblxuXHRcdH1cblx0fSlcblxuXHRyZXR1cm4gcmVzdWx0O1xufVxuXG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcblx0ZW50aXR5IDogJ0h0bWw1Jyxcblx0YXV0b3BsYXkgOiBmYWxzZSxcblx0aGVpZ2h0IDogJ2F1dG8nLFxuXHRsb29wIDogZmFsc2UsXG5cdG11dGVkIDogZmFsc2UsXG5cdHByZWxvYWQgOiAnbWV0YWRhdGEnLFxuXHRwb3N0ZXIgOiBudWxsLFxuXHRzdmdQYXRoIDogJycsXG5cdGlubmFjdGl2aXR5VGltZW91dCA6IDUwMDAsXG5cdHJhdGUgOiB7XG5cdFx0c3RlcCA6IDAuMjUsXG5cdFx0bWluIDogMC41LFxuXHRcdG1heCA6IDQuMCxcblx0XHRkZWZhdWx0IDogMVxuXHR9LFxuXHRwbGF5YmFjayA6IHtcblx0XHRzdGVwIDoge1xuXHRcdFx0c2hvcnQgOiA1LFxuXHRcdFx0bWVkaXVtIDogMTAsXG5cdFx0XHRsb25nIDogMzBcblx0XHR9XG5cdH0sXG5cdGNvbnRyb2xzIDoge1xuXHRcdGNvbW1vbiA6IFtcblx0XHRcdFsncGxheScsICd2b2x1bWUnLCAnZGl2aWRlcicsICd0aW1lbGluZScsICAnZGl2aWRlcicsICdzZWN0aW9uJywgJ2RpdmlkZXInLCAnZnVsbHNjcmVlbiddLFxuXHRcdFx0WydyYXRlJywgJ2RpdmlkZXInLCAnYmFja3dhcmQnLCAnZGl2aWRlcicsICdzb3VyY2UnLCAnZGl2aWRlcicsICdzdWJ0aXRsZScsICdkaXZpZGVyJywgJ2Rvd25sb2FkJywgJ2RpdmlkZXInLCAna2V5YmluZGluZyBpbmZvJ11cblx0XHRdLFxuXHRcdGZ1bGxzY3JlZW4gOiBbXG5cdFx0XHRbJ3BsYXknLCAndm9sdW1lJywgJ2RpdmlkZXInLCAndGltZWxpbmUnLCAnZGl2aWRlcicsICdyYXRlJywgJ2RpdmlkZXInLCAna2V5YmluZGluZyBpbmZvJywgICdkaXZpZGVyJywgJ2JhY2t3YXJkJywgJ2RpdmlkZXInLCAnc291cmNlJywgJ2RpdmlkZXInLCAnc3VidGl0bGUnLCAnZGl2aWRlcicsICdkb3dubG9hZCcsICdkaXZpZGVyJywgJ3NlY3Rpb24nLCAnZGl2aWRlcicsICdmdWxsc2NyZWVuJ11cblx0XHRdLFxuXHRcdG1pbmkgOiBbXG5cdFx0XHRbJ3BsYXknLCAndGltZWxpbmUnLCAndm9sdW1lJywgJ2Z1bGxzY3JlZW4nXVxuXHRcdF0sXG5cdFx0J2NvbW1vbjphbmRyb2lkJyA6IFtcblx0XHRcdFsncGxheScsICd0aW1lbGluZScsICdmdWxsc2NyZWVuJ10sXG5cdFx0XHRbJ3JhdGUnLCAnc291cmNlJywgJ3NlY3Rpb24nXVxuXHRcdF0sXG5cdFx0J2Z1bGxzY3JlZW46bW9iaWxlJyA6IFtcblx0XHRcdFsncGxheScsICd0aW1lbGluZScsICdmdWxsc2NyZWVuJ10sXG5cdFx0XHRbJ3JhdGUnLCAnc291cmNlJywgJ3NlY3Rpb24nXVxuXHRcdF0sXG5cdFx0J2NvbW1vbjppb3MnIDogW1xuXHRcdFx0WydwbGF5JywgJ3JhdGUnLCAndGltZWxpbmUnLCAnc291cmNlJ11cblx0XHRdLFxuXHR9LFxuXHRjb250cm9sc09wdGlvbnMgOiB7XG5cblx0XHRjb21tb24gOiB7XG5cdFx0XHRhbGlnbiA6IFsnanVzdGlmeScsICdsZWZ0J10sXG5cdFx0XHQvLyBtb2JpbGUgOiB0cnVlXG5cdFx0fSxcblx0XHRmdWxsc2NyZWVuIDoge1xuXHRcdFx0YWxpZ24gOiAnanVzdGlmeSdcblx0XHR9LFxuXHRcdCdjb21tb246YW5kcm9pZCcgOiB7XG5cdFx0XHRhbGlnbiA6IFsnanVzdGlmeScsICdyaWdodCddXG5cdFx0fSxcblxuXHRcdCdmdWxsc2NyZWVuOm1vYmlsZScgOiB7XG5cdFx0XHRhbGlnbiA6IFsnanVzdGlmeScsICdyaWdodCddXG5cdFx0fVxuXHR9LFxuXHR2b2x1bWUgOiB7XG5cdFx0ZGVmYXVsdCA6IDAuNCxcblx0XHRtdXRlbGltaXQgOiAwLjA1LFxuXHRcdHN0ZXAgOiAwLjFcblx0fSxcblx0a2V5QmluZGluZyA6IFtcblx0XHR7XG5cdFx0XHRrZXkgOiAzMixcblx0XHRcdGluZm8gOiBbJ1NwYWNlJ10sXG5cdFx0XHRkZXNjcmlwdGlvbiA6ICfQndCw0YfQsNGC0Ywg0L/RgNC+0LjQs9GA0YvQstCw0L3QuNC1IC8g0L/QvtGB0YLQsNCy0LjRgtGMINC90LAg0L/QsNGD0LfRgycsXG5cdFx0XHRmbiA6IChwbGF5ZXIpID0+IHtcblx0XHRcdFx0cGxheWVyLnZpZGVvLnRvZ2dsZVBsYXkoKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdHtcblx0XHRcdGtleSA6IDM3LFxuXHRcdFx0aW5mbyA6IFsn4oaQJ10sXG5cdFx0XHRkZXNjcmlwdGlvbiA6IGDQn9C10YDQtdC80L7RgtCw0YLRjCDQvdCwIDEwINGB0LXQutGD0L3QtCDQvdCw0LfQsNC0YCxcblx0XHRcdGZuIDogKHBsYXllcikgPT4ge1xuXHRcdFx0XHRwbGF5ZXIudmlkZW8uY3VycmVudFRpbWUgLT0gcGxheWVyLm9wdGlvbnMucGxheWJhY2suc3RlcC5tZWRpdW07XG5cdFx0XHRcdHBsYXllci5zcGxhc2hJY29uLnNob3coJ3VuZG8nKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdHtcblx0XHRcdGtleSA6IDM5LFxuXHRcdFx0aW5mbyA6IFsn4oaSJ10sXG5cdFx0XHRkZXNjcmlwdGlvbiA6IGDQn9C10YDQtdC80L7RgtCw0YLRjCDQvdCwIDEwINGB0LXQutGD0L3QtCDQstC/0LXRgNGR0LRgLFxuXHRcdFx0Zm4gOiAocGxheWVyKSA9PiB7XG5cdFx0XHRcdHBsYXllci52aWRlby5jdXJyZW50VGltZSArPSBwbGF5ZXIub3B0aW9ucy5wbGF5YmFjay5zdGVwLm1lZGl1bTtcblx0XHRcdFx0cGxheWVyLnNwbGFzaEljb24uc2hvdygncmVkbycpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0c2hpZnRLZXkgOiB0cnVlLFxuXHRcdFx0aW5mbyA6IFsnU2hpZnQnLCAn4oaQJ10sXG5cdFx0XHRkZXNjcmlwdGlvbiA6ICfQn9C10YDQtdC50YLQuCDQvdCwINC/0YDQtdC00YvQtNGD0YnRg9GOINGB0LXQutGG0LjRjicsXG5cdFx0XHRrZXkgOiAzNyxcblx0XHRcdGZuIDogKHBsYXllcikgPT4ge1xuXHRcdFx0XHRpZihwbGF5ZXIuc2VjdGlvbnMgPT0gbnVsbCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRwbGF5ZXIuc2VjdGlvbnMucHJldigpO1xuXG5cdFx0XHR9XG5cdFx0fSxcblx0XHR7XG5cdFx0XHRzaGlmdEtleSA6IHRydWUsXG5cdFx0XHRrZXkgOiAzOSxcblx0XHRcdGluZm8gOiBbJ1NoaWZ0JywgJ+KGkiddLFxuXHRcdFx0ZGVzY3JpcHRpb24gOiAn0J/QtdGA0LXQudGC0Lgg0L3QsCDRgdC70LXQtNGD0Y7RidGD0Y4g0YHQtdC60YbQuNGOJyxcblx0XHRcdGZuIDogKHBsYXllcikgPT4ge1xuXHRcdFx0XHRpZihwbGF5ZXIuc2VjdGlvbnMgPT0gbnVsbCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRwbGF5ZXIuc2VjdGlvbnMubmV4dCgpXG5cdFx0XHR9XG5cdFx0fSxcblx0XHR7XG5cdFx0XHRrZXkgOiAzOCxcblx0XHRcdGluZm8gOiBbJ+KGkSddLFxuXHRcdFx0ZGVzY3JpcHRpb24gOiAn0KPQstC10LvQuNGH0LjRgtGMINCz0YDQvtC80LrQvtGB0YLRjCcsXG5cdFx0XHRmbiA6IChwbGF5ZXIpID0+IHtcblx0XHRcdFx0cGxheWVyLnZpZGVvLnZvbHVtZSArPSBwbGF5ZXIub3B0aW9ucy52b2x1bWUuc3RlcDtcblxuXHRcdFx0XHRwbGF5ZXIuc3BsYXNoSWNvbi5zaG93KHBsYXllci5jYWxjVm9sdW1lSWNvbihwbGF5ZXIudmlkZW8udm9sdW1lKSk7XG5cblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0e1xuXHRcdFx0a2V5IDogNDAsXG5cdFx0XHRpbmZvIDogWyfihpMnXSxcblx0XHRcdGRlc2NyaXB0aW9uIDogJ9Cj0LzQtdC90YzRiNC40YLRjCDQs9GA0L7QvNC60L7RgdGC0YwnLFxuXHRcdFx0Zm4gOiAocGxheWVyKSA9PiB7XG5cdFx0XHRcdHBsYXllci52aWRlby52b2x1bWUgLT0gcGxheWVyLm9wdGlvbnMudm9sdW1lLnN0ZXA7XG5cblx0XHRcdFx0cGxheWVyLnNwbGFzaEljb24uc2hvdyhwbGF5ZXIuY2FsY1ZvbHVtZUljb24ocGxheWVyLnZpZGVvLnZvbHVtZSkpO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHR7XG5cdFx0XHRrZXkgOiA3MCxcblx0XHRcdGluZm8gOiBbJ2YnXSxcblx0XHRcdGRlc2NyaXB0aW9uIDogJ9Ce0YLQutGA0YvRgtGML9C30LDQutGA0YvRgtGMINC/0L7Qu9C90L7RjdC60YDQsNC90YvQuSDRgNC10LbQuNC8Jyxcblx0XHRcdGZuIDogKHBsYXllcikgPT4ge1xuXHRcdFx0XHRwbGF5ZXIudG9nZ2xlRnVsbHNjcmVlbigpO1xuXHRcdFx0fVxuXHRcdH1cblx0XSxcblx0cGx1Z2lucyA6IHtcblx0XHRtaW5pcGxheWVyIDoge31cblx0fSxcblx0b25QbGF5ZXJJbml0ZWQgOiBub29wXG59O1xuXG4vKipcbiAqIEBjbGFzcyBQbGF5ZXJcbiAqIEBleHRlbmRzIENvbXBvbmVudFxuICogQHBhcmFtIHtqUXVlcnl9IGVsZW1lbnQgRWxlbWVudCB3aGVuIHBsYXllciB3aWxsIGluaXRcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuYXV0b3BsYXk9ZmFsc2VdXG4gKiBXaGVuIHByZXNlbnQsIHRoZSB2aWRlbyB3aWxsIGF1dG9tYXRpY2FsbHkgc3RhcnQgcGxheWluZyBhcyBzb29uIGFzIGl0IGNhbiBkbyBzbyB3aXRob3V0IHN0b3BwaW5nLlxuICogQHBhcmFtIHtTdHJpbmd8TnVtYmVyfSBbb3B0aW9ucy5oZWlnaHQ9J2F1dG8nXSBIZWlnaHQgb2YgdmlkZW8gY29udGFpbmVyXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMud2lkdGhdIFdpZHRoIG9mIHZpZGVvIGNvbnRhaW5lclxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5sb29wPWZhbHNlXVxuICogV2hlbiBwcmVzZW50LCBpdCBzcGVjaWZpZXMgdGhhdCB0aGUgdmlkZW8gd2lsbCBzdGFydCBvdmVyIGFnYWluLCBldmVyeSB0aW1lIGl0IGlzIGZpbmlzaGVkLlxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5tdXRlZD1mYWxzZV1cbiAqIFdoZW4gcHJlc2VudCwgaXQgc3BlY2lmaWVzIHRoYXQgdGhlIGF1ZGlvIG91dHB1dCBvZiB0aGUgdmlkZW8gc2hvdWxkIGJlIG11dGVkLlxuICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLnByZWxvYWQ9J21ldGFkYXRhJ10gQ2FuIGJlICgnYXV0byd8J21ldGFkYXRhJ3wnbm9uZScpXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMucG9zdGVyXSBQYXRoIHRvIHBvc3RlciBvZiB2aWRlb1xuICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLnN2Z1BhdGhdIFBhdGggdG8gc3ZnIHNwcml0ZSBmb3IgaWNvbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5yYXRlXSBSYXRlIG9wdGlvbnNcbiAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5yYXRlLnN0ZXA9MC4yNV0gU3RlcCBvZiBpbmNyZWFzZS9kZWNyZWFzZSBieSByYXRlIGNvbnRyb2xcbiAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5yYXRlLm1pbj0wLjVdIE1pbiBvZiByYXRlXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMucmF0ZS5tYXg9NC4wXSBNYXggb2YgcmF0ZVxuICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLnJhdGUuZGVmYXVsdD0xXVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLnBsYXliYWNrXSBQbGF5YmFjayBvcHRpb25zXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMucGxheWJhY2suc3RlcF1cbiAqIEBwYXJhbSB7TnVibWVyfSBbb3B0aW9ucy5wbGF5YmFjay5zdGVwLnNob3J0PTVdXG4gKiBAcGFyYW0ge051Ym1lcn0gW29wdGlvbnMucGxheWJhY2suc3RlcC5tZWRpdW09MzBdXG4gKiBAcGFyYW0ge051Ym1lcn0gW29wdGlvbnMucGxheWJhY2suc3RlcC5sb25nPTYwXVxuICogQHBhcmFtIHtPYmVqY3R9IFtvcHRpb25zLmNvbnRyb2xzXSBPYmplY3Qgb2YgY29udHJvbHNcbiAqIEBwYXJhbSB7U3RyaW5nW119IFtvcHRpb25zLmNvbnRyb2xzLmNvbW1vbl0gQXJyYXkgb2YgY29udHJvbHMgZm9yIGRlZmF1bHQgdmlld1xuICogQHBhcmFtIHtTdHJpbmdbXX0gW29wdGlvbnMuY29udHJvbHMuZnVsbHNjcmVlbl0gQXJyYXkgb2YgY29udHJvbCBmb3IgZnVsbHNyZWVuIHZpZXdcbiAqIEBwYXJhbSB7U3RyaW5nW119IFtvcHRpb25zLmNvbnRyb2xzLm1pbmldIEFycmF5IG9mIGNvbnRyb2wgZm9yIG1pbmlwbGF5ZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5leGNsdWRlQ29udHJvbHNdIE9iamVjdCBvZiBleGNsdWRlIGNvbnRyb2xzLiBTdHJ1Y3R1cmUgaXMgdGhlIHNhbWUgYXMgdGhhdCBvZiBvcHRpb25zLmNvbnRyb2xzXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMudm9sdW1lXSBWb2x1bWUncyBvcHRpb25zXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMudm9sdW1lLmRlZmF1bHQ9MC40XSBEZWZhdWx0IHZvbHVtZVxuICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLnZvbHVtZS5tdXRlbGltaXQ9MC4wNV0gRGVsdGEgd2hlbiB2b2x1bWUgaXMgbXV0ZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy52b2x1bWUuc3RlcD0wLjA1XVxuICogQHBhcmFtIHtPYmplY3RbXX0gW29wdGlvbnMua2V5YmluZGluZ11cbiAqIE9iamVjdCB3aXRoIGtleWJpbmRpbmcgb3B0aW9ucywgd2hlbiBrZXkgaXQncyBuYW1lIG9mIGtleSBiaW5kaW5nLCBhbmQgdmFsdWUgaXQncyBrZXkgYmluZGluZyBzZXR0aW5nc1xuICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmtleWJpbmRpbmdbXS5rZXldIENvZGUgb2Yga2V5IGJpbmRpbmcgKGZvciBleGFtcGxlIDMyIGl0J3Mgc3BhY2UpXG4gKiBAcGFyYW0ge1N0cmluZ1tdfSBbb3B0aW9ucy5rZXliaW5kaW5nW10uaW5mb10gQXJyYXkgb2Yga2V5c3Ryb2tlcyBvcmRlclxuICogQHBhcmFtIHtTdHJpbmd9IG9wdGlvbnMua2V5YmluZGluZ1tdLmRlc2NyaXB0aW9uXSBEZXNjcmlwdGlvbiBvZiBrZXkgYmluZGluZ1xuICogQHBhcmFtIHtGdW5jdGlvbn0gb3B0aW9ucy5rZXliaW5kaW5nW10uZm5dIENhbGxiYWNrXG4gKiBAcGFyYW0ge09iamVjdHxCb29sZWFufSBbb3B0aW9ucy5taW5pcGxheWVyPWZhbHNlXVxuICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLm1pbmlwbGF5ZXIud2lkdGhdIFdpZHRoIG9mIG1pbmlwbGF5ZXIgY29udGFpbmVyXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMubWluaXBsYXllci53aWR0aF0gTWluaVBsYXllcidzIHdpZHRoXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuc2VjdGlvbkNvbnRhaW5lcl0gU2VsZWN0b3IgZm9yIHNlY3Rpb25zXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMucGx1Z2luc10gS2V5cyBvZiBvYmplY3RzIGFyZSBuYW1lIG9mIHBsdWdpbiwgdmFsdWUgLSBwbHVnaW4gb3B0aW9uc1xuICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fSBbb3B0aW9ucy5kYXRhXSBVcmwgb3IgSlNPTiB3aXRoIGRhdGEgZm9yIHBsYXllclxuICogQHBhcmFtIHtBcnJheX0gW29wdGlvbnMuZGF0YS5zZWN0aW9uc10gU2VjdGlvbnMgYXJyYXlcbiAqL1xuXG5jbGFzcyBQbGF5ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3RvcihlbGVtZW50LCBvcHRpb25zKSB7XG5cblx0XHRvcHRpb25zLmNyZWF0ZUVsZW1lbnQgPSBmYWxzZTtcblxuXHRcdHN1cGVyKG51bGwsIG9wdGlvbnMpO1xuXG5cdFx0dGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XG5cblx0XHQvKipcblx0XHQgKiBET00gY29udGFpbmVyIHRvIGhvbGQgaW5uZXIgb2YgcGxheWVyXG5cdFx0ICpcblx0XHQgKiBAbWVtYmVyb2YhIFBsYXllciNcblx0XHQgKiBAdHlwZSB7alF1ZXJ5fVxuXHRcdCAqL1xuXHRcdHRoaXMuaW5uZXJFbGVtZW50ID0gY3JlYXRlRWwoJ2RpdicpO1xuXG5cdFx0Ly8gVXNlcnMgb3B0aW9uc1xuXHRcdHRoaXMuX3VzZXJPcHRpb25zID0gb3B0aW9ucztcblx0XHR0aGlzLl9pbml0T3B0aW9ucygpO1xuXG5cdFx0aWYodGhpcy5vcHRpb25zLnN2Z1BhdGggPT09ICcnKSB7XG5cdFx0XHRQbGF5ZXIuX2xvYWRTVkdTcHJpdGUoUGxheWVyLmRlZmF1bHRTcHJpdGUpO1xuXHRcdH1cblxuXHRcdHRoaXMuX3ZpZXcgPSAnY29tbW9uJztcblxuXHRcdC8qKlxuXHRcdCAqIERPTSBjb250YWluZXIgdG8gaG9sZCBhbGwgcGxheWVyXG5cdFx0ICpcblx0XHQgKiBAbWVtYmVyb2YhIFBsYXllciNcblx0XHQgKiBAdHlwZSB7alF1ZXJ5fVxuXHRcdCAqL1xuXHRcdHRoaXMuZWxlbWVudCA9IHRoaXMuY3JlYXRlRWxlbWVudCgpO1xuXG5cdFx0dGhpcy5sb2FkRW50aXR5KHRoaXMub3B0aW9ucy5lbnRpdHksIHsgY3R4IDogZWxlbWVudCB9KTtcblx0XHQvKipcblx0XHQgKiBWaWRlbyBodG1sNSBjb21wb25lbnRcblx0XHQgKlxuXHRcdCAqIEBtZW1iZXJvZiEgUGxheWVyI1xuXHRcdCAqIEB0eXBlIHtFbnRpdHl9XG5cdFx0ICovXG5cdFx0dGhpcy52aWRlbyA9IHRoaXMuZW50aXR5O1xuXG5cdFx0Ly8gQ3JlYXRlIGNvbnRyb2xzXG5cdFx0Ly8gVE9ETzogbW92ZSB0aGlzIGFjdGlvbiB0byB0aGUgY3JlYXRlRWxlbWVudFxuXHRcdHRoaXMuY29udHJvbHMgPSB7fTtcblx0XHR0aGlzLl9pbml0Q29udHJvbHMoKTtcblxuXHRcdC8qKlxuXHRcdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdHRoaXMuX2RibGNsaWNrVGltZW91dCA9IG51bGw7XG5cblx0XHR0aGlzLl9pbml0U2VjdGlvbnMoKS50aGVuKChkYXRhKSA9PiB7XG5cdFx0XHQvKipcblx0XHRcdCAqIFNlY3Rpb25zIGluaXQgZXZlbnRcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI3NlY3Rpb25zaW5pdFxuXHRcdFx0ICogQGV4YW1wbGVcblx0XHRcdCAqIGNvbnN0IHBsYXllciA9IG5ldyBQbGF5ZXIoJCgnI3ZpZGVvJyksIG9wdGlvbnMpO1xuXHRcdFx0ICogcGxheWVyLm9uKCdzZWN0aW9uc2luaXQnLCAoZSwgZGF0YSkgPT4gY29zbm9sZS5sb2coZGF0YSkpO1xuXHRcdFx0ICpcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdzZWN0aW9uc2luaXQnLCBkYXRhKTtcblx0XHR9KTtcblx0XHR0aGlzLl9pbml0UGx1Z2lucygpO1xuXG5cdFx0dGhpcy5fbGlzdGVuSG90S2V5cygpO1xuXG5cdFx0dGhpcy5fdXNlckFjdGl2aXR5ID0gZmFsc2U7XG5cdFx0dGhpcy5fbGlzdGVuVXNlckFjdGl2aXR5KCk7XG5cblx0XHR0aGlzLl93YWl0aW5nVGltZW91dHMgPSBbXTtcblxuXHRcdC8qIFJldHJpZ2dlciB7QGxpbmsgRW50aXR5fSBFdmVudHMgKi9cblx0XHRbXG5cdFx0XHQvKipcblx0XHRcdCAqIGR1cmF0aW9uY2hhbmdlIHBsYXllciBldmVudFxuXHRcdFx0ICpcblx0XHRcdCAqIEBldmVudCBQbGF5ZXIjZHVyYXRpb25jaGFuZ2Vcblx0XHRcdCAqL1xuXHRcdFx0J2R1cmF0aW9uY2hhbmdlJyxcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBwcm9ncmVzcyBodG1sNSBtZWRpYSBldmVudFxuXHRcdFx0ICpcblx0XHRcdCAqIEBldmVudCBQbGF5ZXIjcHJvZ3Jlc3Ncblx0XHRcdCAqL1xuXHRcdFx0J3Byb2dyZXNzJyxcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBkYmxjbGlja1xuXHRcdFx0ICpcblx0XHRcdCAqIEBldmVudCBQbGF5ZXIjZGJjbGlja1xuXHRcdFx0ICovXG5cdFx0XHQnZGJsY2xpY2snLFxuXG5cdFx0XHQvKipcblx0XHRcdCAqIGRibGNsaWNrXG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciNkYmNsaWNrXG5cdFx0XHQgKi9cblx0XHRcdCdjbGljaycsXG5cblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBjYW5wbGF5IGh0bWw1IG1lZGlhIGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciNjYW5wbGF5XG5cdFx0XHQgKi9cblx0XHRcdCdjYW5wbGF5JyxcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBxdWFsaXR5Y2hhbmdlIGh0bWw1XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciNxdWFsaXR5Y2hhbmdlXG5cdFx0XHQgKi9cblx0XHRcdCdxdWFsaXR5Y2hhbmdlJyxcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBxdWFsaXR5Y2hhbmdlIGh0bWw1XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciN0cmFja3NjaGFuZ2Vcblx0XHRcdCAqL1xuXHRcdFx0J3RyYWNrc2NoYW5nZScsXG5cblxuXG5cdFx0XS5mb3JFYWNoKGV2ZW50TmFtZSA9PiB7XG5cdFx0XHR0aGlzLnZpZGVvLm9uKGV2ZW50TmFtZSwgKCkgPT4ge1xuXHRcdFx0XHR0aGlzLnRyaWdnZXIoZXZlbnROYW1lKTtcblx0XHRcdH0pXG5cdFx0fSk7XG5cblx0XHR0aGlzLnZpZGVvLm9uZSgncGxheScsICgpID0+IHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRmlyc3QgcGxheSBldmVudFxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBldmVudCBQbGF5ZXIjZmlyc3RwbGF5XG4gICAgICAgICAgICAgKi9cblx0XHRcdHRoaXMudHJpZ2dlcignZmlyc3RwbGF5Jyk7XG5cdFx0XHR0aGlzLnJlbW92ZUNsYXNzKCdsZXBsYXllci0tdmlyZ2luJyk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLnZpZGVvLm9uKCd0aW1ldXBkYXRlJywgKCkgPT4ge1xuXHRcdFx0aWYgKHRoaXMudmlkZW8uY3VycmVudFRpbWUgPiAwKSB7XG5cdFx0XHRcdHRoaXMucmVtb3ZlQ2xhc3MoJ2xlcGxheWVyLS12aXJnaW4nKTtcblx0XHRcdH1cblxuXHRcdFx0LyoqXG5cdFx0XHQgKiB0aW1ldXBkYXRlIGh0bWw1IG1lZGlhIGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciN0aW1ldXBkYXRlXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMudHJpZ2dlcigndGltZXVwZGF0ZScsIHsgdGltZSA6IHRoaXMudmlkZW8uY3VycmVudFRpbWUsIGR1cmF0aW9uIDogdGhpcy52aWRlby5kdXJhdGlvbiB9KTtcblxuXHRcdH0pXG5cblx0XHR0aGlzLnZpZGVvLm9uKCdsb2Fkc3RhcnQnLCAoKSA9PiB7XG5cdFx0XHR0aGlzLnJlbW92ZUNsYXNzKCdsZXBsYXllci0tZW5kZWQnKTtcblxuXHRcdFx0dGhpcy5lcnJvciA9IG51bGw7XG5cdFx0XHQvKipcblx0XHRcdCAqIGxvYWRzdGFydCBwbGF5ZXIgZXZlbnRcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI2xvYWRzdGFydFxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLnRyaWdnZXIoJ2xvYWRzdGFydCcpO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy52aWRlby5vbignc2Vla2luZycsICgpID0+IHtcblx0XHRcdHRoaXMuX3N0YXJ0V2FpdGluZygpO1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBzZWVraW5nIGh0bWw1IG1lZGlhIGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciNzZWVraW5nXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMudHJpZ2dlcignc2Vla2luZycpO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy52aWRlby5vbignc2Vla2VkJywgKCkgPT4ge1xuXHRcdFx0dGhpcy5fc3RvcFdheXRpbmcoKTtcblx0XHRcdC8qKlxuXHRcdFx0ICogc2Vla2VkIGh0bWw1IG1lZGlhIGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciNzZWVrZWRcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdzZWVrZWQnKTtcblx0XHR9KTtcblxuXHRcdHRoaXMudmlkZW8ub24oJ3ZvbHVtZWNoYW5nZScsICgpID0+IHtcblx0XHRcdC8qKlxuXHRcdFx0ICogdm9sdW1lY2hhbmdlIGh0bWw1IG1lZGlhIGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciN2b2x1bWVjaGFuZ2Vcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy50cmlnZ2VyKCd2b2x1bWVjaGFuZ2UnLCB7IHZvbHVtZSA6IHRoaXMudmlkZW8udm9sdW1lIH0pO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy52aWRlby5vbigncG9zdGVyY2hhbmdlJywgKGUsIGRhdGEpID0+IHtcblx0XHRcdGNvbnN0IHVybCA9IGRhdGEudXJsO1xuXHRcdFx0dGhpcy5wb3N0ZXIudXJsID0gdXJsO1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdwb3N0ZXJjaGFuZ2UnKTtcblx0XHR9KTtcblxuXHRcdHRoaXMudmlkZW8ub24oJ3BsYXknLCAoZSkgPT4ge1xuXHRcdFx0dGhpcy5yZW1vdmVDbGFzcygnbGVwbGF5ZXItLWVuZGVkJyk7XG5cdFx0XHR0aGlzLnJlbW92ZUNsYXNzKCdsZXBsYXllci0tcGF1c2VkJyk7XG5cdFx0XHR0aGlzLmFkZENsYXNzKCdsZXBsYXllci0tcGxheWluZycpO1xuXG5cdFx0XHQvKipcblx0XHRcdCAqIHBsYXkgaHRtbDUgbWVkaWEgZXZlbnRcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI3BsYXlcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdwbGF5Jyk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLnZpZGVvLm9uKCdwYXVzZScsICgpID0+IHtcblx0XHRcdHRoaXMucmVtb3ZlQ2xhc3MoJ2xlcGxheWVyLS1wbGF5aW5nJyk7XG5cdFx0XHR0aGlzLmFkZENsYXNzKCdsZXBsYXllci0tcGF1c2VkJyk7XG5cblx0XHRcdC8qKlxuXHRcdFx0ICogcGF1c2UgaHRtbDUgbWVkaWEgZXZlbnRcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI3BhdXNlXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMudHJpZ2dlcigncGF1c2UnKTtcblx0XHR9KTtcblxuXHRcdHRoaXMudmlkZW8ub24oJ3BsYXlpbmcnLCAoKSA9PiB7XG5cdFx0XHR0aGlzLl9zdG9wV2F5dGluZygpO1xuXG5cdFx0XHQvKipcblx0XHRcdCAqIHBsYXlpbmcgaHRtbDUgbWVkaWEgZXZlbnRcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI3BsYXlpbmdcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdwbGF5aW5nJyk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLnZpZGVvLm9uKCdyYXRlY2hhbmdlJywgKCkgPT4ge1xuXHRcdFx0LyoqXG5cdFx0XHQgKiByYXRlIGh0bWw1IG1lZGlhIGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciNyYXRlXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMudHJpZ2dlcigncmF0ZWNoYW5nZScsIHsgcmF0ZSA6IHRoaXMudmlkZW8ucmF0ZSB9KTtcblx0XHR9KTtcblxuXHRcdHRoaXMudmlkZW8ub24oJ2VuZGVkJywgKCkgPT4ge1xuXHRcdFx0dGhpcy5hZGRDbGFzcygnbGVwbGF5ZXItLWVuZGVkJyk7XG5cblx0XHRcdGlmKHRoaXMub3B0aW9ucy5sb29wKSB7XG5cdFx0XHRcdHRoaXMuY3VycmVudFRpbWUgPSAwO1xuXHRcdFx0XHR0aGlzLnZpZGVvLnBsYXkoKTtcblx0XHRcdH0gZWxzZSBpZiAoIXRoaXMudmlkZW8ucGF1c2VkKSB7XG5cdFx0XHRcdHRoaXMudmlkZW8ucGF1c2UoKTtcblx0XHRcdH1cblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBlbmRlZCBodG1sNSBtZWRpYSBldmVudFxuXHRcdFx0ICpcblx0XHRcdCAqIEBldmVudCBQbGF5ZXIjZW5kZWRcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdlbmRlZCcpO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy52aWRlby5vbignY2FucGxheXRocm91Z2gnLCAoKSA9PiB7XG5cdFx0XHR0aGlzLl9zdG9wV2F5dGluZygpO1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBjYW5wbGF5dGhyb3VnaCBodG1sNSBtZWRpYSBldmVudFxuXHRcdFx0ICpcblx0XHRcdCAqIEBldmVudCBQbGF5ZXIjY2FucGxheXRocm91Z2hcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdjYW5wbGF5dGhyb3VnaCcpO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy52aWRlby5vbignd2FpdGluZycsICgpID0+IHtcblx0XHRcdHRoaXMuX3N0YXJ0V2FpdGluZygpO1xuXG5cdFx0XHR0aGlzLnZpZGVvLm9uZSgndGltZXVwZGF0ZScsICgpID0+IHRoaXMuX3N0b3BXYXl0aW5nKCkpO1xuXG5cdFx0XHQvKipcblx0XHRcdCAqIHdhaXRpbmcgaHRtbDUgbWVkaWEgZXZlbnRcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI3dhaXRpbmdcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy50cmlnZ2VyKCd3YWl0aW5nJyk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLnZpZGVvLm9uKCdlcnJvcicsIChlLCBkYXRhKSA9PiB7XG5cdFx0XHR0aGlzLmVycm9yID0gbmV3IE1lZGlhRXJyb3IoZGF0YS5jb2RlKTtcblx0XHR9KTtcblxuXHRcdHRoaXMudmlkZW8uaW5pdCgpLnRoZW4oKCkgPT4ge1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBQbGF5ZXIgaW5pdCBldmVudFxuXHRcdFx0ICpcblx0XHRcdCAqIEBldmVudCBQbGF5ZXIjaW5pdGVkXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMudHJpZ2dlcignaW5pdGVkJyk7XG5cblx0XHRcdGlmKHRoaXMub3B0aW9ucy50aW1lKSB7XG5cdFx0XHRcdHRoaXMuY3VycmVudFRpbWUgPSB0aGlzLm9wdGlvbnMudGltZTtcblx0XHRcdH1cblxuXHRcdFx0aWYodGhpcy52aWRlby5zcmMgIT0gbnVsbCAmJiB0aGlzLm9wdGlvbnMuYXV0b3BsYXkpIHtcblx0XHRcdFx0dGhpcy5wbGF5KCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblxuXHRcdHRoaXMub24oJ2Z1bGxzY3JlZW5jaGFuZ2UnLCB0aGlzLl9vbkZ1bGxzY3JlZW5DaGFuZ2UuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5vbignY2xpY2snLCB0aGlzLl9vbkNsaWNrLmJpbmQodGhpcykpO1xuXHRcdHRoaXMub24oJ2RibGNsaWNrJywgdGhpcy5fb25EYmNsaWNrLmJpbmQodGhpcykpO1xuXHRcdHRoaXMub24oJ2luaXRlZCcsIHRoaXMuX29uSW5pdGVkLmJpbmQodGhpcykpO1xuXHRcdHRoaXMub24oJ3BsYXknLCB0aGlzLl9vblBsYXkuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5vbigncGF1c2UnLCB0aGlzLl9vblBhdXNlLmJpbmQodGhpcykpO1xuXG5cdFx0JChkb2N1bWVudCkub24oRnVsbHNjcmVlbkFwaS5mdWxsc2NyZWVuY2hhbmdlLCB0aGlzLl9vbkVudGl0eUZ1bGxzY3JlbkNoYW5nZS5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdGdldCBlbnRpdHkoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2VudGl0eTtcblx0fVxuXG5cdGxvYWRFbnRpdHkobmFtZSwgb3B0aW9ucykge1xuXHRcdGNvbnN0IEVudGl0eSA9IFBsYXllci5nZXRDb21wb25lbnQobmFtZSk7XG5cdFx0dGhpcy5fZW50aXR5ID0gbmV3IEVudGl0eSh0aGlzLCBvcHRpb25zKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTdGFydHMgcGxheWluZyB0aGUgdmlkZW9cblx0ICpcblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQGV4YW1wbGVcblx0ICogY29uc3QgcGxheWVyID0gbmV3IFBsYXllcigkKFwiI3ZpZGVvXCIpLG9wdGlvbnMpO1xuXHQgKiAkKCcuc29tZS1idXR0b24nKS5vbignY2xpY2snLCAoKSA9PiBwbGF5ZXIucGxheSgpKTtcblx0ICovXG5cdHBsYXkoKSB7XG5cdFx0cmV0dXJuIHRoaXMudmlkZW8ucGxheSgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFBhdXNlcyB0aGUgY3VycmVudGx5IHBsYXlpbmcgdmlkZW9cblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICovXG5cdHBhdXNlKCkge1xuXHRcdHJldHVybiB0aGlzLnZpZGVvLnBhdXNlKCk7XG5cdH1cblxuXHQvKipcblx0ICogVG9nZ2xlIHRoZSBjdXJyZW50bHkgcGxheWluZyB2aWRlb1xuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKi9cblx0dG9nZ2xlUGxheSgpIHtcblx0XHRyZXR1cm4gdGhpcy52aWRlby50b2dnbGVQbGF5KCk7XG5cdH1cblxuXHQvKipcblx0ICogQmVnaW4gbG9hZGluZyB0aGUgc3JjIGRhdGFcblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICovXG5cdGxvYWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMudmlkZW8ubG9hZCgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIE9uIHNldCB2aWV3IGNhbGxiYWNrXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSB2aWV3IFZpZXcgbmFtZVxuXHQgKiBAcmV0dXJucyB7UGxheWVyfSB0aGlzXG5cdCAqIEBleGFtcGxlXG5cdCAqIGNvbnN0IHBsYXllciA9IG5ldyBQbGF5ZXIoJCgnI3ZpZGVvJyksIG9wdGlvbnMpO1xuXHQgKiBwbGF5ZXIub25TZXRWaWV3KCdtaW5pJywgKCkgPT4gY29uc29sZS5sb2coJ01pbmlwbGF5ZXIgeWVhaCEnKVxuXHQgKiAgICAgLm9uU2V0VmlldygnZnVsbHNjcmVlbicsICgpID0+IGNvbnNvbGUubG9nKCdGdWxsc2NyZWVuIGJvb20hJylcblx0ICogICAgIC5vblNldFZpZXcoJ2NvbW1vbicsICgpID0+IGNvbnNvbGUubG9nKCdDb21tb24gdmlldyAtIGxvbCcpO1xuXHQgKi9cblx0b25TZXRWaWV3KHZpZXcsIC4uLmFyZ3MpIHtcblx0XHR0aGlzLm9uKGBzZXR2aWV3LiR7dmlld31gLCAuLi5hcmdzKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0LyoqXG5cdCAqIENoYW5nZSBzb3VyY2UgYW5kIHNhdmUgdGltZSwgcmF0ZVxuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAcGFyYW0ge09iamVjdH0gcXVhbGl0eVxuXHQgKiBAcGFyYW0ge1N0cmluZ30gW3F1YWxpdHkudGl0bGVdIFRoZSBuYW1lIG9mIHF1YWxpdHV0IGUueCBTRCBvciBIRFxuXHQgKiBAcGFyYW0ge1N0cmluZ30gcXVhbGl0eS51cmxcblx0ICovXG5cdGNoYW5nZVF1YWxpdHkocXVhbGl0eSkge1xuXHRcdGNvbnN0IHZpZGVvID0gdGhpcy52aWRlbztcblx0XHRpZihxdWFsaXR5ID09IG51bGwpIHJldHVybjtcblx0XHRjb25zdCB0aW1lID0gdGhpcy5jdXJyZW50VGltZTtcblx0XHRjb25zdCByYXRlID0gdGhpcy5yYXRlO1xuXHRcdGNvbnN0IGlzUGF1c2VkID0gdGhpcy5wYXVzZWQ7XG5cblx0XHR2aWRlby5zcmMgPSBxdWFsaXR5O1xuXHRcdHRoaXMucGxheWJhY2tSYXRlID0gcmF0ZTtcblx0XHR0aGlzLmN1cnJlbnRUaW1lID0gdGltZTtcblxuXHRcdGlmKGlzUGF1c2VkKSB7XG5cdFx0XHR0aGlzLnBhdXNlKClcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5wbGF5KClcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogT24gZGVsIHZpZXcgY2FsbGJhY2tcblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHBhcmFtIHtTdHJpbmd9IHZpZXcgVmlldyBuYW1lXG5cdCAqIEByZXR1cm5zIHtQbGF5ZXJ9IHRoaXNcblx0ICogQGV4YW1wbGVcblx0ICogY29uc3QgcGxheWVyID0gbmV3IFBsYXllcigkKCcjdmlkZW8nKSwgb3B0aW9ucyk7XG5cdCAqIHBsYXllci5vbkRlbFZpZXcoJ21pbmknLCAoKSA9PiBjb25zb2xlLmxvZygnRXhpdCBtaW5pcGxheWVyJylcblx0ICovXG5cdG9uRGVsVmlldyh2aWV3LCAuLi5hcmdzKSB7XG5cdFx0dGhpcy5vbihgZGVsdmlldy4ke3ZpZXd9YCwgLi4uYXJncyk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgc29tZSBkYXRhIGZvciBwbGF5ZXJcblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHJldHVybnMge2pRdWVyeS5wcm9taXNlfSBQcm9taXNlXG5cdCAqL1xuXHRnZXREYXRhKCkge1xuXHRcdGNvbnN0IGRmZCA9IG5ldyAkLkRlZmVycmVkKCk7XG5cblx0XHRpZiAodGhpcy5fZGF0YSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRkZmQucmVzb2x2ZSh0aGlzLl9kYXRhKTtcblx0XHRcdHJldHVybiBkZmQucHJvbWlzZSgpXG5cdFx0fVxuXG5cdFx0aWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuZGF0YSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdHJldHVybiAkLmFqYXgoe1xuXHRcdFx0XHR1cmwgOiB0aGlzLm9wdGlvbnMuZGF0YSxcblx0XHRcdFx0bWV0aG9kIDogJ0dFVCcsXG5cdFx0XHRcdGRhdGFUeXBlIDogJ2pzb24nXG5cdFx0XHR9KS5wcm9taXNlKCk7XG5cblx0XHR9IGVsc2UgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuZGF0YSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdGRmZC5yZXNvbHZlKHRoaXMub3B0aW9ucy5kYXRhKTtcblx0XHRcdHJldHVybiBkZmQucHJvbWlzZSgpXG5cdFx0fVxuXHR9XG5cblx0Z2V0U2VjdGlvbkRhdGEoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0RGF0YSgpXG5cdFx0XHQudGhlbihkYXRhID0+IHtcblx0XHRcdFx0cmV0dXJuIGRhdGEuc2VjdGlvbnNcblx0XHRcdH0pXG5cdH1cblxuXHQvKipcblx0ICogUmVxdWVzdCBmdWxsc2NyZWVuXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBmaXJlcyBQbGF5ZXIjZnVsbHNjcmVlbmNoYW5nZVxuXHQgKi9cblx0cmVxdWVzdEZ1bGxzY3JlZW4oKSB7XG5cdFx0Y29uc3QgZnNBcGkgPSBGdWxsc2NyZWVuQXBpO1xuXG5cdFx0aWYoZnNBcGkucmVxdWVzdEZ1bGxzY3JlZW4pIHtcblx0XHRcdC8vIENhbGwgSFRNTDUgVmlkZW8gYXBpIHJlcXVlc3RGdWxsc2NyZWVuXG5cdFx0XHR0aGlzLmVsZW1lbnRbMF1bZnNBcGkucmVxdWVzdEZ1bGxzY3JlZW5dKCk7XG5cblx0XHRcdC8qKlxuXHRcdFx0ICogZnVsbHNjcmVlbmNoYW5nZSBodG1sNSBtZWRpYSBldmVudFxuXHRcdFx0ICpcblx0XHRcdCAqIEBldmVudCBQbGF5ZXIjZnVsbHNjcmVlbmNoYW5nZVxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLnRyaWdnZXIoJ2Z1bGxzY3JlZW5jaGFuZ2UnLCB0cnVlKTtcblx0XHR9IGVsc2UgaWYgKHRoaXMudmlkZW8uc3VwcG9ydHNGdWxsU2NyZWVuKCkpIHtcblx0XHRcdHRoaXMudmlkZW8uZW50ZXJGdWxsc2NyZWVuKCk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEV4aXQgZnVsbHNjcmVlblxuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAZmlyZXMgUGxheWVyI2Z1bGxzY3JlZW5jaGFuZ2Vcblx0ICovXG5cdGV4aXRGdWxsc2NyZWVuKCkge1xuXHRcdGNvbnN0IGZzQXBpID0gRnVsbHNjcmVlbkFwaTtcblxuXHRcdGlmKGZzQXBpLmV4aXRGdWxsc2NyZWVuKSB7XG5cdFx0XHRkb2N1bWVudFtmc0FwaS5leGl0RnVsbHNjcmVlbl0oKTtcblx0XHR9IGVsc2UgaWYgKHRoaXMudmlkZW8uc3VwcG9ydHNGdWxsU2NyZWVuKCkpIHtcblx0XHRcdHRoaXMudmlkZW8uZXhpdEZ1bGxzY3JlZW4oKTtcblx0XHR9XG5cblx0XHR0aGlzLnRyaWdnZXIoJ2Z1bGxzY3JlZW5jaGFuZ2UnLCBmYWxzZSk7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBUb2dnbGUgZnVsbHNjcmVlblxuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAZmlyZXMgUGxheWVyI2Z1bGxzY3JlZW5jaGFuZ2Vcblx0ICovXG5cdHRvZ2dsZUZ1bGxzY3JlZW4oKSB7XG5cdFx0aWYodGhpcy52aWV3ID09PSAnZnVsbHNjcmVlbicpIHtcblx0XHRcdHRoaXMuZXhpdEZ1bGxzY3JlZW4oKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnJlcXVlc3RGdWxsc2NyZWVuKClcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogR2V0IENvbnRyb2xDb2xsZWN0aW9uIG9mIFBsYXllciBieSBuYW1lIChlLnggJ2NvbW1vbicsICdmdWxsc2NyZWVuJylcblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgLSBOYW1lIG9mIENvbnRyb2xDb2xsZWN0aW9uXG5cdCAqIEByZXR1cm5zIHtDb250cm9sQ29sbGVjdGlvbn1cblx0ICovXG5cdGdldENvbnRyb2xzKG5hbWUpIHtcblx0XHRyZXR1cm4gdGhpcy5jb250cm9sc1tuYW1lXTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm4gdGhlIHdpZHRoIG9mIHBsYXllci5cblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHJldHVybnMge051bWJlcn0gV2lkdGggaW4gcHhcblx0ICovXG5cdGdldFdpZHRoKCkge1xuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQud2lkdGgoKVxuXHR9XG5cblx0LyoqXG5cdCAqIENvbXBsZXRlIHRoZSBzZWN0aW9ucywgYnkgdGhlIGFkZGl0aW9uYWwgZmllbGQgJ2VuZCcgaW4gZWFjaCBzZWN0aW9uXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge09iamVjdH0gc2VjdGlvbnMgLSBTZWN0aW9uc1xuXHQgKiBAcmV0dXJucyB7T2JqZWN0fSBOZXcgc2VjdGlvbnNcblx0ICovXG5cdF9jb21wbGV0ZVNlY3Rpb25zKHNlY3Rpb25zKSB7XG5cdFx0aWYgKHNlY3Rpb25zID09IG51bGwgfHwgc2VjdGlvbnMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm5cblx0XHR9XG5cdFx0bGV0IG5ld1NlY3Rpb25zID0gW10uY29uY2F0KHNlY3Rpb25zKVxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbmV3U2VjdGlvbnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGxldCBlbmRTZWN0aW9uO1xuXHRcdFx0aWYgKGkgPCAobmV3U2VjdGlvbnMubGVuZ3RoIC0gMSkpIHtcblx0XHRcdFx0ZW5kU2VjdGlvbiA9IG5ld1NlY3Rpb25zW2krMV0uYmVnaW5cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGVuZFNlY3Rpb24gPSB0aGlzLnZpZGVvLmR1cmF0aW9uO1xuXHRcdFx0fVxuXHRcdFx0bmV3U2VjdGlvbnNbaV0uZW5kID0gZW5kU2VjdGlvbjtcblx0XHR9XG5cdFx0cmV0dXJuIG5ld1NlY3Rpb25zO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBhbmQgc2V0IHRoZSBjdXJyZW50IHBsYXliYWNrIHBvc2l0aW9uIGluIHRoZSBhdWRpby92aWRlbyAoaW4gc2Vjb25kcylcblx0ICogR2V0dGVyIGFuZCBzZXR0ZXJcblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQG1lbWJlcm9mISBQbGF5ZXIjXG5cdCAqIEB0eXBlIHtOdWJtZXJ9XG5cdCAqL1xuXHRnZXQgY3VycmVudFRpbWUoKSB7XG5cdFx0cmV0dXJuIHRoaXMudmlkZW8uY3VycmVudFRpbWU7XG5cdH1cblxuXHRzZXQgY3VycmVudFRpbWUodmFsdWUpIHtcblx0XHR0aGlzLnZpZGVvLmN1cnJlbnRUaW1lID0gdmFsdWU7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyB0aGUgbGVuZ3RoIG9mIHRoZSBjdXJyZW50IGF1ZGlvL3ZpZGVvIChpbiBzZWNvbmRzKVxuXHQgKiBHZXR0ZXJcblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQG1lbWJlcm9mISBQbGF5ZXIjXG5cdCAqIEB0eXBlIHtOdWJtZXJ9XG5cdCAqL1xuXHRnZXQgZHVyYXRpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMudmlkZW8uZHVyYXRpb247XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyB3aGV0aGVyIHRoZSBwbGF5YmFjayBvZiB0aGUgYXVkaW8vdmlkZW8gaGFzIGVuZGVkIG9yIG5vdFxuXHQgKiBHZXR0ZXJcblx0ICpcblx0ICogQG1lbWJlcm9mISBQbGF5ZXIjXG5cdCAqIEB0eXBlIHtCb29sZWFufVxuXHQgKi9cblx0Z2V0IGVuZGVkKCkge1xuXHRcdHJldHVybiB0aGlzLnZpZGVvLmVuZGVkO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgYW5kIHNldCB3aGV0aGVyIHRoZSBwbGF5YmFjayBvZiB0aGUgYXVkaW8vdmlkZW8gaGFzIGVuZGVkIG9yIG5vdFxuXHQgKiBHZXR0ZXIgYW5kIHNldHRlclxuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAbWVtYmVyb2YhIFBsYXllciNcblx0ICogQHR5cGUge01lZGlhRXJyb3J8U3RyaW5nfVxuXHQgKiBAZmlyZXMgUGxheWVyI2Vycm9yXG5cdCAqL1xuXHRnZXQgZXJyb3IoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2Vycm9yIHx8IG51bGw7XG5cdH1cblxuXHRzZXQgZXJyb3IodmFsdWUpIHtcblx0XHRpZiAodmFsdWUgPT09IG51bGwpIHtcblx0XHRcdHRoaXMuX2Vycm9yID0gbnVsbDtcblx0XHRcdHRoaXMucmVtb3ZlQ2xhc3MoJ2xlcGxheWVyLS1lcnJvcicpO1xuXHRcdFx0aWYodGhpcy5lcnJvckRpc3BsYXkpIHtcblx0XHRcdFx0dGhpcy5lcnJvckRpc3BsYXkuZWxlbWVudC5oaWRlKClcblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblx0XHR0aGlzLl9lcnJvciA9IG5ldyBNZWRpYUVycm9yKHZhbHVlKTtcblxuXHRcdHRoaXMuYWRkQ2xhc3MoJ2xlcGxheWVyLS1lcnJvcicpO1xuXG5cdFx0LyoqXG5cdFx0ICogZXJyb3IgZXZlbnRcblx0XHQgKlxuXHRcdCAqIEBldmVudCBQbGF5ZXIjZXJyb3Jcblx0XHQgKiBAcHJvcGVydHkge01lZGlhRXJyb3J9IGVycm9yXG5cdFx0ICogQGV4YW1wbGVcblx0XHQgKiBjb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyKCQoJyN2aWRlbycpLCBvcHRpb25zKTtcblx0XHQgKiBwbGF5ZXIub24oJ2Vycm9yJywgKGUsIGRhdGEpID0+IGNvbnNvbGUuZXJyb3IoZGF0YS5lcnJvcikpO1xuXHRcdCAqL1xuXHRcdHRoaXMudHJpZ2dlcignZXJyb3InLCB7IGVycm9yIDogdGhpcy5fZXJyb3J9KTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Z2V0IHJhdGUoKSB7XG5cdFx0cmV0dXJuIHRoaXMudmlkZW8ucmF0ZTtcblx0fVxuXG5cdHNldCByYXRlKHZhbHVlKSB7XG5cdFx0dGhpcy52aWRlby5yYXRlID0gdmFsdWU7XG5cdH1cblxuXHRnZXQgcGF1c2VkKCkge1xuXHRcdHJldHVybiB0aGlzLnZpZGVvLnBhdXNlZDtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm4gdGhlIGhlaWdodCBvZiBwbGF5ZXIuIElmIHlvdSB3YW50IGdldCBoZWlnaHQgb25seSBvZiB2aWRlbyBlbGVtZW50LCB1c2UgdGhpcy52aWRlby5oZWlnaHQgb3Igd2hhdGV2ZXJcblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHR5cGUge051bWJlcn1cblx0ICogQG1lbWJlcm9mISBQbGF5ZXIjXG5cdCAqL1xuXHRnZXQgaGVpZ2h0KCkge1xuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQuaGVpZ2h0KClcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm4gdW5uZWNlc3NhcnkgdmlkZW8gaGVpZ3RoXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEB0eXBlIHtOdW1iZXJ9XG5cdCAqIEBtZW1iZXJvZiEgUGxheWVyI1xuXHQgKi9cblx0Z2V0IHZpZGVvSGVpZ2h0KCkge1xuXHRcdHJldHVybiB0aGlzLnZpZGVvLmhlaWdodDtcblx0fVxuXG5cblx0LyoqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEB0eXBlIHtCb29sZWFufVxuXHQgKiBAbWVibWVyb2YhIFBsYXllciNcblx0ICovXG5cdGdldCB1c2VyQWN0aXZlKCkge1xuXHRcdHJldHVybiB0aGlzLl91c2VyQWN0aXZlIHx8IGZhbHNlO1xuXHR9XG5cblx0c2V0IHVzZXJBY3RpdmUodmFsdWUpIHtcblx0XHRpZih2YWx1ZSAhPT0gdGhpcy5nZXRVc2VyQWN0aXZlKSB7XG5cdFx0XHR0aGlzLl91c2VyQWN0aXZlID0gdmFsdWU7XG5cdFx0XHR0aGlzLnRvZ2dsZUNsYXNzKCdsZXBsYXllci0tdXNlci1hY3RpdmUnLCB2YWx1ZSk7XG5cdFx0XHQvKipcblx0XHRcdCAqIFVzZXIgYWN0aXZlIGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciN1c2VyYWN0aXZlXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMudHJpZ2dlcigndXNlcmFjdGl2ZScpO1xuXHRcdH1cblx0fVxuXG5cblx0LyoqXG5cdCAqIFNldCBhbmQgZ2V0IHBsYXllciB2aWV3LiBWaWV3IENhbiBiZSAnY29tbW9uJywgJ2Z1bGxzY3JlZW4nLCAnbWluaSd3XG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEB0eXBlIHtTdHJpbmd9XG5cdCAqIEBtZW1iZXJvZiEgUGxheWVyI1xuXHQgKi9cblx0Z2V0IHZpZXcoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3ZpZXc7XG5cdH1cblxuXHRzZXQgdmlldyh2aWV3KSB7XG5cdFx0aWYodGhpcy52aWV3ICE9IG51bGwpIHtcblx0XHRcdHRoaXMucmVtb3ZlQ2xhc3MoYGxlcGxheWVyLS0ke3RoaXMudmlld31gKTtcblx0XHRcdHRoaXMudHJpZ2dlcihgZGVsdmlldy4ke3RoaXMudmlld31gKTtcblx0XHR9XG5cblx0XHR0aGlzLl92aWV3ID0gdmlldztcblx0XHR0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoYGxlcGxheWVyLS0ke3ZpZXd9YClcblx0XHR0aGlzLnRyaWdnZXIoYHNldHZpZXcuJHt2aWV3fWApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvKipcblx0ICogUmVtb3ZlIHVubmVjZXNzYXJ5IGF0dHJpYnV0ZXMsIGFuZCBzZXQgc29tZSBhdHRycyBmcm9tIG9wdGlvbnMgKGxvb3AsIHBvc3RlciBldGMuLi4pLiBDcmVhdGUgbWFpbiBET00gb2JqZWN0c1xuXHQgKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0Y29uc3Qgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcblx0XHRjb25zdCBlbGVtZW50ID0gdGhpcy5fZWxlbWVudDtcblxuXHRcdHRoaXMuZWxlbWVudCA9IGNyZWF0ZUVsKCdkaXYnKTtcblxuXG5cdFx0dGhpcy5lbGVtZW50ID0gdGhpcy5lbGVtZW50XG5cdFx0XHQuYWRkQ2xhc3MoJ2xlcGxheWVyJylcblx0XHRcdC5hdHRyKCd0YWJpbmRleCcsIDApXG5cdFx0XHQuY3NzKCd3aWR0aCcsIG9wdGlvbnMud2lkdGggJiYgJzEwMCUnKVxuXHRcdFx0LmNzcygnbWF4LXdpZHRoJywgb3B0aW9ucy53aWR0aClcblxuXHRcdC8qKlxuXHRcdCAqIEVycm9yIGRpc3BsYXkgY29tcG9uZW50LlxuXHRcdCAqXG5cdFx0ICogQHR5cGUge0Vycm9yRGlzcGxheX1cblx0XHQgKiBAbWVtYmVyb2YhIFBsYXllciNcblx0XHQgKi9cblx0XHR0aGlzLmVycm9yRGlzcGxheSA9IG5ldyBFcnJvckRpc3BsYXkodGhpcyk7XG5cblxuXHRcdC8qKlxuXHRcdCAqIFBsYXkgYnV0dG9uIGNvbXBvbmVudC5cblx0XHQgKlxuXHRcdCAqIEB0eXBlIHtQbGF5QnV0dG9ufVxuXHRcdCAqIEBtZW1iZXJvZiEgUGxheWVyI1xuXHRcdCAqL1xuXHRcdHRoaXMucGxheUJ1dHRvbiA9IG5ldyBQbGF5QnV0dG9uKHRoaXMpO1xuXG5cdFx0Ly8gVE9ETzog0JLRi9C90LXRgdGC0Lgg0Y3RgtC+INCyINC+0YLQtNC10LvRjNC90LXRi9C5INC60L7QvNC/0L7QvdC10L3RglxuXHRcdHRoaXMubG9hZGVyID0gJCgnPGRpdiAvPicpXG5cdFx0XHQuYWRkQ2xhc3MoJ2xlcGxheWVyLWxvYWRlci1jb250YWluZXInKVxuXHRcdFx0LmFwcGVuZChuZXcgSWNvbih0aGlzLCB7XG5cdFx0XHRcdGljb25OYW1lIDogJ3JlZnJlc2gnLFxuXHRcdFx0XHRjbGFzc05hbWUgOiAnbGVwbGF5ZXItbG9hZGVyLWNvbnRhaW5lcl9faWNvbidcblx0XHRcdH0pLmVsZW1lbnQpO1xuXG5cblx0XHQvKipcblx0XHQgKiBTcGxhc2ggaWNvbiBjb21wb25lbnQuXG5cdFx0ICpcblx0XHQgKiBAdHlwZSB7U3BsYXNoSWNvbn1cblx0XHQgKiBAbWVtYmVyb2YhIFBsYXllciNcblx0XHQgKi9cblx0XHR0aGlzLnNwbGFzaEljb24gPSBuZXcgU3BsYXNoSWNvbih0aGlzKTtcblxuXHRcdHRoaXMudmlkZW9Db250YWluZXIgPSBjcmVhdGVFbCgnZGl2Jywge1xuXHRcdFx0Y2xhc3NOYW1lIDogJ2xlcGxheWVyLXZpZGVvJ1xuXHRcdH0pXG5cdFx0LmFwcGVuZCh0aGlzLmVycm9yRGlzcGxheS5lbGVtZW50KVxuXHRcdC5hcHBlbmQodGhpcy5wbGF5QnV0dG9uLmVsZW1lbnQpXG5cdFx0LmFwcGVuZCh0aGlzLmxvYWRlcilcblx0XHQuYXBwZW5kKHRoaXMuc3BsYXNoSWNvbi5lbGVtZW50KVxuXG5cdFx0dGhpcy5wb3N0ZXIgPSBuZXcgUG9zdGVyKHRoaXMpO1xuXHRcdHRoaXMudmlkZW9Db250YWluZXIuYXBwZW5kKHRoaXMucG9zdGVyLmVsZW1lbnQpO1xuXG5cblx0XHRjb25zdCBsYXN0VGltZXIgPSBuZXcgVGltZSh0aGlzLCB7XG5cdFx0XHRmbiA6IChwbGF5ZXIpID0+IHtcblx0XHRcdFx0Y29uc3QgdmlkZW8gPSBwbGF5ZXIudmlkZW87XG5cdFx0XHRcdHJldHVybiBzZWNvbmRzVG9UaW1lKHZpZGVvLmR1cmF0aW9uIC0gdmlkZW8uY3VycmVudFRpbWUpO1xuXHRcdFx0fVxuXHRcdH0pXG5cblx0XHRpZih0aGlzLm9wdGlvbnMudmlkZW9JbmZvKSB7XG5cdFx0XHRjb25zb2xlLndhcm4oJ29wdGlvbnMudmlkZW9JbmZvIGlzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2UgaXN0ZWFkIG9wdGlvbnMuZGVzY3JpcHRpb24nKTtcblx0XHR9XG5cblx0XHR0aGlzLmluZm9FbGVtZW50ID0gY3JlYXRlRWwoJ2RpdicsIHtcblx0XHRcdGNsYXNzTmFtZSA6ICdsZXBsYXllcl9faW5mbydcblx0XHR9KVxuXHRcdC5hcHBlbmQoY3JlYXRlRWwoJ2RpdicsIHtcblx0XHRcdGNsYXNzTmFtZSA6ICdsZXBsYXllcl9fdGl0bGUnLFxuXHRcdFx0aHRtbCA6IHRoaXMub3B0aW9ucy50aXRsZSB8fCBcIlwiXG5cdFx0fSkpXG5cdFx0LmFwcGVuZChjcmVhdGVFbCgnZGl2Jywge1xuXHRcdFx0Y2xhc3NOYW1lIDogJ2xlcGxheWVyX192aWRlby1pbmZvJyxcblx0XHRcdGh0bWwgOiB0aGlzLm9wdGlvbnMuZGVzY3JpcHRpb24gfHwgdGhpcy5vcHRpb25zLnZpZGVvSW5mbyB8fCBcIlwiXG5cdFx0fSkpXG5cdFx0LmFwcGVuZChjcmVhdGVFbCgnZGl2Jywge1xuXHRcdFx0Y2xhc3NOYW1lIDogJ2xlcGxheWVyX19sYXN0Jyxcblx0XHRcdGh0bWwgOiBg0JLQuNC00LXQviDQt9Cw0LrQvtC90YfQuNGC0YHRjyDRh9C10YDQtdC3IGAsXG5cdFx0fSkuYXBwZW5kKGxhc3RUaW1lci5lbGVtZW50KSlcblxuXHRcdHRoaXMuaW5uZXJFbGVtZW50ID0gJCgnPGRpdiAvPicpXG5cdFx0XHQuYWRkQ2xhc3MoJ2xlcGxheWVyX19pbm5lcicpXG5cdFx0XHQuYXBwZW5kKHRoaXMudmlkZW9Db250YWluZXIpXG5cdFx0XHQuYXBwZW5kKHRoaXMuaW5mb0VsZW1lbnQpXG5cblx0XHR0aGlzLmVsZW1lbnQgPSB0aGlzLmVsZW1lbnRcblx0XHRcdC5hcHBlbmQodGhpcy5pbm5lckVsZW1lbnQpXG5cblx0XHR0aGlzLmFkZENsYXNzKCdsZXBsYXllci0tcGF1c2VkJyk7XG5cdFx0dGhpcy5hZGRDbGFzcygnbGVwbGF5ZXItLXZpcmdpbicpO1xuXG5cdFx0aWYoSVNfSVBIT05FKSB7XG5cdFx0XHR0aGlzLmFkZENsYXNzKCdsZXBsYXllci0taXBob25lJyk7XG5cdFx0fVxuXG5cdFx0aWYoSVNfQU5EUk9JRCkge1xuXHRcdFx0dGhpcy5hZGRDbGFzcygnbGVwbGF5ZXItLWFuZHJvaWQnKTtcblx0XHR9XG5cblx0XHRpZihJU19NT0JJTEUpIHtcblx0XHRcdHRoaXMuYWRkQ2xhc3MoJ2xlcGxheWVyLS1tb2JpbGUnKTtcblx0XHR9XG5cblxuXG5cdFx0aWYob3B0aW9ucy5zZWN0aW9uQ29udGFpbmVyKSB7XG5cdFx0XHR0aGlzLnNlY3Rpb25zQ29udGFpbmVyID0gJChvcHRpb25zLnNlY3Rpb25Db250YWluZXIpO1xuXHRcdH1cblxuXHRcdGVsZW1lbnQuYmVmb3JlKHRoaXMuZWxlbWVudCk7XG5cdFx0dGhpcy52aWRlb0NvbnRhaW5lci5hcHBlbmQoZWxlbWVudCk7XG5cblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50O1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBvcHRpb25zIGZyb20gdmlkZW8ncyBhdHRyaWJ1dGUgKCBoZWlnaHQsIHdpZHRoLCBwb3N0ZXIsIHByZWxvYWQgZXRjLi4uKVxuXHQgKiBHZXQgc291cmNlIHZpZGVvIGZyb20gc3JjIGF0dHIgb3IgPHNvdXJjZT4gZWxlbWVudCB3aXRoIGRhdGEgYXR0ciAnZGF0YS1xdWFsaXR5J1xuXHQgKiBBbHNvIGdldCBzb3VyY2VzIGZvciBkaWZmZXJlbnQgcXVhbGl0eSBmcm9tIDxzb3VyY2U+IGVsZW1lbnQgd2l0aCBkYXRhIGF0dHIgJ2RhdGEtcXVhbGl0eSdcblx0ICpcblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqIEByZXR1cm5zIHtPYmplY3R9IG9wdGlvbnNcblx0ICovXG5cdF9vcHRpb25zRnJvbUVsZW1lbnQoKSB7XG5cdFx0Ly8gQ29weSB2aWRlbyBhdHRycyB0byB0aGUgb3BpdG9uc1xuXHRcdGNvbnN0ICBlbGVtZW50ID0gdGhpcy5fZWxlbWVudDtcblx0XHRpZiAoZWxlbWVudCA9PSBudWxsIHx8IGVsZW1lbnQubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm4ge31cblx0XHR9XG5cblx0XHRsZXQgYXR0ck9wdGlvbnMgPSBbXG5cdFx0XHQnaGVpZ2h0Jyxcblx0XHRcdCd3aWR0aCcsXG5cdFx0XHQncG9zdGVyJyxcblx0XHRcdCdhdXRvcGxheScsXG5cdFx0XHQnbG9vcCcsXG5cdFx0XHQnbXV0ZWQnLFxuXHRcdFx0J3ByZWxvYWQnLFxuXHRcdF1cblx0XHQucmVkdWNlKChvYmosIGl0ZW0pID0+IHtcblx0XHRcdGNvbnN0IHZhbCA9IGVsZW1lbnQuYXR0cihpdGVtKTtcblx0XHRcdGlmKHZhbCAhPSBudWxsKSB7XG5cdFx0XHRcdG9ialtpdGVtXSA9IGVsZW1lbnQuYXR0cihpdGVtKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBvYmo7XG5cdFx0fSwge30pO1xuXG5cdFx0YXR0ck9wdGlvbnMuc291cmNlcyA9IFtdO1xuXG5cdFx0Ly8gU3JjIGl0IGlzIG1haW4gc291cmNlLCB0aGF0IHdpbGwgYmUgbG9hZFxuXHRcdGlmKGVsZW1lbnQuYXR0cignc3JjJykpIHtcblx0XHRcdGF0dHJPcHRpb25zLnNyYyA9IHtcblx0XHRcdFx0dXJsIDogZWxlbWVudC5hdHRyKCdzcmMnKSxcblx0XHRcdFx0dGl0bGUgOiBlbGVtZW50LmF0dHIoJ2RhdGEtcXVhbGl0eScpIHx8IGVsZW1lbnQuYXR0cigndGl0bGUnKSB8fCAnZGVmYXVsdCdcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBDb3B5IHNvdXJjZXMgZnJvbSBIVE1MNSBzb3VyY2UgZWxlbWVudCB3aXRoIGRhdGEtcXVhbGl0eSBhdHRyXG5cdFx0Ly8gSWYgZGF0YS1xdWFsaXR5IGF0dHIgZG9lcyBub3QgZXhpc3QgLSBub1xuXHRcdGVsZW1lbnQuZmluZCgnc291cmNlJykuZWFjaCgoaSwgaXRlbSkgPT4ge1xuXHRcdFx0aXRlbSA9ICQoaXRlbSk7XG5cdFx0XHRpZighaXRlbS5hdHRyKCdkYXRhLXF1YWxpdHknKSkge1xuXHRcdFx0XHRyZXR1cm5cblx0XHRcdH1cblx0XHRcdGF0dHJPcHRpb25zLnNvdXJjZXMgPSBhdHRyT3B0aW9ucy5zb3VyY2VzLmNvbmNhdCh7XG5cdFx0XHRcdHVybCA6IGl0ZW0uYXR0cignc3JjJyksXG5cdFx0XHRcdHRpdGxlIDogaXRlbS5hdHRyKCdkYXRhLXF1YWxpdHknKSB8fCBpdGVtLmF0dHIoJ3RpdGxlJykgfHwgJ2RlZmF1bHQnXG5cdFx0XHR9KVxuXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gYXR0ck9wdGlvbnM7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJuIGEgbmFtZSBvZiBpY29uLiBJZiBsZXNzIHRoZW4gMC4xIHJldHVybiB2b2x1bWUtb2ZmLFxuXHQgKiBpZiBsZXNzIHRoZW4gMC41IHJldHVybiB2b2x1bWUgZG93biwgZWxzZSByZXR1cm4gdm9sdW1lLXVwXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge051bWJlcn0gdmFsdWUgVm9sdW1lIHZhbHVlXG5cdCAqIEByZXR1cm5zIHtTdHJpbmd9IEljb24gbmFtZVxuXHQgKi9cblx0Y2FsY1ZvbHVtZUljb24odmFsdWUpIHtcblx0XHRpZih2YWx1ZSA9PSBudWxsKSB7XG5cdFx0XHR2YWx1ZSA9IHRoaXMudmlkZW8udm9sdW1lO1xuXHRcdH1cblx0XHRjb25zdCB2b2x1bWUgPSB2YWx1ZTtcblxuXHRcdGlmICh2b2x1bWUgPCB0aGlzLm9wdGlvbnMudm9sdW1lLm11dGVsaW1pdCkge1xuXHRcdFx0cmV0dXJuICd2b2x1bWUtb2ZmJztcblx0XHR9IGVsc2UgaWYgKHZhbHVlIDwgMC41KSB7XG5cdFx0XHRyZXR1cm4gJ3ZvbHVtZS1kb3duJztcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuICd2b2x1bWUtdXAnO1xuXHRcdH1cblx0fVxuXG5cdHRvZ2dsZVNlY3Rpb25zKGZsYWcpIHtcblx0XHRpZih0aGlzLnNlY3Rpb25zKSB7XG5cdFx0XHR0aGlzLnNlY3Rpb25zLnZpc2libGUgPSBmbGFnO1xuXHRcdH1cblx0XHRpZih0aGlzLm91dHNpZGVTZWN0aW9ucykge1xuXHRcdFx0dGhpcy5vdXRzaWRlU2VjdGlvbnMudmlzaWJsZSA9IGZsYWc7XG5cdFx0fVxuXHR9XG5cblxuXG5cdC8qKlxuXHQgKiBNZXJnZSBkZWZhdWx0T3B0aW9ucywgcHJlc2V0T3B0aW9ucyB3aXRoIGF0dHJPcHRpb25zIGFuZCB1c2VyJ3Mgb3B0aW9ucztcblx0ICpcblx0ICogQW5kIGNvbXBsZW1lbnQgdHdvIG9iamVjdHM6IGNvbnRyb2xzIGFuZCBleGNsdWRlQ29udHJvbHNcblx0ICpcblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqL1xuXHRfaW5pdE9wdGlvbnMoKSB7XG5cdFx0Y29uc3QgYXR0ck9wdGlvbnMgPSB0aGlzLl9vcHRpb25zRnJvbUVsZW1lbnQoKTtcblx0XHRsZXQgcHJlc2V0T3B0aW9ucyA9IHt9O1xuXG5cdFx0aWYgKHRoaXMuX3VzZXJPcHRpb25zLnByZXNldCAmJiBQbGF5ZXIuZ2V0UHJlc2V0KHRoaXMuX3VzZXJPcHRpb25zLnByZXNldCkpIHtcblx0XHRcdHByZXNldE9wdGlvbnMgPSBQbGF5ZXIuZ2V0UHJlc2V0KHRoaXMuX3VzZXJPcHRpb25zLnByZXNldCkub3B0aW9ucztcblx0XHR9XG5cblxuXHRcdC8vIE1lcmdlIGRlZmF1bHQgb3B0aW9ucyArIHByZXNldCBvcHRpb25zICsgdmlkZW8gYXR0cmlidXR0cysgdXNlciBvcHRpb25zXG5cdFx0dGhpcy5vcHRpb25zID0gJC5leHRlbmQodHJ1ZSwge30sIGRlZmF1bHRPcHRpb25zLCBwcmVzZXRPcHRpb25zLCBhdHRyT3B0aW9ucywgdGhpcy5fdXNlck9wdGlvbnMpO1xuXG5cdFx0aWYodGhpcy5vcHRpb25zLnNvdXJjZXMgJiYgIUFycmF5LmlzQXJyYXkodGhpcy5vcHRpb25zLnNvdXJjZXMpKSB7XG5cdFx0XHR0aGlzLm9wdGlvbnMuc291cmNlcyA9IFt0aGlzLm9wdGlvbnMuc291cmNlc11cblx0XHR9XG5cblx0XHRpZih0eXBlb2YgdGhpcy5vcHRpb25zLnNyYyA9PT0gJ3N0cmluZycpIHtcblx0XHRcdHRoaXMub3B0aW9ucy5zcmMgPSB7IHVybCA6IHRoaXMub3B0aW9ucy5zcmMgfVxuXHRcdH1cblxuXHRcdGlmKHRoaXMub3B0aW9ucy5zcmMgPT0gbnVsbCAmJiB0aGlzLm9wdGlvbnMuc291cmNlcy5sZW5ndGggPiAwKSB7XG5cdFx0XHR0aGlzLm9wdGlvbnMuc3JjID0gdGhpcy5vcHRpb25zLnNvdXJjZXNbMF1cblx0XHR9XG5cblxuXHRcdC8vIEdlbmVyYXRlIGFuZHJvaWQ6ZnVsbHNjcmVlbiwgYW5kcm9pZDpjb21tb24gYW5kIGV0YyBjb250cm9scyBvcHRpb25zXG5cblxuXHRcdC8vIE1lcmdlIGNvcnJlY3RseSBjb250cm9scywgd2l0aG91dCBkZWVwIG1lcmdlXG5cdFx0dGhpcy5vcHRpb25zLmNvbnRyb2xzID0gJC5leHRlbmQoe30sIGRlZmF1bHRPcHRpb25zLmNvbnRyb2xzLCBwcmVzZXRPcHRpb25zLmNvbnRyb2xzLCB0aGlzLl91c2VyT3B0aW9ucy5jb250cm9scyk7XG5cblx0XHQvLyBleGNsdWRlIGNvbnRyb2xzIG9wdGlvblxuXHRcdC8vIFRPRE8oYWRpbnZhZGltKTpcblx0XHQvLyBTZXQgZGVwcmVjZXRlZCBmbGFnIGZvciB0aGlzIG9wdGlvbjtcblx0XHRmb3IgKGNvbnN0IG5hbWUgaW4gdGhpcy5vcHRpb25zLmV4Y2x1ZGVDb250cm9scykge1xuXHRcdFx0aWYgKCF0aGlzLm9wdGlvbnMuZXhjbHVkZUNvbnRyb2xzLmhhc093blByb3BlcnR5KG5hbWUpKSByZXR1cm47XG5cdFx0XHRjb25zdCBjb250cm9sQ29sbGVjdGlvbiA9IHRoaXMub3B0aW9ucy5leGNsdWRlQ29udHJvbHNbbmFtZV07XG5cdFx0XHRjb250cm9sQ29sbGVjdGlvbi5mb3JFYWNoKChyb3csIGluZGV4KSA9PiB7XG5cdFx0XHRcdGlmICh0aGlzLm9wdGlvbnMuY29udHJvbHNbbmFtZV0gJiYgdGhpcy5vcHRpb25zLmNvbnRyb2xzW25hbWVdW2luZGV4XSkge1xuXHRcdFx0XHRcdHRoaXMub3B0aW9ucy5jb250cm9sc1tuYW1lXVtpbmRleF0gPSBleGNsdWRlQXJyYXkodGhpcy5vcHRpb25zLmNvbnRyb2xzW25hbWVdW2luZGV4XSwgcm93KTtcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHR9XG5cblx0XHRpZiAodGhpcy5vcHRpb25zLnByZXNldCAmJiBQbGF5ZXIuZ2V0UHJlc2V0KHRoaXMub3B0aW9ucy5wcmVzZXQpKSB7XG5cdFx0XHRQbGF5ZXIuZ2V0UHJlc2V0KHRoaXMub3B0aW9ucy5wcmVzZXQpLmluaXRPcHRpb25zKCk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZSBhbmQgaW5pdCBhbGwgY29udHJvbHNcblx0ICpcblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqL1xuXHRfaW5pdENvbnRyb2xzKCkge1xuXHRcdGZvciAoY29uc3QgbmFtZSBvZiBbJ2NvbW1vbicsICdmdWxsc2NyZWVuJ10pIHtcblx0XHRcdGlmICghdGhpcy5vcHRpb25zLmNvbnRyb2xzLmhhc093blByb3BlcnR5KG5hbWUpKSByZXR1cm47XG5cdFx0XHRjb25zdCBjb250cm9sQ29sbGVjdGlvbiA9IG5ldyBDb250cm9sQ29sbGVjdGlvbih0aGlzLCB7IG5hbWUgfSk7XG5cblx0XHRcdHRoaXMuZWxlbWVudC5hcHBlbmQoY29udHJvbENvbGxlY3Rpb24uZWxlbWVudCk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuY29udHJvbHMuY29tbW9uICE9IG51bGwpIHtcblx0XHRcdHRoaXMuY29udHJvbHMuY29tbW9uLmFjdGl2ZSA9IHRydWU7XG5cdFx0fVxuXHR9XG5cblxuXHRfbGlzdGVuSG90S2V5cygpIHtcblxuXHRcdGNvbnN0IGlzS2V5QmluZGluZyA9IChlLCBiaW5kaW5nKSA9PiB7XG5cdFx0XHRyZXR1cm4gKChlLndoaWNoID09PSBiaW5kaW5nLmtleSkgfHwgKGUua2V5ID09PSBiaW5kaW5nLmtleSkpICYmXG5cdFx0XHRcdFx0KCEhYmluZGluZy5zaGlmdEtleSA9PT0gZS5zaGlmdEtleSkgJiZcblx0XHRcdFx0XHQoISFiaW5kaW5nLmN0cmxLZXkgPT09IGUuY3RybEtleSlcblx0XHR9XG5cblx0XHR0aGlzLmVsZW1lbnQub24oJ2tleWRvd24ubGVwbGF5ZXIuaG90a2V5JywgKGUpID0+IHtcblx0XHRcdHRoaXMub3B0aW9ucy5rZXlCaW5kaW5nLmZvckVhY2goYmluZGluZyA9PiB7XG5cblx0XHRcdFx0aWYoaXNLZXlCaW5kaW5nKGUsIGJpbmRpbmcpKSB7XG5cdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdGJpbmRpbmcuZm4odGhpcyk7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cblx0XHRcdH0pXG5cdFx0fSlcblx0fVxuXG5cdC8qKlxuXHQgKiBJbml0IHNlY3Rpb25zLCBnZXQgYWpheCBvciBqc29uIHdpdGggc2VjdGlvbnMgZGF0YSBhbmQgY3JlYXRlIFNlY3Rpb25zIG9iamVjdCBhbmQgYWRkZWQgdGhlbSB0byB0aGUgRE9NXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHQgKiBAcmV0dXJucyB7anFQcm9taXNlfSBqUXVlcnkgcHJvbWlzZVxuXHQgKi9cblx0X2luaXRTZWN0aW9ucygpIHtcblx0XHRjb25zdCBkZmQgPSAkLkRlZmVycmVkKCk7XG5cdFx0aWYgKHRoaXMub3B0aW9ucy5kYXRhID09IG51bGwpIHtcblx0XHRcdGRmZC5yZWplY3QobnVsbClcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5nZXRTZWN0aW9uRGF0YSgpLmRvbmUoc2VjdGlvbnMgPT4ge1xuXHRcdFx0XHRzZWN0aW9ucyA9IFsuLi5zZWN0aW9uc107XG5cblx0XHRcdFx0Y29uc3QgaXNTZWN0aW9uT3V0c2lkZSA9ICh0aGlzLnNlY3Rpb25zQ29udGFpbmVyICYmIHRoaXMuc2VjdGlvbnNDb250YWluZXIubGVuZ3RoID4gMCk7XG5cblx0XHRcdFx0aWYgKHNlY3Rpb25zID09IG51bGwgfHwgc2VjdGlvbnMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0ZGZkLnJlamVjdChudWxsKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRzZWN0aW9ucyA9IHRoaXMuX2NvbXBsZXRlU2VjdGlvbnMoc2VjdGlvbnMpO1xuXG5cdFx0XHRcdHRoaXMuc2VjdGlvbnMgPSBuZXcgU2VjdGlvbnModGhpcywge1xuXHRcdFx0XHRcdGl0ZW1zIDogc2VjdGlvbnMsXG5cdFx0XHRcdFx0ZnVsbHNjcmVlbk9ubHkgOiBpc1NlY3Rpb25PdXRzaWRlLFxuXHRcdFx0XHRcdGhpZGVTY3JvbGwgOiB0cnVlXG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdHRoaXMuaW5uZXJFbGVtZW50LmFwcGVuZCh0aGlzLnNlY3Rpb25zLmVsZW1lbnQpO1xuXG5cdFx0XHRcdGlmIChpc1NlY3Rpb25PdXRzaWRlKSB7XG5cdFx0XHRcdFx0dGhpcy5vdXRzaWRlU2VjdGlvbnMgPSBuZXcgU2VjdGlvbnModGhpcywge1xuXHRcdFx0XHRcdFx0aXRlbXMgOiBzZWN0aW9uc1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdHRoaXMuc2VjdGlvbnNDb250YWluZXIuYXBwZW5kKHRoaXMub3V0c2lkZVNlY3Rpb25zLmVsZW1lbnQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGRmZC5yZXNvbHZlKHsgaXRlbXMgOiBzZWN0aW9ucyB9KTtcblx0XHRcdH0pXG5cdFx0fVxuXG5cdFx0cmV0dXJuIGRmZC5wcm9taXNlKClcblx0fVxuXG5cdC8qKlxuXHQgKiBGdW5jdGlvbiwgdGhhbiBpbml0IGFsbCBwbHVnaW5zIGZyb20gcGxheWVyIG9wdGlvbnMuXG5cdCAqIElmIHBsdWdpbiBkb2Vzbid0IGV4aXN0IHRocm93IGFuIGVycm9yXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHQgKiBAcmV0dXJucyB7UGxheWVyfSB0aGlzXG5cdCAqL1xuXHRfaW5pdFBsdWdpbnMoKSB7XG5cdFx0aWYgKHRoaXMub3B0aW9ucy5wbHVnaW5zKSB7XG5cdFx0XHRmb3IgKGNvbnN0IG5hbWUgaW4gdGhpcy5vcHRpb25zLnBsdWdpbnMpIHtcblx0XHRcdFx0aWYoIXRoaXMub3B0aW9ucy5wbHVnaW5zLmhhc093blByb3BlcnR5KG5hbWUpKSByZXR1cm47XG5cdFx0XHRcdGNvbnN0IHBsdWdpbk9wdGlvbnMgPSB0aGlzLm9wdGlvbnMucGx1Z2luc1tuYW1lXTtcblx0XHRcdFx0aWYodGhpc1tuYW1lXSkge1xuXHRcdFx0XHRcdGlmKHBsdWdpbk9wdGlvbnMpIHtcblx0XHRcdFx0XHRcdHRoaXNbbmFtZV0ocGx1Z2luT3B0aW9ucyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoYFBsdWdpbiAnJHtuYW1lfScgZG9lc24ndCBleGlzdGApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBAYWNjZXNzIHByaXZhdGVcblx0ICovXG5cdF9saXN0ZW5Vc2VyQWN0aXZpdHkoKSB7XG5cdFx0bGV0IG1vdXNlSW5Qcm9ncmVzcztcblx0XHRsZXQgbGFzdE1vdmVYO1xuXHRcdGxldCBsYXN0TW92ZVk7XG5cblx0XHRjb25zdCBvbk1vdXNlTW92ZSA9IChlKSA9PiB7XG5cdFx0XHRpZihlLnNjcmVlblggIT09IGxhc3RNb3ZlWCB8fCBlLnNjcmVlblkgIT09IGxhc3RNb3ZlWSkge1xuXHRcdFx0XHRsYXN0TW92ZVggPSBlLnNjcmVlblg7XG5cdFx0XHRcdGxhc3RNb3ZlWSA9IGUuc2NyZWVuWTtcblx0XHRcdFx0dGhpcy5fdXNlckFjdGl2aXR5ID0gdHJ1ZVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGNvbnN0IG9uTW91c2VEb3duID0gKGUpID0+IHtcblx0XHRcdHRoaXMuX3VzZXJBY3Rpdml0eSA9IHRydWVcblxuXHRcdFx0Ly8gV2hpbGUgdXNlciBpcyBwcmVzc2luZyBtb3VzZSBvciB0b3VjaCwgZGlzcGF0Y2ggdXNlciBhY3Rpdml0eVxuXHRcdFx0Y2xlYXJJbnRlcnZhbChtb3VzZUluUHJvZ3Jlc3MpO1xuXG5cdFx0XHRtb3VzZUluUHJvZ3Jlc3MgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG5cdFx0XHRcdHRoaXMuX3VzZXJBY3Rpdml0eSA9IHRydWVcblx0XHRcdH0sIDI1MCk7XG5cdFx0fVxuXG5cdFx0Y29uc3Qgb25Nb3VzZVVwID0gKGUpID0+IHtcblx0XHRcdHRoaXMuX3VzZXJBY3Rpdml0eSA9IHRydWVcblx0XHRcdGNsZWFySW50ZXJ2YWwobW91c2VJblByb2dyZXNzKTtcblx0XHR9XG5cblx0XHR0aGlzLmVsZW1lbnQub24oJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcblxuXHRcdHRoaXMuZWxlbWVudC5vbignbW91c2Vkb3duJywgb25Nb3VzZURvd24pO1xuXG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdtb3VzZXVwJywgb25Nb3VzZVVwKTtcblxuXHRcdHRoaXMuZWxlbWVudC5vbigna2V5ZG93bicsIChlKSA9PiB0aGlzLl91c2VyQWN0aXZpdHkgPSB0cnVlKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ2tleXVwJywgKGUpID0+IHRoaXMuX3VzZXJBY3Rpdml0eSA9IHRydWUpO1xuXG5cdFx0Ly8gU2VlIGh0dHA6Ly9lam9obi5vcmcvYmxvZy9sZWFybmluZy1mcm9tLXR3aXR0ZXIvXG5cdFx0bGV0IGluYWN0aXZpdHlUaW1lb3V0O1xuXHRcdGNvbnN0IGRlbGF5ID0gdGhpcy5vcHRpb25zLmlubmFjdGl2aXR5VGltZW91dDtcblx0XHRzZXRJbnRlcnZhbCgoKSA9PiB7XG5cdFx0XHRpZiAodGhpcy5fdXNlckFjdGl2aXR5KSB7XG5cblx0XHRcdFx0Ly8gUmVzZXQgdXNlciBhY3RpdnV0eSB0cmFja2VyXG5cdFx0XHRcdHRoaXMuX3VzZXJBY3Rpdml0eSA9IGZhbHNlO1xuXG5cdFx0XHRcdHRoaXMudXNlckFjdGl2ZSA9IHRydWU7XG5cblx0XHRcdFx0Y2xlYXJUaW1lb3V0KGluYWN0aXZpdHlUaW1lb3V0KTtcblxuXHRcdFx0XHRpZiAoZGVsYXkgPiAwKSB7XG5cblx0XHRcdFx0XHRpbmFjdGl2aXR5VGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKCF0aGlzLl91c2VyQWN0aXZpdHkpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy51c2VyQWN0aXZlID0gZmFsc2U7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSwgZGVsYXkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSwgMjUwKVxuXHR9XG5cblx0LyoqXG5cdCAqIFN0b3Agc2hvd2luZyBzcGlubmVyIGFuZCBjbGVhciBkZWxheSBvZiBzaG93aW5nIHNwaW5uZXJcblx0ICpcblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqL1xuXHRfc3RvcFdheXRpbmcoKSB7XG5cdFx0dGhpcy5fd2FpdGluZ1RpbWVvdXRzLmZvckVhY2goaXRlbSA9PiBjbGVhclRpbWVvdXQoaXRlbSkpO1xuXHRcdHRoaXMuX3dhaXRpbmdUaW1lb3V0cyA9IFtdO1xuXHRcdHRoaXMucmVtb3ZlQ2xhc3MoJ2xlcGxheWVyLS13YWl0aW5nJyk7XG5cdH1cblxuXHQvKipcblx0ICogU2hvdyBzcGlubmVyIHdpdGggZGVsYXkgaW4gMzAwbXNcblx0ICpcblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqL1xuXHRfc3RhcnRXYWl0aW5nKCkge1xuXHRcdHRoaXMuX3dhaXRpbmdUaW1lb3V0cy5wdXNoKHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0dGhpcy5hZGRDbGFzcygnbGVwbGF5ZXItLXdhaXRpbmcnKTtcblx0XHR9LCAzMDApKTtcblx0fVxuXG5cblx0LyoqXG5cdCAqIE9uIGluaXRlZCBwbGF5ZXIgZXZlbnQgaGFuZGxlclxuXHQgKlxuXHQgKiBAYWNjZXNzIHByaXZhdGVcblx0ICogQHBhcmFtIHtQbGF5ZXJFdmVudH0gZVxuXHQgKi9cblx0X29uSW5pdGVkKGUpIHtcblx0XHR0aGlzLmFkZENsYXNzKCdsZXBsYXllci0taW5pdGVkJyk7XG5cblx0XHR0aGlzLm9wdGlvbnMub25QbGF5ZXJJbml0ZWQuY2FsbCh0aGlzLCBlKTtcblx0fVxuXG5cblx0LyoqXG5cdCAqIE9uIGNsaWNrIHZpZGVvIGV2ZW50IGhhbmRsZXIuIEZvY3VzIG9uIHZpZGVvIGFuZCB0b2dnbGVQbGF5XG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge1BsYXllckV2ZW50fSBlXG5cdCAqL1xuXHRfb25DbGljayhlKSB7XG5cdFx0Y2xlYXJUaW1lb3V0KHRoaXMuX2RibGNsaWNrVGltZW91dCk7XG5cdFx0Y29uc3QgdG9nZ2xlUGxheSA9ICgpID0+IHtcblx0XHRcdHRoaXMuX2RibGNsaWNrVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLnZpZGVvLmVsZW1lbnQuZm9jdXMoKVxuXHRcdFx0XHR0aGlzLnRvZ2dsZVBsYXkoKTtcblxuXHRcdFx0fSwgMzAwKTtcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBTZWUgTFBMUi0yOTBcblx0XHQgKiBPbiB0b3VjaCBkZXZpY2VzIGluIGZ1bGxzY3JlZW4gaWYgdXNlciBub3QgYWN0aXZlIHdlIGRvbid0IHNob3VsZCB0b2dnbGVcblx0XHQgKiBBdCBmaXJzdCB3ZSBzaG93IGhpbSBhIGNvbnRyb2xzXG5cdFx0ICovXG5cdFx0aWYoSVNfVE9VQ0goKSAmJiB0aGlzLnZpZXcgPT09ICdmdWxsc2NyZWVuJykge1xuXHRcdFx0aWYodGhpcy5wbGF5ZXIudXNlckFjdGl2ZSkge1xuXHRcdFx0XHR0b2dnbGVQbGF5KClcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dG9nZ2xlUGxheSgpXG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIE9uIGRibGNsaWNrIG9uIHRoZSB2aWRlbyBwbGF5ZXIgZXZlbnQgaGFuZGxlclxuXHQgKlxuXHQgKiBAYWNjZXNzIHByaXZhdGVcblx0ICogQHBhcmFtIHtQbGF5ZXJFdmVudH0gZVxuXHQgKi9cblx0X29uRGJjbGljayhlKSB7XG5cdFx0Y2xlYXJUaW1lb3V0KHRoaXMuX2RibGNsaWNrVGltZW91dCk7XG5cdFx0dGhpcy50b2dnbGVGdWxsc2NyZWVuKCk7XG5cdH1cblxuXHQvKipcblx0ICogT24gZnVsbHNjcmVlbiBjaGFuZ2UgcGxheWVyIGV2ZW50IGhhbmRsZXJcblx0ICpcblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqIEBwYXJhbSB7UGxheWVyRXZlbnR9IGVcblx0ICovXG5cdF9vbkZ1bGxzY3JlZW5DaGFuZ2UoZSwgaXNGcykge1xuXHRcdGlmKGlzRnMpIHtcblx0XHRcdHRoaXMudmlldyA9ICdmdWxsc2NyZWVuJztcblxuXHRcdFx0Ly8gSGlkZSBzZWN0aW9ucyBieSBkZWZhdWx0IG9uIG1vYmlsZSBmdWxsc2NyZWVuXG5cdFx0XHRpZihJU19BTkRST0lEKSB7XG5cdFx0XHRcdHRoaXMuX2xhc3RTZWN0aW9uc1ZhbHVlID0gdGhpcy5zZWN0aW9ucy52aXNpYmxlO1xuXHRcdFx0XHR0aGlzLnNlY3Rpb25zLnZpc2libGUgPSBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5mb2N1cygpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnZpZXcgPSAnY29tbW9uJztcblxuXHRcdFx0aWYoSVNfQU5EUk9JRCkge1xuXHRcdFx0XHR0aGlzLnNlY3Rpb25zLnZpc2libGUgPSB0aGlzLl9sYXN0U2VjdGlvbnNWYWx1ZTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gUGF1c2UgdmlkZW8gb24gZXhpdCBmdWxsc2NyZWVlbiBvbiBtb2JpbGVcblx0XHRcdGlmKElTX0FORFJPSURfUEhPTkUgfHwgSVNfSVBIT05FIHx8IElTX0lQT0QpIHtcblx0XHRcdFx0dGhpcy5wYXVzZSgpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cblx0LyoqXG5cdCAqIE9uIHBsYXkgZXZlbnQgaGFuZGxlclxuXHQgKlxuXHQgKiBAYWNjZXNzIHByaXZhdGVcblx0ICogQHBhcmFtIHtQbGF5ZXJFdmVudH0gZVxuXHQgKi9cblx0X29uUGxheSgpIHtcblx0XHR0aGlzLnNwbGFzaEljb24uc2hvdygncGxheScpO1xuXHR9XG5cblx0LyoqXG5cdCAqIE9uIHBhdXNlIHBsYXllciBldmVudCBoYW5kbGVyXG5cdCAqIFNob3cgcGF1c2UgaWNvbiBpbiB0aGUgY2VudGVyIG9mIHZpZGVvXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHQgKi9cblx0X29uUGF1c2UoKSB7XG5cdFx0dGhpcy5zcGxhc2hJY29uLnNob3coJ3BhdXNlJyk7XG5cdH1cblxuXHRfb25FbnRpdHlGdWxsc2NyZW5DaGFuZ2UoKSB7XG5cdFx0Y29uc3QgZnNBcGkgPSBGdWxsc2NyZWVuQXBpO1xuXHRcdGNvbnN0IGlzRnMgPSAhIWRvY3VtZW50W2ZzQXBpLmZ1bGxzY3JlZW5FbGVtZW50XTtcblx0XHR0aGlzLnRyaWdnZXIoJ2Z1bGxzY3JlZW5jaGFuZ2UnLCBpc0ZzKTtcblx0fVxuXG59XG5cbi8qKlxuICogU3RhdGljIGhlbHBlciBmb3IgY3JlYXRpbmcgYSBwbHVnaW5zIGZvciBsZXBsYXllclxuICpcbiAqIEBhY2Nlc3MgcHVibGljXG4gKiBAc3RhdGljXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiBwbHVnaW5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFBsdWdpbiBpbml0IGZ1bmN0aW9uXG4gKlxuICogQGV4YW1wbGVcbiAqIFBsYXllci5wbHVnaW4oJ2hlbGxvV29ybGQnLCBmdW5jdGlvbihwbHVnaW5PcHRpb25zKSB7XG4gKiAgICBjb25zdCBwbGF5ZXIgPSB0aGlzO1xuICogICAgcGxheWVyLm9uKCdjbGljaycsICgpID0+IGNvbnNvbGUubG9nKCdIZWxsbyB3b3JsZCcpKTtcbiAqIH0pXG4gKlxuICovXG5QbGF5ZXIucGx1Z2luID0gZnVuY3Rpb24obmFtZSwgZm4pIHtcblx0UGxheWVyLnByb3RvdHlwZVtuYW1lXSA9IGZuO1xufVxuXG4vKipcbiAqIEdldCBieSBuYW1lIHJlZ2lzdGVyZWQgY29tcG9uZW50XG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgLSBOYW1lIG9mIGNvbXBvbmVudFxuICogQHJldHVybiB7Q29tcG9uZW50fVxuICovXG5QbGF5ZXIuZ2V0Q29tcG9uZW50ID0gQ29tcG9uZW50LmdldENvbXBvbmVudDtcblxuLyoqXG4gKiBSZWdpc3RlciBjb21wb25lbnRcbiAqXG4gKiBAYWNjZXNzIHB1YmxpY1xuICogQHN0YXRpY1xuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7Q29tcG9uZW50fSBjb21wb25lbnRcbiAqXG4gKiBAZXhhbXBsZVxuICogUGxheWVyLnJlZ2lzdGVyQ29tcG9uZW50KCdFcnJvckRpc3BsYXknLCBFcnJvckRpc3BsYXkpO1xuICovXG5QbGF5ZXIucmVnaXN0ZXJDb21wb25lbnQgPSBDb21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQ7XG5cbi8qKlxuICogUmVnaXN0ZXIgY29udHJvbFxuICpcbiAqIEBhY2Nlc3MgcHVibGljXG4gKiBAc3RhdGljXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtDb250cm9sfSBjb250cm9sXG4gKi9cblBsYXllci5nZXRDb250cm9sID0gQ29udHJvbC5nZXRDb250cm9sO1xuXG4vKipcbiAqIEdldCBieSBuYW1lIHJlZ2lzdGVyZWQgY29udHJvbFxuICpcbiAqIEBhY2Nlc3MgcHVibGljXG4gKiBAc3RhdGljXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHJldHVybnMge0NvbnRyb2x9XG4gKlxuICogQGV4YW1wbGVcbiAqIFBsYXllci5yZWdpc3RlckNvbnRyb2woJ2JhY2t3YXJkJywgQmFja3dhcmRDb250cm9sKTtcbiAqL1xuUGxheWVyLnJlZ2lzdGVyQ29udHJvbCA9IENvbnRyb2wucmVnaXN0ZXJDb250cm9sO1xuXG5cbi8qKlxuICogQ29udmVydCBzZWNvbmRzIHRvIGZvcm1hdCBzdHJpbmcgJ2hoPzptbTpzcydcbiAqXG4gKiBAYWNjZXNzIHB1YmxpY1xuICogQHBhcmFtIHtOdW1iZXJ9IHNlY29uZHMgU2Vjb25kc1xuICogQHBhcmFtIHtCb29sZWFufSBzaG93SG91cnMgY29udmVydCB0byBmb3JtYXQgJ2hoOm1tOnNzJ1xuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xuUGxheWVyLnNlY29uZHNUb1RpbWUgPSBzZWNvbmRzVG9UaW1lO1xuXG5cbi8qKlxuICogU3RhdGljIGhlbHBlciBmb3IgY3JlYXRpbmcgYSBwbHVnaW5zIGZvciBsZXBsYXllclxuICpcbiAqIEBhY2Nlc3MgcHVibGljXG4gKiBAc3RhdGljXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiBwbHVnaW5cbiAqIEBwYXJhbSB7RnVuY3Rpb258T2JqZWN0fSBmbiBQbHVnaW4gaW5pdCBmdW5jdGlvblxuICpcbiAqIEBleGFtcGxlXG4gKiBQbGF5ZXIucHJlc2V0KCdjb21tb24nLCB7XG4gKiAgICAgd2lkdGggOiAnMTAwJScsXG4gKiAgICAgcGx1Z2lucyA6IHtcbiAqICAgICAgICAgbWluaXBsYXllciA6IHRydWVcbiAqICAgICB9XG4gKiB9KTtcbiAqL1xuUGxheWVyLnByZXNldCA9IGZ1bmN0aW9uKG5hbWUsIG9iaikge1xuXHRpZih0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jykge1xuXHRcdFBsYXllci5fcHJlc2V0c1tuYW1lXSA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRvcHRpb25zIDoge30sXG5cdFx0XHRpbml0T3B0aW9ucyA6IG5vb3Bcblx0XHR9LCBvYmopO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvYmogPT09ICdmdW5jdGlvbicpIHtcblx0XHRQbGF5ZXIuX3ByZXNldHNbbmFtZV0gPSBvYmooKTtcblx0fVxufTtcblxuXG5QbGF5ZXIuZ2V0UHJlc2V0ID0gZnVuY3Rpb24obmFtZSkge1xuXHRpZihQbGF5ZXIuX3ByZXNldHNbbmFtZV0pIHtcblx0XHRyZXR1cm4gUGxheWVyLl9wcmVzZXRzW25hbWVdO1xuXHR9IGVsc2Uge1xuXHRcdGNvbnNvbGUuZXJyb3IoYHByZXNldCAke25hbWV9IGRvZXNuJ3QgZXhpc3RgKTtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxufVxuXG5cblBsYXllci5fcHJlc2V0cyA9IHt9O1xuXG5QbGF5ZXIuQ29va2llID0gQ29va2llO1xuXG5QbGF5ZXIuX2xvYWRTVkdTcHJpdGUgPSBmdW5jdGlvbihzdmcpIHtcblx0Y29uc3QgaGlkZGVuRWxlbWVudCA9ICQoJzxkaXYvPicpLmhpZGUoKTtcblx0JCgnYm9keScpLnByZXBlbmQoaGlkZGVuRWxlbWVudC5hcHBlbmQoc3ZnKSk7XG5cdHJldHVybiBoaWRkZW5FbGVtZW50O1xufVxuXG5QbGF5ZXIuZGVmYXVsdFNwcml0ZSA9IHJlcXVpcmUoJy4uLy4uL2Rpc3Qvc3ZnL3N2Zy1kZWZzLnN2ZycpO1xuXG4vKiBnbG9iYWwgVkVSU0lPTiAqL1xuUGxheWVyLnZlcnNpb24gPSBWRVJTSU9OO1xuXG53aW5kb3cuJC5mbi5sZVBsYXllciA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cdHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBuZXcgUGxheWVyKCQodGhpcyksIG9wdGlvbnMpO1xuXHR9KTtcbn07XG5cbndpbmRvdy4kLmxlUGxheWVyID0gUGxheWVyO1xuXG53aW5kb3cubGVQbGF5ZXIgPSBQbGF5ZXI7XG5cblxuLyoqXG4gKiBNaW5pIFBsYXllciBwbHVnaW5cbiAqXG4gKiBAcGx1Z2luXG4gKi9cblBsYXllci5wbHVnaW4oJ21pbmlwbGF5ZXInLCBmdW5jdGlvbihwbHVnaW5PcHRpb25zKSB7XG5cdGNvbnN0IHBsYXllciA9IHRoaXM7XG5cblx0Ly8g0JzQtdGA0LbQuNC8INGBIHRoaXMub3B0aW9ucy5taW5pcGxheWVyLCDRh9GC0L7QsdGLINC90LUg0YHQu9C+0LzQsNGC0Ywg0L7QsdGA0LDRgtC90YPRjiDRgdC+0LLQvNC10YHRgtC40LzQvtGB0YwsINGC0LDQuiDQutCw0Log0YDQsNC90YzRiNC1XG5cdC8vINC80LjQvdC40L/Qu9C10LXRgCDQvdC1INCx0YvQuyDQv9C70LDQs9C40L3QvtC8INC/0LvQtdC10YDQsC5cblx0Y29uc3Qgb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0d2lkdGggOiAnMTAwJScsXG5cdFx0b2Zmc2V0U2hvdyA6IChwbGF5ZXIpID0+IHtcblx0XHRcdGNvbnN0IG9mZnNldCA9IHBsYXllci5lbGVtZW50Lm9mZnNldCgpLnRvcFxuXHRcdFx0XHQrIHBsYXllci5lbGVtZW50Lm91dGVySGVpZ2h0KClcblx0XHRcdFx0LSBwbGF5ZXIuZ2V0Q29udHJvbHMoJ2NvbW1vbicpLmVsZW1lbnQuaGVpZ2h0KCk7XG5cblx0XHRcdHJldHVybiBvZmZzZXQ7XG5cdFx0fVxuXHR9LCB0aGlzLm9wdGlvbnMubWluaXBsYXllciwgcGx1Z2luT3B0aW9ucyk7XG5cblx0Y29uc3QgY29udHJvbHMgPSBuZXcgQ29udHJvbENvbGxlY3Rpb24odGhpcywge1xuXHRcdG5hbWUgOiAnbWluaScsXG5cdFx0Y29udHJvbHMgOiBvcHRpb25zLmNvbnRyb2xzLFxuXHRcdGNvbnRyb2xPcHRpb25zIDoge1xuXHRcdFx0Y29udHJvbCA6IHtcblx0XHRcdFx0ZGlzYWJsZSA6IGZhbHNlXG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblxuXHQvLyDQktGB0YLQsNCy0LvRj9C10Lwg0LIgaW5mb0VsZW1lbnQg0L/QvtC0IHRpdGxlINC4IGRlc2NyaXB0aW9uXG5cdHRoaXMuaW5mb0VsZW1lbnQuYXBwZW5kKGNvbnRyb2xzLmVsZW1lbnQpO1xuXG5cdC8qKlxuXHQgKiBSZXR1cm4gb2Zmc2V0IG9uIG9ZICwgd2hlbiBtaW5pcGxheWVyIHNob3VsZCBzaG93aW5nIG9yIGhpZGluZ1xuXHQgKlxuXHQgKiBAcmV0dXJucyB7TnVtYmVyfVxuXHQgKi9cblx0Y29uc3Qgb2Zmc2V0U2hvdyA9ICgpID0+IHtcblx0XHRpZiAoJC5pc0Z1bmN0aW9uKG9wdGlvbnMub2Zmc2V0U2hvdykpIHtcblx0XHRcdHJldHVybiBvcHRpb25zLm9mZnNldFNob3cocGxheWVyKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gb3B0aW9ucy5vZmZzZXRTaG93XG5cdH1cblxuXHRjb25zdCBnZXRXaWR0aCA9ICgpID0+IHtcblx0XHRyZXR1cm4gb3B0aW9ucy53aWR0aCB8fCB0aGlzLmVsZW1lbnQud2lkdGgoKTtcblx0fVxuXG5cblx0dGhpcy5fdXBkYXRlTWluaVBsYXllciA9IChlLCBmb3JjZSkgPT4ge1xuXHRcdGNvbnN0IHNjcm9sbFRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcblxuXHRcdC8vIEJlY2F1c2UgaW4gZm9yY2UgdXBkYXRlLCBmb3Igbm9ybWFsbHkgY291bnQgaGVpZ2h0IGFuZCBwYWRkaW5nXG5cdFx0Ly8gbWluaXBsYXllciBiZWZvcmUgdGhlIHNob3cgbXVzdCBmaXJzdCBiZSBoaWRkZW5cblx0XHRpZihmb3JjZSkge1xuXHRcdFx0dGhpcy5oaWRlTWluaVBsYXllcihmb3JjZSk7XG5cdFx0fVxuXG5cdFx0aWYoc2Nyb2xsVG9wID4gb2Zmc2V0U2hvdygpKSB7XG5cdFx0XHR0aGlzLnNob3dNaW5pUGxheWVyKGZvcmNlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5oaWRlTWluaVBsYXllcigpO1xuXHRcdH1cblx0fVxuXG5cdHRoaXMuc2hvd01pbmlQbGF5ZXIgPSAoZm9yY2UpID0+IHtcblx0XHRpZiAoIWZvcmNlICYmIHRoaXMudmlldyA9PT0gJ21pbmknKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gQWRkZWQgZW1wdHkgc3BhY2Vcblx0XHR0aGlzLmVsZW1lbnQuY3NzKCdwYWRkaW5nLXRvcCcsIHRoaXMudmlkZW9Db250YWluZXIuaGVpZ2h0KCkpO1xuXG5cdFx0dGhpcy52aWV3ID0nbWluaSc7XG5cdH1cblxuXHR0aGlzLmhpZGVNaW5pUGxheWVyID0gKGZvcmNlKSA9PiB7XG5cdFx0aWYoIWZvcmNlICYmIHRoaXMudmlldyAhPT0gJ21pbmknKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMudmlldyA9ICdjb21tb24nO1xuXHR9XG5cblx0JCh3aW5kb3cpLm9uKCdzY3JvbGwnLCB0aGlzLl91cGRhdGVNaW5pUGxheWVyLmJpbmQodGhpcykpO1xuXHQkKHdpbmRvdykub24oJ3Jlc2l6ZScsIHRoaXMuX3VwZGF0ZU1pbmlQbGF5ZXIuYmluZCh0aGlzKSk7XG5cdHRoaXMub24oJ2luaXRlZCcsIChlKSA9PiB0aGlzLl91cGRhdGVNaW5pUGxheWVyKGUsIHRydWUpKTtcblxuXHR0aGlzLm9uU2V0VmlldygnbWluaScsICgpID0+IHtcblx0XHR0aGlzLmlubmVyRWxlbWVudC5jc3MoJ21heC13aWR0aCcsIGdldFdpZHRoKCkpO1xuXHRcdHRoaXMuaW5uZXJFbGVtZW50LmNzcygnaGVpZ2h0JywgdGhpcy52aWRlby5oZWlnaHQpO1xuXHR9KTtcblxuXHR0aGlzLm9uRGVsVmlldygnbWluaScsICgpID0+IHtcblx0XHR0aGlzLmlubmVyRWxlbWVudC5jc3MoJ21heC13aWR0aCcsICcnKVxuXHRcdHRoaXMuaW5uZXJFbGVtZW50LmNzcygnaGVpZ2h0JywgJycpXG5cblx0XHR0aGlzLmVsZW1lbnQuY3NzKCdwYWRkaW5nLXRvcCcsICcnKTtcblx0fSk7XG5cblxuXHR0aGlzLl91cGRhdGVNaW5pUGxheWVyKCk7XG59KTtcblxuXG5QbGF5ZXIucHJlc2V0KCd2cHMnLCByZXF1aXJlKCcuL3ByZXNldHMvdnBzLmpzJykucHJlc2V0KTtcblBsYXllci5wcmVzZXQoJ3NpbXBsZScsIHJlcXVpcmUoJy4vcHJlc2V0cy9zaW1wbGUuanMnKS5wcmVzZXQpO1xuUGxheWVyLnByZXNldCgnc21zJywgcmVxdWlyZSgnLi9wcmVzZXRzL3Ntcy5qcycpLnByZXNldCk7XG5QbGF5ZXIucHJlc2V0KCdjb21wcmVzc2VkJywgcmVxdWlyZSgnLi9wcmVzZXRzL2NvbXByZXNzZWQuanMnKS5wcmVzZXQpO1xuUGxheWVyLnByZXNldCgnMjAzNScsIHJlcXVpcmUoJy4vcHJlc2V0cy8yMDM1LmpzJykucHJlc2V0KTtcblxubW9kdWxlLmV4cG9ydHMgPSBQbGF5ZXJcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvbGUtcGxheWVyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSAkO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiJFwiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgQ29udHJvbC5qc1xuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCBJY29uIGZyb20gJy4vSWNvbic7XG5cbi8qKlxuICogQGNsYXNzIENvbnRyb2xcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gQ29udHJvbCdzIG9wdGlvbnNcbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5pY29uTmFtZV0gTmFtZSBvZiBjb250cm9sJ3MgaWNvbi4gSWYgZW1wdHksIGNvbnRyb2wgd2lsbCBub3QgaGF2ZSBhIGljb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5jbGFzc05hbWVdXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMubmFtZV1cbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5jb2xsZWN0aW9uXVxuICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLnRpdGxlXSBDb250b3JsJ3MgdG9vbHRpcCwgdGl0bGUgYXR0clxuICogQHBhcmFtIHtGdW5jdGlvbn0gW29wdGlvbnMub25DbGlja10gT24gY2xpY2sgZXZlbnQgaGFuZGxlclxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5kaXNhYmxlPWZhbHNlXVxuICogQHByb3BlcnR5IHtJY29ufSBpY29uIEljb24gaW4gY29udHJvbCwgaWYgaXQgaXMgZXhpc3RcbiAqIEBleHRlbmRzIENvbXBvbmVudFxuICovXG5jbGFzcyBDb250cm9sIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXHRcdHRoaXMuZW1pdFRhcEV2ZW50cygpO1xuXHRcdHRoaXMuZGlzYWJsZSA9IHRoaXMub3B0aW9ucy5kaXNhYmxlICE9IG51bGw/IHRoaXMub3B0aW9ucy5kaXNhYmxlIDogdHJ1ZTtcblxuXHRcdHRoaXMucGxheWVyLm9uKCdpbml0ZWQnLCAoZSkgPT4ge1xuXHRcdFx0dGhpcy5kaXNhYmxlID0gdGhpcy5vcHRpb25zLmRpc2FibGUgIT0gbnVsbD8gdGhpcy5vcHRpb25zLmRpc2FibGUgOiBmYWxzZTtcblx0XHR9KVxuXG5cdFx0dGhpcy5lbGVtZW50Lm9uKHtcblx0XHRcdGNsaWNrIDogdGhpcy5vbkNsaWNrLmJpbmQodGhpcyksXG5cdFx0XHR0YXAgOiB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKSxcblx0XHR9KTtcblxuXHRcdHRoaXMucGxheWVyLm9uKCdpbml0ZWQnLCB0aGlzLm9uUGxheWVySW5pdGVkLmJpbmQodGhpcykpXG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdGlmICh0aGlzLm9wdGlvbnMuaWNvbk5hbWUpIHtcblx0XHRcdHRoaXMuaWNvbiA9IG5ldyBJY29uKHRoaXMucGxheWVyLCB7XG5cdFx0XHRcdGljb25OYW1lIDogdGhpcy5vcHRpb25zLmljb25OYW1lXG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0bGV0IGF0dHJzID0ge1xuXHRcdFx0dGl0bGUgOiB0aGlzLm9wdGlvbnMudGl0bGVcblx0XHR9XG5cdFx0dGhpcy5lbGVtZW50ID0gJChgPCR7dGhpcy5vcHRpb25zLnRhZyB8fCAnYnV0dG9uJ30gLz5gKVxuXHRcdFx0LmFkZENsYXNzKHRoaXMuYnVpbGRDU1NDbGFzcygpKVxuXHRcdFx0LmFwcGVuZCh0aGlzLmljb24gJiYgdGhpcy5pY29uLmVsZW1lbnQpXG5cdFx0XHQuYXR0cihhdHRycyk7XG5cblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50O1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0YnVpbGRDU1NDbGFzcygpIHtcblx0XHRsZXQgcmVzdWx0ID0gYGNvbnRyb2wgJHt0aGlzLm9wdGlvbnMuY2xhc3NOYW1lfSAke3N1cGVyLmJ1aWxkQ1NTQ2xhc3MoKX1gO1xuXHRcdC8qKlxuXHRcdCAqIEBzZWUgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjM4ODUyNTUvaG93LXRvLXJlbW92ZS1pZ25vcmUtaG92ZXItY3NzLXN0eWxlLW9uLXRvdWNoLWRldmljZXNcblx0XHQgKiBXZSBzaG91bGQgaWdub3JlIGhvdmVyIGVmZmV0Y3Mgb24gaXBob25lLCBiZWNhdXNlIHdlIHNob3cgaG92ZXIgZWZmZWN0IG9uIHRhcFxuXHRcdCAqL1xuXHRcdGlmKCF0aGlzLnBsYXllci5oYXNDbGFzcygnbGVwbGF5ZXItLWlwaG9uZScpKSB7XG5cdFx0XHRyZXN1bHQgKz0gJyBjb250cm9sLS1uby1pcGhvbmUnO1xuXHRcdH1cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0c2V0IHRhcCh2YWx1ZSkge1xuXHRcdHRoaXMudG9nZ2xlQ2xhc3MoJ2NvbnRyb2wtLXRhcCcsIHZhbHVlKTtcblx0fVxuXG5cdHNldCBkaXNhYmxlKHZhbHVlKSB7XG5cdFx0dGhpcy5fZGlzYWJsZSA9IHZhbHVlO1xuXHRcdHRoaXMudG9nZ2xlQ2xhc3MoJ2Rpc2FibGVkJywgdmFsdWUpO1xuXHR9XG5cblx0Z2V0IGRpc2FibGUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2Rpc2FibGVcblx0fVxuXG5cdC8qKlxuXHQgKlxuXHQgKiBPbiBjbGljayBldmVudCBoYW5kbGVyXG5cdCAqIEBhYnN0YWN0XG5cdCAqL1xuXHRvbkNsaWNrIChlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGlmICh0aGlzLmRpc2FibGUpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0dGhpcy5wbGF5ZXIudHJpZ2dlcignY29udHJvbGNsaWNrJywgeyBjb250cm9sIDogdGhpcyB9KTtcblxuXHRcdGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdHRoaXMub3B0aW9ucy5vbkNsaWNrLmNhbGwodGhpcywgYXJndW1lbnRzKTtcblx0XHR9XG5cdH1cblxuXG5cdG9uUGxheWVySW5pdGVkIChlLCBkYXRhKSB7XG5cblx0fVxuXG5cdHN0YXRpYyByZWdpc3RlckNvbnRyb2wobmFtZSwgY29udHJvbCkge1xuXHRcdGlmKG5hbWUgPT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmKENvbnRyb2wuX2NvbnRyb2xzID09IG51bGwpIHtcblx0XHRcdENvbnRyb2wuX2NvbnRyb2xzID0ge307XG5cdFx0fVxuXG5cdFx0Q29udHJvbC5fY29udHJvbHNbbmFtZV0gPSBjb250cm9sO1xuXG5cdFx0cmV0dXJuIGNvbnRyb2w7XG5cdH1cblxuXHRzdGF0aWMgZ2V0Q29udHJvbChuYW1lKSB7XG5cdFx0aWYobmFtZSA9PSBudWxsKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYoQ29udHJvbC5fY29udHJvbHMgJiYgQ29udHJvbC5fY29udHJvbHNbbmFtZV0pIHtcblx0XHRcdHJldHVybiBDb250cm9sLl9jb250cm9sc1tuYW1lXTtcblx0XHR9XG5cdH1cblxuXHRzdGF0aWMgY3JlYXRlKHBsYXllciwgbmFtZSwgb3B0aW9ucykge1xuXHRcdHZhciBjb250cm9sQ2xhc3MgPSB0aGlzLmdldENvbnRyb2wobmFtZSk7XG5cdFx0aWYoY29udHJvbENsYXNzID09IG51bGwpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoYENvbnRyb2wgJHtuYW1lfSBkb2Vzbid0IGV4aXN0YCk7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHRyZXR1cm4gbmV3IGNvbnRyb2xDbGFzcyhwbGF5ZXIsIG9wdGlvbnMpO1xuXHR9XG5cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdDb250cm9sJywgQ29udHJvbCk7XG5Db250cm9sLnJlZ2lzdGVyQ29udHJvbCgnY29udHJvbCcsIENvbnRyb2wpO1xuZXhwb3J0IGRlZmF1bHQgQ29udHJvbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL0NvbnRyb2wuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIENvbXBvbmVudC5qc1xuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbmNvbnN0IHRvUGxheWVyRXZlbnQgPSAoZXZlbnRzKSA9PiBldmVudHMuc3BsaXQoJyAnKS5yZWR1Y2UoKGFjYywgZSkgPT4gYWNjICsgYGxlcGxheWVyXyR7ZX0gYCwgJycpO1xuXG4vKipcbiAqIFBsYXllciBjb21wb25lbnQgLSBCYXNlIGNsYXNzIGZvciBhbGwgVUlcbiAqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIE9wdGlvbnMgb2YgY29tcG9uZW50XG4gKiBAcGFyYW0ge2pRdWVyeX0gW29wdGlvbnMuZWxlbWVudF0g0K3Qu9C10LzQtdC90YIg0L3QsCDQutC+0YLQvtGA0L7QvCDQvNC+0LbQvdC+INC40L3QuNGG0LjQu9C40LfQvtCy0LDRgtGMINC60LvQsNGB0YEuXG4gKiBAcHJvcGVydHkge09iamVjdH0gb3B0aW9uc1xuICogQHByb3BlcnR5IHtqUXVlcnl9IGVsZW1lbnRcbiAqIEBjbGFzcyBDb21wb25lbnRcbiAqL1xuY2xhc3MgQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcblx0XHRvcHRpb25zID0gdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIHtcblx0XHRcdGNyZWF0ZUVsZW1lbnQgOiB0cnVlXG5cdFx0fSwgdGhpcy5vcHRpb25zLCBvcHRpb25zKTtcblxuXHRcdGlmKCFwbGF5ZXIgJiYgdGhpcy5wbGF5ICE9IG51bGwpIHtcblx0XHRcdHRoaXMucGxheWVyID0gcGxheWVyID0gdGhpcztcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XG5cdFx0fVxuXG5cdFx0aWYob3B0aW9ucy5jcmVhdGVFbGVtZW50KSB7XG5cblx0XHRcdGlmIChvcHRpb25zLmVsZW1lbnQpIHtcblx0XHRcdFx0dGhpcy5lbGVtZW50ID0gb3B0aW9ucy5lbGVtZW50O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5jcmVhdGVFbGVtZW50KCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0aGlzLmVsZW1lbnQubGVuZ3RoICE9PSAxKSB7XG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoYENvbXBvbmVudC5wcm90b3R5cGUuZWxlbWVudC5sZW5ndGggbXVzdCBlcXVhbCAxLCBub3QgJHt0aGlzLmVsZW1lbnQubGVuZ3RofVxcbmAsIHRoaXMuZWxlbWVudCk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuZWxlbWVudFswXS5fX25vZGUgPSB0aGlzO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBAYWJzdHJhY3Rcblx0ICovXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHQvKipcblx0ICogQGFic3RyYWN0XG5cdCAqL1xuXHRidWlsZENTU0NsYXNzKCkge1xuXHRcdHJldHVybiAnJ1xuXHR9XG5cblxuXHQvKipcblx0ICogU2V0IHRoZSBmb2N1cyB0byB0aGlzIGNvbXBvbmVudFxuXHQgKi9cblx0Zm9jdXMoKSB7XG5cdFx0dGhpcy5lbGVtZW50LmZvY3VzKCk7XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBSZW1vdmUgdGhlIGZvY3VzIGZyb20gdGhpcyBjb21wb25lbnRcblx0ICovXG5cdGJsdXIoKSB7XG5cdFx0dGhpcy5lbGVtZW50LmJsdXIoKTtcblx0fVxuXG5cblx0LyoqXG5cdCAqIEVtaXQgYSBwbGF5ZXIgZXZlbnQgKHRoZSBuYW1lIG9mIGV2ZW50IHdvdWxkIGJlIGEgbGVwbGF5ZXJfc210aClcblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50TmFtZVxuXHQgKiBAcGFyYW0ge0FyZ3VtZW50c30gLi4uYXJncyBqUXVlcnkuZm4ub24gb3RoZXIgYXJndW1lbnRzXG5cdCAqIEByZXR1cm5zIHtQbGF5ZXJ9IHRoaXNcblx0ICovXG5cdHRyaWdnZXIoZXZlbnROYW1lLCAuLi5hcmdzKSB7XG5cdFx0Y29uc3QgZXZlbnQgPSAkLkV2ZW50KGBsZXBsYXllcl8ke2V2ZW50TmFtZX1gLCB7IHBsYXllciA6IHRoaXMucGxheWVyIH0pO1xuXHRcdHRoaXMuZWxlbWVudC50cmlnZ2VySGFuZGxlcihldmVudCwgLi4uYXJncyk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBMaXN0ZW4gYSBwbGF5ZXIgZXZlbnQgd2l0aCBsZXBsYXllcl8gc3VmZml4XG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBldmVudE5hbWVcblx0ICogQHBhcmFtIHtBcmd1bWVudHN9IC4uLmFyZ3MgalF1ZXJ5LmZuLm9uIG90aGVyIGFyZ3VtZW50c1xuXHQgKiBAcmV0dXJucyB7UGxheWVyfSB0aGlzXG5cdCAqL1xuXHRvbihldmVudE5hbWVzLCAuLi5hcmdzKSB7XG5cdFx0aWYodHlwZW9mIGV2ZW50TmFtZXMgPT09ICdzdHJpbmcnIHx8IGV2ZW50TmFtZXMgaW5zdGFuY2VvZiBTdHJpbmcpIHtcblx0XHRcdHRoaXMuZWxlbWVudC5vbih0b1BsYXllckV2ZW50KGV2ZW50TmFtZXMpLCAuLi5hcmdzKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc29sZS53YXJuKCdGaXJzdCBhcmd1bWVudCBvZiBcXCdDb21wb25lbnQub25cXCcgc2hvdWxkIGJlIGEgc3RyaW5nJyk7XG5cdFx0XHR0aGlzLmVsZW1lbnQub24oZXZlbnROYW1lcywgLi4uYXJncyk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblxuXHRvbmUoZXZlbnROYW1lcywgLi4uYXJncykge1xuXHRcdGlmKHR5cGVvZiBldmVudE5hbWVzID09PSAnc3RyaW5nJyB8fCBldmVudE5hbWVzIGluc3RhbmNlb2YgU3RyaW5nKSB7XG5cdFx0XHR0aGlzLmVsZW1lbnQub25lKHRvUGxheWVyRXZlbnQoZXZlbnROYW1lcyksIC4uLmFyZ3MpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zb2xlLndhcm4oJ0ZpcnN0IGFyZ3VtZW50IG9mIFxcJ0NvbXBvbmVudC5vbmVcXCcgc2hvdWxkIGJlIGEgc3RyaW5nJyk7XG5cdFx0XHR0aGlzLmVsZW1lbnQub25lKGV2ZW50TmFtZXMsIC4uLmFyZ3MpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cblx0LyoqXG5cdCAqIEFkZCB0aGUgQ1NTIGNsYXNzIGZvciBnZW5lcmFsIGxlcGxheWVyIERPTSBlbGVtZW50XG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWUgTmFtZSBvZiBjbGFzcyAobm90IGEgc2VsZWN0b3IsIGl0J3MgbWVhbiwgdGhhdCBzdHJpbmcgc291bGQgYmUgd2l0aG91dCBwb2ludCBhdCB0aGUgc3RhcnQpXG5cdCAqIEByZXR1cm5zIHtQbGF5ZXJ9IHRoaXNcblx0ICovXG5cdGFkZENsYXNzKGNsYXNzTmFtZSkge1xuXHRcdHRoaXMuZWxlbWVudC5hZGRDbGFzcyhjbGFzc05hbWUpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlbW92ZSB0aGUgQ1NTIGNsYXNzIGZyb20gZ2VuZXJhbCBsZXBsYXllciBET00gZWxlbWVudFxuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIE5hbWUgb2YgY2xhc3Ncblx0ICogQHJldHVybnMge1BsYXllcn0gdGhpc1xuXHQgKi9cblx0cmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7XG5cdFx0dGhpcy5lbGVtZW50LnJlbW92ZUNsYXNzKGNsYXNzTmFtZSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvKipcblx0ICogVG9nZ2xlIHRoZSBDU1MgY2xhc3MgZnJvbSBnZW5lcmFsIGxlcGxheWVyIERPTSBlbGVtZW50XG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWVcblx0ICogQHBhcmFtIHtCb29sZWFufSBmbGFnXG5cdCAqIEByZXR1cm5zIHtQbGF5ZXJ9IHRoaXNcblx0ICovXG5cdHRvZ2dsZUNsYXNzKGNsYXNzTmFtZSwgZmxhZykge1xuXHRcdHRoaXMuZWxlbWVudC50b2dnbGVDbGFzcyhjbGFzc05hbWUsIGZsYWcpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0aGFzQ2xhc3MoY2xhc3NOYW1lKSB7XG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudC5oYXNDbGFzcyhjbGFzc05hbWUpO1xuXHR9XG5cblxuXHRzdGF0aWMgcmVnaXN0ZXJDb21wb25lbnQobmFtZSwgY29tcG9uZW50KSB7XG5cdFx0aWYobmFtZSA9PSBudWxsKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYoQ29tcG9uZW50Ll9jb21wb25lbnRzID09IG51bGwpIHtcblx0XHRcdENvbXBvbmVudC5fY29tcG9uZW50cyA9IHt9O1xuXHRcdH1cblxuXHRcdENvbXBvbmVudC5fY29tcG9uZW50c1tuYW1lXSA9IGNvbXBvbmVudDtcblxuXHRcdHJldHVybiBjb21wb25lbnQ7XG5cdH1cblxuXHRzdGF0aWMgZ2V0Q29tcG9uZW50KG5hbWUpIHtcblx0XHRpZihuYW1lID09IG51bGwpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZihDb21wb25lbnQuX2NvbXBvbmVudHMgJiYgQ29tcG9uZW50Ll9jb21wb25lbnRzW25hbWVdKSB7XG5cdFx0XHRyZXR1cm4gQ29tcG9uZW50Ll9jb21wb25lbnRzW25hbWVdO1xuXHRcdH1cblxuXHR9XG5cblx0c2V0IHRhcCh2YWx1ZSkge31cblxuXHRlbWl0VGFwRXZlbnRzKGVsZW1lbnQ9bnVsbCkge1xuXHRcdGlmKGVsZW1lbnQgPT0gbnVsbCkge1xuXHRcdFx0ZWxlbWVudCA9IHRoaXMuZWxlbWVudDtcblx0XHR9XG5cdFx0Ly8gVHJhY2sgdGhlIHN0YXJ0IHRpbWUgc28gd2UgY2FuIGRldGVybWluZSBob3cgbG9uZyB0aGUgdG91Y2ggbGFzdGVkXG5cdFx0bGV0IHRvdWNoU3RhcnQgPSAwO1xuXHRcdGxldCBmaXJzdFRvdWNoID0gbnVsbDtcblx0XHRsZXQgbGFzdE1vdmVUb3VjaCA9IG51bGw7XG5cblx0XHQvLyBNYXhpbXVtIG1vdmVtZW50IGFsbG93ZWQgZHVyaW5nIGEgdG91Y2ggZXZlbnQgdG8gc3RpbGwgYmUgY29uc2lkZXJlZCBhIHRhcFxuXHRcdC8vIE90aGVyIHBvcHVsYXIgbGlicyB1c2UgYW55d2hlcmUgZnJvbSAyIChoYW1tZXIuanMpIHRvIDE1LFxuXHRcdC8vIHNvIDEwIHNlZW1zIGxpa2UgYSBuaWNlLCByb3VuZCBudW1iZXIuXG5cdFx0Y29uc3QgdGFwTW92ZW1lbnRUaHJlc2hvbGQgPSAxMDtcblxuXHRcdC8vIFRoZSBtYXhpbXVtIGxlbmd0aCBhIHRvdWNoIGNhbiBiZSB3aGlsZSBzdGlsbCBiZWluZyBjb25zaWRlcmVkIGEgdGFwXG5cdFx0Y29uc3QgdG91Y2hUaW1lVGhyZXNob2xkID0gMjAwO1xuXG5cdFx0bGV0IGNvdWxkQmVUYXA7XG5cblx0XHQvLyBzZWUgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTc5NTc1OTMvaG93LXRvLWNhcHR1cmUtdG91Y2hlbmQtY29vcmRpbmF0ZXNcblxuXHRcdGVsZW1lbnQub24oJ3RvdWNoc3RhcnQnLCAoZXZlbnQpID0+IHtcblx0XHRcdC8vIElmIG1vcmUgdGhhbiBvbmUgZmluZ2VyLCBkb24ndCBjb25zaWRlciB0cmVhdGluZyB0aGlzIGFzIGEgY2xpY2tcblx0XHRcdGlmIChldmVudC50b3VjaGVzLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0XHQvLyBDb3B5IHBhZ2VYL3BhZ2VZIGZyb20gdGhlIG9iamVjdFxuXHRcdFx0XHRmaXJzdFRvdWNoID0gbGFzdE1vdmVUb3VjaCA9IHtcblx0XHRcdFx0XHRwYWdlWCA6IGV2ZW50LnRvdWNoZXNbMF0ucGFnZVgsXG5cdFx0XHRcdFx0cGFnZVkgOiBldmVudC50b3VjaGVzWzBdLnBhZ2VZXG5cdFx0XHRcdH07XG5cdFx0XHRcdC8vIFJlY29yZCBzdGFydCB0aW1lIHNvIHdlIGNhbiBkZXRlY3QgYSB0YXAgdnMuIFwidG91Y2ggYW5kIGhvbGRcIlxuXHRcdFx0XHR0b3VjaFN0YXJ0ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cdFx0XHRcdC8vIFJlc2V0IGNvdWxkQmVUYXAgdHJhY2tpbmdcblx0XHRcdFx0Y291bGRCZVRhcCA9IHRydWU7XG5cdFx0XHRcdHRoaXMudGFwID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdGVsZW1lbnQub24oJ3RvdWNobW92ZScsIChldmVudCkgPT4ge1xuXHRcdFx0Ly8gSWYgbW9yZSB0aGFuIG9uZSBmaW5nZXIsIGRvbid0IGNvbnNpZGVyIHRyZWF0aW5nIHRoaXMgYXMgYSBjbGlja1xuXHRcdFx0aWYgKGV2ZW50LnRvdWNoZXMubGVuZ3RoID4gMSkge1xuXHRcdFx0XHRjb3VsZEJlVGFwID0gZmFsc2U7XG5cdFx0XHR9IGVsc2UgaWYgKGZpcnN0VG91Y2gpIHtcblx0XHRcdC8vIFNvbWUgZGV2aWNlcyB3aWxsIHRocm93IHRvdWNobW92ZXMgZm9yIGFsbCBidXQgdGhlIHNsaWdodGVzdCBvZiB0YXBzLlxuXHRcdFx0Ly8gU28sIGlmIHdlIG1vdmVkIG9ubHkgYSBzbWFsbCBkaXN0YW5jZSwgdGhpcyBjb3VsZCBzdGlsbCBiZSBhIHRhcFxuXHRcdFx0XHRjb25zdCB4ZGlmZiA9IGV2ZW50LnRvdWNoZXNbMF0ucGFnZVggLSBmaXJzdFRvdWNoLnBhZ2VYO1xuXHRcdFx0XHRjb25zdCB5ZGlmZiA9IGV2ZW50LnRvdWNoZXNbMF0ucGFnZVkgLSBmaXJzdFRvdWNoLnBhZ2VZO1xuXHRcdFx0XHRjb25zdCB0b3VjaERpc3RhbmNlID0gTWF0aC5zcXJ0KHhkaWZmICogeGRpZmYgKyB5ZGlmZiAqIHlkaWZmKTtcblxuXHRcdFx0XHRpZiAoZXZlbnQudG91Y2hlcy5sZW5ndGggPT09IDEpIHtcblx0XHRcdFx0XHRsYXN0TW92ZVRvdWNoID0ge1xuXHRcdFx0XHRcdFx0cGFnZVggOiBldmVudC50b3VjaGVzWzBdLnBhZ2VYLFxuXHRcdFx0XHRcdFx0cGFnZVkgOiBldmVudC50b3VjaGVzWzBdLnBhZ2VZXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICh0b3VjaERpc3RhbmNlID4gdGFwTW92ZW1lbnRUaHJlc2hvbGQpIHtcblx0XHRcdFx0XHRjb3VsZEJlVGFwID0gZmFsc2U7XG5cdFx0XHRcdFx0dGhpcy50YXAgPSBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0Y29uc3Qgbm9UYXAgPSAoKSA9PiB7XG5cdFx0XHRjb3VsZEJlVGFwID0gZmFsc2U7XG5cdFx0XHR0aGlzLnRhcCA9IGZhbHNlO1xuXHRcdH07XG5cblx0XHQvLyBUT0RPOiBMaXN0ZW4gdG8gdGhlIG9yaWdpbmFsIHRhcmdldC4gaHR0cDovL3lvdXR1LmJlL0R1amZwWE9LVXA4P3Q9MTNtOHNcblx0XHRlbGVtZW50Lm9uKCd0b3VjaGxlYXZlJywgbm9UYXApO1xuXHRcdGVsZW1lbnQub24oJ3RvdWNoY2FuY2VsJywgbm9UYXApO1xuXG5cdFx0Ly8gV2hlbiB0aGUgdG91Y2ggZW5kcywgbWVhc3VyZSBob3cgbG9uZyBpdCB0b29rIGFuZCB0cmlnZ2VyIHRoZSBhcHByb3ByaWF0ZVxuXHRcdC8vIGV2ZW50XG5cdFx0ZWxlbWVudC5vbigndG91Y2hlbmQnLCAoZXZlbnQpID0+IHtcblx0XHRcdGZpcnN0VG91Y2ggPSBudWxsO1xuXHRcdFx0dGhpcy50YXAgPSBmYWxzZTtcblx0XHRcdC8vIFByb2NlZWQgb25seSBpZiB0aGUgdG91Y2htb3ZlL2xlYXZlL2NhbmNlbCBldmVudCBkaWRuJ3QgaGFwcGVuXG5cdFx0XHRpZiAoY291bGRCZVRhcCA9PT0gdHJ1ZSkge1xuXHRcdFx0Ly8gTWVhc3VyZSBob3cgbG9uZyB0aGUgdG91Y2ggbGFzdGVkXG5cdFx0XHRcdGNvbnN0IHRvdWNoVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gdG91Y2hTdGFydDtcblxuXHRcdFx0XHQvLyBNYWtlIHN1cmUgdGhlIHRvdWNoIHdhcyBsZXNzIHRoYW4gdGhlIHRocmVzaG9sZCB0byBiZSBjb25zaWRlcmVkIGEgdGFwXG5cdFx0XHRcdGlmICh0b3VjaFRpbWUgPCB0b3VjaFRpbWVUaHJlc2hvbGQpIHtcblx0XHRcdFx0XHQvLyBEb24ndCBsZXQgYnJvd3NlciB0dXJuIHRoaXMgaW50byBhIGNsaWNrXG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHQvKipcblx0XHRcdFx0XHQgKiBUcmlnZ2VyZWQgd2hlbiBhIGBDb21wb25lbnRgIGlzIHRhcHBlZC5cblx0XHRcdFx0XHQgKlxuXHRcdFx0XHRcdCAqIEBldmVudCBDb21wb25lbnQjdGFwXG5cdFx0XHRcdFx0ICovXG5cdFx0XHRcdFx0Y29uc3QgdGFwRXZlbnQgPSAkLkV2ZW50KCd0YXAnKTtcblx0XHRcdFx0XHR0YXBFdmVudC5wYWdlWCA9IGxhc3RNb3ZlVG91Y2gucGFnZVg7XG5cdFx0XHRcdFx0dGFwRXZlbnQucGFnZVkgPSBsYXN0TW92ZVRvdWNoLnBhZ2VZO1xuXHRcdFx0XHRcdGVsZW1lbnQudHJpZ2dlcih0YXBFdmVudCk7XG5cdFx0XHRcdFx0Ly8gSXQgbWF5IGJlIGdvb2QgdG8gY29weSB0aGUgdG91Y2hlbmQgZXZlbnQgb2JqZWN0IGFuZCBjaGFuZ2UgdGhlXG5cdFx0XHRcdFx0Ly8gdHlwZSB0byB0YXAsIGlmIHRoZSBvdGhlciBldmVudCBwcm9wZXJ0aWVzIGFyZW4ndCBleGFjdCBhZnRlclxuXHRcdFx0XHRcdC8vIEV2ZW50cy5maXhFdmVudCBydW5zIChlLmcuIGV2ZW50LnRhcmdldClcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdDb21wb25lbnQnLCBDb21wb25lbnQpO1xuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvQ29tcG9uZW50LmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBJY29uLmpzXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gSWNvbidzIG9wdGlvbnNcbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5pY29uTmFtZT0nJ10gSWNvbidzIG5hbWUuIElmIHVzZSBzdmdzcHJpdGUgaWNvbnMsIGljb25OYW1lIGl0J3MgaWQgaW4gc3ByaXRlXG4gKiBAY2xhc3MgSWNvblxuICogQGV4dGVuZHMgQ29tcG9uZW50XG4gKi9cbmNsYXNzIEljb24gZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yIChwbGF5ZXIsIG9wdGlvbnM9e30pIHtcblx0XHRvcHRpb25zID0gJC5leHRlbmQoe30sIHtcblx0XHRcdGNsYXNzTmFtZSA6ICcnLFxuXHRcdFx0aWNvbk5hbWUgOiAnJ1xuXHRcdH0sIG9wdGlvbnMpXG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblxuXHR9XG5cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdHRoaXMuX3VzZVRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAndXNlJyk7XG5cdFx0dGhpcy5fc3ZnVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcblxuXHRcdHRoaXMuaWNvbk5hbWUgPSB0aGlzLl9pY29uTmFtZSA9IHRoaXMub3B0aW9ucy5pY29uTmFtZTtcblx0XHR0aGlzLl9zdmdUYWcuYXBwZW5kQ2hpbGQodGhpcy5fdXNlVGFnKTtcblx0XHR0aGlzLmVsZW1lbnQgPSAkKCc8ZGl2IC8+Jylcblx0XHRcdC5hZGRDbGFzcyh0aGlzLmJ1aWxkQ1NTQ2xhc3MoKSlcblx0XHRcdC5hdHRyKCd0aXRsZScsIHRoaXMub3B0aW9ucy50aXRsZSlcblx0XHRcdC5hcHBlbmQoJCh0aGlzLl9zdmdUYWcpKTtcblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50O1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0YnVpbGRDU1NDbGFzcygpIHtcblx0XHRyZXR1cm4gYCR7c3VwZXIuYnVpbGRDU1NDbGFzcygpfSBsZXBsYXllci1pY29uICR7dGhpcy5vcHRpb25zLmNsYXNzTmFtZX1gXG5cdH1cblxuXHQvKipcblx0ICogU2V0dGVyIG9mIGljb25OYW1lIGZpZWxkXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBpY29uTmFtZVxuXHQgKi9cblx0c2V0IGljb25OYW1lKGljb25OYW1lKSB7XG5cdFx0bGV0IGF0dHJOUyA9IFsnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycsICdocmVmJ11cblx0XHR0aGlzLl91c2VUYWcucmVtb3ZlQXR0cmlidXRlTlMoLi4uYXR0ck5TLCBgJHt0aGlzLnBsYXllci5vcHRpb25zLnN2Z1BhdGh9I2xlcGxheWVyLWljb24tJHt0aGlzLmljb25OYW1lfWApXG5cdFx0dGhpcy5fdXNlVGFnLnNldEF0dHJpYnV0ZU5TKC4uLmF0dHJOUywgYCR7dGhpcy5wbGF5ZXIub3B0aW9ucy5zdmdQYXRofSNsZXBsYXllci1pY29uLSR7aWNvbk5hbWV9YClcblx0XHR0aGlzLl9pY29uTmFtZSA9IGljb25OYW1lO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldHRlciBvZiBpY29uTmFtZSBmaWVsZFxuXHQgKiBAcmV0dXJuIHtTdHJpbmd9IEljb24ncyBuYW1lXG5cdCAqL1xuXHRnZXQgaWNvbk5hbWUgKCkge1xuXHRcdHJldHVybiB0aGlzLl9pY29uTmFtZTtcblx0fVxuXG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnSWNvbicsIEljb24pO1xuZXhwb3J0IGRlZmF1bHQgSWNvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL0ljb24uanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIFBsYXlCdXR0b24uanNcbiAqL1xuXG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL0NvbnRyb2wnO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgSWNvbiBmcm9tICcuL0ljb24nO1xuaW1wb3J0IHsgY3JlYXRlRWwgfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBJU19UT1VDSCB9IGZyb20gJy4uL3V0aWxzL2Jyb3dzZXInO1xuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqL1xuY2xhc3MgUGxheUJ1dHRvbiBleHRlbmRzIENvbnRyb2wge1xuXG5cdGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucykge1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucylcblx0fVxuXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0Y29uc3QgaW5uZXIgPSBjcmVhdGVFbCgnZGl2Jywge1xuXHRcdFx0Y2xhc3NOYW1lIDogJ2xlcGxheWVyLXBsYXktYnV0dG9uX19idXR0b24nXG5cdFx0fSlcblx0XHQuYXBwZW5kKG5ldyBJY29uKHRoaXMucGxheWVyLCB7IGljb25OYW1lIDogJ3BsYXknIH0pLmVsZW1lbnQpO1xuXG5cdFx0dGhpcy5lbGVtZW50ID0gY3JlYXRlRWwoJ2RpdicsIHtcblx0XHRcdGNsYXNzTmFtZSA6IHRoaXMuYnVpbGRDU1NDbGFzcygpXG5cdFx0fSlcblx0XHQuYXBwZW5kKGlubmVyKTtcblxuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQ7XG5cdH1cblxuXHRvbkNsaWNrKGUpIHtcblx0XHRzdXBlci5vbkNsaWNrKGUpO1xuXHRcdC8qKlxuXHRcdCAqIFNlZSBMUExSLTI5MFxuXHRcdCAqIE9uIHRvdWNoIGRldmljZXMgaW4gZnVsbHNjcmVlbiBpZiB1c2VyIG5vdCBhY3RpdmUgd2UgZG9uJ3Qgc2hvdWxkIHBsYXkuXG5cdFx0ICogQXQgZmlyc3Qgd2Ugc2hvdyBoaW0gYSBjb250cm9sc1xuXHRcdCAqL1xuXHRcdGlmKElTX1RPVUNIKCkgJiYgdGhpcy5wbGF5ZXIudmlldyA9PT0gJ2Z1bGxzY3JlZW4nKSB7XG5cdFx0XHRpZih0aGlzLnBsYXllci51c2VyQWN0aXZlKSB7XG5cdFx0XHRcdHRoaXMucGxheWVyLnBsYXkoKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5wbGF5ZXIucGxheSgpO1xuXHRcdH1cblxuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0YnVpbGRDU1NDbGFzcygpIHtcblx0XHRyZXR1cm4gYGxlcGxheWVyLXBsYXktYnV0dG9uICR7dGhpcy5vcHRpb25zLmNsYXNzTmFtZX1gXG5cdH1cblxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ1BsYXlCdXR0b24nLCBQbGF5QnV0dG9uKTtcbkNvbnRyb2wucmVnaXN0ZXJDb250cm9sKCdwbGF5IGJ1dHRvbicsIFBsYXlCdXR0b24pO1xuZXhwb3J0IGRlZmF1bHQgUGxheUJ1dHRvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL1BsYXlCdXR0b24uanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIHRpbWUuanNcbiAqXG4gKiBAbW9kdWxlIHRpbWVcbiAqL1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuLyoqXG4gKiBDb252ZXJ0IHNlY29uZHMgdG8gZm9ybWF0IHN0cmluZyAnaGg/Om1tOnNzJ1xuICpcbiAqIEBhY2Nlc3MgcHVibGljXG4gKiBAcGFyYW0ge051bWJlcn0gc2Vjb25kcyBTZWNvbmRzXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHNob3dIb3VycyBjb252ZXJ0IHRvIGZvcm1hdCAnaGg6bW06c3MnXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2Vjb25kc1RvVGltZSAoc2Vjb25kcywgc2hvd0hvdXJzKSB7XG5cdHZhciBoID0gTWF0aC5mbG9vcihzZWNvbmRzIC8gMzYwMCk7XG5cdHZhciBtID0gTWF0aC5mbG9vcihzZWNvbmRzICUgMzYwMCAvIDYwKTtcblx0dmFyIHMgPSBNYXRoLmZsb29yKHNlY29uZHMgJSAzNjAwICUgNjApO1xuXHR2YXIgb3V0ID0gJyc7XG5cdGlmIChtIDwgMTApIHtcblx0XHRtID0gJzAnICsgbTtcblx0fVxuXHRpZiAocyA8IDEwKSB7XG5cdFx0cyA9ICcwJyArIHM7XG5cdH1cblx0b3V0ID0gYCR7bX06JHtzfWA7XG5cblx0aWYoaCA+IDAgfHwgc2hvd0hvdXJzKSB7XG5cdFx0b3V0ID0gYCR7aH06YCArIG91dFxuXHR9XG5cdHJldHVybiBvdXQ7XG59XG5cblxuLyoqXG4gKiBSZXR1cm4gbGVuZ3RoIC8gZW5kXG4gKlxuICogQGFjY2VzcyBwdWJsaWNcbiAqIEBwYXJhbSB7TnVtYmVyfSBsZW5ndGhcbiAqIEBwYXJhbSB7TnVibWVyfSBlbmRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBlcmNlbnRpZnkgKGxlbmd0aCwgZW5kKSB7XG5cdC8vIG9yIHplcm8gYmVhY2FzZSBOYU5cblx0Y29uc3QgcGVyY2VudCA9IChsZW5ndGggLyBlbmQpIHx8IDA7XG5cdHJldHVybiAocGVyY2VudCA+PSAxKSA/IDEgOiBwZXJjZW50O1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbCh0YWc9J2RpdicsIHByb3BzKSB7XG5cdGlmKHByb3BzICYmIHByb3BzLmNsYXNzTmFtZSkge1xuXHRcdHByb3BzW1wiY2xhc3NcIl0gPSBwcm9wcy5jbGFzc05hbWU7XG5cdFx0ZGVsZXRlIHByb3BzLmNsYXNzTmFtZTtcblx0fVxuXHRyZXR1cm4gJChgPCR7dGFnfS8+YCwgcHJvcHMpO1xufVxuXG5cbi8qKlxuICogQHBhcmFtcyB7U3RyaW5nfSBIdG1sXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAkaHRtbChodG1sKSB7XG5cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gbm9vcCgpIHt9XG5cbmV4cG9ydCBjb25zdCBnZXRTY3JvbGxCYXJXaWR0aCA9IChmdW5jdGlvbigpIHtcblx0bGV0IHJlc3VsdDtcblxuXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cblx0XHRpZihyZXN1bHQgIT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9XG5cblx0XHRjb25zdCBvdXRlciA9ICQoJzxkaXYgLz4nKS5jc3Moe1xuXHRcdFx0dmlzaWJpbGl0eSA6ICdoaWRkZW4nLFxuXHRcdFx0d2lkdGggOiAxMDAsXG5cdFx0XHRvdmVyZmxvdyA6ICdzY3JvbGwnXG5cdFx0fSkuYXBwZW5kVG8oJ2JvZHknKTtcblxuXHRcdGNvbnN0IHdpZHRoV2l0aFNjcm9sbCA9ICQoJzxkaXYgLz4nKS5jc3Moe1xuXHRcdFx0d2lkdGggOiAnMTAwJSdcblx0XHR9KS5hcHBlbmRUbyhvdXRlcikub3V0ZXJXaWR0aCgpO1xuXG5cdFx0b3V0ZXIucmVtb3ZlKCk7XG5cdFx0cmV0dXJuIHJlc3VsdCA9IDEwMCAtIHdpZHRoV2l0aFNjcm9sbDtcblx0fVxuXG59KCkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL3V0aWxzL2luZGV4LmpzIiwiLyoqXG4gKiBAZmlsZSBicm93c2VyLmpzXG4gKi9cblxuXG5jb25zdCBVU0VSX0FHRU5UID0gd2luZG93Lm5hdmlnYXRvciAmJiB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCB8fCAnJztcblxuZXhwb3J0IGNvbnN0IElTX01PQklMRSA9ICgvTW9iaWxlL2kpLnRlc3QoVVNFUl9BR0VOVCk7XG5cbmV4cG9ydCBjb25zdCBJU19DSFJPTUUgPSBVU0VSX0FHRU5ULmluZGV4T2YoJ0Nocm9tZScpID4gLTE7XG5cbmV4cG9ydCBjb25zdCBJU19BTkRST0lEID0gKC9BbmRyb2lkL2kpLnRlc3QoVVNFUl9BR0VOVCk7XG5cbmV4cG9ydCBjb25zdCBJU19BTkRST0lEX1BIT05FID0gSVNfQU5EUk9JRCAmJiBJU19NT0JJTEU7XG5cbmV4cG9ydCBjb25zdCBJU19JUEFEID0gKC9pUGFkL2kpLnRlc3QoVVNFUl9BR0VOVCk7XG4vLyBUaGUgRmFjZWJvb2sgYXBwJ3MgVUlXZWJWaWV3IGlkZW50aWZpZXMgYXMgYm90aCBhbiBpUGhvbmUgYW5kIGlQYWQsIHNvXG4vLyB0byBpZGVudGlmeSBpUGhvbmVzLCB3ZSBuZWVkIHRvIGV4Y2x1ZGUgaVBhZHMuXG4vLyBodHRwOi8vYXJ0c3kuZ2l0aHViLmlvL2Jsb2cvMjAxMi8xMC8xOC90aGUtcGVyaWxzLW9mLWlvcy11c2VyLWFnZW50LXNuaWZmaW5nL1xuZXhwb3J0IGNvbnN0IElTX0lQSE9ORSA9ICgvaVBob25lL2kpLnRlc3QoVVNFUl9BR0VOVCkgJiYgIUlTX0lQQUQ7XG5leHBvcnQgY29uc3QgSVNfSVBPRCA9ICgvaVBvZC9pKS50ZXN0KFVTRVJfQUdFTlQpO1xuZXhwb3J0IGNvbnN0IElTX0lPUyA9IElTX0lQSE9ORSB8fCBJU19JUEFEIHx8IElTX0lQT0Q7XG5cbmV4cG9ydCBjb25zdCBJU19TQUZBUkkgPSBVU0VSX0FHRU5ULmluZGV4T2YoJ1NhZmFyaScpID4gLTEgJiYgIUlTX0NIUk9NRTtcblxuZXhwb3J0IGNvbnN0IElTX1RPVUNIID0gKCkgPT4gJ29udG91Y2hzdGFydCcgaW4gd2luZG93IHx8IG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvdXRpbHMvYnJvd3Nlci5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgU3BsYXNoSWNvbi5qc1xuICovXG5cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJztcblxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAY2xhc3MgU3BsYXNoSWNvblxuICogQGV4dGVuZHMgQ29tcG9uZW50XG4gKi9cbmNsYXNzIFNwbGFzaEljb24gZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdHNob3cobmFtZSkge1xuXHRcdHRoaXMuaWNvbi5pY29uTmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5lbGVtZW50LmFkZENsYXNzKCdsZXBsYXllci1zcGxhc2hpY29uLS1hY3RpdmUnKTtcblx0XHRzZXRUaW1lb3V0KCgpID0+IHRoaXMuZWxlbWVudC5yZW1vdmVDbGFzcygnbGVwbGF5ZXItc3BsYXNoaWNvbi0tYWN0aXZlJyksIDMwMCk7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdHRoaXMuaWNvbiA9IG5ldyBJY29uKHRoaXMucGxheWVyKTtcblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50ID0gJCgnPGRpdiAvPicpXG5cdFx0XHQuYWRkQ2xhc3MoJ2xlcGxheWVyLXNwbGFzaGljb24nKVxuXHRcdFx0LmFwcGVuZCh0aGlzLmljb24uZWxlbWVudCk7XG5cdH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBTcGxhc2hJY29uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvU3BsYXNoSWNvbi5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgVGltZS5qc1xuICovXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9Db21wb25lbnQnO1xuaW1wb3J0IHsgc2Vjb25kc1RvVGltZSwgY3JlYXRlRWwgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbi8vIFRPRE86INCY0YHQv9C+0LvRjNC30L7QstCw0YLRjCDRjdGC0L7RgiDQsdC70L7QuiDQsiBUaW1lQ29udHJvbFxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAY2xhc3MgVGltZVxuICogQGV4dGVuZHMgQ29udHJvbFxuICovXG5jbGFzcyBUaW1lIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3RvciAocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRmbiA6IChwbGF5ZXIpID0+IHtcblx0XHRcdFx0Y29uc3QgdmlkZW8gPSBwbGF5ZXIudmlkZW87XG5cdFx0XHRcdHJldHVybiBzZWNvbmRzVG9UaW1lKHZpZGVvLmN1cnJlbnRUaW1lKTtcblx0XHRcdH1cblx0XHR9LCBvcHRpb25zKTtcblxuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cblx0XHR0aGlzLnBsYXllci5vbigndGltZXVwZGF0ZScsIHRoaXMudXBkYXRlVGV4dC5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLnBsYXllci5vbignaW5pdGVkJywgdGhpcy51cGRhdGVUZXh0LmJpbmQodGhpcykpO1xuXHR9XG5cblx0dXBkYXRlVGV4dChlLCBkYXRhKSB7XG5cdFx0dGhpcy5lbGVtZW50LnRleHQodGhpcy5vcHRpb25zLmZuKHRoaXMucGxheWVyKSk7XG5cdH1cblxuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdHRoaXMuZWxlbWVudCA9IGNyZWF0ZUVsKCdkaXYnLCB7IGNsYXNzTmFtZSA6ICdsZXBsYXllci10aW1lJyB9KTtcblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50O1xuXHR9XG5cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdUaW1lJywgVGltZSk7XG5leHBvcnQgZGVmYXVsdCBUaW1lO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvVGltZWxpbmUvVGltZS5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgQ29udHJvbENvbGxlY3Rpb24uanNcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL0NvbnRyb2wnO1xuXG5pbXBvcnQgeyBjcmVhdGVFbCB9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IElTX0FORFJPSURfUEhPTkUsIElTX0lQSE9ORSwgSVNfTU9CSUxFIH0gZnJvbSAnLi4vdXRpbHMvYnJvd3Nlcic7XG5cblxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIE9wdGlvbnMgb2YgY29tcG9uZW50XG4gKiBAcGFyYW0ge2pRdWVyeX0gW29wdGlvbnMuY29udHJvbHNdIEFycmF5IG9mIHJvd3Mgb2YgY29udHJvbCdzIG5hbWVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5jb250cm9sc09wdGlvbnNdIENvbnRyb2wgb3B0aW9uc1xuICogQHByb3BlcnR5IHtBcnJheX0gQXJyYXkgb2Ygcm93cyBvZiBjb250cm9sJ3MgbmFtZVxuICogQHByXG4gKlxuICovXG5jbGFzcyBDb250cm9sQ29sbGVjdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yIChwbGF5ZXIsIG9wdGlvbnMpIHtcblx0XHRsZXQgeyBuYW1lIH0gPSBvcHRpb25zO1xuXG5cdFx0Ly8gT3B0aW9ucyBieSB1c2VyIGFnZW50XG5cdFx0Ly8gT3B0aW9ucyBvbmx5IGZvciBjb21tb246YW5kcm9pZCBvciB3aGF0ZXZlcjphbmRyb2lkLCB3aGF0ZXZlcjppb3MgY29udHJvbHNcblx0XHRsZXQgbG9jYWxVYU9wdGlvbnMgPSB7fTtcblxuXHRcdGxldCBjb250cm9sc09wdGlvbnMgPSB7fTtcblxuXHRcdGxldCBjb250cm9scyA9IFtdO1xuXG5cdFx0aWYobmFtZSAhPSBudWxsKSB7XG5cblx0XHRcdGNvbnRyb2xzID0gcGxheWVyLm9wdGlvbnMuY29udHJvbHNbbmFtZV07XG5cblx0XHRcdGNvbnRyb2xzT3B0aW9ucyA9IHBsYXllci5vcHRpb25zLmNvbnRyb2xzT3B0aW9uc1tuYW1lXTtcblxuXHRcdFx0W1xuXHRcdFx0XHR7IGZsYWcgOiBJU19NT0JJTEUsIG5hbWUgOiAnbW9iaWxlJ30sXG4gICAgICAgICAgICAgICAgeyBmbGFnIDogSVNfQU5EUk9JRF9QSE9ORSwgbmFtZSA6ICdhbmRyb2lkJyB9LFxuICAgICAgICAgICAgICAgIHsgZmxhZyA6IElTX0lQSE9ORSwgbmFtZSA6ICdpb3MnIH0sXG5cdFx0XHRdLmZvckVhY2goaXRlbSA9PiB7XG5cdFx0XHRcdGlmKGl0ZW0uZmxhZykge1xuXHRcdFx0XHRcdGNvbnN0IGxvY2FsTmFtZSA9IGAke25hbWV9OiR7aXRlbS5uYW1lfWA7XG5cblx0XHRcdFx0XHRpZihwbGF5ZXIub3B0aW9ucy5jb250cm9sc1tsb2NhbE5hbWVdKSB7XG5cdFx0XHRcdFx0XHRsb2NhbFVhT3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBsb2NhbFVhT3B0aW9ucywgcGxheWVyLm9wdGlvbnMuY29udHJvbHNPcHRpb25zW2xvY2FsTmFtZV0pO1xuXHRcdFx0XHRcdFx0Y29udHJvbHMgPSBwbGF5ZXIub3B0aW9ucy5jb250cm9sc1tsb2NhbE5hbWVdO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gaXRlbS5mbGFnO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cblx0XHRvcHRpb25zID0gJC5leHRlbmQoe30sIHtcblx0XHRcdGNvbnRyb2xzIDogY29udHJvbHMsXG5cdFx0XHRhbGlnbiA6ICdsZWZ0Jyxcblx0XHRcdGNvbnRyb2xzT3B0aW9ucyA6IHt9XG5cdFx0fSwgbG9jYWxVYU9wdGlvbnMsIGNvbnRyb2xzT3B0aW9ucywgb3B0aW9ucyk7XG5cblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXG5cdFx0dGhpcy5hY3RpdmUgPSBvcHRpb25zLmFjdGl2ZSB8fCBmYWxzZTtcblx0XHR0aGlzLm5hbWUgPSBvcHRpb25zLm5hbWU7XG5cblx0XHR0aGlzLnBsYXllci5jb250cm9sc1t0aGlzLm5hbWVdID0gdGhpcztcblx0fVxuXG5cblx0X2dldENvbnRyb2xPcHRpb25zKG5hbWUpIHtcblx0XHRjb25zdCB7IGNvbnRyb2xzT3B0aW9ucyB9ID0gdGhpcy5vcHRpb25zO1xuXHRcdGxldCByZXN1bHQgPSBjb250cm9sc09wdGlvbnMuY29udHJvbCB8fCB7fTtcblxuXHRcdGlmKGNvbnRyb2xzT3B0aW9uc1tuYW1lXSkge1xuXHRcdFx0cmVzdWx0ID0gJC5leHRlbmQodHJ1ZSwge30sIHJlc3VsdCwgY29udHJvbHNPcHRpb25zW25hbWVdKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0YWRkQ29udHJvbChpbmRleFJvdywgbmFtZSwgb3B0aW9ucykge1xuXHRcdGNvbnN0IGNvbnRyb2wgPSBDb250cm9sLmNyZWF0ZSh0aGlzLnBsYXllciwgbmFtZSwge1xuXHRcdFx0Y29sbGVjdGlvbiA6IHRoaXMub3B0aW9ucy5uYW1lLFxuXHRcdFx0Li4ub3B0aW9uc1xuXHRcdH0pO1xuXG5cdFx0aWYoY29udHJvbCA9PSBudWxsKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0d2hpbGUoaW5kZXhSb3cgPiB0aGlzLl9yb3dzLmxlbmd0aCkge1xuXHRcdFx0dGhpcy5hZGRSb3coKTtcblx0XHR9XG5cblx0XHRjb25zdCBlbGVtUm93ID0gdGhpcy5fcm93c1tpbmRleFJvd107XG5cdFx0ZWxlbVJvdy5hcHBlbmQoY29udHJvbC5lbGVtZW50KTtcblxuXHRcdGlmICh0aGlzLmNvbnRyb2xzID09IG51bGwpIHtcblx0XHRcdHRoaXMuY29udHJvbHMgPSBbXTtcblx0XHR9XG5cdFx0aWYgKHRoaXMuY29udHJvbHNbaW5kZXhSb3ddID09IG51bGwpIHtcblx0XHRcdHRoaXMuY29udHJvbHNbaW5kZXhSb3ddID0ge307XG5cdFx0fVxuXG5cdFx0dGhpcy5jb250cm9sc1tpbmRleFJvd11bbmFtZV0gPSBjb250cm9sO1xuXHR9XG5cblx0Z2V0Q29udHJvbChmaXJzdCwgc2Vjb25kKSB7XG5cdFx0aWYoc2Vjb25kID09IG51bGwpIHtcblx0XHRcdGNvbnN0IG5hbWUgPSBmaXJzdDtcblx0XHRcdGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmNvbnRyb2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmKHRoaXMuY29udHJvbHNbaV1bbmFtZV0gIT0gbnVsbCkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLmNvbnRyb2xzW2ldW25hbWVdO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IG5hbWUgPSBmaXJzdDtcblx0XHRcdGNvbnN0IGluZGV4Um93ID0gc2Vjb25kO1xuXHRcdFx0cmV0dXJuIHRoaXMuY29udHJvbHNbaW5kZXhSb3ddW25hbWVdO1xuXHRcdH1cblxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0YWRkUm93KCkge1xuXHRcdGNvbnN0IGVsZW1Sb3cgPSBjcmVhdGVFbCgnZGl2Jywge1xuXHRcdFx0Y2xhc3NOYW1lIDogYGxlcGxheWVyLWNvbnRyb2xzIGNvbnRyb2xzLSR7dGhpcy5vcHRpb25zLm5hbWV9YFxuXHRcdH0pO1xuXG5cdFx0aWYgKHRoaXMuX3Jvd3MgPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5fcm93cyA9IFtdXG5cdFx0fVxuXHRcdHRoaXMuX3Jvd3MucHVzaChlbGVtUm93KTtcblx0XHR0aGlzLmVsZW1lbnQuYXBwZW5kKGVsZW1Sb3cpO1xuXG5cdFx0cmV0dXJuIGVsZW1Sb3c7XG5cdH1cblxuXHRnZXRSb3coaW5kZXhSb3cpIHtcblx0XHRyZXR1cm4gdGhpcy5fcm93c1tpbmRleFJvdyB8fCAwXTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0Y29uc3QgeyBuYW1lLCBjb250cm9scywgYWxpZ24gfSA9IHRoaXMub3B0aW9ucztcblx0XHRsZXQgZ2xvYmFsQWxpZ24gPSBudWxsO1xuXG5cdFx0dGhpcy5lbGVtZW50ID0gY3JlYXRlRWwoJ2RpdicsIHtcblx0XHRcdGNsYXNzTmFtZSA6IGBsZXBsYXllci1jb250cm9sLWNvbGxlY3Rpb24gbGVwbGF5ZXItY29udHJvbC1jb2xsZWN0aW9uLS0ke25hbWV9YCxcblx0XHR9KVxuXG5cdFx0aWYodHlwZW9mIGFsaWduID09PSAnc3RyaW5nJykge1xuXHRcdFx0Z2xvYmFsQWxpZ24gPSBhbGlnbjtcblx0XHR9XG5cblx0XHRjb250cm9scy5mb3JFYWNoKChyb3csIGluZGV4Um93KSA9PiB7XG5cdFx0XHRjb25zdCBlbGVtUm93ID0gdGhpcy5hZGRSb3coKTtcblx0XHRcdGxldCByb3dBbGlnbiA9IGdsb2JhbEFsaWduO1xuXG5cdFx0XHRpZihBcnJheS5pc0FycmF5KGFsaWduKSAmJiBhbGlnbltpbmRleFJvd10pIHtcblx0XHRcdFx0cm93QWxpZ24gPSBhbGlnbltpbmRleFJvd11cblx0XHRcdH1cblxuXHRcdFx0cm93LmZvckVhY2goY29udHJvbE5hbWUgPT4ge1xuXG5cdFx0XHRcdGlmKGNvbnRyb2xOYW1lID09PSAndGltZWxpbmUnICYmIHJvd0FsaWduICE9PSAnanVzdGlmeScpIHtcblx0XHRcdFx0XHRjb25zb2xlLndhcm4oJ0NvbnJvbHMgc2hvdWxkIGhhdmUganVzdGlmeSBhbGlnbiwgaWYgdGhlcmUgaXMgdGhlIHRpbWVsaW5lIGluIGl0Jyk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLmFkZENvbnRyb2woaW5kZXhSb3csIGNvbnRyb2xOYW1lLCB0aGlzLl9nZXRDb250cm9sT3B0aW9ucyhuYW1lKSk7XG5cdFx0XHR9KTtcblxuXHRcdFx0ZWxlbVJvdy5hZGRDbGFzcyhgbGVwbGF5ZXItY29udHJvbHMtLSR7cm93QWxpZ259YClcblx0XHRcdFx0LmF0dHIoJ3RhYmluZGV4JywgMCk7XG5cblx0XHRcdGVsZW1Sb3cuZmluZCgnLmRpdmlkZXIgKyAuZGl2aWRlcicpLnJlbW92ZSgpO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudDtcblx0fVxuXG5cdGhpZGUgKCkge1xuXHRcdHRoaXMuZWxlbWVudC5oaWRlKCk7XG5cdFx0dGhpcy5lbGVtZW50LmZpbmQoJy5sZXBsYXllci1jb250cm9scycpLmhpZGUoKVxuXHR9XG5cblx0c2hvdyAoKSB7XG5cdFx0dGhpcy5lbGVtZW50LnNob3coKVxuXHRcdHRoaXMuZWxlbWVudC5maW5kKCcubGVwbGF5ZXItY29udHJvbHMnKS5zaG93KClcblx0fVxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ0NvbnRyb2xDb2xsZWN0aW9uJywgQ29udHJvbENvbGxlY3Rpb24pO1xuZXhwb3J0IGRlZmF1bHQgQ29udHJvbENvbGxlY3Rpb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9Db250cm9sQ29sbGVjdGlvbi5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgU2VjdGlvbnMuanNcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5cbmltcG9ydCB7IHNlY29uZHNUb1RpbWUsIGdldFNjcm9sbEJhcldpZHRoIH0gZnJvbSAnLi4vdXRpbHMnO1xuLyoqXG4gKiBAY2xhc3MgU2VjdGlvbnNcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEBwYXJhbSB7QXJyYXl9IFtvcHRpb25zLml0ZW1zPVtdfSBEYXRhIGZvciBzZWN0aW9uc1xuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy52aWV3c10gU2hvdyBzZWN0aW9uIG9ubHkgaW4gZnVsbHNjcmVlblxuICogQGV4dGVuZHMgQ29tcG9uZW50XG4gKi9cbmNsYXNzIFNlY3Rpb25zIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XG5cdFx0bGV0IHsgaXRlbXMgPSBbXSB9ID0gb3B0aW9ucztcblx0XHRpdGVtcyA9IFtdLmNvbmNhdChpdGVtcyk7XG5cblx0XHQvL29wdGlvbnMuaXRlbXMgPSBpdGVtcztcblxuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cblx0XHR0aGlzLnNjcm9sbEVsZW1lbnQgPSB0aGlzLl9pbm5lckVsZW1lbnQ7XG5cdFx0dGhpcy5hY3RpdmVTZWN0aW9uID0gdGhpcy5nZXRTZWN0aW9uQnlJbmRleCgwKTtcblxuXHRcdHRoaXMuaXRlbXMgPSBpdGVtcztcblx0XHR0aGlzLmxlbmd0aCA9IHRoaXMuaXRlbXMubGVuZ3RoO1xuXG5cdFx0dGhpcy5zZXRBY3RpdmVCeUluZGV4KDApO1xuXG5cdFx0dGhpcy5lbGVtZW50XG5cdFx0XHQuZmluZCgnLmxlcGxheWVyLXNlY3Rpb24nKVxuXHRcdFx0Lm9uKCdjbGljaycsIHRoaXMub25TZWN0aW9uQ2xpY2suYmluZCh0aGlzKSk7XG5cblx0XHQvLyB0aGlzLnBsYXllci5vbignc2VjdGlvbnN0b2dnbGUnLCB0aGlzLl9vblNlY3Rpb25zVG9nZ2xlLmJpbmQodGhpcykpO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ3RpbWV1cGRhdGUnLCB0aGlzLm9uVGltZVVwZGF0ZS5iaW5kKHRoaXMpKTtcblxuXHRcdHRoaXMucGxheWVyLm9uKCdpbml0ZWQnLCB0aGlzLnVwZGF0ZVNlY3Rpb25EdXJhdGlvbi5iaW5kKHRoaXMpKTtcblxuXHRcdHRoaXMucGxheWVyLm9uKCdkdXJhdGlvbmNoYW5nZScsIHRoaXMudXBkYXRlU2VjdGlvbkR1cmF0aW9uLmJpbmQodGhpcykpO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ2ZvY3VzJywgKCkgPT4gdGhpcy5wbGF5ZXIuZm9jdXMoKSk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdG5leHQoKSB7XG5cdFx0Y29uc3Qgc2VjdGlvbkluZGV4ID0gcGFyc2VJbnQodGhpcy5hY3RpdmVTZWN0aW9uLmF0dHIoJ2RhdGEtaW5kZXgnKSk7XG5cdFx0Y29uc3QgbmV3SW5kZXggPSBzZWN0aW9uSW5kZXggPj0gdGhpcy5sZW5ndGggPyB0aGlzLmxlbmd0aCA6IHNlY3Rpb25JbmRleCArIDE7XG5cblx0XHR0aGlzLnNldEFjdGl2ZUJ5SW5kZXgobmV3SW5kZXgpO1xuXG5cdFx0dGhpcy5wbGF5ZXIudmlkZW8uY3VycmVudFRpbWUgPSB0aGlzLml0ZW1zW3NlY3Rpb25JbmRleF0uZW5kO1xuXHR9XG5cblx0cHJldigpIHtcblx0XHRjb25zdCBzZWN0aW9uSW5kZXggPSBwYXJzZUludCh0aGlzLmFjdGl2ZVNlY3Rpb24uYXR0cignZGF0YS1pbmRleCcpKTtcblx0XHRjb25zdCBuZXdJbmRleCA9IHNlY3Rpb25JbmRleCA8PSAwID8gMCA6IHNlY3Rpb25JbmRleCAtIDE7XG5cblx0XHR0aGlzLnNldEFjdGl2ZUJ5SW5kZXgobmV3SW5kZXgpO1xuXHRcdHRoaXMucGxheWVyLnZpZGVvLmN1cnJlbnRUaW1lID0gdGhpcy5pdGVtc1tuZXdJbmRleF0uYmVnaW47XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdGNvbnN0IHsgZnVsbHNjcmVlbk9ubHksIGhpZGVTY3JvbGwgfSA9IHRoaXMub3B0aW9ucztcblxuXG5cdFx0dGhpcy5lbGVtZW50ID0gJCgnPGRpdiAvPicpXG5cdFx0XHQuYWRkQ2xhc3MoJ2xlcGxheWVyLXNlY3Rpb25zJylcblx0XHRcdC5hdHRyKCd0YWJpbmRleCcsICcwJyk7XG5cblx0XHR0aGlzLl9pbm5lckVsZW1lbnQgPSAkKCc8ZGl2IC8+JykuYWRkQ2xhc3MoJ2xlcGxheWVyLXNlY3Rpb25zX19pbm5lcicpO1xuXG5cdFx0aWYoZnVsbHNjcmVlbk9ubHkpIHtcblx0XHRcdHRoaXMuZWxlbWVudC5hZGRDbGFzcygnbGVwbGF5ZXItc2VjdGlvbnMtLWZzb25seScpO1xuXHRcdH1cblxuXHRcdGlmKGhpZGVTY3JvbGwpIHtcblx0XHRcdHRoaXMuZWxlbWVudC5hZGRDbGFzcygnbGVwbGF5ZXItc2VjdGlvbnMtLWhpZGUtc2Nyb2xsJyk7XG5cdFx0XHR0aGlzLl9pbm5lckVsZW1lbnQuY3NzKHtcblx0XHRcdFx0cmlnaHQgOiAtMSAqIGdldFNjcm9sbEJhcldpZHRoKClcblx0XHRcdH0pXG5cdFx0fVxuXG5cdFx0dGhpcy5lbGVtZW50LmFwcGVuZChcblx0XHRcdHRoaXMuX2lubmVyRWxlbWVudC5hcHBlbmQodGhpcy5fY3JlYXRlU2VjdGlvbnModGhpcy5vcHRpb25zLml0ZW1zKSlcblx0XHQpXG5cblxuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQ7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHR1cGRhdGVTZWN0aW9uRHVyYXRpb24oKSB7XG5cdFx0aWYodGhpcy5pdGVtcyAhPSBudWxsICYmIHRoaXMuaXRlbXMubGVuZ3RoID4gMCkge1xuXHRcdFx0Y29uc3QgbGVuZ3RoID0gdGhpcy5pdGVtcy5sZW5ndGhcblx0XHRcdHRoaXMuaXRlbXNbbGVuZ3RoIC0gMV0uZW5kID0gdGhpcy5wbGF5ZXIudmlkZW8uZHVyYXRpb247XG5cblx0XHRcdC8vIFRPRE86INCf0YDQvtC00YPQvNCw0YLRjCDRhNGD0L3QutGG0LjRj9GOIHVwZGF0ZVNlY3Rpb25cblx0XHRcdC8vdGhpcy51cGRhdGVTZWN0aW9uKHRoaXMuaXRlbXNbbGVuZ3RoIC0gMV0sIGxlbmd0aCAtIDEpO1xuXHRcdH1cblx0fVxuXG5cblx0b25TZWN0aW9uQ2xpY2soZSkge1xuXHRcdGNvbnN0IHZpZGVvID0gdGhpcy5wbGF5ZXIudmlkZW87XG5cdFx0Y29uc3Qgc2VjdGlvbiA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5sZXBsYXllci1zZWN0aW9uJyk7XG5cdFx0dmlkZW8uY3VycmVudFRpbWUgPSBzZWN0aW9uLmF0dHIoJ2RhdGEtYmVnaW4nKTtcblx0XHR0aGlzLnBsYXllci50cmlnZ2VyKCdzZWN0aW9uc2NsaWNrJywgeyBzZWN0aW9uIDogdGhpcy5pdGVtc1tzZWN0aW9uLmF0dHIoJ2RhdGEtaW5kZXgnKV19KTtcblx0fVxuXG5cdHNldEFjdGl2ZUJ5SW5kZXgoaW5kZXgpIHtcblx0XHRpZiAoXG5cdFx0XHR0aGlzLmFjdGl2ZVNlY3Rpb24ubGVuZ3RoID09PSAwIHx8XG5cdFx0XHRwYXJzZUludCh0aGlzLmFjdGl2ZVNlY3Rpb24uYXR0cignZGF0YS1pbmRleCcpKSA9PT0gaW5kZXggfHxcblx0XHRcdHRoaXMuZ2V0U2VjdGlvbkJ5SW5kZXgoaW5kZXgpLmxlbmd0aCA9PT0gMFxuXHRcdCkge1xuXHRcdFx0cmV0dXJuIHRoaXNcblx0XHR9XG5cblx0XHR0aGlzLmFjdGl2ZVNlY3Rpb24ucmVtb3ZlQ2xhc3MoJ2xlcGxheWVyLXNlY3Rpb24tLWFjdGl2ZScpO1xuXHRcdHRoaXMuYWN0aXZlU2VjdGlvbiA9IHRoaXMuZ2V0U2VjdGlvbkJ5SW5kZXgoaW5kZXgpO1xuXHRcdHRoaXMuYWN0aXZlU2VjdGlvbi5hZGRDbGFzcygnbGVwbGF5ZXItc2VjdGlvbi0tYWN0aXZlJyk7XG5cblx0XHRjb25zdCB0b3BQb3NpdGlvbiA9IHRoaXMuYWN0aXZlU2VjdGlvbi5wb3NpdGlvbigpLnRvcDtcblxuXHRcdHRoaXMuc2Nyb2xsRWxlbWVudFxuXHRcdFx0LmFuaW1hdGUoe1xuXHRcdFx0XHRzY3JvbGxUb3AgOiB0aGlzLnNjcm9sbEVsZW1lbnQuc2Nyb2xsVG9wKCkgKyB0b3BQb3NpdGlvblxuXHRcdFx0fSwgODAwKVxuXG5cdFx0dGhpcy5wbGF5ZXIudHJpZ2dlcignc2VjdGlvbnNjaGFuZ2UnLCB7IHNlY3Rpb24gOiB0aGlzLml0ZW1zW2luZGV4XX0pO1xuXG5cdFx0cmV0dXJuIHRoaXNcblx0fVxuXG5cdGdldFNlY3Rpb25CeUluZGV4KGluZGV4KSB7XG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudC5maW5kKGAubGVwbGF5ZXItc2VjdGlvbltkYXRhLWluZGV4PVwiJHtpbmRleH1cIl1gKTtcblx0fVxuXG5cblx0b25UaW1lVXBkYXRlKGUsIGRhdGEpIHtcblx0XHRpZiAodGhpcy5hY3RpdmVTZWN0aW9uLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuXG5cdFx0fVxuXG5cdFx0Y29uc3QgY3VycmVudFRpbWUgPSB0aGlzLnBsYXllci5jdXJyZW50VGltZTtcblxuXHRcdC8vIFVwZGF0ZSBzcGFuIHdpdGggZW5kIHNlY3Rpb24gdGltZVxuXHRcdC8vIFRPRE86INCS0YvQvdC10YHRgtC4INGN0YLQviDQsiDQvtGC0LTQtdC70YzQvdGL0Lkg0LrQvtC80L/QvtC90LXQvdGCIFNob3dUaW1lINC40LvQuCDRgtC40L/QviDRgtC+0LPQvlxuXHRcdGlmKHRoaXMucGxheWVyLnZpZXcgPT09ICdtaW5pJykge1xuXHRcdFx0Y29uc3QgZW5kU2VjdGlvblRpbWUgPSB0aGlzLmFjdGl2ZVNlY3Rpb24uYXR0cignZGF0YS1lbmQnKTtcblx0XHRcdHRoaXMuYWN0aXZlU2VjdGlvblxuXHRcdFx0XHQubmV4dCgpXG5cdFx0XHRcdC5maW5kKCcudGltZScpXG5cdFx0XHRcdC50ZXh0KHNlY29uZHNUb1RpbWUoZW5kU2VjdGlvblRpbWUgLSBjdXJyZW50VGltZSkpO1xuXHRcdH1cblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3Qgc2VjdGlvbiA9IHRoaXMuaXRlbXNbaV07XG5cdFx0XHRpZiAoY3VycmVudFRpbWUgPCBzZWN0aW9uLmVuZCkge1xuXHRcdFx0XHR0aGlzLnNldEFjdGl2ZUJ5SW5kZXgoaSlcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0c2V0IHZpc2libGUodmFsdWUpIHtcblx0XHRpZiAodGhpcy5lbGVtZW50Lmhhc0NsYXNzKCdsZXBsYXllci1zZWN0aW9ucy0taGlkZGVuJykgJiYgdmFsdWUpIHtcblx0XHRcdHRoaXMuZWxlbWVudC5yZW1vdmVDbGFzcygnbGVwbGF5ZXItc2VjdGlvbnMtLWhpZGRlbicpO1xuXHRcdFx0dGhpcy5wbGF5ZXIudHJpZ2dlcignc2VjdGlvbnN0b2dnbGUnLCB7IGlzVmlzaWJsZSA6IHZhbHVlIH0pO1xuXHRcdH0gZWxzZSBpZiAoIXZhbHVlKSB7XG5cdFx0XHR0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoJ2xlcGxheWVyLXNlY3Rpb25zLS1oaWRkZW4nKTtcblx0XHRcdHRoaXMucGxheWVyLnRyaWdnZXIoJ3NlY3Rpb25zdG9nZ2xlJywgeyBpc1Zpc2libGUgOiB2YWx1ZSB9KTtcblx0XHR9XG5cdH1cblxuXHRnZXQgdmlzaWJsZSgpIHtcblx0XHRyZXR1cm4gIXRoaXMuZWxlbWVudC5oYXNDbGFzcygnbGVwbGF5ZXItc2VjdGlvbnMtLWhpZGRlbicpXG5cdH1cblxuXHQvKipcblx0ICogQ3JlYXRlIEhUTUwgb2Ygc2VjdGlvbiBieSBkYXRhIGFuZCBpbmRleCBzZWN0aW9uXG5cdCAqXG5cdCAqIEByZXR1cm5zIHtTdHJpbmd9IEhUTUxcblx0ICovXG5cdGNyZWF0ZVNlY3Rpb24oc2VjdGlvbiwgaW5kZXgpIHtcblx0XHRjb25zdCBpdGVtcyA9IHRoaXMuaXRlbXMgfHwgdGhpcy5vcHRpb25zLml0ZW1zO1xuXHRcdGNvbnN0IGl0ZW0gPSBgXG5cdFx0XHQ8ZGl2IGNsYXNzPVwibGVwbGF5ZXItc2VjdGlvbiAkeyFpbmRleCA/ICdsZXBsYXllci1zZWN0aW9uLS1hY3RpdmUnIDogJyd9XCJcblx0XHRcdFx0ZGF0YS1iZWdpbj1cIiR7c2VjdGlvbi5iZWdpbn1cIlxuXHRcdFx0XHRkYXRhLWluZGV4PVwiJHtpbmRleC50b1N0cmluZygpfVwiXG5cdFx0XHRcdGRhdGEtZW5kPVwiJHtzZWN0aW9uLmVuZH1cIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImxlcGxheWVyLXNlY3Rpb24tdGltZVwiPiR7c2Vjb25kc1RvVGltZShzZWN0aW9uLmJlZ2luKX08L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImxlcGxheWVyLXNlY3Rpb24taW5mb1wiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJsZXBsYXllci1zZWN0aW9uLW5leHQtaW5mb1wiPlxuXHRcdFx0XHRcdFx0JHtzZWN0aW9uLm5leHRJbmZvIHx8ICfQodC70LXQtNGD0Y7RidCw0Y8g0YHQtdC60YbQuNGPINC90LDRh9C90LXRgtGB0Y8g0YfQtdGA0LXQtyd9XG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cInRpbWVcIj4ke3NlY29uZHNUb1RpbWUoaXRlbXNbMF0uZW5kKX08L3NwYW4+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0JHtcblx0XHRcdFx0XHRcdHNlY3Rpb24udGl0bGUgIT0gbnVsbCA/XG5cdFx0XHRcdFx0XHRcdGA8ZGl2IGNsYXNzPVwibGVwbGF5ZXItc2VjdGlvbi10aXRsZVwiPiR7c2VjdGlvbi50aXRsZX08L2Rpdj5gXG5cdFx0XHRcdFx0XHQ6ICcnXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdCR7XG5cdFx0XHRcdFx0XHRzZWN0aW9uLmRlc2NyaXB0aW9uICE9IG51bGwgP1xuXHRcdFx0XHRcdFx0XHRgPGRpdiBjbGFzcz1cImxlcGxheWVyLXNlY3Rpb24tZGVzY3JpcHRpb25cIj4ke3NlY3Rpb24uZGVzY3JpcHRpb259PC9kaXY+YFxuXHRcdFx0XHRcdFx0OiAnJ1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRgLnRyaW0oKVxuXHRcdHJldHVybiBpdGVtXG5cdH1cblxuXHQvLyBUT0RPOiDQn9GA0LjQtNGD0LzQsNGC0Ywg0YfRgtC+INGB0LTQtdC70LDRgtGMINGBINGB0L7QsdGL0YLQuNGP0LzQuCDQv9C+0YHQu9C1INC+0LHQvdC+0LLQu9C10L3QuNGPINC/0L7Qu9C90L7RgdGM0Y4g0YHQtdC60YbQuNC4XG5cdC8qKlxuXHQgKiBGaW5kIHNlY3Rpb24gYnkgaW5kZXggYW5kIHVwZGF0ZSBoaW0gdXNpbmcgZGF0YVxuXHQgKlxuXHQgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuXHQgKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcblx0ICovXG5cdHVwZGF0ZVNlY3Rpb24oZGF0YSwgaW5kZXgpIHtcblx0XHR0aGlzLmdldFNlY3Rpb25CeUluZGV4KGluZGV4KVxuXHRcdFx0LnJlcGxhY2VXaXRoKHRoaXMuY3JlYXRlU2VjdGlvbihkYXRhLCBpbmRleCkpXG5cdFx0XHQub24oJ2NsaWNrJywgdGhpcy5vblNlY3Rpb25DbGljay5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdF9jcmVhdGVTZWN0aW9ucyhpdGVtcykge1xuXHRcdGxldCByZXN1bHQgPSAnJztcblx0XHRpdGVtcy5mb3JFYWNoKChzZWN0aW9uLCBpbmRleCkgPT4ge1xuXHRcdFx0cmVzdWx0ICs9IHRoaXMuY3JlYXRlU2VjdGlvbihzZWN0aW9uLCBpbmRleCk7XG5cdFx0fSk7XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ1NlY3Rpb25zJywgU2VjdGlvbnMpO1xuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbnM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9TZWN0aW9ucy5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgRXJyb3JEaXNwbGF5LmpzXG4gKi9cblxuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5cbi8qKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQGNsYXNzIEVycm9yRGlzcGxheVxuICogQGV4dGVuZHMgQ29tcG9uZW50XG4gKi9cbmNsYXNzIEVycm9yRGlzcGxheSBleHRlbmRzIENvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblx0XHRpZih0aGlzLnBsYXllci5fZXJyb3IgIT0gbnVsbCkge1xuXHRcdFx0dGhpcy5tZXNzYWdlID0gdGhpcy5wbGF5ZXIuX2Vycm9yLm1lc3NhZ2U7XG5cdFx0XHR0aGlzLmVsZW1lbnQuc2hvdygpO1xuXHRcdH1cblx0XHR0aGlzLnBsYXllci5vbignZXJyb3InLCB0aGlzLm9uUGxheWVyRXJyb3IuYmluZCh0aGlzKSk7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdHRoaXMuZWxlbWVudCA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0LmFkZENsYXNzKCdsZXBsYXllci1lcnJvci1kaXNwbGF5Jylcblx0fVxuXG5cdHNldCBtZXNzYWdlKHZhbHVlKSB7XG5cdFx0dGhpcy5lbGVtZW50Lmh0bWwodmFsdWUpO1xuXHR9XG5cblx0b25QbGF5ZXJFcnJvcihlLCBkYXRhKSB7XG5cdFx0Y29uc3QgZXJyb3IgPSBkYXRhLmVycm9yO1xuXHRcdHRoaXMubWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XG5cdFx0dGhpcy5lbGVtZW50LnNob3coKTtcblx0fVxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ0Vycm9yRGlzcGxheScsIEVycm9yRGlzcGxheSk7XG5leHBvcnQgZGVmYXVsdCBFcnJvckRpc3BsYXk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9FcnJvckRpc3BsYXkuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIEVycm9yRGlzcGxheS5qc1xuICovXG5cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy51cmxdIHBhdGggdG8gcG9zdGVyIGltYWdlXG4gKiBAY2xhc3MgUG9zdGVyXG4gKiBAZXh0ZW5kcyBDb21wb25lbnRcbiAqL1xuY2xhc3MgUG9zdGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnM9e30pIHtcblx0XHRvcHRpb25zID0gJC5leHRlbmQoe30sIHtcblx0XHRcdHVybCA6IG9wdGlvbnMudXJsXG5cdFx0fSwgb3B0aW9ucyk7XG5cblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXG5cdFx0dGhpcy51cmwgPSB0aGlzLm9wdGlvbnMudXJsO1xuXHR9XG5cblx0c2V0IHVybCh2YWx1ZSkge1xuXHRcdGlmKHZhbHVlID09IG51bGwpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy5fdXJsID0gdmFsdWU7XG5cdFx0dGhpcy5lbGVtZW50LmNzcygnYmFja2dyb3VuZC1pbWFnZScsIGB1cmwoXCIke3ZhbHVlfVwiKWApXG5cdH1cblxuXHRnZXQgdXJsKCkge1xuXHRcdHJldHVybiB0aGlzLl91cmw7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdHRoaXMuZWxlbWVudCA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0LmFkZENsYXNzKCdsZXBsYXllci1wb3N0ZXInKTtcblxuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQ7XG5cdH1cblxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ1Bvc3RlcicsIFBvc3Rlcik7XG5leHBvcnQgZGVmYXVsdCBQb3N0ZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9Qb3N0ZXIuanMiLCIvKipcbiAqIEBmaWxlIGZ1bGxzY3JlZW4tYXBpLmpzXG4gKi9cblxuXG4vKlxuICogU3RvcmUgdGhlIGJyb3dzZXItc3BlY2lmaWMgbWV0aG9kcyBmb3IgdGhlIGZ1bGxzY3JlZW4gQVBJXG4gKiBAdHlwZSB7T2JqZWN0fHVuZGVmaW5lZH1cbiAqIEBwcml2YXRlXG4gKi9cbmxldCBGdWxsc2NyZWVuQXBpID0ge307XG5cbi8vIGJyb3dzZXIgQVBJIG1ldGhvZHNcbi8vIG1hcCBhcHByb2FjaCBmcm9tIFNjcmVlbmZ1bC5qcyAtIGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvc2NyZWVuZnVsbC5qc1xuY29uc3QgYXBpTWFwID0gW1xuXHQvLyBTcGVjOiBodHRwczovL2R2Y3MudzMub3JnL2hnL2Z1bGxzY3JlZW4vcmF3LWZpbGUvdGlwL092ZXJ2aWV3Lmh0bWxcblx0W1xuXHRcdCdyZXF1ZXN0RnVsbHNjcmVlbicsXG5cdFx0J2V4aXRGdWxsc2NyZWVuJyxcblx0XHQnZnVsbHNjcmVlbkVsZW1lbnQnLFxuXHRcdCdmdWxsc2NyZWVuRW5hYmxlZCcsXG5cdFx0J2Z1bGxzY3JlZW5jaGFuZ2UnLFxuXHRcdCdmdWxsc2NyZWVuZXJyb3InXG5cdF0sXG5cdC8vIFdlYktpdFxuXHRbXG5cdFx0J3dlYmtpdFJlcXVlc3RGdWxsc2NyZWVuJyxcblx0XHQnd2Via2l0RXhpdEZ1bGxzY3JlZW4nLFxuXHRcdCd3ZWJraXRGdWxsc2NyZWVuRWxlbWVudCcsXG5cdFx0J3dlYmtpdEZ1bGxzY3JlZW5FbmFibGVkJyxcblx0XHQnd2Via2l0ZnVsbHNjcmVlbmNoYW5nZScsXG5cdFx0J3dlYmtpdGZ1bGxzY3JlZW5lcnJvcidcblx0XSxcblx0Ly8gT2xkIFdlYktpdCAoU2FmYXJpIDUuMSlcblx0W1xuXHRcdCd3ZWJraXRSZXF1ZXN0RnVsbFNjcmVlbicsXG5cdFx0J3dlYmtpdENhbmNlbEZ1bGxTY3JlZW4nLFxuXHRcdCd3ZWJraXRDdXJyZW50RnVsbFNjcmVlbkVsZW1lbnQnLFxuXHRcdCd3ZWJraXRDYW5jZWxGdWxsU2NyZWVuJyxcblx0XHQnd2Via2l0ZnVsbHNjcmVlbmNoYW5nZScsXG5cdFx0J3dlYmtpdGZ1bGxzY3JlZW5lcnJvcidcblx0XSxcblx0Ly8gTW96aWxsYVxuXHRbXG5cdFx0J21velJlcXVlc3RGdWxsU2NyZWVuJyxcblx0XHQnbW96Q2FuY2VsRnVsbFNjcmVlbicsXG5cdFx0J21vekZ1bGxTY3JlZW5FbGVtZW50Jyxcblx0XHQnbW96RnVsbFNjcmVlbkVuYWJsZWQnLFxuXHRcdCdtb3pmdWxsc2NyZWVuY2hhbmdlJyxcblx0XHQnbW96ZnVsbHNjcmVlbmVycm9yJ1xuXHRdLFxuXHQvLyBNaWNyb3NvZnRcblx0W1xuXHRcdCdtc1JlcXVlc3RGdWxsc2NyZWVuJyxcblx0XHQnbXNFeGl0RnVsbHNjcmVlbicsXG5cdFx0J21zRnVsbHNjcmVlbkVsZW1lbnQnLFxuXHRcdCdtc0Z1bGxzY3JlZW5FbmFibGVkJyxcblx0XHQnTVNGdWxsc2NyZWVuQ2hhbmdlJyxcblx0XHQnTVNGdWxsc2NyZWVuRXJyb3InXG5cdF1cbl07XG5cblxubGV0IHNwZWNBcGkgPSBhcGlNYXBbMF07XG5cbmxldCBicm93c2VyQXBpO1xuXG4vLyBkZXRlcm1pbmUgdGhlIHN1cHBvcnRlZCBzZXQgb2YgZnVuY3Rpb25zXG5mb3IgKGxldCBpID0gMDsgaSA8IGFwaU1hcC5sZW5ndGg7IGkrKykge1xuXHQvLyBjaGVjayBmb3IgZXhpdEZ1bGxzY3JlZW4gZnVuY3Rpb25cblx0aWYgKGFwaU1hcFtpXVsxXSBpbiBkb2N1bWVudCkge1xuXHRcdGJyb3dzZXJBcGkgPSBhcGlNYXBbaV07XG5cdFx0YnJlYWs7XG5cdH1cbn1cblxuLy8gbWFwIHRoZSBicm93c2VyIEFQSSBuYW1lcyB0byB0aGUgc3BlYyBBUEkgbmFtZXNcbmlmIChicm93c2VyQXBpKSB7XG5cdGZvciAobGV0IGk9MDsgaTxicm93c2VyQXBpLmxlbmd0aDsgaSsrKSB7XG5cdFx0RnVsbHNjcmVlbkFwaVtzcGVjQXBpW2ldXSA9IGJyb3dzZXJBcGlbaV07XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRnVsbHNjcmVlbkFwaTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9GdWxsc2NyZWVuQXBpLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBjb29raWUtY29udHJvbC5qc1xuICpcbiAqIEBjbGFzIENvb2tpZVxuICovXG5jbGFzcyBDb29raWUge1xuXHQvKipcblx0ICogQHB1YmxpY1xuXHQgKlxuXHQgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBOYW1lIG9mIGNvb2tpZVxuXHQgKiBAcGFyYW0ge1N0cmluZ30gW2RmbHRdIFJldHVybiBkZWZhdWx0IHZhbHVlIGlmIHRoaXMgZmllbGQgaXMgZW1wdHlcblx0ICpcblx0ICovXG5cdHN0YXRpYyBnZXQgKG5hbWUsIGRmbHQpIHtcblx0XHRsZXQgY29va2llcyA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOycpO1xuXHRcdGZvciAobGV0IGkgaW4gY29va2llcykge1xuXHRcdFx0dmFyIGQgPSBjb29raWVzWyBpIF0udHJpbSgpLnNwbGl0KCc9Jyk7XG5cdFx0XHRpZiAoZFsgMCBdID09PSAnbGVwbGF5ZXJfJyArIG5hbWUpXG5cdFx0XHRcdHJldHVybiBkWyAxIF07XG5cdFx0fVxuXHRcdHJldHVybiBkZmx0O1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwdWJsaWNcblx0ICpcblx0ICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgS2V5XG5cdCAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSBWYWx1ZVxuXHQgKi9cblx0c3RhdGljIHNldCAobmFtZSwgdmFsdWUpIHtcblx0XHR2YXIgZCA9IG5ldyBEYXRlKCk7XG5cdFx0ZC5zZXREYXRlKGQueWVhciArIDEpO1xuXHRcdGRvY3VtZW50LmNvb2tpZSA9ICdsZXBsYXllcl8nICsgbmFtZSArICc9JyArIHZhbHVlICsgJztleHBpcmVzPScgKyBkLnRvU3RyaW5nKCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29va2llO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL3V0aWxzL2Nvb2tpZS5qcyIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbmNsYXNzIE1lZGlhRXJyb3Ige1xuXHRjb25zdHJ1Y3Rvcih2YWx1ZSkge1xuXHRcdGlmKHZhbHVlIGluc3RhbmNlb2YgTWVkaWFFcnJvcikge1xuXHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuXHRcdFx0dGhpcy5jb2RlID0gdmFsdWU7XG5cdFx0fSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG5cdFx0Ly8gZGVmYXVsdCBjb2RlIGlzIHplcm8sIHNvIHRoaXMgaXMgYSBjdXN0b20gZXJyb3Jcblx0XHRcdHRoaXMubWVzc2FnZSA9IHZhbHVlO1xuXHRcdH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuXG5cdFx0XHQvLyBXZSBhc3NpZ24gdGhlIGBjb2RlYCBwcm9wZXJ0eSBtYW51YWxseSBiZWNhdXNlIG5hdGl2ZSBNZWRpYUVycm9yIG9iamVjdHNcblx0XHRcdC8vIGRvIG5vdCBleHBvc2UgaXQgYXMgYW4gb3duL2VudW1lcmFibGUgcHJvcGVydHkgb2YgdGhlIG9iamVjdC5cblx0XHRcdGlmICh0eXBlb2YgdmFsdWUuY29kZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0dGhpcy5jb2RlID0gdmFsdWUuY29kZTtcblx0XHRcdH1cblxuXHRcdFx0JC5leHRlbmQodGhpcywgdmFsdWUpO1xuXHRcdH1cblxuXHRcdGlmICghdGhpcy5tZXNzYWdlKSB7XG5cdFx0XHR0aGlzLm1lc3NhZ2UgPSBNZWRpYUVycm9yLmRlZmF1bHRNZXNzYWdlc1t0aGlzLmNvZGVdIHx8ICcnO1xuXHRcdH1cblx0fVxufVxuXG5NZWRpYUVycm9yLnByb3RvdHlwZS5jb2RlID0gMDtcblxuTWVkaWFFcnJvci5wcm90b3R5cGUubWVzc2FnZSA9ICcnO1xuXG5NZWRpYUVycm9yLmVycm9yVHlwZXMgPSBbXG5cdCdNRURJQV9FUlJfQ1VTVE9NJyxcblx0J01FRElBX0VSUl9BQk9SVEVEJyxcblx0J01FRElBX0VSUl9ORVRXT1JLJyxcblx0J01FRElBX0VSUl9ERUNPREUnLFxuXHQnTUVESUFfRVJSX1NSQ19OT1RfU1VQUE9SVEVEJyxcblx0J01FRElBX0VSUl9FTkNSWVBURUQnXG5dO1xuXG5cbk1lZGlhRXJyb3IuZGVmYXVsdE1lc3NhZ2VzID0ge1xuXHQxIDogJ9CS0Ysg0L/RgNC10YDQstCw0LvQuCDQt9Cw0LPRgNGD0LfQutGDINCy0LjQtNC10L4uJyxcblx0MiA6ICfQl9Cw0LPRgNGD0LfQutCwINCy0LjQtNC10L4g0L/RgNC10YDQstCw0L3QsCDQuNC3LdC30LAg0L/QvtGC0LXRgNC4INGB0L7QtdC00LjQvdC10L3QuNGPLicsXG5cdDMgOiAn0JfQsNCz0YDRg9C30LrQsCDQstC40LTQtdC+INC+0YHRgtCw0L3QvtCy0LvQtdC90LAg0LjQty3Qt9CwINC/0YDQvtCx0LvQtdC8INGBINCy0LjQtNC10L7RhNCw0LnQu9C+0Lwg0LjQu9C4INC40Lct0LfQsCDRgtC+0LPQviwg0YfRgtC+INCy0LDRiCDQsdGA0LDRg9C30LXRgCDQvdC1INC/0L7QtNC00LXRgNC20LjQstCw0LXRgiDQstC+0YHQv9GA0L7QuNC30LLQtdC00LXQvdC40LUg0LTQsNC90L3QvtCz0L4g0YTQsNC50LvQsC4nLFxuXHQ0IDogJ9CS0LjQtNC10L4g0L3QtSDQvNC+0LbQtdGCINCx0YvRgtGMINC30LDQs9GA0YPQttC10L3QviDQuNC3LdC30LAg0L/RgNC+0LHQu9C10Lwg0YEg0LjQvdGC0LXRgNC90LXRgi3RgdC+0LXQtNC40L3QtdC90LjQtdC8INC40LvQuCDQv9GA0L7QsdC70LXQvCDQvdCwINGB0LXRgNCy0LXRgNC1LiDQmNC70Lgg0YTQvtGA0LzQsNGCINGE0LDQudC70LAg0L3QtSDQv9C+0LTQtNC10YDQttC40LLQsNC10YLRgdGPINCy0LDRiNC40Lwg0LHRgNCw0YPQt9C10YDQvtC8LicsXG5cdDUgOiAn0JLQuNC00LXQviDQt9Cw0YjQuNGE0YDQvtCy0LDQvdC+LCDQuCDQvNGLINC90LUg0LzQvtC20LXQvCDQtdCz0L4g0YDQsNGB0YjQuNGE0YDQvtCy0LDRgtGMLidcbn07XG5cbi8vIEFkZCB0eXBlcyBhcyBwcm9wZXJ0aWVzIG9uIE1lZGlhRXJyb3Jcbi8vIGUuZy4gTWVkaWFFcnJvci5NRURJQV9FUlJfU1JDX05PVF9TVVBQT1JURUQgPSA0O1xuZm9yIChsZXQgZXJyTnVtID0gMDsgZXJyTnVtIDwgTWVkaWFFcnJvci5lcnJvclR5cGVzLmxlbmd0aDsgZXJyTnVtKyspIHtcblx0TWVkaWFFcnJvcltNZWRpYUVycm9yLmVycm9yVHlwZXNbZXJyTnVtXV0gPSBlcnJOdW07XG5cdC8vIHZhbHVlcyBzaG91bGQgYmUgYWNjZXNzaWJsZSBvbiBib3RoIHRoZSBjbGFzcyBhbmQgaW5zdGFuY2Vcblx0TWVkaWFFcnJvci5wcm90b3R5cGVbTWVkaWFFcnJvci5lcnJvclR5cGVzW2Vyck51bV1dID0gZXJyTnVtO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNZWRpYUVycm9yO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL01lZGlhRXJyb3IuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIFBsYXlDb250cm9sLmpzXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9Db250cm9sJztcblxuLyoqXG4gKiBAY2xhc3MgUGxheUNvbnRyb2xcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBleHRlbmRzIENvbnRyb2xcbiAqL1xuY2xhc3MgUGxheUNvbnRyb2wgZXh0ZW5kcyBDb250cm9sIHtcblx0Y29uc3RydWN0b3IgKHBsYXllciwgb3B0aW9ucz17fSkge1xuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0aWNvbk5hbWUgOiAncGxheScsXG5cdFx0XHR0aXRsZSA6ICfQktC+0YHQv9GA0L7QuNC30LLQtdGB0YLQuCDQstC40LTQtdC+Jyxcblx0XHRcdGNsYXNzTmFtZSA6ICdwbGF5Jyxcblx0XHRcdG5hbWUgOiAncGxheSdcblx0XHR9LCBvcHRpb25zKTtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oXG5cdFx0XHRgcGxheSBwbGF5aW5nIHBhdXNlIGVuZGVkIHNlZWtpbmcgbG9hZHN0YXJ0YCxcblx0XHRcdHRoaXMudXBkYXRlLmJpbmQodGhpcylcblx0XHQpXG5cdH1cblxuXG5cdC8qKlxuXHQgKiBQYXVzZSB0aGUgdmlkZW9cblx0ICovXG5cdHNob3dQbGF5ICgpIHtcblx0XHRpZih0aGlzLmljb24uaWNvbk5hbWUgPT09ICdwbGF5JykgcmV0dXJuO1xuXHRcdHRoaXMuaWNvbi5pY29uTmFtZSA9ICdwbGF5Jztcblx0XHR0aGlzLmVsZW1lbnQuYXR0cigndGl0bGUnLCB0aGlzLm9wdGlvbnMudGl0bGUpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFBsYXkgdGhlIHZpZGVvXG5cdCAqL1xuXHRzaG93UGF1c2UgKCkge1xuXHRcdGlmKHRoaXMuaWNvbi5pY29uTmFtZSA9PT0gJ3BhdXNlJykgcmV0dXJuO1xuXHRcdHRoaXMuaWNvbi5pY29uTmFtZSA9ICdwYXVzZSc7XG5cdFx0dGhpcy5lbGVtZW50LmF0dHIoJ3RpdGxlJywgJ9Cf0L7RgdGC0LDQstC40YLRjCDQvdCwINC/0LDRg9C30YMnKTtcblx0fVxuXG5cdHVwZGF0ZSgpIHtcblx0XHRpZiAodGhpcy5wbGF5ZXIuZW5kZWQpIHtcblx0XHRcdHRoaXMuc2hvd1JlcGxheSgpO1xuXHRcdH0gZWxzZSBpZih0aGlzLnBsYXllci5wYXVzZWQpIHtcblx0XHRcdHRoaXMuc2hvd1BsYXkoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zaG93UGF1c2UoKTtcblx0XHR9XG5cdH1cblxuXHRzaG93UmVwbGF5KCkge1xuXHRcdGlmKHRoaXMuaWNvbi5pY29uTmFtZSA9PT0gJ3JlZnJlc2gnKSByZXR1cm47XG5cdFx0aWYodGhpcy5wbGF5ZXIuZHVyYXRpb24gIT09IEluZmluaXR5KSB7XG5cdFx0XHR0aGlzLl9yZXBsYXkgPSB0cnVlO1xuXHRcdFx0dGhpcy5pY29uLmljb25OYW1lID0gJ3JlZnJlc2gnO1xuXHRcdFx0dGhpcy5lbGVtZW50LmF0dHIoJ3RpdGxlJywgJ9CX0LDQv9GD0YHRgtC40YLRjCDQt9Cw0L3QvtCy0L4nKVxuXHRcdH1cblx0fVxuXG5cdHJlbW92ZVJlcGxheSgpIHtcblx0XHRpZighdGhpcy5fcmVwbGF5KSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMuX3JlcGxheSA9IGZhbHNlO1xuXG5cdFx0aWYodGhpcy5wbGF5ZXIudmlkZW8ucGF1c2VkKSB7XG5cdFx0XHR0aGlzLnNob3dQbGF5KCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2hvd1BhdXNlKCk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0b25DbGljayhlKSB7XG5cdFx0dGhpcy5wbGF5ZXIudmlkZW8udG9nZ2xlUGxheSgpO1xuXHR9XG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnUGxheUNvbnRyb2wnLCBQbGF5Q29udHJvbCk7XG5Db250cm9sLnJlZ2lzdGVyQ29udHJvbCgncGxheScsIFBsYXlDb250cm9sKTtcbmV4cG9ydCBkZWZhdWx0IFBsYXlDb250cm9sO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvUGxheUNvbnRyb2wuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIFZvbHVtZUNvbnRyb2wuanNcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL0NvbnRyb2wnO1xuaW1wb3J0IENvbnRyb2xEcm9wZG93biBmcm9tICcuL0NvbnRyb2xEcm9wZG93bic7XG5pbXBvcnQgeyBJU19BTkRST0lEX1BIT05FIH0gZnJvbSAnLi4vdXRpbHMvYnJvd3Nlcic7XG5cblxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAY2xhc3MgVm9sdW1lQ29udHJvbFxuICogQGV4dGVuZHMgQ29udHJvbERyb3Bkb3duXG4gKi9cbmNsYXNzIFZvbHVtZUNvbnRyb2wgZXh0ZW5kcyBDb250cm9sRHJvcGRvd24ge1xuXG5cdGNvbnN0cnVjdG9yIChwbGF5ZXIsIG9wdGlvbnM9e30pIHtcblx0XHRvcHRpb25zID0gJC5leHRlbmQoe30sIHtcblx0XHRcdGljb25OYW1lIDogJ3ZvbHVtZS1kb3duJyxcblx0XHRcdGNsYXNzTmFtZSA6ICd2b2x1bWUtY29udHJvbCcsXG5cdFx0XHRuYW1lIDogJ3ZvbHVtZSdcblx0XHR9LCBvcHRpb25zKTtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXG5cdFx0aWYoIXBsYXllci52aWRlby5mZWF0dXJlQ29udHJvbFZvbHVtZSB8fCBJU19BTkRST0lEX1BIT05FKSB7XG5cdFx0XHR0aGlzLmVsZW1lbnQuaGlkZSgpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMucGxheWVyLm9uKCd2b2x1bWVjaGFuZ2UnLCAoZSwgZGF0YSkgPT4ge1xuXHRcdFx0Y29uc3QgdmlkZW8gPSB0aGlzLnBsYXllci52aWRlbztcblx0XHRcdHRoaXMudmFsdWUgPSB2aWRlby5tdXRlZCA/IDAgOiB2aWRlby52b2x1bWU7XG5cdFx0fSlcblx0fVxuXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0c3VwZXIuY3JlYXRlRWxlbWVudCgpO1xuXHRcdGxldCBkcmFnID0gZmFsc2U7XG5cdFx0Y29uc3QgdmlkZW8gPSB0aGlzLnBsYXllci52aWRlbztcblxuXHRcdHRoaXMubWFya2VyID0gJCgnPGRpdi8+JykuYWRkQ2xhc3MoJ3ZvbHVtZS1tYXJrZXInKTtcblxuXHRcdHRoaXMuYWN0aXZlID0gJCgnPGRpdi8+JykuYWRkQ2xhc3MoJ3ZvbHVtZS1hY3RpdmUnKTtcblxuXHRcdHRoaXMubGluZSA9ICQoJzxkaXYvPicpXG5cdFx0XHQuYWRkQ2xhc3MoJ3ZvbHVtZS1saW5lJylcblx0XHRcdC5hcHBlbmQodGhpcy5hY3RpdmUpXG5cdFx0XHQuYXBwZW5kKHRoaXMubWFya2VyKVxuXHRcdFx0Lm9uKCdjbGljaycsIChlKSA9PiB7XG5cdFx0XHRcdGlmIChkcmFnKSByZXR1cm47XG5cdFx0XHRcdGxldCBwID0gdGhpcy5nZXRQb3NpdGlvbihlLnBhZ2VZKTtcblx0XHRcdFx0aWYgKHAgPj0gMCAmJiBwIDw9IDEpIHtcblx0XHRcdFx0XHRpZih2aWRlby5tdXRlZCkge1xuXHRcdFx0XHRcdFx0dmlkZW8ubXV0ZWQgPSBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dmlkZW8udm9sdW1lID0gMSAtIHA7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5kcm9wZG93bkNvbnRlbnRcblx0XHRcdC5hZGRDbGFzcygndm9sdW1lLXNsaWRlcicpXG5cdFx0XHQuYXBwZW5kKHRoaXMubGluZSk7XG5cblx0XHR0aGlzLmljb24uZWxlbWVudC5hdHRyKCd0aXRsZScsICfQntGC0LrQu9GO0YfQuNGC0Ywg0LfQstGD0LonKTtcblxuXHRcdHRoaXMubWFya2VyLm9uKCdtb3VzZWRvd24nLCAoZSkgPT4ge1xuXHRcdFx0aWYgKGUud2hpY2ggIT09IDEpIHJldHVybjtcblx0XHRcdGRyYWcgPSB0cnVlO1xuXHRcdH0pO1xuXG5cdFx0JChkb2N1bWVudCkub24oe1xuXHRcdFx0bW91c2Vtb3ZlIDogKGUpID0+IHtcblx0XHRcdFx0aWYgKCFkcmFnKSByZXR1cm47XG5cdFx0XHRcdGxldCBwID0gdGhpcy5nZXRQb3NpdGlvbihlLnBhZ2VZKTtcblx0XHRcdFx0aWYgKHAgPj0gMCAmJiBwIDw9IDEpIHtcblx0XHRcdFx0XHRpZih2aWRlby5tdXRlZCkge1xuXHRcdFx0XHRcdFx0dmlkZW8ubXV0ZWQgPSBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dmlkZW8udm9sdW1lID0gMSAtIHBcblx0XHRcdFx0fVxuXHRcdFx0fSxcblxuXHRcdFx0bW91c2V1cCA6IChlKSA9PiB7XG5cdFx0XHRcdGRyYWcgPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50O1xuXHR9XG5cblxuXHRzZXQgdmFsdWUgKHZhbHVlKSB7XG5cdFx0dGhpcy5pY29uLmljb25OYW1lID0gdGhpcy5wbGF5ZXIuY2FsY1ZvbHVtZUljb24odmFsdWUpO1xuXG5cdFx0bGV0IHAgPSBNYXRoLnJvdW5kKHZhbHVlICogMTAwKS50b1N0cmluZygpICsgJyUnO1xuXHRcdHRoaXMuYWN0aXZlLmNzcygnaGVpZ2h0JywgcCk7XG5cdFx0dGhpcy5tYXJrZXIuY3NzKCdib3R0b20nLCBwKTtcblx0fVxuXG5cdHRvZ2dsZU11dGVkICgpIHtcblx0XHRjb25zdCB7IHZpZGVvIH0gPSB0aGlzLnBsYXllcjtcblxuXHRcdHZpZGVvLm11dGVkID0gIXZpZGVvLm11dGVkO1xuXHR9XG5cblx0Z2V0UG9zaXRpb24gKHkpIHtcblx0XHRyZXR1cm4gKHkgLSB0aGlzLmxpbmUub2Zmc2V0KCkudG9wKSAvIHRoaXMubGluZS5oZWlnaHQoKTtcblx0fVxuXG5cdG9uQ2xpY2sgKGUpIHtcblx0XHRzdXBlci5vbkNsaWNrKGUpO1xuXHRcdHRoaXMudG9nZ2xlTXV0ZWQoKTtcblx0fVxuXG5cdG9uUGxheWVySW5pdGVkKCkge1xuXHRcdGlmKCF0aGlzLnBsYXllci52aWRlby5mZWF0dXJlQ29udHJvbFZvbHVtZSkge1xuXHRcdFx0dGhpcy5lbGVtZW50LmhpZGUoKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy52YWx1ZSA9IHRoaXMucGxheWVyLnZpZGVvLmRlZmF1bHRWb2x1bWU7XG5cdH1cblxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ1ZvbHVtZUNvbnRyb2wnLCBWb2x1bWVDb250cm9sKTtcbkNvbnRyb2wucmVnaXN0ZXJDb250cm9sKCd2b2x1bWUnLCBWb2x1bWVDb250cm9sKTtcbmV4cG9ydCBkZWZhdWx0IFZvbHVtZUNvbnRyb2w7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9Wb2x1bWVDb250cm9sLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBDb250cm9sRHJvcGRvd24uanNcbiAqL1xuXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL0NvbnRyb2wnO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgeyBJU19NT0JJTEUgfSBmcm9tICcuLi91dGlscy9icm93c2VyJztcblxuLyoqXG4gKiBAY2xhc3MgQ29udHJvbERyb3Bkb3duXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAcHJvcGVydHkge2pRdWVyeX0gZHJvcGRvd25Db250ZW50IENvbnRlbnQgb2YgcG9wdXBcbiAqIEBleHRlbmRzIENvbnRyb2xcbiAqL1xuY2xhc3MgQ29udHJvbERyb3Bkb3duIGV4dGVuZHMgQ29udHJvbCB7XG5cblx0Y29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHR0YWcgOiAnZGl2Jyxcblx0XHR9LCBvcHRpb25zKTtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXHRcdHRoaXMuX29wZW5lZCA9IGZhbHNlO1xuXHRcdHRoaXMuZWxlbWVudC5vbignbW91c2VlbnRlcicsIHRoaXMub3Blbi5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ21vdXNlbGVhdmUnLCB0aGlzLmNsb3NlLmJpbmQodGhpcykpO1xuXHRcdGlmKElTX01PQklMRSkge1xuXHRcdFx0dGhpcy5lbGVtZW50Lm9uKCd0YXAnLCB0aGlzLnRvZ2dsZS5iaW5kKHRoaXMpKTtcblx0XHRcdCQoZG9jdW1lbnQpLm9uKCd0b3VjaGVuZCB0b3VjaHN0YXJ0IGNsaWNrJywgdGhpcy5vbkRvY3VtZW50RXZlbnRzLmJpbmQodGhpcykpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0c3VwZXIuY3JlYXRlRWxlbWVudCgpO1xuXHRcdHRoaXMuZHJvcGRvd25Db250ZW50ID0gJCgnPGRpdiAvPicpLmFkZENsYXNzKCdjb250cm9sLWRyb3Bkb3duX19jb250ZW50Jyk7XG5cdFx0dGhpcy5lbGVtZW50LmFwcGVuZCh0aGlzLmRyb3Bkb3duQ29udGVudCk7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRidWlsZENTU0NsYXNzKCkge1xuXHRcdHJldHVybiBgY29udHJvbC1kcm9wZG93biAke3N1cGVyLmJ1aWxkQ1NTQ2xhc3MoKX1gXG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRvbkNsaWNrKGUpIHtcblx0XHRpZigkKGUudGFyZ2V0KS5jbG9zZXN0KHRoaXMuZHJvcGRvd25Db250ZW50KS5sZW5ndGggPiAwKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0c3VwZXIub25DbGljayhlKTtcblx0fVxuXG5cdHRvZ2dsZSgpIHtcblx0XHRpZih0aGlzLmRpc2FibGUpIHRydWU7XG5cdFx0aWYodGhpcy5fb3BlbmVkKSB7XG5cdFx0XHR0aGlzLmNsb3NlKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMub3BlbigpO1xuXHRcdH1cblx0fVxuXG5cdG9wZW4oKSB7XG5cdFx0aWYodGhpcy5kaXNhYmxlKSByZXR1cm47XG5cdFx0dGhpcy5fb3BlbmVkID0gdHJ1ZTtcblx0XHR0aGlzLmRyb3Bkb3duQ29udGVudC5zaG93KCk7XG5cdH1cblxuXHRjbG9zZSgpIHtcblx0XHRpZih0aGlzLmRpc2FibGUpIHJldHVybjtcblx0XHR0aGlzLl9vcGVuZWQgPSBmYWxzZTtcblx0XHR0aGlzLmRyb3Bkb3duQ29udGVudC5oaWRlKCk7XG5cdH1cblxuXHRvbkRvY3VtZW50RXZlbnRzKGUpIHtcblx0XHRpZihcblx0XHRcdCEoJChlLnRhcmdldCkuY2xvc2VzdCh0aGlzLmVsZW1lbnQpLmxlbmd0aCA+IDApICYmXG5cdFx0XHQhKCQoZS50YXJnZXQpLmNsb3Nlc3QodGhpcy5kcm9wZG93bkNvbnRlbnQpLmxlbmd0aCA+IDApXG5cdFx0KSB7XG5cdFx0XHRpZih0aGlzLl9vcGVuZWQpe1xuXHRcdFx0XHR0aGlzLmNsb3NlKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdDb250cm9sRHJvcGRvd24nLCBDb250cm9sRHJvcGRvd24pO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ2Ryb3Bkb3duJywgQ29udHJvbERyb3Bkb3duKTtcbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xEcm9wZG93bjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL0NvbnRyb2xEcm9wZG93bi5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgVGltZWxpbmVDb250cm9sLmpzXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vQ29tcG9uZW50JztcbmltcG9ydCBDb250cm9sIGZyb20gJy4uL0NvbnRyb2wnO1xuaW1wb3J0IENvbnRyb2xUZXh0IGZyb20gJy4uL0NvbnRyb2xUZXh0JztcbmltcG9ydCBCdWZmZXJlZFJhbmdlcyBmcm9tICcuL0J1ZmZlcmVkUmFuZ2VzJztcbmltcG9ydCBNYXJrZXIgZnJvbSAnLi9NYXJrZXInO1xuaW1wb3J0IHsgc2Vjb25kc1RvVGltZSB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAY2xhc3MgVGltZWxpbmVDb250cm9sXG4gKiBAcHJvcGVydHkge0NvbnRyb2xUZXh0fSBjdXJyZW50VGltZSBDdXJyZW50IHRpbWUncyB0ZXh0XG4gKiBAcHJvcGVydHkge0NvbnRyb2xUZXh0fSB0b3RhbFRpbWUgVG90YWwgdGltZVxuICogQHByb3BlcnR5IHtqUXVlcnl9IGxpbmVcbiAqIEBleHRlbmRzIENvbnRyb2xcbiAqL1xuY2xhc3MgVGltZWxpbmVDb250cm9sIGV4dGVuZHMgQ29udHJvbCB7XG5cblx0Y29uc3RydWN0b3IgKHBsYXllciwgb3B0aW9ucz17fSkge1xuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0bmFtZSA6ICd0aW1lbGluZScsXG5cdFx0XHRjbGFzc05hbWUgOiAnY29udHJvbC10aW1lbGluZSB0aW1lbGluZS1jb250YWluZXInLFxuXHRcdFx0dGFnIDogJ2RpdicsXG5cdFx0fSwgb3B0aW9ucyk7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblxuXG5cdFx0dGhpcy5tYXJrZXIuZWxlbWVudC5vbignbGVwbGF5ZXJfbW91c2Vtb3ZlJywgdGhpcy5fb25NYXJrZXJNb3VzZW1vdmUuYmluZCh0aGlzKSk7XG5cblx0XHR0aGlzLm1hcmtlci5lbGVtZW50Lm9uKCdsZXBsYXllcl9tb3VzZWRvd24nLCB0aGlzLl9vbk1hcmtlck1vdXNlZG93bi5iaW5kKHRoaXMpKTtcblxuXHRcdHRoaXMucGxheWVyLm9uKCdzZWN0aW9uc2luaXQnLCB0aGlzLm9uU2VjdGlvbnNJbml0LmJpbmQodGhpcykpO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ3RpbWV1cGRhdGUnLCB0aGlzLl9vblRpbWVVcGRhdGUuYmluZCh0aGlzKSk7XG5cblx0XHQvLyB0aGlzLnBsYXllci5vbigndGltZXVwZGF0ZWxvYWQnLCB0aGlzLl9vblRpbWVVcGRhdGUuYmluZCh0aGlzKSlcblxuXHRcdHRoaXMucGxheWVyLm9uKCdkdXJhdGlvbmNoYW5nZScsIHRoaXMuX29uRHVyYXRpb25DaGFuZ2UuYmluZCh0aGlzKSk7XG5cdH1cblxuXHRfb25NYXJrZXJNb3VzZWRvd24oZSkge1xuXHRcdHRoaXMubWFya2VyU2hhZG93LmVsZW1lbnQuaGlkZSgpO1xuXHR9XG5cblx0X29uTWFya2VyTW91c2Vtb3ZlKGUsIGRhdGEpIHtcblx0XHRjb25zdCB4ID0gZGF0YS54O1xuXHRcdGNvbnN0IHAgPSB0aGlzLmdldFBvc2l0aW9uKHgpO1xuXHRcdGNvbnN0IHZpZGVvID0gdGhpcy5wbGF5ZXIudmlkZW87XG5cdFx0aWYgKHAgPiAwICYmIHAgPCAxKSB7XG5cdFx0XHR0aGlzLm1hcmtlci5tYXJrZXJUaW1lXG5cdFx0XHRcdC5zaG93KClcblx0XHRcdFx0Lmh0bWwoc2Vjb25kc1RvVGltZSh2aWRlby5kdXJhdGlvbiAqIHApKTtcblx0XHRcdC8vIHZpZGVvLmN1cnJlbnRUaW1lID0gdmlkZW8uZHVyYXRpb24gKiBwXG5cdFx0fVxuXHR9XG5cblx0X29uVGltZVVwZGF0ZShlLCBkYXRhKSB7XG5cdFx0Y29uc3QgZHVyYXRpb24gPSB0aGlzLnBsYXllci52aWRlby5kdXJhdGlvbjtcblx0XHRsZXQgY3VycmVudFRpbWUgPSB0aGlzLnBsYXllci5jdXJyZW50VGltZTtcblx0XHRpZihkYXRhICYmIGRhdGEuY3VycmVudFRpbWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0Y3VycmVudFRpbWUgPSBkYXRhLmN1cnJlbnRUaW1lO1xuXHRcdH1cblx0XHRsZXQgcGVyY2VudCA9IGN1cnJlbnRUaW1lIC8gZHVyYXRpb247XG5cblx0XHRpZihpc05hTihkdXJhdGlvbikgJiYgY3VycmVudFRpbWUgPT09IDApIHBlcmNlbnQgPSAwO1xuXG5cdFx0dGhpcy5tb3ZlKHsgcGVyY2VudCwgY3VycmVudFRpbWUgfSk7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdHN1cGVyLmNyZWF0ZUVsZW1lbnQoKTtcblx0XHRsZXQgdmlkZW8gPSB0aGlzLnBsYXllci52aWRlbztcblxuXHRcdHRoaXMuZHJhZyA9IGZhbHNlO1xuXG5cdFx0Ly8gQ3JlYXRlIGxhYmVsc1xuXHRcdHRoaXMuY3VycmVudFRpbWUgPSBuZXcgQ29udHJvbFRleHQodGhpcy5wbGF5ZXIsIHsgY2xhc3NOYW1lIDogJ3RpbWUtY3VycmVudCcgfSk7XG5cdFx0dGhpcy5jdXJyZW50VGltZS50ZXh0ID0gJzAwOjAwJztcblx0XHR0aGlzLnRvdGFsVGltZSA9IG5ldyBDb250cm9sVGV4dCh0aGlzLnBsYXllciwge2NsYXNzTmFtZSA6ICd0aW1lLXRvdGFsJyB9KTtcblxuXHRcdC8vIENyZWF0ZSBsaW5lIHdpdGggbWFya2VycyBhbmQgcGxheWVkIHJhbmdlXG5cblx0XHR0aGlzLm1hcmtlciA9IG5ldyBNYXJrZXIodGhpcy5wbGF5ZXIsIHtcblx0XHRcdGRyYWcgOiB0cnVlXG5cdFx0fSk7XG5cblx0XHR0aGlzLm1hcmtlclNoYWRvdyA9IG5ldyBNYXJrZXIodGhpcy5wbGF5ZXIsIHtcblx0XHRcdGNsYXNzTmFtZSA6ICdzaGFkb3cnXG5cdFx0fSk7XG5cdFx0dGhpcy5tYXJrZXJTaGFkb3cuZWxlbWVudC5oaWRlKCk7XG5cblxuXHRcdC8vIFBsYXllZCByYW5nZXNcblx0XHR0aGlzLnBsYXllZFJhbmdlcyA9ICQoJzxkaXYgLz4nKS5hZGRDbGFzcygndGltZS1wbGF5ZWQnKTtcblxuXG5cdFx0Ly8gQnVmZmVyZWQgcmFuZ2VzXG5cdFx0dGhpcy5idWZmZXJlZFJhbmdlcyA9IG5ldyBCdWZmZXJlZFJhbmdlcyh0aGlzLnBsYXllcikuZWxlbWVudDtcblxuXHRcdHRoaXMubGluZSA9ICQoJzxkaXYgLz4nKTtcblx0XHR0aGlzLmVtaXRUYXBFdmVudHModGhpcy5saW5lKVxuXG5cdFx0dGhpcy5saW5lXG5cdFx0XHQuYWRkQ2xhc3MoJ3RpbWVsaW5lJylcblx0XHRcdC5hcHBlbmQodGhpcy5tYXJrZXIuZWxlbWVudClcblx0XHRcdC5hcHBlbmQodGhpcy5tYXJrZXJTaGFkb3cuZWxlbWVudClcblx0XHRcdC5hcHBlbmQodGhpcy5wbGF5ZWRSYW5nZXMpXG5cdFx0XHQuYXBwZW5kKHRoaXMuYnVmZmVyZWRSYW5nZXMpXG5cdFx0XHQub24oe1xuXHRcdFx0XHRtb3VzZW1vdmUgOiAoZSkgPT4ge1xuXHRcdFx0XHRcdGlmICh0aGlzLm1hcmtlci5kcmFnKSByZXR1cm47XG5cblx0XHRcdFx0XHRsZXQgcCA9IHRoaXMuZ2V0UG9zaXRpb24oZS5wYWdlWCk7XG5cdFx0XHRcdFx0aWYgKHAgPiAwICYmIHAgPCAxKSB7XG5cdFx0XHRcdFx0XHR0aGlzLm1hcmtlclNoYWRvdy5lbGVtZW50XG5cdFx0XHRcdFx0XHRcdC5zaG93KClcblx0XHRcdFx0XHRcdFx0LmNzcygnbGVmdCcsIHAgKiAxMDAgKyAnJScpO1xuXHRcdFx0XHRcdFx0dGhpcy5tYXJrZXJTaGFkb3dcblx0XHRcdFx0XHRcdFx0Lm1hcmtlclRpbWVcblx0XHRcdFx0XHRcdFx0LnNob3coKVxuXHRcdFx0XHRcdFx0XHQuaHRtbChzZWNvbmRzVG9UaW1lKHZpZGVvLmR1cmF0aW9uICogcCkpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aGlzLm1hcmtlclNoYWRvdy5lbGVtZW50LmhpZGUoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0bW91c2VsZWF2ZSA6IChlKSA9PiB7XG5cdFx0XHRcdFx0aWYgKHRoaXMuZHJhZykgcmV0dXJuO1xuXHRcdFx0XHRcdHRoaXMubWFya2VyU2hhZG93LmVsZW1lbnQuaGlkZSgpXG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0bW91c2Vkb3duIDogKGUpID0+IHtcblx0XHRcdFx0fSxcblxuXHRcdFx0XHRjbGljayA6IHRoaXMuX29uTGluZUNsaWNrLmJpbmQodGhpcyksXG5cdFx0XHRcdHRhcCA6IHRoaXMuX29uTGluZUNsaWNrLmJpbmQodGhpcyksXG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuZWxlbWVudC5hZGRDbGFzcygndGltZWxpbmUtY29udGFpbmVyJylcblx0XHRcdC5hcHBlbmQoJCgnPGRpdiAvPicpXG5cdFx0XHRcdC5hZGRDbGFzcygndGltZWxpbmUtc3ViY29udGFpbmVyJylcblx0XHRcdFx0LmFwcGVuZCh0aGlzLmN1cnJlbnRUaW1lLmVsZW1lbnQpXG5cdFx0XHRcdC5hcHBlbmQodGhpcy5saW5lKVxuXHRcdFx0XHQuYXBwZW5kKHRoaXMudG90YWxUaW1lLmVsZW1lbnQpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdG9uQ2xpY2soZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0fVxuXG5cdF9vbkxpbmVDbGljayhlKSB7XG5cdFx0aWYgKHRoaXMuZHJhZykgcmV0dXJuO1xuXHRcdGNvbnN0IHZpZGVvID0gdGhpcy5wbGF5ZXIudmlkZW87XG5cdFx0dGhpcy5tb3ZlKHsgcGVyY2VudCA6IHRoaXMuZ2V0UG9zaXRpb24oZS5wYWdlWCl9KTtcblx0XHR2aWRlby5jdXJyZW50VGltZSA9ICh2aWRlby5kdXJhdGlvbiAqIHRoaXMuZ2V0UG9zaXRpb24oZS5wYWdlWCkpO1xuXHR9XG5cblx0b25TZWN0aW9uc0luaXQoZSkge1xuXHRcdGNvbnN0IGR1cmF0aW9uID0gdGhpcy5wbGF5ZXIudmlkZW8uZHVyYXRpb247XG5cdFx0aWYoaXNOYU4oZHVyYXRpb24pKSB7XG5cdFx0XHRyZXR1cm5cblx0XHR9XG5cdFx0aWYgKHRoaXMucGxheWVyLnNlY3Rpb25zKSB7XG5cdFx0XHR0aGlzLnVwZGF0ZVNlY3Rpb25SYW5nZXModGhpcy5wbGF5ZXIuc2VjdGlvbnMuaXRlbXMpO1xuXHRcdH1cblx0fVxuXG5cdHVwZGF0ZVNlY3Rpb25SYW5nZXMoaXRlbXMpIHtcblx0XHRpZih0aGlzLnNlY3Rpb25zID09IG51bGwgfHwgdGhpcy5zZWN0aW9ucy5sZW5ndGggPT09IDApIHtcblx0XHRcdHRoaXMuc2VjdGlvbnMgPSB0aGlzLmNyZWF0ZVNlY3Rpb25SYW5nZXMoaXRlbXMpO1xuXHRcdFx0dGhpcy5saW5lLmFwcGVuZCh0aGlzLnNlY3Rpb25zKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zZWN0aW9ucy5odG1sKHRoaXMuY3JlYXRlU2VjdGlvblJhbmdlcyhpdGVtcykpO1xuXHRcdH1cblx0fVxuXG5cdGNyZWF0ZVNlY3Rpb25SYW5nZXMoaXRlbXMpIHtcblx0XHRjb25zdCBkdXJhdGlvbiA9IHRoaXMucGxheWVyLnZpZGVvLmR1cmF0aW9uO1xuXHRcdGxldCByZXN1bHQgPSAkKCc8ZGl2IC8+JykuYWRkQ2xhc3MoJ2xlcGxheWVyLXRpbWVsaW5lLXNlY3Rpb25zJyk7XG5cdFx0aXRlbXMuZm9yRWFjaCgoc2VjdGlvbikgPT4ge1xuXHRcdFx0Y29uc3QgbGVuZ3RoID0gKHNlY3Rpb24uZW5kIC0gc2VjdGlvbi5iZWdpbik7XG5cdFx0XHRjb25zdCBpdGVtID0gJCgnPGRpdiAvPicpXG5cdFx0XHRcdC5hZGRDbGFzcygnbGVwbGF5ZXItdGltZWxpbmUtc2VjdGlvbicpXG5cdFx0XHRcdC5jc3Moe1xuXHRcdFx0XHRcdHdpZHRoIDogbGVuZ3RoIC8gZHVyYXRpb24gKiAxMDAgKyAnJScsXG5cdFx0XHRcdFx0bGVmdCA6IHNlY3Rpb24uYmVnaW4gLyBkdXJhdGlvbiAqIDEwMCArICclJ1xuXHRcdFx0XHR9KTtcblx0XHRcdHJlc3VsdC5hcHBlbmQoaXRlbSk7XG5cdFx0fSlcblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0Z2V0UG9zaXRpb24gKHgpIHtcblx0XHRyZXR1cm4gKHggLSB0aGlzLmxpbmUub2Zmc2V0KCkubGVmdCkgLyB0aGlzLmxpbmUud2lkdGgoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBNb3ZlIG1hcmtlciBvbiB0aW1lbGluZSBvbiBwZXJjZW50IGZyb20gYXJndW1lbnQsIG5vdCBmcm9tIHZpZGVvLmN1cnJlbnRUaW1lXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBwZXJjZW50IFRoZSBwZXJjZW50IHdoaWNoIHlvdSB3YW50IHRvIG1vdmUgbWFya2VyIG9uIHRpbWVsaW5lXG5cdCAqL1xuXHRtb3ZlICh7IHBlcmNlbnQsIGN1cnJlbnRUaW1lIH0pIHtcblx0XHRpZihjdXJyZW50VGltZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRjdXJyZW50VGltZSA9IHRoaXMucGxheWVyLnZpZGVvLmR1cmF0aW9uICogcGVyY2VudDtcblx0XHR9XG5cblx0XHRpZihpc05hTihjdXJyZW50VGltZSkpIHJldHVybjtcblx0XHRwZXJjZW50ID0gcGVyY2VudCAqIDEwMDtcblx0XHR0aGlzLm1hcmtlci5lbGVtZW50LmNzcygnbGVmdCcsIHBlcmNlbnQgKyAnJScpO1xuXHRcdHRoaXMucGxheWVkUmFuZ2VzLmNzcygnd2lkdGgnLCBwZXJjZW50ICsgJyUnKTtcblx0XHR0aGlzLmN1cnJlbnRUaW1lLnRleHQgPSBzZWNvbmRzVG9UaW1lKGN1cnJlbnRUaW1lKTtcblx0fVxuXG5cdHVwZGF0ZUxhYmVscygpIHtcblx0XHRjb25zdCB2aWRlbyA9IHRoaXMucGxheWVyLnZpZGVvO1xuXHRcdHRoaXMudG90YWxUaW1lLnRleHQgPSBzZWNvbmRzVG9UaW1lKDAsIE1hdGguZmxvb3IodmlkZW8uZHVyYXRpb24gLyAzNjAwKSA+IDApO1xuXG5cdFx0Ly8gY29uc3Qgd2lkdGggPSB0aGlzLnRvdGFsVGltZS5lbGVtZW50LndpZHRoKCk7XG5cblx0XHR0aGlzLnRvdGFsVGltZS50ZXh0ID0gc2Vjb25kc1RvVGltZSh2aWRlby5kdXJhdGlvbik7XG5cdFx0dGhpcy5jdXJyZW50VGltZS50ZXh0ID0gc2Vjb25kc1RvVGltZSh2aWRlby5jdXJyZW50VGltZSB8fCAwKTtcblx0XHQvLyB0aGlzLmN1cnJlbnRUaW1lLmVsZW1lbnQuY3NzKHtcblx0XHQvLyBcdHdpZHRoXG5cdFx0Ly8gfSlcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdG9uUGxheWVySW5pdGVkKGUpIHtcblx0XHR0aGlzLnVwZGF0ZUxhYmVscygpO1xuXHRcdGlmICh0aGlzLnBsYXllci5zZWN0aW9ucykge1xuXHRcdFx0dGhpcy51cGRhdGVTZWN0aW9uUmFuZ2VzKHRoaXMucGxheWVyLnNlY3Rpb25zLml0ZW1zKTtcblx0XHR9XG5cdH1cblxuXHRfaW5pdFdhdGNoQnVmZmVyICgpIHtcblx0XHRjbGVhckludGVydmFsKHRoaXMud2F0Y2hCdWZmZXJJbnRlcnZhbCk7XG5cdFx0bGV0IHZpZGVvID0gdGhpcy5wbGF5ZXIudmlkZW87XG5cdFx0bGV0IHVwZGF0ZVByb2dyZXNzQmFyID0gKCkgPT4ge1xuXHRcdFx0Y29uc3QgRU5EID0gMTtcblx0XHRcdGNvbnN0IFNUQVJUID0gMDtcblx0XHRcdGxldCByZXN1bHQgPSAkKCcnKTtcblx0XHRcdHZpZGVvLmxvYWRlZC5mb3JFYWNoKGl0ZW0gPT4ge1xuXHRcdFx0XHRsZXQgZG9tSXRlbSA9ICQoJzxkaXYgLz4nKS5hZGRDbGFzcygndGltZS1idWZmZXJlZCcpO1xuXHRcdFx0XHRkb21JdGVtLmNzcyh7XG5cdFx0XHRcdFx0bGVmdCA6IGl0ZW1bU1RBUlRdICogMTAwICsgJyUnLFxuXHRcdFx0XHRcdHdpZHRoIDogKGl0ZW1bRU5EXSAtIGl0ZW1bU1RBUlRdKSAqIDEwMCArICclJ1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0cmVzdWx0ID0gcmVzdWx0LmFkZChkb21JdGVtKTtcblx0XHRcdH0pO1xuXHRcdFx0dGhpcy5idWZmZXJlZC5odG1sKHJlc3VsdCk7XG5cdFx0XHRpZiAodmlkZW8ubG9hZGVkLmxlbmd0aCAmJiAoMSAtIHZpZGVvLmxvYWRlZFNpemUpIDw9IDAuMDUpIHtcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLndhdGNoQnVmZmVySW50ZXJ2YWwpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHR0aGlzLndhdGNoQnVmZmVySW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCh1cGRhdGVQcm9ncmVzc0JhciwgNTAwKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBPbiBkdXJhdGlvbmNoYW5nZSBldmVudCBoYW5kbGVyXG5cdCAqL1xuXHRfb25EdXJhdGlvbkNoYW5nZSAoKSB7XG5cdFx0dGhpcy51cGRhdGVMYWJlbHMoKTtcblx0XHRpZiAodGhpcy5wbGF5ZXIuc2VjdGlvbnMpIHtcblx0XHRcdHRoaXMudXBkYXRlU2VjdGlvblJhbmdlcyh0aGlzLnBsYXllci5zZWN0aW9ucy5pdGVtcyk7XG5cdFx0fVxuXHR9XG5cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdUaW1lbGluZUNvbnRyb2wnLCBUaW1lbGluZUNvbnRyb2wpO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ3RpbWVsaW5lJywgVGltZWxpbmVDb250cm9sKTtcbmV4cG9ydCBkZWZhdWx0IFRpbWVsaW5lQ29udHJvbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL1RpbWVsaW5lL1RpbWVsaW5lQ29udHJvbC5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgQ29udHJvbFRleHQuanNcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9Db250cm9sJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBjbGFzcyBDb250cm9sVGV4dFxuICogQGV4bnRlZHMgQ29udHJvbFxuICovXG5jbGFzcyBDb250cm9sVGV4dCBleHRlbmRzIENvbnRyb2wge1xuXHRjb25zdHJ1Y3RvciAocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRjbGFzc05hbWUgOiAnJyxcblx0XHRcdHRhZyA6ICdkaXYnLFxuXHRcdH0sIG9wdGlvbnMpO1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdHN1cGVyLmNyZWF0ZUVsZW1lbnQoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGJ1aWxkQ1NTQ2xhc3MoKSB7XG5cdFx0cmV0dXJuIGBjb250cm9sLXRleHQgJHt0aGlzLm9wdGlvbnMuY2xhc3NOYW1lfWA7XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBTZXR0ZXIgb2YgdGV4dCBmaWVsZFxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuXHQgKi9cblxuXHRzZXQgdGV4dCAodmFsdWUpIHtcblx0XHR0aGlzLl90ZXh0ID0gdmFsdWU7XG5cdFx0dGhpcy5lbGVtZW50Lmh0bWwodmFsdWUpO1xuXHR9XG5cblx0Z2V0IHRleHQgKCkge1xuXHRcdHJldHVybiB0aGlzLl90ZXh0XG5cdH1cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdDb250cm9sVGV4dCcsIENvbnRyb2xUZXh0KTtcbkNvbnRyb2wucmVnaXN0ZXJDb250cm9sKCd0ZXh0JywgQ29udHJvbFRleHQpO1xuZXhwb3J0IGRlZmF1bHQgQ29udHJvbFRleHQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9Db250cm9sVGV4dC5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgQnVmZmVyZWRSYW5nZXMuanNcbiAqL1xuXG5pbXBvcnQgeyBwZXJjZW50aWZ5LCBjcmVhdGVFbCB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vQ29tcG9uZW50JztcblxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAY2xhc3MgQnVmZmVyZWRSYW5nZXNcbiAqIEBleHRlbmRzIENvbnRyb2xcbiAqL1xuXG5jbGFzcyBCdWZmZXJlZFJhbmdlcyBleHRlbmRzIENvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblxuXHRcdHRoaXMucGxheWVyLm9uKCdwcm9ncmVzcycsIHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xuXHRcdHRoaXMucGxheWVyLm9uKCdzZWVrZWQnLCB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLnBsYXllci5vbignbG9hZHN0YXJ0JywgdGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdHRoaXMucmFuZ2UgPSBjcmVhdGVFbCgnZGl2Jywge1xuXHRcdFx0Y2xhc3NOYW1lIDogJ2xlcGxheWVyLXRpbWVsaW5lLWJ1ZmZlcmVkX19yYW5nZSdcblx0XHR9KTtcblxuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQgPSBjcmVhdGVFbCgnZGl2Jywge1xuXHRcdFx0Y2xhc3NOYW1lIDogJ2xlcGxheWVyLXRpbWVsaW5lLWJ1ZmZlcmVkJ1xuXHRcdH0pLmFwcGVuZCh0aGlzLnJhbmdlKTtcblx0fVxuXG5cblx0dXBkYXRlKCkge1xuXHRcdGNvbnN0IGJ1ZmZlcmVkID0gdGhpcy5wbGF5ZXIudmlkZW8uYnVmZmVyZWQ7XG5cdFx0Y29uc3QgZHVyYXRpb24gPSB0aGlzLnBsYXllci52aWRlby5kdXJhdGlvbjtcblx0XHRpZihidWZmZXJlZCA9PSBudWxsKSByZXR1cm47XG5cblx0XHRsZXQgZW5kID0gMDtcblx0XHRpZiAoYnVmZmVyZWQubGVuZ3RoID4gMCkge1xuXHRcdFx0ZW5kID0gYnVmZmVyZWQuZW5kKGJ1ZmZlcmVkLmxlbmd0aCAtIDEpO1xuXHRcdH1cblxuXHRcdGxldCB3aWR0aCA9IDA7XG5cdFx0aWYgKGR1cmF0aW9uID4gMCkge1xuXHRcdFx0d2lkdGggPSBwZXJjZW50aWZ5KGVuZCwgZHVyYXRpb24pICogMTAwICsgJyUnXG5cdFx0fVxuXHRcdHRoaXMucmFuZ2UuY3NzKHsgd2lkdGggfSlcblx0fVxufVxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdCdWZmZXJlZFJhbmdlcycsIEJ1ZmZlcmVkUmFuZ2VzKTtcbmV4cG9ydCBkZWZhdWx0IEJ1ZmZlcmVkUmFuZ2VzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvVGltZWxpbmUvQnVmZmVyZWRSYW5nZXMuanMiLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9Db21wb25lbnQnO1xuXG5jbGFzcyBNYXJrZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcblxuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0ZHJhZyA6IGZhbHNlLFxuXHRcdFx0Y2xhc3NOYW1lIDogJydcblx0XHR9LCBvcHRpb25zKTtcblxuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdtb3VzZWRvd24nLCB0aGlzLl9vbk1vdXNlZG93bi5iaW5kKHRoaXMpKTtcblxuXHRcdCQoZG9jdW1lbnQpLm9uKHtcblxuXHRcdFx0bW91c2Vtb3ZlIDogKGUpID0+IHtcblx0XHRcdFx0aWYgKCF0aGlzLmRyYWcpIHJldHVybjtcblx0XHRcdFx0dGhpcy5lbGVtZW50LnRyaWdnZXIoJ2xlcGxheWVyX21vdXNlbW92ZScsIHsgeCA6IGUucGFnZVggfSk7XG5cdFx0XHR9LFxuXG5cdFx0XHRtb3VzZXVwIDogKGUpID0+IHtcblx0XHRcdFx0aWYgKCF0aGlzLmRyYWcpIHJldHVybjtcblx0XHRcdFx0dGhpcy5kcmFnID0gZmFsc2U7XG5cdFx0XHRcdHRoaXMubWFya2VyVGltZS5oaWRlKCk7XG5cdFx0XHRcdHRoaXMuZWxlbWVudC50cmlnZ2VyKCdsZXBsYXllcl9tb3VzZXVwJywgeyB4IDogZS5wYWdlWCB9KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdHNldCBkcmFnKHZhbHVlKSB7XG5cdFx0dGhpcy5fZHJhZyA9IHZhbHVlO1xuXHRcdHRoaXMuZWxlbWVudC50b2dnbGVDbGFzcygndGltZS1tYXJrZXItLWRyYWcnLCB2YWx1ZSk7XG5cdH1cblxuXHRnZXQgZHJhZygpIHtcblx0XHRyZXR1cm4gdGhpcy5fZHJhZztcblx0fVxuXG5cdF9vbk1vdXNlZG93bihlKSB7XG5cdFx0aWYgKGUud2hpY2ggIT09IDEpIHJldHVybjtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0aWYodGhpcy5vcHRpb25zLmRyYWcpIHtcblx0XHRcdHRoaXMuZHJhZyA9IHRydWU7XG5cdFx0fVxuXHRcdHRoaXMuZWxlbWVudC50cmlnZ2VyKCdsZXBsYXllcl9tb3VzZWRvd24nKTtcblx0fVxuXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0Ly8gTWFya2VyIG9mIGN1cnJlbnQgdGltZSBvbiB0aW1lbGluZVxuXHRcdHRoaXMubWFya2VyVGltZSA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0LmFkZENsYXNzKCd0aW1lJylcblx0XHRcdC5oaWRlKCk7XG5cblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50ID0gJCgnPGRpdiAvPicpXG5cdFx0XHQuYWRkQ2xhc3MoYHRpbWUtbWFya2VyICR7dGhpcy5vcHRpb25zLmNsYXNzTmFtZX1gKVxuXHRcdFx0LmFwcGVuZCh0aGlzLm1hcmtlclRpbWUpXG5cblx0fVxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ01hcmtlcicsIE1hcmtlcik7XG5leHBvcnQgZGVmYXVsdCBNYXJrZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9UaW1lbGluZS9NYXJrZXIuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIFNlY3Rpb25Db250cm9sLmpzXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9Db250cm9sJztcbmltcG9ydCBDb250cm9sQ2hlY2tib3ggZnJvbSAnLi9Db250cm9sQ2hlY2tib3gnO1xuXG4vKipcbiAqIEBjbGFzcyBTZWN0aW9uQ29udHJvbFxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5jaGVja2VkPXRydWVdXG4gKiBAZXh0ZW5kcyBDb250cm9sQ2hlY2tib3hcbiAqL1xuY2xhc3MgU2VjdGlvbkNvbnRyb2wgZXh0ZW5kcyBDb250cm9sQ2hlY2tib3gge1xuXHRjb25zdHJ1Y3RvciAocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRpY29uTmFtZSA6ICdsaXN0LXVsJyxcblx0XHRcdGNsYXNzTmFtZSA6ICdzZWN0aW9uJyxcblx0XHRcdG5hbWUgOiAnc2VjdGlvbicsXG5cdFx0XHR0aXRsZSA6ICfQn9C+0LrQsNC30LDRgtGML9GB0LrRgNGL0YLRjCDRgdC10LrRhtC40LgnLFxuXHRcdFx0ZGlzYWJsZSA6IHRydWVcblx0XHR9LCBvcHRpb25zKTtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ3NlY3Rpb25zaW5pdCcsIHRoaXMuX29uU2VjdGlvbnNJbml0LmJpbmQodGhpcykpO1xuXHRcdHRoaXMucGxheWVyLm9uKCdzZWN0aW9uc3RvZ2dsZScsIHRoaXMuX29uU2VjdGlvblRvZ2dsZS5iaW5kKHRoaXMpKVxuXHR9XG5cblx0b25DaGVja2VkKGUsIGRhdGEpIHtcblx0XHRzdXBlci5vbkNoZWNrZWQoZSk7XG5cdFx0dGhpcy5wbGF5ZXIudG9nZ2xlU2VjdGlvbnMoZGF0YS5jaGVja2VkKTtcblx0fVxuXG5cdF9vblNlY3Rpb25Ub2dnbGUoZSwgZGF0YSkge1xuXHRcdGNvbnN0IHsgaXNWaXNpYmxlIH0gPSBkYXRhO1xuXHRcdGlmKHRoaXMuY2hlY2tlZCAhPT0gaXNWaXNpYmxlKSB7XG5cdFx0XHR0aGlzLmNoZWNrZWQgPSBpc1Zpc2libGU7XG5cdFx0fVxuXG5cdH1cblxuXHRfb25TZWN0aW9uc0luaXQoZSkge1xuXHRcdHRoaXMub3B0aW9ucy5kaXNhYmxlID0gdGhpcy5kaXNhYmxlID0gZmFsc2U7XG5cdFx0dGhpcy5jaGVja2VkID0gdHJ1ZTtcblx0fVxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ1NlY3Rpb25Db250cm9sJywgU2VjdGlvbkNvbnRyb2wpO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ3NlY3Rpb24nLCBTZWN0aW9uQ29udHJvbCk7XG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uQ29udHJvbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL1NlY3Rpb25Db250cm9sLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBjb250cm9sLWNoZWNrYm94LmpzXG4gKi9cblxuXG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL0NvbnRyb2wnO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5cbi8qKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5jaGVja2VkPWZhbHNlXVxuICogQGNsYXNzIENvbnRyb2xDaGVja2JveCBUb2dnYWJsZSBjb250cm9sXG4gKi9cbmNsYXNzIENvbnRyb2xDaGVja2JveCBleHRlbmRzIENvbnRyb2wge1xuXG5cdGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucz17fSkge1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cdFx0dGhpcy5jaGVja2VkID0gdGhpcy5vcHRpb25zLmNoZWNrZWQgfHwgZmFsc2U7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdsZXBsYXllcl9jaGVja2VkJywgdGhpcy5vbkNoZWNrZWQuYmluZCh0aGlzKSlcblx0fVxuXG5cblx0LyoqXG5cdCAqIFNldHRlciBmb3IgY2hlY2tlZCBwcm9wZXJ0eVxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gdmFsXG5cdCAqL1xuXHRzZXQgY2hlY2tlZCAodmFsKSB7XG5cdFx0aWYgKHRoaXMuZGlzYWJsZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR2YWwgPSAhIXZhbDtcblx0XHR0aGlzLl9jaGVja2VkID0gdmFsXG5cdFx0dGhpcy5lbGVtZW50LnRvZ2dsZUNsYXNzKCdjb250cm9sLWNoZWNrYm94LS1jaGVja2VkJywgdmFsKTtcblx0XHR0aGlzLmVsZW1lbnQudHJpZ2dlcignbGVwbGF5ZXJfY2hlY2tlZCcsIHsgY2hlY2tlZCA6IHZhbCB9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXR0ZXIgZm9yIGNoZWNrZWQgcHJvcGVyeVxuXHQgKiBAcHVibGljXG5cdCAqIEByZXR1cm4ge2Jvb2xlYW59XG5cdCAqL1xuXHRnZXQgY2hlY2tlZCAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2NoZWNrZWQ7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRvbkNsaWNrIChlKSB7XG5cdFx0c3VwZXIub25DbGljayhlKTtcblx0XHR0aGlzLmNoZWNrZWQgPSAhdGhpcy5jaGVja2VkO1xuXHR9XG5cblx0LyoqXG5cdCAqIE9uIGNoZWNrZWQgZXZlbnQgaGFuZGxlclxuXHQgKlxuXHQgKiBAcGFyYW0ge0V2ZW50fSBlXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG5cdCAqL1xuXHRvbkNoZWNrZWQoZSwgZGF0YSkge1xuXG5cdH1cblxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGJ1aWxkQ1NTQ2xhc3MoKSB7XG5cdFx0cmV0dXJuIGBjb250cm9sLWNoZWNrYm94ICR7c3VwZXIuYnVpbGRDU1NDbGFzcygpfWBcblx0fVxuXG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnQ29udHJvbENoZWNrYm94JywgQ29udHJvbENoZWNrYm94KTtcbkNvbnRyb2wucmVnaXN0ZXJDb250cm9sKCdjaGVja2JveCcsIENvbnRyb2xDaGVja2JveCk7XG5leHBvcnQgZGVmYXVsdCBDb250cm9sQ2hlY2tib3g7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9Db250cm9sQ2hlY2tib3guanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIEZ1bGxzY3JlZW5Db250cm9sLmpzXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9Db250cm9sJztcblxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAY2xhc3MgRnVsbHNjcmVlbkNvbnRyb2xcbiAqIEBleHRlbmRzIENvbnRyb2xcbiAqL1xuY2xhc3MgRnVsbHNjcmVlbkNvbnRyb2wgZXh0ZW5kcyBDb250cm9sIHtcblx0Y29uc3RydWN0b3IgKHBsYXllciwgb3B0aW9ucz17fSkge1xuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0aWNvbk5hbWUgOiAnYXJyb3dzLWFsdCcsXG5cdFx0XHRjbGFzc05hbWUgOiAnZnVsbHNjcmVlbicsXG5cdFx0XHR0aXRsZSA6ICfQoNCw0LfQstC10YDQvdGD0YLRjC/RgdCy0LXRgNC90YPRgtGMINC90LAg0L/QvtC70L3Ri9C5INGN0LrRgNCw0L0nLFxuXHRcdFx0bmFtZSA6ICdmdWxsc2NyZWVuJ1xuXHRcdH0sIG9wdGlvbnMpO1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRvbkNsaWNrKGUpIHtcblx0XHRzdXBlci5vbkNsaWNrKGUpXG5cdFx0dGhpcy5wbGF5ZXIudG9nZ2xlRnVsbHNjcmVlbigpO1xuXHR9XG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnRnVsbHNjcmVlbkNvbnRyb2wnLCBGdWxsc2NyZWVuQ29udHJvbCk7XG5Db250cm9sLnJlZ2lzdGVyQ29udHJvbCgnZnVsbHNjcmVlbicsIEZ1bGxzY3JlZW5Db250cm9sKTtcbmV4cG9ydCBkZWZhdWx0IEZ1bGxzY3JlZW5Db250cm9sO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvRnVsbHNjcmVlbkNvbnRyb2wuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIFJhdGVDb250cm9sLmpzXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9Db250cm9sJztcbmltcG9ydCBDb250cm9sVGV4dCBmcm9tICcuL0NvbnRyb2xUZXh0JztcbmltcG9ydCBDb29raWUgZnJvbSAnLi4vdXRpbHMvY29va2llJztcblxuLyoqXG4gKiBAY2xhc3MgUmF0ZUNvbnRyb2xcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEBwcm9wZXJ0eSB7Q29udHJvbH0gZG93bkNvbnRyb2wgIERvd24gcmF0ZSBjb250cm9sXG4gKiBAcHJvcGVydHkge0NvbnRyb2x9IHVwQ29udHJvbCAgVXAgcmF0ZSBjb250cm9sXG4gKiBAcHJvcGVydHkge0NvbnRyb2xUZXh0fSBjdXJyZW50UmF0ZSBDb250cm9sIG9mIGN1dXJlbnQgcmF0ZVxuICogQGV4dGVuZHMgQ29udHJvbFxuICovXG5jbGFzcyBSYXRlQ29udHJvbCBleHRlbmRzIENvbnRyb2wge1xuXHRjb25zdHJ1Y3RvciAocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRjbGFzc05hbWUgOiAnY29udHJvbC1jb250YWluZXInLFxuXHRcdFx0dGFnIDogJ2Rpdidcblx0XHR9LCBvcHRpb25zKTtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ3JhdGVjaGFuZ2UnLCAoKSA9PiB7XG5cdFx0XHR0aGlzLnVwZGF0ZSgpO1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHRzdXBlci5jcmVhdGVFbGVtZW50KCk7XG5cdFx0Y29uc3QgdmlkZW8gPSB0aGlzLnBsYXllci52aWRlbztcblxuXHRcdHRoaXMuZG93bkNvbnRyb2wgPSBuZXcgQ29udHJvbCh0aGlzLnBsYXllciwge1xuXHRcdFx0Y2xhc3NOYW1lIDogJ3JhdGUtZG93bicsXG5cdFx0XHRuYW1lIDogJ3JhdGUtZG93bicsXG5cdFx0XHRpY29uTmFtZSA6ICdiYWNrd2FyZCcsXG5cdFx0XHRjb2xsZWN0aW9uIDogdGhpcy5vcHRpb25zLmNvbGxlY3Rpb24sXG5cdFx0XHR0aXRsZSA6ICfQo9C80LXQvdGM0YjQuNGC0Ywg0YHQutC+0YDQvtGB0YLRjCDQv9GA0L7QuNCz0YDRi9Cy0LDQvdC40Y8nLFxuXHRcdFx0b25DbGljayA6IGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0dmlkZW8uZGVjcmVhc2VSYXRlKCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHR0aGlzLnVwQ29udHJvbCA9IG5ldyBDb250cm9sKHRoaXMucGxheWVyLCB7XG5cdFx0XHRjbGFzc05hbWUgOiAncmF0ZS11cCcsXG5cdFx0XHRuYW1lIDogJ3JhdGUtdXAnLFxuXHRcdFx0aWNvbk5hbWUgOiAnZm9yd2FyZCcsXG5cdFx0XHRjb2xsZWN0aW9uIDogdGhpcy5vcHRpb25zLmNvbGxlY3Rpb24sXG5cdFx0XHR0aXRsZSA6ICfQo9Cy0LXQu9C40YfQuNGC0Ywg0YHQutC+0YDQvtGB0YLRjCDQv9GA0L7QuNCz0YDRi9Cy0LDQvdC40Y8nLFxuXHRcdFx0b25DbGljayA6IGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0dmlkZW8uaW5jcmVhc2VSYXRlKCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHR0aGlzLmN1cnJlbnRSYXRlID0gbmV3IENvbnRyb2xUZXh0KHRoaXMucGxheWVyLCB7XG5cdFx0XHRjbGFzc05hbWUgOiAncmF0ZS1jdXJyZW50Jyxcblx0XHRcdG9uQ2xpY2sgOiBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdHZpZGVvLnJhdGUgPSB0aGlzLnBsYXllci5vcHRpb25zLnJhdGUuZGVmYXVsdFxuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0dGhpcy5lbGVtZW50XG5cdFx0XHQuYXBwZW5kKHRoaXMuZG93bkNvbnRyb2wuZWxlbWVudClcblx0XHRcdC5hcHBlbmQodGhpcy5jdXJyZW50UmF0ZS5lbGVtZW50KVxuXHRcdFx0LmFwcGVuZCh0aGlzLnVwQ29udHJvbC5lbGVtZW50KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGJ1aWxkQ1NTQ2xhc3MoKSB7XG5cdFx0cmV0dXJuIHRoaXMub3B0aW9ucy5jbGFzc05hbWU7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRvblBsYXllckluaXRlZCgpIHtcblx0XHR0aGlzLnVwZGF0ZSgpO1xuXHR9XG5cblx0LyoqXG5cdCAqXG5cdCAqL1xuXHRvbkNsaWNrKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0fVxuXG5cdHVwZGF0ZSh2YWx1ZSkge1xuXHRcdGNvbnN0IHZpZGVvID0gdGhpcy5wbGF5ZXIudmlkZW87XG5cblx0XHR2YWx1ZSA9IHZhbHVlIHx8IHZpZGVvLnJhdGU7XG5cdFx0dmFsdWUgPSBwYXJzZUZsb2F0KHZhbHVlKVxuXHRcdFx0LnRvRml4ZWQoMilcblx0XHRcdC50b1N0cmluZygpXG5cdFx0XHQucmVwbGFjZSgvLC9nLCAnLicpO1xuXHRcdHRoaXMuY3VycmVudFJhdGUudGV4dCA9ICfDlycgKyB2YWx1ZTtcblxuXHRcdGlmKHRoaXMuZGlzYWJsZSkgcmV0dXJuO1xuXG5cdFx0aWYodmlkZW8ucmF0ZSA8PSB2aWRlby5yYXRlTWluKSB7XG5cdFx0XHR0aGlzLmRvd25Db250cm9sLmRpc2FibGUgPSB0cnVlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmRvd25Db250cm9sLmRpc2FibGUgPSBmYWxzZTtcblx0XHR9XG5cblx0XHRpZih2aWRlby5yYXRlID49IHZpZGVvLnJhdGVNYXgpIHtcblx0XHRcdHRoaXMudXBDb250cm9sLmRpc2FibGUgPSB0cnVlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnVwQ29udHJvbC5kaXNhYmxlID0gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblx0c2V0IGRpc2FibGUodmFsdWUpIHtcblx0XHR0aGlzLl9kaXNhYmxlID0gdmFsdWU7XG5cdFx0dGhpcy5kb3duQ29udHJvbC5kaXNhYmxlID0gdmFsdWU7XG5cdFx0dGhpcy51cENvbnRyb2wuZGlzYWJsZSA9IHZhbHVlO1xuXHR9XG5cblx0aW5pdCAoKSB7XG5cdFx0bGV0IHJhdGUgPSBDb29raWUuZ2V0KCdyYXRlJywgdGhpcy5wbGF5ZXIub3B0aW9ucy5yYXRlLmRlZmF1bHQpO1xuXHRcdHRoaXMuc2hvdyhyYXRlKTtcblx0fVxuXG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnUmF0ZUNvbnRyb2wnLCBSYXRlQ29udHJvbCk7XG5Db250cm9sLnJlZ2lzdGVyQ29udHJvbCgncmF0ZScsIFJhdGVDb250cm9sKTtcbmV4cG9ydCBkZWZhdWx0IFJhdGVDb250cm9sO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvUmF0ZUNvbnRyb2wuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIEJhY2t3YXJkQ29udHJvbC5qc1xuICpcbiAqIEJhY2t3YXJkIGNvbnRyb2xcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL0NvbnRyb2wnO1xuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gT3B0aW9uc1xuICogQGNsYXNzIEJhY2t3YXJkQ29udHJvbFxuICogQGV4dGVuZHMgQ29udHJvbFxuICovXG5jbGFzcyBCYWNrd2FyZENvbnRyb2wgZXh0ZW5kcyBDb250cm9sIHtcblx0Y29uc3RydWN0b3IgKHBsYXllciwgb3B0aW9ucz17fSkge1xuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0aWNvbk5hbWUgOiAndW5kbycsXG5cdFx0XHRjbGFzc05hbWUgOiAnYmFja3dhcmQnLFxuXHRcdFx0bmFtZSA6ICdiYWNrd2FyZCcsXG5cdFx0XHR0aXRsZSA6IGDQntGC0LzQvtGC0LDRgtGMINC90LDQt9Cw0LQg0L3QsCAke3BsYXllci5vcHRpb25zLnBsYXliYWNrLnN0ZXAubWVkaXVtfSDRgdC10LrRg9C90LRgLFxuXHRcdFx0ZGlzYWJsZSA6IHRydWVcblx0XHR9LCBvcHRpb25zKTtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ2ZpcnN0cGxheScsICgpID0+IHRoaXMuZGlzYWJsZSA9IGZhbHNlKVxuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0b25DbGljayhlKSB7XG5cdFx0c3VwZXIub25DbGljayhlKTtcblx0XHR0aGlzLnBsYXllci52aWRlby5jdXJyZW50VGltZSAtPSB0aGlzLnBsYXllci5vcHRpb25zLnBsYXliYWNrLnN0ZXAubWVkaXVtO1xuXHRcdHRoaXMucGxheWVyLnNwbGFzaEljb24uc2hvdygndW5kbycpO1xuXHR9XG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnQmFja3dhcmRDb250cm9sJywgQmFja3dhcmRDb250cm9sKTtcbkNvbnRyb2wucmVnaXN0ZXJDb250cm9sKCdiYWNrd2FyZCcsIEJhY2t3YXJkQ29udHJvbCk7XG5leHBvcnQgZGVmYXVsdCBCYWNrd2FyZENvbnRyb2w7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9CYWNrd2FyZENvbnRyb2wuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIFNvdXJjZUNvbnRyb2wuanNcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL0NvbnRyb2wnO1xuaW1wb3J0IENvbnRyb2xDb250YWluZXIgZnJvbSAnLi9Db250cm9sQ29udGFpbmVyJztcblxuXG4vKipcbiAqIEBjbGFzcyBTb3VyY2VDb250cm9sXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAZXh0ZW5kcyBDb250cm9sQ29uYWluZXJcbiAqL1xuY2xhc3MgU291cmNlQ29udHJvbCBleHRlbmRzIENvbnRyb2xDb250YWluZXIge1xuXHQvLyBUT0RPOiDQlNC10LvQsNGC0YwgZGlzYWJsZS9lbmFibGUg0L/QvtGB0LvQtSBvcHRpb25zIGluaXRcblx0Y29uc3RydWN0b3IgKHBsYXllciwgb3B0aW9ucz17fSkge1xuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0bmFtZSA6ICdzb3VyY2UnLFxuXHRcdFx0aWNvbk5hbWUgOiAnYnVsbHNleWUnLFxuXHRcdFx0dGl0bGUgOiAn0JrQsNGH0LXRgdGC0LLQvicsXG5cdFx0XHRjbGFzc05hbWUgOiAnc291cmNlLWNvbnRyb2wnLFxuXHRcdFx0ZGlzYWJsZSA6IHRydWVcblx0XHR9LCBvcHRpb25zKTtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ3BsYXlpbmcnLCB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLnBsYXllci5vbigncXVhbGl0eWNoYW5nZScsIHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xuXHR9XG5cblx0b25JdGVtQ2xpY2soZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblxuXHRcdGNvbnN0IGl0ZW0gPSAkKGUudGFyZ2V0KTtcblx0XHRjb25zdCB2aWRlbyA9IHRoaXMucGxheWVyLnZpZGVvO1xuXHRcdHZpZGVvLnBsYXliYWNrUXVhbGl0eSA9IGl0ZW0uZGF0YSgnbmFtZScpO1xuXG5cdFx0dGhpcy5kcm9wZG93bkNvbnRlbnQuaGlkZSgpO1xuXG5cdH1cblxuXHRvblBsYXllckluaXRlZChlLCBkYXRhKSB7XG5cdFx0dGhpcy51cGRhdGUoKTtcblx0fVxuXG5cdGdldERhdGEoKSB7XG5cdFx0cmV0dXJuIHRoaXMucGxheWVyLnZpZGVvLmdldEF2YWlsYWJsZVF1YWxpdHlMZXZlbHMoKTtcblx0fVxuXG5cdGdldEN1cnJlbnRWYWx1ZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5wbGF5ZXIudmlkZW8ucGxheWJhY2tRdWFsaXR5O1xuXHR9XG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnU291cmNlQ29udHJvbCcsIFNvdXJjZUNvbnRyb2wpO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ3NvdXJjZScsIFNvdXJjZUNvbnRyb2wpO1xuZXhwb3J0IGRlZmF1bHQgU291cmNlQ29udHJvbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL1NvdXJjZUNvbnRyb2wuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIENvbnRyb2xDb250YWluZXIuanNcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL0NvbnRyb2wnO1xuaW1wb3J0IENvbnRyb2xEcm9wZG93biBmcm9tICcuL0NvbnRyb2xEcm9wZG93bic7XG5cbi8qKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQGNsYXNzIENvbnRyb2xDb250YWluZXJcbiAqIEBleHRlbmRzIENvbnRyb2xEcm9wZG93blxuICovXG5jbGFzcyBDb250cm9sQ29udGFpbmVyIGV4dGVuZHMgQ29udHJvbERyb3Bkb3duIHtcblxuXHRjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnM9e30pIHtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXHRcdHRoaXMuX2FjdGl2ZSA9IG51bGw7XG5cdFx0LyoqXG5cdFx0ICogTGlzdCBvZiBpdGVtc1xuXHRcdCAqXG5cdFx0ICogQHB1YmxpY1xuXHRcdCAqIEB0eXBlIHtBcnJheX1cblx0XHQgKi9cblx0XHR0aGlzLmxpc3QgPSBbXTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgaXRlbSBvZiBjb250YWluZXIgYnkgaW5kZXhcblx0ICpcblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcblx0ICovXG5cdGdldEJ5SW5kZXgoaW5kZXgpIHtcblx0XHRyZXR1cm4gdGhpcy5saXN0W2luZGV4XTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTZXQgaXRlbSBhY3RpdmUgYnkgaW5kZXhcblx0ICpcblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcblx0ICovXG5cdHNldEFjdGl2ZUJ5SW5kZXgoaW5kZXgpIHtcblx0XHRpZiAodGhpcy5hY3RpdmUpIHtcblx0XHRcdHRoaXMuYWN0aXZlLnJlbW92ZUNsYXNzKCdjb250cm9sLWNvbnRhaW5lcl9faXRlbS0tYWN0aXZlJyk7XG5cdFx0fVxuXHRcdHRoaXMuX2FjdGl2ZSA9IHRoaXMubGlzdFtpbmRleF0uYWRkQ2xhc3MoJ2NvbnRyb2wtY29udGFpbmVyX19pdGVtLS1hY3RpdmUnKTtcblx0XHRyZXR1cm4gdGhpcy5fYWN0aXZlO1xuXHR9XG5cblxuXHQvKipcblx0ICogR2V0dGVyIG9mIGFjdGl2ZSBmaWVsZFxuXHQgKlxuXHQgKiBAcHVibGljXG5cdCAqIEB0eXBlIHtqUXVlcnl9XG5cdCAqL1xuXHRnZXQgYWN0aXZlICgpIHtcblx0XHRpZiAodGhpcy5fYWN0aXZlICYmIHRoaXMuX2FjdGl2ZS5sZW5ndGggPiAwKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5fYWN0aXZlO1xuXHRcdH1cblx0XHR0aGlzLmxpc3QuZm9yRWFjaChpdGVtID0+IHtcblx0XHRcdGlmIChpdGVtLmhhc0NsYXNzKCdjb250cm9sLWNvbnRhaW5lcl9faXRlbS0tYWN0aXZlJykpIHtcblx0XHRcdFx0dGhpcy5fYWN0aXZlID0gaXRlbTtcblx0XHRcdH1cblx0XHR9KVxuXHRcdHJldHVybiB0aGlzLl9hY3RpdmU7XG5cdH1cblxuXHQvKipcblx0ICogU2V0dGVyIG9mIGFjdGl2ZSBmaWVsZFxuXHQgKlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7alF1ZXJ5fSBJdGVtIG9mIGNvbnRhaW5lclxuXHQgKi9cblx0c2V0IGFjdGl2ZSAoZWxlbWVudCkge1xuXHRcdGlmICh0aGlzLmFjdGl2ZSkge1xuXHRcdFx0dGhpcy5hY3RpdmUucmVtb3ZlQ2xhc3MoJ2NvbnRyb2wtY29udGFpbmVyX19pdGVtLS1hY3RpdmUnKTtcblx0XHR9XG5cdFx0aWYgKGVsZW1lbnQpIHtcblx0XHRcdCQoZWxlbWVudCkuYWRkQ2xhc3MoJ2NvbnRyb2wtY29udGFpbmVyX19pdGVtLS1hY3RpdmUnKTtcblx0XHR9XG5cdFx0dGhpcy5fYWN0aXZlID0gZWxlbWVudDtcblx0XHR0aGlzLmNsb3NlKCk7XG5cdFx0cmV0dXJuIHRoaXMuX2FjdGl2ZVxuXHR9XG5cblxuXHQvKipcblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge1N0cmluZ3xqUXVlcnl9IENvbnRlbnQgb2YgaXRlbVxuXHQgKiBAcGFyYW0ge09iamVjdH0gRGF0YSBvZiBpdGVtXG5cdCAqL1xuXHRhZGRJdGVtIChjb250ZW50LCBkYXRhKSB7XG5cdFx0Y29uc3QgaXRlbSA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0LmFkZENsYXNzKCdjb250cm9sLWNvbnRhaW5lcl9faXRlbScpXG5cdFx0XHQuZGF0YShkYXRhKVxuXHRcdFx0LmF0dHIoJ3RpdGxlJywgZGF0YS50b29sdGlwKVxuXHRcdFx0Lm9uKCdjbGljayB0YXAnLCB0aGlzLm9uSXRlbUNsaWNrLmJpbmQodGhpcykpXG5cdFx0XHQuYXBwZW5kKGNvbnRlbnQpO1xuXG5cdFx0dGhpcy5saXN0ID0gdGhpcy5saXN0LmNvbmNhdChpdGVtKTtcblxuXHRcdHRoaXMuZHJvcGRvd25Db250ZW50LmFwcGVuZChpdGVtKTtcblxuXHRcdHRoaXMuZW1pdFRhcEV2ZW50cyhpdGVtKTtcblxuXHRcdHJldHVybiBpdGVtO1xuXHR9XG5cblx0LyoqXG5cdCAqIE9uIGl0ZW0gY2xpY2sgZXZlbnQgaGFuZGxlclxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7RXZlbnR9IGVcblx0ICovXG5cdG9uSXRlbUNsaWNrIChlKSB7XG5cdFx0dGhpcy5hY3RpdmUgPSBlLmN1cnJlbnRUYXJnZXQ7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRidWlsZENTU0NsYXNzKCkge1xuXHRcdHJldHVybiBgJHtzdXBlci5idWlsZENTU0NsYXNzKCl9IGNvbnRyb2wtY29udGFpbmVyYFxuXHR9XG5cblx0dXBkYXRlKCkge1xuXHRcdGNvbnN0IGRhdGEgPSB0aGlzLmdldERhdGEoKVxuXHRcdGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHRoaXMuZ2V0Q3VycmVudFZhbHVlKClcblxuXHRcdGlmKGRhdGEgPT0gbnVsbCB8fCBkYXRhLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0dGhpcy5kaXNhYmxlID0gdHJ1ZTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLmxpc3QgPSBbXTtcblx0XHR0aGlzLmRyb3Bkb3duQ29udGVudC5lbXB0eSgpO1xuXG5cdFx0ZGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xuXHRcdFx0Y29uc3QgZWxlbSA9IHRoaXMuYWRkSXRlbShpdGVtLnRpdGxlLCBpdGVtKTtcblx0XHRcdGlmKGN1cnJlbnRWYWx1ZSAmJiBjdXJyZW50VmFsdWUubmFtZSA9PT0gaXRlbS5uYW1lKSB7XG5cblx0XHRcdFx0dGhpcy5hY3RpdmUgPSBlbGVtO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdHRoaXMuZGlzYWJsZSA9IGZhbHNlO1xuXHR9XG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnQ29udHJvbENvbnRhaW5lcicsIENvbnRyb2xDb250YWluZXIpO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ2NvbnRhaW5lcicsIENvbnRyb2xDb250YWluZXIpO1xuZXhwb3J0IGRlZmF1bHQgQ29udHJvbENvbnRhaW5lcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL0NvbnRyb2xDb250YWluZXIuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIFN1YnRpdGxlQ29udHJvbC5qc1xuICpcbiAqIFN1YnRpdGxlIGNvbnRyb2xcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL0NvbnRyb2wnO1xuaW1wb3J0IENvbnRyb2xDb250YWluZXIgZnJvbSAnLi9Db250cm9sQ29udGFpbmVyJztcblxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAY2xhc3MgU3VidGl0bGVDb250cm9sXG4gKiBAZXh0ZW5kcyBDb250cm9sQ29udGFpbmVyXG4gKi9cbmNsYXNzIFN1YnRpdGxlQ29udHJvbCBleHRlbmRzIENvbnRyb2xDb250YWluZXIge1xuXHRjb25zdHJ1Y3RvciAocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRpY29uTmFtZSA6ICdjb21tZW50aW5nLW8nLFxuXHRcdFx0dGl0bGUgOiAn0KHRg9Cx0YLQuNGC0YDRiycsXG5cdFx0XHRuYW1lIDogJ3N1YnRpdGxlJyxcblx0XHRcdGNsYXNzTmFtZSA6ICdzdWJ0aXRsZS1jb250cm9sJyxcblx0XHRcdGRpc2FibGUgOiB0cnVlXG5cdFx0fSwgb3B0aW9ucyk7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblxuXHRcdHRoaXMucGxheWVyLm9uKCdwbGF5aW5nJywgdGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5wbGF5ZXIub24oJ3RyYWNrc2NoYW5nZScsIHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xuXHR9XG5cblx0b25DbGljayAoZSkge1xuXHRcdHN1cGVyLm9uQ2xpY2soZSk7XG5cdFx0Y29uc3QgdmlkZW8gPSB0aGlzLnBsYXllci52aWRlbztcblx0XHR2aWRlby50cmFjayA9IG51bGxcblx0fVxuXG5cdG9uSXRlbUNsaWNrIChlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKClcblxuXHRcdGNvbnN0IGl0ZW0gPSAkKGUudGFyZ2V0KVxuXHRcdGNvbnN0IHZpZGVvID0gdGhpcy5wbGF5ZXIudmlkZW87XG5cdFx0aWYgKGl0ZW0uZGF0YSgpKSB7XG5cdFx0XHR2aWRlby50cmFjayA9IGl0ZW0uZGF0YSgpO1xuXHRcdH1cblxuXHRcdHRoaXMuZHJvcGRvd25Db250ZW50LmhpZGUoKVxuXHR9XG5cblx0b25QbGF5ZXJJbml0ZWQoZSwgZGF0YSkge1xuXHRcdHRoaXMudXBkYXRlKClcblx0fVxuXG5cdHVwZGF0ZSgpIHtcblx0XHRzdXBlci51cGRhdGUoKTtcblx0XHRjb25zdCBoYXNWYWx1ZSA9ICEhKHRoaXMuZ2V0Q3VycmVudFZhbHVlKCkgJiYgdGhpcy5nZXRDdXJyZW50VmFsdWUoKS5uYW1lICE9IG51bGwpO1xuXHRcdHRoaXMuZWxlbWVudC50b2dnbGVDbGFzcyhcblx0XHRcdCdjb250cm9sLWNoZWNrYm94LS1jaGVja2VkJyxcblx0XHRcdGhhc1ZhbHVlXG5cdFx0KVxuXHR9XG5cblx0Z2V0RGF0YSgpIHtcblx0XHRyZXR1cm4gdGhpcy5wbGF5ZXIudmlkZW8uc3VidGl0bGVzO1xuXHR9XG5cblx0Z2V0Q3VycmVudFZhbHVlKCkge1xuXHRcdHJldHVybiB0aGlzLnBsYXllci52aWRlby50cmFjaztcblx0fVxuXG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnU3VidGl0bGVDb250cm9sJywgU3VidGl0bGVDb250cm9sKTtcbkNvbnRyb2wucmVnaXN0ZXJDb250cm9sKCdzdWJ0aXRsZScsIFN1YnRpdGxlQ29udHJvbCk7XG5leHBvcnQgZGVmYXVsdCBTdWJ0aXRsZUNvbnRyb2w7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9TdWJ0aXRsZUNvbnRyb2wuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIERvd25sb2FkQ29udHJvbC5qc1xuICpcbiAqIERvd25sb2FkIGNvbnRyb2xcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9Db250cm9sJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJztcblxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAY2xhc3MgRG93bmxvYWRDb250cm9sXG4gKiBAZXhudGVkcyBDb250cm9sXG4gKi9cbmNsYXNzIERvd25sb2FkQ29udHJvbCBleHRlbmRzIENvbnRyb2wge1xuXHRjb25zdHJ1Y3RvciAocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHtcblx0XHRcdHRpdGxlIDogJ9Ch0LrQsNGH0LDRgtGMINCy0LjQtNC10L4nLFxuXHRcdFx0Y2xhc3NOYW1lIDogJ2Rvd25sb2FkJyxcblx0XHRcdG5hbWUgOiAnZG93bmxvYWQnLFxuXHRcdH0sIG9wdGlvbnMpO1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cdFx0dGhpcy5wbGF5ZXIub24oJ2xvYWRzdGFydCcsIHRoaXMub25Mb2FkU3RhcnQuYmluZCh0aGlzKSk7XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0Ly8gVE9ETzog0JTQvtC+0L/RgNC10LTQtdC70LjRgtGMINGN0YLQvtGCINC80LXRgtC+0LQsINCwINC90LUg0L/QtdGA0LXQvtC/0YDQtdC00LvQtdC40YLRjFxuXHRcdHRoaXMuZWxlbWVudCA9ICQoJzxhIC8+Jylcblx0XHRcdC5hdHRyKHtcblx0XHRcdFx0aHJlZiA6ICcnLFxuXHRcdFx0XHR0YXJnZXQgOiAnX2JsYW5rJyxcblx0XHRcdFx0ZG93bmxvYWQgOiB0cnVlLFxuXHRcdFx0XHR0aXRsZSA6IHRoaXMub3B0aW9ucy50aXRsZSxcblx0XHRcdH0pXG5cdFx0XHQuYWRkQ2xhc3ModGhpcy5idWlsZENTU0NsYXNzKCkpXG5cdFx0XHQuYXBwZW5kKG5ldyBJY29uKHRoaXMucGxheWVyLCB7IGljb25OYW1lIDogJ2Rvd25sb2FkJyB9KS5lbGVtZW50KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGJ1aWxkQ1NTQ2xhc3MoKSB7XG5cdFx0cmV0dXJuIGAke3N1cGVyLmJ1aWxkQ1NTQ2xhc3MoKX1gO1xuXHR9XG5cblxuXHQvKipcblx0ICogU2V0dGVyIG9mIGxpbmsgZmllbGRcblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgUGF0aCBmb3IgdmlkZW9cblx0ICovXG5cdHNldCBsaW5rICh2YWx1ZSkge1xuXHRcdGNvbnN0IHRpdGxlID0gdGhpcy5wbGF5ZXIub3B0aW9ucy50aXRsZTtcblx0XHRsZXQgZmlsZU5hbWU7XG5cblx0XHRpZih0aXRsZSAhPSBudWxsKSB7XG5cdFx0XHRmaWxlTmFtZSA9IGRlY29kZVVSSUNvbXBvbmVudCh0aXRsZSkgKyAnLicgKyBnZXRGaWxlRXh0ZW5zaW9uKHZhbHVlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3QgcGFyc2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXHRcdFx0cGFyc2VyLmhyZWYgPSB2YWx1ZTtcblx0XHRcdGZpbGVOYW1lID0gcGFyc2VyLnBhdGhuYW1lLnNwbGl0KCcvJyk7XG5cdFx0XHRmaWxlTmFtZSA9IGZpbGVOYW1lW2ZpbGVOYW1lLmxlbmd0aCAtIDFdO1xuXHRcdH1cblxuXHRcdHRoaXMuZWxlbWVudC5hdHRyKHtcblx0XHRcdGhyZWYgOiB2YWx1ZSxcblx0XHRcdGRvd25sb2FkIDogZmlsZU5hbWVcblx0XHR9KTtcblx0fVxuXG5cblx0b25Mb2FkU3RhcnQoZSwgZGF0YSkge1xuXHRcdHRoaXMubGluayA9IHRoaXMucGxheWVyLnZpZGVvLnNyYy51cmw7XG5cdH1cblxufVxuZnVuY3Rpb24gZ2V0RmlsZUV4dGVuc2lvbihmaWxlTmFtZSkge1xuXHRyZXR1cm4gZmlsZU5hbWUuc3BsaXQoJy4nKS5wb3AoKTtcbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdEb3dubG9hZENvbnRyb2wnLCBEb3dubG9hZENvbnRyb2wpO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ2Rvd25sb2FkJywgRG93bmxvYWRDb250cm9sKTtcbmV4cG9ydCBkZWZhdWx0IERvd25sb2FkQ29udHJvbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL0Rvd25sb2FkQ29udHJvbC5qcyIsIlxuJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBLZXliaW5kaW5nSW5mb0NvbnRyb2wuanNcbiAqXG4gKiBJbmZvIGNvbnRyb2xcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL0NvbnRyb2wnO1xuaW1wb3J0IENvbnRyb2xEcm9wZG93biBmcm9tICcuL0NvbnRyb2xEcm9wZG93bic7XG5cbi8qKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQGNsYXNzIEtleUJpbmRpbmdJbmZvQ29udHJvbFxuICogQGV4dGVuZHMgQ29udHJvbERyb3Bkb3duXG4gKi9cbmNsYXNzIEtleUJpbmRpbmdJbmZvQ29udHJvbCBleHRlbmRzIENvbnRyb2xEcm9wZG93biB7XG5cblx0Y29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRpY29uTmFtZSA6ICdpbmZvJyxcblx0XHRcdHRpdGxlIDogJ9CY0L3RhNC+Jyxcblx0XHRcdGNsYXNzTmFtZSA6ICdpbmZvLWNvbnRyb2wnLFxuXHRcdFx0bmFtZSA6ICdpbmZvJ1xuXHRcdH0sIG9wdGlvbnMpO1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cdH1cblxuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdHN1cGVyLmNyZWF0ZUVsZW1lbnQoKTtcblx0XHRsZXQga2V5QmluZGluZyA9IHRoaXMucGxheWVyLm9wdGlvbnMua2V5QmluZGluZztcblx0XHRsZXQgaW5mb0NvbnRlbnQgPSBgYDtcblx0XHRmb3IgKGxldCBfa2V5IGluIGtleUJpbmRpbmcpIHtcblx0XHRcdGlmICgha2V5QmluZGluZy5oYXNPd25Qcm9wZXJ0eShfa2V5KSkgY29udGludWU7XG5cblx0XHRcdGxldCBob3RrZXkgPSBrZXlCaW5kaW5nW19rZXldO1xuXHRcdFx0bGV0IGl0ZW0gPSAnJztcblx0XHRcdGxldCBrZXlTdHJpbmcgPSAnJztcblxuXHRcdFx0aG90a2V5LmluZm8uZm9yRWFjaCgoa2V5LCBpbmRleCkgPT4ge1xuXHRcdFx0XHRpZiAoaW5kZXggIT09IDApIHtcblx0XHRcdFx0XHRrZXlTdHJpbmcgKz0gYCArIGBcblx0XHRcdFx0fVxuXHRcdFx0XHRrZXlTdHJpbmcgKz0gYDxrYmQgY2xhc3M9XCJsZXBsYXllci1rZXlcIj4ke2tleX08L2tiZD5gXG5cdFx0XHR9KTtcblxuXHRcdFx0aXRlbSA9IGBcblx0XHRcdFx0PGRpdiBjbGFzcz1cImluZm8tY29udHJvbF9faXRlbVwiPlxuXHRcdFx0XHRcdCR7a2V5U3RyaW5nfSAtICR7aG90a2V5LmRlc2NyaXB0aW9ufVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdGBcblxuXHRcdFx0aW5mb0NvbnRlbnQgKz0gaXRlbTtcblxuXHRcdH1cblx0XHR0aGlzLmRyb3Bkb3duQ29udGVudFxuXHRcdFx0LmFkZENsYXNzKCdpbmZvLWNvbnRyb2xfX2NvbnRlbnQnKVxuXHRcdFx0LmFwcGVuZChpbmZvQ29udGVudCk7XG5cdH1cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdLZXlCaW5kaW5nSW5mb0NvbnRyb2wnLCBLZXlCaW5kaW5nSW5mb0NvbnRyb2wpO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ2tleWJpbmRpbmcgaW5mbycsIEtleUJpbmRpbmdJbmZvQ29udHJvbCk7XG5leHBvcnQgZGVmYXVsdCBLZXlCaW5kaW5nSW5mb0NvbnRyb2w7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9LZXliaW5kaW5nSW5mb0NvbnRyb2wuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIFRpbWVJbmZvQ29udHJvbC5qc1xuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCBDb250cm9sIGZyb20gJy4vQ29udHJvbCc7XG5pbXBvcnQgQ29udHJvbFRleHQgZnJvbSAnLi9Db250cm9sVGV4dCc7XG5pbXBvcnQgeyBzZWNvbmRzVG9UaW1lIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBjbGFzcyBUaW1lSW5mb0NvbnRyb2xcbiAqIEBwcm9wZXJ0eSB7Q29udHJvbFRleHR9IGN1cnJlbnRUaW1lIEN1cnJlbnQgdGltZSdzIHRleHRcbiAqIEBwcm9wZXJ0eSB7Q29udHJvbFRleHR9IHRvdGFsVGltZSBUb3RhbCB0aW1lXG4gKiBAcHJvcGVydHkge2pRdWVyeX0gbGluZVxuICogQGV4dGVuZHMgQ29udHJvbFxuICovXG5jbGFzcyBUaW1lSW5mb0NvbnRyb2wgZXh0ZW5kcyBDb250cm9sIHtcblxuXHRjb25zdHJ1Y3RvciAocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRjbGFzc05hbWUgOiAndGltZWxpbmUgdGltZWxpbmUtY29udGFpbmVyJyxcblx0XHRcdG5hbWUgOiAndGltZS1pbmZvJ1xuXHRcdH0sIG9wdGlvbnMpO1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cblx0XHR0aGlzLnBsYXllci5vbigndGltZXVwZGF0ZScsIChlLCBkYXRhKSA9PiB7XG5cdFx0XHRjb25zdCB0aW1lID0gdGhpcy5wbGF5ZXIuY3VycmVudFRpbWU7XG5cdFx0XHR0aGlzLl9jdXJyZW50VGltZUNvbnRyb2wudGV4dCA9IHNlY29uZHNUb1RpbWUodGltZSk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLnBsYXllci5vbignZHVyYXRpb25jaGFuZ2UnLCAoZSkgPT4ge1xuXHRcdFx0dGhpcy5fdG90YWxUaW1lQ29udHJvbC50ZXh0ID0gc2Vjb25kc1RvVGltZSh0aGlzLnBsYXllci52aWRlby5kdXJhdGlvbik7XG5cdFx0fSk7XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0Y29uc3QgZHVyYXRpb24gPSB0aGlzLnBsYXllci52aWRlby5kdXJhdGlvbjtcblx0XHRjb25zdCBjdXJyZW50VGltZSA9IHRoaXMucGxheWVyLnZpZGVvLmN1cnJlbnRUaW1lO1xuXHRcdHRoaXMuX2N1cnJlbnRUaW1lQ29udHJvbCA9IG5ldyBDb250cm9sVGV4dCh0aGlzLnBsYXllciwgeyBjbGFzc05hbWUgOiAnY29udHJvbC10aW1lX19jdXJyZW50J30pO1xuXHRcdHRoaXMuX3RvdGFsVGltZUNvbnRyb2wgPSBuZXcgQ29udHJvbFRleHQodGhpcy5wbGF5ZXIsIHsgY2xhc3NOYW1lIDogJ2NvbnRyb2wtdGltZV9fdG90YWwnfSk7XG5cblx0XHRpZihpc05hTihkdXJhdGlvbikgfHwgZHVyYXRpb24gPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5fdG90YWxUaW1lQ29udHJvbC50ZXh0ID0gJyc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuX3RvdGFsVGltZUNvbnRyb2wudGV4dCA9IHNlY29uZHNUb1RpbWUoZHVyYXRpb24pO1xuXHRcdH1cblxuXHRcdGlmKGN1cnJlbnRUaW1lID09IG51bGwpIHtcblx0XHRcdHRoaXMuX2N1cnJlbnRUaW1lQ29udHJvbC50ZXh0ID0gc2Vjb25kc1RvVGltZSgwKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5fY3VycmVudFRpbWVDb250cm9sLnRleHQgPSBzZWNvbmRzVG9UaW1lKGN1cnJlbnRUaW1lKTtcblx0XHR9XG5cblx0XHR0aGlzLmVsZW1lbnQgPSAkKCc8ZGl2Lz4nKS5hZGRDbGFzcygnY29udHJvbC10aW1lJyk7XG5cdFx0dGhpcy5lbGVtZW50XG5cdFx0XHQuYXBwZW5kKHRoaXMuX2N1cnJlbnRUaW1lQ29udHJvbC5lbGVtZW50KVxuXHRcdFx0LmFwcGVuZCh0aGlzLl90b3RhbFRpbWVDb250cm9sLmVsZW1lbnQpXG5cblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50O1xuXHR9XG5cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRvblBsYXllckluaXRlZChlKSB7XG5cdFx0bGV0IHZpZGVvID0gdGhpcy5wbGF5ZXIudmlkZW87XG5cdFx0dGhpcy5fY3VycmVudFRpbWVDb250cm9sLnRleHQgPSBzZWNvbmRzVG9UaW1lKHZpZGVvLmN1cnJlbnRUaW1lKTtcblx0XHR0aGlzLl90b3RhbFRpbWVDb250cm9sLnRleHQgPSBzZWNvbmRzVG9UaW1lKHZpZGVvLmR1cmF0aW9uKTtcblx0fVxuXG5cdG9uQ2xpY2soZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKVxuXHR9XG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnVGltZUluZm9Db250cm9sJywgVGltZUluZm9Db250cm9sKTtcbkNvbnRyb2wucmVnaXN0ZXJDb250cm9sKCd0aW1laW5mbycsIFRpbWVJbmZvQ29udHJvbCk7XG5leHBvcnQgZGVmYXVsdCBUaW1lSW5mb0NvbnRyb2w7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9UaW1lSW5mb0NvbnRyb2wuanMiLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL0NvbXBvbmVudCc7XG5pbXBvcnQgeyBJU19TQUZBUkksIElTX0lPUywgSVNfQU5EUk9JRCB9IGZyb20gJy4uL3V0aWxzL2Jyb3dzZXInO1xuaW1wb3J0IEVudGl0eSBmcm9tICcuL0VudGl0eSc7XG5cblxuY2xhc3MgSHRtbDUgZXh0ZW5kcyBFbnRpdHkge1xuXHRjb25zdHJ1Y3RvciAocGxheWVyLCBvcHRpb25zKSB7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblx0XHR0aGlzLm1lZGlhID0gdGhpcy5lbGVtZW50WzBdO1xuXG5cdFx0dGhpcy5zdWJ0aXRsZXMgPSBbXTtcblx0XHR0aGlzLmJ1ZmZlclJhbmdlcyA9IFtdO1xuXG5cdFx0dGhpcy5zcmMgPSB0aGlzLnBsYXllci5vcHRpb25zLnNyYztcblxuXHRcdGlmKHRoaXMucGxheWVyLm9wdGlvbnMucG9zdGVyICE9IG51bGwpIHtcblx0XHRcdHRoaXMucG9zdGVyID0gdGhpcy5wbGF5ZXIub3B0aW9ucy5wb3N0ZXI7XG5cdFx0fVxuXG5cdFx0aWYodGhpcy5nZXRBdmFpbGFibGVRdWFsaXR5TGV2ZWxzKCkubGVuZ3RoID4gMCkge1xuXHRcdFx0dGhpcy5fcGxheWJhY2tRdWFsaXR5ID0gdGhpcy5nZXRBdmFpbGFibGVRdWFsaXR5TGV2ZWxzKClbMF07XG5cdFx0fVxuXG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdsb2Fkc3RhcnQnLCB0aGlzLm9uTG9hZFN0YXJ0LmJpbmQodGhpcykpO1xuXHRcdHRoaXMuZWxlbWVudC5vbigndGltZXVwZGF0ZScsIHRoaXMub25UaW1lVXBkYXRlLmJpbmQodGhpcykpO1xuXHRcdHRoaXMuZWxlbWVudC5vbignZHVyYXRpb25jaGFuZ2UnLCB0aGlzLm9uRHVyYXRpb25DaGFuZ2UuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdwcm9ncmVzcycsIHRoaXMub25Qcm9ncmVzcy5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ3NlZWtpbmcnLCB0aGlzLm9uU2Vla2luZy5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ3NlZWtlZCcsIHRoaXMub25TZWVrZWQuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCd2b2x1bWVjaGFuZ2UnLCB0aGlzLm9uVm9sdW1lQ2hhbmdlLmJpbmQodGhpcykpO1xuXHRcdHRoaXMuZWxlbWVudC5vbignY2xpY2snLCB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdkYmxjbGljaycsIHRoaXMub25EYmxjbGljay5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ3BsYXknLCB0aGlzLm9uUGxheS5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ3BhdXNlJywgdGhpcy5vblBhdXNlLmJpbmQodGhpcykpO1xuXHRcdHRoaXMuZWxlbWVudC5vbigncmF0ZWNoYW5nZScsIHRoaXMub25SYXRlQ2hhbmdlLmJpbmQodGhpcykpO1xuXHRcdHRoaXMuZWxlbWVudC5vbignZW5kZWQnLCB0aGlzLm9uRW5kZWQuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdjYW5wbGF5dGhyb3VnaCcsIHRoaXMub25DYW5wbGF5VGhyb3VnaC5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ3dhaXRpbmcnLCB0aGlzLm9uV2FpdGluZy5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ2Vycm9yJywgdGhpcy5vbkVycm9yLmJpbmQodGhpcykpO1xuXHR9XG5cblx0b25Mb2FkU3RhcnQoZSkge1xuXHRcdHRoaXMudHJpZ2dlcignbG9hZHN0YXJ0Jyk7XG5cdH1cblxuXHRvblRpbWVVcGRhdGUoZSkge1xuXHRcdHRoaXMudHJpZ2dlcigndGltZXVwZGF0ZScpO1xuXHR9XG5cblx0b25EdXJhdGlvbkNoYW5nZShlKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCdkdXJhdGlvbmNoYW5nZScpO1xuXHR9XG5cblx0b25Qcm9ncmVzcyhlKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCdwcm9ncmVzcycpO1xuXHR9XG5cblx0b25TZWVraW5nKGUpIHtcblx0XHR0aGlzLnRyaWdnZXIoJ3NlZWtpbmcnKTtcblx0fVxuXG5cdG9uU2Vla2VkKGUpIHtcblx0XHR0aGlzLnRyaWdnZXIoJ3NlZWtlZCcpO1xuXHR9XG5cblx0b25Wb2x1bWVDaGFuZ2UoZSkge1xuXHRcdHRoaXMudHJpZ2dlcigndm9sdW1lY2hhbmdlJyk7XG5cdH1cblxuXHRvbkNsaWNrKCkge1xuXHRcdHRoaXMudHJpZ2dlcignY2xpY2snKTtcblx0fVxuXG5cdG9uRGJsY2xpY2soKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCdkYmxjbGljaycpO1xuXHR9XG5cblx0b25QbGF5KCkge1xuXHRcdHRoaXMudHJpZ2dlcigncGxheScpO1xuXHR9XG5cblx0b25QYXVzZSgpIHtcblx0XHR0aGlzLnRyaWdnZXIoJ3BhdXNlJyk7XG5cdH1cblxuXHRvblBsYXlpbmcoKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCdwbGF5aW5nJyk7XG5cdH1cblxuXHRvblJhdGVDaGFuZ2UoKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCdyYXRlY2hhbmdlJyk7XG5cdH1cblxuXHRvbkVuZGVkKCkge1xuXHRcdHRoaXMudHJpZ2dlcignZW5kZWQnKTtcblx0fVxuXG5cdG9uQ2FucGxheVRocm91Z2goKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCdjYW5wbGF5dGhyb3VnaCcpO1xuXHR9XG5cblx0b25XYWl0aW5nKCkge1xuXHRcdHRoaXMudHJpZ2dlcignd2FpdGluZycpO1xuXHR9XG5cblx0b25FcnJvcihlKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCdlcnJvcicsIHsgY29kZSA6IGUudGFyZ2V0LmVycm9yLmNvZGUgfSk7XG5cdH1cblxuXHQvKiBUT0RPICovXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0dGhpcy5lbGVtZW50ID0gdGhpcy5vcHRpb25zLmN0eDtcblx0XHRbXG5cblx0XHRcdC8vIFJlbW92ZSBjb250cm9scyBiZWNhdXNlIHdlIGRvbnQgbm90IHN1cHBvcnQgbmF0aXZlIGNvbnRyb2xzIHlldFxuXHRcdFx0J2NvbnRyb2xzJyxcblx0XHRcdCdwb3N0ZXInLFxuXG5cdFx0XHQvLyBJdCBpcyB1bm5lY2Vzc2FyeSBhdHRycywgdGhpcyBmdW5jdGlvbmFsaXR5IHNvbHZlIENTU1xuXHRcdFx0J2hlaWdodCcsXG5cdFx0XHQnd2lkdGgnXG5cblx0XHRdLmZvckVhY2goaXRlbSA9PiB7XG5cdFx0XHR0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cihpdGVtKTtcblx0XHR9KTtcblxuXHRcdC8vIFNldCBhdHRycyBmcm9tIG9wdGlvbnNcblx0XHRbXG5cdFx0XHQncHJlbG9hZCcsXG5cdFx0XHQnYXV0b3BsYXknLFxuXHRcdFx0J2xvb3AnLFxuXHRcdFx0J211dGVkJ1xuXHRcdF0uZm9yRWFjaChpdGVtID0+IHtcblx0XHRcdGlmKHRoaXMucGxheWVyLm9wdGlvbnNbaXRlbV0pIHtcblx0XHRcdFx0dGhpcy5lbGVtZW50LmF0dHIoaXRlbSwgdGhpcy5wbGF5ZXIub3B0aW9uc1tpdGVtXSk7XG5cdFx0XHRcdHRoaXMuZWxlbWVudC5wcm9wKGl0ZW0sIHRoaXMucGxheWVyLm9wdGlvbnNbaXRlbV0pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cblx0XHR0aGlzLmVsZW1lbnQuZmluZCgnc291cmNlW2RhdGEtcXVhbGl0eV0nKS5lYWNoKChpLCBpdGVtKSA9PiB7XG5cdFx0XHQkKGl0ZW0pLnJlbW92ZSgpO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudDtcblx0fVxuXG5cdGdldCBjdXJyZW50VGltZSAoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWVkaWEuY3VycmVudFRpbWU7XG5cdH1cblxuXHRzZXQgY3VycmVudFRpbWUgKHZhbHVlKSB7XG5cdFx0bGV0IHRpbWU7XG5cdFx0aWYgKHZhbHVlID4gdGhpcy5kdXJhdGlvbikge1xuXHRcdFx0dGltZSA9IHRoaXMuZHVyYXRpb25cblx0XHR9IGVsc2UgaWYgKHZhbHVlIDwgMCkge1xuXHRcdFx0dGltZSA9IDBcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGltZSA9IHZhbHVlO1xuXHRcdH1cblxuXHRcdHRoaXMucGxheWVyLnRyaWdnZXIoJ3RpbWV1cGRhdGVsb2FkJywgeyBjdXJyZW50VGltZSA6IHRpbWUgfSk7XG5cblx0XHR0aGlzLm1lZGlhLmN1cnJlbnRUaW1lID0gdGltZTtcblx0fVxuXG5cdGdldCBkdXJhdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWVkaWEuZHVyYXRpb247XG5cdH1cblxuXHRnZXQgaGVpZ2h0ICgpIHtcblx0XHRyZXR1cm4gdGhpcy5tZWRpYS5jbGllbnRIZWlnaHQ7XG5cdH1cblxuXHRnZXQgd2lkdGggKCkge1xuXHRcdHJldHVybiB0aGlzLm1lZGlhLmNsaWVudFdpZHRoO1xuXHR9XG5cblx0Z2V0IHJhdGUgKCkge1xuXHRcdHJldHVybiB0aGlzLm1lZGlhLnBsYXliYWNrUmF0ZTtcblx0fVxuXG5cdHNldCBtdXRlZCh2YWx1ZSkge1xuXHRcdHRoaXMubWVkaWEubXV0ZWQgPSB2YWx1ZTtcblx0fVxuXG5cdGdldCBtdXRlZCgpIHtcblx0XHRyZXR1cm4gdGhpcy5tZWRpYS5tdXRlZFxuXHR9XG5cblx0Z2V0IHJhdGVNYXgoKSB7XG5cdFx0bGV0IG1heCA9IHRoaXMucGxheWVyLm9wdGlvbnMucmF0ZS5tYXg7XG5cdFx0aWYoSVNfSU9TIHx8IElTX0FORFJPSUQpIHtcblx0XHRcdG1heCA9IEh0bWw1Lk1PQklMRV9NQVhfUkFURTtcblx0XHR9XG5cdFx0aWYoSVNfU0FGQVJJKSB7XG5cdFx0XHRtYXggPSBIdG1sNS5TQUZBUklfTUFYX1JBVEU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1heDtcblx0fVxuXG5cdGdldCByYXRlTWluKCkge1xuXHRcdGxldCBtaW4gPSB0aGlzLnBsYXllci5vcHRpb25zLnJhdGUubWluO1xuXG5cdFx0aWYgKElTX0lPUyB8fCBJU19BTkRST0lEKSB7XG5cdFx0XHRtaW4gPSBIdG1sNS5NT0JJTEVfTUlOX1JBVEU7XG5cdFx0fVxuXG5cdFx0aWYgKElTX1NBRkFSSSkge1xuXHRcdFx0bWluID0gSHRtbDUuU0FGQVJJX01JTl9SQVRFO1xuXHRcdH1cblxuXHRcdHJldHVybiBtaW47XG5cdH1cblxuXHRzZXQgcmF0ZSAodmFsdWUpIHtcblx0XHRzdXBlci5yYXRlID0gdmFsdWU7XG5cdFx0dGhpcy5tZWRpYS5wbGF5YmFja1JhdGUgPSB2YWx1ZTtcblx0fVxuXG5cdGdldEF2YWlsYWJsZVF1YWxpdHlMZXZlbHMoKSB7XG5cdFx0cmV0dXJuIHRoaXMucGxheWVyLm9wdGlvbnMuc291cmNlcy5tYXAoaXRlbSA9PiAoe1xuXHRcdFx0bmFtZSA6IGl0ZW0udGl0bGUsXG5cdFx0XHQuLi5pdGVtXG5cdFx0fSkpO1xuXHR9XG5cblx0c2V0IHBsYXliYWNrUXVhbGl0eShuYW1lKSB7XG5cdFx0c3VwZXIucGxheWJhY2tRdWFsaXR5ID0gbmFtZTtcblx0XHRjb25zdCB0aW1lID0gdGhpcy5jdXJyZW50VGltZTtcblx0XHRjb25zdCByYXRlID0gdGhpcy5yYXRlO1xuXHRcdGNvbnN0IHN0b3AgPSB0aGlzLnBhdXNlZDtcblxuXHRcdHRoaXMuX3BsYXliYWNrUXVhbGl0eSA9IHRoaXMuZ2V0QXZhaWxhYmxlUXVhbGl0eUxldmVscygpLmZpbmQoaXRlbSA9PiBpdGVtLm5hbWUgPT09IG5hbWUpO1xuXG5cdFx0dGhpcy5zcmMgPSB0aGlzLl9wbGF5YmFja1F1YWxpdHk7XG5cdFx0dGhpcy5yYXRlID0gcmF0ZTtcblx0XHR0aGlzLmN1cnJlbnRUaW1lID0gdGltZTtcblxuXHRcdGlmIChzdG9wKSB7XG5cdFx0XHR0aGlzLnBhdXNlKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucGxheSgpO1xuXHRcdH1cblxuXHRcdHRoaXMudHJpZ2dlcigncXVhbGl0eWNoYW5nZScsIHRoaXMuX3BsYXliYWNrUXVhbGl0eSk7XG5cblx0fVxuXG5cdGdldCBwbGF5YmFja1F1YWxpdHkoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3BsYXliYWNrUXVhbGl0eTtcblx0fVxuXG5cdHNldCBzcmMgKHNyYykge1xuXHRcdGlmKHNyYyA9PSBudWxsKSByZXR1cm47XG5cdFx0aWYodGhpcy5zcmMgJiYgdGhpcy5zcmMudXJsID09PSBzcmMudXJsKSByZXR1cm47XG5cblx0XHR0aGlzLm1lZGlhLnNyYyA9IHNyYy51cmw7XG5cblx0XHR0aGlzLl9zb3VyY2UgPSBzcmM7XG5cdH1cblxuXHRnZXQgc3JjICgpIHtcblx0XHRyZXR1cm4gdGhpcy5fc291cmNlXG5cdH1cblxuXHRnZXQgdHJhY2sgKCkge1xuXHRcdHJldHVybiB0aGlzLl90cmFjaztcblx0fVxuXG5cdHNldCB0cmFjayAodmFsdWUpIHtcblx0XHRbLi4udGhpcy5tZWRpYS50ZXh0VHJhY2tzXS5mb3JFYWNoKGl0ZW0gPT4ge1xuXHRcdFx0aWYodmFsdWUgIT0gbnVsbCAmJiBpdGVtLmxhbmd1YWdlID09PSB2YWx1ZS5sYW5ndWFnZSkge1xuXHRcdFx0XHRpdGVtLm1vZGUgPSAnc2hvd2luZydcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGl0ZW0ubW9kZSA9ICdoaWRkZW4nO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdHRoaXMuX3RyYWNrID0gdmFsdWU7XG5cdFx0dGhpcy50cmlnZ2VyKCd0cmFja3NjaGFuZ2UnKTtcblx0fVxuXG5cdGdldCBwYXVzZWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWVkaWEucGF1c2VkO1xuXHR9XG5cblx0Z2V0IHZvbHVtZSAoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWVkaWEudm9sdW1lO1xuXHR9XG5cblx0c2V0IHZvbHVtZSAodmFsdWUpIHtcblx0XHRzdXBlci52b2x1bWUgPSB2YWx1ZTtcblx0XHRjb25zdCBwbGF5ZXIgPSB0aGlzLnBsYXllcjtcblx0XHRpZiAodmFsdWUgPiAxKSB7XG5cdFx0XHR0aGlzLm1lZGlhLnZvbHVtZSA9IDE7XG5cdFx0fSBlbHNlIGlmICh2YWx1ZSA8IHBsYXllci5vcHRpb25zLnZvbHVtZS5tdXRlbGltaXQpIHtcblx0XHRcdHRoaXMubWVkaWEudm9sdW1lID0gMDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5tZWRpYS52b2x1bWUgPSB2YWx1ZTtcblx0XHR9XG5cdFx0dGhpcy5tZWRpYS5tdXRlID0gKHZhbHVlIDwgcGxheWVyLm9wdGlvbnMudm9sdW1lLm11dGVsaW1pdCk7XG5cdH1cblxuXG5cdGdldCBidWZmZXJlZCAoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWVkaWEuYnVmZmVyZWQ7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybiB7VGltZVJhbmdlc31cblx0ICovXG5cdGdldCBzZWVrYWJsZSAoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWVkaWEuc2Vla2FibGU7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybiB7VGltZVJhbmdlc31cblx0ICovXG5cdGdldCBwbGF5ZWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWVkaWEucGxheWVkO1xuXHR9XG5cblx0Z2V0IGVuZGVkKCkge1xuXHRcdHJldHVybiB0aGlzLm1lZGlhLmVuZGVkO1xuXHR9XG5cblx0Z2V0IHBsYXllZFBlcmNlbnRhZ2UoKSB7XG5cdFx0bGV0IHJlc3VsdCA9IDA7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBsYXllZC5sZW5ndGg7IGkrKykge1xuXHRcdFx0cmVzdWx0ICs9ICh0aGlzLnBsYXllZC5lbmQoaSkgLSB0aGlzLnBsYXllZC5zdGFydChpKSlcblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0IC8gdGhpcy5kdXJhdGlvbiAqIDEwMFxuXHR9XG5cblx0Z2V0IGN1cnJlbnRTcmMoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWVkaWEuY3VycmVudFNyYztcblx0fVxuXG5cdGluaXQgKCkge1xuXHRcdHN1cGVyLmluaXQoKTtcblx0XHR0aGlzLmxvYWQoKTtcblx0XHRsZXQgZGZkID0gJC5EZWZlcnJlZCgpO1xuXHRcdHRoaXMuX2luaXRTdWJ0aXRsZXMoKTtcblx0XHR0aGlzLl9pbml0VmlkZW8oKVxuXHRcdFx0LmRvbmUoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLl9pbml0UmF0ZSgpO1xuXHRcdFx0XHR0aGlzLl9pbml0Vm9sdW1lKCk7XG5cdFx0XHRcdGRmZC5yZXNvbHZlKCk7XG5cdFx0XHR9KTtcblx0XHRyZXR1cm4gZGZkLnByb21pc2UoKTtcblx0fVxuXG5cdHN1cHBvcnRzRnVsbFNjcmVlbigpIHtcblx0XHRpZiAodHlwZW9mIHRoaXMubWVkaWEud2Via2l0RW50ZXJGdWxsU2NyZWVuID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRjb25zdCB1c2VyQWdlbnQgPSB3aW5kb3cubmF2aWdhdG9yICYmIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50IHx8ICcnO1xuXG5cdFx0XHQvLyBTZWVtcyB0byBiZSBicm9rZW4gaW4gQ2hyb21pdW0vQ2hyb21lICYmIFNhZmFyaSBpbiBMZW9wYXJkXG5cdFx0XHRpZiAoKC9BbmRyb2lkLykudGVzdCh1c2VyQWdlbnQpIHx8ICEoL0Nocm9tZXxNYWMgT1MgWCAxMC41LykudGVzdCh1c2VyQWdlbnQpKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRlbnRlckZ1bGxzY3JlZW4oKSB7XG5cdFx0Y29uc3QgdmlkZW8gPSB0aGlzLm1lZGlhO1xuXHRcdGlmICh2aWRlby5wYXVzZWQgJiYgdmlkZW8ubmV0d29ya1N0YXRlIDw9IHZpZGVvLkhBVkVfTUVUQURBVEEpIHtcblx0XHRcdC8vIGF0dGVtcHQgdG8gcHJpbWUgdGhlIHZpZGVvIGVsZW1lbnQgZm9yIHByb2dyYW1tYXRpYyBhY2Nlc3Ncblx0XHRcdC8vIHRoaXMgaXNuJ3QgbmVjZXNzYXJ5IG9uIHRoZSBkZXNrdG9wIGJ1dCBzaG91bGRuJ3QgaHVydFxuXHRcdFx0dGhpcy5wbGF5KCk7XG5cblx0XHRcdC8vIHBsYXlpbmcgYW5kIHBhdXNpbmcgc3luY2hyb25vdXNseSBkdXJpbmcgdGhlIHRyYW5zaXRpb24gdG8gZnVsbHNjcmVlblxuXHRcdFx0Ly8gY2FuIGdldCBpT1MgfjYuMSBkZXZpY2VzIGludG8gYSBwbGF5L3BhdXNlIGxvb3Bcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLnBhdXNlKCk7XG5cdFx0XHRcdHZpZGVvLndlYmtpdEVudGVyRnVsbFNjcmVlbigpO1xuXHRcdFx0fSwgMCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZpZGVvLndlYmtpdEVudGVyRnVsbFNjcmVlbigpO1xuXHRcdH1cblx0fVxuXG5cdGV4aXRGdWxsc2NyZWVuKCkge1xuXHRcdHRoaXMubWVkaWEud2Via2l0RXhpdEZ1bGxTY3JlZW4oKTtcblx0fVxuXG5cdHRvZ2dsZVBsYXkgKCkge1xuXHRcdGlmICghdGhpcy5tZWRpYS5wbGF5ZWQgfHwgdGhpcy5tZWRpYS5wYXVzZWQpIHtcblx0XHRcdHRoaXMucGxheSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnBhdXNlKCk7XG5cdFx0fVxuXHR9XG5cblx0cGxheSAoKSB7XG5cdFx0bGV0IGRmZCA9ICQuRGVmZXJyZWQoKTtcblx0XHRjb25zdCBwbGF5UHJvbWlzZSA9IHRoaXMubWVkaWEucGxheSgpO1xuXG5cdFx0aWYocGxheVByb21pc2UgIT0gbnVsbCkge1xuXHRcdFx0cGxheVByb21pc2UudGhlbihmdW5jdGlvbigpIHtcblx0XHRcdFx0ZGZkLnJlc29sdmUoKTtcblx0XHRcdH0pXG5cdFx0fSBlbHNlIHtcblx0XHRcdGRmZC5yZXNvbHZlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBkZmQucHJvbWlzZSgpO1xuXHR9XG5cblx0cGF1c2UgKCkge1xuXHRcdGxldCBkZmQgPSAkLkRlZmVycmVkKCk7XG5cdFx0Y29uc3QgcGF1c2VQcm9taXNlID0gdGhpcy5tZWRpYS5wYXVzZSgpO1xuXG5cdFx0aWYocGF1c2VQcm9taXNlICE9IG51bGwpIHtcblx0XHRcdHBhdXNlUHJvbWlzZS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRkZmQucmVzb2x2ZSgpO1xuXHRcdFx0fSlcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZGZkLnJlc29sdmUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIGRmZC5wcm9taXNlKCk7XG5cdH1cblxuXHRsb2FkKCkge1xuXHRcdHJldHVybiB0aGlzLm1lZGlhLmxvYWQoKVxuXHR9XG5cblx0X2luaXRTdWJ0aXRsZXMgKCkge1xuXHRcdGxldCBfc2VsZiA9IHRoaXM7XG5cdFx0dGhpcy5lbGVtZW50LmNoaWxkcmVuKCd0cmFja1traW5kPVwic3VidGl0bGVzXCJdJykuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0XHRjb25zdCBsYW5ndWFnZSA9ICQodGhpcykuYXR0cignc3JjbGFuZycpO1xuXHRcdFx0Y29uc3QgdGl0bGUgPSAkKHRoaXMpLmF0dHIoJ2xhYmVsJyk7XG5cdFx0XHRjb25zdCBzcmMgPSAkKHRoaXMpLmF0dHIoJ3NyYycpO1xuXHRcdFx0aWYgKHRpdGxlLmxlbmd0aCA+IDAgJiYgc3JjLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0X3NlbGYuc3VidGl0bGVzLnB1c2goe1xuXHRcdFx0XHRcdHRpdGxlIDogdGl0bGUsXG5cdFx0XHRcdFx0bmFtZSA6IGxhbmd1YWdlLFxuXHRcdFx0XHRcdGxhbmd1YWdlIDogbGFuZ3VhZ2Vcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRfaW5pdFZpZGVvICgpIHtcblx0XHRsZXQgZGZkID0gJC5EZWZlcnJlZCgpO1xuXHRcdGlmICh0aGlzLm1lZGlhLnJlYWR5U3RhdGUgPiBIVE1MTWVkaWFFbGVtZW50LkhBVkVfTk9USElORykge1xuXHRcdFx0ZGZkLnJlc29sdmUoKTtcblx0XHRcdHRoaXMuX3RleHRUcmFja3NIYWNrKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCQodGhpcy5tZWRpYSkub25lKCdsb2FkZWRtZXRhZGF0YScsIChlKSA9PiB7XG5cdFx0XHRcdGRmZC5yZXNvbHZlKClcblx0XHRcdFx0dGhpcy5fdGV4dFRyYWNrc0hhY2soKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRyZXR1cm4gZGZkLnByb21pc2UoKTtcblx0fVxuXG5cdF90ZXh0VHJhY2tzSGFjayAoKSB7XG5cblx0XHQvLyBUaGlzIGlzIGdlbmVyYWxseSBmb3IgRmlyZWZveCBvbmx5XG5cdFx0Ly8gYmVjYXVzZSBpdCBzb21laG93IHJlc2V0cyB0cmFjayBsaXN0XG5cdFx0Ly8gZm9yIHZpZGVvIGVsZW1lbnQgYWZ0ZXIgRE9NIG1hbmlwdWxhdGlvbi5cblxuXHRcdGlmICh0aGlzLm1lZGlhLnRleHRUcmFja3MubGVuZ3RoID09PSAwICYmIHRoaXMuc3VidGl0bGVzLmxlbmd0aCA+IDApIHtcblx0XHRcdHRoaXMuZWxlbWVudC5jaGlsZHJlbigndHJhY2tba2luZD1cInN1YnRpdGxlc1wiXScpLnJlbW92ZSgpO1xuXHRcdFx0Zm9yICh2YXIgaSBpbiB0aGlzLnN1YnRpdGxlcykge1xuXHRcdFx0XHRpZiAodGhpcy5zdWJ0aXRsZXMuaGFzT3duUHJvcGVydHkoaSkpIHtcblx0XHRcdFx0XHR0aGlzLmVsZW1lbnRcblx0XHRcdFx0XHRcdC5hcHBlbmQoJCgnPHRyYWNrLz4nKVxuXHRcdFx0XHRcdFx0XHQuYXR0cignbGFiZWwnLCB0aGlzLnN1YnRpdGxlc1sgaSBdLnRpdGxlKVxuXHRcdFx0XHRcdFx0XHQuYXR0cignc3JjJywgdGhpcy5zdWJ0aXRsZXNbIGkgXS5zcmMpXG5cdFx0XHRcdFx0XHRcdC5hdHRyKCdzcmNsYW5nJywgdGhpcy5zdWJ0aXRsZXNbIGkgXS5sYW5ndWFnZSlcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ2lkJywgdGhpcy5zdWJ0aXRsZXNbIGkgXS5sYW5ndWFnZSlcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ2tpbmQnLCAnc3VidGl0bGVzJykpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cbn1cbi8qKlxuICogTWluIHJhdGUgZm9yIGFuZHJvaWQgYW5kIGlvc1xuICovXG5IdG1sNS5NT0JJTEVfTUlOX1JBVEUgPSAwLjU7XG5cbi8qKlxuICogTWF4IHJhdGUgZm9yIGFuZHJvaWQgYW5kIGlvc1xuICovXG5IdG1sNS5NT0JJTEVfTUFYX1JBVEUgPSAyO1xuXG5IdG1sNS5TQUZBUklfTUlOX1JBVEUgPSAwLjU7XG5cbkh0bWw1LlNBRkFSSV9NQVhfUkFURSA9IDI7XG5cbkh0bWw1LlRFU1RfVklERU8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpO1xuXG4vKipcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKiAgICAgICAgIC0gVHJ1ZSBpZiB2b2x1bWUgY2FuIGJlIGNvbnRyb2xsZWRcbiAqICAgICAgICAgLSBGYWxzZSBvdGhlcndpc2VcbiAqL1xuSHRtbDUuY2FuQ29udHJvbFZvbHVtZSA9IGZ1bmN0aW9uKCkge1xuXHQvLyBJRSB3aWxsIGVycm9yIGlmIFdpbmRvd3MgTWVkaWEgUGxheWVyIG5vdCBpbnN0YWxsZWQgIzMzMTVcblx0dHJ5IHtcblx0XHRjb25zdCB2b2x1bWUgPSBIdG1sNS5URVNUX1ZJREVPLnZvbHVtZTtcblxuXHRcdEh0bWw1LlRFU1RfVklERU8udm9sdW1lID0gKHZvbHVtZSAvIDIpICsgMC4xO1xuXHRcdHJldHVybiB2b2x1bWUgIT09IEh0bWw1LlRFU1RfVklERU8udm9sdW1lO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xuXG5IdG1sNS5wcm90b3R5cGUuZmVhdHVyZUNvbnRyb2xWb2x1bWUgPSBIdG1sNS5jYW5Db250cm9sVm9sdW1lKCk7XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnSHRtbDUnLCBIdG1sNSk7XG5leHBvcnQgZGVmYXVsdCBIdG1sNTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9lbnRpdHkvSHRtbDUuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudHMvQ29tcG9uZW50JztcbmltcG9ydCBDb29raWUgZnJvbSAnLi4vdXRpbHMvY29va2llJztcbmltcG9ydCBNZWRpYUVycm9yIGZyb20gJy4uL01lZGlhRXJyb3InO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuY2xhc3MgRW50aXR5IGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblx0XHR0aGlzLl90cmlnZ2VyU3RhY2sgPSBbXTtcblx0XHR0aGlzLl9zdG9wTGlzdGVuID0gZmFsc2U7XG5cblx0XHRpZiAodGhpcy5wbGF5ZXIub3B0aW9ucy5zcmMgPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5wbGF5ZXIuZXJyb3IgPSBuZXcgTWVkaWFFcnJvcign0JLQuNC00LXQvtGE0LDQudC7INC90LUg0L3QsNC50LTQtdC9LicpO1xuXHRcdH1cblxuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0dHJpZ2dlciguLi5hcmdzKSB7XG5cdFx0aWYoIXRoaXMuX3N0b3BMaXN0ZW4pIHtcblx0XHRcdHRoaXMuX3RyaWdnZXJTdGFjay5wdXNoKGFyZ3MpO1xuXHRcdH1cblx0XHRzdXBlci50cmlnZ2VyKC4uLmFyZ3MpO1xuXHR9XG5cblx0aW5pdCgpIHtcblx0XHR0aGlzLl9zdG9wTGlzdGVuID0gdHJ1ZTtcblx0XHR0aGlzLl90cmlnZ2VyU3RhY2suZm9yRWFjaChhcmdzID0+IHtcblx0XHRcdHRoaXMudHJpZ2dlciguLi5hcmdzKTtcblx0XHR9KTtcblx0fVxuXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudCA9ICQoJzxkaXYgLz4nKTtcblx0fVxuXG5cdHNldCBwb3N0ZXIodXJsKSB7XG5cdFx0dGhpcy5fcG9zdGVyID0gdXJsO1xuXHRcdHRoaXMudHJpZ2dlcigncG9zdGVyY2hhbmdlJywgeyB1cmwgfSk7XG5cdH1cblxuXG5cdGdldCBwb3N0ZXIoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3Bvc3Rlcjtcblx0fVxuXG5cdGdldCBjdXJyZW50VGltZSgpIHtcblx0XHRyZXR1cm5cblx0fVxuXG5cdHNldCBjdXJyZW50VGltZSh2YWx1ZSkge1xuXG5cdH1cblxuXHRnZXQgZHVyYXRpb24oKSB7XG5cdFx0cmV0dXJuXG5cdH1cblxuXHRzZXQgbXV0ZWQodmFsdWUpIHtcblxuXHR9XG5cblx0Z2V0IG11dGVkKCkge1xuXG5cdH1cblxuXHRnZXQgaGVpZ2h0KCkge1xuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQuaW5uZXJIZWlnaHQoKVxuXHR9XG5cblx0Z2V0IHdpZHRoKCkge1xuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQud2lkdGgoKVxuXHR9XG5cblx0c2V0IHJhdGVNYXgodmFsdWUpIHtcblx0XHR0aGlzLl9yYXRlTWF4ID0gdmFsdWU7XG5cdH1cblxuXHRzZXQgcmF0ZU1pbih2YWx1ZSkge1xuXHRcdHRoaXMuX3JhdGVNaW4gPSB2YWx1ZTtcblx0fVxuXG5cdGdldCByYXRlTWF4KCkge1xuXHRcdHJldHVybiB0aGlzLl9yYXRlTWF4IHx8IHRoaXMucGxheWVyLm9wdGlvbnMucmF0ZS5tYXg7XG5cblx0fVxuXG5cdGdldCByYXRlTWluKCkge1xuXHRcdHJldHVybiB0aGlzLl9yYXRlTWluIHx8IHRoaXMucGxheWVyLm9wdGlvbnMucmF0ZS5taW47XG5cdH1cblxuXHRnZXQgcmF0ZSgpIHtcblx0fVxuXG5cdHNldCByYXRlKHZhbHVlKSB7XG5cdFx0aWYodmFsdWUgPiB0aGlzLnJhdGVNYXggfHwgdmFsdWUgPCB0aGlzLnJhdGVNaW4pIHJldHVybjtcblx0XHRDb29raWUuc2V0KCdyYXRlJywgdmFsdWUpO1xuXHR9XG5cblx0aW5jcmVhc2VSYXRlKCkge1xuXHRcdHRoaXMucmF0ZSArPSB0aGlzLnBsYXllci5vcHRpb25zLnJhdGUuc3RlcDtcblx0fVxuXG5cdGRlY3JlYXNlUmF0ZSgpIHtcblx0XHR0aGlzLnJhdGUgLT0gdGhpcy5wbGF5ZXIub3B0aW9ucy5yYXRlLnN0ZXA7XG5cdH1cblxuXHRzZXQgcGxheWJhY2tRdWFsaXR5KG5hbWUpIHtcblx0XHRjb25zdCBsZXZlbHMgPSB0aGlzLmdldEF2YWlsYWJsZVF1YWxpdHlMZXZlbHMoKTtcblx0XHRpZighbGV2ZWxzLnNvbWUob2JqID0+IG5hbWUgaW4gb2JqKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0fVxuXG5cdGdldCBwbGF5YmFja1F1YWxpdHkoKSB7XG5cblx0fVxuXG5cdGdldCBwYXVzZWQoKSB7XG5cblx0fVxuXG5cdGdldCBwbGF5ZWQoKSB7XG5cblx0fVxuXG5cdGdldCBkZWZhdWx0UmF0ZSgpIHtcblx0XHRyZXR1cm4gQ29va2llLmdldCgncmF0ZScpIHx8IHRoaXMucGxheWVyLm9wdGlvbnMucmF0ZS5kZWZhdWx0XG5cdH1cblxuXHRnZXQgZGVmYXVsdFZvbHVtZSAoKSB7XG5cdFx0cmV0dXJuIENvb2tpZS5nZXQoJ3ZvbHVtZScpIHx8IHRoaXMucGxheWVyLm9wdGlvbnMudm9sdW1lLmRlZmF1bHQ7XG5cdH1cblxuXHRzZXQgdm9sdW1lKHZhbHVlKSB7XG5cdFx0Y29uc3QgcGxheWVyID0gdGhpcy5wbGF5ZXI7XG5cdFx0aWYodmFsdWUgPCAxICYmIHZhbHVlID4gcGxheWVyLm9wdGlvbnMudm9sdW1lLm11dGVsaW1pdCkge1xuXHRcdFx0Q29va2llLnNldCgndm9sdW1lJywgdmFsdWUpO1xuXHRcdH1cblx0fVxuXG5cdHNldCBzcmMgKHZhbHVlKSB7XG5cblx0fVxuXG5cdGdldCBzcmMoKSB7XG5cblx0fVxuXG5cdHN1cHBvcnRzRnVsbFNjcmVlbigpIHtcblxuXHR9XG5cblx0cGxheSgpIHtcblxuXHR9XG5cblx0cGF1c2UgKCkge1xuXG5cdH1cblxuXHRsb2FkKCkge1xuXHR9XG5cblx0dG9nZ2xlUGxheSAoKSB7XG5cdFx0aWYgKHRoaXMucGF1c2VkKSB7XG5cdFx0XHR0aGlzLnBsYXkoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5wYXVzZSgpO1xuXHRcdH1cblx0fVxuXG5cdF9pbml0UmF0ZSAoKSB7XG5cdFx0dGhpcy5yYXRlID0gdGhpcy5kZWZhdWx0UmF0ZTtcblx0fVxuXG5cdF9pbml0Vm9sdW1lICgpIHtcblx0XHR0aGlzLnZvbHVtZSA9IHRoaXMuZGVmYXVsdFZvbHVtZTtcblx0fVxuXG59XG5FbnRpdHkucHJvdG90eXBlLmZlYXR1cmVDb250cm9sVm9sdW1lID0gdHJ1ZTtcblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdFbnRpdHknLCBFbnRpdHkpO1xuXG5leHBvcnQgZGVmYXVsdCBFbnRpdHk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvZW50aXR5L0VudGl0eS5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGRlZmluZSA9IHJlcXVpcmUoJ2RlZmluZS1wcm9wZXJ0aWVzJyk7XG52YXIgRVMgPSByZXF1aXJlKCdlcy1hYnN0cmFjdC9lczYnKTtcblxudmFyIGltcGxlbWVudGF0aW9uID0gcmVxdWlyZSgnLi9pbXBsZW1lbnRhdGlvbicpO1xudmFyIGdldFBvbHlmaWxsID0gcmVxdWlyZSgnLi9wb2x5ZmlsbCcpO1xudmFyIHNoaW0gPSByZXF1aXJlKCcuL3NoaW0nKTtcblxudmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xuXG52YXIgcG9seWZpbGwgPSBnZXRQb2x5ZmlsbCgpO1xuXG52YXIgYm91bmRGaW5kU2hpbSA9IGZ1bmN0aW9uIGZpbmQoYXJyYXksIHByZWRpY2F0ZSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG5cdEVTLlJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJyYXkpO1xuXHR2YXIgYXJncyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcblx0cmV0dXJuIHBvbHlmaWxsLmFwcGx5KGFycmF5LCBhcmdzKTtcbn07XG5cbmRlZmluZShib3VuZEZpbmRTaGltLCB7XG5cdGdldFBvbHlmaWxsOiBnZXRQb2x5ZmlsbCxcblx0aW1wbGVtZW50YXRpb246IGltcGxlbWVudGF0aW9uLFxuXHRzaGltOiBzaGltXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBib3VuZEZpbmRTaGltO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2FycmF5LnByb3RvdHlwZS5maW5kL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBrZXlzID0gcmVxdWlyZSgnb2JqZWN0LWtleXMnKTtcbnZhciBoYXNTeW1ib2xzID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgU3ltYm9sKCdmb28nKSA9PT0gJ3N5bWJvbCc7XG5cbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgY29uY2F0ID0gQXJyYXkucHJvdG90eXBlLmNvbmNhdDtcbnZhciBvcmlnRGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbnZhciBpc0Z1bmN0aW9uID0gZnVuY3Rpb24gKGZuKSB7XG5cdHJldHVybiB0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicgJiYgdG9TdHIuY2FsbChmbikgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59O1xuXG52YXIgYXJlUHJvcGVydHlEZXNjcmlwdG9yc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICgpIHtcblx0dmFyIG9iaiA9IHt9O1xuXHR0cnkge1xuXHRcdG9yaWdEZWZpbmVQcm9wZXJ0eShvYmosICd4JywgeyBlbnVtZXJhYmxlOiBmYWxzZSwgdmFsdWU6IG9iaiB9KTtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnMsIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG5cdFx0Zm9yICh2YXIgXyBpbiBvYmopIHsgLy8ganNjczppZ25vcmUgZGlzYWxsb3dVbnVzZWRWYXJpYWJsZXNcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0cmV0dXJuIG9iai54ID09PSBvYmo7XG5cdH0gY2F0Y2ggKGUpIHsgLyogdGhpcyBpcyBJRSA4LiAqL1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufTtcbnZhciBzdXBwb3J0c0Rlc2NyaXB0b3JzID0gb3JpZ0RlZmluZVByb3BlcnR5ICYmIGFyZVByb3BlcnR5RGVzY3JpcHRvcnNTdXBwb3J0ZWQoKTtcblxudmFyIGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZSwgdmFsdWUsIHByZWRpY2F0ZSkge1xuXHRpZiAobmFtZSBpbiBvYmplY3QgJiYgKCFpc0Z1bmN0aW9uKHByZWRpY2F0ZSkgfHwgIXByZWRpY2F0ZSgpKSkge1xuXHRcdHJldHVybjtcblx0fVxuXHRpZiAoc3VwcG9ydHNEZXNjcmlwdG9ycykge1xuXHRcdG9yaWdEZWZpbmVQcm9wZXJ0eShvYmplY3QsIG5hbWUsIHtcblx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0XHRcdGVudW1lcmFibGU6IGZhbHNlLFxuXHRcdFx0dmFsdWU6IHZhbHVlLFxuXHRcdFx0d3JpdGFibGU6IHRydWVcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHRvYmplY3RbbmFtZV0gPSB2YWx1ZTtcblx0fVxufTtcblxudmFyIGRlZmluZVByb3BlcnRpZXMgPSBmdW5jdGlvbiAob2JqZWN0LCBtYXApIHtcblx0dmFyIHByZWRpY2F0ZXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IHt9O1xuXHR2YXIgcHJvcHMgPSBrZXlzKG1hcCk7XG5cdGlmIChoYXNTeW1ib2xzKSB7XG5cdFx0cHJvcHMgPSBjb25jYXQuY2FsbChwcm9wcywgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhtYXApKTtcblx0fVxuXHRmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0ZGVmaW5lUHJvcGVydHkob2JqZWN0LCBwcm9wc1tpXSwgbWFwW3Byb3BzW2ldXSwgcHJlZGljYXRlc1twcm9wc1tpXV0pO1xuXHR9XG59O1xuXG5kZWZpbmVQcm9wZXJ0aWVzLnN1cHBvcnRzRGVzY3JpcHRvcnMgPSAhIXN1cHBvcnRzRGVzY3JpcHRvcnM7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVmaW5lUHJvcGVydGllcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kZWZpbmUtcHJvcGVydGllcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG52YXIgaXNBcmdzID0gcmVxdWlyZSgnLi9pc0FyZ3VtZW50cycpO1xuXG52YXIgb3JpZ0tleXMgPSBPYmplY3Qua2V5cztcbnZhciBrZXlzU2hpbSA9IG9yaWdLZXlzID8gZnVuY3Rpb24ga2V5cyhvKSB7IHJldHVybiBvcmlnS2V5cyhvKTsgfSA6IHJlcXVpcmUoJy4vaW1wbGVtZW50YXRpb24nKTtcblxudmFyIG9yaWdpbmFsS2V5cyA9IE9iamVjdC5rZXlzO1xuXG5rZXlzU2hpbS5zaGltID0gZnVuY3Rpb24gc2hpbU9iamVjdEtleXMoKSB7XG5cdGlmIChPYmplY3Qua2V5cykge1xuXHRcdHZhciBrZXlzV29ya3NXaXRoQXJndW1lbnRzID0gKGZ1bmN0aW9uICgpIHtcblx0XHRcdC8vIFNhZmFyaSA1LjAgYnVnXG5cdFx0XHR2YXIgYXJncyA9IE9iamVjdC5rZXlzKGFyZ3VtZW50cyk7XG5cdFx0XHRyZXR1cm4gYXJncyAmJiBhcmdzLmxlbmd0aCA9PT0gYXJndW1lbnRzLmxlbmd0aDtcblx0XHR9KDEsIDIpKTtcblx0XHRpZiAoIWtleXNXb3Jrc1dpdGhBcmd1bWVudHMpIHtcblx0XHRcdE9iamVjdC5rZXlzID0gZnVuY3Rpb24ga2V5cyhvYmplY3QpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBmdW5jLW5hbWUtbWF0Y2hpbmdcblx0XHRcdFx0aWYgKGlzQXJncyhvYmplY3QpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG9yaWdpbmFsS2V5cyhzbGljZS5jYWxsKG9iamVjdCkpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBvcmlnaW5hbEtleXMob2JqZWN0KTtcblx0XHRcdH07XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdE9iamVjdC5rZXlzID0ga2V5c1NoaW07XG5cdH1cblx0cmV0dXJuIE9iamVjdC5rZXlzIHx8IGtleXNTaGltO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBrZXlzU2hpbTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9vYmplY3Qta2V5cy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQXJndW1lbnRzKHZhbHVlKSB7XG5cdHZhciBzdHIgPSB0b1N0ci5jYWxsKHZhbHVlKTtcblx0dmFyIGlzQXJncyA9IHN0ciA9PT0gJ1tvYmplY3QgQXJndW1lbnRzXSc7XG5cdGlmICghaXNBcmdzKSB7XG5cdFx0aXNBcmdzID0gc3RyICE9PSAnW29iamVjdCBBcnJheV0nICYmXG5cdFx0XHR2YWx1ZSAhPT0gbnVsbCAmJlxuXHRcdFx0dHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJlxuXHRcdFx0dHlwZW9mIHZhbHVlLmxlbmd0aCA9PT0gJ251bWJlcicgJiZcblx0XHRcdHZhbHVlLmxlbmd0aCA+PSAwICYmXG5cdFx0XHR0b1N0ci5jYWxsKHZhbHVlLmNhbGxlZSkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG5cdH1cblx0cmV0dXJuIGlzQXJncztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vb2JqZWN0LWtleXMvaXNBcmd1bWVudHMuanNcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIGtleXNTaGltO1xuaWYgKCFPYmplY3Qua2V5cykge1xuXHQvLyBtb2RpZmllZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9lcy1zaGltcy9lczUtc2hpbVxuXHR2YXIgaGFzID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblx0dmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblx0dmFyIGlzQXJncyA9IHJlcXVpcmUoJy4vaXNBcmd1bWVudHMnKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBnbG9iYWwtcmVxdWlyZVxuXHR2YXIgaXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblx0dmFyIGhhc0RvbnRFbnVtQnVnID0gIWlzRW51bWVyYWJsZS5jYWxsKHsgdG9TdHJpbmc6IG51bGwgfSwgJ3RvU3RyaW5nJyk7XG5cdHZhciBoYXNQcm90b0VudW1CdWcgPSBpc0VudW1lcmFibGUuY2FsbChmdW5jdGlvbiAoKSB7fSwgJ3Byb3RvdHlwZScpO1xuXHR2YXIgZG9udEVudW1zID0gW1xuXHRcdCd0b1N0cmluZycsXG5cdFx0J3RvTG9jYWxlU3RyaW5nJyxcblx0XHQndmFsdWVPZicsXG5cdFx0J2hhc093blByb3BlcnR5Jyxcblx0XHQnaXNQcm90b3R5cGVPZicsXG5cdFx0J3Byb3BlcnR5SXNFbnVtZXJhYmxlJyxcblx0XHQnY29uc3RydWN0b3InXG5cdF07XG5cdHZhciBlcXVhbHNDb25zdHJ1Y3RvclByb3RvdHlwZSA9IGZ1bmN0aW9uIChvKSB7XG5cdFx0dmFyIGN0b3IgPSBvLmNvbnN0cnVjdG9yO1xuXHRcdHJldHVybiBjdG9yICYmIGN0b3IucHJvdG90eXBlID09PSBvO1xuXHR9O1xuXHR2YXIgZXhjbHVkZWRLZXlzID0ge1xuXHRcdCRhcHBsaWNhdGlvbkNhY2hlOiB0cnVlLFxuXHRcdCRjb25zb2xlOiB0cnVlLFxuXHRcdCRleHRlcm5hbDogdHJ1ZSxcblx0XHQkZnJhbWU6IHRydWUsXG5cdFx0JGZyYW1lRWxlbWVudDogdHJ1ZSxcblx0XHQkZnJhbWVzOiB0cnVlLFxuXHRcdCRpbm5lckhlaWdodDogdHJ1ZSxcblx0XHQkaW5uZXJXaWR0aDogdHJ1ZSxcblx0XHQkb25tb3pmdWxsc2NyZWVuY2hhbmdlOiB0cnVlLFxuXHRcdCRvbm1vemZ1bGxzY3JlZW5lcnJvcjogdHJ1ZSxcblx0XHQkb3V0ZXJIZWlnaHQ6IHRydWUsXG5cdFx0JG91dGVyV2lkdGg6IHRydWUsXG5cdFx0JHBhZ2VYT2Zmc2V0OiB0cnVlLFxuXHRcdCRwYWdlWU9mZnNldDogdHJ1ZSxcblx0XHQkcGFyZW50OiB0cnVlLFxuXHRcdCRzY3JvbGxMZWZ0OiB0cnVlLFxuXHRcdCRzY3JvbGxUb3A6IHRydWUsXG5cdFx0JHNjcm9sbFg6IHRydWUsXG5cdFx0JHNjcm9sbFk6IHRydWUsXG5cdFx0JHNlbGY6IHRydWUsXG5cdFx0JHdlYmtpdEluZGV4ZWREQjogdHJ1ZSxcblx0XHQkd2Via2l0U3RvcmFnZUluZm86IHRydWUsXG5cdFx0JHdpbmRvdzogdHJ1ZVxuXHR9O1xuXHR2YXIgaGFzQXV0b21hdGlvbkVxdWFsaXR5QnVnID0gKGZ1bmN0aW9uICgpIHtcblx0XHQvKiBnbG9iYWwgd2luZG93ICovXG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7IHJldHVybiBmYWxzZTsgfVxuXHRcdGZvciAodmFyIGsgaW4gd2luZG93KSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRpZiAoIWV4Y2x1ZGVkS2V5c1snJCcgKyBrXSAmJiBoYXMuY2FsbCh3aW5kb3csIGspICYmIHdpbmRvd1trXSAhPT0gbnVsbCAmJiB0eXBlb2Ygd2luZG93W2tdID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRlcXVhbHNDb25zdHJ1Y3RvclByb3RvdHlwZSh3aW5kb3dba10pO1xuXHRcdFx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9KCkpO1xuXHR2YXIgZXF1YWxzQ29uc3RydWN0b3JQcm90b3R5cGVJZk5vdEJ1Z2d5ID0gZnVuY3Rpb24gKG8pIHtcblx0XHQvKiBnbG9iYWwgd2luZG93ICovXG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8ICFoYXNBdXRvbWF0aW9uRXF1YWxpdHlCdWcpIHtcblx0XHRcdHJldHVybiBlcXVhbHNDb25zdHJ1Y3RvclByb3RvdHlwZShvKTtcblx0XHR9XG5cdFx0dHJ5IHtcblx0XHRcdHJldHVybiBlcXVhbHNDb25zdHJ1Y3RvclByb3RvdHlwZShvKTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9O1xuXG5cdGtleXNTaGltID0gZnVuY3Rpb24ga2V5cyhvYmplY3QpIHtcblx0XHR2YXIgaXNPYmplY3QgPSBvYmplY3QgIT09IG51bGwgJiYgdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCc7XG5cdFx0dmFyIGlzRnVuY3Rpb24gPSB0b1N0ci5jYWxsKG9iamVjdCkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG5cdFx0dmFyIGlzQXJndW1lbnRzID0gaXNBcmdzKG9iamVjdCk7XG5cdFx0dmFyIGlzU3RyaW5nID0gaXNPYmplY3QgJiYgdG9TdHIuY2FsbChvYmplY3QpID09PSAnW29iamVjdCBTdHJpbmddJztcblx0XHR2YXIgdGhlS2V5cyA9IFtdO1xuXG5cdFx0aWYgKCFpc09iamVjdCAmJiAhaXNGdW5jdGlvbiAmJiAhaXNBcmd1bWVudHMpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5rZXlzIGNhbGxlZCBvbiBhIG5vbi1vYmplY3QnKTtcblx0XHR9XG5cblx0XHR2YXIgc2tpcFByb3RvID0gaGFzUHJvdG9FbnVtQnVnICYmIGlzRnVuY3Rpb247XG5cdFx0aWYgKGlzU3RyaW5nICYmIG9iamVjdC5sZW5ndGggPiAwICYmICFoYXMuY2FsbChvYmplY3QsIDApKSB7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG9iamVjdC5sZW5ndGg7ICsraSkge1xuXHRcdFx0XHR0aGVLZXlzLnB1c2goU3RyaW5nKGkpKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoaXNBcmd1bWVudHMgJiYgb2JqZWN0Lmxlbmd0aCA+IDApIHtcblx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgb2JqZWN0Lmxlbmd0aDsgKytqKSB7XG5cdFx0XHRcdHRoZUtleXMucHVzaChTdHJpbmcoaikpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRmb3IgKHZhciBuYW1lIGluIG9iamVjdCkge1xuXHRcdFx0XHRpZiAoIShza2lwUHJvdG8gJiYgbmFtZSA9PT0gJ3Byb3RvdHlwZScpICYmIGhhcy5jYWxsKG9iamVjdCwgbmFtZSkpIHtcblx0XHRcdFx0XHR0aGVLZXlzLnB1c2goU3RyaW5nKG5hbWUpKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChoYXNEb250RW51bUJ1Zykge1xuXHRcdFx0dmFyIHNraXBDb25zdHJ1Y3RvciA9IGVxdWFsc0NvbnN0cnVjdG9yUHJvdG90eXBlSWZOb3RCdWdneShvYmplY3QpO1xuXG5cdFx0XHRmb3IgKHZhciBrID0gMDsgayA8IGRvbnRFbnVtcy5sZW5ndGg7ICsraykge1xuXHRcdFx0XHRpZiAoIShza2lwQ29uc3RydWN0b3IgJiYgZG9udEVudW1zW2tdID09PSAnY29uc3RydWN0b3InKSAmJiBoYXMuY2FsbChvYmplY3QsIGRvbnRFbnVtc1trXSkpIHtcblx0XHRcdFx0XHR0aGVLZXlzLnB1c2goZG9udEVudW1zW2tdKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gdGhlS2V5cztcblx0fTtcbn1cbm1vZHVsZS5leHBvcnRzID0ga2V5c1NoaW07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vb2JqZWN0LWtleXMvaW1wbGVtZW50YXRpb24uanNcbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2VzMjAxNScpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VzLWFic3RyYWN0L2VzNi5qc1xuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaGFzID0gcmVxdWlyZSgnaGFzJyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCdlcy10by1wcmltaXRpdmUvZXM2Jyk7XG52YXIga2V5cyA9IHJlcXVpcmUoJ29iamVjdC1rZXlzJyk7XG5cbnZhciBHZXRJbnRyaW5zaWMgPSByZXF1aXJlKCcuL0dldEludHJpbnNpYycpO1xuXG52YXIgJFR5cGVFcnJvciA9IEdldEludHJpbnNpYygnJVR5cGVFcnJvciUnKTtcbnZhciAkU3ludGF4RXJyb3IgPSBHZXRJbnRyaW5zaWMoJyVTeW50YXhFcnJvciUnKTtcbnZhciAkQXJyYXkgPSBHZXRJbnRyaW5zaWMoJyVBcnJheSUnKTtcbnZhciAkU3RyaW5nID0gR2V0SW50cmluc2ljKCclU3RyaW5nJScpO1xudmFyICRPYmplY3QgPSBHZXRJbnRyaW5zaWMoJyVPYmplY3QlJyk7XG52YXIgJE51bWJlciA9IEdldEludHJpbnNpYygnJU51bWJlciUnKTtcbnZhciAkU3ltYm9sID0gR2V0SW50cmluc2ljKCclU3ltYm9sJScsIHRydWUpO1xudmFyICRSZWdFeHAgPSBHZXRJbnRyaW5zaWMoJyVSZWdFeHAlJyk7XG5cbnZhciBoYXNTeW1ib2xzID0gISEkU3ltYm9sO1xuXG52YXIgYXNzZXJ0UmVjb3JkID0gcmVxdWlyZSgnLi9oZWxwZXJzL2Fzc2VydFJlY29yZCcpO1xudmFyICRpc05hTiA9IHJlcXVpcmUoJy4vaGVscGVycy9pc05hTicpO1xudmFyICRpc0Zpbml0ZSA9IHJlcXVpcmUoJy4vaGVscGVycy9pc0Zpbml0ZScpO1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSAkTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIgfHwgTWF0aC5wb3coMiwgNTMpIC0gMTtcblxudmFyIGFzc2lnbiA9IHJlcXVpcmUoJy4vaGVscGVycy9hc3NpZ24nKTtcbnZhciBzaWduID0gcmVxdWlyZSgnLi9oZWxwZXJzL3NpZ24nKTtcbnZhciBtb2QgPSByZXF1aXJlKCcuL2hlbHBlcnMvbW9kJyk7XG52YXIgaXNQcmltaXRpdmUgPSByZXF1aXJlKCcuL2hlbHBlcnMvaXNQcmltaXRpdmUnKTtcbnZhciBwYXJzZUludGVnZXIgPSBwYXJzZUludDtcbnZhciBiaW5kID0gcmVxdWlyZSgnZnVuY3Rpb24tYmluZCcpO1xudmFyIGFycmF5U2xpY2UgPSBiaW5kLmNhbGwoRnVuY3Rpb24uY2FsbCwgJEFycmF5LnByb3RvdHlwZS5zbGljZSk7XG52YXIgc3RyU2xpY2UgPSBiaW5kLmNhbGwoRnVuY3Rpb24uY2FsbCwgJFN0cmluZy5wcm90b3R5cGUuc2xpY2UpO1xudmFyIGlzQmluYXJ5ID0gYmluZC5jYWxsKEZ1bmN0aW9uLmNhbGwsICRSZWdFeHAucHJvdG90eXBlLnRlc3QsIC9eMGJbMDFdKyQvaSk7XG52YXIgaXNPY3RhbCA9IGJpbmQuY2FsbChGdW5jdGlvbi5jYWxsLCAkUmVnRXhwLnByb3RvdHlwZS50ZXN0LCAvXjBvWzAtN10rJC9pKTtcbnZhciByZWdleEV4ZWMgPSBiaW5kLmNhbGwoRnVuY3Rpb24uY2FsbCwgJFJlZ0V4cC5wcm90b3R5cGUuZXhlYyk7XG52YXIgbm9uV1MgPSBbJ1xcdTAwODUnLCAnXFx1MjAwYicsICdcXHVmZmZlJ10uam9pbignJyk7XG52YXIgbm9uV1NyZWdleCA9IG5ldyAkUmVnRXhwKCdbJyArIG5vbldTICsgJ10nLCAnZycpO1xudmFyIGhhc05vbldTID0gYmluZC5jYWxsKEZ1bmN0aW9uLmNhbGwsICRSZWdFeHAucHJvdG90eXBlLnRlc3QsIG5vbldTcmVnZXgpO1xudmFyIGludmFsaWRIZXhMaXRlcmFsID0gL15bLStdMHhbMC05YS1mXSskL2k7XG52YXIgaXNJbnZhbGlkSGV4TGl0ZXJhbCA9IGJpbmQuY2FsbChGdW5jdGlvbi5jYWxsLCAkUmVnRXhwLnByb3RvdHlwZS50ZXN0LCBpbnZhbGlkSGV4TGl0ZXJhbCk7XG52YXIgJGNoYXJDb2RlQXQgPSBiaW5kLmNhbGwoRnVuY3Rpb24uY2FsbCwgJFN0cmluZy5wcm90b3R5cGUuY2hhckNvZGVBdCk7XG5cbnZhciB0b1N0ciA9IGJpbmQuY2FsbChGdW5jdGlvbi5jYWxsLCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKTtcblxudmFyICROdW1iZXJWYWx1ZU9mID0gYmluZC5jYWxsKEZ1bmN0aW9uLmNhbGwsIEdldEludHJpbnNpYygnJU51bWJlclByb3RvdHlwZSUnKS52YWx1ZU9mKTtcbnZhciAkQm9vbGVhblZhbHVlT2YgPSBiaW5kLmNhbGwoRnVuY3Rpb24uY2FsbCwgR2V0SW50cmluc2ljKCclQm9vbGVhblByb3RvdHlwZSUnKS52YWx1ZU9mKTtcbnZhciAkU3RyaW5nVmFsdWVPZiA9IGJpbmQuY2FsbChGdW5jdGlvbi5jYWxsLCBHZXRJbnRyaW5zaWMoJyVTdHJpbmdQcm90b3R5cGUlJykudmFsdWVPZik7XG52YXIgJERhdGVWYWx1ZU9mID0gYmluZC5jYWxsKEZ1bmN0aW9uLmNhbGwsIEdldEludHJpbnNpYygnJURhdGVQcm90b3R5cGUlJykudmFsdWVPZik7XG5cbnZhciAkZmxvb3IgPSBNYXRoLmZsb29yO1xudmFyICRhYnMgPSBNYXRoLmFicztcblxudmFyICRPYmplY3RDcmVhdGUgPSBPYmplY3QuY3JlYXRlO1xudmFyICRnT1BEID0gJE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbnZhciAkaXNFeHRlbnNpYmxlID0gJE9iamVjdC5pc0V4dGVuc2libGU7XG5cbnZhciAkZGVmaW5lUHJvcGVydHkgPSAkT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG4vLyB3aGl0ZXNwYWNlIGZyb206IGh0dHA6Ly9lczUuZ2l0aHViLmlvLyN4MTUuNS40LjIwXG4vLyBpbXBsZW1lbnRhdGlvbiBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9lcy1zaGltcy9lczUtc2hpbS9ibG9iL3YzLjQuMC9lczUtc2hpbS5qcyNMMTMwNC1MMTMyNFxudmFyIHdzID0gW1xuXHQnXFx4MDlcXHgwQVxceDBCXFx4MENcXHgwRFxceDIwXFx4QTBcXHUxNjgwXFx1MTgwRVxcdTIwMDBcXHUyMDAxXFx1MjAwMlxcdTIwMDMnLFxuXHQnXFx1MjAwNFxcdTIwMDVcXHUyMDA2XFx1MjAwN1xcdTIwMDhcXHUyMDA5XFx1MjAwQVxcdTIwMkZcXHUyMDVGXFx1MzAwMFxcdTIwMjgnLFxuXHQnXFx1MjAyOVxcdUZFRkYnXG5dLmpvaW4oJycpO1xudmFyIHRyaW1SZWdleCA9IG5ldyBSZWdFeHAoJyheWycgKyB3cyArICddKyl8KFsnICsgd3MgKyAnXSskKScsICdnJyk7XG52YXIgcmVwbGFjZSA9IGJpbmQuY2FsbChGdW5jdGlvbi5jYWxsLCAkU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlKTtcbnZhciB0cmltID0gZnVuY3Rpb24gKHZhbHVlKSB7XG5cdHJldHVybiByZXBsYWNlKHZhbHVlLCB0cmltUmVnZXgsICcnKTtcbn07XG5cbnZhciBFUzUgPSByZXF1aXJlKCcuL2VzNScpO1xuXG52YXIgaGFzUmVnRXhwTWF0Y2hlciA9IHJlcXVpcmUoJ2lzLXJlZ2V4Jyk7XG5cbi8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1hYnN0cmFjdC1vcGVyYXRpb25zXG52YXIgRVM2ID0gYXNzaWduKGFzc2lnbih7fSwgRVM1KSwge1xuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1jYWxsLWYtdi1hcmdzXG5cdENhbGw6IGZ1bmN0aW9uIENhbGwoRiwgVikge1xuXHRcdHZhciBhcmdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgPyBhcmd1bWVudHNbMl0gOiBbXTtcblx0XHRpZiAoIXRoaXMuSXNDYWxsYWJsZShGKSkge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoRiArICcgaXMgbm90IGEgZnVuY3Rpb24nKTtcblx0XHR9XG5cdFx0cmV0dXJuIEYuYXBwbHkoViwgYXJncyk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvcHJpbWl0aXZlXG5cdFRvUHJpbWl0aXZlOiB0b1ByaW1pdGl2ZSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG9ib29sZWFuXG5cdC8vIFRvQm9vbGVhbjogRVM1LlRvQm9vbGVhbixcblxuXHQvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtdG9udW1iZXJcblx0VG9OdW1iZXI6IGZ1bmN0aW9uIFRvTnVtYmVyKGFyZ3VtZW50KSB7XG5cdFx0dmFyIHZhbHVlID0gaXNQcmltaXRpdmUoYXJndW1lbnQpID8gYXJndW1lbnQgOiB0b1ByaW1pdGl2ZShhcmd1bWVudCwgJE51bWJlcik7XG5cdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N5bWJvbCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCBhIFN5bWJvbCB2YWx1ZSB0byBhIG51bWJlcicpO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuXHRcdFx0aWYgKGlzQmluYXJ5KHZhbHVlKSkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5Ub051bWJlcihwYXJzZUludGVnZXIoc3RyU2xpY2UodmFsdWUsIDIpLCAyKSk7XG5cdFx0XHR9IGVsc2UgaWYgKGlzT2N0YWwodmFsdWUpKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLlRvTnVtYmVyKHBhcnNlSW50ZWdlcihzdHJTbGljZSh2YWx1ZSwgMiksIDgpKTtcblx0XHRcdH0gZWxzZSBpZiAoaGFzTm9uV1ModmFsdWUpIHx8IGlzSW52YWxpZEhleExpdGVyYWwodmFsdWUpKSB7XG5cdFx0XHRcdHJldHVybiBOYU47XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIgdHJpbW1lZCA9IHRyaW0odmFsdWUpO1xuXHRcdFx0XHRpZiAodHJpbW1lZCAhPT0gdmFsdWUpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5Ub051bWJlcih0cmltbWVkKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gJE51bWJlcih2YWx1ZSk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvaW50ZWdlclxuXHQvLyBUb0ludGVnZXI6IEVTNS5Ub051bWJlcixcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG9pbnQzMlxuXHQvLyBUb0ludDMyOiBFUzUuVG9JbnQzMixcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG91aW50MzJcblx0Ly8gVG9VaW50MzI6IEVTNS5Ub1VpbnQzMixcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG9pbnQxNlxuXHRUb0ludDE2OiBmdW5jdGlvbiBUb0ludDE2KGFyZ3VtZW50KSB7XG5cdFx0dmFyIGludDE2Yml0ID0gdGhpcy5Ub1VpbnQxNihhcmd1bWVudCk7XG5cdFx0cmV0dXJuIGludDE2Yml0ID49IDB4ODAwMCA/IGludDE2Yml0IC0gMHgxMDAwMCA6IGludDE2Yml0O1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b3VpbnQxNlxuXHQvLyBUb1VpbnQxNjogRVM1LlRvVWludDE2LFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b2ludDhcblx0VG9JbnQ4OiBmdW5jdGlvbiBUb0ludDgoYXJndW1lbnQpIHtcblx0XHR2YXIgaW50OGJpdCA9IHRoaXMuVG9VaW50OChhcmd1bWVudCk7XG5cdFx0cmV0dXJuIGludDhiaXQgPj0gMHg4MCA/IGludDhiaXQgLSAweDEwMCA6IGludDhiaXQ7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvdWludDhcblx0VG9VaW50ODogZnVuY3Rpb24gVG9VaW50OChhcmd1bWVudCkge1xuXHRcdHZhciBudW1iZXIgPSB0aGlzLlRvTnVtYmVyKGFyZ3VtZW50KTtcblx0XHRpZiAoJGlzTmFOKG51bWJlcikgfHwgbnVtYmVyID09PSAwIHx8ICEkaXNGaW5pdGUobnVtYmVyKSkgeyByZXR1cm4gMDsgfVxuXHRcdHZhciBwb3NJbnQgPSBzaWduKG51bWJlcikgKiAkZmxvb3IoJGFicyhudW1iZXIpKTtcblx0XHRyZXR1cm4gbW9kKHBvc0ludCwgMHgxMDApO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b3VpbnQ4Y2xhbXBcblx0VG9VaW50OENsYW1wOiBmdW5jdGlvbiBUb1VpbnQ4Q2xhbXAoYXJndW1lbnQpIHtcblx0XHR2YXIgbnVtYmVyID0gdGhpcy5Ub051bWJlcihhcmd1bWVudCk7XG5cdFx0aWYgKCRpc05hTihudW1iZXIpIHx8IG51bWJlciA8PSAwKSB7IHJldHVybiAwOyB9XG5cdFx0aWYgKG51bWJlciA+PSAweEZGKSB7IHJldHVybiAweEZGOyB9XG5cdFx0dmFyIGYgPSAkZmxvb3IoYXJndW1lbnQpO1xuXHRcdGlmIChmICsgMC41IDwgbnVtYmVyKSB7IHJldHVybiBmICsgMTsgfVxuXHRcdGlmIChudW1iZXIgPCBmICsgMC41KSB7IHJldHVybiBmOyB9XG5cdFx0aWYgKGYgJSAyICE9PSAwKSB7IHJldHVybiBmICsgMTsgfVxuXHRcdHJldHVybiBmO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b3N0cmluZ1xuXHRUb1N0cmluZzogZnVuY3Rpb24gVG9TdHJpbmcoYXJndW1lbnQpIHtcblx0XHRpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnc3ltYm9sJykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IGEgU3ltYm9sIHZhbHVlIHRvIGEgc3RyaW5nJyk7XG5cdFx0fVxuXHRcdHJldHVybiAkU3RyaW5nKGFyZ3VtZW50KTtcblx0fSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG9vYmplY3Rcblx0VG9PYmplY3Q6IGZ1bmN0aW9uIFRvT2JqZWN0KHZhbHVlKSB7XG5cdFx0dGhpcy5SZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHZhbHVlKTtcblx0XHRyZXR1cm4gJE9iamVjdCh2YWx1ZSk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvcHJvcGVydHlrZXlcblx0VG9Qcm9wZXJ0eUtleTogZnVuY3Rpb24gVG9Qcm9wZXJ0eUtleShhcmd1bWVudCkge1xuXHRcdHZhciBrZXkgPSB0aGlzLlRvUHJpbWl0aXZlKGFyZ3VtZW50LCAkU3RyaW5nKTtcblx0XHRyZXR1cm4gdHlwZW9mIGtleSA9PT0gJ3N5bWJvbCcgPyBrZXkgOiB0aGlzLlRvU3RyaW5nKGtleSk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvbGVuZ3RoXG5cdFRvTGVuZ3RoOiBmdW5jdGlvbiBUb0xlbmd0aChhcmd1bWVudCkge1xuXHRcdHZhciBsZW4gPSB0aGlzLlRvSW50ZWdlcihhcmd1bWVudCk7XG5cdFx0aWYgKGxlbiA8PSAwKSB7IHJldHVybiAwOyB9IC8vIGluY2x1ZGVzIGNvbnZlcnRpbmcgLTAgdG8gKzBcblx0XHRpZiAobGVuID4gTUFYX1NBRkVfSU5URUdFUikgeyByZXR1cm4gTUFYX1NBRkVfSU5URUdFUjsgfVxuXHRcdHJldHVybiBsZW47XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWNhbm9uaWNhbG51bWVyaWNpbmRleHN0cmluZ1xuXHRDYW5vbmljYWxOdW1lcmljSW5kZXhTdHJpbmc6IGZ1bmN0aW9uIENhbm9uaWNhbE51bWVyaWNJbmRleFN0cmluZyhhcmd1bWVudCkge1xuXHRcdGlmICh0b1N0cihhcmd1bWVudCkgIT09ICdbb2JqZWN0IFN0cmluZ10nKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignbXVzdCBiZSBhIHN0cmluZycpO1xuXHRcdH1cblx0XHRpZiAoYXJndW1lbnQgPT09ICctMCcpIHsgcmV0dXJuIC0wOyB9XG5cdFx0dmFyIG4gPSB0aGlzLlRvTnVtYmVyKGFyZ3VtZW50KTtcblx0XHRpZiAodGhpcy5TYW1lVmFsdWUodGhpcy5Ub1N0cmluZyhuKSwgYXJndW1lbnQpKSB7IHJldHVybiBuOyB9XG5cdFx0cmV0dXJuIHZvaWQgMDtcblx0fSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtcmVxdWlyZW9iamVjdGNvZXJjaWJsZVxuXHRSZXF1aXJlT2JqZWN0Q29lcmNpYmxlOiBFUzUuQ2hlY2tPYmplY3RDb2VyY2libGUsXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWlzYXJyYXlcblx0SXNBcnJheTogJEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gSXNBcnJheShhcmd1bWVudCkge1xuXHRcdHJldHVybiB0b1N0cihhcmd1bWVudCkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWlzY2FsbGFibGVcblx0Ly8gSXNDYWxsYWJsZTogRVM1LklzQ2FsbGFibGUsXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWlzY29uc3RydWN0b3Jcblx0SXNDb25zdHJ1Y3RvcjogZnVuY3Rpb24gSXNDb25zdHJ1Y3Rvcihhcmd1bWVudCkge1xuXHRcdHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT09ICdmdW5jdGlvbicgJiYgISFhcmd1bWVudC5wcm90b3R5cGU7IC8vIHVuZm9ydHVuYXRlbHkgdGhlcmUncyBubyB3YXkgdG8gdHJ1bHkgY2hlY2sgdGhpcyB3aXRob3V0IHRyeS9jYXRjaCBgbmV3IGFyZ3VtZW50YFxuXHR9LFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1pc2V4dGVuc2libGUtb1xuXHRJc0V4dGVuc2libGU6IE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9uc1xuXHRcdD8gZnVuY3Rpb24gSXNFeHRlbnNpYmxlKG9iaikge1xuXHRcdFx0aWYgKGlzUHJpbWl0aXZlKG9iaikpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuICRpc0V4dGVuc2libGUob2JqKTtcblx0XHR9XG5cdFx0OiBmdW5jdGlvbiBpc0V4dGVuc2libGUob2JqKSB7IHJldHVybiB0cnVlOyB9LCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWlzaW50ZWdlclxuXHRJc0ludGVnZXI6IGZ1bmN0aW9uIElzSW50ZWdlcihhcmd1bWVudCkge1xuXHRcdGlmICh0eXBlb2YgYXJndW1lbnQgIT09ICdudW1iZXInIHx8ICRpc05hTihhcmd1bWVudCkgfHwgISRpc0Zpbml0ZShhcmd1bWVudCkpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0dmFyIGFicyA9ICRhYnMoYXJndW1lbnQpO1xuXHRcdHJldHVybiAkZmxvb3IoYWJzKSA9PT0gYWJzO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1pc3Byb3BlcnR5a2V5XG5cdElzUHJvcGVydHlLZXk6IGZ1bmN0aW9uIElzUHJvcGVydHlLZXkoYXJndW1lbnQpIHtcblx0XHRyZXR1cm4gdHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgYXJndW1lbnQgPT09ICdzeW1ib2wnO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1pc3JlZ2V4cFxuXHRJc1JlZ0V4cDogZnVuY3Rpb24gSXNSZWdFeHAoYXJndW1lbnQpIHtcblx0XHRpZiAoIWFyZ3VtZW50IHx8IHR5cGVvZiBhcmd1bWVudCAhPT0gJ29iamVjdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0aWYgKGhhc1N5bWJvbHMpIHtcblx0XHRcdHZhciBpc1JlZ0V4cCA9IGFyZ3VtZW50WyRTeW1ib2wubWF0Y2hdO1xuXHRcdFx0aWYgKHR5cGVvZiBpc1JlZ0V4cCAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0cmV0dXJuIEVTNS5Ub0Jvb2xlYW4oaXNSZWdFeHApO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gaGFzUmVnRXhwTWF0Y2hlcihhcmd1bWVudCk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXNhbWV2YWx1ZVxuXHQvLyBTYW1lVmFsdWU6IEVTNS5TYW1lVmFsdWUsXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXNhbWV2YWx1ZXplcm9cblx0U2FtZVZhbHVlWmVybzogZnVuY3Rpb24gU2FtZVZhbHVlWmVybyh4LCB5KSB7XG5cdFx0cmV0dXJuICh4ID09PSB5KSB8fCAoJGlzTmFOKHgpICYmICRpc05hTih5KSk7XG5cdH0sXG5cblx0LyoqXG5cdCAqIDcuMy4yIEdldFYgKFYsIFApXG5cdCAqIDEuIEFzc2VydDogSXNQcm9wZXJ0eUtleShQKSBpcyB0cnVlLlxuXHQgKiAyLiBMZXQgTyBiZSBUb09iamVjdChWKS5cblx0ICogMy4gUmV0dXJuSWZBYnJ1cHQoTykuXG5cdCAqIDQuIFJldHVybiBPLltbR2V0XV0oUCwgVikuXG5cdCAqL1xuXHRHZXRWOiBmdW5jdGlvbiBHZXRWKFYsIFApIHtcblx0XHQvLyA3LjMuMi4xXG5cdFx0aWYgKCF0aGlzLklzUHJvcGVydHlLZXkoUCkpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBJc1Byb3BlcnR5S2V5KFApIGlzIG5vdCB0cnVlJyk7XG5cdFx0fVxuXG5cdFx0Ly8gNy4zLjIuMi0zXG5cdFx0dmFyIE8gPSB0aGlzLlRvT2JqZWN0KFYpO1xuXG5cdFx0Ly8gNy4zLjIuNFxuXHRcdHJldHVybiBPW1BdO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiA3LjMuOSAtIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1nZXRtZXRob2Rcblx0ICogMS4gQXNzZXJ0OiBJc1Byb3BlcnR5S2V5KFApIGlzIHRydWUuXG5cdCAqIDIuIExldCBmdW5jIGJlIEdldFYoTywgUCkuXG5cdCAqIDMuIFJldHVybklmQWJydXB0KGZ1bmMpLlxuXHQgKiA0LiBJZiBmdW5jIGlzIGVpdGhlciB1bmRlZmluZWQgb3IgbnVsbCwgcmV0dXJuIHVuZGVmaW5lZC5cblx0ICogNS4gSWYgSXNDYWxsYWJsZShmdW5jKSBpcyBmYWxzZSwgdGhyb3cgYSBUeXBlRXJyb3IgZXhjZXB0aW9uLlxuXHQgKiA2LiBSZXR1cm4gZnVuYy5cblx0ICovXG5cdEdldE1ldGhvZDogZnVuY3Rpb24gR2V0TWV0aG9kKE8sIFApIHtcblx0XHQvLyA3LjMuOS4xXG5cdFx0aWYgKCF0aGlzLklzUHJvcGVydHlLZXkoUCkpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBJc1Byb3BlcnR5S2V5KFApIGlzIG5vdCB0cnVlJyk7XG5cdFx0fVxuXG5cdFx0Ly8gNy4zLjkuMlxuXHRcdHZhciBmdW5jID0gdGhpcy5HZXRWKE8sIFApO1xuXG5cdFx0Ly8gNy4zLjkuNFxuXHRcdGlmIChmdW5jID09IG51bGwpIHtcblx0XHRcdHJldHVybiB2b2lkIDA7XG5cdFx0fVxuXG5cdFx0Ly8gNy4zLjkuNVxuXHRcdGlmICghdGhpcy5Jc0NhbGxhYmxlKGZ1bmMpKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcihQICsgJ2lzIG5vdCBhIGZ1bmN0aW9uJyk7XG5cdFx0fVxuXG5cdFx0Ly8gNy4zLjkuNlxuXHRcdHJldHVybiBmdW5jO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiA3LjMuMSBHZXQgKE8sIFApIC0gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWdldC1vLXBcblx0ICogMS4gQXNzZXJ0OiBUeXBlKE8pIGlzIE9iamVjdC5cblx0ICogMi4gQXNzZXJ0OiBJc1Byb3BlcnR5S2V5KFApIGlzIHRydWUuXG5cdCAqIDMuIFJldHVybiBPLltbR2V0XV0oUCwgTykuXG5cdCAqL1xuXHRHZXQ6IGZ1bmN0aW9uIEdldChPLCBQKSB7XG5cdFx0Ly8gNy4zLjEuMVxuXHRcdGlmICh0aGlzLlR5cGUoTykgIT09ICdPYmplY3QnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogVHlwZShPKSBpcyBub3QgT2JqZWN0Jyk7XG5cdFx0fVxuXHRcdC8vIDcuMy4xLjJcblx0XHRpZiAoIXRoaXMuSXNQcm9wZXJ0eUtleShQKSkge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IElzUHJvcGVydHlLZXkoUCkgaXMgbm90IHRydWUnKTtcblx0XHR9XG5cdFx0Ly8gNy4zLjEuM1xuXHRcdHJldHVybiBPW1BdO1xuXHR9LFxuXG5cdFR5cGU6IGZ1bmN0aW9uIFR5cGUoeCkge1xuXHRcdGlmICh0eXBlb2YgeCA9PT0gJ3N5bWJvbCcpIHtcblx0XHRcdHJldHVybiAnU3ltYm9sJztcblx0XHR9XG5cdFx0cmV0dXJuIEVTNS5UeXBlKHgpO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1zcGVjaWVzY29uc3RydWN0b3Jcblx0U3BlY2llc0NvbnN0cnVjdG9yOiBmdW5jdGlvbiBTcGVjaWVzQ29uc3RydWN0b3IoTywgZGVmYXVsdENvbnN0cnVjdG9yKSB7XG5cdFx0aWYgKHRoaXMuVHlwZShPKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBUeXBlKE8pIGlzIG5vdCBPYmplY3QnKTtcblx0XHR9XG5cdFx0dmFyIEMgPSBPLmNvbnN0cnVjdG9yO1xuXHRcdGlmICh0eXBlb2YgQyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdHJldHVybiBkZWZhdWx0Q29uc3RydWN0b3I7XG5cdFx0fVxuXHRcdGlmICh0aGlzLlR5cGUoQykgIT09ICdPYmplY3QnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignTy5jb25zdHJ1Y3RvciBpcyBub3QgYW4gT2JqZWN0Jyk7XG5cdFx0fVxuXHRcdHZhciBTID0gaGFzU3ltYm9scyAmJiAkU3ltYm9sLnNwZWNpZXMgPyBDWyRTeW1ib2wuc3BlY2llc10gOiB2b2lkIDA7XG5cdFx0aWYgKFMgPT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIGRlZmF1bHRDb25zdHJ1Y3Rvcjtcblx0XHR9XG5cdFx0aWYgKHRoaXMuSXNDb25zdHJ1Y3RvcihTKSkge1xuXHRcdFx0cmV0dXJuIFM7XG5cdFx0fVxuXHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdubyBjb25zdHJ1Y3RvciBmb3VuZCcpO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1jb21wbGV0ZXByb3BlcnR5ZGVzY3JpcHRvclxuXHRDb21wbGV0ZVByb3BlcnR5RGVzY3JpcHRvcjogZnVuY3Rpb24gQ29tcGxldGVQcm9wZXJ0eURlc2NyaXB0b3IoRGVzYykge1xuXHRcdGFzc2VydFJlY29yZCh0aGlzLCAnUHJvcGVydHkgRGVzY3JpcHRvcicsICdEZXNjJywgRGVzYyk7XG5cblx0XHRpZiAodGhpcy5Jc0dlbmVyaWNEZXNjcmlwdG9yKERlc2MpIHx8IHRoaXMuSXNEYXRhRGVzY3JpcHRvcihEZXNjKSkge1xuXHRcdFx0aWYgKCFoYXMoRGVzYywgJ1tbVmFsdWVdXScpKSB7XG5cdFx0XHRcdERlc2NbJ1tbVmFsdWVdXSddID0gdm9pZCAwO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFoYXMoRGVzYywgJ1tbV3JpdGFibGVdXScpKSB7XG5cdFx0XHRcdERlc2NbJ1tbV3JpdGFibGVdXSddID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmICghaGFzKERlc2MsICdbW0dldF1dJykpIHtcblx0XHRcdFx0RGVzY1snW1tHZXRdXSddID0gdm9pZCAwO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFoYXMoRGVzYywgJ1tbU2V0XV0nKSkge1xuXHRcdFx0XHREZXNjWydbW1NldF1dJ10gPSB2b2lkIDA7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICghaGFzKERlc2MsICdbW0VudW1lcmFibGVdXScpKSB7XG5cdFx0XHREZXNjWydbW0VudW1lcmFibGVdXSddID0gZmFsc2U7XG5cdFx0fVxuXHRcdGlmICghaGFzKERlc2MsICdbW0NvbmZpZ3VyYWJsZV1dJykpIHtcblx0XHRcdERlc2NbJ1tbQ29uZmlndXJhYmxlXV0nXSA9IGZhbHNlO1xuXHRcdH1cblx0XHRyZXR1cm4gRGVzYztcblx0fSxcblxuXHQvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtc2V0LW8tcC12LXRocm93XG5cdFNldDogZnVuY3Rpb24gU2V0KE8sIFAsIFYsIFRocm93KSB7XG5cdFx0aWYgKHRoaXMuVHlwZShPKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdPIG11c3QgYmUgYW4gT2JqZWN0Jyk7XG5cdFx0fVxuXHRcdGlmICghdGhpcy5Jc1Byb3BlcnR5S2V5KFApKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignUCBtdXN0IGJlIGEgUHJvcGVydHkgS2V5Jyk7XG5cdFx0fVxuXHRcdGlmICh0aGlzLlR5cGUoVGhyb3cpICE9PSAnQm9vbGVhbicpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdUaHJvdyBtdXN0IGJlIGEgQm9vbGVhbicpO1xuXHRcdH1cblx0XHRpZiAoVGhyb3cpIHtcblx0XHRcdE9bUF0gPSBWO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdE9bUF0gPSBWO1xuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1oYXNvd25wcm9wZXJ0eVxuXHRIYXNPd25Qcm9wZXJ0eTogZnVuY3Rpb24gSGFzT3duUHJvcGVydHkoTywgUCkge1xuXHRcdGlmICh0aGlzLlR5cGUoTykgIT09ICdPYmplY3QnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignTyBtdXN0IGJlIGFuIE9iamVjdCcpO1xuXHRcdH1cblx0XHRpZiAoIXRoaXMuSXNQcm9wZXJ0eUtleShQKSkge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ1AgbXVzdCBiZSBhIFByb3BlcnR5IEtleScpO1xuXHRcdH1cblx0XHRyZXR1cm4gaGFzKE8sIFApO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1oYXNwcm9wZXJ0eVxuXHRIYXNQcm9wZXJ0eTogZnVuY3Rpb24gSGFzUHJvcGVydHkoTywgUCkge1xuXHRcdGlmICh0aGlzLlR5cGUoTykgIT09ICdPYmplY3QnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignTyBtdXN0IGJlIGFuIE9iamVjdCcpO1xuXHRcdH1cblx0XHRpZiAoIXRoaXMuSXNQcm9wZXJ0eUtleShQKSkge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ1AgbXVzdCBiZSBhIFByb3BlcnR5IEtleScpO1xuXHRcdH1cblx0XHRyZXR1cm4gUCBpbiBPO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1pc2NvbmNhdHNwcmVhZGFibGVcblx0SXNDb25jYXRTcHJlYWRhYmxlOiBmdW5jdGlvbiBJc0NvbmNhdFNwcmVhZGFibGUoTykge1xuXHRcdGlmICh0aGlzLlR5cGUoTykgIT09ICdPYmplY3QnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGlmIChoYXNTeW1ib2xzICYmIHR5cGVvZiAkU3ltYm9sLmlzQ29uY2F0U3ByZWFkYWJsZSA9PT0gJ3N5bWJvbCcpIHtcblx0XHRcdHZhciBzcHJlYWRhYmxlID0gdGhpcy5HZXQoTywgU3ltYm9sLmlzQ29uY2F0U3ByZWFkYWJsZSk7XG5cdFx0XHRpZiAodHlwZW9mIHNwcmVhZGFibGUgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLlRvQm9vbGVhbihzcHJlYWRhYmxlKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuSXNBcnJheShPKTtcblx0fSxcblxuXHQvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtaW52b2tlXG5cdEludm9rZTogZnVuY3Rpb24gSW52b2tlKE8sIFApIHtcblx0XHRpZiAoIXRoaXMuSXNQcm9wZXJ0eUtleShQKSkge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ1AgbXVzdCBiZSBhIFByb3BlcnR5IEtleScpO1xuXHRcdH1cblx0XHR2YXIgYXJndW1lbnRzTGlzdCA9IGFycmF5U2xpY2UoYXJndW1lbnRzLCAyKTtcblx0XHR2YXIgZnVuYyA9IHRoaXMuR2V0VihPLCBQKTtcblx0XHRyZXR1cm4gdGhpcy5DYWxsKGZ1bmMsIE8sIGFyZ3VtZW50c0xpc3QpO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1nZXRpdGVyYXRvclxuXHRHZXRJdGVyYXRvcjogZnVuY3Rpb24gR2V0SXRlcmF0b3Iob2JqLCBtZXRob2QpIHtcblx0XHRpZiAoIWhhc1N5bWJvbHMpIHtcblx0XHRcdHRocm93IG5ldyBTeW50YXhFcnJvcignRVMuR2V0SXRlcmF0b3IgZGVwZW5kcyBvbiBuYXRpdmUgaXRlcmF0b3Igc3VwcG9ydC4nKTtcblx0XHR9XG5cblx0XHR2YXIgYWN0dWFsTWV0aG9kID0gbWV0aG9kO1xuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikge1xuXHRcdFx0YWN0dWFsTWV0aG9kID0gdGhpcy5HZXRNZXRob2Qob2JqLCAkU3ltYm9sLml0ZXJhdG9yKTtcblx0XHR9XG5cdFx0dmFyIGl0ZXJhdG9yID0gdGhpcy5DYWxsKGFjdHVhbE1ldGhvZCwgb2JqKTtcblx0XHRpZiAodGhpcy5UeXBlKGl0ZXJhdG9yKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdpdGVyYXRvciBtdXN0IHJldHVybiBhbiBvYmplY3QnKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gaXRlcmF0b3I7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWl0ZXJhdG9ybmV4dFxuXHRJdGVyYXRvck5leHQ6IGZ1bmN0aW9uIEl0ZXJhdG9yTmV4dChpdGVyYXRvciwgdmFsdWUpIHtcblx0XHR2YXIgcmVzdWx0ID0gdGhpcy5JbnZva2UoaXRlcmF0b3IsICduZXh0JywgYXJndW1lbnRzLmxlbmd0aCA8IDIgPyBbXSA6IFt2YWx1ZV0pO1xuXHRcdGlmICh0aGlzLlR5cGUocmVzdWx0KSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdpdGVyYXRvciBuZXh0IG11c3QgcmV0dXJuIGFuIG9iamVjdCcpO1xuXHRcdH1cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1pdGVyYXRvcmNvbXBsZXRlXG5cdEl0ZXJhdG9yQ29tcGxldGU6IGZ1bmN0aW9uIEl0ZXJhdG9yQ29tcGxldGUoaXRlclJlc3VsdCkge1xuXHRcdGlmICh0aGlzLlR5cGUoaXRlclJlc3VsdCkgIT09ICdPYmplY3QnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogVHlwZShpdGVyUmVzdWx0KSBpcyBub3QgT2JqZWN0Jyk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLlRvQm9vbGVhbih0aGlzLkdldChpdGVyUmVzdWx0LCAnZG9uZScpKTtcblx0fSxcblxuXHQvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtaXRlcmF0b3J2YWx1ZVxuXHRJdGVyYXRvclZhbHVlOiBmdW5jdGlvbiBJdGVyYXRvclZhbHVlKGl0ZXJSZXN1bHQpIHtcblx0XHRpZiAodGhpcy5UeXBlKGl0ZXJSZXN1bHQpICE9PSAnT2JqZWN0Jykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IFR5cGUoaXRlclJlc3VsdCkgaXMgbm90IE9iamVjdCcpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5HZXQoaXRlclJlc3VsdCwgJ3ZhbHVlJyk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWl0ZXJhdG9yc3RlcFxuXHRJdGVyYXRvclN0ZXA6IGZ1bmN0aW9uIEl0ZXJhdG9yU3RlcChpdGVyYXRvcikge1xuXHRcdHZhciByZXN1bHQgPSB0aGlzLkl0ZXJhdG9yTmV4dChpdGVyYXRvcik7XG5cdFx0dmFyIGRvbmUgPSB0aGlzLkl0ZXJhdG9yQ29tcGxldGUocmVzdWx0KTtcblx0XHRyZXR1cm4gZG9uZSA9PT0gdHJ1ZSA/IGZhbHNlIDogcmVzdWx0O1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1pdGVyYXRvcmNsb3NlXG5cdEl0ZXJhdG9yQ2xvc2U6IGZ1bmN0aW9uIEl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsIGNvbXBsZXRpb24pIHtcblx0XHRpZiAodGhpcy5UeXBlKGl0ZXJhdG9yKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBUeXBlKGl0ZXJhdG9yKSBpcyBub3QgT2JqZWN0Jyk7XG5cdFx0fVxuXHRcdGlmICghdGhpcy5Jc0NhbGxhYmxlKGNvbXBsZXRpb24pKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogY29tcGxldGlvbiBpcyBub3QgYSB0aHVuayBmb3IgYSBDb21wbGV0aW9uIFJlY29yZCcpO1xuXHRcdH1cblx0XHR2YXIgY29tcGxldGlvblRodW5rID0gY29tcGxldGlvbjtcblxuXHRcdHZhciBpdGVyYXRvclJldHVybiA9IHRoaXMuR2V0TWV0aG9kKGl0ZXJhdG9yLCAncmV0dXJuJyk7XG5cblx0XHRpZiAodHlwZW9mIGl0ZXJhdG9yUmV0dXJuID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0cmV0dXJuIGNvbXBsZXRpb25UaHVuaygpO1xuXHRcdH1cblxuXHRcdHZhciBjb21wbGV0aW9uUmVjb3JkO1xuXHRcdHRyeSB7XG5cdFx0XHR2YXIgaW5uZXJSZXN1bHQgPSB0aGlzLkNhbGwoaXRlcmF0b3JSZXR1cm4sIGl0ZXJhdG9yLCBbXSk7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0Ly8gaWYgd2UgaGl0IGhlcmUsIHRoZW4gXCJlXCIgaXMgdGhlIGlubmVyUmVzdWx0IGNvbXBsZXRpb24gdGhhdCBuZWVkcyByZS10aHJvd2luZ1xuXG5cdFx0XHQvLyBpZiB0aGUgY29tcGxldGlvbiBpcyBvZiB0eXBlIFwidGhyb3dcIiwgdGhpcyB3aWxsIHRocm93LlxuXHRcdFx0Y29tcGxldGlvblJlY29yZCA9IGNvbXBsZXRpb25UaHVuaygpO1xuXHRcdFx0Y29tcGxldGlvblRodW5rID0gbnVsbDsgLy8gZW5zdXJlIGl0J3Mgbm90IGNhbGxlZCB0d2ljZS5cblxuXHRcdFx0Ly8gaWYgbm90LCB0aGVuIHJldHVybiB0aGUgaW5uZXJSZXN1bHQgY29tcGxldGlvblxuXHRcdFx0dGhyb3cgZTtcblx0XHR9XG5cdFx0Y29tcGxldGlvblJlY29yZCA9IGNvbXBsZXRpb25UaHVuaygpOyAvLyBpZiBpbm5lclJlc3VsdCB3b3JrZWQsIHRoZW4gdGhyb3cgaWYgdGhlIGNvbXBsZXRpb24gZG9lc1xuXHRcdGNvbXBsZXRpb25UaHVuayA9IG51bGw7IC8vIGVuc3VyZSBpdCdzIG5vdCBjYWxsZWQgdHdpY2UuXG5cblx0XHRpZiAodGhpcy5UeXBlKGlubmVyUmVzdWx0KSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdpdGVyYXRvciAucmV0dXJuIG11c3QgcmV0dXJuIGFuIG9iamVjdCcpO1xuXHRcdH1cblxuXHRcdHJldHVybiBjb21wbGV0aW9uUmVjb3JkO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1jcmVhdGVpdGVycmVzdWx0b2JqZWN0XG5cdENyZWF0ZUl0ZXJSZXN1bHRPYmplY3Q6IGZ1bmN0aW9uIENyZWF0ZUl0ZXJSZXN1bHRPYmplY3QodmFsdWUsIGRvbmUpIHtcblx0XHRpZiAodGhpcy5UeXBlKGRvbmUpICE9PSAnQm9vbGVhbicpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBUeXBlKGRvbmUpIGlzIG5vdCBCb29sZWFuJyk7XG5cdFx0fVxuXHRcdHJldHVybiB7XG5cdFx0XHR2YWx1ZTogdmFsdWUsXG5cdFx0XHRkb25lOiBkb25lXG5cdFx0fTtcblx0fSxcblxuXHQvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtcmVnZXhwZXhlY1xuXHRSZWdFeHBFeGVjOiBmdW5jdGlvbiBSZWdFeHBFeGVjKFIsIFMpIHtcblx0XHRpZiAodGhpcy5UeXBlKFIpICE9PSAnT2JqZWN0Jykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ1IgbXVzdCBiZSBhbiBPYmplY3QnKTtcblx0XHR9XG5cdFx0aWYgKHRoaXMuVHlwZShTKSAhPT0gJ1N0cmluZycpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdTIG11c3QgYmUgYSBTdHJpbmcnKTtcblx0XHR9XG5cdFx0dmFyIGV4ZWMgPSB0aGlzLkdldChSLCAnZXhlYycpO1xuXHRcdGlmICh0aGlzLklzQ2FsbGFibGUoZXhlYykpIHtcblx0XHRcdHZhciByZXN1bHQgPSB0aGlzLkNhbGwoZXhlYywgUiwgW1NdKTtcblx0XHRcdGlmIChyZXN1bHQgPT09IG51bGwgfHwgdGhpcy5UeXBlKHJlc3VsdCkgPT09ICdPYmplY3QnKSB7XG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHR9XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignXCJleGVjXCIgbWV0aG9kIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBPYmplY3QnKTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlZ2V4RXhlYyhSLCBTKTtcblx0fSxcblxuXHQvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtYXJyYXlzcGVjaWVzY3JlYXRlXG5cdEFycmF5U3BlY2llc0NyZWF0ZTogZnVuY3Rpb24gQXJyYXlTcGVjaWVzQ3JlYXRlKG9yaWdpbmFsQXJyYXksIGxlbmd0aCkge1xuXHRcdGlmICghdGhpcy5Jc0ludGVnZXIobGVuZ3RoKSB8fCBsZW5ndGggPCAwKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogbGVuZ3RoIG11c3QgYmUgYW4gaW50ZWdlciA+PSAwJyk7XG5cdFx0fVxuXHRcdHZhciBsZW4gPSBsZW5ndGggPT09IDAgPyAwIDogbGVuZ3RoO1xuXHRcdHZhciBDO1xuXHRcdHZhciBpc0FycmF5ID0gdGhpcy5Jc0FycmF5KG9yaWdpbmFsQXJyYXkpO1xuXHRcdGlmIChpc0FycmF5KSB7XG5cdFx0XHRDID0gdGhpcy5HZXQob3JpZ2luYWxBcnJheSwgJ2NvbnN0cnVjdG9yJyk7XG5cdFx0XHQvLyBUT0RPOiBmaWd1cmUgb3V0IGhvdyB0byBtYWtlIGEgY3Jvc3MtcmVhbG0gbm9ybWFsIEFycmF5LCBhIHNhbWUtcmVhbG0gQXJyYXlcblx0XHRcdC8vIGlmICh0aGlzLklzQ29uc3RydWN0b3IoQykpIHtcblx0XHRcdC8vIFx0aWYgQyBpcyBhbm90aGVyIHJlYWxtJ3MgQXJyYXksIEMgPSB1bmRlZmluZWRcblx0XHRcdC8vIFx0T2JqZWN0LmdldFByb3RvdHlwZU9mKE9iamVjdC5nZXRQcm90b3R5cGVPZihPYmplY3QuZ2V0UHJvdG90eXBlT2YoQXJyYXkpKSkgPT09IG51bGwgP1xuXHRcdFx0Ly8gfVxuXHRcdFx0aWYgKHRoaXMuVHlwZShDKSA9PT0gJ09iamVjdCcgJiYgaGFzU3ltYm9scyAmJiAkU3ltYm9sLnNwZWNpZXMpIHtcblx0XHRcdFx0QyA9IHRoaXMuR2V0KEMsICRTeW1ib2wuc3BlY2llcyk7XG5cdFx0XHRcdGlmIChDID09PSBudWxsKSB7XG5cdFx0XHRcdFx0QyA9IHZvaWQgMDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAodHlwZW9mIEMgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRyZXR1cm4gJEFycmF5KGxlbik7XG5cdFx0fVxuXHRcdGlmICghdGhpcy5Jc0NvbnN0cnVjdG9yKEMpKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQyBtdXN0IGJlIGEgY29uc3RydWN0b3InKTtcblx0XHR9XG5cdFx0cmV0dXJuIG5ldyBDKGxlbik7IC8vIHRoaXMuQ29uc3RydWN0KEMsIGxlbik7XG5cdH0sXG5cblx0Q3JlYXRlRGF0YVByb3BlcnR5OiBmdW5jdGlvbiBDcmVhdGVEYXRhUHJvcGVydHkoTywgUCwgVikge1xuXHRcdGlmICh0aGlzLlR5cGUoTykgIT09ICdPYmplY3QnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogVHlwZShPKSBpcyBub3QgT2JqZWN0Jyk7XG5cdFx0fVxuXHRcdGlmICghdGhpcy5Jc1Byb3BlcnR5S2V5KFApKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogSXNQcm9wZXJ0eUtleShQKSBpcyBub3QgdHJ1ZScpO1xuXHRcdH1cblx0XHR2YXIgb2xkRGVzYyA9ICRnT1BEKE8sIFApO1xuXHRcdHZhciBleHRlbnNpYmxlID0gb2xkRGVzYyB8fCAodHlwZW9mICRpc0V4dGVuc2libGUgIT09ICdmdW5jdGlvbicgfHwgJGlzRXh0ZW5zaWJsZShPKSk7XG5cdFx0dmFyIGltbXV0YWJsZSA9IG9sZERlc2MgJiYgKCFvbGREZXNjLndyaXRhYmxlIHx8ICFvbGREZXNjLmNvbmZpZ3VyYWJsZSk7XG5cdFx0aWYgKGltbXV0YWJsZSB8fCAhZXh0ZW5zaWJsZSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHR2YXIgbmV3RGVzYyA9IHtcblx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHR2YWx1ZTogVixcblx0XHRcdHdyaXRhYmxlOiB0cnVlXG5cdFx0fTtcblx0XHQkZGVmaW5lUHJvcGVydHkoTywgUCwgbmV3RGVzYyk7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWNyZWF0ZWRhdGFwcm9wZXJ0eW9ydGhyb3dcblx0Q3JlYXRlRGF0YVByb3BlcnR5T3JUaHJvdzogZnVuY3Rpb24gQ3JlYXRlRGF0YVByb3BlcnR5T3JUaHJvdyhPLCBQLCBWKSB7XG5cdFx0aWYgKHRoaXMuVHlwZShPKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBUeXBlKE8pIGlzIG5vdCBPYmplY3QnKTtcblx0XHR9XG5cdFx0aWYgKCF0aGlzLklzUHJvcGVydHlLZXkoUCkpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBJc1Byb3BlcnR5S2V5KFApIGlzIG5vdCB0cnVlJyk7XG5cdFx0fVxuXHRcdHZhciBzdWNjZXNzID0gdGhpcy5DcmVhdGVEYXRhUHJvcGVydHkoTywgUCwgVik7XG5cdFx0aWYgKCFzdWNjZXNzKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcigndW5hYmxlIHRvIGNyZWF0ZSBkYXRhIHByb3BlcnR5Jyk7XG5cdFx0fVxuXHRcdHJldHVybiBzdWNjZXNzO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtb2JqZWN0Y3JlYXRlXG5cdE9iamVjdENyZWF0ZTogZnVuY3Rpb24gT2JqZWN0Q3JlYXRlKHByb3RvLCBpbnRlcm5hbFNsb3RzTGlzdCkge1xuXHRcdGlmIChwcm90byAhPT0gbnVsbCAmJiB0aGlzLlR5cGUocHJvdG8pICE9PSAnT2JqZWN0Jykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IHByb3RvIG11c3QgYmUgbnVsbCBvciBhbiBvYmplY3QnKTtcblx0XHR9XG5cdFx0dmFyIHNsb3RzID0gYXJndW1lbnRzLmxlbmd0aCA8IDIgPyBbXSA6IGludGVybmFsU2xvdHNMaXN0O1xuXHRcdGlmIChzbG90cy5sZW5ndGggPiAwKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFN5bnRheEVycm9yKCdlcy1hYnN0cmFjdCBkb2VzIG5vdCB5ZXQgc3VwcG9ydCBpbnRlcm5hbCBzbG90cycpO1xuXHRcdH1cblxuXHRcdGlmIChwcm90byA9PT0gbnVsbCAmJiAhJE9iamVjdENyZWF0ZSkge1xuXHRcdFx0dGhyb3cgbmV3ICRTeW50YXhFcnJvcignbmF0aXZlIE9iamVjdC5jcmVhdGUgc3VwcG9ydCBpcyByZXF1aXJlZCB0byBjcmVhdGUgbnVsbCBvYmplY3RzJyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuICRPYmplY3RDcmVhdGUocHJvdG8pO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1hZHZhbmNlc3RyaW5naW5kZXhcblx0QWR2YW5jZVN0cmluZ0luZGV4OiBmdW5jdGlvbiBBZHZhbmNlU3RyaW5nSW5kZXgoUywgaW5kZXgsIHVuaWNvZGUpIHtcblx0XHRpZiAodGhpcy5UeXBlKFMpICE9PSAnU3RyaW5nJykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ1MgbXVzdCBiZSBhIFN0cmluZycpO1xuXHRcdH1cblx0XHRpZiAoIXRoaXMuSXNJbnRlZ2VyKGluZGV4KSB8fCBpbmRleCA8IDAgfHwgaW5kZXggPiBNQVhfU0FGRV9JTlRFR0VSKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogbGVuZ3RoIG11c3QgYmUgYW4gaW50ZWdlciA+PSAwIGFuZCA8PSAyKio1MycpO1xuXHRcdH1cblx0XHRpZiAodGhpcy5UeXBlKHVuaWNvZGUpICE9PSAnQm9vbGVhbicpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiB1bmljb2RlIG11c3QgYmUgYSBCb29sZWFuJyk7XG5cdFx0fVxuXHRcdGlmICghdW5pY29kZSkge1xuXHRcdFx0cmV0dXJuIGluZGV4ICsgMTtcblx0XHR9XG5cdFx0dmFyIGxlbmd0aCA9IFMubGVuZ3RoO1xuXHRcdGlmICgoaW5kZXggKyAxKSA+PSBsZW5ndGgpIHtcblx0XHRcdHJldHVybiBpbmRleCArIDE7XG5cdFx0fVxuXG5cdFx0dmFyIGZpcnN0ID0gJGNoYXJDb2RlQXQoUywgaW5kZXgpO1xuXHRcdGlmIChmaXJzdCA8IDB4RDgwMCB8fCBmaXJzdCA+IDB4REJGRikge1xuXHRcdFx0cmV0dXJuIGluZGV4ICsgMTtcblx0XHR9XG5cblx0XHR2YXIgc2Vjb25kID0gJGNoYXJDb2RlQXQoUywgaW5kZXggKyAxKTtcblx0XHRpZiAoc2Vjb25kIDwgMHhEQzAwIHx8IHNlY29uZCA+IDB4REZGRikge1xuXHRcdFx0cmV0dXJuIGluZGV4ICsgMTtcblx0XHR9XG5cblx0XHRyZXR1cm4gaW5kZXggKyAyO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtY3JlYXRlbWV0aG9kcHJvcGVydHlcblx0Q3JlYXRlTWV0aG9kUHJvcGVydHk6IGZ1bmN0aW9uIENyZWF0ZU1ldGhvZFByb3BlcnR5KE8sIFAsIFYpIHtcblx0XHRpZiAodGhpcy5UeXBlKE8pICE9PSAnT2JqZWN0Jykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IFR5cGUoTykgaXMgbm90IE9iamVjdCcpO1xuXHRcdH1cblxuXHRcdGlmICghdGhpcy5Jc1Byb3BlcnR5S2V5KFApKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogSXNQcm9wZXJ0eUtleShQKSBpcyBub3QgdHJ1ZScpO1xuXHRcdH1cblxuXHRcdHZhciBuZXdEZXNjID0ge1xuXHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdFx0ZW51bWVyYWJsZTogZmFsc2UsXG5cdFx0XHR2YWx1ZTogVixcblx0XHRcdHdyaXRhYmxlOiB0cnVlXG5cdFx0fTtcblx0XHRyZXR1cm4gISEkZGVmaW5lUHJvcGVydHkoTywgUCwgbmV3RGVzYyk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1kZWZpbmVwcm9wZXJ0eW9ydGhyb3dcblx0RGVmaW5lUHJvcGVydHlPclRocm93OiBmdW5jdGlvbiBEZWZpbmVQcm9wZXJ0eU9yVGhyb3coTywgUCwgZGVzYykge1xuXHRcdGlmICh0aGlzLlR5cGUoTykgIT09ICdPYmplY3QnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogVHlwZShPKSBpcyBub3QgT2JqZWN0Jyk7XG5cdFx0fVxuXG5cdFx0aWYgKCF0aGlzLklzUHJvcGVydHlLZXkoUCkpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBJc1Byb3BlcnR5S2V5KFApIGlzIG5vdCB0cnVlJyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuICEhJGRlZmluZVByb3BlcnR5KE8sIFAsIGRlc2MpO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtZGVsZXRlcHJvcGVydHlvcnRocm93XG5cdERlbGV0ZVByb3BlcnR5T3JUaHJvdzogZnVuY3Rpb24gRGVsZXRlUHJvcGVydHlPclRocm93KE8sIFApIHtcblx0XHRpZiAodGhpcy5UeXBlKE8pICE9PSAnT2JqZWN0Jykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IFR5cGUoTykgaXMgbm90IE9iamVjdCcpO1xuXHRcdH1cblxuXHRcdGlmICghdGhpcy5Jc1Byb3BlcnR5S2V5KFApKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogSXNQcm9wZXJ0eUtleShQKSBpcyBub3QgdHJ1ZScpO1xuXHRcdH1cblxuXHRcdHZhciBzdWNjZXNzID0gZGVsZXRlIE9bUF07XG5cdFx0aWYgKCFzdWNjZXNzKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdBdHRlbXB0IHRvIGRlbGV0ZSBwcm9wZXJ0eSBmYWlsZWQuJyk7XG5cdFx0fVxuXHRcdHJldHVybiBzdWNjZXNzO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtZW51bWVyYWJsZW93bm5hbWVzXG5cdEVudW1lcmFibGVPd25OYW1lczogZnVuY3Rpb24gRW51bWVyYWJsZU93bk5hbWVzKE8pIHtcblx0XHRpZiAodGhpcy5UeXBlKE8pICE9PSAnT2JqZWN0Jykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IFR5cGUoTykgaXMgbm90IE9iamVjdCcpO1xuXHRcdH1cblxuXHRcdHJldHVybiBrZXlzKE8pO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1wcm9wZXJ0aWVzLW9mLXRoZS1udW1iZXItcHJvdG90eXBlLW9iamVjdFxuXHR0aGlzTnVtYmVyVmFsdWU6IGZ1bmN0aW9uIHRoaXNOdW1iZXJWYWx1ZSh2YWx1ZSkge1xuXHRcdGlmICh0aGlzLlR5cGUodmFsdWUpID09PSAnTnVtYmVyJykge1xuXHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdH1cblxuXHRcdHJldHVybiAkTnVtYmVyVmFsdWVPZih2YWx1ZSk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLXByb3BlcnRpZXMtb2YtdGhlLWJvb2xlYW4tcHJvdG90eXBlLW9iamVjdFxuXHR0aGlzQm9vbGVhblZhbHVlOiBmdW5jdGlvbiB0aGlzQm9vbGVhblZhbHVlKHZhbHVlKSB7XG5cdFx0aWYgKHRoaXMuVHlwZSh2YWx1ZSkgPT09ICdCb29sZWFuJykge1xuXHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdH1cblxuXHRcdHJldHVybiAkQm9vbGVhblZhbHVlT2YodmFsdWUpO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1wcm9wZXJ0aWVzLW9mLXRoZS1zdHJpbmctcHJvdG90eXBlLW9iamVjdFxuXHR0aGlzU3RyaW5nVmFsdWU6IGZ1bmN0aW9uIHRoaXNTdHJpbmdWYWx1ZSh2YWx1ZSkge1xuXHRcdGlmICh0aGlzLlR5cGUodmFsdWUpID09PSAnU3RyaW5nJykge1xuXHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdH1cblxuXHRcdHJldHVybiAkU3RyaW5nVmFsdWVPZih2YWx1ZSk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLXByb3BlcnRpZXMtb2YtdGhlLWRhdGUtcHJvdG90eXBlLW9iamVjdFxuXHR0aGlzVGltZVZhbHVlOiBmdW5jdGlvbiB0aGlzVGltZVZhbHVlKHZhbHVlKSB7XG5cdFx0cmV0dXJuICREYXRlVmFsdWVPZih2YWx1ZSk7XG5cdH1cbn0pO1xuXG5kZWxldGUgRVM2LkNoZWNrT2JqZWN0Q29lcmNpYmxlOyAvLyByZW5hbWVkIGluIEVTNiB0byBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlXG5cbm1vZHVsZS5leHBvcnRzID0gRVM2O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VzLWFic3RyYWN0L2VzMjAxNS5qc1xuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYmluZCA9IHJlcXVpcmUoJ2Z1bmN0aW9uLWJpbmQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBiaW5kLmNhbGwoRnVuY3Rpb24uY2FsbCwgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaGFzL3NyYy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaW1wbGVtZW50YXRpb24gPSByZXF1aXJlKCcuL2ltcGxlbWVudGF0aW9uJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQgfHwgaW1wbGVtZW50YXRpb247XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZnVuY3Rpb24tYmluZC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKiBlc2xpbnQgbm8taW52YWxpZC10aGlzOiAxICovXG5cbnZhciBFUlJPUl9NRVNTQUdFID0gJ0Z1bmN0aW9uLnByb3RvdHlwZS5iaW5kIGNhbGxlZCBvbiBpbmNvbXBhdGlibGUgJztcbnZhciBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgZnVuY1R5cGUgPSAnW29iamVjdCBGdW5jdGlvbl0nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJpbmQodGhhdCkge1xuICAgIHZhciB0YXJnZXQgPSB0aGlzO1xuICAgIGlmICh0eXBlb2YgdGFyZ2V0ICE9PSAnZnVuY3Rpb24nIHx8IHRvU3RyLmNhbGwodGFyZ2V0KSAhPT0gZnVuY1R5cGUpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihFUlJPUl9NRVNTQUdFICsgdGFyZ2V0KTtcbiAgICB9XG4gICAgdmFyIGFyZ3MgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG5cbiAgICB2YXIgYm91bmQ7XG4gICAgdmFyIGJpbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBib3VuZCkge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHRhcmdldC5hcHBseShcbiAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgIGFyZ3MuY29uY2F0KHNsaWNlLmNhbGwoYXJndW1lbnRzKSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAoT2JqZWN0KHJlc3VsdCkgPT09IHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXQuYXBwbHkoXG4gICAgICAgICAgICAgICAgdGhhdCxcbiAgICAgICAgICAgICAgICBhcmdzLmNvbmNhdChzbGljZS5jYWxsKGFyZ3VtZW50cykpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHZhciBib3VuZExlbmd0aCA9IE1hdGgubWF4KDAsIHRhcmdldC5sZW5ndGggLSBhcmdzLmxlbmd0aCk7XG4gICAgdmFyIGJvdW5kQXJncyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYm91bmRMZW5ndGg7IGkrKykge1xuICAgICAgICBib3VuZEFyZ3MucHVzaCgnJCcgKyBpKTtcbiAgICB9XG5cbiAgICBib3VuZCA9IEZ1bmN0aW9uKCdiaW5kZXInLCAncmV0dXJuIGZ1bmN0aW9uICgnICsgYm91bmRBcmdzLmpvaW4oJywnKSArICcpeyByZXR1cm4gYmluZGVyLmFwcGx5KHRoaXMsYXJndW1lbnRzKTsgfScpKGJpbmRlcik7XG5cbiAgICBpZiAodGFyZ2V0LnByb3RvdHlwZSkge1xuICAgICAgICB2YXIgRW1wdHkgPSBmdW5jdGlvbiBFbXB0eSgpIHt9O1xuICAgICAgICBFbXB0eS5wcm90b3R5cGUgPSB0YXJnZXQucHJvdG90eXBlO1xuICAgICAgICBib3VuZC5wcm90b3R5cGUgPSBuZXcgRW1wdHkoKTtcbiAgICAgICAgRW1wdHkucHJvdG90eXBlID0gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gYm91bmQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Z1bmN0aW9uLWJpbmQvaW1wbGVtZW50YXRpb24uanNcbi8vIG1vZHVsZSBpZCA9IDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2VzMjAxNScpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VzLXRvLXByaW1pdGl2ZS9lczYuanNcbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIGhhc1N5bWJvbHMgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09ICdzeW1ib2wnO1xuXG52YXIgaXNQcmltaXRpdmUgPSByZXF1aXJlKCcuL2hlbHBlcnMvaXNQcmltaXRpdmUnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnaXMtY2FsbGFibGUnKTtcbnZhciBpc0RhdGUgPSByZXF1aXJlKCdpcy1kYXRlLW9iamVjdCcpO1xudmFyIGlzU3ltYm9sID0gcmVxdWlyZSgnaXMtc3ltYm9sJyk7XG5cbnZhciBvcmRpbmFyeVRvUHJpbWl0aXZlID0gZnVuY3Rpb24gT3JkaW5hcnlUb1ByaW1pdGl2ZShPLCBoaW50KSB7XG5cdGlmICh0eXBlb2YgTyA9PT0gJ3VuZGVmaW5lZCcgfHwgTyA9PT0gbnVsbCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIG1ldGhvZCBvbiAnICsgTyk7XG5cdH1cblx0aWYgKHR5cGVvZiBoaW50ICE9PSAnc3RyaW5nJyB8fCAoaGludCAhPT0gJ251bWJlcicgJiYgaGludCAhPT0gJ3N0cmluZycpKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignaGludCBtdXN0IGJlIFwic3RyaW5nXCIgb3IgXCJudW1iZXJcIicpO1xuXHR9XG5cdHZhciBtZXRob2ROYW1lcyA9IGhpbnQgPT09ICdzdHJpbmcnID8gWyd0b1N0cmluZycsICd2YWx1ZU9mJ10gOiBbJ3ZhbHVlT2YnLCAndG9TdHJpbmcnXTtcblx0dmFyIG1ldGhvZCwgcmVzdWx0LCBpO1xuXHRmb3IgKGkgPSAwOyBpIDwgbWV0aG9kTmFtZXMubGVuZ3RoOyArK2kpIHtcblx0XHRtZXRob2QgPSBPW21ldGhvZE5hbWVzW2ldXTtcblx0XHRpZiAoaXNDYWxsYWJsZShtZXRob2QpKSB7XG5cdFx0XHRyZXN1bHQgPSBtZXRob2QuY2FsbChPKTtcblx0XHRcdGlmIChpc1ByaW1pdGl2ZShyZXN1bHQpKSB7XG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHRocm93IG5ldyBUeXBlRXJyb3IoJ05vIGRlZmF1bHQgdmFsdWUnKTtcbn07XG5cbnZhciBHZXRNZXRob2QgPSBmdW5jdGlvbiBHZXRNZXRob2QoTywgUCkge1xuXHR2YXIgZnVuYyA9IE9bUF07XG5cdGlmIChmdW5jICE9PSBudWxsICYmIHR5cGVvZiBmdW5jICE9PSAndW5kZWZpbmVkJykge1xuXHRcdGlmICghaXNDYWxsYWJsZShmdW5jKSkge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihmdW5jICsgJyByZXR1cm5lZCBmb3IgcHJvcGVydHkgJyArIFAgKyAnIG9mIG9iamVjdCAnICsgTyArICcgaXMgbm90IGEgZnVuY3Rpb24nKTtcblx0XHR9XG5cdFx0cmV0dXJuIGZ1bmM7XG5cdH1cblx0cmV0dXJuIHZvaWQgMDtcbn07XG5cbi8vIGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy10b3ByaW1pdGl2ZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBUb1ByaW1pdGl2ZShpbnB1dCkge1xuXHRpZiAoaXNQcmltaXRpdmUoaW5wdXQpKSB7XG5cdFx0cmV0dXJuIGlucHV0O1xuXHR9XG5cdHZhciBoaW50ID0gJ2RlZmF1bHQnO1xuXHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcblx0XHRpZiAoYXJndW1lbnRzWzFdID09PSBTdHJpbmcpIHtcblx0XHRcdGhpbnQgPSAnc3RyaW5nJztcblx0XHR9IGVsc2UgaWYgKGFyZ3VtZW50c1sxXSA9PT0gTnVtYmVyKSB7XG5cdFx0XHRoaW50ID0gJ251bWJlcic7XG5cdFx0fVxuXHR9XG5cblx0dmFyIGV4b3RpY1RvUHJpbTtcblx0aWYgKGhhc1N5bWJvbHMpIHtcblx0XHRpZiAoU3ltYm9sLnRvUHJpbWl0aXZlKSB7XG5cdFx0XHRleG90aWNUb1ByaW0gPSBHZXRNZXRob2QoaW5wdXQsIFN5bWJvbC50b1ByaW1pdGl2ZSk7XG5cdFx0fSBlbHNlIGlmIChpc1N5bWJvbChpbnB1dCkpIHtcblx0XHRcdGV4b3RpY1RvUHJpbSA9IFN5bWJvbC5wcm90b3R5cGUudmFsdWVPZjtcblx0XHR9XG5cdH1cblx0aWYgKHR5cGVvZiBleG90aWNUb1ByaW0gIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0dmFyIHJlc3VsdCA9IGV4b3RpY1RvUHJpbS5jYWxsKGlucHV0LCBoaW50KTtcblx0XHRpZiAoaXNQcmltaXRpdmUocmVzdWx0KSkge1xuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcigndW5hYmxlIHRvIGNvbnZlcnQgZXhvdGljIG9iamVjdCB0byBwcmltaXRpdmUnKTtcblx0fVxuXHRpZiAoaGludCA9PT0gJ2RlZmF1bHQnICYmIChpc0RhdGUoaW5wdXQpIHx8IGlzU3ltYm9sKGlucHV0KSkpIHtcblx0XHRoaW50ID0gJ3N0cmluZyc7XG5cdH1cblx0cmV0dXJuIG9yZGluYXJ5VG9QcmltaXRpdmUoaW5wdXQsIGhpbnQgPT09ICdkZWZhdWx0JyA/ICdudW1iZXInIDogaGludCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VzLXRvLXByaW1pdGl2ZS9lczIwMTUuanNcbi8vIG1vZHVsZSBpZCA9IDQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNQcmltaXRpdmUodmFsdWUpIHtcblx0cmV0dXJuIHZhbHVlID09PSBudWxsIHx8ICh0eXBlb2YgdmFsdWUgIT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0Jyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VzLXRvLXByaW1pdGl2ZS9oZWxwZXJzL2lzUHJpbWl0aXZlLmpzXG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBmblRvU3RyID0gRnVuY3Rpb24ucHJvdG90eXBlLnRvU3RyaW5nO1xuXG52YXIgY29uc3RydWN0b3JSZWdleCA9IC9eXFxzKmNsYXNzXFxiLztcbnZhciBpc0VTNkNsYXNzRm4gPSBmdW5jdGlvbiBpc0VTNkNsYXNzRnVuY3Rpb24odmFsdWUpIHtcblx0dHJ5IHtcblx0XHR2YXIgZm5TdHIgPSBmblRvU3RyLmNhbGwodmFsdWUpO1xuXHRcdHJldHVybiBjb25zdHJ1Y3RvclJlZ2V4LnRlc3QoZm5TdHIpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0cmV0dXJuIGZhbHNlOyAvLyBub3QgYSBmdW5jdGlvblxuXHR9XG59O1xuXG52YXIgdHJ5RnVuY3Rpb25PYmplY3QgPSBmdW5jdGlvbiB0cnlGdW5jdGlvblRvU3RyKHZhbHVlKSB7XG5cdHRyeSB7XG5cdFx0aWYgKGlzRVM2Q2xhc3NGbih2YWx1ZSkpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdFx0Zm5Ub1N0ci5jYWxsKHZhbHVlKTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufTtcbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgZm5DbGFzcyA9ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG52YXIgZ2VuQ2xhc3MgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nO1xudmFyIGhhc1RvU3RyaW5nVGFnID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgU3ltYm9sLnRvU3RyaW5nVGFnID09PSAnc3ltYm9sJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0NhbGxhYmxlKHZhbHVlKSB7XG5cdGlmICghdmFsdWUpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdGlmICh0eXBlb2YgdmFsdWUgIT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JykgeyByZXR1cm4gZmFsc2U7IH1cblx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyAmJiAhdmFsdWUucHJvdG90eXBlKSB7IHJldHVybiB0cnVlOyB9XG5cdGlmIChoYXNUb1N0cmluZ1RhZykgeyByZXR1cm4gdHJ5RnVuY3Rpb25PYmplY3QodmFsdWUpOyB9XG5cdGlmIChpc0VTNkNsYXNzRm4odmFsdWUpKSB7IHJldHVybiBmYWxzZTsgfVxuXHR2YXIgc3RyQ2xhc3MgPSB0b1N0ci5jYWxsKHZhbHVlKTtcblx0cmV0dXJuIHN0ckNsYXNzID09PSBmbkNsYXNzIHx8IHN0ckNsYXNzID09PSBnZW5DbGFzcztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaXMtY2FsbGFibGUvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIGdldERheSA9IERhdGUucHJvdG90eXBlLmdldERheTtcbnZhciB0cnlEYXRlT2JqZWN0ID0gZnVuY3Rpb24gdHJ5RGF0ZU9iamVjdCh2YWx1ZSkge1xuXHR0cnkge1xuXHRcdGdldERheS5jYWxsKHZhbHVlKTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufTtcblxudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbnZhciBkYXRlQ2xhc3MgPSAnW29iamVjdCBEYXRlXSc7XG52YXIgaGFzVG9TdHJpbmdUYWcgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBTeW1ib2wudG9TdHJpbmdUYWcgPT09ICdzeW1ib2wnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzRGF0ZU9iamVjdCh2YWx1ZSkge1xuXHRpZiAodHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JyB8fCB2YWx1ZSA9PT0gbnVsbCkgeyByZXR1cm4gZmFsc2U7IH1cblx0cmV0dXJuIGhhc1RvU3RyaW5nVGFnID8gdHJ5RGF0ZU9iamVjdCh2YWx1ZSkgOiB0b1N0ci5jYWxsKHZhbHVlKSA9PT0gZGF0ZUNsYXNzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9pcy1kYXRlLW9iamVjdC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIGhhc1N5bWJvbHMgPSByZXF1aXJlKCdoYXMtc3ltYm9scycpKCk7XG5cbmlmIChoYXNTeW1ib2xzKSB7XG5cdHZhciBzeW1Ub1N0ciA9IFN5bWJvbC5wcm90b3R5cGUudG9TdHJpbmc7XG5cdHZhciBzeW1TdHJpbmdSZWdleCA9IC9eU3ltYm9sXFwoLipcXCkkLztcblx0dmFyIGlzU3ltYm9sT2JqZWN0ID0gZnVuY3Rpb24gaXNSZWFsU3ltYm9sT2JqZWN0KHZhbHVlKSB7XG5cdFx0aWYgKHR5cGVvZiB2YWx1ZS52YWx1ZU9mKCkgIT09ICdzeW1ib2wnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHJldHVybiBzeW1TdHJpbmdSZWdleC50ZXN0KHN5bVRvU3RyLmNhbGwodmFsdWUpKTtcblx0fTtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG5cdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N5bWJvbCcpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRpZiAodG9TdHIuY2FsbCh2YWx1ZSkgIT09ICdbb2JqZWN0IFN5bWJvbF0nKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHRyeSB7XG5cdFx0XHRyZXR1cm4gaXNTeW1ib2xPYmplY3QodmFsdWUpO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH07XG59IGVsc2Uge1xuXG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNTeW1ib2wodmFsdWUpIHtcblx0XHQvLyB0aGlzIGVudmlyb25tZW50IGRvZXMgbm90IHN1cHBvcnQgU3ltYm9scy5cblx0XHRyZXR1cm4gZmFsc2UgJiYgdmFsdWU7XG5cdH07XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaXMtc3ltYm9sL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBvcmlnU3ltYm9sID0gZ2xvYmFsLlN5bWJvbDtcbnZhciBoYXNTeW1ib2xTaGFtID0gcmVxdWlyZSgnLi9zaGFtcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGhhc05hdGl2ZVN5bWJvbHMoKSB7XG5cdGlmICh0eXBlb2Ygb3JpZ1N5bWJvbCAhPT0gJ2Z1bmN0aW9uJykgeyByZXR1cm4gZmFsc2U7IH1cblx0aWYgKHR5cGVvZiBTeW1ib2wgIT09ICdmdW5jdGlvbicpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdGlmICh0eXBlb2Ygb3JpZ1N5bWJvbCgnZm9vJykgIT09ICdzeW1ib2wnKSB7IHJldHVybiBmYWxzZTsgfVxuXHRpZiAodHlwZW9mIFN5bWJvbCgnYmFyJykgIT09ICdzeW1ib2wnKSB7IHJldHVybiBmYWxzZTsgfVxuXG5cdHJldHVybiBoYXNTeW1ib2xTaGFtKCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2hhcy1zeW1ib2xzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbi8qIGVzbGludCBjb21wbGV4aXR5OiBbMiwgMTddLCBtYXgtc3RhdGVtZW50czogWzIsIDMzXSAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBoYXNTeW1ib2xzKCkge1xuXHRpZiAodHlwZW9mIFN5bWJvbCAhPT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyAhPT0gJ2Z1bmN0aW9uJykgeyByZXR1cm4gZmFsc2U7IH1cblx0aWYgKHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09ICdzeW1ib2wnKSB7IHJldHVybiB0cnVlOyB9XG5cblx0dmFyIG9iaiA9IHt9O1xuXHR2YXIgc3ltID0gU3ltYm9sKCd0ZXN0Jyk7XG5cdHZhciBzeW1PYmogPSBPYmplY3Qoc3ltKTtcblx0aWYgKHR5cGVvZiBzeW0gPT09ICdzdHJpbmcnKSB7IHJldHVybiBmYWxzZTsgfVxuXG5cdGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoc3ltKSAhPT0gJ1tvYmplY3QgU3ltYm9sXScpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoc3ltT2JqKSAhPT0gJ1tvYmplY3QgU3ltYm9sXScpIHsgcmV0dXJuIGZhbHNlOyB9XG5cblx0Ly8gdGVtcCBkaXNhYmxlZCBwZXIgaHR0cHM6Ly9naXRodWIuY29tL2xqaGFyYi9vYmplY3QuYXNzaWduL2lzc3Vlcy8xN1xuXHQvLyBpZiAoc3ltIGluc3RhbmNlb2YgU3ltYm9sKSB7IHJldHVybiBmYWxzZTsgfVxuXHQvLyB0ZW1wIGRpc2FibGVkIHBlciBodHRwczovL2dpdGh1Yi5jb20vV2ViUmVmbGVjdGlvbi9nZXQtb3duLXByb3BlcnR5LXN5bWJvbHMvaXNzdWVzLzRcblx0Ly8gaWYgKCEoc3ltT2JqIGluc3RhbmNlb2YgU3ltYm9sKSkgeyByZXR1cm4gZmFsc2U7IH1cblxuXHQvLyBpZiAodHlwZW9mIFN5bWJvbC5wcm90b3R5cGUudG9TdHJpbmcgIT09ICdmdW5jdGlvbicpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdC8vIGlmIChTdHJpbmcoc3ltKSAhPT0gU3ltYm9sLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHN5bSkpIHsgcmV0dXJuIGZhbHNlOyB9XG5cblx0dmFyIHN5bVZhbCA9IDQyO1xuXHRvYmpbc3ltXSA9IHN5bVZhbDtcblx0Zm9yIChzeW0gaW4gb2JqKSB7IHJldHVybiBmYWxzZTsgfSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG5cdGlmICh0eXBlb2YgT2JqZWN0LmtleXMgPT09ICdmdW5jdGlvbicgJiYgT2JqZWN0LmtleXMob2JqKS5sZW5ndGggIT09IDApIHsgcmV0dXJuIGZhbHNlOyB9XG5cblx0aWYgKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyA9PT0gJ2Z1bmN0aW9uJyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmopLmxlbmd0aCAhPT0gMCkgeyByZXR1cm4gZmFsc2U7IH1cblxuXHR2YXIgc3ltcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqKTtcblx0aWYgKHN5bXMubGVuZ3RoICE9PSAxIHx8IHN5bXNbMF0gIT09IHN5bSkgeyByZXR1cm4gZmFsc2U7IH1cblxuXHRpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChvYmosIHN5bSkpIHsgcmV0dXJuIGZhbHNlOyB9XG5cblx0aWYgKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwgc3ltKTtcblx0XHRpZiAoZGVzY3JpcHRvci52YWx1ZSAhPT0gc3ltVmFsIHx8IGRlc2NyaXB0b3IuZW51bWVyYWJsZSAhPT0gdHJ1ZSkgeyByZXR1cm4gZmFsc2U7IH1cblx0fVxuXG5cdHJldHVybiB0cnVlO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9oYXMtc3ltYm9scy9zaGFtcy5qc1xuLy8gbW9kdWxlIGlkID0gNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKiBnbG9iYWxzXG5cdFNldCxcblx0TWFwLFxuXHRXZWFrU2V0LFxuXHRXZWFrTWFwLFxuXG5cdFByb21pc2UsXG5cblx0U3ltYm9sLFxuXHRQcm94eSxcblxuXHRBdG9taWNzLFxuXHRTaGFyZWRBcnJheUJ1ZmZlcixcblxuXHRBcnJheUJ1ZmZlcixcblx0RGF0YVZpZXcsXG5cdFVpbnQ4QXJyYXksXG5cdEZsb2F0MzJBcnJheSxcblx0RmxvYXQ2NEFycmF5LFxuXHRJbnQ4QXJyYXksXG5cdEludDE2QXJyYXksXG5cdEludDMyQXJyYXksXG5cdFVpbnQ4Q2xhbXBlZEFycmF5LFxuXHRVaW50MTZBcnJheSxcblx0VWludDMyQXJyYXksXG4qL1xuXG52YXIgdW5kZWZpbmVkOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNoYWRvdy1yZXN0cmljdGVkLW5hbWVzXG5cbnZhciBUaHJvd1R5cGVFcnJvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Jcblx0PyAoZnVuY3Rpb24gKCkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihhcmd1bWVudHMsICdjYWxsZWUnKS5nZXQ7IH0oKSlcblx0OiBmdW5jdGlvbiAoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoKTsgfTtcblxudmFyIGhhc1N5bWJvbHMgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09ICdzeW1ib2wnO1xuXG52YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHguX19wcm90b19fOyB9OyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXByb3RvXG5cbnZhciBnZW5lcmF0b3I7IC8vID0gZnVuY3Rpb24gKiAoKSB7fTtcbnZhciBnZW5lcmF0b3JGdW5jdGlvbiA9IGdlbmVyYXRvciA/IGdldFByb3RvKGdlbmVyYXRvcikgOiB1bmRlZmluZWQ7XG52YXIgYXN5bmNGbjsgLy8gYXN5bmMgZnVuY3Rpb24oKSB7fTtcbnZhciBhc3luY0Z1bmN0aW9uID0gYXN5bmNGbiA/IGFzeW5jRm4uY29uc3RydWN0b3IgOiB1bmRlZmluZWQ7XG52YXIgYXN5bmNHZW47IC8vIGFzeW5jIGZ1bmN0aW9uICogKCkge307XG52YXIgYXN5bmNHZW5GdW5jdGlvbiA9IGFzeW5jR2VuID8gZ2V0UHJvdG8oYXN5bmNHZW4pIDogdW5kZWZpbmVkO1xudmFyIGFzeW5jR2VuSXRlcmF0b3IgPSBhc3luY0dlbiA/IGFzeW5jR2VuKCkgOiB1bmRlZmluZWQ7XG5cbnZhciBUeXBlZEFycmF5ID0gdHlwZW9mIFVpbnQ4QXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogZ2V0UHJvdG8oVWludDhBcnJheSk7XG5cbnZhciBJTlRSSU5TSUNTID0ge1xuXHQnJCAlQXJyYXklJzogQXJyYXksXG5cdCckICVBcnJheUJ1ZmZlciUnOiB0eXBlb2YgQXJyYXlCdWZmZXIgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogQXJyYXlCdWZmZXIsXG5cdCckICVBcnJheUJ1ZmZlclByb3RvdHlwZSUnOiB0eXBlb2YgQXJyYXlCdWZmZXIgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogQXJyYXlCdWZmZXIucHJvdG90eXBlLFxuXHQnJCAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUnOiBoYXNTeW1ib2xzID8gZ2V0UHJvdG8oW11bU3ltYm9sLml0ZXJhdG9yXSgpKSA6IHVuZGVmaW5lZCxcblx0JyQgJUFycmF5UHJvdG90eXBlJSc6IEFycmF5LnByb3RvdHlwZSxcblx0JyQgJUFycmF5UHJvdG9fZW50cmllcyUnOiBBcnJheS5wcm90b3R5cGUuZW50cmllcyxcblx0JyQgJUFycmF5UHJvdG9fZm9yRWFjaCUnOiBBcnJheS5wcm90b3R5cGUuZm9yRWFjaCxcblx0JyQgJUFycmF5UHJvdG9fa2V5cyUnOiBBcnJheS5wcm90b3R5cGUua2V5cyxcblx0JyQgJUFycmF5UHJvdG9fdmFsdWVzJSc6IEFycmF5LnByb3RvdHlwZS52YWx1ZXMsXG5cdCckICVBc3luY0Zyb21TeW5jSXRlcmF0b3JQcm90b3R5cGUlJzogdW5kZWZpbmVkLFxuXHQnJCAlQXN5bmNGdW5jdGlvbiUnOiBhc3luY0Z1bmN0aW9uLFxuXHQnJCAlQXN5bmNGdW5jdGlvblByb3RvdHlwZSUnOiBhc3luY0Z1bmN0aW9uID8gYXN5bmNGdW5jdGlvbi5wcm90b3R5cGUgOiB1bmRlZmluZWQsXG5cdCckICVBc3luY0dlbmVyYXRvciUnOiBhc3luY0dlbiA/IGdldFByb3RvKGFzeW5jR2VuSXRlcmF0b3IpIDogdW5kZWZpbmVkLFxuXHQnJCAlQXN5bmNHZW5lcmF0b3JGdW5jdGlvbiUnOiBhc3luY0dlbkZ1bmN0aW9uLFxuXHQnJCAlQXN5bmNHZW5lcmF0b3JQcm90b3R5cGUlJzogYXN5bmNHZW5GdW5jdGlvbiA/IGFzeW5jR2VuRnVuY3Rpb24ucHJvdG90eXBlIDogdW5kZWZpbmVkLFxuXHQnJCAlQXN5bmNJdGVyYXRvclByb3RvdHlwZSUnOiBhc3luY0dlbkl0ZXJhdG9yICYmIGhhc1N5bWJvbHMgJiYgU3ltYm9sLmFzeW5jSXRlcmF0b3IgPyBhc3luY0dlbkl0ZXJhdG9yW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSgpIDogdW5kZWZpbmVkLFxuXHQnJCAlQXRvbWljcyUnOiB0eXBlb2YgQXRvbWljcyA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBBdG9taWNzLFxuXHQnJCAlQm9vbGVhbiUnOiBCb29sZWFuLFxuXHQnJCAlQm9vbGVhblByb3RvdHlwZSUnOiBCb29sZWFuLnByb3RvdHlwZSxcblx0JyQgJURhdGFWaWV3JSc6IHR5cGVvZiBEYXRhVmlldyA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBEYXRhVmlldyxcblx0JyQgJURhdGFWaWV3UHJvdG90eXBlJSc6IHR5cGVvZiBEYXRhVmlldyA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBEYXRhVmlldy5wcm90b3R5cGUsXG5cdCckICVEYXRlJSc6IERhdGUsXG5cdCckICVEYXRlUHJvdG90eXBlJSc6IERhdGUucHJvdG90eXBlLFxuXHQnJCAlZGVjb2RlVVJJJSc6IGRlY29kZVVSSSxcblx0JyQgJWRlY29kZVVSSUNvbXBvbmVudCUnOiBkZWNvZGVVUklDb21wb25lbnQsXG5cdCckICVlbmNvZGVVUkklJzogZW5jb2RlVVJJLFxuXHQnJCAlZW5jb2RlVVJJQ29tcG9uZW50JSc6IGVuY29kZVVSSUNvbXBvbmVudCxcblx0JyQgJUVycm9yJSc6IEVycm9yLFxuXHQnJCAlRXJyb3JQcm90b3R5cGUlJzogRXJyb3IucHJvdG90eXBlLFxuXHQnJCAlZXZhbCUnOiBldmFsLCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWV2YWxcblx0JyQgJUV2YWxFcnJvciUnOiBFdmFsRXJyb3IsXG5cdCckICVFdmFsRXJyb3JQcm90b3R5cGUlJzogRXZhbEVycm9yLnByb3RvdHlwZSxcblx0JyQgJUZsb2F0MzJBcnJheSUnOiB0eXBlb2YgRmxvYXQzMkFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IEZsb2F0MzJBcnJheSxcblx0JyQgJUZsb2F0MzJBcnJheVByb3RvdHlwZSUnOiB0eXBlb2YgRmxvYXQzMkFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IEZsb2F0MzJBcnJheS5wcm90b3R5cGUsXG5cdCckICVGbG9hdDY0QXJyYXklJzogdHlwZW9mIEZsb2F0NjRBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBGbG9hdDY0QXJyYXksXG5cdCckICVGbG9hdDY0QXJyYXlQcm90b3R5cGUlJzogdHlwZW9mIEZsb2F0NjRBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBGbG9hdDY0QXJyYXkucHJvdG90eXBlLFxuXHQnJCAlRnVuY3Rpb24lJzogRnVuY3Rpb24sXG5cdCckICVGdW5jdGlvblByb3RvdHlwZSUnOiBGdW5jdGlvbi5wcm90b3R5cGUsXG5cdCckICVHZW5lcmF0b3IlJzogZ2VuZXJhdG9yID8gZ2V0UHJvdG8oZ2VuZXJhdG9yKCkpIDogdW5kZWZpbmVkLFxuXHQnJCAlR2VuZXJhdG9yRnVuY3Rpb24lJzogZ2VuZXJhdG9yRnVuY3Rpb24sXG5cdCckICVHZW5lcmF0b3JQcm90b3R5cGUlJzogZ2VuZXJhdG9yRnVuY3Rpb24gPyBnZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgOiB1bmRlZmluZWQsXG5cdCckICVJbnQ4QXJyYXklJzogdHlwZW9mIEludDhBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBJbnQ4QXJyYXksXG5cdCckICVJbnQ4QXJyYXlQcm90b3R5cGUlJzogdHlwZW9mIEludDhBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBJbnQ4QXJyYXkucHJvdG90eXBlLFxuXHQnJCAlSW50MTZBcnJheSUnOiB0eXBlb2YgSW50MTZBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBJbnQxNkFycmF5LFxuXHQnJCAlSW50MTZBcnJheVByb3RvdHlwZSUnOiB0eXBlb2YgSW50MTZBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBJbnQ4QXJyYXkucHJvdG90eXBlLFxuXHQnJCAlSW50MzJBcnJheSUnOiB0eXBlb2YgSW50MzJBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBJbnQzMkFycmF5LFxuXHQnJCAlSW50MzJBcnJheVByb3RvdHlwZSUnOiB0eXBlb2YgSW50MzJBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBJbnQzMkFycmF5LnByb3RvdHlwZSxcblx0JyQgJWlzRmluaXRlJSc6IGlzRmluaXRlLFxuXHQnJCAlaXNOYU4lJzogaXNOYU4sXG5cdCckICVJdGVyYXRvclByb3RvdHlwZSUnOiBoYXNTeW1ib2xzID8gZ2V0UHJvdG8oZ2V0UHJvdG8oW11bU3ltYm9sLml0ZXJhdG9yXSgpKSkgOiB1bmRlZmluZWQsXG5cdCckICVKU09OJSc6IEpTT04sXG5cdCckICVKU09OUGFyc2UlJzogSlNPTi5wYXJzZSxcblx0JyQgJU1hcCUnOiB0eXBlb2YgTWFwID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IE1hcCxcblx0JyQgJU1hcEl0ZXJhdG9yUHJvdG90eXBlJSc6IHR5cGVvZiBNYXAgPT09ICd1bmRlZmluZWQnIHx8ICFoYXNTeW1ib2xzID8gdW5kZWZpbmVkIDogZ2V0UHJvdG8obmV3IE1hcCgpW1N5bWJvbC5pdGVyYXRvcl0oKSksXG5cdCckICVNYXBQcm90b3R5cGUlJzogdHlwZW9mIE1hcCA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBNYXAucHJvdG90eXBlLFxuXHQnJCAlTWF0aCUnOiBNYXRoLFxuXHQnJCAlTnVtYmVyJSc6IE51bWJlcixcblx0JyQgJU51bWJlclByb3RvdHlwZSUnOiBOdW1iZXIucHJvdG90eXBlLFxuXHQnJCAlT2JqZWN0JSc6IE9iamVjdCxcblx0JyQgJU9iamVjdFByb3RvdHlwZSUnOiBPYmplY3QucHJvdG90eXBlLFxuXHQnJCAlT2JqUHJvdG9fdG9TdHJpbmclJzogT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyxcblx0JyQgJU9ialByb3RvX3ZhbHVlT2YlJzogT2JqZWN0LnByb3RvdHlwZS52YWx1ZU9mLFxuXHQnJCAlcGFyc2VGbG9hdCUnOiBwYXJzZUZsb2F0LFxuXHQnJCAlcGFyc2VJbnQlJzogcGFyc2VJbnQsXG5cdCckICVQcm9taXNlJSc6IHR5cGVvZiBQcm9taXNlID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFByb21pc2UsXG5cdCckICVQcm9taXNlUHJvdG90eXBlJSc6IHR5cGVvZiBQcm9taXNlID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFByb21pc2UucHJvdG90eXBlLFxuXHQnJCAlUHJvbWlzZVByb3RvX3RoZW4lJzogdHlwZW9mIFByb21pc2UgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogUHJvbWlzZS5wcm90b3R5cGUudGhlbixcblx0JyQgJVByb21pc2VfYWxsJSc6IHR5cGVvZiBQcm9taXNlID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFByb21pc2UuYWxsLFxuXHQnJCAlUHJvbWlzZV9yZWplY3QlJzogdHlwZW9mIFByb21pc2UgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogUHJvbWlzZS5yZWplY3QsXG5cdCckICVQcm9taXNlX3Jlc29sdmUlJzogdHlwZW9mIFByb21pc2UgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogUHJvbWlzZS5yZXNvbHZlLFxuXHQnJCAlUHJveHklJzogdHlwZW9mIFByb3h5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFByb3h5LFxuXHQnJCAlUmFuZ2VFcnJvciUnOiBSYW5nZUVycm9yLFxuXHQnJCAlUmFuZ2VFcnJvclByb3RvdHlwZSUnOiBSYW5nZUVycm9yLnByb3RvdHlwZSxcblx0JyQgJVJlZmVyZW5jZUVycm9yJSc6IFJlZmVyZW5jZUVycm9yLFxuXHQnJCAlUmVmZXJlbmNlRXJyb3JQcm90b3R5cGUlJzogUmVmZXJlbmNlRXJyb3IucHJvdG90eXBlLFxuXHQnJCAlUmVmbGVjdCUnOiB0eXBlb2YgUmVmbGVjdCA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBSZWZsZWN0LFxuXHQnJCAlUmVnRXhwJSc6IFJlZ0V4cCxcblx0JyQgJVJlZ0V4cFByb3RvdHlwZSUnOiBSZWdFeHAucHJvdG90eXBlLFxuXHQnJCAlU2V0JSc6IHR5cGVvZiBTZXQgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogU2V0LFxuXHQnJCAlU2V0SXRlcmF0b3JQcm90b3R5cGUlJzogdHlwZW9mIFNldCA9PT0gJ3VuZGVmaW5lZCcgfHwgIWhhc1N5bWJvbHMgPyB1bmRlZmluZWQgOiBnZXRQcm90byhuZXcgU2V0KClbU3ltYm9sLml0ZXJhdG9yXSgpKSxcblx0JyQgJVNldFByb3RvdHlwZSUnOiB0eXBlb2YgU2V0ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFNldC5wcm90b3R5cGUsXG5cdCckICVTaGFyZWRBcnJheUJ1ZmZlciUnOiB0eXBlb2YgU2hhcmVkQXJyYXlCdWZmZXIgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogU2hhcmVkQXJyYXlCdWZmZXIsXG5cdCckICVTaGFyZWRBcnJheUJ1ZmZlclByb3RvdHlwZSUnOiB0eXBlb2YgU2hhcmVkQXJyYXlCdWZmZXIgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogU2hhcmVkQXJyYXlCdWZmZXIucHJvdG90eXBlLFxuXHQnJCAlU3RyaW5nJSc6IFN0cmluZyxcblx0JyQgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJSc6IGhhc1N5bWJvbHMgPyBnZXRQcm90bygnJ1tTeW1ib2wuaXRlcmF0b3JdKCkpIDogdW5kZWZpbmVkLFxuXHQnJCAlU3RyaW5nUHJvdG90eXBlJSc6IFN0cmluZy5wcm90b3R5cGUsXG5cdCckICVTeW1ib2wlJzogaGFzU3ltYm9scyA/IFN5bWJvbCA6IHVuZGVmaW5lZCxcblx0JyQgJVN5bWJvbFByb3RvdHlwZSUnOiBoYXNTeW1ib2xzID8gU3ltYm9sLnByb3RvdHlwZSA6IHVuZGVmaW5lZCxcblx0JyQgJVN5bnRheEVycm9yJSc6IFN5bnRheEVycm9yLFxuXHQnJCAlU3ludGF4RXJyb3JQcm90b3R5cGUlJzogU3ludGF4RXJyb3IucHJvdG90eXBlLFxuXHQnJCAlVGhyb3dUeXBlRXJyb3IlJzogVGhyb3dUeXBlRXJyb3IsXG5cdCckICVUeXBlZEFycmF5JSc6IFR5cGVkQXJyYXksXG5cdCckICVUeXBlZEFycmF5UHJvdG90eXBlJSc6IFR5cGVkQXJyYXkgPyBUeXBlZEFycmF5LnByb3RvdHlwZSA6IHVuZGVmaW5lZCxcblx0JyQgJVR5cGVFcnJvciUnOiBUeXBlRXJyb3IsXG5cdCckICVUeXBlRXJyb3JQcm90b3R5cGUlJzogVHlwZUVycm9yLnByb3RvdHlwZSxcblx0JyQgJVVpbnQ4QXJyYXklJzogdHlwZW9mIFVpbnQ4QXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogVWludDhBcnJheSxcblx0JyQgJVVpbnQ4QXJyYXlQcm90b3R5cGUlJzogdHlwZW9mIFVpbnQ4QXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogVWludDhBcnJheS5wcm90b3R5cGUsXG5cdCckICVVaW50OENsYW1wZWRBcnJheSUnOiB0eXBlb2YgVWludDhDbGFtcGVkQXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogVWludDhDbGFtcGVkQXJyYXksXG5cdCckICVVaW50OENsYW1wZWRBcnJheVByb3RvdHlwZSUnOiB0eXBlb2YgVWludDhDbGFtcGVkQXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogVWludDhDbGFtcGVkQXJyYXkucHJvdG90eXBlLFxuXHQnJCAlVWludDE2QXJyYXklJzogdHlwZW9mIFVpbnQxNkFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFVpbnQxNkFycmF5LFxuXHQnJCAlVWludDE2QXJyYXlQcm90b3R5cGUlJzogdHlwZW9mIFVpbnQxNkFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFVpbnQxNkFycmF5LnByb3RvdHlwZSxcblx0JyQgJVVpbnQzMkFycmF5JSc6IHR5cGVvZiBVaW50MzJBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBVaW50MzJBcnJheSxcblx0JyQgJVVpbnQzMkFycmF5UHJvdG90eXBlJSc6IHR5cGVvZiBVaW50MzJBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBVaW50MzJBcnJheS5wcm90b3R5cGUsXG5cdCckICVVUklFcnJvciUnOiBVUklFcnJvcixcblx0JyQgJVVSSUVycm9yUHJvdG90eXBlJSc6IFVSSUVycm9yLnByb3RvdHlwZSxcblx0JyQgJVdlYWtNYXAlJzogdHlwZW9mIFdlYWtNYXAgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogV2Vha01hcCxcblx0JyQgJVdlYWtNYXBQcm90b3R5cGUlJzogdHlwZW9mIFdlYWtNYXAgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogV2Vha01hcC5wcm90b3R5cGUsXG5cdCckICVXZWFrU2V0JSc6IHR5cGVvZiBXZWFrU2V0ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFdlYWtTZXQsXG5cdCckICVXZWFrU2V0UHJvdG90eXBlJSc6IHR5cGVvZiBXZWFrU2V0ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFdlYWtTZXQucHJvdG90eXBlXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIEdldEludHJpbnNpYyhuYW1lLCBhbGxvd01pc3NpbmcpIHtcblx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIHR5cGVvZiBhbGxvd01pc3NpbmcgIT09ICdib29sZWFuJykge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ1wiYWxsb3dNaXNzaW5nXCIgYXJndW1lbnQgbXVzdCBiZSBhIGJvb2xlYW4nKTtcblx0fVxuXG5cdHZhciBrZXkgPSAnJCAnICsgbmFtZTtcblx0aWYgKCEoa2V5IGluIElOVFJJTlNJQ1MpKSB7XG5cdFx0dGhyb3cgbmV3IFN5bnRheEVycm9yKCdpbnRyaW5zaWMgJyArIG5hbWUgKyAnIGRvZXMgbm90IGV4aXN0IScpO1xuXHR9XG5cblx0Ly8gaXN0YW5idWwgaWdub3JlIGlmIC8vIGhvcGVmdWxseSB0aGlzIGlzIGltcG9zc2libGUgdG8gdGVzdCA6LSlcblx0aWYgKHR5cGVvZiBJTlRSSU5TSUNTW2tleV0gPT09ICd1bmRlZmluZWQnICYmICFhbGxvd01pc3NpbmcpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdpbnRyaW5zaWMgJyArIG5hbWUgKyAnIGV4aXN0cywgYnV0IGlzIG5vdCBhdmFpbGFibGUuIFBsZWFzZSBmaWxlIGFuIGlzc3VlIScpO1xuXHR9XG5cdHJldHVybiBJTlRSSU5TSUNTW2tleV07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VzLWFic3RyYWN0L0dldEludHJpbnNpYy5qc1xuLy8gbW9kdWxlIGlkID0gNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgR2V0SW50cmluc2ljID0gcmVxdWlyZSgnLi4vR2V0SW50cmluc2ljJyk7XG5cbnZhciAkVHlwZUVycm9yID0gR2V0SW50cmluc2ljKCclVHlwZUVycm9yJScpO1xudmFyICRTeW50YXhFcnJvciA9IEdldEludHJpbnNpYygnJVN5bnRheEVycm9yJScpO1xuXG52YXIgaGFzID0gcmVxdWlyZSgnaGFzJyk7XG5cbnZhciBwcmVkaWNhdGVzID0ge1xuICAvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtcHJvcGVydHktZGVzY3JpcHRvci1zcGVjaWZpY2F0aW9uLXR5cGVcbiAgJ1Byb3BlcnR5IERlc2NyaXB0b3InOiBmdW5jdGlvbiBpc1Byb3BlcnR5RGVzY3JpcHRvcihFUywgRGVzYykge1xuICAgIGlmIChFUy5UeXBlKERlc2MpICE9PSAnT2JqZWN0Jykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB2YXIgYWxsb3dlZCA9IHtcbiAgICAgICdbW0NvbmZpZ3VyYWJsZV1dJzogdHJ1ZSxcbiAgICAgICdbW0VudW1lcmFibGVdXSc6IHRydWUsXG4gICAgICAnW1tHZXRdXSc6IHRydWUsXG4gICAgICAnW1tTZXRdXSc6IHRydWUsXG4gICAgICAnW1tWYWx1ZV1dJzogdHJ1ZSxcbiAgICAgICdbW1dyaXRhYmxlXV0nOiB0cnVlXG4gICAgfTtcblxuICAgIGZvciAodmFyIGtleSBpbiBEZXNjKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgIGlmIChoYXMoRGVzYywga2V5KSAmJiAhYWxsb3dlZFtrZXldKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgaXNEYXRhID0gaGFzKERlc2MsICdbW1ZhbHVlXV0nKTtcbiAgICB2YXIgSXNBY2Nlc3NvciA9IGhhcyhEZXNjLCAnW1tHZXRdXScpIHx8IGhhcyhEZXNjLCAnW1tTZXRdXScpO1xuICAgIGlmIChpc0RhdGEgJiYgSXNBY2Nlc3Nvcikge1xuICAgICAgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJ1Byb3BlcnR5IERlc2NyaXB0b3JzIG1heSBub3QgYmUgYm90aCBhY2Nlc3NvciBhbmQgZGF0YSBkZXNjcmlwdG9ycycpO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBhc3NlcnRSZWNvcmQoRVMsIHJlY29yZFR5cGUsIGFyZ3VtZW50TmFtZSwgdmFsdWUpIHtcbiAgdmFyIHByZWRpY2F0ZSA9IHByZWRpY2F0ZXNbcmVjb3JkVHlwZV07XG4gIGlmICh0eXBlb2YgcHJlZGljYXRlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3ICRTeW50YXhFcnJvcigndW5rbm93biByZWNvcmQgdHlwZTogJyArIHJlY29yZFR5cGUpO1xuICB9XG4gIGlmICghcHJlZGljYXRlKEVTLCB2YWx1ZSkpIHtcbiAgICB0aHJvdyBuZXcgJFR5cGVFcnJvcihhcmd1bWVudE5hbWUgKyAnIG11c3QgYmUgYSAnICsgcmVjb3JkVHlwZSk7XG4gIH1cbiAgY29uc29sZS5sb2cocHJlZGljYXRlKEVTLCB2YWx1ZSksIHZhbHVlKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZXMtYWJzdHJhY3QvaGVscGVycy9hc3NlcnRSZWNvcmQuanNcbi8vIG1vZHVsZSBpZCA9IDU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gTnVtYmVyLmlzTmFOIHx8IGZ1bmN0aW9uIGlzTmFOKGEpIHtcblx0cmV0dXJuIGEgIT09IGE7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VzLWFic3RyYWN0L2hlbHBlcnMvaXNOYU4uanNcbi8vIG1vZHVsZSBpZCA9IDU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciAkaXNOYU4gPSBOdW1iZXIuaXNOYU4gfHwgZnVuY3Rpb24gKGEpIHsgcmV0dXJuIGEgIT09IGE7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gTnVtYmVyLmlzRmluaXRlIHx8IGZ1bmN0aW9uICh4KSB7IHJldHVybiB0eXBlb2YgeCA9PT0gJ251bWJlcicgJiYgISRpc05hTih4KSAmJiB4ICE9PSBJbmZpbml0eSAmJiB4ICE9PSAtSW5maW5pdHk7IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZXMtYWJzdHJhY3QvaGVscGVycy9pc0Zpbml0ZS5qc1xuLy8gbW9kdWxlIGlkID0gNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJpbmQgPSByZXF1aXJlKCdmdW5jdGlvbi1iaW5kJyk7XG52YXIgaGFzID0gYmluZC5jYWxsKEZ1bmN0aW9uLmNhbGwsIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuXG52YXIgJGFzc2lnbiA9IE9iamVjdC5hc3NpZ247XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKSB7XG5cdGlmICgkYXNzaWduKSB7XG5cdFx0cmV0dXJuICRhc3NpZ24odGFyZ2V0LCBzb3VyY2UpO1xuXHR9XG5cblx0Zm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuXHRcdGlmIChoYXMoc291cmNlLCBrZXkpKSB7XG5cdFx0XHR0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gdGFyZ2V0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy1hYnN0cmFjdC9oZWxwZXJzL2Fzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzaWduKG51bWJlcikge1xuXHRyZXR1cm4gbnVtYmVyID49IDAgPyAxIDogLTE7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VzLWFic3RyYWN0L2hlbHBlcnMvc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBtb2QobnVtYmVyLCBtb2R1bG8pIHtcblx0dmFyIHJlbWFpbiA9IG51bWJlciAlIG1vZHVsbztcblx0cmV0dXJuIE1hdGguZmxvb3IocmVtYWluID49IDAgPyByZW1haW4gOiByZW1haW4gKyBtb2R1bG8pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy1hYnN0cmFjdC9oZWxwZXJzL21vZC5qc1xuLy8gbW9kdWxlIGlkID0gNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc1ByaW1pdGl2ZSh2YWx1ZSkge1xuXHRyZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgKHR5cGVvZiB2YWx1ZSAhPT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZXMtYWJzdHJhY3QvaGVscGVycy9pc1ByaW1pdGl2ZS5qc1xuLy8gbW9kdWxlIGlkID0gNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgR2V0SW50cmluc2ljID0gcmVxdWlyZSgnLi9HZXRJbnRyaW5zaWMnKTtcblxudmFyICRPYmplY3QgPSBHZXRJbnRyaW5zaWMoJyVPYmplY3QlJyk7XG52YXIgJFR5cGVFcnJvciA9IEdldEludHJpbnNpYygnJVR5cGVFcnJvciUnKTtcbnZhciAkU3RyaW5nID0gR2V0SW50cmluc2ljKCclU3RyaW5nJScpO1xuXG52YXIgYXNzZXJ0UmVjb3JkID0gcmVxdWlyZSgnLi9oZWxwZXJzL2Fzc2VydFJlY29yZCcpO1xudmFyICRpc05hTiA9IHJlcXVpcmUoJy4vaGVscGVycy9pc05hTicpO1xudmFyICRpc0Zpbml0ZSA9IHJlcXVpcmUoJy4vaGVscGVycy9pc0Zpbml0ZScpO1xuXG52YXIgc2lnbiA9IHJlcXVpcmUoJy4vaGVscGVycy9zaWduJyk7XG52YXIgbW9kID0gcmVxdWlyZSgnLi9oZWxwZXJzL21vZCcpO1xuXG52YXIgSXNDYWxsYWJsZSA9IHJlcXVpcmUoJ2lzLWNhbGxhYmxlJyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCdlcy10by1wcmltaXRpdmUvZXM1Jyk7XG5cbnZhciBoYXMgPSByZXF1aXJlKCdoYXMnKTtcblxuLy8gaHR0cHM6Ly9lczUuZ2l0aHViLmlvLyN4OVxudmFyIEVTNSA9IHtcblx0VG9QcmltaXRpdmU6IHRvUHJpbWl0aXZlLFxuXG5cdFRvQm9vbGVhbjogZnVuY3Rpb24gVG9Cb29sZWFuKHZhbHVlKSB7XG5cdFx0cmV0dXJuICEhdmFsdWU7XG5cdH0sXG5cdFRvTnVtYmVyOiBmdW5jdGlvbiBUb051bWJlcih2YWx1ZSkge1xuXHRcdHJldHVybiArdmFsdWU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8taW1wbGljaXQtY29lcmNpb25cblx0fSxcblx0VG9JbnRlZ2VyOiBmdW5jdGlvbiBUb0ludGVnZXIodmFsdWUpIHtcblx0XHR2YXIgbnVtYmVyID0gdGhpcy5Ub051bWJlcih2YWx1ZSk7XG5cdFx0aWYgKCRpc05hTihudW1iZXIpKSB7IHJldHVybiAwOyB9XG5cdFx0aWYgKG51bWJlciA9PT0gMCB8fCAhJGlzRmluaXRlKG51bWJlcikpIHsgcmV0dXJuIG51bWJlcjsgfVxuXHRcdHJldHVybiBzaWduKG51bWJlcikgKiBNYXRoLmZsb29yKE1hdGguYWJzKG51bWJlcikpO1xuXHR9LFxuXHRUb0ludDMyOiBmdW5jdGlvbiBUb0ludDMyKHgpIHtcblx0XHRyZXR1cm4gdGhpcy5Ub051bWJlcih4KSA+PiAwO1xuXHR9LFxuXHRUb1VpbnQzMjogZnVuY3Rpb24gVG9VaW50MzIoeCkge1xuXHRcdHJldHVybiB0aGlzLlRvTnVtYmVyKHgpID4+PiAwO1xuXHR9LFxuXHRUb1VpbnQxNjogZnVuY3Rpb24gVG9VaW50MTYodmFsdWUpIHtcblx0XHR2YXIgbnVtYmVyID0gdGhpcy5Ub051bWJlcih2YWx1ZSk7XG5cdFx0aWYgKCRpc05hTihudW1iZXIpIHx8IG51bWJlciA9PT0gMCB8fCAhJGlzRmluaXRlKG51bWJlcikpIHsgcmV0dXJuIDA7IH1cblx0XHR2YXIgcG9zSW50ID0gc2lnbihudW1iZXIpICogTWF0aC5mbG9vcihNYXRoLmFicyhudW1iZXIpKTtcblx0XHRyZXR1cm4gbW9kKHBvc0ludCwgMHgxMDAwMCk7XG5cdH0sXG5cdFRvU3RyaW5nOiBmdW5jdGlvbiBUb1N0cmluZyh2YWx1ZSkge1xuXHRcdHJldHVybiAkU3RyaW5nKHZhbHVlKTtcblx0fSxcblx0VG9PYmplY3Q6IGZ1bmN0aW9uIFRvT2JqZWN0KHZhbHVlKSB7XG5cdFx0dGhpcy5DaGVja09iamVjdENvZXJjaWJsZSh2YWx1ZSk7XG5cdFx0cmV0dXJuICRPYmplY3QodmFsdWUpO1xuXHR9LFxuXHRDaGVja09iamVjdENvZXJjaWJsZTogZnVuY3Rpb24gQ2hlY2tPYmplY3RDb2VyY2libGUodmFsdWUsIG9wdE1lc3NhZ2UpIHtcblx0XHQvKiBqc2hpbnQgZXFudWxsOnRydWUgKi9cblx0XHRpZiAodmFsdWUgPT0gbnVsbCkge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3Iob3B0TWVzc2FnZSB8fCAnQ2Fubm90IGNhbGwgbWV0aG9kIG9uICcgKyB2YWx1ZSk7XG5cdFx0fVxuXHRcdHJldHVybiB2YWx1ZTtcblx0fSxcblx0SXNDYWxsYWJsZTogSXNDYWxsYWJsZSxcblx0U2FtZVZhbHVlOiBmdW5jdGlvbiBTYW1lVmFsdWUoeCwgeSkge1xuXHRcdGlmICh4ID09PSB5KSB7IC8vIDAgPT09IC0wLCBidXQgdGhleSBhcmUgbm90IGlkZW50aWNhbC5cblx0XHRcdGlmICh4ID09PSAwKSB7IHJldHVybiAxIC8geCA9PT0gMSAvIHk7IH1cblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRyZXR1cm4gJGlzTmFOKHgpICYmICRpc05hTih5KTtcblx0fSxcblxuXHQvLyBodHRwczovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzUuMS8jc2VjLThcblx0VHlwZTogZnVuY3Rpb24gVHlwZSh4KSB7XG5cdFx0aWYgKHggPT09IG51bGwpIHtcblx0XHRcdHJldHVybiAnTnVsbCc7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2YgeCA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdHJldHVybiAnVW5kZWZpbmVkJztcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiB4ID09PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiB4ID09PSAnb2JqZWN0Jykge1xuXHRcdFx0cmV0dXJuICdPYmplY3QnO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIHggPT09ICdudW1iZXInKSB7XG5cdFx0XHRyZXR1cm4gJ051bWJlcic7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2YgeCA9PT0gJ2Jvb2xlYW4nKSB7XG5cdFx0XHRyZXR1cm4gJ0Jvb2xlYW4nO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIHggPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRyZXR1cm4gJ1N0cmluZyc7XG5cdFx0fVxuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1wcm9wZXJ0eS1kZXNjcmlwdG9yLXNwZWNpZmljYXRpb24tdHlwZVxuXHRJc1Byb3BlcnR5RGVzY3JpcHRvcjogZnVuY3Rpb24gSXNQcm9wZXJ0eURlc2NyaXB0b3IoRGVzYykge1xuXHRcdGlmICh0aGlzLlR5cGUoRGVzYykgIT09ICdPYmplY3QnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHZhciBhbGxvd2VkID0ge1xuXHRcdFx0J1tbQ29uZmlndXJhYmxlXV0nOiB0cnVlLFxuXHRcdFx0J1tbRW51bWVyYWJsZV1dJzogdHJ1ZSxcblx0XHRcdCdbW0dldF1dJzogdHJ1ZSxcblx0XHRcdCdbW1NldF1dJzogdHJ1ZSxcblx0XHRcdCdbW1ZhbHVlXV0nOiB0cnVlLFxuXHRcdFx0J1tbV3JpdGFibGVdXSc6IHRydWVcblx0XHR9O1xuXG5cdFx0Zm9yICh2YXIga2V5IGluIERlc2MpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXHRcdFx0aWYgKGhhcyhEZXNjLCBrZXkpICYmICFhbGxvd2VkW2tleV0pIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHZhciBpc0RhdGEgPSBoYXMoRGVzYywgJ1tbVmFsdWVdXScpO1xuXHRcdHZhciBJc0FjY2Vzc29yID0gaGFzKERlc2MsICdbW0dldF1dJykgfHwgaGFzKERlc2MsICdbW1NldF1dJyk7XG5cdFx0aWYgKGlzRGF0YSAmJiBJc0FjY2Vzc29yKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignUHJvcGVydHkgRGVzY3JpcHRvcnMgbWF5IG5vdCBiZSBib3RoIGFjY2Vzc29yIGFuZCBkYXRhIGRlc2NyaXB0b3JzJyk7XG5cdFx0fVxuXHRcdHJldHVybiB0cnVlO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi81LjEvI3NlYy04LjEwLjFcblx0SXNBY2Nlc3NvckRlc2NyaXB0b3I6IGZ1bmN0aW9uIElzQWNjZXNzb3JEZXNjcmlwdG9yKERlc2MpIHtcblx0XHRpZiAodHlwZW9mIERlc2MgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0YXNzZXJ0UmVjb3JkKHRoaXMsICdQcm9wZXJ0eSBEZXNjcmlwdG9yJywgJ0Rlc2MnLCBEZXNjKTtcblxuXHRcdGlmICghaGFzKERlc2MsICdbW0dldF1dJykgJiYgIWhhcyhEZXNjLCAnW1tTZXRdXScpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzUuMS8jc2VjLTguMTAuMlxuXHRJc0RhdGFEZXNjcmlwdG9yOiBmdW5jdGlvbiBJc0RhdGFEZXNjcmlwdG9yKERlc2MpIHtcblx0XHRpZiAodHlwZW9mIERlc2MgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0YXNzZXJ0UmVjb3JkKHRoaXMsICdQcm9wZXJ0eSBEZXNjcmlwdG9yJywgJ0Rlc2MnLCBEZXNjKTtcblxuXHRcdGlmICghaGFzKERlc2MsICdbW1ZhbHVlXV0nKSAmJiAhaGFzKERlc2MsICdbW1dyaXRhYmxlXV0nKSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi81LjEvI3NlYy04LjEwLjNcblx0SXNHZW5lcmljRGVzY3JpcHRvcjogZnVuY3Rpb24gSXNHZW5lcmljRGVzY3JpcHRvcihEZXNjKSB7XG5cdFx0aWYgKHR5cGVvZiBEZXNjID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGFzc2VydFJlY29yZCh0aGlzLCAnUHJvcGVydHkgRGVzY3JpcHRvcicsICdEZXNjJywgRGVzYyk7XG5cblx0XHRpZiAoIXRoaXMuSXNBY2Nlc3NvckRlc2NyaXB0b3IoRGVzYykgJiYgIXRoaXMuSXNEYXRhRGVzY3JpcHRvcihEZXNjKSkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi81LjEvI3NlYy04LjEwLjRcblx0RnJvbVByb3BlcnR5RGVzY3JpcHRvcjogZnVuY3Rpb24gRnJvbVByb3BlcnR5RGVzY3JpcHRvcihEZXNjKSB7XG5cdFx0aWYgKHR5cGVvZiBEZXNjID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0cmV0dXJuIERlc2M7XG5cdFx0fVxuXG5cdFx0YXNzZXJ0UmVjb3JkKHRoaXMsICdQcm9wZXJ0eSBEZXNjcmlwdG9yJywgJ0Rlc2MnLCBEZXNjKTtcblxuXHRcdGlmICh0aGlzLklzRGF0YURlc2NyaXB0b3IoRGVzYykpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHZhbHVlOiBEZXNjWydbW1ZhbHVlXV0nXSxcblx0XHRcdFx0d3JpdGFibGU6ICEhRGVzY1snW1tXcml0YWJsZV1dJ10sXG5cdFx0XHRcdGVudW1lcmFibGU6ICEhRGVzY1snW1tFbnVtZXJhYmxlXV0nXSxcblx0XHRcdFx0Y29uZmlndXJhYmxlOiAhIURlc2NbJ1tbQ29uZmlndXJhYmxlXV0nXVxuXHRcdFx0fTtcblx0XHR9IGVsc2UgaWYgKHRoaXMuSXNBY2Nlc3NvckRlc2NyaXB0b3IoRGVzYykpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGdldDogRGVzY1snW1tHZXRdXSddLFxuXHRcdFx0XHRzZXQ6IERlc2NbJ1tbU2V0XV0nXSxcblx0XHRcdFx0ZW51bWVyYWJsZTogISFEZXNjWydbW0VudW1lcmFibGVdXSddLFxuXHRcdFx0XHRjb25maWd1cmFibGU6ICEhRGVzY1snW1tDb25maWd1cmFibGVdXSddXG5cdFx0XHR9O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignRnJvbVByb3BlcnR5RGVzY3JpcHRvciBtdXN0IGJlIGNhbGxlZCB3aXRoIGEgZnVsbHkgcG9wdWxhdGVkIFByb3BlcnR5IERlc2NyaXB0b3InKTtcblx0XHR9XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzUuMS8jc2VjLTguMTAuNVxuXHRUb1Byb3BlcnR5RGVzY3JpcHRvcjogZnVuY3Rpb24gVG9Qcm9wZXJ0eURlc2NyaXB0b3IoT2JqKSB7XG5cdFx0aWYgKHRoaXMuVHlwZShPYmopICE9PSAnT2JqZWN0Jykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ1RvUHJvcGVydHlEZXNjcmlwdG9yIHJlcXVpcmVzIGFuIG9iamVjdCcpO1xuXHRcdH1cblxuXHRcdHZhciBkZXNjID0ge307XG5cdFx0aWYgKGhhcyhPYmosICdlbnVtZXJhYmxlJykpIHtcblx0XHRcdGRlc2NbJ1tbRW51bWVyYWJsZV1dJ10gPSB0aGlzLlRvQm9vbGVhbihPYmouZW51bWVyYWJsZSk7XG5cdFx0fVxuXHRcdGlmIChoYXMoT2JqLCAnY29uZmlndXJhYmxlJykpIHtcblx0XHRcdGRlc2NbJ1tbQ29uZmlndXJhYmxlXV0nXSA9IHRoaXMuVG9Cb29sZWFuKE9iai5jb25maWd1cmFibGUpO1xuXHRcdH1cblx0XHRpZiAoaGFzKE9iaiwgJ3ZhbHVlJykpIHtcblx0XHRcdGRlc2NbJ1tbVmFsdWVdXSddID0gT2JqLnZhbHVlO1xuXHRcdH1cblx0XHRpZiAoaGFzKE9iaiwgJ3dyaXRhYmxlJykpIHtcblx0XHRcdGRlc2NbJ1tbV3JpdGFibGVdXSddID0gdGhpcy5Ub0Jvb2xlYW4oT2JqLndyaXRhYmxlKTtcblx0XHR9XG5cdFx0aWYgKGhhcyhPYmosICdnZXQnKSkge1xuXHRcdFx0dmFyIGdldHRlciA9IE9iai5nZXQ7XG5cdFx0XHRpZiAodHlwZW9mIGdldHRlciAhPT0gJ3VuZGVmaW5lZCcgJiYgIXRoaXMuSXNDYWxsYWJsZShnZXR0ZXIpKSB7XG5cdFx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ2dldHRlciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcblx0XHRcdH1cblx0XHRcdGRlc2NbJ1tbR2V0XV0nXSA9IGdldHRlcjtcblx0XHR9XG5cdFx0aWYgKGhhcyhPYmosICdzZXQnKSkge1xuXHRcdFx0dmFyIHNldHRlciA9IE9iai5zZXQ7XG5cdFx0XHRpZiAodHlwZW9mIHNldHRlciAhPT0gJ3VuZGVmaW5lZCcgJiYgIXRoaXMuSXNDYWxsYWJsZShzZXR0ZXIpKSB7XG5cdFx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdzZXR0ZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cdFx0XHR9XG5cdFx0XHRkZXNjWydbW1NldF1dJ10gPSBzZXR0ZXI7XG5cdFx0fVxuXG5cdFx0aWYgKChoYXMoZGVzYywgJ1tbR2V0XV0nKSB8fCBoYXMoZGVzYywgJ1tbU2V0XV0nKSkgJiYgKGhhcyhkZXNjLCAnW1tWYWx1ZV1dJykgfHwgaGFzKGRlc2MsICdbW1dyaXRhYmxlXV0nKSkpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdJbnZhbGlkIHByb3BlcnR5IGRlc2NyaXB0b3IuIENhbm5vdCBib3RoIHNwZWNpZnkgYWNjZXNzb3JzIGFuZCBhIHZhbHVlIG9yIHdyaXRhYmxlIGF0dHJpYnV0ZScpO1xuXHRcdH1cblx0XHRyZXR1cm4gZGVzYztcblx0fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBFUzU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZXMtYWJzdHJhY3QvZXM1LmpzXG4vLyBtb2R1bGUgaWQgPSA2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbnZhciBpc1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vaGVscGVycy9pc1ByaW1pdGl2ZScpO1xuXG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJ2lzLWNhbGxhYmxlJyk7XG5cbi8vIGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzUuMS8jc2VjLTguMTIuOFxudmFyIEVTNWludGVybmFsU2xvdHMgPSB7XG5cdCdbW0RlZmF1bHRWYWx1ZV1dJzogZnVuY3Rpb24gKE8pIHtcblx0XHR2YXIgYWN0dWFsSGludDtcblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcblx0XHRcdGFjdHVhbEhpbnQgPSBhcmd1bWVudHNbMV07XG5cdFx0fSBlbHNlIHtcblx0XHRcdGFjdHVhbEhpbnQgPSB0b1N0ci5jYWxsKE8pID09PSAnW29iamVjdCBEYXRlXScgPyBTdHJpbmcgOiBOdW1iZXI7XG5cdFx0fVxuXG5cdFx0aWYgKGFjdHVhbEhpbnQgPT09IFN0cmluZyB8fCBhY3R1YWxIaW50ID09PSBOdW1iZXIpIHtcblx0XHRcdHZhciBtZXRob2RzID0gYWN0dWFsSGludCA9PT0gU3RyaW5nID8gWyd0b1N0cmluZycsICd2YWx1ZU9mJ10gOiBbJ3ZhbHVlT2YnLCAndG9TdHJpbmcnXTtcblx0XHRcdHZhciB2YWx1ZSwgaTtcblx0XHRcdGZvciAoaSA9IDA7IGkgPCBtZXRob2RzLmxlbmd0aDsgKytpKSB7XG5cdFx0XHRcdGlmIChpc0NhbGxhYmxlKE9bbWV0aG9kc1tpXV0pKSB7XG5cdFx0XHRcdFx0dmFsdWUgPSBPW21ldGhvZHNbaV1dKCk7XG5cdFx0XHRcdFx0aWYgKGlzUHJpbWl0aXZlKHZhbHVlKSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignTm8gZGVmYXVsdCB2YWx1ZScpO1xuXHRcdH1cblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdpbnZhbGlkIFtbRGVmYXVsdFZhbHVlXV0gaGludCBzdXBwbGllZCcpO1xuXHR9XG59O1xuXG4vLyBodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi81LjEvI3NlYy05LjFcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gVG9QcmltaXRpdmUoaW5wdXQpIHtcblx0aWYgKGlzUHJpbWl0aXZlKGlucHV0KSkge1xuXHRcdHJldHVybiBpbnB1dDtcblx0fVxuXHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcblx0XHRyZXR1cm4gRVM1aW50ZXJuYWxTbG90c1snW1tEZWZhdWx0VmFsdWVdXSddKGlucHV0LCBhcmd1bWVudHNbMV0pO1xuXHR9XG5cdHJldHVybiBFUzVpbnRlcm5hbFNsb3RzWydbW0RlZmF1bHRWYWx1ZV1dJ10oaW5wdXQpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy10by1wcmltaXRpdmUvZXM1LmpzXG4vLyBtb2R1bGUgaWQgPSA2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBoYXMgPSByZXF1aXJlKCdoYXMnKTtcbnZhciByZWdleEV4ZWMgPSBSZWdFeHAucHJvdG90eXBlLmV4ZWM7XG52YXIgZ09QRCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbnZhciB0cnlSZWdleEV4ZWNDYWxsID0gZnVuY3Rpb24gdHJ5UmVnZXhFeGVjKHZhbHVlKSB7XG5cdHRyeSB7XG5cdFx0dmFyIGxhc3RJbmRleCA9IHZhbHVlLmxhc3RJbmRleDtcblx0XHR2YWx1ZS5sYXN0SW5kZXggPSAwO1xuXG5cdFx0cmVnZXhFeGVjLmNhbGwodmFsdWUpO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9IGZpbmFsbHkge1xuXHRcdHZhbHVlLmxhc3RJbmRleCA9IGxhc3RJbmRleDtcblx0fVxufTtcbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgcmVnZXhDbGFzcyA9ICdbb2JqZWN0IFJlZ0V4cF0nO1xudmFyIGhhc1RvU3RyaW5nVGFnID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgU3ltYm9sLnRvU3RyaW5nVGFnID09PSAnc3ltYm9sJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc1JlZ2V4KHZhbHVlKSB7XG5cdGlmICghdmFsdWUgfHwgdHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0Jykge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXHRpZiAoIWhhc1RvU3RyaW5nVGFnKSB7XG5cdFx0cmV0dXJuIHRvU3RyLmNhbGwodmFsdWUpID09PSByZWdleENsYXNzO1xuXHR9XG5cblx0dmFyIGRlc2NyaXB0b3IgPSBnT1BEKHZhbHVlLCAnbGFzdEluZGV4Jyk7XG5cdHZhciBoYXNMYXN0SW5kZXhEYXRhUHJvcGVydHkgPSBkZXNjcmlwdG9yICYmIGhhcyhkZXNjcmlwdG9yLCAndmFsdWUnKTtcblx0aWYgKCFoYXNMYXN0SW5kZXhEYXRhUHJvcGVydHkpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRyZXR1cm4gdHJ5UmVnZXhFeGVjQ2FsbCh2YWx1ZSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2lzLXJlZ2V4L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBFUyA9IHJlcXVpcmUoJ2VzLWFic3RyYWN0L2VzNicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGZpbmQocHJlZGljYXRlKSB7XG5cdHZhciBsaXN0ID0gRVMuVG9PYmplY3QodGhpcyk7XG5cdHZhciBsZW5ndGggPSBFUy5Ub0xlbmd0aChsaXN0Lmxlbmd0aCk7XG5cdGlmICghRVMuSXNDYWxsYWJsZShwcmVkaWNhdGUpKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignQXJyYXkjZmluZDogcHJlZGljYXRlIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXHR9XG5cdGlmIChsZW5ndGggPT09IDApIHtcblx0XHRyZXR1cm4gdm9pZCAwO1xuXHR9XG5cdHZhciB0aGlzQXJnO1xuXHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDApIHtcblx0XHR0aGlzQXJnID0gYXJndW1lbnRzWzFdO1xuXHR9XG5cblx0Zm9yICh2YXIgaSA9IDAsIHZhbHVlOyBpIDwgbGVuZ3RoOyBpKyspIHtcblx0XHR2YWx1ZSA9IGxpc3RbaV07XG5cdFx0Ly8gaW5saW5lZCBmb3IgcGVyZm9ybWFuY2U6IGlmIChFUy5DYWxsKHByZWRpY2F0ZSwgdGhpc0FyZywgW3ZhbHVlLCBpLCBsaXN0XSkpIHtcblx0XHRpZiAocHJlZGljYXRlLmFwcGx5KHRoaXNBcmcsIFt2YWx1ZSwgaSwgbGlzdF0pKSB7XG5cdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0fVxuXHR9XG5cdHJldHVybiB2b2lkIDA7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2FycmF5LnByb3RvdHlwZS5maW5kL2ltcGxlbWVudGF0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSA2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZ2V0UG9seWZpbGwoKSB7XG5cdC8vIERldGVjdCBpZiBhbiBpbXBsZW1lbnRhdGlvbiBleGlzdHNcblx0Ly8gRGV0ZWN0IGVhcmx5IGltcGxlbWVudGF0aW9ucyB3aGljaCBza2lwcGVkIGhvbGVzIGluIHNwYXJzZSBhcnJheXNcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNwYXJzZS1hcnJheXNcblx0dmFyIGltcGxlbWVudGVkID0gQXJyYXkucHJvdG90eXBlLmZpbmQgJiYgWywgMV0uZmluZChmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0pICE9PSAxO1xuXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBnbG9iYWwtcmVxdWlyZVxuXHRyZXR1cm4gaW1wbGVtZW50ZWQgPyBBcnJheS5wcm90b3R5cGUuZmluZCA6IHJlcXVpcmUoJy4vaW1wbGVtZW50YXRpb24nKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYXJyYXkucHJvdG90eXBlLmZpbmQvcG9seWZpbGwuanNcbi8vIG1vZHVsZSBpZCA9IDY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIGRlZmluZSA9IHJlcXVpcmUoJ2RlZmluZS1wcm9wZXJ0aWVzJyk7XG52YXIgZ2V0UG9seWZpbGwgPSByZXF1aXJlKCcuL3BvbHlmaWxsJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2hpbUFycmF5UHJvdG90eXBlRmluZCgpIHtcblx0dmFyIHBvbHlmaWxsID0gZ2V0UG9seWZpbGwoKTtcblxuXHRkZWZpbmUoQXJyYXkucHJvdG90eXBlLCB7IGZpbmQ6IHBvbHlmaWxsIH0sIHtcblx0XHRmaW5kOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gQXJyYXkucHJvdG90eXBlLmZpbmQgIT09IHBvbHlmaWxsO1xuXHRcdH1cblx0fSk7XG5cblx0cmV0dXJuIHBvbHlmaWxsO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9hcnJheS5wcm90b3R5cGUuZmluZC9zaGltLmpzXG4vLyBtb2R1bGUgaWQgPSA2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi1hcnJvd3MtYWx0XFxcIj48dGl0bGU+YXJyb3dzLWFsdDwvdGl0bGU+PHBhdGggZD1cXFwiTTE0MTEgNTQxbC0zNTUgMzU1IDM1NSAzNTUgMTQ0LTE0NHEyOS0zMSA3MC0xNCAzOSAxNyAzOSA1OXY0NDhxMCAyNi0xOSA0NXQtNDUgMTloLTQ0OHEtNDIgMC01OS00MC0xNy0zOSAxNC02OWwxNDQtMTQ0LTM1NS0zNTUtMzU1IDM1NSAxNDQgMTQ0cTMxIDMwIDE0IDY5LTE3IDQwLTU5IDQwaC00NDhxLTI2IDAtNDUtMTl0LTE5LTQ1di00NDhxMC00MiA0MC01OSAzOS0xNyA2OSAxNGwxNDQgMTQ0IDM1NS0zNTUtMzU1LTM1NS0xNDQgMTQ0cS0xOSAxOS00NSAxOS0xMiAwLTI0LTUtNDAtMTctNDAtNTl2LTQ0OHEwLTI2IDE5LTQ1dDQ1LTE5aDQ0OHE0MiAwIDU5IDQwIDE3IDM5LTE0IDY5bC0xNDQgMTQ0IDM1NSAzNTUgMzU1LTM1NS0xNDQtMTQ0cS0zMS0zMC0xNC02OSAxNy00MCA1OS00MGg0NDhxMjYgMCA0NSAxOXQxOSA0NXY0NDhxMCA0Mi0zOSA1OS0xMyA1LTI1IDUtMjYgMC00NS0xOXpcXFwiLz48L3N5bWJvbD48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDE3OTIgMTc5MlxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tYmFja3dhcmRcXFwiPjx0aXRsZT5iYWNrd2FyZDwvdGl0bGU+PHBhdGggZD1cXFwiTTE2ODMgMTQxcTE5LTE5IDMyLTEzdDEzIDMydjE0NzJxMCAyNi0xMyAzMnQtMzItMTNsLTcxMC03MTBxLTgtOS0xMy0xOXY3MTBxMCAyNi0xMyAzMnQtMzItMTNsLTcxMC03MTBxLTE5LTE5LTE5LTQ1dDE5LTQ1bDcxMC03MTBxMTktMTkgMzItMTN0MTMgMzJ2NzEwcTUtMTEgMTMtMTl6XFxcIi8+PC9zeW1ib2w+PHN5bWJvbCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNzkyIDE3OTJcXFwiIGlkPVxcXCJsZXBsYXllci1pY29uLWJ1bGxzZXllXFxcIj48dGl0bGU+YnVsbHNleWU8L3RpdGxlPjxwYXRoIGQ9XFxcIk0xMTUyIDg5NnEwIDEwNi03NSAxODF0LTE4MSA3NS0xODEtNzUtNzUtMTgxIDc1LTE4MSAxODEtNzUgMTgxIDc1IDc1IDE4MXptMTI4IDBxMC0xNTktMTEyLjUtMjcxLjV0LTI3MS41LTExMi41LTI3MS41IDExMi41LTExMi41IDI3MS41IDExMi41IDI3MS41IDI3MS41IDExMi41IDI3MS41LTExMi41IDExMi41LTI3MS41em0xMjggMHEwIDIxMi0xNTAgMzYydC0zNjIgMTUwLTM2Mi0xNTAtMTUwLTM2MiAxNTAtMzYyIDM2Mi0xNTAgMzYyIDE1MCAxNTAgMzYyem0xMjggMHEwLTEzMC01MS0yNDguNXQtMTM2LjUtMjA0LTIwNC0xMzYuNS0yNDguNS01MS0yNDguNSA1MS0yMDQgMTM2LjUtMTM2LjUgMjA0LTUxIDI0OC41IDUxIDI0OC41IDEzNi41IDIwNCAyMDQgMTM2LjUgMjQ4LjUgNTEgMjQ4LjUtNTEgMjA0LTEzNi41IDEzNi41LTIwNCA1MS0yNDguNXptMTI4IDBxMCAyMDktMTAzIDM4NS41dC0yNzkuNSAyNzkuNS0zODUuNSAxMDMtMzg1LjUtMTAzLTI3OS41LTI3OS41LTEwMy0zODUuNSAxMDMtMzg1LjUgMjc5LjUtMjc5LjUgMzg1LjUtMTAzIDM4NS41IDEwMyAyNzkuNSAyNzkuNSAxMDMgMzg1LjV6XFxcIi8+PC9zeW1ib2w+PHN5bWJvbCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIHZpZXdCb3g9XFxcIjAgMCA0MDAgMzgwXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi1jYXRcXFwiPjx0aXRsZT5jYXQ8L3RpdGxlPiA8cGF0aCBkPVxcXCJNIDE1MS4zNDkwNCwzMDcuMjA0NTUgTCAyNjQuMzQ5MDQsMzA3LjIwNDU1IEMgMjY0LjM0OTA0LDI5MS4xNDA5NiAyNjMuMjAyMSwyODcuOTU0NTUgMjM2LjU5OTA0LDI4Ny45NTQ1NSBDIDI0MC44NDkwNCwyNzUuMjA0NTUgMjU4LjEyNDI0LDI0NC4zNTgwOCAyNjcuNzI0MDQsMjQ0LjM1ODA4IEMgMjc2LjIxNzA3LDI0NC4zNTgwOCAyODYuMzQ5MDQsMjQ0LjgyNTkyIDI4Ni4zNDkwNCwyNjQuMjA0NTUgQyAyODYuMzQ5MDQsMjg2LjIwNDU1IDMyMy4zNzE3MSwzMjEuNjc1NDcgMzMyLjM0OTA0LDMwNy4yMDQ1NSBDIDM0NS43Mjc2OSwyODUuNjM4OTcgMzA5LjM0OTA0LDI5Mi4yMTUxNCAzMDkuMzQ5MDQsMjQwLjIwNDU1IEMgMzA5LjM0OTA0LDE2OS4wNTEzNSAzNTAuODc0MTcsMTc5LjE4MDcxIDM1MC44NzQxNywxMzkuMjA0NTUgQyAzNTAuODc0MTcsMTE5LjIwNDU1IDM0NS4zNDkwNCwxMTYuNTAzNzQgMzQ1LjM0OTA0LDEwMi4yMDQ1NSBDIDM0NS4zNDkwNCw4My4zMDY5NSAzNjEuOTk3MTcsODQuNDAzNTc3IDM1OC43NTgwNSw2OC43MzQ4NzkgQyAzNTYuNTIwNjEsNTcuOTExNjU2IDM1NC43Njk2Miw0OS4yMzE5OSAzNTMuNDY1MTYsMzYuMTQzODg5IEMgMzUyLjUzOTU5LDI2Ljg1NzMwNSAzNTIuMjQ0NTIsMTYuOTU5Mzk4IDM0Mi41OTg1NSwxNy4zNTczODIgQyAzMzEuMjY1MDUsMTcuODI0OTkyIDMyNi45NjU0OSwzNy43NzQxOSAzMDkuMzQ5MDQsMzkuMjA0NTQ5IEMgMjkxLjc2ODUxLDQwLjYzMTk5MSAyNzYuNzc4MzQsMjQuMjM4MDI4IDI2OS45NzQwNCwyNi41Nzk1NDkgQyAyNjMuMjI3MDksMjguOTAxMzM0IDI2NS4zNDkwNCw0Ny4yMDQ1NDkgMjY5LjM0OTA0LDYwLjIwNDU0OSBDIDI3NS42MzU4OCw4MC42MzY3NzEgMjg5LjM0OTA0LDEwNy4yMDQ1NSAyNjQuMzQ5MDQsMTExLjIwNDU1IEMgMjM5LjM0OTA0LDExNS4yMDQ1NSAxOTYuMzQ5MDQsMTE5LjIwNDU1IDE2NS4zNDkwNCwxNjAuMjA0NTUgQyAxMzQuMzQ5MDQsMjAxLjIwNDU1IDEzNS40OTM0MiwyNDkuMzIxMiAxMjMuMzQ5MDQsMjY0LjIwNDU1IEMgODIuNTkwNjk2LDMxNC4xNTUyOSA0MC44MjM5MTksMjkzLjY0NjI1IDQwLjgyMzkxOSwzMzUuMjA0NTUgQyA0MC44MjM5MTksMzUzLjgxMDE5IDcyLjM0OTA0NSwzNjcuMjA0NTUgNzcuMzQ5MDQ1LDM2MS4yMDQ1NSBDIDgyLjM0OTA0NSwzNTUuMjA0NTUgMzQuODYzNzY0LDMzNy4zMjU4NyA4Ny45OTU0OTIsMzE2LjIwNDU1IEMgMTMzLjM4NzExLDI5OC4xNjAxNCAxMzcuNDM5MTQsMjk0LjQ3NjYzIDE1MS4zNDkwNCwzMDcuMjA0NTUgeiBcXFwiIHN0eWxlPVxcXCJmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MXB4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjFcXFwiLz4gPC9zeW1ib2w+PHN5bWJvbCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNzkyIDE3OTJcXFwiIGlkPVxcXCJsZXBsYXllci1pY29uLWNvbW1lbnRpbmctb1xcXCI+PHRpdGxlPmNvbW1lbnRpbmctbzwvdGl0bGU+PHBhdGggZD1cXFwiTTY0MCA4OTZxMCA1My0zNy41IDkwLjV0LTkwLjUgMzcuNS05MC41LTM3LjUtMzcuNS05MC41IDM3LjUtOTAuNSA5MC41LTM3LjUgOTAuNSAzNy41IDM3LjUgOTAuNXptMzg0IDBxMCA1My0zNy41IDkwLjV0LTkwLjUgMzcuNS05MC41LTM3LjUtMzcuNS05MC41IDM3LjUtOTAuNSA5MC41LTM3LjUgOTAuNSAzNy41IDM3LjUgOTAuNXptMzg0IDBxMCA1My0zNy41IDkwLjV0LTkwLjUgMzcuNS05MC41LTM3LjUtMzcuNS05MC41IDM3LjUtOTAuNSA5MC41LTM3LjUgOTAuNSAzNy41IDM3LjUgOTAuNXptLTUxMi01MTJxLTIwNCAwLTM4MS41IDY5LjV0LTI4MiAxODcuNS0xMDQuNSAyNTVxMCAxMTIgNzEuNSAyMTMuNXQyMDEuNSAxNzUuNWw4NyA1MC0yNyA5NnEtMjQgOTEtNzAgMTcyIDE1Mi02MyAyNzUtMTcxbDQzLTM4IDU3IDZxNjkgOCAxMzAgOCAyMDQgMCAzODEuNS02OS41dDI4Mi0xODcuNSAxMDQuNS0yNTUtMTA0LjUtMjU1LTI4Mi0xODcuNS0zODEuNS02OS41em04OTYgNTEycTAgMTc0LTEyMCAzMjEuNXQtMzI2IDIzMy00NTAgODUuNXEtNzAgMC0xNDUtOC0xOTggMTc1LTQ2MCAyNDItNDkgMTQtMTE0IDIyaC01cS0xNSAwLTI3LTEwLjV0LTE2LTI3LjV2LTFxLTMtNC0uNS0xMnQyLTEwIDQuNS05LjVsNi05IDctOC41IDgtOXE3LTggMzEtMzQuNXQzNC41LTM4IDMxLTM5LjUgMzIuNS01MSAyNy01OSAyNi03NnEtMTU3LTg5LTI0Ny41LTIyMHQtOTAuNS0yODFxMC0xMzAgNzEtMjQ4LjV0MTkxLTIwNC41IDI4Ni0xMzYuNSAzNDgtNTAuNSAzNDggNTAuNSAyODYgMTM2LjUgMTkxIDIwNC41IDcxIDI0OC41elxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi1kb3dubG9hZFxcXCI+PHRpdGxlPmRvd25sb2FkPC90aXRsZT48cGF0aCBkPVxcXCJNMTM0NCAxMzQ0cTAtMjYtMTktNDV0LTQ1LTE5LTQ1IDE5LTE5IDQ1IDE5IDQ1IDQ1IDE5IDQ1LTE5IDE5LTQ1em0yNTYgMHEwLTI2LTE5LTQ1dC00NS0xOS00NSAxOS0xOSA0NSAxOSA0NSA0NSAxOSA0NS0xOSAxOS00NXptMTI4LTIyNHYzMjBxMCA0MC0yOCA2OHQtNjggMjhoLTE0NzJxLTQwIDAtNjgtMjh0LTI4LTY4di0zMjBxMC00MCAyOC02OHQ2OC0yOGg0NjVsMTM1IDEzNnE1OCA1NiAxMzYgNTZ0MTM2LTU2bDEzNi0xMzZoNDY0cTQwIDAgNjggMjh0MjggNjh6bS0zMjUtNTY5cTE3IDQxLTE0IDcwbC00NDggNDQ4cS0xOCAxOS00NSAxOXQtNDUtMTlsLTQ0OC00NDhxLTMxLTI5LTE0LTcwIDE3LTM5IDU5LTM5aDI1NnYtNDQ4cTAtMjYgMTktNDV0NDUtMTloMjU2cTI2IDAgNDUgMTl0MTkgNDV2NDQ4aDI1NnE0MiAwIDU5IDM5elxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi1lZGl0XFxcIj48dGl0bGU+ZWRpdDwvdGl0bGU+PHBhdGggZD1cXFwiTTg4OCAxMTg0bDExNi0xMTYtMTUyLTE1Mi0xMTYgMTE2djU2aDk2djk2aDU2em00NDAtNzIwcS0xNi0xNi0zMyAxbC0zNTAgMzUwcS0xNyAxNy0xIDMzdDMzLTFsMzUwLTM1MHExNy0xNyAxLTMzem04MCA1OTR2MTkwcTAgMTE5LTg0LjUgMjAzLjV0LTIwMy41IDg0LjVoLTgzMnEtMTE5IDAtMjAzLjUtODQuNXQtODQuNS0yMDMuNXYtODMycTAtMTE5IDg0LjUtMjAzLjV0MjAzLjUtODQuNWg4MzJxNjMgMCAxMTcgMjUgMTUgNyAxOCAyMyAzIDE3LTkgMjlsLTQ5IDQ5cS0xNCAxNC0zMiA4LTIzLTYtNDUtNmgtODMycS02NiAwLTExMyA0N3QtNDcgMTEzdjgzMnEwIDY2IDQ3IDExM3QxMTMgNDdoODMycTY2IDAgMTEzLTQ3dDQ3LTExM3YtMTI2cTAtMTMgOS0yMmw2NC02NHExNS0xNSAzNS03dDIwIDI5em0tOTYtNzM4bDI4OCAyODgtNjcyIDY3MmgtMjg4di0yODh6bTQ0NCAxMzJsLTkyIDkyLTI4OC0yODggOTItOTJxMjgtMjggNjgtMjh0NjggMjhsMTUyIDE1MnEyOCAyOCAyOCA2OHQtMjggNjh6XFxcIi8+PC9zeW1ib2w+PHN5bWJvbCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNzkyIDE3OTJcXFwiIGlkPVxcXCJsZXBsYXllci1pY29uLWZvcndhcmRcXFwiPjx0aXRsZT5mb3J3YXJkPC90aXRsZT48cGF0aCBkPVxcXCJNMTA5IDE2NTFxLTE5IDE5LTMyIDEzdC0xMy0zMnYtMTQ3MnEwLTI2IDEzLTMydDMyIDEzbDcxMCA3MTBxOCA4IDEzIDE5di03MTBxMC0yNiAxMy0zMnQzMiAxM2w3MTAgNzEwcTE5IDE5IDE5IDQ1dC0xOSA0NWwtNzEwIDcxMHEtMTkgMTktMzIgMTN0LTEzLTMydi03MTBxLTUgMTAtMTMgMTl6XFxcIi8+PC9zeW1ib2w+PHN5bWJvbCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNzkyIDE3OTJcXFwiIGlkPVxcXCJsZXBsYXllci1pY29uLWluZm9cXFwiPjx0aXRsZT5pbmZvPC90aXRsZT48cGF0aCBkPVxcXCJNMTIxNiAxMzQ0djEyOHEwIDI2LTE5IDQ1dC00NSAxOWgtNTEycS0yNiAwLTQ1LTE5dC0xOS00NXYtMTI4cTAtMjYgMTktNDV0NDUtMTloNjR2LTM4NGgtNjRxLTI2IDAtNDUtMTl0LTE5LTQ1di0xMjhxMC0yNiAxOS00NXQ0NS0xOWgzODRxMjYgMCA0NSAxOXQxOSA0NXY1NzZoNjRxMjYgMCA0NSAxOXQxOSA0NXptLTEyOC0xMTUydjE5MnEwIDI2LTE5IDQ1dC00NSAxOWgtMjU2cS0yNiAwLTQ1LTE5dC0xOS00NXYtMTkycTAtMjYgMTktNDV0NDUtMTloMjU2cTI2IDAgNDUgMTl0MTkgNDV6XFxcIi8+PC9zeW1ib2w+PHN5bWJvbCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNzkyIDE3OTJcXFwiIGlkPVxcXCJsZXBsYXllci1pY29uLWxpc3QtdWxcXFwiPjx0aXRsZT5saXN0LXVsPC90aXRsZT48cGF0aCBkPVxcXCJNMzg0IDE0MDhxMCA4MC01NiAxMzZ0LTEzNiA1Ni0xMzYtNTYtNTYtMTM2IDU2LTEzNiAxMzYtNTYgMTM2IDU2IDU2IDEzNnptMC01MTJxMCA4MC01NiAxMzZ0LTEzNiA1Ni0xMzYtNTYtNTYtMTM2IDU2LTEzNiAxMzYtNTYgMTM2IDU2IDU2IDEzNnptMTQwOCA0MTZ2MTkycTAgMTMtOS41IDIyLjV0LTIyLjUgOS41aC0xMjE2cS0xMyAwLTIyLjUtOS41dC05LjUtMjIuNXYtMTkycTAtMTMgOS41LTIyLjV0MjIuNS05LjVoMTIxNnExMyAwIDIyLjUgOS41dDkuNSAyMi41em0tMTQwOC05MjhxMCA4MC01NiAxMzZ0LTEzNiA1Ni0xMzYtNTYtNTYtMTM2IDU2LTEzNiAxMzYtNTYgMTM2IDU2IDU2IDEzNnptMTQwOCA0MTZ2MTkycTAgMTMtOS41IDIyLjV0LTIyLjUgOS41aC0xMjE2cS0xMyAwLTIyLjUtOS41dC05LjUtMjIuNXYtMTkycTAtMTMgOS41LTIyLjV0MjIuNS05LjVoMTIxNnExMyAwIDIyLjUgOS41dDkuNSAyMi41em0wLTUxMnYxOTJxMCAxMy05LjUgMjIuNXQtMjIuNSA5LjVoLTEyMTZxLTEzIDAtMjIuNS05LjV0LTkuNS0yMi41di0xOTJxMC0xMyA5LjUtMjIuNXQyMi41LTkuNWgxMjE2cTEzIDAgMjIuNSA5LjV0OS41IDIyLjV6XFxcIi8+PC9zeW1ib2w+PHN5bWJvbCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNzkyIDE3OTJcXFwiIGlkPVxcXCJsZXBsYXllci1pY29uLW1hZ2ljXFxcIj48dGl0bGU+bWFnaWM8L3RpdGxlPjxwYXRoIGQ9XFxcIk0xMjU0IDU4MWwyOTMtMjkzLTEwNy0xMDctMjkzIDI5M3ptNDQ3LTI5M3EwIDI3LTE4IDQ1bC0xMjg2IDEyODZxLTE4IDE4LTQ1IDE4dC00NS0xOGwtMTk4LTE5OHEtMTgtMTgtMTgtNDV0MTgtNDVsMTI4Ni0xMjg2cTE4LTE4IDQ1LTE4dDQ1IDE4bDE5OCAxOThxMTggMTggMTggNDV6bS0xMzUxLTE5MGw5OCAzMC05OCAzMC0zMCA5OC0zMC05OC05OC0zMCA5OC0zMCAzMC05OHptMzUwIDE2MmwxOTYgNjAtMTk2IDYwLTYwIDE5Ni02MC0xOTYtMTk2LTYwIDE5Ni02MCA2MC0xOTZ6bTkzMCA0NzhsOTggMzAtOTggMzAtMzAgOTgtMzAtOTgtOTgtMzAgOTgtMzAgMzAtOTh6bS02NDAtNjQwbDk4IDMwLTk4IDMwLTMwIDk4LTMwLTk4LTk4LTMwIDk4LTMwIDMwLTk4elxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi1wYXVzZVxcXCI+PHRpdGxlPnBhdXNlPC90aXRsZT48cGF0aCBkPVxcXCJNMTY2NCAxOTJ2MTQwOHEwIDI2LTE5IDQ1dC00NSAxOWgtNTEycS0yNiAwLTQ1LTE5dC0xOS00NXYtMTQwOHEwLTI2IDE5LTQ1dDQ1LTE5aDUxMnEyNiAwIDQ1IDE5dDE5IDQ1em0tODk2IDB2MTQwOHEwIDI2LTE5IDQ1dC00NSAxOWgtNTEycS0yNiAwLTQ1LTE5dC0xOS00NXYtMTQwOHEwLTI2IDE5LTQ1dDQ1LTE5aDUxMnEyNiAwIDQ1IDE5dDE5IDQ1elxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi1wbGFuZVxcXCI+PHRpdGxlPnBsYW5lPC90aXRsZT48cGF0aCBkPVxcXCJNMTU2OCAxNjBxNDQgNTIgMTIgMTQ4dC0xMDggMTcybC0xNjEgMTYxIDE2MCA2OTZxNSAxOS0xMiAzM2wtMTI4IDk2cS03IDYtMTkgNi00IDAtNy0xLTE1LTMtMjEtMTZsLTI3OS01MDgtMjU5IDI1OSA1MyAxOTRxNSAxNy04IDMxbC05NiA5NnEtOSA5LTIzIDloLTJxLTE1LTItMjQtMTNsLTE4OS0yNTItMjUyLTE4OXEtMTEtNy0xMy0yMy0xLTEzIDktMjVsOTYtOTdxOS05IDIzLTkgNiAwIDggMWwxOTQgNTMgMjU5LTI1OS01MDgtMjc5cS0xNC04LTE3LTI0LTItMTYgOS0yN2wxMjgtMTI4cTE0LTEzIDMwLThsNjY1IDE1OSAxNjAtMTYwcTc2LTc2IDE3Mi0xMDh0MTQ4IDEyelxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi1wbGF5XFxcIj48dGl0bGU+cGxheTwvdGl0bGU+PHBhdGggZD1cXFwiTTE1NzYgOTI3bC0xMzI4IDczOHEtMjMgMTMtMzkuNSAzdC0xNi41LTM2di0xNDcycTAtMjYgMTYuNS0zNnQzOS41IDNsMTMyOCA3MzhxMjMgMTMgMjMgMzF0LTIzIDMxelxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi1wbHVzXFxcIj48dGl0bGU+cGx1czwvdGl0bGU+PHBhdGggZD1cXFwiTTE2MDAgNzM2djE5MnEwIDQwLTI4IDY4dC02OCAyOGgtNDE2djQxNnEwIDQwLTI4IDY4dC02OCAyOGgtMTkycS00MCAwLTY4LTI4dC0yOC02OHYtNDE2aC00MTZxLTQwIDAtNjgtMjh0LTI4LTY4di0xOTJxMC00MCAyOC02OHQ2OC0yOGg0MTZ2LTQxNnEwLTQwIDI4LTY4dDY4LTI4aDE5MnE0MCAwIDY4IDI4dDI4IDY4djQxNmg0MTZxNDAgMCA2OCAyOHQyOCA2OHpcXFwiLz48L3N5bWJvbD48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDE3OTIgMTc5MlxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tcmVkb1xcXCI+PHRpdGxlPnJlZG88L3RpdGxlPjxwYXRoIGQ9XFxcIk0xNjY0IDI1NnY0NDhxMCAyNi0xOSA0NXQtNDUgMTloLTQ0OHEtNDIgMC01OS00MC0xNy0zOSAxNC02OWwxMzgtMTM4cS0xNDgtMTM3LTM0OS0xMzctMTA0IDAtMTk4LjUgNDAuNXQtMTYzLjUgMTA5LjUtMTA5LjUgMTYzLjUtNDAuNSAxOTguNSA0MC41IDE5OC41IDEwOS41IDE2My41IDE2My41IDEwOS41IDE5OC41IDQwLjVxMTE5IDAgMjI1LTUydDE3OS0xNDdxNy0xMCAyMy0xMiAxNCAwIDI1IDlsMTM3IDEzOHE5IDggOS41IDIwLjV0LTcuNSAyMi41cS0xMDkgMTMyLTI2NCAyMDQuNXQtMzI3IDcyLjVxLTE1NiAwLTI5OC02MXQtMjQ1LTE2NC0xNjQtMjQ1LTYxLTI5OCA2MS0yOTggMTY0LTI0NSAyNDUtMTY0IDI5OC02MXExNDcgMCAyODQuNSA1NS41dDI0NC41IDE1Ni41bDEzMC0xMjlxMjktMzEgNzAtMTQgMzkgMTcgMzkgNTl6XFxcIi8+PC9zeW1ib2w+PHN5bWJvbCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNzkyIDE3OTJcXFwiIGlkPVxcXCJsZXBsYXllci1pY29uLXJlZnJlc2hcXFwiPjx0aXRsZT5yZWZyZXNoPC90aXRsZT48cGF0aCBkPVxcXCJNMTYzOSAxMDU2cTAgNS0xIDctNjQgMjY4LTI2OCA0MzQuNXQtNDc4IDE2Ni41cS0xNDYgMC0yODIuNS01NXQtMjQzLjUtMTU3bC0xMjkgMTI5cS0xOSAxOS00NSAxOXQtNDUtMTktMTktNDV2LTQ0OHEwLTI2IDE5LTQ1dDQ1LTE5aDQ0OHEyNiAwIDQ1IDE5dDE5IDQ1LTE5IDQ1bC0xMzcgMTM3cTcxIDY2IDE2MSAxMDJ0MTg3IDM2cTEzNCAwIDI1MC02NXQxODYtMTc5cTExLTE3IDUzLTExNyA4LTIzIDMwLTIzaDE5MnExMyAwIDIyLjUgOS41dDkuNSAyMi41em0yNS04MDB2NDQ4cTAgMjYtMTkgNDV0LTQ1IDE5aC00NDhxLTI2IDAtNDUtMTl0LTE5LTQ1IDE5LTQ1bDEzOC0xMzhxLTE0OC0xMzctMzQ5LTEzNy0xMzQgMC0yNTAgNjV0LTE4NiAxNzlxLTExIDE3LTUzIDExNy04IDIzLTMwIDIzaC0xOTlxLTEzIDAtMjIuNS05LjV0LTkuNS0yMi41di03cTY1LTI2OCAyNzAtNDM0LjV0NDgwLTE2Ni41cTE0NiAwIDI4NCA1NS41dDI0NSAxNTYuNWwxMzAtMTI5cTE5LTE5IDQ1LTE5dDQ1IDE5IDE5IDQ1elxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi10cmFzaFxcXCI+PHRpdGxlPnRyYXNoPC90aXRsZT48cGF0aCBkPVxcXCJNNzA0IDEzNzZ2LTcwNHEwLTE0LTktMjN0LTIzLTloLTY0cS0xNCAwLTIzIDl0LTkgMjN2NzA0cTAgMTQgOSAyM3QyMyA5aDY0cTE0IDAgMjMtOXQ5LTIzem0yNTYgMHYtNzA0cTAtMTQtOS0yM3QtMjMtOWgtNjRxLTE0IDAtMjMgOXQtOSAyM3Y3MDRxMCAxNCA5IDIzdDIzIDloNjRxMTQgMCAyMy05dDktMjN6bTI1NiAwdi03MDRxMC0xNC05LTIzdC0yMy05aC02NHEtMTQgMC0yMyA5dC05IDIzdjcwNHEwIDE0IDkgMjN0MjMgOWg2NHExNCAwIDIzLTl0OS0yM3ptLTU0NC05OTJoNDQ4bC00OC0xMTdxLTctOS0xNy0xMWgtMzE3cS0xMCAyLTE3IDExem05MjggMzJ2NjRxMCAxNC05IDIzdC0yMyA5aC05NnY5NDhxMCA4My00NyAxNDMuNXQtMTEzIDYwLjVoLTgzMnEtNjYgMC0xMTMtNTguNXQtNDctMTQxLjV2LTk1MmgtOTZxLTE0IDAtMjMtOXQtOS0yM3YtNjRxMC0xNCA5LTIzdDIzLTloMzA5bDcwLTE2N3ExNS0zNyA1NC02M3Q3OS0yNmgzMjBxNDAgMCA3OSAyNnQ1NCA2M2w3MCAxNjdoMzA5cTE0IDAgMjMgOXQ5IDIzelxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi11bmRvXFxcIj48dGl0bGU+dW5kbzwvdGl0bGU+PHBhdGggZD1cXFwiTTE2NjQgODk2cTAgMTU2LTYxIDI5OHQtMTY0IDI0NS0yNDUgMTY0LTI5OCA2MXEtMTcyIDAtMzI3LTcyLjV0LTI2NC0yMDQuNXEtNy0xMC02LjUtMjIuNXQ4LjUtMjAuNWwxMzctMTM4cTEwLTkgMjUtOSAxNiAyIDIzIDEyIDczIDk1IDE3OSAxNDd0MjI1IDUycTEwNCAwIDE5OC41LTQwLjV0MTYzLjUtMTA5LjUgMTA5LjUtMTYzLjUgNDAuNS0xOTguNS00MC41LTE5OC41LTEwOS41LTE2My41LTE2My41LTEwOS41LTE5OC41LTQwLjVxLTk4IDAtMTg4IDM1LjV0LTE2MCAxMDEuNWwxMzcgMTM4cTMxIDMwIDE0IDY5LTE3IDQwLTU5IDQwaC00NDhxLTI2IDAtNDUtMTl0LTE5LTQ1di00NDhxMC00MiA0MC01OSAzOS0xNyA2OSAxNGwxMzAgMTI5cTEwNy0xMDEgMjQ0LjUtMTU2LjV0Mjg0LjUtNTUuNXExNTYgMCAyOTggNjF0MjQ1IDE2NCAxNjQgMjQ1IDYxIDI5OHpcXFwiLz48L3N5bWJvbD48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDE3OTIgMTc5MlxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tdm9sdW1lLWRvd25cXFwiPjx0aXRsZT52b2x1bWUtZG93bjwvdGl0bGU+PHBhdGggZD1cXFwiTTEwODggMzUydjEwODhxMCAyNi0xOSA0NXQtNDUgMTktNDUtMTlsLTMzMy0zMzNoLTI2MnEtMjYgMC00NS0xOXQtMTktNDV2LTM4NHEwLTI2IDE5LTQ1dDQ1LTE5aDI2MmwzMzMtMzMzcTE5LTE5IDQ1LTE5dDQ1IDE5IDE5IDQ1em0zODQgNTQ0cTAgNzYtNDIuNSAxNDEuNXQtMTEyLjUgOTMuNXEtMTAgNS0yNSA1LTI2IDAtNDUtMTguNXQtMTktNDUuNXEwLTIxIDEyLTM1LjV0MjktMjUgMzQtMjMgMjktMzUuNSAxMi01Ny0xMi01Ny0yOS0zNS41LTM0LTIzLTI5LTI1LTEyLTM1LjVxMC0yNyAxOS00NS41dDQ1LTE4LjVxMTUgMCAyNSA1IDcwIDI3IDExMi41IDkzdDQyLjUgMTQyelxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi12b2x1bWUtb2ZmXFxcIj48dGl0bGU+dm9sdW1lLW9mZjwvdGl0bGU+PHBhdGggZD1cXFwiTTEyODAgMzUydjEwODhxMCAyNi0xOSA0NXQtNDUgMTktNDUtMTlsLTMzMy0zMzNoLTI2MnEtMjYgMC00NS0xOXQtMTktNDV2LTM4NHEwLTI2IDE5LTQ1dDQ1LTE5aDI2MmwzMzMtMzMzcTE5LTE5IDQ1LTE5dDQ1IDE5IDE5IDQ1elxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi12b2x1bWUtdXBcXFwiPjx0aXRsZT52b2x1bWUtdXA8L3RpdGxlPjxwYXRoIGQ9XFxcIk04MzIgMzUydjEwODhxMCAyNi0xOSA0NXQtNDUgMTktNDUtMTlsLTMzMy0zMzNoLTI2MnEtMjYgMC00NS0xOXQtMTktNDV2LTM4NHEwLTI2IDE5LTQ1dDQ1LTE5aDI2MmwzMzMtMzMzcTE5LTE5IDQ1LTE5dDQ1IDE5IDE5IDQ1em0zODQgNTQ0cTAgNzYtNDIuNSAxNDEuNXQtMTEyLjUgOTMuNXEtMTAgNS0yNSA1LTI2IDAtNDUtMTguNXQtMTktNDUuNXEwLTIxIDEyLTM1LjV0MjktMjUgMzQtMjMgMjktMzUuNSAxMi01Ny0xMi01Ny0yOS0zNS41LTM0LTIzLTI5LTI1LTEyLTM1LjVxMC0yNyAxOS00NS41dDQ1LTE4LjVxMTUgMCAyNSA1IDcwIDI3IDExMi41IDkzdDQyLjUgMTQyem0yNTYgMHEwIDE1My04NSAyODIuNXQtMjI1IDE4OC41cS0xMyA1LTI1IDUtMjcgMC00Ni0xOXQtMTktNDVxMC0zOSAzOS01OSA1Ni0yOSA3Ni00NCA3NC01NCAxMTUuNS0xMzUuNXQ0MS41LTE3My41LTQxLjUtMTczLjUtMTE1LjUtMTM1LjVxLTIwLTE1LTc2LTQ0LTM5LTIwLTM5LTU5IDAtMjYgMTktNDV0NDUtMTlxMTMgMCAyNiA1IDE0MCA1OSAyMjUgMTg4LjV0ODUgMjgyLjV6bTI1NiAwcTAgMjMwLTEyNyA0MjIuNXQtMzM4IDI4My41cS0xMyA1LTI2IDUtMjYgMC00NS0xOXQtMTktNDVxMC0zNiAzOS01OSA3LTQgMjIuNS0xMC41dDIyLjUtMTAuNXE0Ni0yNSA4Mi01MSAxMjMtOTEgMTkyLTIyN3Q2OS0yODktNjktMjg5LTE5Mi0yMjdxLTM2LTI2LTgyLTUxLTctNC0yMi41LTEwLjV0LTIyLjUtMTAuNXEtMzktMjMtMzktNTkgMC0yNiAxOS00NXQ0NS0xOXExMyAwIDI2IDUgMjExIDkxIDMzOCAyODMuNXQxMjcgNDIyLjV6XFxcIi8+PC9zeW1ib2w+PC9zdmc+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Rpc3Qvc3ZnL3N2Zy1kZWZzLnN2Z1xuLy8gbW9kdWxlIGlkID0gNzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGNvbnN0IHByZXNldCA9IHtcblx0b3B0aW9ucyA6IHtcblx0XHR3aWR0aCA6ICcxMDAlJyxcblx0XHRjb250cm9scyA6IHtcblx0XHRcdGNvbW1vbiA6IFtcblx0XHRcdFx0WydwbGF5JywgJ3ZvbHVtZScsICdkaXZpZGVyJywgJ3RpbWVsaW5lJywgJ2RpdmlkZXInLCAnZnVsbHNjcmVlbiddLFxuXHRcdFx0XHRbJ3JhdGUnLCAnZGl2aWRlcicsICdiYWNrd2FyZCcsICdkaXZpZGVyJywgJ3NvdXJjZScsICdkaXZpZGVyJywgJ2Rvd25sb2FkJ11cblx0XHRcdF0sXG5cdFx0XHRmdWxsc2NyZWVuIDogW1xuXHRcdFx0XHRbJ3BsYXknLCAndm9sdW1lJywgJ2RpdmlkZXInLCAndGltZWxpbmUnLCAnZGl2aWRlcicsICdyYXRlJywgJ2RpdmlkZXInLCAnYmFja3dhcmQnLCAnZGl2aWRlcicsICdzb3VyY2UnLCAnZGl2aWRlcicsICdkb3dubG9hZCcsICdkaXZpZGVyJywgJ2Z1bGxzY3JlZW4nXVxuXHRcdFx0XVxuXHRcdH1cblx0fSxcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9wcmVzZXRzL3Zwcy5qcyIsImNvbnN0IGNvbnRyb2xzID0gWydwbGF5JywgJ3ZvbHVtZScsICdkaXZpZGVyJywgJ3RpbWVsaW5lJywgJ2RpdmlkZXInLCAncmF0ZScsICdkb3dubG9hZCcsICdmdWxsc2NyZWVuJ107XG5cbmV4cG9ydCBjb25zdCBwcmVzZXQgPSB7XG5cdG9wdGlvbnMgOiB7XG5cdFx0Y29udHJvbHMgOiB7XG5cdFx0XHRjb21tb24gOiBbXG5cdFx0XHRcdGNvbnRyb2xzLFxuXHRcdFx0XHRbXVxuXHRcdFx0XSxcblx0XHRcdGZ1bGxzY3JlZW4gOiBbXG5cdFx0XHRcdGNvbnRyb2xzXG5cdFx0XHRdXG5cdFx0fVxuXHR9LFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL3ByZXNldHMvc2ltcGxlLmpzIiwiZXhwb3J0IGNvbnN0IHByZXNldCA9IHtcblx0b3B0aW9ucyA6IHtcblx0XHR3aWR0aCA6ICcxMDAlJyxcblx0XHRjb250cm9scyA6IHtcblx0XHRcdGNvbW1vbiA6IFtcblx0XHRcdFx0WydwbGF5JywgJ3ZvbHVtZScsICd0aW1lbGluZScsICdyYXRlJywgJ3NvdXJjZScsICdkaXZpZGVyJywgJ2Rvd25sb2FkJywgJ2Z1bGxzY3JlZW4nXSxcblx0XHRcdFx0W11cblx0XHRcdF0sXG5cdFx0XHRmdWxsc2NyZWVuIDogW1xuXHRcdFx0XHRbJ3BsYXknLCAndm9sdW1lJywgJ3RpbWVsaW5lJywgJ3JhdGUnLCAnc291cmNlJywgJ2RpdmlkZXInLCAnZG93bmxvYWQnLCAnZnVsbHNjcmVlbiddLFxuXHRcdFx0XVxuXHRcdH1cblx0fSxcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9wcmVzZXRzL3Ntcy5qcyIsImV4cG9ydCBjb25zdCBwcmVzZXQgPSB7XG5cdG9wdGlvbnMgOiB7XG5cdFx0d2lkdGggOiAnMTAwJScsXG5cdFx0Y29udHJvbHMgOiB7XG5cdFx0XHRjb21tb24gOiBbXG5cdFx0XHRcdFsncGxheScsICd2b2x1bWUnLCAndGltZWxpbmUnLCAncmF0ZScsICdzb3VyY2UnLCAnZGl2aWRlcicsICdmdWxsc2NyZWVuJ10sXG5cdFx0XHRcdFtdXG5cdFx0XHRdLFxuXHRcdFx0ZnVsbHNjcmVlbiA6IFtcblx0XHRcdFx0WydwbGF5JywgJ3ZvbHVtZScsICd0aW1lbGluZScsICdyYXRlJywgJ3NvdXJjZScsICdkaXZpZGVyJywgJ2Z1bGxzY3JlZW4nXSxcblx0XHRcdF1cblx0XHR9XG5cdH0sXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvcHJlc2V0cy9jb21wcmVzc2VkLmpzIiwiZXhwb3J0IGNvbnN0IHByZXNldCA9IHtcblx0b3B0aW9ucyA6IHtcblx0XHR3aWR0aCA6ICcxMDAlJyxcblxuXHRcdGNvbnRyb2xzT3B0aW9ucyA6IHtcblx0XHRcdGNvbW1vbiA6IHtcblx0XHRcdFx0YWxpZ24gOiBbJ2p1c3RpZnknXVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Y29udHJvbHMgOiB7XG5cdFx0XHRjb21tb24gOiBbXG5cdFx0XHRcdFsncGxheScsICd0aW1lbGluZScsICdyYXRlJywgJ3ZvbHVtZScsICdzb3VyY2UnLCAnZnVsbHNjcmVlbiddLFxuXHRcdFx0XSxcblx0XHRcdGZ1bGxzY3JlZW4gOiBbXG5cdFx0XHRcdFsncGxheScsICd0aW1lbGluZScsICdyYXRlJywgJ3ZvbHVtZScsICdzb3VyY2UnLCAnZnVsbHNjcmVlbiddXG5cdFx0XHRdXG5cdFx0fVxuXHR9LFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL3ByZXNldHMvMjAzNS5qcyJdLCJzb3VyY2VSb290IjoiIn0=