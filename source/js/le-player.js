'use strict';

import $ from 'jquery';
import ControlCollection from './components/ControlCollection';
import Control from './components/Control';
import Component from './components/Component';
import MiniPlayer from './components/MiniPlayer';
import Icon from './components/Icon';
import Sections from './components/Sections';
import ErrorDisplay from './components/ErrorDisplay';

import { C_TIMELINE, C_KEYBINDING_INFO } from './ControlFactory';
import Cookie from './utils/cookie';
import { secondsToTime, createEl } from './utils';

import MediaError from './MediaError';



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
	miniplayer : false,
	autoplay : false,
	height : 'auto',
	loop : false,
	muted : false,
	preload : 'metadata',
	poster : null,
	svgPath : '../dist/svg/svg-defs.svg',
	innactivityTimeout : 10000,
	fullscreen : {
		hideTimelineTime : 10000
	},
	rate : {
		step : 0.25,
		min : 0.5,
		max : 4.0,
		'default' : 1
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
			[ 'play', 'volume', 'divider', 'timeline',  'divider', 'section', 'divider', 'fullscreen' ],
			[ 'rate', 'divider', 'backward', 'divider', 'source', 'divider', 'subtitle', 'divider', 'download', 'divider', C_KEYBINDING_INFO ]
		],
		fullscreen : [
			[ 'play', 'volume', 'divider', 'timeline', 'divider', 'rate', 'divider', C_KEYBINDING_INFO,  'divider', 'backward', 'divider', 'source', 'divider', 'subtitle', 'divider', 'download', 'divider', 'section', 'divider', 'fullscreen' ]
		],
		mini : [
			[ 'play', 'volume', 'divider', 'fullscreen', 'divider', 'timeinfo']
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
			}
		},
		{
			key : 39,
			info : ['→'],
			description : `Перемотать на 10 секунд вперёд`,
			fn : (player) => {
				player.video.currentTime += player.options.playback.step.medium;
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
			}
		},

		{
			key : 40,
			info : ['↓'],
			description : 'Уменьшить громкость',
			fn : (player) => {
				player.video.volume -= player.options.volume.step;
			}
		},

		{
			key : 70,
			info : ['f'],
			description : 'Открыть/закрыть полноэкраный режим',
			fn : (player) => {
				player.video.fullscreen.toggle()
			}
		}
	],
	miniplayer : {
		width: '100%',
		offsetShow : (player) => {
			// 80px - it's height of common controls container
			const offset = player.element.offset().top + player.element.outerHeight() - 80;

			return offset;
		}
	},
	onPlayerInited : function() {}
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
 * @param {Number} [options.fullscreen] Fullscreen options
 * @param {Number} [options.fullscreen.hideTimelineTime=10000] Delay before hide timeline in fullscreen view
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
 */
