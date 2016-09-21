'use strict';
/**
 * @file MiniPlayer.js
 */

import $ from 'jquery';
import Component from './Component';
import Icon from './Icon';

/**
 * @class MiniPlayer
 * @param {Player} player Main player
 * @param {Object} [options] MiniPlayer's options
 * @param {String} [options.iconName] Name of control's icon. If empty, control will not have a icon
 * @param {String} [options.className]
 * @param {String} [options.title] Contorl's tooltip, title attr
 * @param {Boolean} [options.disable=false]
 * @property {Icon} icon Icon in control, if it is exist
 * @extends Component
 */
class MiniPlayer extends Component {

	constructor(player, options) {
		super(player, options);
	}

	/**
	 * @override
	 */
	createElement() {
		let html = `
			<div class="leplayer-miniplayer">
				<div class="leplayer-miniplayer__description">

				</div>
				<div class="leplayer-miniplayer__controls controls">
			</div>
		`
		return this.element;
	}

	/**
	 * @override
	 */
	buildCSSClass() {
		return `leplayer-miniplayer ${super.buildCSSClass()}`
	}


}

export default MiniPlayer;
