'use strict';
/**
 * @file control-container.js
 *
 * Control container
 */

import $ from 'jquery';
import ControlDropdown from './control-dropdown';

/**
 * @param {Player} player Main player
 * @class ControlContainer
 */
class ControlContainer extends ControlDropdown {

	constructor(player, options) {
		super(player, options);
		this._active = null;
		this.list = [];
	}

	getByIndex(index) {
		return this.list[index];
	}

	setActiveByIndex(index) {
		if (this.active) {
			this.active.removeClass('control-container__item--active');
		}
		this._active = this.list[index].addClass('control-container__item--active');
		return this._active;
	}


	get active () {
		if (this._active && this._active.length > 0 ) {
			return this._active;
		}
		this.list.forEach(item => {
			if (item.hasClass('control-container__item--active')) {
				this._active = item;
			}
		})
		return this._active;
	}

	set active (element) {
		if (this.active) {
			this.active.removeClass('control-container__item--active');
		}
		if (element) {
			$(element).addClass('control-container__item--active');
		}
		this._active = element;
		return this._active
	}


	addItem (content, data) {
		let item = $('<div />')
			.addClass('control-container__item')
			.data(data)
			.on('click', this.onItemClick.bind(this))
			.append(content);
		this.list.push(item);

		this.dropdownContent.append(item);

		return item;
	}

	onItemClick (e) {
		//console.log(e.currentTarget, e.target)
		console.log(this.active);
		this.active = e.currentTarget;
	}

	buildCSSClass() {
		return `${super.buildCSSClass()} control-container`
	}
}

export default ControlContainer;