let Player = function (element, options) {

	let self = this;
	let player = this;

	var subtitles = [];

	// key -> contol collection name, valuy -> ControlCollection
	this.controls = {};

	// Entity component
	this.video = null;

	this.sections = null;

	/**
	 * DOM container to hold video and all other stuff.
	 * @type object
	 */

	this.element = createEl('div');
	let playButton = this.playButton = null;
	let loader = null;
	let sectionContainer = null;
	let videoContainer = this.videoContainer = null;
	this.innerElement = createEl('div');

	this.getData = () => {
		return $.ajax({
			url: this.options.dataUrl,
			method: 'GET',
			dataType: 'json'
		}).promise()
	}


	/**
	 * This class manages FullScreen API.
	 * @TODO: add fullscreenerror handler.
	 */
	class Fullscreen {

		constructor (player) {
			this.player = player;
			this._collection = player.controls.fullscreen;
			this._hideTimeout = null;
			this.fullscreenEnabled = false;
		}

		/**
		 * @returns {boolean} Whether browser supports fullscreen mode.
		 */
		enabled () {
			return !!(document.fullscreenEnabled
				|| document.mozFullScreenEnabled
				|| document.msFullscreenEnabled
				|| document.webkitSupportsFullscreen
				|| document.webkitFullscreenEnabled
				|| document.createElement('video').webkitRequestFullScreen);
		}

		init () {
			if (!this.enabled()) {
				return null;
			}
				// Fullscreen change handlers.
			$(document).on({

				'fullscreenchange' : (e) => {
					this.toggleElements(!!(document.fullScreen || document.fullscreenElement));
				},

				'webkitfullscreenchange' : (e) => {
					this.toggleElements(!!document.webkitIsFullScreen);
				},

				'mozfullscreenchange' : (e) => {
					this.toggleElements(!!document.mozFullScreen);
				},

				'msfullscreenchange' : (e) => {
					this.toggleElements(!!document.msFullscreenElement);
				},

				'webkitbeginfullscreen' : (e) => {
					this.toggleElements(true)
				},

				'webkitendfullscreen' : (e) => {
					this.toggleElements(false)
				}
			});
		}

		/**
		 * @returns {boolean} Whether browser is in fullscreen mode.
		 */
		is () {
			return !!(document.fullScreen
				|| document.webkitIsFullScreen
				|| document.mozFullScreen
				|| document.msFullscreenElement
				|| document.fullscreenElement
				|| this.fullscreenEnabled);
		}

		showElements () {
			this.player.trigger('fullscreenchange', true);
			this.player.setView('fullscreen');
		}

		hideElements () {
			this.player.trigger('fullscreenchange', false);
			this.player.setView('common');
			clearTimeout(this._hideTimeout);
			$(this.player.element).off('.leplayer.fullscreen-hide-timeline');
		}

		toggle () {
			let containerEl = this.player.element[ 0 ];
			if (this.is()) {
				if (document.exitFullscreen)				document.exitFullscreen();
				else if (document.mozCancelFullScreen)	  document.mozCancelFullScreen();
				else if (document.webkitCancelFullScreen)   document.webkitCancelFullScreen();
				else if (document.msExitFullscreen)		 document.msExitFullscreen();
				else if (document.webkitExitFullscreen)	 document.webkitExitFullscreen();
				this.hideElements(); // @TODO: make this only if fullscreen fired.
				this.fullscreenEnabled = false;
			}
			else {
				if (containerEl.requestFullScreen)			containerEl.requestFullScreen();
				else if (containerEl.webkitRequestFullScreen) containerEl.webkitRequestFullScreen();
				else if (containerEl.mozRequestFullScreen)	containerEl.mozRequestFullScreen();
				else if (containerEl.msExitFullscreen)		containerEl.msRequestFullscreen();
				this.showElements(); // @TODO: make this only if fullscreen fired.
				this.fullscreEnabled = true;
			}
		}

		/**
		 * Update DOM structure according to current state.
		 */
		toggleElements (show) {
			if (!!show) {
				this.showElements();
			}
			else {
				this.hideElements();
			}
		}
	}

	class Video {
		constructor (player, ctx) {
			this.player = player;
			this._ctx = ctx;
			this._video = ctx[ 0 ];
			this.subtitles = [];
			this.bufferRanges = [];
			this.playbackRate = this._video.playbackRate;
			this._initHtmlEvents();

			if($(this._video).attr('src') == null) {
				this.source = this.player.options.src;
			}
		}

		get currentTime () {
			return this._video.currentTime;
		}

		set currentTime (value) {
			if (value > this.duration) {
				this._video.currentTime = this.duration
			} else if (value < 0 ) {
				this._video.currentTime = 0
			} else {
				this._video.currentTime = value;
			}
		}

		get duration () {
			return this._video.duration;
		}

		get height () {
			return this._video.clientHeight;
		}

		get width () {
			return this._video.clientWidth;
		}

		get rate () {
			return this._video.playbackRate;
		}

		get defaultRate() {
			return Cookie.get('rate') || player.options.rate.default
		}


		set rate (value) {
			const player = this.player;
			if ( value <= player.options.rate.max && value >= player.options.rate.min ) {
				this._video.playbackRate = value;
				Cookie.set('rate', value);
			}
			/** TODO: Chanche controls.rate in event handler */
			//controls.rate = this._video.playbackRate;
		}


		set source (src) {
			if(this.source && this.source.url === src.url) return;
			const time = this._video.currentTime;
			const rate = this._video.playbackRate;
			const stop = this._video.paused;

			$(this._video).attr('src', src.url);

			this._video = this._ctx[0];

			this._video.playbackRate = rate;

			this._video.currentTime = time;

			this._source = src;

			if (stop) {
				this.pause();
			} else {
				this.play();
			}
		}

		get source () {
			return this._source
		}

		set track (value) {
			for (var i = 0; i < this._video.textTracks.length; i++) {
				if (this._video.textTracks[ i ].language == value)
					this._video.textTracks[ i ].mode = 'showing';
				else
					this._video.textTracks[ i ].mode = 'hidden';
			}
		}

		get volume () {
			return this._video.volume;
		}


		get defaultVolume () {
			return Cookie.get('volume') || player.options.volume.default;
		}

		set volume (value) {
			const player = this.player;
			if (value > 1) {
				this._video.volume = 1;
			} else if (value < player.options.volume.mutelimit) {
				this._video.volume = 0;
			} else {
				this._video.volume = value;
				Cookie.set('volume', value);
			}
			this._video.mute = (value < player.options.volume.mutelimit);
		}


		get buffered () {
			return this._video.buffered;
		}

		/**
		 * @return {TimeRanges}
		 */
		get seekable () {
			return this._video.seekable;
		}

		/**
		 * @return {TimeRanges}
		 */
		get played() {
			return this._video.played;
		}

		get playedPercentage() {
			let result = 0;
			for (let i = 0; i < this.played.length; i++) {
				result += (this.played.end(i) - this.played.start(i))
			}

			return result / this.duration * 100
		}

		init () {
			let dfd = $.Deferred();
			this._initSubtitles();
			this._initVideo()
				.done(() => {
					this.fullscreen = new Fullscreen(this.player);
					this.fullscreen.init();
					this._initRate();
					this._initVolume();
					this.startBuffering();
					dfd.resolve();
				});
			return dfd.promise();
		}

		startBuffering() {
			const volume = this.volume;
			this.volume = 0
			return this.play()
				.then( () => {
					return this.pause();
				})
				.then( () => {
					this.currentTime = 0;
					this.volume = volume;
				})
		}

		togglePlay () {
			/** In safari it doesn't work */
			// if (this._video.readyState < 2) {
			// 	overlay.hide();
			// 	_showNotification('Error!');
			// 	return;
			// }
			if (!this._video.played || this._video.paused) {
				this.play();
			} else {
				this.pause();
			}
		}

		seek (time) {
			this._video.currentTime = time;
		}

		play () {
			let dfd = $.Deferred();
			const playPromise = this._video.play();

			if( playPromise != null) {
				playPromise.then(function() {
					dfd.resolve();
				})
			} else {
				dfd.resolve();
			}
			return dfd.promise();
		}

		pause () {
			let dfd = $.Deferred();
			const pausePromise = this._video.pause();

			if( pausePromise != null) {
				pausePromise.then(function() {
					dfd.resolve();
				})
			} else {
				dfd.resolve();
			}
			return dfd.promise();
		}

		trigger (eventName, ...args) {
			this.player.trigger.call($(this._video), `leplayer_${eventName}`, ...args);
			return this;
		}

		on (eventName, ...args) {
			$(this._video).on.call($(this._video), `leplayer_${eventName}`, ...args);
			return this;
		}

		_initRate () {
			this.rate = this.defaultRate;
		}

		_initVolume () {
			this.volume = this.defaultVolume;
		}

		_initSubtitles () {
			let _self = this;
			this._ctx.children('track[kind="subtitles"]').each(function () {
				let language = $(this).attr('srclang');
				let title = $(this).attr('label');
				let src = $(this).attr('src');
				if (title.length > 0 && src.length > 0) {
					_self.subtitles.push({
						title : title,
						src : src,
						language : language
					});
				}
			});
		}

		_initVideo () {
			let dfd = $.Deferred();
			if (this._video.readyState > HTMLMediaElement.HAVE_NOTHING) {
				dfd.resolve()
				this._textTracksHack();
			} else {
				$(this._video).one('loadedmetadata', (e) => {
					dfd.resolve()
					this._textTracksHack();
				});
			}
			dfd.notify();
			return dfd.promise();
		}

		_textTracksHack () {

			// This is generally for Firefox only
			// because it somehow resets track list
			// for video element after DOM manipulation.

			if (this._video.textTracks.length == 0 && this.subtitles.length > 0) {
				this._ctx.children('track[kind="subtitles"]').remove();
				for (var i in this.subtitles) {
					if (this.subtitles.hasOwnProperty(i)) {
						this._ctx
							.append($('<track/>')
								.attr('label', this.subtitles[ i ].title)
								.attr('src', this.subtitles[ i ].src)
								.attr('srclang', this.subtitles[ i ].language)
								.attr('id', this.subtitles[ i ].language)
								.attr('kind', 'subtitles'));
					}
				}
			}
		}

		_initHtmlEvents () {
			let mediaElement = $(this._video);
			let timerId = null;

			mediaElement.on({

				'loadstart' : (e) => {
					this.player.setError(null);
					this.player.removeClass('leplayer--ended');
					this.player.trigger('loadstart');
				},

				'durationchange' : (e) => {
					this.player.trigger('durationchange');
				},

				'timeupdate' : (e) => {
					//controls.moveTimeMarker();
					this.player.trigger('timeupdate', { time : this.currentTime, duration : this.duration });
				},

				'ended' : () => {
					this.pause();
					this.player.trigger('ended');

				},

				'progress' : () => {
					this.player.trigger('progress');
				},

				'dblclick' : () => {
					clearTimeout(timerId);
					this.fullscreen.toggle();
				},

				'click' : () => {
					clearTimeout(timerId);
					timerId = setTimeout(() => {
						this.player.element.focus()
						this.togglePlay();
					}, 300);
				},

				'volumechange' : (e) => {
					this.player.trigger('volumechange', { volume : this.volume });
				},

				'play' : (e) => {
					this.player.removeClass('leplayer--ended');
					this.player.removeClass('leplayer--paused');
					this.player.addClass('leplayer--playing');


					this.player.trigger('play');
				},

				'pause' : (e) => {
					this.player.removeClass('leplayer--playing');
					this.player.addClass('leplayer--paused');
					this.player.trigger('pause');
					//overlay.show()
				},

				'playing' : (e) => {
					this.player.removeClass('leplayer--waiting');
					this.player.trigger('playing');
				},

				'ratechange' : (e) => {
					this.player.trigger('ratechange', { rate : this.rate });
				},

				'canplay' : (e) => {
					//loader.hide();
					this.player.trigger('canplay');
				},

				'ended' : (e) => {
					this.player.addClass('leplayer--ended')
					if(this.player.options.loop) {
						this.currentTime(0);
						this.play();
					} else if (!this._video.paused) {
						this.pause();
					}
					this.player.trigger('ended');
				},
				'canplaythrough' : (e) => {
					this.player.removeClass('leplayer--waiting');
					this.player.trigger('canplaythrough');
				},

				'waiting' : (e) => {
					//loader.show();
					this.player.addClass('leplayer--waiting');
					this.player.trigger('waiting');
					this.player.one('timeupdate', () => this.player.removeClass('leplayer--waiting'));
				},

				'error' : (e) => {
					this.player.setError(new MediaError(e.target.error.code));
				}
			});
		}

	}


	/* TODO: Вынести все методы в прототип */
	this.init = function () {
		// Check if element is correctly selected.
		if (element.prop('tagName').toLowerCase() != 'video') {
			console.warn('Incorrect element selected.');
			return this;
		}

		this.initOptions();


		/** TODO: Use promise to async run this */
		this.initDom();
		this.video = new Video(this, element);
		this.initControls();
		this.initHotKeys();
		this.initSections().then((data) => {
			this.sections = data.sections;
			this.trigger('sectionsinit', data);
		});
		this.video.init().then(() => {
			const dfd = $.Deferred()
			this.trigger('inited');
			this.initPlugins();
		});


	};

	this.initControls = function () {
		//controls = new Controls(player);
		for (const name of ['common', 'fullscreen']) {
			if (!this.options.controls.hasOwnProperty(name)) return;
			const controlCollection = new ControlCollection(this, { name });
			this.controls[name] = controlCollection;
			this.element.append(controlCollection.element);
		}
		if (this.controls.common != null) {
			this.controls.common.active = true;
		}
	};

	this.initSections = function() {
		const dfd = $.Deferred();
		if (options.dataUrl == null) {
			dfd.reject(null)
		} else {
			this.getData().done(data => {
				const isSectionOutside = (sectionContainer && sectionContainer.length > 0);
				if (data.sections == null || data.sections.length == 0) {
					dfd.reject(null);
					return;
				}
				for ( let i = 0; i < data.sections.length; i++) {
					let endSection;
					if (i < (data.sections.length - 1)) {
						endSection = data.sections[i+1].begin
					} else {
						endSection = this.video.duration;
					}
					data.sections[i].end = endSection;
				}

				const sections = new Sections(this, {

					items : data.sections,
					fullscreenOnly : isSectionOutside,
				});

				this.innerElement.append(sections.element);

				if (isSectionOutside) {
					const outsideSections = new Sections(player, {
						items : data.sections,
						main : false
					});
					sectionContainer.append(outsideSections.element);
				}
				dfd.resolve({ sections, items : data.sections });
			})
		}

		return dfd.promise()
	}


	this.initDom = function () {
		const options = this.options;
		this.errorDisplay = new ErrorDisplay(this);
		[

			// Remove controls because we dont not support native controls yet
			'controls',

			// It is unnecessary attrs, this functionality solve CSS
			'height',
			'width'

		].forEach( item => {
			element.removeAttr(item);
		});

		// Set attrs from options
		[
			'poster',
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
		})


		// TODO: Вынести это в отдельнеый компонент
		this.playButton = createEl('div', {
				className : 'leplayer-play-button'
			})
			.append(new Icon(this, { iconName : 'play' }).element)
			.on({
				'click' : (e) => { element.trigger('click'); },
				'dblclick' : (e) => { element.trigger('dblclick'); }
			});

		loader = $('<div />')
			.addClass('leplayer-loader-container')
			.append(new Icon(this, {
				iconName : 'refresh',
				className : 'leplayer-icon-spin'
				}).element);

		this.videoContainer = createEl('div', {
			className : 'leplayer-video'
		})
		.append(this.playButton)
		.append(loader);

		if(options.miniplayer) {
			this.miniPlayer = new MiniPlayer(this)
		}

		this.innerElement = $('<div />')
			.addClass('leplayer__inner')
			.append(this.videoContainer)
			.append(createEl('div', {
					className : 'leplayer__info'
				})
				.append(createEl('div', {
						className : 'leplayer__title',
						text : this.options.title || ""
					}))
				.append(createEl('div', {
						className : 'leplayer__video-info',
						text : this.options.videoInfo || ""
					}))
				.append(this.miniPlayer && this.miniPlayer.element)
			)
			//.append($('leplayer__video-info')
				//.text(this.options.videoInfo || ""))

		this.element = this.element
			.addClass('leplayer')
			.append(this.innerElement)
			.append(this.errorDisplay.element)
			.attr('tabindex', 0)
			//.css('width', element.width() + 'px');
			.css('width', '100%')
			.css('max-width', (options.width || this.video.width) + 'px')


		if(options.sectionContainer) {
			sectionContainer = $(options.sectionContainer);
		}

		element.before(this.element);
		this.videoContainer.append(element);
	};

	this.initHotKeys = function () {

		const isKeyBinding = (e, binding) => {
			return ((e.which === binding.key) || (e.key === binding.key)) &&
					(!!binding.shiftKey == e.shiftKey) &&
					(!!binding.ctrlKey == e.ctrlKey)
		}

		$(this.element).bind('keydown.leplayer.hotkey', (e) => {
			const _isFocused = isFocused();
			if (_isFocused) {

				this.options.keyBinding.forEach(binding => {

					if( isKeyBinding(e, binding) ) {
						e.preventDefault();
						binding.fn(this);
						return false;
					}

				})
			}
		})
	};

	this.optionsFromElement = function() {
		// Copy video attrs to the opitons
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

		if(attrOptions.src == null && attrOptions.sources.length > 0) {
			attrOptions.src = attrOptions.sources[0]
		}


		return attrOptions;
	}



	this.initOptions = function () {
		const attrOptions = this.optionsFromElement();

		// Merge default options + video attributts + user options
		this.options = $.extend(true, defaultOptions, attrOptions, options);

		if (this.options.src == null) {
			this.setError(new MediaError('No sources found'));
		}

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
	};

	this.initPlugins = function () {
		if (this.options.plugins) {
			for (const name in this.options.plugins) {
				if(!this.options.plugins.hasOwnProperty(name)) return;
				const pluginOptions = this.options.plugins[name];
				if(this[name]) {
					this[name](pluginOptions);
				} else {
					console.error(`Plugin '${name}' doesn't exist`);
				}
			}
		}
	}

	var isFocused = () => {
		const focused = $(this.element).find(':focus');
		return (focused.length > 0) || $(this.element).is(':focus');
	}

	this.init();
	this._userActivity = false;
	this.listenUserActivity();
	this.on('inited', this.options.onPlayerInited.bind(this));
	return this;
};

