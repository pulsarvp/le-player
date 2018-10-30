'use strict';
/**
 * @file ControlText.js
 */

import $ from 'jquery';
import Control from './Control';
import Component from './Component';

/**
 * @param {Player} player Main player
 * @class ControlText
 * @extends Control
 */
class ControlText extends Control {
	constructor (player, options={}) {
		options = $.extend({}, {
			className : ''
		}, options);
		super(player, options);
	}

	/**
	 * @override
	 */
	createElement() {
		super.createElement();
	}

	/**
	 * @override
	 */
	buildCSSClass() {
		return `control-text ${this.options.className}`;
	}


	/**
	 * Setter of text field
	 * @public
	 * @param {String} value
	 */

	set text (value) {
		this._text = value;
		this.element.html(value);
	}

	get text () {
		return this._text
	}
}

Component.registerComponent('ControlText', ControlText);
Control.registerControl('text', ControlText);
export default ControlText;
