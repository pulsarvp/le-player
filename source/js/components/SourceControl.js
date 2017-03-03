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
	}

	/**
	 * @override
	 */
	onClick (e) {
		super.onClick(e);
		const defaultItem = this.getByIndex(0);

		this.player.video.src = {
			url : defaultItem.data('url'),
			title : defaultItem.data('title')
		}
		this.active = defaultItem;

	}

	onItemClick(e) {
		super.onItemClick(e);
		let item = $(e.target);
		this.player.video.src = {
			url : item.data('url'),
			title : item.data('title')
		}

	}

	onPlayerInited(e, data) {
		const sources = this.player.options.sources;
		if (sources.length > 1) {
			sources.forEach(item => {
				this.addItem(item.title, {
					url : item.url,
					title : item.title
				})
			})
			this.setActiveByIndex(0);
			this.disable = false;
		}
	}
}

Component.registerComponent('SourceControl', SourceControl);
Control.registerControl('source', SourceControl);
export default SourceControl;
