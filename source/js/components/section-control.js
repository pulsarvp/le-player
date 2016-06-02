'use strict';
/**
 * @file section-control.js
 *
 * Section control
 */

import $ from 'jquery';
import Control from './control';

/**
 * @param {Player} player Main player
 * @class SectionControl
 */
class SectionControl extends Control {
	constructor (player, options={}) {
		options = $.extend({}, {
			iconName : 'list-ul',
			title : 'Показать/скрыть секции'
		}, options);
		super(player, options);
	}

	onClick(e) {
		super.onClick(e);
		this.player.trigger('section_toggle');
	}
}

export default SectionControl;
