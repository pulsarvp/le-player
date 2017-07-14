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

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _jquery = __webpack_require__(1);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _Control = __webpack_require__(2);
	
	var _Control2 = _interopRequireDefault(_Control);
	
	var _Component2 = __webpack_require__(3);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	var _PlayButton = __webpack_require__(5);
	
	var _PlayButton2 = _interopRequireDefault(_PlayButton);
	
	var _SplashIcon = __webpack_require__(7);
	
	var _SplashIcon2 = _interopRequireDefault(_SplashIcon);
	
	var _Icon = __webpack_require__(4);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _Time = __webpack_require__(8);
	
	var _Time2 = _interopRequireDefault(_Time);
	
	var _ControlCollection = __webpack_require__(9);
	
	var _ControlCollection2 = _interopRequireDefault(_ControlCollection);
	
	var _Sections = __webpack_require__(10);
	
	var _Sections2 = _interopRequireDefault(_Sections);
	
	var _ErrorDisplay = __webpack_require__(11);
	
	var _ErrorDisplay2 = _interopRequireDefault(_ErrorDisplay);
	
	var _Poster = __webpack_require__(12);
	
	var _Poster2 = _interopRequireDefault(_Poster);
	
	var _FullscreenApi = __webpack_require__(13);
	
	var _FullscreenApi2 = _interopRequireDefault(_FullscreenApi);
	
	var _utils = __webpack_require__(6);
	
	var _browser = __webpack_require__(14);
	
	var _MediaError = __webpack_require__(15);
	
	var _MediaError2 = _interopRequireDefault(_MediaError);
	
	__webpack_require__(16);
	
	__webpack_require__(17);
	
	__webpack_require__(19);
	
	__webpack_require__(23);
	
	__webpack_require__(25);
	
	__webpack_require__(26);
	
	__webpack_require__(28);
	
	__webpack_require__(29);
	
	__webpack_require__(31);
	
	__webpack_require__(32);
	
	__webpack_require__(33);
	
	__webpack_require__(34);
	
	__webpack_require__(35);
	
	__webpack_require__(37);
	
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
			mini: [['play', 'volume', 'divider', 'fullscreen', 'divider', 'timeinfo']]
		},
		controlsOptions: {
	
			common: {
				align: ['justify', 'left']
			},
	
			fullscreen: {
				align: 'justify'
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
				_this.sections = data.sectionsComponent;
	
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
			'qualitychange'].forEach(function (eventName) {
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
	
						var sectionsComponent = new _Sections2.default(_this4, {
							items: sections,
							fullscreenOnly: isSectionOutside,
							hideScroll: true
						});
	
						_this4.innerElement.append(sectionsComponent.element);
	
						if (isSectionOutside) {
							var outsideSections = new _Sections2.default(_this4, {
								items: sections
							});
							_this4.sectionsContainer.append(outsideSections.element);
						}
						dfd.resolve({ sectionsComponent: sectionsComponent, items: sections });
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
				this._dblclickTimeout = setTimeout(function () {
					_this7.video.element.focus();
					_this7.togglePlay();
				}, 300);
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
					this.focus();
				} else {
					this.view = 'common';
	
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
	
	Player._loadSVGSprite = function (svg) {
		var hiddenElement = (0, _jquery2.default)('<div/>').hide();
		(0, _jquery2.default)('body').prepend(hiddenElement.append(svg));
		return hiddenElement;
	};
	
	Player.defaultSprite = __webpack_require__(64);
	
	/* global VERSION */
	Player.version = ("0.3.4");
	
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
	Player.preset('sms', __webpack_require__(66).preset);
	Player.preset('compressed', __webpack_require__(67).preset);
	Player.preset('youtube', __webpack_require__(68).preset);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = $;

/***/ }),
/* 2 */
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
	
	var _jquery = __webpack_require__(1);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _Component2 = __webpack_require__(3);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	var _Icon = __webpack_require__(4);
	
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
	
			_this.disable = _this.options.disable != null ? _this.options.disable : true;
	
			_this.player.on('inited', function (e) {
				_this.disable = _this.options.disable != null ? _this.options.disable : false;
			});
	
			_this.element.on({
				click: _this._onClick.bind(_this),
				leplayer_control_click: _this.onClick.bind(_this)
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
					role: 'button',
					title: this.options.title
				};
				this.element = (0, _jquery2.default)('<div />').addClass(this.buildCSSClass()).append(this.icon && this.icon.element).attr(attrs);
	
				return this.element;
			}
	
			/**
	   * @override
	   */
	
		}, {
			key: 'buildCSSClass',
			value: function buildCSSClass() {
				return 'control ' + this.options.className + ' ' + _get(Control.prototype.__proto__ || Object.getPrototypeOf(Control.prototype), 'buildCSSClass', this).call(this);
			}
		}, {
			key: '_onClick',
			value: function _onClick(e) {
				if (this.disable) {
					return false;
				}
				this.element.trigger('leplayer_control_click');
				this.player.trigger('controlclick', { control: this });
			}
	
			/**
	   *
	   * On click event handler
	   * @abstact
	   */
	
		}, {
			key: 'onClick',
			value: function onClick(e) {
				e.preventDefault();
				if (typeof this.options.onClick === 'function') {
					this.options.onClick.call(this, arguments);
				}
			}
		}, {
			key: 'onPlayerInited',
			value: function onPlayerInited(e, data) {}
		}, {
			key: 'disable',
			set: function set(value) {
				this._disable = value;
				this.element.toggleClass('disabled', value);
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file Component.js
	 */
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _jquery = __webpack_require__(1);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
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
			value: function on(eventName) {
				var _element2;
	
				for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
					args[_key2 - 1] = arguments[_key2];
				}
	
				(_element2 = this.element).on.apply(_element2, ['leplayer_' + eventName].concat(args));
				return this;
			}
		}, {
			key: 'one',
			value: function one(eventName) {
				var _element3;
	
				for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
					args[_key3 - 1] = arguments[_key3];
				}
	
				(_element3 = this.element).one.apply(_element3, ['leplayer_' + eventName].concat(args));
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
/* 4 */
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
	
	var _jquery = __webpack_require__(1);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _Component2 = __webpack_require__(3);
	
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
/* 5 */
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
	
	var _Control2 = __webpack_require__(2);
	
	var _Control3 = _interopRequireDefault(_Control2);
	
	var _Component = __webpack_require__(3);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	var _Icon = __webpack_require__(4);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _utils = __webpack_require__(6);
	
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
	
			var _this = _possibleConstructorReturn(this, (PlayButton.__proto__ || Object.getPrototypeOf(PlayButton)).call(this, player, options));
	
			_this.element.on('dblclick', _this._onDbclick.bind(_this));
			return _this;
		}
	
		_createClass(PlayButton, [{
			key: 'createElement',
			value: function createElement() {
				var inner = (0, _utils.createEl)('div', {
					className: 'leplayer-play-button__button'
				}).append(new _Icon2.default(this.player, { iconName: 'play' }).element);
	
				this.element = (0, _utils.createEl)('div', {
					className: this.buildCSSClass
				}).append(inner);
	
				return this.element;
			}
		}, {
			key: 'onClick',
			value: function onClick(e) {
				_get(PlayButton.prototype.__proto__ || Object.getPrototypeOf(PlayButton.prototype), 'onClick', this).call(this, e);
				this.player.trigger('click');
			}
		}, {
			key: '_onDbclick',
			value: function _onDbclick() {
				this.player.trigger('dblclick');
			}
	
			/**
	   * @override
	   */
	
		}, {
			key: 'buildCSSClass',
			value: function buildCSSClass() {
				return 'leplayer-play-button';
			}
		}]);
	
		return PlayButton;
	}(_Control3.default);
	
	_Component2.default.registerComponent('PlayButton', PlayButton);
	_Control3.default.registerControl('play button', PlayButton);
	exports.default = PlayButton;

/***/ }),
/* 6 */
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
	exports.noop = noop;
	
	var _jquery = __webpack_require__(1);
	
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file SplashIcon.js
	 */
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _jquery = __webpack_require__(1);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _Component2 = __webpack_require__(3);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	var _Icon = __webpack_require__(4);
	
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file Time.js
	 */
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _jquery = __webpack_require__(1);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _Component2 = __webpack_require__(3);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	var _utils = __webpack_require__(6);
	
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
/* 9 */
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
	
	var _jquery = __webpack_require__(1);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _Component2 = __webpack_require__(3);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	var _Control = __webpack_require__(2);
	
	var _Control2 = _interopRequireDefault(_Control);
	
	var _utils = __webpack_require__(6);
	
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
	
			var name = options.name;
	
			var playerOptions = {
				controls: player.options.controls[name]
			};
	
			if (player.options.controlsOptions[name]) {
				playerOptions['align'] = player.options.controlsOptions[name].align;
				playerOptions['controlsOptions'] = player.options.controlsOptions[name].controls;
			}
	
			options = _jquery2.default.extend({}, {
				controls: [],
				controlsOptions: {},
				align: 'left'
			}, playerOptions, options);
	
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
	
				var _options = this.options,
				    name = _options.name,
				    controls = _options.controls,
				    align = _options.align;
	
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file Sections.js
	 */
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _jquery = __webpack_require__(1);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _Component2 = __webpack_require__(3);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	var _utils = __webpack_require__(6);
	
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
	
			_this.player.on('sectionstoggle', _this._onSectionsToggle.bind(_this));
	
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
			key: '_onSectionsToggle',
			value: function _onSectionsToggle(e, data) {
				if (this.element.hasClass('leplayer-sections--hidden') && data.checked) {
					this.element.removeClass('leplayer-sections--hidden');
				} else if (!data.checked) {
					this.element.addClass('leplayer-sections--hidden');
				}
			}
	
			/**
	   * Create HTML of section by data and index section
	   *
	   * @returns {String} HTML
	   */
	
		}, {
			key: 'createSection',
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
		}]);
	
		return Sections;
	}(_Component3.default);
	
	_Component3.default.registerComponent('Sections', Sections);
	exports.default = Sections;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file ErrorDisplay.js
	 */
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _jquery = __webpack_require__(1);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _Component2 = __webpack_require__(3);
	
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file ErrorDisplay.js
	 */
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _jquery = __webpack_require__(1);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _Component2 = __webpack_require__(3);
	
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
/* 13 */
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
/* 14 */
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

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _jquery = __webpack_require__(1);
	
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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file PlayControl.js
	 */
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _jquery = __webpack_require__(1);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _Component = __webpack_require__(3);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	var _Control2 = __webpack_require__(2);
	
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
	
			_this.player.on('play', _this.showPause.bind(_this));
			_this.player.on('pause', _this.showPlay.bind(_this));
			_this.player.on('ended', _this.showReplay.bind(_this));
	
			_this.player.on('seeking play', _this.removeReplay.bind(_this));
			return _this;
		}
	
		/**
	  * Pause the video
	  */
	
	
		_createClass(PlayControl, [{
			key: 'showPlay',
			value: function showPlay() {
				this.icon.iconName = 'play';
				this.element.attr('title', this.options.title);
			}
	
			/**
	   * Play the video
	   */
	
		}, {
			key: 'showPause',
			value: function showPause() {
				this.icon.iconName = 'pause';
				this.element.attr('title', 'Поставить на паузу');
			}
		}, {
			key: 'showReplay',
			value: function showReplay() {
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
				//super.onClick(e);
				this.player.video.togglePlay();
			}
		}]);
	
		return PlayControl;
	}(_Control3.default);
	
	_Component2.default.registerComponent('PlayControl', PlayControl);
	_Control3.default.registerControl('play', PlayControl);
	exports.default = PlayControl;

/***/ }),
/* 17 */
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
	
	var _jquery = __webpack_require__(1);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _Component = __webpack_require__(3);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	var _Control = __webpack_require__(2);
	
	var _Control2 = _interopRequireDefault(_Control);
	
	var _ControlDropdown2 = __webpack_require__(18);
	
	var _ControlDropdown3 = _interopRequireDefault(_ControlDropdown2);
	
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
/* 18 */
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
	
	var _jquery = __webpack_require__(1);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _Control2 = __webpack_require__(2);
	
	var _Control3 = _interopRequireDefault(_Control2);
	
	var _Component = __webpack_require__(3);
	
	var _Component2 = _interopRequireDefault(_Component);
	
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
	
			var _this = _possibleConstructorReturn(this, (ControlDropdown.__proto__ || Object.getPrototypeOf(ControlDropdown)).call(this, player, options));
	
			_this.element.on('mouseenter', function () {
				return !_this.disable && _this.dropdownContent.show();
			});
			_this.element.on('mouseleave', function () {
				return _this.dropdownContent.hide();
			});
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
		}, {
			key: '_onClick',
			value: function _onClick(e) {
				if ((0, _jquery2.default)(e.target).closest(this.dropdownContent).length > 0) {
					return;
				}
	
				_get(ControlDropdown.prototype.__proto__ || Object.getPrototypeOf(ControlDropdown.prototype), '_onClick', this).call(this, e);
			}
		}]);
	
		return ControlDropdown;
	}(_Control3.default);
	
	_Component2.default.registerComponent('ControlDropdown', ControlDropdown);
	_Control3.default.registerControl('dropdown', ControlDropdown);
	exports.default = ControlDropdown;

/***/ }),
/* 19 */
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
	
	var _jquery = __webpack_require__(1);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _Component = __webpack_require__(3);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	var _Control2 = __webpack_require__(2);
	
	var _Control3 = _interopRequireDefault(_Control2);
	
	var _ControlText = __webpack_require__(20);
	
	var _ControlText2 = _interopRequireDefault(_ControlText);
	
	var _BufferedRanges = __webpack_require__(21);
	
	var _BufferedRanges2 = _interopRequireDefault(_BufferedRanges);
	
	var _Marker = __webpack_require__(22);
	
	var _Marker2 = _interopRequireDefault(_Marker);
	
	var _utils = __webpack_require__(6);
	
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
				className: 'timeline timeline-container'
			}, options);
	
			var _this = _possibleConstructorReturn(this, (TimelineControl.__proto__ || Object.getPrototypeOf(TimelineControl)).call(this, player, options));
	
			_this.marker.element.on('leplayer_mousemove', _this._onMarkerMousemove.bind(_this));
	
			_this.marker.element.on('leplayer_mousedown', _this._onMarkerMousedown.bind(_this));
	
			_this.player.on('sectionsinit', _this.onSectionsInit.bind(_this));
	
			_this.player.on('timeupdate', _this._onTimeUpdate.bind(_this));
	
			_this.player.on('timeupdateload', _this._onTimeUpdate.bind(_this));
	
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
					video.currentTime = video.duration * p;
				}
			}
		}, {
			key: '_onTimeUpdate',
			value: function _onTimeUpdate(e, data) {
				var duration = this.player.video.duration;
				var time = this.player.currentTime;
				this.hardMove(time / duration);
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
	
				this.line = (0, _jquery2.default)('<div />').addClass('timeline').append(this.marker.element).append(this.markerShadow.element).append(this.playedRanges).append(this.bufferedRanges).on({
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
	
					touchmove: function touchmove(e) {}
				});
	
				this.element.addClass('timeline-container').append((0, _jquery2.default)('<div />').addClass('timeline-subcontainer').append(this.currentTime.element).append(this.line).append(this.totalTime.element));
			}
	
			/**
	   * @override
	   */
	
		}, {
			key: '_onClick',
			value: function _onClick(e) {
				e.preventDefault();
			}
		}, {
			key: '_onLineClick',
			value: function _onLineClick(e) {
				if (e.which !== 1) return;
				if (this.drag) return;
				var video = this.player.video;
				this.hardMove(this.getPosition(e.pageX));
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
			key: 'hardMove',
			value: function hardMove(percent) {
				var currentTime = this.player.video.duration * percent;
				if (isNaN(currentTime)) return;
				percent = percent * 100;
				this.marker.element.css('left', percent + '%');
				this.playedRanges.css('width', percent + '%');
				this.currentTime.text = (0, _utils.secondsToTime)(currentTime);
			}
	
			/**
	   * @deprecated
	   */
	
		}, {
			key: 'move',
			value: function move() {
				var video = this.player.video;
				var percent = (video.currentTime / video.duration * 100).toFixed(2);
				var currentTime = video.currentTime;
				if (isNaN(currentTime)) return;
				this.marker.element.css('left', percent + '%');
				this.playedRanges.css('width', percent + '%');
				this.currentTime.text = (0, _utils.secondsToTime)(currentTime);
			}
		}, {
			key: 'updateLabels',
			value: function updateLabels() {
				var video = this.player.video;
				this.totalTime.text = (0, _utils.secondsToTime)(0, Math.floor(video.duration / 3600) > 0);
				var width = this.totalTime.element.width();
	
				this.totalTime.text = (0, _utils.secondsToTime)(video.duration);
				this.currentTime.text = (0, _utils.secondsToTime)(video.currentTime || 0);
				this.currentTime.element.css({
					width: width
				});
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
/* 20 */
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
	
	var _jquery = __webpack_require__(1);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _Control2 = __webpack_require__(2);
	
	var _Control3 = _interopRequireDefault(_Control2);
	
	var _Component = __webpack_require__(3);
	
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
				className: ''
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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file BufferedRanges.js
	 */
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _utils = __webpack_require__(6);
	
	var _Component2 = __webpack_require__(3);
	
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
	
				if (duration > 0) {
					this.range.css({
						width: (0, _utils.percentify)(end, duration) * 100 + '%'
					});
				}
			}
		}]);
	
		return BufferedRanges;
	}(_Component3.default);
	
	_Component3.default.registerComponent('BufferedRanges', BufferedRanges);
	exports.default = BufferedRanges;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _jquery = __webpack_require__(1);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _Component2 = __webpack_require__(3);
	
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
/* 23 */
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
	
	var _jquery = __webpack_require__(1);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _Component = __webpack_require__(3);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	var _Control = __webpack_require__(2);
	
	var _Control2 = _interopRequireDefault(_Control);
	
	var _ControlCheckbox2 = __webpack_require__(24);
	
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
			return _this;
		}
	
		_createClass(SectionControl, [{
			key: 'onChecked',
			value: function onChecked(e, data) {
				_get(SectionControl.prototype.__proto__ || Object.getPrototypeOf(SectionControl.prototype), 'onChecked', this).call(this, e);
				this.player.trigger('sectionstoggle', {
					checked: data.checked,
					view: this.player.view
				});
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
/* 24 */
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
	
	var _Control2 = __webpack_require__(2);
	
	var _Control3 = _interopRequireDefault(_Control2);
	
	var _Component = __webpack_require__(3);
	
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
/* 25 */
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
	
	var _jquery = __webpack_require__(1);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _Component = __webpack_require__(3);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	var _Control2 = __webpack_require__(2);
	
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
/* 26 */
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
	
	var _jquery = __webpack_require__(1);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _Component = __webpack_require__(3);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	var _Control2 = __webpack_require__(2);
	
	var _Control3 = _interopRequireDefault(_Control2);
	
	var _ControlText = __webpack_require__(20);
	
	var _ControlText2 = _interopRequireDefault(_ControlText);
	
	var _cookie = __webpack_require__(27);
	
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
				className: 'control-container'
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
			key: '_onClick',
			value: function _onClick(e) {
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
/* 27 */
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
/* 28 */
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
	
	var _jquery = __webpack_require__(1);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _Component = __webpack_require__(3);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	var _Control2 = __webpack_require__(2);
	
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
				title: '\u041E\u0442\u043C\u043E\u0442\u0430\u0442\u044C \u043D\u0430\u0437\u0430\u0434 \u043D\u0430 ' + player.options.playback.step.medium + ' \u0441\u0435\u043A\u0443\u043D\u0434'
			}, options);
			return _possibleConstructorReturn(this, (BackwardControl.__proto__ || Object.getPrototypeOf(BackwardControl)).call(this, player, options));
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
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file SourceControl.js
	 */
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _jquery = __webpack_require__(1);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _Component = __webpack_require__(3);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	var _Control = __webpack_require__(2);
	
	var _Control2 = _interopRequireDefault(_Control);
	
	var _ControlContainer2 = __webpack_require__(30);
	
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
			key: 'update',
			value: function update() {
				var _this2 = this;
	
				var video = this.player.video;
				var qualityLevels = video.getAvailableQualityLevels();
				var currentQuality = video.playbackQuality;
	
				if (qualityLevels.length === 0) {
					this.disable = true;
					return;
				}
	
				this.list = [];
				this.dropdownContent.empty();
	
				qualityLevels.forEach(function (item) {
					var elem = _this2.addItem(item.title, item);
					if (currentQuality.name === item.name) {
						_this2.active = elem;
					}
				});
				this.disable = false;
			}
		}]);
	
		return SourceControl;
	}(_ControlContainer3.default);
	
	_Component2.default.registerComponent('SourceControl', SourceControl);
	_Control2.default.registerControl('source', SourceControl);
	exports.default = SourceControl;

/***/ }),
/* 30 */
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
	
	var _jquery = __webpack_require__(1);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _Component = __webpack_require__(3);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	var _Control = __webpack_require__(2);
	
	var _Control2 = _interopRequireDefault(_Control);
	
	var _ControlDropdown2 = __webpack_require__(18);
	
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
	
		function ControlContainer(player, options) {
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
				var item = (0, _jquery2.default)('<div />').addClass('control-container__item').data(data).on('click', this.onItemClick.bind(this)).append(content);
	
				this.list.push(item);
	
				this.dropdownContent.append(item);
	
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
			key: 'active',
			get: function get() {
				var _this2 = this;
	
				if (this._active && this._active.length > 0) {
					return this._active;
				}
				this.list.forEach(function (item) {
					if (item.hasClass('control-container__item--active')) {
						_this2._active = item;
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
				return this._active;
			}
		}]);
	
		return ControlContainer;
	}(_ControlDropdown3.default);
	
	_Component2.default.registerComponent('ControlContainer', ControlContainer);
	_Control2.default.registerControl('container', ControlContainer);
	exports.default = ControlContainer;

/***/ }),
/* 31 */
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
	
	var _jquery = __webpack_require__(1);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _Component = __webpack_require__(3);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	var _Control = __webpack_require__(2);
	
	var _Control2 = _interopRequireDefault(_Control);
	
	var _ControlContainer2 = __webpack_require__(30);
	
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
			return _possibleConstructorReturn(this, (SubtitleControl.__proto__ || Object.getPrototypeOf(SubtitleControl)).call(this, player, options));
		}
	
		_createClass(SubtitleControl, [{
			key: 'onClick',
			value: function onClick(e) {
				_get(SubtitleControl.prototype.__proto__ || Object.getPrototypeOf(SubtitleControl.prototype), 'onClick', this).call(this, e);
				var video = this.player.video;
				this.active = null;
				video.track = -1;
			}
		}, {
			key: 'onItemClick',
			value: function onItemClick(e) {
				_get(SubtitleControl.prototype.__proto__ || Object.getPrototypeOf(SubtitleControl.prototype), 'onItemClick', this).call(this, e);
				var item = (0, _jquery2.default)(e.target);
				var video = this.player.video;
				if (item.data('language')) {
					video.track = item.data('language');
				}
			}
		}, {
			key: 'onPlayerInited',
			value: function onPlayerInited(e, data) {
				var video = this.player.video;
	
				if (video.subtitles == null) {
					return false;
				}
	
				if (video.subtitles.length > 0) {
					for (var i in video.subtitles) {
						if (!video.subtitles.hasOwnProperty(i)) continue;
						var item = video.subtitles[i];
						this.addItem(item.title, {
							src: item.src,
							language: item.language
						});
					}
					this.disable = false;
				}
			}
		}]);
	
		return SubtitleControl;
	}(_ControlContainer3.default);
	
	_Component2.default.registerComponent('SubtitleControl', SubtitleControl);
	_Control2.default.registerControl('subtitle', SubtitleControl);
	exports.default = SubtitleControl;

/***/ }),
/* 32 */
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
	
	var _jquery = __webpack_require__(1);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _Control2 = __webpack_require__(2);
	
	var _Control3 = _interopRequireDefault(_Control2);
	
	var _Component = __webpack_require__(3);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	var _Icon = __webpack_require__(4);
	
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
				var parser = document.createElement('a');
				parser.href = value;
				var fileName = parser.pathname.split('/');
				fileName = fileName[fileName.length - 1];
				this.element.attr({
					href: value,
					download: fileName
				});
			}
		}]);
	
		return DownloadControl;
	}(_Control3.default);
	
	_Component2.default.registerComponent('DownloadControl', DownloadControl);
	_Control3.default.registerControl('download', DownloadControl);
	exports.default = DownloadControl;

/***/ }),
/* 33 */
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
	
	var _jquery = __webpack_require__(1);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _Component = __webpack_require__(3);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	var _Control = __webpack_require__(2);
	
	var _Control2 = _interopRequireDefault(_Control);
	
	var _ControlDropdown2 = __webpack_require__(18);
	
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
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file TimeInfoControl.js
	 */
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _jquery = __webpack_require__(1);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _Component = __webpack_require__(3);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	var _Control2 = __webpack_require__(2);
	
	var _Control3 = _interopRequireDefault(_Control2);
	
	var _ControlText = __webpack_require__(20);
	
	var _ControlText2 = _interopRequireDefault(_ControlText);
	
	var _utils = __webpack_require__(6);
	
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
			key: '_onClick',
			value: function _onClick(e) {
				e.preventDefault();
			}
		}]);
	
		return TimeInfoControl;
	}(_Control3.default);
	
	_Component2.default.registerComponent('TimeInfoControl', TimeInfoControl);
	_Control3.default.registerControl('timeinfo', TimeInfoControl);
	exports.default = TimeInfoControl;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };
	
	var _jquery = __webpack_require__(1);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _cookie = __webpack_require__(27);
	
	var _cookie2 = _interopRequireDefault(_cookie);
	
	var _Component = __webpack_require__(3);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	var _browser = __webpack_require__(14);
	
	var _Entity2 = __webpack_require__(36);
	
	var _Entity3 = _interopRequireDefault(_Entity2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
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
							src: src,
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
				dfd.notify();
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
	
				this.player.trigger('timeupdateload', { time: time });
	
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
				if (value <= this.rateMax && value >= this.rateMin) {
					this.media.playbackRate = value;
					_cookie2.default.set('rate', value);
				}
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
				this.playbackRate = rate;
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
			set: function set(value) {
				for (var i = 0; i < this.media.textTracks.length; i++) {
					if (this.media.textTracks[i].language === value) this.media.textTracks[i].mode = 'showing';else this.media.textTracks[i].mode = 'hidden';
				}
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
				var player = this.player;
				if (value > 1) {
					this.media.volume = 1;
				} else if (value < player.options.volume.mutelimit) {
					this.media.volume = 0;
				} else {
					this.media.volume = value;
					_cookie2.default.set('volume', value);
				}
				this.media.mute = value < player.options.volume.mutelimit;
			}
		}, {
			key: 'defaultVolume',
			get: function get() {
				return _cookie2.default.get('volume') || this.player.options.volume.default;
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
	
	_Component2.default.registerComponent('Html5', Html5);
	exports.default = Html5;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Component2 = __webpack_require__(3);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	var _cookie = __webpack_require__(27);
	
	var _cookie2 = _interopRequireDefault(_cookie);
	
	var _MediaError = __webpack_require__(15);
	
	var _MediaError2 = _interopRequireDefault(_MediaError);
	
	var _jquery = __webpack_require__(1);
	
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
	
			_this.subtitles = [];
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
			key: 'src',
			set: function set(value) {},
			get: function get() {}
		}]);
	
		return Entity;
	}(_Component3.default);
	
	_Component3.default.registerComponent('Entity', Entity);
	exports.default = Entity;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };
	
	var _jquery = __webpack_require__(1);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _Entity2 = __webpack_require__(36);
	
	var _Entity3 = _interopRequireDefault(_Entity2);
	
	var _Component = __webpack_require__(3);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function loadScript(url) {
		return _jquery2.default.getScript(url);
	}
	
	/* global YT */
	var apiLoaded = loadScript('https://www.youtube.com/iframe_api');
	
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
			value: function increaseRate() {
				var index = this.availableRates.indexOf(this.rate);
				if (index + 1 >= this.availableRates.length) return;
				return this.rate = this.availableRates[index + 1];
			}
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
				return apiLoaded.then(function () {
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
					cc_load_policy: 1,
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
						break;
	
					case YT.PlayerState.ENDED:
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
	
				this.isSeeking = true;
				this.ytPlayer.seekTo(value, true);
				this.trigger('timeupdate');
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
				var _this5 = this;
	
				if (value) {
					this.ytPlayer.mute();
				} else {
					this.ytPlayer.unMute();
				}
	
				setTimeout(function () {
					_this5.trigger('volumechange');
				}, 50);
			},
			get: function get() {
				return this.ytPlayer.isMuted();
			}
		}, {
			key: 'defaultVolume',
			get: function get() {
				return this.volume || this.player.options.volume.default;
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
				var _this6 = this;
	
				if (this._playbackQuality == null) {
					this._playbackQuality = this.getAvailableQualityLevels().find(function (item) {
						return item.name === _this6.ytPlayer.getPlaybackQuality();
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
				var _this7 = this;
	
				this.ytPlayer.setVolume(value * 100);
	
				setTimeout(function () {
					_this7.trigger('volumechange');
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
	}(_Entity3.default);
	
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
	
	_Component2.default.registerComponent('Youtube', Youtube);
	exports.default = Youtube;

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
				common: [['play', 'volume', 'timeline', 'rate', 'source', 'divider', 'fullscreen'], []],
				fullscreen: [['play', 'volume', 'timeline', 'rate', 'source', 'divider', 'fullscreen']]
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
			entity: 'Youtube',
			controls: {
				common: [['play', 'volume', 'timeline', 'rate', 'backward', 'source', 'divider', 'section', 'fullscreen'], []],
				fullscreen: [['play', 'volume', 'timeline', 'rate', 'backward', 'source', 'divider', 'section', 'fullscreen']]
			}
		}
	};

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNmZkNGE0MGZlY2VmOTQyMDljOGIiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2xlLXBsYXllci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCIkXCIiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvQ29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9Db21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvSWNvbi5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9QbGF5QnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy91dGlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9TcGxhc2hJY29uLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL1RpbWVsaW5lL1RpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvQ29udHJvbENvbGxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvU2VjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvRXJyb3JEaXNwbGF5LmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL1Bvc3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvRnVsbHNjcmVlbkFwaS5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvdXRpbHMvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvTWVkaWFFcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9QbGF5Q29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9Wb2x1bWVDb250cm9sLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL0NvbnRyb2xEcm9wZG93bi5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9UaW1lbGluZS9UaW1lbGluZUNvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvQ29udHJvbFRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvVGltZWxpbmUvQnVmZmVyZWRSYW5nZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvVGltZWxpbmUvTWFya2VyLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL1NlY3Rpb25Db250cm9sLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL0NvbnRyb2xDaGVja2JveC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9GdWxsc2NyZWVuQ29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9SYXRlQ29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvdXRpbHMvY29va2llLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL0JhY2t3YXJkQ29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9Tb3VyY2VDb250cm9sLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL0NvbnRyb2xDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvU3VidGl0bGVDb250cm9sLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL0Rvd25sb2FkQ29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9LZXliaW5kaW5nSW5mb0NvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvVGltZUluZm9Db250cm9sLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9lbnRpdHkvSHRtbDUuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2VudGl0eS9FbnRpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2VudGl0eS9Zb3V0dWJlLmpzIiwid2VicGFjazovLy8uL34vYXJyYXkucHJvdG90eXBlLmZpbmQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9kZWZpbmUtcHJvcGVydGllcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L29iamVjdC1rZXlzL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vb2JqZWN0LWtleXMvaXNBcmd1bWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9mb3JlYWNoL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vZXMtYWJzdHJhY3QvZXM2LmpzIiwid2VicGFjazovLy8uL34vZXMtYWJzdHJhY3QvaGVscGVycy9pc05hTi5qcyIsIndlYnBhY2s6Ly8vLi9+L2VzLWFic3RyYWN0L2hlbHBlcnMvaXNGaW5pdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9lcy1hYnN0cmFjdC9oZWxwZXJzL2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2VzLWFic3RyYWN0L2hlbHBlcnMvc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2VzLWFic3RyYWN0L2hlbHBlcnMvbW9kLmpzIiwid2VicGFjazovLy8uL34vZXMtYWJzdHJhY3QvaGVscGVycy9pc1ByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2VzLXRvLXByaW1pdGl2ZS9lczYuanMiLCJ3ZWJwYWNrOi8vLy4vfi9lcy10by1wcmltaXRpdmUvaGVscGVycy9pc1ByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2lzLWNhbGxhYmxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vaXMtZGF0ZS1vYmplY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9pcy1zeW1ib2wvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9mdW5jdGlvbi1iaW5kL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vZnVuY3Rpb24tYmluZC9pbXBsZW1lbnRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2VzLWFic3RyYWN0L2VzNS5qcyIsIndlYnBhY2s6Ly8vLi9+L2VzLXRvLXByaW1pdGl2ZS9lczUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pcy1yZWdleC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2hhcy9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9hcnJheS5wcm90b3R5cGUuZmluZC9pbXBsZW1lbnRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2FycmF5LnByb3RvdHlwZS5maW5kL3BvbHlmaWxsLmpzIiwid2VicGFjazovLy8uL34vYXJyYXkucHJvdG90eXBlLmZpbmQvc2hpbS5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L3N2Zy9zdmctZGVmcy5zdmciLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL3ByZXNldHMvdnBzLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9wcmVzZXRzL3Ntcy5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvcHJlc2V0cy9jb21wcmVzc2VkLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9wcmVzZXRzL3lvdXR1YmUuanMiXSwibmFtZXMiOlsicmVnaXN0ZXJDb250cm9sIiwiZWxlbWVudCIsImFkZENsYXNzIiwiZXhjbHVkZUFycmF5Iiwic291cmNlIiwiZGlzdCIsInJlc3VsdCIsImNvbmNhdCIsImZvckVhY2giLCJpbmRleCIsImluZGV4T2YiLCJpdGVtIiwic3BsaWNlIiwiZGVmYXVsdE9wdGlvbnMiLCJlbnRpdHkiLCJhdXRvcGxheSIsImhlaWdodCIsImxvb3AiLCJtdXRlZCIsInByZWxvYWQiLCJwb3N0ZXIiLCJzdmdQYXRoIiwiaW5uYWN0aXZpdHlUaW1lb3V0IiwicmF0ZSIsInN0ZXAiLCJtaW4iLCJtYXgiLCJkZWZhdWx0IiwicGxheWJhY2siLCJzaG9ydCIsIm1lZGl1bSIsImxvbmciLCJjb250cm9scyIsImNvbW1vbiIsImZ1bGxzY3JlZW4iLCJtaW5pIiwiY29udHJvbHNPcHRpb25zIiwiYWxpZ24iLCJ2b2x1bWUiLCJtdXRlbGltaXQiLCJrZXlCaW5kaW5nIiwia2V5IiwiaW5mbyIsImRlc2NyaXB0aW9uIiwiZm4iLCJwbGF5ZXIiLCJ2aWRlbyIsInRvZ2dsZVBsYXkiLCJjdXJyZW50VGltZSIsIm9wdGlvbnMiLCJzcGxhc2hJY29uIiwic2hvdyIsInNoaWZ0S2V5Iiwic2VjdGlvbnMiLCJwcmV2IiwibmV4dCIsImNhbGNWb2x1bWVJY29uIiwidG9nZ2xlRnVsbHNjcmVlbiIsInBsdWdpbnMiLCJtaW5pcGxheWVyIiwib25QbGF5ZXJJbml0ZWQiLCJQbGF5ZXIiLCJjcmVhdGVFbGVtZW50IiwiX2VsZW1lbnQiLCJpbm5lckVsZW1lbnQiLCJfdXNlck9wdGlvbnMiLCJfaW5pdE9wdGlvbnMiLCJfbG9hZFNWR1Nwcml0ZSIsImRlZmF1bHRTcHJpdGUiLCJfdmlldyIsImxvYWRFbnRpdHkiLCJjdHgiLCJfaW5pdENvbnRyb2xzIiwiX2RibGNsaWNrVGltZW91dCIsIl9pbml0U2VjdGlvbnMiLCJ0aGVuIiwiZGF0YSIsInNlY3Rpb25zQ29tcG9uZW50IiwidHJpZ2dlciIsIl9pbml0UGx1Z2lucyIsIl9saXN0ZW5Ib3RLZXlzIiwiX3VzZXJBY3Rpdml0eSIsIl9saXN0ZW5Vc2VyQWN0aXZpdHkiLCJfd2FpdGluZ1RpbWVvdXRzIiwib24iLCJldmVudE5hbWUiLCJvbmUiLCJyZW1vdmVDbGFzcyIsInRpbWUiLCJkdXJhdGlvbiIsImVycm9yIiwiX3N0YXJ0V2FpdGluZyIsIl9zdG9wV2F5dGluZyIsImUiLCJ1cmwiLCJwbGF5IiwicGF1c2VkIiwicGF1c2UiLCJjb2RlIiwiaW5pdCIsInNyYyIsIl9vbkZ1bGxzY3JlZW5DaGFuZ2UiLCJiaW5kIiwiX29uQ2xpY2siLCJfb25EYmNsaWNrIiwiX29uSW5pdGVkIiwiX29uUGxheSIsIl9vblBhdXNlIiwiZG9jdW1lbnQiLCJmdWxsc2NyZWVuY2hhbmdlIiwiX29uRW50aXR5RnVsbHNjcmVuQ2hhbmdlIiwibmFtZSIsIkVudGl0eSIsImdldENvbXBvbmVudCIsIl9lbnRpdHkiLCJsb2FkIiwidmlldyIsImFyZ3MiLCJkZmQiLCJEZWZlcnJlZCIsIl9kYXRhIiwidW5kZWZpbmVkIiwicmVzb2x2ZSIsInByb21pc2UiLCJhamF4IiwibWV0aG9kIiwiZGF0YVR5cGUiLCJnZXREYXRhIiwiZnNBcGkiLCJyZXF1ZXN0RnVsbHNjcmVlbiIsInN1cHBvcnRzRnVsbFNjcmVlbiIsImVudGVyRnVsbHNjcmVlbiIsImV4aXRGdWxsc2NyZWVuIiwid2lkdGgiLCJsZW5ndGgiLCJuZXdTZWN0aW9ucyIsImkiLCJlbmRTZWN0aW9uIiwiYmVnaW4iLCJlbmQiLCJhdHRyIiwiY3NzIiwiZXJyb3JEaXNwbGF5IiwicGxheUJ1dHRvbiIsImxvYWRlciIsImFwcGVuZCIsImljb25OYW1lIiwiY2xhc3NOYW1lIiwidmlkZW9Db250YWluZXIiLCJsYXN0VGltZXIiLCJ2aWRlb0luZm8iLCJjb25zb2xlIiwid2FybiIsImluZm9FbGVtZW50IiwiaHRtbCIsInRpdGxlIiwic2VjdGlvbkNvbnRhaW5lciIsInNlY3Rpb25zQ29udGFpbmVyIiwiYmVmb3JlIiwiYXR0ck9wdGlvbnMiLCJyZWR1Y2UiLCJvYmoiLCJ2YWwiLCJzb3VyY2VzIiwiZmluZCIsImVhY2giLCJ2YWx1ZSIsIl9vcHRpb25zRnJvbUVsZW1lbnQiLCJwcmVzZXRPcHRpb25zIiwicHJlc2V0IiwiZ2V0UHJlc2V0IiwiZXh0ZW5kIiwiQXJyYXkiLCJpc0FycmF5IiwiZXhjbHVkZUNvbnRyb2xzIiwiaGFzT3duUHJvcGVydHkiLCJjb250cm9sQ29sbGVjdGlvbiIsInJvdyIsImluaXRPcHRpb25zIiwiYWN0aXZlIiwiaXNLZXlCaW5kaW5nIiwiYmluZGluZyIsIndoaWNoIiwiY3RybEtleSIsInByZXZlbnREZWZhdWx0IiwicmVqZWN0IiwiZ2V0U2VjdGlvbkRhdGEiLCJkb25lIiwiaXNTZWN0aW9uT3V0c2lkZSIsIl9jb21wbGV0ZVNlY3Rpb25zIiwiaXRlbXMiLCJmdWxsc2NyZWVuT25seSIsImhpZGVTY3JvbGwiLCJvdXRzaWRlU2VjdGlvbnMiLCJwbHVnaW5PcHRpb25zIiwibW91c2VJblByb2dyZXNzIiwibGFzdE1vdmVYIiwibGFzdE1vdmVZIiwib25Nb3VzZU1vdmUiLCJzY3JlZW5YIiwic2NyZWVuWSIsIm9uTW91c2VEb3duIiwiY2xlYXJJbnRlcnZhbCIsInNldEludGVydmFsIiwib25Nb3VzZVVwIiwiaW5hY3Rpdml0eVRpbWVvdXQiLCJkZWxheSIsInVzZXJBY3RpdmUiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwicHVzaCIsImNhbGwiLCJmb2N1cyIsImlzRnMiLCJmdWxsc2NyZWVuRWxlbWVudCIsImVuZGVkIiwiX2Vycm9yIiwiaGlkZSIsIl91c2VyQWN0aXZlIiwiZ2V0VXNlckFjdGl2ZSIsInRvZ2dsZUNsYXNzIiwicGx1Z2luIiwicHJvdG90eXBlIiwicmVnaXN0ZXJDb21wb25lbnQiLCJnZXRDb250cm9sIiwic2Vjb25kc1RvVGltZSIsIl9wcmVzZXRzIiwic3ZnIiwiaGlkZGVuRWxlbWVudCIsInByZXBlbmQiLCJyZXF1aXJlIiwidmVyc2lvbiIsIndpbmRvdyIsIiQiLCJsZVBsYXllciIsIm9mZnNldFNob3ciLCJvZmZzZXQiLCJ0b3AiLCJvdXRlckhlaWdodCIsImdldENvbnRyb2xzIiwiY29udHJvbE9wdGlvbnMiLCJjb250cm9sIiwiZGlzYWJsZSIsImlzRnVuY3Rpb24iLCJnZXRXaWR0aCIsIl91cGRhdGVNaW5pUGxheWVyIiwiZm9yY2UiLCJzY3JvbGxUb3AiLCJoaWRlTWluaVBsYXllciIsInNob3dNaW5pUGxheWVyIiwib25TZXRWaWV3Iiwib25EZWxWaWV3IiwiQ29udHJvbCIsImNsaWNrIiwibGVwbGF5ZXJfY29udHJvbF9jbGljayIsIm9uQ2xpY2siLCJpY29uIiwiYXR0cnMiLCJyb2xlIiwiYnVpbGRDU1NDbGFzcyIsImFyZ3VtZW50cyIsIl9kaXNhYmxlIiwiX2NvbnRyb2xzIiwiY29udHJvbENsYXNzIiwiQ29tcG9uZW50IiwiX19ub2RlIiwiYmx1ciIsImV2ZW50IiwiRXZlbnQiLCJ0cmlnZ2VySGFuZGxlciIsImZsYWciLCJoYXNDbGFzcyIsImNvbXBvbmVudCIsIl9jb21wb25lbnRzIiwiSWNvbiIsIl91c2VUYWciLCJjcmVhdGVFbGVtZW50TlMiLCJfc3ZnVGFnIiwiX2ljb25OYW1lIiwiYXBwZW5kQ2hpbGQiLCJhdHRyTlMiLCJyZW1vdmVBdHRyaWJ1dGVOUyIsInNldEF0dHJpYnV0ZU5TIiwiUGxheUJ1dHRvbiIsImlubmVyIiwicGVyY2VudGlmeSIsImNyZWF0ZUVsIiwibm9vcCIsInNlY29uZHMiLCJzaG93SG91cnMiLCJoIiwiTWF0aCIsImZsb29yIiwibSIsInMiLCJvdXQiLCJwZXJjZW50IiwidGFnIiwicHJvcHMiLCJnZXRTY3JvbGxCYXJXaWR0aCIsIm91dGVyIiwidmlzaWJpbGl0eSIsIm92ZXJmbG93IiwiYXBwZW5kVG8iLCJ3aWR0aFdpdGhTY3JvbGwiLCJvdXRlcldpZHRoIiwicmVtb3ZlIiwiU3BsYXNoSWNvbiIsIlRpbWUiLCJ1cGRhdGVUZXh0IiwidGV4dCIsIkNvbnRyb2xDb2xsZWN0aW9uIiwicGxheWVyT3B0aW9ucyIsImluZGV4Um93IiwiY3JlYXRlIiwiY29sbGVjdGlvbiIsIl9yb3dzIiwiYWRkUm93IiwiZWxlbVJvdyIsImZpcnN0Iiwic2Vjb25kIiwiZ2xvYmFsQWxpZ24iLCJyb3dBbGlnbiIsImNvbnRyb2xOYW1lIiwiYWRkQ29udHJvbCIsIl9nZXRDb250cm9sT3B0aW9ucyIsIlNlY3Rpb25zIiwic2Nyb2xsRWxlbWVudCIsIl9pbm5lckVsZW1lbnQiLCJhY3RpdmVTZWN0aW9uIiwiZ2V0U2VjdGlvbkJ5SW5kZXgiLCJzZXRBY3RpdmVCeUluZGV4Iiwib25TZWN0aW9uQ2xpY2siLCJfb25TZWN0aW9uc1RvZ2dsZSIsIm9uVGltZVVwZGF0ZSIsInVwZGF0ZVNlY3Rpb25EdXJhdGlvbiIsInNlY3Rpb25JbmRleCIsInBhcnNlSW50IiwibmV3SW5kZXgiLCJyaWdodCIsIl9jcmVhdGVTZWN0aW9ucyIsInNlY3Rpb24iLCJ0YXJnZXQiLCJjbG9zZXN0IiwidG9wUG9zaXRpb24iLCJwb3NpdGlvbiIsImFuaW1hdGUiLCJlbmRTZWN0aW9uVGltZSIsImNoZWNrZWQiLCJ0b1N0cmluZyIsIm5leHRJbmZvIiwidHJpbSIsInJlcGxhY2VXaXRoIiwiY3JlYXRlU2VjdGlvbiIsIkVycm9yRGlzcGxheSIsIm1lc3NhZ2UiLCJvblBsYXllckVycm9yIiwiUG9zdGVyIiwiX3VybCIsIkZ1bGxzY3JlZW5BcGkiLCJhcGlNYXAiLCJzcGVjQXBpIiwiYnJvd3NlckFwaSIsIlVTRVJfQUdFTlQiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJJU19NT0JJTEUiLCJ0ZXN0IiwiSVNfQ0hST01FIiwiSVNfQU5EUk9JRCIsIklTX0FORFJPSURfUEhPTkUiLCJJU19JUEFEIiwiSVNfSVBIT05FIiwiSVNfSVBPRCIsIklTX0lPUyIsIklTX1NBRkFSSSIsIk1lZGlhRXJyb3IiLCJkZWZhdWx0TWVzc2FnZXMiLCJlcnJvclR5cGVzIiwiZXJyTnVtIiwiUGxheUNvbnRyb2wiLCJzaG93UGF1c2UiLCJzaG93UGxheSIsInNob3dSZXBsYXkiLCJyZW1vdmVSZXBsYXkiLCJJbmZpbml0eSIsIl9yZXBsYXkiLCJWb2x1bWVDb250cm9sIiwiZHJhZyIsIm1hcmtlciIsImxpbmUiLCJwIiwiZ2V0UG9zaXRpb24iLCJwYWdlWSIsImRyb3Bkb3duQ29udGVudCIsIm1vdXNlbW92ZSIsIm1vdXNldXAiLCJ5IiwidG9nZ2xlTXV0ZWQiLCJkZWZhdWx0Vm9sdW1lIiwicm91bmQiLCJDb250cm9sRHJvcGRvd24iLCJUaW1lbGluZUNvbnRyb2wiLCJfb25NYXJrZXJNb3VzZW1vdmUiLCJfb25NYXJrZXJNb3VzZWRvd24iLCJvblNlY3Rpb25zSW5pdCIsIl9vblRpbWVVcGRhdGUiLCJfb25EdXJhdGlvbkNoYW5nZSIsIm1hcmtlclNoYWRvdyIsIngiLCJtYXJrZXJUaW1lIiwiaGFyZE1vdmUiLCJ0b3RhbFRpbWUiLCJwbGF5ZWRSYW5nZXMiLCJidWZmZXJlZFJhbmdlcyIsInBhZ2VYIiwibW91c2VsZWF2ZSIsIm1vdXNlZG93biIsIl9vbkxpbmVDbGljayIsInRvdWNobW92ZSIsImlzTmFOIiwidXBkYXRlU2VjdGlvblJhbmdlcyIsImNyZWF0ZVNlY3Rpb25SYW5nZXMiLCJsZWZ0IiwidG9GaXhlZCIsInVwZGF0ZUxhYmVscyIsIndhdGNoQnVmZmVySW50ZXJ2YWwiLCJ1cGRhdGVQcm9ncmVzc0JhciIsIkVORCIsIlNUQVJUIiwibG9hZGVkIiwiZG9tSXRlbSIsImFkZCIsImJ1ZmZlcmVkIiwibG9hZGVkU2l6ZSIsIkNvbnRyb2xUZXh0IiwiX3RleHQiLCJCdWZmZXJlZFJhbmdlcyIsInVwZGF0ZSIsInJhbmdlIiwiTWFya2VyIiwiX29uTW91c2Vkb3duIiwiX2RyYWciLCJTZWN0aW9uQ29udHJvbCIsIl9vblNlY3Rpb25zSW5pdCIsIkNvbnRyb2xDaGVja2JveCIsIm9uQ2hlY2tlZCIsIl9jaGVja2VkIiwiRnVsbHNjcmVlbkNvbnRyb2wiLCJSYXRlQ29udHJvbCIsImRvd25Db250cm9sIiwiZGVjcmVhc2VSYXRlIiwidXBDb250cm9sIiwiaW5jcmVhc2VSYXRlIiwiY3VycmVudFJhdGUiLCJwYXJzZUZsb2F0IiwicmVwbGFjZSIsInJhdGVNaW4iLCJyYXRlTWF4IiwiZ2V0IiwiQ29va2llIiwiZGZsdCIsImNvb2tpZXMiLCJjb29raWUiLCJzcGxpdCIsImQiLCJEYXRlIiwic2V0RGF0ZSIsInllYXIiLCJCYWNrd2FyZENvbnRyb2wiLCJTb3VyY2VDb250cm9sIiwicGxheWJhY2tRdWFsaXR5IiwicXVhbGl0eUxldmVscyIsImdldEF2YWlsYWJsZVF1YWxpdHlMZXZlbHMiLCJjdXJyZW50UXVhbGl0eSIsImxpc3QiLCJlbXB0eSIsImVsZW0iLCJhZGRJdGVtIiwiQ29udHJvbENvbnRhaW5lciIsIl9hY3RpdmUiLCJjb250ZW50Iiwib25JdGVtQ2xpY2siLCJjdXJyZW50VGFyZ2V0IiwiU3VidGl0bGVDb250cm9sIiwidHJhY2siLCJzdWJ0aXRsZXMiLCJsYW5ndWFnZSIsIkRvd25sb2FkQ29udHJvbCIsIm9uTG9hZFN0YXJ0IiwiaHJlZiIsImRvd25sb2FkIiwibGluayIsInBhcnNlciIsImZpbGVOYW1lIiwicGF0aG5hbWUiLCJLZXlCaW5kaW5nSW5mb0NvbnRyb2wiLCJpbmZvQ29udGVudCIsIl9rZXkiLCJob3RrZXkiLCJrZXlTdHJpbmciLCJUaW1lSW5mb0NvbnRyb2wiLCJfY3VycmVudFRpbWVDb250cm9sIiwiX3RvdGFsVGltZUNvbnRyb2wiLCJIdG1sNSIsIm1lZGlhIiwiYnVmZmVyUmFuZ2VzIiwiX3BsYXliYWNrUXVhbGl0eSIsIm9uRHVyYXRpb25DaGFuZ2UiLCJvblByb2dyZXNzIiwib25TZWVraW5nIiwib25TZWVrZWQiLCJvblZvbHVtZUNoYW5nZSIsIm9uRGJsY2xpY2siLCJvblBsYXkiLCJvblBhdXNlIiwib25SYXRlQ2hhbmdlIiwib25FbmRlZCIsIm9uQ2FucGxheVRocm91Z2giLCJvbldhaXRpbmciLCJvbkVycm9yIiwicmVtb3ZlQXR0ciIsInByb3AiLCJtYXAiLCJfaW5pdFN1YnRpdGxlcyIsIl9pbml0VmlkZW8iLCJfaW5pdFJhdGUiLCJfaW5pdFZvbHVtZSIsIndlYmtpdEVudGVyRnVsbFNjcmVlbiIsIm5ldHdvcmtTdGF0ZSIsIkhBVkVfTUVUQURBVEEiLCJ3ZWJraXRFeGl0RnVsbFNjcmVlbiIsInBsYXllZCIsInBsYXlQcm9taXNlIiwicGF1c2VQcm9taXNlIiwiZGVmYXVsdFJhdGUiLCJfc2VsZiIsImNoaWxkcmVuIiwicmVhZHlTdGF0ZSIsIkhUTUxNZWRpYUVsZW1lbnQiLCJIQVZFX05PVEhJTkciLCJfdGV4dFRyYWNrc0hhY2siLCJub3RpZnkiLCJ0ZXh0VHJhY2tzIiwiY2xpZW50SGVpZ2h0IiwiY2xpZW50V2lkdGgiLCJwbGF5YmFja1JhdGUiLCJzZXQiLCJNT0JJTEVfTUFYX1JBVEUiLCJTQUZBUklfTUFYX1JBVEUiLCJNT0JJTEVfTUlOX1JBVEUiLCJTQUZBUklfTUlOX1JBVEUiLCJzdG9wIiwiX3NvdXJjZSIsIm1vZGUiLCJtdXRlIiwic2Vla2FibGUiLCJzdGFydCIsImN1cnJlbnRTcmMiLCJfdHJpZ2dlclN0YWNrIiwiX3N0b3BMaXN0ZW4iLCJfcG9zdGVyIiwiaW5uZXJIZWlnaHQiLCJfcmF0ZU1heCIsIl9yYXRlTWluIiwibGV2ZWxzIiwic29tZSIsImxvYWRTY3JpcHQiLCJnZXRTY3JpcHQiLCJhcGlMb2FkZWQiLCJZb3V0dWJlIiwiX3BhdXNlZCIsImF2YWlsYWJsZVJhdGVzIiwiYXJyIiwieXRQbGF5ZXIiLCJRVUFMSVRZX05BTUVTIiwicGxheVZpZGVvIiwicGF1c2VWaWRlbyIsImluaXRZVFBsYXllciIsInlvdXR1YmVFbGVtZW50IiwiYmxvY2tlciIsIl9pbml0UHJvbWlzZSIsImdsb2JhbE9wdGlvbnMiLCJ5dE9wdGlvbnMiLCJpdl9sb2FkX3BvbGljeSIsIm1vZGVzdGJyYW5kaW5nIiwicmVsIiwic2hvd2luZm8iLCJjY19sb2FkX3BvbGljeSIsImRpc2FibGVrYiIsImZzIiwiWVQiLCJyZWFkeSIsInZpZGVvSWQiLCJwbGF5ZXJWYXJzIiwiZXZlbnRzIiwib25SZWFkeSIsIm9uWVRQUmVhZHkiLCJvblN0YXRlQ2hhbmdlIiwib25ZVFBTdGF0ZUNoYW5nZSIsIm9uUGxheWJhY2tSYXRlQ2hhbmdlIiwib25ZVFBSYXRlQ2hhbmdlIiwib25QbGF5YmFja1F1YWxpdHlDaGFuZ2UiLCJvbllUUFBsYXliYWNrUXVhbGl0eUNoYW5nZSIsImdldEF2YWlsYWJsZVBsYXliYWNrUmF0ZXMiLCJzZXRBdmFpbGFibGVQbGF5YmFja1JhdGVzIiwic3RhdGUiLCJsYXN0U3RhdGUiLCJQbGF5ZXJTdGF0ZSIsIlVOU1RBUlRFRCIsIkVOREVEIiwiUExBWUlORyIsInNldFBsYXliYWNrUXVhbGl0eSIsIl9uZXh0UGxheWJhY2tRdWFsaXR5IiwiaXNTZWVraW5nIiwiZW1pdFRpbWV1cGRhdGUiLCJQQVVTRUQiLCJCVUZGRVJJTkciLCJzZWVraW5nSW50ZXJ2YWwiLCJ3YXNQYXVzZWRCZWZvcmVTZWVrIiwidGltZUJlZm9yZVNlZWsiLCJpZCIsInBhcnNlVXJsIiwiZ2V0Q3VycmVudFRpbWUiLCJzZWVrVG8iLCJnZXREdXJhdGlvbiIsIk5hTiIsImdldFBsYXliYWNrUmF0ZSIsInNldFBsYXliYWNrUmF0ZSIsInVuTXV0ZSIsImlzTXV0ZWQiLCJzdGF0dXMiLCJnZXRQbGF5ZXJTdGF0ZSIsIkNVRUQiLCJnZXRQbGF5YmFja1F1YWxpdHkiLCJnZXRWb2x1bWUiLCJzZXRWb2x1bWUiLCJyZWdleCIsIlVSTF9SRUdFWCIsIm1hdGNoIiwidGlueSIsInNtYWxsIiwibGFyZ2UiLCJoZDcyMCIsImhkMTA4MCIsImhpZ2hyZXMiLCJhdXRvIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3RDQTs7Ozs7O0FBRUE7Ozs7QUFHQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7O0FBQ0E7O0FBRUE7Ozs7QUFHQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FBakJBOzs7QUFvQkEsbUJBQVFBLGVBQVIsQ0FBd0IsU0FBeEIsRUFBbUMsWUFBVztBQUM3QyxTQUFPO0FBQ05DLFlBQVUsc0JBQUUsUUFBRixFQUFZQyxRQUFaLENBQXFCLFNBQXJCO0FBREosR0FBUDtBQUdBLEVBSkQ7O0FBUUE7Ozs7Ozs7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O0FBQ0E7QUFDQSxtQ0FBa0MsYUFBYTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7O0FBRUQsaUNBQWdDOztBQUVoQzs7Ozs7OztBQzNVQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNGQSw0Q0FBMkMsZ0JBQWdCOztBQUUzRCxtREFBa0QsaUZBQWlGOzs7Ozs7O0FDRm5JO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTs7Ozs7OztBQ0ZBO0FBQ0E7QUFD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WUFBNUQsQ0FEWTtBQUxIO0FBRkY7QUFEVyxFQUFmLEM7Ozs7Ozs7Ozs7O0FDQUEsS0FBTXVJLDBCQUFTO0FBQ3JCeEgsV0FBVTtBQUNUbkMsV0FBUyxTQURBO0FBRVRrQixhQUFXO0FBQ1ZDLFlBQVMsQ0FDUixDQUFDLE1BQUQsRUFBUyxRQUFULEVBQW1CLFVBQW5CLEVBQStCLE1BQS9CLEVBQXVDLFVBQXZDLEVBQW1ELFFBQW5ELEVBQTZELFNBQTdELEVBQXdFLFNBQXhFLEVBQW1GLFlBQW5GLENBRFEsRUFFUixFQUZRLENBREM7QUFLVkMsZ0JBQWEsQ0FDWixDQUFDLE1BQUQsRUFBUyxRQUFULEVBQW1CLFVBQW5CLEVBQStCLE1BQS9CLEVBQXVDLFVBQXZDLEVBQW9ELFFBQXBELEVBQThELFNBQTlELEVBQXlFLFNBQXpFLEVBQW9GLFlBQXBGLENBRFk7QUFMSDtBQUZGO0FBRFcsRUFBZixDIiwiZmlsZSI6ImxlLXBsYXllci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L2pzL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDZmZDRhNDBmZWNlZjk0MjA5YzhiIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5cbmltcG9ydCBDb250cm9sIGZyb20gJy4vY29tcG9uZW50cy9Db250cm9sJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL0NvbXBvbmVudCc7XG5pbXBvcnQgUGxheUJ1dHRvbiBmcm9tICcuL2NvbXBvbmVudHMvUGxheUJ1dHRvbic7XG5pbXBvcnQgU3BsYXNoSWNvbiBmcm9tICcuL2NvbXBvbmVudHMvU3BsYXNoSWNvbic7XG5cbmltcG9ydCBJY29uIGZyb20gJy4vY29tcG9uZW50cy9JY29uJztcbmltcG9ydCBUaW1lIGZyb20gJy4vY29tcG9uZW50cy9UaW1lbGluZS9UaW1lJztcbmltcG9ydCBDb250cm9sQ29sbGVjdGlvbiBmcm9tICcuL2NvbXBvbmVudHMvQ29udHJvbENvbGxlY3Rpb24nO1xuaW1wb3J0IFNlY3Rpb25zIGZyb20gJy4vY29tcG9uZW50cy9TZWN0aW9ucyc7XG5pbXBvcnQgRXJyb3JEaXNwbGF5IGZyb20gJy4vY29tcG9uZW50cy9FcnJvckRpc3BsYXknO1xuaW1wb3J0IFBvc3RlciBmcm9tICcuL2NvbXBvbmVudHMvUG9zdGVyJztcbmltcG9ydCBGdWxsc2NyZWVuQXBpIGZyb20gJy4vRnVsbHNjcmVlbkFwaSc7XG5cbmltcG9ydCB7IGNyZWF0ZUVsLCBzZWNvbmRzVG9UaW1lLCBub29wIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBJU19JUEhPTkUsIElTX0lQT0QsIElTX0FORFJPSURfUEhPTkUgfSBmcm9tICcuL3V0aWxzL2Jyb3dzZXInO1xuXG5pbXBvcnQgTWVkaWFFcnJvciBmcm9tICcuL01lZGlhRXJyb3InO1xuXG4vLyBSZWdpc3RlciBjb21tb24gY29udHJvbHNcbmltcG9ydCAnLi9jb21wb25lbnRzL1BsYXlDb250cm9sJztcbmltcG9ydCAnLi9jb21wb25lbnRzL1ZvbHVtZUNvbnRyb2wnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvVGltZWxpbmUvVGltZWxpbmVDb250cm9sJztcbmltcG9ydCAnLi9jb21wb25lbnRzL1NlY3Rpb25Db250cm9sJztcbmltcG9ydCAnLi9jb21wb25lbnRzL0Z1bGxzY3JlZW5Db250cm9sJztcbmltcG9ydCAnLi9jb21wb25lbnRzL1JhdGVDb250cm9sJztcbmltcG9ydCAnLi9jb21wb25lbnRzL0JhY2t3YXJkQ29udHJvbCc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9Tb3VyY2VDb250cm9sJztcbmltcG9ydCAnLi9jb21wb25lbnRzL1N1YnRpdGxlQ29udHJvbCc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9Eb3dubG9hZENvbnRyb2wnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvS2V5YmluZGluZ0luZm9Db250cm9sJztcbmltcG9ydCAnLi9jb21wb25lbnRzL1RpbWVJbmZvQ29udHJvbCc7XG5cbmltcG9ydCAnLi9lbnRpdHkvSHRtbDUnO1xuaW1wb3J0ICcuL2VudGl0eS9Zb3V0dWJlJztcblxuaW1wb3J0ICdhcnJheS5wcm90b3R5cGUuZmluZCc7XG5cblxuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ2RpdmlkZXInLCBmdW5jdGlvbigpIHtcblx0cmV0dXJuIHtcblx0XHRlbGVtZW50IDogJCgnPGRpdi8+JykuYWRkQ2xhc3MoJ2RpdmlkZXInKVxuXHR9O1xufSk7XG5cblxuXG4vKipcbiAqIFJldHVybiBhcnJheSB3aXRoIGV4Y2x1ZGVkIGRpc3QncyBpdGVtcyBmcm9tIHNvdXJjZSBhcnJheVxuICpcbiAqIEBhY2Nlc3MgcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gc291cmNlXG4gKiBAcGFyYW0ge0FycmF5fSBkaXN0XG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqL1xuZnVuY3Rpb24gZXhjbHVkZUFycmF5KHNvdXJjZSwgZGlzdCkge1xuXHRjb25zdCByZXN1bHQgPSBbXS5jb25jYXQoc291cmNlKTtcblx0ZGlzdC5mb3JFYWNoKGl0ZW0gPT4ge1xuXHRcdGNvbnN0IGluZGV4ID0gcmVzdWx0LmluZGV4T2YoaXRlbSk7XG5cdFx0aWYgKGluZGV4ID4gLTEpIHtcblx0XHRcdHJlc3VsdC5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdFx0cmV0dXJuXG5cdFx0fVxuXHR9KVxuXG5cdHJldHVybiByZXN1bHQ7XG59XG5cbmNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuXHRlbnRpdHkgOiAnSHRtbDUnLFxuXHRhdXRvcGxheSA6IGZhbHNlLFxuXHRoZWlnaHQgOiAnYXV0bycsXG5cdGxvb3AgOiBmYWxzZSxcblx0bXV0ZWQgOiBmYWxzZSxcblx0cHJlbG9hZCA6ICdtZXRhZGF0YScsXG5cdHBvc3RlciA6IG51bGwsXG5cdHN2Z1BhdGggOiAnJyxcblx0aW5uYWN0aXZpdHlUaW1lb3V0IDogNTAwMCxcblx0cmF0ZSA6IHtcblx0XHRzdGVwIDogMC4yNSxcblx0XHRtaW4gOiAwLjUsXG5cdFx0bWF4IDogNC4wLFxuXHRcdGRlZmF1bHQgOiAxXG5cdH0sXG5cdHBsYXliYWNrIDoge1xuXHRcdHN0ZXAgOiB7XG5cdFx0XHRzaG9ydCA6IDUsXG5cdFx0XHRtZWRpdW0gOiAxMCxcblx0XHRcdGxvbmcgOiAzMFxuXHRcdH1cblx0fSxcblx0Y29udHJvbHMgOiB7XG5cdFx0Y29tbW9uIDogW1xuXHRcdFx0WydwbGF5JywgJ3ZvbHVtZScsICdkaXZpZGVyJywgJ3RpbWVsaW5lJywgICdkaXZpZGVyJywgJ3NlY3Rpb24nLCAnZGl2aWRlcicsICdmdWxsc2NyZWVuJ10sXG5cdFx0XHRbJ3JhdGUnLCAnZGl2aWRlcicsICdiYWNrd2FyZCcsICdkaXZpZGVyJywgJ3NvdXJjZScsICdkaXZpZGVyJywgJ3N1YnRpdGxlJywgJ2RpdmlkZXInLCAnZG93bmxvYWQnLCAnZGl2aWRlcicsICdrZXliaW5kaW5nIGluZm8nXVxuXHRcdF0sXG5cdFx0ZnVsbHNjcmVlbiA6IFtcblx0XHRcdFsncGxheScsICd2b2x1bWUnLCAnZGl2aWRlcicsICd0aW1lbGluZScsICdkaXZpZGVyJywgJ3JhdGUnLCAnZGl2aWRlcicsICdrZXliaW5kaW5nIGluZm8nLCAgJ2RpdmlkZXInLCAnYmFja3dhcmQnLCAnZGl2aWRlcicsICdzb3VyY2UnLCAnZGl2aWRlcicsICdzdWJ0aXRsZScsICdkaXZpZGVyJywgJ2Rvd25sb2FkJywgJ2RpdmlkZXInLCAnc2VjdGlvbicsICdkaXZpZGVyJywgJ2Z1bGxzY3JlZW4nXVxuXHRcdF0sXG5cdFx0bWluaSA6IFtcblx0XHRcdFsncGxheScsICd2b2x1bWUnLCAnZGl2aWRlcicsICdmdWxsc2NyZWVuJywgJ2RpdmlkZXInLCAndGltZWluZm8nXVxuXHRcdF1cblx0fSxcblx0Y29udHJvbHNPcHRpb25zIDoge1xuXG5cdFx0Y29tbW9uIDoge1xuXHRcdFx0YWxpZ24gOiBbJ2p1c3RpZnknLCAnbGVmdCddXG5cdFx0fSxcblxuXHRcdGZ1bGxzY3JlZW4gOiB7XG5cdFx0XHRhbGlnbiA6ICdqdXN0aWZ5J1xuXHRcdH1cblx0fSxcblx0dm9sdW1lIDoge1xuXHRcdGRlZmF1bHQgOiAwLjQsXG5cdFx0bXV0ZWxpbWl0IDogMC4wNSxcblx0XHRzdGVwIDogMC4xXG5cdH0sXG5cdGtleUJpbmRpbmcgOiBbXG5cdFx0e1xuXHRcdFx0a2V5IDogMzIsXG5cdFx0XHRpbmZvIDogWydTcGFjZSddLFxuXHRcdFx0ZGVzY3JpcHRpb24gOiAn0J3QsNGH0LDRgtGMINC/0YDQvtC40LPRgNGL0LLQsNC90LjQtSAvINC/0L7RgdGC0LDQstC40YLRjCDQvdCwINC/0LDRg9C30YMnLFxuXHRcdFx0Zm4gOiAocGxheWVyKSA9PiB7XG5cdFx0XHRcdHBsYXllci52aWRlby50b2dnbGVQbGF5KCk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHR7XG5cdFx0XHRrZXkgOiAzNyxcblx0XHRcdGluZm8gOiBbJ+KGkCddLFxuXHRcdFx0ZGVzY3JpcHRpb24gOiBg0J/QtdGA0LXQvNC+0YLQsNGC0Ywg0L3QsCAxMCDRgdC10LrRg9C90LQg0L3QsNC30LDQtGAsXG5cdFx0XHRmbiA6IChwbGF5ZXIpID0+IHtcblx0XHRcdFx0cGxheWVyLnZpZGVvLmN1cnJlbnRUaW1lIC09IHBsYXllci5vcHRpb25zLnBsYXliYWNrLnN0ZXAubWVkaXVtO1xuXHRcdFx0XHRwbGF5ZXIuc3BsYXNoSWNvbi5zaG93KCd1bmRvJyk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHR7XG5cdFx0XHRrZXkgOiAzOSxcblx0XHRcdGluZm8gOiBbJ+KGkiddLFxuXHRcdFx0ZGVzY3JpcHRpb24gOiBg0J/QtdGA0LXQvNC+0YLQsNGC0Ywg0L3QsCAxMCDRgdC10LrRg9C90LQg0LLQv9C10YDRkdC0YCxcblx0XHRcdGZuIDogKHBsYXllcikgPT4ge1xuXHRcdFx0XHRwbGF5ZXIudmlkZW8uY3VycmVudFRpbWUgKz0gcGxheWVyLm9wdGlvbnMucGxheWJhY2suc3RlcC5tZWRpdW07XG5cdFx0XHRcdHBsYXllci5zcGxhc2hJY29uLnNob3coJ3JlZG8nKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdHtcblx0XHRcdHNoaWZ0S2V5IDogdHJ1ZSxcblx0XHRcdGluZm8gOiBbJ1NoaWZ0JywgJ+KGkCddLFxuXHRcdFx0ZGVzY3JpcHRpb24gOiAn0J/QtdGA0LXQudGC0Lgg0L3QsCDQv9GA0LXQtNGL0LTRg9GJ0YPRjiDRgdC10LrRhtC40Y4nLFxuXHRcdFx0a2V5IDogMzcsXG5cdFx0XHRmbiA6IChwbGF5ZXIpID0+IHtcblx0XHRcdFx0aWYocGxheWVyLnNlY3Rpb25zID09IG51bGwpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0cGxheWVyLnNlY3Rpb25zLnByZXYoKTtcblxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0c2hpZnRLZXkgOiB0cnVlLFxuXHRcdFx0a2V5IDogMzksXG5cdFx0XHRpbmZvIDogWydTaGlmdCcsICfihpInXSxcblx0XHRcdGRlc2NyaXB0aW9uIDogJ9Cf0LXRgNC10LnRgtC4INC90LAg0YHQu9C10LTRg9GO0YnRg9GOINGB0LXQutGG0LjRjicsXG5cdFx0XHRmbiA6IChwbGF5ZXIpID0+IHtcblx0XHRcdFx0aWYocGxheWVyLnNlY3Rpb25zID09IG51bGwpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0cGxheWVyLnNlY3Rpb25zLm5leHQoKVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0a2V5IDogMzgsXG5cdFx0XHRpbmZvIDogWyfihpEnXSxcblx0XHRcdGRlc2NyaXB0aW9uIDogJ9Cj0LLQtdC70LjRh9C40YLRjCDQs9GA0L7QvNC60L7RgdGC0YwnLFxuXHRcdFx0Zm4gOiAocGxheWVyKSA9PiB7XG5cdFx0XHRcdHBsYXllci52aWRlby52b2x1bWUgKz0gcGxheWVyLm9wdGlvbnMudm9sdW1lLnN0ZXA7XG5cblx0XHRcdFx0cGxheWVyLnNwbGFzaEljb24uc2hvdyhwbGF5ZXIuY2FsY1ZvbHVtZUljb24ocGxheWVyLnZpZGVvLnZvbHVtZSkpO1xuXG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdHtcblx0XHRcdGtleSA6IDQwLFxuXHRcdFx0aW5mbyA6IFsn4oaTJ10sXG5cdFx0XHRkZXNjcmlwdGlvbiA6ICfQo9C80LXQvdGM0YjQuNGC0Ywg0LPRgNC+0LzQutC+0YHRgtGMJyxcblx0XHRcdGZuIDogKHBsYXllcikgPT4ge1xuXHRcdFx0XHRwbGF5ZXIudmlkZW8udm9sdW1lIC09IHBsYXllci5vcHRpb25zLnZvbHVtZS5zdGVwO1xuXG5cdFx0XHRcdHBsYXllci5zcGxhc2hJY29uLnNob3cocGxheWVyLmNhbGNWb2x1bWVJY29uKHBsYXllci52aWRlby52b2x1bWUpKTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0e1xuXHRcdFx0a2V5IDogNzAsXG5cdFx0XHRpbmZvIDogWydmJ10sXG5cdFx0XHRkZXNjcmlwdGlvbiA6ICfQntGC0LrRgNGL0YLRjC/Qt9Cw0LrRgNGL0YLRjCDQv9C+0LvQvdC+0Y3QutGA0LDQvdGL0Lkg0YDQtdC20LjQvCcsXG5cdFx0XHRmbiA6IChwbGF5ZXIpID0+IHtcblx0XHRcdFx0cGxheWVyLnRvZ2dsZUZ1bGxzY3JlZW4oKTtcblx0XHRcdH1cblx0XHR9XG5cdF0sXG5cdHBsdWdpbnMgOiB7XG5cdFx0bWluaXBsYXllciA6IHt9XG5cdH0sXG5cdG9uUGxheWVySW5pdGVkIDogbm9vcFxufTtcblxuLyoqXG4gKiBAY2xhc3MgUGxheWVyXG4gKiBAZXh0ZW5kcyBDb21wb25lbnRcbiAqIEBwYXJhbSB7alF1ZXJ5fSBlbGVtZW50IEVsZW1lbnQgd2hlbiBwbGF5ZXIgd2lsbCBpbml0XG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmF1dG9wbGF5PWZhbHNlXVxuICogV2hlbiBwcmVzZW50LCB0aGUgdmlkZW8gd2lsbCBhdXRvbWF0aWNhbGx5IHN0YXJ0IHBsYXlpbmcgYXMgc29vbiBhcyBpdCBjYW4gZG8gc28gd2l0aG91dCBzdG9wcGluZy5cbiAqIEBwYXJhbSB7U3RyaW5nfE51bWJlcn0gW29wdGlvbnMuaGVpZ2h0PSdhdXRvJ10gSGVpZ2h0IG9mIHZpZGVvIGNvbnRhaW5lclxuICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLndpZHRoXSBXaWR0aCBvZiB2aWRlbyBjb250YWluZXJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMubG9vcD1mYWxzZV1cbiAqIFdoZW4gcHJlc2VudCwgaXQgc3BlY2lmaWVzIHRoYXQgdGhlIHZpZGVvIHdpbGwgc3RhcnQgb3ZlciBhZ2FpbiwgZXZlcnkgdGltZSBpdCBpcyBmaW5pc2hlZC5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMubXV0ZWQ9ZmFsc2VdXG4gKiBXaGVuIHByZXNlbnQsIGl0IHNwZWNpZmllcyB0aGF0IHRoZSBhdWRpbyBvdXRwdXQgb2YgdGhlIHZpZGVvIHNob3VsZCBiZSBtdXRlZC5cbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5wcmVsb2FkPSdtZXRhZGF0YSddIENhbiBiZSAoJ2F1dG8nfCdtZXRhZGF0YSd8J25vbmUnKVxuICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLnBvc3Rlcl0gUGF0aCB0byBwb3N0ZXIgb2YgdmlkZW9cbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5zdmdQYXRoXSBQYXRoIHRvIHN2ZyBzcHJpdGUgZm9yIGljb25zXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMucmF0ZV0gUmF0ZSBvcHRpb25zXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMucmF0ZS5zdGVwPTAuMjVdIFN0ZXAgb2YgaW5jcmVhc2UvZGVjcmVhc2UgYnkgcmF0ZSBjb250cm9sXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMucmF0ZS5taW49MC41XSBNaW4gb2YgcmF0ZVxuICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLnJhdGUubWF4PTQuMF0gTWF4IG9mIHJhdGVcbiAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5yYXRlLmRlZmF1bHQ9MV1cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5wbGF5YmFja10gUGxheWJhY2sgb3B0aW9uc1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLnBsYXliYWNrLnN0ZXBdXG4gKiBAcGFyYW0ge051Ym1lcn0gW29wdGlvbnMucGxheWJhY2suc3RlcC5zaG9ydD01XVxuICogQHBhcmFtIHtOdWJtZXJ9IFtvcHRpb25zLnBsYXliYWNrLnN0ZXAubWVkaXVtPTMwXVxuICogQHBhcmFtIHtOdWJtZXJ9IFtvcHRpb25zLnBsYXliYWNrLnN0ZXAubG9uZz02MF1cbiAqIEBwYXJhbSB7T2JlamN0fSBbb3B0aW9ucy5jb250cm9sc10gT2JqZWN0IG9mIGNvbnRyb2xzXG4gKiBAcGFyYW0ge1N0cmluZ1tdfSBbb3B0aW9ucy5jb250cm9scy5jb21tb25dIEFycmF5IG9mIGNvbnRyb2xzIGZvciBkZWZhdWx0IHZpZXdcbiAqIEBwYXJhbSB7U3RyaW5nW119IFtvcHRpb25zLmNvbnRyb2xzLmZ1bGxzY3JlZW5dIEFycmF5IG9mIGNvbnRyb2wgZm9yIGZ1bGxzcmVlbiB2aWV3XG4gKiBAcGFyYW0ge1N0cmluZ1tdfSBbb3B0aW9ucy5jb250cm9scy5taW5pXSBBcnJheSBvZiBjb250cm9sIGZvciBtaW5pcGxheWVyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMuZXhjbHVkZUNvbnRyb2xzXSBPYmplY3Qgb2YgZXhjbHVkZSBjb250cm9scy4gU3RydWN0dXJlIGlzIHRoZSBzYW1lIGFzIHRoYXQgb2Ygb3B0aW9ucy5jb250cm9sc1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLnZvbHVtZV0gVm9sdW1lJ3Mgb3B0aW9uc1xuICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLnZvbHVtZS5kZWZhdWx0PTAuNF0gRGVmYXVsdCB2b2x1bWVcbiAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy52b2x1bWUubXV0ZWxpbWl0PTAuMDVdIERlbHRhIHdoZW4gdm9sdW1lIGlzIG11dGVkXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMudm9sdW1lLnN0ZXA9MC4wNV1cbiAqIEBwYXJhbSB7T2JqZWN0W119IFtvcHRpb25zLmtleWJpbmRpbmddXG4gKiBPYmplY3Qgd2l0aCBrZXliaW5kaW5nIG9wdGlvbnMsIHdoZW4ga2V5IGl0J3MgbmFtZSBvZiBrZXkgYmluZGluZywgYW5kIHZhbHVlIGl0J3Mga2V5IGJpbmRpbmcgc2V0dGluZ3NcbiAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5rZXliaW5kaW5nW10ua2V5XSBDb2RlIG9mIGtleSBiaW5kaW5nIChmb3IgZXhhbXBsZSAzMiBpdCdzIHNwYWNlKVxuICogQHBhcmFtIHtTdHJpbmdbXX0gW29wdGlvbnMua2V5YmluZGluZ1tdLmluZm9dIEFycmF5IG9mIGtleXN0cm9rZXMgb3JkZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSBvcHRpb25zLmtleWJpbmRpbmdbXS5kZXNjcmlwdGlvbl0gRGVzY3JpcHRpb24gb2Yga2V5IGJpbmRpbmdcbiAqIEBwYXJhbSB7RnVuY3Rpb259IG9wdGlvbnMua2V5YmluZGluZ1tdLmZuXSBDYWxsYmFja1xuICogQHBhcmFtIHtPYmplY3R8Qm9vbGVhbn0gW29wdGlvbnMubWluaXBsYXllcj1mYWxzZV1cbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5taW5pcGxheWVyLndpZHRoXSBXaWR0aCBvZiBtaW5pcGxheWVyIGNvbnRhaW5lclxuICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLm1pbmlwbGF5ZXIud2lkdGhdIE1pbmlQbGF5ZXIncyB3aWR0aFxuICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLnNlY3Rpb25Db250YWluZXJdIFNlbGVjdG9yIGZvciBzZWN0aW9uc1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLnBsdWdpbnNdIEtleXMgb2Ygb2JqZWN0cyBhcmUgbmFtZSBvZiBwbHVnaW4sIHZhbHVlIC0gcGx1Z2luIG9wdGlvbnNcbiAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH0gW29wdGlvbnMuZGF0YV0gVXJsIG9yIEpTT04gd2l0aCBkYXRhIGZvciBwbGF5ZXJcbiAqIEBwYXJhbSB7QXJyYXl9IFtvcHRpb25zLmRhdGEuc2VjdGlvbnNdIFNlY3Rpb25zIGFycmF5XG4gKi9cblxuY2xhc3MgUGxheWVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucykge1xuXG5cdFx0b3B0aW9ucy5jcmVhdGVFbGVtZW50ID0gZmFsc2U7XG5cblx0XHRzdXBlcihudWxsLCBvcHRpb25zKTtcblxuXHRcdHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xuXG5cdFx0LyoqXG5cdFx0ICogRE9NIGNvbnRhaW5lciB0byBob2xkIGlubmVyIG9mIHBsYXllclxuXHRcdCAqXG5cdFx0ICogQG1lbWJlcm9mISBQbGF5ZXIjXG5cdFx0ICogQHR5cGUge2pRdWVyeX1cblx0XHQgKi9cblx0XHR0aGlzLmlubmVyRWxlbWVudCA9IGNyZWF0ZUVsKCdkaXYnKTtcblxuXHRcdC8vIFVzZXJzIG9wdGlvbnNcblx0XHR0aGlzLl91c2VyT3B0aW9ucyA9IG9wdGlvbnM7XG5cdFx0dGhpcy5faW5pdE9wdGlvbnMoKTtcblxuXHRcdGlmKHRoaXMub3B0aW9ucy5zdmdQYXRoID09PSAnJykge1xuXHRcdFx0UGxheWVyLl9sb2FkU1ZHU3ByaXRlKFBsYXllci5kZWZhdWx0U3ByaXRlKTtcblx0XHR9XG5cblx0XHR0aGlzLl92aWV3ID0gJ2NvbW1vbic7XG5cblx0XHQvKipcblx0XHQgKiBET00gY29udGFpbmVyIHRvIGhvbGQgYWxsIHBsYXllclxuXHRcdCAqXG5cdFx0ICogQG1lbWJlcm9mISBQbGF5ZXIjXG5cdFx0ICogQHR5cGUge2pRdWVyeX1cblx0XHQgKi9cblx0XHR0aGlzLmVsZW1lbnQgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoKTtcblxuXHRcdHRoaXMubG9hZEVudGl0eSh0aGlzLm9wdGlvbnMuZW50aXR5LCB7IGN0eCA6IGVsZW1lbnQgfSk7XG5cdFx0LyoqXG5cdFx0ICogVmlkZW8gaHRtbDUgY29tcG9uZW50XG5cdFx0ICpcblx0XHQgKiBAbWVtYmVyb2YhIFBsYXllciNcblx0XHQgKiBAdHlwZSB7RW50aXR5fVxuXHRcdCAqL1xuXHRcdHRoaXMudmlkZW8gPSB0aGlzLmVudGl0eTtcblxuXHRcdC8vIENyZWF0ZSBjb250cm9sc1xuXHRcdC8vIFRPRE86IG1vdmUgdGhpcyBhY3Rpb24gdG8gdGhlIGNyZWF0ZUVsZW1lbnRcblx0XHR0aGlzLmNvbnRyb2xzID0ge307XG5cdFx0dGhpcy5faW5pdENvbnRyb2xzKCk7XG5cblx0XHQvKipcblx0XHQgKiBAYWNjZXNzIHByaXZhdGVcblx0XHQgKi9cblx0XHR0aGlzLl9kYmxjbGlja1RpbWVvdXQgPSBudWxsO1xuXG5cdFx0dGhpcy5faW5pdFNlY3Rpb25zKCkudGhlbigoZGF0YSkgPT4ge1xuXHRcdFx0dGhpcy5zZWN0aW9ucyA9IGRhdGEuc2VjdGlvbnNDb21wb25lbnQ7XG5cblx0XHRcdC8qKlxuXHRcdFx0ICogU2VjdGlvbnMgaW5pdCBldmVudFxuXHRcdFx0ICpcblx0XHRcdCAqIEBldmVudCBQbGF5ZXIjc2VjdGlvbnNpbml0XG5cdFx0XHQgKiBAZXhhbXBsZVxuXHRcdFx0ICogY29uc3QgcGxheWVyID0gbmV3IFBsYXllcigkKCcjdmlkZW8nKSwgb3B0aW9ucyk7XG5cdFx0XHQgKiBwbGF5ZXIub24oJ3NlY3Rpb25zaW5pdCcsIChlLCBkYXRhKSA9PiBjb3Nub2xlLmxvZyhkYXRhKSk7XG5cdFx0XHQgKlxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLnRyaWdnZXIoJ3NlY3Rpb25zaW5pdCcsIGRhdGEpO1xuXHRcdH0pO1xuXHRcdHRoaXMuX2luaXRQbHVnaW5zKCk7XG5cblx0XHR0aGlzLl9saXN0ZW5Ib3RLZXlzKCk7XG5cblx0XHR0aGlzLl91c2VyQWN0aXZpdHkgPSBmYWxzZTtcblx0XHR0aGlzLl9saXN0ZW5Vc2VyQWN0aXZpdHkoKTtcblxuXHRcdHRoaXMuX3dhaXRpbmdUaW1lb3V0cyA9IFtdO1xuXG5cdFx0LyogUmV0cmlnZ2VyIHtAbGluayBFbnRpdHl9IEV2ZW50cyAqL1xuXHRcdFtcblx0XHRcdC8qKlxuXHRcdFx0ICogZHVyYXRpb25jaGFuZ2UgcGxheWVyIGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciNkdXJhdGlvbmNoYW5nZVxuXHRcdFx0ICovXG5cdFx0XHQnZHVyYXRpb25jaGFuZ2UnLFxuXG5cdFx0XHQvKipcblx0XHRcdCAqIHByb2dyZXNzIGh0bWw1IG1lZGlhIGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciNwcm9ncmVzc1xuXHRcdFx0ICovXG5cdFx0XHQncHJvZ3Jlc3MnLFxuXG5cdFx0XHQvKipcblx0XHRcdCAqIGRibGNsaWNrXG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciNkYmNsaWNrXG5cdFx0XHQgKi9cblx0XHRcdCdkYmxjbGljaycsXG5cblx0XHRcdC8qKlxuXHRcdFx0ICogZGJsY2xpY2tcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI2RiY2xpY2tcblx0XHRcdCAqL1xuXHRcdFx0J2NsaWNrJyxcblxuXG5cdFx0XHQvKipcblx0XHRcdCAqIGNhbnBsYXkgaHRtbDUgbWVkaWEgZXZlbnRcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI2NhbnBsYXlcblx0XHRcdCAqL1xuXHRcdFx0J2NhbnBsYXknLFxuXG5cdFx0XHQvKipcblx0XHRcdCAqIHF1YWxpdHljaGFuZ2UgaHRtbDVcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI3F1YWxpdHljaGFuZ2Vcblx0XHRcdCAqL1xuXHRcdFx0J3F1YWxpdHljaGFuZ2UnXG5cblxuXHRcdF0uZm9yRWFjaChldmVudE5hbWUgPT4ge1xuXHRcdFx0dGhpcy52aWRlby5vbihldmVudE5hbWUsICgpID0+IHtcblx0XHRcdFx0dGhpcy50cmlnZ2VyKGV2ZW50TmFtZSk7XG5cdFx0XHR9KVxuXHRcdH0pO1xuXG5cdFx0dGhpcy52aWRlby5vbmUoJ3BsYXknLCAoKSA9PiB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEZpcnN0IHBsYXkgZXZlbnRcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAZXZlbnQgUGxheWVyI2ZpcnN0cGxheVxuICAgICAgICAgICAgICovXG5cdFx0XHR0aGlzLnRyaWdnZXIoJ2ZpcnN0cGxheScpO1xuXHRcdFx0dGhpcy5yZW1vdmVDbGFzcygnbGVwbGF5ZXItLXZpcmdpbicpO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy52aWRlby5vbigndGltZXVwZGF0ZScsICgpID0+IHtcblx0XHRcdGlmICh0aGlzLnZpZGVvLmN1cnJlbnRUaW1lID4gMCkge1xuXHRcdFx0XHR0aGlzLnJlbW92ZUNsYXNzKCdsZXBsYXllci0tdmlyZ2luJyk7XG5cdFx0XHR9XG5cblx0XHRcdC8qKlxuXHRcdFx0ICogdGltZXVwZGF0ZSBodG1sNSBtZWRpYSBldmVudFxuXHRcdFx0ICpcblx0XHRcdCAqIEBldmVudCBQbGF5ZXIjdGltZXVwZGF0ZVxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLnRyaWdnZXIoJ3RpbWV1cGRhdGUnLCB7IHRpbWUgOiB0aGlzLnZpZGVvLmN1cnJlbnRUaW1lLCBkdXJhdGlvbiA6IHRoaXMudmlkZW8uZHVyYXRpb24gfSk7XG5cblx0XHR9KVxuXG5cdFx0dGhpcy52aWRlby5vbignbG9hZHN0YXJ0JywgKCkgPT4ge1xuXHRcdFx0dGhpcy5yZW1vdmVDbGFzcygnbGVwbGF5ZXItLWVuZGVkJyk7XG5cblx0XHRcdHRoaXMuZXJyb3IgPSBudWxsO1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBsb2Fkc3RhcnQgcGxheWVyIGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciNsb2Fkc3RhcnRcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdsb2Fkc3RhcnQnKTtcblx0XHR9KTtcblxuXHRcdHRoaXMudmlkZW8ub24oJ3NlZWtpbmcnLCAoKSA9PiB7XG5cdFx0XHR0aGlzLl9zdGFydFdhaXRpbmcoKTtcblx0XHRcdC8qKlxuXHRcdFx0ICogc2Vla2luZyBodG1sNSBtZWRpYSBldmVudFxuXHRcdFx0ICpcblx0XHRcdCAqIEBldmVudCBQbGF5ZXIjc2Vla2luZ1xuXHRcdFx0ICovXG5cdFx0XHR0aGlzLnRyaWdnZXIoJ3NlZWtpbmcnKTtcblx0XHR9KTtcblxuXHRcdHRoaXMudmlkZW8ub24oJ3NlZWtlZCcsICgpID0+IHtcblx0XHRcdHRoaXMuX3N0b3BXYXl0aW5nKCk7XG5cdFx0XHQvKipcblx0XHRcdCAqIHNlZWtlZCBodG1sNSBtZWRpYSBldmVudFxuXHRcdFx0ICpcblx0XHRcdCAqIEBldmVudCBQbGF5ZXIjc2Vla2VkXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMudHJpZ2dlcignc2Vla2VkJyk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLnZpZGVvLm9uKCd2b2x1bWVjaGFuZ2UnLCAoKSA9PiB7XG5cdFx0XHQvKipcblx0XHRcdCAqIHZvbHVtZWNoYW5nZSBodG1sNSBtZWRpYSBldmVudFxuXHRcdFx0ICpcblx0XHRcdCAqIEBldmVudCBQbGF5ZXIjdm9sdW1lY2hhbmdlXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMudHJpZ2dlcigndm9sdW1lY2hhbmdlJywgeyB2b2x1bWUgOiB0aGlzLnZpZGVvLnZvbHVtZSB9KTtcblx0XHR9KTtcblxuXHRcdHRoaXMudmlkZW8ub24oJ3Bvc3RlcmNoYW5nZScsIChlLCBkYXRhKSA9PiB7XG5cdFx0XHRjb25zdCB1cmwgPSBkYXRhLnVybDtcblx0XHRcdHRoaXMucG9zdGVyLnVybCA9IHVybDtcblx0XHRcdHRoaXMudHJpZ2dlcigncG9zdGVyY2hhbmdlJyk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLnZpZGVvLm9uKCdwbGF5JywgKGUpID0+IHtcblx0XHRcdHRoaXMucmVtb3ZlQ2xhc3MoJ2xlcGxheWVyLS1lbmRlZCcpO1xuXHRcdFx0dGhpcy5yZW1vdmVDbGFzcygnbGVwbGF5ZXItLXBhdXNlZCcpO1xuXHRcdFx0dGhpcy5hZGRDbGFzcygnbGVwbGF5ZXItLXBsYXlpbmcnKTtcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBwbGF5IGh0bWw1IG1lZGlhIGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciNwbGF5XG5cdFx0XHQgKi9cblx0XHRcdHRoaXMudHJpZ2dlcigncGxheScpO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy52aWRlby5vbigncGF1c2UnLCAoKSA9PiB7XG5cdFx0XHR0aGlzLnJlbW92ZUNsYXNzKCdsZXBsYXllci0tcGxheWluZycpO1xuXHRcdFx0dGhpcy5hZGRDbGFzcygnbGVwbGF5ZXItLXBhdXNlZCcpO1xuXG5cdFx0XHQvKipcblx0XHRcdCAqIHBhdXNlIGh0bWw1IG1lZGlhIGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciNwYXVzZVxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLnRyaWdnZXIoJ3BhdXNlJyk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLnZpZGVvLm9uKCdwbGF5aW5nJywgKCkgPT4ge1xuXHRcdFx0dGhpcy5fc3RvcFdheXRpbmcoKTtcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBwbGF5aW5nIGh0bWw1IG1lZGlhIGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciNwbGF5aW5nXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMudHJpZ2dlcigncGxheWluZycpO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy52aWRlby5vbigncmF0ZWNoYW5nZScsICgpID0+IHtcblx0XHRcdC8qKlxuXHRcdFx0ICogcmF0ZSBodG1sNSBtZWRpYSBldmVudFxuXHRcdFx0ICpcblx0XHRcdCAqIEBldmVudCBQbGF5ZXIjcmF0ZVxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLnRyaWdnZXIoJ3JhdGVjaGFuZ2UnLCB7IHJhdGUgOiB0aGlzLnZpZGVvLnJhdGUgfSk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLnZpZGVvLm9uKCdlbmRlZCcsICgpID0+IHtcblx0XHRcdHRoaXMuYWRkQ2xhc3MoJ2xlcGxheWVyLS1lbmRlZCcpO1xuXG5cdFx0XHRpZih0aGlzLm9wdGlvbnMubG9vcCkge1xuXHRcdFx0XHR0aGlzLmN1cnJlbnRUaW1lID0gMDtcblx0XHRcdFx0dGhpcy52aWRlby5wbGF5KCk7XG5cdFx0XHR9IGVsc2UgaWYgKCF0aGlzLnZpZGVvLnBhdXNlZCkge1xuXHRcdFx0XHR0aGlzLnZpZGVvLnBhdXNlKCk7XG5cdFx0XHR9XG5cblx0XHRcdC8qKlxuXHRcdFx0ICogZW5kZWQgaHRtbDUgbWVkaWEgZXZlbnRcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI2VuZGVkXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMudHJpZ2dlcignZW5kZWQnKTtcblx0XHR9KTtcblxuXHRcdHRoaXMudmlkZW8ub24oJ2NhbnBsYXl0aHJvdWdoJywgKCkgPT4ge1xuXHRcdFx0dGhpcy5fc3RvcFdheXRpbmcoKTtcblx0XHRcdC8qKlxuXHRcdFx0ICogY2FucGxheXRocm91Z2ggaHRtbDUgbWVkaWEgZXZlbnRcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI2NhbnBsYXl0aHJvdWdoXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMudHJpZ2dlcignY2FucGxheXRocm91Z2gnKTtcblx0XHR9KTtcblxuXHRcdHRoaXMudmlkZW8ub24oJ3dhaXRpbmcnLCAoKSA9PiB7XG5cdFx0XHR0aGlzLl9zdGFydFdhaXRpbmcoKTtcblxuXHRcdFx0dGhpcy52aWRlby5vbmUoJ3RpbWV1cGRhdGUnLCAoKSA9PiB0aGlzLl9zdG9wV2F5dGluZygpKTtcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiB3YWl0aW5nIGh0bWw1IG1lZGlhIGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciN3YWl0aW5nXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMudHJpZ2dlcignd2FpdGluZycpO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy52aWRlby5vbignZXJyb3InLCAoZSwgZGF0YSkgPT4ge1xuXHRcdFx0dGhpcy5lcnJvciA9IG5ldyBNZWRpYUVycm9yKGRhdGEuY29kZSk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLnZpZGVvLmluaXQoKS50aGVuKCgpID0+IHtcblx0XHRcdC8qKlxuXHRcdFx0ICogUGxheWVyIGluaXQgZXZlbnRcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI2luaXRlZFxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLnRyaWdnZXIoJ2luaXRlZCcpO1xuXG5cdFx0XHRpZih0aGlzLm9wdGlvbnMudGltZSkge1xuXHRcdFx0XHR0aGlzLmN1cnJlbnRUaW1lID0gdGhpcy5vcHRpb25zLnRpbWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmKHRoaXMudmlkZW8uc3JjICE9IG51bGwgJiYgdGhpcy5vcHRpb25zLmF1dG9wbGF5KSB7XG5cdFx0XHRcdHRoaXMucGxheSgpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cblx0XHR0aGlzLm9uKCdmdWxsc2NyZWVuY2hhbmdlJywgdGhpcy5fb25GdWxsc2NyZWVuQ2hhbmdlLmJpbmQodGhpcykpO1xuXHRcdHRoaXMub24oJ2NsaWNrJywgdGhpcy5fb25DbGljay5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLm9uKCdkYmxjbGljaycsIHRoaXMuX29uRGJjbGljay5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLm9uKCdpbml0ZWQnLCB0aGlzLl9vbkluaXRlZC5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLm9uKCdwbGF5JywgdGhpcy5fb25QbGF5LmJpbmQodGhpcykpO1xuXHRcdHRoaXMub24oJ3BhdXNlJywgdGhpcy5fb25QYXVzZS5iaW5kKHRoaXMpKTtcblxuXHRcdCQoZG9jdW1lbnQpLm9uKEZ1bGxzY3JlZW5BcGkuZnVsbHNjcmVlbmNoYW5nZSwgdGhpcy5fb25FbnRpdHlGdWxsc2NyZW5DaGFuZ2UuYmluZCh0aGlzKSk7XG5cdH1cblxuXHRnZXQgZW50aXR5KCkge1xuXHRcdHJldHVybiB0aGlzLl9lbnRpdHk7XG5cdH1cblxuXHRsb2FkRW50aXR5KG5hbWUsIG9wdGlvbnMpIHtcblx0XHRjb25zdCBFbnRpdHkgPSBQbGF5ZXIuZ2V0Q29tcG9uZW50KG5hbWUpO1xuXHRcdHRoaXMuX2VudGl0eSA9IG5ldyBFbnRpdHkodGhpcywgb3B0aW9ucyk7XG5cdH1cblxuXHQvKipcblx0ICogU3RhcnRzIHBsYXlpbmcgdGhlIHZpZGVvXG5cdCAqXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBleGFtcGxlXG5cdCAqIGNvbnN0IHBsYXllciA9IG5ldyBQbGF5ZXIoJChcIiN2aWRlb1wiKSxvcHRpb25zKTtcblx0ICogJCgnLnNvbWUtYnV0dG9uJykub24oJ2NsaWNrJywgKCkgPT4gcGxheWVyLnBsYXkoKSk7XG5cdCAqL1xuXHRwbGF5KCkge1xuXHRcdHJldHVybiB0aGlzLnZpZGVvLnBsYXkoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBQYXVzZXMgdGhlIGN1cnJlbnRseSBwbGF5aW5nIHZpZGVvXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqL1xuXHRwYXVzZSgpIHtcblx0XHRyZXR1cm4gdGhpcy52aWRlby5wYXVzZSgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRvZ2dsZSB0aGUgY3VycmVudGx5IHBsYXlpbmcgdmlkZW9cblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICovXG5cdHRvZ2dsZVBsYXkoKSB7XG5cdFx0cmV0dXJuIHRoaXMudmlkZW8udG9nZ2xlUGxheSgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEJlZ2luIGxvYWRpbmcgdGhlIHNyYyBkYXRhXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqL1xuXHRsb2FkKCkge1xuXHRcdHJldHVybiB0aGlzLnZpZGVvLmxvYWQoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBPbiBzZXQgdmlldyBjYWxsYmFja1xuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAcGFyYW0ge1N0cmluZ30gdmlldyBWaWV3IG5hbWVcblx0ICogQHJldHVybnMge1BsYXllcn0gdGhpc1xuXHQgKiBAZXhhbXBsZVxuXHQgKiBjb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyKCQoJyN2aWRlbycpLCBvcHRpb25zKTtcblx0ICogcGxheWVyLm9uU2V0VmlldygnbWluaScsICgpID0+IGNvbnNvbGUubG9nKCdNaW5pcGxheWVyIHllYWghJylcblx0ICogICAgIC5vblNldFZpZXcoJ2Z1bGxzY3JlZW4nLCAoKSA9PiBjb25zb2xlLmxvZygnRnVsbHNjcmVlbiBib29tIScpXG5cdCAqICAgICAub25TZXRWaWV3KCdjb21tb24nLCAoKSA9PiBjb25zb2xlLmxvZygnQ29tbW9uIHZpZXcgLSBsb2wnKTtcblx0ICovXG5cdG9uU2V0Vmlldyh2aWV3LCAuLi5hcmdzKSB7XG5cdFx0dGhpcy5vbihgc2V0dmlldy4ke3ZpZXd9YCwgLi4uYXJncyk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8qKlxuXHQgKiBPbiBkZWwgdmlldyBjYWxsYmFja1xuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAcGFyYW0ge1N0cmluZ30gdmlldyBWaWV3IG5hbWVcblx0ICogQHJldHVybnMge1BsYXllcn0gdGhpc1xuXHQgKiBAZXhhbXBsZVxuXHQgKiBjb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyKCQoJyN2aWRlbycpLCBvcHRpb25zKTtcblx0ICogcGxheWVyLm9uRGVsVmlldygnbWluaScsICgpID0+IGNvbnNvbGUubG9nKCdFeGl0IG1pbmlwbGF5ZXInKVxuXHQgKi9cblx0b25EZWxWaWV3KHZpZXcsIC4uLmFyZ3MpIHtcblx0XHR0aGlzLm9uKGBkZWx2aWV3LiR7dmlld31gLCAuLi5hcmdzKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBzb21lIGRhdGEgZm9yIHBsYXllclxuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAcmV0dXJucyB7alF1ZXJ5LnByb21pc2V9IFByb21pc2Vcblx0ICovXG5cdGdldERhdGEoKSB7XG5cdFx0Y29uc3QgZGZkID0gbmV3ICQuRGVmZXJyZWQoKTtcblxuXHRcdGlmICh0aGlzLl9kYXRhICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdGRmZC5yZXNvbHZlKHRoaXMuX2RhdGEpO1xuXHRcdFx0cmV0dXJuIGRmZC5wcm9taXNlKClcblx0XHR9XG5cblx0XHRpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5kYXRhID09PSAnc3RyaW5nJykge1xuXHRcdFx0cmV0dXJuICQuYWpheCh7XG5cdFx0XHRcdHVybCA6IHRoaXMub3B0aW9ucy5kYXRhLFxuXHRcdFx0XHRtZXRob2QgOiAnR0VUJyxcblx0XHRcdFx0ZGF0YVR5cGUgOiAnanNvbidcblx0XHRcdH0pLnByb21pc2UoKTtcblxuXHRcdH0gZWxzZSBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5kYXRhID09PSAnb2JqZWN0Jykge1xuXHRcdFx0ZGZkLnJlc29sdmUodGhpcy5vcHRpb25zLmRhdGEpO1xuXHRcdFx0cmV0dXJuIGRmZC5wcm9taXNlKClcblx0XHR9XG5cdH1cblxuXHRnZXRTZWN0aW9uRGF0YSgpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXREYXRhKClcblx0XHRcdC50aGVuKGRhdGEgPT4ge1xuXHRcdFx0XHRyZXR1cm4gZGF0YS5zZWN0aW9uc1xuXHRcdFx0fSlcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXF1ZXN0IGZ1bGxzY3JlZW5cblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQGZpcmVzIFBsYXllciNmdWxsc2NyZWVuY2hhbmdlXG5cdCAqL1xuXHRyZXF1ZXN0RnVsbHNjcmVlbigpIHtcblx0XHRjb25zdCBmc0FwaSA9IEZ1bGxzY3JlZW5BcGk7XG5cblx0XHRpZihmc0FwaS5yZXF1ZXN0RnVsbHNjcmVlbikge1xuXHRcdFx0Ly8gQ2FsbCBIVE1MNSBWaWRlbyBhcGkgcmVxdWVzdEZ1bGxzY3JlZW5cblx0XHRcdHRoaXMuZWxlbWVudFswXVtmc0FwaS5yZXF1ZXN0RnVsbHNjcmVlbl0oKTtcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBmdWxsc2NyZWVuY2hhbmdlIGh0bWw1IG1lZGlhIGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciNmdWxsc2NyZWVuY2hhbmdlXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMudHJpZ2dlcignZnVsbHNjcmVlbmNoYW5nZScsIHRydWUpO1xuXHRcdH0gZWxzZSBpZiAodGhpcy52aWRlby5zdXBwb3J0c0Z1bGxTY3JlZW4oKSkge1xuXHRcdFx0dGhpcy52aWRlby5lbnRlckZ1bGxzY3JlZW4oKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogRXhpdCBmdWxsc2NyZWVuXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBmaXJlcyBQbGF5ZXIjZnVsbHNjcmVlbmNoYW5nZVxuXHQgKi9cblx0ZXhpdEZ1bGxzY3JlZW4oKSB7XG5cdFx0Y29uc3QgZnNBcGkgPSBGdWxsc2NyZWVuQXBpO1xuXG5cdFx0aWYoZnNBcGkuZXhpdEZ1bGxzY3JlZW4pIHtcblx0XHRcdGRvY3VtZW50W2ZzQXBpLmV4aXRGdWxsc2NyZWVuXSgpO1xuXHRcdH0gZWxzZSBpZiAodGhpcy52aWRlby5zdXBwb3J0c0Z1bGxTY3JlZW4oKSkge1xuXHRcdFx0dGhpcy52aWRlby5leGl0RnVsbHNjcmVlbigpO1xuXHRcdH1cblxuXHRcdHRoaXMudHJpZ2dlcignZnVsbHNjcmVlbmNoYW5nZScsIGZhbHNlKTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIFRvZ2dsZSBmdWxsc2NyZWVuXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBmaXJlcyBQbGF5ZXIjZnVsbHNjcmVlbmNoYW5nZVxuXHQgKi9cblx0dG9nZ2xlRnVsbHNjcmVlbigpIHtcblx0XHRpZih0aGlzLnZpZXcgPT09ICdmdWxsc2NyZWVuJykge1xuXHRcdFx0dGhpcy5leGl0RnVsbHNjcmVlbigpXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucmVxdWVzdEZ1bGxzY3JlZW4oKVxuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgQ29udHJvbENvbGxlY3Rpb24gb2YgUGxheWVyIGJ5IG5hbWUgKGUueCAnY29tbW9uJywgJ2Z1bGxzY3JlZW4nKVxuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSAtIE5hbWUgb2YgQ29udHJvbENvbGxlY3Rpb25cblx0ICogQHJldHVybnMge0NvbnRyb2xDb2xsZWN0aW9ufVxuXHQgKi9cblx0Z2V0Q29udHJvbHMobmFtZSkge1xuXHRcdHJldHVybiB0aGlzLmNvbnRyb2xzW25hbWVdO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybiB0aGUgd2lkdGggb2YgcGxheWVyLlxuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAcmV0dXJucyB7TnVtYmVyfSBXaWR0aCBpbiBweFxuXHQgKi9cblx0Z2V0V2lkdGgoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudC53aWR0aCgpXG5cdH1cblxuXHQvKipcblx0ICogQ29tcGxldGUgdGhlIHNlY3Rpb25zLCBieSB0aGUgYWRkaXRpb25hbCBmaWVsZCAnZW5kJyBpbiBlYWNoIHNlY3Rpb25cblx0ICpcblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBzZWN0aW9ucyAtIFNlY3Rpb25zXG5cdCAqIEByZXR1cm5zIHtPYmplY3R9IE5ldyBzZWN0aW9uc1xuXHQgKi9cblx0X2NvbXBsZXRlU2VjdGlvbnMoc2VjdGlvbnMpIHtcblx0XHRpZiAoc2VjdGlvbnMgPT0gbnVsbCB8fCBzZWN0aW9ucy5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVyblxuXHRcdH1cblx0XHRsZXQgbmV3U2VjdGlvbnMgPSBbXS5jb25jYXQoc2VjdGlvbnMpXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBuZXdTZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuXHRcdFx0bGV0IGVuZFNlY3Rpb247XG5cdFx0XHRpZiAoaSA8IChuZXdTZWN0aW9ucy5sZW5ndGggLSAxKSkge1xuXHRcdFx0XHRlbmRTZWN0aW9uID0gbmV3U2VjdGlvbnNbaSsxXS5iZWdpblxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZW5kU2VjdGlvbiA9IHRoaXMudmlkZW8uZHVyYXRpb247XG5cdFx0XHR9XG5cdFx0XHRuZXdTZWN0aW9uc1tpXS5lbmQgPSBlbmRTZWN0aW9uO1xuXHRcdH1cblx0XHRyZXR1cm4gbmV3U2VjdGlvbnM7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGFuZCBzZXQgdGhlIGN1cnJlbnQgcGxheWJhY2sgcG9zaXRpb24gaW4gdGhlIGF1ZGlvL3ZpZGVvIChpbiBzZWNvbmRzKVxuXHQgKiBHZXR0ZXIgYW5kIHNldHRlclxuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAbWVtYmVyb2YhIFBsYXllciNcblx0ICogQHR5cGUge051Ym1lcn1cblx0ICovXG5cdGdldCBjdXJyZW50VGltZSgpIHtcblx0XHRyZXR1cm4gdGhpcy52aWRlby5jdXJyZW50VGltZTtcblx0fVxuXG5cdHNldCBjdXJyZW50VGltZSh2YWx1ZSkge1xuXHRcdHRoaXMudmlkZW8uY3VycmVudFRpbWUgPSB2YWx1ZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHRoZSBsZW5ndGggb2YgdGhlIGN1cnJlbnQgYXVkaW8vdmlkZW8gKGluIHNlY29uZHMpXG5cdCAqIEdldHRlclxuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAbWVtYmVyb2YhIFBsYXllciNcblx0ICogQHR5cGUge051Ym1lcn1cblx0ICovXG5cdGdldCBkdXJhdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy52aWRlby5kdXJhdGlvbjtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHdoZXRoZXIgdGhlIHBsYXliYWNrIG9mIHRoZSBhdWRpby92aWRlbyBoYXMgZW5kZWQgb3Igbm90XG5cdCAqIEdldHRlclxuXHQgKlxuXHQgKiBAbWVtYmVyb2YhIFBsYXllciNcblx0ICogQHR5cGUge0Jvb2xlYW59XG5cdCAqL1xuXHRnZXQgZW5kZWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMudmlkZW8uZW5kZWQ7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyBhbmQgc2V0IHdoZXRoZXIgdGhlIHBsYXliYWNrIG9mIHRoZSBhdWRpby92aWRlbyBoYXMgZW5kZWQgb3Igbm90XG5cdCAqIEdldHRlciBhbmQgc2V0dGVyXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBtZW1iZXJvZiEgUGxheWVyI1xuXHQgKiBAdHlwZSB7TWVkaWFFcnJvcnxTdHJpbmd9XG5cdCAqIEBmaXJlcyBQbGF5ZXIjZXJyb3Jcblx0ICovXG5cdGdldCBlcnJvcigpIHtcblx0XHRyZXR1cm4gdGhpcy5fZXJyb3IgfHwgbnVsbDtcblx0fVxuXG5cdHNldCBlcnJvcih2YWx1ZSkge1xuXHRcdGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuXHRcdFx0dGhpcy5fZXJyb3IgPSBudWxsO1xuXHRcdFx0dGhpcy5yZW1vdmVDbGFzcygnbGVwbGF5ZXItLWVycm9yJyk7XG5cdFx0XHRpZih0aGlzLmVycm9yRGlzcGxheSkge1xuXHRcdFx0XHR0aGlzLmVycm9yRGlzcGxheS5lbGVtZW50LmhpZGUoKVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXHRcdHRoaXMuX2Vycm9yID0gbmV3IE1lZGlhRXJyb3IodmFsdWUpO1xuXG5cdFx0dGhpcy5hZGRDbGFzcygnbGVwbGF5ZXItLWVycm9yJyk7XG5cblx0XHQvKipcblx0XHQgKiBlcnJvciBldmVudFxuXHRcdCAqXG5cdFx0ICogQGV2ZW50IFBsYXllciNlcnJvclxuXHRcdCAqIEBwcm9wZXJ0eSB7TWVkaWFFcnJvcn0gZXJyb3Jcblx0XHQgKiBAZXhhbXBsZVxuXHRcdCAqIGNvbnN0IHBsYXllciA9IG5ldyBQbGF5ZXIoJCgnI3ZpZGVvJyksIG9wdGlvbnMpO1xuXHRcdCAqIHBsYXllci5vbignZXJyb3InLCAoZSwgZGF0YSkgPT4gY29uc29sZS5lcnJvcihkYXRhLmVycm9yKSk7XG5cdFx0ICovXG5cdFx0dGhpcy50cmlnZ2VyKCdlcnJvcicsIHsgZXJyb3IgOiB0aGlzLl9lcnJvcn0pO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJuIHRoZSBoZWlnaHQgb2YgcGxheWVyLiBJZiB5b3Ugd2FudCBnZXQgaGVpZ2h0IG9ubHkgb2YgdmlkZW8gZWxlbWVudCwgdXNlIHRoaXMudmlkZW8uaGVpZ2h0IG9yIHdoYXRldmVyXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEB0eXBlIHtOdW1iZXJ9XG5cdCAqIEBtZW1iZXJvZiEgUGxheWVyI1xuXHQgKi9cblx0Z2V0IGhlaWdodCgpIHtcblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50LmhlaWdodCgpXG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJuIHVubmVjZXNzYXJ5IHZpZGVvIGhlaWd0aFxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAdHlwZSB7TnVtYmVyfVxuXHQgKiBAbWVtYmVyb2YhIFBsYXllciNcblx0ICovXG5cdGdldCB2aWRlb0hlaWdodCgpIHtcblx0XHRyZXR1cm4gdGhpcy52aWRlby5oZWlnaHQ7XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAdHlwZSB7Qm9vbGVhbn1cblx0ICogQG1lYm1lcm9mISBQbGF5ZXIjXG5cdCAqL1xuXHRnZXQgdXNlckFjdGl2ZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5fdXNlckFjdGl2ZSB8fCBmYWxzZTtcblx0fVxuXG5cdHNldCB1c2VyQWN0aXZlKHZhbHVlKSB7XG5cdFx0aWYodmFsdWUgIT09IHRoaXMuZ2V0VXNlckFjdGl2ZSkge1xuXHRcdFx0dGhpcy5fdXNlckFjdGl2ZSA9IHZhbHVlO1xuXHRcdFx0dGhpcy50b2dnbGVDbGFzcygnbGVwbGF5ZXItLXVzZXItYWN0aXZlJywgdmFsdWUpO1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBVc2VyIGFjdGl2ZSBldmVudFxuXHRcdFx0ICpcblx0XHRcdCAqIEBldmVudCBQbGF5ZXIjdXNlcmFjdGl2ZVxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLnRyaWdnZXIoJ3VzZXJhY3RpdmUnKTtcblx0XHR9XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBTZXQgYW5kIGdldCBwbGF5ZXIgdmlldy4gVmlldyBDYW4gYmUgJ2NvbW1vbicsICdmdWxsc2NyZWVuJywgJ21pbmknd1xuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAdHlwZSB7U3RyaW5nfVxuXHQgKiBAbWVtYmVyb2YhIFBsYXllciNcblx0ICovXG5cdGdldCB2aWV3KCkge1xuXHRcdHJldHVybiB0aGlzLl92aWV3O1xuXHR9XG5cblx0c2V0IHZpZXcodmlldykge1xuXHRcdGlmKHRoaXMudmlldyAhPSBudWxsKSB7XG5cdFx0XHR0aGlzLnJlbW92ZUNsYXNzKGBsZXBsYXllci0tJHt0aGlzLnZpZXd9YCk7XG5cdFx0XHR0aGlzLnRyaWdnZXIoYGRlbHZpZXcuJHt0aGlzLnZpZXd9YCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5fdmlldyA9IHZpZXc7XG5cdFx0dGhpcy5lbGVtZW50LmFkZENsYXNzKGBsZXBsYXllci0tJHt2aWV3fWApXG5cdFx0dGhpcy50cmlnZ2VyKGBzZXR2aWV3LiR7dmlld31gKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlbW92ZSB1bm5lY2Vzc2FyeSBhdHRyaWJ1dGVzLCBhbmQgc2V0IHNvbWUgYXR0cnMgZnJvbSBvcHRpb25zIChsb29wLCBwb3N0ZXIgZXRjLi4uKS4gQ3JlYXRlIG1haW4gRE9NIG9iamVjdHNcblx0ICpcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdGNvbnN0IG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG5cdFx0Y29uc3QgZWxlbWVudCA9IHRoaXMuX2VsZW1lbnQ7XG5cblx0XHR0aGlzLmVsZW1lbnQgPSBjcmVhdGVFbCgnZGl2Jyk7XG5cblxuXHRcdHRoaXMuZWxlbWVudCA9IHRoaXMuZWxlbWVudFxuXHRcdFx0LmFkZENsYXNzKCdsZXBsYXllcicpXG5cdFx0XHQuYXR0cigndGFiaW5kZXgnLCAwKVxuXHRcdFx0LmNzcygnd2lkdGgnLCBvcHRpb25zLndpZHRoICYmICcxMDAlJylcblx0XHRcdC5jc3MoJ21heC13aWR0aCcsIG9wdGlvbnMud2lkdGgpXG5cblx0XHQvKipcblx0XHQgKiBFcnJvciBkaXNwbGF5IGNvbXBvbmVudC5cblx0XHQgKlxuXHRcdCAqIEB0eXBlIHtFcnJvckRpc3BsYXl9XG5cdFx0ICogQG1lbWJlcm9mISBQbGF5ZXIjXG5cdFx0ICovXG5cdFx0dGhpcy5lcnJvckRpc3BsYXkgPSBuZXcgRXJyb3JEaXNwbGF5KHRoaXMpO1xuXG5cblx0XHQvKipcblx0XHQgKiBQbGF5IGJ1dHRvbiBjb21wb25lbnQuXG5cdFx0ICpcblx0XHQgKiBAdHlwZSB7UGxheUJ1dHRvbn1cblx0XHQgKiBAbWVtYmVyb2YhIFBsYXllciNcblx0XHQgKi9cblx0XHR0aGlzLnBsYXlCdXR0b24gPSBuZXcgUGxheUJ1dHRvbih0aGlzKTtcblxuXHRcdC8vIFRPRE86INCS0YvQvdC10YHRgtC4INGN0YLQviDQsiDQvtGC0LTQtdC70YzQvdC10YvQuSDQutC+0LzQv9C+0L3QtdC90YJcblx0XHR0aGlzLmxvYWRlciA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0LmFkZENsYXNzKCdsZXBsYXllci1sb2FkZXItY29udGFpbmVyJylcblx0XHRcdC5hcHBlbmQobmV3IEljb24odGhpcywge1xuXHRcdFx0XHRpY29uTmFtZSA6ICdyZWZyZXNoJyxcblx0XHRcdFx0Y2xhc3NOYW1lIDogJ2xlcGxheWVyLWxvYWRlci1jb250YWluZXJfX2ljb24nXG5cdFx0XHR9KS5lbGVtZW50KTtcblxuXG5cdFx0LyoqXG5cdFx0ICogU3BsYXNoIGljb24gY29tcG9uZW50LlxuXHRcdCAqXG5cdFx0ICogQHR5cGUge1NwbGFzaEljb259XG5cdFx0ICogQG1lbWJlcm9mISBQbGF5ZXIjXG5cdFx0ICovXG5cdFx0dGhpcy5zcGxhc2hJY29uID0gbmV3IFNwbGFzaEljb24odGhpcyk7XG5cblx0XHR0aGlzLnZpZGVvQ29udGFpbmVyID0gY3JlYXRlRWwoJ2RpdicsIHtcblx0XHRcdGNsYXNzTmFtZSA6ICdsZXBsYXllci12aWRlbydcblx0XHR9KVxuXHRcdC5hcHBlbmQodGhpcy5lcnJvckRpc3BsYXkuZWxlbWVudClcblx0XHQuYXBwZW5kKHRoaXMucGxheUJ1dHRvbi5lbGVtZW50KVxuXHRcdC5hcHBlbmQodGhpcy5sb2FkZXIpXG5cdFx0LmFwcGVuZCh0aGlzLnNwbGFzaEljb24uZWxlbWVudClcblxuXHRcdHRoaXMucG9zdGVyID0gbmV3IFBvc3Rlcih0aGlzKTtcblx0XHR0aGlzLnZpZGVvQ29udGFpbmVyLmFwcGVuZCh0aGlzLnBvc3Rlci5lbGVtZW50KTtcblxuXG5cdFx0Y29uc3QgbGFzdFRpbWVyID0gbmV3IFRpbWUodGhpcywge1xuXHRcdFx0Zm4gOiAocGxheWVyKSA9PiB7XG5cdFx0XHRcdGNvbnN0IHZpZGVvID0gcGxheWVyLnZpZGVvO1xuXHRcdFx0XHRyZXR1cm4gc2Vjb25kc1RvVGltZSh2aWRlby5kdXJhdGlvbiAtIHZpZGVvLmN1cnJlbnRUaW1lKTtcblx0XHRcdH1cblx0XHR9KVxuXG5cdFx0aWYodGhpcy5vcHRpb25zLnZpZGVvSW5mbykge1xuXHRcdFx0Y29uc29sZS53YXJuKCdvcHRpb25zLnZpZGVvSW5mbyBpcyBkZXByZWNhdGVkLCBwbGVhc2UgdXNlIGlzdGVhZCBvcHRpb25zLmRlc2NyaXB0aW9uJyk7XG5cdFx0fVxuXG5cdFx0dGhpcy5pbmZvRWxlbWVudCA9IGNyZWF0ZUVsKCdkaXYnLCB7XG5cdFx0XHRjbGFzc05hbWUgOiAnbGVwbGF5ZXJfX2luZm8nXG5cdFx0fSlcblx0XHQuYXBwZW5kKGNyZWF0ZUVsKCdkaXYnLCB7XG5cdFx0XHRjbGFzc05hbWUgOiAnbGVwbGF5ZXJfX3RpdGxlJyxcblx0XHRcdGh0bWwgOiB0aGlzLm9wdGlvbnMudGl0bGUgfHwgXCJcIlxuXHRcdH0pKVxuXHRcdC5hcHBlbmQoY3JlYXRlRWwoJ2RpdicsIHtcblx0XHRcdGNsYXNzTmFtZSA6ICdsZXBsYXllcl9fdmlkZW8taW5mbycsXG5cdFx0XHRodG1sIDogdGhpcy5vcHRpb25zLmRlc2NyaXB0aW9uIHx8IHRoaXMub3B0aW9ucy52aWRlb0luZm8gfHwgXCJcIlxuXHRcdH0pKVxuXHRcdC5hcHBlbmQoY3JlYXRlRWwoJ2RpdicsIHtcblx0XHRcdGNsYXNzTmFtZSA6ICdsZXBsYXllcl9fbGFzdCcsXG5cdFx0XHRodG1sIDogYNCS0LjQtNC10L4g0LfQsNC60L7QvdGH0LjRgtGB0Y8g0YfQtdGA0LXQtyBgLFxuXHRcdH0pLmFwcGVuZChsYXN0VGltZXIuZWxlbWVudCkpXG5cblx0XHR0aGlzLmlubmVyRWxlbWVudCA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0LmFkZENsYXNzKCdsZXBsYXllcl9faW5uZXInKVxuXHRcdFx0LmFwcGVuZCh0aGlzLnZpZGVvQ29udGFpbmVyKVxuXHRcdFx0LmFwcGVuZCh0aGlzLmluZm9FbGVtZW50KVxuXG5cdFx0dGhpcy5lbGVtZW50ID0gdGhpcy5lbGVtZW50XG5cdFx0XHQuYXBwZW5kKHRoaXMuaW5uZXJFbGVtZW50KVxuXG5cdFx0dGhpcy5hZGRDbGFzcygnbGVwbGF5ZXItLXBhdXNlZCcpO1xuXHRcdHRoaXMuYWRkQ2xhc3MoJ2xlcGxheWVyLS12aXJnaW4nKTtcblxuXG5cdFx0aWYob3B0aW9ucy5zZWN0aW9uQ29udGFpbmVyKSB7XG5cdFx0XHR0aGlzLnNlY3Rpb25zQ29udGFpbmVyID0gJChvcHRpb25zLnNlY3Rpb25Db250YWluZXIpO1xuXHRcdH1cblxuXHRcdGVsZW1lbnQuYmVmb3JlKHRoaXMuZWxlbWVudCk7XG5cdFx0dGhpcy52aWRlb0NvbnRhaW5lci5hcHBlbmQoZWxlbWVudCk7XG5cblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50O1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBvcHRpb25zIGZyb20gdmlkZW8ncyBhdHRyaWJ1dGUgKCBoZWlnaHQsIHdpZHRoLCBwb3N0ZXIsIHByZWxvYWQgZXRjLi4uKVxuXHQgKiBHZXQgc291cmNlIHZpZGVvIGZyb20gc3JjIGF0dHIgb3IgPHNvdXJjZT4gZWxlbWVudCB3aXRoIGRhdGEgYXR0ciAnZGF0YS1xdWFsaXR5J1xuXHQgKiBBbHNvIGdldCBzb3VyY2VzIGZvciBkaWZmZXJlbnQgcXVhbGl0eSBmcm9tIDxzb3VyY2U+IGVsZW1lbnQgd2l0aCBkYXRhIGF0dHIgJ2RhdGEtcXVhbGl0eSdcblx0ICpcblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqIEByZXR1cm5zIHtPYmplY3R9IG9wdGlvbnNcblx0ICovXG5cdF9vcHRpb25zRnJvbUVsZW1lbnQoKSB7XG5cdFx0Ly8gQ29weSB2aWRlbyBhdHRycyB0byB0aGUgb3BpdG9uc1xuXHRcdGNvbnN0ICBlbGVtZW50ID0gdGhpcy5fZWxlbWVudDtcblx0XHRpZiAoZWxlbWVudCA9PSBudWxsIHx8IGVsZW1lbnQubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm4ge31cblx0XHR9XG5cblx0XHRsZXQgYXR0ck9wdGlvbnMgPSBbXG5cdFx0XHQnaGVpZ2h0Jyxcblx0XHRcdCd3aWR0aCcsXG5cdFx0XHQncG9zdGVyJyxcblx0XHRcdCdhdXRvcGxheScsXG5cdFx0XHQnbG9vcCcsXG5cdFx0XHQnbXV0ZWQnLFxuXHRcdFx0J3ByZWxvYWQnLFxuXHRcdF1cblx0XHQucmVkdWNlKChvYmosIGl0ZW0pID0+IHtcblx0XHRcdGNvbnN0IHZhbCA9IGVsZW1lbnQuYXR0cihpdGVtKTtcblx0XHRcdGlmKHZhbCAhPSBudWxsKSB7XG5cdFx0XHRcdG9ialtpdGVtXSA9IGVsZW1lbnQuYXR0cihpdGVtKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBvYmo7XG5cdFx0fSwge30pO1xuXG5cdFx0YXR0ck9wdGlvbnMuc291cmNlcyA9IFtdO1xuXG5cdFx0Ly8gU3JjIGl0IGlzIG1haW4gc291cmNlLCB0aGF0IHdpbGwgYmUgbG9hZFxuXHRcdGlmKGVsZW1lbnQuYXR0cignc3JjJykpIHtcblx0XHRcdGF0dHJPcHRpb25zLnNyYyA9IHtcblx0XHRcdFx0dXJsIDogZWxlbWVudC5hdHRyKCdzcmMnKSxcblx0XHRcdFx0dGl0bGUgOiBlbGVtZW50LmF0dHIoJ2RhdGEtcXVhbGl0eScpIHx8IGVsZW1lbnQuYXR0cigndGl0bGUnKSB8fCAnZGVmYXVsdCdcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBDb3B5IHNvdXJjZXMgZnJvbSBIVE1MNSBzb3VyY2UgZWxlbWVudCB3aXRoIGRhdGEtcXVhbGl0eSBhdHRyXG5cdFx0Ly8gSWYgZGF0YS1xdWFsaXR5IGF0dHIgZG9lcyBub3QgZXhpc3QgLSBub1xuXHRcdGVsZW1lbnQuZmluZCgnc291cmNlJykuZWFjaCgoaSwgaXRlbSkgPT4ge1xuXHRcdFx0aXRlbSA9ICQoaXRlbSk7XG5cdFx0XHRpZighaXRlbS5hdHRyKCdkYXRhLXF1YWxpdHknKSkge1xuXHRcdFx0XHRyZXR1cm5cblx0XHRcdH1cblx0XHRcdGF0dHJPcHRpb25zLnNvdXJjZXMgPSBhdHRyT3B0aW9ucy5zb3VyY2VzLmNvbmNhdCh7XG5cdFx0XHRcdHVybCA6IGl0ZW0uYXR0cignc3JjJyksXG5cdFx0XHRcdHRpdGxlIDogaXRlbS5hdHRyKCdkYXRhLXF1YWxpdHknKSB8fCBpdGVtLmF0dHIoJ3RpdGxlJykgfHwgJ2RlZmF1bHQnXG5cdFx0XHR9KVxuXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gYXR0ck9wdGlvbnM7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJuIGEgbmFtZSBvZiBpY29uLiBJZiBsZXNzIHRoZW4gMC4xIHJldHVybiB2b2x1bWUtb2ZmLFxuXHQgKiBpZiBsZXNzIHRoZW4gMC41IHJldHVybiB2b2x1bWUgZG93biwgZWxzZSByZXR1cm4gdm9sdW1lLXVwXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge051bWJlcn0gdmFsdWUgVm9sdW1lIHZhbHVlXG5cdCAqIEByZXR1cm5zIHtTdHJpbmd9IEljb24gbmFtZVxuXHQgKi9cblx0Y2FsY1ZvbHVtZUljb24odmFsdWUpIHtcblx0XHRpZih2YWx1ZSA9PSBudWxsKSB7XG5cdFx0XHR2YWx1ZSA9IHRoaXMudmlkZW8udm9sdW1lO1xuXHRcdH1cblx0XHRjb25zdCB2b2x1bWUgPSB2YWx1ZTtcblxuXHRcdGlmICh2b2x1bWUgPCB0aGlzLm9wdGlvbnMudm9sdW1lLm11dGVsaW1pdCkge1xuXHRcdFx0cmV0dXJuICd2b2x1bWUtb2ZmJztcblx0XHR9IGVsc2UgaWYgKHZhbHVlIDwgMC41KSB7XG5cdFx0XHRyZXR1cm4gJ3ZvbHVtZS1kb3duJztcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuICd2b2x1bWUtdXAnO1xuXHRcdH1cblx0fVxuXG5cblxuXHQvKipcblx0ICogTWVyZ2UgZGVmYXVsdE9wdGlvbnMsIHByZXNldE9wdGlvbnMgd2l0aCBhdHRyT3B0aW9ucyBhbmQgdXNlcidzIG9wdGlvbnM7XG5cdCAqXG5cdCAqIEFuZCBjb21wbGVtZW50IHR3byBvYmplY3RzOiBjb250cm9scyBhbmQgZXhjbHVkZUNvbnRyb2xzXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHQgKi9cblx0X2luaXRPcHRpb25zKCkge1xuXHRcdGNvbnN0IGF0dHJPcHRpb25zID0gdGhpcy5fb3B0aW9uc0Zyb21FbGVtZW50KCk7XG5cdFx0bGV0IHByZXNldE9wdGlvbnMgPSB7fTtcblxuXHRcdGlmICh0aGlzLl91c2VyT3B0aW9ucy5wcmVzZXQgJiYgUGxheWVyLmdldFByZXNldCh0aGlzLl91c2VyT3B0aW9ucy5wcmVzZXQpKSB7XG5cdFx0XHRwcmVzZXRPcHRpb25zID0gUGxheWVyLmdldFByZXNldCh0aGlzLl91c2VyT3B0aW9ucy5wcmVzZXQpLm9wdGlvbnM7XG5cdFx0fVxuXG5cblx0XHQvLyBNZXJnZSBkZWZhdWx0IG9wdGlvbnMgKyBwcmVzZXQgb3B0aW9ucyArIHZpZGVvIGF0dHJpYnV0dHMrIHVzZXIgb3B0aW9uc1xuXHRcdHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHRydWUsIHt9LCBkZWZhdWx0T3B0aW9ucywgcHJlc2V0T3B0aW9ucywgYXR0ck9wdGlvbnMsIHRoaXMuX3VzZXJPcHRpb25zKTtcblxuXHRcdGlmKHRoaXMub3B0aW9ucy5zb3VyY2VzICYmICFBcnJheS5pc0FycmF5KHRoaXMub3B0aW9ucy5zb3VyY2VzKSkge1xuXHRcdFx0dGhpcy5vcHRpb25zLnNvdXJjZXMgPSBbdGhpcy5vcHRpb25zLnNvdXJjZXNdXG5cdFx0fVxuXG5cdFx0aWYodHlwZW9mIHRoaXMub3B0aW9ucy5zcmMgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHR0aGlzLm9wdGlvbnMuc3JjID0geyB1cmwgOiB0aGlzLm9wdGlvbnMuc3JjIH1cblx0XHR9XG5cblx0XHRpZih0aGlzLm9wdGlvbnMuc3JjID09IG51bGwgJiYgdGhpcy5vcHRpb25zLnNvdXJjZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0dGhpcy5vcHRpb25zLnNyYyA9IHRoaXMub3B0aW9ucy5zb3VyY2VzWzBdXG5cdFx0fVxuXG5cdFx0Ly8gTWVyZ2UgY29ycmVjdGx5IGNvbnRyb2xzLCB3aXRob3V0IGRlZXAgbWVyZ2Vcblx0XHR0aGlzLm9wdGlvbnMuY29udHJvbHMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdE9wdGlvbnMuY29udHJvbHMsIHByZXNldE9wdGlvbnMuY29udHJvbHMsIHRoaXMuX3VzZXJPcHRpb25zLmNvbnRyb2xzKTtcblxuXHRcdC8vIGV4Y2x1ZGUgY29udHJvbHMgb3B0aW9uXG5cdFx0Ly8gVE9ETyhhZGludmFkaW0pOlxuXHRcdC8vIFNldCBkZXByZWNldGVkIGZsYWcgZm9yIHRoaXMgb3B0aW9uO1xuXHRcdGZvciAoY29uc3QgbmFtZSBpbiB0aGlzLm9wdGlvbnMuZXhjbHVkZUNvbnRyb2xzKSB7XG5cdFx0XHRpZiAoIXRoaXMub3B0aW9ucy5leGNsdWRlQ29udHJvbHMuaGFzT3duUHJvcGVydHkobmFtZSkpIHJldHVybjtcblx0XHRcdGNvbnN0IGNvbnRyb2xDb2xsZWN0aW9uID0gdGhpcy5vcHRpb25zLmV4Y2x1ZGVDb250cm9sc1tuYW1lXTtcblx0XHRcdGNvbnRyb2xDb2xsZWN0aW9uLmZvckVhY2goKHJvdywgaW5kZXgpID0+IHtcblx0XHRcdFx0aWYgKHRoaXMub3B0aW9ucy5jb250cm9sc1tuYW1lXSAmJiB0aGlzLm9wdGlvbnMuY29udHJvbHNbbmFtZV1baW5kZXhdKSB7XG5cdFx0XHRcdFx0dGhpcy5vcHRpb25zLmNvbnRyb2xzW25hbWVdW2luZGV4XSA9IGV4Y2x1ZGVBcnJheSh0aGlzLm9wdGlvbnMuY29udHJvbHNbbmFtZV1baW5kZXhdLCByb3cpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdH1cblxuXHRcdGlmICh0aGlzLm9wdGlvbnMucHJlc2V0ICYmIFBsYXllci5nZXRQcmVzZXQodGhpcy5vcHRpb25zLnByZXNldCkpIHtcblx0XHRcdFBsYXllci5nZXRQcmVzZXQodGhpcy5vcHRpb25zLnByZXNldCkuaW5pdE9wdGlvbnMoKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQ3JlYXRlIGFuZCBpbml0IGFsbCBjb250cm9sc1xuXHQgKlxuXHQgKiBAYWNjZXNzIHByaXZhdGVcblx0ICovXG5cdF9pbml0Q29udHJvbHMoKSB7XG5cdFx0Zm9yIChjb25zdCBuYW1lIG9mIFsnY29tbW9uJywgJ2Z1bGxzY3JlZW4nXSkge1xuXHRcdFx0aWYgKCF0aGlzLm9wdGlvbnMuY29udHJvbHMuaGFzT3duUHJvcGVydHkobmFtZSkpIHJldHVybjtcblx0XHRcdGNvbnN0IGNvbnRyb2xDb2xsZWN0aW9uID0gbmV3IENvbnRyb2xDb2xsZWN0aW9uKHRoaXMsIHsgbmFtZSB9KTtcblx0XHRcdHRoaXMuZWxlbWVudC5hcHBlbmQoY29udHJvbENvbGxlY3Rpb24uZWxlbWVudCk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuY29udHJvbHMuY29tbW9uICE9IG51bGwpIHtcblx0XHRcdHRoaXMuY29udHJvbHMuY29tbW9uLmFjdGl2ZSA9IHRydWU7XG5cdFx0fVxuXHR9XG5cblxuXHRfbGlzdGVuSG90S2V5cygpIHtcblxuXHRcdGNvbnN0IGlzS2V5QmluZGluZyA9IChlLCBiaW5kaW5nKSA9PiB7XG5cdFx0XHRyZXR1cm4gKChlLndoaWNoID09PSBiaW5kaW5nLmtleSkgfHwgKGUua2V5ID09PSBiaW5kaW5nLmtleSkpICYmXG5cdFx0XHRcdFx0KCEhYmluZGluZy5zaGlmdEtleSA9PT0gZS5zaGlmdEtleSkgJiZcblx0XHRcdFx0XHQoISFiaW5kaW5nLmN0cmxLZXkgPT09IGUuY3RybEtleSlcblx0XHR9XG5cblx0XHR0aGlzLmVsZW1lbnQub24oJ2tleWRvd24ubGVwbGF5ZXIuaG90a2V5JywgKGUpID0+IHtcblx0XHRcdHRoaXMub3B0aW9ucy5rZXlCaW5kaW5nLmZvckVhY2goYmluZGluZyA9PiB7XG5cblx0XHRcdFx0aWYoaXNLZXlCaW5kaW5nKGUsIGJpbmRpbmcpKSB7XG5cdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdGJpbmRpbmcuZm4odGhpcyk7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cblx0XHRcdH0pXG5cdFx0fSlcblx0fVxuXG5cdC8qKlxuXHQgKiBJbml0IHNlY3Rpb25zLCBnZXQgYWpheCBvciBqc29uIHdpdGggc2VjdGlvbnMgZGF0YSBhbmQgY3JlYXRlIFNlY3Rpb25zIG9iamVjdCBhbmQgYWRkZWQgdGhlbSB0byB0aGUgRE9NXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHQgKiBAcmV0dXJucyB7anFQcm9taXNlfSBqUXVlcnkgcHJvbWlzZVxuXHQgKi9cblx0X2luaXRTZWN0aW9ucygpIHtcblx0XHRjb25zdCBkZmQgPSAkLkRlZmVycmVkKCk7XG5cdFx0aWYgKHRoaXMub3B0aW9ucy5kYXRhID09IG51bGwpIHtcblx0XHRcdGRmZC5yZWplY3QobnVsbClcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5nZXRTZWN0aW9uRGF0YSgpLmRvbmUoc2VjdGlvbnMgPT4ge1xuXHRcdFx0XHRzZWN0aW9ucyA9IFsuLi5zZWN0aW9uc107XG5cblx0XHRcdFx0Y29uc3QgaXNTZWN0aW9uT3V0c2lkZSA9ICh0aGlzLnNlY3Rpb25zQ29udGFpbmVyICYmIHRoaXMuc2VjdGlvbnNDb250YWluZXIubGVuZ3RoID4gMCk7XG5cblx0XHRcdFx0aWYgKHNlY3Rpb25zID09IG51bGwgfHwgc2VjdGlvbnMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0ZGZkLnJlamVjdChudWxsKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRzZWN0aW9ucyA9IHRoaXMuX2NvbXBsZXRlU2VjdGlvbnMoc2VjdGlvbnMpO1xuXG5cdFx0XHRcdGNvbnN0IHNlY3Rpb25zQ29tcG9uZW50ID0gbmV3IFNlY3Rpb25zKHRoaXMsIHtcblx0XHRcdFx0XHRpdGVtcyA6IHNlY3Rpb25zLFxuXHRcdFx0XHRcdGZ1bGxzY3JlZW5Pbmx5IDogaXNTZWN0aW9uT3V0c2lkZSxcblx0XHRcdFx0XHRoaWRlU2Nyb2xsIDogdHJ1ZVxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHR0aGlzLmlubmVyRWxlbWVudC5hcHBlbmQoc2VjdGlvbnNDb21wb25lbnQuZWxlbWVudCk7XG5cblx0XHRcdFx0aWYgKGlzU2VjdGlvbk91dHNpZGUpIHtcblx0XHRcdFx0XHRjb25zdCBvdXRzaWRlU2VjdGlvbnMgPSBuZXcgU2VjdGlvbnModGhpcywge1xuXHRcdFx0XHRcdFx0aXRlbXMgOiBzZWN0aW9uc1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdHRoaXMuc2VjdGlvbnNDb250YWluZXIuYXBwZW5kKG91dHNpZGVTZWN0aW9ucy5lbGVtZW50KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRkZmQucmVzb2x2ZSh7IHNlY3Rpb25zQ29tcG9uZW50LCBpdGVtcyA6IHNlY3Rpb25zIH0pO1xuXHRcdFx0fSlcblx0XHR9XG5cblx0XHRyZXR1cm4gZGZkLnByb21pc2UoKVxuXHR9XG5cblx0LyoqXG5cdCAqIEZ1bmN0aW9uLCB0aGFuIGluaXQgYWxsIHBsdWdpbnMgZnJvbSBwbGF5ZXIgb3B0aW9ucy5cblx0ICogSWYgcGx1Z2luIGRvZXNuJ3QgZXhpc3QgdGhyb3cgYW4gZXJyb3Jcblx0ICpcblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqIEByZXR1cm5zIHtQbGF5ZXJ9IHRoaXNcblx0ICovXG5cdF9pbml0UGx1Z2lucygpIHtcblx0XHRpZiAodGhpcy5vcHRpb25zLnBsdWdpbnMpIHtcblx0XHRcdGZvciAoY29uc3QgbmFtZSBpbiB0aGlzLm9wdGlvbnMucGx1Z2lucykge1xuXHRcdFx0XHRpZighdGhpcy5vcHRpb25zLnBsdWdpbnMuaGFzT3duUHJvcGVydHkobmFtZSkpIHJldHVybjtcblx0XHRcdFx0Y29uc3QgcGx1Z2luT3B0aW9ucyA9IHRoaXMub3B0aW9ucy5wbHVnaW5zW25hbWVdO1xuXHRcdFx0XHRpZih0aGlzW25hbWVdKSB7XG5cdFx0XHRcdFx0aWYocGx1Z2luT3B0aW9ucykge1xuXHRcdFx0XHRcdFx0dGhpc1tuYW1lXShwbHVnaW5PcHRpb25zKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcihgUGx1Z2luICcke25hbWV9JyBkb2Vzbid0IGV4aXN0YCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cblx0LyoqXG5cdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHQgKi9cblx0X2xpc3RlblVzZXJBY3Rpdml0eSgpIHtcblx0XHRsZXQgbW91c2VJblByb2dyZXNzO1xuXHRcdGxldCBsYXN0TW92ZVg7XG5cdFx0bGV0IGxhc3RNb3ZlWTtcblxuXHRcdGNvbnN0IG9uTW91c2VNb3ZlID0gKGUpID0+IHtcblx0XHRcdGlmKGUuc2NyZWVuWCAhPT0gbGFzdE1vdmVYIHx8IGUuc2NyZWVuWSAhPT0gbGFzdE1vdmVZKSB7XG5cdFx0XHRcdGxhc3RNb3ZlWCA9IGUuc2NyZWVuWDtcblx0XHRcdFx0bGFzdE1vdmVZID0gZS5zY3JlZW5ZO1xuXHRcdFx0XHR0aGlzLl91c2VyQWN0aXZpdHkgPSB0cnVlXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y29uc3Qgb25Nb3VzZURvd24gPSAoZSkgPT4ge1xuXHRcdFx0dGhpcy5fdXNlckFjdGl2aXR5ID0gdHJ1ZVxuXG5cdFx0XHQvLyBXaGlsZSB1c2VyIGlzIHByZXNzaW5nIG1vdXNlIG9yIHRvdWNoLCBkaXNwYXRjaCB1c2VyIGFjdGl2aXR5XG5cdFx0XHRjbGVhckludGVydmFsKG1vdXNlSW5Qcm9ncmVzcyk7XG5cblx0XHRcdG1vdXNlSW5Qcm9ncmVzcyA9IHNldEludGVydmFsKCgpID0+IHtcblx0XHRcdFx0dGhpcy5fdXNlckFjdGl2aXR5ID0gdHJ1ZVxuXHRcdFx0fSwgMjUwKTtcblx0XHR9XG5cblx0XHRjb25zdCBvbk1vdXNlVXAgPSAoZSkgPT4ge1xuXHRcdFx0dGhpcy5fdXNlckFjdGl2aXR5ID0gdHJ1ZVxuXHRcdFx0Y2xlYXJJbnRlcnZhbChtb3VzZUluUHJvZ3Jlc3MpO1xuXHRcdH1cblxuXHRcdHRoaXMuZWxlbWVudC5vbignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xuXG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdtb3VzZWRvd24nLCBvbk1vdXNlRG93bik7XG5cblx0XHR0aGlzLmVsZW1lbnQub24oJ21vdXNldXAnLCBvbk1vdXNlVXApO1xuXG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdrZXlkb3duJywgKGUpID0+IHRoaXMuX3VzZXJBY3Rpdml0eSA9IHRydWUpO1xuXHRcdHRoaXMuZWxlbWVudC5vbigna2V5dXAnLCAoZSkgPT4gdGhpcy5fdXNlckFjdGl2aXR5ID0gdHJ1ZSk7XG5cblx0XHQvLyBTZWUgaHR0cDovL2Vqb2huLm9yZy9ibG9nL2xlYXJuaW5nLWZyb20tdHdpdHRlci9cblx0XHRsZXQgaW5hY3Rpdml0eVRpbWVvdXQ7XG5cdFx0Y29uc3QgZGVsYXkgPSB0aGlzLm9wdGlvbnMuaW5uYWN0aXZpdHlUaW1lb3V0O1xuXHRcdHNldEludGVydmFsKCgpID0+IHtcblx0XHRcdGlmICh0aGlzLl91c2VyQWN0aXZpdHkpIHtcblxuXHRcdFx0XHQvLyBSZXNldCB1c2VyIGFjdGl2dXR5IHRyYWNrZXJcblx0XHRcdFx0dGhpcy5fdXNlckFjdGl2aXR5ID0gZmFsc2U7XG5cblx0XHRcdFx0dGhpcy51c2VyQWN0aXZlID0gdHJ1ZTtcblxuXHRcdFx0XHRjbGVhclRpbWVvdXQoaW5hY3Rpdml0eVRpbWVvdXQpO1xuXG5cdFx0XHRcdGlmIChkZWxheSA+IDApIHtcblxuXHRcdFx0XHRcdGluYWN0aXZpdHlUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoIXRoaXMuX3VzZXJBY3Rpdml0eSkge1xuXHRcdFx0XHRcdFx0XHR0aGlzLnVzZXJBY3RpdmUgPSBmYWxzZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9LCBkZWxheSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LCAyNTApXG5cdH1cblxuXHQvKipcblx0ICogU3RvcCBzaG93aW5nIHNwaW5uZXIgYW5kIGNsZWFyIGRlbGF5IG9mIHNob3dpbmcgc3Bpbm5lclxuXHQgKlxuXHQgKiBAYWNjZXNzIHByaXZhdGVcblx0ICovXG5cdF9zdG9wV2F5dGluZygpIHtcblx0XHR0aGlzLl93YWl0aW5nVGltZW91dHMuZm9yRWFjaChpdGVtID0+IGNsZWFyVGltZW91dChpdGVtKSk7XG5cdFx0dGhpcy5fd2FpdGluZ1RpbWVvdXRzID0gW107XG5cdFx0dGhpcy5yZW1vdmVDbGFzcygnbGVwbGF5ZXItLXdhaXRpbmcnKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTaG93IHNwaW5uZXIgd2l0aCBkZWxheSBpbiAzMDBtc1xuXHQgKlxuXHQgKiBAYWNjZXNzIHByaXZhdGVcblx0ICovXG5cdF9zdGFydFdhaXRpbmcoKSB7XG5cdFx0dGhpcy5fd2FpdGluZ1RpbWVvdXRzLnB1c2goc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHR0aGlzLmFkZENsYXNzKCdsZXBsYXllci0td2FpdGluZycpO1xuXHRcdH0sIDMwMCkpO1xuXHR9XG5cblxuXHQvKipcblx0ICogT24gaW5pdGVkIHBsYXllciBldmVudCBoYW5kbGVyXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge1BsYXllckV2ZW50fSBlXG5cdCAqL1xuXHRfb25Jbml0ZWQoZSkge1xuXHRcdHRoaXMuYWRkQ2xhc3MoJ2xlcGxheWVyLS1pbml0ZWQnKTtcblxuXHRcdHRoaXMub3B0aW9ucy5vblBsYXllckluaXRlZC5jYWxsKHRoaXMsIGUpO1xuXHR9XG5cblxuXHQvKipcblx0ICogT24gY2xpY2sgdmlkZW8gZXZlbnQgaGFuZGxlci4gRm9jdXMgb24gdmlkZW8gYW5kIHRvZ2dsZVBsYXlcblx0ICpcblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqIEBwYXJhbSB7UGxheWVyRXZlbnR9IGVcblx0ICovXG5cdF9vbkNsaWNrKGUpIHtcblx0XHRjbGVhclRpbWVvdXQodGhpcy5fZGJsY2xpY2tUaW1lb3V0KTtcblx0XHR0aGlzLl9kYmxjbGlja1RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdHRoaXMudmlkZW8uZWxlbWVudC5mb2N1cygpXG5cdFx0XHR0aGlzLnRvZ2dsZVBsYXkoKTtcblx0XHR9LCAzMDApO1xuXHR9XG5cblx0LyoqXG5cdCAqIE9uIGRibGNsaWNrIG9uIHRoZSB2aWRlbyBwbGF5ZXIgZXZlbnQgaGFuZGxlclxuXHQgKlxuXHQgKiBAYWNjZXNzIHByaXZhdGVcblx0ICogQHBhcmFtIHtQbGF5ZXJFdmVudH0gZVxuXHQgKi9cblx0X29uRGJjbGljayhlKSB7XG5cdFx0Y2xlYXJUaW1lb3V0KHRoaXMuX2RibGNsaWNrVGltZW91dCk7XG5cdFx0dGhpcy50b2dnbGVGdWxsc2NyZWVuKCk7XG5cdH1cblxuXHQvKipcblx0ICogT24gZnVsbHNjcmVlbiBjaGFuZ2UgcGxheWVyIGV2ZW50IGhhbmRsZXJcblx0ICpcblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqIEBwYXJhbSB7UGxheWVyRXZlbnR9IGVcblx0ICovXG5cdF9vbkZ1bGxzY3JlZW5DaGFuZ2UoZSwgaXNGcykge1xuXHRcdGlmKGlzRnMpIHtcblx0XHRcdHRoaXMudmlldyA9ICdmdWxsc2NyZWVuJztcblx0XHRcdHRoaXMuZm9jdXMoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy52aWV3ID0gJ2NvbW1vbic7XG5cblx0XHRcdGlmKElTX0FORFJPSURfUEhPTkUgfHwgSVNfSVBIT05FIHx8IElTX0lQT0QpIHtcblx0XHRcdFx0dGhpcy5wYXVzZSgpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cblx0LyoqXG5cdCAqIE9uIHBsYXkgZXZlbnQgaGFuZGxlclxuXHQgKlxuXHQgKiBAYWNjZXNzIHByaXZhdGVcblx0ICogQHBhcmFtIHtQbGF5ZXJFdmVudH0gZVxuXHQgKi9cblx0X29uUGxheSgpIHtcblx0XHR0aGlzLnNwbGFzaEljb24uc2hvdygncGxheScpO1xuXHR9XG5cblx0LyoqXG5cdCAqIE9uIHBhdXNlIHBsYXllciBldmVudCBoYW5kbGVyXG5cdCAqIFNob3cgcGF1c2UgaWNvbiBpbiB0aGUgY2VudGVyIG9mIHZpZGVvXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHQgKi9cblx0X29uUGF1c2UoKSB7XG5cdFx0dGhpcy5zcGxhc2hJY29uLnNob3coJ3BhdXNlJyk7XG5cdH1cblxuXHRfb25FbnRpdHlGdWxsc2NyZW5DaGFuZ2UoKSB7XG5cdFx0Y29uc3QgZnNBcGkgPSBGdWxsc2NyZWVuQXBpO1xuXHRcdGNvbnN0IGlzRnMgPSAhIWRvY3VtZW50W2ZzQXBpLmZ1bGxzY3JlZW5FbGVtZW50XTtcblx0XHR0aGlzLnRyaWdnZXIoJ2Z1bGxzY3JlZW5jaGFuZ2UnLCBpc0ZzKTtcblx0fVxuXG59XG5cbi8qKlxuICogU3RhdGljIGhlbHBlciBmb3IgY3JlYXRpbmcgYSBwbHVnaW5zIGZvciBsZXBsYXllclxuICpcbiAqIEBhY2Nlc3MgcHVibGljXG4gKiBAc3RhdGljXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiBwbHVnaW5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFBsdWdpbiBpbml0IGZ1bmN0aW9uXG4gKlxuICogQGV4YW1wbGVcbiAqIFBsYXllci5wbHVnaW4oJ2hlbGxvV29ybGQnLCBmdW5jdGlvbihwbHVnaW5PcHRpb25zKSB7XG4gKiAgICBjb25zdCBwbGF5ZXIgPSB0aGlzO1xuICogICAgcGxheWVyLm9uKCdjbGljaycsICgpID0+IGNvbnNvbGUubG9nKCdIZWxsbyB3b3JsZCcpKTtcbiAqIH0pXG4gKlxuICovXG5QbGF5ZXIucGx1Z2luID0gZnVuY3Rpb24obmFtZSwgZm4pIHtcblx0UGxheWVyLnByb3RvdHlwZVtuYW1lXSA9IGZuO1xufVxuXG4vKipcbiAqIEdldCBieSBuYW1lIHJlZ2lzdGVyZWQgY29tcG9uZW50XG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgLSBOYW1lIG9mIGNvbXBvbmVudFxuICogQHJldHVybiB7Q29tcG9uZW50fVxuICovXG5QbGF5ZXIuZ2V0Q29tcG9uZW50ID0gQ29tcG9uZW50LmdldENvbXBvbmVudDtcblxuLyoqXG4gKiBSZWdpc3RlciBjb21wb25lbnRcbiAqXG4gKiBAYWNjZXNzIHB1YmxpY1xuICogQHN0YXRpY1xuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7Q29tcG9uZW50fSBjb21wb25lbnRcbiAqXG4gKiBAZXhhbXBsZVxuICogUGxheWVyLnJlZ2lzdGVyQ29tcG9uZW50KCdFcnJvckRpc3BsYXknLCBFcnJvckRpc3BsYXkpO1xuICovXG5QbGF5ZXIucmVnaXN0ZXJDb21wb25lbnQgPSBDb21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQ7XG5cbi8qKlxuICogUmVnaXN0ZXIgY29udHJvbFxuICpcbiAqIEBhY2Nlc3MgcHVibGljXG4gKiBAc3RhdGljXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtDb250cm9sfSBjb250cm9sXG4gKi9cblBsYXllci5nZXRDb250cm9sID0gQ29udHJvbC5nZXRDb250cm9sO1xuXG4vKipcbiAqIEdldCBieSBuYW1lIHJlZ2lzdGVyZWQgY29udHJvbFxuICpcbiAqIEBhY2Nlc3MgcHVibGljXG4gKiBAc3RhdGljXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHJldHVybnMge0NvbnRyb2x9XG4gKlxuICogQGV4YW1wbGVcbiAqIFBsYXllci5yZWdpc3RlckNvbnRyb2woJ2JhY2t3YXJkJywgQmFja3dhcmRDb250cm9sKTtcbiAqL1xuUGxheWVyLnJlZ2lzdGVyQ29udHJvbCA9IENvbnRyb2wucmVnaXN0ZXJDb250cm9sO1xuXG5cbi8qKlxuICogQ29udmVydCBzZWNvbmRzIHRvIGZvcm1hdCBzdHJpbmcgJ2hoPzptbTpzcydcbiAqXG4gKiBAYWNjZXNzIHB1YmxpY1xuICogQHBhcmFtIHtOdW1iZXJ9IHNlY29uZHMgU2Vjb25kc1xuICogQHBhcmFtIHtCb29sZWFufSBzaG93SG91cnMgY29udmVydCB0byBmb3JtYXQgJ2hoOm1tOnNzJ1xuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xuUGxheWVyLnNlY29uZHNUb1RpbWUgPSBzZWNvbmRzVG9UaW1lO1xuXG5cbi8qKlxuICogU3RhdGljIGhlbHBlciBmb3IgY3JlYXRpbmcgYSBwbHVnaW5zIGZvciBsZXBsYXllclxuICpcbiAqIEBhY2Nlc3MgcHVibGljXG4gKiBAc3RhdGljXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiBwbHVnaW5cbiAqIEBwYXJhbSB7RnVuY3Rpb258T2JqZWN0fSBmbiBQbHVnaW4gaW5pdCBmdW5jdGlvblxuICpcbiAqIEBleGFtcGxlXG4gKiBQbGF5ZXIucHJlc2V0KCdjb21tb24nLCB7XG4gKiAgICAgd2lkdGggOiAnMTAwJScsXG4gKiAgICAgcGx1Z2lucyA6IHtcbiAqICAgICAgICAgbWluaXBsYXllciA6IHRydWVcbiAqICAgICB9XG4gKiB9KTtcbiAqL1xuUGxheWVyLnByZXNldCA9IGZ1bmN0aW9uKG5hbWUsIG9iaikge1xuXHRpZih0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jykge1xuXHRcdFBsYXllci5fcHJlc2V0c1tuYW1lXSA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRvcHRpb25zIDoge30sXG5cdFx0XHRpbml0T3B0aW9ucyA6IG5vb3Bcblx0XHR9LCBvYmopO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvYmogPT09ICdmdW5jdGlvbicpIHtcblx0XHRQbGF5ZXIuX3ByZXNldHNbbmFtZV0gPSBvYmooKTtcblx0fVxufTtcblxuXG5QbGF5ZXIuZ2V0UHJlc2V0ID0gZnVuY3Rpb24obmFtZSkge1xuXHRpZihQbGF5ZXIuX3ByZXNldHNbbmFtZV0pIHtcblx0XHRyZXR1cm4gUGxheWVyLl9wcmVzZXRzW25hbWVdO1xuXHR9IGVsc2Uge1xuXHRcdGNvbnNvbGUuZXJyb3IoYHByZXNldCAke25hbWV9IGRvZXNuJ3QgZXhpc3RgKTtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxufVxuXG5cblBsYXllci5fcHJlc2V0cyA9IHt9O1xuXG5cblBsYXllci5fbG9hZFNWR1Nwcml0ZSA9IGZ1bmN0aW9uKHN2Zykge1xuXHRjb25zdCBoaWRkZW5FbGVtZW50ID0gJCgnPGRpdi8+JykuaGlkZSgpO1xuXHQkKCdib2R5JykucHJlcGVuZChoaWRkZW5FbGVtZW50LmFwcGVuZChzdmcpKTtcblx0cmV0dXJuIGhpZGRlbkVsZW1lbnQ7XG59XG5cblBsYXllci5kZWZhdWx0U3ByaXRlID0gcmVxdWlyZSgnLi4vLi4vZGlzdC9zdmcvc3ZnLWRlZnMuc3ZnJyk7XG5cbi8qIGdsb2JhbCBWRVJTSU9OICovXG5QbGF5ZXIudmVyc2lvbiA9IFZFUlNJT047XG5cbndpbmRvdy4kLmZuLmxlUGxheWVyID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIG5ldyBQbGF5ZXIoJCh0aGlzKSwgb3B0aW9ucyk7XG5cdH0pO1xufTtcblxud2luZG93LiQubGVQbGF5ZXIgPSBQbGF5ZXI7XG5cbndpbmRvdy5sZVBsYXllciA9IFBsYXllcjtcblxuXG4vKipcbiAqIE1pbmkgUGxheWVyIHBsdWdpblxuICpcbiAqIEBwbHVnaW5cbiAqL1xuUGxheWVyLnBsdWdpbignbWluaXBsYXllcicsIGZ1bmN0aW9uKHBsdWdpbk9wdGlvbnMpIHtcblx0Y29uc3QgcGxheWVyID0gdGhpcztcblxuXHQvLyDQnNC10YDQttC40Lwg0YEgdGhpcy5vcHRpb25zLm1pbmlwbGF5ZXIsINGH0YLQvtCx0Ysg0L3QtSDRgdC70L7QvNCw0YLRjCDQvtCx0YDQsNGC0L3Rg9GOINGB0L7QstC80LXRgdGC0LjQvNC+0YHRjCwg0YLQsNC6INC60LDQuiDRgNCw0L3RjNGI0LVcblx0Ly8g0LzQuNC90LjQv9C70LXQtdGAINC90LUg0LHRi9C7INC/0LvQsNCz0LjQvdC+0Lwg0L/Qu9C10LXRgNCwLlxuXHRjb25zdCBvcHRpb25zID0gJC5leHRlbmQoe30sIHtcblx0XHR3aWR0aCA6ICcxMDAlJyxcblx0XHRvZmZzZXRTaG93IDogKHBsYXllcikgPT4ge1xuXHRcdFx0Y29uc3Qgb2Zmc2V0ID0gcGxheWVyLmVsZW1lbnQub2Zmc2V0KCkudG9wXG5cdFx0XHRcdCsgcGxheWVyLmVsZW1lbnQub3V0ZXJIZWlnaHQoKVxuXHRcdFx0XHQtIHBsYXllci5nZXRDb250cm9scygnY29tbW9uJykuZWxlbWVudC5oZWlnaHQoKTtcblxuXHRcdFx0cmV0dXJuIG9mZnNldDtcblx0XHR9XG5cdH0sIHRoaXMub3B0aW9ucy5taW5pcGxheWVyLCBwbHVnaW5PcHRpb25zKTtcblxuXHRjb25zdCBjb250cm9scyA9IG5ldyBDb250cm9sQ29sbGVjdGlvbih0aGlzLCB7XG5cdFx0bmFtZSA6ICdtaW5pJyxcblx0XHRjb250cm9scyA6IG9wdGlvbnMuY29udHJvbHMsXG5cdFx0Y29udHJvbE9wdGlvbnMgOiB7XG5cdFx0XHRjb250cm9sIDoge1xuXHRcdFx0XHRkaXNhYmxlIDogZmFsc2Vcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xuXG5cdC8vINCS0YHRgtCw0LLQu9GP0LXQvCDQsiBpbmZvRWxlbWVudCDQv9C+0LQgdGl0bGUg0LggZGVzY3JpcHRpb25cblx0dGhpcy5pbmZvRWxlbWVudC5hcHBlbmQoY29udHJvbHMuZWxlbWVudCk7XG5cblx0LyoqXG5cdCAqIFJldHVybiBvZmZzZXQgb24gb1kgLCB3aGVuIG1pbmlwbGF5ZXIgc2hvdWxkIHNob3dpbmcgb3IgaGlkaW5nXG5cdCAqXG5cdCAqIEByZXR1cm5zIHtOdW1iZXJ9XG5cdCAqL1xuXHRjb25zdCBvZmZzZXRTaG93ID0gKCkgPT4ge1xuXHRcdGlmICgkLmlzRnVuY3Rpb24ob3B0aW9ucy5vZmZzZXRTaG93KSkge1xuXHRcdFx0cmV0dXJuIG9wdGlvbnMub2Zmc2V0U2hvdyhwbGF5ZXIpO1xuXHRcdH1cblxuXHRcdHJldHVybiBvcHRpb25zLm9mZnNldFNob3dcblx0fVxuXG5cdGNvbnN0IGdldFdpZHRoID0gKCkgPT4ge1xuXHRcdHJldHVybiBvcHRpb25zLndpZHRoIHx8IHRoaXMuZWxlbWVudC53aWR0aCgpO1xuXHR9XG5cblxuXHR0aGlzLl91cGRhdGVNaW5pUGxheWVyID0gKGUsIGZvcmNlKSA9PiB7XG5cdFx0Y29uc3Qgc2Nyb2xsVG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuXG5cdFx0Ly8gQmVjYXVzZSBpbiBmb3JjZSB1cGRhdGUsIGZvciBub3JtYWxseSBjb3VudCBoZWlnaHQgYW5kIHBhZGRpbmdcblx0XHQvLyBtaW5pcGxheWVyIGJlZm9yZSB0aGUgc2hvdyBtdXN0IGZpcnN0IGJlIGhpZGRlblxuXHRcdGlmKGZvcmNlKSB7XG5cdFx0XHR0aGlzLmhpZGVNaW5pUGxheWVyKGZvcmNlKTtcblx0XHR9XG5cblx0XHRpZihzY3JvbGxUb3AgPiBvZmZzZXRTaG93KCkpIHtcblx0XHRcdHRoaXMuc2hvd01pbmlQbGF5ZXIoZm9yY2UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmhpZGVNaW5pUGxheWVyKCk7XG5cdFx0fVxuXHR9XG5cblx0dGhpcy5zaG93TWluaVBsYXllciA9IChmb3JjZSkgPT4ge1xuXHRcdGlmICghZm9yY2UgJiYgdGhpcy52aWV3ID09PSAnbWluaScpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBBZGRlZCBlbXB0eSBzcGFjZVxuXHRcdHRoaXMuZWxlbWVudC5jc3MoJ3BhZGRpbmctdG9wJywgdGhpcy52aWRlb0NvbnRhaW5lci5oZWlnaHQoKSk7XG5cblx0XHR0aGlzLnZpZXcgPSdtaW5pJztcblx0fVxuXG5cdHRoaXMuaGlkZU1pbmlQbGF5ZXIgPSAoZm9yY2UpID0+IHtcblx0XHRpZighZm9yY2UgJiYgdGhpcy52aWV3ICE9PSAnbWluaScpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy52aWV3ID0gJ2NvbW1vbic7XG5cdH1cblxuXHQkKHdpbmRvdykub24oJ3Njcm9sbCcsIHRoaXMuX3VwZGF0ZU1pbmlQbGF5ZXIuYmluZCh0aGlzKSk7XG5cdCQod2luZG93KS5vbigncmVzaXplJywgdGhpcy5fdXBkYXRlTWluaVBsYXllci5iaW5kKHRoaXMpKTtcblx0dGhpcy5vbignaW5pdGVkJywgKGUpID0+IHRoaXMuX3VwZGF0ZU1pbmlQbGF5ZXIoZSwgdHJ1ZSkpO1xuXG5cdHRoaXMub25TZXRWaWV3KCdtaW5pJywgKCkgPT4ge1xuXHRcdHRoaXMuaW5uZXJFbGVtZW50LmNzcygnbWF4LXdpZHRoJywgZ2V0V2lkdGgoKSk7XG5cdFx0dGhpcy5pbm5lckVsZW1lbnQuY3NzKCdoZWlnaHQnLCB0aGlzLnZpZGVvLmhlaWdodCk7XG5cdH0pO1xuXG5cdHRoaXMub25EZWxWaWV3KCdtaW5pJywgKCkgPT4ge1xuXHRcdHRoaXMuaW5uZXJFbGVtZW50LmNzcygnbWF4LXdpZHRoJywgJycpXG5cdFx0dGhpcy5pbm5lckVsZW1lbnQuY3NzKCdoZWlnaHQnLCAnJylcblxuXHRcdHRoaXMuZWxlbWVudC5jc3MoJ3BhZGRpbmctdG9wJywgJycpO1xuXHR9KTtcblxuXG5cdHRoaXMuX3VwZGF0ZU1pbmlQbGF5ZXIoKTtcbn0pO1xuXG5QbGF5ZXIucHJlc2V0KCd2cHMnLCByZXF1aXJlKCcuL3ByZXNldHMvdnBzLmpzJykucHJlc2V0KTtcblBsYXllci5wcmVzZXQoJ3NtcycsIHJlcXVpcmUoJy4vcHJlc2V0cy9zbXMuanMnKS5wcmVzZXQpO1xuUGxheWVyLnByZXNldCgnY29tcHJlc3NlZCcsIHJlcXVpcmUoJy4vcHJlc2V0cy9jb21wcmVzc2VkLmpzJykucHJlc2V0KTtcblBsYXllci5wcmVzZXQoJ3lvdXR1YmUnLCByZXF1aXJlKCcuL3ByZXNldHMveW91dHViZS5qcycpLnByZXNldCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvbGUtcGxheWVyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSAkO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiJFwiXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBDb250cm9sLmpzXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJztcblxuLyoqXG4gKiBAY2xhc3MgQ29udHJvbFxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBDb250cm9sJ3Mgb3B0aW9uc1xuICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLmljb25OYW1lXSBOYW1lIG9mIGNvbnRyb2wncyBpY29uLiBJZiBlbXB0eSwgY29udHJvbCB3aWxsIG5vdCBoYXZlIGEgaWNvblxuICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLmNsYXNzTmFtZV1cbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5uYW1lXVxuICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLmNvbGxlY3Rpb25dXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMudGl0bGVdIENvbnRvcmwncyB0b29sdGlwLCB0aXRsZSBhdHRyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb3B0aW9ucy5vbkNsaWNrXSBPbiBjbGljayBldmVudCBoYW5kbGVyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmRpc2FibGU9ZmFsc2VdXG4gKiBAcHJvcGVydHkge0ljb259IGljb24gSWNvbiBpbiBjb250cm9sLCBpZiBpdCBpcyBleGlzdFxuICogQGV4dGVuZHMgQ29tcG9uZW50XG4gKi9cbmNsYXNzIENvbnRyb2wgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucykge1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cdFx0dGhpcy5kaXNhYmxlID0gdGhpcy5vcHRpb25zLmRpc2FibGUgIT0gbnVsbD8gdGhpcy5vcHRpb25zLmRpc2FibGUgOiB0cnVlO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ2luaXRlZCcsIChlKSA9PiB7XG5cdFx0XHR0aGlzLmRpc2FibGUgPSB0aGlzLm9wdGlvbnMuZGlzYWJsZSAhPSBudWxsPyB0aGlzLm9wdGlvbnMuZGlzYWJsZSA6IGZhbHNlO1xuXHRcdH0pXG5cblx0XHR0aGlzLmVsZW1lbnQub24oe1xuXHRcdFx0Y2xpY2sgOiB0aGlzLl9vbkNsaWNrLmJpbmQodGhpcyksXG5cdFx0XHRsZXBsYXllcl9jb250cm9sX2NsaWNrIDogdGhpcy5vbkNsaWNrLmJpbmQodGhpcylcblx0XHR9KTtcblxuXHRcdHRoaXMucGxheWVyLm9uKCdpbml0ZWQnLCB0aGlzLm9uUGxheWVySW5pdGVkLmJpbmQodGhpcykpXG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdGlmICh0aGlzLm9wdGlvbnMuaWNvbk5hbWUpIHtcblx0XHRcdHRoaXMuaWNvbiA9IG5ldyBJY29uKHRoaXMucGxheWVyLCB7XG5cdFx0XHRcdGljb25OYW1lIDogdGhpcy5vcHRpb25zLmljb25OYW1lXG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0bGV0IGF0dHJzID0ge1xuXHRcdFx0cm9sZSA6ICdidXR0b24nLFxuXHRcdFx0dGl0bGUgOiB0aGlzLm9wdGlvbnMudGl0bGVcblx0XHR9XG5cdFx0dGhpcy5lbGVtZW50ID0gJCgnPGRpdiAvPicpXG5cdFx0XHQuYWRkQ2xhc3ModGhpcy5idWlsZENTU0NsYXNzKCkpXG5cdFx0XHQuYXBwZW5kKHRoaXMuaWNvbiAmJiB0aGlzLmljb24uZWxlbWVudClcblx0XHRcdC5hdHRyKGF0dHJzKTtcblxuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQ7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRidWlsZENTU0NsYXNzKCkge1xuXHRcdHJldHVybiBgY29udHJvbCAke3RoaXMub3B0aW9ucy5jbGFzc05hbWV9ICR7c3VwZXIuYnVpbGRDU1NDbGFzcygpfWBcblx0fVxuXG5cdHNldCBkaXNhYmxlKHZhbHVlKSB7XG5cdFx0dGhpcy5fZGlzYWJsZSA9IHZhbHVlO1xuXHRcdHRoaXMuZWxlbWVudC50b2dnbGVDbGFzcygnZGlzYWJsZWQnLCB2YWx1ZSk7XG5cdH1cblxuXHRnZXQgZGlzYWJsZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5fZGlzYWJsZVxuXHR9XG5cblx0X29uQ2xpY2sgKGUpIHtcblx0XHRpZiAodGhpcy5kaXNhYmxlKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHRoaXMuZWxlbWVudC50cmlnZ2VyKCdsZXBsYXllcl9jb250cm9sX2NsaWNrJyk7XG5cdFx0dGhpcy5wbGF5ZXIudHJpZ2dlcignY29udHJvbGNsaWNrJywgeyBjb250cm9sIDogdGhpcyB9KTtcblx0fVxuXG5cdC8qKlxuXHQgKlxuXHQgKiBPbiBjbGljayBldmVudCBoYW5kbGVyXG5cdCAqIEBhYnN0YWN0XG5cdCAqL1xuXHRvbkNsaWNrIChlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdHRoaXMub3B0aW9ucy5vbkNsaWNrLmNhbGwodGhpcywgYXJndW1lbnRzKTtcblx0XHR9XG5cdH1cblxuXG5cdG9uUGxheWVySW5pdGVkIChlLCBkYXRhKSB7XG5cblx0fVxuXG5cdHN0YXRpYyByZWdpc3RlckNvbnRyb2wobmFtZSwgY29udHJvbCkge1xuXHRcdGlmKG5hbWUgPT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmKENvbnRyb2wuX2NvbnRyb2xzID09IG51bGwpIHtcblx0XHRcdENvbnRyb2wuX2NvbnRyb2xzID0ge307XG5cdFx0fVxuXG5cdFx0Q29udHJvbC5fY29udHJvbHNbbmFtZV0gPSBjb250cm9sO1xuXG5cdFx0cmV0dXJuIGNvbnRyb2w7XG5cdH1cblxuXHRzdGF0aWMgZ2V0Q29udHJvbChuYW1lKSB7XG5cdFx0aWYobmFtZSA9PSBudWxsKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYoQ29udHJvbC5fY29udHJvbHMgJiYgQ29udHJvbC5fY29udHJvbHNbbmFtZV0pIHtcblx0XHRcdHJldHVybiBDb250cm9sLl9jb250cm9sc1tuYW1lXTtcblx0XHR9XG5cdH1cblxuXHRzdGF0aWMgY3JlYXRlKHBsYXllciwgbmFtZSwgb3B0aW9ucykge1xuXHRcdHZhciBjb250cm9sQ2xhc3MgPSB0aGlzLmdldENvbnRyb2wobmFtZSk7XG5cdFx0aWYoY29udHJvbENsYXNzID09IG51bGwpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoYENvbnRyb2wgJHtuYW1lfSBkb2Vzbid0IGV4aXN0YCk7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHRyZXR1cm4gbmV3IGNvbnRyb2xDbGFzcyhwbGF5ZXIsIG9wdGlvbnMpO1xuXHR9XG5cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdDb250cm9sJywgQ29udHJvbCk7XG5Db250cm9sLnJlZ2lzdGVyQ29udHJvbCgnY29udHJvbCcsIENvbnRyb2wpO1xuZXhwb3J0IGRlZmF1bHQgQ29udHJvbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL0NvbnRyb2wuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIENvbXBvbmVudC5qc1xuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbi8qKlxuICogUGxheWVyIGNvbXBvbmVudCAtIEJhc2UgY2xhc3MgZm9yIGFsbCBVSVxuICpcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gT3B0aW9ucyBvZiBjb21wb25lbnRcbiAqIEBwYXJhbSB7alF1ZXJ5fSBbb3B0aW9ucy5lbGVtZW50XSDQrdC70LXQvNC10L3RgiDQvdCwINC60L7RgtC+0YDQvtC8INC80L7QttC90L4g0LjQvdC40YbQuNC70LjQt9C+0LLQsNGC0Ywg0LrQu9Cw0YHRgS5cbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcHJvcGVydHkge2pRdWVyeX0gZWxlbWVudFxuICogQGNsYXNzIENvbXBvbmVudFxuICovXG5jbGFzcyBDb21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucykge1xuXHRcdG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0Y3JlYXRlRWxlbWVudCA6IHRydWVcblx0XHR9LCB0aGlzLm9wdGlvbnMsIG9wdGlvbnMpO1xuXG5cdFx0aWYoIXBsYXllciAmJiB0aGlzLnBsYXkgIT0gbnVsbCkge1xuXHRcdFx0dGhpcy5wbGF5ZXIgPSBwbGF5ZXIgPSB0aGlzO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnBsYXllciA9IHBsYXllcjtcblx0XHR9XG5cblx0XHRpZihvcHRpb25zLmNyZWF0ZUVsZW1lbnQpIHtcblxuXHRcdFx0aWYgKG9wdGlvbnMuZWxlbWVudCkge1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQgPSBvcHRpb25zLmVsZW1lbnQ7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmNyZWF0ZUVsZW1lbnQoKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMuZWxlbWVudC5sZW5ndGggIT09IDEpIHtcblx0XHRcdFx0Y29uc29sZS5lcnJvcihgQ29tcG9uZW50LnByb3RvdHlwZS5lbGVtZW50Lmxlbmd0aCBtdXN0IGVxdWFsIDEsIG5vdCAke3RoaXMuZWxlbWVudC5sZW5ndGh9XFxuYCwgdGhpcy5lbGVtZW50KTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5lbGVtZW50WzBdLl9fbm9kZSA9IHRoaXM7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEBhYnN0cmFjdFxuXHQgKi9cblx0Y3JlYXRlRWxlbWVudCgpIHtcblxuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdC8qKlxuXHQgKiBAYWJzdHJhY3Rcblx0ICovXG5cdGJ1aWxkQ1NTQ2xhc3MoKSB7XG5cdFx0cmV0dXJuICcnXG5cdH1cblxuXG5cdC8qKlxuXHQgKiBTZXQgdGhlIGZvY3VzIHRvIHRoaXMgY29tcG9uZW50XG5cdCAqL1xuXHRmb2N1cygpIHtcblx0XHR0aGlzLmVsZW1lbnQuZm9jdXMoKTtcblx0fVxuXG5cblx0LyoqXG5cdCAqIFJlbW92ZSB0aGUgZm9jdXMgZnJvbSB0aGlzIGNvbXBvbmVudFxuXHQgKi9cblx0Ymx1cigpIHtcblx0XHR0aGlzLmVsZW1lbnQuYmx1cigpO1xuXHR9XG5cblxuXHQvKipcblx0ICogRW1pdCBhIHBsYXllciBldmVudCAodGhlIG5hbWUgb2YgZXZlbnQgd291bGQgYmUgYSBsZXBsYXllcl9zbXRoKVxuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnROYW1lXG5cdCAqIEBwYXJhbSB7QXJndW1lbnRzfSAuLi5hcmdzIGpRdWVyeS5mbi5vbiBvdGhlciBhcmd1bWVudHNcblx0ICogQHJldHVybnMge1BsYXllcn0gdGhpc1xuXHQgKi9cblx0dHJpZ2dlcihldmVudE5hbWUsIC4uLmFyZ3MpIHtcblx0XHRjb25zdCBldmVudCA9ICQuRXZlbnQoYGxlcGxheWVyXyR7ZXZlbnROYW1lfWAsIHsgcGxheWVyIDogdGhpcy5wbGF5ZXIgfSk7XG5cdFx0dGhpcy5lbGVtZW50LnRyaWdnZXJIYW5kbGVyKGV2ZW50LCAuLi5hcmdzKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cblx0LyoqXG5cdCAqIExpc3RlbiBhIHBsYXllciBldmVudCB3aXRoIGxlcGxheWVyXyBzdWZmaXhcblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50TmFtZVxuXHQgKiBAcGFyYW0ge0FyZ3VtZW50c30gLi4uYXJncyBqUXVlcnkuZm4ub24gb3RoZXIgYXJndW1lbnRzXG5cdCAqIEByZXR1cm5zIHtQbGF5ZXJ9IHRoaXNcblx0ICovXG5cdG9uKGV2ZW50TmFtZSwgLi4uYXJncykge1xuXHRcdHRoaXMuZWxlbWVudC5vbihgbGVwbGF5ZXJfJHtldmVudE5hbWV9YCwgLi4uYXJncyk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXG5cdG9uZShldmVudE5hbWUsIC4uLmFyZ3MpIHtcblx0XHR0aGlzLmVsZW1lbnQub25lKGBsZXBsYXllcl8ke2V2ZW50TmFtZX1gLCAuLi5hcmdzKTtcblx0fVxuXG5cblx0LyoqXG5cdCAqIEFkZCB0aGUgQ1NTIGNsYXNzIGZvciBnZW5lcmFsIGxlcGxheWVyIERPTSBlbGVtZW50XG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWUgTmFtZSBvZiBjbGFzcyAobm90IGEgc2VsZWN0b3IsIGl0J3MgbWVhbiwgdGhhdCBzdHJpbmcgc291bGQgYmUgd2l0aG91dCBwb2ludCBhdCB0aGUgc3RhcnQpXG5cdCAqIEByZXR1cm5zIHtQbGF5ZXJ9IHRoaXNcblx0ICovXG5cdGFkZENsYXNzKGNsYXNzTmFtZSkge1xuXHRcdHRoaXMuZWxlbWVudC5hZGRDbGFzcyhjbGFzc05hbWUpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlbW92ZSB0aGUgQ1NTIGNsYXNzIGZyb20gZ2VuZXJhbCBsZXBsYXllciBET00gZWxlbWVudFxuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIE5hbWUgb2YgY2xhc3Ncblx0ICogQHJldHVybnMge1BsYXllcn0gdGhpc1xuXHQgKi9cblx0cmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7XG5cdFx0dGhpcy5lbGVtZW50LnJlbW92ZUNsYXNzKGNsYXNzTmFtZSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvKipcblx0ICogVG9nZ2xlIHRoZSBDU1MgY2xhc3MgZnJvbSBnZW5lcmFsIGxlcGxheWVyIERPTSBlbGVtZW50XG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWVcblx0ICogQHBhcmFtIHtCb29sZWFufSBmbGFnXG5cdCAqIEByZXR1cm5zIHtQbGF5ZXJ9IHRoaXNcblx0ICovXG5cdHRvZ2dsZUNsYXNzKGNsYXNzTmFtZSwgZmxhZykge1xuXHRcdHRoaXMuZWxlbWVudC50b2dnbGVDbGFzcyhjbGFzc05hbWUsIGZsYWcpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0aGFzQ2xhc3MoY2xhc3NOYW1lKSB7XG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudC5oYXNDbGFzcyhjbGFzc05hbWUpO1xuXHR9XG5cblxuXHRzdGF0aWMgcmVnaXN0ZXJDb21wb25lbnQobmFtZSwgY29tcG9uZW50KSB7XG5cdFx0aWYobmFtZSA9PSBudWxsKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYoQ29tcG9uZW50Ll9jb21wb25lbnRzID09IG51bGwpIHtcblx0XHRcdENvbXBvbmVudC5fY29tcG9uZW50cyA9IHt9O1xuXHRcdH1cblxuXHRcdENvbXBvbmVudC5fY29tcG9uZW50c1tuYW1lXSA9IGNvbXBvbmVudDtcblxuXHRcdHJldHVybiBjb21wb25lbnQ7XG5cdH1cblxuXHRzdGF0aWMgZ2V0Q29tcG9uZW50KG5hbWUpIHtcblx0XHRpZihuYW1lID09IG51bGwpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZihDb21wb25lbnQuX2NvbXBvbmVudHMgJiYgQ29tcG9uZW50Ll9jb21wb25lbnRzW25hbWVdKSB7XG5cdFx0XHRyZXR1cm4gQ29tcG9uZW50Ll9jb21wb25lbnRzW25hbWVdO1xuXHRcdH1cblxuXHR9XG5cblxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ0NvbXBvbmVudCcsIENvbXBvbmVudCk7XG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9Db21wb25lbnQuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIEljb24uanNcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5cbi8qKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBJY29uJ3Mgb3B0aW9uc1xuICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLmljb25OYW1lPScnXSBJY29uJ3MgbmFtZS4gSWYgdXNlIHN2Z3Nwcml0ZSBpY29ucywgaWNvbk5hbWUgaXQncyBpZCBpbiBzcHJpdGVcbiAqIEBjbGFzcyBJY29uXG4gKiBAZXh0ZW5kcyBDb21wb25lbnRcbiAqL1xuY2xhc3MgSWNvbiBleHRlbmRzIENvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IgKHBsYXllciwgb3B0aW9ucz17fSkge1xuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0Y2xhc3NOYW1lIDogJycsXG5cdFx0XHRpY29uTmFtZSA6ICcnXG5cdFx0fSwgb3B0aW9ucylcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXG5cdH1cblxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0dGhpcy5fdXNlVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICd1c2UnKTtcblx0XHR0aGlzLl9zdmdUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xuXG5cdFx0dGhpcy5pY29uTmFtZSA9IHRoaXMuX2ljb25OYW1lID0gdGhpcy5vcHRpb25zLmljb25OYW1lO1xuXHRcdHRoaXMuX3N2Z1RhZy5hcHBlbmRDaGlsZCh0aGlzLl91c2VUYWcpO1xuXHRcdHRoaXMuZWxlbWVudCA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0LmFkZENsYXNzKHRoaXMuYnVpbGRDU1NDbGFzcygpKVxuXHRcdFx0LmF0dHIoJ3RpdGxlJywgdGhpcy5vcHRpb25zLnRpdGxlKVxuXHRcdFx0LmFwcGVuZCgkKHRoaXMuX3N2Z1RhZykpO1xuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQ7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRidWlsZENTU0NsYXNzKCkge1xuXHRcdHJldHVybiBgJHtzdXBlci5idWlsZENTU0NsYXNzKCl9IGxlcGxheWVyLWljb24gJHt0aGlzLm9wdGlvbnMuY2xhc3NOYW1lfWBcblx0fVxuXG5cdC8qKlxuXHQgKiBTZXR0ZXIgb2YgaWNvbk5hbWUgZmllbGRcblx0ICogQHBhcmFtIHtTdHJpbmd9IGljb25OYW1lXG5cdCAqL1xuXHRzZXQgaWNvbk5hbWUoaWNvbk5hbWUpIHtcblx0XHRsZXQgYXR0ck5TID0gWydodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJywgJ2hyZWYnXVxuXHRcdHRoaXMuX3VzZVRhZy5yZW1vdmVBdHRyaWJ1dGVOUyguLi5hdHRyTlMsIGAke3RoaXMucGxheWVyLm9wdGlvbnMuc3ZnUGF0aH0jbGVwbGF5ZXItaWNvbi0ke3RoaXMuaWNvbk5hbWV9YClcblx0XHR0aGlzLl91c2VUYWcuc2V0QXR0cmlidXRlTlMoLi4uYXR0ck5TLCBgJHt0aGlzLnBsYXllci5vcHRpb25zLnN2Z1BhdGh9I2xlcGxheWVyLWljb24tJHtpY29uTmFtZX1gKVxuXHRcdHRoaXMuX2ljb25OYW1lID0gaWNvbk5hbWU7XG5cdH1cblxuXHQvKipcblx0ICogR2V0dGVyIG9mIGljb25OYW1lIGZpZWxkXG5cdCAqIEByZXR1cm4ge1N0cmluZ30gSWNvbidzIG5hbWVcblx0ICovXG5cdGdldCBpY29uTmFtZSAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2ljb25OYW1lO1xuXHR9XG5cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdJY29uJywgSWNvbik7XG5leHBvcnQgZGVmYXVsdCBJY29uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvSWNvbi5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgUGxheUJ1dHRvbi5qc1xuICovXG5cbmltcG9ydCBDb250cm9sIGZyb20gJy4vQ29udHJvbCc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCBJY29uIGZyb20gJy4vSWNvbic7XG5pbXBvcnQgeyBjcmVhdGVFbCB9IGZyb20gJy4uL3V0aWxzJztcblxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKi9cbmNsYXNzIFBsYXlCdXR0b24gZXh0ZW5kcyBDb250cm9sIHtcblxuXHRjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpXG5cblx0XHR0aGlzLmVsZW1lbnQub24oJ2RibGNsaWNrJywgdGhpcy5fb25EYmNsaWNrLmJpbmQodGhpcykpO1xuXHR9XG5cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHRjb25zdCBpbm5lciA9IGNyZWF0ZUVsKCdkaXYnLCB7XG5cdFx0XHRjbGFzc05hbWUgOiAnbGVwbGF5ZXItcGxheS1idXR0b25fX2J1dHRvbidcblx0XHR9KVxuXHRcdC5hcHBlbmQobmV3IEljb24odGhpcy5wbGF5ZXIsIHsgaWNvbk5hbWUgOiAncGxheScgfSkuZWxlbWVudCk7XG5cblx0XHR0aGlzLmVsZW1lbnQgPSBjcmVhdGVFbCgnZGl2Jywge1xuXHRcdFx0Y2xhc3NOYW1lIDogdGhpcy5idWlsZENTU0NsYXNzXG5cdFx0fSlcblx0XHQuYXBwZW5kKGlubmVyKTtcblxuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQ7XG5cdH1cblxuXHRvbkNsaWNrKGUpIHtcblx0XHRzdXBlci5vbkNsaWNrKGUpO1xuXHRcdHRoaXMucGxheWVyLnRyaWdnZXIoJ2NsaWNrJyk7XG5cdH1cblxuXHRfb25EYmNsaWNrKCkge1xuXHRcdHRoaXMucGxheWVyLnRyaWdnZXIoJ2RibGNsaWNrJyk7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRidWlsZENTU0NsYXNzKCkge1xuXHRcdHJldHVybiBgbGVwbGF5ZXItcGxheS1idXR0b25gXG5cdH1cblxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ1BsYXlCdXR0b24nLCBQbGF5QnV0dG9uKTtcbkNvbnRyb2wucmVnaXN0ZXJDb250cm9sKCdwbGF5IGJ1dHRvbicsIFBsYXlCdXR0b24pO1xuZXhwb3J0IGRlZmF1bHQgUGxheUJ1dHRvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL1BsYXlCdXR0b24uanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIHRpbWUuanNcbiAqXG4gKiBAbW9kdWxlIHRpbWVcbiAqL1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuLyoqXG4gKiBDb252ZXJ0IHNlY29uZHMgdG8gZm9ybWF0IHN0cmluZyAnaGg/Om1tOnNzJ1xuICpcbiAqIEBhY2Nlc3MgcHVibGljXG4gKiBAcGFyYW0ge051bWJlcn0gc2Vjb25kcyBTZWNvbmRzXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHNob3dIb3VycyBjb252ZXJ0IHRvIGZvcm1hdCAnaGg6bW06c3MnXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2Vjb25kc1RvVGltZSAoc2Vjb25kcywgc2hvd0hvdXJzKSB7XG5cdHZhciBoID0gTWF0aC5mbG9vcihzZWNvbmRzIC8gMzYwMCk7XG5cdHZhciBtID0gTWF0aC5mbG9vcihzZWNvbmRzICUgMzYwMCAvIDYwKTtcblx0dmFyIHMgPSBNYXRoLmZsb29yKHNlY29uZHMgJSAzNjAwICUgNjApO1xuXHR2YXIgb3V0ID0gJyc7XG5cdGlmIChtIDwgMTApIHtcblx0XHRtID0gJzAnICsgbTtcblx0fVxuXHRpZiAocyA8IDEwKSB7XG5cdFx0cyA9ICcwJyArIHM7XG5cdH1cblx0b3V0ID0gYCR7bX06JHtzfWA7XG5cblx0aWYoaCA+IDAgfHwgc2hvd0hvdXJzKSB7XG5cdFx0b3V0ID0gYCR7aH06YCArIG91dFxuXHR9XG5cdHJldHVybiBvdXQ7XG59XG5cblxuLyoqXG4gKiBSZXR1cm4gbGVuZ3RoIC8gZW5kXG4gKlxuICogQGFjY2VzcyBwdWJsaWNcbiAqIEBwYXJhbSB7TnVtYmVyfSBsZW5ndGhcbiAqIEBwYXJhbSB7TnVibWVyfSBlbmRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBlcmNlbnRpZnkgKGxlbmd0aCwgZW5kKSB7XG5cdC8vIG9yIHplcm8gYmVhY2FzZSBOYU5cblx0Y29uc3QgcGVyY2VudCA9IChsZW5ndGggLyBlbmQpIHx8IDA7XG5cdHJldHVybiAocGVyY2VudCA+PSAxKSA/IDEgOiBwZXJjZW50O1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbCh0YWc9J2RpdicsIHByb3BzKSB7XG5cdGlmKHByb3BzICYmIHByb3BzLmNsYXNzTmFtZSkge1xuXHRcdHByb3BzW1wiY2xhc3NcIl0gPSBwcm9wcy5jbGFzc05hbWU7XG5cdFx0ZGVsZXRlIHByb3BzLmNsYXNzTmFtZTtcblx0fVxuXHRyZXR1cm4gJChgPCR7dGFnfS8+YCwgcHJvcHMpO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBub29wKCkge31cblxuZXhwb3J0IGNvbnN0IGdldFNjcm9sbEJhcldpZHRoID0gKGZ1bmN0aW9uKCkge1xuXHRsZXQgcmVzdWx0O1xuXG5cdHJldHVybiBmdW5jdGlvbigpIHtcblxuXHRcdGlmKHJlc3VsdCAhPSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH1cblxuXHRcdGNvbnN0IG91dGVyID0gJCgnPGRpdiAvPicpLmNzcyh7XG5cdFx0XHR2aXNpYmlsaXR5IDogJ2hpZGRlbicsXG5cdFx0XHR3aWR0aCA6IDEwMCxcblx0XHRcdG92ZXJmbG93IDogJ3Njcm9sbCdcblx0XHR9KS5hcHBlbmRUbygnYm9keScpO1xuXG5cdFx0Y29uc3Qgd2lkdGhXaXRoU2Nyb2xsID0gJCgnPGRpdiAvPicpLmNzcyh7XG5cdFx0XHR3aWR0aCA6ICcxMDAlJ1xuXHRcdH0pLmFwcGVuZFRvKG91dGVyKS5vdXRlcldpZHRoKCk7XG5cblx0XHRvdXRlci5yZW1vdmUoKTtcblx0XHRyZXR1cm4gcmVzdWx0ID0gMTAwIC0gd2lkdGhXaXRoU2Nyb2xsO1xuXHR9XG5cbn0oKSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvdXRpbHMvaW5kZXguanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIFNwbGFzaEljb24uanNcbiAqL1xuXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCBJY29uIGZyb20gJy4vSWNvbic7XG5cbi8qKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQGNsYXNzIFNwbGFzaEljb25cbiAqIEBleHRlbmRzIENvbXBvbmVudFxuICovXG5jbGFzcyBTcGxhc2hJY29uIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXHRzaG93KG5hbWUpIHtcblx0XHR0aGlzLmljb24uaWNvbk5hbWUgPSBuYW1lO1xuXHRcdHRoaXMuZWxlbWVudC5hZGRDbGFzcygnbGVwbGF5ZXItc3BsYXNoaWNvbi0tYWN0aXZlJyk7XG5cdFx0c2V0VGltZW91dCgoKSA9PiB0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3MoJ2xlcGxheWVyLXNwbGFzaGljb24tLWFjdGl2ZScpLCAzMDApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHR0aGlzLmljb24gPSBuZXcgSWNvbih0aGlzLnBsYXllcik7XG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudCA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0LmFkZENsYXNzKCdsZXBsYXllci1zcGxhc2hpY29uJylcblx0XHRcdC5hcHBlbmQodGhpcy5pY29uLmVsZW1lbnQpO1xuXHR9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3BsYXNoSWNvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL1NwbGFzaEljb24uanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIFRpbWUuanNcbiAqL1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vQ29tcG9uZW50JztcbmltcG9ydCB7IHNlY29uZHNUb1RpbWUsIGNyZWF0ZUVsIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG4vLyBUT0RPOiDQmNGB0L/QvtC70YzQt9C+0LLQsNGC0Ywg0Y3RgtC+0YIg0LHQu9C+0Log0LIgVGltZUNvbnRyb2xcbi8qKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQGNsYXNzIFRpbWVcbiAqIEBleHRlbmRzIENvbnRyb2xcbiAqL1xuY2xhc3MgVGltZSBleHRlbmRzIENvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IgKHBsYXllciwgb3B0aW9ucz17fSkge1xuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0Zm4gOiAocGxheWVyKSA9PiB7XG5cdFx0XHRcdGNvbnN0IHZpZGVvID0gcGxheWVyLnZpZGVvO1xuXHRcdFx0XHRyZXR1cm4gc2Vjb25kc1RvVGltZSh2aWRlby5jdXJyZW50VGltZSk7XG5cdFx0XHR9XG5cdFx0fSwgb3B0aW9ucyk7XG5cblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ3RpbWV1cGRhdGUnLCB0aGlzLnVwZGF0ZVRleHQuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5wbGF5ZXIub24oJ2luaXRlZCcsIHRoaXMudXBkYXRlVGV4dC5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdHVwZGF0ZVRleHQoZSwgZGF0YSkge1xuXHRcdHRoaXMuZWxlbWVudC50ZXh0KHRoaXMub3B0aW9ucy5mbih0aGlzLnBsYXllcikpO1xuXHR9XG5cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHR0aGlzLmVsZW1lbnQgPSBjcmVhdGVFbCgnZGl2JywgeyBjbGFzc05hbWUgOiAnbGVwbGF5ZXItdGltZScgfSk7XG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudDtcblx0fVxuXG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnVGltZScsIFRpbWUpO1xuZXhwb3J0IGRlZmF1bHQgVGltZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL1RpbWVsaW5lL1RpbWUuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIENvbnRyb2xDb2xsZWN0aW9uLmpzXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9Db250cm9sJztcblxuaW1wb3J0IHsgY3JlYXRlRWwgfSBmcm9tICcuLi91dGlscyc7XG5cblxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIE9wdGlvbnMgb2YgY29tcG9uZW50XG4gKiBAcGFyYW0ge2pRdWVyeX0gW29wdGlvbnMuY29udHJvbHNdIEFycmF5IG9mIHJvd3Mgb2YgY29udHJvbCdzIG5hbWVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5jb250cm9sc09wdGlvbnNdIENvbnRyb2wgb3B0aW9uc1xuICogQHByb3BlcnR5IHtBcnJheX0gQXJyYXkgb2Ygcm93cyBvZiBjb250cm9sJ3MgbmFtZVxuICogQHByXG4gKlxuICovXG5jbGFzcyBDb250cm9sQ29sbGVjdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yIChwbGF5ZXIsIG9wdGlvbnMpIHtcblx0XHRjb25zdCBuYW1lID0gb3B0aW9ucy5uYW1lO1xuXG5cdFx0bGV0IHBsYXllck9wdGlvbnMgPSB7XG5cdFx0XHRjb250cm9scyA6IHBsYXllci5vcHRpb25zLmNvbnRyb2xzW25hbWVdLFxuXHRcdH1cblxuXHRcdGlmKHBsYXllci5vcHRpb25zLmNvbnRyb2xzT3B0aW9uc1tuYW1lXSkge1xuXHRcdFx0cGxheWVyT3B0aW9uc1snYWxpZ24nXSA9IHBsYXllci5vcHRpb25zLmNvbnRyb2xzT3B0aW9uc1tuYW1lXS5hbGlnbjtcblx0XHRcdHBsYXllck9wdGlvbnNbJ2NvbnRyb2xzT3B0aW9ucyddID0gcGxheWVyLm9wdGlvbnMuY29udHJvbHNPcHRpb25zW25hbWVdLmNvbnRyb2xzO1xuXHRcdH1cblxuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0Y29udHJvbHMgOiBbXSxcblx0XHRcdGNvbnRyb2xzT3B0aW9ucyA6IHt9LFxuXHRcdFx0YWxpZ24gOiAnbGVmdCcsXG5cdFx0fSwgcGxheWVyT3B0aW9ucywgb3B0aW9ucyk7XG5cblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXG5cdFx0dGhpcy5hY3RpdmUgPSBvcHRpb25zLmFjdGl2ZSB8fCBmYWxzZTtcblx0XHR0aGlzLm5hbWUgPSBvcHRpb25zLm5hbWU7XG5cblx0XHR0aGlzLnBsYXllci5jb250cm9sc1t0aGlzLm5hbWVdID0gdGhpcztcblx0fVxuXG5cblx0X2dldENvbnRyb2xPcHRpb25zKG5hbWUpIHtcblx0XHRjb25zdCB7IGNvbnRyb2xzT3B0aW9ucyB9ID0gdGhpcy5vcHRpb25zO1xuXHRcdGxldCByZXN1bHQgPSBjb250cm9sc09wdGlvbnMuY29udHJvbCB8fCB7fTtcblxuXHRcdGlmKGNvbnRyb2xzT3B0aW9uc1tuYW1lXSkge1xuXHRcdFx0cmVzdWx0ID0gJC5leHRlbmQodHJ1ZSwge30sIHJlc3VsdCwgY29udHJvbHNPcHRpb25zW25hbWVdKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0YWRkQ29udHJvbChpbmRleFJvdywgbmFtZSwgb3B0aW9ucykge1xuXHRcdGNvbnN0IGNvbnRyb2wgPSBDb250cm9sLmNyZWF0ZSh0aGlzLnBsYXllciwgbmFtZSwge1xuXHRcdFx0Y29sbGVjdGlvbiA6IHRoaXMub3B0aW9ucy5uYW1lLFxuXHRcdFx0Li4ub3B0aW9uc1xuXHRcdH0pO1xuXG5cdFx0aWYoY29udHJvbCA9PSBudWxsKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0d2hpbGUoaW5kZXhSb3cgPiB0aGlzLl9yb3dzLmxlbmd0aCkge1xuXHRcdFx0dGhpcy5hZGRSb3coKTtcblx0XHR9XG5cblx0XHRjb25zdCBlbGVtUm93ID0gdGhpcy5fcm93c1tpbmRleFJvd107XG5cdFx0ZWxlbVJvdy5hcHBlbmQoY29udHJvbC5lbGVtZW50KTtcblxuXHRcdGlmICh0aGlzLmNvbnRyb2xzID09IG51bGwpIHtcblx0XHRcdHRoaXMuY29udHJvbHMgPSBbXTtcblx0XHR9XG5cdFx0aWYgKHRoaXMuY29udHJvbHNbaW5kZXhSb3ddID09IG51bGwpIHtcblx0XHRcdHRoaXMuY29udHJvbHNbaW5kZXhSb3ddID0ge307XG5cdFx0fVxuXG5cdFx0dGhpcy5jb250cm9sc1tpbmRleFJvd11bbmFtZV0gPSBjb250cm9sO1xuXHR9XG5cblx0Z2V0Q29udHJvbChmaXJzdCwgc2Vjb25kKSB7XG5cdFx0aWYoc2Vjb25kID09IG51bGwpIHtcblx0XHRcdGNvbnN0IG5hbWUgPSBmaXJzdDtcblx0XHRcdGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmNvbnRyb2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmKHRoaXMuY29udHJvbHNbaV1bbmFtZV0gIT0gbnVsbCkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLmNvbnRyb2xzW2ldW25hbWVdO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IG5hbWUgPSBmaXJzdDtcblx0XHRcdGNvbnN0IGluZGV4Um93ID0gc2Vjb25kO1xuXHRcdFx0cmV0dXJuIHRoaXMuY29udHJvbHNbaW5kZXhSb3ddW25hbWVdO1xuXHRcdH1cblxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0YWRkUm93KCkge1xuXHRcdGNvbnN0IGVsZW1Sb3cgPSBjcmVhdGVFbCgnZGl2Jywge1xuXHRcdFx0Y2xhc3NOYW1lIDogYGxlcGxheWVyLWNvbnRyb2xzIGNvbnRyb2xzLSR7dGhpcy5vcHRpb25zLm5hbWV9YFxuXHRcdH0pO1xuXG5cdFx0aWYgKHRoaXMuX3Jvd3MgPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5fcm93cyA9IFtdXG5cdFx0fVxuXHRcdHRoaXMuX3Jvd3MucHVzaChlbGVtUm93KTtcblx0XHR0aGlzLmVsZW1lbnQuYXBwZW5kKGVsZW1Sb3cpO1xuXG5cdFx0cmV0dXJuIGVsZW1Sb3c7XG5cdH1cblxuXHRnZXRSb3coaW5kZXhSb3cpIHtcblx0XHRyZXR1cm4gdGhpcy5fcm93c1tpbmRleFJvdyB8fCAwXTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0Y29uc3QgeyBuYW1lLCBjb250cm9scywgYWxpZ24gfSA9IHRoaXMub3B0aW9ucztcblx0XHRsZXQgZ2xvYmFsQWxpZ24gPSBudWxsO1xuXG5cdFx0dGhpcy5lbGVtZW50ID0gY3JlYXRlRWwoJ2RpdicsIHtcblx0XHRcdGNsYXNzTmFtZSA6IGBsZXBsYXllci1jb250cm9sLWNvbGxlY3Rpb24gbGVwbGF5ZXItY29udHJvbC1jb2xsZWN0aW9uLS0ke25hbWV9YCxcblx0XHR9KVxuXG5cdFx0aWYodHlwZW9mIGFsaWduID09PSAnc3RyaW5nJykge1xuXHRcdFx0Z2xvYmFsQWxpZ24gPSBhbGlnbjtcblx0XHR9XG5cblx0XHRjb250cm9scy5mb3JFYWNoKChyb3csIGluZGV4Um93KSA9PiB7XG5cdFx0XHRjb25zdCBlbGVtUm93ID0gdGhpcy5hZGRSb3coKTtcblx0XHRcdGxldCByb3dBbGlnbiA9IGdsb2JhbEFsaWduO1xuXG5cdFx0XHRpZihBcnJheS5pc0FycmF5KGFsaWduKSAmJiBhbGlnbltpbmRleFJvd10pIHtcblx0XHRcdFx0cm93QWxpZ24gPSBhbGlnbltpbmRleFJvd11cblx0XHRcdH1cblxuXHRcdFx0cm93LmZvckVhY2goY29udHJvbE5hbWUgPT4ge1xuXG5cdFx0XHRcdGlmKGNvbnRyb2xOYW1lID09PSAndGltZWxpbmUnICYmIHJvd0FsaWduICE9PSAnanVzdGlmeScpIHtcblx0XHRcdFx0XHRjb25zb2xlLndhcm4oJ0NvbnJvbHMgc2hvdWxkIGhhdmUganVzdGlmeSBhbGlnbiwgaWYgdGhlcmUgaXMgdGhlIHRpbWVsaW5lIGluIGl0Jyk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLmFkZENvbnRyb2woaW5kZXhSb3csIGNvbnRyb2xOYW1lLCB0aGlzLl9nZXRDb250cm9sT3B0aW9ucyhuYW1lKSk7XG5cdFx0XHR9KTtcblxuXHRcdFx0ZWxlbVJvdy5hZGRDbGFzcyhgbGVwbGF5ZXItY29udHJvbHMtLSR7cm93QWxpZ259YClcblx0XHRcdFx0LmF0dHIoJ3RhYmluZGV4JywgMCk7XG5cblx0XHRcdGVsZW1Sb3cuZmluZCgnLmRpdmlkZXIgKyAuZGl2aWRlcicpLnJlbW92ZSgpO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudDtcblx0fVxuXG5cdGhpZGUgKCkge1xuXHRcdHRoaXMuZWxlbWVudC5oaWRlKCk7XG5cdFx0dGhpcy5lbGVtZW50LmZpbmQoJy5sZXBsYXllci1jb250cm9scycpLmhpZGUoKVxuXHR9XG5cblx0c2hvdyAoKSB7XG5cdFx0dGhpcy5lbGVtZW50LnNob3coKVxuXHRcdHRoaXMuZWxlbWVudC5maW5kKCcubGVwbGF5ZXItY29udHJvbHMnKS5zaG93KClcblx0fVxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ0NvbnRyb2xDb2xsZWN0aW9uJywgQ29udHJvbENvbGxlY3Rpb24pO1xuZXhwb3J0IGRlZmF1bHQgQ29udHJvbENvbGxlY3Rpb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9Db250cm9sQ29sbGVjdGlvbi5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgU2VjdGlvbnMuanNcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5cbmltcG9ydCB7IHNlY29uZHNUb1RpbWUsIGdldFNjcm9sbEJhcldpZHRoIH0gZnJvbSAnLi4vdXRpbHMnO1xuLyoqXG4gKiBAY2xhc3MgU2VjdGlvbnNcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEBwYXJhbSB7QXJyYXl9IFtvcHRpb25zLml0ZW1zPVtdfSBEYXRhIGZvciBzZWN0aW9uc1xuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy52aWV3c10gU2hvdyBzZWN0aW9uIG9ubHkgaW4gZnVsbHNjcmVlblxuICogQGV4dGVuZHMgQ29tcG9uZW50XG4gKi9cbmNsYXNzIFNlY3Rpb25zIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XG5cdFx0bGV0IHsgaXRlbXMgPSBbXSB9ID0gb3B0aW9ucztcblx0XHRpdGVtcyA9IFtdLmNvbmNhdChpdGVtcyk7XG5cblx0XHQvL29wdGlvbnMuaXRlbXMgPSBpdGVtcztcblxuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cblx0XHR0aGlzLnNjcm9sbEVsZW1lbnQgPSB0aGlzLl9pbm5lckVsZW1lbnQ7XG5cdFx0dGhpcy5hY3RpdmVTZWN0aW9uID0gdGhpcy5nZXRTZWN0aW9uQnlJbmRleCgwKTtcblxuXHRcdHRoaXMuaXRlbXMgPSBpdGVtcztcblx0XHR0aGlzLmxlbmd0aCA9IHRoaXMuaXRlbXMubGVuZ3RoO1xuXG5cdFx0dGhpcy5zZXRBY3RpdmVCeUluZGV4KDApO1xuXG5cdFx0dGhpcy5lbGVtZW50XG5cdFx0XHQuZmluZCgnLmxlcGxheWVyLXNlY3Rpb24nKVxuXHRcdFx0Lm9uKCdjbGljaycsIHRoaXMub25TZWN0aW9uQ2xpY2suYmluZCh0aGlzKSk7XG5cblx0XHR0aGlzLnBsYXllci5vbignc2VjdGlvbnN0b2dnbGUnLCB0aGlzLl9vblNlY3Rpb25zVG9nZ2xlLmJpbmQodGhpcykpO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ3RpbWV1cGRhdGUnLCB0aGlzLm9uVGltZVVwZGF0ZS5iaW5kKHRoaXMpKTtcblxuXHRcdHRoaXMucGxheWVyLm9uKCdpbml0ZWQnLCB0aGlzLnVwZGF0ZVNlY3Rpb25EdXJhdGlvbi5iaW5kKHRoaXMpKTtcblxuXHRcdHRoaXMucGxheWVyLm9uKCdkdXJhdGlvbmNoYW5nZScsIHRoaXMudXBkYXRlU2VjdGlvbkR1cmF0aW9uLmJpbmQodGhpcykpO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ2ZvY3VzJywgKCkgPT4gdGhpcy5wbGF5ZXIuZm9jdXMoKSk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdG5leHQoKSB7XG5cdFx0Y29uc3Qgc2VjdGlvbkluZGV4ID0gcGFyc2VJbnQodGhpcy5hY3RpdmVTZWN0aW9uLmF0dHIoJ2RhdGEtaW5kZXgnKSk7XG5cdFx0Y29uc3QgbmV3SW5kZXggPSBzZWN0aW9uSW5kZXggPj0gdGhpcy5sZW5ndGggPyB0aGlzLmxlbmd0aCA6IHNlY3Rpb25JbmRleCArIDE7XG5cblx0XHR0aGlzLnNldEFjdGl2ZUJ5SW5kZXgobmV3SW5kZXgpO1xuXG5cdFx0dGhpcy5wbGF5ZXIudmlkZW8uY3VycmVudFRpbWUgPSB0aGlzLml0ZW1zW3NlY3Rpb25JbmRleF0uZW5kO1xuXHR9XG5cblx0cHJldigpIHtcblx0XHRjb25zdCBzZWN0aW9uSW5kZXggPSBwYXJzZUludCh0aGlzLmFjdGl2ZVNlY3Rpb24uYXR0cignZGF0YS1pbmRleCcpKTtcblx0XHRjb25zdCBuZXdJbmRleCA9IHNlY3Rpb25JbmRleCA8PSAwID8gMCA6IHNlY3Rpb25JbmRleCAtIDE7XG5cblx0XHR0aGlzLnNldEFjdGl2ZUJ5SW5kZXgobmV3SW5kZXgpO1xuXHRcdHRoaXMucGxheWVyLnZpZGVvLmN1cnJlbnRUaW1lID0gdGhpcy5pdGVtc1tuZXdJbmRleF0uYmVnaW47XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdGNvbnN0IHsgZnVsbHNjcmVlbk9ubHksIGhpZGVTY3JvbGwgfSA9IHRoaXMub3B0aW9ucztcblxuXG5cdFx0dGhpcy5lbGVtZW50ID0gJCgnPGRpdiAvPicpXG5cdFx0XHQuYWRkQ2xhc3MoJ2xlcGxheWVyLXNlY3Rpb25zJylcblx0XHRcdC5hdHRyKCd0YWJpbmRleCcsICcwJyk7XG5cblx0XHR0aGlzLl9pbm5lckVsZW1lbnQgPSAkKCc8ZGl2IC8+JykuYWRkQ2xhc3MoJ2xlcGxheWVyLXNlY3Rpb25zX19pbm5lcicpO1xuXG5cdFx0aWYoZnVsbHNjcmVlbk9ubHkpIHtcblx0XHRcdHRoaXMuZWxlbWVudC5hZGRDbGFzcygnbGVwbGF5ZXItc2VjdGlvbnMtLWZzb25seScpO1xuXHRcdH1cblxuXHRcdGlmKGhpZGVTY3JvbGwpIHtcblx0XHRcdHRoaXMuZWxlbWVudC5hZGRDbGFzcygnbGVwbGF5ZXItc2VjdGlvbnMtLWhpZGUtc2Nyb2xsJyk7XG5cdFx0XHR0aGlzLl9pbm5lckVsZW1lbnQuY3NzKHtcblx0XHRcdFx0cmlnaHQgOiAtMSAqIGdldFNjcm9sbEJhcldpZHRoKClcblx0XHRcdH0pXG5cdFx0fVxuXG5cdFx0dGhpcy5lbGVtZW50LmFwcGVuZChcblx0XHRcdHRoaXMuX2lubmVyRWxlbWVudC5hcHBlbmQodGhpcy5fY3JlYXRlU2VjdGlvbnModGhpcy5vcHRpb25zLml0ZW1zKSlcblx0XHQpXG5cblxuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQ7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHR1cGRhdGVTZWN0aW9uRHVyYXRpb24oKSB7XG5cdFx0aWYodGhpcy5pdGVtcyAhPSBudWxsICYmIHRoaXMuaXRlbXMubGVuZ3RoID4gMCkge1xuXHRcdFx0Y29uc3QgbGVuZ3RoID0gdGhpcy5pdGVtcy5sZW5ndGhcblx0XHRcdHRoaXMuaXRlbXNbbGVuZ3RoIC0gMV0uZW5kID0gdGhpcy5wbGF5ZXIudmlkZW8uZHVyYXRpb247XG5cblx0XHRcdC8vIFRPRE86INCf0YDQvtC00YPQvNCw0YLRjCDRhNGD0L3QutGG0LjRj9GOIHVwZGF0ZVNlY3Rpb25cblx0XHRcdC8vdGhpcy51cGRhdGVTZWN0aW9uKHRoaXMuaXRlbXNbbGVuZ3RoIC0gMV0sIGxlbmd0aCAtIDEpO1xuXHRcdH1cblx0fVxuXG5cblx0b25TZWN0aW9uQ2xpY2soZSkge1xuXHRcdGNvbnN0IHZpZGVvID0gdGhpcy5wbGF5ZXIudmlkZW87XG5cdFx0Y29uc3Qgc2VjdGlvbiA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5sZXBsYXllci1zZWN0aW9uJyk7XG5cdFx0dmlkZW8uY3VycmVudFRpbWUgPSBzZWN0aW9uLmF0dHIoJ2RhdGEtYmVnaW4nKTtcblx0XHR0aGlzLnBsYXllci50cmlnZ2VyKCdzZWN0aW9uc2NsaWNrJywgeyBzZWN0aW9uIDogdGhpcy5pdGVtc1tzZWN0aW9uLmF0dHIoJ2RhdGEtaW5kZXgnKV19KTtcblx0fVxuXG5cdHNldEFjdGl2ZUJ5SW5kZXgoaW5kZXgpIHtcblx0XHRpZiAoXG5cdFx0XHR0aGlzLmFjdGl2ZVNlY3Rpb24ubGVuZ3RoID09PSAwIHx8XG5cdFx0XHRwYXJzZUludCh0aGlzLmFjdGl2ZVNlY3Rpb24uYXR0cignZGF0YS1pbmRleCcpKSA9PT0gaW5kZXggfHxcblx0XHRcdHRoaXMuZ2V0U2VjdGlvbkJ5SW5kZXgoaW5kZXgpLmxlbmd0aCA9PT0gMFxuXHRcdCkge1xuXHRcdFx0cmV0dXJuIHRoaXNcblx0XHR9XG5cblx0XHR0aGlzLmFjdGl2ZVNlY3Rpb24ucmVtb3ZlQ2xhc3MoJ2xlcGxheWVyLXNlY3Rpb24tLWFjdGl2ZScpO1xuXHRcdHRoaXMuYWN0aXZlU2VjdGlvbiA9IHRoaXMuZ2V0U2VjdGlvbkJ5SW5kZXgoaW5kZXgpO1xuXHRcdHRoaXMuYWN0aXZlU2VjdGlvbi5hZGRDbGFzcygnbGVwbGF5ZXItc2VjdGlvbi0tYWN0aXZlJyk7XG5cblx0XHRjb25zdCB0b3BQb3NpdGlvbiA9IHRoaXMuYWN0aXZlU2VjdGlvbi5wb3NpdGlvbigpLnRvcDtcblxuXHRcdHRoaXMuc2Nyb2xsRWxlbWVudFxuXHRcdFx0LmFuaW1hdGUoe1xuXHRcdFx0XHRzY3JvbGxUb3AgOiB0aGlzLnNjcm9sbEVsZW1lbnQuc2Nyb2xsVG9wKCkgKyB0b3BQb3NpdGlvblxuXHRcdFx0fSwgODAwKVxuXG5cdFx0dGhpcy5wbGF5ZXIudHJpZ2dlcignc2VjdGlvbnNjaGFuZ2UnLCB7IHNlY3Rpb24gOiB0aGlzLml0ZW1zW2luZGV4XX0pO1xuXG5cdFx0cmV0dXJuIHRoaXNcblx0fVxuXG5cdGdldFNlY3Rpb25CeUluZGV4KGluZGV4KSB7XG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudC5maW5kKGAubGVwbGF5ZXItc2VjdGlvbltkYXRhLWluZGV4PVwiJHtpbmRleH1cIl1gKTtcblx0fVxuXG5cblx0b25UaW1lVXBkYXRlKGUsIGRhdGEpIHtcblx0XHRpZiAodGhpcy5hY3RpdmVTZWN0aW9uLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuXG5cdFx0fVxuXG5cdFx0Y29uc3QgY3VycmVudFRpbWUgPSB0aGlzLnBsYXllci5jdXJyZW50VGltZTtcblxuXHRcdC8vIFVwZGF0ZSBzcGFuIHdpdGggZW5kIHNlY3Rpb24gdGltZVxuXHRcdC8vIFRPRE86INCS0YvQvdC10YHRgtC4INGN0YLQviDQsiDQvtGC0LTQtdC70YzQvdGL0Lkg0LrQvtC80L/QvtC90LXQvdGCIFNob3dUaW1lINC40LvQuCDRgtC40L/QviDRgtC+0LPQvlxuXHRcdGlmKHRoaXMucGxheWVyLnZpZXcgPT09ICdtaW5pJykge1xuXHRcdFx0Y29uc3QgZW5kU2VjdGlvblRpbWUgPSB0aGlzLmFjdGl2ZVNlY3Rpb24uYXR0cignZGF0YS1lbmQnKTtcblx0XHRcdHRoaXMuYWN0aXZlU2VjdGlvblxuXHRcdFx0XHQubmV4dCgpXG5cdFx0XHRcdC5maW5kKCcudGltZScpXG5cdFx0XHRcdC50ZXh0KHNlY29uZHNUb1RpbWUoZW5kU2VjdGlvblRpbWUgLSBjdXJyZW50VGltZSkpO1xuXHRcdH1cblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3Qgc2VjdGlvbiA9IHRoaXMuaXRlbXNbaV07XG5cdFx0XHRpZiAoY3VycmVudFRpbWUgPCBzZWN0aW9uLmVuZCkge1xuXHRcdFx0XHR0aGlzLnNldEFjdGl2ZUJ5SW5kZXgoaSlcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0X29uU2VjdGlvbnNUb2dnbGUoZSwgZGF0YSkge1xuXHRcdGlmICh0aGlzLmVsZW1lbnQuaGFzQ2xhc3MoJ2xlcGxheWVyLXNlY3Rpb25zLS1oaWRkZW4nKSAmJiBkYXRhLmNoZWNrZWQpIHtcblx0XHRcdHRoaXMuZWxlbWVudC5yZW1vdmVDbGFzcygnbGVwbGF5ZXItc2VjdGlvbnMtLWhpZGRlbicpO1xuXHRcdH0gZWxzZSBpZiAoIWRhdGEuY2hlY2tlZCkge1xuXHRcdFx0dGhpcy5lbGVtZW50LmFkZENsYXNzKCdsZXBsYXllci1zZWN0aW9ucy0taGlkZGVuJyk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZSBIVE1MIG9mIHNlY3Rpb24gYnkgZGF0YSBhbmQgaW5kZXggc2VjdGlvblxuXHQgKlxuXHQgKiBAcmV0dXJucyB7U3RyaW5nfSBIVE1MXG5cdCAqL1xuXHRjcmVhdGVTZWN0aW9uKHNlY3Rpb24sIGluZGV4KSB7XG5cdFx0Y29uc3QgaXRlbXMgPSB0aGlzLml0ZW1zIHx8IHRoaXMub3B0aW9ucy5pdGVtcztcblx0XHRjb25zdCBpdGVtID0gYFxuXHRcdFx0PGRpdiBjbGFzcz1cImxlcGxheWVyLXNlY3Rpb24gJHshaW5kZXggPyAnbGVwbGF5ZXItc2VjdGlvbi0tYWN0aXZlJyA6ICcnfVwiXG5cdFx0XHRcdGRhdGEtYmVnaW49XCIke3NlY3Rpb24uYmVnaW59XCJcblx0XHRcdFx0ZGF0YS1pbmRleD1cIiR7aW5kZXgudG9TdHJpbmcoKX1cIlxuXHRcdFx0XHRkYXRhLWVuZD1cIiR7c2VjdGlvbi5lbmR9XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJsZXBsYXllci1zZWN0aW9uLXRpbWVcIj4ke3NlY29uZHNUb1RpbWUoc2VjdGlvbi5iZWdpbil9PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJsZXBsYXllci1zZWN0aW9uLWluZm9cIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibGVwbGF5ZXItc2VjdGlvbi1uZXh0LWluZm9cIj5cblx0XHRcdFx0XHRcdCR7c2VjdGlvbi5uZXh0SW5mbyB8fCAn0KHQu9C10LTRg9GO0YnQsNGPINGB0LXQutGG0LjRjyDQvdCw0YfQvdC10YLRgdGPINGH0LXRgNC10LcnfVxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJ0aW1lXCI+JHtzZWNvbmRzVG9UaW1lKGl0ZW1zWzBdLmVuZCl9PC9zcGFuPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdCR7XG5cdFx0XHRcdFx0XHRzZWN0aW9uLnRpdGxlICE9IG51bGwgP1xuXHRcdFx0XHRcdFx0XHRgPGRpdiBjbGFzcz1cImxlcGxheWVyLXNlY3Rpb24tdGl0bGVcIj4ke3NlY3Rpb24udGl0bGV9PC9kaXY+YFxuXHRcdFx0XHRcdFx0OiAnJ1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQke1xuXHRcdFx0XHRcdFx0c2VjdGlvbi5kZXNjcmlwdGlvbiAhPSBudWxsID9cblx0XHRcdFx0XHRcdFx0YDxkaXYgY2xhc3M9XCJsZXBsYXllci1zZWN0aW9uLWRlc2NyaXB0aW9uXCI+JHtzZWN0aW9uLmRlc2NyaXB0aW9ufTwvZGl2PmBcblx0XHRcdFx0XHRcdDogJydcblx0XHRcdFx0XHR9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0YC50cmltKClcblx0XHRyZXR1cm4gaXRlbVxuXHR9XG5cblx0Ly8gVE9ETzog0J/RgNC40LTRg9C80LDRgtGMINGH0YLQviDRgdC00LXQu9Cw0YLRjCDRgSDRgdC+0LHRi9GC0LjRj9C80Lgg0L/QvtGB0LvQtSDQvtCx0L3QvtCy0LvQtdC90LjRjyDQv9C+0LvQvdC+0YHRjNGOINGB0LXQutGG0LjQuFxuXHQvKipcblx0ICogRmluZCBzZWN0aW9uIGJ5IGluZGV4IGFuZCB1cGRhdGUgaGltIHVzaW5nIGRhdGFcblx0ICpcblx0ICogQHBhcmFtIHtPYmplY3R9IGRhdGFcblx0ICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG5cdCAqL1xuXHR1cGRhdGVTZWN0aW9uKGRhdGEsIGluZGV4KSB7XG5cdFx0dGhpcy5nZXRTZWN0aW9uQnlJbmRleChpbmRleClcblx0XHRcdC5yZXBsYWNlV2l0aCh0aGlzLmNyZWF0ZVNlY3Rpb24oZGF0YSwgaW5kZXgpKVxuXHRcdFx0Lm9uKCdjbGljaycsIHRoaXMub25TZWN0aW9uQ2xpY2suYmluZCh0aGlzKSk7XG5cdH1cblxuXHRfY3JlYXRlU2VjdGlvbnMoaXRlbXMpIHtcblx0XHRsZXQgcmVzdWx0ID0gJyc7XG5cdFx0aXRlbXMuZm9yRWFjaCgoc2VjdGlvbiwgaW5kZXgpID0+IHtcblx0XHRcdHJlc3VsdCArPSB0aGlzLmNyZWF0ZVNlY3Rpb24oc2VjdGlvbiwgaW5kZXgpO1xuXHRcdH0pO1xuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdTZWN0aW9ucycsIFNlY3Rpb25zKTtcbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb25zO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvU2VjdGlvbnMuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIEVycm9yRGlzcGxheS5qc1xuICovXG5cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEBjbGFzcyBFcnJvckRpc3BsYXlcbiAqIEBleHRlbmRzIENvbXBvbmVudFxuICovXG5jbGFzcyBFcnJvckRpc3BsYXkgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucz17fSkge1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cdFx0aWYodGhpcy5wbGF5ZXIuX2Vycm9yICE9IG51bGwpIHtcblx0XHRcdHRoaXMubWVzc2FnZSA9IHRoaXMucGxheWVyLl9lcnJvci5tZXNzYWdlO1xuXHRcdFx0dGhpcy5lbGVtZW50LnNob3coKTtcblx0XHR9XG5cdFx0dGhpcy5wbGF5ZXIub24oJ2Vycm9yJywgdGhpcy5vblBsYXllckVycm9yLmJpbmQodGhpcykpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHR0aGlzLmVsZW1lbnQgPSAkKCc8ZGl2IC8+Jylcblx0XHRcdC5hZGRDbGFzcygnbGVwbGF5ZXItZXJyb3ItZGlzcGxheScpXG5cdH1cblxuXHRzZXQgbWVzc2FnZSh2YWx1ZSkge1xuXHRcdHRoaXMuZWxlbWVudC5odG1sKHZhbHVlKTtcblx0fVxuXG5cdG9uUGxheWVyRXJyb3IoZSwgZGF0YSkge1xuXHRcdGNvbnN0IGVycm9yID0gZGF0YS5lcnJvcjtcblx0XHR0aGlzLm1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xuXHRcdHRoaXMuZWxlbWVudC5zaG93KCk7XG5cdH1cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdFcnJvckRpc3BsYXknLCBFcnJvckRpc3BsYXkpO1xuZXhwb3J0IGRlZmF1bHQgRXJyb3JEaXNwbGF5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvRXJyb3JEaXNwbGF5LmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBFcnJvckRpc3BsYXkuanNcbiAqL1xuXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcblxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMudXJsXSBwYXRoIHRvIHBvc3RlciBpbWFnZVxuICogQGNsYXNzIFBvc3RlclxuICogQGV4dGVuZHMgQ29tcG9uZW50XG4gKi9cbmNsYXNzIFBvc3RlciBleHRlbmRzIENvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHR1cmwgOiBvcHRpb25zLnVybFxuXHRcdH0sIG9wdGlvbnMpO1xuXG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblxuXHRcdHRoaXMudXJsID0gdGhpcy5vcHRpb25zLnVybDtcblx0fVxuXG5cdHNldCB1cmwodmFsdWUpIHtcblx0XHRpZih2YWx1ZSA9PSBudWxsKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMuX3VybCA9IHZhbHVlO1xuXHRcdHRoaXMuZWxlbWVudC5jc3MoJ2JhY2tncm91bmQtaW1hZ2UnLCBgdXJsKFwiJHt2YWx1ZX1cIilgKVxuXHR9XG5cblx0Z2V0IHVybCgpIHtcblx0XHRyZXR1cm4gdGhpcy5fdXJsO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHR0aGlzLmVsZW1lbnQgPSAkKCc8ZGl2IC8+Jylcblx0XHRcdC5hZGRDbGFzcygnbGVwbGF5ZXItcG9zdGVyJyk7XG5cblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50O1xuXHR9XG5cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdQb3N0ZXInLCBQb3N0ZXIpO1xuZXhwb3J0IGRlZmF1bHQgUG9zdGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvUG9zdGVyLmpzIiwiLyoqXG4gKiBAZmlsZSBmdWxsc2NyZWVuLWFwaS5qc1xuICovXG5cblxuLypcbiAqIFN0b3JlIHRoZSBicm93c2VyLXNwZWNpZmljIG1ldGhvZHMgZm9yIHRoZSBmdWxsc2NyZWVuIEFQSVxuICogQHR5cGUge09iamVjdHx1bmRlZmluZWR9XG4gKiBAcHJpdmF0ZVxuICovXG5sZXQgRnVsbHNjcmVlbkFwaSA9IHt9O1xuXG4vLyBicm93c2VyIEFQSSBtZXRob2RzXG4vLyBtYXAgYXBwcm9hY2ggZnJvbSBTY3JlZW5mdWwuanMgLSBodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL3NjcmVlbmZ1bGwuanNcbmNvbnN0IGFwaU1hcCA9IFtcblx0Ly8gU3BlYzogaHR0cHM6Ly9kdmNzLnczLm9yZy9oZy9mdWxsc2NyZWVuL3Jhdy1maWxlL3RpcC9PdmVydmlldy5odG1sXG5cdFtcblx0XHQncmVxdWVzdEZ1bGxzY3JlZW4nLFxuXHRcdCdleGl0RnVsbHNjcmVlbicsXG5cdFx0J2Z1bGxzY3JlZW5FbGVtZW50Jyxcblx0XHQnZnVsbHNjcmVlbkVuYWJsZWQnLFxuXHRcdCdmdWxsc2NyZWVuY2hhbmdlJyxcblx0XHQnZnVsbHNjcmVlbmVycm9yJ1xuXHRdLFxuXHQvLyBXZWJLaXRcblx0W1xuXHRcdCd3ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbicsXG5cdFx0J3dlYmtpdEV4aXRGdWxsc2NyZWVuJyxcblx0XHQnd2Via2l0RnVsbHNjcmVlbkVsZW1lbnQnLFxuXHRcdCd3ZWJraXRGdWxsc2NyZWVuRW5hYmxlZCcsXG5cdFx0J3dlYmtpdGZ1bGxzY3JlZW5jaGFuZ2UnLFxuXHRcdCd3ZWJraXRmdWxsc2NyZWVuZXJyb3InXG5cdF0sXG5cdC8vIE9sZCBXZWJLaXQgKFNhZmFyaSA1LjEpXG5cdFtcblx0XHQnd2Via2l0UmVxdWVzdEZ1bGxTY3JlZW4nLFxuXHRcdCd3ZWJraXRDYW5jZWxGdWxsU2NyZWVuJyxcblx0XHQnd2Via2l0Q3VycmVudEZ1bGxTY3JlZW5FbGVtZW50Jyxcblx0XHQnd2Via2l0Q2FuY2VsRnVsbFNjcmVlbicsXG5cdFx0J3dlYmtpdGZ1bGxzY3JlZW5jaGFuZ2UnLFxuXHRcdCd3ZWJraXRmdWxsc2NyZWVuZXJyb3InXG5cdF0sXG5cdC8vIE1vemlsbGFcblx0W1xuXHRcdCdtb3pSZXF1ZXN0RnVsbFNjcmVlbicsXG5cdFx0J21vekNhbmNlbEZ1bGxTY3JlZW4nLFxuXHRcdCdtb3pGdWxsU2NyZWVuRWxlbWVudCcsXG5cdFx0J21vekZ1bGxTY3JlZW5FbmFibGVkJyxcblx0XHQnbW96ZnVsbHNjcmVlbmNoYW5nZScsXG5cdFx0J21vemZ1bGxzY3JlZW5lcnJvcidcblx0XSxcblx0Ly8gTWljcm9zb2Z0XG5cdFtcblx0XHQnbXNSZXF1ZXN0RnVsbHNjcmVlbicsXG5cdFx0J21zRXhpdEZ1bGxzY3JlZW4nLFxuXHRcdCdtc0Z1bGxzY3JlZW5FbGVtZW50Jyxcblx0XHQnbXNGdWxsc2NyZWVuRW5hYmxlZCcsXG5cdFx0J01TRnVsbHNjcmVlbkNoYW5nZScsXG5cdFx0J01TRnVsbHNjcmVlbkVycm9yJ1xuXHRdXG5dO1xuXG5cbmxldCBzcGVjQXBpID0gYXBpTWFwWzBdO1xuXG5sZXQgYnJvd3NlckFwaTtcblxuLy8gZGV0ZXJtaW5lIHRoZSBzdXBwb3J0ZWQgc2V0IG9mIGZ1bmN0aW9uc1xuZm9yIChsZXQgaSA9IDA7IGkgPCBhcGlNYXAubGVuZ3RoOyBpKyspIHtcblx0Ly8gY2hlY2sgZm9yIGV4aXRGdWxsc2NyZWVuIGZ1bmN0aW9uXG5cdGlmIChhcGlNYXBbaV1bMV0gaW4gZG9jdW1lbnQpIHtcblx0XHRicm93c2VyQXBpID0gYXBpTWFwW2ldO1xuXHRcdGJyZWFrO1xuXHR9XG59XG5cbi8vIG1hcCB0aGUgYnJvd3NlciBBUEkgbmFtZXMgdG8gdGhlIHNwZWMgQVBJIG5hbWVzXG5pZiAoYnJvd3NlckFwaSkge1xuXHRmb3IgKGxldCBpPTA7IGk8YnJvd3NlckFwaS5sZW5ndGg7IGkrKykge1xuXHRcdEZ1bGxzY3JlZW5BcGlbc3BlY0FwaVtpXV0gPSBicm93c2VyQXBpW2ldO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZ1bGxzY3JlZW5BcGk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvRnVsbHNjcmVlbkFwaS5qcyIsIi8qKlxuICogQGZpbGUgYnJvd3Nlci5qc1xuICovXG5cblxuY29uc3QgVVNFUl9BR0VOVCA9IHdpbmRvdy5uYXZpZ2F0b3IgJiYgd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQgfHwgJyc7XG5cbmV4cG9ydCBjb25zdCBJU19NT0JJTEUgPSAoL01vYmlsZS9pKS50ZXN0KFVTRVJfQUdFTlQpO1xuXG5leHBvcnQgY29uc3QgSVNfQ0hST01FID0gVVNFUl9BR0VOVC5pbmRleE9mKCdDaHJvbWUnKSA+IC0xO1xuXG5leHBvcnQgY29uc3QgSVNfQU5EUk9JRCA9ICgvQW5kcm9pZC9pKS50ZXN0KFVTRVJfQUdFTlQpO1xuXG5leHBvcnQgY29uc3QgSVNfQU5EUk9JRF9QSE9ORSA9IElTX0FORFJPSUQgJiYgSVNfTU9CSUxFO1xuXG5leHBvcnQgY29uc3QgSVNfSVBBRCA9ICgvaVBhZC9pKS50ZXN0KFVTRVJfQUdFTlQpO1xuLy8gVGhlIEZhY2Vib29rIGFwcCdzIFVJV2ViVmlldyBpZGVudGlmaWVzIGFzIGJvdGggYW4gaVBob25lIGFuZCBpUGFkLCBzb1xuLy8gdG8gaWRlbnRpZnkgaVBob25lcywgd2UgbmVlZCB0byBleGNsdWRlIGlQYWRzLlxuLy8gaHR0cDovL2FydHN5LmdpdGh1Yi5pby9ibG9nLzIwMTIvMTAvMTgvdGhlLXBlcmlscy1vZi1pb3MtdXNlci1hZ2VudC1zbmlmZmluZy9cbmV4cG9ydCBjb25zdCBJU19JUEhPTkUgPSAoL2lQaG9uZS9pKS50ZXN0KFVTRVJfQUdFTlQpICYmICFJU19JUEFEO1xuZXhwb3J0IGNvbnN0IElTX0lQT0QgPSAoL2lQb2QvaSkudGVzdChVU0VSX0FHRU5UKTtcbmV4cG9ydCBjb25zdCBJU19JT1MgPSBJU19JUEhPTkUgfHwgSVNfSVBBRCB8fCBJU19JUE9EO1xuXG5leHBvcnQgY29uc3QgSVNfU0FGQVJJID0gVVNFUl9BR0VOVC5pbmRleE9mKCdTYWZhcmknKSA+IC0xICYmICFJU19DSFJPTUU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvdXRpbHMvYnJvd3Nlci5qcyIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbmNsYXNzIE1lZGlhRXJyb3Ige1xuXHRjb25zdHJ1Y3Rvcih2YWx1ZSkge1xuXHRcdGlmKHZhbHVlIGluc3RhbmNlb2YgTWVkaWFFcnJvcikge1xuXHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuXHRcdFx0dGhpcy5jb2RlID0gdmFsdWU7XG5cdFx0fSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG5cdFx0Ly8gZGVmYXVsdCBjb2RlIGlzIHplcm8sIHNvIHRoaXMgaXMgYSBjdXN0b20gZXJyb3Jcblx0XHRcdHRoaXMubWVzc2FnZSA9IHZhbHVlO1xuXHRcdH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuXG5cdFx0XHQvLyBXZSBhc3NpZ24gdGhlIGBjb2RlYCBwcm9wZXJ0eSBtYW51YWxseSBiZWNhdXNlIG5hdGl2ZSBNZWRpYUVycm9yIG9iamVjdHNcblx0XHRcdC8vIGRvIG5vdCBleHBvc2UgaXQgYXMgYW4gb3duL2VudW1lcmFibGUgcHJvcGVydHkgb2YgdGhlIG9iamVjdC5cblx0XHRcdGlmICh0eXBlb2YgdmFsdWUuY29kZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0dGhpcy5jb2RlID0gdmFsdWUuY29kZTtcblx0XHRcdH1cblxuXHRcdFx0JC5leHRlbmQodGhpcywgdmFsdWUpO1xuXHRcdH1cblxuXHRcdGlmICghdGhpcy5tZXNzYWdlKSB7XG5cdFx0XHR0aGlzLm1lc3NhZ2UgPSBNZWRpYUVycm9yLmRlZmF1bHRNZXNzYWdlc1t0aGlzLmNvZGVdIHx8ICcnO1xuXHRcdH1cblx0fVxufVxuXG5NZWRpYUVycm9yLnByb3RvdHlwZS5jb2RlID0gMDtcblxuTWVkaWFFcnJvci5wcm90b3R5cGUubWVzc2FnZSA9ICcnO1xuXG5NZWRpYUVycm9yLmVycm9yVHlwZXMgPSBbXG5cdCdNRURJQV9FUlJfQ1VTVE9NJyxcblx0J01FRElBX0VSUl9BQk9SVEVEJyxcblx0J01FRElBX0VSUl9ORVRXT1JLJyxcblx0J01FRElBX0VSUl9ERUNPREUnLFxuXHQnTUVESUFfRVJSX1NSQ19OT1RfU1VQUE9SVEVEJyxcblx0J01FRElBX0VSUl9FTkNSWVBURUQnXG5dO1xuXG5cbk1lZGlhRXJyb3IuZGVmYXVsdE1lc3NhZ2VzID0ge1xuXHQxIDogJ9CS0Ysg0L/RgNC10YDQstCw0LvQuCDQt9Cw0LPRgNGD0LfQutGDINCy0LjQtNC10L4uJyxcblx0MiA6ICfQl9Cw0LPRgNGD0LfQutCwINCy0LjQtNC10L4g0L/RgNC10YDQstCw0L3QsCDQuNC3LdC30LAg0L/QvtGC0LXRgNC4INGB0L7QtdC00LjQvdC10L3QuNGPLicsXG5cdDMgOiAn0JfQsNCz0YDRg9C30LrQsCDQstC40LTQtdC+INC+0YHRgtCw0L3QvtCy0LvQtdC90LAg0LjQty3Qt9CwINC/0YDQvtCx0LvQtdC8INGBINCy0LjQtNC10L7RhNCw0LnQu9C+0Lwg0LjQu9C4INC40Lct0LfQsCDRgtC+0LPQviwg0YfRgtC+INCy0LDRiCDQsdGA0LDRg9C30LXRgCDQvdC1INC/0L7QtNC00LXRgNC20LjQstCw0LXRgiDQstC+0YHQv9GA0L7QuNC30LLQtdC00LXQvdC40LUg0LTQsNC90L3QvtCz0L4g0YTQsNC50LvQsC4nLFxuXHQ0IDogJ9CS0LjQtNC10L4g0L3QtSDQvNC+0LbQtdGCINCx0YvRgtGMINC30LDQs9GA0YPQttC10L3QviDQuNC3LdC30LAg0L/RgNC+0LHQu9C10Lwg0YEg0LjQvdGC0LXRgNC90LXRgi3RgdC+0LXQtNC40L3QtdC90LjQtdC8INC40LvQuCDQv9GA0L7QsdC70LXQvCDQvdCwINGB0LXRgNCy0LXRgNC1LiDQmNC70Lgg0YTQvtGA0LzQsNGCINGE0LDQudC70LAg0L3QtSDQv9C+0LTQtNC10YDQttC40LLQsNC10YLRgdGPINCy0LDRiNC40Lwg0LHRgNCw0YPQt9C10YDQvtC8LicsXG5cdDUgOiAn0JLQuNC00LXQviDQt9Cw0YjQuNGE0YDQvtCy0LDQvdC+LCDQuCDQvNGLINC90LUg0LzQvtC20LXQvCDQtdCz0L4g0YDQsNGB0YjQuNGE0YDQvtCy0LDRgtGMLidcbn07XG5cbi8vIEFkZCB0eXBlcyBhcyBwcm9wZXJ0aWVzIG9uIE1lZGlhRXJyb3Jcbi8vIGUuZy4gTWVkaWFFcnJvci5NRURJQV9FUlJfU1JDX05PVF9TVVBQT1JURUQgPSA0O1xuZm9yIChsZXQgZXJyTnVtID0gMDsgZXJyTnVtIDwgTWVkaWFFcnJvci5lcnJvclR5cGVzLmxlbmd0aDsgZXJyTnVtKyspIHtcblx0TWVkaWFFcnJvcltNZWRpYUVycm9yLmVycm9yVHlwZXNbZXJyTnVtXV0gPSBlcnJOdW07XG5cdC8vIHZhbHVlcyBzaG91bGQgYmUgYWNjZXNzaWJsZSBvbiBib3RoIHRoZSBjbGFzcyBhbmQgaW5zdGFuY2Vcblx0TWVkaWFFcnJvci5wcm90b3R5cGVbTWVkaWFFcnJvci5lcnJvclR5cGVzW2Vyck51bV1dID0gZXJyTnVtO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNZWRpYUVycm9yO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL01lZGlhRXJyb3IuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIFBsYXlDb250cm9sLmpzXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9Db250cm9sJztcblxuLyoqXG4gKiBAY2xhc3MgUGxheUNvbnRyb2xcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBleHRlbmRzIENvbnRyb2xcbiAqL1xuY2xhc3MgUGxheUNvbnRyb2wgZXh0ZW5kcyBDb250cm9sIHtcblx0Y29uc3RydWN0b3IgKHBsYXllciwgb3B0aW9ucz17fSkge1xuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0aWNvbk5hbWUgOiAncGxheScsXG5cdFx0XHR0aXRsZSA6ICfQktC+0YHQv9GA0L7QuNC30LLQtdGB0YLQuCDQstC40LTQtdC+Jyxcblx0XHRcdGNsYXNzTmFtZSA6ICdwbGF5Jyxcblx0XHRcdG5hbWUgOiAncGxheSdcblx0XHR9LCBvcHRpb25zKTtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ3BsYXknLCB0aGlzLnNob3dQYXVzZS5iaW5kKHRoaXMpKVxuXHRcdHRoaXMucGxheWVyLm9uKCdwYXVzZScsIHRoaXMuc2hvd1BsYXkuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5wbGF5ZXIub24oJ2VuZGVkJywgdGhpcy5zaG93UmVwbGF5LmJpbmQodGhpcykpO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ3NlZWtpbmcgcGxheScsIHRoaXMucmVtb3ZlUmVwbGF5LmJpbmQodGhpcykpO1xuXHR9XG5cblxuXHQvKipcblx0ICogUGF1c2UgdGhlIHZpZGVvXG5cdCAqL1xuXHRzaG93UGxheSAoKSB7XG5cdFx0dGhpcy5pY29uLmljb25OYW1lID0gJ3BsYXknO1xuXHRcdHRoaXMuZWxlbWVudC5hdHRyKCd0aXRsZScsIHRoaXMub3B0aW9ucy50aXRsZSk7XG5cdH1cblxuXHQvKipcblx0ICogUGxheSB0aGUgdmlkZW9cblx0ICovXG5cdHNob3dQYXVzZSAoKSB7XG5cdFx0dGhpcy5pY29uLmljb25OYW1lID0gJ3BhdXNlJztcblx0XHR0aGlzLmVsZW1lbnQuYXR0cigndGl0bGUnLCAn0J/QvtGB0YLQsNCy0LjRgtGMINC90LAg0L/QsNGD0LfRgycpO1xuXHR9XG5cblx0c2hvd1JlcGxheSgpIHtcblx0XHRpZih0aGlzLnBsYXllci5kdXJhdGlvbiAhPT0gSW5maW5pdHkpIHtcblx0XHRcdHRoaXMuX3JlcGxheSA9IHRydWU7XG5cdFx0XHR0aGlzLmljb24uaWNvbk5hbWUgPSAncmVmcmVzaCc7XG5cdFx0XHR0aGlzLmVsZW1lbnQuYXR0cigndGl0bGUnLCAn0JfQsNC/0YPRgdGC0LjRgtGMINC30LDQvdC+0LLQvicpXG5cdFx0fVxuXHR9XG5cblx0cmVtb3ZlUmVwbGF5KCkge1xuXHRcdGlmKCF0aGlzLl9yZXBsYXkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy5fcmVwbGF5ID0gZmFsc2U7XG5cblx0XHRpZih0aGlzLnBsYXllci52aWRlby5wYXVzZWQpIHtcblx0XHRcdHRoaXMuc2hvd1BsYXkoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zaG93UGF1c2UoKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRvbkNsaWNrKGUpIHtcblx0XHQvL3N1cGVyLm9uQ2xpY2soZSk7XG5cdFx0dGhpcy5wbGF5ZXIudmlkZW8udG9nZ2xlUGxheSgpO1xuXHR9XG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnUGxheUNvbnRyb2wnLCBQbGF5Q29udHJvbCk7XG5Db250cm9sLnJlZ2lzdGVyQ29udHJvbCgncGxheScsIFBsYXlDb250cm9sKTtcbmV4cG9ydCBkZWZhdWx0IFBsYXlDb250cm9sO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvUGxheUNvbnRyb2wuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIFZvbHVtZUNvbnRyb2wuanNcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL0NvbnRyb2wnO1xuaW1wb3J0IENvbnRyb2xEcm9wZG93biBmcm9tICcuL0NvbnRyb2xEcm9wZG93bic7XG5cbi8qKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQGNsYXNzIFZvbHVtZUNvbnRyb2xcbiAqIEBleHRlbmRzIENvbnRyb2xEcm9wZG93blxuICovXG5jbGFzcyBWb2x1bWVDb250cm9sIGV4dGVuZHMgQ29udHJvbERyb3Bkb3duIHtcblxuXHRjb25zdHJ1Y3RvciAocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRpY29uTmFtZSA6ICd2b2x1bWUtZG93bicsXG5cdFx0XHRjbGFzc05hbWUgOiAndm9sdW1lLWNvbnRyb2wnLFxuXHRcdFx0bmFtZSA6ICd2b2x1bWUnXG5cdFx0fSwgb3B0aW9ucyk7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblxuXHRcdHRoaXMucGxheWVyLm9uKCd2b2x1bWVjaGFuZ2UnLCAoZSwgZGF0YSkgPT4ge1xuXHRcdFx0Y29uc3QgdmlkZW8gPSB0aGlzLnBsYXllci52aWRlbztcblx0XHRcdHRoaXMudmFsdWUgPSB2aWRlby5tdXRlZCA/IDAgOiB2aWRlby52b2x1bWU7XG5cdFx0fSlcblx0fVxuXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0c3VwZXIuY3JlYXRlRWxlbWVudCgpO1xuXHRcdGxldCBkcmFnID0gZmFsc2U7XG5cdFx0Y29uc3QgdmlkZW8gPSB0aGlzLnBsYXllci52aWRlbztcblxuXHRcdHRoaXMubWFya2VyID0gJCgnPGRpdi8+JykuYWRkQ2xhc3MoJ3ZvbHVtZS1tYXJrZXInKTtcblxuXHRcdHRoaXMuYWN0aXZlID0gJCgnPGRpdi8+JykuYWRkQ2xhc3MoJ3ZvbHVtZS1hY3RpdmUnKTtcblxuXHRcdHRoaXMubGluZSA9ICQoJzxkaXYvPicpXG5cdFx0XHQuYWRkQ2xhc3MoJ3ZvbHVtZS1saW5lJylcblx0XHRcdC5hcHBlbmQodGhpcy5hY3RpdmUpXG5cdFx0XHQuYXBwZW5kKHRoaXMubWFya2VyKVxuXHRcdFx0Lm9uKCdjbGljaycsIChlKSA9PiB7XG5cdFx0XHRcdGlmIChkcmFnKSByZXR1cm47XG5cdFx0XHRcdGxldCBwID0gdGhpcy5nZXRQb3NpdGlvbihlLnBhZ2VZKTtcblx0XHRcdFx0aWYgKHAgPj0gMCAmJiBwIDw9IDEpIHtcblx0XHRcdFx0XHRpZih2aWRlby5tdXRlZCkge1xuXHRcdFx0XHRcdFx0dmlkZW8ubXV0ZWQgPSBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dmlkZW8udm9sdW1lID0gMSAtIHA7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5kcm9wZG93bkNvbnRlbnRcblx0XHRcdC5hZGRDbGFzcygndm9sdW1lLXNsaWRlcicpXG5cdFx0XHQuYXBwZW5kKHRoaXMubGluZSk7XG5cblx0XHR0aGlzLmljb24uZWxlbWVudC5hdHRyKCd0aXRsZScsICfQntGC0LrQu9GO0YfQuNGC0Ywg0LfQstGD0LonKTtcblxuXHRcdHRoaXMubWFya2VyLm9uKCdtb3VzZWRvd24nLCAoZSkgPT4ge1xuXHRcdFx0aWYgKGUud2hpY2ggIT09IDEpIHJldHVybjtcblx0XHRcdGRyYWcgPSB0cnVlO1xuXHRcdH0pO1xuXG5cdFx0JChkb2N1bWVudCkub24oe1xuXHRcdFx0bW91c2Vtb3ZlIDogKGUpID0+IHtcblx0XHRcdFx0aWYgKCFkcmFnKSByZXR1cm47XG5cdFx0XHRcdGxldCBwID0gdGhpcy5nZXRQb3NpdGlvbihlLnBhZ2VZKTtcblx0XHRcdFx0aWYgKHAgPj0gMCAmJiBwIDw9IDEpIHtcblx0XHRcdFx0XHRpZih2aWRlby5tdXRlZCkge1xuXHRcdFx0XHRcdFx0dmlkZW8ubXV0ZWQgPSBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dmlkZW8udm9sdW1lID0gMSAtIHBcblx0XHRcdFx0fVxuXHRcdFx0fSxcblxuXHRcdFx0bW91c2V1cCA6IChlKSA9PiB7XG5cdFx0XHRcdGRyYWcgPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50O1xuXHR9XG5cblxuXHRzZXQgdmFsdWUgKHZhbHVlKSB7XG5cdFx0dGhpcy5pY29uLmljb25OYW1lID0gdGhpcy5wbGF5ZXIuY2FsY1ZvbHVtZUljb24odmFsdWUpO1xuXG5cdFx0bGV0IHAgPSBNYXRoLnJvdW5kKHZhbHVlICogMTAwKS50b1N0cmluZygpICsgJyUnO1xuXHRcdHRoaXMuYWN0aXZlLmNzcygnaGVpZ2h0JywgcCk7XG5cdFx0dGhpcy5tYXJrZXIuY3NzKCdib3R0b20nLCBwKTtcblx0fVxuXG5cdHRvZ2dsZU11dGVkICgpIHtcblx0XHRjb25zdCB7IHZpZGVvIH0gPSB0aGlzLnBsYXllcjtcblxuXHRcdHZpZGVvLm11dGVkID0gIXZpZGVvLm11dGVkO1xuXHR9XG5cblx0Z2V0UG9zaXRpb24gKHkpIHtcblx0XHRyZXR1cm4gKHkgLSB0aGlzLmxpbmUub2Zmc2V0KCkudG9wKSAvIHRoaXMubGluZS5oZWlnaHQoKTtcblx0fVxuXG5cdG9uQ2xpY2sgKGUpIHtcblx0XHRzdXBlci5vbkNsaWNrKGUpO1xuXHRcdHRoaXMudG9nZ2xlTXV0ZWQoKTtcblx0fVxuXG5cdG9uUGxheWVySW5pdGVkKCkge1xuXHRcdHRoaXMudmFsdWUgPSB0aGlzLnBsYXllci52aWRlby5kZWZhdWx0Vm9sdW1lO1xuXHR9XG5cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdWb2x1bWVDb250cm9sJywgVm9sdW1lQ29udHJvbCk7XG5Db250cm9sLnJlZ2lzdGVyQ29udHJvbCgndm9sdW1lJywgVm9sdW1lQ29udHJvbCk7XG5leHBvcnQgZGVmYXVsdCBWb2x1bWVDb250cm9sO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvVm9sdW1lQ29udHJvbC5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgQ29udHJvbERyb3Bkb3duLmpzXG4gKi9cblxuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9Db250cm9sJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuXG4vKipcbiAqIEBjbGFzcyBDb250cm9sRHJvcGRvd25cbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEBwcm9wZXJ0eSB7alF1ZXJ5fSBkcm9wZG93bkNvbnRlbnQgQ29udGVudCBvZiBwb3B1cFxuICogQGV4dGVuZHMgQ29udHJvbFxuICovXG5jbGFzcyBDb250cm9sRHJvcGRvd24gZXh0ZW5kcyBDb250cm9sIHtcblxuXHRjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnM9e30pIHtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXHRcdHRoaXMuZWxlbWVudC5vbignbW91c2VlbnRlcicsICgpID0+ICF0aGlzLmRpc2FibGUgJiYgdGhpcy5kcm9wZG93bkNvbnRlbnQuc2hvdygpKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ21vdXNlbGVhdmUnLCAoKSA9PiB0aGlzLmRyb3Bkb3duQ29udGVudC5oaWRlKCkpO1xuXHR9XG5cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdHN1cGVyLmNyZWF0ZUVsZW1lbnQoKTtcblx0XHR0aGlzLmRyb3Bkb3duQ29udGVudCA9ICQoJzxkaXYgLz4nKS5hZGRDbGFzcygnY29udHJvbC1kcm9wZG93bl9fY29udGVudCcpO1xuXHRcdHRoaXMuZWxlbWVudC5hcHBlbmQodGhpcy5kcm9wZG93bkNvbnRlbnQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0YnVpbGRDU1NDbGFzcygpIHtcblx0XHRyZXR1cm4gYGNvbnRyb2wtZHJvcGRvd24gJHtzdXBlci5idWlsZENTU0NsYXNzKCl9YFxuXHR9XG5cblx0X29uQ2xpY2soZSkge1xuXHRcdGlmKCQoZS50YXJnZXQpLmNsb3Nlc3QodGhpcy5kcm9wZG93bkNvbnRlbnQpLmxlbmd0aCA+IDApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRzdXBlci5fb25DbGljayhlKTtcblx0fVxuXG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnQ29udHJvbERyb3Bkb3duJywgQ29udHJvbERyb3Bkb3duKTtcbkNvbnRyb2wucmVnaXN0ZXJDb250cm9sKCdkcm9wZG93bicsIENvbnRyb2xEcm9wZG93bik7XG5leHBvcnQgZGVmYXVsdCBDb250cm9sRHJvcGRvd247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9Db250cm9sRHJvcGRvd24uanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIFRpbWVsaW5lQ29udHJvbC5qc1xuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL0NvbXBvbmVudCc7XG5pbXBvcnQgQ29udHJvbCBmcm9tICcuLi9Db250cm9sJztcbmltcG9ydCBDb250cm9sVGV4dCBmcm9tICcuLi9Db250cm9sVGV4dCc7XG5pbXBvcnQgQnVmZmVyZWRSYW5nZXMgZnJvbSAnLi9CdWZmZXJlZFJhbmdlcyc7XG5pbXBvcnQgTWFya2VyIGZyb20gJy4vTWFya2VyJztcbmltcG9ydCB7IHNlY29uZHNUb1RpbWUgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbi8qKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQGNsYXNzIFRpbWVsaW5lQ29udHJvbFxuICogQHByb3BlcnR5IHtDb250cm9sVGV4dH0gY3VycmVudFRpbWUgQ3VycmVudCB0aW1lJ3MgdGV4dFxuICogQHByb3BlcnR5IHtDb250cm9sVGV4dH0gdG90YWxUaW1lIFRvdGFsIHRpbWVcbiAqIEBwcm9wZXJ0eSB7alF1ZXJ5fSBsaW5lXG4gKiBAZXh0ZW5kcyBDb250cm9sXG4gKi9cbmNsYXNzIFRpbWVsaW5lQ29udHJvbCBleHRlbmRzIENvbnRyb2wge1xuXG5cdGNvbnN0cnVjdG9yIChwbGF5ZXIsIG9wdGlvbnM9e30pIHtcblx0XHRvcHRpb25zID0gJC5leHRlbmQoe30sIHtcblx0XHRcdG5hbWUgOiAndGltZWxpbmUnLFxuXHRcdFx0Y2xhc3NOYW1lIDogJ3RpbWVsaW5lIHRpbWVsaW5lLWNvbnRhaW5lcidcblx0XHR9LCBvcHRpb25zKTtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXG5cblx0XHR0aGlzLm1hcmtlci5lbGVtZW50Lm9uKCdsZXBsYXllcl9tb3VzZW1vdmUnLCB0aGlzLl9vbk1hcmtlck1vdXNlbW92ZS5iaW5kKHRoaXMpKTtcblxuXHRcdHRoaXMubWFya2VyLmVsZW1lbnQub24oJ2xlcGxheWVyX21vdXNlZG93bicsIHRoaXMuX29uTWFya2VyTW91c2Vkb3duLmJpbmQodGhpcykpO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ3NlY3Rpb25zaW5pdCcsIHRoaXMub25TZWN0aW9uc0luaXQuYmluZCh0aGlzKSk7XG5cblx0XHR0aGlzLnBsYXllci5vbigndGltZXVwZGF0ZScsIHRoaXMuX29uVGltZVVwZGF0ZS5iaW5kKHRoaXMpKTtcblxuXHRcdHRoaXMucGxheWVyLm9uKCd0aW1ldXBkYXRlbG9hZCcsIHRoaXMuX29uVGltZVVwZGF0ZS5iaW5kKHRoaXMpKVxuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ2R1cmF0aW9uY2hhbmdlJywgdGhpcy5fb25EdXJhdGlvbkNoYW5nZS5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdF9vbk1hcmtlck1vdXNlZG93bihlKSB7XG5cdFx0dGhpcy5tYXJrZXJTaGFkb3cuZWxlbWVudC5oaWRlKCk7XG5cdH1cblxuXHRfb25NYXJrZXJNb3VzZW1vdmUoZSwgZGF0YSkge1xuXHRcdGNvbnN0IHggPSBkYXRhLng7XG5cdFx0Y29uc3QgcCA9IHRoaXMuZ2V0UG9zaXRpb24oeCk7XG5cdFx0Y29uc3QgdmlkZW8gPSB0aGlzLnBsYXllci52aWRlbztcblx0XHRpZiAocCA+IDAgJiYgcCA8IDEpIHtcblx0XHRcdHRoaXMubWFya2VyLm1hcmtlclRpbWVcblx0XHRcdFx0LnNob3coKVxuXHRcdFx0XHQuaHRtbChzZWNvbmRzVG9UaW1lKHZpZGVvLmR1cmF0aW9uICogcCkpO1xuXHRcdFx0dmlkZW8uY3VycmVudFRpbWUgPSB2aWRlby5kdXJhdGlvbiAqIHBcblx0XHR9XG5cdH1cblxuXHRfb25UaW1lVXBkYXRlKGUsIGRhdGEpIHtcblx0XHRjb25zdCBkdXJhdGlvbiA9IHRoaXMucGxheWVyLnZpZGVvLmR1cmF0aW9uO1xuXHRcdGNvbnN0IHRpbWUgPSB0aGlzLnBsYXllci5jdXJyZW50VGltZTtcblx0XHR0aGlzLmhhcmRNb3ZlKHRpbWUgLyBkdXJhdGlvbik7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdHN1cGVyLmNyZWF0ZUVsZW1lbnQoKTtcblx0XHRsZXQgdmlkZW8gPSB0aGlzLnBsYXllci52aWRlbztcblxuXHRcdHRoaXMuZHJhZyA9IGZhbHNlO1xuXG5cdFx0Ly8gQ3JlYXRlIGxhYmVsc1xuXHRcdHRoaXMuY3VycmVudFRpbWUgPSBuZXcgQ29udHJvbFRleHQodGhpcy5wbGF5ZXIsIHsgY2xhc3NOYW1lIDogJ3RpbWUtY3VycmVudCcgfSk7XG5cdFx0dGhpcy5jdXJyZW50VGltZS50ZXh0ID0gJzAwOjAwJztcblx0XHR0aGlzLnRvdGFsVGltZSA9IG5ldyBDb250cm9sVGV4dCh0aGlzLnBsYXllciwge2NsYXNzTmFtZSA6ICd0aW1lLXRvdGFsJyB9KTtcblxuXHRcdC8vIENyZWF0ZSBsaW5lIHdpdGggbWFya2VycyBhbmQgcGxheWVkIHJhbmdlXG5cblx0XHR0aGlzLm1hcmtlciA9IG5ldyBNYXJrZXIodGhpcy5wbGF5ZXIsIHtcblx0XHRcdGRyYWcgOiB0cnVlXG5cdFx0fSk7XG5cblx0XHR0aGlzLm1hcmtlclNoYWRvdyA9IG5ldyBNYXJrZXIodGhpcy5wbGF5ZXIsIHtcblx0XHRcdGNsYXNzTmFtZSA6ICdzaGFkb3cnXG5cdFx0fSk7XG5cdFx0dGhpcy5tYXJrZXJTaGFkb3cuZWxlbWVudC5oaWRlKCk7XG5cblxuXHRcdC8vIFBsYXllZCByYW5nZXNcblx0XHR0aGlzLnBsYXllZFJhbmdlcyA9ICQoJzxkaXYgLz4nKS5hZGRDbGFzcygndGltZS1wbGF5ZWQnKTtcblxuXG5cdFx0Ly8gQnVmZmVyZWQgcmFuZ2VzXG5cdFx0dGhpcy5idWZmZXJlZFJhbmdlcyA9IG5ldyBCdWZmZXJlZFJhbmdlcyh0aGlzLnBsYXllcikuZWxlbWVudDtcblxuXHRcdHRoaXMubGluZSA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0LmFkZENsYXNzKCd0aW1lbGluZScpXG5cdFx0XHQuYXBwZW5kKHRoaXMubWFya2VyLmVsZW1lbnQpXG5cdFx0XHQuYXBwZW5kKHRoaXMubWFya2VyU2hhZG93LmVsZW1lbnQpXG5cdFx0XHQuYXBwZW5kKHRoaXMucGxheWVkUmFuZ2VzKVxuXHRcdFx0LmFwcGVuZCh0aGlzLmJ1ZmZlcmVkUmFuZ2VzKVxuXHRcdFx0Lm9uKHtcblx0XHRcdFx0bW91c2Vtb3ZlIDogKGUpID0+IHtcblx0XHRcdFx0XHRpZiAodGhpcy5tYXJrZXIuZHJhZykgcmV0dXJuO1xuXG5cdFx0XHRcdFx0bGV0IHAgPSB0aGlzLmdldFBvc2l0aW9uKGUucGFnZVgpO1xuXHRcdFx0XHRcdGlmIChwID4gMCAmJiBwIDwgMSkge1xuXHRcdFx0XHRcdFx0dGhpcy5tYXJrZXJTaGFkb3cuZWxlbWVudFxuXHRcdFx0XHRcdFx0XHQuc2hvdygpXG5cdFx0XHRcdFx0XHRcdC5jc3MoJ2xlZnQnLCBwICogMTAwICsgJyUnKTtcblx0XHRcdFx0XHRcdHRoaXMubWFya2VyU2hhZG93XG5cdFx0XHRcdFx0XHRcdC5tYXJrZXJUaW1lXG5cdFx0XHRcdFx0XHRcdC5zaG93KClcblx0XHRcdFx0XHRcdFx0Lmh0bWwoc2Vjb25kc1RvVGltZSh2aWRlby5kdXJhdGlvbiAqIHApKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGhpcy5tYXJrZXJTaGFkb3cuZWxlbWVudC5oaWRlKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXG5cdFx0XHRcdG1vdXNlbGVhdmUgOiAoZSkgPT4ge1xuXHRcdFx0XHRcdGlmICh0aGlzLmRyYWcpIHJldHVybjtcblx0XHRcdFx0XHR0aGlzLm1hcmtlclNoYWRvdy5lbGVtZW50LmhpZGUoKVxuXHRcdFx0XHR9LFxuXG5cdFx0XHRcdG1vdXNlZG93biA6IChlKSA9PiB7XG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0Y2xpY2sgOiB0aGlzLl9vbkxpbmVDbGljay5iaW5kKHRoaXMpLFxuXG5cdFx0XHRcdHRvdWNobW92ZSA6IChlKSA9PiB7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5lbGVtZW50LmFkZENsYXNzKCd0aW1lbGluZS1jb250YWluZXInKVxuXHRcdFx0LmFwcGVuZCgkKCc8ZGl2IC8+Jylcblx0XHRcdFx0LmFkZENsYXNzKCd0aW1lbGluZS1zdWJjb250YWluZXInKVxuXHRcdFx0XHQuYXBwZW5kKHRoaXMuY3VycmVudFRpbWUuZWxlbWVudClcblx0XHRcdFx0LmFwcGVuZCh0aGlzLmxpbmUpXG5cdFx0XHRcdC5hcHBlbmQodGhpcy50b3RhbFRpbWUuZWxlbWVudCkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0X29uQ2xpY2soZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0fVxuXG5cdF9vbkxpbmVDbGljayhlKSB7XG5cdFx0aWYgKGUud2hpY2ggIT09IDEpIHJldHVybjtcblx0XHRpZiAodGhpcy5kcmFnKSByZXR1cm47XG5cdFx0Y29uc3QgdmlkZW8gPSB0aGlzLnBsYXllci52aWRlbztcblx0XHR0aGlzLmhhcmRNb3ZlKHRoaXMuZ2V0UG9zaXRpb24oZS5wYWdlWCkpO1xuXHRcdHZpZGVvLmN1cnJlbnRUaW1lID0gKHZpZGVvLmR1cmF0aW9uICogdGhpcy5nZXRQb3NpdGlvbihlLnBhZ2VYKSk7XG5cdH1cblxuXHRvblNlY3Rpb25zSW5pdChlKSB7XG5cdFx0Y29uc3QgZHVyYXRpb24gPSB0aGlzLnBsYXllci52aWRlby5kdXJhdGlvbjtcblx0XHRpZihpc05hTihkdXJhdGlvbikpIHtcblx0XHRcdHJldHVyblxuXHRcdH1cblx0XHRpZiAodGhpcy5wbGF5ZXIuc2VjdGlvbnMpIHtcblx0XHRcdHRoaXMudXBkYXRlU2VjdGlvblJhbmdlcyh0aGlzLnBsYXllci5zZWN0aW9ucy5pdGVtcyk7XG5cdFx0fVxuXHR9XG5cblx0dXBkYXRlU2VjdGlvblJhbmdlcyhpdGVtcykge1xuXHRcdGlmKHRoaXMuc2VjdGlvbnMgPT0gbnVsbCB8fCB0aGlzLnNlY3Rpb25zLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0dGhpcy5zZWN0aW9ucyA9IHRoaXMuY3JlYXRlU2VjdGlvblJhbmdlcyhpdGVtcyk7XG5cdFx0XHR0aGlzLmxpbmUuYXBwZW5kKHRoaXMuc2VjdGlvbnMpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnNlY3Rpb25zLmh0bWwodGhpcy5jcmVhdGVTZWN0aW9uUmFuZ2VzKGl0ZW1zKSk7XG5cdFx0fVxuXHR9XG5cblx0Y3JlYXRlU2VjdGlvblJhbmdlcyhpdGVtcykge1xuXHRcdGNvbnN0IGR1cmF0aW9uID0gdGhpcy5wbGF5ZXIudmlkZW8uZHVyYXRpb247XG5cdFx0bGV0IHJlc3VsdCA9ICQoJzxkaXYgLz4nKS5hZGRDbGFzcygnbGVwbGF5ZXItdGltZWxpbmUtc2VjdGlvbnMnKTtcblx0XHRpdGVtcy5mb3JFYWNoKChzZWN0aW9uKSA9PiB7XG5cdFx0XHRjb25zdCBsZW5ndGggPSAoc2VjdGlvbi5lbmQgLSBzZWN0aW9uLmJlZ2luKTtcblx0XHRcdGNvbnN0IGl0ZW0gPSAkKCc8ZGl2IC8+Jylcblx0XHRcdFx0LmFkZENsYXNzKCdsZXBsYXllci10aW1lbGluZS1zZWN0aW9uJylcblx0XHRcdFx0LmNzcyh7XG5cdFx0XHRcdFx0d2lkdGggOiBsZW5ndGggLyBkdXJhdGlvbiAqIDEwMCArICclJyxcblx0XHRcdFx0XHRsZWZ0IDogc2VjdGlvbi5iZWdpbiAvIGR1cmF0aW9uICogMTAwICsgJyUnXG5cdFx0XHRcdH0pO1xuXHRcdFx0cmVzdWx0LmFwcGVuZChpdGVtKTtcblx0XHR9KVxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblxuXHRnZXRQb3NpdGlvbiAoeCkge1xuXHRcdHJldHVybiAoeCAtIHRoaXMubGluZS5vZmZzZXQoKS5sZWZ0KSAvIHRoaXMubGluZS53aWR0aCgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIE1vdmUgbWFya2VyIG9uIHRpbWVsaW5lIG9uIHBlcmNlbnQgZnJvbSBhcmd1bWVudCwgbm90IGZyb20gdmlkZW8uY3VycmVudFRpbWVcblx0ICogQHBhcmFtIHtOdW1iZXJ9IHBlcmNlbnQgVGhlIHBlcmNlbnQgd2hpY2ggeW91IHdhbnQgdG8gbW92ZSBtYXJrZXIgb24gdGltZWxpbmVcblx0ICovXG5cdGhhcmRNb3ZlIChwZXJjZW50KSB7XG5cdFx0bGV0IGN1cnJlbnRUaW1lID0gdGhpcy5wbGF5ZXIudmlkZW8uZHVyYXRpb24gKiBwZXJjZW50O1xuXHRcdGlmKGlzTmFOKGN1cnJlbnRUaW1lKSkgcmV0dXJuO1xuXHRcdHBlcmNlbnQgPSBwZXJjZW50ICogMTAwO1xuXHRcdHRoaXMubWFya2VyLmVsZW1lbnQuY3NzKCdsZWZ0JywgcGVyY2VudCArICclJyk7XG5cdFx0dGhpcy5wbGF5ZWRSYW5nZXMuY3NzKCd3aWR0aCcsIHBlcmNlbnQgKyAnJScpO1xuXHRcdHRoaXMuY3VycmVudFRpbWUudGV4dCA9IHNlY29uZHNUb1RpbWUoY3VycmVudFRpbWUpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBkZXByZWNhdGVkXG5cdCAqL1xuXHRtb3ZlICgpIHtcblx0XHRsZXQgdmlkZW8gPSB0aGlzLnBsYXllci52aWRlbztcblx0XHRsZXQgcGVyY2VudCA9ICh2aWRlby5jdXJyZW50VGltZSAvIHZpZGVvLmR1cmF0aW9uICogMTAwKS50b0ZpeGVkKDIpO1xuXHRcdGxldCBjdXJyZW50VGltZSA9IHZpZGVvLmN1cnJlbnRUaW1lO1xuXHRcdGlmKGlzTmFOKGN1cnJlbnRUaW1lKSkgcmV0dXJuO1xuXHRcdHRoaXMubWFya2VyLmVsZW1lbnQuY3NzKCdsZWZ0JywgcGVyY2VudCArICclJyk7XG5cdFx0dGhpcy5wbGF5ZWRSYW5nZXMuY3NzKCd3aWR0aCcsIHBlcmNlbnQgKyAnJScpO1xuXHRcdHRoaXMuY3VycmVudFRpbWUudGV4dCA9IHNlY29uZHNUb1RpbWUoY3VycmVudFRpbWUpO1xuXHR9XG5cblxuXHR1cGRhdGVMYWJlbHMoKSB7XG5cdFx0Y29uc3QgdmlkZW8gPSB0aGlzLnBsYXllci52aWRlbztcblx0XHR0aGlzLnRvdGFsVGltZS50ZXh0ID0gc2Vjb25kc1RvVGltZSgwLCBNYXRoLmZsb29yKHZpZGVvLmR1cmF0aW9uIC8gMzYwMCkgPiAwKTtcblx0XHRjb25zdCB3aWR0aCA9IHRoaXMudG90YWxUaW1lLmVsZW1lbnQud2lkdGgoKTtcblxuXHRcdHRoaXMudG90YWxUaW1lLnRleHQgPSBzZWNvbmRzVG9UaW1lKHZpZGVvLmR1cmF0aW9uKTtcblx0XHR0aGlzLmN1cnJlbnRUaW1lLnRleHQgPSBzZWNvbmRzVG9UaW1lKHZpZGVvLmN1cnJlbnRUaW1lIHx8IDApO1xuXHRcdHRoaXMuY3VycmVudFRpbWUuZWxlbWVudC5jc3Moe1xuXHRcdFx0d2lkdGhcblx0XHR9KVxuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0b25QbGF5ZXJJbml0ZWQoZSkge1xuXHRcdHRoaXMudXBkYXRlTGFiZWxzKCk7XG5cdFx0aWYgKHRoaXMucGxheWVyLnNlY3Rpb25zKSB7XG5cdFx0XHR0aGlzLnVwZGF0ZVNlY3Rpb25SYW5nZXModGhpcy5wbGF5ZXIuc2VjdGlvbnMuaXRlbXMpO1xuXHRcdH1cblx0fVxuXG5cdF9pbml0V2F0Y2hCdWZmZXIgKCkge1xuXHRcdGNsZWFySW50ZXJ2YWwodGhpcy53YXRjaEJ1ZmZlckludGVydmFsKTtcblx0XHRsZXQgdmlkZW8gPSB0aGlzLnBsYXllci52aWRlbztcblx0XHRsZXQgdXBkYXRlUHJvZ3Jlc3NCYXIgPSAoKSA9PiB7XG5cdFx0XHRjb25zdCBFTkQgPSAxO1xuXHRcdFx0Y29uc3QgU1RBUlQgPSAwO1xuXHRcdFx0bGV0IHJlc3VsdCA9ICQoJycpO1xuXHRcdFx0dmlkZW8ubG9hZGVkLmZvckVhY2goaXRlbSA9PiB7XG5cdFx0XHRcdGxldCBkb21JdGVtID0gJCgnPGRpdiAvPicpLmFkZENsYXNzKCd0aW1lLWJ1ZmZlcmVkJyk7XG5cdFx0XHRcdGRvbUl0ZW0uY3NzKHtcblx0XHRcdFx0XHRsZWZ0IDogaXRlbVtTVEFSVF0gKiAxMDAgKyAnJScsXG5cdFx0XHRcdFx0d2lkdGggOiAoaXRlbVtFTkRdIC0gaXRlbVtTVEFSVF0pICogMTAwICsgJyUnXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRyZXN1bHQgPSByZXN1bHQuYWRkKGRvbUl0ZW0pO1xuXHRcdFx0fSk7XG5cdFx0XHR0aGlzLmJ1ZmZlcmVkLmh0bWwocmVzdWx0KTtcblx0XHRcdGlmICh2aWRlby5sb2FkZWQubGVuZ3RoICYmICgxIC0gdmlkZW8ubG9hZGVkU2l6ZSkgPD0gMC4wNSkge1xuXHRcdFx0XHRjbGVhckludGVydmFsKHRoaXMud2F0Y2hCdWZmZXJJbnRlcnZhbCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHRoaXMud2F0Y2hCdWZmZXJJbnRlcnZhbCA9IHNldEludGVydmFsKHVwZGF0ZVByb2dyZXNzQmFyLCA1MDApO1xuXHR9XG5cblx0LyoqXG5cdCAqIE9uIGR1cmF0aW9uY2hhbmdlIGV2ZW50IGhhbmRsZXJcblx0ICovXG5cdF9vbkR1cmF0aW9uQ2hhbmdlICgpIHtcblx0XHR0aGlzLnVwZGF0ZUxhYmVscygpO1xuXHRcdGlmICh0aGlzLnBsYXllci5zZWN0aW9ucykge1xuXHRcdFx0dGhpcy51cGRhdGVTZWN0aW9uUmFuZ2VzKHRoaXMucGxheWVyLnNlY3Rpb25zLml0ZW1zKTtcblx0XHR9XG5cdH1cblxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ1RpbWVsaW5lQ29udHJvbCcsIFRpbWVsaW5lQ29udHJvbCk7XG5Db250cm9sLnJlZ2lzdGVyQ29udHJvbCgndGltZWxpbmUnLCBUaW1lbGluZUNvbnRyb2wpO1xuZXhwb3J0IGRlZmF1bHQgVGltZWxpbmVDb250cm9sO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvVGltZWxpbmUvVGltZWxpbmVDb250cm9sLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBDb250cm9sVGV4dC5qc1xuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL0NvbnRyb2wnO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5cbi8qKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQGNsYXNzIENvbnRyb2xUZXh0XG4gKiBAZXhudGVkcyBDb250cm9sXG4gKi9cbmNsYXNzIENvbnRyb2xUZXh0IGV4dGVuZHMgQ29udHJvbCB7XG5cdGNvbnN0cnVjdG9yIChwbGF5ZXIsIG9wdGlvbnM9e30pIHtcblx0XHRvcHRpb25zID0gJC5leHRlbmQoe30sIHtcblx0XHRcdGNsYXNzTmFtZSA6ICcnXG5cdFx0fSwgb3B0aW9ucyk7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0c3VwZXIuY3JlYXRlRWxlbWVudCgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0YnVpbGRDU1NDbGFzcygpIHtcblx0XHRyZXR1cm4gYGNvbnRyb2wtdGV4dCAke3RoaXMub3B0aW9ucy5jbGFzc05hbWV9YDtcblx0fVxuXG5cblx0LyoqXG5cdCAqIFNldHRlciBvZiB0ZXh0IGZpZWxkXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG5cdCAqL1xuXG5cdHNldCB0ZXh0ICh2YWx1ZSkge1xuXHRcdHRoaXMuX3RleHQgPSB2YWx1ZTtcblx0XHR0aGlzLmVsZW1lbnQuaHRtbCh2YWx1ZSk7XG5cdH1cblxuXHRnZXQgdGV4dCAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3RleHRcblx0fVxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ0NvbnRyb2xUZXh0JywgQ29udHJvbFRleHQpO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ3RleHQnLCBDb250cm9sVGV4dCk7XG5leHBvcnQgZGVmYXVsdCBDb250cm9sVGV4dDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL0NvbnRyb2xUZXh0LmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBCdWZmZXJlZFJhbmdlcy5qc1xuICovXG5cbmltcG9ydCB7IHBlcmNlbnRpZnksIGNyZWF0ZUVsIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9Db21wb25lbnQnO1xuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBjbGFzcyBCdWZmZXJlZFJhbmdlc1xuICogQGV4dGVuZHMgQ29udHJvbFxuICovXG5cbmNsYXNzIEJ1ZmZlcmVkUmFuZ2VzIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ3Byb2dyZXNzJywgdGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5wbGF5ZXIub24oJ3NlZWtlZCcsIHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHR0aGlzLnJhbmdlID0gY3JlYXRlRWwoJ2RpdicsIHtcblx0XHRcdGNsYXNzTmFtZSA6ICdsZXBsYXllci10aW1lbGluZS1idWZmZXJlZF9fcmFuZ2UnXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50ID0gY3JlYXRlRWwoJ2RpdicsIHtcblx0XHRcdGNsYXNzTmFtZSA6ICdsZXBsYXllci10aW1lbGluZS1idWZmZXJlZCdcblx0XHR9KS5hcHBlbmQodGhpcy5yYW5nZSk7XG5cdH1cblxuXG5cdHVwZGF0ZSgpIHtcblx0XHRjb25zdCBidWZmZXJlZCA9IHRoaXMucGxheWVyLnZpZGVvLmJ1ZmZlcmVkO1xuXHRcdGNvbnN0IGR1cmF0aW9uID0gdGhpcy5wbGF5ZXIudmlkZW8uZHVyYXRpb247XG5cdFx0aWYoYnVmZmVyZWQgPT0gbnVsbCkgcmV0dXJuO1xuXG5cdFx0bGV0IGVuZCA9IDA7XG5cdFx0aWYgKGJ1ZmZlcmVkLmxlbmd0aCA+IDApIHtcblx0XHRcdGVuZCA9IGJ1ZmZlcmVkLmVuZChidWZmZXJlZC5sZW5ndGggLSAxKTtcblx0XHR9XG5cblx0XHRpZiAoZHVyYXRpb24gPiAwKSB7XG5cdFx0XHR0aGlzLnJhbmdlLmNzcyh7XG5cdFx0XHRcdHdpZHRoIDogcGVyY2VudGlmeShlbmQsIGR1cmF0aW9uKSAqIDEwMCArICclJ1xuXHRcdFx0fSlcblxuXHRcdH1cblx0fVxufVxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdCdWZmZXJlZFJhbmdlcycsIEJ1ZmZlcmVkUmFuZ2VzKTtcbmV4cG9ydCBkZWZhdWx0IEJ1ZmZlcmVkUmFuZ2VzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvVGltZWxpbmUvQnVmZmVyZWRSYW5nZXMuanMiLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9Db21wb25lbnQnO1xuXG5jbGFzcyBNYXJrZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcblxuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0ZHJhZyA6IGZhbHNlLFxuXHRcdFx0Y2xhc3NOYW1lIDogJydcblx0XHR9LCBvcHRpb25zKTtcblxuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdtb3VzZWRvd24nLCB0aGlzLl9vbk1vdXNlZG93bi5iaW5kKHRoaXMpKTtcblxuXHRcdCQoZG9jdW1lbnQpLm9uKHtcblxuXHRcdFx0bW91c2Vtb3ZlIDogKGUpID0+IHtcblx0XHRcdFx0aWYgKCF0aGlzLmRyYWcpIHJldHVybjtcblx0XHRcdFx0dGhpcy5lbGVtZW50LnRyaWdnZXIoJ2xlcGxheWVyX21vdXNlbW92ZScsIHsgeCA6IGUucGFnZVggfSk7XG5cdFx0XHR9LFxuXG5cdFx0XHRtb3VzZXVwIDogKGUpID0+IHtcblx0XHRcdFx0aWYgKCF0aGlzLmRyYWcpIHJldHVybjtcblx0XHRcdFx0dGhpcy5kcmFnID0gZmFsc2U7XG5cdFx0XHRcdHRoaXMubWFya2VyVGltZS5oaWRlKCk7XG5cdFx0XHRcdHRoaXMuZWxlbWVudC50cmlnZ2VyKCdsZXBsYXllcl9tb3VzZXVwJywgeyB4IDogZS5wYWdlWCB9KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdHNldCBkcmFnKHZhbHVlKSB7XG5cdFx0dGhpcy5fZHJhZyA9IHZhbHVlO1xuXHRcdHRoaXMuZWxlbWVudC50b2dnbGVDbGFzcygndGltZS1tYXJrZXItLWRyYWcnLCB2YWx1ZSk7XG5cdH1cblxuXHRnZXQgZHJhZygpIHtcblx0XHRyZXR1cm4gdGhpcy5fZHJhZztcblx0fVxuXG5cdF9vbk1vdXNlZG93bihlKSB7XG5cdFx0aWYgKGUud2hpY2ggIT09IDEpIHJldHVybjtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0aWYodGhpcy5vcHRpb25zLmRyYWcpIHtcblx0XHRcdHRoaXMuZHJhZyA9IHRydWU7XG5cdFx0fVxuXHRcdHRoaXMuZWxlbWVudC50cmlnZ2VyKCdsZXBsYXllcl9tb3VzZWRvd24nKTtcblx0fVxuXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0Ly8gTWFya2VyIG9mIGN1cnJlbnQgdGltZSBvbiB0aW1lbGluZVxuXHRcdHRoaXMubWFya2VyVGltZSA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0LmFkZENsYXNzKCd0aW1lJylcblx0XHRcdC5oaWRlKCk7XG5cblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50ID0gJCgnPGRpdiAvPicpXG5cdFx0XHQuYWRkQ2xhc3MoYHRpbWUtbWFya2VyICR7dGhpcy5vcHRpb25zLmNsYXNzTmFtZX1gKVxuXHRcdFx0LmFwcGVuZCh0aGlzLm1hcmtlclRpbWUpXG5cblx0fVxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ01hcmtlcicsIE1hcmtlcik7XG5leHBvcnQgZGVmYXVsdCBNYXJrZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9UaW1lbGluZS9NYXJrZXIuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIFNlY3Rpb25Db250cm9sLmpzXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9Db250cm9sJztcbmltcG9ydCBDb250cm9sQ2hlY2tib3ggZnJvbSAnLi9Db250cm9sQ2hlY2tib3gnO1xuXG4vKipcbiAqIEBjbGFzcyBTZWN0aW9uQ29udHJvbFxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5jaGVja2VkPXRydWVdXG4gKiBAZXh0ZW5kcyBDb250cm9sQ2hlY2tib3hcbiAqL1xuY2xhc3MgU2VjdGlvbkNvbnRyb2wgZXh0ZW5kcyBDb250cm9sQ2hlY2tib3gge1xuXHRjb25zdHJ1Y3RvciAocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRpY29uTmFtZSA6ICdsaXN0LXVsJyxcblx0XHRcdGNsYXNzTmFtZSA6ICdzZWN0aW9uJyxcblx0XHRcdG5hbWUgOiAnc2VjdGlvbicsXG5cdFx0XHR0aXRsZSA6ICfQn9C+0LrQsNC30LDRgtGML9GB0LrRgNGL0YLRjCDRgdC10LrRhtC40LgnLFxuXHRcdFx0ZGlzYWJsZSA6IHRydWVcblx0XHR9LCBvcHRpb25zKTtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ3NlY3Rpb25zaW5pdCcsIHRoaXMuX29uU2VjdGlvbnNJbml0LmJpbmQodGhpcykpO1xuXHR9XG5cblx0b25DaGVja2VkKGUsIGRhdGEpIHtcblx0XHRzdXBlci5vbkNoZWNrZWQoZSk7XG5cdFx0dGhpcy5wbGF5ZXIudHJpZ2dlcignc2VjdGlvbnN0b2dnbGUnLCB7XG5cdFx0XHRjaGVja2VkIDogZGF0YS5jaGVja2VkLFxuXHRcdFx0dmlldyA6IHRoaXMucGxheWVyLnZpZXdcblx0XHR9KTtcblx0fVxuXG5cdF9vblNlY3Rpb25zSW5pdChlKSB7XG5cdFx0dGhpcy5vcHRpb25zLmRpc2FibGUgPSB0aGlzLmRpc2FibGUgPSBmYWxzZTtcblx0XHR0aGlzLmNoZWNrZWQgPSB0cnVlO1xuXHR9XG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnU2VjdGlvbkNvbnRyb2wnLCBTZWN0aW9uQ29udHJvbCk7XG5Db250cm9sLnJlZ2lzdGVyQ29udHJvbCgnc2VjdGlvbicsIFNlY3Rpb25Db250cm9sKTtcbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb25Db250cm9sO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvU2VjdGlvbkNvbnRyb2wuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIGNvbnRyb2wtY2hlY2tib3guanNcbiAqL1xuXG5cbmltcG9ydCBDb250cm9sIGZyb20gJy4vQ29udHJvbCc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcblxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmNoZWNrZWQ9ZmFsc2VdXG4gKiBAY2xhc3MgQ29udHJvbENoZWNrYm94IFRvZ2dhYmxlIGNvbnRyb2xcbiAqL1xuY2xhc3MgQ29udHJvbENoZWNrYm94IGV4dGVuZHMgQ29udHJvbCB7XG5cblx0Y29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblx0XHR0aGlzLmNoZWNrZWQgPSB0aGlzLm9wdGlvbnMuY2hlY2tlZCB8fCBmYWxzZTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ2xlcGxheWVyX2NoZWNrZWQnLCB0aGlzLm9uQ2hlY2tlZC5iaW5kKHRoaXMpKVxuXHR9XG5cblxuXHQvKipcblx0ICogU2V0dGVyIGZvciBjaGVja2VkIHByb3BlcnR5XG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtib29sZWFufSB2YWxcblx0ICovXG5cdHNldCBjaGVja2VkICh2YWwpIHtcblx0XHRpZiAodGhpcy5kaXNhYmxlKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHZhbCA9ICEhdmFsO1xuXHRcdHRoaXMuX2NoZWNrZWQgPSB2YWxcblx0XHR0aGlzLmVsZW1lbnQudG9nZ2xlQ2xhc3MoJ2NvbnRyb2wtY2hlY2tib3gtLWNoZWNrZWQnLCB2YWwpO1xuXHRcdHRoaXMuZWxlbWVudC50cmlnZ2VyKCdsZXBsYXllcl9jaGVja2VkJywgeyBjaGVja2VkIDogdmFsIH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldHRlciBmb3IgY2hlY2tlZCBwcm9wZXJ5XG5cdCAqIEBwdWJsaWNcblx0ICogQHJldHVybiB7Ym9vbGVhbn1cblx0ICovXG5cdGdldCBjaGVja2VkICgpIHtcblx0XHRyZXR1cm4gdGhpcy5fY2hlY2tlZDtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdG9uQ2xpY2sgKGUpIHtcblx0XHRzdXBlci5vbkNsaWNrKGUpO1xuXHRcdHRoaXMuY2hlY2tlZCA9ICF0aGlzLmNoZWNrZWQ7XG5cdH1cblxuXHQvKipcblx0ICogT24gY2hlY2tlZCBldmVudCBoYW5kbGVyXG5cdCAqXG5cdCAqIEBwYXJhbSB7RXZlbnR9IGVcblx0ICogQHBhcmFtIHtPYmplY3R9IGRhdGFcblx0ICovXG5cdG9uQ2hlY2tlZChlLCBkYXRhKSB7XG5cblx0fVxuXG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0YnVpbGRDU1NDbGFzcygpIHtcblx0XHRyZXR1cm4gYGNvbnRyb2wtY2hlY2tib3ggJHtzdXBlci5idWlsZENTU0NsYXNzKCl9YFxuXHR9XG5cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdDb250cm9sQ2hlY2tib3gnLCBDb250cm9sQ2hlY2tib3gpO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ2NoZWNrYm94JywgQ29udHJvbENoZWNrYm94KTtcbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xDaGVja2JveDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL0NvbnRyb2xDaGVja2JveC5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgRnVsbHNjcmVlbkNvbnRyb2wuanNcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL0NvbnRyb2wnO1xuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBjbGFzcyBGdWxsc2NyZWVuQ29udHJvbFxuICogQGV4dGVuZHMgQ29udHJvbFxuICovXG5jbGFzcyBGdWxsc2NyZWVuQ29udHJvbCBleHRlbmRzIENvbnRyb2wge1xuXHRjb25zdHJ1Y3RvciAocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRpY29uTmFtZSA6ICdhcnJvd3MtYWx0Jyxcblx0XHRcdGNsYXNzTmFtZSA6ICdmdWxsc2NyZWVuJyxcblx0XHRcdHRpdGxlIDogJ9Cg0LDQt9Cy0LXRgNC90YPRgtGML9GB0LLQtdGA0L3Rg9GC0Ywg0L3QsCDQv9C+0LvQvdGL0Lkg0Y3QutGA0LDQvScsXG5cdFx0XHRuYW1lIDogJ2Z1bGxzY3JlZW4nXG5cdFx0fSwgb3B0aW9ucyk7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdG9uQ2xpY2soZSkge1xuXHRcdHN1cGVyLm9uQ2xpY2soZSlcblx0XHR0aGlzLnBsYXllci50b2dnbGVGdWxsc2NyZWVuKCk7XG5cdH1cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdGdWxsc2NyZWVuQ29udHJvbCcsIEZ1bGxzY3JlZW5Db250cm9sKTtcbkNvbnRyb2wucmVnaXN0ZXJDb250cm9sKCdmdWxsc2NyZWVuJywgRnVsbHNjcmVlbkNvbnRyb2wpO1xuZXhwb3J0IGRlZmF1bHQgRnVsbHNjcmVlbkNvbnRyb2w7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9GdWxsc2NyZWVuQ29udHJvbC5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgUmF0ZUNvbnRyb2wuanNcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL0NvbnRyb2wnO1xuaW1wb3J0IENvbnRyb2xUZXh0IGZyb20gJy4vQ29udHJvbFRleHQnO1xuaW1wb3J0IENvb2tpZSBmcm9tICcuLi91dGlscy9jb29raWUnO1xuXG4vKipcbiAqIEBjbGFzcyBSYXRlQ29udHJvbFxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHByb3BlcnR5IHtDb250cm9sfSBkb3duQ29udHJvbCAgRG93biByYXRlIGNvbnRyb2xcbiAqIEBwcm9wZXJ0eSB7Q29udHJvbH0gdXBDb250cm9sICBVcCByYXRlIGNvbnRyb2xcbiAqIEBwcm9wZXJ0eSB7Q29udHJvbFRleHR9IGN1cnJlbnRSYXRlIENvbnRyb2wgb2YgY3V1cmVudCByYXRlXG4gKiBAZXh0ZW5kcyBDb250cm9sXG4gKi9cbmNsYXNzIFJhdGVDb250cm9sIGV4dGVuZHMgQ29udHJvbCB7XG5cdGNvbnN0cnVjdG9yIChwbGF5ZXIsIG9wdGlvbnM9e30pIHtcblx0XHRvcHRpb25zID0gJC5leHRlbmQoe30sIHtcblx0XHRcdGNsYXNzTmFtZSA6ICdjb250cm9sLWNvbnRhaW5lcidcblx0XHR9LCBvcHRpb25zKTtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ3JhdGVjaGFuZ2UnLCAoKSA9PiB7XG5cdFx0XHR0aGlzLnVwZGF0ZSgpO1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHRzdXBlci5jcmVhdGVFbGVtZW50KCk7XG5cdFx0Y29uc3QgdmlkZW8gPSB0aGlzLnBsYXllci52aWRlbztcblxuXHRcdHRoaXMuZG93bkNvbnRyb2wgPSBuZXcgQ29udHJvbCh0aGlzLnBsYXllciwge1xuXHRcdFx0Y2xhc3NOYW1lIDogJ3JhdGUtZG93bicsXG5cdFx0XHRuYW1lIDogJ3JhdGUtZG93bicsXG5cdFx0XHRpY29uTmFtZSA6ICdiYWNrd2FyZCcsXG5cdFx0XHRjb2xsZWN0aW9uIDogdGhpcy5vcHRpb25zLmNvbGxlY3Rpb24sXG5cdFx0XHR0aXRsZSA6ICfQo9C80LXQvdGM0YjQuNGC0Ywg0YHQutC+0YDQvtGB0YLRjCDQv9GA0L7QuNCz0YDRi9Cy0LDQvdC40Y8nLFxuXHRcdFx0b25DbGljayA6IGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0dmlkZW8uZGVjcmVhc2VSYXRlKCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHR0aGlzLnVwQ29udHJvbCA9IG5ldyBDb250cm9sKHRoaXMucGxheWVyLCB7XG5cdFx0XHRjbGFzc05hbWUgOiAncmF0ZS11cCcsXG5cdFx0XHRuYW1lIDogJ3JhdGUtdXAnLFxuXHRcdFx0aWNvbk5hbWUgOiAnZm9yd2FyZCcsXG5cdFx0XHRjb2xsZWN0aW9uIDogdGhpcy5vcHRpb25zLmNvbGxlY3Rpb24sXG5cdFx0XHR0aXRsZSA6ICfQo9Cy0LXQu9C40YfQuNGC0Ywg0YHQutC+0YDQvtGB0YLRjCDQv9GA0L7QuNCz0YDRi9Cy0LDQvdC40Y8nLFxuXHRcdFx0b25DbGljayA6IGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0dmlkZW8uaW5jcmVhc2VSYXRlKCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHR0aGlzLmN1cnJlbnRSYXRlID0gbmV3IENvbnRyb2xUZXh0KHRoaXMucGxheWVyLCB7XG5cdFx0XHRjbGFzc05hbWUgOiAncmF0ZS1jdXJyZW50Jyxcblx0XHRcdG9uQ2xpY2sgOiBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdHZpZGVvLnJhdGUgPSB0aGlzLnBsYXllci5vcHRpb25zLnJhdGUuZGVmYXVsdFxuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0dGhpcy5lbGVtZW50XG5cdFx0XHQuYXBwZW5kKHRoaXMuZG93bkNvbnRyb2wuZWxlbWVudClcblx0XHRcdC5hcHBlbmQodGhpcy5jdXJyZW50UmF0ZS5lbGVtZW50KVxuXHRcdFx0LmFwcGVuZCh0aGlzLnVwQ29udHJvbC5lbGVtZW50KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGJ1aWxkQ1NTQ2xhc3MoKSB7XG5cdFx0cmV0dXJuIHRoaXMub3B0aW9ucy5jbGFzc05hbWU7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRvblBsYXllckluaXRlZCgpIHtcblx0XHR0aGlzLnVwZGF0ZSgpO1xuXHR9XG5cblx0LyoqXG5cdCAqXG5cdCAqL1xuXHRfb25DbGljayhlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdH1cblxuXHR1cGRhdGUodmFsdWUpIHtcblx0XHRjb25zdCB2aWRlbyA9IHRoaXMucGxheWVyLnZpZGVvO1xuXG5cdFx0dmFsdWUgPSB2YWx1ZSB8fCB2aWRlby5yYXRlO1xuXHRcdHZhbHVlID0gcGFyc2VGbG9hdCh2YWx1ZSlcblx0XHRcdC50b0ZpeGVkKDIpXG5cdFx0XHQudG9TdHJpbmcoKVxuXHRcdFx0LnJlcGxhY2UoLywvZywgJy4nKTtcblx0XHR0aGlzLmN1cnJlbnRSYXRlLnRleHQgPSAnw5cnICsgdmFsdWU7XG5cblx0XHRpZih0aGlzLmRpc2FibGUpIHJldHVybjtcblxuXHRcdGlmKHZpZGVvLnJhdGUgPD0gdmlkZW8ucmF0ZU1pbikge1xuXHRcdFx0dGhpcy5kb3duQ29udHJvbC5kaXNhYmxlID0gdHJ1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5kb3duQ29udHJvbC5kaXNhYmxlID0gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYodmlkZW8ucmF0ZSA+PSB2aWRlby5yYXRlTWF4KSB7XG5cdFx0XHR0aGlzLnVwQ29udHJvbC5kaXNhYmxlID0gdHJ1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy51cENvbnRyb2wuZGlzYWJsZSA9IGZhbHNlO1xuXHRcdH1cblx0fVxuXG5cdHNldCBkaXNhYmxlKHZhbHVlKSB7XG5cdFx0dGhpcy5fZGlzYWJsZSA9IHZhbHVlO1xuXHRcdHRoaXMuZG93bkNvbnRyb2wuZGlzYWJsZSA9IHZhbHVlO1xuXHRcdHRoaXMudXBDb250cm9sLmRpc2FibGUgPSB2YWx1ZTtcblx0fVxuXG5cdGluaXQgKCkge1xuXHRcdGxldCByYXRlID0gQ29va2llLmdldCgncmF0ZScsIHRoaXMucGxheWVyLm9wdGlvbnMucmF0ZS5kZWZhdWx0KTtcblx0XHR0aGlzLnNob3cocmF0ZSk7XG5cdH1cblxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ1JhdGVDb250cm9sJywgUmF0ZUNvbnRyb2wpO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ3JhdGUnLCBSYXRlQ29udHJvbCk7XG5leHBvcnQgZGVmYXVsdCBSYXRlQ29udHJvbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL1JhdGVDb250cm9sLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBjb29raWUtY29udHJvbC5qc1xuICpcbiAqIEBjbGFzIENvb2tpZVxuICovXG5jbGFzcyBDb29raWUge1xuXHQvKipcblx0ICogQHB1YmxpY1xuXHQgKlxuXHQgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBOYW1lIG9mIGNvb2tpZVxuXHQgKiBAcGFyYW0ge1N0cmluZ30gW2RmbHRdIFJldHVybiBkZWZhdWx0IHZhbHVlIGlmIHRoaXMgZmllbGQgaXMgZW1wdHlcblx0ICpcblx0ICovXG5cdHN0YXRpYyBnZXQgKG5hbWUsIGRmbHQpIHtcblx0XHR2YXIgY29va2llcyA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOycpO1xuXHRcdGZvciAobGV0IGkgaW4gY29va2llcykge1xuXHRcdFx0dmFyIGQgPSBjb29raWVzWyBpIF0udHJpbSgpLnNwbGl0KCc9Jyk7XG5cdFx0XHRpZiAoZFsgMCBdID09PSAnbGVwbGF5ZXJfJyArIG5hbWUpXG5cdFx0XHRcdHJldHVybiBkWyAxIF07XG5cdFx0fVxuXHRcdHJldHVybiBkZmx0O1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwdWJsaWNcblx0ICpcblx0ICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgS2V5XG5cdCAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSBWYWx1ZVxuXHQgKi9cblx0c3RhdGljIHNldCAobmFtZSwgdmFsdWUpIHtcblx0XHR2YXIgZCA9IG5ldyBEYXRlKCk7XG5cdFx0ZC5zZXREYXRlKGQueWVhciArIDEpO1xuXHRcdGRvY3VtZW50LmNvb2tpZSA9ICdsZXBsYXllcl8nICsgbmFtZSArICc9JyArIHZhbHVlICsgJztleHBpcmVzPScgKyBkLnRvU3RyaW5nKCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29va2llO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL3V0aWxzL2Nvb2tpZS5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgQmFja3dhcmRDb250cm9sLmpzXG4gKlxuICogQmFja3dhcmQgY29udHJvbFxuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCBDb250cm9sIGZyb20gJy4vQ29udHJvbCc7XG5cbi8qKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBPcHRpb25zXG4gKiBAY2xhc3MgQmFja3dhcmRDb250cm9sXG4gKiBAZXh0ZW5kcyBDb250cm9sXG4gKi9cbmNsYXNzIEJhY2t3YXJkQ29udHJvbCBleHRlbmRzIENvbnRyb2wge1xuXHRjb25zdHJ1Y3RvciAocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRpY29uTmFtZSA6ICd1bmRvJyxcblx0XHRcdGNsYXNzTmFtZSA6ICdiYWNrd2FyZCcsXG5cdFx0XHRuYW1lIDogJ2JhY2t3YXJkJyxcblx0XHRcdHRpdGxlIDogYNCe0YLQvNC+0YLQsNGC0Ywg0L3QsNC30LDQtCDQvdCwICR7cGxheWVyLm9wdGlvbnMucGxheWJhY2suc3RlcC5tZWRpdW19INGB0LXQutGD0L3QtGAsXG5cdFx0fSwgb3B0aW9ucyk7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdG9uQ2xpY2soZSkge1xuXHRcdHN1cGVyLm9uQ2xpY2soZSk7XG5cdFx0dGhpcy5wbGF5ZXIudmlkZW8uY3VycmVudFRpbWUgLT0gdGhpcy5wbGF5ZXIub3B0aW9ucy5wbGF5YmFjay5zdGVwLm1lZGl1bTtcblx0XHR0aGlzLnBsYXllci5zcGxhc2hJY29uLnNob3coJ3VuZG8nKTtcblx0fVxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ0JhY2t3YXJkQ29udHJvbCcsIEJhY2t3YXJkQ29udHJvbCk7XG5Db250cm9sLnJlZ2lzdGVyQ29udHJvbCgnYmFja3dhcmQnLCBCYWNrd2FyZENvbnRyb2wpO1xuZXhwb3J0IGRlZmF1bHQgQmFja3dhcmRDb250cm9sO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvQmFja3dhcmRDb250cm9sLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBTb3VyY2VDb250cm9sLmpzXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9Db250cm9sJztcbmltcG9ydCBDb250cm9sQ29udGFpbmVyIGZyb20gJy4vQ29udHJvbENvbnRhaW5lcic7XG5cblxuLyoqXG4gKiBAY2xhc3MgU291cmNlQ29udHJvbFxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQGV4dGVuZHMgQ29udHJvbENvbmFpbmVyXG4gKi9cbmNsYXNzIFNvdXJjZUNvbnRyb2wgZXh0ZW5kcyBDb250cm9sQ29udGFpbmVyIHtcblx0Ly8gVE9ETzog0JTQtdC70LDRgtGMIGRpc2FibGUvZW5hYmxlINC/0L7RgdC70LUgb3B0aW9ucyBpbml0XG5cdGNvbnN0cnVjdG9yIChwbGF5ZXIsIG9wdGlvbnM9e30pIHtcblx0XHRvcHRpb25zID0gJC5leHRlbmQoe30sIHtcblx0XHRcdG5hbWUgOiAnc291cmNlJyxcblx0XHRcdGljb25OYW1lIDogJ2J1bGxzZXllJyxcblx0XHRcdHRpdGxlIDogJ9Ca0LDRh9C10YHRgtCy0L4nLFxuXHRcdFx0Y2xhc3NOYW1lIDogJ3NvdXJjZS1jb250cm9sJyxcblx0XHRcdGRpc2FibGUgOiB0cnVlXG5cdFx0fSwgb3B0aW9ucyk7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblxuXHRcdHRoaXMucGxheWVyLm9uKCdwbGF5aW5nJywgdGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5wbGF5ZXIub24oJ3F1YWxpdHljaGFuZ2UnLCB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdG9uSXRlbUNsaWNrKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0Y29uc3QgaXRlbSA9ICQoZS50YXJnZXQpO1xuXHRcdGNvbnN0IHZpZGVvID0gdGhpcy5wbGF5ZXIudmlkZW87XG5cdFx0dmlkZW8ucGxheWJhY2tRdWFsaXR5ID0gaXRlbS5kYXRhKCduYW1lJyk7XG5cblx0XHR0aGlzLmRyb3Bkb3duQ29udGVudC5oaWRlKCk7XG5cblx0fVxuXG5cdG9uUGxheWVySW5pdGVkKGUsIGRhdGEpIHtcblx0XHR0aGlzLnVwZGF0ZSgpO1xuXHR9XG5cblx0dXBkYXRlKCkge1xuXHRcdGNvbnN0IHZpZGVvID0gdGhpcy5wbGF5ZXIudmlkZW87XG5cdFx0Y29uc3QgcXVhbGl0eUxldmVscyA9IHZpZGVvLmdldEF2YWlsYWJsZVF1YWxpdHlMZXZlbHMoKTtcblx0XHRjb25zdCBjdXJyZW50UXVhbGl0eSA9IHZpZGVvLnBsYXliYWNrUXVhbGl0eTtcblxuXHRcdGlmKHF1YWxpdHlMZXZlbHMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHR0aGlzLmRpc2FibGUgPSB0cnVlO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMubGlzdCA9IFtdO1xuXHRcdHRoaXMuZHJvcGRvd25Db250ZW50LmVtcHR5KCk7XG5cblx0XHRxdWFsaXR5TGV2ZWxzLmZvckVhY2goaXRlbSA9PiB7XG5cdFx0XHRjb25zdCBlbGVtID0gdGhpcy5hZGRJdGVtKGl0ZW0udGl0bGUsIGl0ZW0pO1xuXHRcdFx0aWYoY3VycmVudFF1YWxpdHkubmFtZSA9PT0gaXRlbS5uYW1lKSB7XG5cdFx0XHRcdHRoaXMuYWN0aXZlID0gZWxlbTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHR0aGlzLmRpc2FibGUgPSBmYWxzZTtcblx0fVxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ1NvdXJjZUNvbnRyb2wnLCBTb3VyY2VDb250cm9sKTtcbkNvbnRyb2wucmVnaXN0ZXJDb250cm9sKCdzb3VyY2UnLCBTb3VyY2VDb250cm9sKTtcbmV4cG9ydCBkZWZhdWx0IFNvdXJjZUNvbnRyb2w7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9Tb3VyY2VDb250cm9sLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBDb250cm9sQ29udGFpbmVyLmpzXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9Db250cm9sJztcbmltcG9ydCBDb250cm9sRHJvcGRvd24gZnJvbSAnLi9Db250cm9sRHJvcGRvd24nO1xuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBjbGFzcyBDb250cm9sQ29udGFpbmVyXG4gKiBAZXh0ZW5kcyBDb250cm9sRHJvcGRvd25cbiAqL1xuY2xhc3MgQ29udHJvbENvbnRhaW5lciBleHRlbmRzIENvbnRyb2xEcm9wZG93biB7XG5cblx0Y29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblx0XHR0aGlzLl9hY3RpdmUgPSBudWxsO1xuXHRcdC8qKlxuXHRcdCAqIExpc3Qgb2YgaXRlbXNcblx0XHQgKlxuXHRcdCAqIEBwdWJsaWNcblx0XHQgKiBAdHlwZSB7QXJyYXl9XG5cdFx0ICovXG5cdFx0dGhpcy5saXN0ID0gW107XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGl0ZW0gb2YgY29udGFpbmVyIGJ5IGluZGV4XG5cdCAqXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG5cdCAqL1xuXHRnZXRCeUluZGV4KGluZGV4KSB7XG5cdFx0cmV0dXJuIHRoaXMubGlzdFtpbmRleF07XG5cdH1cblxuXHQvKipcblx0ICogU2V0IGl0ZW0gYWN0aXZlIGJ5IGluZGV4XG5cdCAqXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG5cdCAqL1xuXHRzZXRBY3RpdmVCeUluZGV4KGluZGV4KSB7XG5cdFx0aWYgKHRoaXMuYWN0aXZlKSB7XG5cdFx0XHR0aGlzLmFjdGl2ZS5yZW1vdmVDbGFzcygnY29udHJvbC1jb250YWluZXJfX2l0ZW0tLWFjdGl2ZScpO1xuXHRcdH1cblx0XHR0aGlzLl9hY3RpdmUgPSB0aGlzLmxpc3RbaW5kZXhdLmFkZENsYXNzKCdjb250cm9sLWNvbnRhaW5lcl9faXRlbS0tYWN0aXZlJyk7XG5cdFx0cmV0dXJuIHRoaXMuX2FjdGl2ZTtcblx0fVxuXG5cblx0LyoqXG5cdCAqIEdldHRlciBvZiBhY3RpdmUgZmllbGRcblx0ICpcblx0ICogQHB1YmxpY1xuXHQgKiBAdHlwZSB7alF1ZXJ5fVxuXHQgKi9cblx0Z2V0IGFjdGl2ZSAoKSB7XG5cdFx0aWYgKHRoaXMuX2FjdGl2ZSAmJiB0aGlzLl9hY3RpdmUubGVuZ3RoID4gMCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuX2FjdGl2ZTtcblx0XHR9XG5cdFx0dGhpcy5saXN0LmZvckVhY2goaXRlbSA9PiB7XG5cdFx0XHRpZiAoaXRlbS5oYXNDbGFzcygnY29udHJvbC1jb250YWluZXJfX2l0ZW0tLWFjdGl2ZScpKSB7XG5cdFx0XHRcdHRoaXMuX2FjdGl2ZSA9IGl0ZW07XG5cdFx0XHR9XG5cdFx0fSlcblx0XHRyZXR1cm4gdGhpcy5fYWN0aXZlO1xuXHR9XG5cblx0LyoqXG5cdCAqIFNldHRlciBvZiBhY3RpdmUgZmllbGRcblx0ICpcblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge2pRdWVyeX0gSXRlbSBvZiBjb250YWluZXJcblx0ICovXG5cdHNldCBhY3RpdmUgKGVsZW1lbnQpIHtcblx0XHRpZiAodGhpcy5hY3RpdmUpIHtcblx0XHRcdHRoaXMuYWN0aXZlLnJlbW92ZUNsYXNzKCdjb250cm9sLWNvbnRhaW5lcl9faXRlbS0tYWN0aXZlJyk7XG5cdFx0fVxuXHRcdGlmIChlbGVtZW50KSB7XG5cdFx0XHQkKGVsZW1lbnQpLmFkZENsYXNzKCdjb250cm9sLWNvbnRhaW5lcl9faXRlbS0tYWN0aXZlJyk7XG5cdFx0fVxuXHRcdHRoaXMuX2FjdGl2ZSA9IGVsZW1lbnQ7XG5cdFx0cmV0dXJuIHRoaXMuX2FjdGl2ZVxuXHR9XG5cblxuXHQvKipcblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge1N0cmluZ3xqUXVlcnl9IENvbnRlbnQgb2YgaXRlbVxuXHQgKiBAcGFyYW0ge09iamVjdH0gRGF0YSBvZiBpdGVtXG5cdCAqL1xuXHRhZGRJdGVtIChjb250ZW50LCBkYXRhKSB7XG5cdFx0Y29uc3QgaXRlbSA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0LmFkZENsYXNzKCdjb250cm9sLWNvbnRhaW5lcl9faXRlbScpXG5cdFx0XHQuZGF0YShkYXRhKVxuXHRcdFx0Lm9uKCdjbGljaycsIHRoaXMub25JdGVtQ2xpY2suYmluZCh0aGlzKSlcblx0XHRcdC5hcHBlbmQoY29udGVudCk7XG5cblx0XHR0aGlzLmxpc3QucHVzaChpdGVtKTtcblxuXHRcdHRoaXMuZHJvcGRvd25Db250ZW50LmFwcGVuZChpdGVtKTtcblxuXHRcdHJldHVybiBpdGVtO1xuXHR9XG5cblx0LyoqXG5cdCAqIE9uIGl0ZW0gY2xpY2sgZXZlbnQgaGFuZGxlclxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7RXZlbnR9IGVcblx0ICovXG5cdG9uSXRlbUNsaWNrIChlKSB7XG5cdFx0dGhpcy5hY3RpdmUgPSBlLmN1cnJlbnRUYXJnZXQ7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRidWlsZENTU0NsYXNzKCkge1xuXHRcdHJldHVybiBgJHtzdXBlci5idWlsZENTU0NsYXNzKCl9IGNvbnRyb2wtY29udGFpbmVyYFxuXHR9XG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnQ29udHJvbENvbnRhaW5lcicsIENvbnRyb2xDb250YWluZXIpO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ2NvbnRhaW5lcicsIENvbnRyb2xDb250YWluZXIpO1xuZXhwb3J0IGRlZmF1bHQgQ29udHJvbENvbnRhaW5lcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL0NvbnRyb2xDb250YWluZXIuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIFN1YnRpdGxlQ29udHJvbC5qc1xuICpcbiAqIFN1YnRpdGxlIGNvbnRyb2xcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL0NvbnRyb2wnO1xuaW1wb3J0IENvbnRyb2xDb250YWluZXIgZnJvbSAnLi9Db250cm9sQ29udGFpbmVyJztcblxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAY2xhc3MgU3VidGl0bGVDb250cm9sXG4gKiBAZXh0ZW5kcyBDb250cm9sQ29udGFpbmVyXG4gKi9cbmNsYXNzIFN1YnRpdGxlQ29udHJvbCBleHRlbmRzIENvbnRyb2xDb250YWluZXIge1xuXHRjb25zdHJ1Y3RvciAocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRpY29uTmFtZSA6ICdjb21tZW50aW5nLW8nLFxuXHRcdFx0dGl0bGUgOiAn0KHRg9Cx0YLQuNGC0YDRiycsXG5cdFx0XHRuYW1lIDogJ3N1YnRpdGxlJyxcblx0XHRcdGNsYXNzTmFtZSA6ICdzdWJ0aXRsZS1jb250cm9sJyxcblx0XHRcdGRpc2FibGUgOiB0cnVlXG5cdFx0fSwgb3B0aW9ucyk7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblx0fVxuXG5cdG9uQ2xpY2sgKGUpIHtcblx0XHRzdXBlci5vbkNsaWNrKGUpO1xuXHRcdGxldCB2aWRlbyA9IHRoaXMucGxheWVyLnZpZGVvO1xuXHRcdHRoaXMuYWN0aXZlID0gbnVsbFxuXHRcdHZpZGVvLnRyYWNrID0gLTE7XG5cdH1cblxuXHRvbkl0ZW1DbGljayAoZSkge1xuXHRcdHN1cGVyLm9uSXRlbUNsaWNrKGUpO1xuXHRcdGxldCBpdGVtID0gJChlLnRhcmdldClcblx0XHRsZXQgdmlkZW8gPSB0aGlzLnBsYXllci52aWRlbztcblx0XHRpZiAoaXRlbS5kYXRhKCdsYW5ndWFnZScpKSB7XG5cdFx0XHR2aWRlby50cmFjayA9IGl0ZW0uZGF0YSgnbGFuZ3VhZ2UnKTtcblx0XHR9XG5cdH1cblxuXHRvblBsYXllckluaXRlZChlLCBkYXRhKSB7XG5cdFx0bGV0IHZpZGVvID0gdGhpcy5wbGF5ZXIudmlkZW87XG5cblx0XHRpZih2aWRlby5zdWJ0aXRsZXMgPT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGlmICh2aWRlby5zdWJ0aXRsZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0Zm9yICh2YXIgaSBpbiB2aWRlby5zdWJ0aXRsZXMpIHtcblx0XHRcdFx0aWYgKCF2aWRlby5zdWJ0aXRsZXMuaGFzT3duUHJvcGVydHkoaSkpIGNvbnRpbnVlO1xuXHRcdFx0XHRsZXQgaXRlbSA9IHZpZGVvLnN1YnRpdGxlc1sgaSBdO1xuXHRcdFx0XHR0aGlzLmFkZEl0ZW0oaXRlbS50aXRsZSwge1xuXHRcdFx0XHRcdHNyYyA6IGl0ZW0uc3JjLFxuXHRcdFx0XHRcdGxhbmd1YWdlIDogaXRlbS5sYW5ndWFnZVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdHRoaXMuZGlzYWJsZSA9IGZhbHNlO1xuXHRcdH1cblx0fVxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ1N1YnRpdGxlQ29udHJvbCcsIFN1YnRpdGxlQ29udHJvbCk7XG5Db250cm9sLnJlZ2lzdGVyQ29udHJvbCgnc3VidGl0bGUnLCBTdWJ0aXRsZUNvbnRyb2wpO1xuZXhwb3J0IGRlZmF1bHQgU3VidGl0bGVDb250cm9sO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvU3VidGl0bGVDb250cm9sLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBEb3dubG9hZENvbnRyb2wuanNcbiAqXG4gKiBEb3dubG9hZCBjb250cm9sXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb250cm9sIGZyb20gJy4vQ29udHJvbCc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCBJY29uIGZyb20gJy4vSWNvbic7XG5cbi8qKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQGNsYXNzIERvd25sb2FkQ29udHJvbFxuICogQGV4bnRlZHMgQ29udHJvbFxuICovXG5jbGFzcyBEb3dubG9hZENvbnRyb2wgZXh0ZW5kcyBDb250cm9sIHtcblx0Y29uc3RydWN0b3IgKHBsYXllciwgb3B0aW9ucz17fSkge1xuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7XG5cdFx0XHR0aXRsZSA6ICfQodC60LDRh9Cw0YLRjCDQstC40LTQtdC+Jyxcblx0XHRcdGNsYXNzTmFtZSA6ICdkb3dubG9hZCcsXG5cdFx0XHRuYW1lIDogJ2Rvd25sb2FkJ1xuXHRcdH0sIG9wdGlvbnMpO1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cdFx0dGhpcy5wbGF5ZXIub24oJ2xvYWRzdGFydCcsIHRoaXMub25Mb2FkU3RhcnQuYmluZCh0aGlzKSk7XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0Ly8gVE9ETzog0JTQvtC+0L/RgNC10LTQtdC70LjRgtGMINGN0YLQvtGCINC80LXRgtC+0LQsINCwINC90LUg0L/QtdGA0LXQvtC/0YDQtdC00LvQtdC40YLRjFxuXHRcdHRoaXMuZWxlbWVudCA9ICQoJzxhIC8+Jylcblx0XHRcdC5hdHRyKHtcblx0XHRcdFx0aHJlZiA6ICcnLFxuXHRcdFx0XHR0YXJnZXQgOiAnX2JsYW5rJyxcblx0XHRcdFx0ZG93bmxvYWQgOiB0cnVlLFxuXHRcdFx0XHR0aXRsZSA6IHRoaXMub3B0aW9ucy50aXRsZSxcblx0XHRcdH0pXG5cdFx0XHQuYWRkQ2xhc3ModGhpcy5idWlsZENTU0NsYXNzKCkpXG5cdFx0XHQuYXBwZW5kKG5ldyBJY29uKHRoaXMucGxheWVyLCB7IGljb25OYW1lIDogJ2Rvd25sb2FkJyB9KS5lbGVtZW50KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGJ1aWxkQ1NTQ2xhc3MoKSB7XG5cdFx0cmV0dXJuIGAke3N1cGVyLmJ1aWxkQ1NTQ2xhc3MoKX1gO1xuXHR9XG5cblxuXHQvKipcblx0ICogU2V0dGVyIG9mIGxpbmsgZmllbGRcblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgUGF0aCBmb3IgdmlkZW9cblx0ICovXG5cdHNldCBsaW5rICh2YWx1ZSkge1xuXHRcdGNvbnN0IHBhcnNlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblx0XHRwYXJzZXIuaHJlZiA9IHZhbHVlO1xuXHRcdGxldCBmaWxlTmFtZSA9IHBhcnNlci5wYXRobmFtZS5zcGxpdCgnLycpO1xuXHRcdGZpbGVOYW1lID0gZmlsZU5hbWVbZmlsZU5hbWUubGVuZ3RoIC0gMV07XG5cdFx0dGhpcy5lbGVtZW50LmF0dHIoe1xuXHRcdFx0aHJlZiA6IHZhbHVlLFxuXHRcdFx0ZG93bmxvYWQgOiBmaWxlTmFtZVxuXHRcdH0pO1xuXHR9XG5cblxuXHRvbkxvYWRTdGFydChlLCBkYXRhKSB7XG5cdFx0dGhpcy5saW5rID0gdGhpcy5wbGF5ZXIudmlkZW8uc3JjLnVybFxuXHR9XG5cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdEb3dubG9hZENvbnRyb2wnLCBEb3dubG9hZENvbnRyb2wpO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ2Rvd25sb2FkJywgRG93bmxvYWRDb250cm9sKTtcbmV4cG9ydCBkZWZhdWx0IERvd25sb2FkQ29udHJvbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL0Rvd25sb2FkQ29udHJvbC5qcyIsIlxuJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBLZXliaW5kaW5nSW5mb0NvbnRyb2wuanNcbiAqXG4gKiBJbmZvIGNvbnRyb2xcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL0NvbnRyb2wnO1xuaW1wb3J0IENvbnRyb2xEcm9wZG93biBmcm9tICcuL0NvbnRyb2xEcm9wZG93bic7XG5cbi8qKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQGNsYXNzIEtleUJpbmRpbmdJbmZvQ29udHJvbFxuICogQGV4dGVuZHMgQ29udHJvbERyb3Bkb3duXG4gKi9cbmNsYXNzIEtleUJpbmRpbmdJbmZvQ29udHJvbCBleHRlbmRzIENvbnRyb2xEcm9wZG93biB7XG5cblx0Y29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRpY29uTmFtZSA6ICdpbmZvJyxcblx0XHRcdHRpdGxlIDogJ9CY0L3RhNC+Jyxcblx0XHRcdGNsYXNzTmFtZSA6ICdpbmZvLWNvbnRyb2wnLFxuXHRcdFx0bmFtZSA6ICdpbmZvJ1xuXHRcdH0sIG9wdGlvbnMpO1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cdH1cblxuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdHN1cGVyLmNyZWF0ZUVsZW1lbnQoKTtcblx0XHRsZXQga2V5QmluZGluZyA9IHRoaXMucGxheWVyLm9wdGlvbnMua2V5QmluZGluZztcblx0XHRsZXQgaW5mb0NvbnRlbnQgPSBgYDtcblx0XHRmb3IgKGxldCBfa2V5IGluIGtleUJpbmRpbmcpIHtcblx0XHRcdGlmICgha2V5QmluZGluZy5oYXNPd25Qcm9wZXJ0eShfa2V5KSkgY29udGludWU7XG5cblx0XHRcdGxldCBob3RrZXkgPSBrZXlCaW5kaW5nW19rZXldO1xuXHRcdFx0bGV0IGl0ZW0gPSAnJztcblx0XHRcdGxldCBrZXlTdHJpbmcgPSAnJztcblxuXHRcdFx0aG90a2V5LmluZm8uZm9yRWFjaCgoa2V5LCBpbmRleCkgPT4ge1xuXHRcdFx0XHRpZiAoaW5kZXggIT09IDApIHtcblx0XHRcdFx0XHRrZXlTdHJpbmcgKz0gYCArIGBcblx0XHRcdFx0fVxuXHRcdFx0XHRrZXlTdHJpbmcgKz0gYDxrYmQgY2xhc3M9XCJsZXBsYXllci1rZXlcIj4ke2tleX08L2tiZD5gXG5cdFx0XHR9KTtcblxuXHRcdFx0aXRlbSA9IGBcblx0XHRcdFx0PGRpdiBjbGFzcz1cImluZm8tY29udHJvbF9faXRlbVwiPlxuXHRcdFx0XHRcdCR7a2V5U3RyaW5nfSAtICR7aG90a2V5LmRlc2NyaXB0aW9ufVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdGBcblxuXHRcdFx0aW5mb0NvbnRlbnQgKz0gaXRlbTtcblxuXHRcdH1cblx0XHR0aGlzLmRyb3Bkb3duQ29udGVudFxuXHRcdFx0LmFkZENsYXNzKCdpbmZvLWNvbnRyb2xfX2NvbnRlbnQnKVxuXHRcdFx0LmFwcGVuZChpbmZvQ29udGVudCk7XG5cdH1cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdLZXlCaW5kaW5nSW5mb0NvbnRyb2wnLCBLZXlCaW5kaW5nSW5mb0NvbnRyb2wpO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ2tleWJpbmRpbmcgaW5mbycsIEtleUJpbmRpbmdJbmZvQ29udHJvbCk7XG5leHBvcnQgZGVmYXVsdCBLZXlCaW5kaW5nSW5mb0NvbnRyb2w7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9LZXliaW5kaW5nSW5mb0NvbnRyb2wuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIFRpbWVJbmZvQ29udHJvbC5qc1xuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCBDb250cm9sIGZyb20gJy4vQ29udHJvbCc7XG5pbXBvcnQgQ29udHJvbFRleHQgZnJvbSAnLi9Db250cm9sVGV4dCc7XG5pbXBvcnQgeyBzZWNvbmRzVG9UaW1lIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBjbGFzcyBUaW1lSW5mb0NvbnRyb2xcbiAqIEBwcm9wZXJ0eSB7Q29udHJvbFRleHR9IGN1cnJlbnRUaW1lIEN1cnJlbnQgdGltZSdzIHRleHRcbiAqIEBwcm9wZXJ0eSB7Q29udHJvbFRleHR9IHRvdGFsVGltZSBUb3RhbCB0aW1lXG4gKiBAcHJvcGVydHkge2pRdWVyeX0gbGluZVxuICogQGV4dGVuZHMgQ29udHJvbFxuICovXG5jbGFzcyBUaW1lSW5mb0NvbnRyb2wgZXh0ZW5kcyBDb250cm9sIHtcblxuXHRjb25zdHJ1Y3RvciAocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRjbGFzc05hbWUgOiAndGltZWxpbmUgdGltZWxpbmUtY29udGFpbmVyJyxcblx0XHRcdG5hbWUgOiAndGltZS1pbmZvJ1xuXHRcdH0sIG9wdGlvbnMpO1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cblx0XHR0aGlzLnBsYXllci5vbigndGltZXVwZGF0ZScsIChlLCBkYXRhKSA9PiB7XG5cdFx0XHRjb25zdCB0aW1lID0gdGhpcy5wbGF5ZXIuY3VycmVudFRpbWU7XG5cdFx0XHR0aGlzLl9jdXJyZW50VGltZUNvbnRyb2wudGV4dCA9IHNlY29uZHNUb1RpbWUodGltZSk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLnBsYXllci5vbignZHVyYXRpb25jaGFuZ2UnLCAoZSkgPT4ge1xuXHRcdFx0dGhpcy5fdG90YWxUaW1lQ29udHJvbC50ZXh0ID0gc2Vjb25kc1RvVGltZSh0aGlzLnBsYXllci52aWRlby5kdXJhdGlvbik7XG5cdFx0fSk7XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0Y29uc3QgZHVyYXRpb24gPSB0aGlzLnBsYXllci52aWRlby5kdXJhdGlvbjtcblx0XHRjb25zdCBjdXJyZW50VGltZSA9IHRoaXMucGxheWVyLnZpZGVvLmN1cnJlbnRUaW1lO1xuXHRcdHRoaXMuX2N1cnJlbnRUaW1lQ29udHJvbCA9IG5ldyBDb250cm9sVGV4dCh0aGlzLnBsYXllciwgeyBjbGFzc05hbWUgOiAnY29udHJvbC10aW1lX19jdXJyZW50J30pO1xuXHRcdHRoaXMuX3RvdGFsVGltZUNvbnRyb2wgPSBuZXcgQ29udHJvbFRleHQodGhpcy5wbGF5ZXIsIHsgY2xhc3NOYW1lIDogJ2NvbnRyb2wtdGltZV9fdG90YWwnfSk7XG5cblx0XHRpZihpc05hTihkdXJhdGlvbikgfHwgZHVyYXRpb24gPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5fdG90YWxUaW1lQ29udHJvbC50ZXh0ID0gJyc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuX3RvdGFsVGltZUNvbnRyb2wudGV4dCA9IHNlY29uZHNUb1RpbWUoZHVyYXRpb24pO1xuXHRcdH1cblxuXHRcdGlmKGN1cnJlbnRUaW1lID09IG51bGwpIHtcblx0XHRcdHRoaXMuX2N1cnJlbnRUaW1lQ29udHJvbC50ZXh0ID0gc2Vjb25kc1RvVGltZSgwKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5fY3VycmVudFRpbWVDb250cm9sLnRleHQgPSBzZWNvbmRzVG9UaW1lKGN1cnJlbnRUaW1lKTtcblx0XHR9XG5cblx0XHR0aGlzLmVsZW1lbnQgPSAkKCc8ZGl2Lz4nKS5hZGRDbGFzcygnY29udHJvbC10aW1lJyk7XG5cdFx0dGhpcy5lbGVtZW50XG5cdFx0XHQuYXBwZW5kKHRoaXMuX2N1cnJlbnRUaW1lQ29udHJvbC5lbGVtZW50KVxuXHRcdFx0LmFwcGVuZCh0aGlzLl90b3RhbFRpbWVDb250cm9sLmVsZW1lbnQpXG5cblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50O1xuXHR9XG5cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRvblBsYXllckluaXRlZChlKSB7XG5cdFx0bGV0IHZpZGVvID0gdGhpcy5wbGF5ZXIudmlkZW87XG5cdFx0dGhpcy5fY3VycmVudFRpbWVDb250cm9sLnRleHQgPSBzZWNvbmRzVG9UaW1lKHZpZGVvLmN1cnJlbnRUaW1lKTtcblx0XHR0aGlzLl90b3RhbFRpbWVDb250cm9sLnRleHQgPSBzZWNvbmRzVG9UaW1lKHZpZGVvLmR1cmF0aW9uKTtcblx0fVxuXG5cdF9vbkNsaWNrKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0fVxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ1RpbWVJbmZvQ29udHJvbCcsIFRpbWVJbmZvQ29udHJvbCk7XG5Db250cm9sLnJlZ2lzdGVyQ29udHJvbCgndGltZWluZm8nLCBUaW1lSW5mb0NvbnRyb2wpO1xuZXhwb3J0IGRlZmF1bHQgVGltZUluZm9Db250cm9sO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvVGltZUluZm9Db250cm9sLmpzIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb29raWUgZnJvbSAnLi4vdXRpbHMvY29va2llJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50cy9Db21wb25lbnQnO1xuaW1wb3J0IHsgSVNfU0FGQVJJLCBJU19JT1MsIElTX0FORFJPSUQgfSBmcm9tICcuLi91dGlscy9icm93c2VyJztcbmltcG9ydCBFbnRpdHkgZnJvbSAnLi9FbnRpdHknO1xuXG5cbmNsYXNzIEh0bWw1IGV4dGVuZHMgRW50aXR5IHtcblx0Y29uc3RydWN0b3IgKHBsYXllciwgb3B0aW9ucykge1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cdFx0dGhpcy5tZWRpYSA9IHRoaXMuZWxlbWVudFswXTtcblxuXHRcdHRoaXMuc3VidGl0bGVzID0gW107XG5cdFx0dGhpcy5idWZmZXJSYW5nZXMgPSBbXTtcblxuXHRcdHRoaXMuc3JjID0gdGhpcy5wbGF5ZXIub3B0aW9ucy5zcmM7XG5cblx0XHRpZih0aGlzLnBsYXllci5vcHRpb25zLnBvc3RlciAhPSBudWxsKSB7XG5cdFx0XHR0aGlzLnBvc3RlciA9IHRoaXMucGxheWVyLm9wdGlvbnMucG9zdGVyO1xuXHRcdH1cblxuXHRcdGlmKHRoaXMuZ2V0QXZhaWxhYmxlUXVhbGl0eUxldmVscygpLmxlbmd0aCA+IDApIHtcblx0XHRcdHRoaXMuX3BsYXliYWNrUXVhbGl0eSA9IHRoaXMuZ2V0QXZhaWxhYmxlUXVhbGl0eUxldmVscygpWzBdO1xuXHRcdH1cblxuXHRcdHRoaXMuZWxlbWVudC5vbignbG9hZHN0YXJ0JywgdGhpcy5vbkxvYWRTdGFydC5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ3RpbWV1cGRhdGUnLCB0aGlzLm9uVGltZVVwZGF0ZS5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ2R1cmF0aW9uY2hhbmdlJywgdGhpcy5vbkR1cmF0aW9uQ2hhbmdlLmJpbmQodGhpcykpO1xuXHRcdHRoaXMuZWxlbWVudC5vbigncHJvZ3Jlc3MnLCB0aGlzLm9uUHJvZ3Jlc3MuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdzZWVraW5nJywgdGhpcy5vblNlZWtpbmcuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdzZWVrZWQnLCB0aGlzLm9uU2Vla2VkLmJpbmQodGhpcykpO1xuXHRcdHRoaXMuZWxlbWVudC5vbigndm9sdW1lY2hhbmdlJywgdGhpcy5vblZvbHVtZUNoYW5nZS5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ2NsaWNrJywgdGhpcy5vbkNsaWNrLmJpbmQodGhpcykpO1xuXHRcdHRoaXMuZWxlbWVudC5vbignZGJsY2xpY2snLCB0aGlzLm9uRGJsY2xpY2suYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdwbGF5JywgdGhpcy5vblBsYXkuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdwYXVzZScsIHRoaXMub25QYXVzZS5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ3JhdGVjaGFuZ2UnLCB0aGlzLm9uUmF0ZUNoYW5nZS5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ2VuZGVkJywgdGhpcy5vbkVuZGVkLmJpbmQodGhpcykpO1xuXHRcdHRoaXMuZWxlbWVudC5vbignY2FucGxheXRocm91Z2gnLCB0aGlzLm9uQ2FucGxheVRocm91Z2guYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCd3YWl0aW5nJywgdGhpcy5vbldhaXRpbmcuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdlcnJvcicsIHRoaXMub25FcnJvci5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdG9uTG9hZFN0YXJ0KGUpIHtcblx0XHR0aGlzLnRyaWdnZXIoJ2xvYWRzdGFydCcpO1xuXHR9XG5cblx0b25UaW1lVXBkYXRlKGUpIHtcblx0XHR0aGlzLnRyaWdnZXIoJ3RpbWV1cGRhdGUnKTtcblx0fVxuXG5cdG9uRHVyYXRpb25DaGFuZ2UoZSkge1xuXHRcdHRoaXMudHJpZ2dlcignZHVyYXRpb25jaGFuZ2UnKTtcblx0fVxuXG5cdG9uUHJvZ3Jlc3MoZSkge1xuXHRcdHRoaXMudHJpZ2dlcigncHJvZ3Jlc3MnKTtcblx0fVxuXG5cdG9uU2Vla2luZyhlKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCdzZWVraW5nJyk7XG5cdH1cblxuXHRvblNlZWtlZChlKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCdzZWVrZWQnKTtcblx0fVxuXG5cdG9uVm9sdW1lQ2hhbmdlKGUpIHtcblx0XHR0aGlzLnRyaWdnZXIoJ3ZvbHVtZWNoYW5nZScpO1xuXHR9XG5cblx0b25DbGljaygpIHtcblx0XHR0aGlzLnRyaWdnZXIoJ2NsaWNrJyk7XG5cdH1cblxuXHRvbkRibGNsaWNrKCkge1xuXHRcdHRoaXMudHJpZ2dlcignZGJsY2xpY2snKTtcblx0fVxuXG5cdG9uUGxheSgpIHtcblx0XHR0aGlzLnRyaWdnZXIoJ3BsYXknKTtcblx0fVxuXG5cdG9uUGF1c2UoKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCdwYXVzZScpO1xuXHR9XG5cblx0b25QbGF5aW5nKCkge1xuXHRcdHRoaXMudHJpZ2dlcigncGxheWluZycpO1xuXHR9XG5cblx0b25SYXRlQ2hhbmdlKCkge1xuXHRcdHRoaXMudHJpZ2dlcigncmF0ZWNoYW5nZScpO1xuXHR9XG5cblx0b25FbmRlZCgpIHtcblx0XHR0aGlzLnRyaWdnZXIoJ2VuZGVkJyk7XG5cdH1cblxuXHRvbkNhbnBsYXlUaHJvdWdoKCkge1xuXHRcdHRoaXMudHJpZ2dlcignY2FucGxheXRocm91Z2gnKTtcblx0fVxuXG5cdG9uV2FpdGluZygpIHtcblx0XHR0aGlzLnRyaWdnZXIoJ3dhaXRpbmcnKTtcblx0fVxuXG5cdG9uRXJyb3IoZSkge1xuXHRcdHRoaXMudHJpZ2dlcignZXJyb3InLCB7IGNvZGUgOiBlLnRhcmdldC5lcnJvci5jb2RlIH0pO1xuXHR9XG5cblx0LyogVE9ETyAqL1xuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdHRoaXMuZWxlbWVudCA9IHRoaXMub3B0aW9ucy5jdHg7XG5cdFx0W1xuXG5cdFx0XHQvLyBSZW1vdmUgY29udHJvbHMgYmVjYXVzZSB3ZSBkb250IG5vdCBzdXBwb3J0IG5hdGl2ZSBjb250cm9scyB5ZXRcblx0XHRcdCdjb250cm9scycsXG5cdFx0XHQncG9zdGVyJyxcblxuXHRcdFx0Ly8gSXQgaXMgdW5uZWNlc3NhcnkgYXR0cnMsIHRoaXMgZnVuY3Rpb25hbGl0eSBzb2x2ZSBDU1Ncblx0XHRcdCdoZWlnaHQnLFxuXHRcdFx0J3dpZHRoJ1xuXG5cdFx0XS5mb3JFYWNoKGl0ZW0gPT4ge1xuXHRcdFx0dGhpcy5lbGVtZW50LnJlbW92ZUF0dHIoaXRlbSk7XG5cdFx0fSk7XG5cblx0XHQvLyBTZXQgYXR0cnMgZnJvbSBvcHRpb25zXG5cdFx0W1xuXHRcdFx0J3ByZWxvYWQnLFxuXHRcdFx0J2F1dG9wbGF5Jyxcblx0XHRcdCdsb29wJyxcblx0XHRcdCdtdXRlZCdcblx0XHRdLmZvckVhY2goaXRlbSA9PiB7XG5cdFx0XHRpZih0aGlzLnBsYXllci5vcHRpb25zW2l0ZW1dKSB7XG5cdFx0XHRcdHRoaXMuZWxlbWVudC5hdHRyKGl0ZW0sIHRoaXMucGxheWVyLm9wdGlvbnNbaXRlbV0pO1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQucHJvcChpdGVtLCB0aGlzLnBsYXllci5vcHRpb25zW2l0ZW1dKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXG5cdFx0dGhpcy5lbGVtZW50LmZpbmQoJ3NvdXJjZVtkYXRhLXF1YWxpdHldJykuZWFjaCgoaSwgaXRlbSkgPT4ge1xuXHRcdFx0JChpdGVtKS5yZW1vdmUoKTtcblx0XHR9KTtcblxuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQ7XG5cdH1cblxuXHRnZXQgY3VycmVudFRpbWUgKCkge1xuXHRcdHJldHVybiB0aGlzLm1lZGlhLmN1cnJlbnRUaW1lO1xuXHR9XG5cblx0c2V0IGN1cnJlbnRUaW1lICh2YWx1ZSkge1xuXHRcdGxldCB0aW1lO1xuXHRcdGlmICh2YWx1ZSA+IHRoaXMuZHVyYXRpb24pIHtcblx0XHRcdHRpbWUgPSB0aGlzLmR1cmF0aW9uXG5cdFx0fSBlbHNlIGlmICh2YWx1ZSA8IDApIHtcblx0XHRcdHRpbWUgPSAwXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRpbWUgPSB2YWx1ZTtcblx0XHR9XG5cblx0XHR0aGlzLnBsYXllci50cmlnZ2VyKCd0aW1ldXBkYXRlbG9hZCcsIHsgdGltZSB9KTtcblxuXHRcdHRoaXMubWVkaWEuY3VycmVudFRpbWUgPSB0aW1lO1xuXHR9XG5cblx0Z2V0IGR1cmF0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5tZWRpYS5kdXJhdGlvbjtcblx0fVxuXG5cdGdldCBoZWlnaHQgKCkge1xuXHRcdHJldHVybiB0aGlzLm1lZGlhLmNsaWVudEhlaWdodDtcblx0fVxuXG5cdGdldCB3aWR0aCAoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWVkaWEuY2xpZW50V2lkdGg7XG5cdH1cblxuXHRnZXQgcmF0ZSAoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWVkaWEucGxheWJhY2tSYXRlO1xuXHR9XG5cblx0c2V0IG11dGVkKHZhbHVlKSB7XG5cdFx0dGhpcy5tZWRpYS5tdXRlZCA9IHZhbHVlO1xuXHR9XG5cblx0Z2V0IG11dGVkKCkge1xuXHRcdHJldHVybiB0aGlzLm1lZGlhLm11dGVkXG5cdH1cblxuXHRnZXQgcmF0ZU1heCgpIHtcblx0XHRsZXQgbWF4ID0gdGhpcy5wbGF5ZXIub3B0aW9ucy5yYXRlLm1heDtcblx0XHRpZihJU19JT1MgfHwgSVNfQU5EUk9JRCkge1xuXHRcdFx0bWF4ID0gSHRtbDUuTU9CSUxFX01BWF9SQVRFO1xuXHRcdH1cblx0XHRpZihJU19TQUZBUkkpIHtcblx0XHRcdG1heCA9IEh0bWw1LlNBRkFSSV9NQVhfUkFURTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbWF4O1xuXHR9XG5cblx0Z2V0IHJhdGVNaW4oKSB7XG5cdFx0bGV0IG1pbiA9IHRoaXMucGxheWVyLm9wdGlvbnMucmF0ZS5taW47XG5cblx0XHRpZiAoSVNfSU9TIHx8IElTX0FORFJPSUQpIHtcblx0XHRcdG1pbiA9IEh0bWw1Lk1PQklMRV9NSU5fUkFURTtcblx0XHR9XG5cblx0XHRpZiAoSVNfU0FGQVJJKSB7XG5cdFx0XHRtaW4gPSBIdG1sNS5TQUZBUklfTUlOX1JBVEU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1pbjtcblx0fVxuXG5cdHNldCByYXRlICh2YWx1ZSkge1xuXHRcdGlmICh2YWx1ZSA8PSB0aGlzLnJhdGVNYXggJiYgdmFsdWUgPj0gdGhpcy5yYXRlTWluKSB7XG5cdFx0XHR0aGlzLm1lZGlhLnBsYXliYWNrUmF0ZSA9IHZhbHVlO1xuXHRcdFx0Q29va2llLnNldCgncmF0ZScsIHZhbHVlKTtcblx0XHR9XG5cdH1cblxuXHRnZXRBdmFpbGFibGVRdWFsaXR5TGV2ZWxzKCkge1xuXHRcdHJldHVybiB0aGlzLnBsYXllci5vcHRpb25zLnNvdXJjZXMubWFwKGl0ZW0gPT4gKHtcblx0XHRcdG5hbWUgOiBpdGVtLnRpdGxlLFxuXHRcdFx0Li4uaXRlbVxuXHRcdH0pKTtcblx0fVxuXG5cdHNldCBwbGF5YmFja1F1YWxpdHkobmFtZSkge1xuXHRcdHN1cGVyLnBsYXliYWNrUXVhbGl0eSA9IG5hbWU7XG5cdFx0Y29uc3QgdGltZSA9IHRoaXMuY3VycmVudFRpbWU7XG5cdFx0Y29uc3QgcmF0ZSA9IHRoaXMucmF0ZTtcblx0XHRjb25zdCBzdG9wID0gdGhpcy5wYXVzZWQ7XG5cblx0XHR0aGlzLl9wbGF5YmFja1F1YWxpdHkgPSB0aGlzLmdldEF2YWlsYWJsZVF1YWxpdHlMZXZlbHMoKS5maW5kKGl0ZW0gPT4gaXRlbS5uYW1lID09PSBuYW1lKTtcblxuXHRcdHRoaXMuc3JjID0gdGhpcy5fcGxheWJhY2tRdWFsaXR5O1xuXHRcdHRoaXMucGxheWJhY2tSYXRlID0gcmF0ZTtcblx0XHR0aGlzLmN1cnJlbnRUaW1lID0gdGltZTtcblxuXHRcdGlmIChzdG9wKSB7XG5cdFx0XHR0aGlzLnBhdXNlKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucGxheSgpO1xuXHRcdH1cblxuXHRcdHRoaXMudHJpZ2dlcigncXVhbGl0eWNoYW5nZScsIHRoaXMuX3BsYXliYWNrUXVhbGl0eSk7XG5cblx0fVxuXG5cdGdldCBwbGF5YmFja1F1YWxpdHkoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3BsYXliYWNrUXVhbGl0eTtcblx0fVxuXG5cdHNldCBzcmMgKHNyYykge1xuXHRcdGlmKHNyYyA9PSBudWxsKSByZXR1cm47XG5cdFx0aWYodGhpcy5zcmMgJiYgdGhpcy5zcmMudXJsID09PSBzcmMudXJsKSByZXR1cm47XG5cblx0XHR0aGlzLm1lZGlhLnNyYyA9IHNyYy51cmw7XG5cblx0XHR0aGlzLl9zb3VyY2UgPSBzcmM7XG5cdH1cblxuXHRnZXQgc3JjICgpIHtcblx0XHRyZXR1cm4gdGhpcy5fc291cmNlXG5cdH1cblxuXHRzZXQgdHJhY2sgKHZhbHVlKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm1lZGlhLnRleHRUcmFja3MubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmICh0aGlzLm1lZGlhLnRleHRUcmFja3NbIGkgXS5sYW5ndWFnZSA9PT0gdmFsdWUpXG5cdFx0XHRcdHRoaXMubWVkaWEudGV4dFRyYWNrc1sgaSBdLm1vZGUgPSAnc2hvd2luZyc7XG5cdFx0XHRlbHNlXG5cdFx0XHRcdHRoaXMubWVkaWEudGV4dFRyYWNrc1sgaSBdLm1vZGUgPSAnaGlkZGVuJztcblx0XHR9XG5cdH1cblxuXHRnZXQgcGF1c2VkKCkge1xuXHRcdHJldHVybiB0aGlzLm1lZGlhLnBhdXNlZDtcblx0fVxuXG5cdGdldCB2b2x1bWUgKCkge1xuXHRcdHJldHVybiB0aGlzLm1lZGlhLnZvbHVtZTtcblx0fVxuXG5cblx0Z2V0IGRlZmF1bHRWb2x1bWUgKCkge1xuXHRcdHJldHVybiBDb29raWUuZ2V0KCd2b2x1bWUnKSB8fCB0aGlzLnBsYXllci5vcHRpb25zLnZvbHVtZS5kZWZhdWx0O1xuXHR9XG5cblx0c2V0IHZvbHVtZSAodmFsdWUpIHtcblx0XHRjb25zdCBwbGF5ZXIgPSB0aGlzLnBsYXllcjtcblx0XHRpZiAodmFsdWUgPiAxKSB7XG5cdFx0XHR0aGlzLm1lZGlhLnZvbHVtZSA9IDE7XG5cdFx0fSBlbHNlIGlmICh2YWx1ZSA8IHBsYXllci5vcHRpb25zLnZvbHVtZS5tdXRlbGltaXQpIHtcblx0XHRcdHRoaXMubWVkaWEudm9sdW1lID0gMDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5tZWRpYS52b2x1bWUgPSB2YWx1ZTtcblx0XHRcdENvb2tpZS5zZXQoJ3ZvbHVtZScsIHZhbHVlKTtcblx0XHR9XG5cdFx0dGhpcy5tZWRpYS5tdXRlID0gKHZhbHVlIDwgcGxheWVyLm9wdGlvbnMudm9sdW1lLm11dGVsaW1pdCk7XG5cdH1cblxuXG5cdGdldCBidWZmZXJlZCAoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWVkaWEuYnVmZmVyZWQ7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybiB7VGltZVJhbmdlc31cblx0ICovXG5cdGdldCBzZWVrYWJsZSAoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWVkaWEuc2Vla2FibGU7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybiB7VGltZVJhbmdlc31cblx0ICovXG5cdGdldCBwbGF5ZWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWVkaWEucGxheWVkO1xuXHR9XG5cblx0Z2V0IHBsYXllZFBlcmNlbnRhZ2UoKSB7XG5cdFx0bGV0IHJlc3VsdCA9IDA7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBsYXllZC5sZW5ndGg7IGkrKykge1xuXHRcdFx0cmVzdWx0ICs9ICh0aGlzLnBsYXllZC5lbmQoaSkgLSB0aGlzLnBsYXllZC5zdGFydChpKSlcblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0IC8gdGhpcy5kdXJhdGlvbiAqIDEwMFxuXHR9XG5cblx0Z2V0IGN1cnJlbnRTcmMoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWVkaWEuY3VycmVudFNyYztcblx0fVxuXG5cdGluaXQgKCkge1xuXHRcdHN1cGVyLmluaXQoKTtcblx0XHRsZXQgZGZkID0gJC5EZWZlcnJlZCgpO1xuXHRcdHRoaXMuX2luaXRTdWJ0aXRsZXMoKTtcblx0XHR0aGlzLl9pbml0VmlkZW8oKVxuXHRcdFx0LmRvbmUoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLl9pbml0UmF0ZSgpO1xuXHRcdFx0XHR0aGlzLl9pbml0Vm9sdW1lKCk7XG5cdFx0XHRcdGRmZC5yZXNvbHZlKCk7XG5cdFx0XHR9KTtcblx0XHRyZXR1cm4gZGZkLnByb21pc2UoKTtcblx0fVxuXG5cdHN1cHBvcnRzRnVsbFNjcmVlbigpIHtcblx0XHRpZiAodHlwZW9mIHRoaXMubWVkaWEud2Via2l0RW50ZXJGdWxsU2NyZWVuID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRjb25zdCB1c2VyQWdlbnQgPSB3aW5kb3cubmF2aWdhdG9yICYmIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50IHx8ICcnO1xuXG5cdFx0XHQvLyBTZWVtcyB0byBiZSBicm9rZW4gaW4gQ2hyb21pdW0vQ2hyb21lICYmIFNhZmFyaSBpbiBMZW9wYXJkXG5cdFx0XHRpZiAoKC9BbmRyb2lkLykudGVzdCh1c2VyQWdlbnQpIHx8ICEoL0Nocm9tZXxNYWMgT1MgWCAxMC41LykudGVzdCh1c2VyQWdlbnQpKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRlbnRlckZ1bGxzY3JlZW4oKSB7XG5cdFx0Y29uc3QgdmlkZW8gPSB0aGlzLm1lZGlhO1xuXHRcdGlmICh2aWRlby5wYXVzZWQgJiYgdmlkZW8ubmV0d29ya1N0YXRlIDw9IHZpZGVvLkhBVkVfTUVUQURBVEEpIHtcblx0XHRcdC8vIGF0dGVtcHQgdG8gcHJpbWUgdGhlIHZpZGVvIGVsZW1lbnQgZm9yIHByb2dyYW1tYXRpYyBhY2Nlc3Ncblx0XHRcdC8vIHRoaXMgaXNuJ3QgbmVjZXNzYXJ5IG9uIHRoZSBkZXNrdG9wIGJ1dCBzaG91bGRuJ3QgaHVydFxuXHRcdFx0dGhpcy5wbGF5KCk7XG5cblx0XHRcdC8vIHBsYXlpbmcgYW5kIHBhdXNpbmcgc3luY2hyb25vdXNseSBkdXJpbmcgdGhlIHRyYW5zaXRpb24gdG8gZnVsbHNjcmVlblxuXHRcdFx0Ly8gY2FuIGdldCBpT1MgfjYuMSBkZXZpY2VzIGludG8gYSBwbGF5L3BhdXNlIGxvb3Bcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLnBhdXNlKCk7XG5cdFx0XHRcdHZpZGVvLndlYmtpdEVudGVyRnVsbFNjcmVlbigpO1xuXHRcdFx0fSwgMCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZpZGVvLndlYmtpdEVudGVyRnVsbFNjcmVlbigpO1xuXHRcdH1cblx0fVxuXG5cdGV4aXRGdWxsc2NyZWVuKCkge1xuXHRcdHRoaXMubWVkaWEud2Via2l0RXhpdEZ1bGxTY3JlZW4oKTtcblx0fVxuXG5cdHRvZ2dsZVBsYXkgKCkge1xuXHRcdGlmICghdGhpcy5tZWRpYS5wbGF5ZWQgfHwgdGhpcy5tZWRpYS5wYXVzZWQpIHtcblx0XHRcdHRoaXMucGxheSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnBhdXNlKCk7XG5cdFx0fVxuXHR9XG5cblx0cGxheSAoKSB7XG5cdFx0bGV0IGRmZCA9ICQuRGVmZXJyZWQoKTtcblx0XHRjb25zdCBwbGF5UHJvbWlzZSA9IHRoaXMubWVkaWEucGxheSgpO1xuXG5cdFx0aWYocGxheVByb21pc2UgIT0gbnVsbCkge1xuXHRcdFx0cGxheVByb21pc2UudGhlbihmdW5jdGlvbigpIHtcblx0XHRcdFx0ZGZkLnJlc29sdmUoKTtcblx0XHRcdH0pXG5cdFx0fSBlbHNlIHtcblx0XHRcdGRmZC5yZXNvbHZlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBkZmQucHJvbWlzZSgpO1xuXHR9XG5cblx0cGF1c2UgKCkge1xuXHRcdGxldCBkZmQgPSAkLkRlZmVycmVkKCk7XG5cdFx0Y29uc3QgcGF1c2VQcm9taXNlID0gdGhpcy5tZWRpYS5wYXVzZSgpO1xuXG5cdFx0aWYocGF1c2VQcm9taXNlICE9IG51bGwpIHtcblx0XHRcdHBhdXNlUHJvbWlzZS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRkZmQucmVzb2x2ZSgpO1xuXHRcdFx0fSlcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZGZkLnJlc29sdmUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIGRmZC5wcm9taXNlKCk7XG5cdH1cblxuXHRsb2FkKCkge1xuXHRcdHJldHVybiB0aGlzLm1lZGlhLmxvYWQoKVxuXHR9XG5cblx0X2luaXRSYXRlICgpIHtcblx0XHR0aGlzLnJhdGUgPSB0aGlzLmRlZmF1bHRSYXRlO1xuXHR9XG5cblx0X2luaXRWb2x1bWUgKCkge1xuXHRcdHRoaXMudm9sdW1lID0gdGhpcy5kZWZhdWx0Vm9sdW1lO1xuXHR9XG5cblx0X2luaXRTdWJ0aXRsZXMgKCkge1xuXHRcdGxldCBfc2VsZiA9IHRoaXM7XG5cdFx0dGhpcy5lbGVtZW50LmNoaWxkcmVuKCd0cmFja1traW5kPVwic3VidGl0bGVzXCJdJykuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0XHRsZXQgbGFuZ3VhZ2UgPSAkKHRoaXMpLmF0dHIoJ3NyY2xhbmcnKTtcblx0XHRcdGxldCB0aXRsZSA9ICQodGhpcykuYXR0cignbGFiZWwnKTtcblx0XHRcdGxldCBzcmMgPSAkKHRoaXMpLmF0dHIoJ3NyYycpO1xuXHRcdFx0aWYgKHRpdGxlLmxlbmd0aCA+IDAgJiYgc3JjLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0X3NlbGYuc3VidGl0bGVzLnB1c2goe1xuXHRcdFx0XHRcdHRpdGxlIDogdGl0bGUsXG5cdFx0XHRcdFx0c3JjIDogc3JjLFxuXHRcdFx0XHRcdGxhbmd1YWdlIDogbGFuZ3VhZ2Vcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRfaW5pdFZpZGVvICgpIHtcblx0XHRsZXQgZGZkID0gJC5EZWZlcnJlZCgpO1xuXHRcdGlmICh0aGlzLm1lZGlhLnJlYWR5U3RhdGUgPiBIVE1MTWVkaWFFbGVtZW50LkhBVkVfTk9USElORykge1xuXHRcdFx0ZGZkLnJlc29sdmUoKVxuXHRcdFx0dGhpcy5fdGV4dFRyYWNrc0hhY2soKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JCh0aGlzLm1lZGlhKS5vbmUoJ2xvYWRlZG1ldGFkYXRhJywgKGUpID0+IHtcblx0XHRcdFx0ZGZkLnJlc29sdmUoKVxuXHRcdFx0XHR0aGlzLl90ZXh0VHJhY2tzSGFjaygpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdGRmZC5ub3RpZnkoKTtcblx0XHRyZXR1cm4gZGZkLnByb21pc2UoKTtcblx0fVxuXG5cdF90ZXh0VHJhY2tzSGFjayAoKSB7XG5cblx0XHQvLyBUaGlzIGlzIGdlbmVyYWxseSBmb3IgRmlyZWZveCBvbmx5XG5cdFx0Ly8gYmVjYXVzZSBpdCBzb21laG93IHJlc2V0cyB0cmFjayBsaXN0XG5cdFx0Ly8gZm9yIHZpZGVvIGVsZW1lbnQgYWZ0ZXIgRE9NIG1hbmlwdWxhdGlvbi5cblxuXHRcdGlmICh0aGlzLm1lZGlhLnRleHRUcmFja3MubGVuZ3RoID09PSAwICYmIHRoaXMuc3VidGl0bGVzLmxlbmd0aCA+IDApIHtcblx0XHRcdHRoaXMuZWxlbWVudC5jaGlsZHJlbigndHJhY2tba2luZD1cInN1YnRpdGxlc1wiXScpLnJlbW92ZSgpO1xuXHRcdFx0Zm9yICh2YXIgaSBpbiB0aGlzLnN1YnRpdGxlcykge1xuXHRcdFx0XHRpZiAodGhpcy5zdWJ0aXRsZXMuaGFzT3duUHJvcGVydHkoaSkpIHtcblx0XHRcdFx0XHR0aGlzLmVsZW1lbnRcblx0XHRcdFx0XHRcdC5hcHBlbmQoJCgnPHRyYWNrLz4nKVxuXHRcdFx0XHRcdFx0XHQuYXR0cignbGFiZWwnLCB0aGlzLnN1YnRpdGxlc1sgaSBdLnRpdGxlKVxuXHRcdFx0XHRcdFx0XHQuYXR0cignc3JjJywgdGhpcy5zdWJ0aXRsZXNbIGkgXS5zcmMpXG5cdFx0XHRcdFx0XHRcdC5hdHRyKCdzcmNsYW5nJywgdGhpcy5zdWJ0aXRsZXNbIGkgXS5sYW5ndWFnZSlcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ2lkJywgdGhpcy5zdWJ0aXRsZXNbIGkgXS5sYW5ndWFnZSlcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ2tpbmQnLCAnc3VidGl0bGVzJykpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cbn1cblxuXG4vKipcbiAqIE1pbiByYXRlIGZvciBhbmRyb2lkIGFuZCBpb3NcbiAqL1xuSHRtbDUuTU9CSUxFX01JTl9SQVRFID0gMC41O1xuXG4vKipcbiAqIE1heCByYXRlIGZvciBhbmRyb2lkIGFuZCBpb3NcbiAqL1xuSHRtbDUuTU9CSUxFX01BWF9SQVRFID0gMlxuXG5cbkh0bWw1LlNBRkFSSV9NSU5fUkFURSA9IDAuNTtcblxuSHRtbDUuU0FGQVJJX01BWF9SQVRFID0gMjtcblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdIdG1sNScsIEh0bWw1KTtcbmV4cG9ydCBkZWZhdWx0IEh0bWw1O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2VudGl0eS9IdG1sNS5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50cy9Db21wb25lbnQnO1xuaW1wb3J0IENvb2tpZSBmcm9tICcuLi91dGlscy9jb29raWUnO1xuaW1wb3J0IE1lZGlhRXJyb3IgZnJvbSAnLi4vTWVkaWFFcnJvcic7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5jbGFzcyBFbnRpdHkgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXHRcdHRoaXMuc3VidGl0bGVzID0gW107XG5cdFx0dGhpcy5fdHJpZ2dlclN0YWNrID0gW107XG5cdFx0dGhpcy5fc3RvcExpc3RlbiA9IGZhbHNlO1xuXG5cdFx0aWYgKHRoaXMucGxheWVyLm9wdGlvbnMuc3JjID09IG51bGwpIHtcblx0XHRcdHRoaXMucGxheWVyLmVycm9yID0gbmV3IE1lZGlhRXJyb3IoJ9CS0LjQtNC10L7RhNCw0LnQuyDQvdC1INC90LDQudC00LXQvS4nKTtcblx0XHR9XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdHRyaWdnZXIoLi4uYXJncykge1xuXHRcdGlmKCF0aGlzLl9zdG9wTGlzdGVuKSB7XG5cdFx0XHR0aGlzLl90cmlnZ2VyU3RhY2sucHVzaChhcmdzKTtcblx0XHR9XG5cdFx0c3VwZXIudHJpZ2dlciguLi5hcmdzKTtcblx0fVxuXG5cdGluaXQoKSB7XG5cdFx0dGhpcy5fc3RvcExpc3RlbiA9IHRydWU7XG5cdFx0dGhpcy5fdHJpZ2dlclN0YWNrLmZvckVhY2goYXJncyA9PiB7XG5cdFx0XHR0aGlzLnRyaWdnZXIoLi4uYXJncyk7XG5cdFx0fSk7XG5cdH1cblxuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQgPSAkKCc8ZGl2IC8+Jyk7XG5cdH1cblxuXHRzZXQgcG9zdGVyKHVybCkge1xuXHRcdHRoaXMuX3Bvc3RlciA9IHVybDtcblx0XHR0aGlzLnRyaWdnZXIoJ3Bvc3RlcmNoYW5nZScsIHsgdXJsIH0pO1xuXHR9XG5cblxuXHRnZXQgcG9zdGVyKCkge1xuXHRcdHJldHVybiB0aGlzLl9wb3N0ZXI7XG5cdH1cblxuXHRnZXQgY3VycmVudFRpbWUoKSB7XG5cdFx0cmV0dXJuXG5cdH1cblxuXHRzZXQgY3VycmVudFRpbWUodmFsdWUpIHtcblxuXHR9XG5cblx0Z2V0IGR1cmF0aW9uKCkge1xuXHRcdHJldHVyblxuXHR9XG5cblx0c2V0IG11dGVkKHZhbHVlKSB7XG5cblx0fVxuXG5cdGdldCBtdXRlZCgpIHtcblxuXHR9XG5cblx0Z2V0IGhlaWdodCgpIHtcblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50LmlubmVySGVpZ2h0KClcblx0fVxuXG5cdGdldCB3aWR0aCgpIHtcblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50LndpZHRoKClcblx0fVxuXG5cdHNldCByYXRlTWF4KHZhbHVlKSB7XG5cdFx0dGhpcy5fcmF0ZU1heCA9IHZhbHVlO1xuXHR9XG5cblx0c2V0IHJhdGVNaW4odmFsdWUpIHtcblx0XHR0aGlzLl9yYXRlTWluID0gdmFsdWU7XG5cdH1cblxuXHRnZXQgcmF0ZU1heCgpIHtcblx0XHRyZXR1cm4gdGhpcy5fcmF0ZU1heCB8fCB0aGlzLnBsYXllci5vcHRpb25zLnJhdGUubWF4O1xuXG5cdH1cblxuXHRnZXQgcmF0ZU1pbigpIHtcblx0XHRyZXR1cm4gdGhpcy5fcmF0ZU1pbiB8fCB0aGlzLnBsYXllci5vcHRpb25zLnJhdGUubWluO1xuXHR9XG5cblx0Z2V0IHJhdGUoKSB7XG5cdH1cblxuXHRzZXQgcmF0ZSh2YWx1ZSkge1xuXHRcdGlmKHZhbHVlID4gdGhpcy5yYXRlTWF4IHx8IHZhbHVlIDwgdGhpcy5yYXRlTWluKSByZXR1cm47XG5cdH1cblxuXHRpbmNyZWFzZVJhdGUoKSB7XG5cdFx0dGhpcy5yYXRlICs9IHRoaXMucGxheWVyLm9wdGlvbnMucmF0ZS5zdGVwO1xuXHR9XG5cblx0ZGVjcmVhc2VSYXRlKCkge1xuXHRcdHRoaXMucmF0ZSAtPSB0aGlzLnBsYXllci5vcHRpb25zLnJhdGUuc3RlcDtcblx0fVxuXG5cdHNldCBwbGF5YmFja1F1YWxpdHkobmFtZSkge1xuXHRcdGNvbnN0IGxldmVscyA9IHRoaXMuZ2V0QXZhaWxhYmxlUXVhbGl0eUxldmVscygpO1xuXHRcdGlmKCFsZXZlbHMuc29tZShvYmogPT4gbmFtZSBpbiBvYmopKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHR9XG5cblx0Z2V0IHBsYXliYWNrUXVhbGl0eSgpIHtcblxuXHR9XG5cblx0Z2V0IHBhdXNlZCgpIHtcblxuXHR9XG5cblx0Z2V0IHBsYXllZCgpIHtcblxuXHR9XG5cblx0Z2V0IGRlZmF1bHRSYXRlKCkge1xuXHRcdHJldHVybiBDb29raWUuZ2V0KCdyYXRlJykgfHwgdGhpcy5wbGF5ZXIub3B0aW9ucy5yYXRlLmRlZmF1bHRcblx0fVxuXG5cdHNldCBzcmMgKHZhbHVlKSB7XG5cblx0fVxuXG5cdGdldCBzcmMoKSB7XG5cblx0fVxuXG5cdHN1cHBvcnRzRnVsbFNjcmVlbigpIHtcblxuXHR9XG5cblx0cGxheSgpIHtcblxuXHR9XG5cblx0cGF1c2UgKCkge1xuXG5cdH1cblxuXHRsb2FkKCkge1xuXHR9XG5cblx0dG9nZ2xlUGxheSAoKSB7XG5cdFx0aWYgKHRoaXMucGF1c2VkKSB7XG5cdFx0XHR0aGlzLnBsYXkoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5wYXVzZSgpO1xuXHRcdH1cblx0fVxuXG59XG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ0VudGl0eScsIEVudGl0eSk7XG5leHBvcnQgZGVmYXVsdCBFbnRpdHk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvZW50aXR5L0VudGl0eS5qcyIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgRW50aXR5IGZyb20gJy4vRW50aXR5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50cy9Db21wb25lbnQnO1xuXG5cbmZ1bmN0aW9uIGxvYWRTY3JpcHQodXJsKSB7XG5cdHJldHVybiAkLmdldFNjcmlwdCh1cmwpO1xufVxuXG4vKiBnbG9iYWwgWVQgKi9cbmNvbnN0IGFwaUxvYWRlZCA9IGxvYWRTY3JpcHQoJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2lmcmFtZV9hcGknKTtcblxuY2xhc3MgWW91dHViZSBleHRlbmRzIEVudGl0eSB7XG5cdGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucykge1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cdFx0dGhpcy5fcGF1c2VkID0gdHJ1ZTtcblxuXHRcdHRoaXMuc3JjID0gdGhpcy5wbGF5ZXIub3B0aW9ucy5zcmM7XG5cblx0XHR0aGlzLnBsYXllci5hZGRDbGFzcygnbGVwbGF5ZXItLXlvdXR1YmUnKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ2NsaWNrJywgdGhpcy5vbkNsaWNrLmJpbmQodGhpcykpO1xuXHRcdHRoaXMuZWxlbWVudC5vbignZGJsY2xpY2snLCB0aGlzLm9uRGJsY2xpY2suYmluZCh0aGlzKSk7XG5cdH1cblxuXHRzZXQgc3JjKHNyYykge1xuXHRcdGlmKHNyYyA9PSBudWxsKSByZXR1cm47XG5cdFx0aWYodGhpcy5zcmMgJiYgdGhpcy5zcmMudXJsID09PSBzcmMudXJsKSByZXR1cm47XG5cblx0XHRjb25zdCB1cmwgPSBzcmMudXJsIHx8IHNyYy5pZDtcblxuXHRcdHRoaXMudmlkZW9JZCA9IFlvdXR1YmUucGFyc2VVcmwodXJsKTtcblxuXHRcdGlmKHRoaXMucGxheWVyLm9wdGlvbnMucG9zdGVyKSB7XG5cdFx0XHR0aGlzLnBvc3RlciA9IHRoaXMucGxheWVyLm9wdGlvbnMucG9zdGVyXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucG9zdGVyID0gJ2h0dHBzOi8vaW1nLnlvdXR1YmUuY29tL3ZpLycgKyB0aGlzLnZpZGVvSWQgKyAnLzAuanBnJztcblx0XHR9XG5cdH1cblxuXHRvbkNsaWNrKGV2ZW50KSB7XG5cdFx0dGhpcy50cmlnZ2VyKCdjbGljaycpO1xuXHR9XG5cblx0b25EYmxjbGljaygpIHtcblx0XHR0aGlzLnRyaWdnZXIoJ2RibGNsaWNrJyk7XG5cdH1cblxuXHRnZXQgY3VycmVudFRpbWUoKSB7XG5cdFx0cmV0dXJuIHRoaXMueXRQbGF5ZXI/IHRoaXMueXRQbGF5ZXIuZ2V0Q3VycmVudFRpbWUoKSA6IDA7XG5cdH1cblxuXHRzZXQgY3VycmVudFRpbWUodmFsdWUpIHtcblx0XHRpZih0aGlzLmxhc3RTdGF0ZSA9PT0gWVQuUGxheWVyU3RhdGUuUEFVU0VEKSB7XG5cdFx0XHR0aGlzLnRpbWVCZWZvcmVTZWVrID0gdGhpcy5jdXJyZW50VGltZTtcblx0XHR9XG5cblx0XHRpZiAoIXRoaXMuaXNTZWVraW5nKSB7XG5cdFx0XHR0aGlzLndhc1BhdXNlZEJlZm9yZVNlZWsgPSB0aGlzLnBhdXNlZDtcblx0XHR9XG5cblx0XHR0aGlzLmlzU2Vla2luZyA9IHRydWU7XG5cdFx0dGhpcy55dFBsYXllci5zZWVrVG8odmFsdWUsIHRydWUpO1xuXHRcdHRoaXMudHJpZ2dlcigndGltZXVwZGF0ZScpO1xuXHRcdHRoaXMudHJpZ2dlcignc2Vla2luZycpO1xuXG5cdFx0dGhpcy5lbWl0VGltZXVwZGF0ZSgpO1xuXHR9XG5cblx0Z2V0IGR1cmF0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLnl0UGxheWVyICYmIHRoaXMueXRQbGF5ZXIuZ2V0RHVyYXRpb24gPyB0aGlzLnl0UGxheWVyLmdldER1cmF0aW9uKCkgOiBOYU47XG5cdH1cblxuXHRnZXQgcGF1c2VkKCkge1xuXHRcdHJldHVybiAodGhpcy55dFBsYXllcikgP1xuXHRcdFx0KHRoaXMubGFzdFN0YXRlICE9PSBZVC5QbGF5ZXJTdGF0ZS5QTEFZSU5HICYmIHRoaXMubGFzdFN0YXRlICE9PSBZVC5QbGF5ZXJTdGF0ZS5CVUZGRVJJTkcpXG5cdFx0XHQ6IHRydWU7XG5cblx0fVxuXG5cblx0Z2V0IHJhdGUoKSB7XG5cdFx0cmV0dXJuIHRoaXMueXRQbGF5ZXIuZ2V0UGxheWJhY2tSYXRlKCk7XG5cdH1cblxuXHRzZXQgcmF0ZSh2YWx1ZSkge1xuXHRcdHN1cGVyLnJhdGUgPSB2YWx1ZTtcblx0XHR0aGlzLnl0UGxheWVyLnNldFBsYXliYWNrUmF0ZSh2YWx1ZSk7XG5cdFx0dGhpcy50cmlnZ2VyKCdyYXRlY2hhbmdlJyk7XG5cdH1cblxuXHRzZXQgbXV0ZWQodmFsdWUpIHtcblx0XHRpZih2YWx1ZSkge1xuXHRcdFx0dGhpcy55dFBsYXllci5tdXRlKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMueXRQbGF5ZXIudW5NdXRlKCk7XG5cdFx0fVxuXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHR0aGlzLnRyaWdnZXIoJ3ZvbHVtZWNoYW5nZScpO1xuXHRcdH0sIDUwKTtcblx0fVxuXG5cdGdldCBtdXRlZCgpIHtcblx0XHRyZXR1cm4gdGhpcy55dFBsYXllci5pc011dGVkKCk7XG5cdH1cblxuXHRnZXQgZGVmYXVsdFZvbHVtZSgpIHtcblx0XHRyZXR1cm4gdGhpcy52b2x1bWUgfHwgdGhpcy5wbGF5ZXIub3B0aW9ucy52b2x1bWUuZGVmYXVsdDtcblx0fVxuXG5cdGluY3JlYXNlUmF0ZSgpIHtcblx0XHRjb25zdCBpbmRleCA9IHRoaXMuYXZhaWxhYmxlUmF0ZXMuaW5kZXhPZih0aGlzLnJhdGUpO1xuXHRcdGlmKGluZGV4ICsgMSA+PSB0aGlzLmF2YWlsYWJsZVJhdGVzLmxlbmd0aCkgcmV0dXJuO1xuXHRcdHJldHVybiB0aGlzLnJhdGUgPSB0aGlzLmF2YWlsYWJsZVJhdGVzW2luZGV4ICsgMV07XG5cdH1cblxuXHRkZWNyZWFzZVJhdGUoKSB7XG5cdFx0Y29uc3QgaW5kZXggPSB0aGlzLmF2YWlsYWJsZVJhdGVzLmluZGV4T2YodGhpcy5yYXRlKTtcblx0XHRpZihpbmRleCAtIDEgPCAwKSByZXR1cm47XG5cdFx0cmV0dXJuIHRoaXMucmF0ZSA9IHRoaXMuYXZhaWxhYmxlUmF0ZXNbaW5kZXggLSAxXTtcblx0fVxuXG5cdGdldEF2YWlsYWJsZVF1YWxpdHlMZXZlbHMoKSB7XG5cdFx0Y29uc3QgYXJyID0gdGhpcy55dFBsYXllci5nZXRBdmFpbGFibGVRdWFsaXR5TGV2ZWxzKCk7XG5cdFx0Y29uc3QgaW5kZXggPSBhcnIuaW5kZXhPZignYXV0bycpO1xuXG5cdFx0aWYoaW5kZXggPiAtMSkge1xuXHRcdFx0YXJyLnNwbGljZShpbmRleCwgMSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGFyci5tYXAoaXRlbSA9PiAoe1xuXHRcdFx0dGl0bGUgOiBZb3V0dWJlLlFVQUxJVFlfTkFNRVNbaXRlbV0gfHwgaXRlbSxcblx0XHRcdG5hbWUgOiBpdGVtXG5cdFx0fSkpO1xuXHR9XG5cblx0c2V0IHBsYXliYWNrUXVhbGl0eShuYW1lKSB7XG5cdFx0c3VwZXIucGxheWJhY2tRdWFsaXR5ID0gbmFtZTtcblx0XHRjb25zdCB0aW1lID0gdGhpcy5jdXJyZW50VGltZTtcblx0XHRjb25zdCBzdGF0dXMgPSB0aGlzLnl0UGxheWVyLmdldFBsYXllclN0YXRlKCk7XG5cblx0XHRpZihzdGF0dXMgIT09IFlULlBsYXllclN0YXRlLlVOU1RBUlRFRCAmJiBzdGF0dXMgIT09IFlULlBsYXllclN0YXRlLkNVRUQpIHtcblx0XHRcdHRoaXMueXRQbGF5ZXIucGF1c2VWaWRlbygpO1xuXHRcdH1cblxuXHRcdHRoaXMuX25leHRQbGF5YmFja1F1YWxpdHkgPSBuYW1lO1xuXHRcdHRoaXMueXRQbGF5ZXIuc2V0UGxheWJhY2tRdWFsaXR5KG5hbWUpO1xuXHRcdHRoaXMueXRQbGF5ZXIuc2Vla1RvKHRpbWUpO1xuXG5cdFx0aWYoc3RhdHVzICE9PSBZVC5QbGF5ZXJTdGF0ZS5QQVVTRUQpIHtcblx0XHRcdHRoaXMueXRQbGF5ZXIucGxheVZpZGVvKCk7XG5cdFx0fVxuXG5cdH1cblxuXHRnZXQgcGxheWJhY2tRdWFsaXR5KCkge1xuXHRcdGlmICh0aGlzLl9wbGF5YmFja1F1YWxpdHkgPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5fcGxheWJhY2tRdWFsaXR5ID0gdGhpcy5nZXRBdmFpbGFibGVRdWFsaXR5TGV2ZWxzKClcblx0XHRcdFx0LmZpbmQoaXRlbSA9PiBpdGVtLm5hbWUgPT09IHRoaXMueXRQbGF5ZXIuZ2V0UGxheWJhY2tRdWFsaXR5KCkpXG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLl9wbGF5YmFja1F1YWxpdHk7XG5cdH1cblxuXHRnZXQgdm9sdW1lKCkge1xuXHRcdHJldHVybiB0aGlzLnl0UGxheWVyID8gdGhpcy55dFBsYXllci5nZXRWb2x1bWUoKSAvIDEwMC4wIDogMTtcblx0fVxuXG5cdHNldCB2b2x1bWUodmFsdWUpIHtcblx0XHR0aGlzLnl0UGxheWVyLnNldFZvbHVtZSh2YWx1ZSAqIDEwMCk7XG5cblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdHRoaXMudHJpZ2dlcigndm9sdW1lY2hhbmdlJyk7XG5cdFx0fSwgNTApXG5cblx0fVxuXG5cdHN1cHBvcnRzRnVsbFNjcmVlbigpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdHBsYXkoKSB7XG5cdFx0dGhpcy55dFBsYXllci5wbGF5VmlkZW8oKTtcblx0XHR0aGlzLnRyaWdnZXIoJ3BsYXknKTtcblx0fVxuXG5cdHBhdXNlKCkge1xuXHRcdHRoaXMueXRQbGF5ZXIucGF1c2VWaWRlbygpO1xuXHRcdHRoaXMudHJpZ2dlcigncGF1c2UnKTtcblx0fVxuXG5cblx0aW5pdCgpIHtcblx0XHRzdXBlci5pbml0KCk7XG5cdFx0cmV0dXJuIGFwaUxvYWRlZFxuXHRcdFx0LnRoZW4oKCkgPT4gdGhpcy5pbml0WVRQbGF5ZXIoKSlcblx0fVxuXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0dGhpcy5lbGVtZW50ID0gJCgnPGRpdiAvPicpXG5cdFx0XHQuYWRkQ2xhc3MoJ2xlcGxheWVyX195b3V0dWJlLXdyYXBwZXInKVxuXHRcdFx0LmF0dHIoJ3RhYmluZGV4JywgJzAnKTtcblx0XHR0aGlzLnlvdXR1YmVFbGVtZW50ID0gJCgnPGRpdiAvPicpXG5cdFx0XHQuYWRkQ2xhc3MoJ2xlcGxheWVyX195b3V0dWJlJyk7XG5cdFx0dGhpcy5ibG9ja2VyID0gJCgnPGRpdiAvPicpXG5cdFx0XHQuYWRkQ2xhc3MoJ2xlcGxheWVyX195b3V0dWJlLWJsb2NrZXInKTtcblxuXG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudFxuXHRcdFx0LmFwcGVuZCh0aGlzLmJsb2NrZXIpXG5cdFx0XHQuYXBwZW5kKHRoaXMueW91dHViZUVsZW1lbnQpO1xuXHR9XG5cblx0aW5pdFlUUGxheWVyKCkge1xuXHRcdHRoaXMuX2luaXRQcm9taXNlID0gJC5EZWZlcnJlZCgpO1xuXHRcdGNvbnN0IGdsb2JhbE9wdGlvbnMgPSB0aGlzLnBsYXllci5vcHRpb25zO1xuXHRcdGxldCB5dE9wdGlvbnMgPSB7XG5cdFx0XHRhdXRvcGxheSA6IGdsb2JhbE9wdGlvbnMuYXV0b3BsYXkgPyAxIDogMCxcblx0XHRcdGxvb3AgOiBnbG9iYWxPcHRpb25zLmxvb3AgPyAxIDogMCxcblx0XHRcdGl2X2xvYWRfcG9saWN5IDogMyxcblx0XHRcdGNvbnRyb2xzIDogMCxcblx0XHRcdG1vZGVzdGJyYW5kaW5nIDogMSxcblx0XHRcdHJlbCA6IDAsXG5cdFx0XHRzaG93aW5mbyA6IDAsXG5cdFx0XHRjY19sb2FkX3BvbGljeSA6IDEsXG5cdFx0XHRkaXNhYmxla2IgOiAwLFxuXHRcdFx0ZnMgOiAwLFxuXHRcdFx0c3RhcnQgOiBnbG9iYWxPcHRpb25zLnRpbWVcblx0XHR9O1xuXG5cdFx0WVQucmVhZHkoKCkgPT4ge1xuXHRcdFx0dGhpcy5vcHRpb25zLmN0eC5yZXBsYWNlV2l0aCh0aGlzLmVsZW1lbnQpO1xuXG5cdFx0XHR0aGlzLnl0UGxheWVyID0gbmV3IFlULlBsYXllcih0aGlzLnlvdXR1YmVFbGVtZW50WzBdLCB7XG5cdFx0XHRcdHZpZGVvSWQgOiB0aGlzLnZpZGVvSWQsXG5cdFx0XHRcdHdpZHRoIDogZ2xvYmFsT3B0aW9ucy53aWR0aCB8fCAnMTAwJScsXG5cdFx0XHRcdHBsYXllclZhcnMgOiB5dE9wdGlvbnMsXG5cdFx0XHRcdGV2ZW50cyA6IHtcblx0XHRcdFx0XHRvblJlYWR5IDogdGhpcy5vbllUUFJlYWR5LmJpbmQodGhpcyksXG5cdFx0XHRcdFx0b25TdGF0ZUNoYW5nZSA6IHRoaXMub25ZVFBTdGF0ZUNoYW5nZS5iaW5kKHRoaXMpLFxuXHRcdFx0XHRcdG9uUGxheWJhY2tSYXRlQ2hhbmdlIDogdGhpcy5vbllUUFJhdGVDaGFuZ2UuYmluZCh0aGlzKSxcblx0XHRcdFx0XHRvblBsYXliYWNrUXVhbGl0eUNoYW5nZSA6IHRoaXMub25ZVFBQbGF5YmFja1F1YWxpdHlDaGFuZ2UuYmluZCh0aGlzKVxuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdH0pXG5cdFx0cmV0dXJuIHRoaXMuX2luaXRQcm9taXNlLnByb21pc2UoKTtcblx0fVxuXG5cblx0c2V0QXZhaWxhYmxlUGxheWJhY2tSYXRlcygpIHtcblx0XHR0aGlzLmF2YWlsYWJsZVJhdGVzID0gdGhpcy55dFBsYXllci5nZXRBdmFpbGFibGVQbGF5YmFja1JhdGVzKCk7XG5cdFx0dGhpcy5yYXRlTWluID0gdGhpcy5hdmFpbGFibGVSYXRlc1swXTtcblx0XHR0aGlzLnJhdGVNYXggPSB0aGlzLmF2YWlsYWJsZVJhdGVzW3RoaXMuYXZhaWxhYmxlUmF0ZXMubGVuZ3RoIC0gMV07XG5cdH1cblxuXHRvbllUUFJlYWR5KGUpIHtcblx0XHR0aGlzLl9pbml0UHJvbWlzZS5yZXNvbHZlKCk7XG5cdFx0dGhpcy5zZXRBdmFpbGFibGVQbGF5YmFja1JhdGVzKCk7XG5cdH1cblxuXHRvbllUUFJhdGVDaGFuZ2UoZSkge1xuXHRcdHRoaXMudHJpZ2dlcigncmF0ZWNoYW5nZScpO1xuXHR9XG5cblx0b25ZVFBQbGF5YmFja1F1YWxpdHlDaGFuZ2UoZSkge1xuXHRcdGNvbnN0IGRhdGEgPSBlLmRhdGE7XG5cdFx0dGhpcy5fcGxheWJhY2tRdWFsaXR5ID0gdGhpcy5nZXRBdmFpbGFibGVRdWFsaXR5TGV2ZWxzKCkuZmluZChpdGVtID0+IGl0ZW0ubmFtZSA9PT0gZGF0YSk7XG5cdFx0dGhpcy50cmlnZ2VyKCdxdWFsaXR5Y2hhbmdlJywgdGhpcy5fcGxheWJhY2tRdWFsaXR5KTtcblx0fVxuXG5cdG9uWVRQU3RhdGVDaGFuZ2UoZSkge1xuXHRcdGNvbnN0IHN0YXRlID0gZS5kYXRhO1xuXHRcdGlmKHN0YXRlID09PSB0aGlzLmxhc3RTdGF0ZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMubGFzdFN0YXRlID0gc3RhdGU7XG5cdFx0c3dpdGNoKHN0YXRlKSB7XG5cdFx0Y2FzZSBZVC5QbGF5ZXJTdGF0ZS5VTlNUQVJURUQ6XG5cdFx0XHR0aGlzLnRyaWdnZXIoJ2xvYWRzdGFydCcpO1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdsb2FkZWRtZXRhZGF0YScpO1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdkdXJhdGlvbmNoYW5nZScpO1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdyYXRlY2hhbmdlJyk7XG5cdFx0XHR0aGlzLnRyaWdnZXIoJ3ZvbHVtZWNoYW5nZScpO1xuXHRcdFx0YnJlYWs7XG5cblx0XHRjYXNlIFlULlBsYXllclN0YXRlLkVOREVEOlxuXHRcdFx0dGhpcy50cmlnZ2VyKCdlbmRlZCcpO1xuXHRcdFx0YnJlYWs7XG5cblx0XHRjYXNlIFlULlBsYXllclN0YXRlLlBMQVlJTkc6XG5cdFx0XHR0aGlzLnRyaWdnZXIoJ3RpbWV1cGRhdGUnKTtcblx0XHRcdHRoaXMudHJpZ2dlcignZHVyYXRpb25jaGFuZ2UnKTtcblx0XHRcdHRoaXMudHJpZ2dlcigncGxheWluZycpO1xuXG5cdFx0XHR0aGlzLnl0UGxheWVyLnNldFBsYXliYWNrUXVhbGl0eSh0aGlzLl9uZXh0UGxheWJhY2tRdWFsaXR5KTtcblxuXHRcdFx0aWYodGhpcy5pc1NlZWtpbmcpIHtcblx0XHRcdFx0dGhpcy5vblNlZWtlZCgpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLmVtaXRUaW1ldXBkYXRlKCk7XG5cdFx0XHRicmVhaztcblxuXHRcdGNhc2UgWVQuUGxheWVyU3RhdGUuUEFVU0VEOlxuXHRcdFx0dGhpcy50cmlnZ2VyKCdjYW5wbGF5Jyk7XG5cblx0XHRcdGlmKHRoaXMuaXNTZWVraW5nKSB7XG5cdFx0XHRcdHRoaXMub25TZWVrZWQoKTtcblx0XHRcdH1cblx0XHRcdGJyZWFrO1xuXG5cdFx0Y2FzZSBZVC5QbGF5ZXJTdGF0ZS5CVUZGRVJJTkc6XG5cdFx0XHR0aGlzLnBsYXllci50cmlnZ2VyKCd0aW1ldXBkYXRlJyk7XG5cdFx0XHR0aGlzLnBsYXllci50cmlnZ2VyKCd3YWl0aW5nJyk7XG5cblx0XHRcdHRoaXMueXRQbGF5ZXIuc2V0UGxheWJhY2tRdWFsaXR5KHRoaXMuX25leHRQbGF5YmFja1F1YWxpdHkpO1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXG5cdH1cblxuXHRvblNlZWtlZCgpIHtcblx0XHRjbGVhckludGVydmFsKHRoaXMuc2Vla2luZ0ludGVydmFsKTtcblx0XHR0aGlzLmlzU2Vla2luZyA9IGZhbHNlO1xuXG5cdFx0aWYgKHRoaXMud2FzUGF1c2VkQmVmb3JlU2Vlaykge1xuXHRcdFx0dGhpcy5wYXVzZSgpO1xuXHRcdH1cblxuXHRcdHRoaXMudHJpZ2dlcignc2Vla2VkJyk7XG5cdH1cblxuXHRlbWl0VGltZXVwZGF0ZSgpIHtcblx0XHRjbGVhckludGVydmFsKHRoaXMuc2Vla2luZ0ludGVydmFsKTtcblxuXHRcdHRoaXMuc2Vla2luZ0ludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuXHRcdFx0aWYodGhpcy5sYXN0U3RhdGUgPT09IFlULlBsYXllclN0YXRlLlBBVVNFRCkge1xuXHRcdFx0XHRjbGVhckludGVydmFsKHRoaXMuc2Vla2luZ0ludGVydmFsKTtcblx0XHRcdH0gZWxzZSBpZih0aGlzLmN1cnJlbnRUaW1lICE9PSB0aGlzLnRpbWVCZWZvcmVTZWVrKSB7XG5cdFx0XHRcdHRoaXMudHJpZ2dlcigndGltZXVwZGF0ZScpO1xuXHRcdFx0fVxuXHRcdH0sIDI1MClcblx0fVxuXHRzdGF0aWMgcGFyc2VVcmwodXJsKSB7XG5cdFx0bGV0IHJlc3VsdCA9IG51bGw7XG5cdFx0Y29uc3QgcmVnZXggPSBZb3V0dWJlLlVSTF9SRUdFWDtcblx0XHRjb25zdCBtYXRjaCA9IHVybC5tYXRjaChyZWdleCk7XG5cdFx0aWYodXJsLmxlbmd0aCA9PT0gMTEpIHtcblx0XHRcdHJlc3VsdCA9IHVybDtcblx0XHR9IGVsc2UgaWYobWF0Y2ggJiYgbWF0Y2hbMl0ubGVuZ3RoID09PSAxMSkge1xuXHRcdFx0cmVzdWx0ID0gbWF0Y2hbMl07XG5cdFx0fVxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cbn1cblxuWW91dHViZS5VUkxfUkVHRVggPSAvXi4qKHlvdXR1LmJlXFwvfHZcXC98dVxcL1xcd1xcL3xlbWJlZFxcL3x3YXRjaFxcP3Y9fFxcJnY9KShbXiNcXCZcXD9dKikuKi87XG5cbllvdXR1YmUuUVVBTElUWV9OQU1FUyA9IHtcblx0dGlueSA6ICcxNDBwJyxcblx0c21hbGwgOiAnMjQwcCcsXG5cdG1lZGl1bSA6ICczNjBwJyxcblx0bGFyZ2UgOiAnNDgwcCcsXG5cdGhkNzIwIDogJzcyMHAnLFxuXHRoZDEwODAgOiAnMTA4MHAnLFxuXHRoaWdocmVzIDogJ0hEJyxcblx0YXV0byA6ICfQkNCy0YLQvidcbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdZb3V0dWJlJywgWW91dHViZSk7XG5leHBvcnQgZGVmYXVsdCBZb3V0dWJlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2VudGl0eS9Zb3V0dWJlLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZGVmaW5lID0gcmVxdWlyZSgnZGVmaW5lLXByb3BlcnRpZXMnKTtcbnZhciBFUyA9IHJlcXVpcmUoJ2VzLWFic3RyYWN0L2VzNicpO1xuXG52YXIgaW1wbGVtZW50YXRpb24gPSByZXF1aXJlKCcuL2ltcGxlbWVudGF0aW9uJyk7XG52YXIgZ2V0UG9seWZpbGwgPSByZXF1aXJlKCcuL3BvbHlmaWxsJyk7XG52YXIgc2hpbSA9IHJlcXVpcmUoJy4vc2hpbScpO1xuXG52YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG5cbnZhciBwb2x5ZmlsbCA9IGdldFBvbHlmaWxsKCk7XG5cbnZhciBib3VuZEZpbmRTaGltID0gZnVuY3Rpb24gZmluZChhcnJheSwgcHJlZGljYXRlKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcblx0RVMuUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcnJheSk7XG5cdHZhciBhcmdzID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuXHRyZXR1cm4gcG9seWZpbGwuYXBwbHkoYXJyYXksIGFyZ3MpO1xufTtcblxuZGVmaW5lKGJvdW5kRmluZFNoaW0sIHtcblx0Z2V0UG9seWZpbGw6IGdldFBvbHlmaWxsLFxuXHRpbXBsZW1lbnRhdGlvbjogaW1wbGVtZW50YXRpb24sXG5cdHNoaW06IHNoaW1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJvdW5kRmluZFNoaW07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYXJyYXkucHJvdG90eXBlLmZpbmQvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIGtleXMgPSByZXF1aXJlKCdvYmplY3Qta2V5cycpO1xudmFyIGZvcmVhY2ggPSByZXF1aXJlKCdmb3JlYWNoJyk7XG52YXIgaGFzU3ltYm9scyA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIFN5bWJvbCgpID09PSAnc3ltYm9sJztcblxudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxudmFyIGlzRnVuY3Rpb24gPSBmdW5jdGlvbiAoZm4pIHtcblx0cmV0dXJuIHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJyAmJiB0b1N0ci5jYWxsKGZuKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbn07XG5cbnZhciBhcmVQcm9wZXJ0eURlc2NyaXB0b3JzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgb2JqID0ge307XG5cdHRyeSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgJ3gnLCB7IGVudW1lcmFibGU6IGZhbHNlLCB2YWx1ZTogb2JqIH0pO1xuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycywgbm8tcmVzdHJpY3RlZC1zeW50YXggKi9cbiAgICAgICAgZm9yICh2YXIgXyBpbiBvYmopIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMsIG5vLXJlc3RyaWN0ZWQtc3ludGF4ICovXG5cdFx0cmV0dXJuIG9iai54ID09PSBvYmo7XG5cdH0gY2F0Y2ggKGUpIHsgLyogdGhpcyBpcyBJRSA4LiAqL1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufTtcbnZhciBzdXBwb3J0c0Rlc2NyaXB0b3JzID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIGFyZVByb3BlcnR5RGVzY3JpcHRvcnNTdXBwb3J0ZWQoKTtcblxudmFyIGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZSwgdmFsdWUsIHByZWRpY2F0ZSkge1xuXHRpZiAobmFtZSBpbiBvYmplY3QgJiYgKCFpc0Z1bmN0aW9uKHByZWRpY2F0ZSkgfHwgIXByZWRpY2F0ZSgpKSkge1xuXHRcdHJldHVybjtcblx0fVxuXHRpZiAoc3VwcG9ydHNEZXNjcmlwdG9ycykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmplY3QsIG5hbWUsIHtcblx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0XHRcdGVudW1lcmFibGU6IGZhbHNlLFxuXHRcdFx0dmFsdWU6IHZhbHVlLFxuXHRcdFx0d3JpdGFibGU6IHRydWVcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHRvYmplY3RbbmFtZV0gPSB2YWx1ZTtcblx0fVxufTtcblxudmFyIGRlZmluZVByb3BlcnRpZXMgPSBmdW5jdGlvbiAob2JqZWN0LCBtYXApIHtcblx0dmFyIHByZWRpY2F0ZXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IHt9O1xuXHR2YXIgcHJvcHMgPSBrZXlzKG1hcCk7XG5cdGlmIChoYXNTeW1ib2xzKSB7XG5cdFx0cHJvcHMgPSBwcm9wcy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhtYXApKTtcblx0fVxuXHRmb3JlYWNoKHByb3BzLCBmdW5jdGlvbiAobmFtZSkge1xuXHRcdGRlZmluZVByb3BlcnR5KG9iamVjdCwgbmFtZSwgbWFwW25hbWVdLCBwcmVkaWNhdGVzW25hbWVdKTtcblx0fSk7XG59O1xuXG5kZWZpbmVQcm9wZXJ0aWVzLnN1cHBvcnRzRGVzY3JpcHRvcnMgPSAhIXN1cHBvcnRzRGVzY3JpcHRvcnM7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVmaW5lUHJvcGVydGllcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kZWZpbmUtcHJvcGVydGllcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBtb2RpZmllZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9lcy1zaGltcy9lczUtc2hpbVxudmFyIGhhcyA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xudmFyIGlzQXJncyA9IHJlcXVpcmUoJy4vaXNBcmd1bWVudHMnKTtcbnZhciBpc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xudmFyIGhhc0RvbnRFbnVtQnVnID0gIWlzRW51bWVyYWJsZS5jYWxsKHsgdG9TdHJpbmc6IG51bGwgfSwgJ3RvU3RyaW5nJyk7XG52YXIgaGFzUHJvdG9FbnVtQnVnID0gaXNFbnVtZXJhYmxlLmNhbGwoZnVuY3Rpb24gKCkge30sICdwcm90b3R5cGUnKTtcbnZhciBkb250RW51bXMgPSBbXG5cdCd0b1N0cmluZycsXG5cdCd0b0xvY2FsZVN0cmluZycsXG5cdCd2YWx1ZU9mJyxcblx0J2hhc093blByb3BlcnR5Jyxcblx0J2lzUHJvdG90eXBlT2YnLFxuXHQncHJvcGVydHlJc0VudW1lcmFibGUnLFxuXHQnY29uc3RydWN0b3InXG5dO1xudmFyIGVxdWFsc0NvbnN0cnVjdG9yUHJvdG90eXBlID0gZnVuY3Rpb24gKG8pIHtcblx0dmFyIGN0b3IgPSBvLmNvbnN0cnVjdG9yO1xuXHRyZXR1cm4gY3RvciAmJiBjdG9yLnByb3RvdHlwZSA9PT0gbztcbn07XG52YXIgZXhjbHVkZWRLZXlzID0ge1xuXHQkY29uc29sZTogdHJ1ZSxcblx0JGV4dGVybmFsOiB0cnVlLFxuXHQkZnJhbWU6IHRydWUsXG5cdCRmcmFtZUVsZW1lbnQ6IHRydWUsXG5cdCRmcmFtZXM6IHRydWUsXG5cdCRpbm5lckhlaWdodDogdHJ1ZSxcblx0JGlubmVyV2lkdGg6IHRydWUsXG5cdCRvdXRlckhlaWdodDogdHJ1ZSxcblx0JG91dGVyV2lkdGg6IHRydWUsXG5cdCRwYWdlWE9mZnNldDogdHJ1ZSxcblx0JHBhZ2VZT2Zmc2V0OiB0cnVlLFxuXHQkcGFyZW50OiB0cnVlLFxuXHQkc2Nyb2xsTGVmdDogdHJ1ZSxcblx0JHNjcm9sbFRvcDogdHJ1ZSxcblx0JHNjcm9sbFg6IHRydWUsXG5cdCRzY3JvbGxZOiB0cnVlLFxuXHQkc2VsZjogdHJ1ZSxcblx0JHdlYmtpdEluZGV4ZWREQjogdHJ1ZSxcblx0JHdlYmtpdFN0b3JhZ2VJbmZvOiB0cnVlLFxuXHQkd2luZG93OiB0cnVlXG59O1xudmFyIGhhc0F1dG9tYXRpb25FcXVhbGl0eUJ1ZyA9IChmdW5jdGlvbiAoKSB7XG5cdC8qIGdsb2JhbCB3aW5kb3cgKi9cblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7IHJldHVybiBmYWxzZTsgfVxuXHRmb3IgKHZhciBrIGluIHdpbmRvdykge1xuXHRcdHRyeSB7XG5cdFx0XHRpZiAoIWV4Y2x1ZGVkS2V5c1snJCcgKyBrXSAmJiBoYXMuY2FsbCh3aW5kb3csIGspICYmIHdpbmRvd1trXSAhPT0gbnVsbCAmJiB0eXBlb2Ygd2luZG93W2tdID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGVxdWFsc0NvbnN0cnVjdG9yUHJvdG90eXBlKHdpbmRvd1trXSk7XG5cdFx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gZmFsc2U7XG59KCkpO1xudmFyIGVxdWFsc0NvbnN0cnVjdG9yUHJvdG90eXBlSWZOb3RCdWdneSA9IGZ1bmN0aW9uIChvKSB7XG5cdC8qIGdsb2JhbCB3aW5kb3cgKi9cblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8ICFoYXNBdXRvbWF0aW9uRXF1YWxpdHlCdWcpIHtcblx0XHRyZXR1cm4gZXF1YWxzQ29uc3RydWN0b3JQcm90b3R5cGUobyk7XG5cdH1cblx0dHJ5IHtcblx0XHRyZXR1cm4gZXF1YWxzQ29uc3RydWN0b3JQcm90b3R5cGUobyk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn07XG5cbnZhciBrZXlzU2hpbSA9IGZ1bmN0aW9uIGtleXMob2JqZWN0KSB7XG5cdHZhciBpc09iamVjdCA9IG9iamVjdCAhPT0gbnVsbCAmJiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0Jztcblx0dmFyIGlzRnVuY3Rpb24gPSB0b1N0ci5jYWxsKG9iamVjdCkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG5cdHZhciBpc0FyZ3VtZW50cyA9IGlzQXJncyhvYmplY3QpO1xuXHR2YXIgaXNTdHJpbmcgPSBpc09iamVjdCAmJiB0b1N0ci5jYWxsKG9iamVjdCkgPT09ICdbb2JqZWN0IFN0cmluZ10nO1xuXHR2YXIgdGhlS2V5cyA9IFtdO1xuXG5cdGlmICghaXNPYmplY3QgJiYgIWlzRnVuY3Rpb24gJiYgIWlzQXJndW1lbnRzKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmtleXMgY2FsbGVkIG9uIGEgbm9uLW9iamVjdCcpO1xuXHR9XG5cblx0dmFyIHNraXBQcm90byA9IGhhc1Byb3RvRW51bUJ1ZyAmJiBpc0Z1bmN0aW9uO1xuXHRpZiAoaXNTdHJpbmcgJiYgb2JqZWN0Lmxlbmd0aCA+IDAgJiYgIWhhcy5jYWxsKG9iamVjdCwgMCkpIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG9iamVjdC5sZW5ndGg7ICsraSkge1xuXHRcdFx0dGhlS2V5cy5wdXNoKFN0cmluZyhpKSk7XG5cdFx0fVxuXHR9XG5cblx0aWYgKGlzQXJndW1lbnRzICYmIG9iamVjdC5sZW5ndGggPiAwKSB7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBvYmplY3QubGVuZ3RoOyArK2opIHtcblx0XHRcdHRoZUtleXMucHVzaChTdHJpbmcoaikpO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRmb3IgKHZhciBuYW1lIGluIG9iamVjdCkge1xuXHRcdFx0aWYgKCEoc2tpcFByb3RvICYmIG5hbWUgPT09ICdwcm90b3R5cGUnKSAmJiBoYXMuY2FsbChvYmplY3QsIG5hbWUpKSB7XG5cdFx0XHRcdHRoZUtleXMucHVzaChTdHJpbmcobmFtZSkpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGlmIChoYXNEb250RW51bUJ1Zykge1xuXHRcdHZhciBza2lwQ29uc3RydWN0b3IgPSBlcXVhbHNDb25zdHJ1Y3RvclByb3RvdHlwZUlmTm90QnVnZ3kob2JqZWN0KTtcblxuXHRcdGZvciAodmFyIGsgPSAwOyBrIDwgZG9udEVudW1zLmxlbmd0aDsgKytrKSB7XG5cdFx0XHRpZiAoIShza2lwQ29uc3RydWN0b3IgJiYgZG9udEVudW1zW2tdID09PSAnY29uc3RydWN0b3InKSAmJiBoYXMuY2FsbChvYmplY3QsIGRvbnRFbnVtc1trXSkpIHtcblx0XHRcdFx0dGhlS2V5cy5wdXNoKGRvbnRFbnVtc1trXSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJldHVybiB0aGVLZXlzO1xufTtcblxua2V5c1NoaW0uc2hpbSA9IGZ1bmN0aW9uIHNoaW1PYmplY3RLZXlzKCkge1xuXHRpZiAoT2JqZWN0LmtleXMpIHtcblx0XHR2YXIga2V5c1dvcmtzV2l0aEFyZ3VtZW50cyA9IChmdW5jdGlvbiAoKSB7XG5cdFx0XHQvLyBTYWZhcmkgNS4wIGJ1Z1xuXHRcdFx0cmV0dXJuIChPYmplY3Qua2V5cyhhcmd1bWVudHMpIHx8ICcnKS5sZW5ndGggPT09IDI7XG5cdFx0fSgxLCAyKSk7XG5cdFx0aWYgKCFrZXlzV29ya3NXaXRoQXJndW1lbnRzKSB7XG5cdFx0XHR2YXIgb3JpZ2luYWxLZXlzID0gT2JqZWN0LmtleXM7XG5cdFx0XHRPYmplY3Qua2V5cyA9IGZ1bmN0aW9uIGtleXMob2JqZWN0KSB7XG5cdFx0XHRcdGlmIChpc0FyZ3Mob2JqZWN0KSkge1xuXHRcdFx0XHRcdHJldHVybiBvcmlnaW5hbEtleXMoc2xpY2UuY2FsbChvYmplY3QpKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gb3JpZ2luYWxLZXlzKG9iamVjdCk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdE9iamVjdC5rZXlzID0ga2V5c1NoaW07XG5cdH1cblx0cmV0dXJuIE9iamVjdC5rZXlzIHx8IGtleXNTaGltO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBrZXlzU2hpbTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9vYmplY3Qta2V5cy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQXJndW1lbnRzKHZhbHVlKSB7XG5cdHZhciBzdHIgPSB0b1N0ci5jYWxsKHZhbHVlKTtcblx0dmFyIGlzQXJncyA9IHN0ciA9PT0gJ1tvYmplY3QgQXJndW1lbnRzXSc7XG5cdGlmICghaXNBcmdzKSB7XG5cdFx0aXNBcmdzID0gc3RyICE9PSAnW29iamVjdCBBcnJheV0nICYmXG5cdFx0XHR2YWx1ZSAhPT0gbnVsbCAmJlxuXHRcdFx0dHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJlxuXHRcdFx0dHlwZW9mIHZhbHVlLmxlbmd0aCA9PT0gJ251bWJlcicgJiZcblx0XHRcdHZhbHVlLmxlbmd0aCA+PSAwICYmXG5cdFx0XHR0b1N0ci5jYWxsKHZhbHVlLmNhbGxlZSkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG5cdH1cblx0cmV0dXJuIGlzQXJncztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vb2JqZWN0LWtleXMvaXNBcmd1bWVudHMuanNcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxudmFyIGhhc093biA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGZvckVhY2ggKG9iaiwgZm4sIGN0eCkge1xuICAgIGlmICh0b1N0cmluZy5jYWxsKGZuKSAhPT0gJ1tvYmplY3QgRnVuY3Rpb25dJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdpdGVyYXRvciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcbiAgICB9XG4gICAgdmFyIGwgPSBvYmoubGVuZ3RoO1xuICAgIGlmIChsID09PSArbCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgZm4uY2FsbChjdHgsIG9ialtpXSwgaSwgb2JqKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAodmFyIGsgaW4gb2JqKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwob2JqLCBrKSkge1xuICAgICAgICAgICAgICAgIGZuLmNhbGwoY3R4LCBvYmpba10sIGssIG9iaik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZm9yZWFjaC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIGhhc1N5bWJvbHMgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09ICdzeW1ib2wnO1xudmFyIHN5bWJvbFRvU3RyID0gaGFzU3ltYm9scyA/IFN5bWJvbC5wcm90b3R5cGUudG9TdHJpbmcgOiB0b1N0cjtcblxudmFyICRpc05hTiA9IHJlcXVpcmUoJy4vaGVscGVycy9pc05hTicpO1xudmFyICRpc0Zpbml0ZSA9IHJlcXVpcmUoJy4vaGVscGVycy9pc0Zpbml0ZScpO1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiB8fCBNYXRoLnBvdygyLCA1MykgLSAxO1xuXG52YXIgYXNzaWduID0gcmVxdWlyZSgnLi9oZWxwZXJzL2Fzc2lnbicpO1xudmFyIHNpZ24gPSByZXF1aXJlKCcuL2hlbHBlcnMvc2lnbicpO1xudmFyIG1vZCA9IHJlcXVpcmUoJy4vaGVscGVycy9tb2QnKTtcbnZhciBpc1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vaGVscGVycy9pc1ByaW1pdGl2ZScpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnZXMtdG8tcHJpbWl0aXZlL2VzNicpO1xudmFyIHBhcnNlSW50ZWdlciA9IHBhcnNlSW50O1xudmFyIGJpbmQgPSByZXF1aXJlKCdmdW5jdGlvbi1iaW5kJyk7XG52YXIgc3RyU2xpY2UgPSBiaW5kLmNhbGwoRnVuY3Rpb24uY2FsbCwgU3RyaW5nLnByb3RvdHlwZS5zbGljZSk7XG52YXIgaXNCaW5hcnkgPSBiaW5kLmNhbGwoRnVuY3Rpb24uY2FsbCwgUmVnRXhwLnByb3RvdHlwZS50ZXN0LCAvXjBiWzAxXSskL2kpO1xudmFyIGlzT2N0YWwgPSBiaW5kLmNhbGwoRnVuY3Rpb24uY2FsbCwgUmVnRXhwLnByb3RvdHlwZS50ZXN0LCAvXjBvWzAtN10rJC9pKTtcbnZhciBub25XUyA9IFsnXFx1MDA4NScsICdcXHUyMDBiJywgJ1xcdWZmZmUnXS5qb2luKCcnKTtcbnZhciBub25XU3JlZ2V4ID0gbmV3IFJlZ0V4cCgnWycgKyBub25XUyArICddJywgJ2cnKTtcbnZhciBoYXNOb25XUyA9IGJpbmQuY2FsbChGdW5jdGlvbi5jYWxsLCBSZWdFeHAucHJvdG90eXBlLnRlc3QsIG5vbldTcmVnZXgpO1xudmFyIGludmFsaWRIZXhMaXRlcmFsID0gL15bLStdMHhbMC05YS1mXSskL2k7XG52YXIgaXNJbnZhbGlkSGV4TGl0ZXJhbCA9IGJpbmQuY2FsbChGdW5jdGlvbi5jYWxsLCBSZWdFeHAucHJvdG90eXBlLnRlc3QsIGludmFsaWRIZXhMaXRlcmFsKTtcblxuLy8gd2hpdGVzcGFjZSBmcm9tOiBodHRwOi8vZXM1LmdpdGh1Yi5pby8jeDE1LjUuNC4yMFxuLy8gaW1wbGVtZW50YXRpb24gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZXMtc2hpbXMvZXM1LXNoaW0vYmxvYi92My40LjAvZXM1LXNoaW0uanMjTDEzMDQtTDEzMjRcbnZhciB3cyA9IFtcblx0J1xceDA5XFx4MEFcXHgwQlxceDBDXFx4MERcXHgyMFxceEEwXFx1MTY4MFxcdTE4MEVcXHUyMDAwXFx1MjAwMVxcdTIwMDJcXHUyMDAzJyxcblx0J1xcdTIwMDRcXHUyMDA1XFx1MjAwNlxcdTIwMDdcXHUyMDA4XFx1MjAwOVxcdTIwMEFcXHUyMDJGXFx1MjA1RlxcdTMwMDBcXHUyMDI4Jyxcblx0J1xcdTIwMjlcXHVGRUZGJ1xuXS5qb2luKCcnKTtcbnZhciB0cmltUmVnZXggPSBuZXcgUmVnRXhwKCcoXlsnICsgd3MgKyAnXSspfChbJyArIHdzICsgJ10rJCknLCAnZycpO1xudmFyIHJlcGxhY2UgPSBiaW5kLmNhbGwoRnVuY3Rpb24uY2FsbCwgU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlKTtcbnZhciB0cmltID0gZnVuY3Rpb24gKHZhbHVlKSB7XG5cdHJldHVybiByZXBsYWNlKHZhbHVlLCB0cmltUmVnZXgsICcnKTtcbn07XG5cbnZhciBFUzUgPSByZXF1aXJlKCcuL2VzNScpO1xuXG52YXIgaGFzUmVnRXhwTWF0Y2hlciA9IHJlcXVpcmUoJ2lzLXJlZ2V4Jyk7XG5cbi8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1hYnN0cmFjdC1vcGVyYXRpb25zXG52YXIgRVM2ID0gYXNzaWduKGFzc2lnbih7fSwgRVM1KSwge1xuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1jYWxsLWYtdi1hcmdzXG5cdENhbGw6IGZ1bmN0aW9uIENhbGwoRiwgVikge1xuXHRcdHZhciBhcmdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgPyBhcmd1bWVudHNbMl0gOiBbXTtcblx0XHRpZiAoIXRoaXMuSXNDYWxsYWJsZShGKSkge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihGICsgJyBpcyBub3QgYSBmdW5jdGlvbicpO1xuXHRcdH1cblx0XHRyZXR1cm4gRi5hcHBseShWLCBhcmdzKTtcblx0fSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG9wcmltaXRpdmVcblx0VG9QcmltaXRpdmU6IHRvUHJpbWl0aXZlLFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b2Jvb2xlYW5cblx0Ly8gVG9Cb29sZWFuOiBFUzUuVG9Cb29sZWFuLFxuXG5cdC8vIGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy10b251bWJlclxuXHRUb051bWJlcjogZnVuY3Rpb24gVG9OdW1iZXIoYXJndW1lbnQpIHtcblx0XHR2YXIgdmFsdWUgPSBpc1ByaW1pdGl2ZShhcmd1bWVudCkgPyBhcmd1bWVudCA6IHRvUHJpbWl0aXZlKGFyZ3VtZW50LCAnbnVtYmVyJyk7XG5cdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N5bWJvbCcpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IGEgU3ltYm9sIHZhbHVlIHRvIGEgbnVtYmVyJyk7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRpZiAoaXNCaW5hcnkodmFsdWUpKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLlRvTnVtYmVyKHBhcnNlSW50ZWdlcihzdHJTbGljZSh2YWx1ZSwgMiksIDIpKTtcblx0XHRcdH0gZWxzZSBpZiAoaXNPY3RhbCh2YWx1ZSkpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuVG9OdW1iZXIocGFyc2VJbnRlZ2VyKHN0clNsaWNlKHZhbHVlLCAyKSwgOCkpO1xuXHRcdFx0fSBlbHNlIGlmIChoYXNOb25XUyh2YWx1ZSkgfHwgaXNJbnZhbGlkSGV4TGl0ZXJhbCh2YWx1ZSkpIHtcblx0XHRcdFx0cmV0dXJuIE5hTjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciB0cmltbWVkID0gdHJpbSh2YWx1ZSk7XG5cdFx0XHRcdGlmICh0cmltbWVkICE9PSB2YWx1ZSkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLlRvTnVtYmVyKHRyaW1tZWQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBOdW1iZXIodmFsdWUpO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b2ludGVnZXJcblx0Ly8gVG9JbnRlZ2VyOiBFUzUuVG9OdW1iZXIsXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvaW50MzJcblx0Ly8gVG9JbnQzMjogRVM1LlRvSW50MzIsXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvdWludDMyXG5cdC8vIFRvVWludDMyOiBFUzUuVG9VaW50MzIsXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvaW50MTZcblx0VG9JbnQxNjogZnVuY3Rpb24gVG9JbnQxNihhcmd1bWVudCkge1xuXHRcdHZhciBpbnQxNmJpdCA9IHRoaXMuVG9VaW50MTYoYXJndW1lbnQpO1xuXHRcdHJldHVybiBpbnQxNmJpdCA+PSAweDgwMDAgPyBpbnQxNmJpdCAtIDB4MTAwMDAgOiBpbnQxNmJpdDtcblx0fSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG91aW50MTZcblx0Ly8gVG9VaW50MTY6IEVTNS5Ub1VpbnQxNixcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG9pbnQ4XG5cdFRvSW50ODogZnVuY3Rpb24gVG9JbnQ4KGFyZ3VtZW50KSB7XG5cdFx0dmFyIGludDhiaXQgPSB0aGlzLlRvVWludDgoYXJndW1lbnQpO1xuXHRcdHJldHVybiBpbnQ4Yml0ID49IDB4ODAgPyBpbnQ4Yml0IC0gMHgxMDAgOiBpbnQ4Yml0O1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b3VpbnQ4XG5cdFRvVWludDg6IGZ1bmN0aW9uIFRvVWludDgoYXJndW1lbnQpIHtcblx0XHR2YXIgbnVtYmVyID0gdGhpcy5Ub051bWJlcihhcmd1bWVudCk7XG5cdFx0aWYgKCRpc05hTihudW1iZXIpIHx8IG51bWJlciA9PT0gMCB8fCAhJGlzRmluaXRlKG51bWJlcikpIHsgcmV0dXJuIDA7IH1cblx0XHR2YXIgcG9zSW50ID0gc2lnbihudW1iZXIpICogTWF0aC5mbG9vcihNYXRoLmFicyhudW1iZXIpKTtcblx0XHRyZXR1cm4gbW9kKHBvc0ludCwgMHgxMDApO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b3VpbnQ4Y2xhbXBcblx0VG9VaW50OENsYW1wOiBmdW5jdGlvbiBUb1VpbnQ4Q2xhbXAoYXJndW1lbnQpIHtcblx0XHR2YXIgbnVtYmVyID0gdGhpcy5Ub051bWJlcihhcmd1bWVudCk7XG5cdFx0aWYgKCRpc05hTihudW1iZXIpIHx8IG51bWJlciA8PSAwKSB7IHJldHVybiAwOyB9XG5cdFx0aWYgKG51bWJlciA+PSAweEZGKSB7IHJldHVybiAweEZGOyB9XG5cdFx0dmFyIGYgPSBNYXRoLmZsb29yKGFyZ3VtZW50KTtcblx0XHRpZiAoZiArIDAuNSA8IG51bWJlcikgeyByZXR1cm4gZiArIDE7IH1cblx0XHRpZiAobnVtYmVyIDwgZiArIDAuNSkgeyByZXR1cm4gZjsgfVxuXHRcdGlmIChmICUgMiAhPT0gMCkgeyByZXR1cm4gZiArIDE7IH1cblx0XHRyZXR1cm4gZjtcblx0fSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG9zdHJpbmdcblx0VG9TdHJpbmc6IGZ1bmN0aW9uIFRvU3RyaW5nKGFyZ3VtZW50KSB7XG5cdFx0aWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N5bWJvbCcpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IGEgU3ltYm9sIHZhbHVlIHRvIGEgc3RyaW5nJyk7XG5cdFx0fVxuXHRcdHJldHVybiBTdHJpbmcoYXJndW1lbnQpO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b29iamVjdFxuXHRUb09iamVjdDogZnVuY3Rpb24gVG9PYmplY3QodmFsdWUpIHtcblx0XHR0aGlzLlJlcXVpcmVPYmplY3RDb2VyY2libGUodmFsdWUpO1xuXHRcdHJldHVybiBPYmplY3QodmFsdWUpO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b3Byb3BlcnR5a2V5XG5cdFRvUHJvcGVydHlLZXk6IGZ1bmN0aW9uIFRvUHJvcGVydHlLZXkoYXJndW1lbnQpIHtcblx0XHR2YXIga2V5ID0gdGhpcy5Ub1ByaW1pdGl2ZShhcmd1bWVudCwgU3RyaW5nKTtcblx0XHRyZXR1cm4gdHlwZW9mIGtleSA9PT0gJ3N5bWJvbCcgPyBzeW1ib2xUb1N0ci5jYWxsKGtleSkgOiB0aGlzLlRvU3RyaW5nKGtleSk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvbGVuZ3RoXG5cdFRvTGVuZ3RoOiBmdW5jdGlvbiBUb0xlbmd0aChhcmd1bWVudCkge1xuXHRcdHZhciBsZW4gPSB0aGlzLlRvSW50ZWdlcihhcmd1bWVudCk7XG5cdFx0aWYgKGxlbiA8PSAwKSB7IHJldHVybiAwOyB9IC8vIGluY2x1ZGVzIGNvbnZlcnRpbmcgLTAgdG8gKzBcblx0XHRpZiAobGVuID4gTUFYX1NBRkVfSU5URUdFUikgeyByZXR1cm4gTUFYX1NBRkVfSU5URUdFUjsgfVxuXHRcdHJldHVybiBsZW47XG5cdH0sXG5cblx0Ly8gaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWNhbm9uaWNhbG51bWVyaWNpbmRleHN0cmluZ1xuXHRDYW5vbmljYWxOdW1lcmljSW5kZXhTdHJpbmc6IGZ1bmN0aW9uIENhbm9uaWNhbE51bWVyaWNJbmRleFN0cmluZyhhcmd1bWVudCkge1xuXHRcdGlmICh0b1N0ci5jYWxsKGFyZ3VtZW50KSAhPT0gJ1tvYmplY3QgU3RyaW5nXScpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ211c3QgYmUgYSBzdHJpbmcnKTtcblx0XHR9XG5cdFx0aWYgKGFyZ3VtZW50ID09PSAnLTAnKSB7IHJldHVybiAtMDsgfVxuXHRcdHZhciBuID0gdGhpcy5Ub051bWJlcihhcmd1bWVudCk7XG5cdFx0aWYgKHRoaXMuU2FtZVZhbHVlKHRoaXMuVG9TdHJpbmcobiksIGFyZ3VtZW50KSkgeyByZXR1cm4gbjsgfVxuXHRcdHJldHVybiB2b2lkIDA7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXJlcXVpcmVvYmplY3Rjb2VyY2libGVcblx0UmVxdWlyZU9iamVjdENvZXJjaWJsZTogRVM1LkNoZWNrT2JqZWN0Q29lcmNpYmxlLFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1pc2FycmF5XG5cdElzQXJyYXk6IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gSXNBcnJheShhcmd1bWVudCkge1xuXHRcdHJldHVybiB0b1N0ci5jYWxsKGFyZ3VtZW50KSA9PT0gJ1tvYmplY3QgQXJyYXldJztcblx0fSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtaXNjYWxsYWJsZVxuXHQvLyBJc0NhbGxhYmxlOiBFUzUuSXNDYWxsYWJsZSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtaXNjb25zdHJ1Y3RvclxuXHRJc0NvbnN0cnVjdG9yOiBmdW5jdGlvbiBJc0NvbnN0cnVjdG9yKGFyZ3VtZW50KSB7XG5cdFx0cmV0dXJuIHR5cGVvZiBhcmd1bWVudCA9PT0gJ2Z1bmN0aW9uJyAmJiAhIWFyZ3VtZW50LnByb3RvdHlwZTsgLy8gdW5mb3J0dW5hdGVseSB0aGVyZSdzIG5vIHdheSB0byB0cnVseSBjaGVjayB0aGlzIHdpdGhvdXQgdHJ5L2NhdGNoIGBuZXcgYXJndW1lbnRgXG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWlzZXh0ZW5zaWJsZS1vXG5cdElzRXh0ZW5zaWJsZTogZnVuY3Rpb24gSXNFeHRlbnNpYmxlKG9iaikge1xuXHRcdGlmICghT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKSB7IHJldHVybiB0cnVlOyB9XG5cdFx0aWYgKGlzUHJpbWl0aXZlKG9iaikpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0cmV0dXJuIE9iamVjdC5pc0V4dGVuc2libGUob2JqKTtcblx0fSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtaXNpbnRlZ2VyXG5cdElzSW50ZWdlcjogZnVuY3Rpb24gSXNJbnRlZ2VyKGFyZ3VtZW50KSB7XG5cdFx0aWYgKHR5cGVvZiBhcmd1bWVudCAhPT0gJ251bWJlcicgfHwgJGlzTmFOKGFyZ3VtZW50KSB8fCAhJGlzRmluaXRlKGFyZ3VtZW50KSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHR2YXIgYWJzID0gTWF0aC5hYnMoYXJndW1lbnQpO1xuXHRcdHJldHVybiBNYXRoLmZsb29yKGFicykgPT09IGFicztcblx0fSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtaXNwcm9wZXJ0eWtleVxuXHRJc1Byb3BlcnR5S2V5OiBmdW5jdGlvbiBJc1Byb3BlcnR5S2V5KGFyZ3VtZW50KSB7XG5cdFx0cmV0dXJuIHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIGFyZ3VtZW50ID09PSAnc3ltYm9sJztcblx0fSxcblxuXHQvLyBodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtaXNyZWdleHBcblx0SXNSZWdFeHA6IGZ1bmN0aW9uIElzUmVnRXhwKGFyZ3VtZW50KSB7XG5cdFx0aWYgKCFhcmd1bWVudCB8fCB0eXBlb2YgYXJndW1lbnQgIT09ICdvYmplY3QnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGlmIChoYXNTeW1ib2xzKSB7XG5cdFx0XHR2YXIgaXNSZWdFeHAgPSBhcmd1bWVudFtTeW1ib2wubWF0Y2hdO1xuXHRcdFx0aWYgKHR5cGVvZiBpc1JlZ0V4cCAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0cmV0dXJuIEVTNS5Ub0Jvb2xlYW4oaXNSZWdFeHApO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gaGFzUmVnRXhwTWF0Y2hlcihhcmd1bWVudCk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXNhbWV2YWx1ZVxuXHQvLyBTYW1lVmFsdWU6IEVTNS5TYW1lVmFsdWUsXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXNhbWV2YWx1ZXplcm9cblx0U2FtZVZhbHVlWmVybzogZnVuY3Rpb24gU2FtZVZhbHVlWmVybyh4LCB5KSB7XG5cdFx0cmV0dXJuICh4ID09PSB5KSB8fCAoJGlzTmFOKHgpICYmICRpc05hTih5KSk7XG5cdH0sXG5cblx0LyoqXG5cdCAqIDcuMy4yIEdldFYgKFYsIFApXG5cdCAqIDEuIEFzc2VydDogSXNQcm9wZXJ0eUtleShQKSBpcyB0cnVlLlxuXHQgKiAyLiBMZXQgTyBiZSBUb09iamVjdChWKS5cblx0ICogMy4gUmV0dXJuSWZBYnJ1cHQoTykuXG5cdCAqIDQuIFJldHVybiBPLltbR2V0XV0oUCwgVikuXG5cdCAqL1xuXHRHZXRWOiBmdW5jdGlvbiBHZXRWKFYsIFApIHtcblx0XHQvLyA3LjMuMi4xXG5cdFx0aWYgKCF0aGlzLklzUHJvcGVydHlLZXkoUCkpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IElzUHJvcGVydHlLZXkoUCkgaXMgbm90IHRydWUnKTtcblx0XHR9XG5cblx0XHQvLyA3LjMuMi4yLTNcblx0XHR2YXIgTyA9IHRoaXMuVG9PYmplY3QoVik7XG5cblx0XHQvLyA3LjMuMi40XG5cdFx0cmV0dXJuIE9bUF07XG5cdH0sXG5cblx0LyoqXG5cdCAqIDcuMy45IC0gaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWdldG1ldGhvZFxuXHQgKiAxLiBBc3NlcnQ6IElzUHJvcGVydHlLZXkoUCkgaXMgdHJ1ZS5cblx0ICogMi4gTGV0IGZ1bmMgYmUgR2V0VihPLCBQKS5cblx0ICogMy4gUmV0dXJuSWZBYnJ1cHQoZnVuYykuXG5cdCAqIDQuIElmIGZ1bmMgaXMgZWl0aGVyIHVuZGVmaW5lZCBvciBudWxsLCByZXR1cm4gdW5kZWZpbmVkLlxuXHQgKiA1LiBJZiBJc0NhbGxhYmxlKGZ1bmMpIGlzIGZhbHNlLCB0aHJvdyBhIFR5cGVFcnJvciBleGNlcHRpb24uXG5cdCAqIDYuIFJldHVybiBmdW5jLlxuXHQgKi9cblx0R2V0TWV0aG9kOiBmdW5jdGlvbiBHZXRNZXRob2QoTywgUCkge1xuXHRcdC8vIDcuMy45LjFcblx0XHRpZiAoIXRoaXMuSXNQcm9wZXJ0eUtleShQKSkge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogSXNQcm9wZXJ0eUtleShQKSBpcyBub3QgdHJ1ZScpO1xuXHRcdH1cblxuXHRcdC8vIDcuMy45LjJcblx0XHR2YXIgZnVuYyA9IHRoaXMuR2V0VihPLCBQKTtcblxuXHRcdC8vIDcuMy45LjRcblx0XHRpZiAoZnVuYyA9PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXHRcdH1cblxuXHRcdC8vIDcuMy45LjVcblx0XHRpZiAoIXRoaXMuSXNDYWxsYWJsZShmdW5jKSkge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihQICsgJ2lzIG5vdCBhIGZ1bmN0aW9uJyk7XG5cdFx0fVxuXG5cdFx0Ly8gNy4zLjkuNlxuXHRcdHJldHVybiBmdW5jO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiA3LjMuMSBHZXQgKE8sIFApIC0gaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWdldC1vLXBcblx0ICogMS4gQXNzZXJ0OiBUeXBlKE8pIGlzIE9iamVjdC5cblx0ICogMi4gQXNzZXJ0OiBJc1Byb3BlcnR5S2V5KFApIGlzIHRydWUuXG5cdCAqIDMuIFJldHVybiBPLltbR2V0XV0oUCwgTykuXG5cdCAqL1xuXHRHZXQ6IGZ1bmN0aW9uIEdldChPLCBQKSB7XG5cdFx0Ly8gNy4zLjEuMVxuXHRcdGlmICh0aGlzLlR5cGUoTykgIT09ICdPYmplY3QnKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBUeXBlKE8pIGlzIG5vdCBPYmplY3QnKTtcblx0XHR9XG5cdFx0Ly8gNy4zLjEuMlxuXHRcdGlmICghdGhpcy5Jc1Byb3BlcnR5S2V5KFApKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBJc1Byb3BlcnR5S2V5KFApIGlzIG5vdCB0cnVlJyk7XG5cdFx0fVxuXHRcdC8vIDcuMy4xLjNcblx0XHRyZXR1cm4gT1tQXTtcblx0fSxcblxuXHRUeXBlOiBmdW5jdGlvbiBUeXBlKHgpIHtcblx0XHRpZiAodHlwZW9mIHggPT09ICdzeW1ib2wnKSB7XG5cdFx0XHRyZXR1cm4gJ1N5bWJvbCc7XG5cdFx0fVxuXHRcdHJldHVybiBFUzUuVHlwZSh4KTtcblx0fSxcblxuXHQvLyBodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtc3BlY2llc2NvbnN0cnVjdG9yXG5cdFNwZWNpZXNDb25zdHJ1Y3RvcjogZnVuY3Rpb24gU3BlY2llc0NvbnN0cnVjdG9yKE8sIGRlZmF1bHRDb25zdHJ1Y3Rvcikge1xuXHRcdGlmICh0aGlzLlR5cGUoTykgIT09ICdPYmplY3QnKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBUeXBlKE8pIGlzIG5vdCBPYmplY3QnKTtcblx0XHR9XG5cdFx0dmFyIEMgPSBPLmNvbnN0cnVjdG9yO1xuXHRcdGlmICh0eXBlb2YgQyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdHJldHVybiBkZWZhdWx0Q29uc3RydWN0b3I7XG5cdFx0fVxuXHRcdGlmICh0aGlzLlR5cGUoQykgIT09ICdPYmplY3QnKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPLmNvbnN0cnVjdG9yIGlzIG5vdCBhbiBPYmplY3QnKTtcblx0XHR9XG5cdFx0dmFyIFMgPSBoYXNTeW1ib2xzICYmIFN5bWJvbC5zcGVjaWVzID8gQ1tTeW1ib2wuc3BlY2llc10gOiB1bmRlZmluZWQ7XG5cdFx0aWYgKFMgPT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIGRlZmF1bHRDb25zdHJ1Y3Rvcjtcblx0XHR9XG5cdFx0aWYgKHRoaXMuSXNDb25zdHJ1Y3RvcihTKSkge1xuXHRcdFx0cmV0dXJuIFM7XG5cdFx0fVxuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ25vIGNvbnN0cnVjdG9yIGZvdW5kJyk7XG5cdH1cbn0pO1xuXG5kZWxldGUgRVM2LkNoZWNrT2JqZWN0Q29lcmNpYmxlOyAvLyByZW5hbWVkIGluIEVTNiB0byBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlXG5cbm1vZHVsZS5leHBvcnRzID0gRVM2O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VzLWFic3RyYWN0L2VzNi5qc1xuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBOdW1iZXIuaXNOYU4gfHwgZnVuY3Rpb24gaXNOYU4oYSkge1xuXHRyZXR1cm4gYSAhPT0gYTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZXMtYWJzdHJhY3QvaGVscGVycy9pc05hTi5qc1xuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyICRpc05hTiA9IE51bWJlci5pc05hTiB8fCBmdW5jdGlvbiAoYSkgeyByZXR1cm4gYSAhPT0gYTsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBOdW1iZXIuaXNGaW5pdGUgfHwgZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHR5cGVvZiB4ID09PSAnbnVtYmVyJyAmJiAhJGlzTmFOKHgpICYmIHggIT09IEluZmluaXR5ICYmIHggIT09IC1JbmZpbml0eTsgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy1hYnN0cmFjdC9oZWxwZXJzL2lzRmluaXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaGFzID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2UpIHtcblx0Zm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuXHRcdGlmIChoYXMuY2FsbChzb3VyY2UsIGtleSkpIHtcblx0XHRcdHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG5cdFx0fVxuXHR9XG5cdHJldHVybiB0YXJnZXQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VzLWFic3RyYWN0L2hlbHBlcnMvYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSA0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNpZ24obnVtYmVyKSB7XG5cdHJldHVybiBudW1iZXIgPj0gMCA/IDEgOiAtMTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZXMtYWJzdHJhY3QvaGVscGVycy9zaWduLmpzXG4vLyBtb2R1bGUgaWQgPSA0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG1vZChudW1iZXIsIG1vZHVsbykge1xuXHR2YXIgcmVtYWluID0gbnVtYmVyICUgbW9kdWxvO1xuXHRyZXR1cm4gTWF0aC5mbG9vcihyZW1haW4gPj0gMCA/IHJlbWFpbiA6IHJlbWFpbiArIG1vZHVsbyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VzLWFic3RyYWN0L2hlbHBlcnMvbW9kLmpzXG4vLyBtb2R1bGUgaWQgPSA0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzUHJpbWl0aXZlKHZhbHVlKSB7XG5cdHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCAodHlwZW9mIHZhbHVlICE9PSAnZnVuY3Rpb24nICYmIHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy1hYnN0cmFjdC9oZWxwZXJzL2lzUHJpbWl0aXZlLmpzXG4vLyBtb2R1bGUgaWQgPSA0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBoYXNTeW1ib2xzID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSAnc3ltYm9sJztcblxudmFyIGlzUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9oZWxwZXJzL2lzUHJpbWl0aXZlJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJ2lzLWNhbGxhYmxlJyk7XG52YXIgaXNEYXRlID0gcmVxdWlyZSgnaXMtZGF0ZS1vYmplY3QnKTtcbnZhciBpc1N5bWJvbCA9IHJlcXVpcmUoJ2lzLXN5bWJvbCcpO1xuXG52YXIgb3JkaW5hcnlUb1ByaW1pdGl2ZSA9IGZ1bmN0aW9uIE9yZGluYXJ5VG9QcmltaXRpdmUoTywgaGludCkge1xuXHRpZiAodHlwZW9mIE8gPT09ICd1bmRlZmluZWQnIHx8IE8gPT09IG51bGwpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBtZXRob2Qgb24gJyArIE8pO1xuXHR9XG5cdGlmICh0eXBlb2YgaGludCAhPT0gJ3N0cmluZycgfHwgKGhpbnQgIT09ICdudW1iZXInICYmIGhpbnQgIT09ICdzdHJpbmcnKSkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ2hpbnQgbXVzdCBiZSBcInN0cmluZ1wiIG9yIFwibnVtYmVyXCInKTtcblx0fVxuXHR2YXIgbWV0aG9kTmFtZXMgPSBoaW50ID09PSAnc3RyaW5nJyA/IFsndG9TdHJpbmcnLCAndmFsdWVPZiddIDogWyd2YWx1ZU9mJywgJ3RvU3RyaW5nJ107XG5cdHZhciBtZXRob2QsIHJlc3VsdCwgaTtcblx0Zm9yIChpID0gMDsgaSA8IG1ldGhvZE5hbWVzLmxlbmd0aDsgKytpKSB7XG5cdFx0bWV0aG9kID0gT1ttZXRob2ROYW1lc1tpXV07XG5cdFx0aWYgKGlzQ2FsbGFibGUobWV0aG9kKSkge1xuXHRcdFx0cmVzdWx0ID0gbWV0aG9kLmNhbGwoTyk7XG5cdFx0XHRpZiAoaXNQcmltaXRpdmUocmVzdWx0KSkge1xuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHR0aHJvdyBuZXcgVHlwZUVycm9yKCdObyBkZWZhdWx0IHZhbHVlJyk7XG59O1xuXG52YXIgR2V0TWV0aG9kID0gZnVuY3Rpb24gR2V0TWV0aG9kKE8sIFApIHtcblx0dmFyIGZ1bmMgPSBPW1BdO1xuXHRpZiAoZnVuYyAhPT0gbnVsbCAmJiB0eXBlb2YgZnVuYyAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRpZiAoIWlzQ2FsbGFibGUoZnVuYykpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoZnVuYyArICcgcmV0dXJuZWQgZm9yIHByb3BlcnR5ICcgKyBQICsgJyBvZiBvYmplY3QgJyArIE8gKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG5cdFx0fVxuXHRcdHJldHVybiBmdW5jO1xuXHR9XG59O1xuXG4vLyBodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtdG9wcmltaXRpdmVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gVG9QcmltaXRpdmUoaW5wdXQsIFByZWZlcnJlZFR5cGUpIHtcblx0aWYgKGlzUHJpbWl0aXZlKGlucHV0KSkge1xuXHRcdHJldHVybiBpbnB1dDtcblx0fVxuXHR2YXIgaGludCA9ICdkZWZhdWx0Jztcblx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG5cdFx0aWYgKFByZWZlcnJlZFR5cGUgPT09IFN0cmluZykge1xuXHRcdFx0aGludCA9ICdzdHJpbmcnO1xuXHRcdH0gZWxzZSBpZiAoUHJlZmVycmVkVHlwZSA9PT0gTnVtYmVyKSB7XG5cdFx0XHRoaW50ID0gJ251bWJlcic7XG5cdFx0fVxuXHR9XG5cblx0dmFyIGV4b3RpY1RvUHJpbTtcblx0aWYgKGhhc1N5bWJvbHMpIHtcblx0XHRpZiAoU3ltYm9sLnRvUHJpbWl0aXZlKSB7XG5cdFx0XHRleG90aWNUb1ByaW0gPSBHZXRNZXRob2QoaW5wdXQsIFN5bWJvbC50b1ByaW1pdGl2ZSk7XG5cdFx0fSBlbHNlIGlmIChpc1N5bWJvbChpbnB1dCkpIHtcblx0XHRcdGV4b3RpY1RvUHJpbSA9IFN5bWJvbC5wcm90b3R5cGUudmFsdWVPZjtcblx0XHR9XG5cdH1cblx0aWYgKHR5cGVvZiBleG90aWNUb1ByaW0gIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0dmFyIHJlc3VsdCA9IGV4b3RpY1RvUHJpbS5jYWxsKGlucHV0LCBoaW50KTtcblx0XHRpZiAoaXNQcmltaXRpdmUocmVzdWx0KSkge1xuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcigndW5hYmxlIHRvIGNvbnZlcnQgZXhvdGljIG9iamVjdCB0byBwcmltaXRpdmUnKTtcblx0fVxuXHRpZiAoaGludCA9PT0gJ2RlZmF1bHQnICYmIChpc0RhdGUoaW5wdXQpIHx8IGlzU3ltYm9sKGlucHV0KSkpIHtcblx0XHRoaW50ID0gJ3N0cmluZyc7XG5cdH1cblx0cmV0dXJuIG9yZGluYXJ5VG9QcmltaXRpdmUoaW5wdXQsIGhpbnQgPT09ICdkZWZhdWx0JyA/ICdudW1iZXInIDogaGludCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VzLXRvLXByaW1pdGl2ZS9lczYuanNcbi8vIG1vZHVsZSBpZCA9IDUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNQcmltaXRpdmUodmFsdWUpIHtcblx0cmV0dXJuIHZhbHVlID09PSBudWxsIHx8ICh0eXBlb2YgdmFsdWUgIT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0Jyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VzLXRvLXByaW1pdGl2ZS9oZWxwZXJzL2lzUHJpbWl0aXZlLmpzXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBmblRvU3RyID0gRnVuY3Rpb24ucHJvdG90eXBlLnRvU3RyaW5nO1xuXG52YXIgY29uc3RydWN0b3JSZWdleCA9IC9eXFxzKmNsYXNzIC87XG52YXIgaXNFUzZDbGFzc0ZuID0gZnVuY3Rpb24gaXNFUzZDbGFzc0ZuKHZhbHVlKSB7XG5cdHRyeSB7XG5cdFx0dmFyIGZuU3RyID0gZm5Ub1N0ci5jYWxsKHZhbHVlKTtcblx0XHR2YXIgc2luZ2xlU3RyaXBwZWQgPSBmblN0ci5yZXBsYWNlKC9cXC9cXC8uKlxcbi9nLCAnJyk7XG5cdFx0dmFyIG11bHRpU3RyaXBwZWQgPSBzaW5nbGVTdHJpcHBlZC5yZXBsYWNlKC9cXC9cXCpbLlxcc1xcU10qXFwqXFwvL2csICcnKTtcblx0XHR2YXIgc3BhY2VTdHJpcHBlZCA9IG11bHRpU3RyaXBwZWQucmVwbGFjZSgvXFxuL21nLCAnICcpLnJlcGxhY2UoLyB7Mn0vZywgJyAnKTtcblx0XHRyZXR1cm4gY29uc3RydWN0b3JSZWdleC50ZXN0KHNwYWNlU3RyaXBwZWQpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0cmV0dXJuIGZhbHNlOyAvLyBub3QgYSBmdW5jdGlvblxuXHR9XG59O1xuXG52YXIgdHJ5RnVuY3Rpb25PYmplY3QgPSBmdW5jdGlvbiB0cnlGdW5jdGlvbk9iamVjdCh2YWx1ZSkge1xuXHR0cnkge1xuXHRcdGlmIChpc0VTNkNsYXNzRm4odmFsdWUpKSB7IHJldHVybiBmYWxzZTsgfVxuXHRcdGZuVG9TdHIuY2FsbCh2YWx1ZSk7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn07XG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIGZuQ2xhc3MgPSAnW29iamVjdCBGdW5jdGlvbl0nO1xudmFyIGdlbkNsYXNzID0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJztcbnZhciBoYXNUb1N0cmluZ1RhZyA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIFN5bWJvbC50b1N0cmluZ1RhZyA9PT0gJ3N5bWJvbCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNDYWxsYWJsZSh2YWx1ZSkge1xuXHRpZiAoIXZhbHVlKSB7IHJldHVybiBmYWxzZTsgfVxuXHRpZiAodHlwZW9mIHZhbHVlICE9PSAnZnVuY3Rpb24nICYmIHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdGlmIChoYXNUb1N0cmluZ1RhZykgeyByZXR1cm4gdHJ5RnVuY3Rpb25PYmplY3QodmFsdWUpOyB9XG5cdGlmIChpc0VTNkNsYXNzRm4odmFsdWUpKSB7IHJldHVybiBmYWxzZTsgfVxuXHR2YXIgc3RyQ2xhc3MgPSB0b1N0ci5jYWxsKHZhbHVlKTtcblx0cmV0dXJuIHN0ckNsYXNzID09PSBmbkNsYXNzIHx8IHN0ckNsYXNzID09PSBnZW5DbGFzcztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaXMtY2FsbGFibGUvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIGdldERheSA9IERhdGUucHJvdG90eXBlLmdldERheTtcbnZhciB0cnlEYXRlT2JqZWN0ID0gZnVuY3Rpb24gdHJ5RGF0ZU9iamVjdCh2YWx1ZSkge1xuXHR0cnkge1xuXHRcdGdldERheS5jYWxsKHZhbHVlKTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufTtcblxudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbnZhciBkYXRlQ2xhc3MgPSAnW29iamVjdCBEYXRlXSc7XG52YXIgaGFzVG9TdHJpbmdUYWcgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBTeW1ib2wudG9TdHJpbmdUYWcgPT09ICdzeW1ib2wnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzRGF0ZU9iamVjdCh2YWx1ZSkge1xuXHRpZiAodHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JyB8fCB2YWx1ZSA9PT0gbnVsbCkgeyByZXR1cm4gZmFsc2U7IH1cblx0cmV0dXJuIGhhc1RvU3RyaW5nVGFnID8gdHJ5RGF0ZU9iamVjdCh2YWx1ZSkgOiB0b1N0ci5jYWxsKHZhbHVlKSA9PT0gZGF0ZUNsYXNzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9pcy1kYXRlLW9iamVjdC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIGhhc1N5bWJvbHMgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBTeW1ib2woKSA9PT0gJ3N5bWJvbCc7XG5cbmlmIChoYXNTeW1ib2xzKSB7XG5cdHZhciBzeW1Ub1N0ciA9IFN5bWJvbC5wcm90b3R5cGUudG9TdHJpbmc7XG5cdHZhciBzeW1TdHJpbmdSZWdleCA9IC9eU3ltYm9sXFwoLipcXCkkLztcblx0dmFyIGlzU3ltYm9sT2JqZWN0ID0gZnVuY3Rpb24gaXNTeW1ib2xPYmplY3QodmFsdWUpIHtcblx0XHRpZiAodHlwZW9mIHZhbHVlLnZhbHVlT2YoKSAhPT0gJ3N5bWJvbCcpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdFx0cmV0dXJuIHN5bVN0cmluZ1JlZ2V4LnRlc3Qoc3ltVG9TdHIuY2FsbCh2YWx1ZSkpO1xuXHR9O1xuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG5cdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N5bWJvbCcpIHsgcmV0dXJuIHRydWU7IH1cblx0XHRpZiAodG9TdHIuY2FsbCh2YWx1ZSkgIT09ICdbb2JqZWN0IFN5bWJvbF0nKSB7IHJldHVybiBmYWxzZTsgfVxuXHRcdHRyeSB7XG5cdFx0XHRyZXR1cm4gaXNTeW1ib2xPYmplY3QodmFsdWUpO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH07XG59IGVsc2Uge1xuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG5cdFx0Ly8gdGhpcyBlbnZpcm9ubWVudCBkb2VzIG5vdCBzdXBwb3J0IFN5bWJvbHMuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9O1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2lzLXN5bWJvbC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGltcGxlbWVudGF0aW9uID0gcmVxdWlyZSgnLi9pbXBsZW1lbnRhdGlvbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kIHx8IGltcGxlbWVudGF0aW9uO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Z1bmN0aW9uLWJpbmQvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBFUlJPUl9NRVNTQUdFID0gJ0Z1bmN0aW9uLnByb3RvdHlwZS5iaW5kIGNhbGxlZCBvbiBpbmNvbXBhdGlibGUgJztcbnZhciBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgZnVuY1R5cGUgPSAnW29iamVjdCBGdW5jdGlvbl0nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJpbmQodGhhdCkge1xuICAgIHZhciB0YXJnZXQgPSB0aGlzO1xuICAgIGlmICh0eXBlb2YgdGFyZ2V0ICE9PSAnZnVuY3Rpb24nIHx8IHRvU3RyLmNhbGwodGFyZ2V0KSAhPT0gZnVuY1R5cGUpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihFUlJPUl9NRVNTQUdFICsgdGFyZ2V0KTtcbiAgICB9XG4gICAgdmFyIGFyZ3MgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG5cbiAgICB2YXIgYm91bmQ7XG4gICAgdmFyIGJpbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBib3VuZCkge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHRhcmdldC5hcHBseShcbiAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgIGFyZ3MuY29uY2F0KHNsaWNlLmNhbGwoYXJndW1lbnRzKSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAoT2JqZWN0KHJlc3VsdCkgPT09IHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXQuYXBwbHkoXG4gICAgICAgICAgICAgICAgdGhhdCxcbiAgICAgICAgICAgICAgICBhcmdzLmNvbmNhdChzbGljZS5jYWxsKGFyZ3VtZW50cykpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHZhciBib3VuZExlbmd0aCA9IE1hdGgubWF4KDAsIHRhcmdldC5sZW5ndGggLSBhcmdzLmxlbmd0aCk7XG4gICAgdmFyIGJvdW5kQXJncyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYm91bmRMZW5ndGg7IGkrKykge1xuICAgICAgICBib3VuZEFyZ3MucHVzaCgnJCcgKyBpKTtcbiAgICB9XG5cbiAgICBib3VuZCA9IEZ1bmN0aW9uKCdiaW5kZXInLCAncmV0dXJuIGZ1bmN0aW9uICgnICsgYm91bmRBcmdzLmpvaW4oJywnKSArICcpeyByZXR1cm4gYmluZGVyLmFwcGx5KHRoaXMsYXJndW1lbnRzKTsgfScpKGJpbmRlcik7XG5cbiAgICBpZiAodGFyZ2V0LnByb3RvdHlwZSkge1xuICAgICAgICB2YXIgRW1wdHkgPSBmdW5jdGlvbiBFbXB0eSgpIHt9O1xuICAgICAgICBFbXB0eS5wcm90b3R5cGUgPSB0YXJnZXQucHJvdG90eXBlO1xuICAgICAgICBib3VuZC5wcm90b3R5cGUgPSBuZXcgRW1wdHkoKTtcbiAgICAgICAgRW1wdHkucHJvdG90eXBlID0gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gYm91bmQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Z1bmN0aW9uLWJpbmQvaW1wbGVtZW50YXRpb24uanNcbi8vIG1vZHVsZSBpZCA9IDU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyICRpc05hTiA9IHJlcXVpcmUoJy4vaGVscGVycy9pc05hTicpO1xudmFyICRpc0Zpbml0ZSA9IHJlcXVpcmUoJy4vaGVscGVycy9pc0Zpbml0ZScpO1xuXG52YXIgc2lnbiA9IHJlcXVpcmUoJy4vaGVscGVycy9zaWduJyk7XG52YXIgbW9kID0gcmVxdWlyZSgnLi9oZWxwZXJzL21vZCcpO1xuXG52YXIgSXNDYWxsYWJsZSA9IHJlcXVpcmUoJ2lzLWNhbGxhYmxlJyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCdlcy10by1wcmltaXRpdmUvZXM1Jyk7XG5cbi8vIGh0dHBzOi8vZXM1LmdpdGh1Yi5pby8jeDlcbnZhciBFUzUgPSB7XG5cdFRvUHJpbWl0aXZlOiB0b1ByaW1pdGl2ZSxcblxuXHRUb0Jvb2xlYW46IGZ1bmN0aW9uIFRvQm9vbGVhbih2YWx1ZSkge1xuXHRcdHJldHVybiBCb29sZWFuKHZhbHVlKTtcblx0fSxcblx0VG9OdW1iZXI6IGZ1bmN0aW9uIFRvTnVtYmVyKHZhbHVlKSB7XG5cdFx0cmV0dXJuIE51bWJlcih2YWx1ZSk7XG5cdH0sXG5cdFRvSW50ZWdlcjogZnVuY3Rpb24gVG9JbnRlZ2VyKHZhbHVlKSB7XG5cdFx0dmFyIG51bWJlciA9IHRoaXMuVG9OdW1iZXIodmFsdWUpO1xuXHRcdGlmICgkaXNOYU4obnVtYmVyKSkgeyByZXR1cm4gMDsgfVxuXHRcdGlmIChudW1iZXIgPT09IDAgfHwgISRpc0Zpbml0ZShudW1iZXIpKSB7IHJldHVybiBudW1iZXI7IH1cblx0XHRyZXR1cm4gc2lnbihudW1iZXIpICogTWF0aC5mbG9vcihNYXRoLmFicyhudW1iZXIpKTtcblx0fSxcblx0VG9JbnQzMjogZnVuY3Rpb24gVG9JbnQzMih4KSB7XG5cdFx0cmV0dXJuIHRoaXMuVG9OdW1iZXIoeCkgPj4gMDtcblx0fSxcblx0VG9VaW50MzI6IGZ1bmN0aW9uIFRvVWludDMyKHgpIHtcblx0XHRyZXR1cm4gdGhpcy5Ub051bWJlcih4KSA+Pj4gMDtcblx0fSxcblx0VG9VaW50MTY6IGZ1bmN0aW9uIFRvVWludDE2KHZhbHVlKSB7XG5cdFx0dmFyIG51bWJlciA9IHRoaXMuVG9OdW1iZXIodmFsdWUpO1xuXHRcdGlmICgkaXNOYU4obnVtYmVyKSB8fCBudW1iZXIgPT09IDAgfHwgISRpc0Zpbml0ZShudW1iZXIpKSB7IHJldHVybiAwOyB9XG5cdFx0dmFyIHBvc0ludCA9IHNpZ24obnVtYmVyKSAqIE1hdGguZmxvb3IoTWF0aC5hYnMobnVtYmVyKSk7XG5cdFx0cmV0dXJuIG1vZChwb3NJbnQsIDB4MTAwMDApO1xuXHR9LFxuXHRUb1N0cmluZzogZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUpIHtcblx0XHRyZXR1cm4gU3RyaW5nKHZhbHVlKTtcblx0fSxcblx0VG9PYmplY3Q6IGZ1bmN0aW9uIFRvT2JqZWN0KHZhbHVlKSB7XG5cdFx0dGhpcy5DaGVja09iamVjdENvZXJjaWJsZSh2YWx1ZSk7XG5cdFx0cmV0dXJuIE9iamVjdCh2YWx1ZSk7XG5cdH0sXG5cdENoZWNrT2JqZWN0Q29lcmNpYmxlOiBmdW5jdGlvbiBDaGVja09iamVjdENvZXJjaWJsZSh2YWx1ZSwgb3B0TWVzc2FnZSkge1xuXHRcdC8qIGpzaGludCBlcW51bGw6dHJ1ZSAqL1xuXHRcdGlmICh2YWx1ZSA9PSBudWxsKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKG9wdE1lc3NhZ2UgfHwgJ0Nhbm5vdCBjYWxsIG1ldGhvZCBvbiAnICsgdmFsdWUpO1xuXHRcdH1cblx0XHRyZXR1cm4gdmFsdWU7XG5cdH0sXG5cdElzQ2FsbGFibGU6IElzQ2FsbGFibGUsXG5cdFNhbWVWYWx1ZTogZnVuY3Rpb24gU2FtZVZhbHVlKHgsIHkpIHtcblx0XHRpZiAoeCA9PT0geSkgeyAvLyAwID09PSAtMCwgYnV0IHRoZXkgYXJlIG5vdCBpZGVudGljYWwuXG5cdFx0XHRpZiAoeCA9PT0gMCkgeyByZXR1cm4gMSAvIHggPT09IDEgLyB5OyB9XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0cmV0dXJuICRpc05hTih4KSAmJiAkaXNOYU4oeSk7XG5cdH0sXG5cblx0Ly8gaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzUuMS8jc2VjLThcblx0VHlwZTogZnVuY3Rpb24gVHlwZSh4KSB7XG5cdFx0aWYgKHggPT09IG51bGwpIHtcblx0XHRcdHJldHVybiAnTnVsbCc7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2YgeCA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdHJldHVybiAnVW5kZWZpbmVkJztcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiB4ID09PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiB4ID09PSAnb2JqZWN0Jykge1xuXHRcdFx0cmV0dXJuICdPYmplY3QnO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIHggPT09ICdudW1iZXInKSB7XG5cdFx0XHRyZXR1cm4gJ051bWJlcic7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2YgeCA9PT0gJ2Jvb2xlYW4nKSB7XG5cdFx0XHRyZXR1cm4gJ0Jvb2xlYW4nO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIHggPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRyZXR1cm4gJ1N0cmluZyc7XG5cdFx0fVxuXHR9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVTNTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy1hYnN0cmFjdC9lczUuanNcbi8vIG1vZHVsZSBpZCA9IDU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxudmFyIGlzUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9oZWxwZXJzL2lzUHJpbWl0aXZlJyk7XG5cbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnaXMtY2FsbGFibGUnKTtcblxuLy8gaHR0cHM6Ly9lczUuZ2l0aHViLmlvLyN4OC4xMlxudmFyIEVTNWludGVybmFsU2xvdHMgPSB7XG5cdCdbW0RlZmF1bHRWYWx1ZV1dJzogZnVuY3Rpb24gKE8sIGhpbnQpIHtcblx0XHR2YXIgYWN0dWFsSGludCA9IGhpbnQgfHwgKHRvU3RyLmNhbGwoTykgPT09ICdbb2JqZWN0IERhdGVdJyA/IFN0cmluZyA6IE51bWJlcik7XG5cblx0XHRpZiAoYWN0dWFsSGludCA9PT0gU3RyaW5nIHx8IGFjdHVhbEhpbnQgPT09IE51bWJlcikge1xuXHRcdFx0dmFyIG1ldGhvZHMgPSBhY3R1YWxIaW50ID09PSBTdHJpbmcgPyBbJ3RvU3RyaW5nJywgJ3ZhbHVlT2YnXSA6IFsndmFsdWVPZicsICd0b1N0cmluZyddO1xuXHRcdFx0dmFyIHZhbHVlLCBpO1xuXHRcdFx0Zm9yIChpID0gMDsgaSA8IG1ldGhvZHMubGVuZ3RoOyArK2kpIHtcblx0XHRcdFx0aWYgKGlzQ2FsbGFibGUoT1ttZXRob2RzW2ldXSkpIHtcblx0XHRcdFx0XHR2YWx1ZSA9IE9bbWV0aG9kc1tpXV0oKTtcblx0XHRcdFx0XHRpZiAoaXNQcmltaXRpdmUodmFsdWUpKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdObyBkZWZhdWx0IHZhbHVlJyk7XG5cdFx0fVxuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ2ludmFsaWQgW1tEZWZhdWx0VmFsdWVdXSBoaW50IHN1cHBsaWVkJyk7XG5cdH1cbn07XG5cbi8vIGh0dHBzOi8vZXM1LmdpdGh1Yi5pby8jeDlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gVG9QcmltaXRpdmUoaW5wdXQsIFByZWZlcnJlZFR5cGUpIHtcblx0aWYgKGlzUHJpbWl0aXZlKGlucHV0KSkge1xuXHRcdHJldHVybiBpbnB1dDtcblx0fVxuXHRyZXR1cm4gRVM1aW50ZXJuYWxTbG90c1snW1tEZWZhdWx0VmFsdWVdXSddKGlucHV0LCBQcmVmZXJyZWRUeXBlKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZXMtdG8tcHJpbWl0aXZlL2VzNS5qc1xuLy8gbW9kdWxlIGlkID0gNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaGFzID0gcmVxdWlyZSgnaGFzJyk7XG52YXIgcmVnZXhFeGVjID0gUmVnRXhwLnByb3RvdHlwZS5leGVjO1xudmFyIGdPUEQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG52YXIgdHJ5UmVnZXhFeGVjQ2FsbCA9IGZ1bmN0aW9uIHRyeVJlZ2V4RXhlYyh2YWx1ZSkge1xuXHR0cnkge1xuXHRcdHZhciBsYXN0SW5kZXggPSB2YWx1ZS5sYXN0SW5kZXg7XG5cdFx0dmFsdWUubGFzdEluZGV4ID0gMDtcblxuXHRcdHJlZ2V4RXhlYy5jYWxsKHZhbHVlKTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fSBmaW5hbGx5IHtcblx0XHR2YWx1ZS5sYXN0SW5kZXggPSBsYXN0SW5kZXg7XG5cdH1cbn07XG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIHJlZ2V4Q2xhc3MgPSAnW29iamVjdCBSZWdFeHBdJztcbnZhciBoYXNUb1N0cmluZ1RhZyA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIFN5bWJvbC50b1N0cmluZ1RhZyA9PT0gJ3N5bWJvbCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNSZWdleCh2YWx1ZSkge1xuXHRpZiAoIXZhbHVlIHx8IHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0aWYgKCFoYXNUb1N0cmluZ1RhZykge1xuXHRcdHJldHVybiB0b1N0ci5jYWxsKHZhbHVlKSA9PT0gcmVnZXhDbGFzcztcblx0fVxuXG5cdHZhciBkZXNjcmlwdG9yID0gZ09QRCh2YWx1ZSwgJ2xhc3RJbmRleCcpO1xuXHR2YXIgaGFzTGFzdEluZGV4RGF0YVByb3BlcnR5ID0gZGVzY3JpcHRvciAmJiBoYXMoZGVzY3JpcHRvciwgJ3ZhbHVlJyk7XG5cdGlmICghaGFzTGFzdEluZGV4RGF0YVByb3BlcnR5KSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0cmV0dXJuIHRyeVJlZ2V4RXhlY0NhbGwodmFsdWUpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9pcy1yZWdleC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJpbmQgPSByZXF1aXJlKCdmdW5jdGlvbi1iaW5kJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYmluZC5jYWxsKEZ1bmN0aW9uLmNhbGwsIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2hhcy9zcmMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIEVTID0gcmVxdWlyZSgnZXMtYWJzdHJhY3QvZXM2Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZmluZChwcmVkaWNhdGUpIHtcblx0dmFyIGxpc3QgPSBFUy5Ub09iamVjdCh0aGlzKTtcblx0dmFyIGxlbmd0aCA9IEVTLlRvSW50ZWdlcihFUy5Ub0xlbmd0aChsaXN0Lmxlbmd0aCkpO1xuXHRpZiAoIUVTLklzQ2FsbGFibGUocHJlZGljYXRlKSkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0FycmF5I2ZpbmQ6IHByZWRpY2F0ZSBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcblx0fVxuXHRpZiAobGVuZ3RoID09PSAwKSB7XG5cdFx0cmV0dXJuIHVuZGVmaW5lZDtcblx0fVxuXHR2YXIgdGhpc0FyZyA9IGFyZ3VtZW50c1sxXTtcblx0Zm9yICh2YXIgaSA9IDAsIHZhbHVlOyBpIDwgbGVuZ3RoOyBpKyspIHtcblx0XHR2YWx1ZSA9IGxpc3RbaV07XG5cdFx0aWYgKEVTLkNhbGwocHJlZGljYXRlLCB0aGlzQXJnLCBbdmFsdWUsIGksIGxpc3RdKSkge1xuXHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gdW5kZWZpbmVkO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9hcnJheS5wcm90b3R5cGUuZmluZC9pbXBsZW1lbnRhdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdldFBvbHlmaWxsKCkge1xuXHQvLyBEZXRlY3QgaWYgYW4gaW1wbGVtZW50YXRpb24gZXhpc3RzXG5cdC8vIERldGVjdCBlYXJseSBpbXBsZW1lbnRhdGlvbnMgd2hpY2ggc2tpcHBlZCBob2xlcyBpbiBzcGFyc2UgYXJyYXlzXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zcGFyc2UtYXJyYXlzXG5cdHZhciBpbXBsZW1lbnRlZCA9IEFycmF5LnByb3RvdHlwZS5maW5kICYmIFssIDFdLmZpbmQoZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9KSAhPT0gMTtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZ2xvYmFsLXJlcXVpcmVcblx0cmV0dXJuIGltcGxlbWVudGVkID8gQXJyYXkucHJvdG90eXBlLmZpbmQgOiByZXF1aXJlKCcuL2ltcGxlbWVudGF0aW9uJyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2FycmF5LnByb3RvdHlwZS5maW5kL3BvbHlmaWxsLmpzXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBkZWZpbmUgPSByZXF1aXJlKCdkZWZpbmUtcHJvcGVydGllcycpO1xudmFyIGdldFBvbHlmaWxsID0gcmVxdWlyZSgnLi9wb2x5ZmlsbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNoaW1BcnJheVByb3RvdHlwZUZpbmQoKSB7XG5cdHZhciBwb2x5ZmlsbCA9IGdldFBvbHlmaWxsKCk7XG5cblx0ZGVmaW5lKEFycmF5LnByb3RvdHlwZSwgeyBmaW5kOiBwb2x5ZmlsbCB9LCB7XG5cdFx0ZmluZDogZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIEFycmF5LnByb3RvdHlwZS5maW5kICE9PSBwb2x5ZmlsbDtcblx0XHR9XG5cdH0pO1xuXG5cdHJldHVybiBwb2x5ZmlsbDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYXJyYXkucHJvdG90eXBlLmZpbmQvc2hpbS5qc1xuLy8gbW9kdWxlIGlkID0gNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDE3OTIgMTc5MlxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tYXJyb3dzLWFsdFxcXCI+PHRpdGxlPmFycm93cy1hbHQ8L3RpdGxlPjxwYXRoIGQ9XFxcIk0xNDExIDU0MWwtMzU1IDM1NSAzNTUgMzU1IDE0NC0xNDRxMjktMzEgNzAtMTQgMzkgMTcgMzkgNTl2NDQ4cTAgMjYtMTkgNDV0LTQ1IDE5aC00NDhxLTQyIDAtNTktNDAtMTctMzkgMTQtNjlsMTQ0LTE0NC0zNTUtMzU1LTM1NSAzNTUgMTQ0IDE0NHEzMSAzMCAxNCA2OS0xNyA0MC01OSA0MGgtNDQ4cS0yNiAwLTQ1LTE5dC0xOS00NXYtNDQ4cTAtNDIgNDAtNTkgMzktMTcgNjkgMTRsMTQ0IDE0NCAzNTUtMzU1LTM1NS0zNTUtMTQ0IDE0NHEtMTkgMTktNDUgMTktMTIgMC0yNC01LTQwLTE3LTQwLTU5di00NDhxMC0yNiAxOS00NXQ0NS0xOWg0NDhxNDIgMCA1OSA0MCAxNyAzOS0xNCA2OWwtMTQ0IDE0NCAzNTUgMzU1IDM1NS0zNTUtMTQ0LTE0NHEtMzEtMzAtMTQtNjkgMTctNDAgNTktNDBoNDQ4cTI2IDAgNDUgMTl0MTkgNDV2NDQ4cTAgNDItMzkgNTktMTMgNS0yNSA1LTI2IDAtNDUtMTl6XFxcIi8+PC9zeW1ib2w+PHN5bWJvbCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNzkyIDE3OTJcXFwiIGlkPVxcXCJsZXBsYXllci1pY29uLWJhY2t3YXJkXFxcIj48dGl0bGU+YmFja3dhcmQ8L3RpdGxlPjxwYXRoIGQ9XFxcIk0xNjgzIDE0MXExOS0xOSAzMi0xM3QxMyAzMnYxNDcycTAgMjYtMTMgMzJ0LTMyLTEzbC03MTAtNzEwcS04LTktMTMtMTl2NzEwcTAgMjYtMTMgMzJ0LTMyLTEzbC03MTAtNzEwcS0xOS0xOS0xOS00NXQxOS00NWw3MTAtNzEwcTE5LTE5IDMyLTEzdDEzIDMydjcxMHE1LTExIDEzLTE5elxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi1idWxsc2V5ZVxcXCI+PHRpdGxlPmJ1bGxzZXllPC90aXRsZT48cGF0aCBkPVxcXCJNMTE1MiA4OTZxMCAxMDYtNzUgMTgxdC0xODEgNzUtMTgxLTc1LTc1LTE4MSA3NS0xODEgMTgxLTc1IDE4MSA3NSA3NSAxODF6bTEyOCAwcTAtMTU5LTExMi41LTI3MS41dC0yNzEuNS0xMTIuNS0yNzEuNSAxMTIuNS0xMTIuNSAyNzEuNSAxMTIuNSAyNzEuNSAyNzEuNSAxMTIuNSAyNzEuNS0xMTIuNSAxMTIuNS0yNzEuNXptMTI4IDBxMCAyMTItMTUwIDM2MnQtMzYyIDE1MC0zNjItMTUwLTE1MC0zNjIgMTUwLTM2MiAzNjItMTUwIDM2MiAxNTAgMTUwIDM2MnptMTI4IDBxMC0xMzAtNTEtMjQ4LjV0LTEzNi41LTIwNC0yMDQtMTM2LjUtMjQ4LjUtNTEtMjQ4LjUgNTEtMjA0IDEzNi41LTEzNi41IDIwNC01MSAyNDguNSA1MSAyNDguNSAxMzYuNSAyMDQgMjA0IDEzNi41IDI0OC41IDUxIDI0OC41LTUxIDIwNC0xMzYuNSAxMzYuNS0yMDQgNTEtMjQ4LjV6bTEyOCAwcTAgMjA5LTEwMyAzODUuNXQtMjc5LjUgMjc5LjUtMzg1LjUgMTAzLTM4NS41LTEwMy0yNzkuNS0yNzkuNS0xMDMtMzg1LjUgMTAzLTM4NS41IDI3OS41LTI3OS41IDM4NS41LTEwMyAzODUuNSAxMDMgMjc5LjUgMjc5LjUgMTAzIDM4NS41elxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgNDAwIDM4MFxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tY2F0XFxcIj48dGl0bGU+Y2F0PC90aXRsZT4gPHBhdGggZD1cXFwiTSAxNTEuMzQ5MDQsMzA3LjIwNDU1IEwgMjY0LjM0OTA0LDMwNy4yMDQ1NSBDIDI2NC4zNDkwNCwyOTEuMTQwOTYgMjYzLjIwMjEsMjg3Ljk1NDU1IDIzNi41OTkwNCwyODcuOTU0NTUgQyAyNDAuODQ5MDQsMjc1LjIwNDU1IDI1OC4xMjQyNCwyNDQuMzU4MDggMjY3LjcyNDA0LDI0NC4zNTgwOCBDIDI3Ni4yMTcwNywyNDQuMzU4MDggMjg2LjM0OTA0LDI0NC44MjU5MiAyODYuMzQ5MDQsMjY0LjIwNDU1IEMgMjg2LjM0OTA0LDI4Ni4yMDQ1NSAzMjMuMzcxNzEsMzIxLjY3NTQ3IDMzMi4zNDkwNCwzMDcuMjA0NTUgQyAzNDUuNzI3NjksMjg1LjYzODk3IDMwOS4zNDkwNCwyOTIuMjE1MTQgMzA5LjM0OTA0LDI0MC4yMDQ1NSBDIDMwOS4zNDkwNCwxNjkuMDUxMzUgMzUwLjg3NDE3LDE3OS4xODA3MSAzNTAuODc0MTcsMTM5LjIwNDU1IEMgMzUwLjg3NDE3LDExOS4yMDQ1NSAzNDUuMzQ5MDQsMTE2LjUwMzc0IDM0NS4zNDkwNCwxMDIuMjA0NTUgQyAzNDUuMzQ5MDQsODMuMzA2OTUgMzYxLjk5NzE3LDg0LjQwMzU3NyAzNTguNzU4MDUsNjguNzM0ODc5IEMgMzU2LjUyMDYxLDU3LjkxMTY1NiAzNTQuNzY5NjIsNDkuMjMxOTkgMzUzLjQ2NTE2LDM2LjE0Mzg4OSBDIDM1Mi41Mzk1OSwyNi44NTczMDUgMzUyLjI0NDUyLDE2Ljk1OTM5OCAzNDIuNTk4NTUsMTcuMzU3MzgyIEMgMzMxLjI2NTA1LDE3LjgyNDk5MiAzMjYuOTY1NDksMzcuNzc0MTkgMzA5LjM0OTA0LDM5LjIwNDU0OSBDIDI5MS43Njg1MSw0MC42MzE5OTEgMjc2Ljc3ODM0LDI0LjIzODAyOCAyNjkuOTc0MDQsMjYuNTc5NTQ5IEMgMjYzLjIyNzA5LDI4LjkwMTMzNCAyNjUuMzQ5MDQsNDcuMjA0NTQ5IDI2OS4zNDkwNCw2MC4yMDQ1NDkgQyAyNzUuNjM1ODgsODAuNjM2NzcxIDI4OS4zNDkwNCwxMDcuMjA0NTUgMjY0LjM0OTA0LDExMS4yMDQ1NSBDIDIzOS4zNDkwNCwxMTUuMjA0NTUgMTk2LjM0OTA0LDExOS4yMDQ1NSAxNjUuMzQ5MDQsMTYwLjIwNDU1IEMgMTM0LjM0OTA0LDIwMS4yMDQ1NSAxMzUuNDkzNDIsMjQ5LjMyMTIgMTIzLjM0OTA0LDI2NC4yMDQ1NSBDIDgyLjU5MDY5NiwzMTQuMTU1MjkgNDAuODIzOTE5LDI5My42NDYyNSA0MC44MjM5MTksMzM1LjIwNDU1IEMgNDAuODIzOTE5LDM1My44MTAxOSA3Mi4zNDkwNDUsMzY3LjIwNDU1IDc3LjM0OTA0NSwzNjEuMjA0NTUgQyA4Mi4zNDkwNDUsMzU1LjIwNDU1IDM0Ljg2Mzc2NCwzMzcuMzI1ODcgODcuOTk1NDkyLDMxNi4yMDQ1NSBDIDEzMy4zODcxMSwyOTguMTYwMTQgMTM3LjQzOTE0LDI5NC40NzY2MyAxNTEuMzQ5MDQsMzA3LjIwNDU1IHogXFxcIiBzdHlsZT1cXFwiZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjFweDtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxXFxcIi8+IDwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi1jb21tZW50aW5nLW9cXFwiPjx0aXRsZT5jb21tZW50aW5nLW88L3RpdGxlPjxwYXRoIGQ9XFxcIk02NDAgODk2cTAgNTMtMzcuNSA5MC41dC05MC41IDM3LjUtOTAuNS0zNy41LTM3LjUtOTAuNSAzNy41LTkwLjUgOTAuNS0zNy41IDkwLjUgMzcuNSAzNy41IDkwLjV6bTM4NCAwcTAgNTMtMzcuNSA5MC41dC05MC41IDM3LjUtOTAuNS0zNy41LTM3LjUtOTAuNSAzNy41LTkwLjUgOTAuNS0zNy41IDkwLjUgMzcuNSAzNy41IDkwLjV6bTM4NCAwcTAgNTMtMzcuNSA5MC41dC05MC41IDM3LjUtOTAuNS0zNy41LTM3LjUtOTAuNSAzNy41LTkwLjUgOTAuNS0zNy41IDkwLjUgMzcuNSAzNy41IDkwLjV6bS01MTItNTEycS0yMDQgMC0zODEuNSA2OS41dC0yODIgMTg3LjUtMTA0LjUgMjU1cTAgMTEyIDcxLjUgMjEzLjV0MjAxLjUgMTc1LjVsODcgNTAtMjcgOTZxLTI0IDkxLTcwIDE3MiAxNTItNjMgMjc1LTE3MWw0My0zOCA1NyA2cTY5IDggMTMwIDggMjA0IDAgMzgxLjUtNjkuNXQyODItMTg3LjUgMTA0LjUtMjU1LTEwNC41LTI1NS0yODItMTg3LjUtMzgxLjUtNjkuNXptODk2IDUxMnEwIDE3NC0xMjAgMzIxLjV0LTMyNiAyMzMtNDUwIDg1LjVxLTcwIDAtMTQ1LTgtMTk4IDE3NS00NjAgMjQyLTQ5IDE0LTExNCAyMmgtNXEtMTUgMC0yNy0xMC41dC0xNi0yNy41di0xcS0zLTQtLjUtMTJ0Mi0xMCA0LjUtOS41bDYtOSA3LTguNSA4LTlxNy04IDMxLTM0LjV0MzQuNS0zOCAzMS0zOS41IDMyLjUtNTEgMjctNTkgMjYtNzZxLTE1Ny04OS0yNDcuNS0yMjB0LTkwLjUtMjgxcTAtMTMwIDcxLTI0OC41dDE5MS0yMDQuNSAyODYtMTM2LjUgMzQ4LTUwLjUgMzQ4IDUwLjUgMjg2IDEzNi41IDE5MSAyMDQuNSA3MSAyNDguNXpcXFwiLz48L3N5bWJvbD48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDE3OTIgMTc5MlxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tZG93bmxvYWRcXFwiPjx0aXRsZT5kb3dubG9hZDwvdGl0bGU+PHBhdGggZD1cXFwiTTEzNDQgMTM0NHEwLTI2LTE5LTQ1dC00NS0xOS00NSAxOS0xOSA0NSAxOSA0NSA0NSAxOSA0NS0xOSAxOS00NXptMjU2IDBxMC0yNi0xOS00NXQtNDUtMTktNDUgMTktMTkgNDUgMTkgNDUgNDUgMTkgNDUtMTkgMTktNDV6bTEyOC0yMjR2MzIwcTAgNDAtMjggNjh0LTY4IDI4aC0xNDcycS00MCAwLTY4LTI4dC0yOC02OHYtMzIwcTAtNDAgMjgtNjh0NjgtMjhoNDY1bDEzNSAxMzZxNTggNTYgMTM2IDU2dDEzNi01NmwxMzYtMTM2aDQ2NHE0MCAwIDY4IDI4dDI4IDY4em0tMzI1LTU2OXExNyA0MS0xNCA3MGwtNDQ4IDQ0OHEtMTggMTktNDUgMTl0LTQ1LTE5bC00NDgtNDQ4cS0zMS0yOS0xNC03MCAxNy0zOSA1OS0zOWgyNTZ2LTQ0OHEwLTI2IDE5LTQ1dDQ1LTE5aDI1NnEyNiAwIDQ1IDE5dDE5IDQ1djQ0OGgyNTZxNDIgMCA1OSAzOXpcXFwiLz48L3N5bWJvbD48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDE3OTIgMTc5MlxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tZWRpdFxcXCI+PHRpdGxlPmVkaXQ8L3RpdGxlPjxwYXRoIGQ9XFxcIk04ODggMTE4NGwxMTYtMTE2LTE1Mi0xNTItMTE2IDExNnY1Nmg5NnY5Nmg1NnptNDQwLTcyMHEtMTYtMTYtMzMgMWwtMzUwIDM1MHEtMTcgMTctMSAzM3QzMy0xbDM1MC0zNTBxMTctMTcgMS0zM3ptODAgNTk0djE5MHEwIDExOS04NC41IDIwMy41dC0yMDMuNSA4NC41aC04MzJxLTExOSAwLTIwMy41LTg0LjV0LTg0LjUtMjAzLjV2LTgzMnEwLTExOSA4NC41LTIwMy41dDIwMy41LTg0LjVoODMycTYzIDAgMTE3IDI1IDE1IDcgMTggMjMgMyAxNy05IDI5bC00OSA0OXEtMTQgMTQtMzIgOC0yMy02LTQ1LTZoLTgzMnEtNjYgMC0xMTMgNDd0LTQ3IDExM3Y4MzJxMCA2NiA0NyAxMTN0MTEzIDQ3aDgzMnE2NiAwIDExMy00N3Q0Ny0xMTN2LTEyNnEwLTEzIDktMjJsNjQtNjRxMTUtMTUgMzUtN3QyMCAyOXptLTk2LTczOGwyODggMjg4LTY3MiA2NzJoLTI4OHYtMjg4em00NDQgMTMybC05MiA5Mi0yODgtMjg4IDkyLTkycTI4LTI4IDY4LTI4dDY4IDI4bDE1MiAxNTJxMjggMjggMjggNjh0LTI4IDY4elxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi1mb3J3YXJkXFxcIj48dGl0bGU+Zm9yd2FyZDwvdGl0bGU+PHBhdGggZD1cXFwiTTEwOSAxNjUxcS0xOSAxOS0zMiAxM3QtMTMtMzJ2LTE0NzJxMC0yNiAxMy0zMnQzMiAxM2w3MTAgNzEwcTggOCAxMyAxOXYtNzEwcTAtMjYgMTMtMzJ0MzIgMTNsNzEwIDcxMHExOSAxOSAxOSA0NXQtMTkgNDVsLTcxMCA3MTBxLTE5IDE5LTMyIDEzdC0xMy0zMnYtNzEwcS01IDEwLTEzIDE5elxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi1pbmZvXFxcIj48dGl0bGU+aW5mbzwvdGl0bGU+PHBhdGggZD1cXFwiTTEyMTYgMTM0NHYxMjhxMCAyNi0xOSA0NXQtNDUgMTloLTUxMnEtMjYgMC00NS0xOXQtMTktNDV2LTEyOHEwLTI2IDE5LTQ1dDQ1LTE5aDY0di0zODRoLTY0cS0yNiAwLTQ1LTE5dC0xOS00NXYtMTI4cTAtMjYgMTktNDV0NDUtMTloMzg0cTI2IDAgNDUgMTl0MTkgNDV2NTc2aDY0cTI2IDAgNDUgMTl0MTkgNDV6bS0xMjgtMTE1MnYxOTJxMCAyNi0xOSA0NXQtNDUgMTloLTI1NnEtMjYgMC00NS0xOXQtMTktNDV2LTE5MnEwLTI2IDE5LTQ1dDQ1LTE5aDI1NnEyNiAwIDQ1IDE5dDE5IDQ1elxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi1saXN0LXVsXFxcIj48dGl0bGU+bGlzdC11bDwvdGl0bGU+PHBhdGggZD1cXFwiTTM4NCAxNDA4cTAgODAtNTYgMTM2dC0xMzYgNTYtMTM2LTU2LTU2LTEzNiA1Ni0xMzYgMTM2LTU2IDEzNiA1NiA1NiAxMzZ6bTAtNTEycTAgODAtNTYgMTM2dC0xMzYgNTYtMTM2LTU2LTU2LTEzNiA1Ni0xMzYgMTM2LTU2IDEzNiA1NiA1NiAxMzZ6bTE0MDggNDE2djE5MnEwIDEzLTkuNSAyMi41dC0yMi41IDkuNWgtMTIxNnEtMTMgMC0yMi41LTkuNXQtOS41LTIyLjV2LTE5MnEwLTEzIDkuNS0yMi41dDIyLjUtOS41aDEyMTZxMTMgMCAyMi41IDkuNXQ5LjUgMjIuNXptLTE0MDgtOTI4cTAgODAtNTYgMTM2dC0xMzYgNTYtMTM2LTU2LTU2LTEzNiA1Ni0xMzYgMTM2LTU2IDEzNiA1NiA1NiAxMzZ6bTE0MDggNDE2djE5MnEwIDEzLTkuNSAyMi41dC0yMi41IDkuNWgtMTIxNnEtMTMgMC0yMi41LTkuNXQtOS41LTIyLjV2LTE5MnEwLTEzIDkuNS0yMi41dDIyLjUtOS41aDEyMTZxMTMgMCAyMi41IDkuNXQ5LjUgMjIuNXptMC01MTJ2MTkycTAgMTMtOS41IDIyLjV0LTIyLjUgOS41aC0xMjE2cS0xMyAwLTIyLjUtOS41dC05LjUtMjIuNXYtMTkycTAtMTMgOS41LTIyLjV0MjIuNS05LjVoMTIxNnExMyAwIDIyLjUgOS41dDkuNSAyMi41elxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi1tYWdpY1xcXCI+PHRpdGxlPm1hZ2ljPC90aXRsZT48cGF0aCBkPVxcXCJNMTI1NCA1ODFsMjkzLTI5My0xMDctMTA3LTI5MyAyOTN6bTQ0Ny0yOTNxMCAyNy0xOCA0NWwtMTI4NiAxMjg2cS0xOCAxOC00NSAxOHQtNDUtMThsLTE5OC0xOThxLTE4LTE4LTE4LTQ1dDE4LTQ1bDEyODYtMTI4NnExOC0xOCA0NS0xOHQ0NSAxOGwxOTggMTk4cTE4IDE4IDE4IDQ1em0tMTM1MS0xOTBsOTggMzAtOTggMzAtMzAgOTgtMzAtOTgtOTgtMzAgOTgtMzAgMzAtOTh6bTM1MCAxNjJsMTk2IDYwLTE5NiA2MC02MCAxOTYtNjAtMTk2LTE5Ni02MCAxOTYtNjAgNjAtMTk2em05MzAgNDc4bDk4IDMwLTk4IDMwLTMwIDk4LTMwLTk4LTk4LTMwIDk4LTMwIDMwLTk4em0tNjQwLTY0MGw5OCAzMC05OCAzMC0zMCA5OC0zMC05OC05OC0zMCA5OC0zMCAzMC05OHpcXFwiLz48L3N5bWJvbD48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDE3OTIgMTc5MlxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tcGF1c2VcXFwiPjx0aXRsZT5wYXVzZTwvdGl0bGU+PHBhdGggZD1cXFwiTTE2NjQgMTkydjE0MDhxMCAyNi0xOSA0NXQtNDUgMTloLTUxMnEtMjYgMC00NS0xOXQtMTktNDV2LTE0MDhxMC0yNiAxOS00NXQ0NS0xOWg1MTJxMjYgMCA0NSAxOXQxOSA0NXptLTg5NiAwdjE0MDhxMCAyNi0xOSA0NXQtNDUgMTloLTUxMnEtMjYgMC00NS0xOXQtMTktNDV2LTE0MDhxMC0yNiAxOS00NXQ0NS0xOWg1MTJxMjYgMCA0NSAxOXQxOSA0NXpcXFwiLz48L3N5bWJvbD48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDE3OTIgMTc5MlxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tcGxhbmVcXFwiPjx0aXRsZT5wbGFuZTwvdGl0bGU+PHBhdGggZD1cXFwiTTE1NjggMTYwcTQ0IDUyIDEyIDE0OHQtMTA4IDE3MmwtMTYxIDE2MSAxNjAgNjk2cTUgMTktMTIgMzNsLTEyOCA5NnEtNyA2LTE5IDYtNCAwLTctMS0xNS0zLTIxLTE2bC0yNzktNTA4LTI1OSAyNTkgNTMgMTk0cTUgMTctOCAzMWwtOTYgOTZxLTkgOS0yMyA5aC0ycS0xNS0yLTI0LTEzbC0xODktMjUyLTI1Mi0xODlxLTExLTctMTMtMjMtMS0xMyA5LTI1bDk2LTk3cTktOSAyMy05IDYgMCA4IDFsMTk0IDUzIDI1OS0yNTktNTA4LTI3OXEtMTQtOC0xNy0yNC0yLTE2IDktMjdsMTI4LTEyOHExNC0xMyAzMC04bDY2NSAxNTkgMTYwLTE2MHE3Ni03NiAxNzItMTA4dDE0OCAxMnpcXFwiLz48L3N5bWJvbD48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDE3OTIgMTc5MlxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tcGxheVxcXCI+PHRpdGxlPnBsYXk8L3RpdGxlPjxwYXRoIGQ9XFxcIk0xNTc2IDkyN2wtMTMyOCA3MzhxLTIzIDEzLTM5LjUgM3QtMTYuNS0zNnYtMTQ3MnEwLTI2IDE2LjUtMzZ0MzkuNSAzbDEzMjggNzM4cTIzIDEzIDIzIDMxdC0yMyAzMXpcXFwiLz48L3N5bWJvbD48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDE3OTIgMTc5MlxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tcGx1c1xcXCI+PHRpdGxlPnBsdXM8L3RpdGxlPjxwYXRoIGQ9XFxcIk0xNjAwIDczNnYxOTJxMCA0MC0yOCA2OHQtNjggMjhoLTQxNnY0MTZxMCA0MC0yOCA2OHQtNjggMjhoLTE5MnEtNDAgMC02OC0yOHQtMjgtNjh2LTQxNmgtNDE2cS00MCAwLTY4LTI4dC0yOC02OHYtMTkycTAtNDAgMjgtNjh0NjgtMjhoNDE2di00MTZxMC00MCAyOC02OHQ2OC0yOGgxOTJxNDAgMCA2OCAyOHQyOCA2OHY0MTZoNDE2cTQwIDAgNjggMjh0MjggNjh6XFxcIi8+PC9zeW1ib2w+PHN5bWJvbCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNzkyIDE3OTJcXFwiIGlkPVxcXCJsZXBsYXllci1pY29uLXJlZG9cXFwiPjx0aXRsZT5yZWRvPC90aXRsZT48cGF0aCBkPVxcXCJNMTY2NCAyNTZ2NDQ4cTAgMjYtMTkgNDV0LTQ1IDE5aC00NDhxLTQyIDAtNTktNDAtMTctMzkgMTQtNjlsMTM4LTEzOHEtMTQ4LTEzNy0zNDktMTM3LTEwNCAwLTE5OC41IDQwLjV0LTE2My41IDEwOS41LTEwOS41IDE2My41LTQwLjUgMTk4LjUgNDAuNSAxOTguNSAxMDkuNSAxNjMuNSAxNjMuNSAxMDkuNSAxOTguNSA0MC41cTExOSAwIDIyNS01MnQxNzktMTQ3cTctMTAgMjMtMTIgMTQgMCAyNSA5bDEzNyAxMzhxOSA4IDkuNSAyMC41dC03LjUgMjIuNXEtMTA5IDEzMi0yNjQgMjA0LjV0LTMyNyA3Mi41cS0xNTYgMC0yOTgtNjF0LTI0NS0xNjQtMTY0LTI0NS02MS0yOTggNjEtMjk4IDE2NC0yNDUgMjQ1LTE2NCAyOTgtNjFxMTQ3IDAgMjg0LjUgNTUuNXQyNDQuNSAxNTYuNWwxMzAtMTI5cTI5LTMxIDcwLTE0IDM5IDE3IDM5IDU5elxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi1yZWZyZXNoXFxcIj48dGl0bGU+cmVmcmVzaDwvdGl0bGU+PHBhdGggZD1cXFwiTTE2MzkgMTA1NnEwIDUtMSA3LTY0IDI2OC0yNjggNDM0LjV0LTQ3OCAxNjYuNXEtMTQ2IDAtMjgyLjUtNTV0LTI0My41LTE1N2wtMTI5IDEyOXEtMTkgMTktNDUgMTl0LTQ1LTE5LTE5LTQ1di00NDhxMC0yNiAxOS00NXQ0NS0xOWg0NDhxMjYgMCA0NSAxOXQxOSA0NS0xOSA0NWwtMTM3IDEzN3E3MSA2NiAxNjEgMTAydDE4NyAzNnExMzQgMCAyNTAtNjV0MTg2LTE3OXExMS0xNyA1My0xMTcgOC0yMyAzMC0yM2gxOTJxMTMgMCAyMi41IDkuNXQ5LjUgMjIuNXptMjUtODAwdjQ0OHEwIDI2LTE5IDQ1dC00NSAxOWgtNDQ4cS0yNiAwLTQ1LTE5dC0xOS00NSAxOS00NWwxMzgtMTM4cS0xNDgtMTM3LTM0OS0xMzctMTM0IDAtMjUwIDY1dC0xODYgMTc5cS0xMSAxNy01MyAxMTctOCAyMy0zMCAyM2gtMTk5cS0xMyAwLTIyLjUtOS41dC05LjUtMjIuNXYtN3E2NS0yNjggMjcwLTQzNC41dDQ4MC0xNjYuNXExNDYgMCAyODQgNTUuNXQyNDUgMTU2LjVsMTMwLTEyOXExOS0xOSA0NS0xOXQ0NSAxOSAxOSA0NXpcXFwiLz48L3N5bWJvbD48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDE3OTIgMTc5MlxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tdHJhc2hcXFwiPjx0aXRsZT50cmFzaDwvdGl0bGU+PHBhdGggZD1cXFwiTTcwNCAxMzc2di03MDRxMC0xNC05LTIzdC0yMy05aC02NHEtMTQgMC0yMyA5dC05IDIzdjcwNHEwIDE0IDkgMjN0MjMgOWg2NHExNCAwIDIzLTl0OS0yM3ptMjU2IDB2LTcwNHEwLTE0LTktMjN0LTIzLTloLTY0cS0xNCAwLTIzIDl0LTkgMjN2NzA0cTAgMTQgOSAyM3QyMyA5aDY0cTE0IDAgMjMtOXQ5LTIzem0yNTYgMHYtNzA0cTAtMTQtOS0yM3QtMjMtOWgtNjRxLTE0IDAtMjMgOXQtOSAyM3Y3MDRxMCAxNCA5IDIzdDIzIDloNjRxMTQgMCAyMy05dDktMjN6bS01NDQtOTkyaDQ0OGwtNDgtMTE3cS03LTktMTctMTFoLTMxN3EtMTAgMi0xNyAxMXptOTI4IDMydjY0cTAgMTQtOSAyM3QtMjMgOWgtOTZ2OTQ4cTAgODMtNDcgMTQzLjV0LTExMyA2MC41aC04MzJxLTY2IDAtMTEzLTU4LjV0LTQ3LTE0MS41di05NTJoLTk2cS0xNCAwLTIzLTl0LTktMjN2LTY0cTAtMTQgOS0yM3QyMy05aDMwOWw3MC0xNjdxMTUtMzcgNTQtNjN0NzktMjZoMzIwcTQwIDAgNzkgMjZ0NTQgNjNsNzAgMTY3aDMwOXExNCAwIDIzIDl0OSAyM3pcXFwiLz48L3N5bWJvbD48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDE3OTIgMTc5MlxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tdW5kb1xcXCI+PHRpdGxlPnVuZG88L3RpdGxlPjxwYXRoIGQ9XFxcIk0xNjY0IDg5NnEwIDE1Ni02MSAyOTh0LTE2NCAyNDUtMjQ1IDE2NC0yOTggNjFxLTE3MiAwLTMyNy03Mi41dC0yNjQtMjA0LjVxLTctMTAtNi41LTIyLjV0OC41LTIwLjVsMTM3LTEzOHExMC05IDI1LTkgMTYgMiAyMyAxMiA3MyA5NSAxNzkgMTQ3dDIyNSA1MnExMDQgMCAxOTguNS00MC41dDE2My41LTEwOS41IDEwOS41LTE2My41IDQwLjUtMTk4LjUtNDAuNS0xOTguNS0xMDkuNS0xNjMuNS0xNjMuNS0xMDkuNS0xOTguNS00MC41cS05OCAwLTE4OCAzNS41dC0xNjAgMTAxLjVsMTM3IDEzOHEzMSAzMCAxNCA2OS0xNyA0MC01OSA0MGgtNDQ4cS0yNiAwLTQ1LTE5dC0xOS00NXYtNDQ4cTAtNDIgNDAtNTkgMzktMTcgNjkgMTRsMTMwIDEyOXExMDctMTAxIDI0NC41LTE1Ni41dDI4NC41LTU1LjVxMTU2IDAgMjk4IDYxdDI0NSAxNjQgMTY0IDI0NSA2MSAyOTh6XFxcIi8+PC9zeW1ib2w+PHN5bWJvbCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNzkyIDE3OTJcXFwiIGlkPVxcXCJsZXBsYXllci1pY29uLXZvbHVtZS1kb3duXFxcIj48dGl0bGU+dm9sdW1lLWRvd248L3RpdGxlPjxwYXRoIGQ9XFxcIk0xMDg4IDM1MnYxMDg4cTAgMjYtMTkgNDV0LTQ1IDE5LTQ1LTE5bC0zMzMtMzMzaC0yNjJxLTI2IDAtNDUtMTl0LTE5LTQ1di0zODRxMC0yNiAxOS00NXQ0NS0xOWgyNjJsMzMzLTMzM3ExOS0xOSA0NS0xOXQ0NSAxOSAxOSA0NXptMzg0IDU0NHEwIDc2LTQyLjUgMTQxLjV0LTExMi41IDkzLjVxLTEwIDUtMjUgNS0yNiAwLTQ1LTE4LjV0LTE5LTQ1LjVxMC0yMSAxMi0zNS41dDI5LTI1IDM0LTIzIDI5LTM1LjUgMTItNTctMTItNTctMjktMzUuNS0zNC0yMy0yOS0yNS0xMi0zNS41cTAtMjcgMTktNDUuNXQ0NS0xOC41cTE1IDAgMjUgNSA3MCAyNyAxMTIuNSA5M3Q0Mi41IDE0MnpcXFwiLz48L3N5bWJvbD48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDE3OTIgMTc5MlxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tdm9sdW1lLW9mZlxcXCI+PHRpdGxlPnZvbHVtZS1vZmY8L3RpdGxlPjxwYXRoIGQ9XFxcIk0xMjgwIDM1MnYxMDg4cTAgMjYtMTkgNDV0LTQ1IDE5LTQ1LTE5bC0zMzMtMzMzaC0yNjJxLTI2IDAtNDUtMTl0LTE5LTQ1di0zODRxMC0yNiAxOS00NXQ0NS0xOWgyNjJsMzMzLTMzM3ExOS0xOSA0NS0xOXQ0NSAxOSAxOSA0NXpcXFwiLz48L3N5bWJvbD48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDE3OTIgMTc5MlxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tdm9sdW1lLXVwXFxcIj48dGl0bGU+dm9sdW1lLXVwPC90aXRsZT48cGF0aCBkPVxcXCJNODMyIDM1MnYxMDg4cTAgMjYtMTkgNDV0LTQ1IDE5LTQ1LTE5bC0zMzMtMzMzaC0yNjJxLTI2IDAtNDUtMTl0LTE5LTQ1di0zODRxMC0yNiAxOS00NXQ0NS0xOWgyNjJsMzMzLTMzM3ExOS0xOSA0NS0xOXQ0NSAxOSAxOSA0NXptMzg0IDU0NHEwIDc2LTQyLjUgMTQxLjV0LTExMi41IDkzLjVxLTEwIDUtMjUgNS0yNiAwLTQ1LTE4LjV0LTE5LTQ1LjVxMC0yMSAxMi0zNS41dDI5LTI1IDM0LTIzIDI5LTM1LjUgMTItNTctMTItNTctMjktMzUuNS0zNC0yMy0yOS0yNS0xMi0zNS41cTAtMjcgMTktNDUuNXQ0NS0xOC41cTE1IDAgMjUgNSA3MCAyNyAxMTIuNSA5M3Q0Mi41IDE0MnptMjU2IDBxMCAxNTMtODUgMjgyLjV0LTIyNSAxODguNXEtMTMgNS0yNSA1LTI3IDAtNDYtMTl0LTE5LTQ1cTAtMzkgMzktNTkgNTYtMjkgNzYtNDQgNzQtNTQgMTE1LjUtMTM1LjV0NDEuNS0xNzMuNS00MS41LTE3My41LTExNS41LTEzNS41cS0yMC0xNS03Ni00NC0zOS0yMC0zOS01OSAwLTI2IDE5LTQ1dDQ1LTE5cTEzIDAgMjYgNSAxNDAgNTkgMjI1IDE4OC41dDg1IDI4Mi41em0yNTYgMHEwIDIzMC0xMjcgNDIyLjV0LTMzOCAyODMuNXEtMTMgNS0yNiA1LTI2IDAtNDUtMTl0LTE5LTQ1cTAtMzYgMzktNTkgNy00IDIyLjUtMTAuNXQyMi41LTEwLjVxNDYtMjUgODItNTEgMTIzLTkxIDE5Mi0yMjd0NjktMjg5LTY5LTI4OS0xOTItMjI3cS0zNi0yNi04Mi01MS03LTQtMjIuNS0xMC41dC0yMi41LTEwLjVxLTM5LTIzLTM5LTU5IDAtMjYgMTktNDV0NDUtMTlxMTMgMCAyNiA1IDIxMSA5MSAzMzggMjgzLjV0MTI3IDQyMi41elxcXCIvPjwvc3ltYm9sPjwvc3ZnPlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9kaXN0L3N2Zy9zdmctZGVmcy5zdmdcbi8vIG1vZHVsZSBpZCA9IDY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBjb25zdCBwcmVzZXQgPSB7XG5cdG9wdGlvbnMgOiB7XG5cdFx0d2lkdGggOiAnMTAwJScsXG5cdFx0Y29udHJvbHMgOiB7XG5cdFx0XHRjb21tb24gOiBbXG5cdFx0XHRcdFsncGxheScsICd2b2x1bWUnLCAnZGl2aWRlcicsICd0aW1lbGluZScsICdkaXZpZGVyJywgJ2Z1bGxzY3JlZW4nXSxcblx0XHRcdFx0WydyYXRlJywgJ2RpdmlkZXInLCAnYmFja3dhcmQnLCAnZGl2aWRlcicsICdzb3VyY2UnLCAnZGl2aWRlcicsICdkb3dubG9hZCddXG5cdFx0XHRdLFxuXHRcdFx0ZnVsbHNjcmVlbiA6IFtcblx0XHRcdFx0WydwbGF5JywgJ3ZvbHVtZScsICdkaXZpZGVyJywgJ3RpbWVsaW5lJywgJ2RpdmlkZXInLCAncmF0ZScsICdkaXZpZGVyJywgJ2JhY2t3YXJkJywgJ2RpdmlkZXInLCAnc291cmNlJywgJ2RpdmlkZXInLCAnZG93bmxvYWQnLCAnZGl2aWRlcicsICdmdWxsc2NyZWVuJ11cblx0XHRcdF1cblx0XHR9XG5cdH0sXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvcHJlc2V0cy92cHMuanMiLCJleHBvcnQgY29uc3QgcHJlc2V0ID0ge1xuXHRvcHRpb25zIDoge1xuXHRcdHdpZHRoIDogJzEwMCUnLFxuXHRcdGNvbnRyb2xzIDoge1xuXHRcdFx0Y29tbW9uIDogW1xuXHRcdFx0XHRbJ3BsYXknLCAndm9sdW1lJywgJ3RpbWVsaW5lJywgJ3JhdGUnLCAnc291cmNlJywgJ2RpdmlkZXInLCAnZG93bmxvYWQnLCAnZnVsbHNjcmVlbiddLFxuXHRcdFx0XHRbXVxuXHRcdFx0XSxcblx0XHRcdGZ1bGxzY3JlZW4gOiBbXG5cdFx0XHRcdFsncGxheScsICd2b2x1bWUnLCAndGltZWxpbmUnLCAncmF0ZScsICdzb3VyY2UnLCAnZGl2aWRlcicsICdkb3dubG9hZCcsICdmdWxsc2NyZWVuJ10sXG5cdFx0XHRdXG5cdFx0fVxuXHR9LFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL3ByZXNldHMvc21zLmpzIiwiZXhwb3J0IGNvbnN0IHByZXNldCA9IHtcblx0b3B0aW9ucyA6IHtcblx0XHR3aWR0aCA6ICcxMDAlJyxcblx0XHRjb250cm9scyA6IHtcblx0XHRcdGNvbW1vbiA6IFtcblx0XHRcdFx0WydwbGF5JywgJ3ZvbHVtZScsICd0aW1lbGluZScsICdyYXRlJywgJ3NvdXJjZScsICdkaXZpZGVyJywgJ2Z1bGxzY3JlZW4nXSxcblx0XHRcdFx0W11cblx0XHRcdF0sXG5cdFx0XHRmdWxsc2NyZWVuIDogW1xuXHRcdFx0XHRbJ3BsYXknLCAndm9sdW1lJywgJ3RpbWVsaW5lJywgJ3JhdGUnLCAnc291cmNlJywgJ2RpdmlkZXInLCAnZnVsbHNjcmVlbiddLFxuXHRcdFx0XVxuXHRcdH1cblx0fSxcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9wcmVzZXRzL2NvbXByZXNzZWQuanMiLCJleHBvcnQgY29uc3QgcHJlc2V0ID0ge1xuXHRvcHRpb25zIDoge1xuXHRcdGVudGl0eSA6ICdZb3V0dWJlJyxcblx0XHRjb250cm9scyA6IHtcblx0XHRcdGNvbW1vbiA6IFtcblx0XHRcdFx0WydwbGF5JywgJ3ZvbHVtZScsICd0aW1lbGluZScsICdyYXRlJywgJ2JhY2t3YXJkJywgJ3NvdXJjZScsICdkaXZpZGVyJywgJ3NlY3Rpb24nLCAnZnVsbHNjcmVlbiddLFxuXHRcdFx0XHRbXVxuXHRcdFx0XSxcblx0XHRcdGZ1bGxzY3JlZW4gOiBbXG5cdFx0XHRcdFsncGxheScsICd2b2x1bWUnLCAndGltZWxpbmUnLCAncmF0ZScsICdiYWNrd2FyZCcsICAnc291cmNlJywgJ2RpdmlkZXInLCAnc2VjdGlvbicsICdmdWxsc2NyZWVuJ10sXG5cdFx0XHRdXG5cdFx0fVxuXHR9LFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL3ByZXNldHMveW91dHViZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=