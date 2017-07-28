'use strict';
/**
 * @file PlayButton.js
 */

import Control from './Control';
import Component from './Component';
import Icon from './Icon';
import { createEl } from '../utils';

/**
 * @param {Player} player Main player
 */
class PlayButton extends Control {

	constructor(player, options) {
		super(player, options)
	}

	createElement() {
		const inner = createEl('div', {
			className : 'leplayer-play-button__button'
		})
		.append(new Icon(this.player, { iconName : 'play' }).element);

		this.element = createEl('div', {
			className : this.buildCSSClass()
		})
		.append(inner);

		return this.element;
	}

	onClick(e) {
		super.onClick(e);
		this.player.play();
	}

	/**
	 * @override
	 */
	buildCSSClass() {
		return `leplayer-play-button ${this.options.className}`
	}

}

Component.registerComponent('PlayButton', PlayButton);
Control.registerControl('play button', PlayButton);
export default PlayButton;
