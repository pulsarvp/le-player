'use strict';
/**
 * @file Sections.js
 */

import $ from 'jquery';
import Component from './Component';

import { secondsToTime, getScrollBarWidth } from '../utils';
/**
 * @class Sections
 * @param {Player} player Main player
 * @param {Object} [options]
 * @param {Array} [options.items=[]} Data for sections
 * @param {Boolean} [options.views] Show section only in fullscreen
 * @extends Component
 */
class Sections extends Component {
	constructor(player, options) {
		let { items = [] } = options;
		items = [].concat(items);

		//options.items = items;

		super(player, options)

		this.activeSection = this.getSectionByIndex(0);

		this.items = items;
		this.length = this.items.length

		this.setActiveByIndex(0);

		this.element
			.find('.leplayer-section')
			.on('click', this.onSectionClick.bind(this));

		this.player.on('sectionstoggle', this._onSectionsToggle.bind(this));

		this.player.on('timeupdate', this.onTimeUpdate.bind(this));

		this.player.on('inited', this.updateSectionDuration.bind(this));

		this.player.on('durationchange', this.updateSectionDuration.bind(this));

		return this;
	}

	next() {
		const sectionIndex = parseInt(this.activeSection.attr('data-index'));
		const newIndex = sectionIndex >= this.length ? this.length : sectionIndex + 1;

		this.setActiveByIndex(newIndex);

		this.player.video.currentTime = this.items[sectionIndex].end;
	}

	prev() {
		const sectionIndex = parseInt(this.activeSection.attr('data-index'));
		const newIndex = sectionIndex <= 0 ? 0 : sectionIndex - 1;

		this.setActiveByIndex(newIndex);
		this.player.video.currentTime = this.items[newIndex].begin;
	}

	/**
	 * @override
	 */
	createElement() {
		const { fullscreenOnly, hideScroll } = this.options;


		this.element = $('<div />').addClass('leplayer-sections');
		this._innerElement = $('<div />').addClass('leplayer-sections__inner');

		if(fullscreenOnly) {
			this.element.addClass('leplayer-sections--fsonly');
		}

		if(hideScroll) {
			this.element.addClass('leplayer-sections--hide-scroll');
			this._innerElement.css({
				right : -1 * getScrollBarWidth()
			})
		}

		this.element.append(
			this._innerElement.append(this._createSections(this.options.items))
		)


		return this.element;
	}

	/**
	 * @override
	 */
	updateSectionDuration() {
		if(this.items != null && this.items.length > 0) {
			const length = this.items.length
			this.items[length - 1].end = this.player.video.duration;

			// TODO: Продумать функцияю updateSection
			//this.updateSection(this.items[length - 1], length - 1);
		}
	}


	onSectionClick(e) {
		const video = this.player.video;
		const section = $(e.target).closest('.leplayer-section');
		video.currentTime = section.attr('data-begin');
		this.player.trigger('sectionsclick', { section : this.items[section.attr('data-index')]});
	}

	setActiveByIndex(index) {
		if (
			this.activeSection.length === 0 ||
			this.activeSection.attr('data-index') === index ||
			this.getSectionByIndex(index).length === 0
		) {
			return this
		}

		this.activeSection.removeClass('leplayer-section--active');
		this.activeSection = this.getSectionByIndex(index);
		this.activeSection.addClass('leplayer-section--active');

		const topPosition = this.activeSection.position().top;

		this.element
			.find('.leplayer-sections__inner')
			.animate({
				scrollTop : this.element.scrollTop() + topPosition
			}, 800)

		this.player.trigger('sectionschange', { section : this.items[index]});

		return this
	}

	getSectionByIndex(index) {
		return this.element.find(`.leplayer-section[data-index="${index}"]`);
	}


	onTimeUpdate(e, data) {
		if (this.activeSection.length === 0) {
			return
		}

		const currentTime = data.time;

		// Update span with end section time
		// TODO: Вынести это в отдельный компонент ShowTime или типо того
		if(this.player.view === 'mini') {
			const endSectionTime = this.activeSection.attr('data-end');
			this.activeSection
				.next()
				.find('.time')
				.text(secondsToTime(endSectionTime - currentTime));
		}

		for (let i = 0; i < this.items.length; i++) {
			const section = this.items[i];
			if (currentTime < section.end) {
				this.setActiveByIndex(i)
				break;
			}
		}
	}

	_onSectionsToggle(e, data) {
		if (this.element.hasClass('leplayer-sections--hidden') && data.checked) {
			this.element.removeClass('leplayer-sections--hidden');
		} else if (!data.checked) {
			this.element.addClass('leplayer-sections--hidden');
		}
	}

	/**
	 * Create HTML of section by data and index section
	 *
	 * @returns {String} HTML
	 */
	createSection(section, index) {
		const items = this.items || this.options.items;
		const item = `
			<div class="leplayer-section ${!index ? 'leplayer-section--active' : ''}"
				data-begin="${section.begin}"
				data-index="${index.toString()}"
				data-end="${section.end}">
				<div class="leplayer-section-time">${secondsToTime(section.begin)}</div>
				<div class="leplayer-section-info">
					<div class="leplayer-section-next-info">
						${section.nextInfo || 'Следующая секция начнется через'}
						<span class="time">${secondsToTime(items[0].end)}</span>
					</div>
					${
						section.title != null ?
							`<div class="leplayer-section-title">${section.title}</div>`
						: ''
					}
					${
						section.description != null ?
							`<div class="leplayer-section-description">${section.description}</div>`
						: ''
					}
				</div>
			</div>
		`.trim()
		return item
	}

	// TODO: Придумать что сделать с событиями после обновления полносью секции
	/**
	 * Find section by index and update him using data
	 *
	 * @param {Object} data
	 * @param {Number} index
	 */
	updateSection(data, index) {
		this.getSectionByIndex(index)
			.replaceWith(this.createSection(data, index))
			.on('click', this.onSectionClick.bind(this));
	}

	_createSections(items) {
		let result = '';
		items.forEach((section, index) => {
			result += this.createSection(section, index);
		});
		return result;
	}
}

Component.registerComponent('Sections', Sections);
export default Sections;
