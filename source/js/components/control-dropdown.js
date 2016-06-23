'use strict';
/**
 * @file control-dropdown.js
 *
 * Control
 */


import $ from 'jquery';
import Control from './control';

/**
 * @param {Player} player Main player
 * @class ControlDropdown
 */
class ControlDropdown extends Control {

	constructor(player, options={}) {
		super(player, options);
	}


	createElement() {
		super.createElement();
		this.dropdownContent = $('<div />').addClass('control-dropdown__content');
		this.element.append(this.dropdownContent);
	}


	buildCSSClass() {
		return `control-dropdown ${super.buildCSSClass()}`
	}

}

export default ControlDropdown;
