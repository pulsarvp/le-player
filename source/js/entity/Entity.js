/**
 * Created by adinvadim on 31/03/2017.
 */
import Component from '../components/Component';
import Cookie from '../utils/cookie';

class Entity extends Component {
	constructor(player, options) {
		super(player, options);

		if (this.player.options.src == null) {
			this.player.error = new MediaError('Видеофайл не найден.');
		}

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

}
Component.registerComponent('Entity', Entity);
export default Entity;
