import $ from 'jquery';
import Cookie from '../utils/cookie';
import Component from '../components/Component';
import Entity from './Entity';


class Html5 extends Entity {
	constructor (player, options) {
		super(player, options);
		this.media = this.element[0];

		this.subtitles = [];
		this.bufferRanges = [];

		this.src = this.player.options.src;

		this.element.on('loadstart', this.onLoadStart.bind(this));
		this.element.on('timeupdate', this.onTimeUpdate.bind(this));
		this.element.on('durationchange', this.onDurationChange.bind(this));
		this.element.on('progress', this.onProgress.bind(this));
		this.element.on('seeking', this.onSeeking.bind(this));
		this.element.on('seeked', this.onSeeked.bind(this));
		this.element.on('volumechange', this.onVolumeChange.bind(this));
		this.element.on('click', this.onClick.bind(this));
		this.element.on('dblclick', this.onDblclick.bind(this));
		this.element.on('play', this.onPlay.bind(this));
		this.element.on('pause', this.onPause.bind(this));
		this.element.on('ratechange', this.onRateChange.bind(this));
		this.element.on('ended', this.onEnded.bind(this));
		this.element.on('canplaythrough', this.onCanplayThrough.bind(this));
		this.element.on('waiting', this.onWaiting.bind(this));
		this.element.on('error', this.onError.bind(this));
	}

	onLoadStart(e) {
		this.trigger('loadstart');
	}

	onTimeUpdate(e) {
		this.trigger('timeupdate');
	}

	onDurationChange(e) {
		this.trigger('durationchange');
	}

	onProgress(e) {
		this.trigger('progress');
	}

	onSeeking(e) {
		this.trigger('seeking');
	}

	onSeeked(e) {
		this.trigger('seeked');
	}

	onVolumeChange(e) {
		this.trigger('volumechange');
	}

	onClick() {
		this.trigger('click');
	}

	onDblclick() {
		this.trigger('dblclick');
	}

	onPlay() {
		this.trigger('play');
	}

	onPause() {
		this.trigger('pause');
	}

	onPlaying() {
		this.trigger('playing');
	}

	onRateChange() {
		this.trigger('ratechange');
	}

	onEnded() {
		this.trigger('ended');
	}

	onCanplayThrough() {
		this.trigger('canplaythrough');
	}

	onWaiting() {
		this.trigger('waiting');
	}

	onError(e) {
		this.trigger('error', { code : e.target.error.code });
	}

	/* TODO */
	createElement() {
		this.element = this.options.ctx;
		[

			// Remove controls because we dont not support native controls yet
			'controls',
			'poster',

			// It is unnecessary attrs, this functionality solve CSS
			'height',
			'width'

		].forEach(item => {
			this.element.removeAttr(item);
		});

		// Set attrs from options
		[
			'preload',
			'autoplay',
			'loop',
			'muted'
		].forEach(item => {
			if(this.options[item]) {
				this.element.attr(item, this.options[item]);
				this.element.prop(item, this.options[item]);
			}
		})

		this.element.find('source[data-quality]').each((i, item) => {
			$(item).remove();
		});

		return this.element;
	}

	get currentTime () {
		return this.media.currentTime;
	}

	set currentTime (value) {
		let time;
		if (value > this.duration) {
			time = this.duration
		} else if (value < 0) {
			time = 0
		} else {
			time = value;
		}

		this.player.trigger('timeupdateload', { time });

		this.media.currentTime = time;
	}

	get duration () {
		return this.media.duration;
	}

	get height () {
		return this.media.clientHeight;
	}

	get width () {
		return this.media.clientWidth;
	}

	get rate () {
		return this.media.playbackRate;
	}

	set rate (value) {
		const player = this.player;
		if (value <= player.options.rate.max && value >= player.options.rate.min) {
			this.media.playbackRate = value;
			Cookie.set('rate', value);
		}
		/** TODO: Chanche controls.rate in event handler */
		//controls.rate = this.media.playbackRate;
	}


	set src (src) {
		if(src == null) return;
		if(this.src && this.src.url === src.url) return;

		const time = this.currentTime;
		const rate = this.rate;
		const stop = this.paused;

		this.media.src = src.url;

		this.playbackRate = rate;

		this.currentTime = time;

		this._source = src;

		if (stop) {
			this.pause();
		} else {
			this.play();
		}
	}

	get src () {
		return this._source
	}

	set track (value) {
		for (var i = 0; i < this.media.textTracks.length; i++) {
			if (this.media.textTracks[ i ].language === value)
				this.media.textTracks[ i ].mode = 'showing';
			else
				this.media.textTracks[ i ].mode = 'hidden';
		}
	}

