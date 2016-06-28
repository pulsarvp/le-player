
'use strict';
/**
 * @file control-checked.js
 *
 * Control
 */

import $ from 'jquery';
import Control from './control';

/**
 * @param {Player} player Main player
 * @class ControlCheked
 */

class ControlChecked extends Control {

	constructor(player, options) {
		super(player, options);
		this._active = false;
	}

	set active (val) {
		this._active = val;
		this.element.toggleClass('control--active', val);
		this.element.trigger('leplayer_set_active', { active : val })
	}

	get active () {
		return this._active;
	}

	onClick(e) {
		super.onClick(e);
		this.active = !this.active;
	}
}

export default ControlChecked;
