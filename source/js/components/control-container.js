'use strict';
/**
 * @file control-container.js
 *
 * Control container
 */

import $ from 'jquery';
import Control from './control';

/**
 * @param {Player} player Main player
 * @class ControlContainer
 */
class ControlContainer extends Control {

	constructor(player, options) {
		super(player, options);
		this._index = 0;
		this.list = [];
	}

	createElement() {
		super.createElement();
		this.listElement = $('<div />').addClass('control-inner');
		this.element.append(this.listElement);
	}


	get active () {
		for (let i in this.list)
			if (this.list[ i ].hasClass('active'))
				return this.list[ i ];
		return null;
	}

	set active (index) {
		let hasActive = false;
		for (let i in this.list) {
			if (this.list[ i ].data('index') == index) {
				this.list[ i ].addClass('active');
				this.icon.element.html(this.list[ i ].html());
				hasActive = true;
			}
			else
				this.list[ i ].removeClass('active');
		}
		if (!hasActive)
			this.icon.iconName = this.iconClass
	}

	addItem (text, data) {
		let _self = this;
		var item = $('<div />')
			.addClass('inner-item')
			.data('index', this._index)
			.html(text)
			/** TODO: Refactor this callback and event */
			.on('click', () => {
				this.onItemClick(item.data('index'));
			});
		if (typeof data == 'object') {
			for (let k in data)
				item.data(k, data[ k ]);
		}
		this._index++;
		this.list.push(item);
		this.listElement.append(item);

		return item;
	}

	getByIndex (index) {
		for (let i in this.list)
			if (this.list[ i ].data('index') == index)
				return this.list[ i ];
		return null;
	}

	onItemClick (index) {
		this.active = index;
	}

	buildCSSClass() {
		return `${super.buildCSSClass()} control-container`
	}
}

export default ControlContainer;
