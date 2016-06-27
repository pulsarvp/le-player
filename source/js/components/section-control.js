'use strict';
/**
 * @file section-control.js
 *
 * Section control
 */

import $ from 'jquery';
import ControlCheckbox from './control-checkbox';

/**
 * @class SectionControl
 * @param {Player} player Main player
 * @param {Object} [options]
 * @param {Boolean} [options.checked=true]
 * @extends ControlCheckbox
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

	/**
	 * @override
	 */
	onClick(e) {
		super.onClick(e);
		this.player.trigger('section_toggle', { checked : this.checked });
	}
}

export default SectionControl;
