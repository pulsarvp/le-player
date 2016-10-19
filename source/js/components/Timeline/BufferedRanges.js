'use strict';
/**
 * @file BufferedRanges.js
 */

import $ from 'jquery';
import { percentify } from '../../utils';
import Component from '../Component';

/**
 * @param {Player} player Main player
 * @class BufferedRanges
 * @extends Control
 */

class BufferedRanges extends Component {

	constructor(player, options) {
		super(player, options);
		this.player.on('progress', this.update.bind(this));
	}

	/**
	 * @override
	 */
	createElement() {
		return this.element = $('<div />').addClass('leplayer-timeline-buffered');
	}


	update() {
		const percentify = (time, end) => {
			// or zero beacase NaN
			const percent = (time / end) || 0;

			//return percent >=
		}
	}
}

export default BufferedRanges;
