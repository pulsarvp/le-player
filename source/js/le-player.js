'use strict';

import $ from 'jquery';


import Control from './components/Control';
import Component from './components/Component';
import PlayButton from './components/PlayButton';
import SplashIcon from './components/SplashIcon';

import Icon from './components/Icon';
import Time from './components/Timeline/Time';
import ControlCollection from './components/ControlCollection';
import Sections from './components/Sections';
import ErrorDisplay from './components/ErrorDisplay';
import Poster from './components/Poster';
import FullscreenApi from './FullscreenApi';

import { createEl, secondsToTime, noop } from './utils';

import MediaError from './MediaError';
import Html5 from './entity/Html5.js';

// Register common controls
import './components/PlayControl';
import './components/VolumeControl';
import './components/Timeline/TimelineControl';
import './components/SectionControl';
import './components/FullscreenControl';
import './components/RateControl';
import './components/BackwardControl';
import './components/SourceControl';
import './components/SubtitleControl';
import './components/DownloadControl';
import './components/KeybindingInfoControl';
import './components/TimeInfoControl';

Control.registerControl('divider', function() {
	return {
		element : $('<div/>').addClass('divider')
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
	const result = [].concat(source);
	dist.forEach(item => {
		const index = result.indexOf(item);
		if (index > -1) {
			result.splice(index, 1);
			return
		}
	})

	return result;
}

const defaultOptions = {
	autoplay : false,
	height : 'auto',
	loop : false,
	muted : false,
	preload : 'metadata',
	poster : null,
	svgPath : '../dist/svg/svg-defs.svg',
	innactivityTimeout : 5000,
	rate : {
		step : 0.25,
		min : 0.5,
		max : 4.0,
		default : 1
	},
	playback : {
		step : {
			short : 5,
			medium : 10,
			long : 30
		}
	},
	controls : {
		common : [
			['play', 'volume', 'divider', 'timeline',  'divider', 'section', 'divider', 'fullscreen'],
			['rate', 'divider', 'backward', 'divider', 'source', 'divider', 'subtitle', 'divider', 'download', 'divider', 'keybinding info']
		],
		fullscreen : [
			['play', 'volume', 'divider', 'timeline', 'divider', 'rate', 'divider', 'keybinding info',  'divider', 'backward', 'divider', 'source', 'divider', 'subtitle', 'divider', 'download', 'divider', 'section', 'divider', 'fullscreen']
		],
		mini : [
			['play', 'volume', 'divider', 'fullscreen', 'divider', 'timeinfo']
		]
	},
	volume : {
		default : 0.4,
		mutelimit : 0.05,
		step : 0.1
	},
	keyBinding : [
		{
			key : 32,
			info : ['Space'],
			description : 'Начать проигрывание / поставить на паузу',
			fn : (player) => {
				player.video.togglePlay();
			}
		},
		{
			key : 37,
			info : ['←'],
			description : `Перемотать на 10 секунд назад`,
			fn : (player) => {
				player.video.currentTime -= player.options.playback.step.medium;
				player.splashIcon.show('undo');
			}
		},
		{
			key : 39,
			info : ['→'],
			description : `Перемотать на 10 секунд вперёд`,
			fn : (player) => {
				player.video.currentTime += player.options.playback.step.medium;
				player.splashIcon.show('redo');
			}
		},
		{
			shiftKey : true,
			info : ['Shift', '←'],
			description : 'Перейти на предыдущую секцию',
			key : 37,
			fn : (player) => {
				if(player.sections == null) {
					return;
				}
				player.sections.prev();

			}
		},
		{
			shiftKey : true,
			key : 39,
			info : ['Shift', '→'],
			description : 'Перейти на следующую секцию',
			fn : (player) => {
				if(player.sections == null) {
					return;
				}
				player.sections.next()
			}
		},
		{
			key : 38,
			info : ['↑'],
			description : 'Увеличить громкость',
			fn : (player) => {
				player.video.volume += player.options.volume.step;

				player.splashIcon.show(player.calcVolumeIcon(player.video.volume));

			}
		},

		{
			key : 40,
			info : ['↓'],
			description : 'Уменьшить громкость',
			fn : (player) => {
				player.video.volume -= player.options.volume.step;

				player.splashIcon.show(player.calcVolumeIcon(player.video.volume));
			}
		},

		{
			key : 70,
			info : ['f'],
			description : 'Открыть/закрыть полноэкраный режим',
			fn : (player) => {
				player.toggleFullscreen();
			}
		}
	],
	plugins : {
		miniplayer : {}
	},
	onPlayerInited : noop
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

class Player extends Component {
	constructor(element, options) {

		options.createElement = false;

		super(null, options);

		this._element = element;

		/**
		 * DOM container to hold inner of player
		 *
		 * @memberof! Player#
		 * @type {jQuery}
		 */
		this.innerElement = createEl('div');

		// Users options
		this._userOptions = options;
		this._initOptions();

		this._view = 'common';

		/**
		 * DOM container to hold all player
		 *
		 * @memberof! Player#
		 * @type {jQuery}
		 */
		this.element = this.createElement();

		/**
		 * Video html5 component
		 *
		 * @memberof! Player#
		 * @type {Html5}
		 */
		this.video = new Html5(this, { element });

		// Create controls
		// TODO: move this action to the createElement
		this.controls = {};
		this._initControls();

		/**
		 * @access private
		 */
		this._dblclickTimeout = null;

		this._initSections().then((data) => {
			this.sections = data.sectionsComponent;

			/**
			 * Sections init event
			 *
			 * @event Player#sectionsinit
			 */
			this.trigger('sectionsinit', data);
		});

		this.video.init().then(() => {
			/**
			 * Player init event
			 *
			 * @event Player#inited
			 */
			this.trigger('inited');
			this._initPlugins();
		});


		this._listenHotKeys();

		this._userActivity = false;
		this._listenUserActivity();

		const mediaElement = this.video.element;
		mediaElement.one({
			play : (e) => {
				/**
				 * First play event
				 *
				 * @event Player#firstplay
				 */
				this.trigger('firstplay');
				this.removeClass('leplayer--virgin');
			}
		});

		this._waitingTimeouts = [];

		mediaElement.on({

			loadstart : (e) => {
				this.removeClass('leplayer--ended');

				this.error = null;
				/**
				 * loadstart html5 media event
				 *
				 * @event Player#loadstart
				 */
				this.trigger('loadstart');
			},

			durationchange : (e) => {
				/**
				 * durationchange html5 media event
				 *
				 * @event Player#durationchange
				 */
				this.trigger('durationchange');
			},

			timeupdate : (e) => {
				if (this.video.currentTime > 0) {
					this.removeClass('leplayer--virgin');
				}

				/**
				 * timeupdate html5 media event
				 *
				 * @event Player#timeupdate
				 */
				this.trigger('timeupdate', { time : this.video.currentTime, duration : this.video.duration });

			},

			seeking : (e) => {
				this._startWaiting();
				/**
				 * seeking html5 media event
				 *
				 * @event Player#seeking
				 */
				this.trigger('seeking');

			},

			seeked : (e) => {
				this._stopWayting();
				/**
				 * seeked html5 media event
				 *
				 * @event Player#seeked
				 */
				this.trigger('seeked');
			},

			progress : () => {
				/**
				 * progress html5 media event
				 *
				 * @event Player#progress
				 */
				this.trigger('progress');
			},

			dblclick : () => {
				/**
				 * dblclick
				 *
				 * @event Player#dbclick
				 */
				this.trigger('dblclick');
			},

			click : () => {
				/**
				 * click
				 *
				 * @event Player#click
				 */
				this.trigger('click')
			},

			volumechange : (e) => {
				/**
				 * volumechange html5 media event
				 *
				 * @event Player#volumechange
				 */
				this.trigger('volumechange', { volume : this.video.volume });
			},

			play : (e) => {
				this.removeClass('leplayer--ended');
				this.removeClass('leplayer--paused');
				this.addClass('leplayer--playing');

				/**
				 * play html5 media event
				 *
				 * @event Player#play
				 */
				this.trigger('play');
			},

			pause : (e) => {
				this.removeClass('leplayer--playing');
				this.addClass('leplayer--paused');

				/**
				 * pause html5 media event
				 *
				 * @event Player#pause
				 */
				this.trigger('pause');
			},

			playing : (e) => {
				this._stopWayting();

				/**
				 * playing html5 media event
				 *
				 * @event Player#playing
				 */
				this.trigger('playing');
			},

			ratechange : (e) => {

				/**
				 * rate html5 media event
				 *
				 * @event Player#rate
				 */
				this.trigger('ratechange', { rate : this.video.rate });
			},

			canplay : (e) => {
				/**
				 * canplay html5 media event
				 *
				 * @event Player#canplay
				 */
				this.trigger('canplay');
			},

			ended : (e) => {
				this.addClass('leplayer--ended')

				if(this.options.loop) {
					this.currentTime = 0;
					this.video.play();
				} else if (!this.video.paused) {
					this.video.pause();
				}

				/**
				 * ended html5 media event
				 *
				 * @event Player#ended
				 */
				this.trigger('ended');
			},

			canplaythrough : (e) => {
				this._stopWayting();
				/**
				 * canplaythrough html5 media event
				 *
				 * @event Player#canplaythrough
				 */
				this.trigger('canplaythrough');
			},

			waiting : (e) => {
				this._startWaiting()

				this.one('timeupdate', () => this._stopWayting());

				/**
				 * waiting html5 media event
				 *
				 * @event Player#waiting
				 */
				this.trigger('waiting');
			},

			error : (e) => {
				this.error = new MediaError(e.target.error.code);
			}
		});

		this.on('fullscreenchange', this._onFullscreenChange.bind(this));
		this.on('click', this._onClick.bind(this));
		this.on('dblclick', this._onDbclick.bind(this));
		this.on('inited', this._onInited.bind(this));
		this.on('play', this._onPlay.bind(this));
		this.on('pause', this._onPause.bind(this));

		$(document).on(FullscreenApi.fullscreenchange, this._onEntityFullscrenChange.bind(this));

	}

	/**
	 * Starts playing the video
	 *
	 * @access public
	 */
	play() {
		return this.video.play();
	}

	/**
	 * Pauses the currently playing video
	 *
	 * @access public
	 */
	pause() {
		return this.video.pause();
	}

	/**
	 * Toggle the currently playing video
	 *
	 * @access public
	 */
	togglePlay() {
		return this.video.togglePlay();
	}

	/**
	 * Begin loading the src data
	 *
	 * @access public
	 */
	load() {
		return this.video.load();
	}

	/**
	 * On set view callback
	 *
	 * @access public
	 * @param {String} view View name
	 * @returns {Player} this
	 */
	onSetView(view, ...args) {
		this.on(`setview.${view}`, ...args);

		return this;
	}

	/**
	 * On del view callback
	 *
	 * @access public
	 * @param {String} view View name
	 * @returns {Player} this
	 */
	onDelView(view, ...args) {
		this.on(`delview.${view}`, ...args);

		return this;
	}

	/**
	 * Get some data for player
	 *
	 * @access public
	 * @returns {jQuery.promise} Promise
	 */
	getData() {
		const dfd = new $.Deferred();

		if (this._data !== undefined) {
			dfd.resolve(this._data);
			return dfd.promise()
		}

		if (typeof this.options.data === 'string') {
			return $.ajax({
				url : this.options.data,
				method : 'GET',
				dataType : 'json'
			}).promise();

		} else if (typeof this.options.data === 'object') {
			dfd.resolve(this.options.data);
			return dfd.promise()
		}
	}

	getSectionData() {
		return this.getData()
			.then(data => {
				return data.sections
			})
	}

	/**
	 * Request fullscreen
	 *
	 * @access public
	 * @fires Player#fullscreenchange
	 */
	requestFullscreen() {
		const fsApi = FullscreenApi;

		if(fsApi.requestFullscreen) {
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
	exitFullscreen() {
		const fsApi = FullscreenApi;

		if(fsApi.exitFullscreen) {
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
	toggleFullscreen() {
		if(this.view === 'fullscreen') {
			this.exitFullscreen()
		} else {
			this.requestFullscreen()
		}
	}

	/**
	 * Get ControlCollection of Player by name (e.x 'common', 'fullscreen')
	 *
	 * @access public
	 * @param {String} name - Name of ControlCollection
	 * @returns {ControlCollection}
	 */
	getControls(name) {
		return this.controls[name];
	}

	/**
	 * Return the width of player.
	 *
	 * @access public
	 * @returns {Number} Width in px
	 */
	getWidth() {
		return this.element.width()
	}

	/**
	 * Complete the sections, by the additional field 'end' in each section
	 *
	 * @access public
	 * @param {Object} sections - Sections
	 * @returns {Object} New sections
	 */
	completeSections(sections) {
		if (sections == null || sections.length === 0) {
			return
		}
		let newSections = [].concat(sections)
		for (let i = 0; i < newSections.length; i++) {
			let endSection;
			if (i < (newSections.length - 1)) {
				endSection = newSections[i+1].begin
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
	get currentTime() {
		return this.video.currentTime;
	}

	set currentTime(value) {
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
	get duration() {
		return this.video.duration;
	}

	/**
	 * Returns whether the playback of the audio/video has ended or not
	 * Getter
	 *
	 * @memberof! Player#
	 * @type {Boolean}
	 */
	get ended() {
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
	get error() {
		return this._error || null;
	}

	set error(value) {
		if (value === null) {
			this._error = null;
			this.removeClass('leplayer--error');
			if(this.errorDisplay) {
				this.errorDisplay.element.hide()
			}
			return this;
		}
		this._error = new MediaError(value);

		this.addClass('leplayer--error');

		/**
		 * error event
		 *
		 * @event Player#error
		 * @property {MediaError} error
		 */
		this.trigger('error', { error : this._error});

		return this;
	}

	/**
	 * Return the height of player. If you want get height only of video element, use this.video.height or whatever
	 *
	 * @access public
	 * @type {Number}
	 * @memberof! Player#
	 */
	get height() {
		return this.element.height()
	}

	/**
	 * Return unnecessary video heigth
	 * @access public
	 * @type {Number}
	 * @memberof! Player#
	 */
	get videoHeight() {
		return this.video.height;
	}


	/**
	 * @access public
	 * @type {Boolean}
	 * @mebmerof! Player#
	 */
	get userActive() {
		return this._userActive || false;
	}

	set userActive(value) {
		if(value !== this.getUserActive) {
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
	get view() {
		return this._view;
	}

	set view(view) {
		if(this.view != null) {
			this.removeClass(`leplayer--${this.view}`);
			this.trigger(`delview.${this.view}`);
		}

		this._view = view;
		this.element.addClass(`leplayer--${view}`)
		this.trigger(`setview.${view}`);

		return this;
	}

	/**
	 * Remove unnecessary attributes, and set some attrs from options (loop, poster etc...). Create main DOM objects
	 *
	 * @override
	 */
	createElement() {
		const options = this.options;
		const element = this._element;

		this.element = createEl('div');

		[

			// Remove controls because we dont not support native controls yet
			'controls',
			'poster',

			// It is unnecessary attrs, this functionality solve CSS
			'height',
			'width'

		].forEach(item => {
			element.removeAttr(item);
		});

		// Set attrs from options
		[
			'preload',
			'autoplay',
			'loop',
			'muted'
		].forEach(item => {
			if(this.options[item]) {
				element.attr(item, this.options[item]);
				element.prop(item, this.options[item]);
			}
		})

		element.find('source[data-quality]').each((i, item) => {
			$(item).remove();
		});


		this.element = this.element
			.addClass('leplayer')
			.attr('tabindex', 0)
			.css('width', '100%')
			.css('max-width', (options.width || this.video.width) + 'px')

		/**
		 * Error display component.
		 *
		 * @type {ErrorDisplay}
		 * @memberof! Player#
		 */
		this.errorDisplay = new ErrorDisplay(this);


		/**
		 * Play button component.
		 *
		 * @type {PlayButton}
		 * @memberof! Player#
		 */
		this.playButton = new PlayButton(this);

		// TODO: Вынести это в отдельнеый компонент
		this.loader = $('<div />')
			.addClass('leplayer-loader-container')
			.append(new Icon(this, {
				iconName : 'refresh',
				className : 'leplayer-loader-container__icon'
			}).element);


		/**
		 * Splash icon component.
		 *
		 * @type {SplashIcon}
		 * @memberof! Player#
		 */
		this.splashIcon = new SplashIcon(this);

		this.videoContainer = createEl('div', {
			className : 'leplayer-video'
		})
		.append(this.errorDisplay.element)
		.append(this.playButton.element)
		.append(this.loader)
		.append(this.splashIcon.element)

		if(options.poster) {
			this.poster = new Poster(this);
			this.videoContainer.append(this.poster.element);
		}


		const lastTimer = new Time(this, {
			fn : (player) => {
				const video = player.video
				return secondsToTime(video.duration - video.currentTime);
			}
		})

		this.infoElement = createEl('div', {
			className : 'leplayer__info'
		})
		.append(createEl('div', {
			className : 'leplayer__title',
			html : this.options.title || ""
		}))
		.append(createEl('div', {
			className : 'leplayer__video-info',
			html : this.options.videoInfo || ""
		}))
		.append(createEl('div', {
			className : 'leplayer__last',
			html : `Видео закончится через `,
		}).append(lastTimer.element))

		this.innerElement = $('<div />')
			.addClass('leplayer__inner')
			.append(this.videoContainer)
			.append(this.infoElement)

		this.element = this.element
			.append(this.innerElement)

		this.addClass('leplayer--paused');
		this.addClass('leplayer--virgin');


		if(options.sectionContainer) {
			this.sectionsContainer = $(options.sectionContainer);
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
	 * @access public
	 * @returns {Object} options
	 */
	optionsFromElement() {
		// Copy video attrs to the opitons
		const  element = this._element;
		let attrOptions = [
			'height',
			'width',
			'poster',
			'autoplay',
			'loop',
			'muted',
			'preload',
		]
		.reduce((obj, item) => {
			const val = element.attr(item)
			if(val != null) {
				obj[item] = element.attr(item);
			}
			return obj;
		}, {});

		attrOptions.sources = [];

		// Src it is main source, that will be load
		if(element.attr('src')) {
			attrOptions.src = {
				url : element.attr('src'),
				title : element.attr('data-quality') || element.attr('title') || 'default'
			}
		}

		// Copy sources from HTML5 source element with data-quality attr
		// If data-quality attr does not exist - no
		element.find('source').each((i, item) => {
			item = $(item);
			if(!item.attr('data-quality')) {
				return
			}
			attrOptions.sources = attrOptions.sources.concat({
				url : item.attr('src'),
				title : item.attr('data-quality') || item.attr('title') || 'default'
			})

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
	calcVolumeIcon(value) {
		const volume = value || this.video.volume;

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
	_initOptions() {
		const attrOptions = this.optionsFromElement();
		let presetOptions = {};

		if (this._userOptions.preset && Player.getPreset(this._userOptions.preset)) {
			presetOptions = Player.getPreset(this._userOptions.preset).options;
		}


		// Merge default options + preset options + video attributts+ user options
		this.options = $.extend(true, {}, defaultOptions, presetOptions, attrOptions, this._userOptions);

		if(this.options.sources && !Array.isArray(this.options.sources)) {
			this.options.sources = [this.options.sources]
		}

		if(this.options.src == null && this.options.sources.length > 0) {
			this.options.src = this.options.sources[0]
		}

		// Merge correctly controls, without deep merge
		this.options.controls = $.extend({}, defaultOptions.controls, presetOptions.controls, this._userOptions.controls);

		// exclude controls option
		for (const name in this.options.excludeControls) {
			if (!this.options.excludeControls.hasOwnProperty(name)) return;
			const controlCollection = this.options.excludeControls[name];
			controlCollection.forEach((row, index) => {
				if (this.options.controls[name] && this.options.controls[name][index]) {
					this.options.controls[name][index] = excludeArray(this.options.controls[name][index], row);
				}
			})
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
	_initControls() {
		for (const name of ['common', 'fullscreen']) {
			if (!this.options.controls.hasOwnProperty(name)) return;
			const controlCollection = new ControlCollection(this, { name });
			this.element.append(controlCollection.element);
		}

		if (this.controls.common != null) {
			this.controls.common.active = true;
		}
	}


	_listenHotKeys() {

		const isKeyBinding = (e, binding) => {
			return ((e.which === binding.key) || (e.key === binding.key)) &&
					(!!binding.shiftKey === e.shiftKey) &&
					(!!binding.ctrlKey === e.ctrlKey)
		}

		this.element.on('keydown.leplayer.hotkey', (e) => {
			const _isFocused = () => this.element.is(':focus');
			if (_isFocused) {

				this.options.keyBinding.forEach(binding => {

					if(isKeyBinding(e, binding)) {
						e.preventDefault();
						binding.fn(this);
						return false;
					}

				})
			}
		})
	}

	/**
	 * Init sections, get ajax or json with sections data and create Sections object and added them to the DOM
	 *
	 * @access private
	 * @returns {jqPromise} jQuery promise
	 */
	_initSections() {
		const dfd = $.Deferred();
		if (this.options.data == null) {
			dfd.reject(null)
		} else {
			this.getSectionData().done(sections => {
				sections = [...sections];

				const isSectionOutside = (this.sectionsContainer && this.sectionsContainer.length > 0);

				if (sections == null || sections.length === 0) {
					dfd.reject(null);
					return;
				}

				sections = this.completeSections(sections);

				const sectionsComponent = new Sections(this, {

					items : sections,
					fullscreenOnly : isSectionOutside,
				});

				this.innerElement.append(sectionsComponent.element);

				if (isSectionOutside) {
					const outsideSections = new Sections(this, {
						items : sections,
					});
					this.sectionsContainer.append(outsideSections.element);
				}
				dfd.resolve({ sectionsComponent, items : sections });
			})
		}

		return dfd.promise()
	}

	/**
	 * Function, than init all plugins from player options.
	 * If plugin doesn't exist throw an error
	 *
	 * @access private
	 * @returns {Player} this
	 */
	_initPlugins() {
		if (this.options.plugins) {
			for (const name in this.options.plugins) {
				if(!this.options.plugins.hasOwnProperty(name)) return;
				const pluginOptions = this.options.plugins[name];
				if(this[name]) {
					if(pluginOptions) {
						this[name](pluginOptions);
					}
				} else {
					console.error(`Plugin '${name}' doesn't exist`);
				}
			}
		}

		return this;
	}


	/**
	 * @access private
	 */
	_listenUserActivity() {
		let mouseInProgress;
		let lastMoveX;
		let lastMoveY;

		const onMouseMove = (e) => {
			if(e.screenX !== lastMoveX || e.screenY !== lastMoveY) {
				lastMoveX = e.screenX;
				lastMoveY = e.screenY;
				this._userActivity = true
			}
		}

		const onMouseDown = (e) => {
			this._userActivity = true

			// While user is pressing mouse or touch, dispatch user activity
			clearInterval(mouseInProgress);

			mouseInProgress = setInterval(() => {
				this._userActivity = true
			}, 250);
		}

		const onMouseUp = (e) => {
			this._userActivity = true
			clearInterval(mouseInProgress);
		}

		this.element.on('mousemove', onMouseMove);

		this.element.on('mousedown', onMouseDown);

		this.element.on('mouseup', onMouseUp);

		this.element.on('keydown', (e) => this._userActivity = true);
		this.element.on('keyup', (e) => this._userActivity = true);

		// See http://ejohn.org/blog/learning-from-twitter/
		let inactivityTimeout;
		const delay = this.options.innactivityTimeout;
		setInterval(() => {
			if (this._userActivity) {

				// Reset user activuty tracker
				this._userActivity = false;

				this.userActive = true;

				clearTimeout(inactivityTimeout);

				if (delay > 0) {

					inactivityTimeout = setTimeout(() => {
						if (!this._userActivity) {
							this.userActive = false;
						}
					}, delay);
				}
			}
		}, 250)
	}

	/**
	 * Stop showing spinner and clear delay of showing spinner
	 *
	 * @access private
	 */
	_stopWayting() {
		this._waitingTimeouts.forEach(item => clearTimeout(item));
		this._waitingTimeouts = [];
		this.removeClass('leplayer--waiting');
	}

	/**
	 * Show spinner with delay in 300ms
	 *
	 * @access private
	 */
	_startWaiting() {
		this._waitingTimeouts.push(setTimeout(() => {
			this.addClass('leplayer--waiting');
		}, 300));
	}


	/**
	 * On inited player event handler
	 *
	 * @access private
	 * @param {PlayerEvent} e
	 */
	_onInited(e) {
		this.addClass('leplayer--inited');

		this.options.onPlayerInited.call(this, e);
	}


	/**
	 * On click video event handler. Focus on video and togglePlay
	 *
	 * @access private
	 * @param {PlayerEvent} e
	 */
	_onClick(e) {
		clearTimeout(this._dblclickTimeout);
		this._dblclickTimeout = setTimeout(() => {
			this.video.element.focus()
			this.togglePlay();
		}, 300);
	}

	/**
	 * On dblclick on the video player event handler
	 *
	 * @access private
	 * @param {PlayerEvent} e
	 */
	_onDbclick(e) {
		clearTimeout(this._dblclickTimeout);
		this.toggleFullscreen();
	}

	/**
	 * On fullscreen change player event handler
	 *
	 * @access private
	 * @param {PlayerEvent} e
	 */
	_onFullscreenChange(e, isFs) {
		if(isFs) {
			this.view = 'fullscreen';
		} else {
			this.view = 'common';
		}
	}


	/**
	 * On play event handler
	 *
	 * @access private
	 * @param {PlayerEvent} e
	 */
	_onPlay() {
		this.splashIcon.show('play');
	}

	/**
	 * On pause player event handler
	 * Show pause icon in the center of video
	 *
	 * @access private
	 */
	_onPause() {
		this.splashIcon.show('pause');
	}

	_onEntityFullscrenChange() {
		const fsApi = FullscreenApi;
		const isFs = !!document[fsApi.fullscreenElement];
		this.trigger('fullscreenchange', isFs);
	}

}

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
Player.plugin = function(name, fn) {
	Player.prototype[name] = fn;
}

/**
 * Get by name registered component
 *
 * @param {String} name - Name of component
 * @return {Component}
 */
Player.getComponent = Component.getComponent;

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
Player.registerComponent = Component.registerComponent;

/**
 * Register control
 *
 * @access public
 * @static
 * @param {String} name
 * @param {Control} control
 */
Player.getControl = Control.getControl;

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
Player.registerControl = Control.registerControl;


/**
 * Convert seconds to format string 'hh?:mm:ss'
 *
 * @access public
 * @param {Number} seconds Seconds
 * @param {Boolean} showHours convert to format 'hh:mm:ss'
 * @returns {String}
 */
Player.secondsToTime = secondsToTime;


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
Player.preset = function(name, obj) {
	if(typeof obj === 'object') {
		Player._presets[name] = $.extend({}, {
			options : {},
			initOptions : noop
		}, obj);
	} else if (typeof obj === 'function') {
		Player._presets[name] = obj();
	}
};


Player.getPreset = function(name) {
	if(Player._presets[name]) {
		return Player._presets[name];
	} else {
		console.error(`preset ${name} doesn't exist`);
		return null;
	}
}


Player._presets = {};


window.$.fn.lePlayer = function (options) {
	return this.each(function () {
		return new Player($(this), options);
	});
};

window.$.lePlayer = Player;

window.lePlayer = Player;


/**
 * Mini Player plugin
 *
 * @plugin
 */
Player.plugin('miniplayer', function(pluginOptions) {
	const player = this;

	// Мержим с this.options.miniplayer, чтобы не сломать обратную совместимось, так как раньше
	// миниплеер не был плагином плеера.
	const options = $.extend({}, {
		width : '100%',
		offsetShow : (player) => {
			const offset = player.element.offset().top
				+ player.element.outerHeight()
				- player.getControls('common').element.height();

			return offset;
		}
	}, this.options.miniplayer, pluginOptions);

	const controls = new ControlCollection(this, {
		name : 'mini',
		controls : options.controls,
		controlOptions : {
			control : {
				disable : false
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
	const offsetShow = () => {
		if ($.isFunction(options.offsetShow)) {
			return options.offsetShow(player);
		}

		return options.offsetShow
	}

	const getWidth = () => {
		return options.width || this.element.width();
	}


	this._updateMiniPlayer = () => {
		const scrollTop = $(window).scrollTop();

		if(scrollTop > offsetShow()) {
			this.showMiniPlayer();
		} else {
			this.hideMiniPlayer();
		}
	}

	this.showMiniPlayer = (force) => {
		if (!force && this.view === 'mini') {
			return;
		}

		// Added empty space
		this.element.css('padding-top', this.videoContainer.height());

		this.view ='mini';
	}

	this.hideMiniPlayer = (force) => {
		if(!force && this.view !== 'mini') {
			return;
		}
		this.view = 'common';
	}

	$(window).on('scroll', this._updateMiniPlayer.bind(this));
	$(window).on('resize', this._updateMiniPlayer.bind(this));
	this.on('inited', this._updateMiniPlayer.bind(this));

	this.onSetView('mini', () => {
		this.innerElement.css('max-width', getWidth());
		this.innerElement.css('height', this.video.height);
	});

	this.onDelView('mini', () => {
		this.innerElement.css('max-width', '')
		this.innerElement.css('height', '')

		this.element.css('padding-top', '');
	});


	this._updateMiniPlayer();
});

Player.preset('vps', require('./presets/vps.js').preset);
Player.preset('sms', require('./presets/sms.js').preset);
Player.preset('compressed', require('./presets/compressed.js').preset);
