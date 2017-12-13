'use strict';
/**
 * @file RateControl.js
 */

import $ from 'jquery';
import Component from './Component';
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
			className : 'control-container',
			tag : 'div'
		}, options);
		super(player, options);

		this.player.on('ratechange', () => {
			this.update();
		});
	}

	/**
	 * @override
	 */
	createElement() {
		super.createElement();
		const video = this.player.video;

		this.downControl = new Control(this.player, {
			className : 'rate-down',
			name : 'rate-down',
			iconName : 'backward',
			collection : this.options.collection,
			title : 'Уменьшить скорость проигрывания',
			onClick : function(e) {
				video.decreaseRate();
			}
		});

		this.upControl = new Control(this.player, {
			className : 'rate-up',
			name : 'rate-up',
			iconName : 'forward',
			collection : this.options.collection,
			title : 'Увеличить скорость проигрывания',
			onClick : function(e) {
				video.increaseRate();
			}
		});

		this.currentRate = new ControlText(this.player, {
			className : 'rate-current',
			onClick : function(e) {
				video.rate = this.player.options.rate.default
			}
		});

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

	/**
	 * @override
	 */
	onPlayerInited() {
		this.update();
	}

	/**
	 *
	 */
	onClick(e) {
		e.preventDefault()
	}

	update(value) {
		const video = this.player.video;

		value = value || video.rate;
		value = parseFloat(value)
			.toFixed(2)
			.toString()
			.replace(/,/g, '.');
		this.currentRate.text = '×' + value;

		if(this.disable) return;

		if(video.rate <= video.rateMin) {
			this.downControl.disable = true;
		} else {
			this.downControl.disable = false;
		}

		if(video.rate >= video.rateMax) {
			this.upControl.disable = true;
		} else {
			this.upControl.disable = false;
		}
	}

	set disable(value) {
		this._disable = value;
		this.downControl.disable = value;
		this.upControl.disable = value;
	}

	init () {
		let rate = Cookie.get('rate', this.player.options.rate.default);
		this.show(rate);
	}

}

Component.registerComponent('RateControl', RateControl);
Control.registerControl('rate', RateControl);
export default RateControl;
