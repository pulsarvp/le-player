(function($) {
	'use strict';

	var Player = function (element, opts) {
		var options = $.extend(true, {
			autoplay: false,
			height: 'auto',
			loop: false,
			muted: false,
			preload: 'metadata',
			poster: null,
			width: 'auto',
			rate: {
				step: 0.25,
				min: 0.5,
				max: 4.0
			},
			playback: {
				step: {
					short: 5,
					medium: 30,
					long: 60
				}
			},
			volume: {
				step: 0.1
			},
			controls: [
				{
					element: null,
					controls: [
						'play', 'volume', 'divider', 'timeline', 'divider', 'fullscreen'
					]
				},
				{
					element: null,
					controls: [
						'rate', 'divider', 'backward', 'divider', 'captions', 'divider', 'download'
					]
				}
			]

		}, opts);

		var sources = [];
		var volume = 0.5;
		var video = element[0];
		var controls = {};

		// Check if element is corectly selected.
		if (element.prop('tagName').toLowerCase() != 'video') {
			console.warn('Incorrect element selected.');
			return this;
		}

		// Set source.
		element.children('source').each(function () {
			var src = $(this).attr('src');
			if (src)
				sources.push(src);
		});
		if (sources.length == 0) {
			var src = element.attr('src');
			if (src) {
				sources.push(element.attr('src'));
			}
		}
		if (sources.length == 0) {
			console.warn('No sources found.');
			return this;
		}
		element.attr('src', sources[0]);

		// Load and set options.
		// Controls.
		element.removeAttr('controls');

		// Height.
		var h = element.attr('height');
		if (h) {
			options.height = h + 'px';
			element.removeAttr('height');
		}
		element.css('height', options.height);

		// Width.
		var w = element.attr('width');
		if (w) {
			options.width = w + 'px';
			element.removeAttr('width');
		}
		element.css('width', options.width);

		// Poster.
		var p = element.attr('poster');
		if (p)
			options.poster = p;
		else if (options.poster)
			element.attr('poster', options.poster);

		// Autoplay, loop, muted.
		var attrs = ['autoplay', 'loop', 'muted'];
		for (var i in attrs) {
			var a = element.attr(attrs[i]);
			if (a)
				options[attrs[i]] = true;
			else if (options[attrs[i]])
				element.attr(attrs[i], '');
			else
				element.removeAttr(attrs[i]);
			element.prop(attrs[i], options[attrs[i]]);
		}

		// Preload.
		var p = element.attr('preload');
		if (p) {
			p = p.toLowerCase();
			if (p == 'none' || p == 'metadata')
				options.preload = p;
			else
				options.preload = 'auto';
		}
		element.attr('preload', options.preload);
		// end Setting options.

		var createControl = function (type) {
			switch (type) {
				case 'backward':
					controls.backward = $('<div />').addClass('control backward').append($('<i />').addClass('fa fa-undo'));
					return controls.backward;

				case 'captions':
					controls.captions = $('<div />').addClass('control captions').append($('<i />').addClass('fa fa-commenting-o'));
					return controls.captions;

				case 'divider':
					return $('<div />').addClass('divider');

				case 'download':
					controls.download = $('<div />').addClass('control download').append($('<i />').addClass('fa fa-download'));
					return controls.download;

				case 'forward':
					controls.forward = $('<div />').addClass('control forkward').append($('<i />').addClass('fa fa-redo'));
					return controls.forward;

				case 'fullscreen':
					controls.fullscreen = $('<div />').addClass('control fullscreen').append($('<i />').addClass('fa fa-arrows-alt'));
					return controls.fullscreen;

				case 'play':
					controls.play = $('<div />').addClass('control play').append($('<i />').addClass('fa fa-play'));
					return controls.play;

				case 'rate':
					controls.rate = {
						down: $('<div />').addClass('control rate-down').append($('<i />').addClass('fa fa-backward')),
						up: $('<div />').addClass('control rate-down').append($('<i />').addClass('fa fa-forward')),
						current: $('<div />').addClass('control-text rate-current'),
						display: function () {
							this.current.html('×' + video.playbackRate.toFixed(2));
						},
						increase: function(){
							if (video.playbackRate < options.rate.max) {
								this.down.removeClass('disabled');
								video.playbackRate += options.rate.step;
								this.display();
							}
							else
								this.up.addClass('disabled');

						},
						decrease: function(){
							if (video.playbackRate > options.rate.min) {
								this.up.removeClass('disabled');
								video.playbackRate -= options.rate.step;
								this.display();
							}
							else
								this.down.addClass('disabled');
						}
					};
					return $('<div />').addClass('control-container').append(controls.rate.down).append(controls.rate.current).append(controls.rate.up);

				case 'timeline':
					controls.time = {
						current: $('<div />').addClass('control-text time-current'),
						total: $('<div />').addClass('control-text time-total'),
						line: $('<div />').addClass('timeline')
					};
					return $('<div />').addClass('timeline-container').append($('<div />').addClass('timeline-subcontainer').append(controls.time.current).append(controls.time.line).append(controls.time.total));

				case 'volume':
					controls.volume = {
						active: $('<div/>').addClass('volume-active'),
						marker: $('<div/>').addClass('volume-marker'),
						icon: $('<div/>').addClass('volume-icon').append($('<i />').addClass('fa fa-volume-down')),
						set: function (value) {
							var icon = this.icon.children('.fa').eq(0);
							icon.removeClass();
							if (value < 0.05) {
								video.muted = true;
								icon.addClass('fa fa-volume-off');
							}
							else {
								video.muted = false;
								video.volume = value;
								if (value < 0.5)
									icon.addClass('fa fa-volume-down');
								else
									icon.addClass('fa fa-volume-up');
								this.setCookie(value);
							}
							var p = Math.round(value * 100).toString() + '%';
							this.active.css('height', p);
							this.marker.css('bottom', p);
						},
						toggleMuted: function () {
							if (video.muted == true)
								this.set(this.getCookie());
							else
								this.set(0);
						},
						setCookie: function (value) {
							var d = new Date();
							d.setDate(d.year + 1);
							document.cookie = 'leplayer_volume=' + value + ';expires=' + d.toString();
						},
						getCookie: function () {
							var value = document.cookie.replace(/(?:(?:^|.*;\s*)leplayer_volume\s*\=\s*([^;]*).*$)|^.*$/, "$1");
							return value ? value : 0.4;
						}
					};
					controls.volume.line = $('<div/>').addClass('volume-line').append(controls.volume.active).append(controls.volume.marker);
					controls.volume.container = $('<div />').addClass('control volume-container').append(controls.volume.icon).append($('<div />').addClass('volume-slider').append(controls.volume.line));
					return controls.volume.container;

				default:
					return null;
			}
		};

		var initControl = function (type) {
			switch (type) {
				case 'fullscreen':
					controls.fullscreen.click(function () {
						toggleFullscreen();
					});
					break;

				case 'play':
					controls.play.click(function () {
						togglePlay();
					});
					break;

				case 'rate':
						controls.rate.display();
						controls.rate.up.click(function(){
							controls.rate.increase();
						});
						controls.rate.down.click(function(){
							controls.rate.decrease();
						});
					break;

				case 'volume':
					var drag = false;
					var range = {bottom: 0, height: 0, top: 0};

					controls.volume.marker.on('mousedown', function (e) {
						drag = true;
						range.height = controls.volume.line.height();
						range.top = controls.volume.line.offset().top;
						range.bottom = range.top + range.height;
					});

					$(document).on('mousemove', function (e) {
						if (drag && e.pageY >= range.top && e.pageY <= range.bottom) {
							controls.volume.set((range.bottom - e.pageY) / range.height);
						}
					}).on('mouseup', function (e) {
						drag = false;
					});

					controls.volume.line.click(function (e) {
						range.height = controls.volume.line.height();
						range.top = controls.volume.line.offset().top;
						range.bottom = range.top + range.height;
						if (e.pageY >= range.top && e.pageY <= range.bottom) {
							controls.volume.set((range.bottom - e.pageY) / range.height);
						}
					});

					controls.volume.icon.click(function () {
						controls.volume.toggleMuted();
					});

					controls.volume.set(controls.volume.getCookie());
					break;
			}
		};

		var overlay = $('<div />').addClass('play-overlay');
		var togglePlay = function () {
			if (!video.played || video.paused) {
				overlay.hide();
				video.play();
				if (typeof controls.play != 'undefined')
					controls.play.children('.fa').removeClass('fa-play').addClass('fa-pause');
			}
			else {
				overlay.show();
				video.pause();
				if (typeof controls.play != 'undefined')
					controls.play.children('.fa').removeClass('fa-pause').addClass('fa-play');
			}
		};
		var toggleFullscreen = function () {
			if (video.requestFullScreen)
				video.requestFullScreen();
			else if (video.webkitRequestFullScreen)
				video.webkitRequestFullScreen();
			else if (video.mozRequestFullScreen)
				video.mozRequestFullScreen();
			else
				console.warn('Cannot toggle fullscreen.');
		};

		// Move video to container and add other stuff.
		var videoContainer = $('<div />').addClass('leplayer-video');
		var container = $('<div />').addClass('leplayer-container').append(videoContainer);
		element.wrap(container);
		videoContainer = element.parent();
		videoContainer.append(overlay);
		container = videoContainer.parent();

		setTimeout(function () {
			overlay.css('line-height', overlay.height() + 'px').html('<i class="fa fa-play"></i>');
		}, 100);
		overlay.click(function () {
			togglePlay();
		});

		// Hot keys.
		element.keypress(function (e) {
			if (e.charCode == 32)
				togglePlay();
		}).click(function () {
			togglePlay();
		});

		// Display controls.
		for (var i in options.controls) {
			var el = options.controls[i].element;
			if (el == null)
				el = $('<div />').addClass('leplayer-controls');
			if (el.length == 0) {
				console.warn('Error creating controls.');
			}
			else {
				for (var k in options.controls[i].controls) {
					var c = createControl(options.controls[i].controls[k]);
					if (c != null && c.length > 0) {
						el.append(c);
						initControl(options.controls[i].controls[k]);
					}
					else
						console.warn('Cannot create ' + options.controls[i].controls[k] + ' control.');
				}
				container.append(el);
			}
		}
	};

	$.fn.lePlayer = function (options) {
		return this.each(function () {
			Player($(this), options);
		});
	};
}(jQuery));