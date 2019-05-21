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
	
	var _SplashIcon = __webpack_require__(8);
	
	var _SplashIcon2 = _interopRequireDefault(_SplashIcon);
	
	var _Icon = __webpack_require__(5);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _Time = __webpack_require__(9);
	
	var _Time2 = _interopRequireDefault(_Time);
	
	var _ControlCollection = __webpack_require__(10);
	
	var _ControlCollection2 = _interopRequireDefault(_ControlCollection);
	
	var _Sections = __webpack_require__(11);
	
	var _Sections2 = _interopRequireDefault(_Sections);
	
	var _ErrorDisplay = __webpack_require__(12);
	
	var _ErrorDisplay2 = _interopRequireDefault(_ErrorDisplay);
	
	var _Poster = __webpack_require__(13);
	
	var _Poster2 = _interopRequireDefault(_Poster);
	
	var _FullscreenApi = __webpack_require__(14);
	
	var _FullscreenApi2 = _interopRequireDefault(_FullscreenApi);
	
	var _utils = __webpack_require__(7);
	
	var _cookie = __webpack_require__(15);
	
	var _cookie2 = _interopRequireDefault(_cookie);
	
	var _browser = __webpack_require__(16);
	
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
	
	Player.Cookie = _cookie2.default;
	
	Player._loadSVGSprite = function (svg) {
		var hiddenElement = (0, _jquery2.default)('<div/>').hide();
		(0, _jquery2.default)('body').prepend(hiddenElement.append(svg));
		return hiddenElement;
	};
	
	Player.defaultSprite = __webpack_require__(70);
	
	/* global VERSION */
	Player.version = ("0.4.1");
	
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
/* 9 */
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
/* 10 */
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
/* 11 */
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
/* 14 */
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
/* 15 */
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
/* 16 */
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
	
			_this.player.on('play', _this.showPause.bind(_this));
			_this.player.on('playing', _this.showPause.bind(_this));
			_this.player.on('pause', _this.showPlay.bind(_this));
			_this.player.on('ended', _this.showReplay.bind(_this));
	
			_this.player.on('play', _this.removeReplay.bind(_this));
			_this.player.on('seeking', _this.removeReplay.bind(_this));
			_this.player.on('loadstart', _this.removeReplay.bind(_this));
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
	
	var _cookie = __webpack_require__(15);
	
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
				var item = (0, _jquery2.default)('<div />').addClass('control-container__item').data(data).attr('title', data.tooltip).on('click', this.onItemClick.bind(this)).append(content);
	
				this.list = this.list.concat(item);
	
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
	
	var _browser = __webpack_require__(16);
	
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
	
	var _cookie = __webpack_require__(15);
	
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
			controls: {
				common: [['play', 'timeline', 'rate', 'volume', 'source', 'fullscreen'], []],
				fullscreen: [['play', 'timeline', 'rate', 'volume', 'source', 'fullscreen']]
			}
		}
	};

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOGJjNzc1MDlmMjgxNWFhNmU2MjMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2xlLXBsYXllci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCIkXCIiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvQ29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9Db21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvSWNvbi5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9QbGF5QnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy91dGlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9TcGxhc2hJY29uLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL1RpbWVsaW5lL1RpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvQ29udHJvbENvbGxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvU2VjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvRXJyb3JEaXNwbGF5LmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL1Bvc3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvRnVsbHNjcmVlbkFwaS5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvdXRpbHMvY29va2llLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy91dGlscy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9NZWRpYUVycm9yLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL1BsYXlDb250cm9sLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL1ZvbHVtZUNvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvQ29udHJvbERyb3Bkb3duLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL1RpbWVsaW5lL1RpbWVsaW5lQ29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9Db250cm9sVGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9UaW1lbGluZS9CdWZmZXJlZFJhbmdlcy5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9UaW1lbGluZS9NYXJrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvU2VjdGlvbkNvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvQ29udHJvbENoZWNrYm94LmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL0Z1bGxzY3JlZW5Db250cm9sLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL1JhdGVDb250cm9sLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL0JhY2t3YXJkQ29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9Tb3VyY2VDb250cm9sLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL0NvbnRyb2xDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvU3VidGl0bGVDb250cm9sLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL0Rvd25sb2FkQ29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9LZXliaW5kaW5nSW5mb0NvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvVGltZUluZm9Db250cm9sLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9lbnRpdHkvSHRtbDUuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2VudGl0eS9FbnRpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9hcnJheS5wcm90b3R5cGUuZmluZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2RlZmluZS1wcm9wZXJ0aWVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vb2JqZWN0LWtleXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9vYmplY3Qta2V5cy9pc0FyZ3VtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9+L29iamVjdC1rZXlzL2ltcGxlbWVudGF0aW9uLmpzIiwid2VicGFjazovLy8uL34vZXMtYWJzdHJhY3QvZXM2LmpzIiwid2VicGFjazovLy8uL34vZXMtYWJzdHJhY3QvZXMyMDE1LmpzIiwid2VicGFjazovLy8uL34vaGFzL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2Z1bmN0aW9uLWJpbmQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9mdW5jdGlvbi1iaW5kL2ltcGxlbWVudGF0aW9uLmpzIiwid2VicGFjazovLy8uL34vZXMtdG8tcHJpbWl0aXZlL2VzNi5qcyIsIndlYnBhY2s6Ly8vLi9+L2VzLXRvLXByaW1pdGl2ZS9lczIwMTUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9lcy10by1wcmltaXRpdmUvaGVscGVycy9pc1ByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2lzLWNhbGxhYmxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vaXMtZGF0ZS1vYmplY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9pcy1zeW1ib2wvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9oYXMtc3ltYm9scy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2hhcy1zeW1ib2xzL3NoYW1zLmpzIiwid2VicGFjazovLy8uL34vZXMtYWJzdHJhY3QvR2V0SW50cmluc2ljLmpzIiwid2VicGFjazovLy8uL34vZXMtYWJzdHJhY3QvaGVscGVycy9hc3NlcnRSZWNvcmQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9lcy1hYnN0cmFjdC9oZWxwZXJzL2lzTmFOLmpzIiwid2VicGFjazovLy8uL34vZXMtYWJzdHJhY3QvaGVscGVycy9pc0Zpbml0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2VzLWFic3RyYWN0L2hlbHBlcnMvYXNzaWduLmpzIiwid2VicGFjazovLy8uL34vZXMtYWJzdHJhY3QvaGVscGVycy9zaWduLmpzIiwid2VicGFjazovLy8uL34vZXMtYWJzdHJhY3QvaGVscGVycy9tb2QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9lcy1hYnN0cmFjdC9oZWxwZXJzL2lzUHJpbWl0aXZlLmpzIiwid2VicGFjazovLy8uL34vZXMtYWJzdHJhY3QvZXM1LmpzIiwid2VicGFjazovLy8uL34vZXMtdG8tcHJpbWl0aXZlL2VzNS5qcyIsIndlYnBhY2s6Ly8vLi9+L2lzLXJlZ2V4L2luZGV4LmpzIiwid2VicGFjazovLy8uL34vYXJyYXkucHJvdG90eXBlLmZpbmQvaW1wbGVtZW50YXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9hcnJheS5wcm90b3R5cGUuZmluZC9wb2x5ZmlsbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2FycmF5LnByb3RvdHlwZS5maW5kL3NoaW0uanMiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9zdmcvc3ZnLWRlZnMuc3ZnIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9wcmVzZXRzL3Zwcy5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvcHJlc2V0cy9zaW1wbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL3ByZXNldHMvc21zLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9wcmVzZXRzL2NvbXByZXNzZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL3ByZXNldHMvMjAzNS5qcyJdLCJuYW1lcyI6WyJDb250cm9sIiwicmVnaXN0ZXJDb250cm9sIiwiZWxlbWVudCIsImFkZENsYXNzIiwiZXhjbHVkZUFycmF5Iiwic291cmNlIiwiZGlzdCIsInJlc3VsdCIsImNvbmNhdCIsImZvckVhY2giLCJpbmRleCIsImluZGV4T2YiLCJpdGVtIiwic3BsaWNlIiwiZGVmYXVsdE9wdGlvbnMiLCJlbnRpdHkiLCJhdXRvcGxheSIsImhlaWdodCIsImxvb3AiLCJtdXRlZCIsInByZWxvYWQiLCJwb3N0ZXIiLCJzdmdQYXRoIiwiaW5uYWN0aXZpdHlUaW1lb3V0IiwicmF0ZSIsInN0ZXAiLCJtaW4iLCJtYXgiLCJkZWZhdWx0IiwicGxheWJhY2siLCJzaG9ydCIsIm1lZGl1bSIsImxvbmciLCJjb250cm9scyIsImNvbW1vbiIsImZ1bGxzY3JlZW4iLCJtaW5pIiwiY29udHJvbHNPcHRpb25zIiwiYWxpZ24iLCJ2b2x1bWUiLCJtdXRlbGltaXQiLCJrZXlCaW5kaW5nIiwia2V5IiwiaW5mbyIsImRlc2NyaXB0aW9uIiwiZm4iLCJwbGF5ZXIiLCJ2aWRlbyIsInRvZ2dsZVBsYXkiLCJjdXJyZW50VGltZSIsIm9wdGlvbnMiLCJzcGxhc2hJY29uIiwic2hvdyIsInNoaWZ0S2V5Iiwic2VjdGlvbnMiLCJwcmV2IiwibmV4dCIsImNhbGNWb2x1bWVJY29uIiwidG9nZ2xlRnVsbHNjcmVlbiIsInBsdWdpbnMiLCJtaW5pcGxheWVyIiwib25QbGF5ZXJJbml0ZWQiLCJub29wIiwiUGxheWVyIiwiY3JlYXRlRWxlbWVudCIsIl9lbGVtZW50IiwiaW5uZXJFbGVtZW50IiwiX3VzZXJPcHRpb25zIiwiX2luaXRPcHRpb25zIiwiX2xvYWRTVkdTcHJpdGUiLCJkZWZhdWx0U3ByaXRlIiwiX3ZpZXciLCJsb2FkRW50aXR5IiwiY3R4IiwiX2luaXRDb250cm9scyIsIl9kYmxjbGlja1RpbWVvdXQiLCJfaW5pdFNlY3Rpb25zIiwidGhlbiIsImRhdGEiLCJzZWN0aW9uc0NvbXBvbmVudCIsInRyaWdnZXIiLCJfaW5pdFBsdWdpbnMiLCJfbGlzdGVuSG90S2V5cyIsIl91c2VyQWN0aXZpdHkiLCJfbGlzdGVuVXNlckFjdGl2aXR5IiwiX3dhaXRpbmdUaW1lb3V0cyIsIm9uIiwiZXZlbnROYW1lIiwib25lIiwicmVtb3ZlQ2xhc3MiLCJ0aW1lIiwiZHVyYXRpb24iLCJlcnJvciIsIl9zdGFydFdhaXRpbmciLCJfc3RvcFdheXRpbmciLCJlIiwidXJsIiwicGxheSIsInBhdXNlZCIsInBhdXNlIiwiTWVkaWFFcnJvciIsImNvZGUiLCJpbml0Iiwic3JjIiwiX29uRnVsbHNjcmVlbkNoYW5nZSIsImJpbmQiLCJfb25DbGljayIsIl9vbkRiY2xpY2siLCJfb25Jbml0ZWQiLCJfb25QbGF5IiwiX29uUGF1c2UiLCJkb2N1bWVudCIsIkZ1bGxzY3JlZW5BcGkiLCJmdWxsc2NyZWVuY2hhbmdlIiwiX29uRW50aXR5RnVsbHNjcmVuQ2hhbmdlIiwibmFtZSIsIkVudGl0eSIsImdldENvbXBvbmVudCIsIl9lbnRpdHkiLCJsb2FkIiwidmlldyIsImFyZ3MiLCJkZmQiLCIkIiwiRGVmZXJyZWQiLCJfZGF0YSIsInVuZGVmaW5lZCIsInJlc29sdmUiLCJwcm9taXNlIiwiYWpheCIsIm1ldGhvZCIsImRhdGFUeXBlIiwiZ2V0RGF0YSIsImZzQXBpIiwicmVxdWVzdEZ1bGxzY3JlZW4iLCJzdXBwb3J0c0Z1bGxTY3JlZW4iLCJlbnRlckZ1bGxzY3JlZW4iLCJleGl0RnVsbHNjcmVlbiIsIndpZHRoIiwibGVuZ3RoIiwibmV3U2VjdGlvbnMiLCJpIiwiZW5kU2VjdGlvbiIsImJlZ2luIiwiZW5kIiwiYXR0ciIsImNzcyIsImVycm9yRGlzcGxheSIsIkVycm9yRGlzcGxheSIsInBsYXlCdXR0b24iLCJQbGF5QnV0dG9uIiwibG9hZGVyIiwiYXBwZW5kIiwiSWNvbiIsImljb25OYW1lIiwiY2xhc3NOYW1lIiwiU3BsYXNoSWNvbiIsInZpZGVvQ29udGFpbmVyIiwiUG9zdGVyIiwibGFzdFRpbWVyIiwiVGltZSIsInZpZGVvSW5mbyIsImNvbnNvbGUiLCJ3YXJuIiwiaW5mb0VsZW1lbnQiLCJodG1sIiwidGl0bGUiLCJzZWN0aW9uQ29udGFpbmVyIiwic2VjdGlvbnNDb250YWluZXIiLCJiZWZvcmUiLCJhdHRyT3B0aW9ucyIsInJlZHVjZSIsIm9iaiIsInZhbCIsInNvdXJjZXMiLCJmaW5kIiwiZWFjaCIsInZhbHVlIiwiX29wdGlvbnNGcm9tRWxlbWVudCIsInByZXNldE9wdGlvbnMiLCJwcmVzZXQiLCJnZXRQcmVzZXQiLCJleHRlbmQiLCJBcnJheSIsImlzQXJyYXkiLCJleGNsdWRlQ29udHJvbHMiLCJoYXNPd25Qcm9wZXJ0eSIsImNvbnRyb2xDb2xsZWN0aW9uIiwicm93IiwiaW5pdE9wdGlvbnMiLCJDb250cm9sQ29sbGVjdGlvbiIsImFjdGl2ZSIsImlzS2V5QmluZGluZyIsImJpbmRpbmciLCJ3aGljaCIsImN0cmxLZXkiLCJwcmV2ZW50RGVmYXVsdCIsInJlamVjdCIsImdldFNlY3Rpb25EYXRhIiwiZG9uZSIsImlzU2VjdGlvbk91dHNpZGUiLCJfY29tcGxldGVTZWN0aW9ucyIsIlNlY3Rpb25zIiwiaXRlbXMiLCJmdWxsc2NyZWVuT25seSIsImhpZGVTY3JvbGwiLCJvdXRzaWRlU2VjdGlvbnMiLCJwbHVnaW5PcHRpb25zIiwibW91c2VJblByb2dyZXNzIiwibGFzdE1vdmVYIiwibGFzdE1vdmVZIiwib25Nb3VzZU1vdmUiLCJzY3JlZW5YIiwic2NyZWVuWSIsIm9uTW91c2VEb3duIiwiY2xlYXJJbnRlcnZhbCIsInNldEludGVydmFsIiwib25Nb3VzZVVwIiwiaW5hY3Rpdml0eVRpbWVvdXQiLCJkZWxheSIsInVzZXJBY3RpdmUiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwicHVzaCIsImNhbGwiLCJmb2N1cyIsImlzRnMiLCJJU19BTkRST0lEX1BIT05FIiwiSVNfSVBIT05FIiwiSVNfSVBPRCIsImZ1bGxzY3JlZW5FbGVtZW50IiwiZW5kZWQiLCJfZXJyb3IiLCJoaWRlIiwiX3VzZXJBY3RpdmUiLCJnZXRVc2VyQWN0aXZlIiwidG9nZ2xlQ2xhc3MiLCJDb21wb25lbnQiLCJwbHVnaW4iLCJwcm90b3R5cGUiLCJyZWdpc3RlckNvbXBvbmVudCIsImdldENvbnRyb2wiLCJzZWNvbmRzVG9UaW1lIiwiX3ByZXNldHMiLCJDb29raWUiLCJzdmciLCJoaWRkZW5FbGVtZW50IiwicHJlcGVuZCIsInJlcXVpcmUiLCJ2ZXJzaW9uIiwid2luZG93IiwibGVQbGF5ZXIiLCJvZmZzZXRTaG93Iiwib2Zmc2V0IiwidG9wIiwib3V0ZXJIZWlnaHQiLCJnZXRDb250cm9scyIsImNvbnRyb2xPcHRpb25zIiwiY29udHJvbCIsImRpc2FibGUiLCJpc0Z1bmN0aW9uIiwiZ2V0V2lkdGgiLCJfdXBkYXRlTWluaVBsYXllciIsImZvcmNlIiwic2Nyb2xsVG9wIiwiaGlkZU1pbmlQbGF5ZXIiLCJzaG93TWluaVBsYXllciIsIm9uU2V0VmlldyIsIm9uRGVsVmlldyIsIm1vZHVsZSIsImV4cG9ydHMiLCJjbGljayIsImxlcGxheWVyX2NvbnRyb2xfY2xpY2siLCJvbkNsaWNrIiwiaWNvbiIsImF0dHJzIiwicm9sZSIsImJ1aWxkQ1NTQ2xhc3MiLCJhcmd1bWVudHMiLCJfZGlzYWJsZSIsIl9jb250cm9scyIsImNvbnRyb2xDbGFzcyIsIl9fbm9kZSIsImJsdXIiLCJldmVudCIsIkV2ZW50IiwidHJpZ2dlckhhbmRsZXIiLCJmbGFnIiwiaGFzQ2xhc3MiLCJjb21wb25lbnQiLCJfY29tcG9uZW50cyIsIl91c2VUYWciLCJjcmVhdGVFbGVtZW50TlMiLCJfc3ZnVGFnIiwiX2ljb25OYW1lIiwiYXBwZW5kQ2hpbGQiLCJhdHRyTlMiLCJyZW1vdmVBdHRyaWJ1dGVOUyIsInNldEF0dHJpYnV0ZU5TIiwiaW5uZXIiLCJwZXJjZW50aWZ5IiwiY3JlYXRlRWwiLCJzZWNvbmRzIiwic2hvd0hvdXJzIiwiaCIsIk1hdGgiLCJmbG9vciIsIm0iLCJzIiwib3V0IiwicGVyY2VudCIsInRhZyIsInByb3BzIiwiZ2V0U2Nyb2xsQmFyV2lkdGgiLCJvdXRlciIsInZpc2liaWxpdHkiLCJvdmVyZmxvdyIsImFwcGVuZFRvIiwid2lkdGhXaXRoU2Nyb2xsIiwib3V0ZXJXaWR0aCIsInJlbW92ZSIsInVwZGF0ZVRleHQiLCJ0ZXh0IiwicGxheWVyT3B0aW9ucyIsImluZGV4Um93IiwiY3JlYXRlIiwiY29sbGVjdGlvbiIsIl9yb3dzIiwiYWRkUm93IiwiZWxlbVJvdyIsImZpcnN0Iiwic2Vjb25kIiwiZ2xvYmFsQWxpZ24iLCJyb3dBbGlnbiIsImNvbnRyb2xOYW1lIiwiYWRkQ29udHJvbCIsIl9nZXRDb250cm9sT3B0aW9ucyIsInNjcm9sbEVsZW1lbnQiLCJfaW5uZXJFbGVtZW50IiwiYWN0aXZlU2VjdGlvbiIsImdldFNlY3Rpb25CeUluZGV4Iiwic2V0QWN0aXZlQnlJbmRleCIsIm9uU2VjdGlvbkNsaWNrIiwiX29uU2VjdGlvbnNUb2dnbGUiLCJvblRpbWVVcGRhdGUiLCJ1cGRhdGVTZWN0aW9uRHVyYXRpb24iLCJzZWN0aW9uSW5kZXgiLCJwYXJzZUludCIsIm5ld0luZGV4IiwicmlnaHQiLCJfY3JlYXRlU2VjdGlvbnMiLCJzZWN0aW9uIiwidGFyZ2V0IiwiY2xvc2VzdCIsInRvcFBvc2l0aW9uIiwicG9zaXRpb24iLCJhbmltYXRlIiwiZW5kU2VjdGlvblRpbWUiLCJjaGVja2VkIiwidG9TdHJpbmciLCJuZXh0SW5mbyIsInRyaW0iLCJyZXBsYWNlV2l0aCIsImNyZWF0ZVNlY3Rpb24iLCJtZXNzYWdlIiwib25QbGF5ZXJFcnJvciIsIl91cmwiLCJhcGlNYXAiLCJzcGVjQXBpIiwiYnJvd3NlckFwaSIsImRmbHQiLCJjb29raWVzIiwiY29va2llIiwic3BsaXQiLCJkIiwiRGF0ZSIsInNldERhdGUiLCJ5ZWFyIiwiVVNFUl9BR0VOVCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsIklTX01PQklMRSIsInRlc3QiLCJJU19DSFJPTUUiLCJJU19BTkRST0lEIiwiSVNfSVBBRCIsIklTX0lPUyIsIklTX1NBRkFSSSIsImRlZmF1bHRNZXNzYWdlcyIsImVycm9yVHlwZXMiLCJlcnJOdW0iLCJQbGF5Q29udHJvbCIsInNob3dQYXVzZSIsInNob3dQbGF5Iiwic2hvd1JlcGxheSIsInJlbW92ZVJlcGxheSIsIkluZmluaXR5IiwiX3JlcGxheSIsIlZvbHVtZUNvbnRyb2wiLCJkcmFnIiwibWFya2VyIiwibGluZSIsInAiLCJnZXRQb3NpdGlvbiIsInBhZ2VZIiwiZHJvcGRvd25Db250ZW50IiwibW91c2Vtb3ZlIiwibW91c2V1cCIsInkiLCJ0b2dnbGVNdXRlZCIsImRlZmF1bHRWb2x1bWUiLCJyb3VuZCIsIkNvbnRyb2xEcm9wZG93biIsIlRpbWVsaW5lQ29udHJvbCIsIl9vbk1hcmtlck1vdXNlbW92ZSIsIl9vbk1hcmtlck1vdXNlZG93biIsIm9uU2VjdGlvbnNJbml0IiwiX29uVGltZVVwZGF0ZSIsIl9vbkR1cmF0aW9uQ2hhbmdlIiwibWFya2VyU2hhZG93IiwieCIsIm1hcmtlclRpbWUiLCJpc05hTiIsIm1vdmUiLCJDb250cm9sVGV4dCIsInRvdGFsVGltZSIsIk1hcmtlciIsInBsYXllZFJhbmdlcyIsImJ1ZmZlcmVkUmFuZ2VzIiwiQnVmZmVyZWRSYW5nZXMiLCJwYWdlWCIsIm1vdXNlbGVhdmUiLCJtb3VzZWRvd24iLCJfb25MaW5lQ2xpY2siLCJ0b3VjaG1vdmUiLCJ1cGRhdGVTZWN0aW9uUmFuZ2VzIiwiY3JlYXRlU2VjdGlvblJhbmdlcyIsImxlZnQiLCJ1cGRhdGVMYWJlbHMiLCJ3YXRjaEJ1ZmZlckludGVydmFsIiwidXBkYXRlUHJvZ3Jlc3NCYXIiLCJFTkQiLCJTVEFSVCIsImxvYWRlZCIsImRvbUl0ZW0iLCJhZGQiLCJidWZmZXJlZCIsImxvYWRlZFNpemUiLCJfdGV4dCIsInVwZGF0ZSIsInJhbmdlIiwiX29uTW91c2Vkb3duIiwiX2RyYWciLCJTZWN0aW9uQ29udHJvbCIsIl9vblNlY3Rpb25zSW5pdCIsIkNvbnRyb2xDaGVja2JveCIsIm9uQ2hlY2tlZCIsIl9jaGVja2VkIiwiRnVsbHNjcmVlbkNvbnRyb2wiLCJSYXRlQ29udHJvbCIsImRvd25Db250cm9sIiwiZGVjcmVhc2VSYXRlIiwidXBDb250cm9sIiwiaW5jcmVhc2VSYXRlIiwiY3VycmVudFJhdGUiLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsInJlcGxhY2UiLCJyYXRlTWluIiwicmF0ZU1heCIsImdldCIsIkJhY2t3YXJkQ29udHJvbCIsIlNvdXJjZUNvbnRyb2wiLCJwbGF5YmFja1F1YWxpdHkiLCJnZXRBdmFpbGFibGVRdWFsaXR5TGV2ZWxzIiwiQ29udHJvbENvbnRhaW5lciIsIl9hY3RpdmUiLCJsaXN0IiwiY29udGVudCIsInRvb2x0aXAiLCJvbkl0ZW1DbGljayIsImN1cnJlbnRUYXJnZXQiLCJjdXJyZW50VmFsdWUiLCJnZXRDdXJyZW50VmFsdWUiLCJlbXB0eSIsImVsZW0iLCJhZGRJdGVtIiwiU3VidGl0bGVDb250cm9sIiwidHJhY2siLCJzdG9wUHJvcGFnYXRpb24iLCJoYXNWYWx1ZSIsInN1YnRpdGxlcyIsIkRvd25sb2FkQ29udHJvbCIsIm9uTG9hZFN0YXJ0IiwiaHJlZiIsImRvd25sb2FkIiwibGluayIsInBhcnNlciIsImZpbGVOYW1lIiwicGF0aG5hbWUiLCJLZXlCaW5kaW5nSW5mb0NvbnRyb2wiLCJpbmZvQ29udGVudCIsIl9rZXkiLCJob3RrZXkiLCJrZXlTdHJpbmciLCJUaW1lSW5mb0NvbnRyb2wiLCJfY3VycmVudFRpbWVDb250cm9sIiwiX3RvdGFsVGltZUNvbnRyb2wiLCJIdG1sNSIsIm1lZGlhIiwiYnVmZmVyUmFuZ2VzIiwiX3BsYXliYWNrUXVhbGl0eSIsIm9uRHVyYXRpb25DaGFuZ2UiLCJvblByb2dyZXNzIiwib25TZWVraW5nIiwib25TZWVrZWQiLCJvblZvbHVtZUNoYW5nZSIsIm9uRGJsY2xpY2siLCJvblBsYXkiLCJvblBhdXNlIiwib25SYXRlQ2hhbmdlIiwib25FbmRlZCIsIm9uQ2FucGxheVRocm91Z2giLCJvbldhaXRpbmciLCJvbkVycm9yIiwicmVtb3ZlQXR0ciIsInByb3AiLCJtYXAiLCJfaW5pdFN1YnRpdGxlcyIsIl9pbml0VmlkZW8iLCJfaW5pdFJhdGUiLCJfaW5pdFZvbHVtZSIsIndlYmtpdEVudGVyRnVsbFNjcmVlbiIsIm5ldHdvcmtTdGF0ZSIsIkhBVkVfTUVUQURBVEEiLCJ3ZWJraXRFeGl0RnVsbFNjcmVlbiIsInBsYXllZCIsInBsYXlQcm9taXNlIiwicGF1c2VQcm9taXNlIiwiX3NlbGYiLCJjaGlsZHJlbiIsImxhbmd1YWdlIiwicmVhZHlTdGF0ZSIsIkhUTUxNZWRpYUVsZW1lbnQiLCJIQVZFX05PVEhJTkciLCJfdGV4dFRyYWNrc0hhY2siLCJub3RpZnkiLCJ0ZXh0VHJhY2tzIiwiY2xpZW50SGVpZ2h0IiwiY2xpZW50V2lkdGgiLCJwbGF5YmFja1JhdGUiLCJNT0JJTEVfTUFYX1JBVEUiLCJTQUZBUklfTUFYX1JBVEUiLCJNT0JJTEVfTUlOX1JBVEUiLCJTQUZBUklfTUlOX1JBVEUiLCJzdG9wIiwiX3NvdXJjZSIsIl90cmFjayIsIm1vZGUiLCJtdXRlIiwic2Vla2FibGUiLCJzdGFydCIsImN1cnJlbnRTcmMiLCJfdHJpZ2dlclN0YWNrIiwiX3N0b3BMaXN0ZW4iLCJkZWZhdWx0UmF0ZSIsIl9wb3N0ZXIiLCJpbm5lckhlaWdodCIsIl9yYXRlTWF4IiwiX3JhdGVNaW4iLCJzZXQiLCJsZXZlbHMiLCJzb21lIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7Ozs7OztBQUVBOzs7O0FBR0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOztBQUNBOzs7O0FBQ0E7O0FBRUE7Ozs7QUFHQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFD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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBLDJCQUEwQjs7QUFFMUI7QUFDQTtBQUNBO0FBQ0Esd0NBQXVDO0FBQ3ZDLDBCQUF5Qjs7QUFFekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQW9CO0FBQ3BCLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRCxpQ0FBZ0M7O0FBRWhDOzs7Ozs7O0FDcnhCQTs7QUFFQTs7QUFFQTs7Ozs7OztBQ0pBOztBQUVBOztBQUVBOzs7Ozs7O0FDSkE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBbUIs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O0FBQ0EsY0FBYTtBQUNiO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2hMQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNEJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNoREE7QUFDQTtBQUNBOzs7Ozs7O0FDRkEsNENBQTJDLGdCQUFnQjs7QUFFM0QsbURBQWtELGlGQUFpRjs7Ozs7OztBQ0ZuSTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDSEE7QUFDQTtBQUNBOzs7Ozs7O0FDRkE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQSxpQkFBZ0I7QUFDaEIsR0FBRTtBQUNGO0FBQ0E7QUFDQSx3QkFBdUIsVUFBVTtBQUNqQyw0Q0FBMkMsZUFBZTtBQUMxRDtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBLDhEQUE2RCxVQUFVO0FBQ3ZFO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQSxpQkFBZ0I7QUFDaEIsa0JBQWlCLHdCQUF3QjtBQUN6QztBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQzFPQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFjLG9CQUFvQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUM1Q0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3RDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF1QixZQUFZO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDckJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBOzs7Ozs7O0FDWkE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDJCQUEwQixpQkFBaUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBOzs7Ozs7O0FDZkEsZy9GQUErK0Ysa0JBQWtCLFlBQVksaUJBQWlCLG9CQUFvQixzQkFBc0IsK3RTOzs7Ozs7Ozs7OztBQ0Fqa0csS0FBTWdFLDBCQUFTO0FBQ3JCbEksV0FBVTtBQUNUd0YsVUFBUSxNQURDO0FBRVR6RyxhQUFXO0FBQ1ZDLFlBQVMsQ0FDUixDQUFDLE1BQUQsRUFBUyxRQUFULEVBQW1CLFNBQW5CLEVBQThCLFVBQTlCLEVBQTBDLFNBQTFDLEVBQXFELFlBQXJELENBRFEsRUFFUixDQUFDLE1BQUQsRUFBUyxTQUFULEVBQW9CLFVBQXBCLEVBQWdDLFNBQWhDLEVBQTJDLFFBQTNDLEVBQXFELFNBQXJELEVBQWdFLFVBQWhFLENBRlEsQ0FEQztBQUtWQyxnQkFBYSxDQUNaLENBQUMsTUFBRCxFQUFTLFFBQVQsRUFBbUIsU0FBbkIsRUFBOEIsVUFBOUIsRUFBMEMsU0FBMUMsRUFBcUQsTUFBckQsRUFBNkQsU0FBN0QsRUFBd0UsVUFBeEUsRUFBb0YsU0FBcEYsRUFBK0YsUUFBL0YsRUFBeUcsU0FBekcsRUFBb0gsVUFBcEgsRUFBZ0ksU0FBaEksRUFBMkksWUFBM0ksQ0FEWTtBQUxIO0FBRkY7QUFEVyxFQUFmLEM7Ozs7Ozs7Ozs7O0FDQVAsS0FBTUYsV0FBVyxDQUFDLE1BQUQsRUFBUyxRQUFULEVBQW1CLFNBQW5CLEVBQThCLFVBQTlCLEVBQTBDLFNBQTFDLEVBQXFELE1BQXJELEVBQTZELFVBQTdELEVBQXlFLFlBQXpFLENBQWpCOztBQUVPLEtBQU1tSiwwQkFBUztBQUNyQmxJLFdBQVU7QUFDVGpCLGFBQVc7QUFDVkMsWUFBUyxDQUNSRCxRQURRLEVBRVIsRUFGUSxDQURDO0FBS1ZFLGdCQUFhLENBQ1pGLFFBRFk7QUFMSDtBQURGO0FBRFcsRUFBZixDOzs7Ozs7Ozs7OztBQ0ZBLEtBQU1tSiwwQkFBUztBQUNyQmxJLFdBQVU7QUFDVHdGLFVBQVEsTUFEQztBQUVUekcsYUFBVztBQUNWQyxZQUFTLENBQ1IsQ0FBQyxNQUFELEVBQVMsUUFBVCxFQUFtQixVQUFuQixFQUErQixNQUEvQixFQUF1QyxRQUF2QyxFQUFpRCxTQUFqRCxFQUE0RCxVQUE1RCxFQUF3RSxZQUF4RSxDQURRLEVBRVIsRUFGUSxDQURDO0FBS1ZDLGdCQUFhLENBQ1osQ0FBQyxNQUFELEVBQVMsUUFBVCxFQUFtQixVQUFuQixFQUErQixNQUEvQixFQUF1QyxRQUF2QyxFQUFpRCxTQUFqRCxFQUE0RCxVQUE1RCxFQUF3RSxZQUF4RSxDQURZO0FBTEg7QUFGRjtBQURXLEVBQWYsQzs7Ozs7Ozs7Ozs7QUNBQSxLQUFNaUosMEJBQVM7QUFDckJsSSxXQUFVO0FBQ1R3RixVQUFRLE1BREM7QUFFVHpHLGFBQVc7QUFDVkMsWUFBUyxDQUNSLENBQUMsTUFBRCxFQUFTLFFBQVQsRUFBbUIsVUFBbkIsRUFBK0IsTUFBL0IsRUFBdUMsUUFBdkMsRUFBaUQsU0FBakQsRUFBNEQsWUFBNUQsQ0FEUSxFQUVSLEVBRlEsQ0FEQztBQUtWQyxnQkFBYSxDQUNaLENBQUMsTUFBRCxFQUFTLFFBQVQsRUFBbUIsVUFBbkIsRUFBK0IsTUFBL0IsRUFBdUMsUUFBdkMsRUFBaUQsU0FBakQsRUFBNEQsWUFBNUQsQ0FEWTtBQUxIO0FBRkY7QUFEVyxFQUFmLEM7Ozs7Ozs7Ozs7O0FDQUEsS0FBTWlKLDBCQUFTO0FBQ3JCbEksV0FBVTtBQUNUd0YsVUFBUSxNQURDO0FBRVR6RyxhQUFXO0FBQ1ZDLFlBQVMsQ0FDUixDQUFDLE1BQUQsRUFBUyxVQUFULEVBQXFCLE1BQXJCLEVBQTZCLFFBQTdCLEVBQXVDLFFBQXZDLEVBQWlELFlBQWpELENBRFEsRUFFUixFQUZRLENBREM7QUFLVkMsZ0JBQWEsQ0FDWixDQUFDLE1BQUQsRUFBUyxVQUFULEVBQXFCLE1BQXJCLEVBQTZCLFFBQTdCLEVBQXVDLFFBQXZDLEVBQWlELFlBQWpELENBRFk7QUFMSDtBQUZGO0FBRFcsRUFBZixDIiwiZmlsZSI6ImxlLXBsYXllci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L2pzL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDhiYzc3NTA5ZjI4MTVhYTZlNjIzIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5cbmltcG9ydCBDb250cm9sIGZyb20gJy4vY29tcG9uZW50cy9Db250cm9sJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL0NvbXBvbmVudCc7XG5pbXBvcnQgUGxheUJ1dHRvbiBmcm9tICcuL2NvbXBvbmVudHMvUGxheUJ1dHRvbic7XG5pbXBvcnQgU3BsYXNoSWNvbiBmcm9tICcuL2NvbXBvbmVudHMvU3BsYXNoSWNvbic7XG5cbmltcG9ydCBJY29uIGZyb20gJy4vY29tcG9uZW50cy9JY29uJztcbmltcG9ydCBUaW1lIGZyb20gJy4vY29tcG9uZW50cy9UaW1lbGluZS9UaW1lJztcbmltcG9ydCBDb250cm9sQ29sbGVjdGlvbiBmcm9tICcuL2NvbXBvbmVudHMvQ29udHJvbENvbGxlY3Rpb24nO1xuaW1wb3J0IFNlY3Rpb25zIGZyb20gJy4vY29tcG9uZW50cy9TZWN0aW9ucyc7XG5pbXBvcnQgRXJyb3JEaXNwbGF5IGZyb20gJy4vY29tcG9uZW50cy9FcnJvckRpc3BsYXknO1xuaW1wb3J0IFBvc3RlciBmcm9tICcuL2NvbXBvbmVudHMvUG9zdGVyJztcbmltcG9ydCBGdWxsc2NyZWVuQXBpIGZyb20gJy4vRnVsbHNjcmVlbkFwaSc7XG5cbmltcG9ydCB7IGNyZWF0ZUVsLCBzZWNvbmRzVG9UaW1lLCBub29wIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgQ29va2llIGZyb20gJy4vdXRpbHMvY29va2llJztcbmltcG9ydCB7IElTX0lQSE9ORSwgSVNfSVBPRCwgSVNfQU5EUk9JRF9QSE9ORSB9IGZyb20gJy4vdXRpbHMvYnJvd3Nlcic7XG5cbmltcG9ydCBNZWRpYUVycm9yIGZyb20gJy4vTWVkaWFFcnJvcic7XG5cbi8vIFJlZ2lzdGVyIGNvbW1vbiBjb250cm9sc1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvUGxheUNvbnRyb2wnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvVm9sdW1lQ29udHJvbCc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9UaW1lbGluZS9UaW1lbGluZUNvbnRyb2wnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvU2VjdGlvbkNvbnRyb2wnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvRnVsbHNjcmVlbkNvbnRyb2wnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvUmF0ZUNvbnRyb2wnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvQmFja3dhcmRDb250cm9sJztcbmltcG9ydCAnLi9jb21wb25lbnRzL1NvdXJjZUNvbnRyb2wnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvU3VidGl0bGVDb250cm9sJztcbmltcG9ydCAnLi9jb21wb25lbnRzL0Rvd25sb2FkQ29udHJvbCc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9LZXliaW5kaW5nSW5mb0NvbnRyb2wnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvVGltZUluZm9Db250cm9sJztcblxuaW1wb3J0ICcuL2VudGl0eS9IdG1sNSc7XG5cbmltcG9ydCAnYXJyYXkucHJvdG90eXBlLmZpbmQnO1xuXG5cbkNvbnRyb2wucmVnaXN0ZXJDb250cm9sKCdkaXZpZGVyJywgZnVuY3Rpb24oKSB7XG5cdHJldHVybiB7XG5cdFx0ZWxlbWVudCA6ICQoJzxkaXYvPicpLmFkZENsYXNzKCdkaXZpZGVyJylcblx0fTtcbn0pO1xuXG5cblxuLyoqXG4gKiBSZXR1cm4gYXJyYXkgd2l0aCBleGNsdWRlZCBkaXN0J3MgaXRlbXMgZnJvbSBzb3VyY2UgYXJyYXlcbiAqXG4gKiBAYWNjZXNzIHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IHNvdXJjZVxuICogQHBhcmFtIHtBcnJheX0gZGlzdFxuICogQHJldHVybiB7QXJyYXl9XG4gKi9cbmZ1bmN0aW9uIGV4Y2x1ZGVBcnJheShzb3VyY2UsIGRpc3QpIHtcblx0Y29uc3QgcmVzdWx0ID0gW10uY29uY2F0KHNvdXJjZSk7XG5cdGRpc3QuZm9yRWFjaChpdGVtID0+IHtcblx0XHRjb25zdCBpbmRleCA9IHJlc3VsdC5pbmRleE9mKGl0ZW0pO1xuXHRcdGlmIChpbmRleCA+IC0xKSB7XG5cdFx0XHRyZXN1bHQuc3BsaWNlKGluZGV4LCAxKTtcblx0XHRcdHJldHVyblxuXHRcdH1cblx0fSlcblxuXHRyZXR1cm4gcmVzdWx0O1xufVxuXG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcblx0ZW50aXR5IDogJ0h0bWw1Jyxcblx0YXV0b3BsYXkgOiBmYWxzZSxcblx0aGVpZ2h0IDogJ2F1dG8nLFxuXHRsb29wIDogZmFsc2UsXG5cdG11dGVkIDogZmFsc2UsXG5cdHByZWxvYWQgOiAnbWV0YWRhdGEnLFxuXHRwb3N0ZXIgOiBudWxsLFxuXHRzdmdQYXRoIDogJycsXG5cdGlubmFjdGl2aXR5VGltZW91dCA6IDUwMDAsXG5cdHJhdGUgOiB7XG5cdFx0c3RlcCA6IDAuMjUsXG5cdFx0bWluIDogMC41LFxuXHRcdG1heCA6IDQuMCxcblx0XHRkZWZhdWx0IDogMVxuXHR9LFxuXHRwbGF5YmFjayA6IHtcblx0XHRzdGVwIDoge1xuXHRcdFx0c2hvcnQgOiA1LFxuXHRcdFx0bWVkaXVtIDogMTAsXG5cdFx0XHRsb25nIDogMzBcblx0XHR9XG5cdH0sXG5cdGNvbnRyb2xzIDoge1xuXHRcdGNvbW1vbiA6IFtcblx0XHRcdFsncGxheScsICd2b2x1bWUnLCAnZGl2aWRlcicsICd0aW1lbGluZScsICAnZGl2aWRlcicsICdzZWN0aW9uJywgJ2RpdmlkZXInLCAnZnVsbHNjcmVlbiddLFxuXHRcdFx0WydyYXRlJywgJ2RpdmlkZXInLCAnYmFja3dhcmQnLCAnZGl2aWRlcicsICdzb3VyY2UnLCAnZGl2aWRlcicsICdzdWJ0aXRsZScsICdkaXZpZGVyJywgJ2Rvd25sb2FkJywgJ2RpdmlkZXInLCAna2V5YmluZGluZyBpbmZvJ11cblx0XHRdLFxuXHRcdGZ1bGxzY3JlZW4gOiBbXG5cdFx0XHRbJ3BsYXknLCAndm9sdW1lJywgJ2RpdmlkZXInLCAndGltZWxpbmUnLCAnZGl2aWRlcicsICdyYXRlJywgJ2RpdmlkZXInLCAna2V5YmluZGluZyBpbmZvJywgICdkaXZpZGVyJywgJ2JhY2t3YXJkJywgJ2RpdmlkZXInLCAnc291cmNlJywgJ2RpdmlkZXInLCAnc3VidGl0bGUnLCAnZGl2aWRlcicsICdkb3dubG9hZCcsICdkaXZpZGVyJywgJ3NlY3Rpb24nLCAnZGl2aWRlcicsICdmdWxsc2NyZWVuJ11cblx0XHRdLFxuXHRcdG1pbmkgOiBbXG5cdFx0XHRbJ3BsYXknLCAndm9sdW1lJywgJ2RpdmlkZXInLCAnZnVsbHNjcmVlbicsICdkaXZpZGVyJywgJ3RpbWVpbmZvJ11cblx0XHRdXG5cdH0sXG5cdGNvbnRyb2xzT3B0aW9ucyA6IHtcblxuXHRcdGNvbW1vbiA6IHtcblx0XHRcdGFsaWduIDogWydqdXN0aWZ5JywgJ2xlZnQnXVxuXHRcdH0sXG5cblx0XHRmdWxsc2NyZWVuIDoge1xuXHRcdFx0YWxpZ24gOiAnanVzdGlmeSdcblx0XHR9XG5cdH0sXG5cdHZvbHVtZSA6IHtcblx0XHRkZWZhdWx0IDogMC40LFxuXHRcdG11dGVsaW1pdCA6IDAuMDUsXG5cdFx0c3RlcCA6IDAuMVxuXHR9LFxuXHRrZXlCaW5kaW5nIDogW1xuXHRcdHtcblx0XHRcdGtleSA6IDMyLFxuXHRcdFx0aW5mbyA6IFsnU3BhY2UnXSxcblx0XHRcdGRlc2NyaXB0aW9uIDogJ9Cd0LDRh9Cw0YLRjCDQv9GA0L7QuNCz0YDRi9Cy0LDQvdC40LUgLyDQv9C+0YHRgtCw0LLQuNGC0Ywg0L3QsCDQv9Cw0YPQt9GDJyxcblx0XHRcdGZuIDogKHBsYXllcikgPT4ge1xuXHRcdFx0XHRwbGF5ZXIudmlkZW8udG9nZ2xlUGxheSgpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0a2V5IDogMzcsXG5cdFx0XHRpbmZvIDogWyfihpAnXSxcblx0XHRcdGRlc2NyaXB0aW9uIDogYNCf0LXRgNC10LzQvtGC0LDRgtGMINC90LAgMTAg0YHQtdC60YPQvdC0INC90LDQt9Cw0LRgLFxuXHRcdFx0Zm4gOiAocGxheWVyKSA9PiB7XG5cdFx0XHRcdHBsYXllci52aWRlby5jdXJyZW50VGltZSAtPSBwbGF5ZXIub3B0aW9ucy5wbGF5YmFjay5zdGVwLm1lZGl1bTtcblx0XHRcdFx0cGxheWVyLnNwbGFzaEljb24uc2hvdygndW5kbycpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0a2V5IDogMzksXG5cdFx0XHRpbmZvIDogWyfihpInXSxcblx0XHRcdGRlc2NyaXB0aW9uIDogYNCf0LXRgNC10LzQvtGC0LDRgtGMINC90LAgMTAg0YHQtdC60YPQvdC0INCy0L/QtdGA0ZHQtGAsXG5cdFx0XHRmbiA6IChwbGF5ZXIpID0+IHtcblx0XHRcdFx0cGxheWVyLnZpZGVvLmN1cnJlbnRUaW1lICs9IHBsYXllci5vcHRpb25zLnBsYXliYWNrLnN0ZXAubWVkaXVtO1xuXHRcdFx0XHRwbGF5ZXIuc3BsYXNoSWNvbi5zaG93KCdyZWRvJyk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHR7XG5cdFx0XHRzaGlmdEtleSA6IHRydWUsXG5cdFx0XHRpbmZvIDogWydTaGlmdCcsICfihpAnXSxcblx0XHRcdGRlc2NyaXB0aW9uIDogJ9Cf0LXRgNC10LnRgtC4INC90LAg0L/RgNC10LTRi9C00YPRidGD0Y4g0YHQtdC60YbQuNGOJyxcblx0XHRcdGtleSA6IDM3LFxuXHRcdFx0Zm4gOiAocGxheWVyKSA9PiB7XG5cdFx0XHRcdGlmKHBsYXllci5zZWN0aW9ucyA9PSBudWxsKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHBsYXllci5zZWN0aW9ucy5wcmV2KCk7XG5cblx0XHRcdH1cblx0XHR9LFxuXHRcdHtcblx0XHRcdHNoaWZ0S2V5IDogdHJ1ZSxcblx0XHRcdGtleSA6IDM5LFxuXHRcdFx0aW5mbyA6IFsnU2hpZnQnLCAn4oaSJ10sXG5cdFx0XHRkZXNjcmlwdGlvbiA6ICfQn9C10YDQtdC50YLQuCDQvdCwINGB0LvQtdC00YPRjtGJ0YPRjiDRgdC10LrRhtC40Y4nLFxuXHRcdFx0Zm4gOiAocGxheWVyKSA9PiB7XG5cdFx0XHRcdGlmKHBsYXllci5zZWN0aW9ucyA9PSBudWxsKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHBsYXllci5zZWN0aW9ucy5uZXh0KClcblx0XHRcdH1cblx0XHR9LFxuXHRcdHtcblx0XHRcdGtleSA6IDM4LFxuXHRcdFx0aW5mbyA6IFsn4oaRJ10sXG5cdFx0XHRkZXNjcmlwdGlvbiA6ICfQo9Cy0LXQu9C40YfQuNGC0Ywg0LPRgNC+0LzQutC+0YHRgtGMJyxcblx0XHRcdGZuIDogKHBsYXllcikgPT4ge1xuXHRcdFx0XHRwbGF5ZXIudmlkZW8udm9sdW1lICs9IHBsYXllci5vcHRpb25zLnZvbHVtZS5zdGVwO1xuXG5cdFx0XHRcdHBsYXllci5zcGxhc2hJY29uLnNob3cocGxheWVyLmNhbGNWb2x1bWVJY29uKHBsYXllci52aWRlby52b2x1bWUpKTtcblxuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHR7XG5cdFx0XHRrZXkgOiA0MCxcblx0XHRcdGluZm8gOiBbJ+KGkyddLFxuXHRcdFx0ZGVzY3JpcHRpb24gOiAn0KPQvNC10L3RjNGI0LjRgtGMINCz0YDQvtC80LrQvtGB0YLRjCcsXG5cdFx0XHRmbiA6IChwbGF5ZXIpID0+IHtcblx0XHRcdFx0cGxheWVyLnZpZGVvLnZvbHVtZSAtPSBwbGF5ZXIub3B0aW9ucy52b2x1bWUuc3RlcDtcblxuXHRcdFx0XHRwbGF5ZXIuc3BsYXNoSWNvbi5zaG93KHBsYXllci5jYWxjVm9sdW1lSWNvbihwbGF5ZXIudmlkZW8udm9sdW1lKSk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdHtcblx0XHRcdGtleSA6IDcwLFxuXHRcdFx0aW5mbyA6IFsnZiddLFxuXHRcdFx0ZGVzY3JpcHRpb24gOiAn0J7RgtC60YDRi9GC0Ywv0LfQsNC60YDRi9GC0Ywg0L/QvtC70L3QvtGN0LrRgNCw0L3Ri9C5INGA0LXQttC40LwnLFxuXHRcdFx0Zm4gOiAocGxheWVyKSA9PiB7XG5cdFx0XHRcdHBsYXllci50b2dnbGVGdWxsc2NyZWVuKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRdLFxuXHRwbHVnaW5zIDoge1xuXHRcdG1pbmlwbGF5ZXIgOiB7fVxuXHR9LFxuXHRvblBsYXllckluaXRlZCA6IG5vb3Bcbn07XG5cbi8qKlxuICogQGNsYXNzIFBsYXllclxuICogQGV4dGVuZHMgQ29tcG9uZW50XG4gKiBAcGFyYW0ge2pRdWVyeX0gZWxlbWVudCBFbGVtZW50IHdoZW4gcGxheWVyIHdpbGwgaW5pdFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5hdXRvcGxheT1mYWxzZV1cbiAqIFdoZW4gcHJlc2VudCwgdGhlIHZpZGVvIHdpbGwgYXV0b21hdGljYWxseSBzdGFydCBwbGF5aW5nIGFzIHNvb24gYXMgaXQgY2FuIGRvIHNvIHdpdGhvdXQgc3RvcHBpbmcuXG4gKiBAcGFyYW0ge1N0cmluZ3xOdW1iZXJ9IFtvcHRpb25zLmhlaWdodD0nYXV0byddIEhlaWdodCBvZiB2aWRlbyBjb250YWluZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy53aWR0aF0gV2lkdGggb2YgdmlkZW8gY29udGFpbmVyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmxvb3A9ZmFsc2VdXG4gKiBXaGVuIHByZXNlbnQsIGl0IHNwZWNpZmllcyB0aGF0IHRoZSB2aWRlbyB3aWxsIHN0YXJ0IG92ZXIgYWdhaW4sIGV2ZXJ5IHRpbWUgaXQgaXMgZmluaXNoZWQuXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLm11dGVkPWZhbHNlXVxuICogV2hlbiBwcmVzZW50LCBpdCBzcGVjaWZpZXMgdGhhdCB0aGUgYXVkaW8gb3V0cHV0IG9mIHRoZSB2aWRlbyBzaG91bGQgYmUgbXV0ZWQuXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMucHJlbG9hZD0nbWV0YWRhdGEnXSBDYW4gYmUgKCdhdXRvJ3wnbWV0YWRhdGEnfCdub25lJylcbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5wb3N0ZXJdIFBhdGggdG8gcG9zdGVyIG9mIHZpZGVvXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuc3ZnUGF0aF0gUGF0aCB0byBzdmcgc3ByaXRlIGZvciBpY29uc1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLnJhdGVdIFJhdGUgb3B0aW9uc1xuICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLnJhdGUuc3RlcD0wLjI1XSBTdGVwIG9mIGluY3JlYXNlL2RlY3JlYXNlIGJ5IHJhdGUgY29udHJvbFxuICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLnJhdGUubWluPTAuNV0gTWluIG9mIHJhdGVcbiAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5yYXRlLm1heD00LjBdIE1heCBvZiByYXRlXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMucmF0ZS5kZWZhdWx0PTFdXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMucGxheWJhY2tdIFBsYXliYWNrIG9wdGlvbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5wbGF5YmFjay5zdGVwXVxuICogQHBhcmFtIHtOdWJtZXJ9IFtvcHRpb25zLnBsYXliYWNrLnN0ZXAuc2hvcnQ9NV1cbiAqIEBwYXJhbSB7TnVibWVyfSBbb3B0aW9ucy5wbGF5YmFjay5zdGVwLm1lZGl1bT0zMF1cbiAqIEBwYXJhbSB7TnVibWVyfSBbb3B0aW9ucy5wbGF5YmFjay5zdGVwLmxvbmc9NjBdXG4gKiBAcGFyYW0ge09iZWpjdH0gW29wdGlvbnMuY29udHJvbHNdIE9iamVjdCBvZiBjb250cm9sc1xuICogQHBhcmFtIHtTdHJpbmdbXX0gW29wdGlvbnMuY29udHJvbHMuY29tbW9uXSBBcnJheSBvZiBjb250cm9scyBmb3IgZGVmYXVsdCB2aWV3XG4gKiBAcGFyYW0ge1N0cmluZ1tdfSBbb3B0aW9ucy5jb250cm9scy5mdWxsc2NyZWVuXSBBcnJheSBvZiBjb250cm9sIGZvciBmdWxsc3JlZW4gdmlld1xuICogQHBhcmFtIHtTdHJpbmdbXX0gW29wdGlvbnMuY29udHJvbHMubWluaV0gQXJyYXkgb2YgY29udHJvbCBmb3IgbWluaXBsYXllclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLmV4Y2x1ZGVDb250cm9sc10gT2JqZWN0IG9mIGV4Y2x1ZGUgY29udHJvbHMuIFN0cnVjdHVyZSBpcyB0aGUgc2FtZSBhcyB0aGF0IG9mIG9wdGlvbnMuY29udHJvbHNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy52b2x1bWVdIFZvbHVtZSdzIG9wdGlvbnNcbiAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy52b2x1bWUuZGVmYXVsdD0wLjRdIERlZmF1bHQgdm9sdW1lXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMudm9sdW1lLm11dGVsaW1pdD0wLjA1XSBEZWx0YSB3aGVuIHZvbHVtZSBpcyBtdXRlZFxuICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLnZvbHVtZS5zdGVwPTAuMDVdXG4gKiBAcGFyYW0ge09iamVjdFtdfSBbb3B0aW9ucy5rZXliaW5kaW5nXVxuICogT2JqZWN0IHdpdGgga2V5YmluZGluZyBvcHRpb25zLCB3aGVuIGtleSBpdCdzIG5hbWUgb2Yga2V5IGJpbmRpbmcsIGFuZCB2YWx1ZSBpdCdzIGtleSBiaW5kaW5nIHNldHRpbmdzXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMua2V5YmluZGluZ1tdLmtleV0gQ29kZSBvZiBrZXkgYmluZGluZyAoZm9yIGV4YW1wbGUgMzIgaXQncyBzcGFjZSlcbiAqIEBwYXJhbSB7U3RyaW5nW119IFtvcHRpb25zLmtleWJpbmRpbmdbXS5pbmZvXSBBcnJheSBvZiBrZXlzdHJva2VzIG9yZGVyXG4gKiBAcGFyYW0ge1N0cmluZ30gb3B0aW9ucy5rZXliaW5kaW5nW10uZGVzY3JpcHRpb25dIERlc2NyaXB0aW9uIG9mIGtleSBiaW5kaW5nXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBvcHRpb25zLmtleWJpbmRpbmdbXS5mbl0gQ2FsbGJhY2tcbiAqIEBwYXJhbSB7T2JqZWN0fEJvb2xlYW59IFtvcHRpb25zLm1pbmlwbGF5ZXI9ZmFsc2VdXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMubWluaXBsYXllci53aWR0aF0gV2lkdGggb2YgbWluaXBsYXllciBjb250YWluZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5taW5pcGxheWVyLndpZHRoXSBNaW5pUGxheWVyJ3Mgd2lkdGhcbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5zZWN0aW9uQ29udGFpbmVyXSBTZWxlY3RvciBmb3Igc2VjdGlvbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5wbHVnaW5zXSBLZXlzIG9mIG9iamVjdHMgYXJlIG5hbWUgb2YgcGx1Z2luLCB2YWx1ZSAtIHBsdWdpbiBvcHRpb25zXG4gKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9IFtvcHRpb25zLmRhdGFdIFVybCBvciBKU09OIHdpdGggZGF0YSBmb3IgcGxheWVyXG4gKiBAcGFyYW0ge0FycmF5fSBbb3B0aW9ucy5kYXRhLnNlY3Rpb25zXSBTZWN0aW9ucyBhcnJheVxuICovXG5cbmNsYXNzIFBsYXllciBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKGVsZW1lbnQsIG9wdGlvbnMpIHtcblxuXHRcdG9wdGlvbnMuY3JlYXRlRWxlbWVudCA9IGZhbHNlO1xuXG5cdFx0c3VwZXIobnVsbCwgb3B0aW9ucyk7XG5cblx0XHR0aGlzLl9lbGVtZW50ID0gZWxlbWVudDtcblxuXHRcdC8qKlxuXHRcdCAqIERPTSBjb250YWluZXIgdG8gaG9sZCBpbm5lciBvZiBwbGF5ZXJcblx0XHQgKlxuXHRcdCAqIEBtZW1iZXJvZiEgUGxheWVyI1xuXHRcdCAqIEB0eXBlIHtqUXVlcnl9XG5cdFx0ICovXG5cdFx0dGhpcy5pbm5lckVsZW1lbnQgPSBjcmVhdGVFbCgnZGl2Jyk7XG5cblx0XHQvLyBVc2VycyBvcHRpb25zXG5cdFx0dGhpcy5fdXNlck9wdGlvbnMgPSBvcHRpb25zO1xuXHRcdHRoaXMuX2luaXRPcHRpb25zKCk7XG5cblx0XHRpZih0aGlzLm9wdGlvbnMuc3ZnUGF0aCA9PT0gJycpIHtcblx0XHRcdFBsYXllci5fbG9hZFNWR1Nwcml0ZShQbGF5ZXIuZGVmYXVsdFNwcml0ZSk7XG5cdFx0fVxuXG5cdFx0dGhpcy5fdmlldyA9ICdjb21tb24nO1xuXG5cdFx0LyoqXG5cdFx0ICogRE9NIGNvbnRhaW5lciB0byBob2xkIGFsbCBwbGF5ZXJcblx0XHQgKlxuXHRcdCAqIEBtZW1iZXJvZiEgUGxheWVyI1xuXHRcdCAqIEB0eXBlIHtqUXVlcnl9XG5cdFx0ICovXG5cdFx0dGhpcy5lbGVtZW50ID0gdGhpcy5jcmVhdGVFbGVtZW50KCk7XG5cblx0XHR0aGlzLmxvYWRFbnRpdHkodGhpcy5vcHRpb25zLmVudGl0eSwgeyBjdHggOiBlbGVtZW50IH0pO1xuXHRcdC8qKlxuXHRcdCAqIFZpZGVvIGh0bWw1IGNvbXBvbmVudFxuXHRcdCAqXG5cdFx0ICogQG1lbWJlcm9mISBQbGF5ZXIjXG5cdFx0ICogQHR5cGUge0VudGl0eX1cblx0XHQgKi9cblx0XHR0aGlzLnZpZGVvID0gdGhpcy5lbnRpdHk7XG5cblx0XHQvLyBDcmVhdGUgY29udHJvbHNcblx0XHQvLyBUT0RPOiBtb3ZlIHRoaXMgYWN0aW9uIHRvIHRoZSBjcmVhdGVFbGVtZW50XG5cdFx0dGhpcy5jb250cm9scyA9IHt9O1xuXHRcdHRoaXMuX2luaXRDb250cm9scygpO1xuXG5cdFx0LyoqXG5cdFx0ICogQGFjY2VzcyBwcml2YXRlXG5cdFx0ICovXG5cdFx0dGhpcy5fZGJsY2xpY2tUaW1lb3V0ID0gbnVsbDtcblxuXHRcdHRoaXMuX2luaXRTZWN0aW9ucygpLnRoZW4oKGRhdGEpID0+IHtcblx0XHRcdHRoaXMuc2VjdGlvbnMgPSBkYXRhLnNlY3Rpb25zQ29tcG9uZW50O1xuXG5cdFx0XHQvKipcblx0XHRcdCAqIFNlY3Rpb25zIGluaXQgZXZlbnRcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI3NlY3Rpb25zaW5pdFxuXHRcdFx0ICogQGV4YW1wbGVcblx0XHRcdCAqIGNvbnN0IHBsYXllciA9IG5ldyBQbGF5ZXIoJCgnI3ZpZGVvJyksIG9wdGlvbnMpO1xuXHRcdFx0ICogcGxheWVyLm9uKCdzZWN0aW9uc2luaXQnLCAoZSwgZGF0YSkgPT4gY29zbm9sZS5sb2coZGF0YSkpO1xuXHRcdFx0ICpcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdzZWN0aW9uc2luaXQnLCBkYXRhKTtcblx0XHR9KTtcblx0XHR0aGlzLl9pbml0UGx1Z2lucygpO1xuXG5cdFx0dGhpcy5fbGlzdGVuSG90S2V5cygpO1xuXG5cdFx0dGhpcy5fdXNlckFjdGl2aXR5ID0gZmFsc2U7XG5cdFx0dGhpcy5fbGlzdGVuVXNlckFjdGl2aXR5KCk7XG5cblx0XHR0aGlzLl93YWl0aW5nVGltZW91dHMgPSBbXTtcblxuXHRcdC8qIFJldHJpZ2dlciB7QGxpbmsgRW50aXR5fSBFdmVudHMgKi9cblx0XHRbXG5cdFx0XHQvKipcblx0XHRcdCAqIGR1cmF0aW9uY2hhbmdlIHBsYXllciBldmVudFxuXHRcdFx0ICpcblx0XHRcdCAqIEBldmVudCBQbGF5ZXIjZHVyYXRpb25jaGFuZ2Vcblx0XHRcdCAqL1xuXHRcdFx0J2R1cmF0aW9uY2hhbmdlJyxcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBwcm9ncmVzcyBodG1sNSBtZWRpYSBldmVudFxuXHRcdFx0ICpcblx0XHRcdCAqIEBldmVudCBQbGF5ZXIjcHJvZ3Jlc3Ncblx0XHRcdCAqL1xuXHRcdFx0J3Byb2dyZXNzJyxcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBkYmxjbGlja1xuXHRcdFx0ICpcblx0XHRcdCAqIEBldmVudCBQbGF5ZXIjZGJjbGlja1xuXHRcdFx0ICovXG5cdFx0XHQnZGJsY2xpY2snLFxuXG5cdFx0XHQvKipcblx0XHRcdCAqIGRibGNsaWNrXG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciNkYmNsaWNrXG5cdFx0XHQgKi9cblx0XHRcdCdjbGljaycsXG5cblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBjYW5wbGF5IGh0bWw1IG1lZGlhIGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciNjYW5wbGF5XG5cdFx0XHQgKi9cblx0XHRcdCdjYW5wbGF5JyxcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBxdWFsaXR5Y2hhbmdlIGh0bWw1XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciNxdWFsaXR5Y2hhbmdlXG5cdFx0XHQgKi9cblx0XHRcdCdxdWFsaXR5Y2hhbmdlJyxcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBxdWFsaXR5Y2hhbmdlIGh0bWw1XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciN0cmFja3NjaGFuZ2Vcblx0XHRcdCAqL1xuXHRcdFx0J3RyYWNrc2NoYW5nZScsXG5cblxuXG5cdFx0XS5mb3JFYWNoKGV2ZW50TmFtZSA9PiB7XG5cdFx0XHR0aGlzLnZpZGVvLm9uKGV2ZW50TmFtZSwgKCkgPT4ge1xuXHRcdFx0XHR0aGlzLnRyaWdnZXIoZXZlbnROYW1lKTtcblx0XHRcdH0pXG5cdFx0fSk7XG5cblx0XHR0aGlzLnZpZGVvLm9uZSgncGxheScsICgpID0+IHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRmlyc3QgcGxheSBldmVudFxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBldmVudCBQbGF5ZXIjZmlyc3RwbGF5XG4gICAgICAgICAgICAgKi9cblx0XHRcdHRoaXMudHJpZ2dlcignZmlyc3RwbGF5Jyk7XG5cdFx0XHR0aGlzLnJlbW92ZUNsYXNzKCdsZXBsYXllci0tdmlyZ2luJyk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLnZpZGVvLm9uKCd0aW1ldXBkYXRlJywgKCkgPT4ge1xuXHRcdFx0aWYgKHRoaXMudmlkZW8uY3VycmVudFRpbWUgPiAwKSB7XG5cdFx0XHRcdHRoaXMucmVtb3ZlQ2xhc3MoJ2xlcGxheWVyLS12aXJnaW4nKTtcblx0XHRcdH1cblxuXHRcdFx0LyoqXG5cdFx0XHQgKiB0aW1ldXBkYXRlIGh0bWw1IG1lZGlhIGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciN0aW1ldXBkYXRlXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMudHJpZ2dlcigndGltZXVwZGF0ZScsIHsgdGltZSA6IHRoaXMudmlkZW8uY3VycmVudFRpbWUsIGR1cmF0aW9uIDogdGhpcy52aWRlby5kdXJhdGlvbiB9KTtcblxuXHRcdH0pXG5cblx0XHR0aGlzLnZpZGVvLm9uKCdsb2Fkc3RhcnQnLCAoKSA9PiB7XG5cdFx0XHR0aGlzLnJlbW92ZUNsYXNzKCdsZXBsYXllci0tZW5kZWQnKTtcblxuXHRcdFx0dGhpcy5lcnJvciA9IG51bGw7XG5cdFx0XHQvKipcblx0XHRcdCAqIGxvYWRzdGFydCBwbGF5ZXIgZXZlbnRcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI2xvYWRzdGFydFxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLnRyaWdnZXIoJ2xvYWRzdGFydCcpO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy52aWRlby5vbignc2Vla2luZycsICgpID0+IHtcblx0XHRcdHRoaXMuX3N0YXJ0V2FpdGluZygpO1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBzZWVraW5nIGh0bWw1IG1lZGlhIGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciNzZWVraW5nXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMudHJpZ2dlcignc2Vla2luZycpO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy52aWRlby5vbignc2Vla2VkJywgKCkgPT4ge1xuXHRcdFx0dGhpcy5fc3RvcFdheXRpbmcoKTtcblx0XHRcdC8qKlxuXHRcdFx0ICogc2Vla2VkIGh0bWw1IG1lZGlhIGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciNzZWVrZWRcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdzZWVrZWQnKTtcblx0XHR9KTtcblxuXHRcdHRoaXMudmlkZW8ub24oJ3ZvbHVtZWNoYW5nZScsICgpID0+IHtcblx0XHRcdC8qKlxuXHRcdFx0ICogdm9sdW1lY2hhbmdlIGh0bWw1IG1lZGlhIGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciN2b2x1bWVjaGFuZ2Vcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy50cmlnZ2VyKCd2b2x1bWVjaGFuZ2UnLCB7IHZvbHVtZSA6IHRoaXMudmlkZW8udm9sdW1lIH0pO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy52aWRlby5vbigncG9zdGVyY2hhbmdlJywgKGUsIGRhdGEpID0+IHtcblx0XHRcdGNvbnN0IHVybCA9IGRhdGEudXJsO1xuXHRcdFx0dGhpcy5wb3N0ZXIudXJsID0gdXJsO1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdwb3N0ZXJjaGFuZ2UnKTtcblx0XHR9KTtcblxuXHRcdHRoaXMudmlkZW8ub24oJ3BsYXknLCAoZSkgPT4ge1xuXHRcdFx0dGhpcy5yZW1vdmVDbGFzcygnbGVwbGF5ZXItLWVuZGVkJyk7XG5cdFx0XHR0aGlzLnJlbW92ZUNsYXNzKCdsZXBsYXllci0tcGF1c2VkJyk7XG5cdFx0XHR0aGlzLmFkZENsYXNzKCdsZXBsYXllci0tcGxheWluZycpO1xuXG5cdFx0XHQvKipcblx0XHRcdCAqIHBsYXkgaHRtbDUgbWVkaWEgZXZlbnRcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI3BsYXlcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdwbGF5Jyk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLnZpZGVvLm9uKCdwYXVzZScsICgpID0+IHtcblx0XHRcdHRoaXMucmVtb3ZlQ2xhc3MoJ2xlcGxheWVyLS1wbGF5aW5nJyk7XG5cdFx0XHR0aGlzLmFkZENsYXNzKCdsZXBsYXllci0tcGF1c2VkJyk7XG5cblx0XHRcdC8qKlxuXHRcdFx0ICogcGF1c2UgaHRtbDUgbWVkaWEgZXZlbnRcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI3BhdXNlXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMudHJpZ2dlcigncGF1c2UnKTtcblx0XHR9KTtcblxuXHRcdHRoaXMudmlkZW8ub24oJ3BsYXlpbmcnLCAoKSA9PiB7XG5cdFx0XHR0aGlzLl9zdG9wV2F5dGluZygpO1xuXG5cdFx0XHQvKipcblx0XHRcdCAqIHBsYXlpbmcgaHRtbDUgbWVkaWEgZXZlbnRcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI3BsYXlpbmdcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdwbGF5aW5nJyk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLnZpZGVvLm9uKCdyYXRlY2hhbmdlJywgKCkgPT4ge1xuXHRcdFx0LyoqXG5cdFx0XHQgKiByYXRlIGh0bWw1IG1lZGlhIGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciNyYXRlXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMudHJpZ2dlcigncmF0ZWNoYW5nZScsIHsgcmF0ZSA6IHRoaXMudmlkZW8ucmF0ZSB9KTtcblx0XHR9KTtcblxuXHRcdHRoaXMudmlkZW8ub24oJ2VuZGVkJywgKCkgPT4ge1xuXHRcdFx0dGhpcy5hZGRDbGFzcygnbGVwbGF5ZXItLWVuZGVkJyk7XG5cblx0XHRcdGlmKHRoaXMub3B0aW9ucy5sb29wKSB7XG5cdFx0XHRcdHRoaXMuY3VycmVudFRpbWUgPSAwO1xuXHRcdFx0XHR0aGlzLnZpZGVvLnBsYXkoKTtcblx0XHRcdH0gZWxzZSBpZiAoIXRoaXMudmlkZW8ucGF1c2VkKSB7XG5cdFx0XHRcdHRoaXMudmlkZW8ucGF1c2UoKTtcblx0XHRcdH1cblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBlbmRlZCBodG1sNSBtZWRpYSBldmVudFxuXHRcdFx0ICpcblx0XHRcdCAqIEBldmVudCBQbGF5ZXIjZW5kZWRcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdlbmRlZCcpO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy52aWRlby5vbignY2FucGxheXRocm91Z2gnLCAoKSA9PiB7XG5cdFx0XHR0aGlzLl9zdG9wV2F5dGluZygpO1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBjYW5wbGF5dGhyb3VnaCBodG1sNSBtZWRpYSBldmVudFxuXHRcdFx0ICpcblx0XHRcdCAqIEBldmVudCBQbGF5ZXIjY2FucGxheXRocm91Z2hcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdjYW5wbGF5dGhyb3VnaCcpO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy52aWRlby5vbignd2FpdGluZycsICgpID0+IHtcblx0XHRcdHRoaXMuX3N0YXJ0V2FpdGluZygpO1xuXG5cdFx0XHR0aGlzLnZpZGVvLm9uZSgndGltZXVwZGF0ZScsICgpID0+IHRoaXMuX3N0b3BXYXl0aW5nKCkpO1xuXG5cdFx0XHQvKipcblx0XHRcdCAqIHdhaXRpbmcgaHRtbDUgbWVkaWEgZXZlbnRcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI3dhaXRpbmdcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy50cmlnZ2VyKCd3YWl0aW5nJyk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLnZpZGVvLm9uKCdlcnJvcicsIChlLCBkYXRhKSA9PiB7XG5cdFx0XHR0aGlzLmVycm9yID0gbmV3IE1lZGlhRXJyb3IoZGF0YS5jb2RlKTtcblx0XHR9KTtcblxuXHRcdHRoaXMudmlkZW8uaW5pdCgpLnRoZW4oKCkgPT4ge1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBQbGF5ZXIgaW5pdCBldmVudFxuXHRcdFx0ICpcblx0XHRcdCAqIEBldmVudCBQbGF5ZXIjaW5pdGVkXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMudHJpZ2dlcignaW5pdGVkJyk7XG5cblx0XHRcdGlmKHRoaXMub3B0aW9ucy50aW1lKSB7XG5cdFx0XHRcdHRoaXMuY3VycmVudFRpbWUgPSB0aGlzLm9wdGlvbnMudGltZTtcblx0XHRcdH1cblxuXHRcdFx0aWYodGhpcy52aWRlby5zcmMgIT0gbnVsbCAmJiB0aGlzLm9wdGlvbnMuYXV0b3BsYXkpIHtcblx0XHRcdFx0dGhpcy5wbGF5KCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblxuXHRcdHRoaXMub24oJ2Z1bGxzY3JlZW5jaGFuZ2UnLCB0aGlzLl9vbkZ1bGxzY3JlZW5DaGFuZ2UuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5vbignY2xpY2snLCB0aGlzLl9vbkNsaWNrLmJpbmQodGhpcykpO1xuXHRcdHRoaXMub24oJ2RibGNsaWNrJywgdGhpcy5fb25EYmNsaWNrLmJpbmQodGhpcykpO1xuXHRcdHRoaXMub24oJ2luaXRlZCcsIHRoaXMuX29uSW5pdGVkLmJpbmQodGhpcykpO1xuXHRcdHRoaXMub24oJ3BsYXknLCB0aGlzLl9vblBsYXkuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5vbigncGF1c2UnLCB0aGlzLl9vblBhdXNlLmJpbmQodGhpcykpO1xuXG5cdFx0JChkb2N1bWVudCkub24oRnVsbHNjcmVlbkFwaS5mdWxsc2NyZWVuY2hhbmdlLCB0aGlzLl9vbkVudGl0eUZ1bGxzY3JlbkNoYW5nZS5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdGdldCBlbnRpdHkoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2VudGl0eTtcblx0fVxuXG5cdGxvYWRFbnRpdHkobmFtZSwgb3B0aW9ucykge1xuXHRcdGNvbnN0IEVudGl0eSA9IFBsYXllci5nZXRDb21wb25lbnQobmFtZSk7XG5cdFx0dGhpcy5fZW50aXR5ID0gbmV3IEVudGl0eSh0aGlzLCBvcHRpb25zKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTdGFydHMgcGxheWluZyB0aGUgdmlkZW9cblx0ICpcblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQGV4YW1wbGVcblx0ICogY29uc3QgcGxheWVyID0gbmV3IFBsYXllcigkKFwiI3ZpZGVvXCIpLG9wdGlvbnMpO1xuXHQgKiAkKCcuc29tZS1idXR0b24nKS5vbignY2xpY2snLCAoKSA9PiBwbGF5ZXIucGxheSgpKTtcblx0ICovXG5cdHBsYXkoKSB7XG5cdFx0cmV0dXJuIHRoaXMudmlkZW8ucGxheSgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFBhdXNlcyB0aGUgY3VycmVudGx5IHBsYXlpbmcgdmlkZW9cblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICovXG5cdHBhdXNlKCkge1xuXHRcdHJldHVybiB0aGlzLnZpZGVvLnBhdXNlKCk7XG5cdH1cblxuXHQvKipcblx0ICogVG9nZ2xlIHRoZSBjdXJyZW50bHkgcGxheWluZyB2aWRlb1xuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKi9cblx0dG9nZ2xlUGxheSgpIHtcblx0XHRyZXR1cm4gdGhpcy52aWRlby50b2dnbGVQbGF5KCk7XG5cdH1cblxuXHQvKipcblx0ICogQmVnaW4gbG9hZGluZyB0aGUgc3JjIGRhdGFcblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICovXG5cdGxvYWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMudmlkZW8ubG9hZCgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIE9uIHNldCB2aWV3IGNhbGxiYWNrXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSB2aWV3IFZpZXcgbmFtZVxuXHQgKiBAcmV0dXJucyB7UGxheWVyfSB0aGlzXG5cdCAqIEBleGFtcGxlXG5cdCAqIGNvbnN0IHBsYXllciA9IG5ldyBQbGF5ZXIoJCgnI3ZpZGVvJyksIG9wdGlvbnMpO1xuXHQgKiBwbGF5ZXIub25TZXRWaWV3KCdtaW5pJywgKCkgPT4gY29uc29sZS5sb2coJ01pbmlwbGF5ZXIgeWVhaCEnKVxuXHQgKiAgICAgLm9uU2V0VmlldygnZnVsbHNjcmVlbicsICgpID0+IGNvbnNvbGUubG9nKCdGdWxsc2NyZWVuIGJvb20hJylcblx0ICogICAgIC5vblNldFZpZXcoJ2NvbW1vbicsICgpID0+IGNvbnNvbGUubG9nKCdDb21tb24gdmlldyAtIGxvbCcpO1xuXHQgKi9cblx0b25TZXRWaWV3KHZpZXcsIC4uLmFyZ3MpIHtcblx0XHR0aGlzLm9uKGBzZXR2aWV3LiR7dmlld31gLCAuLi5hcmdzKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0LyoqXG5cdCAqIE9uIGRlbCB2aWV3IGNhbGxiYWNrXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSB2aWV3IFZpZXcgbmFtZVxuXHQgKiBAcmV0dXJucyB7UGxheWVyfSB0aGlzXG5cdCAqIEBleGFtcGxlXG5cdCAqIGNvbnN0IHBsYXllciA9IG5ldyBQbGF5ZXIoJCgnI3ZpZGVvJyksIG9wdGlvbnMpO1xuXHQgKiBwbGF5ZXIub25EZWxWaWV3KCdtaW5pJywgKCkgPT4gY29uc29sZS5sb2coJ0V4aXQgbWluaXBsYXllcicpXG5cdCAqL1xuXHRvbkRlbFZpZXcodmlldywgLi4uYXJncykge1xuXHRcdHRoaXMub24oYGRlbHZpZXcuJHt2aWV3fWAsIC4uLmFyZ3MpO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHNvbWUgZGF0YSBmb3IgcGxheWVyXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEByZXR1cm5zIHtqUXVlcnkucHJvbWlzZX0gUHJvbWlzZVxuXHQgKi9cblx0Z2V0RGF0YSgpIHtcblx0XHRjb25zdCBkZmQgPSBuZXcgJC5EZWZlcnJlZCgpO1xuXG5cdFx0aWYgKHRoaXMuX2RhdGEgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0ZGZkLnJlc29sdmUodGhpcy5fZGF0YSk7XG5cdFx0XHRyZXR1cm4gZGZkLnByb21pc2UoKVxuXHRcdH1cblxuXHRcdGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmRhdGEgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRyZXR1cm4gJC5hamF4KHtcblx0XHRcdFx0dXJsIDogdGhpcy5vcHRpb25zLmRhdGEsXG5cdFx0XHRcdG1ldGhvZCA6ICdHRVQnLFxuXHRcdFx0XHRkYXRhVHlwZSA6ICdqc29uJ1xuXHRcdFx0fSkucHJvbWlzZSgpO1xuXG5cdFx0fSBlbHNlIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmRhdGEgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRkZmQucmVzb2x2ZSh0aGlzLm9wdGlvbnMuZGF0YSk7XG5cdFx0XHRyZXR1cm4gZGZkLnByb21pc2UoKVxuXHRcdH1cblx0fVxuXG5cdGdldFNlY3Rpb25EYXRhKCkge1xuXHRcdHJldHVybiB0aGlzLmdldERhdGEoKVxuXHRcdFx0LnRoZW4oZGF0YSA9PiB7XG5cdFx0XHRcdHJldHVybiBkYXRhLnNlY3Rpb25zXG5cdFx0XHR9KVxuXHR9XG5cblx0LyoqXG5cdCAqIFJlcXVlc3QgZnVsbHNjcmVlblxuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAZmlyZXMgUGxheWVyI2Z1bGxzY3JlZW5jaGFuZ2Vcblx0ICovXG5cdHJlcXVlc3RGdWxsc2NyZWVuKCkge1xuXHRcdGNvbnN0IGZzQXBpID0gRnVsbHNjcmVlbkFwaTtcblxuXHRcdGlmKGZzQXBpLnJlcXVlc3RGdWxsc2NyZWVuKSB7XG5cdFx0XHQvLyBDYWxsIEhUTUw1IFZpZGVvIGFwaSByZXF1ZXN0RnVsbHNjcmVlblxuXHRcdFx0dGhpcy5lbGVtZW50WzBdW2ZzQXBpLnJlcXVlc3RGdWxsc2NyZWVuXSgpO1xuXG5cdFx0XHQvKipcblx0XHRcdCAqIGZ1bGxzY3JlZW5jaGFuZ2UgaHRtbDUgbWVkaWEgZXZlbnRcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI2Z1bGxzY3JlZW5jaGFuZ2Vcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdmdWxsc2NyZWVuY2hhbmdlJywgdHJ1ZSk7XG5cdFx0fSBlbHNlIGlmICh0aGlzLnZpZGVvLnN1cHBvcnRzRnVsbFNjcmVlbigpKSB7XG5cdFx0XHR0aGlzLnZpZGVvLmVudGVyRnVsbHNjcmVlbigpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBFeGl0IGZ1bGxzY3JlZW5cblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQGZpcmVzIFBsYXllciNmdWxsc2NyZWVuY2hhbmdlXG5cdCAqL1xuXHRleGl0RnVsbHNjcmVlbigpIHtcblx0XHRjb25zdCBmc0FwaSA9IEZ1bGxzY3JlZW5BcGk7XG5cblx0XHRpZihmc0FwaS5leGl0RnVsbHNjcmVlbikge1xuXHRcdFx0ZG9jdW1lbnRbZnNBcGkuZXhpdEZ1bGxzY3JlZW5dKCk7XG5cdFx0fSBlbHNlIGlmICh0aGlzLnZpZGVvLnN1cHBvcnRzRnVsbFNjcmVlbigpKSB7XG5cdFx0XHR0aGlzLnZpZGVvLmV4aXRGdWxsc2NyZWVuKCk7XG5cdFx0fVxuXG5cdFx0dGhpcy50cmlnZ2VyKCdmdWxsc2NyZWVuY2hhbmdlJywgZmFsc2UpO1xuXG5cdH1cblxuXHQvKipcblx0ICogVG9nZ2xlIGZ1bGxzY3JlZW5cblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQGZpcmVzIFBsYXllciNmdWxsc2NyZWVuY2hhbmdlXG5cdCAqL1xuXHR0b2dnbGVGdWxsc2NyZWVuKCkge1xuXHRcdGlmKHRoaXMudmlldyA9PT0gJ2Z1bGxzY3JlZW4nKSB7XG5cdFx0XHR0aGlzLmV4aXRGdWxsc2NyZWVuKClcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5yZXF1ZXN0RnVsbHNjcmVlbigpXG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBDb250cm9sQ29sbGVjdGlvbiBvZiBQbGF5ZXIgYnkgbmFtZSAoZS54ICdjb21tb24nLCAnZnVsbHNjcmVlbicpXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIC0gTmFtZSBvZiBDb250cm9sQ29sbGVjdGlvblxuXHQgKiBAcmV0dXJucyB7Q29udHJvbENvbGxlY3Rpb259XG5cdCAqL1xuXHRnZXRDb250cm9scyhuYW1lKSB7XG5cdFx0cmV0dXJuIHRoaXMuY29udHJvbHNbbmFtZV07XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJuIHRoZSB3aWR0aCBvZiBwbGF5ZXIuXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEByZXR1cm5zIHtOdW1iZXJ9IFdpZHRoIGluIHB4XG5cdCAqL1xuXHRnZXRXaWR0aCgpIHtcblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50LndpZHRoKClcblx0fVxuXG5cdC8qKlxuXHQgKiBDb21wbGV0ZSB0aGUgc2VjdGlvbnMsIGJ5IHRoZSBhZGRpdGlvbmFsIGZpZWxkICdlbmQnIGluIGVhY2ggc2VjdGlvblxuXHQgKlxuXHQgKiBAYWNjZXNzIHByaXZhdGVcblx0ICogQHBhcmFtIHtPYmplY3R9IHNlY3Rpb25zIC0gU2VjdGlvbnNcblx0ICogQHJldHVybnMge09iamVjdH0gTmV3IHNlY3Rpb25zXG5cdCAqL1xuXHRfY29tcGxldGVTZWN0aW9ucyhzZWN0aW9ucykge1xuXHRcdGlmIChzZWN0aW9ucyA9PSBudWxsIHx8IHNlY3Rpb25zLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuXG5cdFx0fVxuXHRcdGxldCBuZXdTZWN0aW9ucyA9IFtdLmNvbmNhdChzZWN0aW9ucylcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG5ld1NlY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRsZXQgZW5kU2VjdGlvbjtcblx0XHRcdGlmIChpIDwgKG5ld1NlY3Rpb25zLmxlbmd0aCAtIDEpKSB7XG5cdFx0XHRcdGVuZFNlY3Rpb24gPSBuZXdTZWN0aW9uc1tpKzFdLmJlZ2luXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRlbmRTZWN0aW9uID0gdGhpcy52aWRlby5kdXJhdGlvbjtcblx0XHRcdH1cblx0XHRcdG5ld1NlY3Rpb25zW2ldLmVuZCA9IGVuZFNlY3Rpb247XG5cdFx0fVxuXHRcdHJldHVybiBuZXdTZWN0aW9ucztcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgYW5kIHNldCB0aGUgY3VycmVudCBwbGF5YmFjayBwb3NpdGlvbiBpbiB0aGUgYXVkaW8vdmlkZW8gKGluIHNlY29uZHMpXG5cdCAqIEdldHRlciBhbmQgc2V0dGVyXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBtZW1iZXJvZiEgUGxheWVyI1xuXHQgKiBAdHlwZSB7TnVibWVyfVxuXHQgKi9cblx0Z2V0IGN1cnJlbnRUaW1lKCkge1xuXHRcdHJldHVybiB0aGlzLnZpZGVvLmN1cnJlbnRUaW1lO1xuXHR9XG5cblx0c2V0IGN1cnJlbnRUaW1lKHZhbHVlKSB7XG5cdFx0dGhpcy52aWRlby5jdXJyZW50VGltZSA9IHZhbHVlO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgdGhlIGxlbmd0aCBvZiB0aGUgY3VycmVudCBhdWRpby92aWRlbyAoaW4gc2Vjb25kcylcblx0ICogR2V0dGVyXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBtZW1iZXJvZiEgUGxheWVyI1xuXHQgKiBAdHlwZSB7TnVibWVyfVxuXHQgKi9cblx0Z2V0IGR1cmF0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLnZpZGVvLmR1cmF0aW9uO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgd2hldGhlciB0aGUgcGxheWJhY2sgb2YgdGhlIGF1ZGlvL3ZpZGVvIGhhcyBlbmRlZCBvciBub3Rcblx0ICogR2V0dGVyXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiEgUGxheWVyI1xuXHQgKiBAdHlwZSB7Qm9vbGVhbn1cblx0ICovXG5cdGdldCBlbmRlZCgpIHtcblx0XHRyZXR1cm4gdGhpcy52aWRlby5lbmRlZDtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIGFuZCBzZXQgd2hldGhlciB0aGUgcGxheWJhY2sgb2YgdGhlIGF1ZGlvL3ZpZGVvIGhhcyBlbmRlZCBvciBub3Rcblx0ICogR2V0dGVyIGFuZCBzZXR0ZXJcblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQG1lbWJlcm9mISBQbGF5ZXIjXG5cdCAqIEB0eXBlIHtNZWRpYUVycm9yfFN0cmluZ31cblx0ICogQGZpcmVzIFBsYXllciNlcnJvclxuXHQgKi9cblx0Z2V0IGVycm9yKCkge1xuXHRcdHJldHVybiB0aGlzLl9lcnJvciB8fCBudWxsO1xuXHR9XG5cblx0c2V0IGVycm9yKHZhbHVlKSB7XG5cdFx0aWYgKHZhbHVlID09PSBudWxsKSB7XG5cdFx0XHR0aGlzLl9lcnJvciA9IG51bGw7XG5cdFx0XHR0aGlzLnJlbW92ZUNsYXNzKCdsZXBsYXllci0tZXJyb3InKTtcblx0XHRcdGlmKHRoaXMuZXJyb3JEaXNwbGF5KSB7XG5cdFx0XHRcdHRoaXMuZXJyb3JEaXNwbGF5LmVsZW1lbnQuaGlkZSgpXG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cdFx0dGhpcy5fZXJyb3IgPSBuZXcgTWVkaWFFcnJvcih2YWx1ZSk7XG5cblx0XHR0aGlzLmFkZENsYXNzKCdsZXBsYXllci0tZXJyb3InKTtcblxuXHRcdC8qKlxuXHRcdCAqIGVycm9yIGV2ZW50XG5cdFx0ICpcblx0XHQgKiBAZXZlbnQgUGxheWVyI2Vycm9yXG5cdFx0ICogQHByb3BlcnR5IHtNZWRpYUVycm9yfSBlcnJvclxuXHRcdCAqIEBleGFtcGxlXG5cdFx0ICogY29uc3QgcGxheWVyID0gbmV3IFBsYXllcigkKCcjdmlkZW8nKSwgb3B0aW9ucyk7XG5cdFx0ICogcGxheWVyLm9uKCdlcnJvcicsIChlLCBkYXRhKSA9PiBjb25zb2xlLmVycm9yKGRhdGEuZXJyb3IpKTtcblx0XHQgKi9cblx0XHR0aGlzLnRyaWdnZXIoJ2Vycm9yJywgeyBlcnJvciA6IHRoaXMuX2Vycm9yfSk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm4gdGhlIGhlaWdodCBvZiBwbGF5ZXIuIElmIHlvdSB3YW50IGdldCBoZWlnaHQgb25seSBvZiB2aWRlbyBlbGVtZW50LCB1c2UgdGhpcy52aWRlby5oZWlnaHQgb3Igd2hhdGV2ZXJcblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHR5cGUge051bWJlcn1cblx0ICogQG1lbWJlcm9mISBQbGF5ZXIjXG5cdCAqL1xuXHRnZXQgaGVpZ2h0KCkge1xuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQuaGVpZ2h0KClcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm4gdW5uZWNlc3NhcnkgdmlkZW8gaGVpZ3RoXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEB0eXBlIHtOdW1iZXJ9XG5cdCAqIEBtZW1iZXJvZiEgUGxheWVyI1xuXHQgKi9cblx0Z2V0IHZpZGVvSGVpZ2h0KCkge1xuXHRcdHJldHVybiB0aGlzLnZpZGVvLmhlaWdodDtcblx0fVxuXG5cblx0LyoqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEB0eXBlIHtCb29sZWFufVxuXHQgKiBAbWVibWVyb2YhIFBsYXllciNcblx0ICovXG5cdGdldCB1c2VyQWN0aXZlKCkge1xuXHRcdHJldHVybiB0aGlzLl91c2VyQWN0aXZlIHx8IGZhbHNlO1xuXHR9XG5cblx0c2V0IHVzZXJBY3RpdmUodmFsdWUpIHtcblx0XHRpZih2YWx1ZSAhPT0gdGhpcy5nZXRVc2VyQWN0aXZlKSB7XG5cdFx0XHR0aGlzLl91c2VyQWN0aXZlID0gdmFsdWU7XG5cdFx0XHR0aGlzLnRvZ2dsZUNsYXNzKCdsZXBsYXllci0tdXNlci1hY3RpdmUnLCB2YWx1ZSk7XG5cdFx0XHQvKipcblx0XHRcdCAqIFVzZXIgYWN0aXZlIGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciN1c2VyYWN0aXZlXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMudHJpZ2dlcigndXNlcmFjdGl2ZScpO1xuXHRcdH1cblx0fVxuXG5cblx0LyoqXG5cdCAqIFNldCBhbmQgZ2V0IHBsYXllciB2aWV3LiBWaWV3IENhbiBiZSAnY29tbW9uJywgJ2Z1bGxzY3JlZW4nLCAnbWluaSd3XG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEB0eXBlIHtTdHJpbmd9XG5cdCAqIEBtZW1iZXJvZiEgUGxheWVyI1xuXHQgKi9cblx0Z2V0IHZpZXcoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3ZpZXc7XG5cdH1cblxuXHRzZXQgdmlldyh2aWV3KSB7XG5cdFx0aWYodGhpcy52aWV3ICE9IG51bGwpIHtcblx0XHRcdHRoaXMucmVtb3ZlQ2xhc3MoYGxlcGxheWVyLS0ke3RoaXMudmlld31gKTtcblx0XHRcdHRoaXMudHJpZ2dlcihgZGVsdmlldy4ke3RoaXMudmlld31gKTtcblx0XHR9XG5cblx0XHR0aGlzLl92aWV3ID0gdmlldztcblx0XHR0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoYGxlcGxheWVyLS0ke3ZpZXd9YClcblx0XHR0aGlzLnRyaWdnZXIoYHNldHZpZXcuJHt2aWV3fWApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvKipcblx0ICogUmVtb3ZlIHVubmVjZXNzYXJ5IGF0dHJpYnV0ZXMsIGFuZCBzZXQgc29tZSBhdHRycyBmcm9tIG9wdGlvbnMgKGxvb3AsIHBvc3RlciBldGMuLi4pLiBDcmVhdGUgbWFpbiBET00gb2JqZWN0c1xuXHQgKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0Y29uc3Qgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcblx0XHRjb25zdCBlbGVtZW50ID0gdGhpcy5fZWxlbWVudDtcblxuXHRcdHRoaXMuZWxlbWVudCA9IGNyZWF0ZUVsKCdkaXYnKTtcblxuXG5cdFx0dGhpcy5lbGVtZW50ID0gdGhpcy5lbGVtZW50XG5cdFx0XHQuYWRkQ2xhc3MoJ2xlcGxheWVyJylcblx0XHRcdC5hdHRyKCd0YWJpbmRleCcsIDApXG5cdFx0XHQuY3NzKCd3aWR0aCcsIG9wdGlvbnMud2lkdGggJiYgJzEwMCUnKVxuXHRcdFx0LmNzcygnbWF4LXdpZHRoJywgb3B0aW9ucy53aWR0aClcblxuXHRcdC8qKlxuXHRcdCAqIEVycm9yIGRpc3BsYXkgY29tcG9uZW50LlxuXHRcdCAqXG5cdFx0ICogQHR5cGUge0Vycm9yRGlzcGxheX1cblx0XHQgKiBAbWVtYmVyb2YhIFBsYXllciNcblx0XHQgKi9cblx0XHR0aGlzLmVycm9yRGlzcGxheSA9IG5ldyBFcnJvckRpc3BsYXkodGhpcyk7XG5cblxuXHRcdC8qKlxuXHRcdCAqIFBsYXkgYnV0dG9uIGNvbXBvbmVudC5cblx0XHQgKlxuXHRcdCAqIEB0eXBlIHtQbGF5QnV0dG9ufVxuXHRcdCAqIEBtZW1iZXJvZiEgUGxheWVyI1xuXHRcdCAqL1xuXHRcdHRoaXMucGxheUJ1dHRvbiA9IG5ldyBQbGF5QnV0dG9uKHRoaXMpO1xuXG5cdFx0Ly8gVE9ETzog0JLRi9C90LXRgdGC0Lgg0Y3RgtC+INCyINC+0YLQtNC10LvRjNC90LXRi9C5INC60L7QvNC/0L7QvdC10L3RglxuXHRcdHRoaXMubG9hZGVyID0gJCgnPGRpdiAvPicpXG5cdFx0XHQuYWRkQ2xhc3MoJ2xlcGxheWVyLWxvYWRlci1jb250YWluZXInKVxuXHRcdFx0LmFwcGVuZChuZXcgSWNvbih0aGlzLCB7XG5cdFx0XHRcdGljb25OYW1lIDogJ3JlZnJlc2gnLFxuXHRcdFx0XHRjbGFzc05hbWUgOiAnbGVwbGF5ZXItbG9hZGVyLWNvbnRhaW5lcl9faWNvbidcblx0XHRcdH0pLmVsZW1lbnQpO1xuXG5cblx0XHQvKipcblx0XHQgKiBTcGxhc2ggaWNvbiBjb21wb25lbnQuXG5cdFx0ICpcblx0XHQgKiBAdHlwZSB7U3BsYXNoSWNvbn1cblx0XHQgKiBAbWVtYmVyb2YhIFBsYXllciNcblx0XHQgKi9cblx0XHR0aGlzLnNwbGFzaEljb24gPSBuZXcgU3BsYXNoSWNvbih0aGlzKTtcblxuXHRcdHRoaXMudmlkZW9Db250YWluZXIgPSBjcmVhdGVFbCgnZGl2Jywge1xuXHRcdFx0Y2xhc3NOYW1lIDogJ2xlcGxheWVyLXZpZGVvJ1xuXHRcdH0pXG5cdFx0LmFwcGVuZCh0aGlzLmVycm9yRGlzcGxheS5lbGVtZW50KVxuXHRcdC5hcHBlbmQodGhpcy5wbGF5QnV0dG9uLmVsZW1lbnQpXG5cdFx0LmFwcGVuZCh0aGlzLmxvYWRlcilcblx0XHQuYXBwZW5kKHRoaXMuc3BsYXNoSWNvbi5lbGVtZW50KVxuXG5cdFx0dGhpcy5wb3N0ZXIgPSBuZXcgUG9zdGVyKHRoaXMpO1xuXHRcdHRoaXMudmlkZW9Db250YWluZXIuYXBwZW5kKHRoaXMucG9zdGVyLmVsZW1lbnQpO1xuXG5cblx0XHRjb25zdCBsYXN0VGltZXIgPSBuZXcgVGltZSh0aGlzLCB7XG5cdFx0XHRmbiA6IChwbGF5ZXIpID0+IHtcblx0XHRcdFx0Y29uc3QgdmlkZW8gPSBwbGF5ZXIudmlkZW87XG5cdFx0XHRcdHJldHVybiBzZWNvbmRzVG9UaW1lKHZpZGVvLmR1cmF0aW9uIC0gdmlkZW8uY3VycmVudFRpbWUpO1xuXHRcdFx0fVxuXHRcdH0pXG5cblx0XHRpZih0aGlzLm9wdGlvbnMudmlkZW9JbmZvKSB7XG5cdFx0XHRjb25zb2xlLndhcm4oJ29wdGlvbnMudmlkZW9JbmZvIGlzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2UgaXN0ZWFkIG9wdGlvbnMuZGVzY3JpcHRpb24nKTtcblx0XHR9XG5cblx0XHR0aGlzLmluZm9FbGVtZW50ID0gY3JlYXRlRWwoJ2RpdicsIHtcblx0XHRcdGNsYXNzTmFtZSA6ICdsZXBsYXllcl9faW5mbydcblx0XHR9KVxuXHRcdC5hcHBlbmQoY3JlYXRlRWwoJ2RpdicsIHtcblx0XHRcdGNsYXNzTmFtZSA6ICdsZXBsYXllcl9fdGl0bGUnLFxuXHRcdFx0aHRtbCA6IHRoaXMub3B0aW9ucy50aXRsZSB8fCBcIlwiXG5cdFx0fSkpXG5cdFx0LmFwcGVuZChjcmVhdGVFbCgnZGl2Jywge1xuXHRcdFx0Y2xhc3NOYW1lIDogJ2xlcGxheWVyX192aWRlby1pbmZvJyxcblx0XHRcdGh0bWwgOiB0aGlzLm9wdGlvbnMuZGVzY3JpcHRpb24gfHwgdGhpcy5vcHRpb25zLnZpZGVvSW5mbyB8fCBcIlwiXG5cdFx0fSkpXG5cdFx0LmFwcGVuZChjcmVhdGVFbCgnZGl2Jywge1xuXHRcdFx0Y2xhc3NOYW1lIDogJ2xlcGxheWVyX19sYXN0Jyxcblx0XHRcdGh0bWwgOiBg0JLQuNC00LXQviDQt9Cw0LrQvtC90YfQuNGC0YHRjyDRh9C10YDQtdC3IGAsXG5cdFx0fSkuYXBwZW5kKGxhc3RUaW1lci5lbGVtZW50KSlcblxuXHRcdHRoaXMuaW5uZXJFbGVtZW50ID0gJCgnPGRpdiAvPicpXG5cdFx0XHQuYWRkQ2xhc3MoJ2xlcGxheWVyX19pbm5lcicpXG5cdFx0XHQuYXBwZW5kKHRoaXMudmlkZW9Db250YWluZXIpXG5cdFx0XHQuYXBwZW5kKHRoaXMuaW5mb0VsZW1lbnQpXG5cblx0XHR0aGlzLmVsZW1lbnQgPSB0aGlzLmVsZW1lbnRcblx0XHRcdC5hcHBlbmQodGhpcy5pbm5lckVsZW1lbnQpXG5cblx0XHR0aGlzLmFkZENsYXNzKCdsZXBsYXllci0tcGF1c2VkJyk7XG5cdFx0dGhpcy5hZGRDbGFzcygnbGVwbGF5ZXItLXZpcmdpbicpO1xuXG5cblx0XHRpZihvcHRpb25zLnNlY3Rpb25Db250YWluZXIpIHtcblx0XHRcdHRoaXMuc2VjdGlvbnNDb250YWluZXIgPSAkKG9wdGlvbnMuc2VjdGlvbkNvbnRhaW5lcik7XG5cdFx0fVxuXG5cdFx0ZWxlbWVudC5iZWZvcmUodGhpcy5lbGVtZW50KTtcblx0XHR0aGlzLnZpZGVvQ29udGFpbmVyLmFwcGVuZChlbGVtZW50KTtcblxuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQ7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IG9wdGlvbnMgZnJvbSB2aWRlbydzIGF0dHJpYnV0ZSAoIGhlaWdodCwgd2lkdGgsIHBvc3RlciwgcHJlbG9hZCBldGMuLi4pXG5cdCAqIEdldCBzb3VyY2UgdmlkZW8gZnJvbSBzcmMgYXR0ciBvciA8c291cmNlPiBlbGVtZW50IHdpdGggZGF0YSBhdHRyICdkYXRhLXF1YWxpdHknXG5cdCAqIEFsc28gZ2V0IHNvdXJjZXMgZm9yIGRpZmZlcmVudCBxdWFsaXR5IGZyb20gPHNvdXJjZT4gZWxlbWVudCB3aXRoIGRhdGEgYXR0ciAnZGF0YS1xdWFsaXR5J1xuXHQgKlxuXHQgKiBAYWNjZXNzIHByaXZhdGVcblx0ICogQHJldHVybnMge09iamVjdH0gb3B0aW9uc1xuXHQgKi9cblx0X29wdGlvbnNGcm9tRWxlbWVudCgpIHtcblx0XHQvLyBDb3B5IHZpZGVvIGF0dHJzIHRvIHRoZSBvcGl0b25zXG5cdFx0Y29uc3QgIGVsZW1lbnQgPSB0aGlzLl9lbGVtZW50O1xuXHRcdGlmIChlbGVtZW50ID09IG51bGwgfHwgZWxlbWVudC5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybiB7fVxuXHRcdH1cblxuXHRcdGxldCBhdHRyT3B0aW9ucyA9IFtcblx0XHRcdCdoZWlnaHQnLFxuXHRcdFx0J3dpZHRoJyxcblx0XHRcdCdwb3N0ZXInLFxuXHRcdFx0J2F1dG9wbGF5Jyxcblx0XHRcdCdsb29wJyxcblx0XHRcdCdtdXRlZCcsXG5cdFx0XHQncHJlbG9hZCcsXG5cdFx0XVxuXHRcdC5yZWR1Y2UoKG9iaiwgaXRlbSkgPT4ge1xuXHRcdFx0Y29uc3QgdmFsID0gZWxlbWVudC5hdHRyKGl0ZW0pO1xuXHRcdFx0aWYodmFsICE9IG51bGwpIHtcblx0XHRcdFx0b2JqW2l0ZW1dID0gZWxlbWVudC5hdHRyKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG9iajtcblx0XHR9LCB7fSk7XG5cblx0XHRhdHRyT3B0aW9ucy5zb3VyY2VzID0gW107XG5cblx0XHQvLyBTcmMgaXQgaXMgbWFpbiBzb3VyY2UsIHRoYXQgd2lsbCBiZSBsb2FkXG5cdFx0aWYoZWxlbWVudC5hdHRyKCdzcmMnKSkge1xuXHRcdFx0YXR0ck9wdGlvbnMuc3JjID0ge1xuXHRcdFx0XHR1cmwgOiBlbGVtZW50LmF0dHIoJ3NyYycpLFxuXHRcdFx0XHR0aXRsZSA6IGVsZW1lbnQuYXR0cignZGF0YS1xdWFsaXR5JykgfHwgZWxlbWVudC5hdHRyKCd0aXRsZScpIHx8ICdkZWZhdWx0J1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIENvcHkgc291cmNlcyBmcm9tIEhUTUw1IHNvdXJjZSBlbGVtZW50IHdpdGggZGF0YS1xdWFsaXR5IGF0dHJcblx0XHQvLyBJZiBkYXRhLXF1YWxpdHkgYXR0ciBkb2VzIG5vdCBleGlzdCAtIG5vXG5cdFx0ZWxlbWVudC5maW5kKCdzb3VyY2UnKS5lYWNoKChpLCBpdGVtKSA9PiB7XG5cdFx0XHRpdGVtID0gJChpdGVtKTtcblx0XHRcdGlmKCFpdGVtLmF0dHIoJ2RhdGEtcXVhbGl0eScpKSB7XG5cdFx0XHRcdHJldHVyblxuXHRcdFx0fVxuXHRcdFx0YXR0ck9wdGlvbnMuc291cmNlcyA9IGF0dHJPcHRpb25zLnNvdXJjZXMuY29uY2F0KHtcblx0XHRcdFx0dXJsIDogaXRlbS5hdHRyKCdzcmMnKSxcblx0XHRcdFx0dGl0bGUgOiBpdGVtLmF0dHIoJ2RhdGEtcXVhbGl0eScpIHx8IGl0ZW0uYXR0cigndGl0bGUnKSB8fCAnZGVmYXVsdCdcblx0XHRcdH0pXG5cblx0XHR9KTtcblxuXHRcdHJldHVybiBhdHRyT3B0aW9ucztcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm4gYSBuYW1lIG9mIGljb24uIElmIGxlc3MgdGhlbiAwLjEgcmV0dXJuIHZvbHVtZS1vZmYsXG5cdCAqIGlmIGxlc3MgdGhlbiAwLjUgcmV0dXJuIHZvbHVtZSBkb3duLCBlbHNlIHJldHVybiB2b2x1bWUtdXBcblx0ICpcblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZSBWb2x1bWUgdmFsdWVcblx0ICogQHJldHVybnMge1N0cmluZ30gSWNvbiBuYW1lXG5cdCAqL1xuXHRjYWxjVm9sdW1lSWNvbih2YWx1ZSkge1xuXHRcdGlmKHZhbHVlID09IG51bGwpIHtcblx0XHRcdHZhbHVlID0gdGhpcy52aWRlby52b2x1bWU7XG5cdFx0fVxuXHRcdGNvbnN0IHZvbHVtZSA9IHZhbHVlO1xuXG5cdFx0aWYgKHZvbHVtZSA8IHRoaXMub3B0aW9ucy52b2x1bWUubXV0ZWxpbWl0KSB7XG5cdFx0XHRyZXR1cm4gJ3ZvbHVtZS1vZmYnO1xuXHRcdH0gZWxzZSBpZiAodmFsdWUgPCAwLjUpIHtcblx0XHRcdHJldHVybiAndm9sdW1lLWRvd24nO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gJ3ZvbHVtZS11cCc7XG5cdFx0fVxuXHR9XG5cblxuXG5cdC8qKlxuXHQgKiBNZXJnZSBkZWZhdWx0T3B0aW9ucywgcHJlc2V0T3B0aW9ucyB3aXRoIGF0dHJPcHRpb25zIGFuZCB1c2VyJ3Mgb3B0aW9ucztcblx0ICpcblx0ICogQW5kIGNvbXBsZW1lbnQgdHdvIG9iamVjdHM6IGNvbnRyb2xzIGFuZCBleGNsdWRlQ29udHJvbHNcblx0ICpcblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqL1xuXHRfaW5pdE9wdGlvbnMoKSB7XG5cdFx0Y29uc3QgYXR0ck9wdGlvbnMgPSB0aGlzLl9vcHRpb25zRnJvbUVsZW1lbnQoKTtcblx0XHRsZXQgcHJlc2V0T3B0aW9ucyA9IHt9O1xuXG5cdFx0aWYgKHRoaXMuX3VzZXJPcHRpb25zLnByZXNldCAmJiBQbGF5ZXIuZ2V0UHJlc2V0KHRoaXMuX3VzZXJPcHRpb25zLnByZXNldCkpIHtcblx0XHRcdHByZXNldE9wdGlvbnMgPSBQbGF5ZXIuZ2V0UHJlc2V0KHRoaXMuX3VzZXJPcHRpb25zLnByZXNldCkub3B0aW9ucztcblx0XHR9XG5cblxuXHRcdC8vIE1lcmdlIGRlZmF1bHQgb3B0aW9ucyArIHByZXNldCBvcHRpb25zICsgdmlkZW8gYXR0cmlidXR0cysgdXNlciBvcHRpb25zXG5cdFx0dGhpcy5vcHRpb25zID0gJC5leHRlbmQodHJ1ZSwge30sIGRlZmF1bHRPcHRpb25zLCBwcmVzZXRPcHRpb25zLCBhdHRyT3B0aW9ucywgdGhpcy5fdXNlck9wdGlvbnMpO1xuXG5cdFx0aWYodGhpcy5vcHRpb25zLnNvdXJjZXMgJiYgIUFycmF5LmlzQXJyYXkodGhpcy5vcHRpb25zLnNvdXJjZXMpKSB7XG5cdFx0XHR0aGlzLm9wdGlvbnMuc291cmNlcyA9IFt0aGlzLm9wdGlvbnMuc291cmNlc11cblx0XHR9XG5cblx0XHRpZih0eXBlb2YgdGhpcy5vcHRpb25zLnNyYyA9PT0gJ3N0cmluZycpIHtcblx0XHRcdHRoaXMub3B0aW9ucy5zcmMgPSB7IHVybCA6IHRoaXMub3B0aW9ucy5zcmMgfVxuXHRcdH1cblxuXHRcdGlmKHRoaXMub3B0aW9ucy5zcmMgPT0gbnVsbCAmJiB0aGlzLm9wdGlvbnMuc291cmNlcy5sZW5ndGggPiAwKSB7XG5cdFx0XHR0aGlzLm9wdGlvbnMuc3JjID0gdGhpcy5vcHRpb25zLnNvdXJjZXNbMF1cblx0XHR9XG5cblx0XHQvLyBNZXJnZSBjb3JyZWN0bHkgY29udHJvbHMsIHdpdGhvdXQgZGVlcCBtZXJnZVxuXHRcdHRoaXMub3B0aW9ucy5jb250cm9scyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0T3B0aW9ucy5jb250cm9scywgcHJlc2V0T3B0aW9ucy5jb250cm9scywgdGhpcy5fdXNlck9wdGlvbnMuY29udHJvbHMpO1xuXG5cdFx0Ly8gZXhjbHVkZSBjb250cm9scyBvcHRpb25cblx0XHQvLyBUT0RPKGFkaW52YWRpbSk6XG5cdFx0Ly8gU2V0IGRlcHJlY2V0ZWQgZmxhZyBmb3IgdGhpcyBvcHRpb247XG5cdFx0Zm9yIChjb25zdCBuYW1lIGluIHRoaXMub3B0aW9ucy5leGNsdWRlQ29udHJvbHMpIHtcblx0XHRcdGlmICghdGhpcy5vcHRpb25zLmV4Y2x1ZGVDb250cm9scy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkgcmV0dXJuO1xuXHRcdFx0Y29uc3QgY29udHJvbENvbGxlY3Rpb24gPSB0aGlzLm9wdGlvbnMuZXhjbHVkZUNvbnRyb2xzW25hbWVdO1xuXHRcdFx0Y29udHJvbENvbGxlY3Rpb24uZm9yRWFjaCgocm93LCBpbmRleCkgPT4ge1xuXHRcdFx0XHRpZiAodGhpcy5vcHRpb25zLmNvbnRyb2xzW25hbWVdICYmIHRoaXMub3B0aW9ucy5jb250cm9sc1tuYW1lXVtpbmRleF0pIHtcblx0XHRcdFx0XHR0aGlzLm9wdGlvbnMuY29udHJvbHNbbmFtZV1baW5kZXhdID0gZXhjbHVkZUFycmF5KHRoaXMub3B0aW9ucy5jb250cm9sc1tuYW1lXVtpbmRleF0sIHJvdyk7XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMub3B0aW9ucy5wcmVzZXQgJiYgUGxheWVyLmdldFByZXNldCh0aGlzLm9wdGlvbnMucHJlc2V0KSkge1xuXHRcdFx0UGxheWVyLmdldFByZXNldCh0aGlzLm9wdGlvbnMucHJlc2V0KS5pbml0T3B0aW9ucygpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGUgYW5kIGluaXQgYWxsIGNvbnRyb2xzXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHQgKi9cblx0X2luaXRDb250cm9scygpIHtcblx0XHRmb3IgKGNvbnN0IG5hbWUgb2YgWydjb21tb24nLCAnZnVsbHNjcmVlbiddKSB7XG5cdFx0XHRpZiAoIXRoaXMub3B0aW9ucy5jb250cm9scy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkgcmV0dXJuO1xuXHRcdFx0Y29uc3QgY29udHJvbENvbGxlY3Rpb24gPSBuZXcgQ29udHJvbENvbGxlY3Rpb24odGhpcywgeyBuYW1lIH0pO1xuXHRcdFx0dGhpcy5lbGVtZW50LmFwcGVuZChjb250cm9sQ29sbGVjdGlvbi5lbGVtZW50KTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5jb250cm9scy5jb21tb24gIT0gbnVsbCkge1xuXHRcdFx0dGhpcy5jb250cm9scy5jb21tb24uYWN0aXZlID0gdHJ1ZTtcblx0XHR9XG5cdH1cblxuXG5cdF9saXN0ZW5Ib3RLZXlzKCkge1xuXG5cdFx0Y29uc3QgaXNLZXlCaW5kaW5nID0gKGUsIGJpbmRpbmcpID0+IHtcblx0XHRcdHJldHVybiAoKGUud2hpY2ggPT09IGJpbmRpbmcua2V5KSB8fCAoZS5rZXkgPT09IGJpbmRpbmcua2V5KSkgJiZcblx0XHRcdFx0XHQoISFiaW5kaW5nLnNoaWZ0S2V5ID09PSBlLnNoaWZ0S2V5KSAmJlxuXHRcdFx0XHRcdCghIWJpbmRpbmcuY3RybEtleSA9PT0gZS5jdHJsS2V5KVxuXHRcdH1cblxuXHRcdHRoaXMuZWxlbWVudC5vbigna2V5ZG93bi5sZXBsYXllci5ob3RrZXknLCAoZSkgPT4ge1xuXHRcdFx0dGhpcy5vcHRpb25zLmtleUJpbmRpbmcuZm9yRWFjaChiaW5kaW5nID0+IHtcblxuXHRcdFx0XHRpZihpc0tleUJpbmRpbmcoZSwgYmluZGluZykpIHtcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0YmluZGluZy5mbih0aGlzKTtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblxuXHRcdFx0fSlcblx0XHR9KVxuXHR9XG5cblx0LyoqXG5cdCAqIEluaXQgc2VjdGlvbnMsIGdldCBhamF4IG9yIGpzb24gd2l0aCBzZWN0aW9ucyBkYXRhIGFuZCBjcmVhdGUgU2VjdGlvbnMgb2JqZWN0IGFuZCBhZGRlZCB0aGVtIHRvIHRoZSBET01cblx0ICpcblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqIEByZXR1cm5zIHtqcVByb21pc2V9IGpRdWVyeSBwcm9taXNlXG5cdCAqL1xuXHRfaW5pdFNlY3Rpb25zKCkge1xuXHRcdGNvbnN0IGRmZCA9ICQuRGVmZXJyZWQoKTtcblx0XHRpZiAodGhpcy5vcHRpb25zLmRhdGEgPT0gbnVsbCkge1xuXHRcdFx0ZGZkLnJlamVjdChudWxsKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmdldFNlY3Rpb25EYXRhKCkuZG9uZShzZWN0aW9ucyA9PiB7XG5cdFx0XHRcdHNlY3Rpb25zID0gWy4uLnNlY3Rpb25zXTtcblxuXHRcdFx0XHRjb25zdCBpc1NlY3Rpb25PdXRzaWRlID0gKHRoaXMuc2VjdGlvbnNDb250YWluZXIgJiYgdGhpcy5zZWN0aW9uc0NvbnRhaW5lci5sZW5ndGggPiAwKTtcblxuXHRcdFx0XHRpZiAoc2VjdGlvbnMgPT0gbnVsbCB8fCBzZWN0aW9ucy5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHRkZmQucmVqZWN0KG51bGwpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHNlY3Rpb25zID0gdGhpcy5fY29tcGxldGVTZWN0aW9ucyhzZWN0aW9ucyk7XG5cblx0XHRcdFx0Y29uc3Qgc2VjdGlvbnNDb21wb25lbnQgPSBuZXcgU2VjdGlvbnModGhpcywge1xuXHRcdFx0XHRcdGl0ZW1zIDogc2VjdGlvbnMsXG5cdFx0XHRcdFx0ZnVsbHNjcmVlbk9ubHkgOiBpc1NlY3Rpb25PdXRzaWRlLFxuXHRcdFx0XHRcdGhpZGVTY3JvbGwgOiB0cnVlXG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdHRoaXMuaW5uZXJFbGVtZW50LmFwcGVuZChzZWN0aW9uc0NvbXBvbmVudC5lbGVtZW50KTtcblxuXHRcdFx0XHRpZiAoaXNTZWN0aW9uT3V0c2lkZSkge1xuXHRcdFx0XHRcdGNvbnN0IG91dHNpZGVTZWN0aW9ucyA9IG5ldyBTZWN0aW9ucyh0aGlzLCB7XG5cdFx0XHRcdFx0XHRpdGVtcyA6IHNlY3Rpb25zXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0dGhpcy5zZWN0aW9uc0NvbnRhaW5lci5hcHBlbmQob3V0c2lkZVNlY3Rpb25zLmVsZW1lbnQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGRmZC5yZXNvbHZlKHsgc2VjdGlvbnNDb21wb25lbnQsIGl0ZW1zIDogc2VjdGlvbnMgfSk7XG5cdFx0XHR9KVxuXHRcdH1cblxuXHRcdHJldHVybiBkZmQucHJvbWlzZSgpXG5cdH1cblxuXHQvKipcblx0ICogRnVuY3Rpb24sIHRoYW4gaW5pdCBhbGwgcGx1Z2lucyBmcm9tIHBsYXllciBvcHRpb25zLlxuXHQgKiBJZiBwbHVnaW4gZG9lc24ndCBleGlzdCB0aHJvdyBhbiBlcnJvclxuXHQgKlxuXHQgKiBAYWNjZXNzIHByaXZhdGVcblx0ICogQHJldHVybnMge1BsYXllcn0gdGhpc1xuXHQgKi9cblx0X2luaXRQbHVnaW5zKCkge1xuXHRcdGlmICh0aGlzLm9wdGlvbnMucGx1Z2lucykge1xuXHRcdFx0Zm9yIChjb25zdCBuYW1lIGluIHRoaXMub3B0aW9ucy5wbHVnaW5zKSB7XG5cdFx0XHRcdGlmKCF0aGlzLm9wdGlvbnMucGx1Z2lucy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkgcmV0dXJuO1xuXHRcdFx0XHRjb25zdCBwbHVnaW5PcHRpb25zID0gdGhpcy5vcHRpb25zLnBsdWdpbnNbbmFtZV07XG5cdFx0XHRcdGlmKHRoaXNbbmFtZV0pIHtcblx0XHRcdFx0XHRpZihwbHVnaW5PcHRpb25zKSB7XG5cdFx0XHRcdFx0XHR0aGlzW25hbWVdKHBsdWdpbk9wdGlvbnMpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGBQbHVnaW4gJyR7bmFtZX0nIGRvZXNuJ3QgZXhpc3RgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblxuXHQvKipcblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqL1xuXHRfbGlzdGVuVXNlckFjdGl2aXR5KCkge1xuXHRcdGxldCBtb3VzZUluUHJvZ3Jlc3M7XG5cdFx0bGV0IGxhc3RNb3ZlWDtcblx0XHRsZXQgbGFzdE1vdmVZO1xuXG5cdFx0Y29uc3Qgb25Nb3VzZU1vdmUgPSAoZSkgPT4ge1xuXHRcdFx0aWYoZS5zY3JlZW5YICE9PSBsYXN0TW92ZVggfHwgZS5zY3JlZW5ZICE9PSBsYXN0TW92ZVkpIHtcblx0XHRcdFx0bGFzdE1vdmVYID0gZS5zY3JlZW5YO1xuXHRcdFx0XHRsYXN0TW92ZVkgPSBlLnNjcmVlblk7XG5cdFx0XHRcdHRoaXMuX3VzZXJBY3Rpdml0eSA9IHRydWVcblx0XHRcdH1cblx0XHR9XG5cblx0XHRjb25zdCBvbk1vdXNlRG93biA9IChlKSA9PiB7XG5cdFx0XHR0aGlzLl91c2VyQWN0aXZpdHkgPSB0cnVlXG5cblx0XHRcdC8vIFdoaWxlIHVzZXIgaXMgcHJlc3NpbmcgbW91c2Ugb3IgdG91Y2gsIGRpc3BhdGNoIHVzZXIgYWN0aXZpdHlcblx0XHRcdGNsZWFySW50ZXJ2YWwobW91c2VJblByb2dyZXNzKTtcblxuXHRcdFx0bW91c2VJblByb2dyZXNzID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLl91c2VyQWN0aXZpdHkgPSB0cnVlXG5cdFx0XHR9LCAyNTApO1xuXHRcdH1cblxuXHRcdGNvbnN0IG9uTW91c2VVcCA9IChlKSA9PiB7XG5cdFx0XHR0aGlzLl91c2VyQWN0aXZpdHkgPSB0cnVlXG5cdFx0XHRjbGVhckludGVydmFsKG1vdXNlSW5Qcm9ncmVzcyk7XG5cdFx0fVxuXG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XG5cblx0XHR0aGlzLmVsZW1lbnQub24oJ21vdXNlZG93bicsIG9uTW91c2VEb3duKTtcblxuXHRcdHRoaXMuZWxlbWVudC5vbignbW91c2V1cCcsIG9uTW91c2VVcCk7XG5cblx0XHR0aGlzLmVsZW1lbnQub24oJ2tleWRvd24nLCAoZSkgPT4gdGhpcy5fdXNlckFjdGl2aXR5ID0gdHJ1ZSk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdrZXl1cCcsIChlKSA9PiB0aGlzLl91c2VyQWN0aXZpdHkgPSB0cnVlKTtcblxuXHRcdC8vIFNlZSBodHRwOi8vZWpvaG4ub3JnL2Jsb2cvbGVhcm5pbmctZnJvbS10d2l0dGVyL1xuXHRcdGxldCBpbmFjdGl2aXR5VGltZW91dDtcblx0XHRjb25zdCBkZWxheSA9IHRoaXMub3B0aW9ucy5pbm5hY3Rpdml0eVRpbWVvdXQ7XG5cdFx0c2V0SW50ZXJ2YWwoKCkgPT4ge1xuXHRcdFx0aWYgKHRoaXMuX3VzZXJBY3Rpdml0eSkge1xuXG5cdFx0XHRcdC8vIFJlc2V0IHVzZXIgYWN0aXZ1dHkgdHJhY2tlclxuXHRcdFx0XHR0aGlzLl91c2VyQWN0aXZpdHkgPSBmYWxzZTtcblxuXHRcdFx0XHR0aGlzLnVzZXJBY3RpdmUgPSB0cnVlO1xuXG5cdFx0XHRcdGNsZWFyVGltZW91dChpbmFjdGl2aXR5VGltZW91dCk7XG5cblx0XHRcdFx0aWYgKGRlbGF5ID4gMCkge1xuXG5cdFx0XHRcdFx0aW5hY3Rpdml0eVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRcdGlmICghdGhpcy5fdXNlckFjdGl2aXR5KSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMudXNlckFjdGl2ZSA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0sIGRlbGF5KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sIDI1MClcblx0fVxuXG5cdC8qKlxuXHQgKiBTdG9wIHNob3dpbmcgc3Bpbm5lciBhbmQgY2xlYXIgZGVsYXkgb2Ygc2hvd2luZyBzcGlubmVyXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHQgKi9cblx0X3N0b3BXYXl0aW5nKCkge1xuXHRcdHRoaXMuX3dhaXRpbmdUaW1lb3V0cy5mb3JFYWNoKGl0ZW0gPT4gY2xlYXJUaW1lb3V0KGl0ZW0pKTtcblx0XHR0aGlzLl93YWl0aW5nVGltZW91dHMgPSBbXTtcblx0XHR0aGlzLnJlbW92ZUNsYXNzKCdsZXBsYXllci0td2FpdGluZycpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFNob3cgc3Bpbm5lciB3aXRoIGRlbGF5IGluIDMwMG1zXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHQgKi9cblx0X3N0YXJ0V2FpdGluZygpIHtcblx0XHR0aGlzLl93YWl0aW5nVGltZW91dHMucHVzaChzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdHRoaXMuYWRkQ2xhc3MoJ2xlcGxheWVyLS13YWl0aW5nJyk7XG5cdFx0fSwgMzAwKSk7XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBPbiBpbml0ZWQgcGxheWVyIGV2ZW50IGhhbmRsZXJcblx0ICpcblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqIEBwYXJhbSB7UGxheWVyRXZlbnR9IGVcblx0ICovXG5cdF9vbkluaXRlZChlKSB7XG5cdFx0dGhpcy5hZGRDbGFzcygnbGVwbGF5ZXItLWluaXRlZCcpO1xuXG5cdFx0dGhpcy5vcHRpb25zLm9uUGxheWVySW5pdGVkLmNhbGwodGhpcywgZSk7XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBPbiBjbGljayB2aWRlbyBldmVudCBoYW5kbGVyLiBGb2N1cyBvbiB2aWRlbyBhbmQgdG9nZ2xlUGxheVxuXHQgKlxuXHQgKiBAYWNjZXNzIHByaXZhdGVcblx0ICogQHBhcmFtIHtQbGF5ZXJFdmVudH0gZVxuXHQgKi9cblx0X29uQ2xpY2soZSkge1xuXHRcdGNsZWFyVGltZW91dCh0aGlzLl9kYmxjbGlja1RpbWVvdXQpO1xuXHRcdHRoaXMuX2RibGNsaWNrVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0dGhpcy52aWRlby5lbGVtZW50LmZvY3VzKClcblx0XHRcdHRoaXMudG9nZ2xlUGxheSgpO1xuXHRcdH0sIDMwMCk7XG5cdH1cblxuXHQvKipcblx0ICogT24gZGJsY2xpY2sgb24gdGhlIHZpZGVvIHBsYXllciBldmVudCBoYW5kbGVyXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge1BsYXllckV2ZW50fSBlXG5cdCAqL1xuXHRfb25EYmNsaWNrKGUpIHtcblx0XHRjbGVhclRpbWVvdXQodGhpcy5fZGJsY2xpY2tUaW1lb3V0KTtcblx0XHR0aGlzLnRvZ2dsZUZ1bGxzY3JlZW4oKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBPbiBmdWxsc2NyZWVuIGNoYW5nZSBwbGF5ZXIgZXZlbnQgaGFuZGxlclxuXHQgKlxuXHQgKiBAYWNjZXNzIHByaXZhdGVcblx0ICogQHBhcmFtIHtQbGF5ZXJFdmVudH0gZVxuXHQgKi9cblx0X29uRnVsbHNjcmVlbkNoYW5nZShlLCBpc0ZzKSB7XG5cdFx0aWYoaXNGcykge1xuXHRcdFx0dGhpcy52aWV3ID0gJ2Z1bGxzY3JlZW4nO1xuXHRcdFx0dGhpcy5mb2N1cygpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnZpZXcgPSAnY29tbW9uJztcblxuXHRcdFx0aWYoSVNfQU5EUk9JRF9QSE9ORSB8fCBJU19JUEhPTkUgfHwgSVNfSVBPRCkge1xuXHRcdFx0XHR0aGlzLnBhdXNlKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblxuXHQvKipcblx0ICogT24gcGxheSBldmVudCBoYW5kbGVyXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge1BsYXllckV2ZW50fSBlXG5cdCAqL1xuXHRfb25QbGF5KCkge1xuXHRcdHRoaXMuc3BsYXNoSWNvbi5zaG93KCdwbGF5Jyk7XG5cdH1cblxuXHQvKipcblx0ICogT24gcGF1c2UgcGxheWVyIGV2ZW50IGhhbmRsZXJcblx0ICogU2hvdyBwYXVzZSBpY29uIGluIHRoZSBjZW50ZXIgb2YgdmlkZW9cblx0ICpcblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqL1xuXHRfb25QYXVzZSgpIHtcblx0XHR0aGlzLnNwbGFzaEljb24uc2hvdygncGF1c2UnKTtcblx0fVxuXG5cdF9vbkVudGl0eUZ1bGxzY3JlbkNoYW5nZSgpIHtcblx0XHRjb25zdCBmc0FwaSA9IEZ1bGxzY3JlZW5BcGk7XG5cdFx0Y29uc3QgaXNGcyA9ICEhZG9jdW1lbnRbZnNBcGkuZnVsbHNjcmVlbkVsZW1lbnRdO1xuXHRcdHRoaXMudHJpZ2dlcignZnVsbHNjcmVlbmNoYW5nZScsIGlzRnMpO1xuXHR9XG5cbn1cblxuLyoqXG4gKiBTdGF0aWMgaGVscGVyIGZvciBjcmVhdGluZyBhIHBsdWdpbnMgZm9yIGxlcGxheWVyXG4gKlxuICogQGFjY2VzcyBwdWJsaWNcbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHBsdWdpblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gUGx1Z2luIGluaXQgZnVuY3Rpb25cbiAqXG4gKiBAZXhhbXBsZVxuICogUGxheWVyLnBsdWdpbignaGVsbG9Xb3JsZCcsIGZ1bmN0aW9uKHBsdWdpbk9wdGlvbnMpIHtcbiAqICAgIGNvbnN0IHBsYXllciA9IHRoaXM7XG4gKiAgICBwbGF5ZXIub24oJ2NsaWNrJywgKCkgPT4gY29uc29sZS5sb2coJ0hlbGxvIHdvcmxkJykpO1xuICogfSlcbiAqXG4gKi9cblBsYXllci5wbHVnaW4gPSBmdW5jdGlvbihuYW1lLCBmbikge1xuXHRQbGF5ZXIucHJvdG90eXBlW25hbWVdID0gZm47XG59XG5cbi8qKlxuICogR2V0IGJ5IG5hbWUgcmVnaXN0ZXJlZCBjb21wb25lbnRcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSAtIE5hbWUgb2YgY29tcG9uZW50XG4gKiBAcmV0dXJuIHtDb21wb25lbnR9XG4gKi9cblBsYXllci5nZXRDb21wb25lbnQgPSBDb21wb25lbnQuZ2V0Q29tcG9uZW50O1xuXG4vKipcbiAqIFJlZ2lzdGVyIGNvbXBvbmVudFxuICpcbiAqIEBhY2Nlc3MgcHVibGljXG4gKiBAc3RhdGljXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtDb21wb25lbnR9IGNvbXBvbmVudFxuICpcbiAqIEBleGFtcGxlXG4gKiBQbGF5ZXIucmVnaXN0ZXJDb21wb25lbnQoJ0Vycm9yRGlzcGxheScsIEVycm9yRGlzcGxheSk7XG4gKi9cblBsYXllci5yZWdpc3RlckNvbXBvbmVudCA9IENvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudDtcblxuLyoqXG4gKiBSZWdpc3RlciBjb250cm9sXG4gKlxuICogQGFjY2VzcyBwdWJsaWNcbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge0NvbnRyb2x9IGNvbnRyb2xcbiAqL1xuUGxheWVyLmdldENvbnRyb2wgPSBDb250cm9sLmdldENvbnRyb2w7XG5cbi8qKlxuICogR2V0IGJ5IG5hbWUgcmVnaXN0ZXJlZCBjb250cm9sXG4gKlxuICogQGFjY2VzcyBwdWJsaWNcbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJucyB7Q29udHJvbH1cbiAqXG4gKiBAZXhhbXBsZVxuICogUGxheWVyLnJlZ2lzdGVyQ29udHJvbCgnYmFja3dhcmQnLCBCYWNrd2FyZENvbnRyb2wpO1xuICovXG5QbGF5ZXIucmVnaXN0ZXJDb250cm9sID0gQ29udHJvbC5yZWdpc3RlckNvbnRyb2w7XG5cblxuLyoqXG4gKiBDb252ZXJ0IHNlY29uZHMgdG8gZm9ybWF0IHN0cmluZyAnaGg/Om1tOnNzJ1xuICpcbiAqIEBhY2Nlc3MgcHVibGljXG4gKiBAcGFyYW0ge051bWJlcn0gc2Vjb25kcyBTZWNvbmRzXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHNob3dIb3VycyBjb252ZXJ0IHRvIGZvcm1hdCAnaGg6bW06c3MnXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG5QbGF5ZXIuc2Vjb25kc1RvVGltZSA9IHNlY29uZHNUb1RpbWU7XG5cblxuLyoqXG4gKiBTdGF0aWMgaGVscGVyIGZvciBjcmVhdGluZyBhIHBsdWdpbnMgZm9yIGxlcGxheWVyXG4gKlxuICogQGFjY2VzcyBwdWJsaWNcbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHBsdWdpblxuICogQHBhcmFtIHtGdW5jdGlvbnxPYmplY3R9IGZuIFBsdWdpbiBpbml0IGZ1bmN0aW9uXG4gKlxuICogQGV4YW1wbGVcbiAqIFBsYXllci5wcmVzZXQoJ2NvbW1vbicsIHtcbiAqICAgICB3aWR0aCA6ICcxMDAlJyxcbiAqICAgICBwbHVnaW5zIDoge1xuICogICAgICAgICBtaW5pcGxheWVyIDogdHJ1ZVxuICogICAgIH1cbiAqIH0pO1xuICovXG5QbGF5ZXIucHJlc2V0ID0gZnVuY3Rpb24obmFtZSwgb2JqKSB7XG5cdGlmKHR5cGVvZiBvYmogPT09ICdvYmplY3QnKSB7XG5cdFx0UGxheWVyLl9wcmVzZXRzW25hbWVdID0gJC5leHRlbmQoe30sIHtcblx0XHRcdG9wdGlvbnMgOiB7fSxcblx0XHRcdGluaXRPcHRpb25zIDogbm9vcFxuXHRcdH0sIG9iaik7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9iaiA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFBsYXllci5fcHJlc2V0c1tuYW1lXSA9IG9iaigpO1xuXHR9XG59O1xuXG5cblBsYXllci5nZXRQcmVzZXQgPSBmdW5jdGlvbihuYW1lKSB7XG5cdGlmKFBsYXllci5fcHJlc2V0c1tuYW1lXSkge1xuXHRcdHJldHVybiBQbGF5ZXIuX3ByZXNldHNbbmFtZV07XG5cdH0gZWxzZSB7XG5cdFx0Y29uc29sZS5lcnJvcihgcHJlc2V0ICR7bmFtZX0gZG9lc24ndCBleGlzdGApO1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG59XG5cblxuUGxheWVyLl9wcmVzZXRzID0ge307XG5cblBsYXllci5Db29raWUgPSBDb29raWU7XG5cblBsYXllci5fbG9hZFNWR1Nwcml0ZSA9IGZ1bmN0aW9uKHN2Zykge1xuXHRjb25zdCBoaWRkZW5FbGVtZW50ID0gJCgnPGRpdi8+JykuaGlkZSgpO1xuXHQkKCdib2R5JykucHJlcGVuZChoaWRkZW5FbGVtZW50LmFwcGVuZChzdmcpKTtcblx0cmV0dXJuIGhpZGRlbkVsZW1lbnQ7XG59XG5cblBsYXllci5kZWZhdWx0U3ByaXRlID0gcmVxdWlyZSgnLi4vLi4vZGlzdC9zdmcvc3ZnLWRlZnMuc3ZnJyk7XG5cbi8qIGdsb2JhbCBWRVJTSU9OICovXG5QbGF5ZXIudmVyc2lvbiA9IFZFUlNJT047XG5cbndpbmRvdy4kLmZuLmxlUGxheWVyID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIG5ldyBQbGF5ZXIoJCh0aGlzKSwgb3B0aW9ucyk7XG5cdH0pO1xufTtcblxud2luZG93LiQubGVQbGF5ZXIgPSBQbGF5ZXI7XG5cbndpbmRvdy5sZVBsYXllciA9IFBsYXllcjtcblxuXG4vKipcbiAqIE1pbmkgUGxheWVyIHBsdWdpblxuICpcbiAqIEBwbHVnaW5cbiAqL1xuUGxheWVyLnBsdWdpbignbWluaXBsYXllcicsIGZ1bmN0aW9uKHBsdWdpbk9wdGlvbnMpIHtcblx0Y29uc3QgcGxheWVyID0gdGhpcztcblxuXHQvLyDQnNC10YDQttC40Lwg0YEgdGhpcy5vcHRpb25zLm1pbmlwbGF5ZXIsINGH0YLQvtCx0Ysg0L3QtSDRgdC70L7QvNCw0YLRjCDQvtCx0YDQsNGC0L3Rg9GOINGB0L7QstC80LXRgdGC0LjQvNC+0YHRjCwg0YLQsNC6INC60LDQuiDRgNCw0L3RjNGI0LVcblx0Ly8g0LzQuNC90LjQv9C70LXQtdGAINC90LUg0LHRi9C7INC/0LvQsNCz0LjQvdC+0Lwg0L/Qu9C10LXRgNCwLlxuXHRjb25zdCBvcHRpb25zID0gJC5leHRlbmQoe30sIHtcblx0XHR3aWR0aCA6ICcxMDAlJyxcblx0XHRvZmZzZXRTaG93IDogKHBsYXllcikgPT4ge1xuXHRcdFx0Y29uc3Qgb2Zmc2V0ID0gcGxheWVyLmVsZW1lbnQub2Zmc2V0KCkudG9wXG5cdFx0XHRcdCsgcGxheWVyLmVsZW1lbnQub3V0ZXJIZWlnaHQoKVxuXHRcdFx0XHQtIHBsYXllci5nZXRDb250cm9scygnY29tbW9uJykuZWxlbWVudC5oZWlnaHQoKTtcblxuXHRcdFx0cmV0dXJuIG9mZnNldDtcblx0XHR9XG5cdH0sIHRoaXMub3B0aW9ucy5taW5pcGxheWVyLCBwbHVnaW5PcHRpb25zKTtcblxuXHRjb25zdCBjb250cm9scyA9IG5ldyBDb250cm9sQ29sbGVjdGlvbih0aGlzLCB7XG5cdFx0bmFtZSA6ICdtaW5pJyxcblx0XHRjb250cm9scyA6IG9wdGlvbnMuY29udHJvbHMsXG5cdFx0Y29udHJvbE9wdGlvbnMgOiB7XG5cdFx0XHRjb250cm9sIDoge1xuXHRcdFx0XHRkaXNhYmxlIDogZmFsc2Vcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xuXG5cdC8vINCS0YHRgtCw0LLQu9GP0LXQvCDQsiBpbmZvRWxlbWVudCDQv9C+0LQgdGl0bGUg0LggZGVzY3JpcHRpb25cblx0dGhpcy5pbmZvRWxlbWVudC5hcHBlbmQoY29udHJvbHMuZWxlbWVudCk7XG5cblx0LyoqXG5cdCAqIFJldHVybiBvZmZzZXQgb24gb1kgLCB3aGVuIG1pbmlwbGF5ZXIgc2hvdWxkIHNob3dpbmcgb3IgaGlkaW5nXG5cdCAqXG5cdCAqIEByZXR1cm5zIHtOdW1iZXJ9XG5cdCAqL1xuXHRjb25zdCBvZmZzZXRTaG93ID0gKCkgPT4ge1xuXHRcdGlmICgkLmlzRnVuY3Rpb24ob3B0aW9ucy5vZmZzZXRTaG93KSkge1xuXHRcdFx0cmV0dXJuIG9wdGlvbnMub2Zmc2V0U2hvdyhwbGF5ZXIpO1xuXHRcdH1cblxuXHRcdHJldHVybiBvcHRpb25zLm9mZnNldFNob3dcblx0fVxuXG5cdGNvbnN0IGdldFdpZHRoID0gKCkgPT4ge1xuXHRcdHJldHVybiBvcHRpb25zLndpZHRoIHx8IHRoaXMuZWxlbWVudC53aWR0aCgpO1xuXHR9XG5cblxuXHR0aGlzLl91cGRhdGVNaW5pUGxheWVyID0gKGUsIGZvcmNlKSA9PiB7XG5cdFx0Y29uc3Qgc2Nyb2xsVG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuXG5cdFx0Ly8gQmVjYXVzZSBpbiBmb3JjZSB1cGRhdGUsIGZvciBub3JtYWxseSBjb3VudCBoZWlnaHQgYW5kIHBhZGRpbmdcblx0XHQvLyBtaW5pcGxheWVyIGJlZm9yZSB0aGUgc2hvdyBtdXN0IGZpcnN0IGJlIGhpZGRlblxuXHRcdGlmKGZvcmNlKSB7XG5cdFx0XHR0aGlzLmhpZGVNaW5pUGxheWVyKGZvcmNlKTtcblx0XHR9XG5cblx0XHRpZihzY3JvbGxUb3AgPiBvZmZzZXRTaG93KCkpIHtcblx0XHRcdHRoaXMuc2hvd01pbmlQbGF5ZXIoZm9yY2UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmhpZGVNaW5pUGxheWVyKCk7XG5cdFx0fVxuXHR9XG5cblx0dGhpcy5zaG93TWluaVBsYXllciA9IChmb3JjZSkgPT4ge1xuXHRcdGlmICghZm9yY2UgJiYgdGhpcy52aWV3ID09PSAnbWluaScpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBBZGRlZCBlbXB0eSBzcGFjZVxuXHRcdHRoaXMuZWxlbWVudC5jc3MoJ3BhZGRpbmctdG9wJywgdGhpcy52aWRlb0NvbnRhaW5lci5oZWlnaHQoKSk7XG5cblx0XHR0aGlzLnZpZXcgPSdtaW5pJztcblx0fVxuXG5cdHRoaXMuaGlkZU1pbmlQbGF5ZXIgPSAoZm9yY2UpID0+IHtcblx0XHRpZighZm9yY2UgJiYgdGhpcy52aWV3ICE9PSAnbWluaScpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy52aWV3ID0gJ2NvbW1vbic7XG5cdH1cblxuXHQkKHdpbmRvdykub24oJ3Njcm9sbCcsIHRoaXMuX3VwZGF0ZU1pbmlQbGF5ZXIuYmluZCh0aGlzKSk7XG5cdCQod2luZG93KS5vbigncmVzaXplJywgdGhpcy5fdXBkYXRlTWluaVBsYXllci5iaW5kKHRoaXMpKTtcblx0dGhpcy5vbignaW5pdGVkJywgKGUpID0+IHRoaXMuX3VwZGF0ZU1pbmlQbGF5ZXIoZSwgdHJ1ZSkpO1xuXG5cdHRoaXMub25TZXRWaWV3KCdtaW5pJywgKCkgPT4ge1xuXHRcdHRoaXMuaW5uZXJFbGVtZW50LmNzcygnbWF4LXdpZHRoJywgZ2V0V2lkdGgoKSk7XG5cdFx0dGhpcy5pbm5lckVsZW1lbnQuY3NzKCdoZWlnaHQnLCB0aGlzLnZpZGVvLmhlaWdodCk7XG5cdH0pO1xuXG5cdHRoaXMub25EZWxWaWV3KCdtaW5pJywgKCkgPT4ge1xuXHRcdHRoaXMuaW5uZXJFbGVtZW50LmNzcygnbWF4LXdpZHRoJywgJycpXG5cdFx0dGhpcy5pbm5lckVsZW1lbnQuY3NzKCdoZWlnaHQnLCAnJylcblxuXHRcdHRoaXMuZWxlbWVudC5jc3MoJ3BhZGRpbmctdG9wJywgJycpO1xuXHR9KTtcblxuXG5cdHRoaXMuX3VwZGF0ZU1pbmlQbGF5ZXIoKTtcbn0pO1xuXG5QbGF5ZXIucHJlc2V0KCd2cHMnLCByZXF1aXJlKCcuL3ByZXNldHMvdnBzLmpzJykucHJlc2V0KTtcblBsYXllci5wcmVzZXQoJ3NpbXBsZScsIHJlcXVpcmUoJy4vcHJlc2V0cy9zaW1wbGUuanMnKS5wcmVzZXQpO1xuUGxheWVyLnByZXNldCgnc21zJywgcmVxdWlyZSgnLi9wcmVzZXRzL3Ntcy5qcycpLnByZXNldCk7XG5QbGF5ZXIucHJlc2V0KCdjb21wcmVzc2VkJywgcmVxdWlyZSgnLi9wcmVzZXRzL2NvbXByZXNzZWQuanMnKS5wcmVzZXQpO1xuUGxheWVyLnByZXNldCgnMjAzNScsIHJlcXVpcmUoJy4vcHJlc2V0cy8yMDM1LmpzJykucHJlc2V0KTtcblxubW9kdWxlLmV4cG9ydHMgPSBQbGF5ZXJcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvbGUtcGxheWVyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSAkO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiJFwiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIENvbnRyb2wuanNcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgSWNvbiBmcm9tICcuL0ljb24nO1xuXG4vKipcbiAqIEBjbGFzcyBDb250cm9sXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIENvbnRyb2wncyBvcHRpb25zXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuaWNvbk5hbWVdIE5hbWUgb2YgY29udHJvbCdzIGljb24uIElmIGVtcHR5LCBjb250cm9sIHdpbGwgbm90IGhhdmUgYSBpY29uXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuY2xhc3NOYW1lXVxuICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLm5hbWVdXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuY29sbGVjdGlvbl1cbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy50aXRsZV0gQ29udG9ybCdzIHRvb2x0aXAsIHRpdGxlIGF0dHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtvcHRpb25zLm9uQ2xpY2tdIE9uIGNsaWNrIGV2ZW50IGhhbmRsZXJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuZGlzYWJsZT1mYWxzZV1cbiAqIEBwcm9wZXJ0eSB7SWNvbn0gaWNvbiBJY29uIGluIGNvbnRyb2wsIGlmIGl0IGlzIGV4aXN0XG4gKiBAZXh0ZW5kcyBDb21wb25lbnRcbiAqL1xuY2xhc3MgQ29udHJvbCBleHRlbmRzIENvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblx0XHR0aGlzLmRpc2FibGUgPSB0aGlzLm9wdGlvbnMuZGlzYWJsZSAhPSBudWxsPyB0aGlzLm9wdGlvbnMuZGlzYWJsZSA6IHRydWU7XG5cblx0XHR0aGlzLnBsYXllci5vbignaW5pdGVkJywgKGUpID0+IHtcblx0XHRcdHRoaXMuZGlzYWJsZSA9IHRoaXMub3B0aW9ucy5kaXNhYmxlICE9IG51bGw/IHRoaXMub3B0aW9ucy5kaXNhYmxlIDogZmFsc2U7XG5cdFx0fSlcblxuXHRcdHRoaXMuZWxlbWVudC5vbih7XG5cdFx0XHRjbGljayA6IHRoaXMuX29uQ2xpY2suYmluZCh0aGlzKSxcblx0XHRcdGxlcGxheWVyX2NvbnRyb2xfY2xpY2sgOiB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKVxuXHRcdH0pO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ2luaXRlZCcsIHRoaXMub25QbGF5ZXJJbml0ZWQuYmluZCh0aGlzKSlcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0aWYgKHRoaXMub3B0aW9ucy5pY29uTmFtZSkge1xuXHRcdFx0dGhpcy5pY29uID0gbmV3IEljb24odGhpcy5wbGF5ZXIsIHtcblx0XHRcdFx0aWNvbk5hbWUgOiB0aGlzLm9wdGlvbnMuaWNvbk5hbWVcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRsZXQgYXR0cnMgPSB7XG5cdFx0XHRyb2xlIDogJ2J1dHRvbicsXG5cdFx0XHR0aXRsZSA6IHRoaXMub3B0aW9ucy50aXRsZVxuXHRcdH1cblx0XHR0aGlzLmVsZW1lbnQgPSAkKCc8ZGl2IC8+Jylcblx0XHRcdC5hZGRDbGFzcyh0aGlzLmJ1aWxkQ1NTQ2xhc3MoKSlcblx0XHRcdC5hcHBlbmQodGhpcy5pY29uICYmIHRoaXMuaWNvbi5lbGVtZW50KVxuXHRcdFx0LmF0dHIoYXR0cnMpO1xuXG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudDtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGJ1aWxkQ1NTQ2xhc3MoKSB7XG5cdFx0cmV0dXJuIGBjb250cm9sICR7dGhpcy5vcHRpb25zLmNsYXNzTmFtZX0gJHtzdXBlci5idWlsZENTU0NsYXNzKCl9YFxuXHR9XG5cblx0c2V0IGRpc2FibGUodmFsdWUpIHtcblx0XHR0aGlzLl9kaXNhYmxlID0gdmFsdWU7XG5cdFx0dGhpcy5lbGVtZW50LnRvZ2dsZUNsYXNzKCdkaXNhYmxlZCcsIHZhbHVlKTtcblx0fVxuXG5cdGdldCBkaXNhYmxlKCkge1xuXHRcdHJldHVybiB0aGlzLl9kaXNhYmxlXG5cdH1cblxuXHRfb25DbGljayAoZSkge1xuXHRcdGlmICh0aGlzLmRpc2FibGUpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0dGhpcy5lbGVtZW50LnRyaWdnZXIoJ2xlcGxheWVyX2NvbnRyb2xfY2xpY2snKTtcblx0XHR0aGlzLnBsYXllci50cmlnZ2VyKCdjb250cm9sY2xpY2snLCB7IGNvbnRyb2wgOiB0aGlzIH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqXG5cdCAqIE9uIGNsaWNrIGV2ZW50IGhhbmRsZXJcblx0ICogQGFic3RhY3Rcblx0ICovXG5cdG9uQ2xpY2sgKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0aWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0dGhpcy5vcHRpb25zLm9uQ2xpY2suY2FsbCh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdH1cblx0fVxuXG5cblx0b25QbGF5ZXJJbml0ZWQgKGUsIGRhdGEpIHtcblxuXHR9XG5cblx0c3RhdGljIHJlZ2lzdGVyQ29udHJvbChuYW1lLCBjb250cm9sKSB7XG5cdFx0aWYobmFtZSA9PSBudWxsKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYoQ29udHJvbC5fY29udHJvbHMgPT0gbnVsbCkge1xuXHRcdFx0Q29udHJvbC5fY29udHJvbHMgPSB7fTtcblx0XHR9XG5cblx0XHRDb250cm9sLl9jb250cm9sc1tuYW1lXSA9IGNvbnRyb2w7XG5cblx0XHRyZXR1cm4gY29udHJvbDtcblx0fVxuXG5cdHN0YXRpYyBnZXRDb250cm9sKG5hbWUpIHtcblx0XHRpZihuYW1lID09IG51bGwpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZihDb250cm9sLl9jb250cm9scyAmJiBDb250cm9sLl9jb250cm9sc1tuYW1lXSkge1xuXHRcdFx0cmV0dXJuIENvbnRyb2wuX2NvbnRyb2xzW25hbWVdO1xuXHRcdH1cblx0fVxuXG5cdHN0YXRpYyBjcmVhdGUocGxheWVyLCBuYW1lLCBvcHRpb25zKSB7XG5cdFx0dmFyIGNvbnRyb2xDbGFzcyA9IHRoaXMuZ2V0Q29udHJvbChuYW1lKTtcblx0XHRpZihjb250cm9sQ2xhc3MgPT0gbnVsbCkge1xuXHRcdFx0Y29uc29sZS5lcnJvcihgQ29udHJvbCAke25hbWV9IGRvZXNuJ3QgZXhpc3RgKTtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdHJldHVybiBuZXcgY29udHJvbENsYXNzKHBsYXllciwgb3B0aW9ucyk7XG5cdH1cblxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ0NvbnRyb2wnLCBDb250cm9sKTtcbkNvbnRyb2wucmVnaXN0ZXJDb250cm9sKCdjb250cm9sJywgQ29udHJvbCk7XG5leHBvcnQgZGVmYXVsdCBDb250cm9sO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvQ29udHJvbC5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgQ29tcG9uZW50LmpzXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuLyoqXG4gKiBQbGF5ZXIgY29tcG9uZW50IC0gQmFzZSBjbGFzcyBmb3IgYWxsIFVJXG4gKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBPcHRpb25zIG9mIGNvbXBvbmVudFxuICogQHBhcmFtIHtqUXVlcnl9IFtvcHRpb25zLmVsZW1lbnRdINCt0LvQtdC80LXQvdGCINC90LAg0LrQvtGC0L7RgNC+0Lwg0LzQvtC20L3QviDQuNC90LjRhtC40LvQuNC30L7QstCw0YLRjCDQutC70LDRgdGBLlxuICogQHByb3BlcnR5IHtPYmplY3R9IG9wdGlvbnNcbiAqIEBwcm9wZXJ0eSB7alF1ZXJ5fSBlbGVtZW50XG4gKiBAY2xhc3MgQ29tcG9uZW50XG4gKi9cbmNsYXNzIENvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XG5cdFx0b3B0aW9ucyA9IHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRjcmVhdGVFbGVtZW50IDogdHJ1ZVxuXHRcdH0sIHRoaXMub3B0aW9ucywgb3B0aW9ucyk7XG5cblx0XHRpZighcGxheWVyICYmIHRoaXMucGxheSAhPSBudWxsKSB7XG5cdFx0XHR0aGlzLnBsYXllciA9IHBsYXllciA9IHRoaXM7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucGxheWVyID0gcGxheWVyO1xuXHRcdH1cblxuXHRcdGlmKG9wdGlvbnMuY3JlYXRlRWxlbWVudCkge1xuXG5cdFx0XHRpZiAob3B0aW9ucy5lbGVtZW50KSB7XG5cdFx0XHRcdHRoaXMuZWxlbWVudCA9IG9wdGlvbnMuZWxlbWVudDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuY3JlYXRlRWxlbWVudCgpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5lbGVtZW50Lmxlbmd0aCAhPT0gMSkge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKGBDb21wb25lbnQucHJvdG90eXBlLmVsZW1lbnQubGVuZ3RoIG11c3QgZXF1YWwgMSwgbm90ICR7dGhpcy5lbGVtZW50Lmxlbmd0aH1cXG5gLCB0aGlzLmVsZW1lbnQpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLmVsZW1lbnRbMF0uX19ub2RlID0gdGhpcztcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQGFic3RyYWN0XG5cdCAqL1xuXHRjcmVhdGVFbGVtZW50KCkge1xuXG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBhYnN0cmFjdFxuXHQgKi9cblx0YnVpbGRDU1NDbGFzcygpIHtcblx0XHRyZXR1cm4gJydcblx0fVxuXG5cblx0LyoqXG5cdCAqIFNldCB0aGUgZm9jdXMgdG8gdGhpcyBjb21wb25lbnRcblx0ICovXG5cdGZvY3VzKCkge1xuXHRcdHRoaXMuZWxlbWVudC5mb2N1cygpO1xuXHR9XG5cblxuXHQvKipcblx0ICogUmVtb3ZlIHRoZSBmb2N1cyBmcm9tIHRoaXMgY29tcG9uZW50XG5cdCAqL1xuXHRibHVyKCkge1xuXHRcdHRoaXMuZWxlbWVudC5ibHVyKCk7XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBFbWl0IGEgcGxheWVyIGV2ZW50ICh0aGUgbmFtZSBvZiBldmVudCB3b3VsZCBiZSBhIGxlcGxheWVyX3NtdGgpXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBldmVudE5hbWVcblx0ICogQHBhcmFtIHtBcmd1bWVudHN9IC4uLmFyZ3MgalF1ZXJ5LmZuLm9uIG90aGVyIGFyZ3VtZW50c1xuXHQgKiBAcmV0dXJucyB7UGxheWVyfSB0aGlzXG5cdCAqL1xuXHR0cmlnZ2VyKGV2ZW50TmFtZSwgLi4uYXJncykge1xuXHRcdGNvbnN0IGV2ZW50ID0gJC5FdmVudChgbGVwbGF5ZXJfJHtldmVudE5hbWV9YCwgeyBwbGF5ZXIgOiB0aGlzLnBsYXllciB9KTtcblx0XHR0aGlzLmVsZW1lbnQudHJpZ2dlckhhbmRsZXIoZXZlbnQsIC4uLmFyZ3MpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblxuXHQvKipcblx0ICogTGlzdGVuIGEgcGxheWVyIGV2ZW50IHdpdGggbGVwbGF5ZXJfIHN1ZmZpeFxuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnROYW1lXG5cdCAqIEBwYXJhbSB7QXJndW1lbnRzfSAuLi5hcmdzIGpRdWVyeS5mbi5vbiBvdGhlciBhcmd1bWVudHNcblx0ICogQHJldHVybnMge1BsYXllcn0gdGhpc1xuXHQgKi9cblx0b24oZXZlbnROYW1lLCAuLi5hcmdzKSB7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKGBsZXBsYXllcl8ke2V2ZW50TmFtZX1gLCAuLi5hcmdzKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cblx0b25lKGV2ZW50TmFtZSwgLi4uYXJncykge1xuXHRcdHRoaXMuZWxlbWVudC5vbmUoYGxlcGxheWVyXyR7ZXZlbnROYW1lfWAsIC4uLmFyZ3MpO1xuXHR9XG5cblxuXHQvKipcblx0ICogQWRkIHRoZSBDU1MgY2xhc3MgZm9yIGdlbmVyYWwgbGVwbGF5ZXIgRE9NIGVsZW1lbnRcblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZSBOYW1lIG9mIGNsYXNzIChub3QgYSBzZWxlY3RvciwgaXQncyBtZWFuLCB0aGF0IHN0cmluZyBzb3VsZCBiZSB3aXRob3V0IHBvaW50IGF0IHRoZSBzdGFydClcblx0ICogQHJldHVybnMge1BsYXllcn0gdGhpc1xuXHQgKi9cblx0YWRkQ2xhc3MoY2xhc3NOYW1lKSB7XG5cdFx0dGhpcy5lbGVtZW50LmFkZENsYXNzKGNsYXNzTmFtZSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvKipcblx0ICogUmVtb3ZlIHRoZSBDU1MgY2xhc3MgZnJvbSBnZW5lcmFsIGxlcGxheWVyIERPTSBlbGVtZW50XG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWUgTmFtZSBvZiBjbGFzc1xuXHQgKiBAcmV0dXJucyB7UGxheWVyfSB0aGlzXG5cdCAqL1xuXHRyZW1vdmVDbGFzcyhjbGFzc05hbWUpIHtcblx0XHR0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8qKlxuXHQgKiBUb2dnbGUgdGhlIENTUyBjbGFzcyBmcm9tIGdlbmVyYWwgbGVwbGF5ZXIgRE9NIGVsZW1lbnRcblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZVxuXHQgKiBAcGFyYW0ge0Jvb2xlYW59IGZsYWdcblx0ICogQHJldHVybnMge1BsYXllcn0gdGhpc1xuXHQgKi9cblx0dG9nZ2xlQ2xhc3MoY2xhc3NOYW1lLCBmbGFnKSB7XG5cdFx0dGhpcy5lbGVtZW50LnRvZ2dsZUNsYXNzKGNsYXNzTmFtZSwgZmxhZyk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRoYXNDbGFzcyhjbGFzc05hbWUpIHtcblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50Lmhhc0NsYXNzKGNsYXNzTmFtZSk7XG5cdH1cblxuXG5cdHN0YXRpYyByZWdpc3RlckNvbXBvbmVudChuYW1lLCBjb21wb25lbnQpIHtcblx0XHRpZihuYW1lID09IG51bGwpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZihDb21wb25lbnQuX2NvbXBvbmVudHMgPT0gbnVsbCkge1xuXHRcdFx0Q29tcG9uZW50Ll9jb21wb25lbnRzID0ge307XG5cdFx0fVxuXG5cdFx0Q29tcG9uZW50Ll9jb21wb25lbnRzW25hbWVdID0gY29tcG9uZW50O1xuXG5cdFx0cmV0dXJuIGNvbXBvbmVudDtcblx0fVxuXG5cdHN0YXRpYyBnZXRDb21wb25lbnQobmFtZSkge1xuXHRcdGlmKG5hbWUgPT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmKENvbXBvbmVudC5fY29tcG9uZW50cyAmJiBDb21wb25lbnQuX2NvbXBvbmVudHNbbmFtZV0pIHtcblx0XHRcdHJldHVybiBDb21wb25lbnQuX2NvbXBvbmVudHNbbmFtZV07XG5cdFx0fVxuXG5cdH1cblxuXG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnQ29tcG9uZW50JywgQ29tcG9uZW50KTtcbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL0NvbXBvbmVudC5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgSWNvbi5qc1xuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcblxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIEljb24ncyBvcHRpb25zXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuaWNvbk5hbWU9JyddIEljb24ncyBuYW1lLiBJZiB1c2Ugc3Znc3ByaXRlIGljb25zLCBpY29uTmFtZSBpdCdzIGlkIGluIHNwcml0ZVxuICogQGNsYXNzIEljb25cbiAqIEBleHRlbmRzIENvbXBvbmVudFxuICovXG5jbGFzcyBJY29uIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3RvciAocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRjbGFzc05hbWUgOiAnJyxcblx0XHRcdGljb25OYW1lIDogJydcblx0XHR9LCBvcHRpb25zKVxuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cblx0fVxuXG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHR0aGlzLl91c2VUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3VzZScpO1xuXHRcdHRoaXMuX3N2Z1RhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XG5cblx0XHR0aGlzLmljb25OYW1lID0gdGhpcy5faWNvbk5hbWUgPSB0aGlzLm9wdGlvbnMuaWNvbk5hbWU7XG5cdFx0dGhpcy5fc3ZnVGFnLmFwcGVuZENoaWxkKHRoaXMuX3VzZVRhZyk7XG5cdFx0dGhpcy5lbGVtZW50ID0gJCgnPGRpdiAvPicpXG5cdFx0XHQuYWRkQ2xhc3ModGhpcy5idWlsZENTU0NsYXNzKCkpXG5cdFx0XHQuYXR0cigndGl0bGUnLCB0aGlzLm9wdGlvbnMudGl0bGUpXG5cdFx0XHQuYXBwZW5kKCQodGhpcy5fc3ZnVGFnKSk7XG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudDtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGJ1aWxkQ1NTQ2xhc3MoKSB7XG5cdFx0cmV0dXJuIGAke3N1cGVyLmJ1aWxkQ1NTQ2xhc3MoKX0gbGVwbGF5ZXItaWNvbiAke3RoaXMub3B0aW9ucy5jbGFzc05hbWV9YFxuXHR9XG5cblx0LyoqXG5cdCAqIFNldHRlciBvZiBpY29uTmFtZSBmaWVsZFxuXHQgKiBAcGFyYW0ge1N0cmluZ30gaWNvbk5hbWVcblx0ICovXG5cdHNldCBpY29uTmFtZShpY29uTmFtZSkge1xuXHRcdGxldCBhdHRyTlMgPSBbJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnLCAnaHJlZiddXG5cdFx0dGhpcy5fdXNlVGFnLnJlbW92ZUF0dHJpYnV0ZU5TKC4uLmF0dHJOUywgYCR7dGhpcy5wbGF5ZXIub3B0aW9ucy5zdmdQYXRofSNsZXBsYXllci1pY29uLSR7dGhpcy5pY29uTmFtZX1gKVxuXHRcdHRoaXMuX3VzZVRhZy5zZXRBdHRyaWJ1dGVOUyguLi5hdHRyTlMsIGAke3RoaXMucGxheWVyLm9wdGlvbnMuc3ZnUGF0aH0jbGVwbGF5ZXItaWNvbi0ke2ljb25OYW1lfWApXG5cdFx0dGhpcy5faWNvbk5hbWUgPSBpY29uTmFtZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXR0ZXIgb2YgaWNvbk5hbWUgZmllbGRcblx0ICogQHJldHVybiB7U3RyaW5nfSBJY29uJ3MgbmFtZVxuXHQgKi9cblx0Z2V0IGljb25OYW1lICgpIHtcblx0XHRyZXR1cm4gdGhpcy5faWNvbk5hbWU7XG5cdH1cblxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ0ljb24nLCBJY29uKTtcbmV4cG9ydCBkZWZhdWx0IEljb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9JY29uLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBQbGF5QnV0dG9uLmpzXG4gKi9cblxuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9Db250cm9sJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJztcbmltcG9ydCB7IGNyZWF0ZUVsIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqL1xuY2xhc3MgUGxheUJ1dHRvbiBleHRlbmRzIENvbnRyb2wge1xuXG5cdGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucykge1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucylcblxuXHRcdHRoaXMuZWxlbWVudC5vbignZGJsY2xpY2snLCB0aGlzLl9vbkRiY2xpY2suYmluZCh0aGlzKSk7XG5cdH1cblxuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdGNvbnN0IGlubmVyID0gY3JlYXRlRWwoJ2RpdicsIHtcblx0XHRcdGNsYXNzTmFtZSA6ICdsZXBsYXllci1wbGF5LWJ1dHRvbl9fYnV0dG9uJ1xuXHRcdH0pXG5cdFx0LmFwcGVuZChuZXcgSWNvbih0aGlzLnBsYXllciwgeyBpY29uTmFtZSA6ICdwbGF5JyB9KS5lbGVtZW50KTtcblxuXHRcdHRoaXMuZWxlbWVudCA9IGNyZWF0ZUVsKCdkaXYnLCB7XG5cdFx0XHRjbGFzc05hbWUgOiB0aGlzLmJ1aWxkQ1NTQ2xhc3Ncblx0XHR9KVxuXHRcdC5hcHBlbmQoaW5uZXIpO1xuXG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudDtcblx0fVxuXG5cdG9uQ2xpY2soZSkge1xuXHRcdHN1cGVyLm9uQ2xpY2soZSk7XG5cdFx0dGhpcy5wbGF5ZXIudHJpZ2dlcignY2xpY2snKTtcblx0fVxuXG5cdF9vbkRiY2xpY2soKSB7XG5cdFx0dGhpcy5wbGF5ZXIudHJpZ2dlcignZGJsY2xpY2snKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGJ1aWxkQ1NTQ2xhc3MoKSB7XG5cdFx0cmV0dXJuIGBsZXBsYXllci1wbGF5LWJ1dHRvbmBcblx0fVxuXG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnUGxheUJ1dHRvbicsIFBsYXlCdXR0b24pO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ3BsYXkgYnV0dG9uJywgUGxheUJ1dHRvbik7XG5leHBvcnQgZGVmYXVsdCBQbGF5QnV0dG9uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvUGxheUJ1dHRvbi5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgdGltZS5qc1xuICpcbiAqIEBtb2R1bGUgdGltZVxuICovXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG4vKipcbiAqIENvbnZlcnQgc2Vjb25kcyB0byBmb3JtYXQgc3RyaW5nICdoaD86bW06c3MnXG4gKlxuICogQGFjY2VzcyBwdWJsaWNcbiAqIEBwYXJhbSB7TnVtYmVyfSBzZWNvbmRzIFNlY29uZHNcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gc2hvd0hvdXJzIGNvbnZlcnQgdG8gZm9ybWF0ICdoaDptbTpzcydcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZWNvbmRzVG9UaW1lIChzZWNvbmRzLCBzaG93SG91cnMpIHtcblx0dmFyIGggPSBNYXRoLmZsb29yKHNlY29uZHMgLyAzNjAwKTtcblx0dmFyIG0gPSBNYXRoLmZsb29yKHNlY29uZHMgJSAzNjAwIC8gNjApO1xuXHR2YXIgcyA9IE1hdGguZmxvb3Ioc2Vjb25kcyAlIDM2MDAgJSA2MCk7XG5cdHZhciBvdXQgPSAnJztcblx0aWYgKG0gPCAxMCkge1xuXHRcdG0gPSAnMCcgKyBtO1xuXHR9XG5cdGlmIChzIDwgMTApIHtcblx0XHRzID0gJzAnICsgcztcblx0fVxuXHRvdXQgPSBgJHttfToke3N9YDtcblxuXHRpZihoID4gMCB8fCBzaG93SG91cnMpIHtcblx0XHRvdXQgPSBgJHtofTpgICsgb3V0XG5cdH1cblx0cmV0dXJuIG91dDtcbn1cblxuXG4vKipcbiAqIFJldHVybiBsZW5ndGggLyBlbmRcbiAqXG4gKiBAYWNjZXNzIHB1YmxpY1xuICogQHBhcmFtIHtOdW1iZXJ9IGxlbmd0aFxuICogQHBhcmFtIHtOdWJtZXJ9IGVuZFxuICovXG5leHBvcnQgZnVuY3Rpb24gcGVyY2VudGlmeSAobGVuZ3RoLCBlbmQpIHtcblx0Ly8gb3IgemVybyBiZWFjYXNlIE5hTlxuXHRjb25zdCBwZXJjZW50ID0gKGxlbmd0aCAvIGVuZCkgfHwgMDtcblx0cmV0dXJuIChwZXJjZW50ID49IDEpID8gMSA6IHBlcmNlbnQ7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsKHRhZz0nZGl2JywgcHJvcHMpIHtcblx0aWYocHJvcHMgJiYgcHJvcHMuY2xhc3NOYW1lKSB7XG5cdFx0cHJvcHNbXCJjbGFzc1wiXSA9IHByb3BzLmNsYXNzTmFtZTtcblx0XHRkZWxldGUgcHJvcHMuY2xhc3NOYW1lO1xuXHR9XG5cdHJldHVybiAkKGA8JHt0YWd9Lz5gLCBwcm9wcyk7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5leHBvcnQgY29uc3QgZ2V0U2Nyb2xsQmFyV2lkdGggPSAoZnVuY3Rpb24oKSB7XG5cdGxldCByZXN1bHQ7XG5cblx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXG5cdFx0aWYocmVzdWx0ICE9IG51bGwpIHtcblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fVxuXG5cdFx0Y29uc3Qgb3V0ZXIgPSAkKCc8ZGl2IC8+JykuY3NzKHtcblx0XHRcdHZpc2liaWxpdHkgOiAnaGlkZGVuJyxcblx0XHRcdHdpZHRoIDogMTAwLFxuXHRcdFx0b3ZlcmZsb3cgOiAnc2Nyb2xsJ1xuXHRcdH0pLmFwcGVuZFRvKCdib2R5Jyk7XG5cblx0XHRjb25zdCB3aWR0aFdpdGhTY3JvbGwgPSAkKCc8ZGl2IC8+JykuY3NzKHtcblx0XHRcdHdpZHRoIDogJzEwMCUnXG5cdFx0fSkuYXBwZW5kVG8ob3V0ZXIpLm91dGVyV2lkdGgoKTtcblxuXHRcdG91dGVyLnJlbW92ZSgpO1xuXHRcdHJldHVybiByZXN1bHQgPSAxMDAgLSB3aWR0aFdpdGhTY3JvbGw7XG5cdH1cblxufSgpKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy91dGlscy9pbmRleC5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgU3BsYXNoSWNvbi5qc1xuICovXG5cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJztcblxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAY2xhc3MgU3BsYXNoSWNvblxuICogQGV4dGVuZHMgQ29tcG9uZW50XG4gKi9cbmNsYXNzIFNwbGFzaEljb24gZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdHNob3cobmFtZSkge1xuXHRcdHRoaXMuaWNvbi5pY29uTmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5lbGVtZW50LmFkZENsYXNzKCdsZXBsYXllci1zcGxhc2hpY29uLS1hY3RpdmUnKTtcblx0XHRzZXRUaW1lb3V0KCgpID0+IHRoaXMuZWxlbWVudC5yZW1vdmVDbGFzcygnbGVwbGF5ZXItc3BsYXNoaWNvbi0tYWN0aXZlJyksIDMwMCk7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdHRoaXMuaWNvbiA9IG5ldyBJY29uKHRoaXMucGxheWVyKTtcblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50ID0gJCgnPGRpdiAvPicpXG5cdFx0XHQuYWRkQ2xhc3MoJ2xlcGxheWVyLXNwbGFzaGljb24nKVxuXHRcdFx0LmFwcGVuZCh0aGlzLmljb24uZWxlbWVudCk7XG5cdH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBTcGxhc2hJY29uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvU3BsYXNoSWNvbi5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgVGltZS5qc1xuICovXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9Db21wb25lbnQnO1xuaW1wb3J0IHsgc2Vjb25kc1RvVGltZSwgY3JlYXRlRWwgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbi8vIFRPRE86INCY0YHQv9C+0LvRjNC30L7QstCw0YLRjCDRjdGC0L7RgiDQsdC70L7QuiDQsiBUaW1lQ29udHJvbFxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAY2xhc3MgVGltZVxuICogQGV4dGVuZHMgQ29udHJvbFxuICovXG5jbGFzcyBUaW1lIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3RvciAocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRmbiA6IChwbGF5ZXIpID0+IHtcblx0XHRcdFx0Y29uc3QgdmlkZW8gPSBwbGF5ZXIudmlkZW87XG5cdFx0XHRcdHJldHVybiBzZWNvbmRzVG9UaW1lKHZpZGVvLmN1cnJlbnRUaW1lKTtcblx0XHRcdH1cblx0XHR9LCBvcHRpb25zKTtcblxuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cblx0XHR0aGlzLnBsYXllci5vbigndGltZXVwZGF0ZScsIHRoaXMudXBkYXRlVGV4dC5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLnBsYXllci5vbignaW5pdGVkJywgdGhpcy51cGRhdGVUZXh0LmJpbmQodGhpcykpO1xuXHR9XG5cblx0dXBkYXRlVGV4dChlLCBkYXRhKSB7XG5cdFx0dGhpcy5lbGVtZW50LnRleHQodGhpcy5vcHRpb25zLmZuKHRoaXMucGxheWVyKSk7XG5cdH1cblxuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdHRoaXMuZWxlbWVudCA9IGNyZWF0ZUVsKCdkaXYnLCB7IGNsYXNzTmFtZSA6ICdsZXBsYXllci10aW1lJyB9KTtcblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50O1xuXHR9XG5cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdUaW1lJywgVGltZSk7XG5leHBvcnQgZGVmYXVsdCBUaW1lO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvVGltZWxpbmUvVGltZS5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgQ29udHJvbENvbGxlY3Rpb24uanNcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL0NvbnRyb2wnO1xuXG5pbXBvcnQgeyBjcmVhdGVFbCB9IGZyb20gJy4uL3V0aWxzJztcblxuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gT3B0aW9ucyBvZiBjb21wb25lbnRcbiAqIEBwYXJhbSB7alF1ZXJ5fSBbb3B0aW9ucy5jb250cm9sc10gQXJyYXkgb2Ygcm93cyBvZiBjb250cm9sJ3MgbmFtZVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLmNvbnRyb2xzT3B0aW9uc10gQ29udHJvbCBvcHRpb25zXG4gKiBAcHJvcGVydHkge0FycmF5fSBBcnJheSBvZiByb3dzIG9mIGNvbnRyb2wncyBuYW1lXG4gKiBAcHJcbiAqXG4gKi9cbmNsYXNzIENvbnRyb2xDb2xsZWN0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IgKHBsYXllciwgb3B0aW9ucykge1xuXHRcdGNvbnN0IG5hbWUgPSBvcHRpb25zLm5hbWU7XG5cblx0XHRsZXQgcGxheWVyT3B0aW9ucyA9IHtcblx0XHRcdGNvbnRyb2xzIDogcGxheWVyLm9wdGlvbnMuY29udHJvbHNbbmFtZV0sXG5cdFx0fVxuXG5cdFx0aWYocGxheWVyLm9wdGlvbnMuY29udHJvbHNPcHRpb25zW25hbWVdKSB7XG5cdFx0XHRwbGF5ZXJPcHRpb25zWydhbGlnbiddID0gcGxheWVyLm9wdGlvbnMuY29udHJvbHNPcHRpb25zW25hbWVdLmFsaWduO1xuXHRcdFx0cGxheWVyT3B0aW9uc1snY29udHJvbHNPcHRpb25zJ10gPSBwbGF5ZXIub3B0aW9ucy5jb250cm9sc09wdGlvbnNbbmFtZV0uY29udHJvbHM7XG5cdFx0fVxuXG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRjb250cm9scyA6IFtdLFxuXHRcdFx0Y29udHJvbHNPcHRpb25zIDoge30sXG5cdFx0XHRhbGlnbiA6ICdsZWZ0Jyxcblx0XHR9LCBwbGF5ZXJPcHRpb25zLCBvcHRpb25zKTtcblxuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cblx0XHR0aGlzLmFjdGl2ZSA9IG9wdGlvbnMuYWN0aXZlIHx8IGZhbHNlO1xuXHRcdHRoaXMubmFtZSA9IG9wdGlvbnMubmFtZTtcblxuXHRcdHRoaXMucGxheWVyLmNvbnRyb2xzW3RoaXMubmFtZV0gPSB0aGlzO1xuXHR9XG5cblxuXHRfZ2V0Q29udHJvbE9wdGlvbnMobmFtZSkge1xuXHRcdGNvbnN0IHsgY29udHJvbHNPcHRpb25zIH0gPSB0aGlzLm9wdGlvbnM7XG5cdFx0bGV0IHJlc3VsdCA9IGNvbnRyb2xzT3B0aW9ucy5jb250cm9sIHx8IHt9O1xuXG5cdFx0aWYoY29udHJvbHNPcHRpb25zW25hbWVdKSB7XG5cdFx0XHRyZXN1bHQgPSAkLmV4dGVuZCh0cnVlLCB7fSwgcmVzdWx0LCBjb250cm9sc09wdGlvbnNbbmFtZV0pO1xuXHRcdH1cblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblxuXHRhZGRDb250cm9sKGluZGV4Um93LCBuYW1lLCBvcHRpb25zKSB7XG5cdFx0Y29uc3QgY29udHJvbCA9IENvbnRyb2wuY3JlYXRlKHRoaXMucGxheWVyLCBuYW1lLCB7XG5cdFx0XHRjb2xsZWN0aW9uIDogdGhpcy5vcHRpb25zLm5hbWUsXG5cdFx0XHQuLi5vcHRpb25zXG5cdFx0fSk7XG5cblx0XHRpZihjb250cm9sID09IG51bGwpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR3aGlsZShpbmRleFJvdyA+IHRoaXMuX3Jvd3MubGVuZ3RoKSB7XG5cdFx0XHR0aGlzLmFkZFJvdygpO1xuXHRcdH1cblxuXHRcdGNvbnN0IGVsZW1Sb3cgPSB0aGlzLl9yb3dzW2luZGV4Um93XTtcblx0XHRlbGVtUm93LmFwcGVuZChjb250cm9sLmVsZW1lbnQpO1xuXG5cdFx0aWYgKHRoaXMuY29udHJvbHMgPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5jb250cm9scyA9IFtdO1xuXHRcdH1cblx0XHRpZiAodGhpcy5jb250cm9sc1tpbmRleFJvd10gPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5jb250cm9sc1tpbmRleFJvd10gPSB7fTtcblx0XHR9XG5cblx0XHR0aGlzLmNvbnRyb2xzW2luZGV4Um93XVtuYW1lXSA9IGNvbnRyb2w7XG5cdH1cblxuXHRnZXRDb250cm9sKGZpcnN0LCBzZWNvbmQpIHtcblx0XHRpZihzZWNvbmQgPT0gbnVsbCkge1xuXHRcdFx0Y29uc3QgbmFtZSA9IGZpcnN0O1xuXHRcdFx0Zm9yKGxldCBpID0gMDsgaSA8IHRoaXMuY29udHJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYodGhpcy5jb250cm9sc1tpXVtuYW1lXSAhPSBudWxsKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuY29udHJvbHNbaV1bbmFtZV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3QgbmFtZSA9IGZpcnN0O1xuXHRcdFx0Y29uc3QgaW5kZXhSb3cgPSBzZWNvbmQ7XG5cdFx0XHRyZXR1cm4gdGhpcy5jb250cm9sc1tpbmRleFJvd11bbmFtZV07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRhZGRSb3coKSB7XG5cdFx0Y29uc3QgZWxlbVJvdyA9IGNyZWF0ZUVsKCdkaXYnLCB7XG5cdFx0XHRjbGFzc05hbWUgOiBgbGVwbGF5ZXItY29udHJvbHMgY29udHJvbHMtJHt0aGlzLm9wdGlvbnMubmFtZX1gXG5cdFx0fSk7XG5cblx0XHRpZiAodGhpcy5fcm93cyA9PSBudWxsKSB7XG5cdFx0XHR0aGlzLl9yb3dzID0gW11cblx0XHR9XG5cdFx0dGhpcy5fcm93cy5wdXNoKGVsZW1Sb3cpO1xuXHRcdHRoaXMuZWxlbWVudC5hcHBlbmQoZWxlbVJvdyk7XG5cblx0XHRyZXR1cm4gZWxlbVJvdztcblx0fVxuXG5cdGdldFJvdyhpbmRleFJvdykge1xuXHRcdHJldHVybiB0aGlzLl9yb3dzW2luZGV4Um93IHx8IDBdO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHRjb25zdCB7IG5hbWUsIGNvbnRyb2xzLCBhbGlnbiB9ID0gdGhpcy5vcHRpb25zO1xuXHRcdGxldCBnbG9iYWxBbGlnbiA9IG51bGw7XG5cblx0XHR0aGlzLmVsZW1lbnQgPSBjcmVhdGVFbCgnZGl2Jywge1xuXHRcdFx0Y2xhc3NOYW1lIDogYGxlcGxheWVyLWNvbnRyb2wtY29sbGVjdGlvbiBsZXBsYXllci1jb250cm9sLWNvbGxlY3Rpb24tLSR7bmFtZX1gLFxuXHRcdH0pXG5cblx0XHRpZih0eXBlb2YgYWxpZ24gPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRnbG9iYWxBbGlnbiA9IGFsaWduO1xuXHRcdH1cblxuXHRcdGNvbnRyb2xzLmZvckVhY2goKHJvdywgaW5kZXhSb3cpID0+IHtcblx0XHRcdGNvbnN0IGVsZW1Sb3cgPSB0aGlzLmFkZFJvdygpO1xuXHRcdFx0bGV0IHJvd0FsaWduID0gZ2xvYmFsQWxpZ247XG5cblx0XHRcdGlmKEFycmF5LmlzQXJyYXkoYWxpZ24pICYmIGFsaWduW2luZGV4Um93XSkge1xuXHRcdFx0XHRyb3dBbGlnbiA9IGFsaWduW2luZGV4Um93XVxuXHRcdFx0fVxuXG5cdFx0XHRyb3cuZm9yRWFjaChjb250cm9sTmFtZSA9PiB7XG5cblx0XHRcdFx0aWYoY29udHJvbE5hbWUgPT09ICd0aW1lbGluZScgJiYgcm93QWxpZ24gIT09ICdqdXN0aWZ5Jykge1xuXHRcdFx0XHRcdGNvbnNvbGUud2FybignQ29ucm9scyBzaG91bGQgaGF2ZSBqdXN0aWZ5IGFsaWduLCBpZiB0aGVyZSBpcyB0aGUgdGltZWxpbmUgaW4gaXQnKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuYWRkQ29udHJvbChpbmRleFJvdywgY29udHJvbE5hbWUsIHRoaXMuX2dldENvbnRyb2xPcHRpb25zKG5hbWUpKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRlbGVtUm93LmFkZENsYXNzKGBsZXBsYXllci1jb250cm9scy0tJHtyb3dBbGlnbn1gKVxuXHRcdFx0XHQuYXR0cigndGFiaW5kZXgnLCAwKTtcblxuXHRcdFx0ZWxlbVJvdy5maW5kKCcuZGl2aWRlciArIC5kaXZpZGVyJykucmVtb3ZlKCk7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50O1xuXHR9XG5cblx0aGlkZSAoKSB7XG5cdFx0dGhpcy5lbGVtZW50LmhpZGUoKTtcblx0XHR0aGlzLmVsZW1lbnQuZmluZCgnLmxlcGxheWVyLWNvbnRyb2xzJykuaGlkZSgpXG5cdH1cblxuXHRzaG93ICgpIHtcblx0XHR0aGlzLmVsZW1lbnQuc2hvdygpXG5cdFx0dGhpcy5lbGVtZW50LmZpbmQoJy5sZXBsYXllci1jb250cm9scycpLnNob3coKVxuXHR9XG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnQ29udHJvbENvbGxlY3Rpb24nLCBDb250cm9sQ29sbGVjdGlvbik7XG5leHBvcnQgZGVmYXVsdCBDb250cm9sQ29sbGVjdGlvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL0NvbnRyb2xDb2xsZWN0aW9uLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBTZWN0aW9ucy5qc1xuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcblxuaW1wb3J0IHsgc2Vjb25kc1RvVGltZSwgZ2V0U2Nyb2xsQmFyV2lkdGggfSBmcm9tICcuLi91dGlscyc7XG4vKipcbiAqIEBjbGFzcyBTZWN0aW9uc1xuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHBhcmFtIHtBcnJheX0gW29wdGlvbnMuaXRlbXM9W119IERhdGEgZm9yIHNlY3Rpb25zXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnZpZXdzXSBTaG93IHNlY3Rpb24gb25seSBpbiBmdWxsc2NyZWVuXG4gKiBAZXh0ZW5kcyBDb21wb25lbnRcbiAqL1xuY2xhc3MgU2VjdGlvbnMgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcblx0XHRsZXQgeyBpdGVtcyA9IFtdIH0gPSBvcHRpb25zO1xuXHRcdGl0ZW1zID0gW10uY29uY2F0KGl0ZW1zKTtcblxuXHRcdC8vb3B0aW9ucy5pdGVtcyA9IGl0ZW1zO1xuXG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblxuXHRcdHRoaXMuc2Nyb2xsRWxlbWVudCA9IHRoaXMuX2lubmVyRWxlbWVudDtcblx0XHR0aGlzLmFjdGl2ZVNlY3Rpb24gPSB0aGlzLmdldFNlY3Rpb25CeUluZGV4KDApO1xuXG5cdFx0dGhpcy5pdGVtcyA9IGl0ZW1zO1xuXHRcdHRoaXMubGVuZ3RoID0gdGhpcy5pdGVtcy5sZW5ndGg7XG5cblx0XHR0aGlzLnNldEFjdGl2ZUJ5SW5kZXgoMCk7XG5cblx0XHR0aGlzLmVsZW1lbnRcblx0XHRcdC5maW5kKCcubGVwbGF5ZXItc2VjdGlvbicpXG5cdFx0XHQub24oJ2NsaWNrJywgdGhpcy5vblNlY3Rpb25DbGljay5iaW5kKHRoaXMpKTtcblxuXHRcdHRoaXMucGxheWVyLm9uKCdzZWN0aW9uc3RvZ2dsZScsIHRoaXMuX29uU2VjdGlvbnNUb2dnbGUuYmluZCh0aGlzKSk7XG5cblx0XHR0aGlzLnBsYXllci5vbigndGltZXVwZGF0ZScsIHRoaXMub25UaW1lVXBkYXRlLmJpbmQodGhpcykpO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ2luaXRlZCcsIHRoaXMudXBkYXRlU2VjdGlvbkR1cmF0aW9uLmJpbmQodGhpcykpO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ2R1cmF0aW9uY2hhbmdlJywgdGhpcy51cGRhdGVTZWN0aW9uRHVyYXRpb24uYmluZCh0aGlzKSk7XG5cblx0XHR0aGlzLnBsYXllci5vbignZm9jdXMnLCAoKSA9PiB0aGlzLnBsYXllci5mb2N1cygpKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0bmV4dCgpIHtcblx0XHRjb25zdCBzZWN0aW9uSW5kZXggPSBwYXJzZUludCh0aGlzLmFjdGl2ZVNlY3Rpb24uYXR0cignZGF0YS1pbmRleCcpKTtcblx0XHRjb25zdCBuZXdJbmRleCA9IHNlY3Rpb25JbmRleCA+PSB0aGlzLmxlbmd0aCA/IHRoaXMubGVuZ3RoIDogc2VjdGlvbkluZGV4ICsgMTtcblxuXHRcdHRoaXMuc2V0QWN0aXZlQnlJbmRleChuZXdJbmRleCk7XG5cblx0XHR0aGlzLnBsYXllci52aWRlby5jdXJyZW50VGltZSA9IHRoaXMuaXRlbXNbc2VjdGlvbkluZGV4XS5lbmQ7XG5cdH1cblxuXHRwcmV2KCkge1xuXHRcdGNvbnN0IHNlY3Rpb25JbmRleCA9IHBhcnNlSW50KHRoaXMuYWN0aXZlU2VjdGlvbi5hdHRyKCdkYXRhLWluZGV4JykpO1xuXHRcdGNvbnN0IG5ld0luZGV4ID0gc2VjdGlvbkluZGV4IDw9IDAgPyAwIDogc2VjdGlvbkluZGV4IC0gMTtcblxuXHRcdHRoaXMuc2V0QWN0aXZlQnlJbmRleChuZXdJbmRleCk7XG5cdFx0dGhpcy5wbGF5ZXIudmlkZW8uY3VycmVudFRpbWUgPSB0aGlzLml0ZW1zW25ld0luZGV4XS5iZWdpbjtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0Y29uc3QgeyBmdWxsc2NyZWVuT25seSwgaGlkZVNjcm9sbCB9ID0gdGhpcy5vcHRpb25zO1xuXG5cblx0XHR0aGlzLmVsZW1lbnQgPSAkKCc8ZGl2IC8+Jylcblx0XHRcdC5hZGRDbGFzcygnbGVwbGF5ZXItc2VjdGlvbnMnKVxuXHRcdFx0LmF0dHIoJ3RhYmluZGV4JywgJzAnKTtcblxuXHRcdHRoaXMuX2lubmVyRWxlbWVudCA9ICQoJzxkaXYgLz4nKS5hZGRDbGFzcygnbGVwbGF5ZXItc2VjdGlvbnNfX2lubmVyJyk7XG5cblx0XHRpZihmdWxsc2NyZWVuT25seSkge1xuXHRcdFx0dGhpcy5lbGVtZW50LmFkZENsYXNzKCdsZXBsYXllci1zZWN0aW9ucy0tZnNvbmx5Jyk7XG5cdFx0fVxuXG5cdFx0aWYoaGlkZVNjcm9sbCkge1xuXHRcdFx0dGhpcy5lbGVtZW50LmFkZENsYXNzKCdsZXBsYXllci1zZWN0aW9ucy0taGlkZS1zY3JvbGwnKTtcblx0XHRcdHRoaXMuX2lubmVyRWxlbWVudC5jc3Moe1xuXHRcdFx0XHRyaWdodCA6IC0xICogZ2V0U2Nyb2xsQmFyV2lkdGgoKVxuXHRcdFx0fSlcblx0XHR9XG5cblx0XHR0aGlzLmVsZW1lbnQuYXBwZW5kKFxuXHRcdFx0dGhpcy5faW5uZXJFbGVtZW50LmFwcGVuZCh0aGlzLl9jcmVhdGVTZWN0aW9ucyh0aGlzLm9wdGlvbnMuaXRlbXMpKVxuXHRcdClcblxuXG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudDtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdHVwZGF0ZVNlY3Rpb25EdXJhdGlvbigpIHtcblx0XHRpZih0aGlzLml0ZW1zICE9IG51bGwgJiYgdGhpcy5pdGVtcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRjb25zdCBsZW5ndGggPSB0aGlzLml0ZW1zLmxlbmd0aFxuXHRcdFx0dGhpcy5pdGVtc1tsZW5ndGggLSAxXS5lbmQgPSB0aGlzLnBsYXllci52aWRlby5kdXJhdGlvbjtcblxuXHRcdFx0Ly8gVE9ETzog0J/RgNC+0LTRg9C80LDRgtGMINGE0YPQvdC60YbQuNGP0Y4gdXBkYXRlU2VjdGlvblxuXHRcdFx0Ly90aGlzLnVwZGF0ZVNlY3Rpb24odGhpcy5pdGVtc1tsZW5ndGggLSAxXSwgbGVuZ3RoIC0gMSk7XG5cdFx0fVxuXHR9XG5cblxuXHRvblNlY3Rpb25DbGljayhlKSB7XG5cdFx0Y29uc3QgdmlkZW8gPSB0aGlzLnBsYXllci52aWRlbztcblx0XHRjb25zdCBzZWN0aW9uID0gJChlLnRhcmdldCkuY2xvc2VzdCgnLmxlcGxheWVyLXNlY3Rpb24nKTtcblx0XHR2aWRlby5jdXJyZW50VGltZSA9IHNlY3Rpb24uYXR0cignZGF0YS1iZWdpbicpO1xuXHRcdHRoaXMucGxheWVyLnRyaWdnZXIoJ3NlY3Rpb25zY2xpY2snLCB7IHNlY3Rpb24gOiB0aGlzLml0ZW1zW3NlY3Rpb24uYXR0cignZGF0YS1pbmRleCcpXX0pO1xuXHR9XG5cblx0c2V0QWN0aXZlQnlJbmRleChpbmRleCkge1xuXHRcdGlmIChcblx0XHRcdHRoaXMuYWN0aXZlU2VjdGlvbi5sZW5ndGggPT09IDAgfHxcblx0XHRcdHBhcnNlSW50KHRoaXMuYWN0aXZlU2VjdGlvbi5hdHRyKCdkYXRhLWluZGV4JykpID09PSBpbmRleCB8fFxuXHRcdFx0dGhpcy5nZXRTZWN0aW9uQnlJbmRleChpbmRleCkubGVuZ3RoID09PSAwXG5cdFx0KSB7XG5cdFx0XHRyZXR1cm4gdGhpc1xuXHRcdH1cblxuXHRcdHRoaXMuYWN0aXZlU2VjdGlvbi5yZW1vdmVDbGFzcygnbGVwbGF5ZXItc2VjdGlvbi0tYWN0aXZlJyk7XG5cdFx0dGhpcy5hY3RpdmVTZWN0aW9uID0gdGhpcy5nZXRTZWN0aW9uQnlJbmRleChpbmRleCk7XG5cdFx0dGhpcy5hY3RpdmVTZWN0aW9uLmFkZENsYXNzKCdsZXBsYXllci1zZWN0aW9uLS1hY3RpdmUnKTtcblxuXHRcdGNvbnN0IHRvcFBvc2l0aW9uID0gdGhpcy5hY3RpdmVTZWN0aW9uLnBvc2l0aW9uKCkudG9wO1xuXG5cdFx0dGhpcy5zY3JvbGxFbGVtZW50XG5cdFx0XHQuYW5pbWF0ZSh7XG5cdFx0XHRcdHNjcm9sbFRvcCA6IHRoaXMuc2Nyb2xsRWxlbWVudC5zY3JvbGxUb3AoKSArIHRvcFBvc2l0aW9uXG5cdFx0XHR9LCA4MDApXG5cblx0XHR0aGlzLnBsYXllci50cmlnZ2VyKCdzZWN0aW9uc2NoYW5nZScsIHsgc2VjdGlvbiA6IHRoaXMuaXRlbXNbaW5kZXhdfSk7XG5cblx0XHRyZXR1cm4gdGhpc1xuXHR9XG5cblx0Z2V0U2VjdGlvbkJ5SW5kZXgoaW5kZXgpIHtcblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50LmZpbmQoYC5sZXBsYXllci1zZWN0aW9uW2RhdGEtaW5kZXg9XCIke2luZGV4fVwiXWApO1xuXHR9XG5cblxuXHRvblRpbWVVcGRhdGUoZSwgZGF0YSkge1xuXHRcdGlmICh0aGlzLmFjdGl2ZVNlY3Rpb24ubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm5cblx0XHR9XG5cblx0XHRjb25zdCBjdXJyZW50VGltZSA9IHRoaXMucGxheWVyLmN1cnJlbnRUaW1lO1xuXG5cdFx0Ly8gVXBkYXRlIHNwYW4gd2l0aCBlbmQgc2VjdGlvbiB0aW1lXG5cdFx0Ly8gVE9ETzog0JLRi9C90LXRgdGC0Lgg0Y3RgtC+INCyINC+0YLQtNC10LvRjNC90YvQuSDQutC+0LzQv9C+0L3QtdC90YIgU2hvd1RpbWUg0LjQu9C4INGC0LjQv9C+INGC0L7Qs9C+XG5cdFx0aWYodGhpcy5wbGF5ZXIudmlldyA9PT0gJ21pbmknKSB7XG5cdFx0XHRjb25zdCBlbmRTZWN0aW9uVGltZSA9IHRoaXMuYWN0aXZlU2VjdGlvbi5hdHRyKCdkYXRhLWVuZCcpO1xuXHRcdFx0dGhpcy5hY3RpdmVTZWN0aW9uXG5cdFx0XHRcdC5uZXh0KClcblx0XHRcdFx0LmZpbmQoJy50aW1lJylcblx0XHRcdFx0LnRleHQoc2Vjb25kc1RvVGltZShlbmRTZWN0aW9uVGltZSAtIGN1cnJlbnRUaW1lKSk7XG5cdFx0fVxuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBzZWN0aW9uID0gdGhpcy5pdGVtc1tpXTtcblx0XHRcdGlmIChjdXJyZW50VGltZSA8IHNlY3Rpb24uZW5kKSB7XG5cdFx0XHRcdHRoaXMuc2V0QWN0aXZlQnlJbmRleChpKVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRfb25TZWN0aW9uc1RvZ2dsZShlLCBkYXRhKSB7XG5cdFx0aWYgKHRoaXMuZWxlbWVudC5oYXNDbGFzcygnbGVwbGF5ZXItc2VjdGlvbnMtLWhpZGRlbicpICYmIGRhdGEuY2hlY2tlZCkge1xuXHRcdFx0dGhpcy5lbGVtZW50LnJlbW92ZUNsYXNzKCdsZXBsYXllci1zZWN0aW9ucy0taGlkZGVuJyk7XG5cdFx0fSBlbHNlIGlmICghZGF0YS5jaGVja2VkKSB7XG5cdFx0XHR0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoJ2xlcGxheWVyLXNlY3Rpb25zLS1oaWRkZW4nKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQ3JlYXRlIEhUTUwgb2Ygc2VjdGlvbiBieSBkYXRhIGFuZCBpbmRleCBzZWN0aW9uXG5cdCAqXG5cdCAqIEByZXR1cm5zIHtTdHJpbmd9IEhUTUxcblx0ICovXG5cdGNyZWF0ZVNlY3Rpb24oc2VjdGlvbiwgaW5kZXgpIHtcblx0XHRjb25zdCBpdGVtcyA9IHRoaXMuaXRlbXMgfHwgdGhpcy5vcHRpb25zLml0ZW1zO1xuXHRcdGNvbnN0IGl0ZW0gPSBgXG5cdFx0XHQ8ZGl2IGNsYXNzPVwibGVwbGF5ZXItc2VjdGlvbiAkeyFpbmRleCA/ICdsZXBsYXllci1zZWN0aW9uLS1hY3RpdmUnIDogJyd9XCJcblx0XHRcdFx0ZGF0YS1iZWdpbj1cIiR7c2VjdGlvbi5iZWdpbn1cIlxuXHRcdFx0XHRkYXRhLWluZGV4PVwiJHtpbmRleC50b1N0cmluZygpfVwiXG5cdFx0XHRcdGRhdGEtZW5kPVwiJHtzZWN0aW9uLmVuZH1cIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImxlcGxheWVyLXNlY3Rpb24tdGltZVwiPiR7c2Vjb25kc1RvVGltZShzZWN0aW9uLmJlZ2luKX08L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImxlcGxheWVyLXNlY3Rpb24taW5mb1wiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJsZXBsYXllci1zZWN0aW9uLW5leHQtaW5mb1wiPlxuXHRcdFx0XHRcdFx0JHtzZWN0aW9uLm5leHRJbmZvIHx8ICfQodC70LXQtNGD0Y7RidCw0Y8g0YHQtdC60YbQuNGPINC90LDRh9C90LXRgtGB0Y8g0YfQtdGA0LXQtyd9XG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cInRpbWVcIj4ke3NlY29uZHNUb1RpbWUoaXRlbXNbMF0uZW5kKX08L3NwYW4+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0JHtcblx0XHRcdFx0XHRcdHNlY3Rpb24udGl0bGUgIT0gbnVsbCA/XG5cdFx0XHRcdFx0XHRcdGA8ZGl2IGNsYXNzPVwibGVwbGF5ZXItc2VjdGlvbi10aXRsZVwiPiR7c2VjdGlvbi50aXRsZX08L2Rpdj5gXG5cdFx0XHRcdFx0XHQ6ICcnXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdCR7XG5cdFx0XHRcdFx0XHRzZWN0aW9uLmRlc2NyaXB0aW9uICE9IG51bGwgP1xuXHRcdFx0XHRcdFx0XHRgPGRpdiBjbGFzcz1cImxlcGxheWVyLXNlY3Rpb24tZGVzY3JpcHRpb25cIj4ke3NlY3Rpb24uZGVzY3JpcHRpb259PC9kaXY+YFxuXHRcdFx0XHRcdFx0OiAnJ1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRgLnRyaW0oKVxuXHRcdHJldHVybiBpdGVtXG5cdH1cblxuXHQvLyBUT0RPOiDQn9GA0LjQtNGD0LzQsNGC0Ywg0YfRgtC+INGB0LTQtdC70LDRgtGMINGBINGB0L7QsdGL0YLQuNGP0LzQuCDQv9C+0YHQu9C1INC+0LHQvdC+0LLQu9C10L3QuNGPINC/0L7Qu9C90L7RgdGM0Y4g0YHQtdC60YbQuNC4XG5cdC8qKlxuXHQgKiBGaW5kIHNlY3Rpb24gYnkgaW5kZXggYW5kIHVwZGF0ZSBoaW0gdXNpbmcgZGF0YVxuXHQgKlxuXHQgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuXHQgKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcblx0ICovXG5cdHVwZGF0ZVNlY3Rpb24oZGF0YSwgaW5kZXgpIHtcblx0XHR0aGlzLmdldFNlY3Rpb25CeUluZGV4KGluZGV4KVxuXHRcdFx0LnJlcGxhY2VXaXRoKHRoaXMuY3JlYXRlU2VjdGlvbihkYXRhLCBpbmRleCkpXG5cdFx0XHQub24oJ2NsaWNrJywgdGhpcy5vblNlY3Rpb25DbGljay5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdF9jcmVhdGVTZWN0aW9ucyhpdGVtcykge1xuXHRcdGxldCByZXN1bHQgPSAnJztcblx0XHRpdGVtcy5mb3JFYWNoKChzZWN0aW9uLCBpbmRleCkgPT4ge1xuXHRcdFx0cmVzdWx0ICs9IHRoaXMuY3JlYXRlU2VjdGlvbihzZWN0aW9uLCBpbmRleCk7XG5cdFx0fSk7XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ1NlY3Rpb25zJywgU2VjdGlvbnMpO1xuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbnM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9TZWN0aW9ucy5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgRXJyb3JEaXNwbGF5LmpzXG4gKi9cblxuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5cbi8qKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQGNsYXNzIEVycm9yRGlzcGxheVxuICogQGV4dGVuZHMgQ29tcG9uZW50XG4gKi9cbmNsYXNzIEVycm9yRGlzcGxheSBleHRlbmRzIENvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblx0XHRpZih0aGlzLnBsYXllci5fZXJyb3IgIT0gbnVsbCkge1xuXHRcdFx0dGhpcy5tZXNzYWdlID0gdGhpcy5wbGF5ZXIuX2Vycm9yLm1lc3NhZ2U7XG5cdFx0XHR0aGlzLmVsZW1lbnQuc2hvdygpO1xuXHRcdH1cblx0XHR0aGlzLnBsYXllci5vbignZXJyb3InLCB0aGlzLm9uUGxheWVyRXJyb3IuYmluZCh0aGlzKSk7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdHRoaXMuZWxlbWVudCA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0LmFkZENsYXNzKCdsZXBsYXllci1lcnJvci1kaXNwbGF5Jylcblx0fVxuXG5cdHNldCBtZXNzYWdlKHZhbHVlKSB7XG5cdFx0dGhpcy5lbGVtZW50Lmh0bWwodmFsdWUpO1xuXHR9XG5cblx0b25QbGF5ZXJFcnJvcihlLCBkYXRhKSB7XG5cdFx0Y29uc3QgZXJyb3IgPSBkYXRhLmVycm9yO1xuXHRcdHRoaXMubWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XG5cdFx0dGhpcy5lbGVtZW50LnNob3coKTtcblx0fVxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ0Vycm9yRGlzcGxheScsIEVycm9yRGlzcGxheSk7XG5leHBvcnQgZGVmYXVsdCBFcnJvckRpc3BsYXk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9FcnJvckRpc3BsYXkuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIEVycm9yRGlzcGxheS5qc1xuICovXG5cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy51cmxdIHBhdGggdG8gcG9zdGVyIGltYWdlXG4gKiBAY2xhc3MgUG9zdGVyXG4gKiBAZXh0ZW5kcyBDb21wb25lbnRcbiAqL1xuY2xhc3MgUG9zdGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnM9e30pIHtcblx0XHRvcHRpb25zID0gJC5leHRlbmQoe30sIHtcblx0XHRcdHVybCA6IG9wdGlvbnMudXJsXG5cdFx0fSwgb3B0aW9ucyk7XG5cblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXG5cdFx0dGhpcy51cmwgPSB0aGlzLm9wdGlvbnMudXJsO1xuXHR9XG5cblx0c2V0IHVybCh2YWx1ZSkge1xuXHRcdGlmKHZhbHVlID09IG51bGwpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy5fdXJsID0gdmFsdWU7XG5cdFx0dGhpcy5lbGVtZW50LmNzcygnYmFja2dyb3VuZC1pbWFnZScsIGB1cmwoXCIke3ZhbHVlfVwiKWApXG5cdH1cblxuXHRnZXQgdXJsKCkge1xuXHRcdHJldHVybiB0aGlzLl91cmw7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdHRoaXMuZWxlbWVudCA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0LmFkZENsYXNzKCdsZXBsYXllci1wb3N0ZXInKTtcblxuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQ7XG5cdH1cblxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ1Bvc3RlcicsIFBvc3Rlcik7XG5leHBvcnQgZGVmYXVsdCBQb3N0ZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9Qb3N0ZXIuanMiLCIvKipcbiAqIEBmaWxlIGZ1bGxzY3JlZW4tYXBpLmpzXG4gKi9cblxuXG4vKlxuICogU3RvcmUgdGhlIGJyb3dzZXItc3BlY2lmaWMgbWV0aG9kcyBmb3IgdGhlIGZ1bGxzY3JlZW4gQVBJXG4gKiBAdHlwZSB7T2JqZWN0fHVuZGVmaW5lZH1cbiAqIEBwcml2YXRlXG4gKi9cbmxldCBGdWxsc2NyZWVuQXBpID0ge307XG5cbi8vIGJyb3dzZXIgQVBJIG1ldGhvZHNcbi8vIG1hcCBhcHByb2FjaCBmcm9tIFNjcmVlbmZ1bC5qcyAtIGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvc2NyZWVuZnVsbC5qc1xuY29uc3QgYXBpTWFwID0gW1xuXHQvLyBTcGVjOiBodHRwczovL2R2Y3MudzMub3JnL2hnL2Z1bGxzY3JlZW4vcmF3LWZpbGUvdGlwL092ZXJ2aWV3Lmh0bWxcblx0W1xuXHRcdCdyZXF1ZXN0RnVsbHNjcmVlbicsXG5cdFx0J2V4aXRGdWxsc2NyZWVuJyxcblx0XHQnZnVsbHNjcmVlbkVsZW1lbnQnLFxuXHRcdCdmdWxsc2NyZWVuRW5hYmxlZCcsXG5cdFx0J2Z1bGxzY3JlZW5jaGFuZ2UnLFxuXHRcdCdmdWxsc2NyZWVuZXJyb3InXG5cdF0sXG5cdC8vIFdlYktpdFxuXHRbXG5cdFx0J3dlYmtpdFJlcXVlc3RGdWxsc2NyZWVuJyxcblx0XHQnd2Via2l0RXhpdEZ1bGxzY3JlZW4nLFxuXHRcdCd3ZWJraXRGdWxsc2NyZWVuRWxlbWVudCcsXG5cdFx0J3dlYmtpdEZ1bGxzY3JlZW5FbmFibGVkJyxcblx0XHQnd2Via2l0ZnVsbHNjcmVlbmNoYW5nZScsXG5cdFx0J3dlYmtpdGZ1bGxzY3JlZW5lcnJvcidcblx0XSxcblx0Ly8gT2xkIFdlYktpdCAoU2FmYXJpIDUuMSlcblx0W1xuXHRcdCd3ZWJraXRSZXF1ZXN0RnVsbFNjcmVlbicsXG5cdFx0J3dlYmtpdENhbmNlbEZ1bGxTY3JlZW4nLFxuXHRcdCd3ZWJraXRDdXJyZW50RnVsbFNjcmVlbkVsZW1lbnQnLFxuXHRcdCd3ZWJraXRDYW5jZWxGdWxsU2NyZWVuJyxcblx0XHQnd2Via2l0ZnVsbHNjcmVlbmNoYW5nZScsXG5cdFx0J3dlYmtpdGZ1bGxzY3JlZW5lcnJvcidcblx0XSxcblx0Ly8gTW96aWxsYVxuXHRbXG5cdFx0J21velJlcXVlc3RGdWxsU2NyZWVuJyxcblx0XHQnbW96Q2FuY2VsRnVsbFNjcmVlbicsXG5cdFx0J21vekZ1bGxTY3JlZW5FbGVtZW50Jyxcblx0XHQnbW96RnVsbFNjcmVlbkVuYWJsZWQnLFxuXHRcdCdtb3pmdWxsc2NyZWVuY2hhbmdlJyxcblx0XHQnbW96ZnVsbHNjcmVlbmVycm9yJ1xuXHRdLFxuXHQvLyBNaWNyb3NvZnRcblx0W1xuXHRcdCdtc1JlcXVlc3RGdWxsc2NyZWVuJyxcblx0XHQnbXNFeGl0RnVsbHNjcmVlbicsXG5cdFx0J21zRnVsbHNjcmVlbkVsZW1lbnQnLFxuXHRcdCdtc0Z1bGxzY3JlZW5FbmFibGVkJyxcblx0XHQnTVNGdWxsc2NyZWVuQ2hhbmdlJyxcblx0XHQnTVNGdWxsc2NyZWVuRXJyb3InXG5cdF1cbl07XG5cblxubGV0IHNwZWNBcGkgPSBhcGlNYXBbMF07XG5cbmxldCBicm93c2VyQXBpO1xuXG4vLyBkZXRlcm1pbmUgdGhlIHN1cHBvcnRlZCBzZXQgb2YgZnVuY3Rpb25zXG5mb3IgKGxldCBpID0gMDsgaSA8IGFwaU1hcC5sZW5ndGg7IGkrKykge1xuXHQvLyBjaGVjayBmb3IgZXhpdEZ1bGxzY3JlZW4gZnVuY3Rpb25cblx0aWYgKGFwaU1hcFtpXVsxXSBpbiBkb2N1bWVudCkge1xuXHRcdGJyb3dzZXJBcGkgPSBhcGlNYXBbaV07XG5cdFx0YnJlYWs7XG5cdH1cbn1cblxuLy8gbWFwIHRoZSBicm93c2VyIEFQSSBuYW1lcyB0byB0aGUgc3BlYyBBUEkgbmFtZXNcbmlmIChicm93c2VyQXBpKSB7XG5cdGZvciAobGV0IGk9MDsgaTxicm93c2VyQXBpLmxlbmd0aDsgaSsrKSB7XG5cdFx0RnVsbHNjcmVlbkFwaVtzcGVjQXBpW2ldXSA9IGJyb3dzZXJBcGlbaV07XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRnVsbHNjcmVlbkFwaTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9GdWxsc2NyZWVuQXBpLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBjb29raWUtY29udHJvbC5qc1xuICpcbiAqIEBjbGFzIENvb2tpZVxuICovXG5jbGFzcyBDb29raWUge1xuXHQvKipcblx0ICogQHB1YmxpY1xuXHQgKlxuXHQgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBOYW1lIG9mIGNvb2tpZVxuXHQgKiBAcGFyYW0ge1N0cmluZ30gW2RmbHRdIFJldHVybiBkZWZhdWx0IHZhbHVlIGlmIHRoaXMgZmllbGQgaXMgZW1wdHlcblx0ICpcblx0ICovXG5cdHN0YXRpYyBnZXQgKG5hbWUsIGRmbHQpIHtcblx0XHRsZXQgY29va2llcyA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOycpO1xuXHRcdGZvciAobGV0IGkgaW4gY29va2llcykge1xuXHRcdFx0dmFyIGQgPSBjb29raWVzWyBpIF0udHJpbSgpLnNwbGl0KCc9Jyk7XG5cdFx0XHRpZiAoZFsgMCBdID09PSAnbGVwbGF5ZXJfJyArIG5hbWUpXG5cdFx0XHRcdHJldHVybiBkWyAxIF07XG5cdFx0fVxuXHRcdHJldHVybiBkZmx0O1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwdWJsaWNcblx0ICpcblx0ICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgS2V5XG5cdCAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSBWYWx1ZVxuXHQgKi9cblx0c3RhdGljIHNldCAobmFtZSwgdmFsdWUpIHtcblx0XHR2YXIgZCA9IG5ldyBEYXRlKCk7XG5cdFx0ZC5zZXREYXRlKGQueWVhciArIDEpO1xuXHRcdGRvY3VtZW50LmNvb2tpZSA9ICdsZXBsYXllcl8nICsgbmFtZSArICc9JyArIHZhbHVlICsgJztleHBpcmVzPScgKyBkLnRvU3RyaW5nKCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29va2llO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL3V0aWxzL2Nvb2tpZS5qcyIsIi8qKlxuICogQGZpbGUgYnJvd3Nlci5qc1xuICovXG5cblxuY29uc3QgVVNFUl9BR0VOVCA9IHdpbmRvdy5uYXZpZ2F0b3IgJiYgd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQgfHwgJyc7XG5cbmV4cG9ydCBjb25zdCBJU19NT0JJTEUgPSAoL01vYmlsZS9pKS50ZXN0KFVTRVJfQUdFTlQpO1xuXG5leHBvcnQgY29uc3QgSVNfQ0hST01FID0gVVNFUl9BR0VOVC5pbmRleE9mKCdDaHJvbWUnKSA+IC0xO1xuXG5leHBvcnQgY29uc3QgSVNfQU5EUk9JRCA9ICgvQW5kcm9pZC9pKS50ZXN0KFVTRVJfQUdFTlQpO1xuXG5leHBvcnQgY29uc3QgSVNfQU5EUk9JRF9QSE9ORSA9IElTX0FORFJPSUQgJiYgSVNfTU9CSUxFO1xuXG5leHBvcnQgY29uc3QgSVNfSVBBRCA9ICgvaVBhZC9pKS50ZXN0KFVTRVJfQUdFTlQpO1xuLy8gVGhlIEZhY2Vib29rIGFwcCdzIFVJV2ViVmlldyBpZGVudGlmaWVzIGFzIGJvdGggYW4gaVBob25lIGFuZCBpUGFkLCBzb1xuLy8gdG8gaWRlbnRpZnkgaVBob25lcywgd2UgbmVlZCB0byBleGNsdWRlIGlQYWRzLlxuLy8gaHR0cDovL2FydHN5LmdpdGh1Yi5pby9ibG9nLzIwMTIvMTAvMTgvdGhlLXBlcmlscy1vZi1pb3MtdXNlci1hZ2VudC1zbmlmZmluZy9cbmV4cG9ydCBjb25zdCBJU19JUEhPTkUgPSAoL2lQaG9uZS9pKS50ZXN0KFVTRVJfQUdFTlQpICYmICFJU19JUEFEO1xuZXhwb3J0IGNvbnN0IElTX0lQT0QgPSAoL2lQb2QvaSkudGVzdChVU0VSX0FHRU5UKTtcbmV4cG9ydCBjb25zdCBJU19JT1MgPSBJU19JUEhPTkUgfHwgSVNfSVBBRCB8fCBJU19JUE9EO1xuXG5leHBvcnQgY29uc3QgSVNfU0FGQVJJID0gVVNFUl9BR0VOVC5pbmRleE9mKCdTYWZhcmknKSA+IC0xICYmICFJU19DSFJPTUU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvdXRpbHMvYnJvd3Nlci5qcyIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbmNsYXNzIE1lZGlhRXJyb3Ige1xuXHRjb25zdHJ1Y3Rvcih2YWx1ZSkge1xuXHRcdGlmKHZhbHVlIGluc3RhbmNlb2YgTWVkaWFFcnJvcikge1xuXHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuXHRcdFx0dGhpcy5jb2RlID0gdmFsdWU7XG5cdFx0fSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG5cdFx0Ly8gZGVmYXVsdCBjb2RlIGlzIHplcm8sIHNvIHRoaXMgaXMgYSBjdXN0b20gZXJyb3Jcblx0XHRcdHRoaXMubWVzc2FnZSA9IHZhbHVlO1xuXHRcdH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuXG5cdFx0XHQvLyBXZSBhc3NpZ24gdGhlIGBjb2RlYCBwcm9wZXJ0eSBtYW51YWxseSBiZWNhdXNlIG5hdGl2ZSBNZWRpYUVycm9yIG9iamVjdHNcblx0XHRcdC8vIGRvIG5vdCBleHBvc2UgaXQgYXMgYW4gb3duL2VudW1lcmFibGUgcHJvcGVydHkgb2YgdGhlIG9iamVjdC5cblx0XHRcdGlmICh0eXBlb2YgdmFsdWUuY29kZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0dGhpcy5jb2RlID0gdmFsdWUuY29kZTtcblx0XHRcdH1cblxuXHRcdFx0JC5leHRlbmQodGhpcywgdmFsdWUpO1xuXHRcdH1cblxuXHRcdGlmICghdGhpcy5tZXNzYWdlKSB7XG5cdFx0XHR0aGlzLm1lc3NhZ2UgPSBNZWRpYUVycm9yLmRlZmF1bHRNZXNzYWdlc1t0aGlzLmNvZGVdIHx8ICcnO1xuXHRcdH1cblx0fVxufVxuXG5NZWRpYUVycm9yLnByb3RvdHlwZS5jb2RlID0gMDtcblxuTWVkaWFFcnJvci5wcm90b3R5cGUubWVzc2FnZSA9ICcnO1xuXG5NZWRpYUVycm9yLmVycm9yVHlwZXMgPSBbXG5cdCdNRURJQV9FUlJfQ1VTVE9NJyxcblx0J01FRElBX0VSUl9BQk9SVEVEJyxcblx0J01FRElBX0VSUl9ORVRXT1JLJyxcblx0J01FRElBX0VSUl9ERUNPREUnLFxuXHQnTUVESUFfRVJSX1NSQ19OT1RfU1VQUE9SVEVEJyxcblx0J01FRElBX0VSUl9FTkNSWVBURUQnXG5dO1xuXG5cbk1lZGlhRXJyb3IuZGVmYXVsdE1lc3NhZ2VzID0ge1xuXHQxIDogJ9CS0Ysg0L/RgNC10YDQstCw0LvQuCDQt9Cw0LPRgNGD0LfQutGDINCy0LjQtNC10L4uJyxcblx0MiA6ICfQl9Cw0LPRgNGD0LfQutCwINCy0LjQtNC10L4g0L/RgNC10YDQstCw0L3QsCDQuNC3LdC30LAg0L/QvtGC0LXRgNC4INGB0L7QtdC00LjQvdC10L3QuNGPLicsXG5cdDMgOiAn0JfQsNCz0YDRg9C30LrQsCDQstC40LTQtdC+INC+0YHRgtCw0L3QvtCy0LvQtdC90LAg0LjQty3Qt9CwINC/0YDQvtCx0LvQtdC8INGBINCy0LjQtNC10L7RhNCw0LnQu9C+0Lwg0LjQu9C4INC40Lct0LfQsCDRgtC+0LPQviwg0YfRgtC+INCy0LDRiCDQsdGA0LDRg9C30LXRgCDQvdC1INC/0L7QtNC00LXRgNC20LjQstCw0LXRgiDQstC+0YHQv9GA0L7QuNC30LLQtdC00LXQvdC40LUg0LTQsNC90L3QvtCz0L4g0YTQsNC50LvQsC4nLFxuXHQ0IDogJ9CS0LjQtNC10L4g0L3QtSDQvNC+0LbQtdGCINCx0YvRgtGMINC30LDQs9GA0YPQttC10L3QviDQuNC3LdC30LAg0L/RgNC+0LHQu9C10Lwg0YEg0LjQvdGC0LXRgNC90LXRgi3RgdC+0LXQtNC40L3QtdC90LjQtdC8INC40LvQuCDQv9GA0L7QsdC70LXQvCDQvdCwINGB0LXRgNCy0LXRgNC1LiDQmNC70Lgg0YTQvtGA0LzQsNGCINGE0LDQudC70LAg0L3QtSDQv9C+0LTQtNC10YDQttC40LLQsNC10YLRgdGPINCy0LDRiNC40Lwg0LHRgNCw0YPQt9C10YDQvtC8LicsXG5cdDUgOiAn0JLQuNC00LXQviDQt9Cw0YjQuNGE0YDQvtCy0LDQvdC+LCDQuCDQvNGLINC90LUg0LzQvtC20LXQvCDQtdCz0L4g0YDQsNGB0YjQuNGE0YDQvtCy0LDRgtGMLidcbn07XG5cbi8vIEFkZCB0eXBlcyBhcyBwcm9wZXJ0aWVzIG9uIE1lZGlhRXJyb3Jcbi8vIGUuZy4gTWVkaWFFcnJvci5NRURJQV9FUlJfU1JDX05PVF9TVVBQT1JURUQgPSA0O1xuZm9yIChsZXQgZXJyTnVtID0gMDsgZXJyTnVtIDwgTWVkaWFFcnJvci5lcnJvclR5cGVzLmxlbmd0aDsgZXJyTnVtKyspIHtcblx0TWVkaWFFcnJvcltNZWRpYUVycm9yLmVycm9yVHlwZXNbZXJyTnVtXV0gPSBlcnJOdW07XG5cdC8vIHZhbHVlcyBzaG91bGQgYmUgYWNjZXNzaWJsZSBvbiBib3RoIHRoZSBjbGFzcyBhbmQgaW5zdGFuY2Vcblx0TWVkaWFFcnJvci5wcm90b3R5cGVbTWVkaWFFcnJvci5lcnJvclR5cGVzW2Vyck51bV1dID0gZXJyTnVtO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNZWRpYUVycm9yO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL01lZGlhRXJyb3IuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIFBsYXlDb250cm9sLmpzXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9Db250cm9sJztcblxuLyoqXG4gKiBAY2xhc3MgUGxheUNvbnRyb2xcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBleHRlbmRzIENvbnRyb2xcbiAqL1xuY2xhc3MgUGxheUNvbnRyb2wgZXh0ZW5kcyBDb250cm9sIHtcblx0Y29uc3RydWN0b3IgKHBsYXllciwgb3B0aW9ucz17fSkge1xuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0aWNvbk5hbWUgOiAncGxheScsXG5cdFx0XHR0aXRsZSA6ICfQktC+0YHQv9GA0L7QuNC30LLQtdGB0YLQuCDQstC40LTQtdC+Jyxcblx0XHRcdGNsYXNzTmFtZSA6ICdwbGF5Jyxcblx0XHRcdG5hbWUgOiAncGxheSdcblx0XHR9LCBvcHRpb25zKTtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ3BsYXknLCB0aGlzLnNob3dQYXVzZS5iaW5kKHRoaXMpKVxuXHRcdHRoaXMucGxheWVyLm9uKCdwbGF5aW5nJywgdGhpcy5zaG93UGF1c2UuYmluZCh0aGlzKSlcblx0XHR0aGlzLnBsYXllci5vbigncGF1c2UnLCB0aGlzLnNob3dQbGF5LmJpbmQodGhpcykpO1xuXHRcdHRoaXMucGxheWVyLm9uKCdlbmRlZCcsIHRoaXMuc2hvd1JlcGxheS5iaW5kKHRoaXMpKTtcblxuXHRcdHRoaXMucGxheWVyLm9uKCdwbGF5JywgdGhpcy5yZW1vdmVSZXBsYXkuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5wbGF5ZXIub24oJ3NlZWtpbmcnLCB0aGlzLnJlbW92ZVJlcGxheS5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLnBsYXllci5vbignbG9hZHN0YXJ0JywgdGhpcy5yZW1vdmVSZXBsYXkuYmluZCh0aGlzKSk7XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBQYXVzZSB0aGUgdmlkZW9cblx0ICovXG5cdHNob3dQbGF5ICgpIHtcblx0XHRpZih0aGlzLmljb24uaWNvbk5hbWUgPT09ICdwbGF5JykgcmV0dXJuO1xuXHRcdHRoaXMuaWNvbi5pY29uTmFtZSA9ICdwbGF5Jztcblx0XHR0aGlzLmVsZW1lbnQuYXR0cigndGl0bGUnLCB0aGlzLm9wdGlvbnMudGl0bGUpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFBsYXkgdGhlIHZpZGVvXG5cdCAqL1xuXHRzaG93UGF1c2UgKCkge1xuXHRcdGlmKHRoaXMuaWNvbi5pY29uTmFtZSA9PT0gJ3BhdXNlJykgcmV0dXJuO1xuXHRcdHRoaXMuaWNvbi5pY29uTmFtZSA9ICdwYXVzZSc7XG5cdFx0dGhpcy5lbGVtZW50LmF0dHIoJ3RpdGxlJywgJ9Cf0L7RgdGC0LDQstC40YLRjCDQvdCwINC/0LDRg9C30YMnKTtcblx0fVxuXG5cdHNob3dSZXBsYXkoKSB7XG5cdFx0aWYodGhpcy5pY29uLmljb25OYW1lID09PSAncmVmcmVzaCcpIHJldHVybjtcblx0XHRpZih0aGlzLnBsYXllci5kdXJhdGlvbiAhPT0gSW5maW5pdHkpIHtcblx0XHRcdHRoaXMuX3JlcGxheSA9IHRydWU7XG5cdFx0XHR0aGlzLmljb24uaWNvbk5hbWUgPSAncmVmcmVzaCc7XG5cdFx0XHR0aGlzLmVsZW1lbnQuYXR0cigndGl0bGUnLCAn0JfQsNC/0YPRgdGC0LjRgtGMINC30LDQvdC+0LLQvicpXG5cdFx0fVxuXHR9XG5cblx0cmVtb3ZlUmVwbGF5KCkge1xuXHRcdGlmKCF0aGlzLl9yZXBsYXkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy5fcmVwbGF5ID0gZmFsc2U7XG5cblx0XHRpZih0aGlzLnBsYXllci52aWRlby5wYXVzZWQpIHtcblx0XHRcdHRoaXMuc2hvd1BsYXkoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zaG93UGF1c2UoKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRvbkNsaWNrKGUpIHtcblx0XHQvL3N1cGVyLm9uQ2xpY2soZSk7XG5cdFx0dGhpcy5wbGF5ZXIudmlkZW8udG9nZ2xlUGxheSgpO1xuXHR9XG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnUGxheUNvbnRyb2wnLCBQbGF5Q29udHJvbCk7XG5Db250cm9sLnJlZ2lzdGVyQ29udHJvbCgncGxheScsIFBsYXlDb250cm9sKTtcbmV4cG9ydCBkZWZhdWx0IFBsYXlDb250cm9sO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvUGxheUNvbnRyb2wuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIFZvbHVtZUNvbnRyb2wuanNcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL0NvbnRyb2wnO1xuaW1wb3J0IENvbnRyb2xEcm9wZG93biBmcm9tICcuL0NvbnRyb2xEcm9wZG93bic7XG5cbi8qKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQGNsYXNzIFZvbHVtZUNvbnRyb2xcbiAqIEBleHRlbmRzIENvbnRyb2xEcm9wZG93blxuICovXG5jbGFzcyBWb2x1bWVDb250cm9sIGV4dGVuZHMgQ29udHJvbERyb3Bkb3duIHtcblxuXHRjb25zdHJ1Y3RvciAocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRpY29uTmFtZSA6ICd2b2x1bWUtZG93bicsXG5cdFx0XHRjbGFzc05hbWUgOiAndm9sdW1lLWNvbnRyb2wnLFxuXHRcdFx0bmFtZSA6ICd2b2x1bWUnXG5cdFx0fSwgb3B0aW9ucyk7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblxuXHRcdHRoaXMucGxheWVyLm9uKCd2b2x1bWVjaGFuZ2UnLCAoZSwgZGF0YSkgPT4ge1xuXHRcdFx0Y29uc3QgdmlkZW8gPSB0aGlzLnBsYXllci52aWRlbztcblx0XHRcdHRoaXMudmFsdWUgPSB2aWRlby5tdXRlZCA/IDAgOiB2aWRlby52b2x1bWU7XG5cdFx0fSlcblx0fVxuXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0c3VwZXIuY3JlYXRlRWxlbWVudCgpO1xuXHRcdGxldCBkcmFnID0gZmFsc2U7XG5cdFx0Y29uc3QgdmlkZW8gPSB0aGlzLnBsYXllci52aWRlbztcblxuXHRcdHRoaXMubWFya2VyID0gJCgnPGRpdi8+JykuYWRkQ2xhc3MoJ3ZvbHVtZS1tYXJrZXInKTtcblxuXHRcdHRoaXMuYWN0aXZlID0gJCgnPGRpdi8+JykuYWRkQ2xhc3MoJ3ZvbHVtZS1hY3RpdmUnKTtcblxuXHRcdHRoaXMubGluZSA9ICQoJzxkaXYvPicpXG5cdFx0XHQuYWRkQ2xhc3MoJ3ZvbHVtZS1saW5lJylcblx0XHRcdC5hcHBlbmQodGhpcy5hY3RpdmUpXG5cdFx0XHQuYXBwZW5kKHRoaXMubWFya2VyKVxuXHRcdFx0Lm9uKCdjbGljaycsIChlKSA9PiB7XG5cdFx0XHRcdGlmIChkcmFnKSByZXR1cm47XG5cdFx0XHRcdGxldCBwID0gdGhpcy5nZXRQb3NpdGlvbihlLnBhZ2VZKTtcblx0XHRcdFx0aWYgKHAgPj0gMCAmJiBwIDw9IDEpIHtcblx0XHRcdFx0XHRpZih2aWRlby5tdXRlZCkge1xuXHRcdFx0XHRcdFx0dmlkZW8ubXV0ZWQgPSBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dmlkZW8udm9sdW1lID0gMSAtIHA7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5kcm9wZG93bkNvbnRlbnRcblx0XHRcdC5hZGRDbGFzcygndm9sdW1lLXNsaWRlcicpXG5cdFx0XHQuYXBwZW5kKHRoaXMubGluZSk7XG5cblx0XHR0aGlzLmljb24uZWxlbWVudC5hdHRyKCd0aXRsZScsICfQntGC0LrQu9GO0YfQuNGC0Ywg0LfQstGD0LonKTtcblxuXHRcdHRoaXMubWFya2VyLm9uKCdtb3VzZWRvd24nLCAoZSkgPT4ge1xuXHRcdFx0aWYgKGUud2hpY2ggIT09IDEpIHJldHVybjtcblx0XHRcdGRyYWcgPSB0cnVlO1xuXHRcdH0pO1xuXG5cdFx0JChkb2N1bWVudCkub24oe1xuXHRcdFx0bW91c2Vtb3ZlIDogKGUpID0+IHtcblx0XHRcdFx0aWYgKCFkcmFnKSByZXR1cm47XG5cdFx0XHRcdGxldCBwID0gdGhpcy5nZXRQb3NpdGlvbihlLnBhZ2VZKTtcblx0XHRcdFx0aWYgKHAgPj0gMCAmJiBwIDw9IDEpIHtcblx0XHRcdFx0XHRpZih2aWRlby5tdXRlZCkge1xuXHRcdFx0XHRcdFx0dmlkZW8ubXV0ZWQgPSBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dmlkZW8udm9sdW1lID0gMSAtIHBcblx0XHRcdFx0fVxuXHRcdFx0fSxcblxuXHRcdFx0bW91c2V1cCA6IChlKSA9PiB7XG5cdFx0XHRcdGRyYWcgPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50O1xuXHR9XG5cblxuXHRzZXQgdmFsdWUgKHZhbHVlKSB7XG5cdFx0dGhpcy5pY29uLmljb25OYW1lID0gdGhpcy5wbGF5ZXIuY2FsY1ZvbHVtZUljb24odmFsdWUpO1xuXG5cdFx0bGV0IHAgPSBNYXRoLnJvdW5kKHZhbHVlICogMTAwKS50b1N0cmluZygpICsgJyUnO1xuXHRcdHRoaXMuYWN0aXZlLmNzcygnaGVpZ2h0JywgcCk7XG5cdFx0dGhpcy5tYXJrZXIuY3NzKCdib3R0b20nLCBwKTtcblx0fVxuXG5cdHRvZ2dsZU11dGVkICgpIHtcblx0XHRjb25zdCB7IHZpZGVvIH0gPSB0aGlzLnBsYXllcjtcblxuXHRcdHZpZGVvLm11dGVkID0gIXZpZGVvLm11dGVkO1xuXHR9XG5cblx0Z2V0UG9zaXRpb24gKHkpIHtcblx0XHRyZXR1cm4gKHkgLSB0aGlzLmxpbmUub2Zmc2V0KCkudG9wKSAvIHRoaXMubGluZS5oZWlnaHQoKTtcblx0fVxuXG5cdG9uQ2xpY2sgKGUpIHtcblx0XHRzdXBlci5vbkNsaWNrKGUpO1xuXHRcdHRoaXMudG9nZ2xlTXV0ZWQoKTtcblx0fVxuXG5cdG9uUGxheWVySW5pdGVkKCkge1xuXHRcdHRoaXMudmFsdWUgPSB0aGlzLnBsYXllci52aWRlby5kZWZhdWx0Vm9sdW1lO1xuXHR9XG5cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdWb2x1bWVDb250cm9sJywgVm9sdW1lQ29udHJvbCk7XG5Db250cm9sLnJlZ2lzdGVyQ29udHJvbCgndm9sdW1lJywgVm9sdW1lQ29udHJvbCk7XG5leHBvcnQgZGVmYXVsdCBWb2x1bWVDb250cm9sO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvVm9sdW1lQ29udHJvbC5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgQ29udHJvbERyb3Bkb3duLmpzXG4gKi9cblxuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9Db250cm9sJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuXG4vKipcbiAqIEBjbGFzcyBDb250cm9sRHJvcGRvd25cbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEBwcm9wZXJ0eSB7alF1ZXJ5fSBkcm9wZG93bkNvbnRlbnQgQ29udGVudCBvZiBwb3B1cFxuICogQGV4dGVuZHMgQ29udHJvbFxuICovXG5jbGFzcyBDb250cm9sRHJvcGRvd24gZXh0ZW5kcyBDb250cm9sIHtcblxuXHRjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnM9e30pIHtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXHRcdHRoaXMuZWxlbWVudC5vbignbW91c2VlbnRlcicsICgpID0+ICF0aGlzLmRpc2FibGUgJiYgdGhpcy5kcm9wZG93bkNvbnRlbnQuc2hvdygpKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ21vdXNlbGVhdmUnLCAoKSA9PiB0aGlzLmRyb3Bkb3duQ29udGVudC5oaWRlKCkpO1xuXHR9XG5cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdHN1cGVyLmNyZWF0ZUVsZW1lbnQoKTtcblx0XHR0aGlzLmRyb3Bkb3duQ29udGVudCA9ICQoJzxkaXYgLz4nKS5hZGRDbGFzcygnY29udHJvbC1kcm9wZG93bl9fY29udGVudCcpO1xuXHRcdHRoaXMuZWxlbWVudC5hcHBlbmQodGhpcy5kcm9wZG93bkNvbnRlbnQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0YnVpbGRDU1NDbGFzcygpIHtcblx0XHRyZXR1cm4gYGNvbnRyb2wtZHJvcGRvd24gJHtzdXBlci5idWlsZENTU0NsYXNzKCl9YFxuXHR9XG5cblx0X29uQ2xpY2soZSkge1xuXHRcdGlmKCQoZS50YXJnZXQpLmNsb3Nlc3QodGhpcy5kcm9wZG93bkNvbnRlbnQpLmxlbmd0aCA+IDApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRzdXBlci5fb25DbGljayhlKTtcblx0fVxuXG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnQ29udHJvbERyb3Bkb3duJywgQ29udHJvbERyb3Bkb3duKTtcbkNvbnRyb2wucmVnaXN0ZXJDb250cm9sKCdkcm9wZG93bicsIENvbnRyb2xEcm9wZG93bik7XG5leHBvcnQgZGVmYXVsdCBDb250cm9sRHJvcGRvd247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9Db250cm9sRHJvcGRvd24uanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIFRpbWVsaW5lQ29udHJvbC5qc1xuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL0NvbXBvbmVudCc7XG5pbXBvcnQgQ29udHJvbCBmcm9tICcuLi9Db250cm9sJztcbmltcG9ydCBDb250cm9sVGV4dCBmcm9tICcuLi9Db250cm9sVGV4dCc7XG5pbXBvcnQgQnVmZmVyZWRSYW5nZXMgZnJvbSAnLi9CdWZmZXJlZFJhbmdlcyc7XG5pbXBvcnQgTWFya2VyIGZyb20gJy4vTWFya2VyJztcbmltcG9ydCB7IHNlY29uZHNUb1RpbWUgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbi8qKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQGNsYXNzIFRpbWVsaW5lQ29udHJvbFxuICogQHByb3BlcnR5IHtDb250cm9sVGV4dH0gY3VycmVudFRpbWUgQ3VycmVudCB0aW1lJ3MgdGV4dFxuICogQHByb3BlcnR5IHtDb250cm9sVGV4dH0gdG90YWxUaW1lIFRvdGFsIHRpbWVcbiAqIEBwcm9wZXJ0eSB7alF1ZXJ5fSBsaW5lXG4gKiBAZXh0ZW5kcyBDb250cm9sXG4gKi9cbmNsYXNzIFRpbWVsaW5lQ29udHJvbCBleHRlbmRzIENvbnRyb2wge1xuXG5cdGNvbnN0cnVjdG9yIChwbGF5ZXIsIG9wdGlvbnM9e30pIHtcblx0XHRvcHRpb25zID0gJC5leHRlbmQoe30sIHtcblx0XHRcdG5hbWUgOiAndGltZWxpbmUnLFxuXHRcdFx0Y2xhc3NOYW1lIDogJ3RpbWVsaW5lIHRpbWVsaW5lLWNvbnRhaW5lcidcblx0XHR9LCBvcHRpb25zKTtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXG5cblx0XHR0aGlzLm1hcmtlci5lbGVtZW50Lm9uKCdsZXBsYXllcl9tb3VzZW1vdmUnLCB0aGlzLl9vbk1hcmtlck1vdXNlbW92ZS5iaW5kKHRoaXMpKTtcblxuXHRcdHRoaXMubWFya2VyLmVsZW1lbnQub24oJ2xlcGxheWVyX21vdXNlZG93bicsIHRoaXMuX29uTWFya2VyTW91c2Vkb3duLmJpbmQodGhpcykpO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ3NlY3Rpb25zaW5pdCcsIHRoaXMub25TZWN0aW9uc0luaXQuYmluZCh0aGlzKSk7XG5cblx0XHR0aGlzLnBsYXllci5vbigndGltZXVwZGF0ZScsIHRoaXMuX29uVGltZVVwZGF0ZS5iaW5kKHRoaXMpKTtcblxuXHRcdHRoaXMucGxheWVyLm9uKCd0aW1ldXBkYXRlbG9hZCcsIHRoaXMuX29uVGltZVVwZGF0ZS5iaW5kKHRoaXMpKVxuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ2R1cmF0aW9uY2hhbmdlJywgdGhpcy5fb25EdXJhdGlvbkNoYW5nZS5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdF9vbk1hcmtlck1vdXNlZG93bihlKSB7XG5cdFx0dGhpcy5tYXJrZXJTaGFkb3cuZWxlbWVudC5oaWRlKCk7XG5cdH1cblxuXHRfb25NYXJrZXJNb3VzZW1vdmUoZSwgZGF0YSkge1xuXHRcdGNvbnN0IHggPSBkYXRhLng7XG5cdFx0Y29uc3QgcCA9IHRoaXMuZ2V0UG9zaXRpb24oeCk7XG5cdFx0Y29uc3QgdmlkZW8gPSB0aGlzLnBsYXllci52aWRlbztcblx0XHRpZiAocCA+IDAgJiYgcCA8IDEpIHtcblx0XHRcdHRoaXMubWFya2VyLm1hcmtlclRpbWVcblx0XHRcdFx0LnNob3coKVxuXHRcdFx0XHQuaHRtbChzZWNvbmRzVG9UaW1lKHZpZGVvLmR1cmF0aW9uICogcCkpO1xuXHRcdFx0dmlkZW8uY3VycmVudFRpbWUgPSB2aWRlby5kdXJhdGlvbiAqIHBcblx0XHR9XG5cdH1cblxuXHRfb25UaW1lVXBkYXRlKGUsIGRhdGEpIHtcblx0XHRjb25zdCBkdXJhdGlvbiA9IHRoaXMucGxheWVyLnZpZGVvLmR1cmF0aW9uO1xuXHRcdGxldCBjdXJyZW50VGltZSA9IHRoaXMucGxheWVyLmN1cnJlbnRUaW1lO1xuXHRcdGlmKGRhdGEgJiYgZGF0YS5jdXJyZW50VGltZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRjdXJyZW50VGltZSA9IGRhdGEuY3VycmVudFRpbWU7XG5cdFx0fVxuXHRcdGxldCBwZXJjZW50ID0gY3VycmVudFRpbWUgLyBkdXJhdGlvbjtcblxuXHRcdGlmKGlzTmFOKGR1cmF0aW9uKSAmJiBjdXJyZW50VGltZSA9PT0gMCkgcGVyY2VudCA9IDA7XG5cblx0XHR0aGlzLm1vdmUoeyBwZXJjZW50LCBjdXJyZW50VGltZSB9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0c3VwZXIuY3JlYXRlRWxlbWVudCgpO1xuXHRcdGxldCB2aWRlbyA9IHRoaXMucGxheWVyLnZpZGVvO1xuXG5cdFx0dGhpcy5kcmFnID0gZmFsc2U7XG5cblx0XHQvLyBDcmVhdGUgbGFiZWxzXG5cdFx0dGhpcy5jdXJyZW50VGltZSA9IG5ldyBDb250cm9sVGV4dCh0aGlzLnBsYXllciwgeyBjbGFzc05hbWUgOiAndGltZS1jdXJyZW50JyB9KTtcblx0XHR0aGlzLmN1cnJlbnRUaW1lLnRleHQgPSAnMDA6MDAnO1xuXHRcdHRoaXMudG90YWxUaW1lID0gbmV3IENvbnRyb2xUZXh0KHRoaXMucGxheWVyLCB7Y2xhc3NOYW1lIDogJ3RpbWUtdG90YWwnIH0pO1xuXG5cdFx0Ly8gQ3JlYXRlIGxpbmUgd2l0aCBtYXJrZXJzIGFuZCBwbGF5ZWQgcmFuZ2VcblxuXHRcdHRoaXMubWFya2VyID0gbmV3IE1hcmtlcih0aGlzLnBsYXllciwge1xuXHRcdFx0ZHJhZyA6IHRydWVcblx0XHR9KTtcblxuXHRcdHRoaXMubWFya2VyU2hhZG93ID0gbmV3IE1hcmtlcih0aGlzLnBsYXllciwge1xuXHRcdFx0Y2xhc3NOYW1lIDogJ3NoYWRvdydcblx0XHR9KTtcblx0XHR0aGlzLm1hcmtlclNoYWRvdy5lbGVtZW50LmhpZGUoKTtcblxuXG5cdFx0Ly8gUGxheWVkIHJhbmdlc1xuXHRcdHRoaXMucGxheWVkUmFuZ2VzID0gJCgnPGRpdiAvPicpLmFkZENsYXNzKCd0aW1lLXBsYXllZCcpO1xuXG5cblx0XHQvLyBCdWZmZXJlZCByYW5nZXNcblx0XHR0aGlzLmJ1ZmZlcmVkUmFuZ2VzID0gbmV3IEJ1ZmZlcmVkUmFuZ2VzKHRoaXMucGxheWVyKS5lbGVtZW50O1xuXG5cdFx0dGhpcy5saW5lID0gJCgnPGRpdiAvPicpXG5cdFx0XHQuYWRkQ2xhc3MoJ3RpbWVsaW5lJylcblx0XHRcdC5hcHBlbmQodGhpcy5tYXJrZXIuZWxlbWVudClcblx0XHRcdC5hcHBlbmQodGhpcy5tYXJrZXJTaGFkb3cuZWxlbWVudClcblx0XHRcdC5hcHBlbmQodGhpcy5wbGF5ZWRSYW5nZXMpXG5cdFx0XHQuYXBwZW5kKHRoaXMuYnVmZmVyZWRSYW5nZXMpXG5cdFx0XHQub24oe1xuXHRcdFx0XHRtb3VzZW1vdmUgOiAoZSkgPT4ge1xuXHRcdFx0XHRcdGlmICh0aGlzLm1hcmtlci5kcmFnKSByZXR1cm47XG5cblx0XHRcdFx0XHRsZXQgcCA9IHRoaXMuZ2V0UG9zaXRpb24oZS5wYWdlWCk7XG5cdFx0XHRcdFx0aWYgKHAgPiAwICYmIHAgPCAxKSB7XG5cdFx0XHRcdFx0XHR0aGlzLm1hcmtlclNoYWRvdy5lbGVtZW50XG5cdFx0XHRcdFx0XHRcdC5zaG93KClcblx0XHRcdFx0XHRcdFx0LmNzcygnbGVmdCcsIHAgKiAxMDAgKyAnJScpO1xuXHRcdFx0XHRcdFx0dGhpcy5tYXJrZXJTaGFkb3dcblx0XHRcdFx0XHRcdFx0Lm1hcmtlclRpbWVcblx0XHRcdFx0XHRcdFx0LnNob3coKVxuXHRcdFx0XHRcdFx0XHQuaHRtbChzZWNvbmRzVG9UaW1lKHZpZGVvLmR1cmF0aW9uICogcCkpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aGlzLm1hcmtlclNoYWRvdy5lbGVtZW50LmhpZGUoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0bW91c2VsZWF2ZSA6IChlKSA9PiB7XG5cdFx0XHRcdFx0aWYgKHRoaXMuZHJhZykgcmV0dXJuO1xuXHRcdFx0XHRcdHRoaXMubWFya2VyU2hhZG93LmVsZW1lbnQuaGlkZSgpXG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0bW91c2Vkb3duIDogKGUpID0+IHtcblx0XHRcdFx0fSxcblxuXHRcdFx0XHRjbGljayA6IHRoaXMuX29uTGluZUNsaWNrLmJpbmQodGhpcyksXG5cblx0XHRcdFx0dG91Y2htb3ZlIDogKGUpID0+IHtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHR0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoJ3RpbWVsaW5lLWNvbnRhaW5lcicpXG5cdFx0XHQuYXBwZW5kKCQoJzxkaXYgLz4nKVxuXHRcdFx0XHQuYWRkQ2xhc3MoJ3RpbWVsaW5lLXN1YmNvbnRhaW5lcicpXG5cdFx0XHRcdC5hcHBlbmQodGhpcy5jdXJyZW50VGltZS5lbGVtZW50KVxuXHRcdFx0XHQuYXBwZW5kKHRoaXMubGluZSlcblx0XHRcdFx0LmFwcGVuZCh0aGlzLnRvdGFsVGltZS5lbGVtZW50KSk7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRfb25DbGljayhlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHR9XG5cblx0X29uTGluZUNsaWNrKGUpIHtcblx0XHRpZiAoZS53aGljaCAhPT0gMSkgcmV0dXJuO1xuXHRcdGlmICh0aGlzLmRyYWcpIHJldHVybjtcblx0XHRjb25zdCB2aWRlbyA9IHRoaXMucGxheWVyLnZpZGVvO1xuXHRcdHRoaXMubW92ZSh7IHBlcmNlbnQgOiB0aGlzLmdldFBvc2l0aW9uKGUucGFnZVgpfSk7XG5cdFx0dmlkZW8uY3VycmVudFRpbWUgPSAodmlkZW8uZHVyYXRpb24gKiB0aGlzLmdldFBvc2l0aW9uKGUucGFnZVgpKTtcblx0fVxuXG5cdG9uU2VjdGlvbnNJbml0KGUpIHtcblx0XHRjb25zdCBkdXJhdGlvbiA9IHRoaXMucGxheWVyLnZpZGVvLmR1cmF0aW9uO1xuXHRcdGlmKGlzTmFOKGR1cmF0aW9uKSkge1xuXHRcdFx0cmV0dXJuXG5cdFx0fVxuXHRcdGlmICh0aGlzLnBsYXllci5zZWN0aW9ucykge1xuXHRcdFx0dGhpcy51cGRhdGVTZWN0aW9uUmFuZ2VzKHRoaXMucGxheWVyLnNlY3Rpb25zLml0ZW1zKTtcblx0XHR9XG5cdH1cblxuXHR1cGRhdGVTZWN0aW9uUmFuZ2VzKGl0ZW1zKSB7XG5cdFx0aWYodGhpcy5zZWN0aW9ucyA9PSBudWxsIHx8IHRoaXMuc2VjdGlvbnMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHR0aGlzLnNlY3Rpb25zID0gdGhpcy5jcmVhdGVTZWN0aW9uUmFuZ2VzKGl0ZW1zKTtcblx0XHRcdHRoaXMubGluZS5hcHBlbmQodGhpcy5zZWN0aW9ucyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2VjdGlvbnMuaHRtbCh0aGlzLmNyZWF0ZVNlY3Rpb25SYW5nZXMoaXRlbXMpKTtcblx0XHR9XG5cdH1cblxuXHRjcmVhdGVTZWN0aW9uUmFuZ2VzKGl0ZW1zKSB7XG5cdFx0Y29uc3QgZHVyYXRpb24gPSB0aGlzLnBsYXllci52aWRlby5kdXJhdGlvbjtcblx0XHRsZXQgcmVzdWx0ID0gJCgnPGRpdiAvPicpLmFkZENsYXNzKCdsZXBsYXllci10aW1lbGluZS1zZWN0aW9ucycpO1xuXHRcdGl0ZW1zLmZvckVhY2goKHNlY3Rpb24pID0+IHtcblx0XHRcdGNvbnN0IGxlbmd0aCA9IChzZWN0aW9uLmVuZCAtIHNlY3Rpb24uYmVnaW4pO1xuXHRcdFx0Y29uc3QgaXRlbSA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0XHQuYWRkQ2xhc3MoJ2xlcGxheWVyLXRpbWVsaW5lLXNlY3Rpb24nKVxuXHRcdFx0XHQuY3NzKHtcblx0XHRcdFx0XHR3aWR0aCA6IGxlbmd0aCAvIGR1cmF0aW9uICogMTAwICsgJyUnLFxuXHRcdFx0XHRcdGxlZnQgOiBzZWN0aW9uLmJlZ2luIC8gZHVyYXRpb24gKiAxMDAgKyAnJSdcblx0XHRcdFx0fSk7XG5cdFx0XHRyZXN1bHQuYXBwZW5kKGl0ZW0pO1xuXHRcdH0pXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdGdldFBvc2l0aW9uICh4KSB7XG5cdFx0cmV0dXJuICh4IC0gdGhpcy5saW5lLm9mZnNldCgpLmxlZnQpIC8gdGhpcy5saW5lLndpZHRoKCk7XG5cdH1cblxuXHQvKipcblx0ICogTW92ZSBtYXJrZXIgb24gdGltZWxpbmUgb24gcGVyY2VudCBmcm9tIGFyZ3VtZW50LCBub3QgZnJvbSB2aWRlby5jdXJyZW50VGltZVxuXHQgKiBAcGFyYW0ge051bWJlcn0gcGVyY2VudCBUaGUgcGVyY2VudCB3aGljaCB5b3Ugd2FudCB0byBtb3ZlIG1hcmtlciBvbiB0aW1lbGluZVxuXHQgKi9cblx0bW92ZSAoeyBwZXJjZW50LCBjdXJyZW50VGltZSB9KSB7XG5cdFx0aWYoY3VycmVudFRpbWUgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0Y3VycmVudFRpbWUgPSB0aGlzLnBsYXllci52aWRlby5kdXJhdGlvbiAqIHBlcmNlbnQ7XG5cdFx0fVxuXG5cdFx0aWYoaXNOYU4oY3VycmVudFRpbWUpKSByZXR1cm47XG5cdFx0cGVyY2VudCA9IHBlcmNlbnQgKiAxMDA7XG5cdFx0dGhpcy5tYXJrZXIuZWxlbWVudC5jc3MoJ2xlZnQnLCBwZXJjZW50ICsgJyUnKTtcblx0XHR0aGlzLnBsYXllZFJhbmdlcy5jc3MoJ3dpZHRoJywgcGVyY2VudCArICclJyk7XG5cdFx0dGhpcy5jdXJyZW50VGltZS50ZXh0ID0gc2Vjb25kc1RvVGltZShjdXJyZW50VGltZSk7XG5cdH1cblxuXHR1cGRhdGVMYWJlbHMoKSB7XG5cdFx0Y29uc3QgdmlkZW8gPSB0aGlzLnBsYXllci52aWRlbztcblx0XHR0aGlzLnRvdGFsVGltZS50ZXh0ID0gc2Vjb25kc1RvVGltZSgwLCBNYXRoLmZsb29yKHZpZGVvLmR1cmF0aW9uIC8gMzYwMCkgPiAwKTtcblx0XHQvLyBjb25zdCB3aWR0aCA9IHRoaXMudG90YWxUaW1lLmVsZW1lbnQud2lkdGgoKTtcblxuXHRcdHRoaXMudG90YWxUaW1lLnRleHQgPSBzZWNvbmRzVG9UaW1lKHZpZGVvLmR1cmF0aW9uKTtcblx0XHR0aGlzLmN1cnJlbnRUaW1lLnRleHQgPSBzZWNvbmRzVG9UaW1lKHZpZGVvLmN1cnJlbnRUaW1lIHx8IDApO1xuXHRcdC8vIHRoaXMuY3VycmVudFRpbWUuZWxlbWVudC5jc3Moe1xuXHRcdC8vIFx0d2lkdGhcblx0XHQvLyB9KVxuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0b25QbGF5ZXJJbml0ZWQoZSkge1xuXHRcdHRoaXMudXBkYXRlTGFiZWxzKCk7XG5cdFx0aWYgKHRoaXMucGxheWVyLnNlY3Rpb25zKSB7XG5cdFx0XHR0aGlzLnVwZGF0ZVNlY3Rpb25SYW5nZXModGhpcy5wbGF5ZXIuc2VjdGlvbnMuaXRlbXMpO1xuXHRcdH1cblx0fVxuXG5cdF9pbml0V2F0Y2hCdWZmZXIgKCkge1xuXHRcdGNsZWFySW50ZXJ2YWwodGhpcy53YXRjaEJ1ZmZlckludGVydmFsKTtcblx0XHRsZXQgdmlkZW8gPSB0aGlzLnBsYXllci52aWRlbztcblx0XHRsZXQgdXBkYXRlUHJvZ3Jlc3NCYXIgPSAoKSA9PiB7XG5cdFx0XHRjb25zdCBFTkQgPSAxO1xuXHRcdFx0Y29uc3QgU1RBUlQgPSAwO1xuXHRcdFx0bGV0IHJlc3VsdCA9ICQoJycpO1xuXHRcdFx0dmlkZW8ubG9hZGVkLmZvckVhY2goaXRlbSA9PiB7XG5cdFx0XHRcdGxldCBkb21JdGVtID0gJCgnPGRpdiAvPicpLmFkZENsYXNzKCd0aW1lLWJ1ZmZlcmVkJyk7XG5cdFx0XHRcdGRvbUl0ZW0uY3NzKHtcblx0XHRcdFx0XHRsZWZ0IDogaXRlbVtTVEFSVF0gKiAxMDAgKyAnJScsXG5cdFx0XHRcdFx0d2lkdGggOiAoaXRlbVtFTkRdIC0gaXRlbVtTVEFSVF0pICogMTAwICsgJyUnXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRyZXN1bHQgPSByZXN1bHQuYWRkKGRvbUl0ZW0pO1xuXHRcdFx0fSk7XG5cdFx0XHR0aGlzLmJ1ZmZlcmVkLmh0bWwocmVzdWx0KTtcblx0XHRcdGlmICh2aWRlby5sb2FkZWQubGVuZ3RoICYmICgxIC0gdmlkZW8ubG9hZGVkU2l6ZSkgPD0gMC4wNSkge1xuXHRcdFx0XHRjbGVhckludGVydmFsKHRoaXMud2F0Y2hCdWZmZXJJbnRlcnZhbCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHRoaXMud2F0Y2hCdWZmZXJJbnRlcnZhbCA9IHNldEludGVydmFsKHVwZGF0ZVByb2dyZXNzQmFyLCA1MDApO1xuXHR9XG5cblx0LyoqXG5cdCAqIE9uIGR1cmF0aW9uY2hhbmdlIGV2ZW50IGhhbmRsZXJcblx0ICovXG5cdF9vbkR1cmF0aW9uQ2hhbmdlICgpIHtcblx0XHR0aGlzLnVwZGF0ZUxhYmVscygpO1xuXHRcdGlmICh0aGlzLnBsYXllci5zZWN0aW9ucykge1xuXHRcdFx0dGhpcy51cGRhdGVTZWN0aW9uUmFuZ2VzKHRoaXMucGxheWVyLnNlY3Rpb25zLml0ZW1zKTtcblx0XHR9XG5cdH1cblxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ1RpbWVsaW5lQ29udHJvbCcsIFRpbWVsaW5lQ29udHJvbCk7XG5Db250cm9sLnJlZ2lzdGVyQ29udHJvbCgndGltZWxpbmUnLCBUaW1lbGluZUNvbnRyb2wpO1xuZXhwb3J0IGRlZmF1bHQgVGltZWxpbmVDb250cm9sO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvVGltZWxpbmUvVGltZWxpbmVDb250cm9sLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBDb250cm9sVGV4dC5qc1xuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL0NvbnRyb2wnO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5cbi8qKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQGNsYXNzIENvbnRyb2xUZXh0XG4gKiBAZXhudGVkcyBDb250cm9sXG4gKi9cbmNsYXNzIENvbnRyb2xUZXh0IGV4dGVuZHMgQ29udHJvbCB7XG5cdGNvbnN0cnVjdG9yIChwbGF5ZXIsIG9wdGlvbnM9e30pIHtcblx0XHRvcHRpb25zID0gJC5leHRlbmQoe30sIHtcblx0XHRcdGNsYXNzTmFtZSA6ICcnXG5cdFx0fSwgb3B0aW9ucyk7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0c3VwZXIuY3JlYXRlRWxlbWVudCgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0YnVpbGRDU1NDbGFzcygpIHtcblx0XHRyZXR1cm4gYGNvbnRyb2wtdGV4dCAke3RoaXMub3B0aW9ucy5jbGFzc05hbWV9YDtcblx0fVxuXG5cblx0LyoqXG5cdCAqIFNldHRlciBvZiB0ZXh0IGZpZWxkXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG5cdCAqL1xuXG5cdHNldCB0ZXh0ICh2YWx1ZSkge1xuXHRcdHRoaXMuX3RleHQgPSB2YWx1ZTtcblx0XHR0aGlzLmVsZW1lbnQuaHRtbCh2YWx1ZSk7XG5cdH1cblxuXHRnZXQgdGV4dCAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3RleHRcblx0fVxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ0NvbnRyb2xUZXh0JywgQ29udHJvbFRleHQpO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ3RleHQnLCBDb250cm9sVGV4dCk7XG5leHBvcnQgZGVmYXVsdCBDb250cm9sVGV4dDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL0NvbnRyb2xUZXh0LmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBCdWZmZXJlZFJhbmdlcy5qc1xuICovXG5cbmltcG9ydCB7IHBlcmNlbnRpZnksIGNyZWF0ZUVsIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9Db21wb25lbnQnO1xuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBjbGFzcyBCdWZmZXJlZFJhbmdlc1xuICogQGV4dGVuZHMgQ29udHJvbFxuICovXG5cbmNsYXNzIEJ1ZmZlcmVkUmFuZ2VzIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ3Byb2dyZXNzJywgdGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5wbGF5ZXIub24oJ3NlZWtlZCcsIHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xuXHRcdHRoaXMucGxheWVyLm9uKCdsb2Fkc3RhcnQnLCB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0dGhpcy5yYW5nZSA9IGNyZWF0ZUVsKCdkaXYnLCB7XG5cdFx0XHRjbGFzc05hbWUgOiAnbGVwbGF5ZXItdGltZWxpbmUtYnVmZmVyZWRfX3JhbmdlJ1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudCA9IGNyZWF0ZUVsKCdkaXYnLCB7XG5cdFx0XHRjbGFzc05hbWUgOiAnbGVwbGF5ZXItdGltZWxpbmUtYnVmZmVyZWQnXG5cdFx0fSkuYXBwZW5kKHRoaXMucmFuZ2UpO1xuXHR9XG5cblxuXHR1cGRhdGUoKSB7XG5cdFx0Y29uc3QgYnVmZmVyZWQgPSB0aGlzLnBsYXllci52aWRlby5idWZmZXJlZDtcblx0XHRjb25zdCBkdXJhdGlvbiA9IHRoaXMucGxheWVyLnZpZGVvLmR1cmF0aW9uO1xuXHRcdGlmKGJ1ZmZlcmVkID09IG51bGwpIHJldHVybjtcblxuXHRcdGxldCBlbmQgPSAwO1xuXHRcdGlmIChidWZmZXJlZC5sZW5ndGggPiAwKSB7XG5cdFx0XHRlbmQgPSBidWZmZXJlZC5lbmQoYnVmZmVyZWQubGVuZ3RoIC0gMSk7XG5cdFx0fVxuXG5cdFx0bGV0IHdpZHRoID0gMDtcblx0XHRpZiAoZHVyYXRpb24gPiAwKSB7XG5cdFx0XHR3aWR0aCA9IHBlcmNlbnRpZnkoZW5kLCBkdXJhdGlvbikgKiAxMDAgKyAnJSdcblx0XHR9XG5cdFx0dGhpcy5yYW5nZS5jc3MoeyB3aWR0aCB9KVxuXHR9XG59XG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ0J1ZmZlcmVkUmFuZ2VzJywgQnVmZmVyZWRSYW5nZXMpO1xuZXhwb3J0IGRlZmF1bHQgQnVmZmVyZWRSYW5nZXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9UaW1lbGluZS9CdWZmZXJlZFJhbmdlcy5qcyIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL0NvbXBvbmVudCc7XG5cbmNsYXNzIE1hcmtlciBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucykge1xuXG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRkcmFnIDogZmFsc2UsXG5cdFx0XHRjbGFzc05hbWUgOiAnJ1xuXHRcdH0sIG9wdGlvbnMpO1xuXG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ21vdXNlZG93bicsIHRoaXMuX29uTW91c2Vkb3duLmJpbmQodGhpcykpO1xuXG5cdFx0JChkb2N1bWVudCkub24oe1xuXG5cdFx0XHRtb3VzZW1vdmUgOiAoZSkgPT4ge1xuXHRcdFx0XHRpZiAoIXRoaXMuZHJhZykgcmV0dXJuO1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQudHJpZ2dlcignbGVwbGF5ZXJfbW91c2Vtb3ZlJywgeyB4IDogZS5wYWdlWCB9KTtcblx0XHRcdH0sXG5cblx0XHRcdG1vdXNldXAgOiAoZSkgPT4ge1xuXHRcdFx0XHRpZiAoIXRoaXMuZHJhZykgcmV0dXJuO1xuXHRcdFx0XHR0aGlzLmRyYWcgPSBmYWxzZTtcblx0XHRcdFx0dGhpcy5tYXJrZXJUaW1lLmhpZGUoKTtcblx0XHRcdFx0dGhpcy5lbGVtZW50LnRyaWdnZXIoJ2xlcGxheWVyX21vdXNldXAnLCB7IHggOiBlLnBhZ2VYIH0pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0c2V0IGRyYWcodmFsdWUpIHtcblx0XHR0aGlzLl9kcmFnID0gdmFsdWU7XG5cdFx0dGhpcy5lbGVtZW50LnRvZ2dsZUNsYXNzKCd0aW1lLW1hcmtlci0tZHJhZycsIHZhbHVlKTtcblx0fVxuXG5cdGdldCBkcmFnKCkge1xuXHRcdHJldHVybiB0aGlzLl9kcmFnO1xuXHR9XG5cblx0X29uTW91c2Vkb3duKGUpIHtcblx0XHRpZiAoZS53aGljaCAhPT0gMSkgcmV0dXJuO1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRpZih0aGlzLm9wdGlvbnMuZHJhZykge1xuXHRcdFx0dGhpcy5kcmFnID0gdHJ1ZTtcblx0XHR9XG5cdFx0dGhpcy5lbGVtZW50LnRyaWdnZXIoJ2xlcGxheWVyX21vdXNlZG93bicpO1xuXHR9XG5cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHQvLyBNYXJrZXIgb2YgY3VycmVudCB0aW1lIG9uIHRpbWVsaW5lXG5cdFx0dGhpcy5tYXJrZXJUaW1lID0gJCgnPGRpdiAvPicpXG5cdFx0XHQuYWRkQ2xhc3MoJ3RpbWUnKVxuXHRcdFx0LmhpZGUoKTtcblxuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQgPSAkKCc8ZGl2IC8+Jylcblx0XHRcdC5hZGRDbGFzcyhgdGltZS1tYXJrZXIgJHt0aGlzLm9wdGlvbnMuY2xhc3NOYW1lfWApXG5cdFx0XHQuYXBwZW5kKHRoaXMubWFya2VyVGltZSlcblxuXHR9XG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnTWFya2VyJywgTWFya2VyKTtcbmV4cG9ydCBkZWZhdWx0IE1hcmtlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL1RpbWVsaW5lL01hcmtlci5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgU2VjdGlvbkNvbnRyb2wuanNcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL0NvbnRyb2wnO1xuaW1wb3J0IENvbnRyb2xDaGVja2JveCBmcm9tICcuL0NvbnRyb2xDaGVja2JveCc7XG5cbi8qKlxuICogQGNsYXNzIFNlY3Rpb25Db250cm9sXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmNoZWNrZWQ9dHJ1ZV1cbiAqIEBleHRlbmRzIENvbnRyb2xDaGVja2JveFxuICovXG5jbGFzcyBTZWN0aW9uQ29udHJvbCBleHRlbmRzIENvbnRyb2xDaGVja2JveCB7XG5cdGNvbnN0cnVjdG9yIChwbGF5ZXIsIG9wdGlvbnM9e30pIHtcblx0XHRvcHRpb25zID0gJC5leHRlbmQoe30sIHtcblx0XHRcdGljb25OYW1lIDogJ2xpc3QtdWwnLFxuXHRcdFx0Y2xhc3NOYW1lIDogJ3NlY3Rpb24nLFxuXHRcdFx0bmFtZSA6ICdzZWN0aW9uJyxcblx0XHRcdHRpdGxlIDogJ9Cf0L7QutCw0LfQsNGC0Ywv0YHQutGA0YvRgtGMINGB0LXQutGG0LjQuCcsXG5cdFx0XHRkaXNhYmxlIDogdHJ1ZVxuXHRcdH0sIG9wdGlvbnMpO1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cblx0XHR0aGlzLnBsYXllci5vbignc2VjdGlvbnNpbml0JywgdGhpcy5fb25TZWN0aW9uc0luaXQuYmluZCh0aGlzKSk7XG5cdH1cblxuXHRvbkNoZWNrZWQoZSwgZGF0YSkge1xuXHRcdHN1cGVyLm9uQ2hlY2tlZChlKTtcblx0XHR0aGlzLnBsYXllci50cmlnZ2VyKCdzZWN0aW9uc3RvZ2dsZScsIHtcblx0XHRcdGNoZWNrZWQgOiBkYXRhLmNoZWNrZWQsXG5cdFx0XHR2aWV3IDogdGhpcy5wbGF5ZXIudmlld1xuXHRcdH0pO1xuXHR9XG5cblx0X29uU2VjdGlvbnNJbml0KGUpIHtcblx0XHR0aGlzLm9wdGlvbnMuZGlzYWJsZSA9IHRoaXMuZGlzYWJsZSA9IGZhbHNlO1xuXHRcdHRoaXMuY2hlY2tlZCA9IHRydWU7XG5cdH1cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdTZWN0aW9uQ29udHJvbCcsIFNlY3Rpb25Db250cm9sKTtcbkNvbnRyb2wucmVnaXN0ZXJDb250cm9sKCdzZWN0aW9uJywgU2VjdGlvbkNvbnRyb2wpO1xuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbkNvbnRyb2w7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9TZWN0aW9uQ29udHJvbC5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgY29udHJvbC1jaGVja2JveC5qc1xuICovXG5cblxuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9Db250cm9sJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuY2hlY2tlZD1mYWxzZV1cbiAqIEBjbGFzcyBDb250cm9sQ2hlY2tib3ggVG9nZ2FibGUgY29udHJvbFxuICovXG5jbGFzcyBDb250cm9sQ2hlY2tib3ggZXh0ZW5kcyBDb250cm9sIHtcblxuXHRjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnM9e30pIHtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXHRcdHRoaXMuY2hlY2tlZCA9IHRoaXMub3B0aW9ucy5jaGVja2VkIHx8IGZhbHNlO1xuXHRcdHRoaXMuZWxlbWVudC5vbignbGVwbGF5ZXJfY2hlY2tlZCcsIHRoaXMub25DaGVja2VkLmJpbmQodGhpcykpXG5cdH1cblxuXG5cdC8qKlxuXHQgKiBTZXR0ZXIgZm9yIGNoZWNrZWQgcHJvcGVydHlcblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IHZhbFxuXHQgKi9cblx0c2V0IGNoZWNrZWQgKHZhbCkge1xuXHRcdGlmICh0aGlzLmRpc2FibGUpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dmFsID0gISF2YWw7XG5cdFx0dGhpcy5fY2hlY2tlZCA9IHZhbFxuXHRcdHRoaXMuZWxlbWVudC50b2dnbGVDbGFzcygnY29udHJvbC1jaGVja2JveC0tY2hlY2tlZCcsIHZhbCk7XG5cdFx0dGhpcy5lbGVtZW50LnRyaWdnZXIoJ2xlcGxheWVyX2NoZWNrZWQnLCB7IGNoZWNrZWQgOiB2YWwgfSk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0dGVyIGZvciBjaGVja2VkIHByb3Blcnlcblx0ICogQHB1YmxpY1xuXHQgKiBAcmV0dXJuIHtib29sZWFufVxuXHQgKi9cblx0Z2V0IGNoZWNrZWQgKCkge1xuXHRcdHJldHVybiB0aGlzLl9jaGVja2VkO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0b25DbGljayAoZSkge1xuXHRcdHN1cGVyLm9uQ2xpY2soZSk7XG5cdFx0dGhpcy5jaGVja2VkID0gIXRoaXMuY2hlY2tlZDtcblx0fVxuXG5cdC8qKlxuXHQgKiBPbiBjaGVja2VkIGV2ZW50IGhhbmRsZXJcblx0ICpcblx0ICogQHBhcmFtIHtFdmVudH0gZVxuXHQgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuXHQgKi9cblx0b25DaGVja2VkKGUsIGRhdGEpIHtcblxuXHR9XG5cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRidWlsZENTU0NsYXNzKCkge1xuXHRcdHJldHVybiBgY29udHJvbC1jaGVja2JveCAke3N1cGVyLmJ1aWxkQ1NTQ2xhc3MoKX1gXG5cdH1cblxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ0NvbnRyb2xDaGVja2JveCcsIENvbnRyb2xDaGVja2JveCk7XG5Db250cm9sLnJlZ2lzdGVyQ29udHJvbCgnY2hlY2tib3gnLCBDb250cm9sQ2hlY2tib3gpO1xuZXhwb3J0IGRlZmF1bHQgQ29udHJvbENoZWNrYm94O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvQ29udHJvbENoZWNrYm94LmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBGdWxsc2NyZWVuQ29udHJvbC5qc1xuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCBDb250cm9sIGZyb20gJy4vQ29udHJvbCc7XG5cbi8qKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQGNsYXNzIEZ1bGxzY3JlZW5Db250cm9sXG4gKiBAZXh0ZW5kcyBDb250cm9sXG4gKi9cbmNsYXNzIEZ1bGxzY3JlZW5Db250cm9sIGV4dGVuZHMgQ29udHJvbCB7XG5cdGNvbnN0cnVjdG9yIChwbGF5ZXIsIG9wdGlvbnM9e30pIHtcblx0XHRvcHRpb25zID0gJC5leHRlbmQoe30sIHtcblx0XHRcdGljb25OYW1lIDogJ2Fycm93cy1hbHQnLFxuXHRcdFx0Y2xhc3NOYW1lIDogJ2Z1bGxzY3JlZW4nLFxuXHRcdFx0dGl0bGUgOiAn0KDQsNC30LLQtdGA0L3Rg9GC0Ywv0YHQstC10YDQvdGD0YLRjCDQvdCwINC/0L7Qu9C90YvQuSDRjdC60YDQsNC9Jyxcblx0XHRcdG5hbWUgOiAnZnVsbHNjcmVlbidcblx0XHR9LCBvcHRpb25zKTtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0b25DbGljayhlKSB7XG5cdFx0c3VwZXIub25DbGljayhlKVxuXHRcdHRoaXMucGxheWVyLnRvZ2dsZUZ1bGxzY3JlZW4oKTtcblx0fVxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ0Z1bGxzY3JlZW5Db250cm9sJywgRnVsbHNjcmVlbkNvbnRyb2wpO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ2Z1bGxzY3JlZW4nLCBGdWxsc2NyZWVuQ29udHJvbCk7XG5leHBvcnQgZGVmYXVsdCBGdWxsc2NyZWVuQ29udHJvbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL0Z1bGxzY3JlZW5Db250cm9sLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBSYXRlQ29udHJvbC5qc1xuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCBDb250cm9sIGZyb20gJy4vQ29udHJvbCc7XG5pbXBvcnQgQ29udHJvbFRleHQgZnJvbSAnLi9Db250cm9sVGV4dCc7XG5pbXBvcnQgQ29va2llIGZyb20gJy4uL3V0aWxzL2Nvb2tpZSc7XG5cbi8qKlxuICogQGNsYXNzIFJhdGVDb250cm9sXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAcHJvcGVydHkge0NvbnRyb2x9IGRvd25Db250cm9sICBEb3duIHJhdGUgY29udHJvbFxuICogQHByb3BlcnR5IHtDb250cm9sfSB1cENvbnRyb2wgIFVwIHJhdGUgY29udHJvbFxuICogQHByb3BlcnR5IHtDb250cm9sVGV4dH0gY3VycmVudFJhdGUgQ29udHJvbCBvZiBjdXVyZW50IHJhdGVcbiAqIEBleHRlbmRzIENvbnRyb2xcbiAqL1xuY2xhc3MgUmF0ZUNvbnRyb2wgZXh0ZW5kcyBDb250cm9sIHtcblx0Y29uc3RydWN0b3IgKHBsYXllciwgb3B0aW9ucz17fSkge1xuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0Y2xhc3NOYW1lIDogJ2NvbnRyb2wtY29udGFpbmVyJ1xuXHRcdH0sIG9wdGlvbnMpO1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cblx0XHR0aGlzLnBsYXllci5vbigncmF0ZWNoYW5nZScsICgpID0+IHtcblx0XHRcdHRoaXMudXBkYXRlKCk7XG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdHN1cGVyLmNyZWF0ZUVsZW1lbnQoKTtcblx0XHRjb25zdCB2aWRlbyA9IHRoaXMucGxheWVyLnZpZGVvO1xuXG5cdFx0dGhpcy5kb3duQ29udHJvbCA9IG5ldyBDb250cm9sKHRoaXMucGxheWVyLCB7XG5cdFx0XHRjbGFzc05hbWUgOiAncmF0ZS1kb3duJyxcblx0XHRcdG5hbWUgOiAncmF0ZS1kb3duJyxcblx0XHRcdGljb25OYW1lIDogJ2JhY2t3YXJkJyxcblx0XHRcdGNvbGxlY3Rpb24gOiB0aGlzLm9wdGlvbnMuY29sbGVjdGlvbixcblx0XHRcdHRpdGxlIDogJ9Cj0LzQtdC90YzRiNC40YLRjCDRgdC60L7RgNC+0YHRgtGMINC/0YDQvtC40LPRgNGL0LLQsNC90LjRjycsXG5cdFx0XHRvbkNsaWNrIDogZnVuY3Rpb24oZSkge1xuXHRcdFx0XHR2aWRlby5kZWNyZWFzZVJhdGUoKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHRoaXMudXBDb250cm9sID0gbmV3IENvbnRyb2wodGhpcy5wbGF5ZXIsIHtcblx0XHRcdGNsYXNzTmFtZSA6ICdyYXRlLXVwJyxcblx0XHRcdG5hbWUgOiAncmF0ZS11cCcsXG5cdFx0XHRpY29uTmFtZSA6ICdmb3J3YXJkJyxcblx0XHRcdGNvbGxlY3Rpb24gOiB0aGlzLm9wdGlvbnMuY29sbGVjdGlvbixcblx0XHRcdHRpdGxlIDogJ9Cj0LLQtdC70LjRh9C40YLRjCDRgdC60L7RgNC+0YHRgtGMINC/0YDQvtC40LPRgNGL0LLQsNC90LjRjycsXG5cdFx0XHRvbkNsaWNrIDogZnVuY3Rpb24oZSkge1xuXHRcdFx0XHR2aWRlby5pbmNyZWFzZVJhdGUoKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHRoaXMuY3VycmVudFJhdGUgPSBuZXcgQ29udHJvbFRleHQodGhpcy5wbGF5ZXIsIHtcblx0XHRcdGNsYXNzTmFtZSA6ICdyYXRlLWN1cnJlbnQnLFxuXHRcdFx0b25DbGljayA6IGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0dmlkZW8ucmF0ZSA9IHRoaXMucGxheWVyLm9wdGlvbnMucmF0ZS5kZWZhdWx0XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHR0aGlzLmVsZW1lbnRcblx0XHRcdC5hcHBlbmQodGhpcy5kb3duQ29udHJvbC5lbGVtZW50KVxuXHRcdFx0LmFwcGVuZCh0aGlzLmN1cnJlbnRSYXRlLmVsZW1lbnQpXG5cdFx0XHQuYXBwZW5kKHRoaXMudXBDb250cm9sLmVsZW1lbnQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0YnVpbGRDU1NDbGFzcygpIHtcblx0XHRyZXR1cm4gdGhpcy5vcHRpb25zLmNsYXNzTmFtZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdG9uUGxheWVySW5pdGVkKCkge1xuXHRcdHRoaXMudXBkYXRlKCk7XG5cdH1cblxuXHQvKipcblx0ICpcblx0ICovXG5cdF9vbkNsaWNrKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0fVxuXG5cdHVwZGF0ZSh2YWx1ZSkge1xuXHRcdGNvbnN0IHZpZGVvID0gdGhpcy5wbGF5ZXIudmlkZW87XG5cblx0XHR2YWx1ZSA9IHZhbHVlIHx8IHZpZGVvLnJhdGU7XG5cdFx0dmFsdWUgPSBwYXJzZUZsb2F0KHZhbHVlKVxuXHRcdFx0LnRvRml4ZWQoMilcblx0XHRcdC50b1N0cmluZygpXG5cdFx0XHQucmVwbGFjZSgvLC9nLCAnLicpO1xuXHRcdHRoaXMuY3VycmVudFJhdGUudGV4dCA9ICfDlycgKyB2YWx1ZTtcblxuXHRcdGlmKHRoaXMuZGlzYWJsZSkgcmV0dXJuO1xuXG5cdFx0aWYodmlkZW8ucmF0ZSA8PSB2aWRlby5yYXRlTWluKSB7XG5cdFx0XHR0aGlzLmRvd25Db250cm9sLmRpc2FibGUgPSB0cnVlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmRvd25Db250cm9sLmRpc2FibGUgPSBmYWxzZTtcblx0XHR9XG5cblx0XHRpZih2aWRlby5yYXRlID49IHZpZGVvLnJhdGVNYXgpIHtcblx0XHRcdHRoaXMudXBDb250cm9sLmRpc2FibGUgPSB0cnVlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnVwQ29udHJvbC5kaXNhYmxlID0gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblx0c2V0IGRpc2FibGUodmFsdWUpIHtcblx0XHR0aGlzLl9kaXNhYmxlID0gdmFsdWU7XG5cdFx0dGhpcy5kb3duQ29udHJvbC5kaXNhYmxlID0gdmFsdWU7XG5cdFx0dGhpcy51cENvbnRyb2wuZGlzYWJsZSA9IHZhbHVlO1xuXHR9XG5cblx0aW5pdCAoKSB7XG5cdFx0bGV0IHJhdGUgPSBDb29raWUuZ2V0KCdyYXRlJywgdGhpcy5wbGF5ZXIub3B0aW9ucy5yYXRlLmRlZmF1bHQpO1xuXHRcdHRoaXMuc2hvdyhyYXRlKTtcblx0fVxuXG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnUmF0ZUNvbnRyb2wnLCBSYXRlQ29udHJvbCk7XG5Db250cm9sLnJlZ2lzdGVyQ29udHJvbCgncmF0ZScsIFJhdGVDb250cm9sKTtcbmV4cG9ydCBkZWZhdWx0IFJhdGVDb250cm9sO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvUmF0ZUNvbnRyb2wuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIEJhY2t3YXJkQ29udHJvbC5qc1xuICpcbiAqIEJhY2t3YXJkIGNvbnRyb2xcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL0NvbnRyb2wnO1xuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gT3B0aW9uc1xuICogQGNsYXNzIEJhY2t3YXJkQ29udHJvbFxuICogQGV4dGVuZHMgQ29udHJvbFxuICovXG5jbGFzcyBCYWNrd2FyZENvbnRyb2wgZXh0ZW5kcyBDb250cm9sIHtcblx0Y29uc3RydWN0b3IgKHBsYXllciwgb3B0aW9ucz17fSkge1xuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0aWNvbk5hbWUgOiAndW5kbycsXG5cdFx0XHRjbGFzc05hbWUgOiAnYmFja3dhcmQnLFxuXHRcdFx0bmFtZSA6ICdiYWNrd2FyZCcsXG5cdFx0XHR0aXRsZSA6IGDQntGC0LzQvtGC0LDRgtGMINC90LDQt9Cw0LQg0L3QsCAke3BsYXllci5vcHRpb25zLnBsYXliYWNrLnN0ZXAubWVkaXVtfSDRgdC10LrRg9C90LRgLFxuXHRcdFx0ZGlzYWJsZSA6IHRydWVcblx0XHR9LCBvcHRpb25zKTtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ2ZpcnN0cGxheScsICgpID0+IHRoaXMuZGlzYWJsZSA9IGZhbHNlKVxuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0b25DbGljayhlKSB7XG5cdFx0c3VwZXIub25DbGljayhlKTtcblx0XHR0aGlzLnBsYXllci52aWRlby5jdXJyZW50VGltZSAtPSB0aGlzLnBsYXllci5vcHRpb25zLnBsYXliYWNrLnN0ZXAubWVkaXVtO1xuXHRcdHRoaXMucGxheWVyLnNwbGFzaEljb24uc2hvdygndW5kbycpO1xuXHR9XG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnQmFja3dhcmRDb250cm9sJywgQmFja3dhcmRDb250cm9sKTtcbkNvbnRyb2wucmVnaXN0ZXJDb250cm9sKCdiYWNrd2FyZCcsIEJhY2t3YXJkQ29udHJvbCk7XG5leHBvcnQgZGVmYXVsdCBCYWNrd2FyZENvbnRyb2w7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9CYWNrd2FyZENvbnRyb2wuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIFNvdXJjZUNvbnRyb2wuanNcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL0NvbnRyb2wnO1xuaW1wb3J0IENvbnRyb2xDb250YWluZXIgZnJvbSAnLi9Db250cm9sQ29udGFpbmVyJztcblxuXG4vKipcbiAqIEBjbGFzcyBTb3VyY2VDb250cm9sXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAZXh0ZW5kcyBDb250cm9sQ29uYWluZXJcbiAqL1xuY2xhc3MgU291cmNlQ29udHJvbCBleHRlbmRzIENvbnRyb2xDb250YWluZXIge1xuXHQvLyBUT0RPOiDQlNC10LvQsNGC0YwgZGlzYWJsZS9lbmFibGUg0L/QvtGB0LvQtSBvcHRpb25zIGluaXRcblx0Y29uc3RydWN0b3IgKHBsYXllciwgb3B0aW9ucz17fSkge1xuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0bmFtZSA6ICdzb3VyY2UnLFxuXHRcdFx0aWNvbk5hbWUgOiAnYnVsbHNleWUnLFxuXHRcdFx0dGl0bGUgOiAn0JrQsNGH0LXRgdGC0LLQvicsXG5cdFx0XHRjbGFzc05hbWUgOiAnc291cmNlLWNvbnRyb2wnLFxuXHRcdFx0ZGlzYWJsZSA6IHRydWVcblx0XHR9LCBvcHRpb25zKTtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ3BsYXlpbmcnLCB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLnBsYXllci5vbigncXVhbGl0eWNoYW5nZScsIHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xuXHR9XG5cblx0b25JdGVtQ2xpY2soZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblxuXHRcdGNvbnN0IGl0ZW0gPSAkKGUudGFyZ2V0KTtcblx0XHRjb25zdCB2aWRlbyA9IHRoaXMucGxheWVyLnZpZGVvO1xuXHRcdHZpZGVvLnBsYXliYWNrUXVhbGl0eSA9IGl0ZW0uZGF0YSgnbmFtZScpO1xuXG5cdFx0dGhpcy5kcm9wZG93bkNvbnRlbnQuaGlkZSgpO1xuXG5cdH1cblxuXHRvblBsYXllckluaXRlZChlLCBkYXRhKSB7XG5cdFx0dGhpcy51cGRhdGUoKTtcblx0fVxuXG5cdGdldERhdGEoKSB7XG5cdFx0cmV0dXJuIHRoaXMucGxheWVyLnZpZGVvLmdldEF2YWlsYWJsZVF1YWxpdHlMZXZlbHMoKTtcblx0fVxuXG5cdGdldEN1cnJlbnRWYWx1ZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5wbGF5ZXIudmlkZW8ucGxheWJhY2tRdWFsaXR5O1xuXHR9XG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnU291cmNlQ29udHJvbCcsIFNvdXJjZUNvbnRyb2wpO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ3NvdXJjZScsIFNvdXJjZUNvbnRyb2wpO1xuZXhwb3J0IGRlZmF1bHQgU291cmNlQ29udHJvbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL1NvdXJjZUNvbnRyb2wuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIENvbnRyb2xDb250YWluZXIuanNcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL0NvbnRyb2wnO1xuaW1wb3J0IENvbnRyb2xEcm9wZG93biBmcm9tICcuL0NvbnRyb2xEcm9wZG93bic7XG5cbi8qKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQGNsYXNzIENvbnRyb2xDb250YWluZXJcbiAqIEBleHRlbmRzIENvbnRyb2xEcm9wZG93blxuICovXG5jbGFzcyBDb250cm9sQ29udGFpbmVyIGV4dGVuZHMgQ29udHJvbERyb3Bkb3duIHtcblxuXHRjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXHRcdHRoaXMuX2FjdGl2ZSA9IG51bGw7XG5cdFx0LyoqXG5cdFx0ICogTGlzdCBvZiBpdGVtc1xuXHRcdCAqXG5cdFx0ICogQHB1YmxpY1xuXHRcdCAqIEB0eXBlIHtBcnJheX1cblx0XHQgKi9cblx0XHR0aGlzLmxpc3QgPSBbXTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgaXRlbSBvZiBjb250YWluZXIgYnkgaW5kZXhcblx0ICpcblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcblx0ICovXG5cdGdldEJ5SW5kZXgoaW5kZXgpIHtcblx0XHRyZXR1cm4gdGhpcy5saXN0W2luZGV4XTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTZXQgaXRlbSBhY3RpdmUgYnkgaW5kZXhcblx0ICpcblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcblx0ICovXG5cdHNldEFjdGl2ZUJ5SW5kZXgoaW5kZXgpIHtcblx0XHRpZiAodGhpcy5hY3RpdmUpIHtcblx0XHRcdHRoaXMuYWN0aXZlLnJlbW92ZUNsYXNzKCdjb250cm9sLWNvbnRhaW5lcl9faXRlbS0tYWN0aXZlJyk7XG5cdFx0fVxuXHRcdHRoaXMuX2FjdGl2ZSA9IHRoaXMubGlzdFtpbmRleF0uYWRkQ2xhc3MoJ2NvbnRyb2wtY29udGFpbmVyX19pdGVtLS1hY3RpdmUnKTtcblx0XHRyZXR1cm4gdGhpcy5fYWN0aXZlO1xuXHR9XG5cblxuXHQvKipcblx0ICogR2V0dGVyIG9mIGFjdGl2ZSBmaWVsZFxuXHQgKlxuXHQgKiBAcHVibGljXG5cdCAqIEB0eXBlIHtqUXVlcnl9XG5cdCAqL1xuXHRnZXQgYWN0aXZlICgpIHtcblx0XHRpZiAodGhpcy5fYWN0aXZlICYmIHRoaXMuX2FjdGl2ZS5sZW5ndGggPiAwKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5fYWN0aXZlO1xuXHRcdH1cblx0XHR0aGlzLmxpc3QuZm9yRWFjaChpdGVtID0+IHtcblx0XHRcdGlmIChpdGVtLmhhc0NsYXNzKCdjb250cm9sLWNvbnRhaW5lcl9faXRlbS0tYWN0aXZlJykpIHtcblx0XHRcdFx0dGhpcy5fYWN0aXZlID0gaXRlbTtcblx0XHRcdH1cblx0XHR9KVxuXHRcdHJldHVybiB0aGlzLl9hY3RpdmU7XG5cdH1cblxuXHQvKipcblx0ICogU2V0dGVyIG9mIGFjdGl2ZSBmaWVsZFxuXHQgKlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7alF1ZXJ5fSBJdGVtIG9mIGNvbnRhaW5lclxuXHQgKi9cblx0c2V0IGFjdGl2ZSAoZWxlbWVudCkge1xuXHRcdGlmICh0aGlzLmFjdGl2ZSkge1xuXHRcdFx0dGhpcy5hY3RpdmUucmVtb3ZlQ2xhc3MoJ2NvbnRyb2wtY29udGFpbmVyX19pdGVtLS1hY3RpdmUnKTtcblx0XHR9XG5cdFx0aWYgKGVsZW1lbnQpIHtcblx0XHRcdCQoZWxlbWVudCkuYWRkQ2xhc3MoJ2NvbnRyb2wtY29udGFpbmVyX19pdGVtLS1hY3RpdmUnKTtcblx0XHR9XG5cdFx0dGhpcy5fYWN0aXZlID0gZWxlbWVudDtcblx0XHRyZXR1cm4gdGhpcy5fYWN0aXZlXG5cdH1cblxuXG5cdC8qKlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7U3RyaW5nfGpRdWVyeX0gQ29udGVudCBvZiBpdGVtXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBEYXRhIG9mIGl0ZW1cblx0ICovXG5cdGFkZEl0ZW0gKGNvbnRlbnQsIGRhdGEpIHtcblx0XHRjb25zdCBpdGVtID0gJCgnPGRpdiAvPicpXG5cdFx0XHQuYWRkQ2xhc3MoJ2NvbnRyb2wtY29udGFpbmVyX19pdGVtJylcblx0XHRcdC5kYXRhKGRhdGEpXG5cdFx0XHQuYXR0cigndGl0bGUnLCBkYXRhLnRvb2x0aXApXG5cdFx0XHQub24oJ2NsaWNrJywgdGhpcy5vbkl0ZW1DbGljay5iaW5kKHRoaXMpKVxuXHRcdFx0LmFwcGVuZChjb250ZW50KTtcblxuXHRcdHRoaXMubGlzdCA9IHRoaXMubGlzdC5jb25jYXQoaXRlbSk7XG5cblx0XHR0aGlzLmRyb3Bkb3duQ29udGVudC5hcHBlbmQoaXRlbSk7XG5cblx0XHRyZXR1cm4gaXRlbTtcblx0fVxuXG5cdC8qKlxuXHQgKiBPbiBpdGVtIGNsaWNrIGV2ZW50IGhhbmRsZXJcblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge0V2ZW50fSBlXG5cdCAqL1xuXHRvbkl0ZW1DbGljayAoZSkge1xuXHRcdHRoaXMuYWN0aXZlID0gZS5jdXJyZW50VGFyZ2V0O1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0YnVpbGRDU1NDbGFzcygpIHtcblx0XHRyZXR1cm4gYCR7c3VwZXIuYnVpbGRDU1NDbGFzcygpfSBjb250cm9sLWNvbnRhaW5lcmBcblx0fVxuXG5cdHVwZGF0ZSgpIHtcblx0XHRjb25zdCBkYXRhID0gdGhpcy5nZXREYXRhKClcblx0XHRjb25zdCBjdXJyZW50VmFsdWUgPSB0aGlzLmdldEN1cnJlbnRWYWx1ZSgpXG5cblx0XHRpZihkYXRhID09IG51bGwgfHwgZGF0YS5sZW5ndGggPT09IDApIHtcblx0XHRcdHRoaXMuZGlzYWJsZSA9IHRydWU7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5saXN0ID0gW107XG5cdFx0dGhpcy5kcm9wZG93bkNvbnRlbnQuZW1wdHkoKTtcblxuXHRcdGRhdGEuZm9yRWFjaChpdGVtID0+IHtcblx0XHRcdGNvbnN0IGVsZW0gPSB0aGlzLmFkZEl0ZW0oaXRlbS50aXRsZSwgaXRlbSk7XG5cdFx0XHRpZihjdXJyZW50VmFsdWUgJiYgY3VycmVudFZhbHVlLm5hbWUgPT09IGl0ZW0ubmFtZSkge1xuXG5cdFx0XHRcdHRoaXMuYWN0aXZlID0gZWxlbTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHR0aGlzLmRpc2FibGUgPSBmYWxzZTtcblx0fVxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ0NvbnRyb2xDb250YWluZXInLCBDb250cm9sQ29udGFpbmVyKTtcbkNvbnRyb2wucmVnaXN0ZXJDb250cm9sKCdjb250YWluZXInLCBDb250cm9sQ29udGFpbmVyKTtcbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xDb250YWluZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9Db250cm9sQ29udGFpbmVyLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBTdWJ0aXRsZUNvbnRyb2wuanNcbiAqXG4gKiBTdWJ0aXRsZSBjb250cm9sXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9Db250cm9sJztcbmltcG9ydCBDb250cm9sQ29udGFpbmVyIGZyb20gJy4vQ29udHJvbENvbnRhaW5lcic7XG5cbi8qKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQGNsYXNzIFN1YnRpdGxlQ29udHJvbFxuICogQGV4dGVuZHMgQ29udHJvbENvbnRhaW5lclxuICovXG5jbGFzcyBTdWJ0aXRsZUNvbnRyb2wgZXh0ZW5kcyBDb250cm9sQ29udGFpbmVyIHtcblx0Y29uc3RydWN0b3IgKHBsYXllciwgb3B0aW9ucz17fSkge1xuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0aWNvbk5hbWUgOiAnY29tbWVudGluZy1vJyxcblx0XHRcdHRpdGxlIDogJ9Ch0YPQsdGC0LjRgtGA0YsnLFxuXHRcdFx0bmFtZSA6ICdzdWJ0aXRsZScsXG5cdFx0XHRjbGFzc05hbWUgOiAnc3VidGl0bGUtY29udHJvbCcsXG5cdFx0XHRkaXNhYmxlIDogdHJ1ZVxuXHRcdH0sIG9wdGlvbnMpO1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cblx0XHR0aGlzLnBsYXllci5vbigncGxheWluZycsIHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xuXHRcdHRoaXMucGxheWVyLm9uKCd0cmFja3NjaGFuZ2UnLCB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdG9uQ2xpY2sgKGUpIHtcblx0XHRzdXBlci5vbkNsaWNrKGUpO1xuXHRcdGNvbnN0IHZpZGVvID0gdGhpcy5wbGF5ZXIudmlkZW87XG5cdFx0dmlkZW8udHJhY2sgPSBudWxsXG5cdH1cblxuXHRvbkl0ZW1DbGljayAoZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpXG5cblx0XHRjb25zdCBpdGVtID0gJChlLnRhcmdldClcblx0XHRjb25zdCB2aWRlbyA9IHRoaXMucGxheWVyLnZpZGVvO1xuXHRcdGlmIChpdGVtLmRhdGEoKSkge1xuXHRcdFx0dmlkZW8udHJhY2sgPSBpdGVtLmRhdGEoKTtcblx0XHR9XG5cblx0XHR0aGlzLmRyb3Bkb3duQ29udGVudC5oaWRlKClcblx0fVxuXG5cdG9uUGxheWVySW5pdGVkKGUsIGRhdGEpIHtcblx0XHR0aGlzLnVwZGF0ZSgpXG5cdH1cblxuXHR1cGRhdGUoKSB7XG5cdFx0c3VwZXIudXBkYXRlKCk7XG5cdFx0Y29uc3QgaGFzVmFsdWUgPSAhISh0aGlzLmdldEN1cnJlbnRWYWx1ZSgpICYmIHRoaXMuZ2V0Q3VycmVudFZhbHVlKCkubmFtZSAhPSBudWxsKTtcblx0XHR0aGlzLmVsZW1lbnQudG9nZ2xlQ2xhc3MoXG5cdFx0XHQnY29udHJvbC1jaGVja2JveC0tY2hlY2tlZCcsXG5cdFx0XHRoYXNWYWx1ZVxuXHRcdClcblx0fVxuXG5cdGdldERhdGEoKSB7XG5cdFx0cmV0dXJuIHRoaXMucGxheWVyLnZpZGVvLnN1YnRpdGxlcztcblx0fVxuXG5cdGdldEN1cnJlbnRWYWx1ZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5wbGF5ZXIudmlkZW8udHJhY2s7XG5cdH1cblxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ1N1YnRpdGxlQ29udHJvbCcsIFN1YnRpdGxlQ29udHJvbCk7XG5Db250cm9sLnJlZ2lzdGVyQ29udHJvbCgnc3VidGl0bGUnLCBTdWJ0aXRsZUNvbnRyb2wpO1xuZXhwb3J0IGRlZmF1bHQgU3VidGl0bGVDb250cm9sO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvU3VidGl0bGVDb250cm9sLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBEb3dubG9hZENvbnRyb2wuanNcbiAqXG4gKiBEb3dubG9hZCBjb250cm9sXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb250cm9sIGZyb20gJy4vQ29udHJvbCc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCBJY29uIGZyb20gJy4vSWNvbic7XG5cbi8qKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQGNsYXNzIERvd25sb2FkQ29udHJvbFxuICogQGV4bnRlZHMgQ29udHJvbFxuICovXG5jbGFzcyBEb3dubG9hZENvbnRyb2wgZXh0ZW5kcyBDb250cm9sIHtcblx0Y29uc3RydWN0b3IgKHBsYXllciwgb3B0aW9ucz17fSkge1xuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7XG5cdFx0XHR0aXRsZSA6ICfQodC60LDRh9Cw0YLRjCDQstC40LTQtdC+Jyxcblx0XHRcdGNsYXNzTmFtZSA6ICdkb3dubG9hZCcsXG5cdFx0XHRuYW1lIDogJ2Rvd25sb2FkJ1xuXHRcdH0sIG9wdGlvbnMpO1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cdFx0dGhpcy5wbGF5ZXIub24oJ2xvYWRzdGFydCcsIHRoaXMub25Mb2FkU3RhcnQuYmluZCh0aGlzKSk7XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0Ly8gVE9ETzog0JTQvtC+0L/RgNC10LTQtdC70LjRgtGMINGN0YLQvtGCINC80LXRgtC+0LQsINCwINC90LUg0L/QtdGA0LXQvtC/0YDQtdC00LvQtdC40YLRjFxuXHRcdHRoaXMuZWxlbWVudCA9ICQoJzxhIC8+Jylcblx0XHRcdC5hdHRyKHtcblx0XHRcdFx0aHJlZiA6ICcnLFxuXHRcdFx0XHR0YXJnZXQgOiAnX2JsYW5rJyxcblx0XHRcdFx0ZG93bmxvYWQgOiB0cnVlLFxuXHRcdFx0XHR0aXRsZSA6IHRoaXMub3B0aW9ucy50aXRsZSxcblx0XHRcdH0pXG5cdFx0XHQuYWRkQ2xhc3ModGhpcy5idWlsZENTU0NsYXNzKCkpXG5cdFx0XHQuYXBwZW5kKG5ldyBJY29uKHRoaXMucGxheWVyLCB7IGljb25OYW1lIDogJ2Rvd25sb2FkJyB9KS5lbGVtZW50KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGJ1aWxkQ1NTQ2xhc3MoKSB7XG5cdFx0cmV0dXJuIGAke3N1cGVyLmJ1aWxkQ1NTQ2xhc3MoKX1gO1xuXHR9XG5cblxuXHQvKipcblx0ICogU2V0dGVyIG9mIGxpbmsgZmllbGRcblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgUGF0aCBmb3IgdmlkZW9cblx0ICovXG5cdHNldCBsaW5rICh2YWx1ZSkge1xuXHRcdGNvbnN0IHBhcnNlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblx0XHRwYXJzZXIuaHJlZiA9IHZhbHVlO1xuXHRcdGxldCBmaWxlTmFtZSA9IHBhcnNlci5wYXRobmFtZS5zcGxpdCgnLycpO1xuXHRcdGZpbGVOYW1lID0gZmlsZU5hbWVbZmlsZU5hbWUubGVuZ3RoIC0gMV07XG5cdFx0dGhpcy5lbGVtZW50LmF0dHIoe1xuXHRcdFx0aHJlZiA6IHZhbHVlLFxuXHRcdFx0ZG93bmxvYWQgOiBmaWxlTmFtZVxuXHRcdH0pO1xuXHR9XG5cblxuXHRvbkxvYWRTdGFydChlLCBkYXRhKSB7XG5cdFx0dGhpcy5saW5rID0gdGhpcy5wbGF5ZXIudmlkZW8uc3JjLnVybFxuXHR9XG5cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdEb3dubG9hZENvbnRyb2wnLCBEb3dubG9hZENvbnRyb2wpO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ2Rvd25sb2FkJywgRG93bmxvYWRDb250cm9sKTtcbmV4cG9ydCBkZWZhdWx0IERvd25sb2FkQ29udHJvbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL0Rvd25sb2FkQ29udHJvbC5qcyIsIlxuJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBLZXliaW5kaW5nSW5mb0NvbnRyb2wuanNcbiAqXG4gKiBJbmZvIGNvbnRyb2xcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL0NvbnRyb2wnO1xuaW1wb3J0IENvbnRyb2xEcm9wZG93biBmcm9tICcuL0NvbnRyb2xEcm9wZG93bic7XG5cbi8qKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQGNsYXNzIEtleUJpbmRpbmdJbmZvQ29udHJvbFxuICogQGV4dGVuZHMgQ29udHJvbERyb3Bkb3duXG4gKi9cbmNsYXNzIEtleUJpbmRpbmdJbmZvQ29udHJvbCBleHRlbmRzIENvbnRyb2xEcm9wZG93biB7XG5cblx0Y29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRpY29uTmFtZSA6ICdpbmZvJyxcblx0XHRcdHRpdGxlIDogJ9CY0L3RhNC+Jyxcblx0XHRcdGNsYXNzTmFtZSA6ICdpbmZvLWNvbnRyb2wnLFxuXHRcdFx0bmFtZSA6ICdpbmZvJ1xuXHRcdH0sIG9wdGlvbnMpO1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cdH1cblxuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdHN1cGVyLmNyZWF0ZUVsZW1lbnQoKTtcblx0XHRsZXQga2V5QmluZGluZyA9IHRoaXMucGxheWVyLm9wdGlvbnMua2V5QmluZGluZztcblx0XHRsZXQgaW5mb0NvbnRlbnQgPSBgYDtcblx0XHRmb3IgKGxldCBfa2V5IGluIGtleUJpbmRpbmcpIHtcblx0XHRcdGlmICgha2V5QmluZGluZy5oYXNPd25Qcm9wZXJ0eShfa2V5KSkgY29udGludWU7XG5cblx0XHRcdGxldCBob3RrZXkgPSBrZXlCaW5kaW5nW19rZXldO1xuXHRcdFx0bGV0IGl0ZW0gPSAnJztcblx0XHRcdGxldCBrZXlTdHJpbmcgPSAnJztcblxuXHRcdFx0aG90a2V5LmluZm8uZm9yRWFjaCgoa2V5LCBpbmRleCkgPT4ge1xuXHRcdFx0XHRpZiAoaW5kZXggIT09IDApIHtcblx0XHRcdFx0XHRrZXlTdHJpbmcgKz0gYCArIGBcblx0XHRcdFx0fVxuXHRcdFx0XHRrZXlTdHJpbmcgKz0gYDxrYmQgY2xhc3M9XCJsZXBsYXllci1rZXlcIj4ke2tleX08L2tiZD5gXG5cdFx0XHR9KTtcblxuXHRcdFx0aXRlbSA9IGBcblx0XHRcdFx0PGRpdiBjbGFzcz1cImluZm8tY29udHJvbF9faXRlbVwiPlxuXHRcdFx0XHRcdCR7a2V5U3RyaW5nfSAtICR7aG90a2V5LmRlc2NyaXB0aW9ufVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdGBcblxuXHRcdFx0aW5mb0NvbnRlbnQgKz0gaXRlbTtcblxuXHRcdH1cblx0XHR0aGlzLmRyb3Bkb3duQ29udGVudFxuXHRcdFx0LmFkZENsYXNzKCdpbmZvLWNvbnRyb2xfX2NvbnRlbnQnKVxuXHRcdFx0LmFwcGVuZChpbmZvQ29udGVudCk7XG5cdH1cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdLZXlCaW5kaW5nSW5mb0NvbnRyb2wnLCBLZXlCaW5kaW5nSW5mb0NvbnRyb2wpO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ2tleWJpbmRpbmcgaW5mbycsIEtleUJpbmRpbmdJbmZvQ29udHJvbCk7XG5leHBvcnQgZGVmYXVsdCBLZXlCaW5kaW5nSW5mb0NvbnRyb2w7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9LZXliaW5kaW5nSW5mb0NvbnRyb2wuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIFRpbWVJbmZvQ29udHJvbC5qc1xuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCBDb250cm9sIGZyb20gJy4vQ29udHJvbCc7XG5pbXBvcnQgQ29udHJvbFRleHQgZnJvbSAnLi9Db250cm9sVGV4dCc7XG5pbXBvcnQgeyBzZWNvbmRzVG9UaW1lIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBjbGFzcyBUaW1lSW5mb0NvbnRyb2xcbiAqIEBwcm9wZXJ0eSB7Q29udHJvbFRleHR9IGN1cnJlbnRUaW1lIEN1cnJlbnQgdGltZSdzIHRleHRcbiAqIEBwcm9wZXJ0eSB7Q29udHJvbFRleHR9IHRvdGFsVGltZSBUb3RhbCB0aW1lXG4gKiBAcHJvcGVydHkge2pRdWVyeX0gbGluZVxuICogQGV4dGVuZHMgQ29udHJvbFxuICovXG5jbGFzcyBUaW1lSW5mb0NvbnRyb2wgZXh0ZW5kcyBDb250cm9sIHtcblxuXHRjb25zdHJ1Y3RvciAocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRjbGFzc05hbWUgOiAndGltZWxpbmUgdGltZWxpbmUtY29udGFpbmVyJyxcblx0XHRcdG5hbWUgOiAndGltZS1pbmZvJ1xuXHRcdH0sIG9wdGlvbnMpO1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cblx0XHR0aGlzLnBsYXllci5vbigndGltZXVwZGF0ZScsIChlLCBkYXRhKSA9PiB7XG5cdFx0XHRjb25zdCB0aW1lID0gdGhpcy5wbGF5ZXIuY3VycmVudFRpbWU7XG5cdFx0XHR0aGlzLl9jdXJyZW50VGltZUNvbnRyb2wudGV4dCA9IHNlY29uZHNUb1RpbWUodGltZSk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLnBsYXllci5vbignZHVyYXRpb25jaGFuZ2UnLCAoZSkgPT4ge1xuXHRcdFx0dGhpcy5fdG90YWxUaW1lQ29udHJvbC50ZXh0ID0gc2Vjb25kc1RvVGltZSh0aGlzLnBsYXllci52aWRlby5kdXJhdGlvbik7XG5cdFx0fSk7XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0Y29uc3QgZHVyYXRpb24gPSB0aGlzLnBsYXllci52aWRlby5kdXJhdGlvbjtcblx0XHRjb25zdCBjdXJyZW50VGltZSA9IHRoaXMucGxheWVyLnZpZGVvLmN1cnJlbnRUaW1lO1xuXHRcdHRoaXMuX2N1cnJlbnRUaW1lQ29udHJvbCA9IG5ldyBDb250cm9sVGV4dCh0aGlzLnBsYXllciwgeyBjbGFzc05hbWUgOiAnY29udHJvbC10aW1lX19jdXJyZW50J30pO1xuXHRcdHRoaXMuX3RvdGFsVGltZUNvbnRyb2wgPSBuZXcgQ29udHJvbFRleHQodGhpcy5wbGF5ZXIsIHsgY2xhc3NOYW1lIDogJ2NvbnRyb2wtdGltZV9fdG90YWwnfSk7XG5cblx0XHRpZihpc05hTihkdXJhdGlvbikgfHwgZHVyYXRpb24gPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5fdG90YWxUaW1lQ29udHJvbC50ZXh0ID0gJyc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuX3RvdGFsVGltZUNvbnRyb2wudGV4dCA9IHNlY29uZHNUb1RpbWUoZHVyYXRpb24pO1xuXHRcdH1cblxuXHRcdGlmKGN1cnJlbnRUaW1lID09IG51bGwpIHtcblx0XHRcdHRoaXMuX2N1cnJlbnRUaW1lQ29udHJvbC50ZXh0ID0gc2Vjb25kc1RvVGltZSgwKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5fY3VycmVudFRpbWVDb250cm9sLnRleHQgPSBzZWNvbmRzVG9UaW1lKGN1cnJlbnRUaW1lKTtcblx0XHR9XG5cblx0XHR0aGlzLmVsZW1lbnQgPSAkKCc8ZGl2Lz4nKS5hZGRDbGFzcygnY29udHJvbC10aW1lJyk7XG5cdFx0dGhpcy5lbGVtZW50XG5cdFx0XHQuYXBwZW5kKHRoaXMuX2N1cnJlbnRUaW1lQ29udHJvbC5lbGVtZW50KVxuXHRcdFx0LmFwcGVuZCh0aGlzLl90b3RhbFRpbWVDb250cm9sLmVsZW1lbnQpXG5cblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50O1xuXHR9XG5cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRvblBsYXllckluaXRlZChlKSB7XG5cdFx0bGV0IHZpZGVvID0gdGhpcy5wbGF5ZXIudmlkZW87XG5cdFx0dGhpcy5fY3VycmVudFRpbWVDb250cm9sLnRleHQgPSBzZWNvbmRzVG9UaW1lKHZpZGVvLmN1cnJlbnRUaW1lKTtcblx0XHR0aGlzLl90b3RhbFRpbWVDb250cm9sLnRleHQgPSBzZWNvbmRzVG9UaW1lKHZpZGVvLmR1cmF0aW9uKTtcblx0fVxuXG5cdF9vbkNsaWNrKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0fVxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ1RpbWVJbmZvQ29udHJvbCcsIFRpbWVJbmZvQ29udHJvbCk7XG5Db250cm9sLnJlZ2lzdGVyQ29udHJvbCgndGltZWluZm8nLCBUaW1lSW5mb0NvbnRyb2wpO1xuZXhwb3J0IGRlZmF1bHQgVGltZUluZm9Db250cm9sO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvVGltZUluZm9Db250cm9sLmpzIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50cy9Db21wb25lbnQnO1xuaW1wb3J0IHsgSVNfU0FGQVJJLCBJU19JT1MsIElTX0FORFJPSUQgfSBmcm9tICcuLi91dGlscy9icm93c2VyJztcbmltcG9ydCBFbnRpdHkgZnJvbSAnLi9FbnRpdHknO1xuXG5cbmNsYXNzIEh0bWw1IGV4dGVuZHMgRW50aXR5IHtcblx0Y29uc3RydWN0b3IgKHBsYXllciwgb3B0aW9ucykge1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cdFx0dGhpcy5tZWRpYSA9IHRoaXMuZWxlbWVudFswXTtcblxuXHRcdHRoaXMuc3VidGl0bGVzID0gW107XG5cdFx0dGhpcy5idWZmZXJSYW5nZXMgPSBbXTtcblxuXHRcdHRoaXMuc3JjID0gdGhpcy5wbGF5ZXIub3B0aW9ucy5zcmM7XG5cblx0XHRpZih0aGlzLnBsYXllci5vcHRpb25zLnBvc3RlciAhPSBudWxsKSB7XG5cdFx0XHR0aGlzLnBvc3RlciA9IHRoaXMucGxheWVyLm9wdGlvbnMucG9zdGVyO1xuXHRcdH1cblxuXHRcdGlmKHRoaXMuZ2V0QXZhaWxhYmxlUXVhbGl0eUxldmVscygpLmxlbmd0aCA+IDApIHtcblx0XHRcdHRoaXMuX3BsYXliYWNrUXVhbGl0eSA9IHRoaXMuZ2V0QXZhaWxhYmxlUXVhbGl0eUxldmVscygpWzBdO1xuXHRcdH1cblxuXHRcdHRoaXMuZWxlbWVudC5vbignbG9hZHN0YXJ0JywgdGhpcy5vbkxvYWRTdGFydC5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ3RpbWV1cGRhdGUnLCB0aGlzLm9uVGltZVVwZGF0ZS5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ2R1cmF0aW9uY2hhbmdlJywgdGhpcy5vbkR1cmF0aW9uQ2hhbmdlLmJpbmQodGhpcykpO1xuXHRcdHRoaXMuZWxlbWVudC5vbigncHJvZ3Jlc3MnLCB0aGlzLm9uUHJvZ3Jlc3MuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdzZWVraW5nJywgdGhpcy5vblNlZWtpbmcuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdzZWVrZWQnLCB0aGlzLm9uU2Vla2VkLmJpbmQodGhpcykpO1xuXHRcdHRoaXMuZWxlbWVudC5vbigndm9sdW1lY2hhbmdlJywgdGhpcy5vblZvbHVtZUNoYW5nZS5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ2NsaWNrJywgdGhpcy5vbkNsaWNrLmJpbmQodGhpcykpO1xuXHRcdHRoaXMuZWxlbWVudC5vbignZGJsY2xpY2snLCB0aGlzLm9uRGJsY2xpY2suYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdwbGF5JywgdGhpcy5vblBsYXkuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdwYXVzZScsIHRoaXMub25QYXVzZS5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ3JhdGVjaGFuZ2UnLCB0aGlzLm9uUmF0ZUNoYW5nZS5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ2VuZGVkJywgdGhpcy5vbkVuZGVkLmJpbmQodGhpcykpO1xuXHRcdHRoaXMuZWxlbWVudC5vbignY2FucGxheXRocm91Z2gnLCB0aGlzLm9uQ2FucGxheVRocm91Z2guYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCd3YWl0aW5nJywgdGhpcy5vbldhaXRpbmcuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdlcnJvcicsIHRoaXMub25FcnJvci5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdG9uTG9hZFN0YXJ0KGUpIHtcblx0XHR0aGlzLnRyaWdnZXIoJ2xvYWRzdGFydCcpO1xuXHR9XG5cblx0b25UaW1lVXBkYXRlKGUpIHtcblx0XHR0aGlzLnRyaWdnZXIoJ3RpbWV1cGRhdGUnKTtcblx0fVxuXG5cdG9uRHVyYXRpb25DaGFuZ2UoZSkge1xuXHRcdHRoaXMudHJpZ2dlcignZHVyYXRpb25jaGFuZ2UnKTtcblx0fVxuXG5cdG9uUHJvZ3Jlc3MoZSkge1xuXHRcdHRoaXMudHJpZ2dlcigncHJvZ3Jlc3MnKTtcblx0fVxuXG5cdG9uU2Vla2luZyhlKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCdzZWVraW5nJyk7XG5cdH1cblxuXHRvblNlZWtlZChlKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCdzZWVrZWQnKTtcblx0fVxuXG5cdG9uVm9sdW1lQ2hhbmdlKGUpIHtcblx0XHR0aGlzLnRyaWdnZXIoJ3ZvbHVtZWNoYW5nZScpO1xuXHR9XG5cblx0b25DbGljaygpIHtcblx0XHR0aGlzLnRyaWdnZXIoJ2NsaWNrJyk7XG5cdH1cblxuXHRvbkRibGNsaWNrKCkge1xuXHRcdHRoaXMudHJpZ2dlcignZGJsY2xpY2snKTtcblx0fVxuXG5cdG9uUGxheSgpIHtcblx0XHR0aGlzLnRyaWdnZXIoJ3BsYXknKTtcblx0fVxuXG5cdG9uUGF1c2UoKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCdwYXVzZScpO1xuXHR9XG5cblx0b25QbGF5aW5nKCkge1xuXHRcdHRoaXMudHJpZ2dlcigncGxheWluZycpO1xuXHR9XG5cblx0b25SYXRlQ2hhbmdlKCkge1xuXHRcdHRoaXMudHJpZ2dlcigncmF0ZWNoYW5nZScpO1xuXHR9XG5cblx0b25FbmRlZCgpIHtcblx0XHR0aGlzLnRyaWdnZXIoJ2VuZGVkJyk7XG5cdH1cblxuXHRvbkNhbnBsYXlUaHJvdWdoKCkge1xuXHRcdHRoaXMudHJpZ2dlcignY2FucGxheXRocm91Z2gnKTtcblx0fVxuXG5cdG9uV2FpdGluZygpIHtcblx0XHR0aGlzLnRyaWdnZXIoJ3dhaXRpbmcnKTtcblx0fVxuXG5cdG9uRXJyb3IoZSkge1xuXHRcdHRoaXMudHJpZ2dlcignZXJyb3InLCB7IGNvZGUgOiBlLnRhcmdldC5lcnJvci5jb2RlIH0pO1xuXHR9XG5cblx0LyogVE9ETyAqL1xuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdHRoaXMuZWxlbWVudCA9IHRoaXMub3B0aW9ucy5jdHg7XG5cdFx0W1xuXG5cdFx0XHQvLyBSZW1vdmUgY29udHJvbHMgYmVjYXVzZSB3ZSBkb250IG5vdCBzdXBwb3J0IG5hdGl2ZSBjb250cm9scyB5ZXRcblx0XHRcdCdjb250cm9scycsXG5cdFx0XHQncG9zdGVyJyxcblxuXHRcdFx0Ly8gSXQgaXMgdW5uZWNlc3NhcnkgYXR0cnMsIHRoaXMgZnVuY3Rpb25hbGl0eSBzb2x2ZSBDU1Ncblx0XHRcdCdoZWlnaHQnLFxuXHRcdFx0J3dpZHRoJ1xuXG5cdFx0XS5mb3JFYWNoKGl0ZW0gPT4ge1xuXHRcdFx0dGhpcy5lbGVtZW50LnJlbW92ZUF0dHIoaXRlbSk7XG5cdFx0fSk7XG5cblx0XHQvLyBTZXQgYXR0cnMgZnJvbSBvcHRpb25zXG5cdFx0W1xuXHRcdFx0J3ByZWxvYWQnLFxuXHRcdFx0J2F1dG9wbGF5Jyxcblx0XHRcdCdsb29wJyxcblx0XHRcdCdtdXRlZCdcblx0XHRdLmZvckVhY2goaXRlbSA9PiB7XG5cdFx0XHRpZih0aGlzLnBsYXllci5vcHRpb25zW2l0ZW1dKSB7XG5cdFx0XHRcdHRoaXMuZWxlbWVudC5hdHRyKGl0ZW0sIHRoaXMucGxheWVyLm9wdGlvbnNbaXRlbV0pO1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQucHJvcChpdGVtLCB0aGlzLnBsYXllci5vcHRpb25zW2l0ZW1dKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXG5cdFx0dGhpcy5lbGVtZW50LmZpbmQoJ3NvdXJjZVtkYXRhLXF1YWxpdHldJykuZWFjaCgoaSwgaXRlbSkgPT4ge1xuXHRcdFx0JChpdGVtKS5yZW1vdmUoKTtcblx0XHR9KTtcblxuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQ7XG5cdH1cblxuXHRnZXQgY3VycmVudFRpbWUgKCkge1xuXHRcdHJldHVybiB0aGlzLm1lZGlhLmN1cnJlbnRUaW1lO1xuXHR9XG5cblx0c2V0IGN1cnJlbnRUaW1lICh2YWx1ZSkge1xuXHRcdGxldCB0aW1lO1xuXHRcdGlmICh2YWx1ZSA+IHRoaXMuZHVyYXRpb24pIHtcblx0XHRcdHRpbWUgPSB0aGlzLmR1cmF0aW9uXG5cdFx0fSBlbHNlIGlmICh2YWx1ZSA8IDApIHtcblx0XHRcdHRpbWUgPSAwXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRpbWUgPSB2YWx1ZTtcblx0XHR9XG5cblx0XHR0aGlzLnBsYXllci50cmlnZ2VyKCd0aW1ldXBkYXRlbG9hZCcsIHsgY3VycmVudFRpbWUgOiB0aW1lIH0pO1xuXG5cdFx0dGhpcy5tZWRpYS5jdXJyZW50VGltZSA9IHRpbWU7XG5cdH1cblxuXHRnZXQgZHVyYXRpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLm1lZGlhLmR1cmF0aW9uO1xuXHR9XG5cblx0Z2V0IGhlaWdodCAoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWVkaWEuY2xpZW50SGVpZ2h0O1xuXHR9XG5cblx0Z2V0IHdpZHRoICgpIHtcblx0XHRyZXR1cm4gdGhpcy5tZWRpYS5jbGllbnRXaWR0aDtcblx0fVxuXG5cdGdldCByYXRlICgpIHtcblx0XHRyZXR1cm4gdGhpcy5tZWRpYS5wbGF5YmFja1JhdGU7XG5cdH1cblxuXHRzZXQgbXV0ZWQodmFsdWUpIHtcblx0XHR0aGlzLm1lZGlhLm11dGVkID0gdmFsdWU7XG5cdH1cblxuXHRnZXQgbXV0ZWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWVkaWEubXV0ZWRcblx0fVxuXG5cdGdldCByYXRlTWF4KCkge1xuXHRcdGxldCBtYXggPSB0aGlzLnBsYXllci5vcHRpb25zLnJhdGUubWF4O1xuXHRcdGlmKElTX0lPUyB8fCBJU19BTkRST0lEKSB7XG5cdFx0XHRtYXggPSBIdG1sNS5NT0JJTEVfTUFYX1JBVEU7XG5cdFx0fVxuXHRcdGlmKElTX1NBRkFSSSkge1xuXHRcdFx0bWF4ID0gSHRtbDUuU0FGQVJJX01BWF9SQVRFO1xuXHRcdH1cblxuXHRcdHJldHVybiBtYXg7XG5cdH1cblxuXHRnZXQgcmF0ZU1pbigpIHtcblx0XHRsZXQgbWluID0gdGhpcy5wbGF5ZXIub3B0aW9ucy5yYXRlLm1pbjtcblxuXHRcdGlmIChJU19JT1MgfHwgSVNfQU5EUk9JRCkge1xuXHRcdFx0bWluID0gSHRtbDUuTU9CSUxFX01JTl9SQVRFO1xuXHRcdH1cblxuXHRcdGlmIChJU19TQUZBUkkpIHtcblx0XHRcdG1pbiA9IEh0bWw1LlNBRkFSSV9NSU5fUkFURTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbWluO1xuXHR9XG5cblx0c2V0IHJhdGUgKHZhbHVlKSB7XG5cdFx0c3VwZXIucmF0ZSA9IHZhbHVlO1xuXHRcdHRoaXMubWVkaWEucGxheWJhY2tSYXRlID0gdmFsdWU7XG5cdH1cblxuXHRnZXRBdmFpbGFibGVRdWFsaXR5TGV2ZWxzKCkge1xuXHRcdHJldHVybiB0aGlzLnBsYXllci5vcHRpb25zLnNvdXJjZXMubWFwKGl0ZW0gPT4gKHtcblx0XHRcdG5hbWUgOiBpdGVtLnRpdGxlLFxuXHRcdFx0Li4uaXRlbVxuXHRcdH0pKTtcblx0fVxuXG5cdHNldCBwbGF5YmFja1F1YWxpdHkobmFtZSkge1xuXHRcdHN1cGVyLnBsYXliYWNrUXVhbGl0eSA9IG5hbWU7XG5cdFx0Y29uc3QgdGltZSA9IHRoaXMuY3VycmVudFRpbWU7XG5cdFx0Y29uc3QgcmF0ZSA9IHRoaXMucmF0ZTtcblx0XHRjb25zdCBzdG9wID0gdGhpcy5wYXVzZWQ7XG5cblx0XHR0aGlzLl9wbGF5YmFja1F1YWxpdHkgPSB0aGlzLmdldEF2YWlsYWJsZVF1YWxpdHlMZXZlbHMoKS5maW5kKGl0ZW0gPT4gaXRlbS5uYW1lID09PSBuYW1lKTtcblxuXHRcdHRoaXMuc3JjID0gdGhpcy5fcGxheWJhY2tRdWFsaXR5O1xuXHRcdHRoaXMucGxheWJhY2tSYXRlID0gcmF0ZTtcblx0XHR0aGlzLmN1cnJlbnRUaW1lID0gdGltZTtcblxuXHRcdGlmIChzdG9wKSB7XG5cdFx0XHR0aGlzLnBhdXNlKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucGxheSgpO1xuXHRcdH1cblxuXHRcdHRoaXMudHJpZ2dlcigncXVhbGl0eWNoYW5nZScsIHRoaXMuX3BsYXliYWNrUXVhbGl0eSk7XG5cblx0fVxuXG5cdGdldCBwbGF5YmFja1F1YWxpdHkoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3BsYXliYWNrUXVhbGl0eTtcblx0fVxuXG5cdHNldCBzcmMgKHNyYykge1xuXHRcdGlmKHNyYyA9PSBudWxsKSByZXR1cm47XG5cdFx0aWYodGhpcy5zcmMgJiYgdGhpcy5zcmMudXJsID09PSBzcmMudXJsKSByZXR1cm47XG5cblx0XHR0aGlzLm1lZGlhLnNyYyA9IHNyYy51cmw7XG5cblx0XHR0aGlzLl9zb3VyY2UgPSBzcmM7XG5cdH1cblxuXHRnZXQgc3JjICgpIHtcblx0XHRyZXR1cm4gdGhpcy5fc291cmNlXG5cdH1cblxuXHRnZXQgdHJhY2sgKCkge1xuXHRcdHJldHVybiB0aGlzLl90cmFjaztcblx0fVxuXG5cdHNldCB0cmFjayAodmFsdWUpIHtcblx0XHRbLi4udGhpcy5tZWRpYS50ZXh0VHJhY2tzXS5mb3JFYWNoKGl0ZW0gPT4ge1xuXHRcdFx0aWYodmFsdWUgIT0gbnVsbCAmJiBpdGVtLmxhbmd1YWdlID09PSB2YWx1ZS5sYW5ndWFnZSkge1xuXHRcdFx0XHRpdGVtLm1vZGUgPSAnc2hvd2luZydcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGl0ZW0ubW9kZSA9ICdoaWRkZW4nO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdHRoaXMuX3RyYWNrID0gdmFsdWU7XG5cdFx0dGhpcy50cmlnZ2VyKCd0cmFja3NjaGFuZ2UnKTtcblx0fVxuXG5cdGdldCBwYXVzZWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWVkaWEucGF1c2VkO1xuXHR9XG5cblx0Z2V0IHZvbHVtZSAoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWVkaWEudm9sdW1lO1xuXHR9XG5cblx0c2V0IHZvbHVtZSAodmFsdWUpIHtcblx0XHRzdXBlci52b2x1bWUgPSB2YWx1ZTtcblx0XHRjb25zdCBwbGF5ZXIgPSB0aGlzLnBsYXllcjtcblx0XHRpZiAodmFsdWUgPiAxKSB7XG5cdFx0XHR0aGlzLm1lZGlhLnZvbHVtZSA9IDE7XG5cdFx0fSBlbHNlIGlmICh2YWx1ZSA8IHBsYXllci5vcHRpb25zLnZvbHVtZS5tdXRlbGltaXQpIHtcblx0XHRcdHRoaXMubWVkaWEudm9sdW1lID0gMDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5tZWRpYS52b2x1bWUgPSB2YWx1ZTtcblx0XHR9XG5cdFx0dGhpcy5tZWRpYS5tdXRlID0gKHZhbHVlIDwgcGxheWVyLm9wdGlvbnMudm9sdW1lLm11dGVsaW1pdCk7XG5cdH1cblxuXG5cdGdldCBidWZmZXJlZCAoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWVkaWEuYnVmZmVyZWQ7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybiB7VGltZVJhbmdlc31cblx0ICovXG5cdGdldCBzZWVrYWJsZSAoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWVkaWEuc2Vla2FibGU7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybiB7VGltZVJhbmdlc31cblx0ICovXG5cdGdldCBwbGF5ZWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWVkaWEucGxheWVkO1xuXHR9XG5cblx0Z2V0IHBsYXllZFBlcmNlbnRhZ2UoKSB7XG5cdFx0bGV0IHJlc3VsdCA9IDA7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBsYXllZC5sZW5ndGg7IGkrKykge1xuXHRcdFx0cmVzdWx0ICs9ICh0aGlzLnBsYXllZC5lbmQoaSkgLSB0aGlzLnBsYXllZC5zdGFydChpKSlcblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0IC8gdGhpcy5kdXJhdGlvbiAqIDEwMFxuXHR9XG5cblx0Z2V0IGN1cnJlbnRTcmMoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWVkaWEuY3VycmVudFNyYztcblx0fVxuXG5cdGluaXQgKCkge1xuXHRcdHN1cGVyLmluaXQoKTtcblx0XHRsZXQgZGZkID0gJC5EZWZlcnJlZCgpO1xuXHRcdHRoaXMuX2luaXRTdWJ0aXRsZXMoKTtcblx0XHR0aGlzLl9pbml0VmlkZW8oKVxuXHRcdFx0LmRvbmUoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLl9pbml0UmF0ZSgpO1xuXHRcdFx0XHR0aGlzLl9pbml0Vm9sdW1lKCk7XG5cdFx0XHRcdGRmZC5yZXNvbHZlKCk7XG5cdFx0XHR9KTtcblx0XHRyZXR1cm4gZGZkLnByb21pc2UoKTtcblx0fVxuXG5cdHN1cHBvcnRzRnVsbFNjcmVlbigpIHtcblx0XHRpZiAodHlwZW9mIHRoaXMubWVkaWEud2Via2l0RW50ZXJGdWxsU2NyZWVuID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRjb25zdCB1c2VyQWdlbnQgPSB3aW5kb3cubmF2aWdhdG9yICYmIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50IHx8ICcnO1xuXG5cdFx0XHQvLyBTZWVtcyB0byBiZSBicm9rZW4gaW4gQ2hyb21pdW0vQ2hyb21lICYmIFNhZmFyaSBpbiBMZW9wYXJkXG5cdFx0XHRpZiAoKC9BbmRyb2lkLykudGVzdCh1c2VyQWdlbnQpIHx8ICEoL0Nocm9tZXxNYWMgT1MgWCAxMC41LykudGVzdCh1c2VyQWdlbnQpKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRlbnRlckZ1bGxzY3JlZW4oKSB7XG5cdFx0Y29uc3QgdmlkZW8gPSB0aGlzLm1lZGlhO1xuXHRcdGlmICh2aWRlby5wYXVzZWQgJiYgdmlkZW8ubmV0d29ya1N0YXRlIDw9IHZpZGVvLkhBVkVfTUVUQURBVEEpIHtcblx0XHRcdC8vIGF0dGVtcHQgdG8gcHJpbWUgdGhlIHZpZGVvIGVsZW1lbnQgZm9yIHByb2dyYW1tYXRpYyBhY2Nlc3Ncblx0XHRcdC8vIHRoaXMgaXNuJ3QgbmVjZXNzYXJ5IG9uIHRoZSBkZXNrdG9wIGJ1dCBzaG91bGRuJ3QgaHVydFxuXHRcdFx0dGhpcy5wbGF5KCk7XG5cblx0XHRcdC8vIHBsYXlpbmcgYW5kIHBhdXNpbmcgc3luY2hyb25vdXNseSBkdXJpbmcgdGhlIHRyYW5zaXRpb24gdG8gZnVsbHNjcmVlblxuXHRcdFx0Ly8gY2FuIGdldCBpT1MgfjYuMSBkZXZpY2VzIGludG8gYSBwbGF5L3BhdXNlIGxvb3Bcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLnBhdXNlKCk7XG5cdFx0XHRcdHZpZGVvLndlYmtpdEVudGVyRnVsbFNjcmVlbigpO1xuXHRcdFx0fSwgMCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZpZGVvLndlYmtpdEVudGVyRnVsbFNjcmVlbigpO1xuXHRcdH1cblx0fVxuXG5cdGV4aXRGdWxsc2NyZWVuKCkge1xuXHRcdHRoaXMubWVkaWEud2Via2l0RXhpdEZ1bGxTY3JlZW4oKTtcblx0fVxuXG5cdHRvZ2dsZVBsYXkgKCkge1xuXHRcdGlmICghdGhpcy5tZWRpYS5wbGF5ZWQgfHwgdGhpcy5tZWRpYS5wYXVzZWQpIHtcblx0XHRcdHRoaXMucGxheSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnBhdXNlKCk7XG5cdFx0fVxuXHR9XG5cblx0cGxheSAoKSB7XG5cdFx0bGV0IGRmZCA9ICQuRGVmZXJyZWQoKTtcblx0XHRjb25zdCBwbGF5UHJvbWlzZSA9IHRoaXMubWVkaWEucGxheSgpO1xuXG5cdFx0aWYocGxheVByb21pc2UgIT0gbnVsbCkge1xuXHRcdFx0cGxheVByb21pc2UudGhlbihmdW5jdGlvbigpIHtcblx0XHRcdFx0ZGZkLnJlc29sdmUoKTtcblx0XHRcdH0pXG5cdFx0fSBlbHNlIHtcblx0XHRcdGRmZC5yZXNvbHZlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBkZmQucHJvbWlzZSgpO1xuXHR9XG5cblx0cGF1c2UgKCkge1xuXHRcdGxldCBkZmQgPSAkLkRlZmVycmVkKCk7XG5cdFx0Y29uc3QgcGF1c2VQcm9taXNlID0gdGhpcy5tZWRpYS5wYXVzZSgpO1xuXG5cdFx0aWYocGF1c2VQcm9taXNlICE9IG51bGwpIHtcblx0XHRcdHBhdXNlUHJvbWlzZS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRkZmQucmVzb2x2ZSgpO1xuXHRcdFx0fSlcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZGZkLnJlc29sdmUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIGRmZC5wcm9taXNlKCk7XG5cdH1cblxuXHRsb2FkKCkge1xuXHRcdHJldHVybiB0aGlzLm1lZGlhLmxvYWQoKVxuXHR9XG5cblx0X2luaXRTdWJ0aXRsZXMgKCkge1xuXHRcdGxldCBfc2VsZiA9IHRoaXM7XG5cdFx0dGhpcy5lbGVtZW50LmNoaWxkcmVuKCd0cmFja1traW5kPVwic3VidGl0bGVzXCJdJykuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0XHRjb25zdCBsYW5ndWFnZSA9ICQodGhpcykuYXR0cignc3JjbGFuZycpO1xuXHRcdFx0Y29uc3QgdGl0bGUgPSAkKHRoaXMpLmF0dHIoJ2xhYmVsJyk7XG5cdFx0XHRjb25zdCBzcmMgPSAkKHRoaXMpLmF0dHIoJ3NyYycpO1xuXHRcdFx0aWYgKHRpdGxlLmxlbmd0aCA+IDAgJiYgc3JjLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0X3NlbGYuc3VidGl0bGVzLnB1c2goe1xuXHRcdFx0XHRcdHRpdGxlIDogdGl0bGUsXG5cdFx0XHRcdFx0bmFtZSA6IGxhbmd1YWdlLFxuXHRcdFx0XHRcdGxhbmd1YWdlIDogbGFuZ3VhZ2Vcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRfaW5pdFZpZGVvICgpIHtcblx0XHRsZXQgZGZkID0gJC5EZWZlcnJlZCgpO1xuXHRcdGlmICh0aGlzLm1lZGlhLnJlYWR5U3RhdGUgPiBIVE1MTWVkaWFFbGVtZW50LkhBVkVfTk9USElORykge1xuXHRcdFx0ZGZkLnJlc29sdmUoKVxuXHRcdFx0dGhpcy5fdGV4dFRyYWNrc0hhY2soKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JCh0aGlzLm1lZGlhKS5vbmUoJ2xvYWRlZG1ldGFkYXRhJywgKGUpID0+IHtcblx0XHRcdFx0ZGZkLnJlc29sdmUoKVxuXHRcdFx0XHR0aGlzLl90ZXh0VHJhY2tzSGFjaygpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdGRmZC5ub3RpZnkoKTtcblx0XHRyZXR1cm4gZGZkLnByb21pc2UoKTtcblx0fVxuXG5cdF90ZXh0VHJhY2tzSGFjayAoKSB7XG5cblx0XHQvLyBUaGlzIGlzIGdlbmVyYWxseSBmb3IgRmlyZWZveCBvbmx5XG5cdFx0Ly8gYmVjYXVzZSBpdCBzb21laG93IHJlc2V0cyB0cmFjayBsaXN0XG5cdFx0Ly8gZm9yIHZpZGVvIGVsZW1lbnQgYWZ0ZXIgRE9NIG1hbmlwdWxhdGlvbi5cblxuXHRcdGlmICh0aGlzLm1lZGlhLnRleHRUcmFja3MubGVuZ3RoID09PSAwICYmIHRoaXMuc3VidGl0bGVzLmxlbmd0aCA+IDApIHtcblx0XHRcdHRoaXMuZWxlbWVudC5jaGlsZHJlbigndHJhY2tba2luZD1cInN1YnRpdGxlc1wiXScpLnJlbW92ZSgpO1xuXHRcdFx0Zm9yICh2YXIgaSBpbiB0aGlzLnN1YnRpdGxlcykge1xuXHRcdFx0XHRpZiAodGhpcy5zdWJ0aXRsZXMuaGFzT3duUHJvcGVydHkoaSkpIHtcblx0XHRcdFx0XHR0aGlzLmVsZW1lbnRcblx0XHRcdFx0XHRcdC5hcHBlbmQoJCgnPHRyYWNrLz4nKVxuXHRcdFx0XHRcdFx0XHQuYXR0cignbGFiZWwnLCB0aGlzLnN1YnRpdGxlc1sgaSBdLnRpdGxlKVxuXHRcdFx0XHRcdFx0XHQuYXR0cignc3JjJywgdGhpcy5zdWJ0aXRsZXNbIGkgXS5zcmMpXG5cdFx0XHRcdFx0XHRcdC5hdHRyKCdzcmNsYW5nJywgdGhpcy5zdWJ0aXRsZXNbIGkgXS5sYW5ndWFnZSlcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ2lkJywgdGhpcy5zdWJ0aXRsZXNbIGkgXS5sYW5ndWFnZSlcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ2tpbmQnLCAnc3VidGl0bGVzJykpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cbn1cblxuXG4vKipcbiAqIE1pbiByYXRlIGZvciBhbmRyb2lkIGFuZCBpb3NcbiAqL1xuSHRtbDUuTU9CSUxFX01JTl9SQVRFID0gMC41O1xuXG4vKipcbiAqIE1heCByYXRlIGZvciBhbmRyb2lkIGFuZCBpb3NcbiAqL1xuSHRtbDUuTU9CSUxFX01BWF9SQVRFID0gMlxuXG5cbkh0bWw1LlNBRkFSSV9NSU5fUkFURSA9IDAuNTtcblxuSHRtbDUuU0FGQVJJX01BWF9SQVRFID0gMjtcblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdIdG1sNScsIEh0bWw1KTtcbmV4cG9ydCBkZWZhdWx0IEh0bWw1O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2VudGl0eS9IdG1sNS5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50cy9Db21wb25lbnQnO1xuaW1wb3J0IENvb2tpZSBmcm9tICcuLi91dGlscy9jb29raWUnO1xuaW1wb3J0IE1lZGlhRXJyb3IgZnJvbSAnLi4vTWVkaWFFcnJvcic7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5jbGFzcyBFbnRpdHkgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXHRcdHRoaXMuX3RyaWdnZXJTdGFjayA9IFtdO1xuXHRcdHRoaXMuX3N0b3BMaXN0ZW4gPSBmYWxzZTtcblxuXHRcdGlmICh0aGlzLnBsYXllci5vcHRpb25zLnNyYyA9PSBudWxsKSB7XG5cdFx0XHR0aGlzLnBsYXllci5lcnJvciA9IG5ldyBNZWRpYUVycm9yKCfQktC40LTQtdC+0YTQsNC50Lsg0L3QtSDQvdCw0LnQtNC10L0uJyk7XG5cdFx0fVxuXG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHR0cmlnZ2VyKC4uLmFyZ3MpIHtcblx0XHRpZighdGhpcy5fc3RvcExpc3Rlbikge1xuXHRcdFx0dGhpcy5fdHJpZ2dlclN0YWNrLnB1c2goYXJncyk7XG5cdFx0fVxuXHRcdHN1cGVyLnRyaWdnZXIoLi4uYXJncyk7XG5cdH1cblxuXHRpbml0KCkge1xuXHRcdHRoaXMuX3N0b3BMaXN0ZW4gPSB0cnVlO1xuXHRcdHRoaXMuX3RyaWdnZXJTdGFjay5mb3JFYWNoKGFyZ3MgPT4ge1xuXHRcdFx0dGhpcy50cmlnZ2VyKC4uLmFyZ3MpO1xuXHRcdH0pO1xuXHR9XG5cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50ID0gJCgnPGRpdiAvPicpO1xuXHR9XG5cblx0c2V0IHBvc3Rlcih1cmwpIHtcblx0XHR0aGlzLl9wb3N0ZXIgPSB1cmw7XG5cdFx0dGhpcy50cmlnZ2VyKCdwb3N0ZXJjaGFuZ2UnLCB7IHVybCB9KTtcblx0fVxuXG5cblx0Z2V0IHBvc3RlcigpIHtcblx0XHRyZXR1cm4gdGhpcy5fcG9zdGVyO1xuXHR9XG5cblx0Z2V0IGN1cnJlbnRUaW1lKCkge1xuXHRcdHJldHVyblxuXHR9XG5cblx0c2V0IGN1cnJlbnRUaW1lKHZhbHVlKSB7XG5cblx0fVxuXG5cdGdldCBkdXJhdGlvbigpIHtcblx0XHRyZXR1cm5cblx0fVxuXG5cdHNldCBtdXRlZCh2YWx1ZSkge1xuXG5cdH1cblxuXHRnZXQgbXV0ZWQoKSB7XG5cblx0fVxuXG5cdGdldCBoZWlnaHQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudC5pbm5lckhlaWdodCgpXG5cdH1cblxuXHRnZXQgd2lkdGgoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudC53aWR0aCgpXG5cdH1cblxuXHRzZXQgcmF0ZU1heCh2YWx1ZSkge1xuXHRcdHRoaXMuX3JhdGVNYXggPSB2YWx1ZTtcblx0fVxuXG5cdHNldCByYXRlTWluKHZhbHVlKSB7XG5cdFx0dGhpcy5fcmF0ZU1pbiA9IHZhbHVlO1xuXHR9XG5cblx0Z2V0IHJhdGVNYXgoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3JhdGVNYXggfHwgdGhpcy5wbGF5ZXIub3B0aW9ucy5yYXRlLm1heDtcblxuXHR9XG5cblx0Z2V0IHJhdGVNaW4oKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3JhdGVNaW4gfHwgdGhpcy5wbGF5ZXIub3B0aW9ucy5yYXRlLm1pbjtcblx0fVxuXG5cdGdldCByYXRlKCkge1xuXHR9XG5cblx0c2V0IHJhdGUodmFsdWUpIHtcblx0XHRpZih2YWx1ZSA+IHRoaXMucmF0ZU1heCB8fCB2YWx1ZSA8IHRoaXMucmF0ZU1pbikgcmV0dXJuO1xuXHRcdENvb2tpZS5zZXQoJ3JhdGUnLCB2YWx1ZSk7XG5cdH1cblxuXHRpbmNyZWFzZVJhdGUoKSB7XG5cdFx0dGhpcy5yYXRlICs9IHRoaXMucGxheWVyLm9wdGlvbnMucmF0ZS5zdGVwO1xuXHR9XG5cblx0ZGVjcmVhc2VSYXRlKCkge1xuXHRcdHRoaXMucmF0ZSAtPSB0aGlzLnBsYXllci5vcHRpb25zLnJhdGUuc3RlcDtcblx0fVxuXG5cdHNldCBwbGF5YmFja1F1YWxpdHkobmFtZSkge1xuXHRcdGNvbnN0IGxldmVscyA9IHRoaXMuZ2V0QXZhaWxhYmxlUXVhbGl0eUxldmVscygpO1xuXHRcdGlmKCFsZXZlbHMuc29tZShvYmogPT4gbmFtZSBpbiBvYmopKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHR9XG5cblx0Z2V0IHBsYXliYWNrUXVhbGl0eSgpIHtcblxuXHR9XG5cblx0Z2V0IHBhdXNlZCgpIHtcblxuXHR9XG5cblx0Z2V0IHBsYXllZCgpIHtcblxuXHR9XG5cblx0Z2V0IGRlZmF1bHRSYXRlKCkge1xuXHRcdHJldHVybiBDb29raWUuZ2V0KCdyYXRlJykgfHwgdGhpcy5wbGF5ZXIub3B0aW9ucy5yYXRlLmRlZmF1bHRcblx0fVxuXG5cdGdldCBkZWZhdWx0Vm9sdW1lICgpIHtcblx0XHRyZXR1cm4gQ29va2llLmdldCgndm9sdW1lJykgfHwgdGhpcy5wbGF5ZXIub3B0aW9ucy52b2x1bWUuZGVmYXVsdDtcblx0fVxuXG5cdHNldCB2b2x1bWUodmFsdWUpIHtcblx0XHRjb25zdCBwbGF5ZXIgPSB0aGlzLnBsYXllcjtcblx0XHRpZih2YWx1ZSA8IDEgJiYgdmFsdWUgPiBwbGF5ZXIub3B0aW9ucy52b2x1bWUubXV0ZWxpbWl0KSB7XG5cdFx0XHRDb29raWUuc2V0KCd2b2x1bWUnLCB2YWx1ZSk7XG5cdFx0fVxuXHR9XG5cblx0c2V0IHNyYyAodmFsdWUpIHtcblxuXHR9XG5cblx0Z2V0IHNyYygpIHtcblxuXHR9XG5cblx0c3VwcG9ydHNGdWxsU2NyZWVuKCkge1xuXG5cdH1cblxuXHRwbGF5KCkge1xuXG5cdH1cblxuXHRwYXVzZSAoKSB7XG5cblx0fVxuXG5cdGxvYWQoKSB7XG5cdH1cblxuXHR0b2dnbGVQbGF5ICgpIHtcblx0XHRpZiAodGhpcy5wYXVzZWQpIHtcblx0XHRcdHRoaXMucGxheSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnBhdXNlKCk7XG5cdFx0fVxuXHR9XG5cblx0X2luaXRSYXRlICgpIHtcblx0XHR0aGlzLnJhdGUgPSB0aGlzLmRlZmF1bHRSYXRlO1xuXHR9XG5cblx0X2luaXRWb2x1bWUgKCkge1xuXHRcdHRoaXMudm9sdW1lID0gdGhpcy5kZWZhdWx0Vm9sdW1lO1xuXHR9XG5cbn1cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnRW50aXR5JywgRW50aXR5KTtcbmV4cG9ydCBkZWZhdWx0IEVudGl0eTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9lbnRpdHkvRW50aXR5LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZGVmaW5lID0gcmVxdWlyZSgnZGVmaW5lLXByb3BlcnRpZXMnKTtcbnZhciBFUyA9IHJlcXVpcmUoJ2VzLWFic3RyYWN0L2VzNicpO1xuXG52YXIgaW1wbGVtZW50YXRpb24gPSByZXF1aXJlKCcuL2ltcGxlbWVudGF0aW9uJyk7XG52YXIgZ2V0UG9seWZpbGwgPSByZXF1aXJlKCcuL3BvbHlmaWxsJyk7XG52YXIgc2hpbSA9IHJlcXVpcmUoJy4vc2hpbScpO1xuXG52YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG5cbnZhciBwb2x5ZmlsbCA9IGdldFBvbHlmaWxsKCk7XG5cbnZhciBib3VuZEZpbmRTaGltID0gZnVuY3Rpb24gZmluZChhcnJheSwgcHJlZGljYXRlKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcblx0RVMuUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcnJheSk7XG5cdHZhciBhcmdzID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuXHRyZXR1cm4gcG9seWZpbGwuYXBwbHkoYXJyYXksIGFyZ3MpO1xufTtcblxuZGVmaW5lKGJvdW5kRmluZFNoaW0sIHtcblx0Z2V0UG9seWZpbGw6IGdldFBvbHlmaWxsLFxuXHRpbXBsZW1lbnRhdGlvbjogaW1wbGVtZW50YXRpb24sXG5cdHNoaW06IHNoaW1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJvdW5kRmluZFNoaW07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYXJyYXkucHJvdG90eXBlLmZpbmQvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIGtleXMgPSByZXF1aXJlKCdvYmplY3Qta2V5cycpO1xudmFyIGhhc1N5bWJvbHMgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBTeW1ib2woJ2ZvbycpID09PSAnc3ltYm9sJztcblxudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbnZhciBjb25jYXQgPSBBcnJheS5wcm90b3R5cGUuY29uY2F0O1xudmFyIG9yaWdEZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxudmFyIGlzRnVuY3Rpb24gPSBmdW5jdGlvbiAoZm4pIHtcblx0cmV0dXJuIHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJyAmJiB0b1N0ci5jYWxsKGZuKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbn07XG5cbnZhciBhcmVQcm9wZXJ0eURlc2NyaXB0b3JzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgb2JqID0ge307XG5cdHRyeSB7XG5cdFx0b3JpZ0RlZmluZVByb3BlcnR5KG9iaiwgJ3gnLCB7IGVudW1lcmFibGU6IGZhbHNlLCB2YWx1ZTogb2JqIH0pO1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFycywgbm8tcmVzdHJpY3RlZC1zeW50YXhcblx0XHRmb3IgKHZhciBfIGluIG9iaikgeyAvLyBqc2NzOmlnbm9yZSBkaXNhbGxvd1VudXNlZFZhcmlhYmxlc1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRyZXR1cm4gb2JqLnggPT09IG9iajtcblx0fSBjYXRjaCAoZSkgeyAvKiB0aGlzIGlzIElFIDguICovXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xudmFyIHN1cHBvcnRzRGVzY3JpcHRvcnMgPSBvcmlnRGVmaW5lUHJvcGVydHkgJiYgYXJlUHJvcGVydHlEZXNjcmlwdG9yc1N1cHBvcnRlZCgpO1xuXG52YXIgZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lLCB2YWx1ZSwgcHJlZGljYXRlKSB7XG5cdGlmIChuYW1lIGluIG9iamVjdCAmJiAoIWlzRnVuY3Rpb24ocHJlZGljYXRlKSB8fCAhcHJlZGljYXRlKCkpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGlmIChzdXBwb3J0c0Rlc2NyaXB0b3JzKSB7XG5cdFx0b3JpZ0RlZmluZVByb3BlcnR5KG9iamVjdCwgbmFtZSwge1xuXHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdFx0ZW51bWVyYWJsZTogZmFsc2UsXG5cdFx0XHR2YWx1ZTogdmFsdWUsXG5cdFx0XHR3cml0YWJsZTogdHJ1ZVxuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdG9iamVjdFtuYW1lXSA9IHZhbHVlO1xuXHR9XG59O1xuXG52YXIgZGVmaW5lUHJvcGVydGllcyA9IGZ1bmN0aW9uIChvYmplY3QsIG1hcCkge1xuXHR2YXIgcHJlZGljYXRlcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyID8gYXJndW1lbnRzWzJdIDoge307XG5cdHZhciBwcm9wcyA9IGtleXMobWFwKTtcblx0aWYgKGhhc1N5bWJvbHMpIHtcblx0XHRwcm9wcyA9IGNvbmNhdC5jYWxsKHByb3BzLCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG1hcCkpO1xuXHR9XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpICs9IDEpIHtcblx0XHRkZWZpbmVQcm9wZXJ0eShvYmplY3QsIHByb3BzW2ldLCBtYXBbcHJvcHNbaV1dLCBwcmVkaWNhdGVzW3Byb3BzW2ldXSk7XG5cdH1cbn07XG5cbmRlZmluZVByb3BlcnRpZXMuc3VwcG9ydHNEZXNjcmlwdG9ycyA9ICEhc3VwcG9ydHNEZXNjcmlwdG9ycztcblxubW9kdWxlLmV4cG9ydHMgPSBkZWZpbmVQcm9wZXJ0aWVzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2RlZmluZS1wcm9wZXJ0aWVzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcbnZhciBpc0FyZ3MgPSByZXF1aXJlKCcuL2lzQXJndW1lbnRzJyk7XG5cbnZhciBvcmlnS2V5cyA9IE9iamVjdC5rZXlzO1xudmFyIGtleXNTaGltID0gb3JpZ0tleXMgPyBmdW5jdGlvbiBrZXlzKG8pIHsgcmV0dXJuIG9yaWdLZXlzKG8pOyB9IDogcmVxdWlyZSgnLi9pbXBsZW1lbnRhdGlvbicpO1xuXG52YXIgb3JpZ2luYWxLZXlzID0gT2JqZWN0LmtleXM7XG5cbmtleXNTaGltLnNoaW0gPSBmdW5jdGlvbiBzaGltT2JqZWN0S2V5cygpIHtcblx0aWYgKE9iamVjdC5rZXlzKSB7XG5cdFx0dmFyIGtleXNXb3Jrc1dpdGhBcmd1bWVudHMgPSAoZnVuY3Rpb24gKCkge1xuXHRcdFx0Ly8gU2FmYXJpIDUuMCBidWdcblx0XHRcdHZhciBhcmdzID0gT2JqZWN0LmtleXMoYXJndW1lbnRzKTtcblx0XHRcdHJldHVybiBhcmdzICYmIGFyZ3MubGVuZ3RoID09PSBhcmd1bWVudHMubGVuZ3RoO1xuXHRcdH0oMSwgMikpO1xuXHRcdGlmICgha2V5c1dvcmtzV2l0aEFyZ3VtZW50cykge1xuXHRcdFx0T2JqZWN0LmtleXMgPSBmdW5jdGlvbiBrZXlzKG9iamVjdCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGZ1bmMtbmFtZS1tYXRjaGluZ1xuXHRcdFx0XHRpZiAoaXNBcmdzKG9iamVjdCkpIHtcblx0XHRcdFx0XHRyZXR1cm4gb3JpZ2luYWxLZXlzKHNsaWNlLmNhbGwob2JqZWN0KSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIG9yaWdpbmFsS2V5cyhvYmplY3QpO1xuXHRcdFx0fTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0T2JqZWN0LmtleXMgPSBrZXlzU2hpbTtcblx0fVxuXHRyZXR1cm4gT2JqZWN0LmtleXMgfHwga2V5c1NoaW07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGtleXNTaGltO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L29iamVjdC1rZXlzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNBcmd1bWVudHModmFsdWUpIHtcblx0dmFyIHN0ciA9IHRvU3RyLmNhbGwodmFsdWUpO1xuXHR2YXIgaXNBcmdzID0gc3RyID09PSAnW29iamVjdCBBcmd1bWVudHNdJztcblx0aWYgKCFpc0FyZ3MpIHtcblx0XHRpc0FyZ3MgPSBzdHIgIT09ICdbb2JqZWN0IEFycmF5XScgJiZcblx0XHRcdHZhbHVlICE9PSBudWxsICYmXG5cdFx0XHR0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmXG5cdFx0XHR0eXBlb2YgdmFsdWUubGVuZ3RoID09PSAnbnVtYmVyJyAmJlxuXHRcdFx0dmFsdWUubGVuZ3RoID49IDAgJiZcblx0XHRcdHRvU3RyLmNhbGwodmFsdWUuY2FsbGVlKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcblx0fVxuXHRyZXR1cm4gaXNBcmdzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9vYmplY3Qta2V5cy9pc0FyZ3VtZW50cy5qc1xuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIga2V5c1NoaW07XG5pZiAoIU9iamVjdC5rZXlzKSB7XG5cdC8vIG1vZGlmaWVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2VzLXNoaW1zL2VzNS1zaGltXG5cdHZhciBoYXMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXHR2YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXHR2YXIgaXNBcmdzID0gcmVxdWlyZSgnLi9pc0FyZ3VtZW50cycpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGdsb2JhbC1yZXF1aXJlXG5cdHZhciBpc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXHR2YXIgaGFzRG9udEVudW1CdWcgPSAhaXNFbnVtZXJhYmxlLmNhbGwoeyB0b1N0cmluZzogbnVsbCB9LCAndG9TdHJpbmcnKTtcblx0dmFyIGhhc1Byb3RvRW51bUJ1ZyA9IGlzRW51bWVyYWJsZS5jYWxsKGZ1bmN0aW9uICgpIHt9LCAncHJvdG90eXBlJyk7XG5cdHZhciBkb250RW51bXMgPSBbXG5cdFx0J3RvU3RyaW5nJyxcblx0XHQndG9Mb2NhbGVTdHJpbmcnLFxuXHRcdCd2YWx1ZU9mJyxcblx0XHQnaGFzT3duUHJvcGVydHknLFxuXHRcdCdpc1Byb3RvdHlwZU9mJyxcblx0XHQncHJvcGVydHlJc0VudW1lcmFibGUnLFxuXHRcdCdjb25zdHJ1Y3Rvcidcblx0XTtcblx0dmFyIGVxdWFsc0NvbnN0cnVjdG9yUHJvdG90eXBlID0gZnVuY3Rpb24gKG8pIHtcblx0XHR2YXIgY3RvciA9IG8uY29uc3RydWN0b3I7XG5cdFx0cmV0dXJuIGN0b3IgJiYgY3Rvci5wcm90b3R5cGUgPT09IG87XG5cdH07XG5cdHZhciBleGNsdWRlZEtleXMgPSB7XG5cdFx0JGFwcGxpY2F0aW9uQ2FjaGU6IHRydWUsXG5cdFx0JGNvbnNvbGU6IHRydWUsXG5cdFx0JGV4dGVybmFsOiB0cnVlLFxuXHRcdCRmcmFtZTogdHJ1ZSxcblx0XHQkZnJhbWVFbGVtZW50OiB0cnVlLFxuXHRcdCRmcmFtZXM6IHRydWUsXG5cdFx0JGlubmVySGVpZ2h0OiB0cnVlLFxuXHRcdCRpbm5lcldpZHRoOiB0cnVlLFxuXHRcdCRvbm1vemZ1bGxzY3JlZW5jaGFuZ2U6IHRydWUsXG5cdFx0JG9ubW96ZnVsbHNjcmVlbmVycm9yOiB0cnVlLFxuXHRcdCRvdXRlckhlaWdodDogdHJ1ZSxcblx0XHQkb3V0ZXJXaWR0aDogdHJ1ZSxcblx0XHQkcGFnZVhPZmZzZXQ6IHRydWUsXG5cdFx0JHBhZ2VZT2Zmc2V0OiB0cnVlLFxuXHRcdCRwYXJlbnQ6IHRydWUsXG5cdFx0JHNjcm9sbExlZnQ6IHRydWUsXG5cdFx0JHNjcm9sbFRvcDogdHJ1ZSxcblx0XHQkc2Nyb2xsWDogdHJ1ZSxcblx0XHQkc2Nyb2xsWTogdHJ1ZSxcblx0XHQkc2VsZjogdHJ1ZSxcblx0XHQkd2Via2l0SW5kZXhlZERCOiB0cnVlLFxuXHRcdCR3ZWJraXRTdG9yYWdlSW5mbzogdHJ1ZSxcblx0XHQkd2luZG93OiB0cnVlXG5cdH07XG5cdHZhciBoYXNBdXRvbWF0aW9uRXF1YWxpdHlCdWcgPSAoZnVuY3Rpb24gKCkge1xuXHRcdC8qIGdsb2JhbCB3aW5kb3cgKi9cblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdFx0Zm9yICh2YXIgayBpbiB3aW5kb3cpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGlmICghZXhjbHVkZWRLZXlzWyckJyArIGtdICYmIGhhcy5jYWxsKHdpbmRvdywgaykgJiYgd2luZG93W2tdICE9PSBudWxsICYmIHR5cGVvZiB3aW5kb3dba10gPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdGVxdWFsc0NvbnN0cnVjdG9yUHJvdG90eXBlKHdpbmRvd1trXSk7XG5cdFx0XHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0oKSk7XG5cdHZhciBlcXVhbHNDb25zdHJ1Y3RvclByb3RvdHlwZUlmTm90QnVnZ3kgPSBmdW5jdGlvbiAobykge1xuXHRcdC8qIGdsb2JhbCB3aW5kb3cgKi9cblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIWhhc0F1dG9tYXRpb25FcXVhbGl0eUJ1Zykge1xuXHRcdFx0cmV0dXJuIGVxdWFsc0NvbnN0cnVjdG9yUHJvdG90eXBlKG8pO1xuXHRcdH1cblx0XHR0cnkge1xuXHRcdFx0cmV0dXJuIGVxdWFsc0NvbnN0cnVjdG9yUHJvdG90eXBlKG8pO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH07XG5cblx0a2V5c1NoaW0gPSBmdW5jdGlvbiBrZXlzKG9iamVjdCkge1xuXHRcdHZhciBpc09iamVjdCA9IG9iamVjdCAhPT0gbnVsbCAmJiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0Jztcblx0XHR2YXIgaXNGdW5jdGlvbiA9IHRvU3RyLmNhbGwob2JqZWN0KSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcblx0XHR2YXIgaXNBcmd1bWVudHMgPSBpc0FyZ3Mob2JqZWN0KTtcblx0XHR2YXIgaXNTdHJpbmcgPSBpc09iamVjdCAmJiB0b1N0ci5jYWxsKG9iamVjdCkgPT09ICdbb2JqZWN0IFN0cmluZ10nO1xuXHRcdHZhciB0aGVLZXlzID0gW107XG5cblx0XHRpZiAoIWlzT2JqZWN0ICYmICFpc0Z1bmN0aW9uICYmICFpc0FyZ3VtZW50cykge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmtleXMgY2FsbGVkIG9uIGEgbm9uLW9iamVjdCcpO1xuXHRcdH1cblxuXHRcdHZhciBza2lwUHJvdG8gPSBoYXNQcm90b0VudW1CdWcgJiYgaXNGdW5jdGlvbjtcblx0XHRpZiAoaXNTdHJpbmcgJiYgb2JqZWN0Lmxlbmd0aCA+IDAgJiYgIWhhcy5jYWxsKG9iamVjdCwgMCkpIHtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgb2JqZWN0Lmxlbmd0aDsgKytpKSB7XG5cdFx0XHRcdHRoZUtleXMucHVzaChTdHJpbmcoaSkpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChpc0FyZ3VtZW50cyAmJiBvYmplY3QubGVuZ3RoID4gMCkge1xuXHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBvYmplY3QubGVuZ3RoOyArK2opIHtcblx0XHRcdFx0dGhlS2V5cy5wdXNoKFN0cmluZyhqKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGZvciAodmFyIG5hbWUgaW4gb2JqZWN0KSB7XG5cdFx0XHRcdGlmICghKHNraXBQcm90byAmJiBuYW1lID09PSAncHJvdG90eXBlJykgJiYgaGFzLmNhbGwob2JqZWN0LCBuYW1lKSkge1xuXHRcdFx0XHRcdHRoZUtleXMucHVzaChTdHJpbmcobmFtZSkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGhhc0RvbnRFbnVtQnVnKSB7XG5cdFx0XHR2YXIgc2tpcENvbnN0cnVjdG9yID0gZXF1YWxzQ29uc3RydWN0b3JQcm90b3R5cGVJZk5vdEJ1Z2d5KG9iamVjdCk7XG5cblx0XHRcdGZvciAodmFyIGsgPSAwOyBrIDwgZG9udEVudW1zLmxlbmd0aDsgKytrKSB7XG5cdFx0XHRcdGlmICghKHNraXBDb25zdHJ1Y3RvciAmJiBkb250RW51bXNba10gPT09ICdjb25zdHJ1Y3RvcicpICYmIGhhcy5jYWxsKG9iamVjdCwgZG9udEVudW1zW2tdKSkge1xuXHRcdFx0XHRcdHRoZUtleXMucHVzaChkb250RW51bXNba10pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiB0aGVLZXlzO1xuXHR9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBrZXlzU2hpbTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9vYmplY3Qta2V5cy9pbXBsZW1lbnRhdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZXMyMDE1Jyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZXMtYWJzdHJhY3QvZXM2LmpzXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBoYXMgPSByZXF1aXJlKCdoYXMnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJ2VzLXRvLXByaW1pdGl2ZS9lczYnKTtcbnZhciBrZXlzID0gcmVxdWlyZSgnb2JqZWN0LWtleXMnKTtcblxudmFyIEdldEludHJpbnNpYyA9IHJlcXVpcmUoJy4vR2V0SW50cmluc2ljJyk7XG5cbnZhciAkVHlwZUVycm9yID0gR2V0SW50cmluc2ljKCclVHlwZUVycm9yJScpO1xudmFyICRTeW50YXhFcnJvciA9IEdldEludHJpbnNpYygnJVN5bnRheEVycm9yJScpO1xudmFyICRBcnJheSA9IEdldEludHJpbnNpYygnJUFycmF5JScpO1xudmFyICRTdHJpbmcgPSBHZXRJbnRyaW5zaWMoJyVTdHJpbmclJyk7XG52YXIgJE9iamVjdCA9IEdldEludHJpbnNpYygnJU9iamVjdCUnKTtcbnZhciAkTnVtYmVyID0gR2V0SW50cmluc2ljKCclTnVtYmVyJScpO1xudmFyICRTeW1ib2wgPSBHZXRJbnRyaW5zaWMoJyVTeW1ib2wlJywgdHJ1ZSk7XG52YXIgJFJlZ0V4cCA9IEdldEludHJpbnNpYygnJVJlZ0V4cCUnKTtcblxudmFyIGhhc1N5bWJvbHMgPSAhISRTeW1ib2w7XG5cbnZhciBhc3NlcnRSZWNvcmQgPSByZXF1aXJlKCcuL2hlbHBlcnMvYXNzZXJ0UmVjb3JkJyk7XG52YXIgJGlzTmFOID0gcmVxdWlyZSgnLi9oZWxwZXJzL2lzTmFOJyk7XG52YXIgJGlzRmluaXRlID0gcmVxdWlyZSgnLi9oZWxwZXJzL2lzRmluaXRlJyk7XG52YXIgTUFYX1NBRkVfSU5URUdFUiA9ICROdW1iZXIuTUFYX1NBRkVfSU5URUdFUiB8fCBNYXRoLnBvdygyLCA1MykgLSAxO1xuXG52YXIgYXNzaWduID0gcmVxdWlyZSgnLi9oZWxwZXJzL2Fzc2lnbicpO1xudmFyIHNpZ24gPSByZXF1aXJlKCcuL2hlbHBlcnMvc2lnbicpO1xudmFyIG1vZCA9IHJlcXVpcmUoJy4vaGVscGVycy9tb2QnKTtcbnZhciBpc1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vaGVscGVycy9pc1ByaW1pdGl2ZScpO1xudmFyIHBhcnNlSW50ZWdlciA9IHBhcnNlSW50O1xudmFyIGJpbmQgPSByZXF1aXJlKCdmdW5jdGlvbi1iaW5kJyk7XG52YXIgYXJyYXlTbGljZSA9IGJpbmQuY2FsbChGdW5jdGlvbi5jYWxsLCAkQXJyYXkucHJvdG90eXBlLnNsaWNlKTtcbnZhciBzdHJTbGljZSA9IGJpbmQuY2FsbChGdW5jdGlvbi5jYWxsLCAkU3RyaW5nLnByb3RvdHlwZS5zbGljZSk7XG52YXIgaXNCaW5hcnkgPSBiaW5kLmNhbGwoRnVuY3Rpb24uY2FsbCwgJFJlZ0V4cC5wcm90b3R5cGUudGVzdCwgL14wYlswMV0rJC9pKTtcbnZhciBpc09jdGFsID0gYmluZC5jYWxsKEZ1bmN0aW9uLmNhbGwsICRSZWdFeHAucHJvdG90eXBlLnRlc3QsIC9eMG9bMC03XSskL2kpO1xudmFyIHJlZ2V4RXhlYyA9IGJpbmQuY2FsbChGdW5jdGlvbi5jYWxsLCAkUmVnRXhwLnByb3RvdHlwZS5leGVjKTtcbnZhciBub25XUyA9IFsnXFx1MDA4NScsICdcXHUyMDBiJywgJ1xcdWZmZmUnXS5qb2luKCcnKTtcbnZhciBub25XU3JlZ2V4ID0gbmV3ICRSZWdFeHAoJ1snICsgbm9uV1MgKyAnXScsICdnJyk7XG52YXIgaGFzTm9uV1MgPSBiaW5kLmNhbGwoRnVuY3Rpb24uY2FsbCwgJFJlZ0V4cC5wcm90b3R5cGUudGVzdCwgbm9uV1NyZWdleCk7XG52YXIgaW52YWxpZEhleExpdGVyYWwgPSAvXlstK10weFswLTlhLWZdKyQvaTtcbnZhciBpc0ludmFsaWRIZXhMaXRlcmFsID0gYmluZC5jYWxsKEZ1bmN0aW9uLmNhbGwsICRSZWdFeHAucHJvdG90eXBlLnRlc3QsIGludmFsaWRIZXhMaXRlcmFsKTtcbnZhciAkY2hhckNvZGVBdCA9IGJpbmQuY2FsbChGdW5jdGlvbi5jYWxsLCAkU3RyaW5nLnByb3RvdHlwZS5jaGFyQ29kZUF0KTtcblxudmFyIHRvU3RyID0gYmluZC5jYWxsKEZ1bmN0aW9uLmNhbGwsIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcpO1xuXG52YXIgJE51bWJlclZhbHVlT2YgPSBiaW5kLmNhbGwoRnVuY3Rpb24uY2FsbCwgR2V0SW50cmluc2ljKCclTnVtYmVyUHJvdG90eXBlJScpLnZhbHVlT2YpO1xudmFyICRCb29sZWFuVmFsdWVPZiA9IGJpbmQuY2FsbChGdW5jdGlvbi5jYWxsLCBHZXRJbnRyaW5zaWMoJyVCb29sZWFuUHJvdG90eXBlJScpLnZhbHVlT2YpO1xudmFyICRTdHJpbmdWYWx1ZU9mID0gYmluZC5jYWxsKEZ1bmN0aW9uLmNhbGwsIEdldEludHJpbnNpYygnJVN0cmluZ1Byb3RvdHlwZSUnKS52YWx1ZU9mKTtcbnZhciAkRGF0ZVZhbHVlT2YgPSBiaW5kLmNhbGwoRnVuY3Rpb24uY2FsbCwgR2V0SW50cmluc2ljKCclRGF0ZVByb3RvdHlwZSUnKS52YWx1ZU9mKTtcblxudmFyICRmbG9vciA9IE1hdGguZmxvb3I7XG52YXIgJGFicyA9IE1hdGguYWJzO1xuXG52YXIgJE9iamVjdENyZWF0ZSA9IE9iamVjdC5jcmVhdGU7XG52YXIgJGdPUEQgPSAkT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxudmFyICRpc0V4dGVuc2libGUgPSAkT2JqZWN0LmlzRXh0ZW5zaWJsZTtcblxudmFyICRkZWZpbmVQcm9wZXJ0eSA9ICRPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbi8vIHdoaXRlc3BhY2UgZnJvbTogaHR0cDovL2VzNS5naXRodWIuaW8vI3gxNS41LjQuMjBcbi8vIGltcGxlbWVudGF0aW9uIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2VzLXNoaW1zL2VzNS1zaGltL2Jsb2IvdjMuNC4wL2VzNS1zaGltLmpzI0wxMzA0LUwxMzI0XG52YXIgd3MgPSBbXG5cdCdcXHgwOVxceDBBXFx4MEJcXHgwQ1xceDBEXFx4MjBcXHhBMFxcdTE2ODBcXHUxODBFXFx1MjAwMFxcdTIwMDFcXHUyMDAyXFx1MjAwMycsXG5cdCdcXHUyMDA0XFx1MjAwNVxcdTIwMDZcXHUyMDA3XFx1MjAwOFxcdTIwMDlcXHUyMDBBXFx1MjAyRlxcdTIwNUZcXHUzMDAwXFx1MjAyOCcsXG5cdCdcXHUyMDI5XFx1RkVGRidcbl0uam9pbignJyk7XG52YXIgdHJpbVJlZ2V4ID0gbmV3IFJlZ0V4cCgnKF5bJyArIHdzICsgJ10rKXwoWycgKyB3cyArICddKyQpJywgJ2cnKTtcbnZhciByZXBsYWNlID0gYmluZC5jYWxsKEZ1bmN0aW9uLmNhbGwsICRTdHJpbmcucHJvdG90eXBlLnJlcGxhY2UpO1xudmFyIHRyaW0gPSBmdW5jdGlvbiAodmFsdWUpIHtcblx0cmV0dXJuIHJlcGxhY2UodmFsdWUsIHRyaW1SZWdleCwgJycpO1xufTtcblxudmFyIEVTNSA9IHJlcXVpcmUoJy4vZXM1Jyk7XG5cbnZhciBoYXNSZWdFeHBNYXRjaGVyID0gcmVxdWlyZSgnaXMtcmVnZXgnKTtcblxuLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWFic3RyYWN0LW9wZXJhdGlvbnNcbnZhciBFUzYgPSBhc3NpZ24oYXNzaWduKHt9LCBFUzUpLCB7XG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWNhbGwtZi12LWFyZ3Ncblx0Q2FsbDogZnVuY3Rpb24gQ2FsbChGLCBWKSB7XG5cdFx0dmFyIGFyZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IFtdO1xuXHRcdGlmICghdGhpcy5Jc0NhbGxhYmxlKEYpKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcihGICsgJyBpcyBub3QgYSBmdW5jdGlvbicpO1xuXHRcdH1cblx0XHRyZXR1cm4gRi5hcHBseShWLCBhcmdzKTtcblx0fSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG9wcmltaXRpdmVcblx0VG9QcmltaXRpdmU6IHRvUHJpbWl0aXZlLFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b2Jvb2xlYW5cblx0Ly8gVG9Cb29sZWFuOiBFUzUuVG9Cb29sZWFuLFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy10b251bWJlclxuXHRUb051bWJlcjogZnVuY3Rpb24gVG9OdW1iZXIoYXJndW1lbnQpIHtcblx0XHR2YXIgdmFsdWUgPSBpc1ByaW1pdGl2ZShhcmd1bWVudCkgPyBhcmd1bWVudCA6IHRvUHJpbWl0aXZlKGFyZ3VtZW50LCAkTnVtYmVyKTtcblx0XHRpZiAodHlwZW9mIHZhbHVlID09PSAnc3ltYm9sJykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IGEgU3ltYm9sIHZhbHVlIHRvIGEgbnVtYmVyJyk7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRpZiAoaXNCaW5hcnkodmFsdWUpKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLlRvTnVtYmVyKHBhcnNlSW50ZWdlcihzdHJTbGljZSh2YWx1ZSwgMiksIDIpKTtcblx0XHRcdH0gZWxzZSBpZiAoaXNPY3RhbCh2YWx1ZSkpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuVG9OdW1iZXIocGFyc2VJbnRlZ2VyKHN0clNsaWNlKHZhbHVlLCAyKSwgOCkpO1xuXHRcdFx0fSBlbHNlIGlmIChoYXNOb25XUyh2YWx1ZSkgfHwgaXNJbnZhbGlkSGV4TGl0ZXJhbCh2YWx1ZSkpIHtcblx0XHRcdFx0cmV0dXJuIE5hTjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciB0cmltbWVkID0gdHJpbSh2YWx1ZSk7XG5cdFx0XHRcdGlmICh0cmltbWVkICE9PSB2YWx1ZSkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLlRvTnVtYmVyKHRyaW1tZWQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiAkTnVtYmVyKHZhbHVlKTtcblx0fSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG9pbnRlZ2VyXG5cdC8vIFRvSW50ZWdlcjogRVM1LlRvTnVtYmVyLFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b2ludDMyXG5cdC8vIFRvSW50MzI6IEVTNS5Ub0ludDMyLFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b3VpbnQzMlxuXHQvLyBUb1VpbnQzMjogRVM1LlRvVWludDMyLFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b2ludDE2XG5cdFRvSW50MTY6IGZ1bmN0aW9uIFRvSW50MTYoYXJndW1lbnQpIHtcblx0XHR2YXIgaW50MTZiaXQgPSB0aGlzLlRvVWludDE2KGFyZ3VtZW50KTtcblx0XHRyZXR1cm4gaW50MTZiaXQgPj0gMHg4MDAwID8gaW50MTZiaXQgLSAweDEwMDAwIDogaW50MTZiaXQ7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvdWludDE2XG5cdC8vIFRvVWludDE2OiBFUzUuVG9VaW50MTYsXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvaW50OFxuXHRUb0ludDg6IGZ1bmN0aW9uIFRvSW50OChhcmd1bWVudCkge1xuXHRcdHZhciBpbnQ4Yml0ID0gdGhpcy5Ub1VpbnQ4KGFyZ3VtZW50KTtcblx0XHRyZXR1cm4gaW50OGJpdCA+PSAweDgwID8gaW50OGJpdCAtIDB4MTAwIDogaW50OGJpdDtcblx0fSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG91aW50OFxuXHRUb1VpbnQ4OiBmdW5jdGlvbiBUb1VpbnQ4KGFyZ3VtZW50KSB7XG5cdFx0dmFyIG51bWJlciA9IHRoaXMuVG9OdW1iZXIoYXJndW1lbnQpO1xuXHRcdGlmICgkaXNOYU4obnVtYmVyKSB8fCBudW1iZXIgPT09IDAgfHwgISRpc0Zpbml0ZShudW1iZXIpKSB7IHJldHVybiAwOyB9XG5cdFx0dmFyIHBvc0ludCA9IHNpZ24obnVtYmVyKSAqICRmbG9vcigkYWJzKG51bWJlcikpO1xuXHRcdHJldHVybiBtb2QocG9zSW50LCAweDEwMCk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvdWludDhjbGFtcFxuXHRUb1VpbnQ4Q2xhbXA6IGZ1bmN0aW9uIFRvVWludDhDbGFtcChhcmd1bWVudCkge1xuXHRcdHZhciBudW1iZXIgPSB0aGlzLlRvTnVtYmVyKGFyZ3VtZW50KTtcblx0XHRpZiAoJGlzTmFOKG51bWJlcikgfHwgbnVtYmVyIDw9IDApIHsgcmV0dXJuIDA7IH1cblx0XHRpZiAobnVtYmVyID49IDB4RkYpIHsgcmV0dXJuIDB4RkY7IH1cblx0XHR2YXIgZiA9ICRmbG9vcihhcmd1bWVudCk7XG5cdFx0aWYgKGYgKyAwLjUgPCBudW1iZXIpIHsgcmV0dXJuIGYgKyAxOyB9XG5cdFx0aWYgKG51bWJlciA8IGYgKyAwLjUpIHsgcmV0dXJuIGY7IH1cblx0XHRpZiAoZiAlIDIgIT09IDApIHsgcmV0dXJuIGYgKyAxOyB9XG5cdFx0cmV0dXJuIGY7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvc3RyaW5nXG5cdFRvU3RyaW5nOiBmdW5jdGlvbiBUb1N0cmluZyhhcmd1bWVudCkge1xuXHRcdGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdzeW1ib2wnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgYSBTeW1ib2wgdmFsdWUgdG8gYSBzdHJpbmcnKTtcblx0XHR9XG5cdFx0cmV0dXJuICRTdHJpbmcoYXJndW1lbnQpO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b29iamVjdFxuXHRUb09iamVjdDogZnVuY3Rpb24gVG9PYmplY3QodmFsdWUpIHtcblx0XHR0aGlzLlJlcXVpcmVPYmplY3RDb2VyY2libGUodmFsdWUpO1xuXHRcdHJldHVybiAkT2JqZWN0KHZhbHVlKTtcblx0fSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG9wcm9wZXJ0eWtleVxuXHRUb1Byb3BlcnR5S2V5OiBmdW5jdGlvbiBUb1Byb3BlcnR5S2V5KGFyZ3VtZW50KSB7XG5cdFx0dmFyIGtleSA9IHRoaXMuVG9QcmltaXRpdmUoYXJndW1lbnQsICRTdHJpbmcpO1xuXHRcdHJldHVybiB0eXBlb2Yga2V5ID09PSAnc3ltYm9sJyA/IGtleSA6IHRoaXMuVG9TdHJpbmcoa2V5KTtcblx0fSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG9sZW5ndGhcblx0VG9MZW5ndGg6IGZ1bmN0aW9uIFRvTGVuZ3RoKGFyZ3VtZW50KSB7XG5cdFx0dmFyIGxlbiA9IHRoaXMuVG9JbnRlZ2VyKGFyZ3VtZW50KTtcblx0XHRpZiAobGVuIDw9IDApIHsgcmV0dXJuIDA7IH0gLy8gaW5jbHVkZXMgY29udmVydGluZyAtMCB0byArMFxuXHRcdGlmIChsZW4gPiBNQVhfU0FGRV9JTlRFR0VSKSB7IHJldHVybiBNQVhfU0FGRV9JTlRFR0VSOyB9XG5cdFx0cmV0dXJuIGxlbjtcblx0fSxcblxuXHQvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtY2Fub25pY2FsbnVtZXJpY2luZGV4c3RyaW5nXG5cdENhbm9uaWNhbE51bWVyaWNJbmRleFN0cmluZzogZnVuY3Rpb24gQ2Fub25pY2FsTnVtZXJpY0luZGV4U3RyaW5nKGFyZ3VtZW50KSB7XG5cdFx0aWYgKHRvU3RyKGFyZ3VtZW50KSAhPT0gJ1tvYmplY3QgU3RyaW5nXScpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdtdXN0IGJlIGEgc3RyaW5nJyk7XG5cdFx0fVxuXHRcdGlmIChhcmd1bWVudCA9PT0gJy0wJykgeyByZXR1cm4gLTA7IH1cblx0XHR2YXIgbiA9IHRoaXMuVG9OdW1iZXIoYXJndW1lbnQpO1xuXHRcdGlmICh0aGlzLlNhbWVWYWx1ZSh0aGlzLlRvU3RyaW5nKG4pLCBhcmd1bWVudCkpIHsgcmV0dXJuIG47IH1cblx0XHRyZXR1cm4gdm9pZCAwO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1yZXF1aXJlb2JqZWN0Y29lcmNpYmxlXG5cdFJlcXVpcmVPYmplY3RDb2VyY2libGU6IEVTNS5DaGVja09iamVjdENvZXJjaWJsZSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtaXNhcnJheVxuXHRJc0FycmF5OiAkQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBJc0FycmF5KGFyZ3VtZW50KSB7XG5cdFx0cmV0dXJuIHRvU3RyKGFyZ3VtZW50KSA9PT0gJ1tvYmplY3QgQXJyYXldJztcblx0fSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtaXNjYWxsYWJsZVxuXHQvLyBJc0NhbGxhYmxlOiBFUzUuSXNDYWxsYWJsZSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtaXNjb25zdHJ1Y3RvclxuXHRJc0NvbnN0cnVjdG9yOiBmdW5jdGlvbiBJc0NvbnN0cnVjdG9yKGFyZ3VtZW50KSB7XG5cdFx0cmV0dXJuIHR5cGVvZiBhcmd1bWVudCA9PT0gJ2Z1bmN0aW9uJyAmJiAhIWFyZ3VtZW50LnByb3RvdHlwZTsgLy8gdW5mb3J0dW5hdGVseSB0aGVyZSdzIG5vIHdheSB0byB0cnVseSBjaGVjayB0aGlzIHdpdGhvdXQgdHJ5L2NhdGNoIGBuZXcgYXJndW1lbnRgXG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWlzZXh0ZW5zaWJsZS1vXG5cdElzRXh0ZW5zaWJsZTogT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zXG5cdFx0PyBmdW5jdGlvbiBJc0V4dGVuc2libGUob2JqKSB7XG5cdFx0XHRpZiAoaXNQcmltaXRpdmUob2JqKSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gJGlzRXh0ZW5zaWJsZShvYmopO1xuXHRcdH1cblx0XHQ6IGZ1bmN0aW9uIGlzRXh0ZW5zaWJsZShvYmopIHsgcmV0dXJuIHRydWU7IH0sIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtaXNpbnRlZ2VyXG5cdElzSW50ZWdlcjogZnVuY3Rpb24gSXNJbnRlZ2VyKGFyZ3VtZW50KSB7XG5cdFx0aWYgKHR5cGVvZiBhcmd1bWVudCAhPT0gJ251bWJlcicgfHwgJGlzTmFOKGFyZ3VtZW50KSB8fCAhJGlzRmluaXRlKGFyZ3VtZW50KSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHR2YXIgYWJzID0gJGFicyhhcmd1bWVudCk7XG5cdFx0cmV0dXJuICRmbG9vcihhYnMpID09PSBhYnM7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWlzcHJvcGVydHlrZXlcblx0SXNQcm9wZXJ0eUtleTogZnVuY3Rpb24gSXNQcm9wZXJ0eUtleShhcmd1bWVudCkge1xuXHRcdHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N5bWJvbCc7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWlzcmVnZXhwXG5cdElzUmVnRXhwOiBmdW5jdGlvbiBJc1JlZ0V4cChhcmd1bWVudCkge1xuXHRcdGlmICghYXJndW1lbnQgfHwgdHlwZW9mIGFyZ3VtZW50ICE9PSAnb2JqZWN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRpZiAoaGFzU3ltYm9scykge1xuXHRcdFx0dmFyIGlzUmVnRXhwID0gYXJndW1lbnRbJFN5bWJvbC5tYXRjaF07XG5cdFx0XHRpZiAodHlwZW9mIGlzUmVnRXhwICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRyZXR1cm4gRVM1LlRvQm9vbGVhbihpc1JlZ0V4cCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBoYXNSZWdFeHBNYXRjaGVyKGFyZ3VtZW50KTtcblx0fSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtc2FtZXZhbHVlXG5cdC8vIFNhbWVWYWx1ZTogRVM1LlNhbWVWYWx1ZSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtc2FtZXZhbHVlemVyb1xuXHRTYW1lVmFsdWVaZXJvOiBmdW5jdGlvbiBTYW1lVmFsdWVaZXJvKHgsIHkpIHtcblx0XHRyZXR1cm4gKHggPT09IHkpIHx8ICgkaXNOYU4oeCkgJiYgJGlzTmFOKHkpKTtcblx0fSxcblxuXHQvKipcblx0ICogNy4zLjIgR2V0ViAoViwgUClcblx0ICogMS4gQXNzZXJ0OiBJc1Byb3BlcnR5S2V5KFApIGlzIHRydWUuXG5cdCAqIDIuIExldCBPIGJlIFRvT2JqZWN0KFYpLlxuXHQgKiAzLiBSZXR1cm5JZkFicnVwdChPKS5cblx0ICogNC4gUmV0dXJuIE8uW1tHZXRdXShQLCBWKS5cblx0ICovXG5cdEdldFY6IGZ1bmN0aW9uIEdldFYoViwgUCkge1xuXHRcdC8vIDcuMy4yLjFcblx0XHRpZiAoIXRoaXMuSXNQcm9wZXJ0eUtleShQKSkge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IElzUHJvcGVydHlLZXkoUCkgaXMgbm90IHRydWUnKTtcblx0XHR9XG5cblx0XHQvLyA3LjMuMi4yLTNcblx0XHR2YXIgTyA9IHRoaXMuVG9PYmplY3QoVik7XG5cblx0XHQvLyA3LjMuMi40XG5cdFx0cmV0dXJuIE9bUF07XG5cdH0sXG5cblx0LyoqXG5cdCAqIDcuMy45IC0gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWdldG1ldGhvZFxuXHQgKiAxLiBBc3NlcnQ6IElzUHJvcGVydHlLZXkoUCkgaXMgdHJ1ZS5cblx0ICogMi4gTGV0IGZ1bmMgYmUgR2V0VihPLCBQKS5cblx0ICogMy4gUmV0dXJuSWZBYnJ1cHQoZnVuYykuXG5cdCAqIDQuIElmIGZ1bmMgaXMgZWl0aGVyIHVuZGVmaW5lZCBvciBudWxsLCByZXR1cm4gdW5kZWZpbmVkLlxuXHQgKiA1LiBJZiBJc0NhbGxhYmxlKGZ1bmMpIGlzIGZhbHNlLCB0aHJvdyBhIFR5cGVFcnJvciBleGNlcHRpb24uXG5cdCAqIDYuIFJldHVybiBmdW5jLlxuXHQgKi9cblx0R2V0TWV0aG9kOiBmdW5jdGlvbiBHZXRNZXRob2QoTywgUCkge1xuXHRcdC8vIDcuMy45LjFcblx0XHRpZiAoIXRoaXMuSXNQcm9wZXJ0eUtleShQKSkge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IElzUHJvcGVydHlLZXkoUCkgaXMgbm90IHRydWUnKTtcblx0XHR9XG5cblx0XHQvLyA3LjMuOS4yXG5cdFx0dmFyIGZ1bmMgPSB0aGlzLkdldFYoTywgUCk7XG5cblx0XHQvLyA3LjMuOS40XG5cdFx0aWYgKGZ1bmMgPT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIHZvaWQgMDtcblx0XHR9XG5cblx0XHQvLyA3LjMuOS41XG5cdFx0aWYgKCF0aGlzLklzQ2FsbGFibGUoZnVuYykpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKFAgKyAnaXMgbm90IGEgZnVuY3Rpb24nKTtcblx0XHR9XG5cblx0XHQvLyA3LjMuOS42XG5cdFx0cmV0dXJuIGZ1bmM7XG5cdH0sXG5cblx0LyoqXG5cdCAqIDcuMy4xIEdldCAoTywgUCkgLSBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtZ2V0LW8tcFxuXHQgKiAxLiBBc3NlcnQ6IFR5cGUoTykgaXMgT2JqZWN0LlxuXHQgKiAyLiBBc3NlcnQ6IElzUHJvcGVydHlLZXkoUCkgaXMgdHJ1ZS5cblx0ICogMy4gUmV0dXJuIE8uW1tHZXRdXShQLCBPKS5cblx0ICovXG5cdEdldDogZnVuY3Rpb24gR2V0KE8sIFApIHtcblx0XHQvLyA3LjMuMS4xXG5cdFx0aWYgKHRoaXMuVHlwZShPKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBUeXBlKE8pIGlzIG5vdCBPYmplY3QnKTtcblx0XHR9XG5cdFx0Ly8gNy4zLjEuMlxuXHRcdGlmICghdGhpcy5Jc1Byb3BlcnR5S2V5KFApKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogSXNQcm9wZXJ0eUtleShQKSBpcyBub3QgdHJ1ZScpO1xuXHRcdH1cblx0XHQvLyA3LjMuMS4zXG5cdFx0cmV0dXJuIE9bUF07XG5cdH0sXG5cblx0VHlwZTogZnVuY3Rpb24gVHlwZSh4KSB7XG5cdFx0aWYgKHR5cGVvZiB4ID09PSAnc3ltYm9sJykge1xuXHRcdFx0cmV0dXJuICdTeW1ib2wnO1xuXHRcdH1cblx0XHRyZXR1cm4gRVM1LlR5cGUoeCk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLXNwZWNpZXNjb25zdHJ1Y3RvclxuXHRTcGVjaWVzQ29uc3RydWN0b3I6IGZ1bmN0aW9uIFNwZWNpZXNDb25zdHJ1Y3RvcihPLCBkZWZhdWx0Q29uc3RydWN0b3IpIHtcblx0XHRpZiAodGhpcy5UeXBlKE8pICE9PSAnT2JqZWN0Jykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IFR5cGUoTykgaXMgbm90IE9iamVjdCcpO1xuXHRcdH1cblx0XHR2YXIgQyA9IE8uY29uc3RydWN0b3I7XG5cdFx0aWYgKHR5cGVvZiBDID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0cmV0dXJuIGRlZmF1bHRDb25zdHJ1Y3Rvcjtcblx0XHR9XG5cdFx0aWYgKHRoaXMuVHlwZShDKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdPLmNvbnN0cnVjdG9yIGlzIG5vdCBhbiBPYmplY3QnKTtcblx0XHR9XG5cdFx0dmFyIFMgPSBoYXNTeW1ib2xzICYmICRTeW1ib2wuc3BlY2llcyA/IENbJFN5bWJvbC5zcGVjaWVzXSA6IHZvaWQgMDtcblx0XHRpZiAoUyA9PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gZGVmYXVsdENvbnN0cnVjdG9yO1xuXHRcdH1cblx0XHRpZiAodGhpcy5Jc0NvbnN0cnVjdG9yKFMpKSB7XG5cdFx0XHRyZXR1cm4gUztcblx0XHR9XG5cdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ25vIGNvbnN0cnVjdG9yIGZvdW5kJyk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWNvbXBsZXRlcHJvcGVydHlkZXNjcmlwdG9yXG5cdENvbXBsZXRlUHJvcGVydHlEZXNjcmlwdG9yOiBmdW5jdGlvbiBDb21wbGV0ZVByb3BlcnR5RGVzY3JpcHRvcihEZXNjKSB7XG5cdFx0YXNzZXJ0UmVjb3JkKHRoaXMsICdQcm9wZXJ0eSBEZXNjcmlwdG9yJywgJ0Rlc2MnLCBEZXNjKTtcblxuXHRcdGlmICh0aGlzLklzR2VuZXJpY0Rlc2NyaXB0b3IoRGVzYykgfHwgdGhpcy5Jc0RhdGFEZXNjcmlwdG9yKERlc2MpKSB7XG5cdFx0XHRpZiAoIWhhcyhEZXNjLCAnW1tWYWx1ZV1dJykpIHtcblx0XHRcdFx0RGVzY1snW1tWYWx1ZV1dJ10gPSB2b2lkIDA7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIWhhcyhEZXNjLCAnW1tXcml0YWJsZV1dJykpIHtcblx0XHRcdFx0RGVzY1snW1tXcml0YWJsZV1dJ10gPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKCFoYXMoRGVzYywgJ1tbR2V0XV0nKSkge1xuXHRcdFx0XHREZXNjWydbW0dldF1dJ10gPSB2b2lkIDA7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIWhhcyhEZXNjLCAnW1tTZXRdXScpKSB7XG5cdFx0XHRcdERlc2NbJ1tbU2V0XV0nXSA9IHZvaWQgMDtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKCFoYXMoRGVzYywgJ1tbRW51bWVyYWJsZV1dJykpIHtcblx0XHRcdERlc2NbJ1tbRW51bWVyYWJsZV1dJ10gPSBmYWxzZTtcblx0XHR9XG5cdFx0aWYgKCFoYXMoRGVzYywgJ1tbQ29uZmlndXJhYmxlXV0nKSkge1xuXHRcdFx0RGVzY1snW1tDb25maWd1cmFibGVdXSddID0gZmFsc2U7XG5cdFx0fVxuXHRcdHJldHVybiBEZXNjO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1zZXQtby1wLXYtdGhyb3dcblx0U2V0OiBmdW5jdGlvbiBTZXQoTywgUCwgViwgVGhyb3cpIHtcblx0XHRpZiAodGhpcy5UeXBlKE8pICE9PSAnT2JqZWN0Jykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ08gbXVzdCBiZSBhbiBPYmplY3QnKTtcblx0XHR9XG5cdFx0aWYgKCF0aGlzLklzUHJvcGVydHlLZXkoUCkpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdQIG11c3QgYmUgYSBQcm9wZXJ0eSBLZXknKTtcblx0XHR9XG5cdFx0aWYgKHRoaXMuVHlwZShUaHJvdykgIT09ICdCb29sZWFuJykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ1Rocm93IG11c3QgYmUgYSBCb29sZWFuJyk7XG5cdFx0fVxuXHRcdGlmIChUaHJvdykge1xuXHRcdFx0T1tQXSA9IFY7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0T1tQXSA9IFY7XG5cdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWhhc293bnByb3BlcnR5XG5cdEhhc093blByb3BlcnR5OiBmdW5jdGlvbiBIYXNPd25Qcm9wZXJ0eShPLCBQKSB7XG5cdFx0aWYgKHRoaXMuVHlwZShPKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdPIG11c3QgYmUgYW4gT2JqZWN0Jyk7XG5cdFx0fVxuXHRcdGlmICghdGhpcy5Jc1Byb3BlcnR5S2V5KFApKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignUCBtdXN0IGJlIGEgUHJvcGVydHkgS2V5Jyk7XG5cdFx0fVxuXHRcdHJldHVybiBoYXMoTywgUCk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWhhc3Byb3BlcnR5XG5cdEhhc1Byb3BlcnR5OiBmdW5jdGlvbiBIYXNQcm9wZXJ0eShPLCBQKSB7XG5cdFx0aWYgKHRoaXMuVHlwZShPKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdPIG11c3QgYmUgYW4gT2JqZWN0Jyk7XG5cdFx0fVxuXHRcdGlmICghdGhpcy5Jc1Byb3BlcnR5S2V5KFApKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignUCBtdXN0IGJlIGEgUHJvcGVydHkgS2V5Jyk7XG5cdFx0fVxuXHRcdHJldHVybiBQIGluIE87XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWlzY29uY2F0c3ByZWFkYWJsZVxuXHRJc0NvbmNhdFNwcmVhZGFibGU6IGZ1bmN0aW9uIElzQ29uY2F0U3ByZWFkYWJsZShPKSB7XG5cdFx0aWYgKHRoaXMuVHlwZShPKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0aWYgKGhhc1N5bWJvbHMgJiYgdHlwZW9mICRTeW1ib2wuaXNDb25jYXRTcHJlYWRhYmxlID09PSAnc3ltYm9sJykge1xuXHRcdFx0dmFyIHNwcmVhZGFibGUgPSB0aGlzLkdldChPLCBTeW1ib2wuaXNDb25jYXRTcHJlYWRhYmxlKTtcblx0XHRcdGlmICh0eXBlb2Ygc3ByZWFkYWJsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuVG9Cb29sZWFuKHNwcmVhZGFibGUpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5Jc0FycmF5KE8pO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1pbnZva2Vcblx0SW52b2tlOiBmdW5jdGlvbiBJbnZva2UoTywgUCkge1xuXHRcdGlmICghdGhpcy5Jc1Byb3BlcnR5S2V5KFApKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignUCBtdXN0IGJlIGEgUHJvcGVydHkgS2V5Jyk7XG5cdFx0fVxuXHRcdHZhciBhcmd1bWVudHNMaXN0ID0gYXJyYXlTbGljZShhcmd1bWVudHMsIDIpO1xuXHRcdHZhciBmdW5jID0gdGhpcy5HZXRWKE8sIFApO1xuXHRcdHJldHVybiB0aGlzLkNhbGwoZnVuYywgTywgYXJndW1lbnRzTGlzdCk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWdldGl0ZXJhdG9yXG5cdEdldEl0ZXJhdG9yOiBmdW5jdGlvbiBHZXRJdGVyYXRvcihvYmosIG1ldGhvZCkge1xuXHRcdGlmICghaGFzU3ltYm9scykge1xuXHRcdFx0dGhyb3cgbmV3IFN5bnRheEVycm9yKCdFUy5HZXRJdGVyYXRvciBkZXBlbmRzIG9uIG5hdGl2ZSBpdGVyYXRvciBzdXBwb3J0LicpO1xuXHRcdH1cblxuXHRcdHZhciBhY3R1YWxNZXRob2QgPSBtZXRob2Q7XG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB7XG5cdFx0XHRhY3R1YWxNZXRob2QgPSB0aGlzLkdldE1ldGhvZChvYmosICRTeW1ib2wuaXRlcmF0b3IpO1xuXHRcdH1cblx0XHR2YXIgaXRlcmF0b3IgPSB0aGlzLkNhbGwoYWN0dWFsTWV0aG9kLCBvYmopO1xuXHRcdGlmICh0aGlzLlR5cGUoaXRlcmF0b3IpICE9PSAnT2JqZWN0Jykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ2l0ZXJhdG9yIG11c3QgcmV0dXJuIGFuIG9iamVjdCcpO1xuXHRcdH1cblxuXHRcdHJldHVybiBpdGVyYXRvcjtcblx0fSxcblxuXHQvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtaXRlcmF0b3JuZXh0XG5cdEl0ZXJhdG9yTmV4dDogZnVuY3Rpb24gSXRlcmF0b3JOZXh0KGl0ZXJhdG9yLCB2YWx1ZSkge1xuXHRcdHZhciByZXN1bHQgPSB0aGlzLkludm9rZShpdGVyYXRvciwgJ25leHQnLCBhcmd1bWVudHMubGVuZ3RoIDwgMiA/IFtdIDogW3ZhbHVlXSk7XG5cdFx0aWYgKHRoaXMuVHlwZShyZXN1bHQpICE9PSAnT2JqZWN0Jykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ2l0ZXJhdG9yIG5leHQgbXVzdCByZXR1cm4gYW4gb2JqZWN0Jyk7XG5cdFx0fVxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWl0ZXJhdG9yY29tcGxldGVcblx0SXRlcmF0b3JDb21wbGV0ZTogZnVuY3Rpb24gSXRlcmF0b3JDb21wbGV0ZShpdGVyUmVzdWx0KSB7XG5cdFx0aWYgKHRoaXMuVHlwZShpdGVyUmVzdWx0KSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBUeXBlKGl0ZXJSZXN1bHQpIGlzIG5vdCBPYmplY3QnKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuVG9Cb29sZWFuKHRoaXMuR2V0KGl0ZXJSZXN1bHQsICdkb25lJykpO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1pdGVyYXRvcnZhbHVlXG5cdEl0ZXJhdG9yVmFsdWU6IGZ1bmN0aW9uIEl0ZXJhdG9yVmFsdWUoaXRlclJlc3VsdCkge1xuXHRcdGlmICh0aGlzLlR5cGUoaXRlclJlc3VsdCkgIT09ICdPYmplY3QnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogVHlwZShpdGVyUmVzdWx0KSBpcyBub3QgT2JqZWN0Jyk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLkdldChpdGVyUmVzdWx0LCAndmFsdWUnKTtcblx0fSxcblxuXHQvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtaXRlcmF0b3JzdGVwXG5cdEl0ZXJhdG9yU3RlcDogZnVuY3Rpb24gSXRlcmF0b3JTdGVwKGl0ZXJhdG9yKSB7XG5cdFx0dmFyIHJlc3VsdCA9IHRoaXMuSXRlcmF0b3JOZXh0KGl0ZXJhdG9yKTtcblx0XHR2YXIgZG9uZSA9IHRoaXMuSXRlcmF0b3JDb21wbGV0ZShyZXN1bHQpO1xuXHRcdHJldHVybiBkb25lID09PSB0cnVlID8gZmFsc2UgOiByZXN1bHQ7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWl0ZXJhdG9yY2xvc2Vcblx0SXRlcmF0b3JDbG9zZTogZnVuY3Rpb24gSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbikge1xuXHRcdGlmICh0aGlzLlR5cGUoaXRlcmF0b3IpICE9PSAnT2JqZWN0Jykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IFR5cGUoaXRlcmF0b3IpIGlzIG5vdCBPYmplY3QnKTtcblx0XHR9XG5cdFx0aWYgKCF0aGlzLklzQ2FsbGFibGUoY29tcGxldGlvbikpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBjb21wbGV0aW9uIGlzIG5vdCBhIHRodW5rIGZvciBhIENvbXBsZXRpb24gUmVjb3JkJyk7XG5cdFx0fVxuXHRcdHZhciBjb21wbGV0aW9uVGh1bmsgPSBjb21wbGV0aW9uO1xuXG5cdFx0dmFyIGl0ZXJhdG9yUmV0dXJuID0gdGhpcy5HZXRNZXRob2QoaXRlcmF0b3IsICdyZXR1cm4nKTtcblxuXHRcdGlmICh0eXBlb2YgaXRlcmF0b3JSZXR1cm4gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRyZXR1cm4gY29tcGxldGlvblRodW5rKCk7XG5cdFx0fVxuXG5cdFx0dmFyIGNvbXBsZXRpb25SZWNvcmQ7XG5cdFx0dHJ5IHtcblx0XHRcdHZhciBpbm5lclJlc3VsdCA9IHRoaXMuQ2FsbChpdGVyYXRvclJldHVybiwgaXRlcmF0b3IsIFtdKTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHQvLyBpZiB3ZSBoaXQgaGVyZSwgdGhlbiBcImVcIiBpcyB0aGUgaW5uZXJSZXN1bHQgY29tcGxldGlvbiB0aGF0IG5lZWRzIHJlLXRocm93aW5nXG5cblx0XHRcdC8vIGlmIHRoZSBjb21wbGV0aW9uIGlzIG9mIHR5cGUgXCJ0aHJvd1wiLCB0aGlzIHdpbGwgdGhyb3cuXG5cdFx0XHRjb21wbGV0aW9uUmVjb3JkID0gY29tcGxldGlvblRodW5rKCk7XG5cdFx0XHRjb21wbGV0aW9uVGh1bmsgPSBudWxsOyAvLyBlbnN1cmUgaXQncyBub3QgY2FsbGVkIHR3aWNlLlxuXG5cdFx0XHQvLyBpZiBub3QsIHRoZW4gcmV0dXJuIHRoZSBpbm5lclJlc3VsdCBjb21wbGV0aW9uXG5cdFx0XHR0aHJvdyBlO1xuXHRcdH1cblx0XHRjb21wbGV0aW9uUmVjb3JkID0gY29tcGxldGlvblRodW5rKCk7IC8vIGlmIGlubmVyUmVzdWx0IHdvcmtlZCwgdGhlbiB0aHJvdyBpZiB0aGUgY29tcGxldGlvbiBkb2VzXG5cdFx0Y29tcGxldGlvblRodW5rID0gbnVsbDsgLy8gZW5zdXJlIGl0J3Mgbm90IGNhbGxlZCB0d2ljZS5cblxuXHRcdGlmICh0aGlzLlR5cGUoaW5uZXJSZXN1bHQpICE9PSAnT2JqZWN0Jykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ2l0ZXJhdG9yIC5yZXR1cm4gbXVzdCByZXR1cm4gYW4gb2JqZWN0Jyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNvbXBsZXRpb25SZWNvcmQ7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWNyZWF0ZWl0ZXJyZXN1bHRvYmplY3Rcblx0Q3JlYXRlSXRlclJlc3VsdE9iamVjdDogZnVuY3Rpb24gQ3JlYXRlSXRlclJlc3VsdE9iamVjdCh2YWx1ZSwgZG9uZSkge1xuXHRcdGlmICh0aGlzLlR5cGUoZG9uZSkgIT09ICdCb29sZWFuJykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IFR5cGUoZG9uZSkgaXMgbm90IEJvb2xlYW4nKTtcblx0XHR9XG5cdFx0cmV0dXJuIHtcblx0XHRcdHZhbHVlOiB2YWx1ZSxcblx0XHRcdGRvbmU6IGRvbmVcblx0XHR9O1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1yZWdleHBleGVjXG5cdFJlZ0V4cEV4ZWM6IGZ1bmN0aW9uIFJlZ0V4cEV4ZWMoUiwgUykge1xuXHRcdGlmICh0aGlzLlR5cGUoUikgIT09ICdPYmplY3QnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignUiBtdXN0IGJlIGFuIE9iamVjdCcpO1xuXHRcdH1cblx0XHRpZiAodGhpcy5UeXBlKFMpICE9PSAnU3RyaW5nJykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ1MgbXVzdCBiZSBhIFN0cmluZycpO1xuXHRcdH1cblx0XHR2YXIgZXhlYyA9IHRoaXMuR2V0KFIsICdleGVjJyk7XG5cdFx0aWYgKHRoaXMuSXNDYWxsYWJsZShleGVjKSkge1xuXHRcdFx0dmFyIHJlc3VsdCA9IHRoaXMuQ2FsbChleGVjLCBSLCBbU10pO1xuXHRcdFx0aWYgKHJlc3VsdCA9PT0gbnVsbCB8fCB0aGlzLlR5cGUocmVzdWx0KSA9PT0gJ09iamVjdCcpIHtcblx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdH1cblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdcImV4ZWNcIiBtZXRob2QgbXVzdCByZXR1cm4gYG51bGxgIG9yIGFuIE9iamVjdCcpO1xuXHRcdH1cblx0XHRyZXR1cm4gcmVnZXhFeGVjKFIsIFMpO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1hcnJheXNwZWNpZXNjcmVhdGVcblx0QXJyYXlTcGVjaWVzQ3JlYXRlOiBmdW5jdGlvbiBBcnJheVNwZWNpZXNDcmVhdGUob3JpZ2luYWxBcnJheSwgbGVuZ3RoKSB7XG5cdFx0aWYgKCF0aGlzLklzSW50ZWdlcihsZW5ndGgpIHx8IGxlbmd0aCA8IDApIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBsZW5ndGggbXVzdCBiZSBhbiBpbnRlZ2VyID49IDAnKTtcblx0XHR9XG5cdFx0dmFyIGxlbiA9IGxlbmd0aCA9PT0gMCA/IDAgOiBsZW5ndGg7XG5cdFx0dmFyIEM7XG5cdFx0dmFyIGlzQXJyYXkgPSB0aGlzLklzQXJyYXkob3JpZ2luYWxBcnJheSk7XG5cdFx0aWYgKGlzQXJyYXkpIHtcblx0XHRcdEMgPSB0aGlzLkdldChvcmlnaW5hbEFycmF5LCAnY29uc3RydWN0b3InKTtcblx0XHRcdC8vIFRPRE86IGZpZ3VyZSBvdXQgaG93IHRvIG1ha2UgYSBjcm9zcy1yZWFsbSBub3JtYWwgQXJyYXksIGEgc2FtZS1yZWFsbSBBcnJheVxuXHRcdFx0Ly8gaWYgKHRoaXMuSXNDb25zdHJ1Y3RvcihDKSkge1xuXHRcdFx0Ly8gXHRpZiBDIGlzIGFub3RoZXIgcmVhbG0ncyBBcnJheSwgQyA9IHVuZGVmaW5lZFxuXHRcdFx0Ly8gXHRPYmplY3QuZ2V0UHJvdG90eXBlT2YoT2JqZWN0LmdldFByb3RvdHlwZU9mKE9iamVjdC5nZXRQcm90b3R5cGVPZihBcnJheSkpKSA9PT0gbnVsbCA/XG5cdFx0XHQvLyB9XG5cdFx0XHRpZiAodGhpcy5UeXBlKEMpID09PSAnT2JqZWN0JyAmJiBoYXNTeW1ib2xzICYmICRTeW1ib2wuc3BlY2llcykge1xuXHRcdFx0XHRDID0gdGhpcy5HZXQoQywgJFN5bWJvbC5zcGVjaWVzKTtcblx0XHRcdFx0aWYgKEMgPT09IG51bGwpIHtcblx0XHRcdFx0XHRDID0gdm9pZCAwO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICh0eXBlb2YgQyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdHJldHVybiAkQXJyYXkobGVuKTtcblx0XHR9XG5cdFx0aWYgKCF0aGlzLklzQ29uc3RydWN0b3IoQykpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdDIG11c3QgYmUgYSBjb25zdHJ1Y3RvcicpO1xuXHRcdH1cblx0XHRyZXR1cm4gbmV3IEMobGVuKTsgLy8gdGhpcy5Db25zdHJ1Y3QoQywgbGVuKTtcblx0fSxcblxuXHRDcmVhdGVEYXRhUHJvcGVydHk6IGZ1bmN0aW9uIENyZWF0ZURhdGFQcm9wZXJ0eShPLCBQLCBWKSB7XG5cdFx0aWYgKHRoaXMuVHlwZShPKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBUeXBlKE8pIGlzIG5vdCBPYmplY3QnKTtcblx0XHR9XG5cdFx0aWYgKCF0aGlzLklzUHJvcGVydHlLZXkoUCkpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBJc1Byb3BlcnR5S2V5KFApIGlzIG5vdCB0cnVlJyk7XG5cdFx0fVxuXHRcdHZhciBvbGREZXNjID0gJGdPUEQoTywgUCk7XG5cdFx0dmFyIGV4dGVuc2libGUgPSBvbGREZXNjIHx8ICh0eXBlb2YgJGlzRXh0ZW5zaWJsZSAhPT0gJ2Z1bmN0aW9uJyB8fCAkaXNFeHRlbnNpYmxlKE8pKTtcblx0XHR2YXIgaW1tdXRhYmxlID0gb2xkRGVzYyAmJiAoIW9sZERlc2Mud3JpdGFibGUgfHwgIW9sZERlc2MuY29uZmlndXJhYmxlKTtcblx0XHRpZiAoaW1tdXRhYmxlIHx8ICFleHRlbnNpYmxlKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHZhciBuZXdEZXNjID0ge1xuXHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdHZhbHVlOiBWLFxuXHRcdFx0d3JpdGFibGU6IHRydWVcblx0XHR9O1xuXHRcdCRkZWZpbmVQcm9wZXJ0eShPLCBQLCBuZXdEZXNjKTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSxcblxuXHQvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtY3JlYXRlZGF0YXByb3BlcnR5b3J0aHJvd1xuXHRDcmVhdGVEYXRhUHJvcGVydHlPclRocm93OiBmdW5jdGlvbiBDcmVhdGVEYXRhUHJvcGVydHlPclRocm93KE8sIFAsIFYpIHtcblx0XHRpZiAodGhpcy5UeXBlKE8pICE9PSAnT2JqZWN0Jykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IFR5cGUoTykgaXMgbm90IE9iamVjdCcpO1xuXHRcdH1cblx0XHRpZiAoIXRoaXMuSXNQcm9wZXJ0eUtleShQKSkge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IElzUHJvcGVydHlLZXkoUCkgaXMgbm90IHRydWUnKTtcblx0XHR9XG5cdFx0dmFyIHN1Y2Nlc3MgPSB0aGlzLkNyZWF0ZURhdGFQcm9wZXJ0eShPLCBQLCBWKTtcblx0XHRpZiAoIXN1Y2Nlc3MpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCd1bmFibGUgdG8gY3JlYXRlIGRhdGEgcHJvcGVydHknKTtcblx0XHR9XG5cdFx0cmV0dXJuIHN1Y2Nlc3M7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1vYmplY3RjcmVhdGVcblx0T2JqZWN0Q3JlYXRlOiBmdW5jdGlvbiBPYmplY3RDcmVhdGUocHJvdG8sIGludGVybmFsU2xvdHNMaXN0KSB7XG5cdFx0aWYgKHByb3RvICE9PSBudWxsICYmIHRoaXMuVHlwZShwcm90bykgIT09ICdPYmplY3QnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogcHJvdG8gbXVzdCBiZSBudWxsIG9yIGFuIG9iamVjdCcpO1xuXHRcdH1cblx0XHR2YXIgc2xvdHMgPSBhcmd1bWVudHMubGVuZ3RoIDwgMiA/IFtdIDogaW50ZXJuYWxTbG90c0xpc3Q7XG5cdFx0aWYgKHNsb3RzLmxlbmd0aCA+IDApIHtcblx0XHRcdHRocm93IG5ldyAkU3ludGF4RXJyb3IoJ2VzLWFic3RyYWN0IGRvZXMgbm90IHlldCBzdXBwb3J0IGludGVybmFsIHNsb3RzJyk7XG5cdFx0fVxuXG5cdFx0aWYgKHByb3RvID09PSBudWxsICYmICEkT2JqZWN0Q3JlYXRlKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFN5bnRheEVycm9yKCduYXRpdmUgT2JqZWN0LmNyZWF0ZSBzdXBwb3J0IGlzIHJlcXVpcmVkIHRvIGNyZWF0ZSBudWxsIG9iamVjdHMnKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gJE9iamVjdENyZWF0ZShwcm90byk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWFkdmFuY2VzdHJpbmdpbmRleFxuXHRBZHZhbmNlU3RyaW5nSW5kZXg6IGZ1bmN0aW9uIEFkdmFuY2VTdHJpbmdJbmRleChTLCBpbmRleCwgdW5pY29kZSkge1xuXHRcdGlmICh0aGlzLlR5cGUoUykgIT09ICdTdHJpbmcnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignUyBtdXN0IGJlIGEgU3RyaW5nJyk7XG5cdFx0fVxuXHRcdGlmICghdGhpcy5Jc0ludGVnZXIoaW5kZXgpIHx8IGluZGV4IDwgMCB8fCBpbmRleCA+IE1BWF9TQUZFX0lOVEVHRVIpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBsZW5ndGggbXVzdCBiZSBhbiBpbnRlZ2VyID49IDAgYW5kIDw9IDIqKjUzJyk7XG5cdFx0fVxuXHRcdGlmICh0aGlzLlR5cGUodW5pY29kZSkgIT09ICdCb29sZWFuJykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IHVuaWNvZGUgbXVzdCBiZSBhIEJvb2xlYW4nKTtcblx0XHR9XG5cdFx0aWYgKCF1bmljb2RlKSB7XG5cdFx0XHRyZXR1cm4gaW5kZXggKyAxO1xuXHRcdH1cblx0XHR2YXIgbGVuZ3RoID0gUy5sZW5ndGg7XG5cdFx0aWYgKChpbmRleCArIDEpID49IGxlbmd0aCkge1xuXHRcdFx0cmV0dXJuIGluZGV4ICsgMTtcblx0XHR9XG5cblx0XHR2YXIgZmlyc3QgPSAkY2hhckNvZGVBdChTLCBpbmRleCk7XG5cdFx0aWYgKGZpcnN0IDwgMHhEODAwIHx8IGZpcnN0ID4gMHhEQkZGKSB7XG5cdFx0XHRyZXR1cm4gaW5kZXggKyAxO1xuXHRcdH1cblxuXHRcdHZhciBzZWNvbmQgPSAkY2hhckNvZGVBdChTLCBpbmRleCArIDEpO1xuXHRcdGlmIChzZWNvbmQgPCAweERDMDAgfHwgc2Vjb25kID4gMHhERkZGKSB7XG5cdFx0XHRyZXR1cm4gaW5kZXggKyAxO1xuXHRcdH1cblxuXHRcdHJldHVybiBpbmRleCArIDI7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1jcmVhdGVtZXRob2Rwcm9wZXJ0eVxuXHRDcmVhdGVNZXRob2RQcm9wZXJ0eTogZnVuY3Rpb24gQ3JlYXRlTWV0aG9kUHJvcGVydHkoTywgUCwgVikge1xuXHRcdGlmICh0aGlzLlR5cGUoTykgIT09ICdPYmplY3QnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogVHlwZShPKSBpcyBub3QgT2JqZWN0Jyk7XG5cdFx0fVxuXG5cdFx0aWYgKCF0aGlzLklzUHJvcGVydHlLZXkoUCkpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBJc1Byb3BlcnR5S2V5KFApIGlzIG5vdCB0cnVlJyk7XG5cdFx0fVxuXG5cdFx0dmFyIG5ld0Rlc2MgPSB7XG5cdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG5cdFx0XHRlbnVtZXJhYmxlOiBmYWxzZSxcblx0XHRcdHZhbHVlOiBWLFxuXHRcdFx0d3JpdGFibGU6IHRydWVcblx0XHR9O1xuXHRcdHJldHVybiAhISRkZWZpbmVQcm9wZXJ0eShPLCBQLCBuZXdEZXNjKTtcblx0fSxcblxuXHQvLyBodHRwczovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWRlZmluZXByb3BlcnR5b3J0aHJvd1xuXHREZWZpbmVQcm9wZXJ0eU9yVGhyb3c6IGZ1bmN0aW9uIERlZmluZVByb3BlcnR5T3JUaHJvdyhPLCBQLCBkZXNjKSB7XG5cdFx0aWYgKHRoaXMuVHlwZShPKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBUeXBlKE8pIGlzIG5vdCBPYmplY3QnKTtcblx0XHR9XG5cblx0XHRpZiAoIXRoaXMuSXNQcm9wZXJ0eUtleShQKSkge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IElzUHJvcGVydHlLZXkoUCkgaXMgbm90IHRydWUnKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gISEkZGVmaW5lUHJvcGVydHkoTywgUCwgZGVzYyk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1kZWxldGVwcm9wZXJ0eW9ydGhyb3dcblx0RGVsZXRlUHJvcGVydHlPclRocm93OiBmdW5jdGlvbiBEZWxldGVQcm9wZXJ0eU9yVGhyb3coTywgUCkge1xuXHRcdGlmICh0aGlzLlR5cGUoTykgIT09ICdPYmplY3QnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogVHlwZShPKSBpcyBub3QgT2JqZWN0Jyk7XG5cdFx0fVxuXG5cdFx0aWYgKCF0aGlzLklzUHJvcGVydHlLZXkoUCkpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBJc1Byb3BlcnR5S2V5KFApIGlzIG5vdCB0cnVlJyk7XG5cdFx0fVxuXG5cdFx0dmFyIHN1Y2Nlc3MgPSBkZWxldGUgT1tQXTtcblx0XHRpZiAoIXN1Y2Nlc3MpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0F0dGVtcHQgdG8gZGVsZXRlIHByb3BlcnR5IGZhaWxlZC4nKTtcblx0XHR9XG5cdFx0cmV0dXJuIHN1Y2Nlc3M7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1lbnVtZXJhYmxlb3dubmFtZXNcblx0RW51bWVyYWJsZU93bk5hbWVzOiBmdW5jdGlvbiBFbnVtZXJhYmxlT3duTmFtZXMoTykge1xuXHRcdGlmICh0aGlzLlR5cGUoTykgIT09ICdPYmplY3QnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogVHlwZShPKSBpcyBub3QgT2JqZWN0Jyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGtleXMoTyk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLXByb3BlcnRpZXMtb2YtdGhlLW51bWJlci1wcm90b3R5cGUtb2JqZWN0XG5cdHRoaXNOdW1iZXJWYWx1ZTogZnVuY3Rpb24gdGhpc051bWJlclZhbHVlKHZhbHVlKSB7XG5cdFx0aWYgKHRoaXMuVHlwZSh2YWx1ZSkgPT09ICdOdW1iZXInKSB7XG5cdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuICROdW1iZXJWYWx1ZU9mKHZhbHVlKTtcblx0fSxcblxuXHQvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtcHJvcGVydGllcy1vZi10aGUtYm9vbGVhbi1wcm90b3R5cGUtb2JqZWN0XG5cdHRoaXNCb29sZWFuVmFsdWU6IGZ1bmN0aW9uIHRoaXNCb29sZWFuVmFsdWUodmFsdWUpIHtcblx0XHRpZiAodGhpcy5UeXBlKHZhbHVlKSA9PT0gJ0Jvb2xlYW4nKSB7XG5cdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuICRCb29sZWFuVmFsdWVPZih2YWx1ZSk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLXByb3BlcnRpZXMtb2YtdGhlLXN0cmluZy1wcm90b3R5cGUtb2JqZWN0XG5cdHRoaXNTdHJpbmdWYWx1ZTogZnVuY3Rpb24gdGhpc1N0cmluZ1ZhbHVlKHZhbHVlKSB7XG5cdFx0aWYgKHRoaXMuVHlwZSh2YWx1ZSkgPT09ICdTdHJpbmcnKSB7XG5cdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuICRTdHJpbmdWYWx1ZU9mKHZhbHVlKTtcblx0fSxcblxuXHQvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtcHJvcGVydGllcy1vZi10aGUtZGF0ZS1wcm90b3R5cGUtb2JqZWN0XG5cdHRoaXNUaW1lVmFsdWU6IGZ1bmN0aW9uIHRoaXNUaW1lVmFsdWUodmFsdWUpIHtcblx0XHRyZXR1cm4gJERhdGVWYWx1ZU9mKHZhbHVlKTtcblx0fVxufSk7XG5cbmRlbGV0ZSBFUzYuQ2hlY2tPYmplY3RDb2VyY2libGU7IC8vIHJlbmFtZWQgaW4gRVM2IHRvIFJlcXVpcmVPYmplY3RDb2VyY2libGVcblxubW9kdWxlLmV4cG9ydHMgPSBFUzY7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZXMtYWJzdHJhY3QvZXMyMDE1LmpzXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBiaW5kID0gcmVxdWlyZSgnZnVuY3Rpb24tYmluZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJpbmQuY2FsbChGdW5jdGlvbi5jYWxsLCBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9oYXMvc3JjL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBpbXBsZW1lbnRhdGlvbiA9IHJlcXVpcmUoJy4vaW1wbGVtZW50YXRpb24nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBGdW5jdGlvbi5wcm90b3R5cGUuYmluZCB8fCBpbXBsZW1lbnRhdGlvbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9mdW5jdGlvbi1iaW5kL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbi8qIGVzbGludCBuby1pbnZhbGlkLXRoaXM6IDEgKi9cblxudmFyIEVSUk9SX01FU1NBR0UgPSAnRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQgY2FsbGVkIG9uIGluY29tcGF0aWJsZSAnO1xudmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbnZhciBmdW5jVHlwZSA9ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYmluZCh0aGF0KSB7XG4gICAgdmFyIHRhcmdldCA9IHRoaXM7XG4gICAgaWYgKHR5cGVvZiB0YXJnZXQgIT09ICdmdW5jdGlvbicgfHwgdG9TdHIuY2FsbCh0YXJnZXQpICE9PSBmdW5jVHlwZSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEVSUk9SX01FU1NBR0UgKyB0YXJnZXQpO1xuICAgIH1cbiAgICB2YXIgYXJncyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcblxuICAgIHZhciBib3VuZDtcbiAgICB2YXIgYmluZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcyBpbnN0YW5jZW9mIGJvdW5kKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gdGFyZ2V0LmFwcGx5KFxuICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgYXJncy5jb25jYXQoc2xpY2UuY2FsbChhcmd1bWVudHMpKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChPYmplY3QocmVzdWx0KSA9PT0gcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRhcmdldC5hcHBseShcbiAgICAgICAgICAgICAgICB0aGF0LFxuICAgICAgICAgICAgICAgIGFyZ3MuY29uY2F0KHNsaWNlLmNhbGwoYXJndW1lbnRzKSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIGJvdW5kTGVuZ3RoID0gTWF0aC5tYXgoMCwgdGFyZ2V0Lmxlbmd0aCAtIGFyZ3MubGVuZ3RoKTtcbiAgICB2YXIgYm91bmRBcmdzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBib3VuZExlbmd0aDsgaSsrKSB7XG4gICAgICAgIGJvdW5kQXJncy5wdXNoKCckJyArIGkpO1xuICAgIH1cblxuICAgIGJvdW5kID0gRnVuY3Rpb24oJ2JpbmRlcicsICdyZXR1cm4gZnVuY3Rpb24gKCcgKyBib3VuZEFyZ3Muam9pbignLCcpICsgJyl7IHJldHVybiBiaW5kZXIuYXBwbHkodGhpcyxhcmd1bWVudHMpOyB9JykoYmluZGVyKTtcblxuICAgIGlmICh0YXJnZXQucHJvdG90eXBlKSB7XG4gICAgICAgIHZhciBFbXB0eSA9IGZ1bmN0aW9uIEVtcHR5KCkge307XG4gICAgICAgIEVtcHR5LnByb3RvdHlwZSA9IHRhcmdldC5wcm90b3R5cGU7XG4gICAgICAgIGJvdW5kLnByb3RvdHlwZSA9IG5ldyBFbXB0eSgpO1xuICAgICAgICBFbXB0eS5wcm90b3R5cGUgPSBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBib3VuZDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZnVuY3Rpb24tYmluZC9pbXBsZW1lbnRhdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZXMyMDE1Jyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZXMtdG8tcHJpbWl0aXZlL2VzNi5qc1xuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaGFzU3ltYm9scyA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gJ3N5bWJvbCc7XG5cbnZhciBpc1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vaGVscGVycy9pc1ByaW1pdGl2ZScpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCdpcy1jYWxsYWJsZScpO1xudmFyIGlzRGF0ZSA9IHJlcXVpcmUoJ2lzLWRhdGUtb2JqZWN0Jyk7XG52YXIgaXNTeW1ib2wgPSByZXF1aXJlKCdpcy1zeW1ib2wnKTtcblxudmFyIG9yZGluYXJ5VG9QcmltaXRpdmUgPSBmdW5jdGlvbiBPcmRpbmFyeVRvUHJpbWl0aXZlKE8sIGhpbnQpIHtcblx0aWYgKHR5cGVvZiBPID09PSAndW5kZWZpbmVkJyB8fCBPID09PSBudWxsKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgbWV0aG9kIG9uICcgKyBPKTtcblx0fVxuXHRpZiAodHlwZW9mIGhpbnQgIT09ICdzdHJpbmcnIHx8IChoaW50ICE9PSAnbnVtYmVyJyAmJiBoaW50ICE9PSAnc3RyaW5nJykpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdoaW50IG11c3QgYmUgXCJzdHJpbmdcIiBvciBcIm51bWJlclwiJyk7XG5cdH1cblx0dmFyIG1ldGhvZE5hbWVzID0gaGludCA9PT0gJ3N0cmluZycgPyBbJ3RvU3RyaW5nJywgJ3ZhbHVlT2YnXSA6IFsndmFsdWVPZicsICd0b1N0cmluZyddO1xuXHR2YXIgbWV0aG9kLCByZXN1bHQsIGk7XG5cdGZvciAoaSA9IDA7IGkgPCBtZXRob2ROYW1lcy5sZW5ndGg7ICsraSkge1xuXHRcdG1ldGhvZCA9IE9bbWV0aG9kTmFtZXNbaV1dO1xuXHRcdGlmIChpc0NhbGxhYmxlKG1ldGhvZCkpIHtcblx0XHRcdHJlc3VsdCA9IG1ldGhvZC5jYWxsKE8pO1xuXHRcdFx0aWYgKGlzUHJpbWl0aXZlKHJlc3VsdCkpIHtcblx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0dGhyb3cgbmV3IFR5cGVFcnJvcignTm8gZGVmYXVsdCB2YWx1ZScpO1xufTtcblxudmFyIEdldE1ldGhvZCA9IGZ1bmN0aW9uIEdldE1ldGhvZChPLCBQKSB7XG5cdHZhciBmdW5jID0gT1tQXTtcblx0aWYgKGZ1bmMgIT09IG51bGwgJiYgdHlwZW9mIGZ1bmMgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0aWYgKCFpc0NhbGxhYmxlKGZ1bmMpKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGZ1bmMgKyAnIHJldHVybmVkIGZvciBwcm9wZXJ0eSAnICsgUCArICcgb2Ygb2JqZWN0ICcgKyBPICsgJyBpcyBub3QgYSBmdW5jdGlvbicpO1xuXHRcdH1cblx0XHRyZXR1cm4gZnVuYztcblx0fVxuXHRyZXR1cm4gdm9pZCAwO1xufTtcblxuLy8gaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLXRvcHJpbWl0aXZlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIFRvUHJpbWl0aXZlKGlucHV0KSB7XG5cdGlmIChpc1ByaW1pdGl2ZShpbnB1dCkpIHtcblx0XHRyZXR1cm4gaW5wdXQ7XG5cdH1cblx0dmFyIGhpbnQgPSAnZGVmYXVsdCc7XG5cdGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuXHRcdGlmIChhcmd1bWVudHNbMV0gPT09IFN0cmluZykge1xuXHRcdFx0aGludCA9ICdzdHJpbmcnO1xuXHRcdH0gZWxzZSBpZiAoYXJndW1lbnRzWzFdID09PSBOdW1iZXIpIHtcblx0XHRcdGhpbnQgPSAnbnVtYmVyJztcblx0XHR9XG5cdH1cblxuXHR2YXIgZXhvdGljVG9QcmltO1xuXHRpZiAoaGFzU3ltYm9scykge1xuXHRcdGlmIChTeW1ib2wudG9QcmltaXRpdmUpIHtcblx0XHRcdGV4b3RpY1RvUHJpbSA9IEdldE1ldGhvZChpbnB1dCwgU3ltYm9sLnRvUHJpbWl0aXZlKTtcblx0XHR9IGVsc2UgaWYgKGlzU3ltYm9sKGlucHV0KSkge1xuXHRcdFx0ZXhvdGljVG9QcmltID0gU3ltYm9sLnByb3RvdHlwZS52YWx1ZU9mO1xuXHRcdH1cblx0fVxuXHRpZiAodHlwZW9mIGV4b3RpY1RvUHJpbSAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHR2YXIgcmVzdWx0ID0gZXhvdGljVG9QcmltLmNhbGwoaW5wdXQsIGhpbnQpO1xuXHRcdGlmIChpc1ByaW1pdGl2ZShyZXN1bHQpKSB7XG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH1cblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCd1bmFibGUgdG8gY29udmVydCBleG90aWMgb2JqZWN0IHRvIHByaW1pdGl2ZScpO1xuXHR9XG5cdGlmIChoaW50ID09PSAnZGVmYXVsdCcgJiYgKGlzRGF0ZShpbnB1dCkgfHwgaXNTeW1ib2woaW5wdXQpKSkge1xuXHRcdGhpbnQgPSAnc3RyaW5nJztcblx0fVxuXHRyZXR1cm4gb3JkaW5hcnlUb1ByaW1pdGl2ZShpbnB1dCwgaGludCA9PT0gJ2RlZmF1bHQnID8gJ251bWJlcicgOiBoaW50KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZXMtdG8tcHJpbWl0aXZlL2VzMjAxNS5qc1xuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc1ByaW1pdGl2ZSh2YWx1ZSkge1xuXHRyZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgKHR5cGVvZiB2YWx1ZSAhPT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZXMtdG8tcHJpbWl0aXZlL2hlbHBlcnMvaXNQcmltaXRpdmUuanNcbi8vIG1vZHVsZSBpZCA9IDUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIGZuVG9TdHIgPSBGdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmc7XG5cbnZhciBjb25zdHJ1Y3RvclJlZ2V4ID0gL15cXHMqY2xhc3NcXGIvO1xudmFyIGlzRVM2Q2xhc3NGbiA9IGZ1bmN0aW9uIGlzRVM2Q2xhc3NGdW5jdGlvbih2YWx1ZSkge1xuXHR0cnkge1xuXHRcdHZhciBmblN0ciA9IGZuVG9TdHIuY2FsbCh2YWx1ZSk7XG5cdFx0cmV0dXJuIGNvbnN0cnVjdG9yUmVnZXgudGVzdChmblN0cik7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRyZXR1cm4gZmFsc2U7IC8vIG5vdCBhIGZ1bmN0aW9uXG5cdH1cbn07XG5cbnZhciB0cnlGdW5jdGlvbk9iamVjdCA9IGZ1bmN0aW9uIHRyeUZ1bmN0aW9uVG9TdHIodmFsdWUpIHtcblx0dHJ5IHtcblx0XHRpZiAoaXNFUzZDbGFzc0ZuKHZhbHVlKSkgeyByZXR1cm4gZmFsc2U7IH1cblx0XHRmblRvU3RyLmNhbGwodmFsdWUpO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbnZhciBmbkNsYXNzID0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbnZhciBnZW5DbGFzcyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXSc7XG52YXIgaGFzVG9TdHJpbmdUYWcgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBTeW1ib2wudG9TdHJpbmdUYWcgPT09ICdzeW1ib2wnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQ2FsbGFibGUodmFsdWUpIHtcblx0aWYgKCF2YWx1ZSkgeyByZXR1cm4gZmFsc2U7IH1cblx0aWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnKSB7IHJldHVybiBmYWxzZTsgfVxuXHRpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nICYmICF2YWx1ZS5wcm90b3R5cGUpIHsgcmV0dXJuIHRydWU7IH1cblx0aWYgKGhhc1RvU3RyaW5nVGFnKSB7IHJldHVybiB0cnlGdW5jdGlvbk9iamVjdCh2YWx1ZSk7IH1cblx0aWYgKGlzRVM2Q2xhc3NGbih2YWx1ZSkpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdHZhciBzdHJDbGFzcyA9IHRvU3RyLmNhbGwodmFsdWUpO1xuXHRyZXR1cm4gc3RyQ2xhc3MgPT09IGZuQ2xhc3MgfHwgc3RyQ2xhc3MgPT09IGdlbkNsYXNzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9pcy1jYWxsYWJsZS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZ2V0RGF5ID0gRGF0ZS5wcm90b3R5cGUuZ2V0RGF5O1xudmFyIHRyeURhdGVPYmplY3QgPSBmdW5jdGlvbiB0cnlEYXRlT2JqZWN0KHZhbHVlKSB7XG5cdHRyeSB7XG5cdFx0Z2V0RGF5LmNhbGwodmFsdWUpO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xuXG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIGRhdGVDbGFzcyA9ICdbb2JqZWN0IERhdGVdJztcbnZhciBoYXNUb1N0cmluZ1RhZyA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIFN5bWJvbC50b1N0cmluZ1RhZyA9PT0gJ3N5bWJvbCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNEYXRlT2JqZWN0KHZhbHVlKSB7XG5cdGlmICh0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnIHx8IHZhbHVlID09PSBudWxsKSB7IHJldHVybiBmYWxzZTsgfVxuXHRyZXR1cm4gaGFzVG9TdHJpbmdUYWcgPyB0cnlEYXRlT2JqZWN0KHZhbHVlKSA6IHRvU3RyLmNhbGwodmFsdWUpID09PSBkYXRlQ2xhc3M7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2lzLWRhdGUtb2JqZWN0L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgaGFzU3ltYm9scyA9IHJlcXVpcmUoJ2hhcy1zeW1ib2xzJykoKTtcblxuaWYgKGhhc1N5bWJvbHMpIHtcblx0dmFyIHN5bVRvU3RyID0gU3ltYm9sLnByb3RvdHlwZS50b1N0cmluZztcblx0dmFyIHN5bVN0cmluZ1JlZ2V4ID0gL15TeW1ib2xcXCguKlxcKSQvO1xuXHR2YXIgaXNTeW1ib2xPYmplY3QgPSBmdW5jdGlvbiBpc1JlYWxTeW1ib2xPYmplY3QodmFsdWUpIHtcblx0XHRpZiAodHlwZW9mIHZhbHVlLnZhbHVlT2YoKSAhPT0gJ3N5bWJvbCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0cmV0dXJuIHN5bVN0cmluZ1JlZ2V4LnRlc3Qoc3ltVG9TdHIuY2FsbCh2YWx1ZSkpO1xuXHR9O1xuXG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNTeW1ib2wodmFsdWUpIHtcblx0XHRpZiAodHlwZW9mIHZhbHVlID09PSAnc3ltYm9sJykge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdGlmICh0b1N0ci5jYWxsKHZhbHVlKSAhPT0gJ1tvYmplY3QgU3ltYm9sXScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0dHJ5IHtcblx0XHRcdHJldHVybiBpc1N5bWJvbE9iamVjdCh2YWx1ZSk7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fTtcbn0gZWxzZSB7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc1N5bWJvbCh2YWx1ZSkge1xuXHRcdC8vIHRoaXMgZW52aXJvbm1lbnQgZG9lcyBub3Qgc3VwcG9ydCBTeW1ib2xzLlxuXHRcdHJldHVybiBmYWxzZSAmJiB2YWx1ZTtcblx0fTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9pcy1zeW1ib2wvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIG9yaWdTeW1ib2wgPSBnbG9iYWwuU3ltYm9sO1xudmFyIGhhc1N5bWJvbFNoYW0gPSByZXF1aXJlKCcuL3NoYW1zJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaGFzTmF0aXZlU3ltYm9scygpIHtcblx0aWYgKHR5cGVvZiBvcmlnU3ltYm9sICE9PSAnZnVuY3Rpb24nKSB7IHJldHVybiBmYWxzZTsgfVxuXHRpZiAodHlwZW9mIFN5bWJvbCAhPT0gJ2Z1bmN0aW9uJykgeyByZXR1cm4gZmFsc2U7IH1cblx0aWYgKHR5cGVvZiBvcmlnU3ltYm9sKCdmb28nKSAhPT0gJ3N5bWJvbCcpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdGlmICh0eXBlb2YgU3ltYm9sKCdiYXInKSAhPT0gJ3N5bWJvbCcpIHsgcmV0dXJuIGZhbHNlOyB9XG5cblx0cmV0dXJuIGhhc1N5bWJvbFNoYW0oKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaGFzLXN5bWJvbHMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuLyogZXNsaW50IGNvbXBsZXhpdHk6IFsyLCAxN10sIG1heC1zdGF0ZW1lbnRzOiBbMiwgMzNdICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGhhc1N5bWJvbHMoKSB7XG5cdGlmICh0eXBlb2YgU3ltYm9sICE9PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzICE9PSAnZnVuY3Rpb24nKSB7IHJldHVybiBmYWxzZTsgfVxuXHRpZiAodHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gJ3N5bWJvbCcpIHsgcmV0dXJuIHRydWU7IH1cblxuXHR2YXIgb2JqID0ge307XG5cdHZhciBzeW0gPSBTeW1ib2woJ3Rlc3QnKTtcblx0dmFyIHN5bU9iaiA9IE9iamVjdChzeW0pO1xuXHRpZiAodHlwZW9mIHN5bSA9PT0gJ3N0cmluZycpIHsgcmV0dXJuIGZhbHNlOyB9XG5cblx0aWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChzeW0pICE9PSAnW29iamVjdCBTeW1ib2xdJykgeyByZXR1cm4gZmFsc2U7IH1cblx0aWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChzeW1PYmopICE9PSAnW29iamVjdCBTeW1ib2xdJykgeyByZXR1cm4gZmFsc2U7IH1cblxuXHQvLyB0ZW1wIGRpc2FibGVkIHBlciBodHRwczovL2dpdGh1Yi5jb20vbGpoYXJiL29iamVjdC5hc3NpZ24vaXNzdWVzLzE3XG5cdC8vIGlmIChzeW0gaW5zdGFuY2VvZiBTeW1ib2wpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdC8vIHRlbXAgZGlzYWJsZWQgcGVyIGh0dHBzOi8vZ2l0aHViLmNvbS9XZWJSZWZsZWN0aW9uL2dldC1vd24tcHJvcGVydHktc3ltYm9scy9pc3N1ZXMvNFxuXHQvLyBpZiAoIShzeW1PYmogaW5zdGFuY2VvZiBTeW1ib2wpKSB7IHJldHVybiBmYWxzZTsgfVxuXG5cdC8vIGlmICh0eXBlb2YgU3ltYm9sLnByb3RvdHlwZS50b1N0cmluZyAhPT0gJ2Z1bmN0aW9uJykgeyByZXR1cm4gZmFsc2U7IH1cblx0Ly8gaWYgKFN0cmluZyhzeW0pICE9PSBTeW1ib2wucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoc3ltKSkgeyByZXR1cm4gZmFsc2U7IH1cblxuXHR2YXIgc3ltVmFsID0gNDI7XG5cdG9ialtzeW1dID0gc3ltVmFsO1xuXHRmb3IgKHN5bSBpbiBvYmopIHsgcmV0dXJuIGZhbHNlOyB9IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcblx0aWYgKHR5cGVvZiBPYmplY3Qua2V5cyA9PT0gJ2Z1bmN0aW9uJyAmJiBPYmplY3Qua2V5cyhvYmopLmxlbmd0aCAhPT0gMCkgeyByZXR1cm4gZmFsc2U7IH1cblxuXHRpZiAodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzID09PSAnZnVuY3Rpb24nICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9iaikubGVuZ3RoICE9PSAwKSB7IHJldHVybiBmYWxzZTsgfVxuXG5cdHZhciBzeW1zID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmopO1xuXHRpZiAoc3ltcy5sZW5ndGggIT09IDEgfHwgc3ltc1swXSAhPT0gc3ltKSB7IHJldHVybiBmYWxzZTsgfVxuXG5cdGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKG9iaiwgc3ltKSkgeyByZXR1cm4gZmFsc2U7IH1cblxuXHRpZiAodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBzeW0pO1xuXHRcdGlmIChkZXNjcmlwdG9yLnZhbHVlICE9PSBzeW1WYWwgfHwgZGVzY3JpcHRvci5lbnVtZXJhYmxlICE9PSB0cnVlKSB7IHJldHVybiBmYWxzZTsgfVxuXHR9XG5cblx0cmV0dXJuIHRydWU7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2hhcy1zeW1ib2xzL3NoYW1zLmpzXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbi8qIGdsb2JhbHNcblx0U2V0LFxuXHRNYXAsXG5cdFdlYWtTZXQsXG5cdFdlYWtNYXAsXG5cblx0UHJvbWlzZSxcblxuXHRTeW1ib2wsXG5cdFByb3h5LFxuXG5cdEF0b21pY3MsXG5cdFNoYXJlZEFycmF5QnVmZmVyLFxuXG5cdEFycmF5QnVmZmVyLFxuXHREYXRhVmlldyxcblx0VWludDhBcnJheSxcblx0RmxvYXQzMkFycmF5LFxuXHRGbG9hdDY0QXJyYXksXG5cdEludDhBcnJheSxcblx0SW50MTZBcnJheSxcblx0SW50MzJBcnJheSxcblx0VWludDhDbGFtcGVkQXJyYXksXG5cdFVpbnQxNkFycmF5LFxuXHRVaW50MzJBcnJheSxcbiovXG5cbnZhciB1bmRlZmluZWQ7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2hhZG93LXJlc3RyaWN0ZWQtbmFtZXNcblxudmFyIFRocm93VHlwZUVycm9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvclxuXHQ/IChmdW5jdGlvbiAoKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGFyZ3VtZW50cywgJ2NhbGxlZScpLmdldDsgfSgpKVxuXHQ6IGZ1bmN0aW9uICgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcigpOyB9O1xuXG52YXIgaGFzU3ltYm9scyA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gJ3N5bWJvbCc7XG5cbnZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiAoeCkgeyByZXR1cm4geC5fX3Byb3RvX187IH07IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcHJvdG9cblxudmFyIGdlbmVyYXRvcjsgLy8gPSBmdW5jdGlvbiAqICgpIHt9O1xudmFyIGdlbmVyYXRvckZ1bmN0aW9uID0gZ2VuZXJhdG9yID8gZ2V0UHJvdG8oZ2VuZXJhdG9yKSA6IHVuZGVmaW5lZDtcbnZhciBhc3luY0ZuOyAvLyBhc3luYyBmdW5jdGlvbigpIHt9O1xudmFyIGFzeW5jRnVuY3Rpb24gPSBhc3luY0ZuID8gYXN5bmNGbi5jb25zdHJ1Y3RvciA6IHVuZGVmaW5lZDtcbnZhciBhc3luY0dlbjsgLy8gYXN5bmMgZnVuY3Rpb24gKiAoKSB7fTtcbnZhciBhc3luY0dlbkZ1bmN0aW9uID0gYXN5bmNHZW4gPyBnZXRQcm90byhhc3luY0dlbikgOiB1bmRlZmluZWQ7XG52YXIgYXN5bmNHZW5JdGVyYXRvciA9IGFzeW5jR2VuID8gYXN5bmNHZW4oKSA6IHVuZGVmaW5lZDtcblxudmFyIFR5cGVkQXJyYXkgPSB0eXBlb2YgVWludDhBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBnZXRQcm90byhVaW50OEFycmF5KTtcblxudmFyIElOVFJJTlNJQ1MgPSB7XG5cdCckICVBcnJheSUnOiBBcnJheSxcblx0JyQgJUFycmF5QnVmZmVyJSc6IHR5cGVvZiBBcnJheUJ1ZmZlciA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBBcnJheUJ1ZmZlcixcblx0JyQgJUFycmF5QnVmZmVyUHJvdG90eXBlJSc6IHR5cGVvZiBBcnJheUJ1ZmZlciA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBBcnJheUJ1ZmZlci5wcm90b3R5cGUsXG5cdCckICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJSc6IGhhc1N5bWJvbHMgPyBnZXRQcm90byhbXVtTeW1ib2wuaXRlcmF0b3JdKCkpIDogdW5kZWZpbmVkLFxuXHQnJCAlQXJyYXlQcm90b3R5cGUlJzogQXJyYXkucHJvdG90eXBlLFxuXHQnJCAlQXJyYXlQcm90b19lbnRyaWVzJSc6IEFycmF5LnByb3RvdHlwZS5lbnRyaWVzLFxuXHQnJCAlQXJyYXlQcm90b19mb3JFYWNoJSc6IEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLFxuXHQnJCAlQXJyYXlQcm90b19rZXlzJSc6IEFycmF5LnByb3RvdHlwZS5rZXlzLFxuXHQnJCAlQXJyYXlQcm90b192YWx1ZXMlJzogQXJyYXkucHJvdG90eXBlLnZhbHVlcyxcblx0JyQgJUFzeW5jRnJvbVN5bmNJdGVyYXRvclByb3RvdHlwZSUnOiB1bmRlZmluZWQsXG5cdCckICVBc3luY0Z1bmN0aW9uJSc6IGFzeW5jRnVuY3Rpb24sXG5cdCckICVBc3luY0Z1bmN0aW9uUHJvdG90eXBlJSc6IGFzeW5jRnVuY3Rpb24gPyBhc3luY0Z1bmN0aW9uLnByb3RvdHlwZSA6IHVuZGVmaW5lZCxcblx0JyQgJUFzeW5jR2VuZXJhdG9yJSc6IGFzeW5jR2VuID8gZ2V0UHJvdG8oYXN5bmNHZW5JdGVyYXRvcikgOiB1bmRlZmluZWQsXG5cdCckICVBc3luY0dlbmVyYXRvckZ1bmN0aW9uJSc6IGFzeW5jR2VuRnVuY3Rpb24sXG5cdCckICVBc3luY0dlbmVyYXRvclByb3RvdHlwZSUnOiBhc3luY0dlbkZ1bmN0aW9uID8gYXN5bmNHZW5GdW5jdGlvbi5wcm90b3R5cGUgOiB1bmRlZmluZWQsXG5cdCckICVBc3luY0l0ZXJhdG9yUHJvdG90eXBlJSc6IGFzeW5jR2VuSXRlcmF0b3IgJiYgaGFzU3ltYm9scyAmJiBTeW1ib2wuYXN5bmNJdGVyYXRvciA/IGFzeW5jR2VuSXRlcmF0b3JbU3ltYm9sLmFzeW5jSXRlcmF0b3JdKCkgOiB1bmRlZmluZWQsXG5cdCckICVBdG9taWNzJSc6IHR5cGVvZiBBdG9taWNzID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IEF0b21pY3MsXG5cdCckICVCb29sZWFuJSc6IEJvb2xlYW4sXG5cdCckICVCb29sZWFuUHJvdG90eXBlJSc6IEJvb2xlYW4ucHJvdG90eXBlLFxuXHQnJCAlRGF0YVZpZXclJzogdHlwZW9mIERhdGFWaWV3ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IERhdGFWaWV3LFxuXHQnJCAlRGF0YVZpZXdQcm90b3R5cGUlJzogdHlwZW9mIERhdGFWaWV3ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IERhdGFWaWV3LnByb3RvdHlwZSxcblx0JyQgJURhdGUlJzogRGF0ZSxcblx0JyQgJURhdGVQcm90b3R5cGUlJzogRGF0ZS5wcm90b3R5cGUsXG5cdCckICVkZWNvZGVVUkklJzogZGVjb2RlVVJJLFxuXHQnJCAlZGVjb2RlVVJJQ29tcG9uZW50JSc6IGRlY29kZVVSSUNvbXBvbmVudCxcblx0JyQgJWVuY29kZVVSSSUnOiBlbmNvZGVVUkksXG5cdCckICVlbmNvZGVVUklDb21wb25lbnQlJzogZW5jb2RlVVJJQ29tcG9uZW50LFxuXHQnJCAlRXJyb3IlJzogRXJyb3IsXG5cdCckICVFcnJvclByb3RvdHlwZSUnOiBFcnJvci5wcm90b3R5cGUsXG5cdCckICVldmFsJSc6IGV2YWwsIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tZXZhbFxuXHQnJCAlRXZhbEVycm9yJSc6IEV2YWxFcnJvcixcblx0JyQgJUV2YWxFcnJvclByb3RvdHlwZSUnOiBFdmFsRXJyb3IucHJvdG90eXBlLFxuXHQnJCAlRmxvYXQzMkFycmF5JSc6IHR5cGVvZiBGbG9hdDMyQXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogRmxvYXQzMkFycmF5LFxuXHQnJCAlRmxvYXQzMkFycmF5UHJvdG90eXBlJSc6IHR5cGVvZiBGbG9hdDMyQXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogRmxvYXQzMkFycmF5LnByb3RvdHlwZSxcblx0JyQgJUZsb2F0NjRBcnJheSUnOiB0eXBlb2YgRmxvYXQ2NEFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IEZsb2F0NjRBcnJheSxcblx0JyQgJUZsb2F0NjRBcnJheVByb3RvdHlwZSUnOiB0eXBlb2YgRmxvYXQ2NEFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IEZsb2F0NjRBcnJheS5wcm90b3R5cGUsXG5cdCckICVGdW5jdGlvbiUnOiBGdW5jdGlvbixcblx0JyQgJUZ1bmN0aW9uUHJvdG90eXBlJSc6IEZ1bmN0aW9uLnByb3RvdHlwZSxcblx0JyQgJUdlbmVyYXRvciUnOiBnZW5lcmF0b3IgPyBnZXRQcm90byhnZW5lcmF0b3IoKSkgOiB1bmRlZmluZWQsXG5cdCckICVHZW5lcmF0b3JGdW5jdGlvbiUnOiBnZW5lcmF0b3JGdW5jdGlvbixcblx0JyQgJUdlbmVyYXRvclByb3RvdHlwZSUnOiBnZW5lcmF0b3JGdW5jdGlvbiA/IGdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA6IHVuZGVmaW5lZCxcblx0JyQgJUludDhBcnJheSUnOiB0eXBlb2YgSW50OEFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IEludDhBcnJheSxcblx0JyQgJUludDhBcnJheVByb3RvdHlwZSUnOiB0eXBlb2YgSW50OEFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IEludDhBcnJheS5wcm90b3R5cGUsXG5cdCckICVJbnQxNkFycmF5JSc6IHR5cGVvZiBJbnQxNkFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IEludDE2QXJyYXksXG5cdCckICVJbnQxNkFycmF5UHJvdG90eXBlJSc6IHR5cGVvZiBJbnQxNkFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IEludDhBcnJheS5wcm90b3R5cGUsXG5cdCckICVJbnQzMkFycmF5JSc6IHR5cGVvZiBJbnQzMkFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IEludDMyQXJyYXksXG5cdCckICVJbnQzMkFycmF5UHJvdG90eXBlJSc6IHR5cGVvZiBJbnQzMkFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IEludDMyQXJyYXkucHJvdG90eXBlLFxuXHQnJCAlaXNGaW5pdGUlJzogaXNGaW5pdGUsXG5cdCckICVpc05hTiUnOiBpc05hTixcblx0JyQgJUl0ZXJhdG9yUHJvdG90eXBlJSc6IGhhc1N5bWJvbHMgPyBnZXRQcm90byhnZXRQcm90byhbXVtTeW1ib2wuaXRlcmF0b3JdKCkpKSA6IHVuZGVmaW5lZCxcblx0JyQgJUpTT04lJzogSlNPTixcblx0JyQgJUpTT05QYXJzZSUnOiBKU09OLnBhcnNlLFxuXHQnJCAlTWFwJSc6IHR5cGVvZiBNYXAgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogTWFwLFxuXHQnJCAlTWFwSXRlcmF0b3JQcm90b3R5cGUlJzogdHlwZW9mIE1hcCA9PT0gJ3VuZGVmaW5lZCcgfHwgIWhhc1N5bWJvbHMgPyB1bmRlZmluZWQgOiBnZXRQcm90byhuZXcgTWFwKClbU3ltYm9sLml0ZXJhdG9yXSgpKSxcblx0JyQgJU1hcFByb3RvdHlwZSUnOiB0eXBlb2YgTWFwID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IE1hcC5wcm90b3R5cGUsXG5cdCckICVNYXRoJSc6IE1hdGgsXG5cdCckICVOdW1iZXIlJzogTnVtYmVyLFxuXHQnJCAlTnVtYmVyUHJvdG90eXBlJSc6IE51bWJlci5wcm90b3R5cGUsXG5cdCckICVPYmplY3QlJzogT2JqZWN0LFxuXHQnJCAlT2JqZWN0UHJvdG90eXBlJSc6IE9iamVjdC5wcm90b3R5cGUsXG5cdCckICVPYmpQcm90b190b1N0cmluZyUnOiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLFxuXHQnJCAlT2JqUHJvdG9fdmFsdWVPZiUnOiBPYmplY3QucHJvdG90eXBlLnZhbHVlT2YsXG5cdCckICVwYXJzZUZsb2F0JSc6IHBhcnNlRmxvYXQsXG5cdCckICVwYXJzZUludCUnOiBwYXJzZUludCxcblx0JyQgJVByb21pc2UlJzogdHlwZW9mIFByb21pc2UgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogUHJvbWlzZSxcblx0JyQgJVByb21pc2VQcm90b3R5cGUlJzogdHlwZW9mIFByb21pc2UgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogUHJvbWlzZS5wcm90b3R5cGUsXG5cdCckICVQcm9taXNlUHJvdG9fdGhlbiUnOiB0eXBlb2YgUHJvbWlzZSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBQcm9taXNlLnByb3RvdHlwZS50aGVuLFxuXHQnJCAlUHJvbWlzZV9hbGwlJzogdHlwZW9mIFByb21pc2UgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogUHJvbWlzZS5hbGwsXG5cdCckICVQcm9taXNlX3JlamVjdCUnOiB0eXBlb2YgUHJvbWlzZSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBQcm9taXNlLnJlamVjdCxcblx0JyQgJVByb21pc2VfcmVzb2x2ZSUnOiB0eXBlb2YgUHJvbWlzZSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBQcm9taXNlLnJlc29sdmUsXG5cdCckICVQcm94eSUnOiB0eXBlb2YgUHJveHkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogUHJveHksXG5cdCckICVSYW5nZUVycm9yJSc6IFJhbmdlRXJyb3IsXG5cdCckICVSYW5nZUVycm9yUHJvdG90eXBlJSc6IFJhbmdlRXJyb3IucHJvdG90eXBlLFxuXHQnJCAlUmVmZXJlbmNlRXJyb3IlJzogUmVmZXJlbmNlRXJyb3IsXG5cdCckICVSZWZlcmVuY2VFcnJvclByb3RvdHlwZSUnOiBSZWZlcmVuY2VFcnJvci5wcm90b3R5cGUsXG5cdCckICVSZWZsZWN0JSc6IHR5cGVvZiBSZWZsZWN0ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFJlZmxlY3QsXG5cdCckICVSZWdFeHAlJzogUmVnRXhwLFxuXHQnJCAlUmVnRXhwUHJvdG90eXBlJSc6IFJlZ0V4cC5wcm90b3R5cGUsXG5cdCckICVTZXQlJzogdHlwZW9mIFNldCA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBTZXQsXG5cdCckICVTZXRJdGVyYXRvclByb3RvdHlwZSUnOiB0eXBlb2YgU2V0ID09PSAndW5kZWZpbmVkJyB8fCAhaGFzU3ltYm9scyA/IHVuZGVmaW5lZCA6IGdldFByb3RvKG5ldyBTZXQoKVtTeW1ib2wuaXRlcmF0b3JdKCkpLFxuXHQnJCAlU2V0UHJvdG90eXBlJSc6IHR5cGVvZiBTZXQgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogU2V0LnByb3RvdHlwZSxcblx0JyQgJVNoYXJlZEFycmF5QnVmZmVyJSc6IHR5cGVvZiBTaGFyZWRBcnJheUJ1ZmZlciA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBTaGFyZWRBcnJheUJ1ZmZlcixcblx0JyQgJVNoYXJlZEFycmF5QnVmZmVyUHJvdG90eXBlJSc6IHR5cGVvZiBTaGFyZWRBcnJheUJ1ZmZlciA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBTaGFyZWRBcnJheUJ1ZmZlci5wcm90b3R5cGUsXG5cdCckICVTdHJpbmclJzogU3RyaW5nLFxuXHQnJCAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlJzogaGFzU3ltYm9scyA/IGdldFByb3RvKCcnW1N5bWJvbC5pdGVyYXRvcl0oKSkgOiB1bmRlZmluZWQsXG5cdCckICVTdHJpbmdQcm90b3R5cGUlJzogU3RyaW5nLnByb3RvdHlwZSxcblx0JyQgJVN5bWJvbCUnOiBoYXNTeW1ib2xzID8gU3ltYm9sIDogdW5kZWZpbmVkLFxuXHQnJCAlU3ltYm9sUHJvdG90eXBlJSc6IGhhc1N5bWJvbHMgPyBTeW1ib2wucHJvdG90eXBlIDogdW5kZWZpbmVkLFxuXHQnJCAlU3ludGF4RXJyb3IlJzogU3ludGF4RXJyb3IsXG5cdCckICVTeW50YXhFcnJvclByb3RvdHlwZSUnOiBTeW50YXhFcnJvci5wcm90b3R5cGUsXG5cdCckICVUaHJvd1R5cGVFcnJvciUnOiBUaHJvd1R5cGVFcnJvcixcblx0JyQgJVR5cGVkQXJyYXklJzogVHlwZWRBcnJheSxcblx0JyQgJVR5cGVkQXJyYXlQcm90b3R5cGUlJzogVHlwZWRBcnJheSA/IFR5cGVkQXJyYXkucHJvdG90eXBlIDogdW5kZWZpbmVkLFxuXHQnJCAlVHlwZUVycm9yJSc6IFR5cGVFcnJvcixcblx0JyQgJVR5cGVFcnJvclByb3RvdHlwZSUnOiBUeXBlRXJyb3IucHJvdG90eXBlLFxuXHQnJCAlVWludDhBcnJheSUnOiB0eXBlb2YgVWludDhBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBVaW50OEFycmF5LFxuXHQnJCAlVWludDhBcnJheVByb3RvdHlwZSUnOiB0eXBlb2YgVWludDhBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBVaW50OEFycmF5LnByb3RvdHlwZSxcblx0JyQgJVVpbnQ4Q2xhbXBlZEFycmF5JSc6IHR5cGVvZiBVaW50OENsYW1wZWRBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBVaW50OENsYW1wZWRBcnJheSxcblx0JyQgJVVpbnQ4Q2xhbXBlZEFycmF5UHJvdG90eXBlJSc6IHR5cGVvZiBVaW50OENsYW1wZWRBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBVaW50OENsYW1wZWRBcnJheS5wcm90b3R5cGUsXG5cdCckICVVaW50MTZBcnJheSUnOiB0eXBlb2YgVWludDE2QXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogVWludDE2QXJyYXksXG5cdCckICVVaW50MTZBcnJheVByb3RvdHlwZSUnOiB0eXBlb2YgVWludDE2QXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogVWludDE2QXJyYXkucHJvdG90eXBlLFxuXHQnJCAlVWludDMyQXJyYXklJzogdHlwZW9mIFVpbnQzMkFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFVpbnQzMkFycmF5LFxuXHQnJCAlVWludDMyQXJyYXlQcm90b3R5cGUlJzogdHlwZW9mIFVpbnQzMkFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFVpbnQzMkFycmF5LnByb3RvdHlwZSxcblx0JyQgJVVSSUVycm9yJSc6IFVSSUVycm9yLFxuXHQnJCAlVVJJRXJyb3JQcm90b3R5cGUlJzogVVJJRXJyb3IucHJvdG90eXBlLFxuXHQnJCAlV2Vha01hcCUnOiB0eXBlb2YgV2Vha01hcCA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBXZWFrTWFwLFxuXHQnJCAlV2Vha01hcFByb3RvdHlwZSUnOiB0eXBlb2YgV2Vha01hcCA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBXZWFrTWFwLnByb3RvdHlwZSxcblx0JyQgJVdlYWtTZXQlJzogdHlwZW9mIFdlYWtTZXQgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogV2Vha1NldCxcblx0JyQgJVdlYWtTZXRQcm90b3R5cGUlJzogdHlwZW9mIFdlYWtTZXQgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogV2Vha1NldC5wcm90b3R5cGVcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gR2V0SW50cmluc2ljKG5hbWUsIGFsbG93TWlzc2luZykge1xuXHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgdHlwZW9mIGFsbG93TWlzc2luZyAhPT0gJ2Jvb2xlYW4nKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignXCJhbGxvd01pc3NpbmdcIiBhcmd1bWVudCBtdXN0IGJlIGEgYm9vbGVhbicpO1xuXHR9XG5cblx0dmFyIGtleSA9ICckICcgKyBuYW1lO1xuXHRpZiAoIShrZXkgaW4gSU5UUklOU0lDUykpIHtcblx0XHR0aHJvdyBuZXcgU3ludGF4RXJyb3IoJ2ludHJpbnNpYyAnICsgbmFtZSArICcgZG9lcyBub3QgZXhpc3QhJyk7XG5cdH1cblxuXHQvLyBpc3RhbmJ1bCBpZ25vcmUgaWYgLy8gaG9wZWZ1bGx5IHRoaXMgaXMgaW1wb3NzaWJsZSB0byB0ZXN0IDotKVxuXHRpZiAodHlwZW9mIElOVFJJTlNJQ1Nba2V5XSA9PT0gJ3VuZGVmaW5lZCcgJiYgIWFsbG93TWlzc2luZykge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ2ludHJpbnNpYyAnICsgbmFtZSArICcgZXhpc3RzLCBidXQgaXMgbm90IGF2YWlsYWJsZS4gUGxlYXNlIGZpbGUgYW4gaXNzdWUhJyk7XG5cdH1cblx0cmV0dXJuIElOVFJJTlNJQ1Nba2V5XTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZXMtYWJzdHJhY3QvR2V0SW50cmluc2ljLmpzXG4vLyBtb2R1bGUgaWQgPSA1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBHZXRJbnRyaW5zaWMgPSByZXF1aXJlKCcuLi9HZXRJbnRyaW5zaWMnKTtcblxudmFyICRUeXBlRXJyb3IgPSBHZXRJbnRyaW5zaWMoJyVUeXBlRXJyb3IlJyk7XG52YXIgJFN5bnRheEVycm9yID0gR2V0SW50cmluc2ljKCclU3ludGF4RXJyb3IlJyk7XG5cbnZhciBoYXMgPSByZXF1aXJlKCdoYXMnKTtcblxudmFyIHByZWRpY2F0ZXMgPSB7XG4gIC8vIGh0dHBzOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1wcm9wZXJ0eS1kZXNjcmlwdG9yLXNwZWNpZmljYXRpb24tdHlwZVxuICAnUHJvcGVydHkgRGVzY3JpcHRvcic6IGZ1bmN0aW9uIGlzUHJvcGVydHlEZXNjcmlwdG9yKEVTLCBEZXNjKSB7XG4gICAgaWYgKEVTLlR5cGUoRGVzYykgIT09ICdPYmplY3QnKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHZhciBhbGxvd2VkID0ge1xuICAgICAgJ1tbQ29uZmlndXJhYmxlXV0nOiB0cnVlLFxuICAgICAgJ1tbRW51bWVyYWJsZV1dJzogdHJ1ZSxcbiAgICAgICdbW0dldF1dJzogdHJ1ZSxcbiAgICAgICdbW1NldF1dJzogdHJ1ZSxcbiAgICAgICdbW1ZhbHVlXV0nOiB0cnVlLFxuICAgICAgJ1tbV3JpdGFibGVdXSc6IHRydWVcbiAgICB9O1xuXG4gICAgZm9yICh2YXIga2V5IGluIERlc2MpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgaWYgKGhhcyhEZXNjLCBrZXkpICYmICFhbGxvd2VkW2tleV0pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBpc0RhdGEgPSBoYXMoRGVzYywgJ1tbVmFsdWVdXScpO1xuICAgIHZhciBJc0FjY2Vzc29yID0gaGFzKERlc2MsICdbW0dldF1dJykgfHwgaGFzKERlc2MsICdbW1NldF1dJyk7XG4gICAgaWYgKGlzRGF0YSAmJiBJc0FjY2Vzc29yKSB7XG4gICAgICB0aHJvdyBuZXcgJFR5cGVFcnJvcignUHJvcGVydHkgRGVzY3JpcHRvcnMgbWF5IG5vdCBiZSBib3RoIGFjY2Vzc29yIGFuZCBkYXRhIGRlc2NyaXB0b3JzJyk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGFzc2VydFJlY29yZChFUywgcmVjb3JkVHlwZSwgYXJndW1lbnROYW1lLCB2YWx1ZSkge1xuICB2YXIgcHJlZGljYXRlID0gcHJlZGljYXRlc1tyZWNvcmRUeXBlXTtcbiAgaWYgKHR5cGVvZiBwcmVkaWNhdGUgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgJFN5bnRheEVycm9yKCd1bmtub3duIHJlY29yZCB0eXBlOiAnICsgcmVjb3JkVHlwZSk7XG4gIH1cbiAgaWYgKCFwcmVkaWNhdGUoRVMsIHZhbHVlKSkge1xuICAgIHRocm93IG5ldyAkVHlwZUVycm9yKGFyZ3VtZW50TmFtZSArICcgbXVzdCBiZSBhICcgKyByZWNvcmRUeXBlKTtcbiAgfVxuICBjb25zb2xlLmxvZyhwcmVkaWNhdGUoRVMsIHZhbHVlKSwgdmFsdWUpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy1hYnN0cmFjdC9oZWxwZXJzL2Fzc2VydFJlY29yZC5qc1xuLy8gbW9kdWxlIGlkID0gNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBOdW1iZXIuaXNOYU4gfHwgZnVuY3Rpb24gaXNOYU4oYSkge1xuXHRyZXR1cm4gYSAhPT0gYTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZXMtYWJzdHJhY3QvaGVscGVycy9pc05hTi5qc1xuLy8gbW9kdWxlIGlkID0gNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyICRpc05hTiA9IE51bWJlci5pc05hTiB8fCBmdW5jdGlvbiAoYSkgeyByZXR1cm4gYSAhPT0gYTsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBOdW1iZXIuaXNGaW5pdGUgfHwgZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHR5cGVvZiB4ID09PSAnbnVtYmVyJyAmJiAhJGlzTmFOKHgpICYmIHggIT09IEluZmluaXR5ICYmIHggIT09IC1JbmZpbml0eTsgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy1hYnN0cmFjdC9oZWxwZXJzL2lzRmluaXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmluZCA9IHJlcXVpcmUoJ2Z1bmN0aW9uLWJpbmQnKTtcbnZhciBoYXMgPSBiaW5kLmNhbGwoRnVuY3Rpb24uY2FsbCwgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG5cbnZhciAkYXNzaWduID0gT2JqZWN0LmFzc2lnbjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2UpIHtcblx0aWYgKCRhc3NpZ24pIHtcblx0XHRyZXR1cm4gJGFzc2lnbih0YXJnZXQsIHNvdXJjZSk7XG5cdH1cblxuXHRmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG5cdFx0aWYgKGhhcyhzb3VyY2UsIGtleSkpIHtcblx0XHRcdHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG5cdFx0fVxuXHR9XG5cdHJldHVybiB0YXJnZXQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VzLWFic3RyYWN0L2hlbHBlcnMvYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSA2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNpZ24obnVtYmVyKSB7XG5cdHJldHVybiBudW1iZXIgPj0gMCA/IDEgOiAtMTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZXMtYWJzdHJhY3QvaGVscGVycy9zaWduLmpzXG4vLyBtb2R1bGUgaWQgPSA2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG1vZChudW1iZXIsIG1vZHVsbykge1xuXHR2YXIgcmVtYWluID0gbnVtYmVyICUgbW9kdWxvO1xuXHRyZXR1cm4gTWF0aC5mbG9vcihyZW1haW4gPj0gMCA/IHJlbWFpbiA6IHJlbWFpbiArIG1vZHVsbyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VzLWFic3RyYWN0L2hlbHBlcnMvbW9kLmpzXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzUHJpbWl0aXZlKHZhbHVlKSB7XG5cdHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCAodHlwZW9mIHZhbHVlICE9PSAnZnVuY3Rpb24nICYmIHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy1hYnN0cmFjdC9oZWxwZXJzL2lzUHJpbWl0aXZlLmpzXG4vLyBtb2R1bGUgaWQgPSA2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBHZXRJbnRyaW5zaWMgPSByZXF1aXJlKCcuL0dldEludHJpbnNpYycpO1xuXG52YXIgJE9iamVjdCA9IEdldEludHJpbnNpYygnJU9iamVjdCUnKTtcbnZhciAkVHlwZUVycm9yID0gR2V0SW50cmluc2ljKCclVHlwZUVycm9yJScpO1xudmFyICRTdHJpbmcgPSBHZXRJbnRyaW5zaWMoJyVTdHJpbmclJyk7XG5cbnZhciBhc3NlcnRSZWNvcmQgPSByZXF1aXJlKCcuL2hlbHBlcnMvYXNzZXJ0UmVjb3JkJyk7XG52YXIgJGlzTmFOID0gcmVxdWlyZSgnLi9oZWxwZXJzL2lzTmFOJyk7XG52YXIgJGlzRmluaXRlID0gcmVxdWlyZSgnLi9oZWxwZXJzL2lzRmluaXRlJyk7XG5cbnZhciBzaWduID0gcmVxdWlyZSgnLi9oZWxwZXJzL3NpZ24nKTtcbnZhciBtb2QgPSByZXF1aXJlKCcuL2hlbHBlcnMvbW9kJyk7XG5cbnZhciBJc0NhbGxhYmxlID0gcmVxdWlyZSgnaXMtY2FsbGFibGUnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJ2VzLXRvLXByaW1pdGl2ZS9lczUnKTtcblxudmFyIGhhcyA9IHJlcXVpcmUoJ2hhcycpO1xuXG4vLyBodHRwczovL2VzNS5naXRodWIuaW8vI3g5XG52YXIgRVM1ID0ge1xuXHRUb1ByaW1pdGl2ZTogdG9QcmltaXRpdmUsXG5cblx0VG9Cb29sZWFuOiBmdW5jdGlvbiBUb0Jvb2xlYW4odmFsdWUpIHtcblx0XHRyZXR1cm4gISF2YWx1ZTtcblx0fSxcblx0VG9OdW1iZXI6IGZ1bmN0aW9uIFRvTnVtYmVyKHZhbHVlKSB7XG5cdFx0cmV0dXJuICt2YWx1ZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1pbXBsaWNpdC1jb2VyY2lvblxuXHR9LFxuXHRUb0ludGVnZXI6IGZ1bmN0aW9uIFRvSW50ZWdlcih2YWx1ZSkge1xuXHRcdHZhciBudW1iZXIgPSB0aGlzLlRvTnVtYmVyKHZhbHVlKTtcblx0XHRpZiAoJGlzTmFOKG51bWJlcikpIHsgcmV0dXJuIDA7IH1cblx0XHRpZiAobnVtYmVyID09PSAwIHx8ICEkaXNGaW5pdGUobnVtYmVyKSkgeyByZXR1cm4gbnVtYmVyOyB9XG5cdFx0cmV0dXJuIHNpZ24obnVtYmVyKSAqIE1hdGguZmxvb3IoTWF0aC5hYnMobnVtYmVyKSk7XG5cdH0sXG5cdFRvSW50MzI6IGZ1bmN0aW9uIFRvSW50MzIoeCkge1xuXHRcdHJldHVybiB0aGlzLlRvTnVtYmVyKHgpID4+IDA7XG5cdH0sXG5cdFRvVWludDMyOiBmdW5jdGlvbiBUb1VpbnQzMih4KSB7XG5cdFx0cmV0dXJuIHRoaXMuVG9OdW1iZXIoeCkgPj4+IDA7XG5cdH0sXG5cdFRvVWludDE2OiBmdW5jdGlvbiBUb1VpbnQxNih2YWx1ZSkge1xuXHRcdHZhciBudW1iZXIgPSB0aGlzLlRvTnVtYmVyKHZhbHVlKTtcblx0XHRpZiAoJGlzTmFOKG51bWJlcikgfHwgbnVtYmVyID09PSAwIHx8ICEkaXNGaW5pdGUobnVtYmVyKSkgeyByZXR1cm4gMDsgfVxuXHRcdHZhciBwb3NJbnQgPSBzaWduKG51bWJlcikgKiBNYXRoLmZsb29yKE1hdGguYWJzKG51bWJlcikpO1xuXHRcdHJldHVybiBtb2QocG9zSW50LCAweDEwMDAwKTtcblx0fSxcblx0VG9TdHJpbmc6IGZ1bmN0aW9uIFRvU3RyaW5nKHZhbHVlKSB7XG5cdFx0cmV0dXJuICRTdHJpbmcodmFsdWUpO1xuXHR9LFxuXHRUb09iamVjdDogZnVuY3Rpb24gVG9PYmplY3QodmFsdWUpIHtcblx0XHR0aGlzLkNoZWNrT2JqZWN0Q29lcmNpYmxlKHZhbHVlKTtcblx0XHRyZXR1cm4gJE9iamVjdCh2YWx1ZSk7XG5cdH0sXG5cdENoZWNrT2JqZWN0Q29lcmNpYmxlOiBmdW5jdGlvbiBDaGVja09iamVjdENvZXJjaWJsZSh2YWx1ZSwgb3B0TWVzc2FnZSkge1xuXHRcdC8qIGpzaGludCBlcW51bGw6dHJ1ZSAqL1xuXHRcdGlmICh2YWx1ZSA9PSBudWxsKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcihvcHRNZXNzYWdlIHx8ICdDYW5ub3QgY2FsbCBtZXRob2Qgb24gJyArIHZhbHVlKTtcblx0XHR9XG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9LFxuXHRJc0NhbGxhYmxlOiBJc0NhbGxhYmxlLFxuXHRTYW1lVmFsdWU6IGZ1bmN0aW9uIFNhbWVWYWx1ZSh4LCB5KSB7XG5cdFx0aWYgKHggPT09IHkpIHsgLy8gMCA9PT0gLTAsIGJ1dCB0aGV5IGFyZSBub3QgaWRlbnRpY2FsLlxuXHRcdFx0aWYgKHggPT09IDApIHsgcmV0dXJuIDEgLyB4ID09PSAxIC8geTsgfVxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdHJldHVybiAkaXNOYU4oeCkgJiYgJGlzTmFOKHkpO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNS4xLyNzZWMtOFxuXHRUeXBlOiBmdW5jdGlvbiBUeXBlKHgpIHtcblx0XHRpZiAoeCA9PT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuICdOdWxsJztcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiB4ID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0cmV0dXJuICdVbmRlZmluZWQnO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIHggPT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIHggPT09ICdvYmplY3QnKSB7XG5cdFx0XHRyZXR1cm4gJ09iamVjdCc7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2YgeCA9PT0gJ251bWJlcicpIHtcblx0XHRcdHJldHVybiAnTnVtYmVyJztcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiB4ID09PSAnYm9vbGVhbicpIHtcblx0XHRcdHJldHVybiAnQm9vbGVhbic7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2YgeCA9PT0gJ3N0cmluZycpIHtcblx0XHRcdHJldHVybiAnU3RyaW5nJztcblx0XHR9XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLXByb3BlcnR5LWRlc2NyaXB0b3Itc3BlY2lmaWNhdGlvbi10eXBlXG5cdElzUHJvcGVydHlEZXNjcmlwdG9yOiBmdW5jdGlvbiBJc1Byb3BlcnR5RGVzY3JpcHRvcihEZXNjKSB7XG5cdFx0aWYgKHRoaXMuVHlwZShEZXNjKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0dmFyIGFsbG93ZWQgPSB7XG5cdFx0XHQnW1tDb25maWd1cmFibGVdXSc6IHRydWUsXG5cdFx0XHQnW1tFbnVtZXJhYmxlXV0nOiB0cnVlLFxuXHRcdFx0J1tbR2V0XV0nOiB0cnVlLFxuXHRcdFx0J1tbU2V0XV0nOiB0cnVlLFxuXHRcdFx0J1tbVmFsdWVdXSc6IHRydWUsXG5cdFx0XHQnW1tXcml0YWJsZV1dJzogdHJ1ZVxuXHRcdH07XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gRGVzYykgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cdFx0XHRpZiAoaGFzKERlc2MsIGtleSkgJiYgIWFsbG93ZWRba2V5XSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dmFyIGlzRGF0YSA9IGhhcyhEZXNjLCAnW1tWYWx1ZV1dJyk7XG5cdFx0dmFyIElzQWNjZXNzb3IgPSBoYXMoRGVzYywgJ1tbR2V0XV0nKSB8fCBoYXMoRGVzYywgJ1tbU2V0XV0nKTtcblx0XHRpZiAoaXNEYXRhICYmIElzQWNjZXNzb3IpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdQcm9wZXJ0eSBEZXNjcmlwdG9ycyBtYXkgbm90IGJlIGJvdGggYWNjZXNzb3IgYW5kIGRhdGEgZGVzY3JpcHRvcnMnKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzUuMS8jc2VjLTguMTAuMVxuXHRJc0FjY2Vzc29yRGVzY3JpcHRvcjogZnVuY3Rpb24gSXNBY2Nlc3NvckRlc2NyaXB0b3IoRGVzYykge1xuXHRcdGlmICh0eXBlb2YgRGVzYyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRhc3NlcnRSZWNvcmQodGhpcywgJ1Byb3BlcnR5IERlc2NyaXB0b3InLCAnRGVzYycsIERlc2MpO1xuXG5cdFx0aWYgKCFoYXMoRGVzYywgJ1tbR2V0XV0nKSAmJiAhaGFzKERlc2MsICdbW1NldF1dJykpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSxcblxuXHQvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNS4xLyNzZWMtOC4xMC4yXG5cdElzRGF0YURlc2NyaXB0b3I6IGZ1bmN0aW9uIElzRGF0YURlc2NyaXB0b3IoRGVzYykge1xuXHRcdGlmICh0eXBlb2YgRGVzYyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRhc3NlcnRSZWNvcmQodGhpcywgJ1Byb3BlcnR5IERlc2NyaXB0b3InLCAnRGVzYycsIERlc2MpO1xuXG5cdFx0aWYgKCFoYXMoRGVzYywgJ1tbVmFsdWVdXScpICYmICFoYXMoRGVzYywgJ1tbV3JpdGFibGVdXScpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzUuMS8jc2VjLTguMTAuM1xuXHRJc0dlbmVyaWNEZXNjcmlwdG9yOiBmdW5jdGlvbiBJc0dlbmVyaWNEZXNjcmlwdG9yKERlc2MpIHtcblx0XHRpZiAodHlwZW9mIERlc2MgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0YXNzZXJ0UmVjb3JkKHRoaXMsICdQcm9wZXJ0eSBEZXNjcmlwdG9yJywgJ0Rlc2MnLCBEZXNjKTtcblxuXHRcdGlmICghdGhpcy5Jc0FjY2Vzc29yRGVzY3JpcHRvcihEZXNjKSAmJiAhdGhpcy5Jc0RhdGFEZXNjcmlwdG9yKERlc2MpKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzUuMS8jc2VjLTguMTAuNFxuXHRGcm9tUHJvcGVydHlEZXNjcmlwdG9yOiBmdW5jdGlvbiBGcm9tUHJvcGVydHlEZXNjcmlwdG9yKERlc2MpIHtcblx0XHRpZiAodHlwZW9mIERlc2MgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRyZXR1cm4gRGVzYztcblx0XHR9XG5cblx0XHRhc3NlcnRSZWNvcmQodGhpcywgJ1Byb3BlcnR5IERlc2NyaXB0b3InLCAnRGVzYycsIERlc2MpO1xuXG5cdFx0aWYgKHRoaXMuSXNEYXRhRGVzY3JpcHRvcihEZXNjKSkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0dmFsdWU6IERlc2NbJ1tbVmFsdWVdXSddLFxuXHRcdFx0XHR3cml0YWJsZTogISFEZXNjWydbW1dyaXRhYmxlXV0nXSxcblx0XHRcdFx0ZW51bWVyYWJsZTogISFEZXNjWydbW0VudW1lcmFibGVdXSddLFxuXHRcdFx0XHRjb25maWd1cmFibGU6ICEhRGVzY1snW1tDb25maWd1cmFibGVdXSddXG5cdFx0XHR9O1xuXHRcdH0gZWxzZSBpZiAodGhpcy5Jc0FjY2Vzc29yRGVzY3JpcHRvcihEZXNjKSkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Z2V0OiBEZXNjWydbW0dldF1dJ10sXG5cdFx0XHRcdHNldDogRGVzY1snW1tTZXRdXSddLFxuXHRcdFx0XHRlbnVtZXJhYmxlOiAhIURlc2NbJ1tbRW51bWVyYWJsZV1dJ10sXG5cdFx0XHRcdGNvbmZpZ3VyYWJsZTogISFEZXNjWydbW0NvbmZpZ3VyYWJsZV1dJ11cblx0XHRcdH07XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdGcm9tUHJvcGVydHlEZXNjcmlwdG9yIG11c3QgYmUgY2FsbGVkIHdpdGggYSBmdWxseSBwb3B1bGF0ZWQgUHJvcGVydHkgRGVzY3JpcHRvcicpO1xuXHRcdH1cblx0fSxcblxuXHQvLyBodHRwczovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNS4xLyNzZWMtOC4xMC41XG5cdFRvUHJvcGVydHlEZXNjcmlwdG9yOiBmdW5jdGlvbiBUb1Byb3BlcnR5RGVzY3JpcHRvcihPYmopIHtcblx0XHRpZiAodGhpcy5UeXBlKE9iaikgIT09ICdPYmplY3QnKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignVG9Qcm9wZXJ0eURlc2NyaXB0b3IgcmVxdWlyZXMgYW4gb2JqZWN0Jyk7XG5cdFx0fVxuXG5cdFx0dmFyIGRlc2MgPSB7fTtcblx0XHRpZiAoaGFzKE9iaiwgJ2VudW1lcmFibGUnKSkge1xuXHRcdFx0ZGVzY1snW1tFbnVtZXJhYmxlXV0nXSA9IHRoaXMuVG9Cb29sZWFuKE9iai5lbnVtZXJhYmxlKTtcblx0XHR9XG5cdFx0aWYgKGhhcyhPYmosICdjb25maWd1cmFibGUnKSkge1xuXHRcdFx0ZGVzY1snW1tDb25maWd1cmFibGVdXSddID0gdGhpcy5Ub0Jvb2xlYW4oT2JqLmNvbmZpZ3VyYWJsZSk7XG5cdFx0fVxuXHRcdGlmIChoYXMoT2JqLCAndmFsdWUnKSkge1xuXHRcdFx0ZGVzY1snW1tWYWx1ZV1dJ10gPSBPYmoudmFsdWU7XG5cdFx0fVxuXHRcdGlmIChoYXMoT2JqLCAnd3JpdGFibGUnKSkge1xuXHRcdFx0ZGVzY1snW1tXcml0YWJsZV1dJ10gPSB0aGlzLlRvQm9vbGVhbihPYmoud3JpdGFibGUpO1xuXHRcdH1cblx0XHRpZiAoaGFzKE9iaiwgJ2dldCcpKSB7XG5cdFx0XHR2YXIgZ2V0dGVyID0gT2JqLmdldDtcblx0XHRcdGlmICh0eXBlb2YgZ2V0dGVyICE9PSAndW5kZWZpbmVkJyAmJiAhdGhpcy5Jc0NhbGxhYmxlKGdldHRlcikpIHtcblx0XHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignZ2V0dGVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXHRcdFx0fVxuXHRcdFx0ZGVzY1snW1tHZXRdXSddID0gZ2V0dGVyO1xuXHRcdH1cblx0XHRpZiAoaGFzKE9iaiwgJ3NldCcpKSB7XG5cdFx0XHR2YXIgc2V0dGVyID0gT2JqLnNldDtcblx0XHRcdGlmICh0eXBlb2Ygc2V0dGVyICE9PSAndW5kZWZpbmVkJyAmJiAhdGhpcy5Jc0NhbGxhYmxlKHNldHRlcikpIHtcblx0XHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ3NldHRlciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcblx0XHRcdH1cblx0XHRcdGRlc2NbJ1tbU2V0XV0nXSA9IHNldHRlcjtcblx0XHR9XG5cblx0XHRpZiAoKGhhcyhkZXNjLCAnW1tHZXRdXScpIHx8IGhhcyhkZXNjLCAnW1tTZXRdXScpKSAmJiAoaGFzKGRlc2MsICdbW1ZhbHVlXV0nKSB8fCBoYXMoZGVzYywgJ1tbV3JpdGFibGVdXScpKSkge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0ludmFsaWQgcHJvcGVydHkgZGVzY3JpcHRvci4gQ2Fubm90IGJvdGggc3BlY2lmeSBhY2Nlc3NvcnMgYW5kIGEgdmFsdWUgb3Igd3JpdGFibGUgYXR0cmlidXRlJyk7XG5cdFx0fVxuXHRcdHJldHVybiBkZXNjO1xuXHR9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVTNTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy1hYnN0cmFjdC9lczUuanNcbi8vIG1vZHVsZSBpZCA9IDY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxudmFyIGlzUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9oZWxwZXJzL2lzUHJpbWl0aXZlJyk7XG5cbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnaXMtY2FsbGFibGUnKTtcblxuLy8gaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNS4xLyNzZWMtOC4xMi44XG52YXIgRVM1aW50ZXJuYWxTbG90cyA9IHtcblx0J1tbRGVmYXVsdFZhbHVlXV0nOiBmdW5jdGlvbiAoTykge1xuXHRcdHZhciBhY3R1YWxIaW50O1xuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuXHRcdFx0YWN0dWFsSGludCA9IGFyZ3VtZW50c1sxXTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0YWN0dWFsSGludCA9IHRvU3RyLmNhbGwoTykgPT09ICdbb2JqZWN0IERhdGVdJyA/IFN0cmluZyA6IE51bWJlcjtcblx0XHR9XG5cblx0XHRpZiAoYWN0dWFsSGludCA9PT0gU3RyaW5nIHx8IGFjdHVhbEhpbnQgPT09IE51bWJlcikge1xuXHRcdFx0dmFyIG1ldGhvZHMgPSBhY3R1YWxIaW50ID09PSBTdHJpbmcgPyBbJ3RvU3RyaW5nJywgJ3ZhbHVlT2YnXSA6IFsndmFsdWVPZicsICd0b1N0cmluZyddO1xuXHRcdFx0dmFyIHZhbHVlLCBpO1xuXHRcdFx0Zm9yIChpID0gMDsgaSA8IG1ldGhvZHMubGVuZ3RoOyArK2kpIHtcblx0XHRcdFx0aWYgKGlzQ2FsbGFibGUoT1ttZXRob2RzW2ldXSkpIHtcblx0XHRcdFx0XHR2YWx1ZSA9IE9bbWV0aG9kc1tpXV0oKTtcblx0XHRcdFx0XHRpZiAoaXNQcmltaXRpdmUodmFsdWUpKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdObyBkZWZhdWx0IHZhbHVlJyk7XG5cdFx0fVxuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ2ludmFsaWQgW1tEZWZhdWx0VmFsdWVdXSBoaW50IHN1cHBsaWVkJyk7XG5cdH1cbn07XG5cbi8vIGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzUuMS8jc2VjLTkuMVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBUb1ByaW1pdGl2ZShpbnB1dCkge1xuXHRpZiAoaXNQcmltaXRpdmUoaW5wdXQpKSB7XG5cdFx0cmV0dXJuIGlucHV0O1xuXHR9XG5cdGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuXHRcdHJldHVybiBFUzVpbnRlcm5hbFNsb3RzWydbW0RlZmF1bHRWYWx1ZV1dJ10oaW5wdXQsIGFyZ3VtZW50c1sxXSk7XG5cdH1cblx0cmV0dXJuIEVTNWludGVybmFsU2xvdHNbJ1tbRGVmYXVsdFZhbHVlXV0nXShpbnB1dCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VzLXRvLXByaW1pdGl2ZS9lczUuanNcbi8vIG1vZHVsZSBpZCA9IDY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIGhhcyA9IHJlcXVpcmUoJ2hhcycpO1xudmFyIHJlZ2V4RXhlYyA9IFJlZ0V4cC5wcm90b3R5cGUuZXhlYztcbnZhciBnT1BEID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxudmFyIHRyeVJlZ2V4RXhlY0NhbGwgPSBmdW5jdGlvbiB0cnlSZWdleEV4ZWModmFsdWUpIHtcblx0dHJ5IHtcblx0XHR2YXIgbGFzdEluZGV4ID0gdmFsdWUubGFzdEluZGV4O1xuXHRcdHZhbHVlLmxhc3RJbmRleCA9IDA7XG5cblx0XHRyZWdleEV4ZWMuY2FsbCh2YWx1ZSk7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0gZmluYWxseSB7XG5cdFx0dmFsdWUubGFzdEluZGV4ID0gbGFzdEluZGV4O1xuXHR9XG59O1xudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbnZhciByZWdleENsYXNzID0gJ1tvYmplY3QgUmVnRXhwXSc7XG52YXIgaGFzVG9TdHJpbmdUYWcgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBTeW1ib2wudG9TdHJpbmdUYWcgPT09ICdzeW1ib2wnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzUmVnZXgodmFsdWUpIHtcblx0aWYgKCF2YWx1ZSB8fCB0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cdGlmICghaGFzVG9TdHJpbmdUYWcpIHtcblx0XHRyZXR1cm4gdG9TdHIuY2FsbCh2YWx1ZSkgPT09IHJlZ2V4Q2xhc3M7XG5cdH1cblxuXHR2YXIgZGVzY3JpcHRvciA9IGdPUEQodmFsdWUsICdsYXN0SW5kZXgnKTtcblx0dmFyIGhhc0xhc3RJbmRleERhdGFQcm9wZXJ0eSA9IGRlc2NyaXB0b3IgJiYgaGFzKGRlc2NyaXB0b3IsICd2YWx1ZScpO1xuXHRpZiAoIWhhc0xhc3RJbmRleERhdGFQcm9wZXJ0eSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHJldHVybiB0cnlSZWdleEV4ZWNDYWxsKHZhbHVlKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaXMtcmVnZXgvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIEVTID0gcmVxdWlyZSgnZXMtYWJzdHJhY3QvZXM2Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZmluZChwcmVkaWNhdGUpIHtcblx0dmFyIGxpc3QgPSBFUy5Ub09iamVjdCh0aGlzKTtcblx0dmFyIGxlbmd0aCA9IEVTLlRvSW50ZWdlcihFUy5Ub0xlbmd0aChsaXN0Lmxlbmd0aCkpO1xuXHRpZiAoIUVTLklzQ2FsbGFibGUocHJlZGljYXRlKSkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0FycmF5I2ZpbmQ6IHByZWRpY2F0ZSBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcblx0fVxuXHRpZiAobGVuZ3RoID09PSAwKSB7XG5cdFx0cmV0dXJuIHVuZGVmaW5lZDtcblx0fVxuXHR2YXIgdGhpc0FyZyA9IGFyZ3VtZW50c1sxXTtcblx0Zm9yICh2YXIgaSA9IDAsIHZhbHVlOyBpIDwgbGVuZ3RoOyBpKyspIHtcblx0XHR2YWx1ZSA9IGxpc3RbaV07XG5cdFx0aWYgKEVTLkNhbGwocHJlZGljYXRlLCB0aGlzQXJnLCBbdmFsdWUsIGksIGxpc3RdKSkge1xuXHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gdW5kZWZpbmVkO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9hcnJheS5wcm90b3R5cGUuZmluZC9pbXBsZW1lbnRhdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdldFBvbHlmaWxsKCkge1xuXHQvLyBEZXRlY3QgaWYgYW4gaW1wbGVtZW50YXRpb24gZXhpc3RzXG5cdC8vIERldGVjdCBlYXJseSBpbXBsZW1lbnRhdGlvbnMgd2hpY2ggc2tpcHBlZCBob2xlcyBpbiBzcGFyc2UgYXJyYXlzXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zcGFyc2UtYXJyYXlzXG5cdHZhciBpbXBsZW1lbnRlZCA9IEFycmF5LnByb3RvdHlwZS5maW5kICYmIFssIDFdLmZpbmQoZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9KSAhPT0gMTtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZ2xvYmFsLXJlcXVpcmVcblx0cmV0dXJuIGltcGxlbWVudGVkID8gQXJyYXkucHJvdG90eXBlLmZpbmQgOiByZXF1aXJlKCcuL2ltcGxlbWVudGF0aW9uJyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2FycmF5LnByb3RvdHlwZS5maW5kL3BvbHlmaWxsLmpzXG4vLyBtb2R1bGUgaWQgPSA2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBkZWZpbmUgPSByZXF1aXJlKCdkZWZpbmUtcHJvcGVydGllcycpO1xudmFyIGdldFBvbHlmaWxsID0gcmVxdWlyZSgnLi9wb2x5ZmlsbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNoaW1BcnJheVByb3RvdHlwZUZpbmQoKSB7XG5cdHZhciBwb2x5ZmlsbCA9IGdldFBvbHlmaWxsKCk7XG5cblx0ZGVmaW5lKEFycmF5LnByb3RvdHlwZSwgeyBmaW5kOiBwb2x5ZmlsbCB9LCB7XG5cdFx0ZmluZDogZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIEFycmF5LnByb3RvdHlwZS5maW5kICE9PSBwb2x5ZmlsbDtcblx0XHR9XG5cdH0pO1xuXG5cdHJldHVybiBwb2x5ZmlsbDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYXJyYXkucHJvdG90eXBlLmZpbmQvc2hpbS5qc1xuLy8gbW9kdWxlIGlkID0gNjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDE3OTIgMTc5MlxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tYXJyb3dzLWFsdFxcXCI+PHRpdGxlPmFycm93cy1hbHQ8L3RpdGxlPjxwYXRoIGQ9XFxcIk0xNDExIDU0MWwtMzU1IDM1NSAzNTUgMzU1IDE0NC0xNDRxMjktMzEgNzAtMTQgMzkgMTcgMzkgNTl2NDQ4cTAgMjYtMTkgNDV0LTQ1IDE5aC00NDhxLTQyIDAtNTktNDAtMTctMzkgMTQtNjlsMTQ0LTE0NC0zNTUtMzU1LTM1NSAzNTUgMTQ0IDE0NHEzMSAzMCAxNCA2OS0xNyA0MC01OSA0MGgtNDQ4cS0yNiAwLTQ1LTE5dC0xOS00NXYtNDQ4cTAtNDIgNDAtNTkgMzktMTcgNjkgMTRsMTQ0IDE0NCAzNTUtMzU1LTM1NS0zNTUtMTQ0IDE0NHEtMTkgMTktNDUgMTktMTIgMC0yNC01LTQwLTE3LTQwLTU5di00NDhxMC0yNiAxOS00NXQ0NS0xOWg0NDhxNDIgMCA1OSA0MCAxNyAzOS0xNCA2OWwtMTQ0IDE0NCAzNTUgMzU1IDM1NS0zNTUtMTQ0LTE0NHEtMzEtMzAtMTQtNjkgMTctNDAgNTktNDBoNDQ4cTI2IDAgNDUgMTl0MTkgNDV2NDQ4cTAgNDItMzkgNTktMTMgNS0yNSA1LTI2IDAtNDUtMTl6XFxcIi8+PC9zeW1ib2w+PHN5bWJvbCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNzkyIDE3OTJcXFwiIGlkPVxcXCJsZXBsYXllci1pY29uLWJhY2t3YXJkXFxcIj48dGl0bGU+YmFja3dhcmQ8L3RpdGxlPjxwYXRoIGQ9XFxcIk0xNjgzIDE0MXExOS0xOSAzMi0xM3QxMyAzMnYxNDcycTAgMjYtMTMgMzJ0LTMyLTEzbC03MTAtNzEwcS04LTktMTMtMTl2NzEwcTAgMjYtMTMgMzJ0LTMyLTEzbC03MTAtNzEwcS0xOS0xOS0xOS00NXQxOS00NWw3MTAtNzEwcTE5LTE5IDMyLTEzdDEzIDMydjcxMHE1LTExIDEzLTE5elxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi1idWxsc2V5ZVxcXCI+PHRpdGxlPmJ1bGxzZXllPC90aXRsZT48cGF0aCBkPVxcXCJNMTE1MiA4OTZxMCAxMDYtNzUgMTgxdC0xODEgNzUtMTgxLTc1LTc1LTE4MSA3NS0xODEgMTgxLTc1IDE4MSA3NSA3NSAxODF6bTEyOCAwcTAtMTU5LTExMi41LTI3MS41dC0yNzEuNS0xMTIuNS0yNzEuNSAxMTIuNS0xMTIuNSAyNzEuNSAxMTIuNSAyNzEuNSAyNzEuNSAxMTIuNSAyNzEuNS0xMTIuNSAxMTIuNS0yNzEuNXptMTI4IDBxMCAyMTItMTUwIDM2MnQtMzYyIDE1MC0zNjItMTUwLTE1MC0zNjIgMTUwLTM2MiAzNjItMTUwIDM2MiAxNTAgMTUwIDM2MnptMTI4IDBxMC0xMzAtNTEtMjQ4LjV0LTEzNi41LTIwNC0yMDQtMTM2LjUtMjQ4LjUtNTEtMjQ4LjUgNTEtMjA0IDEzNi41LTEzNi41IDIwNC01MSAyNDguNSA1MSAyNDguNSAxMzYuNSAyMDQgMjA0IDEzNi41IDI0OC41IDUxIDI0OC41LTUxIDIwNC0xMzYuNSAxMzYuNS0yMDQgNTEtMjQ4LjV6bTEyOCAwcTAgMjA5LTEwMyAzODUuNXQtMjc5LjUgMjc5LjUtMzg1LjUgMTAzLTM4NS41LTEwMy0yNzkuNS0yNzkuNS0xMDMtMzg1LjUgMTAzLTM4NS41IDI3OS41LTI3OS41IDM4NS41LTEwMyAzODUuNSAxMDMgMjc5LjUgMjc5LjUgMTAzIDM4NS41elxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgNDAwIDM4MFxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tY2F0XFxcIj48dGl0bGU+Y2F0PC90aXRsZT4gPHBhdGggZD1cXFwiTSAxNTEuMzQ5MDQsMzA3LjIwNDU1IEwgMjY0LjM0OTA0LDMwNy4yMDQ1NSBDIDI2NC4zNDkwNCwyOTEuMTQwOTYgMjYzLjIwMjEsMjg3Ljk1NDU1IDIzNi41OTkwNCwyODcuOTU0NTUgQyAyNDAuODQ5MDQsMjc1LjIwNDU1IDI1OC4xMjQyNCwyNDQuMzU4MDggMjY3LjcyNDA0LDI0NC4zNTgwOCBDIDI3Ni4yMTcwNywyNDQuMzU4MDggMjg2LjM0OTA0LDI0NC44MjU5MiAyODYuMzQ5MDQsMjY0LjIwNDU1IEMgMjg2LjM0OTA0LDI4Ni4yMDQ1NSAzMjMuMzcxNzEsMzIxLjY3NTQ3IDMzMi4zNDkwNCwzMDcuMjA0NTUgQyAzNDUuNzI3NjksMjg1LjYzODk3IDMwOS4zNDkwNCwyOTIuMjE1MTQgMzA5LjM0OTA0LDI0MC4yMDQ1NSBDIDMwOS4zNDkwNCwxNjkuMDUxMzUgMzUwLjg3NDE3LDE3OS4xODA3MSAzNTAuODc0MTcsMTM5LjIwNDU1IEMgMzUwLjg3NDE3LDExOS4yMDQ1NSAzNDUuMzQ5MDQsMTE2LjUwMzc0IDM0NS4zNDkwNCwxMDIuMjA0NTUgQyAzNDUuMzQ5MDQsODMuMzA2OTUgMzYxLjk5NzE3LDg0LjQwMzU3NyAzNTguNzU4MDUsNjguNzM0ODc5IEMgMzU2LjUyMDYxLDU3LjkxMTY1NiAzNTQuNzY5NjIsNDkuMjMxOTkgMzUzLjQ2NTE2LDM2LjE0Mzg4OSBDIDM1Mi41Mzk1OSwyNi44NTczMDUgMzUyLjI0NDUyLDE2Ljk1OTM5OCAzNDIuNTk4NTUsMTcuMzU3MzgyIEMgMzMxLjI2NTA1LDE3LjgyNDk5MiAzMjYuOTY1NDksMzcuNzc0MTkgMzA5LjM0OTA0LDM5LjIwNDU0OSBDIDI5MS43Njg1MSw0MC42MzE5OTEgMjc2Ljc3ODM0LDI0LjIzODAyOCAyNjkuOTc0MDQsMjYuNTc5NTQ5IEMgMjYzLjIyNzA5LDI4LjkwMTMzNCAyNjUuMzQ5MDQsNDcuMjA0NTQ5IDI2OS4zNDkwNCw2MC4yMDQ1NDkgQyAyNzUuNjM1ODgsODAuNjM2NzcxIDI4OS4zNDkwNCwxMDcuMjA0NTUgMjY0LjM0OTA0LDExMS4yMDQ1NSBDIDIzOS4zNDkwNCwxMTUuMjA0NTUgMTk2LjM0OTA0LDExOS4yMDQ1NSAxNjUuMzQ5MDQsMTYwLjIwNDU1IEMgMTM0LjM0OTA0LDIwMS4yMDQ1NSAxMzUuNDkzNDIsMjQ5LjMyMTIgMTIzLjM0OTA0LDI2NC4yMDQ1NSBDIDgyLjU5MDY5NiwzMTQuMTU1MjkgNDAuODIzOTE5LDI5My42NDYyNSA0MC44MjM5MTksMzM1LjIwNDU1IEMgNDAuODIzOTE5LDM1My44MTAxOSA3Mi4zNDkwNDUsMzY3LjIwNDU1IDc3LjM0OTA0NSwzNjEuMjA0NTUgQyA4Mi4zNDkwNDUsMzU1LjIwNDU1IDM0Ljg2Mzc2NCwzMzcuMzI1ODcgODcuOTk1NDkyLDMxNi4yMDQ1NSBDIDEzMy4zODcxMSwyOTguMTYwMTQgMTM3LjQzOTE0LDI5NC40NzY2MyAxNTEuMzQ5MDQsMzA3LjIwNDU1IHogXFxcIiBzdHlsZT1cXFwiZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjFweDtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxXFxcIi8+IDwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi1jb21tZW50aW5nLW9cXFwiPjx0aXRsZT5jb21tZW50aW5nLW88L3RpdGxlPjxwYXRoIGQ9XFxcIk02NDAgODk2cTAgNTMtMzcuNSA5MC41dC05MC41IDM3LjUtOTAuNS0zNy41LTM3LjUtOTAuNSAzNy41LTkwLjUgOTAuNS0zNy41IDkwLjUgMzcuNSAzNy41IDkwLjV6bTM4NCAwcTAgNTMtMzcuNSA5MC41dC05MC41IDM3LjUtOTAuNS0zNy41LTM3LjUtOTAuNSAzNy41LTkwLjUgOTAuNS0zNy41IDkwLjUgMzcuNSAzNy41IDkwLjV6bTM4NCAwcTAgNTMtMzcuNSA5MC41dC05MC41IDM3LjUtOTAuNS0zNy41LTM3LjUtOTAuNSAzNy41LTkwLjUgOTAuNS0zNy41IDkwLjUgMzcuNSAzNy41IDkwLjV6bS01MTItNTEycS0yMDQgMC0zODEuNSA2OS41dC0yODIgMTg3LjUtMTA0LjUgMjU1cTAgMTEyIDcxLjUgMjEzLjV0MjAxLjUgMTc1LjVsODcgNTAtMjcgOTZxLTI0IDkxLTcwIDE3MiAxNTItNjMgMjc1LTE3MWw0My0zOCA1NyA2cTY5IDggMTMwIDggMjA0IDAgMzgxLjUtNjkuNXQyODItMTg3LjUgMTA0LjUtMjU1LTEwNC41LTI1NS0yODItMTg3LjUtMzgxLjUtNjkuNXptODk2IDUxMnEwIDE3NC0xMjAgMzIxLjV0LTMyNiAyMzMtNDUwIDg1LjVxLTcwIDAtMTQ1LTgtMTk4IDE3NS00NjAgMjQyLTQ5IDE0LTExNCAyMmgtNXEtMTUgMC0yNy0xMC41dC0xNi0yNy41di0xcS0zLTQtLjUtMTJ0Mi0xMCA0LjUtOS41bDYtOSA3LTguNSA4LTlxNy04IDMxLTM0LjV0MzQuNS0zOCAzMS0zOS41IDMyLjUtNTEgMjctNTkgMjYtNzZxLTE1Ny04OS0yNDcuNS0yMjB0LTkwLjUtMjgxcTAtMTMwIDcxLTI0OC41dDE5MS0yMDQuNSAyODYtMTM2LjUgMzQ4LTUwLjUgMzQ4IDUwLjUgMjg2IDEzNi41IDE5MSAyMDQuNSA3MSAyNDguNXpcXFwiLz48L3N5bWJvbD48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDE3OTIgMTc5MlxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tZG93bmxvYWRcXFwiPjx0aXRsZT5kb3dubG9hZDwvdGl0bGU+PHBhdGggZD1cXFwiTTEzNDQgMTM0NHEwLTI2LTE5LTQ1dC00NS0xOS00NSAxOS0xOSA0NSAxOSA0NSA0NSAxOSA0NS0xOSAxOS00NXptMjU2IDBxMC0yNi0xOS00NXQtNDUtMTktNDUgMTktMTkgNDUgMTkgNDUgNDUgMTkgNDUtMTkgMTktNDV6bTEyOC0yMjR2MzIwcTAgNDAtMjggNjh0LTY4IDI4aC0xNDcycS00MCAwLTY4LTI4dC0yOC02OHYtMzIwcTAtNDAgMjgtNjh0NjgtMjhoNDY1bDEzNSAxMzZxNTggNTYgMTM2IDU2dDEzNi01NmwxMzYtMTM2aDQ2NHE0MCAwIDY4IDI4dDI4IDY4em0tMzI1LTU2OXExNyA0MS0xNCA3MGwtNDQ4IDQ0OHEtMTggMTktNDUgMTl0LTQ1LTE5bC00NDgtNDQ4cS0zMS0yOS0xNC03MCAxNy0zOSA1OS0zOWgyNTZ2LTQ0OHEwLTI2IDE5LTQ1dDQ1LTE5aDI1NnEyNiAwIDQ1IDE5dDE5IDQ1djQ0OGgyNTZxNDIgMCA1OSAzOXpcXFwiLz48L3N5bWJvbD48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDE3OTIgMTc5MlxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tZWRpdFxcXCI+PHRpdGxlPmVkaXQ8L3RpdGxlPjxwYXRoIGQ9XFxcIk04ODggMTE4NGwxMTYtMTE2LTE1Mi0xNTItMTE2IDExNnY1Nmg5NnY5Nmg1NnptNDQwLTcyMHEtMTYtMTYtMzMgMWwtMzUwIDM1MHEtMTcgMTctMSAzM3QzMy0xbDM1MC0zNTBxMTctMTcgMS0zM3ptODAgNTk0djE5MHEwIDExOS04NC41IDIwMy41dC0yMDMuNSA4NC41aC04MzJxLTExOSAwLTIwMy41LTg0LjV0LTg0LjUtMjAzLjV2LTgzMnEwLTExOSA4NC41LTIwMy41dDIwMy41LTg0LjVoODMycTYzIDAgMTE3IDI1IDE1IDcgMTggMjMgMyAxNy05IDI5bC00OSA0OXEtMTQgMTQtMzIgOC0yMy02LTQ1LTZoLTgzMnEtNjYgMC0xMTMgNDd0LTQ3IDExM3Y4MzJxMCA2NiA0NyAxMTN0MTEzIDQ3aDgzMnE2NiAwIDExMy00N3Q0Ny0xMTN2LTEyNnEwLTEzIDktMjJsNjQtNjRxMTUtMTUgMzUtN3QyMCAyOXptLTk2LTczOGwyODggMjg4LTY3MiA2NzJoLTI4OHYtMjg4em00NDQgMTMybC05MiA5Mi0yODgtMjg4IDkyLTkycTI4LTI4IDY4LTI4dDY4IDI4bDE1MiAxNTJxMjggMjggMjggNjh0LTI4IDY4elxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi1mb3J3YXJkXFxcIj48dGl0bGU+Zm9yd2FyZDwvdGl0bGU+PHBhdGggZD1cXFwiTTEwOSAxNjUxcS0xOSAxOS0zMiAxM3QtMTMtMzJ2LTE0NzJxMC0yNiAxMy0zMnQzMiAxM2w3MTAgNzEwcTggOCAxMyAxOXYtNzEwcTAtMjYgMTMtMzJ0MzIgMTNsNzEwIDcxMHExOSAxOSAxOSA0NXQtMTkgNDVsLTcxMCA3MTBxLTE5IDE5LTMyIDEzdC0xMy0zMnYtNzEwcS01IDEwLTEzIDE5elxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi1pbmZvXFxcIj48dGl0bGU+aW5mbzwvdGl0bGU+PHBhdGggZD1cXFwiTTEyMTYgMTM0NHYxMjhxMCAyNi0xOSA0NXQtNDUgMTloLTUxMnEtMjYgMC00NS0xOXQtMTktNDV2LTEyOHEwLTI2IDE5LTQ1dDQ1LTE5aDY0di0zODRoLTY0cS0yNiAwLTQ1LTE5dC0xOS00NXYtMTI4cTAtMjYgMTktNDV0NDUtMTloMzg0cTI2IDAgNDUgMTl0MTkgNDV2NTc2aDY0cTI2IDAgNDUgMTl0MTkgNDV6bS0xMjgtMTE1MnYxOTJxMCAyNi0xOSA0NXQtNDUgMTloLTI1NnEtMjYgMC00NS0xOXQtMTktNDV2LTE5MnEwLTI2IDE5LTQ1dDQ1LTE5aDI1NnEyNiAwIDQ1IDE5dDE5IDQ1elxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi1saXN0LXVsXFxcIj48dGl0bGU+bGlzdC11bDwvdGl0bGU+PHBhdGggZD1cXFwiTTM4NCAxNDA4cTAgODAtNTYgMTM2dC0xMzYgNTYtMTM2LTU2LTU2LTEzNiA1Ni0xMzYgMTM2LTU2IDEzNiA1NiA1NiAxMzZ6bTAtNTEycTAgODAtNTYgMTM2dC0xMzYgNTYtMTM2LTU2LTU2LTEzNiA1Ni0xMzYgMTM2LTU2IDEzNiA1NiA1NiAxMzZ6bTE0MDggNDE2djE5MnEwIDEzLTkuNSAyMi41dC0yMi41IDkuNWgtMTIxNnEtMTMgMC0yMi41LTkuNXQtOS41LTIyLjV2LTE5MnEwLTEzIDkuNS0yMi41dDIyLjUtOS41aDEyMTZxMTMgMCAyMi41IDkuNXQ5LjUgMjIuNXptLTE0MDgtOTI4cTAgODAtNTYgMTM2dC0xMzYgNTYtMTM2LTU2LTU2LTEzNiA1Ni0xMzYgMTM2LTU2IDEzNiA1NiA1NiAxMzZ6bTE0MDggNDE2djE5MnEwIDEzLTkuNSAyMi41dC0yMi41IDkuNWgtMTIxNnEtMTMgMC0yMi41LTkuNXQtOS41LTIyLjV2LTE5MnEwLTEzIDkuNS0yMi41dDIyLjUtOS41aDEyMTZxMTMgMCAyMi41IDkuNXQ5LjUgMjIuNXptMC01MTJ2MTkycTAgMTMtOS41IDIyLjV0LTIyLjUgOS41aC0xMjE2cS0xMyAwLTIyLjUtOS41dC05LjUtMjIuNXYtMTkycTAtMTMgOS41LTIyLjV0MjIuNS05LjVoMTIxNnExMyAwIDIyLjUgOS41dDkuNSAyMi41elxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi1tYWdpY1xcXCI+PHRpdGxlPm1hZ2ljPC90aXRsZT48cGF0aCBkPVxcXCJNMTI1NCA1ODFsMjkzLTI5My0xMDctMTA3LTI5MyAyOTN6bTQ0Ny0yOTNxMCAyNy0xOCA0NWwtMTI4NiAxMjg2cS0xOCAxOC00NSAxOHQtNDUtMThsLTE5OC0xOThxLTE4LTE4LTE4LTQ1dDE4LTQ1bDEyODYtMTI4NnExOC0xOCA0NS0xOHQ0NSAxOGwxOTggMTk4cTE4IDE4IDE4IDQ1em0tMTM1MS0xOTBsOTggMzAtOTggMzAtMzAgOTgtMzAtOTgtOTgtMzAgOTgtMzAgMzAtOTh6bTM1MCAxNjJsMTk2IDYwLTE5NiA2MC02MCAxOTYtNjAtMTk2LTE5Ni02MCAxOTYtNjAgNjAtMTk2em05MzAgNDc4bDk4IDMwLTk4IDMwLTMwIDk4LTMwLTk4LTk4LTMwIDk4LTMwIDMwLTk4em0tNjQwLTY0MGw5OCAzMC05OCAzMC0zMCA5OC0zMC05OC05OC0zMCA5OC0zMCAzMC05OHpcXFwiLz48L3N5bWJvbD48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDE3OTIgMTc5MlxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tcGF1c2VcXFwiPjx0aXRsZT5wYXVzZTwvdGl0bGU+PHBhdGggZD1cXFwiTTE2NjQgMTkydjE0MDhxMCAyNi0xOSA0NXQtNDUgMTloLTUxMnEtMjYgMC00NS0xOXQtMTktNDV2LTE0MDhxMC0yNiAxOS00NXQ0NS0xOWg1MTJxMjYgMCA0NSAxOXQxOSA0NXptLTg5NiAwdjE0MDhxMCAyNi0xOSA0NXQtNDUgMTloLTUxMnEtMjYgMC00NS0xOXQtMTktNDV2LTE0MDhxMC0yNiAxOS00NXQ0NS0xOWg1MTJxMjYgMCA0NSAxOXQxOSA0NXpcXFwiLz48L3N5bWJvbD48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDE3OTIgMTc5MlxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tcGxhbmVcXFwiPjx0aXRsZT5wbGFuZTwvdGl0bGU+PHBhdGggZD1cXFwiTTE1NjggMTYwcTQ0IDUyIDEyIDE0OHQtMTA4IDE3MmwtMTYxIDE2MSAxNjAgNjk2cTUgMTktMTIgMzNsLTEyOCA5NnEtNyA2LTE5IDYtNCAwLTctMS0xNS0zLTIxLTE2bC0yNzktNTA4LTI1OSAyNTkgNTMgMTk0cTUgMTctOCAzMWwtOTYgOTZxLTkgOS0yMyA5aC0ycS0xNS0yLTI0LTEzbC0xODktMjUyLTI1Mi0xODlxLTExLTctMTMtMjMtMS0xMyA5LTI1bDk2LTk3cTktOSAyMy05IDYgMCA4IDFsMTk0IDUzIDI1OS0yNTktNTA4LTI3OXEtMTQtOC0xNy0yNC0yLTE2IDktMjdsMTI4LTEyOHExNC0xMyAzMC04bDY2NSAxNTkgMTYwLTE2MHE3Ni03NiAxNzItMTA4dDE0OCAxMnpcXFwiLz48L3N5bWJvbD48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDE3OTIgMTc5MlxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tcGxheVxcXCI+PHRpdGxlPnBsYXk8L3RpdGxlPjxwYXRoIGQ9XFxcIk0xNTc2IDkyN2wtMTMyOCA3MzhxLTIzIDEzLTM5LjUgM3QtMTYuNS0zNnYtMTQ3MnEwLTI2IDE2LjUtMzZ0MzkuNSAzbDEzMjggNzM4cTIzIDEzIDIzIDMxdC0yMyAzMXpcXFwiLz48L3N5bWJvbD48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDE3OTIgMTc5MlxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tcGx1c1xcXCI+PHRpdGxlPnBsdXM8L3RpdGxlPjxwYXRoIGQ9XFxcIk0xNjAwIDczNnYxOTJxMCA0MC0yOCA2OHQtNjggMjhoLTQxNnY0MTZxMCA0MC0yOCA2OHQtNjggMjhoLTE5MnEtNDAgMC02OC0yOHQtMjgtNjh2LTQxNmgtNDE2cS00MCAwLTY4LTI4dC0yOC02OHYtMTkycTAtNDAgMjgtNjh0NjgtMjhoNDE2di00MTZxMC00MCAyOC02OHQ2OC0yOGgxOTJxNDAgMCA2OCAyOHQyOCA2OHY0MTZoNDE2cTQwIDAgNjggMjh0MjggNjh6XFxcIi8+PC9zeW1ib2w+PHN5bWJvbCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNzkyIDE3OTJcXFwiIGlkPVxcXCJsZXBsYXllci1pY29uLXJlZG9cXFwiPjx0aXRsZT5yZWRvPC90aXRsZT48cGF0aCBkPVxcXCJNMTY2NCAyNTZ2NDQ4cTAgMjYtMTkgNDV0LTQ1IDE5aC00NDhxLTQyIDAtNTktNDAtMTctMzkgMTQtNjlsMTM4LTEzOHEtMTQ4LTEzNy0zNDktMTM3LTEwNCAwLTE5OC41IDQwLjV0LTE2My41IDEwOS41LTEwOS41IDE2My41LTQwLjUgMTk4LjUgNDAuNSAxOTguNSAxMDkuNSAxNjMuNSAxNjMuNSAxMDkuNSAxOTguNSA0MC41cTExOSAwIDIyNS01MnQxNzktMTQ3cTctMTAgMjMtMTIgMTQgMCAyNSA5bDEzNyAxMzhxOSA4IDkuNSAyMC41dC03LjUgMjIuNXEtMTA5IDEzMi0yNjQgMjA0LjV0LTMyNyA3Mi41cS0xNTYgMC0yOTgtNjF0LTI0NS0xNjQtMTY0LTI0NS02MS0yOTggNjEtMjk4IDE2NC0yNDUgMjQ1LTE2NCAyOTgtNjFxMTQ3IDAgMjg0LjUgNTUuNXQyNDQuNSAxNTYuNWwxMzAtMTI5cTI5LTMxIDcwLTE0IDM5IDE3IDM5IDU5elxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi1yZWZyZXNoXFxcIj48dGl0bGU+cmVmcmVzaDwvdGl0bGU+PHBhdGggZD1cXFwiTTE2MzkgMTA1NnEwIDUtMSA3LTY0IDI2OC0yNjggNDM0LjV0LTQ3OCAxNjYuNXEtMTQ2IDAtMjgyLjUtNTV0LTI0My41LTE1N2wtMTI5IDEyOXEtMTkgMTktNDUgMTl0LTQ1LTE5LTE5LTQ1di00NDhxMC0yNiAxOS00NXQ0NS0xOWg0NDhxMjYgMCA0NSAxOXQxOSA0NS0xOSA0NWwtMTM3IDEzN3E3MSA2NiAxNjEgMTAydDE4NyAzNnExMzQgMCAyNTAtNjV0MTg2LTE3OXExMS0xNyA1My0xMTcgOC0yMyAzMC0yM2gxOTJxMTMgMCAyMi41IDkuNXQ5LjUgMjIuNXptMjUtODAwdjQ0OHEwIDI2LTE5IDQ1dC00NSAxOWgtNDQ4cS0yNiAwLTQ1LTE5dC0xOS00NSAxOS00NWwxMzgtMTM4cS0xNDgtMTM3LTM0OS0xMzctMTM0IDAtMjUwIDY1dC0xODYgMTc5cS0xMSAxNy01MyAxMTctOCAyMy0zMCAyM2gtMTk5cS0xMyAwLTIyLjUtOS41dC05LjUtMjIuNXYtN3E2NS0yNjggMjcwLTQzNC41dDQ4MC0xNjYuNXExNDYgMCAyODQgNTUuNXQyNDUgMTU2LjVsMTMwLTEyOXExOS0xOSA0NS0xOXQ0NSAxOSAxOSA0NXpcXFwiLz48L3N5bWJvbD48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDE3OTIgMTc5MlxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tdHJhc2hcXFwiPjx0aXRsZT50cmFzaDwvdGl0bGU+PHBhdGggZD1cXFwiTTcwNCAxMzc2di03MDRxMC0xNC05LTIzdC0yMy05aC02NHEtMTQgMC0yMyA5dC05IDIzdjcwNHEwIDE0IDkgMjN0MjMgOWg2NHExNCAwIDIzLTl0OS0yM3ptMjU2IDB2LTcwNHEwLTE0LTktMjN0LTIzLTloLTY0cS0xNCAwLTIzIDl0LTkgMjN2NzA0cTAgMTQgOSAyM3QyMyA5aDY0cTE0IDAgMjMtOXQ5LTIzem0yNTYgMHYtNzA0cTAtMTQtOS0yM3QtMjMtOWgtNjRxLTE0IDAtMjMgOXQtOSAyM3Y3MDRxMCAxNCA5IDIzdDIzIDloNjRxMTQgMCAyMy05dDktMjN6bS01NDQtOTkyaDQ0OGwtNDgtMTE3cS03LTktMTctMTFoLTMxN3EtMTAgMi0xNyAxMXptOTI4IDMydjY0cTAgMTQtOSAyM3QtMjMgOWgtOTZ2OTQ4cTAgODMtNDcgMTQzLjV0LTExMyA2MC41aC04MzJxLTY2IDAtMTEzLTU4LjV0LTQ3LTE0MS41di05NTJoLTk2cS0xNCAwLTIzLTl0LTktMjN2LTY0cTAtMTQgOS0yM3QyMy05aDMwOWw3MC0xNjdxMTUtMzcgNTQtNjN0NzktMjZoMzIwcTQwIDAgNzkgMjZ0NTQgNjNsNzAgMTY3aDMwOXExNCAwIDIzIDl0OSAyM3pcXFwiLz48L3N5bWJvbD48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDE3OTIgMTc5MlxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tdW5kb1xcXCI+PHRpdGxlPnVuZG88L3RpdGxlPjxwYXRoIGQ9XFxcIk0xNjY0IDg5NnEwIDE1Ni02MSAyOTh0LTE2NCAyNDUtMjQ1IDE2NC0yOTggNjFxLTE3MiAwLTMyNy03Mi41dC0yNjQtMjA0LjVxLTctMTAtNi41LTIyLjV0OC41LTIwLjVsMTM3LTEzOHExMC05IDI1LTkgMTYgMiAyMyAxMiA3MyA5NSAxNzkgMTQ3dDIyNSA1MnExMDQgMCAxOTguNS00MC41dDE2My41LTEwOS41IDEwOS41LTE2My41IDQwLjUtMTk4LjUtNDAuNS0xOTguNS0xMDkuNS0xNjMuNS0xNjMuNS0xMDkuNS0xOTguNS00MC41cS05OCAwLTE4OCAzNS41dC0xNjAgMTAxLjVsMTM3IDEzOHEzMSAzMCAxNCA2OS0xNyA0MC01OSA0MGgtNDQ4cS0yNiAwLTQ1LTE5dC0xOS00NXYtNDQ4cTAtNDIgNDAtNTkgMzktMTcgNjkgMTRsMTMwIDEyOXExMDctMTAxIDI0NC41LTE1Ni41dDI4NC41LTU1LjVxMTU2IDAgMjk4IDYxdDI0NSAxNjQgMTY0IDI0NSA2MSAyOTh6XFxcIi8+PC9zeW1ib2w+PHN5bWJvbCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNzkyIDE3OTJcXFwiIGlkPVxcXCJsZXBsYXllci1pY29uLXZvbHVtZS1kb3duXFxcIj48dGl0bGU+dm9sdW1lLWRvd248L3RpdGxlPjxwYXRoIGQ9XFxcIk0xMDg4IDM1MnYxMDg4cTAgMjYtMTkgNDV0LTQ1IDE5LTQ1LTE5bC0zMzMtMzMzaC0yNjJxLTI2IDAtNDUtMTl0LTE5LTQ1di0zODRxMC0yNiAxOS00NXQ0NS0xOWgyNjJsMzMzLTMzM3ExOS0xOSA0NS0xOXQ0NSAxOSAxOSA0NXptMzg0IDU0NHEwIDc2LTQyLjUgMTQxLjV0LTExMi41IDkzLjVxLTEwIDUtMjUgNS0yNiAwLTQ1LTE4LjV0LTE5LTQ1LjVxMC0yMSAxMi0zNS41dDI5LTI1IDM0LTIzIDI5LTM1LjUgMTItNTctMTItNTctMjktMzUuNS0zNC0yMy0yOS0yNS0xMi0zNS41cTAtMjcgMTktNDUuNXQ0NS0xOC41cTE1IDAgMjUgNSA3MCAyNyAxMTIuNSA5M3Q0Mi41IDE0MnpcXFwiLz48L3N5bWJvbD48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDE3OTIgMTc5MlxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tdm9sdW1lLW9mZlxcXCI+PHRpdGxlPnZvbHVtZS1vZmY8L3RpdGxlPjxwYXRoIGQ9XFxcIk0xMjgwIDM1MnYxMDg4cTAgMjYtMTkgNDV0LTQ1IDE5LTQ1LTE5bC0zMzMtMzMzaC0yNjJxLTI2IDAtNDUtMTl0LTE5LTQ1di0zODRxMC0yNiAxOS00NXQ0NS0xOWgyNjJsMzMzLTMzM3ExOS0xOSA0NS0xOXQ0NSAxOSAxOSA0NXpcXFwiLz48L3N5bWJvbD48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDE3OTIgMTc5MlxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tdm9sdW1lLXVwXFxcIj48dGl0bGU+dm9sdW1lLXVwPC90aXRsZT48cGF0aCBkPVxcXCJNODMyIDM1MnYxMDg4cTAgMjYtMTkgNDV0LTQ1IDE5LTQ1LTE5bC0zMzMtMzMzaC0yNjJxLTI2IDAtNDUtMTl0LTE5LTQ1di0zODRxMC0yNiAxOS00NXQ0NS0xOWgyNjJsMzMzLTMzM3ExOS0xOSA0NS0xOXQ0NSAxOSAxOSA0NXptMzg0IDU0NHEwIDc2LTQyLjUgMTQxLjV0LTExMi41IDkzLjVxLTEwIDUtMjUgNS0yNiAwLTQ1LTE4LjV0LTE5LTQ1LjVxMC0yMSAxMi0zNS41dDI5LTI1IDM0LTIzIDI5LTM1LjUgMTItNTctMTItNTctMjktMzUuNS0zNC0yMy0yOS0yNS0xMi0zNS41cTAtMjcgMTktNDUuNXQ0NS0xOC41cTE1IDAgMjUgNSA3MCAyNyAxMTIuNSA5M3Q0Mi41IDE0MnptMjU2IDBxMCAxNTMtODUgMjgyLjV0LTIyNSAxODguNXEtMTMgNS0yNSA1LTI3IDAtNDYtMTl0LTE5LTQ1cTAtMzkgMzktNTkgNTYtMjkgNzYtNDQgNzQtNTQgMTE1LjUtMTM1LjV0NDEuNS0xNzMuNS00MS41LTE3My41LTExNS41LTEzNS41cS0yMC0xNS03Ni00NC0zOS0yMC0zOS01OSAwLTI2IDE5LTQ1dDQ1LTE5cTEzIDAgMjYgNSAxNDAgNTkgMjI1IDE4OC41dDg1IDI4Mi41em0yNTYgMHEwIDIzMC0xMjcgNDIyLjV0LTMzOCAyODMuNXEtMTMgNS0yNiA1LTI2IDAtNDUtMTl0LTE5LTQ1cTAtMzYgMzktNTkgNy00IDIyLjUtMTAuNXQyMi41LTEwLjVxNDYtMjUgODItNTEgMTIzLTkxIDE5Mi0yMjd0NjktMjg5LTY5LTI4OS0xOTItMjI3cS0zNi0yNi04Mi01MS03LTQtMjIuNS0xMC41dC0yMi41LTEwLjVxLTM5LTIzLTM5LTU5IDAtMjYgMTktNDV0NDUtMTlxMTMgMCAyNiA1IDIxMSA5MSAzMzggMjgzLjV0MTI3IDQyMi41elxcXCIvPjwvc3ltYm9sPjwvc3ZnPlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9kaXN0L3N2Zy9zdmctZGVmcy5zdmdcbi8vIG1vZHVsZSBpZCA9IDcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBjb25zdCBwcmVzZXQgPSB7XG5cdG9wdGlvbnMgOiB7XG5cdFx0d2lkdGggOiAnMTAwJScsXG5cdFx0Y29udHJvbHMgOiB7XG5cdFx0XHRjb21tb24gOiBbXG5cdFx0XHRcdFsncGxheScsICd2b2x1bWUnLCAnZGl2aWRlcicsICd0aW1lbGluZScsICdkaXZpZGVyJywgJ2Z1bGxzY3JlZW4nXSxcblx0XHRcdFx0WydyYXRlJywgJ2RpdmlkZXInLCAnYmFja3dhcmQnLCAnZGl2aWRlcicsICdzb3VyY2UnLCAnZGl2aWRlcicsICdkb3dubG9hZCddXG5cdFx0XHRdLFxuXHRcdFx0ZnVsbHNjcmVlbiA6IFtcblx0XHRcdFx0WydwbGF5JywgJ3ZvbHVtZScsICdkaXZpZGVyJywgJ3RpbWVsaW5lJywgJ2RpdmlkZXInLCAncmF0ZScsICdkaXZpZGVyJywgJ2JhY2t3YXJkJywgJ2RpdmlkZXInLCAnc291cmNlJywgJ2RpdmlkZXInLCAnZG93bmxvYWQnLCAnZGl2aWRlcicsICdmdWxsc2NyZWVuJ11cblx0XHRcdF1cblx0XHR9XG5cdH0sXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvcHJlc2V0cy92cHMuanMiLCJjb25zdCBjb250cm9scyA9IFsncGxheScsICd2b2x1bWUnLCAnZGl2aWRlcicsICd0aW1lbGluZScsICdkaXZpZGVyJywgJ3JhdGUnLCAnZG93bmxvYWQnLCAnZnVsbHNjcmVlbiddO1xuXG5leHBvcnQgY29uc3QgcHJlc2V0ID0ge1xuXHRvcHRpb25zIDoge1xuXHRcdGNvbnRyb2xzIDoge1xuXHRcdFx0Y29tbW9uIDogW1xuXHRcdFx0XHRjb250cm9scyxcblx0XHRcdFx0W11cblx0XHRcdF0sXG5cdFx0XHRmdWxsc2NyZWVuIDogW1xuXHRcdFx0XHRjb250cm9sc1xuXHRcdFx0XVxuXHRcdH1cblx0fSxcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9wcmVzZXRzL3NpbXBsZS5qcyIsImV4cG9ydCBjb25zdCBwcmVzZXQgPSB7XG5cdG9wdGlvbnMgOiB7XG5cdFx0d2lkdGggOiAnMTAwJScsXG5cdFx0Y29udHJvbHMgOiB7XG5cdFx0XHRjb21tb24gOiBbXG5cdFx0XHRcdFsncGxheScsICd2b2x1bWUnLCAndGltZWxpbmUnLCAncmF0ZScsICdzb3VyY2UnLCAnZGl2aWRlcicsICdkb3dubG9hZCcsICdmdWxsc2NyZWVuJ10sXG5cdFx0XHRcdFtdXG5cdFx0XHRdLFxuXHRcdFx0ZnVsbHNjcmVlbiA6IFtcblx0XHRcdFx0WydwbGF5JywgJ3ZvbHVtZScsICd0aW1lbGluZScsICdyYXRlJywgJ3NvdXJjZScsICdkaXZpZGVyJywgJ2Rvd25sb2FkJywgJ2Z1bGxzY3JlZW4nXSxcblx0XHRcdF1cblx0XHR9XG5cdH0sXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvcHJlc2V0cy9zbXMuanMiLCJleHBvcnQgY29uc3QgcHJlc2V0ID0ge1xuXHRvcHRpb25zIDoge1xuXHRcdHdpZHRoIDogJzEwMCUnLFxuXHRcdGNvbnRyb2xzIDoge1xuXHRcdFx0Y29tbW9uIDogW1xuXHRcdFx0XHRbJ3BsYXknLCAndm9sdW1lJywgJ3RpbWVsaW5lJywgJ3JhdGUnLCAnc291cmNlJywgJ2RpdmlkZXInLCAnZnVsbHNjcmVlbiddLFxuXHRcdFx0XHRbXVxuXHRcdFx0XSxcblx0XHRcdGZ1bGxzY3JlZW4gOiBbXG5cdFx0XHRcdFsncGxheScsICd2b2x1bWUnLCAndGltZWxpbmUnLCAncmF0ZScsICdzb3VyY2UnLCAnZGl2aWRlcicsICdmdWxsc2NyZWVuJ10sXG5cdFx0XHRdXG5cdFx0fVxuXHR9LFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL3ByZXNldHMvY29tcHJlc3NlZC5qcyIsImV4cG9ydCBjb25zdCBwcmVzZXQgPSB7XG5cdG9wdGlvbnMgOiB7XG5cdFx0d2lkdGggOiAnMTAwJScsXG5cdFx0Y29udHJvbHMgOiB7XG5cdFx0XHRjb21tb24gOiBbXG5cdFx0XHRcdFsncGxheScsICd0aW1lbGluZScsICdyYXRlJywgJ3ZvbHVtZScsICdzb3VyY2UnLCAnZnVsbHNjcmVlbiddLFxuXHRcdFx0XHRbXVxuXHRcdFx0XSxcblx0XHRcdGZ1bGxzY3JlZW4gOiBbXG5cdFx0XHRcdFsncGxheScsICd0aW1lbGluZScsICdyYXRlJywgJ3ZvbHVtZScsICdzb3VyY2UnLCAnZnVsbHNjcmVlbiddXG5cdFx0XHRdXG5cdFx0fVxuXHR9LFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL3ByZXNldHMvMjAzNS5qcyJdLCJzb3VyY2VSb290IjoiIn0=