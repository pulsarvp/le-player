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
	Player.version = ("0.3.5");
	
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
	Player.preset('youtube', __webpack_require__(69).preset);

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
			entity: 'Youtube',
			controls: {
				common: [['play', 'volume', 'timeline', 'rate', 'backward', 'source', 'divider', 'section', 'fullscreen'], []],
				fullscreen: [['play', 'volume', 'timeline', 'rate', 'backward', 'source', 'divider', 'section', 'fullscreen']]
			}
		}
	};

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTM4M2Y3MjEwODE4MDg0ZjUyYmUiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2xlLXBsYXllci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCIkXCIiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvQ29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9Db21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvSWNvbi5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9QbGF5QnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy91dGlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9TcGxhc2hJY29uLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL1RpbWVsaW5lL1RpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvQ29udHJvbENvbGxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvU2VjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvRXJyb3JEaXNwbGF5LmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL1Bvc3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvRnVsbHNjcmVlbkFwaS5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvdXRpbHMvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvTWVkaWFFcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9QbGF5Q29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9Wb2x1bWVDb250cm9sLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL0NvbnRyb2xEcm9wZG93bi5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9UaW1lbGluZS9UaW1lbGluZUNvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvQ29udHJvbFRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvVGltZWxpbmUvQnVmZmVyZWRSYW5nZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvVGltZWxpbmUvTWFya2VyLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL1NlY3Rpb25Db250cm9sLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL0NvbnRyb2xDaGVja2JveC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9GdWxsc2NyZWVuQ29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9SYXRlQ29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvdXRpbHMvY29va2llLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL0JhY2t3YXJkQ29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9Tb3VyY2VDb250cm9sLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL0NvbnRyb2xDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvU3VidGl0bGVDb250cm9sLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL0Rvd25sb2FkQ29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9LZXliaW5kaW5nSW5mb0NvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvVGltZUluZm9Db250cm9sLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9lbnRpdHkvSHRtbDUuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2VudGl0eS9FbnRpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2VudGl0eS9Zb3V0dWJlLmpzIiwid2VicGFjazovLy8uL34vYXJyYXkucHJvdG90eXBlLmZpbmQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9kZWZpbmUtcHJvcGVydGllcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L29iamVjdC1rZXlzL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vb2JqZWN0LWtleXMvaXNBcmd1bWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9mb3JlYWNoL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vZXMtYWJzdHJhY3QvZXM2LmpzIiwid2VicGFjazovLy8uL34vZXMtYWJzdHJhY3QvaGVscGVycy9pc05hTi5qcyIsIndlYnBhY2s6Ly8vLi9+L2VzLWFic3RyYWN0L2hlbHBlcnMvaXNGaW5pdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9lcy1hYnN0cmFjdC9oZWxwZXJzL2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2VzLWFic3RyYWN0L2hlbHBlcnMvc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2VzLWFic3RyYWN0L2hlbHBlcnMvbW9kLmpzIiwid2VicGFjazovLy8uL34vZXMtYWJzdHJhY3QvaGVscGVycy9pc1ByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2VzLXRvLXByaW1pdGl2ZS9lczYuanMiLCJ3ZWJwYWNrOi8vLy4vfi9lcy10by1wcmltaXRpdmUvaGVscGVycy9pc1ByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2lzLWNhbGxhYmxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vaXMtZGF0ZS1vYmplY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9pcy1zeW1ib2wvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9mdW5jdGlvbi1iaW5kL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vZnVuY3Rpb24tYmluZC9pbXBsZW1lbnRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2VzLWFic3RyYWN0L2VzNS5qcyIsIndlYnBhY2s6Ly8vLi9+L2VzLXRvLXByaW1pdGl2ZS9lczUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pcy1yZWdleC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2hhcy9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9hcnJheS5wcm90b3R5cGUuZmluZC9pbXBsZW1lbnRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2FycmF5LnByb3RvdHlwZS5maW5kL3BvbHlmaWxsLmpzIiwid2VicGFjazovLy8uL34vYXJyYXkucHJvdG90eXBlLmZpbmQvc2hpbS5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L3N2Zy9zdmctZGVmcy5zdmciLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL3ByZXNldHMvdnBzLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9wcmVzZXRzL3NpbXBsZS5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvcHJlc2V0cy9zbXMuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL3ByZXNldHMvY29tcHJlc3NlZC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvcHJlc2V0cy95b3V0dWJlLmpzIl0sIm5hbWVzIjpbInJlZ2lzdGVyQ29udHJvbCIsImVsZW1lbnQiLCJhZGRDbGFzcyIsImV4Y2x1ZGVBcnJheSIsInNvdXJjZSIsImRpc3QiLCJyZXN1bHQiLCJjb25jYXQiLCJmb3JFYWNoIiwiaW5kZXgiLCJpbmRleE9mIiwiaXRlbSIsInNwbGljZSIsImRlZmF1bHRPcHRpb25zIiwiZW50aXR5IiwiYXV0b3BsYXkiLCJoZWlnaHQiLCJsb29wIiwibXV0ZWQiLCJwcmVsb2FkIiwicG9zdGVyIiwic3ZnUGF0aCIsImlubmFjdGl2aXR5VGltZW91dCIsInJhdGUiLCJzdGVwIiwibWluIiwibWF4IiwiZGVmYXVsdCIsInBsYXliYWNrIiwic2hvcnQiLCJtZWRpdW0iLCJsb25nIiwiY29udHJvbHMiLCJjb21tb24iLCJmdWxsc2NyZWVuIiwibWluaSIsImNvbnRyb2xzT3B0aW9ucyIsImFsaWduIiwidm9sdW1lIiwibXV0ZWxpbWl0Iiwia2V5QmluZGluZyIsImtleSIsImluZm8iLCJkZXNjcmlwdGlvbiIsImZuIiwicGxheWVyIiwidmlkZW8iLCJ0b2dnbGVQbGF5IiwiY3VycmVudFRpbWUiLCJvcHRpb25zIiwic3BsYXNoSWNvbiIsInNob3ciLCJzaGlmdEtleSIsInNlY3Rpb25zIiwicHJldiIsIm5leHQiLCJjYWxjVm9sdW1lSWNvbiIsInRvZ2dsZUZ1bGxzY3JlZW4iLCJwbHVnaW5zIiwibWluaXBsYXllciIsIm9uUGxheWVySW5pdGVkIiwiUGxheWVyIiwiY3JlYXRlRWxlbWVudCIsIl9lbGVtZW50IiwiaW5uZXJFbGVtZW50IiwiX3VzZXJPcHRpb25zIiwiX2luaXRPcHRpb25zIiwiX2xvYWRTVkdTcHJpdGUiLCJkZWZhdWx0U3ByaXRlIiwiX3ZpZXciLCJsb2FkRW50aXR5IiwiY3R4IiwiX2luaXRDb250cm9scyIsIl9kYmxjbGlja1RpbWVvdXQiLCJfaW5pdFNlY3Rpb25zIiwidGhlbiIsImRhdGEiLCJzZWN0aW9uc0NvbXBvbmVudCIsInRyaWdnZXIiLCJfaW5pdFBsdWdpbnMiLCJfbGlzdGVuSG90S2V5cyIsIl91c2VyQWN0aXZpdHkiLCJfbGlzdGVuVXNlckFjdGl2aXR5IiwiX3dhaXRpbmdUaW1lb3V0cyIsIm9uIiwiZXZlbnROYW1lIiwib25lIiwicmVtb3ZlQ2xhc3MiLCJ0aW1lIiwiZHVyYXRpb24iLCJlcnJvciIsIl9zdGFydFdhaXRpbmciLCJfc3RvcFdheXRpbmciLCJlIiwidXJsIiwicGxheSIsInBhdXNlZCIsInBhdXNlIiwiY29kZSIsImluaXQiLCJzcmMiLCJfb25GdWxsc2NyZWVuQ2hhbmdlIiwiYmluZCIsIl9vbkNsaWNrIiwiX29uRGJjbGljayIsIl9vbkluaXRlZCIsIl9vblBsYXkiLCJfb25QYXVzZSIsImRvY3VtZW50IiwiZnVsbHNjcmVlbmNoYW5nZSIsIl9vbkVudGl0eUZ1bGxzY3JlbkNoYW5nZSIsIm5hbWUiLCJFbnRpdHkiLCJnZXRDb21wb25lbnQiLCJfZW50aXR5IiwibG9hZCIsInZpZXciLCJhcmdzIiwiZGZkIiwiRGVmZXJyZWQiLCJfZGF0YSIsInVuZGVmaW5lZCIsInJlc29sdmUiLCJwcm9taXNlIiwiYWpheCIsIm1ldGhvZCIsImRhdGFUeXBlIiwiZ2V0RGF0YSIsImZzQXBpIiwicmVxdWVzdEZ1bGxzY3JlZW4iLCJzdXBwb3J0c0Z1bGxTY3JlZW4iLCJlbnRlckZ1bGxzY3JlZW4iLCJleGl0RnVsbHNjcmVlbiIsIndpZHRoIiwibGVuZ3RoIiwibmV3U2VjdGlvbnMiLCJpIiwiZW5kU2VjdGlvbiIsImJlZ2luIiwiZW5kIiwiYXR0ciIsImNzcyIsImVycm9yRGlzcGxheSIsInBsYXlCdXR0b24iLCJsb2FkZXIiLCJhcHBlbmQiLCJpY29uTmFtZSIsImNsYXNzTmFtZSIsInZpZGVvQ29udGFpbmVyIiwibGFzdFRpbWVyIiwidmlkZW9JbmZvIiwiY29uc29sZSIsIndhcm4iLCJpbmZvRWxlbWVudCIsImh0bWwiLCJ0aXRsZSIsInNlY3Rpb25Db250YWluZXIiLCJzZWN0aW9uc0NvbnRhaW5lciIsImJlZm9yZSIsImF0dHJPcHRpb25zIiwicmVkdWNlIiwib2JqIiwidmFsIiwic291cmNlcyIsImZpbmQiLCJlYWNoIiwidmFsdWUiLCJfb3B0aW9uc0Zyb21FbGVtZW50IiwicHJlc2V0T3B0aW9ucyIsInByZXNldCIsImdldFByZXNldCIsImV4dGVuZCIsIkFycmF5IiwiaXNBcnJheSIsImV4Y2x1ZGVDb250cm9scyIsImhhc093blByb3BlcnR5IiwiY29udHJvbENvbGxlY3Rpb24iLCJyb3ciLCJpbml0T3B0aW9ucyIsImFjdGl2ZSIsImlzS2V5QmluZGluZyIsImJpbmRpbmciLCJ3aGljaCIsImN0cmxLZXkiLCJwcmV2ZW50RGVmYXVsdCIsInJlamVjdCIsImdldFNlY3Rpb25EYXRhIiwiZG9uZSIsImlzU2VjdGlvbk91dHNpZGUiLCJfY29tcGxldGVTZWN0aW9ucyIsIml0ZW1zIiwiZnVsbHNjcmVlbk9ubHkiLCJoaWRlU2Nyb2xsIiwib3V0c2lkZVNlY3Rpb25zIiwicGx1Z2luT3B0aW9ucyIsIm1vdXNlSW5Qcm9ncmVzcyIsImxhc3RNb3ZlWCIsImxhc3RNb3ZlWSIsIm9uTW91c2VNb3ZlIiwic2NyZWVuWCIsInNjcmVlblkiLCJvbk1vdXNlRG93biIsImNsZWFySW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsIm9uTW91c2VVcCIsImluYWN0aXZpdHlUaW1lb3V0IiwiZGVsYXkiLCJ1c2VyQWN0aXZlIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsInB1c2giLCJjYWxsIiwiZm9jdXMiLCJpc0ZzIiwiZnVsbHNjcmVlbkVsZW1lbnQiLCJlbmRlZCIsIl9lcnJvciIsImhpZGUiLCJfdXNlckFjdGl2ZSIsImdldFVzZXJBY3RpdmUiLCJ0b2dnbGVDbGFzcyIsInBsdWdpbiIsInByb3RvdHlwZSIsInJlZ2lzdGVyQ29tcG9uZW50IiwiZ2V0Q29udHJvbCIsInNlY29uZHNUb1RpbWUiLCJfcHJlc2V0cyIsInN2ZyIsImhpZGRlbkVsZW1lbnQiLCJwcmVwZW5kIiwicmVxdWlyZSIsInZlcnNpb24iLCJ3aW5kb3ciLCIkIiwibGVQbGF5ZXIiLCJvZmZzZXRTaG93Iiwib2Zmc2V0IiwidG9wIiwib3V0ZXJIZWlnaHQiLCJnZXRDb250cm9scyIsImNvbnRyb2xPcHRpb25zIiwiY29udHJvbCIsImRpc2FibGUiLCJpc0Z1bmN0aW9uIiwiZ2V0V2lkdGgiLCJfdXBkYXRlTWluaVBsYXllciIsImZvcmNlIiwic2Nyb2xsVG9wIiwiaGlkZU1pbmlQbGF5ZXIiLCJzaG93TWluaVBsYXllciIsIm9uU2V0VmlldyIsIm9uRGVsVmlldyIsIkNvbnRyb2wiLCJjbGljayIsImxlcGxheWVyX2NvbnRyb2xfY2xpY2siLCJvbkNsaWNrIiwiaWNvbiIsImF0dHJzIiwicm9sZSIsImJ1aWxkQ1NTQ2xhc3MiLCJhcmd1bWVudHMiLCJfZGlzYWJsZSIsIl9jb250cm9scyIsImNvbnRyb2xDbGFzcyIsIkNvbXBvbmVudCIsIl9fbm9kZSIsImJsdXIiLCJldmVudCIsIkV2ZW50IiwidHJpZ2dlckhhbmRsZXIiLCJmbGFnIiwiaGFzQ2xhc3MiLCJjb21wb25lbnQiLCJfY29tcG9uZW50cyIsIkljb24iLCJfdXNlVGFnIiwiY3JlYXRlRWxlbWVudE5TIiwiX3N2Z1RhZyIsIl9pY29uTmFtZSIsImFwcGVuZENoaWxkIiwiYXR0ck5TIiwicmVtb3ZlQXR0cmlidXRlTlMiLCJzZXRBdHRyaWJ1dGVOUyIsIlBsYXlCdXR0b24iLCJpbm5lciIsInBlcmNlbnRpZnkiLCJjcmVhdGVFbCIsIm5vb3AiLCJzZWNvbmRzIiwic2hvd0hvdXJzIiwiaCIsIk1hdGgiLCJmbG9vciIsIm0iLCJzIiwib3V0IiwicGVyY2VudCIsInRhZyIsInByb3BzIiwiZ2V0U2Nyb2xsQmFyV2lkdGgiLCJvdXRlciIsInZpc2liaWxpdHkiLCJvdmVyZmxvdyIsImFwcGVuZFRvIiwid2lkdGhXaXRoU2Nyb2xsIiwib3V0ZXJXaWR0aCIsInJlbW92ZSIsIlNwbGFzaEljb24iLCJUaW1lIiwidXBkYXRlVGV4dCIsInRleHQiLCJDb250cm9sQ29sbGVjdGlvbiIsInBsYXllck9wdGlvbnMiLCJpbmRleFJvdyIsImNyZWF0ZSIsImNvbGxlY3Rpb24iLCJfcm93cyIsImFkZFJvdyIsImVsZW1Sb3ciLCJmaXJzdCIsInNlY29uZCIsImdsb2JhbEFsaWduIiwicm93QWxpZ24iLCJjb250cm9sTmFtZSIsImFkZENvbnRyb2wiLCJfZ2V0Q29udHJvbE9wdGlvbnMiLCJTZWN0aW9ucyIsInNjcm9sbEVsZW1lbnQiLCJfaW5uZXJFbGVtZW50IiwiYWN0aXZlU2VjdGlvbiIsImdldFNlY3Rpb25CeUluZGV4Iiwic2V0QWN0aXZlQnlJbmRleCIsIm9uU2VjdGlvbkNsaWNrIiwiX29uU2VjdGlvbnNUb2dnbGUiLCJvblRpbWVVcGRhdGUiLCJ1cGRhdGVTZWN0aW9uRHVyYXRpb24iLCJzZWN0aW9uSW5kZXgiLCJwYXJzZUludCIsIm5ld0luZGV4IiwicmlnaHQiLCJfY3JlYXRlU2VjdGlvbnMiLCJzZWN0aW9uIiwidGFyZ2V0IiwiY2xvc2VzdCIsInRvcFBvc2l0aW9uIiwicG9zaXRpb24iLCJhbmltYXRlIiwiZW5kU2VjdGlvblRpbWUiLCJjaGVja2VkIiwidG9TdHJpbmciLCJuZXh0SW5mbyIsInRyaW0iLCJyZXBsYWNlV2l0aCIsImNyZWF0ZVNlY3Rpb24iLCJFcnJvckRpc3BsYXkiLCJtZXNzYWdlIiwib25QbGF5ZXJFcnJvciIsIlBvc3RlciIsIl91cmwiLCJGdWxsc2NyZWVuQXBpIiwiYXBpTWFwIiwic3BlY0FwaSIsImJyb3dzZXJBcGkiLCJVU0VSX0FHRU5UIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiSVNfTU9CSUxFIiwidGVzdCIsIklTX0NIUk9NRSIsIklTX0FORFJPSUQiLCJJU19BTkRST0lEX1BIT05FIiwiSVNfSVBBRCIsIklTX0lQSE9ORSIsIklTX0lQT0QiLCJJU19JT1MiLCJJU19TQUZBUkkiLCJNZWRpYUVycm9yIiwiZGVmYXVsdE1lc3NhZ2VzIiwiZXJyb3JUeXBlcyIsImVyck51bSIsIlBsYXlDb250cm9sIiwic2hvd1BhdXNlIiwic2hvd1BsYXkiLCJzaG93UmVwbGF5IiwicmVtb3ZlUmVwbGF5IiwiSW5maW5pdHkiLCJfcmVwbGF5IiwiVm9sdW1lQ29udHJvbCIsImRyYWciLCJtYXJrZXIiLCJsaW5lIiwicCIsImdldFBvc2l0aW9uIiwicGFnZVkiLCJkcm9wZG93bkNvbnRlbnQiLCJtb3VzZW1vdmUiLCJtb3VzZXVwIiwieSIsInRvZ2dsZU11dGVkIiwiZGVmYXVsdFZvbHVtZSIsInJvdW5kIiwiQ29udHJvbERyb3Bkb3duIiwiVGltZWxpbmVDb250cm9sIiwiX29uTWFya2VyTW91c2Vtb3ZlIiwiX29uTWFya2VyTW91c2Vkb3duIiwib25TZWN0aW9uc0luaXQiLCJfb25UaW1lVXBkYXRlIiwiX29uRHVyYXRpb25DaGFuZ2UiLCJtYXJrZXJTaGFkb3ciLCJ4IiwibWFya2VyVGltZSIsImhhcmRNb3ZlIiwidG90YWxUaW1lIiwicGxheWVkUmFuZ2VzIiwiYnVmZmVyZWRSYW5nZXMiLCJwYWdlWCIsIm1vdXNlbGVhdmUiLCJtb3VzZWRvd24iLCJfb25MaW5lQ2xpY2siLCJ0b3VjaG1vdmUiLCJpc05hTiIsInVwZGF0ZVNlY3Rpb25SYW5nZXMiLCJjcmVhdGVTZWN0aW9uUmFuZ2VzIiwibGVmdCIsInRvRml4ZWQiLCJ1cGRhdGVMYWJlbHMiLCJ3YXRjaEJ1ZmZlckludGVydmFsIiwidXBkYXRlUHJvZ3Jlc3NCYXIiLCJFTkQiLCJTVEFSVCIsImxvYWRlZCIsImRvbUl0ZW0iLCJhZGQiLCJidWZmZXJlZCIsImxvYWRlZFNpemUiLCJDb250cm9sVGV4dCIsIl90ZXh0IiwiQnVmZmVyZWRSYW5nZXMiLCJ1cGRhdGUiLCJyYW5nZSIsIk1hcmtlciIsIl9vbk1vdXNlZG93biIsIl9kcmFnIiwiU2VjdGlvbkNvbnRyb2wiLCJfb25TZWN0aW9uc0luaXQiLCJDb250cm9sQ2hlY2tib3giLCJvbkNoZWNrZWQiLCJfY2hlY2tlZCIsIkZ1bGxzY3JlZW5Db250cm9sIiwiUmF0ZUNvbnRyb2wiLCJkb3duQ29udHJvbCIsImRlY3JlYXNlUmF0ZSIsInVwQ29udHJvbCIsImluY3JlYXNlUmF0ZSIsImN1cnJlbnRSYXRlIiwicGFyc2VGbG9hdCIsInJlcGxhY2UiLCJyYXRlTWluIiwicmF0ZU1heCIsImdldCIsIkNvb2tpZSIsImRmbHQiLCJjb29raWVzIiwiY29va2llIiwic3BsaXQiLCJkIiwiRGF0ZSIsInNldERhdGUiLCJ5ZWFyIiwiQmFja3dhcmRDb250cm9sIiwiU291cmNlQ29udHJvbCIsInBsYXliYWNrUXVhbGl0eSIsInF1YWxpdHlMZXZlbHMiLCJnZXRBdmFpbGFibGVRdWFsaXR5TGV2ZWxzIiwiY3VycmVudFF1YWxpdHkiLCJsaXN0IiwiZW1wdHkiLCJlbGVtIiwiYWRkSXRlbSIsIkNvbnRyb2xDb250YWluZXIiLCJfYWN0aXZlIiwiY29udGVudCIsIm9uSXRlbUNsaWNrIiwiY3VycmVudFRhcmdldCIsIlN1YnRpdGxlQ29udHJvbCIsInRyYWNrIiwic3VidGl0bGVzIiwibGFuZ3VhZ2UiLCJEb3dubG9hZENvbnRyb2wiLCJvbkxvYWRTdGFydCIsImhyZWYiLCJkb3dubG9hZCIsImxpbmsiLCJwYXJzZXIiLCJmaWxlTmFtZSIsInBhdGhuYW1lIiwiS2V5QmluZGluZ0luZm9Db250cm9sIiwiaW5mb0NvbnRlbnQiLCJfa2V5IiwiaG90a2V5Iiwia2V5U3RyaW5nIiwiVGltZUluZm9Db250cm9sIiwiX2N1cnJlbnRUaW1lQ29udHJvbCIsIl90b3RhbFRpbWVDb250cm9sIiwiSHRtbDUiLCJtZWRpYSIsImJ1ZmZlclJhbmdlcyIsIl9wbGF5YmFja1F1YWxpdHkiLCJvbkR1cmF0aW9uQ2hhbmdlIiwib25Qcm9ncmVzcyIsIm9uU2Vla2luZyIsIm9uU2Vla2VkIiwib25Wb2x1bWVDaGFuZ2UiLCJvbkRibGNsaWNrIiwib25QbGF5Iiwib25QYXVzZSIsIm9uUmF0ZUNoYW5nZSIsIm9uRW5kZWQiLCJvbkNhbnBsYXlUaHJvdWdoIiwib25XYWl0aW5nIiwib25FcnJvciIsInJlbW92ZUF0dHIiLCJwcm9wIiwibWFwIiwiX2luaXRTdWJ0aXRsZXMiLCJfaW5pdFZpZGVvIiwiX2luaXRSYXRlIiwiX2luaXRWb2x1bWUiLCJ3ZWJraXRFbnRlckZ1bGxTY3JlZW4iLCJuZXR3b3JrU3RhdGUiLCJIQVZFX01FVEFEQVRBIiwid2Via2l0RXhpdEZ1bGxTY3JlZW4iLCJwbGF5ZWQiLCJwbGF5UHJvbWlzZSIsInBhdXNlUHJvbWlzZSIsImRlZmF1bHRSYXRlIiwiX3NlbGYiLCJjaGlsZHJlbiIsInJlYWR5U3RhdGUiLCJIVE1MTWVkaWFFbGVtZW50IiwiSEFWRV9OT1RISU5HIiwiX3RleHRUcmFja3NIYWNrIiwibm90aWZ5IiwidGV4dFRyYWNrcyIsImNsaWVudEhlaWdodCIsImNsaWVudFdpZHRoIiwicGxheWJhY2tSYXRlIiwic2V0IiwiTU9CSUxFX01BWF9SQVRFIiwiU0FGQVJJX01BWF9SQVRFIiwiTU9CSUxFX01JTl9SQVRFIiwiU0FGQVJJX01JTl9SQVRFIiwic3RvcCIsIl9zb3VyY2UiLCJtb2RlIiwibXV0ZSIsInNlZWthYmxlIiwic3RhcnQiLCJjdXJyZW50U3JjIiwiX3RyaWdnZXJTdGFjayIsIl9zdG9wTGlzdGVuIiwiX3Bvc3RlciIsImlubmVySGVpZ2h0IiwiX3JhdGVNYXgiLCJfcmF0ZU1pbiIsImxldmVscyIsInNvbWUiLCJsb2FkU2NyaXB0IiwiZ2V0U2NyaXB0IiwiYXBpTG9hZGVkIiwiWW91dHViZSIsIl9wYXVzZWQiLCJhdmFpbGFibGVSYXRlcyIsImFyciIsInl0UGxheWVyIiwiUVVBTElUWV9OQU1FUyIsInBsYXlWaWRlbyIsInBhdXNlVmlkZW8iLCJpbml0WVRQbGF5ZXIiLCJ5b3V0dWJlRWxlbWVudCIsImJsb2NrZXIiLCJfaW5pdFByb21pc2UiLCJnbG9iYWxPcHRpb25zIiwieXRPcHRpb25zIiwiaXZfbG9hZF9wb2xpY3kiLCJtb2Rlc3RicmFuZGluZyIsInJlbCIsInNob3dpbmZvIiwiY2NfbG9hZF9wb2xpY3kiLCJkaXNhYmxla2IiLCJmcyIsIllUIiwicmVhZHkiLCJ2aWRlb0lkIiwicGxheWVyVmFycyIsImV2ZW50cyIsIm9uUmVhZHkiLCJvbllUUFJlYWR5Iiwib25TdGF0ZUNoYW5nZSIsIm9uWVRQU3RhdGVDaGFuZ2UiLCJvblBsYXliYWNrUmF0ZUNoYW5nZSIsIm9uWVRQUmF0ZUNoYW5nZSIsIm9uUGxheWJhY2tRdWFsaXR5Q2hhbmdlIiwib25ZVFBQbGF5YmFja1F1YWxpdHlDaGFuZ2UiLCJnZXRBdmFpbGFibGVQbGF5YmFja1JhdGVzIiwic2V0QXZhaWxhYmxlUGxheWJhY2tSYXRlcyIsInN0YXRlIiwibGFzdFN0YXRlIiwiUGxheWVyU3RhdGUiLCJVTlNUQVJURUQiLCJFTkRFRCIsIlBMQVlJTkciLCJzZXRQbGF5YmFja1F1YWxpdHkiLCJfbmV4dFBsYXliYWNrUXVhbGl0eSIsImlzU2Vla2luZyIsImVtaXRUaW1ldXBkYXRlIiwiUEFVU0VEIiwiQlVGRkVSSU5HIiwic2Vla2luZ0ludGVydmFsIiwid2FzUGF1c2VkQmVmb3JlU2VlayIsInRpbWVCZWZvcmVTZWVrIiwiaWQiLCJwYXJzZVVybCIsImdldEN1cnJlbnRUaW1lIiwic2Vla1RvIiwiZ2V0RHVyYXRpb24iLCJOYU4iLCJnZXRQbGF5YmFja1JhdGUiLCJzZXRQbGF5YmFja1JhdGUiLCJ1bk11dGUiLCJpc011dGVkIiwic3RhdHVzIiwiZ2V0UGxheWVyU3RhdGUiLCJDVUVEIiwiZ2V0UGxheWJhY2tRdWFsaXR5IiwiZ2V0Vm9sdW1lIiwic2V0Vm9sdW1lIiwicmVnZXgiLCJVUkxfUkVHRVgiLCJtYXRjaCIsInRpbnkiLCJzbWFsbCIsImxhcmdlIiwiaGQ3MjAiLCJoZDEwODAiLCJoaWdocmVzIiwiYXV0byJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUN0Q0E7Ozs7OztBQUVBOzs7O0FBR0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOztBQUNBOztBQUVBOzs7O0FBR0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQWpCQTs7O0FBb0JBLG1CQUFRQSxlQUFSLENBQXdCLFNBQXhCLEVBQW1DLFlBQVc7QUFDN0MsU0FBTztBQUNOQyxZQUFVLHNCQUFFLFFBQUYsRUFBWUMsUUFBWixD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RCxVQUFVO0FBQzdEO0FBQ0EsR0FBRTs7QUFFRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUVBQWdFO0FBQ2hFLEdBQUU7O0FBRUY7QUFDQTtBQUNBLG1DQUFrQyxhQUFhO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRCxpQ0FBZ0M7O0FBRWhDOzs7Ozs7O0FDM1VBO0FBQ0E7QUFDQTs7Ozs7OztBQ0ZBLDRDQUEyQyxnQkFBZ0I7O0FB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QixNQUEvQixFQUF1QyxRQUF2QyxFQUFpRCxTQUFqRCxFQUE0RCxVQUE1RCxFQUF3RSxZQUF4RSxDQURZO0FBTEg7QUFGRjtBQURXLEVBQWYsQzs7Ozs7Ozs7Ozs7QUNBQSxLQUFNdUksMEJBQVM7QUFDckJ4SCxXQUFVO0FBQ1RvRixVQUFRLE1BREM7QUFFVHJHLGFBQVc7QUFDVkMsWUFBUyxDQUNSLENBQUMsTUFBRCxFQUFTLFFBQVQsRUFBbUIsVUFBbkIsRUFBK0IsTUFBL0IsRUFBdUMsUUFBdkMsRUFBaUQsU0FBakQsRUFBNEQsWUFBNUQsQ0FEUSxFQUVSLEVBRlEsQ0FEQztBQUtWQyxnQkFBYSxDQUNaLENBQUMsTUFBRCxFQUFTLFFBQVQsRUFBbUIsVUFBbkIsRUFBK0IsTUFBL0IsRUFBdUMsUUFBdkMsRUFBaUQsU0FBakQsRUFBNEQsWUFBNUQsQ0FEWTtBQUxIO0FBRkY7QUFEVyxFQUFmLEM7Ozs7Ozs7Ozs7O0FDQUEsS0FBTXVJLDBCQUFTO0FBQ3JCeEgsV0FBVTtBQUNUbkMsV0FBUyxTQURBO0FBRVRrQixhQUFXO0FBQ1ZDLFlBQVMsQ0FDUixDQUFDLE1BQUQsRUFBUyxRQUFULEVBQW1CLFVBQW5CLEVBQStCLE1BQS9CLEVBQXVDLFVBQXZDLEVBQW1ELFFBQW5ELEVBQTZELFNBQTdELEVBQXdFLFNBQXhFLEVBQW1GLFlBQW5GLENBRFEsRUFFUixFQUZRLENBREM7QUFLVkMsZ0JBQWEsQ0FDWixDQUFDLE1BQUQsRUFBUyxRQUFULEVBQW1CLFVBQW5CLEVBQStCLE1BQS9CLEVBQXVDLFVBQXZDLEVBQW9ELFFBQXBELEVBQThELFNBQTlELEVBQXlFLFNBQXpFLEVBQW9GLFlBQXBGLENBRFk7QUFMSDtBQUZGO0FBRFcsRUFBZixDIiwiZmlsZSI6ImxlLXBsYXllci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L2pzL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDkzODNmNzIxMDgxODA4NGY1MmJlIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5cbmltcG9ydCBDb250cm9sIGZyb20gJy4vY29tcG9uZW50cy9Db250cm9sJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL0NvbXBvbmVudCc7XG5pbXBvcnQgUGxheUJ1dHRvbiBmcm9tICcuL2NvbXBvbmVudHMvUGxheUJ1dHRvbic7XG5pbXBvcnQgU3BsYXNoSWNvbiBmcm9tICcuL2NvbXBvbmVudHMvU3BsYXNoSWNvbic7XG5cbmltcG9ydCBJY29uIGZyb20gJy4vY29tcG9uZW50cy9JY29uJztcbmltcG9ydCBUaW1lIGZyb20gJy4vY29tcG9uZW50cy9UaW1lbGluZS9UaW1lJztcbmltcG9ydCBDb250cm9sQ29sbGVjdGlvbiBmcm9tICcuL2NvbXBvbmVudHMvQ29udHJvbENvbGxlY3Rpb24nO1xuaW1wb3J0IFNlY3Rpb25zIGZyb20gJy4vY29tcG9uZW50cy9TZWN0aW9ucyc7XG5pbXBvcnQgRXJyb3JEaXNwbGF5IGZyb20gJy4vY29tcG9uZW50cy9FcnJvckRpc3BsYXknO1xuaW1wb3J0IFBvc3RlciBmcm9tICcuL2NvbXBvbmVudHMvUG9zdGVyJztcbmltcG9ydCBGdWxsc2NyZWVuQXBpIGZyb20gJy4vRnVsbHNjcmVlbkFwaSc7XG5cbmltcG9ydCB7IGNyZWF0ZUVsLCBzZWNvbmRzVG9UaW1lLCBub29wIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBJU19JUEhPTkUsIElTX0lQT0QsIElTX0FORFJPSURfUEhPTkUgfSBmcm9tICcuL3V0aWxzL2Jyb3dzZXInO1xuXG5pbXBvcnQgTWVkaWFFcnJvciBmcm9tICcuL01lZGlhRXJyb3InO1xuXG4vLyBSZWdpc3RlciBjb21tb24gY29udHJvbHNcbmltcG9ydCAnLi9jb21wb25lbnRzL1BsYXlDb250cm9sJztcbmltcG9ydCAnLi9jb21wb25lbnRzL1ZvbHVtZUNvbnRyb2wnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvVGltZWxpbmUvVGltZWxpbmVDb250cm9sJztcbmltcG9ydCAnLi9jb21wb25lbnRzL1NlY3Rpb25Db250cm9sJztcbmltcG9ydCAnLi9jb21wb25lbnRzL0Z1bGxzY3JlZW5Db250cm9sJztcbmltcG9ydCAnLi9jb21wb25lbnRzL1JhdGVDb250cm9sJztcbmltcG9ydCAnLi9jb21wb25lbnRzL0JhY2t3YXJkQ29udHJvbCc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9Tb3VyY2VDb250cm9sJztcbmltcG9ydCAnLi9jb21wb25lbnRzL1N1YnRpdGxlQ29udHJvbCc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9Eb3dubG9hZENvbnRyb2wnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvS2V5YmluZGluZ0luZm9Db250cm9sJztcbmltcG9ydCAnLi9jb21wb25lbnRzL1RpbWVJbmZvQ29udHJvbCc7XG5cbmltcG9ydCAnLi9lbnRpdHkvSHRtbDUnO1xuaW1wb3J0ICcuL2VudGl0eS9Zb3V0dWJlJztcblxuaW1wb3J0ICdhcnJheS5wcm90b3R5cGUuZmluZCc7XG5cblxuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ2RpdmlkZXInLCBmdW5jdGlvbigpIHtcblx0cmV0dXJuIHtcblx0XHRlbGVtZW50IDogJCgnPGRpdi8+JykuYWRkQ2xhc3MoJ2RpdmlkZXInKVxuXHR9O1xufSk7XG5cblxuXG4vKipcbiAqIFJldHVybiBhcnJheSB3aXRoIGV4Y2x1ZGVkIGRpc3QncyBpdGVtcyBmcm9tIHNvdXJjZSBhcnJheVxuICpcbiAqIEBhY2Nlc3MgcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gc291cmNlXG4gKiBAcGFyYW0ge0FycmF5fSBkaXN0XG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqL1xuZnVuY3Rpb24gZXhjbHVkZUFycmF5KHNvdXJjZSwgZGlzdCkge1xuXHRjb25zdCByZXN1bHQgPSBbXS5jb25jYXQoc291cmNlKTtcblx0ZGlzdC5mb3JFYWNoKGl0ZW0gPT4ge1xuXHRcdGNvbnN0IGluZGV4ID0gcmVzdWx0LmluZGV4T2YoaXRlbSk7XG5cdFx0aWYgKGluZGV4ID4gLTEpIHtcblx0XHRcdHJlc3VsdC5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdFx0cmV0dXJuXG5cdFx0fVxuXHR9KVxuXG5cdHJldHVybiByZXN1bHQ7XG59XG5cbmNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuXHRlbnRpdHkgOiAnSHRtbDUnLFxuXHRhdXRvcGxheSA6IGZhbHNlLFxuXHRoZWlnaHQgOiAnYXV0bycsXG5cdGxvb3AgOiBmYWxzZSxcblx0bXV0ZWQgOiBmYWxzZSxcblx0cHJlbG9hZCA6ICdtZXRhZGF0YScsXG5cdHBvc3RlciA6IG51bGwsXG5cdHN2Z1BhdGggOiAnJyxcblx0aW5uYWN0aXZpdHlUaW1lb3V0IDogNTAwMCxcblx0cmF0ZSA6IHtcblx0XHRzdGVwIDogMC4yNSxcblx0XHRtaW4gOiAwLjUsXG5cdFx0bWF4IDogNC4wLFxuXHRcdGRlZmF1bHQgOiAxXG5cdH0sXG5cdHBsYXliYWNrIDoge1xuXHRcdHN0ZXAgOiB7XG5cdFx0XHRzaG9ydCA6IDUsXG5cdFx0XHRtZWRpdW0gOiAxMCxcblx0XHRcdGxvbmcgOiAzMFxuXHRcdH1cblx0fSxcblx0Y29udHJvbHMgOiB7XG5cdFx0Y29tbW9uIDogW1xuXHRcdFx0WydwbGF5JywgJ3ZvbHVtZScsICdkaXZpZGVyJywgJ3RpbWVsaW5lJywgICdkaXZpZGVyJywgJ3NlY3Rpb24nLCAnZGl2aWRlcicsICdmdWxsc2NyZWVuJ10sXG5cdFx0XHRbJ3JhdGUnLCAnZGl2aWRlcicsICdiYWNrd2FyZCcsICdkaXZpZGVyJywgJ3NvdXJjZScsICdkaXZpZGVyJywgJ3N1YnRpdGxlJywgJ2RpdmlkZXInLCAnZG93bmxvYWQnLCAnZGl2aWRlcicsICdrZXliaW5kaW5nIGluZm8nXVxuXHRcdF0sXG5cdFx0ZnVsbHNjcmVlbiA6IFtcblx0XHRcdFsncGxheScsICd2b2x1bWUnLCAnZGl2aWRlcicsICd0aW1lbGluZScsICdkaXZpZGVyJywgJ3JhdGUnLCAnZGl2aWRlcicsICdrZXliaW5kaW5nIGluZm8nLCAgJ2RpdmlkZXInLCAnYmFja3dhcmQnLCAnZGl2aWRlcicsICdzb3VyY2UnLCAnZGl2aWRlcicsICdzdWJ0aXRsZScsICdkaXZpZGVyJywgJ2Rvd25sb2FkJywgJ2RpdmlkZXInLCAnc2VjdGlvbicsICdkaXZpZGVyJywgJ2Z1bGxzY3JlZW4nXVxuXHRcdF0sXG5cdFx0bWluaSA6IFtcblx0XHRcdFsncGxheScsICd2b2x1bWUnLCAnZGl2aWRlcicsICdmdWxsc2NyZWVuJywgJ2RpdmlkZXInLCAndGltZWluZm8nXVxuXHRcdF1cblx0fSxcblx0Y29udHJvbHNPcHRpb25zIDoge1xuXG5cdFx0Y29tbW9uIDoge1xuXHRcdFx0YWxpZ24gOiBbJ2p1c3RpZnknLCAnbGVmdCddXG5cdFx0fSxcblxuXHRcdGZ1bGxzY3JlZW4gOiB7XG5cdFx0XHRhbGlnbiA6ICdqdXN0aWZ5J1xuXHRcdH1cblx0fSxcblx0dm9sdW1lIDoge1xuXHRcdGRlZmF1bHQgOiAwLjQsXG5cdFx0bXV0ZWxpbWl0IDogMC4wNSxcblx0XHRzdGVwIDogMC4xXG5cdH0sXG5cdGtleUJpbmRpbmcgOiBbXG5cdFx0e1xuXHRcdFx0a2V5IDogMzIsXG5cdFx0XHRpbmZvIDogWydTcGFjZSddLFxuXHRcdFx0ZGVzY3JpcHRpb24gOiAn0J3QsNGH0LDRgtGMINC/0YDQvtC40LPRgNGL0LLQsNC90LjQtSAvINC/0L7RgdGC0LDQstC40YLRjCDQvdCwINC/0LDRg9C30YMnLFxuXHRcdFx0Zm4gOiAocGxheWVyKSA9PiB7XG5cdFx0XHRcdHBsYXllci52aWRlby50b2dnbGVQbGF5KCk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHR7XG5cdFx0XHRrZXkgOiAzNyxcblx0XHRcdGluZm8gOiBbJ+KGkCddLFxuXHRcdFx0ZGVzY3JpcHRpb24gOiBg0J/QtdGA0LXQvNC+0YLQsNGC0Ywg0L3QsCAxMCDRgdC10LrRg9C90LQg0L3QsNC30LDQtGAsXG5cdFx0XHRmbiA6IChwbGF5ZXIpID0+IHtcblx0XHRcdFx0cGxheWVyLnZpZGVvLmN1cnJlbnRUaW1lIC09IHBsYXllci5vcHRpb25zLnBsYXliYWNrLnN0ZXAubWVkaXVtO1xuXHRcdFx0XHRwbGF5ZXIuc3BsYXNoSWNvbi5zaG93KCd1bmRvJyk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHR7XG5cdFx0XHRrZXkgOiAzOSxcblx0XHRcdGluZm8gOiBbJ+KGkiddLFxuXHRcdFx0ZGVzY3JpcHRpb24gOiBg0J/QtdGA0LXQvNC+0YLQsNGC0Ywg0L3QsCAxMCDRgdC10LrRg9C90LQg0LLQv9C10YDRkdC0YCxcblx0XHRcdGZuIDogKHBsYXllcikgPT4ge1xuXHRcdFx0XHRwbGF5ZXIudmlkZW8uY3VycmVudFRpbWUgKz0gcGxheWVyLm9wdGlvbnMucGxheWJhY2suc3RlcC5tZWRpdW07XG5cdFx0XHRcdHBsYXllci5zcGxhc2hJY29uLnNob3coJ3JlZG8nKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdHtcblx0XHRcdHNoaWZ0S2V5IDogdHJ1ZSxcblx0XHRcdGluZm8gOiBbJ1NoaWZ0JywgJ+KGkCddLFxuXHRcdFx0ZGVzY3JpcHRpb24gOiAn0J/QtdGA0LXQudGC0Lgg0L3QsCDQv9GA0LXQtNGL0LTRg9GJ0YPRjiDRgdC10LrRhtC40Y4nLFxuXHRcdFx0a2V5IDogMzcsXG5cdFx0XHRmbiA6IChwbGF5ZXIpID0+IHtcblx0XHRcdFx0aWYocGxheWVyLnNlY3Rpb25zID09IG51bGwpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0cGxheWVyLnNlY3Rpb25zLnByZXYoKTtcblxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0c2hpZnRLZXkgOiB0cnVlLFxuXHRcdFx0a2V5IDogMzksXG5cdFx0XHRpbmZvIDogWydTaGlmdCcsICfihpInXSxcblx0XHRcdGRlc2NyaXB0aW9uIDogJ9Cf0LXRgNC10LnRgtC4INC90LAg0YHQu9C10LTRg9GO0YnRg9GOINGB0LXQutGG0LjRjicsXG5cdFx0XHRmbiA6IChwbGF5ZXIpID0+IHtcblx0XHRcdFx0aWYocGxheWVyLnNlY3Rpb25zID09IG51bGwpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0cGxheWVyLnNlY3Rpb25zLm5leHQoKVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0a2V5IDogMzgsXG5cdFx0XHRpbmZvIDogWyfihpEnXSxcblx0XHRcdGRlc2NyaXB0aW9uIDogJ9Cj0LLQtdC70LjRh9C40YLRjCDQs9GA0L7QvNC60L7RgdGC0YwnLFxuXHRcdFx0Zm4gOiAocGxheWVyKSA9PiB7XG5cdFx0XHRcdHBsYXllci52aWRlby52b2x1bWUgKz0gcGxheWVyLm9wdGlvbnMudm9sdW1lLnN0ZXA7XG5cblx0XHRcdFx0cGxheWVyLnNwbGFzaEljb24uc2hvdyhwbGF5ZXIuY2FsY1ZvbHVtZUljb24ocGxheWVyLnZpZGVvLnZvbHVtZSkpO1xuXG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdHtcblx0XHRcdGtleSA6IDQwLFxuXHRcdFx0aW5mbyA6IFsn4oaTJ10sXG5cdFx0XHRkZXNjcmlwdGlvbiA6ICfQo9C80LXQvdGM0YjQuNGC0Ywg0LPRgNC+0LzQutC+0YHRgtGMJyxcblx0XHRcdGZuIDogKHBsYXllcikgPT4ge1xuXHRcdFx0XHRwbGF5ZXIudmlkZW8udm9sdW1lIC09IHBsYXllci5vcHRpb25zLnZvbHVtZS5zdGVwO1xuXG5cdFx0XHRcdHBsYXllci5zcGxhc2hJY29uLnNob3cocGxheWVyLmNhbGNWb2x1bWVJY29uKHBsYXllci52aWRlby52b2x1bWUpKTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0e1xuXHRcdFx0a2V5IDogNzAsXG5cdFx0XHRpbmZvIDogWydmJ10sXG5cdFx0XHRkZXNjcmlwdGlvbiA6ICfQntGC0LrRgNGL0YLRjC/Qt9Cw0LrRgNGL0YLRjCDQv9C+0LvQvdC+0Y3QutGA0LDQvdGL0Lkg0YDQtdC20LjQvCcsXG5cdFx0XHRmbiA6IChwbGF5ZXIpID0+IHtcblx0XHRcdFx0cGxheWVyLnRvZ2dsZUZ1bGxzY3JlZW4oKTtcblx0XHRcdH1cblx0XHR9XG5cdF0sXG5cdHBsdWdpbnMgOiB7XG5cdFx0bWluaXBsYXllciA6IHt9XG5cdH0sXG5cdG9uUGxheWVySW5pdGVkIDogbm9vcFxufTtcblxuLyoqXG4gKiBAY2xhc3MgUGxheWVyXG4gKiBAZXh0ZW5kcyBDb21wb25lbnRcbiAqIEBwYXJhbSB7alF1ZXJ5fSBlbGVtZW50IEVsZW1lbnQgd2hlbiBwbGF5ZXIgd2lsbCBpbml0XG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmF1dG9wbGF5PWZhbHNlXVxuICogV2hlbiBwcmVzZW50LCB0aGUgdmlkZW8gd2lsbCBhdXRvbWF0aWNhbGx5IHN0YXJ0IHBsYXlpbmcgYXMgc29vbiBhcyBpdCBjYW4gZG8gc28gd2l0aG91dCBzdG9wcGluZy5cbiAqIEBwYXJhbSB7U3RyaW5nfE51bWJlcn0gW29wdGlvbnMuaGVpZ2h0PSdhdXRvJ10gSGVpZ2h0IG9mIHZpZGVvIGNvbnRhaW5lclxuICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLndpZHRoXSBXaWR0aCBvZiB2aWRlbyBjb250YWluZXJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMubG9vcD1mYWxzZV1cbiAqIFdoZW4gcHJlc2VudCwgaXQgc3BlY2lmaWVzIHRoYXQgdGhlIHZpZGVvIHdpbGwgc3RhcnQgb3ZlciBhZ2FpbiwgZXZlcnkgdGltZSBpdCBpcyBmaW5pc2hlZC5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMubXV0ZWQ9ZmFsc2VdXG4gKiBXaGVuIHByZXNlbnQsIGl0IHNwZWNpZmllcyB0aGF0IHRoZSBhdWRpbyBvdXRwdXQgb2YgdGhlIHZpZGVvIHNob3VsZCBiZSBtdXRlZC5cbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5wcmVsb2FkPSdtZXRhZGF0YSddIENhbiBiZSAoJ2F1dG8nfCdtZXRhZGF0YSd8J25vbmUnKVxuICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLnBvc3Rlcl0gUGF0aCB0byBwb3N0ZXIgb2YgdmlkZW9cbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5zdmdQYXRoXSBQYXRoIHRvIHN2ZyBzcHJpdGUgZm9yIGljb25zXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMucmF0ZV0gUmF0ZSBvcHRpb25zXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMucmF0ZS5zdGVwPTAuMjVdIFN0ZXAgb2YgaW5jcmVhc2UvZGVjcmVhc2UgYnkgcmF0ZSBjb250cm9sXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMucmF0ZS5taW49MC41XSBNaW4gb2YgcmF0ZVxuICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLnJhdGUubWF4PTQuMF0gTWF4IG9mIHJhdGVcbiAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5yYXRlLmRlZmF1bHQ9MV1cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5wbGF5YmFja10gUGxheWJhY2sgb3B0aW9uc1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLnBsYXliYWNrLnN0ZXBdXG4gKiBAcGFyYW0ge051Ym1lcn0gW29wdGlvbnMucGxheWJhY2suc3RlcC5zaG9ydD01XVxuICogQHBhcmFtIHtOdWJtZXJ9IFtvcHRpb25zLnBsYXliYWNrLnN0ZXAubWVkaXVtPTMwXVxuICogQHBhcmFtIHtOdWJtZXJ9IFtvcHRpb25zLnBsYXliYWNrLnN0ZXAubG9uZz02MF1cbiAqIEBwYXJhbSB7T2JlamN0fSBbb3B0aW9ucy5jb250cm9sc10gT2JqZWN0IG9mIGNvbnRyb2xzXG4gKiBAcGFyYW0ge1N0cmluZ1tdfSBbb3B0aW9ucy5jb250cm9scy5jb21tb25dIEFycmF5IG9mIGNvbnRyb2xzIGZvciBkZWZhdWx0IHZpZXdcbiAqIEBwYXJhbSB7U3RyaW5nW119IFtvcHRpb25zLmNvbnRyb2xzLmZ1bGxzY3JlZW5dIEFycmF5IG9mIGNvbnRyb2wgZm9yIGZ1bGxzcmVlbiB2aWV3XG4gKiBAcGFyYW0ge1N0cmluZ1tdfSBbb3B0aW9ucy5jb250cm9scy5taW5pXSBBcnJheSBvZiBjb250cm9sIGZvciBtaW5pcGxheWVyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMuZXhjbHVkZUNvbnRyb2xzXSBPYmplY3Qgb2YgZXhjbHVkZSBjb250cm9scy4gU3RydWN0dXJlIGlzIHRoZSBzYW1lIGFzIHRoYXQgb2Ygb3B0aW9ucy5jb250cm9sc1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLnZvbHVtZV0gVm9sdW1lJ3Mgb3B0aW9uc1xuICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLnZvbHVtZS5kZWZhdWx0PTAuNF0gRGVmYXVsdCB2b2x1bWVcbiAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy52b2x1bWUubXV0ZWxpbWl0PTAuMDVdIERlbHRhIHdoZW4gdm9sdW1lIGlzIG11dGVkXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMudm9sdW1lLnN0ZXA9MC4wNV1cbiAqIEBwYXJhbSB7T2JqZWN0W119IFtvcHRpb25zLmtleWJpbmRpbmddXG4gKiBPYmplY3Qgd2l0aCBrZXliaW5kaW5nIG9wdGlvbnMsIHdoZW4ga2V5IGl0J3MgbmFtZSBvZiBrZXkgYmluZGluZywgYW5kIHZhbHVlIGl0J3Mga2V5IGJpbmRpbmcgc2V0dGluZ3NcbiAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5rZXliaW5kaW5nW10ua2V5XSBDb2RlIG9mIGtleSBiaW5kaW5nIChmb3IgZXhhbXBsZSAzMiBpdCdzIHNwYWNlKVxuICogQHBhcmFtIHtTdHJpbmdbXX0gW29wdGlvbnMua2V5YmluZGluZ1tdLmluZm9dIEFycmF5IG9mIGtleXN0cm9rZXMgb3JkZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSBvcHRpb25zLmtleWJpbmRpbmdbXS5kZXNjcmlwdGlvbl0gRGVzY3JpcHRpb24gb2Yga2V5IGJpbmRpbmdcbiAqIEBwYXJhbSB7RnVuY3Rpb259IG9wdGlvbnMua2V5YmluZGluZ1tdLmZuXSBDYWxsYmFja1xuICogQHBhcmFtIHtPYmplY3R8Qm9vbGVhbn0gW29wdGlvbnMubWluaXBsYXllcj1mYWxzZV1cbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5taW5pcGxheWVyLndpZHRoXSBXaWR0aCBvZiBtaW5pcGxheWVyIGNvbnRhaW5lclxuICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLm1pbmlwbGF5ZXIud2lkdGhdIE1pbmlQbGF5ZXIncyB3aWR0aFxuICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLnNlY3Rpb25Db250YWluZXJdIFNlbGVjdG9yIGZvciBzZWN0aW9uc1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLnBsdWdpbnNdIEtleXMgb2Ygb2JqZWN0cyBhcmUgbmFtZSBvZiBwbHVnaW4sIHZhbHVlIC0gcGx1Z2luIG9wdGlvbnNcbiAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH0gW29wdGlvbnMuZGF0YV0gVXJsIG9yIEpTT04gd2l0aCBkYXRhIGZvciBwbGF5ZXJcbiAqIEBwYXJhbSB7QXJyYXl9IFtvcHRpb25zLmRhdGEuc2VjdGlvbnNdIFNlY3Rpb25zIGFycmF5XG4gKi9cblxuY2xhc3MgUGxheWVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucykge1xuXG5cdFx0b3B0aW9ucy5jcmVhdGVFbGVtZW50ID0gZmFsc2U7XG5cblx0XHRzdXBlcihudWxsLCBvcHRpb25zKTtcblxuXHRcdHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xuXG5cdFx0LyoqXG5cdFx0ICogRE9NIGNvbnRhaW5lciB0byBob2xkIGlubmVyIG9mIHBsYXllclxuXHRcdCAqXG5cdFx0ICogQG1lbWJlcm9mISBQbGF5ZXIjXG5cdFx0ICogQHR5cGUge2pRdWVyeX1cblx0XHQgKi9cblx0XHR0aGlzLmlubmVyRWxlbWVudCA9IGNyZWF0ZUVsKCdkaXYnKTtcblxuXHRcdC8vIFVzZXJzIG9wdGlvbnNcblx0XHR0aGlzLl91c2VyT3B0aW9ucyA9IG9wdGlvbnM7XG5cdFx0dGhpcy5faW5pdE9wdGlvbnMoKTtcblxuXHRcdGlmKHRoaXMub3B0aW9ucy5zdmdQYXRoID09PSAnJykge1xuXHRcdFx0UGxheWVyLl9sb2FkU1ZHU3ByaXRlKFBsYXllci5kZWZhdWx0U3ByaXRlKTtcblx0XHR9XG5cblx0XHR0aGlzLl92aWV3ID0gJ2NvbW1vbic7XG5cblx0XHQvKipcblx0XHQgKiBET00gY29udGFpbmVyIHRvIGhvbGQgYWxsIHBsYXllclxuXHRcdCAqXG5cdFx0ICogQG1lbWJlcm9mISBQbGF5ZXIjXG5cdFx0ICogQHR5cGUge2pRdWVyeX1cblx0XHQgKi9cblx0XHR0aGlzLmVsZW1lbnQgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoKTtcblxuXHRcdHRoaXMubG9hZEVudGl0eSh0aGlzLm9wdGlvbnMuZW50aXR5LCB7IGN0eCA6IGVsZW1lbnQgfSk7XG5cdFx0LyoqXG5cdFx0ICogVmlkZW8gaHRtbDUgY29tcG9uZW50XG5cdFx0ICpcblx0XHQgKiBAbWVtYmVyb2YhIFBsYXllciNcblx0XHQgKiBAdHlwZSB7RW50aXR5fVxuXHRcdCAqL1xuXHRcdHRoaXMudmlkZW8gPSB0aGlzLmVudGl0eTtcblxuXHRcdC8vIENyZWF0ZSBjb250cm9sc1xuXHRcdC8vIFRPRE86IG1vdmUgdGhpcyBhY3Rpb24gdG8gdGhlIGNyZWF0ZUVsZW1lbnRcblx0XHR0aGlzLmNvbnRyb2xzID0ge307XG5cdFx0dGhpcy5faW5pdENvbnRyb2xzKCk7XG5cblx0XHQvKipcblx0XHQgKiBAYWNjZXNzIHByaXZhdGVcblx0XHQgKi9cblx0XHR0aGlzLl9kYmxjbGlja1RpbWVvdXQgPSBudWxsO1xuXG5cdFx0dGhpcy5faW5pdFNlY3Rpb25zKCkudGhlbigoZGF0YSkgPT4ge1xuXHRcdFx0dGhpcy5zZWN0aW9ucyA9IGRhdGEuc2VjdGlvbnNDb21wb25lbnQ7XG5cblx0XHRcdC8qKlxuXHRcdFx0ICogU2VjdGlvbnMgaW5pdCBldmVudFxuXHRcdFx0ICpcblx0XHRcdCAqIEBldmVudCBQbGF5ZXIjc2VjdGlvbnNpbml0XG5cdFx0XHQgKiBAZXhhbXBsZVxuXHRcdFx0ICogY29uc3QgcGxheWVyID0gbmV3IFBsYXllcigkKCcjdmlkZW8nKSwgb3B0aW9ucyk7XG5cdFx0XHQgKiBwbGF5ZXIub24oJ3NlY3Rpb25zaW5pdCcsIChlLCBkYXRhKSA9PiBjb3Nub2xlLmxvZyhkYXRhKSk7XG5cdFx0XHQgKlxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLnRyaWdnZXIoJ3NlY3Rpb25zaW5pdCcsIGRhdGEpO1xuXHRcdH0pO1xuXHRcdHRoaXMuX2luaXRQbHVnaW5zKCk7XG5cblx0XHR0aGlzLl9saXN0ZW5Ib3RLZXlzKCk7XG5cblx0XHR0aGlzLl91c2VyQWN0aXZpdHkgPSBmYWxzZTtcblx0XHR0aGlzLl9saXN0ZW5Vc2VyQWN0aXZpdHkoKTtcblxuXHRcdHRoaXMuX3dhaXRpbmdUaW1lb3V0cyA9IFtdO1xuXG5cdFx0LyogUmV0cmlnZ2VyIHtAbGluayBFbnRpdHl9IEV2ZW50cyAqL1xuXHRcdFtcblx0XHRcdC8qKlxuXHRcdFx0ICogZHVyYXRpb25jaGFuZ2UgcGxheWVyIGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciNkdXJhdGlvbmNoYW5nZVxuXHRcdFx0ICovXG5cdFx0XHQnZHVyYXRpb25jaGFuZ2UnLFxuXG5cdFx0XHQvKipcblx0XHRcdCAqIHByb2dyZXNzIGh0bWw1IG1lZGlhIGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciNwcm9ncmVzc1xuXHRcdFx0ICovXG5cdFx0XHQncHJvZ3Jlc3MnLFxuXG5cdFx0XHQvKipcblx0XHRcdCAqIGRibGNsaWNrXG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciNkYmNsaWNrXG5cdFx0XHQgKi9cblx0XHRcdCdkYmxjbGljaycsXG5cblx0XHRcdC8qKlxuXHRcdFx0ICogZGJsY2xpY2tcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI2RiY2xpY2tcblx0XHRcdCAqL1xuXHRcdFx0J2NsaWNrJyxcblxuXG5cdFx0XHQvKipcblx0XHRcdCAqIGNhbnBsYXkgaHRtbDUgbWVkaWEgZXZlbnRcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI2NhbnBsYXlcblx0XHRcdCAqL1xuXHRcdFx0J2NhbnBsYXknLFxuXG5cdFx0XHQvKipcblx0XHRcdCAqIHF1YWxpdHljaGFuZ2UgaHRtbDVcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI3F1YWxpdHljaGFuZ2Vcblx0XHRcdCAqL1xuXHRcdFx0J3F1YWxpdHljaGFuZ2UnXG5cblxuXHRcdF0uZm9yRWFjaChldmVudE5hbWUgPT4ge1xuXHRcdFx0dGhpcy52aWRlby5vbihldmVudE5hbWUsICgpID0+IHtcblx0XHRcdFx0dGhpcy50cmlnZ2VyKGV2ZW50TmFtZSk7XG5cdFx0XHR9KVxuXHRcdH0pO1xuXG5cdFx0dGhpcy52aWRlby5vbmUoJ3BsYXknLCAoKSA9PiB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEZpcnN0IHBsYXkgZXZlbnRcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAZXZlbnQgUGxheWVyI2ZpcnN0cGxheVxuICAgICAgICAgICAgICovXG5cdFx0XHR0aGlzLnRyaWdnZXIoJ2ZpcnN0cGxheScpO1xuXHRcdFx0dGhpcy5yZW1vdmVDbGFzcygnbGVwbGF5ZXItLXZpcmdpbicpO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy52aWRlby5vbigndGltZXVwZGF0ZScsICgpID0+IHtcblx0XHRcdGlmICh0aGlzLnZpZGVvLmN1cnJlbnRUaW1lID4gMCkge1xuXHRcdFx0XHR0aGlzLnJlbW92ZUNsYXNzKCdsZXBsYXllci0tdmlyZ2luJyk7XG5cdFx0XHR9XG5cblx0XHRcdC8qKlxuXHRcdFx0ICogdGltZXVwZGF0ZSBodG1sNSBtZWRpYSBldmVudFxuXHRcdFx0ICpcblx0XHRcdCAqIEBldmVudCBQbGF5ZXIjdGltZXVwZGF0ZVxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLnRyaWdnZXIoJ3RpbWV1cGRhdGUnLCB7IHRpbWUgOiB0aGlzLnZpZGVvLmN1cnJlbnRUaW1lLCBkdXJhdGlvbiA6IHRoaXMudmlkZW8uZHVyYXRpb24gfSk7XG5cblx0XHR9KVxuXG5cdFx0dGhpcy52aWRlby5vbignbG9hZHN0YXJ0JywgKCkgPT4ge1xuXHRcdFx0dGhpcy5yZW1vdmVDbGFzcygnbGVwbGF5ZXItLWVuZGVkJyk7XG5cblx0XHRcdHRoaXMuZXJyb3IgPSBudWxsO1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBsb2Fkc3RhcnQgcGxheWVyIGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciNsb2Fkc3RhcnRcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdsb2Fkc3RhcnQnKTtcblx0XHR9KTtcblxuXHRcdHRoaXMudmlkZW8ub24oJ3NlZWtpbmcnLCAoKSA9PiB7XG5cdFx0XHR0aGlzLl9zdGFydFdhaXRpbmcoKTtcblx0XHRcdC8qKlxuXHRcdFx0ICogc2Vla2luZyBodG1sNSBtZWRpYSBldmVudFxuXHRcdFx0ICpcblx0XHRcdCAqIEBldmVudCBQbGF5ZXIjc2Vla2luZ1xuXHRcdFx0ICovXG5cdFx0XHR0aGlzLnRyaWdnZXIoJ3NlZWtpbmcnKTtcblx0XHR9KTtcblxuXHRcdHRoaXMudmlkZW8ub24oJ3NlZWtlZCcsICgpID0+IHtcblx0XHRcdHRoaXMuX3N0b3BXYXl0aW5nKCk7XG5cdFx0XHQvKipcblx0XHRcdCAqIHNlZWtlZCBodG1sNSBtZWRpYSBldmVudFxuXHRcdFx0ICpcblx0XHRcdCAqIEBldmVudCBQbGF5ZXIjc2Vla2VkXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMudHJpZ2dlcignc2Vla2VkJyk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLnZpZGVvLm9uKCd2b2x1bWVjaGFuZ2UnLCAoKSA9PiB7XG5cdFx0XHQvKipcblx0XHRcdCAqIHZvbHVtZWNoYW5nZSBodG1sNSBtZWRpYSBldmVudFxuXHRcdFx0ICpcblx0XHRcdCAqIEBldmVudCBQbGF5ZXIjdm9sdW1lY2hhbmdlXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMudHJpZ2dlcigndm9sdW1lY2hhbmdlJywgeyB2b2x1bWUgOiB0aGlzLnZpZGVvLnZvbHVtZSB9KTtcblx0XHR9KTtcblxuXHRcdHRoaXMudmlkZW8ub24oJ3Bvc3RlcmNoYW5nZScsIChlLCBkYXRhKSA9PiB7XG5cdFx0XHRjb25zdCB1cmwgPSBkYXRhLnVybDtcblx0XHRcdHRoaXMucG9zdGVyLnVybCA9IHVybDtcblx0XHRcdHRoaXMudHJpZ2dlcigncG9zdGVyY2hhbmdlJyk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLnZpZGVvLm9uKCdwbGF5JywgKGUpID0+IHtcblx0XHRcdHRoaXMucmVtb3ZlQ2xhc3MoJ2xlcGxheWVyLS1lbmRlZCcpO1xuXHRcdFx0dGhpcy5yZW1vdmVDbGFzcygnbGVwbGF5ZXItLXBhdXNlZCcpO1xuXHRcdFx0dGhpcy5hZGRDbGFzcygnbGVwbGF5ZXItLXBsYXlpbmcnKTtcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBwbGF5IGh0bWw1IG1lZGlhIGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciNwbGF5XG5cdFx0XHQgKi9cblx0XHRcdHRoaXMudHJpZ2dlcigncGxheScpO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy52aWRlby5vbigncGF1c2UnLCAoKSA9PiB7XG5cdFx0XHR0aGlzLnJlbW92ZUNsYXNzKCdsZXBsYXllci0tcGxheWluZycpO1xuXHRcdFx0dGhpcy5hZGRDbGFzcygnbGVwbGF5ZXItLXBhdXNlZCcpO1xuXG5cdFx0XHQvKipcblx0XHRcdCAqIHBhdXNlIGh0bWw1IG1lZGlhIGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciNwYXVzZVxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLnRyaWdnZXIoJ3BhdXNlJyk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLnZpZGVvLm9uKCdwbGF5aW5nJywgKCkgPT4ge1xuXHRcdFx0dGhpcy5fc3RvcFdheXRpbmcoKTtcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBwbGF5aW5nIGh0bWw1IG1lZGlhIGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciNwbGF5aW5nXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMudHJpZ2dlcigncGxheWluZycpO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy52aWRlby5vbigncmF0ZWNoYW5nZScsICgpID0+IHtcblx0XHRcdC8qKlxuXHRcdFx0ICogcmF0ZSBodG1sNSBtZWRpYSBldmVudFxuXHRcdFx0ICpcblx0XHRcdCAqIEBldmVudCBQbGF5ZXIjcmF0ZVxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLnRyaWdnZXIoJ3JhdGVjaGFuZ2UnLCB7IHJhdGUgOiB0aGlzLnZpZGVvLnJhdGUgfSk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLnZpZGVvLm9uKCdlbmRlZCcsICgpID0+IHtcblx0XHRcdHRoaXMuYWRkQ2xhc3MoJ2xlcGxheWVyLS1lbmRlZCcpO1xuXG5cdFx0XHRpZih0aGlzLm9wdGlvbnMubG9vcCkge1xuXHRcdFx0XHR0aGlzLmN1cnJlbnRUaW1lID0gMDtcblx0XHRcdFx0dGhpcy52aWRlby5wbGF5KCk7XG5cdFx0XHR9IGVsc2UgaWYgKCF0aGlzLnZpZGVvLnBhdXNlZCkge1xuXHRcdFx0XHR0aGlzLnZpZGVvLnBhdXNlKCk7XG5cdFx0XHR9XG5cblx0XHRcdC8qKlxuXHRcdFx0ICogZW5kZWQgaHRtbDUgbWVkaWEgZXZlbnRcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI2VuZGVkXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMudHJpZ2dlcignZW5kZWQnKTtcblx0XHR9KTtcblxuXHRcdHRoaXMudmlkZW8ub24oJ2NhbnBsYXl0aHJvdWdoJywgKCkgPT4ge1xuXHRcdFx0dGhpcy5fc3RvcFdheXRpbmcoKTtcblx0XHRcdC8qKlxuXHRcdFx0ICogY2FucGxheXRocm91Z2ggaHRtbDUgbWVkaWEgZXZlbnRcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI2NhbnBsYXl0aHJvdWdoXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMudHJpZ2dlcignY2FucGxheXRocm91Z2gnKTtcblx0XHR9KTtcblxuXHRcdHRoaXMudmlkZW8ub24oJ3dhaXRpbmcnLCAoKSA9PiB7XG5cdFx0XHR0aGlzLl9zdGFydFdhaXRpbmcoKTtcblxuXHRcdFx0dGhpcy52aWRlby5vbmUoJ3RpbWV1cGRhdGUnLCAoKSA9PiB0aGlzLl9zdG9wV2F5dGluZygpKTtcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiB3YWl0aW5nIGh0bWw1IG1lZGlhIGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciN3YWl0aW5nXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMudHJpZ2dlcignd2FpdGluZycpO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy52aWRlby5vbignZXJyb3InLCAoZSwgZGF0YSkgPT4ge1xuXHRcdFx0dGhpcy5lcnJvciA9IG5ldyBNZWRpYUVycm9yKGRhdGEuY29kZSk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLnZpZGVvLmluaXQoKS50aGVuKCgpID0+IHtcblx0XHRcdC8qKlxuXHRcdFx0ICogUGxheWVyIGluaXQgZXZlbnRcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI2luaXRlZFxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLnRyaWdnZXIoJ2luaXRlZCcpO1xuXG5cdFx0XHRpZih0aGlzLm9wdGlvbnMudGltZSkge1xuXHRcdFx0XHR0aGlzLmN1cnJlbnRUaW1lID0gdGhpcy5vcHRpb25zLnRpbWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmKHRoaXMudmlkZW8uc3JjICE9IG51bGwgJiYgdGhpcy5vcHRpb25zLmF1dG9wbGF5KSB7XG5cdFx0XHRcdHRoaXMucGxheSgpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cblx0XHR0aGlzLm9uKCdmdWxsc2NyZWVuY2hhbmdlJywgdGhpcy5fb25GdWxsc2NyZWVuQ2hhbmdlLmJpbmQodGhpcykpO1xuXHRcdHRoaXMub24oJ2NsaWNrJywgdGhpcy5fb25DbGljay5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLm9uKCdkYmxjbGljaycsIHRoaXMuX29uRGJjbGljay5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLm9uKCdpbml0ZWQnLCB0aGlzLl9vbkluaXRlZC5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLm9uKCdwbGF5JywgdGhpcy5fb25QbGF5LmJpbmQodGhpcykpO1xuXHRcdHRoaXMub24oJ3BhdXNlJywgdGhpcy5fb25QYXVzZS5iaW5kKHRoaXMpKTtcblxuXHRcdCQoZG9jdW1lbnQpLm9uKEZ1bGxzY3JlZW5BcGkuZnVsbHNjcmVlbmNoYW5nZSwgdGhpcy5fb25FbnRpdHlGdWxsc2NyZW5DaGFuZ2UuYmluZCh0aGlzKSk7XG5cdH1cblxuXHRnZXQgZW50aXR5KCkge1xuXHRcdHJldHVybiB0aGlzLl9lbnRpdHk7XG5cdH1cblxuXHRsb2FkRW50aXR5KG5hbWUsIG9wdGlvbnMpIHtcblx0XHRjb25zdCBFbnRpdHkgPSBQbGF5ZXIuZ2V0Q29tcG9uZW50KG5hbWUpO1xuXHRcdHRoaXMuX2VudGl0eSA9IG5ldyBFbnRpdHkodGhpcywgb3B0aW9ucyk7XG5cdH1cblxuXHQvKipcblx0ICogU3RhcnRzIHBsYXlpbmcgdGhlIHZpZGVvXG5cdCAqXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBleGFtcGxlXG5cdCAqIGNvbnN0IHBsYXllciA9IG5ldyBQbGF5ZXIoJChcIiN2aWRlb1wiKSxvcHRpb25zKTtcblx0ICogJCgnLnNvbWUtYnV0dG9uJykub24oJ2NsaWNrJywgKCkgPT4gcGxheWVyLnBsYXkoKSk7XG5cdCAqL1xuXHRwbGF5KCkge1xuXHRcdHJldHVybiB0aGlzLnZpZGVvLnBsYXkoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBQYXVzZXMgdGhlIGN1cnJlbnRseSBwbGF5aW5nIHZpZGVvXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqL1xuXHRwYXVzZSgpIHtcblx0XHRyZXR1cm4gdGhpcy52aWRlby5wYXVzZSgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRvZ2dsZSB0aGUgY3VycmVudGx5IHBsYXlpbmcgdmlkZW9cblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICovXG5cdHRvZ2dsZVBsYXkoKSB7XG5cdFx0cmV0dXJuIHRoaXMudmlkZW8udG9nZ2xlUGxheSgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEJlZ2luIGxvYWRpbmcgdGhlIHNyYyBkYXRhXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqL1xuXHRsb2FkKCkge1xuXHRcdHJldHVybiB0aGlzLnZpZGVvLmxvYWQoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBPbiBzZXQgdmlldyBjYWxsYmFja1xuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAcGFyYW0ge1N0cmluZ30gdmlldyBWaWV3IG5hbWVcblx0ICogQHJldHVybnMge1BsYXllcn0gdGhpc1xuXHQgKiBAZXhhbXBsZVxuXHQgKiBjb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyKCQoJyN2aWRlbycpLCBvcHRpb25zKTtcblx0ICogcGxheWVyLm9uU2V0VmlldygnbWluaScsICgpID0+IGNvbnNvbGUubG9nKCdNaW5pcGxheWVyIHllYWghJylcblx0ICogICAgIC5vblNldFZpZXcoJ2Z1bGxzY3JlZW4nLCAoKSA9PiBjb25zb2xlLmxvZygnRnVsbHNjcmVlbiBib29tIScpXG5cdCAqICAgICAub25TZXRWaWV3KCdjb21tb24nLCAoKSA9PiBjb25zb2xlLmxvZygnQ29tbW9uIHZpZXcgLSBsb2wnKTtcblx0ICovXG5cdG9uU2V0Vmlldyh2aWV3LCAuLi5hcmdzKSB7XG5cdFx0dGhpcy5vbihgc2V0dmlldy4ke3ZpZXd9YCwgLi4uYXJncyk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8qKlxuXHQgKiBPbiBkZWwgdmlldyBjYWxsYmFja1xuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAcGFyYW0ge1N0cmluZ30gdmlldyBWaWV3IG5hbWVcblx0ICogQHJldHVybnMge1BsYXllcn0gdGhpc1xuXHQgKiBAZXhhbXBsZVxuXHQgKiBjb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyKCQoJyN2aWRlbycpLCBvcHRpb25zKTtcblx0ICogcGxheWVyLm9uRGVsVmlldygnbWluaScsICgpID0+IGNvbnNvbGUubG9nKCdFeGl0IG1pbmlwbGF5ZXInKVxuXHQgKi9cblx0b25EZWxWaWV3KHZpZXcsIC4uLmFyZ3MpIHtcblx0XHR0aGlzLm9uKGBkZWx2aWV3LiR7dmlld31gLCAuLi5hcmdzKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBzb21lIGRhdGEgZm9yIHBsYXllclxuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAcmV0dXJucyB7alF1ZXJ5LnByb21pc2V9IFByb21pc2Vcblx0ICovXG5cdGdldERhdGEoKSB7XG5cdFx0Y29uc3QgZGZkID0gbmV3ICQuRGVmZXJyZWQoKTtcblxuXHRcdGlmICh0aGlzLl9kYXRhICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdGRmZC5yZXNvbHZlKHRoaXMuX2RhdGEpO1xuXHRcdFx0cmV0dXJuIGRmZC5wcm9taXNlKClcblx0XHR9XG5cblx0XHRpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5kYXRhID09PSAnc3RyaW5nJykge1xuXHRcdFx0cmV0dXJuICQuYWpheCh7XG5cdFx0XHRcdHVybCA6IHRoaXMub3B0aW9ucy5kYXRhLFxuXHRcdFx0XHRtZXRob2QgOiAnR0VUJyxcblx0XHRcdFx0ZGF0YVR5cGUgOiAnanNvbidcblx0XHRcdH0pLnByb21pc2UoKTtcblxuXHRcdH0gZWxzZSBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5kYXRhID09PSAnb2JqZWN0Jykge1xuXHRcdFx0ZGZkLnJlc29sdmUodGhpcy5vcHRpb25zLmRhdGEpO1xuXHRcdFx0cmV0dXJuIGRmZC5wcm9taXNlKClcblx0XHR9XG5cdH1cblxuXHRnZXRTZWN0aW9uRGF0YSgpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXREYXRhKClcblx0XHRcdC50aGVuKGRhdGEgPT4ge1xuXHRcdFx0XHRyZXR1cm4gZGF0YS5zZWN0aW9uc1xuXHRcdFx0fSlcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXF1ZXN0IGZ1bGxzY3JlZW5cblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQGZpcmVzIFBsYXllciNmdWxsc2NyZWVuY2hhbmdlXG5cdCAqL1xuXHRyZXF1ZXN0RnVsbHNjcmVlbigpIHtcblx0XHRjb25zdCBmc0FwaSA9IEZ1bGxzY3JlZW5BcGk7XG5cblx0XHRpZihmc0FwaS5yZXF1ZXN0RnVsbHNjcmVlbikge1xuXHRcdFx0Ly8gQ2FsbCBIVE1MNSBWaWRlbyBhcGkgcmVxdWVzdEZ1bGxzY3JlZW5cblx0XHRcdHRoaXMuZWxlbWVudFswXVtmc0FwaS5yZXF1ZXN0RnVsbHNjcmVlbl0oKTtcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBmdWxsc2NyZWVuY2hhbmdlIGh0bWw1IG1lZGlhIGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciNmdWxsc2NyZWVuY2hhbmdlXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMudHJpZ2dlcignZnVsbHNjcmVlbmNoYW5nZScsIHRydWUpO1xuXHRcdH0gZWxzZSBpZiAodGhpcy52aWRlby5zdXBwb3J0c0Z1bGxTY3JlZW4oKSkge1xuXHRcdFx0dGhpcy52aWRlby5lbnRlckZ1bGxzY3JlZW4oKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogRXhpdCBmdWxsc2NyZWVuXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBmaXJlcyBQbGF5ZXIjZnVsbHNjcmVlbmNoYW5nZVxuXHQgKi9cblx0ZXhpdEZ1bGxzY3JlZW4oKSB7XG5cdFx0Y29uc3QgZnNBcGkgPSBGdWxsc2NyZWVuQXBpO1xuXG5cdFx0aWYoZnNBcGkuZXhpdEZ1bGxzY3JlZW4pIHtcblx0XHRcdGRvY3VtZW50W2ZzQXBpLmV4aXRGdWxsc2NyZWVuXSgpO1xuXHRcdH0gZWxzZSBpZiAodGhpcy52aWRlby5zdXBwb3J0c0Z1bGxTY3JlZW4oKSkge1xuXHRcdFx0dGhpcy52aWRlby5leGl0RnVsbHNjcmVlbigpO1xuXHRcdH1cblxuXHRcdHRoaXMudHJpZ2dlcignZnVsbHNjcmVlbmNoYW5nZScsIGZhbHNlKTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIFRvZ2dsZSBmdWxsc2NyZWVuXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBmaXJlcyBQbGF5ZXIjZnVsbHNjcmVlbmNoYW5nZVxuXHQgKi9cblx0dG9nZ2xlRnVsbHNjcmVlbigpIHtcblx0XHRpZih0aGlzLnZpZXcgPT09ICdmdWxsc2NyZWVuJykge1xuXHRcdFx0dGhpcy5leGl0RnVsbHNjcmVlbigpXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucmVxdWVzdEZ1bGxzY3JlZW4oKVxuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgQ29udHJvbENvbGxlY3Rpb24gb2YgUGxheWVyIGJ5IG5hbWUgKGUueCAnY29tbW9uJywgJ2Z1bGxzY3JlZW4nKVxuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSAtIE5hbWUgb2YgQ29udHJvbENvbGxlY3Rpb25cblx0ICogQHJldHVybnMge0NvbnRyb2xDb2xsZWN0aW9ufVxuXHQgKi9cblx0Z2V0Q29udHJvbHMobmFtZSkge1xuXHRcdHJldHVybiB0aGlzLmNvbnRyb2xzW25hbWVdO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybiB0aGUgd2lkdGggb2YgcGxheWVyLlxuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAcmV0dXJucyB7TnVtYmVyfSBXaWR0aCBpbiBweFxuXHQgKi9cblx0Z2V0V2lkdGgoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudC53aWR0aCgpXG5cdH1cblxuXHQvKipcblx0ICogQ29tcGxldGUgdGhlIHNlY3Rpb25zLCBieSB0aGUgYWRkaXRpb25hbCBmaWVsZCAnZW5kJyBpbiBlYWNoIHNlY3Rpb25cblx0ICpcblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBzZWN0aW9ucyAtIFNlY3Rpb25zXG5cdCAqIEByZXR1cm5zIHtPYmplY3R9IE5ldyBzZWN0aW9uc1xuXHQgKi9cblx0X2NvbXBsZXRlU2VjdGlvbnMoc2VjdGlvbnMpIHtcblx0XHRpZiAoc2VjdGlvbnMgPT0gbnVsbCB8fCBzZWN0aW9ucy5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVyblxuXHRcdH1cblx0XHRsZXQgbmV3U2VjdGlvbnMgPSBbXS5jb25jYXQoc2VjdGlvbnMpXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBuZXdTZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuXHRcdFx0bGV0IGVuZFNlY3Rpb247XG5cdFx0XHRpZiAoaSA8IChuZXdTZWN0aW9ucy5sZW5ndGggLSAxKSkge1xuXHRcdFx0XHRlbmRTZWN0aW9uID0gbmV3U2VjdGlvbnNbaSsxXS5iZWdpblxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZW5kU2VjdGlvbiA9IHRoaXMudmlkZW8uZHVyYXRpb247XG5cdFx0XHR9XG5cdFx0XHRuZXdTZWN0aW9uc1tpXS5lbmQgPSBlbmRTZWN0aW9uO1xuXHRcdH1cblx0XHRyZXR1cm4gbmV3U2VjdGlvbnM7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGFuZCBzZXQgdGhlIGN1cnJlbnQgcGxheWJhY2sgcG9zaXRpb24gaW4gdGhlIGF1ZGlvL3ZpZGVvIChpbiBzZWNvbmRzKVxuXHQgKiBHZXR0ZXIgYW5kIHNldHRlclxuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAbWVtYmVyb2YhIFBsYXllciNcblx0ICogQHR5cGUge051Ym1lcn1cblx0ICovXG5cdGdldCBjdXJyZW50VGltZSgpIHtcblx0XHRyZXR1cm4gdGhpcy52aWRlby5jdXJyZW50VGltZTtcblx0fVxuXG5cdHNldCBjdXJyZW50VGltZSh2YWx1ZSkge1xuXHRcdHRoaXMudmlkZW8uY3VycmVudFRpbWUgPSB2YWx1ZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHRoZSBsZW5ndGggb2YgdGhlIGN1cnJlbnQgYXVkaW8vdmlkZW8gKGluIHNlY29uZHMpXG5cdCAqIEdldHRlclxuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAbWVtYmVyb2YhIFBsYXllciNcblx0ICogQHR5cGUge051Ym1lcn1cblx0ICovXG5cdGdldCBkdXJhdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy52aWRlby5kdXJhdGlvbjtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHdoZXRoZXIgdGhlIHBsYXliYWNrIG9mIHRoZSBhdWRpby92aWRlbyBoYXMgZW5kZWQgb3Igbm90XG5cdCAqIEdldHRlclxuXHQgKlxuXHQgKiBAbWVtYmVyb2YhIFBsYXllciNcblx0ICogQHR5cGUge0Jvb2xlYW59XG5cdCAqL1xuXHRnZXQgZW5kZWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMudmlkZW8uZW5kZWQ7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyBhbmQgc2V0IHdoZXRoZXIgdGhlIHBsYXliYWNrIG9mIHRoZSBhdWRpby92aWRlbyBoYXMgZW5kZWQgb3Igbm90XG5cdCAqIEdldHRlciBhbmQgc2V0dGVyXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBtZW1iZXJvZiEgUGxheWVyI1xuXHQgKiBAdHlwZSB7TWVkaWFFcnJvcnxTdHJpbmd9XG5cdCAqIEBmaXJlcyBQbGF5ZXIjZXJyb3Jcblx0ICovXG5cdGdldCBlcnJvcigpIHtcblx0XHRyZXR1cm4gdGhpcy5fZXJyb3IgfHwgbnVsbDtcblx0fVxuXG5cdHNldCBlcnJvcih2YWx1ZSkge1xuXHRcdGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuXHRcdFx0dGhpcy5fZXJyb3IgPSBudWxsO1xuXHRcdFx0dGhpcy5yZW1vdmVDbGFzcygnbGVwbGF5ZXItLWVycm9yJyk7XG5cdFx0XHRpZih0aGlzLmVycm9yRGlzcGxheSkge1xuXHRcdFx0XHR0aGlzLmVycm9yRGlzcGxheS5lbGVtZW50LmhpZGUoKVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXHRcdHRoaXMuX2Vycm9yID0gbmV3IE1lZGlhRXJyb3IodmFsdWUpO1xuXG5cdFx0dGhpcy5hZGRDbGFzcygnbGVwbGF5ZXItLWVycm9yJyk7XG5cblx0XHQvKipcblx0XHQgKiBlcnJvciBldmVudFxuXHRcdCAqXG5cdFx0ICogQGV2ZW50IFBsYXllciNlcnJvclxuXHRcdCAqIEBwcm9wZXJ0eSB7TWVkaWFFcnJvcn0gZXJyb3Jcblx0XHQgKiBAZXhhbXBsZVxuXHRcdCAqIGNvbnN0IHBsYXllciA9IG5ldyBQbGF5ZXIoJCgnI3ZpZGVvJyksIG9wdGlvbnMpO1xuXHRcdCAqIHBsYXllci5vbignZXJyb3InLCAoZSwgZGF0YSkgPT4gY29uc29sZS5lcnJvcihkYXRhLmVycm9yKSk7XG5cdFx0ICovXG5cdFx0dGhpcy50cmlnZ2VyKCdlcnJvcicsIHsgZXJyb3IgOiB0aGlzLl9lcnJvcn0pO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJuIHRoZSBoZWlnaHQgb2YgcGxheWVyLiBJZiB5b3Ugd2FudCBnZXQgaGVpZ2h0IG9ubHkgb2YgdmlkZW8gZWxlbWVudCwgdXNlIHRoaXMudmlkZW8uaGVpZ2h0IG9yIHdoYXRldmVyXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEB0eXBlIHtOdW1iZXJ9XG5cdCAqIEBtZW1iZXJvZiEgUGxheWVyI1xuXHQgKi9cblx0Z2V0IGhlaWdodCgpIHtcblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50LmhlaWdodCgpXG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJuIHVubmVjZXNzYXJ5IHZpZGVvIGhlaWd0aFxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAdHlwZSB7TnVtYmVyfVxuXHQgKiBAbWVtYmVyb2YhIFBsYXllciNcblx0ICovXG5cdGdldCB2aWRlb0hlaWdodCgpIHtcblx0XHRyZXR1cm4gdGhpcy52aWRlby5oZWlnaHQ7XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAdHlwZSB7Qm9vbGVhbn1cblx0ICogQG1lYm1lcm9mISBQbGF5ZXIjXG5cdCAqL1xuXHRnZXQgdXNlckFjdGl2ZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5fdXNlckFjdGl2ZSB8fCBmYWxzZTtcblx0fVxuXG5cdHNldCB1c2VyQWN0aXZlKHZhbHVlKSB7XG5cdFx0aWYodmFsdWUgIT09IHRoaXMuZ2V0VXNlckFjdGl2ZSkge1xuXHRcdFx0dGhpcy5fdXNlckFjdGl2ZSA9IHZhbHVlO1xuXHRcdFx0dGhpcy50b2dnbGVDbGFzcygnbGVwbGF5ZXItLXVzZXItYWN0aXZlJywgdmFsdWUpO1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBVc2VyIGFjdGl2ZSBldmVudFxuXHRcdFx0ICpcblx0XHRcdCAqIEBldmVudCBQbGF5ZXIjdXNlcmFjdGl2ZVxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLnRyaWdnZXIoJ3VzZXJhY3RpdmUnKTtcblx0XHR9XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBTZXQgYW5kIGdldCBwbGF5ZXIgdmlldy4gVmlldyBDYW4gYmUgJ2NvbW1vbicsICdmdWxsc2NyZWVuJywgJ21pbmknd1xuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAdHlwZSB7U3RyaW5nfVxuXHQgKiBAbWVtYmVyb2YhIFBsYXllciNcblx0ICovXG5cdGdldCB2aWV3KCkge1xuXHRcdHJldHVybiB0aGlzLl92aWV3O1xuXHR9XG5cblx0c2V0IHZpZXcodmlldykge1xuXHRcdGlmKHRoaXMudmlldyAhPSBudWxsKSB7XG5cdFx0XHR0aGlzLnJlbW92ZUNsYXNzKGBsZXBsYXllci0tJHt0aGlzLnZpZXd9YCk7XG5cdFx0XHR0aGlzLnRyaWdnZXIoYGRlbHZpZXcuJHt0aGlzLnZpZXd9YCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5fdmlldyA9IHZpZXc7XG5cdFx0dGhpcy5lbGVtZW50LmFkZENsYXNzKGBsZXBsYXllci0tJHt2aWV3fWApXG5cdFx0dGhpcy50cmlnZ2VyKGBzZXR2aWV3LiR7dmlld31gKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlbW92ZSB1bm5lY2Vzc2FyeSBhdHRyaWJ1dGVzLCBhbmQgc2V0IHNvbWUgYXR0cnMgZnJvbSBvcHRpb25zIChsb29wLCBwb3N0ZXIgZXRjLi4uKS4gQ3JlYXRlIG1haW4gRE9NIG9iamVjdHNcblx0ICpcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdGNvbnN0IG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG5cdFx0Y29uc3QgZWxlbWVudCA9IHRoaXMuX2VsZW1lbnQ7XG5cblx0XHR0aGlzLmVsZW1lbnQgPSBjcmVhdGVFbCgnZGl2Jyk7XG5cblxuXHRcdHRoaXMuZWxlbWVudCA9IHRoaXMuZWxlbWVudFxuXHRcdFx0LmFkZENsYXNzKCdsZXBsYXllcicpXG5cdFx0XHQuYXR0cigndGFiaW5kZXgnLCAwKVxuXHRcdFx0LmNzcygnd2lkdGgnLCBvcHRpb25zLndpZHRoICYmICcxMDAlJylcblx0XHRcdC5jc3MoJ21heC13aWR0aCcsIG9wdGlvbnMud2lkdGgpXG5cblx0XHQvKipcblx0XHQgKiBFcnJvciBkaXNwbGF5IGNvbXBvbmVudC5cblx0XHQgKlxuXHRcdCAqIEB0eXBlIHtFcnJvckRpc3BsYXl9XG5cdFx0ICogQG1lbWJlcm9mISBQbGF5ZXIjXG5cdFx0ICovXG5cdFx0dGhpcy5lcnJvckRpc3BsYXkgPSBuZXcgRXJyb3JEaXNwbGF5KHRoaXMpO1xuXG5cblx0XHQvKipcblx0XHQgKiBQbGF5IGJ1dHRvbiBjb21wb25lbnQuXG5cdFx0ICpcblx0XHQgKiBAdHlwZSB7UGxheUJ1dHRvbn1cblx0XHQgKiBAbWVtYmVyb2YhIFBsYXllciNcblx0XHQgKi9cblx0XHR0aGlzLnBsYXlCdXR0b24gPSBuZXcgUGxheUJ1dHRvbih0aGlzKTtcblxuXHRcdC8vIFRPRE86INCS0YvQvdC10YHRgtC4INGN0YLQviDQsiDQvtGC0LTQtdC70YzQvdC10YvQuSDQutC+0LzQv9C+0L3QtdC90YJcblx0XHR0aGlzLmxvYWRlciA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0LmFkZENsYXNzKCdsZXBsYXllci1sb2FkZXItY29udGFpbmVyJylcblx0XHRcdC5hcHBlbmQobmV3IEljb24odGhpcywge1xuXHRcdFx0XHRpY29uTmFtZSA6ICdyZWZyZXNoJyxcblx0XHRcdFx0Y2xhc3NOYW1lIDogJ2xlcGxheWVyLWxvYWRlci1jb250YWluZXJfX2ljb24nXG5cdFx0XHR9KS5lbGVtZW50KTtcblxuXG5cdFx0LyoqXG5cdFx0ICogU3BsYXNoIGljb24gY29tcG9uZW50LlxuXHRcdCAqXG5cdFx0ICogQHR5cGUge1NwbGFzaEljb259XG5cdFx0ICogQG1lbWJlcm9mISBQbGF5ZXIjXG5cdFx0ICovXG5cdFx0dGhpcy5zcGxhc2hJY29uID0gbmV3IFNwbGFzaEljb24odGhpcyk7XG5cblx0XHR0aGlzLnZpZGVvQ29udGFpbmVyID0gY3JlYXRlRWwoJ2RpdicsIHtcblx0XHRcdGNsYXNzTmFtZSA6ICdsZXBsYXllci12aWRlbydcblx0XHR9KVxuXHRcdC5hcHBlbmQodGhpcy5lcnJvckRpc3BsYXkuZWxlbWVudClcblx0XHQuYXBwZW5kKHRoaXMucGxheUJ1dHRvbi5lbGVtZW50KVxuXHRcdC5hcHBlbmQodGhpcy5sb2FkZXIpXG5cdFx0LmFwcGVuZCh0aGlzLnNwbGFzaEljb24uZWxlbWVudClcblxuXHRcdHRoaXMucG9zdGVyID0gbmV3IFBvc3Rlcih0aGlzKTtcblx0XHR0aGlzLnZpZGVvQ29udGFpbmVyLmFwcGVuZCh0aGlzLnBvc3Rlci5lbGVtZW50KTtcblxuXG5cdFx0Y29uc3QgbGFzdFRpbWVyID0gbmV3IFRpbWUodGhpcywge1xuXHRcdFx0Zm4gOiAocGxheWVyKSA9PiB7XG5cdFx0XHRcdGNvbnN0IHZpZGVvID0gcGxheWVyLnZpZGVvO1xuXHRcdFx0XHRyZXR1cm4gc2Vjb25kc1RvVGltZSh2aWRlby5kdXJhdGlvbiAtIHZpZGVvLmN1cnJlbnRUaW1lKTtcblx0XHRcdH1cblx0XHR9KVxuXG5cdFx0aWYodGhpcy5vcHRpb25zLnZpZGVvSW5mbykge1xuXHRcdFx0Y29uc29sZS53YXJuKCdvcHRpb25zLnZpZGVvSW5mbyBpcyBkZXByZWNhdGVkLCBwbGVhc2UgdXNlIGlzdGVhZCBvcHRpb25zLmRlc2NyaXB0aW9uJyk7XG5cdFx0fVxuXG5cdFx0dGhpcy5pbmZvRWxlbWVudCA9IGNyZWF0ZUVsKCdkaXYnLCB7XG5cdFx0XHRjbGFzc05hbWUgOiAnbGVwbGF5ZXJfX2luZm8nXG5cdFx0fSlcblx0XHQuYXBwZW5kKGNyZWF0ZUVsKCdkaXYnLCB7XG5cdFx0XHRjbGFzc05hbWUgOiAnbGVwbGF5ZXJfX3RpdGxlJyxcblx0XHRcdGh0bWwgOiB0aGlzLm9wdGlvbnMudGl0bGUgfHwgXCJcIlxuXHRcdH0pKVxuXHRcdC5hcHBlbmQoY3JlYXRlRWwoJ2RpdicsIHtcblx0XHRcdGNsYXNzTmFtZSA6ICdsZXBsYXllcl9fdmlkZW8taW5mbycsXG5cdFx0XHRodG1sIDogdGhpcy5vcHRpb25zLmRlc2NyaXB0aW9uIHx8IHRoaXMub3B0aW9ucy52aWRlb0luZm8gfHwgXCJcIlxuXHRcdH0pKVxuXHRcdC5hcHBlbmQoY3JlYXRlRWwoJ2RpdicsIHtcblx0XHRcdGNsYXNzTmFtZSA6ICdsZXBsYXllcl9fbGFzdCcsXG5cdFx0XHRodG1sIDogYNCS0LjQtNC10L4g0LfQsNC60L7QvdGH0LjRgtGB0Y8g0YfQtdGA0LXQtyBgLFxuXHRcdH0pLmFwcGVuZChsYXN0VGltZXIuZWxlbWVudCkpXG5cblx0XHR0aGlzLmlubmVyRWxlbWVudCA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0LmFkZENsYXNzKCdsZXBsYXllcl9faW5uZXInKVxuXHRcdFx0LmFwcGVuZCh0aGlzLnZpZGVvQ29udGFpbmVyKVxuXHRcdFx0LmFwcGVuZCh0aGlzLmluZm9FbGVtZW50KVxuXG5cdFx0dGhpcy5lbGVtZW50ID0gdGhpcy5lbGVtZW50XG5cdFx0XHQuYXBwZW5kKHRoaXMuaW5uZXJFbGVtZW50KVxuXG5cdFx0dGhpcy5hZGRDbGFzcygnbGVwbGF5ZXItLXBhdXNlZCcpO1xuXHRcdHRoaXMuYWRkQ2xhc3MoJ2xlcGxheWVyLS12aXJnaW4nKTtcblxuXG5cdFx0aWYob3B0aW9ucy5zZWN0aW9uQ29udGFpbmVyKSB7XG5cdFx0XHR0aGlzLnNlY3Rpb25zQ29udGFpbmVyID0gJChvcHRpb25zLnNlY3Rpb25Db250YWluZXIpO1xuXHRcdH1cblxuXHRcdGVsZW1lbnQuYmVmb3JlKHRoaXMuZWxlbWVudCk7XG5cdFx0dGhpcy52aWRlb0NvbnRhaW5lci5hcHBlbmQoZWxlbWVudCk7XG5cblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50O1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBvcHRpb25zIGZyb20gdmlkZW8ncyBhdHRyaWJ1dGUgKCBoZWlnaHQsIHdpZHRoLCBwb3N0ZXIsIHByZWxvYWQgZXRjLi4uKVxuXHQgKiBHZXQgc291cmNlIHZpZGVvIGZyb20gc3JjIGF0dHIgb3IgPHNvdXJjZT4gZWxlbWVudCB3aXRoIGRhdGEgYXR0ciAnZGF0YS1xdWFsaXR5J1xuXHQgKiBBbHNvIGdldCBzb3VyY2VzIGZvciBkaWZmZXJlbnQgcXVhbGl0eSBmcm9tIDxzb3VyY2U+IGVsZW1lbnQgd2l0aCBkYXRhIGF0dHIgJ2RhdGEtcXVhbGl0eSdcblx0ICpcblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqIEByZXR1cm5zIHtPYmplY3R9IG9wdGlvbnNcblx0ICovXG5cdF9vcHRpb25zRnJvbUVsZW1lbnQoKSB7XG5cdFx0Ly8gQ29weSB2aWRlbyBhdHRycyB0byB0aGUgb3BpdG9uc1xuXHRcdGNvbnN0ICBlbGVtZW50ID0gdGhpcy5fZWxlbWVudDtcblx0XHRpZiAoZWxlbWVudCA9PSBudWxsIHx8IGVsZW1lbnQubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm4ge31cblx0XHR9XG5cblx0XHRsZXQgYXR0ck9wdGlvbnMgPSBbXG5cdFx0XHQnaGVpZ2h0Jyxcblx0XHRcdCd3aWR0aCcsXG5cdFx0XHQncG9zdGVyJyxcblx0XHRcdCdhdXRvcGxheScsXG5cdFx0XHQnbG9vcCcsXG5cdFx0XHQnbXV0ZWQnLFxuXHRcdFx0J3ByZWxvYWQnLFxuXHRcdF1cblx0XHQucmVkdWNlKChvYmosIGl0ZW0pID0+IHtcblx0XHRcdGNvbnN0IHZhbCA9IGVsZW1lbnQuYXR0cihpdGVtKTtcblx0XHRcdGlmKHZhbCAhPSBudWxsKSB7XG5cdFx0XHRcdG9ialtpdGVtXSA9IGVsZW1lbnQuYXR0cihpdGVtKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBvYmo7XG5cdFx0fSwge30pO1xuXG5cdFx0YXR0ck9wdGlvbnMuc291cmNlcyA9IFtdO1xuXG5cdFx0Ly8gU3JjIGl0IGlzIG1haW4gc291cmNlLCB0aGF0IHdpbGwgYmUgbG9hZFxuXHRcdGlmKGVsZW1lbnQuYXR0cignc3JjJykpIHtcblx0XHRcdGF0dHJPcHRpb25zLnNyYyA9IHtcblx0XHRcdFx0dXJsIDogZWxlbWVudC5hdHRyKCdzcmMnKSxcblx0XHRcdFx0dGl0bGUgOiBlbGVtZW50LmF0dHIoJ2RhdGEtcXVhbGl0eScpIHx8IGVsZW1lbnQuYXR0cigndGl0bGUnKSB8fCAnZGVmYXVsdCdcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBDb3B5IHNvdXJjZXMgZnJvbSBIVE1MNSBzb3VyY2UgZWxlbWVudCB3aXRoIGRhdGEtcXVhbGl0eSBhdHRyXG5cdFx0Ly8gSWYgZGF0YS1xdWFsaXR5IGF0dHIgZG9lcyBub3QgZXhpc3QgLSBub1xuXHRcdGVsZW1lbnQuZmluZCgnc291cmNlJykuZWFjaCgoaSwgaXRlbSkgPT4ge1xuXHRcdFx0aXRlbSA9ICQoaXRlbSk7XG5cdFx0XHRpZighaXRlbS5hdHRyKCdkYXRhLXF1YWxpdHknKSkge1xuXHRcdFx0XHRyZXR1cm5cblx0XHRcdH1cblx0XHRcdGF0dHJPcHRpb25zLnNvdXJjZXMgPSBhdHRyT3B0aW9ucy5zb3VyY2VzLmNvbmNhdCh7XG5cdFx0XHRcdHVybCA6IGl0ZW0uYXR0cignc3JjJyksXG5cdFx0XHRcdHRpdGxlIDogaXRlbS5hdHRyKCdkYXRhLXF1YWxpdHknKSB8fCBpdGVtLmF0dHIoJ3RpdGxlJykgfHwgJ2RlZmF1bHQnXG5cdFx0XHR9KVxuXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gYXR0ck9wdGlvbnM7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJuIGEgbmFtZSBvZiBpY29uLiBJZiBsZXNzIHRoZW4gMC4xIHJldHVybiB2b2x1bWUtb2ZmLFxuXHQgKiBpZiBsZXNzIHRoZW4gMC41IHJldHVybiB2b2x1bWUgZG93biwgZWxzZSByZXR1cm4gdm9sdW1lLXVwXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge051bWJlcn0gdmFsdWUgVm9sdW1lIHZhbHVlXG5cdCAqIEByZXR1cm5zIHtTdHJpbmd9IEljb24gbmFtZVxuXHQgKi9cblx0Y2FsY1ZvbHVtZUljb24odmFsdWUpIHtcblx0XHRpZih2YWx1ZSA9PSBudWxsKSB7XG5cdFx0XHR2YWx1ZSA9IHRoaXMudmlkZW8udm9sdW1lO1xuXHRcdH1cblx0XHRjb25zdCB2b2x1bWUgPSB2YWx1ZTtcblxuXHRcdGlmICh2b2x1bWUgPCB0aGlzLm9wdGlvbnMudm9sdW1lLm11dGVsaW1pdCkge1xuXHRcdFx0cmV0dXJuICd2b2x1bWUtb2ZmJztcblx0XHR9IGVsc2UgaWYgKHZhbHVlIDwgMC41KSB7XG5cdFx0XHRyZXR1cm4gJ3ZvbHVtZS1kb3duJztcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuICd2b2x1bWUtdXAnO1xuXHRcdH1cblx0fVxuXG5cblxuXHQvKipcblx0ICogTWVyZ2UgZGVmYXVsdE9wdGlvbnMsIHByZXNldE9wdGlvbnMgd2l0aCBhdHRyT3B0aW9ucyBhbmQgdXNlcidzIG9wdGlvbnM7XG5cdCAqXG5cdCAqIEFuZCBjb21wbGVtZW50IHR3byBvYmplY3RzOiBjb250cm9scyBhbmQgZXhjbHVkZUNvbnRyb2xzXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHQgKi9cblx0X2luaXRPcHRpb25zKCkge1xuXHRcdGNvbnN0IGF0dHJPcHRpb25zID0gdGhpcy5fb3B0aW9uc0Zyb21FbGVtZW50KCk7XG5cdFx0bGV0IHByZXNldE9wdGlvbnMgPSB7fTtcblxuXHRcdGlmICh0aGlzLl91c2VyT3B0aW9ucy5wcmVzZXQgJiYgUGxheWVyLmdldFByZXNldCh0aGlzLl91c2VyT3B0aW9ucy5wcmVzZXQpKSB7XG5cdFx0XHRwcmVzZXRPcHRpb25zID0gUGxheWVyLmdldFByZXNldCh0aGlzLl91c2VyT3B0aW9ucy5wcmVzZXQpLm9wdGlvbnM7XG5cdFx0fVxuXG5cblx0XHQvLyBNZXJnZSBkZWZhdWx0IG9wdGlvbnMgKyBwcmVzZXQgb3B0aW9ucyArIHZpZGVvIGF0dHJpYnV0dHMrIHVzZXIgb3B0aW9uc1xuXHRcdHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHRydWUsIHt9LCBkZWZhdWx0T3B0aW9ucywgcHJlc2V0T3B0aW9ucywgYXR0ck9wdGlvbnMsIHRoaXMuX3VzZXJPcHRpb25zKTtcblxuXHRcdGlmKHRoaXMub3B0aW9ucy5zb3VyY2VzICYmICFBcnJheS5pc0FycmF5KHRoaXMub3B0aW9ucy5zb3VyY2VzKSkge1xuXHRcdFx0dGhpcy5vcHRpb25zLnNvdXJjZXMgPSBbdGhpcy5vcHRpb25zLnNvdXJjZXNdXG5cdFx0fVxuXG5cdFx0aWYodHlwZW9mIHRoaXMub3B0aW9ucy5zcmMgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHR0aGlzLm9wdGlvbnMuc3JjID0geyB1cmwgOiB0aGlzLm9wdGlvbnMuc3JjIH1cblx0XHR9XG5cblx0XHRpZih0aGlzLm9wdGlvbnMuc3JjID09IG51bGwgJiYgdGhpcy5vcHRpb25zLnNvdXJjZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0dGhpcy5vcHRpb25zLnNyYyA9IHRoaXMub3B0aW9ucy5zb3VyY2VzWzBdXG5cdFx0fVxuXG5cdFx0Ly8gTWVyZ2UgY29ycmVjdGx5IGNvbnRyb2xzLCB3aXRob3V0IGRlZXAgbWVyZ2Vcblx0XHR0aGlzLm9wdGlvbnMuY29udHJvbHMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdE9wdGlvbnMuY29udHJvbHMsIHByZXNldE9wdGlvbnMuY29udHJvbHMsIHRoaXMuX3VzZXJPcHRpb25zLmNvbnRyb2xzKTtcblxuXHRcdC8vIGV4Y2x1ZGUgY29udHJvbHMgb3B0aW9uXG5cdFx0Ly8gVE9ETyhhZGludmFkaW0pOlxuXHRcdC8vIFNldCBkZXByZWNldGVkIGZsYWcgZm9yIHRoaXMgb3B0aW9uO1xuXHRcdGZvciAoY29uc3QgbmFtZSBpbiB0aGlzLm9wdGlvbnMuZXhjbHVkZUNvbnRyb2xzKSB7XG5cdFx0XHRpZiAoIXRoaXMub3B0aW9ucy5leGNsdWRlQ29udHJvbHMuaGFzT3duUHJvcGVydHkobmFtZSkpIHJldHVybjtcblx0XHRcdGNvbnN0IGNvbnRyb2xDb2xsZWN0aW9uID0gdGhpcy5vcHRpb25zLmV4Y2x1ZGVDb250cm9sc1tuYW1lXTtcblx0XHRcdGNvbnRyb2xDb2xsZWN0aW9uLmZvckVhY2goKHJvdywgaW5kZXgpID0+IHtcblx0XHRcdFx0aWYgKHRoaXMub3B0aW9ucy5jb250cm9sc1tuYW1lXSAmJiB0aGlzLm9wdGlvbnMuY29udHJvbHNbbmFtZV1baW5kZXhdKSB7XG5cdFx0XHRcdFx0dGhpcy5vcHRpb25zLmNvbnRyb2xzW25hbWVdW2luZGV4XSA9IGV4Y2x1ZGVBcnJheSh0aGlzLm9wdGlvbnMuY29udHJvbHNbbmFtZV1baW5kZXhdLCByb3cpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdH1cblxuXHRcdGlmICh0aGlzLm9wdGlvbnMucHJlc2V0ICYmIFBsYXllci5nZXRQcmVzZXQodGhpcy5vcHRpb25zLnByZXNldCkpIHtcblx0XHRcdFBsYXllci5nZXRQcmVzZXQodGhpcy5vcHRpb25zLnByZXNldCkuaW5pdE9wdGlvbnMoKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQ3JlYXRlIGFuZCBpbml0IGFsbCBjb250cm9sc1xuXHQgKlxuXHQgKiBAYWNjZXNzIHByaXZhdGVcblx0ICovXG5cdF9pbml0Q29udHJvbHMoKSB7XG5cdFx0Zm9yIChjb25zdCBuYW1lIG9mIFsnY29tbW9uJywgJ2Z1bGxzY3JlZW4nXSkge1xuXHRcdFx0aWYgKCF0aGlzLm9wdGlvbnMuY29udHJvbHMuaGFzT3duUHJvcGVydHkobmFtZSkpIHJldHVybjtcblx0XHRcdGNvbnN0IGNvbnRyb2xDb2xsZWN0aW9uID0gbmV3IENvbnRyb2xDb2xsZWN0aW9uKHRoaXMsIHsgbmFtZSB9KTtcblx0XHRcdHRoaXMuZWxlbWVudC5hcHBlbmQoY29udHJvbENvbGxlY3Rpb24uZWxlbWVudCk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuY29udHJvbHMuY29tbW9uICE9IG51bGwpIHtcblx0XHRcdHRoaXMuY29udHJvbHMuY29tbW9uLmFjdGl2ZSA9IHRydWU7XG5cdFx0fVxuXHR9XG5cblxuXHRfbGlzdGVuSG90S2V5cygpIHtcblxuXHRcdGNvbnN0IGlzS2V5QmluZGluZyA9IChlLCBiaW5kaW5nKSA9PiB7XG5cdFx0XHRyZXR1cm4gKChlLndoaWNoID09PSBiaW5kaW5nLmtleSkgfHwgKGUua2V5ID09PSBiaW5kaW5nLmtleSkpICYmXG5cdFx0XHRcdFx0KCEhYmluZGluZy5zaGlmdEtleSA9PT0gZS5zaGlmdEtleSkgJiZcblx0XHRcdFx0XHQoISFiaW5kaW5nLmN0cmxLZXkgPT09IGUuY3RybEtleSlcblx0XHR9XG5cblx0XHR0aGlzLmVsZW1lbnQub24oJ2tleWRvd24ubGVwbGF5ZXIuaG90a2V5JywgKGUpID0+IHtcblx0XHRcdHRoaXMub3B0aW9ucy5rZXlCaW5kaW5nLmZvckVhY2goYmluZGluZyA9PiB7XG5cblx0XHRcdFx0aWYoaXNLZXlCaW5kaW5nKGUsIGJpbmRpbmcpKSB7XG5cdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdGJpbmRpbmcuZm4odGhpcyk7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cblx0XHRcdH0pXG5cdFx0fSlcblx0fVxuXG5cdC8qKlxuXHQgKiBJbml0IHNlY3Rpb25zLCBnZXQgYWpheCBvciBqc29uIHdpdGggc2VjdGlvbnMgZGF0YSBhbmQgY3JlYXRlIFNlY3Rpb25zIG9iamVjdCBhbmQgYWRkZWQgdGhlbSB0byB0aGUgRE9NXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHQgKiBAcmV0dXJucyB7anFQcm9taXNlfSBqUXVlcnkgcHJvbWlzZVxuXHQgKi9cblx0X2luaXRTZWN0aW9ucygpIHtcblx0XHRjb25zdCBkZmQgPSAkLkRlZmVycmVkKCk7XG5cdFx0aWYgKHRoaXMub3B0aW9ucy5kYXRhID09IG51bGwpIHtcblx0XHRcdGRmZC5yZWplY3QobnVsbClcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5nZXRTZWN0aW9uRGF0YSgpLmRvbmUoc2VjdGlvbnMgPT4ge1xuXHRcdFx0XHRzZWN0aW9ucyA9IFsuLi5zZWN0aW9uc107XG5cblx0XHRcdFx0Y29uc3QgaXNTZWN0aW9uT3V0c2lkZSA9ICh0aGlzLnNlY3Rpb25zQ29udGFpbmVyICYmIHRoaXMuc2VjdGlvbnNDb250YWluZXIubGVuZ3RoID4gMCk7XG5cblx0XHRcdFx0aWYgKHNlY3Rpb25zID09IG51bGwgfHwgc2VjdGlvbnMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0ZGZkLnJlamVjdChudWxsKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRzZWN0aW9ucyA9IHRoaXMuX2NvbXBsZXRlU2VjdGlvbnMoc2VjdGlvbnMpO1xuXG5cdFx0XHRcdGNvbnN0IHNlY3Rpb25zQ29tcG9uZW50ID0gbmV3IFNlY3Rpb25zKHRoaXMsIHtcblx0XHRcdFx0XHRpdGVtcyA6IHNlY3Rpb25zLFxuXHRcdFx0XHRcdGZ1bGxzY3JlZW5Pbmx5IDogaXNTZWN0aW9uT3V0c2lkZSxcblx0XHRcdFx0XHRoaWRlU2Nyb2xsIDogdHJ1ZVxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHR0aGlzLmlubmVyRWxlbWVudC5hcHBlbmQoc2VjdGlvbnNDb21wb25lbnQuZWxlbWVudCk7XG5cblx0XHRcdFx0aWYgKGlzU2VjdGlvbk91dHNpZGUpIHtcblx0XHRcdFx0XHRjb25zdCBvdXRzaWRlU2VjdGlvbnMgPSBuZXcgU2VjdGlvbnModGhpcywge1xuXHRcdFx0XHRcdFx0aXRlbXMgOiBzZWN0aW9uc1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdHRoaXMuc2VjdGlvbnNDb250YWluZXIuYXBwZW5kKG91dHNpZGVTZWN0aW9ucy5lbGVtZW50KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRkZmQucmVzb2x2ZSh7IHNlY3Rpb25zQ29tcG9uZW50LCBpdGVtcyA6IHNlY3Rpb25zIH0pO1xuXHRcdFx0fSlcblx0XHR9XG5cblx0XHRyZXR1cm4gZGZkLnByb21pc2UoKVxuXHR9XG5cblx0LyoqXG5cdCAqIEZ1bmN0aW9uLCB0aGFuIGluaXQgYWxsIHBsdWdpbnMgZnJvbSBwbGF5ZXIgb3B0aW9ucy5cblx0ICogSWYgcGx1Z2luIGRvZXNuJ3QgZXhpc3QgdGhyb3cgYW4gZXJyb3Jcblx0ICpcblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqIEByZXR1cm5zIHtQbGF5ZXJ9IHRoaXNcblx0ICovXG5cdF9pbml0UGx1Z2lucygpIHtcblx0XHRpZiAodGhpcy5vcHRpb25zLnBsdWdpbnMpIHtcblx0XHRcdGZvciAoY29uc3QgbmFtZSBpbiB0aGlzLm9wdGlvbnMucGx1Z2lucykge1xuXHRcdFx0XHRpZighdGhpcy5vcHRpb25zLnBsdWdpbnMuaGFzT3duUHJvcGVydHkobmFtZSkpIHJldHVybjtcblx0XHRcdFx0Y29uc3QgcGx1Z2luT3B0aW9ucyA9IHRoaXMub3B0aW9ucy5wbHVnaW5zW25hbWVdO1xuXHRcdFx0XHRpZih0aGlzW25hbWVdKSB7XG5cdFx0XHRcdFx0aWYocGx1Z2luT3B0aW9ucykge1xuXHRcdFx0XHRcdFx0dGhpc1tuYW1lXShwbHVnaW5PcHRpb25zKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcihgUGx1Z2luICcke25hbWV9JyBkb2Vzbid0IGV4aXN0YCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cblx0LyoqXG5cdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHQgKi9cblx0X2xpc3RlblVzZXJBY3Rpdml0eSgpIHtcblx0XHRsZXQgbW91c2VJblByb2dyZXNzO1xuXHRcdGxldCBsYXN0TW92ZVg7XG5cdFx0bGV0IGxhc3RNb3ZlWTtcblxuXHRcdGNvbnN0IG9uTW91c2VNb3ZlID0gKGUpID0+IHtcblx0XHRcdGlmKGUuc2NyZWVuWCAhPT0gbGFzdE1vdmVYIHx8IGUuc2NyZWVuWSAhPT0gbGFzdE1vdmVZKSB7XG5cdFx0XHRcdGxhc3RNb3ZlWCA9IGUuc2NyZWVuWDtcblx0XHRcdFx0bGFzdE1vdmVZID0gZS5zY3JlZW5ZO1xuXHRcdFx0XHR0aGlzLl91c2VyQWN0aXZpdHkgPSB0cnVlXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y29uc3Qgb25Nb3VzZURvd24gPSAoZSkgPT4ge1xuXHRcdFx0dGhpcy5fdXNlckFjdGl2aXR5ID0gdHJ1ZVxuXG5cdFx0XHQvLyBXaGlsZSB1c2VyIGlzIHByZXNzaW5nIG1vdXNlIG9yIHRvdWNoLCBkaXNwYXRjaCB1c2VyIGFjdGl2aXR5XG5cdFx0XHRjbGVhckludGVydmFsKG1vdXNlSW5Qcm9ncmVzcyk7XG5cblx0XHRcdG1vdXNlSW5Qcm9ncmVzcyA9IHNldEludGVydmFsKCgpID0+IHtcblx0XHRcdFx0dGhpcy5fdXNlckFjdGl2aXR5ID0gdHJ1ZVxuXHRcdFx0fSwgMjUwKTtcblx0XHR9XG5cblx0XHRjb25zdCBvbk1vdXNlVXAgPSAoZSkgPT4ge1xuXHRcdFx0dGhpcy5fdXNlckFjdGl2aXR5ID0gdHJ1ZVxuXHRcdFx0Y2xlYXJJbnRlcnZhbChtb3VzZUluUHJvZ3Jlc3MpO1xuXHRcdH1cblxuXHRcdHRoaXMuZWxlbWVudC5vbignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xuXG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdtb3VzZWRvd24nLCBvbk1vdXNlRG93bik7XG5cblx0XHR0aGlzLmVsZW1lbnQub24oJ21vdXNldXAnLCBvbk1vdXNlVXApO1xuXG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdrZXlkb3duJywgKGUpID0+IHRoaXMuX3VzZXJBY3Rpdml0eSA9IHRydWUpO1xuXHRcdHRoaXMuZWxlbWVudC5vbigna2V5dXAnLCAoZSkgPT4gdGhpcy5fdXNlckFjdGl2aXR5ID0gdHJ1ZSk7XG5cblx0XHQvLyBTZWUgaHR0cDovL2Vqb2huLm9yZy9ibG9nL2xlYXJuaW5nLWZyb20tdHdpdHRlci9cblx0XHRsZXQgaW5hY3Rpdml0eVRpbWVvdXQ7XG5cdFx0Y29uc3QgZGVsYXkgPSB0aGlzLm9wdGlvbnMuaW5uYWN0aXZpdHlUaW1lb3V0O1xuXHRcdHNldEludGVydmFsKCgpID0+IHtcblx0XHRcdGlmICh0aGlzLl91c2VyQWN0aXZpdHkpIHtcblxuXHRcdFx0XHQvLyBSZXNldCB1c2VyIGFjdGl2dXR5IHRyYWNrZXJcblx0XHRcdFx0dGhpcy5fdXNlckFjdGl2aXR5ID0gZmFsc2U7XG5cblx0XHRcdFx0dGhpcy51c2VyQWN0aXZlID0gdHJ1ZTtcblxuXHRcdFx0XHRjbGVhclRpbWVvdXQoaW5hY3Rpdml0eVRpbWVvdXQpO1xuXG5cdFx0XHRcdGlmIChkZWxheSA+IDApIHtcblxuXHRcdFx0XHRcdGluYWN0aXZpdHlUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoIXRoaXMuX3VzZXJBY3Rpdml0eSkge1xuXHRcdFx0XHRcdFx0XHR0aGlzLnVzZXJBY3RpdmUgPSBmYWxzZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9LCBkZWxheSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LCAyNTApXG5cdH1cblxuXHQvKipcblx0ICogU3RvcCBzaG93aW5nIHNwaW5uZXIgYW5kIGNsZWFyIGRlbGF5IG9mIHNob3dpbmcgc3Bpbm5lclxuXHQgKlxuXHQgKiBAYWNjZXNzIHByaXZhdGVcblx0ICovXG5cdF9zdG9wV2F5dGluZygpIHtcblx0XHR0aGlzLl93YWl0aW5nVGltZW91dHMuZm9yRWFjaChpdGVtID0+IGNsZWFyVGltZW91dChpdGVtKSk7XG5cdFx0dGhpcy5fd2FpdGluZ1RpbWVvdXRzID0gW107XG5cdFx0dGhpcy5yZW1vdmVDbGFzcygnbGVwbGF5ZXItLXdhaXRpbmcnKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTaG93IHNwaW5uZXIgd2l0aCBkZWxheSBpbiAzMDBtc1xuXHQgKlxuXHQgKiBAYWNjZXNzIHByaXZhdGVcblx0ICovXG5cdF9zdGFydFdhaXRpbmcoKSB7XG5cdFx0dGhpcy5fd2FpdGluZ1RpbWVvdXRzLnB1c2goc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHR0aGlzLmFkZENsYXNzKCdsZXBsYXllci0td2FpdGluZycpO1xuXHRcdH0sIDMwMCkpO1xuXHR9XG5cblxuXHQvKipcblx0ICogT24gaW5pdGVkIHBsYXllciBldmVudCBoYW5kbGVyXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge1BsYXllckV2ZW50fSBlXG5cdCAqL1xuXHRfb25Jbml0ZWQoZSkge1xuXHRcdHRoaXMuYWRkQ2xhc3MoJ2xlcGxheWVyLS1pbml0ZWQnKTtcblxuXHRcdHRoaXMub3B0aW9ucy5vblBsYXllckluaXRlZC5jYWxsKHRoaXMsIGUpO1xuXHR9XG5cblxuXHQvKipcblx0ICogT24gY2xpY2sgdmlkZW8gZXZlbnQgaGFuZGxlci4gRm9jdXMgb24gdmlkZW8gYW5kIHRvZ2dsZVBsYXlcblx0ICpcblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqIEBwYXJhbSB7UGxheWVyRXZlbnR9IGVcblx0ICovXG5cdF9vbkNsaWNrKGUpIHtcblx0XHRjbGVhclRpbWVvdXQodGhpcy5fZGJsY2xpY2tUaW1lb3V0KTtcblx0XHR0aGlzLl9kYmxjbGlja1RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdHRoaXMudmlkZW8uZWxlbWVudC5mb2N1cygpXG5cdFx0XHR0aGlzLnRvZ2dsZVBsYXkoKTtcblx0XHR9LCAzMDApO1xuXHR9XG5cblx0LyoqXG5cdCAqIE9uIGRibGNsaWNrIG9uIHRoZSB2aWRlbyBwbGF5ZXIgZXZlbnQgaGFuZGxlclxuXHQgKlxuXHQgKiBAYWNjZXNzIHByaXZhdGVcblx0ICogQHBhcmFtIHtQbGF5ZXJFdmVudH0gZVxuXHQgKi9cblx0X29uRGJjbGljayhlKSB7XG5cdFx0Y2xlYXJUaW1lb3V0KHRoaXMuX2RibGNsaWNrVGltZW91dCk7XG5cdFx0dGhpcy50b2dnbGVGdWxsc2NyZWVuKCk7XG5cdH1cblxuXHQvKipcblx0ICogT24gZnVsbHNjcmVlbiBjaGFuZ2UgcGxheWVyIGV2ZW50IGhhbmRsZXJcblx0ICpcblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqIEBwYXJhbSB7UGxheWVyRXZlbnR9IGVcblx0ICovXG5cdF9vbkZ1bGxzY3JlZW5DaGFuZ2UoZSwgaXNGcykge1xuXHRcdGlmKGlzRnMpIHtcblx0XHRcdHRoaXMudmlldyA9ICdmdWxsc2NyZWVuJztcblx0XHRcdHRoaXMuZm9jdXMoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy52aWV3ID0gJ2NvbW1vbic7XG5cblx0XHRcdGlmKElTX0FORFJPSURfUEhPTkUgfHwgSVNfSVBIT05FIHx8IElTX0lQT0QpIHtcblx0XHRcdFx0dGhpcy5wYXVzZSgpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cblx0LyoqXG5cdCAqIE9uIHBsYXkgZXZlbnQgaGFuZGxlclxuXHQgKlxuXHQgKiBAYWNjZXNzIHByaXZhdGVcblx0ICogQHBhcmFtIHtQbGF5ZXJFdmVudH0gZVxuXHQgKi9cblx0X29uUGxheSgpIHtcblx0XHR0aGlzLnNwbGFzaEljb24uc2hvdygncGxheScpO1xuXHR9XG5cblx0LyoqXG5cdCAqIE9uIHBhdXNlIHBsYXllciBldmVudCBoYW5kbGVyXG5cdCAqIFNob3cgcGF1c2UgaWNvbiBpbiB0aGUgY2VudGVyIG9mIHZpZGVvXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHQgKi9cblx0X29uUGF1c2UoKSB7XG5cdFx0dGhpcy5zcGxhc2hJY29uLnNob3coJ3BhdXNlJyk7XG5cdH1cblxuXHRfb25FbnRpdHlGdWxsc2NyZW5DaGFuZ2UoKSB7XG5cdFx0Y29uc3QgZnNBcGkgPSBGdWxsc2NyZWVuQXBpO1xuXHRcdGNvbnN0IGlzRnMgPSAhIWRvY3VtZW50W2ZzQXBpLmZ1bGxzY3JlZW5FbGVtZW50XTtcblx0XHR0aGlzLnRyaWdnZXIoJ2Z1bGxzY3JlZW5jaGFuZ2UnLCBpc0ZzKTtcblx0fVxuXG59XG5cbi8qKlxuICogU3RhdGljIGhlbHBlciBmb3IgY3JlYXRpbmcgYSBwbHVnaW5zIGZvciBsZXBsYXllclxuICpcbiAqIEBhY2Nlc3MgcHVibGljXG4gKiBAc3RhdGljXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiBwbHVnaW5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFBsdWdpbiBpbml0IGZ1bmN0aW9uXG4gKlxuICogQGV4YW1wbGVcbiAqIFBsYXllci5wbHVnaW4oJ2hlbGxvV29ybGQnLCBmdW5jdGlvbihwbHVnaW5PcHRpb25zKSB7XG4gKiAgICBjb25zdCBwbGF5ZXIgPSB0aGlzO1xuICogICAgcGxheWVyLm9uKCdjbGljaycsICgpID0+IGNvbnNvbGUubG9nKCdIZWxsbyB3b3JsZCcpKTtcbiAqIH0pXG4gKlxuICovXG5QbGF5ZXIucGx1Z2luID0gZnVuY3Rpb24obmFtZSwgZm4pIHtcblx0UGxheWVyLnByb3RvdHlwZVtuYW1lXSA9IGZuO1xufVxuXG4vKipcbiAqIEdldCBieSBuYW1lIHJlZ2lzdGVyZWQgY29tcG9uZW50XG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgLSBOYW1lIG9mIGNvbXBvbmVudFxuICogQHJldHVybiB7Q29tcG9uZW50fVxuICovXG5QbGF5ZXIuZ2V0Q29tcG9uZW50ID0gQ29tcG9uZW50LmdldENvbXBvbmVudDtcblxuLyoqXG4gKiBSZWdpc3RlciBjb21wb25lbnRcbiAqXG4gKiBAYWNjZXNzIHB1YmxpY1xuICogQHN0YXRpY1xuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7Q29tcG9uZW50fSBjb21wb25lbnRcbiAqXG4gKiBAZXhhbXBsZVxuICogUGxheWVyLnJlZ2lzdGVyQ29tcG9uZW50KCdFcnJvckRpc3BsYXknLCBFcnJvckRpc3BsYXkpO1xuICovXG5QbGF5ZXIucmVnaXN0ZXJDb21wb25lbnQgPSBDb21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQ7XG5cbi8qKlxuICogUmVnaXN0ZXIgY29udHJvbFxuICpcbiAqIEBhY2Nlc3MgcHVibGljXG4gKiBAc3RhdGljXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtDb250cm9sfSBjb250cm9sXG4gKi9cblBsYXllci5nZXRDb250cm9sID0gQ29udHJvbC5nZXRDb250cm9sO1xuXG4vKipcbiAqIEdldCBieSBuYW1lIHJlZ2lzdGVyZWQgY29udHJvbFxuICpcbiAqIEBhY2Nlc3MgcHVibGljXG4gKiBAc3RhdGljXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHJldHVybnMge0NvbnRyb2x9XG4gKlxuICogQGV4YW1wbGVcbiAqIFBsYXllci5yZWdpc3RlckNvbnRyb2woJ2JhY2t3YXJkJywgQmFja3dhcmRDb250cm9sKTtcbiAqL1xuUGxheWVyLnJlZ2lzdGVyQ29udHJvbCA9IENvbnRyb2wucmVnaXN0ZXJDb250cm9sO1xuXG5cbi8qKlxuICogQ29udmVydCBzZWNvbmRzIHRvIGZvcm1hdCBzdHJpbmcgJ2hoPzptbTpzcydcbiAqXG4gKiBAYWNjZXNzIHB1YmxpY1xuICogQHBhcmFtIHtOdW1iZXJ9IHNlY29uZHMgU2Vjb25kc1xuICogQHBhcmFtIHtCb29sZWFufSBzaG93SG91cnMgY29udmVydCB0byBmb3JtYXQgJ2hoOm1tOnNzJ1xuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xuUGxheWVyLnNlY29uZHNUb1RpbWUgPSBzZWNvbmRzVG9UaW1lO1xuXG5cbi8qKlxuICogU3RhdGljIGhlbHBlciBmb3IgY3JlYXRpbmcgYSBwbHVnaW5zIGZvciBsZXBsYXllclxuICpcbiAqIEBhY2Nlc3MgcHVibGljXG4gKiBAc3RhdGljXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiBwbHVnaW5cbiAqIEBwYXJhbSB7RnVuY3Rpb258T2JqZWN0fSBmbiBQbHVnaW4gaW5pdCBmdW5jdGlvblxuICpcbiAqIEBleGFtcGxlXG4gKiBQbGF5ZXIucHJlc2V0KCdjb21tb24nLCB7XG4gKiAgICAgd2lkdGggOiAnMTAwJScsXG4gKiAgICAgcGx1Z2lucyA6IHtcbiAqICAgICAgICAgbWluaXBsYXllciA6IHRydWVcbiAqICAgICB9XG4gKiB9KTtcbiAqL1xuUGxheWVyLnByZXNldCA9IGZ1bmN0aW9uKG5hbWUsIG9iaikge1xuXHRpZih0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jykge1xuXHRcdFBsYXllci5fcHJlc2V0c1tuYW1lXSA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRvcHRpb25zIDoge30sXG5cdFx0XHRpbml0T3B0aW9ucyA6IG5vb3Bcblx0XHR9LCBvYmopO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvYmogPT09ICdmdW5jdGlvbicpIHtcblx0XHRQbGF5ZXIuX3ByZXNldHNbbmFtZV0gPSBvYmooKTtcblx0fVxufTtcblxuXG5QbGF5ZXIuZ2V0UHJlc2V0ID0gZnVuY3Rpb24obmFtZSkge1xuXHRpZihQbGF5ZXIuX3ByZXNldHNbbmFtZV0pIHtcblx0XHRyZXR1cm4gUGxheWVyLl9wcmVzZXRzW25hbWVdO1xuXHR9IGVsc2Uge1xuXHRcdGNvbnNvbGUuZXJyb3IoYHByZXNldCAke25hbWV9IGRvZXNuJ3QgZXhpc3RgKTtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxufVxuXG5cblBsYXllci5fcHJlc2V0cyA9IHt9O1xuXG5cblBsYXllci5fbG9hZFNWR1Nwcml0ZSA9IGZ1bmN0aW9uKHN2Zykge1xuXHRjb25zdCBoaWRkZW5FbGVtZW50ID0gJCgnPGRpdi8+JykuaGlkZSgpO1xuXHQkKCdib2R5JykucHJlcGVuZChoaWRkZW5FbGVtZW50LmFwcGVuZChzdmcpKTtcblx0cmV0dXJuIGhpZGRlbkVsZW1lbnQ7XG59XG5cblBsYXllci5kZWZhdWx0U3ByaXRlID0gcmVxdWlyZSgnLi4vLi4vZGlzdC9zdmcvc3ZnLWRlZnMuc3ZnJyk7XG5cbi8qIGdsb2JhbCBWRVJTSU9OICovXG5QbGF5ZXIudmVyc2lvbiA9IFZFUlNJT047XG5cbndpbmRvdy4kLmZuLmxlUGxheWVyID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIG5ldyBQbGF5ZXIoJCh0aGlzKSwgb3B0aW9ucyk7XG5cdH0pO1xufTtcblxud2luZG93LiQubGVQbGF5ZXIgPSBQbGF5ZXI7XG5cbndpbmRvdy5sZVBsYXllciA9IFBsYXllcjtcblxuXG4vKipcbiAqIE1pbmkgUGxheWVyIHBsdWdpblxuICpcbiAqIEBwbHVnaW5cbiAqL1xuUGxheWVyLnBsdWdpbignbWluaXBsYXllcicsIGZ1bmN0aW9uKHBsdWdpbk9wdGlvbnMpIHtcblx0Y29uc3QgcGxheWVyID0gdGhpcztcblxuXHQvLyDQnNC10YDQttC40Lwg0YEgdGhpcy5vcHRpb25zLm1pbmlwbGF5ZXIsINGH0YLQvtCx0Ysg0L3QtSDRgdC70L7QvNCw0YLRjCDQvtCx0YDQsNGC0L3Rg9GOINGB0L7QstC80LXRgdGC0LjQvNC+0YHRjCwg0YLQsNC6INC60LDQuiDRgNCw0L3RjNGI0LVcblx0Ly8g0LzQuNC90LjQv9C70LXQtdGAINC90LUg0LHRi9C7INC/0LvQsNCz0LjQvdC+0Lwg0L/Qu9C10LXRgNCwLlxuXHRjb25zdCBvcHRpb25zID0gJC5leHRlbmQoe30sIHtcblx0XHR3aWR0aCA6ICcxMDAlJyxcblx0XHRvZmZzZXRTaG93IDogKHBsYXllcikgPT4ge1xuXHRcdFx0Y29uc3Qgb2Zmc2V0ID0gcGxheWVyLmVsZW1lbnQub2Zmc2V0KCkudG9wXG5cdFx0XHRcdCsgcGxheWVyLmVsZW1lbnQub3V0ZXJIZWlnaHQoKVxuXHRcdFx0XHQtIHBsYXllci5nZXRDb250cm9scygnY29tbW9uJykuZWxlbWVudC5oZWlnaHQoKTtcblxuXHRcdFx0cmV0dXJuIG9mZnNldDtcblx0XHR9XG5cdH0sIHRoaXMub3B0aW9ucy5taW5pcGxheWVyLCBwbHVnaW5PcHRpb25zKTtcblxuXHRjb25zdCBjb250cm9scyA9IG5ldyBDb250cm9sQ29sbGVjdGlvbih0aGlzLCB7XG5cdFx0bmFtZSA6ICdtaW5pJyxcblx0XHRjb250cm9scyA6IG9wdGlvbnMuY29udHJvbHMsXG5cdFx0Y29udHJvbE9wdGlvbnMgOiB7XG5cdFx0XHRjb250cm9sIDoge1xuXHRcdFx0XHRkaXNhYmxlIDogZmFsc2Vcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xuXG5cdC8vINCS0YHRgtCw0LLQu9GP0LXQvCDQsiBpbmZvRWxlbWVudCDQv9C+0LQgdGl0bGUg0LggZGVzY3JpcHRpb25cblx0dGhpcy5pbmZvRWxlbWVudC5hcHBlbmQoY29udHJvbHMuZWxlbWVudCk7XG5cblx0LyoqXG5cdCAqIFJldHVybiBvZmZzZXQgb24gb1kgLCB3aGVuIG1pbmlwbGF5ZXIgc2hvdWxkIHNob3dpbmcgb3IgaGlkaW5nXG5cdCAqXG5cdCAqIEByZXR1cm5zIHtOdW1iZXJ9XG5cdCAqL1xuXHRjb25zdCBvZmZzZXRTaG93ID0gKCkgPT4ge1xuXHRcdGlmICgkLmlzRnVuY3Rpb24ob3B0aW9ucy5vZmZzZXRTaG93KSkge1xuXHRcdFx0cmV0dXJuIG9wdGlvbnMub2Zmc2V0U2hvdyhwbGF5ZXIpO1xuXHRcdH1cblxuXHRcdHJldHVybiBvcHRpb25zLm9mZnNldFNob3dcblx0fVxuXG5cdGNvbnN0IGdldFdpZHRoID0gKCkgPT4ge1xuXHRcdHJldHVybiBvcHRpb25zLndpZHRoIHx8IHRoaXMuZWxlbWVudC53aWR0aCgpO1xuXHR9XG5cblxuXHR0aGlzLl91cGRhdGVNaW5pUGxheWVyID0gKGUsIGZvcmNlKSA9PiB7XG5cdFx0Y29uc3Qgc2Nyb2xsVG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuXG5cdFx0Ly8gQmVjYXVzZSBpbiBmb3JjZSB1cGRhdGUsIGZvciBub3JtYWxseSBjb3VudCBoZWlnaHQgYW5kIHBhZGRpbmdcblx0XHQvLyBtaW5pcGxheWVyIGJlZm9yZSB0aGUgc2hvdyBtdXN0IGZpcnN0IGJlIGhpZGRlblxuXHRcdGlmKGZvcmNlKSB7XG5cdFx0XHR0aGlzLmhpZGVNaW5pUGxheWVyKGZvcmNlKTtcblx0XHR9XG5cblx0XHRpZihzY3JvbGxUb3AgPiBvZmZzZXRTaG93KCkpIHtcblx0XHRcdHRoaXMuc2hvd01pbmlQbGF5ZXIoZm9yY2UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmhpZGVNaW5pUGxheWVyKCk7XG5cdFx0fVxuXHR9XG5cblx0dGhpcy5zaG93TWluaVBsYXllciA9IChmb3JjZSkgPT4ge1xuXHRcdGlmICghZm9yY2UgJiYgdGhpcy52aWV3ID09PSAnbWluaScpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBBZGRlZCBlbXB0eSBzcGFjZVxuXHRcdHRoaXMuZWxlbWVudC5jc3MoJ3BhZGRpbmctdG9wJywgdGhpcy52aWRlb0NvbnRhaW5lci5oZWlnaHQoKSk7XG5cblx0XHR0aGlzLnZpZXcgPSdtaW5pJztcblx0fVxuXG5cdHRoaXMuaGlkZU1pbmlQbGF5ZXIgPSAoZm9yY2UpID0+IHtcblx0XHRpZighZm9yY2UgJiYgdGhpcy52aWV3ICE9PSAnbWluaScpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy52aWV3ID0gJ2NvbW1vbic7XG5cdH1cblxuXHQkKHdpbmRvdykub24oJ3Njcm9sbCcsIHRoaXMuX3VwZGF0ZU1pbmlQbGF5ZXIuYmluZCh0aGlzKSk7XG5cdCQod2luZG93KS5vbigncmVzaXplJywgdGhpcy5fdXBkYXRlTWluaVBsYXllci5iaW5kKHRoaXMpKTtcblx0dGhpcy5vbignaW5pdGVkJywgKGUpID0+IHRoaXMuX3VwZGF0ZU1pbmlQbGF5ZXIoZSwgdHJ1ZSkpO1xuXG5cdHRoaXMub25TZXRWaWV3KCdtaW5pJywgKCkgPT4ge1xuXHRcdHRoaXMuaW5uZXJFbGVtZW50LmNzcygnbWF4LXdpZHRoJywgZ2V0V2lkdGgoKSk7XG5cdFx0dGhpcy5pbm5lckVsZW1lbnQuY3NzKCdoZWlnaHQnLCB0aGlzLnZpZGVvLmhlaWdodCk7XG5cdH0pO1xuXG5cdHRoaXMub25EZWxWaWV3KCdtaW5pJywgKCkgPT4ge1xuXHRcdHRoaXMuaW5uZXJFbGVtZW50LmNzcygnbWF4LXdpZHRoJywgJycpXG5cdFx0dGhpcy5pbm5lckVsZW1lbnQuY3NzKCdoZWlnaHQnLCAnJylcblxuXHRcdHRoaXMuZWxlbWVudC5jc3MoJ3BhZGRpbmctdG9wJywgJycpO1xuXHR9KTtcblxuXG5cdHRoaXMuX3VwZGF0ZU1pbmlQbGF5ZXIoKTtcbn0pO1xuXG5QbGF5ZXIucHJlc2V0KCd2cHMnLCByZXF1aXJlKCcuL3ByZXNldHMvdnBzLmpzJykucHJlc2V0KTtcblBsYXllci5wcmVzZXQoJ3NpbXBsZScsIHJlcXVpcmUoJy4vcHJlc2V0cy9zaW1wbGUuanMnKS5wcmVzZXQpO1xuUGxheWVyLnByZXNldCgnc21zJywgcmVxdWlyZSgnLi9wcmVzZXRzL3Ntcy5qcycpLnByZXNldCk7XG5QbGF5ZXIucHJlc2V0KCdjb21wcmVzc2VkJywgcmVxdWlyZSgnLi9wcmVzZXRzL2NvbXByZXNzZWQuanMnKS5wcmVzZXQpO1xuUGxheWVyLnByZXNldCgneW91dHViZScsIHJlcXVpcmUoJy4vcHJlc2V0cy95b3V0dWJlLmpzJykucHJlc2V0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9sZS1wbGF5ZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9ICQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCIkXCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIENvbnRyb2wuanNcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgSWNvbiBmcm9tICcuL0ljb24nO1xuXG4vKipcbiAqIEBjbGFzcyBDb250cm9sXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIENvbnRyb2wncyBvcHRpb25zXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuaWNvbk5hbWVdIE5hbWUgb2YgY29udHJvbCdzIGljb24uIElmIGVtcHR5LCBjb250cm9sIHdpbGwgbm90IGhhdmUgYSBpY29uXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuY2xhc3NOYW1lXVxuICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLm5hbWVdXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuY29sbGVjdGlvbl1cbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy50aXRsZV0gQ29udG9ybCdzIHRvb2x0aXAsIHRpdGxlIGF0dHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtvcHRpb25zLm9uQ2xpY2tdIE9uIGNsaWNrIGV2ZW50IGhhbmRsZXJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuZGlzYWJsZT1mYWxzZV1cbiAqIEBwcm9wZXJ0eSB7SWNvbn0gaWNvbiBJY29uIGluIGNvbnRyb2wsIGlmIGl0IGlzIGV4aXN0XG4gKiBAZXh0ZW5kcyBDb21wb25lbnRcbiAqL1xuY2xhc3MgQ29udHJvbCBleHRlbmRzIENvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblx0XHR0aGlzLmRpc2FibGUgPSB0aGlzLm9wdGlvbnMuZGlzYWJsZSAhPSBudWxsPyB0aGlzLm9wdGlvbnMuZGlzYWJsZSA6IHRydWU7XG5cblx0XHR0aGlzLnBsYXllci5vbignaW5pdGVkJywgKGUpID0+IHtcblx0XHRcdHRoaXMuZGlzYWJsZSA9IHRoaXMub3B0aW9ucy5kaXNhYmxlICE9IG51bGw/IHRoaXMub3B0aW9ucy5kaXNhYmxlIDogZmFsc2U7XG5cdFx0fSlcblxuXHRcdHRoaXMuZWxlbWVudC5vbih7XG5cdFx0XHRjbGljayA6IHRoaXMuX29uQ2xpY2suYmluZCh0aGlzKSxcblx0XHRcdGxlcGxheWVyX2NvbnRyb2xfY2xpY2sgOiB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKVxuXHRcdH0pO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ2luaXRlZCcsIHRoaXMub25QbGF5ZXJJbml0ZWQuYmluZCh0aGlzKSlcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0aWYgKHRoaXMub3B0aW9ucy5pY29uTmFtZSkge1xuXHRcdFx0dGhpcy5pY29uID0gbmV3IEljb24odGhpcy5wbGF5ZXIsIHtcblx0XHRcdFx0aWNvbk5hbWUgOiB0aGlzLm9wdGlvbnMuaWNvbk5hbWVcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRsZXQgYXR0cnMgPSB7XG5cdFx0XHRyb2xlIDogJ2J1dHRvbicsXG5cdFx0XHR0aXRsZSA6IHRoaXMub3B0aW9ucy50aXRsZVxuXHRcdH1cblx0XHR0aGlzLmVsZW1lbnQgPSAkKCc8ZGl2IC8+Jylcblx0XHRcdC5hZGRDbGFzcyh0aGlzLmJ1aWxkQ1NTQ2xhc3MoKSlcblx0XHRcdC5hcHBlbmQodGhpcy5pY29uICYmIHRoaXMuaWNvbi5lbGVtZW50KVxuXHRcdFx0LmF0dHIoYXR0cnMpO1xuXG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudDtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGJ1aWxkQ1NTQ2xhc3MoKSB7XG5cdFx0cmV0dXJuIGBjb250cm9sICR7dGhpcy5vcHRpb25zLmNsYXNzTmFtZX0gJHtzdXBlci5idWlsZENTU0NsYXNzKCl9YFxuXHR9XG5cblx0c2V0IGRpc2FibGUodmFsdWUpIHtcblx0XHR0aGlzLl9kaXNhYmxlID0gdmFsdWU7XG5cdFx0dGhpcy5lbGVtZW50LnRvZ2dsZUNsYXNzKCdkaXNhYmxlZCcsIHZhbHVlKTtcblx0fVxuXG5cdGdldCBkaXNhYmxlKCkge1xuXHRcdHJldHVybiB0aGlzLl9kaXNhYmxlXG5cdH1cblxuXHRfb25DbGljayAoZSkge1xuXHRcdGlmICh0aGlzLmRpc2FibGUpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0dGhpcy5lbGVtZW50LnRyaWdnZXIoJ2xlcGxheWVyX2NvbnRyb2xfY2xpY2snKTtcblx0XHR0aGlzLnBsYXllci50cmlnZ2VyKCdjb250cm9sY2xpY2snLCB7IGNvbnRyb2wgOiB0aGlzIH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqXG5cdCAqIE9uIGNsaWNrIGV2ZW50IGhhbmRsZXJcblx0ICogQGFic3RhY3Rcblx0ICovXG5cdG9uQ2xpY2sgKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0aWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0dGhpcy5vcHRpb25zLm9uQ2xpY2suY2FsbCh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdH1cblx0fVxuXG5cblx0b25QbGF5ZXJJbml0ZWQgKGUsIGRhdGEpIHtcblxuXHR9XG5cblx0c3RhdGljIHJlZ2lzdGVyQ29udHJvbChuYW1lLCBjb250cm9sKSB7XG5cdFx0aWYobmFtZSA9PSBudWxsKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYoQ29udHJvbC5fY29udHJvbHMgPT0gbnVsbCkge1xuXHRcdFx0Q29udHJvbC5fY29udHJvbHMgPSB7fTtcblx0XHR9XG5cblx0XHRDb250cm9sLl9jb250cm9sc1tuYW1lXSA9IGNvbnRyb2w7XG5cblx0XHRyZXR1cm4gY29udHJvbDtcblx0fVxuXG5cdHN0YXRpYyBnZXRDb250cm9sKG5hbWUpIHtcblx0XHRpZihuYW1lID09IG51bGwpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZihDb250cm9sLl9jb250cm9scyAmJiBDb250cm9sLl9jb250cm9sc1tuYW1lXSkge1xuXHRcdFx0cmV0dXJuIENvbnRyb2wuX2NvbnRyb2xzW25hbWVdO1xuXHRcdH1cblx0fVxuXG5cdHN0YXRpYyBjcmVhdGUocGxheWVyLCBuYW1lLCBvcHRpb25zKSB7XG5cdFx0dmFyIGNvbnRyb2xDbGFzcyA9IHRoaXMuZ2V0Q29udHJvbChuYW1lKTtcblx0XHRpZihjb250cm9sQ2xhc3MgPT0gbnVsbCkge1xuXHRcdFx0Y29uc29sZS5lcnJvcihgQ29udHJvbCAke25hbWV9IGRvZXNuJ3QgZXhpc3RgKTtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdHJldHVybiBuZXcgY29udHJvbENsYXNzKHBsYXllciwgb3B0aW9ucyk7XG5cdH1cblxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ0NvbnRyb2wnLCBDb250cm9sKTtcbkNvbnRyb2wucmVnaXN0ZXJDb250cm9sKCdjb250cm9sJywgQ29udHJvbCk7XG5leHBvcnQgZGVmYXVsdCBDb250cm9sO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvQ29udHJvbC5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgQ29tcG9uZW50LmpzXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuLyoqXG4gKiBQbGF5ZXIgY29tcG9uZW50IC0gQmFzZSBjbGFzcyBmb3IgYWxsIFVJXG4gKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBPcHRpb25zIG9mIGNvbXBvbmVudFxuICogQHBhcmFtIHtqUXVlcnl9IFtvcHRpb25zLmVsZW1lbnRdINCt0LvQtdC80LXQvdGCINC90LAg0LrQvtGC0L7RgNC+0Lwg0LzQvtC20L3QviDQuNC90LjRhtC40LvQuNC30L7QstCw0YLRjCDQutC70LDRgdGBLlxuICogQHByb3BlcnR5IHtPYmplY3R9IG9wdGlvbnNcbiAqIEBwcm9wZXJ0eSB7alF1ZXJ5fSBlbGVtZW50XG4gKiBAY2xhc3MgQ29tcG9uZW50XG4gKi9cbmNsYXNzIENvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XG5cdFx0b3B0aW9ucyA9IHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRjcmVhdGVFbGVtZW50IDogdHJ1ZVxuXHRcdH0sIHRoaXMub3B0aW9ucywgb3B0aW9ucyk7XG5cblx0XHRpZighcGxheWVyICYmIHRoaXMucGxheSAhPSBudWxsKSB7XG5cdFx0XHR0aGlzLnBsYXllciA9IHBsYXllciA9IHRoaXM7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucGxheWVyID0gcGxheWVyO1xuXHRcdH1cblxuXHRcdGlmKG9wdGlvbnMuY3JlYXRlRWxlbWVudCkge1xuXG5cdFx0XHRpZiAob3B0aW9ucy5lbGVtZW50KSB7XG5cdFx0XHRcdHRoaXMuZWxlbWVudCA9IG9wdGlvbnMuZWxlbWVudDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuY3JlYXRlRWxlbWVudCgpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5lbGVtZW50Lmxlbmd0aCAhPT0gMSkge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKGBDb21wb25lbnQucHJvdG90eXBlLmVsZW1lbnQubGVuZ3RoIG11c3QgZXF1YWwgMSwgbm90ICR7dGhpcy5lbGVtZW50Lmxlbmd0aH1cXG5gLCB0aGlzLmVsZW1lbnQpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLmVsZW1lbnRbMF0uX19ub2RlID0gdGhpcztcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQGFic3RyYWN0XG5cdCAqL1xuXHRjcmVhdGVFbGVtZW50KCkge1xuXG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBhYnN0cmFjdFxuXHQgKi9cblx0YnVpbGRDU1NDbGFzcygpIHtcblx0XHRyZXR1cm4gJydcblx0fVxuXG5cblx0LyoqXG5cdCAqIFNldCB0aGUgZm9jdXMgdG8gdGhpcyBjb21wb25lbnRcblx0ICovXG5cdGZvY3VzKCkge1xuXHRcdHRoaXMuZWxlbWVudC5mb2N1cygpO1xuXHR9XG5cblxuXHQvKipcblx0ICogUmVtb3ZlIHRoZSBmb2N1cyBmcm9tIHRoaXMgY29tcG9uZW50XG5cdCAqL1xuXHRibHVyKCkge1xuXHRcdHRoaXMuZWxlbWVudC5ibHVyKCk7XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBFbWl0IGEgcGxheWVyIGV2ZW50ICh0aGUgbmFtZSBvZiBldmVudCB3b3VsZCBiZSBhIGxlcGxheWVyX3NtdGgpXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBldmVudE5hbWVcblx0ICogQHBhcmFtIHtBcmd1bWVudHN9IC4uLmFyZ3MgalF1ZXJ5LmZuLm9uIG90aGVyIGFyZ3VtZW50c1xuXHQgKiBAcmV0dXJucyB7UGxheWVyfSB0aGlzXG5cdCAqL1xuXHR0cmlnZ2VyKGV2ZW50TmFtZSwgLi4uYXJncykge1xuXHRcdGNvbnN0IGV2ZW50ID0gJC5FdmVudChgbGVwbGF5ZXJfJHtldmVudE5hbWV9YCwgeyBwbGF5ZXIgOiB0aGlzLnBsYXllciB9KTtcblx0XHR0aGlzLmVsZW1lbnQudHJpZ2dlckhhbmRsZXIoZXZlbnQsIC4uLmFyZ3MpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblxuXHQvKipcblx0ICogTGlzdGVuIGEgcGxheWVyIGV2ZW50IHdpdGggbGVwbGF5ZXJfIHN1ZmZpeFxuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnROYW1lXG5cdCAqIEBwYXJhbSB7QXJndW1lbnRzfSAuLi5hcmdzIGpRdWVyeS5mbi5vbiBvdGhlciBhcmd1bWVudHNcblx0ICogQHJldHVybnMge1BsYXllcn0gdGhpc1xuXHQgKi9cblx0b24oZXZlbnROYW1lLCAuLi5hcmdzKSB7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKGBsZXBsYXllcl8ke2V2ZW50TmFtZX1gLCAuLi5hcmdzKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cblx0b25lKGV2ZW50TmFtZSwgLi4uYXJncykge1xuXHRcdHRoaXMuZWxlbWVudC5vbmUoYGxlcGxheWVyXyR7ZXZlbnROYW1lfWAsIC4uLmFyZ3MpO1xuXHR9XG5cblxuXHQvKipcblx0ICogQWRkIHRoZSBDU1MgY2xhc3MgZm9yIGdlbmVyYWwgbGVwbGF5ZXIgRE9NIGVsZW1lbnRcblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZSBOYW1lIG9mIGNsYXNzIChub3QgYSBzZWxlY3RvciwgaXQncyBtZWFuLCB0aGF0IHN0cmluZyBzb3VsZCBiZSB3aXRob3V0IHBvaW50IGF0IHRoZSBzdGFydClcblx0ICogQHJldHVybnMge1BsYXllcn0gdGhpc1xuXHQgKi9cblx0YWRkQ2xhc3MoY2xhc3NOYW1lKSB7XG5cdFx0dGhpcy5lbGVtZW50LmFkZENsYXNzKGNsYXNzTmFtZSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvKipcblx0ICogUmVtb3ZlIHRoZSBDU1MgY2xhc3MgZnJvbSBnZW5lcmFsIGxlcGxheWVyIERPTSBlbGVtZW50XG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWUgTmFtZSBvZiBjbGFzc1xuXHQgKiBAcmV0dXJucyB7UGxheWVyfSB0aGlzXG5cdCAqL1xuXHRyZW1vdmVDbGFzcyhjbGFzc05hbWUpIHtcblx0XHR0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8qKlxuXHQgKiBUb2dnbGUgdGhlIENTUyBjbGFzcyBmcm9tIGdlbmVyYWwgbGVwbGF5ZXIgRE9NIGVsZW1lbnRcblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZVxuXHQgKiBAcGFyYW0ge0Jvb2xlYW59IGZsYWdcblx0ICogQHJldHVybnMge1BsYXllcn0gdGhpc1xuXHQgKi9cblx0dG9nZ2xlQ2xhc3MoY2xhc3NOYW1lLCBmbGFnKSB7XG5cdFx0dGhpcy5lbGVtZW50LnRvZ2dsZUNsYXNzKGNsYXNzTmFtZSwgZmxhZyk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRoYXNDbGFzcyhjbGFzc05hbWUpIHtcblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50Lmhhc0NsYXNzKGNsYXNzTmFtZSk7XG5cdH1cblxuXG5cdHN0YXRpYyByZWdpc3RlckNvbXBvbmVudChuYW1lLCBjb21wb25lbnQpIHtcblx0XHRpZihuYW1lID09IG51bGwpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZihDb21wb25lbnQuX2NvbXBvbmVudHMgPT0gbnVsbCkge1xuXHRcdFx0Q29tcG9uZW50Ll9jb21wb25lbnRzID0ge307XG5cdFx0fVxuXG5cdFx0Q29tcG9uZW50Ll9jb21wb25lbnRzW25hbWVdID0gY29tcG9uZW50O1xuXG5cdFx0cmV0dXJuIGNvbXBvbmVudDtcblx0fVxuXG5cdHN0YXRpYyBnZXRDb21wb25lbnQobmFtZSkge1xuXHRcdGlmKG5hbWUgPT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmKENvbXBvbmVudC5fY29tcG9uZW50cyAmJiBDb21wb25lbnQuX2NvbXBvbmVudHNbbmFtZV0pIHtcblx0XHRcdHJldHVybiBDb21wb25lbnQuX2NvbXBvbmVudHNbbmFtZV07XG5cdFx0fVxuXG5cdH1cblxuXG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnQ29tcG9uZW50JywgQ29tcG9uZW50KTtcbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL0NvbXBvbmVudC5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgSWNvbi5qc1xuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcblxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIEljb24ncyBvcHRpb25zXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuaWNvbk5hbWU9JyddIEljb24ncyBuYW1lLiBJZiB1c2Ugc3Znc3ByaXRlIGljb25zLCBpY29uTmFtZSBpdCdzIGlkIGluIHNwcml0ZVxuICogQGNsYXNzIEljb25cbiAqIEBleHRlbmRzIENvbXBvbmVudFxuICovXG5jbGFzcyBJY29uIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3RvciAocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRjbGFzc05hbWUgOiAnJyxcblx0XHRcdGljb25OYW1lIDogJydcblx0XHR9LCBvcHRpb25zKVxuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cblx0fVxuXG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHR0aGlzLl91c2VUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3VzZScpO1xuXHRcdHRoaXMuX3N2Z1RhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XG5cblx0XHR0aGlzLmljb25OYW1lID0gdGhpcy5faWNvbk5hbWUgPSB0aGlzLm9wdGlvbnMuaWNvbk5hbWU7XG5cdFx0dGhpcy5fc3ZnVGFnLmFwcGVuZENoaWxkKHRoaXMuX3VzZVRhZyk7XG5cdFx0dGhpcy5lbGVtZW50ID0gJCgnPGRpdiAvPicpXG5cdFx0XHQuYWRkQ2xhc3ModGhpcy5idWlsZENTU0NsYXNzKCkpXG5cdFx0XHQuYXR0cigndGl0bGUnLCB0aGlzLm9wdGlvbnMudGl0bGUpXG5cdFx0XHQuYXBwZW5kKCQodGhpcy5fc3ZnVGFnKSk7XG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudDtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGJ1aWxkQ1NTQ2xhc3MoKSB7XG5cdFx0cmV0dXJuIGAke3N1cGVyLmJ1aWxkQ1NTQ2xhc3MoKX0gbGVwbGF5ZXItaWNvbiAke3RoaXMub3B0aW9ucy5jbGFzc05hbWV9YFxuXHR9XG5cblx0LyoqXG5cdCAqIFNldHRlciBvZiBpY29uTmFtZSBmaWVsZFxuXHQgKiBAcGFyYW0ge1N0cmluZ30gaWNvbk5hbWVcblx0ICovXG5cdHNldCBpY29uTmFtZShpY29uTmFtZSkge1xuXHRcdGxldCBhdHRyTlMgPSBbJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnLCAnaHJlZiddXG5cdFx0dGhpcy5fdXNlVGFnLnJlbW92ZUF0dHJpYnV0ZU5TKC4uLmF0dHJOUywgYCR7dGhpcy5wbGF5ZXIub3B0aW9ucy5zdmdQYXRofSNsZXBsYXllci1pY29uLSR7dGhpcy5pY29uTmFtZX1gKVxuXHRcdHRoaXMuX3VzZVRhZy5zZXRBdHRyaWJ1dGVOUyguLi5hdHRyTlMsIGAke3RoaXMucGxheWVyLm9wdGlvbnMuc3ZnUGF0aH0jbGVwbGF5ZXItaWNvbi0ke2ljb25OYW1lfWApXG5cdFx0dGhpcy5faWNvbk5hbWUgPSBpY29uTmFtZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXR0ZXIgb2YgaWNvbk5hbWUgZmllbGRcblx0ICogQHJldHVybiB7U3RyaW5nfSBJY29uJ3MgbmFtZVxuXHQgKi9cblx0Z2V0IGljb25OYW1lICgpIHtcblx0XHRyZXR1cm4gdGhpcy5faWNvbk5hbWU7XG5cdH1cblxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ0ljb24nLCBJY29uKTtcbmV4cG9ydCBkZWZhdWx0IEljb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9JY29uLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBQbGF5QnV0dG9uLmpzXG4gKi9cblxuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9Db250cm9sJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJztcbmltcG9ydCB7IGNyZWF0ZUVsIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqL1xuY2xhc3MgUGxheUJ1dHRvbiBleHRlbmRzIENvbnRyb2wge1xuXG5cdGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucykge1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucylcblxuXHRcdHRoaXMuZWxlbWVudC5vbignZGJsY2xpY2snLCB0aGlzLl9vbkRiY2xpY2suYmluZCh0aGlzKSk7XG5cdH1cblxuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdGNvbnN0IGlubmVyID0gY3JlYXRlRWwoJ2RpdicsIHtcblx0XHRcdGNsYXNzTmFtZSA6ICdsZXBsYXllci1wbGF5LWJ1dHRvbl9fYnV0dG9uJ1xuXHRcdH0pXG5cdFx0LmFwcGVuZChuZXcgSWNvbih0aGlzLnBsYXllciwgeyBpY29uTmFtZSA6ICdwbGF5JyB9KS5lbGVtZW50KTtcblxuXHRcdHRoaXMuZWxlbWVudCA9IGNyZWF0ZUVsKCdkaXYnLCB7XG5cdFx0XHRjbGFzc05hbWUgOiB0aGlzLmJ1aWxkQ1NTQ2xhc3Ncblx0XHR9KVxuXHRcdC5hcHBlbmQoaW5uZXIpO1xuXG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudDtcblx0fVxuXG5cdG9uQ2xpY2soZSkge1xuXHRcdHN1cGVyLm9uQ2xpY2soZSk7XG5cdFx0dGhpcy5wbGF5ZXIudHJpZ2dlcignY2xpY2snKTtcblx0fVxuXG5cdF9vbkRiY2xpY2soKSB7XG5cdFx0dGhpcy5wbGF5ZXIudHJpZ2dlcignZGJsY2xpY2snKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGJ1aWxkQ1NTQ2xhc3MoKSB7XG5cdFx0cmV0dXJuIGBsZXBsYXllci1wbGF5LWJ1dHRvbmBcblx0fVxuXG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnUGxheUJ1dHRvbicsIFBsYXlCdXR0b24pO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ3BsYXkgYnV0dG9uJywgUGxheUJ1dHRvbik7XG5leHBvcnQgZGVmYXVsdCBQbGF5QnV0dG9uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvUGxheUJ1dHRvbi5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgdGltZS5qc1xuICpcbiAqIEBtb2R1bGUgdGltZVxuICovXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG4vKipcbiAqIENvbnZlcnQgc2Vjb25kcyB0byBmb3JtYXQgc3RyaW5nICdoaD86bW06c3MnXG4gKlxuICogQGFjY2VzcyBwdWJsaWNcbiAqIEBwYXJhbSB7TnVtYmVyfSBzZWNvbmRzIFNlY29uZHNcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gc2hvd0hvdXJzIGNvbnZlcnQgdG8gZm9ybWF0ICdoaDptbTpzcydcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZWNvbmRzVG9UaW1lIChzZWNvbmRzLCBzaG93SG91cnMpIHtcblx0dmFyIGggPSBNYXRoLmZsb29yKHNlY29uZHMgLyAzNjAwKTtcblx0dmFyIG0gPSBNYXRoLmZsb29yKHNlY29uZHMgJSAzNjAwIC8gNjApO1xuXHR2YXIgcyA9IE1hdGguZmxvb3Ioc2Vjb25kcyAlIDM2MDAgJSA2MCk7XG5cdHZhciBvdXQgPSAnJztcblx0aWYgKG0gPCAxMCkge1xuXHRcdG0gPSAnMCcgKyBtO1xuXHR9XG5cdGlmIChzIDwgMTApIHtcblx0XHRzID0gJzAnICsgcztcblx0fVxuXHRvdXQgPSBgJHttfToke3N9YDtcblxuXHRpZihoID4gMCB8fCBzaG93SG91cnMpIHtcblx0XHRvdXQgPSBgJHtofTpgICsgb3V0XG5cdH1cblx0cmV0dXJuIG91dDtcbn1cblxuXG4vKipcbiAqIFJldHVybiBsZW5ndGggLyBlbmRcbiAqXG4gKiBAYWNjZXNzIHB1YmxpY1xuICogQHBhcmFtIHtOdW1iZXJ9IGxlbmd0aFxuICogQHBhcmFtIHtOdWJtZXJ9IGVuZFxuICovXG5leHBvcnQgZnVuY3Rpb24gcGVyY2VudGlmeSAobGVuZ3RoLCBlbmQpIHtcblx0Ly8gb3IgemVybyBiZWFjYXNlIE5hTlxuXHRjb25zdCBwZXJjZW50ID0gKGxlbmd0aCAvIGVuZCkgfHwgMDtcblx0cmV0dXJuIChwZXJjZW50ID49IDEpID8gMSA6IHBlcmNlbnQ7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsKHRhZz0nZGl2JywgcHJvcHMpIHtcblx0aWYocHJvcHMgJiYgcHJvcHMuY2xhc3NOYW1lKSB7XG5cdFx0cHJvcHNbXCJjbGFzc1wiXSA9IHByb3BzLmNsYXNzTmFtZTtcblx0XHRkZWxldGUgcHJvcHMuY2xhc3NOYW1lO1xuXHR9XG5cdHJldHVybiAkKGA8JHt0YWd9Lz5gLCBwcm9wcyk7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5leHBvcnQgY29uc3QgZ2V0U2Nyb2xsQmFyV2lkdGggPSAoZnVuY3Rpb24oKSB7XG5cdGxldCByZXN1bHQ7XG5cblx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXG5cdFx0aWYocmVzdWx0ICE9IG51bGwpIHtcblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fVxuXG5cdFx0Y29uc3Qgb3V0ZXIgPSAkKCc8ZGl2IC8+JykuY3NzKHtcblx0XHRcdHZpc2liaWxpdHkgOiAnaGlkZGVuJyxcblx0XHRcdHdpZHRoIDogMTAwLFxuXHRcdFx0b3ZlcmZsb3cgOiAnc2Nyb2xsJ1xuXHRcdH0pLmFwcGVuZFRvKCdib2R5Jyk7XG5cblx0XHRjb25zdCB3aWR0aFdpdGhTY3JvbGwgPSAkKCc8ZGl2IC8+JykuY3NzKHtcblx0XHRcdHdpZHRoIDogJzEwMCUnXG5cdFx0fSkuYXBwZW5kVG8ob3V0ZXIpLm91dGVyV2lkdGgoKTtcblxuXHRcdG91dGVyLnJlbW92ZSgpO1xuXHRcdHJldHVybiByZXN1bHQgPSAxMDAgLSB3aWR0aFdpdGhTY3JvbGw7XG5cdH1cblxufSgpKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy91dGlscy9pbmRleC5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgU3BsYXNoSWNvbi5qc1xuICovXG5cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJztcblxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAY2xhc3MgU3BsYXNoSWNvblxuICogQGV4dGVuZHMgQ29tcG9uZW50XG4gKi9cbmNsYXNzIFNwbGFzaEljb24gZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdHNob3cobmFtZSkge1xuXHRcdHRoaXMuaWNvbi5pY29uTmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5lbGVtZW50LmFkZENsYXNzKCdsZXBsYXllci1zcGxhc2hpY29uLS1hY3RpdmUnKTtcblx0XHRzZXRUaW1lb3V0KCgpID0+IHRoaXMuZWxlbWVudC5yZW1vdmVDbGFzcygnbGVwbGF5ZXItc3BsYXNoaWNvbi0tYWN0aXZlJyksIDMwMCk7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdHRoaXMuaWNvbiA9IG5ldyBJY29uKHRoaXMucGxheWVyKTtcblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50ID0gJCgnPGRpdiAvPicpXG5cdFx0XHQuYWRkQ2xhc3MoJ2xlcGxheWVyLXNwbGFzaGljb24nKVxuXHRcdFx0LmFwcGVuZCh0aGlzLmljb24uZWxlbWVudCk7XG5cdH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBTcGxhc2hJY29uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvU3BsYXNoSWNvbi5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgVGltZS5qc1xuICovXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9Db21wb25lbnQnO1xuaW1wb3J0IHsgc2Vjb25kc1RvVGltZSwgY3JlYXRlRWwgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbi8vIFRPRE86INCY0YHQv9C+0LvRjNC30L7QstCw0YLRjCDRjdGC0L7RgiDQsdC70L7QuiDQsiBUaW1lQ29udHJvbFxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAY2xhc3MgVGltZVxuICogQGV4dGVuZHMgQ29udHJvbFxuICovXG5jbGFzcyBUaW1lIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3RvciAocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRmbiA6IChwbGF5ZXIpID0+IHtcblx0XHRcdFx0Y29uc3QgdmlkZW8gPSBwbGF5ZXIudmlkZW87XG5cdFx0XHRcdHJldHVybiBzZWNvbmRzVG9UaW1lKHZpZGVvLmN1cnJlbnRUaW1lKTtcblx0XHRcdH1cblx0XHR9LCBvcHRpb25zKTtcblxuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cblx0XHR0aGlzLnBsYXllci5vbigndGltZXVwZGF0ZScsIHRoaXMudXBkYXRlVGV4dC5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLnBsYXllci5vbignaW5pdGVkJywgdGhpcy51cGRhdGVUZXh0LmJpbmQodGhpcykpO1xuXHR9XG5cblx0dXBkYXRlVGV4dChlLCBkYXRhKSB7XG5cdFx0dGhpcy5lbGVtZW50LnRleHQodGhpcy5vcHRpb25zLmZuKHRoaXMucGxheWVyKSk7XG5cdH1cblxuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdHRoaXMuZWxlbWVudCA9IGNyZWF0ZUVsKCdkaXYnLCB7IGNsYXNzTmFtZSA6ICdsZXBsYXllci10aW1lJyB9KTtcblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50O1xuXHR9XG5cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdUaW1lJywgVGltZSk7XG5leHBvcnQgZGVmYXVsdCBUaW1lO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvVGltZWxpbmUvVGltZS5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgQ29udHJvbENvbGxlY3Rpb24uanNcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL0NvbnRyb2wnO1xuXG5pbXBvcnQgeyBjcmVhdGVFbCB9IGZyb20gJy4uL3V0aWxzJztcblxuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gT3B0aW9ucyBvZiBjb21wb25lbnRcbiAqIEBwYXJhbSB7alF1ZXJ5fSBbb3B0aW9ucy5jb250cm9sc10gQXJyYXkgb2Ygcm93cyBvZiBjb250cm9sJ3MgbmFtZVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLmNvbnRyb2xzT3B0aW9uc10gQ29udHJvbCBvcHRpb25zXG4gKiBAcHJvcGVydHkge0FycmF5fSBBcnJheSBvZiByb3dzIG9mIGNvbnRyb2wncyBuYW1lXG4gKiBAcHJcbiAqXG4gKi9cbmNsYXNzIENvbnRyb2xDb2xsZWN0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IgKHBsYXllciwgb3B0aW9ucykge1xuXHRcdGNvbnN0IG5hbWUgPSBvcHRpb25zLm5hbWU7XG5cblx0XHRsZXQgcGxheWVyT3B0aW9ucyA9IHtcblx0XHRcdGNvbnRyb2xzIDogcGxheWVyLm9wdGlvbnMuY29udHJvbHNbbmFtZV0sXG5cdFx0fVxuXG5cdFx0aWYocGxheWVyLm9wdGlvbnMuY29udHJvbHNPcHRpb25zW25hbWVdKSB7XG5cdFx0XHRwbGF5ZXJPcHRpb25zWydhbGlnbiddID0gcGxheWVyLm9wdGlvbnMuY29udHJvbHNPcHRpb25zW25hbWVdLmFsaWduO1xuXHRcdFx0cGxheWVyT3B0aW9uc1snY29udHJvbHNPcHRpb25zJ10gPSBwbGF5ZXIub3B0aW9ucy5jb250cm9sc09wdGlvbnNbbmFtZV0uY29udHJvbHM7XG5cdFx0fVxuXG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRjb250cm9scyA6IFtdLFxuXHRcdFx0Y29udHJvbHNPcHRpb25zIDoge30sXG5cdFx0XHRhbGlnbiA6ICdsZWZ0Jyxcblx0XHR9LCBwbGF5ZXJPcHRpb25zLCBvcHRpb25zKTtcblxuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cblx0XHR0aGlzLmFjdGl2ZSA9IG9wdGlvbnMuYWN0aXZlIHx8IGZhbHNlO1xuXHRcdHRoaXMubmFtZSA9IG9wdGlvbnMubmFtZTtcblxuXHRcdHRoaXMucGxheWVyLmNvbnRyb2xzW3RoaXMubmFtZV0gPSB0aGlzO1xuXHR9XG5cblxuXHRfZ2V0Q29udHJvbE9wdGlvbnMobmFtZSkge1xuXHRcdGNvbnN0IHsgY29udHJvbHNPcHRpb25zIH0gPSB0aGlzLm9wdGlvbnM7XG5cdFx0bGV0IHJlc3VsdCA9IGNvbnRyb2xzT3B0aW9ucy5jb250cm9sIHx8IHt9O1xuXG5cdFx0aWYoY29udHJvbHNPcHRpb25zW25hbWVdKSB7XG5cdFx0XHRyZXN1bHQgPSAkLmV4dGVuZCh0cnVlLCB7fSwgcmVzdWx0LCBjb250cm9sc09wdGlvbnNbbmFtZV0pO1xuXHRcdH1cblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblxuXHRhZGRDb250cm9sKGluZGV4Um93LCBuYW1lLCBvcHRpb25zKSB7XG5cdFx0Y29uc3QgY29udHJvbCA9IENvbnRyb2wuY3JlYXRlKHRoaXMucGxheWVyLCBuYW1lLCB7XG5cdFx0XHRjb2xsZWN0aW9uIDogdGhpcy5vcHRpb25zLm5hbWUsXG5cdFx0XHQuLi5vcHRpb25zXG5cdFx0fSk7XG5cblx0XHRpZihjb250cm9sID09IG51bGwpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR3aGlsZShpbmRleFJvdyA+IHRoaXMuX3Jvd3MubGVuZ3RoKSB7XG5cdFx0XHR0aGlzLmFkZFJvdygpO1xuXHRcdH1cblxuXHRcdGNvbnN0IGVsZW1Sb3cgPSB0aGlzLl9yb3dzW2luZGV4Um93XTtcblx0XHRlbGVtUm93LmFwcGVuZChjb250cm9sLmVsZW1lbnQpO1xuXG5cdFx0aWYgKHRoaXMuY29udHJvbHMgPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5jb250cm9scyA9IFtdO1xuXHRcdH1cblx0XHRpZiAodGhpcy5jb250cm9sc1tpbmRleFJvd10gPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5jb250cm9sc1tpbmRleFJvd10gPSB7fTtcblx0XHR9XG5cblx0XHR0aGlzLmNvbnRyb2xzW2luZGV4Um93XVtuYW1lXSA9IGNvbnRyb2w7XG5cdH1cblxuXHRnZXRDb250cm9sKGZpcnN0LCBzZWNvbmQpIHtcblx0XHRpZihzZWNvbmQgPT0gbnVsbCkge1xuXHRcdFx0Y29uc3QgbmFtZSA9IGZpcnN0O1xuXHRcdFx0Zm9yKGxldCBpID0gMDsgaSA8IHRoaXMuY29udHJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYodGhpcy5jb250cm9sc1tpXVtuYW1lXSAhPSBudWxsKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuY29udHJvbHNbaV1bbmFtZV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3QgbmFtZSA9IGZpcnN0O1xuXHRcdFx0Y29uc3QgaW5kZXhSb3cgPSBzZWNvbmQ7XG5cdFx0XHRyZXR1cm4gdGhpcy5jb250cm9sc1tpbmRleFJvd11bbmFtZV07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRhZGRSb3coKSB7XG5cdFx0Y29uc3QgZWxlbVJvdyA9IGNyZWF0ZUVsKCdkaXYnLCB7XG5cdFx0XHRjbGFzc05hbWUgOiBgbGVwbGF5ZXItY29udHJvbHMgY29udHJvbHMtJHt0aGlzLm9wdGlvbnMubmFtZX1gXG5cdFx0fSk7XG5cblx0XHRpZiAodGhpcy5fcm93cyA9PSBudWxsKSB7XG5cdFx0XHR0aGlzLl9yb3dzID0gW11cblx0XHR9XG5cdFx0dGhpcy5fcm93cy5wdXNoKGVsZW1Sb3cpO1xuXHRcdHRoaXMuZWxlbWVudC5hcHBlbmQoZWxlbVJvdyk7XG5cblx0XHRyZXR1cm4gZWxlbVJvdztcblx0fVxuXG5cdGdldFJvdyhpbmRleFJvdykge1xuXHRcdHJldHVybiB0aGlzLl9yb3dzW2luZGV4Um93IHx8IDBdO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHRjb25zdCB7IG5hbWUsIGNvbnRyb2xzLCBhbGlnbiB9ID0gdGhpcy5vcHRpb25zO1xuXHRcdGxldCBnbG9iYWxBbGlnbiA9IG51bGw7XG5cblx0XHR0aGlzLmVsZW1lbnQgPSBjcmVhdGVFbCgnZGl2Jywge1xuXHRcdFx0Y2xhc3NOYW1lIDogYGxlcGxheWVyLWNvbnRyb2wtY29sbGVjdGlvbiBsZXBsYXllci1jb250cm9sLWNvbGxlY3Rpb24tLSR7bmFtZX1gLFxuXHRcdH0pXG5cblx0XHRpZih0eXBlb2YgYWxpZ24gPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRnbG9iYWxBbGlnbiA9IGFsaWduO1xuXHRcdH1cblxuXHRcdGNvbnRyb2xzLmZvckVhY2goKHJvdywgaW5kZXhSb3cpID0+IHtcblx0XHRcdGNvbnN0IGVsZW1Sb3cgPSB0aGlzLmFkZFJvdygpO1xuXHRcdFx0bGV0IHJvd0FsaWduID0gZ2xvYmFsQWxpZ247XG5cblx0XHRcdGlmKEFycmF5LmlzQXJyYXkoYWxpZ24pICYmIGFsaWduW2luZGV4Um93XSkge1xuXHRcdFx0XHRyb3dBbGlnbiA9IGFsaWduW2luZGV4Um93XVxuXHRcdFx0fVxuXG5cdFx0XHRyb3cuZm9yRWFjaChjb250cm9sTmFtZSA9PiB7XG5cblx0XHRcdFx0aWYoY29udHJvbE5hbWUgPT09ICd0aW1lbGluZScgJiYgcm93QWxpZ24gIT09ICdqdXN0aWZ5Jykge1xuXHRcdFx0XHRcdGNvbnNvbGUud2FybignQ29ucm9scyBzaG91bGQgaGF2ZSBqdXN0aWZ5IGFsaWduLCBpZiB0aGVyZSBpcyB0aGUgdGltZWxpbmUgaW4gaXQnKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuYWRkQ29udHJvbChpbmRleFJvdywgY29udHJvbE5hbWUsIHRoaXMuX2dldENvbnRyb2xPcHRpb25zKG5hbWUpKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRlbGVtUm93LmFkZENsYXNzKGBsZXBsYXllci1jb250cm9scy0tJHtyb3dBbGlnbn1gKVxuXHRcdFx0XHQuYXR0cigndGFiaW5kZXgnLCAwKTtcblxuXHRcdFx0ZWxlbVJvdy5maW5kKCcuZGl2aWRlciArIC5kaXZpZGVyJykucmVtb3ZlKCk7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50O1xuXHR9XG5cblx0aGlkZSAoKSB7XG5cdFx0dGhpcy5lbGVtZW50LmhpZGUoKTtcblx0XHR0aGlzLmVsZW1lbnQuZmluZCgnLmxlcGxheWVyLWNvbnRyb2xzJykuaGlkZSgpXG5cdH1cblxuXHRzaG93ICgpIHtcblx0XHR0aGlzLmVsZW1lbnQuc2hvdygpXG5cdFx0dGhpcy5lbGVtZW50LmZpbmQoJy5sZXBsYXllci1jb250cm9scycpLnNob3coKVxuXHR9XG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnQ29udHJvbENvbGxlY3Rpb24nLCBDb250cm9sQ29sbGVjdGlvbik7XG5leHBvcnQgZGVmYXVsdCBDb250cm9sQ29sbGVjdGlvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL0NvbnRyb2xDb2xsZWN0aW9uLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBTZWN0aW9ucy5qc1xuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcblxuaW1wb3J0IHsgc2Vjb25kc1RvVGltZSwgZ2V0U2Nyb2xsQmFyV2lkdGggfSBmcm9tICcuLi91dGlscyc7XG4vKipcbiAqIEBjbGFzcyBTZWN0aW9uc1xuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHBhcmFtIHtBcnJheX0gW29wdGlvbnMuaXRlbXM9W119IERhdGEgZm9yIHNlY3Rpb25zXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnZpZXdzXSBTaG93IHNlY3Rpb24gb25seSBpbiBmdWxsc2NyZWVuXG4gKiBAZXh0ZW5kcyBDb21wb25lbnRcbiAqL1xuY2xhc3MgU2VjdGlvbnMgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcblx0XHRsZXQgeyBpdGVtcyA9IFtdIH0gPSBvcHRpb25zO1xuXHRcdGl0ZW1zID0gW10uY29uY2F0KGl0ZW1zKTtcblxuXHRcdC8vb3B0aW9ucy5pdGVtcyA9IGl0ZW1zO1xuXG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblxuXHRcdHRoaXMuc2Nyb2xsRWxlbWVudCA9IHRoaXMuX2lubmVyRWxlbWVudDtcblx0XHR0aGlzLmFjdGl2ZVNlY3Rpb24gPSB0aGlzLmdldFNlY3Rpb25CeUluZGV4KDApO1xuXG5cdFx0dGhpcy5pdGVtcyA9IGl0ZW1zO1xuXHRcdHRoaXMubGVuZ3RoID0gdGhpcy5pdGVtcy5sZW5ndGg7XG5cblx0XHR0aGlzLnNldEFjdGl2ZUJ5SW5kZXgoMCk7XG5cblx0XHR0aGlzLmVsZW1lbnRcblx0XHRcdC5maW5kKCcubGVwbGF5ZXItc2VjdGlvbicpXG5cdFx0XHQub24oJ2NsaWNrJywgdGhpcy5vblNlY3Rpb25DbGljay5iaW5kKHRoaXMpKTtcblxuXHRcdHRoaXMucGxheWVyLm9uKCdzZWN0aW9uc3RvZ2dsZScsIHRoaXMuX29uU2VjdGlvbnNUb2dnbGUuYmluZCh0aGlzKSk7XG5cblx0XHR0aGlzLnBsYXllci5vbigndGltZXVwZGF0ZScsIHRoaXMub25UaW1lVXBkYXRlLmJpbmQodGhpcykpO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ2luaXRlZCcsIHRoaXMudXBkYXRlU2VjdGlvbkR1cmF0aW9uLmJpbmQodGhpcykpO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ2R1cmF0aW9uY2hhbmdlJywgdGhpcy51cGRhdGVTZWN0aW9uRHVyYXRpb24uYmluZCh0aGlzKSk7XG5cblx0XHR0aGlzLnBsYXllci5vbignZm9jdXMnLCAoKSA9PiB0aGlzLnBsYXllci5mb2N1cygpKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0bmV4dCgpIHtcblx0XHRjb25zdCBzZWN0aW9uSW5kZXggPSBwYXJzZUludCh0aGlzLmFjdGl2ZVNlY3Rpb24uYXR0cignZGF0YS1pbmRleCcpKTtcblx0XHRjb25zdCBuZXdJbmRleCA9IHNlY3Rpb25JbmRleCA+PSB0aGlzLmxlbmd0aCA/IHRoaXMubGVuZ3RoIDogc2VjdGlvbkluZGV4ICsgMTtcblxuXHRcdHRoaXMuc2V0QWN0aXZlQnlJbmRleChuZXdJbmRleCk7XG5cblx0XHR0aGlzLnBsYXllci52aWRlby5jdXJyZW50VGltZSA9IHRoaXMuaXRlbXNbc2VjdGlvbkluZGV4XS5lbmQ7XG5cdH1cblxuXHRwcmV2KCkge1xuXHRcdGNvbnN0IHNlY3Rpb25JbmRleCA9IHBhcnNlSW50KHRoaXMuYWN0aXZlU2VjdGlvbi5hdHRyKCdkYXRhLWluZGV4JykpO1xuXHRcdGNvbnN0IG5ld0luZGV4ID0gc2VjdGlvbkluZGV4IDw9IDAgPyAwIDogc2VjdGlvbkluZGV4IC0gMTtcblxuXHRcdHRoaXMuc2V0QWN0aXZlQnlJbmRleChuZXdJbmRleCk7XG5cdFx0dGhpcy5wbGF5ZXIudmlkZW8uY3VycmVudFRpbWUgPSB0aGlzLml0ZW1zW25ld0luZGV4XS5iZWdpbjtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0Y29uc3QgeyBmdWxsc2NyZWVuT25seSwgaGlkZVNjcm9sbCB9ID0gdGhpcy5vcHRpb25zO1xuXG5cblx0XHR0aGlzLmVsZW1lbnQgPSAkKCc8ZGl2IC8+Jylcblx0XHRcdC5hZGRDbGFzcygnbGVwbGF5ZXItc2VjdGlvbnMnKVxuXHRcdFx0LmF0dHIoJ3RhYmluZGV4JywgJzAnKTtcblxuXHRcdHRoaXMuX2lubmVyRWxlbWVudCA9ICQoJzxkaXYgLz4nKS5hZGRDbGFzcygnbGVwbGF5ZXItc2VjdGlvbnNfX2lubmVyJyk7XG5cblx0XHRpZihmdWxsc2NyZWVuT25seSkge1xuXHRcdFx0dGhpcy5lbGVtZW50LmFkZENsYXNzKCdsZXBsYXllci1zZWN0aW9ucy0tZnNvbmx5Jyk7XG5cdFx0fVxuXG5cdFx0aWYoaGlkZVNjcm9sbCkge1xuXHRcdFx0dGhpcy5lbGVtZW50LmFkZENsYXNzKCdsZXBsYXllci1zZWN0aW9ucy0taGlkZS1zY3JvbGwnKTtcblx0XHRcdHRoaXMuX2lubmVyRWxlbWVudC5jc3Moe1xuXHRcdFx0XHRyaWdodCA6IC0xICogZ2V0U2Nyb2xsQmFyV2lkdGgoKVxuXHRcdFx0fSlcblx0XHR9XG5cblx0XHR0aGlzLmVsZW1lbnQuYXBwZW5kKFxuXHRcdFx0dGhpcy5faW5uZXJFbGVtZW50LmFwcGVuZCh0aGlzLl9jcmVhdGVTZWN0aW9ucyh0aGlzLm9wdGlvbnMuaXRlbXMpKVxuXHRcdClcblxuXG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudDtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdHVwZGF0ZVNlY3Rpb25EdXJhdGlvbigpIHtcblx0XHRpZih0aGlzLml0ZW1zICE9IG51bGwgJiYgdGhpcy5pdGVtcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRjb25zdCBsZW5ndGggPSB0aGlzLml0ZW1zLmxlbmd0aFxuXHRcdFx0dGhpcy5pdGVtc1tsZW5ndGggLSAxXS5lbmQgPSB0aGlzLnBsYXllci52aWRlby5kdXJhdGlvbjtcblxuXHRcdFx0Ly8gVE9ETzog0J/RgNC+0LTRg9C80LDRgtGMINGE0YPQvdC60YbQuNGP0Y4gdXBkYXRlU2VjdGlvblxuXHRcdFx0Ly90aGlzLnVwZGF0ZVNlY3Rpb24odGhpcy5pdGVtc1tsZW5ndGggLSAxXSwgbGVuZ3RoIC0gMSk7XG5cdFx0fVxuXHR9XG5cblxuXHRvblNlY3Rpb25DbGljayhlKSB7XG5cdFx0Y29uc3QgdmlkZW8gPSB0aGlzLnBsYXllci52aWRlbztcblx0XHRjb25zdCBzZWN0aW9uID0gJChlLnRhcmdldCkuY2xvc2VzdCgnLmxlcGxheWVyLXNlY3Rpb24nKTtcblx0XHR2aWRlby5jdXJyZW50VGltZSA9IHNlY3Rpb24uYXR0cignZGF0YS1iZWdpbicpO1xuXHRcdHRoaXMucGxheWVyLnRyaWdnZXIoJ3NlY3Rpb25zY2xpY2snLCB7IHNlY3Rpb24gOiB0aGlzLml0ZW1zW3NlY3Rpb24uYXR0cignZGF0YS1pbmRleCcpXX0pO1xuXHR9XG5cblx0c2V0QWN0aXZlQnlJbmRleChpbmRleCkge1xuXHRcdGlmIChcblx0XHRcdHRoaXMuYWN0aXZlU2VjdGlvbi5sZW5ndGggPT09IDAgfHxcblx0XHRcdHBhcnNlSW50KHRoaXMuYWN0aXZlU2VjdGlvbi5hdHRyKCdkYXRhLWluZGV4JykpID09PSBpbmRleCB8fFxuXHRcdFx0dGhpcy5nZXRTZWN0aW9uQnlJbmRleChpbmRleCkubGVuZ3RoID09PSAwXG5cdFx0KSB7XG5cdFx0XHRyZXR1cm4gdGhpc1xuXHRcdH1cblxuXHRcdHRoaXMuYWN0aXZlU2VjdGlvbi5yZW1vdmVDbGFzcygnbGVwbGF5ZXItc2VjdGlvbi0tYWN0aXZlJyk7XG5cdFx0dGhpcy5hY3RpdmVTZWN0aW9uID0gdGhpcy5nZXRTZWN0aW9uQnlJbmRleChpbmRleCk7XG5cdFx0dGhpcy5hY3RpdmVTZWN0aW9uLmFkZENsYXNzKCdsZXBsYXllci1zZWN0aW9uLS1hY3RpdmUnKTtcblxuXHRcdGNvbnN0IHRvcFBvc2l0aW9uID0gdGhpcy5hY3RpdmVTZWN0aW9uLnBvc2l0aW9uKCkudG9wO1xuXG5cdFx0dGhpcy5zY3JvbGxFbGVtZW50XG5cdFx0XHQuYW5pbWF0ZSh7XG5cdFx0XHRcdHNjcm9sbFRvcCA6IHRoaXMuc2Nyb2xsRWxlbWVudC5zY3JvbGxUb3AoKSArIHRvcFBvc2l0aW9uXG5cdFx0XHR9LCA4MDApXG5cblx0XHR0aGlzLnBsYXllci50cmlnZ2VyKCdzZWN0aW9uc2NoYW5nZScsIHsgc2VjdGlvbiA6IHRoaXMuaXRlbXNbaW5kZXhdfSk7XG5cblx0XHRyZXR1cm4gdGhpc1xuXHR9XG5cblx0Z2V0U2VjdGlvbkJ5SW5kZXgoaW5kZXgpIHtcblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50LmZpbmQoYC5sZXBsYXllci1zZWN0aW9uW2RhdGEtaW5kZXg9XCIke2luZGV4fVwiXWApO1xuXHR9XG5cblxuXHRvblRpbWVVcGRhdGUoZSwgZGF0YSkge1xuXHRcdGlmICh0aGlzLmFjdGl2ZVNlY3Rpb24ubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm5cblx0XHR9XG5cblx0XHRjb25zdCBjdXJyZW50VGltZSA9IHRoaXMucGxheWVyLmN1cnJlbnRUaW1lO1xuXG5cdFx0Ly8gVXBkYXRlIHNwYW4gd2l0aCBlbmQgc2VjdGlvbiB0aW1lXG5cdFx0Ly8gVE9ETzog0JLRi9C90LXRgdGC0Lgg0Y3RgtC+INCyINC+0YLQtNC10LvRjNC90YvQuSDQutC+0LzQv9C+0L3QtdC90YIgU2hvd1RpbWUg0LjQu9C4INGC0LjQv9C+INGC0L7Qs9C+XG5cdFx0aWYodGhpcy5wbGF5ZXIudmlldyA9PT0gJ21pbmknKSB7XG5cdFx0XHRjb25zdCBlbmRTZWN0aW9uVGltZSA9IHRoaXMuYWN0aXZlU2VjdGlvbi5hdHRyKCdkYXRhLWVuZCcpO1xuXHRcdFx0dGhpcy5hY3RpdmVTZWN0aW9uXG5cdFx0XHRcdC5uZXh0KClcblx0XHRcdFx0LmZpbmQoJy50aW1lJylcblx0XHRcdFx0LnRleHQoc2Vjb25kc1RvVGltZShlbmRTZWN0aW9uVGltZSAtIGN1cnJlbnRUaW1lKSk7XG5cdFx0fVxuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBzZWN0aW9uID0gdGhpcy5pdGVtc1tpXTtcblx0XHRcdGlmIChjdXJyZW50VGltZSA8IHNlY3Rpb24uZW5kKSB7XG5cdFx0XHRcdHRoaXMuc2V0QWN0aXZlQnlJbmRleChpKVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRfb25TZWN0aW9uc1RvZ2dsZShlLCBkYXRhKSB7XG5cdFx0aWYgKHRoaXMuZWxlbWVudC5oYXNDbGFzcygnbGVwbGF5ZXItc2VjdGlvbnMtLWhpZGRlbicpICYmIGRhdGEuY2hlY2tlZCkge1xuXHRcdFx0dGhpcy5lbGVtZW50LnJlbW92ZUNsYXNzKCdsZXBsYXllci1zZWN0aW9ucy0taGlkZGVuJyk7XG5cdFx0fSBlbHNlIGlmICghZGF0YS5jaGVja2VkKSB7XG5cdFx0XHR0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoJ2xlcGxheWVyLXNlY3Rpb25zLS1oaWRkZW4nKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQ3JlYXRlIEhUTUwgb2Ygc2VjdGlvbiBieSBkYXRhIGFuZCBpbmRleCBzZWN0aW9uXG5cdCAqXG5cdCAqIEByZXR1cm5zIHtTdHJpbmd9IEhUTUxcblx0ICovXG5cdGNyZWF0ZVNlY3Rpb24oc2VjdGlvbiwgaW5kZXgpIHtcblx0XHRjb25zdCBpdGVtcyA9IHRoaXMuaXRlbXMgfHwgdGhpcy5vcHRpb25zLml0ZW1zO1xuXHRcdGNvbnN0IGl0ZW0gPSBgXG5cdFx0XHQ8ZGl2IGNsYXNzPVwibGVwbGF5ZXItc2VjdGlvbiAkeyFpbmRleCA/ICdsZXBsYXllci1zZWN0aW9uLS1hY3RpdmUnIDogJyd9XCJcblx0XHRcdFx0ZGF0YS1iZWdpbj1cIiR7c2VjdGlvbi5iZWdpbn1cIlxuXHRcdFx0XHRkYXRhLWluZGV4PVwiJHtpbmRleC50b1N0cmluZygpfVwiXG5cdFx0XHRcdGRhdGEtZW5kPVwiJHtzZWN0aW9uLmVuZH1cIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImxlcGxheWVyLXNlY3Rpb24tdGltZVwiPiR7c2Vjb25kc1RvVGltZShzZWN0aW9uLmJlZ2luKX08L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImxlcGxheWVyLXNlY3Rpb24taW5mb1wiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJsZXBsYXllci1zZWN0aW9uLW5leHQtaW5mb1wiPlxuXHRcdFx0XHRcdFx0JHtzZWN0aW9uLm5leHRJbmZvIHx8ICfQodC70LXQtNGD0Y7RidCw0Y8g0YHQtdC60YbQuNGPINC90LDRh9C90LXRgtGB0Y8g0YfQtdGA0LXQtyd9XG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cInRpbWVcIj4ke3NlY29uZHNUb1RpbWUoaXRlbXNbMF0uZW5kKX08L3NwYW4+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0JHtcblx0XHRcdFx0XHRcdHNlY3Rpb24udGl0bGUgIT0gbnVsbCA/XG5cdFx0XHRcdFx0XHRcdGA8ZGl2IGNsYXNzPVwibGVwbGF5ZXItc2VjdGlvbi10aXRsZVwiPiR7c2VjdGlvbi50aXRsZX08L2Rpdj5gXG5cdFx0XHRcdFx0XHQ6ICcnXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdCR7XG5cdFx0XHRcdFx0XHRzZWN0aW9uLmRlc2NyaXB0aW9uICE9IG51bGwgP1xuXHRcdFx0XHRcdFx0XHRgPGRpdiBjbGFzcz1cImxlcGxheWVyLXNlY3Rpb24tZGVzY3JpcHRpb25cIj4ke3NlY3Rpb24uZGVzY3JpcHRpb259PC9kaXY+YFxuXHRcdFx0XHRcdFx0OiAnJ1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRgLnRyaW0oKVxuXHRcdHJldHVybiBpdGVtXG5cdH1cblxuXHQvLyBUT0RPOiDQn9GA0LjQtNGD0LzQsNGC0Ywg0YfRgtC+INGB0LTQtdC70LDRgtGMINGBINGB0L7QsdGL0YLQuNGP0LzQuCDQv9C+0YHQu9C1INC+0LHQvdC+0LLQu9C10L3QuNGPINC/0L7Qu9C90L7RgdGM0Y4g0YHQtdC60YbQuNC4XG5cdC8qKlxuXHQgKiBGaW5kIHNlY3Rpb24gYnkgaW5kZXggYW5kIHVwZGF0ZSBoaW0gdXNpbmcgZGF0YVxuXHQgKlxuXHQgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuXHQgKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcblx0ICovXG5cdHVwZGF0ZVNlY3Rpb24oZGF0YSwgaW5kZXgpIHtcblx0XHR0aGlzLmdldFNlY3Rpb25CeUluZGV4KGluZGV4KVxuXHRcdFx0LnJlcGxhY2VXaXRoKHRoaXMuY3JlYXRlU2VjdGlvbihkYXRhLCBpbmRleCkpXG5cdFx0XHQub24oJ2NsaWNrJywgdGhpcy5vblNlY3Rpb25DbGljay5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdF9jcmVhdGVTZWN0aW9ucyhpdGVtcykge1xuXHRcdGxldCByZXN1bHQgPSAnJztcblx0XHRpdGVtcy5mb3JFYWNoKChzZWN0aW9uLCBpbmRleCkgPT4ge1xuXHRcdFx0cmVzdWx0ICs9IHRoaXMuY3JlYXRlU2VjdGlvbihzZWN0aW9uLCBpbmRleCk7XG5cdFx0fSk7XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ1NlY3Rpb25zJywgU2VjdGlvbnMpO1xuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbnM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9TZWN0aW9ucy5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgRXJyb3JEaXNwbGF5LmpzXG4gKi9cblxuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5cbi8qKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQGNsYXNzIEVycm9yRGlzcGxheVxuICogQGV4dGVuZHMgQ29tcG9uZW50XG4gKi9cbmNsYXNzIEVycm9yRGlzcGxheSBleHRlbmRzIENvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblx0XHRpZih0aGlzLnBsYXllci5fZXJyb3IgIT0gbnVsbCkge1xuXHRcdFx0dGhpcy5tZXNzYWdlID0gdGhpcy5wbGF5ZXIuX2Vycm9yLm1lc3NhZ2U7XG5cdFx0XHR0aGlzLmVsZW1lbnQuc2hvdygpO1xuXHRcdH1cblx0XHR0aGlzLnBsYXllci5vbignZXJyb3InLCB0aGlzLm9uUGxheWVyRXJyb3IuYmluZCh0aGlzKSk7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdHRoaXMuZWxlbWVudCA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0LmFkZENsYXNzKCdsZXBsYXllci1lcnJvci1kaXNwbGF5Jylcblx0fVxuXG5cdHNldCBtZXNzYWdlKHZhbHVlKSB7XG5cdFx0dGhpcy5lbGVtZW50Lmh0bWwodmFsdWUpO1xuXHR9XG5cblx0b25QbGF5ZXJFcnJvcihlLCBkYXRhKSB7XG5cdFx0Y29uc3QgZXJyb3IgPSBkYXRhLmVycm9yO1xuXHRcdHRoaXMubWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XG5cdFx0dGhpcy5lbGVtZW50LnNob3coKTtcblx0fVxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ0Vycm9yRGlzcGxheScsIEVycm9yRGlzcGxheSk7XG5leHBvcnQgZGVmYXVsdCBFcnJvckRpc3BsYXk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9FcnJvckRpc3BsYXkuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIEVycm9yRGlzcGxheS5qc1xuICovXG5cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy51cmxdIHBhdGggdG8gcG9zdGVyIGltYWdlXG4gKiBAY2xhc3MgUG9zdGVyXG4gKiBAZXh0ZW5kcyBDb21wb25lbnRcbiAqL1xuY2xhc3MgUG9zdGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnM9e30pIHtcblx0XHRvcHRpb25zID0gJC5leHRlbmQoe30sIHtcblx0XHRcdHVybCA6IG9wdGlvbnMudXJsXG5cdFx0fSwgb3B0aW9ucyk7XG5cblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXG5cdFx0dGhpcy51cmwgPSB0aGlzLm9wdGlvbnMudXJsO1xuXHR9XG5cblx0c2V0IHVybCh2YWx1ZSkge1xuXHRcdGlmKHZhbHVlID09IG51bGwpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy5fdXJsID0gdmFsdWU7XG5cdFx0dGhpcy5lbGVtZW50LmNzcygnYmFja2dyb3VuZC1pbWFnZScsIGB1cmwoXCIke3ZhbHVlfVwiKWApXG5cdH1cblxuXHRnZXQgdXJsKCkge1xuXHRcdHJldHVybiB0aGlzLl91cmw7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdHRoaXMuZWxlbWVudCA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0LmFkZENsYXNzKCdsZXBsYXllci1wb3N0ZXInKTtcblxuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQ7XG5cdH1cblxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ1Bvc3RlcicsIFBvc3Rlcik7XG5leHBvcnQgZGVmYXVsdCBQb3N0ZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9Qb3N0ZXIuanMiLCIvKipcbiAqIEBmaWxlIGZ1bGxzY3JlZW4tYXBpLmpzXG4gKi9cblxuXG4vKlxuICogU3RvcmUgdGhlIGJyb3dzZXItc3BlY2lmaWMgbWV0aG9kcyBmb3IgdGhlIGZ1bGxzY3JlZW4gQVBJXG4gKiBAdHlwZSB7T2JqZWN0fHVuZGVmaW5lZH1cbiAqIEBwcml2YXRlXG4gKi9cbmxldCBGdWxsc2NyZWVuQXBpID0ge307XG5cbi8vIGJyb3dzZXIgQVBJIG1ldGhvZHNcbi8vIG1hcCBhcHByb2FjaCBmcm9tIFNjcmVlbmZ1bC5qcyAtIGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvc2NyZWVuZnVsbC5qc1xuY29uc3QgYXBpTWFwID0gW1xuXHQvLyBTcGVjOiBodHRwczovL2R2Y3MudzMub3JnL2hnL2Z1bGxzY3JlZW4vcmF3LWZpbGUvdGlwL092ZXJ2aWV3Lmh0bWxcblx0W1xuXHRcdCdyZXF1ZXN0RnVsbHNjcmVlbicsXG5cdFx0J2V4aXRGdWxsc2NyZWVuJyxcblx0XHQnZnVsbHNjcmVlbkVsZW1lbnQnLFxuXHRcdCdmdWxsc2NyZWVuRW5hYmxlZCcsXG5cdFx0J2Z1bGxzY3JlZW5jaGFuZ2UnLFxuXHRcdCdmdWxsc2NyZWVuZXJyb3InXG5cdF0sXG5cdC8vIFdlYktpdFxuXHRbXG5cdFx0J3dlYmtpdFJlcXVlc3RGdWxsc2NyZWVuJyxcblx0XHQnd2Via2l0RXhpdEZ1bGxzY3JlZW4nLFxuXHRcdCd3ZWJraXRGdWxsc2NyZWVuRWxlbWVudCcsXG5cdFx0J3dlYmtpdEZ1bGxzY3JlZW5FbmFibGVkJyxcblx0XHQnd2Via2l0ZnVsbHNjcmVlbmNoYW5nZScsXG5cdFx0J3dlYmtpdGZ1bGxzY3JlZW5lcnJvcidcblx0XSxcblx0Ly8gT2xkIFdlYktpdCAoU2FmYXJpIDUuMSlcblx0W1xuXHRcdCd3ZWJraXRSZXF1ZXN0RnVsbFNjcmVlbicsXG5cdFx0J3dlYmtpdENhbmNlbEZ1bGxTY3JlZW4nLFxuXHRcdCd3ZWJraXRDdXJyZW50RnVsbFNjcmVlbkVsZW1lbnQnLFxuXHRcdCd3ZWJraXRDYW5jZWxGdWxsU2NyZWVuJyxcblx0XHQnd2Via2l0ZnVsbHNjcmVlbmNoYW5nZScsXG5cdFx0J3dlYmtpdGZ1bGxzY3JlZW5lcnJvcidcblx0XSxcblx0Ly8gTW96aWxsYVxuXHRbXG5cdFx0J21velJlcXVlc3RGdWxsU2NyZWVuJyxcblx0XHQnbW96Q2FuY2VsRnVsbFNjcmVlbicsXG5cdFx0J21vekZ1bGxTY3JlZW5FbGVtZW50Jyxcblx0XHQnbW96RnVsbFNjcmVlbkVuYWJsZWQnLFxuXHRcdCdtb3pmdWxsc2NyZWVuY2hhbmdlJyxcblx0XHQnbW96ZnVsbHNjcmVlbmVycm9yJ1xuXHRdLFxuXHQvLyBNaWNyb3NvZnRcblx0W1xuXHRcdCdtc1JlcXVlc3RGdWxsc2NyZWVuJyxcblx0XHQnbXNFeGl0RnVsbHNjcmVlbicsXG5cdFx0J21zRnVsbHNjcmVlbkVsZW1lbnQnLFxuXHRcdCdtc0Z1bGxzY3JlZW5FbmFibGVkJyxcblx0XHQnTVNGdWxsc2NyZWVuQ2hhbmdlJyxcblx0XHQnTVNGdWxsc2NyZWVuRXJyb3InXG5cdF1cbl07XG5cblxubGV0IHNwZWNBcGkgPSBhcGlNYXBbMF07XG5cbmxldCBicm93c2VyQXBpO1xuXG4vLyBkZXRlcm1pbmUgdGhlIHN1cHBvcnRlZCBzZXQgb2YgZnVuY3Rpb25zXG5mb3IgKGxldCBpID0gMDsgaSA8IGFwaU1hcC5sZW5ndGg7IGkrKykge1xuXHQvLyBjaGVjayBmb3IgZXhpdEZ1bGxzY3JlZW4gZnVuY3Rpb25cblx0aWYgKGFwaU1hcFtpXVsxXSBpbiBkb2N1bWVudCkge1xuXHRcdGJyb3dzZXJBcGkgPSBhcGlNYXBbaV07XG5cdFx0YnJlYWs7XG5cdH1cbn1cblxuLy8gbWFwIHRoZSBicm93c2VyIEFQSSBuYW1lcyB0byB0aGUgc3BlYyBBUEkgbmFtZXNcbmlmIChicm93c2VyQXBpKSB7XG5cdGZvciAobGV0IGk9MDsgaTxicm93c2VyQXBpLmxlbmd0aDsgaSsrKSB7XG5cdFx0RnVsbHNjcmVlbkFwaVtzcGVjQXBpW2ldXSA9IGJyb3dzZXJBcGlbaV07XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRnVsbHNjcmVlbkFwaTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9GdWxsc2NyZWVuQXBpLmpzIiwiLyoqXG4gKiBAZmlsZSBicm93c2VyLmpzXG4gKi9cblxuXG5jb25zdCBVU0VSX0FHRU5UID0gd2luZG93Lm5hdmlnYXRvciAmJiB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCB8fCAnJztcblxuZXhwb3J0IGNvbnN0IElTX01PQklMRSA9ICgvTW9iaWxlL2kpLnRlc3QoVVNFUl9BR0VOVCk7XG5cbmV4cG9ydCBjb25zdCBJU19DSFJPTUUgPSBVU0VSX0FHRU5ULmluZGV4T2YoJ0Nocm9tZScpID4gLTE7XG5cbmV4cG9ydCBjb25zdCBJU19BTkRST0lEID0gKC9BbmRyb2lkL2kpLnRlc3QoVVNFUl9BR0VOVCk7XG5cbmV4cG9ydCBjb25zdCBJU19BTkRST0lEX1BIT05FID0gSVNfQU5EUk9JRCAmJiBJU19NT0JJTEU7XG5cbmV4cG9ydCBjb25zdCBJU19JUEFEID0gKC9pUGFkL2kpLnRlc3QoVVNFUl9BR0VOVCk7XG4vLyBUaGUgRmFjZWJvb2sgYXBwJ3MgVUlXZWJWaWV3IGlkZW50aWZpZXMgYXMgYm90aCBhbiBpUGhvbmUgYW5kIGlQYWQsIHNvXG4vLyB0byBpZGVudGlmeSBpUGhvbmVzLCB3ZSBuZWVkIHRvIGV4Y2x1ZGUgaVBhZHMuXG4vLyBodHRwOi8vYXJ0c3kuZ2l0aHViLmlvL2Jsb2cvMjAxMi8xMC8xOC90aGUtcGVyaWxzLW9mLWlvcy11c2VyLWFnZW50LXNuaWZmaW5nL1xuZXhwb3J0IGNvbnN0IElTX0lQSE9ORSA9ICgvaVBob25lL2kpLnRlc3QoVVNFUl9BR0VOVCkgJiYgIUlTX0lQQUQ7XG5leHBvcnQgY29uc3QgSVNfSVBPRCA9ICgvaVBvZC9pKS50ZXN0KFVTRVJfQUdFTlQpO1xuZXhwb3J0IGNvbnN0IElTX0lPUyA9IElTX0lQSE9ORSB8fCBJU19JUEFEIHx8IElTX0lQT0Q7XG5cbmV4cG9ydCBjb25zdCBJU19TQUZBUkkgPSBVU0VSX0FHRU5ULmluZGV4T2YoJ1NhZmFyaScpID4gLTEgJiYgIUlTX0NIUk9NRTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy91dGlscy9icm93c2VyLmpzIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuY2xhc3MgTWVkaWFFcnJvciB7XG5cdGNvbnN0cnVjdG9yKHZhbHVlKSB7XG5cdFx0aWYodmFsdWUgaW5zdGFuY2VvZiBNZWRpYUVycm9yKSB7XG5cdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG5cdFx0XHR0aGlzLmNvZGUgPSB2YWx1ZTtcblx0XHR9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcblx0XHQvLyBkZWZhdWx0IGNvZGUgaXMgemVybywgc28gdGhpcyBpcyBhIGN1c3RvbSBlcnJvclxuXHRcdFx0dGhpcy5tZXNzYWdlID0gdmFsdWU7XG5cdFx0fSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG5cblx0XHRcdC8vIFdlIGFzc2lnbiB0aGUgYGNvZGVgIHByb3BlcnR5IG1hbnVhbGx5IGJlY2F1c2UgbmF0aXZlIE1lZGlhRXJyb3Igb2JqZWN0c1xuXHRcdFx0Ly8gZG8gbm90IGV4cG9zZSBpdCBhcyBhbiBvd24vZW51bWVyYWJsZSBwcm9wZXJ0eSBvZiB0aGUgb2JqZWN0LlxuXHRcdFx0aWYgKHR5cGVvZiB2YWx1ZS5jb2RlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHR0aGlzLmNvZGUgPSB2YWx1ZS5jb2RlO1xuXHRcdFx0fVxuXG5cdFx0XHQkLmV4dGVuZCh0aGlzLCB2YWx1ZSk7XG5cdFx0fVxuXG5cdFx0aWYgKCF0aGlzLm1lc3NhZ2UpIHtcblx0XHRcdHRoaXMubWVzc2FnZSA9IE1lZGlhRXJyb3IuZGVmYXVsdE1lc3NhZ2VzW3RoaXMuY29kZV0gfHwgJyc7XG5cdFx0fVxuXHR9XG59XG5cbk1lZGlhRXJyb3IucHJvdG90eXBlLmNvZGUgPSAwO1xuXG5NZWRpYUVycm9yLnByb3RvdHlwZS5tZXNzYWdlID0gJyc7XG5cbk1lZGlhRXJyb3IuZXJyb3JUeXBlcyA9IFtcblx0J01FRElBX0VSUl9DVVNUT00nLFxuXHQnTUVESUFfRVJSX0FCT1JURUQnLFxuXHQnTUVESUFfRVJSX05FVFdPUksnLFxuXHQnTUVESUFfRVJSX0RFQ09ERScsXG5cdCdNRURJQV9FUlJfU1JDX05PVF9TVVBQT1JURUQnLFxuXHQnTUVESUFfRVJSX0VOQ1JZUFRFRCdcbl07XG5cblxuTWVkaWFFcnJvci5kZWZhdWx0TWVzc2FnZXMgPSB7XG5cdDEgOiAn0JLRiyDQv9GA0LXRgNCy0LDQu9C4INC30LDQs9GA0YPQt9C60YMg0LLQuNC00LXQvi4nLFxuXHQyIDogJ9CX0LDQs9GA0YPQt9C60LAg0LLQuNC00LXQviDQv9GA0LXRgNCy0LDQvdCwINC40Lct0LfQsCDQv9C+0YLQtdGA0Lgg0YHQvtC10LTQuNC90LXQvdC40Y8uJyxcblx0MyA6ICfQl9Cw0LPRgNGD0LfQutCwINCy0LjQtNC10L4g0L7RgdGC0LDQvdC+0LLQu9C10L3QsCDQuNC3LdC30LAg0L/RgNC+0LHQu9C10Lwg0YEg0LLQuNC00LXQvtGE0LDQudC70L7QvCDQuNC70Lgg0LjQty3Qt9CwINGC0L7Qs9C+LCDRh9GC0L4g0LLQsNGIINCx0YDQsNGD0LfQtdGAINC90LUg0L/QvtC00LTQtdGA0LbQuNCy0LDQtdGCINCy0L7RgdC/0YDQvtC40LfQstC10LTQtdC90LjQtSDQtNCw0L3QvdC+0LPQviDRhNCw0LnQu9CwLicsXG5cdDQgOiAn0JLQuNC00LXQviDQvdC1INC80L7QttC10YIg0LHRi9GC0Ywg0LfQsNCz0YDRg9C20LXQvdC+INC40Lct0LfQsCDQv9GA0L7QsdC70LXQvCDRgSDQuNC90YLQtdGA0L3QtdGCLdGB0L7QtdC00LjQvdC10L3QuNC10Lwg0LjQu9C4INC/0YDQvtCx0LvQtdC8INC90LAg0YHQtdGA0LLQtdGA0LUuINCY0LvQuCDRhNC+0YDQvNCw0YIg0YTQsNC50LvQsCDQvdC1INC/0L7QtNC00LXRgNC20LjQstCw0LXRgtGB0Y8g0LLQsNGI0LjQvCDQsdGA0LDRg9C30LXRgNC+0LwuJyxcblx0NSA6ICfQktC40LTQtdC+INC30LDRiNC40YTRgNC+0LLQsNC90L4sINC4INC80Ysg0L3QtSDQvNC+0LbQtdC8INC10LPQviDRgNCw0YHRiNC40YTRgNC+0LLQsNGC0YwuJ1xufTtcblxuLy8gQWRkIHR5cGVzIGFzIHByb3BlcnRpZXMgb24gTWVkaWFFcnJvclxuLy8gZS5nLiBNZWRpYUVycm9yLk1FRElBX0VSUl9TUkNfTk9UX1NVUFBPUlRFRCA9IDQ7XG5mb3IgKGxldCBlcnJOdW0gPSAwOyBlcnJOdW0gPCBNZWRpYUVycm9yLmVycm9yVHlwZXMubGVuZ3RoOyBlcnJOdW0rKykge1xuXHRNZWRpYUVycm9yW01lZGlhRXJyb3IuZXJyb3JUeXBlc1tlcnJOdW1dXSA9IGVyck51bTtcblx0Ly8gdmFsdWVzIHNob3VsZCBiZSBhY2Nlc3NpYmxlIG9uIGJvdGggdGhlIGNsYXNzIGFuZCBpbnN0YW5jZVxuXHRNZWRpYUVycm9yLnByb3RvdHlwZVtNZWRpYUVycm9yLmVycm9yVHlwZXNbZXJyTnVtXV0gPSBlcnJOdW07XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lZGlhRXJyb3I7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvTWVkaWFFcnJvci5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgUGxheUNvbnRyb2wuanNcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL0NvbnRyb2wnO1xuXG4vKipcbiAqIEBjbGFzcyBQbGF5Q29udHJvbFxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQGV4dGVuZHMgQ29udHJvbFxuICovXG5jbGFzcyBQbGF5Q29udHJvbCBleHRlbmRzIENvbnRyb2wge1xuXHRjb25zdHJ1Y3RvciAocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRpY29uTmFtZSA6ICdwbGF5Jyxcblx0XHRcdHRpdGxlIDogJ9CS0L7RgdC/0YDQvtC40LfQstC10YHRgtC4INCy0LjQtNC10L4nLFxuXHRcdFx0Y2xhc3NOYW1lIDogJ3BsYXknLFxuXHRcdFx0bmFtZSA6ICdwbGF5J1xuXHRcdH0sIG9wdGlvbnMpO1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cblx0XHR0aGlzLnBsYXllci5vbigncGxheScsIHRoaXMuc2hvd1BhdXNlLmJpbmQodGhpcykpXG5cdFx0dGhpcy5wbGF5ZXIub24oJ3BhdXNlJywgdGhpcy5zaG93UGxheS5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLnBsYXllci5vbignZW5kZWQnLCB0aGlzLnNob3dSZXBsYXkuYmluZCh0aGlzKSk7XG5cblx0XHR0aGlzLnBsYXllci5vbignc2Vla2luZyBwbGF5JywgdGhpcy5yZW1vdmVSZXBsYXkuYmluZCh0aGlzKSk7XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBQYXVzZSB0aGUgdmlkZW9cblx0ICovXG5cdHNob3dQbGF5ICgpIHtcblx0XHR0aGlzLmljb24uaWNvbk5hbWUgPSAncGxheSc7XG5cdFx0dGhpcy5lbGVtZW50LmF0dHIoJ3RpdGxlJywgdGhpcy5vcHRpb25zLnRpdGxlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBQbGF5IHRoZSB2aWRlb1xuXHQgKi9cblx0c2hvd1BhdXNlICgpIHtcblx0XHR0aGlzLmljb24uaWNvbk5hbWUgPSAncGF1c2UnO1xuXHRcdHRoaXMuZWxlbWVudC5hdHRyKCd0aXRsZScsICfQn9C+0YHRgtCw0LLQuNGC0Ywg0L3QsCDQv9Cw0YPQt9GDJyk7XG5cdH1cblxuXHRzaG93UmVwbGF5KCkge1xuXHRcdGlmKHRoaXMucGxheWVyLmR1cmF0aW9uICE9PSBJbmZpbml0eSkge1xuXHRcdFx0dGhpcy5fcmVwbGF5ID0gdHJ1ZTtcblx0XHRcdHRoaXMuaWNvbi5pY29uTmFtZSA9ICdyZWZyZXNoJztcblx0XHRcdHRoaXMuZWxlbWVudC5hdHRyKCd0aXRsZScsICfQl9Cw0L/Rg9GB0YLQuNGC0Ywg0LfQsNC90L7QstC+Jylcblx0XHR9XG5cdH1cblxuXHRyZW1vdmVSZXBsYXkoKSB7XG5cdFx0aWYoIXRoaXMuX3JlcGxheSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0aGlzLl9yZXBsYXkgPSBmYWxzZTtcblxuXHRcdGlmKHRoaXMucGxheWVyLnZpZGVvLnBhdXNlZCkge1xuXHRcdFx0dGhpcy5zaG93UGxheSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnNob3dQYXVzZSgpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdG9uQ2xpY2soZSkge1xuXHRcdC8vc3VwZXIub25DbGljayhlKTtcblx0XHR0aGlzLnBsYXllci52aWRlby50b2dnbGVQbGF5KCk7XG5cdH1cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdQbGF5Q29udHJvbCcsIFBsYXlDb250cm9sKTtcbkNvbnRyb2wucmVnaXN0ZXJDb250cm9sKCdwbGF5JywgUGxheUNvbnRyb2wpO1xuZXhwb3J0IGRlZmF1bHQgUGxheUNvbnRyb2w7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9QbGF5Q29udHJvbC5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgVm9sdW1lQ29udHJvbC5qc1xuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCBDb250cm9sIGZyb20gJy4vQ29udHJvbCc7XG5pbXBvcnQgQ29udHJvbERyb3Bkb3duIGZyb20gJy4vQ29udHJvbERyb3Bkb3duJztcblxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAY2xhc3MgVm9sdW1lQ29udHJvbFxuICogQGV4dGVuZHMgQ29udHJvbERyb3Bkb3duXG4gKi9cbmNsYXNzIFZvbHVtZUNvbnRyb2wgZXh0ZW5kcyBDb250cm9sRHJvcGRvd24ge1xuXG5cdGNvbnN0cnVjdG9yIChwbGF5ZXIsIG9wdGlvbnM9e30pIHtcblx0XHRvcHRpb25zID0gJC5leHRlbmQoe30sIHtcblx0XHRcdGljb25OYW1lIDogJ3ZvbHVtZS1kb3duJyxcblx0XHRcdGNsYXNzTmFtZSA6ICd2b2x1bWUtY29udHJvbCcsXG5cdFx0XHRuYW1lIDogJ3ZvbHVtZSdcblx0XHR9LCBvcHRpb25zKTtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ3ZvbHVtZWNoYW5nZScsIChlLCBkYXRhKSA9PiB7XG5cdFx0XHRjb25zdCB2aWRlbyA9IHRoaXMucGxheWVyLnZpZGVvO1xuXHRcdFx0dGhpcy52YWx1ZSA9IHZpZGVvLm11dGVkID8gMCA6IHZpZGVvLnZvbHVtZTtcblx0XHR9KVxuXHR9XG5cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHRzdXBlci5jcmVhdGVFbGVtZW50KCk7XG5cdFx0bGV0IGRyYWcgPSBmYWxzZTtcblx0XHRjb25zdCB2aWRlbyA9IHRoaXMucGxheWVyLnZpZGVvO1xuXG5cdFx0dGhpcy5tYXJrZXIgPSAkKCc8ZGl2Lz4nKS5hZGRDbGFzcygndm9sdW1lLW1hcmtlcicpO1xuXG5cdFx0dGhpcy5hY3RpdmUgPSAkKCc8ZGl2Lz4nKS5hZGRDbGFzcygndm9sdW1lLWFjdGl2ZScpO1xuXG5cdFx0dGhpcy5saW5lID0gJCgnPGRpdi8+Jylcblx0XHRcdC5hZGRDbGFzcygndm9sdW1lLWxpbmUnKVxuXHRcdFx0LmFwcGVuZCh0aGlzLmFjdGl2ZSlcblx0XHRcdC5hcHBlbmQodGhpcy5tYXJrZXIpXG5cdFx0XHQub24oJ2NsaWNrJywgKGUpID0+IHtcblx0XHRcdFx0aWYgKGRyYWcpIHJldHVybjtcblx0XHRcdFx0bGV0IHAgPSB0aGlzLmdldFBvc2l0aW9uKGUucGFnZVkpO1xuXHRcdFx0XHRpZiAocCA+PSAwICYmIHAgPD0gMSkge1xuXHRcdFx0XHRcdGlmKHZpZGVvLm11dGVkKSB7XG5cdFx0XHRcdFx0XHR2aWRlby5tdXRlZCA9IGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR2aWRlby52b2x1bWUgPSAxIC0gcDtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHR0aGlzLmRyb3Bkb3duQ29udGVudFxuXHRcdFx0LmFkZENsYXNzKCd2b2x1bWUtc2xpZGVyJylcblx0XHRcdC5hcHBlbmQodGhpcy5saW5lKTtcblxuXHRcdHRoaXMuaWNvbi5lbGVtZW50LmF0dHIoJ3RpdGxlJywgJ9Ce0YLQutC70Y7Rh9C40YLRjCDQt9Cy0YPQuicpO1xuXG5cdFx0dGhpcy5tYXJrZXIub24oJ21vdXNlZG93bicsIChlKSA9PiB7XG5cdFx0XHRpZiAoZS53aGljaCAhPT0gMSkgcmV0dXJuO1xuXHRcdFx0ZHJhZyA9IHRydWU7XG5cdFx0fSk7XG5cblx0XHQkKGRvY3VtZW50KS5vbih7XG5cdFx0XHRtb3VzZW1vdmUgOiAoZSkgPT4ge1xuXHRcdFx0XHRpZiAoIWRyYWcpIHJldHVybjtcblx0XHRcdFx0bGV0IHAgPSB0aGlzLmdldFBvc2l0aW9uKGUucGFnZVkpO1xuXHRcdFx0XHRpZiAocCA+PSAwICYmIHAgPD0gMSkge1xuXHRcdFx0XHRcdGlmKHZpZGVvLm11dGVkKSB7XG5cdFx0XHRcdFx0XHR2aWRlby5tdXRlZCA9IGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR2aWRlby52b2x1bWUgPSAxIC0gcFxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXG5cdFx0XHRtb3VzZXVwIDogKGUpID0+IHtcblx0XHRcdFx0ZHJhZyA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQ7XG5cdH1cblxuXG5cdHNldCB2YWx1ZSAodmFsdWUpIHtcblx0XHR0aGlzLmljb24uaWNvbk5hbWUgPSB0aGlzLnBsYXllci5jYWxjVm9sdW1lSWNvbih2YWx1ZSk7XG5cblx0XHRsZXQgcCA9IE1hdGgucm91bmQodmFsdWUgKiAxMDApLnRvU3RyaW5nKCkgKyAnJSc7XG5cdFx0dGhpcy5hY3RpdmUuY3NzKCdoZWlnaHQnLCBwKTtcblx0XHR0aGlzLm1hcmtlci5jc3MoJ2JvdHRvbScsIHApO1xuXHR9XG5cblx0dG9nZ2xlTXV0ZWQgKCkge1xuXHRcdGNvbnN0IHsgdmlkZW8gfSA9IHRoaXMucGxheWVyO1xuXG5cdFx0dmlkZW8ubXV0ZWQgPSAhdmlkZW8ubXV0ZWQ7XG5cdH1cblxuXHRnZXRQb3NpdGlvbiAoeSkge1xuXHRcdHJldHVybiAoeSAtIHRoaXMubGluZS5vZmZzZXQoKS50b3ApIC8gdGhpcy5saW5lLmhlaWdodCgpO1xuXHR9XG5cblx0b25DbGljayAoZSkge1xuXHRcdHN1cGVyLm9uQ2xpY2soZSk7XG5cdFx0dGhpcy50b2dnbGVNdXRlZCgpO1xuXHR9XG5cblx0b25QbGF5ZXJJbml0ZWQoKSB7XG5cdFx0dGhpcy52YWx1ZSA9IHRoaXMucGxheWVyLnZpZGVvLmRlZmF1bHRWb2x1bWU7XG5cdH1cblxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ1ZvbHVtZUNvbnRyb2wnLCBWb2x1bWVDb250cm9sKTtcbkNvbnRyb2wucmVnaXN0ZXJDb250cm9sKCd2b2x1bWUnLCBWb2x1bWVDb250cm9sKTtcbmV4cG9ydCBkZWZhdWx0IFZvbHVtZUNvbnRyb2w7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9Wb2x1bWVDb250cm9sLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBDb250cm9sRHJvcGRvd24uanNcbiAqL1xuXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL0NvbnRyb2wnO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5cbi8qKlxuICogQGNsYXNzIENvbnRyb2xEcm9wZG93blxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHByb3BlcnR5IHtqUXVlcnl9IGRyb3Bkb3duQ29udGVudCBDb250ZW50IG9mIHBvcHVwXG4gKiBAZXh0ZW5kcyBDb250cm9sXG4gKi9cbmNsYXNzIENvbnRyb2xEcm9wZG93biBleHRlbmRzIENvbnRyb2wge1xuXG5cdGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucz17fSkge1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdtb3VzZWVudGVyJywgKCkgPT4gIXRoaXMuZGlzYWJsZSAmJiB0aGlzLmRyb3Bkb3duQ29udGVudC5zaG93KCkpO1xuXHRcdHRoaXMuZWxlbWVudC5vbignbW91c2VsZWF2ZScsICgpID0+IHRoaXMuZHJvcGRvd25Db250ZW50LmhpZGUoKSk7XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0c3VwZXIuY3JlYXRlRWxlbWVudCgpO1xuXHRcdHRoaXMuZHJvcGRvd25Db250ZW50ID0gJCgnPGRpdiAvPicpLmFkZENsYXNzKCdjb250cm9sLWRyb3Bkb3duX19jb250ZW50Jyk7XG5cdFx0dGhpcy5lbGVtZW50LmFwcGVuZCh0aGlzLmRyb3Bkb3duQ29udGVudCk7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRidWlsZENTU0NsYXNzKCkge1xuXHRcdHJldHVybiBgY29udHJvbC1kcm9wZG93biAke3N1cGVyLmJ1aWxkQ1NTQ2xhc3MoKX1gXG5cdH1cblxuXHRfb25DbGljayhlKSB7XG5cdFx0aWYoJChlLnRhcmdldCkuY2xvc2VzdCh0aGlzLmRyb3Bkb3duQ29udGVudCkubGVuZ3RoID4gMCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHN1cGVyLl9vbkNsaWNrKGUpO1xuXHR9XG5cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdDb250cm9sRHJvcGRvd24nLCBDb250cm9sRHJvcGRvd24pO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ2Ryb3Bkb3duJywgQ29udHJvbERyb3Bkb3duKTtcbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xEcm9wZG93bjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL0NvbnRyb2xEcm9wZG93bi5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgVGltZWxpbmVDb250cm9sLmpzXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vQ29tcG9uZW50JztcbmltcG9ydCBDb250cm9sIGZyb20gJy4uL0NvbnRyb2wnO1xuaW1wb3J0IENvbnRyb2xUZXh0IGZyb20gJy4uL0NvbnRyb2xUZXh0JztcbmltcG9ydCBCdWZmZXJlZFJhbmdlcyBmcm9tICcuL0J1ZmZlcmVkUmFuZ2VzJztcbmltcG9ydCBNYXJrZXIgZnJvbSAnLi9NYXJrZXInO1xuaW1wb3J0IHsgc2Vjb25kc1RvVGltZSB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAY2xhc3MgVGltZWxpbmVDb250cm9sXG4gKiBAcHJvcGVydHkge0NvbnRyb2xUZXh0fSBjdXJyZW50VGltZSBDdXJyZW50IHRpbWUncyB0ZXh0XG4gKiBAcHJvcGVydHkge0NvbnRyb2xUZXh0fSB0b3RhbFRpbWUgVG90YWwgdGltZVxuICogQHByb3BlcnR5IHtqUXVlcnl9IGxpbmVcbiAqIEBleHRlbmRzIENvbnRyb2xcbiAqL1xuY2xhc3MgVGltZWxpbmVDb250cm9sIGV4dGVuZHMgQ29udHJvbCB7XG5cblx0Y29uc3RydWN0b3IgKHBsYXllciwgb3B0aW9ucz17fSkge1xuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0bmFtZSA6ICd0aW1lbGluZScsXG5cdFx0XHRjbGFzc05hbWUgOiAndGltZWxpbmUgdGltZWxpbmUtY29udGFpbmVyJ1xuXHRcdH0sIG9wdGlvbnMpO1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cblxuXHRcdHRoaXMubWFya2VyLmVsZW1lbnQub24oJ2xlcGxheWVyX21vdXNlbW92ZScsIHRoaXMuX29uTWFya2VyTW91c2Vtb3ZlLmJpbmQodGhpcykpO1xuXG5cdFx0dGhpcy5tYXJrZXIuZWxlbWVudC5vbignbGVwbGF5ZXJfbW91c2Vkb3duJywgdGhpcy5fb25NYXJrZXJNb3VzZWRvd24uYmluZCh0aGlzKSk7XG5cblx0XHR0aGlzLnBsYXllci5vbignc2VjdGlvbnNpbml0JywgdGhpcy5vblNlY3Rpb25zSW5pdC5iaW5kKHRoaXMpKTtcblxuXHRcdHRoaXMucGxheWVyLm9uKCd0aW1ldXBkYXRlJywgdGhpcy5fb25UaW1lVXBkYXRlLmJpbmQodGhpcykpO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ3RpbWV1cGRhdGVsb2FkJywgdGhpcy5fb25UaW1lVXBkYXRlLmJpbmQodGhpcykpXG5cblx0XHR0aGlzLnBsYXllci5vbignZHVyYXRpb25jaGFuZ2UnLCB0aGlzLl9vbkR1cmF0aW9uQ2hhbmdlLmJpbmQodGhpcykpO1xuXHR9XG5cblx0X29uTWFya2VyTW91c2Vkb3duKGUpIHtcblx0XHR0aGlzLm1hcmtlclNoYWRvdy5lbGVtZW50LmhpZGUoKTtcblx0fVxuXG5cdF9vbk1hcmtlck1vdXNlbW92ZShlLCBkYXRhKSB7XG5cdFx0Y29uc3QgeCA9IGRhdGEueDtcblx0XHRjb25zdCBwID0gdGhpcy5nZXRQb3NpdGlvbih4KTtcblx0XHRjb25zdCB2aWRlbyA9IHRoaXMucGxheWVyLnZpZGVvO1xuXHRcdGlmIChwID4gMCAmJiBwIDwgMSkge1xuXHRcdFx0dGhpcy5tYXJrZXIubWFya2VyVGltZVxuXHRcdFx0XHQuc2hvdygpXG5cdFx0XHRcdC5odG1sKHNlY29uZHNUb1RpbWUodmlkZW8uZHVyYXRpb24gKiBwKSk7XG5cdFx0XHR2aWRlby5jdXJyZW50VGltZSA9IHZpZGVvLmR1cmF0aW9uICogcFxuXHRcdH1cblx0fVxuXG5cdF9vblRpbWVVcGRhdGUoZSwgZGF0YSkge1xuXHRcdGNvbnN0IGR1cmF0aW9uID0gdGhpcy5wbGF5ZXIudmlkZW8uZHVyYXRpb247XG5cdFx0Y29uc3QgdGltZSA9IHRoaXMucGxheWVyLmN1cnJlbnRUaW1lO1xuXHRcdHRoaXMuaGFyZE1vdmUodGltZSAvIGR1cmF0aW9uKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0c3VwZXIuY3JlYXRlRWxlbWVudCgpO1xuXHRcdGxldCB2aWRlbyA9IHRoaXMucGxheWVyLnZpZGVvO1xuXG5cdFx0dGhpcy5kcmFnID0gZmFsc2U7XG5cblx0XHQvLyBDcmVhdGUgbGFiZWxzXG5cdFx0dGhpcy5jdXJyZW50VGltZSA9IG5ldyBDb250cm9sVGV4dCh0aGlzLnBsYXllciwgeyBjbGFzc05hbWUgOiAndGltZS1jdXJyZW50JyB9KTtcblx0XHR0aGlzLmN1cnJlbnRUaW1lLnRleHQgPSAnMDA6MDAnO1xuXHRcdHRoaXMudG90YWxUaW1lID0gbmV3IENvbnRyb2xUZXh0KHRoaXMucGxheWVyLCB7Y2xhc3NOYW1lIDogJ3RpbWUtdG90YWwnIH0pO1xuXG5cdFx0Ly8gQ3JlYXRlIGxpbmUgd2l0aCBtYXJrZXJzIGFuZCBwbGF5ZWQgcmFuZ2VcblxuXHRcdHRoaXMubWFya2VyID0gbmV3IE1hcmtlcih0aGlzLnBsYXllciwge1xuXHRcdFx0ZHJhZyA6IHRydWVcblx0XHR9KTtcblxuXHRcdHRoaXMubWFya2VyU2hhZG93ID0gbmV3IE1hcmtlcih0aGlzLnBsYXllciwge1xuXHRcdFx0Y2xhc3NOYW1lIDogJ3NoYWRvdydcblx0XHR9KTtcblx0XHR0aGlzLm1hcmtlclNoYWRvdy5lbGVtZW50LmhpZGUoKTtcblxuXG5cdFx0Ly8gUGxheWVkIHJhbmdlc1xuXHRcdHRoaXMucGxheWVkUmFuZ2VzID0gJCgnPGRpdiAvPicpLmFkZENsYXNzKCd0aW1lLXBsYXllZCcpO1xuXG5cblx0XHQvLyBCdWZmZXJlZCByYW5nZXNcblx0XHR0aGlzLmJ1ZmZlcmVkUmFuZ2VzID0gbmV3IEJ1ZmZlcmVkUmFuZ2VzKHRoaXMucGxheWVyKS5lbGVtZW50O1xuXG5cdFx0dGhpcy5saW5lID0gJCgnPGRpdiAvPicpXG5cdFx0XHQuYWRkQ2xhc3MoJ3RpbWVsaW5lJylcblx0XHRcdC5hcHBlbmQodGhpcy5tYXJrZXIuZWxlbWVudClcblx0XHRcdC5hcHBlbmQodGhpcy5tYXJrZXJTaGFkb3cuZWxlbWVudClcblx0XHRcdC5hcHBlbmQodGhpcy5wbGF5ZWRSYW5nZXMpXG5cdFx0XHQuYXBwZW5kKHRoaXMuYnVmZmVyZWRSYW5nZXMpXG5cdFx0XHQub24oe1xuXHRcdFx0XHRtb3VzZW1vdmUgOiAoZSkgPT4ge1xuXHRcdFx0XHRcdGlmICh0aGlzLm1hcmtlci5kcmFnKSByZXR1cm47XG5cblx0XHRcdFx0XHRsZXQgcCA9IHRoaXMuZ2V0UG9zaXRpb24oZS5wYWdlWCk7XG5cdFx0XHRcdFx0aWYgKHAgPiAwICYmIHAgPCAxKSB7XG5cdFx0XHRcdFx0XHR0aGlzLm1hcmtlclNoYWRvdy5lbGVtZW50XG5cdFx0XHRcdFx0XHRcdC5zaG93KClcblx0XHRcdFx0XHRcdFx0LmNzcygnbGVmdCcsIHAgKiAxMDAgKyAnJScpO1xuXHRcdFx0XHRcdFx0dGhpcy5tYXJrZXJTaGFkb3dcblx0XHRcdFx0XHRcdFx0Lm1hcmtlclRpbWVcblx0XHRcdFx0XHRcdFx0LnNob3coKVxuXHRcdFx0XHRcdFx0XHQuaHRtbChzZWNvbmRzVG9UaW1lKHZpZGVvLmR1cmF0aW9uICogcCkpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aGlzLm1hcmtlclNoYWRvdy5lbGVtZW50LmhpZGUoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0bW91c2VsZWF2ZSA6IChlKSA9PiB7XG5cdFx0XHRcdFx0aWYgKHRoaXMuZHJhZykgcmV0dXJuO1xuXHRcdFx0XHRcdHRoaXMubWFya2VyU2hhZG93LmVsZW1lbnQuaGlkZSgpXG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0bW91c2Vkb3duIDogKGUpID0+IHtcblx0XHRcdFx0fSxcblxuXHRcdFx0XHRjbGljayA6IHRoaXMuX29uTGluZUNsaWNrLmJpbmQodGhpcyksXG5cblx0XHRcdFx0dG91Y2htb3ZlIDogKGUpID0+IHtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHR0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoJ3RpbWVsaW5lLWNvbnRhaW5lcicpXG5cdFx0XHQuYXBwZW5kKCQoJzxkaXYgLz4nKVxuXHRcdFx0XHQuYWRkQ2xhc3MoJ3RpbWVsaW5lLXN1YmNvbnRhaW5lcicpXG5cdFx0XHRcdC5hcHBlbmQodGhpcy5jdXJyZW50VGltZS5lbGVtZW50KVxuXHRcdFx0XHQuYXBwZW5kKHRoaXMubGluZSlcblx0XHRcdFx0LmFwcGVuZCh0aGlzLnRvdGFsVGltZS5lbGVtZW50KSk7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRfb25DbGljayhlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHR9XG5cblx0X29uTGluZUNsaWNrKGUpIHtcblx0XHRpZiAoZS53aGljaCAhPT0gMSkgcmV0dXJuO1xuXHRcdGlmICh0aGlzLmRyYWcpIHJldHVybjtcblx0XHRjb25zdCB2aWRlbyA9IHRoaXMucGxheWVyLnZpZGVvO1xuXHRcdHRoaXMuaGFyZE1vdmUodGhpcy5nZXRQb3NpdGlvbihlLnBhZ2VYKSk7XG5cdFx0dmlkZW8uY3VycmVudFRpbWUgPSAodmlkZW8uZHVyYXRpb24gKiB0aGlzLmdldFBvc2l0aW9uKGUucGFnZVgpKTtcblx0fVxuXG5cdG9uU2VjdGlvbnNJbml0KGUpIHtcblx0XHRjb25zdCBkdXJhdGlvbiA9IHRoaXMucGxheWVyLnZpZGVvLmR1cmF0aW9uO1xuXHRcdGlmKGlzTmFOKGR1cmF0aW9uKSkge1xuXHRcdFx0cmV0dXJuXG5cdFx0fVxuXHRcdGlmICh0aGlzLnBsYXllci5zZWN0aW9ucykge1xuXHRcdFx0dGhpcy51cGRhdGVTZWN0aW9uUmFuZ2VzKHRoaXMucGxheWVyLnNlY3Rpb25zLml0ZW1zKTtcblx0XHR9XG5cdH1cblxuXHR1cGRhdGVTZWN0aW9uUmFuZ2VzKGl0ZW1zKSB7XG5cdFx0aWYodGhpcy5zZWN0aW9ucyA9PSBudWxsIHx8IHRoaXMuc2VjdGlvbnMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHR0aGlzLnNlY3Rpb25zID0gdGhpcy5jcmVhdGVTZWN0aW9uUmFuZ2VzKGl0ZW1zKTtcblx0XHRcdHRoaXMubGluZS5hcHBlbmQodGhpcy5zZWN0aW9ucyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2VjdGlvbnMuaHRtbCh0aGlzLmNyZWF0ZVNlY3Rpb25SYW5nZXMoaXRlbXMpKTtcblx0XHR9XG5cdH1cblxuXHRjcmVhdGVTZWN0aW9uUmFuZ2VzKGl0ZW1zKSB7XG5cdFx0Y29uc3QgZHVyYXRpb24gPSB0aGlzLnBsYXllci52aWRlby5kdXJhdGlvbjtcblx0XHRsZXQgcmVzdWx0ID0gJCgnPGRpdiAvPicpLmFkZENsYXNzKCdsZXBsYXllci10aW1lbGluZS1zZWN0aW9ucycpO1xuXHRcdGl0ZW1zLmZvckVhY2goKHNlY3Rpb24pID0+IHtcblx0XHRcdGNvbnN0IGxlbmd0aCA9IChzZWN0aW9uLmVuZCAtIHNlY3Rpb24uYmVnaW4pO1xuXHRcdFx0Y29uc3QgaXRlbSA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0XHQuYWRkQ2xhc3MoJ2xlcGxheWVyLXRpbWVsaW5lLXNlY3Rpb24nKVxuXHRcdFx0XHQuY3NzKHtcblx0XHRcdFx0XHR3aWR0aCA6IGxlbmd0aCAvIGR1cmF0aW9uICogMTAwICsgJyUnLFxuXHRcdFx0XHRcdGxlZnQgOiBzZWN0aW9uLmJlZ2luIC8gZHVyYXRpb24gKiAxMDAgKyAnJSdcblx0XHRcdFx0fSk7XG5cdFx0XHRyZXN1bHQuYXBwZW5kKGl0ZW0pO1xuXHRcdH0pXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdGdldFBvc2l0aW9uICh4KSB7XG5cdFx0cmV0dXJuICh4IC0gdGhpcy5saW5lLm9mZnNldCgpLmxlZnQpIC8gdGhpcy5saW5lLndpZHRoKCk7XG5cdH1cblxuXHQvKipcblx0ICogTW92ZSBtYXJrZXIgb24gdGltZWxpbmUgb24gcGVyY2VudCBmcm9tIGFyZ3VtZW50LCBub3QgZnJvbSB2aWRlby5jdXJyZW50VGltZVxuXHQgKiBAcGFyYW0ge051bWJlcn0gcGVyY2VudCBUaGUgcGVyY2VudCB3aGljaCB5b3Ugd2FudCB0byBtb3ZlIG1hcmtlciBvbiB0aW1lbGluZVxuXHQgKi9cblx0aGFyZE1vdmUgKHBlcmNlbnQpIHtcblx0XHRsZXQgY3VycmVudFRpbWUgPSB0aGlzLnBsYXllci52aWRlby5kdXJhdGlvbiAqIHBlcmNlbnQ7XG5cdFx0aWYoaXNOYU4oY3VycmVudFRpbWUpKSByZXR1cm47XG5cdFx0cGVyY2VudCA9IHBlcmNlbnQgKiAxMDA7XG5cdFx0dGhpcy5tYXJrZXIuZWxlbWVudC5jc3MoJ2xlZnQnLCBwZXJjZW50ICsgJyUnKTtcblx0XHR0aGlzLnBsYXllZFJhbmdlcy5jc3MoJ3dpZHRoJywgcGVyY2VudCArICclJyk7XG5cdFx0dGhpcy5jdXJyZW50VGltZS50ZXh0ID0gc2Vjb25kc1RvVGltZShjdXJyZW50VGltZSk7XG5cdH1cblxuXHQvKipcblx0ICogQGRlcHJlY2F0ZWRcblx0ICovXG5cdG1vdmUgKCkge1xuXHRcdGxldCB2aWRlbyA9IHRoaXMucGxheWVyLnZpZGVvO1xuXHRcdGxldCBwZXJjZW50ID0gKHZpZGVvLmN1cnJlbnRUaW1lIC8gdmlkZW8uZHVyYXRpb24gKiAxMDApLnRvRml4ZWQoMik7XG5cdFx0bGV0IGN1cnJlbnRUaW1lID0gdmlkZW8uY3VycmVudFRpbWU7XG5cdFx0aWYoaXNOYU4oY3VycmVudFRpbWUpKSByZXR1cm47XG5cdFx0dGhpcy5tYXJrZXIuZWxlbWVudC5jc3MoJ2xlZnQnLCBwZXJjZW50ICsgJyUnKTtcblx0XHR0aGlzLnBsYXllZFJhbmdlcy5jc3MoJ3dpZHRoJywgcGVyY2VudCArICclJyk7XG5cdFx0dGhpcy5jdXJyZW50VGltZS50ZXh0ID0gc2Vjb25kc1RvVGltZShjdXJyZW50VGltZSk7XG5cdH1cblxuXG5cdHVwZGF0ZUxhYmVscygpIHtcblx0XHRjb25zdCB2aWRlbyA9IHRoaXMucGxheWVyLnZpZGVvO1xuXHRcdHRoaXMudG90YWxUaW1lLnRleHQgPSBzZWNvbmRzVG9UaW1lKDAsIE1hdGguZmxvb3IodmlkZW8uZHVyYXRpb24gLyAzNjAwKSA+IDApO1xuXHRcdGNvbnN0IHdpZHRoID0gdGhpcy50b3RhbFRpbWUuZWxlbWVudC53aWR0aCgpO1xuXG5cdFx0dGhpcy50b3RhbFRpbWUudGV4dCA9IHNlY29uZHNUb1RpbWUodmlkZW8uZHVyYXRpb24pO1xuXHRcdHRoaXMuY3VycmVudFRpbWUudGV4dCA9IHNlY29uZHNUb1RpbWUodmlkZW8uY3VycmVudFRpbWUgfHwgMCk7XG5cdFx0dGhpcy5jdXJyZW50VGltZS5lbGVtZW50LmNzcyh7XG5cdFx0XHR3aWR0aFxuXHRcdH0pXG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRvblBsYXllckluaXRlZChlKSB7XG5cdFx0dGhpcy51cGRhdGVMYWJlbHMoKTtcblx0XHRpZiAodGhpcy5wbGF5ZXIuc2VjdGlvbnMpIHtcblx0XHRcdHRoaXMudXBkYXRlU2VjdGlvblJhbmdlcyh0aGlzLnBsYXllci5zZWN0aW9ucy5pdGVtcyk7XG5cdFx0fVxuXHR9XG5cblx0X2luaXRXYXRjaEJ1ZmZlciAoKSB7XG5cdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLndhdGNoQnVmZmVySW50ZXJ2YWwpO1xuXHRcdGxldCB2aWRlbyA9IHRoaXMucGxheWVyLnZpZGVvO1xuXHRcdGxldCB1cGRhdGVQcm9ncmVzc0JhciA9ICgpID0+IHtcblx0XHRcdGNvbnN0IEVORCA9IDE7XG5cdFx0XHRjb25zdCBTVEFSVCA9IDA7XG5cdFx0XHRsZXQgcmVzdWx0ID0gJCgnJyk7XG5cdFx0XHR2aWRlby5sb2FkZWQuZm9yRWFjaChpdGVtID0+IHtcblx0XHRcdFx0bGV0IGRvbUl0ZW0gPSAkKCc8ZGl2IC8+JykuYWRkQ2xhc3MoJ3RpbWUtYnVmZmVyZWQnKTtcblx0XHRcdFx0ZG9tSXRlbS5jc3Moe1xuXHRcdFx0XHRcdGxlZnQgOiBpdGVtW1NUQVJUXSAqIDEwMCArICclJyxcblx0XHRcdFx0XHR3aWR0aCA6IChpdGVtW0VORF0gLSBpdGVtW1NUQVJUXSkgKiAxMDAgKyAnJSdcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHJlc3VsdCA9IHJlc3VsdC5hZGQoZG9tSXRlbSk7XG5cdFx0XHR9KTtcblx0XHRcdHRoaXMuYnVmZmVyZWQuaHRtbChyZXN1bHQpO1xuXHRcdFx0aWYgKHZpZGVvLmxvYWRlZC5sZW5ndGggJiYgKDEgLSB2aWRlby5sb2FkZWRTaXplKSA8PSAwLjA1KSB7XG5cdFx0XHRcdGNsZWFySW50ZXJ2YWwodGhpcy53YXRjaEJ1ZmZlckludGVydmFsKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0dGhpcy53YXRjaEJ1ZmZlckludGVydmFsID0gc2V0SW50ZXJ2YWwodXBkYXRlUHJvZ3Jlc3NCYXIsIDUwMCk7XG5cdH1cblxuXHQvKipcblx0ICogT24gZHVyYXRpb25jaGFuZ2UgZXZlbnQgaGFuZGxlclxuXHQgKi9cblx0X29uRHVyYXRpb25DaGFuZ2UgKCkge1xuXHRcdHRoaXMudXBkYXRlTGFiZWxzKCk7XG5cdFx0aWYgKHRoaXMucGxheWVyLnNlY3Rpb25zKSB7XG5cdFx0XHR0aGlzLnVwZGF0ZVNlY3Rpb25SYW5nZXModGhpcy5wbGF5ZXIuc2VjdGlvbnMuaXRlbXMpO1xuXHRcdH1cblx0fVxuXG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnVGltZWxpbmVDb250cm9sJywgVGltZWxpbmVDb250cm9sKTtcbkNvbnRyb2wucmVnaXN0ZXJDb250cm9sKCd0aW1lbGluZScsIFRpbWVsaW5lQ29udHJvbCk7XG5leHBvcnQgZGVmYXVsdCBUaW1lbGluZUNvbnRyb2w7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9UaW1lbGluZS9UaW1lbGluZUNvbnRyb2wuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIENvbnRyb2xUZXh0LmpzXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb250cm9sIGZyb20gJy4vQ29udHJvbCc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcblxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAY2xhc3MgQ29udHJvbFRleHRcbiAqIEBleG50ZWRzIENvbnRyb2xcbiAqL1xuY2xhc3MgQ29udHJvbFRleHQgZXh0ZW5kcyBDb250cm9sIHtcblx0Y29uc3RydWN0b3IgKHBsYXllciwgb3B0aW9ucz17fSkge1xuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0Y2xhc3NOYW1lIDogJydcblx0XHR9LCBvcHRpb25zKTtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHRzdXBlci5jcmVhdGVFbGVtZW50KCk7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRidWlsZENTU0NsYXNzKCkge1xuXHRcdHJldHVybiBgY29udHJvbC10ZXh0ICR7dGhpcy5vcHRpb25zLmNsYXNzTmFtZX1gO1xuXHR9XG5cblxuXHQvKipcblx0ICogU2V0dGVyIG9mIHRleHQgZmllbGRcblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcblx0ICovXG5cblx0c2V0IHRleHQgKHZhbHVlKSB7XG5cdFx0dGhpcy5fdGV4dCA9IHZhbHVlO1xuXHRcdHRoaXMuZWxlbWVudC5odG1sKHZhbHVlKTtcblx0fVxuXG5cdGdldCB0ZXh0ICgpIHtcblx0XHRyZXR1cm4gdGhpcy5fdGV4dFxuXHR9XG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnQ29udHJvbFRleHQnLCBDb250cm9sVGV4dCk7XG5Db250cm9sLnJlZ2lzdGVyQ29udHJvbCgndGV4dCcsIENvbnRyb2xUZXh0KTtcbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xUZXh0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvQ29udHJvbFRleHQuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIEJ1ZmZlcmVkUmFuZ2VzLmpzXG4gKi9cblxuaW1wb3J0IHsgcGVyY2VudGlmeSwgY3JlYXRlRWwgfSBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL0NvbXBvbmVudCc7XG5cbi8qKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQGNsYXNzIEJ1ZmZlcmVkUmFuZ2VzXG4gKiBAZXh0ZW5kcyBDb250cm9sXG4gKi9cblxuY2xhc3MgQnVmZmVyZWRSYW5nZXMgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucykge1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cblx0XHR0aGlzLnBsYXllci5vbigncHJvZ3Jlc3MnLCB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLnBsYXllci5vbignc2Vla2VkJywgdGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdHRoaXMucmFuZ2UgPSBjcmVhdGVFbCgnZGl2Jywge1xuXHRcdFx0Y2xhc3NOYW1lIDogJ2xlcGxheWVyLXRpbWVsaW5lLWJ1ZmZlcmVkX19yYW5nZSdcblx0XHR9KTtcblxuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQgPSBjcmVhdGVFbCgnZGl2Jywge1xuXHRcdFx0Y2xhc3NOYW1lIDogJ2xlcGxheWVyLXRpbWVsaW5lLWJ1ZmZlcmVkJ1xuXHRcdH0pLmFwcGVuZCh0aGlzLnJhbmdlKTtcblx0fVxuXG5cblx0dXBkYXRlKCkge1xuXHRcdGNvbnN0IGJ1ZmZlcmVkID0gdGhpcy5wbGF5ZXIudmlkZW8uYnVmZmVyZWQ7XG5cdFx0Y29uc3QgZHVyYXRpb24gPSB0aGlzLnBsYXllci52aWRlby5kdXJhdGlvbjtcblx0XHRpZihidWZmZXJlZCA9PSBudWxsKSByZXR1cm47XG5cblx0XHRsZXQgZW5kID0gMDtcblx0XHRpZiAoYnVmZmVyZWQubGVuZ3RoID4gMCkge1xuXHRcdFx0ZW5kID0gYnVmZmVyZWQuZW5kKGJ1ZmZlcmVkLmxlbmd0aCAtIDEpO1xuXHRcdH1cblxuXHRcdGlmIChkdXJhdGlvbiA+IDApIHtcblx0XHRcdHRoaXMucmFuZ2UuY3NzKHtcblx0XHRcdFx0d2lkdGggOiBwZXJjZW50aWZ5KGVuZCwgZHVyYXRpb24pICogMTAwICsgJyUnXG5cdFx0XHR9KVxuXG5cdFx0fVxuXHR9XG59XG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ0J1ZmZlcmVkUmFuZ2VzJywgQnVmZmVyZWRSYW5nZXMpO1xuZXhwb3J0IGRlZmF1bHQgQnVmZmVyZWRSYW5nZXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9UaW1lbGluZS9CdWZmZXJlZFJhbmdlcy5qcyIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL0NvbXBvbmVudCc7XG5cbmNsYXNzIE1hcmtlciBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucykge1xuXG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRkcmFnIDogZmFsc2UsXG5cdFx0XHRjbGFzc05hbWUgOiAnJ1xuXHRcdH0sIG9wdGlvbnMpO1xuXG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ21vdXNlZG93bicsIHRoaXMuX29uTW91c2Vkb3duLmJpbmQodGhpcykpO1xuXG5cdFx0JChkb2N1bWVudCkub24oe1xuXG5cdFx0XHRtb3VzZW1vdmUgOiAoZSkgPT4ge1xuXHRcdFx0XHRpZiAoIXRoaXMuZHJhZykgcmV0dXJuO1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQudHJpZ2dlcignbGVwbGF5ZXJfbW91c2Vtb3ZlJywgeyB4IDogZS5wYWdlWCB9KTtcblx0XHRcdH0sXG5cblx0XHRcdG1vdXNldXAgOiAoZSkgPT4ge1xuXHRcdFx0XHRpZiAoIXRoaXMuZHJhZykgcmV0dXJuO1xuXHRcdFx0XHR0aGlzLmRyYWcgPSBmYWxzZTtcblx0XHRcdFx0dGhpcy5tYXJrZXJUaW1lLmhpZGUoKTtcblx0XHRcdFx0dGhpcy5lbGVtZW50LnRyaWdnZXIoJ2xlcGxheWVyX21vdXNldXAnLCB7IHggOiBlLnBhZ2VYIH0pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0c2V0IGRyYWcodmFsdWUpIHtcblx0XHR0aGlzLl9kcmFnID0gdmFsdWU7XG5cdFx0dGhpcy5lbGVtZW50LnRvZ2dsZUNsYXNzKCd0aW1lLW1hcmtlci0tZHJhZycsIHZhbHVlKTtcblx0fVxuXG5cdGdldCBkcmFnKCkge1xuXHRcdHJldHVybiB0aGlzLl9kcmFnO1xuXHR9XG5cblx0X29uTW91c2Vkb3duKGUpIHtcblx0XHRpZiAoZS53aGljaCAhPT0gMSkgcmV0dXJuO1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRpZih0aGlzLm9wdGlvbnMuZHJhZykge1xuXHRcdFx0dGhpcy5kcmFnID0gdHJ1ZTtcblx0XHR9XG5cdFx0dGhpcy5lbGVtZW50LnRyaWdnZXIoJ2xlcGxheWVyX21vdXNlZG93bicpO1xuXHR9XG5cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHQvLyBNYXJrZXIgb2YgY3VycmVudCB0aW1lIG9uIHRpbWVsaW5lXG5cdFx0dGhpcy5tYXJrZXJUaW1lID0gJCgnPGRpdiAvPicpXG5cdFx0XHQuYWRkQ2xhc3MoJ3RpbWUnKVxuXHRcdFx0LmhpZGUoKTtcblxuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQgPSAkKCc8ZGl2IC8+Jylcblx0XHRcdC5hZGRDbGFzcyhgdGltZS1tYXJrZXIgJHt0aGlzLm9wdGlvbnMuY2xhc3NOYW1lfWApXG5cdFx0XHQuYXBwZW5kKHRoaXMubWFya2VyVGltZSlcblxuXHR9XG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnTWFya2VyJywgTWFya2VyKTtcbmV4cG9ydCBkZWZhdWx0IE1hcmtlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL1RpbWVsaW5lL01hcmtlci5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgU2VjdGlvbkNvbnRyb2wuanNcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL0NvbnRyb2wnO1xuaW1wb3J0IENvbnRyb2xDaGVja2JveCBmcm9tICcuL0NvbnRyb2xDaGVja2JveCc7XG5cbi8qKlxuICogQGNsYXNzIFNlY3Rpb25Db250cm9sXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmNoZWNrZWQ9dHJ1ZV1cbiAqIEBleHRlbmRzIENvbnRyb2xDaGVja2JveFxuICovXG5jbGFzcyBTZWN0aW9uQ29udHJvbCBleHRlbmRzIENvbnRyb2xDaGVja2JveCB7XG5cdGNvbnN0cnVjdG9yIChwbGF5ZXIsIG9wdGlvbnM9e30pIHtcblx0XHRvcHRpb25zID0gJC5leHRlbmQoe30sIHtcblx0XHRcdGljb25OYW1lIDogJ2xpc3QtdWwnLFxuXHRcdFx0Y2xhc3NOYW1lIDogJ3NlY3Rpb24nLFxuXHRcdFx0bmFtZSA6ICdzZWN0aW9uJyxcblx0XHRcdHRpdGxlIDogJ9Cf0L7QutCw0LfQsNGC0Ywv0YHQutGA0YvRgtGMINGB0LXQutGG0LjQuCcsXG5cdFx0XHRkaXNhYmxlIDogdHJ1ZVxuXHRcdH0sIG9wdGlvbnMpO1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cblx0XHR0aGlzLnBsYXllci5vbignc2VjdGlvbnNpbml0JywgdGhpcy5fb25TZWN0aW9uc0luaXQuYmluZCh0aGlzKSk7XG5cdH1cblxuXHRvbkNoZWNrZWQoZSwgZGF0YSkge1xuXHRcdHN1cGVyLm9uQ2hlY2tlZChlKTtcblx0XHR0aGlzLnBsYXllci50cmlnZ2VyKCdzZWN0aW9uc3RvZ2dsZScsIHtcblx0XHRcdGNoZWNrZWQgOiBkYXRhLmNoZWNrZWQsXG5cdFx0XHR2aWV3IDogdGhpcy5wbGF5ZXIudmlld1xuXHRcdH0pO1xuXHR9XG5cblx0X29uU2VjdGlvbnNJbml0KGUpIHtcblx0XHR0aGlzLm9wdGlvbnMuZGlzYWJsZSA9IHRoaXMuZGlzYWJsZSA9IGZhbHNlO1xuXHRcdHRoaXMuY2hlY2tlZCA9IHRydWU7XG5cdH1cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdTZWN0aW9uQ29udHJvbCcsIFNlY3Rpb25Db250cm9sKTtcbkNvbnRyb2wucmVnaXN0ZXJDb250cm9sKCdzZWN0aW9uJywgU2VjdGlvbkNvbnRyb2wpO1xuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbkNvbnRyb2w7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9TZWN0aW9uQ29udHJvbC5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgY29udHJvbC1jaGVja2JveC5qc1xuICovXG5cblxuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9Db250cm9sJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuY2hlY2tlZD1mYWxzZV1cbiAqIEBjbGFzcyBDb250cm9sQ2hlY2tib3ggVG9nZ2FibGUgY29udHJvbFxuICovXG5jbGFzcyBDb250cm9sQ2hlY2tib3ggZXh0ZW5kcyBDb250cm9sIHtcblxuXHRjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnM9e30pIHtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXHRcdHRoaXMuY2hlY2tlZCA9IHRoaXMub3B0aW9ucy5jaGVja2VkIHx8IGZhbHNlO1xuXHRcdHRoaXMuZWxlbWVudC5vbignbGVwbGF5ZXJfY2hlY2tlZCcsIHRoaXMub25DaGVja2VkLmJpbmQodGhpcykpXG5cdH1cblxuXG5cdC8qKlxuXHQgKiBTZXR0ZXIgZm9yIGNoZWNrZWQgcHJvcGVydHlcblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IHZhbFxuXHQgKi9cblx0c2V0IGNoZWNrZWQgKHZhbCkge1xuXHRcdGlmICh0aGlzLmRpc2FibGUpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dmFsID0gISF2YWw7XG5cdFx0dGhpcy5fY2hlY2tlZCA9IHZhbFxuXHRcdHRoaXMuZWxlbWVudC50b2dnbGVDbGFzcygnY29udHJvbC1jaGVja2JveC0tY2hlY2tlZCcsIHZhbCk7XG5cdFx0dGhpcy5lbGVtZW50LnRyaWdnZXIoJ2xlcGxheWVyX2NoZWNrZWQnLCB7IGNoZWNrZWQgOiB2YWwgfSk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0dGVyIGZvciBjaGVja2VkIHByb3Blcnlcblx0ICogQHB1YmxpY1xuXHQgKiBAcmV0dXJuIHtib29sZWFufVxuXHQgKi9cblx0Z2V0IGNoZWNrZWQgKCkge1xuXHRcdHJldHVybiB0aGlzLl9jaGVja2VkO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0b25DbGljayAoZSkge1xuXHRcdHN1cGVyLm9uQ2xpY2soZSk7XG5cdFx0dGhpcy5jaGVja2VkID0gIXRoaXMuY2hlY2tlZDtcblx0fVxuXG5cdC8qKlxuXHQgKiBPbiBjaGVja2VkIGV2ZW50IGhhbmRsZXJcblx0ICpcblx0ICogQHBhcmFtIHtFdmVudH0gZVxuXHQgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuXHQgKi9cblx0b25DaGVja2VkKGUsIGRhdGEpIHtcblxuXHR9XG5cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRidWlsZENTU0NsYXNzKCkge1xuXHRcdHJldHVybiBgY29udHJvbC1jaGVja2JveCAke3N1cGVyLmJ1aWxkQ1NTQ2xhc3MoKX1gXG5cdH1cblxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ0NvbnRyb2xDaGVja2JveCcsIENvbnRyb2xDaGVja2JveCk7XG5Db250cm9sLnJlZ2lzdGVyQ29udHJvbCgnY2hlY2tib3gnLCBDb250cm9sQ2hlY2tib3gpO1xuZXhwb3J0IGRlZmF1bHQgQ29udHJvbENoZWNrYm94O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvQ29udHJvbENoZWNrYm94LmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBGdWxsc2NyZWVuQ29udHJvbC5qc1xuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCBDb250cm9sIGZyb20gJy4vQ29udHJvbCc7XG5cbi8qKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQGNsYXNzIEZ1bGxzY3JlZW5Db250cm9sXG4gKiBAZXh0ZW5kcyBDb250cm9sXG4gKi9cbmNsYXNzIEZ1bGxzY3JlZW5Db250cm9sIGV4dGVuZHMgQ29udHJvbCB7XG5cdGNvbnN0cnVjdG9yIChwbGF5ZXIsIG9wdGlvbnM9e30pIHtcblx0XHRvcHRpb25zID0gJC5leHRlbmQoe30sIHtcblx0XHRcdGljb25OYW1lIDogJ2Fycm93cy1hbHQnLFxuXHRcdFx0Y2xhc3NOYW1lIDogJ2Z1bGxzY3JlZW4nLFxuXHRcdFx0dGl0bGUgOiAn0KDQsNC30LLQtdGA0L3Rg9GC0Ywv0YHQstC10YDQvdGD0YLRjCDQvdCwINC/0L7Qu9C90YvQuSDRjdC60YDQsNC9Jyxcblx0XHRcdG5hbWUgOiAnZnVsbHNjcmVlbidcblx0XHR9LCBvcHRpb25zKTtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0b25DbGljayhlKSB7XG5cdFx0c3VwZXIub25DbGljayhlKVxuXHRcdHRoaXMucGxheWVyLnRvZ2dsZUZ1bGxzY3JlZW4oKTtcblx0fVxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ0Z1bGxzY3JlZW5Db250cm9sJywgRnVsbHNjcmVlbkNvbnRyb2wpO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ2Z1bGxzY3JlZW4nLCBGdWxsc2NyZWVuQ29udHJvbCk7XG5leHBvcnQgZGVmYXVsdCBGdWxsc2NyZWVuQ29udHJvbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL0Z1bGxzY3JlZW5Db250cm9sLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBSYXRlQ29udHJvbC5qc1xuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCBDb250cm9sIGZyb20gJy4vQ29udHJvbCc7XG5pbXBvcnQgQ29udHJvbFRleHQgZnJvbSAnLi9Db250cm9sVGV4dCc7XG5pbXBvcnQgQ29va2llIGZyb20gJy4uL3V0aWxzL2Nvb2tpZSc7XG5cbi8qKlxuICogQGNsYXNzIFJhdGVDb250cm9sXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAcHJvcGVydHkge0NvbnRyb2x9IGRvd25Db250cm9sICBEb3duIHJhdGUgY29udHJvbFxuICogQHByb3BlcnR5IHtDb250cm9sfSB1cENvbnRyb2wgIFVwIHJhdGUgY29udHJvbFxuICogQHByb3BlcnR5IHtDb250cm9sVGV4dH0gY3VycmVudFJhdGUgQ29udHJvbCBvZiBjdXVyZW50IHJhdGVcbiAqIEBleHRlbmRzIENvbnRyb2xcbiAqL1xuY2xhc3MgUmF0ZUNvbnRyb2wgZXh0ZW5kcyBDb250cm9sIHtcblx0Y29uc3RydWN0b3IgKHBsYXllciwgb3B0aW9ucz17fSkge1xuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0Y2xhc3NOYW1lIDogJ2NvbnRyb2wtY29udGFpbmVyJ1xuXHRcdH0sIG9wdGlvbnMpO1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cblx0XHR0aGlzLnBsYXllci5vbigncmF0ZWNoYW5nZScsICgpID0+IHtcblx0XHRcdHRoaXMudXBkYXRlKCk7XG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdHN1cGVyLmNyZWF0ZUVsZW1lbnQoKTtcblx0XHRjb25zdCB2aWRlbyA9IHRoaXMucGxheWVyLnZpZGVvO1xuXG5cdFx0dGhpcy5kb3duQ29udHJvbCA9IG5ldyBDb250cm9sKHRoaXMucGxheWVyLCB7XG5cdFx0XHRjbGFzc05hbWUgOiAncmF0ZS1kb3duJyxcblx0XHRcdG5hbWUgOiAncmF0ZS1kb3duJyxcblx0XHRcdGljb25OYW1lIDogJ2JhY2t3YXJkJyxcblx0XHRcdGNvbGxlY3Rpb24gOiB0aGlzLm9wdGlvbnMuY29sbGVjdGlvbixcblx0XHRcdHRpdGxlIDogJ9Cj0LzQtdC90YzRiNC40YLRjCDRgdC60L7RgNC+0YHRgtGMINC/0YDQvtC40LPRgNGL0LLQsNC90LjRjycsXG5cdFx0XHRvbkNsaWNrIDogZnVuY3Rpb24oZSkge1xuXHRcdFx0XHR2aWRlby5kZWNyZWFzZVJhdGUoKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHRoaXMudXBDb250cm9sID0gbmV3IENvbnRyb2wodGhpcy5wbGF5ZXIsIHtcblx0XHRcdGNsYXNzTmFtZSA6ICdyYXRlLXVwJyxcblx0XHRcdG5hbWUgOiAncmF0ZS11cCcsXG5cdFx0XHRpY29uTmFtZSA6ICdmb3J3YXJkJyxcblx0XHRcdGNvbGxlY3Rpb24gOiB0aGlzLm9wdGlvbnMuY29sbGVjdGlvbixcblx0XHRcdHRpdGxlIDogJ9Cj0LLQtdC70LjRh9C40YLRjCDRgdC60L7RgNC+0YHRgtGMINC/0YDQvtC40LPRgNGL0LLQsNC90LjRjycsXG5cdFx0XHRvbkNsaWNrIDogZnVuY3Rpb24oZSkge1xuXHRcdFx0XHR2aWRlby5pbmNyZWFzZVJhdGUoKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHRoaXMuY3VycmVudFJhdGUgPSBuZXcgQ29udHJvbFRleHQodGhpcy5wbGF5ZXIsIHtcblx0XHRcdGNsYXNzTmFtZSA6ICdyYXRlLWN1cnJlbnQnLFxuXHRcdFx0b25DbGljayA6IGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0dmlkZW8ucmF0ZSA9IHRoaXMucGxheWVyLm9wdGlvbnMucmF0ZS5kZWZhdWx0XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHR0aGlzLmVsZW1lbnRcblx0XHRcdC5hcHBlbmQodGhpcy5kb3duQ29udHJvbC5lbGVtZW50KVxuXHRcdFx0LmFwcGVuZCh0aGlzLmN1cnJlbnRSYXRlLmVsZW1lbnQpXG5cdFx0XHQuYXBwZW5kKHRoaXMudXBDb250cm9sLmVsZW1lbnQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0YnVpbGRDU1NDbGFzcygpIHtcblx0XHRyZXR1cm4gdGhpcy5vcHRpb25zLmNsYXNzTmFtZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdG9uUGxheWVySW5pdGVkKCkge1xuXHRcdHRoaXMudXBkYXRlKCk7XG5cdH1cblxuXHQvKipcblx0ICpcblx0ICovXG5cdF9vbkNsaWNrKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0fVxuXG5cdHVwZGF0ZSh2YWx1ZSkge1xuXHRcdGNvbnN0IHZpZGVvID0gdGhpcy5wbGF5ZXIudmlkZW87XG5cblx0XHR2YWx1ZSA9IHZhbHVlIHx8IHZpZGVvLnJhdGU7XG5cdFx0dmFsdWUgPSBwYXJzZUZsb2F0KHZhbHVlKVxuXHRcdFx0LnRvRml4ZWQoMilcblx0XHRcdC50b1N0cmluZygpXG5cdFx0XHQucmVwbGFjZSgvLC9nLCAnLicpO1xuXHRcdHRoaXMuY3VycmVudFJhdGUudGV4dCA9ICfDlycgKyB2YWx1ZTtcblxuXHRcdGlmKHRoaXMuZGlzYWJsZSkgcmV0dXJuO1xuXG5cdFx0aWYodmlkZW8ucmF0ZSA8PSB2aWRlby5yYXRlTWluKSB7XG5cdFx0XHR0aGlzLmRvd25Db250cm9sLmRpc2FibGUgPSB0cnVlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmRvd25Db250cm9sLmRpc2FibGUgPSBmYWxzZTtcblx0XHR9XG5cblx0XHRpZih2aWRlby5yYXRlID49IHZpZGVvLnJhdGVNYXgpIHtcblx0XHRcdHRoaXMudXBDb250cm9sLmRpc2FibGUgPSB0cnVlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnVwQ29udHJvbC5kaXNhYmxlID0gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblx0c2V0IGRpc2FibGUodmFsdWUpIHtcblx0XHR0aGlzLl9kaXNhYmxlID0gdmFsdWU7XG5cdFx0dGhpcy5kb3duQ29udHJvbC5kaXNhYmxlID0gdmFsdWU7XG5cdFx0dGhpcy51cENvbnRyb2wuZGlzYWJsZSA9IHZhbHVlO1xuXHR9XG5cblx0aW5pdCAoKSB7XG5cdFx0bGV0IHJhdGUgPSBDb29raWUuZ2V0KCdyYXRlJywgdGhpcy5wbGF5ZXIub3B0aW9ucy5yYXRlLmRlZmF1bHQpO1xuXHRcdHRoaXMuc2hvdyhyYXRlKTtcblx0fVxuXG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnUmF0ZUNvbnRyb2wnLCBSYXRlQ29udHJvbCk7XG5Db250cm9sLnJlZ2lzdGVyQ29udHJvbCgncmF0ZScsIFJhdGVDb250cm9sKTtcbmV4cG9ydCBkZWZhdWx0IFJhdGVDb250cm9sO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvUmF0ZUNvbnRyb2wuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIGNvb2tpZS1jb250cm9sLmpzXG4gKlxuICogQGNsYXMgQ29va2llXG4gKi9cbmNsYXNzIENvb2tpZSB7XG5cdC8qKlxuXHQgKiBAcHVibGljXG5cdCAqXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIE5hbWUgb2YgY29va2llXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBbZGZsdF0gUmV0dXJuIGRlZmF1bHQgdmFsdWUgaWYgdGhpcyBmaWVsZCBpcyBlbXB0eVxuXHQgKlxuXHQgKi9cblx0c3RhdGljIGdldCAobmFtZSwgZGZsdCkge1xuXHRcdHZhciBjb29raWVzID0gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7Jyk7XG5cdFx0Zm9yIChsZXQgaSBpbiBjb29raWVzKSB7XG5cdFx0XHR2YXIgZCA9IGNvb2tpZXNbIGkgXS50cmltKCkuc3BsaXQoJz0nKTtcblx0XHRcdGlmIChkWyAwIF0gPT09ICdsZXBsYXllcl8nICsgbmFtZSlcblx0XHRcdFx0cmV0dXJuIGRbIDEgXTtcblx0XHR9XG5cdFx0cmV0dXJuIGRmbHQ7XG5cdH1cblxuXHQvKipcblx0ICogQHB1YmxpY1xuXHQgKlxuXHQgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBLZXlcblx0ICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIFZhbHVlXG5cdCAqL1xuXHRzdGF0aWMgc2V0IChuYW1lLCB2YWx1ZSkge1xuXHRcdHZhciBkID0gbmV3IERhdGUoKTtcblx0XHRkLnNldERhdGUoZC55ZWFyICsgMSk7XG5cdFx0ZG9jdW1lbnQuY29va2llID0gJ2xlcGxheWVyXycgKyBuYW1lICsgJz0nICsgdmFsdWUgKyAnO2V4cGlyZXM9JyArIGQudG9TdHJpbmcoKTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb29raWU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvdXRpbHMvY29va2llLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBCYWNrd2FyZENvbnRyb2wuanNcbiAqXG4gKiBCYWNrd2FyZCBjb250cm9sXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9Db250cm9sJztcblxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIE9wdGlvbnNcbiAqIEBjbGFzcyBCYWNrd2FyZENvbnRyb2xcbiAqIEBleHRlbmRzIENvbnRyb2xcbiAqL1xuY2xhc3MgQmFja3dhcmRDb250cm9sIGV4dGVuZHMgQ29udHJvbCB7XG5cdGNvbnN0cnVjdG9yIChwbGF5ZXIsIG9wdGlvbnM9e30pIHtcblx0XHRvcHRpb25zID0gJC5leHRlbmQoe30sIHtcblx0XHRcdGljb25OYW1lIDogJ3VuZG8nLFxuXHRcdFx0Y2xhc3NOYW1lIDogJ2JhY2t3YXJkJyxcblx0XHRcdG5hbWUgOiAnYmFja3dhcmQnLFxuXHRcdFx0dGl0bGUgOiBg0J7RgtC80L7RgtCw0YLRjCDQvdCw0LfQsNC0INC90LAgJHtwbGF5ZXIub3B0aW9ucy5wbGF5YmFjay5zdGVwLm1lZGl1bX0g0YHQtdC60YPQvdC0YCxcblx0XHR9LCBvcHRpb25zKTtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0b25DbGljayhlKSB7XG5cdFx0c3VwZXIub25DbGljayhlKTtcblx0XHR0aGlzLnBsYXllci52aWRlby5jdXJyZW50VGltZSAtPSB0aGlzLnBsYXllci5vcHRpb25zLnBsYXliYWNrLnN0ZXAubWVkaXVtO1xuXHRcdHRoaXMucGxheWVyLnNwbGFzaEljb24uc2hvdygndW5kbycpO1xuXHR9XG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnQmFja3dhcmRDb250cm9sJywgQmFja3dhcmRDb250cm9sKTtcbkNvbnRyb2wucmVnaXN0ZXJDb250cm9sKCdiYWNrd2FyZCcsIEJhY2t3YXJkQ29udHJvbCk7XG5leHBvcnQgZGVmYXVsdCBCYWNrd2FyZENvbnRyb2w7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9CYWNrd2FyZENvbnRyb2wuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIFNvdXJjZUNvbnRyb2wuanNcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL0NvbnRyb2wnO1xuaW1wb3J0IENvbnRyb2xDb250YWluZXIgZnJvbSAnLi9Db250cm9sQ29udGFpbmVyJztcblxuXG4vKipcbiAqIEBjbGFzcyBTb3VyY2VDb250cm9sXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAZXh0ZW5kcyBDb250cm9sQ29uYWluZXJcbiAqL1xuY2xhc3MgU291cmNlQ29udHJvbCBleHRlbmRzIENvbnRyb2xDb250YWluZXIge1xuXHQvLyBUT0RPOiDQlNC10LvQsNGC0YwgZGlzYWJsZS9lbmFibGUg0L/QvtGB0LvQtSBvcHRpb25zIGluaXRcblx0Y29uc3RydWN0b3IgKHBsYXllciwgb3B0aW9ucz17fSkge1xuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0bmFtZSA6ICdzb3VyY2UnLFxuXHRcdFx0aWNvbk5hbWUgOiAnYnVsbHNleWUnLFxuXHRcdFx0dGl0bGUgOiAn0JrQsNGH0LXRgdGC0LLQvicsXG5cdFx0XHRjbGFzc05hbWUgOiAnc291cmNlLWNvbnRyb2wnLFxuXHRcdFx0ZGlzYWJsZSA6IHRydWVcblx0XHR9LCBvcHRpb25zKTtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ3BsYXlpbmcnLCB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLnBsYXllci5vbigncXVhbGl0eWNoYW5nZScsIHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xuXHR9XG5cblx0b25JdGVtQ2xpY2soZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRjb25zdCBpdGVtID0gJChlLnRhcmdldCk7XG5cdFx0Y29uc3QgdmlkZW8gPSB0aGlzLnBsYXllci52aWRlbztcblx0XHR2aWRlby5wbGF5YmFja1F1YWxpdHkgPSBpdGVtLmRhdGEoJ25hbWUnKTtcblxuXHRcdHRoaXMuZHJvcGRvd25Db250ZW50LmhpZGUoKTtcblxuXHR9XG5cblx0b25QbGF5ZXJJbml0ZWQoZSwgZGF0YSkge1xuXHRcdHRoaXMudXBkYXRlKCk7XG5cdH1cblxuXHR1cGRhdGUoKSB7XG5cdFx0Y29uc3QgdmlkZW8gPSB0aGlzLnBsYXllci52aWRlbztcblx0XHRjb25zdCBxdWFsaXR5TGV2ZWxzID0gdmlkZW8uZ2V0QXZhaWxhYmxlUXVhbGl0eUxldmVscygpO1xuXHRcdGNvbnN0IGN1cnJlbnRRdWFsaXR5ID0gdmlkZW8ucGxheWJhY2tRdWFsaXR5O1xuXG5cdFx0aWYocXVhbGl0eUxldmVscy5sZW5ndGggPT09IDApIHtcblx0XHRcdHRoaXMuZGlzYWJsZSA9IHRydWU7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5saXN0ID0gW107XG5cdFx0dGhpcy5kcm9wZG93bkNvbnRlbnQuZW1wdHkoKTtcblxuXHRcdHF1YWxpdHlMZXZlbHMuZm9yRWFjaChpdGVtID0+IHtcblx0XHRcdGNvbnN0IGVsZW0gPSB0aGlzLmFkZEl0ZW0oaXRlbS50aXRsZSwgaXRlbSk7XG5cdFx0XHRpZihjdXJyZW50UXVhbGl0eS5uYW1lID09PSBpdGVtLm5hbWUpIHtcblx0XHRcdFx0dGhpcy5hY3RpdmUgPSBlbGVtO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdHRoaXMuZGlzYWJsZSA9IGZhbHNlO1xuXHR9XG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnU291cmNlQ29udHJvbCcsIFNvdXJjZUNvbnRyb2wpO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ3NvdXJjZScsIFNvdXJjZUNvbnRyb2wpO1xuZXhwb3J0IGRlZmF1bHQgU291cmNlQ29udHJvbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL1NvdXJjZUNvbnRyb2wuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIENvbnRyb2xDb250YWluZXIuanNcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL0NvbnRyb2wnO1xuaW1wb3J0IENvbnRyb2xEcm9wZG93biBmcm9tICcuL0NvbnRyb2xEcm9wZG93bic7XG5cbi8qKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQGNsYXNzIENvbnRyb2xDb250YWluZXJcbiAqIEBleHRlbmRzIENvbnRyb2xEcm9wZG93blxuICovXG5jbGFzcyBDb250cm9sQ29udGFpbmVyIGV4dGVuZHMgQ29udHJvbERyb3Bkb3duIHtcblxuXHRjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXHRcdHRoaXMuX2FjdGl2ZSA9IG51bGw7XG5cdFx0LyoqXG5cdFx0ICogTGlzdCBvZiBpdGVtc1xuXHRcdCAqXG5cdFx0ICogQHB1YmxpY1xuXHRcdCAqIEB0eXBlIHtBcnJheX1cblx0XHQgKi9cblx0XHR0aGlzLmxpc3QgPSBbXTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgaXRlbSBvZiBjb250YWluZXIgYnkgaW5kZXhcblx0ICpcblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcblx0ICovXG5cdGdldEJ5SW5kZXgoaW5kZXgpIHtcblx0XHRyZXR1cm4gdGhpcy5saXN0W2luZGV4XTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTZXQgaXRlbSBhY3RpdmUgYnkgaW5kZXhcblx0ICpcblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcblx0ICovXG5cdHNldEFjdGl2ZUJ5SW5kZXgoaW5kZXgpIHtcblx0XHRpZiAodGhpcy5hY3RpdmUpIHtcblx0XHRcdHRoaXMuYWN0aXZlLnJlbW92ZUNsYXNzKCdjb250cm9sLWNvbnRhaW5lcl9faXRlbS0tYWN0aXZlJyk7XG5cdFx0fVxuXHRcdHRoaXMuX2FjdGl2ZSA9IHRoaXMubGlzdFtpbmRleF0uYWRkQ2xhc3MoJ2NvbnRyb2wtY29udGFpbmVyX19pdGVtLS1hY3RpdmUnKTtcblx0XHRyZXR1cm4gdGhpcy5fYWN0aXZlO1xuXHR9XG5cblxuXHQvKipcblx0ICogR2V0dGVyIG9mIGFjdGl2ZSBmaWVsZFxuXHQgKlxuXHQgKiBAcHVibGljXG5cdCAqIEB0eXBlIHtqUXVlcnl9XG5cdCAqL1xuXHRnZXQgYWN0aXZlICgpIHtcblx0XHRpZiAodGhpcy5fYWN0aXZlICYmIHRoaXMuX2FjdGl2ZS5sZW5ndGggPiAwKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5fYWN0aXZlO1xuXHRcdH1cblx0XHR0aGlzLmxpc3QuZm9yRWFjaChpdGVtID0+IHtcblx0XHRcdGlmIChpdGVtLmhhc0NsYXNzKCdjb250cm9sLWNvbnRhaW5lcl9faXRlbS0tYWN0aXZlJykpIHtcblx0XHRcdFx0dGhpcy5fYWN0aXZlID0gaXRlbTtcblx0XHRcdH1cblx0XHR9KVxuXHRcdHJldHVybiB0aGlzLl9hY3RpdmU7XG5cdH1cblxuXHQvKipcblx0ICogU2V0dGVyIG9mIGFjdGl2ZSBmaWVsZFxuXHQgKlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7alF1ZXJ5fSBJdGVtIG9mIGNvbnRhaW5lclxuXHQgKi9cblx0c2V0IGFjdGl2ZSAoZWxlbWVudCkge1xuXHRcdGlmICh0aGlzLmFjdGl2ZSkge1xuXHRcdFx0dGhpcy5hY3RpdmUucmVtb3ZlQ2xhc3MoJ2NvbnRyb2wtY29udGFpbmVyX19pdGVtLS1hY3RpdmUnKTtcblx0XHR9XG5cdFx0aWYgKGVsZW1lbnQpIHtcblx0XHRcdCQoZWxlbWVudCkuYWRkQ2xhc3MoJ2NvbnRyb2wtY29udGFpbmVyX19pdGVtLS1hY3RpdmUnKTtcblx0XHR9XG5cdFx0dGhpcy5fYWN0aXZlID0gZWxlbWVudDtcblx0XHRyZXR1cm4gdGhpcy5fYWN0aXZlXG5cdH1cblxuXG5cdC8qKlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7U3RyaW5nfGpRdWVyeX0gQ29udGVudCBvZiBpdGVtXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBEYXRhIG9mIGl0ZW1cblx0ICovXG5cdGFkZEl0ZW0gKGNvbnRlbnQsIGRhdGEpIHtcblx0XHRjb25zdCBpdGVtID0gJCgnPGRpdiAvPicpXG5cdFx0XHQuYWRkQ2xhc3MoJ2NvbnRyb2wtY29udGFpbmVyX19pdGVtJylcblx0XHRcdC5kYXRhKGRhdGEpXG5cdFx0XHQub24oJ2NsaWNrJywgdGhpcy5vbkl0ZW1DbGljay5iaW5kKHRoaXMpKVxuXHRcdFx0LmFwcGVuZChjb250ZW50KTtcblxuXHRcdHRoaXMubGlzdC5wdXNoKGl0ZW0pO1xuXG5cdFx0dGhpcy5kcm9wZG93bkNvbnRlbnQuYXBwZW5kKGl0ZW0pO1xuXG5cdFx0cmV0dXJuIGl0ZW07XG5cdH1cblxuXHQvKipcblx0ICogT24gaXRlbSBjbGljayBldmVudCBoYW5kbGVyXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtFdmVudH0gZVxuXHQgKi9cblx0b25JdGVtQ2xpY2sgKGUpIHtcblx0XHR0aGlzLmFjdGl2ZSA9IGUuY3VycmVudFRhcmdldDtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGJ1aWxkQ1NTQ2xhc3MoKSB7XG5cdFx0cmV0dXJuIGAke3N1cGVyLmJ1aWxkQ1NTQ2xhc3MoKX0gY29udHJvbC1jb250YWluZXJgXG5cdH1cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdDb250cm9sQ29udGFpbmVyJywgQ29udHJvbENvbnRhaW5lcik7XG5Db250cm9sLnJlZ2lzdGVyQ29udHJvbCgnY29udGFpbmVyJywgQ29udHJvbENvbnRhaW5lcik7XG5leHBvcnQgZGVmYXVsdCBDb250cm9sQ29udGFpbmVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvQ29udHJvbENvbnRhaW5lci5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgU3VidGl0bGVDb250cm9sLmpzXG4gKlxuICogU3VidGl0bGUgY29udHJvbFxuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCBDb250cm9sIGZyb20gJy4vQ29udHJvbCc7XG5pbXBvcnQgQ29udHJvbENvbnRhaW5lciBmcm9tICcuL0NvbnRyb2xDb250YWluZXInO1xuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBjbGFzcyBTdWJ0aXRsZUNvbnRyb2xcbiAqIEBleHRlbmRzIENvbnRyb2xDb250YWluZXJcbiAqL1xuY2xhc3MgU3VidGl0bGVDb250cm9sIGV4dGVuZHMgQ29udHJvbENvbnRhaW5lciB7XG5cdGNvbnN0cnVjdG9yIChwbGF5ZXIsIG9wdGlvbnM9e30pIHtcblx0XHRvcHRpb25zID0gJC5leHRlbmQoe30sIHtcblx0XHRcdGljb25OYW1lIDogJ2NvbW1lbnRpbmctbycsXG5cdFx0XHR0aXRsZSA6ICfQodGD0LHRgtC40YLRgNGLJyxcblx0XHRcdG5hbWUgOiAnc3VidGl0bGUnLFxuXHRcdFx0Y2xhc3NOYW1lIDogJ3N1YnRpdGxlLWNvbnRyb2wnLFxuXHRcdFx0ZGlzYWJsZSA6IHRydWVcblx0XHR9LCBvcHRpb25zKTtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXHR9XG5cblx0b25DbGljayAoZSkge1xuXHRcdHN1cGVyLm9uQ2xpY2soZSk7XG5cdFx0bGV0IHZpZGVvID0gdGhpcy5wbGF5ZXIudmlkZW87XG5cdFx0dGhpcy5hY3RpdmUgPSBudWxsXG5cdFx0dmlkZW8udHJhY2sgPSAtMTtcblx0fVxuXG5cdG9uSXRlbUNsaWNrIChlKSB7XG5cdFx0c3VwZXIub25JdGVtQ2xpY2soZSk7XG5cdFx0bGV0IGl0ZW0gPSAkKGUudGFyZ2V0KVxuXHRcdGxldCB2aWRlbyA9IHRoaXMucGxheWVyLnZpZGVvO1xuXHRcdGlmIChpdGVtLmRhdGEoJ2xhbmd1YWdlJykpIHtcblx0XHRcdHZpZGVvLnRyYWNrID0gaXRlbS5kYXRhKCdsYW5ndWFnZScpO1xuXHRcdH1cblx0fVxuXG5cdG9uUGxheWVySW5pdGVkKGUsIGRhdGEpIHtcblx0XHRsZXQgdmlkZW8gPSB0aGlzLnBsYXllci52aWRlbztcblxuXHRcdGlmKHZpZGVvLnN1YnRpdGxlcyA9PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYgKHZpZGVvLnN1YnRpdGxlcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRmb3IgKHZhciBpIGluIHZpZGVvLnN1YnRpdGxlcykge1xuXHRcdFx0XHRpZiAoIXZpZGVvLnN1YnRpdGxlcy5oYXNPd25Qcm9wZXJ0eShpKSkgY29udGludWU7XG5cdFx0XHRcdGxldCBpdGVtID0gdmlkZW8uc3VidGl0bGVzWyBpIF07XG5cdFx0XHRcdHRoaXMuYWRkSXRlbShpdGVtLnRpdGxlLCB7XG5cdFx0XHRcdFx0c3JjIDogaXRlbS5zcmMsXG5cdFx0XHRcdFx0bGFuZ3VhZ2UgOiBpdGVtLmxhbmd1YWdlXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5kaXNhYmxlID0gZmFsc2U7XG5cdFx0fVxuXHR9XG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnU3VidGl0bGVDb250cm9sJywgU3VidGl0bGVDb250cm9sKTtcbkNvbnRyb2wucmVnaXN0ZXJDb250cm9sKCdzdWJ0aXRsZScsIFN1YnRpdGxlQ29udHJvbCk7XG5leHBvcnQgZGVmYXVsdCBTdWJ0aXRsZUNvbnRyb2w7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9TdWJ0aXRsZUNvbnRyb2wuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIERvd25sb2FkQ29udHJvbC5qc1xuICpcbiAqIERvd25sb2FkIGNvbnRyb2xcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9Db250cm9sJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJztcblxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAY2xhc3MgRG93bmxvYWRDb250cm9sXG4gKiBAZXhudGVkcyBDb250cm9sXG4gKi9cbmNsYXNzIERvd25sb2FkQ29udHJvbCBleHRlbmRzIENvbnRyb2wge1xuXHRjb25zdHJ1Y3RvciAocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHtcblx0XHRcdHRpdGxlIDogJ9Ch0LrQsNGH0LDRgtGMINCy0LjQtNC10L4nLFxuXHRcdFx0Y2xhc3NOYW1lIDogJ2Rvd25sb2FkJyxcblx0XHRcdG5hbWUgOiAnZG93bmxvYWQnXG5cdFx0fSwgb3B0aW9ucyk7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblx0XHR0aGlzLnBsYXllci5vbignbG9hZHN0YXJ0JywgdGhpcy5vbkxvYWRTdGFydC5iaW5kKHRoaXMpKTtcblx0fVxuXG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHQvLyBUT0RPOiDQlNC+0L7Qv9GA0LXQtNC10LvQuNGC0Ywg0Y3RgtC+0YIg0LzQtdGC0L7QtCwg0LAg0L3QtSDQv9C10YDQtdC+0L/RgNC10LTQu9C10LjRgtGMXG5cdFx0dGhpcy5lbGVtZW50ID0gJCgnPGEgLz4nKVxuXHRcdFx0LmF0dHIoe1xuXHRcdFx0XHRocmVmIDogJycsXG5cdFx0XHRcdHRhcmdldCA6ICdfYmxhbmsnLFxuXHRcdFx0XHRkb3dubG9hZCA6IHRydWUsXG5cdFx0XHRcdHRpdGxlIDogdGhpcy5vcHRpb25zLnRpdGxlLFxuXHRcdFx0fSlcblx0XHRcdC5hZGRDbGFzcyh0aGlzLmJ1aWxkQ1NTQ2xhc3MoKSlcblx0XHRcdC5hcHBlbmQobmV3IEljb24odGhpcy5wbGF5ZXIsIHsgaWNvbk5hbWUgOiAnZG93bmxvYWQnIH0pLmVsZW1lbnQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0YnVpbGRDU1NDbGFzcygpIHtcblx0XHRyZXR1cm4gYCR7c3VwZXIuYnVpbGRDU1NDbGFzcygpfWA7XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBTZXR0ZXIgb2YgbGluayBmaWVsZFxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSBQYXRoIGZvciB2aWRlb1xuXHQgKi9cblx0c2V0IGxpbmsgKHZhbHVlKSB7XG5cdFx0Y29uc3QgcGFyc2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXHRcdHBhcnNlci5ocmVmID0gdmFsdWU7XG5cdFx0bGV0IGZpbGVOYW1lID0gcGFyc2VyLnBhdGhuYW1lLnNwbGl0KCcvJyk7XG5cdFx0ZmlsZU5hbWUgPSBmaWxlTmFtZVtmaWxlTmFtZS5sZW5ndGggLSAxXTtcblx0XHR0aGlzLmVsZW1lbnQuYXR0cih7XG5cdFx0XHRocmVmIDogdmFsdWUsXG5cdFx0XHRkb3dubG9hZCA6IGZpbGVOYW1lXG5cdFx0fSk7XG5cdH1cblxuXG5cdG9uTG9hZFN0YXJ0KGUsIGRhdGEpIHtcblx0XHR0aGlzLmxpbmsgPSB0aGlzLnBsYXllci52aWRlby5zcmMudXJsXG5cdH1cblxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ0Rvd25sb2FkQ29udHJvbCcsIERvd25sb2FkQ29udHJvbCk7XG5Db250cm9sLnJlZ2lzdGVyQ29udHJvbCgnZG93bmxvYWQnLCBEb3dubG9hZENvbnRyb2wpO1xuZXhwb3J0IGRlZmF1bHQgRG93bmxvYWRDb250cm9sO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvRG93bmxvYWRDb250cm9sLmpzIiwiXG4ndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIEtleWJpbmRpbmdJbmZvQ29udHJvbC5qc1xuICpcbiAqIEluZm8gY29udHJvbFxuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCBDb250cm9sIGZyb20gJy4vQ29udHJvbCc7XG5pbXBvcnQgQ29udHJvbERyb3Bkb3duIGZyb20gJy4vQ29udHJvbERyb3Bkb3duJztcblxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAY2xhc3MgS2V5QmluZGluZ0luZm9Db250cm9sXG4gKiBAZXh0ZW5kcyBDb250cm9sRHJvcGRvd25cbiAqL1xuY2xhc3MgS2V5QmluZGluZ0luZm9Db250cm9sIGV4dGVuZHMgQ29udHJvbERyb3Bkb3duIHtcblxuXHRjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcblx0XHRvcHRpb25zID0gJC5leHRlbmQoe30sIHtcblx0XHRcdGljb25OYW1lIDogJ2luZm8nLFxuXHRcdFx0dGl0bGUgOiAn0JjQvdGE0L4nLFxuXHRcdFx0Y2xhc3NOYW1lIDogJ2luZm8tY29udHJvbCcsXG5cdFx0XHRuYW1lIDogJ2luZm8nXG5cdFx0fSwgb3B0aW9ucyk7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblx0fVxuXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0c3VwZXIuY3JlYXRlRWxlbWVudCgpO1xuXHRcdGxldCBrZXlCaW5kaW5nID0gdGhpcy5wbGF5ZXIub3B0aW9ucy5rZXlCaW5kaW5nO1xuXHRcdGxldCBpbmZvQ29udGVudCA9IGBgO1xuXHRcdGZvciAobGV0IF9rZXkgaW4ga2V5QmluZGluZykge1xuXHRcdFx0aWYgKCFrZXlCaW5kaW5nLmhhc093blByb3BlcnR5KF9rZXkpKSBjb250aW51ZTtcblxuXHRcdFx0bGV0IGhvdGtleSA9IGtleUJpbmRpbmdbX2tleV07XG5cdFx0XHRsZXQgaXRlbSA9ICcnO1xuXHRcdFx0bGV0IGtleVN0cmluZyA9ICcnO1xuXG5cdFx0XHRob3RrZXkuaW5mby5mb3JFYWNoKChrZXksIGluZGV4KSA9PiB7XG5cdFx0XHRcdGlmIChpbmRleCAhPT0gMCkge1xuXHRcdFx0XHRcdGtleVN0cmluZyArPSBgICsgYFxuXHRcdFx0XHR9XG5cdFx0XHRcdGtleVN0cmluZyArPSBgPGtiZCBjbGFzcz1cImxlcGxheWVyLWtleVwiPiR7a2V5fTwva2JkPmBcblx0XHRcdH0pO1xuXG5cdFx0XHRpdGVtID0gYFxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiaW5mby1jb250cm9sX19pdGVtXCI+XG5cdFx0XHRcdFx0JHtrZXlTdHJpbmd9IC0gJHtob3RrZXkuZGVzY3JpcHRpb259XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0YFxuXG5cdFx0XHRpbmZvQ29udGVudCArPSBpdGVtO1xuXG5cdFx0fVxuXHRcdHRoaXMuZHJvcGRvd25Db250ZW50XG5cdFx0XHQuYWRkQ2xhc3MoJ2luZm8tY29udHJvbF9fY29udGVudCcpXG5cdFx0XHQuYXBwZW5kKGluZm9Db250ZW50KTtcblx0fVxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ0tleUJpbmRpbmdJbmZvQ29udHJvbCcsIEtleUJpbmRpbmdJbmZvQ29udHJvbCk7XG5Db250cm9sLnJlZ2lzdGVyQ29udHJvbCgna2V5YmluZGluZyBpbmZvJywgS2V5QmluZGluZ0luZm9Db250cm9sKTtcbmV4cG9ydCBkZWZhdWx0IEtleUJpbmRpbmdJbmZvQ29udHJvbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL0tleWJpbmRpbmdJbmZvQ29udHJvbC5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgVGltZUluZm9Db250cm9sLmpzXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9Db250cm9sJztcbmltcG9ydCBDb250cm9sVGV4dCBmcm9tICcuL0NvbnRyb2xUZXh0JztcbmltcG9ydCB7IHNlY29uZHNUb1RpbWUgfSBmcm9tICcuLi91dGlscyc7XG5cbi8qKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQGNsYXNzIFRpbWVJbmZvQ29udHJvbFxuICogQHByb3BlcnR5IHtDb250cm9sVGV4dH0gY3VycmVudFRpbWUgQ3VycmVudCB0aW1lJ3MgdGV4dFxuICogQHByb3BlcnR5IHtDb250cm9sVGV4dH0gdG90YWxUaW1lIFRvdGFsIHRpbWVcbiAqIEBwcm9wZXJ0eSB7alF1ZXJ5fSBsaW5lXG4gKiBAZXh0ZW5kcyBDb250cm9sXG4gKi9cbmNsYXNzIFRpbWVJbmZvQ29udHJvbCBleHRlbmRzIENvbnRyb2wge1xuXG5cdGNvbnN0cnVjdG9yIChwbGF5ZXIsIG9wdGlvbnM9e30pIHtcblx0XHRvcHRpb25zID0gJC5leHRlbmQoe30sIHtcblx0XHRcdGNsYXNzTmFtZSA6ICd0aW1lbGluZSB0aW1lbGluZS1jb250YWluZXInLFxuXHRcdFx0bmFtZSA6ICd0aW1lLWluZm8nXG5cdFx0fSwgb3B0aW9ucyk7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblxuXHRcdHRoaXMucGxheWVyLm9uKCd0aW1ldXBkYXRlJywgKGUsIGRhdGEpID0+IHtcblx0XHRcdGNvbnN0IHRpbWUgPSB0aGlzLnBsYXllci5jdXJyZW50VGltZTtcblx0XHRcdHRoaXMuX2N1cnJlbnRUaW1lQ29udHJvbC50ZXh0ID0gc2Vjb25kc1RvVGltZSh0aW1lKTtcblx0XHR9KTtcblxuXHRcdHRoaXMucGxheWVyLm9uKCdkdXJhdGlvbmNoYW5nZScsIChlKSA9PiB7XG5cdFx0XHR0aGlzLl90b3RhbFRpbWVDb250cm9sLnRleHQgPSBzZWNvbmRzVG9UaW1lKHRoaXMucGxheWVyLnZpZGVvLmR1cmF0aW9uKTtcblx0XHR9KTtcblx0fVxuXG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHRjb25zdCBkdXJhdGlvbiA9IHRoaXMucGxheWVyLnZpZGVvLmR1cmF0aW9uO1xuXHRcdGNvbnN0IGN1cnJlbnRUaW1lID0gdGhpcy5wbGF5ZXIudmlkZW8uY3VycmVudFRpbWU7XG5cdFx0dGhpcy5fY3VycmVudFRpbWVDb250cm9sID0gbmV3IENvbnRyb2xUZXh0KHRoaXMucGxheWVyLCB7IGNsYXNzTmFtZSA6ICdjb250cm9sLXRpbWVfX2N1cnJlbnQnfSk7XG5cdFx0dGhpcy5fdG90YWxUaW1lQ29udHJvbCA9IG5ldyBDb250cm9sVGV4dCh0aGlzLnBsYXllciwgeyBjbGFzc05hbWUgOiAnY29udHJvbC10aW1lX190b3RhbCd9KTtcblxuXHRcdGlmKGlzTmFOKGR1cmF0aW9uKSB8fCBkdXJhdGlvbiA9PSBudWxsKSB7XG5cdFx0XHR0aGlzLl90b3RhbFRpbWVDb250cm9sLnRleHQgPSAnJztcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5fdG90YWxUaW1lQ29udHJvbC50ZXh0ID0gc2Vjb25kc1RvVGltZShkdXJhdGlvbik7XG5cdFx0fVxuXG5cdFx0aWYoY3VycmVudFRpbWUgPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5fY3VycmVudFRpbWVDb250cm9sLnRleHQgPSBzZWNvbmRzVG9UaW1lKDApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLl9jdXJyZW50VGltZUNvbnRyb2wudGV4dCA9IHNlY29uZHNUb1RpbWUoY3VycmVudFRpbWUpO1xuXHRcdH1cblxuXHRcdHRoaXMuZWxlbWVudCA9ICQoJzxkaXYvPicpLmFkZENsYXNzKCdjb250cm9sLXRpbWUnKTtcblx0XHR0aGlzLmVsZW1lbnRcblx0XHRcdC5hcHBlbmQodGhpcy5fY3VycmVudFRpbWVDb250cm9sLmVsZW1lbnQpXG5cdFx0XHQuYXBwZW5kKHRoaXMuX3RvdGFsVGltZUNvbnRyb2wuZWxlbWVudClcblxuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQ7XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdG9uUGxheWVySW5pdGVkKGUpIHtcblx0XHRsZXQgdmlkZW8gPSB0aGlzLnBsYXllci52aWRlbztcblx0XHR0aGlzLl9jdXJyZW50VGltZUNvbnRyb2wudGV4dCA9IHNlY29uZHNUb1RpbWUodmlkZW8uY3VycmVudFRpbWUpO1xuXHRcdHRoaXMuX3RvdGFsVGltZUNvbnRyb2wudGV4dCA9IHNlY29uZHNUb1RpbWUodmlkZW8uZHVyYXRpb24pO1xuXHR9XG5cblx0X29uQ2xpY2soZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKVxuXHR9XG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnVGltZUluZm9Db250cm9sJywgVGltZUluZm9Db250cm9sKTtcbkNvbnRyb2wucmVnaXN0ZXJDb250cm9sKCd0aW1laW5mbycsIFRpbWVJbmZvQ29udHJvbCk7XG5leHBvcnQgZGVmYXVsdCBUaW1lSW5mb0NvbnRyb2w7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9UaW1lSW5mb0NvbnRyb2wuanMiLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvb2tpZSBmcm9tICcuLi91dGlscy9jb29raWUnO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL0NvbXBvbmVudCc7XG5pbXBvcnQgeyBJU19TQUZBUkksIElTX0lPUywgSVNfQU5EUk9JRCB9IGZyb20gJy4uL3V0aWxzL2Jyb3dzZXInO1xuaW1wb3J0IEVudGl0eSBmcm9tICcuL0VudGl0eSc7XG5cblxuY2xhc3MgSHRtbDUgZXh0ZW5kcyBFbnRpdHkge1xuXHRjb25zdHJ1Y3RvciAocGxheWVyLCBvcHRpb25zKSB7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblx0XHR0aGlzLm1lZGlhID0gdGhpcy5lbGVtZW50WzBdO1xuXG5cdFx0dGhpcy5zdWJ0aXRsZXMgPSBbXTtcblx0XHR0aGlzLmJ1ZmZlclJhbmdlcyA9IFtdO1xuXG5cdFx0dGhpcy5zcmMgPSB0aGlzLnBsYXllci5vcHRpb25zLnNyYztcblxuXHRcdGlmKHRoaXMucGxheWVyLm9wdGlvbnMucG9zdGVyICE9IG51bGwpIHtcblx0XHRcdHRoaXMucG9zdGVyID0gdGhpcy5wbGF5ZXIub3B0aW9ucy5wb3N0ZXI7XG5cdFx0fVxuXG5cdFx0aWYodGhpcy5nZXRBdmFpbGFibGVRdWFsaXR5TGV2ZWxzKCkubGVuZ3RoID4gMCkge1xuXHRcdFx0dGhpcy5fcGxheWJhY2tRdWFsaXR5ID0gdGhpcy5nZXRBdmFpbGFibGVRdWFsaXR5TGV2ZWxzKClbMF07XG5cdFx0fVxuXG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdsb2Fkc3RhcnQnLCB0aGlzLm9uTG9hZFN0YXJ0LmJpbmQodGhpcykpO1xuXHRcdHRoaXMuZWxlbWVudC5vbigndGltZXVwZGF0ZScsIHRoaXMub25UaW1lVXBkYXRlLmJpbmQodGhpcykpO1xuXHRcdHRoaXMuZWxlbWVudC5vbignZHVyYXRpb25jaGFuZ2UnLCB0aGlzLm9uRHVyYXRpb25DaGFuZ2UuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdwcm9ncmVzcycsIHRoaXMub25Qcm9ncmVzcy5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ3NlZWtpbmcnLCB0aGlzLm9uU2Vla2luZy5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ3NlZWtlZCcsIHRoaXMub25TZWVrZWQuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCd2b2x1bWVjaGFuZ2UnLCB0aGlzLm9uVm9sdW1lQ2hhbmdlLmJpbmQodGhpcykpO1xuXHRcdHRoaXMuZWxlbWVudC5vbignY2xpY2snLCB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdkYmxjbGljaycsIHRoaXMub25EYmxjbGljay5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ3BsYXknLCB0aGlzLm9uUGxheS5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ3BhdXNlJywgdGhpcy5vblBhdXNlLmJpbmQodGhpcykpO1xuXHRcdHRoaXMuZWxlbWVudC5vbigncmF0ZWNoYW5nZScsIHRoaXMub25SYXRlQ2hhbmdlLmJpbmQodGhpcykpO1xuXHRcdHRoaXMuZWxlbWVudC5vbignZW5kZWQnLCB0aGlzLm9uRW5kZWQuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdjYW5wbGF5dGhyb3VnaCcsIHRoaXMub25DYW5wbGF5VGhyb3VnaC5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ3dhaXRpbmcnLCB0aGlzLm9uV2FpdGluZy5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ2Vycm9yJywgdGhpcy5vbkVycm9yLmJpbmQodGhpcykpO1xuXHR9XG5cblx0b25Mb2FkU3RhcnQoZSkge1xuXHRcdHRoaXMudHJpZ2dlcignbG9hZHN0YXJ0Jyk7XG5cdH1cblxuXHRvblRpbWVVcGRhdGUoZSkge1xuXHRcdHRoaXMudHJpZ2dlcigndGltZXVwZGF0ZScpO1xuXHR9XG5cblx0b25EdXJhdGlvbkNoYW5nZShlKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCdkdXJhdGlvbmNoYW5nZScpO1xuXHR9XG5cblx0b25Qcm9ncmVzcyhlKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCdwcm9ncmVzcycpO1xuXHR9XG5cblx0b25TZWVraW5nKGUpIHtcblx0XHR0aGlzLnRyaWdnZXIoJ3NlZWtpbmcnKTtcblx0fVxuXG5cdG9uU2Vla2VkKGUpIHtcblx0XHR0aGlzLnRyaWdnZXIoJ3NlZWtlZCcpO1xuXHR9XG5cblx0b25Wb2x1bWVDaGFuZ2UoZSkge1xuXHRcdHRoaXMudHJpZ2dlcigndm9sdW1lY2hhbmdlJyk7XG5cdH1cblxuXHRvbkNsaWNrKCkge1xuXHRcdHRoaXMudHJpZ2dlcignY2xpY2snKTtcblx0fVxuXG5cdG9uRGJsY2xpY2soKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCdkYmxjbGljaycpO1xuXHR9XG5cblx0b25QbGF5KCkge1xuXHRcdHRoaXMudHJpZ2dlcigncGxheScpO1xuXHR9XG5cblx0b25QYXVzZSgpIHtcblx0XHR0aGlzLnRyaWdnZXIoJ3BhdXNlJyk7XG5cdH1cblxuXHRvblBsYXlpbmcoKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCdwbGF5aW5nJyk7XG5cdH1cblxuXHRvblJhdGVDaGFuZ2UoKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCdyYXRlY2hhbmdlJyk7XG5cdH1cblxuXHRvbkVuZGVkKCkge1xuXHRcdHRoaXMudHJpZ2dlcignZW5kZWQnKTtcblx0fVxuXG5cdG9uQ2FucGxheVRocm91Z2goKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCdjYW5wbGF5dGhyb3VnaCcpO1xuXHR9XG5cblx0b25XYWl0aW5nKCkge1xuXHRcdHRoaXMudHJpZ2dlcignd2FpdGluZycpO1xuXHR9XG5cblx0b25FcnJvcihlKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCdlcnJvcicsIHsgY29kZSA6IGUudGFyZ2V0LmVycm9yLmNvZGUgfSk7XG5cdH1cblxuXHQvKiBUT0RPICovXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0dGhpcy5lbGVtZW50ID0gdGhpcy5vcHRpb25zLmN0eDtcblx0XHRbXG5cblx0XHRcdC8vIFJlbW92ZSBjb250cm9scyBiZWNhdXNlIHdlIGRvbnQgbm90IHN1cHBvcnQgbmF0aXZlIGNvbnRyb2xzIHlldFxuXHRcdFx0J2NvbnRyb2xzJyxcblx0XHRcdCdwb3N0ZXInLFxuXG5cdFx0XHQvLyBJdCBpcyB1bm5lY2Vzc2FyeSBhdHRycywgdGhpcyBmdW5jdGlvbmFsaXR5IHNvbHZlIENTU1xuXHRcdFx0J2hlaWdodCcsXG5cdFx0XHQnd2lkdGgnXG5cblx0XHRdLmZvckVhY2goaXRlbSA9PiB7XG5cdFx0XHR0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cihpdGVtKTtcblx0XHR9KTtcblxuXHRcdC8vIFNldCBhdHRycyBmcm9tIG9wdGlvbnNcblx0XHRbXG5cdFx0XHQncHJlbG9hZCcsXG5cdFx0XHQnYXV0b3BsYXknLFxuXHRcdFx0J2xvb3AnLFxuXHRcdFx0J211dGVkJ1xuXHRcdF0uZm9yRWFjaChpdGVtID0+IHtcblx0XHRcdGlmKHRoaXMucGxheWVyLm9wdGlvbnNbaXRlbV0pIHtcblx0XHRcdFx0dGhpcy5lbGVtZW50LmF0dHIoaXRlbSwgdGhpcy5wbGF5ZXIub3B0aW9uc1tpdGVtXSk7XG5cdFx0XHRcdHRoaXMuZWxlbWVudC5wcm9wKGl0ZW0sIHRoaXMucGxheWVyLm9wdGlvbnNbaXRlbV0pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cblx0XHR0aGlzLmVsZW1lbnQuZmluZCgnc291cmNlW2RhdGEtcXVhbGl0eV0nKS5lYWNoKChpLCBpdGVtKSA9PiB7XG5cdFx0XHQkKGl0ZW0pLnJlbW92ZSgpO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudDtcblx0fVxuXG5cdGdldCBjdXJyZW50VGltZSAoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWVkaWEuY3VycmVudFRpbWU7XG5cdH1cblxuXHRzZXQgY3VycmVudFRpbWUgKHZhbHVlKSB7XG5cdFx0bGV0IHRpbWU7XG5cdFx0aWYgKHZhbHVlID4gdGhpcy5kdXJhdGlvbikge1xuXHRcdFx0dGltZSA9IHRoaXMuZHVyYXRpb25cblx0XHR9IGVsc2UgaWYgKHZhbHVlIDwgMCkge1xuXHRcdFx0dGltZSA9IDBcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGltZSA9IHZhbHVlO1xuXHRcdH1cblxuXHRcdHRoaXMucGxheWVyLnRyaWdnZXIoJ3RpbWV1cGRhdGVsb2FkJywgeyB0aW1lIH0pO1xuXG5cdFx0dGhpcy5tZWRpYS5jdXJyZW50VGltZSA9IHRpbWU7XG5cdH1cblxuXHRnZXQgZHVyYXRpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLm1lZGlhLmR1cmF0aW9uO1xuXHR9XG5cblx0Z2V0IGhlaWdodCAoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWVkaWEuY2xpZW50SGVpZ2h0O1xuXHR9XG5cblx0Z2V0IHdpZHRoICgpIHtcblx0XHRyZXR1cm4gdGhpcy5tZWRpYS5jbGllbnRXaWR0aDtcblx0fVxuXG5cdGdldCByYXRlICgpIHtcblx0XHRyZXR1cm4gdGhpcy5tZWRpYS5wbGF5YmFja1JhdGU7XG5cdH1cblxuXHRzZXQgbXV0ZWQodmFsdWUpIHtcblx0XHR0aGlzLm1lZGlhLm11dGVkID0gdmFsdWU7XG5cdH1cblxuXHRnZXQgbXV0ZWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWVkaWEubXV0ZWRcblx0fVxuXG5cdGdldCByYXRlTWF4KCkge1xuXHRcdGxldCBtYXggPSB0aGlzLnBsYXllci5vcHRpb25zLnJhdGUubWF4O1xuXHRcdGlmKElTX0lPUyB8fCBJU19BTkRST0lEKSB7XG5cdFx0XHRtYXggPSBIdG1sNS5NT0JJTEVfTUFYX1JBVEU7XG5cdFx0fVxuXHRcdGlmKElTX1NBRkFSSSkge1xuXHRcdFx0bWF4ID0gSHRtbDUuU0FGQVJJX01BWF9SQVRFO1xuXHRcdH1cblxuXHRcdHJldHVybiBtYXg7XG5cdH1cblxuXHRnZXQgcmF0ZU1pbigpIHtcblx0XHRsZXQgbWluID0gdGhpcy5wbGF5ZXIub3B0aW9ucy5yYXRlLm1pbjtcblxuXHRcdGlmIChJU19JT1MgfHwgSVNfQU5EUk9JRCkge1xuXHRcdFx0bWluID0gSHRtbDUuTU9CSUxFX01JTl9SQVRFO1xuXHRcdH1cblxuXHRcdGlmIChJU19TQUZBUkkpIHtcblx0XHRcdG1pbiA9IEh0bWw1LlNBRkFSSV9NSU5fUkFURTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbWluO1xuXHR9XG5cblx0c2V0IHJhdGUgKHZhbHVlKSB7XG5cdFx0aWYgKHZhbHVlIDw9IHRoaXMucmF0ZU1heCAmJiB2YWx1ZSA+PSB0aGlzLnJhdGVNaW4pIHtcblx0XHRcdHRoaXMubWVkaWEucGxheWJhY2tSYXRlID0gdmFsdWU7XG5cdFx0XHRDb29raWUuc2V0KCdyYXRlJywgdmFsdWUpO1xuXHRcdH1cblx0fVxuXG5cdGdldEF2YWlsYWJsZVF1YWxpdHlMZXZlbHMoKSB7XG5cdFx0cmV0dXJuIHRoaXMucGxheWVyLm9wdGlvbnMuc291cmNlcy5tYXAoaXRlbSA9PiAoe1xuXHRcdFx0bmFtZSA6IGl0ZW0udGl0bGUsXG5cdFx0XHQuLi5pdGVtXG5cdFx0fSkpO1xuXHR9XG5cblx0c2V0IHBsYXliYWNrUXVhbGl0eShuYW1lKSB7XG5cdFx0c3VwZXIucGxheWJhY2tRdWFsaXR5ID0gbmFtZTtcblx0XHRjb25zdCB0aW1lID0gdGhpcy5jdXJyZW50VGltZTtcblx0XHRjb25zdCByYXRlID0gdGhpcy5yYXRlO1xuXHRcdGNvbnN0IHN0b3AgPSB0aGlzLnBhdXNlZDtcblxuXHRcdHRoaXMuX3BsYXliYWNrUXVhbGl0eSA9IHRoaXMuZ2V0QXZhaWxhYmxlUXVhbGl0eUxldmVscygpLmZpbmQoaXRlbSA9PiBpdGVtLm5hbWUgPT09IG5hbWUpO1xuXG5cdFx0dGhpcy5zcmMgPSB0aGlzLl9wbGF5YmFja1F1YWxpdHk7XG5cdFx0dGhpcy5wbGF5YmFja1JhdGUgPSByYXRlO1xuXHRcdHRoaXMuY3VycmVudFRpbWUgPSB0aW1lO1xuXG5cdFx0aWYgKHN0b3ApIHtcblx0XHRcdHRoaXMucGF1c2UoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5wbGF5KCk7XG5cdFx0fVxuXG5cdFx0dGhpcy50cmlnZ2VyKCdxdWFsaXR5Y2hhbmdlJywgdGhpcy5fcGxheWJhY2tRdWFsaXR5KTtcblxuXHR9XG5cblx0Z2V0IHBsYXliYWNrUXVhbGl0eSgpIHtcblx0XHRyZXR1cm4gdGhpcy5fcGxheWJhY2tRdWFsaXR5O1xuXHR9XG5cblx0c2V0IHNyYyAoc3JjKSB7XG5cdFx0aWYoc3JjID09IG51bGwpIHJldHVybjtcblx0XHRpZih0aGlzLnNyYyAmJiB0aGlzLnNyYy51cmwgPT09IHNyYy51cmwpIHJldHVybjtcblxuXHRcdHRoaXMubWVkaWEuc3JjID0gc3JjLnVybDtcblxuXHRcdHRoaXMuX3NvdXJjZSA9IHNyYztcblx0fVxuXG5cdGdldCBzcmMgKCkge1xuXHRcdHJldHVybiB0aGlzLl9zb3VyY2Vcblx0fVxuXG5cdHNldCB0cmFjayAodmFsdWUpIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubWVkaWEudGV4dFRyYWNrcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKHRoaXMubWVkaWEudGV4dFRyYWNrc1sgaSBdLmxhbmd1YWdlID09PSB2YWx1ZSlcblx0XHRcdFx0dGhpcy5tZWRpYS50ZXh0VHJhY2tzWyBpIF0ubW9kZSA9ICdzaG93aW5nJztcblx0XHRcdGVsc2Vcblx0XHRcdFx0dGhpcy5tZWRpYS50ZXh0VHJhY2tzWyBpIF0ubW9kZSA9ICdoaWRkZW4nO1xuXHRcdH1cblx0fVxuXG5cdGdldCBwYXVzZWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWVkaWEucGF1c2VkO1xuXHR9XG5cblx0Z2V0IHZvbHVtZSAoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWVkaWEudm9sdW1lO1xuXHR9XG5cblxuXHRnZXQgZGVmYXVsdFZvbHVtZSAoKSB7XG5cdFx0cmV0dXJuIENvb2tpZS5nZXQoJ3ZvbHVtZScpIHx8IHRoaXMucGxheWVyLm9wdGlvbnMudm9sdW1lLmRlZmF1bHQ7XG5cdH1cblxuXHRzZXQgdm9sdW1lICh2YWx1ZSkge1xuXHRcdGNvbnN0IHBsYXllciA9IHRoaXMucGxheWVyO1xuXHRcdGlmICh2YWx1ZSA+IDEpIHtcblx0XHRcdHRoaXMubWVkaWEudm9sdW1lID0gMTtcblx0XHR9IGVsc2UgaWYgKHZhbHVlIDwgcGxheWVyLm9wdGlvbnMudm9sdW1lLm11dGVsaW1pdCkge1xuXHRcdFx0dGhpcy5tZWRpYS52b2x1bWUgPSAwO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLm1lZGlhLnZvbHVtZSA9IHZhbHVlO1xuXHRcdFx0Q29va2llLnNldCgndm9sdW1lJywgdmFsdWUpO1xuXHRcdH1cblx0XHR0aGlzLm1lZGlhLm11dGUgPSAodmFsdWUgPCBwbGF5ZXIub3B0aW9ucy52b2x1bWUubXV0ZWxpbWl0KTtcblx0fVxuXG5cblx0Z2V0IGJ1ZmZlcmVkICgpIHtcblx0XHRyZXR1cm4gdGhpcy5tZWRpYS5idWZmZXJlZDtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJuIHtUaW1lUmFuZ2VzfVxuXHQgKi9cblx0Z2V0IHNlZWthYmxlICgpIHtcblx0XHRyZXR1cm4gdGhpcy5tZWRpYS5zZWVrYWJsZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJuIHtUaW1lUmFuZ2VzfVxuXHQgKi9cblx0Z2V0IHBsYXllZCgpIHtcblx0XHRyZXR1cm4gdGhpcy5tZWRpYS5wbGF5ZWQ7XG5cdH1cblxuXHRnZXQgcGxheWVkUGVyY2VudGFnZSgpIHtcblx0XHRsZXQgcmVzdWx0ID0gMDtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGxheWVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRyZXN1bHQgKz0gKHRoaXMucGxheWVkLmVuZChpKSAtIHRoaXMucGxheWVkLnN0YXJ0KGkpKVxuXHRcdH1cblxuXHRcdHJldHVybiByZXN1bHQgLyB0aGlzLmR1cmF0aW9uICogMTAwXG5cdH1cblxuXHRnZXQgY3VycmVudFNyYygpIHtcblx0XHRyZXR1cm4gdGhpcy5tZWRpYS5jdXJyZW50U3JjO1xuXHR9XG5cblx0aW5pdCAoKSB7XG5cdFx0c3VwZXIuaW5pdCgpO1xuXHRcdGxldCBkZmQgPSAkLkRlZmVycmVkKCk7XG5cdFx0dGhpcy5faW5pdFN1YnRpdGxlcygpO1xuXHRcdHRoaXMuX2luaXRWaWRlbygpXG5cdFx0XHQuZG9uZSgoKSA9PiB7XG5cdFx0XHRcdHRoaXMuX2luaXRSYXRlKCk7XG5cdFx0XHRcdHRoaXMuX2luaXRWb2x1bWUoKTtcblx0XHRcdFx0ZGZkLnJlc29sdmUoKTtcblx0XHRcdH0pO1xuXHRcdHJldHVybiBkZmQucHJvbWlzZSgpO1xuXHR9XG5cblx0c3VwcG9ydHNGdWxsU2NyZWVuKCkge1xuXHRcdGlmICh0eXBlb2YgdGhpcy5tZWRpYS53ZWJraXRFbnRlckZ1bGxTY3JlZW4gPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdGNvbnN0IHVzZXJBZ2VudCA9IHdpbmRvdy5uYXZpZ2F0b3IgJiYgd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQgfHwgJyc7XG5cblx0XHRcdC8vIFNlZW1zIHRvIGJlIGJyb2tlbiBpbiBDaHJvbWl1bS9DaHJvbWUgJiYgU2FmYXJpIGluIExlb3BhcmRcblx0XHRcdGlmICgoL0FuZHJvaWQvKS50ZXN0KHVzZXJBZ2VudCkgfHwgISgvQ2hyb21lfE1hYyBPUyBYIDEwLjUvKS50ZXN0KHVzZXJBZ2VudCkpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGVudGVyRnVsbHNjcmVlbigpIHtcblx0XHRjb25zdCB2aWRlbyA9IHRoaXMubWVkaWE7XG5cdFx0aWYgKHZpZGVvLnBhdXNlZCAmJiB2aWRlby5uZXR3b3JrU3RhdGUgPD0gdmlkZW8uSEFWRV9NRVRBREFUQSkge1xuXHRcdFx0Ly8gYXR0ZW1wdCB0byBwcmltZSB0aGUgdmlkZW8gZWxlbWVudCBmb3IgcHJvZ3JhbW1hdGljIGFjY2Vzc1xuXHRcdFx0Ly8gdGhpcyBpc24ndCBuZWNlc3Nhcnkgb24gdGhlIGRlc2t0b3AgYnV0IHNob3VsZG4ndCBodXJ0XG5cdFx0XHR0aGlzLnBsYXkoKTtcblxuXHRcdFx0Ly8gcGxheWluZyBhbmQgcGF1c2luZyBzeW5jaHJvbm91c2x5IGR1cmluZyB0aGUgdHJhbnNpdGlvbiB0byBmdWxsc2NyZWVuXG5cdFx0XHQvLyBjYW4gZ2V0IGlPUyB+Ni4xIGRldmljZXMgaW50byBhIHBsYXkvcGF1c2UgbG9vcFxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdHRoaXMucGF1c2UoKTtcblx0XHRcdFx0dmlkZW8ud2Via2l0RW50ZXJGdWxsU2NyZWVuKCk7XG5cdFx0XHR9LCAwKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmlkZW8ud2Via2l0RW50ZXJGdWxsU2NyZWVuKCk7XG5cdFx0fVxuXHR9XG5cblx0ZXhpdEZ1bGxzY3JlZW4oKSB7XG5cdFx0dGhpcy5tZWRpYS53ZWJraXRFeGl0RnVsbFNjcmVlbigpO1xuXHR9XG5cblx0dG9nZ2xlUGxheSAoKSB7XG5cdFx0aWYgKCF0aGlzLm1lZGlhLnBsYXllZCB8fCB0aGlzLm1lZGlhLnBhdXNlZCkge1xuXHRcdFx0dGhpcy5wbGF5KCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucGF1c2UoKTtcblx0XHR9XG5cdH1cblxuXHRwbGF5ICgpIHtcblx0XHRsZXQgZGZkID0gJC5EZWZlcnJlZCgpO1xuXHRcdGNvbnN0IHBsYXlQcm9taXNlID0gdGhpcy5tZWRpYS5wbGF5KCk7XG5cblx0XHRpZihwbGF5UHJvbWlzZSAhPSBudWxsKSB7XG5cdFx0XHRwbGF5UHJvbWlzZS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRkZmQucmVzb2x2ZSgpO1xuXHRcdFx0fSlcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZGZkLnJlc29sdmUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIGRmZC5wcm9taXNlKCk7XG5cdH1cblxuXHRwYXVzZSAoKSB7XG5cdFx0bGV0IGRmZCA9ICQuRGVmZXJyZWQoKTtcblx0XHRjb25zdCBwYXVzZVByb21pc2UgPSB0aGlzLm1lZGlhLnBhdXNlKCk7XG5cblx0XHRpZihwYXVzZVByb21pc2UgIT0gbnVsbCkge1xuXHRcdFx0cGF1c2VQcm9taXNlLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGRmZC5yZXNvbHZlKCk7XG5cdFx0XHR9KVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRkZmQucmVzb2x2ZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gZGZkLnByb21pc2UoKTtcblx0fVxuXG5cdGxvYWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWVkaWEubG9hZCgpXG5cdH1cblxuXHRfaW5pdFJhdGUgKCkge1xuXHRcdHRoaXMucmF0ZSA9IHRoaXMuZGVmYXVsdFJhdGU7XG5cdH1cblxuXHRfaW5pdFZvbHVtZSAoKSB7XG5cdFx0dGhpcy52b2x1bWUgPSB0aGlzLmRlZmF1bHRWb2x1bWU7XG5cdH1cblxuXHRfaW5pdFN1YnRpdGxlcyAoKSB7XG5cdFx0bGV0IF9zZWxmID0gdGhpcztcblx0XHR0aGlzLmVsZW1lbnQuY2hpbGRyZW4oJ3RyYWNrW2tpbmQ9XCJzdWJ0aXRsZXNcIl0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHRcdGxldCBsYW5ndWFnZSA9ICQodGhpcykuYXR0cignc3JjbGFuZycpO1xuXHRcdFx0bGV0IHRpdGxlID0gJCh0aGlzKS5hdHRyKCdsYWJlbCcpO1xuXHRcdFx0bGV0IHNyYyA9ICQodGhpcykuYXR0cignc3JjJyk7XG5cdFx0XHRpZiAodGl0bGUubGVuZ3RoID4gMCAmJiBzcmMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRfc2VsZi5zdWJ0aXRsZXMucHVzaCh7XG5cdFx0XHRcdFx0dGl0bGUgOiB0aXRsZSxcblx0XHRcdFx0XHRzcmMgOiBzcmMsXG5cdFx0XHRcdFx0bGFuZ3VhZ2UgOiBsYW5ndWFnZVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdF9pbml0VmlkZW8gKCkge1xuXHRcdGxldCBkZmQgPSAkLkRlZmVycmVkKCk7XG5cdFx0aWYgKHRoaXMubWVkaWEucmVhZHlTdGF0ZSA+IEhUTUxNZWRpYUVsZW1lbnQuSEFWRV9OT1RISU5HKSB7XG5cdFx0XHRkZmQucmVzb2x2ZSgpXG5cdFx0XHR0aGlzLl90ZXh0VHJhY2tzSGFjaygpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkKHRoaXMubWVkaWEpLm9uZSgnbG9hZGVkbWV0YWRhdGEnLCAoZSkgPT4ge1xuXHRcdFx0XHRkZmQucmVzb2x2ZSgpXG5cdFx0XHRcdHRoaXMuX3RleHRUcmFja3NIYWNrKCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0ZGZkLm5vdGlmeSgpO1xuXHRcdHJldHVybiBkZmQucHJvbWlzZSgpO1xuXHR9XG5cblx0X3RleHRUcmFja3NIYWNrICgpIHtcblxuXHRcdC8vIFRoaXMgaXMgZ2VuZXJhbGx5IGZvciBGaXJlZm94IG9ubHlcblx0XHQvLyBiZWNhdXNlIGl0IHNvbWVob3cgcmVzZXRzIHRyYWNrIGxpc3Rcblx0XHQvLyBmb3IgdmlkZW8gZWxlbWVudCBhZnRlciBET00gbWFuaXB1bGF0aW9uLlxuXG5cdFx0aWYgKHRoaXMubWVkaWEudGV4dFRyYWNrcy5sZW5ndGggPT09IDAgJiYgdGhpcy5zdWJ0aXRsZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0dGhpcy5lbGVtZW50LmNoaWxkcmVuKCd0cmFja1traW5kPVwic3VidGl0bGVzXCJdJykucmVtb3ZlKCk7XG5cdFx0XHRmb3IgKHZhciBpIGluIHRoaXMuc3VidGl0bGVzKSB7XG5cdFx0XHRcdGlmICh0aGlzLnN1YnRpdGxlcy5oYXNPd25Qcm9wZXJ0eShpKSkge1xuXHRcdFx0XHRcdHRoaXMuZWxlbWVudFxuXHRcdFx0XHRcdFx0LmFwcGVuZCgkKCc8dHJhY2svPicpXG5cdFx0XHRcdFx0XHRcdC5hdHRyKCdsYWJlbCcsIHRoaXMuc3VidGl0bGVzWyBpIF0udGl0bGUpXG5cdFx0XHRcdFx0XHRcdC5hdHRyKCdzcmMnLCB0aGlzLnN1YnRpdGxlc1sgaSBdLnNyYylcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ3NyY2xhbmcnLCB0aGlzLnN1YnRpdGxlc1sgaSBdLmxhbmd1YWdlKVxuXHRcdFx0XHRcdFx0XHQuYXR0cignaWQnLCB0aGlzLnN1YnRpdGxlc1sgaSBdLmxhbmd1YWdlKVxuXHRcdFx0XHRcdFx0XHQuYXR0cigna2luZCcsICdzdWJ0aXRsZXMnKSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxufVxuXG5cbi8qKlxuICogTWluIHJhdGUgZm9yIGFuZHJvaWQgYW5kIGlvc1xuICovXG5IdG1sNS5NT0JJTEVfTUlOX1JBVEUgPSAwLjU7XG5cbi8qKlxuICogTWF4IHJhdGUgZm9yIGFuZHJvaWQgYW5kIGlvc1xuICovXG5IdG1sNS5NT0JJTEVfTUFYX1JBVEUgPSAyXG5cblxuSHRtbDUuU0FGQVJJX01JTl9SQVRFID0gMC41O1xuXG5IdG1sNS5TQUZBUklfTUFYX1JBVEUgPSAyO1xuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ0h0bWw1JywgSHRtbDUpO1xuZXhwb3J0IGRlZmF1bHQgSHRtbDU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvZW50aXR5L0h0bWw1LmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL0NvbXBvbmVudCc7XG5pbXBvcnQgQ29va2llIGZyb20gJy4uL3V0aWxzL2Nvb2tpZSc7XG5pbXBvcnQgTWVkaWFFcnJvciBmcm9tICcuLi9NZWRpYUVycm9yJztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbmNsYXNzIEVudGl0eSBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucykge1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cdFx0dGhpcy5zdWJ0aXRsZXMgPSBbXTtcblx0XHR0aGlzLl90cmlnZ2VyU3RhY2sgPSBbXTtcblx0XHR0aGlzLl9zdG9wTGlzdGVuID0gZmFsc2U7XG5cblx0XHRpZiAodGhpcy5wbGF5ZXIub3B0aW9ucy5zcmMgPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5wbGF5ZXIuZXJyb3IgPSBuZXcgTWVkaWFFcnJvcign0JLQuNC00LXQvtGE0LDQudC7INC90LUg0L3QsNC50LTQtdC9LicpO1xuXHRcdH1cblxuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0dHJpZ2dlciguLi5hcmdzKSB7XG5cdFx0aWYoIXRoaXMuX3N0b3BMaXN0ZW4pIHtcblx0XHRcdHRoaXMuX3RyaWdnZXJTdGFjay5wdXNoKGFyZ3MpO1xuXHRcdH1cblx0XHRzdXBlci50cmlnZ2VyKC4uLmFyZ3MpO1xuXHR9XG5cblx0aW5pdCgpIHtcblx0XHR0aGlzLl9zdG9wTGlzdGVuID0gdHJ1ZTtcblx0XHR0aGlzLl90cmlnZ2VyU3RhY2suZm9yRWFjaChhcmdzID0+IHtcblx0XHRcdHRoaXMudHJpZ2dlciguLi5hcmdzKTtcblx0XHR9KTtcblx0fVxuXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudCA9ICQoJzxkaXYgLz4nKTtcblx0fVxuXG5cdHNldCBwb3N0ZXIodXJsKSB7XG5cdFx0dGhpcy5fcG9zdGVyID0gdXJsO1xuXHRcdHRoaXMudHJpZ2dlcigncG9zdGVyY2hhbmdlJywgeyB1cmwgfSk7XG5cdH1cblxuXG5cdGdldCBwb3N0ZXIoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3Bvc3Rlcjtcblx0fVxuXG5cdGdldCBjdXJyZW50VGltZSgpIHtcblx0XHRyZXR1cm5cblx0fVxuXG5cdHNldCBjdXJyZW50VGltZSh2YWx1ZSkge1xuXG5cdH1cblxuXHRnZXQgZHVyYXRpb24oKSB7XG5cdFx0cmV0dXJuXG5cdH1cblxuXHRzZXQgbXV0ZWQodmFsdWUpIHtcblxuXHR9XG5cblx0Z2V0IG11dGVkKCkge1xuXG5cdH1cblxuXHRnZXQgaGVpZ2h0KCkge1xuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQuaW5uZXJIZWlnaHQoKVxuXHR9XG5cblx0Z2V0IHdpZHRoKCkge1xuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQud2lkdGgoKVxuXHR9XG5cblx0c2V0IHJhdGVNYXgodmFsdWUpIHtcblx0XHR0aGlzLl9yYXRlTWF4ID0gdmFsdWU7XG5cdH1cblxuXHRzZXQgcmF0ZU1pbih2YWx1ZSkge1xuXHRcdHRoaXMuX3JhdGVNaW4gPSB2YWx1ZTtcblx0fVxuXG5cdGdldCByYXRlTWF4KCkge1xuXHRcdHJldHVybiB0aGlzLl9yYXRlTWF4IHx8IHRoaXMucGxheWVyLm9wdGlvbnMucmF0ZS5tYXg7XG5cblx0fVxuXG5cdGdldCByYXRlTWluKCkge1xuXHRcdHJldHVybiB0aGlzLl9yYXRlTWluIHx8IHRoaXMucGxheWVyLm9wdGlvbnMucmF0ZS5taW47XG5cdH1cblxuXHRnZXQgcmF0ZSgpIHtcblx0fVxuXG5cdHNldCByYXRlKHZhbHVlKSB7XG5cdFx0aWYodmFsdWUgPiB0aGlzLnJhdGVNYXggfHwgdmFsdWUgPCB0aGlzLnJhdGVNaW4pIHJldHVybjtcblx0fVxuXG5cdGluY3JlYXNlUmF0ZSgpIHtcblx0XHR0aGlzLnJhdGUgKz0gdGhpcy5wbGF5ZXIub3B0aW9ucy5yYXRlLnN0ZXA7XG5cdH1cblxuXHRkZWNyZWFzZVJhdGUoKSB7XG5cdFx0dGhpcy5yYXRlIC09IHRoaXMucGxheWVyLm9wdGlvbnMucmF0ZS5zdGVwO1xuXHR9XG5cblx0c2V0IHBsYXliYWNrUXVhbGl0eShuYW1lKSB7XG5cdFx0Y29uc3QgbGV2ZWxzID0gdGhpcy5nZXRBdmFpbGFibGVRdWFsaXR5TGV2ZWxzKCk7XG5cdFx0aWYoIWxldmVscy5zb21lKG9iaiA9PiBuYW1lIGluIG9iaikpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdH1cblxuXHRnZXQgcGxheWJhY2tRdWFsaXR5KCkge1xuXG5cdH1cblxuXHRnZXQgcGF1c2VkKCkge1xuXG5cdH1cblxuXHRnZXQgcGxheWVkKCkge1xuXG5cdH1cblxuXHRnZXQgZGVmYXVsdFJhdGUoKSB7XG5cdFx0cmV0dXJuIENvb2tpZS5nZXQoJ3JhdGUnKSB8fCB0aGlzLnBsYXllci5vcHRpb25zLnJhdGUuZGVmYXVsdFxuXHR9XG5cblx0c2V0IHNyYyAodmFsdWUpIHtcblxuXHR9XG5cblx0Z2V0IHNyYygpIHtcblxuXHR9XG5cblx0c3VwcG9ydHNGdWxsU2NyZWVuKCkge1xuXG5cdH1cblxuXHRwbGF5KCkge1xuXG5cdH1cblxuXHRwYXVzZSAoKSB7XG5cblx0fVxuXG5cdGxvYWQoKSB7XG5cdH1cblxuXHR0b2dnbGVQbGF5ICgpIHtcblx0XHRpZiAodGhpcy5wYXVzZWQpIHtcblx0XHRcdHRoaXMucGxheSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnBhdXNlKCk7XG5cdFx0fVxuXHR9XG5cbn1cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnRW50aXR5JywgRW50aXR5KTtcbmV4cG9ydCBkZWZhdWx0IEVudGl0eTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9lbnRpdHkvRW50aXR5LmpzIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBFbnRpdHkgZnJvbSAnLi9FbnRpdHknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL0NvbXBvbmVudCc7XG5cblxuZnVuY3Rpb24gbG9hZFNjcmlwdCh1cmwpIHtcblx0cmV0dXJuICQuZ2V0U2NyaXB0KHVybCk7XG59XG5cbi8qIGdsb2JhbCBZVCAqL1xuY29uc3QgYXBpTG9hZGVkID0gbG9hZFNjcmlwdCgnaHR0cHM6Ly93d3cueW91dHViZS5jb20vaWZyYW1lX2FwaScpO1xuXG5jbGFzcyBZb3V0dWJlIGV4dGVuZHMgRW50aXR5IHtcblx0Y29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblx0XHR0aGlzLl9wYXVzZWQgPSB0cnVlO1xuXG5cdFx0dGhpcy5zcmMgPSB0aGlzLnBsYXllci5vcHRpb25zLnNyYztcblxuXHRcdHRoaXMucGxheWVyLmFkZENsYXNzKCdsZXBsYXllci0teW91dHViZScpO1xuXHRcdHRoaXMuZWxlbWVudC5vbignY2xpY2snLCB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdkYmxjbGljaycsIHRoaXMub25EYmxjbGljay5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdHNldCBzcmMoc3JjKSB7XG5cdFx0aWYoc3JjID09IG51bGwpIHJldHVybjtcblx0XHRpZih0aGlzLnNyYyAmJiB0aGlzLnNyYy51cmwgPT09IHNyYy51cmwpIHJldHVybjtcblxuXHRcdGNvbnN0IHVybCA9IHNyYy51cmwgfHwgc3JjLmlkO1xuXG5cdFx0dGhpcy52aWRlb0lkID0gWW91dHViZS5wYXJzZVVybCh1cmwpO1xuXG5cdFx0aWYodGhpcy5wbGF5ZXIub3B0aW9ucy5wb3N0ZXIpIHtcblx0XHRcdHRoaXMucG9zdGVyID0gdGhpcy5wbGF5ZXIub3B0aW9ucy5wb3N0ZXJcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5wb3N0ZXIgPSAnaHR0cHM6Ly9pbWcueW91dHViZS5jb20vdmkvJyArIHRoaXMudmlkZW9JZCArICcvMC5qcGcnO1xuXHRcdH1cblx0fVxuXG5cdG9uQ2xpY2soZXZlbnQpIHtcblx0XHR0aGlzLnRyaWdnZXIoJ2NsaWNrJyk7XG5cdH1cblxuXHRvbkRibGNsaWNrKCkge1xuXHRcdHRoaXMudHJpZ2dlcignZGJsY2xpY2snKTtcblx0fVxuXG5cdGdldCBjdXJyZW50VGltZSgpIHtcblx0XHRyZXR1cm4gdGhpcy55dFBsYXllcj8gdGhpcy55dFBsYXllci5nZXRDdXJyZW50VGltZSgpIDogMDtcblx0fVxuXG5cdHNldCBjdXJyZW50VGltZSh2YWx1ZSkge1xuXHRcdGlmKHRoaXMubGFzdFN0YXRlID09PSBZVC5QbGF5ZXJTdGF0ZS5QQVVTRUQpIHtcblx0XHRcdHRoaXMudGltZUJlZm9yZVNlZWsgPSB0aGlzLmN1cnJlbnRUaW1lO1xuXHRcdH1cblxuXHRcdGlmICghdGhpcy5pc1NlZWtpbmcpIHtcblx0XHRcdHRoaXMud2FzUGF1c2VkQmVmb3JlU2VlayA9IHRoaXMucGF1c2VkO1xuXHRcdH1cblxuXHRcdHRoaXMuaXNTZWVraW5nID0gdHJ1ZTtcblx0XHR0aGlzLnl0UGxheWVyLnNlZWtUbyh2YWx1ZSwgdHJ1ZSk7XG5cdFx0dGhpcy50cmlnZ2VyKCd0aW1ldXBkYXRlJyk7XG5cdFx0dGhpcy50cmlnZ2VyKCdzZWVraW5nJyk7XG5cblx0XHR0aGlzLmVtaXRUaW1ldXBkYXRlKCk7XG5cdH1cblxuXHRnZXQgZHVyYXRpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMueXRQbGF5ZXIgJiYgdGhpcy55dFBsYXllci5nZXREdXJhdGlvbiA/IHRoaXMueXRQbGF5ZXIuZ2V0RHVyYXRpb24oKSA6IE5hTjtcblx0fVxuXG5cdGdldCBwYXVzZWQoKSB7XG5cdFx0cmV0dXJuICh0aGlzLnl0UGxheWVyKSA/XG5cdFx0XHQodGhpcy5sYXN0U3RhdGUgIT09IFlULlBsYXllclN0YXRlLlBMQVlJTkcgJiYgdGhpcy5sYXN0U3RhdGUgIT09IFlULlBsYXllclN0YXRlLkJVRkZFUklORylcblx0XHRcdDogdHJ1ZTtcblxuXHR9XG5cblxuXHRnZXQgcmF0ZSgpIHtcblx0XHRyZXR1cm4gdGhpcy55dFBsYXllci5nZXRQbGF5YmFja1JhdGUoKTtcblx0fVxuXG5cdHNldCByYXRlKHZhbHVlKSB7XG5cdFx0c3VwZXIucmF0ZSA9IHZhbHVlO1xuXHRcdHRoaXMueXRQbGF5ZXIuc2V0UGxheWJhY2tSYXRlKHZhbHVlKTtcblx0XHR0aGlzLnRyaWdnZXIoJ3JhdGVjaGFuZ2UnKTtcblx0fVxuXG5cdHNldCBtdXRlZCh2YWx1ZSkge1xuXHRcdGlmKHZhbHVlKSB7XG5cdFx0XHR0aGlzLnl0UGxheWVyLm11dGUoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy55dFBsYXllci51bk11dGUoKTtcblx0XHR9XG5cblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdHRoaXMudHJpZ2dlcigndm9sdW1lY2hhbmdlJyk7XG5cdFx0fSwgNTApO1xuXHR9XG5cblx0Z2V0IG11dGVkKCkge1xuXHRcdHJldHVybiB0aGlzLnl0UGxheWVyLmlzTXV0ZWQoKTtcblx0fVxuXG5cdGdldCBkZWZhdWx0Vm9sdW1lKCkge1xuXHRcdHJldHVybiB0aGlzLnZvbHVtZSB8fCB0aGlzLnBsYXllci5vcHRpb25zLnZvbHVtZS5kZWZhdWx0O1xuXHR9XG5cblx0aW5jcmVhc2VSYXRlKCkge1xuXHRcdGNvbnN0IGluZGV4ID0gdGhpcy5hdmFpbGFibGVSYXRlcy5pbmRleE9mKHRoaXMucmF0ZSk7XG5cdFx0aWYoaW5kZXggKyAxID49IHRoaXMuYXZhaWxhYmxlUmF0ZXMubGVuZ3RoKSByZXR1cm47XG5cdFx0cmV0dXJuIHRoaXMucmF0ZSA9IHRoaXMuYXZhaWxhYmxlUmF0ZXNbaW5kZXggKyAxXTtcblx0fVxuXG5cdGRlY3JlYXNlUmF0ZSgpIHtcblx0XHRjb25zdCBpbmRleCA9IHRoaXMuYXZhaWxhYmxlUmF0ZXMuaW5kZXhPZih0aGlzLnJhdGUpO1xuXHRcdGlmKGluZGV4IC0gMSA8IDApIHJldHVybjtcblx0XHRyZXR1cm4gdGhpcy5yYXRlID0gdGhpcy5hdmFpbGFibGVSYXRlc1tpbmRleCAtIDFdO1xuXHR9XG5cblx0Z2V0QXZhaWxhYmxlUXVhbGl0eUxldmVscygpIHtcblx0XHRjb25zdCBhcnIgPSB0aGlzLnl0UGxheWVyLmdldEF2YWlsYWJsZVF1YWxpdHlMZXZlbHMoKTtcblx0XHRjb25zdCBpbmRleCA9IGFyci5pbmRleE9mKCdhdXRvJyk7XG5cblx0XHRpZihpbmRleCA+IC0xKSB7XG5cdFx0XHRhcnIuc3BsaWNlKGluZGV4LCAxKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gYXJyLm1hcChpdGVtID0+ICh7XG5cdFx0XHR0aXRsZSA6IFlvdXR1YmUuUVVBTElUWV9OQU1FU1tpdGVtXSB8fCBpdGVtLFxuXHRcdFx0bmFtZSA6IGl0ZW1cblx0XHR9KSk7XG5cdH1cblxuXHRzZXQgcGxheWJhY2tRdWFsaXR5KG5hbWUpIHtcblx0XHRzdXBlci5wbGF5YmFja1F1YWxpdHkgPSBuYW1lO1xuXHRcdGNvbnN0IHRpbWUgPSB0aGlzLmN1cnJlbnRUaW1lO1xuXHRcdGNvbnN0IHN0YXR1cyA9IHRoaXMueXRQbGF5ZXIuZ2V0UGxheWVyU3RhdGUoKTtcblxuXHRcdGlmKHN0YXR1cyAhPT0gWVQuUGxheWVyU3RhdGUuVU5TVEFSVEVEICYmIHN0YXR1cyAhPT0gWVQuUGxheWVyU3RhdGUuQ1VFRCkge1xuXHRcdFx0dGhpcy55dFBsYXllci5wYXVzZVZpZGVvKCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5fbmV4dFBsYXliYWNrUXVhbGl0eSA9IG5hbWU7XG5cdFx0dGhpcy55dFBsYXllci5zZXRQbGF5YmFja1F1YWxpdHkobmFtZSk7XG5cdFx0dGhpcy55dFBsYXllci5zZWVrVG8odGltZSk7XG5cblx0XHRpZihzdGF0dXMgIT09IFlULlBsYXllclN0YXRlLlBBVVNFRCkge1xuXHRcdFx0dGhpcy55dFBsYXllci5wbGF5VmlkZW8oKTtcblx0XHR9XG5cblx0fVxuXG5cdGdldCBwbGF5YmFja1F1YWxpdHkoKSB7XG5cdFx0aWYgKHRoaXMuX3BsYXliYWNrUXVhbGl0eSA9PSBudWxsKSB7XG5cdFx0XHR0aGlzLl9wbGF5YmFja1F1YWxpdHkgPSB0aGlzLmdldEF2YWlsYWJsZVF1YWxpdHlMZXZlbHMoKVxuXHRcdFx0XHQuZmluZChpdGVtID0+IGl0ZW0ubmFtZSA9PT0gdGhpcy55dFBsYXllci5nZXRQbGF5YmFja1F1YWxpdHkoKSlcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuX3BsYXliYWNrUXVhbGl0eTtcblx0fVxuXG5cdGdldCB2b2x1bWUoKSB7XG5cdFx0cmV0dXJuIHRoaXMueXRQbGF5ZXIgPyB0aGlzLnl0UGxheWVyLmdldFZvbHVtZSgpIC8gMTAwLjAgOiAxO1xuXHR9XG5cblx0c2V0IHZvbHVtZSh2YWx1ZSkge1xuXHRcdHRoaXMueXRQbGF5ZXIuc2V0Vm9sdW1lKHZhbHVlICogMTAwKTtcblxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0dGhpcy50cmlnZ2VyKCd2b2x1bWVjaGFuZ2UnKTtcblx0XHR9LCA1MClcblxuXHR9XG5cblx0c3VwcG9ydHNGdWxsU2NyZWVuKCkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0cGxheSgpIHtcblx0XHR0aGlzLnl0UGxheWVyLnBsYXlWaWRlbygpO1xuXHRcdHRoaXMudHJpZ2dlcigncGxheScpO1xuXHR9XG5cblx0cGF1c2UoKSB7XG5cdFx0dGhpcy55dFBsYXllci5wYXVzZVZpZGVvKCk7XG5cdFx0dGhpcy50cmlnZ2VyKCdwYXVzZScpO1xuXHR9XG5cblxuXHRpbml0KCkge1xuXHRcdHN1cGVyLmluaXQoKTtcblx0XHRyZXR1cm4gYXBpTG9hZGVkXG5cdFx0XHQudGhlbigoKSA9PiB0aGlzLmluaXRZVFBsYXllcigpKVxuXHR9XG5cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHR0aGlzLmVsZW1lbnQgPSAkKCc8ZGl2IC8+Jylcblx0XHRcdC5hZGRDbGFzcygnbGVwbGF5ZXJfX3lvdXR1YmUtd3JhcHBlcicpXG5cdFx0XHQuYXR0cigndGFiaW5kZXgnLCAnMCcpO1xuXHRcdHRoaXMueW91dHViZUVsZW1lbnQgPSAkKCc8ZGl2IC8+Jylcblx0XHRcdC5hZGRDbGFzcygnbGVwbGF5ZXJfX3lvdXR1YmUnKTtcblx0XHR0aGlzLmJsb2NrZXIgPSAkKCc8ZGl2IC8+Jylcblx0XHRcdC5hZGRDbGFzcygnbGVwbGF5ZXJfX3lvdXR1YmUtYmxvY2tlcicpO1xuXG5cblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50XG5cdFx0XHQuYXBwZW5kKHRoaXMuYmxvY2tlcilcblx0XHRcdC5hcHBlbmQodGhpcy55b3V0dWJlRWxlbWVudCk7XG5cdH1cblxuXHRpbml0WVRQbGF5ZXIoKSB7XG5cdFx0dGhpcy5faW5pdFByb21pc2UgPSAkLkRlZmVycmVkKCk7XG5cdFx0Y29uc3QgZ2xvYmFsT3B0aW9ucyA9IHRoaXMucGxheWVyLm9wdGlvbnM7XG5cdFx0bGV0IHl0T3B0aW9ucyA9IHtcblx0XHRcdGF1dG9wbGF5IDogZ2xvYmFsT3B0aW9ucy5hdXRvcGxheSA/IDEgOiAwLFxuXHRcdFx0bG9vcCA6IGdsb2JhbE9wdGlvbnMubG9vcCA/IDEgOiAwLFxuXHRcdFx0aXZfbG9hZF9wb2xpY3kgOiAzLFxuXHRcdFx0Y29udHJvbHMgOiAwLFxuXHRcdFx0bW9kZXN0YnJhbmRpbmcgOiAxLFxuXHRcdFx0cmVsIDogMCxcblx0XHRcdHNob3dpbmZvIDogMCxcblx0XHRcdGNjX2xvYWRfcG9saWN5IDogMSxcblx0XHRcdGRpc2FibGVrYiA6IDAsXG5cdFx0XHRmcyA6IDAsXG5cdFx0XHRzdGFydCA6IGdsb2JhbE9wdGlvbnMudGltZVxuXHRcdH07XG5cblx0XHRZVC5yZWFkeSgoKSA9PiB7XG5cdFx0XHR0aGlzLm9wdGlvbnMuY3R4LnJlcGxhY2VXaXRoKHRoaXMuZWxlbWVudCk7XG5cblx0XHRcdHRoaXMueXRQbGF5ZXIgPSBuZXcgWVQuUGxheWVyKHRoaXMueW91dHViZUVsZW1lbnRbMF0sIHtcblx0XHRcdFx0dmlkZW9JZCA6IHRoaXMudmlkZW9JZCxcblx0XHRcdFx0d2lkdGggOiBnbG9iYWxPcHRpb25zLndpZHRoIHx8ICcxMDAlJyxcblx0XHRcdFx0cGxheWVyVmFycyA6IHl0T3B0aW9ucyxcblx0XHRcdFx0ZXZlbnRzIDoge1xuXHRcdFx0XHRcdG9uUmVhZHkgOiB0aGlzLm9uWVRQUmVhZHkuYmluZCh0aGlzKSxcblx0XHRcdFx0XHRvblN0YXRlQ2hhbmdlIDogdGhpcy5vbllUUFN0YXRlQ2hhbmdlLmJpbmQodGhpcyksXG5cdFx0XHRcdFx0b25QbGF5YmFja1JhdGVDaGFuZ2UgOiB0aGlzLm9uWVRQUmF0ZUNoYW5nZS5iaW5kKHRoaXMpLFxuXHRcdFx0XHRcdG9uUGxheWJhY2tRdWFsaXR5Q2hhbmdlIDogdGhpcy5vbllUUFBsYXliYWNrUXVhbGl0eUNoYW5nZS5iaW5kKHRoaXMpXG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0fSlcblx0XHRyZXR1cm4gdGhpcy5faW5pdFByb21pc2UucHJvbWlzZSgpO1xuXHR9XG5cblxuXHRzZXRBdmFpbGFibGVQbGF5YmFja1JhdGVzKCkge1xuXHRcdHRoaXMuYXZhaWxhYmxlUmF0ZXMgPSB0aGlzLnl0UGxheWVyLmdldEF2YWlsYWJsZVBsYXliYWNrUmF0ZXMoKTtcblx0XHR0aGlzLnJhdGVNaW4gPSB0aGlzLmF2YWlsYWJsZVJhdGVzWzBdO1xuXHRcdHRoaXMucmF0ZU1heCA9IHRoaXMuYXZhaWxhYmxlUmF0ZXNbdGhpcy5hdmFpbGFibGVSYXRlcy5sZW5ndGggLSAxXTtcblx0fVxuXG5cdG9uWVRQUmVhZHkoZSkge1xuXHRcdHRoaXMuX2luaXRQcm9taXNlLnJlc29sdmUoKTtcblx0XHR0aGlzLnNldEF2YWlsYWJsZVBsYXliYWNrUmF0ZXMoKTtcblx0fVxuXG5cdG9uWVRQUmF0ZUNoYW5nZShlKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCdyYXRlY2hhbmdlJyk7XG5cdH1cblxuXHRvbllUUFBsYXliYWNrUXVhbGl0eUNoYW5nZShlKSB7XG5cdFx0Y29uc3QgZGF0YSA9IGUuZGF0YTtcblx0XHR0aGlzLl9wbGF5YmFja1F1YWxpdHkgPSB0aGlzLmdldEF2YWlsYWJsZVF1YWxpdHlMZXZlbHMoKS5maW5kKGl0ZW0gPT4gaXRlbS5uYW1lID09PSBkYXRhKTtcblx0XHR0aGlzLnRyaWdnZXIoJ3F1YWxpdHljaGFuZ2UnLCB0aGlzLl9wbGF5YmFja1F1YWxpdHkpO1xuXHR9XG5cblx0b25ZVFBTdGF0ZUNoYW5nZShlKSB7XG5cdFx0Y29uc3Qgc3RhdGUgPSBlLmRhdGE7XG5cdFx0aWYoc3RhdGUgPT09IHRoaXMubGFzdFN0YXRlKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5sYXN0U3RhdGUgPSBzdGF0ZTtcblx0XHRzd2l0Y2goc3RhdGUpIHtcblx0XHRjYXNlIFlULlBsYXllclN0YXRlLlVOU1RBUlRFRDpcblx0XHRcdHRoaXMudHJpZ2dlcignbG9hZHN0YXJ0Jyk7XG5cdFx0XHR0aGlzLnRyaWdnZXIoJ2xvYWRlZG1ldGFkYXRhJyk7XG5cdFx0XHR0aGlzLnRyaWdnZXIoJ2R1cmF0aW9uY2hhbmdlJyk7XG5cdFx0XHR0aGlzLnRyaWdnZXIoJ3JhdGVjaGFuZ2UnKTtcblx0XHRcdHRoaXMudHJpZ2dlcigndm9sdW1lY2hhbmdlJyk7XG5cdFx0XHRicmVhaztcblxuXHRcdGNhc2UgWVQuUGxheWVyU3RhdGUuRU5ERUQ6XG5cdFx0XHR0aGlzLnRyaWdnZXIoJ2VuZGVkJyk7XG5cdFx0XHRicmVhaztcblxuXHRcdGNhc2UgWVQuUGxheWVyU3RhdGUuUExBWUlORzpcblx0XHRcdHRoaXMudHJpZ2dlcigndGltZXVwZGF0ZScpO1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdkdXJhdGlvbmNoYW5nZScpO1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdwbGF5aW5nJyk7XG5cblx0XHRcdHRoaXMueXRQbGF5ZXIuc2V0UGxheWJhY2tRdWFsaXR5KHRoaXMuX25leHRQbGF5YmFja1F1YWxpdHkpO1xuXG5cdFx0XHRpZih0aGlzLmlzU2Vla2luZykge1xuXHRcdFx0XHR0aGlzLm9uU2Vla2VkKCk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuZW1pdFRpbWV1cGRhdGUoKTtcblx0XHRcdGJyZWFrO1xuXG5cdFx0Y2FzZSBZVC5QbGF5ZXJTdGF0ZS5QQVVTRUQ6XG5cdFx0XHR0aGlzLnRyaWdnZXIoJ2NhbnBsYXknKTtcblxuXHRcdFx0aWYodGhpcy5pc1NlZWtpbmcpIHtcblx0XHRcdFx0dGhpcy5vblNlZWtlZCgpO1xuXHRcdFx0fVxuXHRcdFx0YnJlYWs7XG5cblx0XHRjYXNlIFlULlBsYXllclN0YXRlLkJVRkZFUklORzpcblx0XHRcdHRoaXMucGxheWVyLnRyaWdnZXIoJ3RpbWV1cGRhdGUnKTtcblx0XHRcdHRoaXMucGxheWVyLnRyaWdnZXIoJ3dhaXRpbmcnKTtcblxuXHRcdFx0dGhpcy55dFBsYXllci5zZXRQbGF5YmFja1F1YWxpdHkodGhpcy5fbmV4dFBsYXliYWNrUXVhbGl0eSk7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cblx0fVxuXG5cdG9uU2Vla2VkKCkge1xuXHRcdGNsZWFySW50ZXJ2YWwodGhpcy5zZWVraW5nSW50ZXJ2YWwpO1xuXHRcdHRoaXMuaXNTZWVraW5nID0gZmFsc2U7XG5cblx0XHRpZiAodGhpcy53YXNQYXVzZWRCZWZvcmVTZWVrKSB7XG5cdFx0XHR0aGlzLnBhdXNlKCk7XG5cdFx0fVxuXG5cdFx0dGhpcy50cmlnZ2VyKCdzZWVrZWQnKTtcblx0fVxuXG5cdGVtaXRUaW1ldXBkYXRlKCkge1xuXHRcdGNsZWFySW50ZXJ2YWwodGhpcy5zZWVraW5nSW50ZXJ2YWwpO1xuXG5cdFx0dGhpcy5zZWVraW5nSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG5cdFx0XHRpZih0aGlzLmxhc3RTdGF0ZSA9PT0gWVQuUGxheWVyU3RhdGUuUEFVU0VEKSB7XG5cdFx0XHRcdGNsZWFySW50ZXJ2YWwodGhpcy5zZWVraW5nSW50ZXJ2YWwpO1xuXHRcdFx0fSBlbHNlIGlmKHRoaXMuY3VycmVudFRpbWUgIT09IHRoaXMudGltZUJlZm9yZVNlZWspIHtcblx0XHRcdFx0dGhpcy50cmlnZ2VyKCd0aW1ldXBkYXRlJyk7XG5cdFx0XHR9XG5cdFx0fSwgMjUwKVxuXHR9XG5cdHN0YXRpYyBwYXJzZVVybCh1cmwpIHtcblx0XHRsZXQgcmVzdWx0ID0gbnVsbDtcblx0XHRjb25zdCByZWdleCA9IFlvdXR1YmUuVVJMX1JFR0VYO1xuXHRcdGNvbnN0IG1hdGNoID0gdXJsLm1hdGNoKHJlZ2V4KTtcblx0XHRpZih1cmwubGVuZ3RoID09PSAxMSkge1xuXHRcdFx0cmVzdWx0ID0gdXJsO1xuXHRcdH0gZWxzZSBpZihtYXRjaCAmJiBtYXRjaFsyXS5sZW5ndGggPT09IDExKSB7XG5cdFx0XHRyZXN1bHQgPSBtYXRjaFsyXTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxufVxuXG5Zb3V0dWJlLlVSTF9SRUdFWCA9IC9eLiooeW91dHUuYmVcXC98dlxcL3x1XFwvXFx3XFwvfGVtYmVkXFwvfHdhdGNoXFw/dj18XFwmdj0pKFteI1xcJlxcP10qKS4qLztcblxuWW91dHViZS5RVUFMSVRZX05BTUVTID0ge1xuXHR0aW55IDogJzE0MHAnLFxuXHRzbWFsbCA6ICcyNDBwJyxcblx0bWVkaXVtIDogJzM2MHAnLFxuXHRsYXJnZSA6ICc0ODBwJyxcblx0aGQ3MjAgOiAnNzIwcCcsXG5cdGhkMTA4MCA6ICcxMDgwcCcsXG5cdGhpZ2hyZXMgOiAnSEQnLFxuXHRhdXRvIDogJ9CQ0LLRgtC+J1xufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ1lvdXR1YmUnLCBZb3V0dWJlKTtcbmV4cG9ydCBkZWZhdWx0IFlvdXR1YmU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvZW50aXR5L1lvdXR1YmUuanMiLCIndXNlIHN0cmljdCc7XG5cbnZhciBkZWZpbmUgPSByZXF1aXJlKCdkZWZpbmUtcHJvcGVydGllcycpO1xudmFyIEVTID0gcmVxdWlyZSgnZXMtYWJzdHJhY3QvZXM2Jyk7XG5cbnZhciBpbXBsZW1lbnRhdGlvbiA9IHJlcXVpcmUoJy4vaW1wbGVtZW50YXRpb24nKTtcbnZhciBnZXRQb2x5ZmlsbCA9IHJlcXVpcmUoJy4vcG9seWZpbGwnKTtcbnZhciBzaGltID0gcmVxdWlyZSgnLi9zaGltJyk7XG5cbnZhciBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcblxudmFyIHBvbHlmaWxsID0gZ2V0UG9seWZpbGwoKTtcblxudmFyIGJvdW5kRmluZFNoaW0gPSBmdW5jdGlvbiBmaW5kKGFycmF5LCBwcmVkaWNhdGUpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuXHRFUy5SZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFycmF5KTtcblx0dmFyIGFyZ3MgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG5cdHJldHVybiBwb2x5ZmlsbC5hcHBseShhcnJheSwgYXJncyk7XG59O1xuXG5kZWZpbmUoYm91bmRGaW5kU2hpbSwge1xuXHRnZXRQb2x5ZmlsbDogZ2V0UG9seWZpbGwsXG5cdGltcGxlbWVudGF0aW9uOiBpbXBsZW1lbnRhdGlvbixcblx0c2hpbTogc2hpbVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gYm91bmRGaW5kU2hpbTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9hcnJheS5wcm90b3R5cGUuZmluZC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIga2V5cyA9IHJlcXVpcmUoJ29iamVjdC1rZXlzJyk7XG52YXIgZm9yZWFjaCA9IHJlcXVpcmUoJ2ZvcmVhY2gnKTtcbnZhciBoYXNTeW1ib2xzID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgU3ltYm9sKCkgPT09ICdzeW1ib2wnO1xuXG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG52YXIgaXNGdW5jdGlvbiA9IGZ1bmN0aW9uIChmbikge1xuXHRyZXR1cm4gdHlwZW9mIGZuID09PSAnZnVuY3Rpb24nICYmIHRvU3RyLmNhbGwoZm4pID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xufTtcblxudmFyIGFyZVByb3BlcnR5RGVzY3JpcHRvcnNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoKSB7XG5cdHZhciBvYmogPSB7fTtcblx0dHJ5IHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCAneCcsIHsgZW51bWVyYWJsZTogZmFsc2UsIHZhbHVlOiBvYmogfSk7XG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzLCBuby1yZXN0cmljdGVkLXN5bnRheCAqL1xuICAgICAgICBmb3IgKHZhciBfIGluIG9iaikgeyByZXR1cm4gZmFsc2U7IH1cbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycywgbm8tcmVzdHJpY3RlZC1zeW50YXggKi9cblx0XHRyZXR1cm4gb2JqLnggPT09IG9iajtcblx0fSBjYXRjaCAoZSkgeyAvKiB0aGlzIGlzIElFIDguICovXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xudmFyIHN1cHBvcnRzRGVzY3JpcHRvcnMgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgYXJlUHJvcGVydHlEZXNjcmlwdG9yc1N1cHBvcnRlZCgpO1xuXG52YXIgZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lLCB2YWx1ZSwgcHJlZGljYXRlKSB7XG5cdGlmIChuYW1lIGluIG9iamVjdCAmJiAoIWlzRnVuY3Rpb24ocHJlZGljYXRlKSB8fCAhcHJlZGljYXRlKCkpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGlmIChzdXBwb3J0c0Rlc2NyaXB0b3JzKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG9iamVjdCwgbmFtZSwge1xuXHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdFx0ZW51bWVyYWJsZTogZmFsc2UsXG5cdFx0XHR2YWx1ZTogdmFsdWUsXG5cdFx0XHR3cml0YWJsZTogdHJ1ZVxuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdG9iamVjdFtuYW1lXSA9IHZhbHVlO1xuXHR9XG59O1xuXG52YXIgZGVmaW5lUHJvcGVydGllcyA9IGZ1bmN0aW9uIChvYmplY3QsIG1hcCkge1xuXHR2YXIgcHJlZGljYXRlcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyID8gYXJndW1lbnRzWzJdIDoge307XG5cdHZhciBwcm9wcyA9IGtleXMobWFwKTtcblx0aWYgKGhhc1N5bWJvbHMpIHtcblx0XHRwcm9wcyA9IHByb3BzLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG1hcCkpO1xuXHR9XG5cdGZvcmVhY2gocHJvcHMsIGZ1bmN0aW9uIChuYW1lKSB7XG5cdFx0ZGVmaW5lUHJvcGVydHkob2JqZWN0LCBuYW1lLCBtYXBbbmFtZV0sIHByZWRpY2F0ZXNbbmFtZV0pO1xuXHR9KTtcbn07XG5cbmRlZmluZVByb3BlcnRpZXMuc3VwcG9ydHNEZXNjcmlwdG9ycyA9ICEhc3VwcG9ydHNEZXNjcmlwdG9ycztcblxubW9kdWxlLmV4cG9ydHMgPSBkZWZpbmVQcm9wZXJ0aWVzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2RlZmluZS1wcm9wZXJ0aWVzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbi8vIG1vZGlmaWVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2VzLXNoaW1zL2VzNS1zaGltXG52YXIgaGFzID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG52YXIgaXNBcmdzID0gcmVxdWlyZSgnLi9pc0FyZ3VtZW50cycpO1xudmFyIGlzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG52YXIgaGFzRG9udEVudW1CdWcgPSAhaXNFbnVtZXJhYmxlLmNhbGwoeyB0b1N0cmluZzogbnVsbCB9LCAndG9TdHJpbmcnKTtcbnZhciBoYXNQcm90b0VudW1CdWcgPSBpc0VudW1lcmFibGUuY2FsbChmdW5jdGlvbiAoKSB7fSwgJ3Byb3RvdHlwZScpO1xudmFyIGRvbnRFbnVtcyA9IFtcblx0J3RvU3RyaW5nJyxcblx0J3RvTG9jYWxlU3RyaW5nJyxcblx0J3ZhbHVlT2YnLFxuXHQnaGFzT3duUHJvcGVydHknLFxuXHQnaXNQcm90b3R5cGVPZicsXG5cdCdwcm9wZXJ0eUlzRW51bWVyYWJsZScsXG5cdCdjb25zdHJ1Y3Rvcidcbl07XG52YXIgZXF1YWxzQ29uc3RydWN0b3JQcm90b3R5cGUgPSBmdW5jdGlvbiAobykge1xuXHR2YXIgY3RvciA9IG8uY29uc3RydWN0b3I7XG5cdHJldHVybiBjdG9yICYmIGN0b3IucHJvdG90eXBlID09PSBvO1xufTtcbnZhciBleGNsdWRlZEtleXMgPSB7XG5cdCRjb25zb2xlOiB0cnVlLFxuXHQkZXh0ZXJuYWw6IHRydWUsXG5cdCRmcmFtZTogdHJ1ZSxcblx0JGZyYW1lRWxlbWVudDogdHJ1ZSxcblx0JGZyYW1lczogdHJ1ZSxcblx0JGlubmVySGVpZ2h0OiB0cnVlLFxuXHQkaW5uZXJXaWR0aDogdHJ1ZSxcblx0JG91dGVySGVpZ2h0OiB0cnVlLFxuXHQkb3V0ZXJXaWR0aDogdHJ1ZSxcblx0JHBhZ2VYT2Zmc2V0OiB0cnVlLFxuXHQkcGFnZVlPZmZzZXQ6IHRydWUsXG5cdCRwYXJlbnQ6IHRydWUsXG5cdCRzY3JvbGxMZWZ0OiB0cnVlLFxuXHQkc2Nyb2xsVG9wOiB0cnVlLFxuXHQkc2Nyb2xsWDogdHJ1ZSxcblx0JHNjcm9sbFk6IHRydWUsXG5cdCRzZWxmOiB0cnVlLFxuXHQkd2Via2l0SW5kZXhlZERCOiB0cnVlLFxuXHQkd2Via2l0U3RvcmFnZUluZm86IHRydWUsXG5cdCR3aW5kb3c6IHRydWVcbn07XG52YXIgaGFzQXV0b21hdGlvbkVxdWFsaXR5QnVnID0gKGZ1bmN0aW9uICgpIHtcblx0LyogZ2xvYmFsIHdpbmRvdyAqL1xuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdGZvciAodmFyIGsgaW4gd2luZG93KSB7XG5cdFx0dHJ5IHtcblx0XHRcdGlmICghZXhjbHVkZWRLZXlzWyckJyArIGtdICYmIGhhcy5jYWxsKHdpbmRvdywgaykgJiYgd2luZG93W2tdICE9PSBudWxsICYmIHR5cGVvZiB3aW5kb3dba10gPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0ZXF1YWxzQ29uc3RydWN0b3JQcm90b3R5cGUod2luZG93W2tdKTtcblx0XHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBmYWxzZTtcbn0oKSk7XG52YXIgZXF1YWxzQ29uc3RydWN0b3JQcm90b3R5cGVJZk5vdEJ1Z2d5ID0gZnVuY3Rpb24gKG8pIHtcblx0LyogZ2xvYmFsIHdpbmRvdyAqL1xuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIWhhc0F1dG9tYXRpb25FcXVhbGl0eUJ1Zykge1xuXHRcdHJldHVybiBlcXVhbHNDb25zdHJ1Y3RvclByb3RvdHlwZShvKTtcblx0fVxuXHR0cnkge1xuXHRcdHJldHVybiBlcXVhbHNDb25zdHJ1Y3RvclByb3RvdHlwZShvKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufTtcblxudmFyIGtleXNTaGltID0gZnVuY3Rpb24ga2V5cyhvYmplY3QpIHtcblx0dmFyIGlzT2JqZWN0ID0gb2JqZWN0ICE9PSBudWxsICYmIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnO1xuXHR2YXIgaXNGdW5jdGlvbiA9IHRvU3RyLmNhbGwob2JqZWN0KSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcblx0dmFyIGlzQXJndW1lbnRzID0gaXNBcmdzKG9iamVjdCk7XG5cdHZhciBpc1N0cmluZyA9IGlzT2JqZWN0ICYmIHRvU3RyLmNhbGwob2JqZWN0KSA9PT0gJ1tvYmplY3QgU3RyaW5nXSc7XG5cdHZhciB0aGVLZXlzID0gW107XG5cblx0aWYgKCFpc09iamVjdCAmJiAhaXNGdW5jdGlvbiAmJiAhaXNBcmd1bWVudHMpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3Qua2V5cyBjYWxsZWQgb24gYSBub24tb2JqZWN0Jyk7XG5cdH1cblxuXHR2YXIgc2tpcFByb3RvID0gaGFzUHJvdG9FbnVtQnVnICYmIGlzRnVuY3Rpb247XG5cdGlmIChpc1N0cmluZyAmJiBvYmplY3QubGVuZ3RoID4gMCAmJiAhaGFzLmNhbGwob2JqZWN0LCAwKSkge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgb2JqZWN0Lmxlbmd0aDsgKytpKSB7XG5cdFx0XHR0aGVLZXlzLnB1c2goU3RyaW5nKGkpKTtcblx0XHR9XG5cdH1cblxuXHRpZiAoaXNBcmd1bWVudHMgJiYgb2JqZWN0Lmxlbmd0aCA+IDApIHtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IG9iamVjdC5sZW5ndGg7ICsraikge1xuXHRcdFx0dGhlS2V5cy5wdXNoKFN0cmluZyhqKSk7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdGZvciAodmFyIG5hbWUgaW4gb2JqZWN0KSB7XG5cdFx0XHRpZiAoIShza2lwUHJvdG8gJiYgbmFtZSA9PT0gJ3Byb3RvdHlwZScpICYmIGhhcy5jYWxsKG9iamVjdCwgbmFtZSkpIHtcblx0XHRcdFx0dGhlS2V5cy5wdXNoKFN0cmluZyhuYW1lKSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0aWYgKGhhc0RvbnRFbnVtQnVnKSB7XG5cdFx0dmFyIHNraXBDb25zdHJ1Y3RvciA9IGVxdWFsc0NvbnN0cnVjdG9yUHJvdG90eXBlSWZOb3RCdWdneShvYmplY3QpO1xuXG5cdFx0Zm9yICh2YXIgayA9IDA7IGsgPCBkb250RW51bXMubGVuZ3RoOyArK2spIHtcblx0XHRcdGlmICghKHNraXBDb25zdHJ1Y3RvciAmJiBkb250RW51bXNba10gPT09ICdjb25zdHJ1Y3RvcicpICYmIGhhcy5jYWxsKG9iamVjdCwgZG9udEVudW1zW2tdKSkge1xuXHRcdFx0XHR0aGVLZXlzLnB1c2goZG9udEVudW1zW2tdKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmV0dXJuIHRoZUtleXM7XG59O1xuXG5rZXlzU2hpbS5zaGltID0gZnVuY3Rpb24gc2hpbU9iamVjdEtleXMoKSB7XG5cdGlmIChPYmplY3Qua2V5cykge1xuXHRcdHZhciBrZXlzV29ya3NXaXRoQXJndW1lbnRzID0gKGZ1bmN0aW9uICgpIHtcblx0XHRcdC8vIFNhZmFyaSA1LjAgYnVnXG5cdFx0XHRyZXR1cm4gKE9iamVjdC5rZXlzKGFyZ3VtZW50cykgfHwgJycpLmxlbmd0aCA9PT0gMjtcblx0XHR9KDEsIDIpKTtcblx0XHRpZiAoIWtleXNXb3Jrc1dpdGhBcmd1bWVudHMpIHtcblx0XHRcdHZhciBvcmlnaW5hbEtleXMgPSBPYmplY3Qua2V5cztcblx0XHRcdE9iamVjdC5rZXlzID0gZnVuY3Rpb24ga2V5cyhvYmplY3QpIHtcblx0XHRcdFx0aWYgKGlzQXJncyhvYmplY3QpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG9yaWdpbmFsS2V5cyhzbGljZS5jYWxsKG9iamVjdCkpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiBvcmlnaW5hbEtleXMob2JqZWN0KTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0T2JqZWN0LmtleXMgPSBrZXlzU2hpbTtcblx0fVxuXHRyZXR1cm4gT2JqZWN0LmtleXMgfHwga2V5c1NoaW07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGtleXNTaGltO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L29iamVjdC1rZXlzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNBcmd1bWVudHModmFsdWUpIHtcblx0dmFyIHN0ciA9IHRvU3RyLmNhbGwodmFsdWUpO1xuXHR2YXIgaXNBcmdzID0gc3RyID09PSAnW29iamVjdCBBcmd1bWVudHNdJztcblx0aWYgKCFpc0FyZ3MpIHtcblx0XHRpc0FyZ3MgPSBzdHIgIT09ICdbb2JqZWN0IEFycmF5XScgJiZcblx0XHRcdHZhbHVlICE9PSBudWxsICYmXG5cdFx0XHR0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmXG5cdFx0XHR0eXBlb2YgdmFsdWUubGVuZ3RoID09PSAnbnVtYmVyJyAmJlxuXHRcdFx0dmFsdWUubGVuZ3RoID49IDAgJiZcblx0XHRcdHRvU3RyLmNhbGwodmFsdWUuY2FsbGVlKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcblx0fVxuXHRyZXR1cm4gaXNBcmdzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9vYmplY3Qta2V5cy9pc0FyZ3VtZW50cy5qc1xuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG52YXIgaGFzT3duID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZm9yRWFjaCAob2JqLCBmbiwgY3R4KSB7XG4gICAgaWYgKHRvU3RyaW5nLmNhbGwoZm4pICE9PSAnW29iamVjdCBGdW5jdGlvbl0nKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2l0ZXJhdG9yIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICAgIH1cbiAgICB2YXIgbCA9IG9iai5sZW5ndGg7XG4gICAgaWYgKGwgPT09ICtsKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBmbi5jYWxsKGN0eCwgb2JqW2ldLCBpLCBvYmopO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZm9yICh2YXIgayBpbiBvYmopIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChvYmosIGspKSB7XG4gICAgICAgICAgICAgICAgZm4uY2FsbChjdHgsIG9ialtrXSwgaywgb2JqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9mb3JlYWNoL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgaGFzU3ltYm9scyA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gJ3N5bWJvbCc7XG52YXIgc3ltYm9sVG9TdHIgPSBoYXNTeW1ib2xzID8gU3ltYm9sLnByb3RvdHlwZS50b1N0cmluZyA6IHRvU3RyO1xuXG52YXIgJGlzTmFOID0gcmVxdWlyZSgnLi9oZWxwZXJzL2lzTmFOJyk7XG52YXIgJGlzRmluaXRlID0gcmVxdWlyZSgnLi9oZWxwZXJzL2lzRmluaXRlJyk7XG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSIHx8IE1hdGgucG93KDIsIDUzKSAtIDE7XG5cbnZhciBhc3NpZ24gPSByZXF1aXJlKCcuL2hlbHBlcnMvYXNzaWduJyk7XG52YXIgc2lnbiA9IHJlcXVpcmUoJy4vaGVscGVycy9zaWduJyk7XG52YXIgbW9kID0gcmVxdWlyZSgnLi9oZWxwZXJzL21vZCcpO1xudmFyIGlzUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9oZWxwZXJzL2lzUHJpbWl0aXZlJyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCdlcy10by1wcmltaXRpdmUvZXM2Jyk7XG52YXIgcGFyc2VJbnRlZ2VyID0gcGFyc2VJbnQ7XG52YXIgYmluZCA9IHJlcXVpcmUoJ2Z1bmN0aW9uLWJpbmQnKTtcbnZhciBzdHJTbGljZSA9IGJpbmQuY2FsbChGdW5jdGlvbi5jYWxsLCBTdHJpbmcucHJvdG90eXBlLnNsaWNlKTtcbnZhciBpc0JpbmFyeSA9IGJpbmQuY2FsbChGdW5jdGlvbi5jYWxsLCBSZWdFeHAucHJvdG90eXBlLnRlc3QsIC9eMGJbMDFdKyQvaSk7XG52YXIgaXNPY3RhbCA9IGJpbmQuY2FsbChGdW5jdGlvbi5jYWxsLCBSZWdFeHAucHJvdG90eXBlLnRlc3QsIC9eMG9bMC03XSskL2kpO1xudmFyIG5vbldTID0gWydcXHUwMDg1JywgJ1xcdTIwMGInLCAnXFx1ZmZmZSddLmpvaW4oJycpO1xudmFyIG5vbldTcmVnZXggPSBuZXcgUmVnRXhwKCdbJyArIG5vbldTICsgJ10nLCAnZycpO1xudmFyIGhhc05vbldTID0gYmluZC5jYWxsKEZ1bmN0aW9uLmNhbGwsIFJlZ0V4cC5wcm90b3R5cGUudGVzdCwgbm9uV1NyZWdleCk7XG52YXIgaW52YWxpZEhleExpdGVyYWwgPSAvXlstK10weFswLTlhLWZdKyQvaTtcbnZhciBpc0ludmFsaWRIZXhMaXRlcmFsID0gYmluZC5jYWxsKEZ1bmN0aW9uLmNhbGwsIFJlZ0V4cC5wcm90b3R5cGUudGVzdCwgaW52YWxpZEhleExpdGVyYWwpO1xuXG4vLyB3aGl0ZXNwYWNlIGZyb206IGh0dHA6Ly9lczUuZ2l0aHViLmlvLyN4MTUuNS40LjIwXG4vLyBpbXBsZW1lbnRhdGlvbiBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9lcy1zaGltcy9lczUtc2hpbS9ibG9iL3YzLjQuMC9lczUtc2hpbS5qcyNMMTMwNC1MMTMyNFxudmFyIHdzID0gW1xuXHQnXFx4MDlcXHgwQVxceDBCXFx4MENcXHgwRFxceDIwXFx4QTBcXHUxNjgwXFx1MTgwRVxcdTIwMDBcXHUyMDAxXFx1MjAwMlxcdTIwMDMnLFxuXHQnXFx1MjAwNFxcdTIwMDVcXHUyMDA2XFx1MjAwN1xcdTIwMDhcXHUyMDA5XFx1MjAwQVxcdTIwMkZcXHUyMDVGXFx1MzAwMFxcdTIwMjgnLFxuXHQnXFx1MjAyOVxcdUZFRkYnXG5dLmpvaW4oJycpO1xudmFyIHRyaW1SZWdleCA9IG5ldyBSZWdFeHAoJyheWycgKyB3cyArICddKyl8KFsnICsgd3MgKyAnXSskKScsICdnJyk7XG52YXIgcmVwbGFjZSA9IGJpbmQuY2FsbChGdW5jdGlvbi5jYWxsLCBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2UpO1xudmFyIHRyaW0gPSBmdW5jdGlvbiAodmFsdWUpIHtcblx0cmV0dXJuIHJlcGxhY2UodmFsdWUsIHRyaW1SZWdleCwgJycpO1xufTtcblxudmFyIEVTNSA9IHJlcXVpcmUoJy4vZXM1Jyk7XG5cbnZhciBoYXNSZWdFeHBNYXRjaGVyID0gcmVxdWlyZSgnaXMtcmVnZXgnKTtcblxuLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWFic3RyYWN0LW9wZXJhdGlvbnNcbnZhciBFUzYgPSBhc3NpZ24oYXNzaWduKHt9LCBFUzUpLCB7XG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWNhbGwtZi12LWFyZ3Ncblx0Q2FsbDogZnVuY3Rpb24gQ2FsbChGLCBWKSB7XG5cdFx0dmFyIGFyZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IFtdO1xuXHRcdGlmICghdGhpcy5Jc0NhbGxhYmxlKEYpKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKEYgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG5cdFx0fVxuXHRcdHJldHVybiBGLmFwcGx5KFYsIGFyZ3MpO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b3ByaW1pdGl2ZVxuXHRUb1ByaW1pdGl2ZTogdG9QcmltaXRpdmUsXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvYm9vbGVhblxuXHQvLyBUb0Jvb2xlYW46IEVTNS5Ub0Jvb2xlYW4sXG5cblx0Ly8gaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLXRvbnVtYmVyXG5cdFRvTnVtYmVyOiBmdW5jdGlvbiBUb051bWJlcihhcmd1bWVudCkge1xuXHRcdHZhciB2YWx1ZSA9IGlzUHJpbWl0aXZlKGFyZ3VtZW50KSA/IGFyZ3VtZW50IDogdG9QcmltaXRpdmUoYXJndW1lbnQsICdudW1iZXInKTtcblx0XHRpZiAodHlwZW9mIHZhbHVlID09PSAnc3ltYm9sJykge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgYSBTeW1ib2wgdmFsdWUgdG8gYSBudW1iZXInKTtcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdGlmIChpc0JpbmFyeSh2YWx1ZSkpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuVG9OdW1iZXIocGFyc2VJbnRlZ2VyKHN0clNsaWNlKHZhbHVlLCAyKSwgMikpO1xuXHRcdFx0fSBlbHNlIGlmIChpc09jdGFsKHZhbHVlKSkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5Ub051bWJlcihwYXJzZUludGVnZXIoc3RyU2xpY2UodmFsdWUsIDIpLCA4KSk7XG5cdFx0XHR9IGVsc2UgaWYgKGhhc05vbldTKHZhbHVlKSB8fCBpc0ludmFsaWRIZXhMaXRlcmFsKHZhbHVlKSkge1xuXHRcdFx0XHRyZXR1cm4gTmFOO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyIHRyaW1tZWQgPSB0cmltKHZhbHVlKTtcblx0XHRcdFx0aWYgKHRyaW1tZWQgIT09IHZhbHVlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuVG9OdW1iZXIodHJpbW1lZCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIE51bWJlcih2YWx1ZSk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvaW50ZWdlclxuXHQvLyBUb0ludGVnZXI6IEVTNS5Ub051bWJlcixcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG9pbnQzMlxuXHQvLyBUb0ludDMyOiBFUzUuVG9JbnQzMixcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG91aW50MzJcblx0Ly8gVG9VaW50MzI6IEVTNS5Ub1VpbnQzMixcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG9pbnQxNlxuXHRUb0ludDE2OiBmdW5jdGlvbiBUb0ludDE2KGFyZ3VtZW50KSB7XG5cdFx0dmFyIGludDE2Yml0ID0gdGhpcy5Ub1VpbnQxNihhcmd1bWVudCk7XG5cdFx0cmV0dXJuIGludDE2Yml0ID49IDB4ODAwMCA/IGludDE2Yml0IC0gMHgxMDAwMCA6IGludDE2Yml0O1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b3VpbnQxNlxuXHQvLyBUb1VpbnQxNjogRVM1LlRvVWludDE2LFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b2ludDhcblx0VG9JbnQ4OiBmdW5jdGlvbiBUb0ludDgoYXJndW1lbnQpIHtcblx0XHR2YXIgaW50OGJpdCA9IHRoaXMuVG9VaW50OChhcmd1bWVudCk7XG5cdFx0cmV0dXJuIGludDhiaXQgPj0gMHg4MCA/IGludDhiaXQgLSAweDEwMCA6IGludDhiaXQ7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvdWludDhcblx0VG9VaW50ODogZnVuY3Rpb24gVG9VaW50OChhcmd1bWVudCkge1xuXHRcdHZhciBudW1iZXIgPSB0aGlzLlRvTnVtYmVyKGFyZ3VtZW50KTtcblx0XHRpZiAoJGlzTmFOKG51bWJlcikgfHwgbnVtYmVyID09PSAwIHx8ICEkaXNGaW5pdGUobnVtYmVyKSkgeyByZXR1cm4gMDsgfVxuXHRcdHZhciBwb3NJbnQgPSBzaWduKG51bWJlcikgKiBNYXRoLmZsb29yKE1hdGguYWJzKG51bWJlcikpO1xuXHRcdHJldHVybiBtb2QocG9zSW50LCAweDEwMCk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvdWludDhjbGFtcFxuXHRUb1VpbnQ4Q2xhbXA6IGZ1bmN0aW9uIFRvVWludDhDbGFtcChhcmd1bWVudCkge1xuXHRcdHZhciBudW1iZXIgPSB0aGlzLlRvTnVtYmVyKGFyZ3VtZW50KTtcblx0XHRpZiAoJGlzTmFOKG51bWJlcikgfHwgbnVtYmVyIDw9IDApIHsgcmV0dXJuIDA7IH1cblx0XHRpZiAobnVtYmVyID49IDB4RkYpIHsgcmV0dXJuIDB4RkY7IH1cblx0XHR2YXIgZiA9IE1hdGguZmxvb3IoYXJndW1lbnQpO1xuXHRcdGlmIChmICsgMC41IDwgbnVtYmVyKSB7IHJldHVybiBmICsgMTsgfVxuXHRcdGlmIChudW1iZXIgPCBmICsgMC41KSB7IHJldHVybiBmOyB9XG5cdFx0aWYgKGYgJSAyICE9PSAwKSB7IHJldHVybiBmICsgMTsgfVxuXHRcdHJldHVybiBmO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b3N0cmluZ1xuXHRUb1N0cmluZzogZnVuY3Rpb24gVG9TdHJpbmcoYXJndW1lbnQpIHtcblx0XHRpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnc3ltYm9sJykge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgYSBTeW1ib2wgdmFsdWUgdG8gYSBzdHJpbmcnKTtcblx0XHR9XG5cdFx0cmV0dXJuIFN0cmluZyhhcmd1bWVudCk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvb2JqZWN0XG5cdFRvT2JqZWN0OiBmdW5jdGlvbiBUb09iamVjdCh2YWx1ZSkge1xuXHRcdHRoaXMuUmVxdWlyZU9iamVjdENvZXJjaWJsZSh2YWx1ZSk7XG5cdFx0cmV0dXJuIE9iamVjdCh2YWx1ZSk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvcHJvcGVydHlrZXlcblx0VG9Qcm9wZXJ0eUtleTogZnVuY3Rpb24gVG9Qcm9wZXJ0eUtleShhcmd1bWVudCkge1xuXHRcdHZhciBrZXkgPSB0aGlzLlRvUHJpbWl0aXZlKGFyZ3VtZW50LCBTdHJpbmcpO1xuXHRcdHJldHVybiB0eXBlb2Yga2V5ID09PSAnc3ltYm9sJyA/IHN5bWJvbFRvU3RyLmNhbGwoa2V5KSA6IHRoaXMuVG9TdHJpbmcoa2V5KTtcblx0fSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG9sZW5ndGhcblx0VG9MZW5ndGg6IGZ1bmN0aW9uIFRvTGVuZ3RoKGFyZ3VtZW50KSB7XG5cdFx0dmFyIGxlbiA9IHRoaXMuVG9JbnRlZ2VyKGFyZ3VtZW50KTtcblx0XHRpZiAobGVuIDw9IDApIHsgcmV0dXJuIDA7IH0gLy8gaW5jbHVkZXMgY29udmVydGluZyAtMCB0byArMFxuXHRcdGlmIChsZW4gPiBNQVhfU0FGRV9JTlRFR0VSKSB7IHJldHVybiBNQVhfU0FGRV9JTlRFR0VSOyB9XG5cdFx0cmV0dXJuIGxlbjtcblx0fSxcblxuXHQvLyBodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtY2Fub25pY2FsbnVtZXJpY2luZGV4c3RyaW5nXG5cdENhbm9uaWNhbE51bWVyaWNJbmRleFN0cmluZzogZnVuY3Rpb24gQ2Fub25pY2FsTnVtZXJpY0luZGV4U3RyaW5nKGFyZ3VtZW50KSB7XG5cdFx0aWYgKHRvU3RyLmNhbGwoYXJndW1lbnQpICE9PSAnW29iamVjdCBTdHJpbmddJykge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignbXVzdCBiZSBhIHN0cmluZycpO1xuXHRcdH1cblx0XHRpZiAoYXJndW1lbnQgPT09ICctMCcpIHsgcmV0dXJuIC0wOyB9XG5cdFx0dmFyIG4gPSB0aGlzLlRvTnVtYmVyKGFyZ3VtZW50KTtcblx0XHRpZiAodGhpcy5TYW1lVmFsdWUodGhpcy5Ub1N0cmluZyhuKSwgYXJndW1lbnQpKSB7IHJldHVybiBuOyB9XG5cdFx0cmV0dXJuIHZvaWQgMDtcblx0fSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtcmVxdWlyZW9iamVjdGNvZXJjaWJsZVxuXHRSZXF1aXJlT2JqZWN0Q29lcmNpYmxlOiBFUzUuQ2hlY2tPYmplY3RDb2VyY2libGUsXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWlzYXJyYXlcblx0SXNBcnJheTogQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBJc0FycmF5KGFyZ3VtZW50KSB7XG5cdFx0cmV0dXJuIHRvU3RyLmNhbGwoYXJndW1lbnQpID09PSAnW29iamVjdCBBcnJheV0nO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1pc2NhbGxhYmxlXG5cdC8vIElzQ2FsbGFibGU6IEVTNS5Jc0NhbGxhYmxlLFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1pc2NvbnN0cnVjdG9yXG5cdElzQ29uc3RydWN0b3I6IGZ1bmN0aW9uIElzQ29uc3RydWN0b3IoYXJndW1lbnQpIHtcblx0XHRyZXR1cm4gdHlwZW9mIGFyZ3VtZW50ID09PSAnZnVuY3Rpb24nICYmICEhYXJndW1lbnQucHJvdG90eXBlOyAvLyB1bmZvcnR1bmF0ZWx5IHRoZXJlJ3Mgbm8gd2F5IHRvIHRydWx5IGNoZWNrIHRoaXMgd2l0aG91dCB0cnkvY2F0Y2ggYG5ldyBhcmd1bWVudGBcblx0fSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtaXNleHRlbnNpYmxlLW9cblx0SXNFeHRlbnNpYmxlOiBmdW5jdGlvbiBJc0V4dGVuc2libGUob2JqKSB7XG5cdFx0aWYgKCFPYmplY3QucHJldmVudEV4dGVuc2lvbnMpIHsgcmV0dXJuIHRydWU7IH1cblx0XHRpZiAoaXNQcmltaXRpdmUob2JqKSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRyZXR1cm4gT2JqZWN0LmlzRXh0ZW5zaWJsZShvYmopO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1pc2ludGVnZXJcblx0SXNJbnRlZ2VyOiBmdW5jdGlvbiBJc0ludGVnZXIoYXJndW1lbnQpIHtcblx0XHRpZiAodHlwZW9mIGFyZ3VtZW50ICE9PSAnbnVtYmVyJyB8fCAkaXNOYU4oYXJndW1lbnQpIHx8ICEkaXNGaW5pdGUoYXJndW1lbnQpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHZhciBhYnMgPSBNYXRoLmFicyhhcmd1bWVudCk7XG5cdFx0cmV0dXJuIE1hdGguZmxvb3IoYWJzKSA9PT0gYWJzO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1pc3Byb3BlcnR5a2V5XG5cdElzUHJvcGVydHlLZXk6IGZ1bmN0aW9uIElzUHJvcGVydHlLZXkoYXJndW1lbnQpIHtcblx0XHRyZXR1cm4gdHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgYXJndW1lbnQgPT09ICdzeW1ib2wnO1xuXHR9LFxuXG5cdC8vIGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1pc3JlZ2V4cFxuXHRJc1JlZ0V4cDogZnVuY3Rpb24gSXNSZWdFeHAoYXJndW1lbnQpIHtcblx0XHRpZiAoIWFyZ3VtZW50IHx8IHR5cGVvZiBhcmd1bWVudCAhPT0gJ29iamVjdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0aWYgKGhhc1N5bWJvbHMpIHtcblx0XHRcdHZhciBpc1JlZ0V4cCA9IGFyZ3VtZW50W1N5bWJvbC5tYXRjaF07XG5cdFx0XHRpZiAodHlwZW9mIGlzUmVnRXhwICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRyZXR1cm4gRVM1LlRvQm9vbGVhbihpc1JlZ0V4cCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBoYXNSZWdFeHBNYXRjaGVyKGFyZ3VtZW50KTtcblx0fSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtc2FtZXZhbHVlXG5cdC8vIFNhbWVWYWx1ZTogRVM1LlNhbWVWYWx1ZSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtc2FtZXZhbHVlemVyb1xuXHRTYW1lVmFsdWVaZXJvOiBmdW5jdGlvbiBTYW1lVmFsdWVaZXJvKHgsIHkpIHtcblx0XHRyZXR1cm4gKHggPT09IHkpIHx8ICgkaXNOYU4oeCkgJiYgJGlzTmFOKHkpKTtcblx0fSxcblxuXHQvKipcblx0ICogNy4zLjIgR2V0ViAoViwgUClcblx0ICogMS4gQXNzZXJ0OiBJc1Byb3BlcnR5S2V5KFApIGlzIHRydWUuXG5cdCAqIDIuIExldCBPIGJlIFRvT2JqZWN0KFYpLlxuXHQgKiAzLiBSZXR1cm5JZkFicnVwdChPKS5cblx0ICogNC4gUmV0dXJuIE8uW1tHZXRdXShQLCBWKS5cblx0ICovXG5cdEdldFY6IGZ1bmN0aW9uIEdldFYoViwgUCkge1xuXHRcdC8vIDcuMy4yLjFcblx0XHRpZiAoIXRoaXMuSXNQcm9wZXJ0eUtleShQKSkge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogSXNQcm9wZXJ0eUtleShQKSBpcyBub3QgdHJ1ZScpO1xuXHRcdH1cblxuXHRcdC8vIDcuMy4yLjItM1xuXHRcdHZhciBPID0gdGhpcy5Ub09iamVjdChWKTtcblxuXHRcdC8vIDcuMy4yLjRcblx0XHRyZXR1cm4gT1tQXTtcblx0fSxcblxuXHQvKipcblx0ICogNy4zLjkgLSBodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtZ2V0bWV0aG9kXG5cdCAqIDEuIEFzc2VydDogSXNQcm9wZXJ0eUtleShQKSBpcyB0cnVlLlxuXHQgKiAyLiBMZXQgZnVuYyBiZSBHZXRWKE8sIFApLlxuXHQgKiAzLiBSZXR1cm5JZkFicnVwdChmdW5jKS5cblx0ICogNC4gSWYgZnVuYyBpcyBlaXRoZXIgdW5kZWZpbmVkIG9yIG51bGwsIHJldHVybiB1bmRlZmluZWQuXG5cdCAqIDUuIElmIElzQ2FsbGFibGUoZnVuYykgaXMgZmFsc2UsIHRocm93IGEgVHlwZUVycm9yIGV4Y2VwdGlvbi5cblx0ICogNi4gUmV0dXJuIGZ1bmMuXG5cdCAqL1xuXHRHZXRNZXRob2Q6IGZ1bmN0aW9uIEdldE1ldGhvZChPLCBQKSB7XG5cdFx0Ly8gNy4zLjkuMVxuXHRcdGlmICghdGhpcy5Jc1Byb3BlcnR5S2V5KFApKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBJc1Byb3BlcnR5S2V5KFApIGlzIG5vdCB0cnVlJyk7XG5cdFx0fVxuXG5cdFx0Ly8gNy4zLjkuMlxuXHRcdHZhciBmdW5jID0gdGhpcy5HZXRWKE8sIFApO1xuXG5cdFx0Ly8gNy4zLjkuNFxuXHRcdGlmIChmdW5jID09IG51bGwpIHtcblx0XHRcdHJldHVybiB1bmRlZmluZWQ7XG5cdFx0fVxuXG5cdFx0Ly8gNy4zLjkuNVxuXHRcdGlmICghdGhpcy5Jc0NhbGxhYmxlKGZ1bmMpKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKFAgKyAnaXMgbm90IGEgZnVuY3Rpb24nKTtcblx0XHR9XG5cblx0XHQvLyA3LjMuOS42XG5cdFx0cmV0dXJuIGZ1bmM7XG5cdH0sXG5cblx0LyoqXG5cdCAqIDcuMy4xIEdldCAoTywgUCkgLSBodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtZ2V0LW8tcFxuXHQgKiAxLiBBc3NlcnQ6IFR5cGUoTykgaXMgT2JqZWN0LlxuXHQgKiAyLiBBc3NlcnQ6IElzUHJvcGVydHlLZXkoUCkgaXMgdHJ1ZS5cblx0ICogMy4gUmV0dXJuIE8uW1tHZXRdXShQLCBPKS5cblx0ICovXG5cdEdldDogZnVuY3Rpb24gR2V0KE8sIFApIHtcblx0XHQvLyA3LjMuMS4xXG5cdFx0aWYgKHRoaXMuVHlwZShPKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IFR5cGUoTykgaXMgbm90IE9iamVjdCcpO1xuXHRcdH1cblx0XHQvLyA3LjMuMS4yXG5cdFx0aWYgKCF0aGlzLklzUHJvcGVydHlLZXkoUCkpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IElzUHJvcGVydHlLZXkoUCkgaXMgbm90IHRydWUnKTtcblx0XHR9XG5cdFx0Ly8gNy4zLjEuM1xuXHRcdHJldHVybiBPW1BdO1xuXHR9LFxuXG5cdFR5cGU6IGZ1bmN0aW9uIFR5cGUoeCkge1xuXHRcdGlmICh0eXBlb2YgeCA9PT0gJ3N5bWJvbCcpIHtcblx0XHRcdHJldHVybiAnU3ltYm9sJztcblx0XHR9XG5cdFx0cmV0dXJuIEVTNS5UeXBlKHgpO1xuXHR9LFxuXG5cdC8vIGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1zcGVjaWVzY29uc3RydWN0b3Jcblx0U3BlY2llc0NvbnN0cnVjdG9yOiBmdW5jdGlvbiBTcGVjaWVzQ29uc3RydWN0b3IoTywgZGVmYXVsdENvbnN0cnVjdG9yKSB7XG5cdFx0aWYgKHRoaXMuVHlwZShPKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IFR5cGUoTykgaXMgbm90IE9iamVjdCcpO1xuXHRcdH1cblx0XHR2YXIgQyA9IE8uY29uc3RydWN0b3I7XG5cdFx0aWYgKHR5cGVvZiBDID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0cmV0dXJuIGRlZmF1bHRDb25zdHJ1Y3Rvcjtcblx0XHR9XG5cdFx0aWYgKHRoaXMuVHlwZShDKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ08uY29uc3RydWN0b3IgaXMgbm90IGFuIE9iamVjdCcpO1xuXHRcdH1cblx0XHR2YXIgUyA9IGhhc1N5bWJvbHMgJiYgU3ltYm9sLnNwZWNpZXMgPyBDW1N5bWJvbC5zcGVjaWVzXSA6IHVuZGVmaW5lZDtcblx0XHRpZiAoUyA9PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gZGVmYXVsdENvbnN0cnVjdG9yO1xuXHRcdH1cblx0XHRpZiAodGhpcy5Jc0NvbnN0cnVjdG9yKFMpKSB7XG5cdFx0XHRyZXR1cm4gUztcblx0XHR9XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignbm8gY29uc3RydWN0b3IgZm91bmQnKTtcblx0fVxufSk7XG5cbmRlbGV0ZSBFUzYuQ2hlY2tPYmplY3RDb2VyY2libGU7IC8vIHJlbmFtZWQgaW4gRVM2IHRvIFJlcXVpcmVPYmplY3RDb2VyY2libGVcblxubW9kdWxlLmV4cG9ydHMgPSBFUzY7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZXMtYWJzdHJhY3QvZXM2LmpzXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IE51bWJlci5pc05hTiB8fCBmdW5jdGlvbiBpc05hTihhKSB7XG5cdHJldHVybiBhICE9PSBhO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy1hYnN0cmFjdC9oZWxwZXJzL2lzTmFOLmpzXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgJGlzTmFOID0gTnVtYmVyLmlzTmFOIHx8IGZ1bmN0aW9uIChhKSB7IHJldHVybiBhICE9PSBhOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE51bWJlci5pc0Zpbml0ZSB8fCBmdW5jdGlvbiAoeCkgeyByZXR1cm4gdHlwZW9mIHggPT09ICdudW1iZXInICYmICEkaXNOYU4oeCkgJiYgeCAhPT0gSW5maW5pdHkgJiYgeCAhPT0gLUluZmluaXR5OyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VzLWFic3RyYWN0L2hlbHBlcnMvaXNGaW5pdGUuanNcbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBoYXMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSkge1xuXHRmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG5cdFx0aWYgKGhhcy5jYWxsKHNvdXJjZSwga2V5KSkge1xuXHRcdFx0dGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHRhcmdldDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZXMtYWJzdHJhY3QvaGVscGVycy9hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2lnbihudW1iZXIpIHtcblx0cmV0dXJuIG51bWJlciA+PSAwID8gMSA6IC0xO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy1hYnN0cmFjdC9oZWxwZXJzL3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbW9kKG51bWJlciwgbW9kdWxvKSB7XG5cdHZhciByZW1haW4gPSBudW1iZXIgJSBtb2R1bG87XG5cdHJldHVybiBNYXRoLmZsb29yKHJlbWFpbiA+PSAwID8gcmVtYWluIDogcmVtYWluICsgbW9kdWxvKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZXMtYWJzdHJhY3QvaGVscGVycy9tb2QuanNcbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNQcmltaXRpdmUodmFsdWUpIHtcblx0cmV0dXJuIHZhbHVlID09PSBudWxsIHx8ICh0eXBlb2YgdmFsdWUgIT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0Jyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VzLWFic3RyYWN0L2hlbHBlcnMvaXNQcmltaXRpdmUuanNcbi8vIG1vZHVsZSBpZCA9IDQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIGhhc1N5bWJvbHMgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09ICdzeW1ib2wnO1xuXG52YXIgaXNQcmltaXRpdmUgPSByZXF1aXJlKCcuL2hlbHBlcnMvaXNQcmltaXRpdmUnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnaXMtY2FsbGFibGUnKTtcbnZhciBpc0RhdGUgPSByZXF1aXJlKCdpcy1kYXRlLW9iamVjdCcpO1xudmFyIGlzU3ltYm9sID0gcmVxdWlyZSgnaXMtc3ltYm9sJyk7XG5cbnZhciBvcmRpbmFyeVRvUHJpbWl0aXZlID0gZnVuY3Rpb24gT3JkaW5hcnlUb1ByaW1pdGl2ZShPLCBoaW50KSB7XG5cdGlmICh0eXBlb2YgTyA9PT0gJ3VuZGVmaW5lZCcgfHwgTyA9PT0gbnVsbCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIG1ldGhvZCBvbiAnICsgTyk7XG5cdH1cblx0aWYgKHR5cGVvZiBoaW50ICE9PSAnc3RyaW5nJyB8fCAoaGludCAhPT0gJ251bWJlcicgJiYgaGludCAhPT0gJ3N0cmluZycpKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignaGludCBtdXN0IGJlIFwic3RyaW5nXCIgb3IgXCJudW1iZXJcIicpO1xuXHR9XG5cdHZhciBtZXRob2ROYW1lcyA9IGhpbnQgPT09ICdzdHJpbmcnID8gWyd0b1N0cmluZycsICd2YWx1ZU9mJ10gOiBbJ3ZhbHVlT2YnLCAndG9TdHJpbmcnXTtcblx0dmFyIG1ldGhvZCwgcmVzdWx0LCBpO1xuXHRmb3IgKGkgPSAwOyBpIDwgbWV0aG9kTmFtZXMubGVuZ3RoOyArK2kpIHtcblx0XHRtZXRob2QgPSBPW21ldGhvZE5hbWVzW2ldXTtcblx0XHRpZiAoaXNDYWxsYWJsZShtZXRob2QpKSB7XG5cdFx0XHRyZXN1bHQgPSBtZXRob2QuY2FsbChPKTtcblx0XHRcdGlmIChpc1ByaW1pdGl2ZShyZXN1bHQpKSB7XG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHRocm93IG5ldyBUeXBlRXJyb3IoJ05vIGRlZmF1bHQgdmFsdWUnKTtcbn07XG5cbnZhciBHZXRNZXRob2QgPSBmdW5jdGlvbiBHZXRNZXRob2QoTywgUCkge1xuXHR2YXIgZnVuYyA9IE9bUF07XG5cdGlmIChmdW5jICE9PSBudWxsICYmIHR5cGVvZiBmdW5jICE9PSAndW5kZWZpbmVkJykge1xuXHRcdGlmICghaXNDYWxsYWJsZShmdW5jKSkge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihmdW5jICsgJyByZXR1cm5lZCBmb3IgcHJvcGVydHkgJyArIFAgKyAnIG9mIG9iamVjdCAnICsgTyArICcgaXMgbm90IGEgZnVuY3Rpb24nKTtcblx0XHR9XG5cdFx0cmV0dXJuIGZ1bmM7XG5cdH1cbn07XG5cbi8vIGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy10b3ByaW1pdGl2ZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBUb1ByaW1pdGl2ZShpbnB1dCwgUHJlZmVycmVkVHlwZSkge1xuXHRpZiAoaXNQcmltaXRpdmUoaW5wdXQpKSB7XG5cdFx0cmV0dXJuIGlucHV0O1xuXHR9XG5cdHZhciBoaW50ID0gJ2RlZmF1bHQnO1xuXHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcblx0XHRpZiAoUHJlZmVycmVkVHlwZSA9PT0gU3RyaW5nKSB7XG5cdFx0XHRoaW50ID0gJ3N0cmluZyc7XG5cdFx0fSBlbHNlIGlmIChQcmVmZXJyZWRUeXBlID09PSBOdW1iZXIpIHtcblx0XHRcdGhpbnQgPSAnbnVtYmVyJztcblx0XHR9XG5cdH1cblxuXHR2YXIgZXhvdGljVG9QcmltO1xuXHRpZiAoaGFzU3ltYm9scykge1xuXHRcdGlmIChTeW1ib2wudG9QcmltaXRpdmUpIHtcblx0XHRcdGV4b3RpY1RvUHJpbSA9IEdldE1ldGhvZChpbnB1dCwgU3ltYm9sLnRvUHJpbWl0aXZlKTtcblx0XHR9IGVsc2UgaWYgKGlzU3ltYm9sKGlucHV0KSkge1xuXHRcdFx0ZXhvdGljVG9QcmltID0gU3ltYm9sLnByb3RvdHlwZS52YWx1ZU9mO1xuXHRcdH1cblx0fVxuXHRpZiAodHlwZW9mIGV4b3RpY1RvUHJpbSAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHR2YXIgcmVzdWx0ID0gZXhvdGljVG9QcmltLmNhbGwoaW5wdXQsIGhpbnQpO1xuXHRcdGlmIChpc1ByaW1pdGl2ZShyZXN1bHQpKSB7XG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH1cblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCd1bmFibGUgdG8gY29udmVydCBleG90aWMgb2JqZWN0IHRvIHByaW1pdGl2ZScpO1xuXHR9XG5cdGlmIChoaW50ID09PSAnZGVmYXVsdCcgJiYgKGlzRGF0ZShpbnB1dCkgfHwgaXNTeW1ib2woaW5wdXQpKSkge1xuXHRcdGhpbnQgPSAnc3RyaW5nJztcblx0fVxuXHRyZXR1cm4gb3JkaW5hcnlUb1ByaW1pdGl2ZShpbnB1dCwgaGludCA9PT0gJ2RlZmF1bHQnID8gJ251bWJlcicgOiBoaW50KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZXMtdG8tcHJpbWl0aXZlL2VzNi5qc1xuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc1ByaW1pdGl2ZSh2YWx1ZSkge1xuXHRyZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgKHR5cGVvZiB2YWx1ZSAhPT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZXMtdG8tcHJpbWl0aXZlL2hlbHBlcnMvaXNQcmltaXRpdmUuanNcbi8vIG1vZHVsZSBpZCA9IDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIGZuVG9TdHIgPSBGdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmc7XG5cbnZhciBjb25zdHJ1Y3RvclJlZ2V4ID0gL15cXHMqY2xhc3MgLztcbnZhciBpc0VTNkNsYXNzRm4gPSBmdW5jdGlvbiBpc0VTNkNsYXNzRm4odmFsdWUpIHtcblx0dHJ5IHtcblx0XHR2YXIgZm5TdHIgPSBmblRvU3RyLmNhbGwodmFsdWUpO1xuXHRcdHZhciBzaW5nbGVTdHJpcHBlZCA9IGZuU3RyLnJlcGxhY2UoL1xcL1xcLy4qXFxuL2csICcnKTtcblx0XHR2YXIgbXVsdGlTdHJpcHBlZCA9IHNpbmdsZVN0cmlwcGVkLnJlcGxhY2UoL1xcL1xcKlsuXFxzXFxTXSpcXCpcXC8vZywgJycpO1xuXHRcdHZhciBzcGFjZVN0cmlwcGVkID0gbXVsdGlTdHJpcHBlZC5yZXBsYWNlKC9cXG4vbWcsICcgJykucmVwbGFjZSgvIHsyfS9nLCAnICcpO1xuXHRcdHJldHVybiBjb25zdHJ1Y3RvclJlZ2V4LnRlc3Qoc3BhY2VTdHJpcHBlZCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRyZXR1cm4gZmFsc2U7IC8vIG5vdCBhIGZ1bmN0aW9uXG5cdH1cbn07XG5cbnZhciB0cnlGdW5jdGlvbk9iamVjdCA9IGZ1bmN0aW9uIHRyeUZ1bmN0aW9uT2JqZWN0KHZhbHVlKSB7XG5cdHRyeSB7XG5cdFx0aWYgKGlzRVM2Q2xhc3NGbih2YWx1ZSkpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdFx0Zm5Ub1N0ci5jYWxsKHZhbHVlKTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufTtcbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgZm5DbGFzcyA9ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG52YXIgZ2VuQ2xhc3MgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nO1xudmFyIGhhc1RvU3RyaW5nVGFnID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgU3ltYm9sLnRvU3RyaW5nVGFnID09PSAnc3ltYm9sJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0NhbGxhYmxlKHZhbHVlKSB7XG5cdGlmICghdmFsdWUpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdGlmICh0eXBlb2YgdmFsdWUgIT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JykgeyByZXR1cm4gZmFsc2U7IH1cblx0aWYgKGhhc1RvU3RyaW5nVGFnKSB7IHJldHVybiB0cnlGdW5jdGlvbk9iamVjdCh2YWx1ZSk7IH1cblx0aWYgKGlzRVM2Q2xhc3NGbih2YWx1ZSkpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdHZhciBzdHJDbGFzcyA9IHRvU3RyLmNhbGwodmFsdWUpO1xuXHRyZXR1cm4gc3RyQ2xhc3MgPT09IGZuQ2xhc3MgfHwgc3RyQ2xhc3MgPT09IGdlbkNsYXNzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9pcy1jYWxsYWJsZS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZ2V0RGF5ID0gRGF0ZS5wcm90b3R5cGUuZ2V0RGF5O1xudmFyIHRyeURhdGVPYmplY3QgPSBmdW5jdGlvbiB0cnlEYXRlT2JqZWN0KHZhbHVlKSB7XG5cdHRyeSB7XG5cdFx0Z2V0RGF5LmNhbGwodmFsdWUpO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xuXG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIGRhdGVDbGFzcyA9ICdbb2JqZWN0IERhdGVdJztcbnZhciBoYXNUb1N0cmluZ1RhZyA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIFN5bWJvbC50b1N0cmluZ1RhZyA9PT0gJ3N5bWJvbCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNEYXRlT2JqZWN0KHZhbHVlKSB7XG5cdGlmICh0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnIHx8IHZhbHVlID09PSBudWxsKSB7IHJldHVybiBmYWxzZTsgfVxuXHRyZXR1cm4gaGFzVG9TdHJpbmdUYWcgPyB0cnlEYXRlT2JqZWN0KHZhbHVlKSA6IHRvU3RyLmNhbGwodmFsdWUpID09PSBkYXRlQ2xhc3M7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2lzLWRhdGUtb2JqZWN0L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgaGFzU3ltYm9scyA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIFN5bWJvbCgpID09PSAnc3ltYm9sJztcblxuaWYgKGhhc1N5bWJvbHMpIHtcblx0dmFyIHN5bVRvU3RyID0gU3ltYm9sLnByb3RvdHlwZS50b1N0cmluZztcblx0dmFyIHN5bVN0cmluZ1JlZ2V4ID0gL15TeW1ib2xcXCguKlxcKSQvO1xuXHR2YXIgaXNTeW1ib2xPYmplY3QgPSBmdW5jdGlvbiBpc1N5bWJvbE9iamVjdCh2YWx1ZSkge1xuXHRcdGlmICh0eXBlb2YgdmFsdWUudmFsdWVPZigpICE9PSAnc3ltYm9sJykgeyByZXR1cm4gZmFsc2U7IH1cblx0XHRyZXR1cm4gc3ltU3RyaW5nUmVnZXgudGVzdChzeW1Ub1N0ci5jYWxsKHZhbHVlKSk7XG5cdH07XG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNTeW1ib2wodmFsdWUpIHtcblx0XHRpZiAodHlwZW9mIHZhbHVlID09PSAnc3ltYm9sJykgeyByZXR1cm4gdHJ1ZTsgfVxuXHRcdGlmICh0b1N0ci5jYWxsKHZhbHVlKSAhPT0gJ1tvYmplY3QgU3ltYm9sXScpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdFx0dHJ5IHtcblx0XHRcdHJldHVybiBpc1N5bWJvbE9iamVjdCh2YWx1ZSk7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fTtcbn0gZWxzZSB7XG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNTeW1ib2wodmFsdWUpIHtcblx0XHQvLyB0aGlzIGVudmlyb25tZW50IGRvZXMgbm90IHN1cHBvcnQgU3ltYm9scy5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH07XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaXMtc3ltYm9sL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaW1wbGVtZW50YXRpb24gPSByZXF1aXJlKCcuL2ltcGxlbWVudGF0aW9uJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQgfHwgaW1wbGVtZW50YXRpb247XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZnVuY3Rpb24tYmluZC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIEVSUk9SX01FU1NBR0UgPSAnRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQgY2FsbGVkIG9uIGluY29tcGF0aWJsZSAnO1xudmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbnZhciBmdW5jVHlwZSA9ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYmluZCh0aGF0KSB7XG4gICAgdmFyIHRhcmdldCA9IHRoaXM7XG4gICAgaWYgKHR5cGVvZiB0YXJnZXQgIT09ICdmdW5jdGlvbicgfHwgdG9TdHIuY2FsbCh0YXJnZXQpICE9PSBmdW5jVHlwZSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEVSUk9SX01FU1NBR0UgKyB0YXJnZXQpO1xuICAgIH1cbiAgICB2YXIgYXJncyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcblxuICAgIHZhciBib3VuZDtcbiAgICB2YXIgYmluZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcyBpbnN0YW5jZW9mIGJvdW5kKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gdGFyZ2V0LmFwcGx5KFxuICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgYXJncy5jb25jYXQoc2xpY2UuY2FsbChhcmd1bWVudHMpKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChPYmplY3QocmVzdWx0KSA9PT0gcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRhcmdldC5hcHBseShcbiAgICAgICAgICAgICAgICB0aGF0LFxuICAgICAgICAgICAgICAgIGFyZ3MuY29uY2F0KHNsaWNlLmNhbGwoYXJndW1lbnRzKSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIGJvdW5kTGVuZ3RoID0gTWF0aC5tYXgoMCwgdGFyZ2V0Lmxlbmd0aCAtIGFyZ3MubGVuZ3RoKTtcbiAgICB2YXIgYm91bmRBcmdzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBib3VuZExlbmd0aDsgaSsrKSB7XG4gICAgICAgIGJvdW5kQXJncy5wdXNoKCckJyArIGkpO1xuICAgIH1cblxuICAgIGJvdW5kID0gRnVuY3Rpb24oJ2JpbmRlcicsICdyZXR1cm4gZnVuY3Rpb24gKCcgKyBib3VuZEFyZ3Muam9pbignLCcpICsgJyl7IHJldHVybiBiaW5kZXIuYXBwbHkodGhpcyxhcmd1bWVudHMpOyB9JykoYmluZGVyKTtcblxuICAgIGlmICh0YXJnZXQucHJvdG90eXBlKSB7XG4gICAgICAgIHZhciBFbXB0eSA9IGZ1bmN0aW9uIEVtcHR5KCkge307XG4gICAgICAgIEVtcHR5LnByb3RvdHlwZSA9IHRhcmdldC5wcm90b3R5cGU7XG4gICAgICAgIGJvdW5kLnByb3RvdHlwZSA9IG5ldyBFbXB0eSgpO1xuICAgICAgICBFbXB0eS5wcm90b3R5cGUgPSBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBib3VuZDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZnVuY3Rpb24tYmluZC9pbXBsZW1lbnRhdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgJGlzTmFOID0gcmVxdWlyZSgnLi9oZWxwZXJzL2lzTmFOJyk7XG52YXIgJGlzRmluaXRlID0gcmVxdWlyZSgnLi9oZWxwZXJzL2lzRmluaXRlJyk7XG5cbnZhciBzaWduID0gcmVxdWlyZSgnLi9oZWxwZXJzL3NpZ24nKTtcbnZhciBtb2QgPSByZXF1aXJlKCcuL2hlbHBlcnMvbW9kJyk7XG5cbnZhciBJc0NhbGxhYmxlID0gcmVxdWlyZSgnaXMtY2FsbGFibGUnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJ2VzLXRvLXByaW1pdGl2ZS9lczUnKTtcblxuLy8gaHR0cHM6Ly9lczUuZ2l0aHViLmlvLyN4OVxudmFyIEVTNSA9IHtcblx0VG9QcmltaXRpdmU6IHRvUHJpbWl0aXZlLFxuXG5cdFRvQm9vbGVhbjogZnVuY3Rpb24gVG9Cb29sZWFuKHZhbHVlKSB7XG5cdFx0cmV0dXJuIEJvb2xlYW4odmFsdWUpO1xuXHR9LFxuXHRUb051bWJlcjogZnVuY3Rpb24gVG9OdW1iZXIodmFsdWUpIHtcblx0XHRyZXR1cm4gTnVtYmVyKHZhbHVlKTtcblx0fSxcblx0VG9JbnRlZ2VyOiBmdW5jdGlvbiBUb0ludGVnZXIodmFsdWUpIHtcblx0XHR2YXIgbnVtYmVyID0gdGhpcy5Ub051bWJlcih2YWx1ZSk7XG5cdFx0aWYgKCRpc05hTihudW1iZXIpKSB7IHJldHVybiAwOyB9XG5cdFx0aWYgKG51bWJlciA9PT0gMCB8fCAhJGlzRmluaXRlKG51bWJlcikpIHsgcmV0dXJuIG51bWJlcjsgfVxuXHRcdHJldHVybiBzaWduKG51bWJlcikgKiBNYXRoLmZsb29yKE1hdGguYWJzKG51bWJlcikpO1xuXHR9LFxuXHRUb0ludDMyOiBmdW5jdGlvbiBUb0ludDMyKHgpIHtcblx0XHRyZXR1cm4gdGhpcy5Ub051bWJlcih4KSA+PiAwO1xuXHR9LFxuXHRUb1VpbnQzMjogZnVuY3Rpb24gVG9VaW50MzIoeCkge1xuXHRcdHJldHVybiB0aGlzLlRvTnVtYmVyKHgpID4+PiAwO1xuXHR9LFxuXHRUb1VpbnQxNjogZnVuY3Rpb24gVG9VaW50MTYodmFsdWUpIHtcblx0XHR2YXIgbnVtYmVyID0gdGhpcy5Ub051bWJlcih2YWx1ZSk7XG5cdFx0aWYgKCRpc05hTihudW1iZXIpIHx8IG51bWJlciA9PT0gMCB8fCAhJGlzRmluaXRlKG51bWJlcikpIHsgcmV0dXJuIDA7IH1cblx0XHR2YXIgcG9zSW50ID0gc2lnbihudW1iZXIpICogTWF0aC5mbG9vcihNYXRoLmFicyhudW1iZXIpKTtcblx0XHRyZXR1cm4gbW9kKHBvc0ludCwgMHgxMDAwMCk7XG5cdH0sXG5cdFRvU3RyaW5nOiBmdW5jdGlvbiBUb1N0cmluZyh2YWx1ZSkge1xuXHRcdHJldHVybiBTdHJpbmcodmFsdWUpO1xuXHR9LFxuXHRUb09iamVjdDogZnVuY3Rpb24gVG9PYmplY3QodmFsdWUpIHtcblx0XHR0aGlzLkNoZWNrT2JqZWN0Q29lcmNpYmxlKHZhbHVlKTtcblx0XHRyZXR1cm4gT2JqZWN0KHZhbHVlKTtcblx0fSxcblx0Q2hlY2tPYmplY3RDb2VyY2libGU6IGZ1bmN0aW9uIENoZWNrT2JqZWN0Q29lcmNpYmxlKHZhbHVlLCBvcHRNZXNzYWdlKSB7XG5cdFx0LyoganNoaW50IGVxbnVsbDp0cnVlICovXG5cdFx0aWYgKHZhbHVlID09IG51bGwpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3Iob3B0TWVzc2FnZSB8fCAnQ2Fubm90IGNhbGwgbWV0aG9kIG9uICcgKyB2YWx1ZSk7XG5cdFx0fVxuXHRcdHJldHVybiB2YWx1ZTtcblx0fSxcblx0SXNDYWxsYWJsZTogSXNDYWxsYWJsZSxcblx0U2FtZVZhbHVlOiBmdW5jdGlvbiBTYW1lVmFsdWUoeCwgeSkge1xuXHRcdGlmICh4ID09PSB5KSB7IC8vIDAgPT09IC0wLCBidXQgdGhleSBhcmUgbm90IGlkZW50aWNhbC5cblx0XHRcdGlmICh4ID09PSAwKSB7IHJldHVybiAxIC8geCA9PT0gMSAvIHk7IH1cblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRyZXR1cm4gJGlzTmFOKHgpICYmICRpc05hTih5KTtcblx0fSxcblxuXHQvLyBodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNS4xLyNzZWMtOFxuXHRUeXBlOiBmdW5jdGlvbiBUeXBlKHgpIHtcblx0XHRpZiAoeCA9PT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuICdOdWxsJztcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiB4ID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0cmV0dXJuICdVbmRlZmluZWQnO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIHggPT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIHggPT09ICdvYmplY3QnKSB7XG5cdFx0XHRyZXR1cm4gJ09iamVjdCc7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2YgeCA9PT0gJ251bWJlcicpIHtcblx0XHRcdHJldHVybiAnTnVtYmVyJztcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiB4ID09PSAnYm9vbGVhbicpIHtcblx0XHRcdHJldHVybiAnQm9vbGVhbic7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2YgeCA9PT0gJ3N0cmluZycpIHtcblx0XHRcdHJldHVybiAnU3RyaW5nJztcblx0XHR9XG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRVM1O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VzLWFic3RyYWN0L2VzNS5qc1xuLy8gbW9kdWxlIGlkID0gNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG52YXIgaXNQcmltaXRpdmUgPSByZXF1aXJlKCcuL2hlbHBlcnMvaXNQcmltaXRpdmUnKTtcblxudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCdpcy1jYWxsYWJsZScpO1xuXG4vLyBodHRwczovL2VzNS5naXRodWIuaW8vI3g4LjEyXG52YXIgRVM1aW50ZXJuYWxTbG90cyA9IHtcblx0J1tbRGVmYXVsdFZhbHVlXV0nOiBmdW5jdGlvbiAoTywgaGludCkge1xuXHRcdHZhciBhY3R1YWxIaW50ID0gaGludCB8fCAodG9TdHIuY2FsbChPKSA9PT0gJ1tvYmplY3QgRGF0ZV0nID8gU3RyaW5nIDogTnVtYmVyKTtcblxuXHRcdGlmIChhY3R1YWxIaW50ID09PSBTdHJpbmcgfHwgYWN0dWFsSGludCA9PT0gTnVtYmVyKSB7XG5cdFx0XHR2YXIgbWV0aG9kcyA9IGFjdHVhbEhpbnQgPT09IFN0cmluZyA/IFsndG9TdHJpbmcnLCAndmFsdWVPZiddIDogWyd2YWx1ZU9mJywgJ3RvU3RyaW5nJ107XG5cdFx0XHR2YXIgdmFsdWUsIGk7XG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgbWV0aG9kcy5sZW5ndGg7ICsraSkge1xuXHRcdFx0XHRpZiAoaXNDYWxsYWJsZShPW21ldGhvZHNbaV1dKSkge1xuXHRcdFx0XHRcdHZhbHVlID0gT1ttZXRob2RzW2ldXSgpO1xuXHRcdFx0XHRcdGlmIChpc1ByaW1pdGl2ZSh2YWx1ZSkpIHtcblx0XHRcdFx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ05vIGRlZmF1bHQgdmFsdWUnKTtcblx0XHR9XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignaW52YWxpZCBbW0RlZmF1bHRWYWx1ZV1dIGhpbnQgc3VwcGxpZWQnKTtcblx0fVxufTtcblxuLy8gaHR0cHM6Ly9lczUuZ2l0aHViLmlvLyN4OVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBUb1ByaW1pdGl2ZShpbnB1dCwgUHJlZmVycmVkVHlwZSkge1xuXHRpZiAoaXNQcmltaXRpdmUoaW5wdXQpKSB7XG5cdFx0cmV0dXJuIGlucHV0O1xuXHR9XG5cdHJldHVybiBFUzVpbnRlcm5hbFNsb3RzWydbW0RlZmF1bHRWYWx1ZV1dJ10oaW5wdXQsIFByZWZlcnJlZFR5cGUpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy10by1wcmltaXRpdmUvZXM1LmpzXG4vLyBtb2R1bGUgaWQgPSA1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBoYXMgPSByZXF1aXJlKCdoYXMnKTtcbnZhciByZWdleEV4ZWMgPSBSZWdFeHAucHJvdG90eXBlLmV4ZWM7XG52YXIgZ09QRCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbnZhciB0cnlSZWdleEV4ZWNDYWxsID0gZnVuY3Rpb24gdHJ5UmVnZXhFeGVjKHZhbHVlKSB7XG5cdHRyeSB7XG5cdFx0dmFyIGxhc3RJbmRleCA9IHZhbHVlLmxhc3RJbmRleDtcblx0XHR2YWx1ZS5sYXN0SW5kZXggPSAwO1xuXG5cdFx0cmVnZXhFeGVjLmNhbGwodmFsdWUpO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9IGZpbmFsbHkge1xuXHRcdHZhbHVlLmxhc3RJbmRleCA9IGxhc3RJbmRleDtcblx0fVxufTtcbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgcmVnZXhDbGFzcyA9ICdbb2JqZWN0IFJlZ0V4cF0nO1xudmFyIGhhc1RvU3RyaW5nVGFnID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgU3ltYm9sLnRvU3RyaW5nVGFnID09PSAnc3ltYm9sJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc1JlZ2V4KHZhbHVlKSB7XG5cdGlmICghdmFsdWUgfHwgdHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0Jykge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXHRpZiAoIWhhc1RvU3RyaW5nVGFnKSB7XG5cdFx0cmV0dXJuIHRvU3RyLmNhbGwodmFsdWUpID09PSByZWdleENsYXNzO1xuXHR9XG5cblx0dmFyIGRlc2NyaXB0b3IgPSBnT1BEKHZhbHVlLCAnbGFzdEluZGV4Jyk7XG5cdHZhciBoYXNMYXN0SW5kZXhEYXRhUHJvcGVydHkgPSBkZXNjcmlwdG9yICYmIGhhcyhkZXNjcmlwdG9yLCAndmFsdWUnKTtcblx0aWYgKCFoYXNMYXN0SW5kZXhEYXRhUHJvcGVydHkpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRyZXR1cm4gdHJ5UmVnZXhFeGVjQ2FsbCh2YWx1ZSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2lzLXJlZ2V4L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmluZCA9IHJlcXVpcmUoJ2Z1bmN0aW9uLWJpbmQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBiaW5kLmNhbGwoRnVuY3Rpb24uY2FsbCwgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaGFzL3NyYy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgRVMgPSByZXF1aXJlKCdlcy1hYnN0cmFjdC9lczYnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBmaW5kKHByZWRpY2F0ZSkge1xuXHR2YXIgbGlzdCA9IEVTLlRvT2JqZWN0KHRoaXMpO1xuXHR2YXIgbGVuZ3RoID0gRVMuVG9JbnRlZ2VyKEVTLlRvTGVuZ3RoKGxpc3QubGVuZ3RoKSk7XG5cdGlmICghRVMuSXNDYWxsYWJsZShwcmVkaWNhdGUpKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignQXJyYXkjZmluZDogcHJlZGljYXRlIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXHR9XG5cdGlmIChsZW5ndGggPT09IDApIHtcblx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXHR9XG5cdHZhciB0aGlzQXJnID0gYXJndW1lbnRzWzFdO1xuXHRmb3IgKHZhciBpID0gMCwgdmFsdWU7IGkgPCBsZW5ndGg7IGkrKykge1xuXHRcdHZhbHVlID0gbGlzdFtpXTtcblx0XHRpZiAoRVMuQ2FsbChwcmVkaWNhdGUsIHRoaXNBcmcsIFt2YWx1ZSwgaSwgbGlzdF0pKSB7XG5cdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0fVxuXHR9XG5cdHJldHVybiB1bmRlZmluZWQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2FycmF5LnByb3RvdHlwZS5maW5kL2ltcGxlbWVudGF0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSA2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZ2V0UG9seWZpbGwoKSB7XG5cdC8vIERldGVjdCBpZiBhbiBpbXBsZW1lbnRhdGlvbiBleGlzdHNcblx0Ly8gRGV0ZWN0IGVhcmx5IGltcGxlbWVudGF0aW9ucyB3aGljaCBza2lwcGVkIGhvbGVzIGluIHNwYXJzZSBhcnJheXNcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNwYXJzZS1hcnJheXNcblx0dmFyIGltcGxlbWVudGVkID0gQXJyYXkucHJvdG90eXBlLmZpbmQgJiYgWywgMV0uZmluZChmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0pICE9PSAxO1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBnbG9iYWwtcmVxdWlyZVxuXHRyZXR1cm4gaW1wbGVtZW50ZWQgPyBBcnJheS5wcm90b3R5cGUuZmluZCA6IHJlcXVpcmUoJy4vaW1wbGVtZW50YXRpb24nKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYXJyYXkucHJvdG90eXBlLmZpbmQvcG9seWZpbGwuanNcbi8vIG1vZHVsZSBpZCA9IDYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIGRlZmluZSA9IHJlcXVpcmUoJ2RlZmluZS1wcm9wZXJ0aWVzJyk7XG52YXIgZ2V0UG9seWZpbGwgPSByZXF1aXJlKCcuL3BvbHlmaWxsJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2hpbUFycmF5UHJvdG90eXBlRmluZCgpIHtcblx0dmFyIHBvbHlmaWxsID0gZ2V0UG9seWZpbGwoKTtcblxuXHRkZWZpbmUoQXJyYXkucHJvdG90eXBlLCB7IGZpbmQ6IHBvbHlmaWxsIH0sIHtcblx0XHRmaW5kOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gQXJyYXkucHJvdG90eXBlLmZpbmQgIT09IHBvbHlmaWxsO1xuXHRcdH1cblx0fSk7XG5cblx0cmV0dXJuIHBvbHlmaWxsO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9hcnJheS5wcm90b3R5cGUuZmluZC9zaGltLmpzXG4vLyBtb2R1bGUgaWQgPSA2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi1hcnJvd3MtYWx0XFxcIj48dGl0bGU+YXJyb3dzLWFsdDwvdGl0bGU+PHBhdGggZD1cXFwiTTE0MTEgNTQxbC0zNTUgMzU1IDM1NSAzNTUgMTQ0LTE0NHEyOS0zMSA3MC0xNCAzOSAxNyAzOSA1OXY0NDhxMCAyNi0xOSA0NXQtNDUgMTloLTQ0OHEtNDIgMC01OS00MC0xNy0zOSAxNC02OWwxNDQtMTQ0LTM1NS0zNTUtMzU1IDM1NSAxNDQgMTQ0cTMxIDMwIDE0IDY5LTE3IDQwLTU5IDQwaC00NDhxLTI2IDAtNDUtMTl0LTE5LTQ1di00NDhxMC00MiA0MC01OSAzOS0xNyA2OSAxNGwxNDQgMTQ0IDM1NS0zNTUtMzU1LTM1NS0xNDQgMTQ0cS0xOSAxOS00NSAxOS0xMiAwLTI0LTUtNDAtMTctNDAtNTl2LTQ0OHEwLTI2IDE5LTQ1dDQ1LTE5aDQ0OHE0MiAwIDU5IDQwIDE3IDM5LTE0IDY5bC0xNDQgMTQ0IDM1NSAzNTUgMzU1LTM1NS0xNDQtMTQ0cS0zMS0zMC0xNC02OSAxNy00MCA1OS00MGg0NDhxMjYgMCA0NSAxOXQxOSA0NXY0NDhxMCA0Mi0zOSA1OS0xMyA1LTI1IDUtMjYgMC00NS0xOXpcXFwiLz48L3N5bWJvbD48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDE3OTIgMTc5MlxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tYmFja3dhcmRcXFwiPjx0aXRsZT5iYWNrd2FyZDwvdGl0bGU+PHBhdGggZD1cXFwiTTE2ODMgMTQxcTE5LTE5IDMyLTEzdDEzIDMydjE0NzJxMCAyNi0xMyAzMnQtMzItMTNsLTcxMC03MTBxLTgtOS0xMy0xOXY3MTBxMCAyNi0xMyAzMnQtMzItMTNsLTcxMC03MTBxLTE5LTE5LTE5LTQ1dDE5LTQ1bDcxMC03MTBxMTktMTkgMzItMTN0MTMgMzJ2NzEwcTUtMTEgMTMtMTl6XFxcIi8+PC9zeW1ib2w+PHN5bWJvbCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNzkyIDE3OTJcXFwiIGlkPVxcXCJsZXBsYXllci1pY29uLWJ1bGxzZXllXFxcIj48dGl0bGU+YnVsbHNleWU8L3RpdGxlPjxwYXRoIGQ9XFxcIk0xMTUyIDg5NnEwIDEwNi03NSAxODF0LTE4MSA3NS0xODEtNzUtNzUtMTgxIDc1LTE4MSAxODEtNzUgMTgxIDc1IDc1IDE4MXptMTI4IDBxMC0xNTktMTEyLjUtMjcxLjV0LTI3MS41LTExMi41LTI3MS41IDExMi41LTExMi41IDI3MS41IDExMi41IDI3MS41IDI3MS41IDExMi41IDI3MS41LTExMi41IDExMi41LTI3MS41em0xMjggMHEwIDIxMi0xNTAgMzYydC0zNjIgMTUwLTM2Mi0xNTAtMTUwLTM2MiAxNTAtMzYyIDM2Mi0xNTAgMzYyIDE1MCAxNTAgMzYyem0xMjggMHEwLTEzMC01MS0yNDguNXQtMTM2LjUtMjA0LTIwNC0xMzYuNS0yNDguNS01MS0yNDguNSA1MS0yMDQgMTM2LjUtMTM2LjUgMjA0LTUxIDI0OC41IDUxIDI0OC41IDEzNi41IDIwNCAyMDQgMTM2LjUgMjQ4LjUgNTEgMjQ4LjUtNTEgMjA0LTEzNi41IDEzNi41LTIwNCA1MS0yNDguNXptMTI4IDBxMCAyMDktMTAzIDM4NS41dC0yNzkuNSAyNzkuNS0zODUuNSAxMDMtMzg1LjUtMTAzLTI3OS41LTI3OS41LTEwMy0zODUuNSAxMDMtMzg1LjUgMjc5LjUtMjc5LjUgMzg1LjUtMTAzIDM4NS41IDEwMyAyNzkuNSAyNzkuNSAxMDMgMzg1LjV6XFxcIi8+PC9zeW1ib2w+PHN5bWJvbCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIHZpZXdCb3g9XFxcIjAgMCA0MDAgMzgwXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi1jYXRcXFwiPjx0aXRsZT5jYXQ8L3RpdGxlPiA8cGF0aCBkPVxcXCJNIDE1MS4zNDkwNCwzMDcuMjA0NTUgTCAyNjQuMzQ5MDQsMzA3LjIwNDU1IEMgMjY0LjM0OTA0LDI5MS4xNDA5NiAyNjMuMjAyMSwyODcuOTU0NTUgMjM2LjU5OTA0LDI4Ny45NTQ1NSBDIDI0MC44NDkwNCwyNzUuMjA0NTUgMjU4LjEyNDI0LDI0NC4zNTgwOCAyNjcuNzI0MDQsMjQ0LjM1ODA4IEMgMjc2LjIxNzA3LDI0NC4zNTgwOCAyODYuMzQ5MDQsMjQ0LjgyNTkyIDI4Ni4zNDkwNCwyNjQuMjA0NTUgQyAyODYuMzQ5MDQsMjg2LjIwNDU1IDMyMy4zNzE3MSwzMjEuNjc1NDcgMzMyLjM0OTA0LDMwNy4yMDQ1NSBDIDM0NS43Mjc2OSwyODUuNjM4OTcgMzA5LjM0OTA0LDI5Mi4yMTUxNCAzMDkuMzQ5MDQsMjQwLjIwNDU1IEMgMzA5LjM0OTA0LDE2OS4wNTEzNSAzNTAuODc0MTcsMTc5LjE4MDcxIDM1MC44NzQxNywxMzkuMjA0NTUgQyAzNTAuODc0MTcsMTE5LjIwNDU1IDM0NS4zNDkwNCwxMTYuNTAzNzQgMzQ1LjM0OTA0LDEwMi4yMDQ1NSBDIDM0NS4zNDkwNCw4My4zMDY5NSAzNjEuOTk3MTcsODQuNDAzNTc3IDM1OC43NTgwNSw2OC43MzQ4NzkgQyAzNTYuNTIwNjEsNTcuOTExNjU2IDM1NC43Njk2Miw0OS4yMzE5OSAzNTMuNDY1MTYsMzYuMTQzODg5IEMgMzUyLjUzOTU5LDI2Ljg1NzMwNSAzNTIuMjQ0NTIsMTYuOTU5Mzk4IDM0Mi41OTg1NSwxNy4zNTczODIgQyAzMzEuMjY1MDUsMTcuODI0OTkyIDMyNi45NjU0OSwzNy43NzQxOSAzMDkuMzQ5MDQsMzkuMjA0NTQ5IEMgMjkxLjc2ODUxLDQwLjYzMTk5MSAyNzYuNzc4MzQsMjQuMjM4MDI4IDI2OS45NzQwNCwyNi41Nzk1NDkgQyAyNjMuMjI3MDksMjguOTAxMzM0IDI2NS4zNDkwNCw0Ny4yMDQ1NDkgMjY5LjM0OTA0LDYwLjIwNDU0OSBDIDI3NS42MzU4OCw4MC42MzY3NzEgMjg5LjM0OTA0LDEwNy4yMDQ1NSAyNjQuMzQ5MDQsMTExLjIwNDU1IEMgMjM5LjM0OTA0LDExNS4yMDQ1NSAxOTYuMzQ5MDQsMTE5LjIwNDU1IDE2NS4zNDkwNCwxNjAuMjA0NTUgQyAxMzQuMzQ5MDQsMjAxLjIwNDU1IDEzNS40OTM0MiwyNDkuMzIxMiAxMjMuMzQ5MDQsMjY0LjIwNDU1IEMgODIuNTkwNjk2LDMxNC4xNTUyOSA0MC44MjM5MTksMjkzLjY0NjI1IDQwLjgyMzkxOSwzMzUuMjA0NTUgQyA0MC44MjM5MTksMzUzLjgxMDE5IDcyLjM0OTA0NSwzNjcuMjA0NTUgNzcuMzQ5MDQ1LDM2MS4yMDQ1NSBDIDgyLjM0OTA0NSwzNTUuMjA0NTUgMzQuODYzNzY0LDMzNy4zMjU4NyA4Ny45OTU0OTIsMzE2LjIwNDU1IEMgMTMzLjM4NzExLDI5OC4xNjAxNCAxMzcuNDM5MTQsMjk0LjQ3NjYzIDE1MS4zNDkwNCwzMDcuMjA0NTUgeiBcXFwiIHN0eWxlPVxcXCJmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MXB4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjFcXFwiLz4gPC9zeW1ib2w+PHN5bWJvbCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNzkyIDE3OTJcXFwiIGlkPVxcXCJsZXBsYXllci1pY29uLWNvbW1lbnRpbmctb1xcXCI+PHRpdGxlPmNvbW1lbnRpbmctbzwvdGl0bGU+PHBhdGggZD1cXFwiTTY0MCA4OTZxMCA1My0zNy41IDkwLjV0LTkwLjUgMzcuNS05MC41LTM3LjUtMzcuNS05MC41IDM3LjUtOTAuNSA5MC41LTM3LjUgOTAuNSAzNy41IDM3LjUgOTAuNXptMzg0IDBxMCA1My0zNy41IDkwLjV0LTkwLjUgMzcuNS05MC41LTM3LjUtMzcuNS05MC41IDM3LjUtOTAuNSA5MC41LTM3LjUgOTAuNSAzNy41IDM3LjUgOTAuNXptMzg0IDBxMCA1My0zNy41IDkwLjV0LTkwLjUgMzcuNS05MC41LTM3LjUtMzcuNS05MC41IDM3LjUtOTAuNSA5MC41LTM3LjUgOTAuNSAzNy41IDM3LjUgOTAuNXptLTUxMi01MTJxLTIwNCAwLTM4MS41IDY5LjV0LTI4MiAxODcuNS0xMDQuNSAyNTVxMCAxMTIgNzEuNSAyMTMuNXQyMDEuNSAxNzUuNWw4NyA1MC0yNyA5NnEtMjQgOTEtNzAgMTcyIDE1Mi02MyAyNzUtMTcxbDQzLTM4IDU3IDZxNjkgOCAxMzAgOCAyMDQgMCAzODEuNS02OS41dDI4Mi0xODcuNSAxMDQuNS0yNTUtMTA0LjUtMjU1LTI4Mi0xODcuNS0zODEuNS02OS41em04OTYgNTEycTAgMTc0LTEyMCAzMjEuNXQtMzI2IDIzMy00NTAgODUuNXEtNzAgMC0xNDUtOC0xOTggMTc1LTQ2MCAyNDItNDkgMTQtMTE0IDIyaC01cS0xNSAwLTI3LTEwLjV0LTE2LTI3LjV2LTFxLTMtNC0uNS0xMnQyLTEwIDQuNS05LjVsNi05IDctOC41IDgtOXE3LTggMzEtMzQuNXQzNC41LTM4IDMxLTM5LjUgMzIuNS01MSAyNy01OSAyNi03NnEtMTU3LTg5LTI0Ny41LTIyMHQtOTAuNS0yODFxMC0xMzAgNzEtMjQ4LjV0MTkxLTIwNC41IDI4Ni0xMzYuNSAzNDgtNTAuNSAzNDggNTAuNSAyODYgMTM2LjUgMTkxIDIwNC41IDcxIDI0OC41elxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi1kb3dubG9hZFxcXCI+PHRpdGxlPmRvd25sb2FkPC90aXRsZT48cGF0aCBkPVxcXCJNMTM0NCAxMzQ0cTAtMjYtMTktNDV0LTQ1LTE5LTQ1IDE5LTE5IDQ1IDE5IDQ1IDQ1IDE5IDQ1LTE5IDE5LTQ1em0yNTYgMHEwLTI2LTE5LTQ1dC00NS0xOS00NSAxOS0xOSA0NSAxOSA0NSA0NSAxOSA0NS0xOSAxOS00NXptMTI4LTIyNHYzMjBxMCA0MC0yOCA2OHQtNjggMjhoLTE0NzJxLTQwIDAtNjgtMjh0LTI4LTY4di0zMjBxMC00MCAyOC02OHQ2OC0yOGg0NjVsMTM1IDEzNnE1OCA1NiAxMzYgNTZ0MTM2LTU2bDEzNi0xMzZoNDY0cTQwIDAgNjggMjh0MjggNjh6bS0zMjUtNTY5cTE3IDQxLTE0IDcwbC00NDggNDQ4cS0xOCAxOS00NSAxOXQtNDUtMTlsLTQ0OC00NDhxLTMxLTI5LTE0LTcwIDE3LTM5IDU5LTM5aDI1NnYtNDQ4cTAtMjYgMTktNDV0NDUtMTloMjU2cTI2IDAgNDUgMTl0MTkgNDV2NDQ4aDI1NnE0MiAwIDU5IDM5elxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi1lZGl0XFxcIj48dGl0bGU+ZWRpdDwvdGl0bGU+PHBhdGggZD1cXFwiTTg4OCAxMTg0bDExNi0xMTYtMTUyLTE1Mi0xMTYgMTE2djU2aDk2djk2aDU2em00NDAtNzIwcS0xNi0xNi0zMyAxbC0zNTAgMzUwcS0xNyAxNy0xIDMzdDMzLTFsMzUwLTM1MHExNy0xNyAxLTMzem04MCA1OTR2MTkwcTAgMTE5LTg0LjUgMjAzLjV0LTIwMy41IDg0LjVoLTgzMnEtMTE5IDAtMjAzLjUtODQuNXQtODQuNS0yMDMuNXYtODMycTAtMTE5IDg0LjUtMjAzLjV0MjAzLjUtODQuNWg4MzJxNjMgMCAxMTcgMjUgMTUgNyAxOCAyMyAzIDE3LTkgMjlsLTQ5IDQ5cS0xNCAxNC0zMiA4LTIzLTYtNDUtNmgtODMycS02NiAwLTExMyA0N3QtNDcgMTEzdjgzMnEwIDY2IDQ3IDExM3QxMTMgNDdoODMycTY2IDAgMTEzLTQ3dDQ3LTExM3YtMTI2cTAtMTMgOS0yMmw2NC02NHExNS0xNSAzNS03dDIwIDI5em0tOTYtNzM4bDI4OCAyODgtNjcyIDY3MmgtMjg4di0yODh6bTQ0NCAxMzJsLTkyIDkyLTI4OC0yODggOTItOTJxMjgtMjggNjgtMjh0NjggMjhsMTUyIDE1MnEyOCAyOCAyOCA2OHQtMjggNjh6XFxcIi8+PC9zeW1ib2w+PHN5bWJvbCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNzkyIDE3OTJcXFwiIGlkPVxcXCJsZXBsYXllci1pY29uLWZvcndhcmRcXFwiPjx0aXRsZT5mb3J3YXJkPC90aXRsZT48cGF0aCBkPVxcXCJNMTA5IDE2NTFxLTE5IDE5LTMyIDEzdC0xMy0zMnYtMTQ3MnEwLTI2IDEzLTMydDMyIDEzbDcxMCA3MTBxOCA4IDEzIDE5di03MTBxMC0yNiAxMy0zMnQzMiAxM2w3MTAgNzEwcTE5IDE5IDE5IDQ1dC0xOSA0NWwtNzEwIDcxMHEtMTkgMTktMzIgMTN0LTEzLTMydi03MTBxLTUgMTAtMTMgMTl6XFxcIi8+PC9zeW1ib2w+PHN5bWJvbCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNzkyIDE3OTJcXFwiIGlkPVxcXCJsZXBsYXllci1pY29uLWluZm9cXFwiPjx0aXRsZT5pbmZvPC90aXRsZT48cGF0aCBkPVxcXCJNMTIxNiAxMzQ0djEyOHEwIDI2LTE5IDQ1dC00NSAxOWgtNTEycS0yNiAwLTQ1LTE5dC0xOS00NXYtMTI4cTAtMjYgMTktNDV0NDUtMTloNjR2LTM4NGgtNjRxLTI2IDAtNDUtMTl0LTE5LTQ1di0xMjhxMC0yNiAxOS00NXQ0NS0xOWgzODRxMjYgMCA0NSAxOXQxOSA0NXY1NzZoNjRxMjYgMCA0NSAxOXQxOSA0NXptLTEyOC0xMTUydjE5MnEwIDI2LTE5IDQ1dC00NSAxOWgtMjU2cS0yNiAwLTQ1LTE5dC0xOS00NXYtMTkycTAtMjYgMTktNDV0NDUtMTloMjU2cTI2IDAgNDUgMTl0MTkgNDV6XFxcIi8+PC9zeW1ib2w+PHN5bWJvbCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNzkyIDE3OTJcXFwiIGlkPVxcXCJsZXBsYXllci1pY29uLWxpc3QtdWxcXFwiPjx0aXRsZT5saXN0LXVsPC90aXRsZT48cGF0aCBkPVxcXCJNMzg0IDE0MDhxMCA4MC01NiAxMzZ0LTEzNiA1Ni0xMzYtNTYtNTYtMTM2IDU2LTEzNiAxMzYtNTYgMTM2IDU2IDU2IDEzNnptMC01MTJxMCA4MC01NiAxMzZ0LTEzNiA1Ni0xMzYtNTYtNTYtMTM2IDU2LTEzNiAxMzYtNTYgMTM2IDU2IDU2IDEzNnptMTQwOCA0MTZ2MTkycTAgMTMtOS41IDIyLjV0LTIyLjUgOS41aC0xMjE2cS0xMyAwLTIyLjUtOS41dC05LjUtMjIuNXYtMTkycTAtMTMgOS41LTIyLjV0MjIuNS05LjVoMTIxNnExMyAwIDIyLjUgOS41dDkuNSAyMi41em0tMTQwOC05MjhxMCA4MC01NiAxMzZ0LTEzNiA1Ni0xMzYtNTYtNTYtMTM2IDU2LTEzNiAxMzYtNTYgMTM2IDU2IDU2IDEzNnptMTQwOCA0MTZ2MTkycTAgMTMtOS41IDIyLjV0LTIyLjUgOS41aC0xMjE2cS0xMyAwLTIyLjUtOS41dC05LjUtMjIuNXYtMTkycTAtMTMgOS41LTIyLjV0MjIuNS05LjVoMTIxNnExMyAwIDIyLjUgOS41dDkuNSAyMi41em0wLTUxMnYxOTJxMCAxMy05LjUgMjIuNXQtMjIuNSA5LjVoLTEyMTZxLTEzIDAtMjIuNS05LjV0LTkuNS0yMi41di0xOTJxMC0xMyA5LjUtMjIuNXQyMi41LTkuNWgxMjE2cTEzIDAgMjIuNSA5LjV0OS41IDIyLjV6XFxcIi8+PC9zeW1ib2w+PHN5bWJvbCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNzkyIDE3OTJcXFwiIGlkPVxcXCJsZXBsYXllci1pY29uLW1hZ2ljXFxcIj48dGl0bGU+bWFnaWM8L3RpdGxlPjxwYXRoIGQ9XFxcIk0xMjU0IDU4MWwyOTMtMjkzLTEwNy0xMDctMjkzIDI5M3ptNDQ3LTI5M3EwIDI3LTE4IDQ1bC0xMjg2IDEyODZxLTE4IDE4LTQ1IDE4dC00NS0xOGwtMTk4LTE5OHEtMTgtMTgtMTgtNDV0MTgtNDVsMTI4Ni0xMjg2cTE4LTE4IDQ1LTE4dDQ1IDE4bDE5OCAxOThxMTggMTggMTggNDV6bS0xMzUxLTE5MGw5OCAzMC05OCAzMC0zMCA5OC0zMC05OC05OC0zMCA5OC0zMCAzMC05OHptMzUwIDE2MmwxOTYgNjAtMTk2IDYwLTYwIDE5Ni02MC0xOTYtMTk2LTYwIDE5Ni02MCA2MC0xOTZ6bTkzMCA0NzhsOTggMzAtOTggMzAtMzAgOTgtMzAtOTgtOTgtMzAgOTgtMzAgMzAtOTh6bS02NDAtNjQwbDk4IDMwLTk4IDMwLTMwIDk4LTMwLTk4LTk4LTMwIDk4LTMwIDMwLTk4elxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi1wYXVzZVxcXCI+PHRpdGxlPnBhdXNlPC90aXRsZT48cGF0aCBkPVxcXCJNMTY2NCAxOTJ2MTQwOHEwIDI2LTE5IDQ1dC00NSAxOWgtNTEycS0yNiAwLTQ1LTE5dC0xOS00NXYtMTQwOHEwLTI2IDE5LTQ1dDQ1LTE5aDUxMnEyNiAwIDQ1IDE5dDE5IDQ1em0tODk2IDB2MTQwOHEwIDI2LTE5IDQ1dC00NSAxOWgtNTEycS0yNiAwLTQ1LTE5dC0xOS00NXYtMTQwOHEwLTI2IDE5LTQ1dDQ1LTE5aDUxMnEyNiAwIDQ1IDE5dDE5IDQ1elxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi1wbGFuZVxcXCI+PHRpdGxlPnBsYW5lPC90aXRsZT48cGF0aCBkPVxcXCJNMTU2OCAxNjBxNDQgNTIgMTIgMTQ4dC0xMDggMTcybC0xNjEgMTYxIDE2MCA2OTZxNSAxOS0xMiAzM2wtMTI4IDk2cS03IDYtMTkgNi00IDAtNy0xLTE1LTMtMjEtMTZsLTI3OS01MDgtMjU5IDI1OSA1MyAxOTRxNSAxNy04IDMxbC05NiA5NnEtOSA5LTIzIDloLTJxLTE1LTItMjQtMTNsLTE4OS0yNTItMjUyLTE4OXEtMTEtNy0xMy0yMy0xLTEzIDktMjVsOTYtOTdxOS05IDIzLTkgNiAwIDggMWwxOTQgNTMgMjU5LTI1OS01MDgtMjc5cS0xNC04LTE3LTI0LTItMTYgOS0yN2wxMjgtMTI4cTE0LTEzIDMwLThsNjY1IDE1OSAxNjAtMTYwcTc2LTc2IDE3Mi0xMDh0MTQ4IDEyelxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi1wbGF5XFxcIj48dGl0bGU+cGxheTwvdGl0bGU+PHBhdGggZD1cXFwiTTE1NzYgOTI3bC0xMzI4IDczOHEtMjMgMTMtMzkuNSAzdC0xNi41LTM2di0xNDcycTAtMjYgMTYuNS0zNnQzOS41IDNsMTMyOCA3MzhxMjMgMTMgMjMgMzF0LTIzIDMxelxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi1wbHVzXFxcIj48dGl0bGU+cGx1czwvdGl0bGU+PHBhdGggZD1cXFwiTTE2MDAgNzM2djE5MnEwIDQwLTI4IDY4dC02OCAyOGgtNDE2djQxNnEwIDQwLTI4IDY4dC02OCAyOGgtMTkycS00MCAwLTY4LTI4dC0yOC02OHYtNDE2aC00MTZxLTQwIDAtNjgtMjh0LTI4LTY4di0xOTJxMC00MCAyOC02OHQ2OC0yOGg0MTZ2LTQxNnEwLTQwIDI4LTY4dDY4LTI4aDE5MnE0MCAwIDY4IDI4dDI4IDY4djQxNmg0MTZxNDAgMCA2OCAyOHQyOCA2OHpcXFwiLz48L3N5bWJvbD48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDE3OTIgMTc5MlxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tcmVkb1xcXCI+PHRpdGxlPnJlZG88L3RpdGxlPjxwYXRoIGQ9XFxcIk0xNjY0IDI1NnY0NDhxMCAyNi0xOSA0NXQtNDUgMTloLTQ0OHEtNDIgMC01OS00MC0xNy0zOSAxNC02OWwxMzgtMTM4cS0xNDgtMTM3LTM0OS0xMzctMTA0IDAtMTk4LjUgNDAuNXQtMTYzLjUgMTA5LjUtMTA5LjUgMTYzLjUtNDAuNSAxOTguNSA0MC41IDE5OC41IDEwOS41IDE2My41IDE2My41IDEwOS41IDE5OC41IDQwLjVxMTE5IDAgMjI1LTUydDE3OS0xNDdxNy0xMCAyMy0xMiAxNCAwIDI1IDlsMTM3IDEzOHE5IDggOS41IDIwLjV0LTcuNSAyMi41cS0xMDkgMTMyLTI2NCAyMDQuNXQtMzI3IDcyLjVxLTE1NiAwLTI5OC02MXQtMjQ1LTE2NC0xNjQtMjQ1LTYxLTI5OCA2MS0yOTggMTY0LTI0NSAyNDUtMTY0IDI5OC02MXExNDcgMCAyODQuNSA1NS41dDI0NC41IDE1Ni41bDEzMC0xMjlxMjktMzEgNzAtMTQgMzkgMTcgMzkgNTl6XFxcIi8+PC9zeW1ib2w+PHN5bWJvbCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNzkyIDE3OTJcXFwiIGlkPVxcXCJsZXBsYXllci1pY29uLXJlZnJlc2hcXFwiPjx0aXRsZT5yZWZyZXNoPC90aXRsZT48cGF0aCBkPVxcXCJNMTYzOSAxMDU2cTAgNS0xIDctNjQgMjY4LTI2OCA0MzQuNXQtNDc4IDE2Ni41cS0xNDYgMC0yODIuNS01NXQtMjQzLjUtMTU3bC0xMjkgMTI5cS0xOSAxOS00NSAxOXQtNDUtMTktMTktNDV2LTQ0OHEwLTI2IDE5LTQ1dDQ1LTE5aDQ0OHEyNiAwIDQ1IDE5dDE5IDQ1LTE5IDQ1bC0xMzcgMTM3cTcxIDY2IDE2MSAxMDJ0MTg3IDM2cTEzNCAwIDI1MC02NXQxODYtMTc5cTExLTE3IDUzLTExNyA4LTIzIDMwLTIzaDE5MnExMyAwIDIyLjUgOS41dDkuNSAyMi41em0yNS04MDB2NDQ4cTAgMjYtMTkgNDV0LTQ1IDE5aC00NDhxLTI2IDAtNDUtMTl0LTE5LTQ1IDE5LTQ1bDEzOC0xMzhxLTE0OC0xMzctMzQ5LTEzNy0xMzQgMC0yNTAgNjV0LTE4NiAxNzlxLTExIDE3LTUzIDExNy04IDIzLTMwIDIzaC0xOTlxLTEzIDAtMjIuNS05LjV0LTkuNS0yMi41di03cTY1LTI2OCAyNzAtNDM0LjV0NDgwLTE2Ni41cTE0NiAwIDI4NCA1NS41dDI0NSAxNTYuNWwxMzAtMTI5cTE5LTE5IDQ1LTE5dDQ1IDE5IDE5IDQ1elxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi10cmFzaFxcXCI+PHRpdGxlPnRyYXNoPC90aXRsZT48cGF0aCBkPVxcXCJNNzA0IDEzNzZ2LTcwNHEwLTE0LTktMjN0LTIzLTloLTY0cS0xNCAwLTIzIDl0LTkgMjN2NzA0cTAgMTQgOSAyM3QyMyA5aDY0cTE0IDAgMjMtOXQ5LTIzem0yNTYgMHYtNzA0cTAtMTQtOS0yM3QtMjMtOWgtNjRxLTE0IDAtMjMgOXQtOSAyM3Y3MDRxMCAxNCA5IDIzdDIzIDloNjRxMTQgMCAyMy05dDktMjN6bTI1NiAwdi03MDRxMC0xNC05LTIzdC0yMy05aC02NHEtMTQgMC0yMyA5dC05IDIzdjcwNHEwIDE0IDkgMjN0MjMgOWg2NHExNCAwIDIzLTl0OS0yM3ptLTU0NC05OTJoNDQ4bC00OC0xMTdxLTctOS0xNy0xMWgtMzE3cS0xMCAyLTE3IDExem05MjggMzJ2NjRxMCAxNC05IDIzdC0yMyA5aC05NnY5NDhxMCA4My00NyAxNDMuNXQtMTEzIDYwLjVoLTgzMnEtNjYgMC0xMTMtNTguNXQtNDctMTQxLjV2LTk1MmgtOTZxLTE0IDAtMjMtOXQtOS0yM3YtNjRxMC0xNCA5LTIzdDIzLTloMzA5bDcwLTE2N3ExNS0zNyA1NC02M3Q3OS0yNmgzMjBxNDAgMCA3OSAyNnQ1NCA2M2w3MCAxNjdoMzA5cTE0IDAgMjMgOXQ5IDIzelxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi11bmRvXFxcIj48dGl0bGU+dW5kbzwvdGl0bGU+PHBhdGggZD1cXFwiTTE2NjQgODk2cTAgMTU2LTYxIDI5OHQtMTY0IDI0NS0yNDUgMTY0LTI5OCA2MXEtMTcyIDAtMzI3LTcyLjV0LTI2NC0yMDQuNXEtNy0xMC02LjUtMjIuNXQ4LjUtMjAuNWwxMzctMTM4cTEwLTkgMjUtOSAxNiAyIDIzIDEyIDczIDk1IDE3OSAxNDd0MjI1IDUycTEwNCAwIDE5OC41LTQwLjV0MTYzLjUtMTA5LjUgMTA5LjUtMTYzLjUgNDAuNS0xOTguNS00MC41LTE5OC41LTEwOS41LTE2My41LTE2My41LTEwOS41LTE5OC41LTQwLjVxLTk4IDAtMTg4IDM1LjV0LTE2MCAxMDEuNWwxMzcgMTM4cTMxIDMwIDE0IDY5LTE3IDQwLTU5IDQwaC00NDhxLTI2IDAtNDUtMTl0LTE5LTQ1di00NDhxMC00MiA0MC01OSAzOS0xNyA2OSAxNGwxMzAgMTI5cTEwNy0xMDEgMjQ0LjUtMTU2LjV0Mjg0LjUtNTUuNXExNTYgMCAyOTggNjF0MjQ1IDE2NCAxNjQgMjQ1IDYxIDI5OHpcXFwiLz48L3N5bWJvbD48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDE3OTIgMTc5MlxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tdm9sdW1lLWRvd25cXFwiPjx0aXRsZT52b2x1bWUtZG93bjwvdGl0bGU+PHBhdGggZD1cXFwiTTEwODggMzUydjEwODhxMCAyNi0xOSA0NXQtNDUgMTktNDUtMTlsLTMzMy0zMzNoLTI2MnEtMjYgMC00NS0xOXQtMTktNDV2LTM4NHEwLTI2IDE5LTQ1dDQ1LTE5aDI2MmwzMzMtMzMzcTE5LTE5IDQ1LTE5dDQ1IDE5IDE5IDQ1em0zODQgNTQ0cTAgNzYtNDIuNSAxNDEuNXQtMTEyLjUgOTMuNXEtMTAgNS0yNSA1LTI2IDAtNDUtMTguNXQtMTktNDUuNXEwLTIxIDEyLTM1LjV0MjktMjUgMzQtMjMgMjktMzUuNSAxMi01Ny0xMi01Ny0yOS0zNS41LTM0LTIzLTI5LTI1LTEyLTM1LjVxMC0yNyAxOS00NS41dDQ1LTE4LjVxMTUgMCAyNSA1IDcwIDI3IDExMi41IDkzdDQyLjUgMTQyelxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi12b2x1bWUtb2ZmXFxcIj48dGl0bGU+dm9sdW1lLW9mZjwvdGl0bGU+PHBhdGggZD1cXFwiTTEyODAgMzUydjEwODhxMCAyNi0xOSA0NXQtNDUgMTktNDUtMTlsLTMzMy0zMzNoLTI2MnEtMjYgMC00NS0xOXQtMTktNDV2LTM4NHEwLTI2IDE5LTQ1dDQ1LTE5aDI2MmwzMzMtMzMzcTE5LTE5IDQ1LTE5dDQ1IDE5IDE5IDQ1elxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi12b2x1bWUtdXBcXFwiPjx0aXRsZT52b2x1bWUtdXA8L3RpdGxlPjxwYXRoIGQ9XFxcIk04MzIgMzUydjEwODhxMCAyNi0xOSA0NXQtNDUgMTktNDUtMTlsLTMzMy0zMzNoLTI2MnEtMjYgMC00NS0xOXQtMTktNDV2LTM4NHEwLTI2IDE5LTQ1dDQ1LTE5aDI2MmwzMzMtMzMzcTE5LTE5IDQ1LTE5dDQ1IDE5IDE5IDQ1em0zODQgNTQ0cTAgNzYtNDIuNSAxNDEuNXQtMTEyLjUgOTMuNXEtMTAgNS0yNSA1LTI2IDAtNDUtMTguNXQtMTktNDUuNXEwLTIxIDEyLTM1LjV0MjktMjUgMzQtMjMgMjktMzUuNSAxMi01Ny0xMi01Ny0yOS0zNS41LTM0LTIzLTI5LTI1LTEyLTM1LjVxMC0yNyAxOS00NS41dDQ1LTE4LjVxMTUgMCAyNSA1IDcwIDI3IDExMi41IDkzdDQyLjUgMTQyem0yNTYgMHEwIDE1My04NSAyODIuNXQtMjI1IDE4OC41cS0xMyA1LTI1IDUtMjcgMC00Ni0xOXQtMTktNDVxMC0zOSAzOS01OSA1Ni0yOSA3Ni00NCA3NC01NCAxMTUuNS0xMzUuNXQ0MS41LTE3My41LTQxLjUtMTczLjUtMTE1LjUtMTM1LjVxLTIwLTE1LTc2LTQ0LTM5LTIwLTM5LTU5IDAtMjYgMTktNDV0NDUtMTlxMTMgMCAyNiA1IDE0MCA1OSAyMjUgMTg4LjV0ODUgMjgyLjV6bTI1NiAwcTAgMjMwLTEyNyA0MjIuNXQtMzM4IDI4My41cS0xMyA1LTI2IDUtMjYgMC00NS0xOXQtMTktNDVxMC0zNiAzOS01OSA3LTQgMjIuNS0xMC41dDIyLjUtMTAuNXE0Ni0yNSA4Mi01MSAxMjMtOTEgMTkyLTIyN3Q2OS0yODktNjktMjg5LTE5Mi0yMjdxLTM2LTI2LTgyLTUxLTctNC0yMi41LTEwLjV0LTIyLjUtMTAuNXEtMzktMjMtMzktNTkgMC0yNiAxOS00NXQ0NS0xOXExMyAwIDI2IDUgMjExIDkxIDMzOCAyODMuNXQxMjcgNDIyLjV6XFxcIi8+PC9zeW1ib2w+PC9zdmc+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Rpc3Qvc3ZnL3N2Zy1kZWZzLnN2Z1xuLy8gbW9kdWxlIGlkID0gNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGNvbnN0IHByZXNldCA9IHtcblx0b3B0aW9ucyA6IHtcblx0XHR3aWR0aCA6ICcxMDAlJyxcblx0XHRjb250cm9scyA6IHtcblx0XHRcdGNvbW1vbiA6IFtcblx0XHRcdFx0WydwbGF5JywgJ3ZvbHVtZScsICdkaXZpZGVyJywgJ3RpbWVsaW5lJywgJ2RpdmlkZXInLCAnZnVsbHNjcmVlbiddLFxuXHRcdFx0XHRbJ3JhdGUnLCAnZGl2aWRlcicsICdiYWNrd2FyZCcsICdkaXZpZGVyJywgJ3NvdXJjZScsICdkaXZpZGVyJywgJ2Rvd25sb2FkJ11cblx0XHRcdF0sXG5cdFx0XHRmdWxsc2NyZWVuIDogW1xuXHRcdFx0XHRbJ3BsYXknLCAndm9sdW1lJywgJ2RpdmlkZXInLCAndGltZWxpbmUnLCAnZGl2aWRlcicsICdyYXRlJywgJ2RpdmlkZXInLCAnYmFja3dhcmQnLCAnZGl2aWRlcicsICdzb3VyY2UnLCAnZGl2aWRlcicsICdkb3dubG9hZCcsICdkaXZpZGVyJywgJ2Z1bGxzY3JlZW4nXVxuXHRcdFx0XVxuXHRcdH1cblx0fSxcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9wcmVzZXRzL3Zwcy5qcyIsImNvbnN0IGNvbnRyb2xzID0gWydwbGF5JywgJ3ZvbHVtZScsICdkaXZpZGVyJywgJ3RpbWVsaW5lJywgJ2RpdmlkZXInLCAncmF0ZScsICdkb3dubG9hZCcsICdmdWxsc2NyZWVuJ107XG5cbmV4cG9ydCBjb25zdCBwcmVzZXQgPSB7XG5cdG9wdGlvbnMgOiB7XG5cdFx0Y29udHJvbHMgOiB7XG5cdFx0XHRjb21tb24gOiBbXG5cdFx0XHRcdGNvbnRyb2xzLFxuXHRcdFx0XHRbXVxuXHRcdFx0XSxcblx0XHRcdGZ1bGxzY3JlZW4gOiBbXG5cdFx0XHRcdGNvbnRyb2xzXG5cdFx0XHRdXG5cdFx0fVxuXHR9LFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL3ByZXNldHMvc2ltcGxlLmpzIiwiZXhwb3J0IGNvbnN0IHByZXNldCA9IHtcblx0b3B0aW9ucyA6IHtcblx0XHR3aWR0aCA6ICcxMDAlJyxcblx0XHRjb250cm9scyA6IHtcblx0XHRcdGNvbW1vbiA6IFtcblx0XHRcdFx0WydwbGF5JywgJ3ZvbHVtZScsICd0aW1lbGluZScsICdyYXRlJywgJ3NvdXJjZScsICdkaXZpZGVyJywgJ2Rvd25sb2FkJywgJ2Z1bGxzY3JlZW4nXSxcblx0XHRcdFx0W11cblx0XHRcdF0sXG5cdFx0XHRmdWxsc2NyZWVuIDogW1xuXHRcdFx0XHRbJ3BsYXknLCAndm9sdW1lJywgJ3RpbWVsaW5lJywgJ3JhdGUnLCAnc291cmNlJywgJ2RpdmlkZXInLCAnZG93bmxvYWQnLCAnZnVsbHNjcmVlbiddLFxuXHRcdFx0XVxuXHRcdH1cblx0fSxcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9wcmVzZXRzL3Ntcy5qcyIsImV4cG9ydCBjb25zdCBwcmVzZXQgPSB7XG5cdG9wdGlvbnMgOiB7XG5cdFx0d2lkdGggOiAnMTAwJScsXG5cdFx0Y29udHJvbHMgOiB7XG5cdFx0XHRjb21tb24gOiBbXG5cdFx0XHRcdFsncGxheScsICd2b2x1bWUnLCAndGltZWxpbmUnLCAncmF0ZScsICdzb3VyY2UnLCAnZGl2aWRlcicsICdmdWxsc2NyZWVuJ10sXG5cdFx0XHRcdFtdXG5cdFx0XHRdLFxuXHRcdFx0ZnVsbHNjcmVlbiA6IFtcblx0XHRcdFx0WydwbGF5JywgJ3ZvbHVtZScsICd0aW1lbGluZScsICdyYXRlJywgJ3NvdXJjZScsICdkaXZpZGVyJywgJ2Z1bGxzY3JlZW4nXSxcblx0XHRcdF1cblx0XHR9XG5cdH0sXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvcHJlc2V0cy9jb21wcmVzc2VkLmpzIiwiZXhwb3J0IGNvbnN0IHByZXNldCA9IHtcblx0b3B0aW9ucyA6IHtcblx0XHRlbnRpdHkgOiAnWW91dHViZScsXG5cdFx0Y29udHJvbHMgOiB7XG5cdFx0XHRjb21tb24gOiBbXG5cdFx0XHRcdFsncGxheScsICd2b2x1bWUnLCAndGltZWxpbmUnLCAncmF0ZScsICdiYWNrd2FyZCcsICdzb3VyY2UnLCAnZGl2aWRlcicsICdzZWN0aW9uJywgJ2Z1bGxzY3JlZW4nXSxcblx0XHRcdFx0W11cblx0XHRcdF0sXG5cdFx0XHRmdWxsc2NyZWVuIDogW1xuXHRcdFx0XHRbJ3BsYXknLCAndm9sdW1lJywgJ3RpbWVsaW5lJywgJ3JhdGUnLCAnYmFja3dhcmQnLCAgJ3NvdXJjZScsICdkaXZpZGVyJywgJ3NlY3Rpb24nLCAnZnVsbHNjcmVlbiddLFxuXHRcdFx0XVxuXHRcdH1cblx0fSxcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9wcmVzZXRzL3lvdXR1YmUuanMiXSwic291cmNlUm9vdCI6IiJ9