	get paused() {
		return this.media.paused;
	}

	get volume () {
		return this.media.volume;
	}


	get defaultVolume () {
		return Cookie.get('volume') || this.player.options.volume.default;
	}

	set volume (value) {
		const player = this.player;
		if (value > 1) {
			this.media.volume = 1;
		} else if (value < player.options.volume.mutelimit) {
			this.media.volume = 0;
		} else {
			this.media.volume = value;
			Cookie.set('volume', value);
		}
		this.media.mute = (value < player.options.volume.mutelimit);
	}


	get buffered () {
		return this.media.buffered;
	}

	/**
	 * @return {TimeRanges}
	 */
	get seekable () {
		return this.media.seekable;
	}

	/**
	 * @return {TimeRanges}
	 */
	get played() {
		return this.media.played;
	}

	get playedPercentage() {
		let result = 0;
		for (let i = 0; i < this.played.length; i++) {
			result += (this.played.end(i) - this.played.start(i))
		}

		return result / this.duration * 100
	}

	get currentSrc() {
		return this.media.currentSrc;
	}

	init () {
		let dfd = $.Deferred();
		this._initSubtitles();
		this._initVideo()
			.done(() => {
				this._initRate();
				this._initVolume();
				dfd.resolve();
			});
		return dfd.promise();
	}

	supportsFullScreen() {
		if (typeof this.media.webkitEnterFullScreen === 'function') {
			const userAgent = window.navigator && window.navigator.userAgent || '';

			// Seems to be broken in Chromium/Chrome && Safari in Leopard
			if ((/Android/).test(userAgent) || !(/Chrome|Mac OS X 10.5/).test(userAgent)) {
				return true;
			}
		}
		return false;
	}

	enterFullscreen() {
		const video = this.media;
		if (video.paused && video.networkState <= video.HAVE_METADATA) {
			// attempt to prime the video element for programmatic access
			// this isn't necessary on the desktop but shouldn't hurt
			this.play();

			// playing and pausing synchronously during the transition to fullscreen
			// can get iOS ~6.1 devices into a play/pause loop
			setTimeout(() => {
				this.pause();
				video.webkitEnterFullScreen();
			}, 0);
		} else {
			video.webkitEnterFullScreen();
		}
	}

	exitFullscreen() {
		this.media.webkitExitFullScreen();
	}

	togglePlay () {
		if (!this.media.played || this.media.paused) {
			this.play();
		} else {
			this.pause();
		}
	}

	play () {
		let dfd = $.Deferred();
		const playPromise = this.media.play();

		if(playPromise != null) {
			playPromise.then(function() {
				dfd.resolve();
			})
		} else {
			dfd.resolve();
		}
		return dfd.promise();
	}

	pause () {
		let dfd = $.Deferred();
		const pausePromise = this.media.pause();

		if(pausePromise != null) {
			pausePromise.then(function() {
				dfd.resolve();
			})
		} else {
			dfd.resolve();
		}
		return dfd.promise();
	}

	load() {
		return this.media.load()
	}

	_initRate () {
		this.rate = this.defaultRate;
	}

	_initVolume () {
		this.volume = this.defaultVolume;
	}

	_initSubtitles () {
		let _self = this;
		this.element.children('track[kind="subtitles"]').each(function () {
			let language = $(this).attr('srclang');
			let title = $(this).attr('label');
			let src = $(this).attr('src');
			if (title.length > 0 && src.length > 0) {
				_self.subtitles.push({
					title : title,
					src : src,
					language : language
				});
			}
		});
	}

	_initVideo () {
		let dfd = $.Deferred();
		if (this.media.readyState > HTMLMediaElement.HAVE_NOTHING) {
			dfd.resolve()
			this._textTracksHack();
		} else {
			$(this.media).one('loadedmetadata', (e) => {
				dfd.resolve()
				this._textTracksHack();
			});
		}
		dfd.notify();
		return dfd.promise();
	}

	_textTracksHack () {

		// This is generally for Firefox only
		// because it somehow resets track list
		// for video element after DOM manipulation.

		if (this.media.textTracks.length === 0 && this.subtitles.length > 0) {
			this.element.children('track[kind="subtitles"]').remove();
			for (var i in this.subtitles) {
				if (this.subtitles.hasOwnProperty(i)) {
					this.element
						.append($('<track/>')
							.attr('label', this.subtitles[ i ].title)
							.attr('src', this.subtitles[ i ].src)
							.attr('srclang', this.subtitles[ i ].language)
							.attr('id', this.subtitles[ i ].language)
							.attr('kind', 'subtitles'));
				}
			}
		}
	}

}

Component.registerComponent('Html5', Html5);
export default Html5;
