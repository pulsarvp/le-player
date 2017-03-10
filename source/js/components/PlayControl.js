'use strict';
/**
 * @file PlayControl.js
 */

import $ from 'jquery';
import Component from './Component';
import Control from './Control';

/**
 * @class PlayControl
 * @param {Player} player Main player
 * @extends Control
 */
class PlayControl extends Control {
	constructor (player, options={}) {
		options = $.extend({}, {
			iconName : 'play',
			title : 'Воспроизвести видео',
			className : 'play',
			name : 'play'
		}, options);
		super(player, options);

		this.player.on('play', this.showPlay.bind(this))
		this.player.on('pause', this.showPause.bind(this));
		this.player.on('ended', this.showReplay.bind(this));

		this.player.on('seeking play', this.removeReplay.bind(this));
	}


	/**
	 * Pause the video
	 */
	showPause () {
		this.icon.iconName = 'play';
		this.element.attr('title', this.options.title);
	}

	/**
	 * Play the video
	 */
	showPlay () {
		this.icon.iconName = 'pause';
		this.element.attr('title', 'Поставить на паузу');
	}

	showReplay() {
		if(this.player.duration !== Infinity) {
			this._replay = true;
			this.icon.iconName = 'refresh';
			this.element.attr('title', 'Запустить заново')
		}
	}

	removeReplay() {
		if(!this._replay) {
			return;
		}

		if(this.player.paused) {
			this.showPlay();
		} else {
			this.showPause();
		}
	}

	/**
	 * @override
	 */
	onClick(e) {
		//super.onClick(e);
		this.player.video.togglePlay();
	}
}

Component.registerComponent('PlayControl', PlayControl);
Control.registerControl('play', PlayControl);
export default PlayControl;
