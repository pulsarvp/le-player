'use strict';
/**
 * @file control.js
 *
 * Control
 */


import $ from 'jquery';
import Control from './control';

/**
 * @param {Player} player Main player
 * @class ControlCheckbox
 */
class ControlCheckbox extends Control {

	constructor(player, options={}) {
		super(player, options);
		this.checked = this.options.checked || false;
	}

	set checked (val) {
		val = !!val;
		this._checked = val
		this.element.toggleClass('control-checkbox--checked', val);
		this.element.trigger('leplayer_checked', { checked  : val });
	}

	get checked () {
		return this._checked;
	}

	onClick (e) {
		super.onClick(e);
		this.checked = !this.checked;
	}

	buildCSSClass() {
		return `control-checkbox ${super.buildCSSClass()}`
	}

}

export default ControlCheckbox;
