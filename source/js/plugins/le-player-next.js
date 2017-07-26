import $ from 'jquery';

const Player = window.lePlayer;
const Component = Player.getComponent('Component');
const Icon = Player.getComponent('Icon');
const secondsToTime = Player.secondsToTime;

class RadialBar extends Component {

	constructor(player, options) {
		options = $.extend({}, {
			strokeDasharray : 293,
			size : 98
		}, options);
		super(player, options);
		this._circleElement = this.element.find('svg circle');
	}

	createElement() {
		const { strokeDasharray, size } = this.options;
		const template = `
			<div class="leplayer-next__play leplayer-play-button">
                <svg height="100%" version="1.1" viewBox="0 0 ${size} ${size}" class="leplayer-next__svg-spinner">
                    <circle cx="${-size / 2}" cy="${size / 2}" fill-opacity="0" r="46.5" stroke="currentColor" stroke-dasharray="${strokeDasharray}" stroke-dashoffset="${-1 * strokeDasharray}" stroke-width="6" transform="rotate(-90)">
                    </circle>
                </svg>
				<div class="leplayer-next__button leplayer-play-button__button">
				</div>
			</div>
		`.trim()
		this.element = $('<div />').html(template).contents();

		this.element
			.find('.leplayer-next__button')
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
			timeout : 10000,
			auto : false,
			fn : () => {},
		}, options);

		super(player, options);

		this.cancelButton = this.element.find('.leplayer-next__cancel');
		this.player.on('play', () => this.hide());
		this.player.on('loadstart', () => this.hide());
		this.player.on('ended', () => this.show());

		this.player.on('timeupdate', () => {
			if(!this.player.ended) {
				this.hide()
			}
		})

		this.progressButton.element.on('click', this.next.bind(this));
		this.cancelButton.on('click', this.cancel.bind(this));

	}

	createElement() {
		const { timeout, title, description, poster, auto, time } = this.options;
		const template = `
			<div class="leplayer-next">
                <div class="leplayer-next__head">Следующее видео</div>
				<div class="leplayer-next__box">
					<div class="leplayer-next__poster">
						<div class="leplayer-next__mini-title">${title}</div>
						<div class="leplayer-next__cancel" role="button">Отмена</div>
					</div>
					<div class="leplayer-next__content">
                        <div class="leplayer-next__title">${title}</div>
                        <div class="leplayer-next__description">${description}</div>
                        ${time ? `<div class="leplayer-next__time">${secondsToTime(time)}</div>` : ''}
					</div>
				</div>
			</div>

		`.trim();

		this.progressButton = new RadialBar(this.player, { timeout });

		this.element = $('<div />').html(template).contents();

		this.element
			.find('.leplayer-next__poster')
			.append(this.progressButton.element);

		if(poster != null) {
			this.element
				.find('.leplayer-next__poster')
				.css({
					'background-image' : `url(${poster})`
				});
		}

		if(auto) {
			this.addClass('leplayer-next--auto');
		}

		return this.element;
	}

	cancel() {
		this.removeClass('leplayer-next--auto');
	}

	next() {
		if(this.options.url != null) {
			window.location = this.options.url;
		} else if (this.options.fn && $.isFunction(this.options.fn)) {
			this.options.fn(this)
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
	this._nextComponent = new NextComponent(this, pluginOptions)

	this.innerElement.append(this._nextComponent.element);

});
