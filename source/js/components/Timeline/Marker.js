import $ from 'jquery';
import Component from '../Component';

class Marker extends Component {
	constructor(player, options) {

		options = $.extend({}, {
			drag : false,
			className : ''
		}, options);

		super(player, options);
		this.element.on('mousedown', this._onMousedown.bind(this));

		$(document).on({

			mousemove : (e) => {
				if (!this.drag) return;
				this.element.trigger('leplayer_mousemove', { x : e.pageX });
			},

			mouseup : (e) => {
				if (!this.drag) return;
				this.drag = false;
				this.markerTime.hide();
				this.markerPreview.hide();
				this.element.trigger('leplayer_mouseup', { x : e.pageX });
			}
		});
	}

	set drag(value) {
		this._drag = value;
		this.element.toggleClass('time-marker--drag', value);
	}

	get drag() {
		return this._drag;
	}

	_onMousedown(e) {
		if (e.which !== 1) return;
		e.preventDefault();
		if(this.options.drag) {
			this.drag = true;
		}
		this.element.trigger('leplayer_mousedown');
	}

	createElement() {
		// Marker of current time on timeline
		this.markerTime = $('<div />')
			.addClass('time')
			.hide();

		// Preview frame
		this.markerPreview = $('<img />')
			.addClass('preview')
			.hide();

		return this.element = $('<div />')
			.addClass(`time-marker ${this.options.className}`)
			.append(this.markerPreview)
			.append(this.markerTime)

	}
}

Component.registerComponent('Marker', Marker);
export default Marker;
