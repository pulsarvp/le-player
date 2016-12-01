'use strict';
/**
 * @file control-checkbox.js
 */


import $ from 'jquery';
import ControlText from './ControlText';
import { createEl, secondsToTime } from '../utils';

/**
 * @param {Player} player Main player
 * @param {Object} [options]
 * @param {function} [options.countTime]
 * @class ShowTimeControl
 */
class ShowTimeControl extends ControlText {

	constructor(player, options={}) {
		super(player, options);
		this.player.on('timeupdate', this._onTimeUpdate.bind(this));
	}

	_onTimeUpdate(e, data) {
		const currentTime = data.currentTime;
		this.text = secondsToTime(this.getTime(currentTime));
	}

	getTime(time) {
		if (typeof this.options.getTime === 'function') {
			return this.options.getTime(this.player)
		}
		return time;
	}

	/**
	 * @override
	 */
	buildCSSClass() {
		return `leplayer-show-time ${super.buildCSSClass()}`
	}

}

export default ShowTimeControl;