/**
 * @static
 */
Player.plugin = function(name, fn) {;
	Player.prototype[name] = fn;
}


Player.prototype._view = 'common';


Player.prototype.trigger = function(eventName, ...args) {
	const event = $.Event(`leplayer_${eventName}`, { player : this })
	this.element.trigger.call(this.element, event, ...args);
	return this;
}


Player.prototype.on = function(eventName, ...args) {
	this.element.on.call(this.element, `leplayer_${eventName}`, ...args);
	return this;
}


Player.prototype.one = function(eventName, ...args) {
	this.element.one.call(this.element, `leplayer_${eventName}`, ...args);
}


Player.prototype.addClass = function(className) {
	this.element.addClass(className);
	return this;
}

Player.prototype.removeClass = function(className) {
	this.element.removeClass(className);
	return this;
}

Player.prototype.toggleClass = function(className, flag) {
	this.element.toggleClass(className, flag);
	return this;
}

Player.prototype.setView = function(view) {
	this.element
		.removeClass(`leplayer--${this._view}`)
		.addClass(`leplayer--${view}`)
	this._view = view;
}

Player.prototype.getView = function() {
	return this._view
}

Player.prototype.setError = function(value) {
	if (value === null) {
		this._error = null;
		this.removeClass('leplayer--error');
		if(this.errorDisplay) {
			this.errorDisplay.element.hide()
		}
		return;
	}
	this._error = new MediaError(value);

	this.addClass('leplayer--error');
	this.trigger('error', { error : this._error});
}

