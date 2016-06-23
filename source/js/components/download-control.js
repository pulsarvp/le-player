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
 * @class DownloadControl
 */
class DownloadControl extends Control {
	constructor (player, options={}) {
		options = $.extend({
			title : 'Скачать видео',
			className : 'download',
		}, options);
		super(player, options);
	}

	createElement() {
		/** TODO: Доопределить этот метод, а не переопредлеить */
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

	buildCSSClass() {
		return `${super.buildCSSClass()}`;
	}

	set link (value) {
		this.element.attr('href', value);
	}

}

export default DownloadControl;
