'use strict';
/**
 * @file control-text.js
 *
 * Control text
 */

import $ from 'jquery';
import Control from './control';

/**
 * @param {Player} player Main player
 * @class ControlText
 */
class ControlText extends Control {
	constructor (player, options={}) {
		options = $.extend({}, {
			className : ''
		}, options);
		super(player, options);
	}

	createElement() {
		super.createElement();
	}

	buildCSSClass() {
		return `control-text ${this.options.className}`;
	}

	set text (value) {
		this.element.html(value);
	}
}

export default ControlText;
