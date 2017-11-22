'use strict';
/**
 * @file SectionControl.js
 */

import $ from 'jquery';
import Component from './Component';
import Control from './Control';
import ControlCheckbox from './ControlCheckbox';

/**
 * @class SectionControl
 * @param {Player} player Main player
 * @param {Object} [options]
 * @param {Boolean} [options.checked=true]
 * @extends ControlCheckbox
 */
class SectionControl extends ControlCheckbox {
	constructor (player, options={}) {
		options = $.extend({}, {
			iconName : 'list-ul',
			className : 'section',
			name : 'section',
			title : 'Показать/скрыть секции',
			disable : true
		}, options);
		super(player, options);

		this.player.on('sectionsinit', this._onSectionsInit.bind(this));
		this.player.on('sectionstoggle', this._onSectionToggle.bind(this))
	}

	onChecked(e, data) {
		super.onChecked(e);
		this.player.toggleSections(data.checked);
	}

	_onSectionToggle(e, data) {
		const { isVisible } = data;
		if(this.checked !== isVisible) {
			this.checked = isVisible;
		}

	}

	_onSectionsInit(e) {
		this.options.disable = this.disable = false;
		this.checked = true;
	}
}

Component.registerComponent('SectionControl', SectionControl);
Control.registerControl('section', SectionControl);
export default SectionControl;
