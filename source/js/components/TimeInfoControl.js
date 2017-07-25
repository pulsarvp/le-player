'use strict';
/**
 * @file TimeInfoControl.js
 */

import $ from 'jquery';
import Component from './Component';
import Control from './Control';
import ControlText from './ControlText';
import { secondsToTime } from '../utils';

/**
 * @param {Player} player Main player
 * @class TimeInfoControl
 * @property {ControlText} currentTime Current time's text
 * @property {ControlText} totalTime Total time
 * @property {jQuery} line
 * @extends Control
 */
class TimeInfoControl extends Control {

	constructor (player, options={}) {
		options = $.extend({}, {
			className : 'timeline timeline-container',
			name : 'time-info'
		}, options);
		super(player, options);

		this.player.on('timeupdate', (e, data) => {
			const time = this.player.currentTime;
			this._currentTimeControl.text = secondsToTime(time);
		});

		this.player.on('durationchange', (e) => {
			this._totalTimeControl.text = secondsToTime(this.player.video.duration);
		});
	}


	/**
	 * @override
	 */
	createElement() {
		const duration = this.player.video.duration;
		const currentTime = this.player.video.currentTime;
		this._currentTimeControl = new ControlText(this.player, { className : 'control-time__current'});
		this._totalTimeControl = new ControlText(this.player, { className : 'control-time__total'});

		if(isNaN(duration) || duration == null) {
			this._totalTimeControl.text = '';
		} else {
			this._totalTimeControl.text = secondsToTime(duration);
		}

		if(currentTime == null) {
			this._currentTimeControl.text = secondsToTime(0);
		} else {
			this._currentTimeControl.text = secondsToTime(currentTime);
		}

		this.element = $('<div/>').addClass('control-time');
		this.element
			.append(this._currentTimeControl.element)
			.append(this._totalTimeControl.element)

		return this.element;
	}


	/**
	 * @override
	 */
	onPlayerInited(e) {
		let video = this.player.video;
		this._currentTimeControl.text = secondsToTime(video.currentTime);
		this._totalTimeControl.text = secondsToTime(video.duration);
	}

	_onClick(e) {
		e.preventDefault()
	}
}

Component.registerComponent('TimeInfoControl', TimeInfoControl);
Control.registerControl('timeinfo', TimeInfoControl);
export default TimeInfoControl;
