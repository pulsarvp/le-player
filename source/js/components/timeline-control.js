'use strict';
/**
 * @file timeline-control.js
 *
 * Timeline Control
 */

import $ from 'jquery';
import Control from './control';
import ControlText from './control-text';
import { secondsToTime } from '../utils/time';

/**
 * @param {Player} player Main player
 * @class Control
 */
class TimelineControl extends Control {

	constructor (player, options={}) {
		options = $.extend({}, {
			className : 'timeline timeline-container'
		}, options);
		super(player, options);
		this.player.on('sectionsinit', this._onSectionsInit.bind(this));
	}

	createElement() {
		super.createElement();
		let video = this.player.video;
		let duration = video.duration;

		this.drag = false;

		this.currentTime = new ControlText(this.player, { className : 'time-current' });
		this.totalTime = new ControlText(this.player, {className : 'time-total' });

		this.marker = $('<div />').addClass('time-marker');

		this.markerShadow = $('<div />')
			.addClass('time-marker shadow')
			.hide();

		this.markerShadowTime = $('<div />').addClass('time');
		this.markerTime = $('<div />')
			.addClass('time')
			.hide();
		this.played = $('<div />').addClass('time-played');
		this.buffered = $('<div />')
		this.currentTime.text = '00:00';
		this.line = $('<div />')
			.addClass('timeline')
			.append(this.marker.append(this.markerTime))
			.append(this.markerShadow.append(this.markerShadowTime))
			.append(this.played)
			.append(this.buffered)
			.on({
				'mousemove' : (e) => {
					if (this.drag) return;

					let p = this.getPosition(e.pageX);
					if (p > 0 && p < 1) {
						this.markerShadow.show();
						this.markerShadow.css('left', p * 100 + '%');
						this.markerShadowTime.html(secondsToTime(video.duration * p));
					}
					else
						this.markerShadow.hide();
				},

				'mouseleave' : (e) => {
					if (this.drag) return;
					this.markerShadow.hide()
				},

				'mousedown' : (e) => {
				},

				'click' : (e) => {
					if (e.which !== 1) return;
					if (this.drag) return;
					this.hardMove(this.getPosition(e.pageX));
					video.seek(video.duration * this.getPosition(e.pageX));
				},

				'touchmove' : (e) => {
				}
			});

		this.element.addClass('timeline-container')
			.append($('<div />')
				.addClass('timeline-subcontainer')
				.append(this.currentTime.element)
				.append(this.line)
				.append(this.totalTime.element));

		this.marker.on('mousedown', (e) => {
			if (e.which !== 1) return;
			e.preventDefault();
			this.markerShadow.hide();
			this.drag = true;
		});


		$(document).on({

			'mousemove' : (e) => {
				if (!this.drag) return;
				let p = this.getPosition(e.pageX);
				if (p > 0 && p < 1) {
					this.markerTime
						.show()
						.html(secondsToTime(video.duration * p))
					video.seek(video.duration * p);
				}
			},

			'mouseup' : (e) => {
				this.markerTime.hide()
				this.drag = false;
			}
		});
	}

	_onSectionsInit(e, data) {
		let sections = data.items;
		let video = this.player.video;
		let duration = video.duration;
		let result = $('<div />');
		sections.forEach((section) => {
			let length = (section.end - section.begin);
			let item = $('<div />')
				.addClass('timeline-section')
				.css({
					width: length / duration * 100 + '%',
					left: section.begin / duration * 100 + '%'
				});
			result.append(item);
		})
        this.line.append(result);
	}

	getPosition (x) {
		return (x - this.line.offset().left) / this.line.width();
	}

	hardMove (percent) {
		let currentTime = this.player.video.duration * percent;
		percent = percent * 100;
		this.marker.css('left', percent + '%');
		this.played.css('width', percent + '%');
		this.currentTime.text = secondsToTime(currentTime);
	}

	move () {
		let video = this.player.video;
		let percent = (video.currentTime / video.duration * 100).toFixed(2);
		let currentTime = video.currentTime;
						this.marker.css('left', percent + '%');
		this.played.css('width', percent + '%');
		this.currentTime.text = secondsToTime(currentTime);
	}

	_initWatchBuffer () {
		clearInterval(this.watchBufferInterval);
		let arr = [];
		let video = this.player.video;
		let updateProgressBar = () => {
			const END = 1;
			const START = 0;
			let result = $('');
			video.loaded.forEach(item => {
				let domItem = $('<div />').addClass('time-buffered');
				domItem.css({
					'left' : item[START] * 100 + '%',
					'width' : (item[END] - item[START]) * 100 + '%'
				});
				result = result.add(domItem);
			});
			this.buffered.html(result);
			if (video.loaded.length && (1 - video.loadedSize) <= 0.05) {
				clearInterval(this.watchBufferInterval);
			}
		}
		this.watchBufferInterval = setInterval(updateProgressBar, 500);
	}

}

export default TimelineControl;
