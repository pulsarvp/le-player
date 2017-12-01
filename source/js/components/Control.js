'use strict';
/**
 * @file Control.js
 */

import $ from 'jquery';
import Component from './Component';
import Icon from './Icon';

/**
 * @class Control
 * @param {Player} player Main player
 * @param {Object} [options] Control's options
 * @param {String} [options.iconName] Name of control's icon. If empty, control will not have a icon
 * @param {String} [options.className]
 * @param {String} [options.name]
 * @param {String} [options.collection]
 * @param {String} [options.title] Contorl's tooltip, title attr
 * @param {Function} [options.onClick] On click event handler
 * @param {Boolean} [options.disable=false]
 * @property {Icon} icon Icon in control, if it is exist
 * @extends Component
 */
class Control extends Component {

	constructor(player, options) {
		super(player, options);
		this.emitTapEvents();
		this.disable = this.options.disable != null? this.options.disable : true;

		this.player.on('inited', (e) => {
			this.disable = this.options.disable != null? this.options.disable : false;
		})

		this.element.on({
			click : this.onClick.bind(this),
			tap : this.onClick.bind(this),
		});

		this.player.on('inited', this.onPlayerInited.bind(this))
	}

	/**
	 * @override
	 */
	createElement() {
		if (this.options.iconName) {
			this.icon = new Icon(this.player, {
				iconName : this.options.iconName
			});
		}
		let attrs = {
			title : this.options.title
		}
		this.element = $(`<${this.options.tag || 'button'} />`)
			.addClass(this.buildCSSClass())
			.append(this.icon && this.icon.element)
			.attr(attrs);

		return this.element;
	}

	/**
	 * @override
	 */
	buildCSSClass() {
		let result = `control ${this.options.className} ${super.buildCSSClass()}`;
		/**
		 * @see https://stackoverflow.com/questions/23885255/how-to-remove-ignore-hover-css-style-on-touch-devices
		 * We should ignore hover effetcs on iphone, because we show hover effect on tap
		 */
		if(!this.player.hasClass('leplayer--iphone')) {
			result += ' control--no-iphone';
		}
		return result;
	}

	/**
	 * @override
	 */
	set tap(value) {
		this.toggleClass('control--tap', value);
	}

	set disable(value) {
		this._disable = value;
		this.toggleClass('disabled', value);
	}

	get disable() {
		return this._disable
	}

	/**
	 *
	 * On click event handler
	 * @abstact
	 */
	onClick (e) {
		e.preventDefault();
		if (this.disable) {
			return false;
		}
		this.player.trigger('controlclick', { control : this });

		if (typeof this.options.onClick === 'function') {
			this.options.onClick.call(this, arguments);
		}
	}


	onPlayerInited (e, data) {

	}

	static registerControl(name, control) {
		if(name == null) {
			return;
		}

		if(Control._controls == null) {
			Control._controls = {};
		}

		Control._controls[name] = control;

		return control;
	}

	static getControl(name) {
		if(name == null) {
			return;
		}

		if(Control._controls && Control._controls[name]) {
			return Control._controls[name];
		}
	}

	static create(player, name, options) {
		var controlClass = this.getControl(name);
		if(controlClass == null) {
			console.error(`Control ${name} doesn't exist`);
			return null;
		}

		return new controlClass(player, options);
	}

}

Component.registerComponent('Control', Control);
Control.registerControl('control', Control);
export default Control;
