'use strict';
/**
 * @file time.js
 *
 * @module time
 */
import $ from 'jquery';

/**
 * Convert seconds to format string 'hh?:mm:ss'
 *
 * @access public
 * @param {Number} seconds Seconds
 * @param {Boolean} showHours convert to format 'hh:mm:ss'
 * @returns {String}
 */
export function secondsToTime (seconds, showHours) {
	var h = Math.floor(seconds / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 3600 % 60);
	var out = '';
	if (m < 10) {
		m = '0' + m;
	}
	if (s < 10) {
		s = '0' + s;
	}
	out = `${m}:${s}`;

	if(h > 0 || showHours) {
		out = `${h}:` + out
	}
	return out;
}


/**
 * Return length / end
 *
 * @access public
 * @param {Number} length
 * @param {Nubmer} end
 */
export function percentify (length, end) {
	// or zero beacase NaN
	const percent = (length / end) || 0;
	return (percent >= 1) ? 1 : percent;
}


export function createEl(tag='div', props) {
	if(props && props.className) {
		props["class"] = props.className;
		delete props.className;
	}
	return $(`<${tag}/>`, props);
}


/**
 * @params {String} Html
 */
export function $html(html) {

}


export function noop() {}

export const getScrollBarWidth = (function() {
	let result;

	return function() {

		if(result != null) {
			return result;
		}

		const outer = $('<div />').css({
			visibility : 'hidden',
			width : 100,
			overflow : 'scroll'
		}).appendTo('body');

		const widthWithScroll = $('<div />').css({
			width : '100%'
		}).appendTo(outer).outerWidth();

		outer.remove();
		return result = 100 - widthWithScroll;
	}

}());
