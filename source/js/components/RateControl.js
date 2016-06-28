'use strict';
/**
 * @file RateControl.js
 */

import $ from 'jquery';
import Control from './Control';
import ControlText from './ControlText';
import Cookie from '../utils/cookie';

/**
 * @class RateControl
 * @param {Player} player Main player
 * @param {Object} [options]
 * @property {Control} downControl  Down rate control
 * @property {Control} upControl  Up rate control
 * @property {ControlText} currentRate Control of cuurent rate
 * @extends Control
 */
class RateControl extends Control {
	constructor (player, options={}) {
		options = $.extend({}, {
			className : 'control-container'
		}, options);
		super(player, options);
		let video = this.player.video;
		this.downControl.element.on('click', e => {
			video.rate -= this.player.options.rate.step;
		})

		this.upControl.element.on('click', e => {
			video.rate += this.player.options.rate.step;
		});
	}

	/**
	 * @override
	 */
	createElement() {
		super.createElement();
		this.downControl = new Control(this.player, {
			className : 'rate-down',
			iconName : 'backward',
			title : 'Уменьшить скорость проигрывания'
		});
		this.upControl = new Control(this.player, {
			className : 'rate-up',
			iconName : 'forward',
			title : 'Увеличить скорость проигрывания'
		});
		this.currentRate = new ControlText({ className : 'rate-current'});

		this.element
			.append(this.downControl.element)
			.append(this.currentRate.element)
			.append(this.upControl.element);
	}

	/**
	 * @override
	 */
	buildCSSClass() {
		return this.options.className;
	}

	set value (value) {
		let video = this.player.video;
		let options = this.player.options;
		if (this.disabled) {
			return false;
		}
		this.upControl.element.removeClass('disabled');
		this.downControl.element.removeClass('disabled');
		if (video.rate <= options.rate.min)
			this.downControl.element.addClass('disabled');
		else if (video.rate >= options.rate.max)
			this.upControl.element.addClass('disabled');
		this.show();
	}

	disable() {
		this.disabled = true;
		this.downControl.disable.apply(this.down, arguments);
		this.upControl.disable.apply(this.up, arguments);
	}

	init () {
		let rate = Cookie.get('rate', this.player.options.rate.default);
		this.show(rate);
	}

	show (value) {
		let video = this.player.video;
		value = value || video.rate;
		value = parseFloat(value)
			.toFixed(2)
			.toString()
			.replace(/,/g, '.');
		this.currentRate.text = '×' + value;
	}

}

export default RateControl;
