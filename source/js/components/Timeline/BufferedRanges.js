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
		this._items = [];
		this.player.on('progress', this.update.bind(this));
	}

	/**
	 * @override
	 */
	createElement() {
		return this.element = $('<div />').addClass('leplayer-timeline-buffered');
	}


	update() {
		const buffered = this.player.video.buffered;
		const duration = this.player.video.duration;
		const items = this._items;
		const html = $('<div>');
		for(let i = 0; i < buffered.length; i++) {
			const start = buffered.start(i);
			const end = buffered.end(i);
			let item = items[i];

			if(!item) {
				item = $('<div/>').addClass('leplayer-timeline-buffered__range')
				items[i] = item;
				this.element.append(item);
			}

			item.css({
				left : percentify(start, duration) * 100 + '%',
				width : percentify(end - start, duration) * 100 + '%'
			})
		}

		console.log(items.length, buffered.length)
		for(let i = items.length; i > buffered.length; i--) {
			const item = items[i];
			console.log(item)
			item.remove();
			console.log(item);
		}
	}
}

export default BufferedRanges;
