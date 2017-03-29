import $ from 'jquery';

const Player = window.lePlayer;
const Component = Player.getComponent('Component');
const Icon = Player.getComponent('Icon');
const PlayButton = Player.getComponent('PlayButton');

class RadialBar extends Component {

	constructor(player, options) {
		options = $.extend({}, {
			strokeDasharray : 293,
			size : 98
		}, options);
		super(player, options);
		this._circleElement = this.element.find('svg circle');
		this.element.on('click', () => this.trigger('click'));
	}

	createElement() {
		const { strokeDasharray, size } = this.options;
		const template = `
			<div class="radial-bar leplayer-play-button">
				<svg height="100%" version="1.1" viewBox="0 0 ${size} ${size}" class="radial-bar__svg-spinner">
				<circle cx="${-size / 2}" cy="${size / 2}" fill-opacity="0" r="46.5" stroke="currentColor" stroke-dasharray="${strokeDasharray}" stroke-dashoffset="${-1 * strokeDasharray}" stroke-width="6" transform="rotate(-90)">
				</circle>
				</svg>
				<div class="radial-bar__button leplayer-play-button__button"></div>
			</div>
		`.trim()
		this.element = $('<div />').html(template).contents();

		this.element
			.find('.radial-bar__button')
			.append(new Icon(this.player, { iconName : 'play' }).element);

		return this.element;

	}

	startAnimation(cb) {
		this._circleElement
			.stop()
			.animate({
				'stroke-dashoffset' : -2 * this.options.strokeDasharray
			}, this.options.timeout, cb);
	}

	stopAnimation() {
		this._circleElement.stop();
	}

	set radial(value) {
		this._radial = value;
		this._circleElement.css('stroke-dashoffset', -(value + 1) * this.options.strokeDasharray);
	}

	get radial() {
		return this._radial;
	}
}



class NextComponent extends Component {

	constructor(player, options) {
		options = $.extend({}, {
			title : '',
			description : '',
			timeout : 5000,

		}, options);
		console.log('in constructor', options);

		super(player, options);

		this.url = this.options.url;
		this.cancelButton = this.element.find('.leplayer-next__cancel');
		this.player.on('play', () => this.hide());
		this.player.on('loadstart', () => this.hide());
		this.player.on('ended', () => this.show());

		this.player.on('timeupdate', () => {
			if(!this.player.ended) {
				this.hide()
			}
		})

		this.progressButton.on('click', this.next.bind(this));
		this.cancelButton.on('click', this.cancel.bind(this));

	}

	createElement() {
		const { timeout, title, description, poster, auto } = this.options;
		console.log(poster);
		const template = `
			<div class="leplayer-next">
				<div class="leplayer-next__header">
					<div class="leplayer-next__head">Следующее видео</div>
					<div class="leplayer-next__title">${title}</div>
					<div class="leplayer-next__description">${description}</div>
				</div>

				<span class="_button-replace"></span>

				<div class="leplayer-next__footer">
					<div class="leplayer-next__cancel" role="button">Отмена</div>
				</div>
			</div>

		`.trim();

		this.progressButton = new RadialBar(this.player, { timeout });

		this.element = $('<div />').html(template).contents();

		this.element
			.css({
				'background-image' : `url(${poster})`
			});

		this.element
			.find('._button-replace')
			.replaceWith(this.progressButton.element);

		if(auto) {
			this.addClass('leplayer-next--auto');
		}

		return this.element;
	}

	cancel() {
		this.cancelled = true;
		this.hide();
	}

	next() {
		if(this.url) {
			window.location = this.options.url;
		}
	}

	show() {
		if(this.cancelled) return;

		this.element.show();

		if(this.options.auto) {
			this.progressButton.startAnimation();
			this._timeout = setTimeout(() => this.next(), this.options.timeout);
		}
	}

	hide() {
		this.element.hide();

		if(this.options.auto) {
			this.progressButton.stopAnimation();
			this.progressButton.radial = 0;
			clearTimeout(this._timeout);
		}
	}

}


Player.plugin('next', function(pluginOptions) {
	console.log(pluginOptions);
	this._nextComponent = new NextComponent(this, pluginOptions)

	this.innerElement.append(this._nextComponent.element);

});
