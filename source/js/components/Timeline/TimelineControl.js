'use strict';
/**
 * @file TimelineControl.js
 */

import $ from 'jquery';
import Component from '../Component';
import Control from '../Control';
import ControlText from '../ControlText';
import BufferedRanges from './BufferedRanges';
import Marker from './Marker';
import { secondsToTime } from '../../utils';

/**
 * @param {Player} player Main player
 * @class TimelineControl
 * @property {ControlText} currentTime Current time's text
 * @property {ControlText} totalTime Total time
 * @property {jQuery} line
 * @extends Control
 */
class TimelineControl extends Control {

	constructor (player, options={}) {
		options = $.extend({}, {
			name : 'timeline',
			className : 'timeline timeline-container'
		}, options);
		super(player, options);


		this.marker.element.on('leplayer_mousemove', this._onMarkerMousemove.bind(this));

		this.marker.element.on('leplayer_mousedown', this._onMarkerMousedown.bind(this));

		this.player.on('sectionsinit', this.onSectionsInit.bind(this));

		this.player.on('timeupdate', this._onTimeUpdate.bind(this));

		this.player.on('timeupdateload', this._onTimeUpdate.bind(this))

		this.player.on('durationchange', this._onDurationChange.bind(this));
	}

	_onMarkerMousedown(e) {
		this.markerShadow.element.hide();
	}

	_onMarkerMousemove(e, data) {
		const x = data.x;
		const p = this.getPosition(x);
		const video = this.player.video;
		const currentTime = video.duration * p
		if (p > 0 && p < 1) {
			this.marker.markerTime
				.show()
				.html(secondsToTime(currentTime));
			video.currentTime = currentTime

			this.marker.markerPreview
				.show()
				.attr('src', this._getPreview(currentTime))
		}
	}

	_onTimeUpdate(e, data) {
		const duration = this.player.video.duration;
		let currentTime = this.player.currentTime;
		if(data && data.currentTime !== undefined) {
			currentTime = data.currentTime;
		}
		let percent = currentTime / duration;

		if(isNaN(duration) && currentTime === 0) percent = 0;

		this.move({ percent, currentTime });
	}

	/**
	 * @override
	 */
	createElement() {
		super.createElement();
		let video = this.player.video;

		this.drag = false;

		// Create labels
		this.currentTime = new ControlText(this.player, { className : 'time-current' });
		this.currentTime.text = '00:00';
		this.totalTime = new ControlText(this.player, {className : 'time-total' });

		// Create line with markers and played range

		this.marker = new Marker(this.player, {
			drag : true
		});

		this.markerShadow = new Marker(this.player, {
			className : 'shadow'
		});
		this.markerShadow.element.hide();


		// Played ranges
		this.playedRanges = $('<div />').addClass('time-played');


		// Buffered ranges
		this.bufferedRanges = new BufferedRanges(this.player).element;

		this.line = $('<div />')
			.addClass('timeline')
			.append(this.marker.element)
			.append(this.markerShadow.element)
			.append(this.playedRanges)
			.append(this.bufferedRanges)
			.on({
				mousemove : (e) => {
					if (this.marker.drag) return;

					let p = this.getPosition(e.pageX);
					if (p > 0 && p < 1) {
						this.markerShadow.element
							.show()
							.css('left', p * 100 + '%');
						this.markerShadow
							.markerTime
							.show()
							.html(secondsToTime(video.duration * p));
						this.markerShadow
							.markerPreview
							.show()
							.attr('src', this._getPreview(video.duration * p))
					} else {
						this.markerShadow.element.hide();
					}
				},

				mouseleave : (e) => {
					if (this.drag) return;
					this.markerShadow.element.hide()
				},

				mousedown : (e) => {
				},

				click : this._onLineClick.bind(this),

				touchmove : (e) => {
				}
			});

		this.element.addClass('timeline-container')
			.append($('<div />')
				.addClass('timeline-subcontainer')
				.append(this.currentTime.element)
				.append(this.line)
				.append(this.totalTime.element));
	}

	_getPreview(seconds) {
		void this.player.options
		/* debugger */
		return 'http://www.lets-develop.com/wp-content/uploads/2014/10/How-to-change-img-src-with-jQuery-change-img-url.jpg'
	}

	/**
	 * @override
	 */
	_onClick(e) {
		e.preventDefault();
	}

	_onLineClick(e) {
		if (e.which !== 1) return;
		if (this.drag) return;
		const video = this.player.video;
		this.move({ percent : this.getPosition(e.pageX)});
		video.currentTime = (video.duration * this.getPosition(e.pageX));
	}

	onSectionsInit(e) {
		const duration = this.player.video.duration;
		if(isNaN(duration)) {
			return
		}
		if (this.player.sections) {
			this.updateSectionRanges(this.player.sections.items);
		}
	}

	updateSectionRanges(items) {
		if(this.sections == null || this.sections.length === 0) {
			this.sections = this.createSectionRanges(items);
			this.line.append(this.sections);
		} else {
			this.sections.html(this.createSectionRanges(items));
		}
	}

	createSectionRanges(items) {
		const duration = this.player.video.duration;
		let result = $('<div />').addClass('leplayer-timeline-sections');
		items.forEach((section) => {
			const length = (section.end - section.begin);
			const item = $('<div />')
				.addClass('leplayer-timeline-section')
				.css({
					width : length / duration * 100 + '%',
					left : section.begin / duration * 100 + '%'
				});
			result.append(item);
		})
		return result;
	}

	getPosition (x) {
		return (x - this.line.offset().left) / this.line.width();
	}

	/**
	 * Move marker on timeline on percent from argument, not from video.currentTime
	 * @param {Number} percent The percent which you want to move marker on timeline
	 */
	move ({ percent, currentTime }) {
		if(currentTime === undefined) {
			currentTime = this.player.video.duration * percent;
		}

		if(isNaN(currentTime)) return;
		percent = percent * 100;
		this.marker.element.css('left', percent + '%');
		this.playedRanges.css('width', percent + '%');
		this.currentTime.text = secondsToTime(currentTime);
	}

	updateLabels() {
		const video = this.player.video;
		this.totalTime.text = secondsToTime(0, Math.floor(video.duration / 3600) > 0);
		const width = this.totalTime.element.width();

		this.totalTime.text = secondsToTime(video.duration);
		this.currentTime.text = secondsToTime(video.currentTime || 0);
		this.currentTime.element.css({
			width
		})
	}

	/**
	 * @override
	 */
	onPlayerInited(e) {
		this.updateLabels();
		if (this.player.sections) {
			this.updateSectionRanges(this.player.sections.items);
		}
	}

	_initWatchBuffer () {
		clearInterval(this.watchBufferInterval);
		let video = this.player.video;
		let updateProgressBar = () => {
			const END = 1;
			const START = 0;
			let result = $('');
			video.loaded.forEach(item => {
				let domItem = $('<div />').addClass('time-buffered');
				domItem.css({
					left : item[START] * 100 + '%',
					width : (item[END] - item[START]) * 100 + '%'
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

	/**
	 * On durationchange event handler
	 */
	_onDurationChange () {
		this.updateLabels();
		if (this.player.sections) {
			this.updateSectionRanges(this.player.sections.items);
		}
	}

}

Component.registerComponent('TimelineControl', TimelineControl);
Control.registerControl('timeline', TimelineControl);
export default TimelineControl;
