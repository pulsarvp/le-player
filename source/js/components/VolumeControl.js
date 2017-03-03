'use strict';
/**
 * @file VolumeControl.js
 */

import $ from 'jquery';
import Component from './Component';
import Control from './Control';
import ControlDropdown from './ControlDropdown';

/**
 * @param {Player} player Main player
 * @class VolumeControl
 * @extends ControlDropdown
 */
class VolumeControl extends ControlDropdown {

	constructor (player, options={}) {
		options = $.extend({}, {
			iconName : 'volume-down',
			className : 'volume-control',
			name : 'volume'
		}, options);
		super(player, options);

		this.player.on('volumechange', (e, data) => {
			this.value = data.volume;
		})
	}

	createElement() {
		super.createElement();
		let drag = false;

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

		this.dropdownContent
			.addClass('volume-slider')
			.append(this.line);

		this.icon.element.attr('title', 'Отключить звук');

		this.marker.on('mousedown', (e) => {
			if (e.which !== 1) return;
			drag = true;
		});

		$(document).on({
			mousemove : (e) => {
				if (!drag) return;
				let p = this.getPosition(e.pageY);
				if (p >= 0 && p <= 1) {
					this.player.video.volume = 1 - p
				}
			},

			mouseup : (e) => {
				drag = false;
			}
		});
		return this.element;
	}


	set value (value) {
		this.icon.iconName = this.player.calcVolumeIcon(value);

		let p = Math.round(value * 100).toString() + '%';
		this.active.css('height', p);
		this.marker.css('bottom', p);
	}

	toggleMuted () {
		const { video } = this.player;

		if (video.volume === 0) {
			video.volume = video.defaultVolume;
		} else {
			video.volume = 0;
		}
	}

	getPosition (y) {
		return (y - this.line.offset().top) / this.line.height();
	}

	onClick (e) {
		super.onClick(e);
		this.toggleMuted();
	}

	onPlayerInited() {
		this.value = this.player.video.defaultVolume;
	}

}

Component.registerComponent('VolumeControl', VolumeControl);
Control.registerControl('volume', VolumeControl);
export default VolumeControl;
