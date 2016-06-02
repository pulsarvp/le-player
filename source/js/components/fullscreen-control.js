'use strict';
/**
 * @file fullscreen-control.js
 *
 * Play control
 */

import $ from 'jquery';
import Control from './control';

/**
 * @param {Player} player Main player
 * @class FullscreenControl
 */
class FullscreenControl extends Control {
	constructor (player, options={}) {
		options = $.extend({}, {
			iconName : 'arrows-alt',
			className : 'fullscreen',
			title : 'Развернуть/свернуть на полный экран'
		}, options);
		super(player, options);
	}

	onClick(e) {
		super.onClick(e)
		this.player.video.fullscreen.toggle();
	}
}

export default FullscreenControl;
