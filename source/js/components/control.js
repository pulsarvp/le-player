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
 * @class Control
 * @param {Player} player Main player
 * @param {Object} [options] Control's options
 * @param {String} [options.iconName] Name of control's icon. If empty, control will not have a icon
 * @param {String} [options.className]
 * @param {String} [options.title] Contorl's tooltip, title attr
 * @property {Icon} icon Icon in control, if it is exist
 * @extends Component
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
	 * @override
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
	 * @override
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
		event.stopPropagation();
		event.preventDefault();
		if (this.disabled) {
			return false;
		}
		this.icon.element.trigger('leplayer_click');
	}
	/**
	 *
	 * On click event handler
	 * @abstact
	 */
	onClick (e) {
		e.preventDefault();
	}

	/**
	 * On icon click event handler
	 * @abstact
	 */
	onIconClick (e) {
		e.preventDefault();
	}

}

export default Control;
