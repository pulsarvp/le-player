import $ from 'jquery';

const Player = window.lePlayer;
const Component = Player.getComponent('Component');
const Icon = Player.getComponent('Icon');

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


class NextComponent extends Component {

	constructor(player, options) {
		options = $.extend({}, {
			title : '',
			subtitle : '',
			delay : 5000
		}, options);

		super(player, options);
		this._hidden = true;
		this.url = this.options.url;
		this.cancelButton = this.element.find('.leplayer-next__cancel');
		this.progressButton.on('click', this.next.bind(this));

		this.cancelButton.on('click', () => this.cancel());

		this.player.on('play', () => this.hide());
		this.player.on('loadstart', () => this.hide());
		this.player.on('ended', () => this.show());

		this.player.on('timeupdate', () => {
			if(!this.player.ended) {
				this.hide()
			}
		})

	}

	createElement() {
		const template = `
			<div class="leplayer-next">
				<div class="leplayer-next__header">
					<div class="leplayer-next__head">Следующее</div>
					<div class="leplayer-next__title">${this.options.title}</div>
					<div class="leplayer-next__subtitle">${this.options.subtitle}</div>
				</div>

				<span class="_button-replace"></span>

				<div class="leplayer-next__footer">
					<button class="leplayer-next__cancel">Отмена</button>
				</div>
			</div>

		`.trim();

		this.progressButton = new RadialBar(this.player);


		this.element = $('<div />').html(template).contents();

		this.element
			.css({
				'background-image' : `url(${this.options.image})`
			});

		this.element
			.find('._button-replace')
			.replaceWith(this.progressButton.element);

		return this.element;
	}

	next() {
		if(this.url) {
			window.location = this.url;
		}
	}

	hide() {
		if(this._hidden) return;
		this.element.hide();
		clearTimeout(this._timeoutId);
		this.progressButton.timeout = 0;
		this.progressButton.radial = 0;
	}

	cancel() {
		this.cancelled = true;
		this.hide();
	}

	show() {
		if(this.cancelled) return;

		this._hidden = false;
		this.element.show();

		if(!this.options.auto) return;

		setTimeout(() => {
			this.progressButton.timeout = this.options.delay;
			this.progressButton.radial = 100;

			this._timeoutId = setTimeout(() => {
				this.next();
			}, this.options.delay)
		})
	}
}


Player.plugin('next', function(pluginOptions) {
	this._nextComponent = new NextComponent(this, pluginOptions)

	this.innerElement.append(this._nextComponent.element);

});
