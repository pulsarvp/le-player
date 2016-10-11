'use strict';
/**
 * @file time.js
 *
 * @module time
 */

/**
 * Convert seconds to format string 'hh:mm:ss'
 *
 * @access public
 * @param {Number} seconds Seconds
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

	if(h > 0 || showHours ) {
		out = `${h}:` + out
	}
	return out;
};
