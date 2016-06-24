'use strict';
/**
 * @file control-dropdown.js
 *
 * ControlDropdown
 */


import $ from 'jquery';
import Control from './control';

/**
 * @param {Player} player Main player
 * @param {Object} [options]
 * @class ControlDropdown
 * @extends Control
 */
class ControlDropdown extends Control {

	constructor(player, options={}) {
		super(player, options);
	}


	/**
	 * @override
	 */
	createElement() {
		super.createElement();
		this.dropdownContent = $('<div />').addClass('control-dropdown__content');
		this.element.append(this.dropdownContent);
	}

	/**
	 * @override
	 */
	buildCSSClass() {
		return `control-dropdown ${super.buildCSSClass()}`
	}

}

export default ControlDropdown;
