'use strict';
/**
 * @file SubtitleControl.js
 *
 * Subtitle control
 */

import $ from 'jquery';
import Component from './Component';
import Control from './Control';
import ControlContainer from './ControlContainer';

/**
 * @param {Player} player Main player
 * @class SubtitleControl
 * @extends ControlContainer
 */
class SubtitleControl extends ControlContainer {
	constructor (player, options={}) {
		options = $.extend({}, {
			iconName : 'commenting-o',
			title : 'Субтитры',
			name : 'subtitle',
			className : 'subtitle-control',
			disable : true
		}, options);
		super(player, options);

		this.player.on('playing', this.update.bind(this));
		this.player.on('trackschange', this.update.bind(this));
	}

	onClick (e) {
		super.onClick(e);
		const video = this.player.video;
		video.track = null
	}

	onItemClick (e) {
		e.preventDefault();
		e.stopPropagation()

		const item = $(e.target)
		const video = this.player.video;
		if (item.data()) {
			video.track = item.data();
		}

		this.dropdownContent.hide()
	}

	onPlayerInited(e, data) {
		this.update()
	}

	update() {
		super.update();
		const hasValue = !!(this.getCurrentValue() && this.getCurrentValue().name != null);
		this.element.toggleClass(
			'control-checkbox--checked',
			hasValue
		)
	}

	getData() {
		return this.player.video.subtitles;
	}

	getCurrentValue() {
		return this.player.video.track;
	}

}

Component.registerComponent('SubtitleControl', SubtitleControl);
Control.registerControl('subtitle', SubtitleControl);
export default SubtitleControl;
