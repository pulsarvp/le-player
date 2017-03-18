import $ from 'jquery';
import Cookie from '../utils/cookie';
import Component from '../components/Component';
import MediaError from '../MediaError';
import { IS_SAFARI, IS_IOS, IS_ANDROID } from '../utils/browser';


class Html5 extends Component {
	constructor (player, options) {
		super(player, options)
		this.player = player;
		this.media = this.element[0];

		this.subtitles = [];
		this.bufferRanges = [];

		if (this.player.options.src == null) {
			this.player.error = new MediaError('Видеофайл не найден.');
		}

		this.src = this.player.options.src;
	}

	/* TODO */
	createElement() {
		return this.element = $(this.options.ctx);
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

	get defaultRate() {
		return Cookie.get('rate') || this.player.options.rate.default
	}


	set rate (value) {
		const player = this.player;
		let max = player.options.rate.max;
		let min = player.options.rate.min;

		if(IS_SAFARI || IS_IOS || IS_ANDROID) {
			max = Html5.MOBILE_MAX_RATE;
			min = Html5.MOBILE_MIN_RATE;
		}

		if(IS_SAFARI) {
			max = Html5.SAFARI_MAX_RATE;
			min = Html5.SAFARI_MIN_RATE;
		}

		if (value <= max && value >= min) {
			this.media.playbackRate = value;
			Cookie.set('rate', value);
		}
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

	startBuffering() {
		const volume = this.volume;
		this.volume = 0
		return this.play()
			.then(() => {
				return this.pause();
			})
			.then(() => {
				this.currentTime = 0;
				this.volume = volume;
			})
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

	seek (time) {
		this.media.currentTime = time;
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


/**
 * Min rate for android and ios
 */
Html5.MOBILE_MIN_RATE = 0.5;

/**
 * Max rate for android and ios
 */
Html5.MOBILE_MAX_RATE = 2


Html5.SAFARI_MIN_RATE = 0.5;

Html5.SAFARI_MAX_RATE = 2;

Component.registerComponent('Html5', Html5);
export default Html5;
