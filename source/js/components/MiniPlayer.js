'use strict';
/**
 * @file MiniPlayer.js
 */

import $ from 'jquery';
import Component from './Component';
import ControlCollection from './ControlCollection';
import { createEl } from '../utils';

// TODO: Сделать это в качестве плагина для плеера

/**
 * @class MiniPlayer
 * @param {Player} player Main player
 * @param {Object} [options]
 * @extends Control
 */
class MiniPlayer extends Component {

	constructor (player, options ) {
		// Merge options
		options = $.extend({}, {
			visible : false,
		}, player.options.miniplayer, options);

		super(player, options);

		if (options.visible) {
			this.show();
		}


		$(window).on('scroll', this.update.bind(this));
		$(window).on('resize', this.update.bind(this));
		this.player.on('fullscreenchange', this._onFullscreenChange.bind(this));
		this.player.on('inited', this._onPlayerInited.bind(this));
	}

	update() {
		const scrollTop = $(window).scrollTop();

		if(scrollTop > this.offsetShow) {
			this.show();
		} else {
			this.hide();
		}
	}

	get offsetShow() {
		if ($.isFunction(this.options.offsetShow)) {
			return this.options.offsetShow(this.player);
		}

		return this.options.offsetShow
	}

	get height() {
		return this.player.element.height();
	}

	get width() {
		return this.options.width || this.player.element.width()
	}

	/**
	 * Show mini player
	 * @param {Boolean} force
	 *
	 * @public
	 */
	show(force) {
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
	hide(force) {
		if(!force && this.player.getView() !== 'mini') {
			return;
		}
		this.player.setView('common');

		this.player.innerElement.css('max-width', '')
		this.player.innerElement.css('height', '')

		this.player.element.css('padding-top', '');
	}

	/**
	 * @override
	 */
	createElement() {
		const controls = new ControlCollection(this.player, { name : 'mini' });
		return this.element = createEl('div', {
			className : 'leplayer-miniplayer'
		}).append(controls.element)
	}



	_onFullscreenChange(e, data) {
		if (data == true) {
			this.hide();
		}
	}

	_onPlayerInited(e) {
		const scrollTop = $(window).scrollTop();

		if(scrollTop > this.offsetShow) {
			this.show(true);
		} else {
			this.hide();
		}
	}
}

export default MiniPlayer;
