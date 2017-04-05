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

		this.src = this.player.options.src;

		this.element.on('click', this.onClick.bind(this));
		this.element.on('dblclick', this.onDblclick.bind(this));
	}

	set src(src) {
		if(src == null) return;
		if(this.src && this.src.url === src.url) return;
		this.videoId = Youtube.parseUrl(src.url);

		if(this.player.options.poster) {
			this.poster = this.player.options.poster
		} else {
			this.poster = 'https://img.youtube.com/vi/' + this.videoId + '/0.jpg';
		}
	}

	onClick(event) {
		this.trigger('click');
	}

	onDblclick() {
		this.trigger('dblclick');
	}

	get currentTime() {
		return this.ytPlayer? this.ytPlayer.getCurrentTime() : 0;
	}

	set currentTime(value) {
		if(this.lastState === YT.PlayerState.PAUSED) {
			this.timeBeforeSeek = this.currentTime;
		}

		if (!this.isSeeking) {
			this.wasPausedBeforeSeek = this.paused;
		}

		this.isSeeking = true;
		this.ytPlayer.seekTo(value, true);
		this.trigger('timeupdate');
		this.trigger('seeking');

		this.emitTimeupdate();
	}

	get duration() {
		return this.ytPlayer && this.ytPlayer.getDuration ? this.ytPlayer.getDuration() : NaN;
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
		super.rate = value;
		this.ytPlayer.setPlaybackRate(value);
		this.trigger('ratechange');
	}

	increaseRate() {
		const index = this.availableRates.indexOf(this.rate);
		if(index + 1 >= this.availableRates.length) return;
		return this.rate = this.availableRates[index + 1];
	}

	decreaseRate() {
		const index = this.availableRates.indexOf(this.rate);
		if(index - 1 < 0) return;
		return this.rate = this.availableRates[index - 1];
	}

	get volume() {
		return this.ytPlayer ? this.ytPlayer.getVolume() / 100.0 : 1;
	}

	set volume(value) {
		this.ytPlayer.setVolume(value * 100);

		setTimeout(() => {
			this.trigger('volumechange');
		}, 50)

	}

	supportsFullScreen() {
		return true;
	}

	play() {
		this.ytPlayer.playVideo();
		this.trigger('play');
	}

	pause() {
		this.ytPlayer.pauseVideo();
	}


	init() {
		super.init();
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
		this._initPromise = $.Deferred();
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
				videoId : this.videoId,
				width : globalOptions.width || '100%',
				playerVars : ytOptions,
				events : {
					onReady : this.onYTPReady.bind(this),
					onStateChange : this.onYTPStateChange.bind(this),
					onPlaybackRateChange : this.onYTPRateChange.bind(this)
				}
			})
		})
		return this._initPromise.promise();
	}


	setAvailablePlaybackRates() {
		this.availableRates = this.ytPlayer.getAvailablePlaybackRates();
		this.rateMin = this.availableRates[0];
		this.rateMax = this.availableRates[this.availableRates.length - 1];
	}

	onYTPReady(e) {
		this._initPromise.resolve();
		this.setAvailablePlaybackRates();
	}

	onYTPRateChange(e) {
		this.trigger('ratechange');
	}

	onYTPStateChange(e) {
		const state = e.data;
		if(state === this.lastState) {
			return;
		}

		this.lastState = state;
		switch(state) {
		case -1:
			this.trigger('loadstart');
			this.trigger('loadedmetadata');
			this.trigger('durationchange');
			this.trigger('ratechange');
			this.trigger('volumechange');
			break;

		case YT.PlayerState.ENDED:
			this.trigger('ended');
			break;

		case YT.PlayerState.PLAYING:
			this.paused = false;
			this.trigger('timeupdate');
			this.trigger('durationchange');
			this.trigger('playing');

			if(this.isSeeking) {
				this.onSeeked();
			}

			this.emitTimeupdate();
			break;

		case YT.PlayerState.PAUSED:
			this.trigger('canplay');

			if(this.isSeeking) {
				this.onSeeked();
			} else {
				this.trigger('pause');
				this.paused = true;
			}
			break;

		case YT.PlayerState.BUFFERING:
			this.player.trigger('timeupdate');
			this.player.trigger('waiting');
			break;
		}

	}

	onSeeked() {
		clearInterval(this.seekingInterval);
		this.isSeeking = false;

		if (this.wasPausedBeforeSeek) {
			this.pause();
		}

		this.trigger('seeked');
	}

	emitTimeupdate() {
		clearInterval(this.seekingInterval);

		this.seekingInterval = setInterval(() => {
			if(this.lastState === YT.PlayerState.PAUSED) {
				clearInterval(this.seekingInterval);
			} else if(this.currentTime !== this.timeBeforeSeek) {
				this.trigger('timeupdate');
			}
		}, 250)
	}
	static parseUrl(url) {
		let result = null;
		const regex = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
		const match = url.match(regex);
		if(match && match[2].length === 11) {
			result = match[2];
		}
		return result;
	}
}

Component.registerComponent('Youtube', Youtube);
export default Youtube;
