'use strict';
/**
 * @file Component.js
 */

import $ from 'jquery';

/**
 * Player component - Base class for all UI
 *
 * @param {Player} player Main player
 * @param {Object} [options] Options of component
 * @param {jQuery} [options.element] Элемент на котором можно иницилизовать класс.
 * @property {Object} options
 * @property {jQuery} element
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
	 */
	createElement() {
		return '';
	}

	/**
	 * @abstract
	 */
	buildCSSClass() {
		return ''
	}


}

export default Component;
