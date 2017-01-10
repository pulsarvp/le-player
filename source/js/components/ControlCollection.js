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
		this.controls = [];
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
	/**
	 * @override
	 */
	createElement() {
		const { name, controls } = this.options;

		this.element = createEl('div', {
			className: `leplayer-control-collection leplayer-control-collection--${name}`
		})

		controls.forEach( row => {
			let elemRow = createEl('div', {
				className : `leplayer-controls controls-${name}`
			})
			let hasTimeline = false;
			row.forEach(controlName => {
				if(controlName == 'timeline') {
					hasTimeline = true
				}
				const control = Control.create(this.player, controlName, {
					collection : this.options.name,
					...this._getControlOptions(name)
				});
				console.log(control);

				if(control == null) {
					return;
				}

				elemRow.append(control.element);
			});
			if (!hasTimeline) {
				elemRow.css('width', '1px');
			}
			elemRow.find('.divider + .divider').remove();
			this.element.append(elemRow);
		})
		return this.element;

	}

	set disable (value) {
		for (let i in this.items) {
			if (!this.items.hasOwnProperty(i)) continue;
			this.items[ i ].disable = value;
		}
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
