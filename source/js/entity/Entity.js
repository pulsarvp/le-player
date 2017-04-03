/**
 * Created by adinvadim on 31/03/2017.
 */
import Component from '../components/Component';
import Cookie from '../utils/cookie';
import MediaError from '../MediaError';

class Entity extends Component {
	constructor(player, options) {
		super(player, options);
		this.subtitles = [];
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

	get height() {
		return this.element.height()
	}

	get width() {
		return this.element.width()
	}

	get rate() {

	}

	set rate(value) {

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
