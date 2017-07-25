import Component from '../components/Component';
import Cookie from '../utils/cookie';
import MediaError from '../MediaError';
import $ from 'jquery';

class Entity extends Component {
	constructor(player, options) {
		super(player, options);
		this._triggerStack = [];
		this._stopListen = false;

		if (this.player.options.src == null) {
			this.player.error = new MediaError('Видеофайл не найден.');
		}

	}

	/**
	 * @override
	 */
	trigger(...args) {
		if(!this._stopListen) {
			this._triggerStack.push(args);
		}
		super.trigger(...args);
	}

	init() {
		this._stopListen = true;
		this._triggerStack.forEach(args => {
			this.trigger(...args);
		});
	}

	createElement() {
		return this.element = $('<div />');
	}

	set poster(url) {
		this._poster = url;
		this.trigger('posterchange', { url });
	}


	get poster() {
		return this._poster;
	}

	get currentTime() {
		return
	}

	set currentTime(value) {

	}

	get duration() {
		return
	}

	set muted(value) {

	}

	get muted() {

	}

	get height() {
		return this.element.innerHeight()
	}

	get width() {
		return this.element.width()
	}

	set rateMax(value) {
		this._rateMax = value;
	}

	set rateMin(value) {
		this._rateMin = value;
	}

	get rateMax() {
		return this._rateMax || this.player.options.rate.max;

	}

	get rateMin() {
		return this._rateMin || this.player.options.rate.min;
	}

	get rate() {
	}

	set rate(value) {
		if(value > this.rateMax || value < this.rateMin) return;
	}

	increaseRate() {
		this.rate += this.player.options.rate.step;
	}

	decreaseRate() {
		this.rate -= this.player.options.rate.step;
	}

	set playbackQuality(name) {
		const levels = this.getAvailableQualityLevels();
		if(!levels.some(obj => name in obj)) {
			return;
		}
	}

	get playbackQuality() {

	}

	get paused() {

	}

	get played() {

	}

	get defaultRate() {
		return Cookie.get('rate') || this.player.options.rate.default
	}

	set src (value) {

	}

	get src() {

	}

	supportsFullScreen() {

	}

	play() {

	}

	pause () {

	}

	load() {
	}

	togglePlay () {
		if (this.paused) {
			this.play();
		} else {
			this.pause();
		}
	}

}
Component.registerComponent('Entity', Entity);
export default Entity;
