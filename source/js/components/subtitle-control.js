'use strict';
/**
 * @file subtitle-control.js
 *
 * Subtitle control
 */

import $ from 'jquery';
import ControlContainer from './control-container';

/**
 * @param {Player} player Main player
 * @class SubtitleControl
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
			this.disable();
		}
	}

	onIconClick (e) {
		super.onIconClick(e);
		this.onItemClick(-1);
	}

	onItemClick (index) {
		super.onItemClick(index);
		let t = this.getByIndex(index);
		let video = this.player.video;
		if (t != null)
			video.track = t.data('language');
		else
			video.track = -1;
	}
}

export default SubtitleControl;
