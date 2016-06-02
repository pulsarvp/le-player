'use strict';
/**
 * @file volume-control.js
 *
 * Volume Control
 */

import $ from 'jquery';
import Control from './control';
import Icon from './icon';
import Cookie from '../utils/cookie';

/**
 * @param {Player} player Main player
 * @class Control
 */
class VolumeControl extends Control {

	constructor (player, options={}) {
		options = $.extend({}, {
			iconName : 'volume-down',
			className : 'volume-control'
		}, options);
		console.log('volume', player)
		super(player, options);
	}

	createElement() {
		super.createElement();
		this.marker = $('<div/>').addClass('volume-marker');

		this.active = $('<div/>').addClass('volume-active');

		this.line = $('<div/>')
			.addClass('volume-line')
			.append(this.active)
			.append(this.marker)
			.on('click', (e) => {
				if (drag) return;
				let p = this.getPosition(e.pageY);
				if (p >= 0 && p <= 1) {
					this.player.video.volume = 1 - p;
				}
			});

		this.element.addClass('control-container')
			.append($('<div />')
				.addClass('control-inner volume-slider')
				.append(this.line));

		this.icon.element.attr('title', 'Отключить звук');

		let drag = false;
		this.marker.on('mousedown', (e) => {
			if (e.which != 1) return;
			drag = true;
		});

		$(document).on({
			'mousemove' : (e) => {
				if (!drag) return;
				let p = this.getPosition(e.pageY);
				if (p >= 0 && p <= 1) {
					this.player.video.volume = 1 - p
				}
			},

			'mouseup' : (e) => {
				drag = false;
			}
		});
	}


	set value (value) {
		if (value < options.volume.mutelimit) {
			this.icon.iconName = 'volume-off';
		} else if (value < 0.5) {
			this.icon.iconName = 'volume-down';
		} else {
			this.icon.iconName = 'volume-up';
		}

		let p = Math.round(value * 100).toString() + '%';
		this.active.css('height', p);
		this.marker.css('bottom', p);
	}

	toggleMuted () {
		if (this.player.video.muted == true) {
			this.value = Cookie.get('volume', options.volume.default);
		} else {
			this.value = 0;
		}
	}

	getPosition (y) {
		return (y - this.line.offset().top) / this.line.height();
	}

	onIconClick (e) {
		super.onIconClick(e);
		this.toggleMuted();
	}

}

export default VolumeControl;
