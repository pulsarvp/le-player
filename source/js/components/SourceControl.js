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

		this.dropdownContent.hide();

	}

	onPlayerInited(e, data) {
		this.update();
	}

	getData() {
		return this.player.video.getAvailableQualityLevels();
	}

	getCurrentValue() {
		return this.player.video.playbackQuality;
	}
}

Component.registerComponent('SourceControl', SourceControl);
Control.registerControl('source', SourceControl);
export default SourceControl;
