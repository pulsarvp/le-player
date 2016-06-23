'use strict';
/**
 * @file control-factory.js
 *
 */

import PlayControl from './components/play-control';
import VolumeControl from './components/volume-control';
import TimelineControl from './components/timeline-control';
import SectionControl from './components/section-control';
import FullscreenControl from './components/fullscreen-control';
import RateControl from './components/rate-control';
import BackwardControl from './components/backward-control';
import SourceControl from './components/source-control';
import SubtitleControl from './components/subtitle-control';
import DownloadControl from './components/download-control';
import KeyBindingInfoControl from './components/keybinding-info-control';

export const C_BACKWARD = 'backward';
export const C_DIVIDER = 'divider';
export const C_DOWNLOAD = 'download';
export const C_FORWARD = 'forward';
export const C_FULLSCREEN = 'fullscreen';
export const C_PLAY = 'play';
export const C_RATE = 'rate';
export const C_SOURCE = 'source';
export const C_SUBTITLE = 'subtitle';
export const C_TIMELINE = 'timeline';
export const C_VOLUME = 'volume';
export const C_SECTION = 'section';
export const C_KEYBINDING_INFO = 'keybinding info';

export default function controlFactory(player, name) {
	switch (name) {
		case C_BACKWARD:
			return new BackwardControl(player);

		case C_DIVIDER:
			return `<div class="divider"></div>`;

		case C_DOWNLOAD:
			return new DownloadControl(player);

		case C_FORWARD:
			return new ForwardControl(player);

		case C_FULLSCREEN:
			return new FullscreenControl(player);

		case C_PLAY:
			return new PlayControl(player);

		case C_RATE:
			return new RateControl(player);

		case C_SOURCE:
			return new SourceControl(player);

		case C_SUBTITLE:
			return new SubtitleControl(player);

		case C_TIMELINE:
			return new TimelineControl(player);

		case C_VOLUME:
			return new VolumeControl(player);

		case C_SECTION:
			return new SectionControl(player);

		case C_KEYBINDING_INFO:
			return new KeyBindingInfoControl(player);

		default:
			return null;
	}
}
