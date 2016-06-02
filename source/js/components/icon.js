'use strict';
/**
 * @file icon.js
 *
 * Icon
 */

import $ from 'jquery';
import Component from './component';

/**
 * @param {Player} player Main player
 * @class Icon
 */
class Icon extends Component {

	constructor (player, options={}) {
		options = $.extend({}, {
			className : '',
			title : '',
			iconName : ''
		}, options)
		super(player, options);

	}

	createElement() {
		this._useTag = document.createElementNS('http://www.w3.org/2000/svg', 'use');
		this._svgTag = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

		this.iconName = this._iconName = this.options.iconName;
		this._svgTag.appendChild(this._useTag);
		this.element = $('<div />')
			.addClass(this.buildCSSClass())
			.attr('title', this.options.title)
			.append($(this._svgTag));
		return this.element;
	}

	buildCSSClass() {
		return `${super.buildCSSClass()} leplayer-icon ${this.options.className}`
	}

	set iconName(iconName) {
		let attrNS = ['http://www.w3.org/1999/xlink', 'href']
		this._useTag.removeAttributeNS(...attrNS, `${this.player.options.svgPath}#leplayer-icon-${this.iconName}`)
		this._useTag.setAttributeNS(...attrNS, `${this.player.options.svgPath}#leplayer-icon-${iconName}`)
		this._iconName = iconName;
	}

	get iconName () {
		return this._iconName;
	}

}

export default Icon;
