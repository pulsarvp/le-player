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
/***/ function(module, exports, __webpack_require__) {

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

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = $;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

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

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

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

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

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

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

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

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

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

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

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

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

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

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

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

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

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

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

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

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

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

/***/ },
/* 13 */
/***/ function(module, exports) {

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

/***/ },
/* 14 */
/***/ function(module, exports) {

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

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

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

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

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

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

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

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

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

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

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

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

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

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

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

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

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

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

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

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

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

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

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

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

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

/***/ },
/* 27 */
/***/ function(module, exports) {

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

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

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

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

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

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

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

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

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

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

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

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	
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

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

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

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

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

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

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

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

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

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

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


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

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


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

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


/***/ },
/* 41 */
/***/ function(module, exports) {

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


/***/ },
/* 42 */
/***/ function(module, exports) {

	
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
	


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

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


/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = Number.isNaN || function isNaN(a) {
		return a !== a;
	};


/***/ },
/* 45 */
/***/ function(module, exports) {

	var $isNaN = Number.isNaN || function (a) { return a !== a; };
	
	module.exports = Number.isFinite || function (x) { return typeof x === 'number' && !$isNaN(x) && x !== Infinity && x !== -Infinity; };


/***/ },
/* 46 */
/***/ function(module, exports) {

	var has = Object.prototype.hasOwnProperty;
	module.exports = Object.assign || function assign(target, source) {
		for (var key in source) {
			if (has.call(source, key)) {
				target[key] = source[key];
			}
		}
		return target;
	};


/***/ },
/* 47 */
/***/ function(module, exports) {

	module.exports = function sign(number) {
		return number >= 0 ? 1 : -1;
	};


/***/ },
/* 48 */
/***/ function(module, exports) {

	module.exports = function mod(number, modulo) {
		var remain = number % modulo;
		return Math.floor(remain >= 0 ? remain : remain + modulo);
	};


/***/ },
/* 49 */
/***/ function(module, exports) {

	module.exports = function isPrimitive(value) {
		return value === null || (typeof value !== 'function' && typeof value !== 'object');
	};


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

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


/***/ },
/* 51 */
/***/ function(module, exports) {

	module.exports = function isPrimitive(value) {
		return value === null || (typeof value !== 'function' && typeof value !== 'object');
	};


/***/ },
/* 52 */
/***/ function(module, exports) {

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


/***/ },
/* 53 */
/***/ function(module, exports) {

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


/***/ },
/* 54 */
/***/ function(module, exports) {

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


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var implementation = __webpack_require__(56);
	
	module.exports = Function.prototype.bind || implementation;


/***/ },
/* 56 */
/***/ function(module, exports) {

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


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

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


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

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


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

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


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var bind = __webpack_require__(55);
	
	module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

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


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

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


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

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


/***/ },
/* 64 */
/***/ function(module, exports) {

	module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\"><symbol fill=\"currentColor\" viewBox=\"0 0 1792 1792\" id=\"leplayer-icon-arrows-alt\"><title>arrows-alt</title><path d=\"M1411 541l-355 355 355 355 144-144q29-31 70-14 39 17 39 59v448q0 26-19 45t-45 19h-448q-42 0-59-40-17-39 14-69l144-144-355-355-355 355 144 144q31 30 14 69-17 40-59 40h-448q-26 0-45-19t-19-45v-448q0-42 40-59 39-17 69 14l144 144 355-355-355-355-144 144q-19 19-45 19-12 0-24-5-40-17-40-59v-448q0-26 19-45t45-19h448q42 0 59 40 17 39-14 69l-144 144 355 355 355-355-144-144q-31-30-14-69 17-40 59-40h448q26 0 45 19t19 45v448q0 42-39 59-13 5-25 5-26 0-45-19z\"/></symbol><symbol fill=\"currentColor\" viewBox=\"0 0 1792 1792\" id=\"leplayer-icon-backward\"><title>backward</title><path d=\"M1683 141q19-19 32-13t13 32v1472q0 26-13 32t-32-13l-710-710q-8-9-13-19v710q0 26-13 32t-32-13l-710-710q-19-19-19-45t19-45l710-710q19-19 32-13t13 32v710q5-11 13-19z\"/></symbol><symbol fill=\"currentColor\" viewBox=\"0 0 1792 1792\" id=\"leplayer-icon-bullseye\"><title>bullseye</title><path d=\"M1152 896q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181zm128 0q0-159-112.5-271.5t-271.5-112.5-271.5 112.5-112.5 271.5 112.5 271.5 271.5 112.5 271.5-112.5 112.5-271.5zm128 0q0 212-150 362t-362 150-362-150-150-362 150-362 362-150 362 150 150 362zm128 0q0-130-51-248.5t-136.5-204-204-136.5-248.5-51-248.5 51-204 136.5-136.5 204-51 248.5 51 248.5 136.5 204 204 136.5 248.5 51 248.5-51 204-136.5 136.5-204 51-248.5zm128 0q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z\"/></symbol><symbol fill=\"currentColor\" viewBox=\"0 0 400 380\" id=\"leplayer-icon-cat\"><title>cat</title> <path d=\"M 151.34904,307.20455 L 264.34904,307.20455 C 264.34904,291.14096 263.2021,287.95455 236.59904,287.95455 C 240.84904,275.20455 258.12424,244.35808 267.72404,244.35808 C 276.21707,244.35808 286.34904,244.82592 286.34904,264.20455 C 286.34904,286.20455 323.37171,321.67547 332.34904,307.20455 C 345.72769,285.63897 309.34904,292.21514 309.34904,240.20455 C 309.34904,169.05135 350.87417,179.18071 350.87417,139.20455 C 350.87417,119.20455 345.34904,116.50374 345.34904,102.20455 C 345.34904,83.30695 361.99717,84.403577 358.75805,68.734879 C 356.52061,57.911656 354.76962,49.23199 353.46516,36.143889 C 352.53959,26.857305 352.24452,16.959398 342.59855,17.357382 C 331.26505,17.824992 326.96549,37.77419 309.34904,39.204549 C 291.76851,40.631991 276.77834,24.238028 269.97404,26.579549 C 263.22709,28.901334 265.34904,47.204549 269.34904,60.204549 C 275.63588,80.636771 289.34904,107.20455 264.34904,111.20455 C 239.34904,115.20455 196.34904,119.20455 165.34904,160.20455 C 134.34904,201.20455 135.49342,249.3212 123.34904,264.20455 C 82.590696,314.15529 40.823919,293.64625 40.823919,335.20455 C 40.823919,353.81019 72.349045,367.20455 77.349045,361.20455 C 82.349045,355.20455 34.863764,337.32587 87.995492,316.20455 C 133.38711,298.16014 137.43914,294.47663 151.34904,307.20455 z \" style=\"fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1\"/> </symbol><symbol fill=\"currentColor\" viewBox=\"0 0 1792 1792\" id=\"leplayer-icon-commenting-o\"><title>commenting-o</title><path d=\"M640 896q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm384 0q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm384 0q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-512-512q-204 0-381.5 69.5t-282 187.5-104.5 255q0 112 71.5 213.5t201.5 175.5l87 50-27 96q-24 91-70 172 152-63 275-171l43-38 57 6q69 8 130 8 204 0 381.5-69.5t282-187.5 104.5-255-104.5-255-282-187.5-381.5-69.5zm896 512q0 174-120 321.5t-326 233-450 85.5q-70 0-145-8-198 175-460 242-49 14-114 22h-5q-15 0-27-10.5t-16-27.5v-1q-3-4-.5-12t2-10 4.5-9.5l6-9 7-8.5 8-9q7-8 31-34.5t34.5-38 31-39.5 32.5-51 27-59 26-76q-157-89-247.5-220t-90.5-281q0-130 71-248.5t191-204.5 286-136.5 348-50.5 348 50.5 286 136.5 191 204.5 71 248.5z\"/></symbol><symbol fill=\"currentColor\" viewBox=\"0 0 1792 1792\" id=\"leplayer-icon-download\"><title>download</title><path d=\"M1344 1344q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm256 0q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm128-224v320q0 40-28 68t-68 28h-1472q-40 0-68-28t-28-68v-320q0-40 28-68t68-28h465l135 136q58 56 136 56t136-56l136-136h464q40 0 68 28t28 68zm-325-569q17 41-14 70l-448 448q-18 19-45 19t-45-19l-448-448q-31-29-14-70 17-39 59-39h256v-448q0-26 19-45t45-19h256q26 0 45 19t19 45v448h256q42 0 59 39z\"/></symbol><symbol fill=\"currentColor\" viewBox=\"0 0 1792 1792\" id=\"leplayer-icon-edit\"><title>edit</title><path d=\"M888 1184l116-116-152-152-116 116v56h96v96h56zm440-720q-16-16-33 1l-350 350q-17 17-1 33t33-1l350-350q17-17 1-33zm80 594v190q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h832q63 0 117 25 15 7 18 23 3 17-9 29l-49 49q-14 14-32 8-23-6-45-6h-832q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113v-126q0-13 9-22l64-64q15-15 35-7t20 29zm-96-738l288 288-672 672h-288v-288zm444 132l-92 92-288-288 92-92q28-28 68-28t68 28l152 152q28 28 28 68t-28 68z\"/></symbol><symbol fill=\"currentColor\" viewBox=\"0 0 1792 1792\" id=\"leplayer-icon-forward\"><title>forward</title><path d=\"M109 1651q-19 19-32 13t-13-32v-1472q0-26 13-32t32 13l710 710q8 8 13 19v-710q0-26 13-32t32 13l710 710q19 19 19 45t-19 45l-710 710q-19 19-32 13t-13-32v-710q-5 10-13 19z\"/></symbol><symbol fill=\"currentColor\" viewBox=\"0 0 1792 1792\" id=\"leplayer-icon-info\"><title>info</title><path d=\"M1216 1344v128q0 26-19 45t-45 19h-512q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h64v-384h-64q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h384q26 0 45 19t19 45v576h64q26 0 45 19t19 45zm-128-1152v192q0 26-19 45t-45 19h-256q-26 0-45-19t-19-45v-192q0-26 19-45t45-19h256q26 0 45 19t19 45z\"/></symbol><symbol fill=\"currentColor\" viewBox=\"0 0 1792 1792\" id=\"leplayer-icon-list-ul\"><title>list-ul</title><path d=\"M384 1408q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm0-512q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm1408 416v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5zm-1408-928q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm1408 416v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5zm0-512v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5z\"/></symbol><symbol fill=\"currentColor\" viewBox=\"0 0 1792 1792\" id=\"leplayer-icon-magic\"><title>magic</title><path d=\"M1254 581l293-293-107-107-293 293zm447-293q0 27-18 45l-1286 1286q-18 18-45 18t-45-18l-198-198q-18-18-18-45t18-45l1286-1286q18-18 45-18t45 18l198 198q18 18 18 45zm-1351-190l98 30-98 30-30 98-30-98-98-30 98-30 30-98zm350 162l196 60-196 60-60 196-60-196-196-60 196-60 60-196zm930 478l98 30-98 30-30 98-30-98-98-30 98-30 30-98zm-640-640l98 30-98 30-30 98-30-98-98-30 98-30 30-98z\"/></symbol><symbol fill=\"currentColor\" viewBox=\"0 0 1792 1792\" id=\"leplayer-icon-pause\"><title>pause</title><path d=\"M1664 192v1408q0 26-19 45t-45 19h-512q-26 0-45-19t-19-45v-1408q0-26 19-45t45-19h512q26 0 45 19t19 45zm-896 0v1408q0 26-19 45t-45 19h-512q-26 0-45-19t-19-45v-1408q0-26 19-45t45-19h512q26 0 45 19t19 45z\"/></symbol><symbol fill=\"currentColor\" viewBox=\"0 0 1792 1792\" id=\"leplayer-icon-plane\"><title>plane</title><path d=\"M1568 160q44 52 12 148t-108 172l-161 161 160 696q5 19-12 33l-128 96q-7 6-19 6-4 0-7-1-15-3-21-16l-279-508-259 259 53 194q5 17-8 31l-96 96q-9 9-23 9h-2q-15-2-24-13l-189-252-252-189q-11-7-13-23-1-13 9-25l96-97q9-9 23-9 6 0 8 1l194 53 259-259-508-279q-14-8-17-24-2-16 9-27l128-128q14-13 30-8l665 159 160-160q76-76 172-108t148 12z\"/></symbol><symbol fill=\"currentColor\" viewBox=\"0 0 1792 1792\" id=\"leplayer-icon-play\"><title>play</title><path d=\"M1576 927l-1328 738q-23 13-39.5 3t-16.5-36v-1472q0-26 16.5-36t39.5 3l1328 738q23 13 23 31t-23 31z\"/></symbol><symbol fill=\"currentColor\" viewBox=\"0 0 1792 1792\" id=\"leplayer-icon-plus\"><title>plus</title><path d=\"M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z\"/></symbol><symbol fill=\"currentColor\" viewBox=\"0 0 1792 1792\" id=\"leplayer-icon-redo\"><title>redo</title><path d=\"M1664 256v448q0 26-19 45t-45 19h-448q-42 0-59-40-17-39 14-69l138-138q-148-137-349-137-104 0-198.5 40.5t-163.5 109.5-109.5 163.5-40.5 198.5 40.5 198.5 109.5 163.5 163.5 109.5 198.5 40.5q119 0 225-52t179-147q7-10 23-12 14 0 25 9l137 138q9 8 9.5 20.5t-7.5 22.5q-109 132-264 204.5t-327 72.5q-156 0-298-61t-245-164-164-245-61-298 61-298 164-245 245-164 298-61q147 0 284.5 55.5t244.5 156.5l130-129q29-31 70-14 39 17 39 59z\"/></symbol><symbol fill=\"currentColor\" viewBox=\"0 0 1792 1792\" id=\"leplayer-icon-refresh\"><title>refresh</title><path d=\"M1639 1056q0 5-1 7-64 268-268 434.5t-478 166.5q-146 0-282.5-55t-243.5-157l-129 129q-19 19-45 19t-45-19-19-45v-448q0-26 19-45t45-19h448q26 0 45 19t19 45-19 45l-137 137q71 66 161 102t187 36q134 0 250-65t186-179q11-17 53-117 8-23 30-23h192q13 0 22.5 9.5t9.5 22.5zm25-800v448q0 26-19 45t-45 19h-448q-26 0-45-19t-19-45 19-45l138-138q-148-137-349-137-134 0-250 65t-186 179q-11 17-53 117-8 23-30 23h-199q-13 0-22.5-9.5t-9.5-22.5v-7q65-268 270-434.5t480-166.5q146 0 284 55.5t245 156.5l130-129q19-19 45-19t45 19 19 45z\"/></symbol><symbol fill=\"currentColor\" viewBox=\"0 0 1792 1792\" id=\"leplayer-icon-trash\"><title>trash</title><path d=\"M704 1376v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm-544-992h448l-48-117q-7-9-17-11h-317q-10 2-17 11zm928 32v64q0 14-9 23t-23 9h-96v948q0 83-47 143.5t-113 60.5h-832q-66 0-113-58.5t-47-141.5v-952h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h309l70-167q15-37 54-63t79-26h320q40 0 79 26t54 63l70 167h309q14 0 23 9t9 23z\"/></symbol><symbol fill=\"currentColor\" viewBox=\"0 0 1792 1792\" id=\"leplayer-icon-undo\"><title>undo</title><path d=\"M1664 896q0 156-61 298t-164 245-245 164-298 61q-172 0-327-72.5t-264-204.5q-7-10-6.5-22.5t8.5-20.5l137-138q10-9 25-9 16 2 23 12 73 95 179 147t225 52q104 0 198.5-40.5t163.5-109.5 109.5-163.5 40.5-198.5-40.5-198.5-109.5-163.5-163.5-109.5-198.5-40.5q-98 0-188 35.5t-160 101.5l137 138q31 30 14 69-17 40-59 40h-448q-26 0-45-19t-19-45v-448q0-42 40-59 39-17 69 14l130 129q107-101 244.5-156.5t284.5-55.5q156 0 298 61t245 164 164 245 61 298z\"/></symbol><symbol fill=\"currentColor\" viewBox=\"0 0 1792 1792\" id=\"leplayer-icon-volume-down\"><title>volume-down</title><path d=\"M1088 352v1088q0 26-19 45t-45 19-45-19l-333-333h-262q-26 0-45-19t-19-45v-384q0-26 19-45t45-19h262l333-333q19-19 45-19t45 19 19 45zm384 544q0 76-42.5 141.5t-112.5 93.5q-10 5-25 5-26 0-45-18.5t-19-45.5q0-21 12-35.5t29-25 34-23 29-35.5 12-57-12-57-29-35.5-34-23-29-25-12-35.5q0-27 19-45.5t45-18.5q15 0 25 5 70 27 112.5 93t42.5 142z\"/></symbol><symbol fill=\"currentColor\" viewBox=\"0 0 1792 1792\" id=\"leplayer-icon-volume-off\"><title>volume-off</title><path d=\"M1280 352v1088q0 26-19 45t-45 19-45-19l-333-333h-262q-26 0-45-19t-19-45v-384q0-26 19-45t45-19h262l333-333q19-19 45-19t45 19 19 45z\"/></symbol><symbol fill=\"currentColor\" viewBox=\"0 0 1792 1792\" id=\"leplayer-icon-volume-up\"><title>volume-up</title><path d=\"M832 352v1088q0 26-19 45t-45 19-45-19l-333-333h-262q-26 0-45-19t-19-45v-384q0-26 19-45t45-19h262l333-333q19-19 45-19t45 19 19 45zm384 544q0 76-42.5 141.5t-112.5 93.5q-10 5-25 5-26 0-45-18.5t-19-45.5q0-21 12-35.5t29-25 34-23 29-35.5 12-57-12-57-29-35.5-34-23-29-25-12-35.5q0-27 19-45.5t45-18.5q15 0 25 5 70 27 112.5 93t42.5 142zm256 0q0 153-85 282.5t-225 188.5q-13 5-25 5-27 0-46-19t-19-45q0-39 39-59 56-29 76-44 74-54 115.5-135.5t41.5-173.5-41.5-173.5-115.5-135.5q-20-15-76-44-39-20-39-59 0-26 19-45t45-19q13 0 26 5 140 59 225 188.5t85 282.5zm256 0q0 230-127 422.5t-338 283.5q-13 5-26 5-26 0-45-19t-19-45q0-36 39-59 7-4 22.5-10.5t22.5-10.5q46-25 82-51 123-91 192-227t69-289-69-289-192-227q-36-26-82-51-7-4-22.5-10.5t-22.5-10.5q-39-23-39-59 0-26 19-45t45-19q13 0 26 5 211 91 338 283.5t127 422.5z\"/></symbol></svg>"

/***/ },
/* 65 */
/***/ function(module, exports) {

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

/***/ },
/* 66 */
/***/ function(module, exports) {

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

/***/ },
/* 67 */
/***/ function(module, exports) {

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

/***/ },
/* 68 */
/***/ function(module, exports) {

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

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTE4Y2I1ZTA2MmFiMDRlOTQ4ZjkiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2xlLXBsYXllci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCIkXCIiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvQ29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9Db21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvSWNvbi5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9QbGF5QnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy91dGlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9TcGxhc2hJY29uLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL1RpbWVsaW5lL1RpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvQ29udHJvbENvbGxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvU2VjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvRXJyb3JEaXNwbGF5LmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL1Bvc3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvRnVsbHNjcmVlbkFwaS5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvdXRpbHMvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvTWVkaWFFcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9QbGF5Q29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9Wb2x1bWVDb250cm9sLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL0NvbnRyb2xEcm9wZG93bi5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9UaW1lbGluZS9UaW1lbGluZUNvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvQ29udHJvbFRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvVGltZWxpbmUvQnVmZmVyZWRSYW5nZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvVGltZWxpbmUvTWFya2VyLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL1NlY3Rpb25Db250cm9sLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL0NvbnRyb2xDaGVja2JveC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9GdWxsc2NyZWVuQ29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9SYXRlQ29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvdXRpbHMvY29va2llLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL0JhY2t3YXJkQ29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9Tb3VyY2VDb250cm9sLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL0NvbnRyb2xDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvU3VidGl0bGVDb250cm9sLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL0Rvd25sb2FkQ29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9LZXliaW5kaW5nSW5mb0NvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvVGltZUluZm9Db250cm9sLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9lbnRpdHkvSHRtbDUuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2VudGl0eS9FbnRpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2VudGl0eS9Zb3V0dWJlLmpzIiwid2VicGFjazovLy8uL34vYXJyYXkucHJvdG90eXBlLmZpbmQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9kZWZpbmUtcHJvcGVydGllcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L29iamVjdC1rZXlzL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vb2JqZWN0LWtleXMvaXNBcmd1bWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9mb3JlYWNoL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vZXMtYWJzdHJhY3QvZXM2LmpzIiwid2VicGFjazovLy8uL34vZXMtYWJzdHJhY3QvaGVscGVycy9pc05hTi5qcyIsIndlYnBhY2s6Ly8vLi9+L2VzLWFic3RyYWN0L2hlbHBlcnMvaXNGaW5pdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9lcy1hYnN0cmFjdC9oZWxwZXJzL2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2VzLWFic3RyYWN0L2hlbHBlcnMvc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2VzLWFic3RyYWN0L2hlbHBlcnMvbW9kLmpzIiwid2VicGFjazovLy8uL34vZXMtYWJzdHJhY3QvaGVscGVycy9pc1ByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2VzLXRvLXByaW1pdGl2ZS9lczYuanMiLCJ3ZWJwYWNrOi8vLy4vfi9lcy10by1wcmltaXRpdmUvaGVscGVycy9pc1ByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2lzLWNhbGxhYmxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vaXMtZGF0ZS1vYmplY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9pcy1zeW1ib2wvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9mdW5jdGlvbi1iaW5kL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vZnVuY3Rpb24tYmluZC9pbXBsZW1lbnRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2VzLWFic3RyYWN0L2VzNS5qcyIsIndlYnBhY2s6Ly8vLi9+L2VzLXRvLXByaW1pdGl2ZS9lczUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pcy1yZWdleC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2hhcy9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9hcnJheS5wcm90b3R5cGUuZmluZC9pbXBsZW1lbnRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2FycmF5LnByb3RvdHlwZS5maW5kL3BvbHlmaWxsLmpzIiwid2VicGFjazovLy8uL34vYXJyYXkucHJvdG90eXBlLmZpbmQvc2hpbS5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L3N2Zy9zdmctZGVmcy5zdmciLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL3ByZXNldHMvdnBzLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9wcmVzZXRzL3Ntcy5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvcHJlc2V0cy9jb21wcmVzc2VkLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9wcmVzZXRzL3lvdXR1YmUuanMiXSwibmFtZXMiOlsicmVnaXN0ZXJDb250cm9sIiwiZWxlbWVudCIsImFkZENsYXNzIiwiZXhjbHVkZUFycmF5Iiwic291cmNlIiwiZGlzdCIsInJlc3VsdCIsImNvbmNhdCIsImZvckVhY2giLCJpbmRleCIsImluZGV4T2YiLCJpdGVtIiwic3BsaWNlIiwiZGVmYXVsdE9wdGlvbnMiLCJlbnRpdHkiLCJhdXRvcGxheSIsImhlaWdodCIsImxvb3AiLCJtdXRlZCIsInByZWxvYWQiLCJwb3N0ZXIiLCJzdmdQYXRoIiwiaW5uYWN0aXZpdHlUaW1lb3V0IiwicmF0ZSIsInN0ZXAiLCJtaW4iLCJtYXgiLCJkZWZhdWx0IiwicGxheWJhY2siLCJzaG9ydCIsIm1lZGl1bSIsImxvbmciLCJjb250cm9scyIsImNvbW1vbiIsImZ1bGxzY3JlZW4iLCJtaW5pIiwiY29udHJvbHNPcHRpb25zIiwiYWxpZ24iLCJ2b2x1bWUiLCJtdXRlbGltaXQiLCJrZXlCaW5kaW5nIiwia2V5IiwiaW5mbyIsImRlc2NyaXB0aW9uIiwiZm4iLCJwbGF5ZXIiLCJ2aWRlbyIsInRvZ2dsZVBsYXkiLCJjdXJyZW50VGltZSIsIm9wdGlvbnMiLCJzcGxhc2hJY29uIiwic2hvdyIsInNoaWZ0S2V5Iiwic2VjdGlvbnMiLCJwcmV2IiwibmV4dCIsImNhbGNWb2x1bWVJY29uIiwidG9nZ2xlRnVsbHNjcmVlbiIsInBsdWdpbnMiLCJtaW5pcGxheWVyIiwib25QbGF5ZXJJbml0ZWQiLCJQbGF5ZXIiLCJjcmVhdGVFbGVtZW50IiwiX2VsZW1lbnQiLCJpbm5lckVsZW1lbnQiLCJfdXNlck9wdGlvbnMiLCJfaW5pdE9wdGlvbnMiLCJfbG9hZFNWR1Nwcml0ZSIsImRlZmF1bHRTcHJpdGUiLCJfdmlldyIsImxvYWRFbnRpdHkiLCJjdHgiLCJfaW5pdENvbnRyb2xzIiwiX2RibGNsaWNrVGltZW91dCIsIl9pbml0U2VjdGlvbnMiLCJ0aGVuIiwiZGF0YSIsInNlY3Rpb25zQ29tcG9uZW50IiwidHJpZ2dlciIsIl9pbml0UGx1Z2lucyIsIl9saXN0ZW5Ib3RLZXlzIiwiX3VzZXJBY3Rpdml0eSIsIl9saXN0ZW5Vc2VyQWN0aXZpdHkiLCJfd2FpdGluZ1RpbWVvdXRzIiwib24iLCJldmVudE5hbWUiLCJvbmUiLCJyZW1vdmVDbGFzcyIsInRpbWUiLCJkdXJhdGlvbiIsImVycm9yIiwiX3N0YXJ0V2FpdGluZyIsIl9zdG9wV2F5dGluZyIsImUiLCJ1cmwiLCJwbGF5IiwicGF1c2VkIiwicGF1c2UiLCJjb2RlIiwiaW5pdCIsInNyYyIsIl9vbkZ1bGxzY3JlZW5DaGFuZ2UiLCJiaW5kIiwiX29uQ2xpY2siLCJfb25EYmNsaWNrIiwiX29uSW5pdGVkIiwiX29uUGxheSIsIl9vblBhdXNlIiwiZG9jdW1lbnQiLCJmdWxsc2NyZWVuY2hhbmdlIiwiX29uRW50aXR5RnVsbHNjcmVuQ2hhbmdlIiwibmFtZSIsIkVudGl0eSIsImdldENvbXBvbmVudCIsIl9lbnRpdHkiLCJsb2FkIiwidmlldyIsImFyZ3MiLCJkZmQiLCJEZWZlcnJlZCIsIl9kYXRhIiwidW5kZWZpbmVkIiwicmVzb2x2ZSIsInByb21pc2UiLCJhamF4IiwibWV0aG9kIiwiZGF0YVR5cGUiLCJnZXREYXRhIiwiZnNBcGkiLCJyZXF1ZXN0RnVsbHNjcmVlbiIsInN1cHBvcnRzRnVsbFNjcmVlbiIsImVudGVyRnVsbHNjcmVlbiIsImV4aXRGdWxsc2NyZWVuIiwid2lkdGgiLCJsZW5ndGgiLCJuZXdTZWN0aW9ucyIsImkiLCJlbmRTZWN0aW9uIiwiYmVnaW4iLCJlbmQiLCJhdHRyIiwiY3NzIiwiZXJyb3JEaXNwbGF5IiwicGxheUJ1dHRvbiIsImxvYWRlciIsImFwcGVuZCIsImljb25OYW1lIiwiY2xhc3NOYW1lIiwidmlkZW9Db250YWluZXIiLCJsYXN0VGltZXIiLCJ2aWRlb0luZm8iLCJjb25zb2xlIiwid2FybiIsImluZm9FbGVtZW50IiwiaHRtbCIsInRpdGxlIiwic2VjdGlvbkNvbnRhaW5lciIsInNlY3Rpb25zQ29udGFpbmVyIiwiYmVmb3JlIiwiYXR0ck9wdGlvbnMiLCJyZWR1Y2UiLCJvYmoiLCJ2YWwiLCJzb3VyY2VzIiwiZmluZCIsImVhY2giLCJ2YWx1ZSIsIl9vcHRpb25zRnJvbUVsZW1lbnQiLCJwcmVzZXRPcHRpb25zIiwicHJlc2V0IiwiZ2V0UHJlc2V0IiwiZXh0ZW5kIiwiQXJyYXkiLCJpc0FycmF5IiwiZXhjbHVkZUNvbnRyb2xzIiwiaGFzT3duUHJvcGVydHkiLCJjb250cm9sQ29sbGVjdGlvbiIsInJvdyIsImluaXRPcHRpb25zIiwiYWN0aXZlIiwiaXNLZXlCaW5kaW5nIiwiYmluZGluZyIsIndoaWNoIiwiY3RybEtleSIsInByZXZlbnREZWZhdWx0IiwicmVqZWN0IiwiZ2V0U2VjdGlvbkRhdGEiLCJkb25lIiwiaXNTZWN0aW9uT3V0c2lkZSIsIl9jb21wbGV0ZVNlY3Rpb25zIiwiaXRlbXMiLCJmdWxsc2NyZWVuT25seSIsImhpZGVTY3JvbGwiLCJvdXRzaWRlU2VjdGlvbnMiLCJwbHVnaW5PcHRpb25zIiwibW91c2VJblByb2dyZXNzIiwibGFzdE1vdmVYIiwibGFzdE1vdmVZIiwib25Nb3VzZU1vdmUiLCJzY3JlZW5YIiwic2NyZWVuWSIsIm9uTW91c2VEb3duIiwiY2xlYXJJbnRlcnZhbCIsInNldEludGVydmFsIiwib25Nb3VzZVVwIiwiaW5hY3Rpdml0eVRpbWVvdXQiLCJkZWxheSIsInVzZXJBY3RpdmUiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwicHVzaCIsImNhbGwiLCJmb2N1cyIsImlzRnMiLCJmdWxsc2NyZWVuRWxlbWVudCIsImVuZGVkIiwiX2Vycm9yIiwiaGlkZSIsIl91c2VyQWN0aXZlIiwiZ2V0VXNlckFjdGl2ZSIsInRvZ2dsZUNsYXNzIiwicGx1Z2luIiwicHJvdG90eXBlIiwicmVnaXN0ZXJDb21wb25lbnQiLCJnZXRDb250cm9sIiwic2Vjb25kc1RvVGltZSIsIl9wcmVzZXRzIiwic3ZnIiwiaGlkZGVuRWxlbWVudCIsInByZXBlbmQiLCJyZXF1aXJlIiwid2luZG93IiwiJCIsImxlUGxheWVyIiwib2Zmc2V0U2hvdyIsIm9mZnNldCIsInRvcCIsIm91dGVySGVpZ2h0IiwiZ2V0Q29udHJvbHMiLCJjb250cm9sT3B0aW9ucyIsImNvbnRyb2wiLCJkaXNhYmxlIiwiaXNGdW5jdGlvbiIsImdldFdpZHRoIiwiX3VwZGF0ZU1pbmlQbGF5ZXIiLCJmb3JjZSIsInNjcm9sbFRvcCIsImhpZGVNaW5pUGxheWVyIiwic2hvd01pbmlQbGF5ZXIiLCJvblNldFZpZXciLCJvbkRlbFZpZXciLCJDb250cm9sIiwiY2xpY2siLCJsZXBsYXllcl9jb250cm9sX2NsaWNrIiwib25DbGljayIsImljb24iLCJhdHRycyIsInJvbGUiLCJidWlsZENTU0NsYXNzIiwiYXJndW1lbnRzIiwiX2Rpc2FibGUiLCJfY29udHJvbHMiLCJjb250cm9sQ2xhc3MiLCJDb21wb25lbnQiLCJfX25vZGUiLCJibHVyIiwiZXZlbnQiLCJFdmVudCIsInRyaWdnZXJIYW5kbGVyIiwiZmxhZyIsImhhc0NsYXNzIiwiY29tcG9uZW50IiwiX2NvbXBvbmVudHMiLCJJY29uIiwiX3VzZVRhZyIsImNyZWF0ZUVsZW1lbnROUyIsIl9zdmdUYWciLCJfaWNvbk5hbWUiLCJhcHBlbmRDaGlsZCIsImF0dHJOUyIsInJlbW92ZUF0dHJpYnV0ZU5TIiwic2V0QXR0cmlidXRlTlMiLCJQbGF5QnV0dG9uIiwiaW5uZXIiLCJwZXJjZW50aWZ5IiwiY3JlYXRlRWwiLCJub29wIiwic2Vjb25kcyIsInNob3dIb3VycyIsImgiLCJNYXRoIiwiZmxvb3IiLCJtIiwicyIsIm91dCIsInBlcmNlbnQiLCJ0YWciLCJwcm9wcyIsImdldFNjcm9sbEJhcldpZHRoIiwib3V0ZXIiLCJ2aXNpYmlsaXR5Iiwib3ZlcmZsb3ciLCJhcHBlbmRUbyIsIndpZHRoV2l0aFNjcm9sbCIsIm91dGVyV2lkdGgiLCJyZW1vdmUiLCJTcGxhc2hJY29uIiwiVGltZSIsInVwZGF0ZVRleHQiLCJ0ZXh0IiwiQ29udHJvbENvbGxlY3Rpb24iLCJwbGF5ZXJPcHRpb25zIiwiaW5kZXhSb3ciLCJjcmVhdGUiLCJjb2xsZWN0aW9uIiwiX3Jvd3MiLCJhZGRSb3ciLCJlbGVtUm93IiwiZmlyc3QiLCJzZWNvbmQiLCJnbG9iYWxBbGlnbiIsInJvd0FsaWduIiwiY29udHJvbE5hbWUiLCJhZGRDb250cm9sIiwiX2dldENvbnRyb2xPcHRpb25zIiwiU2VjdGlvbnMiLCJzY3JvbGxFbGVtZW50IiwiX2lubmVyRWxlbWVudCIsImFjdGl2ZVNlY3Rpb24iLCJnZXRTZWN0aW9uQnlJbmRleCIsInNldEFjdGl2ZUJ5SW5kZXgiLCJvblNlY3Rpb25DbGljayIsIl9vblNlY3Rpb25zVG9nZ2xlIiwib25UaW1lVXBkYXRlIiwidXBkYXRlU2VjdGlvbkR1cmF0aW9uIiwic2VjdGlvbkluZGV4IiwicGFyc2VJbnQiLCJuZXdJbmRleCIsInJpZ2h0IiwiX2NyZWF0ZVNlY3Rpb25zIiwic2VjdGlvbiIsInRhcmdldCIsImNsb3Nlc3QiLCJ0b3BQb3NpdGlvbiIsInBvc2l0aW9uIiwiYW5pbWF0ZSIsImVuZFNlY3Rpb25UaW1lIiwiY2hlY2tlZCIsInRvU3RyaW5nIiwibmV4dEluZm8iLCJ0cmltIiwicmVwbGFjZVdpdGgiLCJjcmVhdGVTZWN0aW9uIiwiRXJyb3JEaXNwbGF5IiwibWVzc2FnZSIsIm9uUGxheWVyRXJyb3IiLCJQb3N0ZXIiLCJfdXJsIiwiRnVsbHNjcmVlbkFwaSIsImFwaU1hcCIsInNwZWNBcGkiLCJicm93c2VyQXBpIiwiVVNFUl9BR0VOVCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsIklTX01PQklMRSIsInRlc3QiLCJJU19DSFJPTUUiLCJJU19BTkRST0lEIiwiSVNfQU5EUk9JRF9QSE9ORSIsIklTX0lQQUQiLCJJU19JUEhPTkUiLCJJU19JUE9EIiwiSVNfSU9TIiwiSVNfU0FGQVJJIiwiTWVkaWFFcnJvciIsImRlZmF1bHRNZXNzYWdlcyIsImVycm9yVHlwZXMiLCJlcnJOdW0iLCJQbGF5Q29udHJvbCIsInNob3dQYXVzZSIsInNob3dQbGF5Iiwic2hvd1JlcGxheSIsInJlbW92ZVJlcGxheSIsIkluZmluaXR5IiwiX3JlcGxheSIsIlZvbHVtZUNvbnRyb2wiLCJkcmFnIiwibWFya2VyIiwibGluZSIsInAiLCJnZXRQb3NpdGlvbiIsInBhZ2VZIiwiZHJvcGRvd25Db250ZW50IiwibW91c2Vtb3ZlIiwibW91c2V1cCIsInkiLCJ0b2dnbGVNdXRlZCIsImRlZmF1bHRWb2x1bWUiLCJyb3VuZCIsIkNvbnRyb2xEcm9wZG93biIsIlRpbWVsaW5lQ29udHJvbCIsIl9vbk1hcmtlck1vdXNlbW92ZSIsIl9vbk1hcmtlck1vdXNlZG93biIsIm9uU2VjdGlvbnNJbml0IiwiX29uVGltZVVwZGF0ZSIsIl9vbkR1cmF0aW9uQ2hhbmdlIiwibWFya2VyU2hhZG93IiwieCIsIm1hcmtlclRpbWUiLCJoYXJkTW92ZSIsInRvdGFsVGltZSIsInBsYXllZFJhbmdlcyIsImJ1ZmZlcmVkUmFuZ2VzIiwicGFnZVgiLCJtb3VzZWxlYXZlIiwibW91c2Vkb3duIiwiX29uTGluZUNsaWNrIiwidG91Y2htb3ZlIiwiaXNOYU4iLCJ1cGRhdGVTZWN0aW9uUmFuZ2VzIiwiY3JlYXRlU2VjdGlvblJhbmdlcyIsImxlZnQiLCJ0b0ZpeGVkIiwidXBkYXRlTGFiZWxzIiwid2F0Y2hCdWZmZXJJbnRlcnZhbCIsInVwZGF0ZVByb2dyZXNzQmFyIiwiRU5EIiwiU1RBUlQiLCJsb2FkZWQiLCJkb21JdGVtIiwiYWRkIiwiYnVmZmVyZWQiLCJsb2FkZWRTaXplIiwiQ29udHJvbFRleHQiLCJfdGV4dCIsIkJ1ZmZlcmVkUmFuZ2VzIiwidXBkYXRlIiwicmFuZ2UiLCJNYXJrZXIiLCJfb25Nb3VzZWRvd24iLCJfZHJhZyIsIlNlY3Rpb25Db250cm9sIiwiX29uU2VjdGlvbnNJbml0IiwiQ29udHJvbENoZWNrYm94Iiwib25DaGVja2VkIiwiX2NoZWNrZWQiLCJGdWxsc2NyZWVuQ29udHJvbCIsIlJhdGVDb250cm9sIiwiZG93bkNvbnRyb2wiLCJkZWNyZWFzZVJhdGUiLCJ1cENvbnRyb2wiLCJpbmNyZWFzZVJhdGUiLCJjdXJyZW50UmF0ZSIsInBhcnNlRmxvYXQiLCJyZXBsYWNlIiwicmF0ZU1pbiIsInJhdGVNYXgiLCJnZXQiLCJDb29raWUiLCJkZmx0IiwiY29va2llcyIsImNvb2tpZSIsInNwbGl0IiwiZCIsIkRhdGUiLCJzZXREYXRlIiwieWVhciIsIkJhY2t3YXJkQ29udHJvbCIsIlNvdXJjZUNvbnRyb2wiLCJwbGF5YmFja1F1YWxpdHkiLCJxdWFsaXR5TGV2ZWxzIiwiZ2V0QXZhaWxhYmxlUXVhbGl0eUxldmVscyIsImN1cnJlbnRRdWFsaXR5IiwibGlzdCIsImVtcHR5IiwiZWxlbSIsImFkZEl0ZW0iLCJDb250cm9sQ29udGFpbmVyIiwiX2FjdGl2ZSIsImNvbnRlbnQiLCJvbkl0ZW1DbGljayIsImN1cnJlbnRUYXJnZXQiLCJTdWJ0aXRsZUNvbnRyb2wiLCJ0cmFjayIsInN1YnRpdGxlcyIsImxhbmd1YWdlIiwiRG93bmxvYWRDb250cm9sIiwib25Mb2FkU3RhcnQiLCJocmVmIiwiZG93bmxvYWQiLCJsaW5rIiwicGFyc2VyIiwiZmlsZU5hbWUiLCJwYXRobmFtZSIsIktleUJpbmRpbmdJbmZvQ29udHJvbCIsImluZm9Db250ZW50IiwiX2tleSIsImhvdGtleSIsImtleVN0cmluZyIsIlRpbWVJbmZvQ29udHJvbCIsIl9jdXJyZW50VGltZUNvbnRyb2wiLCJfdG90YWxUaW1lQ29udHJvbCIsIkh0bWw1IiwibWVkaWEiLCJidWZmZXJSYW5nZXMiLCJfcGxheWJhY2tRdWFsaXR5Iiwib25EdXJhdGlvbkNoYW5nZSIsIm9uUHJvZ3Jlc3MiLCJvblNlZWtpbmciLCJvblNlZWtlZCIsIm9uVm9sdW1lQ2hhbmdlIiwib25EYmxjbGljayIsIm9uUGxheSIsIm9uUGF1c2UiLCJvblJhdGVDaGFuZ2UiLCJvbkVuZGVkIiwib25DYW5wbGF5VGhyb3VnaCIsIm9uV2FpdGluZyIsIm9uRXJyb3IiLCJyZW1vdmVBdHRyIiwicHJvcCIsIm1hcCIsIl9pbml0U3VidGl0bGVzIiwiX2luaXRWaWRlbyIsIl9pbml0UmF0ZSIsIl9pbml0Vm9sdW1lIiwid2Via2l0RW50ZXJGdWxsU2NyZWVuIiwibmV0d29ya1N0YXRlIiwiSEFWRV9NRVRBREFUQSIsIndlYmtpdEV4aXRGdWxsU2NyZWVuIiwicGxheWVkIiwicGxheVByb21pc2UiLCJwYXVzZVByb21pc2UiLCJkZWZhdWx0UmF0ZSIsIl9zZWxmIiwiY2hpbGRyZW4iLCJyZWFkeVN0YXRlIiwiSFRNTE1lZGlhRWxlbWVudCIsIkhBVkVfTk9USElORyIsIl90ZXh0VHJhY2tzSGFjayIsIm5vdGlmeSIsInRleHRUcmFja3MiLCJjbGllbnRIZWlnaHQiLCJjbGllbnRXaWR0aCIsInBsYXliYWNrUmF0ZSIsInNldCIsIk1PQklMRV9NQVhfUkFURSIsIlNBRkFSSV9NQVhfUkFURSIsIk1PQklMRV9NSU5fUkFURSIsIlNBRkFSSV9NSU5fUkFURSIsInN0b3AiLCJfc291cmNlIiwibW9kZSIsIm11dGUiLCJzZWVrYWJsZSIsInN0YXJ0IiwiY3VycmVudFNyYyIsIl90cmlnZ2VyU3RhY2siLCJfc3RvcExpc3RlbiIsIl9wb3N0ZXIiLCJpbm5lckhlaWdodCIsIl9yYXRlTWF4IiwiX3JhdGVNaW4iLCJsZXZlbHMiLCJzb21lIiwibG9hZFNjcmlwdCIsImdldFNjcmlwdCIsImFwaUxvYWRlZCIsIllvdXR1YmUiLCJfcGF1c2VkIiwiYXZhaWxhYmxlUmF0ZXMiLCJhcnIiLCJ5dFBsYXllciIsIlFVQUxJVFlfTkFNRVMiLCJwbGF5VmlkZW8iLCJwYXVzZVZpZGVvIiwiaW5pdFlUUGxheWVyIiwieW91dHViZUVsZW1lbnQiLCJibG9ja2VyIiwiX2luaXRQcm9taXNlIiwiZ2xvYmFsT3B0aW9ucyIsInl0T3B0aW9ucyIsIml2X2xvYWRfcG9saWN5IiwibW9kZXN0YnJhbmRpbmciLCJyZWwiLCJzaG93aW5mbyIsImNjX2xvYWRfcG9saWN5IiwiZGlzYWJsZWtiIiwiZnMiLCJZVCIsInJlYWR5IiwidmlkZW9JZCIsInBsYXllclZhcnMiLCJldmVudHMiLCJvblJlYWR5Iiwib25ZVFBSZWFkeSIsIm9uU3RhdGVDaGFuZ2UiLCJvbllUUFN0YXRlQ2hhbmdlIiwib25QbGF5YmFja1JhdGVDaGFuZ2UiLCJvbllUUFJhdGVDaGFuZ2UiLCJvblBsYXliYWNrUXVhbGl0eUNoYW5nZSIsIm9uWVRQUGxheWJhY2tRdWFsaXR5Q2hhbmdlIiwiZ2V0QXZhaWxhYmxlUGxheWJhY2tSYXRlcyIsInNldEF2YWlsYWJsZVBsYXliYWNrUmF0ZXMiLCJzdGF0ZSIsImxhc3RTdGF0ZSIsIlBsYXllclN0YXRlIiwiVU5TVEFSVEVEIiwiRU5ERUQiLCJQTEFZSU5HIiwic2V0UGxheWJhY2tRdWFsaXR5IiwiX25leHRQbGF5YmFja1F1YWxpdHkiLCJpc1NlZWtpbmciLCJlbWl0VGltZXVwZGF0ZSIsIlBBVVNFRCIsIkJVRkZFUklORyIsInNlZWtpbmdJbnRlcnZhbCIsIndhc1BhdXNlZEJlZm9yZVNlZWsiLCJ0aW1lQmVmb3JlU2VlayIsImlkIiwicGFyc2VVcmwiLCJnZXRDdXJyZW50VGltZSIsInNlZWtUbyIsImdldER1cmF0aW9uIiwiTmFOIiwiZ2V0UGxheWJhY2tSYXRlIiwic2V0UGxheWJhY2tSYXRlIiwidW5NdXRlIiwiaXNNdXRlZCIsInN0YXR1cyIsImdldFBsYXllclN0YXRlIiwiQ1VFRCIsImdldFBsYXliYWNrUXVhbGl0eSIsImdldFZvbHVtZSIsInNldFZvbHVtZSIsInJlZ2V4IiwiVVJMX1JFR0VYIiwibWF0Y2giLCJ0aW55Iiwic21hbGwiLCJsYXJnZSIsImhkNzIwIiwiaGQxMDgwIiwiaGlnaHJlcyIsImF1dG8iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDdENBOzs7Ozs7QUFFQTs7OztBQUdBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7QUFDQTs7QUFFQTs7OztBQUdBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUFqQkE7OztBQW9CQSxtQkFBUUEsZUFBUixDQUF3QixTQUF4QixFQUFtQyxZQUFXO0FBQzdDLFNBQU87QUFDTkMsWUFBVSxzQkFBRSxRQUFGLEVBQVlDLFFBQVosQ0FBcUIsU0FBckI7QUFESixHQUFQO0FBR0EsRUFKRDs7QUFRQTs7Ozs7Ozs7QUFRQSxVQUFT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R0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRCxpQ0FBZ0M7O0FBRWhDOzs7Ozs7O0FDM1VBO0FBQ0E7QUFDQTs7Ozs7OztBQ0ZBLDRDQUEyQyxnQkFBZ0I7O0FBRTNELG1EQUFrRCxpRkFBaUY7Ozs7Ozs7QUNGbkk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDUkE7QUFDQTtBQUNBOzs7Ozs7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNGQTs7QUFFQTs7QUFF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QUFNdUksMEJBQVM7QUFDckJ4SCxXQUFVO0FBQ1RuQyxXQUFTLFNBREE7QUFFVGtCLGFBQVc7QUFDVkMsWUFBUyxDQUNSLENBQUMsTUFBRCxFQUFTLFFBQVQsRUFBbUIsVUFBbkIsRUFBK0IsTUFBL0IsRUFBdUMsVUFBdkMsRUFBbUQsUUFBbkQsRUFBNkQsU0FBN0QsRUFBd0UsU0FBeEUsRUFBbUYsWUFBbkYsQ0FEUSxFQUVSLEVBRlEsQ0FEQztBQUtWQyxnQkFBYSxDQUNaLENBQUMsTUFBRCxFQUFTLFFBQVQsRUFBbUIsVUFBbkIsRUFBK0IsTUFBL0IsRUFBdUMsVUFBdkMsRUFBb0QsUUFBcEQsRUFBOEQsU0FBOUQsRUFBeUUsU0FBekUsRUFBb0YsWUFBcEYsQ0FEWTtBQUxIO0FBRkY7QUFEVyxFQUFmLEMiLCJmaWxlIjoibGUtcGxheWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvanMvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZTE4Y2I1ZTA2MmFiMDRlOTQ4ZjkiLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cblxuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9jb21wb25lbnRzL0NvbnRyb2wnO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvQ29tcG9uZW50JztcbmltcG9ydCBQbGF5QnV0dG9uIGZyb20gJy4vY29tcG9uZW50cy9QbGF5QnV0dG9uJztcbmltcG9ydCBTcGxhc2hJY29uIGZyb20gJy4vY29tcG9uZW50cy9TcGxhc2hJY29uJztcblxuaW1wb3J0IEljb24gZnJvbSAnLi9jb21wb25lbnRzL0ljb24nO1xuaW1wb3J0IFRpbWUgZnJvbSAnLi9jb21wb25lbnRzL1RpbWVsaW5lL1RpbWUnO1xuaW1wb3J0IENvbnRyb2xDb2xsZWN0aW9uIGZyb20gJy4vY29tcG9uZW50cy9Db250cm9sQ29sbGVjdGlvbic7XG5pbXBvcnQgU2VjdGlvbnMgZnJvbSAnLi9jb21wb25lbnRzL1NlY3Rpb25zJztcbmltcG9ydCBFcnJvckRpc3BsYXkgZnJvbSAnLi9jb21wb25lbnRzL0Vycm9yRGlzcGxheSc7XG5pbXBvcnQgUG9zdGVyIGZyb20gJy4vY29tcG9uZW50cy9Qb3N0ZXInO1xuaW1wb3J0IEZ1bGxzY3JlZW5BcGkgZnJvbSAnLi9GdWxsc2NyZWVuQXBpJztcblxuaW1wb3J0IHsgY3JlYXRlRWwsIHNlY29uZHNUb1RpbWUsIG5vb3AgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IElTX0lQSE9ORSwgSVNfSVBPRCwgSVNfQU5EUk9JRF9QSE9ORSB9IGZyb20gJy4vdXRpbHMvYnJvd3Nlcic7XG5cbmltcG9ydCBNZWRpYUVycm9yIGZyb20gJy4vTWVkaWFFcnJvcic7XG5cbi8vIFJlZ2lzdGVyIGNvbW1vbiBjb250cm9sc1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvUGxheUNvbnRyb2wnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvVm9sdW1lQ29udHJvbCc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9UaW1lbGluZS9UaW1lbGluZUNvbnRyb2wnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvU2VjdGlvbkNvbnRyb2wnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvRnVsbHNjcmVlbkNvbnRyb2wnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvUmF0ZUNvbnRyb2wnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvQmFja3dhcmRDb250cm9sJztcbmltcG9ydCAnLi9jb21wb25lbnRzL1NvdXJjZUNvbnRyb2wnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvU3VidGl0bGVDb250cm9sJztcbmltcG9ydCAnLi9jb21wb25lbnRzL0Rvd25sb2FkQ29udHJvbCc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9LZXliaW5kaW5nSW5mb0NvbnRyb2wnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvVGltZUluZm9Db250cm9sJztcblxuaW1wb3J0ICcuL2VudGl0eS9IdG1sNSc7XG5pbXBvcnQgJy4vZW50aXR5L1lvdXR1YmUnO1xuXG5pbXBvcnQgJ2FycmF5LnByb3RvdHlwZS5maW5kJztcblxuXG5Db250cm9sLnJlZ2lzdGVyQ29udHJvbCgnZGl2aWRlcicsIGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4ge1xuXHRcdGVsZW1lbnQgOiAkKCc8ZGl2Lz4nKS5hZGRDbGFzcygnZGl2aWRlcicpXG5cdH07XG59KTtcblxuXG5cbi8qKlxuICogUmV0dXJuIGFycmF5IHdpdGggZXhjbHVkZWQgZGlzdCdzIGl0ZW1zIGZyb20gc291cmNlIGFycmF5XG4gKlxuICogQGFjY2VzcyBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBzb3VyY2VcbiAqIEBwYXJhbSB7QXJyYXl9IGRpc3RcbiAqIEByZXR1cm4ge0FycmF5fVxuICovXG5mdW5jdGlvbiBleGNsdWRlQXJyYXkoc291cmNlLCBkaXN0KSB7XG5cdGNvbnN0IHJlc3VsdCA9IFtdLmNvbmNhdChzb3VyY2UpO1xuXHRkaXN0LmZvckVhY2goaXRlbSA9PiB7XG5cdFx0Y29uc3QgaW5kZXggPSByZXN1bHQuaW5kZXhPZihpdGVtKTtcblx0XHRpZiAoaW5kZXggPiAtMSkge1xuXHRcdFx0cmVzdWx0LnNwbGljZShpbmRleCwgMSk7XG5cdFx0XHRyZXR1cm5cblx0XHR9XG5cdH0pXG5cblx0cmV0dXJuIHJlc3VsdDtcbn1cblxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG5cdGVudGl0eSA6ICdIdG1sNScsXG5cdGF1dG9wbGF5IDogZmFsc2UsXG5cdGhlaWdodCA6ICdhdXRvJyxcblx0bG9vcCA6IGZhbHNlLFxuXHRtdXRlZCA6IGZhbHNlLFxuXHRwcmVsb2FkIDogJ21ldGFkYXRhJyxcblx0cG9zdGVyIDogbnVsbCxcblx0c3ZnUGF0aCA6ICcnLFxuXHRpbm5hY3Rpdml0eVRpbWVvdXQgOiA1MDAwLFxuXHRyYXRlIDoge1xuXHRcdHN0ZXAgOiAwLjI1LFxuXHRcdG1pbiA6IDAuNSxcblx0XHRtYXggOiA0LjAsXG5cdFx0ZGVmYXVsdCA6IDFcblx0fSxcblx0cGxheWJhY2sgOiB7XG5cdFx0c3RlcCA6IHtcblx0XHRcdHNob3J0IDogNSxcblx0XHRcdG1lZGl1bSA6IDEwLFxuXHRcdFx0bG9uZyA6IDMwXG5cdFx0fVxuXHR9LFxuXHRjb250cm9scyA6IHtcblx0XHRjb21tb24gOiBbXG5cdFx0XHRbJ3BsYXknLCAndm9sdW1lJywgJ2RpdmlkZXInLCAndGltZWxpbmUnLCAgJ2RpdmlkZXInLCAnc2VjdGlvbicsICdkaXZpZGVyJywgJ2Z1bGxzY3JlZW4nXSxcblx0XHRcdFsncmF0ZScsICdkaXZpZGVyJywgJ2JhY2t3YXJkJywgJ2RpdmlkZXInLCAnc291cmNlJywgJ2RpdmlkZXInLCAnc3VidGl0bGUnLCAnZGl2aWRlcicsICdkb3dubG9hZCcsICdkaXZpZGVyJywgJ2tleWJpbmRpbmcgaW5mbyddXG5cdFx0XSxcblx0XHRmdWxsc2NyZWVuIDogW1xuXHRcdFx0WydwbGF5JywgJ3ZvbHVtZScsICdkaXZpZGVyJywgJ3RpbWVsaW5lJywgJ2RpdmlkZXInLCAncmF0ZScsICdkaXZpZGVyJywgJ2tleWJpbmRpbmcgaW5mbycsICAnZGl2aWRlcicsICdiYWNrd2FyZCcsICdkaXZpZGVyJywgJ3NvdXJjZScsICdkaXZpZGVyJywgJ3N1YnRpdGxlJywgJ2RpdmlkZXInLCAnZG93bmxvYWQnLCAnZGl2aWRlcicsICdzZWN0aW9uJywgJ2RpdmlkZXInLCAnZnVsbHNjcmVlbiddXG5cdFx0XSxcblx0XHRtaW5pIDogW1xuXHRcdFx0WydwbGF5JywgJ3ZvbHVtZScsICdkaXZpZGVyJywgJ2Z1bGxzY3JlZW4nLCAnZGl2aWRlcicsICd0aW1laW5mbyddXG5cdFx0XVxuXHR9LFxuXHRjb250cm9sc09wdGlvbnMgOiB7XG5cblx0XHRjb21tb24gOiB7XG5cdFx0XHRhbGlnbiA6IFsnanVzdGlmeScsICdsZWZ0J11cblx0XHR9LFxuXG5cdFx0ZnVsbHNjcmVlbiA6IHtcblx0XHRcdGFsaWduIDogJ2p1c3RpZnknXG5cdFx0fVxuXHR9LFxuXHR2b2x1bWUgOiB7XG5cdFx0ZGVmYXVsdCA6IDAuNCxcblx0XHRtdXRlbGltaXQgOiAwLjA1LFxuXHRcdHN0ZXAgOiAwLjFcblx0fSxcblx0a2V5QmluZGluZyA6IFtcblx0XHR7XG5cdFx0XHRrZXkgOiAzMixcblx0XHRcdGluZm8gOiBbJ1NwYWNlJ10sXG5cdFx0XHRkZXNjcmlwdGlvbiA6ICfQndCw0YfQsNGC0Ywg0L/RgNC+0LjQs9GA0YvQstCw0L3QuNC1IC8g0L/QvtGB0YLQsNCy0LjRgtGMINC90LAg0L/QsNGD0LfRgycsXG5cdFx0XHRmbiA6IChwbGF5ZXIpID0+IHtcblx0XHRcdFx0cGxheWVyLnZpZGVvLnRvZ2dsZVBsYXkoKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdHtcblx0XHRcdGtleSA6IDM3LFxuXHRcdFx0aW5mbyA6IFsn4oaQJ10sXG5cdFx0XHRkZXNjcmlwdGlvbiA6IGDQn9C10YDQtdC80L7RgtCw0YLRjCDQvdCwIDEwINGB0LXQutGD0L3QtCDQvdCw0LfQsNC0YCxcblx0XHRcdGZuIDogKHBsYXllcikgPT4ge1xuXHRcdFx0XHRwbGF5ZXIudmlkZW8uY3VycmVudFRpbWUgLT0gcGxheWVyLm9wdGlvbnMucGxheWJhY2suc3RlcC5tZWRpdW07XG5cdFx0XHRcdHBsYXllci5zcGxhc2hJY29uLnNob3coJ3VuZG8nKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdHtcblx0XHRcdGtleSA6IDM5LFxuXHRcdFx0aW5mbyA6IFsn4oaSJ10sXG5cdFx0XHRkZXNjcmlwdGlvbiA6IGDQn9C10YDQtdC80L7RgtCw0YLRjCDQvdCwIDEwINGB0LXQutGD0L3QtCDQstC/0LXRgNGR0LRgLFxuXHRcdFx0Zm4gOiAocGxheWVyKSA9PiB7XG5cdFx0XHRcdHBsYXllci52aWRlby5jdXJyZW50VGltZSArPSBwbGF5ZXIub3B0aW9ucy5wbGF5YmFjay5zdGVwLm1lZGl1bTtcblx0XHRcdFx0cGxheWVyLnNwbGFzaEljb24uc2hvdygncmVkbycpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0c2hpZnRLZXkgOiB0cnVlLFxuXHRcdFx0aW5mbyA6IFsnU2hpZnQnLCAn4oaQJ10sXG5cdFx0XHRkZXNjcmlwdGlvbiA6ICfQn9C10YDQtdC50YLQuCDQvdCwINC/0YDQtdC00YvQtNGD0YnRg9GOINGB0LXQutGG0LjRjicsXG5cdFx0XHRrZXkgOiAzNyxcblx0XHRcdGZuIDogKHBsYXllcikgPT4ge1xuXHRcdFx0XHRpZihwbGF5ZXIuc2VjdGlvbnMgPT0gbnVsbCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRwbGF5ZXIuc2VjdGlvbnMucHJldigpO1xuXG5cdFx0XHR9XG5cdFx0fSxcblx0XHR7XG5cdFx0XHRzaGlmdEtleSA6IHRydWUsXG5cdFx0XHRrZXkgOiAzOSxcblx0XHRcdGluZm8gOiBbJ1NoaWZ0JywgJ+KGkiddLFxuXHRcdFx0ZGVzY3JpcHRpb24gOiAn0J/QtdGA0LXQudGC0Lgg0L3QsCDRgdC70LXQtNGD0Y7RidGD0Y4g0YHQtdC60YbQuNGOJyxcblx0XHRcdGZuIDogKHBsYXllcikgPT4ge1xuXHRcdFx0XHRpZihwbGF5ZXIuc2VjdGlvbnMgPT0gbnVsbCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRwbGF5ZXIuc2VjdGlvbnMubmV4dCgpXG5cdFx0XHR9XG5cdFx0fSxcblx0XHR7XG5cdFx0XHRrZXkgOiAzOCxcblx0XHRcdGluZm8gOiBbJ+KGkSddLFxuXHRcdFx0ZGVzY3JpcHRpb24gOiAn0KPQstC10LvQuNGH0LjRgtGMINCz0YDQvtC80LrQvtGB0YLRjCcsXG5cdFx0XHRmbiA6IChwbGF5ZXIpID0+IHtcblx0XHRcdFx0cGxheWVyLnZpZGVvLnZvbHVtZSArPSBwbGF5ZXIub3B0aW9ucy52b2x1bWUuc3RlcDtcblxuXHRcdFx0XHRwbGF5ZXIuc3BsYXNoSWNvbi5zaG93KHBsYXllci5jYWxjVm9sdW1lSWNvbihwbGF5ZXIudmlkZW8udm9sdW1lKSk7XG5cblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0e1xuXHRcdFx0a2V5IDogNDAsXG5cdFx0XHRpbmZvIDogWyfihpMnXSxcblx0XHRcdGRlc2NyaXB0aW9uIDogJ9Cj0LzQtdC90YzRiNC40YLRjCDQs9GA0L7QvNC60L7RgdGC0YwnLFxuXHRcdFx0Zm4gOiAocGxheWVyKSA9PiB7XG5cdFx0XHRcdHBsYXllci52aWRlby52b2x1bWUgLT0gcGxheWVyLm9wdGlvbnMudm9sdW1lLnN0ZXA7XG5cblx0XHRcdFx0cGxheWVyLnNwbGFzaEljb24uc2hvdyhwbGF5ZXIuY2FsY1ZvbHVtZUljb24ocGxheWVyLnZpZGVvLnZvbHVtZSkpO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHR7XG5cdFx0XHRrZXkgOiA3MCxcblx0XHRcdGluZm8gOiBbJ2YnXSxcblx0XHRcdGRlc2NyaXB0aW9uIDogJ9Ce0YLQutGA0YvRgtGML9C30LDQutGA0YvRgtGMINC/0L7Qu9C90L7RjdC60YDQsNC90YvQuSDRgNC10LbQuNC8Jyxcblx0XHRcdGZuIDogKHBsYXllcikgPT4ge1xuXHRcdFx0XHRwbGF5ZXIudG9nZ2xlRnVsbHNjcmVlbigpO1xuXHRcdFx0fVxuXHRcdH1cblx0XSxcblx0cGx1Z2lucyA6IHtcblx0XHRtaW5pcGxheWVyIDoge31cblx0fSxcblx0b25QbGF5ZXJJbml0ZWQgOiBub29wXG59O1xuXG4vKipcbiAqIEBjbGFzcyBQbGF5ZXJcbiAqIEBleHRlbmRzIENvbXBvbmVudFxuICogQHBhcmFtIHtqUXVlcnl9IGVsZW1lbnQgRWxlbWVudCB3aGVuIHBsYXllciB3aWxsIGluaXRcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuYXV0b3BsYXk9ZmFsc2VdXG4gKiBXaGVuIHByZXNlbnQsIHRoZSB2aWRlbyB3aWxsIGF1dG9tYXRpY2FsbHkgc3RhcnQgcGxheWluZyBhcyBzb29uIGFzIGl0IGNhbiBkbyBzbyB3aXRob3V0IHN0b3BwaW5nLlxuICogQHBhcmFtIHtTdHJpbmd8TnVtYmVyfSBbb3B0aW9ucy5oZWlnaHQ9J2F1dG8nXSBIZWlnaHQgb2YgdmlkZW8gY29udGFpbmVyXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMud2lkdGhdIFdpZHRoIG9mIHZpZGVvIGNvbnRhaW5lclxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5sb29wPWZhbHNlXVxuICogV2hlbiBwcmVzZW50LCBpdCBzcGVjaWZpZXMgdGhhdCB0aGUgdmlkZW8gd2lsbCBzdGFydCBvdmVyIGFnYWluLCBldmVyeSB0aW1lIGl0IGlzIGZpbmlzaGVkLlxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5tdXRlZD1mYWxzZV1cbiAqIFdoZW4gcHJlc2VudCwgaXQgc3BlY2lmaWVzIHRoYXQgdGhlIGF1ZGlvIG91dHB1dCBvZiB0aGUgdmlkZW8gc2hvdWxkIGJlIG11dGVkLlxuICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLnByZWxvYWQ9J21ldGFkYXRhJ10gQ2FuIGJlICgnYXV0byd8J21ldGFkYXRhJ3wnbm9uZScpXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMucG9zdGVyXSBQYXRoIHRvIHBvc3RlciBvZiB2aWRlb1xuICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLnN2Z1BhdGhdIFBhdGggdG8gc3ZnIHNwcml0ZSBmb3IgaWNvbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5yYXRlXSBSYXRlIG9wdGlvbnNcbiAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5yYXRlLnN0ZXA9MC4yNV0gU3RlcCBvZiBpbmNyZWFzZS9kZWNyZWFzZSBieSByYXRlIGNvbnRyb2xcbiAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5yYXRlLm1pbj0wLjVdIE1pbiBvZiByYXRlXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMucmF0ZS5tYXg9NC4wXSBNYXggb2YgcmF0ZVxuICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLnJhdGUuZGVmYXVsdD0xXVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLnBsYXliYWNrXSBQbGF5YmFjayBvcHRpb25zXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMucGxheWJhY2suc3RlcF1cbiAqIEBwYXJhbSB7TnVibWVyfSBbb3B0aW9ucy5wbGF5YmFjay5zdGVwLnNob3J0PTVdXG4gKiBAcGFyYW0ge051Ym1lcn0gW29wdGlvbnMucGxheWJhY2suc3RlcC5tZWRpdW09MzBdXG4gKiBAcGFyYW0ge051Ym1lcn0gW29wdGlvbnMucGxheWJhY2suc3RlcC5sb25nPTYwXVxuICogQHBhcmFtIHtPYmVqY3R9IFtvcHRpb25zLmNvbnRyb2xzXSBPYmplY3Qgb2YgY29udHJvbHNcbiAqIEBwYXJhbSB7U3RyaW5nW119IFtvcHRpb25zLmNvbnRyb2xzLmNvbW1vbl0gQXJyYXkgb2YgY29udHJvbHMgZm9yIGRlZmF1bHQgdmlld1xuICogQHBhcmFtIHtTdHJpbmdbXX0gW29wdGlvbnMuY29udHJvbHMuZnVsbHNjcmVlbl0gQXJyYXkgb2YgY29udHJvbCBmb3IgZnVsbHNyZWVuIHZpZXdcbiAqIEBwYXJhbSB7U3RyaW5nW119IFtvcHRpb25zLmNvbnRyb2xzLm1pbmldIEFycmF5IG9mIGNvbnRyb2wgZm9yIG1pbmlwbGF5ZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5leGNsdWRlQ29udHJvbHNdIE9iamVjdCBvZiBleGNsdWRlIGNvbnRyb2xzLiBTdHJ1Y3R1cmUgaXMgdGhlIHNhbWUgYXMgdGhhdCBvZiBvcHRpb25zLmNvbnRyb2xzXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMudm9sdW1lXSBWb2x1bWUncyBvcHRpb25zXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMudm9sdW1lLmRlZmF1bHQ9MC40XSBEZWZhdWx0IHZvbHVtZVxuICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLnZvbHVtZS5tdXRlbGltaXQ9MC4wNV0gRGVsdGEgd2hlbiB2b2x1bWUgaXMgbXV0ZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy52b2x1bWUuc3RlcD0wLjA1XVxuICogQHBhcmFtIHtPYmplY3RbXX0gW29wdGlvbnMua2V5YmluZGluZ11cbiAqIE9iamVjdCB3aXRoIGtleWJpbmRpbmcgb3B0aW9ucywgd2hlbiBrZXkgaXQncyBuYW1lIG9mIGtleSBiaW5kaW5nLCBhbmQgdmFsdWUgaXQncyBrZXkgYmluZGluZyBzZXR0aW5nc1xuICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmtleWJpbmRpbmdbXS5rZXldIENvZGUgb2Yga2V5IGJpbmRpbmcgKGZvciBleGFtcGxlIDMyIGl0J3Mgc3BhY2UpXG4gKiBAcGFyYW0ge1N0cmluZ1tdfSBbb3B0aW9ucy5rZXliaW5kaW5nW10uaW5mb10gQXJyYXkgb2Yga2V5c3Ryb2tlcyBvcmRlclxuICogQHBhcmFtIHtTdHJpbmd9IG9wdGlvbnMua2V5YmluZGluZ1tdLmRlc2NyaXB0aW9uXSBEZXNjcmlwdGlvbiBvZiBrZXkgYmluZGluZ1xuICogQHBhcmFtIHtGdW5jdGlvbn0gb3B0aW9ucy5rZXliaW5kaW5nW10uZm5dIENhbGxiYWNrXG4gKiBAcGFyYW0ge09iamVjdHxCb29sZWFufSBbb3B0aW9ucy5taW5pcGxheWVyPWZhbHNlXVxuICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLm1pbmlwbGF5ZXIud2lkdGhdIFdpZHRoIG9mIG1pbmlwbGF5ZXIgY29udGFpbmVyXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMubWluaXBsYXllci53aWR0aF0gTWluaVBsYXllcidzIHdpZHRoXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuc2VjdGlvbkNvbnRhaW5lcl0gU2VsZWN0b3IgZm9yIHNlY3Rpb25zXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMucGx1Z2luc10gS2V5cyBvZiBvYmplY3RzIGFyZSBuYW1lIG9mIHBsdWdpbiwgdmFsdWUgLSBwbHVnaW4gb3B0aW9uc1xuICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fSBbb3B0aW9ucy5kYXRhXSBVcmwgb3IgSlNPTiB3aXRoIGRhdGEgZm9yIHBsYXllclxuICogQHBhcmFtIHtBcnJheX0gW29wdGlvbnMuZGF0YS5zZWN0aW9uc10gU2VjdGlvbnMgYXJyYXlcbiAqL1xuXG5jbGFzcyBQbGF5ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3RvcihlbGVtZW50LCBvcHRpb25zKSB7XG5cblx0XHRvcHRpb25zLmNyZWF0ZUVsZW1lbnQgPSBmYWxzZTtcblxuXHRcdHN1cGVyKG51bGwsIG9wdGlvbnMpO1xuXG5cdFx0dGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XG5cblx0XHQvKipcblx0XHQgKiBET00gY29udGFpbmVyIHRvIGhvbGQgaW5uZXIgb2YgcGxheWVyXG5cdFx0ICpcblx0XHQgKiBAbWVtYmVyb2YhIFBsYXllciNcblx0XHQgKiBAdHlwZSB7alF1ZXJ5fVxuXHRcdCAqL1xuXHRcdHRoaXMuaW5uZXJFbGVtZW50ID0gY3JlYXRlRWwoJ2RpdicpO1xuXG5cdFx0Ly8gVXNlcnMgb3B0aW9uc1xuXHRcdHRoaXMuX3VzZXJPcHRpb25zID0gb3B0aW9ucztcblx0XHR0aGlzLl9pbml0T3B0aW9ucygpO1xuXG5cdFx0aWYodGhpcy5vcHRpb25zLnN2Z1BhdGggPT09ICcnKSB7XG5cdFx0XHRQbGF5ZXIuX2xvYWRTVkdTcHJpdGUoUGxheWVyLmRlZmF1bHRTcHJpdGUpO1xuXHRcdH1cblxuXHRcdHRoaXMuX3ZpZXcgPSAnY29tbW9uJztcblxuXHRcdC8qKlxuXHRcdCAqIERPTSBjb250YWluZXIgdG8gaG9sZCBhbGwgcGxheWVyXG5cdFx0ICpcblx0XHQgKiBAbWVtYmVyb2YhIFBsYXllciNcblx0XHQgKiBAdHlwZSB7alF1ZXJ5fVxuXHRcdCAqL1xuXHRcdHRoaXMuZWxlbWVudCA9IHRoaXMuY3JlYXRlRWxlbWVudCgpO1xuXG5cdFx0dGhpcy5sb2FkRW50aXR5KHRoaXMub3B0aW9ucy5lbnRpdHksIHsgY3R4IDogZWxlbWVudCB9KTtcblx0XHQvKipcblx0XHQgKiBWaWRlbyBodG1sNSBjb21wb25lbnRcblx0XHQgKlxuXHRcdCAqIEBtZW1iZXJvZiEgUGxheWVyI1xuXHRcdCAqIEB0eXBlIHtFbnRpdHl9XG5cdFx0ICovXG5cdFx0dGhpcy52aWRlbyA9IHRoaXMuZW50aXR5O1xuXG5cdFx0Ly8gQ3JlYXRlIGNvbnRyb2xzXG5cdFx0Ly8gVE9ETzogbW92ZSB0aGlzIGFjdGlvbiB0byB0aGUgY3JlYXRlRWxlbWVudFxuXHRcdHRoaXMuY29udHJvbHMgPSB7fTtcblx0XHR0aGlzLl9pbml0Q29udHJvbHMoKTtcblxuXHRcdC8qKlxuXHRcdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdHRoaXMuX2RibGNsaWNrVGltZW91dCA9IG51bGw7XG5cblx0XHR0aGlzLl9pbml0U2VjdGlvbnMoKS50aGVuKChkYXRhKSA9PiB7XG5cdFx0XHR0aGlzLnNlY3Rpb25zID0gZGF0YS5zZWN0aW9uc0NvbXBvbmVudDtcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBTZWN0aW9ucyBpbml0IGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciNzZWN0aW9uc2luaXRcblx0XHRcdCAqIEBleGFtcGxlXG5cdFx0XHQgKiBjb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyKCQoJyN2aWRlbycpLCBvcHRpb25zKTtcblx0XHRcdCAqIHBsYXllci5vbignc2VjdGlvbnNpbml0JywgKGUsIGRhdGEpID0+IGNvc25vbGUubG9nKGRhdGEpKTtcblx0XHRcdCAqXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMudHJpZ2dlcignc2VjdGlvbnNpbml0JywgZGF0YSk7XG5cdFx0fSk7XG5cdFx0dGhpcy5faW5pdFBsdWdpbnMoKTtcblxuXHRcdHRoaXMuX2xpc3RlbkhvdEtleXMoKTtcblxuXHRcdHRoaXMuX3VzZXJBY3Rpdml0eSA9IGZhbHNlO1xuXHRcdHRoaXMuX2xpc3RlblVzZXJBY3Rpdml0eSgpO1xuXG5cdFx0dGhpcy5fd2FpdGluZ1RpbWVvdXRzID0gW107XG5cblx0XHQvKiBSZXRyaWdnZXIge0BsaW5rIEVudGl0eX0gRXZlbnRzICovXG5cdFx0W1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBkdXJhdGlvbmNoYW5nZSBwbGF5ZXIgZXZlbnRcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI2R1cmF0aW9uY2hhbmdlXG5cdFx0XHQgKi9cblx0XHRcdCdkdXJhdGlvbmNoYW5nZScsXG5cblx0XHRcdC8qKlxuXHRcdFx0ICogcHJvZ3Jlc3MgaHRtbDUgbWVkaWEgZXZlbnRcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI3Byb2dyZXNzXG5cdFx0XHQgKi9cblx0XHRcdCdwcm9ncmVzcycsXG5cblx0XHRcdC8qKlxuXHRcdFx0ICogZGJsY2xpY2tcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI2RiY2xpY2tcblx0XHRcdCAqL1xuXHRcdFx0J2RibGNsaWNrJyxcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBkYmxjbGlja1xuXHRcdFx0ICpcblx0XHRcdCAqIEBldmVudCBQbGF5ZXIjZGJjbGlja1xuXHRcdFx0ICovXG5cdFx0XHQnY2xpY2snLFxuXG5cblx0XHRcdC8qKlxuXHRcdFx0ICogY2FucGxheSBodG1sNSBtZWRpYSBldmVudFxuXHRcdFx0ICpcblx0XHRcdCAqIEBldmVudCBQbGF5ZXIjY2FucGxheVxuXHRcdFx0ICovXG5cdFx0XHQnY2FucGxheScsXG5cblx0XHRcdC8qKlxuXHRcdFx0ICogcXVhbGl0eWNoYW5nZSBodG1sNVxuXHRcdFx0ICpcblx0XHRcdCAqIEBldmVudCBQbGF5ZXIjcXVhbGl0eWNoYW5nZVxuXHRcdFx0ICovXG5cdFx0XHQncXVhbGl0eWNoYW5nZSdcblxuXG5cdFx0XS5mb3JFYWNoKGV2ZW50TmFtZSA9PiB7XG5cdFx0XHR0aGlzLnZpZGVvLm9uKGV2ZW50TmFtZSwgKCkgPT4ge1xuXHRcdFx0XHR0aGlzLnRyaWdnZXIoZXZlbnROYW1lKTtcblx0XHRcdH0pXG5cdFx0fSk7XG5cblx0XHR0aGlzLnZpZGVvLm9uZSgncGxheScsICgpID0+IHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRmlyc3QgcGxheSBldmVudFxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBldmVudCBQbGF5ZXIjZmlyc3RwbGF5XG4gICAgICAgICAgICAgKi9cblx0XHRcdHRoaXMudHJpZ2dlcignZmlyc3RwbGF5Jyk7XG5cdFx0XHR0aGlzLnJlbW92ZUNsYXNzKCdsZXBsYXllci0tdmlyZ2luJyk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLnZpZGVvLm9uKCd0aW1ldXBkYXRlJywgKCkgPT4ge1xuXHRcdFx0aWYgKHRoaXMudmlkZW8uY3VycmVudFRpbWUgPiAwKSB7XG5cdFx0XHRcdHRoaXMucmVtb3ZlQ2xhc3MoJ2xlcGxheWVyLS12aXJnaW4nKTtcblx0XHRcdH1cblxuXHRcdFx0LyoqXG5cdFx0XHQgKiB0aW1ldXBkYXRlIGh0bWw1IG1lZGlhIGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciN0aW1ldXBkYXRlXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMudHJpZ2dlcigndGltZXVwZGF0ZScsIHsgdGltZSA6IHRoaXMudmlkZW8uY3VycmVudFRpbWUsIGR1cmF0aW9uIDogdGhpcy52aWRlby5kdXJhdGlvbiB9KTtcblxuXHRcdH0pXG5cblx0XHR0aGlzLnZpZGVvLm9uKCdsb2Fkc3RhcnQnLCAoKSA9PiB7XG5cdFx0XHR0aGlzLnJlbW92ZUNsYXNzKCdsZXBsYXllci0tZW5kZWQnKTtcblxuXHRcdFx0dGhpcy5lcnJvciA9IG51bGw7XG5cdFx0XHQvKipcblx0XHRcdCAqIGxvYWRzdGFydCBwbGF5ZXIgZXZlbnRcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI2xvYWRzdGFydFxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLnRyaWdnZXIoJ2xvYWRzdGFydCcpO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy52aWRlby5vbignc2Vla2luZycsICgpID0+IHtcblx0XHRcdHRoaXMuX3N0YXJ0V2FpdGluZygpO1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBzZWVraW5nIGh0bWw1IG1lZGlhIGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciNzZWVraW5nXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMudHJpZ2dlcignc2Vla2luZycpO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy52aWRlby5vbignc2Vla2VkJywgKCkgPT4ge1xuXHRcdFx0dGhpcy5fc3RvcFdheXRpbmcoKTtcblx0XHRcdC8qKlxuXHRcdFx0ICogc2Vla2VkIGh0bWw1IG1lZGlhIGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciNzZWVrZWRcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdzZWVrZWQnKTtcblx0XHR9KTtcblxuXHRcdHRoaXMudmlkZW8ub24oJ3ZvbHVtZWNoYW5nZScsICgpID0+IHtcblx0XHRcdC8qKlxuXHRcdFx0ICogdm9sdW1lY2hhbmdlIGh0bWw1IG1lZGlhIGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciN2b2x1bWVjaGFuZ2Vcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy50cmlnZ2VyKCd2b2x1bWVjaGFuZ2UnLCB7IHZvbHVtZSA6IHRoaXMudmlkZW8udm9sdW1lIH0pO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy52aWRlby5vbigncG9zdGVyY2hhbmdlJywgKGUsIGRhdGEpID0+IHtcblx0XHRcdGNvbnN0IHVybCA9IGRhdGEudXJsO1xuXHRcdFx0dGhpcy5wb3N0ZXIudXJsID0gdXJsO1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdwb3N0ZXJjaGFuZ2UnKTtcblx0XHR9KTtcblxuXHRcdHRoaXMudmlkZW8ub24oJ3BsYXknLCAoZSkgPT4ge1xuXHRcdFx0dGhpcy5yZW1vdmVDbGFzcygnbGVwbGF5ZXItLWVuZGVkJyk7XG5cdFx0XHR0aGlzLnJlbW92ZUNsYXNzKCdsZXBsYXllci0tcGF1c2VkJyk7XG5cdFx0XHR0aGlzLmFkZENsYXNzKCdsZXBsYXllci0tcGxheWluZycpO1xuXG5cdFx0XHQvKipcblx0XHRcdCAqIHBsYXkgaHRtbDUgbWVkaWEgZXZlbnRcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI3BsYXlcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdwbGF5Jyk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLnZpZGVvLm9uKCdwYXVzZScsICgpID0+IHtcblx0XHRcdHRoaXMucmVtb3ZlQ2xhc3MoJ2xlcGxheWVyLS1wbGF5aW5nJyk7XG5cdFx0XHR0aGlzLmFkZENsYXNzKCdsZXBsYXllci0tcGF1c2VkJyk7XG5cblx0XHRcdC8qKlxuXHRcdFx0ICogcGF1c2UgaHRtbDUgbWVkaWEgZXZlbnRcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI3BhdXNlXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMudHJpZ2dlcigncGF1c2UnKTtcblx0XHR9KTtcblxuXHRcdHRoaXMudmlkZW8ub24oJ3BsYXlpbmcnLCAoKSA9PiB7XG5cdFx0XHR0aGlzLl9zdG9wV2F5dGluZygpO1xuXG5cdFx0XHQvKipcblx0XHRcdCAqIHBsYXlpbmcgaHRtbDUgbWVkaWEgZXZlbnRcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI3BsYXlpbmdcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdwbGF5aW5nJyk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLnZpZGVvLm9uKCdyYXRlY2hhbmdlJywgKCkgPT4ge1xuXHRcdFx0LyoqXG5cdFx0XHQgKiByYXRlIGh0bWw1IG1lZGlhIGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciNyYXRlXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMudHJpZ2dlcigncmF0ZWNoYW5nZScsIHsgcmF0ZSA6IHRoaXMudmlkZW8ucmF0ZSB9KTtcblx0XHR9KTtcblxuXHRcdHRoaXMudmlkZW8ub24oJ2VuZGVkJywgKCkgPT4ge1xuXHRcdFx0dGhpcy5hZGRDbGFzcygnbGVwbGF5ZXItLWVuZGVkJyk7XG5cblx0XHRcdGlmKHRoaXMub3B0aW9ucy5sb29wKSB7XG5cdFx0XHRcdHRoaXMuY3VycmVudFRpbWUgPSAwO1xuXHRcdFx0XHR0aGlzLnZpZGVvLnBsYXkoKTtcblx0XHRcdH0gZWxzZSBpZiAoIXRoaXMudmlkZW8ucGF1c2VkKSB7XG5cdFx0XHRcdHRoaXMudmlkZW8ucGF1c2UoKTtcblx0XHRcdH1cblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBlbmRlZCBodG1sNSBtZWRpYSBldmVudFxuXHRcdFx0ICpcblx0XHRcdCAqIEBldmVudCBQbGF5ZXIjZW5kZWRcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdlbmRlZCcpO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy52aWRlby5vbignY2FucGxheXRocm91Z2gnLCAoKSA9PiB7XG5cdFx0XHR0aGlzLl9zdG9wV2F5dGluZygpO1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBjYW5wbGF5dGhyb3VnaCBodG1sNSBtZWRpYSBldmVudFxuXHRcdFx0ICpcblx0XHRcdCAqIEBldmVudCBQbGF5ZXIjY2FucGxheXRocm91Z2hcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdjYW5wbGF5dGhyb3VnaCcpO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy52aWRlby5vbignd2FpdGluZycsICgpID0+IHtcblx0XHRcdHRoaXMuX3N0YXJ0V2FpdGluZygpO1xuXG5cdFx0XHR0aGlzLnZpZGVvLm9uZSgndGltZXVwZGF0ZScsICgpID0+IHRoaXMuX3N0b3BXYXl0aW5nKCkpO1xuXG5cdFx0XHQvKipcblx0XHRcdCAqIHdhaXRpbmcgaHRtbDUgbWVkaWEgZXZlbnRcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI3dhaXRpbmdcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy50cmlnZ2VyKCd3YWl0aW5nJyk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLnZpZGVvLm9uKCdlcnJvcicsIChlLCBkYXRhKSA9PiB7XG5cdFx0XHR0aGlzLmVycm9yID0gbmV3IE1lZGlhRXJyb3IoZGF0YS5jb2RlKTtcblx0XHR9KTtcblxuXHRcdHRoaXMudmlkZW8uaW5pdCgpLnRoZW4oKCkgPT4ge1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBQbGF5ZXIgaW5pdCBldmVudFxuXHRcdFx0ICpcblx0XHRcdCAqIEBldmVudCBQbGF5ZXIjaW5pdGVkXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMudHJpZ2dlcignaW5pdGVkJyk7XG5cblx0XHRcdGlmKHRoaXMub3B0aW9ucy50aW1lKSB7XG5cdFx0XHRcdHRoaXMuY3VycmVudFRpbWUgPSB0aGlzLm9wdGlvbnMudGltZTtcblx0XHRcdH1cblxuXHRcdFx0aWYodGhpcy52aWRlby5zcmMgIT0gbnVsbCAmJiB0aGlzLm9wdGlvbnMuYXV0b3BsYXkpIHtcblx0XHRcdFx0dGhpcy5wbGF5KCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblxuXHRcdHRoaXMub24oJ2Z1bGxzY3JlZW5jaGFuZ2UnLCB0aGlzLl9vbkZ1bGxzY3JlZW5DaGFuZ2UuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5vbignY2xpY2snLCB0aGlzLl9vbkNsaWNrLmJpbmQodGhpcykpO1xuXHRcdHRoaXMub24oJ2RibGNsaWNrJywgdGhpcy5fb25EYmNsaWNrLmJpbmQodGhpcykpO1xuXHRcdHRoaXMub24oJ2luaXRlZCcsIHRoaXMuX29uSW5pdGVkLmJpbmQodGhpcykpO1xuXHRcdHRoaXMub24oJ3BsYXknLCB0aGlzLl9vblBsYXkuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5vbigncGF1c2UnLCB0aGlzLl9vblBhdXNlLmJpbmQodGhpcykpO1xuXG5cdFx0JChkb2N1bWVudCkub24oRnVsbHNjcmVlbkFwaS5mdWxsc2NyZWVuY2hhbmdlLCB0aGlzLl9vbkVudGl0eUZ1bGxzY3JlbkNoYW5nZS5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdGdldCBlbnRpdHkoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2VudGl0eTtcblx0fVxuXG5cdGxvYWRFbnRpdHkobmFtZSwgb3B0aW9ucykge1xuXHRcdGNvbnN0IEVudGl0eSA9IFBsYXllci5nZXRDb21wb25lbnQobmFtZSk7XG5cdFx0dGhpcy5fZW50aXR5ID0gbmV3IEVudGl0eSh0aGlzLCBvcHRpb25zKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTdGFydHMgcGxheWluZyB0aGUgdmlkZW9cblx0ICpcblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQGV4YW1wbGVcblx0ICogY29uc3QgcGxheWVyID0gbmV3IFBsYXllcigkKFwiI3ZpZGVvXCIpLG9wdGlvbnMpO1xuXHQgKiAkKCcuc29tZS1idXR0b24nKS5vbignY2xpY2snLCAoKSA9PiBwbGF5ZXIucGxheSgpKTtcblx0ICovXG5cdHBsYXkoKSB7XG5cdFx0cmV0dXJuIHRoaXMudmlkZW8ucGxheSgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFBhdXNlcyB0aGUgY3VycmVudGx5IHBsYXlpbmcgdmlkZW9cblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICovXG5cdHBhdXNlKCkge1xuXHRcdHJldHVybiB0aGlzLnZpZGVvLnBhdXNlKCk7XG5cdH1cblxuXHQvKipcblx0ICogVG9nZ2xlIHRoZSBjdXJyZW50bHkgcGxheWluZyB2aWRlb1xuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKi9cblx0dG9nZ2xlUGxheSgpIHtcblx0XHRyZXR1cm4gdGhpcy52aWRlby50b2dnbGVQbGF5KCk7XG5cdH1cblxuXHQvKipcblx0ICogQmVnaW4gbG9hZGluZyB0aGUgc3JjIGRhdGFcblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICovXG5cdGxvYWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMudmlkZW8ubG9hZCgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIE9uIHNldCB2aWV3IGNhbGxiYWNrXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSB2aWV3IFZpZXcgbmFtZVxuXHQgKiBAcmV0dXJucyB7UGxheWVyfSB0aGlzXG5cdCAqIEBleGFtcGxlXG5cdCAqIGNvbnN0IHBsYXllciA9IG5ldyBQbGF5ZXIoJCgnI3ZpZGVvJyksIG9wdGlvbnMpO1xuXHQgKiBwbGF5ZXIub25TZXRWaWV3KCdtaW5pJywgKCkgPT4gY29uc29sZS5sb2coJ01pbmlwbGF5ZXIgeWVhaCEnKVxuXHQgKiAgICAgLm9uU2V0VmlldygnZnVsbHNjcmVlbicsICgpID0+IGNvbnNvbGUubG9nKCdGdWxsc2NyZWVuIGJvb20hJylcblx0ICogICAgIC5vblNldFZpZXcoJ2NvbW1vbicsICgpID0+IGNvbnNvbGUubG9nKCdDb21tb24gdmlldyAtIGxvbCcpO1xuXHQgKi9cblx0b25TZXRWaWV3KHZpZXcsIC4uLmFyZ3MpIHtcblx0XHR0aGlzLm9uKGBzZXR2aWV3LiR7dmlld31gLCAuLi5hcmdzKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0LyoqXG5cdCAqIE9uIGRlbCB2aWV3IGNhbGxiYWNrXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSB2aWV3IFZpZXcgbmFtZVxuXHQgKiBAcmV0dXJucyB7UGxheWVyfSB0aGlzXG5cdCAqIEBleGFtcGxlXG5cdCAqIGNvbnN0IHBsYXllciA9IG5ldyBQbGF5ZXIoJCgnI3ZpZGVvJyksIG9wdGlvbnMpO1xuXHQgKiBwbGF5ZXIub25EZWxWaWV3KCdtaW5pJywgKCkgPT4gY29uc29sZS5sb2coJ0V4aXQgbWluaXBsYXllcicpXG5cdCAqL1xuXHRvbkRlbFZpZXcodmlldywgLi4uYXJncykge1xuXHRcdHRoaXMub24oYGRlbHZpZXcuJHt2aWV3fWAsIC4uLmFyZ3MpO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHNvbWUgZGF0YSBmb3IgcGxheWVyXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEByZXR1cm5zIHtqUXVlcnkucHJvbWlzZX0gUHJvbWlzZVxuXHQgKi9cblx0Z2V0RGF0YSgpIHtcblx0XHRjb25zdCBkZmQgPSBuZXcgJC5EZWZlcnJlZCgpO1xuXG5cdFx0aWYgKHRoaXMuX2RhdGEgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0ZGZkLnJlc29sdmUodGhpcy5fZGF0YSk7XG5cdFx0XHRyZXR1cm4gZGZkLnByb21pc2UoKVxuXHRcdH1cblxuXHRcdGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmRhdGEgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRyZXR1cm4gJC5hamF4KHtcblx0XHRcdFx0dXJsIDogdGhpcy5vcHRpb25zLmRhdGEsXG5cdFx0XHRcdG1ldGhvZCA6ICdHRVQnLFxuXHRcdFx0XHRkYXRhVHlwZSA6ICdqc29uJ1xuXHRcdFx0fSkucHJvbWlzZSgpO1xuXG5cdFx0fSBlbHNlIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmRhdGEgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRkZmQucmVzb2x2ZSh0aGlzLm9wdGlvbnMuZGF0YSk7XG5cdFx0XHRyZXR1cm4gZGZkLnByb21pc2UoKVxuXHRcdH1cblx0fVxuXG5cdGdldFNlY3Rpb25EYXRhKCkge1xuXHRcdHJldHVybiB0aGlzLmdldERhdGEoKVxuXHRcdFx0LnRoZW4oZGF0YSA9PiB7XG5cdFx0XHRcdHJldHVybiBkYXRhLnNlY3Rpb25zXG5cdFx0XHR9KVxuXHR9XG5cblx0LyoqXG5cdCAqIFJlcXVlc3QgZnVsbHNjcmVlblxuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAZmlyZXMgUGxheWVyI2Z1bGxzY3JlZW5jaGFuZ2Vcblx0ICovXG5cdHJlcXVlc3RGdWxsc2NyZWVuKCkge1xuXHRcdGNvbnN0IGZzQXBpID0gRnVsbHNjcmVlbkFwaTtcblxuXHRcdGlmKGZzQXBpLnJlcXVlc3RGdWxsc2NyZWVuKSB7XG5cdFx0XHQvLyBDYWxsIEhUTUw1IFZpZGVvIGFwaSByZXF1ZXN0RnVsbHNjcmVlblxuXHRcdFx0dGhpcy5lbGVtZW50WzBdW2ZzQXBpLnJlcXVlc3RGdWxsc2NyZWVuXSgpO1xuXG5cdFx0XHQvKipcblx0XHRcdCAqIGZ1bGxzY3JlZW5jaGFuZ2UgaHRtbDUgbWVkaWEgZXZlbnRcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI2Z1bGxzY3JlZW5jaGFuZ2Vcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdmdWxsc2NyZWVuY2hhbmdlJywgdHJ1ZSk7XG5cdFx0fSBlbHNlIGlmICh0aGlzLnZpZGVvLnN1cHBvcnRzRnVsbFNjcmVlbigpKSB7XG5cdFx0XHR0aGlzLnZpZGVvLmVudGVyRnVsbHNjcmVlbigpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBFeGl0IGZ1bGxzY3JlZW5cblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQGZpcmVzIFBsYXllciNmdWxsc2NyZWVuY2hhbmdlXG5cdCAqL1xuXHRleGl0RnVsbHNjcmVlbigpIHtcblx0XHRjb25zdCBmc0FwaSA9IEZ1bGxzY3JlZW5BcGk7XG5cblx0XHRpZihmc0FwaS5leGl0RnVsbHNjcmVlbikge1xuXHRcdFx0ZG9jdW1lbnRbZnNBcGkuZXhpdEZ1bGxzY3JlZW5dKCk7XG5cdFx0fSBlbHNlIGlmICh0aGlzLnZpZGVvLnN1cHBvcnRzRnVsbFNjcmVlbigpKSB7XG5cdFx0XHR0aGlzLnZpZGVvLmV4aXRGdWxsc2NyZWVuKCk7XG5cdFx0fVxuXG5cdFx0dGhpcy50cmlnZ2VyKCdmdWxsc2NyZWVuY2hhbmdlJywgZmFsc2UpO1xuXG5cdH1cblxuXHQvKipcblx0ICogVG9nZ2xlIGZ1bGxzY3JlZW5cblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQGZpcmVzIFBsYXllciNmdWxsc2NyZWVuY2hhbmdlXG5cdCAqL1xuXHR0b2dnbGVGdWxsc2NyZWVuKCkge1xuXHRcdGlmKHRoaXMudmlldyA9PT0gJ2Z1bGxzY3JlZW4nKSB7XG5cdFx0XHR0aGlzLmV4aXRGdWxsc2NyZWVuKClcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5yZXF1ZXN0RnVsbHNjcmVlbigpXG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBDb250cm9sQ29sbGVjdGlvbiBvZiBQbGF5ZXIgYnkgbmFtZSAoZS54ICdjb21tb24nLCAnZnVsbHNjcmVlbicpXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIC0gTmFtZSBvZiBDb250cm9sQ29sbGVjdGlvblxuXHQgKiBAcmV0dXJucyB7Q29udHJvbENvbGxlY3Rpb259XG5cdCAqL1xuXHRnZXRDb250cm9scyhuYW1lKSB7XG5cdFx0cmV0dXJuIHRoaXMuY29udHJvbHNbbmFtZV07XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJuIHRoZSB3aWR0aCBvZiBwbGF5ZXIuXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEByZXR1cm5zIHtOdW1iZXJ9IFdpZHRoIGluIHB4XG5cdCAqL1xuXHRnZXRXaWR0aCgpIHtcblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50LndpZHRoKClcblx0fVxuXG5cdC8qKlxuXHQgKiBDb21wbGV0ZSB0aGUgc2VjdGlvbnMsIGJ5IHRoZSBhZGRpdGlvbmFsIGZpZWxkICdlbmQnIGluIGVhY2ggc2VjdGlvblxuXHQgKlxuXHQgKiBAYWNjZXNzIHByaXZhdGVcblx0ICogQHBhcmFtIHtPYmplY3R9IHNlY3Rpb25zIC0gU2VjdGlvbnNcblx0ICogQHJldHVybnMge09iamVjdH0gTmV3IHNlY3Rpb25zXG5cdCAqL1xuXHRfY29tcGxldGVTZWN0aW9ucyhzZWN0aW9ucykge1xuXHRcdGlmIChzZWN0aW9ucyA9PSBudWxsIHx8IHNlY3Rpb25zLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuXG5cdFx0fVxuXHRcdGxldCBuZXdTZWN0aW9ucyA9IFtdLmNvbmNhdChzZWN0aW9ucylcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG5ld1NlY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRsZXQgZW5kU2VjdGlvbjtcblx0XHRcdGlmIChpIDwgKG5ld1NlY3Rpb25zLmxlbmd0aCAtIDEpKSB7XG5cdFx0XHRcdGVuZFNlY3Rpb24gPSBuZXdTZWN0aW9uc1tpKzFdLmJlZ2luXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRlbmRTZWN0aW9uID0gdGhpcy52aWRlby5kdXJhdGlvbjtcblx0XHRcdH1cblx0XHRcdG5ld1NlY3Rpb25zW2ldLmVuZCA9IGVuZFNlY3Rpb247XG5cdFx0fVxuXHRcdHJldHVybiBuZXdTZWN0aW9ucztcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgYW5kIHNldCB0aGUgY3VycmVudCBwbGF5YmFjayBwb3NpdGlvbiBpbiB0aGUgYXVkaW8vdmlkZW8gKGluIHNlY29uZHMpXG5cdCAqIEdldHRlciBhbmQgc2V0dGVyXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBtZW1iZXJvZiEgUGxheWVyI1xuXHQgKiBAdHlwZSB7TnVibWVyfVxuXHQgKi9cblx0Z2V0IGN1cnJlbnRUaW1lKCkge1xuXHRcdHJldHVybiB0aGlzLnZpZGVvLmN1cnJlbnRUaW1lO1xuXHR9XG5cblx0c2V0IGN1cnJlbnRUaW1lKHZhbHVlKSB7XG5cdFx0dGhpcy52aWRlby5jdXJyZW50VGltZSA9IHZhbHVlO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgdGhlIGxlbmd0aCBvZiB0aGUgY3VycmVudCBhdWRpby92aWRlbyAoaW4gc2Vjb25kcylcblx0ICogR2V0dGVyXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBtZW1iZXJvZiEgUGxheWVyI1xuXHQgKiBAdHlwZSB7TnVibWVyfVxuXHQgKi9cblx0Z2V0IGR1cmF0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLnZpZGVvLmR1cmF0aW9uO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgd2hldGhlciB0aGUgcGxheWJhY2sgb2YgdGhlIGF1ZGlvL3ZpZGVvIGhhcyBlbmRlZCBvciBub3Rcblx0ICogR2V0dGVyXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiEgUGxheWVyI1xuXHQgKiBAdHlwZSB7Qm9vbGVhbn1cblx0ICovXG5cdGdldCBlbmRlZCgpIHtcblx0XHRyZXR1cm4gdGhpcy52aWRlby5lbmRlZDtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIGFuZCBzZXQgd2hldGhlciB0aGUgcGxheWJhY2sgb2YgdGhlIGF1ZGlvL3ZpZGVvIGhhcyBlbmRlZCBvciBub3Rcblx0ICogR2V0dGVyIGFuZCBzZXR0ZXJcblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQG1lbWJlcm9mISBQbGF5ZXIjXG5cdCAqIEB0eXBlIHtNZWRpYUVycm9yfFN0cmluZ31cblx0ICogQGZpcmVzIFBsYXllciNlcnJvclxuXHQgKi9cblx0Z2V0IGVycm9yKCkge1xuXHRcdHJldHVybiB0aGlzLl9lcnJvciB8fCBudWxsO1xuXHR9XG5cblx0c2V0IGVycm9yKHZhbHVlKSB7XG5cdFx0aWYgKHZhbHVlID09PSBudWxsKSB7XG5cdFx0XHR0aGlzLl9lcnJvciA9IG51bGw7XG5cdFx0XHR0aGlzLnJlbW92ZUNsYXNzKCdsZXBsYXllci0tZXJyb3InKTtcblx0XHRcdGlmKHRoaXMuZXJyb3JEaXNwbGF5KSB7XG5cdFx0XHRcdHRoaXMuZXJyb3JEaXNwbGF5LmVsZW1lbnQuaGlkZSgpXG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cdFx0dGhpcy5fZXJyb3IgPSBuZXcgTWVkaWFFcnJvcih2YWx1ZSk7XG5cblx0XHR0aGlzLmFkZENsYXNzKCdsZXBsYXllci0tZXJyb3InKTtcblxuXHRcdC8qKlxuXHRcdCAqIGVycm9yIGV2ZW50XG5cdFx0ICpcblx0XHQgKiBAZXZlbnQgUGxheWVyI2Vycm9yXG5cdFx0ICogQHByb3BlcnR5IHtNZWRpYUVycm9yfSBlcnJvclxuXHRcdCAqIEBleGFtcGxlXG5cdFx0ICogY29uc3QgcGxheWVyID0gbmV3IFBsYXllcigkKCcjdmlkZW8nKSwgb3B0aW9ucyk7XG5cdFx0ICogcGxheWVyLm9uKCdlcnJvcicsIChlLCBkYXRhKSA9PiBjb25zb2xlLmVycm9yKGRhdGEuZXJyb3IpKTtcblx0XHQgKi9cblx0XHR0aGlzLnRyaWdnZXIoJ2Vycm9yJywgeyBlcnJvciA6IHRoaXMuX2Vycm9yfSk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm4gdGhlIGhlaWdodCBvZiBwbGF5ZXIuIElmIHlvdSB3YW50IGdldCBoZWlnaHQgb25seSBvZiB2aWRlbyBlbGVtZW50LCB1c2UgdGhpcy52aWRlby5oZWlnaHQgb3Igd2hhdGV2ZXJcblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHR5cGUge051bWJlcn1cblx0ICogQG1lbWJlcm9mISBQbGF5ZXIjXG5cdCAqL1xuXHRnZXQgaGVpZ2h0KCkge1xuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQuaGVpZ2h0KClcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm4gdW5uZWNlc3NhcnkgdmlkZW8gaGVpZ3RoXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEB0eXBlIHtOdW1iZXJ9XG5cdCAqIEBtZW1iZXJvZiEgUGxheWVyI1xuXHQgKi9cblx0Z2V0IHZpZGVvSGVpZ2h0KCkge1xuXHRcdHJldHVybiB0aGlzLnZpZGVvLmhlaWdodDtcblx0fVxuXG5cblx0LyoqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEB0eXBlIHtCb29sZWFufVxuXHQgKiBAbWVibWVyb2YhIFBsYXllciNcblx0ICovXG5cdGdldCB1c2VyQWN0aXZlKCkge1xuXHRcdHJldHVybiB0aGlzLl91c2VyQWN0aXZlIHx8IGZhbHNlO1xuXHR9XG5cblx0c2V0IHVzZXJBY3RpdmUodmFsdWUpIHtcblx0XHRpZih2YWx1ZSAhPT0gdGhpcy5nZXRVc2VyQWN0aXZlKSB7XG5cdFx0XHR0aGlzLl91c2VyQWN0aXZlID0gdmFsdWU7XG5cdFx0XHR0aGlzLnRvZ2dsZUNsYXNzKCdsZXBsYXllci0tdXNlci1hY3RpdmUnLCB2YWx1ZSk7XG5cdFx0XHQvKipcblx0XHRcdCAqIFVzZXIgYWN0aXZlIGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciN1c2VyYWN0aXZlXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMudHJpZ2dlcigndXNlcmFjdGl2ZScpO1xuXHRcdH1cblx0fVxuXG5cblx0LyoqXG5cdCAqIFNldCBhbmQgZ2V0IHBsYXllciB2aWV3LiBWaWV3IENhbiBiZSAnY29tbW9uJywgJ2Z1bGxzY3JlZW4nLCAnbWluaSd3XG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEB0eXBlIHtTdHJpbmd9XG5cdCAqIEBtZW1iZXJvZiEgUGxheWVyI1xuXHQgKi9cblx0Z2V0IHZpZXcoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3ZpZXc7XG5cdH1cblxuXHRzZXQgdmlldyh2aWV3KSB7XG5cdFx0aWYodGhpcy52aWV3ICE9IG51bGwpIHtcblx0XHRcdHRoaXMucmVtb3ZlQ2xhc3MoYGxlcGxheWVyLS0ke3RoaXMudmlld31gKTtcblx0XHRcdHRoaXMudHJpZ2dlcihgZGVsdmlldy4ke3RoaXMudmlld31gKTtcblx0XHR9XG5cblx0XHR0aGlzLl92aWV3ID0gdmlldztcblx0XHR0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoYGxlcGxheWVyLS0ke3ZpZXd9YClcblx0XHR0aGlzLnRyaWdnZXIoYHNldHZpZXcuJHt2aWV3fWApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvKipcblx0ICogUmVtb3ZlIHVubmVjZXNzYXJ5IGF0dHJpYnV0ZXMsIGFuZCBzZXQgc29tZSBhdHRycyBmcm9tIG9wdGlvbnMgKGxvb3AsIHBvc3RlciBldGMuLi4pLiBDcmVhdGUgbWFpbiBET00gb2JqZWN0c1xuXHQgKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0Y29uc3Qgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcblx0XHRjb25zdCBlbGVtZW50ID0gdGhpcy5fZWxlbWVudDtcblxuXHRcdHRoaXMuZWxlbWVudCA9IGNyZWF0ZUVsKCdkaXYnKTtcblxuXG5cdFx0dGhpcy5lbGVtZW50ID0gdGhpcy5lbGVtZW50XG5cdFx0XHQuYWRkQ2xhc3MoJ2xlcGxheWVyJylcblx0XHRcdC5hdHRyKCd0YWJpbmRleCcsIDApXG5cdFx0XHQuY3NzKCd3aWR0aCcsIG9wdGlvbnMud2lkdGggJiYgJzEwMCUnKVxuXHRcdFx0LmNzcygnbWF4LXdpZHRoJywgb3B0aW9ucy53aWR0aClcblxuXHRcdC8qKlxuXHRcdCAqIEVycm9yIGRpc3BsYXkgY29tcG9uZW50LlxuXHRcdCAqXG5cdFx0ICogQHR5cGUge0Vycm9yRGlzcGxheX1cblx0XHQgKiBAbWVtYmVyb2YhIFBsYXllciNcblx0XHQgKi9cblx0XHR0aGlzLmVycm9yRGlzcGxheSA9IG5ldyBFcnJvckRpc3BsYXkodGhpcyk7XG5cblxuXHRcdC8qKlxuXHRcdCAqIFBsYXkgYnV0dG9uIGNvbXBvbmVudC5cblx0XHQgKlxuXHRcdCAqIEB0eXBlIHtQbGF5QnV0dG9ufVxuXHRcdCAqIEBtZW1iZXJvZiEgUGxheWVyI1xuXHRcdCAqL1xuXHRcdHRoaXMucGxheUJ1dHRvbiA9IG5ldyBQbGF5QnV0dG9uKHRoaXMpO1xuXG5cdFx0Ly8gVE9ETzog0JLRi9C90LXRgdGC0Lgg0Y3RgtC+INCyINC+0YLQtNC10LvRjNC90LXRi9C5INC60L7QvNC/0L7QvdC10L3RglxuXHRcdHRoaXMubG9hZGVyID0gJCgnPGRpdiAvPicpXG5cdFx0XHQuYWRkQ2xhc3MoJ2xlcGxheWVyLWxvYWRlci1jb250YWluZXInKVxuXHRcdFx0LmFwcGVuZChuZXcgSWNvbih0aGlzLCB7XG5cdFx0XHRcdGljb25OYW1lIDogJ3JlZnJlc2gnLFxuXHRcdFx0XHRjbGFzc05hbWUgOiAnbGVwbGF5ZXItbG9hZGVyLWNvbnRhaW5lcl9faWNvbidcblx0XHRcdH0pLmVsZW1lbnQpO1xuXG5cblx0XHQvKipcblx0XHQgKiBTcGxhc2ggaWNvbiBjb21wb25lbnQuXG5cdFx0ICpcblx0XHQgKiBAdHlwZSB7U3BsYXNoSWNvbn1cblx0XHQgKiBAbWVtYmVyb2YhIFBsYXllciNcblx0XHQgKi9cblx0XHR0aGlzLnNwbGFzaEljb24gPSBuZXcgU3BsYXNoSWNvbih0aGlzKTtcblxuXHRcdHRoaXMudmlkZW9Db250YWluZXIgPSBjcmVhdGVFbCgnZGl2Jywge1xuXHRcdFx0Y2xhc3NOYW1lIDogJ2xlcGxheWVyLXZpZGVvJ1xuXHRcdH0pXG5cdFx0LmFwcGVuZCh0aGlzLmVycm9yRGlzcGxheS5lbGVtZW50KVxuXHRcdC5hcHBlbmQodGhpcy5wbGF5QnV0dG9uLmVsZW1lbnQpXG5cdFx0LmFwcGVuZCh0aGlzLmxvYWRlcilcblx0XHQuYXBwZW5kKHRoaXMuc3BsYXNoSWNvbi5lbGVtZW50KVxuXG5cdFx0dGhpcy5wb3N0ZXIgPSBuZXcgUG9zdGVyKHRoaXMpO1xuXHRcdHRoaXMudmlkZW9Db250YWluZXIuYXBwZW5kKHRoaXMucG9zdGVyLmVsZW1lbnQpO1xuXG5cblx0XHRjb25zdCBsYXN0VGltZXIgPSBuZXcgVGltZSh0aGlzLCB7XG5cdFx0XHRmbiA6IChwbGF5ZXIpID0+IHtcblx0XHRcdFx0Y29uc3QgdmlkZW8gPSBwbGF5ZXIudmlkZW87XG5cdFx0XHRcdHJldHVybiBzZWNvbmRzVG9UaW1lKHZpZGVvLmR1cmF0aW9uIC0gdmlkZW8uY3VycmVudFRpbWUpO1xuXHRcdFx0fVxuXHRcdH0pXG5cblx0XHRpZih0aGlzLm9wdGlvbnMudmlkZW9JbmZvKSB7XG5cdFx0XHRjb25zb2xlLndhcm4oJ29wdGlvbnMudmlkZW9JbmZvIGlzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2UgaXN0ZWFkIG9wdGlvbnMuZGVzY3JpcHRpb24nKTtcblx0XHR9XG5cblx0XHR0aGlzLmluZm9FbGVtZW50ID0gY3JlYXRlRWwoJ2RpdicsIHtcblx0XHRcdGNsYXNzTmFtZSA6ICdsZXBsYXllcl9faW5mbydcblx0XHR9KVxuXHRcdC5hcHBlbmQoY3JlYXRlRWwoJ2RpdicsIHtcblx0XHRcdGNsYXNzTmFtZSA6ICdsZXBsYXllcl9fdGl0bGUnLFxuXHRcdFx0aHRtbCA6IHRoaXMub3B0aW9ucy50aXRsZSB8fCBcIlwiXG5cdFx0fSkpXG5cdFx0LmFwcGVuZChjcmVhdGVFbCgnZGl2Jywge1xuXHRcdFx0Y2xhc3NOYW1lIDogJ2xlcGxheWVyX192aWRlby1pbmZvJyxcblx0XHRcdGh0bWwgOiB0aGlzLm9wdGlvbnMuZGVzY3JpcHRpb24gfHwgdGhpcy5vcHRpb25zLnZpZGVvSW5mbyB8fCBcIlwiXG5cdFx0fSkpXG5cdFx0LmFwcGVuZChjcmVhdGVFbCgnZGl2Jywge1xuXHRcdFx0Y2xhc3NOYW1lIDogJ2xlcGxheWVyX19sYXN0Jyxcblx0XHRcdGh0bWwgOiBg0JLQuNC00LXQviDQt9Cw0LrQvtC90YfQuNGC0YHRjyDRh9C10YDQtdC3IGAsXG5cdFx0fSkuYXBwZW5kKGxhc3RUaW1lci5lbGVtZW50KSlcblxuXHRcdHRoaXMuaW5uZXJFbGVtZW50ID0gJCgnPGRpdiAvPicpXG5cdFx0XHQuYWRkQ2xhc3MoJ2xlcGxheWVyX19pbm5lcicpXG5cdFx0XHQuYXBwZW5kKHRoaXMudmlkZW9Db250YWluZXIpXG5cdFx0XHQuYXBwZW5kKHRoaXMuaW5mb0VsZW1lbnQpXG5cblx0XHR0aGlzLmVsZW1lbnQgPSB0aGlzLmVsZW1lbnRcblx0XHRcdC5hcHBlbmQodGhpcy5pbm5lckVsZW1lbnQpXG5cblx0XHR0aGlzLmFkZENsYXNzKCdsZXBsYXllci0tcGF1c2VkJyk7XG5cdFx0dGhpcy5hZGRDbGFzcygnbGVwbGF5ZXItLXZpcmdpbicpO1xuXG5cblx0XHRpZihvcHRpb25zLnNlY3Rpb25Db250YWluZXIpIHtcblx0XHRcdHRoaXMuc2VjdGlvbnNDb250YWluZXIgPSAkKG9wdGlvbnMuc2VjdGlvbkNvbnRhaW5lcik7XG5cdFx0fVxuXG5cdFx0ZWxlbWVudC5iZWZvcmUodGhpcy5lbGVtZW50KTtcblx0XHR0aGlzLnZpZGVvQ29udGFpbmVyLmFwcGVuZChlbGVtZW50KTtcblxuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQ7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IG9wdGlvbnMgZnJvbSB2aWRlbydzIGF0dHJpYnV0ZSAoIGhlaWdodCwgd2lkdGgsIHBvc3RlciwgcHJlbG9hZCBldGMuLi4pXG5cdCAqIEdldCBzb3VyY2UgdmlkZW8gZnJvbSBzcmMgYXR0ciBvciA8c291cmNlPiBlbGVtZW50IHdpdGggZGF0YSBhdHRyICdkYXRhLXF1YWxpdHknXG5cdCAqIEFsc28gZ2V0IHNvdXJjZXMgZm9yIGRpZmZlcmVudCBxdWFsaXR5IGZyb20gPHNvdXJjZT4gZWxlbWVudCB3aXRoIGRhdGEgYXR0ciAnZGF0YS1xdWFsaXR5J1xuXHQgKlxuXHQgKiBAYWNjZXNzIHByaXZhdGVcblx0ICogQHJldHVybnMge09iamVjdH0gb3B0aW9uc1xuXHQgKi9cblx0X29wdGlvbnNGcm9tRWxlbWVudCgpIHtcblx0XHQvLyBDb3B5IHZpZGVvIGF0dHJzIHRvIHRoZSBvcGl0b25zXG5cdFx0Y29uc3QgIGVsZW1lbnQgPSB0aGlzLl9lbGVtZW50O1xuXHRcdGlmIChlbGVtZW50ID09IG51bGwgfHwgZWxlbWVudC5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybiB7fVxuXHRcdH1cblxuXHRcdGxldCBhdHRyT3B0aW9ucyA9IFtcblx0XHRcdCdoZWlnaHQnLFxuXHRcdFx0J3dpZHRoJyxcblx0XHRcdCdwb3N0ZXInLFxuXHRcdFx0J2F1dG9wbGF5Jyxcblx0XHRcdCdsb29wJyxcblx0XHRcdCdtdXRlZCcsXG5cdFx0XHQncHJlbG9hZCcsXG5cdFx0XVxuXHRcdC5yZWR1Y2UoKG9iaiwgaXRlbSkgPT4ge1xuXHRcdFx0Y29uc3QgdmFsID0gZWxlbWVudC5hdHRyKGl0ZW0pO1xuXHRcdFx0aWYodmFsICE9IG51bGwpIHtcblx0XHRcdFx0b2JqW2l0ZW1dID0gZWxlbWVudC5hdHRyKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG9iajtcblx0XHR9LCB7fSk7XG5cblx0XHRhdHRyT3B0aW9ucy5zb3VyY2VzID0gW107XG5cblx0XHQvLyBTcmMgaXQgaXMgbWFpbiBzb3VyY2UsIHRoYXQgd2lsbCBiZSBsb2FkXG5cdFx0aWYoZWxlbWVudC5hdHRyKCdzcmMnKSkge1xuXHRcdFx0YXR0ck9wdGlvbnMuc3JjID0ge1xuXHRcdFx0XHR1cmwgOiBlbGVtZW50LmF0dHIoJ3NyYycpLFxuXHRcdFx0XHR0aXRsZSA6IGVsZW1lbnQuYXR0cignZGF0YS1xdWFsaXR5JykgfHwgZWxlbWVudC5hdHRyKCd0aXRsZScpIHx8ICdkZWZhdWx0J1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIENvcHkgc291cmNlcyBmcm9tIEhUTUw1IHNvdXJjZSBlbGVtZW50IHdpdGggZGF0YS1xdWFsaXR5IGF0dHJcblx0XHQvLyBJZiBkYXRhLXF1YWxpdHkgYXR0ciBkb2VzIG5vdCBleGlzdCAtIG5vXG5cdFx0ZWxlbWVudC5maW5kKCdzb3VyY2UnKS5lYWNoKChpLCBpdGVtKSA9PiB7XG5cdFx0XHRpdGVtID0gJChpdGVtKTtcblx0XHRcdGlmKCFpdGVtLmF0dHIoJ2RhdGEtcXVhbGl0eScpKSB7XG5cdFx0XHRcdHJldHVyblxuXHRcdFx0fVxuXHRcdFx0YXR0ck9wdGlvbnMuc291cmNlcyA9IGF0dHJPcHRpb25zLnNvdXJjZXMuY29uY2F0KHtcblx0XHRcdFx0dXJsIDogaXRlbS5hdHRyKCdzcmMnKSxcblx0XHRcdFx0dGl0bGUgOiBpdGVtLmF0dHIoJ2RhdGEtcXVhbGl0eScpIHx8IGl0ZW0uYXR0cigndGl0bGUnKSB8fCAnZGVmYXVsdCdcblx0XHRcdH0pXG5cblx0XHR9KTtcblxuXHRcdHJldHVybiBhdHRyT3B0aW9ucztcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm4gYSBuYW1lIG9mIGljb24uIElmIGxlc3MgdGhlbiAwLjEgcmV0dXJuIHZvbHVtZS1vZmYsXG5cdCAqIGlmIGxlc3MgdGhlbiAwLjUgcmV0dXJuIHZvbHVtZSBkb3duLCBlbHNlIHJldHVybiB2b2x1bWUtdXBcblx0ICpcblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZSBWb2x1bWUgdmFsdWVcblx0ICogQHJldHVybnMge1N0cmluZ30gSWNvbiBuYW1lXG5cdCAqL1xuXHRjYWxjVm9sdW1lSWNvbih2YWx1ZSkge1xuXHRcdGlmKHZhbHVlID09IG51bGwpIHtcblx0XHRcdHZhbHVlID0gdGhpcy52aWRlby52b2x1bWU7XG5cdFx0fVxuXHRcdGNvbnN0IHZvbHVtZSA9IHZhbHVlO1xuXG5cdFx0aWYgKHZvbHVtZSA8IHRoaXMub3B0aW9ucy52b2x1bWUubXV0ZWxpbWl0KSB7XG5cdFx0XHRyZXR1cm4gJ3ZvbHVtZS1vZmYnO1xuXHRcdH0gZWxzZSBpZiAodmFsdWUgPCAwLjUpIHtcblx0XHRcdHJldHVybiAndm9sdW1lLWRvd24nO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gJ3ZvbHVtZS11cCc7XG5cdFx0fVxuXHR9XG5cblxuXG5cdC8qKlxuXHQgKiBNZXJnZSBkZWZhdWx0T3B0aW9ucywgcHJlc2V0T3B0aW9ucyB3aXRoIGF0dHJPcHRpb25zIGFuZCB1c2VyJ3Mgb3B0aW9ucztcblx0ICpcblx0ICogQW5kIGNvbXBsZW1lbnQgdHdvIG9iamVjdHM6IGNvbnRyb2xzIGFuZCBleGNsdWRlQ29udHJvbHNcblx0ICpcblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqL1xuXHRfaW5pdE9wdGlvbnMoKSB7XG5cdFx0Y29uc3QgYXR0ck9wdGlvbnMgPSB0aGlzLl9vcHRpb25zRnJvbUVsZW1lbnQoKTtcblx0XHRsZXQgcHJlc2V0T3B0aW9ucyA9IHt9O1xuXG5cdFx0aWYgKHRoaXMuX3VzZXJPcHRpb25zLnByZXNldCAmJiBQbGF5ZXIuZ2V0UHJlc2V0KHRoaXMuX3VzZXJPcHRpb25zLnByZXNldCkpIHtcblx0XHRcdHByZXNldE9wdGlvbnMgPSBQbGF5ZXIuZ2V0UHJlc2V0KHRoaXMuX3VzZXJPcHRpb25zLnByZXNldCkub3B0aW9ucztcblx0XHR9XG5cblxuXHRcdC8vIE1lcmdlIGRlZmF1bHQgb3B0aW9ucyArIHByZXNldCBvcHRpb25zICsgdmlkZW8gYXR0cmlidXR0cysgdXNlciBvcHRpb25zXG5cdFx0dGhpcy5vcHRpb25zID0gJC5leHRlbmQodHJ1ZSwge30sIGRlZmF1bHRPcHRpb25zLCBwcmVzZXRPcHRpb25zLCBhdHRyT3B0aW9ucywgdGhpcy5fdXNlck9wdGlvbnMpO1xuXG5cdFx0aWYodGhpcy5vcHRpb25zLnNvdXJjZXMgJiYgIUFycmF5LmlzQXJyYXkodGhpcy5vcHRpb25zLnNvdXJjZXMpKSB7XG5cdFx0XHR0aGlzLm9wdGlvbnMuc291cmNlcyA9IFt0aGlzLm9wdGlvbnMuc291cmNlc11cblx0XHR9XG5cblx0XHRpZih0eXBlb2YgdGhpcy5vcHRpb25zLnNyYyA9PT0gJ3N0cmluZycpIHtcblx0XHRcdHRoaXMub3B0aW9ucy5zcmMgPSB7IHVybCA6IHRoaXMub3B0aW9ucy5zcmMgfVxuXHRcdH1cblxuXHRcdGlmKHRoaXMub3B0aW9ucy5zcmMgPT0gbnVsbCAmJiB0aGlzLm9wdGlvbnMuc291cmNlcy5sZW5ndGggPiAwKSB7XG5cdFx0XHR0aGlzLm9wdGlvbnMuc3JjID0gdGhpcy5vcHRpb25zLnNvdXJjZXNbMF1cblx0XHR9XG5cblx0XHQvLyBNZXJnZSBjb3JyZWN0bHkgY29udHJvbHMsIHdpdGhvdXQgZGVlcCBtZXJnZVxuXHRcdHRoaXMub3B0aW9ucy5jb250cm9scyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0T3B0aW9ucy5jb250cm9scywgcHJlc2V0T3B0aW9ucy5jb250cm9scywgdGhpcy5fdXNlck9wdGlvbnMuY29udHJvbHMpO1xuXG5cdFx0Ly8gZXhjbHVkZSBjb250cm9scyBvcHRpb25cblx0XHQvLyBUT0RPKGFkaW52YWRpbSk6XG5cdFx0Ly8gU2V0IGRlcHJlY2V0ZWQgZmxhZyBmb3IgdGhpcyBvcHRpb247XG5cdFx0Zm9yIChjb25zdCBuYW1lIGluIHRoaXMub3B0aW9ucy5leGNsdWRlQ29udHJvbHMpIHtcblx0XHRcdGlmICghdGhpcy5vcHRpb25zLmV4Y2x1ZGVDb250cm9scy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkgcmV0dXJuO1xuXHRcdFx0Y29uc3QgY29udHJvbENvbGxlY3Rpb24gPSB0aGlzLm9wdGlvbnMuZXhjbHVkZUNvbnRyb2xzW25hbWVdO1xuXHRcdFx0Y29udHJvbENvbGxlY3Rpb24uZm9yRWFjaCgocm93LCBpbmRleCkgPT4ge1xuXHRcdFx0XHRpZiAodGhpcy5vcHRpb25zLmNvbnRyb2xzW25hbWVdICYmIHRoaXMub3B0aW9ucy5jb250cm9sc1tuYW1lXVtpbmRleF0pIHtcblx0XHRcdFx0XHR0aGlzLm9wdGlvbnMuY29udHJvbHNbbmFtZV1baW5kZXhdID0gZXhjbHVkZUFycmF5KHRoaXMub3B0aW9ucy5jb250cm9sc1tuYW1lXVtpbmRleF0sIHJvdyk7XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMub3B0aW9ucy5wcmVzZXQgJiYgUGxheWVyLmdldFByZXNldCh0aGlzLm9wdGlvbnMucHJlc2V0KSkge1xuXHRcdFx0UGxheWVyLmdldFByZXNldCh0aGlzLm9wdGlvbnMucHJlc2V0KS5pbml0T3B0aW9ucygpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGUgYW5kIGluaXQgYWxsIGNvbnRyb2xzXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHQgKi9cblx0X2luaXRDb250cm9scygpIHtcblx0XHRmb3IgKGNvbnN0IG5hbWUgb2YgWydjb21tb24nLCAnZnVsbHNjcmVlbiddKSB7XG5cdFx0XHRpZiAoIXRoaXMub3B0aW9ucy5jb250cm9scy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkgcmV0dXJuO1xuXHRcdFx0Y29uc3QgY29udHJvbENvbGxlY3Rpb24gPSBuZXcgQ29udHJvbENvbGxlY3Rpb24odGhpcywgeyBuYW1lIH0pO1xuXHRcdFx0dGhpcy5lbGVtZW50LmFwcGVuZChjb250cm9sQ29sbGVjdGlvbi5lbGVtZW50KTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5jb250cm9scy5jb21tb24gIT0gbnVsbCkge1xuXHRcdFx0dGhpcy5jb250cm9scy5jb21tb24uYWN0aXZlID0gdHJ1ZTtcblx0XHR9XG5cdH1cblxuXG5cdF9saXN0ZW5Ib3RLZXlzKCkge1xuXG5cdFx0Y29uc3QgaXNLZXlCaW5kaW5nID0gKGUsIGJpbmRpbmcpID0+IHtcblx0XHRcdHJldHVybiAoKGUud2hpY2ggPT09IGJpbmRpbmcua2V5KSB8fCAoZS5rZXkgPT09IGJpbmRpbmcua2V5KSkgJiZcblx0XHRcdFx0XHQoISFiaW5kaW5nLnNoaWZ0S2V5ID09PSBlLnNoaWZ0S2V5KSAmJlxuXHRcdFx0XHRcdCghIWJpbmRpbmcuY3RybEtleSA9PT0gZS5jdHJsS2V5KVxuXHRcdH1cblxuXHRcdHRoaXMuZWxlbWVudC5vbigna2V5ZG93bi5sZXBsYXllci5ob3RrZXknLCAoZSkgPT4ge1xuXHRcdFx0dGhpcy5vcHRpb25zLmtleUJpbmRpbmcuZm9yRWFjaChiaW5kaW5nID0+IHtcblxuXHRcdFx0XHRpZihpc0tleUJpbmRpbmcoZSwgYmluZGluZykpIHtcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0YmluZGluZy5mbih0aGlzKTtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblxuXHRcdFx0fSlcblx0XHR9KVxuXHR9XG5cblx0LyoqXG5cdCAqIEluaXQgc2VjdGlvbnMsIGdldCBhamF4IG9yIGpzb24gd2l0aCBzZWN0aW9ucyBkYXRhIGFuZCBjcmVhdGUgU2VjdGlvbnMgb2JqZWN0IGFuZCBhZGRlZCB0aGVtIHRvIHRoZSBET01cblx0ICpcblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqIEByZXR1cm5zIHtqcVByb21pc2V9IGpRdWVyeSBwcm9taXNlXG5cdCAqL1xuXHRfaW5pdFNlY3Rpb25zKCkge1xuXHRcdGNvbnN0IGRmZCA9ICQuRGVmZXJyZWQoKTtcblx0XHRpZiAodGhpcy5vcHRpb25zLmRhdGEgPT0gbnVsbCkge1xuXHRcdFx0ZGZkLnJlamVjdChudWxsKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmdldFNlY3Rpb25EYXRhKCkuZG9uZShzZWN0aW9ucyA9PiB7XG5cdFx0XHRcdHNlY3Rpb25zID0gWy4uLnNlY3Rpb25zXTtcblxuXHRcdFx0XHRjb25zdCBpc1NlY3Rpb25PdXRzaWRlID0gKHRoaXMuc2VjdGlvbnNDb250YWluZXIgJiYgdGhpcy5zZWN0aW9uc0NvbnRhaW5lci5sZW5ndGggPiAwKTtcblxuXHRcdFx0XHRpZiAoc2VjdGlvbnMgPT0gbnVsbCB8fCBzZWN0aW9ucy5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHRkZmQucmVqZWN0KG51bGwpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHNlY3Rpb25zID0gdGhpcy5fY29tcGxldGVTZWN0aW9ucyhzZWN0aW9ucyk7XG5cblx0XHRcdFx0Y29uc3Qgc2VjdGlvbnNDb21wb25lbnQgPSBuZXcgU2VjdGlvbnModGhpcywge1xuXHRcdFx0XHRcdGl0ZW1zIDogc2VjdGlvbnMsXG5cdFx0XHRcdFx0ZnVsbHNjcmVlbk9ubHkgOiBpc1NlY3Rpb25PdXRzaWRlLFxuXHRcdFx0XHRcdGhpZGVTY3JvbGwgOiB0cnVlXG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdHRoaXMuaW5uZXJFbGVtZW50LmFwcGVuZChzZWN0aW9uc0NvbXBvbmVudC5lbGVtZW50KTtcblxuXHRcdFx0XHRpZiAoaXNTZWN0aW9uT3V0c2lkZSkge1xuXHRcdFx0XHRcdGNvbnN0IG91dHNpZGVTZWN0aW9ucyA9IG5ldyBTZWN0aW9ucyh0aGlzLCB7XG5cdFx0XHRcdFx0XHRpdGVtcyA6IHNlY3Rpb25zXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0dGhpcy5zZWN0aW9uc0NvbnRhaW5lci5hcHBlbmQob3V0c2lkZVNlY3Rpb25zLmVsZW1lbnQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGRmZC5yZXNvbHZlKHsgc2VjdGlvbnNDb21wb25lbnQsIGl0ZW1zIDogc2VjdGlvbnMgfSk7XG5cdFx0XHR9KVxuXHRcdH1cblxuXHRcdHJldHVybiBkZmQucHJvbWlzZSgpXG5cdH1cblxuXHQvKipcblx0ICogRnVuY3Rpb24sIHRoYW4gaW5pdCBhbGwgcGx1Z2lucyBmcm9tIHBsYXllciBvcHRpb25zLlxuXHQgKiBJZiBwbHVnaW4gZG9lc24ndCBleGlzdCB0aHJvdyBhbiBlcnJvclxuXHQgKlxuXHQgKiBAYWNjZXNzIHByaXZhdGVcblx0ICogQHJldHVybnMge1BsYXllcn0gdGhpc1xuXHQgKi9cblx0X2luaXRQbHVnaW5zKCkge1xuXHRcdGlmICh0aGlzLm9wdGlvbnMucGx1Z2lucykge1xuXHRcdFx0Zm9yIChjb25zdCBuYW1lIGluIHRoaXMub3B0aW9ucy5wbHVnaW5zKSB7XG5cdFx0XHRcdGlmKCF0aGlzLm9wdGlvbnMucGx1Z2lucy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkgcmV0dXJuO1xuXHRcdFx0XHRjb25zdCBwbHVnaW5PcHRpb25zID0gdGhpcy5vcHRpb25zLnBsdWdpbnNbbmFtZV07XG5cdFx0XHRcdGlmKHRoaXNbbmFtZV0pIHtcblx0XHRcdFx0XHRpZihwbHVnaW5PcHRpb25zKSB7XG5cdFx0XHRcdFx0XHR0aGlzW25hbWVdKHBsdWdpbk9wdGlvbnMpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGBQbHVnaW4gJyR7bmFtZX0nIGRvZXNuJ3QgZXhpc3RgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblxuXHQvKipcblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqL1xuXHRfbGlzdGVuVXNlckFjdGl2aXR5KCkge1xuXHRcdGxldCBtb3VzZUluUHJvZ3Jlc3M7XG5cdFx0bGV0IGxhc3RNb3ZlWDtcblx0XHRsZXQgbGFzdE1vdmVZO1xuXG5cdFx0Y29uc3Qgb25Nb3VzZU1vdmUgPSAoZSkgPT4ge1xuXHRcdFx0aWYoZS5zY3JlZW5YICE9PSBsYXN0TW92ZVggfHwgZS5zY3JlZW5ZICE9PSBsYXN0TW92ZVkpIHtcblx0XHRcdFx0bGFzdE1vdmVYID0gZS5zY3JlZW5YO1xuXHRcdFx0XHRsYXN0TW92ZVkgPSBlLnNjcmVlblk7XG5cdFx0XHRcdHRoaXMuX3VzZXJBY3Rpdml0eSA9IHRydWVcblx0XHRcdH1cblx0XHR9XG5cblx0XHRjb25zdCBvbk1vdXNlRG93biA9IChlKSA9PiB7XG5cdFx0XHR0aGlzLl91c2VyQWN0aXZpdHkgPSB0cnVlXG5cblx0XHRcdC8vIFdoaWxlIHVzZXIgaXMgcHJlc3NpbmcgbW91c2Ugb3IgdG91Y2gsIGRpc3BhdGNoIHVzZXIgYWN0aXZpdHlcblx0XHRcdGNsZWFySW50ZXJ2YWwobW91c2VJblByb2dyZXNzKTtcblxuXHRcdFx0bW91c2VJblByb2dyZXNzID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLl91c2VyQWN0aXZpdHkgPSB0cnVlXG5cdFx0XHR9LCAyNTApO1xuXHRcdH1cblxuXHRcdGNvbnN0IG9uTW91c2VVcCA9IChlKSA9PiB7XG5cdFx0XHR0aGlzLl91c2VyQWN0aXZpdHkgPSB0cnVlXG5cdFx0XHRjbGVhckludGVydmFsKG1vdXNlSW5Qcm9ncmVzcyk7XG5cdFx0fVxuXG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XG5cblx0XHR0aGlzLmVsZW1lbnQub24oJ21vdXNlZG93bicsIG9uTW91c2VEb3duKTtcblxuXHRcdHRoaXMuZWxlbWVudC5vbignbW91c2V1cCcsIG9uTW91c2VVcCk7XG5cblx0XHR0aGlzLmVsZW1lbnQub24oJ2tleWRvd24nLCAoZSkgPT4gdGhpcy5fdXNlckFjdGl2aXR5ID0gdHJ1ZSk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdrZXl1cCcsIChlKSA9PiB0aGlzLl91c2VyQWN0aXZpdHkgPSB0cnVlKTtcblxuXHRcdC8vIFNlZSBodHRwOi8vZWpvaG4ub3JnL2Jsb2cvbGVhcm5pbmctZnJvbS10d2l0dGVyL1xuXHRcdGxldCBpbmFjdGl2aXR5VGltZW91dDtcblx0XHRjb25zdCBkZWxheSA9IHRoaXMub3B0aW9ucy5pbm5hY3Rpdml0eVRpbWVvdXQ7XG5cdFx0c2V0SW50ZXJ2YWwoKCkgPT4ge1xuXHRcdFx0aWYgKHRoaXMuX3VzZXJBY3Rpdml0eSkge1xuXG5cdFx0XHRcdC8vIFJlc2V0IHVzZXIgYWN0aXZ1dHkgdHJhY2tlclxuXHRcdFx0XHR0aGlzLl91c2VyQWN0aXZpdHkgPSBmYWxzZTtcblxuXHRcdFx0XHR0aGlzLnVzZXJBY3RpdmUgPSB0cnVlO1xuXG5cdFx0XHRcdGNsZWFyVGltZW91dChpbmFjdGl2aXR5VGltZW91dCk7XG5cblx0XHRcdFx0aWYgKGRlbGF5ID4gMCkge1xuXG5cdFx0XHRcdFx0aW5hY3Rpdml0eVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRcdGlmICghdGhpcy5fdXNlckFjdGl2aXR5KSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMudXNlckFjdGl2ZSA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0sIGRlbGF5KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sIDI1MClcblx0fVxuXG5cdC8qKlxuXHQgKiBTdG9wIHNob3dpbmcgc3Bpbm5lciBhbmQgY2xlYXIgZGVsYXkgb2Ygc2hvd2luZyBzcGlubmVyXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHQgKi9cblx0X3N0b3BXYXl0aW5nKCkge1xuXHRcdHRoaXMuX3dhaXRpbmdUaW1lb3V0cy5mb3JFYWNoKGl0ZW0gPT4gY2xlYXJUaW1lb3V0KGl0ZW0pKTtcblx0XHR0aGlzLl93YWl0aW5nVGltZW91dHMgPSBbXTtcblx0XHR0aGlzLnJlbW92ZUNsYXNzKCdsZXBsYXllci0td2FpdGluZycpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFNob3cgc3Bpbm5lciB3aXRoIGRlbGF5IGluIDMwMG1zXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHQgKi9cblx0X3N0YXJ0V2FpdGluZygpIHtcblx0XHR0aGlzLl93YWl0aW5nVGltZW91dHMucHVzaChzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdHRoaXMuYWRkQ2xhc3MoJ2xlcGxheWVyLS13YWl0aW5nJyk7XG5cdFx0fSwgMzAwKSk7XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBPbiBpbml0ZWQgcGxheWVyIGV2ZW50IGhhbmRsZXJcblx0ICpcblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqIEBwYXJhbSB7UGxheWVyRXZlbnR9IGVcblx0ICovXG5cdF9vbkluaXRlZChlKSB7XG5cdFx0dGhpcy5hZGRDbGFzcygnbGVwbGF5ZXItLWluaXRlZCcpO1xuXG5cdFx0dGhpcy5vcHRpb25zLm9uUGxheWVySW5pdGVkLmNhbGwodGhpcywgZSk7XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBPbiBjbGljayB2aWRlbyBldmVudCBoYW5kbGVyLiBGb2N1cyBvbiB2aWRlbyBhbmQgdG9nZ2xlUGxheVxuXHQgKlxuXHQgKiBAYWNjZXNzIHByaXZhdGVcblx0ICogQHBhcmFtIHtQbGF5ZXJFdmVudH0gZVxuXHQgKi9cblx0X29uQ2xpY2soZSkge1xuXHRcdGNsZWFyVGltZW91dCh0aGlzLl9kYmxjbGlja1RpbWVvdXQpO1xuXHRcdHRoaXMuX2RibGNsaWNrVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0dGhpcy52aWRlby5lbGVtZW50LmZvY3VzKClcblx0XHRcdHRoaXMudG9nZ2xlUGxheSgpO1xuXHRcdH0sIDMwMCk7XG5cdH1cblxuXHQvKipcblx0ICogT24gZGJsY2xpY2sgb24gdGhlIHZpZGVvIHBsYXllciBldmVudCBoYW5kbGVyXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge1BsYXllckV2ZW50fSBlXG5cdCAqL1xuXHRfb25EYmNsaWNrKGUpIHtcblx0XHRjbGVhclRpbWVvdXQodGhpcy5fZGJsY2xpY2tUaW1lb3V0KTtcblx0XHR0aGlzLnRvZ2dsZUZ1bGxzY3JlZW4oKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBPbiBmdWxsc2NyZWVuIGNoYW5nZSBwbGF5ZXIgZXZlbnQgaGFuZGxlclxuXHQgKlxuXHQgKiBAYWNjZXNzIHByaXZhdGVcblx0ICogQHBhcmFtIHtQbGF5ZXJFdmVudH0gZVxuXHQgKi9cblx0X29uRnVsbHNjcmVlbkNoYW5nZShlLCBpc0ZzKSB7XG5cdFx0aWYoaXNGcykge1xuXHRcdFx0dGhpcy52aWV3ID0gJ2Z1bGxzY3JlZW4nO1xuXHRcdFx0dGhpcy5mb2N1cygpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnZpZXcgPSAnY29tbW9uJztcblxuXHRcdFx0aWYoSVNfQU5EUk9JRF9QSE9ORSB8fCBJU19JUEhPTkUgfHwgSVNfSVBPRCkge1xuXHRcdFx0XHR0aGlzLnBhdXNlKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblxuXHQvKipcblx0ICogT24gcGxheSBldmVudCBoYW5kbGVyXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge1BsYXllckV2ZW50fSBlXG5cdCAqL1xuXHRfb25QbGF5KCkge1xuXHRcdHRoaXMuc3BsYXNoSWNvbi5zaG93KCdwbGF5Jyk7XG5cdH1cblxuXHQvKipcblx0ICogT24gcGF1c2UgcGxheWVyIGV2ZW50IGhhbmRsZXJcblx0ICogU2hvdyBwYXVzZSBpY29uIGluIHRoZSBjZW50ZXIgb2YgdmlkZW9cblx0ICpcblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqL1xuXHRfb25QYXVzZSgpIHtcblx0XHR0aGlzLnNwbGFzaEljb24uc2hvdygncGF1c2UnKTtcblx0fVxuXG5cdF9vbkVudGl0eUZ1bGxzY3JlbkNoYW5nZSgpIHtcblx0XHRjb25zdCBmc0FwaSA9IEZ1bGxzY3JlZW5BcGk7XG5cdFx0Y29uc3QgaXNGcyA9ICEhZG9jdW1lbnRbZnNBcGkuZnVsbHNjcmVlbkVsZW1lbnRdO1xuXHRcdHRoaXMudHJpZ2dlcignZnVsbHNjcmVlbmNoYW5nZScsIGlzRnMpO1xuXHR9XG5cbn1cblxuLyoqXG4gKiBTdGF0aWMgaGVscGVyIGZvciBjcmVhdGluZyBhIHBsdWdpbnMgZm9yIGxlcGxheWVyXG4gKlxuICogQGFjY2VzcyBwdWJsaWNcbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHBsdWdpblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gUGx1Z2luIGluaXQgZnVuY3Rpb25cbiAqXG4gKiBAZXhhbXBsZVxuICogUGxheWVyLnBsdWdpbignaGVsbG9Xb3JsZCcsIGZ1bmN0aW9uKHBsdWdpbk9wdGlvbnMpIHtcbiAqICAgIGNvbnN0IHBsYXllciA9IHRoaXM7XG4gKiAgICBwbGF5ZXIub24oJ2NsaWNrJywgKCkgPT4gY29uc29sZS5sb2coJ0hlbGxvIHdvcmxkJykpO1xuICogfSlcbiAqXG4gKi9cblBsYXllci5wbHVnaW4gPSBmdW5jdGlvbihuYW1lLCBmbikge1xuXHRQbGF5ZXIucHJvdG90eXBlW25hbWVdID0gZm47XG59XG5cbi8qKlxuICogR2V0IGJ5IG5hbWUgcmVnaXN0ZXJlZCBjb21wb25lbnRcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSAtIE5hbWUgb2YgY29tcG9uZW50XG4gKiBAcmV0dXJuIHtDb21wb25lbnR9XG4gKi9cblBsYXllci5nZXRDb21wb25lbnQgPSBDb21wb25lbnQuZ2V0Q29tcG9uZW50O1xuXG4vKipcbiAqIFJlZ2lzdGVyIGNvbXBvbmVudFxuICpcbiAqIEBhY2Nlc3MgcHVibGljXG4gKiBAc3RhdGljXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtDb21wb25lbnR9IGNvbXBvbmVudFxuICpcbiAqIEBleGFtcGxlXG4gKiBQbGF5ZXIucmVnaXN0ZXJDb21wb25lbnQoJ0Vycm9yRGlzcGxheScsIEVycm9yRGlzcGxheSk7XG4gKi9cblBsYXllci5yZWdpc3RlckNvbXBvbmVudCA9IENvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudDtcblxuLyoqXG4gKiBSZWdpc3RlciBjb250cm9sXG4gKlxuICogQGFjY2VzcyBwdWJsaWNcbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge0NvbnRyb2x9IGNvbnRyb2xcbiAqL1xuUGxheWVyLmdldENvbnRyb2wgPSBDb250cm9sLmdldENvbnRyb2w7XG5cbi8qKlxuICogR2V0IGJ5IG5hbWUgcmVnaXN0ZXJlZCBjb250cm9sXG4gKlxuICogQGFjY2VzcyBwdWJsaWNcbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJucyB7Q29udHJvbH1cbiAqXG4gKiBAZXhhbXBsZVxuICogUGxheWVyLnJlZ2lzdGVyQ29udHJvbCgnYmFja3dhcmQnLCBCYWNrd2FyZENvbnRyb2wpO1xuICovXG5QbGF5ZXIucmVnaXN0ZXJDb250cm9sID0gQ29udHJvbC5yZWdpc3RlckNvbnRyb2w7XG5cblxuLyoqXG4gKiBDb252ZXJ0IHNlY29uZHMgdG8gZm9ybWF0IHN0cmluZyAnaGg/Om1tOnNzJ1xuICpcbiAqIEBhY2Nlc3MgcHVibGljXG4gKiBAcGFyYW0ge051bWJlcn0gc2Vjb25kcyBTZWNvbmRzXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHNob3dIb3VycyBjb252ZXJ0IHRvIGZvcm1hdCAnaGg6bW06c3MnXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG5QbGF5ZXIuc2Vjb25kc1RvVGltZSA9IHNlY29uZHNUb1RpbWU7XG5cblxuLyoqXG4gKiBTdGF0aWMgaGVscGVyIGZvciBjcmVhdGluZyBhIHBsdWdpbnMgZm9yIGxlcGxheWVyXG4gKlxuICogQGFjY2VzcyBwdWJsaWNcbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHBsdWdpblxuICogQHBhcmFtIHtGdW5jdGlvbnxPYmplY3R9IGZuIFBsdWdpbiBpbml0IGZ1bmN0aW9uXG4gKlxuICogQGV4YW1wbGVcbiAqIFBsYXllci5wcmVzZXQoJ2NvbW1vbicsIHtcbiAqICAgICB3aWR0aCA6ICcxMDAlJyxcbiAqICAgICBwbHVnaW5zIDoge1xuICogICAgICAgICBtaW5pcGxheWVyIDogdHJ1ZVxuICogICAgIH1cbiAqIH0pO1xuICovXG5QbGF5ZXIucHJlc2V0ID0gZnVuY3Rpb24obmFtZSwgb2JqKSB7XG5cdGlmKHR5cGVvZiBvYmogPT09ICdvYmplY3QnKSB7XG5cdFx0UGxheWVyLl9wcmVzZXRzW25hbWVdID0gJC5leHRlbmQoe30sIHtcblx0XHRcdG9wdGlvbnMgOiB7fSxcblx0XHRcdGluaXRPcHRpb25zIDogbm9vcFxuXHRcdH0sIG9iaik7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9iaiA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFBsYXllci5fcHJlc2V0c1tuYW1lXSA9IG9iaigpO1xuXHR9XG59O1xuXG5cblBsYXllci5nZXRQcmVzZXQgPSBmdW5jdGlvbihuYW1lKSB7XG5cdGlmKFBsYXllci5fcHJlc2V0c1tuYW1lXSkge1xuXHRcdHJldHVybiBQbGF5ZXIuX3ByZXNldHNbbmFtZV07XG5cdH0gZWxzZSB7XG5cdFx0Y29uc29sZS5lcnJvcihgcHJlc2V0ICR7bmFtZX0gZG9lc24ndCBleGlzdGApO1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG59XG5cblxuUGxheWVyLl9wcmVzZXRzID0ge307XG5cblxuUGxheWVyLl9sb2FkU1ZHU3ByaXRlID0gZnVuY3Rpb24oc3ZnKSB7XG5cdGNvbnN0IGhpZGRlbkVsZW1lbnQgPSAkKCc8ZGl2Lz4nKS5oaWRlKCk7XG5cdCQoJ2JvZHknKS5wcmVwZW5kKGhpZGRlbkVsZW1lbnQuYXBwZW5kKHN2ZykpO1xuXHRyZXR1cm4gaGlkZGVuRWxlbWVudDtcbn1cblxuUGxheWVyLmRlZmF1bHRTcHJpdGUgPSByZXF1aXJlKCcuLi8uLi9kaXN0L3N2Zy9zdmctZGVmcy5zdmcnKTtcblxuXG53aW5kb3cuJC5mbi5sZVBsYXllciA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cdHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBuZXcgUGxheWVyKCQodGhpcyksIG9wdGlvbnMpO1xuXHR9KTtcbn07XG5cbndpbmRvdy4kLmxlUGxheWVyID0gUGxheWVyO1xuXG53aW5kb3cubGVQbGF5ZXIgPSBQbGF5ZXI7XG5cblxuLyoqXG4gKiBNaW5pIFBsYXllciBwbHVnaW5cbiAqXG4gKiBAcGx1Z2luXG4gKi9cblBsYXllci5wbHVnaW4oJ21pbmlwbGF5ZXInLCBmdW5jdGlvbihwbHVnaW5PcHRpb25zKSB7XG5cdGNvbnN0IHBsYXllciA9IHRoaXM7XG5cblx0Ly8g0JzQtdGA0LbQuNC8INGBIHRoaXMub3B0aW9ucy5taW5pcGxheWVyLCDRh9GC0L7QsdGLINC90LUg0YHQu9C+0LzQsNGC0Ywg0L7QsdGA0LDRgtC90YPRjiDRgdC+0LLQvNC10YHRgtC40LzQvtGB0YwsINGC0LDQuiDQutCw0Log0YDQsNC90YzRiNC1XG5cdC8vINC80LjQvdC40L/Qu9C10LXRgCDQvdC1INCx0YvQuyDQv9C70LDQs9C40L3QvtC8INC/0LvQtdC10YDQsC5cblx0Y29uc3Qgb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0d2lkdGggOiAnMTAwJScsXG5cdFx0b2Zmc2V0U2hvdyA6IChwbGF5ZXIpID0+IHtcblx0XHRcdGNvbnN0IG9mZnNldCA9IHBsYXllci5lbGVtZW50Lm9mZnNldCgpLnRvcFxuXHRcdFx0XHQrIHBsYXllci5lbGVtZW50Lm91dGVySGVpZ2h0KClcblx0XHRcdFx0LSBwbGF5ZXIuZ2V0Q29udHJvbHMoJ2NvbW1vbicpLmVsZW1lbnQuaGVpZ2h0KCk7XG5cblx0XHRcdHJldHVybiBvZmZzZXQ7XG5cdFx0fVxuXHR9LCB0aGlzLm9wdGlvbnMubWluaXBsYXllciwgcGx1Z2luT3B0aW9ucyk7XG5cblx0Y29uc3QgY29udHJvbHMgPSBuZXcgQ29udHJvbENvbGxlY3Rpb24odGhpcywge1xuXHRcdG5hbWUgOiAnbWluaScsXG5cdFx0Y29udHJvbHMgOiBvcHRpb25zLmNvbnRyb2xzLFxuXHRcdGNvbnRyb2xPcHRpb25zIDoge1xuXHRcdFx0Y29udHJvbCA6IHtcblx0XHRcdFx0ZGlzYWJsZSA6IGZhbHNlXG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblxuXHQvLyDQktGB0YLQsNCy0LvRj9C10Lwg0LIgaW5mb0VsZW1lbnQg0L/QvtC0IHRpdGxlINC4IGRlc2NyaXB0aW9uXG5cdHRoaXMuaW5mb0VsZW1lbnQuYXBwZW5kKGNvbnRyb2xzLmVsZW1lbnQpO1xuXG5cdC8qKlxuXHQgKiBSZXR1cm4gb2Zmc2V0IG9uIG9ZICwgd2hlbiBtaW5pcGxheWVyIHNob3VsZCBzaG93aW5nIG9yIGhpZGluZ1xuXHQgKlxuXHQgKiBAcmV0dXJucyB7TnVtYmVyfVxuXHQgKi9cblx0Y29uc3Qgb2Zmc2V0U2hvdyA9ICgpID0+IHtcblx0XHRpZiAoJC5pc0Z1bmN0aW9uKG9wdGlvbnMub2Zmc2V0U2hvdykpIHtcblx0XHRcdHJldHVybiBvcHRpb25zLm9mZnNldFNob3cocGxheWVyKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gb3B0aW9ucy5vZmZzZXRTaG93XG5cdH1cblxuXHRjb25zdCBnZXRXaWR0aCA9ICgpID0+IHtcblx0XHRyZXR1cm4gb3B0aW9ucy53aWR0aCB8fCB0aGlzLmVsZW1lbnQud2lkdGgoKTtcblx0fVxuXG5cblx0dGhpcy5fdXBkYXRlTWluaVBsYXllciA9IChlLCBmb3JjZSkgPT4ge1xuXHRcdGNvbnN0IHNjcm9sbFRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcblxuXHRcdC8vIEJlY2F1c2UgaW4gZm9yY2UgdXBkYXRlLCBmb3Igbm9ybWFsbHkgY291bnQgaGVpZ2h0IGFuZCBwYWRkaW5nXG5cdFx0Ly8gbWluaXBsYXllciBiZWZvcmUgdGhlIHNob3cgbXVzdCBmaXJzdCBiZSBoaWRkZW5cblx0XHRpZihmb3JjZSkge1xuXHRcdFx0dGhpcy5oaWRlTWluaVBsYXllcihmb3JjZSk7XG5cdFx0fVxuXG5cdFx0aWYoc2Nyb2xsVG9wID4gb2Zmc2V0U2hvdygpKSB7XG5cdFx0XHR0aGlzLnNob3dNaW5pUGxheWVyKGZvcmNlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5oaWRlTWluaVBsYXllcigpO1xuXHRcdH1cblx0fVxuXG5cdHRoaXMuc2hvd01pbmlQbGF5ZXIgPSAoZm9yY2UpID0+IHtcblx0XHRpZiAoIWZvcmNlICYmIHRoaXMudmlldyA9PT0gJ21pbmknKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gQWRkZWQgZW1wdHkgc3BhY2Vcblx0XHR0aGlzLmVsZW1lbnQuY3NzKCdwYWRkaW5nLXRvcCcsIHRoaXMudmlkZW9Db250YWluZXIuaGVpZ2h0KCkpO1xuXG5cdFx0dGhpcy52aWV3ID0nbWluaSc7XG5cdH1cblxuXHR0aGlzLmhpZGVNaW5pUGxheWVyID0gKGZvcmNlKSA9PiB7XG5cdFx0aWYoIWZvcmNlICYmIHRoaXMudmlldyAhPT0gJ21pbmknKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMudmlldyA9ICdjb21tb24nO1xuXHR9XG5cblx0JCh3aW5kb3cpLm9uKCdzY3JvbGwnLCB0aGlzLl91cGRhdGVNaW5pUGxheWVyLmJpbmQodGhpcykpO1xuXHQkKHdpbmRvdykub24oJ3Jlc2l6ZScsIHRoaXMuX3VwZGF0ZU1pbmlQbGF5ZXIuYmluZCh0aGlzKSk7XG5cdHRoaXMub24oJ2luaXRlZCcsIChlKSA9PiB0aGlzLl91cGRhdGVNaW5pUGxheWVyKGUsIHRydWUpKTtcblxuXHR0aGlzLm9uU2V0VmlldygnbWluaScsICgpID0+IHtcblx0XHR0aGlzLmlubmVyRWxlbWVudC5jc3MoJ21heC13aWR0aCcsIGdldFdpZHRoKCkpO1xuXHRcdHRoaXMuaW5uZXJFbGVtZW50LmNzcygnaGVpZ2h0JywgdGhpcy52aWRlby5oZWlnaHQpO1xuXHR9KTtcblxuXHR0aGlzLm9uRGVsVmlldygnbWluaScsICgpID0+IHtcblx0XHR0aGlzLmlubmVyRWxlbWVudC5jc3MoJ21heC13aWR0aCcsICcnKVxuXHRcdHRoaXMuaW5uZXJFbGVtZW50LmNzcygnaGVpZ2h0JywgJycpXG5cblx0XHR0aGlzLmVsZW1lbnQuY3NzKCdwYWRkaW5nLXRvcCcsICcnKTtcblx0fSk7XG5cblxuXHR0aGlzLl91cGRhdGVNaW5pUGxheWVyKCk7XG59KTtcblxuUGxheWVyLnByZXNldCgndnBzJywgcmVxdWlyZSgnLi9wcmVzZXRzL3Zwcy5qcycpLnByZXNldCk7XG5QbGF5ZXIucHJlc2V0KCdzbXMnLCByZXF1aXJlKCcuL3ByZXNldHMvc21zLmpzJykucHJlc2V0KTtcblBsYXllci5wcmVzZXQoJ2NvbXByZXNzZWQnLCByZXF1aXJlKCcuL3ByZXNldHMvY29tcHJlc3NlZC5qcycpLnByZXNldCk7XG5QbGF5ZXIucHJlc2V0KCd5b3V0dWJlJywgcmVxdWlyZSgnLi9wcmVzZXRzL3lvdXR1YmUuanMnKS5wcmVzZXQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2xlLXBsYXllci5qcyIsIm1vZHVsZS5leHBvcnRzID0gJDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIiRcIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgQ29udHJvbC5qc1xuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCBJY29uIGZyb20gJy4vSWNvbic7XG5cbi8qKlxuICogQGNsYXNzIENvbnRyb2xcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gQ29udHJvbCdzIG9wdGlvbnNcbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5pY29uTmFtZV0gTmFtZSBvZiBjb250cm9sJ3MgaWNvbi4gSWYgZW1wdHksIGNvbnRyb2wgd2lsbCBub3QgaGF2ZSBhIGljb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5jbGFzc05hbWVdXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMubmFtZV1cbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5jb2xsZWN0aW9uXVxuICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLnRpdGxlXSBDb250b3JsJ3MgdG9vbHRpcCwgdGl0bGUgYXR0clxuICogQHBhcmFtIHtGdW5jdGlvbn0gW29wdGlvbnMub25DbGlja10gT24gY2xpY2sgZXZlbnQgaGFuZGxlclxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5kaXNhYmxlPWZhbHNlXVxuICogQHByb3BlcnR5IHtJY29ufSBpY29uIEljb24gaW4gY29udHJvbCwgaWYgaXQgaXMgZXhpc3RcbiAqIEBleHRlbmRzIENvbXBvbmVudFxuICovXG5jbGFzcyBDb250cm9sIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXHRcdHRoaXMuZGlzYWJsZSA9IHRoaXMub3B0aW9ucy5kaXNhYmxlICE9IG51bGw/IHRoaXMub3B0aW9ucy5kaXNhYmxlIDogdHJ1ZTtcblxuXHRcdHRoaXMucGxheWVyLm9uKCdpbml0ZWQnLCAoZSkgPT4ge1xuXHRcdFx0dGhpcy5kaXNhYmxlID0gdGhpcy5vcHRpb25zLmRpc2FibGUgIT0gbnVsbD8gdGhpcy5vcHRpb25zLmRpc2FibGUgOiBmYWxzZTtcblx0XHR9KVxuXG5cdFx0dGhpcy5lbGVtZW50Lm9uKHtcblx0XHRcdGNsaWNrIDogdGhpcy5fb25DbGljay5iaW5kKHRoaXMpLFxuXHRcdFx0bGVwbGF5ZXJfY29udHJvbF9jbGljayA6IHRoaXMub25DbGljay5iaW5kKHRoaXMpXG5cdFx0fSk7XG5cblx0XHR0aGlzLnBsYXllci5vbignaW5pdGVkJywgdGhpcy5vblBsYXllckluaXRlZC5iaW5kKHRoaXMpKVxuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHRpZiAodGhpcy5vcHRpb25zLmljb25OYW1lKSB7XG5cdFx0XHR0aGlzLmljb24gPSBuZXcgSWNvbih0aGlzLnBsYXllciwge1xuXHRcdFx0XHRpY29uTmFtZSA6IHRoaXMub3B0aW9ucy5pY29uTmFtZVxuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdGxldCBhdHRycyA9IHtcblx0XHRcdHJvbGUgOiAnYnV0dG9uJyxcblx0XHRcdHRpdGxlIDogdGhpcy5vcHRpb25zLnRpdGxlXG5cdFx0fVxuXHRcdHRoaXMuZWxlbWVudCA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0LmFkZENsYXNzKHRoaXMuYnVpbGRDU1NDbGFzcygpKVxuXHRcdFx0LmFwcGVuZCh0aGlzLmljb24gJiYgdGhpcy5pY29uLmVsZW1lbnQpXG5cdFx0XHQuYXR0cihhdHRycyk7XG5cblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50O1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0YnVpbGRDU1NDbGFzcygpIHtcblx0XHRyZXR1cm4gYGNvbnRyb2wgJHt0aGlzLm9wdGlvbnMuY2xhc3NOYW1lfSAke3N1cGVyLmJ1aWxkQ1NTQ2xhc3MoKX1gXG5cdH1cblxuXHRzZXQgZGlzYWJsZSh2YWx1ZSkge1xuXHRcdHRoaXMuX2Rpc2FibGUgPSB2YWx1ZTtcblx0XHR0aGlzLmVsZW1lbnQudG9nZ2xlQ2xhc3MoJ2Rpc2FibGVkJywgdmFsdWUpO1xuXHR9XG5cblx0Z2V0IGRpc2FibGUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2Rpc2FibGVcblx0fVxuXG5cdF9vbkNsaWNrIChlKSB7XG5cdFx0aWYgKHRoaXMuZGlzYWJsZSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHR0aGlzLmVsZW1lbnQudHJpZ2dlcignbGVwbGF5ZXJfY29udHJvbF9jbGljaycpO1xuXHRcdHRoaXMucGxheWVyLnRyaWdnZXIoJ2NvbnRyb2xjbGljaycsIHsgY29udHJvbCA6IHRoaXMgfSk7XG5cdH1cblxuXHQvKipcblx0ICpcblx0ICogT24gY2xpY2sgZXZlbnQgaGFuZGxlclxuXHQgKiBAYWJzdGFjdFxuXHQgKi9cblx0b25DbGljayAoZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHR0aGlzLm9wdGlvbnMub25DbGljay5jYWxsKHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0fVxuXHR9XG5cblxuXHRvblBsYXllckluaXRlZCAoZSwgZGF0YSkge1xuXG5cdH1cblxuXHRzdGF0aWMgcmVnaXN0ZXJDb250cm9sKG5hbWUsIGNvbnRyb2wpIHtcblx0XHRpZihuYW1lID09IG51bGwpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZihDb250cm9sLl9jb250cm9scyA9PSBudWxsKSB7XG5cdFx0XHRDb250cm9sLl9jb250cm9scyA9IHt9O1xuXHRcdH1cblxuXHRcdENvbnRyb2wuX2NvbnRyb2xzW25hbWVdID0gY29udHJvbDtcblxuXHRcdHJldHVybiBjb250cm9sO1xuXHR9XG5cblx0c3RhdGljIGdldENvbnRyb2wobmFtZSkge1xuXHRcdGlmKG5hbWUgPT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmKENvbnRyb2wuX2NvbnRyb2xzICYmIENvbnRyb2wuX2NvbnRyb2xzW25hbWVdKSB7XG5cdFx0XHRyZXR1cm4gQ29udHJvbC5fY29udHJvbHNbbmFtZV07XG5cdFx0fVxuXHR9XG5cblx0c3RhdGljIGNyZWF0ZShwbGF5ZXIsIG5hbWUsIG9wdGlvbnMpIHtcblx0XHR2YXIgY29udHJvbENsYXNzID0gdGhpcy5nZXRDb250cm9sKG5hbWUpO1xuXHRcdGlmKGNvbnRyb2xDbGFzcyA9PSBudWxsKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKGBDb250cm9sICR7bmFtZX0gZG9lc24ndCBleGlzdGApO1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5ldyBjb250cm9sQ2xhc3MocGxheWVyLCBvcHRpb25zKTtcblx0fVxuXG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnQ29udHJvbCcsIENvbnRyb2wpO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ2NvbnRyb2wnLCBDb250cm9sKTtcbmV4cG9ydCBkZWZhdWx0IENvbnRyb2w7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9Db250cm9sLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBDb21wb25lbnQuanNcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG4vKipcbiAqIFBsYXllciBjb21wb25lbnQgLSBCYXNlIGNsYXNzIGZvciBhbGwgVUlcbiAqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIE9wdGlvbnMgb2YgY29tcG9uZW50XG4gKiBAcGFyYW0ge2pRdWVyeX0gW29wdGlvbnMuZWxlbWVudF0g0K3Qu9C10LzQtdC90YIg0L3QsCDQutC+0YLQvtGA0L7QvCDQvNC+0LbQvdC+INC40L3QuNGG0LjQu9C40LfQvtCy0LDRgtGMINC60LvQsNGB0YEuXG4gKiBAcHJvcGVydHkge09iamVjdH0gb3B0aW9uc1xuICogQHByb3BlcnR5IHtqUXVlcnl9IGVsZW1lbnRcbiAqIEBjbGFzcyBDb21wb25lbnRcbiAqL1xuY2xhc3MgQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcblx0XHRvcHRpb25zID0gdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIHtcblx0XHRcdGNyZWF0ZUVsZW1lbnQgOiB0cnVlXG5cdFx0fSwgdGhpcy5vcHRpb25zLCBvcHRpb25zKTtcblxuXHRcdGlmKCFwbGF5ZXIgJiYgdGhpcy5wbGF5ICE9IG51bGwpIHtcblx0XHRcdHRoaXMucGxheWVyID0gcGxheWVyID0gdGhpcztcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XG5cdFx0fVxuXG5cdFx0aWYob3B0aW9ucy5jcmVhdGVFbGVtZW50KSB7XG5cblx0XHRcdGlmIChvcHRpb25zLmVsZW1lbnQpIHtcblx0XHRcdFx0dGhpcy5lbGVtZW50ID0gb3B0aW9ucy5lbGVtZW50O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5jcmVhdGVFbGVtZW50KCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0aGlzLmVsZW1lbnQubGVuZ3RoICE9PSAxKSB7XG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoYENvbXBvbmVudC5wcm90b3R5cGUuZWxlbWVudC5sZW5ndGggbXVzdCBlcXVhbCAxLCBub3QgJHt0aGlzLmVsZW1lbnQubGVuZ3RofVxcbmAsIHRoaXMuZWxlbWVudCk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuZWxlbWVudFswXS5fX25vZGUgPSB0aGlzO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBAYWJzdHJhY3Rcblx0ICovXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHQvKipcblx0ICogQGFic3RyYWN0XG5cdCAqL1xuXHRidWlsZENTU0NsYXNzKCkge1xuXHRcdHJldHVybiAnJ1xuXHR9XG5cblxuXHQvKipcblx0ICogU2V0IHRoZSBmb2N1cyB0byB0aGlzIGNvbXBvbmVudFxuXHQgKi9cblx0Zm9jdXMoKSB7XG5cdFx0dGhpcy5lbGVtZW50LmZvY3VzKCk7XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBSZW1vdmUgdGhlIGZvY3VzIGZyb20gdGhpcyBjb21wb25lbnRcblx0ICovXG5cdGJsdXIoKSB7XG5cdFx0dGhpcy5lbGVtZW50LmJsdXIoKTtcblx0fVxuXG5cblx0LyoqXG5cdCAqIEVtaXQgYSBwbGF5ZXIgZXZlbnQgKHRoZSBuYW1lIG9mIGV2ZW50IHdvdWxkIGJlIGEgbGVwbGF5ZXJfc210aClcblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50TmFtZVxuXHQgKiBAcGFyYW0ge0FyZ3VtZW50c30gLi4uYXJncyBqUXVlcnkuZm4ub24gb3RoZXIgYXJndW1lbnRzXG5cdCAqIEByZXR1cm5zIHtQbGF5ZXJ9IHRoaXNcblx0ICovXG5cdHRyaWdnZXIoZXZlbnROYW1lLCAuLi5hcmdzKSB7XG5cdFx0Y29uc3QgZXZlbnQgPSAkLkV2ZW50KGBsZXBsYXllcl8ke2V2ZW50TmFtZX1gLCB7IHBsYXllciA6IHRoaXMucGxheWVyIH0pO1xuXHRcdHRoaXMuZWxlbWVudC50cmlnZ2VySGFuZGxlcihldmVudCwgLi4uYXJncyk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBMaXN0ZW4gYSBwbGF5ZXIgZXZlbnQgd2l0aCBsZXBsYXllcl8gc3VmZml4XG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBldmVudE5hbWVcblx0ICogQHBhcmFtIHtBcmd1bWVudHN9IC4uLmFyZ3MgalF1ZXJ5LmZuLm9uIG90aGVyIGFyZ3VtZW50c1xuXHQgKiBAcmV0dXJucyB7UGxheWVyfSB0aGlzXG5cdCAqL1xuXHRvbihldmVudE5hbWUsIC4uLmFyZ3MpIHtcblx0XHR0aGlzLmVsZW1lbnQub24oYGxlcGxheWVyXyR7ZXZlbnROYW1lfWAsIC4uLmFyZ3MpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblxuXHRvbmUoZXZlbnROYW1lLCAuLi5hcmdzKSB7XG5cdFx0dGhpcy5lbGVtZW50Lm9uZShgbGVwbGF5ZXJfJHtldmVudE5hbWV9YCwgLi4uYXJncyk7XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBBZGQgdGhlIENTUyBjbGFzcyBmb3IgZ2VuZXJhbCBsZXBsYXllciBET00gZWxlbWVudFxuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIE5hbWUgb2YgY2xhc3MgKG5vdCBhIHNlbGVjdG9yLCBpdCdzIG1lYW4sIHRoYXQgc3RyaW5nIHNvdWxkIGJlIHdpdGhvdXQgcG9pbnQgYXQgdGhlIHN0YXJ0KVxuXHQgKiBAcmV0dXJucyB7UGxheWVyfSB0aGlzXG5cdCAqL1xuXHRhZGRDbGFzcyhjbGFzc05hbWUpIHtcblx0XHR0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoY2xhc3NOYW1lKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8qKlxuXHQgKiBSZW1vdmUgdGhlIENTUyBjbGFzcyBmcm9tIGdlbmVyYWwgbGVwbGF5ZXIgRE9NIGVsZW1lbnRcblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZSBOYW1lIG9mIGNsYXNzXG5cdCAqIEByZXR1cm5zIHtQbGF5ZXJ9IHRoaXNcblx0ICovXG5cdHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkge1xuXHRcdHRoaXMuZWxlbWVudC5yZW1vdmVDbGFzcyhjbGFzc05hbWUpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRvZ2dsZSB0aGUgQ1NTIGNsYXNzIGZyb20gZ2VuZXJhbCBsZXBsYXllciBET00gZWxlbWVudFxuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lXG5cdCAqIEBwYXJhbSB7Qm9vbGVhbn0gZmxhZ1xuXHQgKiBAcmV0dXJucyB7UGxheWVyfSB0aGlzXG5cdCAqL1xuXHR0b2dnbGVDbGFzcyhjbGFzc05hbWUsIGZsYWcpIHtcblx0XHR0aGlzLmVsZW1lbnQudG9nZ2xlQ2xhc3MoY2xhc3NOYW1lLCBmbGFnKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGhhc0NsYXNzKGNsYXNzTmFtZSkge1xuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQuaGFzQ2xhc3MoY2xhc3NOYW1lKTtcblx0fVxuXG5cblx0c3RhdGljIHJlZ2lzdGVyQ29tcG9uZW50KG5hbWUsIGNvbXBvbmVudCkge1xuXHRcdGlmKG5hbWUgPT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmKENvbXBvbmVudC5fY29tcG9uZW50cyA9PSBudWxsKSB7XG5cdFx0XHRDb21wb25lbnQuX2NvbXBvbmVudHMgPSB7fTtcblx0XHR9XG5cblx0XHRDb21wb25lbnQuX2NvbXBvbmVudHNbbmFtZV0gPSBjb21wb25lbnQ7XG5cblx0XHRyZXR1cm4gY29tcG9uZW50O1xuXHR9XG5cblx0c3RhdGljIGdldENvbXBvbmVudChuYW1lKSB7XG5cdFx0aWYobmFtZSA9PSBudWxsKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYoQ29tcG9uZW50Ll9jb21wb25lbnRzICYmIENvbXBvbmVudC5fY29tcG9uZW50c1tuYW1lXSkge1xuXHRcdFx0cmV0dXJuIENvbXBvbmVudC5fY29tcG9uZW50c1tuYW1lXTtcblx0XHR9XG5cblx0fVxuXG5cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdDb21wb25lbnQnLCBDb21wb25lbnQpO1xuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvQ29tcG9uZW50LmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBJY29uLmpzXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gSWNvbidzIG9wdGlvbnNcbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5pY29uTmFtZT0nJ10gSWNvbidzIG5hbWUuIElmIHVzZSBzdmdzcHJpdGUgaWNvbnMsIGljb25OYW1lIGl0J3MgaWQgaW4gc3ByaXRlXG4gKiBAY2xhc3MgSWNvblxuICogQGV4dGVuZHMgQ29tcG9uZW50XG4gKi9cbmNsYXNzIEljb24gZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yIChwbGF5ZXIsIG9wdGlvbnM9e30pIHtcblx0XHRvcHRpb25zID0gJC5leHRlbmQoe30sIHtcblx0XHRcdGNsYXNzTmFtZSA6ICcnLFxuXHRcdFx0aWNvbk5hbWUgOiAnJ1xuXHRcdH0sIG9wdGlvbnMpXG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblxuXHR9XG5cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdHRoaXMuX3VzZVRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAndXNlJyk7XG5cdFx0dGhpcy5fc3ZnVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcblxuXHRcdHRoaXMuaWNvbk5hbWUgPSB0aGlzLl9pY29uTmFtZSA9IHRoaXMub3B0aW9ucy5pY29uTmFtZTtcblx0XHR0aGlzLl9zdmdUYWcuYXBwZW5kQ2hpbGQodGhpcy5fdXNlVGFnKTtcblx0XHR0aGlzLmVsZW1lbnQgPSAkKCc8ZGl2IC8+Jylcblx0XHRcdC5hZGRDbGFzcyh0aGlzLmJ1aWxkQ1NTQ2xhc3MoKSlcblx0XHRcdC5hdHRyKCd0aXRsZScsIHRoaXMub3B0aW9ucy50aXRsZSlcblx0XHRcdC5hcHBlbmQoJCh0aGlzLl9zdmdUYWcpKTtcblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50O1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0YnVpbGRDU1NDbGFzcygpIHtcblx0XHRyZXR1cm4gYCR7c3VwZXIuYnVpbGRDU1NDbGFzcygpfSBsZXBsYXllci1pY29uICR7dGhpcy5vcHRpb25zLmNsYXNzTmFtZX1gXG5cdH1cblxuXHQvKipcblx0ICogU2V0dGVyIG9mIGljb25OYW1lIGZpZWxkXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBpY29uTmFtZVxuXHQgKi9cblx0c2V0IGljb25OYW1lKGljb25OYW1lKSB7XG5cdFx0bGV0IGF0dHJOUyA9IFsnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycsICdocmVmJ11cblx0XHR0aGlzLl91c2VUYWcucmVtb3ZlQXR0cmlidXRlTlMoLi4uYXR0ck5TLCBgJHt0aGlzLnBsYXllci5vcHRpb25zLnN2Z1BhdGh9I2xlcGxheWVyLWljb24tJHt0aGlzLmljb25OYW1lfWApXG5cdFx0dGhpcy5fdXNlVGFnLnNldEF0dHJpYnV0ZU5TKC4uLmF0dHJOUywgYCR7dGhpcy5wbGF5ZXIub3B0aW9ucy5zdmdQYXRofSNsZXBsYXllci1pY29uLSR7aWNvbk5hbWV9YClcblx0XHR0aGlzLl9pY29uTmFtZSA9IGljb25OYW1lO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldHRlciBvZiBpY29uTmFtZSBmaWVsZFxuXHQgKiBAcmV0dXJuIHtTdHJpbmd9IEljb24ncyBuYW1lXG5cdCAqL1xuXHRnZXQgaWNvbk5hbWUgKCkge1xuXHRcdHJldHVybiB0aGlzLl9pY29uTmFtZTtcblx0fVxuXG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnSWNvbicsIEljb24pO1xuZXhwb3J0IGRlZmF1bHQgSWNvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL0ljb24uanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIFBsYXlCdXR0b24uanNcbiAqL1xuXG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL0NvbnRyb2wnO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgSWNvbiBmcm9tICcuL0ljb24nO1xuaW1wb3J0IHsgY3JlYXRlRWwgfSBmcm9tICcuLi91dGlscyc7XG5cbi8qKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICovXG5jbGFzcyBQbGF5QnV0dG9uIGV4dGVuZHMgQ29udHJvbCB7XG5cblx0Y29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKVxuXG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdkYmxjbGljaycsIHRoaXMuX29uRGJjbGljay5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0Y29uc3QgaW5uZXIgPSBjcmVhdGVFbCgnZGl2Jywge1xuXHRcdFx0Y2xhc3NOYW1lIDogJ2xlcGxheWVyLXBsYXktYnV0dG9uX19idXR0b24nXG5cdFx0fSlcblx0XHQuYXBwZW5kKG5ldyBJY29uKHRoaXMucGxheWVyLCB7IGljb25OYW1lIDogJ3BsYXknIH0pLmVsZW1lbnQpO1xuXG5cdFx0dGhpcy5lbGVtZW50ID0gY3JlYXRlRWwoJ2RpdicsIHtcblx0XHRcdGNsYXNzTmFtZSA6IHRoaXMuYnVpbGRDU1NDbGFzc1xuXHRcdH0pXG5cdFx0LmFwcGVuZChpbm5lcik7XG5cblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50O1xuXHR9XG5cblx0b25DbGljayhlKSB7XG5cdFx0c3VwZXIub25DbGljayhlKTtcblx0XHR0aGlzLnBsYXllci50cmlnZ2VyKCdjbGljaycpO1xuXHR9XG5cblx0X29uRGJjbGljaygpIHtcblx0XHR0aGlzLnBsYXllci50cmlnZ2VyKCdkYmxjbGljaycpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0YnVpbGRDU1NDbGFzcygpIHtcblx0XHRyZXR1cm4gYGxlcGxheWVyLXBsYXktYnV0dG9uYFxuXHR9XG5cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdQbGF5QnV0dG9uJywgUGxheUJ1dHRvbik7XG5Db250cm9sLnJlZ2lzdGVyQ29udHJvbCgncGxheSBidXR0b24nLCBQbGF5QnV0dG9uKTtcbmV4cG9ydCBkZWZhdWx0IFBsYXlCdXR0b247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9QbGF5QnV0dG9uLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSB0aW1lLmpzXG4gKlxuICogQG1vZHVsZSB0aW1lXG4gKi9cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbi8qKlxuICogQ29udmVydCBzZWNvbmRzIHRvIGZvcm1hdCBzdHJpbmcgJ2hoPzptbTpzcydcbiAqXG4gKiBAYWNjZXNzIHB1YmxpY1xuICogQHBhcmFtIHtOdW1iZXJ9IHNlY29uZHMgU2Vjb25kc1xuICogQHBhcmFtIHtCb29sZWFufSBzaG93SG91cnMgY29udmVydCB0byBmb3JtYXQgJ2hoOm1tOnNzJ1xuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNlY29uZHNUb1RpbWUgKHNlY29uZHMsIHNob3dIb3Vycykge1xuXHR2YXIgaCA9IE1hdGguZmxvb3Ioc2Vjb25kcyAvIDM2MDApO1xuXHR2YXIgbSA9IE1hdGguZmxvb3Ioc2Vjb25kcyAlIDM2MDAgLyA2MCk7XG5cdHZhciBzID0gTWF0aC5mbG9vcihzZWNvbmRzICUgMzYwMCAlIDYwKTtcblx0dmFyIG91dCA9ICcnO1xuXHRpZiAobSA8IDEwKSB7XG5cdFx0bSA9ICcwJyArIG07XG5cdH1cblx0aWYgKHMgPCAxMCkge1xuXHRcdHMgPSAnMCcgKyBzO1xuXHR9XG5cdG91dCA9IGAke219OiR7c31gO1xuXG5cdGlmKGggPiAwIHx8IHNob3dIb3Vycykge1xuXHRcdG91dCA9IGAke2h9OmAgKyBvdXRcblx0fVxuXHRyZXR1cm4gb3V0O1xufVxuXG5cbi8qKlxuICogUmV0dXJuIGxlbmd0aCAvIGVuZFxuICpcbiAqIEBhY2Nlc3MgcHVibGljXG4gKiBAcGFyYW0ge051bWJlcn0gbGVuZ3RoXG4gKiBAcGFyYW0ge051Ym1lcn0gZW5kXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwZXJjZW50aWZ5IChsZW5ndGgsIGVuZCkge1xuXHQvLyBvciB6ZXJvIGJlYWNhc2UgTmFOXG5cdGNvbnN0IHBlcmNlbnQgPSAobGVuZ3RoIC8gZW5kKSB8fCAwO1xuXHRyZXR1cm4gKHBlcmNlbnQgPj0gMSkgPyAxIDogcGVyY2VudDtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWwodGFnPSdkaXYnLCBwcm9wcykge1xuXHRpZihwcm9wcyAmJiBwcm9wcy5jbGFzc05hbWUpIHtcblx0XHRwcm9wc1tcImNsYXNzXCJdID0gcHJvcHMuY2xhc3NOYW1lO1xuXHRcdGRlbGV0ZSBwcm9wcy5jbGFzc05hbWU7XG5cdH1cblx0cmV0dXJuICQoYDwke3RhZ30vPmAsIHByb3BzKTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gbm9vcCgpIHt9XG5cbmV4cG9ydCBjb25zdCBnZXRTY3JvbGxCYXJXaWR0aCA9IChmdW5jdGlvbigpIHtcblx0bGV0IHJlc3VsdDtcblxuXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cblx0XHRpZihyZXN1bHQgIT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9XG5cblx0XHRjb25zdCBvdXRlciA9ICQoJzxkaXYgLz4nKS5jc3Moe1xuXHRcdFx0dmlzaWJpbGl0eSA6ICdoaWRkZW4nLFxuXHRcdFx0d2lkdGggOiAxMDAsXG5cdFx0XHRvdmVyZmxvdyA6ICdzY3JvbGwnXG5cdFx0fSkuYXBwZW5kVG8oJ2JvZHknKTtcblxuXHRcdGNvbnN0IHdpZHRoV2l0aFNjcm9sbCA9ICQoJzxkaXYgLz4nKS5jc3Moe1xuXHRcdFx0d2lkdGggOiAnMTAwJSdcblx0XHR9KS5hcHBlbmRUbyhvdXRlcikub3V0ZXJXaWR0aCgpO1xuXG5cdFx0b3V0ZXIucmVtb3ZlKCk7XG5cdFx0cmV0dXJuIHJlc3VsdCA9IDEwMCAtIHdpZHRoV2l0aFNjcm9sbDtcblx0fVxuXG59KCkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL3V0aWxzL2luZGV4LmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBTcGxhc2hJY29uLmpzXG4gKi9cblxuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgSWNvbiBmcm9tICcuL0ljb24nO1xuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEBjbGFzcyBTcGxhc2hJY29uXG4gKiBAZXh0ZW5kcyBDb21wb25lbnRcbiAqL1xuY2xhc3MgU3BsYXNoSWNvbiBleHRlbmRzIENvbXBvbmVudCB7XG5cblx0c2hvdyhuYW1lKSB7XG5cdFx0dGhpcy5pY29uLmljb25OYW1lID0gbmFtZTtcblx0XHR0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoJ2xlcGxheWVyLXNwbGFzaGljb24tLWFjdGl2ZScpO1xuXHRcdHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbGVtZW50LnJlbW92ZUNsYXNzKCdsZXBsYXllci1zcGxhc2hpY29uLS1hY3RpdmUnKSwgMzAwKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0dGhpcy5pY29uID0gbmV3IEljb24odGhpcy5wbGF5ZXIpO1xuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQgPSAkKCc8ZGl2IC8+Jylcblx0XHRcdC5hZGRDbGFzcygnbGVwbGF5ZXItc3BsYXNoaWNvbicpXG5cdFx0XHQuYXBwZW5kKHRoaXMuaWNvbi5lbGVtZW50KTtcblx0fVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNwbGFzaEljb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9TcGxhc2hJY29uLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBUaW1lLmpzXG4gKi9cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL0NvbXBvbmVudCc7XG5pbXBvcnQgeyBzZWNvbmRzVG9UaW1lLCBjcmVhdGVFbCB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuLy8gVE9ETzog0JjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGMINGN0YLQvtGCINCx0LvQvtC6INCyIFRpbWVDb250cm9sXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEBjbGFzcyBUaW1lXG4gKiBAZXh0ZW5kcyBDb250cm9sXG4gKi9cbmNsYXNzIFRpbWUgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yIChwbGF5ZXIsIG9wdGlvbnM9e30pIHtcblx0XHRvcHRpb25zID0gJC5leHRlbmQoe30sIHtcblx0XHRcdGZuIDogKHBsYXllcikgPT4ge1xuXHRcdFx0XHRjb25zdCB2aWRlbyA9IHBsYXllci52aWRlbztcblx0XHRcdFx0cmV0dXJuIHNlY29uZHNUb1RpbWUodmlkZW8uY3VycmVudFRpbWUpO1xuXHRcdFx0fVxuXHRcdH0sIG9wdGlvbnMpO1xuXG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblxuXHRcdHRoaXMucGxheWVyLm9uKCd0aW1ldXBkYXRlJywgdGhpcy51cGRhdGVUZXh0LmJpbmQodGhpcykpO1xuXHRcdHRoaXMucGxheWVyLm9uKCdpbml0ZWQnLCB0aGlzLnVwZGF0ZVRleHQuYmluZCh0aGlzKSk7XG5cdH1cblxuXHR1cGRhdGVUZXh0KGUsIGRhdGEpIHtcblx0XHR0aGlzLmVsZW1lbnQudGV4dCh0aGlzLm9wdGlvbnMuZm4odGhpcy5wbGF5ZXIpKTtcblx0fVxuXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0dGhpcy5lbGVtZW50ID0gY3JlYXRlRWwoJ2RpdicsIHsgY2xhc3NOYW1lIDogJ2xlcGxheWVyLXRpbWUnIH0pO1xuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQ7XG5cdH1cblxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ1RpbWUnLCBUaW1lKTtcbmV4cG9ydCBkZWZhdWx0IFRpbWU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9UaW1lbGluZS9UaW1lLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBDb250cm9sQ29sbGVjdGlvbi5qc1xuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCBDb250cm9sIGZyb20gJy4vQ29udHJvbCc7XG5cbmltcG9ydCB7IGNyZWF0ZUVsIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG5cbi8qKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBPcHRpb25zIG9mIGNvbXBvbmVudFxuICogQHBhcmFtIHtqUXVlcnl9IFtvcHRpb25zLmNvbnRyb2xzXSBBcnJheSBvZiByb3dzIG9mIGNvbnRyb2wncyBuYW1lXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMuY29udHJvbHNPcHRpb25zXSBDb250cm9sIG9wdGlvbnNcbiAqIEBwcm9wZXJ0eSB7QXJyYXl9IEFycmF5IG9mIHJvd3Mgb2YgY29udHJvbCdzIG5hbWVcbiAqIEBwclxuICpcbiAqL1xuY2xhc3MgQ29udHJvbENvbGxlY3Rpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3RvciAocGxheWVyLCBvcHRpb25zKSB7XG5cdFx0Y29uc3QgbmFtZSA9IG9wdGlvbnMubmFtZTtcblxuXHRcdGxldCBwbGF5ZXJPcHRpb25zID0ge1xuXHRcdFx0Y29udHJvbHMgOiBwbGF5ZXIub3B0aW9ucy5jb250cm9sc1tuYW1lXSxcblx0XHR9XG5cblx0XHRpZihwbGF5ZXIub3B0aW9ucy5jb250cm9sc09wdGlvbnNbbmFtZV0pIHtcblx0XHRcdHBsYXllck9wdGlvbnNbJ2FsaWduJ10gPSBwbGF5ZXIub3B0aW9ucy5jb250cm9sc09wdGlvbnNbbmFtZV0uYWxpZ247XG5cdFx0XHRwbGF5ZXJPcHRpb25zWydjb250cm9sc09wdGlvbnMnXSA9IHBsYXllci5vcHRpb25zLmNvbnRyb2xzT3B0aW9uc1tuYW1lXS5jb250cm9scztcblx0XHR9XG5cblx0XHRvcHRpb25zID0gJC5leHRlbmQoe30sIHtcblx0XHRcdGNvbnRyb2xzIDogW10sXG5cdFx0XHRjb250cm9sc09wdGlvbnMgOiB7fSxcblx0XHRcdGFsaWduIDogJ2xlZnQnLFxuXHRcdH0sIHBsYXllck9wdGlvbnMsIG9wdGlvbnMpO1xuXG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblxuXHRcdHRoaXMuYWN0aXZlID0gb3B0aW9ucy5hY3RpdmUgfHwgZmFsc2U7XG5cdFx0dGhpcy5uYW1lID0gb3B0aW9ucy5uYW1lO1xuXG5cdFx0dGhpcy5wbGF5ZXIuY29udHJvbHNbdGhpcy5uYW1lXSA9IHRoaXM7XG5cdH1cblxuXG5cdF9nZXRDb250cm9sT3B0aW9ucyhuYW1lKSB7XG5cdFx0Y29uc3QgeyBjb250cm9sc09wdGlvbnMgfSA9IHRoaXMub3B0aW9ucztcblx0XHRsZXQgcmVzdWx0ID0gY29udHJvbHNPcHRpb25zLmNvbnRyb2wgfHwge307XG5cblx0XHRpZihjb250cm9sc09wdGlvbnNbbmFtZV0pIHtcblx0XHRcdHJlc3VsdCA9ICQuZXh0ZW5kKHRydWUsIHt9LCByZXN1bHQsIGNvbnRyb2xzT3B0aW9uc1tuYW1lXSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdGFkZENvbnRyb2woaW5kZXhSb3csIG5hbWUsIG9wdGlvbnMpIHtcblx0XHRjb25zdCBjb250cm9sID0gQ29udHJvbC5jcmVhdGUodGhpcy5wbGF5ZXIsIG5hbWUsIHtcblx0XHRcdGNvbGxlY3Rpb24gOiB0aGlzLm9wdGlvbnMubmFtZSxcblx0XHRcdC4uLm9wdGlvbnNcblx0XHR9KTtcblxuXHRcdGlmKGNvbnRyb2wgPT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHdoaWxlKGluZGV4Um93ID4gdGhpcy5fcm93cy5sZW5ndGgpIHtcblx0XHRcdHRoaXMuYWRkUm93KCk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgZWxlbVJvdyA9IHRoaXMuX3Jvd3NbaW5kZXhSb3ddO1xuXHRcdGVsZW1Sb3cuYXBwZW5kKGNvbnRyb2wuZWxlbWVudCk7XG5cblx0XHRpZiAodGhpcy5jb250cm9scyA9PSBudWxsKSB7XG5cdFx0XHR0aGlzLmNvbnRyb2xzID0gW107XG5cdFx0fVxuXHRcdGlmICh0aGlzLmNvbnRyb2xzW2luZGV4Um93XSA9PSBudWxsKSB7XG5cdFx0XHR0aGlzLmNvbnRyb2xzW2luZGV4Um93XSA9IHt9O1xuXHRcdH1cblxuXHRcdHRoaXMuY29udHJvbHNbaW5kZXhSb3ddW25hbWVdID0gY29udHJvbDtcblx0fVxuXG5cdGdldENvbnRyb2woZmlyc3QsIHNlY29uZCkge1xuXHRcdGlmKHNlY29uZCA9PSBudWxsKSB7XG5cdFx0XHRjb25zdCBuYW1lID0gZmlyc3Q7XG5cdFx0XHRmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5jb250cm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZih0aGlzLmNvbnRyb2xzW2ldW25hbWVdICE9IG51bGwpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5jb250cm9sc1tpXVtuYW1lXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zdCBuYW1lID0gZmlyc3Q7XG5cdFx0XHRjb25zdCBpbmRleFJvdyA9IHNlY29uZDtcblx0XHRcdHJldHVybiB0aGlzLmNvbnRyb2xzW2luZGV4Um93XVtuYW1lXTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGFkZFJvdygpIHtcblx0XHRjb25zdCBlbGVtUm93ID0gY3JlYXRlRWwoJ2RpdicsIHtcblx0XHRcdGNsYXNzTmFtZSA6IGBsZXBsYXllci1jb250cm9scyBjb250cm9scy0ke3RoaXMub3B0aW9ucy5uYW1lfWBcblx0XHR9KTtcblxuXHRcdGlmICh0aGlzLl9yb3dzID09IG51bGwpIHtcblx0XHRcdHRoaXMuX3Jvd3MgPSBbXVxuXHRcdH1cblx0XHR0aGlzLl9yb3dzLnB1c2goZWxlbVJvdyk7XG5cdFx0dGhpcy5lbGVtZW50LmFwcGVuZChlbGVtUm93KTtcblxuXHRcdHJldHVybiBlbGVtUm93O1xuXHR9XG5cblx0Z2V0Um93KGluZGV4Um93KSB7XG5cdFx0cmV0dXJuIHRoaXMuX3Jvd3NbaW5kZXhSb3cgfHwgMF07XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdGNvbnN0IHsgbmFtZSwgY29udHJvbHMsIGFsaWduIH0gPSB0aGlzLm9wdGlvbnM7XG5cdFx0bGV0IGdsb2JhbEFsaWduID0gbnVsbDtcblxuXHRcdHRoaXMuZWxlbWVudCA9IGNyZWF0ZUVsKCdkaXYnLCB7XG5cdFx0XHRjbGFzc05hbWUgOiBgbGVwbGF5ZXItY29udHJvbC1jb2xsZWN0aW9uIGxlcGxheWVyLWNvbnRyb2wtY29sbGVjdGlvbi0tJHtuYW1lfWAsXG5cdFx0fSlcblxuXHRcdGlmKHR5cGVvZiBhbGlnbiA9PT0gJ3N0cmluZycpIHtcblx0XHRcdGdsb2JhbEFsaWduID0gYWxpZ247XG5cdFx0fVxuXG5cdFx0Y29udHJvbHMuZm9yRWFjaCgocm93LCBpbmRleFJvdykgPT4ge1xuXHRcdFx0Y29uc3QgZWxlbVJvdyA9IHRoaXMuYWRkUm93KCk7XG5cdFx0XHRsZXQgcm93QWxpZ24gPSBnbG9iYWxBbGlnbjtcblxuXHRcdFx0aWYoQXJyYXkuaXNBcnJheShhbGlnbikgJiYgYWxpZ25baW5kZXhSb3ddKSB7XG5cdFx0XHRcdHJvd0FsaWduID0gYWxpZ25baW5kZXhSb3ddXG5cdFx0XHR9XG5cblx0XHRcdHJvdy5mb3JFYWNoKGNvbnRyb2xOYW1lID0+IHtcblxuXHRcdFx0XHRpZihjb250cm9sTmFtZSA9PT0gJ3RpbWVsaW5lJyAmJiByb3dBbGlnbiAhPT0gJ2p1c3RpZnknKSB7XG5cdFx0XHRcdFx0Y29uc29sZS53YXJuKCdDb25yb2xzIHNob3VsZCBoYXZlIGp1c3RpZnkgYWxpZ24sIGlmIHRoZXJlIGlzIHRoZSB0aW1lbGluZSBpbiBpdCcpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5hZGRDb250cm9sKGluZGV4Um93LCBjb250cm9sTmFtZSwgdGhpcy5fZ2V0Q29udHJvbE9wdGlvbnMobmFtZSkpO1xuXHRcdFx0fSk7XG5cblx0XHRcdGVsZW1Sb3cuYWRkQ2xhc3MoYGxlcGxheWVyLWNvbnRyb2xzLS0ke3Jvd0FsaWdufWApXG5cdFx0XHRcdC5hdHRyKCd0YWJpbmRleCcsIDApO1xuXG5cdFx0XHRlbGVtUm93LmZpbmQoJy5kaXZpZGVyICsgLmRpdmlkZXInKS5yZW1vdmUoKTtcblx0XHR9KTtcblxuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQ7XG5cdH1cblxuXHRoaWRlICgpIHtcblx0XHR0aGlzLmVsZW1lbnQuaGlkZSgpO1xuXHRcdHRoaXMuZWxlbWVudC5maW5kKCcubGVwbGF5ZXItY29udHJvbHMnKS5oaWRlKClcblx0fVxuXG5cdHNob3cgKCkge1xuXHRcdHRoaXMuZWxlbWVudC5zaG93KClcblx0XHR0aGlzLmVsZW1lbnQuZmluZCgnLmxlcGxheWVyLWNvbnRyb2xzJykuc2hvdygpXG5cdH1cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdDb250cm9sQ29sbGVjdGlvbicsIENvbnRyb2xDb2xsZWN0aW9uKTtcbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xDb2xsZWN0aW9uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvQ29udHJvbENvbGxlY3Rpb24uanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIFNlY3Rpb25zLmpzXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuXG5pbXBvcnQgeyBzZWNvbmRzVG9UaW1lLCBnZXRTY3JvbGxCYXJXaWR0aCB9IGZyb20gJy4uL3V0aWxzJztcbi8qKlxuICogQGNsYXNzIFNlY3Rpb25zXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAcGFyYW0ge0FycmF5fSBbb3B0aW9ucy5pdGVtcz1bXX0gRGF0YSBmb3Igc2VjdGlvbnNcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMudmlld3NdIFNob3cgc2VjdGlvbiBvbmx5IGluIGZ1bGxzY3JlZW5cbiAqIEBleHRlbmRzIENvbXBvbmVudFxuICovXG5jbGFzcyBTZWN0aW9ucyBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucykge1xuXHRcdGxldCB7IGl0ZW1zID0gW10gfSA9IG9wdGlvbnM7XG5cdFx0aXRlbXMgPSBbXS5jb25jYXQoaXRlbXMpO1xuXG5cdFx0Ly9vcHRpb25zLml0ZW1zID0gaXRlbXM7XG5cblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXG5cdFx0dGhpcy5zY3JvbGxFbGVtZW50ID0gdGhpcy5faW5uZXJFbGVtZW50O1xuXHRcdHRoaXMuYWN0aXZlU2VjdGlvbiA9IHRoaXMuZ2V0U2VjdGlvbkJ5SW5kZXgoMCk7XG5cblx0XHR0aGlzLml0ZW1zID0gaXRlbXM7XG5cdFx0dGhpcy5sZW5ndGggPSB0aGlzLml0ZW1zLmxlbmd0aDtcblxuXHRcdHRoaXMuc2V0QWN0aXZlQnlJbmRleCgwKTtcblxuXHRcdHRoaXMuZWxlbWVudFxuXHRcdFx0LmZpbmQoJy5sZXBsYXllci1zZWN0aW9uJylcblx0XHRcdC5vbignY2xpY2snLCB0aGlzLm9uU2VjdGlvbkNsaWNrLmJpbmQodGhpcykpO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ3NlY3Rpb25zdG9nZ2xlJywgdGhpcy5fb25TZWN0aW9uc1RvZ2dsZS5iaW5kKHRoaXMpKTtcblxuXHRcdHRoaXMucGxheWVyLm9uKCd0aW1ldXBkYXRlJywgdGhpcy5vblRpbWVVcGRhdGUuYmluZCh0aGlzKSk7XG5cblx0XHR0aGlzLnBsYXllci5vbignaW5pdGVkJywgdGhpcy51cGRhdGVTZWN0aW9uRHVyYXRpb24uYmluZCh0aGlzKSk7XG5cblx0XHR0aGlzLnBsYXllci5vbignZHVyYXRpb25jaGFuZ2UnLCB0aGlzLnVwZGF0ZVNlY3Rpb25EdXJhdGlvbi5iaW5kKHRoaXMpKTtcblxuXHRcdHRoaXMucGxheWVyLm9uKCdmb2N1cycsICgpID0+IHRoaXMucGxheWVyLmZvY3VzKCkpO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRuZXh0KCkge1xuXHRcdGNvbnN0IHNlY3Rpb25JbmRleCA9IHBhcnNlSW50KHRoaXMuYWN0aXZlU2VjdGlvbi5hdHRyKCdkYXRhLWluZGV4JykpO1xuXHRcdGNvbnN0IG5ld0luZGV4ID0gc2VjdGlvbkluZGV4ID49IHRoaXMubGVuZ3RoID8gdGhpcy5sZW5ndGggOiBzZWN0aW9uSW5kZXggKyAxO1xuXG5cdFx0dGhpcy5zZXRBY3RpdmVCeUluZGV4KG5ld0luZGV4KTtcblxuXHRcdHRoaXMucGxheWVyLnZpZGVvLmN1cnJlbnRUaW1lID0gdGhpcy5pdGVtc1tzZWN0aW9uSW5kZXhdLmVuZDtcblx0fVxuXG5cdHByZXYoKSB7XG5cdFx0Y29uc3Qgc2VjdGlvbkluZGV4ID0gcGFyc2VJbnQodGhpcy5hY3RpdmVTZWN0aW9uLmF0dHIoJ2RhdGEtaW5kZXgnKSk7XG5cdFx0Y29uc3QgbmV3SW5kZXggPSBzZWN0aW9uSW5kZXggPD0gMCA/IDAgOiBzZWN0aW9uSW5kZXggLSAxO1xuXG5cdFx0dGhpcy5zZXRBY3RpdmVCeUluZGV4KG5ld0luZGV4KTtcblx0XHR0aGlzLnBsYXllci52aWRlby5jdXJyZW50VGltZSA9IHRoaXMuaXRlbXNbbmV3SW5kZXhdLmJlZ2luO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHRjb25zdCB7IGZ1bGxzY3JlZW5Pbmx5LCBoaWRlU2Nyb2xsIH0gPSB0aGlzLm9wdGlvbnM7XG5cblxuXHRcdHRoaXMuZWxlbWVudCA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0LmFkZENsYXNzKCdsZXBsYXllci1zZWN0aW9ucycpXG5cdFx0XHQuYXR0cigndGFiaW5kZXgnLCAnMCcpO1xuXG5cdFx0dGhpcy5faW5uZXJFbGVtZW50ID0gJCgnPGRpdiAvPicpLmFkZENsYXNzKCdsZXBsYXllci1zZWN0aW9uc19faW5uZXInKTtcblxuXHRcdGlmKGZ1bGxzY3JlZW5Pbmx5KSB7XG5cdFx0XHR0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoJ2xlcGxheWVyLXNlY3Rpb25zLS1mc29ubHknKTtcblx0XHR9XG5cblx0XHRpZihoaWRlU2Nyb2xsKSB7XG5cdFx0XHR0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoJ2xlcGxheWVyLXNlY3Rpb25zLS1oaWRlLXNjcm9sbCcpO1xuXHRcdFx0dGhpcy5faW5uZXJFbGVtZW50LmNzcyh7XG5cdFx0XHRcdHJpZ2h0IDogLTEgKiBnZXRTY3JvbGxCYXJXaWR0aCgpXG5cdFx0XHR9KVxuXHRcdH1cblxuXHRcdHRoaXMuZWxlbWVudC5hcHBlbmQoXG5cdFx0XHR0aGlzLl9pbm5lckVsZW1lbnQuYXBwZW5kKHRoaXMuX2NyZWF0ZVNlY3Rpb25zKHRoaXMub3B0aW9ucy5pdGVtcykpXG5cdFx0KVxuXG5cblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50O1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0dXBkYXRlU2VjdGlvbkR1cmF0aW9uKCkge1xuXHRcdGlmKHRoaXMuaXRlbXMgIT0gbnVsbCAmJiB0aGlzLml0ZW1zLmxlbmd0aCA+IDApIHtcblx0XHRcdGNvbnN0IGxlbmd0aCA9IHRoaXMuaXRlbXMubGVuZ3RoXG5cdFx0XHR0aGlzLml0ZW1zW2xlbmd0aCAtIDFdLmVuZCA9IHRoaXMucGxheWVyLnZpZGVvLmR1cmF0aW9uO1xuXG5cdFx0XHQvLyBUT0RPOiDQn9GA0L7QtNGD0LzQsNGC0Ywg0YTRg9C90LrRhtC40Y/RjiB1cGRhdGVTZWN0aW9uXG5cdFx0XHQvL3RoaXMudXBkYXRlU2VjdGlvbih0aGlzLml0ZW1zW2xlbmd0aCAtIDFdLCBsZW5ndGggLSAxKTtcblx0XHR9XG5cdH1cblxuXG5cdG9uU2VjdGlvbkNsaWNrKGUpIHtcblx0XHRjb25zdCB2aWRlbyA9IHRoaXMucGxheWVyLnZpZGVvO1xuXHRcdGNvbnN0IHNlY3Rpb24gPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCcubGVwbGF5ZXItc2VjdGlvbicpO1xuXHRcdHZpZGVvLmN1cnJlbnRUaW1lID0gc2VjdGlvbi5hdHRyKCdkYXRhLWJlZ2luJyk7XG5cdFx0dGhpcy5wbGF5ZXIudHJpZ2dlcignc2VjdGlvbnNjbGljaycsIHsgc2VjdGlvbiA6IHRoaXMuaXRlbXNbc2VjdGlvbi5hdHRyKCdkYXRhLWluZGV4JyldfSk7XG5cdH1cblxuXHRzZXRBY3RpdmVCeUluZGV4KGluZGV4KSB7XG5cdFx0aWYgKFxuXHRcdFx0dGhpcy5hY3RpdmVTZWN0aW9uLmxlbmd0aCA9PT0gMCB8fFxuXHRcdFx0cGFyc2VJbnQodGhpcy5hY3RpdmVTZWN0aW9uLmF0dHIoJ2RhdGEtaW5kZXgnKSkgPT09IGluZGV4IHx8XG5cdFx0XHR0aGlzLmdldFNlY3Rpb25CeUluZGV4KGluZGV4KS5sZW5ndGggPT09IDBcblx0XHQpIHtcblx0XHRcdHJldHVybiB0aGlzXG5cdFx0fVxuXG5cdFx0dGhpcy5hY3RpdmVTZWN0aW9uLnJlbW92ZUNsYXNzKCdsZXBsYXllci1zZWN0aW9uLS1hY3RpdmUnKTtcblx0XHR0aGlzLmFjdGl2ZVNlY3Rpb24gPSB0aGlzLmdldFNlY3Rpb25CeUluZGV4KGluZGV4KTtcblx0XHR0aGlzLmFjdGl2ZVNlY3Rpb24uYWRkQ2xhc3MoJ2xlcGxheWVyLXNlY3Rpb24tLWFjdGl2ZScpO1xuXG5cdFx0Y29uc3QgdG9wUG9zaXRpb24gPSB0aGlzLmFjdGl2ZVNlY3Rpb24ucG9zaXRpb24oKS50b3A7XG5cblx0XHR0aGlzLnNjcm9sbEVsZW1lbnRcblx0XHRcdC5hbmltYXRlKHtcblx0XHRcdFx0c2Nyb2xsVG9wIDogdGhpcy5zY3JvbGxFbGVtZW50LnNjcm9sbFRvcCgpICsgdG9wUG9zaXRpb25cblx0XHRcdH0sIDgwMClcblxuXHRcdHRoaXMucGxheWVyLnRyaWdnZXIoJ3NlY3Rpb25zY2hhbmdlJywgeyBzZWN0aW9uIDogdGhpcy5pdGVtc1tpbmRleF19KTtcblxuXHRcdHJldHVybiB0aGlzXG5cdH1cblxuXHRnZXRTZWN0aW9uQnlJbmRleChpbmRleCkge1xuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQuZmluZChgLmxlcGxheWVyLXNlY3Rpb25bZGF0YS1pbmRleD1cIiR7aW5kZXh9XCJdYCk7XG5cdH1cblxuXG5cdG9uVGltZVVwZGF0ZShlLCBkYXRhKSB7XG5cdFx0aWYgKHRoaXMuYWN0aXZlU2VjdGlvbi5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVyblxuXHRcdH1cblxuXHRcdGNvbnN0IGN1cnJlbnRUaW1lID0gdGhpcy5wbGF5ZXIuY3VycmVudFRpbWU7XG5cblx0XHQvLyBVcGRhdGUgc3BhbiB3aXRoIGVuZCBzZWN0aW9uIHRpbWVcblx0XHQvLyBUT0RPOiDQktGL0L3QtdGB0YLQuCDRjdGC0L4g0LIg0L7RgtC00LXQu9GM0L3Ri9C5INC60L7QvNC/0L7QvdC10L3RgiBTaG93VGltZSDQuNC70Lgg0YLQuNC/0L4g0YLQvtCz0L5cblx0XHRpZih0aGlzLnBsYXllci52aWV3ID09PSAnbWluaScpIHtcblx0XHRcdGNvbnN0IGVuZFNlY3Rpb25UaW1lID0gdGhpcy5hY3RpdmVTZWN0aW9uLmF0dHIoJ2RhdGEtZW5kJyk7XG5cdFx0XHR0aGlzLmFjdGl2ZVNlY3Rpb25cblx0XHRcdFx0Lm5leHQoKVxuXHRcdFx0XHQuZmluZCgnLnRpbWUnKVxuXHRcdFx0XHQudGV4dChzZWNvbmRzVG9UaW1lKGVuZFNlY3Rpb25UaW1lIC0gY3VycmVudFRpbWUpKTtcblx0XHR9XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IHNlY3Rpb24gPSB0aGlzLml0ZW1zW2ldO1xuXHRcdFx0aWYgKGN1cnJlbnRUaW1lIDwgc2VjdGlvbi5lbmQpIHtcblx0XHRcdFx0dGhpcy5zZXRBY3RpdmVCeUluZGV4KGkpXG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdF9vblNlY3Rpb25zVG9nZ2xlKGUsIGRhdGEpIHtcblx0XHRpZiAodGhpcy5lbGVtZW50Lmhhc0NsYXNzKCdsZXBsYXllci1zZWN0aW9ucy0taGlkZGVuJykgJiYgZGF0YS5jaGVja2VkKSB7XG5cdFx0XHR0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3MoJ2xlcGxheWVyLXNlY3Rpb25zLS1oaWRkZW4nKTtcblx0XHR9IGVsc2UgaWYgKCFkYXRhLmNoZWNrZWQpIHtcblx0XHRcdHRoaXMuZWxlbWVudC5hZGRDbGFzcygnbGVwbGF5ZXItc2VjdGlvbnMtLWhpZGRlbicpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGUgSFRNTCBvZiBzZWN0aW9uIGJ5IGRhdGEgYW5kIGluZGV4IHNlY3Rpb25cblx0ICpcblx0ICogQHJldHVybnMge1N0cmluZ30gSFRNTFxuXHQgKi9cblx0Y3JlYXRlU2VjdGlvbihzZWN0aW9uLCBpbmRleCkge1xuXHRcdGNvbnN0IGl0ZW1zID0gdGhpcy5pdGVtcyB8fCB0aGlzLm9wdGlvbnMuaXRlbXM7XG5cdFx0Y29uc3QgaXRlbSA9IGBcblx0XHRcdDxkaXYgY2xhc3M9XCJsZXBsYXllci1zZWN0aW9uICR7IWluZGV4ID8gJ2xlcGxheWVyLXNlY3Rpb24tLWFjdGl2ZScgOiAnJ31cIlxuXHRcdFx0XHRkYXRhLWJlZ2luPVwiJHtzZWN0aW9uLmJlZ2lufVwiXG5cdFx0XHRcdGRhdGEtaW5kZXg9XCIke2luZGV4LnRvU3RyaW5nKCl9XCJcblx0XHRcdFx0ZGF0YS1lbmQ9XCIke3NlY3Rpb24uZW5kfVwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibGVwbGF5ZXItc2VjdGlvbi10aW1lXCI+JHtzZWNvbmRzVG9UaW1lKHNlY3Rpb24uYmVnaW4pfTwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibGVwbGF5ZXItc2VjdGlvbi1pbmZvXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImxlcGxheWVyLXNlY3Rpb24tbmV4dC1pbmZvXCI+XG5cdFx0XHRcdFx0XHQke3NlY3Rpb24ubmV4dEluZm8gfHwgJ9Ch0LvQtdC00YPRjtGJ0LDRjyDRgdC10LrRhtC40Y8g0L3QsNGH0L3QtdGC0YHRjyDRh9C10YDQtdC3J31cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwidGltZVwiPiR7c2Vjb25kc1RvVGltZShpdGVtc1swXS5lbmQpfTwvc3Bhbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQke1xuXHRcdFx0XHRcdFx0c2VjdGlvbi50aXRsZSAhPSBudWxsID9cblx0XHRcdFx0XHRcdFx0YDxkaXYgY2xhc3M9XCJsZXBsYXllci1zZWN0aW9uLXRpdGxlXCI+JHtzZWN0aW9uLnRpdGxlfTwvZGl2PmBcblx0XHRcdFx0XHRcdDogJydcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0JHtcblx0XHRcdFx0XHRcdHNlY3Rpb24uZGVzY3JpcHRpb24gIT0gbnVsbCA/XG5cdFx0XHRcdFx0XHRcdGA8ZGl2IGNsYXNzPVwibGVwbGF5ZXItc2VjdGlvbi1kZXNjcmlwdGlvblwiPiR7c2VjdGlvbi5kZXNjcmlwdGlvbn08L2Rpdj5gXG5cdFx0XHRcdFx0XHQ6ICcnXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdGAudHJpbSgpXG5cdFx0cmV0dXJuIGl0ZW1cblx0fVxuXG5cdC8vIFRPRE86INCf0YDQuNC00YPQvNCw0YLRjCDRh9GC0L4g0YHQtNC10LvQsNGC0Ywg0YEg0YHQvtCx0YvRgtC40Y/QvNC4INC/0L7RgdC70LUg0L7QsdC90L7QstC70LXQvdC40Y8g0L/QvtC70L3QvtGB0YzRjiDRgdC10LrRhtC40Lhcblx0LyoqXG5cdCAqIEZpbmQgc2VjdGlvbiBieSBpbmRleCBhbmQgdXBkYXRlIGhpbSB1c2luZyBkYXRhXG5cdCAqXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuXHQgKi9cblx0dXBkYXRlU2VjdGlvbihkYXRhLCBpbmRleCkge1xuXHRcdHRoaXMuZ2V0U2VjdGlvbkJ5SW5kZXgoaW5kZXgpXG5cdFx0XHQucmVwbGFjZVdpdGgodGhpcy5jcmVhdGVTZWN0aW9uKGRhdGEsIGluZGV4KSlcblx0XHRcdC5vbignY2xpY2snLCB0aGlzLm9uU2VjdGlvbkNsaWNrLmJpbmQodGhpcykpO1xuXHR9XG5cblx0X2NyZWF0ZVNlY3Rpb25zKGl0ZW1zKSB7XG5cdFx0bGV0IHJlc3VsdCA9ICcnO1xuXHRcdGl0ZW1zLmZvckVhY2goKHNlY3Rpb24sIGluZGV4KSA9PiB7XG5cdFx0XHRyZXN1bHQgKz0gdGhpcy5jcmVhdGVTZWN0aW9uKHNlY3Rpb24sIGluZGV4KTtcblx0XHR9KTtcblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnU2VjdGlvbnMnLCBTZWN0aW9ucyk7XG5leHBvcnQgZGVmYXVsdCBTZWN0aW9ucztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL1NlY3Rpb25zLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBFcnJvckRpc3BsYXkuanNcbiAqL1xuXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcblxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAY2xhc3MgRXJyb3JEaXNwbGF5XG4gKiBAZXh0ZW5kcyBDb21wb25lbnRcbiAqL1xuY2xhc3MgRXJyb3JEaXNwbGF5IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnM9e30pIHtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXHRcdGlmKHRoaXMucGxheWVyLl9lcnJvciAhPSBudWxsKSB7XG5cdFx0XHR0aGlzLm1lc3NhZ2UgPSB0aGlzLnBsYXllci5fZXJyb3IubWVzc2FnZTtcblx0XHRcdHRoaXMuZWxlbWVudC5zaG93KCk7XG5cdFx0fVxuXHRcdHRoaXMucGxheWVyLm9uKCdlcnJvcicsIHRoaXMub25QbGF5ZXJFcnJvci5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0dGhpcy5lbGVtZW50ID0gJCgnPGRpdiAvPicpXG5cdFx0XHQuYWRkQ2xhc3MoJ2xlcGxheWVyLWVycm9yLWRpc3BsYXknKVxuXHR9XG5cblx0c2V0IG1lc3NhZ2UodmFsdWUpIHtcblx0XHR0aGlzLmVsZW1lbnQuaHRtbCh2YWx1ZSk7XG5cdH1cblxuXHRvblBsYXllckVycm9yKGUsIGRhdGEpIHtcblx0XHRjb25zdCBlcnJvciA9IGRhdGEuZXJyb3I7XG5cdFx0dGhpcy5tZXNzYWdlID0gZXJyb3IubWVzc2FnZTtcblx0XHR0aGlzLmVsZW1lbnQuc2hvdygpO1xuXHR9XG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnRXJyb3JEaXNwbGF5JywgRXJyb3JEaXNwbGF5KTtcbmV4cG9ydCBkZWZhdWx0IEVycm9yRGlzcGxheTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL0Vycm9yRGlzcGxheS5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgRXJyb3JEaXNwbGF5LmpzXG4gKi9cblxuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5cbi8qKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLnVybF0gcGF0aCB0byBwb3N0ZXIgaW1hZ2VcbiAqIEBjbGFzcyBQb3N0ZXJcbiAqIEBleHRlbmRzIENvbXBvbmVudFxuICovXG5jbGFzcyBQb3N0ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucz17fSkge1xuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0dXJsIDogb3B0aW9ucy51cmxcblx0XHR9LCBvcHRpb25zKTtcblxuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cblx0XHR0aGlzLnVybCA9IHRoaXMub3B0aW9ucy51cmw7XG5cdH1cblxuXHRzZXQgdXJsKHZhbHVlKSB7XG5cdFx0aWYodmFsdWUgPT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0aGlzLl91cmwgPSB2YWx1ZTtcblx0XHR0aGlzLmVsZW1lbnQuY3NzKCdiYWNrZ3JvdW5kLWltYWdlJywgYHVybChcIiR7dmFsdWV9XCIpYClcblx0fVxuXG5cdGdldCB1cmwoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3VybDtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0dGhpcy5lbGVtZW50ID0gJCgnPGRpdiAvPicpXG5cdFx0XHQuYWRkQ2xhc3MoJ2xlcGxheWVyLXBvc3RlcicpO1xuXG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudDtcblx0fVxuXG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnUG9zdGVyJywgUG9zdGVyKTtcbmV4cG9ydCBkZWZhdWx0IFBvc3RlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL1Bvc3Rlci5qcyIsIi8qKlxuICogQGZpbGUgZnVsbHNjcmVlbi1hcGkuanNcbiAqL1xuXG5cbi8qXG4gKiBTdG9yZSB0aGUgYnJvd3Nlci1zcGVjaWZpYyBtZXRob2RzIGZvciB0aGUgZnVsbHNjcmVlbiBBUElcbiAqIEB0eXBlIHtPYmplY3R8dW5kZWZpbmVkfVxuICogQHByaXZhdGVcbiAqL1xubGV0IEZ1bGxzY3JlZW5BcGkgPSB7fTtcblxuLy8gYnJvd3NlciBBUEkgbWV0aG9kc1xuLy8gbWFwIGFwcHJvYWNoIGZyb20gU2NyZWVuZnVsLmpzIC0gaHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy9zY3JlZW5mdWxsLmpzXG5jb25zdCBhcGlNYXAgPSBbXG5cdC8vIFNwZWM6IGh0dHBzOi8vZHZjcy53My5vcmcvaGcvZnVsbHNjcmVlbi9yYXctZmlsZS90aXAvT3ZlcnZpZXcuaHRtbFxuXHRbXG5cdFx0J3JlcXVlc3RGdWxsc2NyZWVuJyxcblx0XHQnZXhpdEZ1bGxzY3JlZW4nLFxuXHRcdCdmdWxsc2NyZWVuRWxlbWVudCcsXG5cdFx0J2Z1bGxzY3JlZW5FbmFibGVkJyxcblx0XHQnZnVsbHNjcmVlbmNoYW5nZScsXG5cdFx0J2Z1bGxzY3JlZW5lcnJvcidcblx0XSxcblx0Ly8gV2ViS2l0XG5cdFtcblx0XHQnd2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4nLFxuXHRcdCd3ZWJraXRFeGl0RnVsbHNjcmVlbicsXG5cdFx0J3dlYmtpdEZ1bGxzY3JlZW5FbGVtZW50Jyxcblx0XHQnd2Via2l0RnVsbHNjcmVlbkVuYWJsZWQnLFxuXHRcdCd3ZWJraXRmdWxsc2NyZWVuY2hhbmdlJyxcblx0XHQnd2Via2l0ZnVsbHNjcmVlbmVycm9yJ1xuXHRdLFxuXHQvLyBPbGQgV2ViS2l0IChTYWZhcmkgNS4xKVxuXHRbXG5cdFx0J3dlYmtpdFJlcXVlc3RGdWxsU2NyZWVuJyxcblx0XHQnd2Via2l0Q2FuY2VsRnVsbFNjcmVlbicsXG5cdFx0J3dlYmtpdEN1cnJlbnRGdWxsU2NyZWVuRWxlbWVudCcsXG5cdFx0J3dlYmtpdENhbmNlbEZ1bGxTY3JlZW4nLFxuXHRcdCd3ZWJraXRmdWxsc2NyZWVuY2hhbmdlJyxcblx0XHQnd2Via2l0ZnVsbHNjcmVlbmVycm9yJ1xuXHRdLFxuXHQvLyBNb3ppbGxhXG5cdFtcblx0XHQnbW96UmVxdWVzdEZ1bGxTY3JlZW4nLFxuXHRcdCdtb3pDYW5jZWxGdWxsU2NyZWVuJyxcblx0XHQnbW96RnVsbFNjcmVlbkVsZW1lbnQnLFxuXHRcdCdtb3pGdWxsU2NyZWVuRW5hYmxlZCcsXG5cdFx0J21vemZ1bGxzY3JlZW5jaGFuZ2UnLFxuXHRcdCdtb3pmdWxsc2NyZWVuZXJyb3InXG5cdF0sXG5cdC8vIE1pY3Jvc29mdFxuXHRbXG5cdFx0J21zUmVxdWVzdEZ1bGxzY3JlZW4nLFxuXHRcdCdtc0V4aXRGdWxsc2NyZWVuJyxcblx0XHQnbXNGdWxsc2NyZWVuRWxlbWVudCcsXG5cdFx0J21zRnVsbHNjcmVlbkVuYWJsZWQnLFxuXHRcdCdNU0Z1bGxzY3JlZW5DaGFuZ2UnLFxuXHRcdCdNU0Z1bGxzY3JlZW5FcnJvcidcblx0XVxuXTtcblxuXG5sZXQgc3BlY0FwaSA9IGFwaU1hcFswXTtcblxubGV0IGJyb3dzZXJBcGk7XG5cbi8vIGRldGVybWluZSB0aGUgc3VwcG9ydGVkIHNldCBvZiBmdW5jdGlvbnNcbmZvciAobGV0IGkgPSAwOyBpIDwgYXBpTWFwLmxlbmd0aDsgaSsrKSB7XG5cdC8vIGNoZWNrIGZvciBleGl0RnVsbHNjcmVlbiBmdW5jdGlvblxuXHRpZiAoYXBpTWFwW2ldWzFdIGluIGRvY3VtZW50KSB7XG5cdFx0YnJvd3NlckFwaSA9IGFwaU1hcFtpXTtcblx0XHRicmVhaztcblx0fVxufVxuXG4vLyBtYXAgdGhlIGJyb3dzZXIgQVBJIG5hbWVzIHRvIHRoZSBzcGVjIEFQSSBuYW1lc1xuaWYgKGJyb3dzZXJBcGkpIHtcblx0Zm9yIChsZXQgaT0wOyBpPGJyb3dzZXJBcGkubGVuZ3RoOyBpKyspIHtcblx0XHRGdWxsc2NyZWVuQXBpW3NwZWNBcGlbaV1dID0gYnJvd3NlckFwaVtpXTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBGdWxsc2NyZWVuQXBpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL0Z1bGxzY3JlZW5BcGkuanMiLCIvKipcbiAqIEBmaWxlIGJyb3dzZXIuanNcbiAqL1xuXG5cbmNvbnN0IFVTRVJfQUdFTlQgPSB3aW5kb3cubmF2aWdhdG9yICYmIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50IHx8ICcnO1xuXG5leHBvcnQgY29uc3QgSVNfTU9CSUxFID0gKC9Nb2JpbGUvaSkudGVzdChVU0VSX0FHRU5UKTtcblxuZXhwb3J0IGNvbnN0IElTX0NIUk9NRSA9IFVTRVJfQUdFTlQuaW5kZXhPZignQ2hyb21lJykgPiAtMTtcblxuZXhwb3J0IGNvbnN0IElTX0FORFJPSUQgPSAoL0FuZHJvaWQvaSkudGVzdChVU0VSX0FHRU5UKTtcblxuZXhwb3J0IGNvbnN0IElTX0FORFJPSURfUEhPTkUgPSBJU19BTkRST0lEICYmIElTX01PQklMRTtcblxuZXhwb3J0IGNvbnN0IElTX0lQQUQgPSAoL2lQYWQvaSkudGVzdChVU0VSX0FHRU5UKTtcbi8vIFRoZSBGYWNlYm9vayBhcHAncyBVSVdlYlZpZXcgaWRlbnRpZmllcyBhcyBib3RoIGFuIGlQaG9uZSBhbmQgaVBhZCwgc29cbi8vIHRvIGlkZW50aWZ5IGlQaG9uZXMsIHdlIG5lZWQgdG8gZXhjbHVkZSBpUGFkcy5cbi8vIGh0dHA6Ly9hcnRzeS5naXRodWIuaW8vYmxvZy8yMDEyLzEwLzE4L3RoZS1wZXJpbHMtb2YtaW9zLXVzZXItYWdlbnQtc25pZmZpbmcvXG5leHBvcnQgY29uc3QgSVNfSVBIT05FID0gKC9pUGhvbmUvaSkudGVzdChVU0VSX0FHRU5UKSAmJiAhSVNfSVBBRDtcbmV4cG9ydCBjb25zdCBJU19JUE9EID0gKC9pUG9kL2kpLnRlc3QoVVNFUl9BR0VOVCk7XG5leHBvcnQgY29uc3QgSVNfSU9TID0gSVNfSVBIT05FIHx8IElTX0lQQUQgfHwgSVNfSVBPRDtcblxuZXhwb3J0IGNvbnN0IElTX1NBRkFSSSA9IFVTRVJfQUdFTlQuaW5kZXhPZignU2FmYXJpJykgPiAtMSAmJiAhSVNfQ0hST01FO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL3V0aWxzL2Jyb3dzZXIuanMiLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5jbGFzcyBNZWRpYUVycm9yIHtcblx0Y29uc3RydWN0b3IodmFsdWUpIHtcblx0XHRpZih2YWx1ZSBpbnN0YW5jZW9mIE1lZGlhRXJyb3IpIHtcblx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdHRoaXMuY29kZSA9IHZhbHVlO1xuXHRcdH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuXHRcdC8vIGRlZmF1bHQgY29kZSBpcyB6ZXJvLCBzbyB0aGlzIGlzIGEgY3VzdG9tIGVycm9yXG5cdFx0XHR0aGlzLm1lc3NhZ2UgPSB2YWx1ZTtcblx0XHR9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcblxuXHRcdFx0Ly8gV2UgYXNzaWduIHRoZSBgY29kZWAgcHJvcGVydHkgbWFudWFsbHkgYmVjYXVzZSBuYXRpdmUgTWVkaWFFcnJvciBvYmplY3RzXG5cdFx0XHQvLyBkbyBub3QgZXhwb3NlIGl0IGFzIGFuIG93bi9lbnVtZXJhYmxlIHByb3BlcnR5IG9mIHRoZSBvYmplY3QuXG5cdFx0XHRpZiAodHlwZW9mIHZhbHVlLmNvZGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdHRoaXMuY29kZSA9IHZhbHVlLmNvZGU7XG5cdFx0XHR9XG5cblx0XHRcdCQuZXh0ZW5kKHRoaXMsIHZhbHVlKTtcblx0XHR9XG5cblx0XHRpZiAoIXRoaXMubWVzc2FnZSkge1xuXHRcdFx0dGhpcy5tZXNzYWdlID0gTWVkaWFFcnJvci5kZWZhdWx0TWVzc2FnZXNbdGhpcy5jb2RlXSB8fCAnJztcblx0XHR9XG5cdH1cbn1cblxuTWVkaWFFcnJvci5wcm90b3R5cGUuY29kZSA9IDA7XG5cbk1lZGlhRXJyb3IucHJvdG90eXBlLm1lc3NhZ2UgPSAnJztcblxuTWVkaWFFcnJvci5lcnJvclR5cGVzID0gW1xuXHQnTUVESUFfRVJSX0NVU1RPTScsXG5cdCdNRURJQV9FUlJfQUJPUlRFRCcsXG5cdCdNRURJQV9FUlJfTkVUV09SSycsXG5cdCdNRURJQV9FUlJfREVDT0RFJyxcblx0J01FRElBX0VSUl9TUkNfTk9UX1NVUFBPUlRFRCcsXG5cdCdNRURJQV9FUlJfRU5DUllQVEVEJ1xuXTtcblxuXG5NZWRpYUVycm9yLmRlZmF1bHRNZXNzYWdlcyA9IHtcblx0MSA6ICfQktGLINC/0YDQtdGA0LLQsNC70Lgg0LfQsNCz0YDRg9C30LrRgyDQstC40LTQtdC+LicsXG5cdDIgOiAn0JfQsNCz0YDRg9C30LrQsCDQstC40LTQtdC+INC/0YDQtdGA0LLQsNC90LAg0LjQty3Qt9CwINC/0L7RgtC10YDQuCDRgdC+0LXQtNC40L3QtdC90LjRjy4nLFxuXHQzIDogJ9CX0LDQs9GA0YPQt9C60LAg0LLQuNC00LXQviDQvtGB0YLQsNC90L7QstC70LXQvdCwINC40Lct0LfQsCDQv9GA0L7QsdC70LXQvCDRgSDQstC40LTQtdC+0YTQsNC50LvQvtC8INC40LvQuCDQuNC3LdC30LAg0YLQvtCz0L4sINGH0YLQviDQstCw0Ygg0LHRgNCw0YPQt9C10YAg0L3QtSDQv9C+0LTQtNC10YDQttC40LLQsNC10YIg0LLQvtGB0L/RgNC+0LjQt9Cy0LXQtNC10L3QuNC1INC00LDQvdC90L7Qs9C+INGE0LDQudC70LAuJyxcblx0NCA6ICfQktC40LTQtdC+INC90LUg0LzQvtC20LXRgiDQsdGL0YLRjCDQt9Cw0LPRgNGD0LbQtdC90L4g0LjQty3Qt9CwINC/0YDQvtCx0LvQtdC8INGBINC40L3RgtC10YDQvdC10YIt0YHQvtC10LTQuNC90LXQvdC40LXQvCDQuNC70Lgg0L/RgNC+0LHQu9C10Lwg0L3QsCDRgdC10YDQstC10YDQtS4g0JjQu9C4INGE0L7RgNC80LDRgiDRhNCw0LnQu9CwINC90LUg0L/QvtC00LTQtdGA0LbQuNCy0LDQtdGC0YHRjyDQstCw0YjQuNC8INCx0YDQsNGD0LfQtdGA0L7QvC4nLFxuXHQ1IDogJ9CS0LjQtNC10L4g0LfQsNGI0LjRhNGA0L7QstCw0L3Qviwg0Lgg0LzRiyDQvdC1INC80L7QttC10Lwg0LXQs9C+INGA0LDRgdGI0LjRhNGA0L7QstCw0YLRjC4nXG59O1xuXG4vLyBBZGQgdHlwZXMgYXMgcHJvcGVydGllcyBvbiBNZWRpYUVycm9yXG4vLyBlLmcuIE1lZGlhRXJyb3IuTUVESUFfRVJSX1NSQ19OT1RfU1VQUE9SVEVEID0gNDtcbmZvciAobGV0IGVyck51bSA9IDA7IGVyck51bSA8IE1lZGlhRXJyb3IuZXJyb3JUeXBlcy5sZW5ndGg7IGVyck51bSsrKSB7XG5cdE1lZGlhRXJyb3JbTWVkaWFFcnJvci5lcnJvclR5cGVzW2Vyck51bV1dID0gZXJyTnVtO1xuXHQvLyB2YWx1ZXMgc2hvdWxkIGJlIGFjY2Vzc2libGUgb24gYm90aCB0aGUgY2xhc3MgYW5kIGluc3RhbmNlXG5cdE1lZGlhRXJyb3IucHJvdG90eXBlW01lZGlhRXJyb3IuZXJyb3JUeXBlc1tlcnJOdW1dXSA9IGVyck51bTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVkaWFFcnJvcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9NZWRpYUVycm9yLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBQbGF5Q29udHJvbC5qc1xuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCBDb250cm9sIGZyb20gJy4vQ29udHJvbCc7XG5cbi8qKlxuICogQGNsYXNzIFBsYXlDb250cm9sXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAZXh0ZW5kcyBDb250cm9sXG4gKi9cbmNsYXNzIFBsYXlDb250cm9sIGV4dGVuZHMgQ29udHJvbCB7XG5cdGNvbnN0cnVjdG9yIChwbGF5ZXIsIG9wdGlvbnM9e30pIHtcblx0XHRvcHRpb25zID0gJC5leHRlbmQoe30sIHtcblx0XHRcdGljb25OYW1lIDogJ3BsYXknLFxuXHRcdFx0dGl0bGUgOiAn0JLQvtGB0L/RgNC+0LjQt9Cy0LXRgdGC0Lgg0LLQuNC00LXQvicsXG5cdFx0XHRjbGFzc05hbWUgOiAncGxheScsXG5cdFx0XHRuYW1lIDogJ3BsYXknXG5cdFx0fSwgb3B0aW9ucyk7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblxuXHRcdHRoaXMucGxheWVyLm9uKCdwbGF5JywgdGhpcy5zaG93UGF1c2UuYmluZCh0aGlzKSlcblx0XHR0aGlzLnBsYXllci5vbigncGF1c2UnLCB0aGlzLnNob3dQbGF5LmJpbmQodGhpcykpO1xuXHRcdHRoaXMucGxheWVyLm9uKCdlbmRlZCcsIHRoaXMuc2hvd1JlcGxheS5iaW5kKHRoaXMpKTtcblxuXHRcdHRoaXMucGxheWVyLm9uKCdzZWVraW5nIHBsYXknLCB0aGlzLnJlbW92ZVJlcGxheS5iaW5kKHRoaXMpKTtcblx0fVxuXG5cblx0LyoqXG5cdCAqIFBhdXNlIHRoZSB2aWRlb1xuXHQgKi9cblx0c2hvd1BsYXkgKCkge1xuXHRcdHRoaXMuaWNvbi5pY29uTmFtZSA9ICdwbGF5Jztcblx0XHR0aGlzLmVsZW1lbnQuYXR0cigndGl0bGUnLCB0aGlzLm9wdGlvbnMudGl0bGUpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFBsYXkgdGhlIHZpZGVvXG5cdCAqL1xuXHRzaG93UGF1c2UgKCkge1xuXHRcdHRoaXMuaWNvbi5pY29uTmFtZSA9ICdwYXVzZSc7XG5cdFx0dGhpcy5lbGVtZW50LmF0dHIoJ3RpdGxlJywgJ9Cf0L7RgdGC0LDQstC40YLRjCDQvdCwINC/0LDRg9C30YMnKTtcblx0fVxuXG5cdHNob3dSZXBsYXkoKSB7XG5cdFx0aWYodGhpcy5wbGF5ZXIuZHVyYXRpb24gIT09IEluZmluaXR5KSB7XG5cdFx0XHR0aGlzLl9yZXBsYXkgPSB0cnVlO1xuXHRcdFx0dGhpcy5pY29uLmljb25OYW1lID0gJ3JlZnJlc2gnO1xuXHRcdFx0dGhpcy5lbGVtZW50LmF0dHIoJ3RpdGxlJywgJ9CX0LDQv9GD0YHRgtC40YLRjCDQt9Cw0L3QvtCy0L4nKVxuXHRcdH1cblx0fVxuXG5cdHJlbW92ZVJlcGxheSgpIHtcblx0XHRpZighdGhpcy5fcmVwbGF5KSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMuX3JlcGxheSA9IGZhbHNlO1xuXG5cdFx0aWYodGhpcy5wbGF5ZXIudmlkZW8ucGF1c2VkKSB7XG5cdFx0XHR0aGlzLnNob3dQbGF5KCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2hvd1BhdXNlKCk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0b25DbGljayhlKSB7XG5cdFx0Ly9zdXBlci5vbkNsaWNrKGUpO1xuXHRcdHRoaXMucGxheWVyLnZpZGVvLnRvZ2dsZVBsYXkoKTtcblx0fVxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ1BsYXlDb250cm9sJywgUGxheUNvbnRyb2wpO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ3BsYXknLCBQbGF5Q29udHJvbCk7XG5leHBvcnQgZGVmYXVsdCBQbGF5Q29udHJvbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL1BsYXlDb250cm9sLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBWb2x1bWVDb250cm9sLmpzXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9Db250cm9sJztcbmltcG9ydCBDb250cm9sRHJvcGRvd24gZnJvbSAnLi9Db250cm9sRHJvcGRvd24nO1xuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBjbGFzcyBWb2x1bWVDb250cm9sXG4gKiBAZXh0ZW5kcyBDb250cm9sRHJvcGRvd25cbiAqL1xuY2xhc3MgVm9sdW1lQ29udHJvbCBleHRlbmRzIENvbnRyb2xEcm9wZG93biB7XG5cblx0Y29uc3RydWN0b3IgKHBsYXllciwgb3B0aW9ucz17fSkge1xuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0aWNvbk5hbWUgOiAndm9sdW1lLWRvd24nLFxuXHRcdFx0Y2xhc3NOYW1lIDogJ3ZvbHVtZS1jb250cm9sJyxcblx0XHRcdG5hbWUgOiAndm9sdW1lJ1xuXHRcdH0sIG9wdGlvbnMpO1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cblx0XHR0aGlzLnBsYXllci5vbigndm9sdW1lY2hhbmdlJywgKGUsIGRhdGEpID0+IHtcblx0XHRcdGNvbnN0IHZpZGVvID0gdGhpcy5wbGF5ZXIudmlkZW87XG5cdFx0XHR0aGlzLnZhbHVlID0gdmlkZW8ubXV0ZWQgPyAwIDogdmlkZW8udm9sdW1lO1xuXHRcdH0pXG5cdH1cblxuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdHN1cGVyLmNyZWF0ZUVsZW1lbnQoKTtcblx0XHRsZXQgZHJhZyA9IGZhbHNlO1xuXHRcdGNvbnN0IHZpZGVvID0gdGhpcy5wbGF5ZXIudmlkZW87XG5cblx0XHR0aGlzLm1hcmtlciA9ICQoJzxkaXYvPicpLmFkZENsYXNzKCd2b2x1bWUtbWFya2VyJyk7XG5cblx0XHR0aGlzLmFjdGl2ZSA9ICQoJzxkaXYvPicpLmFkZENsYXNzKCd2b2x1bWUtYWN0aXZlJyk7XG5cblx0XHR0aGlzLmxpbmUgPSAkKCc8ZGl2Lz4nKVxuXHRcdFx0LmFkZENsYXNzKCd2b2x1bWUtbGluZScpXG5cdFx0XHQuYXBwZW5kKHRoaXMuYWN0aXZlKVxuXHRcdFx0LmFwcGVuZCh0aGlzLm1hcmtlcilcblx0XHRcdC5vbignY2xpY2snLCAoZSkgPT4ge1xuXHRcdFx0XHRpZiAoZHJhZykgcmV0dXJuO1xuXHRcdFx0XHRsZXQgcCA9IHRoaXMuZ2V0UG9zaXRpb24oZS5wYWdlWSk7XG5cdFx0XHRcdGlmIChwID49IDAgJiYgcCA8PSAxKSB7XG5cdFx0XHRcdFx0aWYodmlkZW8ubXV0ZWQpIHtcblx0XHRcdFx0XHRcdHZpZGVvLm11dGVkID0gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHZpZGVvLnZvbHVtZSA9IDEgLSBwO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuZHJvcGRvd25Db250ZW50XG5cdFx0XHQuYWRkQ2xhc3MoJ3ZvbHVtZS1zbGlkZXInKVxuXHRcdFx0LmFwcGVuZCh0aGlzLmxpbmUpO1xuXG5cdFx0dGhpcy5pY29uLmVsZW1lbnQuYXR0cigndGl0bGUnLCAn0J7RgtC60LvRjtGH0LjRgtGMINC30LLRg9C6Jyk7XG5cblx0XHR0aGlzLm1hcmtlci5vbignbW91c2Vkb3duJywgKGUpID0+IHtcblx0XHRcdGlmIChlLndoaWNoICE9PSAxKSByZXR1cm47XG5cdFx0XHRkcmFnID0gdHJ1ZTtcblx0XHR9KTtcblxuXHRcdCQoZG9jdW1lbnQpLm9uKHtcblx0XHRcdG1vdXNlbW92ZSA6IChlKSA9PiB7XG5cdFx0XHRcdGlmICghZHJhZykgcmV0dXJuO1xuXHRcdFx0XHRsZXQgcCA9IHRoaXMuZ2V0UG9zaXRpb24oZS5wYWdlWSk7XG5cdFx0XHRcdGlmIChwID49IDAgJiYgcCA8PSAxKSB7XG5cdFx0XHRcdFx0aWYodmlkZW8ubXV0ZWQpIHtcblx0XHRcdFx0XHRcdHZpZGVvLm11dGVkID0gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHZpZGVvLnZvbHVtZSA9IDEgLSBwXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cblx0XHRcdG1vdXNldXAgOiAoZSkgPT4ge1xuXHRcdFx0XHRkcmFnID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudDtcblx0fVxuXG5cblx0c2V0IHZhbHVlICh2YWx1ZSkge1xuXHRcdHRoaXMuaWNvbi5pY29uTmFtZSA9IHRoaXMucGxheWVyLmNhbGNWb2x1bWVJY29uKHZhbHVlKTtcblxuXHRcdGxldCBwID0gTWF0aC5yb3VuZCh2YWx1ZSAqIDEwMCkudG9TdHJpbmcoKSArICclJztcblx0XHR0aGlzLmFjdGl2ZS5jc3MoJ2hlaWdodCcsIHApO1xuXHRcdHRoaXMubWFya2VyLmNzcygnYm90dG9tJywgcCk7XG5cdH1cblxuXHR0b2dnbGVNdXRlZCAoKSB7XG5cdFx0Y29uc3QgeyB2aWRlbyB9ID0gdGhpcy5wbGF5ZXI7XG5cblx0XHR2aWRlby5tdXRlZCA9ICF2aWRlby5tdXRlZDtcblx0fVxuXG5cdGdldFBvc2l0aW9uICh5KSB7XG5cdFx0cmV0dXJuICh5IC0gdGhpcy5saW5lLm9mZnNldCgpLnRvcCkgLyB0aGlzLmxpbmUuaGVpZ2h0KCk7XG5cdH1cblxuXHRvbkNsaWNrIChlKSB7XG5cdFx0c3VwZXIub25DbGljayhlKTtcblx0XHR0aGlzLnRvZ2dsZU11dGVkKCk7XG5cdH1cblxuXHRvblBsYXllckluaXRlZCgpIHtcblx0XHR0aGlzLnZhbHVlID0gdGhpcy5wbGF5ZXIudmlkZW8uZGVmYXVsdFZvbHVtZTtcblx0fVxuXG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnVm9sdW1lQ29udHJvbCcsIFZvbHVtZUNvbnRyb2wpO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ3ZvbHVtZScsIFZvbHVtZUNvbnRyb2wpO1xuZXhwb3J0IGRlZmF1bHQgVm9sdW1lQ29udHJvbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL1ZvbHVtZUNvbnRyb2wuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIENvbnRyb2xEcm9wZG93bi5qc1xuICovXG5cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb250cm9sIGZyb20gJy4vQ29udHJvbCc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcblxuLyoqXG4gKiBAY2xhc3MgQ29udHJvbERyb3Bkb3duXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAcHJvcGVydHkge2pRdWVyeX0gZHJvcGRvd25Db250ZW50IENvbnRlbnQgb2YgcG9wdXBcbiAqIEBleHRlbmRzIENvbnRyb2xcbiAqL1xuY2xhc3MgQ29udHJvbERyb3Bkb3duIGV4dGVuZHMgQ29udHJvbCB7XG5cblx0Y29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ21vdXNlZW50ZXInLCAoKSA9PiAhdGhpcy5kaXNhYmxlICYmIHRoaXMuZHJvcGRvd25Db250ZW50LnNob3coKSk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdtb3VzZWxlYXZlJywgKCkgPT4gdGhpcy5kcm9wZG93bkNvbnRlbnQuaGlkZSgpKTtcblx0fVxuXG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHRzdXBlci5jcmVhdGVFbGVtZW50KCk7XG5cdFx0dGhpcy5kcm9wZG93bkNvbnRlbnQgPSAkKCc8ZGl2IC8+JykuYWRkQ2xhc3MoJ2NvbnRyb2wtZHJvcGRvd25fX2NvbnRlbnQnKTtcblx0XHR0aGlzLmVsZW1lbnQuYXBwZW5kKHRoaXMuZHJvcGRvd25Db250ZW50KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGJ1aWxkQ1NTQ2xhc3MoKSB7XG5cdFx0cmV0dXJuIGBjb250cm9sLWRyb3Bkb3duICR7c3VwZXIuYnVpbGRDU1NDbGFzcygpfWBcblx0fVxuXG5cdF9vbkNsaWNrKGUpIHtcblx0XHRpZigkKGUudGFyZ2V0KS5jbG9zZXN0KHRoaXMuZHJvcGRvd25Db250ZW50KS5sZW5ndGggPiAwKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0c3VwZXIuX29uQ2xpY2soZSk7XG5cdH1cblxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ0NvbnRyb2xEcm9wZG93bicsIENvbnRyb2xEcm9wZG93bik7XG5Db250cm9sLnJlZ2lzdGVyQ29udHJvbCgnZHJvcGRvd24nLCBDb250cm9sRHJvcGRvd24pO1xuZXhwb3J0IGRlZmF1bHQgQ29udHJvbERyb3Bkb3duO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvQ29udHJvbERyb3Bkb3duLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBUaW1lbGluZUNvbnRyb2wuanNcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9Db21wb25lbnQnO1xuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi4vQ29udHJvbCc7XG5pbXBvcnQgQ29udHJvbFRleHQgZnJvbSAnLi4vQ29udHJvbFRleHQnO1xuaW1wb3J0IEJ1ZmZlcmVkUmFuZ2VzIGZyb20gJy4vQnVmZmVyZWRSYW5nZXMnO1xuaW1wb3J0IE1hcmtlciBmcm9tICcuL01hcmtlcic7XG5pbXBvcnQgeyBzZWNvbmRzVG9UaW1lIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBjbGFzcyBUaW1lbGluZUNvbnRyb2xcbiAqIEBwcm9wZXJ0eSB7Q29udHJvbFRleHR9IGN1cnJlbnRUaW1lIEN1cnJlbnQgdGltZSdzIHRleHRcbiAqIEBwcm9wZXJ0eSB7Q29udHJvbFRleHR9IHRvdGFsVGltZSBUb3RhbCB0aW1lXG4gKiBAcHJvcGVydHkge2pRdWVyeX0gbGluZVxuICogQGV4dGVuZHMgQ29udHJvbFxuICovXG5jbGFzcyBUaW1lbGluZUNvbnRyb2wgZXh0ZW5kcyBDb250cm9sIHtcblxuXHRjb25zdHJ1Y3RvciAocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRuYW1lIDogJ3RpbWVsaW5lJyxcblx0XHRcdGNsYXNzTmFtZSA6ICd0aW1lbGluZSB0aW1lbGluZS1jb250YWluZXInXG5cdFx0fSwgb3B0aW9ucyk7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblxuXG5cdFx0dGhpcy5tYXJrZXIuZWxlbWVudC5vbignbGVwbGF5ZXJfbW91c2Vtb3ZlJywgdGhpcy5fb25NYXJrZXJNb3VzZW1vdmUuYmluZCh0aGlzKSk7XG5cblx0XHR0aGlzLm1hcmtlci5lbGVtZW50Lm9uKCdsZXBsYXllcl9tb3VzZWRvd24nLCB0aGlzLl9vbk1hcmtlck1vdXNlZG93bi5iaW5kKHRoaXMpKTtcblxuXHRcdHRoaXMucGxheWVyLm9uKCdzZWN0aW9uc2luaXQnLCB0aGlzLm9uU2VjdGlvbnNJbml0LmJpbmQodGhpcykpO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ3RpbWV1cGRhdGUnLCB0aGlzLl9vblRpbWVVcGRhdGUuYmluZCh0aGlzKSk7XG5cblx0XHR0aGlzLnBsYXllci5vbigndGltZXVwZGF0ZWxvYWQnLCB0aGlzLl9vblRpbWVVcGRhdGUuYmluZCh0aGlzKSlcblxuXHRcdHRoaXMucGxheWVyLm9uKCdkdXJhdGlvbmNoYW5nZScsIHRoaXMuX29uRHVyYXRpb25DaGFuZ2UuYmluZCh0aGlzKSk7XG5cdH1cblxuXHRfb25NYXJrZXJNb3VzZWRvd24oZSkge1xuXHRcdHRoaXMubWFya2VyU2hhZG93LmVsZW1lbnQuaGlkZSgpO1xuXHR9XG5cblx0X29uTWFya2VyTW91c2Vtb3ZlKGUsIGRhdGEpIHtcblx0XHRjb25zdCB4ID0gZGF0YS54O1xuXHRcdGNvbnN0IHAgPSB0aGlzLmdldFBvc2l0aW9uKHgpO1xuXHRcdGNvbnN0IHZpZGVvID0gdGhpcy5wbGF5ZXIudmlkZW87XG5cdFx0aWYgKHAgPiAwICYmIHAgPCAxKSB7XG5cdFx0XHR0aGlzLm1hcmtlci5tYXJrZXJUaW1lXG5cdFx0XHRcdC5zaG93KClcblx0XHRcdFx0Lmh0bWwoc2Vjb25kc1RvVGltZSh2aWRlby5kdXJhdGlvbiAqIHApKTtcblx0XHRcdHZpZGVvLmN1cnJlbnRUaW1lID0gdmlkZW8uZHVyYXRpb24gKiBwXG5cdFx0fVxuXHR9XG5cblx0X29uVGltZVVwZGF0ZShlLCBkYXRhKSB7XG5cdFx0Y29uc3QgZHVyYXRpb24gPSB0aGlzLnBsYXllci52aWRlby5kdXJhdGlvbjtcblx0XHRjb25zdCB0aW1lID0gdGhpcy5wbGF5ZXIuY3VycmVudFRpbWU7XG5cdFx0dGhpcy5oYXJkTW92ZSh0aW1lIC8gZHVyYXRpb24pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHRzdXBlci5jcmVhdGVFbGVtZW50KCk7XG5cdFx0bGV0IHZpZGVvID0gdGhpcy5wbGF5ZXIudmlkZW87XG5cblx0XHR0aGlzLmRyYWcgPSBmYWxzZTtcblxuXHRcdC8vIENyZWF0ZSBsYWJlbHNcblx0XHR0aGlzLmN1cnJlbnRUaW1lID0gbmV3IENvbnRyb2xUZXh0KHRoaXMucGxheWVyLCB7IGNsYXNzTmFtZSA6ICd0aW1lLWN1cnJlbnQnIH0pO1xuXHRcdHRoaXMuY3VycmVudFRpbWUudGV4dCA9ICcwMDowMCc7XG5cdFx0dGhpcy50b3RhbFRpbWUgPSBuZXcgQ29udHJvbFRleHQodGhpcy5wbGF5ZXIsIHtjbGFzc05hbWUgOiAndGltZS10b3RhbCcgfSk7XG5cblx0XHQvLyBDcmVhdGUgbGluZSB3aXRoIG1hcmtlcnMgYW5kIHBsYXllZCByYW5nZVxuXG5cdFx0dGhpcy5tYXJrZXIgPSBuZXcgTWFya2VyKHRoaXMucGxheWVyLCB7XG5cdFx0XHRkcmFnIDogdHJ1ZVxuXHRcdH0pO1xuXG5cdFx0dGhpcy5tYXJrZXJTaGFkb3cgPSBuZXcgTWFya2VyKHRoaXMucGxheWVyLCB7XG5cdFx0XHRjbGFzc05hbWUgOiAnc2hhZG93J1xuXHRcdH0pO1xuXHRcdHRoaXMubWFya2VyU2hhZG93LmVsZW1lbnQuaGlkZSgpO1xuXG5cblx0XHQvLyBQbGF5ZWQgcmFuZ2VzXG5cdFx0dGhpcy5wbGF5ZWRSYW5nZXMgPSAkKCc8ZGl2IC8+JykuYWRkQ2xhc3MoJ3RpbWUtcGxheWVkJyk7XG5cblxuXHRcdC8vIEJ1ZmZlcmVkIHJhbmdlc1xuXHRcdHRoaXMuYnVmZmVyZWRSYW5nZXMgPSBuZXcgQnVmZmVyZWRSYW5nZXModGhpcy5wbGF5ZXIpLmVsZW1lbnQ7XG5cblx0XHR0aGlzLmxpbmUgPSAkKCc8ZGl2IC8+Jylcblx0XHRcdC5hZGRDbGFzcygndGltZWxpbmUnKVxuXHRcdFx0LmFwcGVuZCh0aGlzLm1hcmtlci5lbGVtZW50KVxuXHRcdFx0LmFwcGVuZCh0aGlzLm1hcmtlclNoYWRvdy5lbGVtZW50KVxuXHRcdFx0LmFwcGVuZCh0aGlzLnBsYXllZFJhbmdlcylcblx0XHRcdC5hcHBlbmQodGhpcy5idWZmZXJlZFJhbmdlcylcblx0XHRcdC5vbih7XG5cdFx0XHRcdG1vdXNlbW92ZSA6IChlKSA9PiB7XG5cdFx0XHRcdFx0aWYgKHRoaXMubWFya2VyLmRyYWcpIHJldHVybjtcblxuXHRcdFx0XHRcdGxldCBwID0gdGhpcy5nZXRQb3NpdGlvbihlLnBhZ2VYKTtcblx0XHRcdFx0XHRpZiAocCA+IDAgJiYgcCA8IDEpIHtcblx0XHRcdFx0XHRcdHRoaXMubWFya2VyU2hhZG93LmVsZW1lbnRcblx0XHRcdFx0XHRcdFx0LnNob3coKVxuXHRcdFx0XHRcdFx0XHQuY3NzKCdsZWZ0JywgcCAqIDEwMCArICclJyk7XG5cdFx0XHRcdFx0XHR0aGlzLm1hcmtlclNoYWRvd1xuXHRcdFx0XHRcdFx0XHQubWFya2VyVGltZVxuXHRcdFx0XHRcdFx0XHQuc2hvdygpXG5cdFx0XHRcdFx0XHRcdC5odG1sKHNlY29uZHNUb1RpbWUodmlkZW8uZHVyYXRpb24gKiBwKSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRoaXMubWFya2VyU2hhZG93LmVsZW1lbnQuaGlkZSgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblxuXHRcdFx0XHRtb3VzZWxlYXZlIDogKGUpID0+IHtcblx0XHRcdFx0XHRpZiAodGhpcy5kcmFnKSByZXR1cm47XG5cdFx0XHRcdFx0dGhpcy5tYXJrZXJTaGFkb3cuZWxlbWVudC5oaWRlKClcblx0XHRcdFx0fSxcblxuXHRcdFx0XHRtb3VzZWRvd24gOiAoZSkgPT4ge1xuXHRcdFx0XHR9LFxuXG5cdFx0XHRcdGNsaWNrIDogdGhpcy5fb25MaW5lQ2xpY2suYmluZCh0aGlzKSxcblxuXHRcdFx0XHR0b3VjaG1vdmUgOiAoZSkgPT4ge1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuZWxlbWVudC5hZGRDbGFzcygndGltZWxpbmUtY29udGFpbmVyJylcblx0XHRcdC5hcHBlbmQoJCgnPGRpdiAvPicpXG5cdFx0XHRcdC5hZGRDbGFzcygndGltZWxpbmUtc3ViY29udGFpbmVyJylcblx0XHRcdFx0LmFwcGVuZCh0aGlzLmN1cnJlbnRUaW1lLmVsZW1lbnQpXG5cdFx0XHRcdC5hcHBlbmQodGhpcy5saW5lKVxuXHRcdFx0XHQuYXBwZW5kKHRoaXMudG90YWxUaW1lLmVsZW1lbnQpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdF9vbkNsaWNrKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdH1cblxuXHRfb25MaW5lQ2xpY2soZSkge1xuXHRcdGlmIChlLndoaWNoICE9PSAxKSByZXR1cm47XG5cdFx0aWYgKHRoaXMuZHJhZykgcmV0dXJuO1xuXHRcdGNvbnN0IHZpZGVvID0gdGhpcy5wbGF5ZXIudmlkZW87XG5cdFx0dGhpcy5oYXJkTW92ZSh0aGlzLmdldFBvc2l0aW9uKGUucGFnZVgpKTtcblx0XHR2aWRlby5jdXJyZW50VGltZSA9ICh2aWRlby5kdXJhdGlvbiAqIHRoaXMuZ2V0UG9zaXRpb24oZS5wYWdlWCkpO1xuXHR9XG5cblx0b25TZWN0aW9uc0luaXQoZSkge1xuXHRcdGNvbnN0IGR1cmF0aW9uID0gdGhpcy5wbGF5ZXIudmlkZW8uZHVyYXRpb247XG5cdFx0aWYoaXNOYU4oZHVyYXRpb24pKSB7XG5cdFx0XHRyZXR1cm5cblx0XHR9XG5cdFx0aWYgKHRoaXMucGxheWVyLnNlY3Rpb25zKSB7XG5cdFx0XHR0aGlzLnVwZGF0ZVNlY3Rpb25SYW5nZXModGhpcy5wbGF5ZXIuc2VjdGlvbnMuaXRlbXMpO1xuXHRcdH1cblx0fVxuXG5cdHVwZGF0ZVNlY3Rpb25SYW5nZXMoaXRlbXMpIHtcblx0XHRpZih0aGlzLnNlY3Rpb25zID09IG51bGwgfHwgdGhpcy5zZWN0aW9ucy5sZW5ndGggPT09IDApIHtcblx0XHRcdHRoaXMuc2VjdGlvbnMgPSB0aGlzLmNyZWF0ZVNlY3Rpb25SYW5nZXMoaXRlbXMpO1xuXHRcdFx0dGhpcy5saW5lLmFwcGVuZCh0aGlzLnNlY3Rpb25zKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zZWN0aW9ucy5odG1sKHRoaXMuY3JlYXRlU2VjdGlvblJhbmdlcyhpdGVtcykpO1xuXHRcdH1cblx0fVxuXG5cdGNyZWF0ZVNlY3Rpb25SYW5nZXMoaXRlbXMpIHtcblx0XHRjb25zdCBkdXJhdGlvbiA9IHRoaXMucGxheWVyLnZpZGVvLmR1cmF0aW9uO1xuXHRcdGxldCByZXN1bHQgPSAkKCc8ZGl2IC8+JykuYWRkQ2xhc3MoJ2xlcGxheWVyLXRpbWVsaW5lLXNlY3Rpb25zJyk7XG5cdFx0aXRlbXMuZm9yRWFjaCgoc2VjdGlvbikgPT4ge1xuXHRcdFx0Y29uc3QgbGVuZ3RoID0gKHNlY3Rpb24uZW5kIC0gc2VjdGlvbi5iZWdpbik7XG5cdFx0XHRjb25zdCBpdGVtID0gJCgnPGRpdiAvPicpXG5cdFx0XHRcdC5hZGRDbGFzcygnbGVwbGF5ZXItdGltZWxpbmUtc2VjdGlvbicpXG5cdFx0XHRcdC5jc3Moe1xuXHRcdFx0XHRcdHdpZHRoIDogbGVuZ3RoIC8gZHVyYXRpb24gKiAxMDAgKyAnJScsXG5cdFx0XHRcdFx0bGVmdCA6IHNlY3Rpb24uYmVnaW4gLyBkdXJhdGlvbiAqIDEwMCArICclJ1xuXHRcdFx0XHR9KTtcblx0XHRcdHJlc3VsdC5hcHBlbmQoaXRlbSk7XG5cdFx0fSlcblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0Z2V0UG9zaXRpb24gKHgpIHtcblx0XHRyZXR1cm4gKHggLSB0aGlzLmxpbmUub2Zmc2V0KCkubGVmdCkgLyB0aGlzLmxpbmUud2lkdGgoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBNb3ZlIG1hcmtlciBvbiB0aW1lbGluZSBvbiBwZXJjZW50IGZyb20gYXJndW1lbnQsIG5vdCBmcm9tIHZpZGVvLmN1cnJlbnRUaW1lXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBwZXJjZW50IFRoZSBwZXJjZW50IHdoaWNoIHlvdSB3YW50IHRvIG1vdmUgbWFya2VyIG9uIHRpbWVsaW5lXG5cdCAqL1xuXHRoYXJkTW92ZSAocGVyY2VudCkge1xuXHRcdGxldCBjdXJyZW50VGltZSA9IHRoaXMucGxheWVyLnZpZGVvLmR1cmF0aW9uICogcGVyY2VudDtcblx0XHRpZihpc05hTihjdXJyZW50VGltZSkpIHJldHVybjtcblx0XHRwZXJjZW50ID0gcGVyY2VudCAqIDEwMDtcblx0XHR0aGlzLm1hcmtlci5lbGVtZW50LmNzcygnbGVmdCcsIHBlcmNlbnQgKyAnJScpO1xuXHRcdHRoaXMucGxheWVkUmFuZ2VzLmNzcygnd2lkdGgnLCBwZXJjZW50ICsgJyUnKTtcblx0XHR0aGlzLmN1cnJlbnRUaW1lLnRleHQgPSBzZWNvbmRzVG9UaW1lKGN1cnJlbnRUaW1lKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAZGVwcmVjYXRlZFxuXHQgKi9cblx0bW92ZSAoKSB7XG5cdFx0bGV0IHZpZGVvID0gdGhpcy5wbGF5ZXIudmlkZW87XG5cdFx0bGV0IHBlcmNlbnQgPSAodmlkZW8uY3VycmVudFRpbWUgLyB2aWRlby5kdXJhdGlvbiAqIDEwMCkudG9GaXhlZCgyKTtcblx0XHRsZXQgY3VycmVudFRpbWUgPSB2aWRlby5jdXJyZW50VGltZTtcblx0XHRpZihpc05hTihjdXJyZW50VGltZSkpIHJldHVybjtcblx0XHR0aGlzLm1hcmtlci5lbGVtZW50LmNzcygnbGVmdCcsIHBlcmNlbnQgKyAnJScpO1xuXHRcdHRoaXMucGxheWVkUmFuZ2VzLmNzcygnd2lkdGgnLCBwZXJjZW50ICsgJyUnKTtcblx0XHR0aGlzLmN1cnJlbnRUaW1lLnRleHQgPSBzZWNvbmRzVG9UaW1lKGN1cnJlbnRUaW1lKTtcblx0fVxuXG5cblx0dXBkYXRlTGFiZWxzKCkge1xuXHRcdGNvbnN0IHZpZGVvID0gdGhpcy5wbGF5ZXIudmlkZW87XG5cdFx0dGhpcy50b3RhbFRpbWUudGV4dCA9IHNlY29uZHNUb1RpbWUoMCwgTWF0aC5mbG9vcih2aWRlby5kdXJhdGlvbiAvIDM2MDApID4gMCk7XG5cdFx0Y29uc3Qgd2lkdGggPSB0aGlzLnRvdGFsVGltZS5lbGVtZW50LndpZHRoKCk7XG5cblx0XHR0aGlzLnRvdGFsVGltZS50ZXh0ID0gc2Vjb25kc1RvVGltZSh2aWRlby5kdXJhdGlvbik7XG5cdFx0dGhpcy5jdXJyZW50VGltZS50ZXh0ID0gc2Vjb25kc1RvVGltZSh2aWRlby5jdXJyZW50VGltZSB8fCAwKTtcblx0XHR0aGlzLmN1cnJlbnRUaW1lLmVsZW1lbnQuY3NzKHtcblx0XHRcdHdpZHRoXG5cdFx0fSlcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdG9uUGxheWVySW5pdGVkKGUpIHtcblx0XHR0aGlzLnVwZGF0ZUxhYmVscygpO1xuXHRcdGlmICh0aGlzLnBsYXllci5zZWN0aW9ucykge1xuXHRcdFx0dGhpcy51cGRhdGVTZWN0aW9uUmFuZ2VzKHRoaXMucGxheWVyLnNlY3Rpb25zLml0ZW1zKTtcblx0XHR9XG5cdH1cblxuXHRfaW5pdFdhdGNoQnVmZmVyICgpIHtcblx0XHRjbGVhckludGVydmFsKHRoaXMud2F0Y2hCdWZmZXJJbnRlcnZhbCk7XG5cdFx0bGV0IHZpZGVvID0gdGhpcy5wbGF5ZXIudmlkZW87XG5cdFx0bGV0IHVwZGF0ZVByb2dyZXNzQmFyID0gKCkgPT4ge1xuXHRcdFx0Y29uc3QgRU5EID0gMTtcblx0XHRcdGNvbnN0IFNUQVJUID0gMDtcblx0XHRcdGxldCByZXN1bHQgPSAkKCcnKTtcblx0XHRcdHZpZGVvLmxvYWRlZC5mb3JFYWNoKGl0ZW0gPT4ge1xuXHRcdFx0XHRsZXQgZG9tSXRlbSA9ICQoJzxkaXYgLz4nKS5hZGRDbGFzcygndGltZS1idWZmZXJlZCcpO1xuXHRcdFx0XHRkb21JdGVtLmNzcyh7XG5cdFx0XHRcdFx0bGVmdCA6IGl0ZW1bU1RBUlRdICogMTAwICsgJyUnLFxuXHRcdFx0XHRcdHdpZHRoIDogKGl0ZW1bRU5EXSAtIGl0ZW1bU1RBUlRdKSAqIDEwMCArICclJ1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0cmVzdWx0ID0gcmVzdWx0LmFkZChkb21JdGVtKTtcblx0XHRcdH0pO1xuXHRcdFx0dGhpcy5idWZmZXJlZC5odG1sKHJlc3VsdCk7XG5cdFx0XHRpZiAodmlkZW8ubG9hZGVkLmxlbmd0aCAmJiAoMSAtIHZpZGVvLmxvYWRlZFNpemUpIDw9IDAuMDUpIHtcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLndhdGNoQnVmZmVySW50ZXJ2YWwpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHR0aGlzLndhdGNoQnVmZmVySW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCh1cGRhdGVQcm9ncmVzc0JhciwgNTAwKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBPbiBkdXJhdGlvbmNoYW5nZSBldmVudCBoYW5kbGVyXG5cdCAqL1xuXHRfb25EdXJhdGlvbkNoYW5nZSAoKSB7XG5cdFx0dGhpcy51cGRhdGVMYWJlbHMoKTtcblx0XHRpZiAodGhpcy5wbGF5ZXIuc2VjdGlvbnMpIHtcblx0XHRcdHRoaXMudXBkYXRlU2VjdGlvblJhbmdlcyh0aGlzLnBsYXllci5zZWN0aW9ucy5pdGVtcyk7XG5cdFx0fVxuXHR9XG5cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdUaW1lbGluZUNvbnRyb2wnLCBUaW1lbGluZUNvbnRyb2wpO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ3RpbWVsaW5lJywgVGltZWxpbmVDb250cm9sKTtcbmV4cG9ydCBkZWZhdWx0IFRpbWVsaW5lQ29udHJvbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL1RpbWVsaW5lL1RpbWVsaW5lQ29udHJvbC5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgQ29udHJvbFRleHQuanNcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9Db250cm9sJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBjbGFzcyBDb250cm9sVGV4dFxuICogQGV4bnRlZHMgQ29udHJvbFxuICovXG5jbGFzcyBDb250cm9sVGV4dCBleHRlbmRzIENvbnRyb2wge1xuXHRjb25zdHJ1Y3RvciAocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRjbGFzc05hbWUgOiAnJ1xuXHRcdH0sIG9wdGlvbnMpO1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdHN1cGVyLmNyZWF0ZUVsZW1lbnQoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGJ1aWxkQ1NTQ2xhc3MoKSB7XG5cdFx0cmV0dXJuIGBjb250cm9sLXRleHQgJHt0aGlzLm9wdGlvbnMuY2xhc3NOYW1lfWA7XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBTZXR0ZXIgb2YgdGV4dCBmaWVsZFxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuXHQgKi9cblxuXHRzZXQgdGV4dCAodmFsdWUpIHtcblx0XHR0aGlzLl90ZXh0ID0gdmFsdWU7XG5cdFx0dGhpcy5lbGVtZW50Lmh0bWwodmFsdWUpO1xuXHR9XG5cblx0Z2V0IHRleHQgKCkge1xuXHRcdHJldHVybiB0aGlzLl90ZXh0XG5cdH1cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdDb250cm9sVGV4dCcsIENvbnRyb2xUZXh0KTtcbkNvbnRyb2wucmVnaXN0ZXJDb250cm9sKCd0ZXh0JywgQ29udHJvbFRleHQpO1xuZXhwb3J0IGRlZmF1bHQgQ29udHJvbFRleHQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9Db250cm9sVGV4dC5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgQnVmZmVyZWRSYW5nZXMuanNcbiAqL1xuXG5pbXBvcnQgeyBwZXJjZW50aWZ5LCBjcmVhdGVFbCB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vQ29tcG9uZW50JztcblxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAY2xhc3MgQnVmZmVyZWRSYW5nZXNcbiAqIEBleHRlbmRzIENvbnRyb2xcbiAqL1xuXG5jbGFzcyBCdWZmZXJlZFJhbmdlcyBleHRlbmRzIENvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblxuXHRcdHRoaXMucGxheWVyLm9uKCdwcm9ncmVzcycsIHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xuXHRcdHRoaXMucGxheWVyLm9uKCdzZWVrZWQnLCB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0dGhpcy5yYW5nZSA9IGNyZWF0ZUVsKCdkaXYnLCB7XG5cdFx0XHRjbGFzc05hbWUgOiAnbGVwbGF5ZXItdGltZWxpbmUtYnVmZmVyZWRfX3JhbmdlJ1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudCA9IGNyZWF0ZUVsKCdkaXYnLCB7XG5cdFx0XHRjbGFzc05hbWUgOiAnbGVwbGF5ZXItdGltZWxpbmUtYnVmZmVyZWQnXG5cdFx0fSkuYXBwZW5kKHRoaXMucmFuZ2UpO1xuXHR9XG5cblxuXHR1cGRhdGUoKSB7XG5cdFx0Y29uc3QgYnVmZmVyZWQgPSB0aGlzLnBsYXllci52aWRlby5idWZmZXJlZDtcblx0XHRjb25zdCBkdXJhdGlvbiA9IHRoaXMucGxheWVyLnZpZGVvLmR1cmF0aW9uO1xuXHRcdGlmKGJ1ZmZlcmVkID09IG51bGwpIHJldHVybjtcblxuXHRcdGxldCBlbmQgPSAwO1xuXHRcdGlmIChidWZmZXJlZC5sZW5ndGggPiAwKSB7XG5cdFx0XHRlbmQgPSBidWZmZXJlZC5lbmQoYnVmZmVyZWQubGVuZ3RoIC0gMSk7XG5cdFx0fVxuXG5cdFx0aWYgKGR1cmF0aW9uID4gMCkge1xuXHRcdFx0dGhpcy5yYW5nZS5jc3Moe1xuXHRcdFx0XHR3aWR0aCA6IHBlcmNlbnRpZnkoZW5kLCBkdXJhdGlvbikgKiAxMDAgKyAnJSdcblx0XHRcdH0pXG5cblx0XHR9XG5cdH1cbn1cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnQnVmZmVyZWRSYW5nZXMnLCBCdWZmZXJlZFJhbmdlcyk7XG5leHBvcnQgZGVmYXVsdCBCdWZmZXJlZFJhbmdlcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL1RpbWVsaW5lL0J1ZmZlcmVkUmFuZ2VzLmpzIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vQ29tcG9uZW50JztcblxuY2xhc3MgTWFya2VyIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XG5cblx0XHRvcHRpb25zID0gJC5leHRlbmQoe30sIHtcblx0XHRcdGRyYWcgOiBmYWxzZSxcblx0XHRcdGNsYXNzTmFtZSA6ICcnXG5cdFx0fSwgb3B0aW9ucyk7XG5cblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXHRcdHRoaXMuZWxlbWVudC5vbignbW91c2Vkb3duJywgdGhpcy5fb25Nb3VzZWRvd24uYmluZCh0aGlzKSk7XG5cblx0XHQkKGRvY3VtZW50KS5vbih7XG5cblx0XHRcdG1vdXNlbW92ZSA6IChlKSA9PiB7XG5cdFx0XHRcdGlmICghdGhpcy5kcmFnKSByZXR1cm47XG5cdFx0XHRcdHRoaXMuZWxlbWVudC50cmlnZ2VyKCdsZXBsYXllcl9tb3VzZW1vdmUnLCB7IHggOiBlLnBhZ2VYIH0pO1xuXHRcdFx0fSxcblxuXHRcdFx0bW91c2V1cCA6IChlKSA9PiB7XG5cdFx0XHRcdGlmICghdGhpcy5kcmFnKSByZXR1cm47XG5cdFx0XHRcdHRoaXMuZHJhZyA9IGZhbHNlO1xuXHRcdFx0XHR0aGlzLm1hcmtlclRpbWUuaGlkZSgpO1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQudHJpZ2dlcignbGVwbGF5ZXJfbW91c2V1cCcsIHsgeCA6IGUucGFnZVggfSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRzZXQgZHJhZyh2YWx1ZSkge1xuXHRcdHRoaXMuX2RyYWcgPSB2YWx1ZTtcblx0XHR0aGlzLmVsZW1lbnQudG9nZ2xlQ2xhc3MoJ3RpbWUtbWFya2VyLS1kcmFnJywgdmFsdWUpO1xuXHR9XG5cblx0Z2V0IGRyYWcoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2RyYWc7XG5cdH1cblxuXHRfb25Nb3VzZWRvd24oZSkge1xuXHRcdGlmIChlLndoaWNoICE9PSAxKSByZXR1cm47XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGlmKHRoaXMub3B0aW9ucy5kcmFnKSB7XG5cdFx0XHR0aGlzLmRyYWcgPSB0cnVlO1xuXHRcdH1cblx0XHR0aGlzLmVsZW1lbnQudHJpZ2dlcignbGVwbGF5ZXJfbW91c2Vkb3duJyk7XG5cdH1cblxuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdC8vIE1hcmtlciBvZiBjdXJyZW50IHRpbWUgb24gdGltZWxpbmVcblx0XHR0aGlzLm1hcmtlclRpbWUgPSAkKCc8ZGl2IC8+Jylcblx0XHRcdC5hZGRDbGFzcygndGltZScpXG5cdFx0XHQuaGlkZSgpO1xuXG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudCA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0LmFkZENsYXNzKGB0aW1lLW1hcmtlciAke3RoaXMub3B0aW9ucy5jbGFzc05hbWV9YClcblx0XHRcdC5hcHBlbmQodGhpcy5tYXJrZXJUaW1lKVxuXG5cdH1cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdNYXJrZXInLCBNYXJrZXIpO1xuZXhwb3J0IGRlZmF1bHQgTWFya2VyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvVGltZWxpbmUvTWFya2VyLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBTZWN0aW9uQ29udHJvbC5qc1xuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCBDb250cm9sIGZyb20gJy4vQ29udHJvbCc7XG5pbXBvcnQgQ29udHJvbENoZWNrYm94IGZyb20gJy4vQ29udHJvbENoZWNrYm94JztcblxuLyoqXG4gKiBAY2xhc3MgU2VjdGlvbkNvbnRyb2xcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuY2hlY2tlZD10cnVlXVxuICogQGV4dGVuZHMgQ29udHJvbENoZWNrYm94XG4gKi9cbmNsYXNzIFNlY3Rpb25Db250cm9sIGV4dGVuZHMgQ29udHJvbENoZWNrYm94IHtcblx0Y29uc3RydWN0b3IgKHBsYXllciwgb3B0aW9ucz17fSkge1xuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0aWNvbk5hbWUgOiAnbGlzdC11bCcsXG5cdFx0XHRjbGFzc05hbWUgOiAnc2VjdGlvbicsXG5cdFx0XHRuYW1lIDogJ3NlY3Rpb24nLFxuXHRcdFx0dGl0bGUgOiAn0J/QvtC60LDQt9Cw0YLRjC/RgdC60YDRi9GC0Ywg0YHQtdC60YbQuNC4Jyxcblx0XHRcdGRpc2FibGUgOiB0cnVlXG5cdFx0fSwgb3B0aW9ucyk7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblxuXHRcdHRoaXMucGxheWVyLm9uKCdzZWN0aW9uc2luaXQnLCB0aGlzLl9vblNlY3Rpb25zSW5pdC5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdG9uQ2hlY2tlZChlLCBkYXRhKSB7XG5cdFx0c3VwZXIub25DaGVja2VkKGUpO1xuXHRcdHRoaXMucGxheWVyLnRyaWdnZXIoJ3NlY3Rpb25zdG9nZ2xlJywge1xuXHRcdFx0Y2hlY2tlZCA6IGRhdGEuY2hlY2tlZCxcblx0XHRcdHZpZXcgOiB0aGlzLnBsYXllci52aWV3XG5cdFx0fSk7XG5cdH1cblxuXHRfb25TZWN0aW9uc0luaXQoZSkge1xuXHRcdHRoaXMub3B0aW9ucy5kaXNhYmxlID0gdGhpcy5kaXNhYmxlID0gZmFsc2U7XG5cdFx0dGhpcy5jaGVja2VkID0gdHJ1ZTtcblx0fVxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ1NlY3Rpb25Db250cm9sJywgU2VjdGlvbkNvbnRyb2wpO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ3NlY3Rpb24nLCBTZWN0aW9uQ29udHJvbCk7XG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uQ29udHJvbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL1NlY3Rpb25Db250cm9sLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBjb250cm9sLWNoZWNrYm94LmpzXG4gKi9cblxuXG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL0NvbnRyb2wnO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5cbi8qKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5jaGVja2VkPWZhbHNlXVxuICogQGNsYXNzIENvbnRyb2xDaGVja2JveCBUb2dnYWJsZSBjb250cm9sXG4gKi9cbmNsYXNzIENvbnRyb2xDaGVja2JveCBleHRlbmRzIENvbnRyb2wge1xuXG5cdGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucz17fSkge1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cdFx0dGhpcy5jaGVja2VkID0gdGhpcy5vcHRpb25zLmNoZWNrZWQgfHwgZmFsc2U7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdsZXBsYXllcl9jaGVja2VkJywgdGhpcy5vbkNoZWNrZWQuYmluZCh0aGlzKSlcblx0fVxuXG5cblx0LyoqXG5cdCAqIFNldHRlciBmb3IgY2hlY2tlZCBwcm9wZXJ0eVxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gdmFsXG5cdCAqL1xuXHRzZXQgY2hlY2tlZCAodmFsKSB7XG5cdFx0aWYgKHRoaXMuZGlzYWJsZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR2YWwgPSAhIXZhbDtcblx0XHR0aGlzLl9jaGVja2VkID0gdmFsXG5cdFx0dGhpcy5lbGVtZW50LnRvZ2dsZUNsYXNzKCdjb250cm9sLWNoZWNrYm94LS1jaGVja2VkJywgdmFsKTtcblx0XHR0aGlzLmVsZW1lbnQudHJpZ2dlcignbGVwbGF5ZXJfY2hlY2tlZCcsIHsgY2hlY2tlZCA6IHZhbCB9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXR0ZXIgZm9yIGNoZWNrZWQgcHJvcGVyeVxuXHQgKiBAcHVibGljXG5cdCAqIEByZXR1cm4ge2Jvb2xlYW59XG5cdCAqL1xuXHRnZXQgY2hlY2tlZCAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2NoZWNrZWQ7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRvbkNsaWNrIChlKSB7XG5cdFx0c3VwZXIub25DbGljayhlKTtcblx0XHR0aGlzLmNoZWNrZWQgPSAhdGhpcy5jaGVja2VkO1xuXHR9XG5cblx0LyoqXG5cdCAqIE9uIGNoZWNrZWQgZXZlbnQgaGFuZGxlclxuXHQgKlxuXHQgKiBAcGFyYW0ge0V2ZW50fSBlXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG5cdCAqL1xuXHRvbkNoZWNrZWQoZSwgZGF0YSkge1xuXG5cdH1cblxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGJ1aWxkQ1NTQ2xhc3MoKSB7XG5cdFx0cmV0dXJuIGBjb250cm9sLWNoZWNrYm94ICR7c3VwZXIuYnVpbGRDU1NDbGFzcygpfWBcblx0fVxuXG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnQ29udHJvbENoZWNrYm94JywgQ29udHJvbENoZWNrYm94KTtcbkNvbnRyb2wucmVnaXN0ZXJDb250cm9sKCdjaGVja2JveCcsIENvbnRyb2xDaGVja2JveCk7XG5leHBvcnQgZGVmYXVsdCBDb250cm9sQ2hlY2tib3g7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9Db250cm9sQ2hlY2tib3guanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIEZ1bGxzY3JlZW5Db250cm9sLmpzXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9Db250cm9sJztcblxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAY2xhc3MgRnVsbHNjcmVlbkNvbnRyb2xcbiAqIEBleHRlbmRzIENvbnRyb2xcbiAqL1xuY2xhc3MgRnVsbHNjcmVlbkNvbnRyb2wgZXh0ZW5kcyBDb250cm9sIHtcblx0Y29uc3RydWN0b3IgKHBsYXllciwgb3B0aW9ucz17fSkge1xuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0aWNvbk5hbWUgOiAnYXJyb3dzLWFsdCcsXG5cdFx0XHRjbGFzc05hbWUgOiAnZnVsbHNjcmVlbicsXG5cdFx0XHR0aXRsZSA6ICfQoNCw0LfQstC10YDQvdGD0YLRjC/RgdCy0LXRgNC90YPRgtGMINC90LAg0L/QvtC70L3Ri9C5INGN0LrRgNCw0L0nLFxuXHRcdFx0bmFtZSA6ICdmdWxsc2NyZWVuJ1xuXHRcdH0sIG9wdGlvbnMpO1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRvbkNsaWNrKGUpIHtcblx0XHRzdXBlci5vbkNsaWNrKGUpXG5cdFx0dGhpcy5wbGF5ZXIudG9nZ2xlRnVsbHNjcmVlbigpO1xuXHR9XG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnRnVsbHNjcmVlbkNvbnRyb2wnLCBGdWxsc2NyZWVuQ29udHJvbCk7XG5Db250cm9sLnJlZ2lzdGVyQ29udHJvbCgnZnVsbHNjcmVlbicsIEZ1bGxzY3JlZW5Db250cm9sKTtcbmV4cG9ydCBkZWZhdWx0IEZ1bGxzY3JlZW5Db250cm9sO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvRnVsbHNjcmVlbkNvbnRyb2wuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIFJhdGVDb250cm9sLmpzXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9Db250cm9sJztcbmltcG9ydCBDb250cm9sVGV4dCBmcm9tICcuL0NvbnRyb2xUZXh0JztcbmltcG9ydCBDb29raWUgZnJvbSAnLi4vdXRpbHMvY29va2llJztcblxuLyoqXG4gKiBAY2xhc3MgUmF0ZUNvbnRyb2xcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEBwcm9wZXJ0eSB7Q29udHJvbH0gZG93bkNvbnRyb2wgIERvd24gcmF0ZSBjb250cm9sXG4gKiBAcHJvcGVydHkge0NvbnRyb2x9IHVwQ29udHJvbCAgVXAgcmF0ZSBjb250cm9sXG4gKiBAcHJvcGVydHkge0NvbnRyb2xUZXh0fSBjdXJyZW50UmF0ZSBDb250cm9sIG9mIGN1dXJlbnQgcmF0ZVxuICogQGV4dGVuZHMgQ29udHJvbFxuICovXG5jbGFzcyBSYXRlQ29udHJvbCBleHRlbmRzIENvbnRyb2wge1xuXHRjb25zdHJ1Y3RvciAocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRjbGFzc05hbWUgOiAnY29udHJvbC1jb250YWluZXInXG5cdFx0fSwgb3B0aW9ucyk7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblxuXHRcdHRoaXMucGxheWVyLm9uKCdyYXRlY2hhbmdlJywgKCkgPT4ge1xuXHRcdFx0dGhpcy51cGRhdGUoKTtcblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0c3VwZXIuY3JlYXRlRWxlbWVudCgpO1xuXHRcdGNvbnN0IHZpZGVvID0gdGhpcy5wbGF5ZXIudmlkZW87XG5cblx0XHR0aGlzLmRvd25Db250cm9sID0gbmV3IENvbnRyb2wodGhpcy5wbGF5ZXIsIHtcblx0XHRcdGNsYXNzTmFtZSA6ICdyYXRlLWRvd24nLFxuXHRcdFx0bmFtZSA6ICdyYXRlLWRvd24nLFxuXHRcdFx0aWNvbk5hbWUgOiAnYmFja3dhcmQnLFxuXHRcdFx0Y29sbGVjdGlvbiA6IHRoaXMub3B0aW9ucy5jb2xsZWN0aW9uLFxuXHRcdFx0dGl0bGUgOiAn0KPQvNC10L3RjNGI0LjRgtGMINGB0LrQvtGA0L7RgdGC0Ywg0L/RgNC+0LjQs9GA0YvQstCw0L3QuNGPJyxcblx0XHRcdG9uQ2xpY2sgOiBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdHZpZGVvLmRlY3JlYXNlUmF0ZSgpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0dGhpcy51cENvbnRyb2wgPSBuZXcgQ29udHJvbCh0aGlzLnBsYXllciwge1xuXHRcdFx0Y2xhc3NOYW1lIDogJ3JhdGUtdXAnLFxuXHRcdFx0bmFtZSA6ICdyYXRlLXVwJyxcblx0XHRcdGljb25OYW1lIDogJ2ZvcndhcmQnLFxuXHRcdFx0Y29sbGVjdGlvbiA6IHRoaXMub3B0aW9ucy5jb2xsZWN0aW9uLFxuXHRcdFx0dGl0bGUgOiAn0KPQstC10LvQuNGH0LjRgtGMINGB0LrQvtGA0L7RgdGC0Ywg0L/RgNC+0LjQs9GA0YvQstCw0L3QuNGPJyxcblx0XHRcdG9uQ2xpY2sgOiBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdHZpZGVvLmluY3JlYXNlUmF0ZSgpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0dGhpcy5jdXJyZW50UmF0ZSA9IG5ldyBDb250cm9sVGV4dCh0aGlzLnBsYXllciwge1xuXHRcdFx0Y2xhc3NOYW1lIDogJ3JhdGUtY3VycmVudCcsXG5cdFx0XHRvbkNsaWNrIDogZnVuY3Rpb24oZSkge1xuXHRcdFx0XHR2aWRlby5yYXRlID0gdGhpcy5wbGF5ZXIub3B0aW9ucy5yYXRlLmRlZmF1bHRcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHRoaXMuZWxlbWVudFxuXHRcdFx0LmFwcGVuZCh0aGlzLmRvd25Db250cm9sLmVsZW1lbnQpXG5cdFx0XHQuYXBwZW5kKHRoaXMuY3VycmVudFJhdGUuZWxlbWVudClcblx0XHRcdC5hcHBlbmQodGhpcy51cENvbnRyb2wuZWxlbWVudCk7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRidWlsZENTU0NsYXNzKCkge1xuXHRcdHJldHVybiB0aGlzLm9wdGlvbnMuY2xhc3NOYW1lO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0b25QbGF5ZXJJbml0ZWQoKSB7XG5cdFx0dGhpcy51cGRhdGUoKTtcblx0fVxuXG5cdC8qKlxuXHQgKlxuXHQgKi9cblx0X29uQ2xpY2soZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKVxuXHR9XG5cblx0dXBkYXRlKHZhbHVlKSB7XG5cdFx0Y29uc3QgdmlkZW8gPSB0aGlzLnBsYXllci52aWRlbztcblxuXHRcdHZhbHVlID0gdmFsdWUgfHwgdmlkZW8ucmF0ZTtcblx0XHR2YWx1ZSA9IHBhcnNlRmxvYXQodmFsdWUpXG5cdFx0XHQudG9GaXhlZCgyKVxuXHRcdFx0LnRvU3RyaW5nKClcblx0XHRcdC5yZXBsYWNlKC8sL2csICcuJyk7XG5cdFx0dGhpcy5jdXJyZW50UmF0ZS50ZXh0ID0gJ8OXJyArIHZhbHVlO1xuXG5cdFx0aWYodGhpcy5kaXNhYmxlKSByZXR1cm47XG5cblx0XHRpZih2aWRlby5yYXRlIDw9IHZpZGVvLnJhdGVNaW4pIHtcblx0XHRcdHRoaXMuZG93bkNvbnRyb2wuZGlzYWJsZSA9IHRydWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuZG93bkNvbnRyb2wuZGlzYWJsZSA9IGZhbHNlO1xuXHRcdH1cblxuXHRcdGlmKHZpZGVvLnJhdGUgPj0gdmlkZW8ucmF0ZU1heCkge1xuXHRcdFx0dGhpcy51cENvbnRyb2wuZGlzYWJsZSA9IHRydWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMudXBDb250cm9sLmRpc2FibGUgPSBmYWxzZTtcblx0XHR9XG5cdH1cblxuXHRzZXQgZGlzYWJsZSh2YWx1ZSkge1xuXHRcdHRoaXMuX2Rpc2FibGUgPSB2YWx1ZTtcblx0XHR0aGlzLmRvd25Db250cm9sLmRpc2FibGUgPSB2YWx1ZTtcblx0XHR0aGlzLnVwQ29udHJvbC5kaXNhYmxlID0gdmFsdWU7XG5cdH1cblxuXHRpbml0ICgpIHtcblx0XHRsZXQgcmF0ZSA9IENvb2tpZS5nZXQoJ3JhdGUnLCB0aGlzLnBsYXllci5vcHRpb25zLnJhdGUuZGVmYXVsdCk7XG5cdFx0dGhpcy5zaG93KHJhdGUpO1xuXHR9XG5cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdSYXRlQ29udHJvbCcsIFJhdGVDb250cm9sKTtcbkNvbnRyb2wucmVnaXN0ZXJDb250cm9sKCdyYXRlJywgUmF0ZUNvbnRyb2wpO1xuZXhwb3J0IGRlZmF1bHQgUmF0ZUNvbnRyb2w7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9SYXRlQ29udHJvbC5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgY29va2llLWNvbnRyb2wuanNcbiAqXG4gKiBAY2xhcyBDb29raWVcbiAqL1xuY2xhc3MgQ29va2llIHtcblx0LyoqXG5cdCAqIEBwdWJsaWNcblx0ICpcblx0ICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgTmFtZSBvZiBjb29raWVcblx0ICogQHBhcmFtIHtTdHJpbmd9IFtkZmx0XSBSZXR1cm4gZGVmYXVsdCB2YWx1ZSBpZiB0aGlzIGZpZWxkIGlzIGVtcHR5XG5cdCAqXG5cdCAqL1xuXHRzdGF0aWMgZ2V0IChuYW1lLCBkZmx0KSB7XG5cdFx0dmFyIGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKTtcblx0XHRmb3IgKGxldCBpIGluIGNvb2tpZXMpIHtcblx0XHRcdHZhciBkID0gY29va2llc1sgaSBdLnRyaW0oKS5zcGxpdCgnPScpO1xuXHRcdFx0aWYgKGRbIDAgXSA9PT0gJ2xlcGxheWVyXycgKyBuYW1lKVxuXHRcdFx0XHRyZXR1cm4gZFsgMSBdO1xuXHRcdH1cblx0XHRyZXR1cm4gZGZsdDtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcHVibGljXG5cdCAqXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIEtleVxuXHQgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgVmFsdWVcblx0ICovXG5cdHN0YXRpYyBzZXQgKG5hbWUsIHZhbHVlKSB7XG5cdFx0dmFyIGQgPSBuZXcgRGF0ZSgpO1xuXHRcdGQuc2V0RGF0ZShkLnllYXIgKyAxKTtcblx0XHRkb2N1bWVudC5jb29raWUgPSAnbGVwbGF5ZXJfJyArIG5hbWUgKyAnPScgKyB2YWx1ZSArICc7ZXhwaXJlcz0nICsgZC50b1N0cmluZygpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvb2tpZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy91dGlscy9jb29raWUuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIEJhY2t3YXJkQ29udHJvbC5qc1xuICpcbiAqIEJhY2t3YXJkIGNvbnRyb2xcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL0NvbnRyb2wnO1xuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gT3B0aW9uc1xuICogQGNsYXNzIEJhY2t3YXJkQ29udHJvbFxuICogQGV4dGVuZHMgQ29udHJvbFxuICovXG5jbGFzcyBCYWNrd2FyZENvbnRyb2wgZXh0ZW5kcyBDb250cm9sIHtcblx0Y29uc3RydWN0b3IgKHBsYXllciwgb3B0aW9ucz17fSkge1xuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0aWNvbk5hbWUgOiAndW5kbycsXG5cdFx0XHRjbGFzc05hbWUgOiAnYmFja3dhcmQnLFxuXHRcdFx0bmFtZSA6ICdiYWNrd2FyZCcsXG5cdFx0XHR0aXRsZSA6IGDQntGC0LzQvtGC0LDRgtGMINC90LDQt9Cw0LQg0L3QsCAke3BsYXllci5vcHRpb25zLnBsYXliYWNrLnN0ZXAubWVkaXVtfSDRgdC10LrRg9C90LRgLFxuXHRcdH0sIG9wdGlvbnMpO1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRvbkNsaWNrKGUpIHtcblx0XHRzdXBlci5vbkNsaWNrKGUpO1xuXHRcdHRoaXMucGxheWVyLnZpZGVvLmN1cnJlbnRUaW1lIC09IHRoaXMucGxheWVyLm9wdGlvbnMucGxheWJhY2suc3RlcC5tZWRpdW07XG5cdFx0dGhpcy5wbGF5ZXIuc3BsYXNoSWNvbi5zaG93KCd1bmRvJyk7XG5cdH1cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdCYWNrd2FyZENvbnRyb2wnLCBCYWNrd2FyZENvbnRyb2wpO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ2JhY2t3YXJkJywgQmFja3dhcmRDb250cm9sKTtcbmV4cG9ydCBkZWZhdWx0IEJhY2t3YXJkQ29udHJvbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL0JhY2t3YXJkQ29udHJvbC5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgU291cmNlQ29udHJvbC5qc1xuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCBDb250cm9sIGZyb20gJy4vQ29udHJvbCc7XG5pbXBvcnQgQ29udHJvbENvbnRhaW5lciBmcm9tICcuL0NvbnRyb2xDb250YWluZXInO1xuXG5cbi8qKlxuICogQGNsYXNzIFNvdXJjZUNvbnRyb2xcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBleHRlbmRzIENvbnRyb2xDb25haW5lclxuICovXG5jbGFzcyBTb3VyY2VDb250cm9sIGV4dGVuZHMgQ29udHJvbENvbnRhaW5lciB7XG5cdC8vIFRPRE86INCU0LXQu9Cw0YLRjCBkaXNhYmxlL2VuYWJsZSDQv9C+0YHQu9C1IG9wdGlvbnMgaW5pdFxuXHRjb25zdHJ1Y3RvciAocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRuYW1lIDogJ3NvdXJjZScsXG5cdFx0XHRpY29uTmFtZSA6ICdidWxsc2V5ZScsXG5cdFx0XHR0aXRsZSA6ICfQmtCw0YfQtdGB0YLQstC+Jyxcblx0XHRcdGNsYXNzTmFtZSA6ICdzb3VyY2UtY29udHJvbCcsXG5cdFx0XHRkaXNhYmxlIDogdHJ1ZVxuXHRcdH0sIG9wdGlvbnMpO1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cblx0XHR0aGlzLnBsYXllci5vbigncGxheWluZycsIHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xuXHRcdHRoaXMucGxheWVyLm9uKCdxdWFsaXR5Y2hhbmdlJywgdGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG5cdH1cblxuXHRvbkl0ZW1DbGljayhlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGNvbnN0IGl0ZW0gPSAkKGUudGFyZ2V0KTtcblx0XHRjb25zdCB2aWRlbyA9IHRoaXMucGxheWVyLnZpZGVvO1xuXHRcdHZpZGVvLnBsYXliYWNrUXVhbGl0eSA9IGl0ZW0uZGF0YSgnbmFtZScpO1xuXG5cdFx0dGhpcy5kcm9wZG93bkNvbnRlbnQuaGlkZSgpO1xuXG5cdH1cblxuXHRvblBsYXllckluaXRlZChlLCBkYXRhKSB7XG5cdFx0dGhpcy51cGRhdGUoKTtcblx0fVxuXG5cdHVwZGF0ZSgpIHtcblx0XHRjb25zdCB2aWRlbyA9IHRoaXMucGxheWVyLnZpZGVvO1xuXHRcdGNvbnN0IHF1YWxpdHlMZXZlbHMgPSB2aWRlby5nZXRBdmFpbGFibGVRdWFsaXR5TGV2ZWxzKCk7XG5cdFx0Y29uc3QgY3VycmVudFF1YWxpdHkgPSB2aWRlby5wbGF5YmFja1F1YWxpdHk7XG5cblx0XHRpZihxdWFsaXR5TGV2ZWxzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0dGhpcy5kaXNhYmxlID0gdHJ1ZTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLmxpc3QgPSBbXTtcblx0XHR0aGlzLmRyb3Bkb3duQ29udGVudC5lbXB0eSgpO1xuXG5cdFx0cXVhbGl0eUxldmVscy5mb3JFYWNoKGl0ZW0gPT4ge1xuXHRcdFx0Y29uc3QgZWxlbSA9IHRoaXMuYWRkSXRlbShpdGVtLnRpdGxlLCBpdGVtKTtcblx0XHRcdGlmKGN1cnJlbnRRdWFsaXR5Lm5hbWUgPT09IGl0ZW0ubmFtZSkge1xuXHRcdFx0XHR0aGlzLmFjdGl2ZSA9IGVsZW07XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0dGhpcy5kaXNhYmxlID0gZmFsc2U7XG5cdH1cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdTb3VyY2VDb250cm9sJywgU291cmNlQ29udHJvbCk7XG5Db250cm9sLnJlZ2lzdGVyQ29udHJvbCgnc291cmNlJywgU291cmNlQ29udHJvbCk7XG5leHBvcnQgZGVmYXVsdCBTb3VyY2VDb250cm9sO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvU291cmNlQ29udHJvbC5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgQ29udHJvbENvbnRhaW5lci5qc1xuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCBDb250cm9sIGZyb20gJy4vQ29udHJvbCc7XG5pbXBvcnQgQ29udHJvbERyb3Bkb3duIGZyb20gJy4vQ29udHJvbERyb3Bkb3duJztcblxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAY2xhc3MgQ29udHJvbENvbnRhaW5lclxuICogQGV4dGVuZHMgQ29udHJvbERyb3Bkb3duXG4gKi9cbmNsYXNzIENvbnRyb2xDb250YWluZXIgZXh0ZW5kcyBDb250cm9sRHJvcGRvd24ge1xuXG5cdGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucykge1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cdFx0dGhpcy5fYWN0aXZlID0gbnVsbDtcblx0XHQvKipcblx0XHQgKiBMaXN0IG9mIGl0ZW1zXG5cdFx0ICpcblx0XHQgKiBAcHVibGljXG5cdFx0ICogQHR5cGUge0FycmF5fVxuXHRcdCAqL1xuXHRcdHRoaXMubGlzdCA9IFtdO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBpdGVtIG9mIGNvbnRhaW5lciBieSBpbmRleFxuXHQgKlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuXHQgKi9cblx0Z2V0QnlJbmRleChpbmRleCkge1xuXHRcdHJldHVybiB0aGlzLmxpc3RbaW5kZXhdO1xuXHR9XG5cblx0LyoqXG5cdCAqIFNldCBpdGVtIGFjdGl2ZSBieSBpbmRleFxuXHQgKlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuXHQgKi9cblx0c2V0QWN0aXZlQnlJbmRleChpbmRleCkge1xuXHRcdGlmICh0aGlzLmFjdGl2ZSkge1xuXHRcdFx0dGhpcy5hY3RpdmUucmVtb3ZlQ2xhc3MoJ2NvbnRyb2wtY29udGFpbmVyX19pdGVtLS1hY3RpdmUnKTtcblx0XHR9XG5cdFx0dGhpcy5fYWN0aXZlID0gdGhpcy5saXN0W2luZGV4XS5hZGRDbGFzcygnY29udHJvbC1jb250YWluZXJfX2l0ZW0tLWFjdGl2ZScpO1xuXHRcdHJldHVybiB0aGlzLl9hY3RpdmU7XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBHZXR0ZXIgb2YgYWN0aXZlIGZpZWxkXG5cdCAqXG5cdCAqIEBwdWJsaWNcblx0ICogQHR5cGUge2pRdWVyeX1cblx0ICovXG5cdGdldCBhY3RpdmUgKCkge1xuXHRcdGlmICh0aGlzLl9hY3RpdmUgJiYgdGhpcy5fYWN0aXZlLmxlbmd0aCA+IDApIHtcblx0XHRcdHJldHVybiB0aGlzLl9hY3RpdmU7XG5cdFx0fVxuXHRcdHRoaXMubGlzdC5mb3JFYWNoKGl0ZW0gPT4ge1xuXHRcdFx0aWYgKGl0ZW0uaGFzQ2xhc3MoJ2NvbnRyb2wtY29udGFpbmVyX19pdGVtLS1hY3RpdmUnKSkge1xuXHRcdFx0XHR0aGlzLl9hY3RpdmUgPSBpdGVtO1xuXHRcdFx0fVxuXHRcdH0pXG5cdFx0cmV0dXJuIHRoaXMuX2FjdGl2ZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTZXR0ZXIgb2YgYWN0aXZlIGZpZWxkXG5cdCAqXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtqUXVlcnl9IEl0ZW0gb2YgY29udGFpbmVyXG5cdCAqL1xuXHRzZXQgYWN0aXZlIChlbGVtZW50KSB7XG5cdFx0aWYgKHRoaXMuYWN0aXZlKSB7XG5cdFx0XHR0aGlzLmFjdGl2ZS5yZW1vdmVDbGFzcygnY29udHJvbC1jb250YWluZXJfX2l0ZW0tLWFjdGl2ZScpO1xuXHRcdH1cblx0XHRpZiAoZWxlbWVudCkge1xuXHRcdFx0JChlbGVtZW50KS5hZGRDbGFzcygnY29udHJvbC1jb250YWluZXJfX2l0ZW0tLWFjdGl2ZScpO1xuXHRcdH1cblx0XHR0aGlzLl9hY3RpdmUgPSBlbGVtZW50O1xuXHRcdHJldHVybiB0aGlzLl9hY3RpdmVcblx0fVxuXG5cblx0LyoqXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtTdHJpbmd8alF1ZXJ5fSBDb250ZW50IG9mIGl0ZW1cblx0ICogQHBhcmFtIHtPYmplY3R9IERhdGEgb2YgaXRlbVxuXHQgKi9cblx0YWRkSXRlbSAoY29udGVudCwgZGF0YSkge1xuXHRcdGNvbnN0IGl0ZW0gPSAkKCc8ZGl2IC8+Jylcblx0XHRcdC5hZGRDbGFzcygnY29udHJvbC1jb250YWluZXJfX2l0ZW0nKVxuXHRcdFx0LmRhdGEoZGF0YSlcblx0XHRcdC5vbignY2xpY2snLCB0aGlzLm9uSXRlbUNsaWNrLmJpbmQodGhpcykpXG5cdFx0XHQuYXBwZW5kKGNvbnRlbnQpO1xuXG5cdFx0dGhpcy5saXN0LnB1c2goaXRlbSk7XG5cblx0XHR0aGlzLmRyb3Bkb3duQ29udGVudC5hcHBlbmQoaXRlbSk7XG5cblx0XHRyZXR1cm4gaXRlbTtcblx0fVxuXG5cdC8qKlxuXHQgKiBPbiBpdGVtIGNsaWNrIGV2ZW50IGhhbmRsZXJcblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge0V2ZW50fSBlXG5cdCAqL1xuXHRvbkl0ZW1DbGljayAoZSkge1xuXHRcdHRoaXMuYWN0aXZlID0gZS5jdXJyZW50VGFyZ2V0O1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0YnVpbGRDU1NDbGFzcygpIHtcblx0XHRyZXR1cm4gYCR7c3VwZXIuYnVpbGRDU1NDbGFzcygpfSBjb250cm9sLWNvbnRhaW5lcmBcblx0fVxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ0NvbnRyb2xDb250YWluZXInLCBDb250cm9sQ29udGFpbmVyKTtcbkNvbnRyb2wucmVnaXN0ZXJDb250cm9sKCdjb250YWluZXInLCBDb250cm9sQ29udGFpbmVyKTtcbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xDb250YWluZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9Db250cm9sQ29udGFpbmVyLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBTdWJ0aXRsZUNvbnRyb2wuanNcbiAqXG4gKiBTdWJ0aXRsZSBjb250cm9sXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9Db250cm9sJztcbmltcG9ydCBDb250cm9sQ29udGFpbmVyIGZyb20gJy4vQ29udHJvbENvbnRhaW5lcic7XG5cbi8qKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQGNsYXNzIFN1YnRpdGxlQ29udHJvbFxuICogQGV4dGVuZHMgQ29udHJvbENvbnRhaW5lclxuICovXG5jbGFzcyBTdWJ0aXRsZUNvbnRyb2wgZXh0ZW5kcyBDb250cm9sQ29udGFpbmVyIHtcblx0Y29uc3RydWN0b3IgKHBsYXllciwgb3B0aW9ucz17fSkge1xuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0aWNvbk5hbWUgOiAnY29tbWVudGluZy1vJyxcblx0XHRcdHRpdGxlIDogJ9Ch0YPQsdGC0LjRgtGA0YsnLFxuXHRcdFx0bmFtZSA6ICdzdWJ0aXRsZScsXG5cdFx0XHRjbGFzc05hbWUgOiAnc3VidGl0bGUtY29udHJvbCcsXG5cdFx0XHRkaXNhYmxlIDogdHJ1ZVxuXHRcdH0sIG9wdGlvbnMpO1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cdH1cblxuXHRvbkNsaWNrIChlKSB7XG5cdFx0c3VwZXIub25DbGljayhlKTtcblx0XHRsZXQgdmlkZW8gPSB0aGlzLnBsYXllci52aWRlbztcblx0XHR0aGlzLmFjdGl2ZSA9IG51bGxcblx0XHR2aWRlby50cmFjayA9IC0xO1xuXHR9XG5cblx0b25JdGVtQ2xpY2sgKGUpIHtcblx0XHRzdXBlci5vbkl0ZW1DbGljayhlKTtcblx0XHRsZXQgaXRlbSA9ICQoZS50YXJnZXQpXG5cdFx0bGV0IHZpZGVvID0gdGhpcy5wbGF5ZXIudmlkZW87XG5cdFx0aWYgKGl0ZW0uZGF0YSgnbGFuZ3VhZ2UnKSkge1xuXHRcdFx0dmlkZW8udHJhY2sgPSBpdGVtLmRhdGEoJ2xhbmd1YWdlJyk7XG5cdFx0fVxuXHR9XG5cblx0b25QbGF5ZXJJbml0ZWQoZSwgZGF0YSkge1xuXHRcdGxldCB2aWRlbyA9IHRoaXMucGxheWVyLnZpZGVvO1xuXG5cdFx0aWYodmlkZW8uc3VidGl0bGVzID09IG51bGwpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRpZiAodmlkZW8uc3VidGl0bGVzLmxlbmd0aCA+IDApIHtcblx0XHRcdGZvciAodmFyIGkgaW4gdmlkZW8uc3VidGl0bGVzKSB7XG5cdFx0XHRcdGlmICghdmlkZW8uc3VidGl0bGVzLmhhc093blByb3BlcnR5KGkpKSBjb250aW51ZTtcblx0XHRcdFx0bGV0IGl0ZW0gPSB2aWRlby5zdWJ0aXRsZXNbIGkgXTtcblx0XHRcdFx0dGhpcy5hZGRJdGVtKGl0ZW0udGl0bGUsIHtcblx0XHRcdFx0XHRzcmMgOiBpdGVtLnNyYyxcblx0XHRcdFx0XHRsYW5ndWFnZSA6IGl0ZW0ubGFuZ3VhZ2Vcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmRpc2FibGUgPSBmYWxzZTtcblx0XHR9XG5cdH1cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdTdWJ0aXRsZUNvbnRyb2wnLCBTdWJ0aXRsZUNvbnRyb2wpO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ3N1YnRpdGxlJywgU3VidGl0bGVDb250cm9sKTtcbmV4cG9ydCBkZWZhdWx0IFN1YnRpdGxlQ29udHJvbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL1N1YnRpdGxlQ29udHJvbC5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgRG93bmxvYWRDb250cm9sLmpzXG4gKlxuICogRG93bmxvYWQgY29udHJvbFxuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL0NvbnRyb2wnO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgSWNvbiBmcm9tICcuL0ljb24nO1xuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEBjbGFzcyBEb3dubG9hZENvbnRyb2xcbiAqIEBleG50ZWRzIENvbnRyb2xcbiAqL1xuY2xhc3MgRG93bmxvYWRDb250cm9sIGV4dGVuZHMgQ29udHJvbCB7XG5cdGNvbnN0cnVjdG9yIChwbGF5ZXIsIG9wdGlvbnM9e30pIHtcblx0XHRvcHRpb25zID0gJC5leHRlbmQoe1xuXHRcdFx0dGl0bGUgOiAn0KHQutCw0YfQsNGC0Ywg0LLQuNC00LXQvicsXG5cdFx0XHRjbGFzc05hbWUgOiAnZG93bmxvYWQnLFxuXHRcdFx0bmFtZSA6ICdkb3dubG9hZCdcblx0XHR9LCBvcHRpb25zKTtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXHRcdHRoaXMucGxheWVyLm9uKCdsb2Fkc3RhcnQnLCB0aGlzLm9uTG9hZFN0YXJ0LmJpbmQodGhpcykpO1xuXHR9XG5cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdC8vIFRPRE86INCU0L7QvtC/0YDQtdC00LXQu9C40YLRjCDRjdGC0L7RgiDQvNC10YLQvtC0LCDQsCDQvdC1INC/0LXRgNC10L7Qv9GA0LXQtNC70LXQuNGC0Yxcblx0XHR0aGlzLmVsZW1lbnQgPSAkKCc8YSAvPicpXG5cdFx0XHQuYXR0cih7XG5cdFx0XHRcdGhyZWYgOiAnJyxcblx0XHRcdFx0dGFyZ2V0IDogJ19ibGFuaycsXG5cdFx0XHRcdGRvd25sb2FkIDogdHJ1ZSxcblx0XHRcdFx0dGl0bGUgOiB0aGlzLm9wdGlvbnMudGl0bGUsXG5cdFx0XHR9KVxuXHRcdFx0LmFkZENsYXNzKHRoaXMuYnVpbGRDU1NDbGFzcygpKVxuXHRcdFx0LmFwcGVuZChuZXcgSWNvbih0aGlzLnBsYXllciwgeyBpY29uTmFtZSA6ICdkb3dubG9hZCcgfSkuZWxlbWVudCk7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRidWlsZENTU0NsYXNzKCkge1xuXHRcdHJldHVybiBgJHtzdXBlci5idWlsZENTU0NsYXNzKCl9YDtcblx0fVxuXG5cblx0LyoqXG5cdCAqIFNldHRlciBvZiBsaW5rIGZpZWxkXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIFBhdGggZm9yIHZpZGVvXG5cdCAqL1xuXHRzZXQgbGluayAodmFsdWUpIHtcblx0XHRjb25zdCBwYXJzZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cdFx0cGFyc2VyLmhyZWYgPSB2YWx1ZTtcblx0XHRsZXQgZmlsZU5hbWUgPSBwYXJzZXIucGF0aG5hbWUuc3BsaXQoJy8nKTtcblx0XHRmaWxlTmFtZSA9IGZpbGVOYW1lW2ZpbGVOYW1lLmxlbmd0aCAtIDFdO1xuXHRcdHRoaXMuZWxlbWVudC5hdHRyKHtcblx0XHRcdGhyZWYgOiB2YWx1ZSxcblx0XHRcdGRvd25sb2FkIDogZmlsZU5hbWVcblx0XHR9KTtcblx0fVxuXG5cblx0b25Mb2FkU3RhcnQoZSwgZGF0YSkge1xuXHRcdHRoaXMubGluayA9IHRoaXMucGxheWVyLnZpZGVvLnNyYy51cmxcblx0fVxuXG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnRG93bmxvYWRDb250cm9sJywgRG93bmxvYWRDb250cm9sKTtcbkNvbnRyb2wucmVnaXN0ZXJDb250cm9sKCdkb3dubG9hZCcsIERvd25sb2FkQ29udHJvbCk7XG5leHBvcnQgZGVmYXVsdCBEb3dubG9hZENvbnRyb2w7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9Eb3dubG9hZENvbnRyb2wuanMiLCJcbid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgS2V5YmluZGluZ0luZm9Db250cm9sLmpzXG4gKlxuICogSW5mbyBjb250cm9sXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9Db250cm9sJztcbmltcG9ydCBDb250cm9sRHJvcGRvd24gZnJvbSAnLi9Db250cm9sRHJvcGRvd24nO1xuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBjbGFzcyBLZXlCaW5kaW5nSW5mb0NvbnRyb2xcbiAqIEBleHRlbmRzIENvbnRyb2xEcm9wZG93blxuICovXG5jbGFzcyBLZXlCaW5kaW5nSW5mb0NvbnRyb2wgZXh0ZW5kcyBDb250cm9sRHJvcGRvd24ge1xuXG5cdGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucykge1xuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0aWNvbk5hbWUgOiAnaW5mbycsXG5cdFx0XHR0aXRsZSA6ICfQmNC90YTQvicsXG5cdFx0XHRjbGFzc05hbWUgOiAnaW5mby1jb250cm9sJyxcblx0XHRcdG5hbWUgOiAnaW5mbydcblx0XHR9LCBvcHRpb25zKTtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXHR9XG5cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHRzdXBlci5jcmVhdGVFbGVtZW50KCk7XG5cdFx0bGV0IGtleUJpbmRpbmcgPSB0aGlzLnBsYXllci5vcHRpb25zLmtleUJpbmRpbmc7XG5cdFx0bGV0IGluZm9Db250ZW50ID0gYGA7XG5cdFx0Zm9yIChsZXQgX2tleSBpbiBrZXlCaW5kaW5nKSB7XG5cdFx0XHRpZiAoIWtleUJpbmRpbmcuaGFzT3duUHJvcGVydHkoX2tleSkpIGNvbnRpbnVlO1xuXG5cdFx0XHRsZXQgaG90a2V5ID0ga2V5QmluZGluZ1tfa2V5XTtcblx0XHRcdGxldCBpdGVtID0gJyc7XG5cdFx0XHRsZXQga2V5U3RyaW5nID0gJyc7XG5cblx0XHRcdGhvdGtleS5pbmZvLmZvckVhY2goKGtleSwgaW5kZXgpID0+IHtcblx0XHRcdFx0aWYgKGluZGV4ICE9PSAwKSB7XG5cdFx0XHRcdFx0a2V5U3RyaW5nICs9IGAgKyBgXG5cdFx0XHRcdH1cblx0XHRcdFx0a2V5U3RyaW5nICs9IGA8a2JkIGNsYXNzPVwibGVwbGF5ZXIta2V5XCI+JHtrZXl9PC9rYmQ+YFxuXHRcdFx0fSk7XG5cblx0XHRcdGl0ZW0gPSBgXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJpbmZvLWNvbnRyb2xfX2l0ZW1cIj5cblx0XHRcdFx0XHQke2tleVN0cmluZ30gLSAke2hvdGtleS5kZXNjcmlwdGlvbn1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRgXG5cblx0XHRcdGluZm9Db250ZW50ICs9IGl0ZW07XG5cblx0XHR9XG5cdFx0dGhpcy5kcm9wZG93bkNvbnRlbnRcblx0XHRcdC5hZGRDbGFzcygnaW5mby1jb250cm9sX19jb250ZW50Jylcblx0XHRcdC5hcHBlbmQoaW5mb0NvbnRlbnQpO1xuXHR9XG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnS2V5QmluZGluZ0luZm9Db250cm9sJywgS2V5QmluZGluZ0luZm9Db250cm9sKTtcbkNvbnRyb2wucmVnaXN0ZXJDb250cm9sKCdrZXliaW5kaW5nIGluZm8nLCBLZXlCaW5kaW5nSW5mb0NvbnRyb2wpO1xuZXhwb3J0IGRlZmF1bHQgS2V5QmluZGluZ0luZm9Db250cm9sO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvS2V5YmluZGluZ0luZm9Db250cm9sLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBUaW1lSW5mb0NvbnRyb2wuanNcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL0NvbnRyb2wnO1xuaW1wb3J0IENvbnRyb2xUZXh0IGZyb20gJy4vQ29udHJvbFRleHQnO1xuaW1wb3J0IHsgc2Vjb25kc1RvVGltZSB9IGZyb20gJy4uL3V0aWxzJztcblxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAY2xhc3MgVGltZUluZm9Db250cm9sXG4gKiBAcHJvcGVydHkge0NvbnRyb2xUZXh0fSBjdXJyZW50VGltZSBDdXJyZW50IHRpbWUncyB0ZXh0XG4gKiBAcHJvcGVydHkge0NvbnRyb2xUZXh0fSB0b3RhbFRpbWUgVG90YWwgdGltZVxuICogQHByb3BlcnR5IHtqUXVlcnl9IGxpbmVcbiAqIEBleHRlbmRzIENvbnRyb2xcbiAqL1xuY2xhc3MgVGltZUluZm9Db250cm9sIGV4dGVuZHMgQ29udHJvbCB7XG5cblx0Y29uc3RydWN0b3IgKHBsYXllciwgb3B0aW9ucz17fSkge1xuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0Y2xhc3NOYW1lIDogJ3RpbWVsaW5lIHRpbWVsaW5lLWNvbnRhaW5lcicsXG5cdFx0XHRuYW1lIDogJ3RpbWUtaW5mbydcblx0XHR9LCBvcHRpb25zKTtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ3RpbWV1cGRhdGUnLCAoZSwgZGF0YSkgPT4ge1xuXHRcdFx0Y29uc3QgdGltZSA9IHRoaXMucGxheWVyLmN1cnJlbnRUaW1lO1xuXHRcdFx0dGhpcy5fY3VycmVudFRpbWVDb250cm9sLnRleHQgPSBzZWNvbmRzVG9UaW1lKHRpbWUpO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ2R1cmF0aW9uY2hhbmdlJywgKGUpID0+IHtcblx0XHRcdHRoaXMuX3RvdGFsVGltZUNvbnRyb2wudGV4dCA9IHNlY29uZHNUb1RpbWUodGhpcy5wbGF5ZXIudmlkZW8uZHVyYXRpb24pO1xuXHRcdH0pO1xuXHR9XG5cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdGNvbnN0IGR1cmF0aW9uID0gdGhpcy5wbGF5ZXIudmlkZW8uZHVyYXRpb247XG5cdFx0Y29uc3QgY3VycmVudFRpbWUgPSB0aGlzLnBsYXllci52aWRlby5jdXJyZW50VGltZTtcblx0XHR0aGlzLl9jdXJyZW50VGltZUNvbnRyb2wgPSBuZXcgQ29udHJvbFRleHQodGhpcy5wbGF5ZXIsIHsgY2xhc3NOYW1lIDogJ2NvbnRyb2wtdGltZV9fY3VycmVudCd9KTtcblx0XHR0aGlzLl90b3RhbFRpbWVDb250cm9sID0gbmV3IENvbnRyb2xUZXh0KHRoaXMucGxheWVyLCB7IGNsYXNzTmFtZSA6ICdjb250cm9sLXRpbWVfX3RvdGFsJ30pO1xuXG5cdFx0aWYoaXNOYU4oZHVyYXRpb24pIHx8IGR1cmF0aW9uID09IG51bGwpIHtcblx0XHRcdHRoaXMuX3RvdGFsVGltZUNvbnRyb2wudGV4dCA9ICcnO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLl90b3RhbFRpbWVDb250cm9sLnRleHQgPSBzZWNvbmRzVG9UaW1lKGR1cmF0aW9uKTtcblx0XHR9XG5cblx0XHRpZihjdXJyZW50VGltZSA9PSBudWxsKSB7XG5cdFx0XHR0aGlzLl9jdXJyZW50VGltZUNvbnRyb2wudGV4dCA9IHNlY29uZHNUb1RpbWUoMCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuX2N1cnJlbnRUaW1lQ29udHJvbC50ZXh0ID0gc2Vjb25kc1RvVGltZShjdXJyZW50VGltZSk7XG5cdFx0fVxuXG5cdFx0dGhpcy5lbGVtZW50ID0gJCgnPGRpdi8+JykuYWRkQ2xhc3MoJ2NvbnRyb2wtdGltZScpO1xuXHRcdHRoaXMuZWxlbWVudFxuXHRcdFx0LmFwcGVuZCh0aGlzLl9jdXJyZW50VGltZUNvbnRyb2wuZWxlbWVudClcblx0XHRcdC5hcHBlbmQodGhpcy5fdG90YWxUaW1lQ29udHJvbC5lbGVtZW50KVxuXG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudDtcblx0fVxuXG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0b25QbGF5ZXJJbml0ZWQoZSkge1xuXHRcdGxldCB2aWRlbyA9IHRoaXMucGxheWVyLnZpZGVvO1xuXHRcdHRoaXMuX2N1cnJlbnRUaW1lQ29udHJvbC50ZXh0ID0gc2Vjb25kc1RvVGltZSh2aWRlby5jdXJyZW50VGltZSk7XG5cdFx0dGhpcy5fdG90YWxUaW1lQ29udHJvbC50ZXh0ID0gc2Vjb25kc1RvVGltZSh2aWRlby5kdXJhdGlvbik7XG5cdH1cblxuXHRfb25DbGljayhlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdH1cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdUaW1lSW5mb0NvbnRyb2wnLCBUaW1lSW5mb0NvbnRyb2wpO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ3RpbWVpbmZvJywgVGltZUluZm9Db250cm9sKTtcbmV4cG9ydCBkZWZhdWx0IFRpbWVJbmZvQ29udHJvbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL1RpbWVJbmZvQ29udHJvbC5qcyIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29va2llIGZyb20gJy4uL3V0aWxzL2Nvb2tpZSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudHMvQ29tcG9uZW50JztcbmltcG9ydCB7IElTX1NBRkFSSSwgSVNfSU9TLCBJU19BTkRST0lEIH0gZnJvbSAnLi4vdXRpbHMvYnJvd3Nlcic7XG5pbXBvcnQgRW50aXR5IGZyb20gJy4vRW50aXR5JztcblxuXG5jbGFzcyBIdG1sNSBleHRlbmRzIEVudGl0eSB7XG5cdGNvbnN0cnVjdG9yIChwbGF5ZXIsIG9wdGlvbnMpIHtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXHRcdHRoaXMubWVkaWEgPSB0aGlzLmVsZW1lbnRbMF07XG5cblx0XHR0aGlzLnN1YnRpdGxlcyA9IFtdO1xuXHRcdHRoaXMuYnVmZmVyUmFuZ2VzID0gW107XG5cblx0XHR0aGlzLnNyYyA9IHRoaXMucGxheWVyLm9wdGlvbnMuc3JjO1xuXG5cdFx0aWYodGhpcy5wbGF5ZXIub3B0aW9ucy5wb3N0ZXIgIT0gbnVsbCkge1xuXHRcdFx0dGhpcy5wb3N0ZXIgPSB0aGlzLnBsYXllci5vcHRpb25zLnBvc3Rlcjtcblx0XHR9XG5cblx0XHRpZih0aGlzLmdldEF2YWlsYWJsZVF1YWxpdHlMZXZlbHMoKS5sZW5ndGggPiAwKSB7XG5cdFx0XHR0aGlzLl9wbGF5YmFja1F1YWxpdHkgPSB0aGlzLmdldEF2YWlsYWJsZVF1YWxpdHlMZXZlbHMoKVswXTtcblx0XHR9XG5cblx0XHR0aGlzLmVsZW1lbnQub24oJ2xvYWRzdGFydCcsIHRoaXMub25Mb2FkU3RhcnQuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCd0aW1ldXBkYXRlJywgdGhpcy5vblRpbWVVcGRhdGUuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdkdXJhdGlvbmNoYW5nZScsIHRoaXMub25EdXJhdGlvbkNoYW5nZS5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ3Byb2dyZXNzJywgdGhpcy5vblByb2dyZXNzLmJpbmQodGhpcykpO1xuXHRcdHRoaXMuZWxlbWVudC5vbignc2Vla2luZycsIHRoaXMub25TZWVraW5nLmJpbmQodGhpcykpO1xuXHRcdHRoaXMuZWxlbWVudC5vbignc2Vla2VkJywgdGhpcy5vblNlZWtlZC5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ3ZvbHVtZWNoYW5nZScsIHRoaXMub25Wb2x1bWVDaGFuZ2UuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdjbGljaycsIHRoaXMub25DbGljay5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ2RibGNsaWNrJywgdGhpcy5vbkRibGNsaWNrLmJpbmQodGhpcykpO1xuXHRcdHRoaXMuZWxlbWVudC5vbigncGxheScsIHRoaXMub25QbGF5LmJpbmQodGhpcykpO1xuXHRcdHRoaXMuZWxlbWVudC5vbigncGF1c2UnLCB0aGlzLm9uUGF1c2UuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdyYXRlY2hhbmdlJywgdGhpcy5vblJhdGVDaGFuZ2UuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdlbmRlZCcsIHRoaXMub25FbmRlZC5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ2NhbnBsYXl0aHJvdWdoJywgdGhpcy5vbkNhbnBsYXlUaHJvdWdoLmJpbmQodGhpcykpO1xuXHRcdHRoaXMuZWxlbWVudC5vbignd2FpdGluZycsIHRoaXMub25XYWl0aW5nLmJpbmQodGhpcykpO1xuXHRcdHRoaXMuZWxlbWVudC5vbignZXJyb3InLCB0aGlzLm9uRXJyb3IuYmluZCh0aGlzKSk7XG5cdH1cblxuXHRvbkxvYWRTdGFydChlKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCdsb2Fkc3RhcnQnKTtcblx0fVxuXG5cdG9uVGltZVVwZGF0ZShlKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCd0aW1ldXBkYXRlJyk7XG5cdH1cblxuXHRvbkR1cmF0aW9uQ2hhbmdlKGUpIHtcblx0XHR0aGlzLnRyaWdnZXIoJ2R1cmF0aW9uY2hhbmdlJyk7XG5cdH1cblxuXHRvblByb2dyZXNzKGUpIHtcblx0XHR0aGlzLnRyaWdnZXIoJ3Byb2dyZXNzJyk7XG5cdH1cblxuXHRvblNlZWtpbmcoZSkge1xuXHRcdHRoaXMudHJpZ2dlcignc2Vla2luZycpO1xuXHR9XG5cblx0b25TZWVrZWQoZSkge1xuXHRcdHRoaXMudHJpZ2dlcignc2Vla2VkJyk7XG5cdH1cblxuXHRvblZvbHVtZUNoYW5nZShlKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCd2b2x1bWVjaGFuZ2UnKTtcblx0fVxuXG5cdG9uQ2xpY2soKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCdjbGljaycpO1xuXHR9XG5cblx0b25EYmxjbGljaygpIHtcblx0XHR0aGlzLnRyaWdnZXIoJ2RibGNsaWNrJyk7XG5cdH1cblxuXHRvblBsYXkoKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCdwbGF5Jyk7XG5cdH1cblxuXHRvblBhdXNlKCkge1xuXHRcdHRoaXMudHJpZ2dlcigncGF1c2UnKTtcblx0fVxuXG5cdG9uUGxheWluZygpIHtcblx0XHR0aGlzLnRyaWdnZXIoJ3BsYXlpbmcnKTtcblx0fVxuXG5cdG9uUmF0ZUNoYW5nZSgpIHtcblx0XHR0aGlzLnRyaWdnZXIoJ3JhdGVjaGFuZ2UnKTtcblx0fVxuXG5cdG9uRW5kZWQoKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCdlbmRlZCcpO1xuXHR9XG5cblx0b25DYW5wbGF5VGhyb3VnaCgpIHtcblx0XHR0aGlzLnRyaWdnZXIoJ2NhbnBsYXl0aHJvdWdoJyk7XG5cdH1cblxuXHRvbldhaXRpbmcoKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCd3YWl0aW5nJyk7XG5cdH1cblxuXHRvbkVycm9yKGUpIHtcblx0XHR0aGlzLnRyaWdnZXIoJ2Vycm9yJywgeyBjb2RlIDogZS50YXJnZXQuZXJyb3IuY29kZSB9KTtcblx0fVxuXG5cdC8qIFRPRE8gKi9cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHR0aGlzLmVsZW1lbnQgPSB0aGlzLm9wdGlvbnMuY3R4O1xuXHRcdFtcblxuXHRcdFx0Ly8gUmVtb3ZlIGNvbnRyb2xzIGJlY2F1c2Ugd2UgZG9udCBub3Qgc3VwcG9ydCBuYXRpdmUgY29udHJvbHMgeWV0XG5cdFx0XHQnY29udHJvbHMnLFxuXHRcdFx0J3Bvc3RlcicsXG5cblx0XHRcdC8vIEl0IGlzIHVubmVjZXNzYXJ5IGF0dHJzLCB0aGlzIGZ1bmN0aW9uYWxpdHkgc29sdmUgQ1NTXG5cdFx0XHQnaGVpZ2h0Jyxcblx0XHRcdCd3aWR0aCdcblxuXHRcdF0uZm9yRWFjaChpdGVtID0+IHtcblx0XHRcdHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyKGl0ZW0pO1xuXHRcdH0pO1xuXG5cdFx0Ly8gU2V0IGF0dHJzIGZyb20gb3B0aW9uc1xuXHRcdFtcblx0XHRcdCdwcmVsb2FkJyxcblx0XHRcdCdhdXRvcGxheScsXG5cdFx0XHQnbG9vcCcsXG5cdFx0XHQnbXV0ZWQnXG5cdFx0XS5mb3JFYWNoKGl0ZW0gPT4ge1xuXHRcdFx0aWYodGhpcy5wbGF5ZXIub3B0aW9uc1tpdGVtXSkge1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQuYXR0cihpdGVtLCB0aGlzLnBsYXllci5vcHRpb25zW2l0ZW1dKTtcblx0XHRcdFx0dGhpcy5lbGVtZW50LnByb3AoaXRlbSwgdGhpcy5wbGF5ZXIub3B0aW9uc1tpdGVtXSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblxuXHRcdHRoaXMuZWxlbWVudC5maW5kKCdzb3VyY2VbZGF0YS1xdWFsaXR5XScpLmVhY2goKGksIGl0ZW0pID0+IHtcblx0XHRcdCQoaXRlbSkucmVtb3ZlKCk7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50O1xuXHR9XG5cblx0Z2V0IGN1cnJlbnRUaW1lICgpIHtcblx0XHRyZXR1cm4gdGhpcy5tZWRpYS5jdXJyZW50VGltZTtcblx0fVxuXG5cdHNldCBjdXJyZW50VGltZSAodmFsdWUpIHtcblx0XHRsZXQgdGltZTtcblx0XHRpZiAodmFsdWUgPiB0aGlzLmR1cmF0aW9uKSB7XG5cdFx0XHR0aW1lID0gdGhpcy5kdXJhdGlvblxuXHRcdH0gZWxzZSBpZiAodmFsdWUgPCAwKSB7XG5cdFx0XHR0aW1lID0gMFxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aW1lID0gdmFsdWU7XG5cdFx0fVxuXG5cdFx0dGhpcy5wbGF5ZXIudHJpZ2dlcigndGltZXVwZGF0ZWxvYWQnLCB7IHRpbWUgfSk7XG5cblx0XHR0aGlzLm1lZGlhLmN1cnJlbnRUaW1lID0gdGltZTtcblx0fVxuXG5cdGdldCBkdXJhdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWVkaWEuZHVyYXRpb247XG5cdH1cblxuXHRnZXQgaGVpZ2h0ICgpIHtcblx0XHRyZXR1cm4gdGhpcy5tZWRpYS5jbGllbnRIZWlnaHQ7XG5cdH1cblxuXHRnZXQgd2lkdGggKCkge1xuXHRcdHJldHVybiB0aGlzLm1lZGlhLmNsaWVudFdpZHRoO1xuXHR9XG5cblx0Z2V0IHJhdGUgKCkge1xuXHRcdHJldHVybiB0aGlzLm1lZGlhLnBsYXliYWNrUmF0ZTtcblx0fVxuXG5cdHNldCBtdXRlZCh2YWx1ZSkge1xuXHRcdHRoaXMubWVkaWEubXV0ZWQgPSB2YWx1ZTtcblx0fVxuXG5cdGdldCBtdXRlZCgpIHtcblx0XHRyZXR1cm4gdGhpcy5tZWRpYS5tdXRlZFxuXHR9XG5cblx0Z2V0IHJhdGVNYXgoKSB7XG5cdFx0bGV0IG1heCA9IHRoaXMucGxheWVyLm9wdGlvbnMucmF0ZS5tYXg7XG5cdFx0aWYoSVNfSU9TIHx8IElTX0FORFJPSUQpIHtcblx0XHRcdG1heCA9IEh0bWw1Lk1PQklMRV9NQVhfUkFURTtcblx0XHR9XG5cdFx0aWYoSVNfU0FGQVJJKSB7XG5cdFx0XHRtYXggPSBIdG1sNS5TQUZBUklfTUFYX1JBVEU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1heDtcblx0fVxuXG5cdGdldCByYXRlTWluKCkge1xuXHRcdGxldCBtaW4gPSB0aGlzLnBsYXllci5vcHRpb25zLnJhdGUubWluO1xuXG5cdFx0aWYgKElTX0lPUyB8fCBJU19BTkRST0lEKSB7XG5cdFx0XHRtaW4gPSBIdG1sNS5NT0JJTEVfTUlOX1JBVEU7XG5cdFx0fVxuXG5cdFx0aWYgKElTX1NBRkFSSSkge1xuXHRcdFx0bWluID0gSHRtbDUuU0FGQVJJX01JTl9SQVRFO1xuXHRcdH1cblxuXHRcdHJldHVybiBtaW47XG5cdH1cblxuXHRzZXQgcmF0ZSAodmFsdWUpIHtcblx0XHRpZiAodmFsdWUgPD0gdGhpcy5yYXRlTWF4ICYmIHZhbHVlID49IHRoaXMucmF0ZU1pbikge1xuXHRcdFx0dGhpcy5tZWRpYS5wbGF5YmFja1JhdGUgPSB2YWx1ZTtcblx0XHRcdENvb2tpZS5zZXQoJ3JhdGUnLCB2YWx1ZSk7XG5cdFx0fVxuXHR9XG5cblx0Z2V0QXZhaWxhYmxlUXVhbGl0eUxldmVscygpIHtcblx0XHRyZXR1cm4gdGhpcy5wbGF5ZXIub3B0aW9ucy5zb3VyY2VzLm1hcChpdGVtID0+ICh7XG5cdFx0XHRuYW1lIDogaXRlbS50aXRsZSxcblx0XHRcdC4uLml0ZW1cblx0XHR9KSk7XG5cdH1cblxuXHRzZXQgcGxheWJhY2tRdWFsaXR5KG5hbWUpIHtcblx0XHRzdXBlci5wbGF5YmFja1F1YWxpdHkgPSBuYW1lO1xuXHRcdGNvbnN0IHRpbWUgPSB0aGlzLmN1cnJlbnRUaW1lO1xuXHRcdGNvbnN0IHJhdGUgPSB0aGlzLnJhdGU7XG5cdFx0Y29uc3Qgc3RvcCA9IHRoaXMucGF1c2VkO1xuXG5cdFx0dGhpcy5fcGxheWJhY2tRdWFsaXR5ID0gdGhpcy5nZXRBdmFpbGFibGVRdWFsaXR5TGV2ZWxzKCkuZmluZChpdGVtID0+IGl0ZW0ubmFtZSA9PT0gbmFtZSk7XG5cblx0XHR0aGlzLnNyYyA9IHRoaXMuX3BsYXliYWNrUXVhbGl0eTtcblx0XHR0aGlzLnBsYXliYWNrUmF0ZSA9IHJhdGU7XG5cdFx0dGhpcy5jdXJyZW50VGltZSA9IHRpbWU7XG5cblx0XHRpZiAoc3RvcCkge1xuXHRcdFx0dGhpcy5wYXVzZSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnBsYXkoKTtcblx0XHR9XG5cblx0XHR0aGlzLnRyaWdnZXIoJ3F1YWxpdHljaGFuZ2UnLCB0aGlzLl9wbGF5YmFja1F1YWxpdHkpO1xuXG5cdH1cblxuXHRnZXQgcGxheWJhY2tRdWFsaXR5KCkge1xuXHRcdHJldHVybiB0aGlzLl9wbGF5YmFja1F1YWxpdHk7XG5cdH1cblxuXHRzZXQgc3JjIChzcmMpIHtcblx0XHRpZihzcmMgPT0gbnVsbCkgcmV0dXJuO1xuXHRcdGlmKHRoaXMuc3JjICYmIHRoaXMuc3JjLnVybCA9PT0gc3JjLnVybCkgcmV0dXJuO1xuXG5cdFx0dGhpcy5tZWRpYS5zcmMgPSBzcmMudXJsO1xuXG5cdFx0dGhpcy5fc291cmNlID0gc3JjO1xuXHR9XG5cblx0Z2V0IHNyYyAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3NvdXJjZVxuXHR9XG5cblx0c2V0IHRyYWNrICh2YWx1ZSkge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5tZWRpYS50ZXh0VHJhY2tzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAodGhpcy5tZWRpYS50ZXh0VHJhY2tzWyBpIF0ubGFuZ3VhZ2UgPT09IHZhbHVlKVxuXHRcdFx0XHR0aGlzLm1lZGlhLnRleHRUcmFja3NbIGkgXS5tb2RlID0gJ3Nob3dpbmcnO1xuXHRcdFx0ZWxzZVxuXHRcdFx0XHR0aGlzLm1lZGlhLnRleHRUcmFja3NbIGkgXS5tb2RlID0gJ2hpZGRlbic7XG5cdFx0fVxuXHR9XG5cblx0Z2V0IHBhdXNlZCgpIHtcblx0XHRyZXR1cm4gdGhpcy5tZWRpYS5wYXVzZWQ7XG5cdH1cblxuXHRnZXQgdm9sdW1lICgpIHtcblx0XHRyZXR1cm4gdGhpcy5tZWRpYS52b2x1bWU7XG5cdH1cblxuXG5cdGdldCBkZWZhdWx0Vm9sdW1lICgpIHtcblx0XHRyZXR1cm4gQ29va2llLmdldCgndm9sdW1lJykgfHwgdGhpcy5wbGF5ZXIub3B0aW9ucy52b2x1bWUuZGVmYXVsdDtcblx0fVxuXG5cdHNldCB2b2x1bWUgKHZhbHVlKSB7XG5cdFx0Y29uc3QgcGxheWVyID0gdGhpcy5wbGF5ZXI7XG5cdFx0aWYgKHZhbHVlID4gMSkge1xuXHRcdFx0dGhpcy5tZWRpYS52b2x1bWUgPSAxO1xuXHRcdH0gZWxzZSBpZiAodmFsdWUgPCBwbGF5ZXIub3B0aW9ucy52b2x1bWUubXV0ZWxpbWl0KSB7XG5cdFx0XHR0aGlzLm1lZGlhLnZvbHVtZSA9IDA7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMubWVkaWEudm9sdW1lID0gdmFsdWU7XG5cdFx0XHRDb29raWUuc2V0KCd2b2x1bWUnLCB2YWx1ZSk7XG5cdFx0fVxuXHRcdHRoaXMubWVkaWEubXV0ZSA9ICh2YWx1ZSA8IHBsYXllci5vcHRpb25zLnZvbHVtZS5tdXRlbGltaXQpO1xuXHR9XG5cblxuXHRnZXQgYnVmZmVyZWQgKCkge1xuXHRcdHJldHVybiB0aGlzLm1lZGlhLmJ1ZmZlcmVkO1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm4ge1RpbWVSYW5nZXN9XG5cdCAqL1xuXHRnZXQgc2Vla2FibGUgKCkge1xuXHRcdHJldHVybiB0aGlzLm1lZGlhLnNlZWthYmxlO1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm4ge1RpbWVSYW5nZXN9XG5cdCAqL1xuXHRnZXQgcGxheWVkKCkge1xuXHRcdHJldHVybiB0aGlzLm1lZGlhLnBsYXllZDtcblx0fVxuXG5cdGdldCBwbGF5ZWRQZXJjZW50YWdlKCkge1xuXHRcdGxldCByZXN1bHQgPSAwO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wbGF5ZWQubGVuZ3RoOyBpKyspIHtcblx0XHRcdHJlc3VsdCArPSAodGhpcy5wbGF5ZWQuZW5kKGkpIC0gdGhpcy5wbGF5ZWQuc3RhcnQoaSkpXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlc3VsdCAvIHRoaXMuZHVyYXRpb24gKiAxMDBcblx0fVxuXG5cdGdldCBjdXJyZW50U3JjKCkge1xuXHRcdHJldHVybiB0aGlzLm1lZGlhLmN1cnJlbnRTcmM7XG5cdH1cblxuXHRpbml0ICgpIHtcblx0XHRzdXBlci5pbml0KCk7XG5cdFx0bGV0IGRmZCA9ICQuRGVmZXJyZWQoKTtcblx0XHR0aGlzLl9pbml0U3VidGl0bGVzKCk7XG5cdFx0dGhpcy5faW5pdFZpZGVvKClcblx0XHRcdC5kb25lKCgpID0+IHtcblx0XHRcdFx0dGhpcy5faW5pdFJhdGUoKTtcblx0XHRcdFx0dGhpcy5faW5pdFZvbHVtZSgpO1xuXHRcdFx0XHRkZmQucmVzb2x2ZSgpO1xuXHRcdFx0fSk7XG5cdFx0cmV0dXJuIGRmZC5wcm9taXNlKCk7XG5cdH1cblxuXHRzdXBwb3J0c0Z1bGxTY3JlZW4oKSB7XG5cdFx0aWYgKHR5cGVvZiB0aGlzLm1lZGlhLndlYmtpdEVudGVyRnVsbFNjcmVlbiA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0Y29uc3QgdXNlckFnZW50ID0gd2luZG93Lm5hdmlnYXRvciAmJiB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCB8fCAnJztcblxuXHRcdFx0Ly8gU2VlbXMgdG8gYmUgYnJva2VuIGluIENocm9taXVtL0Nocm9tZSAmJiBTYWZhcmkgaW4gTGVvcGFyZFxuXHRcdFx0aWYgKCgvQW5kcm9pZC8pLnRlc3QodXNlckFnZW50KSB8fCAhKC9DaHJvbWV8TWFjIE9TIFggMTAuNS8pLnRlc3QodXNlckFnZW50KSkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0ZW50ZXJGdWxsc2NyZWVuKCkge1xuXHRcdGNvbnN0IHZpZGVvID0gdGhpcy5tZWRpYTtcblx0XHRpZiAodmlkZW8ucGF1c2VkICYmIHZpZGVvLm5ldHdvcmtTdGF0ZSA8PSB2aWRlby5IQVZFX01FVEFEQVRBKSB7XG5cdFx0XHQvLyBhdHRlbXB0IHRvIHByaW1lIHRoZSB2aWRlbyBlbGVtZW50IGZvciBwcm9ncmFtbWF0aWMgYWNjZXNzXG5cdFx0XHQvLyB0aGlzIGlzbid0IG5lY2Vzc2FyeSBvbiB0aGUgZGVza3RvcCBidXQgc2hvdWxkbid0IGh1cnRcblx0XHRcdHRoaXMucGxheSgpO1xuXG5cdFx0XHQvLyBwbGF5aW5nIGFuZCBwYXVzaW5nIHN5bmNocm9ub3VzbHkgZHVyaW5nIHRoZSB0cmFuc2l0aW9uIHRvIGZ1bGxzY3JlZW5cblx0XHRcdC8vIGNhbiBnZXQgaU9TIH42LjEgZGV2aWNlcyBpbnRvIGEgcGxheS9wYXVzZSBsb29wXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0dGhpcy5wYXVzZSgpO1xuXHRcdFx0XHR2aWRlby53ZWJraXRFbnRlckZ1bGxTY3JlZW4oKTtcblx0XHRcdH0sIDApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2aWRlby53ZWJraXRFbnRlckZ1bGxTY3JlZW4oKTtcblx0XHR9XG5cdH1cblxuXHRleGl0RnVsbHNjcmVlbigpIHtcblx0XHR0aGlzLm1lZGlhLndlYmtpdEV4aXRGdWxsU2NyZWVuKCk7XG5cdH1cblxuXHR0b2dnbGVQbGF5ICgpIHtcblx0XHRpZiAoIXRoaXMubWVkaWEucGxheWVkIHx8IHRoaXMubWVkaWEucGF1c2VkKSB7XG5cdFx0XHR0aGlzLnBsYXkoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5wYXVzZSgpO1xuXHRcdH1cblx0fVxuXG5cdHBsYXkgKCkge1xuXHRcdGxldCBkZmQgPSAkLkRlZmVycmVkKCk7XG5cdFx0Y29uc3QgcGxheVByb21pc2UgPSB0aGlzLm1lZGlhLnBsYXkoKTtcblxuXHRcdGlmKHBsYXlQcm9taXNlICE9IG51bGwpIHtcblx0XHRcdHBsYXlQcm9taXNlLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGRmZC5yZXNvbHZlKCk7XG5cdFx0XHR9KVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRkZmQucmVzb2x2ZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gZGZkLnByb21pc2UoKTtcblx0fVxuXG5cdHBhdXNlICgpIHtcblx0XHRsZXQgZGZkID0gJC5EZWZlcnJlZCgpO1xuXHRcdGNvbnN0IHBhdXNlUHJvbWlzZSA9IHRoaXMubWVkaWEucGF1c2UoKTtcblxuXHRcdGlmKHBhdXNlUHJvbWlzZSAhPSBudWxsKSB7XG5cdFx0XHRwYXVzZVByb21pc2UudGhlbihmdW5jdGlvbigpIHtcblx0XHRcdFx0ZGZkLnJlc29sdmUoKTtcblx0XHRcdH0pXG5cdFx0fSBlbHNlIHtcblx0XHRcdGRmZC5yZXNvbHZlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBkZmQucHJvbWlzZSgpO1xuXHR9XG5cblx0bG9hZCgpIHtcblx0XHRyZXR1cm4gdGhpcy5tZWRpYS5sb2FkKClcblx0fVxuXG5cdF9pbml0UmF0ZSAoKSB7XG5cdFx0dGhpcy5yYXRlID0gdGhpcy5kZWZhdWx0UmF0ZTtcblx0fVxuXG5cdF9pbml0Vm9sdW1lICgpIHtcblx0XHR0aGlzLnZvbHVtZSA9IHRoaXMuZGVmYXVsdFZvbHVtZTtcblx0fVxuXG5cdF9pbml0U3VidGl0bGVzICgpIHtcblx0XHRsZXQgX3NlbGYgPSB0aGlzO1xuXHRcdHRoaXMuZWxlbWVudC5jaGlsZHJlbigndHJhY2tba2luZD1cInN1YnRpdGxlc1wiXScpLmVhY2goZnVuY3Rpb24gKCkge1xuXHRcdFx0bGV0IGxhbmd1YWdlID0gJCh0aGlzKS5hdHRyKCdzcmNsYW5nJyk7XG5cdFx0XHRsZXQgdGl0bGUgPSAkKHRoaXMpLmF0dHIoJ2xhYmVsJyk7XG5cdFx0XHRsZXQgc3JjID0gJCh0aGlzKS5hdHRyKCdzcmMnKTtcblx0XHRcdGlmICh0aXRsZS5sZW5ndGggPiAwICYmIHNyYy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdF9zZWxmLnN1YnRpdGxlcy5wdXNoKHtcblx0XHRcdFx0XHR0aXRsZSA6IHRpdGxlLFxuXHRcdFx0XHRcdHNyYyA6IHNyYyxcblx0XHRcdFx0XHRsYW5ndWFnZSA6IGxhbmd1YWdlXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0X2luaXRWaWRlbyAoKSB7XG5cdFx0bGV0IGRmZCA9ICQuRGVmZXJyZWQoKTtcblx0XHRpZiAodGhpcy5tZWRpYS5yZWFkeVN0YXRlID4gSFRNTE1lZGlhRWxlbWVudC5IQVZFX05PVEhJTkcpIHtcblx0XHRcdGRmZC5yZXNvbHZlKClcblx0XHRcdHRoaXMuX3RleHRUcmFja3NIYWNrKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCQodGhpcy5tZWRpYSkub25lKCdsb2FkZWRtZXRhZGF0YScsIChlKSA9PiB7XG5cdFx0XHRcdGRmZC5yZXNvbHZlKClcblx0XHRcdFx0dGhpcy5fdGV4dFRyYWNrc0hhY2soKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRkZmQubm90aWZ5KCk7XG5cdFx0cmV0dXJuIGRmZC5wcm9taXNlKCk7XG5cdH1cblxuXHRfdGV4dFRyYWNrc0hhY2sgKCkge1xuXG5cdFx0Ly8gVGhpcyBpcyBnZW5lcmFsbHkgZm9yIEZpcmVmb3ggb25seVxuXHRcdC8vIGJlY2F1c2UgaXQgc29tZWhvdyByZXNldHMgdHJhY2sgbGlzdFxuXHRcdC8vIGZvciB2aWRlbyBlbGVtZW50IGFmdGVyIERPTSBtYW5pcHVsYXRpb24uXG5cblx0XHRpZiAodGhpcy5tZWRpYS50ZXh0VHJhY2tzLmxlbmd0aCA9PT0gMCAmJiB0aGlzLnN1YnRpdGxlcy5sZW5ndGggPiAwKSB7XG5cdFx0XHR0aGlzLmVsZW1lbnQuY2hpbGRyZW4oJ3RyYWNrW2tpbmQ9XCJzdWJ0aXRsZXNcIl0nKS5yZW1vdmUoKTtcblx0XHRcdGZvciAodmFyIGkgaW4gdGhpcy5zdWJ0aXRsZXMpIHtcblx0XHRcdFx0aWYgKHRoaXMuc3VidGl0bGVzLmhhc093blByb3BlcnR5KGkpKSB7XG5cdFx0XHRcdFx0dGhpcy5lbGVtZW50XG5cdFx0XHRcdFx0XHQuYXBwZW5kKCQoJzx0cmFjay8+Jylcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ2xhYmVsJywgdGhpcy5zdWJ0aXRsZXNbIGkgXS50aXRsZSlcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ3NyYycsIHRoaXMuc3VidGl0bGVzWyBpIF0uc3JjKVxuXHRcdFx0XHRcdFx0XHQuYXR0cignc3JjbGFuZycsIHRoaXMuc3VidGl0bGVzWyBpIF0ubGFuZ3VhZ2UpXG5cdFx0XHRcdFx0XHRcdC5hdHRyKCdpZCcsIHRoaXMuc3VidGl0bGVzWyBpIF0ubGFuZ3VhZ2UpXG5cdFx0XHRcdFx0XHRcdC5hdHRyKCdraW5kJywgJ3N1YnRpdGxlcycpKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG59XG5cblxuLyoqXG4gKiBNaW4gcmF0ZSBmb3IgYW5kcm9pZCBhbmQgaW9zXG4gKi9cbkh0bWw1Lk1PQklMRV9NSU5fUkFURSA9IDAuNTtcblxuLyoqXG4gKiBNYXggcmF0ZSBmb3IgYW5kcm9pZCBhbmQgaW9zXG4gKi9cbkh0bWw1Lk1PQklMRV9NQVhfUkFURSA9IDJcblxuXG5IdG1sNS5TQUZBUklfTUlOX1JBVEUgPSAwLjU7XG5cbkh0bWw1LlNBRkFSSV9NQVhfUkFURSA9IDI7XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnSHRtbDUnLCBIdG1sNSk7XG5leHBvcnQgZGVmYXVsdCBIdG1sNTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9lbnRpdHkvSHRtbDUuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudHMvQ29tcG9uZW50JztcbmltcG9ydCBDb29raWUgZnJvbSAnLi4vdXRpbHMvY29va2llJztcbmltcG9ydCBNZWRpYUVycm9yIGZyb20gJy4uL01lZGlhRXJyb3InO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuY2xhc3MgRW50aXR5IGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblx0XHR0aGlzLnN1YnRpdGxlcyA9IFtdO1xuXHRcdHRoaXMuX3RyaWdnZXJTdGFjayA9IFtdO1xuXHRcdHRoaXMuX3N0b3BMaXN0ZW4gPSBmYWxzZTtcblxuXHRcdGlmICh0aGlzLnBsYXllci5vcHRpb25zLnNyYyA9PSBudWxsKSB7XG5cdFx0XHR0aGlzLnBsYXllci5lcnJvciA9IG5ldyBNZWRpYUVycm9yKCfQktC40LTQtdC+0YTQsNC50Lsg0L3QtSDQvdCw0LnQtNC10L0uJyk7XG5cdFx0fVxuXG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHR0cmlnZ2VyKC4uLmFyZ3MpIHtcblx0XHRpZighdGhpcy5fc3RvcExpc3Rlbikge1xuXHRcdFx0dGhpcy5fdHJpZ2dlclN0YWNrLnB1c2goYXJncyk7XG5cdFx0fVxuXHRcdHN1cGVyLnRyaWdnZXIoLi4uYXJncyk7XG5cdH1cblxuXHRpbml0KCkge1xuXHRcdHRoaXMuX3N0b3BMaXN0ZW4gPSB0cnVlO1xuXHRcdHRoaXMuX3RyaWdnZXJTdGFjay5mb3JFYWNoKGFyZ3MgPT4ge1xuXHRcdFx0dGhpcy50cmlnZ2VyKC4uLmFyZ3MpO1xuXHRcdH0pO1xuXHR9XG5cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50ID0gJCgnPGRpdiAvPicpO1xuXHR9XG5cblx0c2V0IHBvc3Rlcih1cmwpIHtcblx0XHR0aGlzLl9wb3N0ZXIgPSB1cmw7XG5cdFx0dGhpcy50cmlnZ2VyKCdwb3N0ZXJjaGFuZ2UnLCB7IHVybCB9KTtcblx0fVxuXG5cblx0Z2V0IHBvc3RlcigpIHtcblx0XHRyZXR1cm4gdGhpcy5fcG9zdGVyO1xuXHR9XG5cblx0Z2V0IGN1cnJlbnRUaW1lKCkge1xuXHRcdHJldHVyblxuXHR9XG5cblx0c2V0IGN1cnJlbnRUaW1lKHZhbHVlKSB7XG5cblx0fVxuXG5cdGdldCBkdXJhdGlvbigpIHtcblx0XHRyZXR1cm5cblx0fVxuXG5cdHNldCBtdXRlZCh2YWx1ZSkge1xuXG5cdH1cblxuXHRnZXQgbXV0ZWQoKSB7XG5cblx0fVxuXG5cdGdldCBoZWlnaHQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudC5pbm5lckhlaWdodCgpXG5cdH1cblxuXHRnZXQgd2lkdGgoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudC53aWR0aCgpXG5cdH1cblxuXHRzZXQgcmF0ZU1heCh2YWx1ZSkge1xuXHRcdHRoaXMuX3JhdGVNYXggPSB2YWx1ZTtcblx0fVxuXG5cdHNldCByYXRlTWluKHZhbHVlKSB7XG5cdFx0dGhpcy5fcmF0ZU1pbiA9IHZhbHVlO1xuXHR9XG5cblx0Z2V0IHJhdGVNYXgoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3JhdGVNYXggfHwgdGhpcy5wbGF5ZXIub3B0aW9ucy5yYXRlLm1heDtcblxuXHR9XG5cblx0Z2V0IHJhdGVNaW4oKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3JhdGVNaW4gfHwgdGhpcy5wbGF5ZXIub3B0aW9ucy5yYXRlLm1pbjtcblx0fVxuXG5cdGdldCByYXRlKCkge1xuXHR9XG5cblx0c2V0IHJhdGUodmFsdWUpIHtcblx0XHRpZih2YWx1ZSA+IHRoaXMucmF0ZU1heCB8fCB2YWx1ZSA8IHRoaXMucmF0ZU1pbikgcmV0dXJuO1xuXHR9XG5cblx0aW5jcmVhc2VSYXRlKCkge1xuXHRcdHRoaXMucmF0ZSArPSB0aGlzLnBsYXllci5vcHRpb25zLnJhdGUuc3RlcDtcblx0fVxuXG5cdGRlY3JlYXNlUmF0ZSgpIHtcblx0XHR0aGlzLnJhdGUgLT0gdGhpcy5wbGF5ZXIub3B0aW9ucy5yYXRlLnN0ZXA7XG5cdH1cblxuXHRzZXQgcGxheWJhY2tRdWFsaXR5KG5hbWUpIHtcblx0XHRjb25zdCBsZXZlbHMgPSB0aGlzLmdldEF2YWlsYWJsZVF1YWxpdHlMZXZlbHMoKTtcblx0XHRpZighbGV2ZWxzLnNvbWUob2JqID0+IG5hbWUgaW4gb2JqKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0fVxuXG5cdGdldCBwbGF5YmFja1F1YWxpdHkoKSB7XG5cblx0fVxuXG5cdGdldCBwYXVzZWQoKSB7XG5cblx0fVxuXG5cdGdldCBwbGF5ZWQoKSB7XG5cblx0fVxuXG5cdGdldCBkZWZhdWx0UmF0ZSgpIHtcblx0XHRyZXR1cm4gQ29va2llLmdldCgncmF0ZScpIHx8IHRoaXMucGxheWVyLm9wdGlvbnMucmF0ZS5kZWZhdWx0XG5cdH1cblxuXHRzZXQgc3JjICh2YWx1ZSkge1xuXG5cdH1cblxuXHRnZXQgc3JjKCkge1xuXG5cdH1cblxuXHRzdXBwb3J0c0Z1bGxTY3JlZW4oKSB7XG5cblx0fVxuXG5cdHBsYXkoKSB7XG5cblx0fVxuXG5cdHBhdXNlICgpIHtcblxuXHR9XG5cblx0bG9hZCgpIHtcblx0fVxuXG5cdHRvZ2dsZVBsYXkgKCkge1xuXHRcdGlmICh0aGlzLnBhdXNlZCkge1xuXHRcdFx0dGhpcy5wbGF5KCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucGF1c2UoKTtcblx0XHR9XG5cdH1cblxufVxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdFbnRpdHknLCBFbnRpdHkpO1xuZXhwb3J0IGRlZmF1bHQgRW50aXR5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2VudGl0eS9FbnRpdHkuanMiLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IEVudGl0eSBmcm9tICcuL0VudGl0eSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudHMvQ29tcG9uZW50JztcblxuXG5mdW5jdGlvbiBsb2FkU2NyaXB0KHVybCkge1xuXHRyZXR1cm4gJC5nZXRTY3JpcHQodXJsKTtcbn1cblxuLyogZ2xvYmFsIFlUICovXG5jb25zdCBhcGlMb2FkZWQgPSBsb2FkU2NyaXB0KCdodHRwczovL3d3dy55b3V0dWJlLmNvbS9pZnJhbWVfYXBpJyk7XG5cbmNsYXNzIFlvdXR1YmUgZXh0ZW5kcyBFbnRpdHkge1xuXHRjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXHRcdHRoaXMuX3BhdXNlZCA9IHRydWU7XG5cblx0XHR0aGlzLnNyYyA9IHRoaXMucGxheWVyLm9wdGlvbnMuc3JjO1xuXG5cdFx0dGhpcy5wbGF5ZXIuYWRkQ2xhc3MoJ2xlcGxheWVyLS15b3V0dWJlJyk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdjbGljaycsIHRoaXMub25DbGljay5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ2RibGNsaWNrJywgdGhpcy5vbkRibGNsaWNrLmJpbmQodGhpcykpO1xuXHR9XG5cblx0c2V0IHNyYyhzcmMpIHtcblx0XHRpZihzcmMgPT0gbnVsbCkgcmV0dXJuO1xuXHRcdGlmKHRoaXMuc3JjICYmIHRoaXMuc3JjLnVybCA9PT0gc3JjLnVybCkgcmV0dXJuO1xuXG5cdFx0Y29uc3QgdXJsID0gc3JjLnVybCB8fCBzcmMuaWQ7XG5cblx0XHR0aGlzLnZpZGVvSWQgPSBZb3V0dWJlLnBhcnNlVXJsKHVybCk7XG5cblx0XHRpZih0aGlzLnBsYXllci5vcHRpb25zLnBvc3Rlcikge1xuXHRcdFx0dGhpcy5wb3N0ZXIgPSB0aGlzLnBsYXllci5vcHRpb25zLnBvc3RlclxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnBvc3RlciA9ICdodHRwczovL2ltZy55b3V0dWJlLmNvbS92aS8nICsgdGhpcy52aWRlb0lkICsgJy8wLmpwZyc7XG5cdFx0fVxuXHR9XG5cblx0b25DbGljayhldmVudCkge1xuXHRcdHRoaXMudHJpZ2dlcignY2xpY2snKTtcblx0fVxuXG5cdG9uRGJsY2xpY2soKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCdkYmxjbGljaycpO1xuXHR9XG5cblx0Z2V0IGN1cnJlbnRUaW1lKCkge1xuXHRcdHJldHVybiB0aGlzLnl0UGxheWVyPyB0aGlzLnl0UGxheWVyLmdldEN1cnJlbnRUaW1lKCkgOiAwO1xuXHR9XG5cblx0c2V0IGN1cnJlbnRUaW1lKHZhbHVlKSB7XG5cdFx0aWYodGhpcy5sYXN0U3RhdGUgPT09IFlULlBsYXllclN0YXRlLlBBVVNFRCkge1xuXHRcdFx0dGhpcy50aW1lQmVmb3JlU2VlayA9IHRoaXMuY3VycmVudFRpbWU7XG5cdFx0fVxuXG5cdFx0aWYgKCF0aGlzLmlzU2Vla2luZykge1xuXHRcdFx0dGhpcy53YXNQYXVzZWRCZWZvcmVTZWVrID0gdGhpcy5wYXVzZWQ7XG5cdFx0fVxuXG5cdFx0dGhpcy5pc1NlZWtpbmcgPSB0cnVlO1xuXHRcdHRoaXMueXRQbGF5ZXIuc2Vla1RvKHZhbHVlLCB0cnVlKTtcblx0XHR0aGlzLnRyaWdnZXIoJ3RpbWV1cGRhdGUnKTtcblx0XHR0aGlzLnRyaWdnZXIoJ3NlZWtpbmcnKTtcblxuXHRcdHRoaXMuZW1pdFRpbWV1cGRhdGUoKTtcblx0fVxuXG5cdGdldCBkdXJhdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy55dFBsYXllciAmJiB0aGlzLnl0UGxheWVyLmdldER1cmF0aW9uID8gdGhpcy55dFBsYXllci5nZXREdXJhdGlvbigpIDogTmFOO1xuXHR9XG5cblx0Z2V0IHBhdXNlZCgpIHtcblx0XHRyZXR1cm4gKHRoaXMueXRQbGF5ZXIpID9cblx0XHRcdCh0aGlzLmxhc3RTdGF0ZSAhPT0gWVQuUGxheWVyU3RhdGUuUExBWUlORyAmJiB0aGlzLmxhc3RTdGF0ZSAhPT0gWVQuUGxheWVyU3RhdGUuQlVGRkVSSU5HKVxuXHRcdFx0OiB0cnVlO1xuXG5cdH1cblxuXG5cdGdldCByYXRlKCkge1xuXHRcdHJldHVybiB0aGlzLnl0UGxheWVyLmdldFBsYXliYWNrUmF0ZSgpO1xuXHR9XG5cblx0c2V0IHJhdGUodmFsdWUpIHtcblx0XHRzdXBlci5yYXRlID0gdmFsdWU7XG5cdFx0dGhpcy55dFBsYXllci5zZXRQbGF5YmFja1JhdGUodmFsdWUpO1xuXHRcdHRoaXMudHJpZ2dlcigncmF0ZWNoYW5nZScpO1xuXHR9XG5cblx0c2V0IG11dGVkKHZhbHVlKSB7XG5cdFx0aWYodmFsdWUpIHtcblx0XHRcdHRoaXMueXRQbGF5ZXIubXV0ZSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnl0UGxheWVyLnVuTXV0ZSgpO1xuXHRcdH1cblxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0dGhpcy50cmlnZ2VyKCd2b2x1bWVjaGFuZ2UnKTtcblx0XHR9LCA1MCk7XG5cdH1cblxuXHRnZXQgbXV0ZWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMueXRQbGF5ZXIuaXNNdXRlZCgpO1xuXHR9XG5cblx0Z2V0IGRlZmF1bHRWb2x1bWUoKSB7XG5cdFx0cmV0dXJuIHRoaXMudm9sdW1lIHx8IHRoaXMucGxheWVyLm9wdGlvbnMudm9sdW1lLmRlZmF1bHQ7XG5cdH1cblxuXHRpbmNyZWFzZVJhdGUoKSB7XG5cdFx0Y29uc3QgaW5kZXggPSB0aGlzLmF2YWlsYWJsZVJhdGVzLmluZGV4T2YodGhpcy5yYXRlKTtcblx0XHRpZihpbmRleCArIDEgPj0gdGhpcy5hdmFpbGFibGVSYXRlcy5sZW5ndGgpIHJldHVybjtcblx0XHRyZXR1cm4gdGhpcy5yYXRlID0gdGhpcy5hdmFpbGFibGVSYXRlc1tpbmRleCArIDFdO1xuXHR9XG5cblx0ZGVjcmVhc2VSYXRlKCkge1xuXHRcdGNvbnN0IGluZGV4ID0gdGhpcy5hdmFpbGFibGVSYXRlcy5pbmRleE9mKHRoaXMucmF0ZSk7XG5cdFx0aWYoaW5kZXggLSAxIDwgMCkgcmV0dXJuO1xuXHRcdHJldHVybiB0aGlzLnJhdGUgPSB0aGlzLmF2YWlsYWJsZVJhdGVzW2luZGV4IC0gMV07XG5cdH1cblxuXHRnZXRBdmFpbGFibGVRdWFsaXR5TGV2ZWxzKCkge1xuXHRcdGNvbnN0IGFyciA9IHRoaXMueXRQbGF5ZXIuZ2V0QXZhaWxhYmxlUXVhbGl0eUxldmVscygpO1xuXHRcdGNvbnN0IGluZGV4ID0gYXJyLmluZGV4T2YoJ2F1dG8nKTtcblxuXHRcdGlmKGluZGV4ID4gLTEpIHtcblx0XHRcdGFyci5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdH1cblxuXHRcdHJldHVybiBhcnIubWFwKGl0ZW0gPT4gKHtcblx0XHRcdHRpdGxlIDogWW91dHViZS5RVUFMSVRZX05BTUVTW2l0ZW1dIHx8IGl0ZW0sXG5cdFx0XHRuYW1lIDogaXRlbVxuXHRcdH0pKTtcblx0fVxuXG5cdHNldCBwbGF5YmFja1F1YWxpdHkobmFtZSkge1xuXHRcdHN1cGVyLnBsYXliYWNrUXVhbGl0eSA9IG5hbWU7XG5cdFx0Y29uc3QgdGltZSA9IHRoaXMuY3VycmVudFRpbWU7XG5cdFx0Y29uc3Qgc3RhdHVzID0gdGhpcy55dFBsYXllci5nZXRQbGF5ZXJTdGF0ZSgpO1xuXG5cdFx0aWYoc3RhdHVzICE9PSBZVC5QbGF5ZXJTdGF0ZS5VTlNUQVJURUQgJiYgc3RhdHVzICE9PSBZVC5QbGF5ZXJTdGF0ZS5DVUVEKSB7XG5cdFx0XHR0aGlzLnl0UGxheWVyLnBhdXNlVmlkZW8oKTtcblx0XHR9XG5cblx0XHR0aGlzLl9uZXh0UGxheWJhY2tRdWFsaXR5ID0gbmFtZTtcblx0XHR0aGlzLnl0UGxheWVyLnNldFBsYXliYWNrUXVhbGl0eShuYW1lKTtcblx0XHR0aGlzLnl0UGxheWVyLnNlZWtUbyh0aW1lKTtcblxuXHRcdGlmKHN0YXR1cyAhPT0gWVQuUGxheWVyU3RhdGUuUEFVU0VEKSB7XG5cdFx0XHR0aGlzLnl0UGxheWVyLnBsYXlWaWRlbygpO1xuXHRcdH1cblxuXHR9XG5cblx0Z2V0IHBsYXliYWNrUXVhbGl0eSgpIHtcblx0XHRpZiAodGhpcy5fcGxheWJhY2tRdWFsaXR5ID09IG51bGwpIHtcblx0XHRcdHRoaXMuX3BsYXliYWNrUXVhbGl0eSA9IHRoaXMuZ2V0QXZhaWxhYmxlUXVhbGl0eUxldmVscygpXG5cdFx0XHRcdC5maW5kKGl0ZW0gPT4gaXRlbS5uYW1lID09PSB0aGlzLnl0UGxheWVyLmdldFBsYXliYWNrUXVhbGl0eSgpKVxuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5fcGxheWJhY2tRdWFsaXR5O1xuXHR9XG5cblx0Z2V0IHZvbHVtZSgpIHtcblx0XHRyZXR1cm4gdGhpcy55dFBsYXllciA/IHRoaXMueXRQbGF5ZXIuZ2V0Vm9sdW1lKCkgLyAxMDAuMCA6IDE7XG5cdH1cblxuXHRzZXQgdm9sdW1lKHZhbHVlKSB7XG5cdFx0dGhpcy55dFBsYXllci5zZXRWb2x1bWUodmFsdWUgKiAxMDApO1xuXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHR0aGlzLnRyaWdnZXIoJ3ZvbHVtZWNoYW5nZScpO1xuXHRcdH0sIDUwKVxuXG5cdH1cblxuXHRzdXBwb3J0c0Z1bGxTY3JlZW4oKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRwbGF5KCkge1xuXHRcdHRoaXMueXRQbGF5ZXIucGxheVZpZGVvKCk7XG5cdFx0dGhpcy50cmlnZ2VyKCdwbGF5Jyk7XG5cdH1cblxuXHRwYXVzZSgpIHtcblx0XHR0aGlzLnl0UGxheWVyLnBhdXNlVmlkZW8oKTtcblx0XHR0aGlzLnRyaWdnZXIoJ3BhdXNlJyk7XG5cdH1cblxuXG5cdGluaXQoKSB7XG5cdFx0c3VwZXIuaW5pdCgpO1xuXHRcdHJldHVybiBhcGlMb2FkZWRcblx0XHRcdC50aGVuKCgpID0+IHRoaXMuaW5pdFlUUGxheWVyKCkpXG5cdH1cblxuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdHRoaXMuZWxlbWVudCA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0LmFkZENsYXNzKCdsZXBsYXllcl9feW91dHViZS13cmFwcGVyJylcblx0XHRcdC5hdHRyKCd0YWJpbmRleCcsICcwJyk7XG5cdFx0dGhpcy55b3V0dWJlRWxlbWVudCA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0LmFkZENsYXNzKCdsZXBsYXllcl9feW91dHViZScpO1xuXHRcdHRoaXMuYmxvY2tlciA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0LmFkZENsYXNzKCdsZXBsYXllcl9feW91dHViZS1ibG9ja2VyJyk7XG5cblxuXHRcdHJldHVybiB0aGlzLmVsZW1lbnRcblx0XHRcdC5hcHBlbmQodGhpcy5ibG9ja2VyKVxuXHRcdFx0LmFwcGVuZCh0aGlzLnlvdXR1YmVFbGVtZW50KTtcblx0fVxuXG5cdGluaXRZVFBsYXllcigpIHtcblx0XHR0aGlzLl9pbml0UHJvbWlzZSA9ICQuRGVmZXJyZWQoKTtcblx0XHRjb25zdCBnbG9iYWxPcHRpb25zID0gdGhpcy5wbGF5ZXIub3B0aW9ucztcblx0XHRsZXQgeXRPcHRpb25zID0ge1xuXHRcdFx0YXV0b3BsYXkgOiBnbG9iYWxPcHRpb25zLmF1dG9wbGF5ID8gMSA6IDAsXG5cdFx0XHRsb29wIDogZ2xvYmFsT3B0aW9ucy5sb29wID8gMSA6IDAsXG5cdFx0XHRpdl9sb2FkX3BvbGljeSA6IDMsXG5cdFx0XHRjb250cm9scyA6IDAsXG5cdFx0XHRtb2Rlc3RicmFuZGluZyA6IDEsXG5cdFx0XHRyZWwgOiAwLFxuXHRcdFx0c2hvd2luZm8gOiAwLFxuXHRcdFx0Y2NfbG9hZF9wb2xpY3kgOiAxLFxuXHRcdFx0ZGlzYWJsZWtiIDogMCxcblx0XHRcdGZzIDogMCxcblx0XHRcdHN0YXJ0IDogZ2xvYmFsT3B0aW9ucy50aW1lXG5cdFx0fTtcblxuXHRcdFlULnJlYWR5KCgpID0+IHtcblx0XHRcdHRoaXMub3B0aW9ucy5jdHgucmVwbGFjZVdpdGgodGhpcy5lbGVtZW50KTtcblxuXHRcdFx0dGhpcy55dFBsYXllciA9IG5ldyBZVC5QbGF5ZXIodGhpcy55b3V0dWJlRWxlbWVudFswXSwge1xuXHRcdFx0XHR2aWRlb0lkIDogdGhpcy52aWRlb0lkLFxuXHRcdFx0XHR3aWR0aCA6IGdsb2JhbE9wdGlvbnMud2lkdGggfHwgJzEwMCUnLFxuXHRcdFx0XHRwbGF5ZXJWYXJzIDogeXRPcHRpb25zLFxuXHRcdFx0XHRldmVudHMgOiB7XG5cdFx0XHRcdFx0b25SZWFkeSA6IHRoaXMub25ZVFBSZWFkeS5iaW5kKHRoaXMpLFxuXHRcdFx0XHRcdG9uU3RhdGVDaGFuZ2UgOiB0aGlzLm9uWVRQU3RhdGVDaGFuZ2UuYmluZCh0aGlzKSxcblx0XHRcdFx0XHRvblBsYXliYWNrUmF0ZUNoYW5nZSA6IHRoaXMub25ZVFBSYXRlQ2hhbmdlLmJpbmQodGhpcyksXG5cdFx0XHRcdFx0b25QbGF5YmFja1F1YWxpdHlDaGFuZ2UgOiB0aGlzLm9uWVRQUGxheWJhY2tRdWFsaXR5Q2hhbmdlLmJpbmQodGhpcylcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHR9KVxuXHRcdHJldHVybiB0aGlzLl9pbml0UHJvbWlzZS5wcm9taXNlKCk7XG5cdH1cblxuXG5cdHNldEF2YWlsYWJsZVBsYXliYWNrUmF0ZXMoKSB7XG5cdFx0dGhpcy5hdmFpbGFibGVSYXRlcyA9IHRoaXMueXRQbGF5ZXIuZ2V0QXZhaWxhYmxlUGxheWJhY2tSYXRlcygpO1xuXHRcdHRoaXMucmF0ZU1pbiA9IHRoaXMuYXZhaWxhYmxlUmF0ZXNbMF07XG5cdFx0dGhpcy5yYXRlTWF4ID0gdGhpcy5hdmFpbGFibGVSYXRlc1t0aGlzLmF2YWlsYWJsZVJhdGVzLmxlbmd0aCAtIDFdO1xuXHR9XG5cblx0b25ZVFBSZWFkeShlKSB7XG5cdFx0dGhpcy5faW5pdFByb21pc2UucmVzb2x2ZSgpO1xuXHRcdHRoaXMuc2V0QXZhaWxhYmxlUGxheWJhY2tSYXRlcygpO1xuXHR9XG5cblx0b25ZVFBSYXRlQ2hhbmdlKGUpIHtcblx0XHR0aGlzLnRyaWdnZXIoJ3JhdGVjaGFuZ2UnKTtcblx0fVxuXG5cdG9uWVRQUGxheWJhY2tRdWFsaXR5Q2hhbmdlKGUpIHtcblx0XHRjb25zdCBkYXRhID0gZS5kYXRhO1xuXHRcdHRoaXMuX3BsYXliYWNrUXVhbGl0eSA9IHRoaXMuZ2V0QXZhaWxhYmxlUXVhbGl0eUxldmVscygpLmZpbmQoaXRlbSA9PiBpdGVtLm5hbWUgPT09IGRhdGEpO1xuXHRcdHRoaXMudHJpZ2dlcigncXVhbGl0eWNoYW5nZScsIHRoaXMuX3BsYXliYWNrUXVhbGl0eSk7XG5cdH1cblxuXHRvbllUUFN0YXRlQ2hhbmdlKGUpIHtcblx0XHRjb25zdCBzdGF0ZSA9IGUuZGF0YTtcblx0XHRpZihzdGF0ZSA9PT0gdGhpcy5sYXN0U3RhdGUpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLmxhc3RTdGF0ZSA9IHN0YXRlO1xuXHRcdHN3aXRjaChzdGF0ZSkge1xuXHRcdGNhc2UgWVQuUGxheWVyU3RhdGUuVU5TVEFSVEVEOlxuXHRcdFx0dGhpcy50cmlnZ2VyKCdsb2Fkc3RhcnQnKTtcblx0XHRcdHRoaXMudHJpZ2dlcignbG9hZGVkbWV0YWRhdGEnKTtcblx0XHRcdHRoaXMudHJpZ2dlcignZHVyYXRpb25jaGFuZ2UnKTtcblx0XHRcdHRoaXMudHJpZ2dlcigncmF0ZWNoYW5nZScpO1xuXHRcdFx0dGhpcy50cmlnZ2VyKCd2b2x1bWVjaGFuZ2UnKTtcblx0XHRcdGJyZWFrO1xuXG5cdFx0Y2FzZSBZVC5QbGF5ZXJTdGF0ZS5FTkRFRDpcblx0XHRcdHRoaXMudHJpZ2dlcignZW5kZWQnKTtcblx0XHRcdGJyZWFrO1xuXG5cdFx0Y2FzZSBZVC5QbGF5ZXJTdGF0ZS5QTEFZSU5HOlxuXHRcdFx0dGhpcy50cmlnZ2VyKCd0aW1ldXBkYXRlJyk7XG5cdFx0XHR0aGlzLnRyaWdnZXIoJ2R1cmF0aW9uY2hhbmdlJyk7XG5cdFx0XHR0aGlzLnRyaWdnZXIoJ3BsYXlpbmcnKTtcblxuXHRcdFx0dGhpcy55dFBsYXllci5zZXRQbGF5YmFja1F1YWxpdHkodGhpcy5fbmV4dFBsYXliYWNrUXVhbGl0eSk7XG5cblx0XHRcdGlmKHRoaXMuaXNTZWVraW5nKSB7XG5cdFx0XHRcdHRoaXMub25TZWVrZWQoKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5lbWl0VGltZXVwZGF0ZSgpO1xuXHRcdFx0YnJlYWs7XG5cblx0XHRjYXNlIFlULlBsYXllclN0YXRlLlBBVVNFRDpcblx0XHRcdHRoaXMudHJpZ2dlcignY2FucGxheScpO1xuXG5cdFx0XHRpZih0aGlzLmlzU2Vla2luZykge1xuXHRcdFx0XHR0aGlzLm9uU2Vla2VkKCk7XG5cdFx0XHR9XG5cdFx0XHRicmVhaztcblxuXHRcdGNhc2UgWVQuUGxheWVyU3RhdGUuQlVGRkVSSU5HOlxuXHRcdFx0dGhpcy5wbGF5ZXIudHJpZ2dlcigndGltZXVwZGF0ZScpO1xuXHRcdFx0dGhpcy5wbGF5ZXIudHJpZ2dlcignd2FpdGluZycpO1xuXG5cdFx0XHR0aGlzLnl0UGxheWVyLnNldFBsYXliYWNrUXVhbGl0eSh0aGlzLl9uZXh0UGxheWJhY2tRdWFsaXR5KTtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHR9XG5cblx0b25TZWVrZWQoKSB7XG5cdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLnNlZWtpbmdJbnRlcnZhbCk7XG5cdFx0dGhpcy5pc1NlZWtpbmcgPSBmYWxzZTtcblxuXHRcdGlmICh0aGlzLndhc1BhdXNlZEJlZm9yZVNlZWspIHtcblx0XHRcdHRoaXMucGF1c2UoKTtcblx0XHR9XG5cblx0XHR0aGlzLnRyaWdnZXIoJ3NlZWtlZCcpO1xuXHR9XG5cblx0ZW1pdFRpbWV1cGRhdGUoKSB7XG5cdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLnNlZWtpbmdJbnRlcnZhbCk7XG5cblx0XHR0aGlzLnNlZWtpbmdJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcblx0XHRcdGlmKHRoaXMubGFzdFN0YXRlID09PSBZVC5QbGF5ZXJTdGF0ZS5QQVVTRUQpIHtcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLnNlZWtpbmdJbnRlcnZhbCk7XG5cdFx0XHR9IGVsc2UgaWYodGhpcy5jdXJyZW50VGltZSAhPT0gdGhpcy50aW1lQmVmb3JlU2Vlaykge1xuXHRcdFx0XHR0aGlzLnRyaWdnZXIoJ3RpbWV1cGRhdGUnKTtcblx0XHRcdH1cblx0XHR9LCAyNTApXG5cdH1cblx0c3RhdGljIHBhcnNlVXJsKHVybCkge1xuXHRcdGxldCByZXN1bHQgPSBudWxsO1xuXHRcdGNvbnN0IHJlZ2V4ID0gWW91dHViZS5VUkxfUkVHRVg7XG5cdFx0Y29uc3QgbWF0Y2ggPSB1cmwubWF0Y2gocmVnZXgpO1xuXHRcdGlmKHVybC5sZW5ndGggPT09IDExKSB7XG5cdFx0XHRyZXN1bHQgPSB1cmw7XG5cdFx0fSBlbHNlIGlmKG1hdGNoICYmIG1hdGNoWzJdLmxlbmd0aCA9PT0gMTEpIHtcblx0XHRcdHJlc3VsdCA9IG1hdGNoWzJdO1xuXHRcdH1cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG59XG5cbllvdXR1YmUuVVJMX1JFR0VYID0gL14uKih5b3V0dS5iZVxcL3x2XFwvfHVcXC9cXHdcXC98ZW1iZWRcXC98d2F0Y2hcXD92PXxcXCZ2PSkoW14jXFwmXFw/XSopLiovO1xuXG5Zb3V0dWJlLlFVQUxJVFlfTkFNRVMgPSB7XG5cdHRpbnkgOiAnMTQwcCcsXG5cdHNtYWxsIDogJzI0MHAnLFxuXHRtZWRpdW0gOiAnMzYwcCcsXG5cdGxhcmdlIDogJzQ4MHAnLFxuXHRoZDcyMCA6ICc3MjBwJyxcblx0aGQxMDgwIDogJzEwODBwJyxcblx0aGlnaHJlcyA6ICdIRCcsXG5cdGF1dG8gOiAn0JDQstGC0L4nXG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnWW91dHViZScsIFlvdXR1YmUpO1xuZXhwb3J0IGRlZmF1bHQgWW91dHViZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9lbnRpdHkvWW91dHViZS5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGRlZmluZSA9IHJlcXVpcmUoJ2RlZmluZS1wcm9wZXJ0aWVzJyk7XG52YXIgRVMgPSByZXF1aXJlKCdlcy1hYnN0cmFjdC9lczYnKTtcblxudmFyIGltcGxlbWVudGF0aW9uID0gcmVxdWlyZSgnLi9pbXBsZW1lbnRhdGlvbicpO1xudmFyIGdldFBvbHlmaWxsID0gcmVxdWlyZSgnLi9wb2x5ZmlsbCcpO1xudmFyIHNoaW0gPSByZXF1aXJlKCcuL3NoaW0nKTtcblxudmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xuXG52YXIgcG9seWZpbGwgPSBnZXRQb2x5ZmlsbCgpO1xuXG52YXIgYm91bmRGaW5kU2hpbSA9IGZ1bmN0aW9uIGZpbmQoYXJyYXksIHByZWRpY2F0ZSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG5cdEVTLlJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJyYXkpO1xuXHR2YXIgYXJncyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcblx0cmV0dXJuIHBvbHlmaWxsLmFwcGx5KGFycmF5LCBhcmdzKTtcbn07XG5cbmRlZmluZShib3VuZEZpbmRTaGltLCB7XG5cdGdldFBvbHlmaWxsOiBnZXRQb2x5ZmlsbCxcblx0aW1wbGVtZW50YXRpb246IGltcGxlbWVudGF0aW9uLFxuXHRzaGltOiBzaGltXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBib3VuZEZpbmRTaGltO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2FycmF5LnByb3RvdHlwZS5maW5kL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBrZXlzID0gcmVxdWlyZSgnb2JqZWN0LWtleXMnKTtcbnZhciBmb3JlYWNoID0gcmVxdWlyZSgnZm9yZWFjaCcpO1xudmFyIGhhc1N5bWJvbHMgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBTeW1ib2woKSA9PT0gJ3N5bWJvbCc7XG5cbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbnZhciBpc0Z1bmN0aW9uID0gZnVuY3Rpb24gKGZuKSB7XG5cdHJldHVybiB0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicgJiYgdG9TdHIuY2FsbChmbikgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59O1xuXG52YXIgYXJlUHJvcGVydHlEZXNjcmlwdG9yc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICgpIHtcblx0dmFyIG9iaiA9IHt9O1xuXHR0cnkge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosICd4JywgeyBlbnVtZXJhYmxlOiBmYWxzZSwgdmFsdWU6IG9iaiB9KTtcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMsIG5vLXJlc3RyaWN0ZWQtc3ludGF4ICovXG4gICAgICAgIGZvciAodmFyIF8gaW4gb2JqKSB7IHJldHVybiBmYWxzZTsgfVxuICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzLCBuby1yZXN0cmljdGVkLXN5bnRheCAqL1xuXHRcdHJldHVybiBvYmoueCA9PT0gb2JqO1xuXHR9IGNhdGNoIChlKSB7IC8qIHRoaXMgaXMgSUUgOC4gKi9cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn07XG52YXIgc3VwcG9ydHNEZXNjcmlwdG9ycyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBhcmVQcm9wZXJ0eURlc2NyaXB0b3JzU3VwcG9ydGVkKCk7XG5cbnZhciBkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIChvYmplY3QsIG5hbWUsIHZhbHVlLCBwcmVkaWNhdGUpIHtcblx0aWYgKG5hbWUgaW4gb2JqZWN0ICYmICghaXNGdW5jdGlvbihwcmVkaWNhdGUpIHx8ICFwcmVkaWNhdGUoKSkpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0aWYgKHN1cHBvcnRzRGVzY3JpcHRvcnMpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqZWN0LCBuYW1lLCB7XG5cdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG5cdFx0XHRlbnVtZXJhYmxlOiBmYWxzZSxcblx0XHRcdHZhbHVlOiB2YWx1ZSxcblx0XHRcdHdyaXRhYmxlOiB0cnVlXG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0b2JqZWN0W25hbWVdID0gdmFsdWU7XG5cdH1cbn07XG5cbnZhciBkZWZpbmVQcm9wZXJ0aWVzID0gZnVuY3Rpb24gKG9iamVjdCwgbWFwKSB7XG5cdHZhciBwcmVkaWNhdGVzID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgPyBhcmd1bWVudHNbMl0gOiB7fTtcblx0dmFyIHByb3BzID0ga2V5cyhtYXApO1xuXHRpZiAoaGFzU3ltYm9scykge1xuXHRcdHByb3BzID0gcHJvcHMuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMobWFwKSk7XG5cdH1cblx0Zm9yZWFjaChwcm9wcywgZnVuY3Rpb24gKG5hbWUpIHtcblx0XHRkZWZpbmVQcm9wZXJ0eShvYmplY3QsIG5hbWUsIG1hcFtuYW1lXSwgcHJlZGljYXRlc1tuYW1lXSk7XG5cdH0pO1xufTtcblxuZGVmaW5lUHJvcGVydGllcy5zdXBwb3J0c0Rlc2NyaXB0b3JzID0gISFzdXBwb3J0c0Rlc2NyaXB0b3JzO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlZmluZVByb3BlcnRpZXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZGVmaW5lLXByb3BlcnRpZXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuLy8gbW9kaWZpZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZXMtc2hpbXMvZXM1LXNoaW1cbnZhciBoYXMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbnZhciBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcbnZhciBpc0FyZ3MgPSByZXF1aXJlKCcuL2lzQXJndW1lbnRzJyk7XG52YXIgaXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbnZhciBoYXNEb250RW51bUJ1ZyA9ICFpc0VudW1lcmFibGUuY2FsbCh7IHRvU3RyaW5nOiBudWxsIH0sICd0b1N0cmluZycpO1xudmFyIGhhc1Byb3RvRW51bUJ1ZyA9IGlzRW51bWVyYWJsZS5jYWxsKGZ1bmN0aW9uICgpIHt9LCAncHJvdG90eXBlJyk7XG52YXIgZG9udEVudW1zID0gW1xuXHQndG9TdHJpbmcnLFxuXHQndG9Mb2NhbGVTdHJpbmcnLFxuXHQndmFsdWVPZicsXG5cdCdoYXNPd25Qcm9wZXJ0eScsXG5cdCdpc1Byb3RvdHlwZU9mJyxcblx0J3Byb3BlcnR5SXNFbnVtZXJhYmxlJyxcblx0J2NvbnN0cnVjdG9yJ1xuXTtcbnZhciBlcXVhbHNDb25zdHJ1Y3RvclByb3RvdHlwZSA9IGZ1bmN0aW9uIChvKSB7XG5cdHZhciBjdG9yID0gby5jb25zdHJ1Y3Rvcjtcblx0cmV0dXJuIGN0b3IgJiYgY3Rvci5wcm90b3R5cGUgPT09IG87XG59O1xudmFyIGV4Y2x1ZGVkS2V5cyA9IHtcblx0JGNvbnNvbGU6IHRydWUsXG5cdCRleHRlcm5hbDogdHJ1ZSxcblx0JGZyYW1lOiB0cnVlLFxuXHQkZnJhbWVFbGVtZW50OiB0cnVlLFxuXHQkZnJhbWVzOiB0cnVlLFxuXHQkaW5uZXJIZWlnaHQ6IHRydWUsXG5cdCRpbm5lcldpZHRoOiB0cnVlLFxuXHQkb3V0ZXJIZWlnaHQ6IHRydWUsXG5cdCRvdXRlcldpZHRoOiB0cnVlLFxuXHQkcGFnZVhPZmZzZXQ6IHRydWUsXG5cdCRwYWdlWU9mZnNldDogdHJ1ZSxcblx0JHBhcmVudDogdHJ1ZSxcblx0JHNjcm9sbExlZnQ6IHRydWUsXG5cdCRzY3JvbGxUb3A6IHRydWUsXG5cdCRzY3JvbGxYOiB0cnVlLFxuXHQkc2Nyb2xsWTogdHJ1ZSxcblx0JHNlbGY6IHRydWUsXG5cdCR3ZWJraXRJbmRleGVkREI6IHRydWUsXG5cdCR3ZWJraXRTdG9yYWdlSW5mbzogdHJ1ZSxcblx0JHdpbmRvdzogdHJ1ZVxufTtcbnZhciBoYXNBdXRvbWF0aW9uRXF1YWxpdHlCdWcgPSAoZnVuY3Rpb24gKCkge1xuXHQvKiBnbG9iYWwgd2luZG93ICovXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgeyByZXR1cm4gZmFsc2U7IH1cblx0Zm9yICh2YXIgayBpbiB3aW5kb3cpIHtcblx0XHR0cnkge1xuXHRcdFx0aWYgKCFleGNsdWRlZEtleXNbJyQnICsga10gJiYgaGFzLmNhbGwod2luZG93LCBrKSAmJiB3aW5kb3dba10gIT09IG51bGwgJiYgdHlwZW9mIHdpbmRvd1trXSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRlcXVhbHNDb25zdHJ1Y3RvclByb3RvdHlwZSh3aW5kb3dba10pO1xuXHRcdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIGZhbHNlO1xufSgpKTtcbnZhciBlcXVhbHNDb25zdHJ1Y3RvclByb3RvdHlwZUlmTm90QnVnZ3kgPSBmdW5jdGlvbiAobykge1xuXHQvKiBnbG9iYWwgd2luZG93ICovXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCAhaGFzQXV0b21hdGlvbkVxdWFsaXR5QnVnKSB7XG5cdFx0cmV0dXJuIGVxdWFsc0NvbnN0cnVjdG9yUHJvdG90eXBlKG8pO1xuXHR9XG5cdHRyeSB7XG5cdFx0cmV0dXJuIGVxdWFsc0NvbnN0cnVjdG9yUHJvdG90eXBlKG8pO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xuXG52YXIga2V5c1NoaW0gPSBmdW5jdGlvbiBrZXlzKG9iamVjdCkge1xuXHR2YXIgaXNPYmplY3QgPSBvYmplY3QgIT09IG51bGwgJiYgdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCc7XG5cdHZhciBpc0Z1bmN0aW9uID0gdG9TdHIuY2FsbChvYmplY3QpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xuXHR2YXIgaXNBcmd1bWVudHMgPSBpc0FyZ3Mob2JqZWN0KTtcblx0dmFyIGlzU3RyaW5nID0gaXNPYmplY3QgJiYgdG9TdHIuY2FsbChvYmplY3QpID09PSAnW29iamVjdCBTdHJpbmddJztcblx0dmFyIHRoZUtleXMgPSBbXTtcblxuXHRpZiAoIWlzT2JqZWN0ICYmICFpc0Z1bmN0aW9uICYmICFpc0FyZ3VtZW50cykge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5rZXlzIGNhbGxlZCBvbiBhIG5vbi1vYmplY3QnKTtcblx0fVxuXG5cdHZhciBza2lwUHJvdG8gPSBoYXNQcm90b0VudW1CdWcgJiYgaXNGdW5jdGlvbjtcblx0aWYgKGlzU3RyaW5nICYmIG9iamVjdC5sZW5ndGggPiAwICYmICFoYXMuY2FsbChvYmplY3QsIDApKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBvYmplY3QubGVuZ3RoOyArK2kpIHtcblx0XHRcdHRoZUtleXMucHVzaChTdHJpbmcoaSkpO1xuXHRcdH1cblx0fVxuXG5cdGlmIChpc0FyZ3VtZW50cyAmJiBvYmplY3QubGVuZ3RoID4gMCkge1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgb2JqZWN0Lmxlbmd0aDsgKytqKSB7XG5cdFx0XHR0aGVLZXlzLnB1c2goU3RyaW5nKGopKTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0Zm9yICh2YXIgbmFtZSBpbiBvYmplY3QpIHtcblx0XHRcdGlmICghKHNraXBQcm90byAmJiBuYW1lID09PSAncHJvdG90eXBlJykgJiYgaGFzLmNhbGwob2JqZWN0LCBuYW1lKSkge1xuXHRcdFx0XHR0aGVLZXlzLnB1c2goU3RyaW5nKG5hbWUpKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRpZiAoaGFzRG9udEVudW1CdWcpIHtcblx0XHR2YXIgc2tpcENvbnN0cnVjdG9yID0gZXF1YWxzQ29uc3RydWN0b3JQcm90b3R5cGVJZk5vdEJ1Z2d5KG9iamVjdCk7XG5cblx0XHRmb3IgKHZhciBrID0gMDsgayA8IGRvbnRFbnVtcy5sZW5ndGg7ICsraykge1xuXHRcdFx0aWYgKCEoc2tpcENvbnN0cnVjdG9yICYmIGRvbnRFbnVtc1trXSA9PT0gJ2NvbnN0cnVjdG9yJykgJiYgaGFzLmNhbGwob2JqZWN0LCBkb250RW51bXNba10pKSB7XG5cdFx0XHRcdHRoZUtleXMucHVzaChkb250RW51bXNba10pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gdGhlS2V5cztcbn07XG5cbmtleXNTaGltLnNoaW0gPSBmdW5jdGlvbiBzaGltT2JqZWN0S2V5cygpIHtcblx0aWYgKE9iamVjdC5rZXlzKSB7XG5cdFx0dmFyIGtleXNXb3Jrc1dpdGhBcmd1bWVudHMgPSAoZnVuY3Rpb24gKCkge1xuXHRcdFx0Ly8gU2FmYXJpIDUuMCBidWdcblx0XHRcdHJldHVybiAoT2JqZWN0LmtleXMoYXJndW1lbnRzKSB8fCAnJykubGVuZ3RoID09PSAyO1xuXHRcdH0oMSwgMikpO1xuXHRcdGlmICgha2V5c1dvcmtzV2l0aEFyZ3VtZW50cykge1xuXHRcdFx0dmFyIG9yaWdpbmFsS2V5cyA9IE9iamVjdC5rZXlzO1xuXHRcdFx0T2JqZWN0LmtleXMgPSBmdW5jdGlvbiBrZXlzKG9iamVjdCkge1xuXHRcdFx0XHRpZiAoaXNBcmdzKG9iamVjdCkpIHtcblx0XHRcdFx0XHRyZXR1cm4gb3JpZ2luYWxLZXlzKHNsaWNlLmNhbGwob2JqZWN0KSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuIG9yaWdpbmFsS2V5cyhvYmplY3QpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRPYmplY3Qua2V5cyA9IGtleXNTaGltO1xuXHR9XG5cdHJldHVybiBPYmplY3Qua2V5cyB8fCBrZXlzU2hpbTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ga2V5c1NoaW07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vb2JqZWN0LWtleXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0FyZ3VtZW50cyh2YWx1ZSkge1xuXHR2YXIgc3RyID0gdG9TdHIuY2FsbCh2YWx1ZSk7XG5cdHZhciBpc0FyZ3MgPSBzdHIgPT09ICdbb2JqZWN0IEFyZ3VtZW50c10nO1xuXHRpZiAoIWlzQXJncykge1xuXHRcdGlzQXJncyA9IHN0ciAhPT0gJ1tvYmplY3QgQXJyYXldJyAmJlxuXHRcdFx0dmFsdWUgIT09IG51bGwgJiZcblx0XHRcdHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiZcblx0XHRcdHR5cGVvZiB2YWx1ZS5sZW5ndGggPT09ICdudW1iZXInICYmXG5cdFx0XHR2YWx1ZS5sZW5ndGggPj0gMCAmJlxuXHRcdFx0dG9TdHIuY2FsbCh2YWx1ZS5jYWxsZWUpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xuXHR9XG5cdHJldHVybiBpc0FyZ3M7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L29iamVjdC1rZXlzL2lzQXJndW1lbnRzLmpzXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbnZhciBoYXNPd24gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBmb3JFYWNoIChvYmosIGZuLCBjdHgpIHtcbiAgICBpZiAodG9TdHJpbmcuY2FsbChmbikgIT09ICdbb2JqZWN0IEZ1bmN0aW9uXScpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignaXRlcmF0b3IgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG4gICAgfVxuICAgIHZhciBsID0gb2JqLmxlbmd0aDtcbiAgICBpZiAobCA9PT0gK2wpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGZuLmNhbGwoY3R4LCBvYmpbaV0sIGksIG9iaik7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKHZhciBrIGluIG9iaikge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKG9iaiwgaykpIHtcbiAgICAgICAgICAgICAgICBmbi5jYWxsKGN0eCwgb2JqW2tdLCBrLCBvYmopO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcblxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2ZvcmVhY2gvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbnZhciBoYXNTeW1ib2xzID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSAnc3ltYm9sJztcbnZhciBzeW1ib2xUb1N0ciA9IGhhc1N5bWJvbHMgPyBTeW1ib2wucHJvdG90eXBlLnRvU3RyaW5nIDogdG9TdHI7XG5cbnZhciAkaXNOYU4gPSByZXF1aXJlKCcuL2hlbHBlcnMvaXNOYU4nKTtcbnZhciAkaXNGaW5pdGUgPSByZXF1aXJlKCcuL2hlbHBlcnMvaXNGaW5pdGUnKTtcbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIgfHwgTWF0aC5wb3coMiwgNTMpIC0gMTtcblxudmFyIGFzc2lnbiA9IHJlcXVpcmUoJy4vaGVscGVycy9hc3NpZ24nKTtcbnZhciBzaWduID0gcmVxdWlyZSgnLi9oZWxwZXJzL3NpZ24nKTtcbnZhciBtb2QgPSByZXF1aXJlKCcuL2hlbHBlcnMvbW9kJyk7XG52YXIgaXNQcmltaXRpdmUgPSByZXF1aXJlKCcuL2hlbHBlcnMvaXNQcmltaXRpdmUnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJ2VzLXRvLXByaW1pdGl2ZS9lczYnKTtcbnZhciBwYXJzZUludGVnZXIgPSBwYXJzZUludDtcbnZhciBiaW5kID0gcmVxdWlyZSgnZnVuY3Rpb24tYmluZCcpO1xudmFyIHN0clNsaWNlID0gYmluZC5jYWxsKEZ1bmN0aW9uLmNhbGwsIFN0cmluZy5wcm90b3R5cGUuc2xpY2UpO1xudmFyIGlzQmluYXJ5ID0gYmluZC5jYWxsKEZ1bmN0aW9uLmNhbGwsIFJlZ0V4cC5wcm90b3R5cGUudGVzdCwgL14wYlswMV0rJC9pKTtcbnZhciBpc09jdGFsID0gYmluZC5jYWxsKEZ1bmN0aW9uLmNhbGwsIFJlZ0V4cC5wcm90b3R5cGUudGVzdCwgL14wb1swLTddKyQvaSk7XG52YXIgbm9uV1MgPSBbJ1xcdTAwODUnLCAnXFx1MjAwYicsICdcXHVmZmZlJ10uam9pbignJyk7XG52YXIgbm9uV1NyZWdleCA9IG5ldyBSZWdFeHAoJ1snICsgbm9uV1MgKyAnXScsICdnJyk7XG52YXIgaGFzTm9uV1MgPSBiaW5kLmNhbGwoRnVuY3Rpb24uY2FsbCwgUmVnRXhwLnByb3RvdHlwZS50ZXN0LCBub25XU3JlZ2V4KTtcbnZhciBpbnZhbGlkSGV4TGl0ZXJhbCA9IC9eWy0rXTB4WzAtOWEtZl0rJC9pO1xudmFyIGlzSW52YWxpZEhleExpdGVyYWwgPSBiaW5kLmNhbGwoRnVuY3Rpb24uY2FsbCwgUmVnRXhwLnByb3RvdHlwZS50ZXN0LCBpbnZhbGlkSGV4TGl0ZXJhbCk7XG5cbi8vIHdoaXRlc3BhY2UgZnJvbTogaHR0cDovL2VzNS5naXRodWIuaW8vI3gxNS41LjQuMjBcbi8vIGltcGxlbWVudGF0aW9uIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2VzLXNoaW1zL2VzNS1zaGltL2Jsb2IvdjMuNC4wL2VzNS1zaGltLmpzI0wxMzA0LUwxMzI0XG52YXIgd3MgPSBbXG5cdCdcXHgwOVxceDBBXFx4MEJcXHgwQ1xceDBEXFx4MjBcXHhBMFxcdTE2ODBcXHUxODBFXFx1MjAwMFxcdTIwMDFcXHUyMDAyXFx1MjAwMycsXG5cdCdcXHUyMDA0XFx1MjAwNVxcdTIwMDZcXHUyMDA3XFx1MjAwOFxcdTIwMDlcXHUyMDBBXFx1MjAyRlxcdTIwNUZcXHUzMDAwXFx1MjAyOCcsXG5cdCdcXHUyMDI5XFx1RkVGRidcbl0uam9pbignJyk7XG52YXIgdHJpbVJlZ2V4ID0gbmV3IFJlZ0V4cCgnKF5bJyArIHdzICsgJ10rKXwoWycgKyB3cyArICddKyQpJywgJ2cnKTtcbnZhciByZXBsYWNlID0gYmluZC5jYWxsKEZ1bmN0aW9uLmNhbGwsIFN0cmluZy5wcm90b3R5cGUucmVwbGFjZSk7XG52YXIgdHJpbSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRyZXR1cm4gcmVwbGFjZSh2YWx1ZSwgdHJpbVJlZ2V4LCAnJyk7XG59O1xuXG52YXIgRVM1ID0gcmVxdWlyZSgnLi9lczUnKTtcblxudmFyIGhhc1JlZ0V4cE1hdGNoZXIgPSByZXF1aXJlKCdpcy1yZWdleCcpO1xuXG4vLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtYWJzdHJhY3Qtb3BlcmF0aW9uc1xudmFyIEVTNiA9IGFzc2lnbihhc3NpZ24oe30sIEVTNSksIHtcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtY2FsbC1mLXYtYXJnc1xuXHRDYWxsOiBmdW5jdGlvbiBDYWxsKEYsIFYpIHtcblx0XHR2YXIgYXJncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyID8gYXJndW1lbnRzWzJdIDogW107XG5cdFx0aWYgKCF0aGlzLklzQ2FsbGFibGUoRikpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoRiArICcgaXMgbm90IGEgZnVuY3Rpb24nKTtcblx0XHR9XG5cdFx0cmV0dXJuIEYuYXBwbHkoViwgYXJncyk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvcHJpbWl0aXZlXG5cdFRvUHJpbWl0aXZlOiB0b1ByaW1pdGl2ZSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG9ib29sZWFuXG5cdC8vIFRvQm9vbGVhbjogRVM1LlRvQm9vbGVhbixcblxuXHQvLyBodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtdG9udW1iZXJcblx0VG9OdW1iZXI6IGZ1bmN0aW9uIFRvTnVtYmVyKGFyZ3VtZW50KSB7XG5cdFx0dmFyIHZhbHVlID0gaXNQcmltaXRpdmUoYXJndW1lbnQpID8gYXJndW1lbnQgOiB0b1ByaW1pdGl2ZShhcmd1bWVudCwgJ251bWJlcicpO1xuXHRcdGlmICh0eXBlb2YgdmFsdWUgPT09ICdzeW1ib2wnKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCBhIFN5bWJvbCB2YWx1ZSB0byBhIG51bWJlcicpO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuXHRcdFx0aWYgKGlzQmluYXJ5KHZhbHVlKSkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5Ub051bWJlcihwYXJzZUludGVnZXIoc3RyU2xpY2UodmFsdWUsIDIpLCAyKSk7XG5cdFx0XHR9IGVsc2UgaWYgKGlzT2N0YWwodmFsdWUpKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLlRvTnVtYmVyKHBhcnNlSW50ZWdlcihzdHJTbGljZSh2YWx1ZSwgMiksIDgpKTtcblx0XHRcdH0gZWxzZSBpZiAoaGFzTm9uV1ModmFsdWUpIHx8IGlzSW52YWxpZEhleExpdGVyYWwodmFsdWUpKSB7XG5cdFx0XHRcdHJldHVybiBOYU47XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIgdHJpbW1lZCA9IHRyaW0odmFsdWUpO1xuXHRcdFx0XHRpZiAodHJpbW1lZCAhPT0gdmFsdWUpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5Ub051bWJlcih0cmltbWVkKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gTnVtYmVyKHZhbHVlKTtcblx0fSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG9pbnRlZ2VyXG5cdC8vIFRvSW50ZWdlcjogRVM1LlRvTnVtYmVyLFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b2ludDMyXG5cdC8vIFRvSW50MzI6IEVTNS5Ub0ludDMyLFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b3VpbnQzMlxuXHQvLyBUb1VpbnQzMjogRVM1LlRvVWludDMyLFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b2ludDE2XG5cdFRvSW50MTY6IGZ1bmN0aW9uIFRvSW50MTYoYXJndW1lbnQpIHtcblx0XHR2YXIgaW50MTZiaXQgPSB0aGlzLlRvVWludDE2KGFyZ3VtZW50KTtcblx0XHRyZXR1cm4gaW50MTZiaXQgPj0gMHg4MDAwID8gaW50MTZiaXQgLSAweDEwMDAwIDogaW50MTZiaXQ7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvdWludDE2XG5cdC8vIFRvVWludDE2OiBFUzUuVG9VaW50MTYsXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvaW50OFxuXHRUb0ludDg6IGZ1bmN0aW9uIFRvSW50OChhcmd1bWVudCkge1xuXHRcdHZhciBpbnQ4Yml0ID0gdGhpcy5Ub1VpbnQ4KGFyZ3VtZW50KTtcblx0XHRyZXR1cm4gaW50OGJpdCA+PSAweDgwID8gaW50OGJpdCAtIDB4MTAwIDogaW50OGJpdDtcblx0fSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG91aW50OFxuXHRUb1VpbnQ4OiBmdW5jdGlvbiBUb1VpbnQ4KGFyZ3VtZW50KSB7XG5cdFx0dmFyIG51bWJlciA9IHRoaXMuVG9OdW1iZXIoYXJndW1lbnQpO1xuXHRcdGlmICgkaXNOYU4obnVtYmVyKSB8fCBudW1iZXIgPT09IDAgfHwgISRpc0Zpbml0ZShudW1iZXIpKSB7IHJldHVybiAwOyB9XG5cdFx0dmFyIHBvc0ludCA9IHNpZ24obnVtYmVyKSAqIE1hdGguZmxvb3IoTWF0aC5hYnMobnVtYmVyKSk7XG5cdFx0cmV0dXJuIG1vZChwb3NJbnQsIDB4MTAwKTtcblx0fSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG91aW50OGNsYW1wXG5cdFRvVWludDhDbGFtcDogZnVuY3Rpb24gVG9VaW50OENsYW1wKGFyZ3VtZW50KSB7XG5cdFx0dmFyIG51bWJlciA9IHRoaXMuVG9OdW1iZXIoYXJndW1lbnQpO1xuXHRcdGlmICgkaXNOYU4obnVtYmVyKSB8fCBudW1iZXIgPD0gMCkgeyByZXR1cm4gMDsgfVxuXHRcdGlmIChudW1iZXIgPj0gMHhGRikgeyByZXR1cm4gMHhGRjsgfVxuXHRcdHZhciBmID0gTWF0aC5mbG9vcihhcmd1bWVudCk7XG5cdFx0aWYgKGYgKyAwLjUgPCBudW1iZXIpIHsgcmV0dXJuIGYgKyAxOyB9XG5cdFx0aWYgKG51bWJlciA8IGYgKyAwLjUpIHsgcmV0dXJuIGY7IH1cblx0XHRpZiAoZiAlIDIgIT09IDApIHsgcmV0dXJuIGYgKyAxOyB9XG5cdFx0cmV0dXJuIGY7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvc3RyaW5nXG5cdFRvU3RyaW5nOiBmdW5jdGlvbiBUb1N0cmluZyhhcmd1bWVudCkge1xuXHRcdGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdzeW1ib2wnKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCBhIFN5bWJvbCB2YWx1ZSB0byBhIHN0cmluZycpO1xuXHRcdH1cblx0XHRyZXR1cm4gU3RyaW5nKGFyZ3VtZW50KTtcblx0fSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG9vYmplY3Rcblx0VG9PYmplY3Q6IGZ1bmN0aW9uIFRvT2JqZWN0KHZhbHVlKSB7XG5cdFx0dGhpcy5SZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHZhbHVlKTtcblx0XHRyZXR1cm4gT2JqZWN0KHZhbHVlKTtcblx0fSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG9wcm9wZXJ0eWtleVxuXHRUb1Byb3BlcnR5S2V5OiBmdW5jdGlvbiBUb1Byb3BlcnR5S2V5KGFyZ3VtZW50KSB7XG5cdFx0dmFyIGtleSA9IHRoaXMuVG9QcmltaXRpdmUoYXJndW1lbnQsIFN0cmluZyk7XG5cdFx0cmV0dXJuIHR5cGVvZiBrZXkgPT09ICdzeW1ib2wnID8gc3ltYm9sVG9TdHIuY2FsbChrZXkpIDogdGhpcy5Ub1N0cmluZyhrZXkpO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b2xlbmd0aFxuXHRUb0xlbmd0aDogZnVuY3Rpb24gVG9MZW5ndGgoYXJndW1lbnQpIHtcblx0XHR2YXIgbGVuID0gdGhpcy5Ub0ludGVnZXIoYXJndW1lbnQpO1xuXHRcdGlmIChsZW4gPD0gMCkgeyByZXR1cm4gMDsgfSAvLyBpbmNsdWRlcyBjb252ZXJ0aW5nIC0wIHRvICswXG5cdFx0aWYgKGxlbiA+IE1BWF9TQUZFX0lOVEVHRVIpIHsgcmV0dXJuIE1BWF9TQUZFX0lOVEVHRVI7IH1cblx0XHRyZXR1cm4gbGVuO1xuXHR9LFxuXG5cdC8vIGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1jYW5vbmljYWxudW1lcmljaW5kZXhzdHJpbmdcblx0Q2Fub25pY2FsTnVtZXJpY0luZGV4U3RyaW5nOiBmdW5jdGlvbiBDYW5vbmljYWxOdW1lcmljSW5kZXhTdHJpbmcoYXJndW1lbnQpIHtcblx0XHRpZiAodG9TdHIuY2FsbChhcmd1bWVudCkgIT09ICdbb2JqZWN0IFN0cmluZ10nKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdtdXN0IGJlIGEgc3RyaW5nJyk7XG5cdFx0fVxuXHRcdGlmIChhcmd1bWVudCA9PT0gJy0wJykgeyByZXR1cm4gLTA7IH1cblx0XHR2YXIgbiA9IHRoaXMuVG9OdW1iZXIoYXJndW1lbnQpO1xuXHRcdGlmICh0aGlzLlNhbWVWYWx1ZSh0aGlzLlRvU3RyaW5nKG4pLCBhcmd1bWVudCkpIHsgcmV0dXJuIG47IH1cblx0XHRyZXR1cm4gdm9pZCAwO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1yZXF1aXJlb2JqZWN0Y29lcmNpYmxlXG5cdFJlcXVpcmVPYmplY3RDb2VyY2libGU6IEVTNS5DaGVja09iamVjdENvZXJjaWJsZSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtaXNhcnJheVxuXHRJc0FycmF5OiBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIElzQXJyYXkoYXJndW1lbnQpIHtcblx0XHRyZXR1cm4gdG9TdHIuY2FsbChhcmd1bWVudCkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWlzY2FsbGFibGVcblx0Ly8gSXNDYWxsYWJsZTogRVM1LklzQ2FsbGFibGUsXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWlzY29uc3RydWN0b3Jcblx0SXNDb25zdHJ1Y3RvcjogZnVuY3Rpb24gSXNDb25zdHJ1Y3Rvcihhcmd1bWVudCkge1xuXHRcdHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT09ICdmdW5jdGlvbicgJiYgISFhcmd1bWVudC5wcm90b3R5cGU7IC8vIHVuZm9ydHVuYXRlbHkgdGhlcmUncyBubyB3YXkgdG8gdHJ1bHkgY2hlY2sgdGhpcyB3aXRob3V0IHRyeS9jYXRjaCBgbmV3IGFyZ3VtZW50YFxuXHR9LFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1pc2V4dGVuc2libGUtb1xuXHRJc0V4dGVuc2libGU6IGZ1bmN0aW9uIElzRXh0ZW5zaWJsZShvYmopIHtcblx0XHRpZiAoIU9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucykgeyByZXR1cm4gdHJ1ZTsgfVxuXHRcdGlmIChpc1ByaW1pdGl2ZShvYmopKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHJldHVybiBPYmplY3QuaXNFeHRlbnNpYmxlKG9iaik7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWlzaW50ZWdlclxuXHRJc0ludGVnZXI6IGZ1bmN0aW9uIElzSW50ZWdlcihhcmd1bWVudCkge1xuXHRcdGlmICh0eXBlb2YgYXJndW1lbnQgIT09ICdudW1iZXInIHx8ICRpc05hTihhcmd1bWVudCkgfHwgISRpc0Zpbml0ZShhcmd1bWVudCkpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0dmFyIGFicyA9IE1hdGguYWJzKGFyZ3VtZW50KTtcblx0XHRyZXR1cm4gTWF0aC5mbG9vcihhYnMpID09PSBhYnM7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWlzcHJvcGVydHlrZXlcblx0SXNQcm9wZXJ0eUtleTogZnVuY3Rpb24gSXNQcm9wZXJ0eUtleShhcmd1bWVudCkge1xuXHRcdHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N5bWJvbCc7XG5cdH0sXG5cblx0Ly8gaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWlzcmVnZXhwXG5cdElzUmVnRXhwOiBmdW5jdGlvbiBJc1JlZ0V4cChhcmd1bWVudCkge1xuXHRcdGlmICghYXJndW1lbnQgfHwgdHlwZW9mIGFyZ3VtZW50ICE9PSAnb2JqZWN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRpZiAoaGFzU3ltYm9scykge1xuXHRcdFx0dmFyIGlzUmVnRXhwID0gYXJndW1lbnRbU3ltYm9sLm1hdGNoXTtcblx0XHRcdGlmICh0eXBlb2YgaXNSZWdFeHAgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdHJldHVybiBFUzUuVG9Cb29sZWFuKGlzUmVnRXhwKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGhhc1JlZ0V4cE1hdGNoZXIoYXJndW1lbnQpO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1zYW1ldmFsdWVcblx0Ly8gU2FtZVZhbHVlOiBFUzUuU2FtZVZhbHVlLFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1zYW1ldmFsdWV6ZXJvXG5cdFNhbWVWYWx1ZVplcm86IGZ1bmN0aW9uIFNhbWVWYWx1ZVplcm8oeCwgeSkge1xuXHRcdHJldHVybiAoeCA9PT0geSkgfHwgKCRpc05hTih4KSAmJiAkaXNOYU4oeSkpO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiA3LjMuMiBHZXRWIChWLCBQKVxuXHQgKiAxLiBBc3NlcnQ6IElzUHJvcGVydHlLZXkoUCkgaXMgdHJ1ZS5cblx0ICogMi4gTGV0IE8gYmUgVG9PYmplY3QoVikuXG5cdCAqIDMuIFJldHVybklmQWJydXB0KE8pLlxuXHQgKiA0LiBSZXR1cm4gTy5bW0dldF1dKFAsIFYpLlxuXHQgKi9cblx0R2V0VjogZnVuY3Rpb24gR2V0VihWLCBQKSB7XG5cdFx0Ly8gNy4zLjIuMVxuXHRcdGlmICghdGhpcy5Jc1Byb3BlcnR5S2V5KFApKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBJc1Byb3BlcnR5S2V5KFApIGlzIG5vdCB0cnVlJyk7XG5cdFx0fVxuXG5cdFx0Ly8gNy4zLjIuMi0zXG5cdFx0dmFyIE8gPSB0aGlzLlRvT2JqZWN0KFYpO1xuXG5cdFx0Ly8gNy4zLjIuNFxuXHRcdHJldHVybiBPW1BdO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiA3LjMuOSAtIGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1nZXRtZXRob2Rcblx0ICogMS4gQXNzZXJ0OiBJc1Byb3BlcnR5S2V5KFApIGlzIHRydWUuXG5cdCAqIDIuIExldCBmdW5jIGJlIEdldFYoTywgUCkuXG5cdCAqIDMuIFJldHVybklmQWJydXB0KGZ1bmMpLlxuXHQgKiA0LiBJZiBmdW5jIGlzIGVpdGhlciB1bmRlZmluZWQgb3IgbnVsbCwgcmV0dXJuIHVuZGVmaW5lZC5cblx0ICogNS4gSWYgSXNDYWxsYWJsZShmdW5jKSBpcyBmYWxzZSwgdGhyb3cgYSBUeXBlRXJyb3IgZXhjZXB0aW9uLlxuXHQgKiA2LiBSZXR1cm4gZnVuYy5cblx0ICovXG5cdEdldE1ldGhvZDogZnVuY3Rpb24gR2V0TWV0aG9kKE8sIFApIHtcblx0XHQvLyA3LjMuOS4xXG5cdFx0aWYgKCF0aGlzLklzUHJvcGVydHlLZXkoUCkpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IElzUHJvcGVydHlLZXkoUCkgaXMgbm90IHRydWUnKTtcblx0XHR9XG5cblx0XHQvLyA3LjMuOS4yXG5cdFx0dmFyIGZ1bmMgPSB0aGlzLkdldFYoTywgUCk7XG5cblx0XHQvLyA3LjMuOS40XG5cdFx0aWYgKGZ1bmMgPT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcblx0XHR9XG5cblx0XHQvLyA3LjMuOS41XG5cdFx0aWYgKCF0aGlzLklzQ2FsbGFibGUoZnVuYykpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoUCArICdpcyBub3QgYSBmdW5jdGlvbicpO1xuXHRcdH1cblxuXHRcdC8vIDcuMy45LjZcblx0XHRyZXR1cm4gZnVuYztcblx0fSxcblxuXHQvKipcblx0ICogNy4zLjEgR2V0IChPLCBQKSAtIGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1nZXQtby1wXG5cdCAqIDEuIEFzc2VydDogVHlwZShPKSBpcyBPYmplY3QuXG5cdCAqIDIuIEFzc2VydDogSXNQcm9wZXJ0eUtleShQKSBpcyB0cnVlLlxuXHQgKiAzLiBSZXR1cm4gTy5bW0dldF1dKFAsIE8pLlxuXHQgKi9cblx0R2V0OiBmdW5jdGlvbiBHZXQoTywgUCkge1xuXHRcdC8vIDcuMy4xLjFcblx0XHRpZiAodGhpcy5UeXBlKE8pICE9PSAnT2JqZWN0Jykge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogVHlwZShPKSBpcyBub3QgT2JqZWN0Jyk7XG5cdFx0fVxuXHRcdC8vIDcuMy4xLjJcblx0XHRpZiAoIXRoaXMuSXNQcm9wZXJ0eUtleShQKSkge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogSXNQcm9wZXJ0eUtleShQKSBpcyBub3QgdHJ1ZScpO1xuXHRcdH1cblx0XHQvLyA3LjMuMS4zXG5cdFx0cmV0dXJuIE9bUF07XG5cdH0sXG5cblx0VHlwZTogZnVuY3Rpb24gVHlwZSh4KSB7XG5cdFx0aWYgKHR5cGVvZiB4ID09PSAnc3ltYm9sJykge1xuXHRcdFx0cmV0dXJuICdTeW1ib2wnO1xuXHRcdH1cblx0XHRyZXR1cm4gRVM1LlR5cGUoeCk7XG5cdH0sXG5cblx0Ly8gaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLXNwZWNpZXNjb25zdHJ1Y3RvclxuXHRTcGVjaWVzQ29uc3RydWN0b3I6IGZ1bmN0aW9uIFNwZWNpZXNDb25zdHJ1Y3RvcihPLCBkZWZhdWx0Q29uc3RydWN0b3IpIHtcblx0XHRpZiAodGhpcy5UeXBlKE8pICE9PSAnT2JqZWN0Jykge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogVHlwZShPKSBpcyBub3QgT2JqZWN0Jyk7XG5cdFx0fVxuXHRcdHZhciBDID0gTy5jb25zdHJ1Y3Rvcjtcblx0XHRpZiAodHlwZW9mIEMgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRyZXR1cm4gZGVmYXVsdENvbnN0cnVjdG9yO1xuXHRcdH1cblx0XHRpZiAodGhpcy5UeXBlKEMpICE9PSAnT2JqZWN0Jykge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignTy5jb25zdHJ1Y3RvciBpcyBub3QgYW4gT2JqZWN0Jyk7XG5cdFx0fVxuXHRcdHZhciBTID0gaGFzU3ltYm9scyAmJiBTeW1ib2wuc3BlY2llcyA/IENbU3ltYm9sLnNwZWNpZXNdIDogdW5kZWZpbmVkO1xuXHRcdGlmIChTID09IG51bGwpIHtcblx0XHRcdHJldHVybiBkZWZhdWx0Q29uc3RydWN0b3I7XG5cdFx0fVxuXHRcdGlmICh0aGlzLklzQ29uc3RydWN0b3IoUykpIHtcblx0XHRcdHJldHVybiBTO1xuXHRcdH1cblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdubyBjb25zdHJ1Y3RvciBmb3VuZCcpO1xuXHR9XG59KTtcblxuZGVsZXRlIEVTNi5DaGVja09iamVjdENvZXJjaWJsZTsgLy8gcmVuYW1lZCBpbiBFUzYgdG8gUmVxdWlyZU9iamVjdENvZXJjaWJsZVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVTNjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy1hYnN0cmFjdC9lczYuanNcbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gTnVtYmVyLmlzTmFOIHx8IGZ1bmN0aW9uIGlzTmFOKGEpIHtcblx0cmV0dXJuIGEgIT09IGE7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VzLWFic3RyYWN0L2hlbHBlcnMvaXNOYU4uanNcbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciAkaXNOYU4gPSBOdW1iZXIuaXNOYU4gfHwgZnVuY3Rpb24gKGEpIHsgcmV0dXJuIGEgIT09IGE7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gTnVtYmVyLmlzRmluaXRlIHx8IGZ1bmN0aW9uICh4KSB7IHJldHVybiB0eXBlb2YgeCA9PT0gJ251bWJlcicgJiYgISRpc05hTih4KSAmJiB4ICE9PSBJbmZpbml0eSAmJiB4ICE9PSAtSW5maW5pdHk7IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZXMtYWJzdHJhY3QvaGVscGVycy9pc0Zpbml0ZS5qc1xuLy8gbW9kdWxlIGlkID0gNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGhhcyA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKSB7XG5cdGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcblx0XHRpZiAoaGFzLmNhbGwoc291cmNlLCBrZXkpKSB7XG5cdFx0XHR0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gdGFyZ2V0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy1hYnN0cmFjdC9oZWxwZXJzL2Fzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzaWduKG51bWJlcikge1xuXHRyZXR1cm4gbnVtYmVyID49IDAgPyAxIDogLTE7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VzLWFic3RyYWN0L2hlbHBlcnMvc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBtb2QobnVtYmVyLCBtb2R1bG8pIHtcblx0dmFyIHJlbWFpbiA9IG51bWJlciAlIG1vZHVsbztcblx0cmV0dXJuIE1hdGguZmxvb3IocmVtYWluID49IDAgPyByZW1haW4gOiByZW1haW4gKyBtb2R1bG8pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy1hYnN0cmFjdC9oZWxwZXJzL21vZC5qc1xuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc1ByaW1pdGl2ZSh2YWx1ZSkge1xuXHRyZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgKHR5cGVvZiB2YWx1ZSAhPT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZXMtYWJzdHJhY3QvaGVscGVycy9pc1ByaW1pdGl2ZS5qc1xuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaGFzU3ltYm9scyA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gJ3N5bWJvbCc7XG5cbnZhciBpc1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vaGVscGVycy9pc1ByaW1pdGl2ZScpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCdpcy1jYWxsYWJsZScpO1xudmFyIGlzRGF0ZSA9IHJlcXVpcmUoJ2lzLWRhdGUtb2JqZWN0Jyk7XG52YXIgaXNTeW1ib2wgPSByZXF1aXJlKCdpcy1zeW1ib2wnKTtcblxudmFyIG9yZGluYXJ5VG9QcmltaXRpdmUgPSBmdW5jdGlvbiBPcmRpbmFyeVRvUHJpbWl0aXZlKE8sIGhpbnQpIHtcblx0aWYgKHR5cGVvZiBPID09PSAndW5kZWZpbmVkJyB8fCBPID09PSBudWxsKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgbWV0aG9kIG9uICcgKyBPKTtcblx0fVxuXHRpZiAodHlwZW9mIGhpbnQgIT09ICdzdHJpbmcnIHx8IChoaW50ICE9PSAnbnVtYmVyJyAmJiBoaW50ICE9PSAnc3RyaW5nJykpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdoaW50IG11c3QgYmUgXCJzdHJpbmdcIiBvciBcIm51bWJlclwiJyk7XG5cdH1cblx0dmFyIG1ldGhvZE5hbWVzID0gaGludCA9PT0gJ3N0cmluZycgPyBbJ3RvU3RyaW5nJywgJ3ZhbHVlT2YnXSA6IFsndmFsdWVPZicsICd0b1N0cmluZyddO1xuXHR2YXIgbWV0aG9kLCByZXN1bHQsIGk7XG5cdGZvciAoaSA9IDA7IGkgPCBtZXRob2ROYW1lcy5sZW5ndGg7ICsraSkge1xuXHRcdG1ldGhvZCA9IE9bbWV0aG9kTmFtZXNbaV1dO1xuXHRcdGlmIChpc0NhbGxhYmxlKG1ldGhvZCkpIHtcblx0XHRcdHJlc3VsdCA9IG1ldGhvZC5jYWxsKE8pO1xuXHRcdFx0aWYgKGlzUHJpbWl0aXZlKHJlc3VsdCkpIHtcblx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0dGhyb3cgbmV3IFR5cGVFcnJvcignTm8gZGVmYXVsdCB2YWx1ZScpO1xufTtcblxudmFyIEdldE1ldGhvZCA9IGZ1bmN0aW9uIEdldE1ldGhvZChPLCBQKSB7XG5cdHZhciBmdW5jID0gT1tQXTtcblx0aWYgKGZ1bmMgIT09IG51bGwgJiYgdHlwZW9mIGZ1bmMgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0aWYgKCFpc0NhbGxhYmxlKGZ1bmMpKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGZ1bmMgKyAnIHJldHVybmVkIGZvciBwcm9wZXJ0eSAnICsgUCArICcgb2Ygb2JqZWN0ICcgKyBPICsgJyBpcyBub3QgYSBmdW5jdGlvbicpO1xuXHRcdH1cblx0XHRyZXR1cm4gZnVuYztcblx0fVxufTtcblxuLy8gaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLXRvcHJpbWl0aXZlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIFRvUHJpbWl0aXZlKGlucHV0LCBQcmVmZXJyZWRUeXBlKSB7XG5cdGlmIChpc1ByaW1pdGl2ZShpbnB1dCkpIHtcblx0XHRyZXR1cm4gaW5wdXQ7XG5cdH1cblx0dmFyIGhpbnQgPSAnZGVmYXVsdCc7XG5cdGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuXHRcdGlmIChQcmVmZXJyZWRUeXBlID09PSBTdHJpbmcpIHtcblx0XHRcdGhpbnQgPSAnc3RyaW5nJztcblx0XHR9IGVsc2UgaWYgKFByZWZlcnJlZFR5cGUgPT09IE51bWJlcikge1xuXHRcdFx0aGludCA9ICdudW1iZXInO1xuXHRcdH1cblx0fVxuXG5cdHZhciBleG90aWNUb1ByaW07XG5cdGlmIChoYXNTeW1ib2xzKSB7XG5cdFx0aWYgKFN5bWJvbC50b1ByaW1pdGl2ZSkge1xuXHRcdFx0ZXhvdGljVG9QcmltID0gR2V0TWV0aG9kKGlucHV0LCBTeW1ib2wudG9QcmltaXRpdmUpO1xuXHRcdH0gZWxzZSBpZiAoaXNTeW1ib2woaW5wdXQpKSB7XG5cdFx0XHRleG90aWNUb1ByaW0gPSBTeW1ib2wucHJvdG90eXBlLnZhbHVlT2Y7XG5cdFx0fVxuXHR9XG5cdGlmICh0eXBlb2YgZXhvdGljVG9QcmltICE9PSAndW5kZWZpbmVkJykge1xuXHRcdHZhciByZXN1bHQgPSBleG90aWNUb1ByaW0uY2FsbChpbnB1dCwgaGludCk7XG5cdFx0aWYgKGlzUHJpbWl0aXZlKHJlc3VsdCkpIHtcblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fVxuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ3VuYWJsZSB0byBjb252ZXJ0IGV4b3RpYyBvYmplY3QgdG8gcHJpbWl0aXZlJyk7XG5cdH1cblx0aWYgKGhpbnQgPT09ICdkZWZhdWx0JyAmJiAoaXNEYXRlKGlucHV0KSB8fCBpc1N5bWJvbChpbnB1dCkpKSB7XG5cdFx0aGludCA9ICdzdHJpbmcnO1xuXHR9XG5cdHJldHVybiBvcmRpbmFyeVRvUHJpbWl0aXZlKGlucHV0LCBoaW50ID09PSAnZGVmYXVsdCcgPyAnbnVtYmVyJyA6IGhpbnQpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy10by1wcmltaXRpdmUvZXM2LmpzXG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzUHJpbWl0aXZlKHZhbHVlKSB7XG5cdHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCAodHlwZW9mIHZhbHVlICE9PSAnZnVuY3Rpb24nICYmIHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy10by1wcmltaXRpdmUvaGVscGVycy9pc1ByaW1pdGl2ZS5qc1xuLy8gbW9kdWxlIGlkID0gNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZm5Ub1N0ciA9IEZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZztcblxudmFyIGNvbnN0cnVjdG9yUmVnZXggPSAvXlxccypjbGFzcyAvO1xudmFyIGlzRVM2Q2xhc3NGbiA9IGZ1bmN0aW9uIGlzRVM2Q2xhc3NGbih2YWx1ZSkge1xuXHR0cnkge1xuXHRcdHZhciBmblN0ciA9IGZuVG9TdHIuY2FsbCh2YWx1ZSk7XG5cdFx0dmFyIHNpbmdsZVN0cmlwcGVkID0gZm5TdHIucmVwbGFjZSgvXFwvXFwvLipcXG4vZywgJycpO1xuXHRcdHZhciBtdWx0aVN0cmlwcGVkID0gc2luZ2xlU3RyaXBwZWQucmVwbGFjZSgvXFwvXFwqWy5cXHNcXFNdKlxcKlxcLy9nLCAnJyk7XG5cdFx0dmFyIHNwYWNlU3RyaXBwZWQgPSBtdWx0aVN0cmlwcGVkLnJlcGxhY2UoL1xcbi9tZywgJyAnKS5yZXBsYWNlKC8gezJ9L2csICcgJyk7XG5cdFx0cmV0dXJuIGNvbnN0cnVjdG9yUmVnZXgudGVzdChzcGFjZVN0cmlwcGVkKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdHJldHVybiBmYWxzZTsgLy8gbm90IGEgZnVuY3Rpb25cblx0fVxufTtcblxudmFyIHRyeUZ1bmN0aW9uT2JqZWN0ID0gZnVuY3Rpb24gdHJ5RnVuY3Rpb25PYmplY3QodmFsdWUpIHtcblx0dHJ5IHtcblx0XHRpZiAoaXNFUzZDbGFzc0ZuKHZhbHVlKSkgeyByZXR1cm4gZmFsc2U7IH1cblx0XHRmblRvU3RyLmNhbGwodmFsdWUpO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbnZhciBmbkNsYXNzID0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbnZhciBnZW5DbGFzcyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXSc7XG52YXIgaGFzVG9TdHJpbmdUYWcgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBTeW1ib2wudG9TdHJpbmdUYWcgPT09ICdzeW1ib2wnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQ2FsbGFibGUodmFsdWUpIHtcblx0aWYgKCF2YWx1ZSkgeyByZXR1cm4gZmFsc2U7IH1cblx0aWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnKSB7IHJldHVybiBmYWxzZTsgfVxuXHRpZiAoaGFzVG9TdHJpbmdUYWcpIHsgcmV0dXJuIHRyeUZ1bmN0aW9uT2JqZWN0KHZhbHVlKTsgfVxuXHRpZiAoaXNFUzZDbGFzc0ZuKHZhbHVlKSkgeyByZXR1cm4gZmFsc2U7IH1cblx0dmFyIHN0ckNsYXNzID0gdG9TdHIuY2FsbCh2YWx1ZSk7XG5cdHJldHVybiBzdHJDbGFzcyA9PT0gZm5DbGFzcyB8fCBzdHJDbGFzcyA9PT0gZ2VuQ2xhc3M7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2lzLWNhbGxhYmxlL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBnZXREYXkgPSBEYXRlLnByb3RvdHlwZS5nZXREYXk7XG52YXIgdHJ5RGF0ZU9iamVjdCA9IGZ1bmN0aW9uIHRyeURhdGVPYmplY3QodmFsdWUpIHtcblx0dHJ5IHtcblx0XHRnZXREYXkuY2FsbCh2YWx1ZSk7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn07XG5cbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgZGF0ZUNsYXNzID0gJ1tvYmplY3QgRGF0ZV0nO1xudmFyIGhhc1RvU3RyaW5nVGFnID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgU3ltYm9sLnRvU3RyaW5nVGFnID09PSAnc3ltYm9sJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0RhdGVPYmplY3QodmFsdWUpIHtcblx0aWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcgfHwgdmFsdWUgPT09IG51bGwpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdHJldHVybiBoYXNUb1N0cmluZ1RhZyA/IHRyeURhdGVPYmplY3QodmFsdWUpIDogdG9TdHIuY2FsbCh2YWx1ZSkgPT09IGRhdGVDbGFzcztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaXMtZGF0ZS1vYmplY3QvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbnZhciBoYXNTeW1ib2xzID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgU3ltYm9sKCkgPT09ICdzeW1ib2wnO1xuXG5pZiAoaGFzU3ltYm9scykge1xuXHR2YXIgc3ltVG9TdHIgPSBTeW1ib2wucHJvdG90eXBlLnRvU3RyaW5nO1xuXHR2YXIgc3ltU3RyaW5nUmVnZXggPSAvXlN5bWJvbFxcKC4qXFwpJC87XG5cdHZhciBpc1N5bWJvbE9iamVjdCA9IGZ1bmN0aW9uIGlzU3ltYm9sT2JqZWN0KHZhbHVlKSB7XG5cdFx0aWYgKHR5cGVvZiB2YWx1ZS52YWx1ZU9mKCkgIT09ICdzeW1ib2wnKSB7IHJldHVybiBmYWxzZTsgfVxuXHRcdHJldHVybiBzeW1TdHJpbmdSZWdleC50ZXN0KHN5bVRvU3RyLmNhbGwodmFsdWUpKTtcblx0fTtcblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc1N5bWJvbCh2YWx1ZSkge1xuXHRcdGlmICh0eXBlb2YgdmFsdWUgPT09ICdzeW1ib2wnKSB7IHJldHVybiB0cnVlOyB9XG5cdFx0aWYgKHRvU3RyLmNhbGwodmFsdWUpICE9PSAnW29iamVjdCBTeW1ib2xdJykgeyByZXR1cm4gZmFsc2U7IH1cblx0XHR0cnkge1xuXHRcdFx0cmV0dXJuIGlzU3ltYm9sT2JqZWN0KHZhbHVlKTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9O1xufSBlbHNlIHtcblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc1N5bWJvbCh2YWx1ZSkge1xuXHRcdC8vIHRoaXMgZW52aXJvbm1lbnQgZG9lcyBub3Qgc3VwcG9ydCBTeW1ib2xzLlxuXHRcdHJldHVybiBmYWxzZTtcblx0fTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9pcy1zeW1ib2wvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpbXBsZW1lbnRhdGlvbiA9IHJlcXVpcmUoJy4vaW1wbGVtZW50YXRpb24nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBGdW5jdGlvbi5wcm90b3R5cGUuYmluZCB8fCBpbXBsZW1lbnRhdGlvbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9mdW5jdGlvbi1iaW5kL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgRVJST1JfTUVTU0FHRSA9ICdGdW5jdGlvbi5wcm90b3R5cGUuYmluZCBjYWxsZWQgb24gaW5jb21wYXRpYmxlICc7XG52YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIGZ1bmNUeXBlID0gJ1tvYmplY3QgRnVuY3Rpb25dJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiaW5kKHRoYXQpIHtcbiAgICB2YXIgdGFyZ2V0ID0gdGhpcztcbiAgICBpZiAodHlwZW9mIHRhcmdldCAhPT0gJ2Z1bmN0aW9uJyB8fCB0b1N0ci5jYWxsKHRhcmdldCkgIT09IGZ1bmNUeXBlKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRVJST1JfTUVTU0FHRSArIHRhcmdldCk7XG4gICAgfVxuICAgIHZhciBhcmdzID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuXG4gICAgdmFyIGJvdW5kO1xuICAgIHZhciBiaW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzIGluc3RhbmNlb2YgYm91bmQpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSB0YXJnZXQuYXBwbHkoXG4gICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICBhcmdzLmNvbmNhdChzbGljZS5jYWxsKGFyZ3VtZW50cykpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKE9iamVjdChyZXN1bHQpID09PSByZXN1bHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0LmFwcGx5KFxuICAgICAgICAgICAgICAgIHRoYXQsXG4gICAgICAgICAgICAgICAgYXJncy5jb25jYXQoc2xpY2UuY2FsbChhcmd1bWVudHMpKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgYm91bmRMZW5ndGggPSBNYXRoLm1heCgwLCB0YXJnZXQubGVuZ3RoIC0gYXJncy5sZW5ndGgpO1xuICAgIHZhciBib3VuZEFyZ3MgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvdW5kTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYm91bmRBcmdzLnB1c2goJyQnICsgaSk7XG4gICAgfVxuXG4gICAgYm91bmQgPSBGdW5jdGlvbignYmluZGVyJywgJ3JldHVybiBmdW5jdGlvbiAoJyArIGJvdW5kQXJncy5qb2luKCcsJykgKyAnKXsgcmV0dXJuIGJpbmRlci5hcHBseSh0aGlzLGFyZ3VtZW50cyk7IH0nKShiaW5kZXIpO1xuXG4gICAgaWYgKHRhcmdldC5wcm90b3R5cGUpIHtcbiAgICAgICAgdmFyIEVtcHR5ID0gZnVuY3Rpb24gRW1wdHkoKSB7fTtcbiAgICAgICAgRW1wdHkucHJvdG90eXBlID0gdGFyZ2V0LnByb3RvdHlwZTtcbiAgICAgICAgYm91bmQucHJvdG90eXBlID0gbmV3IEVtcHR5KCk7XG4gICAgICAgIEVtcHR5LnByb3RvdHlwZSA9IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJvdW5kO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9mdW5jdGlvbi1iaW5kL2ltcGxlbWVudGF0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSA1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciAkaXNOYU4gPSByZXF1aXJlKCcuL2hlbHBlcnMvaXNOYU4nKTtcbnZhciAkaXNGaW5pdGUgPSByZXF1aXJlKCcuL2hlbHBlcnMvaXNGaW5pdGUnKTtcblxudmFyIHNpZ24gPSByZXF1aXJlKCcuL2hlbHBlcnMvc2lnbicpO1xudmFyIG1vZCA9IHJlcXVpcmUoJy4vaGVscGVycy9tb2QnKTtcblxudmFyIElzQ2FsbGFibGUgPSByZXF1aXJlKCdpcy1jYWxsYWJsZScpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnZXMtdG8tcHJpbWl0aXZlL2VzNScpO1xuXG4vLyBodHRwczovL2VzNS5naXRodWIuaW8vI3g5XG52YXIgRVM1ID0ge1xuXHRUb1ByaW1pdGl2ZTogdG9QcmltaXRpdmUsXG5cblx0VG9Cb29sZWFuOiBmdW5jdGlvbiBUb0Jvb2xlYW4odmFsdWUpIHtcblx0XHRyZXR1cm4gQm9vbGVhbih2YWx1ZSk7XG5cdH0sXG5cdFRvTnVtYmVyOiBmdW5jdGlvbiBUb051bWJlcih2YWx1ZSkge1xuXHRcdHJldHVybiBOdW1iZXIodmFsdWUpO1xuXHR9LFxuXHRUb0ludGVnZXI6IGZ1bmN0aW9uIFRvSW50ZWdlcih2YWx1ZSkge1xuXHRcdHZhciBudW1iZXIgPSB0aGlzLlRvTnVtYmVyKHZhbHVlKTtcblx0XHRpZiAoJGlzTmFOKG51bWJlcikpIHsgcmV0dXJuIDA7IH1cblx0XHRpZiAobnVtYmVyID09PSAwIHx8ICEkaXNGaW5pdGUobnVtYmVyKSkgeyByZXR1cm4gbnVtYmVyOyB9XG5cdFx0cmV0dXJuIHNpZ24obnVtYmVyKSAqIE1hdGguZmxvb3IoTWF0aC5hYnMobnVtYmVyKSk7XG5cdH0sXG5cdFRvSW50MzI6IGZ1bmN0aW9uIFRvSW50MzIoeCkge1xuXHRcdHJldHVybiB0aGlzLlRvTnVtYmVyKHgpID4+IDA7XG5cdH0sXG5cdFRvVWludDMyOiBmdW5jdGlvbiBUb1VpbnQzMih4KSB7XG5cdFx0cmV0dXJuIHRoaXMuVG9OdW1iZXIoeCkgPj4+IDA7XG5cdH0sXG5cdFRvVWludDE2OiBmdW5jdGlvbiBUb1VpbnQxNih2YWx1ZSkge1xuXHRcdHZhciBudW1iZXIgPSB0aGlzLlRvTnVtYmVyKHZhbHVlKTtcblx0XHRpZiAoJGlzTmFOKG51bWJlcikgfHwgbnVtYmVyID09PSAwIHx8ICEkaXNGaW5pdGUobnVtYmVyKSkgeyByZXR1cm4gMDsgfVxuXHRcdHZhciBwb3NJbnQgPSBzaWduKG51bWJlcikgKiBNYXRoLmZsb29yKE1hdGguYWJzKG51bWJlcikpO1xuXHRcdHJldHVybiBtb2QocG9zSW50LCAweDEwMDAwKTtcblx0fSxcblx0VG9TdHJpbmc6IGZ1bmN0aW9uIFRvU3RyaW5nKHZhbHVlKSB7XG5cdFx0cmV0dXJuIFN0cmluZyh2YWx1ZSk7XG5cdH0sXG5cdFRvT2JqZWN0OiBmdW5jdGlvbiBUb09iamVjdCh2YWx1ZSkge1xuXHRcdHRoaXMuQ2hlY2tPYmplY3RDb2VyY2libGUodmFsdWUpO1xuXHRcdHJldHVybiBPYmplY3QodmFsdWUpO1xuXHR9LFxuXHRDaGVja09iamVjdENvZXJjaWJsZTogZnVuY3Rpb24gQ2hlY2tPYmplY3RDb2VyY2libGUodmFsdWUsIG9wdE1lc3NhZ2UpIHtcblx0XHQvKiBqc2hpbnQgZXFudWxsOnRydWUgKi9cblx0XHRpZiAodmFsdWUgPT0gbnVsbCkge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihvcHRNZXNzYWdlIHx8ICdDYW5ub3QgY2FsbCBtZXRob2Qgb24gJyArIHZhbHVlKTtcblx0XHR9XG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9LFxuXHRJc0NhbGxhYmxlOiBJc0NhbGxhYmxlLFxuXHRTYW1lVmFsdWU6IGZ1bmN0aW9uIFNhbWVWYWx1ZSh4LCB5KSB7XG5cdFx0aWYgKHggPT09IHkpIHsgLy8gMCA9PT0gLTAsIGJ1dCB0aGV5IGFyZSBub3QgaWRlbnRpY2FsLlxuXHRcdFx0aWYgKHggPT09IDApIHsgcmV0dXJuIDEgLyB4ID09PSAxIC8geTsgfVxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdHJldHVybiAkaXNOYU4oeCkgJiYgJGlzTmFOKHkpO1xuXHR9LFxuXG5cdC8vIGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi81LjEvI3NlYy04XG5cdFR5cGU6IGZ1bmN0aW9uIFR5cGUoeCkge1xuXHRcdGlmICh4ID09PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gJ051bGwnO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIHggPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRyZXR1cm4gJ1VuZGVmaW5lZCc7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2YgeCA9PT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgeCA9PT0gJ29iamVjdCcpIHtcblx0XHRcdHJldHVybiAnT2JqZWN0Jztcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiB4ID09PSAnbnVtYmVyJykge1xuXHRcdFx0cmV0dXJuICdOdW1iZXInO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIHggPT09ICdib29sZWFuJykge1xuXHRcdFx0cmV0dXJuICdCb29sZWFuJztcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiB4ID09PSAnc3RyaW5nJykge1xuXHRcdFx0cmV0dXJuICdTdHJpbmcnO1xuXHRcdH1cblx0fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBFUzU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZXMtYWJzdHJhY3QvZXM1LmpzXG4vLyBtb2R1bGUgaWQgPSA1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbnZhciBpc1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vaGVscGVycy9pc1ByaW1pdGl2ZScpO1xuXG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJ2lzLWNhbGxhYmxlJyk7XG5cbi8vIGh0dHBzOi8vZXM1LmdpdGh1Yi5pby8jeDguMTJcbnZhciBFUzVpbnRlcm5hbFNsb3RzID0ge1xuXHQnW1tEZWZhdWx0VmFsdWVdXSc6IGZ1bmN0aW9uIChPLCBoaW50KSB7XG5cdFx0dmFyIGFjdHVhbEhpbnQgPSBoaW50IHx8ICh0b1N0ci5jYWxsKE8pID09PSAnW29iamVjdCBEYXRlXScgPyBTdHJpbmcgOiBOdW1iZXIpO1xuXG5cdFx0aWYgKGFjdHVhbEhpbnQgPT09IFN0cmluZyB8fCBhY3R1YWxIaW50ID09PSBOdW1iZXIpIHtcblx0XHRcdHZhciBtZXRob2RzID0gYWN0dWFsSGludCA9PT0gU3RyaW5nID8gWyd0b1N0cmluZycsICd2YWx1ZU9mJ10gOiBbJ3ZhbHVlT2YnLCAndG9TdHJpbmcnXTtcblx0XHRcdHZhciB2YWx1ZSwgaTtcblx0XHRcdGZvciAoaSA9IDA7IGkgPCBtZXRob2RzLmxlbmd0aDsgKytpKSB7XG5cdFx0XHRcdGlmIChpc0NhbGxhYmxlKE9bbWV0aG9kc1tpXV0pKSB7XG5cdFx0XHRcdFx0dmFsdWUgPSBPW21ldGhvZHNbaV1dKCk7XG5cdFx0XHRcdFx0aWYgKGlzUHJpbWl0aXZlKHZhbHVlKSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignTm8gZGVmYXVsdCB2YWx1ZScpO1xuXHRcdH1cblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdpbnZhbGlkIFtbRGVmYXVsdFZhbHVlXV0gaGludCBzdXBwbGllZCcpO1xuXHR9XG59O1xuXG4vLyBodHRwczovL2VzNS5naXRodWIuaW8vI3g5XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIFRvUHJpbWl0aXZlKGlucHV0LCBQcmVmZXJyZWRUeXBlKSB7XG5cdGlmIChpc1ByaW1pdGl2ZShpbnB1dCkpIHtcblx0XHRyZXR1cm4gaW5wdXQ7XG5cdH1cblx0cmV0dXJuIEVTNWludGVybmFsU2xvdHNbJ1tbRGVmYXVsdFZhbHVlXV0nXShpbnB1dCwgUHJlZmVycmVkVHlwZSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VzLXRvLXByaW1pdGl2ZS9lczUuanNcbi8vIG1vZHVsZSBpZCA9IDU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIGhhcyA9IHJlcXVpcmUoJ2hhcycpO1xudmFyIHJlZ2V4RXhlYyA9IFJlZ0V4cC5wcm90b3R5cGUuZXhlYztcbnZhciBnT1BEID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxudmFyIHRyeVJlZ2V4RXhlY0NhbGwgPSBmdW5jdGlvbiB0cnlSZWdleEV4ZWModmFsdWUpIHtcblx0dHJ5IHtcblx0XHR2YXIgbGFzdEluZGV4ID0gdmFsdWUubGFzdEluZGV4O1xuXHRcdHZhbHVlLmxhc3RJbmRleCA9IDA7XG5cblx0XHRyZWdleEV4ZWMuY2FsbCh2YWx1ZSk7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0gZmluYWxseSB7XG5cdFx0dmFsdWUubGFzdEluZGV4ID0gbGFzdEluZGV4O1xuXHR9XG59O1xudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbnZhciByZWdleENsYXNzID0gJ1tvYmplY3QgUmVnRXhwXSc7XG52YXIgaGFzVG9TdHJpbmdUYWcgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBTeW1ib2wudG9TdHJpbmdUYWcgPT09ICdzeW1ib2wnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzUmVnZXgodmFsdWUpIHtcblx0aWYgKCF2YWx1ZSB8fCB0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cdGlmICghaGFzVG9TdHJpbmdUYWcpIHtcblx0XHRyZXR1cm4gdG9TdHIuY2FsbCh2YWx1ZSkgPT09IHJlZ2V4Q2xhc3M7XG5cdH1cblxuXHR2YXIgZGVzY3JpcHRvciA9IGdPUEQodmFsdWUsICdsYXN0SW5kZXgnKTtcblx0dmFyIGhhc0xhc3RJbmRleERhdGFQcm9wZXJ0eSA9IGRlc2NyaXB0b3IgJiYgaGFzKGRlc2NyaXB0b3IsICd2YWx1ZScpO1xuXHRpZiAoIWhhc0xhc3RJbmRleERhdGFQcm9wZXJ0eSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHJldHVybiB0cnlSZWdleEV4ZWNDYWxsKHZhbHVlKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaXMtcmVnZXgvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiaW5kID0gcmVxdWlyZSgnZnVuY3Rpb24tYmluZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJpbmQuY2FsbChGdW5jdGlvbi5jYWxsLCBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9oYXMvc3JjL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBFUyA9IHJlcXVpcmUoJ2VzLWFic3RyYWN0L2VzNicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGZpbmQocHJlZGljYXRlKSB7XG5cdHZhciBsaXN0ID0gRVMuVG9PYmplY3QodGhpcyk7XG5cdHZhciBsZW5ndGggPSBFUy5Ub0ludGVnZXIoRVMuVG9MZW5ndGgobGlzdC5sZW5ndGgpKTtcblx0aWYgKCFFUy5Jc0NhbGxhYmxlKHByZWRpY2F0ZSkpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdBcnJheSNmaW5kOiBwcmVkaWNhdGUgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cdH1cblx0aWYgKGxlbmd0aCA9PT0gMCkge1xuXHRcdHJldHVybiB1bmRlZmluZWQ7XG5cdH1cblx0dmFyIHRoaXNBcmcgPSBhcmd1bWVudHNbMV07XG5cdGZvciAodmFyIGkgPSAwLCB2YWx1ZTsgaSA8IGxlbmd0aDsgaSsrKSB7XG5cdFx0dmFsdWUgPSBsaXN0W2ldO1xuXHRcdGlmIChFUy5DYWxsKHByZWRpY2F0ZSwgdGhpc0FyZywgW3ZhbHVlLCBpLCBsaXN0XSkpIHtcblx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHVuZGVmaW5lZDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYXJyYXkucHJvdG90eXBlLmZpbmQvaW1wbGVtZW50YXRpb24uanNcbi8vIG1vZHVsZSBpZCA9IDYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnZXRQb2x5ZmlsbCgpIHtcblx0Ly8gRGV0ZWN0IGlmIGFuIGltcGxlbWVudGF0aW9uIGV4aXN0c1xuXHQvLyBEZXRlY3QgZWFybHkgaW1wbGVtZW50YXRpb25zIHdoaWNoIHNraXBwZWQgaG9sZXMgaW4gc3BhcnNlIGFycmF5c1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc3BhcnNlLWFycmF5c1xuXHR2YXIgaW1wbGVtZW50ZWQgPSBBcnJheS5wcm90b3R5cGUuZmluZCAmJiBbLCAxXS5maW5kKGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSkgIT09IDE7XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGdsb2JhbC1yZXF1aXJlXG5cdHJldHVybiBpbXBsZW1lbnRlZCA/IEFycmF5LnByb3RvdHlwZS5maW5kIDogcmVxdWlyZSgnLi9pbXBsZW1lbnRhdGlvbicpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9hcnJheS5wcm90b3R5cGUuZmluZC9wb2x5ZmlsbC5qc1xuLy8gbW9kdWxlIGlkID0gNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZGVmaW5lID0gcmVxdWlyZSgnZGVmaW5lLXByb3BlcnRpZXMnKTtcbnZhciBnZXRQb2x5ZmlsbCA9IHJlcXVpcmUoJy4vcG9seWZpbGwnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzaGltQXJyYXlQcm90b3R5cGVGaW5kKCkge1xuXHR2YXIgcG9seWZpbGwgPSBnZXRQb2x5ZmlsbCgpO1xuXG5cdGRlZmluZShBcnJheS5wcm90b3R5cGUsIHsgZmluZDogcG9seWZpbGwgfSwge1xuXHRcdGZpbmQ6IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBBcnJheS5wcm90b3R5cGUuZmluZCAhPT0gcG9seWZpbGw7XG5cdFx0fVxuXHR9KTtcblxuXHRyZXR1cm4gcG9seWZpbGw7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2FycmF5LnByb3RvdHlwZS5maW5kL3NoaW0uanNcbi8vIG1vZHVsZSBpZCA9IDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+PHN5bWJvbCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNzkyIDE3OTJcXFwiIGlkPVxcXCJsZXBsYXllci1pY29uLWFycm93cy1hbHRcXFwiPjx0aXRsZT5hcnJvd3MtYWx0PC90aXRsZT48cGF0aCBkPVxcXCJNMTQxMSA1NDFsLTM1NSAzNTUgMzU1IDM1NSAxNDQtMTQ0cTI5LTMxIDcwLTE0IDM5IDE3IDM5IDU5djQ0OHEwIDI2LTE5IDQ1dC00NSAxOWgtNDQ4cS00MiAwLTU5LTQwLTE3LTM5IDE0LTY5bDE0NC0xNDQtMzU1LTM1NS0zNTUgMzU1IDE0NCAxNDRxMzEgMzAgMTQgNjktMTcgNDAtNTkgNDBoLTQ0OHEtMjYgMC00NS0xOXQtMTktNDV2LTQ0OHEwLTQyIDQwLTU5IDM5LTE3IDY5IDE0bDE0NCAxNDQgMzU1LTM1NS0zNTUtMzU1LTE0NCAxNDRxLTE5IDE5LTQ1IDE5LTEyIDAtMjQtNS00MC0xNy00MC01OXYtNDQ4cTAtMjYgMTktNDV0NDUtMTloNDQ4cTQyIDAgNTkgNDAgMTcgMzktMTQgNjlsLTE0NCAxNDQgMzU1IDM1NSAzNTUtMzU1LTE0NC0xNDRxLTMxLTMwLTE0LTY5IDE3LTQwIDU5LTQwaDQ0OHEyNiAwIDQ1IDE5dDE5IDQ1djQ0OHEwIDQyLTM5IDU5LTEzIDUtMjUgNS0yNiAwLTQ1LTE5elxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi1iYWNrd2FyZFxcXCI+PHRpdGxlPmJhY2t3YXJkPC90aXRsZT48cGF0aCBkPVxcXCJNMTY4MyAxNDFxMTktMTkgMzItMTN0MTMgMzJ2MTQ3MnEwIDI2LTEzIDMydC0zMi0xM2wtNzEwLTcxMHEtOC05LTEzLTE5djcxMHEwIDI2LTEzIDMydC0zMi0xM2wtNzEwLTcxMHEtMTktMTktMTktNDV0MTktNDVsNzEwLTcxMHExOS0xOSAzMi0xM3QxMyAzMnY3MTBxNS0xMSAxMy0xOXpcXFwiLz48L3N5bWJvbD48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDE3OTIgMTc5MlxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tYnVsbHNleWVcXFwiPjx0aXRsZT5idWxsc2V5ZTwvdGl0bGU+PHBhdGggZD1cXFwiTTExNTIgODk2cTAgMTA2LTc1IDE4MXQtMTgxIDc1LTE4MS03NS03NS0xODEgNzUtMTgxIDE4MS03NSAxODEgNzUgNzUgMTgxem0xMjggMHEwLTE1OS0xMTIuNS0yNzEuNXQtMjcxLjUtMTEyLjUtMjcxLjUgMTEyLjUtMTEyLjUgMjcxLjUgMTEyLjUgMjcxLjUgMjcxLjUgMTEyLjUgMjcxLjUtMTEyLjUgMTEyLjUtMjcxLjV6bTEyOCAwcTAgMjEyLTE1MCAzNjJ0LTM2MiAxNTAtMzYyLTE1MC0xNTAtMzYyIDE1MC0zNjIgMzYyLTE1MCAzNjIgMTUwIDE1MCAzNjJ6bTEyOCAwcTAtMTMwLTUxLTI0OC41dC0xMzYuNS0yMDQtMjA0LTEzNi41LTI0OC41LTUxLTI0OC41IDUxLTIwNCAxMzYuNS0xMzYuNSAyMDQtNTEgMjQ4LjUgNTEgMjQ4LjUgMTM2LjUgMjA0IDIwNCAxMzYuNSAyNDguNSA1MSAyNDguNS01MSAyMDQtMTM2LjUgMTM2LjUtMjA0IDUxLTI0OC41em0xMjggMHEwIDIwOS0xMDMgMzg1LjV0LTI3OS41IDI3OS41LTM4NS41IDEwMy0zODUuNS0xMDMtMjc5LjUtMjc5LjUtMTAzLTM4NS41IDEwMy0zODUuNSAyNzkuNS0yNzkuNSAzODUuNS0xMDMgMzg1LjUgMTAzIDI3OS41IDI3OS41IDEwMyAzODUuNXpcXFwiLz48L3N5bWJvbD48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDQwMCAzODBcXFwiIGlkPVxcXCJsZXBsYXllci1pY29uLWNhdFxcXCI+PHRpdGxlPmNhdDwvdGl0bGU+IDxwYXRoIGQ9XFxcIk0gMTUxLjM0OTA0LDMwNy4yMDQ1NSBMIDI2NC4zNDkwNCwzMDcuMjA0NTUgQyAyNjQuMzQ5MDQsMjkxLjE0MDk2IDI2My4yMDIxLDI4Ny45NTQ1NSAyMzYuNTk5MDQsMjg3Ljk1NDU1IEMgMjQwLjg0OTA0LDI3NS4yMDQ1NSAyNTguMTI0MjQsMjQ0LjM1ODA4IDI2Ny43MjQwNCwyNDQuMzU4MDggQyAyNzYuMjE3MDcsMjQ0LjM1ODA4IDI4Ni4zNDkwNCwyNDQuODI1OTIgMjg2LjM0OTA0LDI2NC4yMDQ1NSBDIDI4Ni4zNDkwNCwyODYuMjA0NTUgMzIzLjM3MTcxLDMyMS42NzU0NyAzMzIuMzQ5MDQsMzA3LjIwNDU1IEMgMzQ1LjcyNzY5LDI4NS42Mzg5NyAzMDkuMzQ5MDQsMjkyLjIxNTE0IDMwOS4zNDkwNCwyNDAuMjA0NTUgQyAzMDkuMzQ5MDQsMTY5LjA1MTM1IDM1MC44NzQxNywxNzkuMTgwNzEgMzUwLjg3NDE3LDEzOS4yMDQ1NSBDIDM1MC44NzQxNywxMTkuMjA0NTUgMzQ1LjM0OTA0LDExNi41MDM3NCAzNDUuMzQ5MDQsMTAyLjIwNDU1IEMgMzQ1LjM0OTA0LDgzLjMwNjk1IDM2MS45OTcxNyw4NC40MDM1NzcgMzU4Ljc1ODA1LDY4LjczNDg3OSBDIDM1Ni41MjA2MSw1Ny45MTE2NTYgMzU0Ljc2OTYyLDQ5LjIzMTk5IDM1My40NjUxNiwzNi4xNDM4ODkgQyAzNTIuNTM5NTksMjYuODU3MzA1IDM1Mi4yNDQ1MiwxNi45NTkzOTggMzQyLjU5ODU1LDE3LjM1NzM4MiBDIDMzMS4yNjUwNSwxNy44MjQ5OTIgMzI2Ljk2NTQ5LDM3Ljc3NDE5IDMwOS4zNDkwNCwzOS4yMDQ1NDkgQyAyOTEuNzY4NTEsNDAuNjMxOTkxIDI3Ni43NzgzNCwyNC4yMzgwMjggMjY5Ljk3NDA0LDI2LjU3OTU0OSBDIDI2My4yMjcwOSwyOC45MDEzMzQgMjY1LjM0OTA0LDQ3LjIwNDU0OSAyNjkuMzQ5MDQsNjAuMjA0NTQ5IEMgMjc1LjYzNTg4LDgwLjYzNjc3MSAyODkuMzQ5MDQsMTA3LjIwNDU1IDI2NC4zNDkwNCwxMTEuMjA0NTUgQyAyMzkuMzQ5MDQsMTE1LjIwNDU1IDE5Ni4zNDkwNCwxMTkuMjA0NTUgMTY1LjM0OTA0LDE2MC4yMDQ1NSBDIDEzNC4zNDkwNCwyMDEuMjA0NTUgMTM1LjQ5MzQyLDI0OS4zMjEyIDEyMy4zNDkwNCwyNjQuMjA0NTUgQyA4Mi41OTA2OTYsMzE0LjE1NTI5IDQwLjgyMzkxOSwyOTMuNjQ2MjUgNDAuODIzOTE5LDMzNS4yMDQ1NSBDIDQwLjgyMzkxOSwzNTMuODEwMTkgNzIuMzQ5MDQ1LDM2Ny4yMDQ1NSA3Ny4zNDkwNDUsMzYxLjIwNDU1IEMgODIuMzQ5MDQ1LDM1NS4yMDQ1NSAzNC44NjM3NjQsMzM3LjMyNTg3IDg3Ljk5NTQ5MiwzMTYuMjA0NTUgQyAxMzMuMzg3MTEsMjk4LjE2MDE0IDEzNy40MzkxNCwyOTQuNDc2NjMgMTUxLjM0OTA0LDMwNy4yMDQ1NSB6IFxcXCIgc3R5bGU9XFxcImZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpldmVub2RkO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDoxcHg7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW9wYWNpdHk6MVxcXCIvPiA8L3N5bWJvbD48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDE3OTIgMTc5MlxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tY29tbWVudGluZy1vXFxcIj48dGl0bGU+Y29tbWVudGluZy1vPC90aXRsZT48cGF0aCBkPVxcXCJNNjQwIDg5NnEwIDUzLTM3LjUgOTAuNXQtOTAuNSAzNy41LTkwLjUtMzcuNS0zNy41LTkwLjUgMzcuNS05MC41IDkwLjUtMzcuNSA5MC41IDM3LjUgMzcuNSA5MC41em0zODQgMHEwIDUzLTM3LjUgOTAuNXQtOTAuNSAzNy41LTkwLjUtMzcuNS0zNy41LTkwLjUgMzcuNS05MC41IDkwLjUtMzcuNSA5MC41IDM3LjUgMzcuNSA5MC41em0zODQgMHEwIDUzLTM3LjUgOTAuNXQtOTAuNSAzNy41LTkwLjUtMzcuNS0zNy41LTkwLjUgMzcuNS05MC41IDkwLjUtMzcuNSA5MC41IDM3LjUgMzcuNSA5MC41em0tNTEyLTUxMnEtMjA0IDAtMzgxLjUgNjkuNXQtMjgyIDE4Ny41LTEwNC41IDI1NXEwIDExMiA3MS41IDIxMy41dDIwMS41IDE3NS41bDg3IDUwLTI3IDk2cS0yNCA5MS03MCAxNzIgMTUyLTYzIDI3NS0xNzFsNDMtMzggNTcgNnE2OSA4IDEzMCA4IDIwNCAwIDM4MS41LTY5LjV0MjgyLTE4Ny41IDEwNC41LTI1NS0xMDQuNS0yNTUtMjgyLTE4Ny41LTM4MS41LTY5LjV6bTg5NiA1MTJxMCAxNzQtMTIwIDMyMS41dC0zMjYgMjMzLTQ1MCA4NS41cS03MCAwLTE0NS04LTE5OCAxNzUtNDYwIDI0Mi00OSAxNC0xMTQgMjJoLTVxLTE1IDAtMjctMTAuNXQtMTYtMjcuNXYtMXEtMy00LS41LTEydDItMTAgNC41LTkuNWw2LTkgNy04LjUgOC05cTctOCAzMS0zNC41dDM0LjUtMzggMzEtMzkuNSAzMi41LTUxIDI3LTU5IDI2LTc2cS0xNTctODktMjQ3LjUtMjIwdC05MC41LTI4MXEwLTEzMCA3MS0yNDguNXQxOTEtMjA0LjUgMjg2LTEzNi41IDM0OC01MC41IDM0OCA1MC41IDI4NiAxMzYuNSAxOTEgMjA0LjUgNzEgMjQ4LjV6XFxcIi8+PC9zeW1ib2w+PHN5bWJvbCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNzkyIDE3OTJcXFwiIGlkPVxcXCJsZXBsYXllci1pY29uLWRvd25sb2FkXFxcIj48dGl0bGU+ZG93bmxvYWQ8L3RpdGxlPjxwYXRoIGQ9XFxcIk0xMzQ0IDEzNDRxMC0yNi0xOS00NXQtNDUtMTktNDUgMTktMTkgNDUgMTkgNDUgNDUgMTkgNDUtMTkgMTktNDV6bTI1NiAwcTAtMjYtMTktNDV0LTQ1LTE5LTQ1IDE5LTE5IDQ1IDE5IDQ1IDQ1IDE5IDQ1LTE5IDE5LTQ1em0xMjgtMjI0djMyMHEwIDQwLTI4IDY4dC02OCAyOGgtMTQ3MnEtNDAgMC02OC0yOHQtMjgtNjh2LTMyMHEwLTQwIDI4LTY4dDY4LTI4aDQ2NWwxMzUgMTM2cTU4IDU2IDEzNiA1NnQxMzYtNTZsMTM2LTEzNmg0NjRxNDAgMCA2OCAyOHQyOCA2OHptLTMyNS01NjlxMTcgNDEtMTQgNzBsLTQ0OCA0NDhxLTE4IDE5LTQ1IDE5dC00NS0xOWwtNDQ4LTQ0OHEtMzEtMjktMTQtNzAgMTctMzkgNTktMzloMjU2di00NDhxMC0yNiAxOS00NXQ0NS0xOWgyNTZxMjYgMCA0NSAxOXQxOSA0NXY0NDhoMjU2cTQyIDAgNTkgMzl6XFxcIi8+PC9zeW1ib2w+PHN5bWJvbCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNzkyIDE3OTJcXFwiIGlkPVxcXCJsZXBsYXllci1pY29uLWVkaXRcXFwiPjx0aXRsZT5lZGl0PC90aXRsZT48cGF0aCBkPVxcXCJNODg4IDExODRsMTE2LTExNi0xNTItMTUyLTExNiAxMTZ2NTZoOTZ2OTZoNTZ6bTQ0MC03MjBxLTE2LTE2LTMzIDFsLTM1MCAzNTBxLTE3IDE3LTEgMzN0MzMtMWwzNTAtMzUwcTE3LTE3IDEtMzN6bTgwIDU5NHYxOTBxMCAxMTktODQuNSAyMDMuNXQtMjAzLjUgODQuNWgtODMycS0xMTkgMC0yMDMuNS04NC41dC04NC41LTIwMy41di04MzJxMC0xMTkgODQuNS0yMDMuNXQyMDMuNS04NC41aDgzMnE2MyAwIDExNyAyNSAxNSA3IDE4IDIzIDMgMTctOSAyOWwtNDkgNDlxLTE0IDE0LTMyIDgtMjMtNi00NS02aC04MzJxLTY2IDAtMTEzIDQ3dC00NyAxMTN2ODMycTAgNjYgNDcgMTEzdDExMyA0N2g4MzJxNjYgMCAxMTMtNDd0NDctMTEzdi0xMjZxMC0xMyA5LTIybDY0LTY0cTE1LTE1IDM1LTd0MjAgMjl6bS05Ni03MzhsMjg4IDI4OC02NzIgNjcyaC0yODh2LTI4OHptNDQ0IDEzMmwtOTIgOTItMjg4LTI4OCA5Mi05MnEyOC0yOCA2OC0yOHQ2OCAyOGwxNTIgMTUycTI4IDI4IDI4IDY4dC0yOCA2OHpcXFwiLz48L3N5bWJvbD48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDE3OTIgMTc5MlxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tZm9yd2FyZFxcXCI+PHRpdGxlPmZvcndhcmQ8L3RpdGxlPjxwYXRoIGQ9XFxcIk0xMDkgMTY1MXEtMTkgMTktMzIgMTN0LTEzLTMydi0xNDcycTAtMjYgMTMtMzJ0MzIgMTNsNzEwIDcxMHE4IDggMTMgMTl2LTcxMHEwLTI2IDEzLTMydDMyIDEzbDcxMCA3MTBxMTkgMTkgMTkgNDV0LTE5IDQ1bC03MTAgNzEwcS0xOSAxOS0zMiAxM3QtMTMtMzJ2LTcxMHEtNSAxMC0xMyAxOXpcXFwiLz48L3N5bWJvbD48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDE3OTIgMTc5MlxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24taW5mb1xcXCI+PHRpdGxlPmluZm88L3RpdGxlPjxwYXRoIGQ9XFxcIk0xMjE2IDEzNDR2MTI4cTAgMjYtMTkgNDV0LTQ1IDE5aC01MTJxLTI2IDAtNDUtMTl0LTE5LTQ1di0xMjhxMC0yNiAxOS00NXQ0NS0xOWg2NHYtMzg0aC02NHEtMjYgMC00NS0xOXQtMTktNDV2LTEyOHEwLTI2IDE5LTQ1dDQ1LTE5aDM4NHEyNiAwIDQ1IDE5dDE5IDQ1djU3Nmg2NHEyNiAwIDQ1IDE5dDE5IDQ1em0tMTI4LTExNTJ2MTkycTAgMjYtMTkgNDV0LTQ1IDE5aC0yNTZxLTI2IDAtNDUtMTl0LTE5LTQ1di0xOTJxMC0yNiAxOS00NXQ0NS0xOWgyNTZxMjYgMCA0NSAxOXQxOSA0NXpcXFwiLz48L3N5bWJvbD48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDE3OTIgMTc5MlxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tbGlzdC11bFxcXCI+PHRpdGxlPmxpc3QtdWw8L3RpdGxlPjxwYXRoIGQ9XFxcIk0zODQgMTQwOHEwIDgwLTU2IDEzNnQtMTM2IDU2LTEzNi01Ni01Ni0xMzYgNTYtMTM2IDEzNi01NiAxMzYgNTYgNTYgMTM2em0wLTUxMnEwIDgwLTU2IDEzNnQtMTM2IDU2LTEzNi01Ni01Ni0xMzYgNTYtMTM2IDEzNi01NiAxMzYgNTYgNTYgMTM2em0xNDA4IDQxNnYxOTJxMCAxMy05LjUgMjIuNXQtMjIuNSA5LjVoLTEyMTZxLTEzIDAtMjIuNS05LjV0LTkuNS0yMi41di0xOTJxMC0xMyA5LjUtMjIuNXQyMi41LTkuNWgxMjE2cTEzIDAgMjIuNSA5LjV0OS41IDIyLjV6bS0xNDA4LTkyOHEwIDgwLTU2IDEzNnQtMTM2IDU2LTEzNi01Ni01Ni0xMzYgNTYtMTM2IDEzNi01NiAxMzYgNTYgNTYgMTM2em0xNDA4IDQxNnYxOTJxMCAxMy05LjUgMjIuNXQtMjIuNSA5LjVoLTEyMTZxLTEzIDAtMjIuNS05LjV0LTkuNS0yMi41di0xOTJxMC0xMyA5LjUtMjIuNXQyMi41LTkuNWgxMjE2cTEzIDAgMjIuNSA5LjV0OS41IDIyLjV6bTAtNTEydjE5MnEwIDEzLTkuNSAyMi41dC0yMi41IDkuNWgtMTIxNnEtMTMgMC0yMi41LTkuNXQtOS41LTIyLjV2LTE5MnEwLTEzIDkuNS0yMi41dDIyLjUtOS41aDEyMTZxMTMgMCAyMi41IDkuNXQ5LjUgMjIuNXpcXFwiLz48L3N5bWJvbD48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDE3OTIgMTc5MlxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tbWFnaWNcXFwiPjx0aXRsZT5tYWdpYzwvdGl0bGU+PHBhdGggZD1cXFwiTTEyNTQgNTgxbDI5My0yOTMtMTA3LTEwNy0yOTMgMjkzem00NDctMjkzcTAgMjctMTggNDVsLTEyODYgMTI4NnEtMTggMTgtNDUgMTh0LTQ1LTE4bC0xOTgtMTk4cS0xOC0xOC0xOC00NXQxOC00NWwxMjg2LTEyODZxMTgtMTggNDUtMTh0NDUgMThsMTk4IDE5OHExOCAxOCAxOCA0NXptLTEzNTEtMTkwbDk4IDMwLTk4IDMwLTMwIDk4LTMwLTk4LTk4LTMwIDk4LTMwIDMwLTk4em0zNTAgMTYybDE5NiA2MC0xOTYgNjAtNjAgMTk2LTYwLTE5Ni0xOTYtNjAgMTk2LTYwIDYwLTE5NnptOTMwIDQ3OGw5OCAzMC05OCAzMC0zMCA5OC0zMC05OC05OC0zMCA5OC0zMCAzMC05OHptLTY0MC02NDBsOTggMzAtOTggMzAtMzAgOTgtMzAtOTgtOTgtMzAgOTgtMzAgMzAtOTh6XFxcIi8+PC9zeW1ib2w+PHN5bWJvbCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNzkyIDE3OTJcXFwiIGlkPVxcXCJsZXBsYXllci1pY29uLXBhdXNlXFxcIj48dGl0bGU+cGF1c2U8L3RpdGxlPjxwYXRoIGQ9XFxcIk0xNjY0IDE5MnYxNDA4cTAgMjYtMTkgNDV0LTQ1IDE5aC01MTJxLTI2IDAtNDUtMTl0LTE5LTQ1di0xNDA4cTAtMjYgMTktNDV0NDUtMTloNTEycTI2IDAgNDUgMTl0MTkgNDV6bS04OTYgMHYxNDA4cTAgMjYtMTkgNDV0LTQ1IDE5aC01MTJxLTI2IDAtNDUtMTl0LTE5LTQ1di0xNDA4cTAtMjYgMTktNDV0NDUtMTloNTEycTI2IDAgNDUgMTl0MTkgNDV6XFxcIi8+PC9zeW1ib2w+PHN5bWJvbCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNzkyIDE3OTJcXFwiIGlkPVxcXCJsZXBsYXllci1pY29uLXBsYW5lXFxcIj48dGl0bGU+cGxhbmU8L3RpdGxlPjxwYXRoIGQ9XFxcIk0xNTY4IDE2MHE0NCA1MiAxMiAxNDh0LTEwOCAxNzJsLTE2MSAxNjEgMTYwIDY5NnE1IDE5LTEyIDMzbC0xMjggOTZxLTcgNi0xOSA2LTQgMC03LTEtMTUtMy0yMS0xNmwtMjc5LTUwOC0yNTkgMjU5IDUzIDE5NHE1IDE3LTggMzFsLTk2IDk2cS05IDktMjMgOWgtMnEtMTUtMi0yNC0xM2wtMTg5LTI1Mi0yNTItMTg5cS0xMS03LTEzLTIzLTEtMTMgOS0yNWw5Ni05N3E5LTkgMjMtOSA2IDAgOCAxbDE5NCA1MyAyNTktMjU5LTUwOC0yNzlxLTE0LTgtMTctMjQtMi0xNiA5LTI3bDEyOC0xMjhxMTQtMTMgMzAtOGw2NjUgMTU5IDE2MC0xNjBxNzYtNzYgMTcyLTEwOHQxNDggMTJ6XFxcIi8+PC9zeW1ib2w+PHN5bWJvbCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNzkyIDE3OTJcXFwiIGlkPVxcXCJsZXBsYXllci1pY29uLXBsYXlcXFwiPjx0aXRsZT5wbGF5PC90aXRsZT48cGF0aCBkPVxcXCJNMTU3NiA5MjdsLTEzMjggNzM4cS0yMyAxMy0zOS41IDN0LTE2LjUtMzZ2LTE0NzJxMC0yNiAxNi41LTM2dDM5LjUgM2wxMzI4IDczOHEyMyAxMyAyMyAzMXQtMjMgMzF6XFxcIi8+PC9zeW1ib2w+PHN5bWJvbCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNzkyIDE3OTJcXFwiIGlkPVxcXCJsZXBsYXllci1pY29uLXBsdXNcXFwiPjx0aXRsZT5wbHVzPC90aXRsZT48cGF0aCBkPVxcXCJNMTYwMCA3MzZ2MTkycTAgNDAtMjggNjh0LTY4IDI4aC00MTZ2NDE2cTAgNDAtMjggNjh0LTY4IDI4aC0xOTJxLTQwIDAtNjgtMjh0LTI4LTY4di00MTZoLTQxNnEtNDAgMC02OC0yOHQtMjgtNjh2LTE5MnEwLTQwIDI4LTY4dDY4LTI4aDQxNnYtNDE2cTAtNDAgMjgtNjh0NjgtMjhoMTkycTQwIDAgNjggMjh0MjggNjh2NDE2aDQxNnE0MCAwIDY4IDI4dDI4IDY4elxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi1yZWRvXFxcIj48dGl0bGU+cmVkbzwvdGl0bGU+PHBhdGggZD1cXFwiTTE2NjQgMjU2djQ0OHEwIDI2LTE5IDQ1dC00NSAxOWgtNDQ4cS00MiAwLTU5LTQwLTE3LTM5IDE0LTY5bDEzOC0xMzhxLTE0OC0xMzctMzQ5LTEzNy0xMDQgMC0xOTguNSA0MC41dC0xNjMuNSAxMDkuNS0xMDkuNSAxNjMuNS00MC41IDE5OC41IDQwLjUgMTk4LjUgMTA5LjUgMTYzLjUgMTYzLjUgMTA5LjUgMTk4LjUgNDAuNXExMTkgMCAyMjUtNTJ0MTc5LTE0N3E3LTEwIDIzLTEyIDE0IDAgMjUgOWwxMzcgMTM4cTkgOCA5LjUgMjAuNXQtNy41IDIyLjVxLTEwOSAxMzItMjY0IDIwNC41dC0zMjcgNzIuNXEtMTU2IDAtMjk4LTYxdC0yNDUtMTY0LTE2NC0yNDUtNjEtMjk4IDYxLTI5OCAxNjQtMjQ1IDI0NS0xNjQgMjk4LTYxcTE0NyAwIDI4NC41IDU1LjV0MjQ0LjUgMTU2LjVsMTMwLTEyOXEyOS0zMSA3MC0xNCAzOSAxNyAzOSA1OXpcXFwiLz48L3N5bWJvbD48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDE3OTIgMTc5MlxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tcmVmcmVzaFxcXCI+PHRpdGxlPnJlZnJlc2g8L3RpdGxlPjxwYXRoIGQ9XFxcIk0xNjM5IDEwNTZxMCA1LTEgNy02NCAyNjgtMjY4IDQzNC41dC00NzggMTY2LjVxLTE0NiAwLTI4Mi41LTU1dC0yNDMuNS0xNTdsLTEyOSAxMjlxLTE5IDE5LTQ1IDE5dC00NS0xOS0xOS00NXYtNDQ4cTAtMjYgMTktNDV0NDUtMTloNDQ4cTI2IDAgNDUgMTl0MTkgNDUtMTkgNDVsLTEzNyAxMzdxNzEgNjYgMTYxIDEwMnQxODcgMzZxMTM0IDAgMjUwLTY1dDE4Ni0xNzlxMTEtMTcgNTMtMTE3IDgtMjMgMzAtMjNoMTkycTEzIDAgMjIuNSA5LjV0OS41IDIyLjV6bTI1LTgwMHY0NDhxMCAyNi0xOSA0NXQtNDUgMTloLTQ0OHEtMjYgMC00NS0xOXQtMTktNDUgMTktNDVsMTM4LTEzOHEtMTQ4LTEzNy0zNDktMTM3LTEzNCAwLTI1MCA2NXQtMTg2IDE3OXEtMTEgMTctNTMgMTE3LTggMjMtMzAgMjNoLTE5OXEtMTMgMC0yMi41LTkuNXQtOS41LTIyLjV2LTdxNjUtMjY4IDI3MC00MzQuNXQ0ODAtMTY2LjVxMTQ2IDAgMjg0IDU1LjV0MjQ1IDE1Ni41bDEzMC0xMjlxMTktMTkgNDUtMTl0NDUgMTkgMTkgNDV6XFxcIi8+PC9zeW1ib2w+PHN5bWJvbCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNzkyIDE3OTJcXFwiIGlkPVxcXCJsZXBsYXllci1pY29uLXRyYXNoXFxcIj48dGl0bGU+dHJhc2g8L3RpdGxlPjxwYXRoIGQ9XFxcIk03MDQgMTM3NnYtNzA0cTAtMTQtOS0yM3QtMjMtOWgtNjRxLTE0IDAtMjMgOXQtOSAyM3Y3MDRxMCAxNCA5IDIzdDIzIDloNjRxMTQgMCAyMy05dDktMjN6bTI1NiAwdi03MDRxMC0xNC05LTIzdC0yMy05aC02NHEtMTQgMC0yMyA5dC05IDIzdjcwNHEwIDE0IDkgMjN0MjMgOWg2NHExNCAwIDIzLTl0OS0yM3ptMjU2IDB2LTcwNHEwLTE0LTktMjN0LTIzLTloLTY0cS0xNCAwLTIzIDl0LTkgMjN2NzA0cTAgMTQgOSAyM3QyMyA5aDY0cTE0IDAgMjMtOXQ5LTIzem0tNTQ0LTk5Mmg0NDhsLTQ4LTExN3EtNy05LTE3LTExaC0zMTdxLTEwIDItMTcgMTF6bTkyOCAzMnY2NHEwIDE0LTkgMjN0LTIzIDloLTk2djk0OHEwIDgzLTQ3IDE0My41dC0xMTMgNjAuNWgtODMycS02NiAwLTExMy01OC41dC00Ny0xNDEuNXYtOTUyaC05NnEtMTQgMC0yMy05dC05LTIzdi02NHEwLTE0IDktMjN0MjMtOWgzMDlsNzAtMTY3cTE1LTM3IDU0LTYzdDc5LTI2aDMyMHE0MCAwIDc5IDI2dDU0IDYzbDcwIDE2N2gzMDlxMTQgMCAyMyA5dDkgMjN6XFxcIi8+PC9zeW1ib2w+PHN5bWJvbCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNzkyIDE3OTJcXFwiIGlkPVxcXCJsZXBsYXllci1pY29uLXVuZG9cXFwiPjx0aXRsZT51bmRvPC90aXRsZT48cGF0aCBkPVxcXCJNMTY2NCA4OTZxMCAxNTYtNjEgMjk4dC0xNjQgMjQ1LTI0NSAxNjQtMjk4IDYxcS0xNzIgMC0zMjctNzIuNXQtMjY0LTIwNC41cS03LTEwLTYuNS0yMi41dDguNS0yMC41bDEzNy0xMzhxMTAtOSAyNS05IDE2IDIgMjMgMTIgNzMgOTUgMTc5IDE0N3QyMjUgNTJxMTA0IDAgMTk4LjUtNDAuNXQxNjMuNS0xMDkuNSAxMDkuNS0xNjMuNSA0MC41LTE5OC41LTQwLjUtMTk4LjUtMTA5LjUtMTYzLjUtMTYzLjUtMTA5LjUtMTk4LjUtNDAuNXEtOTggMC0xODggMzUuNXQtMTYwIDEwMS41bDEzNyAxMzhxMzEgMzAgMTQgNjktMTcgNDAtNTkgNDBoLTQ0OHEtMjYgMC00NS0xOXQtMTktNDV2LTQ0OHEwLTQyIDQwLTU5IDM5LTE3IDY5IDE0bDEzMCAxMjlxMTA3LTEwMSAyNDQuNS0xNTYuNXQyODQuNS01NS41cTE1NiAwIDI5OCA2MXQyNDUgMTY0IDE2NCAyNDUgNjEgMjk4elxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi12b2x1bWUtZG93blxcXCI+PHRpdGxlPnZvbHVtZS1kb3duPC90aXRsZT48cGF0aCBkPVxcXCJNMTA4OCAzNTJ2MTA4OHEwIDI2LTE5IDQ1dC00NSAxOS00NS0xOWwtMzMzLTMzM2gtMjYycS0yNiAwLTQ1LTE5dC0xOS00NXYtMzg0cTAtMjYgMTktNDV0NDUtMTloMjYybDMzMy0zMzNxMTktMTkgNDUtMTl0NDUgMTkgMTkgNDV6bTM4NCA1NDRxMCA3Ni00Mi41IDE0MS41dC0xMTIuNSA5My41cS0xMCA1LTI1IDUtMjYgMC00NS0xOC41dC0xOS00NS41cTAtMjEgMTItMzUuNXQyOS0yNSAzNC0yMyAyOS0zNS41IDEyLTU3LTEyLTU3LTI5LTM1LjUtMzQtMjMtMjktMjUtMTItMzUuNXEwLTI3IDE5LTQ1LjV0NDUtMTguNXExNSAwIDI1IDUgNzAgMjcgMTEyLjUgOTN0NDIuNSAxNDJ6XFxcIi8+PC9zeW1ib2w+PHN5bWJvbCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNzkyIDE3OTJcXFwiIGlkPVxcXCJsZXBsYXllci1pY29uLXZvbHVtZS1vZmZcXFwiPjx0aXRsZT52b2x1bWUtb2ZmPC90aXRsZT48cGF0aCBkPVxcXCJNMTI4MCAzNTJ2MTA4OHEwIDI2LTE5IDQ1dC00NSAxOS00NS0xOWwtMzMzLTMzM2gtMjYycS0yNiAwLTQ1LTE5dC0xOS00NXYtMzg0cTAtMjYgMTktNDV0NDUtMTloMjYybDMzMy0zMzNxMTktMTkgNDUtMTl0NDUgMTkgMTkgNDV6XFxcIi8+PC9zeW1ib2w+PHN5bWJvbCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNzkyIDE3OTJcXFwiIGlkPVxcXCJsZXBsYXllci1pY29uLXZvbHVtZS11cFxcXCI+PHRpdGxlPnZvbHVtZS11cDwvdGl0bGU+PHBhdGggZD1cXFwiTTgzMiAzNTJ2MTA4OHEwIDI2LTE5IDQ1dC00NSAxOS00NS0xOWwtMzMzLTMzM2gtMjYycS0yNiAwLTQ1LTE5dC0xOS00NXYtMzg0cTAtMjYgMTktNDV0NDUtMTloMjYybDMzMy0zMzNxMTktMTkgNDUtMTl0NDUgMTkgMTkgNDV6bTM4NCA1NDRxMCA3Ni00Mi41IDE0MS41dC0xMTIuNSA5My41cS0xMCA1LTI1IDUtMjYgMC00NS0xOC41dC0xOS00NS41cTAtMjEgMTItMzUuNXQyOS0yNSAzNC0yMyAyOS0zNS41IDEyLTU3LTEyLTU3LTI5LTM1LjUtMzQtMjMtMjktMjUtMTItMzUuNXEwLTI3IDE5LTQ1LjV0NDUtMTguNXExNSAwIDI1IDUgNzAgMjcgMTEyLjUgOTN0NDIuNSAxNDJ6bTI1NiAwcTAgMTUzLTg1IDI4Mi41dC0yMjUgMTg4LjVxLTEzIDUtMjUgNS0yNyAwLTQ2LTE5dC0xOS00NXEwLTM5IDM5LTU5IDU2LTI5IDc2LTQ0IDc0LTU0IDExNS41LTEzNS41dDQxLjUtMTczLjUtNDEuNS0xNzMuNS0xMTUuNS0xMzUuNXEtMjAtMTUtNzYtNDQtMzktMjAtMzktNTkgMC0yNiAxOS00NXQ0NS0xOXExMyAwIDI2IDUgMTQwIDU5IDIyNSAxODguNXQ4NSAyODIuNXptMjU2IDBxMCAyMzAtMTI3IDQyMi41dC0zMzggMjgzLjVxLTEzIDUtMjYgNS0yNiAwLTQ1LTE5dC0xOS00NXEwLTM2IDM5LTU5IDctNCAyMi41LTEwLjV0MjIuNS0xMC41cTQ2LTI1IDgyLTUxIDEyMy05MSAxOTItMjI3dDY5LTI4OS02OS0yODktMTkyLTIyN3EtMzYtMjYtODItNTEtNy00LTIyLjUtMTAuNXQtMjIuNS0xMC41cS0zOS0yMy0zOS01OSAwLTI2IDE5LTQ1dDQ1LTE5cTEzIDAgMjYgNSAyMTEgOTEgMzM4IDI4My41dDEyNyA0MjIuNXpcXFwiLz48L3N5bWJvbD48L3N2Zz5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vZGlzdC9zdmcvc3ZnLWRlZnMuc3ZnXG4vLyBtb2R1bGUgaWQgPSA2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgY29uc3QgcHJlc2V0ID0ge1xuXHRvcHRpb25zIDoge1xuXHRcdHdpZHRoIDogJzEwMCUnLFxuXHRcdGNvbnRyb2xzIDoge1xuXHRcdFx0Y29tbW9uIDogW1xuXHRcdFx0XHRbJ3BsYXknLCAndm9sdW1lJywgJ2RpdmlkZXInLCAndGltZWxpbmUnLCAnZGl2aWRlcicsICdmdWxsc2NyZWVuJ10sXG5cdFx0XHRcdFsncmF0ZScsICdkaXZpZGVyJywgJ2JhY2t3YXJkJywgJ2RpdmlkZXInLCAnc291cmNlJywgJ2RpdmlkZXInLCAnZG93bmxvYWQnXVxuXHRcdFx0XSxcblx0XHRcdGZ1bGxzY3JlZW4gOiBbXG5cdFx0XHRcdFsncGxheScsICd2b2x1bWUnLCAnZGl2aWRlcicsICd0aW1lbGluZScsICdkaXZpZGVyJywgJ3JhdGUnLCAnZGl2aWRlcicsICdiYWNrd2FyZCcsICdkaXZpZGVyJywgJ3NvdXJjZScsICdkaXZpZGVyJywgJ2Rvd25sb2FkJywgJ2RpdmlkZXInLCAnZnVsbHNjcmVlbiddXG5cdFx0XHRdXG5cdFx0fVxuXHR9LFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL3ByZXNldHMvdnBzLmpzIiwiZXhwb3J0IGNvbnN0IHByZXNldCA9IHtcblx0b3B0aW9ucyA6IHtcblx0XHR3aWR0aCA6ICcxMDAlJyxcblx0XHRjb250cm9scyA6IHtcblx0XHRcdGNvbW1vbiA6IFtcblx0XHRcdFx0WydwbGF5JywgJ3ZvbHVtZScsICd0aW1lbGluZScsICdyYXRlJywgJ3NvdXJjZScsICdkaXZpZGVyJywgJ2Rvd25sb2FkJywgJ2Z1bGxzY3JlZW4nXSxcblx0XHRcdFx0W11cblx0XHRcdF0sXG5cdFx0XHRmdWxsc2NyZWVuIDogW1xuXHRcdFx0XHRbJ3BsYXknLCAndm9sdW1lJywgJ3RpbWVsaW5lJywgJ3JhdGUnLCAnc291cmNlJywgJ2RpdmlkZXInLCAnZG93bmxvYWQnLCAnZnVsbHNjcmVlbiddLFxuXHRcdFx0XVxuXHRcdH1cblx0fSxcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9wcmVzZXRzL3Ntcy5qcyIsImV4cG9ydCBjb25zdCBwcmVzZXQgPSB7XG5cdG9wdGlvbnMgOiB7XG5cdFx0d2lkdGggOiAnMTAwJScsXG5cdFx0Y29udHJvbHMgOiB7XG5cdFx0XHRjb21tb24gOiBbXG5cdFx0XHRcdFsncGxheScsICd2b2x1bWUnLCAndGltZWxpbmUnLCAncmF0ZScsICdzb3VyY2UnLCAnZGl2aWRlcicsICdmdWxsc2NyZWVuJ10sXG5cdFx0XHRcdFtdXG5cdFx0XHRdLFxuXHRcdFx0ZnVsbHNjcmVlbiA6IFtcblx0XHRcdFx0WydwbGF5JywgJ3ZvbHVtZScsICd0aW1lbGluZScsICdyYXRlJywgJ3NvdXJjZScsICdkaXZpZGVyJywgJ2Z1bGxzY3JlZW4nXSxcblx0XHRcdF1cblx0XHR9XG5cdH0sXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvcHJlc2V0cy9jb21wcmVzc2VkLmpzIiwiZXhwb3J0IGNvbnN0IHByZXNldCA9IHtcblx0b3B0aW9ucyA6IHtcblx0XHRlbnRpdHkgOiAnWW91dHViZScsXG5cdFx0Y29udHJvbHMgOiB7XG5cdFx0XHRjb21tb24gOiBbXG5cdFx0XHRcdFsncGxheScsICd2b2x1bWUnLCAndGltZWxpbmUnLCAncmF0ZScsICdiYWNrd2FyZCcsICdzb3VyY2UnLCAnZGl2aWRlcicsICdzZWN0aW9uJywgJ2Z1bGxzY3JlZW4nXSxcblx0XHRcdFx0W11cblx0XHRcdF0sXG5cdFx0XHRmdWxsc2NyZWVuIDogW1xuXHRcdFx0XHRbJ3BsYXknLCAndm9sdW1lJywgJ3RpbWVsaW5lJywgJ3JhdGUnLCAnYmFja3dhcmQnLCAgJ3NvdXJjZScsICdkaXZpZGVyJywgJ3NlY3Rpb24nLCAnZnVsbHNjcmVlbiddLFxuXHRcdFx0XVxuXHRcdH1cblx0fSxcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9wcmVzZXRzL3lvdXR1YmUuanMiXSwic291cmNlUm9vdCI6IiJ9