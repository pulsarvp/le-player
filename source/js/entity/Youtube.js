import $ from 'jquery';
import Entity from './Entity';
import Component from '../components/Component';


function loadScript(url) {
	return $.getScript(url);
}

/* global YT */
const apiLoaded = loadScript('https://www.youtube.com/iframe_api');

class Youtube extends Entity {
	constructor(player, options) {
		super(player, options);
		this._paused = true;

		this.src = this.player.options.src;

		this.player.addClass('leplayer--youtube');
		this.element.on('click', this.onClick.bind(this));
		this.element.on('dblclick', this.onDblclick.bind(this));
	}

	set src(src) {
		if(src == null) return;
		if(this.src && this.src.url === src.url) return;

		const url = src.url || src.id;

		this.videoId = Youtube.parseUrl(url);

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
		return (this.ytPlayer) ?
			(this.lastState !== YT.PlayerState.PLAYING && this.lastState !== YT.PlayerState.BUFFERING)
			: true;

	}


	get rate() {
		return this.ytPlayer.getPlaybackRate();
	}

	set rate(value) {
		super.rate = value;
		this.ytPlayer.setPlaybackRate(value);
		this.trigger('ratechange');
	}

	set muted(value) {
		if(value) {
			this.ytPlayer.mute();
		} else {
			this.ytPlayer.unMute();
		}

		setTimeout(() => {
			this.trigger('volumechange');
		}, 50);
	}

	get muted() {
		return this.ytPlayer.isMuted();
	}

	get defaultVolume() {
		return this.volume || this.player.options.volume.default;
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

	getAvailableQualityLevels() {
		const arr = this.ytPlayer.getAvailableQualityLevels();
		const index = arr.indexOf('auto');

		if(index > -1) {
			arr.splice(index, 1);
		}

		return arr.map(item => ({
			title : Youtube.QUALITY_NAMES[item] || item,
			name : item
		}));
	}

	set playbackQuality(name) {
		super.playbackQuality = name;
		const time = this.currentTime;
		const status = this.ytPlayer.getPlayerState();

		if(status !== YT.PlayerState.UNSTARTED && status !== YT.PlayerState.CUED) {
			this.ytPlayer.pauseVideo();
		}

		this._playbackQuality = name;
		this.ytPlayer.setPlaybackQuality(name);
		this.ytPlayer.seekTo(time);

		if(status !== YT.PlayerState.PAUSED) {
			this.ytPlayer.playVideo();
		}

	}

	get playbackQuality() {
		return this.ytPlayer.getPlaybackQuality();
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
		this.trigger('pause');
	}


	init() {
		super.init();
		return apiLoaded
			.then(() => this.initYTPlayer())
	}

	createElement() {
		this.element = $('<div />')
			.addClass('leplayer__youtube-wrapper')
			.attr('tabindex', '0');
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
			autoplay : globalOptions.autoplay ? 1 : 0,
			loop : globalOptions.loop ? 1 : 0,
			iv_load_policy: 3,
			controls : 0,
			modestbranding : 1,
			rel : 0,
			showinfo : 0,
			cc_load_policy: 1,
			disablekb : 0,
			fs : 0,
			start : globalOptions.time
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
					onPlaybackRateChange : this.onYTPRateChange.bind(this),
					onPlaybackQualityChange : this.onYTPPlaybackQualityChange.bind(this)
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

	onYTPPlaybackQualityChange(e) {
		const data = e.data;
		this.trigger('qualitychange', data);
	}

	onYTPStateChange(e) {
		const state = e.data;
		if(state === this.lastState) {
			return;
		}

		this.lastState = state;
		switch(state) {
		case YT.PlayerState.UNSTARTED:
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
			}
			break;

		case YT.PlayerState.BUFFERING:
			this.player.trigger('timeupdate');
			this.player.trigger('waiting');
			this.ytPlayer.setPlaybackQuality(this._playbackQuality);
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
		const regex = Youtube.URL_REGEX;
		const match = url.match(regex);
		if(url.length === 11 ) {
			result = url;
		} else if(match && match[2].length === 11) {
			result = match[2];
		}
		console.log(result);
		return result;
	}
}

Youtube.URL_REGEX = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;

Youtube.QUALITY_NAMES = {
	tiny : '140p',
	small : '240p',
	medium : '360p',
	large : '480p',
	hd720 : '720p',
	hd1080 : '1080p',
	highres : 'HD',
	auto : 'Авто'
}

Component.registerComponent('Youtube', Youtube);
export default Youtube;
