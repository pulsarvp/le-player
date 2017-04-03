import $ from 'jquery';
import Entity from './Entity';
import Component from '../components/Component';

function loadScript(url) {
	return $.getScript(url);
}

const apiLoaded = loadScript('https://www.youtube.com/iframe_api');

class Youtube extends Entity {
	constructor(player, options) {
		super(player, options);
		this._paused = true;

		this.ytPlayer = {
			getDuration : () => {
				return 0;
			},
			getCurrentTime : () => 0
		}

		this.element.on('click', this.onClick.bind(this));
		this.element.on('dblclick', this.onDblclick.bind(this));
	}

	onClick(event) {
		this.trigger('click');
	}

	onDblclick() {
		this.trigger('dblclick');
	}

	get currentTime() {
		return this.ytPlayer.getCurrentTime();
	}

	set currentTime(value) {
		this.ytPlayer.seekTo(value);
	}

	get duration() {
		return this.ytPlayer ? this.ytPlayer.getDuration() : NaN;
	}

	get paused() {
		return this._paused;
	}
	set paused(value) {
		this._paused = value;
	}

	get rate() {
		return this.ytPlayer.getPlaybackRate();
	}

	set rate(value) {
		this.ytPlayer.setPlaybackRate(value);
		this.trigger('ratechange');
	}

	get volume() {
		return this.ytPlayer ? this.ytPlayer.getVolume() / 100.0 : 1;
	}

	set volume(value) {
		this.ytPlayer.setVolume(value * 100);

		this.trigger('volumechange');

	}

	supportsFullScreen() {
		return true;
	}

	play() {
		this.ytPlayer.playVideo();
	}

	pause() {
		this.ytPlayer.pauseVideo();
	}


	init() {
		return apiLoaded
			.then(() => this.initYTPlayer())
	}

	createElement() {
		this.element = $('<div />')
			.addClass('leplayer__youtube-wrapper');
		this.youtubeElement = $('<div />')
			.addClass('leplayer__youtube');
		this.blocker = $('<div />')
			.addClass('leplayer__youtube-blocker');

		return this.element
			.append(this.blocker)
			.append(this.youtubeElement);
	}

	initYTPlayer() {
		const dfd = $.Deferred();
		const globalOptions = this.player.options;
		let ytOptions = {
			controls : 0,
			modestbranding : 1,
			rel : 0,
			showinfo : 0,
			loop : globalOptions.loop ? 1 : 0,
			autoplay : globalOptions.autoplay ? 1 : 0,
			disablekb : 0,
			fs : 0,
			time : 0
		};

		YT.ready(() => {
			this.options.ctx.replaceWith(this.element);
			this.ytPlayer = new YT.Player(this.youtubeElement[0], {
				videoId : globalOptions.youtubeVideoId,
				width : globalOptions.width || '100%',
				playerVars : ytOptions,
				events : {
					onReady : () => dfd.resolve(),
					onStateChange : this.onPlayerStateChange.bind(this)

				}
			})
		})
		return dfd.promise();
	}

	onPlayerStateChange(e) {
		const state = e.data;
		if(state === this._state) {
			return;
		}

		this._state = state;
		switch(state) {
			case -1:
				this.trigger('loadstart');
				this.trigger('loadedmetadata');
				this.trigger('durationchange');
				this.trigger('ratechange');
				break;

			case YT.PlayerState.ENDED:
				this.trigger('ended');
				break;

			case YT.PlayerState.PLAYING:
				this.trigger('timeupdate');
				this.trigger('durationchange');
				this.trigger('playing');
				this.trigger('play');
				this.paused = false;
				break;

			case YT.PlayerState.PAUSED:
				this.trigger('canplay');
				this.trigger('pause');
				this.paused = true;
				break;

			case YT.PlayerState.BUFFERING:
				this.trigger('timeupdate');
				this.trigger('waiting');
				break;
		}

	}
}

Component.registerComponent('Youtube', Youtube);
export default Youtube;
