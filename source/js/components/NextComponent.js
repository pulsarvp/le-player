import $ from 'jquery';

/**
 * Component for plugin le-player-next
 */

const Player = window.lePlayer;
const Component = Player.getComponent('Component');
const Icon = Player.getComponent('Icon');
const PlayButton = Player.getComponent('PlayButton');

class RadialBar extends Component {

	constructor(player, options) {
		super(player, options);
		this.element.on('click', () => this.trigger('click'));
	}

	createElement() {
		const template = `
			<div class="radial-bar">
				<div class="radial-bar__circle">
					<div class="radial-bar__mask radial-bar__mask--main">
						<div class="radial-bar__fill js-radial-fill"></div>
					</div>
					<div class="radial-bar__mask">
						<div class="radial-bar__fill js-radial-fill"></div>
					</div>
				</div>
				<div class="radial-bar__button"></div>
			</div>
		`.trim()
		this.element = $('<div />').html(template).contents();

		this.element
			.find('.radial-bar__button')
			.append(new Icon(this.player, { iconName : 'play' }).element)

		return this.element;

	}

	set radial(value) {
		this._radial = value;
		$(".radial-bar__mask--main").css('transform', 'rotate(' + 1.8 * value + 'deg)');
		$(".radial-bar__fill").css('transform', 'rotate(' + 1.8 * value + 'deg)');
	}

	set timeout(value) {
		this._timeout = value;
		$('.radial-bar__fill').css('transition-duration', value / 1000 + 's');
		$('.radial-bar__mask').css('transition-duration', value / 1000 + 's');
	}
}

class NextPlayButton extends PlayButton {

	onClick(e) {
		e.preventDefault();
		this.trigger('click');
	}
	_onDbclick() {
		return false;
	}
}


class NextComponent extends Component {

	constructor(player, options={
		title : '',
		subtitle : ''
	}) {
		super(player, options);
		this.url = this.options.url;
		this.cancel = this.element.find('.leplayer-next__cancel');
		this.progressButton.on('click', this.next.bind(this));
		this.cancel.on('click', this.cancel.bind(this));
	}

	createElement() {
		const template = `
			<div class="leplayer-next">
				<div class="leplayer-next__header">
					<div class="leplayer-next__head">Следующее</div>
					<div class="leplayer-next__title"${this.options.title}</div>
					<div class="leplayer-next__subtitle">${this.options.subtitle}</div>
				</div>
				<span class="_button-replace"></span>
				<div class="leplayer-next__footer">
					<div class="leplayer-next__cancel">Отмена</div>
				</div>
			</div>

		`.trim()
		this.progressButton = new RadialBar(this.player);

		this.element = $('<div />').html(template).contents();

		this.element
			.css({
				'background-image' : `url(${this.options.image})`
			})
			.find('._button-replace')
			.replace(this.progressButton.element);

		return this.element;
	}

	cancel() {
		console.log('click')
		clearTimeout(this._timeoutId);
	}

	next() {
		console.log('next');
		//window.location = this.url;
	}

	show() {
		setTimeout(() => {
			this.progressButton.timeout = 5000;
			this.progressButton.radial = 100;

			this._timeoutId = setTimeout(() => {
				this.next();
			}, 5000)
		})
	}
}

export default NextComponent;
