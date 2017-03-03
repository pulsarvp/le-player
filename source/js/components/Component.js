'use strict';
/**
 * @file Component.js
 */

import $ from 'jquery';

/**
 * Player component - Base class for all UI
 *
 * @param {Player} player Main player
 * @param {Object} [options] Options of component
 * @param {jQuery} [options.element] Элемент на котором можно иницилизовать класс.
 * @property {Object} options
 * @property {jQuery} element
 * @class Component
 */
class Component {

	constructor(player, options) {
		options = this.options = $.extend({}, {
			createElement : true
		}, this.options, options);

		if(!player) {
			this.player = player = this;
		} else {
			this.player = player;
		}

		if(options.createElement) {

			if (options.element) {
				this.element = options.element;
			} else {
				this.createElement();
			}

			if (this.element.length !== 1) {
				console.error(`Component.prototype.element.length must equal 1, not ${this.element.length}\n`, this.element);
			}

			this.element[0].__node = this;
		}
	}

	/**
	 * @abstract
	 */
	createElement() {

		return '';
	}

	/**
	 * @abstract
	 */
	buildCSSClass() {
		return ''
	}


	/**
	 * Set the focus to this component
	 */
	focus() {
		this.element.focus();
	}


	/**
	 * Remove the focus from this component
	 */
	blur() {
		this.element.blur();
	}


	/**
	 * Emit a player event (the name of event would be a leplayer_smth)
	 *
	 * @access public
	 * @param {String} eventName
	 * @param {Arguments} ...args jQuery.fn.on other arguments
	 * @returns {Player} this
	 */
	trigger(eventName, ...args) {
		const event = $.Event(`leplayer_${eventName}`, { player : this })
		this.element.trigger.call(this.element, event, ...args);
		return this;
	}


	/**
	 * Listen a player event with leplayer_ suffix
	 *
	 * @access public
	 * @param {String} eventName
	 * @param {Arguments} ...args jQuery.fn.on other arguments
	 * @returns {Player} this
	 */
	on(eventName, ...args) {
		this.element.on.call(this.element, `leplayer_${eventName}`, ...args);
		return this;
	}


	one(eventName, ...args) {
		this.element.one.call(this.element, `leplayer_${eventName}`, ...args);
	}


	/**
	 * Add the CSS class for general leplayer DOM element
	 *
	 * @access public
	 * @param {String} className Name of class (not a selector, it's mean, that string sould be without point at the start)
	 * @returns {Player} this
	 */
	addClass(className) {
		this.element.addClass(className);
		return this;
	}

	/**
	 * Remove the CSS class from general leplayer DOM element
	 *
	 * @access public
	 * @param {String} className Name of class
	 * @returns {Player} this
	 */
	removeClass(className) {
		this.element.removeClass(className);
		return this;
	}

	/**
	 * Toggle the CSS class from general leplayer DOM element
	 *
	 * @access public
	 * @param {String} className
	 * @param {Boolean} flag
	 * @returns {Player} this
	 */
	toggleClass(className, flag) {
		this.element.toggleClass(className, flag);
		return this;
	}

	hasClass(className) {
		return this.element.hasClass(className);
	}


	static registerComponent(name, component) {
		if(name == null) {
			return;
		}

		if(Component._components == null) {
			Component._components = {};
		}

		Component._components[name] = component;

		return component;
	}

	static getComponent(name) {
		if(name == null) {
			return;
		}

		if(Component._components && Component._components[name]) {
			return Component._components[name];
		}

	}


}

Component.registerComponent('Component', Component);
export default Component;
