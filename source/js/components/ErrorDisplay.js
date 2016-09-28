'use strict';
/**
 * @file ErrorDisplay.js
 */


import $ from 'jquery';
import Component from './Component';

/**
 * @param {Player} player Main player
 * @param {Object} [options]
 * @class ErrorDisplay
 * @extends Component
 */
class ErrorDisplay extends Component {

	constructor(player, options={}) {
		super(player, options);
		this.player.on('error', this.onPlayerEror.bind(this));
	}

	/**
	 * @override
	 */
	createElement() {
		this.element = $('<div />')
			.addClass('leplayer-error-display')
	}

	set message(value) {
		this.element.append(value);
	}

	onPlayerEror(e, data) {
		const error = data.error;
		this.message = error.message;
		this.element.show();
	}
}

export default ErrorDisplay;
