'use strict';
/**
 * @file play-control.js
 *
 * Play control
 */

import $ from 'jquery';
import Control from './control';

/**
 * @param {Player} player Main player
 * @class PlayControl
 */
class PlayControl extends Control {
	constructor (player, options={}) {
		options = $.extend({}, {
			iconName : 'play',
			title : 'Воспроизвести видео',
			className : 'play'
		}, options);
		super(player, options);
	}

	pause () {
		this.icon.iconName = 'play';
		this.element.attr('title', this.options.title);
	}

	play () {
		this.icon.iconName = 'pause';
		this.element.attr('title', 'Поставить на паузу');
	}

	onClick(e) {
		//super.onClick(e);
		this.player.video.togglePlay();
	}
}

export default PlayControl;
