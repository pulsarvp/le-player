/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

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

	// Register common controls


	var _jquery = __webpack_require__(1);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _Control = __webpack_require__(2);

	var _Control2 = _interopRequireDefault(_Control);

	var _Component = __webpack_require__(3);

	var _Component2 = _interopRequireDefault(_Component);

	var _MiniPlayer = __webpack_require__(5);

	var _MiniPlayer2 = _interopRequireDefault(_MiniPlayer);

	var _PlayButton = __webpack_require__(8);

	var _PlayButton2 = _interopRequireDefault(_PlayButton);

	var _SplashIcon = __webpack_require__(9);

	var _SplashIcon2 = _interopRequireDefault(_SplashIcon);

	var _Icon = __webpack_require__(4);

	var _Icon2 = _interopRequireDefault(_Icon);

	var _Time = __webpack_require__(10);

	var _Time2 = _interopRequireDefault(_Time);

	var _ControlCollection = __webpack_require__(6);

	var _ControlCollection2 = _interopRequireDefault(_ControlCollection);

	var _Sections = __webpack_require__(11);

	var _Sections2 = _interopRequireDefault(_Sections);

	var _ErrorDisplay = __webpack_require__(12);

	var _ErrorDisplay2 = _interopRequireDefault(_ErrorDisplay);

	var _Poster = __webpack_require__(13);

	var _Poster2 = _interopRequireDefault(_Poster);

	var _FullscreenApi = __webpack_require__(14);

	var _FullscreenApi2 = _interopRequireDefault(_FullscreenApi);

	var _cookie = __webpack_require__(15);

	var _cookie2 = _interopRequireDefault(_cookie);

	var _utils = __webpack_require__(7);

	var _MediaError = __webpack_require__(16);

	var _MediaError2 = _interopRequireDefault(_MediaError);

	__webpack_require__(17);

	__webpack_require__(18);

	__webpack_require__(20);

	__webpack_require__(24);

	__webpack_require__(26);

	__webpack_require__(27);

	__webpack_require__(28);

	__webpack_require__(29);

	__webpack_require__(31);

	__webpack_require__(32);

	__webpack_require__(33);

	__webpack_require__(34);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	_Control2.default.registerControl('divider', function () {
		return {
			element: (0, _jquery2.default)('<div/>').addClass('divider')
		};
	});

	/**
	 * Return array with excluded dist's items from source array
	 *
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
		autoplay: false,
		height: 'auto',
		loop: false,
		muted: false,
		preload: 'metadata',
		poster: null,
		svgPath: '../dist/svg/svg-defs.svg',
		innactivityTimeout: 5000,
		rate: {
			step: 0.25,
			min: 0.5,
			max: 4.0,
			'default': 1
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

				player.splashIcon.show(player._calcVolumeIcon(player.video.volume));
			}
		}, {
			key: 40,
			info: ['↓'],
			description: 'Уменьшить громкость',
			fn: function fn(player) {
				player.video.volume -= player.options.volume.step;

				player.splashIcon.show(player._calcVolumeIcon(player.video.volume));
			}
		}, {
			key: 70,
			info: ['f'],
			description: 'Открыть/закрыть полноэкраный режим',
			fn: function fn(player) {
				player.toggleFullscreen();
			}
		}],
		miniplayer: {
			width: '100%',
			offsetShow: function offsetShow(player) {
				// 80px - it's height of common controls container
				var offset = player.element.offset().top + player.element.outerHeight() - player.getControls('common').element.height();

				return offset;
			}
		},
		onPlayerInited: function onPlayerInited() {}
	};

	/**
	 * @class Player
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
	var Player = function Player(element, options) {
		var _this8 = this;

		if (element.prop('tagName').toLowerCase() != 'video') {
			console.warn('Incorrect element selected.');
			return this;
		}

		var player = this;
		var fsApi = _FullscreenApi2.default;

		this._element = element;

		// key -> contol collection name, valuy -> ControlCollection
		this.controls = {};

		// Entity component
		this.video = null;

		/**
	  * DOM container to hold video and all other stuff.
	  * @type object
	  */

		this.element = (0, _utils.createEl)('div');

		this.innerElement = (0, _utils.createEl)('div');

		var Video = function () {
			function Video(player, ctx) {
				_classCallCheck(this, Video);

				this.player = player;
				this._ctx = ctx;
				this._video = ctx[0];

				this.element = (0, _jquery2.default)(this._video);
				this.subtitles = [];
				this.bufferRanges = [];

				if ((0, _jquery2.default)(this._video).attr('src') == null) {
					this.source = this.player.options.src;
				}
			}

			_createClass(Video, [{
				key: 'init',
				value: function init() {
					var _this = this;

					var dfd = _jquery2.default.Deferred();
					this._initSubtitles();
					this._initVideo().done(function () {
						//this.fullscreen = new Fullscreen(this.player);
						//this.fullscreen.init();
						_this._initRate();
						_this._initVolume();

						// temporary solution for poster usage
						// this.startBuffering();


						dfd.resolve();
					});
					return dfd.promise();
				}
			}, {
				key: 'startBuffering',
				value: function startBuffering() {
					var _this2 = this;

					var volume = this.volume;
					this.volume = 0;
					return this.play().then(function () {
						return _this2.pause();
					}).then(function () {
						_this2.currentTime = 0;
						_this2.volume = volume;
					});
				}
			}, {
				key: 'supportsFullScreen',
				value: function supportsFullScreen() {
					if (typeof this._video.webkitEnterFullScreen === 'function') {
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
					var _this3 = this;

					var video = this._video;
					if (video.paused && video.networkState <= video.HAVE_METADATA) {
						// attempt to prime the video element for programmatic access
						// this isn't necessary on the desktop but shouldn't hurt
						this.play();

						// playing and pausing synchronously during the transition to fullscreen
						// can get iOS ~6.1 devices into a play/pause loop
						setTimeout(function () {
							_this3.pause();
							video.webkitEnterFullScreen();
						}, 0);
					} else {
						video.webkitEnterFullScreen();
					}
				}
			}, {
				key: 'exitFullscreen',
				value: function exitFullscreen() {
					this._video.webkitExitFullScreen();
				}
			}, {
				key: 'togglePlay',
				value: function togglePlay() {
					if (!this._video.played || this._video.paused) {
						this.play();
					} else {
						this.pause();
					}
				}
			}, {
				key: 'seek',
				value: function seek(time) {
					this._video.currentTime = time;
				}
			}, {
				key: 'play',
				value: function play() {
					var dfd = _jquery2.default.Deferred();
					var playPromise = this._video.play();

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
					var pausePromise = this._video.pause();

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
				key: 'trigger',
				value: function trigger(eventName) {
					var _player$trigger;

					for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
						args[_key - 1] = arguments[_key];
					}

					(_player$trigger = this.player.trigger).call.apply(_player$trigger, [(0, _jquery2.default)(this._video), 'leplayer_' + eventName].concat(args));
					return this;
				}
			}, {
				key: 'on',
				value: function on(eventName) {
					var _$$on;

					for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
						args[_key2 - 1] = arguments[_key2];
					}

					(_$$on = (0, _jquery2.default)(this._video).on).call.apply(_$$on, [(0, _jquery2.default)(this._video), 'leplayer_' + eventName].concat(args));
					return this;
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
					this._ctx.children('track[kind="subtitles"]').each(function () {
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
					var _this4 = this;

					var dfd = _jquery2.default.Deferred();
					if (this._video.readyState > HTMLMediaElement.HAVE_NOTHING) {
						dfd.resolve();
						this._textTracksHack();
					} else {
						(0, _jquery2.default)(this._video).one('loadedmetadata', function (e) {
							dfd.resolve();
							_this4._textTracksHack();
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

					if (this._video.textTracks.length == 0 && this.subtitles.length > 0) {
						this._ctx.children('track[kind="subtitles"]').remove();
						for (var i in this.subtitles) {
							if (this.subtitles.hasOwnProperty(i)) {
								this._ctx.append((0, _jquery2.default)('<track/>').attr('label', this.subtitles[i].title).attr('src', this.subtitles[i].src).attr('srclang', this.subtitles[i].language).attr('id', this.subtitles[i].language).attr('kind', 'subtitles'));
							}
						}
					}
				}
			}, {
				key: 'currentTime',
				get: function get() {
					return this._video.currentTime;
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

					this._video.currentTime = time;
				}
			}, {
				key: 'duration',
				get: function get() {
					return this._video.duration;
				}
			}, {
				key: 'height',
				get: function get() {
					return this._video.clientHeight;
				}
			}, {
				key: 'width',
				get: function get() {
					return this._video.clientWidth;
				}
			}, {
				key: 'rate',
				get: function get() {
					return this._video.playbackRate;
				},
				set: function set(value) {
					var player = this.player;
					if (value <= player.options.rate.max && value >= player.options.rate.min) {
						this._video.playbackRate = value;
						_cookie2.default.set('rate', value);
					}
					/** TODO: Chanche controls.rate in event handler */
					//controls.rate = this._video.playbackRate;
				}
			}, {
				key: 'defaultRate',
				get: function get() {
					return _cookie2.default.get('rate') || player.options.rate.default;
				}
			}, {
				key: 'source',
				set: function set(src) {
					if (src == null) return;
					if (this.source && this.source.url === src.url) return;
					var time = this.currentTime;
					var rate = this.rate;
					var stop = this.paused;

					console.log(src.url);
					(0, _jquery2.default)(this._video).attr('src', src.url);

					this._video = this._ctx[0];

					this._video.playbackRate = rate;

					this._video.currentTime = time;

					this._source = src;

					if (stop) {
						this.pause();
					} else {
						this.play();
					}
				},
				get: function get() {
					return this._source;
				}
			}, {
				key: 'track',
				set: function set(value) {
					for (var i = 0; i < this._video.textTracks.length; i++) {
						if (this._video.textTracks[i].language == value) this._video.textTracks[i].mode = 'showing';else this._video.textTracks[i].mode = 'hidden';
					}
				}
			}, {
				key: 'paused',
				get: function get() {
					return this._video.paused;
				}
			}, {
				key: 'volume',
				get: function get() {
					return this._video.volume;
				},
				set: function set(value) {
					var player = this.player;
					if (value > 1) {
						this._video.volume = 1;
					} else if (value < player.options.volume.mutelimit) {
						this._video.volume = 0;
					} else {
						this._video.volume = value;
						_cookie2.default.set('volume', value);
					}
					this._video.mute = value < player.options.volume.mutelimit;
				}
			}, {
				key: 'defaultVolume',
				get: function get() {
					return _cookie2.default.get('volume') || player.options.volume.default;
				}
			}, {
				key: 'buffered',
				get: function get() {
					return this._video.buffered;
				}

				/**
	    * @return {TimeRanges}
	    */

			}, {
				key: 'seekable',
				get: function get() {
					return this._video.seekable;
				}

				/**
	    * @return {TimeRanges}
	    */

			}, {
				key: 'played',
				get: function get() {
					return this._video.played;
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
			}]);

			return Video;
		}();

		this.initControls = function () {
			//controls = new Controls(player);
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
		};

		/**
	  * Init sections, get ajax or json with sections data and create Sections object and added them to the DOM
	  *
	  * @access private
	  * @returns {jqPromise} jQuery promise
	  */
		this.initSections = function () {
			var _this5 = this;

			var dfd = _jquery2.default.Deferred();
			if (this.options.data == null) {
				dfd.reject(null);
			} else {
				this.getSectionData().done(function (sections) {
					sections = [].concat(_toConsumableArray(sections));

					var isSectionOutside = _this5.sectionsContainer && _this5.sectionsContainer.length > 0;

					if (sections == null || sections.length == 0) {
						dfd.reject(null);
						return;
					}

					sections = _this5.completeSections(sections);

					var sectionsComponent = new _Sections2.default(_this5, {

						items: sections,
						fullscreenOnly: isSectionOutside
					});

					_this5.innerElement.append(sectionsComponent.element);

					if (isSectionOutside) {
						var outsideSections = new _Sections2.default(player, {
							items: sections
						});
						_this5.sectionsContainer.append(outsideSections.element);
					}
					dfd.resolve({ sectionsComponent: sectionsComponent, items: sections });
				});
			}

			return dfd.promise();
		};

		this.initHotKeys = function () {
			var _this6 = this;

			var isKeyBinding = function isKeyBinding(e, binding) {
				return (e.which === binding.key || e.key === binding.key) && !!binding.shiftKey == e.shiftKey && !!binding.ctrlKey == e.ctrlKey;
			};

			(0, _jquery2.default)(this.element).bind('keydown.leplayer.hotkey', function (e) {
				var _isFocused = isFocused();
				if (_isFocused) {

					_this6.options.keyBinding.forEach(function (binding) {

						if (isKeyBinding(e, binding)) {
							e.preventDefault();
							binding.fn(_this6);
							return false;
						}
					});
				}
			});
		};

		/**
	  * Get options from video's attribute ( height, width, poster, preload etc...)
	  * Get source video from src attr or <source> element with data attr 'data-quality'
	  * Also get sources for different quality from <source> element with data attr 'data-quality'
	  *
	  * @access public
	  * @returns {Object} options
	  */
		this.optionsFromElement = function () {
			// Copy video attrs to the opitons
			var element = this._element;
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
		};

		/**
	  * Merge defaultOptions with attrOptions and user's options;
	  *
	  * And complement two objects: controls and excludeControls
	  *
	  * @access private
	  */
		this.initOptions = function () {
			var _this7 = this;

			var attrOptions = this.optionsFromElement();
			// Merge default options + video attributts + user options
			this.options = _jquery2.default.extend(true, {}, defaultOptions, attrOptions, options);

			if (this.options.sources && !Array.isArray(this.options.sources)) {
				this.options.sources = [this.options.sources];
			}

			if (this.options.src == null && this.options.sources.length > 0) {
				this.options.src = this.options.sources[0];
			}

			if (this.options.src == null) {
				this.setError(new _MediaError2.default('No sources found'));
			}

			// Merge correctly controls, without deep merge
			this.options.controls = _jquery2.default.extend({}, defaultOptions.controls, options.controls);

			// exclude controls option

			var _loop = function _loop(name) {
				if (!_this7.options.excludeControls.hasOwnProperty(name)) return {
						v: void 0
					};
				var controlCollection = _this7.options.excludeControls[name];
				controlCollection.forEach(function (row, index) {
					if (_this7.options.controls[name] && _this7.options.controls[name][index]) {
						_this7.options.controls[name][index] = excludeArray(_this7.options.controls[name][index], row);
					}
				});
			};

			for (var name in this.options.excludeControls) {
				var _ret = _loop(name);

				if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
			}
		};

		var isFocused = function isFocused() {
			var focused = (0, _jquery2.default)(_this8.element).find(':focus');
			return focused.length > 0 || (0, _jquery2.default)(_this8.element).is(':focus');
		};

		// Check if element is correctly selected.

		this.initOptions();

		/** TODO: Use promise to async run this */
		this.createElement();

		// Create video link
		this.video = new Video(this, element);

		// Create controls
		// TODO: move this action to the createElement
		this.initControls();

		// Listen hotkeys
		this.initHotKeys();

		this.initSections().then(function (data) {
			_this8.sections = data.sectionsComponent;
			_this8.trigger('sectionsinit', data);
		});

		this.video.init().then(function () {
			_this8.trigger('inited');
			_this8._initPlugins();
		});

		this._listenUserActivity();

		var mediaElement = this.video.element;

		mediaElement.one({
			'play': function play(e) {
				_this8.trigger('firstplay');
				_this8.removeClass('leplayer--virgin');
			}
		});

		mediaElement.on({

			'loadstart': function loadstart(e) {
				_this8.removeClass('leplayer--ended');

				_this8.setError(null);

				_this8.trigger('loadstart');
			},

			'durationchange': function durationchange(e) {
				_this8.trigger('durationchange');
			},

			'timeupdate': function timeupdate(e) {
				if (_this8.video.currentTime > 0) {
					_this8.removeClass('leplayer--virgin');
				}

				_this8.trigger('timeupdate', { time: _this8.video.currentTime, duration: _this8.video.duration });
			},

			'seeking': function seeking(e) {
				_this8._startWaiting();
				_this8.trigger('seeking');
			},

			'seeked': function seeked(e) {
				_this8._stopWayting();
				_this8.trigger('seeked');
			},

			'progress': function progress() {
				_this8.trigger('progress');
			},

			'dblclick': function dblclick() {
				_this8.trigger('dblclick');
			},

			'click': function click() {
				_this8.trigger('click');
			},

			'volumechange': function volumechange(e) {
				_this8.trigger('volumechange', { volume: _this8.video.volume });
			},

			'play': function play(e) {
				_this8.removeClass('leplayer--ended');
				_this8.removeClass('leplayer--paused');
				_this8.addClass('leplayer--playing');

				_this8.trigger('play');
			},

			'pause': function pause(e) {
				_this8.removeClass('leplayer--playing');
				_this8.addClass('leplayer--paused');
				_this8.trigger('pause');
				//overlay.show()
			},

			'playing': function playing(e) {
				_this8._stopWayting();
				_this8.trigger('playing');
			},

			'ratechange': function ratechange(e) {
				_this8.trigger('ratechange', { rate: _this8.video.rate });
			},

			'canplay': function canplay(e) {
				//loader.hide();
				_this8.trigger('canplay');
			},

			'ended': function ended(e) {
				_this8.addClass('leplayer--ended');

				if (_this8.options.loop) {
					_this8.currentTime(0);
					_this8.video.play();
				} else if (!_this8.video.paused) {
					_this8.video.pause();
				}

				_this8.trigger('ended');
			},

			'canplaythrough': function canplaythrough(e) {
				_this8._stopWayting();
				_this8.trigger('canplaythrough');
			},

			'waiting': function waiting(e) {
				_this8._startWaiting();

				_this8.one('timeupdate', function () {
					return _this8._stopWayting();
				});

				_this8.trigger('waiting');
			},

			'error': function error(e) {
				_this8.setError(new _MediaError2.default(e.target.error.code));
			}
		});

		this.on('fullscreenchange', this._onFullscreenChange.bind(this));
		this.on('click', this._onClick.bind(this));
		this.on('dblclick', this._onDbclick.bind(this));
		this.on('inited', this._onInited.bind(this));
		this.on('play', this._onPlay.bind(this));
		this.on('pause', this._onPause.bind(this));

		(0, _jquery2.default)(document).on(fsApi.fullscreenchange, this._onEntityFullscrenChange.bind(this));

		return this;
	};

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
	 * @access public
	 * @static
	 * @param {String} name
	 * @returns {Component}
	 */
	Player.getComponent = _Component2.default.getComponent;

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
	Player.registerComponent = _Component2.default.registerComponent;

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
	 * Remove unnecessary attributes, and set some attrs from options (loop, poster etc...). Create main DOM objects
	 *
	 * @access private
	 */
	Player.prototype.createElement = function () {
		var _this9 = this;

		var options = this.options;
		var element = this._element;

		[

		// Remove controls because we dont not support native controls yet
		'controls', 'poster',

		// It is unnecessary attrs, this functionality solve CSS
		'height', 'width'].forEach(function (item) {
			element.removeAttr(item);
		});

		// Set attrs from options
		['preload', 'autoplay', 'loop', 'muted'].forEach(function (item) {
			if (_this9.options[item]) {
				element.attr(item, _this9.options[item]);
				element.prop(item, _this9.options[item]);
			}
		});

		element.find('source[data-quality]').each(function (i, item) {
			(0, _jquery2.default)(item).remove();
		});

		this.element = this.element.addClass('leplayer').attr('tabindex', 0).css('width', '100%').css('max-width', (options.width || this.video.width) + 'px');

		this.errorDisplay = new _ErrorDisplay2.default(this);

		this.playButton = new _PlayButton2.default(this);

		// TODO: Вынести это в отдельнеый компонент
		this.loader = (0, _jquery2.default)('<div />').addClass('leplayer-loader-container').append(new _Icon2.default(this, {
			iconName: 'refresh',
			className: 'leplayer-loader-container__icon'
		}).element);

		this.splashIcon = new _SplashIcon2.default(this);

		this.videoContainer = (0, _utils.createEl)('div', {
			className: 'leplayer-video'
		}).append(this.errorDisplay.element).append(this.playButton.element).append(this.loader).append(this.splashIcon.element);

		if (options.poster) {
			this.poster = new _Poster2.default(this);
			this.videoContainer.append(this.poster.element);
		}

		if (options.miniplayer) {
			this.miniPlayer = new _MiniPlayer2.default(this);
		}

		var lastTimer = new _Time2.default(this, {
			fn: function fn(player) {
				var video = player.video;
				return (0, _utils.secondsToTime)(video.duration - video.currentTime);
			}
		});

		this.innerElement = (0, _jquery2.default)('<div />').addClass('leplayer__inner').append(this.videoContainer).append((0, _utils.createEl)('div', {
			className: 'leplayer__info'
		}).append((0, _utils.createEl)('div', {
			className: 'leplayer__title',
			html: this.options.title || ""
		})).append((0, _utils.createEl)('div', {
			className: 'leplayer__video-info',
			html: this.options.videoInfo || ""
		})).append((0, _utils.createEl)('div', {
			className: 'leplayer__last',
			html: '\u0412\u0438\u0434\u0435\u043E \u0437\u0430\u043A\u043E\u043D\u0447\u0438\u0442\u0441\u044F \u0447\u0435\u0440\u0435\u0437 '
		}).append(lastTimer.element)).append(this.miniPlayer && this.miniPlayer.element));
		//.append($('leplayer__video-info')
		//.text(this.options.videoInfo || ""))

		this.element = this.element.append(this.innerElement);

		this.addClass('leplayer--paused');
		this.addClass('leplayer--virgin');

		if (options.sectionContainer) {
			this.sectionsContainer = (0, _jquery2.default)(options.sectionContainer);
		}

		element.before(this.element);
		this.videoContainer.append(element);
		return this.element;
	};

	/**
	 * @access private
	 *
	 * Function, than init all plugins from player options.
	 * If plugin doesn't exist throw an error
	 * @returns {Player} this
	 *
	 */
	Player.prototype._initPlugins = function () {
		if (this.options.plugins) {
			for (var name in this.options.plugins) {
				if (!this.options.plugins.hasOwnProperty(name)) return;
				var pluginOptions = this.options.plugins[name];
				if (this[name]) {
					this[name](pluginOptions);
				} else {
					console.error('Plugin \'' + name + '\' doesn\'t exist');
				}
			}
		}

		return this;
	};

	/**
	 * @access private
	 */
	Player.prototype._view = 'common';

	/**
	 * Emit a player event (the name of event would be a leplayer_smth)
	 *
	 * @access public
	 * @param {String} eventName
	 * @param {Arguments} ...args jQuery.fn.on other arguments
	 * @returns {Player} this
	 */
	Player.prototype.trigger = function (eventName) {
		var _element$trigger;

		var event = _jquery2.default.Event('leplayer_' + eventName, { player: this });

		for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
			args[_key3 - 1] = arguments[_key3];
		}

		(_element$trigger = this.element.trigger).call.apply(_element$trigger, [this.element, event].concat(args));
		return this;
	};

	/**
	 * Listen a player event with leplayer_ suffix
	 *
	 * @access public
	 * @param {String} eventName
	 * @param {Arguments} ...args jQuery.fn.on other arguments
	 * @returns {Player} this
	 */
	Player.prototype.on = function (eventName) {
		var _element$on;

		for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
			args[_key4 - 1] = arguments[_key4];
		}

		(_element$on = this.element.on).call.apply(_element$on, [this.element, 'leplayer_' + eventName].concat(args));
		return this;
	};

	Player.prototype.one = function (eventName) {
		var _element$one;

		for (var _len5 = arguments.length, args = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
			args[_key5 - 1] = arguments[_key5];
		}

		(_element$one = this.element.one).call.apply(_element$one, [this.element, 'leplayer_' + eventName].concat(args));
	};

	/**
	 * Add the CSS class for general leplayer DOM element
	 *
	 * @access public
	 * @param {String} className Name of class (not a selector, it's mean, that string sould be without point at the start)
	 * @returns {Player} this
	 */
	Player.prototype.addClass = function (className) {
		this.element.addClass(className);
		return this;
	};

	/**
	 * Remove the CSS class from general leplayer DOM element
	 *
	 * @access public
	 * @param {String} className Name of class
	 * @returns {Player} this
	 */
	Player.prototype.removeClass = function (className) {
		this.element.removeClass(className);
		return this;
	};

	/**
	 * Toggle the CSS class from general leplayer DOM element
	 *
	 * @access public
	 * @param {String} className
	 * @param {Boolean} flag
	 * @returns {Player} this
	 */
	Player.prototype.toggleClass = function (className, flag) {
		this.element.toggleClass(className, flag);
		return this;
	};

	Player.prototype.hasClass = function (className) {
		return this.element.hasClass(className);
	};

	/**
	 * Set player view
	 *
	 * @access public
	 * @param {String} view Can be 'common', 'fullscreen', 'mini'
	 * @returns {Player} this
	 */
	Player.prototype.setView = function (view) {
		this.element.removeClass('leplayer--' + this._view).addClass('leplayer--' + view);
		this._view = view;
		return this;
	};

	/**
	 * Return the view of player
	 *
	 * @access public
	 * @returns {String}
	 */
	Player.prototype.getView = function () {
		return this._view;
	};

	/**
	 * Show player error if param value not null. Also trigger player event 'error'
	 *
	 * @param {String|MediaError} value
	 * @returns {Player} this
	 */
	Player.prototype.setError = function (value) {
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
		this.trigger('error', { error: this._error });

		return this;
	};

	/**
	 * @access public
	 * @params {Boolean} value
	 */
	Player.prototype.setUserActive = function (value) {
		if (value !== this.getUserActive) {
			this._userActive = value;
			this.toggleClass('leplayer--user-active', value);
			this.trigger('useractive');
		}
	};

	Player.prototype.getUserActive = function () {
		return this._userActive || false;
	};

	Player.prototype.play = function () {
		return this.video.play();
	};

	Player.prototype.pause = function () {
		return this.video.pause();
	};

	Player.prototype.togglePlay = function () {
		return this.video.togglePlay();
	};

	// TODO: Сделать плеер классов и реализовать эти методы через get и set
	Player.prototype.getError = function () {
		return this._error || null;
	};

	/**
	 * Get some data for player
	 *
	 * @access public
	 * @returns {jQuery.promise} Promise
	 */
	Player.prototype.getData = function () {
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
	};

	Player.prototype.getSectionData = function () {
		return this.getData().then(function (data) {
			return data.sections;
		});
	};

	Player.prototype.requestFullscreen = function () {
		var fsApi = _FullscreenApi2.default;

		if (fsApi.requestFullscreen) {
			// Call HTML5 Video api requestFullscreen
			this.element[0][fsApi.requestFullscreen]();

			this.trigger('fullscreenchange', true);
		} else if (this.video.supportsFullScreen()) {
			this.video.enterFullscreen();
		}
	};

	Player.prototype.exitFullscreen = function () {
		var fsApi = _FullscreenApi2.default;

		if (fsApi.exitFullscreen) {
			document[fsApi.exitFullscreen]();
		} else if (this.video.supportsFullScreen()) {
			this.video.exitFullscreen();
		}

		this.trigger('fullscreenchange', false);
	};

	Player.prototype.toggleFullscreen = function () {
		if (this.getView() === 'fullscreen') {
			this.exitFullscreen();
		} else {
			this.requestFullscreen();
		}
	};

	/**
	 * Get ControlCollection of Player by name (e.x 'common', 'fullscreen')
	 *
	 * @access public
	 * @param {String} name Name of ControlCollection
	 * @returns {ControlCollection}
	 */
	Player.prototype.getControls = function (name) {
		return this.controls[name];
	};

	/**
	 * Return the height of player. If you want get height only of video element, use this.video.height or whatever
	 *
	 * @access public
	 * @returns {Number} Height in px
	 */
	Player.prototype.getHeight = function () {
		return this.element.height();
	};

	/**
	 * Return the width of player.
	 *
	 * @access public
	 * @returns {Number} Width in px
	 */
	Player.prototype.getWidth = function () {
		return this.element.width();
	};

	Player.prototype.completeSections = function (sections) {
		if (sections == null || sections.length == 0) {
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
	};

	Player.prototype._userActivity = false;

	/**
	 * @access private
	 */
	Player.prototype._listenUserActivity = function () {
		var _this10 = this;

		var mouseInProgress = void 0;
		var lastMoveX = void 0;
		var lastMoveY = void 0;

		var onMouseMove = function onMouseMove(e) {
			if (e.screenX !== lastMoveX || e.screenY !== lastMoveY) {
				lastMoveX = e.screenX;
				lastMoveY = e.screenY;
				_this10._userActivity = true;
			}
		};

		var onMouseDown = function onMouseDown(e) {
			_this10._userActivity = true;

			// While user is pressing mouse or touch, dispatch user activity
			clearInterval(mouseInProgress);

			mouseInProgress = setInterval(function () {
				_this10._userActivity = true;
			}, 250);
		};

		var onMouseUp = function onMouseUp(e) {
			_this10._userActivity = true;
			clearInterval(mouseInProgress);
		};

		this.element.on('mousemove', onMouseMove);

		this.element.on('mousedown', onMouseDown);

		this.element.on('mouseup', onMouseUp);

		this.element.on('keydown', function (e) {
			return _this10._userActivity = true;
		});
		this.element.on('keyup', function (e) {
			return _this10._userActivity = true;
		});

		// See http://ejohn.org/blog/learning-from-twitter/
		var inactivityTimeout = void 0;
		var delay = this.options.innactivityTimeout;
		setInterval(function () {
			if (_this10._userActivity) {

				// Reset user activuty tracker
				_this10._userActivity = false;

				_this10.setUserActive(true);

				clearTimeout(inactivityTimeout);

				if (delay > 0) {

					inactivityTimeout = setTimeout(function () {
						if (!_this10._userActivity) {
							_this10.setUserActive(false);
						}
					}, delay);
				}
			}
		}, 250);
	};

	Player.prototype._waitingTimeouts = [];

	/**
	 * Stop showing spinner and clear delay of showing spinner
	 *
	 * @access private
	 */
	Player.prototype._stopWayting = function () {
		this._waitingTimeouts.forEach(function (item) {
			return clearTimeout(item);
		});
		this._waitingTimeouts = [];
		this.removeClass('leplayer--waiting');
	};

	/**
	 * Show spinner with delay in 300ms
	 *
	 * @access private
	 */
	Player.prototype._startWaiting = function () {
		var _this11 = this;

		this._waitingTimeouts.push(setTimeout(function () {
			_this11.addClass('leplayer--waiting');
		}, 300));
	};

	/**
	 * On inited player event handler
	 *
	 * @access private
	 * @param {PlayerEvent} e
	 */
	Player.prototype._onInited = function (e) {
		this.addClass('leplayer--inited');

		this.options.onPlayerInited.call(this, e);
	};

	/**
	 * @access private
	 */
	Player.prototype._dblclickTimeout = null;

	/**
	 * On click video event handler. Focus on video and togglePlay
	 *
	 * @access private
	 * @param {PlayerEvent} e
	 */
	Player.prototype._onClick = function (e) {
		var _this12 = this;

		clearTimeout(this._dblclickTimeout);
		this._dblclickTimeout = setTimeout(function () {
			_this12.video.element.focus();
			_this12.togglePlay();
		}, 300);
	};

	/**
	 * On dblclick on the video player event handler
	 *
	 * @access private
	 * @param {PlayerEvent} e
	 */
	Player.prototype._onDbclick = function (e) {
		clearTimeout(this._dblclickTimeout);
		this.toggleFullscreen();
	};

	/**
	 * On fullscreen change player event handler
	 *
	 * @access public
	 * @param {PlayerEvent} e
	 */
	Player.prototype._onFullscreenChange = function (e, isFs) {
		if (isFs) {
			this.setView('fullscreen');
		} else {
			this.setView('common');
		}
	};

	/**
	 * On play event handler
	 *
	 * @access private
	 * @param {PlayerEvent} e
	 */
	Player.prototype._onPlay = function () {
		this.splashIcon.show('play');
	};

	/**
	 * On pause player event handler
	 * Show pause icon in the center of video
	 *
	 * @access private
	 */
	Player.prototype._onPause = function () {
		this.splashIcon.show('pause');
	};

	Player.prototype._onEntityFullscrenChange = function () {
		var fsApi = _FullscreenApi2.default;
		var isFs = !!document[fsApi.fullscreenElement];
		this.trigger('fullscreenchange', isFs);
	};

	/**
	 * Return a name of icon. If less then 0.1 return volume-off,
	 * if less then 0.5 return volume down, else return volume-up
	 *
	 * @access private
	 * @param {Number} value Volume value
	 * @returns {String} Icon name
	 */
	Player.prototype._calcVolumeIcon = function (value) {
		var volume = value || this.video.volume;

		if (volume < this.options.volume.mutelimit) {
			return 'volume-off';
		} else if (value < 0.5) {
			return 'volume-down';
		} else {
			return 'volume-up';
		}
	};

	window.$.fn.lePlayer = function (options) {
		return this.each(function () {
			return new Player((0, _jquery2.default)(this), options);
		});
	};

	window.$.lePlayer = Player;

	window.lePlayer = Player;

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
				'click': _this._onClick.bind(_this),
				'leplayer_control_click': _this.onClick.bind(_this)
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
				if (typeof this.options.onClick == 'function') {
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

			/** TODO(adinvadim): Add options.component, for clone component instance */
			options = this.options = _jquery2.default.extend({}, this.options, options);
			this.player = player;

			if (options.element) {
				this.element = options.element;
			} else {
				this.createElement();
			}
			if (this.element.length != 1) {
				console.error('Component.prototype.element.length must equal 1, not ' + this.element.length + '\n', this.element);
			}
			this.element[0].__node = this;
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
	 * @file MiniPlayer.js
	 */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _jquery = __webpack_require__(1);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _Component2 = __webpack_require__(3);

	var _Component3 = _interopRequireDefault(_Component2);

	var _ControlCollection = __webpack_require__(6);

	var _ControlCollection2 = _interopRequireDefault(_ControlCollection);

	var _utils = __webpack_require__(7);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// TODO: Сделать это в качестве плагина для плеера

	/**
	 * @class MiniPlayer
	 * @param {Player} player Main player
	 * @param {Object} [options]
	 * @extends Control
	 */
	var MiniPlayer = function (_Component) {
		_inherits(MiniPlayer, _Component);

		function MiniPlayer(player, options) {
			_classCallCheck(this, MiniPlayer);

			// Merge options
			options = _jquery2.default.extend({}, {
				visible: false
			}, player.options.miniplayer, options);

			var _this = _possibleConstructorReturn(this, (MiniPlayer.__proto__ || Object.getPrototypeOf(MiniPlayer)).call(this, player, options));

			if (options.visible) {
				_this.show();
			}

			(0, _jquery2.default)(window).on('scroll', _this.update.bind(_this));
			(0, _jquery2.default)(window).on('resize', _this.update.bind(_this));
			_this.player.on('fullscreenchange', _this._onFullscreenChange.bind(_this));
			_this.player.on('inited', _this._onPlayerInited.bind(_this));
			return _this;
		}

		_createClass(MiniPlayer, [{
			key: 'update',
			value: function update() {
				var scrollTop = (0, _jquery2.default)(window).scrollTop();

				if (scrollTop > this.offsetShow) {
					this.show();
				} else {
					this.hide();
				}
			}
		}, {
			key: 'show',


			/**
	   * Show mini player
	   * @param {Boolean} force
	   *
	   * @public
	   */
			value: function show(force) {
				if (!force && this.player.getView() === 'mini') {
					return;
				}

				// Added empty space
				this.player.element.css('padding-top', this.player.videoContainer.height());

				this.player.setView('mini');
				this.player.innerElement.css('max-width', this.width);
				this.player.innerElement.css('height', this.player.video.height);
			}

			/**
	   * Hide mini player
	   * @param {Boolean} force
	   *
	   * @public
	   */

		}, {
			key: 'hide',
			value: function hide(force) {
				if (!force && this.player.getView() !== 'mini') {
					return;
				}
				this.player.setView('common');

				this.player.innerElement.css('max-width', '');
				this.player.innerElement.css('height', '');

				this.player.element.css('padding-top', '');
			}

			/**
	   * @override
	   */

		}, {
			key: 'createElement',
			value: function createElement() {
				var controls = new _ControlCollection2.default(this.player, { name: 'mini' });
				return this.element = (0, _utils.createEl)('div', {
					className: 'leplayer-miniplayer'
				}).append(controls.element);
			}
		}, {
			key: '_onFullscreenChange',
			value: function _onFullscreenChange(e, data) {
				if (data == true) {
					this.hide();
				}
			}
		}, {
			key: '_onPlayerInited',
			value: function _onPlayerInited(e) {
				var scrollTop = (0, _jquery2.default)(window).scrollTop();

				if (scrollTop > this.offsetShow) {
					this.show(true);
				} else {
					this.hide();
				}
			}
		}, {
			key: 'offsetShow',
			get: function get() {
				if (_jquery2.default.isFunction(this.options.offsetShow)) {
					return this.options.offsetShow(this.player);
				}

				return this.options.offsetShow;
			}
		}, {
			key: 'height',
			get: function get() {
				return this.player.element.height();
			}
		}, {
			key: 'width',
			get: function get() {
				return this.options.width || this.player.element.width();
			}
		}]);

		return MiniPlayer;
	}(_Component3.default);

	exports.default = MiniPlayer;

/***/ },
/* 6 */
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

	var _utils = __webpack_require__(7);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @param {Player} player Main player
	 * @param {Object} [options] Options of component
	 * @param {jQuery} [options.controls] Array of rows of control's name
	 * @param {Object} [options.controlOptions] Control options
	 * @property {Array} Array of rows of control's name
	 * @pr
	 *
	 */
	var ControlCollection = function (_Component) {
		_inherits(ControlCollection, _Component);

		function ControlCollection(player, options) {
			_classCallCheck(this, ControlCollection);

			options = _jquery2.default.extend({}, {
				controls: player.options.controls[options.name] || [],
				controlOptions: {}
			}, options);

			var _this = _possibleConstructorReturn(this, (ControlCollection.__proto__ || Object.getPrototypeOf(ControlCollection)).call(this, player, options));

			_this.active = options.active || false;
			_this.name = options.name;

			_this.player.controls[_this.name] = _this;
			return _this;
		}

		_createClass(ControlCollection, [{
			key: '_getControlOptions',
			value: function _getControlOptions(name) {
				var controlOptions = this.options.controlOptions;

				var result = controlOptions.control || {};

				if (controlOptions[name]) {
					result = _jquery2.default.extend(true, {}, result, controlOptions[name]);
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
						if (this.controls[i][name] != undefined) {
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
				    controls = _options.controls;


				this.element = (0, _utils.createEl)('div', {
					className: 'leplayer-control-collection leplayer-control-collection--' + name
				});

				controls.forEach(function (row, indexRow) {
					var elemRow = _this2.addRow();
					var hasTimeline = false;
					row.forEach(function (controlName) {
						if (controlName == 'timeline') {
							hasTimeline = true;
						}

						_this2.addControl(indexRow, controlName, _this2._getControlOptions(name));
					});

					if (!hasTimeline) {
						elemRow.css('width', '1px');
					}
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
/* 7 */
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
	exports.secondsToTime = secondsToTime;
	exports.percentify = percentify;
	exports.createEl = createEl;

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

/***/ },
/* 8 */
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

/***/ },
/* 9 */
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
/* 10 */
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

/***/ },
/* 11 */
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

			_this.activeSection = _this.getSectionByIndex(0);

			_this.items = items;
			_this.length = _this.items.length;

			_this.setActiveByIndex(0);

			_this.element.find('.leplayer-section').on('click', _this.onSectionClick.bind(_this));

			_this.player.on('sectionstoggle', _this._onSectionsToggle.bind(_this));

			_this.player.on('timeupdate', _this.onTimeUpdate.bind(_this));

			_this.player.on('inited', _this.updateSectionDuration.bind(_this));

			_this.player.on('durationchange', _this.updateSectionDuration.bind(_this));

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
				this.element = (0, _jquery2.default)('<div />').addClass('leplayer-sections');
				if (this.options.fullscreenOnly) {
					this.element.addClass('leplayer-sections--fsonly');
				}
				this.element.append(this._createSections(this.options.items));
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
				if (this.activeSection.length == 0 || this.activeSection.attr('data-index') == index || this.getSectionByIndex(index).length == 0) {
					return this;
				}

				this.activeSection.removeClass('leplayer-section--active');
				this.activeSection = this.getSectionByIndex(index);
				this.activeSection.addClass('leplayer-section--active');

				var topPosition = this.activeSection.position().top;

				this.element.animate({
					scrollTop: this.element.scrollTop() + topPosition
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
				if (this.activeSection.length == 0) {
					return;
				}

				var currentTime = data.time;

				// Update span with end section time
				// TODO: Вынести это в отдельный компонент ShowTime или типо того
				if (this.player.getView() === 'mini') {
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
/* 13 */
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
	 * @param {String} [options.imgUrl] path to poster image
	 * @class Poster
	 * @extends Component
	 */
	var Poster = function (_Component) {
		_inherits(Poster, _Component);

		function Poster(player) {
			var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

			_classCallCheck(this, Poster);

			options = _jquery2.default.extend({}, {
				imgUrl: player.options.poster
			}, options);

			return _possibleConstructorReturn(this, (Poster.__proto__ || Object.getPrototypeOf(Poster)).call(this, player, options));
		}

		/**
	  * @override
	  */


		_createClass(Poster, [{
			key: 'createElement',
			value: function createElement() {
				this.element = (0, _jquery2.default)('<div />').css('background-image', 'url("' + this.options.imgUrl + '")').addClass('leplayer-poster');
			}
		}]);

		return Poster;
	}(_Component3.default);

	_Component3.default.registerComponent('Poster', Poster);
	exports.default = Poster;

/***/ },
/* 14 */
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
/* 15 */
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
					if (d[0] == 'leplayer_' + name) return d[1];
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
/* 16 */
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
/* 17 */
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

			_this.player.on('play', function (e) {
				_this.play();
			});

			_this.player.on('pause', function (e) {
				_this.pause();
			});
			return _this;
		}

		/**
	  * Pause the video
	  */


		_createClass(PlayControl, [{
			key: 'pause',
			value: function pause() {
				this.icon.iconName = 'play';
				this.element.attr('title', this.options.title);
			}

			/**
	   * Play the video
	   */

		}, {
			key: 'play',
			value: function play() {
				this.icon.iconName = 'pause';
				this.element.attr('title', 'Поставить на паузу');
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
/* 18 */
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

	var _ControlDropdown2 = __webpack_require__(19);

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
				_this.value = data.volume;
			});
			return _this;
		}

		_createClass(VolumeControl, [{
			key: 'createElement',
			value: function createElement() {
				var _this2 = this;

				_get(VolumeControl.prototype.__proto__ || Object.getPrototypeOf(VolumeControl.prototype), 'createElement', this).call(this);
				var drag = false;

				this.marker = (0, _jquery2.default)('<div/>').addClass('volume-marker');

				this.active = (0, _jquery2.default)('<div/>').addClass('volume-active');

				this.line = (0, _jquery2.default)('<div/>').addClass('volume-line').append(this.active).append(this.marker).on('click', function (e) {
					if (drag) return;
					var p = _this2.getPosition(e.pageY);
					if (p >= 0 && p <= 1) {
						_this2.player.video.volume = 1 - p;
					}
				});

				this.dropdownContent.addClass('volume-slider').append(this.line);

				this.icon.element.attr('title', 'Отключить звук');

				this.marker.on('mousedown', function (e) {
					if (e.which != 1) return;
					drag = true;
				});

				(0, _jquery2.default)(document).on({
					'mousemove': function mousemove(e) {
						if (!drag) return;
						var p = _this2.getPosition(e.pageY);
						if (p >= 0 && p <= 1) {
							_this2.player.video.volume = 1 - p;
						}
					},

					'mouseup': function mouseup(e) {
						drag = false;
					}
				});
				return this.element;
			}
		}, {
			key: 'toggleMuted',
			value: function toggleMuted() {
				var video = this.player.video;


				if (video.volume == 0) {
					video.volume = video.defaultVolume;
				} else {
					video.volume = 0;
				}
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
				this.icon.iconName = this.player._calcVolumeIcon(value);

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
/* 19 */
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

			return _possibleConstructorReturn(this, (ControlDropdown.__proto__ || Object.getPrototypeOf(ControlDropdown)).call(this, player, options));
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
/* 20 */
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

	var _ControlText = __webpack_require__(21);

	var _ControlText2 = _interopRequireDefault(_ControlText);

	var _BufferedRanges = __webpack_require__(22);

	var _BufferedRanges2 = _interopRequireDefault(_BufferedRanges);

	var _Marker = __webpack_require__(23);

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
					video.seek(video.duration * p);
				}
			}
		}, {
			key: '_onTimeUpdate',
			value: function _onTimeUpdate(e, data) {
				var time = data.time;

				var duration = this.player.video.duration;
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
					'mousemove': function mousemove(e) {
						if (_this2.marker.drag) return;

						var p = _this2.getPosition(e.pageX);
						if (p > 0 && p < 1) {
							_this2.markerShadow.element.show().css('left', p * 100 + '%');
							_this2.markerShadow.markerTime.show().html((0, _utils.secondsToTime)(video.duration * p));
						} else {
							_this2.markerShadow.element.hide();
						}
					},

					'mouseleave': function mouseleave(e) {
						if (_this2.drag) return;
						_this2.markerShadow.element.hide();
					},

					'mousedown': function mousedown(e) {},

					'click': this._onLineClick.bind(this),

					'touchmove': function touchmove(e) {}
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
				if (this.sections == null || this.sections.length == 0) {
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
							'left': item[START] * 100 + '%',
							'width': (item[END] - item[START]) * 100 + '%'
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
/* 21 */
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
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file BufferedRanges.js
	 */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _utils = __webpack_require__(7);

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
/* 23 */
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

				'mousemove': function mousemove(e) {
					if (!_this.drag) return;
					_this.element.trigger('leplayer_mousemove', { x: e.pageX });
				},

				'mouseup': function mouseup(e) {
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
/* 24 */
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

	var _ControlCheckbox2 = __webpack_require__(25);

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
					view: this.player.getView()
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
/* 25 */
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
/* 26 */
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
/* 27 */
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

	var _ControlText = __webpack_require__(21);

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

			_this.player.on('ratechange', function (e, data) {
				_this.value = data.rate;
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
						video.rate -= this.player.options.rate.step;
					}
				});

				this.upControl = new _Control3.default(this.player, {
					className: 'rate-up',
					name: 'rate-up',
					iconName: 'forward',
					collection: this.options.collection,
					title: 'Увеличить скорость проигрывания',
					onClick: function onClick(e) {
						video.rate += this.player.options.rate.step;
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
				this.value = this.player.video.defaultRate;
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
			key: 'init',
			value: function init() {
				var rate = _cookie2.default.get('rate', this.player.options.rate.default);
				this.show(rate);
			}
		}, {
			key: 'show',
			value: function show(value) {
				var video = this.player.video;
				value = value || video.rate;
				value = parseFloat(value).toFixed(2).toString().replace(/,/g, '.');
				this.currentRate.text = '×' + value;
			}
		}, {
			key: 'value',
			set: function set(value) {
				var video = this.player.video;
				var options = this.player.options;
				if (this.disable) {
					return false;
				}
				this.upControl.disable = false;
				this.downControl.disable = false;
				if (video.rate <= options.rate.min) {
					this.downControl.disable = true;
				} else if (video.rate >= options.rate.max) {
					this.upControl.disable = true;
				}
				this.show();
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
			return _possibleConstructorReturn(this, (SourceControl.__proto__ || Object.getPrototypeOf(SourceControl)).call(this, player, options));
		}

		/**
	  * @override
	  */


		_createClass(SourceControl, [{
			key: 'onClick',
			value: function onClick(e) {
				_get(SourceControl.prototype.__proto__ || Object.getPrototypeOf(SourceControl.prototype), 'onClick', this).call(this, e);
				var defaultItem = this.getByIndex(0);

				this.player.video.source = {
					url: defaultItem.data('url'),
					title: defaultItem.data('title')
				};
				this.active = defaultItem;
			}
		}, {
			key: 'onItemClick',
			value: function onItemClick(e) {
				_get(SourceControl.prototype.__proto__ || Object.getPrototypeOf(SourceControl.prototype), 'onItemClick', this).call(this, e);
				var item = (0, _jquery2.default)(e.target);
				this.player.video.source = {
					url: item.data('url'),
					title: item.data('title')
				};
			}
		}, {
			key: 'onPlayerInited',
			value: function onPlayerInited(e, data) {
				var _this2 = this;

				var sources = this.player.options.sources;
				if (sources.length > 1) {
					sources.forEach(function (item) {
						_this2.addItem(item.title, {
							url: item.url,
							title: item.title
						});
					});
					this.setActiveByIndex(0);
					this.disable = false;
				}
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

	var _ControlDropdown2 = __webpack_require__(19);

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
				this.link = this.player.video.source.url;
			}
		}, {
			key: 'link',
			set: function set(value) {
				var parser = document.createElement('a');
				parser.href = value;
				var fileName = parser.pathname.split('/');
				fileName = fileName[fileName.length - 1];
				this.element.attr({
					'href': value,
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

	var _ControlDropdown2 = __webpack_require__(19);

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
						if (index != 0) {
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

	var _ControlText = __webpack_require__(21);

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
				var time = data.time;

				_this._currentTimeControl.text = (0, _utils.secondsToTime)(time);
			});
			return _this;
		}

		/**
	  * @override
	  */


		_createClass(TimeInfoControl, [{
			key: 'createElement',
			value: function createElement() {
				this._currentTimeControl = new _ControlText2.default(this.player, { className: 'control-time__current' });
				this._totalTimeControl = new _ControlText2.default(this.player, { className: 'control-time__total' });

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
		}, {
			key: 'currentTime',
			set: function set(value) {}
		}]);

		return TimeInfoControl;
	}(_Control3.default);

	_Component2.default.registerComponent('TimeInfoControl', TimeInfoControl);
	_Control3.default.registerControl('timeinfo', TimeInfoControl);
	exports.default = TimeInfoControl;

/***/ }
/******/ ]);