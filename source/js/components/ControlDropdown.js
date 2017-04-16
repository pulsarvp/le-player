'use strict';
/**
 * @file ControlDropdown.js
 */


import $ from 'jquery';
import Control from './Control';
import Component from './Component';

/**
 * @class ControlDropdown
 * @param {Player} player Main player
 * @param {Object} [options]
 * @property {jQuery} dropdownContent Content of popup
 * @extends Control
 */
class ControlDropdown extends Control {

	constructor(player, options={}) {
		super(player, options);
		this.element.hover(
			() => !this.disable && this.dropdownContent.show(),
			() => this.dropdownContent.hide()
		);
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

	_onClick(e) {
		if($(e.target).closest(this.dropdownContent).length > 0) {
			return;
		}

		super._onClick(e);
	}

}

Component.registerComponent('ControlDropdown', ControlDropdown);
Control.registerControl('dropdown', ControlDropdown);
export default ControlDropdown;
