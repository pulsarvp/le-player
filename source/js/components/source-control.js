'use strict';
/**
 * @file source-control.js
 *
 * Source control
 */

import $ from 'jquery';
import ControlContainer from './control-container';

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
			className : 'source-control'
		}, options);
		super(player, options);
		if (this.player.sources.length > 1) {
			for (var i in this.player.sources) {
				this.addItem(this.player.sources[ i ].title, { src : this.player.sources[ i ].src });
			}
		} else {
			this.disable();
		}
	}

	set (index) {
		/** TODO: Emit event on set source*/
		let s = this.getByIndex(index);
		if (s != null) {
			this.player.video.source = s.data('src');
			this.player.controls.download = s.data('src');
		}
	}

	/**
	 * @override
	 */
	onItemClick (index) {
		super.onItemClick(index);
		this.set(index);
	}
}

export default SourceControl;
