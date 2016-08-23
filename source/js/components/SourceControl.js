'use strict';
/**
 * @file SourceControl.js
 */

import $ from 'jquery';
import ControlContainer from './ControlContainer';

/**
 * @class SourceControl
 * @param {Player} player Main player
 * @extends ControlConainer
 */
class SourceControl extends ControlContainer {
	constructor (player, options={}) {
		options = $.extend({}, {
			iconName : 'bullseye',
			title : 'Качество',
			className : 'source-control',
			disable : true
		}, options);
		super(player, options);


	}

	/**
	 * @override
	 */
	onItemClick (e) {
		super.onItemClick(e);
		let item = $(e.target);
		this.player.video.source = item.data('src');
	}

	onPlayerInited(e, data) {
		if (this.player.sources.length > 1) {
			for (let i in this.player.sources) {
				this.addItem(this.player.sources[i].title, {
					src : this.player.sources[i].src
				});
			}
			this.disable = false;
		}
	}
}

export default SourceControl;
