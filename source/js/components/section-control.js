'use strict';
/**
 * @file section-control.js
 *
 * Section control
 */

import $ from 'jquery';
import ControlCheckbox from './control-checkbox';

/**
 * @param {Player} player Main player
 * @class SectionControl
 */
class SectionControl extends ControlCheckbox {
	constructor (player, options={}) {
		options = $.extend({}, {
			iconName : 'list-ul',
			className : 'control--type_section',
			title : 'Показать/скрыть секции',
			checked : true
		}, options);
		super(player, options);
	}

	onClick(e) {
		super.onClick(e);
		this.player.trigger('section_toggle', { checked : this.checked });
	}
}

export default SectionControl;
