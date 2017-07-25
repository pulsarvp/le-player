'use strict';
/**
 * @file ErrorDisplay.js
 */


import $ from 'jquery';
import Component from './Component';

/**
 * @param {Player} player Main player
 * @param {Object} [options]
 * @param {String} [options.url] path to poster image
 * @class Poster
 * @extends Component
 */
class Poster extends Component {

	constructor(player, options={}) {
		options = $.extend({}, {
			url : options.url
		}, options);

		super(player, options);

		this.url = this.options.url;
	}

	set url(value) {
		if(value == null) {
			return;
		}
		this._url = value;
		this.element.css('background-image', `url("${value}")`)
	}

	get url() {
		return this._url;
	}

	/**
	 * @override
	 */
	createElement() {
		this.element = $('<div />')
			.addClass('leplayer-poster');

		return this.element;
	}

}

Component.registerComponent('Poster', Poster);
export default Poster;
