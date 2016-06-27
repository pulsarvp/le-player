'use strict';
/**
 * @file download-control.js
 *
 * Download control
 */

import $ from 'jquery';
import Control from './control';
import Icon from './icon';

/**
 * @param {Player} player Main player
 * @param {Object} [options]
 * @class DownloadControl
 * @exnteds Control
 */
class DownloadControl extends Control {
	constructor (player, options={}) {
		options = $.extend({
			title : 'Скачать видео',
			className : 'download',
		}, options);
		super(player, options);
	}


	/**
	 * @override
	 */
	createElement() {
		// TODO: Доопределить этот метод, а не переопредлеить
		this.element = $('<a />')
			.attr({
				href : '',
				target : '_blank',
				download : true,
				title : this.options.title,
			})
			.addClass(this.buildCSSClass())
			.append(new Icon(this.player, { iconName : 'download' } ).element);
	}

	/**
	 * @override
	 */
	buildCSSClass() {
		return `${super.buildCSSClass()}`;
	}


	/**
	 * Setter of link field
	 * @public
	 * @param {String} value Path for video
	 */
	set link (value) {
		this.element.attr('href', value);
	}

}

export default DownloadControl;
