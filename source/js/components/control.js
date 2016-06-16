'use strict';
/**
 * @file control.js
 *
 * Control
 */

import $ from 'jquery';
import Component from './component';
import Icon from './icon';

/**
 * @param {Player} player Main player
 * @class Control
 */
class Control extends Component {

	constructor(player, options) {
		super(player, options);

		this.element.on({
			'click' : this._onClick.bind(this),
			'leplayer_click' : this.onClick.bind(this)
		});

		this.options.iconName && this.icon.element.on({
			'click' : this._onIconClick.bind(this),
			'leplayer_click' : this.onIconClick.bind(this)
		});
	}

	/**
	 * @method createElement
	 */
	createElement() {
		if (this.options.iconName) {
			this.icon = new Icon(this.player, {
				iconName : this.options.iconName
			});
		}
		let attrs = {
			role : 'button',
			title : this.options.title
		}
		this.element = $('<div />')
			.addClass(this.buildCSSClass())
			.append(this.icon && this.icon.element)
			.attr(attrs);

		return this.element;
	}

	/**
	 * @method buildCSSClass
	 */
	buildCSSClass() {
		return `control ${this.options.className} ${super.buildCSSClass()}`
	}

	disable() {
		this.disabled = true;
		this.element.addClass('disabled');
	}

	_onClick (e) {
		if (this.disabled) {
			return false;
		}
		this.element.trigger('leplayer_click');
	}

	_onIconClick (e) {
		if (this.disabled) {
			return false;
		}
		this._onClick(e);
		this.icon.element.trigger('leplayer_click');
	}
	/**
	 *
	 * @method onClick On click event handler
	 * @abstact
	 */
	onClick (e) {
		e.preventDefault();
	}

	/**
	 * @method onClick On icon click event handler
	 * @abstact
	 */
	onIconClick (e) {
		e.preventDefault();
	}

}

export default Control;
