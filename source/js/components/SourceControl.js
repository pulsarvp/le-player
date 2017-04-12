'use strict';
/**
 * @file SourceControl.js
 */

import $ from 'jquery';
import Component from './Component';
import Control from './Control';
import ControlContainer from './ControlContainer';


/**
 * @class SourceControl
 * @param {Player} player Main player
 * @extends ControlConainer
 */
class SourceControl extends ControlContainer {
	// TODO: Делать disable/enable после options init
	constructor (player, options={}) {
		options = $.extend({}, {
			name : 'source',
			iconName : 'bullseye',
			title : 'Качество',
			className : 'source-control',
			disable : true
		}, options);
		super(player, options);

		this.player.on('playing', this.update.bind(this));
		this.player.on('qualitychange', this.update.bind(this));
	}

	onItemClick(e) {
		e.preventDefault();
		const item = $(e.target);
		const video = this.player.video;

		video.playbackQuality = item.data('name');

		// Hide dropdownContent after click
		this.dropdownContent.hide();
		this.dropdownContent.css({
			'display' : ''
		})
	}

	onPlayerInited(e, data) {
		this.update();
	}

	update() {
		const video = this.player.video;
		const qualityLevels = video.getAvailableQualityLevels();
		const currentQuality = video.playbackQuality;

		if(qualityLevels.length === 0) {
			this.disable = true;
			return;
		}

		this.list = [];
		this.dropdownContent.empty();

		qualityLevels.forEach(item => {
			const elem = this.addItem(item.title, item);
			if(currentQuality === item.name) {
				this.active = elem;
			}
		});
		this.disable = false;
	}
}

Component.registerComponent('SourceControl', SourceControl);
Control.registerControl('source', SourceControl);
export default SourceControl;
