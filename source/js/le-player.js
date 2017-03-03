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

				player.splashIcon.show(player._calcVolumeIcon(player.video.volume));

			}
		},

		{
			key : 40,
			info : ['↓'],
			description : 'Уменьшить громкость',
			fn : (player) => {
				player.video.volume -= player.options.volume.step;

				player.splashIcon.show(player._calcVolumeIcon(player.video.volume));
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
let Player = function (element, options) {

	if (element.prop('tagName').toLowerCase() !== 'video') {
		console.warn('Incorrect element selected.');
		return this;
	}

	const player = this;
	const fsApi = FullscreenApi;

	this._element = element;

	// key -> contol collection name, valuy -> ControlCollection
	this.controls = {};

	// Entity component
	this.video = null;

	/**
	 * DOM container to hold video and all other stuff.
	 * @type object
	 */

	this.element = createEl('div');

	this.innerElement = createEl('div');




	this.initControls = function () {
		//controls = new Controls(player);
		for (const name of ['common', 'fullscreen']) {
			if (!this.options.controls.hasOwnProperty(name)) return;
			const controlCollection = new ControlCollection(this, { name });
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
	this.initSections = function() {
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
					const outsideSections = new Sections(player, {
						items : sections,
					});
					this.sectionsContainer.append(outsideSections.element);
				}
				dfd.resolve({ sectionsComponent, items : sections });
			})
		}

		return dfd.promise()
	}



	this.initHotKeys = function () {
		$(this.element).off('keydown.leplayer.hotkey');

		const isKeyBinding = (e, binding) => {
			return ((e.which === binding.key) || (e.key === binding.key)) &&
					(!!binding.shiftKey === e.shiftKey) &&
					(!!binding.ctrlKey === e.ctrlKey)
		}

		$(this.element).bind('keydown.leplayer.hotkey', (e) => {
			const _isFocused = isFocused();
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
	};

	/**
	 * Get options from video's attribute ( height, width, poster, preload etc...)
	 * Get source video from src attr or <source> element with data attr 'data-quality'
	 * Also get sources for different quality from <source> element with data attr 'data-quality'
	 *
	 * @access public
	 * @returns {Object} options
	 */
	this.optionsFromElement = function() {
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
	 * Merge defaultOptions with attrOptions and user's options;
	 *
	 * And complement two objects: controls and excludeControls
	 *
	 * @access private
	 */
	this.initOptions = function () {
		const attrOptions = this.optionsFromElement();
		let presetOptions = {};

		if (options.preset && Player.getPreset(options.preset)) {
			presetOptions = Player.getPreset(options.preset).options;
		}


		// Merge default options + preset options + video attributts+ user options
		this.options = $.extend(true, {}, defaultOptions, presetOptions, attrOptions, options);

		if(this.options.sources && !Array.isArray(this.options.sources)) {
			this.options.sources = [this.options.sources]
		}

		if(this.options.src == null && this.options.sources.length > 0) {
			this.options.src = this.options.sources[0]
		}

		if (this.options.src == null) {
			this.setError(new MediaError('No sources found'));
		}

		// Merge correctly controls, without deep merge
		this.options.controls = $.extend({}, defaultOptions.controls, presetOptions.controls, options.controls);

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

		if (options.preset && Player.getPreset(options.preset)) {
			Player.getPreset(options.preset).initOptions();
		}
	};

	var isFocused = () => {
		const focused = $(this.element).find(':focus');
		return (focused.length > 0) || $(this.element).is(':focus');
	}

	// Check if element is correctly selected.

	this.initOptions();

	/** TODO: Use promise to async run this */
	this.createElement();

	// Create video link
	this.video = new Html5(this, { element });

	// Create controls
	// TODO: move this action to the createElement
	this.initControls();

	// Listen hotkeys
	this.initHotKeys();

	this.initSections().then((data) => {
		this.sections = data.sectionsComponent;
		this.trigger('sectionsinit', data);
	});

	this.video.init().then(() => {
		this.trigger('inited');
		this._initPlugins();
	});

	this._listenUserActivity();

	const mediaElement = this.video.element;

	mediaElement.one({
		play : (e) => {
			this.trigger('firstplay');
			this.removeClass('leplayer--virgin');
		}
	});

	mediaElement.on({

		loadstart : (e) => {
			this.removeClass('leplayer--ended');

			this.setError(null);
			this.trigger('loadstart');
		},

		durationchange : (e) => {
			this.trigger('durationchange');
		},

		timeupdate : (e) => {
			if (this.video.currentTime > 0) {
				this.removeClass('leplayer--virgin');
			}

			this.trigger('timeupdate', { time : this.video.currentTime, duration : this.video.duration });

		},

		seeking : (e) => {
			this._startWaiting();
			this.trigger('seeking');

		},

		seeked : (e) => {
			this._stopWayting();
			this.trigger('seeked');
		},

		progress : () => {
			this.trigger('progress');
		},

		dblclick : () => {
			this.trigger('dblclick');
		},

		click : () => {
			this.trigger('click')
		},

		volumechange : (e) => {
			this.trigger('volumechange', { volume : this.video.volume });
		},

		play : (e) => {
			this.removeClass('leplayer--ended');
			this.removeClass('leplayer--paused');
			this.addClass('leplayer--playing');

			this.trigger('play');
		},

		pause : (e) => {
			this.removeClass('leplayer--playing');
			this.addClass('leplayer--paused');
			this.trigger('pause');
			//overlay.show()
		},

		playing : (e) => {
			this._stopWayting();
			this.trigger('playing');
		},

		ratechange : (e) => {
			this.trigger('ratechange', { rate : this.video.rate });
		},

		canplay : (e) => {
			//loader.hide();
			this.trigger('canplay');
		},

		ended : (e) => {
			this.addClass('leplayer--ended')

			if(this.options.loop) {
				this.currentTime(0);
				this.video.play();
			} else if (!this.video.paused) {
				this.video.pause();
			}

			this.trigger('ended');
		},

		canplaythrough : (e) => {
			this._stopWayting();
			this.trigger('canplaythrough');
		},

		waiting : (e) => {
			this._startWaiting()

			this.one('timeupdate', () => this._stopWayting());

			this.trigger('waiting');
		},

		error : (e) => {
			this.setError(new MediaError(e.target.error.code));
		}
	});

	this.on('fullscreenchange', this._onFullscreenChange.bind(this));
	this.on('click', this._onClick.bind(this));
	this.on('dblclick', this._onDbclick.bind(this));
	this.on('inited', this._onInited.bind(this));
	this.on('play', this._onPlay.bind(this));
	this.on('pause', this._onPause.bind(this));

	$(document).on(fsApi.fullscreenchange, this._onEntityFullscrenChange.bind(this));

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
Player.plugin = function(name, fn) {
	Player.prototype[name] = fn;
}

/**
 * Get by name registered component
 *
 * @access public
 * @static
 * @param {String} name
 * @returns {Component}
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


/**
 * Remove unnecessary attributes, and set some attrs from options (loop, poster etc...). Create main DOM objects
 *
 * @access private
 */
Player.prototype.createElement = function() {

	const options = this.options;
	const element = this._element;

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
	})

	this.element = this.element
		.addClass('leplayer')
		.attr('tabindex', 0)
		.css('width', '100%')
		.css('max-width', (options.width || this.video.width) + 'px')

	this.errorDisplay = new ErrorDisplay(this);

	this.playButton = new PlayButton(this);

	// TODO: Вынести это в отдельнеый компонент
	this.loader = $('<div />')
		.addClass('leplayer-loader-container')
		.append(new Icon(this, {
			iconName : 'refresh',
			className : 'leplayer-loader-container__icon'
		}).element);


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


	//if(options.miniplayer) {
		//this.miniPlayer = new MiniPlayer(this)
	//}


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
};


/**
 * @access private
 *
 * Function, than init all plugins from player options.
 * If plugin doesn't exist throw an error
 * @returns {Player} this
 *
 */
Player.prototype._initPlugins = function() {
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
Player.prototype._view = 'common';

/**
 * Emit a player event (the name of event would be a leplayer_smth)
 *
 * @access public
 * @param {String} eventName
 * @param {Arguments} ...args jQuery.fn.on other arguments
 * @returns {Player} this
 */
Player.prototype.trigger = function(eventName, ...args) {
	const event = $.Event(`leplayer_${eventName}`, { player : this })
	this.element.trigger.call(this.element, event, ...args);
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
Player.prototype.on = function(eventName, ...args) {
	this.element.on.call(this.element, `leplayer_${eventName}`, ...args);
	return this;
}


Player.prototype.one = function(eventName, ...args) {
	this.element.one.call(this.element, `leplayer_${eventName}`, ...args);
}


/**
 * Add the CSS class for general leplayer DOM element
 *
 * @access public
 * @param {String} className Name of class (not a selector, it's mean, that string sould be without point at the start)
 * @returns {Player} this
 */
Player.prototype.addClass = function(className) {
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
Player.prototype.removeClass = function(className) {
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
Player.prototype.toggleClass = function(className, flag) {
	this.element.toggleClass(className, flag);
	return this;
}

Player.prototype.hasClass = function(className) {
	return this.element.hasClass(className);
}

/**
 * Set player view
 *
 * @access public
 * @param {String} view Can be 'common', 'fullscreen', 'mini'
 * @returns {Player} this
 */
Player.prototype.setView = function(view) {
	this.element
		.removeClass(`leplayer--${this._view}`)
		.addClass(`leplayer--${view}`)

	this.trigger(`delview.${this._view}`);
	this.trigger(`setview.${view}`);

	this._view = view;

	return this;
}

/**
 * On set view callback
 *
 * @access public
 * @param {String} view View name
 * @returns {Player} this
 */
Player.prototype.onSetView = function(view, ...args) {
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
Player.prototype.onDelView = function(view, ...args) {
	this.on(`delview.${view}`, ...args);

	return this;
}
/**
 * Return the view of player
 *
 * @access public
 * @returns {String}
 */
Player.prototype.getView = function() {
	return this._view;
}

/**
 * Show player error if param value not null. Also trigger player event 'error'
 *
 * @param {String|MediaError} value
 * @returns {Player} this
 */
Player.prototype.setError = function(value) {
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
	this.trigger('error', { error : this._error});

	return this;
}

/**
 * @access public
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

Player.prototype.play = function() {
	return this.video.play();
}

Player.prototype.pause = function() {
	return this.video.pause();
}

Player.prototype.togglePlay = function() {
	return this.video.togglePlay();
}


// TODO: Сделать плеер классов и реализовать эти методы через get и set
Player.prototype.getError = function() {
	return this._error || null;
}

/**
 * Get some data for player
 *
 * @access public
 * @returns {jQuery.promise} Promise
 */
Player.prototype.getData = function() {
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

Player.prototype.getSectionData = function() {
	return this.getData()
		.then(data => {
			return data.sections
		})
}

Player.prototype.requestFullscreen = function() {
	const fsApi = FullscreenApi;

	if(fsApi.requestFullscreen) {
		// Call HTML5 Video api requestFullscreen
		this.element[0][fsApi.requestFullscreen]();

		this.trigger('fullscreenchange', true);
	} else if (this.video.supportsFullScreen()) {
		this.video.enterFullscreen();
	}
}

Player.prototype.exitFullscreen = function() {
	const fsApi = FullscreenApi;

	if(fsApi.exitFullscreen) {
		document[fsApi.exitFullscreen]();
	} else if (this.video.supportsFullScreen()) {
		this.video.exitFullscreen();
	}

	this.trigger('fullscreenchange', false);

}

Player.prototype.toggleFullscreen = function() {
	if(this.getView() === 'fullscreen') {
		this.exitFullscreen()
	} else {
		this.requestFullscreen()
	}
}

/**
 * Get ControlCollection of Player by name (e.x 'common', 'fullscreen')
 *
 * @access public
 * @param {String} name Name of ControlCollection
 * @returns {ControlCollection}
 */
Player.prototype.getControls = function(name) {
	return this.controls[name];
}

/**
 * Return the height of player. If you want get height only of video element, use this.video.height or whatever
 *
 * @access public
 * @returns {Number} Height in px
 */
Player.prototype.getHeight = function() {
	return this.element.height()
}

/**
 * Return the width of player.
 *
 * @access public
 * @returns {Number} Width in px
 */
Player.prototype.getWidth = function() {
	return this.element.width()
}

Player.prototype.completeSections = function(sections) {
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


Player.prototype._userActivity = false;

/**
 * @access private
 */
Player.prototype._listenUserActivity = function() {
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

Player.prototype._waitingTimeouts = [];

/**
 * Stop showing spinner and clear delay of showing spinner
 *
 * @access private
 */
Player.prototype._stopWayting = function() {
	this._waitingTimeouts.forEach(item => clearTimeout(item));
	this._waitingTimeouts = [];
	this.removeClass('leplayer--waiting');
}

/**
 * Show spinner with delay in 300ms
 *
 * @access private
 */
Player.prototype._startWaiting = function() {
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
Player.prototype._onInited = function(e) {
	this.addClass('leplayer--inited');

	this.options.onPlayerInited.call(this, e);
}

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
Player.prototype._onClick = function(e) {
	clearTimeout(this._dblclickTimeout);
	this._dblclickTimeout = setTimeout(() => {
		this.video.element.focus()
		this.togglePlay();
	}, 300);
};

/**
 * On dblclick on the video player event handler
 *
 * @access private
 * @param {PlayerEvent} e
 */
Player.prototype._onDbclick = function(e) {
	clearTimeout(this._dblclickTimeout);
	this.toggleFullscreen();
}

/**
 * On fullscreen change player event handler
 *
 * @access public
 * @param {PlayerEvent} e
 */
Player.prototype._onFullscreenChange = function(e, isFs) {
	if(isFs) {
		this.setView('fullscreen');
	} else {
		this.setView('common');
	}
}


/**
 * On play event handler
 *
 * @access private
 * @param {PlayerEvent} e
 */
Player.prototype._onPlay = function() {
	this.splashIcon.show('play');
}

/**
 * On pause player event handler
 * Show pause icon in the center of video
 *
 * @access private
 */
Player.prototype._onPause = function() {
	this.splashIcon.show('pause');
}

Player.prototype._onEntityFullscrenChange = function() {
	const fsApi = FullscreenApi;
	const isFs = !!document[fsApi.fullscreenElement];
	this.trigger('fullscreenchange', isFs);
}

/**
 * Return a name of icon. If less then 0.1 return volume-off,
 * if less then 0.5 return volume down, else return volume-up
 *
 * @access private
 * @param {Number} value Volume value
 * @returns {String} Icon name
 */
Player.prototype._calcVolumeIcon = function(value) {
	const volume = value || this.video.volume;

	if (volume < this.options.volume.mutelimit) {
		return 'volume-off';
	} else if (value < 0.5) {
		return 'volume-down';
	} else {
		return 'volume-up';
	}
}

window.$.fn.lePlayer = function (options) {
	return this.each(function () {
		return new Player($(this), options);
	});
};

window.$.lePlayer = Player;

window.lePlayer = Player;


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

	/**
	 * Show mini player
	 * @param {Boolean} force
	 *
	 * @public
	 */
	this.showMiniPlayer = (force) => {
		if (!force && this.getView() === 'mini') {
			return;
		}

		// Added empty space
		this.element.css('padding-top', this.videoContainer.height());

		this.setView('mini');
	}

	/**
	 * Hide mini player
	 * @param {Boolean} force
	 *
	 * @public
	 */
	this.hideMiniPlayer = (force) => {
		if(!force && this.getView() !== 'mini') {
			return;
		}
		this.setView('common');
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
