'use strict';
/**
 * @file ControlCollection.js
 */

import $ from 'jquery';
import Component from './Component';
import Control from './Control';

import { createEl } from '../utils';


/**
 * @param {Player} player Main player
 * @param {Object} [options] Options of component
 * @param {jQuery} [options.controls] Array of rows of control's name
 * @param {Object} [options.controlOptions] Control options
 * @property {Array} Array of rows of control's name
 * @pr
 *
 */
class ControlCollection extends Component {
	constructor (player, options) {
		options = $.extend({}, {
			controls : player.options.controls[options.name] || [],
			controlOptions : {}
		}, options);
		super(player, options);

		this.active = options.active || false;
		this.name = options.name;

		this.player.controls[this.name] = this;
	}


	_getControlOptions(name) {
		const { controlOptions } = this.options;
		let result = controlOptions.control || {};

		if(controlOptions[name]) {
			result = $.extend(true, {}, result, controlOptions[name]);
		}

		return result;
	}

	addControl(indexRow, name, options) {
		const control = Control.create(this.player, name, {
			collection : this.options.name,
			...options
		});

		if(control == null) {
			return;
		}

		while(indexRow > this._rows.length) {
			this.addRow();
		}

		const elemRow = this._rows[indexRow];
		elemRow.append(control.element);

		if (this.controls == null) {
			this.controls = [];
		}
		if (this.controls[indexRow] == null) {
			this.controls[indexRow] = {};
		}

		this.controls[indexRow][name] = control;
	}

	getControl(first, second) {
		if(second == null) {
			const name = first;
			for(let i = 0; i < this.controls.length; i++) {
				if(this.controls[i][name] != null) {
					return this.controls[i][name];
				}
			}
		} else {
			const name = first;
			const indexRow = second;
			return this.controls[indexRow][name];
		}

		return null;
	}

	addRow() {
		const elemRow = createEl('div', {
			className : `leplayer-controls controls-${this.options.name}`
		});

		if (this._rows == null) {
			this._rows = []
		}
		this._rows.push(elemRow);
		this.element.append(elemRow);

		return elemRow;
	}

	getRow(indexRow) {
		return this._rows[indexRow || 0];
	}

	/**
	 * @override
	 */
	createElement() {
		const { name, controls } = this.options;

		this.element = createEl('div', {
			className : `leplayer-control-collection leplayer-control-collection--${name}`
		})

		controls.forEach((row, indexRow) => {
			const elemRow = this.addRow();
			let hasTimeline = false;
			row.forEach(controlName => {
				if(controlName === 'timeline') {
					hasTimeline = true
				}

				this.addControl(indexRow, controlName, this._getControlOptions(name));
			});

			if (!hasTimeline) {
				elemRow.css('width', '1px');
			}
			elemRow.find('.divider + .divider').remove();
		})
		return this.element;
	}

	hide () {
		this.element.hide();
		this.element.find('.leplayer-controls').hide()
	}

	show () {
		this.element.show()
		this.element.find('.leplayer-controls').show()
	}
}

Component.registerComponent('ControlCollection', ControlCollection);
export default ControlCollection;