Player.prototype.listenUserActivity = function() {
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

	this.element.on('keydown', (e) => this._userActivity = true );
	this.element.on('keyup', (e) => this._userActivity = true );

	// See http://ejohn.org/blog/learning-from-twitter/
	let inactivityTimeout;
	const delay = this.options.innactivityTimeout;
	setInterval(() => {
		if (this._userActivity) {

			// Reset user activuty tracker
			this._userActivity = false;

			this.setUserActive(true);

			clearTimeout(inactivityTimeout);

			if (delay > 0) {

				inactivityTimeout = setTimeout(() => {
					if (!this._userActivity) {
						this.setUserActive(false)
					}
				}, delay);
			}
		}
	}, 250)
}

/**
 * @params {Boolean} value
 */
Player.prototype.setUserActive = function(value) {
	if(value !== this.getUserActive) {
		this._userActive = value;
		this.toggleClass('leplayer--user-active', value);
		this.trigger('useractive');
	}
}

Player.prototype.getUserActive = function() {
	return this._userActive || false;
}


// TODO: Сделать плеер классов и реализовать эти методы через get и set
Player.prototype.getError = function() {
	return this._error || null;
}


window.$.fn.lePlayer = function (options) {
	return this.each(function () {
		return new Player($(this), options);
	});
};
window.$.lePlayer = Player;
