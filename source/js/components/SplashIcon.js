'use strict';
/**
 * @file SplashIcon.js
 */


import $ from 'jquery';
import Component from './Component';
import Icon from './Icon';

/**
 * @param {Player} player Main player
 * @param {Object} [options]
 * @class SplashIcon
 * @extends Component
 */
class SplashIcon extends Component {

	show(name) {
		this.icon.iconName = name;
		this.element.addClass('leplayer-splashicon--active');
		setTimeout(() => this.element.removeClass('leplayer-splashicon--active'), 300);
	}

	/**
	 * @override
	 */
	createElement() {
		this.icon = new Icon(this.player);
		return this.element = $('<div />')
			.addClass('leplayer-splashicon')
			.append(this.icon.element);
	}

}

export default SplashIcon;
