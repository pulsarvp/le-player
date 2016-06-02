'use strict';
/**
 * @file component.js
 *
 * Player component - Base class for all UI
 */

import $ from 'jquery';

/**
 * @param {Player} player Main player
 * @class Component
 */
class Component {

	constructor(player, options) {
		options = this.options = $.extend({}, this.options, options);
		this.player = player;

		if (options.element) {
			this.element = options.element;
		} else {
			this.createElement();
		}
	}

	/**
	 * @abstract
	 * @method createElement
	 */
	createElement() {
		return '';
	}

	/**
	 *
	 */
	buildCSSClass() {
		return ''
	}


}

export default Component;
