'use strict';
/**
 * @file SubtitleControl.js
 *
 * Subtitle control
 */

import $ from 'jquery';
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
			className : 'subtitle-control'
		}, options);
		super(player, options);
	}

	init() {
		let video = this.player.video;
		if (video.subtitles.length > 0) {
			for (var i in video.subtitles) {
				if (!video.subtitles.hasOwnProperty(i)) continue;
				let item = video.subtitles[ i ];
				this.addItem(item.title, {
					src : item.src,
					language : item.language
				});
			}
		} else {
			this.disable = true;
		}
	}

	onIconClick (e) {
		super.onIconClick(e);
		let video = this.player.video;
		this.active = null
		video.track = -1;
	}

	onItemClick (e) {
		super.onItemClick(e);
		let item = $(e.target)
		let video = this.player.video;
		if (item.data('language')) {
			video.track = item.data('language');
		}
	}
}

export default SubtitleControl;
