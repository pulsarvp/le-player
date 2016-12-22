'use strict';
/**
 * @file Time.js
 */
import $ from 'jquery';
import Component from '../Component';
import { secondsToTime, createEl } from '../../utils';

// TODO: Использовать этот блок в TimeControl
/**
 * @param {Player} player Main player
 * @param {Object} [options]
 * @class Time
 * @extends Control
 */
class Time extends Component {

	constructor (player, options={}) {
		options = $.extend({}, {
			fn : (player) => {
				const video = player.video;
				return secondsToTime(video.currentTime);
			}
		}, options);

		super(player, options);

		this.player.on('timeupdate', this.updateText.bind(this));
		this.player.on('inited', this.updateText.bind(this));
	}

	updateText(e, data) {
		this.element.text(this.options.fn(this.player));
	}

	createElement() {
		this.element = createEl('div', { className : 'leplayer-time' });
		return this.element;
	}

}

export default Time;
