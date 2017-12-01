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

		if(!player && this.play != null) {
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
		const event = $.Event(`leplayer_${eventName}`, { player : this.player });
		this.element.triggerHandler(event, ...args);
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
		this.element.on(`leplayer_${eventName}`, ...args);
		return this;
	}


	one(eventName, ...args) {
		this.element.one(`leplayer_${eventName}`, ...args);
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

	set tap(value) {}

	emitTapEvents(element=null) {
		if(element == null) {
			element = this.element;
		}
		// Track the start time so we can determine how long the touch lasted
		let touchStart = 0;
		let firstTouch = null;
		let lastMoveTouch = null;

		// Maximum movement allowed during a touch event to still be considered a tap
		// Other popular libs use anywhere from 2 (hammer.js) to 15,
		// so 10 seems like a nice, round number.
		const tapMovementThreshold = 10;

		// The maximum length a touch can be while still being considered a tap
		const touchTimeThreshold = 200;

		let couldBeTap;

		// see https://stackoverflow.com/questions/17957593/how-to-capture-touchend-coordinates

		element.on('touchstart', (event) => {
			// If more than one finger, don't consider treating this as a click
			if (event.touches.length === 1) {
				// Copy pageX/pageY from the object
				firstTouch = lastMoveTouch = {
					pageX : event.touches[0].pageX,
					pageY : event.touches[0].pageY
				};
				// Record start time so we can detect a tap vs. "touch and hold"
				touchStart = new Date().getTime();
				// Reset couldBeTap tracking
				couldBeTap = true;
				this.tap = true;
			}
		});

		element.on('touchmove', (event) => {
			// If more than one finger, don't consider treating this as a click
			if (event.touches.length > 1) {
				couldBeTap = false;
			} else if (firstTouch) {
			// Some devices will throw touchmoves for all but the slightest of taps.
			// So, if we moved only a small distance, this could still be a tap
				const xdiff = event.touches[0].pageX - firstTouch.pageX;
				const ydiff = event.touches[0].pageY - firstTouch.pageY;
				const touchDistance = Math.sqrt(xdiff * xdiff + ydiff * ydiff);

				if (event.touches.length === 1) {
					lastMoveTouch = {
						pageX : event.touches[0].pageX,
						pageY : event.touches[0].pageY
					};
				}

				if (touchDistance > tapMovementThreshold) {
					couldBeTap = false;
					this.tap = false;
				}
			}
		});

		const noTap = () => {
			couldBeTap = false;
			this.tap = false;
		};

		// TODO: Listen to the original target. http://youtu.be/DujfpXOKUp8?t=13m8s
		element.on('touchleave', noTap);
		element.on('touchcancel', noTap);

		// When the touch ends, measure how long it took and trigger the appropriate
		// event
		element.on('touchend', (event) => {
			firstTouch = null;
			this.tap = false;
			// Proceed only if the touchmove/leave/cancel event didn't happen
			if (couldBeTap === true) {
			// Measure how long the touch lasted
				const touchTime = new Date().getTime() - touchStart;

				// Make sure the touch was less than the threshold to be considered a tap
				if (touchTime < touchTimeThreshold) {
					// Don't let browser turn this into a click
					event.preventDefault();
					/**
					 * Triggered when a `Component` is tapped.
					 *
					 * @event Component#tap
					 */
					const tapEvent = $.Event('tap');
					tapEvent.pageX = lastMoveTouch.pageX;
					tapEvent.pageY = lastMoveTouch.pageY;
					element.trigger(tapEvent);
					// It may be good to copy the touchend event object and change the
					// type to tap, if the other event properties aren't exact after
					// Events.fixEvent runs (e.g. event.target)
				}
			}
		});
	}

}

Component.registerComponent('Component', Component);
export default Component;
