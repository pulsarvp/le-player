'use strict';
/**
 * @file ControlDropdown.js
 */


import $ from 'jquery';
import Control from './Control';
import Component from './Component';
import { IS_MOBILE } from '../utils/browser';

/**
 * @class ControlDropdown
 * @param {Player} player Main player
 * @param {Object} [options]
 * @property {jQuery} dropdownContent Content of popup
 * @extends Control
 */
class ControlDropdown extends Control {

	constructor(player, options={}) {
		options = $.extend({}, {
			tag : 'div',
		}, options);
		super(player, options);
		this._opened = false;
		this.element.on('mouseenter', this.open.bind(this));
		this.element.on('mouseleave', this.close.bind(this));
		if(IS_MOBILE) {
			this.element.on('tap', this.toggle.bind(this));
			$(document).on('touchend touchstart click', this.onDocumentEvents.bind(this));
		}
	}

	/**
	 * @override
	 */
	createElement() {
		super.createElement();
		this.dropdownContent = $('<div />').addClass('control-dropdown__content');
		this.element.append(this.dropdownContent);
	}

	/**
	 * @override
	 */
	buildCSSClass() {
		return `control-dropdown ${super.buildCSSClass()}`
	}

	/**
	 * @override
	 */
	onClick(e) {
		if($(e.target).closest(this.dropdownContent).length > 0) {
			return;
		}

		super.onClick(e);
	}

	toggle() {
		if(this.disable) true;
		if(this._opened) {
			this.close();
		} else {
			this.open();
		}
	}

	open() {
		if(this.disable) return;
		this._opened = true;
		this.dropdownContent.show();
	}

	close() {
		if(this.disable) return;
		this._opened = false;
		this.dropdownContent.hide();
	}

	onDocumentEvents(e) {
		if(
			!($(e.target).closest(this.element).length > 0) &&
			!($(e.target).closest(this.dropdownContent).length > 0)
		) {
			if(this._opened){
				this.close();
			}
		}
	}

}

Component.registerComponent('ControlDropdown', ControlDropdown);
Control.registerControl('dropdown', ControlDropdown);
export default ControlDropdown;
